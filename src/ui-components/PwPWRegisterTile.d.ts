/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pathway } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwPWRegisterTileOverridesProps = {
    PwPWRegisterTile?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    BtnEnroll?: PrimitiveOverrideProps<ButtonProps>;
    PwText?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2"?: PrimitiveOverrideProps<ViewProps>;
    pwTag?: PrimitiveOverrideProps<TextProps>;
    pwName?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "IMG-1054 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PwPWRegisterTileProps = React.PropsWithChildren<Partial<ViewProps> & {
    pathway?: Pathway;
} & {
    overrides?: PwPWRegisterTileOverridesProps | undefined | null;
}>;
export default function PwPWRegisterTile(props: PwPWRegisterTileProps): React.ReactElement;
