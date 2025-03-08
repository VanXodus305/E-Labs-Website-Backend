import { Image } from "@heroui/react";
import { useToPng } from "@hugocxl/react-to-image";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const IDCard = ({ name, domain, url }) => {
  const navigate = useNavigate();
  const [state, convert] = useToPng({
    selector: "#id-card",
    width: 590,
    height: 1004,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${name}_${domain}.png`;
      link.href = data;
      link.click();
    },
    onError: (error) => {
      toast.error("Error converting to PNG:", error);
    },
  });

  useEffect(() => {
    if (convert) {
      convert();
      navigate("/");
    }
  }, []);

  return (
    <div
      className="flex flex-col w-[591px] h-[1004px] items-center justify-between bg-[url(/ID_Card.png)] bg-cover hover:shadow-2xl hover:shadow-textColor1 duration-200 ease-in-out transition-all"
      id="id-card"
    >
      <div className="flex w-full h-[54.7%] items-end justify-center">
        <Image
          className="object-cover flex object-center aspect-square mb-7"
          src={url}
          alt="member_image"
          width={370}
          radius="full"
        />
      </div>
      <div className="flex w-full h-[45.3%] justify-start items-start pt-8">
        <div className="w-[72%] h-[55%] flex flex-col gap-6 pl-6">
          <div className="flex w-full">
            <h1 className="text-[28px] font-horizon text-textColor2 text-left">
              {name}
            </h1>
          </div>
          <div className="flex w-full">
            <h1 className="text-[22px] font-horizon text-textColor1 text-left">
              {domain}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
