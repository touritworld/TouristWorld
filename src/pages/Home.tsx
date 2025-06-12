
import { Link } from "react-router-dom";
import { Car, Calendar, MapPin, Users } from "lucide-react"; //son importantes

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            Transporte de Lujo a su Servicio
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            Viaje con la máxima comodidad, seguridad y exclusividad a cualquier
            destino.
          </p>
          <Link
            to="/book"
            className="bg-primary text-background font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 inline-block"
          >
            Reservar Ahora
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Una Experiencia Inigualable
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: Car, title: "Vehículos de Alta Gama", desc: "Flota moderna y mantenida a la perfección." },
              { icon: Calendar, title: "Disponibilidad 24/7", desc: "Servicio premium a cualquier hora, cualquier día." },
              { icon: MapPin, title: "Cobertura Total", desc: "Viajes locales, nacionales e internacionales." },
              { icon: Users, title: "Conductores Profesionales", desc: "Expertos en seguridad y servicio al cliente." },
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-surface rounded-lg border-t-2 border-primary/50 hover:border-primary transition-all transform hover:-translate-y-2">
                <div className="inline-block p-4 bg-background rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-text-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Types */}
      <div className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestra Flota Exclusiva
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "https://motormagazine.com.ar/wp-content/uploads/2024/04/nuevo-renault-duster-2024-argentina-1.jpg", name: "SUV Premium", desc: "Ideal para 1-4 pasajeros" },
              { img: "https://www.carmaxrentacar.com/guayaquil/wp-content/uploads/2020/01/hyundai-carmax-geo.jpg", name: "Van Ejecutiva", desc: "Capacidad para 5-8 pasajeros" },
              { img: "https://d2e5b8shawuel2.cloudfront.net/vehicle/308186/hrv/original.jpg", name: "Van Sprinter", desc: "Perfecto para 9-15 pasajeros" },
            ].map((vehicle) => (
              <div key={vehicle.name} className="bg-background rounded-lg shadow-2xl overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                <div className="overflow-hidden h-64">
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">{vehicle.name}</h3>
                  <p className="text-text-secondary">{vehicle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para su Próximo Viaje?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Permítanos encargarnos de cada detalle. Contáctenos y reserve su
            servicio de transporte de primera clase hoy mismo.
          </p>
          <Link
            to="/book"
            className="bg-primary text-background font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 inline-block"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </div>
  );
}
