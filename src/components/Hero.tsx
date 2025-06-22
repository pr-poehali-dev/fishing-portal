import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center water-ripple">
      <div className="absolute inset-0 water-gradient opacity-90"></div>

      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-4">
            Лучшие места для рыбалки
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Откройте для себя идеальные водоемы, проверенные базы отдыха и
            секреты успешной рыбалки
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-nature-forest hover:bg-nature-forest/90 text-white px-8 py-3 text-lg"
          >
            <Icon name="Search" className="mr-2" size={20} />
            Найти базу отдыха
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-nature-water px-8 py-3 text-lg"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Смотреть видео
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Icon
              name="MapPin"
              className="mx-auto mb-4 text-nature-sand"
              size={32}
            />
            <h3 className="font-heading font-semibold text-lg mb-2">
              200+ баз отдыха
            </h3>
            <p className="text-sm opacity-90">
              Проверенные места по всей России
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Icon
              name="Users"
              className="mx-auto mb-4 text-nature-sand"
              size={32}
            />
            <h3 className="font-heading font-semibold text-lg mb-2">
              50k+ рыбаков
            </h3>
            <p className="text-sm opacity-90">
              Активное сообщество любителей рыбалки
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Icon
              name="Star"
              className="mx-auto mb-4 text-nature-sand"
              size={32}
            />
            <h3 className="font-heading font-semibold text-lg mb-2">
              1000+ отзывов
            </h3>
            <p className="text-sm opacity-90">
              Честные отзывы от реальных посетителей
            </p>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
