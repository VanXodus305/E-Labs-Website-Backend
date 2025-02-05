import { Button } from "@heroui/react";
import { useRef } from "react";

export const FileUploader = ({ accept, label, startContent }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <>
      <Button
        radius="lg"
        variant="shadow"
        className="bg-textColor1 w-[250px] hover:scale-105 transition-all ease-in-out duration-200 text-neutral-900"
        size="lg"
        startContent={startContent}
        onClick={handleClick}
      >
        <h1 className="text-xl font-bold">{label}</h1>
      </Button>
      <input
        type="file"
        accept={accept}
        onChange={handleChange}
        ref={hiddenFileInput}
        className="hidden"
      />
    </>
  );
};
