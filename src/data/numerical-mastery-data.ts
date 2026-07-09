// ⚡ Physics Numerical Mastery - Real Data from PDF
// Structure: Chapter → Topic → Formula → Solved Example → PYQ
// Source: "Physics_Guide_GoogleDocs_Ready.md" - CBSE PYQs

export interface SolvedExample {
  year?: number;
  question: string;
  steps: string[];
  finalAnswer: string;
}

export interface PYQQuestion {
  year: number;
  question: string;
  steps: string[];
  finalAnswer: string;
}

export interface NumericalTopic {
  id: string;
  name: string;
  formula: string;
  formulaDescription: string;
  solvedExample: SolvedExample;
  pyqs: PYQQuestion[];
  aiTip?: string;
}

export interface NumericalChapter {
  id: string;
  name: string;
  icon: string;
  color: string;
  topics: NumericalTopic[];
}

export const numericalMasteryData: NumericalChapter[] = [
  {
    "id": "light-reflection-and-refraction",
    "name": "LIGHT – REFLECTION AND REFRACTION",
    "icon": "☀️",
    "color": "#F59E0B",
    "topics": [
      {
        "id": "mirror-formula",
        "name": "MIRROR FORMULA",
        "formula": "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}",
        "formulaDescription": "Relates focal length (f), image distance (v), and object distance (u) for spherical mirrors. **New Cartesian Sign Convention:** - Distances measured from the pole - Direction of incident light is positive - For concave mirrors: f and v are negative (real images) - For convex mirrors: f and v are positive ---",
        "solvedExample": {
          "year": 2024,
          "question": "An object is placed at 30 cm from the pole of a concave mirror. Its real and inverted image is formed at 60 cm in front of the mirror. Find the focal length.",
          "steps": [
            "u = –30 cm, v = –60 cm",
            "\\frac{1}{f} = \\frac{1}{-60} + \\frac{1}{-30} = -\\frac{1}{60} - \\frac{2}{60} = -\\frac{3}{60}",
            "f = -20 \\text{ cm}"
          ],
          "finalAnswer": "f = –20 cm"
        },
        "pyqs": [
          {
            "year": 2025,
            "question": "An object is placed at a distance of 30 cm from the optical centre of a concave lens of focal length 20 cm. Use Lens formula to determine the position of the image formed.",
            "steps": [
              "u = –30 cm, f = –20 cm",
              "\\frac{1}{-20} = \\frac{1}{v} - \\frac{1}{-30}",
              "\\frac{1}{v} = -\\frac{1}{20} - \\frac{1}{30} = -\\frac{3}{60} - \\frac{2}{60} = -\\frac{5}{60}",
              "v = -12 \\text{ cm}"
            ],
            "finalAnswer": "v = –12 cm (virtual, same side as object)"
          },
          {
            "year": 2023,
            "question": "To obtain a magnification of +2 with a concave mirror of radius of curvature 60 cm, what should be the object distance?",
            "steps": [
              "R = 60 cm ⇒ f = –30 cm, m = +2 (virtual, erect)",
              "m = –v/u ⇒ 2 = –v/u ⇒ v = –2u",
              "\\frac{1}{-30} = \\frac{1}{-2u} + \\frac{1}{u} = -\\frac{1}{2u} + \\frac{1}{u} = \\frac{1}{2u}",
              "⇒ u = –15 cm"
            ],
            "finalAnswer": "u = –15 cm"
          },
          {
            "year": 2024,
            "question": "An object of height 5 cm is placed at a distance of 20 cm from the optical centre of a converging lens of focal length 15 cm. Find the position and size of the image.",
            "steps": [
              "u = –20 cm, f = +15 cm",
              "\\frac{1}{15} = \\frac{1}{v} - \\frac{1}{-20} = \\frac{1}{v} + \\frac{1}{20}",
              "\\frac{1}{v} = \\frac{1}{15} - \\frac{1}{20} = \\frac{4}{60} - \\frac{3}{60} = \\frac{1}{60}",
              "v = +60 \\text{ cm}",
              "Magnification: m = v/u = 60/(-20) = –3",
              "h' = m × h = –3 × 5 = –15 cm"
            ],
            "finalAnswer": "v = +60 cm (real), image height = 15 cm (inverted)"
          },
          {
            "year": 2023,
            "question": "A convex mirror used for rear-view on an automobile has a focal length of 3.0 m. If a bus is located at 6.0 m from this mirror, find the position of the image.",
            "steps": [
              "f = +3.0 m, u = –6.0 m",
              "\\frac{1}{3} = \\frac{1}{v} + \\frac{1}{-6}",
              "\\frac{1}{v} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}",
              "v = +2.0 \\text{ m}"
            ],
            "finalAnswer": "v = +2.0 m (virtual, behind the mirror)"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "magnification-for-mirrors",
        "name": "MAGNIFICATION FOR MIRRORS",
        "formula": "m = -\\frac{v}{u} = \\frac{h'}{h}",
        "formulaDescription": "- Negative m → real, inverted image - Positive m → virtual, erect image - |m| > 1 → magnified; |m| < 1 → diminished ---",
        "solvedExample": {
          "year": 2025,
          "question": "A convex lens forms an 8.0 cm image of a 2.0 cm object. Object and image are on the same side. Find the magnification and nature of the image.",
          "steps": [
            "m = h'/h = 8/2 = +4 (positive → virtual, erect)"
          ],
          "finalAnswer": "m = +4, virtual and erect"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A convex mirror used for rear view on an automobile has a focal length of 1.5 m. If a 3 m high bus is located at 6.0 m from the mirror, determine the position and size of the image.",
            "steps": [
              "f = +1.5 m, u = –6.0 m, h = 3 m",
              "\\frac{1}{1.5} = \\frac{1}{v} + \\frac{1}{-6}",
              "\\frac{1}{v} = \\frac{1}{1.5} + \\frac{1}{6} = \\frac{2}{3} + \\frac{1}{6} = \\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}",
              "v = 1.2 \\text{ m}",
              "m = –v/u = –1.2/(-6) = +0.2",
              "h' = m × h = 0.2 × 3 = 0.6 m"
            ],
            "finalAnswer": "v = +1.2 m (virtual), image height = 0.6 m"
          },
          {
            "year": 2023,
            "question": "A concave mirror forms a real, inverted and same size image. If the image distance is 30 cm, find the object distance.",
            "steps": [
              "For same size image with concave mirror: m = –1",
              "m = –v/u = –1 ⇒ v = u",
              "Also, when object is at 2F: v = u = 30 cm"
            ],
            "finalAnswer": "u = –30 cm"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "lens-formula",
        "name": "LENS FORMULA",
        "formula": "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}",
        "formulaDescription": "- Object distance (u) is always negative - Convex lens: f is positive - Concave lens: f is negative - Real image: v positive; virtual image: v negative ---",
        "solvedExample": {
          "year": 2024,
          "question": "The focal length of a lens is –10 cm. Find its power and nature. If an object is placed at a distance of 20 cm from the optical centre, find the sign of magnification.",
          "steps": [
            "P = 1/f = 1/(-0.1) = –10 D → Concave lens",
            "For concave lens: u = –20 cm, f = –10 cm",
            "\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = -\\frac{1}{10} - \\frac{1}{20} = -\\frac{3}{20}",
            "v = -\\frac{20}{3} \\text{ cm}",
            "m = v/u = (-20/3)/(-20) = +1/3"
          ],
          "finalAnswer": "P = –10 D (concave), m = +1/3"
        },
        "pyqs": [
          {
            "year": 2025,
            "question": "The focal length of a lens is –10 cm. Write the nature of the lens and find its power. If an object is placed at 20 cm from the optical centre, what will be the sign of magnification?",
            "steps": [
              "f = –10 cm = –0.1 m → Concave lens",
              "P = 1/f = 1/(-0.1) = –10 D",
              "u = –20 cm, f = –10 cm",
              "\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = -\\frac{1}{10} - \\frac{1}{20} = -\\frac{3}{20}",
              "v = -\\frac{20}{3} \\text{ cm}",
              "m = v/u = (-20/3)/(-20) = +1/3"
            ],
            "finalAnswer": "Concave lens, P = –10 D, m = +1/3"
          },
          {
            "year": 2023,
            "question": "An object is placed at a distance of 60 cm from a concave lens of focal length 30 cm. Use lens formula to find the position of the image formed.",
            "steps": [
              "u = –60 cm, f = –30 cm",
              "\\frac{1}{-30} = \\frac{1}{v} - \\frac{1}{-60} = \\frac{1}{v} + \\frac{1}{60}",
              "\\frac{1}{v} = -\\frac{1}{30} - \\frac{1}{60} = -\\frac{2}{60} - \\frac{1}{60} = -\\frac{3}{60} = -\\frac{1}{20}",
              "v = -20 \\text{ cm}"
            ],
            "finalAnswer": "v = –20 cm (virtual, same side)"
          },
          {
            "year": 2024,
            "question": "From the observation table, find the focal length of the convex lens without calculation (where u = v).",
            "steps": [
              "When object is at 2F, u = v = 50 cm ⇒ 2f = 50 ⇒ f = 25 cm"
            ],
            "finalAnswer": "f = 25 cm"
          },
          {
            "year": 2023,
            "question": "An object is placed at a distance of 30 cm in front of a concave mirror of focal length 20 cm. Use mirror formula to determine the position of the image.",
            "steps": [
              "u = –30 cm, f = –20 cm",
              "\\frac{1}{-20} = \\frac{1}{v} + \\frac{1}{-30}",
              "\\frac{1}{v} = -\\frac{1}{20} + \\frac{1}{30} = -\\frac{3}{60} + \\frac{2}{60} = -\\frac{1}{60}",
              "v = -60 \\text{ cm}"
            ],
            "finalAnswer": "v = –60 cm (real, inverted)"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "magnification-for-lenses",
        "name": "MAGNIFICATION FOR LENSES",
        "formula": "m = \\frac{v}{u} = \\frac{h'}{h}",
        "formulaDescription": "- Positive m → virtual, erect image - Negative m → real, inverted image ---",
        "solvedExample": {
          "year": 2024,
          "question": "For u = –30 cm, v = +150 cm, find the magnification.",
          "steps": [
            "m = v/u = 150/(-30) = –5"
          ],
          "finalAnswer": "m = –5 (real, inverted, magnified 5×)"
        },
        "pyqs": [
          {
            "year": 2023,
            "question": "A 4 cm tall object is placed perpendicular to the principal axis of a convex lens of focal length 24 cm. The distance of the object from the lens is 16 cm. Find the position and size of the image.",
            "steps": [
              "u = –16 cm, f = +24 cm, h = 4 cm",
              "\\frac{1}{24} = \\frac{1}{v} - \\frac{1}{-16} = \\frac{1}{v} + \\frac{1}{16}",
              "\\frac{1}{v} = \\frac{1}{24} - \\frac{1}{16} = \\frac{2}{48} - \\frac{3}{48} = -\\frac{1}{48}",
              "v = -48 \\text{ cm}",
              "m = v/u = (-48)/(-16) = +3",
              "h' = m × h = 3 × 4 = 12 cm"
            ],
            "finalAnswer": "v = –48 cm (virtual), image height = 12 cm (erect)"
          },
          {
            "year": 2025,
            "question": "A convex lens of focal length 20 cm forms a real image of an object placed at 30 cm. Find the magnification.",
            "steps": [
              "u = –30 cm, f = +20 cm",
              "\\frac{1}{20} = \\frac{1}{v} - \\frac{1}{-30} = \\frac{1}{v} + \\frac{1}{30}",
              "\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3}{60} - \\frac{2}{60} = \\frac{1}{60}",
              "v = +60 \\text{ cm}",
              "m = v/u = 60/(-30) = –2"
            ],
            "finalAnswer": "m = –2 (real, inverted, magnified 2×)"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "power-of-a-lens",
        "name": "POWER OF A LENS",
        "formula": "P = \\frac{1}{f} \\quad \\text{(f in metres)} **Unit:** Dioptre (D)",
        "formulaDescription": "- Convex lens: positive power (converging) - Concave lens: negative power (diverging) ---",
        "solvedExample": {
          "year": 2025,
          "question": "Power of a lens is –2.5 D. (a) Identify the lens. (b) Find its focal length. (c) Which eye defect does it correct?",
          "steps": [
            "(a) Negative → Concave lens",
            "(b) f = 1/P = 1/(–2.5) = –0.4 m = –40 cm",
            "(c) Corrects myopia (nearsightedness)"
          ],
          "finalAnswer": "(a) Concave, (b) –40 cm, (c) Myopia"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A lens of power +4.0 D is used. What is its focal length and nature?",
            "steps": [
              "f = 1/P = 1/4 = 0.25 m = 25 cm",
              "Positive power → Convex lens"
            ],
            "finalAnswer": "f = 25 cm, Convex lens"
          },
          {
            "year": 2023,
            "question": "A lens has power –0.25 D. (a) What type of lens is it? (b) Find its focal length. (c) Which eye defect does it correct?",
            "steps": [
              "(a) Negative → Concave lens",
              "(b) f = 1/P = 1/(–0.25) = –4 m = –400 cm",
              "(c) Corrects myopia (nearsightedness)"
            ],
            "finalAnswer": "Concave lens, f = –400 cm, Myopia"
          },
          {
            "year": 2024,
            "question": "The power of a lens is +4D. Find its focal length. An object is placed at 50 cm from the optical centre of this lens. State the nature and magnification of the image formed.",
            "steps": [
              "f = 1/4 = 0.25 m = 25 cm",
              "u = –50 cm, f = +25 cm",
              "\\frac{1}{25} = \\frac{1}{v} - \\frac{1}{-50} = \\frac{1}{v} + \\frac{1}{50}",
              "\\frac{1}{v} = \\frac{1}{25} - \\frac{1}{50} = \\frac{2}{50} - \\frac{1}{50} = \\frac{1}{50}",
              "v = +50 \\text{ cm}",
              "m = v/u = 50/(-50) = –1"
            ],
            "finalAnswer": "f = 25 cm, m = –1 (real, inverted, same size)"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "combination-of-lenses",
        "name": "COMBINATION OF LENSES",
        "formula": "P = P_1 + P_2 \\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}",
        "formulaDescription": "When thin lenses are placed in contact, their powers add algebraically. ---",
        "solvedExample": {
          "year": 2024,
          "question": "A concave lens (f = –2 m) and a convex lens (f = +1.5 m) are placed in contact. What type of lens does the combination behave as?",
          "steps": [
            "P₁ = 1/(–2) = –0.5 D, P₂ = 1/1.5 = +0.667 D",
            "P = –0.5 + 0.667 = +0.167 D (positive) ⇒ behaves as a convex lens"
          ],
          "finalAnswer": "Convex lens"
        },
        "pyqs": [
          {
            "year": 2023,
            "question": "A lens combination consists of a convex lens of focal length 30 cm and a concave lens of focal length 15 cm placed together. Find the equivalent focal length and power.",
            "steps": [
              "P₁ = 1/0.3 = +3.33 D, P₂ = 1/(–0.15) = –6.67 D",
              "P = 3.33 – 6.67 = –3.34 D",
              "f = 1/P = –0.3 m = –30 cm"
            ],
            "finalAnswer": "P = –3.34 D, f = –30 cm (concave combination)"
          },
          {
            "year": 2024,
            "question": "Two lenses are placed in contact. One is a concave lens with focal length 2 m and the other is a convex lens with focal length 1.5 m. What type of lens will the combination behave as?",
            "steps": [
              "P₁ = 1/(–2) = –0.5 D, P₂ = 1/1.5 = +0.667 D",
              "P = –0.5 + 0.667 = +0.167 D",
              "Positive → Convex lens"
            ],
            "finalAnswer": "Convex lens"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "refractive-index-snell-s-law",
        "name": "REFRACTIVE INDEX & SNELL'S LAW",
        "formula": "Refer to description",
        "formulaDescription": "Snell's law relates angles of incidence and refraction. Refractive index also equals the ratio of speed of light in vacuum to speed in the medium. ---",
        "solvedExample": {
          "year": 2025,
          "question": "Speed of light in diamond? Given n = 2.42, c = 3×10⁸ m/s.",
          "steps": [
            "v = c/n = 3×10⁸ / 2.42 ≈ 1.24×10⁸ m/s"
          ],
          "finalAnswer": "1.24×10⁸ m/s"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "Refractive indices: glass = 1.5, water = 1.33, CS₂ = 1.62. If light falls at the same angle, write the increasing order of the angle of refraction.",
            "steps": [
              "Higher n → smaller r",
              "Order of r (smallest to largest): CS₂ (1.62) < glass (1.5) < water (1.33)"
            ],
            "finalAnswer": "CS₂ < Glass < Water"
          },
          {
            "year": 2023,
            "question": "Absolute refractive indices of diamond and water are 2.42 and 1.33 respectively. Find the value of refractive index of water w.r.t. diamond.",
            "steps": [
              "n(water w.r.t diamond) = n(water)/n(diamond) = 1.33/2.42 ≈ 0.55"
            ],
            "finalAnswer": "0.55"
          },
          {
            "year": 2024,
            "question": "A ray of light enters from medium A to medium B. If the speed of light in medium A is vA and in medium B is vB, what is the refractive index of B with respect to A?",
            "steps": [
              "n_B/A = vA/vB"
            ],
            "finalAnswer": "n_B/A = vA/vB"
          },
          {
            "year": 2023,
            "question": "Absolute refractive indices of glass and water are 3/2 and 4/3 respectively. If speed of light in glass is 2×10⁸ m/s, find the speed of light in water.",
            "steps": [
              "n(water)/n(glass) = (4/3)/(3/2) = 8/9",
              "v(water) = v(glass) × n(glass)/n(water) = 2×10⁸ × (3/2)/(4/3)",
              "= 2×10⁸ × (9/8) = 2.25×10⁸ m/s"
            ],
            "finalAnswer": "2.25×10⁸ m/s"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      }
    ]
  },
  {
    "id": "electricity",
    "name": "ELECTRICITY",
    "icon": "⚡",
    "color": "#3B82F6",
    "topics": [
      {
        "id": "ohm-s-law",
        "name": "OHM'S LAW",
        "formula": "V = I R ---",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2025,
          "question": "An electric motor rated 1100 W is connected to 220 V. Find the current drawn.",
          "steps": [
            "P = VI ⇒ I = P/V = 1100/220 = 5 A"
          ],
          "finalAnswer": "5 A"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "Three resistors 10Ω, 20Ω, 30Ω are in parallel across 10 V. Find the total resistance and the current drawn.",
            "steps": [
              "1/Rp = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60",
              "Rp = 60/11 Ω",
              "I = V/Rp = 10/(60/11) = 11/6 A"
            ],
            "finalAnswer": "Rp = 60/11 Ω, I = 11/6 A"
          },
          {
            "year": 2023,
            "question": "A student has four cells of 1.5 V each, a resistor, a key, an ammeter, a voltmeter and few connecting wires. Draw a labelled circuit diagram to study Ohm's law. State the relationship between V and I.",
            "steps": [
              "V = IR (Ohm's law)",
              "The V-I graph is a straight line passing through the origin."
            ],
            "finalAnswer": "V ∝ I (at constant temperature)"
          },
          {
            "year": 2024,
            "question": "An electric bulb connected to 220 V supply draws 500 mA current. Find its power.",
            "steps": [
              "P = VI = 220 × 0.5 = 110 W"
            ],
            "finalAnswer": "110 W"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "resistance-in-series",
        "name": "RESISTANCE IN SERIES",
        "formula": "R_s = R_1 + R_2 + R_3 + \\dots ---",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2023,
          "question": "Four identical resistors of 8 Ω each are connected in series. Find the equivalent resistance.",
          "steps": [
            "Rₛ = 4 × 8 = 32 Ω"
          ],
          "finalAnswer": "32 Ω"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "Six cells of 2 V each, a 6Ω, 12Ω and 18Ω resistor are connected in series with a key. Calculate (i) the current, (ii) potential difference across 18Ω resistor, (iii) power consumed in 18Ω resistor.",
            "steps": [
              "Total voltage = 6 × 2 = 12 V",
              "Rₛ = 6 + 12 + 18 = 36 Ω",
              "(i) I = 12/36 = 1/3 A",
              "(ii) V = IR = (1/3) × 18 = 6 V",
              "(iii) P = I²R = (1/3)² × 18 = 2 W"
            ],
            "finalAnswer": "(i) 1/3 A, (ii) 6 V, (iii) 2 W"
          },
          {
            "year": 2025,
            "question": "What should be the current rating of the electric circuit (220 V) so that an electric iron of 1 kW power rating can be operated?",
            "steps": [
              "I = P/V = 1000/220 ≈ 4.55 A",
              "Minimum rating should be 5 A"
            ],
            "finalAnswer": "5 A"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "resistance-in-parallel",
        "name": "RESISTANCE IN PARALLEL",
        "formula": "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\dots ---",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2023,
          "question": "Four identical resistors of 8 Ω each are connected in parallel. Find the equivalent resistance.",
          "steps": [
            "Rₚ = 8/4 = 2 Ω"
          ],
          "finalAnswer": "2 Ω"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "Three resistors of 6Ω, 4Ω and 4Ω are connected together so that the total resistance is 8Ω. Draw a diagram and give reason.",
            "steps": [
              "Connect the two 4Ω resistors in parallel first:",
              "1/Rp = 1/4 + 1/4 = 1/2 ⇒ Rp = 2Ω",
              "Then connect this combination in series with the 6Ω resistor:",
              "R_total = 6 + 2 = 8Ω"
            ],
            "finalAnswer": "6Ω in series with parallel combination of two 4Ω resistors"
          },
          {
            "year": 2023,
            "question": "Three resistors of 2Ω, 3Ω and 6Ω are connected in parallel. Find the equivalent resistance.",
            "steps": [
              "1/Rp = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1",
              "Rp = 1 Ω"
            ],
            "finalAnswer": "1 Ω"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "resistivity",
        "name": "RESISTIVITY",
        "formula": "\\rho = \\frac{R A}{L} **SI unit:** Ω·m ---",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2025,
          "question": "A wire of radius 0.01 cm and length 1.0 cm has resistance 7 Ω. Calculate its resistivity.",
          "steps": [
            "r = 10⁻⁴ m, A = π × 10⁻⁸ m², L = 10⁻² m",
            "ρ = RA/L = 7 × π × 10⁻⁸ / 10⁻² = 7π × 10⁻⁶ ≈ 22 × 10⁻⁶ Ω·m"
          ],
          "finalAnswer": "22 × 10⁻⁶ Ω·m"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A wire of radius 0.01 cm has resistance 10 Ω. Resistivity is 50 × 10⁻⁸ Ω·m. Find the length of the wire. (Given π = 22/7)",
            "steps": [
              "r = 0.01 cm = 10⁻⁴ m",
              "A = πr² = π × 10⁻⁸ m²",
              "ρ = 50 × 10⁻⁸ Ω·m = 5 × 10⁻⁷ Ω·m",
              "L = RA/ρ = 10 × π × 10⁻⁸ / (5 × 10⁻⁷)",
              "= 10 × (22/7) × 10⁻⁸ / (5 × 10⁻⁷)",
              "= (220/7) × 10⁻¹ = (220/7) × 0.1 = 22/7 ≈ 3.14 m"
            ],
            "finalAnswer": "3.14 m"
          },
          {
            "year": 2023,
            "question": "The resistance of a wire of 0.01 cm radius is 14 Ω. If the resistivity of the wire is 44 × 10⁻⁸ Ω·m, find the length of the wire. (Given π = 22/7)",
            "steps": [
              "r = 10⁻⁴ m, A = π × 10⁻⁸ m²",
              "L = RA/ρ = 14 × π × 10⁻⁸ / (44 × 10⁻⁸)",
              "= 14π/44 = (14 × 22/7)/44 = 44/44 = 1 m"
            ],
            "finalAnswer": "1 m"
          },
          {
            "year": 2024,
            "question": "A copper wire has diameter 0.2 mm and resistivity 1.6×10⁻⁸ Ω·m. What length of wire is needed to make its resistance 14 Ω? If the diameter is doubled, how does the resistance change?",
            "steps": [
              "r = 0.1 mm = 10⁻⁴ m, A = π × 10⁻⁸ m²",
              "L = RA/ρ = 14 × π × 10⁻⁸ / (1.6 × 10⁻⁸)",
              "= 14π/1.6 = 14 × 3.14/1.6 = 27.5 m",
              "If diameter is doubled, area becomes 4 times",
              "New R = ρL/(4A) = R/4 = 14/4 = 3.5 Ω"
            ],
            "finalAnswer": "Length = 27.5 m, Resistance reduces to 3.5 Ω"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "joule-s-law-of-heating",
        "name": "JOULE'S LAW OF HEATING",
        "formula": "Refer to description",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2025,
          "question": "An electric iron of resistance 20 Ω draws 5 A. Heat developed in 30 s?",
          "steps": [
            "H = I²Rt = 5² × 20 × 30 = 15000 J"
          ],
          "finalAnswer": "15000 J"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A 5 Ω resistor is connected across a 6 V battery. Calculate the energy dissipated as heat in 10 s.",
            "steps": [
              "H = V²t/R = 6² × 10 / 5 = 72 J"
            ],
            "finalAnswer": "72 J"
          },
          {
            "year": 2023,
            "question": "An electric iron of resistance 20 Ω draws a current of 5 A. Find the heat developed in 30 seconds.",
            "steps": [
              "H = I²Rt = 5² × 20 × 30 = 15000 J"
            ],
            "finalAnswer": "15000 J"
          },
          {
            "year": 2024,
            "question": "A voltage source sends a current of 2 A to a resistor of 40 Ω connected across it for 5 minutes. Calculate the electrical energy supplied by the source.",
            "steps": [
              "t = 5 × 60 = 300 s",
              "H = I²Rt = 2² × 40 × 300 = 48000 J"
            ],
            "finalAnswer": "48000 J"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "electric-power",
        "name": "ELECTRIC POWER",
        "formula": "Refer to description",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2025,
          "question": "An electric iron consumes energy at a rate of 880 W (max) and 330 W (min) at 220 V. Find current and resistance in each case.",
          "steps": [
            "Maximum: I = 880/220 = 4 A, R = 220/4 = 55 Ω",
            "Minimum: I = 330/220 = 1.5 A, R = 220/1.5 ≈ 146.67 Ω"
          ],
          "finalAnswer": "Max: 4 A, 55 Ω; Min: 1.5 A, 146.67 Ω"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A bulb connected to 220 V draws 500 mA. Find its power.",
            "steps": [
              "P = 220 × 0.5 = 110 W"
            ],
            "finalAnswer": "110 W"
          },
          {
            "year": 2023,
            "question": "Define electric power. Express it in terms of potential difference (V) and resistance (R).",
            "steps": [
              "P = VI = V²/R = I²R"
            ],
            "finalAnswer": "P = VI = V²/R = I²R"
          },
          {
            "year": 2024,
            "question": "An electric oven is designed to work on 220 V. It consumes 11 units of electrical energy in 5 hours. Calculate (a) power rating, (b) current drawn, (c) resistance when red hot.",
            "steps": [
              "Energy = 11 kWh",
              "(a) P = E/t = 11/5 = 2.2 kW = 2200 W",
              "(b) I = P/V = 2200/220 = 10 A",
              "(c) R = V²/P = 220²/2200 = 22 Ω"
            ],
            "finalAnswer": "(a) 2200 W, (b) 10 A, (c) 22 Ω"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      },
      {
        "id": "electric-energy",
        "name": "ELECTRIC ENERGY",
        "formula": "Refer to description",
        "formulaDescription": "Formula application",
        "solvedExample": {
          "year": 2025,
          "question": "In a house, 3 bulbs of 100 W each are used for 5 hours daily, and a 1 kW heater is used for 0.5 hours daily. Calculate the total energy consumed in 30 days and its cost at ₹3.60 per kWh.",
          "steps": [
            "Bulbs: 3 × 100 × 5 = 1500 Wh = 1.5 kWh/day",
            "Heater: 1 × 0.5 = 0.5 kWh/day",
            "Total per day = 2 kWh → 30 days = 60 kWh",
            "Cost = 60 × 3.60 = ₹216"
          ],
          "finalAnswer": "60 kWh, ₹216"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "A 1100 W motor is used for 5 hours daily for 6 days. Calculate the energy consumed.",
            "steps": [
              "E = 1.1 kW × 5 h × 6 = 33 kWh"
            ],
            "finalAnswer": "33 kWh"
          },
          {
            "year": 2023,
            "question": "In a house, 2 bulbs of 50 W each are used for 6 hours daily and an electric geyser of 1 kW is used for 1 hour daily. Calculate the total energy consumed in a month of 30 days and its cost at ₹8.00 per kWh.",
            "steps": [
              "Bulbs: 2 × 50 × 6 = 600 Wh = 0.6 kWh/day",
              "Geyser: 1 × 1 = 1 kWh/day",
              "Total per day = 1.6 kWh → 30 days = 48 kWh",
              "Cost = 48 × 8 = ₹384"
            ],
            "finalAnswer": "48 kWh, ₹384"
          },
          {
            "year": 2024,
            "question": "In a house, 3 bulbs of 100 W each are lit for 5 hours daily and a 1.0 kW heater is used for half an hour daily. Calculate the total energy consumed in 30 days and its cost at ₹3.60 per kWh.",
            "steps": [
              "Bulbs: 3 × 100 × 5 = 1500 Wh = 1.5 kWh/day",
              "Heater: 1 × 0.5 = 0.5 kWh/day",
              "Total per day = 2 kWh → 30 days = 60 kWh",
              "Cost = 60 × 3.60 = ₹216"
            ],
            "finalAnswer": "60 kWh, ₹216"
          },
          {
            "year": 2023,
            "question": "In a house, 2 bulbs of 50 W each are used for 6 hours daily and an electric geyser of 1 kW is used for 1 hour daily. Calculate the total energy consumed in a month of 30 days and its cost at ₹8.00 per kWh.",
            "steps": [
              "Bulbs: 2 × 50 × 6 = 600 Wh = 0.6 kWh/day",
              "Geyser: 1 × 1 = 1 kWh/day",
              "Total per day = 1.6 kWh → 30 days = 48 kWh",
              "Cost = 48 × 8 = ₹384"
            ],
            "finalAnswer": "48 kWh, ₹384"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      }
    ]
  },
  {
    "id": "magnetic-effects-of-electric-current",
    "name": "MAGNETIC EFFECTS OF ELECTRIC CURRENT",
    "icon": "⚡",
    "color": "#3B82F6",
    "topics": [
      {
        "id": "force-on-a-current-carrying-conductor",
        "name": "FORCE ON A CURRENT-CARRYING CONDUCTOR",
        "formula": "Refer to description",
        "formulaDescription": "- Force is maximum when conductor ⟂ magnetic field (θ = 90°) - Force is zero when conductor ∥ magnetic field (θ = 0°) - Direction given by Fleming's Left-Hand Rule ---",
        "solvedExample": {
          "year": 2024,
          "question": "A conductor of length 0.5 m carries 2 A in a magnetic field of 0.4 T perpendicular to it. Find the force experienced.",
          "steps": [
            "F = BIL = 0.4 × 2 × 0.5 = 0.4 N"
          ],
          "finalAnswer": "0.4 N"
        },
        "pyqs": [
          {
            "year": 2024,
            "question": "When is the force on a current-carrying conductor in a magnetic field (i) maximum, (ii) minimum?",
            "steps": [
              "(i) Maximum when θ = 90° (conductor perpendicular to field)",
              "(ii) Minimum (zero) when θ = 0° (conductor parallel to field)"
            ],
            "finalAnswer": "Max at 90°, Min at 0°"
          },
          {
            "year": 2023,
            "question": "State the rule to determine the direction of force experienced by a current-carrying straight conductor placed in a magnetic field which is perpendicular to it.",
            "steps": [
              "Fleming's Left-Hand Rule: If the thumb, forefinger and middle finger of the left hand are stretched mutually perpendicular to each other such that the forefinger points in the direction of the magnetic field and the middle finger in the direction of current, then the thumb points in the direction of force."
            ],
            "finalAnswer": "Fleming's Left-Hand Rule"
          },
          {
            "year": 2024,
            "question": "An alpha particle enters a uniform magnetic field as shown. What is the direction of force?",
            "steps": [
              "Using Fleming's Left-Hand Rule or Right-Hand Rule for positive charges"
            ],
            "finalAnswer": "Force is perpendicular to both velocity and magnetic field direction"
          }
        ],
        "aiTip": "Remember to check units and sign conventions carefully!"
      }
    ]
  }
];
