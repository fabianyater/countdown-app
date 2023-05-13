import { Monoton } from "next/font/google";
const mono = Monoton({ subsets: ["latin"], weight: "400" });

export const ShowTime = ({ value, label }) => {
  return (
    <div className="text-center">
      <p className={`text-3xl sm:text-4xl mb-1 ${mono.className}`}>{value < 10 ? `0${value}` : value}</p>
      <span>{value === 1 ? label : `${label}s`}</span>
    </div>
  );
};
