import React, { useMemo } from "react";

interface ButtonTypes {
    onClick: () => void,
    className?: string,
    children: JSX.Element,
    type?: 'light' | 'dark' | 'cancel',
    disable?: boolean,
    onClickDisable?: () => void
}

export default function Button({
  onClick,
  className = "px-5 rounded-full",
  children,
  type,
  disable = false,
  onClickDisable = () => {},
}: ButtonTypes) {
  const color = useMemo(() => {
    switch (type) {
      case "light":
        return {
          bg: "bg-primary",
          text: "text-darkSecondary",
          shadow: "drop-shadow-lg",
        };
      case "dark":
        return { bg: "bg-darkSecondary", text: "text-white" };
      case "cancel":
        return { bg: "bg-[#ff5959]", text: "text-white" };
      default:
        return { bg: "bg-secondary", text: "text-white" };
    }
  }, [type]);

  return (
    <div
      className={`
      ${color.bg + " " + color.text + " " + color.shadow || ""} 
      tansition-all duration-300 cursor-pointer
      ${disable ? "!bg-[#ff5959] !text-white" : ""}  
      ${className}`}
      onClick={disable ? onClickDisable : onClick}
    >
      {children}
    </div>
  );
}