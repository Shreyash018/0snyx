import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contact from './img/contact.png'
import dark from './img/dark.png'
import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'
import instagram from './img/instagram.png'
import github from './img/github-sign.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

    const [hover, setHover] = useState(false);

    const handleHover = () => {
      setHover(!hover);
    };
  
   
    const [state, handleSubmit] = useForm("https://formspree.io/f/xvoeqvea");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    

    const formStyles = {
        maxWidth: '700px',
        marginLeft:'200px',
        marginTop:'10px'
      };
  
      const inputStyles = {
        width: '100%',
        padding: '10px ',
        margin: '16px 0',
        boxSizing: 'border-box',
        border: 'none',
        borderBottom: '2px solid #636363', // Underline style
        outline:'none', 
      };
      
      const linkStyle = {
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '2px 100px',
        marginLeft:'350px',
        marginBottom:'30px',
        transition: 'color 0.3s, background-color 0.3s',
        backgroundColor: hover ? '#FEDCDC' : 'transparent'
      };
    
      const hoverEffectStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '500px',
        height: hover ? '500px' : '0%',
        transition: 'height 0.3s'
      };
    
      

    //   const inputGroupStyles = {
    //     width: '48%', // Adjust as needed
    //     display: 'inline-block',
    //     marginRight: '2%', // Adjust as needed
    //     textAlign: 'left',
    //   };
  
  return (
     <>
       
      
    <section className="lhhpGw fZhawX scrolled" >
        <div className="row" data-aos="flip-right">     
          <div className='col-lg-5'>
        <div>
         <h4 style={{ fontSize: '1.9333rem', fontFamily: 'poppins', fontWeight: '1000', color: '#636363', marginLeft:'200px' , marginTop:'90px' }}>Shoot me a message on my Slack</h4>
         <p style={{fontSize:'20px', marginLeft:'200px',  fontFamily: '"Merriweather", serif', color: '#636363'}}>I'm always looking for exciting projects.</p>
         </div>
          <form
            onSubmit={handleSubmit}
            className="contact-form hYlwmr"
            method="POST"
            target="_blank"
            action="https://formspree.io/f/xvoeqvea"
            id="home-contact"
            style={formStyles}
          >
           <input type="hidden" name="_subject" value="Message from olaolu.dev!" />
            <div className="form-row">
              <div className="cWhpWP input-group" data-id="email" >
                <input
                  id="full-name"
                  placeholder="Email"
                  type="text"
                  name="name"
                  required="required"
                  style={inputStyles}
                />
                <ValidationError  prefix="email"  field="email" errors={state.errors} />
              </div>
              <div className="cWhpWP input-group" data-id="message" >
                <input
                  id="message"
                  placeholder="Write a message and press ENTER"
                  type="email"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="message"  field="message" errors={state.errors} />
              </div>
            </div>
            <button type="submit" id="submit-button" class="btn btn-outline-dark" style={{ padding:'10px 20px', cursor:'pointer', borderRadius:'none', width: '150px', height:'auto', marginTop:'25px'}}> Send Message </button>
            <div><p style={{fontSize:'18px', marginTop:'25px',   fontFamily: '"Merriweather", serif',}}>or email me at <span style={{color:'#F76D6D'}}>shindeshreyash23@gmail.com </span></p></div>
          </form>  
        </div>
        <div className='col-lg-5'>
        <div class="banner-image">
        <img style={{width:'700px', height:'900px', marginLeft:'190px',}} alt="Contact" src={contact}/>
      </div>
     </div>
    </div>
  </section>

  <div className="container-fluid hero contact-top" data-aos="fade-right" style={{backgroundColor:'#7893C3'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-5" style={{ marginLeft: '40px', marginTop:'30px' }}>
                       <h1 style={{ fontFamily:'poppins', fontWeight: '1000', color: 'white', fontSize: '3.8333rem' ,fontWeight: 'bold', marginLeft:'100px', marginTop :'140px', marginBottom:'140px'}}>let's make <br/> something great <br/>together.</h1>                       
                      </div>
                      <div className="col-sm-6 right" style={{marginTop:'260px'}}>
                      <a href="planner" onMouseEnter={handleHover} onMouseLeave={handleHover} style={{color: '#FEDCDC' , fontFamily:'poppins', fontSize: '2.1667rem',  textDecoration: 'none ' , marginLeft:'350px', }}> Start a project
                      <div style={hoverEffectStyle}></div>
                      <div style={linkStyle}></div>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
     
     <div className ="container-fluid hero mbc-loc" data-aos="fade-right">
       <div className="container" style={{marginTop:'150px'}}>
         <div className="col-sm-4 offset-sm-4 text-center">
          <img alt='loc' src={dark}/>
          
          <div className='d-flex' style={{ marginTop: '20px',marginLeft:'115px'}}>
     
                <a href="https://www.linkedin.com/in/shreyash-shinde-8500a2236/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={linkedin} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://github.com/Shreyash018" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}}>
                 <img src={github} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.instagram.com/shreyas._.shinde/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={instagram} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={twitter} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>

           </div>

           <h2 style={{fontSize: '2.9333rem' ,fontWeight: 'bold', fontFamily:'poppins', fontWeight: '1000', color:'', marginTop:'30px', marginBottom:'100px'}}>Let's work together </h2>
         
         </div>
       </div>
    </div>

    </>
  )
}
export default Contact
