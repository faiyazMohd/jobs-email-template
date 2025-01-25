import { Button } from "@/components/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/components/ui/tabs";
import toast, { Toaster } from "react-hot-toast";

export default function MenuTabs({ templateWithValue, handleCopyClick }) {
  console.log({ templateWithValue });
  const otherInfo = [
    {
      label: "Tell me about yourself",
      body: templateWithValue?.other?.selfInfo,
      copyBtnName: "Self Info",
      copyFunction: () =>
        handleCopyClick(templateWithValue?.other?.selfInfo, "Self Info"),
    },
    {
      label: "Cold Referral",
      body: templateWithValue?.other?.coldReferral,
      copyBtnName: "Cold Referral",
      copyFunction: () =>
        handleCopyClick(
          templateWithValue?.other?.coldReferral,
          "Cold Referral"
        ),
    },
    {
      label: "Specific Referral",
      body: templateWithValue?.other?.specificReferral,
      copyBtnName: "Specific Referral",
      copyFunction: () =>
        handleCopyClick(
          templateWithValue?.other?.specificReferral,
          "Specific Referral"
        ),
    },
    {
      label: "Cold Referral To HR",
      body: templateWithValue?.other?.coldReferralToHR,
      copyBtnName: "Cold Referral To HR",
      copyFunction: () =>
        handleCopyClick(
          templateWithValue?.other?.coldReferralToHR,
          "Cold Referral To HR"
        ),
    },
    {
      label: "Specific Referral To HR",
      body: templateWithValue?.other?.specificReferralToHR,
      copyBtnName: "Specific Referral To HR",
      copyFunction: () =>
        handleCopyClick(
          templateWithValue?.other?.specificReferralToHR,
          "Specific Referral To HR"
        ),
    },
  ];
  return (
    <div className="w-full flex justify-center mt-8">
      <Tabs defaultValue="email" className="w-2/3" >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="coverLetter">Cover Letter</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <Card className="w-full">
            <CardFooter className="flex gap-6 mt-5">
              <Button
                onClick={() =>
                  handleCopyClick(
                    templateWithValue?.email?.subject,
                    "Email Subject"
                  )
                }
              >
                Copy Subject
              </Button>
              <Button
                onClick={() =>
                  handleCopyClick(templateWithValue?.email?.body, "Email Body")
                }
              >
                Copy Body
              </Button>
            </CardFooter>
            <CardHeader>
              {/* <CardTitle>Email</CardTitle> */}
              <CardTitle>Subject</CardTitle>
              <CardDescription className="font-medium text-black text-base">
                {templateWithValue?.email?.subject}
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Body</CardTitle>
              <CardDescription className="font-medium text-black text-base whitespace-pre-wrap">
                {templateWithValue?.email?.body}
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="coverLetter">
          <Card className="w-full">
            <CardFooter className="flex gap-6 mt-5">
              {/* <Button onClick={handleCopySubClick}>Copy Subject</Button>
              <Button onClick={handleCopyBodyClick}>Copy Body</Button> */}
            </CardFooter>
            <CardHeader>
              {/* <CardTitle>Email</CardTitle> */}
              <CardTitle>Subject</CardTitle>
              <CardDescription className="font-medium text-black text-base">
                {templateWithValue?.coverLetter?.subject}
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Body</CardTitle>
              <CardDescription className="font-medium text-black text-base whitespace-pre-wrap">
                {templateWithValue?.coverLetter?.body}
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="other">
          <Card className="w-full">
          {otherInfo?.map((item, index) => {
            return (
              <>
                <CardHeader>
                  <CardTitle className="font-semibold text-black text-lg">
                    {item?.label}
                  </CardTitle>
                  <CardDescription className="font-medium text-black text-base whitespace-pre-wrap">
                    {item?.body}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-6 mt-1">
                  <Button onClick={item?.copyFunction}>
                    Copy {item?.copyBtnName}
                  </Button>
                </CardFooter>
                <CardFooter className="flex gap-6 ">
                  <hr className="border bg-black w-full" />
                </CardFooter>
              </>
            );
          })}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
