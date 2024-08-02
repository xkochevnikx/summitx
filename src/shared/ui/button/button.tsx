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
};

export const Button: React.FC<ButtonProps> = ({
    id,
    className,
    children,
    onClick,
    disabled,
    isLoading = false,
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
            {isLoading ? <Spinner /> : children}
        </button>
    );
};
