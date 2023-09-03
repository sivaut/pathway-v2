/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pathway, Walk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PathwayVersionCreateFormInputValues = {
    ofPathway?: Pathway;
    version?: number;
    published?: string;
    status?: string;
    Walks?: Walk[];
    latest?: boolean;
};
export declare type PathwayVersionCreateFormValidationValues = {
    ofPathway?: ValidationFunction<Pathway>;
    version?: ValidationFunction<number>;
    published?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    Walks?: ValidationFunction<Walk>;
    latest?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PathwayVersionCreateFormOverridesProps = {
    PathwayVersionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ofPathway?: PrimitiveOverrideProps<AutocompleteProps>;
    version?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    Walks?: PrimitiveOverrideProps<AutocompleteProps>;
    latest?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PathwayVersionCreateFormProps = React.PropsWithChildren<{
    overrides?: PathwayVersionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PathwayVersionCreateFormInputValues) => PathwayVersionCreateFormInputValues;
    onSuccess?: (fields: PathwayVersionCreateFormInputValues) => void;
    onError?: (fields: PathwayVersionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PathwayVersionCreateFormInputValues) => PathwayVersionCreateFormInputValues;
    onValidate?: PathwayVersionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PathwayVersionCreateForm(props: PathwayVersionCreateFormProps): React.ReactElement;
