// import { useState } from "react";
import "./projects.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation } from "swiper";
import 'swiper/css/navigation';

export default function Projects() {
  const data = [
    {
      id: "1",
      icon: "./assets/tablet.png",
      title: "PooRaiser Web App",
      desc:
        "PooRaiser is a web app built to raise funds for Shelters/Rescue Organization, It feature QR Code and a unique link for each organization.",
      img: "./assets/portfolio/pooraiser_website.webp",
      url:"https://pooraiser.com/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "VetCareID",
      desc:
        "A web app that holds pet medical records from different vet in one place for easy access anywhere with the use of unique ID and password",
      img:
        "./assets/portfolio/vetcareid_website.webp",
      url:"https://staging.pooraiser.com/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Vosa",
      desc:
        "VOSA is a not-for-profit, professional organisation managed by a volunteer committee of music and movement educators.",
      img:
        "./assets/portfolio/vosa_website.webp",
       url:"https://vosa.org/",
    },
     {
      id: "4",
      icon: "./assets/writing.png",
      title: "LD Taken Quiz Visibility",
      desc:
        "This is a LearnDash wordpress plugin addon that controls the visibility of the taken questions on the statistic overlay of the student profile",
      img:
       "./assets/portfolio/LD_addon.webp",
      url:"https://github.com/Wissy47/LD-taken-quiz-visibility",
    },
     {
      id: "5",
      icon: "./assets/writing.png",
      title: "HandWork",
      desc:
        "An App that use by employee to store data  and also track their targets.",
      img:
        "./assets/portfolio/handwork_app.webp",
       url:"https://github.com/Wissy47/Data-collection-tool",
    },
  ];
  return (
    <div className="projects" id="projects">
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      breakpoints={{
          640: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
          },
        }}
      speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      loop
      navigation
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className="slider"
    >
      {data.map(({id, title, desc, img, url}) =>{
        return(
        <SwiperSlide className="container" key={id}>     
             <div className="item">
               <div className="top">
                <img
                  src={img}  alt=""
                />
              </div>
              <div className="left">
                <div className="leftContainer">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                 <span> <a href={url} target={"_blank"} rel={"noreferrer"}>View Projects</a></span>
                </div>
              </div>
            </div>
        </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
  );
  // const [currentSlide, setCurrentSlide] = useState(0);
  

  // const handleClick = (way) => {
  //   way === "left"
  //     ? setCurrentSlide(currentSlide > 0 ? currentSlide - 2 : 2)
  //     : setCurrentSlide(currentSlide < data.length - 2 ? currentSlide + 1 : 0);
  // };
  
  // return (
  //   <div className="projects" id="projects">
  //     <div
  //       className="slider"
  //       style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
  //     >
  //       {data.map((d) => (
  //         <div className="container" key={d.id}>
  //           <div className="item">
  //             <div className="top">
  //               <img
  //                 src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
  //                 alt=""
  //               />
  //             </div>
  //             <div className="left">
  //               <div className="leftContainer">
  //                 <h2>{d.title}</h2>
  //                 <p>{d.desc}</p>
  //                 <span>Projects</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //     <img
  //       src="assets/arrow.png"
  //       className="arrow left"
  //       alt=""
  //       onClick={() => handleClick("left")}
  //     />
  //     <img
  //       src="assets/arrow.png"
  //       className="arrow right"
  //       alt=""
  //       onClick={() => handleClick()}
  //     />
  //   </div>
  // );
}
