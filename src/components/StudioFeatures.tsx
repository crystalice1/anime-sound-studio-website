import { Shield, Coffee, Server, Mic2, Headphones, Music, Zap } from "lucide-react";

const StudioFeatures = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-muted rounded-3xl my-12 mx-4 md:mx-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          У НАС ЕСТЬ ВСЁ, ЧТО НУЖНО ДЛЯ<br />
          <span className="text-anime-purple">ИДЕАЛЬНОГО ЗВУЧАНИЯ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Mic2 className="w-8 h-8 text-anime-purple" />}
            title="Профессиональные студии"
            description="Акустически обработанные помещения со звукоизоляцией для идеального звучания"
          />
          
          <FeatureCard 
            icon={<Headphones className="w-8 h-8 text-anime-green" />}
            title="Современное оборудование"
            description="Микрофоны, аудиоинтерфейсы и мониторы высочайшего качества"
          />
          
          <FeatureCard 
            icon={<Music className="w-8 h-8 text-anime-pink" />}
            title="Талантливые актёры озвучки"
            description="Профессионалы с опытом работы над аниме различных жанров"
          />
          
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-anime-yellow" />}
            title="Быстрые сроки выполнения"
            description="Оперативная работа над проектами любой сложности"
          />
          
          <FeatureCard 
            icon={<Coffee className="w-8 h-8 text-anime-blue" />}
            title="Комфортные зоны отдыха"
            description="Пространства для релаксации и восстановления между сессиями"
          />
          
          <FeatureCard 
            icon={<Shield className="w-8 h-8 text-anime-purple" />}
            title="Конфиденциальность"
            description="Гарантия безопасности и сохранности ваших проектов"
          />
        </div>
        
        <div className="text-center mt-16">
          <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <Headphones className="w-8 h-8 text-anime-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default StudioFeatures;
