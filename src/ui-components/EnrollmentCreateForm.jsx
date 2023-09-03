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
import {
  Enrollment,
  Pathway,
  PathwayVersion,
  ProgressPath as ProgressPath0,
  ProfileExplorer,
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
export default function EnrollmentCreateForm(props) {
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
    toPathway: undefined,
    tPathwayVersiono: undefined,
    profileexplorerID: undefined,
    ProgressPath: undefined,
  };
  const [toPathway, setToPathway] = React.useState(initialValues.toPathway);
  const [tPathwayVersiono, setTPathwayVersiono] = React.useState(
    initialValues.tPathwayVersiono
  );
  const [profileexplorerID, setProfileexplorerID] = React.useState(
    initialValues.profileexplorerID
  );
  const [ProgressPath, setProgressPath] = React.useState(
    initialValues.ProgressPath
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setToPathway(initialValues.toPathway);
    setCurrentToPathwayValue(undefined);
    setCurrentToPathwayDisplayValue("");
    setTPathwayVersiono(initialValues.tPathwayVersiono);
    setCurrentTPathwayVersionoValue(undefined);
    setCurrentTPathwayVersionoDisplayValue("");
    setProfileexplorerID(initialValues.profileexplorerID);
    setCurrentProfileexplorerIDValue(undefined);
    setCurrentProfileexplorerIDDisplayValue("");
    setProgressPath(initialValues.ProgressPath);
    setCurrentProgressPathValue(undefined);
    setCurrentProgressPathDisplayValue("");
    setErrors({});
  };
  const [currentToPathwayDisplayValue, setCurrentToPathwayDisplayValue] =
    React.useState("");
  const [currentToPathwayValue, setCurrentToPathwayValue] =
    React.useState(undefined);
  const toPathwayRef = React.createRef();
  const [
    currentTPathwayVersionoDisplayValue,
    setCurrentTPathwayVersionoDisplayValue,
  ] = React.useState("");
  const [currentTPathwayVersionoValue, setCurrentTPathwayVersionoValue] =
    React.useState(undefined);
  const tPathwayVersionoRef = React.createRef();
  const [
    currentProfileexplorerIDDisplayValue,
    setCurrentProfileexplorerIDDisplayValue,
  ] = React.useState("");
  const [currentProfileexplorerIDValue, setCurrentProfileexplorerIDValue] =
    React.useState(undefined);
  const profileexplorerIDRef = React.createRef();
  const [currentProgressPathDisplayValue, setCurrentProgressPathDisplayValue] =
    React.useState("");
  const [currentProgressPathValue, setCurrentProgressPathValue] =
    React.useState(undefined);
  const ProgressPathRef = React.createRef();
  const getIDValue = {
    toPathway: (r) => JSON.stringify({ id: r?.id }),
    tPathwayVersiono: (r) => JSON.stringify({ id: r?.id }),
    ProgressPath: (r) => JSON.stringify({ id: r?.id }),
  };
  const toPathwayIdSet = new Set(
    Array.isArray(toPathway)
      ? toPathway.map((r) => getIDValue.toPathway?.(r))
      : getIDValue.toPathway?.(toPathway)
  );
  const tPathwayVersionoIdSet = new Set(
    Array.isArray(tPathwayVersiono)
      ? tPathwayVersiono.map((r) => getIDValue.tPathwayVersiono?.(r))
      : getIDValue.tPathwayVersiono?.(tPathwayVersiono)
  );
  const ProgressPathIdSet = new Set(
    Array.isArray(ProgressPath)
      ? ProgressPath.map((r) => getIDValue.ProgressPath?.(r))
      : getIDValue.ProgressPath?.(ProgressPath)
  );
  const pathwayRecords = useDataStoreBinding({
    type: "collection",
    model: Pathway,
  }).items;
  const pathwayVersionRecords = useDataStoreBinding({
    type: "collection",
    model: PathwayVersion,
  }).items;
  const profileExplorerRecords = useDataStoreBinding({
    type: "collection",
    model: ProfileExplorer,
  }).items;
  const progressPathRecords = useDataStoreBinding({
    type: "collection",
    model: ProgressPath0,
  }).items;
  const getDisplayValue = {
    toPathway: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    tPathwayVersiono: (r) => `${r?.version ? r?.version + " - " : ""}${r?.id}`,
    profileexplorerID: (r) =>
      `${r?.screenName ? r?.screenName + " - " : ""}${r?.id}`,
    ProgressPath: (r) =>
      `${r?.totalWalks ? r?.totalWalks + " - " : ""}${r?.id}`,
  };
  const validations = {
    toPathway: [],
    tPathwayVersiono: [],
    profileexplorerID: [{ type: "Required" }],
    ProgressPath: [],
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
          toPathway,
          tPathwayVersiono,
          profileexplorerID,
          ProgressPath,
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
          await DataStore.save(new Enrollment(modelFields));
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
      {...getOverrideProps(overrides, "EnrollmentCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              toPathway: value,
              tPathwayVersiono,
              profileexplorerID,
              ProgressPath,
            };
            const result = onChange(modelFields);
            value = result?.toPathway ?? value;
          }
          setToPathway(value);
          setCurrentToPathwayValue(undefined);
          setCurrentToPathwayDisplayValue("");
        }}
        currentFieldValue={currentToPathwayValue}
        label={"To pathway"}
        items={toPathway ? [toPathway] : []}
        hasError={errors?.toPathway?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("toPathway", currentToPathwayValue)
        }
        errorMessage={errors?.toPathway?.errorMessage}
        getBadgeText={getDisplayValue.toPathway}
        setFieldValue={(model) => {
          setCurrentToPathwayDisplayValue(
            model ? getDisplayValue.toPathway(model) : ""
          );
          setCurrentToPathwayValue(model);
        }}
        inputFieldRef={toPathwayRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="To pathway"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Pathway"
          value={currentToPathwayDisplayValue}
          options={pathwayRecords
            .filter((r) => !toPathwayIdSet.has(getIDValue.toPathway?.(r)))
            .map((r) => ({
              id: getIDValue.toPathway?.(r),
              label: getDisplayValue.toPathway?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentToPathwayValue(
              pathwayRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentToPathwayDisplayValue(label);
            runValidationTasks("toPathway", label);
          }}
          onClear={() => {
            setCurrentToPathwayDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.toPathway?.hasError) {
              runValidationTasks("toPathway", value);
            }
            setCurrentToPathwayDisplayValue(value);
            setCurrentToPathwayValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("toPathway", currentToPathwayDisplayValue)
          }
          errorMessage={errors.toPathway?.errorMessage}
          hasError={errors.toPathway?.hasError}
          ref={toPathwayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "toPathway")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              toPathway,
              tPathwayVersiono: value,
              profileexplorerID,
              ProgressPath,
            };
            const result = onChange(modelFields);
            value = result?.tPathwayVersiono ?? value;
          }
          setTPathwayVersiono(value);
          setCurrentTPathwayVersionoValue(undefined);
          setCurrentTPathwayVersionoDisplayValue("");
        }}
        currentFieldValue={currentTPathwayVersionoValue}
        label={"T pathway versiono"}
        items={tPathwayVersiono ? [tPathwayVersiono] : []}
        hasError={errors?.tPathwayVersiono?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "tPathwayVersiono",
            currentTPathwayVersionoValue
          )
        }
        errorMessage={errors?.tPathwayVersiono?.errorMessage}
        getBadgeText={getDisplayValue.tPathwayVersiono}
        setFieldValue={(model) => {
          setCurrentTPathwayVersionoDisplayValue(
            model ? getDisplayValue.tPathwayVersiono(model) : ""
          );
          setCurrentTPathwayVersionoValue(model);
        }}
        inputFieldRef={tPathwayVersionoRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="T pathway versiono"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search PathwayVersion"
          value={currentTPathwayVersionoDisplayValue}
          options={pathwayVersionRecords
            .filter(
              (r) =>
                !tPathwayVersionoIdSet.has(getIDValue.tPathwayVersiono?.(r))
            )
            .map((r) => ({
              id: getIDValue.tPathwayVersiono?.(r),
              label: getDisplayValue.tPathwayVersiono?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTPathwayVersionoValue(
              pathwayVersionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTPathwayVersionoDisplayValue(label);
            runValidationTasks("tPathwayVersiono", label);
          }}
          onClear={() => {
            setCurrentTPathwayVersionoDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tPathwayVersiono?.hasError) {
              runValidationTasks("tPathwayVersiono", value);
            }
            setCurrentTPathwayVersionoDisplayValue(value);
            setCurrentTPathwayVersionoValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "tPathwayVersiono",
              currentTPathwayVersionoDisplayValue
            )
          }
          errorMessage={errors.tPathwayVersiono?.errorMessage}
          hasError={errors.tPathwayVersiono?.hasError}
          ref={tPathwayVersionoRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tPathwayVersiono")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              toPathway,
              tPathwayVersiono,
              profileexplorerID: value,
              ProgressPath,
            };
            const result = onChange(modelFields);
            value = result?.profileexplorerID ?? value;
          }
          setProfileexplorerID(value);
          setCurrentProfileexplorerIDValue(undefined);
        }}
        currentFieldValue={currentProfileexplorerIDValue}
        label={"Profileexplorer id"}
        items={profileexplorerID ? [profileexplorerID] : []}
        hasError={errors?.profileexplorerID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "profileexplorerID",
            currentProfileexplorerIDValue
          )
        }
        errorMessage={errors?.profileexplorerID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.profileexplorerID(
                profileExplorerRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProfileexplorerIDDisplayValue(
            value
              ? getDisplayValue.profileexplorerID(
                  profileExplorerRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProfileexplorerIDValue(value);
        }}
        inputFieldRef={profileexplorerIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Profileexplorer id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ProfileExplorer"
          value={currentProfileexplorerIDDisplayValue}
          options={profileExplorerRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.profileexplorerID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProfileexplorerIDValue(id);
            setCurrentProfileexplorerIDDisplayValue(label);
            runValidationTasks("profileexplorerID", label);
          }}
          onClear={() => {
            setCurrentProfileexplorerIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.profileexplorerID?.hasError) {
              runValidationTasks("profileexplorerID", value);
            }
            setCurrentProfileexplorerIDDisplayValue(value);
            setCurrentProfileexplorerIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "profileexplorerID",
              currentProfileexplorerIDValue
            )
          }
          errorMessage={errors.profileexplorerID?.errorMessage}
          hasError={errors.profileexplorerID?.hasError}
          ref={profileexplorerIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "profileexplorerID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              toPathway,
              tPathwayVersiono,
              profileexplorerID,
              ProgressPath: value,
            };
            const result = onChange(modelFields);
            value = result?.ProgressPath ?? value;
          }
          setProgressPath(value);
          setCurrentProgressPathValue(undefined);
          setCurrentProgressPathDisplayValue("");
        }}
        currentFieldValue={currentProgressPathValue}
        label={"Progress path"}
        items={ProgressPath ? [ProgressPath] : []}
        hasError={errors?.ProgressPath?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ProgressPath", currentProgressPathValue)
        }
        errorMessage={errors?.ProgressPath?.errorMessage}
        getBadgeText={getDisplayValue.ProgressPath}
        setFieldValue={(model) => {
          setCurrentProgressPathDisplayValue(
            model ? getDisplayValue.ProgressPath(model) : ""
          );
          setCurrentProgressPathValue(model);
        }}
        inputFieldRef={ProgressPathRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Progress path"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProgressPath"
          value={currentProgressPathDisplayValue}
          options={progressPathRecords
            .filter((r) => !ProgressPathIdSet.has(getIDValue.ProgressPath?.(r)))
            .map((r) => ({
              id: getIDValue.ProgressPath?.(r),
              label: getDisplayValue.ProgressPath?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProgressPathValue(
              progressPathRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProgressPathDisplayValue(label);
            runValidationTasks("ProgressPath", label);
          }}
          onClear={() => {
            setCurrentProgressPathDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ProgressPath?.hasError) {
              runValidationTasks("ProgressPath", value);
            }
            setCurrentProgressPathDisplayValue(value);
            setCurrentProgressPathValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("ProgressPath", currentProgressPathDisplayValue)
          }
          errorMessage={errors.ProgressPath?.errorMessage}
          hasError={errors.ProgressPath?.hasError}
          ref={ProgressPathRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ProgressPath")}
        ></Autocomplete>
      </ArrayField>
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
