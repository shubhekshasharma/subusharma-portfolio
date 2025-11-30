import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-20">
            <main className="w-full max-w-3xl space-y-14">
            <Header/>
            <About/>
            <Footer/>
            </main>
        </div>
            
    )
}