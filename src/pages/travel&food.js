import React, { Component } from 'react';

export default class TravelFood extends Component {
  render() {
    return (
      <article className="content portfolio gray-bg" id="chaptertravelfood">
        <div className="inner">
          <h2>Travel & Food</h2>
          <div className="title-divider"></div>
          <h3>Travel and Food are my passions!</h3>
          <p>
            I love exploring this beautiful world. When I have the opportunity, I research
            and plan detailed trips to diverse places of interest. I am always thinking about
            my next adventure to new and exciting destinations all over the world.
          </p>
          <p>Travel Plan for 2017: </p>
          <ul>
            <li>02.10 - 02.15, New Orleans, LA, US</li>
            <li>05.26 - 05.30, Philadelphia, PA, US</li>
            <li>07.01 - 07.05, Vancouver & Victoria, Canada</li>
            <li>09.09 - 09.17, Guanajuato & Querétaro, Mexico</li>
            <li>11.18 - 11.26, Kyoto & Hiroshima, Japan</li>
          </ul>
          <div className="portfolio-con">
            <div className="container-sub margin-top50">
              <div className="row">
                <div id="grid-gallery" className="grid-gallery">
                  <section className="grid-wrap">
                    <ul className="grid">
                      <li>
                        <figure>
                          <img src="./src/assets/images/neworleans.jpg" alt=""/>
                          <figcaption>
                            <div className="figcaption-details"> <img src="../src/assets/images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>New Orleans, Louisiana, USA</h3>
                              <span>French Quarter, Garden District, Steamboat Natchez Cruise</span>
                            </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="./src/assets/images/philadelphia.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="../src/assets/images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Philadelphia, Pennsylvania, USA</h3>
                              <span>Independence Hall, Liberty Bell, Longwood Garden</span>
                            </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="./src/assets/images/vancouver.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="../src/assets/images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>British Columbia, Canada</h3>
                              <span>Vancouver & Victoria</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="./src/assets/images/guanajuato.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="../src/assets/images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Mexico</h3>
                              <span>Guanajuato, San Miguel de Allende & Santiago de Querétaro</span> </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="./src/assets/images/kyoto.jpg" alt="" />
                          <figcaption>
                            <div className="figcaption-details"> <img src="../src/assets/images/icon-plus.png" height="82" width="82" alt="" />
                              <h3>Japan</h3>
                              <span>Kyoto, Hiroshima, Himeiji & Kobe</span> </div>
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
                            <h3>New Orleans, LA</h3>
                            <span>Historic fusion of French, Cajun, and all American</span>
                            <p>
                              With its distinct French and Spanish Creole architecture, traditional delicacies, and multilingual heritage, New Orleans provides a cross-cultural historical experience in the South.
                            </p>
                          </figcaption>
                          <div id="owl-demo1" className="owl-carousel">
                            <div className="item"><img src="../src/assets/images/neworleans1.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans2.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans3.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans4.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans5.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans6.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/neworleans7.jpg" alt="" /></div>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Philadelphia, PA</h3>
                            <span>Birthplace of the nation</span>
                            <p>
                              Historic Philadelphia, spanning from the Delaware River to 7th Street and from 
                              Vine Street to Lombard Street, is rich in history.
                              It’s home to buzzed-about restaurants, beer gardens, owner-operated 
                              boutiques, galleries pushing artistic boundaries, and more.
                            </p>
                          </figcaption>
                          <iframe width="854" height="480" src="//www.youtube.com/embed/M8egp_3ewfs" frameBorder="0" allowFullScreen></iframe>
                          </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Vancouver and Victoria, British Columbia</h3>
                            <span>Canandian beauty meets civilization</span>
                            <p>Majestic mountains, sparkling ocean, rainforests and beautiful foliage throughout all four seasons combine to make Vancouver one of the most beautiful cities in the world.
                            Victoria's unique blend of old world charm and new world experiences allow this island destination to be an escape from the hurried world.</p>
                          </figcaption>
                          <div id="owl-demo2" className="owl-carousel">
                            <div className="item"><img src="../src/assets/images/vancouver1.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/vancouver2.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/vancouver3.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/vancouver4.jpg" alt="" /></div>
                          </div>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Mexico</h3>
                            <span>San Miguel de Allende and Santiago de Querétaro</span>
                            <p>
                              A colonial-era city in Mexico's central highlands, San Miguel de Allende is known for its baroque Spanish architecture, thriving arts scene and cultural festivals.
                              Santiago de Querétaro is called the “Pearl of the Bajio”, with extraordinary beauty, architectural heritage, and dramatic history.
                            </p>
                          </figcaption>
                          <iframe width="854" height="480" src="//www.youtube.com/embed/ppVHV8Km0Y0" frameBorder="0" allowFullScreen></iframe>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <figcaption>
                            <h3>Japan</h3>
                            <span>Kyoto and Hiroshima</span>
                            <p>
                            The ancient capital of Japan, Kyoto has numerous classical Buddhist temples, breath-taking gardens, imperial palaces, Shinto shrines and traditional wooden houses.
                            Hiroshima serves as a reminder of the atrocities of war, the perseverance of the human spirit, and a modern symbol for world peace. 
                            </p>
                          </figcaption>
                          <div id="owl-demo3" className="owl-carousel">
                            <div className="item"><img src="../src/assets/images/kyoto1.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto2.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto3.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto4.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto5.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto6.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto7.jpg" alt="" /></div>
                            <div className="item"><img src="../src/assets/images/kyoto8.jpg" alt="" /></div>
                          </div>
                        </figure>
                      </li>
                    </ul>
                    <nav>
                      <span className="fa nav-prev"></span>
                      <span className="fa nav-next"></span>
                      <span className="fa nav-close"></span>
                    </nav>
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