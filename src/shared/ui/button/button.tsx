import React, { ComponentProps, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";

import cls from "./button.module.css";

type ButtonProps = ComponentProps<"button"> & {
    id?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
};

export const Button: React.FC<ButtonProps> = ({
    id,
    className,
    children,
    onClick,
    disabled,
    type = "button",
}) => {
    return (
        <button
            id={id}
            type={type}
            className={classNames(cls.button, { [cls.disabled]: disabled }, [className])}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
