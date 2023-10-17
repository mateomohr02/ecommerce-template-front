import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ id, name, image }) => {
  return (
    <div className="w-48 flex flex-col items-center">
      <Link className="flex flex-col items-center justify-center" to={`/brands/${id}`}>
        <img src={image} alt={name} className="rounded my-1 w-32" />
        <p className="font-medium text-center font-sans text-lg antialiased">{`${name}`}</p>
      </Link>
    </div>
  );
};

export default BrandCard;
