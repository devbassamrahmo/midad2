// app/data/projects.ts
export interface Project {
  id: string
  name: string
  location: string
  completion: string
  size: string
  type: string
  overviewSubtitle: string
  overview: string
  design: string
  lifestyle: string
  lookingAhead: string
  overviewDescription: string
  heroImage: string
  designSubtitle: string
  lifeStyleSubtitle: string
  lookingAheadSubtitle: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: "zohur-beach",
    name: "Zohur Beach Residential Compound",
    location: "Jeddah, Saudi Arabia",
    completion: "2027",
    size: "410,000 sqm",
    type: "Residential Compound / Luxury Villas",
    overview: "Where the Red Sea meets refined living.",
    overviewSubtitle: "Where the Red Sea meets refined living",
    overviewDescription: " ",
    designSubtitle: "Exclusive, modern, and inspired by the sea",
    lifeStyleSubtitle: "sanctuary of privacy and elegance",
    design:
      "The design emphasizes open spaces and serenity, featuring private pools, outdoor decks, modern landscaping, and natural coastal views for an exclusive lifestyle experience.",
    lifestyle:
      "An entirely private coastal lifestyle. Zohur Beach is more than a residential compound — it is a statement of modern design, tranquility, and refined comfort, redefining the experience of peace, exclusivity, and luxury.",
    lookingAhead:
      "Zohur Beach establishes a new model for waterfront developments across Midad’s portfolio, creating opportunities for future coastal residential projects.",
    lookingAheadSubtitle: "Setting the standard for Saudi coastal livin",
    heroImage: "/projects/zohur/hero.svg",
    images: ["/projects/zohur/img1.svg", "/projects/zohur/img2.svg"],
  },
  {
    id: "coral-mall",
    name: "Zohur Beach Residential Compound",
    location: "Jeddah, KSA",
    completion: "2012",
    size: "50,000 sqm",
    type: "Retail & Leisure Destination",
    overview: "Since its completion in 2005, Coral Mall has been a dynamic retail and leisure destination in Jeddah. Spanning 50,000 sqm, it combines shopping, dining, and entertainment anchors, offering residents and visitors a place that seamlessly blends daily convenience with unique experiences.",
    overviewSubtitle: "A vibrant hub for everyday life and special moments",
    overviewDescription: " Since its completion in 2005, Coral Mall has been a dynamic retail and leisure destination in Jeddah. Spanning 50,000 sqm, it combines shopping, dining, and entertainment anchors, offering residents and visitors a place that seamlessly blends daily convenience with unique experiences. ",
    design: "Coral Mall’s design creates an engaging atmosphere with open layouts and a mix of retail and leisure options. Featuring the second AMC cinema in the Western Province, it has established itself as a place where families and friends gather to shop, dine, and enjoy entertainment in one setting.",
    designSubtitle: "Modern spaces designed for connection",
    lifeStyleSubtitle: "Where community and leisure come together",
    lifestyle: "From international retail brands and gourmet dining to family-friendly entertainment, Coral Mall is more than a shopping center. It is a community hub that continues to attract visitors for both everyday activities and memorable occasions.",
    lookingAhead: "Coral Mall continues to evolve as a modern hub, setting new standards for retail and leisure in the region while remaining a central gathering place for families and visitors.",
    lookingAheadSubtitle: "A cornerstone of Jeddah’s modern lifestyle",

    heroImage: "/projects/crystal-gallery/hero.svg",
    images: ["/projects/crystal-gallery/img1.svg", "/projects/crystal-gallery/img2.svg"],

  },
  {
    id: "crystal-gallery",
    name: "Coral Mall",
    location: "Jeddah, KSA",
    completion: "2023",
    size: "55,000 sqm",
    type: "Retail & Lifestyle Destination",
    overview: "A retail experience inspired by the sea.",
    overviewSubtitle: "A cultural vision reimagined in modern for",
    overviewDescription: "Locatedin the heartof Jeddah, CrystalGalleryis set to become a high-end retail and lifestyle destination unlike any other. Scheduled for completion in 2023, the development spans 55,000 sqm and is designed as an architectural statement that bridges global sophistication with authentic Saudi heritage.",
    design:
      "Crystal Gallery’sdesign integrates open-air promenades, lush landscaped spaces, and thoughtfully curated luxury retail and dining. The architectural language draws inspiration from Jeddah’s cultural heritage, while incorporating world-class design elements that redefine the urban retail experience.",
    lifestyle:
      "Beyond its retailoffering,Crystal Gallery is envisioned as a lifestyle hub. Visitors will enjoy a dynamic blend of boutique shopping, fine dining, outdoor experiences, and community-driven spaces that inspire connection and belonging.",
    designSubtitle: "Where tradition meets innovation",
    lifeStyleSubtitle: "More than shopping a destination for living",
    lookingAhead:
      "CrystalGallery will establish anew standard for premium retail and leisure in Saudi Arabia. By combining sustainability, cultural authenticity, and international design excellence, the project embodies Midad Real Estate’s commitment to shaping destinations that endure for generations.",
    lookingAheadSubtitle: "Setting new benchmarks for urban destinations",

    heroImage: "/projects/lastproject/hero.svg",
    images: ["/projects/lastproject/img1.svg", "/projects/lastproject/img2.svg"],
  },
]
