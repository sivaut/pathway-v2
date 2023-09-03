/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PwyIconsOverridesProps = {
    PwyIcons?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PwyIconsProps = React.PropsWithChildren<Partial<IconProps> & {
    type?: "alert" | "arrow-right" | "bookmark_border" | "chat" | "chat-bubble-outline" | "checkmark" | "close" | "delete" | "favorite" | "favorite_border" | "group" | "info" | "more_horiz" | "more_vert" | "reply" | "send" | "share" | "shopping_bag" | "shuffle" | "type21" | "warning";
} & {
    overrides?: PwyIconsOverridesProps | undefined | null;
}>;
export default function PwyIcons(props: PwyIconsProps): React.ReactElement;
