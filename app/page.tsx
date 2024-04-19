import Footer from "@/components/main/footer";
import ParticlesComponent from "@/components/main/particles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ParticlesComponent />

      <div className="min-h-screen max-w-6xl mx-auto justify-center items-center flex">
        <section className="container flex flex-1 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative z-40">
            <Image
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height={800}
              width={1000}
              alt=""
              className="object-cover object-center w-full h-72 sm:h-80 lg:h-96 xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
            <h1 className="text-2xl font-bold leadi sm:text-4xl">
              Latest technology based projects and web solutions with{" "}
              <span className="text-rose-600">Inators</span> <span>Fusion</span>
            </h1>
            <p className="mt-6 mb-4 text-base sm:mb-6">
              We are a team of developers, designers, and project managers
              creating innovative projects and solutions. Our projects include
              web development, mobile app development, and UI/UX design, AI and
              machine learning, and many more. If you have any project idea or
              want to discuss your project, feel free to visit our website or
              send us an email.
            </p>
            <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="https://siddharthasingh.vercel.app" target="_blank">
                <Button className="">Visit Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
