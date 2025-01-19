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

export default function MenuTabs({ templateWithValue }) {
  console.log({ templateWithValue });
  const handleCopySubClick = async () => {
    try {
      await window.navigator.clipboard.writeText(
        templateWithValue?.email?.subject
      );
      toast("Email Subject Copied to clipboard!", { icon: "✅" });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast("Copy to clipboard failed.");
    }
  };
  const handleCopyBodyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(
        templateWithValue?.email?.body
      );
      toast("Email Body Copied to clipboard!", { icon: "✅" });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast("Copy to clipboard failed.");
    }
  };
  return (
    <div className="w-full flex justify-center mt-8">
      <Tabs defaultValue="email" className="w-2/3">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="coverLetter">Cover Letter</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <Card className="w-full">
            <CardFooter className="flex gap-6 mt-5">
              <Button onClick={handleCopySubClick}>Copy Subject</Button>
              <Button onClick={handleCopyBodyClick}>Copy Body</Button>
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
          <Card>
            <CardHeader>
              <CardTitle>Cover letter</CardTitle>
              <CardTitle>Cover letter</CardTitle>
              <CardDescription>
                Email Template for applying jobs{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button>Copy</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
