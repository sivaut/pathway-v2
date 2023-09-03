/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProgressWalk, WalkTag, ProgressStep } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressWalkUpdateFormInputValues = {
    progresspathID?: string;
    definedWalk?: WalkTag;
    hasProgressSteps?: ProgressStep[];
    totalSteps?: number;
    doneSteps?: number;
    lastActedOn?: string;
};
export declare type ProgressWalkUpdateFormValidationValues = {
    progresspathID?: ValidationFunction<string>;
    definedWalk?: ValidationFunction<WalkTag>;
    hasProgressSteps?: ValidationFunction<ProgressStep>;
    totalSteps?: ValidationFunction<number>;
    doneSteps?: ValidationFunction<number>;
    lastActedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressWalkUpdateFormOverridesProps = {
    ProgressWalkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    progresspathID?: PrimitiveOverrideProps<AutocompleteProps>;
    definedWalk?: PrimitiveOverrideProps<AutocompleteProps>;
    hasProgressSteps?: PrimitiveOverrideProps<AutocompleteProps>;
    totalSteps?: PrimitiveOverrideProps<TextFieldProps>;
    doneSteps?: PrimitiveOverrideProps<TextFieldProps>;
    lastActedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressWalkUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgressWalkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    progressWalk?: ProgressWalk;
    onSubmit?: (fields: ProgressWalkUpdateFormInputValues) => ProgressWalkUpdateFormInputValues;
    onSuccess?: (fields: ProgressWalkUpdateFormInputValues) => void;
    onError?: (fields: ProgressWalkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressWalkUpdateFormInputValues) => ProgressWalkUpdateFormInputValues;
    onValidate?: ProgressWalkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressWalkUpdateForm(props: ProgressWalkUpdateFormProps): React.ReactElement;
