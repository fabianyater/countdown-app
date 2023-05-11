import { CustomButton } from "./components/CustomButton";
import { Cards } from "./components/Cards";
import { Form } from "./components/Form";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-between pt-12 gap-5">
        <h1 className="text-2xl sm:text-4xl font-bold">Mis recordatorios</h1>
        <h2 className="text-center pr-4 pl-4">
          Mantén un seguimiento de tus próximos eventos
        </h2>
        <CustomButton />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-start pt-3 pr-3 pl-3 w-11/12 sm:w-4/5 mt-4 m-auto">
        <div
          className="-z-10 absolute inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            filter: "blur(118px)",
          }}
        ></div>
        <Form />
        <div className="w-full grid place-items-center grid-cols-1 gap-4 h-56 md:grid-cols-2 xl:grid-cols-3 pt-8 pb-8">
          <Cards />
        </div>
      </main>
    </>
  );
}
