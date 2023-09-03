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
import { WalkTag, Walk, WalkWalkTag } from "../models";
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
export default function WalkTagUpdateForm(props) {
  const {
    id: idProp,
    walkTag: walkTagModelProp,
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
    walks: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [walks, setWalks] = React.useState(initialValues.walks);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = walkTagRecord
      ? { ...initialValues, ...walkTagRecord, walks: linkedWalks }
      : initialValues;
    setName(cleanValues.name);
    setWalks(cleanValues.walks ?? []);
    setCurrentWalksValue(undefined);
    setCurrentWalksDisplayValue("");
    setErrors({});
  };
  const [walkTagRecord, setWalkTagRecord] = React.useState(walkTagModelProp);
  const [linkedWalks, setLinkedWalks] = React.useState([]);
  const canUnlinkWalks = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(WalkTag, idProp)
        : walkTagModelProp;
      setWalkTagRecord(record);
      const linkedWalks = record
        ? await Promise.all(
            (
              await record.walks.toArray()
            ).map((r) => {
              return r.walk;
            })
          )
        : [];
      setLinkedWalks(linkedWalks);
    };
    queryData();
  }, [idProp, walkTagModelProp]);
  React.useEffect(resetStateValues, [walkTagRecord, linkedWalks]);
  const [currentWalksDisplayValue, setCurrentWalksDisplayValue] =
    React.useState("");
  const [currentWalksValue, setCurrentWalksValue] = React.useState(undefined);
  const walksRef = React.createRef();
  const getIDValue = {
    walks: (r) => JSON.stringify({ id: r?.id }),
  };
  const walksIdSet = new Set(
    Array.isArray(walks)
      ? walks.map((r) => getIDValue.walks?.(r))
      : getIDValue.walks?.(walks)
  );
  const walkRecords = useDataStoreBinding({
    type: "collection",
    model: Walk,
  }).items;
  const getDisplayValue = {
    walks: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    walks: [],
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
          walks,
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
          const walksToLinkMap = new Map();
          const walksToUnLinkMap = new Map();
          const walksMap = new Map();
          const linkedWalksMap = new Map();
          walks.forEach((r) => {
            const count = walksMap.get(getIDValue.walks?.(r));
            const newCount = count ? count + 1 : 1;
            walksMap.set(getIDValue.walks?.(r), newCount);
          });
          linkedWalks.forEach((r) => {
            const count = linkedWalksMap.get(getIDValue.walks?.(r));
            const newCount = count ? count + 1 : 1;
            linkedWalksMap.set(getIDValue.walks?.(r), newCount);
          });
          linkedWalksMap.forEach((count, id) => {
            const newCount = walksMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                walksToUnLinkMap.set(id, diffCount);
              }
            } else {
              walksToUnLinkMap.set(id, count);
            }
          });
          walksMap.forEach((count, id) => {
            const originalCount = linkedWalksMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                walksToLinkMap.set(id, diffCount);
              }
            } else {
              walksToLinkMap.set(id, count);
            }
          });
          walksToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const walkWalkTagRecords = await DataStore.query(WalkWalkTag, (r) =>
              r.and((r) => {
                return [
                  r.walkId.eq(recordKeys.id),
                  r.walkTagId.eq(walkTagRecord.id),
                ];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(walkWalkTagRecords[i]));
            }
          });
          walksToLinkMap.forEach((count, id) => {
            const walkToLink = walkRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new WalkWalkTag({
                    walkTag: walkTagRecord,
                    walk: walkToLink,
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
              WalkTag.copyOf(walkTagRecord, (updated) => {
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
      {...getOverrideProps(overrides, "WalkTagUpdateForm")}
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
              walks,
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
              walks: values,
            };
            const result = onChange(modelFields);
            values = result?.walks ?? values;
          }
          setWalks(values);
          setCurrentWalksValue(undefined);
          setCurrentWalksDisplayValue("");
        }}
        currentFieldValue={currentWalksValue}
        label={"Walks"}
        items={walks}
        hasError={errors?.walks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("walks", currentWalksValue)
        }
        errorMessage={errors?.walks?.errorMessage}
        getBadgeText={getDisplayValue.walks}
        setFieldValue={(model) => {
          setCurrentWalksDisplayValue(
            model ? getDisplayValue.walks(model) : ""
          );
          setCurrentWalksValue(model);
        }}
        inputFieldRef={walksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Walks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Walk"
          value={currentWalksDisplayValue}
          options={walkRecords
            .filter((r) => !walksIdSet.has(getIDValue.walks?.(r)))
            .map((r) => ({
              id: getIDValue.walks?.(r),
              label: getDisplayValue.walks?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentWalksValue(
              walkRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentWalksDisplayValue(label);
            runValidationTasks("walks", label);
          }}
          onClear={() => {
            setCurrentWalksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.walks?.hasError) {
              runValidationTasks("walks", value);
            }
            setCurrentWalksDisplayValue(value);
            setCurrentWalksValue(undefined);
          }}
          onBlur={() => runValidationTasks("walks", currentWalksDisplayValue)}
          errorMessage={errors.walks?.errorMessage}
          hasError={errors.walks?.hasError}
          ref={walksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "walks")}
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
          isDisabled={!(idProp || walkTagModelProp)}
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
              !(idProp || walkTagModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
