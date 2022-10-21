import React from 'react'
import{ Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const LoginPage = () => {
  let userEmail=""
  let userPassword=""
  let email=localStorage.getItem('email')
  let password=localStorage.getItem('password')
  const loginfun=(e)=>{
    e.preventDefault();

    if(userEmail === "" || userPassword === ""  ){
      alert(" من فضلك قم بادخال البيانات ")
    }
    else {

      if (email === userEmail && password === userPassword ){
        
        setTimeout(()=>{
          window.location='/';
      },1500)
    }else {
        alert(" بيانات غير صحيحه من فضلك تاكد من البريد وكلمه المرور الخاصه بك ")
    }
  }

      
      

     } 
   
  
  return (
    <div >
      <h4 className="font-ar my-5 text-center" style={{fontWeight:"bold"}}> تسجيل الدخول </h4>
           <Form className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar" style={{}}>
      <Form.Group className="mb-3  text-center" controlId="formBasicEmail">
        <Form.Label  > البريد الالكتروني </Form.Label>
        <Form.Control 
        className="  text-center" 
        type="email" 
        placeholder=" " 
        onChange={(e)=> userEmail = e.target.value}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> الرقم السري </Form.Label>
        <Form.Control 
        type="password" 
        placeholder="" 
        onChange={(e)=>userPassword = e.target.value}
        />
      </Form.Group>
      
      <Button 
      variant="secondary" 
      type="submit"
      onClick={(e)=>loginfun(e)}
      >
        تسجيل الدخول
      </Button>
      <Form.Text className="text-muted">
          لن تتم مشاركه بياناتك مع اي شخص آخر
        </Form.Text>
    </Form>
    <p  className="font-ar my-5 py-5 text-center"> ليس لديك حساب ؟ <Link to="/register" className="text-danger" style={{textDecoration:"none"}} >انشاء حساب جديد</Link> </p>
    

    </div>
  )
}

export default LoginPage