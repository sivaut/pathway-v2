/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Walk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WalkTagCreateFormInputValues = {
    name?: string;
    walks?: Walk[];
};
export declare type WalkTagCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    walks?: ValidationFunction<Walk>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WalkTagCreateFormOverridesProps = {
    WalkTagCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    walks?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WalkTagCreateFormProps = React.PropsWithChildren<{
    overrides?: WalkTagCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WalkTagCreateFormInputValues) => WalkTagCreateFormInputValues;
    onSuccess?: (fields: WalkTagCreateFormInputValues) => void;
    onError?: (fields: WalkTagCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WalkTagCreateFormInputValues) => WalkTagCreateFormInputValues;
    onValidate?: WalkTagCreateFormValidationValues;
} & React.CSSProperties>;
export default function WalkTagCreateForm(props: WalkTagCreateFormProps): React.ReactElement;
