import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Zap, Target, Battery, ChevronRight, Coins } from "lucide-react";
import { useGameStore } from "@/stores/game-store";
import { CharacterSelect } from "./components/character-select";
import { GameScreen } from "./components/game-screen";
import { useBoostStore } from "@/stores/boost-store";

interface Booster {
  id: string;
  title: string;
  icon: "zap" | "target" | "battery";
  description?: string;
  level?: number;
  price?: number;
  available?: string;
}

const boosters: Booster[] = [
  {
    id: "energy",
    title: "Full Energy",
    icon: "zap",
    available: "6/6 available"
  },
  {
    id: "multitap",
    title: "Multitap",
    icon: "target",
    level: 13,
    price: 300
  },
  {
    id: "limit",
    title: "Energy limit",
    icon: "battery",
    level: 13,
    price: 500
  }
];

const BoosterIcon = ({ type }: { type: Booster["icon"] }) => {
  const icons = {
    zap: <Zap className="w-6 h-6 text-yellow-400" />,
    target: <Target className="w-6 h-6 text-purple-400" />,
    battery: <Battery className="w-6 h-6 text-green-400" />
  };
  return icons[type];
};

const BoosterItem = ({ booster }: { booster: Booster }) => (
  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
          <BoosterIcon type={booster.icon} />
        </div>
        <div>
          <h3 className="font-medium text-white">{booster.title}</h3>
          {booster.available ? (
            <p className="text-sm text-white/60">{booster.available}</p>
          ) : (
            <p className="text-sm text-white/60">Level {booster.level}</p>
          )}
        </div>
      </div>
      
      {booster.price ? (
        <div className="flex items-center gap-2">
          <span className="text-white/90">{booster.price}</span>
          <Coins className="w-5 h-5 text-yellow-400" />
        </div>
      ) : (
        <ChevronRight className="w-5 h-5 text-white/60" />
      )}
    </div>
  </div>
);

const BoostModal = ({ 
  open, 
  onClose 
}: { 
  open: boolean; 
  onClose: () => void;
}) => {
  console.log('Rendering BoostModal');
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1b1f] border-none text-white sm:max-w-[425px]">
        <div className="relative pt-6">
          <DialogTitle className="text-xl font-semibold text-center">
            Tapping Boosters
          </DialogTitle>
          <DialogDescription className="sr-only">
            Available boosters and their effects
          </DialogDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-white/60 hover:text-white hover:bg-white/10"
            onClick={() => {
              console.log('Close button clicked');
              onClose();
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
        
        <div className="space-y-3 mt-4">
          {boosters.map((booster) => (
            <BoosterItem key={booster.id} booster={booster} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const GamePage = () => {
  const { character, setCharacter } = useGameStore();
  const { isModalOpen, closeModal } = useBoostStore();

  return (
    <div 
      className="h-full w-full"
      style={{
        backgroundImage: 'url(/backround_game.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {!character ? (
        <CharacterSelect onSelect={setCharacter} />
      ) : (
        <GameScreen character={character} />
      )}

      <BoostModal 
        open={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};
