import Carousel from 'react-bootstrap/Carousel';
import prod4 from '../../Images/prod4.png'
import prod3 from '../../Images/prod3.png'
import slider1 from '../../Images/slider1.png'
import slider4 from '../../Images/slider4.png'


function SliderCompo() {
  return (
    <Carousel variant="dark" style={{ height:"50vh"}}>

      <Carousel.Item  style={{ backgroundImage:" linear-gradient(to bottom,lightpink,white)"}} interval={2000}>
        <div  className="d-flex flex-row justify-content-center align-items-center ">
        <img
          className="  "
          src={prod4}
          alt="First slide"
          style={{ paddingTop:"20px", width:"40%", height:"50vh"}}
        />
       
                <div className='font-ar text-center offer'>
      
          <h2  className='offer' > خصومات وعروض مستمرة </h2>
          <p> خصومات تصل الى 50% </p>
          </div>
        </div>
      </Carousel.Item >
      <Carousel.Item  interval={2000}  style={{ backgroundImage:"linear-gradient(to bottom,rgb(231, 226, 150),white)"}}>
        <div  className="d-flex flex-row justify-content-center align-items-center ">
        <img
          className="  "
          src={prod3}
          alt="First slide"
          style={{ width:"40%", height:"50vh"}}
        />
       
        <div className='font-ar text-center offer'>
      
          <h2  className='offer' > خصومات وعروض مستمرة </h2>
          <p> خصومات تصل الى 50% </p>
          </div>
        </div>
      </Carousel.Item>      
      <Carousel.Item  style={{ backgroundImage:" linear-gradient(to bottom,plum,white)"}} interval={2000}>
        <div  className="d-flex flex-row justify-content-center align-items-center ">
        <img
          className="  "
          src={slider1}
          alt="First slide"
          style={{ paddingTop:"20px", width:"40%", height:"50vh", backgroundColor:""}}
        />
       
       <div className='font-ar text-center offer'>
      
      <h2  className='offer' > خصومات وعروض مستمرة </h2>
      <p> خصومات تصل الى 50% </p>
      </div>
        </div>
      </Carousel.Item>      
      <Carousel.Item style={{ backgroundColor:" blanchedalmond"}} interval={2000}>
        <div  className="d-flex flex-row justify-content-center align-items-center ">
        <img
          className="  "
          src={slider4}
          alt="First slide"
          style={{ paddingTop:"20px", width:"40%", height:"50vh", backgroundColor:""}}
        />
       
       <div className='font-ar text-center offer'>
      
      <h2  className='offer' > خصومات وعروض مستمرة </h2>
      <p> خصومات تصل الى 50% </p>
      </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCompo;