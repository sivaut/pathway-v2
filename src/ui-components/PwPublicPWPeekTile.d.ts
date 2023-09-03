/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pathway } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwPublicPWPeekTileOverridesProps = {
    PwPublicPWPeekTile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "IMG-1054 1"?: PrimitiveOverrideProps<ImageProps>;
    PwText?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2"?: PrimitiveOverrideProps<ViewProps>;
    pwTag?: PrimitiveOverrideProps<TextProps>;
    pwName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PwPublicPWPeekTileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pathway?: Pathway;
} & {
    overrides?: PwPublicPWPeekTileOverridesProps | undefined | null;
}>;
export default function PwPublicPWPeekTile(props: PwPublicPWPeekTileProps): React.ReactElement;
