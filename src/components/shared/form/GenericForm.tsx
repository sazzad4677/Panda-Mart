import React, {Ref, useImperativeHandle} from "react";
import {
    Control,
    DefaultValues,
    FieldValues,
    FormState,
    Path,
    SubmitHandler,
    useForm,
    UseFormReturn
} from "react-hook-form";
import {Form} from "@/components/ui/form";
import {z, ZodType} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import TextField from "@/components/shared/form/fields/TextField";
import TextAreaField from "@/components/shared/form/fields/TextAreaField";
import {SelectField} from "@/components/shared/form/fields/SelectField";
import {FormReset} from "@/components/shared/form/fields/FormReset";
import DateField from "@/components/shared/form/fields/DateField";
import ImageField from "@/components/shared/form/fields/ImageField";
import {PasswordField} from "@/components/shared/form/fields/PasswordField";
import {SliderField} from "@/components/shared/form/fields/Slider";
import SearchField from "@/components/shared/form/fields/SearchField";
import CheckBoxField from "@/components/shared/form/fields/CheckBoxField";
import SwitchField from "@/components/shared/form/fields/SwitchField";
import {GenericFormContext} from "@/components/shared/form/GenericFormContext";

// eslint-disable-next-line
export type TGenericFormRef<TFormValues extends FieldValues = any> = {
    control: Control<TFormValues>,
    form: UseFormReturn<TFormValues>,
    formState: FormState<TFormValues>,
    getValues: () => TFormValues,
    setValue: (name: Path<TFormValues>, value: TFormValues[Path<TFormValues>]) => void,
    reset: (values?: Partial<TFormValues> | undefined) => void,
    watch: (field: Path<TFormValues>) => TFormValues[Path<TFormValues>],
}

type TGenericFormProviderProps<TSchema extends ZodType> = {
    schema: TSchema,
    initialValues: Partial<z.infer<TSchema>>,
    onSubmit: SubmitHandler<z.infer<TSchema>>,
    mode?: "onBlur" | "onChange" | "onSubmit",
    children: React.ReactNode,
    ref?: Ref<TGenericFormRef<z.infer<TSchema>>>
    values?: z.infer<TSchema>
}


export const GenericForm = <TSchema extends ZodType>(props: TGenericFormProviderProps<TSchema>) => {
    const {children, initialValues, mode = "onChange", schema, onSubmit, ref, values} = props;
    type TFormValues = z.infer<TSchema>
    const form = useForm<TFormValues>({
        mode,
        resolver: zodResolver(schema),
        defaultValues: initialValues as DefaultValues<TFormValues>,
        values
    })
    useImperativeHandle(ref, () => ({
        control: form.control,
        form: form,
        formState: form.formState,
        getValues: form.getValues,
        setValue: form.setValue,
        reset: form.reset,
        watch: form.watch,
    }))
    return (
        <GenericFormContext.Provider value={{control: form.control}}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {children}
                </form>
            </Form>
        </GenericFormContext.Provider>
    )
}

GenericForm.displayName = 'GenericForm'
GenericForm.Text = TextField
GenericForm.TextArea = TextAreaField
GenericForm.Select = SelectField
GenericForm.Reset = FormReset
GenericForm.Date = DateField
GenericForm.Image = ImageField
GenericForm.PasswordField = PasswordField
GenericForm.SliderField = SliderField
GenericForm.SearchField = SearchField
GenericForm.Checkbox = CheckBoxField
GenericForm.Switch = SwitchField
GenericForm.Image = ImageField