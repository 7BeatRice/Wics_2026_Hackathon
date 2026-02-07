import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface FlowArrowProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  label: string;
  vertical?: boolean;
  reverse?: boolean;
}

export function FlowArrow({ fromX, fromY, toX, toY, label, vertical, reverse }: FlowArrowProps) {
  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2;

  return (
    <div 
      className="absolute flex items-center gap-2"
      style={{ 
        left: `${vertical ? fromX - 60 : midX - 80}px`, 
        top: `${vertical ? midY - 30 : fromY - 20}px` 
      }}
    >
      {vertical ? (
        <div className="flex flex-col items-center">
          <ArrowDown className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />
          <span className="text-xs font-medium text-gray-600 mt-1 whitespace-nowrap bg-white px-2 py-1 rounded-lg border border-gray-200">
            {label}
          </span>
        </div>
      ) : (
        <>
          {reverse && <ArrowRight className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />}
          <span className="text-xs font-medium text-gray-600 whitespace-nowrap bg-white px-2 py-1 rounded-lg border border-gray-200">
            {label}
          </span>
          {!reverse && <ArrowRight className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />}
        </>
      )}
    </div>
  );
}
