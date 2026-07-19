/**
 * Study Flow Data — CBSE Class 10
 *
 * Science: Physics, Chemistry, Biology (from Science Study Flow PDF)
 * Social Science: History, Geography, Civics, Economics (from Social Science Study Flow PDF)
 * Each chapter: Watch → Revise (comprehensive notes) → Practice (board-style Q&A with answers)
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

export const SUBJECT_KEYS: SubjectKey[] = ["physics", "chemistry", "biology", "mathematics", "history", "civics", "geography", "economics", "english", "computer"];

export const COMING_SOON_SUBJECTS = [] as const;

export const STUDY_FLOW_DATA: StudyFlowData = {
  physics: {
    chapters: [
      {
        id: "physics-ch1",
        title: "Light – Reflection And Refraction",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Light – Reflection And Refraction - Revision Lecture" },
        revise: {
          summary: "1. Light and Its Nature Light:** A form of energy that causes the sensation of vision.",
          bullets: [
            "Light: A form of energy that causes the sensation of vision",
            "Travels in a straight line",
            "Speed in vacuum: 3 × 10⁸ m/s",
            "Reflection: Bouncing back of light from a smooth polished surface",
            "1. The incident ray, reflected ray, and normal at the point of incidence lie in the same plane",
            "2. The angle of incidence (i) equals the angle of reflection (r)",
            "Image Formation by Plane Mirror:",
            "Same size as object",
            "Distance of image = Distance of object",
            "Concave Mirror: Reflecting surface curved inwards",
            "Convex Mirror: Reflecting surface curved outwards",
            "Pole (P): Centre of the mirror's surface",
            "Centre of Curvature (C): Centre of the sphere",
            "Radius of Curvature (R): Distance from pole to centre of curvature",
            "Focus (F): Point where parallel rays meet",
            "Focal Length (f): Distance from pole to focus",
          ]
        },
        practice: [
          {
            question: "State the laws of reflection.",
            answer: "Laws of Reflection: | Reflection: Bouncing back of light from a smooth polished surface. | 2. The angle of incidence (i) equals the angle of reflection (r). | Laws of Refraction:"
          },
          {
            question: "What is the relationship between radius of curvature and focal length of a spherical mirror?",
            answer: "- Radius of Curvature (R): Distance from pole to centre of curvature. | - Focal Length (f): Distance from pole to focus. | - Focal Length (f): Positive for convex; negative for concave. | - Focal Length (f): Distance from optical centre to focus."
          },
          {
            question: "Define refractive index.",
            answer: "2. Snell's Law: sin i / sin r = constant (refractive index, μ). | Refractive Index (μ): | Absolute Refractive Index:"
          },
          {
            question: "What is the power of a lens?",
            answer: "Power of a Lens (P): | - Convex Lens: Thicker at the centre; converges light. | - Concave Lens: Thinner at the centre; diverges light. | - Optical Centre (O): Centre of the lens."
          },
          {
            question: "Describe the image formation by a concave mirror for different object positions.",
            answer: "Image Formation by Concave Mirror: | Image Formation by Plane Mirror: | Image Formation by Convex Mirror: | Image Formation by Concave Lens:"
          },
          {
            question: "What is the lens formula? Derive it.",
            answer: "- Convex Lens: Thicker at the centre; converges light. | - Concave Lens: Thinner at the centre; diverges light. | - Optical Centre (O): Centre of the lens. | Image Formation by Convex Lens:"
          },
          {
            question: "Explain the working of a convex lens with ray diagrams.",
            answer: "- Convex Lens: Thicker at the centre; converges light. | Image Formation by Convex Lens: | - Convex Lens: P > 0 (positive). | - Convex Mirror: Reflecting surface curved outwards."
          },
        ]
      },
      {
        id: "physics-ch2",
        title: "The Human Eye And The Colourful World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Human Eye And The Colourful World - Revision Lecture" },
        revise: {
          summary: "Parts of the Eye and Their Functions:** Transparent front part; allows light to enter; major refractive surface.",
          bullets: [
            "Parts of the Eye and Their Functions:",
            "Transparent front part; allows light to enter; major refractive surface",
            "Coloured part; controls the amount of light entering",
            "Black circular opening; regulates the amount of light",
            "Biconvex, transparent; focuses light on the retina; changes shape for accommodation",
            "Attached to the lens; change the shape of the lens",
            "Inner lining; contains light-sensitive cells (rods and cones)",
            "Rods: Vision in dim light",
            "Cones: Colour vision",
            "Carries nerve impulses to the brain",
            "Point where the optic nerve leaves the eye; no photoreceptor cells",
            "Symptom: Near objects clear; far objects blurred",
            "Cause: Elongated eyeball or high curvature of lens",
            "Image: Forms in front of the retina",
            "Correction: Concave lens",
            "B. Hypermetropia (Long-sightedness):",
          ]
        },
        practice: [
          {
            question: "What is the power of accommodation?",
            answer: "Power of Accommodation: The ability of the eye lens to adjust its focal length. | - Biconvex, transparent; focuses light on the retina; changes shape for accommodation."
          },
          {
            question: "Define myopia. How is it corrected?",
            answer: "A. Myopia (Short-sightedness):"
          },
          {
            question: "What is dispersion of light?",
            answer: "Dispersion: Splitting of white light into its constituent colours. | - Transparent front part; allows light to enter; major refractive surface. | - Coloured part; controls the amount of light entering. | - Black circular opening; regulates the amount of light."
          },
          {
            question: "Why is the sky blue?",
            answer: "Violet, Indigo, Blue, Green, Yellow, Orange, Red | - Blue Colour of the Sky: Blue light is scattered more than red. | - Red Colour of the Sun at Sunrise and Sunset: Blue light is scattered away; red light"
          },
          {
            question: "Describe the human eye and its function with a labelled diagram.",
            answer: "Parts of the Eye and Their Functions:"
          },
          {
            question: "Explain the phenomenon of dispersion of white light.",
            answer: "Dispersion: Splitting of white light into its constituent colours. | - A second prism placed inverted recombines the spectrum into white light. | - Transparent front part; allows light to enter; major refractive surface. | - Coloured part; controls the amount of light entering."
          },
          {
            question: "Discuss atmospheric refraction and its effects.",
            answer: "A. Atmospheric Refraction: | - Advance Sunrise and Delayed Sunset: Due to refraction of sunlight."
          },
        ]
      },
      {
        id: "physics-ch3",
        title: "Electricity",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Electricity - Revision Lecture" },
        revise: {
          summary: "Electric Current:** The flow of electric charge. Direction of Current:**",
          bullets: [
            "Electric Current: The flow of electric charge",
            "Unit: Ampere (A)",
            "Formula: I = Q/t",
            "Conventional Current: Positive to negative",
            "Electron Flow: Negative to positive",
            "Electric Potential (V): Work done in bringing a unit positive charge from infinity to a point",
            "Potential Difference (V): Work done in moving a unit positive charge from one point to",
            "Formula: V = W/Q",
            "Unit: Volt (V)",
            "Ohm's Law: At constant temperature, the current flowing through a conductor is directly",
            "proportional to the potential difference applied across its ends",
            "Mathematical Expression: V ∝ I → V = IR",
            "Where: R = Resistance (Ohms, Ω)",
            "Opposition to the flow of current",
            "Unit: Ohm (Ω)",
            "Length (l): R ∝ l",
          ]
        },
        practice: [
          {
            question: "Define electric current.",
            answer: "Electric Current: The flow of electric charge. | Direction of Current: | - Conventional Current: Positive to negative. | Electric Potential (V): Work done in bringing a unit positive charge from infinity to a point."
          },
          {
            question: "State Ohm's law.",
            answer: "Key points: Refer to the revision section covering state in this chapter."
          },
          {
            question: "What is resistivity?",
            answer: "3. Material: Different resistivity. | Resistivity (ρ): | Conductors: Low resistivity. | Insulators: High resistivity."
          },
          {
            question: "Define one kilowatt-hour.",
            answer: "- Unit: Kilowatt-hour (kWh) or Unit"
          },
          {
            question: "Explain Ohm's law. Describe an experiment to verify it.",
            answer: "Key points: Refer to the revision section covering experiment, verify in this chapter."
          },
          {
            question: "What is the heating effect of current? Give its applications.",
            answer: "- Causes high current, overheating, and fire. | Electric Current: The flow of electric charge. | Direction of Current: | - Conventional Current: Positive to negative."
          },
          {
            question: "Describe the factors affecting resistance.",
            answer: "- Where: R = Resistance (Ohms, Ω) | Resistance depends on: | Superconductors: Zero resistance at very low temperatures. | - Equivalent Resistance: Rₑq = R₁ + R₂ + R₃"
          },
        ]
      },
      {
        id: "physics-ch4",
        title: "Magnetic Effects Of Electric Current",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Magnetic Effects Of Electric Current - Revision Lecture" },
        revise: {
          summary: "1. Magnetic Field and Field Lines The region around a magnet where its influence is felt.",
          bullets: [
            "The region around a magnet where its influence is felt",
            "Properties of Magnetic Field Lines:",
            "1. Originate from the north pole and end at the south pole",
            "4. Crowded near poles (strong field)",
            "5. Tangent at any point gives the direction of the field",
            "Rule: Right-Hand Thumb Rule",
            "Thumb: Direction of current",
            "Fingers: Direction of magnetic field",
            "Rule: Right-Hand Rule for Loop",
            "Fingers curl in the direction of current",
            "Thumb points in the direction of magnetic field",
            "Long coil of wire with many turns",
            "Magnetic Field: Similar to a bar magnet; strong and uniform inside",
            "A solenoid with an iron core",
            "Becomes magnetic when current flows; loses magnetism when current stops",
            "Thumb: Force",
          ]
        },
        practice: [
          {
            question: "What is a magnetic field?",
            answer: "Properties of Magnetic Field Lines: | - Fingers: Direction of magnetic field. | - Thumb points in the direction of magnetic field. | - Magnetic Field: Similar to a bar magnet; strong and uniform inside."
          },
          {
            question: "State Fleming's left-hand rule.",
            answer: "Fleming's Left-Hand Rule: | Fleming's Right-Hand Rule: | - Rule: Right-Hand Thumb Rule. | - Rule: Right-Hand Rule for Loop."
          },
          {
            question: "What is electromagnetic induction?",
            answer: "Electromagnetic Induction: The process of generating induced current by changing magnetic | Principle: Electromagnetic induction."
          },
          {
            question: "What is the difference between AC and DC?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "Describe the magnetic field of a current-carrying straight conductor, circular loop, and",
            answer: "Principle: A current-carrying conductor placed in a magnetic field experiences a force. | Properties of Magnetic Field Lines: | A. Straight Conductor: | - Fingers: Direction of magnetic field."
          },
          {
            question: "Explain the construction and working of an electric motor.",
            answer: "- Electric motor, galvanometer. | - Electric fans, washing machines, refrigerators."
          },
          {
            question: "What is electromagnetic induction? Explain the principle and working of a generator.",
            answer: "Principle: Electromagnetic induction. | Electromagnetic Induction: The process of generating induced current by changing magnetic | Principle: A current-carrying conductor placed in a magnetic field experiences a force. | A. AC Generator:"
          },
        ]
      },
      {
        id: "physics-ch5",
        title: "Our Environment",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Our Environment - Revision Lecture" },
        revise: {
          summary: "Ecosystem:** A self-contained unit consisting of living organisms and their non-living Components of an Ecosystem:**",
          bullets: [
            "Ecosystem: A self-contained unit consisting of living organisms and their non-living",
            "Producers: Green plants, algae, cyanobacteria",
            "Primary Consumers (Herbivores): Feed on plants",
            "Secondary Consumers (Carnivores): Feed on herbivores",
            "Tertiary Consumers: Feed on secondary consumers",
            "Omnivores: Feed on both plants and animals",
            "Decomposers: Bacteria, fungi; break down dead organic matter",
            "Air, water, soil, sunlight, temperature, minerals",
            "A sequence of organisms in which each organism feeds on the previous one",
            "Example: Grass → Grasshopper → Frog → Snake → Eagle",
            "First: Producers (Grass)",
            "Second: Primary Consumers (Grasshopper)",
            "Third: Secondary Consumers (Frog)",
            "Fourth: Tertiary Consumers (Snake)",
            "Interconnected food chains",
            "More complex and stable",
          ]
        },
        practice: [
          {
            question: "Define an ecosystem.",
            answer: "Ecosystem: A self-contained unit consisting of living organisms and their non-living | Components of an Ecosystem:"
          },
          {
            question: "What is a food chain? Give an example.",
            answer: "- Interconnected food chains. | - Enter food chains (bioaccumulation)."
          },
          {
            question: "What is the 10% law?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "What is ozone depletion? What causes it?",
            answer: "Depletion of Ozone Layer: | - Mechanism: CFCs release chlorine atoms; chlorine reacts with ozone. | - Accumulates and causes pollution. | - DDT: Accumulates in organisms and causes health problems."
          },
          {
            question: "Describe the structure and function of an ecosystem.",
            answer: "Ecosystem: A self-contained unit consisting of living organisms and their non-living | Components of an Ecosystem: | - Function: Absorbs harmful UV radiation."
          },
          {
            question: "Explain energy flow in an ecosystem with a food chain.",
            answer: "- Interconnected food chains. | - Energy flows in one direction: Sun → Producers → Consumers → Decomposers. | - Enter food chains (bioaccumulation). | Ecosystem: A self-contained unit consisting of living organisms and their non-living"
          },
          {
            question: "Discuss the environmental problems caused by pollution.",
            answer: "- Air Pollution: Vehicular emissions, industrial smoke. | - Water Pollution: Industrial waste, sewage, agricultural runoff. | - Soil Pollution: Chemical fertilisers, pesticides, industrial waste. | - Accumulates and causes pollution."
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
          summary: "1. Chemical Reactions A chemical reaction is a process in which one or more substances (reactants) are transformed",
          bullets: [
            "A chemical reaction is a process in which one or more substances (reactants) are transformed",
            "into one or more new substances (products) with different properties",
            "Indicators of a Chemical Reaction:",
            "Change in temperature",
            "Formation of precipitate",
            "A chemical equation is a symbolic representation of a chemical reaction",
            "Word Equation: Magnesium + Oxygen → Magnesium oxide",
            "Chemical Equation: Mg + O₂ → MgO",
            "Balanced Chemical Equation: A chemical equation in which the number of atoms of each",
            "element is the same on both sides",
            "1. Write the unbalanced equation",
            "2. Compare the number of atoms of each element on both sides",
            "3. Use coefficients to balance atoms one element at a time",
            "4. Ensure the smallest whole number coefficients are used",
            "5. Check that all atoms are balanced",
            "Example: Fe + H₂O → Fe₃O₄ + H₂",
          ]
        },
        practice: [
          {
            question: "Define a balanced chemical equation.",
            answer: "Balanced Chemical Equation: A chemical equation in which the number of atoms of each | A chemical equation is a symbolic representation of a chemical reaction. | Chemical Equation: Mg + O₂ → MgO | 1. Write the unbalanced equation."
          },
          {
            question: "Identify the type of reaction: 2H₂ + O₂ → 2H₂O",
            answer: "A chemical reaction is a process in which one or more substances (reactants) are transformed | Indicators of a Chemical Reaction: | A chemical equation is a symbolic representation of a chemical reaction. | A. Combination Reaction:"
          },
          {
            question: "What is the colour of ferrous sulphate crystals? What happens when they are heated?",
            answer: "- Change in colour."
          },
          {
            question: "Define oxidation and reduction with one example each.",
            answer: "F. Oxidation and Reduction (Redox Reactions): | Balanced Chemical Equation: A chemical equation in which the number of atoms of each | 2. Compare the number of atoms of each element on both sides. | - Oxidation: Gain of oxygen or loss of hydrogen or loss of electrons."
          },
          {
            question: "Describe with chemical equations all five types of chemical reactions. Give one example of",
            answer: "The gradual destruction of metals due to chemical reactions with their environment. | A chemical reaction is a process in which one or more substances (reactants) are transformed | Indicators of a Chemical Reaction: | A chemical equation is a symbolic representation of a chemical reaction."
          },
          {
            question: "What is a redox reaction? Explain with the example of zinc oxide reacting with carbon.",
            answer: "F. Oxidation and Reduction (Redox Reactions): | A chemical reaction is a process in which one or more substances (reactants) are transformed | Indicators of a Chemical Reaction: | A chemical equation is a symbolic representation of a chemical reaction."
          },
          {
            question: "Explain corrosion and rancidity with examples. How can they be prevented?",
            answer: "The gradual destruction of metals due to chemical reactions with their environment. | - Rusting of Iron: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O | - Prevention: Painting, galvanisation, oiling, alloying, electroplating."
          },
        ]
      },
      {
        id: "chemistry-ch2",
        title: "Acids, Bases And Salts",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Acids, Bases And Salts - Revision Lecture" },
        revise: {
          summary: "1. Acids and Bases – Definitions Substances that furnish H⁺ ions in aqueous solution.",
          bullets: [
            "Substances that furnish H⁺ ions in aqueous solution",
            "Sour taste, turn blue litmus red",
            "Examples: HCl, H₂SO₄, HNO₃, CH₃COOH",
            "Substances that furnish OH⁻ ions in aqueous solution",
            "Bitter taste, soapy touch, turn red litmus blue",
            "Examples: NaOH, KOH, Ca(OH)₂, NH₄OH",
            "Alkalis: Water-soluble bases (e.g., NaOH, KOH)",
            "Natural Indicators: Litmus, Turmeric, Red cabbage juice",
            "Synthetic Indicators: Methyl orange, Phenolphthalein",
            "Universal Indicator: A mixture of indicators that gives different colours for different pH",
            "Acid + Metal → Salt + Hydrogen gas",
            "Example: 2HCl + Zn → ZnCl₂ + H₂↑",
            "B. Reaction with Metal Carbonates/Hydrogen Carbonates:",
            "Acid + Metal carbonate → Salt + CO₂ + H₂O",
            "Example: 2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂↑",
            "Test for CO₂: Pass gas through lime water; it turns milky",
          ]
        },
        practice: [
          {
            question: "Define an acid and a base according to Arrhenius theory.",
            answer: "Acid + Base → Salt + H₂O | Base + Acid → Salt + H₂O | Salts are ionic compounds formed by the neutralisation of an acid and a base. | - Salt of strong acid and strong base: pH = 7 (e.g., NaCl)."
          },
          {
            question: "What is the pH of pure water?",
            answer: "Alkalis: Water-soluble bases (e.g., NaOH, KOH). | - Test for CO₂: Pass gas through lime water; it turns milky. | - Preparation: Evaporation of sea water. | - Uses: Glass, soap, water softening."
          },
          {
            question: "What is the chemical name of baking soda? Write its formula.",
            answer: "Baking Soda (NaHCO₃): | Preparation of Baking Soda: | - Uses: Food; raw material for many chemicals. | - Uses: Baking; antacid."
          },
          {
            question: "Why is Plaster of Paris stored in moisture-proof containers?",
            answer: "Plaster of Paris (CaSO₄·½H₂O): | - CaSO₄·½H₂O: Plaster of Paris (½ water molecule) | Preparation of Plaster of Paris: | Setting of Plaster of Paris:"
          },
          {
            question: "Describe the preparation, properties, and uses of:",
            answer: "C. Salts and Their Uses: | - Preparation: Evaporation of sea water. | - Uses: Food; raw material for many chemicals. | - Preparation: Chlor-alkali process: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂"
          },
          {
            question: "Explain the reaction of acids with metals, metal carbonates, metal oxides, and bases.",
            answer: "A. Reaction with Metals: | B. Reaction with Metal Carbonates/Hydrogen Carbonates: | C. Reaction with Metal Oxides: | A. Reaction with Metals:"
          },
          {
            question: "What is the chlor-alkali process? Write the reaction and explain the uses of each product.",
            answer: "- Preparation: Chlor-alkali process: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂ | - Uses: Bleaching; disinfectant. | Chlor-Alkali Process: | Alkalis: Water-soluble bases (e.g., NaOH, KOH)."
          },
        ]
      },
      {
        id: "chemistry-ch3",
        title: "Metals And Non-Metals",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Metals And Non-Metals - Revision Lecture" },
        revise: {
          summary: "1. Physical Properties State: Solid (except Hg-liquid).",
          bullets: [
            "State: Solid (except Hg-liquid)",
            "Lustre: Shiny",
            "Malleability: Can be beaten into sheets",
            "Ductility: Can be drawn into wires",
            "Conductivity: Good conductors of heat and electricity",
            "Density: Generally high",
            "Melting/Boiling Point: Usually high",
            "State: Solid, liquid (Br₂), gas",
            "Lustre: Dull",
            "Malleability: Brittle",
            "Ductility: Not ductile",
            "Conductivity: Poor conductors (except graphite)",
            "Density: Generally low",
            "Melting/Boiling Point: Usually low",
            "Sodium and potassium: Soft",
            "Mercury: Liquid at room temperature",
          ]
        },
        practice: [
          {
            question: "Why is sodium stored in kerosene oil?",
            answer: "- Sodium and potassium: Soft."
          },
          {
            question: "What is an alloy? Give two examples.",
            answer: "- Prevention: Painting, galvanisation, electroplating, alloying. | Purpose of Alloying:"
          },
          {
            question: "Why do metals have high melting points?",
            answer: "- Melting/Boiling Point: Usually high. | - Melting/Boiling point: High. | Extraction of Highly Reactive Metals: | - Density: Generally high."
          },
          {
            question: "What is the reactivity series of metals?",
            answer: "The arrangement of metals in decreasing order of reactivity. | Complete Reactivity Series: | - Metals above H can displace H from dilute acids. | - Metals below H cannot displace H from dilute acids."
          },
          {
            question: "Describe the steps involved in the extraction of a metal from its ore.",
            answer: "More reactive metal displaces less reactive metal from its salt solution. | - A more reactive metal can displace a less reactive metal from its salt solution. | - Metals above H can displace H from dilute acids. | - Metals below H cannot displace H from dilute acids."
          },
          {
            question: "What is the reactivity series? How does it help in the extraction of metals?",
            answer: "The arrangement of metals in decreasing order of reactivity. | Complete Reactivity Series: | Extraction of Highly Reactive Metals: | Extraction of Moderately Reactive Metals:"
          },
          {
            question: "Explain the formation of ionic compounds with the help of sodium chloride.",
            answer: "- Sodium and potassium: Soft."
          },
        ]
      },
      {
        id: "chemistry-ch4",
        title: "Carbon And Its Compounds",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Carbon And Its Compounds - Revision Lecture" },
        revise: {
          summary: "1. Covalent Bonding in Carbon Covalent Bond:** A bond formed by sharing of electrons between atoms.",
          bullets: [
            "Covalent Bond: A bond formed by sharing of electrons between atoms",
            "Why Carbon Forms Covalent Bonds:",
            "Carbon has 4 valence electrons (electronic configuration: 2,4)",
            "It shares electrons with other atoms to form covalent bonds",
            "Single Bond: Sharing of one pair of electrons",
            "Double Bond: Sharing of two pairs of electrons",
            "Triple Bond: Sharing of three pairs of electrons",
            "Properties of Covalent Compounds:",
            "Low melting and boiling points",
            "Poor conductors of electricity",
            "Usually insoluble in water, soluble in organic solvents",
            "Ability of carbon atoms to bond with each other to form long chains, branched chains, or rings",
            "Reason: Strong C–C bonds due to small size and tetravalency",
            "Carbon has four valence electrons and can form four bonds",
            "It can bond with elements like H, O, N, S, Cl, etc",
            "Compounds made up of carbon and hydrogen only",
          ]
        },
        practice: [
          {
            question: "What is catenation?",
            answer: "Key points: Refer to the revision section covering catenation in this chapter."
          },
          {
            question: "Why does carbon form covalent bonds?",
            answer: "Why Carbon Forms Covalent Bonds: | - It shares electrons with other atoms to form covalent bonds. | - Carbon has four valence electrons and can form four bonds. | Covalent Bond: A bond formed by sharing of electrons between atoms."
          },
          {
            question: "What is a homologous series?",
            answer: "Homologous Series: | A series of organic compounds with the same functional group and similar chemical properties,"
          },
          {
            question: "Write the structural formula of ethanol and ethanoic acid.",
            answer: "- Carboxylic acid: –COOH (R–COOH); Example: Ethanoic acid (CH₃COOH) | - CH₃COOH: Ethanoic acid | - Sour taste (vinegar contains 5-8% ethanoic acid). | - General formula: C H₂ ₊₂"
          },
          {
            question: "Describe the IUPAC nomenclature of hydrocarbons and functional groups.",
            answer: "Common Functional Groups: | D. Naming with Functional Groups: | A. Saturated Hydrocarbons (Alkanes): | B. Unsaturated Hydrocarbons:"
          },
          {
            question: "Explain the chemical properties of carbon compounds with examples.",
            answer: "A series of organic compounds with the same functional group and similar chemical properties, | Properties of Covalent Compounds: | Compounds made up of carbon and hydrogen only. | - Similar chemical properties."
          },
          {
            question: "Write the reactions of ethanol and ethanoic acid with sodium, sodium carbonate, and ethanol.",
            answer: "A. Reaction with Sodium Carbonate: | - Sodium or potassium salts of long-chain carboxylic acids. | - Alcohol: –OH (R–OH); Example: Ethanol (C₂H₅OH) | - Carboxylic acid: –COOH (R–COOH); Example: Ethanoic acid (CH₃COOH)"
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
          summary: "1. What are Life Processes? The basic functions performed by living organisms to maintain life are called life processes.",
          bullets: [
            "The basic functions performed by living organisms to maintain life are called life processes",
            "Nutrition: Obtaining and utilising food",
            "Respiration: Releasing energy from food",
            "Transport: Movement of substances",
            "Excretion: Removing waste products",
            "Reproduction: Producing offspring",
            "The process of obtaining and utilising food for energy, growth, and repair",
            "Organisms synthesise their own food from inorganic sources",
            "Examples: Green plants, some bacteria",
            "Photosynthesis Equation: 6CO₂ + 12H₂O → (Sunlight, Chlorophyll) → C₆H₁₂O₆ + 6O₂ +",
            "Organisms depend on other organisms for food",
            "Holozoic: Ingestion of solid food. Examples: Humans, amoeba, animals",
            "Saprotrophic: Feeding on dead and decaying organic matter. Examples: Fungi,",
            "Parasitic: Feeding on living organisms (hosts). Examples: Tapeworm, lice, cuscuta",
            "Ingestion: Pseudopodia engulf the food particle",
            "Digestion: Food vacuole forms; digestive enzymes break down food",
          ]
        },
        practice: [
          {
            question: "What is the role of saliva in the digestion of food?",
            answer: "2. Digestion: Food vacuole forms; digestive enzymes break down food. | 2. Digestion: Breaking down food. | - Salivary Amylase: Starch → Maltose (partial digestion). | - Nutrition: Obtaining and utilising food."
          },
          {
            question: "Name the enzyme that converts starch into maltose.",
            answer: "- Salivary Amylase: Starch → Maltose (partial digestion). | - Amylase: Starch → Maltose. | 2. Digestion: Food vacuole forms; digestive enzymes break down food. | 3. Absorption: Nutrients absorbed into cytoplasm."
          },
          {
            question: "What is the function of villi in the small intestine?",
            answer: "3. Absorption: Nutrients absorbed in small intestine. | - Chyme: Semi-digested food that passes to the small intestine. | D. Small Intestine: | The basic functions performed by living organisms to maintain life are called life processes."
          },
          {
            question: "Define photosynthesis. Write the equation.",
            answer: "- Photosynthesis Equation: 6CO₂ + 12H₂O → (Sunlight, Chlorophyll) → C₆H₁₂O₆ + 6O₂ + | - Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (38 ATP)"
          },
          {
            question: "Describe the human digestive system with a labelled diagram.",
            answer: "B. Human Respiratory System: | - Holozoic: Ingestion of solid food. Examples: Humans, amoeba, animals. | 2. Digestion: Food vacuole forms; digestive enzymes break down food. | Nutrition in Human Beings:"
          },
          {
            question: "Explain the process of photosynthesis with the equation. What is the significance of",
            answer: "- Photosynthesis Equation: 6CO₂ + 12H₂O → (Sunlight, Chlorophyll) → C₆H₁₂O₆ + 6O₂ + | - Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (38 ATP)"
          },
          {
            question: "Describe the structure and working of the human heart.",
            answer: "- Holozoic: Ingestion of solid food. Examples: Humans, amoeba, animals. | Nutrition in Human Beings: | B. Human Respiratory System: | - Structure: Thin walls (one cell thick), surrounded by blood capillaries."
          },
        ]
      },
      {
        id: "biology-ch2",
        title: "Control And Coordination",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Control And Coordination - Revision Lecture" },
        revise: {
          summary: "1. Control and Coordination in Animals Neuron: Structural and functional unit.",
          bullets: [
            "Neuron: Structural and functional unit",
            "Dendrites: Receive impulses",
            "Cell Body (Cyton): Contains nucleus; integrates impulses",
            "Axon: Long fibre; conducts impulses away from cell body",
            "Myelin Sheath: Insulating layer; speeds up impulse conduction",
            "Synapse: Gap between neurons; chemical (neurotransmitters) transmission",
            "Central Nervous System (CNS): Brain + Spinal cord",
            "Peripheral Nervous System (PNS): Nerves connecting CNS to body parts",
            "Largest part; divided into two hemispheres",
            "Functions: Thinking, memory, intelligence, reasoning, voluntary actions, sensory",
            "Connects forebrain to hindbrain",
            "Controls reflex movements of eyes and head",
            "Cerebellum: Balance, coordination of voluntary movements",
            "Medulla Oblongata: Involuntary actions (breathing, heartbeat, digestion, blood pressure)",
            "Pons: Relay station between cerebrum and medulla",
            "Extends from medulla oblongata",
          ]
        },
        practice: [
          {
            question: "Define reflex action. Give an example.",
            answer: "- Functions: Conducts impulses to and from the brain; centre for reflex actions. | E. Reflex Action: | - Functions: Thinking, memory, intelligence, reasoning, voluntary actions, sensory | - Controls reflex movements of eyes and head."
          },
          {
            question: "What is the role of auxin in phototropism?",
            answer: "- Phototropism: Light causes auxin to accumulate on the shaded side, causing cells there to | - Functions: Cell elongation; apical dominance; root initiation; promotes phototropism and | - Geotropism: Gravity causes auxin to accumulate on the lower side, causing shoots to bend"
          },
          {
            question: "Name the hormone that regulates blood sugar level.",
            answer: "- Diabetes Mellitus: Lack of insulin → High blood sugar (glucose in urine). Treated with | - Medulla Oblongata: Involuntary actions (breathing, heartbeat, digestion, blood pressure). | - Messages: Chemical messages (hormones). | - Pathway: Via blood."
          },
          {
            question: "What is the function of the cerebellum?",
            answer: "- Neuron: Structural and functional unit. | - Functions: Thinking, memory, intelligence, reasoning, voluntary actions, sensory | - Cerebellum: Balance, coordination of voluntary movements. | - Functions: Conducts impulses to and from the brain; centre for reflex actions."
          },
          {
            question: "Compare and contrast nervous coordination and chemical coordination in animals.",
            answer: "- Cerebellum: Balance, coordination of voluntary movements. | A. Nervous System: | - Synapse: Gap between neurons; chemical (neurotransmitters) transmission. | B. Types of Nervous System:"
          },
          {
            question: "Describe the major endocrine glands, their hormones, and functions.",
            answer: "A. Endocrine Glands and Their Hormones: | - Chemical messengers secreted by endocrine glands. | - Functions: Thinking, memory, intelligence, reasoning, voluntary actions, sensory | - Functions: Conducts impulses to and from the brain; centre for reflex actions."
          },
          {
            question: "Explain the mechanism of tropic movements in plants.",
            answer: "B. Tropic Movements: | Mechanism of Tropic Movements: | - Controls reflex movements of eyes and head. | - Cerebellum: Balance, coordination of voluntary movements."
          },
        ]
      },
      {
        id: "biology-ch3",
        title: "Reproduction",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Reproduction - Revision Lecture" },
        revise: {
          summary: "1. Reproduction – Basic Concepts Reproduction: The biological process by which organisms produce new individuals of the",
          bullets: [
            "Reproduction: The biological process by which organisms produce new individuals of the",
            "Asexual Reproduction: Single parent; no gametes; offspring identical to parent",
            "Sexual Reproduction: Two parents; gametes fuse; offspring show variation",
            "Ensures continuity of species",
            "Maintains population",
            "Variations allow evolution and adaptation",
            "Binary Fission: Parent divides into two equal halves",
            "Amoeba: Splits into two",
            "Leishmania: Longitudinal binary fission",
            "Paramecium: Transverse binary fission",
            "Multiple Fission: Parent divides into many daughter cells",
            "Example: Plasmodium (malarial parasite)",
            "Example: Yeast, Hydra",
            "A small outgrowth (bud) develops on the parent and eventually detaches to form a new",
            "Example: Spirogyra (green alga), Planaria",
            "The organism breaks into fragments, each capable of growing into a new individual",
          ]
        },
        practice: [
          {
            question: "Define reproduction. What are its types?",
            answer: "- Reproduction: The biological process by which organisms produce new individuals of the | - Asexual Reproduction: Single parent; no gametes; offspring identical to parent. | - Sexual Reproduction: Two parents; gametes fuse; offspring show variation. | Significance of Reproduction:"
          },
          {
            question: "What is vegetative propagation? Give two examples.",
            answer: "F. Vegetative Propagation: | - Definition: Asexual reproduction in plants using vegetative parts. | G. Tissue Culture (Micropropagation):"
          },
          {
            question: "Name the male and female gametes in humans.",
            answer: "- Stamen: Anther (produces pollen grains containing male gametes) + Filament. | - Gynoecium (Female): | - Carpel/Pistil: Stigma (receives pollen), Style (tube), Ovary (contains ovules with female | 4. Two male gametes are released (double fertilisation)."
          },
          {
            question: "What is the function of the placenta?",
            answer: "4. Placenta: Functions: Nutrition, respiration, excretion, hormone production."
          },
          {
            question: "Describe the process of sexual reproduction in humans.",
            answer: "- Asexual Reproduction: Single parent; no gametes; offspring identical to parent. | - Sexual Reproduction: Two parents; gametes fuse; offspring show variation. | - Definition: Asexual reproduction in plants using vegetative parts. | - Reproduction: The biological process by which organisms produce new individuals of the"
          },
          {
            question: "Explain the menstrual cycle in detail.",
            answer: "D. Menstrual Cycle: | 1. Menstrual Phase (Days 1-5): Endometrium sheds; bleeding occurs."
          },
          {
            question: "Describe the reproductive system of flowering plants with a diagram.",
            answer: "A. Male Reproductive System: | B. Female Reproductive System: | - Definition: Asexual reproduction in plants using vegetative parts. | - Plants are identical to parent (desirable traits preserved)."
          },
        ]
      },
      {
        id: "biology-ch4",
        title: "Heredity And Evolution",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Heredity And Evolution - Revision Lecture" },
        revise: {
          summary: "Heredity:** The transmission of traits from parents to offspring. Genes:** Basic units of heredity; segments of DNA that code for specific traits.",
          bullets: [
            "Heredity: The transmission of traits from parents to offspring",
            "Genes: Basic units of heredity; segments of DNA that code for specific traits",
            "Genetics: The study of heredity and variation",
            "Variation: Differences in traits among individuals of the same species",
            "Allows organisms to adapt to changing environments",
            "Provides raw material for evolution",
            "Gregor Mendel conducted experiments on garden pea plants",
            "Short generation time",
            "Large number of offspring",
            "Easy to cross-breed",
            "Visible contrasting traits (7 pairs)",
            "A. Monohybrid Cross (One Trait):",
            "Example: Tall plant (TT) × Dwarf plant (tt)",
            "F₁ Generation: All tall (Tt). Tall trait is dominant; dwarf trait is recessive",
            "F₂ Generation (Selfing of F₁): Tt × Tt",
            "Phenotypic Ratio: 3 Tall : 1 Dwarf",
          ]
        },
        practice: [
          {
            question: "Define heredity and variation.",
            answer: "Genetics: The study of heredity and variation. | Heredity: The transmission of traits from parents to offspring. | Genes: Basic units of heredity; segments of DNA that code for specific traits. | Variation: Differences in traits among individuals of the same species."
          },
          {
            question: "What is a gene?",
            answer: "Genes: Basic units of heredity; segments of DNA that code for specific traits. | Genetics: The study of heredity and variation. | - Short generation time. | - F₁ Generation: All tall (Tt). Tall trait is dominant; dwarf trait is recessive."
          },
          {
            question: "State Mendel's Law of Dominance.",
            answer: "Gregor Mendel conducted experiments on garden pea plants. | Mendel's Experiments: | 1. Law of Dominance:"
          },
          {
            question: "What is the difference between homologous and analogous organs?",
            answer: "2. Homologous Organs: Same basic structure; different functions. Examples: Forelimbs of | 3. Analogous Organs: Different basic structures; same functions. Examples: Wings of | 4. Vestigial Organs: Organs with no apparent function. Examples: Appendix in humans; | - Proposed use and disuse of organs; acquired traits are inherited."
          },
          {
            question: "Describe Mendel's laws of inheritance with examples.",
            answer: "Gregor Mendel conducted experiments on garden pea plants. | Mendel's Experiments: | - When two or more traits are studied, the inheritance of one trait is independent of the other. | 1. Lamarck's Theory (Inheritance of Acquired Characters):"
          },
          {
            question: "Explain the dihybrid cross with a Punnett square.",
            answer: "B. Dihybrid Cross (Two Traits): | - Easy to cross-breed. | A. Monohybrid Cross (One Trait): | 5. Comparative Embryology: Similar early embryonic development across species."
          },
          {
            question: "Discuss the evidence for evolution with examples.",
            answer: "A. Evidence for Evolution: | - Provides raw material for evolution. | Evolution: Gradual changes in organisms over generations, leading to the development of | insects and birds. Indicate convergent evolution."
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
          summary: "1. The French Revolution and the Idea of the Nation The French Revolution (1789) was the first expression of nationalism.",
          bullets: [
            "The French Revolution (1789) was the first expression of nationalism",
            "It introduced the idea of \"La Patrie\" (the fatherland) and \"Le Citoyen\" (the citizen)",
            "A new French flag (tricolour) replaced the royal standard",
            "The Estates General was renamed the National Assembly",
            "A centralised administrative system was established",
            "Uniform laws and standardised weights and measures were introduced",
            "Internal customs duties were abolished",
            "French became the common language",
            "Napoleon Bonaparte crowned himself Emperor of France in 1804",
            "He introduced the Civil Code (Napoleonic Code) in 1804",
            "Features of the Napoleonic Code:",
            "Abolished privileges based on birth",
            "Established equality before the law",
            "Secured the right to property",
            "Abolished feudal dues and serfdom",
            "Simplified administrative divisions",
          ]
        },
        practice: [
          {
            question: "What is meant by the term \"nation state\"?",
            answer: "- The Estates General was renamed the National Assembly. | - They revolted to form independent nation-states. | - The French Revolution (1789) was the first expression of nationalism. | - Aristocracy: Socially and politically dominant; spoke French; owned estates."
          },
          {
            question: "Who was Giuseppe Mazzini?",
            answer: "- Giuseppe Mazzini: Founded \"Young Italy\" and \"Young Europe\"; believed in the unification | - Giuseppe Mazzini: Revolutionary; founded Young Italy. | - Giuseppe Garibaldi: Military leader; led the Red Shirts."
          },
          {
            question: "What was the Napoleonic Code?",
            answer: "- He introduced the Civil Code (Napoleonic Code) in 1804. | - Features of the Napoleonic Code:"
          },
          {
            question: "Define liberalism.",
            answer: "- Middle Class: Included industrialists, businessmen, professionals; believed in liberalism | B. The Rise of Liberalism: | - Political Liberalism: Government by consent, abolition of autocracy, constitutional | - Economic Liberalism: Freedom of markets, abolition of state-imposed restrictions on trade."
          },
          {
            question: "Describe the process of the unification of Germany.",
            answer: "A. Unification of Germany: | - Giuseppe Mazzini: Founded \"Young Italy\" and \"Young Europe\"; believed in the unification | B. Unification of Italy:"
          },
          {
            question: "What were the causes and effects of the rise of nationalism in Europe?",
            answer: "- The French Revolution (1789) was the first expression of nationalism. | - Uniform laws and standardised weights and measures were introduced. | - Internal customs duties were abolished. | and nationalism."
          },
          {
            question: "Compare and contrast the unification of Germany and Italy.",
            answer: "- Giuseppe Mazzini: Founded \"Young Italy\" and \"Young Europe\"; believed in the unification | A. Unification of Germany: | B. Unification of Italy: | of Italy through a republic."
          },
        ]
      },
      {
        id: "history-ch2",
        title: "Nationalism In India",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Nationalism In India - Revision Lecture" },
        revise: {
          summary: "1. The First World War and Its Impact on India Economic and Political Impact:**",
          bullets: [
            "Increased defence expenditure led to a rise in taxes",
            "Prices of goods increased (inflation)",
            "Forced recruitment of soldiers from villages",
            "Agricultural production declined",
            "Shortage of food led to famines",
            "The British government introduced repressive laws",
            "Allowed detention without trial for up to two years",
            "Restrictions on civil liberties",
            "Jallianwala Bagh Massacre (13 April 1919): General Dyer fired on a peaceful gathering in",
            "1. Rowlatt Act and Jallianwala Bagh massacre",
            "2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the",
            "3. Economic hardship due to British policies",
            "Non-cooperation with the British",
            "Surrender of titles and honours",
            "Boycott of government institutions (schools, colleges, law courts)",
            "Boycott of foreign goods",
          ]
        },
        practice: [
          {
            question: "What was the Rowlatt Act?",
            answer: "The Rowlatt Act (1919): | 1. Rowlatt Act and Jallianwala Bagh massacre."
          },
          {
            question: "What was the Khilafat Movement?",
            answer: "2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the | Khilafat Movement: | - Gandhi supported the Khilafat cause. | - Gandhi called off the Non-Cooperation Movement."
          },
          {
            question: "What was the Dandi March?",
            answer: "4. Salt March (Dandi March): Gandhi marched to Dandi to break the salt law. | Salt March (12 March - 6 April 1930): | - Gandhi walked 240 miles from Sabarmati Ashram to Dandi."
          },
          {
            question: "What was the Quit India Movement?",
            answer: "6. Quit India Movement (1942). | - The Congress passed the Quit India Resolution on 8 August 1942. | 2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the | Khilafat Movement:"
          },
          {
            question: "Trace the course of the Non-Cooperation Movement. Why was it called off?",
            answer: "- Gandhi called off the Non-Cooperation Movement. | 4. Non-Cooperation Movement (1921-22). | 2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the | - Non-cooperation with the British."
          },
          {
            question: "Describe the Civil Disobedience Movement. What were its causes and effects?",
            answer: "- Gandhi agreed to call off the Civil Disobedience Movement. | 5. Civil Disobedience Movement (1930-34). | - Civil Disobedience: Breaking unjust laws. | - Restrictions on civil liberties."
          },
          {
            question: "Explain the Quit India Movement. What was its significance?",
            answer: "6. Quit India Movement (1942). | - The Congress passed the Quit India Resolution on 8 August 1942. | 2. Khilafat Movement (1919-1924): Muslims protested against the harsh treatment of the | Khilafat Movement:"
          },
        ]
      },
      {
        id: "history-ch3",
        title: "The Making Of A Global World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "The Making Of A Global World - Revision Lecture" },
        revise: {
          summary: "1. The Pre-Modern World A. The Silk Routes:**",
          bullets: [
            "Connected Asia, Europe, and Africa",
            "Used for trade of silk, spices, textiles, and other goods",
            "Also facilitated the spread of ideas, cultures, and technologies",
            "Key Items: Chinese silk, Indian spices, Roman glass, Arabian horses",
            "Buddhism: Spread from India to China via the Silk Routes",
            "Islam: Spread through trade routes",
            "Spices: Were traded from Asia to Europe",
            "Potato, Maize, and Tomato: Originated in the Americas and spread to other parts of the",
            "world (known as the Columbian Exchange)",
            "Cattle and Pigs: Brought to the Americas by Europeans",
            "Smallpox: Brought to the Americas by Europeans; devastated native populations",
            "The Conquest of the Americas: Disease played a significant role in the European conquest",
            "Irish Famine: In the 19th century, a potato blight led to massive famine and migration",
            "Slave Trade: Africans were transported to the Americas as slaves",
            "Convicts: European convicts were sent to colonies as labourers",
            "Migrants: People moved for trade, work, and settlement",
          ]
        },
        practice: [
          {
            question: "What were the Silk Routes?",
            answer: "A. The Silk Routes: | - Buddhism: Spread from India to China via the Silk Routes. | - Used for trade of silk, spices, textiles, and other goods. | - Key Items: Chinese silk, Indian spices, Roman glass, Arabian horses."
          },
          {
            question: "What was the Columbian Exchange?",
            answer: "world (known as the Columbian Exchange)."
          },
          {
            question: "What was the significance of the Suez Canal?",
            answer: "- The Suez Canal (1869): Shortened the route from Europe to Asia; increased trade. | - Before the Suez Canal: The Indian Ocean trade was very active. | - After the Suez Canal: European trade with Asia increased."
          },
          {
            question: "What were the Corn Laws?",
            answer: "- Corn Laws: Britain abolished the Corn Laws (restrictions on wheat imports) in 1846; food | - Spices: Were traded from Asia to Europe. | - Slave Trade: Africans were transported to the Americas as slaves. | - Convicts: European convicts were sent to colonies as labourers."
          },
          {
            question: "Describe the economic and social changes brought about by colonialism in the 19th century.",
            answer: "- Irish Famine: In the 19th century, a potato blight led to massive famine and migration. | C. Late Nineteenth Century Colonialism: | - Cattle and Pigs: Brought to the Americas by Europeans. | - Smallpox: Brought to the Americas by Europeans; devastated native populations."
          },
          {
            question: "Explain the role of trade in the making of a global world before the 19th century.",
            answer: "- Irish Famine: In the 19th century, a potato blight led to massive famine and migration. | - Before the Suez Canal: The Indian Ocean trade was very active. | - Used for trade of silk, spices, textiles, and other goods. | - Islam: Spread through trade routes."
          },
          {
            question: "What was the impact of the Opium Wars on China?",
            answer: "- Britain exported opium to China. | - Opium Wars (1839-42 and 1856-60) resulted in Chinese defeat. | - Buddhism: Spread from India to China via the Silk Routes. | - The Opium Trade:"
          },
        ]
      },
      {
        id: "history-ch4",
        title: "Print Culture And The Modern World",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Print Culture And The Modern World - Revision Lecture" },
        revise: {
          summary: "1. The Print Revolution A. The Beginning of Print in China:**",
          bullets: [
            "A. The Beginning of Print in China:",
            "Woodblock Printing: Invented in China around the 6th century",
            "Buddhist Texts: Printed in large numbers",
            "The first printed book: \"The Diamond Sutra\" (868 AD)",
            "China: Also developed movable type printing but did not adopt it widely",
            "Johannes Gutenberg: Invented the printing press in the 1430s",
            "Gutenberg Bible: The first printed book in Europe (1455)",
            "The Printing Press:",
            "Introduced in Germany in the 15th century",
            "Spread to other parts of Europe",
            "Made books cheaper and more accessible",
            "C. The Impact of the Print Revolution:",
            "Increased Production: More books were produced faster",
            "Cheaper Books: Books became affordable for the common people",
            "Spread of Literacy: More people learned to read",
            "Spread of Ideas: Scientific, religious, and political ideas spread rapidly",
          ]
        },
        practice: [
          {
            question: "Who invented the printing press?",
            answer: "- Johannes Gutenberg: Invented the printing press in the 1430s. | - Woodblock Printing: Invented in China around the 6th century. | - The Printing Press: | - Martin Luther: Used the printing press to spread his ideas against the Catholic Church."
          },
          {
            question: "What was the Gutenberg Bible?",
            answer: "- Gutenberg Bible: The first printed book in Europe (1455). | - Johannes Gutenberg: Invented the printing press in the 1430s. | - The Quran and Bible: Were also printed."
          },
          {
            question: "What was the \"Index of Prohibited Books\"?",
            answer: "- The Church: The Catholic Church tried to censor books (Index of Prohibited Books). | - Made books cheaper and more accessible. | 1. Increased Production: More books were produced faster. | 2. Cheaper Books: Books became affordable for the common people."
          },
          {
            question: "When was the first printing press set up in India?",
            answer: "- First Printing Press: Set up in Goa in 1556. | - East India Company: Established printing presses in India. | - Johannes Gutenberg: Invented the printing press in the 1430s. | - The Printing Press:"
          },
          {
            question: "Describe the development of print culture in India.",
            answer: "- Portuguese Missionaries: Brought printing to India in the 16th century. | - East India Company: Established printing presses in India. | - The Ramayana and Mahabharata: Were printed in various Indian languages. | A. The Beginning of Print in China:"
          },
          {
            question: "Explain the impact of the printing press on religious and social reforms.",
            answer: "- Johannes Gutenberg: Invented the printing press in the 1430s. | - The Printing Press: | - Martin Luther: Used the printing press to spread his ideas against the Catholic Church. | - First Printing Press: Set up in Goa in 1556."
          },
          {
            question: "How did the printing press contribute to the growth of nationalism in India?",
            answer: "- East India Company: Established printing presses in India. | - Johannes Gutenberg: Invented the printing press in the 1430s. | - The Printing Press: | - Martin Luther: Used the printing press to spread his ideas against the Catholic Church."
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
          summary: "1. Why Power-Sharing is Necessary A. Prudential Reasons:**",
          bullets: [
            "Reduces the possibility of conflict between social groups",
            "Ensures political stability",
            "Is a key feature of democracy",
            "Recognises the right of every community to participate in governance",
            "Is the essence of democracy",
            "Power is shared among different organs of government (legislature, executive, judiciary)",
            "Each organ checks the other (checks and balances)",
            "Power is shared between the central government and state governments (federalism)",
            "Power is shared among different social groups (reservations for SCs, STs, OBCs)",
            "D. Political Parties and Pressure Groups:",
            "Power is shared among different political parties and interest groups",
            "Ethnic Composition:",
            "59% Dutch-speaking Flemish",
            "40% French-speaking Walloons",
            "Conflict: Between French-speaking and Dutch-speaking communities",
            "Equal Representation: Both communities have equal representation in the central",
          ]
        },
        practice: [
          {
            question: "What is power-sharing?",
            answer: "Forms of Power-Sharing: | - Belgium: Accommodated different communities through power-sharing. | - Power is shared among different organs of government (legislature, executive, judiciary). | - Power is shared between the central government and state governments (federalism)."
          },
          {
            question: "What is horizontal distribution of power?",
            answer: "A. Horizontal Distribution: | Forms of Power-Sharing: | - Power is shared among different organs of government (legislature, executive, judiciary). | B. Vertical Distribution:"
          },
          {
            question: "What is vertical distribution of power?",
            answer: "B. Vertical Distribution: | Forms of Power-Sharing: | A. Horizontal Distribution: | - Power is shared among different organs of government (legislature, executive, judiciary)."
          },
          {
            question: "What is the ethnic composition of Belgium?",
            answer: "- Ethnic Composition: | - Ethnic Composition: | - Belgium: Accommodated different communities through power-sharing."
          },
          {
            question: "What are the forms of power-sharing? Explain with examples.",
            answer: "Forms of Power-Sharing: | - Belgium: Accommodated different communities through power-sharing. | - Power is shared among different organs of government (legislature, executive, judiciary). | - Power is shared between the central government and state governments (federalism)."
          },
          {
            question: "Explain the power-sharing arrangement in Belgium and its significance.",
            answer: "- Belgium: Accommodated different communities through power-sharing. | Forms of Power-Sharing: | - Power is shared among different organs of government (legislature, executive, judiciary). | - Power is shared between the central government and state governments (federalism)."
          },
          {
            question: "What was the impact of the civil war in Sri Lanka? How could it have been avoided?",
            answer: "1. Equal Representation: Both communities have equal representation in the central | - 18% Tamils (13% Sri Lankan Tamils, 5% Indian Tamils). | - Civil war (1983-2009). | - Sri Lanka: Majoritarianism led to conflict."
          },
        ]
      },
      {
        id: "civics-ch2",
        title: "Federalism",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Federalism - Revision Lecture" },
        revise: {
          summary: "1. What is Federalism? Definition:** A system of government where power is divided between a central authority and",
          bullets: [
            "Definition: A system of government where power is divided between a central authority and",
            "Two Levels of Government: Central and state",
            "Constitutional Division of Power: The Constitution defines the powers of each level",
            "Financial Autonomy: Both levels have their own sources of revenue",
            "Supremacy of the Constitution: The Constitution is supreme",
            "Independent Judiciary: Interprets the Constitution and resolves disputes",
            "Independent states come together to form a larger unit",
            "Examples: USA, Australia, Switzerland",
            "Features: All states have equal power",
            "B. Holding Together Federation:",
            "A large country decides to divide power between the centre and states",
            "Examples: India, Spain, Belgium",
            "Features: Central government is usually more powerful",
            "A. Features of Indian Federalism:",
            "Three Levels: Central, State, and Local",
            "Union List: Subjects of national importance (defence, foreign affairs, railways)",
          ]
        },
        practice: [
          {
            question: "What is federalism?",
            answer: "A. Features of Indian Federalism: | A. Challenges to Federalism: | B. How Federalism Has Been Strengthened: | 3. Cooperative Federalism: Centre and states work together."
          },
          {
            question: "What are the three lists under the Indian Constitution?",
            answer: "2. Constitutional Division of Power: The Constitution defines the powers of each level. | 4. Supremacy of the Constitution: The Constitution is supreme. | 5. Independent Judiciary: Interprets the Constitution and resolves disputes. | A. Features of Indian Federalism:"
          },
          {
            question: "What is the Union List?",
            answer: "- Union List: Subjects of national importance (defence, foreign affairs, railways)."
          },
          {
            question: "What is the State List?",
            answer: "1. Two Levels of Government: Central and state. | - Independent states come together to form a larger unit. | - Features: All states have equal power. | - A large country decides to divide power between the centre and states."
          },
          {
            question: "Compare the \"coming together\" and \"holding together\" federations.",
            answer: "A. Coming Together Federation: | B. Holding Together Federation: | - Independent states come together to form a larger unit. | 3. Cooperative Federalism: Centre and states work together."
          },
          {
            question: "Explain the federal structure of India.",
            answer: "A. Features of Indian Federalism: | - Examples: India, Spain, Belgium. | A. Challenges to Federalism: | B. How Federalism Has Been Strengthened:"
          },
          {
            question: "Discuss the role of the Governor and the emergency provisions in India.",
            answer: "C. Emergency Provisions: | - Examples: India, Spain, Belgium. | A. Features of Indian Federalism: | B. The Role of the Governor:"
          },
        ]
      },
      {
        id: "civics-ch3",
        title: "Gender, Religion And Caste",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Gender, Religion And Caste - Revision Lecture" },
        revise: {
          summary: "1. Gender and Politics A. Gender Division:**",
          bullets: [
            "The division of roles and responsibilities between men and women",
            "B. Inequalities and Discrimination:",
            "Patriarchy: Male dominance in society",
            "Literacy: Lower literacy rates for women",
            "Workforce Participation: Lower participation of women in the workforce",
            "Unpaid Work: Women do most of the unpaid domestic work",
            "Sex Ratio: Lower sex ratio in some states",
            "Violence: Domestic violence, sexual harassment",
            "C. Women's Movements and Political Representation:",
            "Feminist Movements: Demanded equal rights",
            "Political Representation: Reservation of seats for women in local bodies (33%)",
            "When one religion considers itself superior to others",
            "Religious Bigotry: Hatred of other religions",
            "Majoritarian Dominance: One religion dominates",
            "Political Mobilisation: Using religion for political ends",
            "Communal Violence: Clashes between religious communities",
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
            answer: "B. Secularism in India:"
          },
          {
            question: "What is the reservation policy?",
            answer: "- Political Representation: Reservation of seats for women in local bodies (33%). | - Reservations: For SCs, STs, and OBCs. | - Reservations: Have helped backward classes."
          },
          {
            question: "Discuss the role of gender in politics.",
            answer: "A. Gender Division: | C. The Role of Religion in Politics: | C. Caste in Politics: | - Caste Politics: Can lead to conflict."
          },
          {
            question: "Explain the concept of communalism and how it affects Indian society.",
            answer: "- Patriarchy: Male dominance in society. | - Negative: Can lead to communalism and conflict. | - Caste and Society: Caste divisions continue to exist."
          },
          {
            question: "What is the relationship between caste and politics in India?",
            answer: "A. Caste System in India: | C. Caste in Politics: | - Caste Politics: Can lead to conflict. | B. Secularism in India:"
          },
        ]
      },
      {
        id: "civics-ch4",
        title: "Political Parties",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Political Parties - Revision Lecture" },
        revise: {
          summary: "1. Meaning and Functions of Political Parties Definition:** A group of people who come together to contest elections and hold power in the",
          bullets: [
            "Definition: A group of people who come together to contest elections and hold power in the",
            "Contest Elections: Present candidates for elections",
            "Formulate Policies: Develop programmes and policies",
            "Mobilise Public Opinion: Shape public opinion",
            "Form Government: Form the government if they win",
            "Opposition: Criticise the government",
            "Only one party is allowed to exist",
            "Example: China (Communist Party)",
            "Two major parties dominate",
            "Example: USA (Democrats and Republicans), UK (Labour and Conservatives)",
            "Several parties compete for power",
            "Example: India (BJP, INC, AAP, etc.)",
            "Features: Often leads to coalition governments",
            "National Party: Secure at least 6% of votes in any four states and win at least 4 Lok Sabha",
            "State Party: Secure at least 6% of votes in a state and win at least 2 Assembly seats",
            "1. Indian National Congress (INC):",
          ]
        },
        practice: [
          {
            question: "What is a political party?",
            answer: "A. One-Party System: | - Only one party is allowed to exist. | - Example: China (Communist Party). | B. Two-Party System:"
          },
          {
            question: "What are the functions of a political party?",
            answer: "A. One-Party System: | - Only one party is allowed to exist. | - Example: China (Communist Party). | B. Two-Party System:"
          },
          {
            question: "What is a national party?",
            answer: "- National Party: Secure at least 6% of votes in any four states and win at least 4 Lok Sabha | 7. Nationalist Congress Party (NCP): | A. One-Party System: | - Only one party is allowed to exist."
          },
          {
            question: "What is a state party?",
            answer: "- National Party: Secure at least 6% of votes in any four states and win at least 4 Lok Sabha | - State Party: Secure at least 6% of votes in a state and win at least 2 Assembly seats. | A. One-Party System: | - Only one party is allowed to exist."
          },
          {
            question: "Explain the role of political parties in a democracy.",
            answer: "- Two major parties dominate. | - Several parties compete for power. | B. Major National Parties: | - Ideology: Anti-corruption, participatory democracy."
          },
          {
            question: "Describe the national and regional parties in India.",
            answer: "B. Major National Parties: | 1. Indian National Congress (INC): | C. Major Regional Parties: | - Two major parties dominate."
          },
          {
            question: "What are the reforms needed to strengthen political parties in India?",
            answer: "- Two major parties dominate. | - Several parties compete for power. | - Example: India (BJP, INC, AAP, etc.). | B. Major National Parties:"
          },
        ]
      },
      {
        id: "civics-ch5",
        title: "Outcomes Of Democracy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Outcomes Of Democracy - Revision Lecture" },
        revise: {
          summary: "1. Democracy as a Form of Government Accountability: The government is accountable to the people.",
          bullets: [
            "Accountability: The government is accountable to the people",
            "Responsiveness: The government responds to the needs of the people",
            "Legitimacy: The government is legitimate because it is elected by the people",
            "Legitimacy: Democracy gives legitimacy to the government",
            "Accountability: Governments are accountable to the people",
            "Transparency: Decisions are made in a transparent manner",
            "Rights: Democracy ensures the protection of fundamental rights",
            "Economic Development: Democracy does not guarantee rapid economic development",
            "Reduction of Inequality: Democracy aims to reduce inequality",
            "Poverty Reduction: Democratic governments try to reduce poverty",
            "Accommodation of Social Diversity: Democracy accommodates diverse social groups",
            "Reduction of Conflict: Democracy helps in resolving conflicts peacefully",
            "Dignity of People: Democracy enhances the dignity of citizens",
            "Equality: Democracy promotes equality",
            "Rule of Law: Democracy ensures the rule of law",
            "Judicial Independence: An independent judiciary protects rights",
          ]
        },
        practice: [
          {
            question: "What is democracy?",
            answer: "- Legitimacy: Democracy gives legitimacy to the government. | - Rights: Democracy ensures the protection of fundamental rights. | - Economic Development: Democracy does not guarantee rapid economic development. | - Reduction of Inequality: Democracy aims to reduce inequality."
          },
          {
            question: "What is accountability?",
            answer: "- Accountability: The government is accountable to the people. | - Accountability: Governments are accountable to the people."
          },
          {
            question: "What is transparency?",
            answer: "- Transparency: Decisions are made in a transparent manner. | - Free Media: Media ensures transparency."
          },
          {
            question: "What is the rule of law?",
            answer: "- Rule of Law: Democracy ensures the rule of law."
          },
          {
            question: "Evaluate the outcomes of democracy.",
            answer: "A. Political Outcomes: | - Legitimacy: Democracy gives legitimacy to the government. | - Rights: Democracy ensures the protection of fundamental rights. | B. Economic Outcomes:"
          },
          {
            question: "How does democracy accommodate social diversity?",
            answer: "- Accommodation of Social Diversity: Democracy accommodates diverse social groups. | - Accommodation: Democracy accommodates diverse social groups. | - Economic Development: Democracy does not guarantee rapid economic development. | - Legitimacy: Democracy gives legitimacy to the government."
          },
          {
            question: "What is the importance of freedom and dignity in democracy?",
            answer: "- Dignity of People: Democracy enhances the dignity of citizens. | - Legitimacy: Democracy gives legitimacy to the government. | - Rights: Democracy ensures the protection of fundamental rights. | - Economic Development: Democracy does not guarantee rapid economic development."
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
          summary: "1. Resources: Definition and Classification Definition:** Everything available in our environment that can be used to satisfy our needs,",
          bullets: [
            "Definition: Everything available in our environment that can be used to satisfy our needs,",
            "provided it is technologically accessible, economically feasible, and culturally acceptable",
            "Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock)",
            "Abiotic Resources: Non-living (e.g., minerals, rocks, water, air)",
            "B. On the Basis of Exhaustibility:",
            "Renewable Resources: Can be replenished (e.g., solar energy, wind, water, forests)",
            "Non-Renewable Resources: Cannot be replenished (e.g., fossil fuels, minerals)",
            "Individual Resources: Owned by individuals (e.g., land, house)",
            "Community Resources: Owned by the community (e.g., village ponds, public parks)",
            "National Resources: Owned by the nation (e.g., forests, wildlife, minerals)",
            "International Resources: Regulated by international bodies (e.g., oceanic resources",
            "D. On the Basis of Status of Development:",
            "Potential Resources: Resources whose quantity is unknown but can be used (e.g., solar",
            "Developed Resources: Resources whose quantity and quality are known and are being",
            "Reserve Resources: A subset of developed resources that can be used in the future",
            "Stock Resources: Resources that are not yet used due to lack of technology",
          ]
        },
        practice: [
          {
            question: "Define resources.",
            answer: "Classification of Resources: | - Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock). | - Abiotic Resources: Non-living (e.g., minerals, rocks, water, air). | - Renewable Resources: Can be replenished (e.g., solar energy, wind, water, forests)."
          },
          {
            question: "What is sustainable development?",
            answer: "Agenda 21: A global plan of action for sustainable development adopted at the Earth | Principles of Sustainable Development: | D. On the Basis of Status of Development: | Definition: Development that meets the needs of the present without compromising the"
          },
          {
            question: "What is Agenda 21?",
            answer: "Agenda 21: A global plan of action for sustainable development adopted at the Earth"
          },
          {
            question: "Name the different types of soil found in India.",
            answer: "Types of Soils in India: | Total Land Area of India: 3.28 million sq. km. | Land Use Pattern in India: | - Effects: Loss of soil fertility, desertification, soil erosion."
          },
          {
            question: "Explain the classification of resources with examples.",
            answer: "Classification of Resources: | - Biotic Resources: Obtained from the biosphere (e.g., forests, wildlife, livestock). | - Abiotic Resources: Non-living (e.g., minerals, rocks, water, air). | - Renewable Resources: Can be replenished (e.g., solar energy, wind, water, forests)."
          },
          {
            question: "Describe the different types of soils found in India and their distribution.",
            answer: "Types of Soils in India: | Total Land Area of India: 3.28 million sq. km. | Land Use Pattern in India: | - Distribution: Northern plains, river valleys."
          },
          {
            question: "What is sustainable development? Explain its importance.",
            answer: "Agenda 21: A global plan of action for sustainable development adopted at the Earth | Principles of Sustainable Development: | D. On the Basis of Status of Development: | Definition: Development that meets the needs of the present without compromising the"
          },
        ]
      },
      {
        id: "geography-ch2",
        title: "Forest And Wildlife Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Forest And Wildlife Resources - Revision Lecture" },
        revise: {
          summary: "1. Biodiversity and Its Importance Biodiversity:** The variety of plants, animals, and microorganisms living in a particular area.",
          bullets: [
            "Biodiversity: The variety of plants, animals, and microorganisms living in a particular area",
            "Maintains ecological balance",
            "Provides food, medicine, and raw materials",
            "Supports livelihoods",
            "Cultural and aesthetic value",
            "One of the 17 mega-diverse countries",
            "Has about 8% of the world's species",
            "47,000 plant species and 90,000 animal species",
            "A. Tropical Rainforests (Evergreen Forests):",
            "Regions: Western Ghats, Northeast India",
            "Characteristics: Dense; trees have broad leaves; evergreen",
            "Examples: Ebony, mahogany, rosewood",
            "B. Tropical Deciduous Forests (Monsoon Forests):",
            "Regions: Most of India",
            "Characteristics: Trees shed leaves in the dry season",
            "Moist Deciduous: Teak, sal, sandalwood",
          ]
        },
        practice: [
          {
            question: "What is biodiversity?",
            answer: "Biodiversity: The variety of plants, animals, and microorganisms living in a particular area. | Importance of Biodiversity: | India's Biodiversity: | - Biosphere Reserves: Areas that preserve biodiversity and promote sustainable"
          },
          {
            question: "What is Project Tiger?",
            answer: "- Project Tiger (1973): To protect tigers and their habitat. | - Endangered: Tiger, lion, elephant, rhino, crocodile, leopard. | - Project Elephant (1992): To protect elephants."
          },
          {
            question: "Name the different types of forests in India.",
            answer: "India's Biodiversity: | A. Tropical Rainforests (Evergreen Forests): | - Regions: Western Ghats, Northeast India. | B. Tropical Deciduous Forests (Monsoon Forests):"
          },
          {
            question: "What is a biosphere reserve?",
            answer: "- Biosphere Reserves: Areas that preserve biodiversity and promote sustainable | - Reserved Forests: Most protected; illegal activities are prohibited."
          },
          {
            question: "Describe the various types of forests found in India with examples.",
            answer: "India's Biodiversity: | A. Tropical Rainforests (Evergreen Forests): | - Regions: Western Ghats, Northeast India. | B. Tropical Deciduous Forests (Monsoon Forests):"
          },
          {
            question: "Explain the conservation measures taken by the Indian government to protect wildlife.",
            answer: "- Indian Wildlife Protection Act (1972): Provides legal protection to wildlife. | - Wildlife Sanctuaries: Protected areas where hunting is prohibited, but some activities are | - Characteristics: Salt-tolerant; protect coastlines. | - Rare: Great Indian bustard, musk deer."
          },
          {
            question: "Discuss the role of local communities in forest conservation.",
            answer: "- Joint Forest Management (JFM): Local communities and the forest department work | A. Tropical Rainforests (Evergreen Forests): | B. Tropical Deciduous Forests (Monsoon Forests): | C. Thorn Forests:"
          },
        ]
      },
      {
        id: "geography-ch3",
        title: "Water Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Water Resources - Revision Lecture" },
        revise: {
          summary: "Definition:** Lack of sufficient water to meet the needs of a region. Causes of Water Scarcity:**",
          bullets: [
            "Definition: Lack of sufficient water to meet the needs of a region",
            "Overpopulation: Increased demand for water",
            "Urbanisation: Increased water consumption",
            "Industrialisation: Industries use large amounts of water and pollute water sources",
            "Agriculture: Irrigation consumes a lot of water",
            "Water Pollution: Contaminates water sources",
            "Climate Change: Changes in rainfall patterns",
            "Deforestation: Reduces water retention",
            "Overexploitation: Excessive withdrawal of groundwater",
            "Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood",
            "Irrigation for agriculture",
            "Hydroelectric power generation",
            "Fisheries development",
            "Displacement of people",
            "Loss of biodiversity",
            "Environmental degradation",
          ]
        },
        practice: [
          {
            question: "What is water scarcity?",
            answer: "Causes of Water Scarcity: | Definition: Lack of sufficient water to meet the needs of a region. | 1. Overpopulation: Increased demand for water. | 2. Urbanisation: Increased water consumption."
          },
          {
            question: "What are multipurpose river projects?",
            answer: "- One of the largest multipurpose projects in India. | Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood | - Controls floods in the Damodar River basin. | - Built on the Mahanadi River."
          },
          {
            question: "Name any two multipurpose river projects in India.",
            answer: "- One of the largest multipurpose projects in India. | Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood | - Controls floods in the Damodar River basin. | - Built on the Mahanadi River."
          },
          {
            question: "What is rainwater harvesting?",
            answer: "A. Rainwater Harvesting: | - Collecting and storing rainwater for future use."
          },
          {
            question: "Describe the various multipurpose river projects in India and their significance.",
            answer: "- One of the largest multipurpose projects in India. | Definition: Projects that serve multiple purposes, such as irrigation, power generation, flood | - Controls floods in the Damodar River basin. | - Built on the Mahanadi River."
          },
          {
            question: "What is water scarcity? Explain its causes and suggest measures to conserve water.",
            answer: "Causes of Water Scarcity: | - Managing the entire watershed (area drained by a river) to conserve water and prevent | Definition: Lack of sufficient water to meet the needs of a region. | 1. Overpopulation: Increased demand for water."
          },
          {
            question: "Discuss the role of traditional rainwater harvesting in India.",
            answer: "A. Rainwater Harvesting: | - One of the largest multipurpose projects in India. | - Collecting and storing rainwater for future use. | - Traditional Methods:"
          },
        ]
      },
      {
        id: "geography-ch4",
        title: "Agriculture",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Agriculture - Revision Lecture" },
        revise: {
          summary: "1. Importance of Agriculture Largest sector in India: Provides livelihood to more than 50% of the population.",
          bullets: [
            "Largest sector in India: Provides livelihood to more than 50% of the population",
            "Contribution to GDP: About 14-15%",
            "Provider of Food: Ensures food security",
            "Supplies Raw Material: For various industries (textiles, sugar, etc.)",
            "Exports: Agricultural products are a major source of foreign exchange",
            "A. Primitive Subsistence Farming:",
            "Characteristics: Simple tools, dependence on natural factors, low productivity",
            "Examples: Shifting cultivation (Jhumming in Northeast India)",
            "B. Intensive Subsistence Farming:",
            "Characteristics: High labour inputs, high use of fertilisers, high productivity",
            "Used in: Densely populated areas",
            "Characteristics: Large-scale production, use of modern technology, market-oriented",
            "Examples: Plantation agriculture (tea, coffee, rubber)",
            "Characteristics: Labour-intensive, large estates, commercial crops",
            "Examples: Tea, coffee, rubber, sugarcane",
            "A. Kharif Season (Rainy Season):",
          ]
        },
        practice: [
          {
            question: "What is the importance of agriculture in India?",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population. | - Examples: Shifting cultivation (Jhumming in Northeast India). | - Examples: Plantation agriculture (tea, coffee, rubber). | D. Plantation Agriculture:"
          },
          {
            question: "Name the cropping seasons in India.",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population. | - Examples: Shifting cultivation (Jhumming in Northeast India). | - India: Second largest producer of rice. | - India: Second largest producer of wheat."
          },
          {
            question: "What are the Kharif crops?",
            answer: "- Characteristics: Labour-intensive, large estates, commercial crops. | A. Kharif Season (Rainy Season): | - Crops: Rice, maize, jowar, bajra, cotton, jute, groundnut. | - Crops: Wheat, barley, gram, mustard, peas, linseed."
          },
          {
            question: "What are the Rabi crops?",
            answer: "- Characteristics: Labour-intensive, large estates, commercial crops. | - Crops: Rice, maize, jowar, bajra, cotton, jute, groundnut. | B. Rabi Season (Winter Season): | - Crops: Wheat, barley, gram, mustard, peas, linseed."
          },
          {
            question: "Describe the major crops of India and the regions where they are grown.",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population. | - Exports: Agricultural products are a major source of foreign exchange. | - Examples: Shifting cultivation (Jhumming in Northeast India). | - Characteristics: Labour-intensive, large estates, commercial crops."
          },
          {
            question: "What are the challenges faced by Indian agriculture? How can they be overcome?",
            answer: "- Examples: Plantation agriculture (tea, coffee, rubber). | D. Plantation Agriculture:"
          },
          {
            question: "Explain the different types of farming in India with examples.",
            answer: "- Largest sector in India: Provides livelihood to more than 50% of the population. | A. Primitive Subsistence Farming: | - Examples: Shifting cultivation (Jhumming in Northeast India). | B. Intensive Subsistence Farming:"
          },
        ]
      },
      {
        id: "geography-ch5",
        title: "Minerals And Energy Resources",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Minerals And Energy Resources - Revision Lecture" },
        revise: {
          summary: "1. Minerals: Definition and Classification Mineral:** A homogeneous, naturally occurring substance with a definable internal structure.",
          bullets: [
            "Mineral: A homogeneous, naturally occurring substance with a definable internal structure",
            "Ferrous Minerals: Contain iron (e.g., iron ore, manganese)",
            "Non-Ferrous Minerals: Do not contain iron (e.g., copper, bauxite, lead, zinc)",
            "Precious Metals: Gold, silver, platinum",
            "Examples: Limestone, mica, salt, coal, petroleum",
            "Examples: Coal, petroleum, natural gas",
            "Haematite: Best quality; 60-70% iron",
            "Magnetite: Good quality; 70% iron",
            "Major Producing States: Odisha, Jharkhand, Chhattisgarh, Karnataka, Goa",
            "Uses: Making steel and alloys",
            "Major Producing States: Odisha, Karnataka, Madhya Pradesh, Maharashtra",
            "Uses: Electrical and electronic industries",
            "Major Producing States: Rajasthan, Madhya Pradesh, Jharkhand",
            "Uses: Making aluminium",
            "Major Producing States: Odisha, Gujarat, Jharkhand, Maharashtra",
            "Uses: Electrical and electronic industries (insulator)",
          ]
        },
        practice: [
          {
            question: "What are metallic minerals? Give examples.",
            answer: "A. Metallic Minerals: | B. Non-Metallic Minerals: | Classification of Minerals: | - Ferrous Minerals: Contain iron (e.g., iron ore, manganese)."
          },
          {
            question: "Name the two types of iron ore.",
            answer: "- Ferrous Minerals: Contain iron (e.g., iron ore, manganese). | - Non-Ferrous Minerals: Do not contain iron (e.g., copper, bauxite, lead, zinc). | - Haematite: Best quality; 60-70% iron. | - Magnetite: Good quality; 70% iron."
          },
          {
            question: "What are non-metallic minerals? Give examples.",
            answer: "A. Metallic Minerals: | B. Non-Metallic Minerals: | Classification of Minerals: | - Ferrous Minerals: Contain iron (e.g., iron ore, manganese)."
          },
          {
            question: "Name the major coal-producing states in India.",
            answer: "- Major Producing States: Odisha, Jharkhand, Chhattisgarh, Karnataka, Goa. | - Major Producing States: Odisha, Karnataka, Madhya Pradesh, Maharashtra. | - Major Producing States: Rajasthan, Madhya Pradesh, Jharkhand. | - Major Producing States: Odisha, Gujarat, Jharkhand, Maharashtra."
          },
          {
            question: "Describe the major minerals found in India and their distribution.",
            answer: "Classification of Minerals: | A. Metallic Minerals: | - Ferrous Minerals: Contain iron (e.g., iron ore, manganese). | - Non-Ferrous Minerals: Do not contain iron (e.g., copper, bauxite, lead, zinc)."
          },
          {
            question: "Explain the different types of energy resources in India.",
            answer: "Conservation of Energy Resources: | C. Energy Minerals: | A. Conventional Sources of Energy: | B. Non-Conventional Sources of Energy:"
          },
          {
            question: "What are the non-conventional sources of energy? Why are they important?",
            answer: "A. Conventional Sources of Energy: | B. Non-Conventional Sources of Energy: | Conservation of Energy Resources: | C. Energy Minerals:"
          },
        ]
      },
      {
        id: "geography-ch6",
        title: "Manufacturing Industries",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Manufacturing Industries - Revision Lecture" },
        revise: {
          summary: "1. Importance of Manufacturing Definition:** The process of converting raw materials into finished goods.",
          bullets: [
            "Definition: The process of converting raw materials into finished goods",
            "Modernises agriculture",
            "Reduces dependence on primary sector",
            "Provides employment",
            "Earns foreign exchange",
            "A. On the Basis of Raw Materials:",
            "Agro-Based: Use agricultural products (e.g., cotton textiles, sugar, jute)",
            "Mineral-Based: Use minerals (e.g., iron and steel, cement)",
            "Public Sector: Owned and managed by the government",
            "Private Sector: Owned and managed by private individuals",
            "Joint Sector: Owned by both government and private individuals",
            "Cooperative Sector: Owned by producers or consumers",
            "Large Scale: Capital intensive, high production (e.g., iron and steel, textiles)",
            "Small Scale: Labour intensive, low production (e.g., handlooms, handicrafts)",
            "Significance: Core industry; provides raw material for other industries",
            "Inputs: Iron ore, coal, limestone, manganese",
          ]
        },
        practice: [
          {
            question: "What is manufacturing?",
            answer: "Definition: The process of converting raw materials into finished goods. | - Modernises agriculture. | - Reduces dependence on primary sector."
          },
          {
            question: "Name the major iron and steel plants in India.",
            answer: "- Mineral-Based: Use minerals (e.g., iron and steel, cement). | - Large Scale: Capital intensive, high production (e.g., iron and steel, textiles). | A. Iron and Steel Industry: | - Inputs: Iron ore, coal, limestone, manganese."
          },
          {
            question: "What are the major cotton textile centres in India?",
            answer: "- Agro-Based: Use agricultural products (e.g., cotton textiles, sugar, jute). | B. Cotton Textile Industry: | - Major Centres: Mumbai, Surat, Ahmedabad, Coimbatore, Kanpur. | - Major Centres: Mumbai, Chennai, Hyderabad, Bengaluru."
          },
          {
            question: "What is industrial pollution?",
            answer: "- Water Pollution: From industrial effluents. | Types of Pollution: | - Air Pollution: From chimneys and furnaces. | - Noise Pollution: From machinery."
          },
          {
            question: "Classify industries with examples.",
            answer: "- Significance: Core industry; provides raw material for other industries."
          },
          {
            question: "Describe the major industries in India and their distribution.",
            answer: "- Significance: Core industry; provides raw material for other industries. | - Major Centres: Mumbai, Surat, Ahmedabad, Coimbatore, Kanpur. | - Significance: Major agro-based industry. | - Major States: Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu."
          },
          {
            question: "Discuss the factors that influence the location of industries.",
            answer: "- Significance: Core industry; provides raw material for other industries."
          },
        ]
      },
      {
        id: "geography-ch7",
        title: "Lifelines Of National Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Lifelines Of National Economy - Revision Lecture" },
        revise: {
          summary: "1. Transportation and Its Importance Importance of Transportation:**",
          bullets: [
            "Connects different regions",
            "Facilitates trade and commerce",
            "Enables movement of goods and people",
            "Supports economic development",
            "Roadways: Most common and flexible",
            "Railways: Large-scale transportation of goods and people",
            "Waterways: Cheapest for heavy goods",
            "Airways: Fastest but most expensive",
            "Pipelines: For transportation of liquids and gases",
            "Connects rural and urban areas",
            "Provides door-to-door service",
            "National Highways: Connect state capitals and major cities",
            "State Highways: Connect state capitals with district headquarters",
            "District Roads: Connect district headquarters with other areas",
            "Village Roads: Connect villages to the nearest town",
            "Large-scale transportation",
          ]
        },
        practice: [
          {
            question: "What are the main topics covered in this chapter?",
            answer: "Review all sections in the revision notes. Focus on definitions, equations, and key processes."
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
          summary: "1. What is Development? Definition:** Improvement in the quality of life and well-being of people.",
          bullets: [
            "Definition: Improvement in the quality of life and well-being of people",
            "Different Notions of Development:",
            "Income: Higher income",
            "Health: Better health facilities",
            "Education: Better education",
            "Security: Social and economic security",
            "Freedom: Freedom of choice",
            "Income: The main indicator of development",
            "Other Goals: Equal treatment, freedom, security, respect",
            "B. Different People, Different Goals:",
            "Rich: Want more money and luxury",
            "Poor: Want basic needs and security",
            "Landless: Want land and employment",
            "Women: Want equality and empowerment",
            "Definition: Development that benefits the country as a whole",
            "Gross Domestic Product (GDP): Total value of all goods and services produced in a",
          ]
        },
        practice: [
          {
            question: "What is development?",
            answer: "Different Notions of Development: | - Income: The main indicator of development. | Definition: Development that benefits the country as a whole. | - Human Development Index (HDI): Combines income, education, and health."
          },
          {
            question: "What is GDP?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "What is per capita income?",
            answer: "- Per Capita Income: National income divided by population. | 1. Gross National Income (GNI) per capita. | - Income: Higher income. | A. Income and Other Goals:"
          },
          {
            question: "What is HDI?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "What is development? Explain the different indicators of development.",
            answer: "Different Notions of Development: | - Income: The main indicator of development. | Definition: Development that benefits the country as a whole. | - Human Development Index (HDI): Combines income, education, and health."
          },
          {
            question: "Compare the economic and non-economic indicators of development.",
            answer: "- Security: Social and economic security. | - Does not include non-economic activities. | Different Notions of Development: | - Income: The main indicator of development."
          },
          {
            question: "What is sustainable development? Why is it important?",
            answer: "Different Notions of Development: | - Income: The main indicator of development. | Definition: Development that benefits the country as a whole. | - Human Development Index (HDI): Combines income, education, and health."
          },
        ]
      },
      {
        id: "economics-ch2",
        title: "Sectors Of The Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Sectors Of The Indian Economy - Revision Lecture" },
        revise: {
          summary: "1. Classification of Economic Activities A. On the Basis of Nature of Work:**",
          bullets: [
            "A. On the Basis of Nature of Work:",
            "Extraction of natural resources",
            "Examples: Agriculture, mining, fishing, forestry",
            "Called: Agriculture and allied activities",
            "Largest employer: In India, the primary sector employs the most people",
            "Processing of raw materials",
            "Examples: Manufacturing, construction, electricity generation",
            "Called: Industrial sector",
            "Examples: Transport, education, health, banking, tourism",
            "Called: Service sector",
            "Owned and managed by the government",
            "Examples: Railways, defence, public utilities",
            "Owned and managed by individuals or private companies",
            "Examples: Reliance, Tata, private hospitals",
            "Regular employment, job security, fixed salary, benefits",
            "Examples: Government employees, corporate employees",
          ]
        },
        practice: [
          {
            question: "What is the primary sector?",
            answer: "1. Primary Sector: | - Largest employer: In India, the primary sector employs the most people. | - Primary Sector: About 15%. | - Primary Sector: Employs the most people (about 45%)."
          },
          {
            question: "What is the secondary sector?",
            answer: "2. Secondary Sector: | - Secondary Sector: About 25%. | - Secondary Sector: About 25%. | B. Secondary Sector:"
          },
          {
            question: "What is the tertiary sector?",
            answer: "3. Tertiary Sector: | - Tertiary Sector: Largest contribution (about 60%). | - Tertiary Sector: About 30%. | C. Tertiary Sector:"
          },
          {
            question: "What is the organised sector?",
            answer: "3. Organised Sector: | 4. Unorganised Sector: | A. Organised Sector: | B. Unorganised Sector:"
          },
          {
            question: "Explain the classification of economic activities with examples.",
            answer: "1. Economic Activities: | 2. Non-Economic Activities: | - Called: Agriculture and allied activities. | - Activities that add value to the economy."
          },
          {
            question: "Discuss the role of the primary, secondary, and tertiary sectors in the Indian economy.",
            answer: "1. Primary Sector: | - Largest employer: In India, the primary sector employs the most people. | 2. Secondary Sector: | 3. Tertiary Sector:"
          },
          {
            question: "What are the problems in the unorganised sector? Suggest measures to address them.",
            answer: "4. Unorganised Sector: | B. Unorganised Sector: | 1. Primary Sector: | - Largest employer: In India, the primary sector employs the most people."
          },
        ]
      },
      {
        id: "economics-ch3",
        title: "Money And Credit",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Money And Credit - Revision Lecture" },
        revise: {
          summary: "1. Money: Evolution and Functions A. Evolution of Money:**",
          bullets: [
            "Barter System: Exchange of goods for goods",
            "Problems: Double coincidence of wants, lack of standard unit of value, difficulty in storing",
            "Commodity Money: Used items like cattle, grains, cowrie shells",
            "Metallic Money: Gold, silver, copper coins",
            "Paper Money: Currency notes",
            "Digital Money: Credit cards, debit cards, UPI",
            "Medium of Exchange: Used to buy and sell goods and services",
            "Measure of Value: Value of goods and services is measured in terms of money",
            "Store of Value: Can be saved and used later",
            "Standard of Deferred Payment: Used for future payments",
            "Borrowing money for a certain period with the promise to repay with interest",
            "Banks: Provide loans at lower interest rates",
            "Cooperatives: Provide loans to members",
            "Advantages: Lower interest rates, regulated",
            "Disadvantages: Require collateral, strict terms",
            "Moneylenders: Provide loans at high interest rates",
          ]
        },
        practice: [
          {
            question: "What is money?",
            answer: "A. Evolution of Money: | - Commodity Money: Used items like cattle, grains, cowrie shells. | - Metallic Money: Gold, silver, copper coins. | - Paper Money: Currency notes."
          },
          {
            question: "What are the functions of money?",
            answer: "B. Functions of Money: | A. Evolution of Money: | - Commodity Money: Used items like cattle, grains, cowrie shells. | - Metallic Money: Gold, silver, copper coins."
          },
          {
            question: "What is credit?",
            answer: "- Digital Money: Credit cards, debit cards, UPI. | A. What is Credit? | B. Sources of Credit: | 2. Providing credit to members."
          },
          {
            question: "What is the barter system?",
            answer: "- Barter System: Exchange of goods for goods."
          },
          {
            question: "Describe the functions of money.",
            answer: "B. Functions of Money: | A. Evolution of Money: | - Commodity Money: Used items like cattle, grains, cowrie shells. | - Metallic Money: Gold, silver, copper coins."
          },
          {
            question: "Compare the formal and informal sources of credit.",
            answer: "2. Informal Sources: | B. Sources of Credit: | 1. Formal Sources: | - Friends and Relatives: Informal loans."
          },
          {
            question: "What is the role of Self-Help Groups in the empowerment of women?",
            answer: "Definition: Small groups of people (usually women) who pool their savings and provide loans | 4. Empowerment of women. | - Empowerment of women. | - Helps in overcoming poverty."
          },
        ]
      },
      {
        id: "economics-ch4",
        title: "Globalisation And The Indian Economy",
        watch: { videoUrl: "https://youtu.be/dQw4w9WgXcQ", title: "Globalisation And The Indian Economy - Revision Lecture" },
        revise: {
          summary: "1. What is Globalisation? Definition:** The process of integration of different countries through trade, investment, and",
          bullets: [
            "Definition: The process of integration of different countries through trade, investment, and",
            "Economic Globalisation: Integration of economies",
            "Cultural Globalisation: Exchange of ideas, culture, and practices",
            "Political Globalisation: Interdependence of nations",
            "Information Technology: Computers, internet, mobile phones",
            "Transport Technology: Faster and cheaper transport",
            "Communication Technology: Telegraph, telephone, satellite",
            "Removal of trade barriers",
            "Reduction of tariffs",
            "Encouragement of foreign investment",
            "3. Multinational Corporations (MNCs):",
            "Companies that operate in multiple countries",
            "They set up production units in different countries to reduce costs",
            "Examples: Coca-Cola, Toyota, Samsung, Reliance",
            "4. International Organisations:",
            "WTO (World Trade Organisation): Regulates international trade",
          ]
        },
        practice: [
          {
            question: "What is globalisation?",
            answer: "- Economic Globalisation: Integration of economies. | - Cultural Globalisation: Exchange of ideas, culture, and practices. | - Political Globalisation: Interdependence of nations. | - Make globalisation more equitable."
          },
          {
            question: "What is trade liberalisation?",
            answer: "2. Trade Liberalisation: | Definition: The process of integration of different countries through trade, investment, and | - Removal of trade barriers. | - WTO (World Trade Organisation): Regulates international trade."
          },
          {
            question: "What is an MNC?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "What is the WTO?",
            answer: "Review the revision notes for this chapter carefully."
          },
          {
            question: "Discuss the impact of globalisation on the Indian economy.",
            answer: "- Economic Globalisation: Integration of economies. | - Cultural Globalisation: Exchange of ideas, culture, and practices. | - Political Globalisation: Interdependence of nations. | A. Positive Impact:"
          },
          {
            question: "What are the factors enabling globalisation?",
            answer: "- Economic Globalisation: Integration of economies. | - Cultural Globalisation: Exchange of ideas, culture, and practices. | - Political Globalisation: Interdependence of nations. | - Make globalisation more equitable."
          },
          {
            question: "What are the struggles for a fair globalisation?",
            answer: "- Anti-Globalisation Movements: Protests against unfair trade practices. | - Economic Globalisation: Integration of economies. | - Cultural Globalisation: Exchange of ideas, culture, and practices. | - Political Globalisation: Interdependence of nations."
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
