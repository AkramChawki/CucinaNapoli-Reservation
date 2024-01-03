import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"Cucina"} />
      <BannerRowSecond title={"Napoli"} />
      <BannerRowCenter title={"LA VERRA PIZZA NAPOLETANA"} playMarquee={playMarquee} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, index) => (
      <motion.span
        key={index} // Add key prop with a unique value
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);


const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col text-green-700'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <span className='row-message'>
          Cucina NAPOLI, c'est une pizzeria hyper chaleureuse et authentique où, comme à Naples, on déguste une somptueuse Margherita recouverte de bons produits et servie avec de gros bords généreux. Un four au feu de bois, des tomates San Marzano de Paolo Ruggiero et une précieuse mozzarella.
        </span>
      </motion.div>
    </div>
  );
};
const BannerRowSecond = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <div className='row-col text-green-700'>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};


const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
