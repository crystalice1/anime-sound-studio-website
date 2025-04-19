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
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#8A2BE2] rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop" 
              alt="Team member" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center pt-8">
            У НАС ЕСТЬ ВСЁ, ЧТО НУЖНО ДЛЯ<br />
            <span className="text-[#8A2BE2]">ИДЕАЛЬНОГО ЗВУЧАНИЯ</span>
          </h2>
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