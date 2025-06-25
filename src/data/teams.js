const teams = [
    {
      id: 1,
      name: "GodLike Esports",
      description: "A top-tier Indian BGMI team with an enormous fan following.",
      founded: 2020,
      games: ["BGMI", "Call of Duty Mobile"],
      banner: "https://via.placeholder.com/1200x300?text=GodLike+Esports",
      location: "Mumbai, India",
      size: "15–20 Players",
      contact: "https://godlikeesports.com"
    },
    {
      id: 2,
      name: "Global Esports",
      description: "Pioneers in Valorant from Mumbai, now competing globally.",
      founded: 2018,
      games: ["Valorant", "CS2"],
      banner: "https://via.placeholder.com/1200x300?text=Global+Esports",
      location: "Mumbai, India",
      size: "12 Players",
      contact: "https://globalesports.com"
    },
    {
      id: 3,
      name: "Revenant Esports",
      description: "A rising Indian org dominating multiple competitive titles.",
      founded: 2021,
      games: ["Valorant", "BGMI", "CODM"],
      banner: "https://via.placeholder.com/1200x300?text=Revenant+Esports",
      location: "Delhi, India",
      size: "10–15 Players",
      contact: "https://revenantesports.com"
    },
    {
      id: 4,
      name: "Orangutan Gaming",
      description: "A multi-gaming Indian esports org known for performance and style.",
      founded: 2020,
      games: ["Valorant", "BGMI", "Free Fire"],
      banner: "https://via.placeholder.com/1200x300?text=Orangutan+Gaming",
      location: "Mumbai, India",
      size: "20+ Players",
      contact: "https://orangutan.gg"
    },
    {
      id: 5,
      name: "Team Soul",
      description: "One of India's most iconic BGMI teams.",
      founded: 2019,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Team+Soul",
      location: "Navi Mumbai, India",
      size: "10 Players",
      contact: "https://soulesports.in"
    },
    {
      id: 6,
      name: "Velocity Gaming",
      description: "Top-level Indian Valorant squad known for elite plays.",
      founded: 2020,
      games: ["Valorant"],
      banner: "https://via.placeholder.com/1200x300?text=Velocity+Gaming",
      location: "Chennai, India",
      size: "8 Players",
      contact: "https://velocitygaming.in"
    },
    {
      id: 7,
      name: "Enigma Gaming",
      description: "A competitive org breaking into top-tier esports titles.",
      founded: 2021,
      games: ["Valorant", "BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Enigma+Gaming",
      location: "Delhi, India",
      size: "12 Players",
      contact: "https://enigma.gg"
    },
    {
      id: 8,
      name: "TSM India",
      description: "Indian branch of international org TSM, formerly dominant in PUBG.",
      founded: 2020,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=TSM+India",
      location: "Mumbai, India",
      size: "10 Players",
      contact: "https://tsm.gg"
    },
    {
      id: 9,
      name: "Marcos Gaming",
      description: "Multi-game esports org with a strong youth following.",
      founded: 2019,
      games: ["BGMI", "Free Fire", "FIFA"],
      banner: "https://via.placeholder.com/1200x300?text=Marcos+Gaming",
      location: "Hyderabad, India",
      size: "15 Players",
      contact: "https://marcosgaming.in"
    },
    {
      id: 10,
      name: "Blind Esports",
      description: "Emerging esports team gaining traction in BGMI tournaments.",
      founded: 2021,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Blind+Esports",
      location: "Kolkata, India",
      size: "8 Players",
      contact: "https://blindesports.com"
    },
    {
      id: 11,
      name: "Gods Reign",
      description: "Known for their bold branding and in-game aggression.",
      founded: 2020,
      games: ["BGMI", "Valorant"],
      banner: "https://via.placeholder.com/1200x300?text=Gods+Reign",
      location: "Bangalore, India",
      size: "14 Players",
      contact: "https://godsreign.gg"
    },
    {
      id: 12,
      name: "Team X Spark",
      description: "BGMI team started by popular streamer Scout.",
      founded: 2021,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Team+X+Spark",
      location: "Pune, India",
      size: "7 Players",
      contact: "https://teamxspark.in"
    },
    {
      id: 13,
      name: "Team Tamilas",
      description: "Southern India’s pride in competitive esports.",
      founded: 2019,
      games: ["BGMI", "Valorant"],
      banner: "https://via.placeholder.com/1200x300?text=Team+Tamilas",
      location: "Chennai, India",
      size: "10 Players",
      contact: "https://teamtamilas.gg"
    },
    {
      id: 14,
      name: "Skylightz Gaming",
      description: "Winners of BGIS 2021, known for tactical gameplay.",
      founded: 2020,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Skylightz+Gaming",
      location: "Indore, India",
      size: "11 Players",
      contact: "https://skylightzgaming.com"
    },
    {
      id: 15,
      name: "Hydra Official",
      description: "Started as a content team, now in esports.",
      founded: 2018,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Hydra+Official",
      location: "Ahmedabad, India",
      size: "12 Players",
      contact: "https://hydraofficial.in"
    },
    {
      id: 16,
      name: "Team Mayhem",
      description: "Feared BGMI team with strong mid-game tactics.",
      founded: 2019,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Team+Mayhem",
      location: "Nagpur, India",
      size: "9 Players",
      contact: "https://teammayhem.gg"
    },
    {
      id: 17,
      name: "Team 8Bit",
      description: "Legacy team that shaped early PUBG Mobile esports in India.",
      founded: 2018,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=Team+8Bit",
      location: "Mumbai, India",
      size: "10 Players",
      contact: "https://team8bit.in"
    },
    {
      id: 18,
      name: "Entity Gaming",
      description: "Legendary name in Indian esports with solid achievements.",
      founded: 2017,
      games: ["BGMI", "CS2"],
      banner: "https://via.placeholder.com/1200x300?text=Entity+Gaming",
      location: "Pune, India",
      size: "13 Players",
      contact: "https://entitygaming.com"
    },
    {
      id: 19,
      name: "OR Esports",
      description: "Runner-up in PMWL East 2020, aggressive playstyle.",
      founded: 2019,
      games: ["BGMI"],
      banner: "https://via.placeholder.com/1200x300?text=OR+Esports",
      location: "Jaipur, India",
      size: "10 Players",
      contact: "https://oresports.in"
    },
    {
      id: 20,
      name: "Chemin Esports",
      description: "Rising esports org investing in young gaming talent.",
      founded: 2021,
      games: ["BGMI", "Free Fire"],
      banner: "https://via.placeholder.com/1200x300?text=Chemin+Esports",
      location: "Bhopal, India",
      size: "9 Players",
      contact: "https://cheminesports.in"
    }
  ];
  
  export default teams;
  