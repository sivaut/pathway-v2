/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pathway, PathwayVersion, ProgressPath as ProgressPath0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EnrollmentCreateFormInputValues = {
    toPathway?: Pathway;
    tPathwayVersiono?: PathwayVersion;
    profileexplorerID?: string;
    ProgressPath?: ProgressPath0;
};
export declare type EnrollmentCreateFormValidationValues = {
    toPathway?: ValidationFunction<Pathway>;
    tPathwayVersiono?: ValidationFunction<PathwayVersion>;
    profileexplorerID?: ValidationFunction<string>;
    ProgressPath?: ValidationFunction<ProgressPath0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentCreateFormOverridesProps = {
    EnrollmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    toPathway?: PrimitiveOverrideProps<AutocompleteProps>;
    tPathwayVersiono?: PrimitiveOverrideProps<AutocompleteProps>;
    profileexplorerID?: PrimitiveOverrideProps<AutocompleteProps>;
    ProgressPath?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EnrollmentCreateFormProps = React.PropsWithChildren<{
    overrides?: EnrollmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onSuccess?: (fields: EnrollmentCreateFormInputValues) => void;
    onError?: (fields: EnrollmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onValidate?: EnrollmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function EnrollmentCreateForm(props: EnrollmentCreateFormProps): React.ReactElement;
