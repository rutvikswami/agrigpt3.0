import orgimg from "./images/org.avif";
import hydroimg from "./images/hydro.jpg";
import agro from "./images/agro.jpg";
import aqua from "./images/aqua.jpg";
import bio from "./images/biodynamic.jpg";
import commer from "./images/commercial.jpg";
import conven from "./images/conventional.jpeg";
import dry from "./images/dryland.jpg";
import integrated from "./images/integrated.jpg";
import perma from "./images/perma.webp";
import preci from "./images/precision.jpeg";
import regen from "./images/regenerative.jpg";
import subsis from "./images/subsistence.webp";
import vert from "./images/vertical.jpg";






export const farmingTypesData = [
  {
    name: "Organic Farming",
    slug: "organic-farming",
    description: "A farming method that focuses on growing crops without the use of synthetic fertilizers and pesticides.",
    image: orgimg,
    investmentLevel: "Medium",
    timeToMarket: "3-6 months",
    laborRequirements: "Moderate",
    overview: [
      "Organic farming is an agricultural method that emphasizes the use of natural inputs and biological pest control to maintain soil productivity and control pests.",
      "This farming approach focuses on sustainable practices that promote biodiversity and improve soil health without the use of synthetic pesticides or fertilizers.",
      "The growing demand for organic products has made this farming method increasingly popular among both small-scale and commercial farmers."
    ],
    requirements: [
      {
        title: "Soil Management",
        description: "Rich, well-balanced soil with proper organic matter content and beneficial microorganisms."
      },
      {
        title: "Natural Inputs",
        description: "Organic seeds, natural fertilizers, and biological pest control methods."
      },
      {
        title: "Certification",
        description: "Organic certification from recognized authorities to market products as organic."
      },
      {
        title: "Knowledge",
        description: "Understanding of natural farming methods and ecological processes."
      }
    ],
    marketing: [
      {
        channel: "Direct-to-Consumer",
        description: "Selling directly to consumers through farmers markets and farm stands.",
        tips: [
          "Build relationships with regular customers",
          "Offer CSA (Community Supported Agriculture) programs",
          "Maintain active social media presence"
        ]
      },
      {
        channel: "Retail Partnerships",
        description: "Partnering with organic stores and supermarkets.",
        tips: [
          "Obtain necessary certifications",
          "Develop professional packaging",
          "Maintain consistent supply"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Paramparagat Krishi Vikas Yojana (PKVY)",
        description: "Government scheme promoting organic farming through cluster approach.",
        link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx"
      },
      {
        name: "National Project on Organic Farming",
        description: "Provides support for organic input production, technology development, and awareness creation.",
        link: "https://ncof.dacnet.nic.in/"
      }
    ]
  },
  {
    name: "Hydroponics",
    slug: "hydroponics",
    description: "Soil-less farming method where plants are grown in nutrient-rich water solutions.",
    image: hydroimg,
    investmentLevel: "High",
    timeToMarket: "1-3 months",
    laborRequirements: "Low",
    overview: [
      "Hydroponics is a high-tech farming method that grows plants without soil, using mineral nutrient solutions in water.",
      "This method offers precise control over environmental conditions and nutrient delivery, leading to faster growth and higher yields.",
      "It's particularly suitable for urban farming and areas with limited agricultural land."
    ],
    requirements: [
      {
        title: "Infrastructure",
        description: "Controlled environment with proper lighting, temperature, and humidity control."
      },
      {
        title: "Equipment",
        description: "Hydroponic systems, pumps, filters, and monitoring devices."
      },
      {
        title: "Nutrients",
        description: "Balanced nutrient solutions and pH management systems."
      },
      {
        title: "Technical Skills",
        description: "Knowledge of plant nutrition and system maintenance."
      }
    ],
    marketing: [
      {
        channel: "Premium Markets",
        description: "Targeting high-end restaurants and specialty stores.",
        tips: [
          "Focus on quality and consistency",
          "Highlight the clean, pesticide-free nature of products",
          "Develop relationships with chefs"
        ]
      },
      {
        channel: "Urban Consumers",
        description: "Marketing to health-conscious urban populations.",
        tips: [
          "Emphasize freshness and local production",
          "Offer subscription services",
          "Conduct facility tours"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Mission for Integrated Development of Horticulture",
        description: "Supports modern farming technologies including hydroponics.",
        link: "https://midh.gov.in/"
      },
      {
        name: "Smart City Mission",
        description: "Promotes urban farming initiatives including hydroponics.",
        link: "https://smartcities.gov.in/"
      }
    ]
  },
  {
    name: "Agroforestry",
    slug: "agroforestry",
    description: "Combining trees and shrubs with crops or livestock.",
    image: agro,
    investmentLevel: "Medium",
    timeToMarket: "Long",
    laborRequirements: "Moderate",
    overview: [
      "Agroforestry integrates trees, crops, and livestock in a mutually beneficial system.",
      "It enhances biodiversity, improves soil fertility, and provides multiple income sources.",
      "This farming method is ideal for sustainable land use and climate resilience."
    ],
    requirements: [
      {
        title: "Land Management",
        description: "Proper selection of tree-crop combinations for maximum productivity."
      },
      {
        title: "Water Conservation",
        description: "Efficient irrigation and rainwater harvesting techniques."
      },
      {
        title: "Tree Selection",
        description: "Choosing fast-growing, soil-enriching trees."
      },
      {
        title: "Long-Term Planning",
        description: "Understanding crop cycles and tree growth rates."
      }
    ],
    marketing: [
      {
        channel: "Timber and Fruit Sales",
        description: "Selling timber, fruits, and other tree-based products.",
        tips: [
          "Identify high-value tree species",
          "Develop long-term contracts with buyers",
          "Explore organic certifications for premium pricing"
        ]
      },
      {
        channel: "Agri-Tourism",
        description: "Utilizing agroforestry farms for eco-tourism and education.",
        tips: [
          "Develop farm-stay experiences",
          "Conduct training workshops on sustainable farming",
          "Engage local communities in conservation efforts"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "National Agroforestry Policy",
        description: "Promotes sustainable agroforestry practices in India.",
        link: "https://agricoop.nic.in/"
      },
      {
        name: "Green India Mission",
        description: "Supports afforestation and agroforestry initiatives.",
        link: "https://moef.gov.in/en/green-india-mission/"
      }
    ]
  },
  {
    name: "Conventional Farming",
    slug: "conventional-farming",
    description: "Traditional large-scale farming using chemical inputs.",
    image: conven,
    investmentLevel: "High",
    timeToMarket: "Short",
    laborRequirements: "Moderate to High",
    overview: [
      "Conventional farming relies on synthetic fertilizers, pesticides, and mechanization to maximize yield.",
      "It is widely used for large-scale crop and livestock production.",
      "This method ensures food security but has environmental concerns, including soil degradation and water pollution."
    ],
    requirements: [
      {
        title: "Fertilizer Management",
        description: "Use of chemical fertilizers to enhance soil fertility and crop yield."
      },
      {
        title: "Pest Control",
        description: "Application of pesticides and herbicides for crop protection."
      },
      {
        title: "Mechanization",
        description: "Utilizing tractors, harvesters, and other machinery to improve efficiency."
      },
      {
        title: "Irrigation Systems",
        description: "Efficient water management techniques like drip and sprinkler irrigation."
      }
    ],
    marketing: [
      {
        channel: "Bulk Supply to Retailers",
        description: "Selling produce to supermarkets and food processing industries.",
        tips: [
          "Establish long-term contracts with buyers",
          "Ensure compliance with food safety standards",
          "Utilize government subsidies for cost efficiency"
        ]
      },
      {
        channel: "Export Market",
        description: "Selling high-yield crops to international markets.",
        tips: [
          "Meet global quality and certification standards",
          "Develop strong supply chain networks",
          "Invest in cold storage and logistics"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "National Food Security Mission",
        description: "Supports increased agricultural productivity through modern practices.",
        link: "https://nfsm.gov.in/"
      },
      {
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Crop insurance scheme for farmers against yield loss.",
        link: "https://pmfby.gov.in/"
      }
    ]
  },
  {
    name: "Aquaponic Farming",
    slug: "aquaponic-farming",
    description: "Combining aquaculture and hydroponics in a symbiotic system.",
    image: aqua,
    investmentLevel: "High",
    timeToMarket: "Medium",
    laborRequirements: "Moderate",
    overview: [
      "Aquaponics integrates fish farming with hydroponic plant cultivation.",
      "Fish waste provides natural nutrients for plant growth, and plants help filter the water for fish.",
      "It is a sustainable method that minimizes water usage and eliminates the need for chemical fertilizers."
    ],
    requirements: [
      {
        title: "Tank and Water System",
        description: "Setting up fish tanks and water circulation for plant beds."
      },
      {
        title: "Fish Selection",
        description: "Choosing suitable fish species like tilapia or catfish."
      },
      {
        title: "Plant Selection",
        description: "Growing leafy greens, herbs, and vegetables best suited for aquaponic conditions."
      },
      {
        title: "Water Quality Management",
        description: "Monitoring pH levels, ammonia, and oxygen for optimal growth."
      }
    ],
    marketing: [
      {
        channel: "Local Organic Markets",
        description: "Selling pesticide-free vegetables and fresh fish.",
        tips: [
          "Promote the eco-friendly aspect to attract health-conscious buyers",
          "Build partnerships with organic stores",
          "Consider doorstep delivery models"
        ]
      },
      {
        channel: "Restaurants and Hotels",
        description: "Supplying high-quality organic produce to premium establishments.",
        tips: [
          "Target farm-to-table restaurants",
          "Offer customized fresh produce packages",
          "Highlight the sustainable and chemical-free advantages"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Blue Revolution Scheme",
        description: "Supports integrated fish farming projects, including aquaponics.",
        link: "https://nfdb.gov.in/"
      },
      {
        name: "Rashtriya Krishi Vikas Yojana",
        description: "Funding support for innovative agricultural practices.",
        link: "https://rkvy.nic.in/"
      }
    ]
  },
  {
    name: "Permaculture Farming",
    slug: "permaculture-farming",
    description: "Sustainable and self-sufficient ecosystem farming.",
    image: perma,
    investmentLevel: "Low",
    timeToMarket: "Long",
    laborRequirements: "High",
    overview: [
      "Permaculture farming focuses on working with nature to create self-sustaining ecosystems.",
      "It incorporates organic farming, agroforestry, and ecological design principles.",
      "The method reduces external inputs and emphasizes biodiversity, soil health, and water conservation."
    ],
    requirements: [
      {
        title: "Soil Regeneration",
        description: "Using compost, mulch, and natural fertilizers to enrich the soil."
      },
      {
        title: "Polyculture Practices",
        description: "Growing multiple crops together to enhance biodiversity."
      },
      {
        title: "Rainwater Harvesting",
        description: "Efficient water management through swales and ponds."
      },
      {
        title: "Integrated Animal Systems",
        description: "Using livestock to naturally fertilize soil and control pests."
      }
    ],
    marketing: [
      {
        channel: "Community Supported Agriculture (CSA)",
        description: "Direct selling to consumers who subscribe for regular produce.",
        tips: [
          "Build a local customer base through awareness campaigns",
          "Offer farm visits to engage customers",
          "Provide seasonal vegetable boxes"
        ]
      },
      {
        channel: "Eco-Tourism and Workshops",
        description: "Conducting training programs and farm stays.",
        tips: [
          "Create permaculture certification courses",
          "Collaborate with educational institutions",
          "Host eco-friendly retreats"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Paramparagat Krishi Vikas Yojana",
        description: "Promotes organic and sustainable farming practices.",
        link: "https://pgsindia-ncof.gov.in/"
      },
      {
        name: "National Mission for Sustainable Agriculture",
        description: "Supports climate-resilient agricultural techniques, including permaculture.",
        link: "https://nmsa.gov.in/"
      }
    ]
  },
  {
    name: "Vertical Farming",
    slug: "vertical-farming",
    description: "Indoor farming with stacked layers to maximize space efficiency.",
    image: vert,
    investmentLevel: "Very High",
    timeToMarket: "Short",
    laborRequirements: "Low to Moderate",
    overview: [
      "Vertical farming uses controlled environments to grow crops in stacked layers.",
      "It relies on hydroponics, aeroponics, and artificial lighting to optimize growth.",
      "The method enables high-yield farming in urban spaces while reducing land and water usage."
    ],
    requirements: [
      {
        title: "Controlled Environment Systems",
        description: "Maintaining optimal temperature, humidity, and lighting for plant growth."
      },
      {
        title: "Hydroponic or Aeroponic Setup",
        description: "Using water or mist-based nutrient delivery systems instead of soil."
      },
      {
        title: "LED Lighting Systems",
        description: "Providing artificial light to replace natural sunlight."
      },
      {
        title: "Space Optimization",
        description: "Designing efficient rack systems for maximum yield per square meter."
      }
    ],
    marketing: [
      {
        channel: "Urban Supermarkets",
        description: "Supplying fresh, locally grown vegetables to retail stores.",
        tips: [
          "Highlight freshness and pesticide-free benefits",
          "Leverage technology-driven branding",
          "Collaborate with health-conscious brands"
        ]
      },
      {
        channel: "Subscription-based Deliveries",
        description: "Selling directly to consumers through weekly fresh produce subscriptions.",
        tips: [
          "Develop online platforms for easy ordering",
          "Offer seasonal vegetable packs",
          "Ensure quick delivery for maximum freshness"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Subsidies for Hi-Tech Farming",
        description: "Financial support for innovative farming technologies like vertical farming.",
        link: "https://agricoop.nic.in/"
      },
      {
        name: "Startup India Initiative",
        description: "Funding support for agri-tech startups investing in vertical farming.",
        link: "https://www.startupindia.gov.in/"
      }
    ]
  },
  {
    name: "Biodynamic Farming",
    slug: "biodynamic-farming",
    description: "Holistic farming using natural cycles and preparations.",
    image: bio,
    investmentLevel: "Medium",
    timeToMarket: "Varies",
    laborRequirements: "High",
    overview: [
      "Biodynamic farming views the farm as a self-sustaining organism.",
      "It relies on natural compost, crop rotation, and astronomical planting calendars.",
      "This method enhances soil fertility, biodiversity, and overall farm health."
    ],
    requirements: [
      {
        title: "Compost and Natural Fertilizers",
        description: "Using organic compost and biodynamic preparations for soil enrichment."
      },
      {
        title: "Lunar and Cosmic Influence",
        description: "Timing planting and harvesting based on lunar and planetary cycles."
      },
      {
        title: "Crop and Livestock Integration",
        description: "Balancing plant and animal life for a self-sustaining ecosystem."
      },
      {
        title: "No Synthetic Chemicals",
        description: "Avoiding artificial fertilizers and pesticides to maintain natural balance."
      }
    ],
    marketing: [
      {
        channel: "Organic and Specialty Stores",
        description: "Selling biodynamic-certified produce at premium prices.",
        tips: [
          "Obtain biodynamic certification for credibility",
          "Educate consumers on the benefits of biodynamic farming",
          "Partner with health-conscious retailers"
        ]
      },
      {
        channel: "Direct Farm Sales",
        description: "Hosting farm markets or online direct-to-consumer sales.",
        tips: [
          "Offer farm visits to build customer trust",
          "Create value-added products like herbal teas or biodynamic compost",
          "Develop a loyal customer base through subscription models"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Paramparagat Krishi Vikas Yojana",
        description: "Supports organic and sustainable farming initiatives.",
        link: "https://pgsindia-ncof.gov.in/"
      },
      {
        name: "National Project on Organic Farming",
        description: "Provides financial assistance for compost and biofertilizer production.",
        link: "https://ncof.dacnet.nic.in/"
      }
    ]
  },
  {
    name: "Regenerative Farming",
    slug: "regenerative-farming",
    description: "Farming focused on restoring soil health and biodiversity.",
    image: regen,
    investmentLevel: "Medium",
    timeToMarket: "Varies",
    laborRequirements: "Moderate",
    overview: [
      "Regenerative farming improves soil health by increasing organic matter and microbial life.",
      "It involves minimal soil disturbance, cover cropping, and integrating livestock.",
      "This method helps combat climate change by enhancing carbon sequestration."
    ],
    requirements: [
      {
        title: "No-Till Farming",
        description: "Avoiding plowing to maintain soil structure and prevent erosion."
      },
      {
        title: "Cover Cropping",
        description: "Growing cover crops to enhance soil fertility and suppress weeds."
      },
      {
        title: "Livestock Integration",
        description: "Using rotational grazing to naturally fertilize and aerate the soil."
      },
      {
        title: "Compost and Mulching",
        description: "Applying organic matter to improve water retention and nutrient levels."
      }
    ],
    marketing: [
      {
        channel: "Carbon Credit Programs",
        description: "Selling carbon credits for sustainable farming practices.",
        tips: [
          "Register with carbon sequestration initiatives",
          "Partner with eco-conscious brands",
          "Market the farm as a climate-positive initiative"
        ]
      },
      {
        channel: "Health Food Markets",
        description: "Selling nutrient-dense, sustainably grown produce.",
        tips: [
          "Highlight regenerative benefits in branding",
          "Leverage social media for storytelling",
          "Create partnerships with health-focused food brands"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "National Mission for Sustainable Agriculture",
        description: "Supports climate-resilient agricultural techniques, including regenerative farming.",
        link: "https://nmsa.gov.in/"
      },
      {
        name: "Soil Health Card Scheme",
        description: "Helps farmers assess and improve soil health.",
        link: "https://www.soilhealth.dac.gov.in/"
      }
    ]
  },  
  {
    name: "Precision Farming",
    slug: "precision-farming",
    description: "Technology-driven farming for efficiency and optimized resource use.",
    image: preci,
    investmentLevel: "High",
    timeToMarket: "Short",
    laborRequirements: "Low to Moderate",
    overview: [
      "Precision farming uses GPS, IoT, and AI to optimize crop management.",
      "It enhances productivity while reducing input costs like water, fertilizers, and pesticides.",
      "This method ensures efficient use of land and resources for maximum yield."
    ],
    requirements: [
      {
        title: "GPS and Remote Sensing",
        description: "Utilizing satellite imagery for real-time farm monitoring."
      },
      {
        title: "IoT and Smart Sensors",
        description: "Installing soil moisture sensors and automated irrigation systems."
      },
      {
        title: "Data Analytics and AI",
        description: "Using machine learning for predictive analytics and crop planning."
      },
      {
        title: "Variable Rate Technology",
        description: "Applying precise amounts of fertilizers and pesticides based on soil needs."
      }
    ],
    marketing: [
      {
        channel: "Tech-Enabled Farming Services",
        description: "Offering data-driven farming solutions to other farmers.",
        tips: [
          "Develop an agricultural consultancy model",
          "Leverage mobile apps for farm monitoring",
          "Collaborate with agri-tech startups"
        ]
      },
      {
        channel: "Contract Farming",
        description: "Partnering with agribusinesses for consistent supply and premium pricing.",
        tips: [
          "Ensure quality control using precision tools",
          "Use traceability systems to gain buyer trust",
          "Offer sustainability reports to corporate buyers"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Digital Agriculture Mission",
        description: "Supports AI and IoT-based farming practices.",
        link: "https://agricoop.nic.in/"
      },
      {
        name: "Sub-Mission on Agricultural Mechanization",
        description: "Provides financial assistance for precision farming equipment.",
        link: "https://farmech.dac.gov.in/"
      }
    ]
  },  
  {
    name: "Dryland Farming",
    slug: "dryland-farming",
    description: "Farming in arid regions without irrigation.",
    image: dry,
    investmentLevel: "Low",
    timeToMarket: "Varies",
    laborRequirements: "Moderate",
    overview: [
      "Dryland farming relies on rainfall instead of irrigation.",
      "It uses drought-resistant crops and soil conservation techniques to maximize yield.",
      "This method is crucial for regions with low water availability."
    ],
    requirements: [
      {
        title: "Drought-Resistant Crops",
        description: "Growing crops like millets, sorghum, and pulses that require less water."
      },
      {
        title: "Soil Moisture Conservation",
        description: "Using mulching and deep plowing to retain soil moisture."
      },
      {
        title: "Rainwater Harvesting",
        description: "Collecting and storing rainwater for supplemental irrigation."
      },
      {
        title: "Windbreaks and Shelterbelts",
        description: "Planting trees to reduce soil erosion and water loss."
      }
    ],
    marketing: [
      {
        channel: "Local Markets and Cooperatives",
        description: "Selling drought-resistant crops in local markets.",
        tips: [
          "Join farmer cooperatives for better pricing",
          "Promote traditional grains as nutritious alternatives",
          "Leverage government procurement programs"
        ]
      },
      {
        channel: "Value-Added Products",
        description: "Processing dryland crops into flour, snacks, or packaged goods.",
        tips: [
          "Develop branded millet-based products",
          "Target health-conscious consumers",
          "Utilize online marketplaces for sales"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
        description: "Supports efficient water use and rain-fed farming.",
        link: "https://pmksy.gov.in/"
      },
      {
        name: "National Adaptation Fund for Climate Change",
        description: "Provides financial support for climate-resilient agriculture.",
        link: "https://www.nabard.org/"
      }
    ]
  },
  {
    name: "Integrated Farming",
    slug: "integrated-farming",
    description: "Combining multiple agricultural activities for efficiency.",
    image: integrated,
    investmentLevel: "Medium",
    timeToMarket: "Varies",
    laborRequirements: "High",
    overview: [
      "Integrated farming combines crops, livestock, aquaculture, and agroforestry for maximum productivity.",
      "It creates a self-sustaining system where waste from one activity benefits another.",
      "This approach improves resource use efficiency and farm sustainability."
    ],
    requirements: [
      {
        title: "Diversified Crops and Livestock",
        description: "Growing a variety of crops and integrating poultry, dairy, or fish farming."
      },
      {
        title: "Waste Recycling",
        description: "Using livestock manure as organic fertilizer and crop residues as animal feed."
      },
      {
        title: "Efficient Water Management",
        description: "Implementing drip irrigation and fish pond water reuse."
      },
      {
        title: "Intercropping and Companion Planting",
        description: "Growing plants together to enhance soil fertility and pest control."
      }
    ],
    marketing: [
      {
        channel: "Multiple Revenue Streams",
        description: "Selling diverse farm products like dairy, fish, and organic produce.",
        tips: [
          "Develop farm-based business models",
          "Create package deals for multiple farm products",
          "Offer organic and farm-fresh branding"
        ]
      },
      {
        channel: "Eco-Tourism and Farm Visits",
        description: "Generating income through farm tours and hands-on agricultural experiences.",
        tips: [
          "Organize educational workshops",
          "Develop farm stay programs",
          "Partner with agritourism networks"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Rashtriya Krishi Vikas Yojana (RKVY)",
        description: "Supports integrated and sustainable farming practices.",
        link: "https://rkvy.nic.in/"
      },
      {
        name: "National Livestock Mission",
        description: "Provides financial assistance for livestock integration.",
        link: "https://nlm.dahd.nic.in/"
      }
    ]
  },
  {
    name: "Commercial Farming",
    slug: "commercial-farming",
    description: "Large-scale production of crops and livestock for sale.",
    image: commer,
    investmentLevel: "High",
    timeToMarket: "Short",
    laborRequirements: "High",
    overview: [
      "Commercial farming focuses on mass production of crops and livestock for profit.",
      "It involves mechanization, chemical fertilizers, and hybrid crop varieties for efficiency.",
      "This method is widely used for export-oriented and high-yield agriculture."
    ],
    requirements: [
      {
        title: "High-Quality Seeds and Fertilizers",
        description: "Using hybrid or genetically improved seeds for better yield."
      },
      {
        title: "Mechanization and Automation",
        description: "Employing tractors, harvesters, and irrigation systems for large-scale farming."
      },
      {
        title: "Efficient Supply Chain Management",
        description: "Optimizing logistics and storage to minimize post-harvest losses."
      },
      {
        title: "Pest and Disease Control",
        description: "Using pesticides and advanced monitoring to prevent crop damage."
      }
    ],
    marketing: [
      {
        channel: "Wholesale and Export Markets",
        description: "Supplying large quantities to international and bulk buyers.",
        tips: [
          "Obtain export certifications",
          "Develop partnerships with food processing industries",
          "Leverage government export subsidies"
        ]
      },
      {
        channel: "Supermarkets and Retail Chains",
        description: "Providing fresh and processed farm products to major retailers.",
        tips: [
          "Ensure consistent quality and packaging",
          "Negotiate long-term supply contracts",
          "Use digital platforms for direct retail engagement"
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "Agricultural Export Policy",
        description: "Promotes commercial farming for global trade.",
        link: "https://commerce.gov.in/"
      },
      {
        name: "Subsidy for Farm Mechanization",
        description: "Financial support for buying modern farming equipment.",
        link: "https://agricoop.nic.in/"
      }
    ]
  },
  {
    name: "Subsistence Farming",
    slug: "subsistence-farming",
    description: "Farming primarily for local consumption and family use.",
    image: subsis,
    investmentLevel: "Low",
    timeToMarket: "Varies",
    laborRequirements: "High",
    overview: [
      "Subsistence farming is focused on growing enough food to feed the farmer and their family.",
      "It is commonly practiced in rural areas with traditional farming methods.",
      "This type of farming involves small landholdings and minimal use of modern technology."
    ],
    requirements: [
      {
        title: "Small-Scale Land Use",
        description: "Managing small plots of land efficiently for maximum yield."
      },
      {
        title: "Traditional Farming Methods",
        description: "Using manual labor and natural fertilizers instead of machinery."
      },
      {
        title: "Crop Diversity",
        description: "Growing multiple crops to ensure food security and soil health."
      },
      {
        title: "Livestock Integration",
        description: "Raising small numbers of livestock to supplement nutrition and income."
      }
    ],
    marketing: [
      {
        channel: "Local Markets",
        description: "Selling surplus produce in nearby markets.",
        tips: [
          "Focus on fresh and organic produce for higher demand.",
          "Build direct relationships with local buyers and traders.",
          "Use community-based cooperatives to improve reach."
        ]
      },
      {
        channel: "Barter System",
        description: "Exchanging goods with other farmers for mutual benefit.",
        tips: [
          "Engage with nearby communities for trade opportunities.",
          "Grow high-demand crops to increase barter value.",
          "Utilize traditional marketplaces for trade connections."
        ]
      }
    ],
    governmentSchemes: [
      {
        name: "National Food Security Mission",
        description: "Supports small farmers in increasing productivity and sustainability.",
        link: "https://nfsm.gov.in/"
      },
      {
        name: "Rashtriya Krishi Vikas Yojana",
        description: "Provides financial assistance for rural and small-scale farming initiatives.",
        link: "https://rkvy.nic.in/"
      }
    ]
  }  
];