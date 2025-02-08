import React from "react";
import {
  Input,
  Image,
  Autocomplete,
  AutocompleteItem,
  TimeInput,
  Form,
  Button,
  Textarea,
  DateInput,
  DatePicker,
} from "@heroui/react";
import { FaCamera, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AddEvent = () => {
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
            Event Details
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
                <Textarea
                  label="Description"
                  variant="bordered"
                  isClearable
                  isRequired
                  name="desc"
                  color="warning"
                  minRows={5}
                  classNames={{ label: "text-md" }}
                ></Textarea>
                <Autocomplete
                  label="Organizer/Instructor"
                  variant="bordered"
                  color="warning"
                  name="domain"
                  allowsCustomValue
                  isRequired
                  classNames={{ popoverContent: "dark" }}
                  inputProps={{
                    classNames: {
                      label: "text-md",
                    },
                  }}
                >
                  {/* {domains
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
                    ))} */}
                </Autocomplete>
                <Input
                  label="Location"
                  variant="bordered"
                  isRequired
                  isClearable
                  name="location"
                  color="warning"
                  classNames={{ label: "text-md" }}
                  startContent={
                    <FaLocationDot className="text-lg text-textColor1" />
                  }
                ></Input>
              </div>

              <div className="flex w-full md:w-[40%] flex-col gap-6 items-center justify-center">
                <Image
                  className="object-cover flex min-w-[70px] h-[180px] shadow-lg shadow-textColor1 mb-6 "
                  src={
                    previewUrl ||
                    "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
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
                <DatePicker
                  label="Date and Time"
                  name="date_time"
                  variant="bordered"
                  color="warning"
                  isRequired
                  showMonthAndYearPickers
                  granularity="minute"
                  classNames={{ popoverContent: "dark" }}
                  dateInputClassNames={{ label: "text-md text-left" }}
                ></DatePicker>
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

export default AddEvent;
