'use client';
import React, { useState } from 'react';

interface MapPoint {
  title: string;
  cx: number;
  cy: number;
  description?: string;
}

interface InteractiveMapProps {
  points: MapPoint[];
  imageUrl: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ points, imageUrl }) => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <div className="relative flex w-full justify-center">
      <svg className="relative rounded-lg w-[80%] h-auto z-0" viewBox="0 0 1414 2000">
        <image href={imageUrl} width="1414" height="2000" />

        {points.map(point => (
          <g key={point.title}>
            <circle
              cx={point.cx}
              cy={point.cy}
              r="10"
              fill="#1c1c29"
              className="cursor-pointer"
              onClick={() => { setActivePoint(point); }}
              onMouseEnter={() => { setHoveredTitle(point.title); }}
              onMouseLeave={() => { setHoveredTitle(null); }}
            />
            {hoveredTitle === point.title && (
              <text
                x={point.cx + 20}
                y={point.cy}
                fontSize="xx-large"
                fill="black"
                alignmentBaseline="middle"
                className="pointer-events-none"
              >
                {point.title}
              </text>
            )}
          </g>
        ))}
      </svg>

      {activePoint && (
        <div className="fixed top-1/3">
          <div className="absolute left-1/2 -translate-x-1/2 z-20">
            <div className="relative w-[30rem] bg-[#858484] p-6 rounded-xl">
              <button
                className="absolute top-6 right-6 text-white text-2xl hover:text-[#1c1c29]"
                onClick={() => { setActivePoint(null); }}
              >
                ✕
              </button>
              <h3 className="w-fit font-bold text-[#1c1c29] bg-[#d4d2d5] rounded-lg text-2xl px-2 my-2">{activePoint.title}</h3>
              <p className="text-white text-lg">{activePoint.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
