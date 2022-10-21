import React from 'react';

import { Nav } from 'react-bootstrap';


const MiniNavbarCompo = () => {
  return (
   
        <Nav variant="tabs" className="px-5 " defaultActiveKey="/" style={{height:"auto"}}>

          <Nav.Item>
            <Nav.Link href="/"> الكل </Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-1" style={{color:"#6a737b"}}> أجهزة كهربية </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:"#6a737b"}}> ملابس </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:"#6a737b"}}> أدوات مدرسية </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:"#6a737b"}}> العنايه بالبشره </Nav.Link>
          </Nav.Item>          
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:"#6a737b"}}>  الجمال </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"style={{color:"#6a737b"}}> المزيد </Nav.Link>
          </Nav.Item>
          

        </Nav>
  )
}

export default MiniNavbarCompo