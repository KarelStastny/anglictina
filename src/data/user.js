import { v4 as uuidv4 } from 'uuid';

export const user = [
    {
        id: uuidv4(),
        userName: "Karel",
        firstName: "Karel",
        secondName: "Svancar",
        password: "Kolotoc987", 
        allStudyProgress:[
            {
                timesAllPracticed: "1000",
                timesCorrect: "600",
                timesIncorrect: "400"
            }
        ],
        studyVocabulary:[
            {
                id: "dog-noun",
        
                englishWord: "dog",
                accent: "dok",
                czechWord: "pes",
                category: "animal",
                type: "noun",
                hard: "easy",
                englishOption: ["dogg", "dogs"],
                czechOption: ["pes", "psi", "pejsek"],
                studyProgress: [{
                    timesPractice:"10",
                    timesCorrect: "20",
                    timesIncorrect: "30",
                    learned: false,
                }]
              },
              {
                id: "run-verb",
                englishWord: "run",
                accent: "ran",
                czechWord: "běh",
                category: "sport",
                type: "verb",
                hard: "easy",
                englishOption: ["run", "rune"],
                czechOption: ["běhat", "běh", "zaběhat si"],
              },
        ]
    },
    {
        id: uuidv4(),
        userName: "Lily",
        firstName: "Lily",
        secondName: "Svancarová",
        password: "Kolotoc987"
    }
]