import React from 'react'
import TypesCaegoryCompo from './TypesCaegoryCompo'
import ProductsCompo from './ProductsCompo'
import PopularCompo from './PopularCompo'
import tasfiat from '../../Images/tasfiat.gif'


const HomeCompo = () => {
  return (
    <>
    
    <TypesCaegoryCompo title=" التصنيفات " btnTitle="المزيد" pathTxt = "/categories"/>
   
    <ProductsCompo title="الاكثر مبيعاً" btnTitle="المزيد" pathTxt="/products"/>
    
    <ProductsCompo title="احدث الأذياء " btnTitle="المزيد"  pathTxt="/products"/>
    <div className='container'>
    <img className="w-100 " style={{height:"100px",borderRadius:"10px"}}  src={tasfiat} alt=""/>
    </div>
    <ProductsCompo title=" مقترحات " btnTitle="المزيد"  pathTxt="/products" />
    <PopularCompo title="أشهر الماركات" btnTitle="المزيد" pathTxt="/popular"/>
    
    </>
  )
}

export default HomeCompo