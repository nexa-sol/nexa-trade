import Link from "next/link";
import { Button } from "../ui/button";
import {
  BellIcon,
  ChevronDownIcon,
  StarIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import { SolanaLogo } from "../logos";

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
  const personalItemClass =
    "rounded-full bg-card p-2! aspect-square group hover:bg-accent/20 hover:text-accent";

  return (
    <nav className="border-b border-b-border py-4 px-5 flex gap-5 items-center">
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
        <Button variant="outline" className={personalItemClass}>
          <StarIcon />
        </Button>
        <Button variant="outline" className={personalItemClass}>
          <BellIcon />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className={personalItemClass}>
          <div className="flex gap-1 items-center h-full">
            <WalletIcon />
            <div className="flex items-center">
              <SolanaLogo className="p-0.5" />
              3.13
            </div>
            <span className="w-[1.5px] h-full ml-1 mr-1 bg-border group-hover:bg-accent/60 animate-colors duration-300" />
            $248
            <ChevronDownIcon />
          </div>
        </Button>

        <Button variant="outline" className={personalItemClass}>
          <UserIcon />
        </Button>
      </div>
    </nav>
  );
}
