import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold">Página no encontrada</h1>
          <div class="flex items-center justify-center h-64">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href={"/"}>Volver al inicio</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
