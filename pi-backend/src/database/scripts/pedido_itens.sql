SELECT o.id,
       p.name
  FROM livree.order AS o
 INNER JOIN livree.order_item AS oi ON o.id = oi.id_order
 INNER JOIN livree.product AS p ON oi.id_product = p.id
