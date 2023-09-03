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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Step, TaskSet as TaskSet0, Walk } from "../models";
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
export default function StepCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    walkID: undefined,
    TaskSet: undefined,
    name: "",
    description: "",
    videoLink: "",
    referenceLinks: [],
    sequence: "",
    type: "",
  };
  const [walkID, setWalkID] = React.useState(initialValues.walkID);
  const [TaskSet, setTaskSet] = React.useState(initialValues.TaskSet);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [videoLink, setVideoLink] = React.useState(initialValues.videoLink);
  const [referenceLinks, setReferenceLinks] = React.useState(
    initialValues.referenceLinks
  );
  const [sequence, setSequence] = React.useState(initialValues.sequence);
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWalkID(initialValues.walkID);
    setCurrentWalkIDValue(undefined);
    setCurrentWalkIDDisplayValue("");
    setTaskSet(initialValues.TaskSet);
    setCurrentTaskSetValue(undefined);
    setCurrentTaskSetDisplayValue("");
    setName(initialValues.name);
    setDescription(initialValues.description);
    setVideoLink(initialValues.videoLink);
    setReferenceLinks(initialValues.referenceLinks);
    setCurrentReferenceLinksValue("");
    setSequence(initialValues.sequence);
    setType(initialValues.type);
    setErrors({});
  };
  const [currentWalkIDDisplayValue, setCurrentWalkIDDisplayValue] =
    React.useState("");
  const [currentWalkIDValue, setCurrentWalkIDValue] = React.useState(undefined);
  const walkIDRef = React.createRef();
  const [currentTaskSetDisplayValue, setCurrentTaskSetDisplayValue] =
    React.useState("");
  const [currentTaskSetValue, setCurrentTaskSetValue] =
    React.useState(undefined);
  const TaskSetRef = React.createRef();
  const [currentReferenceLinksValue, setCurrentReferenceLinksValue] =
    React.useState("");
  const referenceLinksRef = React.createRef();
  const getIDValue = {
    TaskSet: (r) => JSON.stringify({ id: r?.id }),
  };
  const TaskSetIdSet = new Set(
    Array.isArray(TaskSet)
      ? TaskSet.map((r) => getIDValue.TaskSet?.(r))
      : getIDValue.TaskSet?.(TaskSet)
  );
  const walkRecords = useDataStoreBinding({
    type: "collection",
    model: Walk,
  }).items;
  const taskSetRecords = useDataStoreBinding({
    type: "collection",
    model: TaskSet0,
  }).items;
  const getDisplayValue = {
    walkID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    TaskSet: (r) => r?.id,
  };
  const validations = {
    walkID: [{ type: "Required" }],
    TaskSet: [],
    name: [{ type: "Required" }],
    description: [],
    videoLink: [{ type: "URL" }],
    referenceLinks: [{ type: "URL" }],
    sequence: [{ type: "Required" }],
    type: [{ type: "Required" }],
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
          walkID,
          TaskSet,
          name,
          description,
          videoLink,
          referenceLinks,
          sequence,
          type,
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
          await DataStore.save(new Step(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StepCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              walkID: value,
              TaskSet,
              name,
              description,
              videoLink,
              referenceLinks,
              sequence,
              type,
            };
            const result = onChange(modelFields);
            value = result?.walkID ?? value;
          }
          setWalkID(value);
          setCurrentWalkIDValue(undefined);
        }}
        currentFieldValue={currentWalkIDValue}
        label={"Walk id"}
        items={walkID ? [walkID] : []}
        hasError={errors?.walkID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("walkID", currentWalkIDValue)
        }
        errorMessage={errors?.walkID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.walkID(walkRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentWalkIDDisplayValue(
            value
              ? getDisplayValue.walkID(walkRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentWalkIDValue(value);
        }}
        inputFieldRef={walkIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Walk id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Walk"
          value={currentWalkIDDisplayValue}
          options={walkRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.walkID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentWalkIDValue(id);
            setCurrentWalkIDDisplayValue(label);
            runValidationTasks("walkID", label);
          }}
          onClear={() => {
            setCurrentWalkIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.walkID?.hasError) {
              runValidationTasks("walkID", value);
            }
            setCurrentWalkIDDisplayValue(value);
            setCurrentWalkIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("walkID", currentWalkIDValue)}
          errorMessage={errors.walkID?.errorMessage}
          hasError={errors.walkID?.hasError}
          ref={walkIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "walkID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              walkID,
              TaskSet: value,
              name,
              description,
              videoLink,
              referenceLinks,
              sequence,
              type,
            };
            const result = onChange(modelFields);
            value = result?.TaskSet ?? value;
          }
          setTaskSet(value);
          setCurrentTaskSetValue(undefined);
          setCurrentTaskSetDisplayValue("");
        }}
        currentFieldValue={currentTaskSetValue}
        label={"Task set"}
        items={TaskSet ? [TaskSet] : []}
        hasError={errors?.TaskSet?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("TaskSet", currentTaskSetValue)
        }
        errorMessage={errors?.TaskSet?.errorMessage}
        getBadgeText={getDisplayValue.TaskSet}
        setFieldValue={(model) => {
          setCurrentTaskSetDisplayValue(
            model ? getDisplayValue.TaskSet(model) : ""
          );
          setCurrentTaskSetValue(model);
        }}
        inputFieldRef={TaskSetRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task set"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search TaskSet"
          value={currentTaskSetDisplayValue}
          options={taskSetRecords
            .filter((r) => !TaskSetIdSet.has(getIDValue.TaskSet?.(r)))
            .map((r) => ({
              id: getIDValue.TaskSet?.(r),
              label: getDisplayValue.TaskSet?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskSetValue(
              taskSetRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskSetDisplayValue(label);
            runValidationTasks("TaskSet", label);
          }}
          onClear={() => {
            setCurrentTaskSetDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TaskSet?.hasError) {
              runValidationTasks("TaskSet", value);
            }
            setCurrentTaskSetDisplayValue(value);
            setCurrentTaskSetValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("TaskSet", currentTaskSetDisplayValue)
          }
          errorMessage={errors.TaskSet?.errorMessage}
          hasError={errors.TaskSet?.hasError}
          ref={TaskSetRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TaskSet")}
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
              walkID,
              TaskSet,
              name: value,
              description,
              videoLink,
              referenceLinks,
              sequence,
              type,
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
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walkID,
              TaskSet,
              name,
              description: value,
              videoLink,
              referenceLinks,
              sequence,
              type,
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
              walkID,
              TaskSet,
              name,
              description,
              videoLink: value,
              referenceLinks,
              sequence,
              type,
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
              walkID,
              TaskSet,
              name,
              description,
              videoLink,
              referenceLinks: values,
              sequence,
              type,
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
      <TextField
        label="Sequence"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sequence}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              walkID,
              TaskSet,
              name,
              description,
              videoLink,
              referenceLinks,
              sequence: value,
              type,
            };
            const result = onChange(modelFields);
            value = result?.sequence ?? value;
          }
          if (errors.sequence?.hasError) {
            runValidationTasks("sequence", value);
          }
          setSequence(value);
        }}
        onBlur={() => runValidationTasks("sequence", sequence)}
        errorMessage={errors.sequence?.errorMessage}
        hasError={errors.sequence?.hasError}
        {...getOverrideProps(overrides, "sequence")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              walkID,
              TaskSet,
              name,
              description,
              videoLink,
              referenceLinks,
              sequence,
              type: value,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Goal"
          value="GOAL"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Achievement"
          value="ACHIEVEMENT"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Learn"
          value="LEARN"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Work"
          value="WORK"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
