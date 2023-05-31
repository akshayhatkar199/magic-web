import React, { useState } from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "../../Image/input-bg.png";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
import axios from 'axios';
import { message } from 'antd';
import {
  faPhoneVolume,
  faLocationDot,
  faEnvelope,
  faSchool,
  faBars,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
import { emailApi } from "../Helper/email";
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
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const MessagesendEmail = async(values) => {
            //  console.log("values",values)
                    setLoading(true)
                var formData = new FormData();
                    formData.append("name", values.user_name);
                    formData.append("email", values.user_email);
                    formData.append("phone",values.number);
                    formData.append("message",values.message);
                await axios({
                    method: "post",
                    url: "https://rainbow-international.in/Api/Api1/sendEmail",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                }).then(function (res) {
                    // setResponse("Api Result => " + res.data.status + " msg " + res.data.message);
                    form.resetFields();
                    // message.success('Email Send success full');
                    swal("Email","Email Send success full","success")
                    setLoading(false)
                }).catch(function (ex) {
                    // setResponse("Exception => " + ex.toString());
                    message.error('Email Not Success full');
                    swal("Email","Email Not Send full","error")
                    setLoading(false)
                });
          };
          var letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

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
          ></Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 18 }}
            xl={{ span: 16 }}
            xxl={{ span: 14 }}
          >
            {/* <h2 className="title-contact"> </h2> */}
            <br />
            <br />
            <Form
              form={form}
              layout="vertical"
              label={
                <>
                  Username <span className="redMarkk"> *</span>
                </>
              }
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
                    label={
                      <>
                        Name <span className="redMarkk"> *</span>
                      </>
                    }
                    className="inputname formRequredItem"
                    // label="Name"
                    name="user_name"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                      //  {whitespace:true},
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (value && String(value).match(letters) ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Please Enter only characters!")
                          );
                        },
                      }),
                  
                    ]}
                  
                  >
                    <Input className="input-box" placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                    label={
                      <>
                        Email <span className="redMarkk">*</span>
                      </>
                    }
                    className="inputname formRequredItem"
                    // label="Email"
                    name="user_email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input className="input-box" placeholder="Email"  />
                  </Form.Item>

                  <Form.Item
                    label={
                      <>
                        Number <span className="redMarkk"> *</span>
                      </>
                    }
                    className="inputname formRequredItem"
                    // label=" Number"
                    name="number"
                    rules={[
                      {
                        type: "number",
                        required: true,
                        message: "",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (value && String(value).length == 10) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Please input 10 number!")
                          );
                        },
                      }),
                    ]}
                  >
                    <InputNumber
                      className="input-box"
                      type="number"
                      name="number"
                      placeholder={"Mobile Number"}
                      onKeyUp={(e) => {
                        // console.log(e.target.value);
                        // console.log(String(e.target.value).length);
                        if (String(e.target.value).length > 10) {
                          form.setFieldsValue({
                            number: Number(
                              String(e.target.value).substring(0, 10)
                            ),
                          });
                        }
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <>
                        Message <span className="redMarkk"> *</span>
                      </>
                    }
                    className="inputname formRequredItem"
                    // label="Message"
                    name="message"
                    rules={[
                      {
                        required: true,
                        // message: "Please input your Message!",
                           message: "",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (value && String(value).length >= 20) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Please Enter 20 charters !")
                          );
                        },
                      }),
                    ]}
                  >
                    <TextArea
                      className="input-text-area"
                      placeholder={"Message"}

                       onKeyUp={(e) => {
                          console.log(e.target.value);
                          console.log(String(e.target.value).length);
                          if(String(e.target.value).length > 20){
                            form.setFieldsValue({
                            "Message":String(String(e.target.value).substring(0,20))
                          })
                          }

                        }}
                    />
                  </Form.Item>

                  <Form.Item
                  // style={{ float: "right", marginRight: "70px" }}
                  >
                    <Button
                      type="primary"
                      loading={loading}
                      value="Send"
                      htmlType="submit"
                    >
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
                    <AnimationOnScroll animateIn="animate__bounceIn">
                      <h3 className="contactus-style "> Contact Us </h3>
                    </AnimationOnScroll>
                    <hr className="contact-hr" />
                    <br />
                    <div className="address-text">
                      <div className="main-adrres-div">
                        <p className="contact-address-main">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="icon-contact"
                          />
                        </p>
                        <p className="adrress-pin-text">
                          Panguru Systems, Surve No. 23/10, Balajingar,
                          <br />
                          Dhankawadi, Pune – 411043, Maharashtra, India
                        </p>
                      </div>
                      <br />
                      <p className="contact-phone">
                        <FontAwesomeIcon
                          icon={faPhoneVolume}
                          className="icon-contact"
                        />
                        +91-9755585858
                      </p>
                      <br />
                      <div className="main-adrres-div">
                        <p className="contact-address-main">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="icon-contact"
                          />
                        </p>
                        <p className="adrress-pin-text">
                          pangurusystems@gmail.com
                        </p>
                      </div>
                      {/* <p className="contact-text-email"> <FontAwesomeIcon icon={faEnvelope} className="icon-contact" /> pangurusystems@gmail.com </p> */}
                    </div>
                    <br />
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
          ></Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
