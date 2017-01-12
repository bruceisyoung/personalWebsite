import React, { Component } from 'react';

export default class TravelFood extends Component {
  render() {
    return (
      <article className="content portfolio gray-bg" id="chaptertravelfood">
        <div className="inner">
          <h2>Portfolio</h2>
          <div className="title-divider"></div>
          <h3>Our portfolio features a variety of projects and services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
          <div className="portfolio-con">
            <div className="container-sub margin-top50">
              <div className="row">
                <div id="grid-gallery" className="grid-gallery">
                  <section className="grid-wrap">
                    <ul className="grid">
                      <li>
                        <figure> <img src="images/work1.jpg" alt=""/>
                          <figcaption>
                            <div className="figcaption-details"> <img src="images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>The Flavour Restaurant</h3>
                              <span>Website Design & Development</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure> <img src="images/work2.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Herbal Beauty Salon</h3>
                              <span>Photography</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure> <img src="images/work3.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Kayra Modelleri</h3>
                              <span>Branding and Identity</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure> <img src="images/work4.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Fashion and You</h3>
                              <span>APPS and Web Design</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure> <img src="images/work5.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Whole Food Flour</h3>
                              <span>Branding and Identity</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </section>
                  
                  <section className="slideshow">
                    <ul>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>The Flavour Restaurant</h3>
                            <span>Website Design & Development</span>
                            <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, 						ullamco craft beer.</p>
                          </figcaption>
                          <div id="owl-demo1" className="owl-carousel">
                            <div className="item"><img src="images/work-details1.jpg" alt="" /></div>
                            <div className="item"><img src="images/work-details2.jpg" alt="" /></div>
                            <div className="item"><img src="images/work-details3.jpg" alt="" /></div>
                            <div className="item"><img src="images/work-details4.jpg" alt="" /></div>
                            <div className="item"><img src="images/work-details5.jpg" alt="" /></div>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Herbal Beauty Salon</h3>
                            <span>Photography</span>
                            <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
                          </figcaption>
                          <img src="images/work2.jpg" alt="" /></figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Kayra Modelleri</h3>
                            <span>Branding and Identity</span>
                            <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
                          </figcaption>
                          <div id="owl-demo2" className="owl-carousel">
                            <div className="item"><img src="images/work3.jpg" alt="" /></div>
                            <div className="item"><img src="images/work1.jpg" alt="" /></div>
                            <div className="item"><img src="images/work2.jpg" alt="" /></div>
                            <div className="item"><img src="images/work4.jpg" alt="" /></div>
                            <div className="item"><img src="images/work5.jpg" alt="" /></div>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Fashion and You</h3>
                            <span>APPS and Web Design</span>
                            <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
                          </figcaption>
                          <iframe width="854" height="480" src="//www.youtube.com/embed/ZwzY1o_hB5Y" frameborder="0" allowfullscreen></iframe> </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Whole Food Flour</h3>
                            <span>Branding and Identity</span>
                            <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
                          </figcaption>
                          <img src="images/work5.jpg" alt="" /> </figure>
                      </li>
                    </ul>
                    <nav> <span className="fa nav-prev"></span> <span className="fa nav-next"></span> <span className="fa nav-close"></span> </nav>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};