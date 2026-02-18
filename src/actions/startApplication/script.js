const authUrlsByEnvironment = {
  uat: "https://uat.firelighteapp.com/EGApp",
  staging: "https://staging.firelighteapp.com/EGApp",
  production: "https://www.firelighteapp.com/EGApp",
};

const jurisdictionCodes = {
  AL: 1,
  AK: 2,
  AZ: 4,
  AR: 5,
  CA: 6,
  CO: 7,
  CT: 8,
  DE: 9,
  DC: 10,
  FL: 12,
  GA: 13,
  GU: 14,
  HI: 15,
  ID: 16,
  IL: 17,
  IN: 18,
  IA: 19,
  KS: 20,
  KY: 21,
  LA: 22,
  ME: 23,
  MD: 25,
  MA: 26,
  MI: 27,
  MN: 28,
  MS: 29,
  MO: 30,
  MT: 31,
  NE: 32,
  NV: 33,
  NH: 34,
  NJ: 35,
  NM: 36,
  NY: 37,
  NC: 38,
  ND: 39,
  OH: 41,
  OK: 42,
  OR: 43,
  PA: 45,
  PR: 46,
  RI: 47,
  SC: 48,
  SD: 49,
  TN: 50,
  TX: 51,
  UT: 52,
  VT: 53,
  VI: 54,
  VA: 55,
  WA: 56,
  WV: 57,
  WI: 58,
  WY: 59,
};

const CONTACT_FIELD_NAMES_TO_COMMON_TAGS = {
  email: [
    "D_Party1_Personal_EmailAddress",
    "D_Owner_Personal_EmailAddress",
    "D_Party1_Primary_EmailAddress",
    "D_Owner_Primary_EmailAddress",
    "D_Owner_EmailAddress",
    "D_OWNER_EMAIL_ADDRESS",
  ],
  street_address_1: [
    "D_Party1_ResidentialAddress1",
    "D_Owner_ResidentialAddress1",
    "D_Owner_MailingAddress1",
    "D_OWNER_ADDRESS",
  ],
  street_address_2: ["D_Party1_ResidentialAddress2", "D_Owner_ResidentialAddress2", "D_Owner_MailingAddress2"],
    "D_OWNER_CITY",
  ],
  state: ["D_Party1_ResidentialAddress_State", "D_Owner_ResidentialAddress_State", "D_Owner_MailingAddress_State"],
  zipcode: [
    "D_Party1_ResidentialAddress_Zipcode",
    "D_Owner_ResidentialAddress_Zipcode",
    "D_Owner_MailingAddress_Zipcode",
    "D_OWNER_ZIP_CODE",
  ],
  mobile_phone: [
    "D_Party1_Mobile_PhoneNumber",
    "D_Owner_Mobile_PhoneNumber",
    "D_Owner_PhoneNumber",
    "D_OWNER_PHONE_NUMBER",
    "D_Owner_Primary_PhoneNumber",
  ],
  business_phone: ["D_Party1_Business_PhoneNumber", "D_Owner_Business_PhoneNumber", "D_OWNER_BUSINESS_PHONE_NUMBER"],
  home_phone: ["D_Party1_Home_PhoneNumber", "D_Owner_Home_PhoneNumber", "D_Owner_PhoneNumber", "D_OWNER_PHONE_NUMBER"],
  medicare_number: ["D_Party1_MedicareNumber"],
  gender: ["D_Party1_Gender", "D_Owner_Gender"],
  birthday: ["D_Party1_DOB", "D_Owner_DOB", "D_OWNER_DATE_OF_BIRTH"],
  first_name: ["D_Party1_FirstName", "D_Owner_FirstName", "D_OWNER_FIRST_NAME"],
  middle_name: ["D_Owner_MiddleName"],
  last_name: ["D_Party1_LastName", "D_Owner_LastName", "D_OWNER_LAST_NAME"],
  age: ["D_Party1_Age", "D_Owner_Age"],
  full_name: ["D_Party1_FullName", "D_Owner_FullName", "D_OWNER_FULL_NAME"],
  ssn: ["D_Owner_SSN"],
  country: ["D_Owner_MailingAddress_Country"],
};

const DEFAULT_COMMON_TAG_VALUES = {
  D_Owner_MailingAddress_Country: "USA",
};

const GENDER_FIELD_VALUE_TO_CODE_VALUE = {
  male: "OLI_GENDER_MALE",
  female: "OLI_GENDER_FEMALE",
  unisex: "OLI_GENDER_UNISEX",
  intersex: "OLI_GENDER_INTERSEX",
};

const PRODUCT_TYPES = {
  life: 1,
  annuity: 2,
  disabilityincome: 3,
  longtermcare: 4,
  fixedannuity: 5,
  variableannuity: 6,
  termlife: 7,
  universallife: 8,
  wholelife: 9,
  immediateannuity: 10,
  equityindexedannuity: 11,
  variableuniversallife: 12,
  fixedindexedannuity: 13,
  deferredincomeannuity: 14,
  medicaresupplement: 15,
  multiyearguaranteedannuity: 16,
  singlepremiumimmediateannuity: 17,
  groupannuity: 18,
  noninsuranceproduct: 19,
  indexedvariableannuity: 20,
  hospitalindemnity: 21,
  overheadexpense: 23,
  disabilitybuyout: 24,
  permanentlifeinsurance: 25,
  accidentandhealth: 26,
  quote: 27,
  singlepremiumdeferredannuity: 28,
  indexeduniversallife: 29,
  contingentdeferredannuity: 30,
  property: 45,
  thirdpartyadvisoryprograms: 46,
  mutualfunddirect: 47,
  "529plans": 48,
  "1031exchanges": 49,
  multifund: 50,
  commissionbasedretirementplans: 51,
  feebasedretirementplans: 52,
  changeofbrokerdealerrequest: 53,
  homeoffice: 54,
  registeredindexedannuity: 56,
  training: 99,
  corporateforms: 100,
  combo: 101,
  lifeinsurance: 102,
  mutualfundcustodialaccount: 103,
  serviceforms: 104,
  annuitybeneficiaryclaim: 106,
  keypersonreplacement: 107,
  mutualfund: 109,
  subscriptiondocuments: 110,
  reserviceproduct: 111,
  traditionalfixedannuity: 112,
  registeredretirementincomefund: 113,
  rrsptosinglepremwholelife: 114,
  disabilityincomeconversion: 115,
  disabilityincomeincrease: 116,
  presalesuitabilityreview: 117,
  policychange: 118,
  paperupload: 120,
  illustrationproposal: 121,
  fundingagreement: 122,
};

const ENROLLMENT_FIELDS_TO_POPULATE = ["name", "stage", "enrollment_code", "description", "product"];

const APPLICATION_ACCORD_TYPE_CODE = 103;
const APPLICATION_ERROR_ID = "00000000-0000-0000-0000-000000000000";
const PRODUCT_NOT_FOUND_ERROR = "No product found.";

// Firelight APIs
const fireLightBaseUrl = authUrlsByEnvironment[this.args.environment];
if (!this.args.environment) {
  throw new Error(
    "Please contact your administrator to configure your Hexure FireLight integration",
  );
}
const authUrl = `${fireLightBaseUrl}/SSOGateway/TokenGateway`;

// Based on django admin configs
const pluginApiName = "hexure_firelight";
const serviceName = "hexure";

// Firelight APIs via Kizen Proxy
const kizenExternalIntegrationBaseUrl = `/external-integrations/proxy/${pluginApiName}/${serviceName}/quoting-api`;
const fetchProductByJurisdictionUrl = `${kizenExternalIntegrationBaseUrl}/ProductAvailability/GetProductAvailability`;
const createApplicationUrl = `${kizenExternalIntegrationBaseUrl}/Activity/CreateActivity`;
const newApplicationRedirectUrl = (applicationId) =>
  `${fireLightBaseUrl}/EditWizardApplication?AppGuid=${applicationId}&RecordMetric=True`;

// Kizn APIs
const fetchFireLightAuthTokenUrl = `/firelight-integration/auth-token-agent`;
const fetchKizenContactFieldUrl = `/client/custom-object/detail`;
const fetchKizenCustomObject = "/custom-objects";
const fetchKizenCustomObjectFields = (objectId = "") => `/custom-objects/${objectId}/fields/search`;
const createRecordUrl = (objectId = "") => `/records/${objectId}/add`;
const getRecordUrl = (objectId = "", recordId = "", fieldNames = "") =>
  `/records/${objectId}/${recordId}?field_names=${fieldNames}`;

// firelight auth
const authResponse = await Promise.race([
  this.get(fetchFireLightAuthTokenUrl),
  new Promise((resolve) => {
    setTimeout(() => resolve({ error: true }), 7000);
  }),
]);

// Check current enrollments for contact
const contact = await this.currentEntity();

const contactFieldResponse = await this.get(fetchKizenContactFieldUrl);

const contactFieldMap = contactFieldResponse.fields.reduce((acc, curr) => {
  acc[curr.name] = curr;
  return acc;
});

const contactRelatedEnrollmentField = contactFieldMap.enrollments;

const enrollmentObjectId = contactFieldMap.enrollments?.relation?.related_object;

const currentEnrollemntValues = contact.fields.filter(({ field }) => field === contactRelatedEnrollmentField.id);

const enrollmentStatusFields = await Promise.all(
  currentEnrollemntValues.map(({ value }) =>
    this.get(getRecordUrl(enrollmentObjectId, value, "stage,enrollment_code,created,product")),
  ),
);

const enrollmentStatusFieldsMap = enrollmentStatusFields.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

const filteredEnrollmentValues = currentEnrollemntValues.reduce((acc, record) => {
  const foundEnrollmentStatusField = enrollmentStatusFieldsMap[record.value];
  const { stageField, enrollmentCodeField, createdField, productField } = Object.values(
    foundEnrollmentStatusField?.fields,
  ).reduce(
    (accumulatedFields, curr) => {
      if (curr.name === "stage") {
        accumulatedFields.stageField = curr;
      } else if (curr.name === "enrollment_code") {
        accumulatedFields.enrollmentCodeField = curr;
      } else if (curr.name === "created") {
        accumulatedFields.createdField = curr;
      } else if (curr.name === "product") {
        accumulatedFields.productField = curr;
      }
      return accumulatedFields;
    },
    {
      stageField: {},
      enrollmentCodeField: {},
      createdField: {},
      productField: {},
    },
  );

  if (stageField?.value?.name === "Started") {
    const date = new Date(createdField.value);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const createDateFormated = `Started ${month}/${day}/${year}`;

    acc.push({
      name: `${createDateFormated ? `${createDateFormated} | ` : ""}${
        productField?.value?.name ? `${productField.value.name} Product | ` : ""
      }${record.name}`,
      value: enrollmentCodeField.value,
    });
  }

  return acc;
}, []);

// Prompt to resume started application
if (filteredEnrollmentValues.length > 0) {
  let resumePromptResponse = {};

  while (!resumePromptResponse.eventSource && !resumePromptResponse.values?.resumeApplicationId) {
    resumePromptResponse = await this.prompt({
      title: "Resume Application",
      confirmButton: {
        label: "Resume",
        variant: "standard",
        color: "secondary",
      },
      cancelButton: {
        label: "Start New",
        variant: "text",
        color: "secondary",
      },
      content: [
        {
          type: "description",
          content: "Resume the saved application or start a new one?",
          widthPercent: 100,
        },
        {
          type: "dropdown",
          id: "resumeApplicationId",
          placeholder: "Choose an Application",
          multiselect: false,
          label: "Application Id(s)",
          options: filteredEnrollmentValues.map(({ name, value }) => {
            return {
              label: name,
              value: value,
            };
          }),
        },
      ],
    });
  }

  if (resumePromptResponse.canceled && resumePromptResponse.eventSource === "close") {
    return;
  } else if (resumePromptResponse.values) {
    const { resumeApplicationId } = resumePromptResponse.values;

    if (resumeApplicationId) {
      await this.postFormData(
        `${authUrl}?appid=${resumeApplicationId.value}`,
        {
          Token: authResponse.access_token,
        },
        true,
      );

      return;
    }
  }
}

// prompt to select jurisdiction
let juridictionPromptResponseData;

while (!juridictionPromptResponseData?.values?.jurisdiction?.value) {
  juridictionPromptResponseData = await this.prompt({
    title: "Start Application in FireLight",
    confirmButton: {
      label: "Next",
      variant: "standard",
      color: "secondary",
    },
    cancelButton: {
      label: "Cancel",
      variant: "text",
      color: "secondary",
    },
    content: [
      {
        type: "dropdown",
        id: "jurisdiction",
        placeholder: "Choose a Jurisdiction",
        multiselect: false,
        label: "Jurisdiction",
        options: Object.keys(jurisdictionCodes).map((key) => {
          return {
            label: key,
            value: jurisdictionCodes[key],
          };
        }),
      },
    ],
  });

  if (juridictionPromptResponseData.canceled) {
    return;
  }
}

// fetch products by jurisdiction
const productsByJurisdictionRequestBody = {
  JurisdictionIds: [juridictionPromptResponseData?.values?.jurisdiction?.value],
};

const productResponseData = await this.post(fetchProductByJurisdictionUrl, productsByJurisdictionRequestBody, {
  headers: {
    "X-Proxy-Authorization": `Bearer ${authResponse.access_token}`,
    "Content-Type": "application/json",
  },
});

if (!productResponseData?.Products) {
  throw new Error("Failed to Fetch Products");
}

const groups = {};

for (const { ProductName, ProductOrganizationName, CUSIP } of productResponseData.Products) {
  const label = ProductName.includes(ProductOrganizationName)
    ? ProductName
    : `${ProductName} (${ProductOrganizationName})`;

  const option = { label, value: CUSIP };

  if (!groups[ProductOrganizationName]) {
    groups[ProductOrganizationName] = {
      label: ProductOrganizationName,
      options: [],
      id: ProductOrganizationName,
    };
  }

  groups[ProductOrganizationName].options.push(option);
}

const productOptions = Object.values(groups)
  .map((group) => ({
    ...group,
    options: group.options.sort((a, b) => a.label.localeCompare(b.label)),
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

// prompt to select product and start application
let productPromptResponseData;

while (!productPromptResponseData?.values?.product?.value) {
  productPromptResponseData = await this.prompt({
    title: "Start Application in FireLight",
    confirmButton: {
      label: "Start Application",
      variant: "standard",
      color: "primary",
    },
    cancelButton: {
      label: "Cancel",
      variant: "text",
      color: "secondary",
    },
    content: [
      {
        type: "dropdown",
        id: "product",
        placeholder: "Choose a Product",
        multiselect: false,
        label: "Product",
        options: productOptions,
      },
    ],
  });

  if (productPromptResponseData.canceled) {
    return;
  }
}

// Build and Send Application
const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const contactFieldsForApplication = contactFieldResponse.fields.reduce((acc, curr) => {
  if (Object.keys(CONTACT_FIELD_NAMES_TO_COMMON_TAGS).includes(curr.name)) {
    switch (curr.name) {
      case "birthday":
        const birthDayValue = contact.birthday;
        acc[curr.name] = { value: birthDayValue };
        acc.age = { value: calculateAge(birthDayValue) }; // for birthday we calculate age manually

        break;
      case "gender":
        const genderField = contact?.fields?.find((f) => f.field === curr.id);
        acc[curr.name] = {
          value: GENDER_FIELD_VALUE_TO_CODE_VALUE[genderField?.name.toLowerCase()],
        }; // apply gender code mapping

        break;
      case "first_name":
        acc[curr.name] = { value: contact.first_name };
        acc.full_name = { value: contact.full_name };

        break;
      case "last_name":
        acc[curr.name] = { value: contact.last_name };

        break;
      case "email":
        acc[curr.name] = { value: contact.email };

        break;
      case "mobile_phone":
        acc[curr.name] = { value: contact.mobile_phone };

        break;
      case "business_phone":
        acc[curr.name] = { value: contact.business_phone };

        break;
      case "home_phone":
        acc[curr.name] = { value: contact.home_phone };

        break;
      default:
        const contactField = contact?.fields?.find((f) => f.field === curr.id);

        acc[curr.name] = {
          value: contactField?.value,
          valueName: contactField?.valueName ?? contactField?.name,
        };

        break;
    }
  }
  return acc;
}, {});

const dataItems = [
  ...Object.keys(contactFieldsForApplication)
    .reduce((acc, name) => {
      CONTACT_FIELD_NAMES_TO_COMMON_TAGS[name].forEach((commonTag) => {
        acc.push({
          DataItemId: commonTag,
          Value: contactFieldsForApplication[name].valueName ?? contactFieldsForApplication[name].value,
        });
      });
      return acc;
    }, [])
    .filter(({ Value }) => Value !== undefined),
  ...Object.entries(DEFAULT_COMMON_TAG_VALUES).map(([commonTag, value]) => ({
    DataItemId: commonTag,
    Value: value,
  })),
];

const createApplicationRequestBody = {
  CUSIP: productPromptResponseData?.values?.product?.value,
  Jurisdiction: juridictionPromptResponseData?.values?.jurisdiction?.value,
  CarrierCode: productResponseData.Products.find(
    ({ CUSIP }) => CUSIP === productPromptResponseData?.values?.product?.value,
  )?.CarrierCode,
  AcordTypeCode: APPLICATION_ACCORD_TYPE_CODE,
  AcordSubTypeCode: "",
  DataItems: dataItems,
};

const createApplicationResponseData = await this.post(createApplicationUrl, createApplicationRequestBody, {
  headers: {
    "X-Proxy-Authorization": `Bearer ${authResponse.access_token}`,
    "Content-Type": "application/json",
  },
});

if (
  createApplicationResponseData?.ActivityId === APPLICATION_ERROR_ID &&
  createApplicationResponseData?.Messages?.[0] === PRODUCT_NOT_FOUND_ERROR
) {
  throw new Error("Product not found for the selected jurisdiction.");
} else if (
  createApplicationResponseData?.ActivityId === APPLICATION_ERROR_ID &&
  createApplicationResponseData?.Messages?.length > 0
) {
  throw new Error(`${createApplicationResponseData?.Messages?.[0]}`);
} else if (
  !createApplicationResponseData?.ActivityId ||
  createApplicationResponseData?.ActivityId === APPLICATION_ERROR_ID
) {
  throw new Error("Failed to create application: Please try again.");
}

// Create Related Enrollment Record
const applicationId = createApplicationResponseData.ActivityId;

if (!enrollmentObjectId) {
  throw new Error("Could not find enrollment object to create related record");
}

const enrollmentFields = await this.post(fetchKizenCustomObjectFields(enrollmentObjectId), {});

if (!enrollmentFields || enrollmentFields?.length === 0) {
  throw new Error(`Could not find enrollment field to create related record`);
}

const nameField = enrollmentFields.find(({ name }) => name === "name");
const enrollmentFieldsMap = enrollmentFields.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.name]: curr,
  };
});

const primaryApplicantFallback = enrollmentFields.find(({ name }) => name === "primary_applicant");

enrollmentFieldsMap["custom_name"] = {
  ...nameField,
};

const enrollmentFieldsToPopulate = ENROLLMENT_FIELDS_TO_POPULATE.map((fieldName) => {
  const field = enrollmentFieldsMap[fieldName === "name" ? "custom_name" : fieldName]; // support name field
  return field;
});

const fieldValues = enrollmentFields.reduce(
  (acc, field) => {
    if (field.name === "stage") {
      acc.stage = field;
    } else if (field.name === "product") {
      acc.product = field;
    }
    return acc;
  },
  { stage: {}, product: {} },
);

const { stage: stageField, product: productField } = fieldValues;

const stageValue = stageField?.options?.find(({ name }) => name === "Started")?.id;

const enrollmentProduct = productResponseData.Products.find(
  ({ CUSIP }) => CUSIP === productPromptResponseData?.values?.product?.value,
);

const choosenProductTypeName = Object.keys(PRODUCT_TYPES)
  .find((key) => PRODUCT_TYPES[key] === enrollmentProduct.Type)
  .replace(/\s+/g, "")
  .toLowerCase();

const productType = productField.options.find(
  ({ name }) => name.replace(/\s+/g, "").toLowerCase() === choosenProductTypeName,
);

const enrollmentValuesByFieldName = {
  name: `FL-${applicationId}`,
  stage: stageValue,
  enrollment_code: applicationId,
  description: `Product Name: ${enrollmentProduct.ProductName} \nCUSIP: ${enrollmentProduct.CUSIP}`,
  product: productType?.id,
};

const createRelatedEnrollmentPayload = {
  fields: enrollmentFieldsToPopulate
    .map(({ id, name }) => {
      if (enrollmentValuesByFieldName[name]) {
        return {
          id,
          value: enrollmentValuesByFieldName[name],
        };
      }
    })
    .filter((field) => Boolean(field) && field.value && field.id)
    .concat({
      id: enrollmentFieldsMap?.primary_applicant?.id ?? primaryApplicantFallback?.id,
      value: contact.id,
    }),
};

const createRelatedRecordResponse = await this.post(
  createRecordUrl(enrollmentObjectId),
  createRelatedEnrollmentPayload,
);

if (!createRelatedRecordResponse || !createRelatedRecordResponse.id) {
  this.showToast(
    "Application created, but failed to create related enrollment record",
    {
      variant: "failure",
    },
  );
} else {
  this.showToast("Successfully Created Application and Enrollment Record", {
    variant: "success",
  });

  this.refreshEntity(contact.id);
}

if (authUrl && applicationId && authResponse) {
  await this.postFormData(
    `${authUrl}?appid=${applicationId}`,
    {
      Token: authResponse.access_token,
    },
    true,
  );
}
