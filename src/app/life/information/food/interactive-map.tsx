'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface MapPoint {
  title: string;
  cx: number;
  cy: number;
  fixed?: string;
  description?: string;
}

interface InteractiveMapProps {
  points: MapPoint[];
  imageUrl: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ points, imageUrl }) => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  const mapWidth = 1414;
  const mapHeight = 2000;

  const legendItems = [
    { label: '點擊查看詳細介紹', color: 'bg-slate-600', cx: 110, cy: 240 },
    { label: '移動滑鼠查看店名', color: 'bg-slate-400', cx: 110, cy: 300 },
    { label: '可作為定位地標', color: 'bg-[#d4d2d5]', cx: 110, cy: 360 },
  ];

  const getLabelPositionStyle = (point: MapPoint): React.CSSProperties => {
    const offset = point.fixed ? '5' : '6';
    switch (point.fixed) {
      case 'top':
        return { bottom: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { top: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { right: `calc(100% + ${offset}px)`, top: '50%', transform: 'translateY(-50%)' };
      case 'right':
      default:
        return { left: `calc(100% + ${offset}px)`, top: '50%', transform: 'translateY(-50%)' };
    }
  };

  return (
    <main className="w-full overflow-x-auto">
      <div className="relative flex w-[225%] lg:w-[95%] mx-auto justify-center">
        <Image src={imageUrl} alt="map" width={mapWidth} height={mapHeight} className="w-full h-auto rounded-lg" />

        {legendItems.map(legend => (
          <div
            key={legend.label}
            className={`absolute w-4 h-4 rounded-[4px] ${legend.color}`}
            style={{
              left: `${((legend.cx / mapWidth) * 100).toFixed(2)}%`,
              top: `${((legend.cy / mapHeight) * 100).toFixed(2)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-[#1c1c29]"
            >
              {legend.label}
            </div>
          </div>
        ))}

        {points.map(point => (
          <div
            key={point.title}
            className={`absolute w-4 h-4 rounded-[4px]
              ${point.description ? 'bg-slate-600' : point.fixed ? 'bg-[#d4d2d5]' : 'bg-slate-400'}
              ${point.fixed ? '' : 'hover:bg-[#1c1c29]'}`}
            style={{
              left: `${((point.cx / mapWidth) * 100).toFixed(2)}%`,
              top: `${((point.cy / mapHeight) * 100).toFixed(2)}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => { setHoveredTitle(point.title); }}
            onMouseLeave={() => { setHoveredTitle(null); }}
            onClick={() => { setActivePoint(point); }}
          >
            {(point.fixed ?? hoveredTitle === point.title) && (
              <div
                className={`absolute
                  ${point.fixed ? 'text-xs text-[#1c1c29]' : 'text-sm text-white bg-[#1c1c29] rounded px-2 py-1'}
                  ${point.fixed === 'top' || point.fixed === 'bottom' ? '' : 'whitespace-nowrap'}`}
                style={getLabelPositionStyle(point)}
              >
                {point.title}
              </div>
            )}
          </div>
        ))}

        {activePoint?.description && (
          <div className="fixed top-1/3 w-full">
            <div className="fixed left-1/2 -translate-x-1/2 z-30 w-[85%] max-w-[30rem] lg:absolute">
              <div className="relative flex flex-col bg-[#858484] p-4 rounded-xl max-h-[33vh]">
                <button
                  className="absolute top-6 right-6 text-white text-2xl hover:text-[#1c1c29]"
                  onClick={() => { setActivePoint(null); }}
                >
                  ✕
                </button>
                <h3 className="w-fit font-bold text-[#1c1c29] bg-[#d4d2d5] rounded-lg text-2xl px-2 my-2">{activePoint.title}</h3>
                <p
                  className="overflow-y-auto text-white text-lg"
                  style={{ flex: 1 }}
                >
                  {activePoint.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default InteractiveMap;
