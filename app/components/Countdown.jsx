import { useCountdown } from "../hooks/useCountdown";
import { ShowTime } from "./ShowTime"

export const Countdown = ( {date} ) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <div className="flex w-full items-center justify-between">
      <ShowTime value={days} type={days > 1 ? 'Días' : 'Día'} />
      <ShowTime value={hours} type={hours > 1 ? 'Horas' : 'Hora'} />
      <ShowTime value={minutes} type={minutes > 1 ? 'Minutos' : 'Minute'} />
      <ShowTime value={seconds} type={seconds > 1 ? 'Seconds' : 'Segundo'} />
    </div>
  )
}
