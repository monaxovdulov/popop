import { isTMA, secondaryButton } from "@telegram-apps/sdk-react";
import { FC, useEffect } from "react";
import { Button } from "../ui/button";

export const SecondaryButton: FC<{
  onClick: () => void;
  children: string;
}> = ({ onClick, children }) => {
  useEffect(() => {
    const handleClick = onClick;

    if (secondaryButton.isSupported() && secondaryButton.isMounted()) {
      secondaryButton.setParams({
        isEnabled: true,
        isVisible: true,
        position: "bottom",
        text: children,
      });

      secondaryButton.onClick(handleClick);

      return () => {
        secondaryButton.offClick(handleClick);
        secondaryButton.setParams({
          isEnabled: false,
          isVisible: false,
          position: "left",
        });
      };
    }
  }, [secondaryButton]);

  if (isTMA("simple")) {
    return <></>;
  }

  return (
    <Button onClick={onClick} className="w-full mt-2" variant="secondary">
      {children}
    </Button>
  );
};
