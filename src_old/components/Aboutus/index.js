import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Image1 from "../../Image/img-about-1.jpg";
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import "./about.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const { Meta } = Card;

const imageset = {
  // height: "496px",
  // width: "88%" 
  // height: "353",
  width: "61%",
  borderRadius: "50%",
};


const Aboutus = () => {
  return (
    <>
      <div id="About" className="bg-color ">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 2 }}
            xl={{ span: 2 }}
            xxl={{ span: 2 }}
          >
            {" "}
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 20 }}
            xl={{ span: 20 }}
            xxl={{ span: 20 }}
          >
            <div className="about-div">
              {/* <Card 
    style={{
      
    }}
  >   */}     
              <h2  className="aabout-title">
              <AnimationOnScroll animateIn="animate__zoomIn ">
              <span >
              About
              </span>
    
              
              </AnimationOnScroll>
              </h2>
           
             
              <hr className="aabout-hr"/>
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                  xxl={{ span: 12 }}
                >
                  <div className="about-avatar-center"> 
                          <Avatar
                          className="animate__animated animate__fadeInUp"
                          size={{ xs: 240, sm: 320, md: 320, lg: 400, xl: 400, xxl: 600 }}
                          icon={<img alt="example" src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"  />
                          }
                          />
                    {/* <img alt="example" src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" className="imageset" /> */}
                   
                  </div>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                  xxl={{ span: 12 }}
                >
                  <br />
              
                  <div className="about-text">
                    <p>
                      EDUCON Softech Services is one of fastest growing global
                      education compreany having its presence in Maharashtra;
                      EDUCON Softech Services was started with a firm objective
                      of Transformation through Technology. We Transform lives
                      through Education and Technology Solutions.
                      <br />
                      <br />
                      <br />
                      Presenting E – Learning (KG to PG) unique PLATFORM to make
                      this journey of transformation QUICK and EASY. Under this
                      platform we are offering a wide range of educational
                      programs and solutions in area of SKILL Development, CHILD
                      Development, SELF Development, Assessments and Parenting.
                    </p>
                    <br />
                  </div>
                 
                </Col>
              </Row>
              {/* </Card> */}
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 2 }}
            xl={{ span: 2 }}
            xxl={{ span: 2 }}
          >
            {" "}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Aboutus;
