import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function HowToPlayModal({ 
  open, 
  onClose 
}: { 
  open: boolean; 
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to play?</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>Click on the character as fast as you can to earn points!</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Each click gives you +1 point</li>
            <li>You have 3 minutes to reach 1,500 points</li>
            <li>The faster you click, the more points you get</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
} 