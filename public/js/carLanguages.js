i18next.init({
    lng: 'pl', // Default language
    debug: true,
    resources: {
        en: {
            translation: {
                "nav": {
                    "Offer": "Offer",
                    "Buy_a_Car": "Buy a Car/Leasing Support"
                },
                "header": {
                    "title": "Car Sales SD Group",
                    "subtitle": "Best deals on the market",
                    "language": "English"
                },
                "services": {
                    "title": "Our Services",
                    "description": "We offer a wide range of services for our clients to find the perfect solution for their needs.",
                    "leasing": "🔹 Car Leasing - favorable conditions for every client",
                    "buyback": "🔹 Car Buyback - sell your car quickly and without hassle",
                    "rent_to_own": "🔹 Rent-to-Own - purchase your car directly after renting",
                    "custom_order": "🔹 Custom Order - we will find your dream car",
                    "personal_approach": "Individual approach to every client!"
                },
                "footer": {
                    "rights": "© 2024 SD Group. All rights reserved."
                },
                "car": {
                "fuel_type": "Hybrid",
                "transmission": "Automatic",
                "available_cars": "Available Cars"
                },
            }
        },
        pl: {
            translation: {
                "nav": {
                    "Offer": "Oferta",
                    "Buy_a_Car": "Kup samochód/Wsparcie leasingu"
                },
                "header": {
                    "title": "Sprzedaż samochodów SD Group",
                    "subtitle": "Najlepsze oferty na rynku",
                    "language": "Polski"
                },
                "services": {
                    "title": "Nasze Usługi",
                    "description": "Oferujemy szeroki zakres usług, aby znaleźć idealne rozwiązanie dla naszych klientów.",
                    "leasing": "🔹 Leasing samochodowy - korzystne warunki dla każdego klienta",
                    "buyback": "🔹 Odkup samochodów - sprzedaj swój samochód szybko i bez problemów",
                    "rent_to_own": "🔹 Najem z wykupem - kup samochód bezpośrednio po wynajmie",
                    "custom_order": "🔹 Zamówienie na życzenie - znajdziemy dla Ciebie wymarzony samochód",
                    "personal_approach": "Indywidualne podejście do każdego klienta!"
                },
                "footer": {
                    "rights": "© 2024 SD Group. Wszelkie prawa zastrzeżone."
                },
                "car": {
                "fuel_type": "Hybryda",
                "transmission": "Automatyczna",
                "available_cars": "Dostępne Samochody"
            },
            }
        },
        ua: {
            translation: {
                "nav": {
                    "Offer": "Пропозиції",
                    "Buy_a_Car": "Купити автомобіль/Лізингова підтримка"
                },
                "header": {
                    "title": "Продаж Автомобілів SD Group",
                    "subtitle": "Кращі пропозиції на ринку",
                    "language": "Українська"
                },
                "services": {
                    "title": "Наші Послуги",
                    "description": "Ми пропонуємо широкий спектр послуг для наших клієнтів, щоб ви могли знайти ідеальне рішення для ваших потреб.",
                    "leasing": "🔹 Авто лізинг - вигідні умови для кожного клієнта",
                    "buyback": "🔹 Авто викуп - продайте своє авто швидко і без зайвих турбот",
                    "rent_to_own": "🔹 Оренда з викупом - придбайте авто безпосередньо після оренди",
                    "custom_order": "🔹 Авто під замовлення - ми знайдемо для вас авто вашої мрії",
                    "personal_approach": "Індивідуальний підхід до кожного клієнта!"
                },
                "footer": {
                    "rights": "© 2024 SD Group. Всі права захищено."
                },
                "car": {
                    "fuel_type": "Гібрид",
                    "transmission": "Автоматична",
                    "available_cars": "Наявні Автомобілі"
                },
                
            }
        },
        ru: {
            translation: {
                "nav": {
                    "Offer": "Предложения",
                    "Buy_a_Car": "Купить автомобиль/Лизинговая поддержка"
                },
                "header": {
                    "title": "Продажа автомобилей SD Group",
                    "subtitle": "Лучшие предложения на рынке",
                    "language": "Русский"
                },
                "services": {
                    "title": "Наши Услуги",
                    "description": "Мы предлагаем широкий спектр услуг для наших клиентов, чтобы вы могли найти идеальное решение для ваших нужд.",
                    "leasing": "🔹 Автолизинг - выгодные условия для каждого клиента",
                    "buyback": "🔹 Выкуп автомобиля - продайте свой автомобиль быстро и без лишних хлопот",
                    "rent_to_own": "🔹 Аренда с выкупом - приобретите автомобиль сразу после аренды",
                    "custom_order": "🔹 Автомобиль на заказ - мы найдем для вас автомобиль мечты",
                    "personal_approach": "Индивидуальный подход к каждому клиенту!"
                },
                "footer": {
                    "rights": "© 2024 SD Group. Все права защищены."
                },
                "car": {
                "fuel_type": "Гибрид",
                "transmission": "Автоматическая",
                "available_cars": "Доступные Автомобили"
            }
            }
        }
    }
}, function(err, t) {
    // Initialize jquery-i18next
    jqueryI18next.init(i18next, $);
    // Apply translations to the page
    $('body').localize();
});

function changeLanguage(language) {
    i18next.changeLanguage(language, function(err, t) {
        // Apply translations to the page
        $('body').localize();
    });
}
