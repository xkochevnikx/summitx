import { InputHTMLAttributes, PropsWithRef } from "react";

import { classNames } from "../../lib/classNames";

import cls from "./input.module.css";

import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
    className?: string;
    label?: string;
    error?: string;
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const Input = ({ id, className, error, label, inputProps }: InputProps) => {
    return (
        <div className={classNames(cls.inputBox, { [cls.error]: error }, [className])}>
            {label && <label htmlFor={id}>{label}</label>}

            <input {...inputProps} id={id} className={cls.input} />

            {error && <span className={cls.errorText}>{error}</span>}
        </div>
    );
};
