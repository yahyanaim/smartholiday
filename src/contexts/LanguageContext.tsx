import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "fr" | "es" | "de" | "it" | "ar";
  setLanguage: (lang: "en" | "fr" | "es" | "de" | "it" | "ar") => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    voyage: "Voyage",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    bookNow: "Book Now",

    // Home Page
    heroTitle: "Discover Amazing Destinations",
    heroSubtitle:
      "Create unforgettable memories with our curated travel experiences around the world",
    exploreDestinations: "Explore Destinations",
    whyChooseUs: "Why Choose Us",
    expertGuidance: "Expert Guidance",
    expertDescription:
      "Our travel experts provide personalized recommendations for your perfect trip",
    bestPrices: "Best Prices",
    bestPricesDescription:
      "Competitive prices with no hidden fees. Best value for your money",
    support247: "24/7 Support",
    supportDescription:
      "Round-the-clock customer support for all your travel needs",

    // Voyage Page
    voyageTitle: "Our Travel Destinations",
    voyageSubtitle:
      "Choose from our carefully selected destinations around the world",
    allDestinations: "All Destinations",
    europe: "Europe",
    asia: "Asia",
    america: "America",
    africa: "Africa",
    days: "days",
    person: "person",

    // About Us
    aboutTitle: "About Our Travel Agency",
    aboutDescription:
      "With over 15 years of experience in the travel industry, we are passionate about creating extraordinary travel experiences. Our team of dedicated travel experts works tirelessly to ensure every journey is memorable and hassle-free.",
    ourMission: "Our Mission",
    missionDescription:
      "To inspire and enable people to explore the world through carefully crafted travel experiences that create lasting memories and foster cultural understanding.",
    ourVision: "Our Vision",
    visionDescription:
      "To become the most trusted travel partner, known for exceptional service, authentic experiences, and responsible tourism practices.",

    // Contact Us
    contactTitle: "Get in Touch",
    contactDescription:
      "Ready to plan your next adventure? Contact us and let our travel experts help you create the perfect itinerary.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    mondayFriday: "Monday - Friday: 9:00 AM - 6:00 PM",
    weekend: "Saturday - Sunday: 10:00 AM - 4:00 PM",

    // Destinations
    Agafay: "Pack Three-Trip: Ourika, Agafay & Essaouira",
    AgafayDesc:
      "Discover the green landscapes of Ourika Valley, the adventure and magic of the Agafay Desert, and the coastal charm of Essaouira.",
    AgafayPrice: "65 $", // Example price for Agafay trip
    tokyo: "Tokyo, Japan",
    tokyoDesc: "Modern Metropolis Meets Tradition",
    newYork: "New York, USA",
    newYorkDesc: "The City That Never Sleeps",
    bali: "Bali, Indonesia",
    baliDesc: "Tropical Paradise",
    rome: "Rome, Italy",
    romeDesc: "Eternal City of History",
    dubai: "Dubai, UAE",
    dubaiDesc: "Luxury and Innovation",
    barcelona: "Barcelona, Spain",
    barcelonaDesc: "Art and Architecture",
    thailand: "Bangkok, Thailand",
    thailandDesc: "Cultural Heart of Southeast Asia",
    morocco: "Marrakech, Morocco",
    moroccoDesc: "Imperial City of Wonders",
  },
  es: {
    // Navigation
    home: "Inicio",
    voyage: "Viaje",
    aboutUs: "Acerca de",
    contactUs: "Contacto",
    bookNow: "Reservar",

    // Home Page
    heroTitle: "Descubre Destinos Increíbles",
    heroSubtitle:
      "Crea recuerdos inolvidables con nuestras experiencias de viaje seleccionadas en todo el mundo",
    exploreDestinations: "Explorar Destinos",
    whyChooseUs: "Por Qué Elegirnos",
    expertGuidance: "Orientación Experta",
    expertDescription:
      "Nuestros expertos en viajes brindan recomendaciones personalizadas para tu viaje perfecto",
    bestPrices: "Mejores Precios",
    bestPricesDescription:
      "Precios competitivos sin tarifas ocultas. La mejor relación calidad-precio",
    support247: "Soporte 24/7",
    supportDescription:
      "Atención al cliente las 24 horas para todas tus necesidades de viaje",

    // Voyage Page
    voyageTitle: "Nuestros Destinos de Viaje",
    voyageSubtitle:
      "Elige entre nuestros destinos cuidadosamente seleccionados en todo el mundo",
    allDestinations: "Todos los Destinos",
    europe: "Europa",
    asia: "Asia",
    america: "América",
    africa: "África",
    days: "días",
    person: "persona",

    // About Us
    aboutTitle: "Acerca de Nuestra Agencia de Viajes",
    aboutDescription:
      "Con más de 15 años de experiencia en la industria de viajes, nos apasiona crear experiencias de viaje extraordinarias. Nuestro equipo de expertos en viajes dedicados trabaja incansablemente para asegurar que cada viaje sea memorable y sin complicaciones.",
    ourMission: "Nuestra Misión",
    missionDescription:
      "Inspirar y permitir a las personas explorar el mundo a través de experiencias de viaje cuidadosamente elaboradas que crean recuerdos duraderos y fomentan la comprensión cultural.",
    ourVision: "Nuestra Visión",
    visionDescription:
      "Convertirnos en el socio de viajes más confiable, conocido por el servicio excepcional, experiencias auténticas y prácticas de turismo responsable.",

    // Contact Us
    contactTitle: "Ponte en Contacto",
    contactDescription:
      "¿Listo para planificar tu próxima aventura? Contáctanos y deja que nuestros expertos en viajes te ayuden a crear el itinerario perfecto.",
    address: "Dirección",
    phone: "Teléfono",
    email: "Email",
    workingHours: "Horario de Trabajo",
    mondayFriday: "Lunes - Viernes: 9:00 AM - 6:00 PM",
    weekend: "Sábado - Domingo: 10:00 AM - 4:00 PM",

    // Destinations
    paris: "París, Francia",
    parisDesc: "Ciudad de la Luz y el Romance",
    tokyo: "Tokio, Japón",
    tokyoDesc: "Metrópolis Moderna se Encuentra con la Tradición",
    newYork: "Nueva York, EE.UU.",
    newYorkDesc: "La Ciudad que Nunca Duerme",
    bali: "Bali, Indonesia",
    baliDesc: "Paraíso Tropical",
    rome: "Roma, Italia",
    romeDesc: "Ciudad Eterna de Historia",
    dubai: "Dubái, EAU",
    dubaiDesc: "Lujo e Innovación",
    barcelona: "Barcelona, España",
    barcelonaDesc: "Arte y Arquitectura",
    thailand: "Bangkok, Tailandia",
    thailandDesc: "Corazón Cultural del Sudeste Asiático",
    morocco: "Marrakech, Marruecos",
    moroccoDesc: "Ciudad Imperial de Maravillas",
  },
  de: {
    // Navigation
    home: "Startseite",
    voyage: "Reise",
    aboutUs: "Über Uns",
    contactUs: "Kontakt",
    bookNow: "Jetzt Buchen",

    // Home Page
    heroTitle: "Entdecke Erstaunliche Reiseziele",
    heroSubtitle:
      "Schaffe unvergessliche Erinnerungen mit unseren kuratierten Reiseerlebnissen rund um die Welt",
    exploreDestinations: "Reiseziele Erkunden",
    whyChooseUs: "Warum Uns Wählen",
    expertGuidance: "Expertenberatung",
    expertDescription:
      "Unsere Reiseexperten bieten personalisierte Empfehlungen für Ihre perfekte Reise",
    bestPrices: "Beste Preise",
    bestPricesDescription:
      "Wettbewerbsfähige Preise ohne versteckte Gebühren. Bestes Preis-Leistungs-Verhältnis",
    support247: "24/7 Support",
    supportDescription:
      "Rund-um-die-Uhr Kundensupport für alle Ihre Reisebedürfnisse",

    // Voyage Page
    voyageTitle: "Unsere Reiseziele",
    voyageSubtitle:
      "Wählen Sie aus unseren sorgfältig ausgewählten Zielen weltweit",
    allDestinations: "Alle Reiseziele",
    europe: "Europa",
    asia: "Asien",
    america: "Amerika",
    africa: "Afrika",
    days: "Tage",
    person: "Person",

    // About Us
    aboutTitle: "Über Unser Reisebüro",
    aboutDescription:
      "Mit über 15 Jahren Erfahrung in der Reisebranche sind wir leidenschaftlich daran interessiert, außergewöhnliche Reiseerlebnisse zu schaffen. Unser Team engagierter Reiseexperten arbeitet unermüdlich daran, dass jede Reise unvergesslich und problemlos wird.",
    ourMission: "Unsere Mission",
    missionDescription:
      "Menschen zu inspirieren und zu befähigen, die Welt durch sorgfältig gestaltete Reiseerlebnisse zu erkunden, die bleibende Erinnerungen schaffen und kulturelles Verständnis fördern.",
    ourVision: "Unsere Vision",
    visionDescription:
      "Der vertrauenswürdigste Reisepartner zu werden, bekannt für außergewöhnlichen Service, authentische Erlebnisse und verantwortungsvolle Tourismuspraktiken.",

    // Contact Us
    contactTitle: "Kontaktieren Sie Uns",
    contactDescription:
      "Bereit, Ihr nächstes Abenteuer zu planen? Kontaktieren Sie uns und lassen Sie unsere Reiseexperten Ihnen helfen, die perfekte Reiseroute zu erstellen.",
    address: "Adresse",
    phone: "Telefon",
    email: "E-Mail",
    workingHours: "Arbeitszeiten",
    mondayFriday: "Montag - Freitag: 9:00 - 18:00",
    weekend: "Samstag - Sonntag: 10:00 - 16:00",

    // Destinations
    paris: "Paris, Frankreich",
    parisDesc: "Stadt des Lichts und der Romantik",
    tokyo: "Tokio, Japan",
    tokyoDesc: "Moderne Metropole trifft Tradition",
    newYork: "New York, USA",
    newYorkDesc: "Die Stadt, die niemals schläft",
    bali: "Bali, Indonesien",
    baliDesc: "Tropisches Paradies",
    rome: "Rom, Italien",
    romeDesc: "Ewige Stadt der Geschichte",
    dubai: "Dubai, VAE",
    dubaiDesc: "Luxus und Innovation",
    barcelona: "Barcelona, Spanien",
    barcelonaDesc: "Kunst und Architektur",
    thailand: "Bangkok, Thailand",
    thailandDesc: "Kulturelles Herz Südostasiens",
    morocco: "Marrakesch, Marokko",
    moroccoDesc: "Kaiserliche Stadt der Wunder",
  },
  it: {
    // Navigation
    home: "Home",
    voyage: "Viaggio",
    aboutUs: "Chi Siamo",
    contactUs: "Contattaci",
    bookNow: "Prenota Ora",

    // Home Page
    heroTitle: "Scopri Destinazioni Straordinarie",
    heroSubtitle:
      "Crea ricordi indimenticabili con le nostre esperienze di viaggio selezionate in tutto il mondo",
    exploreDestinations: "Esplora Destinazioni",
    whyChooseUs: "Perché Sceglierci",
    expertGuidance: "Guida Esperta",
    expertDescription:
      "I nostri esperti di viaggio forniscono raccomandazioni personalizzate per il tuo viaggio perfetto",
    bestPrices: "Migliori Prezzi",
    bestPricesDescription:
      "Prezzi competitivi senza costi nascosti. Il miglior rapporto qualità-prezzo",
    support247: "Supporto 24/7",
    supportDescription:
      "Supporto clienti 24 ore su 24 per tutte le tue esigenze di viaggio",

    // Voyage Page
    voyageTitle: "Le Nostre Destinazioni di Viaggio",
    voyageSubtitle:
      "Scegli tra le nostre destinazioni accuratamente selezionate in tutto il mondo",
    allDestinations: "Tutte le Destinazioni",
    europe: "Europa",
    asia: "Asia",
    america: "America",
    africa: "Africa",
    days: "giorni",
    person: "persona",

    // About Us
    aboutTitle: "Riguardo la Nostra Agenzia di Viaggi",
    aboutDescription:
      "Con oltre 15 anni di esperienza nell'industria dei viaggi, siamo appassionati nel creare esperienze di viaggio straordinarie. Il nostro team di esperti di viaggio dedicati lavora instancabilmente per assicurare che ogni viaggio sia memorabile e senza problemi.",
    ourMission: "La Nostra Missione",
    missionDescription:
      "Ispirare e permettere alle persone di esplorare il mondo attraverso esperienze di viaggio accuratamente create che creano ricordi duraturi e favoriscono la comprensione culturale.",
    ourVision: "La Nostra Visione",
    visionDescription:
      "Diventare il partner di viaggio più fidato, conosciuto per il servizio eccezionale, esperienze autentiche e pratiche di turismo responsabile.",

    // Contact Us
    contactTitle: "Mettiti in Contatto",
    contactDescription:
      "Pronto a pianificare la tua prossima avventura? Contattaci e lascia che i nostri esperti di viaggio ti aiutino a creare l'itinerario perfetto.",
    address: "Indirizzo",
    phone: "Telefono",
    email: "Email",
    workingHours: "Orari di Lavoro",
    mondayFriday: "Lunedì - Venerdì: 9:00 - 18:00",
    weekend: "Sabato - Domenica: 10:00 - 16:00",

    // Destinations
    paris: "Parigi, Francia",
    parisDesc: "Città della Luce e del Romanticismo",
    tokyo: "Tokyo, Giappone",
    tokyoDesc: "Metropoli Moderna Incontra la Tradizione",
    newYork: "New York, USA",
    newYorkDesc: "La Città che Non Dorme Mai",
    bali: "Bali, Indonesia",
    baliDesc: "Paradiso Tropicale",
    rome: "Roma, Italia",
    romeDesc: "Città Eterna della Storia",
    dubai: "Dubai, EAU",
    dubaiDesc: "Lusso e Innovazione",
    barcelona: "Barcellona, Spagna",
    barcelonaDesc: "Arte e Architettura",
    thailand: "Bangkok, Thailandia",
    thailandDesc: "Cuore Culturale del Sud-Est Asiatico",
    morocco: "Marrakech, Marocco",
    moroccoDesc: "Città Imperiale delle Meraviglie",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    voyage: "الرحلة",
    aboutUs: "من نحن",
    contactUs: "اتصل بنا",
    bookNow: "احجز الآن",

    // Home Page
    heroTitle: "اكتشف وجهات مذهلة",
    heroSubtitle: "اصنع ذكريات لا تُنسى مع تجارب السفر المنتقاة حول العالم",
    exploreDestinations: "استكشف الوجهات",
    whyChooseUs: "لماذا تختارنا",
    expertGuidance: "إرشاد خبير",
    expertDescription: "خبراء السفر لدينا يقدمون توصيات شخصية لرحلتك المثالية",
    bestPrices: "أفضل الأسعار",
    bestPricesDescription: "أسعار تنافسية بدون رسوم خفية. أفضل قيمة لأموالك",
    support247: "دعم 24/7",
    supportDescription: "دعم العملاء على مدار الساعة لجميع احتياجات السفر",

    // Voyage Page
    voyageTitle: "وجهات السفر لدينا",
    voyageSubtitle: "اختر من وجهاتنا المختارة بعناية حول العالم",
    allDestinations: "جميع الوجهات",
    europe: "أوروبا",
    asia: "آسيا",
    america: "أمريكا",
    africa: "أفريقيا",
    days: "أيام",
    person: "شخص",

    // About Us
    aboutTitle: "حول وكالة السفر لدينا",
    aboutDescription:
      "مع أكثر من 15 عامًا من الخبرة في صناعة السفر، نحن متحمسون لخلق تجارب سفر استثنائية. فريقنا من خبراء السفر المتفانين يعمل بلا كلل لضمان أن تكون كل رحلة لا تُنسى وخالية من المتاعب.",
    ourMission: "مهمتنا",
    missionDescription:
      "إلهام وتمكين الناس من استكشاف العالم من خلال تجارب السفر المصممة بعناية التي تخلق ذكريات دائمة وتعزز التفاهم الثقافي.",
    ourVision: "رؤيتنا",
    visionDescription:
      "أن نصبح شريك السفر الأكثر ثقة، المعروف بالخدمة الاستثنائية والتجارب الأصيلة وممارسات السياحة المسؤولة.",

    // Contact Us
    contactTitle: "تواصل معنا",
    contactDescription:
      "مستعد لتخطيط مغامرتك القادمة؟ اتصل بنا ودع خبراء السفر لدينا يساعدونك في إنشاء المسار المثالي.",
    address: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    workingHours: "ساعات العمل",
    mondayFriday: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً",
    weekend: "السبت - الأحد: 10:00 صباحًا - 4:00 مساءً",

    // Destinations
    Agafay: "أكفاي، المغرب",
    AgafayDesc: "صحراء أكفاي الساحرة",
    tokyo: "طوكيو، اليابان",
    tokyoDesc: "العاصمة الحديثة تلتقي بالتقاليد",
    newYork: "نيويورك، الولايات المتحدة",
    newYorkDesc: "المدينة التي لا تنام",
    bali: "بالي، إندونيسيا",
    baliDesc: "الجنة الاستوائية",
    rome: "روما، إيطاليا",
    romeDesc: "المدينة الأبدية للتاريخ",
    dubai: "دبي، الإمارات العربية المتحدة",
    dubaiDesc: "الفخامة والابتكار",
    barcelona: "برشلونة، إسبانيا",
    barcelonaDesc: "الفن والعمارة",
    thailand: "بانكوك، تايلاند",
    thailandDesc: "القلب الثقافي لجنوب شرق آسيا",
    morocco: "مراكش، المغرب",
    moroccoDesc: "المدينة الإمبراطورية للعجائب",
  },
  fr: {
    // Navigation
    home: "Accueil",
    voyage: "Voyage",
    aboutUs: "À Propos",
    contactUs: "Contact",
    bookNow: "Réserver",

    // Home Page
    heroTitle: "Découvrez des Destinations Extraordinaires",
    heroSubtitle:
      "Créez des souvenirs inoubliables avec nos expériences de voyage sélectionnées dans le monde entier",
    exploreDestinations: "Explorer les Destinations",
    whyChooseUs: "Pourquoi Nous Choisir",
    expertGuidance: "Conseils d'Expert",
    expertDescription:
      "Nos experts en voyage fournissent des recommandations personnalisées pour votre voyage parfait",
    bestPrices: "Meilleurs Prix",
    bestPricesDescription:
      "Prix compétitifs sans frais cachés. Le meilleur rapport qualité-prix",
    support247: "Support 24/7",
    supportDescription:
      "Support client disponible 24h/24 pour tous vos besoins de voyage",

    // Voyage Page
    voyageTitle: "Nos Destinations de Voyage",
    voyageSubtitle:
      "Choisissez parmi nos destinations soigneusement sélectionnées à travers le monde",
    allDestinations: "Toutes les Destinations",
    europe: "Europe",
    asia: "Asie",
    america: "Amérique",
    africa: "Afrique",
    days: "jours",
    person: "personne",

    // About Us
    aboutTitle: "À Propos de Notre Agence de Voyage",
    aboutDescription:
      "Avec plus de 15 ans d'expérience dans l'industrie du voyage, nous sommes passionnés par la création d'expériences de voyage extraordinaires. Notre équipe d'experts en voyage dévoués travaille sans relâche pour s'assurer que chaque voyage soit mémorable et sans tracas.",
    ourMission: "Notre Mission",
    missionDescription:
      "Inspirer et permettre aux gens d'explorer le monde grâce à des expériences de voyage soigneusement conçues qui créent des souvenirs durables et favorisent la compréhension culturelle.",
    ourVision: "Notre Vision",
    visionDescription:
      "Devenir le partenaire de voyage le plus fiable, connu pour son service exceptionnel, ses expériences authentiques et ses pratiques de tourisme responsable.",

    // Contact Us
    contactTitle: "Contactez-Nous",
    contactDescription:
      "Prêt à planifier votre prochaine aventure ? Contactez-nous et laissez nos experts en voyage vous aider à créer l'itinéraire parfait.",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    workingHours: "Heures d'Ouverture",
    mondayFriday: "Lundi - Vendredi: 9h00 - 18h00",
    weekend: "Samedi - Dimanche: 10h00 - 16h00",

    // Destinations
    paris: "Paris, France",
    parisDesc: "Ville Lumière et Romance",
    tokyo: "Tokyo, Japon",
    tokyoDesc: "Métropole Moderne et Tradition",
    newYork: "New York, États-Unis",
    newYorkDesc: "La Ville qui Ne Dort Jamais",
    bali: "Bali, Indonésie",
    baliDesc: "Paradis Tropical",
    rome: "Rome, Italie",
    romeDesc: "Ville Éternelle d'Histoire",
    dubai: "Dubaï, Émirats Arabes Unis",
    dubaiDesc: "Luxe et Innovation",
    barcelona: "Barcelone, Espagne",
    barcelonaDesc: "Art et Architecture",
    thailand: "Bangkok, Thaïlande",
    thailandDesc: "Cœur Culturel de l'Asie du Sud-Est",
    morocco: "Marrakech, Maroc",
    moroccoDesc: "Ville Impériale des Merveilles",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<
    "en" | "fr" | "es" | "de" | "it" | "ar"
  >("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
