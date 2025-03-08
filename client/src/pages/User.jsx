import { useNavigate } from "react-router";
import IDCard from "../components/IDCard";

export default function User() {
  const userId = location.pathname.replace("/user/", "");
  const navigate = useNavigate();

  if (!userId) navigate("/");

  return (
    <div className="flex w-full h-full items-center justify-center p-10">
      <IDCard
        name="hi"
        domain="hi"
        url="https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.webp"
      />
    </div>
  );
}
