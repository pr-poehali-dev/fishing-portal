import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Booking = () => {
  const availableBases = [
    {
      id: 1,
      name: "Озеро Селигер",
      location: "Тверская область",
      price: "от 2500₽/сутки",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      features: ["Лодки", "Баня", "Питание"],
    },
    {
      id: 2,
      name: "Карельские озера",
      location: "Республика Карелия",
      price: "от 2800₽/сутки",
      image:
        "https://images.unsplash.com/photo-1510312305653-8ed496efacd2?w=300&h=200&fit=crop",
      features: ["Домики", "Wi-Fi", "Мангал"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                Бронирование
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Забронируйте идеальное место для рыбалки прямо сейчас
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Форма бронирования */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading text-2xl flex items-center">
                    <Icon
                      name="Calendar"
                      className="mr-3 text-nature-forest"
                      size={24}
                    />
                    Форма бронирования
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin">Дата заезда</Label>
                      <Input id="checkin" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="checkout">Дата выезда</Label>
                      <Input id="checkout" type="date" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="10"
                      defaultValue="2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <Button className="w-full bg-nature-forest hover:bg-nature-forest/90 text-lg py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              {/* Доступные базы */}
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Доступные базы
                </h3>
                <div className="space-y-6">
                  {availableBases.map((base) => (
                    <Card
                      key={base.id}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex">
                        <img
                          src={base.image}
                          alt={base.name}
                          className="w-32 h-24 object-cover rounded-l-lg"
                        />
                        <div className="flex-1 p-4">
                          <h4 className="font-heading font-semibold text-lg text-nature-forest">
                            {base.name}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Icon name="MapPin" className="mr-1" size={14} />
                            {base.location}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {base.features.map((feature) => (
                              <span
                                key={feature}
                                className="bg-nature-water/10 text-nature-water px-2 py-1 rounded text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          <p className="font-bold text-nature-forest">
                            {base.price}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
