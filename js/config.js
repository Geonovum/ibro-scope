let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Scopedocument Informatiemodel IBRO",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "ibro",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "scope",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2025-05-14",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Dick Krijtenburg",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Dick Krijtenburg",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/ibro-scope",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //   {
  //      label: "pdf",
  //        uri: "template.pdf",
  //    },
  //],
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    }, 
    EMSO: {
      id: "EMSO",
      title: "DiS Geo: Eisen aan model samenhangende objectenregistratie",
      href: "https://docs.geostandaarden.nl/disgeo/emso/",
      status: "Versie ter vaststelling",
      publisher: "Geonovum",
      date: "2021-06-16"
    },
    CityGML: {
      id: "CityGML",
      title:    "OGC City Geography Markup Language (CityGML) Part 1: Conceptual Model Standard v3.0",
      href:     "https://docs.ogc.org/is/20-010/20-010.html",
      status:   "Published",
      publisher:"Open Geospatial Consortium",
      editors:  ["Thomas H. Kolbe", "Tatjana Kutzner", "Carl Stephen Smyth", "Claus Nagel", "Carsten Roensdorf", "Charles Heazel"],
      date:     "2021-09-13",
    },
    NLSBB: {
      id: "NLSBB",
      title: "NL-SBB - Standaard voor het beschrijven van begrippen",
      href: "https://docs.geostandaarden.nl/nl-sbb/nl-sbb/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-10-10"
    },
    "NEN3610": 
      {  
        title:      "NEN 3610:2022 nl - BBasismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
        href:       "https://www.nen.nl/nen-3610-2022-nl-296137",
        status:     "Definitief",
        publisher:  "NEN",
        date:       "2022-06-01",
    },
    "disgeo-mod": 
      {
        title:      "Modelleerprincipes samenhangende objectenregistratie",
        href:       "https://geonovum.github.io/disgeo-imsor/modelleerprincipes/",
        status:     "Werkversie",
        date:       "2023-02-17",
        publisher:  "Geonovum",
      },
    "disgeo-arch":
      {
        title:      "DiS Geo: Architectuurbeschrijving Voorzieningen Samenhangende Objectenregistratie",
        href:       "https://docs.geostandaarden.nl/disgeo/arch/",
        status:     "Versie ter vaststelling",
        date:       "2021-06-16",
        publisher:  "Geonovum",
      },
    "disgeo-gen":
        {
          title:      "Overzicht generieke onderwerpen voor DisGeo informatiemodellering",
          href:       "https://geonovum.github.io/disgeo-imsor/documentatie",
          status:     "werkversie",
          date:       "2023-02-17",
          publisher:  "Geonovum",
        },
  }
};
