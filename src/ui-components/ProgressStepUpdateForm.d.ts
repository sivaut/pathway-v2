/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProgressStep, Step, TaskItemExecution } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressStepUpdateFormInputValues = {
    status?: boolean;
    definedStep?: Step;
    progresswalkID?: string;
    lastActedOn?: string;
    TaskItemExecutions?: TaskItemExecution[];
};
export declare type ProgressStepUpdateFormValidationValues = {
    status?: ValidationFunction<boolean>;
    definedStep?: ValidationFunction<Step>;
    progresswalkID?: ValidationFunction<string>;
    lastActedOn?: ValidationFunction<string>;
    TaskItemExecutions?: ValidationFunction<TaskItemExecution>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressStepUpdateFormOverridesProps = {
    ProgressStepUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    definedStep?: PrimitiveOverrideProps<AutocompleteProps>;
    progresswalkID?: PrimitiveOverrideProps<AutocompleteProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
    TaskItemExecutions?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProgressStepUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgressStepUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    progressStep?: ProgressStep;
    onSubmit?: (fields: ProgressStepUpdateFormInputValues) => ProgressStepUpdateFormInputValues;
    onSuccess?: (fields: ProgressStepUpdateFormInputValues) => void;
    onError?: (fields: ProgressStepUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressStepUpdateFormInputValues) => ProgressStepUpdateFormInputValues;
    onValidate?: ProgressStepUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressStepUpdateForm(props: ProgressStepUpdateFormProps): React.ReactElement;
