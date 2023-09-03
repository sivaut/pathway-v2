/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User, Enrollment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileExplorerCreateFormInputValues = {
    screenName?: string;
    byUser?: User;
    Enrollments?: Enrollment[];
};
export declare type ProfileExplorerCreateFormValidationValues = {
    screenName?: ValidationFunction<string>;
    byUser?: ValidationFunction<User>;
    Enrollments?: ValidationFunction<Enrollment>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileExplorerCreateFormOverridesProps = {
    ProfileExplorerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    screenName?: PrimitiveOverrideProps<TextFieldProps>;
    byUser?: PrimitiveOverrideProps<AutocompleteProps>;
    Enrollments?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProfileExplorerCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileExplorerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileExplorerCreateFormInputValues) => ProfileExplorerCreateFormInputValues;
    onSuccess?: (fields: ProfileExplorerCreateFormInputValues) => void;
    onError?: (fields: ProfileExplorerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileExplorerCreateFormInputValues) => ProfileExplorerCreateFormInputValues;
    onValidate?: ProfileExplorerCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileExplorerCreateForm(props: ProfileExplorerCreateFormProps): React.ReactElement;
