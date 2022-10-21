import React from 'react'
import brandtitle from '../Images/brandtitle.png'
import brand1 from '../Images/brand1.png'
import brand2 from '../Images/brand2.png'
import brand3 from '../Images/brand3.png'
import brand4 from '../Images/brand4.png'
import brand5 from '../Images/brand5.png'
import brand6 from '../Images/brand6.png'
import brand7 from '../Images/brand7.png'
import brand8 from '../Images/brand8.png'
import { Container } from 'react-bootstrap';



const PopularPage = ({title,btnTitle,pathTxt}) => {
  return (
    <Container  > 
      <div className=' pt-5 d-flex justify-content-between '>
        <h1 className="col-2 text-start font-ar  mt-5 mx-2 " style={{ width:"40%",fontWeight:"bold",borderRadius:"50%"}}>
          <b> أشهر الماركات </b>
        </h1>
        <img src={brandtitle} className=" w-50 " style={{height:"400px"}}  alt=""/>
      </div>
  
    <div style={{marginBottom:"70px" ,width:"100%"}} className='row d-flex    justify-content-center  '>
    <img src={brand1} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}}  alt=""/>
    <img src={brand2} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand3} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand4} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand5} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand6} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand7} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
    <img src={brand8} className="col-3 mx-2 my-5" style={{height:"auto",boxShadow:"1px 3px 3px #ccc",width:"40%"}} alt=""/>
   </div>
    </Container>
  )
}

export default PopularPage