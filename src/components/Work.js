import React, { useEffect, useState } from 'react';
import './Work.css'
import proj1 from './img/proj1.png'
import proj2 from './img/proj2.png'
import dbank from './img/dbank.png'
import link from './img/link.png'
import netflix from './img/netflix.png'
import quiz from './img/quiz.png'
import gym from './img/gym.png'
import drum from './img/drum.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Work() {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>
        <div className ="container-fluid hero mbc-work" >
            <div className='container'>
            <div className="col-sm-4 offset-sm-4 text-center">
             <h2 style={{marginTop: '100px', fontSize:'', fontWeight:'bold' }}><spna style={{color:'#71797E'}}>/</spna>work<spna style={{color:'#71797E'}}>.</spna></h2>
             <p style={{ fontSize: '20px' }}>Crafting Success Stories: Explore My Work</p>
            </div>
          </div>
        </div>

        <div className="container-fluid hero hero-top"  style={{}}>
        <div className="container">
          <div className='row' style={{marginTop:'100px'}}>
          <div class="card" style={{width: '25rem', marginBottom:'60px'}}>
            <img style={{marginTop:'30px',}} src={proj1} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'16px' ,  fontFamily:'IBM Plex Sans, sans-serif', fontWeight:'bold'}}>Iserver-cybersecurity-website</h5>
            <p class="card-text">A dynamic cybersecurity hub powered by React JS. Stay ahead of threats with our intuitive interface and comprehensive resources. Protect your digital assets confidently with ReactSecure.</p>
            <h6 style={{marginTop:'60px'}}>React JS | Bootstrap | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>
          
          <div class="card" style={{width: '25rem', marginLeft: '50px', marginBottom:'60px'}}>
            <img style={{marginTop:'30px',}} src={proj2} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'10px', fontFamily:'IBM Plex Sans, sans-serif', fontWeight:'bold'}}>InfoPulse - News website</h5>
            <p class="card-text"> React.js news app website delivers up-to-date news articles sourced from reliable sources. With a clean and intuitive user interface, users can easily browse and discover the latest headlines, personalized to their interests. </p>
            <h6 style={{marginTop:'40px'}}>React JS | Bootstrap | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          <div class="card" style={{width: '25rem', marginLeft: '50px', marginBottom:'60px'}}>
            <img style={{marginTop:'30px', marginLeft:'100px', width:'190px'}} src={dbank} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'2px', fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'bold'}}>Dbank - Website</h5>
            <p class="card-text">Whatever the complexity, we bring the full benefit of cross-platform tech to the table, including lower costs, faster time to market and maximum reach.</p>
            <h6 style={{marginTop:'64px'}}> Html | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          </div>

          <div className='row' data-aos="fade-right" style={{marginTop:'50px'}}>
          <div class="card" style={{width: '25rem', marginBottom:'60px'}}>
            <img style={{marginTop:'30px',}} src={link} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'20px' ,  fontFamily:'IBM Plex Sans, sans-serif', fontWeight:'bold'}}>LinkedIn Clone</h5>
            <p class="card-text">This project is a replica of the LinkedIn platform built using React.js. It emulates job searching, and skill endorsements, while utilizing the React.js framework for efficient development and enhanced user experience.</p>
            <h6 style={{marginTop:'60px'}}>React JS | Bootstrap | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>
          
          <div class="card" style={{width: '25rem', marginLeft: '50px', marginBottom:'60px'}}>
            <img style={{marginTop:'30px',}} src={netflix} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'20px', fontFamily:'IBM Plex Sans, sans-serif', fontWeight:'bold'}}>Netflix Clone</h5>
            <p class="card-text">A React.js project replicating the functionality and design of Netflix. Features include user authentication, browsing movies/shows, viewing trailers, and a responsive UI for seamless viewing across devices. </p>
            <h6 style={{marginTop:'65px'}}>React JS | Bootstrap | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          <div class="card" style={{width: '25rem', marginLeft: '50px', marginBottom:'60px'}}>
            <img style={{marginTop:'30px', marginLeft:'60px', width:'250px'}} src={quiz} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'2px', fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'bold'}}>Quiz-Application</h5>
            <p class="card-text">Java-based Quiz Application Website: A project designed to facilitate online quizzes, allowing users to create, participate, and manage quizzes efficiently. Utilizing Java for robust backend functionality, real-time scoring, and result analysis.</p>
            <h6 style={{marginTop:'40px'}}> Java </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          </div>

          <div className='row' style={{marginTop:'50px'}} data-aos="fade-right">
          <div class="card" style={{width: '25rem', marginBottom:'60px', marginLeft:'230px'}}>
            <img style={{marginTop:'30px',}} src={gym} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'20px' ,  fontFamily:'IBM Plex Sans, sans-serif', fontWeight:'bold'}}>Health-Edge : Gym Website</h5>
            <p class="card-text">HealthEdge is a WordPress website project designed for health-related applications. It offers a user-friendly interface with features tailored to health management, including appointment scheduling, health tracking, and resource access.</p>
            <h6 style={{marginTop:'60px'}}> Wordpress </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          <div class="card" style={{width: '25rem', marginLeft: '50px', marginBottom:'60px'}}>
            <img style={{marginTop:'30px',}} src={drum} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title" style={{ marginTop:'50px', fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'bold'}}>Drum Kit</h5>
            <p class="card-text">A fun, interactive project built using HTML, CSS, and JavaScript. Experience the joy of creating beats with virtual drums. Tap or click to play different drum sounds, perfect for music enthusiasts and beginners alike.</p>
            <h6 style={{marginTop:'85px'}}> Html | CSS | Javascript </h6>
            <a href="#" class="card-link" style={{fontSize:'40px'}}>^</a>
           </div>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}
