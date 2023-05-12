export  const Input = ({ id, name, label, type, placeholder, value, ...props }) => {
  return (
    <fieldset className="mb-6">
      <label htmlFor={id} className="block mb-2 text-xs font-medium text-black">{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} value={value} className="bg-gray-50 border text-gray-950 text-sm rounded-lg block w-full p-2.5 focus:outline-none" required />
    </ fieldset>
  )
}