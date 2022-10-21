import React from 'react'
import brand1 from '../../Images/brand1.png'
import brand2 from '../../Images/brand2.png'
import brand3 from '../../Images/brand3.png'
import brand4 from '../../Images/brand4.png'
import { Container } from 'react-bootstrap';
import SubTitleCompo from '../utilities/SubTitleCompo'


const PopularCompo = ({title,btnTitle,pathTxt}) => {
  return (
    <Container  > 
    <SubTitleCompo title={title} btnTitle={btnTitle} pathTxt={pathTxt}/>
    <div style={{height:"150px", backgroundColor:"#f6f6f6" ,marginBottom:"70px"}} className=' d-flex justify-content-between mt-1 '>
    <img src={brand1} className="col-3 "   alt=""/>
    <img src={brand2} className="col-3 mx-1" style={{ }} alt=""/>
    <img src={brand3} className="col-3 mx-1" style={{ }} alt=""/>
    <img src={brand4} className="col-3" style={{ }} alt=""/>
    </div>
    </Container>
  )
}

export default PopularCompo