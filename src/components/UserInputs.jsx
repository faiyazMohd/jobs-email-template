import React from "react";
import { Label } from "@/components/components/ui/label";
import { Input } from "@/components/components/ui/input";

const UserInputs = ({
  userTemplateInfo,
  handleOnChange,
  userTemplateInputs,
}) => {


  return (
    <div className="w-full flex justify-center">
      <div className=" mt-8">
        {userTemplateInputs?.map((item, index) => {
          return (
            <div className="my-4 flex gap-6 justify-center items-center">
              <div className="w-1/3">
                <Label
                  htmlFor={item?.name}
                  className="text-lg font-medium capitalize"
                >
                  {item?.label}
                </Label>
              </div>
              <div className="w-2/3">
                <Input
                  name={item?.name}
                  value={userTemplateInfo[item?.name]}
                  placeholder={item?.placeholder}
                  className="w-72 placeholder:capitalize"
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
