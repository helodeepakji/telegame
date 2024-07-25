import React from "react";

const ProgressRect = ({
  width = "w-20",
  height = "h-2",
  fillPercentage = 38,
}) => {
  // Ensure fillPercentage is between 0 and 100
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage));

  return (
    <div
      className={`${width} ${height}   overflow-hidden rounded-3xl shadow-inner  bg-gradient-to-r from-[#7aff3d36] to-[#7BFF3D]`}
    >
      <div
        className="h-full bg-[#54FF03] transition-all duration-500 ease-in-out rounded-xl"
        style={{ width: `${clampedFillPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressRect;
