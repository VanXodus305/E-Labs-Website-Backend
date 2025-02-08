import React from "react";
import {
  Input,
  Image,
  Autocomplete,
  AutocompleteItem,
  Form,
  Button,
} from "@heroui/react";
import {
  FaCamera,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const designations = [
  { label: "Coordinator", value: "coordinator" },
  { label: "Assistant Coordinator", value: "asst_coordinator" },
  { label: "Domain Lead", value: "domain_lead" },
  { label: "Assistant Domain Lead", value: "asst_domain_lead" },
  { label: "Member", value: "member" },
];

const domains = [
  { label: "Web Development", value: "web_dev" },
  { label: "Android Development", value: "android" },
  { label: "Game Development", value: "game_dev" },
  { label: "UI/UX", value: "ui_ux" },
  { label: "Graphic Design", value: "graphic" },
  { label: "AI/ML", value: "ml" },
  { label: "AR & VR", value: "ar_vr" },
  { label: "Java", value: "java" },
  { label: "IoT & Embedded", value: "iot" },
  { label: "Cloud Computing", value: "cloud" },
  { label: "Marketing and PR", value: "marketing" },
  { label: "Content Writing", value: "content" },
  { label: "Photography/Video Editing", value: "photography" },
  { label: "Cyber Security", value: "cyber_sec" },
  { label: "Data Analytics", value: "data_anal" },
];

const AddMember = () => {
  const [submitted, setSubmitted] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  React.useEffect(() => {
    if (submitted) {
      console.log(submitted);
      // Call backend API to submit data
    }
  }, [submitted]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
  };

  return (
    <div className="container mx-auto px-5 h-screen w-full dark">
      <div className="py-20">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-textColor1 text-4xl md:text-5xl font-bold text-center w-full">
            Member Details
          </h1>
        </div>
        <div className="mt-10 rounded-xl border-textColor1 border-2 py-16 px-10 flex flex-col items-center justify-center gap-14 overflow-x-hidden w-full">
          <Form
            className="w-full flex flex-col items-center justify-center gap-14"
            validationBehavior="native"
            onReset={() => {
              setPreviewUrl(null);
              setSubmitted(null);
            }}
            onSubmit={onSubmit}
          >
            <div className="w-full flex flex-row flex-wrap-reverse items-center justify-between gap-10">
              <div className="flex w-full md:w-[50%] flex-col gap-6 items-center justify-center">
                <Input
                  label="Name"
                  variant="bordered"
                  isClearable
                  name="name"
                  color="warning"
                  isRequired
                  classNames={{ label: "text-md" }}
                ></Input>
                <Autocomplete
                  label="Designation"
                  variant="bordered"
                  color="warning"
                  name="designation"
                  isRequired
                  classNames={{ popoverContent: "dark" }}
                  inputProps={{
                    classNames: {
                      label: "text-md",
                    },
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
                  label="Domain"
                  variant="bordered"
                  color="warning"
                  name="domain"
                  isRequired
                  classNames={{ popoverContent: "dark" }}
                  inputProps={{
                    classNames: {
                      label: "text-md",
                    },
                  }}
                >
                  {domains
                    .sort((d1, d2) => d1.label.localeCompare(d2.label))
                    .map((item) => (
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
                  name="linkedin"
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaLinkedinIn className="text-lg text-textColor1" />
                  }
                  type="url"
                ></Input>
                <Input
                  label="GitHub Profile"
                  variant="bordered"
                  isClearable
                  name="github"
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaGithub className="text-lg text-textColor1" />
                  }
                  type="url"
                ></Input>
                <Input
                  label="Instagram Profile"
                  name="instagram"
                  variant="bordered"
                  isClearable
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaInstagram className="text-lg text-textColor1" />
                  }
                  type="url"
                ></Input>
              </div>

              <div className="flex w-full md:w-[40%] flex-col gap-6 items-center justify-center">
                <Image
                  className="object-cover flex min-w-[70px] h-[180px] shadow-lg shadow-textColor1 mb-6 "
                  src={
                    previewUrl ||
                    "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.webp"
                  }
                  alt="project_logo"
                  radius="lg"
                />
                <Input
                  label="Upload Image"
                  isRequired
                  name="image"
                  variant="flat"
                  size="lg"
                  labelPlacement="outside"
                  isClearable
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaCamera className="text-lg text-textColor1" />
                  }
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                ></Input>
                <Input
                  label="KIIT Email Address"
                  variant="bordered"
                  isClearable
                  isRequired
                  name="email"
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaEnvelope className="text-lg text-textColor1" />
                  }
                  type="email"
                ></Input>
                <Input
                  label="Phone Number"
                  variant="bordered"
                  isClearable
                  isRequired
                  name="phone"
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaPhoneAlt className="text-lg text-textColor1" />
                  }
                  type="tel"
                ></Input>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-10">
              <Button
                className="w-full max-w-[250px] hover:scale-105 transition-all ease-in-out duration-200 font-bold text-xl"
                type="submit"
                variant="shadow"
                color="warning"
                radius="lg"
                size="lg"
              >
                Submit
              </Button>
              <Button
                className="w-full max-w-[250px] hover:scale-105 transition-all ease-in-out duration-200 font-bold text-xl"
                type="reset"
                variant="faded"
                radius="lg"
                color="warning"
                size="lg"
              >
                Reset
              </Button>
            </div>
            {submitted && (
              <div className="w-full text-center text-lg font-semibold text-textColor1 -mt-10">
                Submitted Successfully!
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
