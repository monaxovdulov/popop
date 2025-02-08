import { useGameStore } from "@/stores/game-store";
import { CharacterSelect } from "./components/character-select";
import { GameScreen } from "./components/game-screen";

export const GamePage = () => {
  const { character, setCharacter } = useGameStore();

  if (!character) {
    return <CharacterSelect onSelect={setCharacter} />;
  }

  return <GameScreen character={character} />;
};
