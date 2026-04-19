import React, { useEffect, useState } from "react";
import UserInputs from "./UserInputs";
import MenuTabs from "./MenuTabs";
import toast from "react-hot-toast";

const MainBody = () => {
 const [userTemplateInfo, setUserTemplateInfo] = useState({
  firstName: "Faiyaz",
  lastName: "Mohamed",
  experience: 2.4,
  positionName: "",
  companyName: "",
  portfolioUrl: "faiyazmohamed.netlify.app",
  HrName: "Hiring Manager",
  teamManaged: 5,
  email: "faiyaz.b.mohd@gmail.com",
  phoneNumber: 7977017820,
  advertisedAt: "careers",
  roleType: "frontend",
});

  const [userInfoErrors, setUserInfoErrors] = useState({});
  const [templateWithValue, setTemplateWithValue] = useState({});

  const handleOnChange = (e) => {
    delete userInfoErrors[e.target.name];
    const name = e.target.name;
    const value = e.target.value;
    setUserTemplateInfo((prev) => ({ ...prev, [name]: value }));
  };

  const checkForErrors = () => {
    const errorObj = { ...userInfoErrors };
    let isError = false;

    userTemplateInputs?.forEach((item) => {
      if (
        userTemplateInfo[item?.name] === "" ||
        userTemplateInfo[item?.name] === 0
      ) {
        errorObj[item?.name] = item?.name + " is required";
        isError = true;
      }
    });

    setUserInfoErrors(errorObj);
    return isError;
  };

  const handleCopyClick = async (copyText, whatCopied) => {
    try {
      const isError = checkForErrors();
      if (isError) {
        toast("Fill all the fields to copy.", { icon: "❌" });
        return;
      }
      await window.navigator.clipboard.writeText(copyText);
      toast(`${whatCopied} Copied to clipboard!`, { icon: "✅" });
    } catch (err) {
      toast("Copy to clipboard failed.");
    }
  };

  useEffect(() => {
    setTemplateWithValue((prev) => {
      const isFullStack = userTemplateInfo?.roleType === "fullstack";

      // ✅ FIXED INTRO (backend only for fullstack)
      const introText = isFullStack
        ? `With ${userTemplateInfo?.experience || "[_experience_]"} year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience as a Full Stack Developer, I specialize in React.js, Next.js, and React Native, along with backend experience in Node.js and MongoDB.`
        : `With ${userTemplateInfo?.experience || "[_experience_]"} year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience in Frontend development, I specialize in React.js, Next.js, and React Native.`;

      // ✅ ALWAYS FRONTEND (NO BACKEND CLAIM)
      const gbimText = `Currently at GBIM Technologies Pvt. Ltd., I work on DMCockpit, a scalable digital marketing platform with real-time dashboards and optimized frontend architecture.`;

      // ✅ BACKEND ONLY HERE
      const boppoText = isFullStack
        ? `Previously at Boppo Technologies, I worked on Keydemand, where I led frontend development within a team of ${
            userTemplateInfo?.teamManaged || "[_team_size_]"
          } members and also contributed to backend development using Node.js and MongoDB.`
        : `Previously at Boppo Technologies, I worked on Keydemand, where I led frontend development within a team of ${
            userTemplateInfo?.teamManaged || "[_team_size_]"
          } members.`;

      return {
        ...prev,

        email: {
          subject: `Application for ${
            userTemplateInfo?.positionName || "[_position_name_]"
          } Role`,
          body: `
Dear ${userTemplateInfo?.HrName || "[_HR_name_]"},

I trust this message finds you well. I am excited to apply for the ${
            userTemplateInfo?.positionName || "[_position_name_]"
          } role at ${
            userTemplateInfo?.companyName || "[_company_name_]"
          }.

${introText}

${gbimText}

${boppoText}

I am passionate about building clean, scalable applications and continuously exploring new technologies. Joining ${
  userTemplateInfo?.companyName || "[_company_name_]"
} would be a great opportunity to contribute to your team.

I’ve attached my resume for your review. You can reach me at +91 ${
  userTemplateInfo?.phoneNumber || "[_phone_number_]"
} or ${
  userTemplateInfo?.email || "[_email_]"
}. You can also view my portfolio at ${
  userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
}.

Thank you for your time and consideration.

Best regards,  
${userTemplateInfo?.firstName || "[_first_name_]"} ${
            userTemplateInfo?.lastName || "[_last_name_]"
          }
+91 ${
  userTemplateInfo?.phoneNumber || "[_phone_number_]"
}
${
  userTemplateInfo?.email || "[_email_]"
}
          `,
        },

        coverLetter: {
          subject: `Cover Letter for ${
            userTemplateInfo?.positionName || "[_position_name_]"
          } Role`,
          body: `
Dear ${userTemplateInfo?.HrName || "[_HR_name_]"},

I am writing to express my interest in the ${
            userTemplateInfo?.positionName || "[_position_name_]"
          } role.

${introText}

${gbimText}

${boppoText}

I enjoy solving complex problems and building efficient systems and continuously exploring new technologies. Joining ${
  userTemplateInfo?.companyName || "[_company_name_]"
} would be a great opportunity to contribute to your team.

I’ve attached my resume for your review. You can reach me at +91 ${
  userTemplateInfo?.phoneNumber || "[_phone_number_]"
} or ${
  userTemplateInfo?.email || "[_email_]"
}. You can also view my portfolio at ${
  userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
}.

Thank you for your time and consideration.

Best regards,  
${userTemplateInfo?.firstName || "[_first_name_]"} ${
            userTemplateInfo?.lastName || "[_last_name_]"
          }
+91 ${
  userTemplateInfo?.phoneNumber || "[_phone_number_]"
}
${
  userTemplateInfo?.email || "[_email_]"
}
          `,
        },

        

        other: {
          selfInfo: isFullStack
            ? `I am a Full Stack Developer with ${
                userTemplateInfo?.experience || "[_experience_]"
              } year${
                userTemplateInfo?.experience <= 1 ? "" : "s"
              } of experience in React.js, Next.js, React Native, Node.js, and MongoDB. Currently at GBIM Technologies, I work on DMCockpit focusing on frontend development. Previously, I worked on Keydemand at Boppo Technologies where I contributed to backend systems along with leading frontend development within a team of ${
                userTemplateInfo?.teamManaged || "[_team_size_]"
              } members.`
            : `I am a Frontend Developer with ${
                userTemplateInfo?.experience || "[_experience_]"
              } year${
                userTemplateInfo?.experience <= 1 ? "" : "s"
              } of experience in React.js, Next.js, and React Native. Currently at GBIM Technologies, I work on DMCockpit. Previously, I led frontend development at Boppo Technologies within a team of ${
                userTemplateInfo?.teamManaged || "[_team_size_]"
              } members.`,

          coldReferral: `Hi ${
            userTemplateInfo?.HrName || "[_name_]"
          },

I’m exploring ${
            isFullStack ? "Full Stack Developer" : "Frontend Developer"
          } opportunities.

I have ${
            userTemplateInfo?.experience || "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience in React, Next.js${
            isFullStack ? ", Node.js and MongoDB (previous role)" : ""
          }.

Currently at GBIM (DMCockpit), previously led frontend at Boppo within a team of ${
            userTemplateInfo?.teamManaged || "[_team_size_]"
          } members.

Portfolio: ${
            userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
          }

Thanks!`,

          coldReferralToHR: `Hi ${
            userTemplateInfo?.HrName || "[_name_]"
          },

I hope you're doing well. I came across ${
            userTemplateInfo?.companyName || "[_company_name_]"
          } and wanted to explore opportunities for a ${
            isFullStack ? "Full Stack Developer" : "Frontend Developer"
          } role.

I have ${
            userTemplateInfo?.experience || "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience in React, Next.js${
            isFullStack ? ", Node.js and MongoDB (previous role)" : ""
          }.

Currently at GBIM Technologies, I work on DMCockpit. Previously at Boppo Technologies.

Portfolio: ${
            userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
          }

Thank you!`,

          specificReferral: `Hi ${
            userTemplateInfo?.HrName || "[_name_]"
          },

I noticed an opening for ${
            userTemplateInfo?.positionName || "[_position_name_]"
          }.

I have ${
            userTemplateInfo?.experience || "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } of experience in React, Next.js${
            isFullStack ? ", Node.js and MongoDB (previous role)" : ""
          }.

Currently at GBIM, previously at Boppo.

Portfolio: ${
            userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
          }

Thanks!`,

          specificReferralToHR: `Hi ${
            userTemplateInfo?.HrName || "[_name_]"
          },

I’m interested in ${
            userTemplateInfo?.positionName || "[_position_name_]"
          } role.

Experience: ${
            userTemplateInfo?.experience || "[_experience_]"
          } year${
            userTemplateInfo?.experience <= 1 ? "" : "s"
          } (React${
            isFullStack ? ", Node.js and MongoDB (previous role)" : ""
          }).

Portfolio: ${
            userTemplateInfo?.portfolioUrl || "[_portfolioUrl_]"
          }

Thank you!`,
        },
      };
    });
  }, [userTemplateInfo]);

  const userTemplateInputs = [
    { name: "firstName", label: "First Name", type: "input", required: true },
    { name: "lastName", label: "Last Name", type: "input", required: true },
    { name: "experience", label: "Experience", type: "input", required: true },
    { name: "positionName", label: "Position Name", type: "input", required: true },
    { name: "companyName", label: "Company Name", type: "input", required: true },
    { name: "portfolioUrl", label: "Portfolio URL", type: "input", required: true },
    { name: "HrName", label: "HR Name", type: "input", required: true },
    { name: "teamManaged", label: "Team Managed", type: "input", required: true },
    { name: "email", label: "Email", type: "input", required: true },
    { name: "phoneNumber", label: "Phone Number", type: "input", required: true },
    { name: "advertisedAt", label: "Advertised At", type: "input", required: true },
    {
      name: "roleType",
      label: "Role Type",
      type: "select",
      options: [
        { label: "Frontend Developer", value: "frontend" },
        { label: "Full Stack Developer", value: "fullstack" },
      ],
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