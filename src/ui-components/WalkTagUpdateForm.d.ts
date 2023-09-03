/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WalkTag, Walk } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WalkTagUpdateFormInputValues = {
    name?: string;
    walks?: Walk[];
};
export declare type WalkTagUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    walks?: ValidationFunction<Walk>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WalkTagUpdateFormOverridesProps = {
    WalkTagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    walks?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WalkTagUpdateFormProps = React.PropsWithChildren<{
    overrides?: WalkTagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    walkTag?: WalkTag;
    onSubmit?: (fields: WalkTagUpdateFormInputValues) => WalkTagUpdateFormInputValues;
    onSuccess?: (fields: WalkTagUpdateFormInputValues) => void;
    onError?: (fields: WalkTagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WalkTagUpdateFormInputValues) => WalkTagUpdateFormInputValues;
    onValidate?: WalkTagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WalkTagUpdateForm(props: WalkTagUpdateFormProps): React.ReactElement;
