(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // type NewsItem = {
// //   id: string;
// //   date: string;
// //   title: string;
// //   subtitle?: string;
// //   excerpt: string;
// //   excerpt2?: string;
// //   image: string;
// //   href?: string;
// // };
// // export const NEWS: NewsItem[] = [
// //   {
// //     id: "1",
// //     date: "Sep 05, 2025",
// //     title: "Four Seasons Announces",
// //     subtitle: "New Hotel and Residences in Jeddah",
// //     excerpt:
// //       "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
// //     excerpt2:
// //       "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
// //     image: "/news/Rectangle.svg",
// //     href: "#",
// //   },
// //   {
// //     id: "2",
// //     date: "Apr 18, 2025",
// //     title: "Four Seasons, Midad Real Estate",
// //     subtitle: "Announce new Jeddah project",
// //     excerpt:
// //       "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
// //     image: "/news/Rectangle1.svg",
// //     href: "#",
// //   },
// //   {
// //     id: "3",
// //     date: "Mar 12, 2025",
// //     title:
// //       "Four Seasons and Midad Real Estate Announce Plans for Hotel and Private Residences ",
// //     subtitle: "in Jeddah Corniche District",
// //     excerpt:
// //       "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
// //     excerpt2:
// //       "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
// //     image: "/news/Rectangle2.svg",
// //     href: "#",
// //   },
// // ];
// type NewsItem = {
//   id: string;
//   date: string;
//   title: string;
//   subtitle?: string;
//   excerpt: string;
//   excerpt2?: string;
//   image: string;
//   href?: string;
//   body: string[]; // Add this new field to hold the full body text
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
//     body: [
//       "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
//       "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//       "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
//       "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts.",
//       "“Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
//       "Four Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).",
//       "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination,” says Ms. Razan Sebai, Midad Real Estate.",
//       "“Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination.”",
//       "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
//       "In addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.",
//       "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
//     ],
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
//     body: [
//       "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//       "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2,000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travelers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
//       "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” said Bart Carnahan, president, global business development and portfolio management, Four Seasons Hotels and Resorts. “Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
//       "The new property will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short- and long-term stays and 64 private residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square meters.",
//       "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signaling the bright future that lies ahead for this dynamic destination,” said Razan Sebai, Midad Real Estate. “Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propel Jeddah into a distinguished regional and global travel destination.”",
//       "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons’ renowned service and luxury lifestyle experience through the hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square meters; men and women can unwind in their own pools, fitness centers and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
//       "In addition to amenities available from the adjoining hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centers and valet service, all of which will be led by a director of residences and dedicated Four Seasons residential team. Private residences will range from one to five bedrooms and 300 to 1,065 square meters. Homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each private residence to ensure standards of quality and service remain consistent throughout.",
//       "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join the company’s growing collection of properties in Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
//     ],
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
//     body: [
//       "Four Seasons Hotels and Resorts, the world’s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
//       "The project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah’s classic architecture, reflecting the city’s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.",
//       "“Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination,” says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts. “Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer.”",
//       "Four Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).",
//       "“As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination,” says Ms. Razan Sebai, Midad Real Estate. “Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination.”",
//       "Fusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel’s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.",
//       "In addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident’s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.",
//       "Four Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.",
//     ],
//   },
// ];
__turbopack_context__.s([
    "NEWS",
    ()=>NEWS
]);
const NEWS = [
    {
        id: "1",
        date: "Sep 05, 2025",
        title: "Four Seasons Announces",
        subtitle: "New Hotel and Residences in Jeddah",
        excerpt: "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
        excerpt2: "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
        body: 'Four Seasons Hotels and Resorts, the world\'s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.\n\nTogether, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.\n\nThe project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah\'s classic architecture, reflecting the city\'s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.\n\n"Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination," says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts.\n\n"Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer."\n\nFour Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).\n\n"As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination," says Ms. Razan Sebai, Midad Real Estate.\n\n"Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination."\n\nFusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel\'s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.\n\nIn addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident\'s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.\n\nFour Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.',
        image: "/news/Rectangle.svg",
        href: "#"
    },
    {
        id: "2",
        date: "Apr 18, 2025",
        title: "Four Seasons, Midad Real Estate",
        subtitle: "Announce new Jeddah project",
        excerpt: "Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
        body: 'Luxury hospitality company Four Seasons Hotels and Resorts announced plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.\n\nThe project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah\'s classic architecture, reflecting the city\'s 2,000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travelers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.\n\n"Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination," said Bart Carnahan, president, global business development and portfolio management, Four Seasons Hotels and Resorts. "Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer."\n\nThe new property will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short- and long-term stays and 64 private residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square meters.\n\n"As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signaling the bright future that lies ahead for this dynamic destination," said Razan Sebai, Midad Real Estate. "Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propel Jeddah into a distinguished regional and global travel destination."\n\nFusing community, convenience and comfort, guests and residents can enjoy Four Seasons\' renowned service and luxury lifestyle experience through the hotel\'s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square meters; men and women can unwind in their own pools, fitness centers and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.\n\nIn addition to amenities available from the adjoining hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident\'s lounge, outdoor terrace, fitness centers and valet service, all of which will be led by a director of residences and dedicated Four Seasons residential team. Private residences will range from one to five bedrooms and 300 to 1,065 square meters. Homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each private residence to ensure standards of quality and service remain consistent throughout.\n\nFour Seasons Hotel and Private Residences Jeddah at the Corniche will join the company\'s growing collection of properties in Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.',
        image: "/news/Rectangle1.svg",
        href: "#"
    },
    {
        id: "3",
        date: "Mar 12, 2025",
        title: "Four Seasons and Midad Real Estate Announce Plans for Hotel and Private Residences",
        subtitle: "in Jeddah Corniche District",
        excerpt: "Four Seasons Hotels and Resorts, the world's leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate.",
        excerpt2: "Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.",
        body: 'Four Seasons Hotels and Resorts, the world\'s leading luxury hospitality company, announces plans to expand its presence in the Middle East alongside Saudi-based investment firm Midad Real Estate. Together, they will introduce Four Seasons Hotel and Private Residences Jeddah at the Corniche, a new-build coastal retreat scheduled to open in 2024.\n\nThe project will be located within the Corniche District, where both guests and homeowners will be enchanted by views of the Red Sea and Jeddah\'s classic architecture, reflecting the city\'s 2000 years of history. Key business hubs, the historic area of Al-Balad, the Tahlia Street shopping district and the Formula 1 Jeddah street circuit will be in close proximity to the upcoming Four Seasons, giving future travellers and residents alike reason to visit and live in the increasingly popular metropolitan destination, also known as New Jeddah Corniche.\n\n"Four Seasons is experiencing incredible growth and momentum in Saudi Arabia and our new project in Jeddah at the Corniche will be a perfect complement to our existing and future properties in this important destination," says Bart Carnahan, President, Global Business Development and Portfolio Management, Four Seasons Hotels and Resorts. "Whether you are visiting for a long or short stay, or in search of a new home, Four Seasons is dedicated to bringing dynamic projects to market that offer something for everyone. We look forward to partnering with Midad Real Estate to establish Four Seasons Jeddah at the Corniche as a primary gateway to all New Jeddah Corniche has to offer."\n\nFour Seasons Hotel and Private Residences Jeddah at the Corniche will include 269 luxuriously appointed guest rooms and suites, 21 serviced apartments for short and long-term stays and 64 Private Residences including two penthouses. With Skidmore, Owings & Merrill leading the architecture and Richmond International the interior design, each space will be thoughtfully created to incorporate opulent, tasteful design elements. Accommodations will include expansive living spaces for families, tranquil spa-inspired bathrooms and marble-clad interiors throughout. The serviced apartments will be available in two and three-bedroom configurations starting at 116 square metres (1,250 square feet).\n\n"As Jeddah emerges as a global destination for both business and leisure tourism, the arrival of Four Seasons to the Corniche ushers in a new level of luxury and prestige, signalling the bright future that lies ahead for this dynamic destination," says Ms. Razan Sebai, Midad Real Estate. "Our shared values and commitment to innovation across design, hospitality and real estate speak to our strong partnership and collective desire to bring this landmark Four Seasons project to life, and in doing so, propell Jeddah into a distinguished regional and global travel destination."\n\nFusing community, convenience and comfort, guests and residents can enjoy Four Seasons renowned service and unrivalled luxury lifestyle experience through the Hotel\'s amenity and dining options, including multiple restaurants with terraces for open-air dining, an outdoor shisha lounge, a cigar lounge and more. Meeting and event space will total 4,000 square metres (43,055 square feet); men and women can unwind in their own pools, fitness centres and spas; while children can safely play, create and explore in the complimentary Kids For All Seasons program.\n\nIn addition to amenities available from the adjoining Hotel, homeowners at Four Seasons Private Residences Jeddah at the Corniche will have exclusive access to a private resident\'s lounge, outdoor terrace, fitness centres and valet service, all of which will be led by a Director of Residences and dedicated Four Seasons residential team. Private Residences will range from one to five bedrooms and 300 to 1,065 square metres (3,230 to 11,500 feet). To ensure an effortless lifestyle experience that is complemented by a highly personalized and service-rich environment, homeowners can trust that their assets are in capable hands whether at home or abroad, as Four Seasons acts as the property managers for each Private Residence to ensure standards of quality and service remain consistent throughout.\n\nFour Seasons Hotel and Private Residences Jeddah at the Corniche will join Four Seasons growing collection of properties in the Kingdom of Saudi Arabia, including Four Seasons Hotel Riyadh at Kingdom Centre, the upcoming Four Seasons Hotel Diriyah, and a collection of projects soon to be announced.',
        image: "/news/Rectangle2.svg",
        href: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/news/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as LinkIcon>");
"use client";
;
;
;
;
;
function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function NewsDetailPage(param) {
    let { params } = param;
    const { slug } = params;
    // البحث عن الخبر المناسب بالـ slug
    const newsItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEWS"].find((n)=>generateSlug(n.title) === slug);
    if (!newsItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full bg-white text-[#1e1e1e] px-6 sm:px-8 lg:px-[70px] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-editors text-2xl mb-4",
                        children: "News not found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/news",
                        className: "inline-block bg-[#e4dedd] text-black px-6 py-2 rounded-full font-helvetica text-[14px] hover:bg-[#d9cfcf] transition-colors",
                        children: "Back to News"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/[slug]/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-white text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 sm:px-8 lg:px-[70px] py-6 border-b border-black/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/news",
                    className: "inline-flex items-center text-[14px] font-helvetica text-black/60 hover:text-black transition-colors",
                    children: "← Back to News"
                }, void 0, false, {
                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "px-6 sm:px-8 lg:px-[70px] py-16 lg:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-12 lg:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-black/60 mb-4 font-helvetica",
                                children: newsItem.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-editors text-[28px] sm:text-[36px] lg:text-[44px] leading-tight mb-4 max-w-4xl",
                                children: newsItem.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            newsItem.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-editors italic text-[22px] sm:text-[28px] lg:text-[34px] leading-snug text-black/90 max-w-4xl",
                                children: newsItem.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 lg:mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[300px] sm:h-[400px] lg:h-[500px] max-w-6xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: newsItem.image || "/placeholder.svg",
                                alt: newsItem.title,
                                fill: true,
                                className: "object-cover rounded-lg",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose prose-lg max-w-none",
                                children: newsItem.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: newsItem.body.split("\n\n").map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90 ".concat(index === 0 ? "first-letter:text-5xl first-letter:font-editors first-letter:float-left first-letter:mr-3 first-letter:mt-1" : ""),
                                            children: paragraph
                                        }, index, false, {
                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90 mb-8 first-letter:text-5xl first-letter:font-editors first-letter:float-left first-letter:mr-3 first-letter:mt-1",
                                            children: newsItem.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        newsItem.excerpt2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90 mb-8",
                                            children: newsItem.excerpt2
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8 mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-editors text-[22px] lg:text-[26px] mb-4",
                                                            children: "Project Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90",
                                                            children: "The Four Seasons Hotel and Private Residences Jeddah at the Corniche represents a significant milestone in luxury hospitality development in Saudi Arabia. This coastal retreat will feature world-class amenities and services that Four Seasons is renowned for globally."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-editors text-[22px] lg:text-[26px] mb-4",
                                                            children: "Strategic Partnership"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90",
                                                            children: "The collaboration between Four Seasons Hotels and Resorts and Midad Real Estate demonstrates the growing confidence in Saudi Arabia's tourism and hospitality sector. This partnership combines Four Seasons' operational excellence with Midad's local expertise and market knowledge."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-editors text-[22px] lg:text-[26px] mb-4",
                                                            children: "Future Outlook"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-helvetica text-[16px] lg:text-[18px] leading-relaxed text-black/90",
                                                            children: "This development aligns with Saudi Arabia's Vision 2030 initiative to diversify the economy and establish the Kingdom as a premier global destination for business and leisure travelers. The project is expected to set new standards for luxury hospitality in the region."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 pt-8 border-t border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-editors text-[18px] mb-4 italic",
                                                children: "Share Article"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href)), "_blank"),
                                                        className: "w-8 h-8 flex items-center justify-center text-black hover:text-blue-600 transition-colors",
                                                        "aria-label": "Share on Facebook",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>window.open("https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(window.location.href)), "_blank"),
                                                        className: "w-8 h-8 flex items-center justify-center text-black hover:text-blue-700 transition-colors",
                                                        "aria-label": "Share on LinkedIn",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>window.open("https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(window.location.href), "&text=").concat(encodeURIComponent(newsItem.title)), "_blank"),
                                                        className: "w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors",
                                                        "aria-label": "Share on X (Twitter)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>navigator.clipboard.writeText(window.location.href),
                                                        className: "w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors",
                                                        "aria-label": "Copy link",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] text-black/60 font-helvetica",
                                                children: [
                                                    "Published on ",
                                                    newsItem.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/news",
                                                className: "bg-[#e4dedd] text-black px-6 py-2 rounded-full font-helvetica text-[14px] hover:bg-[#d9cfcf] transition-colors",
                                                children: "More News"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-6 sm:px-8 lg:px-[70px] py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-editors text-[32px] lg:text-[40px]",
                                    children: "Related Articles"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/news",
                                    className: "text-[14px] font-helvetica text-black/60 hover:text-black transition-colors",
                                    children: "View All"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEWS"].filter((n)=>n.id !== newsItem.id).slice(0, 2).map((relatedNews)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/news/".concat(generateSlug(relatedNews.title)),
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-64 sm:h-80 lg:h-96 mb-6 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: relatedNews.image || "/placeholder.svg",
                                                    alt: relatedNews.title,
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-105 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] text-black/60 font-helvetica",
                                                        children: relatedNews.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-editors text-[20px] sm:text-[24px] lg:text-[28px] leading-tight",
                                                        children: [
                                                            relatedNews.title,
                                                            relatedNews.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block font-editors italic text-[18px] sm:text-[20px] lg:text-[24px] text-black/80 mt-1",
                                                                children: relatedNews.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-px bg-black/20 my-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-helvetica text-[14px] lg:text-[16px] leading-relaxed text-black/70 line-clamp-4",
                                                        children: relatedNews.excerpt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block bg-[#e4dedd] text-black px-6 py-3 font-helvetica text-[14px] hover:bg-[#d9cfcf] transition-colors group-hover:bg-black group-hover:text-white",
                                                            children: "Read more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/news/[slug]/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/news/[slug]/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 19
                                    }, this)
                                }, relatedNews.id, false, {
                                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/[slug]/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/[slug]/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = NewsDetailPage;
var _c;
__turbopack_context__.k.register(_c, "NewsDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))), "lucide-".concat(iconName), className),
            ...props
        });
    });
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Facebook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
];
const Facebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("facebook", __iconNode);
;
 //# sourceMappingURL=facebook.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Facebook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Linkedin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
];
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("linkedin", __iconNode);
;
 //# sourceMappingURL=linkedin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Linkedin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Twitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("twitter", __iconNode);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
];
const Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("link", __iconNode);
;
 //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as LinkIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ba2a1ac7._.js.map