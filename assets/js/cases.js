// ALL CASES ON THE SITE
// The front page, the cases page and the CineGame, Programmatic and CineFun pages all read this list.
// Change a case here and upload this file; every visitor sees the change.
//
// The order here is the order on the site. Fields per case:
//   id           unique name, also used in share links (cases.html?case=<id>)
//   featured     true = shown on the front page (max 9, Pitch cases never)
//   title        headline on the card and in the popup
//   client       client name; picks the logo on the card (see caseLogos in cases-data.js)
//   category     CineGame, Programmatic, CineFun, Leadsite or Pitch
//   gameType     CineGame only: the kind of game, for the second row of filters on the cases page:
//                Quizshow, Quiz, Shuffle, Word game, Experience, Collector, Swipe Hero, Simon, Jumper,
//                SportsBall, Find object, AR, Wheel of Fortune, Build, Arcade, Catch, Shooter or Miscellaneous
//   mediaType    "video" or "image": what the popup shows first
//   cover        picture used in the popup
//   video        video link (may be "")
//   preview      short silent clip shown on the card under the mouse (made with tools/preview-clip.swift; may be left out)
//   images       pictures for the popup's gallery (may be left out); a video link here becomes a slide with a player
//   logo         optional: own logo instead of the one picked by client name
//   description  text on the card and in the popup; \n starts a new line

const siteCases = [
    // --- PROGRAMMATIC CASES: results slide + placeholder until the campaign pictures are in ---
    {
        id: "prog-3-mobile",
        title: "3",
        client: "3",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-3-mobile-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-3-mobile-results.svg"],
        description: "250,000 impressions\n35,000 vouchers with a 10.9% CTR. \nLeads: call center."
    },
    {
        id: "prog-ase",
        featured: true,
        title: "Ase",
        client: "Ase",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-ase-results.svg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/programmatic_ase_case_story.mp4",
        images: ["assets/cases/programmatic/prog-ase-results.svg", "https://storage.googleapis.com/cinemataztic-public/video/programmatic_ase_case_story.mp4"],
        description: "150,000 impressions and 20,000 vouchers with a 11.5% CTR. Leads: call center."
    },
    {
        id: "prog-royal-copenhagen",
        title: "Royal Copenhagen",
        client: "Royal Copenhagen",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-royal-copenhagen-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-royal-copenhagen-results.svg"],
        description: "350,000 impressions and 55,000 vouchers with a 5.4% CTR. Leads: newsletter sign-ups."
    },
    {
        id: "prog-magasin",
        title: "Magasin",
        client: "Magasin",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-magasin-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-magasin-results.svg"],
        description: "170,000 impressions and 25,000 vouchers with a 4.6% CTR. Leads: web traffic."
    },
    {
        id: "prog-villavilla",
        title: "VillaVilla",
        client: "VillaVilla",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-villavilla-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-villavilla-results.svg"],
        description: "50,000 impressions and 7,000 vouchers with a 12.2% CTR. Leads: web traffic."
    },
    {
        id: "prog-lego-house",
        featured: false,
        title: "LEGO House",
        client: "LEGO House",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-lego-house-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-lego-house-results.svg"],
        description: "250,000 impressions and 30,000 vouchers with a 10.4% CTR. Leads: web traffic."
    },
    {
        id: "prog-specsavers",
        featured: true,
        title: "Specsavers",
        client: "Specsavers",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-specsavers-results.svg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/programmatic_case_story_-_louis_nielsen_essence_media_final%20(1080p).mp4",
        images: ["assets/cases/programmatic/prog-specsavers-results.svg", "https://storage.googleapis.com/cinemataztic-public/video/programmatic_case_story_-_louis_nielsen_essence_media_final%20(1080p).mp4"],
        description: "160,000 impressions and 20,000 vouchers with a 11.6% CTR. Leads: web bookings."
    },
    {
        id: "prog-arla",
        title: "Arla",
        client: "Arla",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-arla-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-arla-results.svg"],
        description: "70,000 impressions and 10,000 vouchers with a 5.8% CTR. Leads: web traffic."
    },
    {
        id: "prog-lyko",
        featured: true,
        title: "LYKO",
        client: "LYKO",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-lyko-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-lyko-results.svg"],
        description: "130,000 impressions and 14,000 vouchers with a 23.1% CTR. Leads: club members."
    },
    {
        id: "nordlys",
        featured: true,
        title: "Norlys",
        client: "Norlys",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Nordlys.mp4",
        preview: "assets/video/previews/nordlys.mp4",
        description: "A CineFun game for Norlys."
    },
    {
        id: "allianz",
        featured: true,
        title: "Allianz",
        client: "Allianz",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Allianz.mp4",
        preview: "assets/video/previews/allianz.mp4",
        description: "A CineFun game for Allianz."
    },
    {
        id: "appotek",
        title: "Apotekets",
        client: "Apotekets",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Appotek.mov",
        preview: "assets/video/previews/appotek.mp4",
        description: "A CineFun game for Apotekets."
    },
    {
        id: "sygeforsikring-jumper",
        title: "Sygeforsikringen “danmark”",
        client: "Sygeforsikringen “danmark”",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/sygesikringenDK%207.mp4",
        images: ["https://storage.googleapis.com/cinemataztic-public/video/sygesikringenDK%207.mp4", "assets/cases/cinegame/sygeforsikring-jumper-results.svg"],
        preview: "assets/video/previews/sygeforsikring-jumper.mp4",
        description: "Jumper, a CineGame for Sygeforsikringen “danmark” in Danish cinemas."
    },
    {
        id: "3f-swipehero",
        title: "3F",
        client: "3F",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/3F_SwipeHero_Recording_1_DK.mov",
        preview: "assets/video/previews/3f-swipehero.mp4",
        description: "Swipe Hero, a CineGame for 3F in Danish cinemas."
    },
    {
        id: "mms-wheel",
        title: "M&M's",
        client: "M&M's",
        category: "CineGame",
        gameType: "Wheel of Fortune",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/m%26m%20wheel%20of%20fortune%20Cinegame%20EN.mp4",
        preview: "assets/video/previews/mms-wheel.mp4",
        description: "Wheel of Fortune, a CineGame for M&M's."
    },
    {
        id: "kraeftensbekaempelse-quizshow",
        title: "Kræftens Bekæmpelse",
        client: "Kræftens Bekæmpelse",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Kr%C3%A6ftensBek%C3%A6mpelse_Quiz_CutDown.mp4",
        preview: "assets/video/previews/kraeftensbekaempelse-quizshow.mp4",
        description: "Quizshow, a CineGame for Kræftens Bekæmpelse."
    },
    {
        id: "bepanthen-quizshow",
        title: "Bepanthen",
        client: "Bepanthen",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Bepanthern_QuizshowUCI_DE_1.mov",
        preview: "assets/video/previews/bepanthen-quizshow.mp4",
        description: "Quizshow, a CineGame for Bepanthen in German cinemas."
    },
    {
        id: "nordea-quizshow",
        title: "Nordea",
        client: "Nordea",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/UpdatedNordeaQuizFI-Recording.mp4",
        preview: "assets/video/previews/nordea-quizshow.mp4",
        description: "Quizshow, a CineGame for Nordea in Finnish cinemas."
    },
    {
        id: "tryg-quizshow",
        title: "Tryg",
        client: "Tryg",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Tryg_quizshow_dk_6.mp4",
        preview: "assets/video/previews/tryg-quizshow.mp4",
        description: "Quizshow, a CineGame for Tryg in Danish cinemas."
    },
    {
        id: "teknicar-quizshow",
        title: "Teknicar",
        client: "Teknicar",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Teckikcar_%202026_%20build%2027.mov",
        preview: "assets/video/previews/teknicar-quizshow.mp4",
        description: "Quizshow, a CineGame for Teknicar in Danish cinemas in 2026."
    },
    {
        id: "boozt-wheel",
        title: "Boozt",
        client: "Boozt",
        category: "CineGame",
        gameType: "Wheel of Fortune",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/no_wheel_boozt_kids_2021.mp4",
        preview: "assets/video/previews/boozt-wheel.mp4",
        description: "Wheel of Fortune, a CineGame for Boozt in Norwegian cinemas in 2021."
    },
    {
        id: "gonordic-simon",
        title: "Go Nordic Cruiseline",
        client: "Go Nordic Cruiseline",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/alivina_simon_8.mp4",
        preview: "assets/video/previews/gonordic-simon.mp4",
        description: "Simon, a CineGame for Go Nordic Cruiseline in Danish cinemas."
    },
    {
        id: "lapsimessut-simon",
        title: "Lapsimessut",
        client: "Lapsimessut",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Lapsimessut_Simon_FI_Recording_5.mov",
        preview: "assets/video/previews/lapsimessut-simon.mp4",
        description: "Simon, a CineGame for Lapsimessut in Finnish cinemas."
    },
    {
        id: "frezza-simon",
        title: "Frezza",
        client: "Frezza",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Frezza_Recording_Week13_Translated_Winner_H.264.mp4",
        preview: "assets/video/previews/frezza-simon.mp4",
        description: "Simon, a CineGame for Frezza."
    },
    {
        id: "hellofresh-simon",
        title: "HelloFresh",
        client: "HelloFresh",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/HelloFresh_Simon_Recording_3_DE.mov",
        preview: "assets/video/previews/hellofresh-simon.mp4",
        description: "Simon, a CineGame for HelloFresh in German cinemas."
    },
    {
        id: "dfds-simon",
        title: "DFDS",
        client: "DFDS",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/DFDS_Simon_Recording_6.mov",
        preview: "assets/video/previews/dfds-simon.mp4",
        description: "Simon, a CineGame for DFDS."
    },
    {
        id: "ferdifuchs-water-power",
        title: "FerdiFuchs Water Power",
        client: "FerdiFuchs",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/FerdiFuchs_Jumper_DE_2025_Recording_4.mov",
        preview: "assets/video/previews/ferdifuchs-water-power.mp4",
        description: "Jumper, a CineGame for FerdiFuchs Water Power in German cinemas in 2025."
    },
    {
        id: "ferdifuchs-ninja",
        featured: true,
        title: "FerdiFuchs Ninja",
        client: "FerdiFuchs",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Jumper_FerdiFuchsNinja_DE2026_CutDown.mp4",
        preview: "assets/video/previews/ferdifuchs-ninja.mp4",
        description: "Jumper, a CineGame for FerdiFuchs Ninja in German cinemas in 2026."
    },
    {
        id: "metropolia-jumper",
        title: "Metropolia",
        client: "Metropolia",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Jumper_Metropolia_FI2026_CutDown.mp4",
        preview: "assets/video/previews/metropolia-jumper.mp4",
        description: "Jumper, a CineGame for Metropolia in Finnish cinemas in 2026."
    },
    {
        id: "lofbergs-jumper",
        title: "Löfbergs",
        client: "Löfbergs",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Lofbergs_Jumper_Recording_4_FI.mov",
        preview: "assets/video/previews/lofbergs-jumper.mp4",
        description: "Jumper, a CineGame for Löfbergs in Finnish cinemas."
    },
    {
        id: "battery-jumper",
        featured: true,
        title: "Battery",
        client: "Battery",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Battery_Cutdown_EN.mp4",
        preview: "assets/video/previews/battery-jumper.mp4",
        description: "Jumper, a CineGame for Battery."
    },
    {
        id: "anaconda-jumper",
        title: "Anaconda – The Movie",
        client: "Anaconda – The Movie",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Anaconda_Jumper_EN2025_CutDown.mp4",
        preview: "assets/video/previews/anaconda-jumper.mp4",
        description: "Jumper, a CineGame for Anaconda – The Movie from 2025."
    },
    {
        id: "norlys-jumper",
        title: "Norlys",
        client: "Norlys",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Norlys_Cutdown_EN.mp4",
        preview: "assets/video/previews/norlys-jumper.mp4",
        description: "Jumper, a CineGame for Norlys."
    },
    {
        id: "matkahuolto-experience",
        title: "Matkahuolto",
        client: "Matkahuolto",
        category: "CineGame",
        gameType: "Experience",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Matkahoulto_FI_Recording_3.mov",
        preview: "assets/video/previews/matkahuolto-experience.mp4",
        description: "Experience, a CineGame for Matkahuolto in Finnish cinemas."
    },
    {
        id: "liikenneturva-experience",
        title: "Liikenneturva",
        client: "Liikenneturva",
        category: "CineGame",
        gameType: "Experience",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/TrafficSafetyCutdownPromo.mp4",
        preview: "assets/video/previews/liikenneturva-experience.mp4",
        description: "Experience, a CineGame for Liikenneturva in Finnish cinemas."
    },
    {
        id: "pick-up-arcade",
        title: "PICK-UP",
        client: "PICK-UP",
        category: "CineGame",
        gameType: "Arcade",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/PickUp%20Arcade%20DE%20build%206.mp4",
        preview: "assets/video/previews/pick-up-arcade.mp4",
        description: "Arcade, a CineGame for PICK-UP in German cinemas."
    },
    {
        id: "terveystalo-shooter",
        title: "Terveystalo",
        client: "Terveystalo",
        category: "CineGame",
        gameType: "Shooter",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Terveystalo_Shooter_Recording_FI_5.mp4",
        preview: "assets/video/previews/terveystalo-shooter.mp4",
        description: "Shooter, a CineGame for Terveystalo in Finnish cinemas."
    },
    {
        id: "apotekets-shuffle",
        title: "Apotekets",
        client: "Apotekets",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Apotekets_CutDown_DK.mp4",
        preview: "assets/video/previews/apotekets-shuffle.mp4",
        description: "Shuffle, a CineGame for Apotekets in Danish cinemas."
    },
    {
        id: "knorr-shuffle",
        title: "Knorr",
        client: "Knorr",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/KnorrShuffleCutdown.mp4",
        preview: "assets/video/previews/knorr-shuffle.mp4",
        description: "Shuffle, a CineGame for Knorr."
    },
    {
        id: "politiken-quiz",
        title: "Politiken",
        client: "Politiken",
        category: "CineGame",
        gameType: "Quiz",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Politikken_SimpleQuiz_Recording_2_DK.mov",
        preview: "assets/video/previews/politiken-quiz.mp4",
        description: "Quiz, a CineGame for Politiken in Danish cinemas."
    },
    {
        id: "vikingline-shuffle",
        title: "Viking Line",
        client: "Viking Line",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Viking_shuffle_FI_2026_3.mov",
        preview: "assets/video/previews/vikingline-shuffle.mp4",
        description: "Shuffle, a CineGame for Viking Line in Finnish cinemas in 2026."
    },
    {
        id: "spiderman-shuffle",
        title: "Spider-Man",
        client: "Spider-Man",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Spiderman_EN_Recording_01.mov",
        preview: "assets/video/previews/spiderman-shuffle.mp4",
        description: "Shuffle, a CineGame for Spider-Man."
    },
    {
        id: "tui-quizshow",
        title: "TUI",
        client: "TUI",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/TUI_QuizShow_Recording_DK_2.mov",
        preview: "assets/video/previews/tui-quizshow.mp4",
        description: "Quizshow, a CineGame for TUI in Danish cinemas."
    },
    {
        id: "iberdrola-quiz",
        featured: false,
        title: "Quizshow",
        client: "Iberdrola",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Iberdrola_Quiz_PT2026_CutDown.mp4",
        preview: "assets/video/previews/iberdrola-quiz.mp4",
        description: "Quizshow, a CineGame for Iberdrola in Portuguese cinemas in 2026."
    },
    {
        id: "odeon-quiz",
        title: "Quiz",
        client: "ODEON",
        category: "CineGame",
        gameType: "Quiz",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/MovieQuiz%20IE%20ODEON%202026Q4%20SimpleQuiz%20Recording%201.mp4",
        preview: "assets/video/previews/odeon-quiz.mp4",
        description: "Quiz, a CineGame for ODEON cinemas in Ireland in 2026."
    },
    {
        id: "odeon-sportsball",
        title: "Sports Ball",
        client: "ODEON",
        category: "CineGame",
        gameType: "SportsBall",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/CineGame_SportsBall_2026_IE_Recording_1.mov",
        preview: "assets/video/previews/odeon-sportsball.mp4",
        description: "Sports Ball, a CineGame for ODEON cinemas in Ireland in 2026."
    },
    {
        id: "ikea-collector",
        featured: true,
        title: "Collector",
        client: "IKEA",
        category: "CineGame",
        gameType: "Collector",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Collector_IKEA_EN2026_CutDown.mp4",
        preview: "assets/video/previews/ikea-collector.mp4",
        description: "Collector, a CineGame for IKEA from 2026."
    },
    {
        id: "kirppu",
        title: "Collector",
        client: "Kirppu",
        category: "CineGame",
        gameType: "Collector",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Kirppu_Collector_CutDown.mp4",
        preview: "assets/video/previews/kirppu.mp4",
        description: "Collector, a CineGame for Kirppu."
    },
    {
        id: "redyplay",
        title: "Collector",
        client: "REDyPLAY",
        category: "CineGame",
        gameType: "Collector",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/CineGame_Collector_DE_Recording_1.mov",
        preview: "assets/video/previews/redyplay.mp4",
        description: "Collector, a CineGame for REDyPLAY."
    },
    {
        id: "mcd-swipehero",
        title: "Swipe Hero",
        client: "McDonald's",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/McDonalds_SwipeHero_SE2024_cutdown.mp4",
        preview: "assets/video/previews/mcd-swipehero.mp4",
        description: "Swipe Hero, a CineGame for McDonald's in Swedish cinemas in 2024."
    },
    {
        id: "danone-swipehero",
        title: "Swipe Hero",
        client: "Danone",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/danone_swipehero_FinishedGame.mp4",
        preview: "assets/video/previews/danone-swipehero.mp4",
        description: "Swipe Hero, a CineGame for Danone."
    },
    {
        id: "homeguard",
        title: "Quizshow",
        client: "The Home Guard",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/QuizShow_Hjemmev%C3%A6rnet_DK2025_CutDown.mp4",
        preview: "assets/video/previews/homeguard.mp4",
        description: "Quizshow, a CineGame for the Danish Home Guard (Hjemmeværnet)."
    },
    {
        id: "santander",
        featured: true,
        title: "Swipe Hero",
        client: "Santander",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SwipeHero_Santander_DK2025_CutDown.mp4",
        preview: "assets/video/previews/santander.mp4",
        description: "Swipe Hero, a CineGame for Santander in Danish cinemas in 2025."
    },
    {
        id: "subway",
        featured: false,
        title: "Jump and stay alive",
        client: "Subway",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/subway.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SubwaySE2024-CutDown.mp4",
        preview: "assets/video/previews/subway.mp4",
        description: "A jumper game built to drive footfall: jump, stay alive and get the Footlong."
    },
    {
        id: "fanta-zip-and-ride",
        featured: false,
        title: "Fanta – Ride n' Sip",
        client: "Fanta",
        category: "CineGame",
        gameType: "Experience",
        mediaType: "video",
        cover: "assets/cases/fanta-zip-and-ride.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fanta-EN2024-Cutdown60sec%20(1).mp4",
        preview: "assets/video/previews/fanta-zip-and-ride.mp4",
        description: "An experience game promoting a new Fanta flavour. Sit back and enjoy the ride."
    },
    {
        id: "mars",
        featured: false,
        title: "M&M's – The Jumper",
        client: "M&M's + Extra",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/mms.svg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Mars_Cutdown_EN_1.mp4",
        preview: "assets/video/previews/mars.mp4",
        description: "A jumper game on the big screen for M&M's and Extra."
    },
    {
        id: "politikens-publisher",
        featured: false,
        title: "The children's book game",
        client: "Politikens Forlag",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "assets/cases/politikens-publisher.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Politiken_CutDown_DK_1.mp4",
        preview: "assets/video/previews/politikens-publisher.mp4",
        description: "A children's book game for Politikens Forlag: follow the book."
    },
    {
        id: "tivoli",
        featured: false,
        title: "The Rollercoaster",
        client: "Tivoli",
        category: "CineGame",
        gameType: "Experience",
        mediaType: "video",
        cover: "assets/cases/tivoli.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Tivoli_2023_DKmp4.mp4",
        preview: "assets/video/previews/tivoli.mp4",
        description: "A 1:1 digital version of Tivoli's iconic roller coaster, built to capture a young audience and boost ticket sales for the 180-year-old Copenhagen amusement park."
    },
    {
        id: "ikea",
        featured: false,
        title: "It is meatball Friday",
        client: "IKEA",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "assets/cases/ikea.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/IKEA_FI2024cutdown.mp4",
        preview: "assets/video/previews/ikea.mp4",
        description: "Meatball Friday comes to the big screen. Every Friday, with IKEA."
    },
    {
        id: "3dk2024",
        featured: false,
        title: "3 – No worries",
        client: "3",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "assets/cases/3dk2024.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/3Mobil_QuizShow_Cutdown_DK.mp4",
        preview: "assets/video/previews/3dk2024.mp4",
        description: "A quiz game that increases knowledge of 3's lightning fast 5G internet."
    },
    {
        id: "fazer",
        featured: false,
        title: "Fazer – Remix",
        client: "Fazer",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "assets/cases/fazer.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fazer_swipehero_10.mp4",
        preview: "assets/video/previews/fazer.mp4",
        description: "A swipe game for Fazer's re-mix MINI."
    },
    {
        id: "hummel",
        featured: false,
        title: "New official jersey",
        client: "Hummel",
        category: "CineGame",
        gameType: "Quiz",
        mediaType: "image",
        cover: "assets/cases/hummel.jpg",
        video: "",
        images: ["assets/cases/hummel/hummel-1.jpg", "assets/cases/hummel/hummel-2.jpg", "assets/cases/hummel/hummel-3.jpg", "assets/cases/hummel/hummel-4.jpg", "assets/cases/hummel/hummel-5.jpg"],
        description: "Launching the new official Danish national team jersey. Made by Denmark."
    },
    {
        id: "jdsports",
        featured: false,
        title: "King of the game",
        client: "JD Sports",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/jdsports.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/JDSports_2022_de.mp4",
        preview: "assets/video/previews/jdsports.mp4",
        description: "Run baby, run: a runner game for JD Sports."
    },
    {
        id: "samsung",
        featured: false,
        title: "Galaxy S23 Series",
        client: "Samsung",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/samsung.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SamsungGalaxy_English_Recording.mov",
        preview: "assets/video/previews/samsung.mp4",
        description: "The runner game for the Galaxy S23 series. Every player got an extra chance to win a Samsung prize in a bonus wheel of fortune after the game."
    },
    {
        id: "tv2-play",
        featured: false,
        title: "TV2 Play – Join the fun",
        client: "TV2 Play",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "assets/cases/tv2-play.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/TV2play_2023_dk.mp4",
        preview: "assets/video/previews/tv2-play.mp4",
        description: "A quizshow game for TV2 Play."
    },
    {
        id: "mcd",
        featured: false,
        title: "McDonald's – Rewards",
        client: "McDonald's",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "image",
        cover: "assets/cases/mcd.png",
        video: "",
        images: ["assets/cases/mcd/mcd-1.jpg", "assets/cases/mcd/mcd-2.jpg", "assets/cases/mcd/mcd-3.jpg", "assets/cases/mcd/mcd-4.png"],
        description: "A shuffle game built to drive app downloads: play and get the reward."
    },
    {
        id: "tryg",
        featured: false,
        title: "Tryg – Wheel of fortune",
        client: "Tryg",
        category: "CineGame",
        gameType: "Wheel of Fortune",
        mediaType: "video",
        cover: "assets/cases/tryg.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Tryg_2023_dk.mp4",
        preview: "assets/video/previews/tryg.mp4",
        description: "Spin the wheel with Tryg."
    },
    {
        id: "podimo",
        featured: false,
        title: "Your favourite stories",
        client: "Podimo",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "image",
        cover: "assets/cases/podimo.png",
        video: "",
        images: ["assets/cases/podimo/podimo-1.jpg", "assets/cases/podimo/podimo-2.jpg", "assets/cases/podimo/podimo-3.jpg", "assets/cases/podimo/podimo-4.jpg", "assets/cases/podimo/podimo-5.jpg", "assets/cases/podimo/podimo-6.jpg", "assets/cases/podimo/podimo-7.jpg"],
        description: "A shuffle game built to increase subscribers for Podimo."
    },
    {
        id: "lego-knight",
        featured: false,
        title: "LEGO – Rebuild the world",
        client: "LEGO",
        category: "CineGame",
        gameType: "Build",
        mediaType: "image",
        cover: "assets/cases/lego-knight.jpg",
        video: "",
        images: ["assets/cases/lego-knight/lego-knight-1.jpg", "assets/cases/lego-knight/lego-knight-2.jpg", "assets/cases/lego-knight/lego-knight-3.jpg", "assets/cases/lego-knight/lego-knight-4.png"],
        description: "A LEGO playzone game on the big screen."
    },
    {
        id: "arla",
        featured: false,
        title: "Arla – The Cows",
        client: "Arla",
        category: "CineGame",
        gameType: "Find object",
        mediaType: "video",
        cover: "assets/cases/arla.jpg",
        video: "assets/video/cases/arla_findobject_web_18_skiplobby.mp4",
        preview: "assets/video/previews/arla.mp4",
        description: "Each player gets a unique cow on their phone and has to find it on the cinema screen with a magnifying lens. The game brings ARLA's AR universe for children to the cinema."
    },
    {
        id: "redbull",
        featured: false,
        title: "Red Bull – Conquer the valley",
        client: "Red Bull",
        category: "CineGame",
        gameType: "Experience",
        mediaType: "video",
        cover: "assets/cases/redbull.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/redbull_nologo.mp4",
        preview: "assets/video/previews/redbull.mp4",
        description: "Guide your plane through the mountains, collect as many points as possible and avoid crashing."
    },
    {
        id: "coke-x-mas",
        featured: false,
        title: "Coca-Cola – Holidays are coming",
        client: "Coca-Cola",
        category: "CineGame",
        gameType: "Arcade",
        mediaType: "video",
        cover: "assets/cases/coke-x-mas.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Coke-cinemaarcade-DE-UK%20Gameplay.mp4",
        preview: "assets/video/previews/coke-x-mas.mp4",
        description: "Five fun little Christmas games combined in one Coke holiday game."
    },
    {
        id: "boozt",
        featured: false,
        title: "Boozt – Follow the fashion",
        client: "Boozt",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "assets/cases/boozt.jpg",
        video: "assets/video/cases/boozt_shuffle_en_web_7.mp4",
        preview: "assets/video/previews/boozt.mp4",
        description: "The Boozt.com Shuffle Game introduces five categories, one for each card. Each card presents both brand and product."
    },
    {
        id: "liiga",
        featured: false,
        title: "Liiga – Multiplayer ice hockey",
        client: "Liiga",
        category: "CineGame",
        gameType: "SportsBall",
        mediaType: "video",
        cover: "assets/cases/liiga.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/liga_nologo.mp4",
        preview: "assets/video/previews/liiga.mp4",
        description: "Team vs. team: sharpen your skates, select your team and win the trophy."
    },
    {
        id: "fanta-halloween",
        featured: false,
        title: "Halloween",
        client: "Fanta",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "assets/cases/fanta-halloween.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fanta_simon_dk_13.mp4",
        preview: "assets/video/previews/fanta-halloween.mp4",
        description: "Follow the scary one: a Halloween game for Fanta."
    },
    {
        id: "toms",
        featured: false,
        title: "Haunted House",
        client: "Toms",
        category: "CineGame",
        gameType: "Miscellaneous",
        mediaType: "image",
        cover: "assets/cases/toms.jpg",
        video: "",
        images: ["assets/cases/toms/toms-1.jpg", "assets/cases/toms/toms-2.jpg", "assets/cases/toms/toms-3.jpg", "assets/cases/toms/toms-4.png"],
        description: "Stay alive in the Haunted House and get your chocolate."
    },
    {
        id: "new-can",
        featured: false,
        title: "Coca-Cola – Coke word game",
        client: "Coca-Cola",
        category: "CineGame",
        gameType: "Word game",
        mediaType: "video",
        cover: "assets/cases/new-can.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/cokenewcans_nologo.mp4",
        preview: "assets/video/previews/new-can.mp4",
        description: "Find the words! The fastest player wins a Coke."
    },
    {
        id: "pepsimax",
        featured: false,
        title: "Max the music",
        client: "Pepsi",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "video",
        cover: "assets/cases/pepsimax.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/PepsiHero_nologo.mp4",
        preview: "assets/video/previews/pepsimax.mp4",
        description: "Hit the tones and win the prize: an ice cold Pepsi."
    },
    {
        id: "cinerunner",
        featured: false,
        title: "CineRunner",
        client: "Cinemataztic",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/cinerunner.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/CinemaRunner-EE.mp4",
        preview: "assets/video/previews/cinerunner.mp4",
        description: "Get through the magical movie city."
    },
    {
        id: "battery-black",
        featured: false,
        title: "Black energy",
        client: "Battery",
        category: "CineGame",
        gameType: "Find object",
        mediaType: "image",
        cover: "assets/cases/battery-black.jpg",
        video: "",
        images: ["assets/cases/battery-black/battery-black-1.jpg", "assets/cases/battery-black/battery-black-2.jpg", "assets/cases/battery-black/battery-black-3.jpg", "assets/cases/battery-black/battery-black-4.png"],
        description: "Join us in the night and win some sweet prizes."
    },
    {
        id: "ben-and-jerry",
        featured: false,
        title: "Ben & Jerry's – The ice cream valley game",
        client: "Ben & Jerry's",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "video",
        cover: "assets/cases/ben-and-jerry.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/BenJerrry.mp4",
        preview: "assets/video/previews/ben-and-jerry.mp4",
        description: "Developed with MindShare, the game ran simultaneously in all the Nordic countries and made Ben & Jerry's part of the cinema experience."
    },
    {
        id: "coke-maze-game",
        featured: false,
        title: "The Coke maze game",
        client: "Coca-Cola",
        category: "CineGame",
        gameType: "Collector",
        mediaType: "video",
        cover: "assets/cases/coke-maze-game.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Cokepackman_nologo.mp4",
        preview: "assets/video/previews/coke-maze-game.mp4",
        description: "Survive the maze and get the prize."
    },
    {
        id: "derby25",
        featured: false,
        title: "Ganz genau",
        client: "Bet25",
        category: "CineGame",
        gameType: "Swipe Hero",
        mediaType: "image",
        cover: "assets/cases/derby25.jpg",
        video: "",
        images: ["assets/cases/derby25/derby25-1.jpg", "assets/cases/derby25/derby25-2.jpg", "assets/cases/derby25/derby25-3.jpg", "assets/cases/derby25/derby25-4.png"],
        description: "A horse racing derby game: Reit zu, bitte schön."
    },
    {
        id: "lego-hidden-side",
        featured: false,
        title: "LEGO – AR ghost hunt",
        client: "LEGO",
        category: "CineGame",
        gameType: "AR",
        mediaType: "image",
        cover: "assets/cases/lego-hidden-side.jpg",
        video: "",
        images: ["assets/cases/lego-hidden-side/lego-hidden-side-1.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-2.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-3.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-4.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-5.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-6.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-7.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-8.png"],
        description: "The ghosts have escaped to the cinema. Catch them with your phone and become the hero of the day."
    },
    {
        id: "sonic",
        featured: false,
        title: "Are you fast?",
        client: "Sonic",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "image",
        cover: "assets/cases/sonic.jpg",
        video: "",
        images: ["assets/cases/sonic/sonic-1.jpg", "assets/cases/sonic/sonic-2.jpg", "assets/cases/sonic/sonic-3.jpg", "assets/cases/sonic/sonic-4.jpg"],
        description: "Try to keep up with Sonic and take home the prize."
    },
    {
        id: "sprite",
        featured: false,
        title: "Sprite the word",
        client: "Sprite",
        category: "CineGame",
        gameType: "Word game",
        mediaType: "image",
        cover: "assets/cases/sprite.jpg",
        video: "",
        images: ["assets/cases/sprite/sprite-1.jpg", "assets/cases/sprite/sprite-2.jpg", "assets/cases/sprite/sprite-3.jpg", "assets/cases/sprite/sprite-4.jpg", "assets/cases/sprite/sprite-5.jpg", "assets/cases/sprite/sprite-6.jpg", "assets/cases/sprite/sprite-7.png", "assets/cases/sprite/sprite-8.png"],
        description: "Join Sivas in the hunt for the word."
    },
    {
        id: "trolls",
        featured: false,
        title: "Trolls World Tour",
        client: "Trolls World Tour",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "image",
        cover: "assets/cases/trolls.jpg",
        video: "",
        images: ["assets/cases/trolls/trolls-1.jpg", "assets/cases/trolls/trolls-2.jpg", "assets/cases/trolls/trolls-3.jpg", "assets/cases/trolls/trolls-4.jpg", "assets/cases/trolls/trolls-5.png"],
        description: "A rocking music game for Trolls World Tour in Australia."
    },
    {
        id: "tuborg-derby",
        featured: false,
        title: "Let the race begin",
        client: "Tuborg",
        category: "CineGame",
        gameType: "Miscellaneous",
        mediaType: "image",
        cover: "assets/cases/tuborg-derby.jpg",
        video: "",
        images: ["assets/cases/tuborg-derby/tuborg-derby-1.jpg", "assets/cases/tuborg-derby/tuborg-derby-2.jpg", "assets/cases/tuborg-derby/tuborg-derby-3.jpg", "assets/cases/tuborg-derby/tuborg-derby-4.png"],
        description: "Welcome to the racetrack and the first Tuborg Derby."
    },
    {
        id: "mentos-friends",
        featured: false,
        title: "Complimentos",
        client: "Mentos",
        category: "CineGame",
        gameType: "Catch",
        mediaType: "image",
        cover: "assets/cases/mentos-friends.jpg",
        video: "",
        images: ["assets/cases/mentos-friends/mentos-friends-1.jpg", "assets/cases/mentos-friends/mentos-friends-2.jpg", "assets/cases/mentos-friends/mentos-friends-3.jpg", "assets/cases/mentos-friends/mentos-friends-4.jpg", "assets/cases/mentos-friends/mentos-friends-5.jpg", "assets/cases/mentos-friends/mentos-friends-6.png"],
        description: "Get the Mentos, win the prize and share it with one of the other players. Everyone wins."
    },
    {
        id: "paula",
        featured: false,
        title: "Where's Paula?",
        client: "Dr. Oetker",
        category: "CineGame",
        gameType: "Find object",
        mediaType: "image",
        cover: "assets/cases/paula.jpg",
        video: "",
        images: ["assets/cases/paula/paula-1.jpg", "assets/cases/paula/paula-2.jpg", "assets/cases/paula/paula-3.jpg", "assets/cases/paula/paula-4.jpg", "assets/cases/paula/paula-5.png"],
        description: "Find Paula and her friends. They can be everywhere."
    },
    {
        id: "coke-light",
        featured: false,
        title: "Coca-Cola – Make it light",
        client: "Coca-Cola",
        category: "CineGame",
        gameType: "Miscellaneous",
        mediaType: "image",
        cover: "assets/cases/coke-light.jpg",
        video: "",
        images: ["assets/cases/coke-light/coke-light-1.jpg", "assets/cases/coke-light/coke-light-2.jpg", "assets/cases/coke-light/coke-light-3.jpg", "assets/cases/coke-light/coke-light-4.jpg", "assets/cases/coke-light/coke-light-5.png", "assets/cases/coke-light/coke-light-6.png"],
        description: "Make it light, make it fun."
    },
    {
        id: "hbo-vikings",
        featured: false,
        title: "HBO – Vikings",
        client: "HBO",
        category: "CineGame",
        gameType: "Quiz",
        mediaType: "image",
        cover: "assets/cases/hbo-vikings.jpg",
        video: "",
        images: ["assets/cases/hbo-vikings/hbo-vikings-1.jpg", "assets/cases/hbo-vikings/hbo-vikings-2.jpg", "assets/cases/hbo-vikings/hbo-vikings-3.jpg", "assets/cases/hbo-vikings/hbo-vikings-4.png"],
        description: "Let the fight begin: test your knowledge of the greatest warriors."
    },
    {
        id: "red-bull-winter-2022",
        featured: false,
        title: "Red Bull – Winter Edition",
        client: "Red Bull",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "image",
        cover: "assets/cases/red-bull-winter-2022.jpg",
        video: "",
        images: ["assets/cases/red-bull-winter-2022/red-bull-winter-2022-1.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-2.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-3.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-4.jpg"],
        description: "Remember the sequence of the different Red Bull varieties and win an ice cold Red Bull."
    },
    {
        id: "lego90",
        featured: false,
        title: "LEGO – 90th birthday",
        client: "LEGO",
        category: "CineGame",
        gameType: "Build",
        mediaType: "image",
        cover: "assets/cases/lego90.jpg",
        video: "",
        images: ["assets/cases/lego90/lego90-1.jpg", "assets/cases/lego90/lego90-2.jpg", "assets/cases/lego90/lego90-3.jpg", "assets/cases/lego90/lego90-4.png"],
        description: "Help decorate the LEGO birthday cake."
    },
    {
        id: "dfds",
        featured: false,
        title: "DFDS – Win a cruise",
        client: "DFDS",
        category: "CineGame",
        gameType: "Arcade",
        mediaType: "image",
        cover: "assets/cases/dfds.jpg",
        video: "",
        images: ["assets/cases/dfds/dfds-1.jpg", "assets/cases/dfds/dfds-2.jpg", "assets/cases/dfds/dfds-3.jpg", "assets/cases/dfds/dfds-4.jpg", "assets/cases/dfds/dfds-5.jpg", "assets/cases/dfds/dfds-6.jpg", "assets/cases/dfds/dfds-7.png"],
        description: "Four mini games in one. The winner takes home a cruise."
    },
    {
        id: "scream6",
        featured: false,
        title: "Scream VI – New York. New rules.",
        client: "Scream VI",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "assets/cases/scream6.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/scream6_2023_dk.mp4",
        preview: "assets/video/previews/scream6.mp4",
        description: "A game for the cinema release of Scream VI."
    },
    {
        id: "oister",
        featured: false,
        title: "Oister – Follow the Oister",
        client: "Oister",
        category: "CineGame",
        gameType: "Simon",
        mediaType: "video",
        cover: "assets/cases/oister.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Oister_2023_dk_9.mp4",
        preview: "assets/video/previews/oister.mp4",
        description: "A game for Oister on the big screen."
    },
    {
        id: "visitgermany",
        featured: false,
        title: "Visit Germany – Green travel",
        client: "Visit Germany",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "image",
        cover: "assets/cases/visitgermany.jpg",
        video: "",
        images: ["assets/cases/visitgermany/visitgermany-1.jpg", "assets/cases/visitgermany/visitgermany-2.jpg", "assets/cases/visitgermany/visitgermany-3.jpg", "assets/cases/visitgermany/visitgermany-4.png"],
        description: "Drive your electric car through Germany and experience a green way to travel."
    },
    {
        id: "virgin-mobile",
        featured: false,
        title: "Virgin Mobile – Run baby run",
        client: "Virgin Mobile",
        category: "CineGame",
        gameType: "Jumper",
        mediaType: "image",
        cover: "assets/cases/virgin-mobile.jpg",
        video: "",
        images: ["assets/cases/virgin-mobile/virgin-mobile-1.jpg", "assets/cases/virgin-mobile/virgin-mobile-2.jpg", "assets/cases/virgin-mobile/virgin-mobile-3.jpg", "assets/cases/virgin-mobile/virgin-mobile-4.png", "assets/cases/virgin-mobile/virgin-mobile-5.jpg", "assets/cases/virgin-mobile/virgin-mobile-6.jpg", "assets/cases/virgin-mobile/virgin-mobile-7.jpg"],
        description: "A runner game for Virgin Mobile."
    },
    {
        id: "podimo-quiz-2024",
        featured: false,
        title: "Podimo – The QuizShow",
        client: "Podimo",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "assets/cases/podimo-quiz-2024.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/PodimoDK2024-Cutdown.mp4",
        preview: "assets/video/previews/podimo-quiz-2024.mp4",
        description: "Join the fun in Podimo's quiz show."
    },
    {
        id: "matas",
        featured: false,
        title: "Matas – 75 years",
        client: "Matas",
        category: "CineGame",
        gameType: "Shuffle",
        mediaType: "video",
        cover: "assets/cases/matas.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Matas-Shuffle-DK-Cutdown.mp4",
        preview: "assets/video/previews/matas.mp4",
        description: "A shuffle game celebrating Matas' 75th birthday."
    },
    {
        id: "bundeswehr",
        featured: false,
        title: "Karriereberatung",
        client: "Bundeswehr",
        category: "CineGame",
        gameType: "Quizshow",
        mediaType: "video",
        cover: "assets/cases/bundeswehr.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/GermanMinistryOfDefence_Quiz_build6.mp4",
        preview: "assets/video/previews/bundeswehr.mp4",
        description: "A quiz game for Bundeswehr career counselling."
    },
    {
        id: "specsavers",
        featured: false,
        title: "Test your vision",
        client: "Specsavers",
        category: "CineGame",
        gameType: "Miscellaneous",
        mediaType: "video",
        cover: "assets/cases/specsavers.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Specsavers_Video_Cutdown.mp4",
        preview: "assets/video/previews/specsavers.mp4",
        description: "Test your vision on the big screen."
    },
    {
        id: "bookbeat",
        featured: false,
        title: "A good book",
        client: "BookBeat",
        category: "CineGame",
        gameType: "Quiz",
        mediaType: "video",
        cover: "assets/cases/bookbeat.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/BookBeat_Video_CutDown.mp4",
        preview: "assets/video/previews/bookbeat.mp4",
        description: "A game for BookBeat."
    },
    // --- PITCH CASES (from cinemataztic.com/games/pitch) ---
    // Images are copies from cinemataztic.com in assets/cases/pitch. logoBox is the visible part of the logo image
    // [x, y, width, height, image width, image height], so the card can crop away its empty margins.
    {
        id: "pitch-codan-shuffle",
        title: "Codan – Shuffle",
        client: "Codan",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/codan-shuffle-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/codan-shuffle-1.jpg",
            "assets/cases/pitch/codan-shuffle-2.jpg",
            "assets/cases/pitch/codan-shuffle-3.jpg",
            "assets/cases/pitch/codan-shuffle-4.jpg",
            "assets/cases/pitch/codan-shuffle-5.jpg",
            "assets/cases/pitch/codan-shuffle-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Codan in Danish cinemas. The audience keeps an eye on the insurance cards while they shuffle, for a chance to save money on their insurance or win a free popcorn."
    },
    {
        id: "pitch-fishermansfriend",
        title: "Fisherman's Friend",
        client: "Fisherman's Friend",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/fishermansfriend-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/fishermansfriend-1.jpg",
            "assets/cases/pitch/fishermansfriend-2.jpg",
            "assets/cases/pitch/fishermansfriend-3.jpg",
            "assets/cases/pitch/fishermansfriend-4.jpg",
            "assets/cases/pitch/fishermansfriend-5.jpg",
            "assets/cases/pitch/fishermansfriend-6.jpg",
            "assets/cases/pitch/fishermansfriend-7.jpg",
            "assets/cases/pitch/fishermansfriend-8.jpg"
        ],
        description: "A CineGame Shuffle pitch for Fisherman's Friend: The Strong Original. The audience keeps an eye on the packs while they shuffle, and one player wins a Fisherman's Friend."
    },
    {
        id: "pitch-kaptenandson",
        title: "Kapten & Son",
        client: "Kapten & Son",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kaptenandson-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/kaptenandson-1.jpg",
            "assets/cases/pitch/kaptenandson-2.jpg",
            "assets/cases/pitch/kaptenandson-3.jpg",
            "assets/cases/pitch/kaptenandson-4.jpg",
            "assets/cases/pitch/kaptenandson-5.jpg",
            "assets/cases/pitch/kaptenandson-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Kapten & Son in German cinemas, for a chance to win a discount on kapten-son.com."
    },
    {
        id: "pitch-lindex",
        title: "Lindex",
        client: "Lindex",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lindex-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/lindex-1.jpg",
            "assets/cases/pitch/lindex-2.jpg",
            "assets/cases/pitch/lindex-3.jpg",
            "assets/cases/pitch/lindex-4.jpg",
            "assets/cases/pitch/lindex-5.jpg",
            "assets/cases/pitch/lindex-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Lindex, for a chance to win a discount on Lindex.com."
    },
    {
        id: "pitch-lipton",
        title: "Lipton",
        client: "Lipton",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lipton-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/lipton-1.jpg",
            "assets/cases/pitch/lipton-2.jpg",
            "assets/cases/pitch/lipton-3.jpg",
            "assets/cases/pitch/lipton-4.jpg",
            "assets/cases/pitch/lipton-5.jpg",
            "assets/cases/pitch/lipton-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Lipton, together with Paddington. The audience keeps an eye on the Lipton teas while they shuffle."
    },
    {
        id: "pitch-lynx",
        title: "Lynx",
        client: "Lynx",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lynx-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/lynx-1.jpg",
            "assets/cases/pitch/lynx-2.jpg",
            "assets/cases/pitch/lynx-3.jpg",
            "assets/cases/pitch/lynx-4.jpg",
            "assets/cases/pitch/lynx-5.jpg"
        ],
        description: "A CineGame Shuffle pitch for Lynx. One player wins a premium Lynx deodorant bodyspray of their choice, and every player gets a 20% discount voucher."
    },
    {
        id: "pitch-masku",
        title: "Masku",
        client: "Masku",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/masku-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/masku-1.jpg",
            "assets/cases/pitch/masku-2.jpg",
            "assets/cases/pitch/masku-3.jpg"
        ],
        description: "A CineGame Shuffle pitch for Masku in Danish cinemas. The audience keeps an eye on the furniture cards, round by round."
    },
    {
        id: "pitch-netonnet",
        title: "NetOnNet",
        client: "NetOnNet",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/netonnet-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/netonnet-1.jpg",
            "assets/cases/pitch/netonnet-2.jpg",
            "assets/cases/pitch/netonnet-3.jpg",
            "assets/cases/pitch/netonnet-4.jpg",
            "assets/cases/pitch/netonnet-5.jpg"
        ],
        description: "A CineGame Shuffle pitch for NetOnNet. Join and win, right now."
    },
    {
        id: "pitch-otto",
        title: "OTTO",
        client: "OTTO",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/otto-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/otto-1.jpg",
            "assets/cases/pitch/otto-2.jpg",
            "assets/cases/pitch/otto-3.jpg",
            "assets/cases/pitch/otto-4.jpg",
            "assets/cases/pitch/otto-5.jpg",
            "assets/cases/pitch/otto-6.jpg"
        ],
        description: "A Christmas CineGame Shuffle pitch for OTTO in German cinemas: A very merry Christmas from OTTO."
    },
    {
        id: "pitch-rituals",
        title: "Rituals",
        client: "Rituals",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/rituals-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/rituals-1.jpg",
            "assets/cases/pitch/rituals-2.jpg",
            "assets/cases/pitch/rituals-3.jpg",
            "assets/cases/pitch/rituals-4.jpg",
            "assets/cases/pitch/rituals-5.jpg",
            "assets/cases/pitch/rituals-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Rituals in German cinemas: The Art of Soulful Living."
    },
    {
        id: "pitch-snocks",
        title: "Snocks",
        client: "Snocks",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/snocks-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/snocks-1.jpg",
            "assets/cases/pitch/snocks-2.jpg",
            "assets/cases/pitch/snocks-3.jpg",
            "assets/cases/pitch/snocks-4.jpg",
            "assets/cases/pitch/snocks-5.jpg",
            "assets/cases/pitch/snocks-6.jpg",
            "assets/cases/pitch/snocks-7.jpg"
        ],
        description: "A CineGame Shuffle pitch for Snocks in German cinemas: Game on. Conquer the highest level. One player wins a 10 euro gift card, and every player gets a 20% discount voucher."
    },
    {
        id: "pitch-spotify",
        title: "Spotify",
        client: "Spotify",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/spotify-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/spotify-1.jpg",
            "assets/cases/pitch/spotify-2.jpg",
            "assets/cases/pitch/spotify-3.jpg",
            "assets/cases/pitch/spotify-4.jpg",
            "assets/cases/pitch/spotify-5.jpg"
        ],
        description: "A CineGame Shuffle pitch for Spotify in German cinemas, for a chance to win 3 months of free Spotify Premium."
    },
    {
        id: "pitch-streetfighter",
        title: "Street Fighter",
        client: "Street Fighter",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/streetfighter-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/streetfighter-1.jpg",
            "assets/cases/pitch/streetfighter-2.jpg",
            "assets/cases/pitch/streetfighter-3.jpg",
            "assets/cases/pitch/streetfighter-4.jpg",
            "assets/cases/pitch/streetfighter-5.jpg",
            "assets/cases/pitch/streetfighter-6.jpg",
            "assets/cases/pitch/streetfighter-7.jpg",
            "assets/cases/pitch/streetfighter-8.jpg"
        ],
        description: "A CineGame Shuffle pitch for Street Fighter. The audience keeps an eye on the cards while they shuffle."
    },
    {
        id: "pitch-tkmaxx",
        title: "TK Maxx",
        client: "TK Maxx",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/tkmaxx-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/tkmaxx-1.jpg",
            "assets/cases/pitch/tkmaxx-2.jpg",
            "assets/cases/pitch/tkmaxx-3.jpg",
            "assets/cases/pitch/tkmaxx-4.jpg",
            "assets/cases/pitch/tkmaxx-5.jpg",
            "assets/cases/pitch/tkmaxx-6.jpg",
            "assets/cases/pitch/tkmaxx-7.jpg",
            "assets/cases/pitch/tkmaxx-8.jpg",
            "assets/cases/pitch/tkmaxx-9.jpg",
            "assets/cases/pitch/tkmaxx-10.jpg",
            "assets/cases/pitch/tkmaxx-11.jpg",
            "assets/cases/pitch/tkmaxx-12.jpg",
            "assets/cases/pitch/tkmaxx-13.jpg",
            "assets/cases/pitch/tkmaxx-14.jpg",
            "assets/cases/pitch/tkmaxx-15.jpg",
            "assets/cases/pitch/tkmaxx-16.jpg",
            "assets/cases/pitch/tkmaxx-17.jpg",
            "assets/cases/pitch/tkmaxx-18.jpg"
        ],
        description: "A CineGame Shuffle pitch for TK Maxx: If you love surprises. The audience keeps an eye on two cards while they shuffle."
    },
    {
        id: "pitch-zalando",
        title: "Zalando",
        client: "Zalando",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/zalando-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/zalando-1.jpg",
            "assets/cases/pitch/zalando-2.jpg",
            "assets/cases/pitch/zalando-3.jpg",
            "assets/cases/pitch/zalando-4.jpg",
            "assets/cases/pitch/zalando-5.jpg",
            "assets/cases/pitch/zalando-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for Zalando in Finnish cinemas. Every player gets 15% off on zalando.fi, and the winner gets a popcorn."
    },
    {
        id: "pitch-ally",
        title: "Ally",
        client: "Ally",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/ally-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/ally-1.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Ally in Danish cinemas. The audience answers questions about Ally on their phones."
    },
    {
        id: "pitch-codan",
        title: "Codan – Quiz Show",
        client: "Codan",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/codan-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/codan-1.jpg",
            "assets/cases/pitch/codan-2.jpg",
            "assets/cases/pitch/codan-3.jpg",
            "assets/cases/pitch/codan-4.jpg",
            "assets/cases/pitch/codan-5.jpg",
            "assets/cases/pitch/codan-6.jpg",
            "assets/cases/pitch/codan-7.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Codan in Danish cinemas. The audience plays the Codan quiz in the BioSpil app, and the winner gets a free popcorn."
    },
    {
        id: "pitch-currys",
        title: "Currys",
        client: "Currys",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/currys-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/currys-1.jpg",
            "assets/cases/pitch/currys-2.jpg",
            "assets/cases/pitch/currys-3.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Currys in UK cinemas. The audience plays for free popcorn and Currys gift cards."
    },
    {
        id: "pitch-dendy",
        title: "Dendy Cinemas",
        client: "Dendy Cinemas",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/dendy-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/dendy-1.jpg",
            "assets/cases/pitch/dendy-2.jpg",
            "assets/cases/pitch/dendy-3.jpg",
            "assets/cases/pitch/dendy-4.jpg",
            "assets/cases/pitch/dendy-5.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Dendy Cinemas. The audience answers movie questions for a chance to win Dendy cinema tickets."
    },
    {
        id: "pitch-kilroy",
        title: "Kilroy",
        client: "Kilroy",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kilroy-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/kilroy-1.jpg",
            "assets/cases/pitch/kilroy-2.jpg",
            "assets/cases/pitch/kilroy-3.jpg",
            "assets/cases/pitch/kilroy-4.jpg",
            "assets/cases/pitch/kilroy-5.jpg",
            "assets/cases/pitch/kilroy-6.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Kilroy in Danish cinemas. The audience answers travel questions on their phones in the Kilroy quiz."
    },
    {
        id: "pitch-krifa",
        title: "Krifa",
        client: "Krifa",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/krifa-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/krifa-1.jpg",
            "assets/cases/pitch/krifa-2.jpg",
            "assets/cases/pitch/krifa-3.jpg",
            "assets/cases/pitch/krifa-4.jpg",
            "assets/cases/pitch/krifa-5.jpg",
            "assets/cases/pitch/krifa-6.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Krifa in Danish cinemas: God arbejdsliv. The audience plays the Krifa quiz in the BioSpil app, and the winner gets a popcorn."
    },
    {
        id: "pitch-matas-quiz",
        title: "Matas – Quiz Show",
        client: "Matas",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/matas-quiz-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/matas-quiz-1.jpg",
            "assets/cases/pitch/matas-quiz-2.jpg",
            "assets/cases/pitch/matas-quiz-3.jpg",
            "assets/cases/pitch/matas-quiz-4.jpg",
            "assets/cases/pitch/matas-quiz-5.jpg",
            "assets/cases/pitch/matas-quiz-6.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Club Matas in Danish cinemas: the beauty quiz. The audience answers beauty questions on their phones."
    },
    {
        id: "pitch-mrgreen",
        title: "Mr Green",
        client: "Mr Green",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mrgreen-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/mrgreen-1.jpg",
            "assets/cases/pitch/mrgreen-2.jpg",
            "assets/cases/pitch/mrgreen-3.jpg",
            "assets/cases/pitch/mrgreen-4.jpg",
            "assets/cases/pitch/mrgreen-5.jpg",
            "assets/cases/pitch/mrgreen-6.jpg",
            "assets/cases/pitch/mrgreen-7.jpg",
            "assets/cases/pitch/mrgreen-8.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Mr Green in Danish cinemas. Log in, play along and win."
    },
    {
        id: "pitch-nextory",
        title: "Nextory",
        client: "Nextory",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/nextory-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/nextory-1.jpg",
            "assets/cases/pitch/nextory-2.jpg",
            "assets/cases/pitch/nextory-3.jpg",
            "assets/cases/pitch/nextory-4.jpg",
            "assets/cases/pitch/nextory-5.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Nextory. The audience answers questions about books, and everyone can try Nextory for free for the next 30 days."
    },
    {
        id: "pitch-sky",
        title: "Sky",
        client: "Sky",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/sky-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/sky-1.jpg",
            "assets/cases/pitch/sky-2.jpg",
            "assets/cases/pitch/sky-3.jpg",
            "assets/cases/pitch/sky-4.jpg",
            "assets/cases/pitch/sky-5.jpg",
            "assets/cases/pitch/sky-6.jpg",
            "assets/cases/pitch/sky-7.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Sky Glass in UK cinemas. The audience plays the quiz for a chance to win a Sky Glass TV."
    },
    {
        id: "pitch-stryhns",
        title: "Stryhns",
        client: "Stryhns",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/stryhns-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/stryhns-1.jpg",
            "assets/cases/pitch/stryhns-2.jpg",
            "assets/cases/pitch/stryhns-3.jpg",
            "assets/cases/pitch/stryhns-4.jpg"
        ],
        description: "A CineGame pitch for Stryhns and Børnetelefonen in Danish cinemas. The audience plays along in the BioSpil app and takes part in the lottery."
    },
    {
        id: "pitch-vattenfall",
        title: "Vattenfall",
        client: "Vattenfall",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/vattenfall-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/vattenfall-1.jpg",
            "assets/cases/pitch/vattenfall-2.jpg",
            "assets/cases/pitch/vattenfall-3.jpg"
        ],
        description: "A CineGame Quiz Show pitch for Vattenfall. The audience plays the Vattenfall quiz, for a chance to win a free popcorn."
    },
    {
        id: "pitch-cupra",
        title: "Cupra",
        client: "Cupra",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/cupra-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/cupra-1.jpg",
            "assets/cases/pitch/cupra-2.jpg",
            "assets/cases/pitch/cupra-3.jpg",
            "assets/cases/pitch/cupra-4.jpg",
            "assets/cases/pitch/cupra-5.jpg",
            "assets/cases/pitch/cupra-6.jpg",
            "assets/cases/pitch/cupra-7.jpg"
        ],
        description: "A CineGame Obstacle Runner pitch for the new Cupra Tavascan. The audience races past the obstacles, the winner gets an exclusive test drive, and everyone gets a Bonus Spin for a high-end home EV charger."
    },
    {
        id: "pitch-opel",
        title: "Opel",
        client: "Opel",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/opel-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/opel-1.jpg",
            "assets/cases/pitch/opel-2.jpg",
            "assets/cases/pitch/opel-3.jpg",
            "assets/cases/pitch/opel-4.jpg",
            "assets/cases/pitch/opel-5.jpg"
        ],
        description: "A CineGame Obstacle Runner pitch for the Opel Frontera in German cinemas. The audience races past the obstacles, and the winner gets a free popcorn."
    },
    {
        id: "pitch-polestar",
        title: "Polestar",
        client: "Polestar",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/polestar-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/polestar-1.jpg",
            "assets/cases/pitch/polestar-2.jpg",
            "assets/cases/pitch/polestar-3.jpg",
            "assets/cases/pitch/polestar-4.jpg",
            "assets/cases/pitch/polestar-5.jpg",
            "assets/cases/pitch/polestar-6.jpg",
            "assets/cases/pitch/polestar-7.jpg"
        ],
        description: "A CineGame Obstacle Runner pitch for the new Polestar 4. The audience races past the obstacles, and the winner gets an exclusive test drive of the Polestar 4."
    },
    {
        id: "pitch-ruegenwalder",
        title: "Rügenwalder Mühle",
        client: "Rügenwalder Mühle",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/ruegenwalder-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/ruegenwalder-1.jpg",
            "assets/cases/pitch/ruegenwalder-2.jpg",
            "assets/cases/pitch/ruegenwalder-3.jpg",
            "assets/cases/pitch/ruegenwalder-4.jpg",
            "assets/cases/pitch/ruegenwalder-5.jpg",
            "assets/cases/pitch/ruegenwalder-6.jpg",
            "assets/cases/pitch/ruegenwalder-7.jpg",
            "assets/cases/pitch/ruegenwalder-8.jpg"
        ],
        description: "A CineGame Obstacle Runner pitch for Rügenwalder Mühle in German cinemas: Rügenwalder Abenteuer. The audience runs through the countryside past the obstacles, and the winner gets an adventure deal."
    },
    {
        id: "pitch-telia",
        title: "Telia",
        client: "Telia",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/telia-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/telia-1.jpg",
            "assets/cases/pitch/telia-2.jpg",
            "assets/cases/pitch/telia-3.jpg",
            "assets/cases/pitch/telia-4.jpg"
        ],
        description: "A CineGame pitch for Telia and HBO Max in Danish cinemas, for the premiere of House of the Dragon. The audience collects dragon eggs for a chance to win prizes."
    },
    {
        id: "pitch-toyota",
        title: "Toyota",
        client: "Toyota",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/toyota-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/toyota-1.jpg",
            "assets/cases/pitch/toyota-2.jpg",
            "assets/cases/pitch/toyota-3.jpg",
            "assets/cases/pitch/toyota-4.jpg",
            "assets/cases/pitch/toyota-5.jpg",
            "assets/cases/pitch/toyota-6.jpg",
            "assets/cases/pitch/toyota-7.jpg"
        ],
        description: "A CineGame Obstacle Runner pitch for the new Toyota bZ4X in Danish cinemas. The audience races past the obstacles, and the winner gets a test drive of the Toyota bZ4X."
    },
    {
        id: "pitch-visitdenmark",
        title: "VisitDenmark",
        client: "VisitDenmark",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/visitdenmark-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/visitdenmark-1.jpg",
            "assets/cases/pitch/visitdenmark-2.jpg",
            "assets/cases/pitch/visitdenmark-3.jpg",
            "assets/cases/pitch/visitdenmark-4.jpg",
            "assets/cases/pitch/visitdenmark-5.jpg",
            "assets/cases/pitch/visitdenmark-6.jpg",
            "assets/cases/pitch/visitdenmark-7.jpg"
        ],
        description: "A CineGame quiz pitch for VisitDenmark: the Denmark Tour Quiz. The audience shows how well they know Denmark's most beautiful and historical landmarks, and the winner gets a large popcorn at Nordisk Film."
    },
    {
        id: "pitch-copenhagenzoo",
        title: "Copenhagen Zoo",
        client: "Copenhagen Zoo",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/copenhagenzoo-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/copenhagenzoo-1.jpg",
            "assets/cases/pitch/copenhagenzoo-2.jpg",
            "assets/cases/pitch/copenhagenzoo-3.jpg",
            "assets/cases/pitch/copenhagenzoo-4.jpg",
            "assets/cases/pitch/copenhagenzoo-5.jpg",
            "assets/cases/pitch/copenhagenzoo-6.jpg",
            "assets/cases/pitch/copenhagenzoo-7.jpg"
        ],
        description: "A CineGame Guess Object pitch for Copenhagen Zoo in Danish cinemas. The audience follows the pointer on the map of the zoo and picks the right area on their phone, and the faster they answer, the more points they get."
    },
    {
        id: "pitch-samsonite",
        title: "Samsonite",
        client: "Samsonite",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/samsonite-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/samsonite-1.jpg",
            "assets/cases/pitch/samsonite-2.jpg",
            "assets/cases/pitch/samsonite-3.jpg"
        ],
        description: "A CineGame pitch for Samsonite and American Tourister. The audience runs through the airport to catch the suitcases, the winner gets two free cinema tickets, and everyone gets a Bonus Spin for a Samsonite gift worth over 499 euro."
    },
    {
        id: "pitch-disney-wish",
        title: "Disney",
        client: "Disney",
        category: "Pitch",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Wish_Demo_v2.mov",
        preview: "assets/video/previews/disney-wish.mp4",
        description: "A CineGame pitch for Disney's Wish in German cinemas. The audience swipes left, right and up to steer along glowing star paths and collect wishes."
    },
    {
        id: "pitch-airtox",
        title: "Airtox",
        client: "Airtox",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/airtox-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/airtox-1.jpg",
            "assets/cases/pitch/airtox-2.jpg",
            "assets/cases/pitch/airtox-3.jpg",
            "assets/cases/pitch/airtox-4.jpg"
        ],
        description: "A CineGame Jumper pitch for Airtox in Danish cinemas: Fear Nothing. The audience jumps between platforms collecting Airtox shoes, for a chance to win one of 10 pairs."
    },
    {
        id: "pitch-chilimobil",
        title: "Chili Mobil",
        client: "Chili Mobil",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/chilimobil-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/chilimobil-1.jpg",
            "assets/cases/pitch/chilimobil-2.jpg",
            "assets/cases/pitch/chilimobil-3.jpg",
            "assets/cases/pitch/chilimobil-4.jpg"
        ],
        description: "A CineGame Jumper pitch for Chili Mobil in Swedish cinemas: Logga in. Spela. Vinn Fri Surf. The audience jumps and picks up chili peppers, the winner gets free surf for a month, and everyone gets 15% off at ChiliMobil.se."
    },
    {
        id: "pitch-droetker-flappypizza",
        title: "Dr. Oetker – Flappy Pizza",
        client: "Dr. Oetker",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/droetker-flappypizza-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/droetker-flappypizza-1.jpg",
            "assets/cases/pitch/droetker-flappypizza-2.jpg",
            "assets/cases/pitch/droetker-flappypizza-3.jpg",
            "assets/cases/pitch/droetker-flappypizza-4.jpg",
            "assets/cases/pitch/droetker-flappypizza-5.jpg"
        ],
        description: "A CineGame pitch for Dr. Oetker Ristorante in Danish cinemas: Flappy Pizza. The audience flies a pizza slice past the obstacles, and the winner gets a year's supply of Dr. Oetker pizza."
    },
    {
        id: "pitch-eon",
        title: "E.ON",
        client: "E.ON",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/eon-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/eon-1.jpg",
            "assets/cases/pitch/eon-2.jpg",
            "assets/cases/pitch/eon-3.jpg",
            "assets/cases/pitch/eon-4.jpg"
        ],
        description: "A CineGame Jumper pitch for E.ON in German cinemas: Clean energy for a brighter future. The audience jumps through a landscape of wind turbines, and the winner gets a free popcorn."
    },
    {
        id: "pitch-ef",
        title: "EF Education First",
        client: "EF Education First",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/ef-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/ef-1.jpg",
            "assets/cases/pitch/ef-2.jpg",
            "assets/cases/pitch/ef-3.jpg",
            "assets/cases/pitch/ef-4.jpg"
        ],
        description: "A CineGame Jumper pitch for EF Education First in Danish cinemas: Episk sprogrejse starter her. The audience races through Paris, and the winner gets an EF cycling water bottle."
    },
    {
        id: "pitch-hp",
        title: "HP",
        client: "HP",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/hp-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/hp-1.jpg",
            "assets/cases/pitch/hp-2.jpg",
            "assets/cases/pitch/hp-3.jpg",
            "assets/cases/pitch/hp-4.jpg"
        ],
        description: "A CineGame Jumper pitch for HP OMEN and Intel. The audience jumps across a gaming desk, the winner gets an exclusive prize from OMEN, and everyone gets a Bonus Spin."
    },
    {
        id: "pitch-justspices",
        title: "Just Spices",
        client: "Just Spices",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/justspices-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/justspices-1.jpg",
            "assets/cases/pitch/justspices-2.jpg",
            "assets/cases/pitch/justspices-3.jpg"
        ],
        description: "A CineGame Jumper pitch for Just Spices in German cinemas. The audience jumps across the spice jars, the winner gets a prize from Just Spices, and everyone gets 20% off."
    },
    {
        id: "pitch-legoland",
        title: "LEGOLAND",
        client: "LEGOLAND",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/legoland-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/legoland-1.jpg",
            "assets/cases/pitch/legoland-2.jpg",
            "assets/cases/pitch/legoland-3.jpg"
        ],
        description: "A CineGame Jumper pitch for LEGOLAND Billund Resort in Danish cinemas. The audience jumps through a LEGO world, and the best player wins a free popcorn."
    },
    {
        id: "pitch-mcd-jumper",
        title: "McDonald's – Jumper",
        client: "McDonald's",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mcd-jumper-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/mcd-jumper-1.jpg",
            "assets/cases/pitch/mcd-jumper-2.jpg",
            "assets/cases/pitch/mcd-jumper-3.jpg",
            "assets/cases/pitch/mcd-jumper-4.jpg",
            "assets/cases/pitch/mcd-jumper-5.jpg",
            "assets/cases/pitch/mcd-jumper-6.jpg",
            "assets/cases/pitch/mcd-jumper-7.jpg"
        ],
        description: "A CineGame Jumper pitch for McDonald's. The audience jumps across a world of McDonald's food, and the best player wins a free McDonald's Cheeseburger."
    },
    {
        id: "pitch-oatly",
        title: "Oatly",
        client: "Oatly",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/oatly-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/oatly-1.jpg",
            "assets/cases/pitch/oatly-2.jpg",
            "assets/cases/pitch/oatly-3.jpg"
        ],
        description: "A CineGame Jumper pitch for Oatly in German cinemas. The audience jumps across Oatly cartons, and the winner gets a prize from Oatly."
    },
    {
        id: "pitch-oister-jumper",
        title: "Oister – Jumper",
        client: "Oister",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/oister-jumper-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/oister-jumper-1.jpg",
            "assets/cases/pitch/oister-jumper-2.jpg",
            "assets/cases/pitch/oister-jumper-3.jpg",
            "assets/cases/pitch/oister-jumper-4.jpg"
        ],
        description: "A CineGame pitch for Oister in Danish cinemas. The audience swipes to jump between rocks out at sea, and the winner gets a great Oister prize."
    },
    {
        id: "pitch-santamaria",
        title: "Santa Maria",
        client: "Santa Maria",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/santamaria-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/santamaria-1.jpg",
            "assets/cases/pitch/santamaria-2.jpg",
            "assets/cases/pitch/santamaria-3.jpg",
            "assets/cases/pitch/santamaria-4.jpg"
        ],
        description: "A CineGame Jumper pitch for Santa Maria in Swedish cinemas. The audience jumps across shelves of Santa Maria products collecting diamonds. The Chef of the Day wins a bottle of wok sauce, and everyone gets 20% off their next Santa Maria dinner."
    },
    {
        id: "pitch-stadium",
        title: "Stadium",
        client: "Stadium",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/stadium-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/stadium-1.jpg",
            "assets/cases/pitch/stadium-2.jpg"
        ],
        description: "A CineGame pitch for Stadium in Swedish cinemas: Sports Camp. The audience runs, jumps over obstacles and picks up coins, then takes on rougher terrain on a bike."
    },
    {
        id: "pitch-stimorol-jumper",
        title: "Stimorol – Jumper",
        client: "Stimorol",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/stimorol-jumper-1.jpg",
        logo: "assets/cases/pitch/stimorol_logo.png",
        logoBox: [0, 22, 350, 79, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/stimorol-jumper-1.jpg",
            "assets/cases/pitch/stimorol-jumper-2.jpg",
            "assets/cases/pitch/stimorol-jumper-3.jpg",
            "assets/cases/pitch/stimorol-jumper-4.jpg",
            "assets/cases/pitch/stimorol-jumper-5.jpg",
            "assets/cases/pitch/stimorol-jumper-6.jpg"
        ],
        description: "A CineGame Jumper pitch for Stimorol in Swedish cinemas: Chew Bold. The audience jumps over Stimorol packs and collects stars, and the winner gets a voucher for a free Stimorol Mega pack."
    },
    {
        id: "pitch-targobank",
        title: "Targobank",
        client: "Targobank",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/targobank-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/targobank-1.jpg",
            "assets/cases/pitch/targobank-2.jpg",
            "assets/cases/pitch/targobank-3.jpg",
            "assets/cases/pitch/targobank-4.jpg",
            "assets/cases/pitch/targobank-5.jpg",
            "assets/cases/pitch/targobank-6.jpg",
            "assets/cases/pitch/targobank-7.jpg"
        ],
        description: "A CineGame Jumper pitch for Targobank in German cinemas: Wir geben Rückenwind. The audience jumps over obstacles, collects coins and uses the Targobank tailwind boost to unlock a first house and car. The winner gets a free popcorn."
    },
    {
        id: "pitch-7eleven-dinerdash",
        title: "7-Eleven – Diner Dash",
        client: "7-Eleven",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/7eleven-dinerdash-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/7eleven-dinerdash-1.jpg",
            "assets/cases/pitch/7eleven-dinerdash-2.jpg",
            "assets/cases/pitch/7eleven-dinerdash-3.jpg"
        ],
        description: "A CineGame Diner Dash pitch for 7-Eleven in Denmark. The audience serves the customers' orders at the 7-Eleven counter before time runs out, and the winner gets a STATE Energy."
    },
    {
        id: "pitch-7eleven",
        title: "7-Eleven – Shuffle",
        client: "7-Eleven",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/7eleven-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/7eleven-1.jpg",
            "assets/cases/pitch/7eleven-2.jpg",
            "assets/cases/pitch/7eleven-3.jpg",
            "assets/cases/pitch/7eleven-4.jpg",
            "assets/cases/pitch/7eleven-5.jpg",
            "assets/cases/pitch/7eleven-6.jpg"
        ],
        description: "A CineGame Shuffle pitch for 7-Eleven in Denmark. The audience keeps an eye on this week's treats while the phones shuffle, the winner gets a STATE Energy, and everyone can play on in the 7-Eleven app."
    },
    {
        id: "pitch-2degrees",
        title: "2degrees",
        client: "2degrees",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/2degrees-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/2degrees-1.jpg",
            "assets/cases/pitch/2degrees-2.jpg",
            "assets/cases/pitch/2degrees-3.jpg",
            "assets/cases/pitch/2degrees-4.jpg",
            "assets/cases/pitch/2degrees-5.jpg",
            "assets/cases/pitch/2degrees-6.jpg",
            "assets/cases/pitch/2degrees-7.jpg",
            "assets/cases/pitch/2degrees-8.jpg",
            "assets/cases/pitch/2degrees-9.jpg"
        ],
        description: "A CineGame Quiz Show pitch for 2degrees in New Zealand: Fighting for Fair. The audience answers questions about 2degrees' rugby sponsorships, the winner enters the draw for an iPhone 15, and everyone gets a Bonus Spin."
    },
    {
        id: "pitch-atlante",
        title: "Atlante",
        client: "Atlante",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/atlante-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/atlante-1.jpg",
            "assets/cases/pitch/atlante-2.jpg",
            "assets/cases/pitch/atlante-3.jpg",
            "assets/cases/pitch/atlante-4.jpg",
            "assets/cases/pitch/atlante-5.jpg",
            "assets/cases/pitch/atlante-6.jpg",
            "assets/cases/pitch/atlante-7.jpg"
        ],
        description: "A CineGame pitch for Atlante, the fast-charging network across Europe. The audience drives electric cars past Atlante stations, picking up green gems and coins and avoiding obstacles, and wins gems for the MyAtlante app."
    },
    {
        id: "pitch-very",
        title: "Very",
        client: "Very",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/very-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/very-1.jpg",
            "assets/cases/pitch/very-2.jpg",
            "assets/cases/pitch/very-3.jpg",
            "assets/cases/pitch/very-4.jpg",
            "assets/cases/pitch/very-5.jpg",
            "assets/cases/pitch/very-6.jpg",
            "assets/cases/pitch/very-7.jpg",
            "assets/cases/pitch/very-8.jpg"
        ],
        description: "A CineGame Shuffle pitch for Very.ie in Ireland: We've Got the Very Thing. The audience keeps an eye on the product while the phones shuffle, the winner gets a €25 Very voucher, and everyone who plays gets 10% off."
    },
    {
        id: "pitch-telenor",
        title: "Telenor",
        client: "Telenor",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/telenor-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/telenor-1.jpg",
            "assets/cases/pitch/telenor-2.jpg",
            "assets/cases/pitch/telenor-3.jpg",
            "assets/cases/pitch/telenor-4.jpg",
            "assets/cases/pitch/telenor-5.jpg",
            "assets/cases/pitch/telenor-6.jpg"
        ],
        description: "A CineGame pitch for Telenor: Bedste siger. The audience follows Grandma's moves through the airport and repeats them in the right order, for a chance to win Denmark's best roaming package."
    },
    {
        id: "pitch-elgiganten",
        title: "Elgiganten",
        client: "Elgiganten",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/elgiganten-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/elgiganten-1.jpg",
            "assets/cases/pitch/elgiganten-2.jpg",
            "assets/cases/pitch/elgiganten-3.jpg"
        ],
        description: "A Christmas CineGame pitch for Elgiganten: Pakkespillet. The audience sorts gifts into gaming, screens and sound, the winner gets popcorn, and everyone who plays gets a discount at Elgiganten."
    },
    {
        id: "pitch-return",
        title: "Re-turn",
        client: "Re-turn",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/return-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/return-1.jpg",
            "assets/cases/pitch/return-2.jpg",
            "assets/cases/pitch/return-3.jpg",
            "assets/cases/pitch/return-4.jpg"
        ],
        description: "A CineGame pitch for Re-turn, Ireland's Deposit Return Scheme: Re-turn it Right. The audience swipes rubbish left and returns bottles and cans right, for a chance to win One4all gift cards."
    },
    {
        id: "pitch-jordan",
        title: "Jordan",
        client: "Jordan",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/jordan-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/jordan-1.jpg",
            "assets/cases/pitch/jordan-2.jpg",
            "assets/cases/pitch/jordan-3.jpg",
            "assets/cases/pitch/jordan-4.jpg"
        ],
        description: "A CineGame pitch for Jordan: the Jordan Brush Academy Challenge. The audience avoids obstacles and picks up Ootie toothbrushes, and the winner gets a free Ootie brush."
    },
    {
        id: "pitch-hitster",
        title: "Hitster",
        client: "Hitster",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/hitster-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/hitster-1.jpg",
            "assets/cases/pitch/hitster-2.jpg",
            "assets/cases/pitch/hitster-3.jpg",
            "assets/cases/pitch/hitster-4.jpg",
            "assets/cases/pitch/hitster-5.jpg",
            "assets/cases/pitch/hitster-6.jpg",
            "assets/cases/pitch/hitster-7.jpg",
            "assets/cases/pitch/hitster-8.jpg",
            "assets/cases/pitch/hitster-9.jpg"
        ],
        description: "A CineGame pitch for Hitster: the music party game on the big screen. The audience places hits on a timeline, round by round."
    },
    {
        id: "pitch-cocacola-jumper",
        title: "Coca-Cola – Jumper",
        client: "Coca-Cola",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/cocacola-jumper-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/cocacola-jumper-1.jpg",
            "assets/cases/pitch/cocacola-jumper-2.jpg",
            "assets/cases/pitch/cocacola-jumper-3.jpg"
        ],
        description: "A CineGame pitch for Coca-Cola: Jumper."
    },
    {
        id: "pitch-lidl-shuffle",
        title: "Lidl – Shuffle",
        client: "Lidl",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lidl-shuffle-1.jpg",
        logo: "assets/cases/pitch/lidl_logo.png",
        logoBox: [8, 10, 172, 69, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/lidl-shuffle-1.jpg",
            "assets/cases/pitch/lidl-shuffle-2.jpg",
            "assets/cases/pitch/lidl-shuffle-3.jpg",
            "assets/cases/pitch/lidl-shuffle-4.jpg",
            "assets/cases/pitch/lidl-shuffle-5.jpg",
            "assets/cases/pitch/lidl-shuffle-6.jpg",
            "assets/cases/pitch/lidl-shuffle-7.jpg"
        ],
        description: "A CineGame pitch for Lidl: Shuffle."
    },
    {
        id: "pitch-booking-swipehero",
        title: "Booking.com – Swipe Hero",
        client: "Booking.com",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/booking-swipehero-1.jpg",
        logo: "assets/cases/pitch/logo_booking.png",
        logoBox: [2, 27, 189, 32, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/booking-swipehero-1.jpg",
            "assets/cases/pitch/booking-swipehero-2.jpg",
            "assets/cases/pitch/booking-swipehero-3.jpg",
            "assets/cases/pitch/booking-swipehero-4.jpg",
            "assets/cases/pitch/booking-swipehero-5.jpg",
            "assets/cases/pitch/booking-swipehero-6.jpg"
        ],
        description: "A CineGame pitch for Booking.com: Swipe Hero."
    },
    {
        id: "pitch-dsgroup-quizshow",
        title: "DS Group – Quiz Show",
        client: "DS Group",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/dsgroup-quizshow-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/dsgroup-quizshow-1.jpg",
            "assets/cases/pitch/dsgroup-quizshow-2.jpg",
            "assets/cases/pitch/dsgroup-quizshow-3.jpg",
            "assets/cases/pitch/dsgroup-quizshow-4.jpg",
            "assets/cases/pitch/dsgroup-quizshow-5.jpg",
            "assets/cases/pitch/dsgroup-quizshow-6.jpg"
        ],
        description: "A CineGame pitch for DS Group: Quiz Show."
    },
    {
        id: "pitch-marvel",
        title: "Marvel – Game pitch",
        client: "Marvel",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/marvel1.jpg",
        logo: "assets/cases/pitch/marvel_logo_trans.png",
        logoBox: [1, 5, 313, 126, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/marvel1.jpg",
            "assets/cases/pitch/marvel2.jpg",
            "assets/cases/pitch/marvel3.jpg",
            "assets/cases/pitch/marvel4.jpg"
        ],
        description: "A CineGame pitch for Marvel."
    },
    {
        id: "pitch-oreo",
        title: "Oreo – Game pitch",
        client: "Oreo",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/oreo1.jpg",
        logo: "assets/cases/pitch/oreo_logo.png",
        logoBox: [17, 3, 292, 130, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/oreo1.jpg",
            "assets/cases/pitch/oreo2.jpg",
            "assets/cases/pitch/oreo3.jpg",
            "assets/cases/pitch/oreo4.jpg"
        ],
        description: "A CineGame pitch for Oreo."
    },
    {
        id: "pitch-redrooster",
        title: "Red Rooster – Game pitch",
        client: "Red Rooster",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/rr1.jpg",
        logo: "assets/cases/pitch/rr-logo.png",
        logoBox: [2, 3, 246, 127, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/rr1.jpg",
            "assets/cases/pitch/rr2.jpg",
            "assets/cases/pitch/rr3.jpg"
        ],
        description: "A CineGame pitch for Red Rooster."
    },
    {
        id: "pitch-kfc",
        title: "KFC – The Restaurant Game",
        client: "KFC",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kfc1.jpg",
        logo: "assets/logos/kfc.svg",
        video: "",
        images: [
            "assets/cases/pitch/kfc1.jpg",
            "assets/cases/pitch/kfc2.jpg",
            "assets/cases/pitch/kfc_phone.jpg"
        ],
        description: "Receive orders from customers in your KFC restaurant: 1–3 customers enter at a time, and it’s your job to serve them as well as possible."
    },
    {
        id: "pitch-hungry-jacks",
        title: "Hungry Jack's – The Maze Game",
        client: "Hungry Jack's",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/hj1.jpg",
        logo: "assets/cases/pitch/hj_logo.png",
        video: "",
        images: [
            "assets/cases/pitch/hj1.jpg",
            "assets/cases/pitch/hj2.jpg",
            "assets/cases/pitch/hj3.jpg"
        ],
        description: "A CineGame pitch for Hungry Jack's: The Maze Game."
    },
    {
        id: "pitch-lego-city",
        title: "LEGO – City",
        client: "LEGO",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lego_city_01.jpg",
        logo: "assets/cases/pitch/lego_city_logo.png",
        logoBox: [0, 0, 344, 126, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/lego_city_01.jpg",
            "assets/cases/pitch/lego_city_02.jpg",
            "assets/cases/pitch/lego_city_03.jpg",
            "assets/cases/pitch/lego_city_04.jpg",
            "assets/cases/pitch/lego_city_05.jpg",
            "assets/cases/pitch/lego_city_06.jpg"
        ],
        description: "A CineGame pitch for LEGO: City."
    },
    {
        id: "pitch-pengeskyen",
        title: "Danske Bank – Penge Skyen",
        client: "Danske Bank",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/pengeskyen_1.jpg",
        logo: "assets/cases/pitch/pengeskyen_logo.png",
        logoBox: [0, 9, 350, 81, 350, 136],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/pengeskyen_1.jpg",
            "assets/cases/pitch/pengeskyen_2.jpg",
            "assets/cases/pitch/pengeskyen_3.jpg",
            "assets/cases/pitch/pengeskyen_4.jpg",
            "assets/cases/pitch/pengeskyen_5.jpg",
            "assets/cases/pitch/pengeskyen_6.jpg"
        ],
        description: "The game consists of several mini games."
    },
    {
        id: "pitch-cocio",
        title: "Cocio – The Wingman Shake Game",
        client: "Cocio",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/cocio_1.jpg",
        logo: "assets/logos/cocio-white.png",
        video: "",
        images: [
            "assets/cases/pitch/cocio_1.jpg",
            "assets/cases/pitch/cocio_2.jpg",
            "assets/cases/pitch/cocio_3.jpg",
            "assets/cases/pitch/cocio_4.jpg",
            "assets/cases/pitch/cocio_5.png"
        ],
        description: "A CineGame pitch for Cocio: The Wingman Shake Game."
    },
    {
        id: "pitch-one",
        title: "OnePlus – The Race",
        client: "OnePlus",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/one_plus_01.jpg",
        logo: "assets/cases/pitch/one_plus_logo.png",
        logoBox: [6, 32, 308, 71, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/one_plus_01.jpg",
            "assets/cases/pitch/one_plus_2.jpg"
        ],
        description: "A CineGame pitch for OnePlus: The Race."
    },
    {
        id: "pitch-stimorol",
        title: "Stimorol – The Chew Game",
        client: "Stimorol",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/stimorol_1.jpg",
        logo: "assets/cases/pitch/stimorol_logo.png",
        logoBox: [0, 22, 350, 79, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/stimorol_1.jpg"
        ],
        description: "A CineGame pitch for Stimorol: The Chew Game."
    },
    {
        id: "pitch-mobilepay",
        title: "MobilePay – The Game",
        client: "MobilePay",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mobilepay_1.jpg",
        logo: "assets/cases/pitch/mobilepay_logo.png",
        logoBox: [9, 15, 326, 104, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/mobilepay_1.jpg"
        ],
        description: "A CineGame pitch for MobilePay: The Game."
    },
    {
        id: "pitch-volkswagen",
        title: "Volkswagen – Game pitch",
        client: "Volkswagen",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/vw_1.jpg",
        logo: "assets/logos/volkswagen.svg",
        video: "",
        images: [
            "assets/cases/pitch/vw_1.jpg",
            "assets/cases/pitch/vw_2.jpg",
            "assets/cases/pitch/vw_3.jpg",
            "assets/cases/pitch/vw_4.jpg",
            "assets/cases/pitch/vw_5.jpg"
        ],
        description: "A CineGame pitch for Volkswagen."
    },
    {
        id: "pitch-sunweb",
        title: "Sunweb – The Ski Game",
        client: "Sunweb",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/sunweb-obstaclerunner.jpg",
        logo: "assets/logos/sunweb-white.png",
        video: "",
        images: [
            "assets/cases/pitch/sunweb-obstaclerunner.jpg",
            "assets/cases/pitch/sunweb-obstaclerunner-1-.jpg",
            "assets/cases/pitch/sunweb-obstaclerunner-2-.jpg"
        ],
        description: "A CineGame pitch for Sunweb: The Ski Game."
    },
    {
        id: "pitch-kims-dating",
        title: "Kims – Dating",
        client: "Kims",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kim-s-dating.jpg",
        logo: "assets/cases/pitch/logo_kims.png",
        logoBox: [2, 0, 192, 87, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/kim-s-dating.jpg",
            "assets/cases/pitch/kim-s-dating-1-.jpg"
        ],
        description: "A CineGame pitch for Kims: Dating."
    },
    {
        id: "pitch-normal",
        title: "Normal – The Game",
        client: "Normal",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/normal1.jpg",
        logo: "assets/cases/pitch/normal.png",
        logoBox: [7, 17, 336, 141, 350, 175],
        video: "",
        images: [
            "assets/cases/pitch/normal1.jpg",
            "assets/cases/pitch/normal2.jpg"
        ],
        description: "A CineGame pitch for Normal: The Game."
    },
    {
        id: "pitch-samsung",
        title: "Samsung – Find Object",
        client: "Samsung",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/samsung_game1.jpg",
        logo: "assets/cases/pitch/samsung_find_objeckt_logo.png",
        logoBox: [2, 29, 184, 30, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/samsung_game1.jpg",
            "assets/cases/pitch/samsung_game2.jpg",
            "assets/cases/pitch/samsung_lobby.jpg",
            "assets/cases/pitch/samsung_game3.jpg",
            "assets/cases/pitch/samsung_game4.jpg",
            "assets/cases/pitch/samsung_winner.jpg"
        ],
        description: "Find the object with your Samsung phone."
    },
    {
        id: "pitch-about-you",
        title: "About You – The Word Game",
        client: "About You",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lobby1-pt.jpg",
        logo: "assets/cases/pitch/about-you_logo.png",
        logoBox: [0, 49, 194, 38, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/lobby1-pt.jpg",
            "assets/cases/pitch/lobby2-pt.jpg",
            "assets/cases/pitch/game1-pt.jpg",
            "assets/cases/pitch/game2-pt.jpg",
            "assets/cases/pitch/winner-pt.jpg"
        ],
        description: "A CineGame pitch for About You: The Word Game."
    },
    {
        id: "pitch-vigor",
        title: "Vigor – Follow the Vigor",
        client: "Vigor",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/v1.png",
        logo: "assets/cases/pitch/logo_vigor.png",
        logoBox: [11, 16, 145, 56, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/v1.png",
            "assets/cases/pitch/v3.png",
            "assets/cases/pitch/v4.png",
            "assets/cases/pitch/v5.png",
            "assets/cases/pitch/v61.jpg"
        ],
        description: "A CineGame pitch for Vigor: Follow the Vigor."
    },
    {
        id: "pitch-booking",
        title: "Booking.com – The Game",
        client: "Booking.com",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/booking.com_pitch_de-1-.jpg",
        logo: "assets/cases/pitch/logo_booking.png",
        logoBox: [2, 27, 189, 32, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/booking.com_pitch_de-1-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-2-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-3-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-4-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-5-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-6-.jpg"
        ],
        description: "A CineGame pitch for Booking.com: The Game."
    },
    {
        id: "pitch-air-new-zealand",
        title: "Air New Zealand – The Game",
        client: "Air New Zealand",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/airnewzealand_pitch.jpg",
        logo: "assets/cases/pitch/logo_az.png",
        logoBox: [2, 29, 189, 29, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/airnewzealand_pitch.jpg",
            "assets/cases/pitch/airnewzealand_pitch-1-.jpg",
            "assets/cases/pitch/airnewzealand_pitch-2-.jpg",
            "assets/cases/pitch/airnewzealand_pitch-3-.jpg"
        ],
        description: "A CineGame pitch for Air New Zealand: The Game."
    },
    {
        id: "pitch-wolt",
        title: "Wolt – The Delivery Game",
        client: "Wolt",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/w1.jpg",
        logo: "assets/cases/pitch/logo_wolt.png",
        logoBox: [2, 9, 190, 69, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/w1.jpg",
            "assets/cases/pitch/w2.jpg",
            "assets/cases/pitch/w3.jpg",
            "assets/cases/pitch/w4.jpg",
            "assets/cases/pitch/w5.jpg",
            "assets/cases/pitch/w6.jpg"
        ],
        description: "A CineGame pitch for Wolt: The Delivery Game."
    },
    {
        id: "pitch-mcd-dinerdash",
        title: "McDonald's – DinnerDash",
        client: "McDonald's",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mcd_deleveri1.jpg",
        logo: "assets/cases/pitch/mcd_logo_big.png",
        logoBox: [0, 19, 350, 184, 350, 222],
        video: "",
        images: [
            "assets/cases/pitch/mcd_deleveri1.jpg",
            "assets/cases/pitch/mcd_deleveri2.jpg",
            "assets/cases/pitch/mcd_wolt1.jpg",
            "assets/cases/pitch/mcd_wolt2.jpg",
            "assets/cases/pitch/mcd_deliveroo1.jpg",
            "assets/cases/pitch/mcd_deliveroo2.jpg",
            "assets/cases/pitch/mcd_foodora1.jpg",
            "assets/cases/pitch/mcd_foodora2.jpg"
        ],
        description: "A CineGame pitch for McDonald's: DinnerDash."
    }
];
