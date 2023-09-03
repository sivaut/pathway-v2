/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import { Flex } from "@aws-amplify/ui-react";
export default function PwTopBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PwTopBar")}
      {...rest}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(174,213,129,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </Flex>
  );
}
