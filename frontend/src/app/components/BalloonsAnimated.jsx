export default function Balloons() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Balloons">
        <g id="BackBalloon" className="animate-balloonBack">
          <path
            id="Vector"
            d="M84 148.09C122.658 148.09 154 117.942 154 83.6721C154 49.402 122.658 24 84 24C45.3425 24 14 51.7797 14 86.0498C14 99.4256 18.7775 111.819 26.9062 121.945L18.375 164L52.64 141.536C62.5691 145.903 73.2336 148.132 84 148.09Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g id="FrontBalloon" className="animate-balloonFront">
          <path
            id="Vector_2"
            d="M115.543 161.007C154.2 161.007 185.543 130.859 185.543 96.589C185.543 62.3188 154.2 36.9169 115.543 36.9169C76.8855 36.9169 45.543 64.6965 45.543 98.9667C45.543 112.342 50.3205 124.736 58.4492 134.862L49.918 176.917L84.183 154.453C94.112 158.82 104.777 161.049 115.543 161.007Z"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
