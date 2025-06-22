import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Открытие нового сезона рыбалки в Карелии",
      excerpt: "Лучшие места и условия для весенней рыбалки",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      date: "15 мая 2024",
      author: "Сергей Рыбаков",
    },
    {
      id: 2,
      title: "Турнир по спортивной рыбалке на Волге",
      excerpt: "Регистрация участников открыта до 30 июня",
      image:
        "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=400&h=250&fit=crop",
      date: "22 мая 2024",
      author: "Дмитрий Озерный",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-nature-water/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                Новости рыбалки
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Актуальные новости из мира рыбалки, соревнований и рыболовного
                туризма
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="font-heading text-xl">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Icon name="Calendar" className="mr-1" size={14} />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <Icon name="User" className="mr-1" size={14} />
                        {item.author}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button
                      className="w-full bg-nature-forest hover:bg-nature-forest/90"
                      onClick={() =>
                        (window.location.href = `/news/${item.id}`)
                      }
                    >
                      Читать полностью
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
