import React from 'react'
import { Link } from 'react-router-dom'

const SubTitleCompo = ({title,btnTitle,pathTxt}) => {
  return (
    <>
    <div className=' pt-5 d-flex justify-content-between'>
      
        <h1 className="col-2 font-ar " style={{ fontSize:"18px"}}><b> {title} </b></h1>
        <Link to ={ `${pathTxt}`}>
        <button className=" btn btn-outline-secondary py-0 m-0 "> {btnTitle} </button>
        </Link>
    </div>
    </>
  )
}

export default SubTitleCompo