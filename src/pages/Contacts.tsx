import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Ежедневно с 9:00 до 21:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@rybportal.ru",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Рыбацкая, 15",
      description: "Офис работает пн-пт",
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
                Контакты
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом. Мы всегда готовы
                помочь!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Контактная информация */}
              <div>
                <h2 className="font-heading font-bold text-2xl mb-8">
                  Как с нами связаться
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-nature-forest/10 rounded-full flex items-center justify-center">
                          <Icon
                            name={contact.icon as any}
                            className="text-nature-forest"
                            size={20}
                          />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg">
                            {contact.title}
                          </h3>
                          <p className="font-semibold text-nature-forest">
                            {contact.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-nature-water/5">
                  <h3 className="font-heading font-semibold text-lg mb-3">
                    Время работы
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота - Воскресенье:</span>
                      <span className="font-semibold">10:00 - 16:00</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Форма обратной связи */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading text-2xl flex items-center">
                    <Icon
                      name="MessageCircle"
                      className="mr-3 text-nature-forest"
                      size={24}
                    />
                    Напишите нам
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема сообщения</Label>
                    <Input id="subject" placeholder="О чем хотите спросить?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Напишите ваше сообщение..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-nature-forest hover:bg-nature-forest/90 text-lg py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
