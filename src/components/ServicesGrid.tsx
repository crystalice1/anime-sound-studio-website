import { Mic2, Music, Headphones, Waveform } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: 1,
    title: "Озвучка персонажей",
    icon: <Mic2 className="w-6 h-6 text-anime-green" />,
    color: "bg-anime-green/10",
    borderColor: "border-anime-green",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Саундтреки",
    icon: <Music className="w-6 h-6 text-anime-pink" />,
    color: "bg-anime-pink/10",
    borderColor: "border-anime-pink",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Звуковые эффекты",
    icon: <Waveform className="w-6 h-6 text-anime-blue" />,
    color: "bg-anime-blue/10",
    borderColor: "border-anime-blue",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Аудиомастеринг",
    icon: <Headphones className="w-6 h-6 text-anime-yellow" />,
    color: "bg-anime-yellow/10",
    borderColor: "border-anime-yellow",
    image: "/placeholder.svg"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-4xl font-bold mb-4">НАШИ УСЛУГИ</h2>
          <p className="text-muted-foreground max-w-2xl">
            Профессиональный звук для ваших аниме-проектов любой сложности. От озвучивания персонажей 
            до создания уникальных саундтреков и звуковых ландшафтов.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="ghost" size="icon">
            ◀
          </Button>
          <Button variant="ghost" size="icon">
            ▶
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <Card 
            key={service.id} 
            className={`border-0 overflow-hidden rounded-2xl card-hover ${service.borderColor}`}
          >
            <CardContent className="p-0 relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute top-4 left-4">
                    <div className={`${service.color} p-2 rounded-full`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                    <Button variant="ghost" className="text-white/80 p-0 hover:text-white">
                      Подробнее →
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
