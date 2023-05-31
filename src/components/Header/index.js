import React,{ useState,useEffect } from 'react'
import { Anchor,Button, Drawer } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../Image/Magic Study -logo.png';
import {faBars} from '@fortawesome/free-solid-svg-icons';

// import {Link } from "react-router-dom";
import './header.css'
const { Link } = Anchor;


const Header = () => {
    const [open, setOpen] = useState(false);
    const [bgColor, setBgColor] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => { 
      setOpen(false);
    }
    const  listenScrollEvent = e => {
    if (window.scrollY > 200) {
       setBgColor(true)
     
    } else {
      setBgColor(false)
    }
  }
  useEffect(() =>{
    listenScrollEvent();
    window.addEventListener('scroll', listenScrollEvent)
  });
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      // scrolls to 20px above element
      window.scrollTo(position.left, position.top + window.scrollY - 70);
    }
  };
  return (
      <div>
    <div className={bgColor ? "main-header-bg-scroll":"main-header-bg" } id="header">
    <div className='container-fluid desktopheard'>
    <div className='header'>
    <div className="logo" >
    <a href="#Home"> {<img alt="example" src={Logo} className="logo-set" />}</a>
    </div>
<div className='header-banner'>

{/* <Anchor targetOffset ='65.2'> */}
{/* <Link to="#Home"  > Home </Link>
<Link href="#About" > About </Link>
<Link href="#Services" > Services </Link>
<Link href="#Packages" title="Packages" > Packages </Link>
<Link to="#contact" > contact </Link> */}

<Link href="#" 
 className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" }
 title="Home" />
 <label className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" } onClick={() => handleClickScroll("About")}>
  About
</label> 
<label className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" } onClick={() => handleClickScroll("Services")}>
Services
</label>
<label className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" } 
onClick={() => handleClickScroll("Academics")}>
Academics
</label>
<label className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" } 
onClick={() => handleClickScroll("contact")}>
Contact
</label>
{/* <Link href="#About" className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" }
 title="About" /> */}
{/* <Link href="#Services" className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" }
title="Services" /> */}
{/* <Link href="#Academics" className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" }
 title="Academics" /> */}
{/* <Link href="#Packages" title="Packages" /> */}
{/* <Link href="#contact" className={bgColor ? "ant-anchor-link-title-scroll-head":"ant-anchor-link-title-scroll" }
 title="Contact" /> */}


{/* 
</Anchor> */}
</div>
    </div>
</div>
 <div className='mobileVisible'>
 <div className='mobilehead-main'>
 <div className="logo-mobile" >
    <Link to='http://www.google.com'> {<img alt="example" src={Logo} className="logo-set" />}</Link>
    </div>
  <Button type="" className='mobilehead-right' onClick={showDrawer}>
  {/* <i className="fa fa-bars bars" ></i>  */}
  <FontAwesomeIcon icon= {faBars}  className={bgColor ? "bar-icon-scroll":"bar-icon" }/>
      </Button>
      </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
      {/* <Anchor targetOffset ='65.2'> */}
      {/* <Link href="#Home" > Home </Link>
      <Link href="#About" > About </Link>
      <Link href="#Service" > Service </Link>
      <Link href="#Packages" > Packages </Link>
      <Link href="#contact" > contact </Link> */}
{/*  
      <Link href="#Home" title="Home" onClick={() => setOpen(false)}  className='mobile-drawer-textcolor'/>
      <Link href="#About" title="About"  onClick={() => setOpen(false)} style={{color: "white"}}/>
      <Link href="#Services" onClick={() => setOpen(false)} title="Services" />
      <Link href="#Academics" onClick={() => setOpen(false)} title="Academics" /> */}
      {/* <Link href="#Packages" title="Packages" /> */}
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("Home");setOpen(false);}}>
    Home
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("About");setOpen(false);}}>
    About
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("Services");setOpen(false);}}>
    Services
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("Academics");setOpen(false);}}>
    Academics
    </label><br/><br/>
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("contact");setOpen(false);}}>
    Contact
    </label>
      
  {/* </Anchor> */}
      </Drawer>

  </div>
</div>
</div>
  )
}

export default Header