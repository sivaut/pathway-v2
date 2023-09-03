/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PwPublicPWPeekTileProps } from "./PwPublicPWPeekTile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwPublicPWPeekTileCollectionOverridesProps = {
    PwPublicPWPeekTileCollection?: PrimitiveOverrideProps<CollectionProps>;
    PwPublicPWPeekTile?: PwPublicPWPeekTileProps;
} & EscapeHatchProps;
export declare type PwPublicPWPeekTileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PwPublicPWPeekTileProps;
} & {
    overrides?: PwPublicPWPeekTileCollectionOverridesProps | undefined | null;
}>;
export default function PwPublicPWPeekTileCollection(props: PwPublicPWPeekTileCollectionProps): React.ReactElement;
