/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Step, TaskItemExecution } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressStepCreateFormInputValues = {
    status?: boolean;
    definedStep?: Step;
    progresswalkID?: string;
    lastActedOn?: string;
    TaskItemExecutions?: TaskItemExecution[];
};
export declare type ProgressStepCreateFormValidationValues = {
    status?: ValidationFunction<boolean>;
    definedStep?: ValidationFunction<Step>;
    progresswalkID?: ValidationFunction<string>;
    lastActedOn?: ValidationFunction<string>;
    TaskItemExecutions?: ValidationFunction<TaskItemExecution>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressStepCreateFormOverridesProps = {
    ProgressStepCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    definedStep?: PrimitiveOverrideProps<AutocompleteProps>;
    progresswalkID?: PrimitiveOverrideProps<AutocompleteProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
    TaskItemExecutions?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProgressStepCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgressStepCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgressStepCreateFormInputValues) => ProgressStepCreateFormInputValues;
    onSuccess?: (fields: ProgressStepCreateFormInputValues) => void;
    onError?: (fields: ProgressStepCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressStepCreateFormInputValues) => ProgressStepCreateFormInputValues;
    onValidate?: ProgressStepCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressStepCreateForm(props: ProgressStepCreateFormProps): React.ReactElement;
