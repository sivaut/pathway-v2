/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GradeCreateFormInputValues = {
    gradeLevel?: number;
    pathwayID?: string;
};
export declare type GradeCreateFormValidationValues = {
    gradeLevel?: ValidationFunction<number>;
    pathwayID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GradeCreateFormOverridesProps = {
    GradeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gradeLevel?: PrimitiveOverrideProps<TextFieldProps>;
    pathwayID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type GradeCreateFormProps = React.PropsWithChildren<{
    overrides?: GradeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GradeCreateFormInputValues) => GradeCreateFormInputValues;
    onSuccess?: (fields: GradeCreateFormInputValues) => void;
    onError?: (fields: GradeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GradeCreateFormInputValues) => GradeCreateFormInputValues;
    onValidate?: GradeCreateFormValidationValues;
} & React.CSSProperties>;
export default function GradeCreateForm(props: GradeCreateFormProps): React.ReactElement;
