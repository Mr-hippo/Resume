import React from "react";
import {connect} from "react-redux"
import Monicker from "./teb1/monicker.jsx"

class Resume extends React.Component{
  constructor(props){
		super(props)
		this.state = {
			name: "Xheader组件"
		}
	}
  render(){
    return (
      <div>
        <div id="warp">
          <div className="content">
            <div className="teb1">
              <Monicker />
              <img src = "../image/1.jpg" className="teb_img"/>
            </div>
            <div className="teb2">
              <img src = "../image/2.jpg" className="teb_img"/>
            </div>
            <div className="teb3">
              <img src = "../image/3.jpg" className="teb_img"/>
            </div>
            <div className="teb4">
              <img src = "../image/4.jpg" className="teb_img"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    var iNow = 1;
    var warpHeight = $(window).height();
    var warpWidth = $(window).width();
    var tebImgs = $(".content").find(".teb_img");
    tebImgs.css("height", "100%");
    tebImgs.css("width", "100%");
    console.log(warpHeight);
    $("#warp").css("height", warpHeight)

    //窗口活动事件，大小
    $(window).resize(function(){
      var iNow = $(".content").attr("iNow");
      warpHeight = $(window).height();
      warpWidth = $(window).width();
      $("#warp").css("height", warpHeight)
      $(".content").css("marginTop", - warpHeight * (iNow - 1))
      tebImgs.css("height", "100%");
      tebImgs.css("width", "100%");
    })

    //鼠标滚轮事件， 向上滑动
    $(window).mousewheel(function(event, delta, deltaX, deltaY) {
        warpHeight = $(window).height();
        if (deltaY == 1) {
          console.log("向上了");
          if(iNow < 4){
            iNow++;
            console.log(iNow);
            $(".content").stop().animate({marginTop: - warpHeight * (iNow - 1)}, 2000, function(){})
          }
        }else{
          console.log("向下了");
          if(iNow > 1){
            iNow--;
            console.log(iNow);
            $(".content").stop().animate({marginTop: -warpHeight * (iNow - 1)}, 2000, function(){})
          }else{

          }
        }
        $(".content").attr("iNow", iNow);
    })

    //myName 居中

  }
}

export default connect((state)=>{
  return state
})(Resume)
