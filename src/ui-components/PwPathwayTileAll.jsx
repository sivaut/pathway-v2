/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PwPathwayTileAll(props) {
  const { pathway, pathwayTag, overrides, ...rest } = props;
  return (
    <Flex
      gap="27px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="26px 18px 26px 18px"
      {...getOverrideProps(overrides, "PwPathwayTileAll")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="258px"
        height="39px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="No of Enrollments"
        {...getOverrideProps(overrides, "No of Enrollments")}
      ></Text>
      <View
        width="258px"
        height="115px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Image")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="258px"
        height="43px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        tagList={pathway?.PathwayTags}
        children="Tags"
        {...getOverrideProps(overrides, "Tags")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="302px"
        height="43px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pathway?.name}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="271px"
        height="109px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pathway?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </Flex>
  );
}
