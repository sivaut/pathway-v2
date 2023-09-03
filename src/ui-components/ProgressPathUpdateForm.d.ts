/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProgressPath, PathwayVersion, ProgressWalk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressPathUpdateFormInputValues = {
    definedPathwayVersion?: PathwayVersion;
    hasProgressWalks?: ProgressWalk[];
    totalWalks?: number;
    doneWalks?: number;
    totalSteps?: number;
    doneSteps?: number;
    lastActedOn?: string;
    prefUserName?: string;
};
export declare type ProgressPathUpdateFormValidationValues = {
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
export declare type ProgressPathUpdateFormOverridesProps = {
    ProgressPathUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    definedPathwayVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    hasProgressWalks?: PrimitiveOverrideProps<AutocompleteProps>;
    totalWalks?: PrimitiveOverrideProps<TextFieldProps>;
    doneWalks?: PrimitiveOverrideProps<TextFieldProps>;
    totalSteps?: PrimitiveOverrideProps<TextFieldProps>;
    doneSteps?: PrimitiveOverrideProps<TextFieldProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
    prefUserName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressPathUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgressPathUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    progressPath?: ProgressPath;
    onSubmit?: (fields: ProgressPathUpdateFormInputValues) => ProgressPathUpdateFormInputValues;
    onSuccess?: (fields: ProgressPathUpdateFormInputValues) => void;
    onError?: (fields: ProgressPathUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressPathUpdateFormInputValues) => ProgressPathUpdateFormInputValues;
    onValidate?: ProgressPathUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressPathUpdateForm(props: ProgressPathUpdateFormProps): React.ReactElement;
