// ---------------------
// Structure
// ---------------------
// Domain: Origin/Civilization
// Supergroup: Faction
// Group: Historical event
// Character: only one Domain, one (or two?) Supergroup, but multiple Group

// Constants

const cardWidth = 220;
const cardHeight = 90;

// List of data

const struct_domain_list = [
    {
        id: "Extraplanar",
        name: {
            en: "Extraplanar",
            fr: "Extraplanaire"
        },
        style: {
            color: "#81D",
            icon: ""
        }
    },
    {
        id: "Karui",
        name: {
            en: "Karui",
            fr: "Karui"
        },
        style: {
            color: "#EA1",
            icon: ""
        }
    },
    {
        id: "Azmeri",
        name: {
            en: "Azmeri",
            fr: "Azméri"
        },
        style: {
            color: "#CBA",
            icon: ""
        }
    },
    {
        id: "Templar",
        name: {
            en: "Templar",
            fr: "Templier"
        },
        style: {
            color: "#0BF",
            icon: ""
        }
    },
    {
        id: "Vaal",
        name: {
            en: "Vaal",
            fr: "Vaal"
        },
        style: {
            color: "#D00",
            icon: ""
        }
    },
    {
        id: "Kalguur",
        name: {
            en: "Kalguur",
            fr: "Kalguur"
        },
        style: {
            color: "#478",
            icon: ""
        }
    },
    {
        id: "Maraketh",
        name: {
            en: "Maraketh",
            fr: "Maraketh"
        },
        style: {
            color: "#CB0",
            icon: ""
        }
    },
    {
        id: "Ancient",
        name: {
            en: "Other pre-historical",
            fr: "Autre pré-histoire"
        },
        style: {
            color: "#57F",
            icon: ""
        }
    },
    {
        id: "Ezomyte",
        name: {
            en: "Ezomyte",
            fr: "Ezomyte"
        },
        style: {
            color: "#680",
            icon: ""
        }
    },
    {
        id: "Trarthan",
        name: {
            en: "Trarthan",
            fr: "Trarthien"
        },
        style: {
            color: "#C40",
            icon: ""
        }
    },
    {
        id: "Eternal",
        name: {
            en: "Eternal",
            fr: "Éternel"
        },
        style: {
            color: "#999",
            icon: ""
        }
    }
]

const struct_faction_list = [
    {
        id: "Faridun",
        name: {
            en: "Faridun",
            fr: "Faridun"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Settler",
        name: {
            en: "Settler",
            fr: "Colon"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Primeval",
        name: {
            en: "Primeval",
            fr: "Primordial"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Precursor",
        name: {
            en: "Precursor",
            fr: "Précurseur"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Lightless",
        name: {
            en: "Lightless",
            fr: "Sans-lumière"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Breach",
        name: {
            en: "Breach",
            fr: "Brèche"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Beyond",
        name: {
            en: "Beyond",
            fr: "Ailleurs"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Viridian wildwood",
        name: {
            en: "Viridian Wildwood",
            fr: "Sylve Viridienne"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "God",
        name: {
            en: "God",
            fr: "Divinité"
        },
        style: {
            color: "",
            icon: ""
        }
    }
]

const struct_group_list = [
    {
        id: "Purity Rebellion",
        name: {
            en: "Purity Rebellion",
            fr: "Rebellion de la Pureté"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Brinerot",
        name: {
            en: "Brinerot",
            fr: "Selrance"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Mutewind",
        name: {
            en: "Mutewind",
            fr: "Ventmuet"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Redblade",
        name: {
            en: "Redblade",
            fr: "Rougelame"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Order of the Djinn",
        name: {
            en: "Order of the Djinn",
            fr: "Ordre du Djinn"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "The Circle",
        name: {
            en: "The Circle",
            fr: "Le Cercle"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Immortals Syndicate",
        name: {
            en: "Immortals Syndicate",
            fr: "Syndicat des immortels"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Perandus",
        name: {
            en: "Perandus",
            fr: "Pérandus"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Servant of Decay",
        name: {
            en: "Servant of Decay",
            fr: "Serviteur du Déclin"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Servant of the Cleansing fire",
        name: {
            en: "Servant of the Cleansing fire",
            fr: "Serviteur du Feu Purificateur"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Servant of the Tangle",
        name: {
            en: "Servant of the Tangle",
            fr: "Serviteur du Grand Enchevêtrement"
        },
        style: {
            color: "",
            icon: ""
        }
    },
    {
        id: "Kingsmarch",
        name: {
            en: "Kingsmarch",
            fr: "Marcheroi"
        },
        style: {
            color: "",
            icon: ""
        }
    }
]

const struct_character_list = [
    // //////////////   KARUI   //////////////// //
    {
        id: "Kaom",
        name: {},
        title: {
            en: "King, Chieftain of the Ngamahu tribe",
            fr: "Roi, Chef de la tribu Ngamahu"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: ["Purity Rebellion"],
        relation: [{"Hyrri Ngamaky": {"en": "Niece", "fr": "Nièce"}}]
    },
    {
        id: "Hyrri Ngamaku",
        name: {},
        title: {
            en: "Queen",
            fr: "Reine"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Rakiata",
        name: {},
        title: {
            en: "Chieftain of the Tasalio tribe",
            fr: "Chef de la tribu Tasalio"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Ikiaho",
        name: {},
        title: {
            en: "Chieftain of the Aronhongui tribe",
            fr: "Chef de la tribu Aronhongui"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Kiloava",
        name: {},
        title: {
            en: "Chieftain of the Valako tribe",
            fr: "Chef de la tribu Valako"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Tawhanuku",
        name: {},
        title: {
            en: "Chieftain of the Hinekora tribe",
            fr: "Chef de la tribu Hinekora"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Maata",
        name: {},
        title: {
            en: "Chieftain of the Tawhoa tribe",
            fr: "Chef de la tribu Tawhoa"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Kahuturoa",
        name: {},
        title: {
            en: "Chieftain of the Rongokurai tribe",
            fr: "Chef de la tribu Rongokurai"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Utula",
        name: {},
        title: {
            en: "Chieftain of the Kitava tribe",
            fr: "Chef de la tribu Kitava"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Ahuana",
        name: {},
        title: {
            en: "Chieftain of the Ramako tribe",
            fr: "Chef de la tribu Ramako"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Akoya",
        name: {},
        title: {
            en: "Chieftain of the Tukohama tribe",
            fr: "Chef de la tribu Tukohama"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Haku",
        name: {},
        icon: "",
        domain: "Karui",
        factions: [],
        groups: ["Immortals Syndicate"]
    },
    {
        id: "Maramoa",
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Siosa",
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Lani",
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Wakano",
        title: {
            en: "The Barber",
            fr: "Le barbier"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: ["The Circle"]
    },
    {
        id: "Lavianga",
        title: {
            en: "Advisor to Kaom",
            fr: "Conseiller de Kaom"
        },
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Tane Octavius",
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Navali",
        icon: "",
        domain: "Karui",
        factions: [],
        groups: []
    },
    {
        id: "Hinekora",
        name: {},
        title: {
            en: "Goddess of Death",
            fr: "Déesse de la mort"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Ngamahu",
        name: {},
        title: {
            en: "Father of Fire",
            fr: "Père du feu"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Tasalio",
        name: {},
        title: {
            en: "Father of Water",
            fr: "Père de l'eau"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Arohongui",
        name: {},
        title: {
            en: "Mother of the Moon",
            fr: "Mère de la lune"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Valako",
        name: {},
        title: {
            en: "Father of Thunder",
            fr: "Père de la foudre"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Tawhoa",
        name: {},
        title: {
            en: "Father of the Forest",
            fr: "Père de la forêt"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Kitava",
        name: {},
        title: {
            en: "Father of Hunger, Chaos, and Corruption",
            fr: "Père de la faim, du chaos, et de la corruption"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Hinekora",
        name: {},
        title: {
            en: "Mother of Death",
            fr: "Mère de la mort"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Rongokurai",
        name: {},
        title: {
            en: "Father of the Night",
            fr: "Père de la nuit"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Ramako",
        name: {},
        title: {
            en: "Mother of the Moon",
            fr: "Mère de la lune"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    {
        id: "Tukohama",
        name: {},
        title: {
            en: "Father of War",
            fr: "Père de la guerre"
        },
        icon: "",
        domain: "Karui",
        factions: ["God"],
        groups: []
    },
    // //////////////   ANCIENT  ////////////// //
    {
        id: "Uzaza",
        title: {
            en: "The first king",
            fr: "Le premier roi"
        },
        domain: "Ancient",
        factions: ["Primeval"],
        groups: []
    },
    {
        id: "Putembo",
        title: {
            en: "King",
            fr: "Roi"
        },
        domain: "Ancient",
        factions: ["Primeval"],
        groups: []
    },
    {
        id: "Aul (Ahn)",
        title: {
            en: "The last king",
            fr: "Le dernier roi"
        },
        domain: "Ancient",
        factions: ["Primeval"],
        groups: []
    },
    {
        id: "Ahkeli",
        title: {
            en: "The Clayshaper",
            fr: "La façonneuse d'argile"
        },
        domain: "Ancient",
        factions: [],
        groups: ["Order of the Djinn"]
    },
    {
        id: "Kulemak",
        domain: "Ancient",
        factions: ["Lightless"],
        groups: []
    },
    {
        id: "Ulaman",
        title: {
            en: "Lich lord",
            fr: "Seigneur liche"
        },
        domain: "Ancient",
        factions: [],
        groups: ["Lightless", "Abyss"]
    },
    {
        id: "Kurgal",
        title: {
            en: "Lich lord",
            fr: "Seigneur liche"
        },
        domain: "Ancient",
        factions: [],
        groups: ["Lightless", "Delve"]
    },
    {
        id: "Amanamu",
        title: {
            en: "Lich lord",
            fr: "Seigneur liche"
        },
        domain: "Ancient",
        factions: [],
        groups: ["Lightless", "Abyss"]
    },
    {
        id: "Tecrod",
        title: {
            en: "Lich lord",
            fr: "Seigneur liche"
        },
        domain: "Ancient",
        factions: [],
        groups: ["Lightless"]
    },
    // //////////////   AZMERI  ////////////// //
    {
        id: "Yeena",
        domain: "Azmeri",
        factions: [],
        groups: []
    },
    {
        id: "Greust",
        domain: "Azmeri",
        factions: [],
        groups: []
    },
    {
        id: "Silk",
        name: {
            en: "Silk",
            fr: "Fil-de-soie"
        },
        domain: "Azmeri",
        factions: [],
        groups: []
    },
    {
        id: "Oshabi",
        domain: "Azmeri",
        factions: [],
        groups: []
    },
    {
        id: "Eramir",
        domain: "Azmeri",
        factions: [],
        groups: []
    },
    {
        id: "Egrin",
        domain: "Azmeri",
        factions: [],
        groups: ["Order of the Djinn"]
    },
    // //////////////   ETERNAL  ////////////// //
    {
        id: "Tarcus Veruso",
        title: {
            en: "Prima Imperialis",
            fr: "Prima Imperialis"
        },
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Chiara",
        domain: "Eternal",
        factions: [],
        groups: [],
        relation: [{"Tarcus Veruso": {"en": "Husband", "fr": "Mari"}}]
    },
    {
        id: "Caspiro",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Alano Phrecia",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Romira Phrecia",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Tyndarus Phrecius",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Izaro Phrecius",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Chitus Perandus",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Sigmund Fairgraves",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Marceus Lioneye",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Gaius Sentari",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Lazhwar",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Malachai",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Icius Perandus",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Cadiro Perandus",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Dialla",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Maligaro",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Shavronne",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Doedre",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Geofri",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Raulo (Fidelitas)",
        domain: "Eternal",
        factions: [],
        groups: []
    },
    {
        id: "Hector Titucius",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Ondar",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Alsarus",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Victario Nevalius",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Marylene",
        domain: "Eternal",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Prospero",
        domain: "Eternal",
        factions: [],
        groups: ["God"]
    },
    // //////////////   TEMPLAR  ////////////// //
    {
        id: "Voll",
        title: {
            en: "Emperor of Purity",
            fr: "Empereur de la pureté"
        },
        domain: "TEMPLAR",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Valdo Caesarus",
        name: {
            en: "Valdo Caesarus (The Shaper)",
            fr: "Valdo Caesarus (Le Façonneur)"
        },
        title: {
            en: "Chief Arkon",
            fr: "Archon en chef"
        },
        icon: "",
        domain: "Templar",
        factions: [],
        groups: []
    },
    // //////////////   EZOMYTE  ////////////// //
    {
        id: "Skothe",
        name: {},
        title: {
            en: "King",
            fr: "Roi"
        },
        icon: "",
        domain: "Ezomyte",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Rigwald",
        name: {},
        title: {
            en: "The wolven king, Thane",
            fr: "Le roi loup, Thane"
        },
        icon: "",
        domain: "Ezomyte",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    // //////////////   MARAKETH  ////////////// //
    {
        id: "Deshret",
        name: {},
        title: {
            en: "The Red Sekhema",
            fr: "La Sékhéma Rouge"
        },
        icon: "",
        domain: "Maraketh",
        factions: [],
        groups: ["Purity Rebellion"]
    },
    {
        id: "Saresh",
        title: {
            en: "Lich",
            fr: "Liche"
        },
        domain: "Maraketh",
        factions: [],
        groups: ["Lightless", "Order of the Djinn", "Afarud"]
    },
    {
        id: "Varashta",
        title: {
            en: "The Winter Sekhema",
            fr: "La Sékhéma de l'hiver"
        },
        domain: "Maraketh",
        factions: [],
        groups: ["Winter of worlds"]
    },
    {
        id: "Aukuna",
        title: {
            en: "The Black Sekhema",
            fr: "La Sékhéma noir"
        },
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Orbala / Garukhan",
        title: {
            en: "Sekhema of Sekhema",
            fr: "Sékhéma des Sékhéma"
        },
        domain: "Maraketh",
        factions: ["Pantheon"],
        groups: []
    },
    {
        id: "Asenath",
        title: {
            en: "The Golden Sekhema",
            fr: "La Sékhéma Dorée"
        },
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Oyun",
        title: {
            en: "Sekhema",
            fr: "Sékhéma"
        },
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Asala",
        title: {
            en: "Sekhema",
            fr: "Sékhéma"
        },
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Kira",
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Tasuni",
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Irasha",
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Zarka",
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Adiyah",
        title: {
            en: "The Wayfinder",
            fr: "La passe-muraille"
        },
        domain: "Maraketh",
        factions: [],
        groups: ["Rogue Harbour"]
    },
    {
        id: "Nenet",
        title: {
            en: "The Scout",
            fr: "L'éclaireuse"
        },
        domain: "Maraketh",
        factions: [],
        groups: ["Rogue Harbour", "Faridun"]
    },
    {
        id: "Nashta",
        title: {
            en: "The Usurper",
            fr: "L'usurpatrice"
        },
        domain: "Maraketh",
        factions: [],
        groups: []
    },
    {
        id: "Sumei",
        title: {
            en: "Master Lorekeeper",
            fr: "Maître-Gardienne des traditions"
        },
        domain: "Maraketh",
        factions: [],
        groups: ["Order of the Djinn"]
    },
    {
        id: "Jamanra",
        domain: "Maraketh",
        factions: [],
        groups: ["Faridun"]
    },
    {
        id: "Khatal",
        domain: "Maraketh",
        factions: [],
        groups: ["Faridun"]
    },
    // //////////////   VAAL  ////////////// //
    {
        id: "Xibaqua",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Ralakesh",
        title: {
            en: "Master of a Million Faces",
            fr: "Maître aux millions de visages"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Pantheon"]
    },
    {
        id: "Yugul",
        title: {
            en: "Reflection of Terror",
            fr: "Reflet de la terreur"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Pantheon"]
    },
    {
        id: "Arakaali",
        title: {
            en: "Spinner of shadows",
            fr: "Tisseuse d'ombres"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Pantheon"]
    },
    {
        id: "Yaomac",
        title: {
            en: "Shepherd of Souls",
            fr: "Berger des âmes"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Pantheon"]
    },
    {
        id: "Tetzlapokal",
        title: {
            en: "Queen of the Vaals",
            fr: "Reine des Vaals"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Atziri",
        title: {
            en: "Last Queen of the Vaals",
            fr: "Dernière Reine des Vaals"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Kishara",
        title: {
            en: "Explorer",
            fr: "Exploratrice"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Brinerot"]
    },
    {
        id: "Zerphi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Doryani",
        title: {
            en: "Thaumatugist",
            fr: "Thaumaturgiste"
        },
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: ["Brinerot"]
    },
    {
        id: "Zeel",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Atalui",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Mahuatzi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Ixolatl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Napuatzi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Mahuxotl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Juantalotl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Cholotl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Citaqualotl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Puhuarte",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Xopec",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Tzamoto",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Topotante",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Xipocado",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Paquate",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Zalatl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Matatl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Quipolatl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Muhuxotl",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Opiloti",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Jiquani",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Ahuatotli",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Tacati",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Estazuni",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Hayoxi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Zantipi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Ahuana2",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Zilquapa",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Azcapa",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Ticaba",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Atmohua",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Uromoti",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Guatelitzi",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Alva Valaï",
        icon: "",
        domain: "Vaal",
        factions: [],
        groups: []
    },
    {
        id: "Johan",
        name: {},
        title: {
            en: "The King's Hand",
            fr: "La Main du Roi"
        },
        icon: "",
        domain: "Kalguur",
        factions: [],
        groups: ["Kingsmarch"]
    },
    {
        id: "Elder",
        name: {
            en: "The Elder",
            fr: "L'Ancien"
        },
        title: {},
        icon: "",
        domain: "Extraplanar",
        factions: [],
        groups: ["Servant of Decay"]
    },
    // //////////////   TRARTHAN  ////////////// //
    {
        id: "Ixan Keita",
        icon: "",
        domain: "Trarthan",
        factions: [],
        groups: []
    },
    {
        id: "Quilon Bardiya",
        icon: "",
        domain: "Trarthan",
        factions: [],
        groups: []
    },
    {
        id: "Kylian Cyaxan",
        icon: "",
        domain: "Trarthan",
        factions: [],
        groups: []
    },
    {
        id: "Ratha Azadi",
        icon: "",
        domain: "Trarthan",
        factions: [],
        groups: []
    }
]

const struct_relation_list = [
    {
        from: "Kaom",
        fromDesc: {
            en: "->",
            fr: "->"
        },
        to: "Hinekora",
        toDesc: {}
    }
]