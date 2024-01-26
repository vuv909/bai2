import { cva } from "class-variance-authority";
import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  textSize?: "sm" | "md" | "lg" | "xl";
  font?: "bold" | "normal";
  textColor?: "primary" | "warning" | "success";
  focus?: "primary" | "warning" | "success";
  background?: "primary" | "warning" | "success";
  padding?: "sm" | "md" | "lg" | "xl";
  placeholderValue?: string;
  rounded?: "sm" | "md" | "lg" | "xl";
};

const variantStyles = cva(["outline-none"], {
  variants: {
    textSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
    font: {
      bold: "font-bold",
      normal: "font-semibold",
    },
    textColor: {
      primary: "text-blue-500",
      warning: "text-yellow-500",
      success: "text-green-500",
    },
    focus: {
      primary: "focus:border-blue-500",
      warning: "focus:border-yellow-500",
      success: "focus:border-green-500",
    },
    background: {
      primary: "bg-blue-500",
      warning: "bg-yellow-500",
      success: "bg-green-500",
    },
    padding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-10",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    textSize: "sm",
  },
});

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      textSize,
      font,
      textColor,
      background,
      focus,
      padding,
      placeholderValue,
      rounded,
    },
    ref
  ) => {
    const classStyles = variantStyles({
      textSize,
      font,
      textColor,
      background,
      focus,
      padding,
      rounded,
    });

    return (
      <input ref={ref} className={classStyles} placeholder={placeholderValue} />
    );
  }
);

export default Input;
