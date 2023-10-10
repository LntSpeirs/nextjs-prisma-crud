"use client";
import { useRouter } from "next/navigation";

const TaskCard = ({ tarea }) => {
  const router = useRouter();
  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${tarea.id}`);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">
        {tarea.id} - {tarea.title}
      </h3>
      <p>{tarea.description}</p>
      <p>{new Date(tarea.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
