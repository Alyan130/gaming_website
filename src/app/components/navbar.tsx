"use client"

import * as React from "react"
import { Menu, Search} from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"

const menuItems = [
  { title: "HOME", href: "/" },
  { title: "GAMES", href: "/games" },
  { title: "ABOUT US", href: "/about" },
  { title: "CONTACT US", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-graycolor text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">Nexus</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-[120px] flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="px-3 py-2 text-textcolor font-font2 text-[20px] rounded-md  hover:bg-gray-700"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-600  text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                />
              </div>
              <Button className="ml-3 font-font2 bg-green-500 hover:bg-green-600 text-white">
                BUY NOW
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-gray-900">
                <div className="flex flex-col space-y-4 mt-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-font2 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                  <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 font-font2  bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                    />
                  </div>
                  <Button className="bg-green-500 font-font2 hover:bg-green-600 text-white">
                    BUY NOW
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}