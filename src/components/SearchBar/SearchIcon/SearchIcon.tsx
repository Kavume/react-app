import React from 'react';

interface SearchIconProps {
  fill: string;
  stroke: string;
  className: string;
}

const SearchIcon = (props: SearchIconProps) => {
  return (
    <svg
      className={props.className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.79099" cy="8.06162" r="7.31101" stroke={props.stroke} strokeWidth="1.5" />
      <path
        d="M14.4546 13.0656L19.939 18.5494"
        stroke={props.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
