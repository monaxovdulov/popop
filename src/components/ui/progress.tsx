import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "default" | "wallet";
    isLoading?: boolean;
    isAnimated?: boolean;
  }
>(
  (
    {
      className,
      value,
      isLoading,
      variant = "default",
      isAnimated = false,
      ...props
    },
    ref
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden bg-background",
        variant === "wallet" && "h-4",
        className
      )}
      {...props}
    >
      {isLoading && (
        <Skeleton className={cn("w-full h-2", variant === "wallet" && "h-4")} />
      )}
      {!isLoading && (
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            variant === "default" && (isAnimated ? "animate-progress" : "")
          )}
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`,
            backgroundImage:
              variant === "wallet"
                ? "url('/assets/progress-wallet.svg')"
                : "url('/assets/progress-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "left top",
            backgroundSize: variant === "wallet" ? "8px 12px" : "24px 8px",
          }}
        />
      )}
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
