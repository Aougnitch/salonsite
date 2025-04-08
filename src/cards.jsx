import PropTypes from "prop-types";
import card1 from "./assets/card1.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";
import card4 from "./assets/card4.jpg";

const Card = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-full rounded-xl overflow-hidden shadow-lg bg-backcolor transition transform hover:scale-105">
      <img className="w-full h-60 object-cover" src={image} alt={title} />
      <div className="p-4">
        {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2> */}
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { Card, card1, card2, card3, card4 };
