/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskSetCreateFormInputValues = {
    TaskItems?: TaskItem[];
};
export declare type TaskSetCreateFormValidationValues = {
    TaskItems?: ValidationFunction<TaskItem>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskSetCreateFormOverridesProps = {
    TaskSetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskItems?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TaskSetCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskSetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskSetCreateFormInputValues) => TaskSetCreateFormInputValues;
    onSuccess?: (fields: TaskSetCreateFormInputValues) => void;
    onError?: (fields: TaskSetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskSetCreateFormInputValues) => TaskSetCreateFormInputValues;
    onValidate?: TaskSetCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskSetCreateForm(props: TaskSetCreateFormProps): React.ReactElement;
