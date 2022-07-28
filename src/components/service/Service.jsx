// import { useEffect, useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";
import "./service.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   tabletPortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";
import {featuredPortfolio} from "../../data";

export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "tablet",
  //     title: "Mobile App",
  //   },
  // ];

  // useEffect(() => {
  //   switch (selected) {
  //     case "featured":
  //       setData(featuredPortfolio);
  //       break;
  //     case "web":
  //       setData(webPortfolio);
  //       break;
  //     case "tablet":
  //       setData(tabletPortfolio);
  //       break;
  //     case "design":
  //       setData(designPortfolio);
  //       break;
  //     case "content":
  //       setData(contentPortfolio);
  //       break;
  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className="service" id="service">
      <h1>Services</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList 
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {featuredPortfolio.map((d) => (
          <div className="item" key={d.id}>
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
