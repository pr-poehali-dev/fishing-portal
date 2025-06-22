import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const teamMembers = [
    {
      name: "Сергей Рыбаков",
      role: "Основатель и главный редактор",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: "15 лет опыта",
    },
    {
      name: "Анна Ловецкая",
      role: "Эксперт по снастям",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=200&h=200&fit=crop&crop=face",
      experience: "12 лет опыта",
    },
    {
      name: "Дмитрий Озерный",
      role: "Гид и консультант",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      experience: "20 лет опыта",
    },
  ];

  const achievements = [
    { number: "50,000+", label: "Довольных рыбаков" },
    { number: "200+", label: "Проверенных баз" },
    { number: "1,000+", label: "Полезных статей" },
    { number: "5", label: "Лет работы" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero секция */}
        <section className="py-16 bg-gradient-to-b from-nature-water/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              О РыбПортале
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Мы объединяем любителей рыбалки по всей России, помогая находить
              лучшие места, делиться опытом и планировать незабываемые поездки
              на природу.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-bold text-3xl text-nature-forest mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Наша история */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Наша история
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  РыбПортал начался как хобби-проект группы энтузиастов рыбалки
                  в 2019 году. Мы хотели создать место, где рыболовы могли бы
                  легко находить информацию о лучших местах для рыбалки и
                  делиться своим опытом.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  За пять лет мы выросли в крупнейшее сообщество рыболовов в
                  рунете, собрав более 50,000 активных участников и проверив
                  сотни рыболовных баз по всей России.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      className="text-nature-forest mr-2"
                      size={20}
                    />
                    <span className="text-sm">
                      Награда "Лучший рыболовный портал 2023"
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop"
                  alt="Команда РыбПортала"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Наша команда
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессиональные рыболовы и эксперты, которые делают РыбПортал
                лучше каждый день
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-nature-forest font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Миссия */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Наша миссия
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Сделать рыбалку доступной и увлекательной для каждого,
                независимо от уровня опыта. Мы верим, что природа должна
                объединять людей, а рыбалка — это не просто хобби, а способ
                жизни.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center bg-nature-forest/5">
                  <Icon
                    name="Users"
                    className="mx-auto mb-4 text-nature-forest"
                    size={40}
                  />
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Сообщество
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Объединяем рыболовов и создаем дружественную среду для
                    обмена опытом
                  </p>
                </Card>

                <Card className="p-6 text-center bg-nature-water/5">
                  <Icon
                    name="Shield"
                    className="mx-auto mb-4 text-nature-water"
                    size={40}
                  />
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Качество
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Проверяем каждую базу отдыха и предоставляем только
                    достоверную информацию
                  </p>
                </Card>

                <Card className="p-6 text-center bg-nature-sand/5">
                  <Icon
                    name="Heart"
                    className="mx-auto mb-4 text-nature-sand"
                    size={40}
                  />
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Страсть
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Любим рыбалку всем сердцем и хотим поделиться этой страстью
                    с вами
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
