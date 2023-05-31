import React from 'react'
import { Col, Row } from 'antd';
import { Button  } from 'antd';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGraduationCap,faUserGraduate,faChalkboardUser ,faSchool,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import './academic.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Academic = () => {
  return (
  <div  className='bg-img' id="Academics">
    <Row>
    <Col
            xs={{span: 24}} 
            sm={{span: 24}}
            md={{span: 24}}
            lg={{span: 1}}
            xl={{span: 2}}
            xxl={{span: 2}}
      > </Col>
      <Col
            xs={{span: 24}} 
            sm={{span: 24}}
            md={{span: 24}}
            lg={{span: 22}}
            xl={{span: 20}}
            xxl={{span: 20}}
      > 
      
      
      <div>
      
    <h2 className="title">
    <AnimationOnScroll animateIn="animate__zoomIn ">
    <span>
    Academic
     </span>
    
     </AnimationOnScroll>
     </h2>
  
     
      <hr className="Academic-hr"/>
    <p className='Academi-text'> Educational Apps review and recommendation platform for educational apps. All of our syllabus and company is 
    licensed by particular government and educational bodies. 
    professionally experienced teachers, to help educators progress a younger child's education.</p>

        <Row>
     <Col
            xs={{span: 24}} 
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      > 
        <AnimationOnScroll animateIn="animate__zoomIn  " animateOnce={true}>
      <div className='Academic-card-ac animate__animated animate__zoomIn'>
    
      <div className='only-card-hover'> 
            <Card className='Academic-main-card'
          
            >  <div className="title-card-academic">
            <FontAwesomeIcon icon={faGraduationCap} className="icons-academic" />
            </div>
            <h2 className='title-card-academic'>Maharashtra State Board</h2>
            <small></small>
            <ul className='list-academic'>
                <li> Marathi Medium</li>  
                <li className='list'> Std. 1st to 7th</li>  
                <li> English Medium</li>  
                <li className='list'> Std. 1st to 7th</li>  
                <li> Semi English Medium</li>
                <li className='list'>Std. 1st to 7th</li>
                
                {/* <li> Android TV</li> */}
            </ul>
            <br/>

            {/* <Button type="primary" danger>
                Primary
                </Button> */}
            </Card>
            </div>
          
            </div>
              </AnimationOnScroll>
      </Col>
       <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >
       <AnimationOnScroll animateIn="animate__zoomIn " animateOnce={true}>
           <div  className='Academic-card-ac'>
          
           <div className='only-card-hover'> 
            <Card  className='Academic-main-card'
            
            >
             <div className='title-card-academic'>
            <FontAwesomeIcon icon={faUserGraduate} className="icons-academic"/>
            </div>
           <h2 className='title-card-academic'>CBSE Board</h2>
           <small></small>
            <ul className='list-academic'>
                <li>English Mediums</li>  
                <li className='list'> Std. 1st to 12th</li>  
                <li>Hindi Medium</li>  
                <li className='list'>Std. 1st to 12th.</li>  
                
            </ul>
            <br/>
            {/* <Button type="primary" danger>
                Primary
                </Button> */}

            </Card>
            </div>
           
            </div>
            </AnimationOnScroll>
      </Col>
      <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >
       <AnimationOnScroll animateIn="animate__zoomIn " animateOnce={true}>
       <div  className='Academic-card-ac'>
      
       <div className='only-card-hover'> 
            <Card className='Academic-main-card'
            
            >
             <div className='title-card-academic'>
            <FontAwesomeIcon icon={faSchool} className="icons-academic" />
            </div>
            <h2 className='title-card-academic'>Pre - School</h2>
            <ul className='list-academic'>
                <li>Play Group </li>
                <li> Nursery</li>
                <li> Junior kg</li>
                <li> Senior Kg</li>
                               
            </ul>
        
            <br/>
            </Card>
            </div>
            
       </div>
       </AnimationOnScroll>
    </Col>
    <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >
       <AnimationOnScroll animateIn="animate__zoomIn " animateOnce={true}>
       <div  className='Academic-card-ac'>
      
       <div className='only-card-hover'> 
            <Card className='Academic-main-card'
            
            >
             <div className='title-card-academic'>
            <FontAwesomeIcon icon={faChalkboardUser} className="icons-academic"  />
            </div>
            <h2 className='title-card-academic'>Educational App</h2>
            <ul className='list-academic'>
                <li>Vedik Maths (Hindi)</li>
                <li> Vedik Maths (English)</li>
                <li> Computer Learning (English)</li>
                <li> Computer Learning (Hindi)</li>
                <li>Computer Learning (Marathi)</li>
                               
            </ul>
        
            <br/>
            </Card>
            </div>
          
       </div>
       </AnimationOnScroll>
    </Col>
    </Row>
    </div>
      </Col>
      <Col
            xs={{span: 24}} 
            sm={{span: 24}}
            md={{span: 24}}
            lg={{span: 1}}
            xl={{span: 2}}
            xxl={{span: 2}}
      > </Col>
    </Row>
   
</div>
   
  )
}

export default Academic