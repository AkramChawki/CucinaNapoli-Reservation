import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const Listing = ({ data, open }) => {
  const { imageUrl, title, address, phone, restaurant } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price">{title}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{address}</span>
          </div>
          <div className="listing__row">
            <Feature iconName={"FaRuler"} iconLabel={phone} />
          </div>
          <div className="listing__row">
            <Link href="/reservation" method="get" data={{ restaurant: restaurant }} className="bg-green-700  text-white font-bold py-2 px-4 rounded">Reserver</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
