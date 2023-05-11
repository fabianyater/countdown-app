export const ShowTime = ( {value, type} ) => {
  return(
    <div className="text-center">
      <p className="text-5xl mb-1">{value}</p>
      <span>{type}</span>
    </div>
  )
}
