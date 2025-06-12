import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface text-text-primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Service WorldTour</h3>
            <p className="text-text-secondary mb-4">
              Transporte especial de calidad para todos sus destinos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-text-secondary hover:text-primary">
                  Reservar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-text-secondary hover:text-primary">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Transporte Ejecutivo</li>
              <li>Servicios Corporativos</li>
              <li>Turismo</li>
              <li>Eventos Especiales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-text-secondary">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                +57 3218605318
              </li>
              <li className="flex items-center text-text-secondary">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                contabilidadtouristworld@gmail.com
              </li>
              <li className="flex items-center text-text-secondary">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                Medellín, Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Service TouristWorld. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
