import { backButton } from "@telegram-apps/sdk-react";
import { FC, useEffect } from "react";

export const BackButton: FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  useEffect(() => {
    const handleClick = onClick;

    backButton.show();
    backButton.onClick(handleClick);

    return () => {
      backButton.offClick(handleClick);
      backButton.hide();
    };
  }, [backButton]);

  return <></>;
};
