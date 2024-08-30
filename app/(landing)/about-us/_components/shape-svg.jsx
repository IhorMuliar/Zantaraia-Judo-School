const ShapeSvg = ({ className, width, height, path, fill }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} fill={fill} />
  </svg>
);

export default ShapeSvg;
