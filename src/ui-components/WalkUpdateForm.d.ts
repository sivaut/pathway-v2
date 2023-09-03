/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Walk, Step, WalkTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WalkUpdateFormInputValues = {
    Steps?: Step[];
    pathwayversionID?: string;
    name?: string;
    description?: string;
    videoLink?: string;
    referenceLinks?: string[];
    WalkTags?: WalkTag[];
};
export declare type WalkUpdateFormValidationValues = {
    Steps?: ValidationFunction<Step>;
    pathwayversionID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    videoLink?: ValidationFunction<string>;
    referenceLinks?: ValidationFunction<string>;
    WalkTags?: ValidationFunction<WalkTag>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WalkUpdateFormOverridesProps = {
    WalkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Steps?: PrimitiveOverrideProps<AutocompleteProps>;
    pathwayversionID?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    referenceLinks?: PrimitiveOverrideProps<TextFieldProps>;
    WalkTags?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WalkUpdateFormProps = React.PropsWithChildren<{
    overrides?: WalkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    walk?: Walk;
    onSubmit?: (fields: WalkUpdateFormInputValues) => WalkUpdateFormInputValues;
    onSuccess?: (fields: WalkUpdateFormInputValues) => void;
    onError?: (fields: WalkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WalkUpdateFormInputValues) => WalkUpdateFormInputValues;
    onValidate?: WalkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WalkUpdateForm(props: WalkUpdateFormProps): React.ReactElement;
