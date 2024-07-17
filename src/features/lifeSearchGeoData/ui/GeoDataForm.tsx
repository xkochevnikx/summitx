"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "@/shared/ui/Input";

import { useGeoData } from "../model/geoDataStore";

export function GeoDataForm() {
    const { setGeoData } = useGeoData();
    const schema = z.object({
        name: z
            .string()
            .min(2, { message: "Must be at least 2 characters" })
            .refine((value) => !/\d/.test(value), {
                message: "Numbers are not allowed",
            }),
    });
    const { control, handleSubmit } = useForm({
        defaultValues: { name: "" },
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit((data) => setGeoData(data.name))}>
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
            <button type="submit">Submit</button>
        </form>
    );
}
