import React, { Component } from 'react'
import './Body.css';
import { useState, useEffect } from 'react';
import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'
import instagram from './img/instagram.png'
import github from './img/github-sign.png'
import AnimatedText from './AnimatedText'
import chilling from './img/chilling.gif'
import message from './img/message.gif'
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos'
import 'aos/dist/aos.css'



const Body = () => {

  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);


  const [loaded, setLoaded] = useState(false);
 useEffect(() => {
    // Simulating delay before animation starts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Assuming the threshold for detecting second page visit
      if (scrollPosition > 2 ) {
        setLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  const [state, handleSubmit] = useForm("https://formspree.io/f/xvoeqvea");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

 const bodyStyle = {
            // Set background image using the 'url()' function and the path to your image
              // backgroundImage: "url('https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148901867.jpg')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              minHeight: '80vh',  
              color: 'Black', 
              padding: '20px',
            };

            const formStyles = {
              textAlign: 'center',
              maxWidth: '800px',
              marginLeft:'400px',
            };
        
            const inputStyles = {
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              boxSizing: 'border-box',
              border: 'none',
              borderBottom: '2px solid #636363', // Underline style
              outline:'none', 
              backgroundColor:'#E6FFFF',
            };
        
        
            const textareaStyles = {
             width: '100%',
             padding: '10px',
             margin: '10px 0',
             boxSizing: 'border-box',
             border: 'none',
             borderBottom: '2px solid #636363', // Underline style
             outline:'none', 
             backgroundColor:'#E6FFFF',
            };
        
            const inputGroupStyles = {
              width: '48%', // Adjust as needed
              display: 'inline-block',
              marginRight: '2%', // Adjust as needed
              textAlign: 'left',
            };
        
 return (
         <>
         <div style={bodyStyle}>
           <div className={`row ${loaded ? 'content-loaded' : 'content-loading'}`}>
          <div className={`col-sm-6 ${loaded ? 'slide-in-left' : ''}`}>
          {loaded && (
          <div style={{ marginTop: '60px', marginLeft: '140px' }}>
            <h1 style={{ color: '#636363', fontWeight: '1000', fontSize: '50px', fontFamily: '"Merriweather", serif' }}>
              <span> Hey,</span> <br /> i'm Shreyash Shinde
            </h1>
            <h2 style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>
              <span>i</span> <em style={{ color: '#C49102' }}>design</em> and develop <span style={{ color: '#404243' }}><AnimatedText/></span>
            </h2>
            <p style={{ marginTop: '10px', fontSize: '20px' }}>
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
            <a className="btn btn-warning" href="/work" role="button" style={{ fontWeight: 'bolder', width: '150px', color: '#404243', marginTop: '20px' }}>
              PROJECTS
            </a>
          </div>
        )}
      </div>
      <div className={`col-sm-6 ${loaded ? 'slide-in-right' : ''}`}>
        {loaded && (
          <div style={{ marginTop: '90px', marginLeft: '140px' }}>
            <img src={chilling} alt="" style={{ width: '100%', maxWidth: '400px' }} />
          </div>
        )}
      </div>
    </div>


                {/* <div className='d-flex' style={{ marginTop: '80px',marginLeft:'85px'}}>
     
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
    

    </div> */}
              </div>
              <div className='container-fluid hero hero-top' style={{ marginTop: '30px', backgroundColor: '#fcf6d5', minHeight: '100vh', }}>
      <div className="container">
        <div className="row">
          <div className='col-sm-12 col-md-5'  style={{ marginLeft: '40px', marginTop: '30px' }} data-aos="fade-right">
            <h1 style={{ fontSize: '4.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>Design.</h1>
            <p style={{ fontSize: '20px' }}>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
          </div>
          <div className='col-sm-12 col-md-5' style={{ marginLeft: '150px', marginTop: '300px', marginBottom: '90px' }} data-aos="fade-left">
            <h1 style={{ fontSize: '4.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>Engineering.</h1>
            <p style={{ fontSize: '20px' }}>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.</p> 
          </div>
        </div>
      </div>
    </div>
 

                <div className="container-fluid hero hero-bottom" style={{marginTop:'150px', marginBottom:'150px'}}>
                  <div className="container">
                    
                    <div className="row">
                    
                      <div className="col-sm-4" style={{ marginLeft: '150px' }} data-aos="fade-right">
                       
                       <img  style={{width:'500px' , height:'450px'}} class="major" src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/yoda.jpg" alt="Yoda rocks"/>
                       
                      </div>
                      <div className="col-sm-5" style={{ marginLeft: '150px', }} data-aos="fade-left">
                      <h1 style={{ fontSize: '2.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px', marginLeft:'60px' }}>random facts</h1>
                      <ul className="ul" style={{marginTop:'40px', fontSize:'20px'}}>
							              <ul style={{marginBottom:'10px'}}>I drink a lot of water</ul>
							              <ul style={{marginBottom:'10px'}}>I'm into software design</ul>
							              <ul style={{marginBottom:'10px'}}>Gardening is my zen time</ul>
							              <ul style={{marginBottom:'10px'}}>I love to cook (and eat)</ul>
							              <ul style={{marginBottom:'10px'}}>I'm a bit of a clean freak</ul>
							              <ul style={{marginBottom:'10px'}}>I want to live in Amsterdam</ul>
				                    <ul style={{marginBottom:'10px'}}>Embracing the burn, redefining my limits.</ul>
						          </ul>
                      </div>
                      </div>
                    
                    </div>
                </div>
        <div className='msgme' style={{backgroundColor:'#E6FFFF', backgroundSize:'100%'}} data-aos="flip-right">
             <section className="lhhpGw fZhawX scrolled" >
              <div className="inner-content">
              <div>
              <img src={message} alt="" style={{ width: '100px', height:'100px', marginTop:'30px', marginLeft:'30px'}} />
              </div>
                <article className="envobU cavalier">
                <div className="col-sm-6 text-center" style={{marginLeft:'380px',}}>
              
                 <h1  style={{fontSize: '2.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '40px',}}>Send me a message!</h1>
                 <p style={{fontSize:'20px',}}>Got a question or proposal, or just want <br /> to say hello? Go ahead.</p>
             </div>
           </article>
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
              <div className="cWhpWP input-group" data-id="full-name" style={inputGroupStyles}>
                <label htmlFor="full-name" style={{display:'flex', marginTop:'50px', fontSize:'18px',}}> Your Name</label>
                <input
                  id="full-name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  required="required"
                  style={inputStyles}
                />
                <ValidationError  prefix="name"  field="name" errors={state.errors} />
              </div>
              <div className="cWhpWP input-group" data-id="email" style={inputGroupStyles}>
                <label htmlFor="email" style={{display:'flex', fontSize:'18px',}}> Email Address</label>
                <input
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="Email"  field="email" errors={state.errors} />
              </div>
            </div>
            <div className="form-row">
              <div className="cWhpWP input-group" data-id="message">
                <label htmlFor="message" style={{display:'flex', marginTop:'20px', fontSize:'18px',}}> Your Message</label>
                <textarea
                  placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                  id="message"
                  name="message"
                  required="required"
                  rows="2"
                  minLength="20"
                  style={textareaStyles}
                ></textarea>
              </div>
            </div>
            <button type="submit" id="submit-button" class="btn btn-outline-dark" style={{ padding:'10px 20px', cursor:'pointer', borderRadius:'none', width: '800px', height:'auto', marginBottom:'120px'}}> SHOOT &rarr;</button>
          </form>
        </div>
      </section>
      </div>
      
</>
             
             
        );
      
      
      }


export default Body