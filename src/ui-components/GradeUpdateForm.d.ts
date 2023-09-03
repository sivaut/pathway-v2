/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grade } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GradeUpdateFormInputValues = {
    gradeLevel?: number;
    pathwayID?: string;
};
export declare type GradeUpdateFormValidationValues = {
    gradeLevel?: ValidationFunction<number>;
    pathwayID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GradeUpdateFormOverridesProps = {
    GradeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gradeLevel?: PrimitiveOverrideProps<TextFieldProps>;
    pathwayID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type GradeUpdateFormProps = React.PropsWithChildren<{
    overrides?: GradeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    grade?: Grade;
    onSubmit?: (fields: GradeUpdateFormInputValues) => GradeUpdateFormInputValues;
    onSuccess?: (fields: GradeUpdateFormInputValues) => void;
    onError?: (fields: GradeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GradeUpdateFormInputValues) => GradeUpdateFormInputValues;
    onValidate?: GradeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GradeUpdateForm(props: GradeUpdateFormProps): React.ReactElement;
