import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Search = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { state: { productsSearch: location?.state?.productsSearch } })
  }, [])

  return (
    <>
    </>
  )
}
export default Search