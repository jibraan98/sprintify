import { DottedSeperator } from "@/components/dotted-seperator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeperator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
            <Input 
            type="email"
            value={""}
            onChange={() => {}}
            required
            placeholder="Enter email address"
            disabled={false}
            />
             <Input 
            type="password"
            value={""}
            onChange={() => {}}
            required
            placeholder="Enter password"
            min={8}
            max={256}
            disabled={false}
            />
            <Button disabled={false} size={"lg"} className="w-full">Login</Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeperator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-7">
        <Button disabled={false} variant={"secondary"} size={"lg"} className="w-full">
            <FcGoogle className="mr-2 size-5"/>
            Login with Google
        </Button>
        <Button disabled={false} variant={"secondary"} size={"lg"} className="w-full">
            <FaGithub className="mr-2 size-5"/>
            Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};
