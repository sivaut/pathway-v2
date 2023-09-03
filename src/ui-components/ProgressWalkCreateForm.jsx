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
import { ProgressWalk, WalkTag, ProgressStep, ProgressPath } from "../models";
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
export default function ProgressWalkCreateForm(props) {
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
    progresspathID: undefined,
    definedWalk: undefined,
    hasProgressSteps: [],
    totalSteps: "",
    doneSteps: "",
    lastActedOn: "",
  };
  const [progresspathID, setProgresspathID] = React.useState(
    initialValues.progresspathID
  );
  const [definedWalk, setDefinedWalk] = React.useState(
    initialValues.definedWalk
  );
  const [hasProgressSteps, setHasProgressSteps] = React.useState(
    initialValues.hasProgressSteps
  );
  const [totalSteps, setTotalSteps] = React.useState(initialValues.totalSteps);
  const [doneSteps, setDoneSteps] = React.useState(initialValues.doneSteps);
  const [lastActedOn, setLastActedOn] = React.useState(
    initialValues.lastActedOn
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProgresspathID(initialValues.progresspathID);
    setCurrentProgresspathIDValue(undefined);
    setCurrentProgresspathIDDisplayValue("");
    setDefinedWalk(initialValues.definedWalk);
    setCurrentDefinedWalkValue(undefined);
    setCurrentDefinedWalkDisplayValue("");
    setHasProgressSteps(initialValues.hasProgressSteps);
    setCurrentHasProgressStepsValue(undefined);
    setCurrentHasProgressStepsDisplayValue("");
    setTotalSteps(initialValues.totalSteps);
    setDoneSteps(initialValues.doneSteps);
    setLastActedOn(initialValues.lastActedOn);
    setErrors({});
  };
  const [
    currentProgresspathIDDisplayValue,
    setCurrentProgresspathIDDisplayValue,
  ] = React.useState("");
  const [currentProgresspathIDValue, setCurrentProgresspathIDValue] =
    React.useState(undefined);
  const progresspathIDRef = React.createRef();
  const [currentDefinedWalkDisplayValue, setCurrentDefinedWalkDisplayValue] =
    React.useState("");
  const [currentDefinedWalkValue, setCurrentDefinedWalkValue] =
    React.useState(undefined);
  const definedWalkRef = React.createRef();
  const [
    currentHasProgressStepsDisplayValue,
    setCurrentHasProgressStepsDisplayValue,
  ] = React.useState("");
  const [currentHasProgressStepsValue, setCurrentHasProgressStepsValue] =
    React.useState(undefined);
  const hasProgressStepsRef = React.createRef();
  const getIDValue = {
    definedWalk: (r) => JSON.stringify({ id: r?.id }),
    hasProgressSteps: (r) => JSON.stringify({ id: r?.id }),
  };
  const definedWalkIdSet = new Set(
    Array.isArray(definedWalk)
      ? definedWalk.map((r) => getIDValue.definedWalk?.(r))
      : getIDValue.definedWalk?.(definedWalk)
  );
  const hasProgressStepsIdSet = new Set(
    Array.isArray(hasProgressSteps)
      ? hasProgressSteps.map((r) => getIDValue.hasProgressSteps?.(r))
      : getIDValue.hasProgressSteps?.(hasProgressSteps)
  );
  const progressPathRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressPath,
  }).items;
  const walkTagRecords = useDataStoreBinding({
    type: "collection",
    model: WalkTag,
  }).items;
  const progressStepRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressStep,
  }).items;
  const getDisplayValue = {
    progresspathID: (r) =>
      `${r?.totalWalks ? r?.totalWalks + " - " : ""}${r?.id}`,
    definedWalk: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    hasProgressSteps: (r) => `${r?.status ? r?.status + " - " : ""}${r?.id}`,
  };
  const validations = {
    progresspathID: [{ type: "Required" }],
    definedWalk: [],
    hasProgressSteps: [],
    totalSteps: [],
    doneSteps: [],
    lastActedOn: [],
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
          progresspathID,
          definedWalk,
          hasProgressSteps,
          totalSteps,
          doneSteps,
          lastActedOn,
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
          const modelFieldsToSave = {
            progresspathID: modelFields.progresspathID,
            definedWalk: modelFields.definedWalk,
            totalSteps: modelFields.totalSteps,
            doneSteps: modelFields.doneSteps,
            lastActedOn: modelFields.lastActedOn,
          };
          const progressWalk = await DataStore.save(
            new ProgressWalk(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...hasProgressSteps.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  ProgressStep.copyOf(original, (updated) => {
                    updated.progresswalkID = progressWalk.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ProgressWalkCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              progresspathID: value,
              definedWalk,
              hasProgressSteps,
              totalSteps,
              doneSteps,
              lastActedOn,
            };
            const result = onChange(modelFields);
            value = result?.progresspathID ?? value;
          }
          setProgresspathID(value);
          setCurrentProgresspathIDValue(undefined);
        }}
        currentFieldValue={currentProgresspathIDValue}
        label={"Progresspath id"}
        items={progresspathID ? [progresspathID] : []}
        hasError={errors?.progresspathID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("progresspathID", currentProgresspathIDValue)
        }
        errorMessage={errors?.progresspathID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.progresspathID(
                progressPathRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProgresspathIDDisplayValue(
            value
              ? getDisplayValue.progresspathID(
                  progressPathRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProgresspathIDValue(value);
        }}
        inputFieldRef={progresspathIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Progresspath id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ProgressPath"
          value={currentProgresspathIDDisplayValue}
          options={progressPathRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.progresspathID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProgresspathIDValue(id);
            setCurrentProgresspathIDDisplayValue(label);
            runValidationTasks("progresspathID", label);
          }}
          onClear={() => {
            setCurrentProgresspathIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.progresspathID?.hasError) {
              runValidationTasks("progresspathID", value);
            }
            setCurrentProgresspathIDDisplayValue(value);
            setCurrentProgresspathIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("progresspathID", currentProgresspathIDValue)
          }
          errorMessage={errors.progresspathID?.errorMessage}
          hasError={errors.progresspathID?.hasError}
          ref={progresspathIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "progresspathID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              progresspathID,
              definedWalk: value,
              hasProgressSteps,
              totalSteps,
              doneSteps,
              lastActedOn,
            };
            const result = onChange(modelFields);
            value = result?.definedWalk ?? value;
          }
          setDefinedWalk(value);
          setCurrentDefinedWalkValue(undefined);
          setCurrentDefinedWalkDisplayValue("");
        }}
        currentFieldValue={currentDefinedWalkValue}
        label={"Defined walk"}
        items={definedWalk ? [definedWalk] : []}
        hasError={errors?.definedWalk?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("definedWalk", currentDefinedWalkValue)
        }
        errorMessage={errors?.definedWalk?.errorMessage}
        getBadgeText={getDisplayValue.definedWalk}
        setFieldValue={(model) => {
          setCurrentDefinedWalkDisplayValue(
            model ? getDisplayValue.definedWalk(model) : ""
          );
          setCurrentDefinedWalkValue(model);
        }}
        inputFieldRef={definedWalkRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Defined walk"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search WalkTag"
          value={currentDefinedWalkDisplayValue}
          options={walkTagRecords
            .filter((r) => !definedWalkIdSet.has(getIDValue.definedWalk?.(r)))
            .map((r) => ({
              id: getIDValue.definedWalk?.(r),
              label: getDisplayValue.definedWalk?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentDefinedWalkValue(
              walkTagRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDefinedWalkDisplayValue(label);
            runValidationTasks("definedWalk", label);
          }}
          onClear={() => {
            setCurrentDefinedWalkDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.definedWalk?.hasError) {
              runValidationTasks("definedWalk", value);
            }
            setCurrentDefinedWalkDisplayValue(value);
            setCurrentDefinedWalkValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("definedWalk", currentDefinedWalkDisplayValue)
          }
          errorMessage={errors.definedWalk?.errorMessage}
          hasError={errors.definedWalk?.hasError}
          ref={definedWalkRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "definedWalk")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              progresspathID,
              definedWalk,
              hasProgressSteps: values,
              totalSteps,
              doneSteps,
              lastActedOn,
            };
            const result = onChange(modelFields);
            values = result?.hasProgressSteps ?? values;
          }
          setHasProgressSteps(values);
          setCurrentHasProgressStepsValue(undefined);
          setCurrentHasProgressStepsDisplayValue("");
        }}
        currentFieldValue={currentHasProgressStepsValue}
        label={"Has progress steps"}
        items={hasProgressSteps}
        hasError={errors?.hasProgressSteps?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "hasProgressSteps",
            currentHasProgressStepsValue
          )
        }
        errorMessage={errors?.hasProgressSteps?.errorMessage}
        getBadgeText={getDisplayValue.hasProgressSteps}
        setFieldValue={(model) => {
          setCurrentHasProgressStepsDisplayValue(
            model ? getDisplayValue.hasProgressSteps(model) : ""
          );
          setCurrentHasProgressStepsValue(model);
        }}
        inputFieldRef={hasProgressStepsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Has progress steps"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProgressStep"
          value={currentHasProgressStepsDisplayValue}
          options={progressStepRecords
            .filter(
              (r) =>
                !hasProgressStepsIdSet.has(getIDValue.hasProgressSteps?.(r))
            )
            .map((r) => ({
              id: getIDValue.hasProgressSteps?.(r),
              label: getDisplayValue.hasProgressSteps?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentHasProgressStepsValue(
              progressStepRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentHasProgressStepsDisplayValue(label);
            runValidationTasks("hasProgressSteps", label);
          }}
          onClear={() => {
            setCurrentHasProgressStepsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.hasProgressSteps?.hasError) {
              runValidationTasks("hasProgressSteps", value);
            }
            setCurrentHasProgressStepsDisplayValue(value);
            setCurrentHasProgressStepsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "hasProgressSteps",
              currentHasProgressStepsDisplayValue
            )
          }
          errorMessage={errors.hasProgressSteps?.errorMessage}
          hasError={errors.hasProgressSteps?.hasError}
          ref={hasProgressStepsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "hasProgressSteps")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Total steps"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalSteps}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              progresspathID,
              definedWalk,
              hasProgressSteps,
              totalSteps: value,
              doneSteps,
              lastActedOn,
            };
            const result = onChange(modelFields);
            value = result?.totalSteps ?? value;
          }
          if (errors.totalSteps?.hasError) {
            runValidationTasks("totalSteps", value);
          }
          setTotalSteps(value);
        }}
        onBlur={() => runValidationTasks("totalSteps", totalSteps)}
        errorMessage={errors.totalSteps?.errorMessage}
        hasError={errors.totalSteps?.hasError}
        {...getOverrideProps(overrides, "totalSteps")}
      ></TextField>
      <TextField
        label="Done steps"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={doneSteps}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              progresspathID,
              definedWalk,
              hasProgressSteps,
              totalSteps,
              doneSteps: value,
              lastActedOn,
            };
            const result = onChange(modelFields);
            value = result?.doneSteps ?? value;
          }
          if (errors.doneSteps?.hasError) {
            runValidationTasks("doneSteps", value);
          }
          setDoneSteps(value);
        }}
        onBlur={() => runValidationTasks("doneSteps", doneSteps)}
        errorMessage={errors.doneSteps?.errorMessage}
        hasError={errors.doneSteps?.hasError}
        {...getOverrideProps(overrides, "doneSteps")}
      ></TextField>
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
              progresspathID,
              definedWalk,
              hasProgressSteps,
              totalSteps,
              doneSteps,
              lastActedOn: value,
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
