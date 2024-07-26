"use client";

import { DefaultValues, FieldValues, Resolver, useForm } from "react-hook-form";

type UseFormFacadeProps<T extends FieldValues> = {
    defaultValues: DefaultValues<T>;
    resolver?: Resolver<T>;
};

export const useFormFacade = <T extends FieldValues>({
    defaultValues,
    resolver,
}: UseFormFacadeProps<T>) => {
    const { control, handleSubmit, ...rest } = useForm<T>({
        defaultValues,
        resolver,
    });

    return { control, handleSubmit, ...rest };
};
