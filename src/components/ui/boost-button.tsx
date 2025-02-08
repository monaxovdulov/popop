import { Button } from "@/components/ui/button";
import { useBoostStore } from "@/stores/boost-store";

export const BoostButton = () => {
  const openModal = useBoostStore((state) => state.openModal);

  return (
    <Button 
      onClick={openModal}
      className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium"
    >
      Boost
    </Button>
  );
}; 