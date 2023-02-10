import '../Footer/Footer.css'
import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
   
    <div className="containerrr">
     
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6 className="title-footer title-footer1 ">درباره  </h6>
          <p className="text-justify">
            توسعه دهنده فرانت اند و به زودی بک اند، رشته اقتصاد در دانشگاه خوارزمی در حال تحصیل هستم، عاشق کد زدن و چالش های اون هستم و به صورت خودجوش وارد این حوزه شدم
            به گرافیک علاقه دارم، یادگیری همیشه برام جذاب بوده و هست 
             </p>
        </div>

        <div className="col-xs-6 ">
          <h6 className="title-footer title-footer2">اطلاعات</h6>
          <ul className="footer-links">
            <li className="flex-img-footer">
                <p>تهران - خیابان هفده شهریور </p>
                </li>
            <li className="flex-img-footer">
                <p>mhkhatamipanah@gmail.com</p>
            </li>
            <li className="flex-img-footer">
                <span>5306 </span>
                <span> 366 </span> 
                <span>0902  </span> 
            </li>
          </ul>
        </div>
        <div className="fast-links ">
          <h6 className="title-footer title-footer4">لینک سریع</h6>
          <ul className="footer-links">
            <li className="flex-img-footer">
                 <img className="img-footer footer-low-width" src="./images/icon/footer/25.png" alt=""/>
                <a href="#home">
                  <p>
                    خانه
                     </p>
                </a>
                </li>
            <li className="flex-img-footer">
                <a href="#about">
                  <p>
                    درباره من
                     </p>
                </a>
            </li>
            <li className="flex-img-footer">
                <a href="#ability">
                  <p>
                    مهارت
                     </p>
                </a>
                 
            </li>
            <li className="flex-img-footer">
              <a href="#contact">
                <p>
                  راه های ارتباطی
                   </p>
              </a>
               
          </li>
       
          </ul>
        </div>

        <div className=" col-md-3">
          <h6 className="title-footer title-footer3">رسانه های اجتماعی</h6>
          <ul className="footer-links socials-icons">
            <li>
                <a href="https://instagram.com/m_h_khatamiiii_panah?igshid=ZjA0NjI3M2I=">
                </a>
            </li>
            <li>
                <a href="https://github.com/mhkhatamipanah">
                </a>
            </li>
            <li>
                <a href="https://twitter.com/MH_khatamipanah?t=FNL49a1fxq3aM-axQyj60w&s=09">
                   
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mmd-khatami-06829625a">
                </a>
            </li>
          </ul>
          <a href="#home">
          </a>
        </div>
      </div>
     

      <hr className="hr-tag"/>
    </div>
    <div className="containerrr">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text"> سایت شخصی است. هرگونه کپی برداری پیگرد قانونی دارد. تمامی حقوق محفوظ است.
            <span>© 2022</span>
          </p>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer