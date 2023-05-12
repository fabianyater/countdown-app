import { Monoton } from "next/font/google";
const mono = Monoton({ subsets: ['latin'], weight: '400' })

export const ShowTime = ( {value, type} ) => {
  return(
    <div className="text-center">
      <p className={`text-3xl sm:text-4xl mb-1 ${mono.className}`}>{value}</p>
      <span>{type}</span>
    </div>
  )
}
