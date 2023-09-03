/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pathway } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PwPWRegisterTile from "./PwPWRegisterTile";
import { Collection } from "@aws-amplify/ui-react";
export default function PwPWRegisterTileCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Pathway,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          suggestedGrades: await item.suggestedGrades.toArray(),
          hasManyVersion: await item.hasManyVersion,
          latestPathwayVersion: await item.latestPathwayVersion,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "PwPWRegisterTileCollection")}
      {...rest}
    >
      {(item, index) => (
        <PwPWRegisterTile
          pathway={item}
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PwPWRegisterTile>
      )}
    </Collection>
  );
}
