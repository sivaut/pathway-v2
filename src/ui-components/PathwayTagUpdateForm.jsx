/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { PathwayTag, Pathway, PathwayPathwayTag } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PathwayTagUpdateForm(props) {
  const {
    id: idProp,
    pathwayTag: pathwayTagModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    pathways: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [pathways, setPathways] = React.useState(initialValues.pathways);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pathwayTagRecord
      ? { ...initialValues, ...pathwayTagRecord, pathways: linkedPathways }
      : initialValues;
    setName(cleanValues.name);
    setPathways(cleanValues.pathways ?? []);
    setCurrentPathwaysValue(undefined);
    setCurrentPathwaysDisplayValue("");
    setErrors({});
  };
  const [pathwayTagRecord, setPathwayTagRecord] =
    React.useState(pathwayTagModelProp);
  const [linkedPathways, setLinkedPathways] = React.useState([]);
  const canUnlinkPathways = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PathwayTag, idProp)
        : pathwayTagModelProp;
      setPathwayTagRecord(record);
      const linkedPathways = record
        ? await Promise.all(
            (
              await record.pathways.toArray()
            ).map((r) => {
              return r.pathway;
            })
          )
        : [];
      setLinkedPathways(linkedPathways);
    };
    queryData();
  }, [idProp, pathwayTagModelProp]);
  React.useEffect(resetStateValues, [pathwayTagRecord, linkedPathways]);
  const [currentPathwaysDisplayValue, setCurrentPathwaysDisplayValue] =
    React.useState("");
  const [currentPathwaysValue, setCurrentPathwaysValue] =
    React.useState(undefined);
  const pathwaysRef = React.createRef();
  const getIDValue = {
    pathways: (r) => JSON.stringify({ id: r?.id }),
  };
  const pathwaysIdSet = new Set(
    Array.isArray(pathways)
      ? pathways.map((r) => getIDValue.pathways?.(r))
      : getIDValue.pathways?.(pathways)
  );
  const pathwayRecords = useDataStoreBinding({
    type: "collection",
    model: Pathway,
  }).items;
  const getDisplayValue = {
    pathways: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    pathways: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          pathways,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const promises = [];
          const pathwaysToLinkMap = new Map();
          const pathwaysToUnLinkMap = new Map();
          const pathwaysMap = new Map();
          const linkedPathwaysMap = new Map();
          pathways.forEach((r) => {
            const count = pathwaysMap.get(getIDValue.pathways?.(r));
            const newCount = count ? count + 1 : 1;
            pathwaysMap.set(getIDValue.pathways?.(r), newCount);
          });
          linkedPathways.forEach((r) => {
            const count = linkedPathwaysMap.get(getIDValue.pathways?.(r));
            const newCount = count ? count + 1 : 1;
            linkedPathwaysMap.set(getIDValue.pathways?.(r), newCount);
          });
          linkedPathwaysMap.forEach((count, id) => {
            const newCount = pathwaysMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                pathwaysToUnLinkMap.set(id, diffCount);
              }
            } else {
              pathwaysToUnLinkMap.set(id, count);
            }
          });
          pathwaysMap.forEach((count, id) => {
            const originalCount = linkedPathwaysMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                pathwaysToLinkMap.set(id, diffCount);
              }
            } else {
              pathwaysToLinkMap.set(id, count);
            }
          });
          pathwaysToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const pathwayPathwayTagRecords = await DataStore.query(
              PathwayPathwayTag,
              (r) =>
                r.and((r) => {
                  return [
                    r.pathwayId.eq(recordKeys.id),
                    r.pathwayTagId.eq(pathwayTagRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(pathwayPathwayTagRecords[i]));
            }
          });
          pathwaysToLinkMap.forEach((count, id) => {
            const pathwayToLink = pathwayRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new PathwayPathwayTag({
                    pathwayTag: pathwayTagRecord,
                    pathway: pathwayToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
          };
          promises.push(
            DataStore.save(
              PathwayTag.copyOf(pathwayTagRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PathwayTagUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              pathways,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              pathways: values,
            };
            const result = onChange(modelFields);
            values = result?.pathways ?? values;
          }
          setPathways(values);
          setCurrentPathwaysValue(undefined);
          setCurrentPathwaysDisplayValue("");
        }}
        currentFieldValue={currentPathwaysValue}
        label={"Pathways"}
        items={pathways}
        hasError={errors?.pathways?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("pathways", currentPathwaysValue)
        }
        errorMessage={errors?.pathways?.errorMessage}
        getBadgeText={getDisplayValue.pathways}
        setFieldValue={(model) => {
          setCurrentPathwaysDisplayValue(
            model ? getDisplayValue.pathways(model) : ""
          );
          setCurrentPathwaysValue(model);
        }}
        inputFieldRef={pathwaysRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pathways"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Pathway"
          value={currentPathwaysDisplayValue}
          options={pathwayRecords
            .filter((r) => !pathwaysIdSet.has(getIDValue.pathways?.(r)))
            .map((r) => ({
              id: getIDValue.pathways?.(r),
              label: getDisplayValue.pathways?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPathwaysValue(
              pathwayRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPathwaysDisplayValue(label);
            runValidationTasks("pathways", label);
          }}
          onClear={() => {
            setCurrentPathwaysDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.pathways?.hasError) {
              runValidationTasks("pathways", value);
            }
            setCurrentPathwaysDisplayValue(value);
            setCurrentPathwaysValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("pathways", currentPathwaysDisplayValue)
          }
          errorMessage={errors.pathways?.errorMessage}
          hasError={errors.pathways?.hasError}
          ref={pathwaysRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "pathways")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pathwayTagModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pathwayTagModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
