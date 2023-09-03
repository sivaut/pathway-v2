/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PathwayVersion, ProgressWalk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressPathCreateFormInputValues = {
    definedPathwayVersion?: PathwayVersion;
    hasProgressWalks?: ProgressWalk[];
    totalWalks?: number;
    doneWalks?: number;
    totalSteps?: number;
    doneSteps?: number;
    lastActedOn?: string;
    prefUserName?: string;
};
export declare type ProgressPathCreateFormValidationValues = {
    definedPathwayVersion?: ValidationFunction<PathwayVersion>;
    hasProgressWalks?: ValidationFunction<ProgressWalk>;
    totalWalks?: ValidationFunction<number>;
    doneWalks?: ValidationFunction<number>;
    totalSteps?: ValidationFunction<number>;
    doneSteps?: ValidationFunction<number>;
    lastActedOn?: ValidationFunction<string>;
    prefUserName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressPathCreateFormOverridesProps = {
    ProgressPathCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    definedPathwayVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    hasProgressWalks?: PrimitiveOverrideProps<AutocompleteProps>;
    totalWalks?: PrimitiveOverrideProps<TextFieldProps>;
    doneWalks?: PrimitiveOverrideProps<TextFieldProps>;
    totalSteps?: PrimitiveOverrideProps<TextFieldProps>;
    doneSteps?: PrimitiveOverrideProps<TextFieldProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
    prefUserName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressPathCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgressPathCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgressPathCreateFormInputValues) => ProgressPathCreateFormInputValues;
    onSuccess?: (fields: ProgressPathCreateFormInputValues) => void;
    onError?: (fields: ProgressPathCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressPathCreateFormInputValues) => ProgressPathCreateFormInputValues;
    onValidate?: ProgressPathCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressPathCreateForm(props: ProgressPathCreateFormProps): React.ReactElement;
