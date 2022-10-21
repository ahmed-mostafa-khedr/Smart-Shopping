import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import Dropdown from 'react-bootstrap/Dropdown';

import { productsData } from './../Categories/ProductCart';



const SubProdTitleCompo = () => {
  return (
    <>
    <div className='container my-5 d-flex justify-content-between'>
      
        <h1 className="col-2 font-ar " style={{ fontSize:"18px"}}>
          <b> 
            <Spinner style={{height:"15px",width:"15px",margin:"0 2px"}} animation="border" role="status"></Spinner> 
            {productsData.length} منتج متاح ...
          </b>
        </h1>
       
        <Dropdown >
        
        <Dropdown.Toggle  variant="secondary" style={{direction:"ltr"}} className="text-end" >
           ترتيب حسب
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" style={{direction:"rtl"}} className="text-end">
          <Dropdown.Item href="#/action-1" active >
            الأكثر مبيعاً
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2"> الاعلى تقييماً </Dropdown.Item>
          <Dropdown.Divider className='bg-secondary'/>
          <Dropdown.Item href="#/action-3"> السعر من الأقل الى الأعلى </Dropdown.Item>
          <Dropdown.Divider className='bg-secondary' />
          <Dropdown.Item href="#/action-3"> السعر من الأعلى الى الأقل </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 
        
    </div>
    </>
  )
}

export default SubProdTitleCompo