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
import { User, ProfileExplorer } from "../models";
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
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    graduatingYear: "",
    asExplorer: undefined,
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [graduatingYear, setGraduatingYear] = React.useState(
    initialValues.graduatingYear
  );
  const [asExplorer, setAsExplorer] = React.useState(initialValues.asExplorer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord, asExplorer }
      : initialValues;
    setEmail(cleanValues.email);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setGraduatingYear(cleanValues.graduatingYear);
    setAsExplorer(cleanValues.asExplorer);
    setCurrentAsExplorerValue(undefined);
    setCurrentAsExplorerDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
      const asExplorerRecord = record ? await record.asExplorer : undefined;
      setAsExplorer(asExplorerRecord);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord, asExplorer]);
  const [currentAsExplorerDisplayValue, setCurrentAsExplorerDisplayValue] =
    React.useState("");
  const [currentAsExplorerValue, setCurrentAsExplorerValue] =
    React.useState(undefined);
  const asExplorerRef = React.createRef();
  const getIDValue = {
    asExplorer: (r) => JSON.stringify({ id: r?.id }),
  };
  const asExplorerIdSet = new Set(
    Array.isArray(asExplorer)
      ? asExplorer.map((r) => getIDValue.asExplorer?.(r))
      : getIDValue.asExplorer?.(asExplorer)
  );
  const profileExplorerRecords = useDataStoreBinding({
    type: "collection",
    model: ProfileExplorer,
  }).items;
  const getDisplayValue = {
    asExplorer: (r) => `${r?.screenName ? r?.screenName + " - " : ""}${r?.id}`,
  };
  const validations = {
    email: [],
    firstName: [],
    lastName: [],
    graduatingYear: [],
    asExplorer: [],
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
          email,
          firstName,
          lastName,
          graduatingYear,
          asExplorer,
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
          const profileExplorerToUnlink = await userRecord.asExplorer;
          if (profileExplorerToUnlink) {
            promises.push(
              DataStore.save(
                ProfileExplorer.copyOf(profileExplorerToUnlink, (updated) => {
                  updated.byUser = undefined;
                  updated.profileExplorerByUserId = undefined;
                })
              )
            );
          }
          const profileExplorerToLink = modelFields.asExplorer;
          if (profileExplorerToLink) {
            promises.push(
              DataStore.save(
                ProfileExplorer.copyOf(profileExplorerToLink, (updated) => {
                  updated.byUser = userRecord;
                })
              )
            );
            const userToUnlink = await profileExplorerToLink.byUser;
            if (userToUnlink) {
              promises.push(
                DataStore.save(
                  User.copyOf(userToUnlink, (updated) => {
                    updated.asExplorer = undefined;
                    updated.userAsExplorerId = undefined;
                  })
                )
              );
            }
          }
          promises.push(
            DataStore.save(
              User.copyOf(userRecord, (updated) => {
                Object.assign(updated, modelFields);
                if (!modelFields.asExplorer) {
                  updated.userAsExplorerId = undefined;
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              firstName,
              lastName,
              graduatingYear,
              asExplorer,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstName: value,
              lastName,
              graduatingYear,
              asExplorer,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName: value,
              graduatingYear,
              asExplorer,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Graduating year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={graduatingYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName,
              graduatingYear: value,
              asExplorer,
            };
            const result = onChange(modelFields);
            value = result?.graduatingYear ?? value;
          }
          if (errors.graduatingYear?.hasError) {
            runValidationTasks("graduatingYear", value);
          }
          setGraduatingYear(value);
        }}
        onBlur={() => runValidationTasks("graduatingYear", graduatingYear)}
        errorMessage={errors.graduatingYear?.errorMessage}
        hasError={errors.graduatingYear?.hasError}
        {...getOverrideProps(overrides, "graduatingYear")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName,
              graduatingYear,
              asExplorer: value,
            };
            const result = onChange(modelFields);
            value = result?.asExplorer ?? value;
          }
          setAsExplorer(value);
          setCurrentAsExplorerValue(undefined);
          setCurrentAsExplorerDisplayValue("");
        }}
        currentFieldValue={currentAsExplorerValue}
        label={"As explorer"}
        items={asExplorer ? [asExplorer] : []}
        hasError={errors?.asExplorer?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("asExplorer", currentAsExplorerValue)
        }
        errorMessage={errors?.asExplorer?.errorMessage}
        getBadgeText={getDisplayValue.asExplorer}
        setFieldValue={(model) => {
          setCurrentAsExplorerDisplayValue(
            model ? getDisplayValue.asExplorer(model) : ""
          );
          setCurrentAsExplorerValue(model);
        }}
        inputFieldRef={asExplorerRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="As explorer"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProfileExplorer"
          value={currentAsExplorerDisplayValue}
          options={profileExplorerRecords
            .filter((r) => !asExplorerIdSet.has(getIDValue.asExplorer?.(r)))
            .map((r) => ({
              id: getIDValue.asExplorer?.(r),
              label: getDisplayValue.asExplorer?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAsExplorerValue(
              profileExplorerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAsExplorerDisplayValue(label);
            runValidationTasks("asExplorer", label);
          }}
          onClear={() => {
            setCurrentAsExplorerDisplayValue("");
          }}
          defaultValue={asExplorer}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.asExplorer?.hasError) {
              runValidationTasks("asExplorer", value);
            }
            setCurrentAsExplorerDisplayValue(value);
            setCurrentAsExplorerValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("asExplorer", currentAsExplorerDisplayValue)
          }
          errorMessage={errors.asExplorer?.errorMessage}
          hasError={errors.asExplorer?.hasError}
          ref={asExplorerRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "asExplorer")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
