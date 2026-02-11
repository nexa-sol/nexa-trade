import Link from "next/link";
import { Button } from "../ui/button";
import {
  BellIcon,
  ChevronDownIcon,
  StarIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

const links = [
  {
    path: "/markets",
    name: "Markets",
  },
  {
    path: "/trackers",
    name: "Trackers",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b-2 border-b-border py-4 px-5 flex gap-5 items-center">
      <a href="/markets" className="flex gap-1 items-center">
        <img src="/nexa.svg" alt="Nexa" className="h-7" />
        <img src="/nexa-text.svg" alt="NEXA" className="h-5" />
      </a>
      <div>
        <ul className="flex">
          {links.map((l) => (
            <li key={l.path}>
              <Link
                href={l.path}
                className="px-3 py-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto flex gap-4">
        <Button
          variant="outline"
          className="rounded-full bg-card p-2! aspect-square"
        >
          <StarIcon />
        </Button>
        <Button
          variant="outline"
          className="rounded-full bg-card p-2! aspect-square"
        >
          <BellIcon />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="rounded-full bg-card p-2! aspect-square group"
        >
          <div className="flex gap-1 items-center h-full">
            <WalletIcon />
            3.13
            <span className="w-[1.5px] h-full ml-1 mr-1 bg-border group-hover:bg-accent-foreground animate-colors duration-300" />
            $248
            <ChevronDownIcon />
          </div>
        </Button>

        <Button
          variant="outline"
          className="rounded-full bg-card p-2! aspect-square"
        >
          <UserIcon />
        </Button>
      </div>
    </nav>
  );
}
