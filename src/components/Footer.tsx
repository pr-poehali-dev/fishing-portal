import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Рыбалка",
      links: ["Базы отдыха", "Водоемы", "Отчеты", "Форум"],
    },
    {
      title: "Сервис",
      links: ["О нас", "Контакты", "Поддержка", "Реклама"],
    },
    {
      title: "Полезное",
      links: ["Советы", "Календарь", "Погода", "Прогнозы"],
    },
  ];

  return (
    <footer className="bg-nature-forest text-white wood-texture">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Icon name="Fish" className="text-nature-sand" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">РыбПортал</h3>
                <p className="text-white/70 text-sm">
                  Лучшие места для рыбалки
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Мы помогаем рыболовам находить идеальные места для рыбалки,
              делиться опытом и планировать незабываемые поездки на природу.
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Icon name="Mail" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2024 РыбПортал. Все права защищены.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
