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
import { Walk, Step, WalkTag, PathwayVersion, WalkWalkTag } from "../models";
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
export default function WalkUpdateForm(props) {
  const {
    id: idProp,
    walk: walkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Steps: [],
    pathwayversionID: undefined,
    name: "",
    description: "",
    videoLink: "",
    referenceLinks: [],
    WalkTags: [],
  };
  const [Steps, setSteps] = React.useState(initialValues.Steps);
  const [pathwayversionID, setPathwayversionID] = React.useState(
    initialValues.pathwayversionID
  );
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [videoLink, setVideoLink] = React.useState(initialValues.videoLink);
  const [referenceLinks, setReferenceLinks] = React.useState(
    initialValues.referenceLinks
  );
  const [WalkTags, setWalkTags] = React.useState(initialValues.WalkTags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = walkRecord
      ? {
          ...initialValues,
          ...walkRecord,
          Steps: linkedSteps,
          pathwayversionID,
          WalkTags: linkedWalkTags,
        }
      : initialValues;
    setSteps(cleanValues.Steps ?? []);
    setCurrentStepsValue(undefined);
    setCurrentStepsDisplayValue("");
    setPathwayversionID(cleanValues.pathwayversionID);
    setCurrentPathwayversionIDValue(undefined);
    setCurrentPathwayversionIDDisplayValue("");
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setVideoLink(cleanValues.videoLink);
    setReferenceLinks(cleanValues.referenceLinks ?? []);
    setCurrentReferenceLinksValue("");
    setWalkTags(cleanValues.WalkTags ?? []);
    setCurrentWalkTagsValue(undefined);
    setCurrentWalkTagsDisplayValue("");
    setErrors({});
  };
  const [walkRecord, setWalkRecord] = React.useState(walkModelProp);
  const [linkedSteps, setLinkedSteps] = React.useState([]);
  const canUnlinkSteps = false;
  const [linkedWalkTags, setLinkedWalkTags] = React.useState([]);
  const canUnlinkWalkTags = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Walk, idProp)
        : walkModelProp;
      setWalkRecord(record);
      const linkedSteps = record ? await record.Steps.toArray() : [];
      setLinkedSteps(linkedSteps);
      const pathwayversionIDRecord = record
        ? await record.pathwayversionID
        : undefined;
      setPathwayversionID(pathwayversionIDRecord);
      const linkedWalkTags = record
        ? await Promise.all(
            (
              await record.WalkTags.toArray()
            ).map((r) => {
              return r.walkTag;
            })
          )
        : [];
      setLinkedWalkTags(linkedWalkTags);
    };
    queryData();
  }, [idProp, walkModelProp]);
  React.useEffect(resetStateValues, [
    walkRecord,
    linkedSteps,
    pathwayversionID,
    linkedWalkTags,
  ]);
  const [currentStepsDisplayValue, setCurrentStepsDisplayValue] =
    React.useState("");
  const [currentStepsValue, setCurrentStepsValue] = React.useState(undefined);
  const StepsRef = React.createRef();
  const [
    currentPathwayversionIDDisplayValue,
    setCurrentPathwayversionIDDisplayValue,
  ] = React.useState("");
  const [currentPathwayversionIDValue, setCurrentPathwayversionIDValue] =
    React.useState(undefined);
  const pathwayversionIDRef = React.createRef();
  const [currentReferenceLinksValue, setCurrentReferenceLinksValue] =
    React.useState("");
  const referenceLinksRef = React.createRef();
  const [currentWalkTagsDisplayValue, setCurrentWalkTagsDisplayValue] =
    React.useState("");
  const [currentWalkTagsValue, setCurrentWalkTagsValue] =
    React.useState(undefined);
  const WalkTagsRef = React.createRef();
  const getIDValue = {
    Steps: (r) => JSON.stringify({ id: r?.id }),
    WalkTags: (r) => JSON.stringify({ id: r?.id }),
  };
  const StepsIdSet = new Set(
    Array.isArray(Steps)
      ? Steps.map((r) => getIDValue.Steps?.(r))
      : getIDValue.Steps?.(Steps)
  );
  const WalkTagsIdSet = new Set(
    Array.isArray(WalkTags)
      ? WalkTags.map((r) => getIDValue.WalkTags?.(r))
      : getIDValue.WalkTags?.(WalkTags)
  );
  const stepRecords = useDataStoreBinding({
    type: "collection",
    model: Step,
  }).items;
  const pathwayVersionRecords = useDataStoreBinding({
    type: "collection",
    model: PathwayVersion,
  }).items;
  const walkTagRecords = useDataStoreBinding({
    type: "collection",
    model: WalkTag,
  }).items;
  const getDisplayValue = {
    Steps: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    pathwayversionID: (r) => `${r?.version ? r?.version + " - " : ""}${r?.id}`,
    WalkTags: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    Steps: [],
    pathwayversionID: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    videoLink: [{ type: "URL" }],
    referenceLinks: [{ type: "URL" }],
    WalkTags: [],
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
          Steps,
          pathwayversionID,
          name,
          description,
          videoLink,
          referenceLinks,
          WalkTags,
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
          const stepsToLink = [];
          const stepsToUnLink = [];
          const stepsSet = new Set();
          const linkedStepsSet = new Set();
          Steps.forEach((r) => stepsSet.add(getIDValue.Steps?.(r)));
          linkedSteps.forEach((r) => linkedStepsSet.add(getIDValue.Steps?.(r)));
          linkedSteps.forEach((r) => {
            if (!stepsSet.has(getIDValue.Steps?.(r))) {
              stepsToUnLink.push(r);
            }
          });
          Steps.forEach((r) => {
            if (!linkedStepsSet.has(getIDValue.Steps?.(r))) {
              stepsToLink.push(r);
            }
          });
          stepsToUnLink.forEach((original) => {
            if (!canUnlinkSteps) {
              throw Error(
                `Step ${original.id} cannot be unlinked from Walk because walkID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Step.copyOf(original, (updated) => {
                  updated.walkID = null;
                })
              )
            );
          });
          stepsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Step.copyOf(original, (updated) => {
                  updated.walkID = walkRecord.id;
                })
              )
            );
          });
          const walkTagsToLinkMap = new Map();
          const walkTagsToUnLinkMap = new Map();
          const walkTagsMap = new Map();
          const linkedWalkTagsMap = new Map();
          WalkTags.forEach((r) => {
            const count = walkTagsMap.get(getIDValue.WalkTags?.(r));
            const newCount = count ? count + 1 : 1;
            walkTagsMap.set(getIDValue.WalkTags?.(r), newCount);
          });
          linkedWalkTags.forEach((r) => {
            const count = linkedWalkTagsMap.get(getIDValue.WalkTags?.(r));
            const newCount = count ? count + 1 : 1;
            linkedWalkTagsMap.set(getIDValue.WalkTags?.(r), newCount);
          });
          linkedWalkTagsMap.forEach((count, id) => {
            const newCount = walkTagsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                walkTagsToUnLinkMap.set(id, diffCount);
              }
            } else {
              walkTagsToUnLinkMap.set(id, count);
            }
          });
          walkTagsMap.forEach((count, id) => {
            const originalCount = linkedWalkTagsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                walkTagsToLinkMap.set(id, diffCount);
              }
            } else {
              walkTagsToLinkMap.set(id, count);
            }
          });
          walkTagsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const walkWalkTagRecords = await DataStore.query(WalkWalkTag, (r) =>
              r.and((r) => {
                return [
                  r.walkTagId.eq(recordKeys.id),
                  r.walkId.eq(walkRecord.id),
                ];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(walkWalkTagRecords[i]));
            }
          });
          walkTagsToLinkMap.forEach((count, id) => {
            const walkTagToLink = walkTagRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new WalkWalkTag({
                    walk: walkRecord,
                    walkTag: walkTagToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            pathwayversionID: modelFields.pathwayversionID,
            name: modelFields.name,
            description: modelFields.description,
            videoLink: modelFields.videoLink,
            referenceLinks: modelFields.referenceLinks,
          };
          promises.push(
            DataStore.save(
              Walk.copyOf(walkRecord, (updated) => {
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
      {...getOverrideProps(overrides, "WalkUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Steps: values,
              pathwayversionID,
              name,
              description,
              videoLink,
              referenceLinks,
              WalkTags,
            };
            const result = onChange(modelFields);
            values = result?.Steps ?? values;
          }
          setSteps(values);
          setCurrentStepsValue(undefined);
          setCurrentStepsDisplayValue("");
        }}
        currentFieldValue={currentStepsValue}
        label={"Steps"}
        items={Steps}
        hasError={errors?.Steps?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Steps", currentStepsValue)
        }
        errorMessage={errors?.Steps?.errorMessage}
        getBadgeText={getDisplayValue.Steps}
        setFieldValue={(model) => {
          setCurrentStepsDisplayValue(
            model ? getDisplayValue.Steps(model) : ""
          );
          setCurrentStepsValue(model);
        }}
        inputFieldRef={StepsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Steps"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Step"
          value={currentStepsDisplayValue}
          options={stepRecords
            .filter((r) => !StepsIdSet.has(getIDValue.Steps?.(r)))
            .map((r) => ({
              id: getIDValue.Steps?.(r),
              label: getDisplayValue.Steps?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentStepsValue(
              stepRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStepsDisplayValue(label);
            runValidationTasks("Steps", label);
          }}
          onClear={() => {
            setCurrentStepsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Steps?.hasError) {
              runValidationTasks("Steps", value);
            }
            setCurrentStepsDisplayValue(value);
            setCurrentStepsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Steps", currentStepsDisplayValue)}
          errorMessage={errors.Steps?.errorMessage}
          hasError={errors.Steps?.hasError}
          ref={StepsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Steps")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID: value,
              name,
              description,
              videoLink,
              referenceLinks,
              WalkTags,
            };
            const result = onChange(modelFields);
            value = result?.pathwayversionID ?? value;
          }
          setPathwayversionID(value);
          setCurrentPathwayversionIDValue(undefined);
        }}
        currentFieldValue={currentPathwayversionIDValue}
        label={"Pathwayversion id"}
        items={pathwayversionID ? [pathwayversionID] : []}
        hasError={errors?.pathwayversionID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "pathwayversionID",
            currentPathwayversionIDValue
          )
        }
        errorMessage={errors?.pathwayversionID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.pathwayversionID(
                pathwayVersionRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPathwayversionIDDisplayValue(
            value
              ? getDisplayValue.pathwayversionID(
                  pathwayVersionRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPathwayversionIDValue(value);
        }}
        inputFieldRef={pathwayversionIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pathwayversion id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search PathwayVersion"
          value={currentPathwayversionIDDisplayValue}
          options={pathwayVersionRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.pathwayversionID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPathwayversionIDValue(id);
            setCurrentPathwayversionIDDisplayValue(label);
            runValidationTasks("pathwayversionID", label);
          }}
          onClear={() => {
            setCurrentPathwayversionIDDisplayValue("");
          }}
          defaultValue={pathwayversionID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.pathwayversionID?.hasError) {
              runValidationTasks("pathwayversionID", value);
            }
            setCurrentPathwayversionIDDisplayValue(value);
            setCurrentPathwayversionIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("pathwayversionID", currentPathwayversionIDValue)
          }
          errorMessage={errors.pathwayversionID?.errorMessage}
          hasError={errors.pathwayversionID?.hasError}
          ref={pathwayversionIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "pathwayversionID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID,
              name: value,
              description,
              videoLink,
              referenceLinks,
              WalkTags,
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
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID,
              name,
              description: value,
              videoLink,
              referenceLinks,
              WalkTags,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Video link"
        isRequired={false}
        isReadOnly={false}
        value={videoLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID,
              name,
              description,
              videoLink: value,
              referenceLinks,
              WalkTags,
            };
            const result = onChange(modelFields);
            value = result?.videoLink ?? value;
          }
          if (errors.videoLink?.hasError) {
            runValidationTasks("videoLink", value);
          }
          setVideoLink(value);
        }}
        onBlur={() => runValidationTasks("videoLink", videoLink)}
        errorMessage={errors.videoLink?.errorMessage}
        hasError={errors.videoLink?.hasError}
        {...getOverrideProps(overrides, "videoLink")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID,
              name,
              description,
              videoLink,
              referenceLinks: values,
              WalkTags,
            };
            const result = onChange(modelFields);
            values = result?.referenceLinks ?? values;
          }
          setReferenceLinks(values);
          setCurrentReferenceLinksValue("");
        }}
        currentFieldValue={currentReferenceLinksValue}
        label={"Reference links"}
        items={referenceLinks}
        hasError={errors?.referenceLinks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("referenceLinks", currentReferenceLinksValue)
        }
        errorMessage={errors?.referenceLinks?.errorMessage}
        setFieldValue={setCurrentReferenceLinksValue}
        inputFieldRef={referenceLinksRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Reference links"
          isRequired={false}
          isReadOnly={false}
          value={currentReferenceLinksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.referenceLinks?.hasError) {
              runValidationTasks("referenceLinks", value);
            }
            setCurrentReferenceLinksValue(value);
          }}
          onBlur={() =>
            runValidationTasks("referenceLinks", currentReferenceLinksValue)
          }
          errorMessage={errors.referenceLinks?.errorMessage}
          hasError={errors.referenceLinks?.hasError}
          ref={referenceLinksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "referenceLinks")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Steps,
              pathwayversionID,
              name,
              description,
              videoLink,
              referenceLinks,
              WalkTags: values,
            };
            const result = onChange(modelFields);
            values = result?.WalkTags ?? values;
          }
          setWalkTags(values);
          setCurrentWalkTagsValue(undefined);
          setCurrentWalkTagsDisplayValue("");
        }}
        currentFieldValue={currentWalkTagsValue}
        label={"Walk tags"}
        items={WalkTags}
        hasError={errors?.WalkTags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("WalkTags", currentWalkTagsValue)
        }
        errorMessage={errors?.WalkTags?.errorMessage}
        getBadgeText={getDisplayValue.WalkTags}
        setFieldValue={(model) => {
          setCurrentWalkTagsDisplayValue(
            model ? getDisplayValue.WalkTags(model) : ""
          );
          setCurrentWalkTagsValue(model);
        }}
        inputFieldRef={WalkTagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Walk tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search WalkTag"
          value={currentWalkTagsDisplayValue}
          options={walkTagRecords
            .filter((r) => !WalkTagsIdSet.has(getIDValue.WalkTags?.(r)))
            .map((r) => ({
              id: getIDValue.WalkTags?.(r),
              label: getDisplayValue.WalkTags?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentWalkTagsValue(
              walkTagRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentWalkTagsDisplayValue(label);
            runValidationTasks("WalkTags", label);
          }}
          onClear={() => {
            setCurrentWalkTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.WalkTags?.hasError) {
              runValidationTasks("WalkTags", value);
            }
            setCurrentWalkTagsDisplayValue(value);
            setCurrentWalkTagsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("WalkTags", currentWalkTagsDisplayValue)
          }
          errorMessage={errors.WalkTags?.errorMessage}
          hasError={errors.WalkTags?.hasError}
          ref={WalkTagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "WalkTags")}
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
          isDisabled={!(idProp || walkModelProp)}
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
              !(idProp || walkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
