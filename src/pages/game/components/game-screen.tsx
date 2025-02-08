import { useState, useEffect } from "react";
import { useGameStore } from "@/stores/game-store";
import { HowToPlayModal } from "@/components/ui/modal";

export function GameScreen({ 
  character
}: { 
  character: string;
}) {
  const { score, setScore } = useGameStore();
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [plusOnes, setPlusOnes] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPlusOnes(prev => [...prev, { id: Date.now(), x, y }]);
    setScore(score + 1);
    
    setTimeout(() => {
      setPlusOnes(prev => prev.filter(p => p.id !== Date.now()));
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-purple-900/50 to-purple-900/20">
      <div className="flex justify-between items-center w-full px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">🪙</span>
          <span className="font-medium">{score.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400">⏱️</span>
          <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      <div 
        className="relative flex-1 w-full"
        onClick={handleClick}
      >
        <img
          src={`/${character}.png`}
          alt="Character"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain"
        />
        {plusOnes.map(({ id, x, y }) => (
          <div
            key={id}
            className="absolute text-white font-medium animate-fadeout"
            style={{ left: x, top: y }}
          >
            +1
          </div>
        ))}
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⚡</span>
            <span>{score}/1,500</span>
          </div>
          <button 
            onClick={() => setShowHowToPlay(true)}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            How to play?
          </button>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-yellow-400 h-full rounded-full transition-all"
            style={{ width: `${(score / 1500) * 100}%` }}
          />
        </div>
      </div>

      <HowToPlayModal 
        open={showHowToPlay} 
        onClose={() => setShowHowToPlay(false)} 
      />
    </div>
  );
} 