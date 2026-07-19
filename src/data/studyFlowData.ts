/**
 * Study Flow - Data Structure
 *
 * Updated with CBSE Class 10 Syllabus.
 * Content sourced from official study flow PDFs.
 * Science: Physics, Chemistry, Biology separated.
 * Social Science: History, Geography, Civics, Economics separated.
 * Each subject has chapters with 3 steps: Watch → Revise → Practice.
 */

export interface StudyFlowQuestion {
  question: string;
  answer: string;
}

export interface StudyFlowChapter {
  id: string;
  title: string;
  watch: { videoUrl: string; title: string };
  revise: { summary: string; bullets: string[] };
  practice: StudyFlowQuestion[];
}

export interface StudyFlowSubject {
  chapters: StudyFlowChapter[];
}

export type SubjectKey = "physics" | "chemistry" | "biology" | "mathematics" | "history" | "civics" | "geography" | "economics" | "english" | "computer";

export type StudyFlowData = Record<SubjectKey, StudyFlowSubject>;

/** Subject display metadata */
export const SUBJECT_META: Record<SubjectKey, { label: string; icon: string; color: string }> = {
  physics:     { label: "Physics",       icon: "⚡",  color: "#60A5FA" },
  chemistry:   { label: "Chemistry",     icon: "🧪",  color: "#3ECF8E" },
  biology:     { label: "Biology",       icon: "🧬",  color: "#FB923C" },
  mathematics: { label: "Mathematics",   icon: "📐",  color: "#A78BFA" },
  history:     { label: "History",       icon: "📜",  color: "#F87171" },
  civics:      { label: "Civics",        icon: "🏛️", color: "#F59E0B" },
  geography:   { label: "Geography",     icon: "🌍",  color: "#10B981" },
  economics:   { label: "Economics",     icon: "📈",  color: "#8B5CF6" },
  english:     { label: "English",       icon: "📝",  color: "#94A3B8" },
  computer:    { label: "Computer / IT", icon: "💻",  color: "#38BDF8" }
};

/** All valid subject keys */
export const SUBJECT_KEYS: SubjectKey[] = ["physics", "chemistry", "biology", "mathematics", "history", "civics", "geography", "economics", "english", "computer"];

/** Subjects that are coming soon */
export const COMING_SOON_SUBJECTS = [] as const;

export const STUDY_FLOW_DATA: StudyFlowData = {
  physics: {
    chapters: [
      {
        id: "physics-ch1",
        title: "Light – Reflection And Refraction",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Light – Reflection And Refraction - Revision Lecture" },
        revise: {
          summary: "LIGHT – REFLECTION AND REFRACTION Light: A form of energy that causes the sensation of vision.",
          bullets: [
            "Travels in a straight line.",
            "Speed in vacuum: 3 × 10⁸ m/s.",
            "Virtual and erect.",
            "Same size as object.",
            "Laterally inverted.",
            "Distance of image = Distance of object.",
          ]
        },
        practice: [
          {
            question: "State the laws of reflection.",
            answer: "LIGHT – REFLECTION AND REFRACTION"
          },
          {
            question: "What is the relationship between radius of curvature and focal length of a spherical mirror?",
            answer: "- Centre of Curvature (C): Centre of the sphere."
          },
          {
            question: "Define refractive index.",
            answer: "2. Snell's Law: sin i / sin r = constant (refractive index, μ)."
          },
          {
            question: "Describe the image formation by a concave mirror for different object positions.",
            answer: "Image Formation by Plane Mirror:"
          },
          {
            question: "What is the lens formula? Derive it.",
            answer: "Refer to the revision notes above. Key focus: What is the lens formula? Derive it.. Study the definitions, processes, and examples given in this chapter."
          },
        ]
      },
      {
        id: "physics-ch2",
        title: "The Human Eye And The Colourful World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Human Eye And The Colourful World - Revision Lecture" },
        revise: {
          summary: "THE HUMAN EYE AND THE COLOURFUL WORLD Parts of the Eye and Their Functions:",
          bullets: [
            "Transparent front part; allows light to enter; major refractive surface.",
            "Coloured part; controls the amount of light entering.",
            "Black circular opening; regulates the amount of light.",
            "Biconvex, transparent; focuses light on the retina; changes shape for accommodation.",
            "Attached to the lens; change the shape of the lens.",
            "Inner lining; contains light-sensitive cells (rods and cones).",
          ]
        },
        practice: [
          {
            question: "What is the power of accommodation?",
            answer: "- Biconvex, transparent; focuses light on the retina; changes shape for accommodation."
          },
          {
            question: "Define myopia. How is it corrected?",
            answer: "Refer to the revision notes above. Key focus: Define myopia. How is it corrected?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is dispersion of light?",
            answer: "- Transparent front part; allows light to enter; major refractive surface."
          },
          {
            question: "Describe the human eye and its function with a labelled diagram.",
            answer: "THE HUMAN EYE AND THE COLOURFUL WORLD"
          },
          {
            question: "Explain the phenomenon of dispersion of white light.",
            answer: "Dispersion: Splitting of white light into its constituent colours."
          },
        ]
      },
      {
        id: "physics-ch3",
        title: "Electricity",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Electricity - Revision Lecture" },
        revise: {
          summary: "Electric Current: The flow of electric charge. - Conventional Current: Positive to negative.",
          bullets: [
            "Symbol: I",
            "Unit: Ampere (A)",
            "Formula: I = Q/t",
            "Conventional Current: Positive to negative.",
            "Electron Flow: Negative to positive.",
            "Formula: V = W/Q",
          ]
        },
        practice: [
          {
            question: "Define electric current.",
            answer: "Electric Current: The flow of electric charge."
          },
          {
            question: "State Ohm's law.",
            answer: "Refer to the revision notes above. Key focus: State Ohm's law.. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is resistivity?",
            answer: "3. Material: Different resistivity."
          },
          {
            question: "Explain Ohm's law. Describe an experiment to verify it.",
            answer: "Refer to the revision notes above. Key focus: Explain Ohm's law. Describe an experiment to verify it.. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is the heating effect of current? Give its applications.",
            answer: "Electric Current: The flow of electric charge."
          },
        ]
      },
      {
        id: "physics-ch4",
        title: "Magnetic Effects Of Electric Current",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Magnetic Effects Of Electric Current - Revision Lecture" },
        revise: {
          summary: "MAGNETIC EFFECTS OF ELECTRIC CURRENT - The region around a magnet where its influence is felt.",
          bullets: [
            "The region around a magnet where its influence is felt.",
            "Rule: Right-Hand Thumb Rule.",
            "Thumb: Direction of current.",
            "Fingers: Direction of magnetic field.",
            "Rule: Right-Hand Rule for Loop.",
            "Fingers curl in the direction of current.",
          ]
        },
        practice: [
          {
            question: "What is a magnetic field?",
            answer: "MAGNETIC EFFECTS OF ELECTRIC CURRENT"
          },
          {
            question: "State Fleming's left-hand rule.",
            answer: "Refer to the revision notes above. Key focus: State Fleming's left-hand rule.. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is electromagnetic induction?",
            answer: "Electromagnetic Induction: The process of generating induced current by changing magnetic"
          },
          {
            question: "Describe the magnetic field of a current-carrying straight conductor, circular loop, and",
            answer: "MAGNETIC EFFECTS OF ELECTRIC CURRENT"
          },
          {
            question: "Explain the construction and working of an electric motor.",
            answer: "MAGNETIC EFFECTS OF ELECTRIC CURRENT"
          },
        ]
      },
      {
        id: "physics-ch5",
        title: "Our Environment",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Our Environment - Revision Lecture" },
        revise: {
          summary: "Ecosystem: A self-contained unit consisting of living organisms and their non-living Components of an Ecosystem:",
          bullets: [
            "Primary Consumers (Herbivores): Feed on plants.",
            "Secondary Consumers (Carnivores): Feed on herbivores.",
            "Tertiary Consumers: Feed on secondary consumers.",
            "Omnivores: Feed on both plants and animals.",
            "Air, water, soil, sunlight, temperature, minerals.",
            "A sequence of organisms in which each organism feeds on the previous one.",
          ]
        },
        practice: [
          {
            question: "Define an ecosystem.",
            answer: "Ecosystem: A self-contained unit consisting of living organisms and their non-living"
          },
          {
            question: "What is a food chain? Give an example.",
            answer: "- Example: Grass → Grasshopper → Frog → Snake → Eagle"
          },
          {
            question: "What is the 10% law?",
            answer: "Refer to the revision notes above. Key focus: What is the 10% law?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Describe the structure and function of an ecosystem.",
            answer: "Ecosystem: A self-contained unit consisting of living organisms and their non-living"
          },
          {
            question: "Explain energy flow in an ecosystem with a food chain.",
            answer: "Ecosystem: A self-contained unit consisting of living organisms and their non-living"
          },
        ]
      },
    ]
  },
  chemistry: {
    chapters: [
      {
        id: "chemistry-ch1",
        title: "Chemical Reactions And Equations",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Chemical Reactions And Equations - Revision Lecture" },
        revise: {
          summary: "CHEMICAL REACTIONS AND EQUATIONS A chemical reaction is a process in which one or more substances (reactants) are transformed",
          bullets: [
            "Change in state.",
            "Change in colour.",
            "Evolution of gas.",
            "Change in temperature.",
            "Formation of precipitate.",
            "3Fe + 4H₂O → Fe₃O₄ + 4H₂",
          ]
        },
        practice: [
          {
            question: "Define a balanced chemical equation.",
            answer: "CHEMICAL REACTIONS AND EQUATIONS"
          },
          {
            question: "Identify the type of reaction: 2H₂ + O₂ → 2H₂O",
            answer: "CHEMICAL REACTIONS AND EQUATIONS"
          },
          {
            question: "What is the colour of ferrous sulphate crystals? What happens when they are heated?",
            answer: "Refer to the revision notes above. Key focus: What is the colour of ferrous sulphate crystals? What happens when they are heat. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Describe with chemical equations all five types of chemical reactions. Give one example of",
            answer: "CHEMICAL REACTIONS AND EQUATIONS"
          },
          {
            question: "What is a redox reaction? Explain with the example of zinc oxide reacting with carbon.",
            answer: "CHEMICAL REACTIONS AND EQUATIONS"
          },
        ]
      },
      {
        id: "chemistry-ch2",
        title: "Acids, Bases And Salts",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Acids, Bases And Salts - Revision Lecture" },
        revise: {
          summary: "- Substances that furnish H⁺ ions in aqueous solution. - Sour taste, turn blue litmus red.",
          bullets: [
            "Substances that furnish H⁺ ions in aqueous solution.",
            "Sour taste, turn blue litmus red.",
            "Examples: HCl, H₂SO₄, HNO₃, CH₃COOH.",
            "Substances that furnish OH⁻ ions in aqueous solution.",
            "Bitter taste, soapy touch, turn red litmus blue.",
            "Examples: NaOH, KOH, Ca(OH)₂, NH₄OH.",
          ]
        },
        practice: [
          {
            question: "Define an acid and a base according to Arrhenius theory.",
            answer: "Refer to the revision notes above. Key focus: Define an acid and a base according to Arrhenius theory.. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is the pH of pure water?",
            answer: "Alkalis: Water-soluble bases (e.g., NaOH, KOH)."
          },
          {
            question: "What is the chemical name of baking soda? Write its formula.",
            answer: "- Uses: Food; raw material for many chemicals."
          },
          {
            question: "Describe the preparation, properties, and uses of:",
            answer: "- Preparation: Evaporation of sea water."
          },
          {
            question: "Explain the reaction of acids with metals, metal carbonates, metal oxides, and bases.",
            answer: "B. Reaction with Metal Carbonates/Hydrogen Carbonates:"
          },
        ]
      },
      {
        id: "chemistry-ch3",
        title: "Metals And Non-Metals",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Metals And Non-Metals - Revision Lecture" },
        revise: {
          summary: "- State: Solid (except Hg-liquid). - Malleability: Can be beaten into sheets.",
          bullets: [
            "State: Solid (except Hg-liquid).",
            "Lustre: Shiny.",
            "Malleability: Can be beaten into sheets.",
            "Ductility: Can be drawn into wires.",
            "Conductivity: Good conductors of heat and electricity.",
            "Density: Generally high.",
          ]
        },
        practice: [
          {
            question: "Why is sodium stored in kerosene oil?",
            answer: "Refer to the revision notes above. Key focus: Why is sodium stored in kerosene oil?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is an alloy? Give two examples.",
            answer: "- Prevention: Painting, galvanisation, electroplating, alloying."
          },
          {
            question: "Why do metals have high melting points?",
            answer: "- Melting/Boiling Point: Usually high."
          },
          {
            question: "Describe the steps involved in the extraction of a metal from its ore.",
            answer: "Extraction of Highly Reactive Metals:"
          },
          {
            question: "What is the reactivity series? How does it help in the extraction of metals?",
            answer: "The arrangement of metals in decreasing order of reactivity."
          },
        ]
      },
      {
        id: "chemistry-ch4",
        title: "Carbon And Its Compounds",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Carbon And Its Compounds - Revision Lecture" },
        revise: {
          summary: "Covalent Bond: A bond formed by sharing of electrons between atoms. Why Carbon Forms Covalent Bonds:",
          bullets: [
            "Carbon has 4 valence electrons (electronic configuration: 2,4).",
            "It shares electrons with other atoms to form covalent bonds.",
            "Single Bond: Sharing of one pair of electrons.",
            "Double Bond: Sharing of two pairs of electrons.",
            "Triple Bond: Sharing of three pairs of electrons.",
            "Low melting and boiling points.",
          ]
        },
        practice: [
          {
            question: "What is catenation?",
            answer: "Refer to the revision notes above. Key focus: What is catenation?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Why does carbon form covalent bonds?",
            answer: "Covalent Bond: A bond formed by sharing of electrons between atoms."
          },
          {
            question: "What is a homologous series?",
            answer: "A series of organic compounds with the same functional group and similar chemical properties,"
          },
          {
            question: "Describe the IUPAC nomenclature of hydrocarbons and functional groups.",
            answer: "A. Saturated Hydrocarbons (Alkanes):"
          },
          {
            question: "Explain the chemical properties of carbon compounds with examples.",
            answer: "Why Carbon Forms Covalent Bonds:"
          },
        ]
      },
    ]
  },
  biology: {
    chapters: [
      {
        id: "biology-ch1",
        title: "Life Processes",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Life Processes - Revision Lecture" },
        revise: {
          summary: "The basic functions performed by living organisms to maintain life are called life processes. - Nutrition: Obtaining and utilising food.",
          bullets: [
            "Nutrition: Obtaining and utilising food.",
            "Respiration: Releasing energy from food.",
            "Transport: Movement of substances.",
            "Excretion: Removing waste products.",
            "Reproduction: Producing offspring.",
            "Organisms synthesise their own food from inorganic sources.",
          ]
        },
        practice: [
          {
            question: "What is the role of saliva in the digestion of food?",
            answer: "2. Digestion: Food vacuole forms; digestive enzymes break down food."
          },
          {
            question: "Name the enzyme that converts starch into maltose.",
            answer: "2. Digestion: Food vacuole forms; digestive enzymes break down food."
          },
          {
            question: "What is the function of villi in the small intestine?",
            answer: "The basic functions performed by living organisms to maintain life are called life processes."
          },
          {
            question: "Describe the human digestive system with a labelled diagram.",
            answer: "- Holozoic: Ingestion of solid food. Examples: Humans, amoeba, animals."
          },
          {
            question: "Explain the process of photosynthesis with the equation. What is the significance of",
            answer: "The basic functions performed by living organisms to maintain life are called life processes."
          },
        ]
      },
      {
        id: "biology-ch2",
        title: "Control And Coordination",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Control And Coordination - Revision Lecture" },
        revise: {
          summary: "- Neuron: Structural and functional unit. - Dendrites: Receive impulses.",
          bullets: [
            "Neuron: Structural and functional unit.",
            "Structure:",
            "Dendrites: Receive impulses.",
            "Cell Body (Cyton): Contains nucleus; integrates impulses.",
            "Axon: Long fibre; conducts impulses away from cell body.",
            "Myelin Sheath: Insulating layer; speeds up impulse conduction.",
          ]
        },
        practice: [
          {
            question: "Define reflex action. Give an example.",
            answer: "- Functions: Thinking, memory, intelligence, reasoning, voluntary actions, sensory"
          },
          {
            question: "What is the role of auxin in phototropism?",
            answer: "- Functions: Cell elongation; apical dominance; root initiation; promotes phototropism and"
          },
          {
            question: "Name the hormone that regulates blood sugar level.",
            answer: "- Medulla Oblongata: Involuntary actions (breathing, heartbeat, digestion, blood pressure)."
          },
          {
            question: "Compare and contrast nervous coordination and chemical coordination in animals.",
            answer: "1. Central Nervous System (CNS): Brain + Spinal cord."
          },
          {
            question: "Describe the major endocrine glands, their hormones, and functions.",
            answer: "F. Nervous vs Endocrine System:"
          },
        ]
      },
      {
        id: "biology-ch3",
        title: "Reproduction",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Reproduction - Revision Lecture" },
        revise: {
          summary: "- Reproduction: The biological process by which organisms produce new individuals of the - Asexual Reproduction: Single parent; no gametes; offspring identical to parent.",
          bullets: [
            "Reproduction: The biological process by which organisms produce new individuals of the",
            "Asexual Reproduction: Single parent; no gametes; offspring identical to parent.",
            "Sexual Reproduction: Two parents; gametes fuse; offspring show variation.",
            "Ensures continuity of species.",
            "Maintains population.",
            "Variations allow evolution and adaptation.",
          ]
        },
        practice: [
          {
            question: "Define reproduction. What are its types?",
            answer: "- Reproduction: The biological process by which organisms produce new individuals of the"
          },
          {
            question: "What is vegetative propagation? Give two examples.",
            answer: "- Definition: Asexual reproduction in plants using vegetative parts."
          },
          {
            question: "Name the male and female gametes in humans.",
            answer: "- Asexual Reproduction: Single parent; no gametes; offspring identical to parent."
          },
          {
            question: "Describe the process of sexual reproduction in humans.",
            answer: "- Reproduction: The biological process by which organisms produce new individuals of the"
          },
          {
            question: "Explain the menstrual cycle in detail.",
            answer: "1. Menstrual Phase (Days 1-5): Endometrium sheds; bleeding occurs."
          },
        ]
      },
      {
        id: "biology-ch4",
        title: "Heredity And Evolution",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Heredity And Evolution - Revision Lecture" },
        revise: {
          summary: "Heredity: The transmission of traits from parents to offspring. Genes: Basic units of heredity; segments of DNA that code for specific traits.",
          bullets: [
            "Allows organisms to adapt to changing environments.",
            "Provides raw material for evolution.",
            "Short generation time.",
            "Large number of offspring.",
            "Easy to cross-breed.",
            "Visible contrasting traits (7 pairs).",
          ]
        },
        practice: [
          {
            question: "Define heredity and variation.",
            answer: "Heredity: The transmission of traits from parents to offspring."
          },
          {
            question: "What is a gene?",
            answer: "Refer to the revision notes above. Key focus: What is a gene?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "State Mendel's Law of Dominance.",
            answer: "Gregor Mendel conducted experiments on garden pea plants."
          },
          {
            question: "Describe Mendel's laws of inheritance with examples.",
            answer: "Gregor Mendel conducted experiments on garden pea plants."
          },
          {
            question: "Explain the dihybrid cross with a Punnett square.",
            answer: "A. Monohybrid Cross (One Trait):"
          },
        ]
      },
    ]
  },
  mathematics: {
    chapters: [

      {
        id: "mathematics-ch1",
        title: "Real Numbers",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Real Numbers - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Real Numbers. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Real Numbers",
            "Key concept 2 related to Real Numbers",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Real Numbers.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch2",
        title: "Polynomials",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Polynomials - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Polynomials. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Polynomials",
            "Key concept 2 related to Polynomials",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Polynomials.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch3",
        title: "Pair of Linear Equations in Two Variables",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Pair of Linear Equations in Two Variables - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Pair of Linear Equations in Two Variables. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Pair of Linear Equations in Two Variables",
            "Key concept 2 related to Pair of Linear Equations in Two Variables",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Pair of Linear Equations in Two Variables.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch4",
        title: "Quadratic Equations",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Quadratic Equations - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Quadratic Equations. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Quadratic Equations",
            "Key concept 2 related to Quadratic Equations",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Quadratic Equations.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch5",
        title: "Arithmetic Progressions",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Arithmetic Progressions - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Arithmetic Progressions. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Arithmetic Progressions",
            "Key concept 2 related to Arithmetic Progressions",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Arithmetic Progressions.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch6",
        title: "Triangles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Triangles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Triangles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Triangles",
            "Key concept 2 related to Triangles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Triangles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch7",
        title: "Coordinate Geometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Coordinate Geometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Coordinate Geometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Coordinate Geometry",
            "Key concept 2 related to Coordinate Geometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Coordinate Geometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch8",
        title: "Introduction to Trigonometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Introduction to Trigonometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Introduction to Trigonometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Introduction to Trigonometry",
            "Key concept 2 related to Introduction to Trigonometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Introduction to Trigonometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch9",
        title: "Some Applications of Trigonometry",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Some Applications of Trigonometry - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Some Applications of Trigonometry. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Some Applications of Trigonometry",
            "Key concept 2 related to Some Applications of Trigonometry",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Some Applications of Trigonometry.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch10",
        title: "Circles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Circles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Circles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Circles",
            "Key concept 2 related to Circles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Circles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch11",
        title: "Areas Related to Circles",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Areas Related to Circles - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Areas Related to Circles. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Areas Related to Circles",
            "Key concept 2 related to Areas Related to Circles",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Areas Related to Circles.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch12",
        title: "Surface Areas and Volumes",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Surface Areas and Volumes - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Surface Areas and Volumes. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Surface Areas and Volumes",
            "Key concept 2 related to Surface Areas and Volumes",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Surface Areas and Volumes.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch13",
        title: "Statistics",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Statistics - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Statistics. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Statistics",
            "Key concept 2 related to Statistics",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Statistics.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "mathematics-ch14",
        title: "Probability",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Probability - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Probability. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Probability",
            "Key concept 2 related to Probability",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Probability.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  history: {
    chapters: [
      {
        id: "history-ch1",
        title: "The Rise Of Nationalism In Europe",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Rise Of Nationalism In Europe - Revision Lecture" },
        revise: {
          summary: "THE RISE OF NATIONALISM IN EUROPE - The French Revolution (1789) was the first expression of nationalism.",
          bullets: [
            "The French Revolution (1789) was the first expression of nationalism.",
            "It introduced the idea of \"La Patrie\" (the fatherland) and \"Le Citoyen\" (the citizen).",
            "A new French flag (tricolour) replaced the royal standard.",
            "The Estates General was renamed the National Assembly.",
            "A centralised administrative system was established.",
            "Uniform laws and standardised weights and measures were introduced.",
          ]
        },
        practice: [
          {
            question: "What is meant by the term \"nation state\"?",
            answer: "THE RISE OF NATIONALISM IN EUROPE"
          },
          {
            question: "Who was Giuseppe Mazzini?",
            answer: "- Giuseppe Mazzini: Founded \"Young Italy\" and \"Young Europe\"; believed in the unification"
          },
          {
            question: "What was the Napoleonic Code?",
            answer: "- He introduced the Civil Code (Napoleonic Code) in 1804."
          },
          {
            question: "Describe the process of the unification of Germany.",
            answer: "- Giuseppe Mazzini: Founded \"Young Italy\" and \"Young Europe\"; believed in the unification"
          },
          {
            question: "What were the causes and effects of the rise of nationalism in Europe?",
            answer: "THE RISE OF NATIONALISM IN EUROPE"
          },
        ]
      },
      {
        id: "history-ch2",
        title: "Nationalism In India",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Nationalism In India - Revision Lecture" },
        revise: {
          summary: "Economic and Political Impact: - Increased defence expenditure led to a rise in taxes.",
          bullets: [
            "Increased defence expenditure led to a rise in taxes.",
            "Prices of goods increased (inflation).",
            "Forced recruitment of soldiers from villages.",
            "Agricultural production declined.",
            "Shortage of food led to famines.",
            "The British government introduced repressive laws.",
          ]
        },
        practice: [
          {
            question: "What was the Rowlatt Act?",
            answer: "1. Rowlatt Act and Jallianwala Bagh massacre."
          },
          {
            question: "What was the Khilafat Movement?",
            answer: "2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the"
          },
          {
            question: "What was the Dandi March?",
            answer: "4. Salt March (Dandi March): Gandhi marched to Dandi to break the salt law."
          },
          {
            question: "Trace the course of the Non-Cooperation Movement. Why was it called off?",
            answer: "2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the"
          },
          {
            question: "Describe the Civil Disobedience Movement. What were its causes and effects?",
            answer: "- Restrictions on civil liberties."
          },
        ]
      },
      {
        id: "history-ch3",
        title: "The Making Of A Global World (Subtopics 1 To 1.3 Only)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Making Of A Global World (Subtopics 1 To 1.3 Only) - Revision Lecture" },
        revise: {
          summary: "THE MAKING OF A GLOBAL WORLD (Subtopics 1 to 1.3 only) - Connected Asia, Europe, and Africa.",
          bullets: [
            "Connected Asia, Europe, and Africa.",
            "Used for trade of silk, spices, textiles, and other goods.",
            "Also facilitated the spread of ideas, cultures, and technologies.",
            "Key Items: Chinese silk, Indian spices, Roman glass, Arabian horses.",
            "Buddhism: Spread from India to China via the Silk Routes.",
            "Islam: Spread through trade routes.",
          ]
        },
        practice: [
          {
            question: "What were the Silk Routes?",
            answer: "- Buddhism: Spread from India to China via the Silk Routes."
          },
          {
            question: "What was the Columbian Exchange?",
            answer: "world (known as the Columbian Exchange)."
          },
          {
            question: "What was the significance of the Suez Canal?",
            answer: "- The Suez Canal (1869): Shortened the route from Europe to Asia; increased trade."
          },
          {
            question: "Describe the economic and social changes brought about by colonialism in the 19th century.",
            answer: "Refer to the revision notes above. Key focus: Describe the economic and social changes brought about by colonialism in the 19t. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Explain the role of trade in the making of a global world before the 19th century.",
            answer: "THE MAKING OF A GLOBAL WORLD (Subtopics 1 to 1.3 only)"
          },
        ]
      },
      {
        id: "history-ch4",
        title: "Print Culture And The Modern World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Print Culture And The Modern World - Revision Lecture" },
        revise: {
          summary: "PRINT CULTURE AND THE MODERN WORLD A. The Beginning of Print in China:",
          bullets: [
            "Woodblock Printing: Invented in China around the 6th century.",
            "Buddhist Texts: Printed in large numbers.",
            "The first printed book: \"The Diamond Sutra\" (868 AD).",
            "China: Also developed movable type printing but did not adopt it widely.",
            "Johannes Gutenberg: Invented the printing press in the 1430s.",
            "Gutenberg Bible: The first printed book in Europe (1455).",
          ]
        },
        practice: [
          {
            question: "Who invented the printing press?",
            answer: "- Woodblock Printing: Invented in China around the 6th century."
          },
          {
            question: "What was the Gutenberg Bible?",
            answer: "- Johannes Gutenberg: Invented the printing press in the 1430s."
          },
          {
            question: "What was the \"Index of Prohibited Books\"?",
            answer: "- Made books cheaper and more accessible."
          },
          {
            question: "Describe the development of print culture in India.",
            answer: "PRINT CULTURE AND THE MODERN WORLD"
          },
          {
            question: "Explain the impact of the printing press on religious and social reforms.",
            answer: "- Woodblock Printing: Invented in China around the 6th century."
          },
        ]
      },
    ]
  },
  civics: {
    chapters: [
      {
        id: "civics-ch1",
        title: "Power-Sharing",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Power-Sharing - Revision Lecture" },
        revise: {
          summary: "- Reduces the possibility of conflict between social groups. - Ensures political stability.",
          bullets: [
            "Reduces the possibility of conflict between social groups.",
            "Ensures political stability.",
            "Is a key feature of democracy.",
            "Recognises the right of every community to participate in governance.",
            "Is the essence of democracy.",
            "Power is shared among different organs of government (legislature, executive, judiciary).",
          ]
        },
        practice: [
          {
            question: "What is power-sharing?",
            answer: "- Power is shared among different organs of government (legislature, executive, judiciary)."
          },
          {
            question: "What is horizontal distribution of power?",
            answer: "- Power is shared among different organs of government (legislature, executive, judiciary)."
          },
          {
            question: "What is vertical distribution of power?",
            answer: "- Power is shared among different organs of government (legislature, executive, judiciary)."
          },
          {
            question: "What are the forms of power-sharing? Explain with examples.",
            answer: "- Power is shared among different organs of government (legislature, executive, judiciary)."
          },
          {
            question: "Explain the power-sharing arrangement in Belgium and its significance.",
            answer: "- Power is shared among different organs of government (legislature, executive, judiciary)."
          },
        ]
      },
      {
        id: "civics-ch2",
        title: "Federalism",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Federalism - Revision Lecture" },
        revise: {
          summary: "Definition: A system of government where power is divided between a central authority and various constituent units.",
          bullets: [
            "Independent states come together to form a larger unit.",
            "Examples: USA, Australia, Switzerland.",
            "Features: All states have equal power.",
            "A large country decides to divide power between the centre and states.",
            "Examples: India, Spain, Belgium.",
            "Features: Central government is usually more powerful.",
          ]
        },
        practice: [
          {
            question: "What is federalism?",
            answer: "A. Features of Indian Federalism:"
          },
          {
            question: "What are the three lists under the Indian Constitution?",
            answer: "A. Features of Indian Federalism:"
          },
          {
            question: "What is the Union List?",
            answer: "- Union List: Subjects of national importance (defence, foreign affairs, railways)."
          },
          {
            question: "Compare the \"coming together\" and \"holding together\" federations.",
            answer: "- Independent states come together to form a larger unit."
          },
          {
            question: "Explain the federal structure of India.",
            answer: "- Examples: India, Spain, Belgium."
          },
        ]
      },
      {
        id: "civics-ch3",
        title: "Gender, Religion And Caste",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Gender, Religion And Caste - Revision Lecture" },
        revise: {
          summary: "GENDER, RELIGION AND CASTE - The division of roles and responsibilities between men and women.",
          bullets: [
            "The division of roles and responsibilities between men and women.",
            "Patriarchy: Male dominance in society.",
            "Literacy: Lower literacy rates for women.",
            "Workforce Participation: Lower participation of women in the workforce.",
            "Unpaid Work: Women do most of the unpaid domestic work.",
            "Sex Ratio: Lower sex ratio in some states.",
          ]
        },
        practice: [
          {
            question: "What is patriarchy?",
            answer: "- Patriarchy: Male dominance in society."
          },
          {
            question: "What is communalism?",
            answer: "- Negative: Can lead to communalism and conflict."
          },
          {
            question: "What is secularism?",
            answer: "Refer to the revision notes above. Key focus: What is secularism?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Discuss the role of gender in politics.",
            answer: "C. The Role of Religion in Politics:"
          },
          {
            question: "Explain the concept of communalism and how it affects Indian society.",
            answer: "- Negative: Can lead to communalism and conflict."
          },
        ]
      },
      {
        id: "civics-ch4",
        title: "Political Parties",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Political Parties - Revision Lecture" },
        revise: {
          summary: "Definition: A group of people who come together to contest elections and hold power in the 1. Contest Elections: Present candidates for elections.",
          bullets: [
            "Only one party is allowed to exist.",
            "Example: China (Communist Party).",
            "Two major parties dominate.",
            "Example: USA (Democrats and Republicans), UK (Labour and Conservatives).",
            "Several parties compete for power.",
            "Example: India (BJP, INC, AAP, etc.).",
          ]
        },
        practice: [
          {
            question: "What is a political party?",
            answer: "- Only one party is allowed to exist."
          },
          {
            question: "What are the functions of a political party?",
            answer: "- Only one party is allowed to exist."
          },
          {
            question: "What is a national party?",
            answer: "- Only one party is allowed to exist."
          },
          {
            question: "Explain the role of political parties in a democracy.",
            answer: "- Several parties compete for power."
          },
          {
            question: "Describe the national and regional parties in India.",
            answer: "- Several parties compete for power."
          },
        ]
      },
      {
        id: "civics-ch5",
        title: "Outcomes Of Democracy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Outcomes Of Democracy - Revision Lecture" },
        revise: {
          summary: "- Accountability: The government is accountable to the people. - Responsiveness: The government responds to the needs of the people.",
          bullets: [
            "Accountability: The government is accountable to the people.",
            "Responsiveness: The government responds to the needs of the people.",
            "Legitimacy: The government is legitimate because it is elected by the people.",
            "Legitimacy: Democracy gives legitimacy to the government.",
            "Accountability: Governments are accountable to the people.",
            "Transparency: Decisions are made in a transparent manner.",
          ]
        },
        practice: [
          {
            question: "What is democracy?",
            answer: "- Legitimacy: Democracy gives legitimacy to the government."
          },
          {
            question: "What is accountability?",
            answer: "- Accountability: The government is accountable to the people."
          },
          {
            question: "What is transparency?",
            answer: "- Transparency: Decisions are made in a transparent manner."
          },
          {
            question: "Evaluate the outcomes of democracy.",
            answer: "- Legitimacy: Democracy gives legitimacy to the government."
          },
          {
            question: "How does democracy accommodate social diversity?",
            answer: "- Legitimacy: Democracy gives legitimacy to the government."
          },
        ]
      },
    ]
  },
  geography: {
    chapters: [
      {
        id: "geography-ch1",
        title: "Resources And Development",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Resources And Development - Revision Lecture" },
        revise: {
          summary: "Definition: Everything available in our environment that can be used to satisfy our needs, provided it is technologically accessible, economically feasible, and culturally acceptable.",
          bullets: [
            "Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock).",
            "Abiotic Resources: Non-living (e.g., minerals, rocks, water, air).",
            "Renewable Resources: Can be replenished (e.g., solar energy, wind, water, forests).",
            "Non-Renewable Resources: Cannot be replenished (e.g., fossil fuels, minerals).",
            "Individual Resources: Owned by individuals (e.g., land, house).",
            "Community Resources: Owned by the community (e.g., village ponds, public parks).",
          ]
        },
        practice: [
          {
            question: "Define resources.",
            answer: "- Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock)."
          },
          {
            question: "What is sustainable development?",
            answer: "D. On the Basis of Status of Development:"
          },
          {
            question: "What is Agenda 21?",
            answer: "Agenda 21: A global plan of action for sustainable development adopted at the Earth"
          },
          {
            question: "Explain the classification of resources with examples.",
            answer: "- Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock)."
          },
          {
            question: "Describe the different types of soils found in India and their distribution.",
            answer: "Refer to the revision notes above. Key focus: Describe the different types of soils found in India and their distribution.. Study the definitions, processes, and examples given in this chapter."
          },
        ]
      },
      {
        id: "geography-ch2",
        title: "Forest And Wildlife Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Forest And Wildlife Resources - Revision Lecture" },
        revise: {
          summary: "FOREST AND WILDLIFE RESOURCES Biodiversity: The variety of plants, animals, and microorganisms living in a particular area.",
          bullets: [
            "Maintains ecological balance.",
            "Provides food, medicine, and raw materials.",
            "Supports livelihoods.",
            "Cultural and aesthetic value.",
            "One of the 17 mega-diverse countries.",
            "Has about 8% of the world's species.",
          ]
        },
        practice: [
          {
            question: "What is biodiversity?",
            answer: "Biodiversity: The variety of plants, animals, and microorganisms living in a particular area."
          },
          {
            question: "What is Project Tiger?",
            answer: "- Endangered: Tiger, lion, elephant, rhino, crocodile, leopard."
          },
          {
            question: "Name the different types of forests in India.",
            answer: "A. Tropical Rainforests (Evergreen Forests):"
          },
          {
            question: "Describe the various types of forests found in India with examples.",
            answer: "A. Tropical Rainforests (Evergreen Forests):"
          },
          {
            question: "Explain the conservation measures taken by the Indian government to protect wildlife.",
            answer: "Refer to the revision notes above. Key focus: Explain the conservation measures taken by the Indian government to protect wild. Study the definitions, processes, and examples given in this chapter."
          },
        ]
      },
      {
        id: "geography-ch3",
        title: "Water Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Water Resources - Revision Lecture" },
        revise: {
          summary: "Definition: Lack of sufficient water to meet the needs of a region. 1. Overpopulation: Increased demand for water.",
          bullets: [
            "Irrigation for agriculture.",
            "Hydroelectric power generation.",
            "Fisheries development.",
            "Displacement of people.",
            "Loss of biodiversity.",
            "Environmental degradation.",
          ]
        },
        practice: [
          {
            question: "What is water scarcity?",
            answer: "Definition: Lack of sufficient water to meet the needs of a region."
          },
          {
            question: "What are multipurpose river projects?",
            answer: "Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood"
          },
          {
            question: "Name any two multipurpose river projects in India.",
            answer: "Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood"
          },
          {
            question: "Describe the various multipurpose river projects in India and their significance.",
            answer: "- One of the largest multipurpose projects in India."
          },
          {
            question: "What is water scarcity? Explain its causes and suggest measures to conserve water.",
            answer: "Definition: Lack of sufficient water to meet the needs of a region."
          },
        ]
      },
      {
        id: "geography-ch4",
        title: "Agriculture",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Agriculture - Revision Lecture" },
        revise: {
          summary: "- Largest sector in India: Provides livelihood to more than 50% of the population. - Contribution to GDP: About 14-15%.",
          bullets: [
            "Largest sector in India: Provides livelihood to more than 50% of the population.",
            "Contribution to GDP: About 14-15%.",
            "Provider of Food: Ensures food security.",
            "Supplies Raw Material: For various industries (textiles, sugar, etc.).",
            "Exports: Agricultural products are a major source of foreign exchange.",
            "Characteristics: Simple tools, dependence on natural factors, low productivity.",
          ]
        },
        practice: [
          {
            question: "What is the importance of agriculture in India?",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population."
          },
          {
            question: "Name the cropping seasons in India.",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population."
          },
          {
            question: "What are the Kharif crops?",
            answer: "- Characteristics: Labour-intensive, large estates, commercial crops."
          },
          {
            question: "Describe the major crops of India and the regions where they are grown.",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population."
          },
          {
            question: "What are the challenges faced by Indian agriculture? How can they be overcome?",
            answer: "- Examples: Plantation agriculture (tea, coffee, rubber)."
          },
        ]
      },
      {
        id: "geography-ch5",
        title: "Minerals And Energy Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Minerals And Energy Resources - Revision Lecture" },
        revise: {
          summary: "MINERALS AND ENERGY RESOURCES Mineral: A homogeneous, naturally occurring substance with a definable internal structure.",
          bullets: [
            "Ferrous Minerals: Contain iron (e.g., iron ore, manganese).",
            "Non-Ferrous Minerals: Do not contain iron (e.g., copper, bauxite, lead, zinc).",
            "Precious Metals: Gold, silver, platinum.",
            "Examples: Limestone, mica, salt, coal, petroleum.",
            "Examples: Coal, petroleum, natural gas.",
            "Haematite: Best quality; 60-70% iron.",
          ]
        },
        practice: [
          {
            question: "What are metallic minerals? Give examples.",
            answer: "- Ferrous Minerals: Contain iron (e.g., iron ore, manganese)."
          },
          {
            question: "Name the two types of iron ore.",
            answer: "Refer to the revision notes above. Key focus: Name the two types of iron ore.. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What are non-metallic minerals? Give examples.",
            answer: "- Ferrous Minerals: Contain iron (e.g., iron ore, manganese)."
          },
          {
            question: "Describe the major minerals found in India and their distribution.",
            answer: "- Ferrous Minerals: Contain iron (e.g., iron ore, manganese)."
          },
          {
            question: "Explain the different types of energy resources in India.",
            answer: "A. Conventional Sources of Energy:"
          },
        ]
      },
      {
        id: "geography-ch6",
        title: "Manufacturing Industries",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Manufacturing Industries - Revision Lecture" },
        revise: {
          summary: "Definition: The process of converting raw materials into finished goods. - Reduces dependence on primary sector.",
          bullets: [
            "Modernises agriculture.",
            "Reduces dependence on primary sector.",
            "Provides employment.",
            "Earns foreign exchange.",
            "Contributes to GDP.",
            "Agro-Based: Use agricultural products (e.g., cotton textiles, sugar, jute).",
          ]
        },
        practice: [
          {
            question: "What is manufacturing?",
            answer: "Refer to the revision notes above. Key focus: What is manufacturing?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Name the major iron and steel plants in India.",
            answer: "- Mineral-Based: Use minerals (e.g., iron and steel, cement)."
          },
          {
            question: "What are the major cotton textile centres in India?",
            answer: "- Agro-Based: Use agricultural products (e.g., cotton textiles, sugar, jute)."
          },
          {
            question: "Classify industries with examples.",
            answer: "- Significance: Core industry; provides raw material for other industries."
          },
          {
            question: "Describe the major industries in India and their distribution.",
            answer: "- Significance: Core industry; provides raw material for other industries."
          },
        ]
      },
      {
        id: "geography-ch7",
        title: "Lifelines Of National Economy (Only Map Work In Board Exam)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Lifelines Of National Economy (Only Map Work In Board Exam) - Revision Lecture" },
        revise: {
          summary: "LIFELINES OF NATIONAL ECONOMY (Only Map Work in Board Exam) Importance of Transportation:",
          bullets: [
            "Connects different regions.",
            "Facilitates trade and commerce.",
            "Enables movement of goods and people.",
            "Supports economic development.",
            "Roadways: Most common and flexible.",
            "Railways: Large-scale transportation of goods and people.",
          ]
        },
        practice: [
          {
            question: "Explain the main concepts of Lifelines Of National Economy (Only Map Work In Board Exam).",
            answer: "Study the revision notes covering definitions, processes, and key mechanisms of Lifelines Of National Economy (Only Map Work In Board Exam). Focus on board exam questions."
          },
          {
            question: "What are the important terms to remember from Lifelines Of National Economy (Only Map Work In Board Exam)?",
            answer: "Review all bold terms, equations, and definitions in the revision notes. These are highest-priority for the board exam."
          },
        ]
      },
    ]
  },
  economics: {
    chapters: [
      {
        id: "economics-ch1",
        title: "Development",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Development - Revision Lecture" },
        revise: {
          summary: "Definition: Improvement in the quality of life and well-being of people. Different Notions of Development:",
          bullets: [
            "Income: Higher income.",
            "Health: Better health facilities.",
            "Education: Better education.",
            "Security: Social and economic security.",
            "Freedom: Freedom of choice.",
            "Income: The main indicator of development.",
          ]
        },
        practice: [
          {
            question: "What is development?",
            answer: "Different Notions of Development:"
          },
          {
            question: "What is GDP?",
            answer: "Refer to the revision notes above. Key focus: What is GDP?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "What is per capita income?",
            answer: "- Income: The main indicator of development."
          },
          {
            question: "What is development? Explain the different indicators of development.",
            answer: "Different Notions of Development:"
          },
          {
            question: "Compare the economic and non-economic indicators of development.",
            answer: "- Security: Social and economic security."
          },
        ]
      },
      {
        id: "economics-ch2",
        title: "Sectors Of The Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Sectors Of The Indian Economy - Revision Lecture" },
        revise: {
          summary: "SECTORS OF THE INDIAN ECONOMY A. On the Basis of Nature of Work:",
          bullets: [
            "Extraction of natural resources.",
            "Examples: Agriculture, mining, fishing, forestry.",
            "Called: Agriculture and allied activities.",
            "Largest employer: In India, the primary sector employs the most people.",
            "Processing of raw materials.",
            "Examples: Manufacturing, construction, electricity generation.",
          ]
        },
        practice: [
          {
            question: "What is the primary sector?",
            answer: "- Largest employer: In India, the primary sector employs the most people."
          },
          {
            question: "What is the secondary sector?",
            answer: "- Largest employer: In India, the primary sector employs the most people."
          },
          {
            question: "What is the tertiary sector?",
            answer: "- Largest employer: In India, the primary sector employs the most people."
          },
          {
            question: "Explain the classification of economic activities with examples.",
            answer: "- Called: Agriculture and allied activities."
          },
          {
            question: "Discuss the role of the primary, secondary, and tertiary sectors in the Indian economy.",
            answer: "- Largest employer: In India, the primary sector employs the most people."
          },
        ]
      },
      {
        id: "economics-ch3",
        title: "Money And Credit",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Money And Credit - Revision Lecture" },
        revise: {
          summary: "- Barter System: Exchange of goods for goods. - Problems: Double coincidence of wants, lack of standard unit of value, difficulty in storing",
          bullets: [
            "Barter System: Exchange of goods for goods.",
            "Problems: Double coincidence of wants, lack of standard unit of value, difficulty in storing",
            "Commodity Money: Used items like cattle, grains, cowrie shells.",
            "Metallic Money: Gold, silver, copper coins.",
            "Paper Money: Currency notes.",
            "Digital Money: Credit cards, debit cards, UPI.",
          ]
        },
        practice: [
          {
            question: "What is money?",
            answer: "- Commodity Money: Used items like cattle, grains, cowrie shells."
          },
          {
            question: "What are the functions of money?",
            answer: "- Commodity Money: Used items like cattle, grains, cowrie shells."
          },
          {
            question: "What is credit?",
            answer: "- Digital Money: Credit cards, debit cards, UPI."
          },
          {
            question: "Describe the functions of money.",
            answer: "- Commodity Money: Used items like cattle, grains, cowrie shells."
          },
          {
            question: "Compare the formal and informal sources of credit.",
            answer: "- Friends and Relatives: Informal loans."
          },
        ]
      },
      {
        id: "economics-ch4",
        title: "Globalisation And The Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Globalisation And The Indian Economy - Revision Lecture" },
        revise: {
          summary: "GLOBALISATION AND THE INDIAN ECONOMY Definition: The process of integration of different countries through trade, investment, and",
          bullets: [
            "Economic Globalisation: Integration of economies.",
            "Cultural Globalisation: Exchange of ideas, culture, and practices.",
            "Political Globalisation: Interdependence of nations.",
            "Information Technology: Computers, internet, mobile phones.",
            "Transport Technology: Faster and cheaper transport.",
            "Communication Technology: Telegraph, telephone, satellite.",
          ]
        },
        practice: [
          {
            question: "What is globalisation?",
            answer: "GLOBALISATION AND THE INDIAN ECONOMY"
          },
          {
            question: "What is trade liberalisation?",
            answer: "Definition: The process of integration of different countries through trade, investment, and"
          },
          {
            question: "What is an MNC?",
            answer: "Refer to the revision notes above. Key focus: What is an MNC?. Study the definitions, processes, and examples given in this chapter."
          },
          {
            question: "Discuss the impact of globalisation on the Indian economy.",
            answer: "GLOBALISATION AND THE INDIAN ECONOMY"
          },
          {
            question: "What are the factors enabling globalisation?",
            answer: "GLOBALISATION AND THE INDIAN ECONOMY"
          },
        ]
      },
    ]
  },
  english: {
    chapters: [

      {
        id: "english-ch1",
        title: "A Letter to God",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Letter to God - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Letter to God. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Letter to God",
            "Key concept 2 related to A Letter to God",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Letter to God.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch2",
        title: "Nelson Mandela - Long Walk to Freedom",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Nelson Mandela - Long Walk to Freedom - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Nelson Mandela - Long Walk to Freedom. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Nelson Mandela - Long Walk to Freedom",
            "Key concept 2 related to Nelson Mandela - Long Walk to Freedom",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Nelson Mandela - Long Walk to Freedom.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch3",
        title: "Stories About Flying",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Stories About Flying - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Stories About Flying. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Stories About Flying",
            "Key concept 2 related to Stories About Flying",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Stories About Flying.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch4",
        title: "From the Diary of Anne Frank",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "From the Diary of Anne Frank - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of From the Diary of Anne Frank. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to From the Diary of Anne Frank",
            "Key concept 2 related to From the Diary of Anne Frank",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of From the Diary of Anne Frank.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch5",
        title: "Glimpses of India",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Glimpses of India - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Glimpses of India. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Glimpses of India",
            "Key concept 2 related to Glimpses of India",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Glimpses of India.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch6",
        title: "Mijbil the Otter",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Mijbil the Otter - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Mijbil the Otter. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Mijbil the Otter",
            "Key concept 2 related to Mijbil the Otter",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Mijbil the Otter.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch7",
        title: "Madam Rides the Bus",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Madam Rides the Bus - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Madam Rides the Bus. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Madam Rides the Bus",
            "Key concept 2 related to Madam Rides the Bus",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Madam Rides the Bus.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch8",
        title: "The Sermon at Benares",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Sermon at Benares - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Sermon at Benares. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Sermon at Benares",
            "Key concept 2 related to The Sermon at Benares",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Sermon at Benares.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch9",
        title: "The Proposal",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Proposal - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Proposal. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Proposal",
            "Key concept 2 related to The Proposal",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Proposal.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch10",
        title: "Dust of Snow",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Dust of Snow - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Dust of Snow. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Dust of Snow",
            "Key concept 2 related to Dust of Snow",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Dust of Snow.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch11",
        title: "Fire and Ice",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Fire and Ice - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Fire and Ice. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Fire and Ice",
            "Key concept 2 related to Fire and Ice",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Fire and Ice.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch12",
        title: "A Tiger in the Zoo",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Tiger in the Zoo - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Tiger in the Zoo. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Tiger in the Zoo",
            "Key concept 2 related to A Tiger in the Zoo",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Tiger in the Zoo.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch13",
        title: "The Ball Poem",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Ball Poem - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Ball Poem. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Ball Poem",
            "Key concept 2 related to The Ball Poem",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Ball Poem.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch14",
        title: "Amanda!",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Amanda! - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Amanda!. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Amanda!",
            "Key concept 2 related to Amanda!",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Amanda!.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch15",
        title: "The Tale of Custard the Dragon",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Tale of Custard the Dragon - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Tale of Custard the Dragon. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Tale of Custard the Dragon",
            "Key concept 2 related to The Tale of Custard the Dragon",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Tale of Custard the Dragon.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch16",
        title: "For Anne Gregory",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "For Anne Gregory - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of For Anne Gregory. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to For Anne Gregory",
            "Key concept 2 related to For Anne Gregory",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of For Anne Gregory.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch17",
        title: "A Triumph of Surgery",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Triumph of Surgery - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Triumph of Surgery. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Triumph of Surgery",
            "Key concept 2 related to A Triumph of Surgery",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Triumph of Surgery.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch18",
        title: "The Thief's Story",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Thief's Story - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Thief's Story. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Thief's Story",
            "Key concept 2 related to The Thief's Story",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Thief's Story.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch19",
        title: "The Midnight Visitor",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Midnight Visitor - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Midnight Visitor. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Midnight Visitor",
            "Key concept 2 related to The Midnight Visitor",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Midnight Visitor.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch20",
        title: "A Question of Trust",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "A Question of Trust - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of A Question of Trust. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to A Question of Trust",
            "Key concept 2 related to A Question of Trust",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of A Question of Trust.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch21",
        title: "Footprints Without Feet",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Footprints Without Feet - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Footprints Without Feet. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Footprints Without Feet",
            "Key concept 2 related to Footprints Without Feet",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Footprints Without Feet.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch22",
        title: "The Making of a Scientist",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Making of a Scientist - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Making of a Scientist. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Making of a Scientist",
            "Key concept 2 related to The Making of a Scientist",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Making of a Scientist.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch23",
        title: "The Necklace",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Necklace - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Necklace. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Necklace",
            "Key concept 2 related to The Necklace",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Necklace.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch24",
        title: "Bholi",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Bholi - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Bholi. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Bholi",
            "Key concept 2 related to Bholi",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Bholi.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch25",
        title: "The Book that Saved the Earth",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Book that Saved the Earth - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of The Book that Saved the Earth. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to The Book that Saved the Earth",
            "Key concept 2 related to The Book that Saved the Earth",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of The Book that Saved the Earth.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "english-ch26",
        title: "Grammar Section",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Grammar Section - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Grammar Section. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Grammar Section",
            "Key concept 2 related to Grammar Section",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Grammar Section.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  },
  computer: {
    chapters: [

      {
        id: "computer-ch1",
        title: "Digital Documentation (Writer)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Digital Documentation (Writer) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Digital Documentation (Writer). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Digital Documentation (Writer)",
            "Key concept 2 related to Digital Documentation (Writer)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Digital Documentation (Writer).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch2",
        title: "Electronic Spreadsheet (Calc)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Electronic Spreadsheet (Calc) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Electronic Spreadsheet (Calc). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Electronic Spreadsheet (Calc)",
            "Key concept 2 related to Electronic Spreadsheet (Calc)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Electronic Spreadsheet (Calc).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch3",
        title: "Database Management System (Base)",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Database Management System (Base) - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Database Management System (Base). Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Database Management System (Base)",
            "Key concept 2 related to Database Management System (Base)",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Database Management System (Base).",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch4",
        title: "Internet and Workplace Safety",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Internet and Workplace Safety - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Internet and Workplace Safety. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Internet and Workplace Safety",
            "Key concept 2 related to Internet and Workplace Safety",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Internet and Workplace Safety.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch5",
        title: "AI Project Cycle & Ethical Frameworks",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "AI Project Cycle & Ethical Frameworks - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of AI Project Cycle & Ethical Frameworks. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to AI Project Cycle & Ethical Frameworks",
            "Key concept 2 related to AI Project Cycle & Ethical Frameworks",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of AI Project Cycle & Ethical Frameworks.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch6",
        title: "Natural Language Processing",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Natural Language Processing - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Natural Language Processing. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Natural Language Processing",
            "Key concept 2 related to Natural Language Processing",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Natural Language Processing.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
      {
        id: "computer-ch7",
        title: "Computer Vision",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Computer Vision - Detailed Lecture" },
        revise: {
          summary: "This chapter covers the core concepts of Computer Vision. Focus on understanding the key definitions and solving related problems.",
          bullets: [
            "Key concept 1 related to Computer Vision",
            "Key concept 2 related to Computer Vision",
            "Important formulas, dates, or definitions",
            "Summary of main topics"
          ]
        },
        practice: [
          {
            question: "Explain the main concept of Computer Vision.",
            answer: "The main concept involves understanding the core principles outlined in the chapter."
          },
          {
            question: "What are the key applications or historical implications of this topic?",
            answer: "Refer to the revision notes for a detailed breakdown."
          }
        ]
      },
    ]
  }

};
