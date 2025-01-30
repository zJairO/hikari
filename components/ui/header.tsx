import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 fixed w-full bg-white/90 px-3 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]  before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
        <div className="relative flex h-14 items-center justify-between gap-3 px-3 ">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://calendar.app.google/8ys73PGCu3j3UBPeA"
                target="_blank"
                className="btn group mb-4 w-full bg-gradient-to-t from-primary-600 to-primary-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto font-bold rounded-2xl text-lg"
              >
                Agendar asesoria
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
