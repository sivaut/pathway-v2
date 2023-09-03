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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { ProgressStep, Step, TaskItemExecution, ProgressWalk } from "../models";
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
export default function ProgressStepUpdateForm(props) {
  const {
    id: idProp,
    progressStep: progressStepModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: false,
    definedStep: undefined,
    progresswalkID: undefined,
    lastActedOn: "",
    TaskItemExecutions: [],
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [definedStep, setDefinedStep] = React.useState(
    initialValues.definedStep
  );
  const [progresswalkID, setProgresswalkID] = React.useState(
    initialValues.progresswalkID
  );
  const [lastActedOn, setLastActedOn] = React.useState(
    initialValues.lastActedOn
  );
  const [TaskItemExecutions, setTaskItemExecutions] = React.useState(
    initialValues.TaskItemExecutions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = progressStepRecord
      ? {
          ...initialValues,
          ...progressStepRecord,
          definedStep,
          progresswalkID,
          TaskItemExecutions: linkedTaskItemExecutions,
        }
      : initialValues;
    setStatus(cleanValues.status);
    setDefinedStep(cleanValues.definedStep);
    setCurrentDefinedStepValue(undefined);
    setCurrentDefinedStepDisplayValue("");
    setProgresswalkID(cleanValues.progresswalkID);
    setCurrentProgresswalkIDValue(undefined);
    setCurrentProgresswalkIDDisplayValue("");
    setLastActedOn(cleanValues.lastActedOn);
    setTaskItemExecutions(cleanValues.TaskItemExecutions ?? []);
    setCurrentTaskItemExecutionsValue(undefined);
    setCurrentTaskItemExecutionsDisplayValue("");
    setErrors({});
  };
  const [progressStepRecord, setProgressStepRecord] = React.useState(
    progressStepModelProp
  );
  const [linkedTaskItemExecutions, setLinkedTaskItemExecutions] =
    React.useState([]);
  const canUnlinkTaskItemExecutions = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProgressStep, idProp)
        : progressStepModelProp;
      setProgressStepRecord(record);
      const definedStepRecord = record ? await record.definedStep : undefined;
      setDefinedStep(definedStepRecord);
      const progresswalkIDRecord = record
        ? await record.progresswalkID
        : undefined;
      setProgresswalkID(progresswalkIDRecord);
      const linkedTaskItemExecutions = record
        ? await record.TaskItemExecutions.toArray()
        : [];
      setLinkedTaskItemExecutions(linkedTaskItemExecutions);
    };
    queryData();
  }, [idProp, progressStepModelProp]);
  React.useEffect(resetStateValues, [
    progressStepRecord,
    definedStep,
    progresswalkID,
    linkedTaskItemExecutions,
  ]);
  const [currentDefinedStepDisplayValue, setCurrentDefinedStepDisplayValue] =
    React.useState("");
  const [currentDefinedStepValue, setCurrentDefinedStepValue] =
    React.useState(undefined);
  const definedStepRef = React.createRef();
  const [
    currentProgresswalkIDDisplayValue,
    setCurrentProgresswalkIDDisplayValue,
  ] = React.useState("");
  const [currentProgresswalkIDValue, setCurrentProgresswalkIDValue] =
    React.useState(undefined);
  const progresswalkIDRef = React.createRef();
  const [
    currentTaskItemExecutionsDisplayValue,
    setCurrentTaskItemExecutionsDisplayValue,
  ] = React.useState("");
  const [currentTaskItemExecutionsValue, setCurrentTaskItemExecutionsValue] =
    React.useState(undefined);
  const TaskItemExecutionsRef = React.createRef();
  const getIDValue = {
    definedStep: (r) => JSON.stringify({ id: r?.id }),
    TaskItemExecutions: (r) => JSON.stringify({ id: r?.id }),
  };
  const definedStepIdSet = new Set(
    Array.isArray(definedStep)
      ? definedStep.map((r) => getIDValue.definedStep?.(r))
      : getIDValue.definedStep?.(definedStep)
  );
  const TaskItemExecutionsIdSet = new Set(
    Array.isArray(TaskItemExecutions)
      ? TaskItemExecutions.map((r) => getIDValue.TaskItemExecutions?.(r))
      : getIDValue.TaskItemExecutions?.(TaskItemExecutions)
  );
  const stepRecords = useDataStoreBinding({
    type: "collection",
    model: Step,
  }).items;
  const progressWalkRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressWalk,
  }).items;
  const taskItemExecutionRecords = useDataStoreBinding({
    type: "collection",
    model: TaskItemExecution,
  }).items;
  const getDisplayValue = {
    definedStep: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    progresswalkID: (r) =>
      `${r?.totalSteps ? r?.totalSteps + " - " : ""}${r?.id}`,
    TaskItemExecutions: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    status: [],
    definedStep: [],
    progresswalkID: [{ type: "Required" }],
    lastActedOn: [],
    TaskItemExecutions: [],
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
          status,
          definedStep,
          progresswalkID,
          lastActedOn,
          TaskItemExecutions,
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
          const taskItemExecutionsToLink = [];
          const taskItemExecutionsToUnLink = [];
          const taskItemExecutionsSet = new Set();
          const linkedTaskItemExecutionsSet = new Set();
          TaskItemExecutions.forEach((r) =>
            taskItemExecutionsSet.add(getIDValue.TaskItemExecutions?.(r))
          );
          linkedTaskItemExecutions.forEach((r) =>
            linkedTaskItemExecutionsSet.add(getIDValue.TaskItemExecutions?.(r))
          );
          linkedTaskItemExecutions.forEach((r) => {
            if (
              !taskItemExecutionsSet.has(getIDValue.TaskItemExecutions?.(r))
            ) {
              taskItemExecutionsToUnLink.push(r);
            }
          });
          TaskItemExecutions.forEach((r) => {
            if (
              !linkedTaskItemExecutionsSet.has(
                getIDValue.TaskItemExecutions?.(r)
              )
            ) {
              taskItemExecutionsToLink.push(r);
            }
          });
          taskItemExecutionsToUnLink.forEach((original) => {
            if (!canUnlinkTaskItemExecutions) {
              throw Error(
                `TaskItemExecution ${original.id} cannot be unlinked from ProgressStep because progressstepID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                TaskItemExecution.copyOf(original, (updated) => {
                  updated.progressstepID = null;
                })
              )
            );
          });
          taskItemExecutionsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                TaskItemExecution.copyOf(original, (updated) => {
                  updated.progressstepID = progressStepRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            status: modelFields.status,
            definedStep: modelFields.definedStep,
            progresswalkID: modelFields.progresswalkID,
            lastActedOn: modelFields.lastActedOn,
          };
          promises.push(
            DataStore.save(
              ProgressStep.copyOf(progressStepRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.definedStep) {
                  updated.progressStepDefinedStepId = undefined;
                }
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
      {...getOverrideProps(overrides, "ProgressStepUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              status: value,
              definedStep,
              progresswalkID,
              lastActedOn,
              TaskItemExecutions,
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
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              status,
              definedStep: value,
              progresswalkID,
              lastActedOn,
              TaskItemExecutions,
            };
            const result = onChange(modelFields);
            value = result?.definedStep ?? value;
          }
          setDefinedStep(value);
          setCurrentDefinedStepValue(undefined);
          setCurrentDefinedStepDisplayValue("");
        }}
        currentFieldValue={currentDefinedStepValue}
        label={"Defined step"}
        items={definedStep ? [definedStep] : []}
        hasError={errors?.definedStep?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("definedStep", currentDefinedStepValue)
        }
        errorMessage={errors?.definedStep?.errorMessage}
        getBadgeText={getDisplayValue.definedStep}
        setFieldValue={(model) => {
          setCurrentDefinedStepDisplayValue(
            model ? getDisplayValue.definedStep(model) : ""
          );
          setCurrentDefinedStepValue(model);
        }}
        inputFieldRef={definedStepRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Defined step"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Step"
          value={currentDefinedStepDisplayValue}
          options={stepRecords
            .filter((r) => !definedStepIdSet.has(getIDValue.definedStep?.(r)))
            .map((r) => ({
              id: getIDValue.definedStep?.(r),
              label: getDisplayValue.definedStep?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentDefinedStepValue(
              stepRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDefinedStepDisplayValue(label);
            runValidationTasks("definedStep", label);
          }}
          onClear={() => {
            setCurrentDefinedStepDisplayValue("");
          }}
          defaultValue={definedStep}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.definedStep?.hasError) {
              runValidationTasks("definedStep", value);
            }
            setCurrentDefinedStepDisplayValue(value);
            setCurrentDefinedStepValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("definedStep", currentDefinedStepDisplayValue)
          }
          errorMessage={errors.definedStep?.errorMessage}
          hasError={errors.definedStep?.hasError}
          ref={definedStepRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "definedStep")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              status,
              definedStep,
              progresswalkID: value,
              lastActedOn,
              TaskItemExecutions,
            };
            const result = onChange(modelFields);
            value = result?.progresswalkID ?? value;
          }
          setProgresswalkID(value);
          setCurrentProgresswalkIDValue(undefined);
        }}
        currentFieldValue={currentProgresswalkIDValue}
        label={"Progresswalk id"}
        items={progresswalkID ? [progresswalkID] : []}
        hasError={errors?.progresswalkID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("progresswalkID", currentProgresswalkIDValue)
        }
        errorMessage={errors?.progresswalkID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.progresswalkID(
                progressWalkRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProgresswalkIDDisplayValue(
            value
              ? getDisplayValue.progresswalkID(
                  progressWalkRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProgresswalkIDValue(value);
        }}
        inputFieldRef={progresswalkIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Progresswalk id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ProgressWalk"
          value={currentProgresswalkIDDisplayValue}
          options={progressWalkRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.progresswalkID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProgresswalkIDValue(id);
            setCurrentProgresswalkIDDisplayValue(label);
            runValidationTasks("progresswalkID", label);
          }}
          onClear={() => {
            setCurrentProgresswalkIDDisplayValue("");
          }}
          defaultValue={progresswalkID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.progresswalkID?.hasError) {
              runValidationTasks("progresswalkID", value);
            }
            setCurrentProgresswalkIDDisplayValue(value);
            setCurrentProgresswalkIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("progresswalkID", currentProgresswalkIDValue)
          }
          errorMessage={errors.progresswalkID?.errorMessage}
          hasError={errors.progresswalkID?.hasError}
          ref={progresswalkIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "progresswalkID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Last acted on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lastActedOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              definedStep,
              progresswalkID,
              lastActedOn: value,
              TaskItemExecutions,
            };
            const result = onChange(modelFields);
            value = result?.lastActedOn ?? value;
          }
          if (errors.lastActedOn?.hasError) {
            runValidationTasks("lastActedOn", value);
          }
          setLastActedOn(value);
        }}
        onBlur={() => runValidationTasks("lastActedOn", lastActedOn)}
        errorMessage={errors.lastActedOn?.errorMessage}
        hasError={errors.lastActedOn?.hasError}
        {...getOverrideProps(overrides, "lastActedOn")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              status,
              definedStep,
              progresswalkID,
              lastActedOn,
              TaskItemExecutions: values,
            };
            const result = onChange(modelFields);
            values = result?.TaskItemExecutions ?? values;
          }
          setTaskItemExecutions(values);
          setCurrentTaskItemExecutionsValue(undefined);
          setCurrentTaskItemExecutionsDisplayValue("");
        }}
        currentFieldValue={currentTaskItemExecutionsValue}
        label={"Task item executions"}
        items={TaskItemExecutions}
        hasError={errors?.TaskItemExecutions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "TaskItemExecutions",
            currentTaskItemExecutionsValue
          )
        }
        errorMessage={errors?.TaskItemExecutions?.errorMessage}
        getBadgeText={getDisplayValue.TaskItemExecutions}
        setFieldValue={(model) => {
          setCurrentTaskItemExecutionsDisplayValue(
            model ? getDisplayValue.TaskItemExecutions(model) : ""
          );
          setCurrentTaskItemExecutionsValue(model);
        }}
        inputFieldRef={TaskItemExecutionsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task item executions"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search TaskItemExecution"
          value={currentTaskItemExecutionsDisplayValue}
          options={taskItemExecutionRecords
            .filter(
              (r) =>
                !TaskItemExecutionsIdSet.has(getIDValue.TaskItemExecutions?.(r))
            )
            .map((r) => ({
              id: getIDValue.TaskItemExecutions?.(r),
              label: getDisplayValue.TaskItemExecutions?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTaskItemExecutionsValue(
              taskItemExecutionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskItemExecutionsDisplayValue(label);
            runValidationTasks("TaskItemExecutions", label);
          }}
          onClear={() => {
            setCurrentTaskItemExecutionsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TaskItemExecutions?.hasError) {
              runValidationTasks("TaskItemExecutions", value);
            }
            setCurrentTaskItemExecutionsDisplayValue(value);
            setCurrentTaskItemExecutionsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "TaskItemExecutions",
              currentTaskItemExecutionsDisplayValue
            )
          }
          errorMessage={errors.TaskItemExecutions?.errorMessage}
          hasError={errors.TaskItemExecutions?.hasError}
          ref={TaskItemExecutionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TaskItemExecutions")}
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
          isDisabled={!(idProp || progressStepModelProp)}
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
              !(idProp || progressStepModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
