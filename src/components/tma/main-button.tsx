import { mainButton } from "@telegram-apps/sdk-react";
import { FC, useEffect } from "react";

export const MainButton: FC<{
  onClick: () => void;
  isLoading?: boolean;
  children: string;
}> = ({ onClick, children, isLoading }) => {
  useEffect(() => {
    const handleClick = onClick;

    if (mainButton.isMounted()) {
      mainButton.setParams({
        isEnabled: true,
        isVisible: true,
        text: children,
      });

      mainButton.onClick(handleClick);

      return () => {
        mainButton.offClick(handleClick);
        mainButton.setParams({
          isEnabled: false,
          isVisible: false,
        });
      };
    }
  }, [mainButton]);

  useEffect(() => {
    if (mainButton.isMounted()) {
      mainButton.setParams({
        isLoaderVisible: isLoading,
        isEnabled: !isLoading,
      });
    }
  }, [isLoading]);

  return <></>;
};
