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
      <div className=" mt-8">
        {userTemplateInputs?.map((item, index) => {
          return (
            <div className="my-4 flex gap-6 justify-center items-center flex-col md:flex-row">
              <div className="w-1/3">
                <Label
                  htmlFor={item?.name}
                  className="text-lg font-medium capitalize"
                >
                  {item?.label}
                </Label>
              </div>
              <div className="w-2/3 flex justify-center items-center">
                <Input
                  name={item?.name}
                  value={userTemplateInfo[item?.name]}
                  placeholder={item?.placeholder}
                  className={`w-72 placeholder:capitalize ${userInfoErrors[item?.name] ? "border-red-500 border-2" :""}` }
                  onChange={handleOnChange}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInputs;
