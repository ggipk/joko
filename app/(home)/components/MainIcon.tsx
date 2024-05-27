import { Star } from "lucide-react";

const MainIcon = () => {
  return (
    <section className="flex justify-between items-center mt-2 p-5">
      <div className="rounded-full h-12 w-12 bg-yellow-500 flex justify-center items-center">
        <Star />
      </div>
      <div className="rounded-full h-12 w-12 bg-yellow-500 flex justify-center items-center">
        <Star />
      </div>
      <div className="rounded-full h-12 w-12 bg-yellow-500 flex justify-center items-center">
        <Star />
      </div>
      <div className="rounded-full h-12 w-12 bg-yellow-500 flex justify-center items-center">
        <Star />
      </div>
      <div className="rounded-full h-12 w-12 bg-yellow-500 flex justify-center items-center">
        <Star />
      </div>
    </section>
  );
};

export default MainIcon;
