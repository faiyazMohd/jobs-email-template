import React from "react";
import { Label } from "@/components/components/ui/label";
import { Input } from "@/components/components/ui/input";

const UserInputs = ({
  userTemplateInfo,
  handleOnChange,
  userTemplateInputs,
  userInfoErrors,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-8">
        {userTemplateInputs?.map((item, index) => {
          const hasError = userInfoErrors[item?.name];

          return (
            <div
              key={item?.name || index}
              className="my-4 flex gap-6 justify-center items-center flex-col md:flex-row"
            >
              {/* Label */}
              <div className="w-1/3">
                <Label
                  htmlFor={item?.name}
                  className="text-lg font-medium capitalize"
                >
                  {item?.label}
                </Label>
              </div>

              {/* Input / Select */}
              <div className="w-2/3 flex flex-col items-start">
                {item?.type === "select" ? (
                  <select
                    name={item?.name}
                    value={userTemplateInfo[item?.name]}
                    onChange={handleOnChange}
                    className={`w-72 p-2 border rounded-md ${
                      hasError ? "border-red-500 border-2" : "border-gray-300"
                    }`}
                  >
                    {item?.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    name={item?.name}
                    value={userTemplateInfo[item?.name]}
                    placeholder={item?.placeholder}
                    type={item?.inputType || "text"}
                    className={`w-72 placeholder:capitalize ${
                      hasError ? "border-red-500 border-2" : ""
                    }`}
                    onChange={handleOnChange}
                  />
                )}

                {/* Error Message */}
                {hasError && (
                  <p className="text-red-500 text-sm mt-1">
                    {userInfoErrors[item?.name]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInputs;