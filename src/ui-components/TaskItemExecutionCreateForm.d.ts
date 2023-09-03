/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskItem as TaskItem0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskItemExecutionCreateFormInputValues = {
    TaskItem?: TaskItem0;
    type?: string;
    status?: string;
    progressstepID?: string;
};
export declare type TaskItemExecutionCreateFormValidationValues = {
    TaskItem?: ValidationFunction<TaskItem0>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    progressstepID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskItemExecutionCreateFormOverridesProps = {
    TaskItemExecutionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskItem?: PrimitiveOverrideProps<AutocompleteProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    progressstepID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TaskItemExecutionCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskItemExecutionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskItemExecutionCreateFormInputValues) => TaskItemExecutionCreateFormInputValues;
    onSuccess?: (fields: TaskItemExecutionCreateFormInputValues) => void;
    onError?: (fields: TaskItemExecutionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskItemExecutionCreateFormInputValues) => TaskItemExecutionCreateFormInputValues;
    onValidate?: TaskItemExecutionCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskItemExecutionCreateForm(props: TaskItemExecutionCreateFormProps): React.ReactElement;
