import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const tarea = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(tarea);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const tareaActualizada = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(tareaActualizada);
}

export async function DELETE(request, { params }) {
  try {
    const tareaEliminada = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(tareaEliminada);
  } catch (error) {
    return NextResponse.json("No existe una tarea con ese id para eliminar.");
  }
}
