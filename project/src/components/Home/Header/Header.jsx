import React from "react";
import "./Header.css";
import image1 from '../../../Assets/images/15.jpg'



function tabClick(e){
  document.querySelector('.btn-tab-active').classList.remove('btn-tab-active');
  e.target.classList.add('btn-tab-active')
}
function Header() {
  return (
  <>
  <div className="container-header-tab">
    <div className="header-image">
      <img className="image-tab" src={image1} alt="" />
    </div>
    <div className="header-tabs"> 
      <div className="container-tab">
        <button onClick={tabClick} className="btn-tab btn-tab-active">مادرانه</button>
        <button onClick={tabClick} className="btn-tab">نوزاد</button>
        <button onClick={tabClick} className="btn-tab">کودک</button>
        <button onClick={tabClick} className="btn-tab">نوجوان</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Header;
