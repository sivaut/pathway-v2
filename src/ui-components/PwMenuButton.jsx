/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function PwMenuButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Button Icon34782600": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        label: {
          fontSize: "20px",
          lineHeight: "30px",
          children: "Primary Button",
        },
        "Button Icon34782602": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        PwMenuButton: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(68,3,94,1)",
        },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        label: {
          fontSize: "20px",
          color: "rgba(92,102,112,1)",
          lineHeight: "30px",
          children: "Primary Button",
        },
        "Button Icon34782602": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        PwMenuButton: {
          borderRadius: "4px",
          backgroundColor: "rgba(239,240,240,1)",
        },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: { children: "Primary Button" },
        "Button Icon34782602": {},
        PwMenuButton: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(68,3,94,1)",
        },
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: { color: "rgba(92,102,112,1)", children: "Primary Button" },
        "Button Icon34782602": {},
        PwMenuButton: {
          borderRadius: "4px",
          backgroundColor: "rgba(239,240,240,1)",
        },
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        label: {
          fontSize: "14px",
          lineHeight: "21px",
          children: "Primary Button",
        },
        "Button Icon34782602": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        PwMenuButton: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
          backgroundColor: "rgba(68,3,94,1)",
        },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "24px",
          height: "24px",
          fontSize: "24px",
        },
        label: {
          fontSize: "14px",
          color: "rgba(92,102,112,1)",
          lineHeight: "21px",
          children: "Primary Button",
        },
        "Button Icon34782602": {
          width: "24px",
          height: "24px",
          fontSize: "24px",
        },
        PwMenuButton: {
          borderRadius: "4px",
          padding: "6px 12px 6px 12px",
          backgroundColor: "rgba(239,240,240,1)",
        },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        variation: "primary",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        label: { fontSize: "20px", lineHeight: "30px" },
        "Button Icon34782602": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        PwMenuButton: {},
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        label: {
          fontSize: "20px",
          color: "rgba(92,102,112,1)",
          lineHeight: "30px",
        },
        "Button Icon34782602": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        PwMenuButton: {
          border: "1px SOLID rgba(239,240,240,1)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
        },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: {},
        "Button Icon34782602": {},
        PwMenuButton: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: { color: "rgba(92,102,112,1)" },
        "Button Icon34782602": {},
        PwMenuButton: {
          border: "1px SOLID rgba(239,240,240,1)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
        },
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        label: { fontSize: "14px", lineHeight: "21px" },
        "Button Icon34782602": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        PwMenuButton: { padding: "6px 12px 6px 12px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        label: {
          fontSize: "14px",
          color: "rgba(92,102,112,1)",
          lineHeight: "21px",
        },
        "Button Icon34782602": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        PwMenuButton: {
          border: "1px SOLID rgba(239,240,240,1)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
        },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "24px",
          height: "24px",
          fontSize: "24px",
        },
        label: {
          fontSize: "20px",
          color: "rgba(54,2,75,1)",
          lineHeight: "30px",
          children: "Link Button",
        },
        "Button Icon34782602": {
          width: "24px",
          height: "24px",
          fontSize: "24px",
        },
        PwMenuButton: { gap: "10px", borderRadius: "4px" },
      },
      variantValues: { size: "large", isDisabled: "false", variation: "link" },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        label: {
          fontSize: "20px",
          color: "rgba(92,102,112,1)",
          lineHeight: "30px",
          children: "Link Button",
        },
        "Button Icon34782602": {
          width: "20px",
          height: "20px",
          fontSize: "20px",
        },
        PwMenuButton: { gap: "10px", borderRadius: "4px" },
      },
      variantValues: { size: "large", isDisabled: "true", variation: "link" },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: { color: "rgba(54,2,75,1)", children: "Link Button" },
        "Button Icon34782602": {},
        PwMenuButton: { gap: "10px", borderRadius: "4px" },
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        variation: "link",
      },
    },
    {
      overrides: {
        "Button Icon34782600": {},
        label: { color: "rgba(92,102,112,1)", children: "Link Button" },
        "Button Icon34782602": {},
        PwMenuButton: { gap: "10px", borderRadius: "4px" },
      },
      variantValues: { size: "default", isDisabled: "true", variation: "link" },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        label: {
          fontSize: "14px",
          color: "rgba(54,2,75,1)",
          lineHeight: "21px",
          children: "Link Button",
        },
        "Button Icon34782602": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        PwMenuButton: { borderRadius: "4px", padding: "6px 12px 6px 12px" },
      },
      variantValues: { size: "small", isDisabled: "false", variation: "link" },
    },
    {
      overrides: {
        "Button Icon34782600": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        label: {
          fontSize: "14px",
          color: "rgba(92,102,112,1)",
          lineHeight: "21px",
          children: "Link Button",
        },
        "Button Icon34782602": {
          width: "14px",
          height: "14px",
          fontSize: "14px",
        },
        PwMenuButton: { borderRadius: "4px", padding: "6px 12px 6px 12px" },
      },
      variantValues: { size: "small", isDisabled: "true", variation: "link" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(250,252,255,1)"
      borderRadius="5px"
      padding="8px 16px 8px 16px"
      display="flex"
      {...getOverrideProps(overrides, "PwMenuButton")}
      {...rest}
    >
      <Icon
        width="16px"
        height="16px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="none"
        fontSize="16px"
        {...getOverrideProps(overrides, "Button Icon34782600")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Default Button"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Icon
        width="16px"
        height="16px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="none"
        fontSize="16px"
        {...getOverrideProps(overrides, "Button Icon34782602")}
      ></Icon>
    </Flex>
  );
}
