import React from 'react'
import{ Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const RegisterPage = () => {
  
  let uname = "" ;
  let umail = "";
  let upassword = "" ;
  const regfun=(e)=>{
    e.preventDefault();
    if(uname === "" || umail === ""|| upassword === ""){
       alert(" من فضلك ادخل البيانات")
      
    }else{
      localStorage.setItem("username",uname);
      localStorage.setItem("email",umail);
      localStorage.setItem("password",upassword);
      setTimeout(()=>{
        window.location='/';
    },1500)
    }
    

  }

  return (
    <div >
      <h4 className="font-ar my-5 text-center" style={{fontWeight:"bold"}}> انشاء حساب جديد </h4>
           <Form className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar" >
      <Form.Group className="mb-3  " controlId="formBasicText">
        <Form.Label  > اسم المستخدم </Form.Label>
        <Form.Control 
        style={{opacity:"0.6"}} 
        className="  text-center " 
        type="text" 
        placeholder="...English Name" 
        onChange={(e)=> uname= e.target.value }
        />
        
      </Form.Group>
      
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Label  > البريد الالكتروني </Form.Label>
        <Form.Control 
        style={{opacity:"0.6"}} 
        className="  text-center" 
        type="email" 
        placeholder="...Valid Mail" 
        onChange={(e)=>umail = e.target.value}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> الرقم السري </Form.Label>
        <Form.Control 
        style={{opacity:"0.6"}} 
        className="  text-center" 
        type="password" 
        placeholder="****" 
        onChange={(e)=>  upassword = e.target.value}
        />
      </Form.Group>
      
      <Button 
      variant="secondary" 
      type="submit"
      onClick={(e)=> regfun(e)}
      >
        انشاء حساب
      </Button>
      <Form.Text className="text-muted">
          لن تتم مشاركه بياناتك مع اي شخص آخر
        </Form.Text>
    </Form>
    <p  className="font-ar my-5 py-5 text-center">  لديك حساب ؟ <Link to="/login" className="text-danger" style={{textDecoration:"none"}} > تسجيل الدخول </Link> </p>
    

    </div>
  )
  
}

export default RegisterPage

