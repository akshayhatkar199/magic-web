import React from "react";
import { Col, Row,Menu } from 'antd';
import Logo from '../../Image/Magic Study-footerlogo-white.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./footer.css"

const title = {
    textAlign: "center",
    fontSize: "xx-large",
    color: "rgb(105, 97, 97)",
    paddingTop:"10px"
}

const Footer =()=>{
    return(
        <div className="footer-bg">
       <br/>
       <Row>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <AnimationOnScroll animateIn="animate__flipInY">
      <div className='footer-logo-set'>
       
      <a href="#Home"><img src={Logo} alt="logo" className="img-footer " ></img> </a>
      
      </div>
      </AnimationOnScroll>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
     <div className="footer-menu-text">
      <Menu className='footer-menu'>
      <a href="#"  className="title-footer"> <Menu.Item key="1"  className="footer-menu">Windows exe Setup </Menu.Item> </a>
      <a href="#Home"  className="title-footer"><Menu.Item key="2" className="footer-menu">Home</Menu.Item></a>
      {/* <a href="#Packages"  className="title-footer"><Menu.Item key="3" className="footer-menu">Packages</Menu.Item></a> */}
       </Menu>
       </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className="footer-menu-text">
      <Menu className='footer-menu'>
      <a href="#"  className="title-footer">   <Menu.Item key="4" className="footer-menu">Android App  </Menu.Item> </a>
    
      <a href="#About"  className="title-footer"> <Menu.Item key="5" className="footer-menu"> <span className='footer-heading'>About</span></Menu.Item></a>
      <a href="#Contact"  className="title-footer"><Menu.Item key="6" className="footer-menu">Contact</Menu.Item></a>
    
    
  
       </Menu>
      </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className="footer-menu-text">
      <Menu className='footer-menu'>
      <a href="#"  className="title-footer">  <Menu.Item key="7" className="footer-menu" >Partner Login   </Menu.Item> </a>
     
      <a href="#Services" className="title-footer"><Menu.Item key="8" className="footer-menu"><span className='footer-heading'>Services</span></Menu.Item></a>
      </Menu>
      </div>
      </Col>
    </Row>
   <br/>
   <hr className="footer-hr">
   </hr>
   <div>
   <Row>
   
      <Col  
        xs={{span: 24}}
        sm={{span: 24}}
        md={{span: 24}}
       
        >
             <div style={{textAlign:"center"}}>

          
            <label className="footer-label">
                    @2023 Magic Study.All Rights Reserved.Privacy policy Terms and Conditions
            </label>
            </div>
       </Col>
      
    </Row>
   </div><br/>
       </div>
    )
}

export default Footer 