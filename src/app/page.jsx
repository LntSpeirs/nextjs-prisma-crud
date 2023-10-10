import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
//Hay dos enfoques posibles distintos desde el lado del servidor para obtener informacion
//1 - Obtener los datos directamente con prisma
async function loadTasks() {
  return await prisma.task.findMany();
}
//2 - Haciendo una peticion http a /api/tasks
/* async function loadTasks() {
  const respuesta = await fetch("http://localhost:3000/api/tasks");
  const data = await respuesta.json();
  console.log(data);
  return data;
} */

const HomePage = async () => {
  const tareas = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tareas.map((tarea) => (
          <TaskCard key={tarea.id} tarea={tarea} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
