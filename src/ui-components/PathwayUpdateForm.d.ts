/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pathway, Grade, PathwayVersion, PathwayTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PathwayUpdateFormInputValues = {
    name?: string;
    description?: string;
    thumbnail?: string;
    suggestedGrades?: Grade[];
    hasManyVersion?: PathwayVersion;
    latestPathwayVersion?: PathwayVersion;
    PathwayTags?: PathwayTag[];
    tags?: string;
};
export declare type PathwayUpdateFormValidationValues = {
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
export declare type PathwayUpdateFormOverridesProps = {
    PathwayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    suggestedGrades?: PrimitiveOverrideProps<AutocompleteProps>;
    hasManyVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    latestPathwayVersion?: PrimitiveOverrideProps<AutocompleteProps>;
    PathwayTags?: PrimitiveOverrideProps<AutocompleteProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PathwayUpdateFormProps = React.PropsWithChildren<{
    overrides?: PathwayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pathway?: Pathway;
    onSubmit?: (fields: PathwayUpdateFormInputValues) => PathwayUpdateFormInputValues;
    onSuccess?: (fields: PathwayUpdateFormInputValues) => void;
    onError?: (fields: PathwayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PathwayUpdateFormInputValues) => PathwayUpdateFormInputValues;
    onValidate?: PathwayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PathwayUpdateForm(props: PathwayUpdateFormProps): React.ReactElement;
