
import {Card} from 'react-bootstrap';
import Zoom  from 'react-reveal/Zoom'
import clothe from '../../Images/clothe.png';
import jacket from '../../Images/jacket.png';
import alahly from '../../Images/alahly.png';
import mkwa from '../../Images/mkwa.png';
import laptop from '../../Images/laptop.png';
import favOff from '../../Images/favOff.png';
import rate from '../../Images/rate.png';

import { useState , useEffect} from 'react';

export const productsData=[
    {
        id: 1,
        title:" بوكليت ",
        image : `${clothe}`,
        details:"خفيف لون ازرق ماركه اديداس",
        price: 5000,
        bg:"#FFF8F3",
    }, 
    {
        id: 2,
        title:" جاكيت   ",
        image : `${jacket}`,
        details:"اسود . ازرق .احمر",
        price: 1000,
        bg:"mistyrose",

    }, 
    {
        id: 3,
        title:"  تيشرت الاهلي  ",
        image : `${alahly}`,
        details:"اسود واحمر ",
        bg:"mistyrose",
        price: 250
    },  
    {
        id: 4,
        title:" مكواه بخار ",
        image : `${mkwa}`,
        details:"مكواه   فيليبس",
        bg:"#FFF2F2",
        price: 880
    },            
    {
        id: 5,
        title:" لابتوب ",
        image : `${laptop}`,
        details:"لابتوب acer لون رمادي جيل سابع رام 16 جيجا",
        bg:"#A0BCC2",
        price: 880
    },            


]


function ProductCart() {

    const [cart,setCart] = useState([]);

    useEffect(() => {
        setCart(productsData)
            },[])



    return (

            
        
        
         
        <Zoom >  
    <div className='row d-flex justify-content-around '>
        
        
    {
            cart.map((item)=>{
                return (
                <Card
                
                className="col-5  col-md-2 col-lg-2 my-2 mx-1 text-center  " 
                style={{height:"auto",borderRadius:"8px",border:"none",backgroundColor:"#FFFFFF",boxShadow:"0 2px 2px 0 rgba(151,151,151,0.5)" ,padding:"0",margin:"0"}}
                >
                  
                  <Card.Img variant="top"  className=' '  src={item.image} style={{height:"150px",width:"100%",backgroundColor: item.bg }}/>
                  <div className='d-flex justify-content-end  ' >
                    <img src={favOff} className="text-center" style={{height:"24px",width:"26px"}} alt=""/>
                  </div>
                  <Card.Body  className='font-ar ' style={{height:"50%",width:"100%",paddingBottom:"0",marginBottom:"0"}}>
                    <Card.Title className='offer  text-dark '>{item.title}</Card.Title>
                    <Card.Text className='  text-secondary' style={{fontSize:"10px"}}>
                     {item.details}
                    </Card.Text>
                    <div className='d-flex justify-content-between '>
                        <img src={rate}  style={{height:"16px",width:"16px"}} alt=""/>
                        <p className='font-en me-1' style={{ color:"GrayText" }}>{item.price}<sup>LE</sup></p>
                                        
                    </div>
                  </Card.Body>
                </Card>
                )
            })
        }

          

</div>
</Zoom>
    );
  }


  export default ProductCart;