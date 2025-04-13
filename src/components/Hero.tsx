import { Button } from '@/components/ui/button';
import { Mic2, Play, Music, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-10 pb-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Левая колонка - текст */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="relative z-10 inline-block">
              <span className="bg-gradient-to-r from-anime-purple via-anime-pink to-anime-purple text-transparent bg-clip-text font-extrabold">
                Студия озвучивания аниме
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-anime-green/20 -z-10 transform -skew-x-12"></span>
            </span>
            <br />
            <span className="mt-2 inline-block bg-gradient-to-r from-anime-purple/90 to-anime-pink/90 text-transparent bg-clip-text">
              где рождаются эмоции
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            От мелодии к магии — мы воплощаем звуковые пейзажи, которые делают каждый аниме-проект особенным. 
            Качество каждой ноты и каждого слова создаёт тот самый эмоциональный отклик.
          </p>
          
          <div className="flex flex-col gap-4 items-start">
            <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white rounded-full px-6 py-5 text-lg">
              Услышать примеры <Play className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-6 py-5 text-lg flex items-center" 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Контакты <Phone className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center mt-8">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-anime-${['purple', 'pink', 'green', 'blue'][i-1]} border-2 border-background flex items-center justify-center text-white font-bold text-xs`}>
                  {i}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground font-medium border-l-2 border-anime-purple/30 pl-4">
              <span className="font-bold text-anime-purple">200+</span> успешных проектов
            </div>
          </div>
        </div>
        
        {/* Правая колонка - изображение */}
        <div className="relative ml-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1470&auto=format&fit=crop" 
              alt="Аниме звукозапись" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anime-purple/60 to-transparent mix-blend-overlay"></div>
            
            {/* Декоративный микрофон */}
            <div className="absolute bottom-8 right-8 bg-white p-3 rounded-full shadow-lg">
              <Mic2 className="w-6 h-6 text-anime-purple" />
            </div>
          </div>
          
          {/* Социальные медиа индикаторы */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {[
              { icon: '🎵', color: 'bg-anime-purple' },
              { icon: '🎬', color: 'bg-anime-pink' },
              { icon: '🎧', color: 'bg-anime-green' },
              { icon: '🎤', color: 'bg-anime-blue' }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 ${item.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 text-lg`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
