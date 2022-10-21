import React from 'react'
import MiniNavbarCompo from '../Components/productsComponent/MiniNavbarCompo'
import SubProdTitleCompo from '../Components/productsComponent/SubProdTitleCompo'
import ReactPaginate from '../Components/utilities/PaginationCompo'
import ProductCart from '../Components/Categories/ProductCart'
import { Container } from 'react-bootstrap';
const ShoppingPage = () => {
  return (
    <div>
        <MiniNavbarCompo/>
        <Container>
        <SubProdTitleCompo/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        </Container>
        <ReactPaginate/>
    </div>
  )
}

export default ShoppingPage