/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThreadCreateFormInputValues = {
    name?: string;
    posts?: Post[];
};
export declare type ThreadCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    posts?: ValidationFunction<Post>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreadCreateFormOverridesProps = {
    ThreadCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ThreadCreateFormProps = React.PropsWithChildren<{
    overrides?: ThreadCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThreadCreateFormInputValues) => ThreadCreateFormInputValues;
    onSuccess?: (fields: ThreadCreateFormInputValues) => void;
    onError?: (fields: ThreadCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreadCreateFormInputValues) => ThreadCreateFormInputValues;
    onValidate?: ThreadCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThreadCreateForm(props: ThreadCreateFormProps): React.ReactElement;
