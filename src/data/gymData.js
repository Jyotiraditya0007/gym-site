export const gymStats = [
  { label: 'Active Members', value: '14,800+' },
  { label: 'Certified Elite Coaches', value: '42' },
  { label: 'Olympic Grade Equipment', value: '180+' },
  { label: 'Client Transformation Rate', value: '98.6%' },
];

export const programsData = [
  {
    id: 'olympic-strength',
    title: 'Olympic Strength & Power',
    category: 'strength',
    tag: 'Advanced',
    duration: '60 Mins',
    calories: '650-800 kcal',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Master compound barbells, snatches, clean & jerks, and heavy powerlifting under Olympian-certified coaches.',
    schedule: 'Mon, Wed, Fri • 07:00 & 18:30',
    trainer: 'Marcus Vance',
    features: ['Eleiko calibrated plates', 'Custom velocity trackers', '1-on-1 form breakdown']
  },
  {
    id: 'hiit-metcon',
    title: 'Metabolic Conditioning (HIIT)',
    category: 'hiit',
    tag: 'Popular',
    duration: '45 Mins',
    calories: '750-950 kcal',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Heart-pumping interval circuit fusing ski-ergs, assault bikes, kettlebells, and plyometrics to incinerate body fat.',
    schedule: 'Daily • 06:30, 12:00, 17:30',
    trainer: 'Elena Rostova',
    features: ['Heart rate telemetry', 'High-energy sound immersion', 'Dynamic squad stations']
  },
  {
    id: 'combat-striking',
    title: 'Combat Boxing & Striking',
    category: 'combat',
    tag: 'High Energy',
    duration: '50 Mins',
    calories: '700-900 kcal',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
    description: 'Authentic pugilism conditioning, heavy bag combos, footwork mastery, and core rotational explosive drills.',
    schedule: 'Tue, Thu, Sat • 18:00',
    trainer: 'Damian Ortiz',
    features: ['Heavy water-filled bags', 'Speed ladder drills', 'Fight-ready mental stamina']
  },
  {
    id: 'functional-athlete',
    title: 'Hybrid Athleticism',
    category: 'functional',
    tag: 'All Levels',
    duration: '55 Mins',
    calories: '550-700 kcal',
    intensity: 'Moderate-High',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    description: 'Sled pushes, rope climbs, sandbag carries, and agility runs designed to sculpt functional, everyday human power.',
    schedule: 'Mon, Thu, Sat • 08:30 & 19:00',
    trainer: 'Aria Sterling',
    features: ['Indoor 40m turf track', 'Multi-grip monkey bars', 'Grip & carries conditioning']
  },
  {
    id: 'mobility-recovery',
    title: 'Deep Flow & Kinetic Mobility',
    category: 'recovery',
    tag: 'Restorative',
    duration: '50 Mins',
    calories: '200-350 kcal',
    intensity: 'Low',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    description: 'Myofascial decompression, spinal decompression yoga, and joint mobility flows to eradicate chronic tightness.',
    schedule: 'Wed, Sun • 09:00 & 19:30',
    trainer: 'Kaelen Thorne',
    features: ['Theragun percussion therapy', 'Infrared heated room', 'Active joint flossing']
  },
  {
    id: 'hypertrophy-sculpt',
    title: 'Hypertrophy & Physique Sculpt',
    category: 'strength',
    tag: 'Bodybuilding',
    duration: '60 Mins',
    calories: '500-650 kcal',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision mechanical tension, dropsets, and isolated muscle hypertrophy utilizing prime lever and cable systems.',
    schedule: 'Tue, Fri, Sat • 17:00',
    trainer: 'Marcus Vance',
    features: ['Arsenal Strength machinery', 'Muscle biomechanics focus', 'Structured periodization']
  }
];

export const trainersData = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Conditioning',
    experience: '12+ Years Experience',
    bio: 'Former Olympic powerlifting competitor & CSCS certified director specializing in elite strength athletics and biomechanics.',
    specialties: ['Olympic Weightlifting', 'Periodization', 'Powerlifting'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    social: { instagram: '@marcus_iron', linkedin: '#' }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Lead Functional & HIIT Coach',
    experience: '8+ Years Experience',
    bio: 'Ex-triathlete and conditioning master known for high-octane metabolic burn routines and athletic mindset cultivation.',
    specialties: ['High Intensity Interval', 'Endurance', 'Kettlebell Master'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    social: { instagram: '@elena_move', linkedin: '#' }
  },
  {
    id: 'damian-ortiz',
    name: 'Damian Ortiz',
    role: 'Boxing & Explosive Combat Director',
    experience: '10+ Years Experience',
    bio: 'Golden Gloves champion and tactical conditioning trainer bringing professional fight camp discipline to every workout.',
    specialties: ['Boxing Technical', 'Rotational Power', 'Agility & Footwork'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    social: { instagram: '@damian_strikes', linkedin: '#' }
  },
  {
    id: 'aria-sterling',
    name: 'Aria Sterling',
    role: 'Sports Nutrition & Performance Coach',
    experience: '7+ Years Experience',
    bio: 'Precision Nutrition L2 certified coach blending bio-individual meal planning with metabolic resistance training.',
    specialties: ['Sports Nutrition', 'Physique Transformation', 'Recovery'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    social: { instagram: '@aria_sterlingfit', linkedin: '#' }
  }
];

export const facilitiesData = [
  {
    name: 'Olympic Strength Zone',
    description: '14 custom power racks, Eleiko calibrated bumper plates, competition barbells, and shock-absorbing rubber drop platforms.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80',
    badge: 'Heavy Lifting'
  },
  {
    name: 'Cryo & Cold Plunge Spa',
    description: 'Sub-zero cryotherapy chambers, twin 38°F recovery plunge pools, and private eucalyptus infrared saunas.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    badge: 'Recovery Hub'
  },
  {
    name: '40m Indoor Turf & Sprint Lane',
    description: 'High-traction synthetic grass with sled push tracks, plyo boxes, farmer carry lanes, and sprint timing gates.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    badge: 'Athletics'
  },
  {
    name: 'Organic Fuel Bar & Cafe',
    description: 'Cold-pressed electrolyte juices, grass-fed whey shakes, macro-measured prep meals, and artisan espresso.',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=900&q=80',
    badge: 'Nutrition'
  }
];

export const membershipPlans = [
  {
    id: 'day-pass',
    name: 'Standard Flex',
    tagline: 'Ideal for consistent fitness and daily discipline',
    monthlyPrice: 59,
    yearlyPrice: 49,
    popular: false,
    features: [
      'Access to main gym floor & cardio deck',
      'Locker rooms with rain showers & sauna',
      'IronPulse mobile app access & tracking',
      '1 Complimentary trainer fitness assessment',
      'Free high-speed member WiFi & parking'
    ]
  },
  {
    id: 'pro-athlete',
    name: 'Pro Performance',
    tagline: 'Our most popular plan for relentless progress',
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: true,
    features: [
      'Everything in Standard Flex',
      'Unlimited access to all Group Classes & HIIT',
      'Cold plunge & infrared sauna access (4x/month)',
      '2 Monthly 1-on-1 personal coaching sessions',
      'Monthly InBody 770 body composition scans',
      '15% discount at the Fuel Bar & Pro Shop'
    ]
  },
  {
    id: 'elite-vip',
    name: 'Apex VIP Black',
    tagline: 'The ultimate all-inclusive athletic luxury experience',
    monthlyPrice: 179,
    yearlyPrice: 149,
    popular: false,
    features: [
      '24/7 All-Access to all 4 IronPulse locations',
      'Unlimited Cryotherapy, Saunas & Cold Plunges',
      'Weekly 1-on-1 Elite Coach & Nutritionist Sessions',
      'Dedicated private VIP locker & laundry service',
      'Complimentary Fuel Bar shake after each session',
      'Guest passes (bring a friend any day)'
    ]
  }
];

export const weeklySchedule = [
  { day: 'Monday', time: '06:30 AM', title: 'Metabolic HIIT Surge', trainer: 'Elena Rostova', room: 'Arena 1', spots: 4, category: 'hiit' },
  { day: 'Monday', time: '08:30 AM', title: 'Olympic Barbell Foundations', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 2, category: 'strength' },
  { day: 'Monday', time: '05:30 PM', title: 'Functional Hybrid Athletics', trainer: 'Aria Sterling', room: 'Turf Zone', spots: 6, category: 'functional' },
  { day: 'Monday', time: '07:00 PM', title: 'Combat Boxing Fundamentals', trainer: 'Damian Ortiz', room: 'Ring 2', spots: 3, category: 'combat' },

  { day: 'Tuesday', time: '07:00 AM', title: 'Hypertrophy Upper Body', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 5, category: 'strength' },
  { day: 'Tuesday', time: '12:00 PM', title: 'Lunchtime Express HIIT', trainer: 'Elena Rostova', room: 'Arena 1', spots: 8, category: 'hiit' },
  { day: 'Tuesday', time: '06:00 PM', title: 'Heavy Bag Combat Conditioning', trainer: 'Damian Ortiz', room: 'Ring 1', spots: 1, category: 'combat' },
  { day: 'Tuesday', time: '07:30 PM', title: 'Recovery & Joint Mobility', trainer: 'Kaelen Thorne', room: 'Zen Studio', spots: 9, category: 'recovery' },

  { day: 'Wednesday', time: '06:30 AM', title: 'Metabolic HIIT Surge', trainer: 'Elena Rostova', room: 'Arena 1', spots: 3, category: 'hiit' },
  { day: 'Wednesday', time: '09:00 AM', title: 'Deep Mobility & Spinal Flow', trainer: 'Kaelen Thorne', room: 'Zen Studio', spots: 11, category: 'recovery' },
  { day: 'Wednesday', time: '05:30 PM', title: 'Deadlift & Squat Mechanics', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 4, category: 'strength' },
  { day: 'Wednesday', time: '07:00 PM', title: 'Hybrid Conditioning', trainer: 'Aria Sterling', room: 'Turf Zone', spots: 7, category: 'functional' },

  { day: 'Thursday', time: '07:00 AM', title: 'Sleds & Sprints Track', trainer: 'Aria Sterling', room: 'Turf Zone', spots: 6, category: 'functional' },
  { day: 'Thursday', time: '12:00 PM', title: 'Core & Kettlebell Fire', trainer: 'Elena Rostova', room: 'Arena 1', spots: 5, category: 'hiit' },
  { day: 'Thursday', time: '06:30 PM', title: 'Fight Camp Boxing Striking', trainer: 'Damian Ortiz', room: 'Ring 2', spots: 2, category: 'combat' },
  { day: 'Thursday', time: '08:00 PM', title: 'Contrast Bath & Infrared Flow', trainer: 'Kaelen Thorne', room: 'Spa Zone', spots: 4, category: 'recovery' },

  { day: 'Friday', time: '06:30 AM', title: 'Full Body Barbell Blitz', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 3, category: 'strength' },
  { day: 'Friday', time: '05:00 PM', title: 'Friday Night Fight & Sweat', trainer: 'Damian Ortiz', room: 'Ring 1', spots: 5, category: 'combat' },
  { day: 'Friday', time: '06:30 PM', title: 'Hypertrophy Lower Body Burn', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 4, category: 'strength' },

  { day: 'Saturday', time: '08:30 AM', title: 'Supercharged Weekend HIIT', trainer: 'Elena Rostova', room: 'Arena 1', spots: 2, category: 'hiit' },
  { day: 'Saturday', time: '10:00 AM', title: 'The Iron Marathon Challenge', trainer: 'Marcus & Aria', room: 'Main Floor', spots: 8, category: 'functional' },
  { day: 'Saturday', time: '04:00 PM', title: 'Athletic Recovery & Stretch', trainer: 'Kaelen Thorne', room: 'Zen Studio', spots: 12, category: 'recovery' },

  { day: 'Sunday', time: '09:00 AM', title: 'Slow Flow Myofascial Release', trainer: 'Kaelen Thorne', room: 'Zen Studio', spots: 15, category: 'recovery' },
  { day: 'Sunday', time: '11:00 AM', title: 'Open Floor Strength Clinic', trainer: 'Marcus Vance', room: 'Strength Bay', spots: 7, category: 'strength' }
];

export const testimonialsData = [
  {
    name: 'David Kincaid',
    role: 'Tech Executive & Marathoner',
    achievement: 'Gained 7kg lean mass • Slashed body fat by 8%',
    quote: 'The energy at IronPulse is electric. The coaches don’t just watch; they calibrate your mechanics. The cold plunge alone has halved my recovery time.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stars: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Architect & Cross-Athlete',
    achievement: 'Deadlift PR: 165kg • 12 Weeks Transformation',
    quote: 'From day one, the team embraced my goals. Clean facilities, world-class Eleiko barbells, and a zero-ego culture where everyone pushes each other.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    stars: 5
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Amateur Boxer & Entrepreneur',
    achievement: 'Dropped 14kg in 4 months • Fight-ready stamina',
    quote: 'Damian’s combat training will push you beyond your perceived threshold. It transformed not just my physique, but my focus at work.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    stars: 5
  }
];

export const gymFaqs = [
  {
    question: 'How does the free 3-day trial pass work?',
    answer: 'Once you submit the trial form, your digital guest pass is instantly sent to your email and phone. You have 7 days to activate it at any of our 4 locations. It gives you 100% full access to the gym floor, locker rooms, and any group classes.'
  },
  {
    question: 'What are your operating hours?',
    answer: 'Our main flagship facilities are open 24/7 for Pro and VIP members. General staffed hours for all locations are Monday through Friday from 5:00 AM to 11:00 PM, and weekends from 6:00 AM to 9:00 PM.'
  },
  {
    question: 'Are group fitness and boxing classes included?',
    answer: 'Yes! Pro Performance and Apex VIP Black tiers feature unlimited group fitness classes, combat boxing, and recovery sessions. Standard members can join classes for a small drop-in fee.'
  },
  {
    question: 'Can I freeze or cancel my membership without penalty?',
    answer: 'Absolutely. We believe in earning your commitment every day. Memberships can be paused for up to 60 days per calendar year with zero fees, and cancellation requires only 14 days written notice.'
  },
  {
    question: 'Do you offer personal nutrition coaching?',
    answer: 'Yes. Our certified sports nutritionists provide personalized macro coaching, meal timing guidance, metabolic testing, and supplement regimens tailored to your biometric assessment.'
  }
];

export const clubLocations = [
  {
    id: 'flagship-downtown',
    name: 'Downtown Flagship & Performance Lab',
    address: '450 Grand Avenue, Financial District, NY 10013',
    phone: '+1 (555) 382-9001',
    email: 'downtown@ironpulse.fit',
    hours: '24 Hours / 7 Days a Week',
    features: ['Olympic Platforms', 'Cryo Therapy', 'Turf Lane', 'Valet Parking']
  },
  {
    id: 'uptown-arena',
    name: 'Uptown Combat & Strength Arena',
    address: '890 Lexington Boulevard, Upper East, NY 10021',
    phone: '+1 (555) 382-9002',
    email: 'uptown@ironpulse.fit',
    hours: 'Mon-Sun: 05:00 AM - 11:30 PM',
    features: ['Full Boxing Ring', 'Assault Arena', 'Recovery Lounge', 'Fuel Bar']
  },
  {
    id: 'westside-wellness',
    name: 'Westside Kinetic & Recovery Sanctuary',
    address: '210 Hudson Promenade, West Village, NY 10014',
    phone: '+1 (555) 382-9003',
    email: 'westside@ironpulse.fit',
    hours: 'Mon-Sun: 05:30 AM - 11:00 PM',
    features: ['Infrared Saunas', 'Cold Plunge Pools', 'Yoga Loft', 'Organic Cafe']
  }
];
