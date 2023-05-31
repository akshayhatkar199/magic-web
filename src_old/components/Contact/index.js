import React, {useState} from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from "../../Image/input-bg.png";
import emailjs from '@emailjs/browser';
import {  faPhoneVolume,faLocationDot,faEnvelope ,faSchool,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import "./contact.css";
const { TextArea } = Input;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Contact = () => {
  const [loading,setLoading] = useState(false);
  const [form] = Form.useForm();
  const MessagesendEmail = (values) => {
    /*
    setLoading(true)
console.log("values",values)
    var form1 = document.createElement("form");
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "from_name");
    FN.setAttribute("value", values.user_name);

    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "user_email");
    EID.setAttribute("value", values.user_email);

    var mes = document.createElement("input");
    mes.setAttribute("type", "text");
    mes.setAttribute("name", "message");
    mes.setAttribute("value", values.message);

    var to_name = document.createElement("input");
    to_name.setAttribute("type", "text");
    to_name.setAttribute("name", "to_name");
    to_name.setAttribute("value", "Akshay Hatkar");

    var phone_number = document.createElement("input");
    phone_number.setAttribute("type", "text");
    phone_number.setAttribute("name", "phone_number");
    phone_number.setAttribute("value", values.number);

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    
    form1.appendChild(FN);
    form1.appendChild(EID);
    form1.appendChild(mes);
    form1.appendChild(to_name);
    form1.appendChild(phone_number);
    form1.appendChild(s);
    console.log(form1)
    emailjs.sendForm('service_s8zlusi', 
                      // Service ID
                     'template_m61ae8c',
                    //  Template ID
                    form1,
                    //  Public Key , API keys ,general
                     '8MUX_0jxAVQD8lMle')
                  
      .then((result) => {
          console.log(result.text);
          form.resetFields();
          setLoading(false)
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });  
      */
  };

  return (

    <div className="contact-div" id="contact">
    <div className="img-bg">
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 3 }}
          xl={{ span: 4 }}
          xxl={{ span: 5 }}
        >
         
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 18 }}
          xl={{ span: 16 }}
          xxl={{ span: 14 }}
        >
          <h2 className="title-contact"> </h2>
     
          <Form
            form={form}
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={MessagesendEmail}
            validateMessages={validateMessages}
            autoComplete="off"
          >
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
                <Form.Item
                  className="inputname"
                  label="Name"
                  name="user_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input className="input-box" placeholder={"Name"} />
                </Form.Item>

                <Form.Item
                  className="inputname"
                  label="Email"
                  name="user_email"
                 rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                >
                  <Input className="input-box" placeholder="Email" />
                </Form.Item>

                    

    <Form.Item className='inputname'
                      label=" Number"
                      name="number"
                      rules={[
                        {
                          type: 'number',
                          required: true,
                          message: '',
                        },
                        // ({ getFieldValue }) => ({
                        //         validator(_, value) {
                        //          if (value && String(value).length == 10) {
                        //             return Promise.resolve();
                        //           }
                        //           return Promise.reject(new Error('Please input 10 number!'));
                        //         },
                        //       }),
                      ]}
                    >
                  <InputNumber  className='input-box' type="number" 
                  placeholder={"Mobile Number"}
                // onKeyUp={(e) => {
                //   console.log(e.target.value);
                //   console.log(String(e.target.value).length);
                //   if(String(e.target.value).length > 10){
                //     form.setFieldsValue({
                //     "number":Number(String(e.target.value).substring(0,10))
                //   })
                //   }
                
                // }}

                  /> 
                </Form.Item>
        

                <Form.Item
                  className="inputname"
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Message!",
                    },
                  ]}
                >
                  <TextArea className="input-text-area" placeholder={"Message"} />
                </Form.Item>
                
                <Form.Item
                // style={{ float: "right", marginRight: "70px" }}
                >
                  <Button type="primary" loading={loading} value="Send" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>


              </Col>           
          
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
             <div className="address-contact-div">
              {/* <label className="contact-Address">Address</label>  */}
              <AnimationOnScroll animateIn="animate__bounceIn" >
                <h3 className="contactus-style "> Contact Us </h3> 
                </AnimationOnScroll>
                      <hr className="contact-hr"/>
                      <br/>
                      <div className="address-text">
               <p className="contact-address-main"><FontAwesomeIcon icon={faLocationDot} className="icon-contact" /> Panguru Systems, Surve No. 23/10, Balajingar, Dhankawadi, Pune – 411043, Maharashtra, India </p>
                  <p className="contact-pin"> </p>
                     <br/>
               <p className="contact-phone"><FontAwesomeIcon icon={faPhoneVolume} className="icon-contact" /> +91-9755585858 </p>
                     <br/>
              <p className="contact-text-email"> <FontAwesomeIcon icon={faEnvelope} className="icon-contact" /> pangurusystems@gmail.com </p>
              </div>
                  <br/>
                </div>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
              >
             {/* cccc */}
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 3 }}
          xl={{ span: 4 }}
          xxl={{ span: 5 }}
        >
         
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default Contact;
