/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskSet as TaskSet0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StepCreateFormInputValues = {
    walkID?: string;
    TaskSet?: TaskSet0;
    name?: string;
    description?: string;
    videoLink?: string;
    referenceLinks?: string[];
    sequence?: number;
    type?: string;
};
export declare type StepCreateFormValidationValues = {
    walkID?: ValidationFunction<string>;
    TaskSet?: ValidationFunction<TaskSet0>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    videoLink?: ValidationFunction<string>;
    referenceLinks?: ValidationFunction<string>;
    sequence?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StepCreateFormOverridesProps = {
    StepCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    walkID?: PrimitiveOverrideProps<AutocompleteProps>;
    TaskSet?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    referenceLinks?: PrimitiveOverrideProps<TextFieldProps>;
    sequence?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StepCreateFormProps = React.PropsWithChildren<{
    overrides?: StepCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StepCreateFormInputValues) => StepCreateFormInputValues;
    onSuccess?: (fields: StepCreateFormInputValues) => void;
    onError?: (fields: StepCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StepCreateFormInputValues) => StepCreateFormInputValues;
    onValidate?: StepCreateFormValidationValues;
} & React.CSSProperties>;
export default function StepCreateForm(props: StepCreateFormProps): React.ReactElement;
