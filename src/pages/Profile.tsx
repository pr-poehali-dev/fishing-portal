import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const userStats = [
    { label: "Поездок", value: "12", icon: "MapPin" },
    { label: "Трофеев", value: "48", icon: "Trophy" },
    { label: "Отзывов", value: "8", icon: "MessageCircle" },
    { label: "Рейтинг", value: "4.9", icon: "Star" },
  ];

  const recentBookings = [
    {
      id: 1,
      baseName: "Озеро Селигер",
      date: "15-17 июня 2024",
      status: "confirmed",
      statusText: "Подтверждено",
    },
    {
      id: 2,
      baseName: "Карельские озера",
      date: "1-3 августа 2024",
      status: "pending",
      statusText: "Ожидает",
    },
  ];

  const achievements = [
    { name: "Первый трофей", icon: "Trophy", date: "Май 2024" },
    { name: "Опытный рыбак", icon: "Fish", date: "Июнь 2024" },
    { name: "Активный турист", icon: "Mountain", date: "Июль 2024" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Профиль пользователя */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <Avatar className="mx-auto w-24 h-24 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
                    <AvatarFallback>СР</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-heading text-2xl">
                    Сергей Рыбаков
                  </CardTitle>
                  <p className="text-muted-foreground">Любитель-новичок</p>
                  <Badge variant="secondary" className="mt-2">
                    <Icon name="Calendar" className="mr-1" size={12} />С нами с
                    мая 2024
                  </Badge>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {userStats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <Icon
                          name={stat.icon as any}
                          className="mx-auto mb-2 text-nature-forest"
                          size={20}
                        />
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-nature-forest hover:bg-nature-forest/90">
                    <Icon name="Edit" className="mr-2" size={16} />
                    Редактировать профиль
                  </Button>
                </CardContent>
              </Card>

              {/* Основной контент */}
              <div className="lg:col-span-2 space-y-8">
                {/* Мои бронирования */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="Calendar"
                        className="mr-3 text-nature-forest"
                        size={24}
                      />
                      Мои бронирования
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <h4 className="font-semibold">
                              {booking.baseName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {booking.date}
                            </p>
                          </div>
                          <Badge
                            variant={
                              booking.status === "confirmed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {booking.statusText}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Достижения */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="Award"
                        className="mr-3 text-nature-forest"
                        size={24}
                      />
                      Достижения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.name}
                          className="text-center p-4 border rounded-lg"
                        >
                          <Icon
                            name={achievement.icon as any}
                            className="mx-auto mb-2 text-nature-sand"
                            size={32}
                          />
                          <h4 className="font-semibold">{achievement.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
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

export default Profile;
