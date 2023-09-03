/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwMenuButtonOverridesProps = {
    PwMenuButton?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon34782600"?: PrimitiveOverrideProps<IconProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon34782602"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PwMenuButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    isDisabled?: "false" | "true";
    size?: "default" | "large" | "small";
    variation?: "default" | "link" | "primary";
} & {
    overrides?: PwMenuButtonOverridesProps | undefined | null;
}>;
export default function PwMenuButton(props: PwMenuButtonProps): React.ReactElement;
