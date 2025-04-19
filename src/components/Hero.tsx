import { Button } from '@/components/ui/button';
import { Mic2, Play, Music, Phone } from 'lucide-react';

const Hero = () => {
  // Массив с URL изображений для аватаров
  const avatars = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop"
  ];

  // Фоновые цвета для аватаров
  const avatarColors = ['#8A2BE2', '#FF1493', '#4CAF50', '#2196F3'];

  return (
    <div className="relative pt-10 pb-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Левая колонка - текст */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block mb-2 text-[#8A2BE2] bg-clip-text" style={{
              background: 'linear-gradient(90deg, #8A2BE2, #FF1493, #8A2BE2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 3s linear infinite'
            }}>
              Студия озвучивания аниме
            </span>
            <span className="block mt-2 text-foreground">
              где рождаются эмоции
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            От мелодии к магии — мы воплощаем звуковые пейзажи, которые делают каждый аниме-проект особенным. 
            Качество каждой ноты и каждого слова создаёт тот самый эмоциональный отклик.
          </p>
          
          <div className="flex flex-col gap-4 items-start">
            <Button className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white rounded-full px-6 py-5 text-lg">
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
              {avatars.map((avatar, i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  style={{ 
                    borderColor: avatarColors[i],
                    boxShadow: `0 0 0 2px ${avatarColors[i]}20` 
                  }}
                >
                  <img 
                    src={avatar} 
                    alt="Команда" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground font-medium border-l-2 border-[#8A2BE2]/30 pl-4">
              <span className="font-bold text-[#8A2BE2]">200+</span> успешных проектов
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#8A2BE2]/60 to-transparent mix-blend-overlay"></div>
            
            {/* Декоративный микрофон */}
            <div className="absolute bottom-8 right-8 bg-white p-3 rounded-full shadow-lg">
              <Mic2 className="w-6 h-6 text-[#8A2BE2]" />
            </div>
          </div>
          
          {/* Социальные медиа индикаторы */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {[
              { icon: '🎵', color: 'bg-[#8A2BE2]' },
              { icon: '🎬', color: 'bg-[#FF1493]' },
              { icon: '🎧', color: 'bg-[#4CAF50]' },
              { icon: '🎤', color: 'bg-[#2196F3]' }
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