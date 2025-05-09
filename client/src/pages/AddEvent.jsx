import React from "react";
import {
  Input,
  Image,
  // Autocomplete,
  // AutocompleteItem,
  Form,
  Button,
  Textarea,
  DatePicker,
  Spinner,
  addToast,
} from "@heroui/react";
import { FaCamera } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AddEvent = () => {
  const [submitted, setSubmitted] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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
    if (!submitted) return;

    const sendRequest = async () => {
      setIsLoading(true);

      const data = await fetch(import.meta.env.VITE_ADD_EVENT_URI, {
        method: "POST",
        body: submitted,
      });

      if (data.status !== 200) {
        addToast({
          title: "Failed to submit. Please try again.",
          color: "danger",
          className: "dark",
          timeout: 6000,
          classNames: {
            title: "font-varela text-left",
          },
          radius: "lg",
        });
        setSubmitted(null);
      } else {
        document.querySelector("form").reset();
        setPreviewUrl(null);
        addToast({
          title: "Submitted Successfully!",
          className: "dark",
          classNames: {
            title: "font-varela text-left",
          },
          radius: "lg",
          color: "success",
          timeout: 6000,
        });
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [submitted]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
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
                  label="Event Name"
                  variant="bordered"
                  isClearable
                  name="name"
                  color="warning"
                  isRequired
                  classNames={{
                    label: "text-md",
                    errorMessage: "text-left text-[13px]",
                  }}
                  className="w-full"
                ></Input>
                <Textarea
                  label="Description"
                  variant="bordered"
                  isClearable
                  isRequired
                  name="desc"
                  color="warning"
                  minRows={5}
                  classNames={{
                    label: "text-md",
                    errorMessage: "text-left text-[13px]",
                  }}
                ></Textarea>
                {/* <Autocomplete
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
                </Autocomplete> */}
                <Input
                  label="Organizer/Instructor"
                  variant="bordered"
                  isClearable
                  name="organizer"
                  color="warning"
                  isRequired
                  classNames={{
                    label: "text-md",
                    errorMessage: "text-left text-[13px]",
                  }}
                  className="w-full"
                ></Input>
                <Input
                  label="Location"
                  variant="bordered"
                  isRequired
                  isClearable
                  name="location"
                  color="warning"
                  classNames={{
                    label: "text-md",
                    errorMessage: "text-left text-[13px]",
                  }}
                  startContent={
                    <FaLocationDot className="text-lg text-textColor1" />
                  }
                ></Input>
              </div>

              <div className="flex w-full md:w-[40%] flex-col gap-6 items-center justify-center">
                <Image
                  className="object-cover flex min-w-[70px] h-[184px] shadow-lg shadow-textColor1 mb-6 "
                  src={
                    previewUrl ||
                    "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
                  }
                  alt="event_poster"
                  radius="lg"
                />
                <Input
                  label="Upload Event Poster"
                  isRequired
                  name="image"
                  variant="flat"
                  size="lg"
                  labelPlacement="outside"
                  isClearable
                  color="warning"
                  classNames={{
                    label: "text-md",
                    description: "text-left text-[13px]",
                    errorMessage: "text-left text-[13px]",
                  }}
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
                  classNames={{
                    popoverContent: "dark",
                    label: "text-left text-sm",
                    errorMessage: "text-left text-[13px]",
                  }}
                  dateInputClassNames={{ label: "text-md text-left" }}
                ></DatePicker>
              </div>
            </div>

            <div className="flex w-full items-center justify-center flex-wrap flex-row gap-8">
              <Button
                className="w-full max-w-[250px] hover:scale-105 transition-all ease-in-out duration-200 font-bold text-xl"
                type="submit"
                variant="shadow"
                isDisabled={isLoading}
                color="warning"
                radius="lg"
                size="lg"
                startContent={
                  isLoading && <Spinner color="default" variant="gradient" />
                }
              >
                Submit
              </Button>
              <Button
                className="w-full max-w-[250px] hover:scale-105 transition-all ease-in-out duration-200 font-bold text-xl"
                type="reset"
                variant="faded"
                radius="lg"
                isDisabled={isLoading}
                color="warning"
                size="lg"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
