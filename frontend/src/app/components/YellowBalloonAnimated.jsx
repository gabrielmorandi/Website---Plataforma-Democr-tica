export default function YellowBalloon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="BallonYellow" style={{ transformOrigin: "center center" }}>
        <g
          id="Stroke"
          className="animate-balloonYellow"
          style={{
            strokeWidth: 6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path
            id="Vector"
            d="M12 98.4984C12 134.116 49.9158 162.983 96.6867 162.983C114.006 162.983 130.122 159.028 143.533 152.221C148.825 149.538 183.057 169.07 187.417 165.581C192.108 161.825 166.85 134.977 170.248 130.458C177.314 121.038 181.358 110.121 181.358 98.4843C181.373 62.8809 143.458 34 96.6867 34C49.9158 34 12 62.8809 12 98.4984Z"
            stroke="#FFD500"
            stroke-width="8"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}
