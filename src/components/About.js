import React, { useState, useEffect } from 'react';
import './About.css';
import banner from './img/banner.png'
import java from './img/java.png'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import react from './img/react.png'
import bootstrap from './img/bootstrap.png'
import Git from './img/Git.png'
import uxui from './img/uxui.png'
import seo from './img/seo.png'
import githubb from './img/githubb.png'
import firebase from './img/firebase.png'
import sql from './img/sql.png'
import md from './img/md.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`container-fluid hero hero-top ${loaded ? 'content-loaded' : 'content-loading'}`}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-4 ${loaded ? 'left-content' : ''}`} style={{ marginLeft: '40px' }}>
              {loaded && (
                <>
                  <h1 style={{ fontSize: '4.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>passionate creative.</h1>
                  <p style={{ fontSize: '20px' }}>I am an unusual bunch of creative who share one vision - building brands that stand out of the many. I enjoy stepping out of our comfort zone and delivering something new and unseen.</p>
                  <a className="btn" href="/contact" role="button" style={{ fontWeight: 'bolder', width: '150px', color: '#404243', marginTop: '20px', backgroundColor: '#F76D6D' }}>CONTACT ME</a>
                </>
              )}
            </div>
            <div className={`col-sm-7 ${loaded ? 'right-content' : ''}`} style={{ marginLeft: '70px' }}>
              {loaded && (
                <img src={banner} alt="" style={{ width: '100%', height: 'auto' }} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid hero mbc-about" style={{ marginTop: '100px', backgroundColor: '#FEDCDC' }}>
  <div className="container">
    <div className="row">
      <div className="col-sm-6" style={{ marginLeft: '40px' }}>
        <h1 style={{ fontSize: '3.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>Education</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-7" style={{ marginLeft: '150px', marginTop: '50px' }}>
        <div className="card" style={{ marginLeft: '40px' }}>
          <div className="card-body">
            <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>Electronics and Telecommunication Engineering</h4>
            <h6 className="card-text">All India Shri Shivaji Memorial Society's, Institute of Information Technology.</h6>
            <p>2020-2024</p>
            <a href="https://aissmsioit.org/" className="btn" style={{ backgroundColor: '#FEDCDC' }}>GO THERE</a>
          </div>
        </div>
      </div>
      <div className="col-sm-7" style={{ marginLeft: '350px', marginTop: '30px', marginBottom: '100px' }}>
        <div className="card" style={{ marginLeft: '40px' }}>
          <div className="card-body">
            <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }} > Higher Secondary School</h4>
            <h6 className="card-text">Kabnur Highschool and Junior College</h6>
            <p>2018-2020</p>
            <a href="https://schools.org.in/kolhapur/27340302008/kabnur-highschool-kabnur.html" className="btn" style={{ backgroundColor: '#FEDCDC' }}> GO THERE </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="container-fluid hero mbc-skills" data-aos="flip-right">
        <div className="container">
          <div className="col-sm-4 offset-sm-4 text-center">
            <h1 style={{ fontSize: '3.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>Skills</h1>
            <p style={{ fontSize: '20px' }}>Skillful Endeavors : Unleashing Potential</p>
          </div>
          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-sm-3">
              <img src={java} style={{ width: '200px', height: 'auto', marginLeft: '40px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={html} style={{ width: '120px', height: 'auto', marginLeft: '80px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={css} style={{ width: '90px', height: 'auto', marginLeft: '100px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={js} style={{ width: '200px', height: 'auto', marginLeft: '100px' }} alt="java" /></div>
          </div>

          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-sm-3">
              <img src={react} style={{ width: '120px', height: 'auto', marginLeft: '70px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={bootstrap} style={{ width: '120px', height: 'auto', marginLeft: '75px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={Git} style={{ width: '120px', height: 'auto', marginLeft: '80px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={uxui} style={{ width: '200px', height: 'auto', marginLeft: '100px' }} alt="java" /></div>
          </div>
          <div className="row" style={{ marginTop: '40px', marginBottom: '100px' }}>
            <div className="col-sm-3">
              <img src={seo} style={{ width: '200px', height: 'auto', marginLeft: '30px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={githubb} style={{ width: '180px', height: 'auto', marginLeft: '45px' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={firebase} style={{ width: '100%', height: 'auto' }} alt="java" /></div>
            <div className="col-sm-3">
              <img src={sql} style={{ width: '200px', height: 'auto', marginLeft: '100px' }} alt="java" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid hero mbc-certificate" style={{ marginTop: '100px', backgroundColor: '#fcf6d5' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-7" style={{ marginLeft: '40px' }}>
              <h1 style={{ fontSize: '3.8333rem', fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363', marginTop: '60px' }}>Certificates</h1>
              <p style={{ fontSize: '20px' }}>The Tapestry of Achievements : Certifications Unlocked</p>
            </div>

            <div className='col-sm-5 left' data-aos="fade-right">
             <div className="" style={{ marginTop: '50px' }}>
              <div className="card" style={{ marginLeft: '40px' }}>
               <div className="card-body" >
                <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>Full stack web development</h4>
                <h6 className="card-text">Udemy</h6>
               <a href="https://drive.google.com/file/d/1ff2ijsmiZUh6bbBbe5ltsqdcHHgZ-2wA/view?usp=drive_link" className="btn" target="_blank" style={{ backgroundColor: '#fcf6d5' }}>LEARN MORE</a>
             </div>
           </div>
         </div>
              <div className="" style={{ marginTop: '50px' }} data-aos="fade-right">
                <div className="card" style={{ marginLeft: '40px' }}>
                  <div className="card-body" >
                    <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>Java</h4>
                    <h6 className="card-text">HackerRank</h6>
                    <a href="https://drive.google.com/file/d/1a0xV0e_3PJrFLu0s0Hqo96SEeCB_Y6j_/view?usp=drive_link" className="btn" target="_blank" style={{ backgroundColor: '#fcf6d5' }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="" style={{ marginTop: '50px' }} data-aos="fade-right">
                <div className="card" style={{ marginLeft: '40px' }}>
                  <div className="card-body" >
                    <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>Javascript</h4>
                    <h6 className="card-text">HackerRank</h6>
                    <a href="https://drive.google.com/file/d/1fXOovzhzRJoA7TLGRa39W115QPOSemF3/view?usp=drive_link" className="btn" target="_blank" style={{ backgroundColor: '#fcf6d5' }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="" style={{ marginTop: '50px' }} data-aos="fade-right">
                <div className="card" style={{ marginLeft: '40px' }}>
                  <div className="card-body" >
                    <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>SQL</h4>
                    <h6 className="card-text">Linkedin</h6>
                    <a href="https://drive.google.com/file/d/1a5SS8XJdzYFOnWpZ-8Ysi0fM1MXuZn-u/view?usp=drive_link" className="btn"  target="_blank" style={{ backgroundColor: '#fcf6d5' }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="" style={{ marginTop: '50px',  marginBottom:'100px' }} data-aos="fade-right">
                <div className="card" style={{ marginLeft: '40px' }}>
                  <div className="card-body" >
                    <h4 className="card-title" style={{ fontFamily: '"Merriweather", serif', fontWeight: '1000', color: '#636363' }}>UX Design</h4>
                    <h6 className="card-text">CodeChef</h6>
                    <a href="https://drive.google.com/file/d/1h7-5W0BMZp4J5ZqjfUJVPRaXLnTegf-8/view?usp=drive_link" className="btn" target="_blank" style={{ backgroundColor: '#fcf6d5' }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-7 right" data-aos="fade-left">
              <img src={md} style={{ marginLeft: '150px', marginTop: '200px' }} alt="man-dog" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;