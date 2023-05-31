import React from "react";
import { Button, Carousel } from "antd";
import Image3 from "../../Image/Image-student-3.png";
import Image4 from "../../Image/Image-student-4.jpg";
import Image5 from "../../Image/Image-student-5.jpg";
import Image6 from "../../Image/Image-student-6.jpg";
import {LeftOutlined,RightOutlined} from "@ant-design/icons"
import { useRef} from "react";
import "./Carouselll.css"

const contentStyle = {
  margin: 0,
  height: "160px", 
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};
const Carouselll = () => {
const ref = useRef()

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <div id="Home" className="div-main-carasal">

    <Carousel afterChange={onChange} autoplay ref={ref} > 
      <div className="carausal-dev" >
      <div className="carausal-text-div">
        <img
          // src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          src={Image3}
          className="carausal-dev"
        />
        {/* <h3 className="text-carausal"> The href attribute requires a valid value to be accessible.  </h3> */}
        </div>
      </div>

      <div className="carausal-dev">
      <div className="carausal-text-div">
        <img
          // src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          src={Image4}
          className="carausal-dev"
        />
        {/* <h3 className="text-carausal"> The href attribute requires a valid value to be accessible.  </h3> */}
        </div>
      </div>

      <div className="carausal-dev">
          <div className="carausal-text-div">
        <img
          // src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          src={Image5}
          className="carausal-dev"
        />
        {/* <h3 className="text-carausal"> The href attribute requires a valid value to be accessible.  </h3> */}
        </div>
      </div>

      <div className="carausal-dev">
      <div className="carausal-text-div">
        <img
          // src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
          src={Image6}
          className="carausal-dev"
        />
        {/* <h3 className="text-carausal"> The href attribute requires a valid value to be accessible.  </h3> */}
        </div>
      </div>

      <div className="carausal-dev">
      <div className="carausal-text-div">
        <img
          // src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          src={Image5}
          className="carausal-dev"
        />
        </div>
      </div>
    </Carousel>

    <div>
      <Button className="carausal-arrow-back"
      shape="circle"
      onClick={()=>{
        ref.current.prev()
      }}
      icon={<LeftOutlined /> }
      >
      </Button>
      {/* <Button 
      
      onClick={()=>{
        ref.current.goTo(0)
      }}
      >Reset
      </Button> */}

      <Button   className="carausal-arrow-next"
      shape="circle"
      icon={ <RightOutlined />  }
      onClick={()=>{
        ref.current.next()
      }}>
     
      </Button>
    </div>
    </div>
  );
};
export default Carouselll;
