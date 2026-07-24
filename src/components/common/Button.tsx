import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow" | "white" | "premium";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "premium",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  onClick,
  disabled,
  ...props
}) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsRippling(true);

    setTimeout(() => {
      setIsRippling(false);
    }, 600);

    onClick?.(e);
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantStyles = {
    premium:
      "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_45px_rgba(59,130,246,0.75)]",

    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    secondary:
      "bg-slate-800 text-white",

    outline:
      "border border-blue-500 text-blue-400 bg-transparent",

    ghost:
      "bg-transparent text-white",

    glow:
      "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-[0_0_35px_rgba(59,130,246,.45)]",

    white:
      "bg-white text-slate-900",
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
      group
      relative
      overflow-hidden
      rounded-full
      transition-all
      duration-500
      active:scale-95
      hover:scale-105
      ${sizeStyles[size]}
      ${variantStyles[variant]}
      ${className}
      `}
      {...props}
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-full blur-xl opacity-60 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 group-hover:opacity-100 transition duration-500" />

      {/* Shine */}
      <span className="absolute left-[-120%] top-0 h-full w-[60%] bg-white/20 skew-x-[-25deg] group-hover:left-[130%] transition-all duration-1000" />

      {/* Ripple */}
      {isRippling && coords && (
        <span
          className="absolute rounded-full bg-white/40 animate-ping"
          style={{
            width: 18,
            height: 18,
            left: coords.x - 9,
            top: coords.y - 9,
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          leftIcon && (
            <span
              className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              bg-white/15
              backdrop-blur-md
              transition-transform
              duration-500
              group-hover:rotate-90
              group-hover:scale-110
              "
            >
              {leftIcon}
            </span>
          )
        )}

        <span className="font-semibold tracking-wide">
          {children}
        </span>

        {!isLoading && rightIcon}
      </span>
    </button>
  );
};