import React from "react";
import { Input, Image, Autocomplete, AutocompleteItem } from "@heroui/react";
import { FaCamera } from "react-icons/fa";
// import { FileUploader } from "../subComponents/FileUploader";

const designations = [
  { label: "Coordinator", value: "coordinator" },
  { label: "Assistant Coordinator", value: "asst_coordinator" },
  { label: "Domain Lead", value: "domain_lead" },
  { label: "Assistant Domain Lead", value: "asst_domain_lead" },
  { label: "Member", value: "member" },
];

const domains = [
  { label: "Web Development", value: "web_dev" },
  { label: "Android", value: "android" },
  { label: "Game Development", value: "game_dev" },
  { label: "UI/UX", value: "ui_ux" },
  { label: "Graphic Design", value: "graphic_design" },
  { label: "Machine Learning", value: "ml" },
  { label: "AR & VR", value: "ar_vr" },
  { label: "Java", value: "java" },
  { label: "IoT & Embedded", value: "iot" },
  { label: "Cloud Computing", value: "cloud_computing" },
  { label: "Marketing", value: "marketing" },
  { label: "Content Writing", value: "content" },
  { label: "Photography/Video Editing", value: "photography" },
];

const AddMember = () => {
  const [designation, setDesignation] = React.useState(null);
  const [domain, setDomain] = React.useState(null);

  return (
    <div className="container mx-auto px-5 w-full dark">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-textColor1 text-4xl md:text-5xl font-bold text-center w-full">
          Add Member Details
        </h1>
      </div>
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-16 flex flex-col items-center justify-center gap-14 overflow-x-hidden w-full">
        <div className="w-full flex flex-row flex-wrap items-center justify-evenly gap-10">
          <div className="flex max-w-[400px] w-full flex-col gap-6 items-center justify-center">
            <Input
              label="Member Name"
              variant="bordered"
              isClearable
              color="warning"
              isRequired
              classNames={{ label: "text-md" }}
            ></Input>
            <Autocomplete
              label="Member Designation"
              variant="bordered"
              color="warning"
              isRequired
              classNames={{ popoverContent: "dark" }}
              inputProps={{
                classNames: {
                  label: "text-md",
                },
              }}
              onSelectionChange={(key) => {
                setDesignation(key);
              }}
            >
              {designations.map((item) => (
                <AutocompleteItem
                  key={item.value}
                  value={item.value}
                  variant="faded"
                  color="warning"
                  classNames={{ title: "text-md" }}
                >
                  {item.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Autocomplete
              label="Member Domain"
              variant="bordered"
              color="warning"
              isRequired
              classNames={{ popoverContent: "dark" }}
              inputProps={{
                classNames: {
                  label: "text-md",
                },
              }}
              onSelectionChange={(key) => {
                setDomain(key);
              }}
            >
              {domains.map((item) => (
                <AutocompleteItem
                  key={item.value}
                  value={item.value}
                  color="warning"
                  variant="faded"
                  classNames={{ title: "text-md" }}
                >
                  {item.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Input
              label="LinkedIn Profile"
              variant="bordered"
              isClearable
              color="warning"
              classNames={{ label: "text-md" }}
            ></Input>
            <Input
              label="GitHub Profile"
              variant="bordered"
              isClearable
              color="warning"
              classNames={{ label: "text-md" }}
            ></Input>
          </div>

          <div className="flex max-w-[280px] w-full flex-col gap-6 items-center justify-center">
            <Image
              className="object-cover border-2 min-w-[70px] border-textColor1"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="project_logo"
              radius="lg"
            />
            {/* <FileUploader
              label={"Upload Image"}
              startContent={<FaCamera className="text-neutral-900 text-xl" />}
              accept={"image/*"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
