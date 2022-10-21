import React from 'react'


function FooterCompo() {
  return (
    <div  className='bg-secondary text-light d-flex justify-content-between align-items-center px-3 mt-5 py-2 footer'>
        <div className="d-flex">
            <a href="/" className=" my-auto text-light font-ar mx-1" style={{fontSize:"5px",textDecoration:"none"}}> 
            الشروط والاحكام  
            </a>
            <a href="/" className="my-auto text-light font-ar mx-1" style={{fontSize:"5px",textDecoration:"none"}}> 
            سياسة الخصوصية  
            </a>
            
        </div >
        <div className="d-flex font-en ">
        <a href="/" className=" my-auto text-light font-ar " style={{fontSize:"5px",textDecoration:"none"}}> 
            اتصل بنا 
            </a>
            
            <a disabled style={{ pointerEvents: 'none' }} href="tel:0-109-072-3497 "  className='mx-1 my-auto '> <i  class="fa-solid fa-phone"></i>  </a>
            <a href="https://www.facebook.com/profile.php?id=100020411474170" className='my-auto'><i class="fa-brands fa-facebook mx-1 " style={{color:"#1877f2", backgroundColor:"white",borderRadius:"25%",border:"2px solid white"}}></i>  </a>
            <a href='https://www.linkedin.com/in/ahmed-mostafa-777b64218/' className='my-auto'><i class="fa-brands fa-linkedin-in mx-1" style={{color:"white", backgroundColor:"#0077b5",border:"3px solid #0077b5"}}></i>  </a>
            <a href="https://github.com/ahmed-mostafa-khedr" className='my-auto'><i class="fa-brands fa-github mx-1" style={{color:"#333",backgroundColor:"#fafafa",borderRadius:"25%",border:"2px solid #fafafa"}}></i>  </a>
            
       
        </div>
       
    </div>
  )
}

export default FooterCompo;