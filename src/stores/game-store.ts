import { create } from 'zustand'

interface GameState {
  character: string | null
  setCharacter: (character: string) => void
  score: number
  setScore: (score: number) => void
  resetGame: () => void
}

export const useGameStore = create<GameState>((set) => ({
  character: null,
  setCharacter: (character) => set({ character }),
  score: 0,
  setScore: (score) => set({ score }),
  resetGame: () => set({ character: null, score: 0 }),
})) 