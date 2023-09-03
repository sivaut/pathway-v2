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
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  TaskItemExecution,
  TaskItem as TaskItem0,
  ProgressStep,
} from "../models";
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
export default function TaskItemExecutionUpdateForm(props) {
  const {
    id: idProp,
    taskItemExecution: taskItemExecutionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TaskItem: undefined,
    type: "",
    status: "",
    progressstepID: undefined,
  };
  const [TaskItem, setTaskItem] = React.useState(initialValues.TaskItem);
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [progressstepID, setProgressstepID] = React.useState(
    initialValues.progressstepID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskItemExecutionRecord
      ? {
          ...initialValues,
          ...taskItemExecutionRecord,
          TaskItem,
          progressstepID,
        }
      : initialValues;
    setTaskItem(cleanValues.TaskItem);
    setCurrentTaskItemValue(undefined);
    setCurrentTaskItemDisplayValue("");
    setType(cleanValues.type);
    setStatus(cleanValues.status);
    setProgressstepID(cleanValues.progressstepID);
    setCurrentProgressstepIDValue(undefined);
    setCurrentProgressstepIDDisplayValue("");
    setErrors({});
  };
  const [taskItemExecutionRecord, setTaskItemExecutionRecord] = React.useState(
    taskItemExecutionModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TaskItemExecution, idProp)
        : taskItemExecutionModelProp;
      setTaskItemExecutionRecord(record);
      const TaskItemRecord = record ? await record.TaskItem : undefined;
      setTaskItem(TaskItemRecord);
      const progressstepIDRecord = record
        ? await record.progressstepID
        : undefined;
      setProgressstepID(progressstepIDRecord);
    };
    queryData();
  }, [idProp, taskItemExecutionModelProp]);
  React.useEffect(resetStateValues, [
    taskItemExecutionRecord,
    TaskItem,
    progressstepID,
  ]);
  const [currentTaskItemDisplayValue, setCurrentTaskItemDisplayValue] =
    React.useState("");
  const [currentTaskItemValue, setCurrentTaskItemValue] =
    React.useState(undefined);
  const TaskItemRef = React.createRef();
  const [
    currentProgressstepIDDisplayValue,
    setCurrentProgressstepIDDisplayValue,
  ] = React.useState("");
  const [currentProgressstepIDValue, setCurrentProgressstepIDValue] =
    React.useState(undefined);
  const progressstepIDRef = React.createRef();
  const getIDValue = {
    TaskItem: (r) => JSON.stringify({ id: r?.id }),
  };
  const TaskItemIdSet = new Set(
    Array.isArray(TaskItem)
      ? TaskItem.map((r) => getIDValue.TaskItem?.(r))
      : getIDValue.TaskItem?.(TaskItem)
  );
  const taskItemRecords = useDataStoreBinding({
    type: "collection",
    model: TaskItem0,
  }).items;
  const progressStepRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressStep,
  }).items;
  const getDisplayValue = {
    TaskItem: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    progressstepID: (r) => `${r?.status ? r?.status + " - " : ""}${r?.id}`,
  };
  const validations = {
    TaskItem: [],
    type: [],
    status: [],
    progressstepID: [{ type: "Required" }],
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
          TaskItem,
          type,
          status,
          progressstepID,
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
          await DataStore.save(
            TaskItemExecution.copyOf(taskItemExecutionRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.TaskItem) {
                updated.taskItemExecutionTaskItemId = undefined;
              }
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TaskItemExecutionUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              TaskItem: value,
              type,
              status,
              progressstepID,
            };
            const result = onChange(modelFields);
            value = result?.TaskItem ?? value;
          }
          setTaskItem(value);
          setCurrentTaskItemValue(undefined);
          setCurrentTaskItemDisplayValue("");
        }}
        currentFieldValue={currentTaskItemValue}
        label={"Task item"}
        items={TaskItem ? [TaskItem] : []}
        hasError={errors?.TaskItem?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("TaskItem", currentTaskItemValue)
        }
        errorMessage={errors?.TaskItem?.errorMessage}
        getBadgeText={getDisplayValue.TaskItem}
        setFieldValue={(model) => {
          setCurrentTaskItemDisplayValue(
            model ? getDisplayValue.TaskItem(model) : ""
          );
          setCurrentTaskItemValue(model);
        }}
        inputFieldRef={TaskItemRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task item"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search TaskItem"
          value={currentTaskItemDisplayValue}
          options={taskItemRecords
            .filter((r) => !TaskItemIdSet.has(getIDValue.TaskItem?.(r)))
            .map((r) => ({
              id: getIDValue.TaskItem?.(r),
              label: getDisplayValue.TaskItem?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskItemValue(
              taskItemRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskItemDisplayValue(label);
            runValidationTasks("TaskItem", label);
          }}
          onClear={() => {
            setCurrentTaskItemDisplayValue("");
          }}
          defaultValue={TaskItem}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TaskItem?.hasError) {
              runValidationTasks("TaskItem", value);
            }
            setCurrentTaskItemDisplayValue(value);
            setCurrentTaskItemValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("TaskItem", currentTaskItemDisplayValue)
          }
          errorMessage={errors.TaskItem?.errorMessage}
          hasError={errors.TaskItem?.hasError}
          ref={TaskItemRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TaskItem")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TaskItem,
              type: value,
              status,
              progressstepID,
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
          children="Standard"
          value="STANDARD"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Personal"
          value="PERSONAL"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TaskItem,
              type,
              status: value,
              progressstepID,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Open"
          value="OPEN"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Done"
          value="DONE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Drop"
          value="DROP"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Snooze"
          value="SNOOZE"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              TaskItem,
              type,
              status,
              progressstepID: value,
            };
            const result = onChange(modelFields);
            value = result?.progressstepID ?? value;
          }
          setProgressstepID(value);
          setCurrentProgressstepIDValue(undefined);
        }}
        currentFieldValue={currentProgressstepIDValue}
        label={"Progressstep id"}
        items={progressstepID ? [progressstepID] : []}
        hasError={errors?.progressstepID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("progressstepID", currentProgressstepIDValue)
        }
        errorMessage={errors?.progressstepID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.progressstepID(
                progressStepRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProgressstepIDDisplayValue(
            value
              ? getDisplayValue.progressstepID(
                  progressStepRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProgressstepIDValue(value);
        }}
        inputFieldRef={progressstepIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Progressstep id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ProgressStep"
          value={currentProgressstepIDDisplayValue}
          options={progressStepRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.progressstepID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProgressstepIDValue(id);
            setCurrentProgressstepIDDisplayValue(label);
            runValidationTasks("progressstepID", label);
          }}
          onClear={() => {
            setCurrentProgressstepIDDisplayValue("");
          }}
          defaultValue={progressstepID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.progressstepID?.hasError) {
              runValidationTasks("progressstepID", value);
            }
            setCurrentProgressstepIDDisplayValue(value);
            setCurrentProgressstepIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("progressstepID", currentProgressstepIDValue)
          }
          errorMessage={errors.progressstepID?.errorMessage}
          hasError={errors.progressstepID?.hasError}
          ref={progressstepIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "progressstepID")}
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
          isDisabled={!(idProp || taskItemExecutionModelProp)}
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
              !(idProp || taskItemExecutionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
