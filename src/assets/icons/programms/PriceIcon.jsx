import React from "react";

const PriceIcon = ({ color = 'currentColor', size = 50 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="50" height="50" rx="4" fill="#F3F1E1"/><path d="m33.3 16.446-7.245-4.61V8.054a1.055 1.055 0 0 0-2.11 0v3.78L16.7 16.446a1.055 1.055 0 0 0-.488.89v24.61c0 .582.472 1.054 1.055 1.054h15.468c.583 0 1.055-.472 1.055-1.055v-24.61c0-.36-.184-.695-.488-.889Zm-8.3 7.85a3.52 3.52 0 0 1-3.516-3.515 3.522 3.522 0 0 1 2.461-3.354v.893a1.055 1.055 0 1 0 2.11 0v-.893a3.522 3.522 0 0 1 2.46 3.354A3.52 3.52 0 0 1 25 24.297Z" fill="#F2BE22"/>
    </svg>
);

export default PriceIcon;
