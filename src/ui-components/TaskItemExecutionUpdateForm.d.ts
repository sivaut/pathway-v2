/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskItemExecution, TaskItem as TaskItem0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskItemExecutionUpdateFormInputValues = {
    TaskItem?: TaskItem0;
    type?: string;
    status?: string;
    progressstepID?: string;
};
export declare type TaskItemExecutionUpdateFormValidationValues = {
    TaskItem?: ValidationFunction<TaskItem0>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    progressstepID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskItemExecutionUpdateFormOverridesProps = {
    TaskItemExecutionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskItem?: PrimitiveOverrideProps<AutocompleteProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    progressstepID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TaskItemExecutionUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskItemExecutionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskItemExecution?: TaskItemExecution;
    onSubmit?: (fields: TaskItemExecutionUpdateFormInputValues) => TaskItemExecutionUpdateFormInputValues;
    onSuccess?: (fields: TaskItemExecutionUpdateFormInputValues) => void;
    onError?: (fields: TaskItemExecutionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskItemExecutionUpdateFormInputValues) => TaskItemExecutionUpdateFormInputValues;
    onValidate?: TaskItemExecutionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskItemExecutionUpdateForm(props: TaskItemExecutionUpdateFormProps): React.ReactElement;
