import React from 'react'
import SubTitleCompo from '../utilities/SubTitleCompo'

import { Container} from 'react-bootstrap'

import ProductCart from "../Categories/ProductCart"


import Zoom  from 'react-reveal/Zoom'
import  Jump from 'react-reveal/Jump'



  

const ProductsCompo = ({title,btnTitle,pathTxt}) => {




  return (
    <div  style={{ boxShadow:"1px 1px 1px rgba(151,151,151,0.1)"}}>
    <Container>
    <Jump>
    <SubTitleCompo title={title} btnTitle={btnTitle} pathTxt={pathTxt} />
    </Jump>
    <Zoom>
    <ProductCart />
    </Zoom>
    </Container>
 
    </div>
  )
}

export default ProductsCompo;