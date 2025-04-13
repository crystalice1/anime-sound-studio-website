import { Mic2, Music, Headphones, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: 1,
    title: "Озвучка персонажей",
    icon: <Mic2 className="w-6 h-6 text-anime-green" />,
    color: "bg-anime-green/10",
    borderColor: "border-anime-green",
    description: "Профессиональная озвучка аниме-персонажей для любых проектов",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Саундтреки",
    icon: <Music className="w-6 h-6 text-anime-pink" />,
    color: "bg-anime-pink/10",
    borderColor: "border-anime-pink",
    description: "Создание уникальных мелодий и композиций под проект любой сложности",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Звуковые эффекты",
    icon: <Zap className="w-6 h-6 text-anime-blue" />,
    color: "bg-anime-blue/10",
    borderColor: "border-anime-blue",
    description: "Разработка уникальных звуковых эффектов для создания правильной атмосферы",
    image: "https://images.unsplash.com/photo-1510279911118-fa071c6a9562?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Аудиомастеринг",
    icon: <Headphones className="w-6 h-6 text-anime-yellow" />,
    color: "bg-anime-yellow/10",
    borderColor: "border-anime-yellow",
    description: "Финальная обработка звука для получения идеального результата",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop"
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
          {['1', '2', '3', '4'].map((num, index) => (
            <Button 
              key={num}
              variant={index === 0 ? "default" : "outline"} 
              size="icon"
              className={`w-10 h-10 rounded-full ${index === 0 ? 'bg-anime-purple text-white' : 'text-muted-foreground hover:text-anime-purple hover:border-anime-purple'}`}
            >
              {num}
            </Button>
          ))}
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute top-4 left-4">
                    <div className={`${service.color} p-2 rounded-full backdrop-blur-sm border border-white/10`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="text-white/80 p-0 hover:text-white group">
                      Подробнее <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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
