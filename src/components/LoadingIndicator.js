import React from "react";
import "./LoadingIndicator.scss";

function LoadingIndicator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="loading-indicator"
    >
      <path
        className="monkey"
        fill="#fff"
        stroke="red"
        d="M331 439.6H167.5L111 329.4v-50.2L61 227V112h56l133-51.6L380.5 112H439v115l-52.6 55.8v46.6L331 439.6zM179.3 425H319v-38H179.4v38zm-53.5-99l39 75.8V278L138 225.7V168l58.3-57.6 53 26.4 52.5-26.4L361 168v57.8L333.8 278v123.3l38-75.4V124L250 76.2l-124.2 48V326zm53.5 46.3H319v-90.7L249 258l-69.5 23.5v90.8zm69.5-129.8l74 24.8 23.6-45v-48l-47.3-46-49.5 25-50-25L153 174v48.4l23 45 73-24.7zm137.6-115.8v134.7l38-40.3v-94h-38zM75.6 221l35.5 37V126.7H76V221zm142.8 111.8l-25.8-26.6L203 296l26 26.5-10.6 10.3zm62.7 0l-10.4-10.2 25-26.6 10.7 10-25 26.7zm-50-101.5h-66v-67.6h66v67.6zm-51.4-14.7h37v-38.2h-37v38.2zM333.8 231h-66.4v-67.5h66.4V231zM282 216.5h37v-38.2h-37v38.2z"
      />
    </svg>
  );
}

export default LoadingIndicator;
