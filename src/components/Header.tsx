import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navItems = [
    { label: "Главная", href: "/", icon: "Home" },
    { label: "Базы отдыха", href: "/bases", icon: "MapPin" },
    { label: "Советы", href: "/tips", icon: "BookOpen" },
    { label: "Контакты", href: "/contacts", icon: "Phone" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 forest-gradient rounded-full flex items-center justify-center">
              <Icon name="Fish" className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-nature-forest">
                РыбПортал
              </h1>
              <p className="text-xs text-muted-foreground">
                Твоя рыбалка начинается здесь
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-nature-forest transition-colors duration-200"
              >
                <Icon name={item.icon as any} size={16} />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
