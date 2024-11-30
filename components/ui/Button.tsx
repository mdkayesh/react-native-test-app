import { cn } from "@/utils/utils";
import { PlatformPressable } from "@react-navigation/elements";
import { Props } from "@react-navigation/elements/lib/typescript/commonjs/src/PlatformPressable";
import { cva, VariantProps } from "class-variance-authority";
import { LinearGradient } from "expo-linear-gradient";
import React, { forwardRef, ReactNode } from "react";
import Loader from "../Loader";

const buttonVariants = cva(
  "flex flex-row items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-accent text-accent-foreground",
        ghost: "",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
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
  extends Props,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  containerClass?: string;
  isLoading?: boolean;
}

const Button = forwardRef<LinearGradient, ButtonProps>(
  (
    {
      variant = "default",
      size,
      className,
      children,
      disabled = false,
      containerClass,
      isLoading = false,
      ...rest
    },
    ref
  ) => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#3498DB", "#34506D"]}
        className={cn(
          "overflow-hidden rounded-lg",
          containerClass,
          disabled && "opacity-50"
        )}
        ref={ref}
      >
        <PlatformPressable
          disabled={disabled || isLoading}
          className={cn(buttonVariants({ variant, size, className }))}
          {...rest}
        >
          {isLoading ? <Loader size={"small"} /> : children}
        </PlatformPressable>
      </LinearGradient>
    );
  }
);

Button.displayName = "Button";

export default Button;
