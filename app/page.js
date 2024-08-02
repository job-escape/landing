"use client";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="px-4 md:px-0 md:max-w-screen-sm w-full fixed top-4 z-50">
        <header className="border rounded-full backdrop-blur-md bg-background/20 flex items-center justify-between shadow-md">
          <nav className=" items-center space-x-4 px-4 text-sm text-muted-foreground hidden md:flex">
            <div className="text-foreground font-medium">Home</div>
            <div>Products</div>
            <div>About</div>
            <div>Contact</div>
          </nav>
          <Button variant="ghost">Sign in</Button>
        </header>
      </div>

      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-black/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-20 -left-10 md:left-60 md:-top-20"
          fill="#4B6BDD"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-40 md:pt-0 ">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-950 bg-opacity-50 pb-2">
            Espace your 9-5
          </h1>
          <p className="mt-2 font-normal text-base text-muted-foreground max-w-lg text-center mx-auto">
            JobEscape - The platform for learning freelancing using AI tools.
          </p>

          <div className="flex justify-center mt-6 space-x-4">
            <div className="flex -space-x-1">
              <div className="bg-primary border rounded-full size-6"></div>
              <div className="bg-primary border rounded-full size-6"></div>
              <div className="bg-primary border rounded-full size-6"></div>
            </div>
            <p className="font-medium">Join 13 000+ subscribers</p>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <Button>Get your personal plan</Button>
            <Button variant="ghost">Sign in</Button>
          </div>
        </div>
      </div>

      <MacbookScroll src="/screenshot.png" showGradient={true} />

      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
}
