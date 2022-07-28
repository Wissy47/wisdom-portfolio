import "./testimonials.scss";
import {SiFreelancer} from "react-icons/si";
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Brennan H",
      title: "",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Wisdom is great at what he does. He understood all the details of the project and was very easy to communicate with. In the end, he delivered exactly what I was looking for. I would definitely recommend for any other web development projects.",
    },
    {
      id: 2,
      name: "Eric C",
      title: "",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Outstanding work as always. I will continue to work with Wisdom on future projects. Thanks so much!",
      featured: true,
    },
    {
      id: 3,
      name: "Amit Ranjan S",
      title: "",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "He is a really awesome guy. He completed my work what I wanted. Great experince with him. I will hire you again with more projects. Thank you so much for fixng my issue. See you soon.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              {/* <img
                className="user"
                src={d.img}
                alt=""
              /> */}
              <SiFreelancer className="icon"/>
              
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
