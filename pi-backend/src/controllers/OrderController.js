const jwt = require('jsonwebtoken')

const { Order, OrderItem, Product, ProductType } = require('../models')

const OrderController = {
  detail: async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization)
    const userId = decoded.id

    try {
      const order = await Order.findOne({
        where: {
          id_user: userId,
          status: 0 // 0 - cart, 1 - order
        },
        include: [
          {
            model: OrderItem,
            as: 'orderItems',
            include: [
              {
                model: Product,
                as: 'product',
                include: [
                  {
                    model: ProductType,
                    as: 'productType'
                  }
                ]
              }
            ]
          }
        ]
      })

      if (order)
          res.status(200).json(order)
      else res.status(400).json({ error: "Carrinho vazio!" })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
  create: async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization)
    const userId = decoded.id

    const { id_product } = req.body

    let orderId = 0

    try {
      const hasOrder = await Order.findOne({
        where: {
          id_user: userId
        }
      })

      if (!hasOrder) {
          const newShoppingOrder = {
            id_user: userId,
            status: 0, // 0 - cart, 1 - order
            total: 0,
            delivery: '2023-07-01'
          }
          const order = await Order.create(newShoppingOrder)
          orderId = order.id
      } else orderId = hasOrder.id

      const hasOrderItem = await OrderItem.findOne({
        where: {
          id_order: orderId,
          id_product: id_product
        }
      })

      if (hasOrderItem)
          res.status(400).json({ error: "Item repetido no carrinho! Por favor inclua outro item." })

      const newOrderItem = {
        id_order: orderId,
        id_product,
        quantity: 1
      }
      await OrderItem.create(newOrderItem)

      res.status(200).json({ msg: 'Item inserido no Carrinho!' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
  update: async (req, res) => {
    const { id } = req.params

    const decoded = jwt.decode(req.headers.authorization)
    const userId = decoded.id

    try {
      const order = await Order.findOne({
        where: {
          id: id,
          id_user: userId,
          status: 0 // 0 - cart, 1 - order
        }
      })

      if (!order)
          res.status(400).json({ error: "Carrinho não encontrado!" })

      let orderToEdit = {
        id: order.id,
        status: 1, // 0 - cart, 1 - order
        total: order.total,
        delivery: order.delivery,
        id_user: order.id_user
      }

      await Order.update(
        orderToEdit,
        {
          where: {
            id: id
          }
        }
      ) // atualiza o registro no banco de dados

      for(const item of req.body.orderItems) {
          let orderItem = {
            id_order: item.id_order,
            id_product: item.id_product,
            quantity: item.quantity
          }
          await OrderItem.update(
            orderItem,
            {
              where: {
                id_order: item.id_order,
                id_product: item.id_product
              }
            }
          ) // atualiza o registro no banco de dados
      }

      res.status(200).json({ id: order.id, msg: 'Pedido gerado com sucesso!' })

    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = OrderController