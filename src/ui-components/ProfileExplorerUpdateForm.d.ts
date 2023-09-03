/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProfileExplorer, User, Enrollment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileExplorerUpdateFormInputValues = {
    screenName?: string;
    byUser?: User;
    Enrollments?: Enrollment[];
};
export declare type ProfileExplorerUpdateFormValidationValues = {
    screenName?: ValidationFunction<string>;
    byUser?: ValidationFunction<User>;
    Enrollments?: ValidationFunction<Enrollment>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileExplorerUpdateFormOverridesProps = {
    ProfileExplorerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    screenName?: PrimitiveOverrideProps<TextFieldProps>;
    byUser?: PrimitiveOverrideProps<AutocompleteProps>;
    Enrollments?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProfileExplorerUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileExplorerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profileExplorer?: ProfileExplorer;
    onSubmit?: (fields: ProfileExplorerUpdateFormInputValues) => ProfileExplorerUpdateFormInputValues;
    onSuccess?: (fields: ProfileExplorerUpdateFormInputValues) => void;
    onError?: (fields: ProfileExplorerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileExplorerUpdateFormInputValues) => ProfileExplorerUpdateFormInputValues;
    onValidate?: ProfileExplorerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileExplorerUpdateForm(props: ProfileExplorerUpdateFormProps): React.ReactElement;
