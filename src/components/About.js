import React from 'react'
import tie from "./images/tie.jpg"
import { useNavigate } from 'react-router';
import Header from './Header';



const About = () => {

    let navigate = useNavigate();

  return (
    <section className='about-section sec-padding'>
        <Header />
<div className='container'>
    <div className='row'>
        <div className='section-title'>
            <h2>About Me</h2>

        </div>

    </div>
<div className='row'>
<div className='about-img'>
<div className='img-box'>
<img src={tie} alt="suit" />
</div>
</div>
<div className='about-text'>
    <p>I am a meticulous Front-End React.js Developer from Nigeria Currently based in Lagos with over 2years of front end experience,
         and a passion for coding, Web Development and a firm believer in client satisfaction coupled with optimal user’s experience.
         Am open to any avaliable remote oppourtunities,
         In return I would offer my full commitment and be a pleasant, friendly addition to your team. 
    </p>
    <h3>skills</h3>
<div className='skills'>
<div className="skill-item">html</div>
<div className="skill-item">css</div>
<div className="skill-item">Javascript</div>
<div className="skill-item">Bootstrap</div>
<div className="skill-item">Material UI</div>
<div className="skill-item">React</div>
<div className="skill-item">Figma</div>
<div className="skill-item">Github</div>
<div className="skill-item" style={{color: "red"}}>Firebase</div>
<div className="skill-item" style={{color: "red"}}>DevOps</div>
</div>
<div className='about-tabs'>
    <button type="button" class='tab-item active' data-target="#education">Education</button>
    <button type="button" class='tab-item' data-target="#experience">Experience</button>
</div>
<div className='tab-content' id="education">
<div className='timeline'>
    <div className='timeline-item'>
<span className='date'>2008 - 2012</span>
<h4>BSc in Accounting - <span>Ekiti State University, Nigeria</span> </h4>
<p> An Accounting Degree with a profesional qualification as a Certified Accoutant</p>
    </div>
    <div className='timeline-item'>
<span className='date'>2019 - 2021</span>
<h4> Cyber Security Analyst Certification - <span>GIZ (GERMAN)</span> </h4>
<p> An hands on Bootcamp training on the Advisory aspect of cybersecurity  </p>
    </div>
    <div className='timeline-item'>
<span className='date'>2020 - 2021</span>
<h4>Software Engineering  - <span>Decagon Insititute </span> </h4>
<p> A Bootcamp with major focus on HTML, CSS, Javascript and Front-End FrameWorks

</p>
    </div>
    <div className='timeline-item'>
<span className='date'>Currently</span>
<h4>Dev Ops Engineering - <span> Lamar Cloud Submitt, Texas USA </span> </h4>
<p> 
    Advanced training on Linux Administration, AWS, DevOps and Networking.
</p>
    </div>


</div>
</div>


<div className='tab-content active' id="experience">
    <div className='timeline'>
        
        <div className='timeline-item'>
            <span className='date'>Currently</span>
            <h4>Web developer - <span>Freelance (Fiverr, UpWork)</span></h4>
            <p>To build and uplift the Websites of clients projects in the shortest time span, 
                 Using Web Technologies to provide not only cool landing pages but also makes
                  them look professional to increase sales and brand optimization.   </p>
        </div>
        <div className='timeline-item'>
            <span className='date'>2020 - Currently</span>
            <h4>Full Stack - <span>Open Source</span></h4>
            <p> Contributed to open source projects on Github and other developer communities </p>
        </div>
    </div>
</div>

<a href='/##' className='btn'>Download CV</a>
<a href onClick={() => {navigate("/Contact");}}  className='btn'>Contact Me</a>

</div>
</div>
</div>

    </section>
  )
}

export default About;


window.onload = function(){
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) =>{
if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}
});
}