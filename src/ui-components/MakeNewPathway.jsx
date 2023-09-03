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
import { Pathway, Grade, PathwayTag, PathwayPathwayTag } from "../models";
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
export default function MakeNewPathway(props) {
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
    name: "",
    description: "",
    thumbnail: "",
    suggestedGrades: [],
    PathwayTags: [],
    tags: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [suggestedGrades, setSuggestedGrades] = React.useState(
    initialValues.suggestedGrades
  );
  const [PathwayTags, setPathwayTags] = React.useState(
    initialValues.PathwayTags
  );
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setThumbnail(initialValues.thumbnail);
    setSuggestedGrades(initialValues.suggestedGrades);
    setCurrentSuggestedGradesValue(undefined);
    setCurrentSuggestedGradesDisplayValue("");
    setPathwayTags(initialValues.PathwayTags);
    setCurrentPathwayTagsValue(undefined);
    setCurrentPathwayTagsDisplayValue("");
    setTags(initialValues.tags);
    setErrors({});
  };
  const [
    currentSuggestedGradesDisplayValue,
    setCurrentSuggestedGradesDisplayValue,
  ] = React.useState("");
  const [currentSuggestedGradesValue, setCurrentSuggestedGradesValue] =
    React.useState(undefined);
  const suggestedGradesRef = React.createRef();
  const [currentPathwayTagsDisplayValue, setCurrentPathwayTagsDisplayValue] =
    React.useState("");
  const [currentPathwayTagsValue, setCurrentPathwayTagsValue] =
    React.useState(undefined);
  const PathwayTagsRef = React.createRef();
  const getIDValue = {
    suggestedGrades: (r) => JSON.stringify({ id: r?.id }),
    PathwayTags: (r) => JSON.stringify({ id: r?.id }),
  };
  const suggestedGradesIdSet = new Set(
    Array.isArray(suggestedGrades)
      ? suggestedGrades.map((r) => getIDValue.suggestedGrades?.(r))
      : getIDValue.suggestedGrades?.(suggestedGrades)
  );
  const PathwayTagsIdSet = new Set(
    Array.isArray(PathwayTags)
      ? PathwayTags.map((r) => getIDValue.PathwayTags?.(r))
      : getIDValue.PathwayTags?.(PathwayTags)
  );
  const gradeRecords = useDataStoreBinding({
    type: "collection",
    model: Grade,
  }).items;
  const pathwayTagRecords = useDataStoreBinding({
    type: "collection",
    model: PathwayTag,
  }).items;
  const getDisplayValue = {
    suggestedGrades: (r) =>
      `${r?.gradeLevel ? r?.gradeLevel + " - " : ""}${r?.id}`,
    PathwayTags: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    description: [],
    thumbnail: [{ type: "URL" }],
    suggestedGrades: [
      { type: "Required", validationMessage: "Grade is required." },
    ],
    PathwayTags: [],
    tags: [],
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
          name,
          description,
          thumbnail,
          suggestedGrades,
          PathwayTags,
          tags,
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
            name: modelFields.name,
            description: modelFields.description,
            thumbnail: modelFields.thumbnail,
            tags: modelFields.tags,
          };
          const pathway = await DataStore.save(new Pathway(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...suggestedGrades.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Grade.copyOf(original, (updated) => {
                    updated.pathwayID = pathway.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...PathwayTags.reduce((promises, pathwayTag) => {
              promises.push(
                DataStore.save(
                  new PathwayPathwayTag({
                    pathway,
                    pathwayTag,
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
      {...getOverrideProps(overrides, "MakeNewPathway")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              thumbnail,
              suggestedGrades,
              PathwayTags,
              tags,
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
              name,
              description: value,
              thumbnail,
              suggestedGrades,
              PathwayTags,
              tags,
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
        label="Thumbnail"
        isRequired={false}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              thumbnail: value,
              suggestedGrades,
              PathwayTags,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              thumbnail,
              suggestedGrades: values,
              PathwayTags,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.suggestedGrades ?? values;
          }
          setSuggestedGrades(values);
          setCurrentSuggestedGradesValue(undefined);
          setCurrentSuggestedGradesDisplayValue("");
        }}
        currentFieldValue={currentSuggestedGradesValue}
        label={"Suggested grades"}
        items={suggestedGrades}
        hasError={errors?.suggestedGrades?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "suggestedGrades",
            currentSuggestedGradesValue
          )
        }
        errorMessage={errors?.suggestedGrades?.errorMessage}
        getBadgeText={getDisplayValue.suggestedGrades}
        setFieldValue={(model) => {
          setCurrentSuggestedGradesDisplayValue(
            model ? getDisplayValue.suggestedGrades(model) : ""
          );
          setCurrentSuggestedGradesValue(model);
        }}
        inputFieldRef={suggestedGradesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Suggested grades"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Grade"
          value={currentSuggestedGradesDisplayValue}
          options={gradeRecords
            .filter(
              (r) => !suggestedGradesIdSet.has(getIDValue.suggestedGrades?.(r))
            )
            .map((r) => ({
              id: getIDValue.suggestedGrades?.(r),
              label: getDisplayValue.suggestedGrades?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSuggestedGradesValue(
              gradeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSuggestedGradesDisplayValue(label);
            runValidationTasks("suggestedGrades", label);
          }}
          onClear={() => {
            setCurrentSuggestedGradesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.suggestedGrades?.hasError) {
              runValidationTasks("suggestedGrades", value);
            }
            setCurrentSuggestedGradesDisplayValue(value);
            setCurrentSuggestedGradesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "suggestedGrades",
              currentSuggestedGradesDisplayValue
            )
          }
          errorMessage={errors.suggestedGrades?.errorMessage}
          hasError={errors.suggestedGrades?.hasError}
          ref={suggestedGradesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "suggestedGrades")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              thumbnail,
              suggestedGrades,
              PathwayTags: values,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.PathwayTags ?? values;
          }
          setPathwayTags(values);
          setCurrentPathwayTagsValue(undefined);
          setCurrentPathwayTagsDisplayValue("");
        }}
        currentFieldValue={currentPathwayTagsValue}
        label={"Pathway tags"}
        items={PathwayTags}
        hasError={errors?.PathwayTags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("PathwayTags", currentPathwayTagsValue)
        }
        errorMessage={errors?.PathwayTags?.errorMessage}
        getBadgeText={getDisplayValue.PathwayTags}
        setFieldValue={(model) => {
          setCurrentPathwayTagsDisplayValue(
            model ? getDisplayValue.PathwayTags(model) : ""
          );
          setCurrentPathwayTagsValue(model);
        }}
        inputFieldRef={PathwayTagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pathway tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search PathwayTag"
          value={currentPathwayTagsDisplayValue}
          options={pathwayTagRecords
            .filter((r) => !PathwayTagsIdSet.has(getIDValue.PathwayTags?.(r)))
            .map((r) => ({
              id: getIDValue.PathwayTags?.(r),
              label: getDisplayValue.PathwayTags?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPathwayTagsValue(
              pathwayTagRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPathwayTagsDisplayValue(label);
            runValidationTasks("PathwayTags", label);
          }}
          onClear={() => {
            setCurrentPathwayTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.PathwayTags?.hasError) {
              runValidationTasks("PathwayTags", value);
            }
            setCurrentPathwayTagsDisplayValue(value);
            setCurrentPathwayTagsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("PathwayTags", currentPathwayTagsDisplayValue)
          }
          errorMessage={errors.PathwayTags?.errorMessage}
          hasError={errors.PathwayTags?.hasError}
          ref={PathwayTagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PathwayTags")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              thumbnail,
              suggestedGrades,
              PathwayTags,
              tags: value,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
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
