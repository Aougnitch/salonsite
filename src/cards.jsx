import PropTypes from "prop-types";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="w-full sm:w-full rounded-2xl overflow-hidden shadow-lg bg-pink-200 transition transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2> */}
        <p className="text-white  mt-2">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
