// Central configuration file for Sher Afgan Khan Sawansi Grapes & Fruit Farm
// All owner details, phone numbers, map URLs, and media references are editable here.

export const FARM_CONFIG = {
  brandName: "Sher Afgan Khan Sawansi Grapes & Fruit Farm",
  shortBrandName: "Sawansi Grapes & Fruit Farm",
  ownerName: "Sher Afgan Khan Sawansi",
  tagline: "Fresh Grapes, Quality Fruits & Farming with Care",
  description:
    "Welcome to Sher Afgan Khan Sawansi Grapes & Fruit Farm, where fresh grapes and quality seasonal fruits are grown with care, dedication, and respect for the land.",
  
  // Contact details (Owner can update these fields anytime)
  contact: {
    phone: "+92 300 1234567", // Editable placeholder phone
    phoneRaw: "+923001234567",
    whatsapp: "+92 300 1234567", // Editable placeholder WhatsApp
    whatsappRaw: "923001234567",
    email: "raufkhalid1042@gmail.com",
    address: "Sawansi Village, Agriculture Zone, District Mianwali, Punjab, Pakistan",
    mapsUrl: "https://maps.app.goo.gl/uBsPnXC7ADVpgfk4A",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Sawansi+Grapes+%26+Fruit+Farm&output=embed",
  },

  // WhatsApp Pre-filled message
  whatsappMessage:
    "Hello, I would like to know more about the grapes and fruits available at Sher Afgan Khan Sawansi Grapes & Fruit Farm.",

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Grapes", href: "#grapes" },
    { name: "Fruits", href: "#fruits" },
    { name: "Videos", href: "#videos" },
    { name: "Gallery", href: "#gallery" },
    { name: "Farming", href: "#farming" },
    { name: "Contact", href: "#contact" },
  ],

  // Real Uploaded Media Assets (From Farm)
  media: {
    heroVideo: "/media/videos/farm-video-01.mp4",
    heroImage: "/media/images/farm-02.jpeg",
    images: [
      {
        id: "img-1",
        src: "/media/images/farm-01.jpeg",
        title: "Grape Vines & Foliage",
        category: "Vineyard Growth",
        alt: "Fresh grapes growing at Sher Afgan Khan Sawansi fruit farm",
        description: "Healthy grape vines developing under sunny skies at Sawansi farm."
      },
      {
        id: "img-2",
        src: "/media/images/farm-02.jpeg",
        title: "Fruit Orchards & Fields",
        category: "Farm Environment",
        alt: "Sher Afgan Khan Sawansi grapes and fruit farm landscape",
        description: "Authentic view of the farm fields showcasing natural crop management."
      }
    ],
    videos: [
      {
        id: "vid-1",
        src: "/media/videos/farm-video-01.mp4",
        title: "A Day at the Farm",
        subtitle: "Main Farm Overview",
        description: "Take a walkthrough of our farm fields, observing plant health and green crop lines.",
        duration: "0:45",
        highlight: true
      },
      {
        id: "vid-2",
        src: "/media/videos/farm-video-02.mp4",
        title: "Inside Our Vineyard",
        subtitle: "Grape Canopy & Vines",
        description: "Detailed look at grape vine clusters and foliage growth across the trellis system.",
        duration: "0:20"
      },
      {
        id: "vid-3",
        src: "/media/videos/farm-video-03.mp4",
        title: "Grapes at the Farm",
        subtitle: "Fruit Development",
        description: "Observing mature grape development during the active growing cycle.",
        duration: "0:25"
      },
      {
        id: "vid-4",
        src: "/media/videos/farm-video-04.mp4",
        title: "Farm & Fruit Fields",
        subtitle: "Field Routine",
        description: "Daily inspection of farm rows ensuring optimal hydration and sunlight exposure.",
        duration: "0:15"
      },
      {
        id: "vid-5",
        src: "/media/videos/farm-video-05.mp4",
        title: "Life Around the Farm",
        subtitle: "Natural Environment",
        description: "Peaceful atmosphere of our family-operated farm environment.",
        duration: "0:22"
      },
      {
        id: "vid-6",
        src: "/media/videos/farm-video-06.mp4",
        title: "Our Growing Season",
        subtitle: "Seasonal Care",
        description: "Careful monitoring of crop health as fruits prepare for the upcoming harvest.",
        duration: "0:24"
      },
      {
        id: "vid-7",
        src: "/media/videos/farm-video-07.mp4",
        title: "Farm Field Walk",
        subtitle: "Orchard Rows",
        description: "Walking between fruit crop rows to verify foliage condition and irrigation lines.",
        duration: "0:18"
      }
    ]
  },

  // Farm Highlights
  highlights: [
    {
      icon: "Grape",
      title: "Fresh Grapes",
      desc: "Carefully cultivated grapes grown with attention to soil and vine health."
    },
    {
      icon: "Apple",
      title: "Seasonal Fruits",
      desc: "Variety of fresh farm fruits harvested at peak ripeness according to the season."
    },
    {
      icon: "Video",
      title: "Real Farm Media",
      desc: "Transparent look into our actual fields through authentic videos and photos."
    },
    {
      icon: "Sprout",
      title: "Careful Cultivation",
      desc: "Traditional farming dedication combined with attentive crop management."
    },
    {
      icon: "Users",
      title: "Family Farm",
      desc: "Direct family involvement ensuring high quality and genuine pride in every yield."
    },
    {
      icon: "MessageSquare",
      title: "Direct Contact",
      desc: "Connect directly with Sher Afgan Khan for real-time harvest and fruit availability."
    }
  ],

  // Products Data
  grapesInfo: {
    title: "Our Grapes",
    subtitle: "Premium Vineyard Cultivation",
    description:
      "Grapes are the pride of Sher Afgan Khan Sawansi Grapes & Fruit Farm. From vineyard setup and canopy pruning to natural sunlight exposure, we ensure our grape vines receive optimal care through every stage of growth.",
    badges: ["Fresh Harvest", "Sun-Ripened", "Natural Care"],
    stages: [
      { name: "Vineyard Growth", desc: "Healthy green canopy development" },
      { name: "Berry Set", desc: "Clustering and early fruit formation" },
      { name: "Sun Ripening", desc: "Natural sweetness and color development" },
      { name: "Harvest Season", desc: "Fresh picking at peak quality" }
    ]
  },

  fruitsInfo: [
    {
      name: "Fresh Grapes",
      status: "In Season",
      statusColor: "emerald",
      season: "Summer Harvest",
      desc: "Sweet, crisp grapes cultivated directly in our farm vineyards."
    },
    {
      name: "Seasonal Fruit Crops",
      status: "Growing",
      statusColor: "amber",
      season: "Seasonal Cycles",
      desc: "Assorted farm-fresh seasonal fruits grown alongside our grape fields."
    },
    {
      name: "Farm Harvest Produce",
      status: "Available on Inquiry",
      statusColor: "blue",
      season: "Year-Round Care",
      desc: "Contact the farm directly to ask about current weekly fruit availability."
    }
  ],

  // Farming Practices
  farmingPractices: [
    {
      step: "01",
      title: "Crop Care & Foliage Monitoring",
      desc: "Regular daily inspection of plant leaves, stem vigor, and berry cluster health."
    },
    {
      step: "02",
      title: "Targeted Irrigation Management",
      desc: "Efficient water application tailored to crop stage requirements to protect water resources."
    },
    {
      step: "03",
      title: "Vineyard Canopy Pruning",
      desc: "Maintaining balanced sunlight penetration and ventilation through the grape trellis."
    },
    {
      step: "04",
      title: "Seasonal Land Preparation",
      desc: "Nourishing soil organic matter to support strong root systems year after year."
    },
    {
      step: "05",
      title: "Monitored Harvest Timing",
      desc: "Harvesting crops only when natural maturity and optimal taste are achieved."
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      title: "100% Authentic Farm",
      desc: "No stock imagery or exaggerated claims—every photo and video is recorded directly on our land."
    },
    {
      title: "Fresh & Direct",
      desc: "Fruits reach you straight from the fields without multi-tier middleman storage."
    },
    {
      title: "Direct Owner Contact",
      desc: "Talk directly with Sher Afgan Khan via phone or WhatsApp for accurate harvest information."
    },
    {
      title: "Dedicated Local Farming",
      desc: "Rooted in local agricultural heritage with genuine care for plant longevity and fruit taste."
    }
  ]
};
