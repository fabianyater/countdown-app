import { useCountdown } from "../hooks/useCountdown";
import { ShowTime } from "./ShowTime"

export const Countdown = ( {date} ) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  if (days + hours + minutes + seconds <= 0){
    return <h1>Se acacbó</h1>
  }

  return (
    <div className="flex w-full items-center justify-around">
      <ShowTime value={days} label={'Día'} />
      <ShowTime value={hours} label={'Hora'} />
      <ShowTime value={minutes} label={'Minuto'} />
      <ShowTime value={seconds} label={'Segundo'} />
    </div>
  )
}
