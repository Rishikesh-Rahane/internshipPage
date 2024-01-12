"use client";
import "./styles/profile.css";
import image156 from "../../../../public/assets/image 156.png";
import image157 from "../../../../public/assets/image 157.png";
import image158 from "../../../../public/assets/image 158.png";
import image153 from "../../../../public/assets/image 153.png";
import uiuxcardImage from "../../../../public/assets/image 162.png";
import figmaIcon from "../../../../public/assets/Figma.png";
import adobeIlustrator from "../../../../public/assets/Adobe Illustrator.png";
import adobeXd from "../../../../public/assets/Adobe XD.png";
import adobePhotoshop from "../../../../public/assets/Adobe Photoshop.png";
import cardBgImage from "../../../../public/assets/image 141.png";
import { WhoWeAreData } from "../../data/WhoWeAreData";
import { CertificateData } from "../../data/CertificateData";
import Image from "next/image";
import { CompaniesData } from "../../data/Companies";
import TestimonialBg from "../../../../public/assets/testimonial_bg.png";
import { TestimonialCards } from "@/app/data/TestimonialCards";
import Forward from "../../../../public/assets/Forward.png";
import React, { useRef, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import applicationformbg from "../../../../public/assets/applicationformbg.png";
import Form from "./Form";

SwiperCore.use([Pagination, Navigation]);
// Initialize Swiper core modules

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const formRef = useRef(null);
  // const [test] = TestimonialCards
  const swiperOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % test.length);
  };

  return (
    <div className="main-container"  > 
      <>
        {WhoWeAreData.map((item, index) => {
          return (
            <div key={index} className="who-we-are-section" id="about" ref={aboutRef} >
              <div className="head-para">
                <div className="headings-section">
                  <div className="line-1"></div>
                  <h1>{item.heading}</h1>
                  <div className="line-1"></div>
                </div>
                <div className="para-section">{item.para}</div>
              </div>
              <div className="feature-cards">
                {item.keyFeatures.map((feature, index) => {
                  return (
                    <>
                      <div className="card" key={index}>
                        <Image
                          src={feature.image}
                          className="feature-image"
                        ></Image>
                        <h2 className="feature-title">{feature.title}</h2>
                        <p className="feature-para">{feature.para}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </>

      <div className="information-section">
        <div className="heading-section">
          <div className="line-1"></div>
          <h1>What You'll Get</h1>
          <div className="line-1"></div>
        </div>
        <div className="feature-section">
          <div className="img-para">
            <Image src={image156}></Image>
            <p>Receive mentorship and guidance throughout your program</p>
          </div>
          <div className="img-para">
            <Image src={image157}></Image>
            <p>
              Flexible working hours, task based approach and ample
              opportunities for skill enhancement
            </p>
          </div>

          <div className="img-para">
            <Image src={image158}></Image>
            <p>
              Gain Hands-on experience working on real world projects and
              cutting-edge technologies
            </p>
          </div>
          <div className="img-para">
            <Image src={image153}></Image>
            <p>
              Work in a diverse team from across the nation, fostering
              collaboration and cross functional learning{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="profile-tabs" id="profile" ref={profileRef}>
        <h1>Profiles We Provide</h1>
        <div className="tabs">
          <div className="it-profile">
            <button>IT-Profiles</button>
          </div>
          <button>Non-IT Profiles</button>
        </div>
      </div>

      <div className="cards-section"  >
        <div className="profile-cards">
          <Image src={uiuxcardImage} className="profile-image"></Image>
          <div className="inner-card-container">
            <Image src={cardBgImage} className="card-bg-image"></Image>
            <div className="card-contents">
              <div className="heading-part">
                <h2>UI/UX Design Intern</h2>
                <span>Tenure: 90 days</span>
              </div>

              <div className="skills-part">
                <h3 className="h3">Skills Proficiency:</h3>
                <Image src={figmaIcon}></Image>
                <Image src={adobeIlustrator}></Image>
                <Image src={adobeXd}></Image>
                <Image src={adobePhotoshop}></Image>
              </div>

              <div className="eligibility-section">
                <h3 className="h3">Eligibility:</h3>
                <div className="para-section">
                  <p>. Portfolio showcasing UI/UX Projects</p>
                  <p>
                    . Strong Foundation in Interaction Design, User Experience
                    and Visual Design
                  </p>
                  <p>
                    . Good Communication Skills and Ability to Work in a Team
                  </p>
                </div>
              </div>

              <div className="buttons-section">
                <button className="view-more-btn">
                  <span>View More</span>
                </button>
                <button className="apply-now-btn">
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-cards">
          <Image src={uiuxcardImage} className="profile-image"></Image>
          <div className="inner-card-container">
            <Image src={cardBgImage} className="card-bg-image"></Image>
            <div className="card-contents">
              <div className="heading-part">
                <h2>UI/UX Design Intern</h2>
                <span>Tenure: 90 days</span>
              </div>

              <div className="skills-part">
                <h3 className="h3">Skills Proficiency:</h3>
                <Image src={figmaIcon}></Image>
                <Image src={adobeIlustrator}></Image>
                <Image src={adobeXd}></Image>
                <Image src={adobePhotoshop}></Image>
              </div>

              <div className="eligibility-section">
                <h3 className="h3">Eligibility:</h3>
                <div className="para-section">
                  <p>. Portfolio showcasing UI/UX Projects</p>
                  <p>
                    . Strong Foundation in Interaction Design, User Experience
                    and Visual Design
                  </p>
                  <p>
                    . Good Communication Skills and Ability to Work in a Team
                  </p>
                </div>
              </div>

              <div className="buttons-section">
                <button className="view-more-btn">
                  <span>View More</span>
                </button>
                <button className="apply-now-btn">
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-cards">
          <Image src={uiuxcardImage} className="profile-image"></Image>
          <div className="inner-card-container">
            <Image src={cardBgImage} className="card-bg-image"></Image>
            <div className="card-contents">
              <div className="heading-part">
                <h2>UI/UX Design Intern</h2>
                <span>Tenure: 90 days</span>
              </div>

              <div className="skills-part">
                <h3 className="h3">Skills Proficiency:</h3>
                <Image src={figmaIcon}></Image>
                <Image src={adobeIlustrator}></Image>
                <Image src={adobeXd}></Image>
                <Image src={adobePhotoshop}></Image>
              </div>

              <div className="eligibility-section">
                <h3 className="h3">Eligibility:</h3>
                <div className="para-section">
                  <p>. Portfolio showcasing UI/UX Projects</p>
                  <p>
                    . Strong Foundation in Interaction Design, User Experience
                    and Visual Design
                  </p>
                  <p>
                    . Good Communication Skills and Ability to Work in a Team
                  </p>
                </div>
              </div>

              <div className="buttons-section">
                <button className="view-more-btn">
                  <span>View More</span>
                </button>
                <button className="apply-now-btn">
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certificate-section">
        {CertificateData.map((item, index) => {
          return (
            <div key={index} className="main-certi-section">
              <div className="certi-heading-section">
                <h1 className="certi-title">{item.title}</h1>
                <h2 className="certi-heading">{item.heading}</h2>
              </div>
              <div className="certi-main-section">
                <Image src={item.image}></Image>
                <div className="certi-right-section">
                  <div className="sub-section">
                    <div className="sub-heading">Add To Your Resume</div>
                    <div className="sub-para">
                      Stand out from the crowd by adding the certificate to your
                      resume
                    </div>
                    <div className="sub-heading">
                      Receive Letter of Recommendations
                    </div>
                    <div className="sub-para">
                      The best performing candidates will receive a letter of
                      recommendation!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="companies-section">
        {CompaniesData.map((compData, index) => {
          return (
            <>
              <div className="comp-head" key={index}>
                <hr className="hr-line" />
                <h1 className="company-heading">{compData.heading}</h1>
                <hr className="hr-line" />
              </div>
              <p className="company-tagline">{compData.tagLine}</p>
              <div className="company-images">
                {compData.images.map((img, index) => {
                  return (
                    <>
                      <Image
                        src={img}
                        key={index}
                        className="company-image"
                      ></Image>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>

      <div className="testimonial-section">
        <div className="testimonial-left-section">
          <h1 className="testimonial-left-heading">
            Hear from <br /> Out Past Interns
          </h1>
          <p className="testimonial-left-para">
            More than 10,000 interns trained
          </p>
        </div>
        <>
          <Image
            src={TestimonialBg}
            className="testimonial-right-section"
          ></Image>

          <Swiper
            className="testimonial-inner-right-frame mySwiper"
            slidesPerView={"auto"}
            spaceBetween={30}
            autoplay={{
              delay: 2000, // Set the delay between slides in milliseconds (3 seconds in this example)
              disableOnInteraction: false, // Allow manual interaction to interrupt autoplay
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay, A11y]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TestimonialCards.map((test, index) => {
              return (
                <SwiperSlide className="card-frame" key={index}>
                  <div className="card-inner-frame">
                    <Image
                      src={test.profileimage}
                      className="profile-image"
                    ></Image>
                    <p className="profile-title">{test.title}</p>
                    <Image
                      src={test.organization}
                      className="profile-org"
                    ></Image>
                    <div className="rating">
                      <span className="span">4.8</span>
                      <Image src={test.rating} className="rating-image"></Image>
                    </div>
                    <p className="profile-feedback">
                      {'"' + test.feedback + '"'}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="forward">
            <Image
              src={Forward}
              className="forward-image swiper-button-next"
            ></Image>
          </div>
        </>
      </div>

      <div className="application-form-section" id="form" ref={formRef}>
        <p className="interest-para">Interested? Just Fill The Form!</p>
        <div className="form-section">
          <div className="form">
            <Form></Form> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
