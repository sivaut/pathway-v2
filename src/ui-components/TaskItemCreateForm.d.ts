/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskItemCreateFormInputValues = {
    tasksetID?: string;
    name?: string;
    description?: string;
};
export declare type TaskItemCreateFormValidationValues = {
    tasksetID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskItemCreateFormOverridesProps = {
    TaskItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tasksetID?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskItemCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskItemCreateFormInputValues) => TaskItemCreateFormInputValues;
    onSuccess?: (fields: TaskItemCreateFormInputValues) => void;
    onError?: (fields: TaskItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskItemCreateFormInputValues) => TaskItemCreateFormInputValues;
    onValidate?: TaskItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskItemCreateForm(props: TaskItemCreateFormProps): React.ReactElement;
