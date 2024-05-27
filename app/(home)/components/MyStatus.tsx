import { BookText } from "lucide-react";

const MyStatus = () => {
  return (
    <section className="bg-white flex items-center m-2 p-5 shadow-gray-100 shadow-2xl rounded-xl">
      <div className="w-full">
        <span className="underline">로그면인</span> 하시면
        <br />
        <span className="text-blue-700 font-bold">맞춤공고와 콘텐츠</span>를
        추천해 드려요&nbsp;
        <BookText className="inline" />
      </div>
    </section>
  );
};

export default MyStatus;
