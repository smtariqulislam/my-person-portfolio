import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Person Advisor.",
    github: "https://github.com/smtariqulislam/service-client-site",
    demo: "https://services-project-a803d.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Resale Bags",
    github: "https://github.com/smtariqulislam/resale-bags-client",
    demo: "https://old-bag-shop.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Quiz App",
    github: "https://github.com/smtariqulislam/simple-quiz-app",
    demo: "https://the-owner-of-the-quiz-creater-tariqul.netlify.app/",
  },
];

const Portfolio = () => {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          {/* <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio title</h3>
            <div className="portfolio_item-spaces">
              <a href=" " className="btn" target="_blank">
                GitHub
              </a>
              <a href=" " className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article> */}
          {
            data.map(({id,image,title,github,demo})=>{
                return (
                  <article key={id} className="portfolio_item">
                    <div className="portfolio_item-image">
                      <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-spaces">
                      <a href={github} className="btn" target="__blank">
                       GitHub
                      </a>
                      <a href={demo} className="btn btn-primary" target="__blank">
                      Live Demo
                      </a>
                    </div>
                  </article>
                );
            })
            }
        </div>
      </section>
    );
};

export default Portfolio;