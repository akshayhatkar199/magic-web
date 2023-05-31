import React from 'react'
import './services.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Col, Row } from 'antd';

const Services = () => {
  return (
    <div id='Services' className='service-bg ' >
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
     
    <h2 className='service-title'>
     <AnimationOnScroll animateIn="animate__zoomIn" >
     <br/>
     <span>
     Services
     </span>
       </AnimationOnScroll>
       </h2>
   
  
    <hr className="Services-hr"/>
<div className='service-Div'>
    <h3 className='title-service' >E Learning </h3>

<p className='p-tag-service'>Understanding eLearning is simple. eLearning is learning utilizing electronic technologies to access educational curriculum outside of a traditional classroom. In most cases, it refers to a course, program or degree delivered completely offline.</p>
<p className='p-tag-service'>E Learning ability to present course material including class syllabus, assignments, quizzes, and provide video and audio plus a whiteboard screen where the lesson is presented just like it would be on a classroom’s video screen or blackboard.</p>
<p className='p-tag-service'>E Learning is a simplified syllabus, developed to understand easily for students to score marks. E- Learning is very useful educational content for the students of Maharashtra and CBSE Board’s. From 1st to 7th for Maharashtra Board covered English, Marathi and Semi English medium as per the syllabus all subjects. Std. 1st to 10th for CBSE Board having ICT, Mathematics, EVS and Science subjects.</p>
<p className='p-tag-service'>E learning syllabus is developed in Android systems, it doesn’t require Internet for whole period.
Audio Video Content.
PDF Books. 
Long Question and Answers.
Objective Question and Answers with immediate result analysis system.
</p>
<p className='p-tag-service'>It helps students to understand better than traditional education system. It also helpful to teachers and parents to teach students easily.</p>

<h3 className='title-service' >Benefits of E Learning</h3>

<p className='p-tag-service'>Your schedule, your pace, your place. If you can maintain the necessary self-discipline, the benefits of eLearning are almost too numerous to count. You can cover the material when you have time, go over it as often as you need.</p>
<br/>
<br/>
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

export default Services