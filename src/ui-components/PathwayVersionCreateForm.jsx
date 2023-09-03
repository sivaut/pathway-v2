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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { PathwayVersion, Pathway, Walk } from "../models";
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
export default function PathwayVersionCreateForm(props) {
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
    ofPathway: undefined,
    version: "",
    published: "",
    status: "",
    Walks: [],
    latest: false,
  };
  const [ofPathway, setOfPathway] = React.useState(initialValues.ofPathway);
  const [version, setVersion] = React.useState(initialValues.version);
  const [published, setPublished] = React.useState(initialValues.published);
  const [status, setStatus] = React.useState(initialValues.status);
  const [Walks, setWalks] = React.useState(initialValues.Walks);
  const [latest, setLatest] = React.useState(initialValues.latest);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOfPathway(initialValues.ofPathway);
    setCurrentOfPathwayValue(undefined);
    setCurrentOfPathwayDisplayValue("");
    setVersion(initialValues.version);
    setPublished(initialValues.published);
    setStatus(initialValues.status);
    setWalks(initialValues.Walks);
    setCurrentWalksValue(undefined);
    setCurrentWalksDisplayValue("");
    setLatest(initialValues.latest);
    setErrors({});
  };
  const [currentOfPathwayDisplayValue, setCurrentOfPathwayDisplayValue] =
    React.useState("");
  const [currentOfPathwayValue, setCurrentOfPathwayValue] =
    React.useState(undefined);
  const ofPathwayRef = React.createRef();
  const [currentWalksDisplayValue, setCurrentWalksDisplayValue] =
    React.useState("");
  const [currentWalksValue, setCurrentWalksValue] = React.useState(undefined);
  const WalksRef = React.createRef();
  const getIDValue = {
    ofPathway: (r) => JSON.stringify({ id: r?.id }),
    Walks: (r) => JSON.stringify({ id: r?.id }),
  };
  const ofPathwayIdSet = new Set(
    Array.isArray(ofPathway)
      ? ofPathway.map((r) => getIDValue.ofPathway?.(r))
      : getIDValue.ofPathway?.(ofPathway)
  );
  const WalksIdSet = new Set(
    Array.isArray(Walks)
      ? Walks.map((r) => getIDValue.Walks?.(r))
      : getIDValue.Walks?.(Walks)
  );
  const pathwayRecords = useDataStoreBinding({
    type: "collection",
    model: Pathway,
  }).items;
  const walkRecords = useDataStoreBinding({
    type: "collection",
    model: Walk,
  }).items;
  const getDisplayValue = {
    ofPathway: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Walks: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    ofPathway: [],
    version: [],
    published: [],
    status: [],
    Walks: [],
    latest: [],
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
          ofPathway,
          version,
          published,
          status,
          Walks,
          latest,
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
            ofPathway: modelFields.ofPathway,
            version: modelFields.version,
            published: modelFields.published,
            status: modelFields.status,
            latest: modelFields.latest,
          };
          const pathwayVersion = await DataStore.save(
            new PathwayVersion(modelFieldsToSave)
          );
          const promises = [];
          const pathwayToLink = modelFields.ofPathway;
          if (pathwayToLink) {
            promises.push(
              DataStore.save(
                Pathway.copyOf(pathwayToLink, (updated) => {
                  updated.hasManyVersion = pathwayVersion;
                })
              )
            );
            const pathwayVersionToUnlink = await pathwayToLink.hasManyVersion;
            if (pathwayVersionToUnlink) {
              promises.push(
                DataStore.save(
                  PathwayVersion.copyOf(pathwayVersionToUnlink, (updated) => {
                    updated.ofPathway = undefined;
                    updated.pathwayVersionOfPathwayId = undefined;
                  })
                )
              );
            }
          }
          promises.push(
            ...Walks.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Walk.copyOf(original, (updated) => {
                    updated.pathwayversionID = pathwayVersion.id;
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
      {...getOverrideProps(overrides, "PathwayVersionCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              ofPathway: value,
              version,
              published,
              status,
              Walks,
              latest,
            };
            const result = onChange(modelFields);
            value = result?.ofPathway ?? value;
          }
          setOfPathway(value);
          setCurrentOfPathwayValue(undefined);
          setCurrentOfPathwayDisplayValue("");
        }}
        currentFieldValue={currentOfPathwayValue}
        label={"Of pathway"}
        items={ofPathway ? [ofPathway] : []}
        hasError={errors?.ofPathway?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ofPathway", currentOfPathwayValue)
        }
        errorMessage={errors?.ofPathway?.errorMessage}
        getBadgeText={getDisplayValue.ofPathway}
        setFieldValue={(model) => {
          setCurrentOfPathwayDisplayValue(
            model ? getDisplayValue.ofPathway(model) : ""
          );
          setCurrentOfPathwayValue(model);
        }}
        inputFieldRef={ofPathwayRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Of pathway"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Pathway"
          value={currentOfPathwayDisplayValue}
          options={pathwayRecords
            .filter((r) => !ofPathwayIdSet.has(getIDValue.ofPathway?.(r)))
            .map((r) => ({
              id: getIDValue.ofPathway?.(r),
              label: getDisplayValue.ofPathway?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOfPathwayValue(
              pathwayRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOfPathwayDisplayValue(label);
            runValidationTasks("ofPathway", label);
          }}
          onClear={() => {
            setCurrentOfPathwayDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ofPathway?.hasError) {
              runValidationTasks("ofPathway", value);
            }
            setCurrentOfPathwayDisplayValue(value);
            setCurrentOfPathwayValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("ofPathway", currentOfPathwayDisplayValue)
          }
          errorMessage={errors.ofPathway?.errorMessage}
          hasError={errors.ofPathway?.hasError}
          ref={ofPathwayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ofPathway")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Version"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={version}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ofPathway,
              version: value,
              published,
              status,
              Walks,
              latest,
            };
            const result = onChange(modelFields);
            value = result?.version ?? value;
          }
          if (errors.version?.hasError) {
            runValidationTasks("version", value);
          }
          setVersion(value);
        }}
        onBlur={() => runValidationTasks("version", version)}
        errorMessage={errors.version?.errorMessage}
        hasError={errors.version?.hasError}
        {...getOverrideProps(overrides, "version")}
      ></TextField>
      <TextField
        label="Published"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={published}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ofPathway,
              version,
              published: value,
              status,
              Walks,
              latest,
            };
            const result = onChange(modelFields);
            value = result?.published ?? value;
          }
          if (errors.published?.hasError) {
            runValidationTasks("published", value);
          }
          setPublished(value);
        }}
        onBlur={() => runValidationTasks("published", published)}
        errorMessage={errors.published?.errorMessage}
        hasError={errors.published?.hasError}
        {...getOverrideProps(overrides, "published")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ofPathway,
              version,
              published,
              status: value,
              Walks,
              latest,
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
          children="Draft"
          value="DRAFT"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Preview"
          value="PREVIEW"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Pblished"
          value="PBLISHED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ofPathway,
              version,
              published,
              status,
              Walks: values,
              latest,
            };
            const result = onChange(modelFields);
            values = result?.Walks ?? values;
          }
          setWalks(values);
          setCurrentWalksValue(undefined);
          setCurrentWalksDisplayValue("");
        }}
        currentFieldValue={currentWalksValue}
        label={"Walks"}
        items={Walks}
        hasError={errors?.Walks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Walks", currentWalksValue)
        }
        errorMessage={errors?.Walks?.errorMessage}
        getBadgeText={getDisplayValue.Walks}
        setFieldValue={(model) => {
          setCurrentWalksDisplayValue(
            model ? getDisplayValue.Walks(model) : ""
          );
          setCurrentWalksValue(model);
        }}
        inputFieldRef={WalksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Walks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Walk"
          value={currentWalksDisplayValue}
          options={walkRecords
            .filter((r) => !WalksIdSet.has(getIDValue.Walks?.(r)))
            .map((r) => ({
              id: getIDValue.Walks?.(r),
              label: getDisplayValue.Walks?.(r),
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
            runValidationTasks("Walks", label);
          }}
          onClear={() => {
            setCurrentWalksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Walks?.hasError) {
              runValidationTasks("Walks", value);
            }
            setCurrentWalksDisplayValue(value);
            setCurrentWalksValue(undefined);
          }}
          onBlur={() => runValidationTasks("Walks", currentWalksDisplayValue)}
          errorMessage={errors.Walks?.errorMessage}
          hasError={errors.Walks?.hasError}
          ref={WalksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Walks")}
        ></Autocomplete>
      </ArrayField>
      <SwitchField
        label="Latest"
        defaultChecked={false}
        isDisabled={false}
        isChecked={latest}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ofPathway,
              version,
              published,
              status,
              Walks,
              latest: value,
            };
            const result = onChange(modelFields);
            value = result?.latest ?? value;
          }
          if (errors.latest?.hasError) {
            runValidationTasks("latest", value);
          }
          setLatest(value);
        }}
        onBlur={() => runValidationTasks("latest", latest)}
        errorMessage={errors.latest?.errorMessage}
        hasError={errors.latest?.hasError}
        {...getOverrideProps(overrides, "latest")}
      ></SwitchField>
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
