import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { popup } from '@telegram-apps/sdk';
import { useToast } from "@/hooks/use-toast";

const inviteLink = "https://t.me/zopaton/missions?startapp";

const HowItWorksItem = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) => (
  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 flex gap-4 items-center">
    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
      <span className="text-white font-medium">{number}</span>
    </div>
    <div className="space-y-1">
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  </div>
);

export const FriendsPage = () => {
  const { toast } = useToast();

  const handleShare = () => {
    if (popup.open.isAvailable()) {
      popup.open({
        title: "Share with friends",
        message: inviteLink,
        buttons: [
          {
            id: "copy",
            type: "default",
            text: "Copy link"
          },
          {
            type: "cancel"
          }
        ]
      }).then((buttonId) => {
        if (buttonId === 'copy') {
          navigator.clipboard.writeText(inviteLink);
          toast({
            variant: "success",
            title: "Link copied!",
            duration: 2000
          });
        }
      });
    } else {
      navigator.clipboard.writeText(inviteLink);
      toast({
        variant: "success",
        title: "Link copied to clipboard!",
        duration: 2000
      });
    }
  };

  return (
    <div className="space-y-8 px-4">
      {/* Header Image */}
      <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden">
        <img 
          src="/friends_zopa.png" 
          alt="Friends" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Invite Link Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-black">Invite link</h2>
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3">
          <div className="flex-1 truncate text-white/90">
            {inviteLink}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white/60 hover:text-white hover:bg-white/10"
            onClick={handleShare}
          >
            <Share className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-black">How it works</h2>
        <div className="space-y-6">
          <HowItWorksItem 
            number={1}
            title="Share your invite link"
            description="Get x2 for each fren who accepts"
          />
          <HowItWorksItem 
            number={2}
            title="Your frens join Zopaton"
            description="And start farming points"
          />
        </div>
      </div>
    </div>
  );
}; 