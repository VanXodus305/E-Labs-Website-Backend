import { Image } from "@heroui/react";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const IDCard = ({ name, designation, url }) => {
  const navigate = useNavigate();
  const [hasProfileImageLoaded, setHasProfileImageLoaded] = useState(false);
  const [hasBackgroundLoaded, setHasBackgroundLoaded] = useState(false);

  useEffect(() => {
    if (hasProfileImageLoaded && hasBackgroundLoaded) {
      html2canvas(document.getElementById("id-card"), {
        useCORS: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${name}_E-LABS.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
      setTimeout(() => {
        navigate("/addmember");
      }, 2000);
    }
  }, [hasProfileImageLoaded, hasBackgroundLoaded]);

  return (
    <div
      id="id-card"
      className="relative bg-black z-0 aspect-square w-[591px] h-[1004px] "
    >
      <div className="absolute inset-0 -z-50">
        <Image
          crossOrigin="anonymous"
          fetchpriority="high"
          onLoad={() => {
            setHasBackgroundLoaded(true);
          }}
          src="/ID_Card.png"
          alt="ID Card"
          width={591}
          height={1004}
          className="w-full h-full"
        />
      </div>
      <div className="top-[9.8rem] left-32 absolute z-50">
        <Image
          crossOrigin="anonymous"
          className="object-cover flex object-center aspect-square"
          fetchpriority="low"
          onLoad={() => {
            setHasProfileImageLoaded(true);
          }}
          src={url}
          alt="member profile image"
          width={355}
          radius="full"
        />
      </div>
      <div>
        <div className="absolute top-[35rem] left-3 flex flex-col gap-6 w-[65%] pl-4">
          <h1 className="text-[28px] font-horizon text-textColor2 text-left">
            {name}
          </h1>
          <h1 className="text-[22px] font-horizon text-textColor1 text-left">
            {designation}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
