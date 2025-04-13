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
                  src="/placeholder.svg" 
                  alt="Команда АнимеСаунд" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/80 mb-1">Аниме-саундтреки и озвучка</p>
                        <h3 className="text-2xl font-bold">Творческая команда профессионалов</h3>
                      </div>
                      <div className="hidden md:block">
                        <Button className="bg-white text-anime-purple hover:bg-white/90">
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
      </div>
    </section>
  );
};

export default TeamSection;
