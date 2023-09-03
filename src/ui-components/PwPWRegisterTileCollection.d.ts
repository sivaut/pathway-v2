/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PwPWRegisterTileProps } from "./PwPWRegisterTile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwPWRegisterTileCollectionOverridesProps = {
    PwPWRegisterTileCollection?: PrimitiveOverrideProps<CollectionProps>;
    PwPWRegisterTile?: PwPWRegisterTileProps;
} & EscapeHatchProps;
export declare type PwPWRegisterTileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PwPWRegisterTileProps;
} & {
    overrides?: PwPWRegisterTileCollectionOverridesProps | undefined | null;
}>;
export default function PwPWRegisterTileCollection(props: PwPWRegisterTileCollectionProps): React.ReactElement;
