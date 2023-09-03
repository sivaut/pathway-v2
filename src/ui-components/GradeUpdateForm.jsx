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
import { Grade, Pathway } from "../models";
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
export default function GradeUpdateForm(props) {
  const {
    id: idProp,
    grade: gradeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gradeLevel: "",
    pathwayID: undefined,
  };
  const [gradeLevel, setGradeLevel] = React.useState(initialValues.gradeLevel);
  const [pathwayID, setPathwayID] = React.useState(initialValues.pathwayID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gradeRecord
      ? { ...initialValues, ...gradeRecord, pathwayID }
      : initialValues;
    setGradeLevel(cleanValues.gradeLevel);
    setPathwayID(cleanValues.pathwayID);
    setCurrentPathwayIDValue(undefined);
    setCurrentPathwayIDDisplayValue("");
    setErrors({});
  };
  const [gradeRecord, setGradeRecord] = React.useState(gradeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Grade, idProp)
        : gradeModelProp;
      setGradeRecord(record);
      const pathwayIDRecord = record ? await record.pathwayID : undefined;
      setPathwayID(pathwayIDRecord);
    };
    queryData();
  }, [idProp, gradeModelProp]);
  React.useEffect(resetStateValues, [gradeRecord, pathwayID]);
  const [currentPathwayIDDisplayValue, setCurrentPathwayIDDisplayValue] =
    React.useState("");
  const [currentPathwayIDValue, setCurrentPathwayIDValue] =
    React.useState(undefined);
  const pathwayIDRef = React.createRef();
  const pathwayRecords = useDataStoreBinding({
    type: "collection",
    model: Pathway,
  }).items;
  const getDisplayValue = {
    pathwayID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    gradeLevel: [],
    pathwayID: [{ type: "Required" }],
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
          gradeLevel,
          pathwayID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
            Grade.copyOf(gradeRecord, (updated) => {
              Object.assign(updated, modelFields);
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
      {...getOverrideProps(overrides, "GradeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Grade level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={gradeLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              gradeLevel: value,
              pathwayID,
            };
            const result = onChange(modelFields);
            value = result?.gradeLevel ?? value;
          }
          if (errors.gradeLevel?.hasError) {
            runValidationTasks("gradeLevel", value);
          }
          setGradeLevel(value);
        }}
        onBlur={() => runValidationTasks("gradeLevel", gradeLevel)}
        errorMessage={errors.gradeLevel?.errorMessage}
        hasError={errors.gradeLevel?.hasError}
        {...getOverrideProps(overrides, "gradeLevel")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              gradeLevel,
              pathwayID: value,
            };
            const result = onChange(modelFields);
            value = result?.pathwayID ?? value;
          }
          setPathwayID(value);
          setCurrentPathwayIDValue(undefined);
        }}
        currentFieldValue={currentPathwayIDValue}
        label={"Pathway id"}
        items={pathwayID ? [pathwayID] : []}
        hasError={errors?.pathwayID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("pathwayID", currentPathwayIDValue)
        }
        errorMessage={errors?.pathwayID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.pathwayID(
                pathwayRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPathwayIDDisplayValue(
            value
              ? getDisplayValue.pathwayID(
                  pathwayRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPathwayIDValue(value);
        }}
        inputFieldRef={pathwayIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pathway id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Pathway"
          value={currentPathwayIDDisplayValue}
          options={pathwayRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.pathwayID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPathwayIDValue(id);
            setCurrentPathwayIDDisplayValue(label);
            runValidationTasks("pathwayID", label);
          }}
          onClear={() => {
            setCurrentPathwayIDDisplayValue("");
          }}
          defaultValue={pathwayID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.pathwayID?.hasError) {
              runValidationTasks("pathwayID", value);
            }
            setCurrentPathwayIDDisplayValue(value);
            setCurrentPathwayIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("pathwayID", currentPathwayIDValue)}
          errorMessage={errors.pathwayID?.errorMessage}
          hasError={errors.pathwayID?.hasError}
          ref={pathwayIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "pathwayID")}
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
          isDisabled={!(idProp || gradeModelProp)}
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
              !(idProp || gradeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
