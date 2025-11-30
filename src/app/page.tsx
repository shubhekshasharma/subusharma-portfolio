"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-20">
      <main className="w-full max-w-3xl space-y-14">
        <Header/>
        <Info/>
        <Projects/>
        <Footer/>
      </main>
    </div>
  );
}
