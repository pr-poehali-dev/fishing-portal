import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSingle = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="mb-6"
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад к новостям
              </Button>

              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
                alt="Открытие нового сезона рыбалки"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
              />

              <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-4">
                <div className="flex items-center">
                  <Icon name="Calendar" className="mr-1" size={14} />
                  15 мая 2024
                </div>
                <div className="flex items-center">
                  <Icon name="User" className="mr-1" size={14} />
                  Сергей Рыбаков
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-1" size={14} />5 мин чтения
                </div>
              </div>

              <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Открытие нового сезона рыбалки в Карелии
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                С наступлением весны в Карелии открывается новый сезон рыбалки.
                Этот регион славится своими кристально чистыми озерами и богатым
                рыбным миром.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                Лучшие места для рыбалки
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                В этом году особенно рекомендуем обратить внимание на озеро
                Ладожское, где активно клюет щука и окунь. Также отличные
                результаты показывает рыбалка на реке Шуя, где можно поймать
                форель и хариуса.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                Советы для успешной рыбалки
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Лучшее время для рыбалки — раннее утро или вечер</li>
                <li>Используйте местные наживки — червей и мотыля</li>
                <li>Обязательно возьмите с собой теплую одежду</li>
                <li>Не забудьте про рыболовную лицензию</li>
              </ul>
            </div>

            <div className="border-t pt-8 mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    Поделиться:
                  </span>
                  <Button variant="ghost" size="sm">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>

                <Button className="bg-nature-forest hover:bg-nature-forest/90">
                  Читать другие новости
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NewsSingle;
