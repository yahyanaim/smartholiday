import React from 'react';
import { ArrowRight, Users, DollarSign, Headphones, Star, MapPin, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappLink = "https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20make%20a%20reservation";

  const travelSlides = [
    {
      id: 1,
      title: t('paris'),
      description: t('parisDesc'),
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '$1,200',
      duration: '7 days',
      rating: 4.8
    },
    {
      id: 2,
      title: t('tokyo'),
      description: t('tokyoDesc'),
      image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '$1,800',
      duration: '10 days',
      rating: 4.9
    },
    {
      id: 3,
      title: t('bali'),
      description: t('baliDesc'),
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '$900',
      duration: '12 days',
      rating: 4.6
    },
    {
      id: 4,
      title: t('dubai'),
      description: t('dubaiDesc'),
      image: 'https://images.pexels.com/photos/1707640/pexels-photo-1707640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '$1,400',
      duration: '5 days',
      rating: 4.5
    },
    {
      id: 5,
      title: t('barcelona'),
      description: t('barcelonaDesc'),
      image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '$950',
      duration: '7 days',
      rating: 4.7
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % travelSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [travelSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % travelSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + travelSlides.length) % travelSlides.length);
  };

  const features = [
    {
      icon: Users,
      title: t('expertGuidance'),
      description: t('expertDescription')
    },
    {
      icon: DollarSign,
      title: t('bestPrices'),
      description: t('bestPricesDescription')
    },
    {
      icon: Headphones,
      title: t('support247'),
      description: t('supportDescription')
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Amazing experience! The team helped us plan the perfect honeymoon in Bali. Every detail was taken care of.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michel Dubois",
      location: "Paris, France", 
      rating: 5,
      comment: "Service exceptionnel! Notre voyage au Japon était absolument parfait. Je recommande vivement WanderLux.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      comment: "Professional, reliable, and truly caring. They made our family trip to Morocco unforgettable!",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-sky-800 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Travel destination"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/voyage"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-medium text-lg flex items-center justify-center space-x-2"
            >
              <span>{t('exploreDestinations')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-medium text-lg"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-bounce delay-1000">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-1/3 right-16 animate-bounce delay-2000">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-4">
            <Star className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Featured Destinations Slider */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular travel destinations handpicked by our experts
            </p>
          </div>

          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {travelSlides.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className="relative h-96 md:h-[500px]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-2xl">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 mr-4">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-white text-sm font-medium">{slide.rating}</span>
                            </div>
                            <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                              <Clock className="h-4 w-4 text-white mr-1" />
                              <span className="text-white text-sm font-medium">{slide.duration}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            {slide.title}
                          </h3>
                          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                            {slide.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <div className="text-2xl md:text-3xl font-bold text-white">
                              {slide.price}
                              <span className="text-lg text-gray-300 font-normal"> / person</span>
                            </div>
                            <a
                              href={`${whatsappLink}%20for%20${encodeURIComponent(slide.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl font-medium"
                            >
                              {t('bookNow')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {travelSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-orange-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-300/10 to-orange-300/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                Premium Service
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-sky-800 to-orange-800 bg-clip-text text-transparent mb-6">
              {t('whyChooseUs')}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-sky-500 via-purple-500 to-orange-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Experience the difference with our award-winning travel services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative text-center group cursor-pointer"
              >
                {/* Card Container */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 border border-white/50">
                  {/* Floating Icon */}
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-sky-500 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Progress bar animation */}
                  <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-orange-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    ✓ Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-sky-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                  +2K
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">Join 2,000+ Happy Travelers</p>
                <p className="text-xs text-gray-600">Trusted by travelers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Travelers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Happy Travelers Around the World
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied travelers who have explored the world with WanderLux
            </p>
          </div>

          {/* Travelers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {[
              { name: "Maria", location: "Spain", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "James", location: "UK", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Yuki", location: "Japan", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Ahmed", location: "Egypt", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Sophie", location: "France", image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Carlos", location: "Mexico", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Anna", location: "Germany", image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Raj", location: "India", image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Lisa", location: "Australia", image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Marco", location: "Italy", image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "Fatima", location: "Morocco", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" },
              { name: "David", location: "Canada", image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" }
            ].map((traveler, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3">
                  <img
                    src={traveler.image}
                    alt={traveler.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{traveler.name}</h4>
                <p className="text-gray-600 text-xs">{traveler.location}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-sky-600 mb-2">12,500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">85</div>
              <div className="text-gray-600">Countries Visited</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img
              src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Travel destination"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-purple-900/70 to-orange-900/80"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce delay-500"></div>
        </div>
        
        {/* Floating travel icons */}
        <div className="absolute top-16 left-16 animate-float z-20">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed z-20">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Star className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-16 left-20 animate-float-slow z-20">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Clock className="h-7 w-7 text-white" />
          </div>
        </div>
        
        <div className="relative z-30 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Premium badge */}
          <div className="inline-block mb-6">
            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 text-white font-medium text-sm uppercase tracking-wider shadow-xl">
              ✈️ Premium Travel Experience
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Let us help you create memories that will last a lifetime. Join thousands of satisfied travelers worldwide.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/voyage"
              className="group relative bg-white/95 backdrop-blur-md text-sky-600 px-12 py-6 rounded-2xl hover:bg-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-3xl font-bold text-lg overflow-hidden border border-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-3">
                <span>{t('exploreDestinations')}</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-3xl font-bold text-lg overflow-hidden border border-green-400/50"
            >
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-3">
                <span>{t('bookNow')}</span>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
              </div>
            </a>
          </div>
          
          {/* Video Play Indicator */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 shadow-xl">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Travel Experience</span>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-sm font-medium drop-shadow-md">Instant WhatsApp Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-500 shadow-lg"></div>
              <span className="text-sm font-medium drop-shadow-md">Secure Booking Process</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <span className="text-sm font-medium drop-shadow-md">24/7 Travel Support</span>
            </div>
          </div>
        </div>
        
        {/* Floating elements animation styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-3deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;