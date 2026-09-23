export const SERVICES_CATEGORIES = [
  {
    id: "visits",
    name: "Visits at Home",
    shortTitle: "Drop-In Visits",
    tagline: "Tailored daytime drop-ins in their familiar space",
    icon: "paw",
    heroImage: "/images/service-visits.jpg",
    description: "Ideal for workdays, weekend getaways, or while you're busy running errands. Each visit is customized to your pet's schedule, ensuring fresh water, meals, yard or walk time, and loving companionship.",
    timingNote: "Available in 15, 30, 45, and 60-minute lengths depending on your pet's energy and care requirements.",
    options: [
      {
        duration: "15 Min",
        title: "Speedy Paws Check-In",
        desc: "Quick potty break, fresh water refill, and quick head scratches for nearby homes.",
        idealFor: "Senior dogs needing midday relief or self-sufficient cats."
      },
      {
        duration: "30 Min",
        title: "Standard Care Visit",
        desc: "Neighborhood walk or yard play, feeding, water refresh, litter box cleanup, and photo update.",
        idealFor: "Most dogs and cats on standard daily schedules.",
        popular: true
      },
      {
        duration: "45 Min",
        title: "Extended Care Visit",
        desc: "Longer walk, medication administration, brushing, multiple pets, and playtime.",
        idealFor: "Multi-pet households, puppies, or pets needing extra TLC."
      },
      {
        duration: "60 Min",
        title: "Deluxe Enrichment Visit",
        desc: "High-energy workout, dedicated interactive play, thorough feeding, and calm relaxation.",
        idealFor: "High-energy breeds or anxious pets that crave company."
      }
    ],
    inclusions: [
      "Fresh food & filtered water refresh",
      "Leashed outdoor walk or supervised yard play",
      "Litter box scooping & pet mess cleanup",
      "Oral & topical medication administration",
      "Text & photo update sent after every visit",
      "Mail, packages & trash bin roll-out upon request"
    ]
  },
  {
    id: "overnight",
    name: "Overnight Care",
    shortTitle: "Overnight In-Home Care",
    tagline: "A familiar presence while you are away",
    icon: "home",
    heroImage: "/images/service-overnight.jpg",
    description: "The gold standard in stress-free pet care. Shalon stays in your home so your animals sleep in their favorite spots and wake up to their regular breakfast routine, without the disorientation of boarding facilities.",
    timingNote: "Provides approximately 12 hours of evening and morning presence, with agreed daytime intervals away for other scheduled visits.",
    options: [
      {
        duration: "Approx. 12 Hours",
        title: "Overnight Companion Stay",
        desc: "Evening arrival for dinner, walks, cuddles, bedtime routine, sleeping in your home, and morning breakfast & walk.",
        idealFor: "Pets prone to boarding anxiety, multi-pet homes, and home security.",
        popular: true
      }
    ],
    inclusions: [
      "Full evening & morning pet routines (meals, meds, walks)",
      "Continuous companionship throughout the night",
      "Maintained sleeping spots (your pet's preferred bed/couch)",
      "Daily photo & text updates with evening recap",
      "Full household security presence & active light rotation",
      "Mail, deliveries, newspaper & trash bin management",
      "Indoor houseplant & garden watering"
    ],
    clarityPolicy: "To maintain transparency: overnight care includes approximately 12 hours of dedicated presence in your home. Shalon may leave for agreed periods during the day for other scheduled client drop-in visits or personal business, following an agreed plan established during your consultation."
  },
  {
    id: "custom",
    name: "Something Custom",
    shortTitle: "Custom & Concierge",
    tagline: "Specialized transportation, wedding support & tailored care",
    icon: "star",
    heroImage: "/images/service-custom.jpg",
    description: "Have a unique situation? Whether you need safe pet transit to the groomer, your pup to attend your wedding photos, or care for a hobby farm, we tailor a dedicated solution.",
    timingNote: "Customized quote based on mileage, hours, and specific requirements.",
    options: [
      {
        duration: "As Needed",
        title: "Pet Taxi & Transit",
        desc: "Safe, climate-controlled rides to veterinary appointments, groomers, or local boarding.",
        idealFor: "Busy pet parents needing transit assistance."
      },
      {
        duration: "Event-Based",
        title: "Wedding Pet Attendant",
        desc: "Dressing, leashing, photo cueing, guest greeting, and safe transport home before the reception.",
        idealFor: "Couples who want their pet in ceremony photos without wedding day stress."
      },
      {
        duration: "Flexible",
        title: "Farm & Multi-Species Care",
        desc: "Feeding, watering, and checking on chickens, goats, barn cats, or hobby farm animals.",
        idealFor: "Rural properties and acreage in Tate & DeSoto Counties."
      }
    ],
    inclusions: [
      "Custom timeline built around your exact event or schedule",
      "All transit safety equipment & pet seatbelts provided",
      "Pre-event coordination with your vendors or veterinary clinic",
      "Transparent travel and mileage adjustments confirmed upfront"
    ]
  }
];
