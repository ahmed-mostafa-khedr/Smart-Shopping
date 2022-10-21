import React from 'react'

import {types} from '../Components/HomeComponents/TypesCaegoryCompo'
import { Container,Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom'
import accesories from '../Images/accesories.png'
import baby from '../Images/baby.png'
import atorr from '../Images/atorr.png'
import elec from '../Images/elec.png'
import PaginationCompo from '../Components/utilities/PaginationCompo'


let allTypes=[...types,
    {
        id: 9,
        image:`${elec}`,

        title:" اجهزه الكترونيه ",
    },
    {
        id:10,
        image:`${atorr}`,
     
        title:" عطور  ",
    },
    {
        id: 11,
        image:`${baby}`,
      
        title:" لوازم البيبي ",
    },
    {
        id: 12,
        image : `${accesories}`,
        title:" اكسسوارات ",
    }
]

const TypesPage = () => {
   
    return (
        <Container>
            <div className=' pt-5 d-flex justify-content-between'>
                <h1 className="col-2 font-ar " style={{ fontSize:"18px"}}><b> التصنيفات </b></h1>
      </div>
            
        
        <Zoom>
        <div className='row  d-flex justify-content-around '>
            
            {
                allTypes.map((item)=>{
                    return (
                        <Col key={item.id} xs="4" md="2" lg="2" className="my-2 text-center " >
                            <img src={item.image} style={{backgroundColor:`${item.background}` }} alt="alt" className="img-cat justify-content-center" />
                            <p className='offer font-ar text-dark'> {item.title} </p></Col>
                    )
                })
            }
            
            
            
        </div>
        </Zoom>
        <PaginationCompo/>
        </Container>
      )
    }
    
export default TypesPage ;
