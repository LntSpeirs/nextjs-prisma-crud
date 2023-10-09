"use client";
import { useRouter } from "next/navigation";
const NewPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const respuesta = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const data = await respuesta.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Descripción"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear tarea
        </button>
      </form>
    </div>
  );
};

export default NewPage;
