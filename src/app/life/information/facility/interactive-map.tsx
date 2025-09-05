'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface MapPoint {
  title: string;
  cx: number;
  cy: number;
  description?: string;
  pointImageUrl?: string;
  tooltipOnLeft?: boolean;
}

interface InteractiveMapProps {
  points: MapPoint[];
  imageUrl: string;
  width: number;
  height: number;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  points,
  imageUrl,
  width,
  height,
}) => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="relative w-full max-w-[1000px] mx-auto mb-8">
        <Image
          src={imageUrl}
          alt="Interactive Map"
          width={width}
          height={height}
          className="w-full h-auto rounded-lg shadow-lg grayscale"
          priority
        />

        {points.map(point => (
          <div
            key={point.title}
            className="absolute w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-indigo-400 hover:bg-indigo-600 cursor-pointer ring-2 ring-white/70 hover:ring-indigo-300 transition-all duration-150"
            style={{
              left: `${((point.cx / width) * 100).toFixed(3)}%`,
              top: `${((point.cy / height) * 100).toFixed(3)}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => {
              setHoveredTitle(point.title);
            }}
            onMouseLeave={() => {
              setHoveredTitle(null);
            }}
            onClick={() => {
              setActivePoint(point === activePoint ? null : point);
            }}
            title={point.title}
          >
            {hoveredTitle === point.title && (
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2
                  text-white text-xs bg-[#1c1c29] rounded px-2 py-1
                  whitespace-nowrap shadow-md
                  transition-all duration-150 ease-in-out
                  ${point.tooltipOnLeft ? 'right-full mr-2' : 'left-full ml-2'}
                `}
              >
                {point.title}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1000px] mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mb-8">
        {activePoint ? (
          <div className="flex flex-col md:flex-row gap-6">
            {activePoint.pointImageUrl && (
              <div className="md:w-1/3 shrink-0">
                <Image
                  src={activePoint.pointImageUrl}
                  alt={activePoint.title}
                  width={400}
                  height={300}
                  className="w-[400px] h-auto object-cover rounded-md shadow"
                />
              </div>
            )}
            <div className={activePoint.pointImageUrl ? 'md:w-2/3' : 'w-full'}>
              <h3 className="text-3xl font-bold text-[#1c1c29] mb-3 pb-2 border-b border-gray-300">
                {activePoint.title}
              </h3>
              {activePoint.description ? (
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                  {activePoint.description}
                </p>
              ) : (
                <p className="text-gray-500 italic">N/A</p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-500 text-lg py-8 text-center">
              點擊地圖上的標點以查看詳細資訊。
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
