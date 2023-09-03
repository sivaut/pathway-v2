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
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { TaskSet, TaskItem } from "../models";
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
export default function TaskSetUpdateForm(props) {
  const {
    id: idProp,
    taskSet: taskSetModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TaskItems: [],
  };
  const [TaskItems, setTaskItems] = React.useState(initialValues.TaskItems);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskSetRecord
      ? { ...initialValues, ...taskSetRecord, TaskItems: linkedTaskItems }
      : initialValues;
    setTaskItems(cleanValues.TaskItems ?? []);
    setCurrentTaskItemsValue(undefined);
    setCurrentTaskItemsDisplayValue("");
    setErrors({});
  };
  const [taskSetRecord, setTaskSetRecord] = React.useState(taskSetModelProp);
  const [linkedTaskItems, setLinkedTaskItems] = React.useState([]);
  const canUnlinkTaskItems = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TaskSet, idProp)
        : taskSetModelProp;
      setTaskSetRecord(record);
      const linkedTaskItems = record ? await record.TaskItems.toArray() : [];
      setLinkedTaskItems(linkedTaskItems);
    };
    queryData();
  }, [idProp, taskSetModelProp]);
  React.useEffect(resetStateValues, [taskSetRecord, linkedTaskItems]);
  const [currentTaskItemsDisplayValue, setCurrentTaskItemsDisplayValue] =
    React.useState("");
  const [currentTaskItemsValue, setCurrentTaskItemsValue] =
    React.useState(undefined);
  const TaskItemsRef = React.createRef();
  const getIDValue = {
    TaskItems: (r) => JSON.stringify({ id: r?.id }),
  };
  const TaskItemsIdSet = new Set(
    Array.isArray(TaskItems)
      ? TaskItems.map((r) => getIDValue.TaskItems?.(r))
      : getIDValue.TaskItems?.(TaskItems)
  );
  const taskItemRecords = useDataStoreBinding({
    type: "collection",
    model: TaskItem,
  }).items;
  const getDisplayValue = {
    TaskItems: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    TaskItems: [],
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
          TaskItems,
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
          const taskItemsToLink = [];
          const taskItemsToUnLink = [];
          const taskItemsSet = new Set();
          const linkedTaskItemsSet = new Set();
          TaskItems.forEach((r) => taskItemsSet.add(getIDValue.TaskItems?.(r)));
          linkedTaskItems.forEach((r) =>
            linkedTaskItemsSet.add(getIDValue.TaskItems?.(r))
          );
          linkedTaskItems.forEach((r) => {
            if (!taskItemsSet.has(getIDValue.TaskItems?.(r))) {
              taskItemsToUnLink.push(r);
            }
          });
          TaskItems.forEach((r) => {
            if (!linkedTaskItemsSet.has(getIDValue.TaskItems?.(r))) {
              taskItemsToLink.push(r);
            }
          });
          taskItemsToUnLink.forEach((original) => {
            if (!canUnlinkTaskItems) {
              throw Error(
                `TaskItem ${original.id} cannot be unlinked from TaskSet because tasksetID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                TaskItem.copyOf(original, (updated) => {
                  updated.tasksetID = null;
                })
              )
            );
          });
          taskItemsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                TaskItem.copyOf(original, (updated) => {
                  updated.tasksetID = taskSetRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {};
          promises.push(
            DataStore.save(
              TaskSet.copyOf(taskSetRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TaskSetUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              TaskItems: values,
            };
            const result = onChange(modelFields);
            values = result?.TaskItems ?? values;
          }
          setTaskItems(values);
          setCurrentTaskItemsValue(undefined);
          setCurrentTaskItemsDisplayValue("");
        }}
        currentFieldValue={currentTaskItemsValue}
        label={"Task items"}
        items={TaskItems}
        hasError={errors?.TaskItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("TaskItems", currentTaskItemsValue)
        }
        errorMessage={errors?.TaskItems?.errorMessage}
        getBadgeText={getDisplayValue.TaskItems}
        setFieldValue={(model) => {
          setCurrentTaskItemsDisplayValue(
            model ? getDisplayValue.TaskItems(model) : ""
          );
          setCurrentTaskItemsValue(model);
        }}
        inputFieldRef={TaskItemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search TaskItem"
          value={currentTaskItemsDisplayValue}
          options={taskItemRecords
            .filter((r) => !TaskItemsIdSet.has(getIDValue.TaskItems?.(r)))
            .map((r) => ({
              id: getIDValue.TaskItems?.(r),
              label: getDisplayValue.TaskItems?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskItemsValue(
              taskItemRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskItemsDisplayValue(label);
            runValidationTasks("TaskItems", label);
          }}
          onClear={() => {
            setCurrentTaskItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TaskItems?.hasError) {
              runValidationTasks("TaskItems", value);
            }
            setCurrentTaskItemsDisplayValue(value);
            setCurrentTaskItemsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("TaskItems", currentTaskItemsDisplayValue)
          }
          errorMessage={errors.TaskItems?.errorMessage}
          hasError={errors.TaskItems?.hasError}
          ref={TaskItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TaskItems")}
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
          isDisabled={!(idProp || taskSetModelProp)}
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
              !(idProp || taskSetModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
