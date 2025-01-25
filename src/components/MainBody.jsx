import React, { useEffect, useState } from "react";
import UserInputs from "./UserInputs";
import MenuTabs from "./MenuTabs";
import toast from "react-hot-toast";

const MainBody = () => {
  const [userTemplateInfo, setUserTemplateInfo] = useState({
    firstName: "Faiyaz",
    lastName: "Mohamed",
    experience: 1.1,
    positionName: "",
    companyName: "",
    portfolioUrl: "faiyazmohamed.netlify.app",
    HrName: "Hiring Manager",
    teamManaged: 5,
    email: "faiyaz.b.mohd@gmail.com",
    phoneNumber: 7977017820,
    advertisedAt: "careers",
  });

  const [userInfoErrors, setUserInfoErrors] = useState({});

  const [templateWithValue, setTemplateWithValue] = useState({});

  console.log({ userTemplateInfo });
  console.log({ userInfoErrors });

  const handleOnChange = (e) => {
    delete userInfoErrors[e.target.name];
    const name = e.target.name;
    const value = e.target.value;
    setUserTemplateInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const checkForErrors = () => {
    // Object.keys(userTemplateInfo).map((key) => {
    //   userTemplateInfo[key] === "" || userTemplateInfo[key] === 0;

    // });
    const errorObj = { ...userInfoErrors };
    let isError = false;
    userTemplateInputs?.map((item, index) => {
      if (
        userTemplateInfo[item?.name] === "" ||
        userTemplateInfo[item?.name] === 0
      ) {
        errorObj[item?.name] = item?.name + " is required";
        isError = true;
      }
      return item;
    });

    setUserInfoErrors(errorObj);
    return isError;
  };

  const handleCopyClick = async (copyText, whatCopied) => {
    try {
      const isError = checkForErrors();
      if (isError) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        toast("Fill all the fields to copy.", { icon: "❌" });
        return;
      }
      await window.navigator.clipboard.writeText(copyText);
      toast(`${whatCopied} Copied to clipboard!`, { icon: "✅" });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast("Copy to clipboard failed.");
    }
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
            userTemplateInfo?.experience <= 1 ? "" : "s"
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
          }. Additionally, you can view my portfolio at ${
            userTemplateInfo?.portfolioUrl
              ? userTemplateInfo?.portfolioUrl
              : "[_portfolioUrl_]"
          } for examples of my work.

Thank you for considering my application. I look forward to the possibility of contributing to your team's success.

Best regards,
${
  userTemplateInfo?.firstName ? userTemplateInfo?.firstName : "[_first_name_]"
} ${userTemplateInfo?.lastName ? userTemplateInfo?.lastName : "[_last_name_]"}

            `,
        },
        coverLetter: {
          subject: `Cover Letter for ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          } Role`,
          body: `
Dear ${userTemplateInfo?.HrName ? userTemplateInfo?.HrName : "[_HR_name_]"},
      
I trust this message finds you well. I am writing to express my keen interest in the ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          } role at ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          }, as advertised on ${
            userTemplateInfo?.advertisedAt
              ? userTemplateInfo?.advertisedAt
              : "[_advertised_at_]"
          }.

With ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience > 1 ? "s" : ""
          } of experience in frontend development, I have gained extensive expertise in React JS, React Native, and Next.js. During my tenure at Boppo Technologies Pvt. Ltd., I contributed to scalable, efficient projects and successfully managed the frontend development of a team-driven project with ${
            userTemplateInfo?.teamManaged
              ? userTemplateInfo?.teamManaged
              : "[_no_of_team_members_]"
          } members, delivering user-focused solutions.

I am passionate about solving complex challenges through clean, maintainable code and leveraging new technologies to drive innovation. Joining ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          } would allow me to contribute my skills while continuing to grow as a developer.

I have attached my resume for your review and would be delighted to discuss how my skills and experience align with the requirements of the role. Please feel free to contact me at +91 ${
            userTemplateInfo?.phoneNumber
              ? userTemplateInfo?.phoneNumber
              : "[_phone_number_]"
          } or ${
            userTemplateInfo?.email ? userTemplateInfo?.email : "[_email_]"
          } to arrange a discussion.

Thank you for considering my application. I look forward to the opportunity to contribute to your team's success.

Best regards,
${
  userTemplateInfo?.firstName ? userTemplateInfo?.firstName : "[_first_name_]"
} ${userTemplateInfo?.lastName ? userTemplateInfo?.lastName : "[_last_name_]"}
${
  userTemplateInfo?.portfolioUrl
    ? userTemplateInfo?.portfolioUrl
    : "[_portfolio_url_]"
}
    `,
        },
        other: {
          selfInfo: `I am a Frontend Developer with ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience specializing in React.js, React Native, and Next.js. At Boppo Technologies, I contributed to scalable web and mobile applications and even managed the frontend for a project with a team of ${
            userTemplateInfo?.teamManaged
              ? userTemplateInfo?.teamManaged
              : "[_no_of_team_members_]"
          }. I’m passionate about learning new technologies, solving challenging problems, and delivering seamless user experiences. I’m particularly excited about opportunities where I can grow further as a developer while contributing to impactful projects.`,
          coldReferral: `Hi ${
            userTemplateInfo?.HrName
              ? userTemplateInfo?.HrName
              : "[_position_name_]"
          },

I hope you’re doing well. I noticed that you’re working at ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          } as a ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          }, and I’m truly inspired by the work your company is involved in.

I’m currently exploring opportunities for a Frontend developer Role and was wondering if you could kindly refer me for any suitable openings at your company. I have ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience working with React, React Native, and Next.js.

You can also visit my portfolio at ${
            userTemplateInfo?.portfolioUrl
              ? userTemplateInfo?.portfolioUrl?.startsWith("https://")
                ? userTemplateInfo?.portfolioUrl
                : "https://" + userTemplateInfo?.portfolioUrl
              : "[_portfolioUrl_]"
          } to check out some of the projects I’ve worked on.

Let me know if you’d like me to share my resume or any other details. I’d really appreciate your support.

Thank you so much!`,
          coldReferralToHR: `Hi ${
            userTemplateInfo?.HrName
              ? userTemplateInfo?.HrName
              : "[_position_name_]"
          },

I hope you're doing well. I came across ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          } and was really impressed with the work your team is doing.

I’m currently looking for opportunities for a Frontend developer Role at your company, and I wanted to ask if there are any suitable openings available.  I have ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience working with React, React Native, and Next.js.

You can also visit my portfolio at ${
            userTemplateInfo?.portfolioUrl
              ? userTemplateInfo?.portfolioUrl?.startsWith("https://")
                ? userTemplateInfo?.portfolioUrl
                : "https://" + userTemplateInfo?.portfolioUrl
              : "[_portfolioUrl_]"
          } to check out some of the projects I’ve worked on.

Let me know if you’d like me to share my resume or any other details. I’d really appreciate your support.

Thank you so much!`,
          specificReferral: `Hi ${
            userTemplateInfo?.HrName
              ? userTemplateInfo?.HrName
              : "[_position_name_]"
          },

I hope you’re doing well. I noticed that you’re working at ${
            userTemplateInfo?.companyName
              ? userTemplateInfo?.companyName
              : "[_company_name_]"
          } as a [_position_working_as_], and I saw that there’s an opening for the ${
            userTemplateInfo?.positionName
              ? userTemplateInfo?.positionName
              : "[_position_name_]"
          } position.

I’m currently exploring opportunities for a Frontend developer Role and was wondering if you could kindly refer me for this role. I have ${
            userTemplateInfo?.experience
              ? userTemplateInfo?.experience
              : "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience working with React, React Native, and Next.js and believe I’d be a great fit for the team.

Feel free to check out my portfolio at ${
            userTemplateInfo?.portfolioUrl
              ? userTemplateInfo?.portfolioUrl?.startsWith("https://")
                ? userTemplateInfo?.portfolioUrl
                : "https://" + userTemplateInfo?.portfolioUrl
              : "[_portfolioUrl_]"
          } to get an overview of the projects I’ve worked on.

Let me know if you’d like me to share my resume or any other details. I’d really appreciate your support.

Thank you so much for your time!`,
          specificReferralToHR: `Hi ${
            userTemplateInfo?.HrName
              ? userTemplateInfo?.HrName
              : "[_position_name_]"
          },

I hope you're doing well. I noticed that there’s an opening for the ${
  userTemplateInfo?.positionName
    ? userTemplateInfo?.positionName
    : "[_position_name_]"
} position at ${
  userTemplateInfo?.companyName
    ? userTemplateInfo?.companyName
    : "[_company_name_]"
}, and I wanted to reach out to express my interest.

I have ${
  userTemplateInfo?.experience
    ? userTemplateInfo?.experience
    : "[_experience_]"
} year${
  userTemplateInfo?.experience <= 1 ? "" : "s"
} of experience with React, React Native, Next.js and believe I would be a great fit for the role. I’d be grateful if you could consider my profile for this position.

Feel free to check out my portfolio at ${
            userTemplateInfo?.portfolioUrl
              ? userTemplateInfo?.portfolioUrl?.startsWith("https://")
                ? userTemplateInfo?.portfolioUrl
                : "https://" + userTemplateInfo?.portfolioUrl
              : "[_portfolioUrl_]"
          } to get an overview of the projects I’ve worked on.

Please let me know if you need any additional information or my resume. Thank you so much for your time and support!

Best regards,
${
  userTemplateInfo?.firstName ? userTemplateInfo?.firstName : "[_first_name_]"
} ${userTemplateInfo?.lastName ? userTemplateInfo?.lastName : "[_last_name_]"}`,
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
      name: "portfolioUrl",
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
        userInfoErrors={userInfoErrors}
      />
      <MenuTabs
        templateWithValue={templateWithValue}
        handleCopyClick={handleCopyClick}
      />
    </>
  );
};

export default MainBody;
