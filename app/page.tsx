import { TheSpaceship } from "@/components/spaceship";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Residents = [
  { name: "Shelwin Sunga", title: "Resident at Perplexity", link: "https://twitter.com/shelwin_" },
  { name: "Zach Dive", title: "Founder of Adam", link: "https://twitter.com/zachdive" },
  { name: "Maxime Raphael", title: "Product @ Meta", link: "https://www.instagram.com/maxime.raphael/" },
  { name: "Zelda Poem", title: "1517 Advisor", link: "https://twitter.com/zeldapoem" },
  { name: "Zack Radisic", title: "Software Engineer @ Bun", link: "https://twitter.com/zack_overflow" },
  { name: "Jules Dedieu", title: "ML Engineer Berkeley", link: "https://twitter.com/DedieuJules" },
  { name: "Avi Peltz", title: "CTO of BioGlyph", link: "https://twitter.com/avimakesrobots" },
]

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="flex flex-row justify-between w-full max-w-7xl h-full">
        <div className="w-1/2 h-full p-8 overflow-y-auto flex flex-col items-center mt-24">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">THE SPACESHIP</h2>
            <p className="mb-4">
              A house of the funniest people in the world, working on things in San Francisco. We call our house The Spaceship (our walls are white and we have three floors).
            </p>
            <p className="mb-6">
              We're located in Mission, San Francisco by 25th and Capp.
            </p>
            {Residents.map((resident) => (
              <Link href={resident?.link || "#"} key={resident.name}>
                <Card className="p-4 mb-4 hover:bg-gray-100 transition-colors duration-300">
                  <p>
                    <span className="font-medium">{resident.name}</span><br />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <TheSpaceship />
        </div>
      </main>
    </div>
  );
}
