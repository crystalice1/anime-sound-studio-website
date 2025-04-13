import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Headphones, Mic2, Music, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/20 to-anime-green/20 z-0 rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Навигация */}
      <nav className="relative z-10 px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Headphones className="w-8 h-8 text-anime-purple mr-2" />
          <span className="font-bold text-xl text-foreground">АнимеСаунд</span>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-anime-purple">Главная</Button>
          <Button variant="ghost" className="text-foreground hover:text-anime-purple">Услуги</Button>
          <Button variant="ghost" className="text-foreground hover:text-anime-purple">Проекты</Button>
          <Button variant="ghost" className="text-foreground hover:text-anime-purple">Команда</Button>
        </div>

        {/* Кнопка контакта */}
        <div className="hidden md:block">
          <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white rounded-full px-6">
            Связаться
          </Button>
        </div>

        {/* Мобильное меню кнопка */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-20 px-4 py-2 shadow-lg">
          <div className="flex flex-col space-y-2 pb-4">
            <Button variant="ghost" className="text-foreground justify-start">Главная</Button>
            <Button variant="ghost" className="text-foreground justify-start">Услуги</Button>
            <Button variant="ghost" className="text-foreground justify-start">Проекты</Button>
            <Button variant="ghost" className="text-foreground justify-start">Команда</Button>
            <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white w-full mt-2">
              Связаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
