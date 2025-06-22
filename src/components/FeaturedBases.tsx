import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedBases = () => {
  const bases = [
    {
      id: 1,
      name: "Озеро Селигер",
      location: "Тверская область",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      price: "от 2500₽/сутки",
      features: ["Лодки в аренду", "Баня", "Питание"],
      fish: ["Щука", "Окунь", "Судак"],
    },
    {
      id: 2,
      name: "Река Волга",
      location: "Астраханская область",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      rating: 4.9,
      price: "от 3200₽/сутки",
      features: ["Гид", "Снасти", "Трансфер"],
      fish: ["Сазан", "Судак", "Сом"],
    },
    {
      id: 3,
      name: "Карельские озера",
      location: "Республика Карелия",
      image:
        "https://images.unsplash.com/photo-1510312305653-8ed496efacd2?w=400&h=300&fit=crop",
      rating: 4.7,
      price: "от 2800₽/сутки",
      features: ["Домики", "Мангал", "Wi-Fi"],
      fish: ["Форель", "Хариус", "Окунь"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Популярные базы отдыха
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальное место для рыбалки из нашей коллекции проверенных
            баз отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bases.map((base, index) => (
            <Card
              key={base.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 wood-texture"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={base.image}
                  alt={base.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Icon
                    name="Star"
                    className="text-yellow-500 mr-1"
                    size={16}
                  />
                  <span className="font-semibold text-sm">{base.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl text-nature-forest">
                  {base.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  <span>{base.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {base.fish.map((fish) => (
                    <span
                      key={fish}
                      className="bg-nature-water/10 text-nature-water px-2 py-1 rounded-md text-sm font-medium"
                    >
                      {fish}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {base.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Icon
                        name="Check"
                        className="mr-2 text-nature-forest"
                        size={16}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="font-bold text-lg text-nature-forest">
                      {base.price}
                    </span>
                  </div>
                  <Button className="bg-nature-forest hover:bg-nature-forest/90">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-nature-forest text-nature-forest hover:bg-nature-forest hover:text-white"
          >
            <Icon name="Grid3x3" className="mr-2" size={20} />
            Показать все базы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBases;
