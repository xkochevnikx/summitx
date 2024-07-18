"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";

import { useGeoData } from "../model/store";

import cls from "./geoDataForm.module.css";

const schema = z.object({
    name: z
        .string()
        .min(2, { message: "Must be at least 2 characters" })
        .transform((value) => value.trim())
        .refine((value) => !/\d/.test(value), {
            message: "Numbers are not allowed",
        }),
});

type FormDataValues = z.infer<typeof schema>;

export const GeoDataForm: FC = () => {
    const { setGeoData } = useGeoData();

    const { control, handleSubmit } = useForm<FormDataValues>({
        defaultValues: { name: "" },
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit((data) => setGeoData(data.name))} className={cls.form}>
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
