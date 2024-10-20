import { TheSpaceship } from "@/components/spaceship";
import { Card } from "@/components/ui/card";
import Grain from "@/components/grain";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="flex flex-row justify-between w-full max-w-7xl h-full">
        <div className="w-1/2 h-full p-8 overflow-y-auto flex flex-col items-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="mb-4">
              The Spaceship is a multi-cultural hackerhouse based in San Francisco, fostering innovation and collaboration among diverse talents.
            </p>
            <p className="mb-4">
              We are a group of passionate individuals from various backgrounds, working on cutting-edge projects and pushing the boundaries of technology and creativity.
            </p>
            <Card className="p-4 mb-4">
              <p>
                <strong>Shelwin Sunga</strong><br />
                Resident at Perplexity
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Zach Dive</strong><br />
                Founder of Adam
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Maxime</strong><br />
                Product @ Meta
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Zelda</strong><br />
                1517 Advisor
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Zack</strong><br />
                Software Engineer @ Bun
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Jules Dedieu</strong><br />
                ML Engineer Berkeley
              </p>
            </Card>
            <Card className="p-4 mb-2">
              <p>
                <strong>Avi Peltz</strong><br />
                CTO of BioGlyph
              </p>
            </Card>
          </div>
        </div>
        <div className="w-1/2">
          <TheSpaceship />
        </div>
      </main>
    </div>
  );
}
