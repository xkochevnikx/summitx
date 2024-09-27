import React, { ComponentProps, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames";

import { Spinner } from "../spinner/spinner";

import cls from "./button.module.css";

type ButtonProps = ComponentProps<"button"> & {
    id?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    isLoading?: boolean | null;
    theme?: "clear" | "outlined";
};

export const Button: React.FC<ButtonProps> = ({
    id,
    className,
    children,
    onClick,
    disabled,
    isLoading = false,
    type = "button",
    theme = "outlined",
}) => {
    const mods = { [cls.disabled]: disabled, [cls[theme]]: true };

    return (
        <button
            id={id}
            type={type}
            className={classNames(cls.button, mods, [className])}
            onClick={onClick}
            disabled={disabled}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    );
};
