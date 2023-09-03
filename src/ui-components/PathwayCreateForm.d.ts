/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grade, PathwayVersion, PathwayTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PathwayCreateFormInputValues = {
    name?: string;
    description?: string;
    thumbnail?: string;
    suggestedGrades?: Grade[];
    hasManyVersion?: PathwayVersion;
    latestPathwayVersion?: PathwayVersion;
    PathwayTags?: PathwayTag[];
    tags?: string;
};
export declare type PathwayCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    suggestedGrades?: ValidationFunction<Grade>;
    hasManyVersion?: ValidationFunction<PathwayVersion>;
    latestPathwayVersion?: ValidationFunction<PathwayVersion>;
    PathwayTags?: ValidationFunction<PathwayTag>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PathwayCreateFormOverridesProps = {
    PathwayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    suggestedGrades?: PrimitiveOverrideProps<AutocompleteProps>;
    hasManyVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    latestPathwayVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    PathwayTags?: PrimitiveOverrideProps<AutocompleteProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PathwayCreateFormProps = React.PropsWithChildren<{
    overrides?: PathwayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PathwayCreateFormInputValues) => PathwayCreateFormInputValues;
    onSuccess?: (fields: PathwayCreateFormInputValues) => void;
    onError?: (fields: PathwayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PathwayCreateFormInputValues) => PathwayCreateFormInputValues;
    onValidate?: PathwayCreateFormValidationValues;
} & React.CSSProperties>;
export default function PathwayCreateForm(props: PathwayCreateFormProps): React.ReactElement;
