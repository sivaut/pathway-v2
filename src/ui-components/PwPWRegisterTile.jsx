/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function PwPWRegisterTile(props) {
  const { pathway, overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="369px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,233,230,1)"
      {...getOverrideProps(overrides, "PwPWRegisterTile")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="300px"
        height="68px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="289px"
        left="0px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 4")}
      >
        <Button
          width="271px"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Start"
          {...getOverrideProps(overrides, "BtnEnroll")}
        ></Button>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="300px"
        height="192px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="104px"
        left="0px"
        padding="0px 0px 59px 0px"
        {...getOverrideProps(overrides, "PwText")}
      >
        <View
          width="300px"
          height="66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(81,83,156,1)"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="300px"
            height="66px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={pathway?.tags}
            {...getOverrideProps(overrides, "pwTag")}
          ></Text>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="26px"
          fontWeight="500"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="justify"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.63px"
          width="293px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pathway?.name}
          {...getOverrideProps(overrides, "pwName")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Image
          width="300px"
          height="104px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="./pwtn-default.png"
          {...getOverrideProps(overrides, "IMG-1054 1")}
        ></Image>
      </Flex>
    </View>
  );
}
