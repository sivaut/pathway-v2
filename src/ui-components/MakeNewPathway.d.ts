/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grade, PathwayTag } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MakeNewPathwayInputValues = {
    name?: string;
    description?: string;
    thumbnail?: string;
    suggestedGrades?: Grade[];
    PathwayTags?: PathwayTag[];
    tags?: string;
};
export declare type MakeNewPathwayValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    suggestedGrades?: ValidationFunction<Grade>;
    PathwayTags?: ValidationFunction<PathwayTag>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MakeNewPathwayOverridesProps = {
    MakeNewPathwayGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    suggestedGrades?: PrimitiveOverrideProps<AutocompleteProps>;
    PathwayTags?: PrimitiveOverrideProps<AutocompleteProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MakeNewPathwayProps = React.PropsWithChildren<{
    overrides?: MakeNewPathwayOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MakeNewPathwayInputValues) => MakeNewPathwayInputValues;
    onSuccess?: (fields: MakeNewPathwayInputValues) => void;
    onError?: (fields: MakeNewPathwayInputValues, errorMessage: string) => void;
    onChange?: (fields: MakeNewPathwayInputValues) => MakeNewPathwayInputValues;
    onValidate?: MakeNewPathwayValidationValues;
} & React.CSSProperties>;
export default function MakeNewPathway(props: MakeNewPathwayProps): React.ReactElement;
