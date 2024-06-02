import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const pagePage = () => {
  return (
    <div className="w-full h-lvh overflow-hidden flex flex-col items-center mt-40">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="w-1/2">
            개인회원
          </TabsTrigger>
          <TabsTrigger value="password" className="w-1/2">
            기업회원
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="m-5 ">
          <div className="mt-10 text-center text-2xl font-semibold text-gray-500">
            개인 회원 로그인
          </div>
          <div className="mt-12">
            <Input
              placeholder="아이디"
              className="placeholder-gray-500 placeholder-opacity-25"
            />
            <br />
            <Input placeholder="비밀번호" className="placeholder-red-300" />
          </div>
          <br />
          <div className="text-center mt-40">
            <Button variant="primary" size="lg" className="w-full">
              로그인
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default pagePage;
