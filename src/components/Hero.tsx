import { Button } from '@/components/ui/button';
import { Mic2, Play, Music, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-10 pb-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Левая колонка - текст */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-glow bg-gradient-to-r from-anime-purple to-anime-pink text-transparent bg-clip-text">
              Студия озвучивания аниме
            </span>
            <br />
            <span>где рождаются эмоции</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            От мелодии к магии — мы воплощаем звуковые пейзажи, которые делают каждый аниме-проект особенным. 
            Качество каждой ноты и каждого слова создаёт тот самый эмоциональный отклик.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white rounded-full px-6 py-5 text-lg">
              Услышать примеры <Play className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-5 text-lg">
              О нас
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-anime-${['purple', 'pink', 'green', 'blue'][i-1]} border-2 border-background flex items-center justify-center text-white font-bold text-xs`}>
                  {i}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">200+</span> успешных проектов
            </div>
          </div>
        </div>
        
        {/* Правая колонка - изображение */}
        <div className="relative ml-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Аниме звукозапись" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anime-purple/40 to-transparent mix-blend-overlay"></div>
            
            {/* Декоративный микрофон */}
            <div className="absolute bottom-8 right-8 bg-white p-3 rounded-full shadow-lg">
              <Mic2 className="w-6 h-6 text-anime-purple" />
            </div>
          </div>
          
          {/* Социальные медиа индикаторы */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {['youtube', 'twitter', 'instagram', 'spotify'].map((platform, i) => (
              <div key={platform} className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition">
                <span className="text-xs font-bold">{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
