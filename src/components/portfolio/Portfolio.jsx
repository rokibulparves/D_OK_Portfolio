import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {id: 'featured', title: 'Featured'},
    {id: 'web', title: 'Web App'},
    {id: 'mobile', title: 'Mobile App'},
    {id: 'design', title: 'Design'},
    {id: 'contact', title: 'Contact'},
  ]

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "contact":
        setData(contentPortfolio);
        break;
    }
  }, [selected])

console.log(list)
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((list) => (
          <PortfolioList 
            title={list.title} 
            active={selected === list.id}
            setSelected = {setSelected}
            id = {list.id}
          />
        ))}
      </ul>
      
      <div className="container">
        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" />
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
