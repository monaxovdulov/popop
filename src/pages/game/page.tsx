import { useGameStore } from "@/stores/game-store";
import { CharacterSelect } from "./components/character-select";
import { GameScreen } from "./components/game-screen";

export const GamePage = () => {
  const { character, setCharacter } = useGameStore();

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
    </div>
  );
};
