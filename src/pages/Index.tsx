import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('tpay');
  
  const serverData = {
    totalCapacity: 200,
    activeServers: 48,
    locations: 12,
    uptime: 99.9,
    datacenters: 8
  };

  const plans = [
    {
      name: 'Базовый',
      storage: '100 ГБ',
      price: '299',
      features: ['100 ГБ хранилища', 'Синхронизация файлов', 'Доступ с любых устройств', 'Базовая поддержка']
    },
    {
      name: 'Профессиональный',
      storage: '500 ГБ',
      price: '599',
      features: ['500 ГБ хранилища', 'Расширенная синхронизация', 'Приоритетная поддержка', 'История версий файлов'],
      popular: true
    },
    {
      name: 'Корпоративный',
      storage: '2 ТБ',
      price: '1499',
      features: ['2 ТБ хранилища', 'Командная работа', 'Премиум поддержка 24/7', 'Расширенная безопасность']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cloud" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">CloudWorld</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'pricing' ? 'text-primary' : 'text-foreground'}`}
            >
              Тарифы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contact' ? 'text-primary' : 'text-foreground'}`}
            >
              Контакты
            </button>
          </div>

          <Button className="bg-primary text-white hover:bg-primary/90">
            Войти
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ваше облачное хранилище
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Храните, синхронизируйте и делитесь файлами безопасно. Доступ к вашим данным в любой точке мира.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
              Начать бесплатно
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Server" size={28} className="text-primary" />
                <h2 className="text-2xl font-semibold">Наша инфраструктура</h2>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 rounded-lg bg-primary/10">
                  <div className="text-5xl font-bold text-primary mb-2">{serverData.totalCapacity} ТБ</div>
                  <p className="text-sm text-muted-foreground">Общая ёмкость серверов</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="Server" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Активные серверы</p>
                      <p className="font-semibold">{serverData.activeServers}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Локации</p>
                      <p className="font-semibold">{serverData.locations}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="Database" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Дата-центры</p>
                      <p className="font-semibold">{serverData.datacenters}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="Activity" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Uptime</p>
                      <p className="font-semibold">{serverData.uptime}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                <h2 className="text-2xl font-semibold">Статистика активности</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Icon name="Upload" size={20} className="text-primary" />
                    <span className="font-medium">Загружено файлов</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">847</span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Icon name="Download" size={20} className="text-primary" />
                    <span className="font-medium">Скачано файлов</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">1,234</span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Icon name="Share2" size={20} className="text-primary" />
                    <span className="font-medium">Общих папок</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">12</span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="font-medium">Активность сегодня</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">23</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Icon name="Lock" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
              <p className="text-muted-foreground">Шифрование данных и защита от несанкционированного доступа</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Icon name="Zap" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Скорость</h3>
              <p className="text-muted-foreground">Мгновенная синхронизация и быстрый доступ к файлам</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Icon name="Users" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Совместная работа</h3>
              <p className="text-muted-foreground">Делитесь файлами и работайте с командой эффективно</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Выберите тариф</h2>
            <p className="text-xl text-muted-foreground">Гибкие планы для любых задач</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative hover:shadow-2xl hover:scale-110 transition-all duration-300 ${plan.popular ? 'border-2 border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold text-primary mb-2">{plan.price} ₽</div>
                  <p className="text-muted-foreground">в месяц</p>
                  <div className="text-lg font-semibold text-foreground mt-2">{plan.storage}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                  size="lg"
                  onClick={() => {
                    setSelectedPlan(plan);
                    setShowPaymentModal(true);
                  }}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады помочь</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:support@cloudworld.ru" className="text-primary hover:underline">
                      support@cloudworld.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+78001234567" className="text-primary hover:underline">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123<br />
                      офис 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Часы работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Cloud" size={28} className="text-primary" />
                <span className="text-xl font-bold">CloudWorld</span>
              </div>
              <p className="text-white/70 text-sm">
                Надежное облачное хранилище для ваших данных
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2024 CloudWorld. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {showPaymentModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 relative animate-fade-in">
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2">Оплата тарифа</h3>
            <p className="text-muted-foreground mb-6">
              {selectedPlan.name} — {selectedPlan.price} ₽/мес
            </p>

            <div className="space-y-4 mb-6">
              <label className="block text-sm font-medium mb-3">Выберите способ оплаты</label>
              
              <button
                onClick={() => setPaymentMethod('tpay')}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === 'tpay' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">T-Pay</div>
                  <div className="text-xs text-muted-foreground">Быстрая оплата через T-Pay</div>
                </div>
                {paymentMethod === 'tpay' && <Icon name="Check" size={20} className="text-primary" />}
              </button>

              <button
                onClick={() => setPaymentMethod('sbp')}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === 'sbp' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  СБП
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">Система Быстрых Платежей</div>
                  <div className="text-xs text-muted-foreground">Переводы между банками РФ</div>
                </div>
                {paymentMethod === 'sbp' && <Icon name="Check" size={20} className="text-primary" />}
              </button>

              <button
                onClick={() => setPaymentMethod('mastercard')}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === 'mastercard' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  MC
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold">Mastercard</div>
                  <div className="text-xs text-muted-foreground">Оплата банковской картой</div>
                </div>
                {paymentMethod === 'mastercard' && <Icon name="Check" size={20} className="text-primary" />}
              </button>
            </div>

            <Button 
              className="w-full bg-primary text-white hover:bg-primary/90" 
              size="lg"
              onClick={() => {
                alert(`Оплата ${selectedPlan.price} ₽ через ${
                  paymentMethod === 'tpay' ? 'T-Pay' : 
                  paymentMethod === 'sbp' ? 'СБП' : 
                  'Mastercard'
                }`);
                setShowPaymentModal(false);
              }}
            >
              Оплатить {selectedPlan.price} ₽
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;