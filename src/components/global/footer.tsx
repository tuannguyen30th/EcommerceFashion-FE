import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 rounded-xl bg-black p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold">
              STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS
            </h2>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                placeholder="Enter your email address"
                className="bg-white text-black"
              />
              <Button className="whitespace-nowrap">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-400 mb-4">
              We have clothes that suits your style and which you're proud to wear. From
              women to men.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Github className="h-5 w-5" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">HELP</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

