import { useState } from "react";
import InputForm from "../components/InputForm";

const AddMember = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto px-5 h-screen w-full dark">
      <InputForm setIsLoading={setIsLoading} />
    </div>
  );
};

export default AddMember;
