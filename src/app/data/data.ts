// type NewsItem = {
//   id: string;
//   date: string;
//   title: string;
//   subtitle?: string;
//   excerpt: string;
//   excerpt2?: string;
//   image: string;
//   href?: string;
// };

// export const NEWS: NewsItem[] = [
//   {
//     id: "1",
//     date: "Sep 05, 2025",
//     title: "Four Seasons Announces",
//     subtitle: "New Hotel and Residences in Jeddah",
//     excerpt:
//       "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
//     excerpt2:
//       "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//     image: "/news/Rectangle.svg",
//     href: "#",
//   },
//   {
//     id: "2",
//     date: "Apr 18, 2025",
//     title: "Four Seasons, Midad Real Estate",
//     subtitle: "Announce new Jeddah project",
//     excerpt:
//       "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//     image: "/news/Rectangle1.svg",
//     href: "#",
//   },
//   {
//     id: "3",
//     date: "Mar 12, 2025",
//     title:
//       "Four Seasons and Midad Real Estate Announce Plans for Hotel and Private Residences ",
//     subtitle: "in Jeddah Corniche District",
//     excerpt:
//       "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
//     excerpt2:
//       "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//     image: "/news/Rectangle2.svg",
//     href: "#",
//   },
// ];

type NewsItem = {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  excerpt2?: string;
  image: string;
  href?: string;
  body: string[]; // Add this new field to hold the full body text
};

export const NEWS: NewsItem[] = [
  {
    id: "1",
    date: "May 20, 2024",
    title: "Four Seasons Announces New Hotel",
    subtitle: "and Residences in Jeddah",
    excerpt:
      "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
    excerpt2:
      "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle.svg",
    href: "#",
    body: [
      "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
      "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
      "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
      "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts.",
      "“Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
      "Four Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).",
      "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination,” says Ms. Razan Sebai, Midad Real Estate.",
      "“Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination.”",
      "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
      "In addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.",
      "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
    ],
  },
  {
    id: "2",
    date: "May 20, 2024",
    title: "Four Seasons, Midad Real Estate",
    subtitle: "Announce new Jeddah project",
    excerpt:
      "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle1.svg",
    href: "#",
    body: [
      "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
      "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2,000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travelers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
      "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” said Bart Carnahan, president, global business development and portfolio management, Four Seasons Hotels and Resorts. “Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
      "The new property will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short- and long-term stays and 64 private residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square meters.",
      "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signaling the bright future that lies ahead for this dynamic destination,” said Razan Sebai, Midad Real Estate. “Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propel Jeddah into a distinguished regional and global travel destination.”",
      "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons’ renowned service and luxury lifestyle experience through the hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square meters; men and women can unwind in their own pools, fitness centers and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
      "In addition to amenities available from the adjoining hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centers and valet service, all of which will be led by a director of residences and dedicated Four Seasons residential team. Private residences will range from one to five bedrooms and 300 to 1,065 square meters. Homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each private residence to ensure standards of quality and service remain consistent throughout.",
      "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join the company’s growing collection of properties in Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
    ],
  },
  {
    id: "3",
    date: "May 20, 2024",
    title: "Four Seasons and Midad Real Estate Announce Plans",
    subtitle: " for Hotel and Private Residences in Jeddah Corniche District",
    excerpt:
      "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
    excerpt2:
      "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
    image: "/news/Rectangle2.svg",
    href: "#",
    body: [
      "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
      "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
      "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts. “Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
      "Four Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).",
      "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination,” says Ms. Razan Sebai, Midad Real Estate. “Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination.”",
      "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
      "In addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.",
      "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
    ],
  },
];
