import { addToast, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import IDCard from "../components/IDCard";

export default function User() {
  const userId = location.pathname.replace("/user/", "");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(import.meta.env.VITE_GET_MEMBER_URI, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const parsedData = await data.json();
      if (data.status !== 200) {
        addToast({
          title: "Failed to fetch member. Please try again later",
          color: "danger",
          onClose: () => {
            navigate("/");
          },
        });
      } else {
        setUserData({
          name: parsedData.member.name,
          designation: parsedData.member.designation,
          image: parsedData.member.image,
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);

  if (!userId) navigate("/");

  return (
    <div className="flex w-full h-full items-center justify-center p-10">
      {!isLoading ? (
        <IDCard
          name={userData.name}
          designation={userData.designation}
          url={userData.image}
        />
      ) : (
        <Spinner color="default" variant="gradient" />
      )}
    </div>
  );
}
