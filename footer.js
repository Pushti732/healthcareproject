import React from 'react'
import icon1 from "./imgs/icons8-phone.png";
import icon2 from "./imgs/icons8-at.png";
import icon3 from "./imgs/icons8-location.png";
import icon4 from "./imgs/icons8-globe.png";

function FooterComponent() {
  return (
    <div>
<div class="containerr">
  <div class="first-div"><p className="head1">Mohammedthofiq</p>
        <p>ihdfdsdssfddjk</p></div>
  <div class="second-div"><div class="flex-container">

<div class="flex-child magenta">
<p className="f-header">Our Appointment Timings</p>
            <div className="app-tmgs">
                <ul className="f-list">
                <li>Mon  09:00 - 23:00</li>
                <li>Tue  09:00 - 21:00</li>
                <li>Wed  09:00 - 21:00</li>
                <li>Thur  09:00 - 21:00</li>
                <li>Fri  09:00 - 21:00</li>
                <li>Sat  09:00 - 21:00</li>
                <li>Sun  09:00 - 21:00</li>
                </ul>
</div>
</div>
<div class="flex-child green">
<p className="f-header">Contact Us</p>
                <ul className="f-list">
                <li><img src={icon1} className='icon-f'/> <a href="#">+919677825255</a></li>
                <li><img src={icon2} className='icon-f'/> <a href="#">mohammedthofiq@gmail.com</a></li>
                <li><img src={icon3} className='icon-f'/> <a href="#">chennai, IN</a></li>
                <li><img src={icon4} className='icon-f'/> <a href="#">mohammedthoufiq.simplybook.me</a></li>
               
                </ul>
</div>

</div></div>
</div>
      {/* <div className="conatiner1">
        <div id="ft-box">
        <p className="head1">Mohammedthofiq</p>
        <p>ihdfdsdssfddjk</p>
        </div><br/>
    </div> */}
    {/* <div class="flex-container">

<div class="flex-child magenta">
  Flex Column 1
</div>

<div class="flex-child green">
  Flex Column 2
</div>

</div> */}

      {/* <div className="f-container">
      <span className="f-content2">
            <p className="f-header">Mohammedthofiq</p>
                <ul className="f-list">
                <li>ihdfdsdssfddjk</li>
                </ul>
                </span>

      </div>
        <div className="f-container2">
            <span className="f-content2">
            <p className="f-header">Our Appointment Timings</p>
                <ul className="f-list">
                <li>Mon  09:00 - 23:00</li>
                <li>Tue  09:00 - 21:00</li>
                <li>Wed  09:00 - 21:00</li>
                <li>Thur  09:00 - 21:00</li>
                <li>Fri  09:00 - 21:00</li>
                <li>Sat  09:00 - 21:00</li>
                <li>Sun  09:00 - 21:00</li>
                </ul>
          </span>
        </div>
        
        <div className="f-container3">
        <span className="f-content2">
            <p className="f-header">Contact Us</p>
                <ul className="f-list">
                <li><img src={icon1} className='icon-f'/> <a href="#">+919677825255</a></li>
                <li><img src={icon2} className='icon-f'/> <a href="#">mohammedthofiq@gmail.com</a></li>
                <li><img src={icon3} className='icon-f'/> <a href="#">chennai, IN</a></li>
                <li><img src={icon4} className='icon-f'/> <a href="#">mohammedthoufiq.simplybook.me</a></li>
               
                </ul>
                </span>
        </div> */}
       
    </div>
  )
}

export default FooterComponent;