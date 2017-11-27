import React from "react";
class Monicker extends React.Component{
  render(){
    return (
      <div className="myName">
        <h2 className="name_big">Hello,I'm Hermit</h2>
        <b className="motto">Victory won’t come to me unless I go to it.</b>
        <p class="Z-p1">我叫张先斌</p>
        <p class="Z-p2">一名前端开发工程师</p>
        <p class="Z-p3">zhangxianbin0415@163.com</p>
      </div>
    )
  }
  componentDidMount(){
    var warpHeight = $(window).height();
    var warpWidth = $(window).width();
    $(".myName").css("left", warpWidth / 2 - $(".myName").width() / 2)
    $(".myName").css("top", warpHeight / 2 - $(".myName").height() / 2)

    $(window).resize(function(){
      warpHeight = $(window).height();
      warpWidth = $(window).width();
      $(".myName").css("left", warpWidth / 2 - $(".myName").width() / 2)
      $(".myName").css("top", warpHeight / 2 - $(".myName").height() / 2)
    })
  }
}

export default Monicker
