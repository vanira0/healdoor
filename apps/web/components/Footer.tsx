import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-white">HealDoor</h3>
          <p className="text-sm text-slate-400">
            Professional home healthcare services and medical equipment rental/purchase in Delhi NCR.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-white">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/physiotherapy" className="hover:text-primary transition-colors">Physiotherapy</Link></li>
            <li><Link href="/oxygen-equipment" className="hover:text-primary transition-colors">Oxygen Equipments</Link></li>
            <li><Link href="/icu-at-home" className="hover:text-primary transition-colors">ICU at Home</Link></li>
            <li><Link href="/wheelchairs-walkers-crutches" className="hover:text-primary transition-colors">Wheelchairs & Walkers</Link></li>
            <li><Link href="/investigations-at-home" className="hover:text-primary transition-colors">Investigations at Home</Link></li>
            <li><Link href="/nursing-elderly-care-gda" className="hover:text-primary transition-colors">Nursing & Elderly Care</Link></li>
            <li><Link href="/other-medical-equipments" className="hover:text-primary transition-colors">Other Medical Equipments</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>160, Rajdhani Enclave, Parking Pitampura, Delhi 110034</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+919871281574" className="hover:text-primary transition-colors">+91-9871281574</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:ukmlamrcp@gmail.com" className="hover:text-primary transition-colors">ukmlamrcp@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} HealDoor. All rights reserved.</p>
      </div>
    </footer>
  );
}
