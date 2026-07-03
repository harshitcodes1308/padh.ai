/**
 * Normalizes chapter names to resolve differences (e.g. full names vs half names in PDFs)
 * to ensure accurate question matching.
 */
export function normalizeChapterName(name: string): string {
  if (!name) return "";
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Physics
  if (clean.includes("force") || clean.includes("work") || clean.includes("power") || clean.includes("energy") || clean.includes("machine") || clean.includes("lever")) {
    return "Force, Work, Power & Energy";
  }
  if (clean.includes("light") || clean.includes("lens") || clean.includes("refraction") || clean.includes("reflection") || clean.includes("spectrum")) {
    return "Light, Refraction & Lenses";
  }
  if (clean.includes("sound") || clean.includes("echo") || clean.includes("vibration")) {
    return "Sound";
  }
  if (clean.includes("electricity") || clean.includes("magnet") || clean.includes("ohm") || clean.includes("circuit") || clean.includes("current")) {
    return "Electricity & Magnetism";
  }
  if (clean.includes("heat") || clean.includes("calorimetry")) {
    return "Heat & Calorimetry";
  }
  if (clean.includes("radioactiv") || clean.includes("nuclear") || clean.includes("modernphysics")) {
    return "Modern Physics & Radioactivity";
  }

  // Chemistry
  if (clean.includes("periodic")) {
    return "Periodic Table";
  }
  if (clean.includes("chemicalbonding") || clean.includes("bonding")) {
    return "Chemical Bonding";
  }
  if (clean.includes("acid") || clean.includes("base") || clean.includes("salt")) {
    return "Study Of Acids, Bases And Salts";
  }
  if (clean.includes("analytical")) {
    return "Analytical Chemistry";
  }
  if (clean.includes("moleconcept") || clean.includes("stoichiometry") || clean.includes("empirical")) {
    return "Mole Concept And Stoichiometry";
  }
  if (clean.includes("electrolysis")) {
    return "Electrolysis";
  }
  if (clean.includes("metallurgy") || clean.includes("alloy")) {
    return "Metallurgy";
  }
  if (clean.includes("hydrogen")) {
    return "Study Of Compounds - Hydrogen Chloride";
  }
  if (clean.includes("ammonia")) {
    return "Study Of Compounds - Ammonia";
  }
  if (clean.includes("nitric")) {
    return "Study Of Compounds - Nitric Acid";
  }
  if (clean.includes("sulphuric")) {
    return "Study Of Compounds - Sulphuric Acid";
  }
  if (clean.includes("organic") || clean.includes("hydrocarbon") || clean.includes("alcohol") || clean.includes("carboxylic")) {
    return "Organic Chemistry";
  }
  if (clean.includes("practicalchem")) {
    return "Practical Chemistry";
  }

  // Biology
  if (clean.includes("cell")) {
    return "Cell Cycle & Chromosomes";
  }
  if (clean.includes("genetic") || clean.includes("mendel") || clean.includes("inheritance") || clean.includes("evolution")) {
    return "Genetics & Inheritance";
  }
  if (clean.includes("absorption") || clean.includes("root") || clean.includes("osmosis")) {
    return "Absorption by Roots";
  }
  if (clean.includes("transpiration")) {
    return "Transpiration";
  }
  if (clean.includes("photosynthesis")) {
    return "Photosynthesis";
  }
  if (clean.includes("plantphys")) {
    return "Plant Physiology";
  }
  if (clean.includes("endocrine") || clean.includes("hormone")) {
    return "The Endocrine System";
  }
  if (clean.includes("reproduct")) {
    return "Reproductive System";
  }
  if (clean.includes("population") || clean.includes("health")) {
    return "Population and Health";
  }
  if (clean.includes("pollution") || clean.includes("waste")) {
    return "Pollution and Waste Management";
  }

  // History
  if (clean.includes("nationalismineurope") || clean.includes("riseofnationalism")) {
    return "The Rise of Nationalism in Europe";
  }
  if (clean.includes("nationalisminindia")) {
    return "Nationalism in India";
  }
  if (clean.includes("globalworld") || clean.includes("makingofaglobal")) {
    return "The Making of a Global World";
  }
  if (clean.includes("printculture")) {
    return "Print Culture and the Modern World";
  }
  if (clean.includes("mappointinghistory") || (clean.includes("mappointing") && clean.includes("history"))) {
    return "Map Pointing - History";
  }

  // Geography
  if (clean.includes("resourcesanddev") || clean.includes("resourcesdevelopment")) {
    return "Resources and Development";
  }
  if (clean.includes("forestandwildlife") || clean.includes("forestwildlife")) {
    return "Forest and Wildlife Resources";
  }
  if (clean.includes("waterresource")) {
    return "Water Resources";
  }
  if (clean.includes("agriculture")) {
    return "Agriculture";
  }
  if (clean.includes("mineral") && clean.includes("energy")) {
    return "Minerals and Energy Resources";
  }
  if (clean.includes("manufacturingindustr")) {
    return "Manufacturing Industries";
  }
  if (clean.includes("lifelines")) {
    return "Lifelines of National Economy";
  }
  if (clean.includes("mappointinggeography") || (clean.includes("mappointing") && clean.includes("geography"))) {
    return "Map Pointing - Geography";
  }
  if (clean.includes("mappoint") && !clean.includes("history")) {
    return "Map Pointing - Geography";
  }

  // Political Science
  if (clean.includes("powersharing")) {
    return "Power-sharing";
  }
  if (clean.includes("federalism")) {
    return "Federalism";
  }
  if (clean.includes("genderreligion") || clean.includes("genderreligioncaste")) {
    return "Gender, Religion and Caste";
  }
  if (clean.includes("politicalpart")) {
    return "Political Parties";
  }
  if (clean.includes("outcomesofdemoc")) {
    return "Outcomes of Democracy";
  }

  // Economics
  if (clean.includes("development") && !clean.includes("resource")) {
    return "Development";
  }
  if (clean.includes("sectorsof")) {
    return "Sectors of the Indian Economy";
  }
  if (clean.includes("money") && clean.includes("credit")) {
    return "Money and Credit";
  }
  if (clean.includes("globalisation") || clean.includes("globalization")) {
    return "Globalisation and the Indian Economy";
  }
  if (clean.includes("consumerrights")) {
    return "Consumer Rights";
  }

  // Mathematics Basic & Standard
  if (clean.includes("realnumber")) return "Real Numbers";
  if (clean.includes("polynomial")) return "Polynomials";
  if (clean.includes("linearequation") || clean.includes("pairoflinear")) return "Pair of Linear Equations in Two Variables";
  if (clean.includes("quadratic")) return "Quadratic Equations";
  if (clean.includes("arithmeticprog") || clean.includes("ap")) return "Arithmetic Progressions";
  if (clean.includes("triangle")) return "Triangles";
  if (clean.includes("coordinate")) return "Coordinate Geometry";
  if (clean.includes("intrototrig") || clean.includes("introductiontotrig") || clean.includes("identities") || clean.includes("trig")) {
    if (clean.includes("application") || clean.includes("height") || clean.includes("distance")) {
      return "Some Applications of Trigonometry";
    }
    return "Introduction to Trigonometry";
  }
  if (clean.includes("circle")) return "Circles";
  if (clean.includes("arearelated") || clean.includes("areasrelated")) return "Areas Related to Circles";
  if (clean.includes("surfacearea") || clean.includes("volume") || clean.includes("mensuration")) return "Surface Areas and Volumes";
  if (clean.includes("statistic")) return "Statistics";
  if (clean.includes("probability")) return "Probability";

  // IT & AI & English
  if (clean.includes("documentation") || clean.includes("writer")) return "Digital Documentation (Writer)";
  if (clean.includes("spreadsheet") || clean.includes("calc")) return "Electronic Spreadsheet (Calc)";
  if (clean.includes("database") || clean.includes("base")) return "Database Management System (Base)";
  if (clean.includes("safety") || clean.includes("workplacesafety")) return "Internet and Workplace Safety";
  
  if (clean.includes("lettertogod")) return "A Letter to God";
  if (clean.includes("mandela")) return "Nelson Mandela - Long Walk to Freedom";
  if (clean.includes("flying") || clean.includes("aeroplane")) return "Stories About Flying";
  if (clean.includes("annefrank")) return "From the Diary of Anne Frank";
  if (clean.includes("glimpses") || clean.includes("goa") || clean.includes("coorg") || clean.includes("assam")) return "Glimpses of India";
  if (clean.includes("otter") || clean.includes("mijbil")) return "Mijbil the Otter";
  if (clean.includes("ridesthebus") || clean.includes("madam")) return "Madam Rides the Bus";
  if (clean.includes("benares") || clean.includes("sermon")) return "The Sermon at Benares";
  if (clean.includes("proposal")) return "The Proposal";
  if (clean.includes("dustofsnow")) return "Dust of Snow";
  if (clean.includes("fireandice")) return "Fire and Ice";
  if (clean.includes("tigerinthezoo")) return "A Tiger in the Zoo";
  if (clean.includes("ballpoem")) return "The Ball Poem";
  if (clean.includes("amanda")) return "Amanda!";
  if (clean.includes("custard") || clean.includes("dragon")) return "The Tale of Custard the Dragon";
  if (clean.includes("annegregory")) return "For Anne Gregory";
  if (clean.includes("triumphofsurgery")) return "A Triumph of Surgery";
  if (clean.includes("thiefsstory")) return "The Thief's Story";
  if (clean.includes("midnightvisitor")) return "The Midnight Visitor";
  if (clean.includes("questionoftrust")) return "A Question of Trust";
  if (clean.includes("footprints")) return "Footprints Without Feet";
  if (clean.includes("scientist") || clean.includes("makingof")) return "The Making of a Scientist";
  if (clean.includes("necklace")) return "The Necklace";
  if (clean.includes("bholi")) return "Bholi";
  if (clean.includes("savedtheearth") || clean.includes("bookthatsaved")) return "The Book that Saved the Earth";

  return name.trim();
}

/**
 * Returns the sub-subject classification for Science and Social Science chapters
 */
export function getChapterSubSubject(name: string): string | undefined {
  if (!name) return undefined;
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Science
  if (clean.includes("force") || clean.includes("work") || clean.includes("power") || clean.includes("energy") || clean.includes("machine") || clean.includes("lever") || clean.includes("light") || clean.includes("lens") || clean.includes("refraction") || clean.includes("reflection") || clean.includes("spectrum") || clean.includes("sound") || clean.includes("echo") || clean.includes("vibration") || clean.includes("electricity") || clean.includes("magnet") || clean.includes("ohm") || clean.includes("circuit") || clean.includes("current") || clean.includes("electromagnet") || clean.includes("heat") || clean.includes("calorimetry") || clean.includes("radioactiv") || clean.includes("nuclear") || clean.includes("modernphysics")) {
    return "Physics";
  }
  if (clean.includes("periodic") || clean.includes("chemicalbonding") || clean.includes("bonding") || clean.includes("acid") || clean.includes("base") || clean.includes("salt") || clean.includes("analytical") || clean.includes("moleconcept") || clean.includes("stoichiometry") || clean.includes("empirical") || clean.includes("electrolysis") || clean.includes("metallurgy") || clean.includes("alloy") || clean.includes("hydrogen") || clean.includes("ammonia") || clean.includes("nitric") || clean.includes("sulphuric") || clean.includes("organic") || clean.includes("hydrocarbon") || clean.includes("alcohol") || clean.includes("carboxylic") || clean.includes("practicalchem")) {
    return "Chemistry";
  }
  if (clean.includes("cell") || clean.includes("genetic") || clean.includes("mendel") || clean.includes("inheritance") || clean.includes("evolution") || clean.includes("absorption") || clean.includes("root") || clean.includes("osmosis") || clean.includes("transpiration") || clean.includes("photosynthesis") || clean.includes("plantphys") || clean.includes("endocrine") || clean.includes("hormone") || clean.includes("reproduct") || clean.includes("population") || clean.includes("health") || clean.includes("pollution") || clean.includes("waste")) {
    return "Biology";
  }

  // Social Science
  if (clean.includes("nationalismineurope") || clean.includes("riseofnationalism") || clean.includes("nationalisminindia") || clean.includes("globalworld") || clean.includes("makingofaglobal") || clean.includes("printculture") || clean.includes("history")) {
    return "History";
  }
  if (clean.includes("resourcesanddev") || clean.includes("resourcesdevelopment") || clean.includes("forestandwildlife") || clean.includes("forestwildlife") || clean.includes("waterresource") || clean.includes("agriculture") || (clean.includes("mineral") && clean.includes("energy")) || clean.includes("manufacturingindustr") || clean.includes("lifelines") || clean.includes("geography")) {
    return "Geography";
  }
  if (clean.includes("powersharing") || clean.includes("federalism") || clean.includes("genderreligion") || clean.includes("genderreligioncaste") || clean.includes("politicalpart") || clean.includes("outcomesofdemoc") || clean.includes("polsci") || clean.includes("politicalscience")) {
    return "Political Science";
  }
  if ((clean.includes("development") && !clean.includes("resource")) || clean.includes("sectorsof") || (clean.includes("money") && clean.includes("credit")) || clean.includes("globalisation") || clean.includes("globalization") || clean.includes("consumerrights") || clean.includes("economics")) {
    return "Economics";
  }

  return undefined;
}
