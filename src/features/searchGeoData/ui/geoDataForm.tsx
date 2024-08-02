"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller } from "react-hook-form";
import * as z from "zod";

import { useFormFacade } from "@/shared/lib/useFormFacade";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";

import cls from "./geoDataForm.module.css";

const schema = z.object({
    name: z
        .string()
        .min(2, { message: "Must be at least 2 characters" })
        .max(50, { message: "Must be at most 50 characters" })
        .transform((value) => value.trim()),
});

type FormDataValues = z.infer<typeof schema>;

export const GeoDataForm: FC = () => {
    const router = useRouter();
    const { control, handleSubmit } = useFormFacade<FormDataValues>({
        defaultValues: { name: "" },
        resolver: zodResolver(schema),
    });

    const onSubmit = (name: string) => {
        router.push(`/search/${name}`);
    };

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data.name))} className={cls.form}>
            <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => (
                    <Input
                        inputProps={{
                            ...field,
                            type: "text",
                        }}
                        error={fieldState.error?.message}
                    />
                )}
            />
            <Button type="submit">Search</Button>
        </form>
    );
};
