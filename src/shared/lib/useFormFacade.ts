"use client";

import { DefaultValues, FieldValues, Resolver, useForm } from "react-hook-form";

/**
 * Типы для свойств `UseFormFacadeProps`.
 *
 * @template T - Тип значений полей формы, который extends от FieldValues.
 * @property {DefaultValues<T>} defaultValues - Начальные значения для полей формы.
 * @property {Resolver<T>} [resolver] - Опциональный кастомный валидатор для формы, использующийся в react-hook-form.
 */
type UseFormFacadeProps<T extends FieldValues> = {
    defaultValues: DefaultValues<T>;
    resolver?: Resolver<T>;
};

/**
 * Хук `useFormFacade` - обертка над хуком `useForm` из библиотеки react-hook-form для упрощения работы с формами.
 *
 * @template T - Тип значений полей формы, который extends от FieldValues.
 *
 * @param {UseFormFacadeProps<T>} props - Объект параметров с начальными значениями для полей формы и опциональным кастомным валидатором.
 *
 * @returns {Object} - Возвращает объект, содержащий свойства управления формой.
 *
 * @property {Control<T>} control - Контроллер для формы, необходимый для управления компонентами формы.
 * @property {Function} handleSubmit - Функция, обрабатывающая отправку формы.
 * @property {Object} rest - Остальные методы и свойства, возвращаемые `useForm`.
 *
 * @example
 * import { useFormFacade } from './useFormFacade';
 *
 * const { control, handleSubmit, ...rest } = useFormFacade({
 *   defaultValues: { name: "", email: "" },
 * });
 *
 * const onSubmit = (data) => {
 *   console.log(data);
 * };
 *
 * <form onSubmit={handleSubmit(onSubmit)}>
 *   <input name="name" {...rest} />
 *   <input name="email" {...rest} />
 *   <button type="submit">Submit</button>
 * </form>
 */
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
