import { Mic2, Music, Zap, Headphones, Waveform, VolumeX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: 1,
    title: "Озвучка персонажей",
    icon: "🎤",
    color: "bg-[#8A2BE2]",
    description: "Профессиональная озвучка аниме-персонажей для любых проектов",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Саундтреки",
    icon: "🎵",
    color: "bg-[#FF1493]",
    description: "Создание уникальных мелодий и композиций под проект любой сложности",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Звуковые эффекты",
    icon: "🎧",
    color: "bg-[#4CAF50]",
    description: "Разработка уникальных звуковых эффектов для создания правильной атмосферы",
    image: "https://images.unsplash.com/photo-1510279911118-fa071c6a9562?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Аудиомастеринг",
    icon: "🎬",
    color: "bg-[#2196F3]",
    description: "Финальная обработка звука для получения идеального результата",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#8A2BE2]">НАШИ УСЛУГИ</h2>
          <p className="text-muted-foreground max-w-2xl">
            Профессиональный звук для ваших аниме-проектов любой сложности. От озвучивания персонажей 
            до создания уникальных саундтреков и звуковых ландшафтов.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-[#8A2BE2]/10">
            ◀
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#8A2BE2]/10">
            ▶
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <Card 
            key={service.id} 
            className="border-0 overflow-hidden rounded-2xl card-hover shadow-lg hover:shadow-xl"
          >
            <CardContent className="p-0 relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  {/* Иконка в стиле яркого кружка с эмодзи */}
                  <div className="absolute top-4 left-4">
                    <div className={`${service.color} w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 text-2xl`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-white/80 p-0 hover:text-white group flex items-center"
                    >
                      Подробнее 
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Кнопка Все услуги */}
      <div className="flex justify-center mt-10">
        <Button 
          className="rounded-full bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white px-8 py-6 text-lg"
        >
          Все услуги
        </Button>
      </div>
    </section>
  );
};

export default ServicesGrid;