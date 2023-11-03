import { v4 as uuidv4 } from "uuid";

export const user = [
  {
    id: "karel",
    userName: "Karel",
    firstName: "Karel",
    secondName: "Svancar",
    password: "Kolotoc987",
    allStudyProgress: [
      {
        timesAllPracticed: 0,
        timesCorrect: 0,
        timesIncorrect: 0,
      },
    ],
    studyVocabulary: [
      {
        id: "dog-noun",
        englishWord: "dog",
        accent: "dok",
        czechWord: "pes",
        category: "animal",
        type: "noun",
        hard: "easy",
        englishOption: ["dog", "dogs", "dogg", "doggies", "dawg"],
        czechOption: ["pes", "psi", "pejsek", "pejsko", "psík"],
        studyProgress: [
          {
            timesPractice: 0,
            timesCorrect: 0,
            timesIncorrect:0,
            learned: false,
          },
        ],
      },
   
    ],
  },
  {
    id: "lily",
    userName: "Lily",
    firstName: "Lily",
    secondName: "Svancarová",
    password: "Kolotoc987",
  },
];
