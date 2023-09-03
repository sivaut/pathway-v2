/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskSet, TaskItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskSetUpdateFormInputValues = {
    TaskItems?: TaskItem[];
};
export declare type TaskSetUpdateFormValidationValues = {
    TaskItems?: ValidationFunction<TaskItem>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskSetUpdateFormOverridesProps = {
    TaskSetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskItems?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TaskSetUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskSetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskSet?: TaskSet;
    onSubmit?: (fields: TaskSetUpdateFormInputValues) => TaskSetUpdateFormInputValues;
    onSuccess?: (fields: TaskSetUpdateFormInputValues) => void;
    onError?: (fields: TaskSetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskSetUpdateFormInputValues) => TaskSetUpdateFormInputValues;
    onValidate?: TaskSetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskSetUpdateForm(props: TaskSetUpdateFormProps): React.ReactElement;
