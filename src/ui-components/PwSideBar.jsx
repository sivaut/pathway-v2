/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function PwSideBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="14px"
      direction="column"
      width="unset"
      height="944px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="7px 4px 716px 4px"
      backgroundColor="rgba(174,213,129,1)"
      {...getOverrideProps(overrides, "PwSideBar")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="link"
        children="🚀 My Pathways"
        {...getOverrideProps(overrides, "ctaMyPathways")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="link"
        children="✨Discover new"
        {...getOverrideProps(overrides, "ctaDiscoverPublic")}
      ></Button>
      <Button
        width="180px"
        height="unset"
        border="1px SOLID rgba(255,255,255,1)"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Sign In"
        {...getOverrideProps(overrides, "BtnSignIn")}
      ></Button>
      <Button
        width="180px"
        height="unset"
        border="1px SOLID rgba(255,255,255,1)"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        {...getOverrideProps(overrides, "BtnSignOut")}
      ></Button>
    </Flex>
  );
}
