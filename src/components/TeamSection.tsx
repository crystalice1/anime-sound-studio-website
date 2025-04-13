import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center">
              <span className="text-anime-purple">НАША</span>&nbsp;КОМАНДА
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Профессионалы, влюбленные в свое дело. Мы объединяем опыт создания аутентичного звука 
              с глубоким пониманием аниме-культуры.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Присоединиться к команде
          </Button>
        </div>
        
        <div className="rounded-2xl overflow-hidden">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop" 
                  alt="Команда АнимеСаунд" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                      <div className="max-w-lg">
                        <p className="text-white/80 mb-2 uppercase tracking-wider text-sm font-medium">Аниме-саундтреки и озвучка</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Творческая команда профессионалов</h3>
                        <p className="text-white/70 mb-4 md:pr-8">
                          Объединяем таланты актёров озвучки, звукорежиссеров, композиторов и саунд-дизайнеров для создания исключительного контента.
                        </p>
                      </div>
                      <div>
                        <Button className="bg-white text-anime-purple hover:bg-white/90 rounded-full px-6">
                          Познакомиться со всеми
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            {
              name: "Анна Михайлова",
              role: "Звукорежиссер",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
            },
            {
              name: "Дмитрий Соколов",
              role: "Композитор",
              image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
            },
            {
              name: "Елена Волкова",
              role: "Актриса озвучки",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop"
            },
            {
              name: "Максим Орлов",
              role: "Саунд-дизайнер",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop"
            }
          ].map((member, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 rounded-xl">
                <div>
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
