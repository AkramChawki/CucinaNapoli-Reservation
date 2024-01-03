import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header '>
      <div className='header-inner'>
        <div className='logo text-green-700'>Cucina Napoli</div>
        <nav className='nav'>
          <li>
            <a href='/'>Accueil</a>
          </li>
          <li>
            <a href='https://menu.cucinanapoli.com/'>Menu</a>
          </li>
          <li>
            <a href='https://reservation.cucinanapoli.com/'>Reservation</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
        </nav>
        <div className='contact'>
          <a href="https://www.cucinanapoli.com/contact" className="text-green-700"> Contacter-Nous</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
