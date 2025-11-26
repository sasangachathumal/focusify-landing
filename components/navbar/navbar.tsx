import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/focusify-logo.png";

export function Navbar() {
  return (
    <header className="w-fit bg-transparent backdrop-blur-md fixed top-5 left-5 z-50 rounded-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-start px-4 py-3
    bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-xl gap-12">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image alt="navbar-logo" src={logo} className="w-20"/>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex bg-white/10 backdrop-blur-lg 
      border border-white/20 rounded-xl px-4 py-1">
          <NavigationMenuList className="hidden md:flex gap-5">
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">Features</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/services">Showcase</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Faq</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left">
            <SheetTitle className="sr-only">menu</SheetTitle>
            <div className="flex flex-col gap-4 mt-6">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Button className="mt-4 w-full">Sign Up</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
