import React from 'react'
import SubTitleCompo from '../utilities/SubTitleCompo'
import {Col, Container} from 'react-bootstrap'
import clothe from '../../Images/clothe.png'
import school from '../../Images/school.png'
import b from '../../Images/b.png'
import bkala from '../../Images/bkala.png'
import aziaa from '../../Images/aziaa.png'
import aziaaa from '../../Images/aziaaa.png'
import mobile from '../../Images/mobile.png'
import ehome from '../../Images/ehome.png'

import { useState , useEffect} from 'react'
import Zoom from 'react-reveal/Zoom';

export let types =[
    {
    id: 1,
    image : `${school}`,
    background:"red",
    title:" المدارس ",
    }, 
    {
        id: 2,
        image:`${b}`,
        background:"red",
        title:" الجمال ",
    }, 
    {
        id: 3,
        image:`${bkala}`,
        background:"silver",
        title:" البقالة ",
    },  
    {
        id: 4,
        image:`${aziaa}`,
        background:"cornflowerblue",
        title:" أزياء الرجال ",
    },  
    {
        id: 5,
        image:`${aziaaa}`,
        background:"cornflowerblue",
        title:" أزياء النساء ",
    },   
    {
        id: 6,
        image:`${mobile}`,
        background:"cornflowerblue",
        title:" الموبايلات ",
    },            
    {
        id: 7,
        image:`${ehome}`,
        background:"green",
        title:" اجهزه منزليه ",
    },            
    {
        id: 8,
        image:`${clothe}`,
        background:"rgba(151,151,151,0.1)",
        title:" تصفيات شتوي ",
    },
    
]

const TypesCaegoryCompo = ({title,btnTitle,pathTxt}) => {
    const [cart,setCart] = useState([]);
    
    useEffect(() => {
        setCart(types)
    },[])
     
        
  return (
    <Container>
        
        <SubTitleCompo title={title} btnTitle={btnTitle} pathTxt = {pathTxt} />
        <Zoom>
            <div className='row  d-flex justify-content-center '>
                {
                 cart.map((item)=>{
                    return (
                    <Col key={item.id} xs="4" md="2" lg="1" className="my-2 mx-2 text-center " >
                        <img src={item.image} style={{backgroundColor:`${item.background}` }} alt="alt" className="img-cat justify-content-center" />
                        <p className='offer font-ar text-center text-dark'> {item.title} </p></Col>
                        )
                    })
                }
        
        
        
            </div>
         </Zoom>
    </Container>
  )
}

export default TypesCaegoryCompo;