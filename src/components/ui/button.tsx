import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import withHapticFeedback from "@/components/hocs/withHapticFeedback";

const buttonVariants = cva(
  "inline-flex items-center justify-center uppercase whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50 relative active:top-0.5 active:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary default text-primary-foreground hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input border-dashed bg-background hover:bg-card hover:text-card-foreground",
        secondary:
          "bg-secondary  text-secondary-foreground hover:opacity-90",
        link: "text-primary underline-offset-4 hover:underline",
        ghost: "",

        navbar: "h-14 bg-transparent font-normal",
        ton: "bg-ton hover:opacity-90 ",
      },
      size: {
        default: "h-12 px-4 text-base font-bold",
        xs: "h-7 text-sm rounded-md px-3",
        sm: "h-10 text-sm rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = withHapticFeedback(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";

      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }
  ),
  "light"
);
Button.displayName = "Button";

export { Button, buttonVariants };
