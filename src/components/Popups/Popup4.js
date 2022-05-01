import React from 'react'

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page4 from "../images/page4.png"





const Popup4 = () => {


    let navigate = useNavigate();

  return (

<div className='portfolio-popup'>
    
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
<div className='pp-inner'>
    <div className='pp-content'>
        <div className='pp-header'>
            <div className='pp-thumbnail'>
            <img src={page4} alt="pp-thumbnail" />
            </div>
<h3>App landing page</h3>
        </div>
<div className="pp-body">
    <div className='description'>
<p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
    </div>
    <div className='general-info'>
<ul>
    <li>Created - <span>4 Dec 2020</span></li>
    <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
    <li>Role - <span>Front End</span></li>
    <li>View Online - <span><a href='https://single-page-app3-psi.vercel.app/'>https://single-page-app3-psi.vercel.app/</a></span></li>
</ul>
    </div>
</div>
    </div>

</div>
</div>


  )
}

export default Popup4;