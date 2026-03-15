import React from 'react';
import '@google/model-viewer';

interface ModelViewerProps {
  src: string;
  poster?: string;
  className?: string;
}

export const LuminaModel: React.FC<ModelViewerProps> = ({ src, poster, className }) => {
  return (
    <div className={className}>
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        poster={poster}
        alt="Lumina Infinity X"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        environment-image="neutral"
        exposure="1"
        interaction-prompt="none"
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
      >
        <div slot="poster" className="w-full h-full flex items-center justify-center bg-lumina-void/50">
           {poster ? (
             <img src={poster} alt="Poster" className="max-h-full object-contain opacity-50" referrerPolicy="no-referrer" />
           ) : (
             <div className="text-lumina-accent/20 font-display text-4xl animate-pulse">RESONATING...</div>
           )}
        </div>
        {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
};
