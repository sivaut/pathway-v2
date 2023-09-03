/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Thread, Post } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThreadUpdateFormInputValues = {
    name?: string;
    posts?: Post[];
};
export declare type ThreadUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    posts?: ValidationFunction<Post>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreadUpdateFormOverridesProps = {
    ThreadUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ThreadUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThreadUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    thread?: Thread;
    onSubmit?: (fields: ThreadUpdateFormInputValues) => ThreadUpdateFormInputValues;
    onSuccess?: (fields: ThreadUpdateFormInputValues) => void;
    onError?: (fields: ThreadUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreadUpdateFormInputValues) => ThreadUpdateFormInputValues;
    onValidate?: ThreadUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThreadUpdateForm(props: ThreadUpdateFormProps): React.ReactElement;
