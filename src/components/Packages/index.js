import React from 'react'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import Image1 from '../../Image/School-Packages-1.jpg';
import Image2 from '../../Image/School-Packages-2.jpg';
import Image3 from '../../Image/School-Packages-3.jpg';
import Image4 from '../../Image/School-Packages-4.jpg';
import './packages.css'

const { Meta } = Card;

const title = {
  textAlign: "center",
  fontSize: "xx-large",
  color: "#696161"
}

const Packages = () => {
  return (
    <div id='Packages'> 
   <h2 style={title}>Packages</h2>
    <Row>
  
     <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >  
      <div className='packages-main-card'>
   
           
              <img alt="example" src={Image1}  className="card-img" />
         
    </div>
      </Col>

       <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      > <div className='packages-main-card'>
            <img alt="example" src={Image2} className="card-img" />
         
     
     </div>
      </Col>

      <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >
            <div className='packages-main-card'>
       <img alt="example" src={Image3} className="card-img" />
         
    </div>
      </Col>
      <Col
            xs={{span: 24}}
            sm={{span: 24}}
            md={{span: 12}}
            lg={{span: 6}}
            xl={{span: 6}}
            xxl={{span: 6}}
      >  <div className='packages-main-card'>
         
         <img alt="example" src={Image4} className="card-img" />
  
  </div>
      </Col>
    </Row>
    
    </div>
  )
}

export default Packages