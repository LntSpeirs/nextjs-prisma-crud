import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tareas = await prisma.task.findMany();
  return NextResponse.json(tareas);
}

export async function POST(request) {
  const data = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(newTask);
}
