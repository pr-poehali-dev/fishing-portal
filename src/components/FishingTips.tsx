import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FishingTips = () => {
  const tips = [
    {
      id: 1,
      title: "Лучшее время для рыбалки",
      excerpt: "Узнайте, когда рыба наиболее активна в разные сезоны года",
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=250&fit=crop",
      category: "Основы",
      readTime: "5 мин",
      author: "Сергей Рыбаков",
    },
    {
      id: 2,
      title: "Выбор правильной наживки",
      excerpt: "Какие приманки работают лучше всего для разных видов рыб",
      image:
        "https://images.unsplash.com/photo-1445743432342-efc5bc8d24f9?w=400&h=250&fit=crop",
      category: "Снасти",
      readTime: "7 мин",
      author: "Анна Ловецкая",
    },
    {
      id: 3,
      title: "Поиск перспективных мест",
      excerpt: "Как читать водоем и находить места стоянок рыбы",
      image:
        "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=400&h=250&fit=crop",
      category: "Техника",
      readTime: "10 мин",
      author: "Дмитрий Озерный",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Советы от профи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Повышайте свое мастерство с помощью проверенных советов от опытных
            рыболовов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card
              key={tip.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-nature-forest text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tip.category}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-lg leading-tight hover:text-nature-forest transition-colors cursor-pointer">
                  {tip.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {tip.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="User" className="mr-1" size={14} />
                      {tip.author}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {tip.readTime}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-nature-forest hover:text-nature-forest/80"
                >
                  Читать полностью
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-nature-water hover:bg-nature-water/90 text-white px-8">
            <Icon name="BookOpen" className="mr-2" size={20} />
            Все советы и статьи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FishingTips;
