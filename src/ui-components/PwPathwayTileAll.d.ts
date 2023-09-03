/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pathway, PathwayTag } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwPathwayTileAllOverridesProps = {
    PwPathwayTileAll?: PrimitiveOverrideProps<FlexProps>;
    "No of Enrollments"?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    Tags?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PwPathwayTileAllProps = React.PropsWithChildren<Partial<FlexProps> & {
    pathway?: Pathway;
    pathwayTag?: PathwayTag;
} & {
    overrides?: PwPathwayTileAllOverridesProps | undefined | null;
}>;
export default function PwPathwayTileAll(props: PwPathwayTileAllProps): React.ReactElement;
