import { Headphones, Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="footer" className="bg-muted pt-16 pb-8 mt-16">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Headphones className="w-6 h-6 text-anime-purple mr-2" />
              <span className="font-bold text-xl">АнимеСаунд</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Профессиональная студия звукозаписи и саунд-дизайна, 
              специализирующаяся на создании аудио для аниме-проектов.
            </p>
            <div className="flex space-x-3">
              <SocialButton icon={<Instagram className="w-4 h-4" />} />
              <SocialButton icon={<Twitter className="w-4 h-4" />} />
              <SocialButton icon={<Youtube className="w-4 h-4" />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              <FooterLink>Озвучка персонажей</FooterLink>
              <FooterLink>Саундтреки</FooterLink>
              <FooterLink>Звуковые эффекты</FooterLink>
              <FooterLink>Аудиомастеринг</FooterLink>
              <FooterLink>Локализация аниме</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <FooterLink>О нас</FooterLink>
              <FooterLink>Команда</FooterLink>
              <FooterLink>Портфолио</FooterLink>
              <FooterLink>Блог</FooterLink>
              <FooterLink>Карьера</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-anime-purple mr-2 mt-0.5" />
                <span className="text-muted-foreground">Москва, ул. Аниме Студио, 42</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-anime-purple mr-2" />
                <span className="text-muted-foreground">+7 (901) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-anime-purple mr-2" />
                <span className="text-muted-foreground">info@anime-sound.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} АнимеСаунд. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm text-muted-foreground">Политика конфиденциальности</span>
            <span className="text-sm text-muted-foreground">Условия использования</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        {children}
      </a>
    </li>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full w-9 h-9 border-muted-foreground/30 hover:border-anime-purple hover:bg-anime-purple/10"
    >
      {icon}
    </Button>
  );
};

export default Footer;
