/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskItemUpdateFormInputValues = {
    tasksetID?: string;
    name?: string;
    description?: string;
};
export declare type TaskItemUpdateFormValidationValues = {
    tasksetID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskItemUpdateFormOverridesProps = {
    TaskItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tasksetID?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskItem?: TaskItem;
    onSubmit?: (fields: TaskItemUpdateFormInputValues) => TaskItemUpdateFormInputValues;
    onSuccess?: (fields: TaskItemUpdateFormInputValues) => void;
    onError?: (fields: TaskItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskItemUpdateFormInputValues) => TaskItemUpdateFormInputValues;
    onValidate?: TaskItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskItemUpdateForm(props: TaskItemUpdateFormProps): React.ReactElement;
