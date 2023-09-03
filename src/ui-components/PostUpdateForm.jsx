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
import { Post, Comment, Thread } from "../models";
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
export default function PostUpdateForm(props) {
  const {
    id: idProp,
    post: postModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    comments: [],
    oblogID: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [oblogID, setOblogID] = React.useState(initialValues.oblogID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = postRecord
      ? { ...initialValues, ...postRecord, comments: linkedComments, oblogID }
      : initialValues;
    setTitle(cleanValues.title);
    setComments(cleanValues.comments ?? []);
    setCurrentCommentsValue(undefined);
    setCurrentCommentsDisplayValue("");
    setOblogID(cleanValues.oblogID);
    setCurrentOblogIDValue(undefined);
    setCurrentOblogIDDisplayValue("");
    setErrors({});
  };
  const [postRecord, setPostRecord] = React.useState(postModelProp);
  const [linkedComments, setLinkedComments] = React.useState([]);
  const canUnlinkComments = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Post, idProp)
        : postModelProp;
      setPostRecord(record);
      const linkedComments = record ? await record.comments.toArray() : [];
      setLinkedComments(linkedComments);
      const oblogIDRecord = record ? await record.oblogID : undefined;
      setOblogID(oblogIDRecord);
    };
    queryData();
  }, [idProp, postModelProp]);
  React.useEffect(resetStateValues, [postRecord, linkedComments, oblogID]);
  const [currentCommentsDisplayValue, setCurrentCommentsDisplayValue] =
    React.useState("");
  const [currentCommentsValue, setCurrentCommentsValue] =
    React.useState(undefined);
  const commentsRef = React.createRef();
  const [currentOblogIDDisplayValue, setCurrentOblogIDDisplayValue] =
    React.useState("");
  const [currentOblogIDValue, setCurrentOblogIDValue] =
    React.useState(undefined);
  const oblogIDRef = React.createRef();
  const getIDValue = {
    comments: (r) => JSON.stringify({ id: r?.id }),
  };
  const commentsIdSet = new Set(
    Array.isArray(comments)
      ? comments.map((r) => getIDValue.comments?.(r))
      : getIDValue.comments?.(comments)
  );
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const threadRecords = useDataStoreBinding({
    type: "collection",
    model: Thread,
  }).items;
  const getDisplayValue = {
    comments: (r) => `${r?.content ? r?.content + " - " : ""}${r?.id}`,
    oblogID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    comments: [],
    oblogID: [{ type: "Required" }],
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
          title,
          comments,
          oblogID,
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
          const commentsToLink = [];
          const commentsToUnLink = [];
          const commentsSet = new Set();
          const linkedCommentsSet = new Set();
          comments.forEach((r) => commentsSet.add(getIDValue.comments?.(r)));
          linkedComments.forEach((r) =>
            linkedCommentsSet.add(getIDValue.comments?.(r))
          );
          linkedComments.forEach((r) => {
            if (!commentsSet.has(getIDValue.comments?.(r))) {
              commentsToUnLink.push(r);
            }
          });
          comments.forEach((r) => {
            if (!linkedCommentsSet.has(getIDValue.comments?.(r))) {
              commentsToLink.push(r);
            }
          });
          commentsToUnLink.forEach((original) => {
            if (!canUnlinkComments) {
              throw Error(
                `Comment ${original.id} cannot be unlinked from Post because postCommentsId is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.postCommentsId = null;
                  updated.post = null;
                })
              )
            );
          });
          commentsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.postCommentsId = postRecord.id;
                  updated.post = postRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            oblogID: modelFields.oblogID,
          };
          promises.push(
            DataStore.save(
              Post.copyOf(postRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PostUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              comments,
              oblogID,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              comments: values,
              oblogID,
            };
            const result = onChange(modelFields);
            values = result?.comments ?? values;
          }
          setComments(values);
          setCurrentCommentsValue(undefined);
          setCurrentCommentsDisplayValue("");
        }}
        currentFieldValue={currentCommentsValue}
        label={"Comments"}
        items={comments}
        hasError={errors?.comments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("comments", currentCommentsValue)
        }
        errorMessage={errors?.comments?.errorMessage}
        getBadgeText={getDisplayValue.comments}
        setFieldValue={(model) => {
          setCurrentCommentsDisplayValue(
            model ? getDisplayValue.comments(model) : ""
          );
          setCurrentCommentsValue(model);
        }}
        inputFieldRef={commentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Comments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Comment"
          value={currentCommentsDisplayValue}
          options={commentRecords
            .filter((r) => !commentsIdSet.has(getIDValue.comments?.(r)))
            .map((r) => ({
              id: getIDValue.comments?.(r),
              label: getDisplayValue.comments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCommentsValue(
              commentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCommentsDisplayValue(label);
            runValidationTasks("comments", label);
          }}
          onClear={() => {
            setCurrentCommentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.comments?.hasError) {
              runValidationTasks("comments", value);
            }
            setCurrentCommentsDisplayValue(value);
            setCurrentCommentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("comments", currentCommentsDisplayValue)
          }
          errorMessage={errors.comments?.errorMessage}
          hasError={errors.comments?.hasError}
          ref={commentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "comments")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              comments,
              oblogID: value,
            };
            const result = onChange(modelFields);
            value = result?.oblogID ?? value;
          }
          setOblogID(value);
          setCurrentOblogIDValue(undefined);
        }}
        currentFieldValue={currentOblogIDValue}
        label={"Oblog id"}
        items={oblogID ? [oblogID] : []}
        hasError={errors?.oblogID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("oblogID", currentOblogIDValue)
        }
        errorMessage={errors?.oblogID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.oblogID(threadRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentOblogIDDisplayValue(
            value
              ? getDisplayValue.oblogID(
                  threadRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentOblogIDValue(value);
        }}
        inputFieldRef={oblogIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Oblog id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Thread"
          value={currentOblogIDDisplayValue}
          options={threadRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.oblogID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOblogIDValue(id);
            setCurrentOblogIDDisplayValue(label);
            runValidationTasks("oblogID", label);
          }}
          onClear={() => {
            setCurrentOblogIDDisplayValue("");
          }}
          defaultValue={oblogID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.oblogID?.hasError) {
              runValidationTasks("oblogID", value);
            }
            setCurrentOblogIDDisplayValue(value);
            setCurrentOblogIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("oblogID", currentOblogIDValue)}
          errorMessage={errors.oblogID?.errorMessage}
          hasError={errors.oblogID?.hasError}
          ref={oblogIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "oblogID")}
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
          isDisabled={!(idProp || postModelProp)}
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
              !(idProp || postModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
