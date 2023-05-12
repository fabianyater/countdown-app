"use client";

import { Input } from "./Input";
import { Button } from "./Button";
import { useContext } from "react";
import { FormContext } from "../context/form-provider";

export const Form = () => {
  const { isHidden, setIsHidden } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { name, calendar } = Object.fromEntries(formData.entries());

    addEvent({ name, calendar });

    form.reset();
    setIsHidden(!isHidden);
    location.reload()
  };

  const addEvent = (event) => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const updatedData = [...storedData, event];
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  return !isHidden && (
    <div className="w-full lg:w-96 p-0.5 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 animate-jump-in">
      <form className="bg-[#d4d2d2] p-4 rounded-2xl" onSubmit={handleSubmit}>
        <Input
          name="name"
          id="name"
          label="Nombre del evento"
          type="text"
          placeholder="Ej: Viaje a Cartagena"
        />
        <Input
          name="calendar"
          id="calendar"
          label="Seleccionar fecha"
          type="datetime-local"
        />
        <Button>Crear evento</Button>
      </form>
    </div>
  );
};

