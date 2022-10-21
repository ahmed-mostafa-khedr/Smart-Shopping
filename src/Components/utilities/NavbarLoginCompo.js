
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/logo.png';
import Jump from 'react-reveal/Jump';



function NavbarLoginCompo({loginState}) {





  return (
    <Navbar bg="dark" expand="sm" className="navbar  sticky-top" style={{height:"60px", padding:"0",margin:"0"}}>
      <Container fluid>

        <Nav.Link href="/" className='font-en text-light  mx-sm-2 mx-lg-5'> <Jump><img src={logo} className="logo" alt="logo"/> </Jump></Nav.Link>

        <Navbar.Toggle style={{color:"white" , backgroundColor:"white"}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{color:"white" , backgroundColor:"black" ,marginTop:"10px", width:"100%"}}>

        
            <Form.Control
              type="search"
              placeholder="إبحث...."
              className="mx-sm-2 my-2 py-1 w-100 font-ar"
              aria-label="Search"
           
            />
           
        

          <Nav
            className="mx-sm-2 mx-lg-5 p-0"
            style={{ maxHeight: '100px' ,color:"white"}}
            navbarScroll
          >
            <Nav.Link href="/login"
            className="nav-text d-flex my-auto mx-1 justify-content-center p-0"
           
            style={{color:"white" }}
            >
              <h5 className=" mt-2 ms-2"><i class="fa-solid fa-user"></i></h5>
              <h6 style={{color:"whie",fontSize:"10px" ,maxWidth:"150px",minWidth:"100px",opacity:"0.8"}} className="text-center font-ar mx-2 my-auto">  {loginState}    </h6>
              
            </Nav.Link>            
            <h3 className="">|</h3>
            <Nav.Link href="/cart"
            className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
            
            style={{color:"white"}}
            >
               <h5 className=" mt-2 me-2"><i class="fa-solid fa-cart-arrow-down "></i></h5>
              <h6 style={{color:"whie",fontSize:"5px" ,width:"80px",opacity:"0.8"}}  className="text-center font-ar my-auto ">عربه التسوق   </h6>
              
            </Nav.Link>

           
          </Nav>
         
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  

  );
}

export default NavbarLoginCompo;