/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WalkTag, ProgressStep } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressWalkCreateFormInputValues = {
    progresspathID?: string;
    definedWalk?: WalkTag;
    hasProgressSteps?: ProgressStep[];
    totalSteps?: number;
    doneSteps?: number;
    lastActedOn?: string;
};
export declare type ProgressWalkCreateFormValidationValues = {
    progresspathID?: ValidationFunction<string>;
    definedWalk?: ValidationFunction<WalkTag>;
    hasProgressSteps?: ValidationFunction<ProgressStep>;
    totalSteps?: ValidationFunction<number>;
    doneSteps?: ValidationFunction<number>;
    lastActedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressWalkCreateFormOverridesProps = {
    ProgressWalkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    progresspathID?: PrimitiveOverrideProps<AutocompleteProps>;
    definedWalk?: PrimitiveOverrideProps<AutocompleteProps>;
    hasProgressSteps?: PrimitiveOverrideProps<AutocompleteProps>;
    totalSteps?: PrimitiveOverrideProps<TextFieldProps>;
    doneSteps?: PrimitiveOverrideProps<TextFieldProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressWalkCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgressWalkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgressWalkCreateFormInputValues) => ProgressWalkCreateFormInputValues;
    onSuccess?: (fields: ProgressWalkCreateFormInputValues) => void;
    onError?: (fields: ProgressWalkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressWalkCreateFormInputValues) => ProgressWalkCreateFormInputValues;
    onValidate?: ProgressWalkCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressWalkCreateForm(props: ProgressWalkCreateFormProps): React.ReactElement;
