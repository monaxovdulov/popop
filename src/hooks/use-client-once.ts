let hasRun = false;

export function useClientOnce(fn: () => void): void {
  if (!hasRun && typeof window !== "undefined") {
    hasRun = true;
    fn();
  }
}