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
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24">
            <div className="relative">
              {/* Звуковая волна в стиле аниме */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                    {/* Chibi аниме-персонаж с наушниками */}
                    <div className="w-16 h-16 relative">
                      <img 
                        src="/logo-b.svg" 
                        alt="Аниме персонаж" 
                        className="w-full h-full object-contain animate-bounce" 
                        style={{ animationDuration: '3s' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Звуковые волны */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="absolute w-full h-full rounded-full border-2 border-[#8A2BE2] opacity-0"
                    style={{
                      animation: `ripple 1.5s linear infinite ${i * 0.5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center pt-12">
            У НАС ЕСТЬ ВСЁ, ЧТО НУЖНО ДЛЯ<br />
            <span className="text-[#8A2BE2]">ИДЕАЛЬНОГО ЗВУЧАНИЯ</span>
          </h2>

          {/* CSS для анимации звуковых волн */}
          <style jsx>{`
            @keyframes ripple {
              0% {
                transform: scale(0.8);
                opacity: 0.8;
              }
              100% {
                transform: scale(1.5);
                opacity: 0;
              }
            }
          `}</style>
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