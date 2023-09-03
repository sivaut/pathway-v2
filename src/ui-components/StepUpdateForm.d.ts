/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Step, TaskSet as TaskSet0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StepUpdateFormInputValues = {
    walkID?: string;
    TaskSet?: TaskSet0;
    name?: string;
    description?: string;
    videoLink?: string;
    referenceLinks?: string[];
    sequence?: number;
    type?: string;
};
export declare type StepUpdateFormValidationValues = {
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
export declare type StepUpdateFormOverridesProps = {
    StepUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    walkID?: PrimitiveOverrideProps<AutocompleteProps>;
    TaskSet?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    referenceLinks?: PrimitiveOverrideProps<TextFieldProps>;
    sequence?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StepUpdateFormProps = React.PropsWithChildren<{
    overrides?: StepUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    step?: Step;
    onSubmit?: (fields: StepUpdateFormInputValues) => StepUpdateFormInputValues;
    onSuccess?: (fields: StepUpdateFormInputValues) => void;
    onError?: (fields: StepUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StepUpdateFormInputValues) => StepUpdateFormInputValues;
    onValidate?: StepUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StepUpdateForm(props: StepUpdateFormProps): React.ReactElement;
