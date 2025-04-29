const StudioFeatures = () => {
  const features = [
    {
      icon: "🎙️",
      color: "bg-[#8A2BE2]", // anime-purple
      title: "Профессиональные студии",
      description: "Акустически обработанные помещения со звукоизоляцией для идеального звучания",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: "🎧",
      color: "bg-[#4CAF50]", // anime-green
      title: "Современное оборудование",
      description: "Микрофоны, аудиоинтерфейсы и мониторы высочайшего качества",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1469&auto=format&fit=crop"
    },
    {
      icon: "🎭",
      color: "bg-[#FF1493]", // anime-pink
      title: "Талантливые актёры озвучки",
      description: "Профессионалы с опытом работы над аниме различных жанров",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1287&auto=format&fit=crop"
    },
    {
      icon: "⚡",
      color: "bg-[#FFC107]", // anime-yellow
      title: "Быстрые сроки выполнения",
      description: "Оперативная работа над проектами любой сложности",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: "☕",
      color: "bg-[#2196F3]", // anime-blue
      title: "Комфортные зоны отдыха",
      description: "Пространства для релаксации и восстановления между сессиями",
      image: "https://images.unsplash.com/photo-1606787619248-f301830a5a57?q=80&w=1470&auto=format&fit=crop"
    },
    {
      icon: "🔒",
      color: "bg-[#8A2BE2]", // anime-purple
      title: "Конфиденциальность",
      description: "Гарантия безопасности и сохранности ваших проектов",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-muted rounded-3xl my-12 mx-4 md:mx-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16">
          {/* Аниме-стилизованный элемент вместо круга */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <div className="relative">
              {/* Фон с градиентом в стиле аниме */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-to-r from-[#F8BBD0] to-[#F48FB1] rounded-full p-1 animate-pulse shadow-lg">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    {/* Аниме-персонаж */}
                    <div className="w-24 h-24 relative flex items-center justify-center">
                      <img 
                        src="https://cdn.poehali.dev/files/efb41646-71e3-46c6-959f-0416de85fb67.png" 
                        alt="Милый аниме-персонаж" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                {/* Декоративные сердечки вокруг */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="absolute w-4 h-4 opacity-70"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F48FB1'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E\")",
                      backgroundSize: 'contain',
                      left: `${45 + Math.sin(i * 2) * 40}%`,
                      top: `${45 + Math.cos(i * 2) * 40}%`,
                      animation: `float${i} ${2 + i * 0.5}s ease-in-out infinite alternate`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center pt-20">
            У НАС ЕСТЬ ВСЁ, ЧТО НУЖНО ДЛЯ<br />
            <span className="text-[#8A2BE2]">ИДЕАЛЬНОГО ЗВУЧАНИЯ</span>
          </h2>

          {/* CSS для анимации элементов */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes float1 {
              0% { transform: translate(0, 0) rotate(0deg); }
              100% { transform: translate(5px, -5px) rotate(5deg); }
            }
            @keyframes float2 {
              0% { transform: translate(0, 0) rotate(0deg); }
              100% { transform: translate(-7px, -3px) rotate(-5deg); }
            }
            @keyframes float3 {
              0% { transform: translate(0, 0) rotate(0deg); }
              100% { transform: translate(3px, 7px) rotate(3deg); }
            }
          `}} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  color,
  title, 
  description, 
  image 
}: { 
  icon: string, 
  color: string,
  title: string, 
  description: string,
  image: string
}) => {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center">
          <div className={`mr-3 ${color} w-10 h-10 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 text-lg`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default StudioFeatures;