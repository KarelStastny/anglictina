function createStudyProgress() {
  return {
    timesPractice: 0,
    timesCorrect: 0,
    timesIncorrect: 0,
    tested: false,
    learned: false
  };
}





export const vocabulary = [
  {
    id: "cat-noun",
    englishWord: "cat",
    accent: "ket",
    czechWord: "kočka",
    category: "animal",
    type: "noun",
    hard: "A1", 
    eliminated: false,
    englishOption: ["cat", "cats", "catt", "kitty", "kitten", "feline", "tomcat", "puss", "moggie", "tabby"],
    czechOption: ["kočka", "kocka", "kočky", "kocour", "koťátko", "macka", "mourek", "kocky", "felina", "kocur"],
    
    studyProgress: createStudyProgress()
  },
  {
    id: "dog-noun",
    englishWord: "dog",
    accent: "dog",
    czechWord: "pes",
    category: "animal",
    type: "noun",
    hard: "A1",
    eliminated: false,
    englishOption: ["dog", "dogs", "dogg", "puppy", "pooch", "canine", "mutt", "hound", "pup", "mongrel"],
    czechOption: ["pes", "pess", "psi", "stene", "pejsek", "kynolog", "kříženec", "chrt", "štěňátko", "fena"],
    
    studyProgress: createStudyProgress()
  },
  {
    id: "nonsense-noun",
    englishWord: "nonsense",
    accent: "noncins",
    czechWord: "nesmysl",
    category: "general",
    type: "noun",
    hard: "B1",
    eliminated: false,
    englishOption: ["nonsense", "balderdash", "gibberish", "hogwash", "mumbo jumbo", "rubbish", "baloney", "drivel", "poppycock", "twaddle"],
    czechOption: ["nesmysl", "blábol", "ptákovina", "hovadina", "kravina", "blbost", "nonsens", "pozorování", "absurdita", "šílenost"],
    studyProgress: createStudyProgress()
  },
  {
    id: "smart-adjective",
    englishWord: "smart",
    accent: "smát",
    czechWord: "chytrý",
    category: "adjective",
    type: "adjective",
    hard: "A2",
    eliminated: false,
    englishOption: ["smart", "intelligent", "clever", "bright", "sharp", "brainy", "shrewd", "astute", "wise", "knowledgeable"],
    czechOption: ["chytřý", "inteligentní", "bystrý", "prostředný", "ostrý", "génius", "prohnaný", "chyták", "moudrý", "znalý"],
    studyProgress: createStudyProgress()
  },
  {
    id: "bark-verb",
    englishWord: "bark",
    accent: "bák",
    czechWord: "štěkat",
    category: "animal",
    type: "verb",
    hard: "A2",
    eliminated: false,
    englishOption: ["bark", "barks", "barked", "barking", "yap", "yelp", "howl", "woof", "growl", "bay"],
    czechOption: ["štěkat", "štěkání", "štěká", "štěkl", "vrčet", "vrčení", "zavýt", "hafat", "řvát", "výt"],
    studyProgress: createStudyProgress()
  },
  {
    id: "potty-noun",
    englishWord: "potty",
    accent: "potý",
    czechWord: "nočník",
    category: "household",
    type: "noun",
    hard: "B1",
    eliminated: false,
    englishOption: ["potty", "toilet", "commode", "lavatory", "loo", "john", "latrine", "restroom", "washroom", "bathroom"],
    czechOption: ["nočník", "záchod", "toaleta", "WC", "klozet", "latrína", "umývárna", "koupelna", "veřejné WC", "sociální zařízení"],
    studyProgress: createStudyProgress()
  },
  {
    id: "top-noun",
    englishWord: "top",
    accent: "top",
    czechWord: "vršek",
    category: "general",
    type: "noun",
    hard: "A1",
    eliminated: false,
    englishOption: ["top", "peak", "summit", "apex", "pinnacle", "crest", "tip", "crown", "height", "zenith"],
    czechOption: ["vršek", "vrchol", "špička", "apex", "kulminace", "hřeben", "špice", "koruna", "výška", "zenit"],
    studyProgress: createStudyProgress()
  },
  {
    id: "house-noun",
    englishWord: "house",
    accent: "haus",
    czechWord: "dům",
    category: "architecture",
    type: "noun",
    hard: "A1",
    eliminated: false,
    englishOption: ["house", "houses", "hous", "home", "residence", "dwelling", "habitat", "abode", "building", "property"],
  czechOption: ["dum", "domy", "domu", "dom", "rezidence", "obydli", "sídlo", "staveni", "budova", "majetek"],
  studyProgress: createStudyProgress()
  },
  {
    id: "bug-noun",
    englishWord: "bug",
    accent: "bág",
    czechWord: "brouk",
    category: "nature",
    type: "noun",
    hard: "A2",
    eliminated: false,
    englishOption: ["bug", "bugs", "bugg", "insect", "beetle", "creepy-crawly", "ant", "spider", "fly", "mosquito"],
    czechOption: ["brouk", "brouci", "broucek", "hmyz", "brouček", "mravenec", "pavouk", "moucha", "komar", "červ"],
   studyProgress: createStudyProgress()
  },
  {
    id: "case-noun",
    englishWord: "case",
    accent: "kejs",
    czechWord: "případ",
    category: "general",
    type: "noun",
    hard: "B1",
    eliminated: false,
    englishOption: ["case", "cases", "casee", "instance", "example", "situation", "scenario", "occurrence", "event", "matter"],
    czechOption: ["pripad", "případy", "instance", "priklad", "situace", "scenar", "udalost", "vyskyt", "zalezitost", "problem"],
    studyProgress: createStudyProgress()
  },
  {
    id: "crush-verb",
    englishWord: "crush",
    accent: "kraš",
    czechWord: "drtit",
    category: "action",
    type: "verb",
    hard: "B2",
    eliminated: false,
    englishOption: ["crush", "crushes", "crushe", "smash", "grind", "pulverize", "shatter", "break", "squash", "compress"],
  czechOption: ["drtit", "drti", "drtí", "rozdrtit", "rozmělnit", "přeměnit", "rozbít", "přemáčknout", "komprimovat", "zničit"],
  studyProgress: createStudyProgress()
  },
  {
    id: "keyboard-noun",
    englishWord: "keyboard",
    accent: "kýbord",
    czechWord: "klávesnice",
    category: "technology",
    type: "noun",
    hard: "A2",
    eliminated: false,
    englishOption: ["keyboard", "keyboards", "keyboarde", "keypad", "synthesizer", "piano", "keys", "input device", "controller", "digital piano"],
  czechOption: ["klavesnice", "klaviatury", "klavesnici", "keypad", "syntezator", "piano", "klíče", "vstupni zarizeni", "ovladac", "digitalni piano"],
   studyProgress: createStudyProgress()
  },
  
  {
    id: "table-noun",
    englishWord: "table",
    accent: "tejbl",
    czechWord: "stůl",
    category: "furniture",
    type: "noun",
    hard: "A1",
    eliminated: false,
    englishOption: ["table", "tables", "tablee", "desk", "countertop", "workbench", "surface", "stand", "bench", "board"],
    czechOption: ["stul", "stoly", "stůly", "pult", "pracovni stul", "pracovni plocha", "podklad", "stojan", "lavice", "deska"],
    studyProgress: createStudyProgress()
  },
  {
    id: "cap-noun",
    englishWord: "cap",
    accent: "kap",
    czechWord: "čepice",
    category: "clothing",
    type: "noun",
    hard: "A2",
    eliminated: false,
    englishOption: ["cap", "caps", "capp", "hat", "beanie", "beret", "headgear", "helmet", "hood", "visor"],
    czechOption: ["cepice", "čepičky", "kšiltovka", "klobouk", "čelenka", "bareta", "hlavový kryt", "helma", "kapuce", "clona"],
    studyProgress: createStudyProgress()
  },
  
  {
    id: "glass-noun",
    englishWord: "glass",
    accent: "glás",
    czechWord: "sklenice",
    category: "household",
    type: "noun",
    hard: "A1",
    eliminated: false,
    englishOption: ["glass", "glasses", "glasse", "cup", "tumbler", "mug", "jar", "vessel", "flask", "beaker"],
    czechOption: ["sklenice", "sklenicky", "pohar", "hrnek", "miska", "nádoba", "flaška", "kelímek", "lahve", "konzerva"],
    studyProgress: createStudyProgress()
  },

  {
  id: "plate-noun",
  englishWord: "plate",
  accent: "plejt",
  czechWord: "talíř",
  category: "household",
  type: "noun",
  hard: "A1",
  eliminated: false,
  englishOption: ["plate", "plates", "platte", "dish", "tray", "platter", "bowl", "saucer", "charger", "serving dish"],
  czechOption: ["taler", "talire", "talíře", "miska", "podnos", "mísa", "miska", "talířek", "podtácek", "servírovací talíř"],
  studyProgress: createStudyProgress()
},
{
  id: "knife-noun",
  englishWord: "knife",
  accent: "knajf",
  czechWord: "nůž",
  category: "kitchenware",
  type: "noun",
  hard: "A2",
  eliminated: false,
  englishOption: ["knife", "knives", "knifee", "blade", "cutter", "dagger", "machete", "scalpel", "sheath knife", "switchblade"],
  czechOption: ["nuz", "noze", "nůže", "břitva", "řezačka", "dýka", "mačeta", "škarpeta", "pouzdrový nůž", "výsuvný nůž"],
  studyProgress: createStudyProgress()
},

{
  id: "cuttingboard-noun",
  englishWord: "cutting board",
  accent: "katyk bórd",
  czechWord: "prkénko",
  category: "kitchenware",
  type: "noun",
  hard: "B1",
  eliminated: false,
  englishOption: ["cutting board", "cuttingboard", "chopping board", "chop board", "slice board", "dicing board", "kitchen board", "wooden board", "plastic board", "butcher block"],
  czechOption: ["prkenko", "prkénka", "krájecí prkénko", "sekaná deska", "krájecí deska", "řezací prkénko", "kuchyňské prkénko", "dřevěné prkénko", "plastové prkénko", "masný blok"],
  studyProgress: createStudyProgress()
},
{
  id: "cup-noun",
  englishWord: "cup",
  accent: "kap",
  czechWord: "šálek",
  category: "household",
  type: "noun",
  hard: "A1",
  eliminated: false,
  englishOption: ["cup", "cups", "cupp", "mug", "glass", "tumbler", "teacup", "goblet", "beaker", "tankard"],
  czechOption: ["salek", "šálky", "hrnek", "sklenice", "pohár", "čajový šálek", "kalich", "kelímek", "džbán", "korbel"],
  studyProgress: createStudyProgress()
}
,
{
  id: "mouse-noun",
  englishWord: "mouse",
  accent: "maus",
  czechWord: "myš",
  category: "technology",
  type: "noun",
  hard: "A2",
  eliminated: false,
  englishOption: ["mouse", "mice", "mousee", "computer mouse", "clicker", "trackball", "pointer", "input device", "wireless mouse", "optical mouse"],
  czechOption: ["mys", "myši", "počítačová myš", "klikátko", "trackball", "ukazatel", "vstupní zařízení", "bezdrátová myš", "optická myš", "myší ukazatel"],
  studyProgress: createStudyProgress()
}
,
{
  id: "laptop-noun",
  englishWord: "laptop",
  accent: "laptop",
  czechWord: "notebook",
  category: "technology",
  type: "noun",
  hard: "A2",
  eliminated: false,
  englishOption: ["laptop", "laptops", "laptoppe", "notebook", "computer", "portable computer", "PC", "netbook", "ultrabook", "macbook"],
  czechOption: ["notebook", "notebooky", "přenosný počítač", "počítač", "portable", "PC", "netbook", "ultrabook", "macbook", "tablet"],
  studyProgress: createStudyProgress()
},
{
  id: "desk-noun",
  englishWord: "desk",
  accent: "desk",
  czechWord: "stůl",
  category: "furniture",
  type: "noun",
  hard: "A1",
  eliminated: false,
  englishOption: ["desk", "desks", "deske", "table", "workstation", "writing desk", "office desk", "computer desk", "study table", "bureau"],
  czechOption: ["stul", "stoly", "psací stůl", "pracovní stanice", "psací", "kancelářský stůl", "počítačový stůl", "studijní stůl", "sekretář", "pult"],
  studyProgress: createStudyProgress()
},
{
  id: "pencil-noun",
  englishWord: "pencil",
  accent: "pencl",
  czechWord: "tužka",
  category: "stationery",
  type: "noun",
  hard: "A1",
  eliminated: false,
  englishOption: ["pencil", "pencils", "pencilz", "lead pencil", "graphite pencil", "writing tool", "colored pencil", "mechanical pencil", "drawing pencil", "crayon"],
  czechOption: ["tuzka", "tužky", "olověná tužka", "grafitová tužka", "psací náčiní", "barevná tužka", "mechanická tužka", "kreslící tužka", "pastelka", "voskovka"],
  studyProgress: createStudyProgress()
},
{
  id: "exercise-verb",
  englishWord: "exercise",
  accent: "eksersaiz",
  czechWord: "cvičení",
  category: "health",
  type: "verb",
  hard: "A2",
  eliminated: false,
  englishOption: ["exercise", "exercises", "exercising", "workout", "train", "physical activity", "practice", "drill", "exert", "gym"],
  czechOption: ["cvičení", "cvičit", "trénink", "fyzická aktivita", "praxe", "trénovat", "vykonávat", "posilovna", "dril", "aerobik"],
  studyProgress: createStudyProgress()
},
{
  id: "goout-verb",
  englishWord: "go out",
  accent: "gou aut",
  czechWord: "jít ven",
  category: "activity",
  type: "verb",
  hard: "A1",
  eliminated: false,
  englishOption: ["go out", "going out", "went out", "leave", "exit", "depart", "step out", "get out", "hit the town", "venture out"],
  czechOption: ["jít ven", "vyjít", "odejít", "opustit", "vyrazit", "vycházet", "ukončit", "bavit se", "podniknout", "vydat se ven"],
  studyProgress: createStudyProgress()
},
{
  id: "workout-verb",
  englishWord: "work out",
  accent: "werk aut",
  czechWord: "cvičit",
  category: "health",
  type: "verb",
  hard: "A2",
  eliminated: false,
  englishOption: ["work out", "working out", "worked out", "exercise", "train", "gym", "fitness", "jogging", "running", "aerobics"],
  czechOption: ["cvičit", "trénovat", "posilovat", "fitness", "běhání", "jogging", "aerobik", "kondice", "posilovna", "kulturistika"],
  studyProgress: createStudyProgress()
},
{
  id: "keepgoing-verb",
  englishWord: "keep going",
  accent: "kip gouing",
  czechWord: "pokračovat",
  category: "motivation",
  type: "verb",
  hard: "B1",
  eliminated: false,
  englishOption: ["keep going", "continue", "go on", "proceed", "persist", "maintain", "carry on", "advance", "persevere", "press on"],
  czechOption: ["pokračovat", "pokračuj", "jít dál", "postupovat", "vytrvat", "udržet", "nepřestávat", "rozvíjet", "vytrvalost", "postoupit"],
  studyProgress: createStudyProgress()
},
{
  id: "insight-noun",
  englishWord: "insight",
  accent: "insait",
  czechWord: "porozumění",
  category: "education",
  type: "noun",
  hard: "B2",
  eliminated: false,
  englishOption: ["insight", "understanding", "perception", "awareness", "comprehension", "discernment", "clarity", "cognition", "realization", "apprehension"],
  czechOption: ["porozumění", "poznatek", "přehled", "uvědomění", "chápání", "rozlišení", "jasnost", "poznání", "realizace", "chopení"],
  studyProgress: createStudyProgress()
},
{
  id: "alleviate-verb",
  englishWord: "alleviate",
  accent: "alivieit",
  czechWord: "zmírnit",
  category: "health",
  type: "verb",
  hard: "B2",
  eliminated: false,
  englishOption: ["alleviate", "relieve", "reduce", "ease", "lessen", "mitigate", "diminish", "soften", "assuage", "lighten"],
  czechOption: ["zmírnit", "ulevit", "snížit", "usnadnit", "zmenšit", "zmírňovat", "oslabit", "zjemnit", "uklidnit", "osvětlit"],
  studyProgress: createStudyProgress()
},
{
  id: "prejudice-noun",
  englishWord: "prejudice",
  accent: "prejudis",
  czechWord: "předsudek",
  category: "social",
  type: "noun",
  hard: "B2",
  eliminated: false,
  englishOption: ["prejudice", "bias", "stereotype", "bigotry", "discrimination", "partiality", "intolerance", "injustice", "inequity", "favoritism"],
  czechOption: ["předsudek", "zaujatost", "stereotyp", "bigotnost", "diskriminace", "stranickost", "netolerantnost", "nespravedlnost", "nepravičnost", "favoritizace"],
  studyProgress: createStudyProgress()
},
{
  id: "ambiguity-noun",
  englishWord: "ambiguity",
  accent: "ambigjuiti",
  czechWord: "nejasnost",
  category: "language",
  type: "noun",
  hard: "B2",
  eliminated: false,
  englishOption: ["ambiguity", "uncertainty", "vagueness", "obscurity", "equivocation", "doubtfulness", "indistinctness", "unclearness", "opacity", "ambivalence"],
  czechOption: ["nejasnost", "neurčitost", "vágnost", "nejasná situace", "dvojznačnost", "pochybnost", "nevyhraněnost", "nezřetelnost", "neprůhlednost", "ambivalence"],
  studyProgress: createStudyProgress()
},
{
  id: "convergence-noun",
  englishWord: "convergence",
  accent: "konverjens",
  czechWord: "konvergence",
  category: "technology",
  type: "noun",
  hard: "B2",
  eliminated: false,
  englishOption: ["convergence", "confluence", "junction", "union", "merging", "meeting", "fusion", "blend", "coalescence", "integration"],
  czechOption: ["konvergence", "soutok", "spojení", "sjednocení", "sloučení", "setkání", "fúze", "směs", "splynutí", "integrace"],
  studyProgress: createStudyProgress()
},
{
  id: "eloquence-noun",
  englishWord: "eloquence",
  accent: "elokvence",
  czechWord: "výmluvnost",
  category: "communication",
  type: "noun",
  hard: "C1",
  eliminated: false,
  englishOption: ["eloquence", "articulateness", "rhetoric", "expressiveness", "persuasiveness", "fluency", "oratory", "articulation", "verbosity", "diction"],
  czechOption: ["výmluvnost", "umění rétoriky", "výraznost", "přesvědčivost", "plynulost", "řečnictví", "artikulace", "slovnost", "dikce", "formulace"],
  studyProgress: createStudyProgress()
},
{
  id: "paradigm-noun",
  englishWord: "paradigm",
  accent: "paradajm",
  czechWord: "paradigma",
  category: "science",
  type: "noun",
  hard: "C1",
  eliminated: false,
  englishOption: ["paradigm", "model", "prototype", "standard", "example", "pattern", "template", "archetype", "benchmark", "norm"],
  czechOption: ["paradigma", "model", "prototyp", "standard", "příklad", "vzor", "šablona", "archetyp", "referenční bod", "norma"],
  studyProgress: createStudyProgress()
},
{
  id: "cognizant-adjective",
  englishWord: "cognizant",
  accent: "kognizant",
  czechWord: "vědomý si",
  category: "psychology",
  type: "adjective",
  hard: "C1",
  eliminated: false,
  englishOption: ["cognizant", "aware", "conscious", "mindful", "informed", "acknowledging", "recognizing", "perceptive", "sensible", "observant"],
  czechOption: ["vědomý si", "uvědomující si", "vědomý", "pozorný", "informovaný", "uznávající", "rozpoznávající", "vnímavý", "rozumný", "pozorující"],
  studyProgress: createStudyProgress()
},
{
  id: "quintessential-adjective",
  englishWord: "quintessential",
  accent: "kwintesenshal",
  czechWord: "nejpodstatnější",
  category: "literature",
  type: "adjective",
  hard: "C1",
  eliminated: false,
  englishOption: ["quintessential", "essential", "ultimate", "typical", "perfect", "ideal", "archetypal", "classic", "model", "representative"],
  czechOption: ["nejpodstatnější", "základní", "ultimátní", "typický", "dokonalý", "ideální", "archetypální", "klasický", "modelový", "reprezentativní"],
  studyProgress: createStudyProgress()
},

{
  id: "epistemology-noun",
  englishWord: "epistemology",
  accent: "epistimoloji",
  czechWord: "epistemologie",
  category: "philosophy",
  type: "noun",
  hard: "C2",
  eliminated: false,
  englishOption: ["epistemology", "philosophy of knowledge", "theory of knowledge", "cognition study", "intellectualism", "rationalism", "empiricism", "knowledge theory", "metacognition", "philosophical study"],
  czechOption: ["epistemologie", "filozofie poznání", "teorie poznání", "studium kognice", "intelektualismus", "racionalismus", "empirismus", "teorie znalostí", "metakognice", "filozofické studium"],
  studyProgress: createStudyProgress()
},
{
  id: "incontrovertible-adjective",
  englishWord: "incontrovertible",
  accent: "inkontrovertibl",
  czechWord: "neoddiskutovatelný",
  category: "law",
  type: "adjective",
  hard: "C2",
  eliminated: false,
  englishOption: ["incontrovertible", "indisputable", "irrefutable", "undeniable", "unquestionable", "inarguable", "definitive", "absolute", "unassailable", "conclusive"],
  czechOption: ["neoddiskutovatelný", "nepopiratelný", "nevyvratitelný", "neoddiskutovatelný", "nepopíratelný", "neoddiskutovatelný", "definitivní", "absolutní", "nenapadnutelný", "završující"],
  studyProgress: createStudyProgress()
},
{
  id: "obfuscate-verb",
  englishWord: "obfuscate",
  accent: "obfuskate",
  czechWord: "zamlžit",
  category: "communication",
  type: "verb",
  hard: "C2",
  eliminated: false,
  englishOption: ["obfuscate", "confuse", "blur", "muddle", "disguise", "conceal", "befuddle", "bewilder", "veil", "cloud"],
  czechOption: ["zamlžit", "zmást", "zakalit", "zamotat", "maskovat", "skrýt", "splést", "dezorientovat", "zahalit", "zakrýt"],
  studyProgress: createStudyProgress()
},
{
  id: "pernicious-adjective",
  englishWord: "pernicious",
  accent: "pernishus",
  czechWord: "škodlivý",
  category: "health",
  type: "adjective",
  hard: "C2",
  eliminated: false,
  englishOption: ["pernicious", "harmful", "destructive", "damaging", "deadly", "toxic", "detrimental", "injurious", "baleful", "noxious"],
  czechOption: ["škodlivý", "nebezpečný", "destruktivní", "poškozující", "smrtelný", "toxický", "škodící", "ubližující", "zlověstný", "závadný"],
  studyProgress: createStudyProgress()
},



















  
 
];
