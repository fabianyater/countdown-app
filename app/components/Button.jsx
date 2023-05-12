export  const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full m-auto px-5 py-2.5 text-center">
      {children}
    </button>

  )
}
