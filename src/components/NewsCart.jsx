import React from "react";
import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
import { BsBookmark, BsStarFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    published_date,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-lg p-4 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <BsBookmark className="text-gray-500 cursor-pointer" />
          <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title Section */}
      <h2 className="text-lg font-bold mb-3">{title}</h2>

      {/* Image Section */}
      <img
        src={image_url}
        alt="News"
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      {/* Details Section */}
      <p className="text-sm text-gray-700 mb-4">
        {details.slice(0, 100)}...{" "}
        <span className="text-primary cursor-pointer">Read More</span>
      </p>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4 border-t pt-2">
        {/* Rating Section */}
        <div className="flex items-center text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <BsStarFill
              key={i}
              className={
                i < Math.floor(rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating.number}
          </span>
        </div>

        {/* Views Section */}
        <div className="flex items-center text-gray-500">
          <AiOutlineEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
