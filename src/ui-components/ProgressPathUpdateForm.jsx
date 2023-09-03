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
import { ProgressPath, PathwayVersion, ProgressWalk } from "../models";
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
export default function ProgressPathUpdateForm(props) {
  const {
    id: idProp,
    progressPath: progressPathModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    definedPathwayVersion: undefined,
    hasProgressWalks: [],
    totalWalks: "",
    doneWalks: "",
    totalSteps: "",
    doneSteps: "",
    lastActedOn: "",
    prefUserName: "",
  };
  const [definedPathwayVersion, setDefinedPathwayVersion] = React.useState(
    initialValues.definedPathwayVersion
  );
  const [hasProgressWalks, setHasProgressWalks] = React.useState(
    initialValues.hasProgressWalks
  );
  const [totalWalks, setTotalWalks] = React.useState(initialValues.totalWalks);
  const [doneWalks, setDoneWalks] = React.useState(initialValues.doneWalks);
  const [totalSteps, setTotalSteps] = React.useState(initialValues.totalSteps);
  const [doneSteps, setDoneSteps] = React.useState(initialValues.doneSteps);
  const [lastActedOn, setLastActedOn] = React.useState(
    initialValues.lastActedOn
  );
  const [prefUserName, setPrefUserName] = React.useState(
    initialValues.prefUserName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = progressPathRecord
      ? {
          ...initialValues,
          ...progressPathRecord,
          definedPathwayVersion,
          hasProgressWalks: linkedHasProgressWalks,
        }
      : initialValues;
    setDefinedPathwayVersion(cleanValues.definedPathwayVersion);
    setCurrentDefinedPathwayVersionValue(undefined);
    setCurrentDefinedPathwayVersionDisplayValue("");
    setHasProgressWalks(cleanValues.hasProgressWalks ?? []);
    setCurrentHasProgressWalksValue(undefined);
    setCurrentHasProgressWalksDisplayValue("");
    setTotalWalks(cleanValues.totalWalks);
    setDoneWalks(cleanValues.doneWalks);
    setTotalSteps(cleanValues.totalSteps);
    setDoneSteps(cleanValues.doneSteps);
    setLastActedOn(cleanValues.lastActedOn);
    setPrefUserName(cleanValues.prefUserName);
    setErrors({});
  };
  const [progressPathRecord, setProgressPathRecord] = React.useState(
    progressPathModelProp
  );
  const [linkedHasProgressWalks, setLinkedHasProgressWalks] = React.useState(
    []
  );
  const canUnlinkHasProgressWalks = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProgressPath, idProp)
        : progressPathModelProp;
      setProgressPathRecord(record);
      const definedPathwayVersionRecord = record
        ? await record.definedPathwayVersion
        : undefined;
      setDefinedPathwayVersion(definedPathwayVersionRecord);
      const linkedHasProgressWalks = record
        ? await record.hasProgressWalks.toArray()
        : [];
      setLinkedHasProgressWalks(linkedHasProgressWalks);
    };
    queryData();
  }, [idProp, progressPathModelProp]);
  React.useEffect(resetStateValues, [
    progressPathRecord,
    definedPathwayVersion,
    linkedHasProgressWalks,
  ]);
  const [
    currentDefinedPathwayVersionDisplayValue,
    setCurrentDefinedPathwayVersionDisplayValue,
  ] = React.useState("");
  const [
    currentDefinedPathwayVersionValue,
    setCurrentDefinedPathwayVersionValue,
  ] = React.useState(undefined);
  const definedPathwayVersionRef = React.createRef();
  const [
    currentHasProgressWalksDisplayValue,
    setCurrentHasProgressWalksDisplayValue,
  ] = React.useState("");
  const [currentHasProgressWalksValue, setCurrentHasProgressWalksValue] =
    React.useState(undefined);
  const hasProgressWalksRef = React.createRef();
  const getIDValue = {
    definedPathwayVersion: (r) => JSON.stringify({ id: r?.id }),
    hasProgressWalks: (r) => JSON.stringify({ id: r?.id }),
  };
  const definedPathwayVersionIdSet = new Set(
    Array.isArray(definedPathwayVersion)
      ? definedPathwayVersion.map((r) => getIDValue.definedPathwayVersion?.(r))
      : getIDValue.definedPathwayVersion?.(definedPathwayVersion)
  );
  const hasProgressWalksIdSet = new Set(
    Array.isArray(hasProgressWalks)
      ? hasProgressWalks.map((r) => getIDValue.hasProgressWalks?.(r))
      : getIDValue.hasProgressWalks?.(hasProgressWalks)
  );
  const pathwayVersionRecords = useDataStoreBinding({
    type: "collection",
    model: PathwayVersion,
  }).items;
  const progressWalkRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressWalk,
  }).items;
  const getDisplayValue = {
    definedPathwayVersion: (r) =>
      `${r?.version ? r?.version + " - " : ""}${r?.id}`,
    hasProgressWalks: (r) =>
      `${r?.totalSteps ? r?.totalSteps + " - " : ""}${r?.id}`,
  };
  const validations = {
    definedPathwayVersion: [],
    hasProgressWalks: [],
    totalWalks: [],
    doneWalks: [],
    totalSteps: [],
    doneSteps: [],
    lastActedOn: [],
    prefUserName: [{ type: "Required" }],
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
          definedPathwayVersion,
          hasProgressWalks,
          totalWalks,
          doneWalks,
          totalSteps,
          doneSteps,
          lastActedOn,
          prefUserName,
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
          const hasProgressWalksToLink = [];
          const hasProgressWalksToUnLink = [];
          const hasProgressWalksSet = new Set();
          const linkedHasProgressWalksSet = new Set();
          hasProgressWalks.forEach((r) =>
            hasProgressWalksSet.add(getIDValue.hasProgressWalks?.(r))
          );
          linkedHasProgressWalks.forEach((r) =>
            linkedHasProgressWalksSet.add(getIDValue.hasProgressWalks?.(r))
          );
          linkedHasProgressWalks.forEach((r) => {
            if (!hasProgressWalksSet.has(getIDValue.hasProgressWalks?.(r))) {
              hasProgressWalksToUnLink.push(r);
            }
          });
          hasProgressWalks.forEach((r) => {
            if (
              !linkedHasProgressWalksSet.has(getIDValue.hasProgressWalks?.(r))
            ) {
              hasProgressWalksToLink.push(r);
            }
          });
          hasProgressWalksToUnLink.forEach((original) => {
            if (!canUnlinkHasProgressWalks) {
              throw Error(
                `ProgressWalk ${original.id} cannot be unlinked from ProgressPath because progresspathID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                ProgressWalk.copyOf(original, (updated) => {
                  updated.progresspathID = null;
                })
              )
            );
          });
          hasProgressWalksToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                ProgressWalk.copyOf(original, (updated) => {
                  updated.progresspathID = progressPathRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            definedPathwayVersion: modelFields.definedPathwayVersion,
            totalWalks: modelFields.totalWalks,
            doneWalks: modelFields.doneWalks,
            totalSteps: modelFields.totalSteps,
            doneSteps: modelFields.doneSteps,
            lastActedOn: modelFields.lastActedOn,
            prefUserName: modelFields.prefUserName,
          };
          promises.push(
            DataStore.save(
              ProgressPath.copyOf(progressPathRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.definedPathwayVersion) {
                  updated.progressPathDefinedPathwayVersionId = undefined;
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
      {...getOverrideProps(overrides, "ProgressPathUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              definedPathwayVersion: value,
              hasProgressWalks,
              totalWalks,
              doneWalks,
              totalSteps,
              doneSteps,
              lastActedOn,
              prefUserName,
            };
            const result = onChange(modelFields);
            value = result?.definedPathwayVersion ?? value;
          }
          setDefinedPathwayVersion(value);
          setCurrentDefinedPathwayVersionValue(undefined);
          setCurrentDefinedPathwayVersionDisplayValue("");
        }}
        currentFieldValue={currentDefinedPathwayVersionValue}
        label={"Defined pathway version"}
        items={definedPathwayVersion ? [definedPathwayVersion] : []}
        hasError={errors?.definedPathwayVersion?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "definedPathwayVersion",
            currentDefinedPathwayVersionValue
          )
        }
        errorMessage={errors?.definedPathwayVersion?.errorMessage}
        getBadgeText={getDisplayValue.definedPathwayVersion}
        setFieldValue={(model) => {
          setCurrentDefinedPathwayVersionDisplayValue(
            model ? getDisplayValue.definedPathwayVersion(model) : ""
          );
          setCurrentDefinedPathwayVersionValue(model);
        }}
        inputFieldRef={definedPathwayVersionRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Defined pathway version"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search PathwayVersion"
          value={currentDefinedPathwayVersionDisplayValue}
          options={pathwayVersionRecords
            .filter(
              (r) =>
                !definedPathwayVersionIdSet.has(
                  getIDValue.definedPathwayVersion?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.definedPathwayVersion?.(r),
              label: getDisplayValue.definedPathwayVersion?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentDefinedPathwayVersionValue(
              pathwayVersionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDefinedPathwayVersionDisplayValue(label);
            runValidationTasks("definedPathwayVersion", label);
          }}
          onClear={() => {
            setCurrentDefinedPathwayVersionDisplayValue("");
          }}
          defaultValue={definedPathwayVersion}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.definedPathwayVersion?.hasError) {
              runValidationTasks("definedPathwayVersion", value);
            }
            setCurrentDefinedPathwayVersionDisplayValue(value);
            setCurrentDefinedPathwayVersionValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "definedPathwayVersion",
              currentDefinedPathwayVersionDisplayValue
            )
          }
          errorMessage={errors.definedPathwayVersion?.errorMessage}
          hasError={errors.definedPathwayVersion?.hasError}
          ref={definedPathwayVersionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "definedPathwayVersion")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              definedPathwayVersion,
              hasProgressWalks: values,
              totalWalks,
              doneWalks,
              totalSteps,
              doneSteps,
              lastActedOn,
              prefUserName,
            };
            const result = onChange(modelFields);
            values = result?.hasProgressWalks ?? values;
          }
          setHasProgressWalks(values);
          setCurrentHasProgressWalksValue(undefined);
          setCurrentHasProgressWalksDisplayValue("");
        }}
        currentFieldValue={currentHasProgressWalksValue}
        label={"Has progress walks"}
        items={hasProgressWalks}
        hasError={errors?.hasProgressWalks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "hasProgressWalks",
            currentHasProgressWalksValue
          )
        }
        errorMessage={errors?.hasProgressWalks?.errorMessage}
        getBadgeText={getDisplayValue.hasProgressWalks}
        setFieldValue={(model) => {
          setCurrentHasProgressWalksDisplayValue(
            model ? getDisplayValue.hasProgressWalks(model) : ""
          );
          setCurrentHasProgressWalksValue(model);
        }}
        inputFieldRef={hasProgressWalksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Has progress walks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProgressWalk"
          value={currentHasProgressWalksDisplayValue}
          options={progressWalkRecords
            .filter(
              (r) =>
                !hasProgressWalksIdSet.has(getIDValue.hasProgressWalks?.(r))
            )
            .map((r) => ({
              id: getIDValue.hasProgressWalks?.(r),
              label: getDisplayValue.hasProgressWalks?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentHasProgressWalksValue(
              progressWalkRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentHasProgressWalksDisplayValue(label);
            runValidationTasks("hasProgressWalks", label);
          }}
          onClear={() => {
            setCurrentHasProgressWalksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.hasProgressWalks?.hasError) {
              runValidationTasks("hasProgressWalks", value);
            }
            setCurrentHasProgressWalksDisplayValue(value);
            setCurrentHasProgressWalksValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "hasProgressWalks",
              currentHasProgressWalksDisplayValue
            )
          }
          errorMessage={errors.hasProgressWalks?.errorMessage}
          hasError={errors.hasProgressWalks?.hasError}
          ref={hasProgressWalksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "hasProgressWalks")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Total walks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalWalks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks: value,
              doneWalks,
              totalSteps,
              doneSteps,
              lastActedOn,
              prefUserName,
            };
            const result = onChange(modelFields);
            value = result?.totalWalks ?? value;
          }
          if (errors.totalWalks?.hasError) {
            runValidationTasks("totalWalks", value);
          }
          setTotalWalks(value);
        }}
        onBlur={() => runValidationTasks("totalWalks", totalWalks)}
        errorMessage={errors.totalWalks?.errorMessage}
        hasError={errors.totalWalks?.hasError}
        {...getOverrideProps(overrides, "totalWalks")}
      ></TextField>
      <TextField
        label="Done walks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={doneWalks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks,
              doneWalks: value,
              totalSteps,
              doneSteps,
              lastActedOn,
              prefUserName,
            };
            const result = onChange(modelFields);
            value = result?.doneWalks ?? value;
          }
          if (errors.doneWalks?.hasError) {
            runValidationTasks("doneWalks", value);
          }
          setDoneWalks(value);
        }}
        onBlur={() => runValidationTasks("doneWalks", doneWalks)}
        errorMessage={errors.doneWalks?.errorMessage}
        hasError={errors.doneWalks?.hasError}
        {...getOverrideProps(overrides, "doneWalks")}
      ></TextField>
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
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks,
              doneWalks,
              totalSteps: value,
              doneSteps,
              lastActedOn,
              prefUserName,
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
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks,
              doneWalks,
              totalSteps,
              doneSteps: value,
              lastActedOn,
              prefUserName,
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
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks,
              doneWalks,
              totalSteps,
              doneSteps,
              lastActedOn: value,
              prefUserName,
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
      <TextField
        label="Pref user name"
        isRequired={true}
        isReadOnly={false}
        value={prefUserName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              definedPathwayVersion,
              hasProgressWalks,
              totalWalks,
              doneWalks,
              totalSteps,
              doneSteps,
              lastActedOn,
              prefUserName: value,
            };
            const result = onChange(modelFields);
            value = result?.prefUserName ?? value;
          }
          if (errors.prefUserName?.hasError) {
            runValidationTasks("prefUserName", value);
          }
          setPrefUserName(value);
        }}
        onBlur={() => runValidationTasks("prefUserName", prefUserName)}
        errorMessage={errors.prefUserName?.errorMessage}
        hasError={errors.prefUserName?.hasError}
        {...getOverrideProps(overrides, "prefUserName")}
      ></TextField>
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
          isDisabled={!(idProp || progressPathModelProp)}
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
              !(idProp || progressPathModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
