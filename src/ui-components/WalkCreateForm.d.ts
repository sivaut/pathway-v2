/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Step, WalkTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WalkCreateFormInputValues = {
    Steps?: Step[];
    pathwayversionID?: string;
    name?: string;
    description?: string;
    videoLink?: string;
    referenceLinks?: string[];
    WalkTags?: WalkTag[];
};
export declare type WalkCreateFormValidationValues = {
    Steps?: ValidationFunction<Step>;
    pathwayversionID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    videoLink?: ValidationFunction<string>;
    referenceLinks?: ValidationFunction<string>;
    WalkTags?: ValidationFunction<WalkTag>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WalkCreateFormOverridesProps = {
    WalkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Steps?: PrimitiveOverrideProps<AutocompleteProps>;
    pathwayversionID?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    referenceLinks?: PrimitiveOverrideProps<TextFieldProps>;
    WalkTags?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WalkCreateFormProps = React.PropsWithChildren<{
    overrides?: WalkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WalkCreateFormInputValues) => WalkCreateFormInputValues;
    onSuccess?: (fields: WalkCreateFormInputValues) => void;
    onError?: (fields: WalkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WalkCreateFormInputValues) => WalkCreateFormInputValues;
    onValidate?: WalkCreateFormValidationValues;
} & React.CSSProperties>;
export default function WalkCreateForm(props: WalkCreateFormProps): React.ReactElement;
