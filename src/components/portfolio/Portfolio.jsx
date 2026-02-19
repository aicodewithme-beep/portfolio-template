import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { profile } from "../../../data/profile";

// 🔹 Single Project Component
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {/* ✅ IMAGE NOW COMES FROM JSON */}
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>

            <p>{item.description}</p>

            {/* ✅ Buttons Auto Render Only If Link Exists */}
            <div className="buttons">
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer">
                  <button>See Demo</button>
                </a>
              )}

              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer">
                  <button>GitHub</button>
                </a>
              )}
            </div>

            {/* ✅ Tech Tags */}
            {item.tech && (
              <div className="techStack">
                {item.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 🔹 Main Portfolio Component
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>

      {/* ✅ Now Using Resume Data */}
      {profile.projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
