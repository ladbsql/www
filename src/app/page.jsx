import Image from "next/image";
import Button from "@/components/button";
import { Database, BookOpen } from "lucide-react";
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="">
        <p className="text-4xl font-bold text-white mb-2">LaDB Server</p>
        <p className="text-lg text-white/70">
          El servidor creado con Python y NextJS para LaDB SQL.
        </p>
        <div className="flex mt-4">
          <Button href="/sgdb" color="white" bgcolor="orange">
            <Database className="mr-2" />
            SGDB
          </Button>
          <Button
            href="https://damkan-lat.gitbook.io/ladb-docs/"
            color="white"
            bgcolor="blue"
            target="_blank"
          >
            <BookOpen className="mr-2" />
            Ver documentación
          </Button>
        </div>
      </div>
    </main>
  );
}
