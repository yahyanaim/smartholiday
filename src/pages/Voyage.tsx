import React, { useState } from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Voyage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hiddenTrajectories, setHiddenTrajectories] = useState<{ [key: number]: boolean }>({});
  const whatsappLink = "https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20make%20a%20reservation%20for";

  const destinations = [
    {
      id: 1,
      name: t('Agafay'),
      description: t('AgafayDesc'),
      image: 'https://images.pexels.com/photos/15257132/pexels-photo-15257132.png?_gl=1*1dp2pqm*_ga*OTcwMzU3NTY3LjE3NTcxOTQ1MDg.*_ga_8JE65Q40S6*czE3NTcxOTQ1MDgkbzEkZzEkdDE3NTcxOTQ1MTIkajU2JGwwJGgw=crop', // Agafay desert image
      price: t('AgafayPrice'), // Dynamic price from translations
      duration: 'Choose your',
      continent: 'europe',
      rating: 4.8,
      highlights: ['Desert', 'Atlas Mountains', 'Cultural Experience'],
      trajectory: [
        { day: 1, location: 'Departure from Marrakech at 9:00 AM', activity: '' },
        { day: 2, location: 'Ourika: at 9:00 AM – Return at 5:30 PM', activity: 'Full day in Ourika Valley with a guide, visiting waterfalls, rivers, and Berber villages.' },
        { day: 3, location: 'Agafay: Departure at 3:00 PM – Return at 10:30 PM ', activity: '1 hour of quad in Agafay Dessert and a 30-minute camel ride across stunning rocky landscapes, relax by the pool, and end the day with a traditional dinner-show, all with transport included. ' },
        { day: 4, location: 'Essaouira: Departure at 8:00 AM – Return at 7:30 PM', activity: 'Explore the historic medina, stroll along the bustling port, enjoy the sandy beaches, and soak in the city’s coastal charm, all with comfortable transport included.' },
        { day: 5, location: 'Versailles', activity: 'Palace & Gardens Tour' },
        { day: 6, location: 'Champs-Élysées', activity: 'Shopping & Arc de Triomphe' },
        { day: 7, location: 'Departure', activity: 'Airport Transfer' }
      ]
    },
    {
      id: 2,
      name: t('tokyo'),
      description: t('tokyoDesc'),
      image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 1800,
      duration: 10,
      continent: 'asia',
      rating: 4.9,
      highlights: ['Tokyo Tower', 'Shibuya Crossing', 'Mount Fuji'],
      trajectory: [
        { day: 1, location: 'Tokyo Arrival', activity: 'Narita Airport to Hotel' },
        { day: 2, location: 'Shibuya & Harajuku', activity: 'Modern Tokyo Experience' },
        { day: 3, location: 'Asakusa Temple', activity: 'Traditional Culture Tour' },
        { day: 4, location: 'Tokyo Tower', activity: 'City Views & Shopping' },
        { day: 5, location: 'Mount Fuji', activity: 'Day Trip & Lake Kawaguchi' },
        { day: 6, location: 'Ginza District', activity: 'Luxury Shopping & Dining' },
        { day: 7, location: 'Tsukiji Market', activity: 'Fresh Sushi Experience' },
        { day: 8, location: 'Imperial Palace', activity: 'Gardens & History' },
        { day: 9, location: 'Akihabara', activity: 'Electronics & Anime Culture' },
        { day: 10, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 3,
      name: t('newYork'),
      description: t('newYorkDesc'),
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 1500,
      duration: 8,
      continent: 'america',
      rating: 4.7,
      highlights: ['Statue of Liberty', 'Central Park', 'Broadway Show'],
      trajectory: [
        { day: 1, location: 'NYC Arrival', activity: 'JFK to Manhattan Hotel' },
        { day: 2, location: 'Statue of Liberty', activity: 'Ferry & Ellis Island' },
        { day: 3, location: 'Central Park', activity: 'Park Walk & Museums' },
        { day: 4, location: 'Times Square', activity: 'Broadway Show & Dining' },
        { day: 5, location: 'Brooklyn Bridge', activity: 'Walk & DUMBO District' },
        { day: 6, location: 'Empire State Building', activity: 'Observatory & 5th Ave' },
        { day: 7, location: 'High Line Park', activity: 'Chelsea Market & Meatpacking' },
        { day: 8, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 4,
      name: t('bali'),
      description: t('baliDesc'),
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 900,
      duration: 12,
      continent: 'asia',
      rating: 4.6,
      highlights: ['Rice Terraces', 'Beach Resorts', 'Temple Visits'],
      trajectory: [
        { day: 1, location: 'Denpasar Arrival', activity: 'Airport to Ubud' },
        { day: 2, location: 'Ubud Rice Terraces', activity: 'Tegallalang & Jatiluwih' },
        { day: 3, location: 'Ubud Temples', activity: 'Tirta Empul & Gunung Kawi' },
        { day: 4, location: 'Mount Batur', activity: 'Sunrise Hike & Hot Springs' },
        { day: 5, location: 'Seminyak Beach', activity: 'Beach Resort Check-in' },
        { day: 6, location: 'Tanah Lot Temple', activity: 'Sunset Temple Visit' },
        { day: 7, location: 'Uluwatu Temple', activity: 'Cliffside Temple & Kecak Dance' },
        { day: 8, location: 'Nusa Penida', activity: 'Island Day Trip' },
        { day: 9, location: 'Sanur Beach', activity: 'Relaxation & Water Sports' },
        { day: 10, location: 'Ubud Art Villages', activity: 'Mas & Celuk Villages' },
        { day: 11, location: 'Sekumpul Waterfall', activity: 'North Bali Adventure' },
        { day: 12, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 5,
      name: t('rome'),
      description: t('romeDesc'),
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 1100,
      duration: 6,
      continent: 'europe',
      rating: 4.8,
      highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
      trajectory: [
        { day: 1, location: 'Rome Arrival', activity: 'Fiumicino to Historic Center' },
        { day: 2, location: 'Colosseum', activity: 'Ancient Rome & Forum' },
        { day: 3, location: 'Vatican City', activity: 'Sistine Chapel & St. Peters' },
        { day: 4, location: 'Trevi Fountain', activity: 'Pantheon & Spanish Steps' },
        { day: 5, location: 'Tivoli Gardens', activity: 'Villa dEste Day Trip' },
        { day: 6, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 6,
      name: t('dubai'),
      description: t('dubaiDesc'),
      image: 'https://images.pexels.com/photos/1707640/pexels-photo-1707640.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 1400,
      duration: 5,
      continent: 'asia',
      rating: 4.5,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping'],
      trajectory: [
        { day: 1, location: 'Dubai Arrival', activity: 'DXB to Downtown Hotel' },
        { day: 2, location: 'Burj Khalifa', activity: 'Sky Deck & Dubai Mall' },
        { day: 3, location: 'Desert Safari', activity: 'Dune Bashing & BBQ Dinner' },
        { day: 4, location: 'Palm Jumeirah', activity: 'Atlantis & Beach Resort' },
        { day: 5, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 7,
      name: t('barcelona'),
      description: t('barcelonaDesc'),
      image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 950,
      duration: 7,
      continent: 'europe',
      rating: 4.7,
      highlights: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
      trajectory: [
        { day: 1, location: 'Barcelona Arrival', activity: 'El Prat to City Center' },
        { day: 2, location: 'Sagrada Familia', activity: 'Gaudí Architecture Tour' },
        { day: 3, location: 'Park Güell', activity: 'Mosaic Gardens & City Views' },
        { day: 4, location: 'Gothic Quarter', activity: 'Medieval Streets & Cathedral' },
        { day: 5, location: 'La Rambla', activity: 'Boqueria Market & Beach' },
        { day: 6, location: 'Montjuïc Hill', activity: 'Castle & Magic Fountain' },
        { day: 7, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 8,
      name: t('thailand'),
      description: t('thailandDesc'),
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 850,
      duration: 14,
      continent: 'asia',
      rating: 4.6,
      highlights: ['Grand Palace', 'Floating Markets', 'Thai Temples'],
      trajectory: [
        { day: 1, location: 'Bangkok Arrival', activity: 'Suvarnabhumi to Hotel' },
        { day: 2, location: 'Grand Palace', activity: 'Royal Complex & Wat Pho' },
        { day: 3, location: 'Floating Markets', activity: 'Damnoen Saduak Experience' },
        { day: 4, location: 'Ayutthaya', activity: 'Ancient Capital Day Trip' },
        { day: 5, location: 'Chiang Mai Flight', activity: 'Northern Thailand' },
        { day: 6, location: 'Elephant Sanctuary', activity: 'Ethical Elephant Experience' },
        { day: 7, location: 'Doi Suthep Temple', activity: 'Mountain Temple Visit' },
        { day: 8, location: 'Chiang Rai', activity: 'White Temple & Golden Triangle' },
        { day: 9, location: 'Phuket Flight', activity: 'Island Paradise' },
        { day: 10, location: 'Phi Phi Islands', activity: 'Island Hopping Tour' },
        { day: 11, location: 'James Bond Island', activity: 'Phang Nga Bay' },
        { day: 12, location: 'Patong Beach', activity: 'Beach Relaxation' },
        { day: 13, location: 'Bangkok Return', activity: 'Final Shopping' },
        { day: 14, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    },
    {
      id: 9,
      name: t('morocco'),
      description: t('moroccoDesc'),
      image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 750,
      duration: 9,
      continent: 'africa',
      rating: 4.4,
      highlights: ['Medina Souks', 'Atlas Mountains', 'Desert Experience'],
      trajectory: [
        { day: 1, location: 'Marrakech Arrival', activity: 'Airport to Riad' },
        { day: 2, location: 'Medina Souks', activity: 'Jemaa el-Fnaa & Markets' },
        { day: 3, location: 'Bahia Palace', activity: 'Palaces & Gardens Tour' },
        { day: 4, location: 'Atlas Mountains', activity: 'Berber Villages Visit' },
        { day: 5, location: 'Sahara Desert', activity: 'Camel Trek & Desert Camp' },
        { day: 6, location: 'Fes Journey', activity: 'Imperial City Transfer' },
        { day: 7, location: 'Fes Medina', activity: 'Ancient Medina Exploration' },
        { day: 8, location: 'Casablanca', activity: 'Hassan II Mosque' },
        { day: 9, location: 'Departure', activity: 'Hotel to Airport' }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: t('allDestinations') },
    { id: 'europe', label: t('europe') },
    { id: 'asia', label: t('asia') },
    { id: 'america', label: t('america') },
    { id: 'africa', label: t('africa') }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.continent === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-sky-600 to-orange-600 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Travel destinations"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t('voyageTitle')}
          </h1>
          <p className="text-xl text-sky-100 leading-relaxed">
            {t('voyageSubtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-sky-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.price}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                      <p className="text-gray-600 mb-4">{destination.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{destination.duration} {t('days')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Per {t('person')}</span>
                    </div>
                  </div>

                    {/* Travel Trajectory */}
                    <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      Trajectory
                      <button
                      onClick={() =>
                        setHiddenTrajectories((prev) => ({
                        ...prev,
                        [destination.id]: !prev[destination.id],
                        }))
                      }
                      className="ml-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      aria-label="Toggle trajectory"
                      >
                      <svg
                        className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                        hiddenTrajectories[destination.id] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      </button>
                    </h4>
                    {!hiddenTrajectories[destination.id] && (
                      <div className="relative">
                      {/* Trajectory Line */}
                      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-orange-400 to-red-400"></div>
                      {/* Show first 4 trajectory points */}
                      <div className="space-y-3">
                        {destination.trajectory.slice(0, 4).map((point, index) => (
                        <div key={index} className="relative flex items-start">
                          {/* Bullet Point */}
                          <div
                          className={`relative z-10 w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-white ${
                            index === 0
                            ? 'bg-green-500'
                            : index === destination.trajectory.slice(0, 4).length - 1
                            ? 'bg-red-500'
                            : 'bg-orange-500'
                          }`}
                          >
                          {point.day}
                          </div>
                          {/* Content */}
                          <div className="ml-4 flex-1">
                          <div className="text-xs font-semibold text-gray-800">{point.location}</div>
                          <div className="text-xs text-gray-600">{point.activity}</div>
                          </div>
                        </div>
                        ))}
                        {/* Show more indicator */}
                        {destination.trajectory.length > 4 && (
                        <div className="relative flex items-center">
                          <div className="relative z-10 w-6 h-6 rounded-full bg-gray-400 border-2 border-white shadow-md flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="ml-4 text-xs text-gray-500 font-medium">
                          +{destination.trajectory.length - 4} more stops
                          </div>
                        </div>
                        )}
                      </div>
                      </div>
                    )}
                    </div>

                  <a
                    href={`${whatsappLink}%20${encodeURIComponent(destination.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-medium text-center block"
                  >
                    {t('bookNow')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voyage;