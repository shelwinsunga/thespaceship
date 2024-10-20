import { TheSpaceship } from "@/components/spaceship";
import Grain from "@/components/grain";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="flex flex-row justify-between w-full max-w-7xl h-full">
        <div className="w-1/2 h-full p-8 overflow-y-auto flex flex-col items-center mt-32">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="mb-4">
              Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.
            </p>
            <p className="mb-4">
              We are a small self-funded team focused on design, human infrastructure, and AI. We have 11 full-time staff and an incredible set of advisors.
            </p>
            <h3 className="text-xl font-bold mb-2">Executives</h3>
            <p className="mb-4">
              <strong>David Holz</strong><br />
              Previously: Founder Leap Motion, Researcher at NASA, Max Planck
            </p>
            <h3 className="text-xl font-bold mb-2">Advisors</h3>
            <ul className="list-none">
              <li className="mb-2">
                <strong>Jim Keller</strong><br />
                Lead Silicon at Apple, AMD, Tesla, Intel, Coauthor X86-64, CTO Tenstorrent
              </li>
              <li className="mb-2">
                <strong>Nat Friedman</strong><br />
                CEO Github, Chairman of GNOME Foundation
              </li>
              <li className="mb-2">
                <strong>Philip Rosedale</strong><br />
                Founder of Second Life, CTO RealNetworks
              </li>
              <li className="mb-2">
                <strong>Bill Warner</strong><br />
                Founder of Avid Technology, inventor of nonlinear video editing
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <TheSpaceship />
        </div>
      </main>
    </div>
  );
}
