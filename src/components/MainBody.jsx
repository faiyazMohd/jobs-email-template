import React, { useEffect, useState } from "react";
import UserInputs from "./UserInputs";
import MenuTabs from "./MenuTabs";

const MainBody = () => {
  const [userTemplateInfo, setUserTemplateInfo] = useState({
    firstName: "Faiyaz",
    lastName: "Mohamed",
    experience: 1.1,
    positionName: "React Js",
    companyName: "Google",
    porfolioUrl: "faiyazmohamed.netlify.app",
    HrName: "Hiring Manager",
    teamManaged: 5,
    email: "faiyaz.b.mohd@gmail.com",
    phoneNumber: 7977017820,
    advertisedAt: "careers",
  });

  const [templateWithValue, setTemplateWithValue] = useState({});

  console.log({ userTemplateInfo });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserTemplateInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    setTemplateWithValue((prev) => {
      return {
        ...prev,
        email: {
          subject: `Application for ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          } Role`,
          body: `
Dear ${
            userTemplateInfo?.HrName
              ? userTemplateInfo?.HrName
              : "[_position_name_]"
          },

I trust this message finds you well. I am excited to apply for the ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          } role at ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          }, as advertised on your ${
            userTemplateInfo?.advertisedAt
              ? userTemplateInfo?.advertisedAt
              : "[_advertised_at_]"
          } page.

With ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience > 1 ? "s" : ""
          } of experience in frontend development, I have gained extensive expertise in React JS, React Native, and Next.js. At Boppo Technologies Pvt. Ltd., I contributed to scalable, efficient projects and managed the frontend of a team-driven project with ${
            userTemplateInfo?.teamManaged
              ? userTemplateInfo?.teamManaged
              : "[_no_of_team_members_]"
          } members, delivering user-focused solutions.

I am passionate about crafting clean, scalable code and exploring new technologies to drive innovation. Joining ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          } would be an excellent opportunity to contribute my skills to your forward-thinking team.

I have attached my resume for your review and would be delighted to discuss my skills further. Please feel free to reach out at +91 ${
            userTemplateInfo?.phoneNumber
              ? userTemplateInfo?.phoneNumber
              : "[_phone_number_]"
          } or ${
            userTemplateInfo?.email ? userTemplateInfo?.email : "[_email_]"
          }.

Thank you for considering my application. I look forward to the possibility of contributing to your team's success.

Best regards,
${
  userTemplateInfo?.firstName ? userTemplateInfo?.firstName : "[_first_name_]"
} ${userTemplateInfo?.lastName ? userTemplateInfo?.lastName : "[_last_name_]"}
${
  userTemplateInfo?.porfolioUrl
    ? userTemplateInfo?.porfolioUrl
    : "[_porfolioUrl_]"
}
            `,
        },
      };
    });
  }, [userTemplateInfo]);
  const userTemplateInputs = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter First Name",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "experience",
      label: "experience",
      placeholder: "Enter total experience",
      type: "input",
      inputType: "numeric",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "positionName",
      label: "position Name",
      placeholder: "Enter Position Name",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "companyName",
      label: "company Name",
      placeholder: "Enter company Name",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "porfolioUrl",
      label: "porfolio Url",
      placeholder: "Enter porfolio Url",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "HrName",
      label: "HR Name",
      placeholder: "Enter HR Name",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "teamManaged",
      label: "team Managed",
      placeholder: "Enter team Managed",
      type: "input",
      inputType: "numeric",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "email",
      label: "email",
      placeholder: "Enter email",
      type: "input",
      inputType: "email",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
      type: "input",
      inputType: "numeric",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
    {
      name: "advertisedAt",
      label: "Advertised At",
      placeholder: "Enter Advertised At",
      type: "input",
      inputType: "text",
      disabled: false,
      // errorMessage: "First Name is required",
      required: true,
    },
  ];
  return (
    <>
      <UserInputs
        userTemplateInfo={userTemplateInfo}
        handleOnChange={handleOnChange}
        userTemplateInputs={userTemplateInputs}
      />
      <MenuTabs templateWithValue={templateWithValue} />
    </>
  );
};

export default MainBody;
