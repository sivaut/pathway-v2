/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PathwayTag, Pathway } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PathwayTagUpdateFormInputValues = {
    name?: string;
    pathways?: Pathway[];
};
export declare type PathwayTagUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    pathways?: ValidationFunction<Pathway>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PathwayTagUpdateFormOverridesProps = {
    PathwayTagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pathways?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PathwayTagUpdateFormProps = React.PropsWithChildren<{
    overrides?: PathwayTagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pathwayTag?: PathwayTag;
    onSubmit?: (fields: PathwayTagUpdateFormInputValues) => PathwayTagUpdateFormInputValues;
    onSuccess?: (fields: PathwayTagUpdateFormInputValues) => void;
    onError?: (fields: PathwayTagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PathwayTagUpdateFormInputValues) => PathwayTagUpdateFormInputValues;
    onValidate?: PathwayTagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PathwayTagUpdateForm(props: PathwayTagUpdateFormProps): React.ReactElement;
