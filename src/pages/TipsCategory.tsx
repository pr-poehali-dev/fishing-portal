import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TipsCategory = () => {
  const { category } = useParams();

  const categoryData = {
    beginners: {
      title: "Советы для новичков",
      description: "Основы рыбалки для начинающих рыболовов",
    },
    advanced: {
      title: "Для опытных",
      description: "Профессиональные техники и секреты",
    },
    equipment: {
      title: "Снасти и оборудование",
      description: "Выбор и использование рыболовного снаряжения",
    },
  };

  const tips = [
    {
      id: 1,
      title: "Как выбрать первую удочку",
      excerpt: "Подробное руководство по выбору удилища для новичка",
      difficulty: "Новичок",
      readTime: "5 мин",
      image:
        "https://images.unsplash.com/photo-1445743432342-efc5bc8d24f9?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Основы заброса спиннинга",
      excerpt: "Техника правильного заброса для начинающих",
      difficulty: "Новичок",
      readTime: "7 мин",
      image:
        "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=400&h=250&fit=crop",
    },
  ];

  const currentCategory =
    categoryData[category as keyof typeof categoryData] ||
    categoryData.beginners;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="mb-6"
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Все советы
              </Button>

              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                {currentCategory.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tips.map((tip) => (
                <Card
                  key={tip.id}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-nature-forest text-white">
                      {tip.difficulty}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-heading text-xl">
                      {tip.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {tip.readTime}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tip.excerpt}</p>
                    <Button className="w-full bg-nature-water hover:bg-nature-water/90">
                      Читать совет
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

export default TipsCategory;
