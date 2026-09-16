/* =========================================================================
   content.js — Natuurkunde H1 (§1.1, §1.2) + H2 (§2.3, §2.4)
   Nova NaSk 1-2 mavo/havo, blz. 8-17 en 48-67.
   Inhoud volgt 02-verwerkt/brontekst.md en 02-verwerkt/leerplan.md.
   Engine = tools/oefen-engine (canoniek); dit bestand is de vak-inhoud.

   Regel: elke vraag heeft w + meer, elke mc heeft per-optie fout-uitleg.
   Check met: node tools/checks/audit-feedback.mjs <dit bestand>
              node tools/checks/genverify.mjs   <deze map>
              node tools/checks/nask-verify.mjs <deze map>
   ========================================================================= */

window.VAK = {
  id: "natuurkunde_h1h2",
  titel: "Natuurkunde met Storm, H1 & H2",
  brand: "Natuurkunde met Storm",
  badge: "⚛",
  mascotEmoji: "🔬",
  spiekTitel: "Natuurkunde H1 & H2, onderzoeken en dichtheid",
  wiskunde: true,                       // laadt math.js: numeriek nakijken + begrippen-modus
  spraak: { vraagLang: "nl-NL", antwoordLang: "nl-NL" },
  matching: { stripInfinitief: false, accentTolerant: true, lidwoordTolerant: false },
  masteryHits: 2,
  /* de antwoorden zijn kale getallen, dus geen xⁿ en haakjes onder het veld:
     een komma en een maalpunt zijn wél nuttig */
  rekenToetsen: [[",", ","], ["·", "·"]],
  tegels: ["leerstof", "begrippen", "proeftoets", "spiekblad"],
  proefTitel: "Hoofdstuktoets",
  tegelProef: { em: "📝", h: "Hoofdstuktoets", p: "Alle stof door elkaar, net als op het proefwerk" }
};

/* =========================================================================
   LEERSTOF — 10 onderwerpen x 3 niveaus (Brons, Zilver, Goud)
   ========================================================================= */
window.LEERSTOF = [

/* ================================================================ 1.1 — A */
{
  id: "vakken", emoji: "🧪", titel: "1.1 Biologie, natuurkunde of scheikunde?",
  kort: "Levend of niet-levend? En blijft de stof dezelfde stof?",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "<b>Wetenschap</b> is kennis opdoen én die kennis gebruiken in het dagelijks leven. Een <b>natuurwetenschap</b> is een wetenschap die de <b>natuur</b> bestudeert.",
        "Op school zijn dat er drie. De eerste vraag die je stelt is: gaat het over iets dat <b>leeft</b>?",
        "<b>Biologie</b> = de <b>levende</b> natuur: planten, dieren, jouw lichaam.<br><b>Natuurkunde</b> en <b>scheikunde</b> = de <b>niet-levende</b> natuur.",
        "Een bloem die bloeit, een vogel die naar het zuiden vliegt: dat leeft, dus biologie. Bliksem, een smeltende kaars, een roestende spijker: dat leeft niet."
      ],
      regel: "Vraag 1: leeft het? Ja → biologie. Nee → natuurkunde of scheikunde.",
      voorbeelden: [
        { en: "Een bloeiende bloem", let: "Een plant leeft, dus <b>biologie</b>." },
        { en: "Het ontstaan van bliksem", let: "Bliksem leeft niet, dus natuurkunde of scheikunde." },
        { en: "Zonnepanelen die stroom maken", let: "Niet-levend, dus geen biologie." }
      ],
      vragen: [
        { t: "mc", q: "Wat bestudeert het vak <b>biologie</b>?",
          o: ["De levende natuur", "De niet-levende natuur", "Alleen blijvende veranderingen", "Alleen tijdelijke veranderingen"],
          a: "De levende natuur",
          fout: {
            "De niet-levende natuur": "dat zijn juist natuurkunde en scheikunde. Biologie gaat over wat leeft: planten, dieren, je eigen lichaam.",
            "Alleen blijvende veranderingen": "dat is scheikunde. Biologie kijkt niet naar blijvend of tijdelijk, maar naar wat leeft.",
            "Alleen tijdelijke veranderingen": "dat is natuurkunde. Bij biologie draait het om leven, niet om het soort verandering."
          },
          w: "Biologie = de levende natuur.",
          meer: "Alle drie zijn natuurwetenschappen. Biologie pakt het levende deel: planten, dieren en het menselijk lichaam." },

        { t: "mc", q: "Een bloeiende bloem hoort bij welk vak?",
          o: ["Biologie", "Natuurkunde", "Scheikunde", "Geen van deze"],
          a: "Biologie",
          fout: {
            "Natuurkunde": "een bloem is een plant, en planten leven. Natuurkunde gaat over de niet-levende natuur.",
            "Scheikunde": "scheikunde gaat over niet-levende stoffen die in andere stoffen veranderen. Een bloeiende bloem leeft.",
            "Geen van deze": "het hoort er wél bij: een bloem is levende natuur, dus biologie."
          },
          w: "Een plant leeft, dus biologie.",
          meer: "Stel altijd eerst de vraag: leeft het? Bij een bloem is het antwoord ja." },

        { t: "mc", q: "Het ontstaan van <b>geluid</b> hoort bij welk vak?",
          o: ["Natuurkunde", "Biologie", "Scheikunde", "Aardrijkskunde"],
          a: "Natuurkunde",
          fout: {
            "Biologie": "geluid zelf leeft niet. Je oor hoort erbij, maar het ontstáán van geluid is niet-levende natuur.",
            "Scheikunde": "bij geluid verandert er geen stof in een andere stof. Er ontstaat niets nieuws.",
            "Aardrijkskunde": "aardrijkskunde is geen natuurwetenschap in dit rijtje. De drie zijn biologie, natuurkunde en scheikunde."
          },
          w: "Geluid is niet-levend en er ontstaat geen nieuwe stof, dus natuurkunde.",
          meer: "Geluid, licht, elektriciteit en beweging zijn allemaal natuurkunde." },

        { t: "gap", q: "Vul in: een wetenschap die de natuur bestudeert heet een ___.",
          a: "natuurwetenschap",
          w: "Natuur + wetenschap = natuurwetenschap.",
          meer: "Biologie, natuurkunde en scheikunde zijn alle drie natuurwetenschappen." },

        { t: "mc", q: "Wat is <b>wetenschap</b> volgens het boek?",
          o: ["Kennis opdoen én die kennis toepassen in het dagelijks leven",
              "Alleen het doen van proefjes in een lab",
              "Alles wat je op school leert",
              "Het bestuderen van de levende natuur"],
          a: "Kennis opdoen én die kennis toepassen in het dagelijks leven",
          fout: {
            "Alleen het doen van proefjes in een lab": "proefjes horen erbij, maar het is meer. Wetenschap is kennis opdoen én die kennis gebruiken.",
            "Alles wat je op school leert": "te breed. Gym en Frans zijn geen wetenschap in deze betekenis.",
            "Het bestuderen van de levende natuur": "dat is precies de definitie van biologie, niet van wetenschap in het algemeen."
          },
          w: "Kennis opdoen én toepassen, dat samen is wetenschap.",
          meer: "Het toepassen is waarom we goede kleding, huizen en telefoons hebben, en vroeger berenvellen en rooksignalen." },

        { t: "sleep", opgave: "In welke natuurwetenschap hoort dit thuis?",
          chips: [ {t:"een bloeiende bloem", bak:"bio"}, {t:"de remweg van een scooter", bak:"nat"},
                   {t:"vogels die naar het zuiden vliegen", bak:"bio"}, {t:"bliksem bij onweer", bak:"nat"},
                   {t:"een roestende spijker", bak:"schei"}, {t:"hout dat verbrandt", bak:"schei"} ],
          bakjes: [ {id:"bio", label:"Biologie", som:"leeft"},
                    {id:"nat", label:"Natuurkunde", som:"niet-levend, tijdelijk"},
                    {id:"schei", label:"Scheikunde", som:"niet-levend, blijvend"} ],
          w: "Eerst: leeft het? Zo nee, verandert de stof in een andere stof?",
          meer: "Roesten en verbranden maken nieuwe stoffen, dus scheikunde. Bliksem en remmen niet, dus natuurkunde." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Leeft het niet? Dan is de tweede vraag: <b>ontstaat er een andere stof?</b>",
        "<b>Nee, dezelfde stof blijft</b> → de verandering is <b>tijdelijk</b> → <b>natuurkunde</b>.",
        "<b>Ja, er ontstaat iets nieuws</b> → de verandering is <b>blijvend</b> → <b>scheikunde</b>.",
        "Handige hulpvraag: <b>kun je het terugdraaien?</b> IJs kun je weer laten smelten tot water: tijdelijk. Van as en rook maak je nooit meer hout: blijvend."
      ],
      regel: "Tijdelijk = natuurkunde. Blijvend (andere stof) = scheikunde.",
      voorbeelden: [
        { en: "Water dat bevriest tot ijs", let: "Nog steeds water, alleen in een andere toestand → <b>natuurkunde</b>." },
        { en: "Hout dat verbrandt tot as en rook", let: "As is geen hout meer → <b>scheikunde</b>." },
        { en: "Een metalen staaf die uitzet bij verhitting", let: "Koelt af en krimpt terug → <b>natuurkunde</b>." }
      ],
      vragen: [
        { t: "mc", q: "Water bevriest tot ijs. Wat voor verandering is dat?",
          o: ["Tijdelijk, dus natuurkunde", "Blijvend, dus scheikunde", "Tijdelijk, dus scheikunde", "Blijvend, dus natuurkunde"],
          a: "Tijdelijk, dus natuurkunde",
          fout: {
            "Blijvend, dus scheikunde": "ijs is nog steeds water, alleen hard. Laat het smelten en je hebt je water terug. Er is geen nieuwe stof ontstaan.",
            "Tijdelijk, dus scheikunde": "tijdelijk klopt, maar tijdelijk hoort bij natuurkunde. Scheikunde is juist blijvend.",
            "Blijvend, dus natuurkunde": "blijvend klopt niet: je kunt ijs weer laten smelten. En blijvend zou scheikunde zijn."
          },
          w: "IJs blijft water, dus tijdelijk, dus natuurkunde.",
          meer: "Water, ijs en waterdamp zijn dezelfde stof in drie toestanden. Zulke veranderingen van toestand zijn altijd natuurkundig." },

        { t: "mc", q: "Op een oud gebouw wordt een koperen dak gelegd. Jaren later is het koper groen geworden (oxideren). Waar hoort dit bij?",
          o: ["Scheikunde, want het koper is in een andere stof veranderd",
              "Natuurkunde, want het koper is alleen van kleur veranderd",
              "Biologie, want er groeit iets op",
              "Natuurkunde, want je kunt het eraf poetsen"],
          a: "Scheikunde, want het koper is in een andere stof veranderd",
          fout: {
            "Natuurkunde, want het koper is alleen van kleur veranderd": "de kleur is het teken, niet de zaak zelf. Het groene laagje is een échte nieuwe stof, gemaakt uit koper, regen en lucht.",
            "Biologie, want er groeit iets op": "er groeit niets. Er leeft niets aan een dak. De reactie gebeurt tussen koper, water en lucht.",
            "Natuurkunde, want je kunt het eraf poetsen": "je poetst dan het nieuwe laagje weg, je maakt het koper niet terug. De verandering zelf is blijvend."
          },
          w: "Oxideren maakt een nieuwe stof, dus blijvend, dus scheikunde.",
          meer: "Roesten van ijzer is precies hetzelfde verhaal: ijzer + lucht + water geeft roest, en roest is geen ijzer meer." },

        { t: "mc", q: "Als je een kaars aansteekt, verandert vast kaarsvet in vloeibaar kaarsvet. Waar hoort dat smelten bij?",
          o: ["Natuurkunde", "Scheikunde", "Biologie", "Nergens bij, het is geen verandering"],
          a: "Natuurkunde",
          fout: {
            "Scheikunde": "dit is de bekendste instinker. Er zit vuur bij, dus het voelt scheikundig. Maar gesmolten kaarsvet is nog steeds kaarsvet: laat het afkoelen en het wordt weer hard. Het bránden van de lont is wél scheikunde.",
            "Biologie": "kaarsvet leeft niet.",
            "Nergens bij, het is geen verandering": "het is wel degelijk een verandering, namelijk van vast naar vloeibaar. Alleen een tijdelijke."
          },
          w: "Smelten is een verandering van toestand: dezelfde stof, dus natuurkunde.",
          meer: "Warmte erbij betekent niet automatisch scheikunde. Kijk altijd naar de stof: is die veranderd in iets anders?" },

        { t: "mc", q: "De gloeispiraal in een kachel wordt rood als je hem aanzet. Waar hoort dat bij?",
          o: ["Natuurkunde", "Scheikunde", "Biologie", "Scheikunde, want er komt een kleur bij"],
          a: "Natuurkunde",
          fout: {
            "Scheikunde": "het metaal van de spiraal blijft hetzelfde metaal. Zet je de kachel uit, dan wordt hij weer gewoon grijs.",
            "Biologie": "een gloeispiraal leeft niet.",
            "Scheikunde, want er komt een kleur bij": "kleurverandering is de valkuil. Kleur alleen bewijst niets. Vraag je af: is er een ándere stof ontstaan? Hier niet."
          },
          w: "Het metaal blijft hetzelfde metaal, de gloed verdwijnt weer.",
          meer: "Kleur is een aanwijzing, geen bewijs. Bij het groen worden van koper ontstaat wél een nieuwe stof, bij een gloeiende spiraal niet." },

        { t: "gap", q: "Natuurkundige veranderingen zijn ___ (één woord, tegenovergestelde van blijvend).",
          a: "tijdelijk",
          w: "Tijdelijk = natuurkunde, blijvend = scheikunde.",
          meer: "Onthoud het als een paar: tijdelijk hoort bij natuurkunde, blijvend hoort bij scheikunde." },

        { t: "sleep", opgave: "Tijdelijk (natuurkundig) of blijvend (scheikundig)?",
          chips: [ {t:"tin smelten", bak:"nat"}, {t:"aardappelen aanbakken", bak:"schei"},
                   {t:"een plastic stoel die doorbuigt", bak:"nat"}, {t:"een spijker die roest", bak:"schei"},
                   {t:"water dat verdampt", bak:"nat"}, {t:"hout dat verbrandt", bak:"schei"} ],
          bakjes: [ {id:"nat", label:"Tijdelijk → natuurkunde", som:"zelfde stof"},
                    {id:"schei", label:"Blijvend → scheikunde", som:"andere stof"} ],
          w: "Vraag bij elk: is er een andere stof ontstaan?",
          meer: "Aanbakken en verbranden maken nieuwe stoffen. Smelten, verdampen en doorbuigen niet." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu de instinkers. De valkuil is bijna altijd hetzelfde: er gebeurt iets <b>spectaculairs</b> (vuur, warmte, kleur, geluid) en dan denk je meteen scheikunde.",
        "Maar het spektakel is niet de vraag. De vraag is alleen: <b>is de stof een andere stof geworden?</b>",
        "Soms treden er <b>meerdere veranderingen tegelijk</b> op. Een ijzeren spijker die je verhit, wordt langer én gaat gloeien (natuurkundig) én kan gaan oxideren (scheikundig).",
        "Let ook op: <b>oplossen</b> (suiker in thee) is natuurkundig. De suiker is niet weg, hij zit verspreid in het water. Damp je het water in, dan heb je je suiker terug."
      ],
      regel: "Niet kijken naar warmte, kleur of vuur. Kijken naar: is er een nieuwe stof?",
      voorbeelden: [
        { en: "Suiker oplossen in thee", let: "Nog steeds suiker, verspreid in water → <b>natuurkundig</b>." },
        { en: "Een ijzeren spijker verhitten met een brander", let: "Hij wordt langer en gaat gloeien (natuurkundig), maar hij kan ook oxideren (scheikundig)." },
        { en: "De Eiffeltoren die 's zomers 30 cm langer is", let: "Uitzetten door warmte → tijdelijk → <b>natuurkundig</b>." }
      ],
      vragen: [
        { t: "mc", q: "Je lost suiker op in een glas water. Wat is er met de suiker gebeurd?",
          o: ["Hij zit nog in het water, verspreid, en je kunt hem terugkrijgen",
              "Hij is in een andere stof veranderd",
              "Hij is verdwenen",
              "Hij is gesmolten tot water"],
          a: "Hij zit nog in het water, verspreid, en je kunt hem terugkrijgen",
          fout: {
            "Hij is in een andere stof veranderd": "nee, proef maar: het water is zoet. De suiker is er nog, alleen in piepkleine stukjes verspreid. Damp het water in en de suiker ligt er weer.",
            "Hij is verdwenen": "dat kan niet. De massa van het glas is nog precies hetzelfde: 200 g water + 10 g suiker = 210 g.",
            "Hij is gesmolten tot water": "oplossen en smelten zijn twee verschillende dingen. Smelten is vast worden vloeibaar door warmte. Oplossen is verspreid raken in een vloeistof."
          },
          w: "Oplossen is natuurkundig: de stof blijft dezelfde stof.",
          meer: "Oplossen en smelten worden vaak door elkaar gehaald. Smelten = warmte erbij, vast wordt vloeibaar. Oplossen = verspreid raken in een vloeistof." },

        { t: "mc", q: "Een ijzeren spijker wordt met een brander verhit. Noem een verandering die <b>natuurkundig</b> is.",
          o: ["De spijker wordt langer (zet uit)", "De spijker roest", "Het ijzer wordt roest", "De spijker verbrandt tot as"],
          a: "De spijker wordt langer (zet uit)",
          fout: {
            "De spijker roest": "roesten is scheikundig: er ontstaat roest, een nieuwe stof. Bovendien gebeurt dat door lucht en water, niet door de brander.",
            "Het ijzer wordt roest": "dat is precies de blijvende verandering, dus scheikundig.",
            "De spijker verbrandt tot as": "ijzer verbrandt niet tot as, en verbranden zou sowieso scheikundig zijn."
          },
          w: "Uitzetten door warmte is tijdelijk: koelt hij af, dan krimpt hij terug.",
          meer: "Bij dezelfde proef zie je vaak meerdere veranderingen tegelijk: langer worden en gloeien (natuurkundig), en oxideren (scheikundig)." },

        { t: "mc", q: "Waarom is 'er kwam warmte bij kijken' géén goed bewijs voor een scheikundige verandering?",
          o: ["Omdat ook natuurkundige veranderingen warmte nodig kunnen hebben, zoals smelten en verdampen",
              "Omdat scheikundige veranderingen nooit warmte geven",
              "Omdat warmte geen grootheid is",
              "Omdat warmte alleen bij biologie hoort"],
          a: "Omdat ook natuurkundige veranderingen warmte nodig kunnen hebben, zoals smelten en verdampen",
          fout: {
            "Omdat scheikundige veranderingen nooit warmte geven": "juist wel. Een vuur geeft enorm veel warmte, en dat is scheikundig.",
            "Omdat warmte geen grootheid is": "temperatuur is wel degelijk een grootheid. Maar dat is hier niet het punt.",
            "Omdat warmte alleen bij biologie hoort": "warmte komt overal voor. Dat maakt het juist een slecht kenmerk."
          },
          w: "Warmte komt bij allebei voor, dus je kunt er niets uit afleiden.",
          meer: "Smelten, verdampen en uitzetten hebben warmte nodig en zijn natuurkundig. Roesten geeft nauwelijks warmte en is scheikundig. Kijk dus naar de stof, niet naar de warmte." },

        { t: "mc", q: "Aardappelen aanbakken in een pan: natuurkundig of scheikundig?",
          o: ["Scheikundig, want er ontstaat een bruin korstje van een nieuwe stof",
              "Natuurkundig, want de aardappel blijft een aardappel",
              "Natuurkundig, want je kunt het korstje eraf schrapen",
              "Biologisch, want een aardappel is een plant"],
          a: "Scheikundig, want er ontstaat een bruin korstje van een nieuwe stof",
          fout: {
            "Natuurkundig, want de aardappel blijft een aardappel": "aan de buitenkant niet. Het bruine korstje is nieuw materiaal dat er eerst niet was, en je krijgt de rauwe aardappel nooit meer terug.",
            "Natuurkundig, want je kunt het korstje eraf schrapen": "je schraapt dan de nieuwe stof weg, je draait de verandering niet terug.",
            "Biologisch, want een aardappel is een plant": "een aardappel in de pan leeft niet meer. Het gaat om wat er met de stof gebeurt."
          },
          w: "Aanbakken maakt een nieuwe stof, en dat is onomkeerbaar.",
          meer: "De test 'kun je het terugdraaien?' werkt hier perfect: een aangebakken aardappel wordt nooit meer rauw." },

        { t: "mc", q: "Een plastic stoel buigt door als er iemand zwaars op gaat zitten. Wat klopt?",
          o: ["Natuurkundig als de stoel terugveert, want dan is het tijdelijk",
              "Altijd scheikundig, want het plastic is vervormd",
              "Altijd biologisch, want er zit een mens op",
              "Natuurkundig, want plastic is geen stof"],
          a: "Natuurkundig als de stoel terugveert, want dan is het tijdelijk",
          fout: {
            "Altijd scheikundig, want het plastic is vervormd": "vervormen is geen nieuwe stof maken. Het plastic is nog precies hetzelfde plastic, alleen met een andere vorm.",
            "Altijd biologisch, want er zit een mens op": "het gaat om wat er met de stoel gebeurt, niet om wie erop zit.",
            "Natuurkundig, want plastic is geen stof": "plastic is wel degelijk een stof. Het klopt dat het natuurkundig is, maar om de verkeerde reden."
          },
          w: "Vorm veranderen is natuurkundig, want de stof blijft dezelfde.",
          meer: "Vergelijk met de veer van een trampoline: trek je er zacht aan, dan veert hij terug (tijdelijk). Trek je hem te ver door, dan blijft hij uitgerekt: dan is de vórm blijvend veranderd, maar het is nog steeds hetzelfde metaal, dus nog steeds natuurkundig." },

        { t: "sleep", opgave: "De instinkers: welke kant op?",
          chips: [ {t:"suiker oplossen", bak:"nat"}, {t:"koper dat groen wordt", bak:"schei"},
                   {t:"de Eiffeltoren die uitzet", bak:"nat"}, {t:"een lucifer die afbrandt", bak:"schei"},
                   {t:"een gloeispiraal die rood wordt", bak:"nat"}, {t:"melk die zuur wordt", bak:"schei"} ],
          bakjes: [ {id:"nat", label:"Natuurkundig", som:"zelfde stof"},
                    {id:"schei", label:"Scheikundig", som:"nieuwe stof"} ],
          w: "Niet kijken naar vuur, warmte of kleur. Kijken naar: nieuwe stof, ja of nee?",
          meer: "Zure melk is echt andere stof geworden en gaat nooit meer terug. Een gloeiende spiraal wordt gewoon weer grijs." }
      ]
    }
  ]
},

/* ================================================================ 1.1 — B */
{
  id: "rontgen", emoji: "🦴", titel: "1.1 Röntgenstraling",
  kort: "Onzichtbare straling die door je heen gaat, behalve door je botten.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "In <b>1895</b> ontdekte de natuurkundige <b>Wilhelm Conrad Röntgen</b> een vreemd soort stralen.",
        "Die stralen zijn <b>onzichtbaar</b> en gaan <b>dwars door papier en karton</b> heen.",
        "In je lichaam houden de <b>botten</b> een groot deel van de straling <b>tegen</b>. Je spieren en huid laten de straling bijna helemaal door.",
        "Achter je hand ontstaat daardoor een soort <b>schaduwbeeld</b>. Röntgen ontdekte dat je dat kunt fotograferen: de eerste <b>röntgenfoto's</b>."
      ],
      regel: "Botten houden röntgenstraling tegen, spieren laten hem door.",
      voorbeelden: [
        { en: "Een röntgenfoto van een hand", let: "Je ziet de botten duidelijk, de spieren nauwelijks." },
        { en: "Straling gaat door papier en karton", let: "Daarom merkte Röntgen het pas op: het werkte door alles heen." }
      ],
      vragen: [
        { t: "mc", q: "Wat houdt de meeste röntgenstraling tegen in je lichaam?",
          o: ["De botten", "De spieren", "De huid", "Het bloed"],
          a: "De botten",
          fout: {
            "De spieren": "spieren laten de straling juist bijna helemaal door. Daarom zie je ze nauwelijks op een foto.",
            "De huid": "de huid laat de straling door, net als de spieren.",
            "Het bloed": "bloed houdt de straling niet tegen. Botten zijn veel harder en dichter."
          },
          w: "Botten zijn hard en dicht, die houden de straling tegen.",
          meer: "Daarom is een röntgenfoto zo handig bij een botbreuk: de botten zie je scherp." },

        { t: "mc", q: "In welk jaar ontdekte Röntgen zijn straling?",
          o: ["1895", "1795", "1945", "2019"],
          a: "1895",
          fout: {
            "1795": "honderd jaar te vroeg. Röntgen leefde van 1845 tot 1923.",
            "1945": "te laat. Röntgen was toen al ruim twintig jaar dood.",
            "2019": "dat is het jaar waarin de standaardkilogram in Parijs werd afgeschaft, uit een heel ander hoofdstuk."
          },
          w: "1895, dat jaartal wordt gevraagd.",
          meer: "Wilhelm Conrad Röntgen leefde van 1845 tot 1923. Hij ontdekte de straling in 1895." },

        { t: "gap", q: "Foto's die gemaakt worden met röntgenstraling heten ___.",
          a: "röntgenfoto's|rontgenfoto's|röntgenfotos|rontgenfotos",
          w: "Ze zijn naar hun ontdekker genoemd.",
          meer: "Röntgenfoto's worden veel gebruikt om breuken in botten op te sporen." },

        { t: "mc", q: "Waarom kon Röntgen zijn straling niet gewoon zien?",
          o: ["De straling is onzichtbaar", "Hij had een bril nodig", "Het was te donker in zijn lab", "De straling gaat te snel"],
          a: "De straling is onzichtbaar",
          fout: {
            "Hij had een bril nodig": "zijn ogen waren niet het probleem. Niemand kan röntgenstraling zien, ook niet met een bril.",
            "Het was te donker in zijn lab": "ook met fel licht zou je het niet zien. De straling is voor het oog onzichtbaar.",
            "De straling gaat te snel": "snelheid is niet de reden. Licht gaat even snel en dat zie je wel."
          },
          w: "Röntgenstraling is onzichtbaar voor je ogen.",
          meer: "Hij merkte de straling op aan het effect: dingen lichtten op en er verschenen beelden, terwijl er niets te zien was." },

        { t: "mc", q: "Wat is een 'schaduwbeeld' bij röntgenstraling?",
          o: ["Het beeld dat ontstaat doordat botten de straling tegenhouden en spieren niet",
              "De schaduw van je hand op tafel",
              "Een foto die mislukt is",
              "Het beeld dat je met een echo maakt"],
          a: "Het beeld dat ontstaat doordat botten de straling tegenhouden en spieren niet",
          fout: {
            "De schaduw van je hand op tafel": "dat is een gewone schaduw van licht. Hier gaat het om straling die dwars door je hand heen gaat.",
            "Een foto die mislukt is": "juist niet, het schaduwbeeld ís de foto.",
            "Het beeld dat je met een echo maakt": "een echo werkt met geluidsgolven, niet met straling."
          },
          w: "Achter de botten veel schaduw, achter de spieren weinig.",
          meer: "Het werkt als een lamp achter je hand: wat het licht tegenhoudt geeft een donkere plek. Alleen is die 'lamp' hier onzichtbare straling." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Op een röntgenfoto zijn de delen die <b>veel</b> straling <b>tegenhouden wit</b>.",
        "Botten houden veel tegen → wit. Spieren houden weinig tegen → donker.",
        "Zie je op een foto iets extra wits zitten dat er niet hoort, dan is dat meestal <b>metaal</b>: een schroefje, een muntje, een sieraad. Metaal houdt heel veel straling tegen.",
        "Röntgenstraling is <b>schadelijk</b> voor je lichaam. Daarom gebruiken artsen er zo weinig mogelijk van."
      ],
      regel: "Veel straling tegenhouden = wit op de foto.",
      voorbeelden: [
        { en: "Botten op een foto", let: "Wit, want ze houden veel straling tegen." },
        { en: "Een metalen voorwerp in je keel", let: "Fel wit, want metaal houdt nog meer tegen dan bot." }
      ],
      vragen: [
        { t: "mc", q: "Welke delen zijn <b>wit</b> op een röntgenfoto?",
          o: ["De delen die veel straling tegenhouden", "De delen die veel straling doorlaten",
              "De delen die het dikst zijn", "De delen die het warmst zijn"],
          a: "De delen die veel straling tegenhouden",
          fout: {
            "De delen die veel straling doorlaten": "omgekeerd. Waar veel straling doorheen komt, wordt de foto juist donker.",
            "De delen die het dikst zijn": "dikte speelt mee, maar het gaat om hoevéél straling wordt tegengehouden. Een dikke spier blijft donker.",
            "De delen die het warmst zijn": "warmte heeft er niets mee te maken. Een röntgenfoto meet geen temperatuur."
          },
          w: "Tegenhouden = wit.",
          meer: "Onthoud het met de lamp-vergelijking: wat het licht tegenhoudt, geeft een schaduw. Op de foto is die schaduw wit." },

        { t: "mc", q: "Op een röntgenfoto van iemands hals zie je een fel wit, langwerpig voorwerp. Waarvan is dat waarschijnlijk gemaakt?",
          o: ["Metaal", "Papier", "Hout", "Plastic"],
          a: "Metaal",
          fout: {
            "Papier": "papier laat röntgenstraling gewoon door. Dat was juist Röntgens ontdekking: de straling gaat dwars door papier en karton.",
            "Hout": "hout laat veel straling door en zou nauwelijks zichtbaar zijn.",
            "Plastic": "plastic houdt weinig straling tegen en geeft geen fel wit beeld."
          },
          w: "Metaal houdt heel veel straling tegen, dus fel wit.",
          meer: "Nog witter dan bot betekent bijna altijd metaal: een schroefje, een muntje of een sieraad." },

        { t: "mc", q: "Röntgenstraling gaat wél door papier en karton heen. Wat zegt dat over papier?",
          o: ["Papier houdt bijna geen röntgenstraling tegen", "Papier is doorzichtig voor licht",
              "Papier is een metaal", "Papier is gevaarlijk"],
          a: "Papier houdt bijna geen röntgenstraling tegen",
          fout: {
            "Papier is doorzichtig voor licht": "dat is niet zo, je kunt niet door papier heen kijken. Dat is nou juist het bijzondere: voor gewoon licht is papier ondoorzichtig, voor röntgenstraling niet.",
            "Papier is een metaal": "papier is geen metaal. Metaal houdt juist heel veel straling tegen.",
            "Papier is gevaarlijk": "papier is niet gevaarlijk. De straling is dat wel."
          },
          w: "Wat de straling doorlaat, houdt hem niet tegen.",
          meer: "Vergelijk: voor gewoon licht is papier ondoorzichtig, voor röntgenstraling doorzichtig. Andere straling, andere regels." },

        { t: "gap", q: "Röntgenstraling is ___ voor je lichaam (één woord: gevaarlijk/onschuldig/...).",
          a: "schadelijk|gevaarlijk",
          w: "Daarom gebruiken artsen zo weinig mogelijk straling.",
          meer: "Een enkele foto is niet erg, maar te veel straling beschadigt je lichaam. Daarom kiest de arts altijd de kleinst mogelijke dosis." },

        { t: "mc", q: "Rolina heeft haar been gebroken. Waarom gebruikt de arts zo weinig mogelijk röntgenstraling voor de foto?",
          o: ["Omdat röntgenstraling schadelijk is voor het lichaam",
              "Omdat de foto anders te wit wordt",
              "Omdat röntgenstraling duur is",
              "Omdat het bot anders nog verder breekt"],
          a: "Omdat röntgenstraling schadelijk is voor het lichaam",
          fout: {
            "Omdat de foto anders te wit wordt": "de kwaliteit van de foto is niet de reden. Het gaat om Rolina's gezondheid.",
            "Omdat röntgenstraling duur is": "kosten zijn niet de reden die het boek noemt. Het gaat om de schade aan het lichaam.",
            "Omdat het bot anders nog verder breekt": "straling breekt geen botten. Maar hij beschadigt wel cellen."
          },
          w: "Straling beschadigt je lichaam, dus zo weinig mogelijk.",
          meer: "Precies daarom maken artsen van een ongeboren kind liever een echo met geluidsgolven: die zijn niet schadelijk." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Je zou een ongeboren kind kunnen fotograferen met röntgenstraling. Toch doen artsen dat bijna nooit.",
        "In plaats daarvan maken ze een <b>echo</b>. Een echo werkt met <b>geluidsgolven</b> met een heel hoge toon, zo hoog dat mensen ze niet kunnen horen.",
        "Het grote <b>voordeel van geluid</b>: geluidsgolven zijn <b>niet schadelijk</b> voor het lichaam. Röntgenstraling wel.",
        "Kort: zelfde doel (naar binnen kijken zonder te snijden), ander middel, en het ene middel is veilig en het andere niet."
      ],
      regel: "Echo = geluid = veilig. Röntgen = straling = schadelijk.",
      voorbeelden: [
        { en: "Een echo van een ongeboren kind", let: "Geluidsgolven, niet schadelijk." },
        { en: "Een röntgenfoto van een gebroken been", let: "Straling, dus zo weinig mogelijk en alleen als het nodig is." }
      ],
      vragen: [
        { t: "mc", q: "Wat is het grote voordeel van geluid (een echo) ten opzichte van röntgenstraling?",
          o: ["Geluidsgolven zijn niet schadelijk voor het lichaam",
              "Geluidsgolven gaan sneller",
              "Met geluid zie je de botten beter",
              "Geluid is goedkoper"],
          a: "Geluidsgolven zijn niet schadelijk voor het lichaam",
          fout: {
            "Geluidsgolven gaan sneller": "geluid gaat juist veel langzamer dan straling. En snelheid is hier niet het punt.",
            "Met geluid zie je de botten beter": "voor botten is een röntgenfoto juist beter. Een echo is beter voor zachte delen.",
            "Geluid is goedkoper": "de prijs is niet de reden die het boek geeft. Het gaat om veiligheid."
          },
          w: "Geluid beschadigt je lichaam niet, straling wel.",
          meer: "Daarom krijgt een zwangere vrouw een echo en geen röntgenfoto: het ongeboren kind is extra gevoelig voor straling." },

        { t: "mc", q: "Waarom kun je de geluidsgolven van een echo niet horen?",
          o: ["Ze hebben een veel te hoge toon voor het menselijk oor",
              "Ze zijn te zacht",
              "Ze gaan alleen door water",
              "Het zijn eigenlijk lichtgolven"],
          a: "Ze hebben een veel te hoge toon voor het menselijk oor",
          fout: {
            "Ze zijn te zacht": "niet de hardheid is het probleem, maar de toonhoogte. Ook een hárde toon die te hoog is hoor je niet.",
            "Ze gaan alleen door water": "geluid gaat door van alles heen, ook door lucht en door je lichaam.",
            "Het zijn eigenlijk lichtgolven": "nee, het zijn echt geluidsgolven. Dat is precies waarom ze veilig zijn."
          },
          w: "De toon is zo hoog dat mensen hem niet meer kunnen horen.",
          meer: "Honden en vleermuizen horen veel hogere tonen dan wij. Een echo zit nog ver boven wat een mens kan horen." },

        { t: "mc", q: "Iemand zegt: 'Een echo is beter dan een röntgenfoto, dus we moeten altijd een echo maken.' Wat klopt daar niet aan?",
          o: ["Voor botbreuken is een röntgenfoto juist duidelijker",
              "Een echo bestaat niet voor volwassenen",
              "Een echo is schadelijker",
              "Röntgenfoto's zijn altijd beter"],
          a: "Voor botbreuken is een röntgenfoto juist duidelijker",
          fout: {
            "Een echo bestaat niet voor volwassenen": "echo's worden bij iedereen gebruikt, ook bij volwassenen.",
            "Een echo is schadelijker": "omgekeerd. De echo is juist de veilige van de twee.",
            "Röntgenfoto's zijn altijd beter": "ook te kort door de bocht. Elk middel heeft zijn eigen doel."
          },
          w: "Ieder middel heeft z'n eigen doel: röntgen voor botten, echo voor zachte delen.",
          meer: "Een arts kiest het middel dat het beste past bij wat hij wil zien én het minst schadelijk is." },

        { t: "mc", q: "Op een röntgenfoto van een hals is een fel wit voorwerp in de keel te zien. Wat kun je met zekerheid zeggen?",
          o: ["Dat voorwerp houdt veel röntgenstraling tegen",
              "Dat voorwerp is van plastic",
              "Dat voorwerp is warm",
              "Dat voorwerp is zwaar"],
          a: "Dat voorwerp houdt veel röntgenstraling tegen",
          fout: {
            "Dat voorwerp is van plastic": "plastic houdt juist weinig tegen en zou niet zo wit zijn. Metaal is veel waarschijnlijker, maar 'wit' bewijst alleen dát het straling tegenhoudt.",
            "Dat voorwerp is warm": "een röntgenfoto zegt niets over temperatuur.",
            "Dat voorwerp is zwaar": "ook niet. Een foto meet geen massa, alleen hoeveel straling wordt tegengehouden."
          },
          w: "Wit op de foto betekent precies één ding: veel straling tegengehouden.",
          meer: "Uit 'wit' mag je afleiden dat het straling tegenhoudt. Dat metaal daarbij past is een gok, en niet meer dan dat." },

        { t: "gap", q: "Een 'echo' wordt gemaakt met ___ (twee woorden).",
          a: "geluidsgolven|hoge geluidsgolven|geluid golven",
          w: "Geluidsgolven met een heel hoge toon.",
          meer: "Zo hoog dat mensen ze niet kunnen horen. En vooral: ze zijn niet schadelijk." }
      ]
    }
  ]
},

/* ================================================================ 1.2 — A */
{
  id: "methode", emoji: "🔎", titel: "1.2 De wetenschappelijke methode",
  kort: "Onderzoeksvraag, hypothese, experiment, conclusie.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Een natuurkundig of scheikundig onderzoek gaat volgens vaste stappen. Die werkwijze heet de <b>wetenschappelijke methode</b>:",
        "<b>1.</b> Onderzoeksvraag opstellen<br><b>2.</b> Hypothese bedenken<br><b>3.</b> Experiment bedenken<br><b>4.</b> Experiment uitvoeren<br><b>5.</b> Meetresultaten in een tabel en/of grafiek zetten<br><b>6.</b> De onderzoeksvraag beantwoorden",
        "In de <b>onderzoeksvraag</b> staat wat je wilt <b>ontdekken</b>. Bijvoorbeeld: <i>Welke temperatuur heeft kokend water?</i>",
        "De <b>hypothese</b> is je <b>voorlopige antwoord</b>: wat dénk je dat eruit komt? Dat mag een gok zijn, maar meestal is hij ergens op gebaseerd."
      ],
      regel: "Eerst de vraag, dan je voorspelling, dan pas meten.",
      voorbeelden: [
        { en: "Zit er zetmeel in een witte boterham?", let: "Dit is de <b>onderzoeksvraag</b>: het staat als vraag, met een vraagteken." },
        { en: "Nee, er zit geen zetmeel in een witte boterham.", let: "Dit is de <b>hypothese</b>: een antwoord dat je vooraf voorspelt." }
      ],
      vragen: [
        { t: "sequence", q: "Zet de stappen van de wetenschappelijke methode in de goede volgorde.",
          stappen: ["Onderzoeksvraag opstellen", "Hypothese bedenken", "Experiment bedenken",
                    "Experiment uitvoeren", "Meetresultaten in een tabel of grafiek zetten",
                    "De onderzoeksvraag beantwoorden"],
          w: "Eerst weten wat je wilt ontdekken, dan voorspellen, dan pas doen.",
          meer: "Het bedenken komt vóór het uitvoeren, en het antwoord komt altijd helemaal aan het eind. Anders pas je je conclusie aan aan wat je hoopte." },

        { t: "mc", q: "Wat is een <b>hypothese</b>?",
          o: ["Een voorlopig antwoord: wat je vooraf denkt dat de uitkomst wordt",
              "Het antwoord dat je na het experiment opschrijft",
              "De vraag die je wilt onderzoeken",
              "De tabel met je meetresultaten"],
          a: "Een voorlopig antwoord: wat je vooraf denkt dat de uitkomst wordt",
          fout: {
            "Het antwoord dat je na het experiment opschrijft": "dat is de conclusie. De hypothese komt juist vóór het experiment.",
            "De vraag die je wilt onderzoeken": "dat is de onderzoeksvraag. De hypothese is je antwoord daarop, vooraf.",
            "De tabel met je meetresultaten": "dat is stap 5. De hypothese is geen tabel maar een voorspelling in woorden."
          },
          w: "Hypothese = voorspelling vooraf.",
          meer: "Onthoud de volgorde: vraag → hypothese (vooraf) → experiment → conclusie (achteraf)." },

        { t: "mc", q: "Wat staat er in de <b>onderzoeksvraag</b>?",
          o: ["Wat je wilt ontdekken", "Wat je hebt ontdekt", "Hoe je de proef uitvoert", "Welke meetinstrumenten je gebruikt"],
          a: "Wat je wilt ontdekken",
          fout: {
            "Wat je hebt ontdekt": "dat is de conclusie, helemaal aan het eind.",
            "Hoe je de proef uitvoert": "dat is de proefopzet, stap 3. De onderzoeksvraag zegt alleen wát je wilt weten.",
            "Welke meetinstrumenten je gebruikt": "die horen bij de proefopzet, niet bij de vraag."
          },
          w: "In de onderzoeksvraag staat wat je wilt ontdekken.",
          meer: "Een onderzoeksvraag herken je bijna altijd aan het vraagteken: 'Welke temperatuur heeft kokend water?'" },

        { t: "mc", q: "Mag een hypothese fout zijn?",
          o: ["Ja, dat is helemaal niet erg: je ontdekt dan juist iets",
              "Nee, dan heb je het onderzoek verkeerd gedaan",
              "Nee, een hypothese is altijd waar",
              "Alleen als je het experiment opnieuw doet"],
          a: "Ja, dat is helemaal niet erg: je ontdekt dan juist iets",
          fout: {
            "Nee, dan heb je het onderzoek verkeerd gedaan": "juist niet. Bij het boterham-onderzoek was de hypothese fout, en dát was de ontdekking: er zit wél zetmeel in.",
            "Nee, een hypothese is altijd waar": "een hypothese is een voorspelling, geen feit. Hij kan best missen.",
            "Alleen als je het experiment opnieuw doet": "je hoeft niets over te doen. Een foute hypothese hoort erbij."
          },
          w: "Een hypothese is een voorspelling, geen belofte.",
          meer: "Bij de witte boterham was de hypothese 'er zit geen zetmeel in'. Het jodium werd donkerblauw, dus de hypothese was niet juist. Daar leer je iets van." },

        { t: "gap", q: "De werkwijze met die vaste stappen heet de ___ methode.",
          a: "wetenschappelijke",
          w: "Wetenschappelijke methode.",
          meer: "Elk natuurkundig of scheikundig onderzoek volgt diezelfde zes stappen." },

        { t: "mc", q: "In welke stap zet je je meetresultaten overzichtelijk neer?",
          o: ["In een tabel en/of grafiek, na het uitvoeren van het experiment",
              "In de hypothese, voordat je begint",
              "In de onderzoeksvraag",
              "Dat hoeft niet, je onthoudt ze"],
          a: "In een tabel en/of grafiek, na het uitvoeren van het experiment",
          fout: {
            "In de hypothese, voordat je begint": "vooraf heb je nog geen resultaten. De hypothese is alleen je voorspelling.",
            "In de onderzoeksvraag": "daar staat alleen wat je wilt weten, nog geen getallen.",
            "Dat hoeft niet, je onthoudt ze": "het hoort echt bij de methode. Zonder overzicht kun je de vraag niet goed beantwoorden en kan niemand je werk controleren."
          },
          w: "Stap 5: meetresultaten in een tabel en/of grafiek.",
          meer: "Pas daarna, in stap 6, beantwoord je de onderzoeksvraag. De tabel is het bewijs onder je conclusie." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Het lastige is niet de lijst stappen, maar dit: <b>welke van de drie is deze zin?</b> Een onderzoeksvraag, een hypothese of een conclusie?",
        "<b>Onderzoeksvraag</b> → het is een <b>vraag</b>. Er staat een vraagteken, of het is een 'wil weten'-zin: <i>Serge wil weten hoe hoog het klaslokaal is.</i>",
        "<b>Hypothese</b> → een voorspelling <b>vóóraf</b>. Vaak met woorden als <i>ik denk dat, waarschijnlijk, ik verwacht</i>.",
        "<b>Conclusie</b> → een antwoord <b>achteraf</b>, als een feit opgeschreven: <i>Nick is het langst van de klas.</i>"
      ],
      regel: "Vraagteken = onderzoeksvraag. Voorspelling vooraf = hypothese. Feit achteraf = conclusie.",
      voorbeelden: [
        { en: "Wie is het langst in deze klas?", let: "Vraag → <b>onderzoeksvraag</b>." },
        { en: "Nick is het langst van de klas.", let: "Antwoord achteraf → <b>conclusie</b>." },
        { en: "Ik denk dat Nick het langst is.", let: "Voorspelling vooraf → <b>hypothese</b>." }
      ],
      vragen: [
        { t: "mc", q: "'Gaat elektriciteit door een plastic buis heen?' Wat is dit?",
          o: ["Een onderzoeksvraag", "Een hypothese", "Een conclusie", "Een meetresultaat"],
          a: "Een onderzoeksvraag",
          fout: {
            "Een hypothese": "een hypothese is een antwoord, geen vraag. Hier staat een vraagteken.",
            "Een conclusie": "een conclusie is ook een antwoord. Deze zin vraagt juist nog iets.",
            "Een meetresultaat": "een meetresultaat is een getal met een eenheid, niet een vraag."
          },
          w: "Vraagteken → onderzoeksvraag.",
          meer: "De simpelste test: eindigt de zin op een vraagteken, of begint hij met 'X wil weten'? Dan is het de onderzoeksvraag." },

        { t: "mc", q: "'De zon komt iedere dag op in het oosten.' Wat is dit?",
          o: ["Een conclusie", "Een onderzoeksvraag", "Een hypothese", "Een experiment"],
          a: "Een conclusie",
          fout: {
            "Een onderzoeksvraag": "er staat geen vraag. Het is een uitspraak over hoe het is.",
            "Een hypothese": "een hypothese is een voorspelling die nog getoetst moet worden. Dit is iets wat al vaststaat.",
            "Een experiment": "een experiment is een proef die je uitvoert, geen zin."
          },
          w: "Het is een antwoord dat vaststaat, dus een conclusie.",
          meer: "Conclusies schrijf je op als feit: 'De zon komt op in het oosten.' Geen vraagteken, geen 'ik denk dat'." },

        { t: "mc", q: "'Serge wil weten hoe hoog het klaslokaal is.' Wat is dit?",
          o: ["Een onderzoeksvraag", "Een conclusie", "Een hypothese", "Een meetwaarde"],
          a: "Een onderzoeksvraag",
          fout: {
            "Een conclusie": "Serge weet het nog niet, hij wíl het weten. Een conclusie komt pas als je gemeten hebt.",
            "Een hypothese": "er staat geen voorspelling bij. Hij zegt niet 'ik denk 3 meter'.",
            "Een meetwaarde": "er staat geen getal in de zin."
          },
          w: "'Wil weten' is een onderzoeksvraag zonder vraagteken.",
          meer: "Een onderzoeksvraag hoeft niet letterlijk een vraagzin te zijn. 'X wil weten hoe/of/hoeveel...' telt ook." },

        { t: "mc", q: "'Papier brandt beter dan hout.' Wat is dit?",
          o: ["Een conclusie", "Een onderzoeksvraag", "Een experiment", "Een tabel"],
          a: "Een conclusie",
          fout: {
            "Een onderzoeksvraag": "er wordt niets gevraagd, er wordt iets beweerd.",
            "Een experiment": "een experiment is wat je dóét, niet wat je opschrijft als uitkomst.",
            "Een tabel": "een tabel is een overzicht van getallen."
          },
          w: "Een uitspraak die iets vaststelt, is een conclusie.",
          meer: "Zou er staan 'Ik denk dat papier beter brandt dan hout', dan was het een hypothese. Het verschil zit in die drie woordjes vooraan." },

        { t: "sleep", opgave: "Onderzoeksvraag, hypothese of conclusie?",
          chips: [ {t:"Hoe snel gaat een e-bike?", bak:"vraag"},
                   {t:"Ik verwacht dat de e-bike sneller is", bak:"hyp"},
                   {t:"De e-bike is 8 km/u sneller", bak:"con"},
                   {t:"Wie is het langst in deze klas?", bak:"vraag"},
                   {t:"Nick is het langst van de klas", bak:"con"},
                   {t:"Waarschijnlijk zit er geen zetmeel in", bak:"hyp"} ],
          bakjes: [ {id:"vraag", label:"Onderzoeksvraag", som:"vraagteken / wil weten"},
                    {id:"hyp", label:"Hypothese", som:"voorspelling vooraf"},
                    {id:"con", label:"Conclusie", som:"antwoord achteraf"} ],
          w: "Let op de signaalwoorden: vraagteken, 'ik denk/verwacht', of een kaal feit.",
          meer: "Een hypothese en een conclusie kunnen exact dezelfde zin zijn. Het verschil is wanneer je hem opschrijft: vóór of ná het experiment." },

        { t: "mc", q: "Evelien fietst op haar nieuwe e-bike naar school en wil weten of dat sneller gaat dan op haar gewone fiets. Wat is een goede <b>onderzoeksvraag</b>?",
          o: ["Ga ik op de e-bike sneller naar school dan op mijn gewone fiets?",
              "De e-bike is sneller.",
              "Ik fiets zo hard mogelijk.",
              "Mijn accu is bijna leeg."],
          a: "Ga ik op de e-bike sneller naar school dan op mijn gewone fiets?",
          fout: {
            "De e-bike is sneller.": "dat is al een antwoord. Als voorspelling vooraf zou het een hypothese zijn, als uitkomst achteraf een conclusie.",
            "Ik fiets zo hard mogelijk.": "dat is wat je doet, niet wat je wilt weten. En het maakt de meting juist onbetrouwbaar.",
            "Mijn accu is bijna leeg.": "dat is een mededeling over de fiets, geen onderzoeksvraag."
          },
          w: "Een onderzoeksvraag vraagt iets wat je nog niet weet.",
          meer: "Goede onderzoeksvragen zijn te beantwoorden met een meting. Hier: de tijd meten op beide fietsen over dezelfde route." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu het hele onderzoek in één keer. Het boterham-onderzoek als voorbeeld:",
        "<b>Onderzoeksvraag:</b> zit er zetmeel in een witte boterham?<br><b>Hypothese:</b> nee, er zit geen zetmeel in.<br><b>Proefopzet:</b> laat een paar druppels jodium op de boterham vallen.<br><b>Uitvoeren:</b> de boterham wordt op die plek donkerblauw.<br><b>Conclusie:</b> er zit wél zetmeel in. De hypothese was niet juist.",
        "Let op de laatste zin: je zegt <b>niet</b> 'mijn hypothese was goed genoeg' of 'ik had het bijna goed'. Je zegt gewoon of hij klopte of niet.",
        "En let op: een onderzoek dat <b>niet eerlijk</b> is opgezet, geeft geen bruikbaar antwoord. Als Evelien op haar e-bike zo hard mogelijk fietst en op haar gewone fiets rustig, meet ze niet het verschil tussen de fietsen."
      ],
      regel: "Kijk of de conclusie echt volgt uit de meting, en of de meting eerlijk was.",
      voorbeelden: [
        { en: "De boterham werd donkerblauw", let: "Meting. Daaruit volgt de conclusie: er zit zetmeel in." },
        { en: "Hard fietsen op de e-bike, rustig op de gewone fiets", let: "Geen eerlijke vergelijking: je meet dan je eigen inspanning, niet de fiets." }
      ],
      vragen: [
        { t: "mc", q: "De hypothese was: 'er zit geen zetmeel in een witte boterham'. Het jodium wordt donkerblauw. Wat is de juiste conclusie?",
          o: ["Er zit wél zetmeel in de boterham; de hypothese was niet juist",
              "Er zit geen zetmeel in; het jodium was kapot",
              "De hypothese was juist, want het jodium veranderde",
              "Je kunt er niets over zeggen"],
          a: "Er zit wél zetmeel in de boterham; de hypothese was niet juist",
          fout: {
            "Er zit geen zetmeel in; het jodium was kapot": "je gaat dan je meting wegredeneren omdat de uitkomst je niet bevalt. Dat mag niet zomaar. Donkerblauw jodium is precies het teken van zetmeel.",
            "De hypothese was juist, want het jodium veranderde": "de kleurverandering laat juist zien dát er zetmeel is, dus het tegenovergestelde van de hypothese.",
            "Je kunt er niets over zeggen": "je kunt er juist heel goed iets over zeggen: jodium wordt donkerblauw bij zetmeel, en dat gebeurde."
          },
          w: "Jodium wordt donkerblauw bij zetmeel, dus er zit zetmeel in.",
          meer: "Een foute hypothese is geen mislukking. Sterker nog: je hebt iets nieuws ontdekt." },

        { t: "mc", q: "Evelien wil weten of haar e-bike sneller is dan haar gewone fiets. Ze fietst op de e-bike zo hard mogelijk en op de gewone fiets rustig. Wat is het probleem?",
          o: ["Ze meet niet het verschil tussen de fietsen, maar het verschil in hoe hard zij trapt",
              "Ze had een stopwatch moeten gebruiken",
              "Een e-bike is altijd sneller, dus meten heeft geen zin",
              "Er is geen probleem"],
          a: "Ze meet niet het verschil tussen de fietsen, maar het verschil in hoe hard zij trapt",
          fout: {
            "Ze had een stopwatch moeten gebruiken": "een stopwatch is prima, maar dat lost dit probleem niet op. Ook met een perfecte stopwatch vergelijkt ze nog appels met peren.",
            "Een e-bike is altijd sneller, dus meten heeft geen zin": "dat is een aanname, geen conclusie. En juist die aanname wilde ze toetsen.",
            "Er is geen probleem": "er is een groot probleem: ze verandert twee dingen tegelijk (de fiets én haar inspanning)."
          },
          w: "Bij een eerlijke vergelijking verander je maar één ding tegelijk.",
          meer: "Dit is dezelfde regel als bij het vergelijken van stoffen: neem van allebei een blokje van 1 cm³. Verander één ding, houd de rest gelijk." },

        { t: "mc", q: "Welke onderzoeksvraag past het beste bij een experiment met jodium?",
          o: ["Zit er zetmeel in een cracker?", "Hoe zwaar is een cracker?",
              "Hoe lang duurt het om een cracker te eten?", "Is een cracker lekkerder dan brood?"],
          a: "Zit er zetmeel in een cracker?",
          fout: {
            "Hoe zwaar is een cracker?": "daarvoor heb je een weegschaal nodig, geen indicator. Jodium meet geen massa.",
            "Hoe lang duurt het om een cracker te eten?": "dat meet je met een stopwatch, en het heeft niets met stoffen te maken.",
            "Is een cracker lekkerder dan brood?": "dat is een mening, geen meting. En bij natuur- en scheikunde mag je nooit proeven."
          },
          w: "Jodium is de indicator voor zetmeel, dus de vraag moet over zetmeel gaan.",
          meer: "Kies je onderzoeksvraag altijd bij het middel dat je hebt. Met een indicator toon je aan óf een stof aanwezig is, niet hoeveel hij weegt." },

        { t: "sequence", q: "Zet dit zetmeel-onderzoek in de goede volgorde.",
          stappen: ["Onderzoeksvraag: zit er zetmeel in een witte boterham?",
                    "Hypothese: nee, er zit geen zetmeel in",
                    "Proefopzet: druppel jodium op de boterham",
                    "Uitvoeren: de boterham wordt donkerblauw",
                    "Conclusie: er zit wél zetmeel in; de hypothese was niet juist"],
          w: "Vraag, voorspelling, plan, doen, antwoord.",
          meer: "De conclusie staat altijd achteraan en verwijst terug naar de hypothese." },

        { t: "mc", q: "Waarom schrijf je je hypothese op vóórdat je het experiment doet?",
          o: ["Anders pas je je 'voorspelling' achteraf aan aan wat je toch al gezien hebt",
              "Omdat het netjes staat",
              "Omdat je hypothese dan altijd klopt",
              "Dat hoeft niet, achteraf mag ook"],
          a: "Anders pas je je 'voorspelling' achteraf aan aan wat je toch al gezien hebt",
          fout: {
            "Omdat het netjes staat": "netheid is niet de reden. Het gaat om eerlijkheid van het onderzoek.",
            "Omdat je hypothese dan altijd klopt": "juist niet. Als je hem vooraf opschrijft, kán hij fout blijken, en dat hoort zo.",
            "Dat hoeft niet, achteraf mag ook": "dan is het geen voorspelling meer. Je weet de uitkomst dan al."
          },
          w: "Een voorspelling telt alleen als je hem vooraf doet.",
          meer: "Dat is precies waarom de wetenschappelijke methode een vaste volgorde heeft. De volgorde is niet netheid, het is eerlijkheid." }
      ]
    }
  ]
},

/* ================================================================ 1.2 — B */
{
  id: "waarnemen", emoji: "👃", titel: "1.2 Waarnemen, veilig werken en de indicator",
  kort: "Zintuigen, wat wel en niet mag, en jodium als indicator.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Bij een experiment moet je <b>nauwkeurig waarnemen</b> wat er gebeurt. Waarnemen doe je met je <b>zintuigen</b>.",
        "Je hebt er vijf: <b>zien</b> (ogen), <b>horen</b> (oren), <b>ruiken</b> (neus), <b>voelen</b> (huid) en <b>proeven</b> (tong).",
        "Een <b>zintuig</b> is dus een onderdeel van je lichaam waarmee je kunt waarnemen.",
        "Met je zintuigen kun je wél waarnemen, maar niet <b>nauwkeurig</b>. Je ziet dát een elastiekje uitrekt, maar niet hoevéél. Daarvoor heb je een <b>meetinstrument</b> nodig."
      ],
      regel: "Zintuig = lichaamsdeel waarmee je waarneemt. Nauwkeurig weten = meten.",
      voorbeelden: [
        { en: "Je ziet dat het elastiekje langer wordt", let: "Waarnemen met je zintuigen." },
        { en: "Je meet dat het 3,5 cm langer is", let: "Meten met een meetinstrument." }
      ],
      vragen: [
        { t: "mc", q: "Welk zintuig gebruik je bij <b>ruiken</b>?",
          o: ["Je neus", "Je tong", "Je ogen", "Je huid"],
          a: "Je neus",
          fout: {
            "Je tong": "met je tong proef je. Ruiken doe je met je neus.",
            "Je ogen": "met je ogen zie je.",
            "Je huid": "met je huid voel je."
          },
          w: "Ruiken hoort bij de neus.",
          meer: "De vijf paren: zien–ogen, horen–oren, ruiken–neus, voelen–huid, proeven–tong." },

        { t: "mc", q: "Welk zintuig gebruik je bij <b>voelen</b>?",
          o: ["Je huid", "Je neus", "Je oren", "Je tong"],
          a: "Je huid",
          fout: {
            "Je neus": "met je neus ruik je.",
            "Je oren": "met je oren hoor je.",
            "Je tong": "met je tong proef je. Dat lijkt op voelen, maar het is een ander zintuig."
          },
          w: "Voelen hoort bij de huid.",
          meer: "Je hele huid is één groot zintuig: je voelt warm, koud, hard, zacht en pijn." },

        { t: "gap", q: "Een onderdeel van je lichaam waarmee je kunt waarnemen heet een ___.",
          a: "zintuig",
          w: "Zintuig.",
          meer: "Je hebt er vijf: zien, horen, ruiken, voelen en proeven." },

        { t: "mc", q: "Waarom is waarnemen met je zintuigen niet genoeg bij een onderzoek?",
          o: ["Het is niet nauwkeurig: je ziet dát iets verandert, niet hoevéél",
              "Je zintuigen werken niet in een lab",
              "Het duurt te lang",
              "Je mag je zintuigen niet gebruiken bij natuurkunde"],
          a: "Het is niet nauwkeurig: je ziet dát iets verandert, niet hoevéél",
          fout: {
            "Je zintuigen werken niet in een lab": "natuurlijk wel. Je gebruikt ze juist voortdurend om te zien wat er gebeurt.",
            "Het duurt te lang": "snelheid is niet het probleem. Nauwkeurigheid wel.",
            "Je mag je zintuigen niet gebruiken bij natuurkunde": "dat mag wel, alleen niet allemaal (proeven nooit). Maar dat is hier niet de reden."
          },
          w: "Zintuigen zijn niet nauwkeurig; daarvoor meet je.",
          meer: "Voorbeeld: hang een blokje van 50 gram aan een elastiekje. Je ziet dat het langer wordt. Hoevéél langer weet je pas met een liniaal." },

        { t: "gap", q: "Gereedschap om te meten heet een ___.",
          a: "meetinstrument",
          w: "Meetinstrument.",
          meer: "Een liniaal, een weegschaal, een maatcilinder, een thermometer en een stopwatch zijn allemaal meetinstrumenten." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Bij natuur- en scheikunde mag je <b>niet alle</b> zintuigen zomaar gebruiken.",
        "<b>Horen, zien en voelen</b> mogen <b>altijd</b>.",
        "<b>Ruiken</b> mag alleen <b>voorzichtig</b>: de damp van sommige stoffen is giftig. Adem je die in, dan kun je ziek worden of je longen beschadigen. Je wappert de damp voorzichtig naar je toe, je snuift nooit boven een potje.",
        "<b>Proeven mag NOOIT.</b> Sommige stoffen zijn giftig en daar kun je ernstig ziek van worden."
      ],
      regel: "Horen, zien en voelen: altijd. Ruiken: voorzichtig. Proeven: nooit.",
      voorbeelden: [
        { en: "Je kijkt naar de kleur van een vloeistof", let: "Zien mag altijd." },
        { en: "Je ruikt voorzichtig aan een potje", let: "Alleen met wapperen, nooit diep inademen." },
        { en: "Je proeft van een stof", let: "Nooit doen. Ook niet 'even een klein beetje'." }
      ],
      vragen: [
        { t: "mc", q: "Welke waarnemingen mag je <b>altijd</b> doen bij een onderzoek?",
          o: ["Horen en zien", "Horen en proeven", "Proeven en voelen", "Ruiken en zien"],
          a: "Horen en zien",
          fout: {
            "Horen en proeven": "proeven mag nooit. Sommige stoffen zijn giftig.",
            "Proeven en voelen": "voelen mag wel, proeven nooit.",
            "Ruiken en zien": "zien mag altijd, maar ruiken alleen voorzichtig. Dus 'altijd' klopt niet."
          },
          w: "Horen, zien en voelen mogen altijd; ruiken voorzichtig; proeven nooit.",
          meer: "Dit is een klassieke toetsvraag. Zoek in de antwoorden altijd eerst of 'proeven' erbij staat: dan is het fout." },

        { t: "mc", q: "Waarom mag je bij natuur- en scheikunde <b>nooit</b> van een stof proeven?",
          o: ["Sommige stoffen zijn giftig en je kunt er ernstig ziek van worden",
              "Omdat het vies smaakt",
              "Omdat je tong dan niet meer werkt",
              "Omdat het de stof kapotmaakt"],
          a: "Sommige stoffen zijn giftig en je kunt er ernstig ziek van worden",
          fout: {
            "Omdat het vies smaakt": "smaak is het punt niet. Sommige giftige stoffen smaken juist zoet.",
            "Omdat je tong dan niet meer werkt": "het gevaar is niet je tong, maar je hele lichaam.",
            "Omdat het de stof kapotmaakt": "het gaat niet om de stof, het gaat om jou."
          },
          w: "Giftige stoffen maken je ernstig ziek.",
          meer: "Dit is een absolute regel in het lab: nooit proeven, ook niet een piepklein beetje, ook niet als iemand zegt dat het onschuldig is." },

        { t: "mc", q: "Hoe ruik je veilig aan een stof?",
          o: ["Voorzichtig, door de damp naar je toe te wapperen",
              "Diep inademen boven het potje",
              "Je neus in de vloeistof steken",
              "Je mag helemaal niet ruiken"],
          a: "Voorzichtig, door de damp naar je toe te wapperen",
          fout: {
            "Diep inademen boven het potje": "precies wat je niet moet doen. Giftige damp komt dan vol in je longen.",
            "Je neus in de vloeistof steken": "dat is nog gevaarlijker, en je raakt de stof aan.",
            "Je mag helemaal niet ruiken": "ruiken mag wel, maar alleen voorzichtig. Proeven is wat nooit mag."
          },
          w: "Ruiken mag, maar alleen voorzichtig wapperen.",
          meer: "Het verschil met proeven: bij ruiken kun je de hoeveelheid klein houden, bij proeven niet." },

        { t: "mc", q: "Wat kan er gebeuren als je giftige dampen inademt?",
          o: ["Je kunt ziek worden of je longen beschadigen",
              "Je gaat harder ruiken",
              "Er gebeurt niets, damp is lucht",
              "Je krijgt alleen hoofdpijn"],
          a: "Je kunt ziek worden of je longen beschadigen",
          fout: {
            "Je gaat harder ruiken": "je zintuig wordt er niet beter van, integendeel.",
            "Er gebeurt niets, damp is lucht": "damp is géén lucht. Het is de stof zelf, in gasvorm.",
            "Je krijgt alleen hoofdpijn": "het kan veel erger dan hoofdpijn: echte schade aan je longen."
          },
          w: "Giftige damp beschadigt je longen.",
          meer: "Daarom staat er in een lab vaak een zuurkast: een kast met afzuiging, zodat de damp niet jouw kant op komt." },

        { t: "sleep", opgave: "Mag dit zomaar bij natuur- en scheikunde?",
          chips: [ {t:"kijken naar de kleur", bak:"ja"}, {t:"proeven van de stof", bak:"nooit"},
                   {t:"luisteren of het sist", bak:"ja"}, {t:"een klein beetje op je tong", bak:"nooit"},
                   {t:"voelen of de buis warm wordt", bak:"ja"}, {t:"voorzichtig de damp naar je toe wapperen", bak:"voorzichtig"} ],
          bakjes: [ {id:"ja", label:"Mag altijd", som:"zien, horen, voelen"},
                    {id:"voorzichtig", label:"Alleen voorzichtig", som:"ruiken"},
                    {id:"nooit", label:"Mag nooit", som:"proeven"} ],
          w: "Zien, horen, voelen altijd. Ruiken voorzichtig. Proeven nooit.",
          meer: "Alles wat met je mond te maken heeft valt in de rode bak. Ook 'een heel klein beetje'." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "In laboratoria gebruiken ze <b>indicatoren</b>. Met een indicator kun je onderzoeken <b>of een bepaalde stof wel of niet aanwezig is</b>.",
        "De indicator <b>verandert van kleur</b> onder invloed van die andere stof. Er zijn indicatoren voor suiker, alcohol, zetmeel, koolstofdioxide en nog veel meer.",
        "De indicator voor <b>zetmeel</b> is <b>jodium</b>, een <b>bruingele</b> vloeistof. Komt jodium bij zetmeel, dan wordt het <b>donkerblauw</b>.",
        "Let op wat een indicator <b>niet</b> doet: hij zegt niet <i>hoevéél</i> er is, alleen <i>of</i> het er is. En het blaaspijpje dat de politie vroeger gebruikte was ook een indicator, namelijk voor <b>alcohol</b>."
      ],
      regel: "Een indicator toont aan óf een stof aanwezig is, door van kleur te veranderen.",
      voorbeelden: [
        { en: "Jodium op een witte boterham → donkerblauw", let: "Er zit zetmeel in het brood." },
        { en: "Het blaaspijpje van de politie", let: "Indicator voor alcohol." }
      ],
      vragen: [
        { t: "mc", q: "Wat kun je met een <b>indicator</b> doen?",
          o: ["Onderzoeken of een bepaalde stof aanwezig is",
              "Meten hoeveel gram er van een stof is",
              "De temperatuur meten",
              "Een stof in een andere stof veranderen"],
          a: "Onderzoeken of een bepaalde stof aanwezig is",
          fout: {
            "Meten hoeveel gram er van een stof is": "dat doe je met een weegschaal. Een indicator zegt alleen óf iets er is, niet hoeveel.",
            "De temperatuur meten": "dat doe je met een thermometer.",
            "Een stof in een andere stof veranderen": "dat is een scheikundige verandering. Een indicator is er om iets aan te tonen, niet om iets te maken."
          },
          w: "Een indicator toont aan óf een stof aanwezig is.",
          meer: "Onthoud: een indicator geeft een ja/nee-antwoord met een kleur, geen getal." },

        { t: "mc", q: "Welke kleur krijgt jodium als het bij zetmeel komt?",
          o: ["Donkerblauw", "Bruingeel", "Felrood", "Kleurloos"],
          a: "Donkerblauw",
          fout: {
            "Bruingeel": "dat is de kleur van jodium zélf, vóórdat het met zetmeel in aanraking komt.",
            "Felrood": "rood hoort bij andere indicatoren, niet bij jodium en zetmeel.",
            "Kleurloos": "juist niet: de kleur wordt sterker, niet minder."
          },
          w: "Jodium is bruingeel en wordt donkerblauw bij zetmeel.",
          meer: "Onthoud het als een paar: bruingeel → donkerblauw. De verandering ís het antwoord." },

        { t: "gap", q: "De indicator voor zetmeel is ___.",
          a: "jodium",
          w: "Jodium, een bruingele vloeistof.",
          meer: "Bij zetmeel wordt jodium donkerblauw. Zo weet je dat er zetmeel in zit." },

        { t: "mc", q: "De politie gebruikte vroeger een blaaspijpje bij automobilisten. Welke stof toonden ze daarmee aan?",
          o: ["Alcohol", "Zetmeel", "Suiker", "Koolstofdioxide"],
          a: "Alcohol",
          fout: {
            "Zetmeel": "zetmeel toon je aan met jodium, en dat blaas je niet uit.",
            "Suiker": "er bestaan indicatoren voor suiker, maar daar controleerde de politie niet op.",
            "Koolstofdioxide": "koolstofdioxide blaas je altijd uit, ook als je niets gedronken hebt. Dat zou niets bewijzen."
          },
          w: "Het blaaspijpje was een indicator voor alcohol.",
          meer: "Precies dezelfde truc als bij jodium: de stof verandert van kleur als er alcohol in je adem zit." },

        { t: "mc", q: "Je druppelt jodium op een cracker en er verandert niets: het blijft bruingeel. Wat concludeer je?",
          o: ["Er zit geen zetmeel in de cracker",
              "Er zit heel veel zetmeel in de cracker",
              "Het jodium is kapot",
              "De cracker is giftig"],
          a: "Er zit geen zetmeel in de cracker",
          fout: {
            "Er zit heel veel zetmeel in de cracker": "dan zou het juist donkerblauw worden. Geen kleurverandering betekent geen zetmeel.",
            "Het jodium is kapot": "dat mag je niet zomaar aannemen. Als je twijfelt, test je het jodium eerst op iets waarvan je zéker weet dat er zetmeel in zit.",
            "De cracker is giftig": "daar zegt de indicator niets over. Jodium test op zetmeel, niet op gif."
          },
          w: "Geen kleurverandering = de stof is niet aanwezig.",
          meer: "Een indicator geeft twee antwoorden: kleurverandering betekent ja, geen kleurverandering betekent nee. Allebei zijn het echte resultaten." }
      ]
    }
  ]
},
/* ================================================================ 1.2 — C */
{
  id: "grootheid", emoji: "📏", titel: "1.2 Grootheid, eenheid en meetwaarde",
  kort: "Het getal, de maat en wat je meet: drie verschillende dingen.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Je staat op de weegschaal en leest <b>52</b> af. \"Ik weeg 52\", zeg je. In de natuurkunde is dat <b>niet goed</b>: je moet erbij zeggen <b>52 kilogram</b>.",
        "In die ene meting zitten drie dingen:",
        "<b>meetwaarde</b> = het <b>getal</b> (52) · <b>eenheid</b> = de <b>maat</b> waarin je het uitdrukt (kilogram) · <b>grootheid</b> = de <b>eigenschap die je meet</b> (massa)",
        "De gouden test: <b>je kunt \"25 meter\" zeggen, maar niet \"25 lengte\".</b> Wat je achter een getal kunt zetten is de <b>eenheid</b>. Wat je meet is de <b>grootheid</b>."
      ],
      regel: "Achter een getal past de eenheid. De grootheid is wat je meet. Het kale getal is de meetwaarde.",
      voorbeelden: [
        { en: "Het zwembad heeft een lengte van 25 meter.", let: "grootheid = <b>lengte</b>, eenheid = <b>meter</b>, meetwaarde = <b>25</b>." },
        { en: "De massa van de bloemkool is 600 gram.", let: "grootheid = <b>massa</b>, eenheid = <b>gram</b>, meetwaarde = <b>600</b>." }
      ],
      vragen: [
        { t: "mc", q: "Wat is een <b>grootheid</b>?",
          o: ["Een eigenschap die je kunt meten", "De maat waarin je iets uitdrukt",
              "Het getal dat je afleest", "Het gereedschap waarmee je meet"],
          a: "Een eigenschap die je kunt meten",
          fout: {
            "De maat waarin je iets uitdrukt": "dat is de eenheid. Kilogram is een maat, massa is de eigenschap.",
            "Het getal dat je afleest": "dat is de meetwaarde. In '52 kg' is 52 de meetwaarde.",
            "Het gereedschap waarmee je meet": "dat is het meetinstrument, bijvoorbeeld de weegschaal."
          },
          w: "Grootheid = een eigenschap die je kunt meten.",
          meer: "Lengte, tijd, massa, volume en temperatuur zijn grootheden. Iedere grootheid heeft zijn eigen eenheden." },

        { t: "mc", q: "Wat is een <b>eenheid</b>?",
          o: ["De maat waarin je iets uitdrukt", "De eigenschap die je meet",
              "Het getal dat je afleest", "Een soort meetinstrument"],
          a: "De maat waarin je iets uitdrukt",
          fout: {
            "De eigenschap die je meet": "dat is de grootheid. Massa is de eigenschap, kilogram de maat.",
            "Het getal dat je afleest": "dat is de meetwaarde.",
            "Een soort meetinstrument": "een meetinstrument is het gereedschap. Een eenheid is een maat, geen ding."
          },
          w: "Eenheid = de maat waarin je iets uitdrukt.",
          meer: "Je herkent een eenheid hieraan: je kunt hem achter een getal zetten. '25 meter' kan, '25 lengte' niet." },

        { t: "mc", q: "In de zin 'De breedte van een tennisveld is 8,23 meter' — wat is de <b>meetwaarde</b>?",
          o: ["8,23", "meter", "breedte", "tennisveld"],
          a: "8,23",
          fout: {
            "meter": "dat is de eenheid: de maat waarin je het uitdrukt.",
            "breedte": "dat is de grootheid: de eigenschap die gemeten is.",
            "tennisveld": "dat is het voorwerp waar het over gaat, geen van de drie."
          },
          w: "De meetwaarde is het kale getal.",
          meer: "Drie dingen in één zin: 8,23 (meetwaarde) · meter (eenheid) · breedte (grootheid)." },

        { t: "mc", q: "Welke van deze woorden is een <b>eenheid</b>?",
          o: ["seconde", "tijd", "massa", "volume"],
          a: "seconde",
          fout: {
            "tijd": "tijd is een grootheid. Je kunt niet '25 tijd' zeggen.",
            "massa": "massa is een grootheid. De eenheid ervan is kilogram of gram.",
            "volume": "volume is een grootheid. De eenheden zijn liter, mL, cm³ en dm³."
          },
          w: "Achter een getal past 'seconde', niet 'tijd'.",
          meer: "Doe altijd de test: '25 seconde' kan, '25 tijd' niet. Dus seconde is de eenheid en tijd de grootheid." },

        { t: "mc", q: "Welke van deze woorden is een <b>grootheid</b>?",
          o: ["temperatuur", "graden Celsius", "meter", "liter"],
          a: "temperatuur",
          fout: {
            "graden Celsius": "dat is de eenheid van temperatuur. '39 graden Celsius' kan.",
            "meter": "dat is de eenheid van lengte.",
            "liter": "dat is een eenheid van volume."
          },
          w: "Temperatuur is wat je meet; graden Celsius is de maat.",
          meer: "Het paar is: grootheid temperatuur → eenheid graden Celsius (°C) → instrument thermometer." },

        { t: "sleep", opgave: "Grootheid of eenheid?",
          chips: [ {t:"lengte", bak:"g"}, {t:"meter", bak:"e"}, {t:"massa", bak:"g"},
                   {t:"kilogram", bak:"e"}, {t:"volume", bak:"g"}, {t:"liter", bak:"e"} ],
          bakjes: [ {id:"g", label:"Grootheid", som:"wat je meet"},
                    {id:"e", label:"Eenheid", som:"past achter een getal"} ],
          w: "Test: past het achter een getal? Dan is het een eenheid.",
          meer: "'30 meter' kan, '30 lengte' niet. Dat is het hele trucje." },

        { t: "gap", q: "Het getal dat je bij een meting bepaalt, heet de ___.",
          a: "meetwaarde",
          w: "Meetwaarde.",
          meer: "In '52 kg' is 52 de meetwaarde en kg de eenheid." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Iedere grootheid heeft zijn <b>eigen eenheden</b> én zijn <b>eigen meetinstrument</b>. Die drie horen bij elkaar als een setje.",
        "<b>lengte</b> → meter (m), centimeter (cm) → <b>liniaal / meetlint</b><br><b>massa</b> → kilogram (kg), gram (g) → <b>weegschaal</b><br><b>volume</b> → liter (L), milliliter (mL), cm³, dm³ → <b>maatcilinder</b>",
        "<b>tijd</b> → seconde (s), minuut, uur → <b>stopwatch / klok</b><br><b>temperatuur</b> → graden Celsius (°C) → <b>thermometer</b>",
        "Eén grootheid kan meerdere eenheden hebben. Bij tijd gebruik je minuten, uren, dagen of weken: allemaal eenheden van tijd."
      ],
      regel: "Grootheid → eenheid → meetinstrument. Leer ze als setjes.",
      voorbeelden: [
        { en: "massa → kilogram → weegschaal", let: "Een compleet setje." },
        { en: "volume → liter en cm³ → maatcilinder", let: "Twee eenheden, één grootheid." }
      ],
      vragen: [
        { t: "mc", q: "Welke eenheid hoort bij de grootheid <b>massa</b>?",
          o: ["kilogram", "meter", "liter", "seconde"],
          a: "kilogram",
          fout: {
            "meter": "meter hoort bij lengte.",
            "liter": "liter hoort bij volume.",
            "seconde": "seconde hoort bij tijd."
          },
          w: "Massa meet je in kilogram of gram.",
          meer: "Setje: massa → kilogram (kg) of gram (g) → weegschaal." },

        { t: "mc", q: "Met welk meetinstrument bepaal je het <b>volume van een vloeistof</b>?",
          o: ["Een maatcilinder", "Een weegschaal", "Een thermometer", "Een liniaal"],
          a: "Een maatcilinder",
          fout: {
            "Een weegschaal": "daarmee meet je de massa, niet het volume.",
            "Een thermometer": "daarmee meet je de temperatuur.",
            "Een liniaal": "daarmee meet je lengte. Bij een rechthoekig blokje kun je er een volume mee uitrekenen, maar een vloeistof heeft geen vaste vorm."
          },
          w: "Volume van een vloeistof → maatcilinder.",
          meer: "In de keuken doet een maatbeker hetzelfde werk. In het lab is de maatcilinder nauwkeuriger." },

        { t: "mc", q: "Welke van deze is <b>geen</b> eenheid van tijd?",
          o: ["meter", "seconde", "minuut", "uur"],
          a: "meter",
          fout: {
            "seconde": "seconde is juist dé eenheid van tijd.",
            "minuut": "een minuut is 60 seconden, dus ook een eenheid van tijd.",
            "uur": "een uur is 60 minuten, ook een eenheid van tijd."
          },
          w: "Meter is een eenheid van lengte.",
          meer: "Eén grootheid kan meerdere eenheden hebben: seconden, minuten, uren, dagen en weken horen allemaal bij tijd." },

        { t: "gap", q: "Met welk meetinstrument bepaal je de massa? Een ___.",
          a: "weegschaal",
          w: "Weegschaal.",
          meer: "Setje: massa → kilogram/gram → weegschaal." },

        { t: "mc", q: "Bij welke grootheid hoort de eenheid <b>°C</b>?",
          o: ["Temperatuur", "Massa", "Volume", "Lengte"],
          a: "Temperatuur",
          fout: {
            "Massa": "massa gaat in kilogram of gram.",
            "Volume": "volume gaat in liter, mL, cm³ of dm³.",
            "Lengte": "lengte gaat in meter of centimeter."
          },
          w: "°C is de eenheid van temperatuur.",
          meer: "Setje: temperatuur → graden Celsius (°C) → thermometer. In een koelkast is het zo'n 4 °C." },

        { t: "sleep", opgave: "Welk meetinstrument hoort bij welke grootheid?",
          chips: [ {t:"weegschaal", bak:"massa"}, {t:"maatcilinder", bak:"volume"},
                   {t:"thermometer", bak:"temp"}, {t:"liniaal", bak:"lengte"},
                   {t:"stopwatch", bak:"tijd"}, {t:"meetlint", bak:"lengte"} ],
          bakjes: [ {id:"massa", label:"Massa", som:"kg, g"}, {id:"volume", label:"Volume", som:"L, mL, cm³"},
                    {id:"temp", label:"Temperatuur", som:"°C"}, {id:"lengte", label:"Lengte", som:"m, cm"},
                    {id:"tijd", label:"Tijd", som:"s, min, uur"} ],
          w: "Elke grootheid heeft zijn eigen instrument en eigen eenheden.",
          meer: "Zowel een liniaal als een meetlint meet lengte: het instrument mag verschillen, de grootheid blijft dezelfde." },

        { t: "mc", q: "'Bij hockey ligt de strafbalstip op 6,4 meter van het doel.' Wat is de <b>eenheid</b> in deze zin?",
          o: ["meter", "6,4", "afstand", "strafbalstip"],
          a: "meter",
          fout: {
            "6,4": "dat is de meetwaarde, het getal.",
            "afstand": "dat is de grootheid (een soort lengte), niet de eenheid.",
            "strafbalstip": "dat is het voorwerp waar het over gaat."
          },
          w: "De eenheid is de maat die achter het getal staat.",
          meer: "6,4 = meetwaarde · meter = eenheid · afstand of lengte = grootheid." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu alles door elkaar, en met de valkuilen erbij.",
        "<b>Valkuil 1: de eenheid vergeten.</b> Op een verkeersbord staat alleen <b>60</b>. Dat is een meetwaarde zonder eenheid. Iedereen weet dat er km/u bedoeld wordt, maar strikt genomen is de meting onvolledig.",
        "<b>Valkuil 2: massa en gewicht door elkaar halen.</b> Bij natuur- en scheikunde zijn dat twee verschillende dingen (dat leer je in klas 3). Voor nu: <b>massa</b> zegt iets over de <b>hoeveelheid stof</b> en gaat in kilogram.",
        "<b>Valkuil 3: dichtheid vergeten als grootheid.</b> Ook dichtheid is een grootheid, met eenheid <b>g/cm³</b>. Je meet hem niet direct af: je rekent hem uit."
      ],
      regel: "Een meting zonder eenheid is niet af. Noem altijd alle drie: getal, eenheid, grootheid.",
      voorbeelden: [
        { en: "Een verkeersbord met alleen '60'", let: "De <b>eenheid</b> ontbreekt (km/u)." },
        { en: "'Anna judoot in de klasse tot 52 kilogram'", let: "52 = meetwaarde · kilogram = eenheid · massa = grootheid." }
      ],
      vragen: [
        { t: "mc", q: "Op een verkeersbord staat alleen het getal <b>60</b>. Wat ontbreekt er eigenlijk?",
          o: ["De eenheid (km/u)", "De meetwaarde", "De grootheid", "Het meetinstrument"],
          a: "De eenheid (km/u)",
          fout: {
            "De meetwaarde": "de meetwaarde staat er juist wél: dat is de 60.",
            "De grootheid": "de grootheid is snelheid, en die is uit de situatie duidelijk. Wat er letterlijk ontbreekt is de maat.",
            "Het meetinstrument": "een bord hoeft geen meetinstrument te noemen. Er ontbreekt een maat achter het getal."
          },
          w: "Er staat een getal zonder maat erachter.",
          meer: "Zonder eenheid is een meting onvolledig: 60 wat? Meter? Minuten? Iedereen weet dat km/u bedoeld wordt, maar dat maakt het bord nog niet compleet." },

        { t: "mc", q: "'Als de luchtdruk onder 1013 hectopascal komt, is de kans op regen groot.' Wat is de <b>grootheid</b>?",
          o: ["luchtdruk", "hectopascal", "1013", "regen"],
          a: "luchtdruk",
          fout: {
            "hectopascal": "dat is de eenheid: je kunt '1013 hectopascal' zeggen.",
            "1013": "dat is de meetwaarde, het getal.",
            "regen": "dat is het gevolg waarover de zin gaat, geen grootheid die hier gemeten wordt."
          },
          w: "De grootheid is wat gemeten wordt: de luchtdruk.",
          meer: "Ook bij een onbekende eenheid werkt de test: '1013 hectopascal' kan, '1013 luchtdruk' niet." },

        { t: "mc", q: "Welke grootheid hoort bij de eenheid <b>g/cm³</b>?",
          o: ["Dichtheid", "Massa", "Volume", "Lengte"],
          a: "Dichtheid",
          fout: {
            "Massa": "massa gaat in gram of kilogram, zonder dat streepje en die cm³.",
            "Volume": "volume gaat in cm³, maar dan zonder de gram ervoor.",
            "Lengte": "lengte gaat in meter of centimeter."
          },
          w: "g/cm³ betekent 'gram per kubieke centimeter', en dat is dichtheid.",
          meer: "Aan de eenheid zie je wat de grootheid doet: gram per cm³ betekent hoeveel gram er in één blokje van 1 cm³ zit." },

        { t: "mc", q: "Wat zegt de <b>massa</b> van een voorwerp?",
          o: ["Uit hoeveel stof het voorwerp bestaat", "Hoeveel ruimte het voorwerp inneemt",
              "Hoe groot het voorwerp is", "Hoe warm het voorwerp is"],
          a: "Uit hoeveel stof het voorwerp bestaat",
          fout: {
            "Hoeveel ruimte het voorwerp inneemt": "dat is het volume, een andere grootheid.",
            "Hoe groot het voorwerp is": "groot slaat op ruimte, en dus op volume. Een grote ballon heeft een klein beetje massa.",
            "Hoe warm het voorwerp is": "dat is de temperatuur."
          },
          w: "Massa = hoeveelheid stof.",
          meer: "Massa en volume worden vaak verward. Een ballon is groot (veel volume) maar heeft bijna geen massa. Een muntje is klein maar heeft meer massa." },

        { t: "mc", q: "'De tijd die Jurgen nodig heeft om naar huis te fietsen is 15 minuten.' Wat is <b>niet</b> goed benoemd?",
          o: ["Alles klopt: tijd = grootheid, minuten = eenheid, 15 = meetwaarde",
              "Minuten is de grootheid",
              "15 is de eenheid",
              "Tijd is de meetwaarde"],
          a: "Alles klopt: tijd = grootheid, minuten = eenheid, 15 = meetwaarde",
          fout: {
            "Minuten is de grootheid": "minuten is de eenheid. '15 minuten' kan, '15 tijd' niet.",
            "15 is de eenheid": "15 is het getal, dus de meetwaarde.",
            "Tijd is de meetwaarde": "tijd is wat je meet, dus de grootheid."
          },
          w: "Tijd = grootheid, minuut = eenheid, 15 = meetwaarde.",
          meer: "Loop bij elke zin de drie langs. Het getal is altijd de meetwaarde, het woord erachter de eenheid, en de eigenschap de grootheid." },

        { t: "gap", q: "Wat is de eenheid van dichtheid? (schrijf als g/cm3)",
          a: "g/cm3|g/cm³|gram per cm3|gram per kubieke centimeter",
          w: "Gram per kubieke centimeter.",
          meer: "De eenheid vertelt de betekenis: hoeveel gram zit er in 1 cm³ van deze stof?" },

        { t: "sleep", opgave: "Welk woord is wat? ('De massa van de bloemkool is 600 gram.')",
          chips: [ {t:"600", bak:"mw"}, {t:"gram", bak:"eh"}, {t:"massa", bak:"gh"},
                   {t:"25 (bij '25 meter')", bak:"mw"}, {t:"meter", bak:"eh"}, {t:"lengte", bak:"gh"} ],
          bakjes: [ {id:"mw", label:"Meetwaarde", som:"het getal"},
                    {id:"eh", label:"Eenheid", som:"de maat"},
                    {id:"gh", label:"Grootheid", som:"wat je meet"} ],
          w: "Getal → meetwaarde. Maat erachter → eenheid. Eigenschap → grootheid.",
          meer: "Deze drie horen altijd samen. Op de toets word je gevraagd ze te onderstrepen in een zin." }
      ]
    }
  ]
},

/* ================================================================ 2.3 — A */
{
  id: "omrekenen", emoji: "🔁", titel: "Eenheden omrekenen",
  kort: "Grote eenheid naar kleine: keer. Kleine naar grote: gedeeld.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Twee getallen die je uit je hoofd moet kennen:",
        "<b>1 kg = 1000 g</b> &nbsp;·&nbsp; <b>1 L = 1000 mL</b>",
        "De vraag is nooit 'welk getal', want dat is altijd 1000. De vraag is: <b>welke kant op?</b>",
        "<b>Van een GROTE eenheid naar een KLEINE eenheid → keer 1000.</b> Je hebt immers veel kleine stukjes nodig om één groot stuk te vullen. Het getal wordt dus <b>groter</b>.<br><b>Van KLEIN naar GROOT → gedeeld door 1000.</b> Het getal wordt <b>kleiner</b>.",
        "En doe daarna altijd de <b>check</b>: 'kg is groter dan g, dus het getal moest groter worden. Klopt dat?'"
      ],
      regel: "Groot → klein: × 1000 (getal groter). Klein → groot: : 1000 (getal kleiner).",
      voorbeelden: [
        { en: "3 kg = 3000 g", let: "kg is groot, g is klein → keer 1000 → getal <b>groter</b>. ✔" },
        { en: "2500 g = 2,5 kg", let: "g is klein, kg is groot → gedeeld door 1000 → getal <b>kleiner</b>. ✔" },
        { en: "4 L = 4000 mL", let: "L is groot, mL is klein → keer 1000." }
      ],
      vragen: [
        { t: "mc", q: "Je rekent <b>kilogram om naar gram</b>. Wat doe je met het getal?",
          o: ["Keer 1000: het getal wordt groter", "Gedeeld door 1000: het getal wordt kleiner",
              "Keer 100", "Er verandert niets"],
          a: "Keer 1000: het getal wordt groter",
          fout: {
            "Gedeeld door 1000: het getal wordt kleiner": "dat is de andere kant op. Een gram is veel kleiner dan een kilogram, dus je hebt er veel méér nodig. 3 kg is 3000 g, niet 0,003 g.",
            "Keer 100": "bij massa en volume is de stap 1000, niet 100. 1 kg = 1000 g.",
            "Er verandert niets": "het getal verandert wel degelijk. 1 kg en 1 g zijn heel verschillende hoeveelheden."
          },
          w: "Groot naar klein = keer 1000, dus het getal wordt groter.",
          meer: "Check met een voorbeeld dat je zeker weet: een pak suiker is 1 kg en 1000 g. Dat getal werd dus groter." },

        { t: "mc", q: "Hoeveel milliliter gaat er in 1 liter?",
          o: ["1000 mL", "100 mL", "10 mL", "1 000 000 mL"],
          a: "1000 mL",
          fout: {
            "100 mL": "dat is een tiende liter, bijvoorbeeld een klein glaasje. Een hele liter is 1000 mL.",
            "10 mL": "dat is nog geen slok. Een pak melk van 1 liter is 1000 mL.",
            "1 000 000 mL": "dat is duizend liter, een hele regenton."
          },
          w: "1 L = 1000 mL.",
          meer: "'Milli' betekent duizendste. Een milliliter is dus een duizendste liter." },

        { t: "mc", q: "Erik rekent 250 g om en schrijft op: 250 g = 250 000 kg. Wat ging er mis?",
          o: ["Hij ging de verkeerde kant op: van klein naar groot moet je delen, dus 0,25 kg",
              "Hij had keer 100 moeten doen",
              "Niets, het klopt",
              "Hij had er 1000 bij op moeten tellen"],
          a: "Hij ging de verkeerde kant op: van klein naar groot moet je delen, dus 0,25 kg",
          fout: {
            "Hij had keer 100 moeten doen": "de stap is 1000, maar dat is niet de fout. De fout is de richting.",
            "Niets, het klopt": "250 000 kg is 250 ton, ongeveer het gewicht van een blauwe vinvis. Een pakje boter weegt niet zoveel.",
            "Hij had er 1000 bij op moeten tellen": "je telt bij omrekenen nooit op. Je vermenigvuldigt of deelt."
          },
          w: "Gram is klein, kilogram is groot → delen, dus het getal wordt kleiner.",
          meer: "De uitkomstcheck vangt dit meteen: kg is groter dan g, dus het getal moet kleiner worden. 250 000 is juist veel groter." },

        { t: "bouw", q: "Reken om: <b>5 kg = ___ g</b> (alleen het getal)",
          a: "5000",
          w: "Van kg naar g is groot naar klein: keer 1000.",
          meer: "5 × 1000 = 5000. Check: het getal werd groter, dat klopt bij groot → klein." },

        { t: "bouw", q: "Reken om: <b>3000 mL = ___ L</b> (alleen het getal)",
          a: "3",
          w: "Van mL naar L is klein naar groot: gedeeld door 1000.",
          meer: "3000 : 1000 = 3. Check: het getal werd kleiner, dat klopt bij klein → groot." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Nu met <b>kommagetallen</b>. De regel verandert niet, alleen de komma schuift.",
        "<b>Keer 1000</b> → de komma gaat <b>drie plaatsen naar rechts</b>: 0,53 kg → 530 g.<br><b>Gedeeld door 1000</b> → de komma gaat <b>drie plaatsen naar links</b>: 71 g → 0,071 kg.",
        "Ontbreken er cijfers? Vul aan met nullen: 7,2 g → 0,0072 kg.",
        "Blijf ook hier checken: <b>is het getal de goede kant op gegaan?</b> Naar een kleinere eenheid hoort een groter getal."
      ],
      regel: "Komma drie plaatsen naar rechts bij ×1000, drie naar links bij :1000.",
      voorbeelden: [
        { en: "0,53 kg = 530 g", let: "×1000, komma drie naar rechts. Getal groter ✔" },
        { en: "71 g = 0,071 kg", let: ":1000, komma drie naar links. Getal kleiner ✔" },
        { en: "0,029 L = 29 mL", let: "×1000, komma drie naar rechts." }
      ],
      vragen: [
        { t: "mc", q: "Hoeveel plaatsen schuift de komma als je keer 1000 doet?",
          o: ["Drie plaatsen naar rechts", "Drie plaatsen naar links",
              "Eén plaats naar rechts", "Twee plaatsen naar rechts"],
          a: "Drie plaatsen naar rechts",
          fout: {
            "Drie plaatsen naar links": "dat is delen door 1000. Bij keer wordt het getal groter, dus gaat de komma naar rechts.",
            "Eén plaats naar rechts": "dat is keer 10. Duizend heeft drie nullen, dus drie plaatsen.",
            "Twee plaatsen naar rechts": "dat is keer 100. Bij 1000 zijn het er drie."
          },
          w: "1000 heeft drie nullen, dus drie plaatsen; keer = naar rechts.",
          meer: "Voorbeeld: 0,53 → 5,3 → 53 → 530. Drie stappen naar rechts." },

        { t: "mc", q: "Welke omrekening klopt?",
          o: ["0,005 kg = 5 g", "0,005 kg = 500 g", "0,005 kg = 0,000005 g", "0,005 kg = 50 g"],
          a: "0,005 kg = 5 g",
          fout: {
            "0,005 kg = 500 g": "dan heb je maar twee plaatsen geschoven, of je bent van 0,5 uitgegaan. 0,005 × 1000 = 5.",
            "0,005 kg = 0,000005 g": "je bent de verkeerde kant op gegaan. Naar gram (kleiner) hoort een gróter getal.",
            "0,005 kg = 50 g": "dat is 0,05 kg. Tel de plaatsen nog eens na: 0,005 → 0,05 → 0,5 → 5."
          },
          w: "0,005 × 1000 = 5.",
          meer: "0,005 kg is 5 gram, ongeveer een suikerklontje. Zulke ijkpunten helpen om te zien of je antwoord raar is." },

        { t: "bouw", q: "Reken om: <b>7,11 kg = ___ g</b> (alleen het getal)",
          a: "7110",
          w: "×1000: komma drie plaatsen naar rechts.",
          meer: "7,11 → 71,1 → 711 → 7110. Het getal werd groter, dat hoort bij kg → g." },

        { t: "bouw", q: "Reken om: <b>540 mL = ___ L</b> (alleen het getal)",
          a: "0,54",
          w: ":1000: komma drie plaatsen naar links.",
          meer: "540 → 54 → 5,4 → 0,54. Ruim een halve liter, dat klopt met een half pak melk." },

        { t: "mc", q: "Iemand zegt: '67 mL = 67 000 L'. Waarom kan dat niet kloppen, zonder te rekenen?",
          o: ["67 mL is minder dan een glas; 67 000 L is een zwembad",
              "Omdat mL en L niet omgerekend kunnen worden",
              "Omdat je nooit met 1000 mag vermenigvuldigen",
              "Het klopt wel"],
          a: "67 mL is minder dan een glas; 67 000 L is een zwembad",
          fout: {
            "Omdat mL en L niet omgerekend kunnen worden": "dat kan juist prima: 1 L = 1000 mL.",
            "Omdat je nooit met 1000 mag vermenigvuldigen": "dat mag wel, maar hier moest je juist delen.",
            "Het klopt wel": "67 mL is 0,067 L. Het antwoord zit er een factor miljoen naast."
          },
          w: "Naar een grotere eenheid hoort een kleiner getal.",
          meer: "De redelijkheidscheck is vaak sneller dan narekenen: past dit getal bij wat ik me voorstel? Een glaasje is geen zwembad." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Nu de brug die je bij dichtheid <b>echt</b> nodig hebt. De eenheid <b>liter</b> gebruik je alleen voor <b>vloeistoffen</b>. In andere gevallen gebruik je dm³ of cm³. Maar ze betekenen precies hetzelfde:",
        "<b>1 L = 1 dm³</b> &nbsp;·&nbsp; <b>1 mL = 1 cm³</b> &nbsp;·&nbsp; <b>1 dm³ = 1000 cm³</b>",
        "Die middelste is goud waard. Een maatcilinder leest <b>mL</b> af, maar dichtheid gaat in <b>g/cm³</b>. Omdat 1 mL = 1 cm³ hoef je <b>niets</b> om te rekenen: 26 mL ís 26 cm³.",
        "Soms moet je <b>twee stappen</b> doen. Een boomstam van 13,65 kg met een volume van 21 dm³: reken eerst kg naar g (13 650 g) en dm³ naar cm³ (21 000 cm³), en deel dan pas."
      ],
      regel: "1 mL = 1 cm³ (gratis). 1 L = 1 dm³ = 1000 cm³.",
      voorbeelden: [
        { en: "26 mL = 26 cm³", let: "Zelfde inhoud, ander woord. Niets omrekenen." },
        { en: "21 dm³ = 21 000 cm³", let: "dm³ is groot, cm³ is klein → keer 1000." },
        { en: "2,5 L = 2500 cm³", let: "Eerst L → mL (×1000), en mL = cm³." }
      ],
      vragen: [
        { t: "mc", q: "Hoeveel cm³ is 1 mL?",
          o: ["1 cm³", "10 cm³", "100 cm³", "1000 cm³"],
          a: "1 cm³",
          fout: {
            "10 cm³": "nee, ze zijn precies gelijk. 1 mL = 1 cm³.",
            "100 cm³": "nee, ze zijn precies gelijk aan elkaar.",
            "1000 cm³": "dat is 1 dm³ (= 1 liter), niet 1 mL."
          },
          w: "1 mL en 1 cm³ zijn precies hetzelfde.",
          meer: "Dit is de handigste omrekening van het hoofdstuk: een maatcilinder in mL geeft je het volume in cm³ cadeau." },

        { t: "mc", q: "Hoeveel cm³ gaat er in 1 dm³?",
          o: ["1000 cm³", "10 cm³", "100 cm³", "1 cm³"],
          a: "1000 cm³",
          fout: {
            "10 cm³": "dat lijkt logisch omdat 1 dm = 10 cm, maar bij volume gaat het in drie richtingen: 10 × 10 × 10 = 1000.",
            "100 cm³": "dat zou kloppen bij oppervlakte (10 × 10). Volume heeft er een derde richting bij.",
            "1 cm³": "een kubus van 1 dm is veel groter dan een kubus van 1 cm."
          },
          w: "10 × 10 × 10 = 1000 blokjes van 1 cm³ in een kubus van 1 dm.",
          meer: "Stel je de foto in het boek voor: een kubus van 1 dm opgebouwd uit 1000 kleine blokjes van 1 cm³." },

        { t: "bouw", q: "Een maatcilinder geeft een volume van <b>45 mL</b>. Hoeveel cm³ is dat? (alleen het getal)",
          a: "45",
          w: "1 mL = 1 cm³, dus het getal blijft hetzelfde.",
          meer: "Niets omrekenen dus. Je mag het getal direct in de dichtheidsformule invullen." },

        { t: "bouw", q: "Reken om: <b>21 dm³ = ___ cm³</b> (alleen het getal)",
          a: "21000",
          w: "dm³ is groot, cm³ is klein → keer 1000.",
          meer: "21 × 1000 = 21 000. Zo maak je van dm³ en kg een som die in g/cm³ uitkomt." },

        { t: "mc", q: "<b>Extra.</b> Vroeger werd massa in <b>pond</b> gemeten. Wat was daarvan het grootste nadeel?",
          o: ["Een pond was in elke plaats anders zwaar",
              "Een pond was te zwaar om te tillen",
              "Een pond bestond alleen in Nederland",
              "Een pond kon je niet wegen"],
          a: "Een pond was in elke plaats anders zwaar",
          fout: {
            "Een pond was te zwaar om te tillen": "een pond is ongeveer een halve kilo, dus dat viel wel mee. Het probleem was dat niemand precies wist hóéveel het was.",
            "Een pond bestond alleen in Nederland": "het pond werd in veel landen gebruikt. Juist dát was het probleem: overal weer anders.",
            "Een pond kon je niet wegen": "wegen kon prima. Maar in Amsterdam was een pond 494,090 g en in Den Haag 469,728 g, dus een pond kaas was niet overal evenveel."
          },
          w: "Elke plaats had zijn eigen pond, dus de maat lag niet vast.",
          meer: "Voor handel en wetenschap is dat onbruikbaar. Daarom voerde Nederland in 1820 het <b>Metrieke Stelsel</b> in, met de kilogram als standaardmaat die overal even zwaar is." },

        { t: "bouw", q: "<b>Extra.</b> Engelse maten: 1 <i>pound</i> (lb) = 16 <i>ounce</i> (oz). Op een pakje boter staat <b>4 oz</b>. Hoeveel <i>pound</i> is dat?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal, als kommagetal)</span>",
          a: "0,25",
          w: "4 : 16 = 0,25 pound, dus een kwart pond.",
          meer: "Van een kleine eenheid (ounce) naar een grote (pound) deel je, dus het getal wordt kleiner. Precies dezelfde richtingsregel als bij gram en kilogram, alleen met 16 in plaats van 1000." },

        { t: "mc", q: "Een boomstam heeft een massa van 13,65 kg en een volume van 21 dm³. Wat doe je eerst om de dichtheid in g/cm³ te vinden?",
          o: ["Allebei omrekenen: 13,65 kg → 13 650 g en 21 dm³ → 21 000 cm³",
              "Meteen 13,65 delen door 21",
              "Alleen de massa omrekenen",
              "Eerst de dichtheid opzoeken in de tabel"],
          a: "Allebei omrekenen: 13,65 kg → 13 650 g en 21 dm³ → 21 000 cm³",
          fout: {
            "Meteen 13,65 delen door 21": "dan komt er 0,65 uit, en toevallig is dat hier het goede getal. Maar je eenheid klopt niet: je hebt kg/dm³ berekend, niet g/cm³. Bij andere getallen gaat dat mis.",
            "Alleen de massa omrekenen": "dan deel je gram door dm³, en dat is geen bestaande eenheid. Allebei of geen van beide.",
            "Eerst de dichtheid opzoeken in de tabel": "je moet hem juist berekenen. De tabel gebruik je daarna, om te zien welke stof het is."
          },
          w: "Eerst allebei naar g en cm³, dan pas delen.",
          meer: "Zorg dat je eenheden bij elkaar passen vóórdat je gaat rekenen. Anders klopt je getal misschien wel, maar je eenheid niet." }
      ]
    }
  ]
},

/* ================================================================ 2.3 — B */
{
  id: "aflezen", emoji: "🌡️", titel: "Meetinstrumenten aflezen",
  kort: "Eerst uitzoeken hoeveel één streepje waard is.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Een schaalverdeling lezen doe je in drie stappen:",
        "<b>1.</b> Zoek twee <b>genummerde</b> streepjes en kijk hoeveel ze verschillen.<br><b>2.</b> Tel hoeveel <b>vakjes</b> er tussen die twee liggen.<br><b>3.</b> Deel het verschil door het aantal vakjes: zoveel is <b>één streepje</b> waard.",
        "Pas daarna tel je vanaf het laatste genummerde streepje verder omhoog.",
        "Bij een <b>maatcilinder</b> lees je af op <b>ooghoogte</b>, bij het <b>vlakke deel</b> van de vloeistofspiegel. De vloeistof kruipt langs de rand omhoog; je leest het onderste, platte stuk af."
      ],
      regel: "Eerst: hoeveel is één streepje? Dan pas aflezen.",
      voorbeelden: [
        { en: "Tussen 10 en 20 liggen 10 vakjes", let: "10 : 10 = <b>1 mL per streepje</b>." },
        { en: "Tussen 20 en 30 liggen 5 vakjes", let: "10 : 5 = <b>2 mL per streepje</b>." }
      ],
      vragen: [
        { t: "mc", q: "Hoe lees je een maatcilinder goed af?",
          o: ["Op ooghoogte, bij het vlakke deel van de vloeistofspiegel",
              "Van bovenaf, recht naar beneden kijkend",
              "Bij de hoogste rand van de vloeistof",
              "Dat maakt niet uit"],
          a: "Op ooghoogte, bij het vlakke deel van de vloeistofspiegel",
          fout: {
            "Van bovenaf, recht naar beneden kijkend": "dan kijk je schuin langs de streepjes en lees je een te lage waarde af. Ga altijd met je ogen op gelijke hoogte zitten.",
            "Bij de hoogste rand van de vloeistof": "de vloeistof kruipt langs het glas omhoog. Die opgekropen rand hoort er niet bij: je leest het vlakke deel af.",
            "Dat maakt niet uit": "het scheelt zo een paar milliliter, en dat werkt door in je hele dichtheidsberekening."
          },
          w: "Ooghoogte + het vlakke deel van de vloeistofspiegel.",
          meer: "Kijk je van boven, dan lees je te weinig af; van onderaf te veel. Beide fouten heten parallax." },

        { t: "mc", q: "Tussen de streepjes 30 en 40 op een maatcilinder liggen 10 vakjes. Hoeveel is één streepje waard?",
          o: ["1 mL", "10 mL", "4 mL", "0,1 mL"],
          a: "1 mL",
          fout: {
            "10 mL": "dat is het verschil tussen 30 en 40 in z'n geheel. Dat moet je nog verdelen over de 10 vakjes.",
            "4 mL": "je hebt naar het getal 40 gekeken. Het gaat om het verschil (10) gedeeld door het aantal vakjes (10).",
            "0,1 mL": "je hebt omgekeerd gedeeld: 10 vakjes : 10 mL. Het moet andersom: 10 mL : 10 vakjes."
          },
          w: "Verschil delen door het aantal vakjes: 10 : 10 = 1.",
          meer: "Deze stap wordt het vaakst overgeslagen, en kost daardoor de meeste punten. Doe hem altijd eerst." },

        { t: "mc", q: "Tussen 20 en 30 op een schaal liggen 5 vakjes. Hoeveel is één streepje waard?",
          o: ["2", "5", "10", "0,5"],
          a: "2",
          fout: {
            "5": "dat is het aantal vakjes, niet de waarde ervan.",
            "10": "dat is het hele verschil tussen 20 en 30, verdeeld over vijf vakjes.",
            "0,5": "je hebt omgekeerd gedeeld: 5 : 10. Het moet 10 : 5 zijn."
          },
          w: "10 verschil : 5 vakjes = 2 per streepje.",
          meer: "Let op: minder streepjes betekent dat elk streepje méér waard is. Dat voelt vaak omgekeerd." },

        { t: "mc", q: "Waarom mag je bij het aflezen niet van bovenaf kijken?",
          o: ["Dan kijk je schuin langs de streepjes en lees je een verkeerde waarde af",
              "Dan verdampt de vloeistof",
              "Dan wordt de maatcilinder warm",
              "Dat mag juist wel"],
          a: "Dan kijk je schuin langs de streepjes en lees je een verkeerde waarde af",
          fout: {
            "Dan verdampt de vloeistof": "kijken verandert niets aan de vloeistof.",
            "Dan wordt de maatcilinder warm": "van kijken wordt niets warm.",
            "Dat mag juist wel": "nee, dit is precies de klassieke afleesfout."
          },
          w: "Schuin kijken laat de vloeistofspiegel op de verkeerde plek lijken.",
          meer: "Het effect heet parallax. Je kent het van een autoklok: vanaf de bijrijdersstoel lees je een andere snelheid af dan de bestuurder." },

        { t: "gap", q: "Van welk deel van de vloeistof lees je de stand af? Het ___ deel.",
          a: "vlakke|platte|onderste",
          w: "Het vlakke deel van de vloeistofspiegel.",
          meer: "Aan de randen kruipt de vloeistof tegen het glas omhoog. Die randjes tellen niet mee." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Nu oefen je op echte schalen op het scherm. De aanpak blijft precies hetzelfde:",
        "<b>1.</b> Twee genummerde streepjes zoeken · <b>2.</b> vakjes tellen · <b>3.</b> delen · <b>4.</b> vanaf het laatste nummer verder tellen.",
        "Doe daarna nog een <b>redelijkheidscheck</b>: ligt je antwoord echt tussen de twee getallen waar de stand tussenin zit? Lees je 63 af terwijl de stand tussen 40 en 50 staat, dan klopt er iets niet.",
        "Bij een <b>thermometer</b> en een <b>liniaal</b> werkt het net zo, alleen loopt de schaal anders. Dezelfde drie stappen."
      ],
      regel: "Waarde = laatste genummerde streepje + (aantal streepjes verder × waarde per streepje).",
      voorbeelden: [
        { en: "Stand net boven 40, elk streepje 2 mL, drie streepjes verder", let: "40 + 3 × 2 = <b>46 mL</b>." },
        { en: "Stand tussen 20 en 30, elk streepje 1 mL, zeven verder", let: "20 + 7 = <b>27 mL</b>." }
      ],
      vragen: [
        { t: "mc", q: "Je leest een maatcilinder af. De stand staat tussen 40 en 50, en elk streepje is 2 mL. Je telt 3 streepjes boven de 40. Wat lees je af?",
          o: ["46 mL", "43 mL", "50 mL", "42 mL"],
          a: "46 mL",
          fout: {
            "43 mL": "je hebt 3 streepjes geteld als 3 mL. Maar elk streepje is hier 2 mL waard, dus 3 × 2 = 6.",
            "50 mL": "dan tel je door tot het volgende genummerde streepje. Er zitten maar 3 streepjes bij, niet alle vijf.",
            "42 mL": "je hebt maar één streepje meegeteld. Er zijn er drie: 3 × 2 = 6."
          },
          w: "40 + 3 × 2 = 46.",
          meer: "Het aantal streepjes vermenigvuldig je met de waarde per streepje. Dat is precies waarom je stap 3 niet mag overslaan." },

        { t: "mc", q: "Een schaal loopt van 0 tot 100 mL, met genummerde streepjes om de 10 en 5 vakjes daartussen. Hoeveel is één streepje?",
          o: ["2 mL", "5 mL", "10 mL", "1 mL"],
          a: "2 mL",
          fout: {
            "5 mL": "dat is het aantal vakjes, niet de waarde. 10 : 5 = 2.",
            "10 mL": "dat is het verschil tussen twee genummerde streepjes, verdeeld over vijf vakjes.",
            "1 mL": "dat zou kloppen bij 10 vakjes tussen de nummers. Hier zijn er 5."
          },
          w: "10 mL verschil : 5 vakjes = 2 mL per streepje.",
          meer: "Twee cilinders kunnen er hetzelfde uitzien en toch een andere schaal hebben. Kijk dus élke keer opnieuw." },

        { t: "mc", q: "Een maatcilinder van 50 mL heeft streepjes van 1 mL. Een maatcilinder van 100 mL heeft streepjes van 2 mL. Welke lees je nauwkeuriger af?",
          o: ["Die van 50 mL, want de streepjes zijn fijner",
              "Die van 100 mL, want die is groter",
              "Ze zijn even nauwkeurig",
              "Dat hangt af van de vloeistof"],
          a: "Die van 50 mL, want de streepjes zijn fijner",
          fout: {
            "Die van 100 mL, want die is groter": "groter betekent niet nauwkeuriger. Er past meer in, maar je leest hem grover af.",
            "Ze zijn even nauwkeurig": "1 mL per streepje is twee keer zo fijn als 2 mL per streepje.",
            "Dat hangt af van de vloeistof": "de vloeistof verandert de schaalverdeling niet."
          },
          w: "Fijnere streepjes = nauwkeuriger aflezen.",
          meer: "Vuistregel in het lab: pak de kleinste maatcilinder waar je hoeveelheid nog net in past." },

        { t: "mc", q: "Je moet 45 mL water afmeten. Welke maatcilinder kun je het beste pakken?",
          o: ["Die van 50 mL", "Die van 100 mL", "Die van 25 mL", "Een maatbeker van 1 liter"],
          a: "Die van 50 mL",
          fout: {
            "Die van 100 mL": "past wel, maar die heeft grovere streepjes. Je leest minder nauwkeurig af.",
            "Die van 25 mL": "daar past 45 mL helemaal niet in.",
            "Een maatbeker van 1 liter": "veel te grof. De streepjes staan daar vaak per 100 mL."
          },
          w: "De kleinste waar het nog net in past leest het nauwkeurigst.",
          meer: "Precies daarom staan er in een lab maatcilinders in verschillende maten naast elkaar." },

        { t: "mc", q: "Op een thermometer staan genummerde streepjes om de 10 °C en liggen er 10 vakjes tussen. De vloeistof staat 4 streepjes boven de 20. Welke temperatuur lees je af?",
          o: ["24 °C", "20,4 °C", "60 °C", "34 °C"],
          a: "24 °C",
          fout: {
            "20,4 °C": "dan reken je elk streepje als 0,1 °C. Maar 10 : 10 = 1, dus elk streepje is 1 °C.",
            "60 °C": "je hebt 4 keer 10 opgeteld bij 20. Elk streepje is 1 °C, niet 10.",
            "34 °C": "je hebt bij het verkeerde genummerde streepje geteld. Begin bij de 20."
          },
          w: "10 : 10 = 1 °C per streepje, dus 20 + 4 = 24.",
          meer: "Precies dezelfde drie stappen als bij de maatcilinder: verschil, vakjes, delen." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Op Goud komen de <b>fijne schalen</b> en de <b>combinaties</b>. Bij halve of vijfde streepjes wordt de waarde per streepje een kommagetal: bijvoorbeeld <b>0,5 mL</b> of <b>0,2 °C</b>.",
        "Doe de deling dan echt uit: verschil ÷ aantal vakjes. Gok niet.",
        "Combineren doe je zo: <b>onderdompelmethode</b> = twee keer aflezen (beginstand en eindstand) en dan aftrekken. <b>Dichtheid van een vloeistof</b> = volume aflezen op de maatcilinder én massa aflezen op de weegschaal.",
        "Vergeet niet: <b>de maatcilinder leest mL, en 1 mL = 1 cm³</b>. Je mag het getal direct gebruiken."
      ],
      regel: "Fijne schaal? Doe de deling uit. Combinatie? Lees allebei af en reken daarna pas.",
      voorbeelden: [
        { en: "Tussen 10 en 15 liggen 10 vakjes", let: "5 : 10 = <b>0,5 per streepje</b>." },
        { en: "Begin 52 mL, eind 78 mL", let: "78 − 52 = <b>26 cm³</b> volume." }
      ],
      vragen: [
        { t: "mc", q: "Tussen de genummerde streepjes 10 en 15 liggen 10 vakjes. Hoeveel is één streepje waard?",
          o: ["0,5", "1", "5", "2"],
          a: "0,5",
          fout: {
            "1": "dat zou kloppen bij een verschil van 10. Hier is het verschil 5, verdeeld over 10 vakjes.",
            "5": "dat is het hele verschil, niet één vakje.",
            "2": "je hebt omgekeerd gedeeld: 10 : 5. Het moet 5 : 10 zijn."
          },
          w: "5 verschil : 10 vakjes = 0,5.",
          meer: "Meer vakjes tussen dezelfde nummers betekent altijd een kleinere waarde per streepje." },

        { t: "bouw", q: "Beginstand 52 cm³, eindstand 78 cm³. Wat is het volume van het voorwerp? (alleen het getal, in cm³)",
          a: "26",
          w: "volume = eindstand − beginstand.",
          meer: "78 − 52 = 26 cm³. Het water dat omhoog kwam, is precies de ruimte die het voorwerp inneemt." },

        { t: "mc", q: "Je leest een maatcilinder af terwijl je er van bovenaf op kijkt. Wat gebeurt er met je antwoord?",
          o: ["Je leest een te lage waarde af", "Je leest een te hoge waarde af",
              "Je leest precies goed af", "De vloeistof beweegt"],
          a: "Je leest een te lage waarde af",
          fout: {
            "Je leest een te hoge waarde af": "dat gebeurt als je van onderaf omhoog kijkt. Van boven is het juist te laag.",
            "Je leest precies goed af": "alleen als je exact op ooghoogte kijkt.",
            "De vloeistof beweegt": "de vloeistof staat stil. Het is je kijklijn die schuin loopt."
          },
          w: "Van boven kijken geeft een te lage waarde.",
          meer: "Van boven te laag, van onderen te hoog, op ooghoogte precies goed. Dat is parallax." },

        { t: "mc", q: "Je bepaalt de dichtheid van een vloeistof. De maatcilinder leest 60 mL en de weegschaal 48 g. Wat vul je in de formule in?",
          o: ["massa 48 g en volume 60 cm³, want 1 mL = 1 cm³",
              "massa 48 g en volume 0,06 cm³",
              "massa 48 g en volume 60 000 cm³",
              "massa 60 g en volume 48 cm³"],
          a: "massa 48 g en volume 60 cm³, want 1 mL = 1 cm³",
          fout: {
            "massa 48 g en volume 0,06 cm³": "je hebt mL naar liter omgerekend in plaats van naar cm³. Van mL naar cm³ hoef je niets te doen.",
            "massa 48 g en volume 60 000 cm³": "je hebt keer 1000 gedaan. Dat hoort bij L naar mL, niet bij mL naar cm³.",
            "massa 60 g en volume 48 cm³": "je hebt de twee verwisseld. De weegschaal geeft de massa, de maatcilinder het volume."
          },
          w: "1 mL = 1 cm³, dus het getal blijft staan.",
          meer: "dichtheid = 48 / 60 = 0,80 g/cm³. Volgens tabel 1 zou dat alcohol kunnen zijn." },

        { t: "mc", q: "Waarom lees je bij de onderdompelmethode eerst de beginstand af en pas daarna de eindstand?",
          o: ["Omdat er water aan het voorwerp blijft hangen als je het er weer uithaalt",
              "Omdat het water anders verdampt",
              "Omdat de maatcilinder anders breekt",
              "Dat maakt niet uit, andersom mag ook"],
          a: "Omdat er water aan het voorwerp blijft hangen als je het er weer uithaalt",
          fout: {
            "Omdat het water anders verdampt": "in die paar seconden verdampt er niets merkbaars.",
            "Omdat de maatcilinder anders breekt": "de volgorde van aflezen heeft niets met breken te maken. Voorzichtig laten zakken wel.",
            "Dat maakt niet uit, andersom mag ook": "juist wel. Haal je het voorwerp eruit, dan neemt het water mee en staat je 'beginstand' te laag."
          },
          w: "Nat voorwerp = water eruit = te lage beginstand = te groot volume.",
          meer: "Doe je het andersom, dan krijg je stelselmatig een te grote uitkomst. En dat merk je niet aan het getal zelf." }
      ]
    }
  ]
},
/* ================================================================ 2.3 — C */
{
  id: "volume", emoji: "📦", titel: "2.3 Volume bepalen",
  kort: "Rechthoekig? Reken uit. Rare vorm? Dompel onder.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Het <b>volume</b> is de <b>ruimte</b> die een voorwerp of een hoeveelheid stof inneemt.",
        "Van een <b>rechthoekig</b> voorwerp kun je het volume <b>berekenen</b>. Meet drie zijden en gebruik:",
        "<b>volume = lengte × breedte × hoogte</b>",
        "Meet je lengte, breedte en hoogte in <b>centimeter (cm)</b>, dan komt het volume er in <b>kubieke centimeter (cm³)</b> uit. Dat is logisch: je vult het blok met blokjes van 1 cm bij 1 cm bij 1 cm."
      ],
      regel: "volume = lengte × breedte × hoogte (cm × cm × cm = cm³).",
      voorbeelden: [
        { en: "l = 5,0 cm, b = 3,0 cm, h = 4,0 cm", let: "volume = 5,0 × 3,0 × 4,0 = <b>60 cm³</b>." },
        { en: "Een blokje van 2 bij 2 bij 2 cm", let: "2 × 2 × 2 = <b>8 cm³</b>, dus acht blokjes van 1 cm³." }
      ],
      vragen: [
        { t: "vb", opgave: "Bereken het volume van een blok van 5,0 bij 3,0 bij 4,0 cm.",
          stappen: [
            { toon: "gegevens: l = 5,0 cm · b = 3,0 cm · h = 4,0 cm", uitleg: "Schrijf eerst op wat je weet. Dat doet het boek ook." },
            { toon: "gevraagd: volume = ?", uitleg: "En schrijf op wat gevraagd wordt." },
            { toon: "volume = lengte × breedte × hoogte", uitleg: "Zet eerst de formule neer, nog zonder getallen." },
            { toon: "= 5,0 × 3,0 × 4,0", uitleg: "Vul dan pas de getallen in." },
            { toon: "= 60 cm³", uitleg: "Reken uit en zet de eenheid erachter. cm × cm × cm geeft cm³." }
          ],
          waarom: { q: "Waarom staat er cm³ achter het antwoord en niet cm?",
            o: ["Omdat je drie lengtes in cm met elkaar vermenigvuldigt", "Omdat het antwoord groter dan 10 is", "Omdat een blok altijd in cm³ gaat"],
            a: "Omdat je drie lengtes in cm met elkaar vermenigvuldigt" },
          fout: {
            "Omdat het antwoord groter dan 10 is": "de grootte van het getal zegt niets over de eenheid. Een blokje van 0,5 cm³ is ook cm³.",
            "Omdat een blok altijd in cm³ gaat": "dat is bijna waar, maar het is geen uitleg. Meet je in meters, dan komt er m³ uit."
          },
          w: "cm × cm × cm = cm³.",
          meer: "De eenheid volgt uit de berekening. Meet je in cm, dan krijg je cm³; meet je in dm, dan dm³." },

        { t: "mc", q: "Welke formule gebruik je voor het volume van een rechthoekig voorwerp?",
          o: ["volume = lengte × breedte × hoogte", "volume = lengte + breedte + hoogte",
              "volume = lengte × breedte", "volume = massa / lengte"],
          a: "volume = lengte × breedte × hoogte",
          fout: {
            "volume = lengte + breedte + hoogte": "optellen geeft geen ruimte. Een blok van 1 bij 1 bij 1 zou dan 3 zijn in plaats van 1.",
            "volume = lengte × breedte": "dat is de oppervlakte van één vlak. Voor ruimte heb je de derde richting nodig.",
            "volume = massa / lengte": "die formule bestaat niet. Je verwart hem misschien met dichtheid = massa / volume."
          },
          w: "Drie richtingen, dus drie lengtes keer elkaar.",
          meer: "Twee lengtes keer elkaar geeft oppervlakte (cm²), drie geeft volume (cm³)." },

        { t: "bouw", q: "Een blokje is 4,0 cm lang, 1,0 cm breed en 1,0 cm hoog. Wat is het volume in cm³? (alleen het getal)",
          a: "4",
          w: "4,0 × 1,0 × 1,0 = 4.",
          meer: "Vier blokjes van 1 cm³ naast elkaar, precies zoals blokje A in het boek." },

        { t: "bouw", q: "Een blokje is 3,0 cm bij 3,0 cm bij 3,0 cm. Wat is het volume in cm³? (alleen het getal)",
          a: "27",
          w: "3,0 × 3,0 × 3,0 = 27.",
          meer: "Een kubus van 3 bij 3 bij 3 bestaat uit 27 blokjes van 1 cm³." },

        { t: "mc", q: "Wat is het <b>volume</b> van een voorwerp?",
          o: ["De ruimte die het voorwerp inneemt", "Hoeveel het voorwerp weegt",
              "Hoe zwaar het voorwerp aanvoelt", "Uit hoeveel stof het bestaat"],
          a: "De ruimte die het voorwerp inneemt",
          fout: {
            "Hoeveel het voorwerp weegt": "dat is de massa, een andere grootheid.",
            "Hoe zwaar het voorwerp aanvoelt": "ook massa, en bovendien een gevoel in plaats van een meting.",
            "Uit hoeveel stof het bestaat": "dat is precies de definitie van massa."
          },
          w: "Volume = ruimte.",
          meer: "Massa en volume zijn twee losse grootheden. Een grote ballon heeft veel volume en bijna geen massa." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Heeft een voorwerp een <b>rare vorm</b> (een steen, een schroef), dan kun je niets meten met een liniaal. Dan gebruik je de <b>onderdompelmethode</b>:",
        "<b>1.</b> Vul een maatcilinder tot een bepaalde hoogte met water.<br><b>2.</b> Lees de stand af: de <b>beginstand</b>.<br><b>3.</b> Laat het voorwerp voorzichtig zakken tot het <b>helemaal onder water</b> is.<br><b>4.</b> Lees opnieuw af: de <b>eindstand</b>.<br><b>5.</b> Reken uit:",
        "<b>volume = eindstand − beginstand</b>",
        "Het water dat omhoog kwam, is precies de ruimte die het voorwerp inneemt. Daarom móet het voorwerp helemaal onder water: steekt er iets bovenuit, dan meet je te weinig."
      ],
      regel: "volume = eindstand − beginstand (in die volgorde).",
      voorbeelden: [
        { en: "beginstand 52 cm³, eindstand 78 cm³", let: "78 − 52 = <b>26 cm³</b>." },
        { en: "beginstand 20 mL, eindstand 35 mL", let: "35 − 20 = <b>15 cm³</b> (1 mL = 1 cm³)." }
      ],
      vragen: [
        { t: "mc", q: "Met welke formule bereken je het volume bij de onderdompelmethode?",
          o: ["volume = eindstand − beginstand", "volume = beginstand − eindstand",
              "volume = eindstand + beginstand", "volume = eindstand × beginstand"],
          a: "volume = eindstand − beginstand",
          fout: {
            "volume = beginstand − eindstand": "dan komt er een negatief getal uit, en een volume kan niet negatief zijn. De eindstand is altijd hoger.",
            "volume = eindstand + beginstand": "optellen geeft veel te veel: je telt het water er dan nog een keer bij.",
            "volume = eindstand × beginstand": "vermenigvuldigen slaat nergens op. Je wilt weten hoevéél het water steeg, dus je trekt af."
          },
          w: "Het verschil tussen de twee standen is het volume.",
          meer: "De eindstand is altijd de grootste, want er is iets bijgekomen. Daarom staat die vooraan." },

        { t: "sequence", q: "Zet de stappen van de onderdompelmethode in de goede volgorde.",
          stappen: ["Vul een maatcilinder tot een bepaalde hoogte met water",
                    "Lees de beginstand af",
                    "Laat het voorwerp voorzichtig in het water zakken",
                    "Lees de eindstand van het water af",
                    "Reken uit: eindstand − beginstand"],
          w: "Eerst vullen, dan aflezen, dan pas het voorwerp erin.",
          meer: "De beginstand aflezen moet vóór het voorwerp erin gaat. Anders weet je niet waar je vandaan kwam." },

        { t: "bouw", q: "Beginstand 20 mL, eindstand 35 mL. Wat is het volume van het voorwerp in cm³? (alleen het getal)",
          a: "15",
          w: "35 − 20 = 15, en 1 mL = 1 cm³.",
          meer: "Het water steeg 15 mL. Dat is precies de ruimte die het voorwerp inneemt: 15 cm³." },

        { t: "mc", q: "Waarom moet het voorwerp helemaal onder water komen?",
          o: ["Anders duwt alleen het ondergedompelde deel water weg en meet je te weinig",
              "Anders wordt het voorwerp nat",
              "Anders breekt de maatcilinder",
              "Dat hoeft niet"],
          a: "Anders duwt alleen het ondergedompelde deel water weg en meet je te weinig",
          fout: {
            "Anders wordt het voorwerp nat": "het wordt sowieso nat, dat is geen probleem.",
            "Anders breekt de maatcilinder": "breken heeft er niets mee te maken, wel voorzichtig laten zakken.",
            "Dat hoeft niet": "juist wel. Je meet alleen de ruimte van het deel dat onder water zit."
          },
          w: "Alleen het deel onder water duwt water weg.",
          meer: "Precies daarom is drijvend hout lastig: je moet het met een naald onder duwen, anders meet je maar een stukje." },

        { t: "bouw", q: "Een blokje is 5,2 cm bij 2,2 cm bij 1,5 cm. Wat is het volume in cm³? (alleen het getal)",
          a: "17,16",
          w: "5,2 × 2,2 × 1,5 = 17,16.",
          meer: "Ook met kommagetallen blijft het gewoon lengte × breedte × hoogte. Reken de eerste twee uit (11,44) en vermenigvuldig dan met 1,5." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Op Goud combineer je de twee methodes, en let je op de <b>valkuilen</b>.",
        "<b>Andersom mag niet.</b> Eerst de eindstand bepalen, dan het voorwerp eruit halen en dan de beginstand: dat lijkt logisch, maar er blijft <b>water aan het voorwerp hangen</b>. Je 'beginstand' is dan te laag en je volume te groot.",
        "<b>Drijvend hout?</b> Duw het met een dunne naald of pen helemaal onder water. De naald is zo dun dat je die mag verwaarlozen.",
        "<b>Combineren:</b> je kunt het volume van een rechthoekig staafje uitrekenen en daarmee de <b>eindstand voorspellen</b>: eindstand = beginstand + volume. En je kunt van een blok een stukje afhalen: bereken beide volumes en trek ze van elkaar af."
      ],
      regel: "eindstand = beginstand + volume. En: nooit eerst onderdompelen, dan de beginstand.",
      voorbeelden: [
        { en: "Staafje van 1,5 × 1,5 × 8,0 cm in water van 40 mL", let: "volume = 18 cm³, dus eindstand = 40 + 18 = <b>58 mL</b>." },
        { en: "Baksteen 21 × 10 × 5 cm, stuk van 10 × 5 × 5 cm eraf", let: "1050 − 250 = <b>800 cm³</b>." }
      ],
      vragen: [
        { t: "stap", opgave: "Een staafje van 1,5 cm bij 1,5 cm bij 8,0 cm gaat in een maatcilinder waar het water op 40 mL staat. Bereken eerst het volume en daarna de eindstand.",
          stappen: [
            { prompt: "Volume van het staafje in cm³", a: "18",
              hints: ["volume = lengte × breedte × hoogte", "1,5 × 1,5 = 2,25 · daarna × 8,0", "2,25 × 8,0 = 18"] },
            { prompt: "Eindstand van het water in mL", a: "58",
              hints: ["Het water stijgt met precies het volume van het staafje", "1 mL = 1 cm³, dus 18 cm³ = 18 mL", "40 + 18 = 58"] }
          ],
          w: "eindstand = beginstand + volume.",
          meer: "Het staafje duwt 18 cm³ water omhoog, dus het water stijgt van 40 naar 58 mL." },

        { t: "mc", q: "Je zou de onderdompelmethode ook andersom kunnen doen: eerst de eindstand, dan het voorwerp eruit halen, dan de beginstand. Waarom is dat geen goede manier?",
          o: ["Er blijft water aan het voorwerp hangen, dus de beginstand wordt te laag afgelezen",
              "Het water is dan te warm geworden",
              "De eindstand verandert niet",
              "Dat is wél een goede manier"],
          a: "Er blijft water aan het voorwerp hangen, dus de beginstand wordt te laag afgelezen",
          fout: {
            "Het water is dan te warm geworden": "temperatuur speelt hier geen merkbare rol.",
            "De eindstand verandert niet": "die verandert inderdaad niet, maar dat is niet het probleem. Het probleem zit bij de beginstand.",
            "Dat is wél een goede manier": "nee. Het levert stelselmatig een te groot volume op, en je ziet aan het getal niet dat het fout is."
          },
          w: "Nat voorwerp neemt water mee → beginstand te laag → volume te groot.",
          meer: "Een fout die altijd dezelfde kant op gaat heet een systematische fout. Die is gevaarlijker dan een toevallige fout, want hij valt niet op." },

        { t: "mc", q: "Hout drijft op water. Hoe bepaal je toch het volume van een houten schaakstuk met de onderdompelmethode?",
          o: ["Duw het met een dunne naald helemaal onder water",
              "Meet het volume met een liniaal, het hoeft niet in water",
              "Laat het een nacht weken tot het zinkt",
              "Dat kan niet"],
          a: "Duw het met een dunne naald helemaal onder water",
          fout: {
            "Meet het volume met een liniaal, het hoeft niet in water": "een schaakstuk is niet rechthoekig, dus l × b × h werkt hier niet.",
            "Laat het een nacht weken tot het zinkt": "dan zuigt het hout water op en verandert het van massa. Bovendien duurt het veel te lang.",
            "Dat kan niet": "het kan prima, met een naald of een dun pennetje."
          },
          w: "Onder duwen met iets heel duns dat zelf bijna geen volume heeft.",
          meer: "De naald verplaatst zelf ook een heel klein beetje water, maar zo weinig dat je het mag verwaarlozen." },

        { t: "stap", opgave: "Een waalformaat baksteen is 21 × 10 × 5 cm. Er gaat een stukje van 10 × 5 × 5 cm af. Bereken het volume dat overblijft.",
          stappen: [
            { prompt: "Volume van de hele baksteen in cm³", a: "1050",
              hints: ["21 × 10 × 5", "21 × 10 = 210", "210 × 5 = 1050"] },
            { prompt: "Volume van het afgehaalde stukje in cm³", a: "250",
              hints: ["10 × 5 × 5", "10 × 5 = 50", "50 × 5 = 250"] },
            { prompt: "Volume dat overblijft in cm³", a: "800",
              hints: ["Trek het stukje van de hele steen af", "1050 − 250", "= 800"] }
          ],
          w: "Bereken beide volumes en trek ze van elkaar af.",
          meer: "Zo pak je elke samengestelde vorm aan: knip hem in rechthoekige stukken en tel op of trek af." },

        { t: "mc", q: "Een blokje van 2,0 × 2,0 × 2,0 cm wordt doormidden gezaagd. Wat klopt?",
          o: ["Elk half blokje heeft een volume van 4 cm³",
              "Elk half blokje heeft een volume van 8 cm³",
              "Elk half blokje heeft een volume van 2 cm³",
              "Het volume verandert niet, want het is dezelfde stof"],
          a: "Elk half blokje heeft een volume van 4 cm³",
          fout: {
            "Elk half blokje heeft een volume van 8 cm³": "dat is het volume van het héle blokje: 2 × 2 × 2 = 8. De helft daarvan is 4.",
            "Elk half blokje heeft een volume van 2 cm³": "dan heb je door 4 gedeeld in plaats van door 2.",
            "Het volume verandert niet, want het is dezelfde stof": "de stof blijft dezelfde, maar elk stukje neemt de helft van de ruimte in. Wat níet verandert is de dichtheid."
          },
          w: "8 cm³ in twee gelijke helften is 4 cm³ per stuk.",
          meer: "Let op het verschil: massa en volume halveren allebei, maar de dichtheid blijft precies hetzelfde. Daar komen we bij dichtheid op terug." }
      ]
    }
  ]
},

/* ================================================================ 2.4 — A */
{
  id: "dichtheid", emoji: "⚖️", titel: "2.4 Dichtheid berekenen",
  kort: "Hoeveel gram zit er in één blokje van 1 cm³?",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Mensen zeggen: \"aluminium is een licht metaal\". Maar hoe weet je dat? Je kunt niet zomaar twee voorwerpen wegen: een aluminium fietsframe is zwaarder dan een stalen fietsstuur.",
        "Je moet <b>eerlijk vergelijken</b>: neem van elke stof een blokje van <b>1 cm³</b> en weeg die. Het blokje met de kleinste massa is van de 'lichtste' stof.",
        "Aluminium van 1 cm³ weegt <b>2,7 g</b>. Staal van 1 cm³ weegt <b>7,8 g</b>. Dus aluminium is ongeveer drie keer zo licht.",
        "Die massa van 1 cm³ heet de <b>dichtheid</b>. Je zegt: de dichtheid van aluminium is 2,7 <b>gram per kubieke centimeter</b> (g/cm³). Het woordje <b>per</b> is de kern: zoveel gram <b>in elk blokje van 1 cm³</b>."
      ],
      regel: "Dichtheid = de massa van 1 cm³ van een stof, in g/cm³.",
      voorbeelden: [
        { en: "aluminium: 2,7 g/cm³", let: "Elk blokje van 1 cm³ aluminium weegt 2,7 gram." },
        { en: "water: 1,0 g/cm³", let: "Dit getal moet je kennen: het is de grens tussen drijven en zinken." }
      ],
      vragen: [
        { t: "mc", q: "Wat is de <b>dichtheid</b> van een stof?",
          o: ["De massa van 1 cm³ van die stof", "De massa van het hele voorwerp",
              "Het volume van het hele voorwerp", "Hoe hard de stof is"],
          a: "De massa van 1 cm³ van die stof",
          fout: {
            "De massa van het hele voorwerp": "dat is gewoon de massa. De dichtheid gaat juist over één blokje van 1 cm³, ongeacht hoe groot het voorwerp is.",
            "Het volume van het hele voorwerp": "dat is het volume. Dichtheid combineert massa én volume.",
            "Hoe hard de stof is": "hardheid is iets anders. Lood is zacht en heeft een grote dichtheid; glas is hard en heeft een kleinere."
          },
          w: "Dichtheid = de massa van 1 cm³.",
          meer: "De eenheid zegt het al: g/cm³ betekent gram per kubieke centimeter, dus gram in elk blokje van 1 cm³." },

        { t: "mc", q: "Waarom mag je niet zomaar een aluminium en een stalen voorwerp wegen om te zien welke stof lichter is?",
          o: ["Omdat de voorwerpen verschillend groot kunnen zijn",
              "Omdat aluminium niet op een weegschaal past",
              "Omdat staal magnetisch is",
              "Dat mag juist wel"],
          a: "Omdat de voorwerpen verschillend groot kunnen zijn",
          fout: {
            "Omdat aluminium niet op een weegschaal past": "natuurlijk past aluminium op een weegschaal.",
            "Omdat staal magnetisch is": "magnetisme heeft niets met wegen te maken.",
            "Dat mag juist wel": "nee, dan vergelijk je appels met peren. Een aluminium fietsframe is zwaarder dan een stalen fietsstuur, terwijl aluminium de lichtere stof is."
          },
          w: "Je moet van allebei even veel nemen: 1 cm³.",
          meer: "Dit is dezelfde regel als bij Eveliens fietsproef: verander maar één ding tegelijk. Hier houd je het volume gelijk en vergelijk je de massa." },

        { t: "mc", q: "Wat is de dichtheid van <b>water</b>?",
          o: ["1,0 g/cm³", "0,1 g/cm³", "10 g/cm³", "1000 g/cm³"],
          a: "1,0 g/cm³",
          fout: {
            "0,1 g/cm³": "dan zou een liter water 100 gram wegen. Een liter water weegt juist 1000 gram, oftewel 1 kilo.",
            "10 g/cm³": "dan zou een pak melk 10 kilo wegen. Dat merk je wel als je het optilt.",
            "1000 g/cm³": "je verwart het met 1 liter = 1000 mL. Per cm³ is het 1,0 gram."
          },
          w: "Water is precies 1,0 g/cm³.",
          meer: "Dit getal moet je uit je hoofd kennen: het is de grens tussen drijven en zinken. En het klopt met wat je al wist: 1 liter water weegt 1 kilo." },

        { t: "gap", q: "De eenheid van dichtheid spreek je uit als 'gram ___ kubieke centimeter'.",
          a: "per",
          w: "Gram per kubieke centimeter.",
          meer: "Dat woordje 'per' betekent 'in elk'. 2,7 g per cm³ = 2,7 gram in élk blokje van 1 cm³." },

        { t: "mc", q: "Aluminium van 1 cm³ weegt 2,7 g, staal van 1 cm³ weegt 7,8 g. Welke stof is 'lichter'?",
          o: ["Aluminium", "Staal", "Ze zijn even licht", "Dat hangt af van het voorwerp"],
          a: "Aluminium",
          fout: {
            "Staal": "staal weegt bij hetzelfde volume bijna drie keer zoveel. Dat is juist zwaarder.",
            "Ze zijn even licht": "2,7 en 7,8 zijn heel verschillende getallen.",
            "Dat hangt af van het voorwerp": "juist niet. Omdat je even veel van allebei neemt (1 cm³), is de vergelijking eerlijk en hangt hij niet meer van het voorwerp af."
          },
          w: "Bij hetzelfde volume weegt aluminium minder.",
          meer: "Daarom maken ze velgen van aluminium: bij dezelfde vorm is het lichter dan staal." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Je hebt <b>geen blokje van 1 cm³ nodig</b>. Een groter blokje kun je in gedachten in blokjes van 1 cm³ verdelen.",
        "Een staafje messing van <b>34 g</b> heeft een volume van <b>4 cm³</b>. Verdeel dat in vier blokjes van 1 cm³: in elk blokje zit 34 : 4 = <b>8,5 g</b>. De dichtheid van messing is dus 8,5 g/cm³.",
        "Dat delen is precies de formule:",
        "<b>dichtheid = massa / volume</b>",
        "Werk altijd in de vorm van het boek: <b>gegevens → gevraagd → uitwerking</b>. Dan zie je zelf ook waar je bent."
      ],
      regel: "dichtheid = massa / volume. Massa in g, volume in cm³, dichtheid in g/cm³.",
      voorbeelden: [
        { en: "34 g messing met een volume van 4 cm³", let: "34 / 4 = <b>8,5 g/cm³</b>." },
        { en: "723 g in 64 cm³", let: "723 / 64 = <b>11,3 g/cm³</b>, dat is lood." }
      ],
      vragen: [
        { t: "vb", opgave: "Een zwart geverfd blokje meet 4,0 bij 4,0 bij 4,0 cm en heeft een massa van 723 g. Van welk materiaal kan het zijn?",
          stappen: [
            { toon: "gegevens: l = b = h = 4,0 cm · massa = 723 g", uitleg: "Schrijf op wat je weet." },
            { toon: "gevraagd: de dichtheid", uitleg: "Pas als je de dichtheid hebt, kun je in tabel 1 zoeken." },
            { toon: "volume = 4,0 × 4,0 × 4,0 = 64 cm³", uitleg: "Je hebt het volume nodig, en dat staat er niet bij. Eerst uitrekenen dus." },
            { toon: "dichtheid = massa / volume = 723 / 64", uitleg: "Nu pas de dichtheidsformule invullen." },
            { toon: "= 11,3 g/cm³ → lood", uitleg: "Zoek 11,3 op in tabel 1: dat is lood." }
          ],
          waarom: { q: "Waarom moest het volume eerst berekend worden?",
            o: ["Omdat het volume niet gegeven was, maar wel nodig is voor de formule", "Omdat de formule met volume begint", "Omdat lood zwaar is"],
            a: "Omdat het volume niet gegeven was, maar wel nodig is voor de formule" },
          fout: {
            "Omdat de formule met volume begint": "de formule begint juist met massa: dichtheid = massa / volume. Het gaat erom dat het volume ontbrak.",
            "Omdat lood zwaar is": "dat weet je pas ná de berekening. Je mag niet eerst raden welke stof het is."
          },
          w: "Je hebt massa én volume nodig; het volume ontbrak.",
          meer: "Staat het volume er niet bij, maar wel drie zijden? Dan is stap 1 altijd: volume = l × b × h." },

        { t: "bouw", q: "Een voorwerp heeft een massa van 34 g en een volume van 4 cm³. Wat is de dichtheid in g/cm³? (alleen het getal)",
          a: "8,5",
          w: "dichtheid = massa / volume = 34 / 4.",
          meer: "34 : 4 = 8,5. In tabel 1 staat 8,5 bij messing." },

        { t: "bouw", q: "Een ring heeft een massa van 26,25 g en een volume van 2,5 cm³. Wat is de dichtheid in g/cm³? (alleen het getal)",
          a: "10,5",
          w: "26,25 / 2,5 = 10,5.",
          meer: "In tabel 1 hoort 10,5 bij zilver. De ring kan dus van zilver zijn." },

        { t: "mc", q: "Je moet de dichtheid berekenen, maar je hebt alleen de massa. Wat heb je nog nodig?",
          o: ["Het volume", "De temperatuur", "De lengte", "Niets meer"],
          a: "Het volume",
          fout: {
            "De temperatuur": "temperatuur staat niet in de formule.",
            "De lengte": "met alleen de lengte kom je er niet. Je hebt drie zijden nodig om het volume te berekenen, of een maatcilinder.",
            "Niets meer": "met alleen een massa kun je geen dichtheid uitrekenen. Een kilo veren en een kilo lood hebben dezelfde massa en heel verschillende dichtheden."
          },
          w: "dichtheid = massa / volume, dus allebei nodig.",
          meer: "Dat is precies wat dichtheid bijzonder maakt: het is een combinatie van twee grootheden." },

        { t: "stap", opgave: "Een vloeistof in een bekerglas heeft een massa van 8,55 g en een volume van 9,0 cm³. Bereken de dichtheid.",
          stappen: [
            { prompt: "De dichtheid in g/cm³", a: "0,95",
              hints: ["dichtheid = massa / volume", "8,55 : 9,0", "= 0,95"] }
          ],
          w: "8,55 / 9,0 = 0,95 g/cm³.",
          meer: "Kleiner dan 1,0, dus deze vloeistof zou op water drijven." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Dichtheid is een <b>stofeigenschap</b>: een eigenschap waaraan je een stof kunt <b>herkennen</b>. Massa en volume zijn dat niet, want die kun je veranderen door meer of minder van de stof te nemen.",
        "<b>De valkuil van dit hele hoofdstuk:</b> zaag je een blok doormidden, dan halveert de massa <b>én</b> het volume. De dichtheid blijft dus <b>precies hetzelfde</b>. Reken maar na: 40 g in 5 cm³ is 8 g/cm³, en 20 g in 2,5 cm³ is óók 8 g/cm³.",
        "Op Goud moet je vaak <b>eerst omrekenen</b>. Krijg je kg en dm³, maak er dan g en cm³ van vóórdat je deelt. Anders klopt je eenheid niet.",
        "En je gebruikt <b>tabel 1</b>: reken de dichtheid uit en zoek hem op om te zien welke stof het kan zijn."
      ],
      regel: "Dichtheid verandert niet door de hoeveelheid. Eerst eenheden goed zetten, dan delen.",
      voorbeelden: [
        { en: "Blok van 40 g en 5 cm³ doormidden", let: "20 g in 2,5 cm³ → 20/2,5 = 8, precies dezelfde <b>8 g/cm³</b>." },
        { en: "13,65 kg in 21 dm³", let: "= 13 650 g in 21 000 cm³ → <b>0,65 g/cm³</b>." }
      ],
      vragen: [
        { t: "mc", q: "Een blok met een massa van 40 g en een volume van 5 cm³ wordt doormidden gezaagd. Wat is de dichtheid van één helft?",
          o: ["8 g/cm³, precies hetzelfde als het hele blok",
              "4 g/cm³, de helft van het hele blok",
              "16 g/cm³, het dubbele",
              "Dat kun je niet zeggen"],
          a: "8 g/cm³, precies hetzelfde als het hele blok",
          fout: {
            "4 g/cm³, de helft van het hele blok": "dit is dé denkfout van dit hoofdstuk. Je halveert wel de massa (20 g), maar óók het volume (2,5 cm³). Reken na: 20 : 2,5 = 8. Precies hetzelfde.",
            "16 g/cm³, het dubbele": "er wordt niets verdubbeld. Beide getallen worden juist kleiner.",
            "Dat kun je niet zeggen": "dat kun je wél: dichtheid is een stofeigenschap en verandert niet door de hoeveelheid."
          },
          w: "Massa én volume halveren, dus de deling blijft gelijk.",
          meer: "Vergelijk met een pak hagelslag: of je er nu een schepje of het hele pak van neemt, het blijft dezelfde hagelslag. Dat is precies wat 'stofeigenschap' betekent." },

        { t: "mc", q: "Waarom is dichtheid een <b>stofeigenschap</b> en massa niet?",
          o: ["De dichtheid blijft gelijk hoeveel je ook van de stof neemt; de massa verandert wél",
              "Omdat dichtheid uitgerekend wordt en massa gemeten",
              "Omdat dichtheid altijd groter is dan massa",
              "Omdat massa in gram gaat"],
          a: "De dichtheid blijft gelijk hoeveel je ook van de stof neemt; de massa verandert wél",
          fout: {
            "Omdat dichtheid uitgerekend wordt en massa gemeten": "hoe je eraan komt maakt niet uit. Het gaat erom of de waarde verandert als je meer van de stof neemt.",
            "Omdat dichtheid altijd groter is dan massa": "dat is niet zo, en het heeft er niets mee te maken. Je kunt twee verschillende grootheden niet zomaar vergelijken.",
            "Omdat massa in gram gaat": "de eenheid maakt iets nog geen stofeigenschap."
          },
          w: "Een stofeigenschap verandert niet met de hoeveelheid.",
          meer: "Aan de dichtheid kun je een stof dus hérkennen. Aan de massa niet: 723 g kan van alles zijn." },

        { t: "stap", opgave: "Een boomstam heeft een massa van 13,65 kg en een volume van 21 dm³. Bereken de dichtheid in g/cm³.",
          stappen: [
            { prompt: "De massa in gram", a: "13650",
              hints: ["kg naar g is groot naar klein: keer 1000", "13,65 × 1000", "= 13650"] },
            { prompt: "Het volume in cm³", a: "21000",
              hints: ["dm³ naar cm³ is ook keer 1000", "21 × 1000", "= 21000"] },
            { prompt: "De dichtheid in g/cm³", a: "0,65",
              hints: ["dichtheid = massa / volume", "13650 : 21000", "= 0,65"] }
          ],
          w: "Eerst allebei omrekenen, dan pas delen.",
          meer: "0,65 g/cm³ is kleiner dan 1,0, dus deze boomstam drijft op water. Dat klopt met wat je van hout weet." },

        { t: "mc", q: "Je hebt uitgerekend dat een blokje een dichtheid van 2,7 g/cm³ heeft. Van welke stof is het waarschijnlijk gemaakt? (tabel 1)",
          o: ["Aluminium", "Glas", "Keukenzout", "IJzer"],
          a: "Aluminium",
          fout: {
            "Glas": "glas heeft 2,6 g/cm³. Dat ligt er dicht bij, maar 2,7 hoort precies bij aluminium.",
            "Keukenzout": "keukenzout heeft 2,2 g/cm³.",
            "IJzer": "ijzer heeft 7,9 g/cm³, bijna drie keer zoveel."
          },
          w: "2,7 g/cm³ staat in tabel 1 bij aluminium.",
          meer: "Let op de dichte buren in de tabel: glas 2,6 en aluminium 2,7. Daarom moet je nauwkeurig meten en rekenen." },

        { t: "velden", q: "Een blokje van 2,0 × 2,0 × 2,0 cm heeft een massa van 21,6 g. Bereken het volume en daarna de dichtheid.",
          velden: [ { label: "volume (cm³)", a: "8" }, { label: "dichtheid (g/cm³)", a: "2,7" } ],
          w: "Eerst het volume, dan pas delen.",
          meer: "volume = 2,0 × 2,0 × 2,0 = 8 cm³. dichtheid = 21,6 / 8 = 2,7 g/cm³, dus aluminium." }
      ]
    }
  ]
},

/* ================================================================ 2.4 — B */
{
  id: "drijven", emoji: "🛟", titel: "2.4 Drijven, zinken of zweven",
  kort: "Vergelijk de dichtheid met 1,0 — meer hoef je niet te weten.",
  niveaus: [
    {
      n: 1, naam: "Brons",
      uitleg: [
        "Of iets drijft of zinkt hangt <b>niet</b> af van hoe zwaar het is. Het hangt af van de <b>dichtheid</b>, vergeleken met die van <b>water: 1,0 g/cm³</b>.",
        "<b>Kleiner dan 1,0</b> → het <b>drijft</b>.<br><b>Groter dan 1,0</b> → het <b>zinkt</b>.<br><b>Precies 1,0</b> → het <b>zweeft</b> in het water.",
        "Meer dan twee getallen vergelijken is het niet. Zoek de dichtheid op of reken hem uit, en leg hem naast 1,0.",
        "Let op de klassieke denkfout: <b>'zwaar dus het zinkt'</b>. Een olietanker weegt honderdduizenden kilo's en drijft. Een muntje van 5 gram zinkt meteen."
      ],
      regel: "Vergelijk met 1,0: kleiner drijft, groter zinkt, gelijk zweeft.",
      voorbeelden: [
        { en: "vurenhout 0,58 g/cm³", let: "0,58 < 1,0 → <b>drijft</b>." },
        { en: "goud 19,3 g/cm³", let: "19,3 > 1,0 → <b>zinkt</b>." }
      ],
      vragen: [
        { t: "mc", q: "Wanneer drijft een voorwerp op water?",
          o: ["Als de dichtheid kleiner is dan 1,0 g/cm³", "Als het voorwerp licht is",
              "Als het voorwerp klein is", "Als het voorwerp hol is"],
          a: "Als de dichtheid kleiner is dan 1,0 g/cm³",
          fout: {
            "Als het voorwerp licht is": "dat lijkt logisch maar klopt niet. Een olietanker van 100 000 000 kg drijft en een muntje van 5 g zinkt. Het gaat om dichtheid, niet om massa.",
            "Als het voorwerp klein is": "een klein loden kogeltje zinkt en een grote boomstam drijft. Grootte bepaalt het niet.",
            "Als het voorwerp hol is": "hol zijn helpt, want lucht heeft een heel kleine dichtheid. Maar het gaat nog steeds om de dichtheid van het geheel."
          },
          w: "Dichtheid kleiner dan 1,0 → drijven.",
          meer: "Vergelijk met de druif en de appel: de kleine druif zinkt, de veel grotere appel drijft. Alleen de dichtheid telt." },

        { t: "mc", q: "Een blokje vurenhout heeft een dichtheid van 0,58 g/cm³. Wat gebeurt er in water?",
          o: ["Het drijft", "Het zinkt", "Het zweeft", "Dat hangt af van de grootte"],
          a: "Het drijft",
          fout: {
            "Het zinkt": "0,58 is kleiner dan 1,0, dus het drijft juist.",
            "Het zweeft": "zweven gebeurt alleen bij precies 1,0.",
            "Dat hangt af van de grootte": "juist niet. Een groot blok hout drijft net zo goed als een klein blokje, want de dichtheid is hetzelfde."
          },
          w: "0,58 < 1,0, dus drijven.",
          meer: "Precies zoals hout op het water blijft liggen. En een hele boomstam doet dat ook." },

        { t: "mc", q: "Een gouden ring heeft een dichtheid van 19,3 g/cm³. Wat gebeurt er in water?",
          o: ["Hij zinkt", "Hij drijft", "Hij zweeft", "Hij lost op"],
          a: "Hij zinkt",
          fout: {
            "Hij drijft": "19,3 is veel groter dan 1,0, dus hij zinkt.",
            "Hij zweeft": "zweven gebeurt alleen bij precies 1,0 g/cm³.",
            "Hij lost op": "goud lost niet op in water. En oplossen is een heel ander verschijnsel."
          },
          w: "19,3 > 1,0, dus zinken.",
          meer: "Goud heeft de grootste dichtheid in tabel 1. Een klein gouden ringetje voelt daarom verrassend zwaar." },

        { t: "mc", q: "Wanneer <b>zweeft</b> een voorwerp in water?",
          o: ["Als de dichtheid precies 1,0 g/cm³ is", "Als het voorwerp heel licht is",
              "Als het voorwerp halfvol is", "Dat kan niet"],
          a: "Als de dichtheid precies 1,0 g/cm³ is",
          fout: {
            "Als het voorwerp heel licht is": "dan drijft het juist bovenop. Zweven is blijven hangen midden in het water.",
            "Als het voorwerp halfvol is": "dat kán toevallig een dichtheid van 1,0 opleveren, maar het is geen regel.",
            "Dat kan niet": "het kan wel, maar het komt zelden precies uit. Daarom staat er 'heel soms' in het boek."
          },
          w: "Precies gelijk aan water: 1,0 g/cm³.",
          meer: "Zweven is het grensgeval: niet omhoog, niet omlaag, precies blijven hangen waar je het loslaat." },

        { t: "gap", q: "De dichtheid van water is ___ g/cm³ (vul het getal in, met komma).",
          a: "1,0|1",
          w: "Water is precies 1,0 g/cm³.",
          meer: "Dit getal is je vaste ijkpunt bij elke drijf-of-zink-vraag." }
      ]
    },
    {
      n: 2, naam: "Zilver",
      uitleg: [
        "Nu met de <b>tabel</b> erbij. Zoek de dichtheid op en vergelijk met 1,0.",
        "<b>Drijven</b> (kleiner dan 1,0): benzine 0,72 · terpentine 0,84 · alcohol 0,80 · vurenhout 0,58 · ijs 0,92",
        "<b>Zinken</b> (groter dan 1,0): perspex 1,2 · suiker 1,6 · keukenzout 2,2 · glas 2,6 · aluminium 2,7 · zink 7,2 · staal 7,8 · ijzer 7,9 · messing 8,5 · koper 8,96 · zilver 10,5 · lood 11,3 · kwik 13,5 · goud 19,3",
        "<b>IJs is de leukste:</b> 0,92 g/cm³, net iets minder dan water. Daarom drijft ijs, en daarom steekt er maar een klein stukje van een ijsberg boven water uit."
      ],
      regel: "Zoek de dichtheid op in tabel 1 en leg hem naast 1,0.",
      voorbeelden: [
        { en: "ijs 0,92 g/cm³", let: "Net kleiner dan water → <b>drijft</b>, met bijna alles onder water." },
        { en: "perspex 1,2 g/cm³", let: "Net groter dan water → <b>zinkt</b>." }
      ],
      vragen: [
        { t: "mc", q: "IJs heeft een dichtheid van 0,92 g/cm³. Wat doet ijs in water?",
          o: ["Het drijft, met bijna alles onder water", "Het zinkt", "Het zweeft", "Het lost meteen op"],
          a: "Het drijft, met bijna alles onder water",
          fout: {
            "Het zinkt": "0,92 is kleiner dan 1,0, dus ijs drijft. Dat zie je aan ijsklontjes in je limonade.",
            "Het zweeft": "zweven is alleen bij precies 1,0. 0,92 is net even minder.",
            "Het lost meteen op": "ijs lost niet op, het smelt. En dat gaat langzaam."
          },
          w: "0,92 < 1,0, dus drijven, maar op het randje.",
          meer: "Omdat 0,92 zó dicht bij 1,0 ligt, steekt er maar een klein deel boven water uit. Vandaar het gezegde over het topje van de ijsberg." },

        { t: "mc", q: "Welke stof uit tabel 1 <b>zinkt</b> in water?",
          o: ["Suiker (1,6 g/cm³)", "Benzine (0,72 g/cm³)", "Alcohol (0,80 g/cm³)", "Vurenhout (0,58 g/cm³)"],
          a: "Suiker (1,6 g/cm³)",
          fout: {
            "Benzine (0,72 g/cm³)": "0,72 is kleiner dan 1,0, dus benzine drijft. Daarom zie je op een natte weg olievlekken bovenop het water.",
            "Alcohol (0,80 g/cm³)": "0,80 is kleiner dan 1,0, dus alcohol drijft.",
            "Vurenhout (0,58 g/cm³)": "0,58 is de kleinste van het rijtje, dus dat drijft het beste."
          },
          w: "1,6 is groter dan 1,0, dus zinken.",
          meer: "Vergelijk elk getal met 1,0. Alles boven 1,0 zakt naar beneden, alles eronder komt bovendrijven." },

        { t: "mc", q: "Een advertentie zegt: 'Voor deze tent is gebruikgemaakt van materialen die sterk en licht zijn.' Wat kun je zeggen over de dichtheid van die 'lichte materialen'?",
          o: ["Die is klein", "Die is groot", "Die is precies 1,0", "Daar kun je niets over zeggen"],
          a: "Die is klein",
          fout: {
            "Die is groot": "een grote dichtheid betekent juist veel massa per cm³, dus zwaar.",
            "Die is precies 1,0": "1,0 is de dichtheid van water, dat heeft er niets mee te maken.",
            "Daar kun je niets over zeggen": "juist wel: 'licht' bij hetzelfde volume betekent precies 'kleine dichtheid'."
          },
          w: "Licht bij hetzelfde volume = kleine dichtheid.",
          meer: "Dat is precies waarom 'licht' in de natuurkunde alleen iets betekent als je erbij zegt: bij welk volume?" },

        { t: "mc", q: "Waarom worden waterleidingen tegenwoordig van koper gemaakt in plaats van lood? Noem een voordeel dat met dichtheid te maken heeft.",
          o: ["Koper heeft een kleinere dichtheid (8,96) dan lood (11,3), dus de leidingen zijn lichter",
              "Koper heeft een grotere dichtheid, dus de leidingen zijn steviger",
              "Koper drijft en lood zinkt",
              "Koper heeft precies dezelfde dichtheid als water"],
          a: "Koper heeft een kleinere dichtheid (8,96) dan lood (11,3), dus de leidingen zijn lichter",
          fout: {
            "Koper heeft een grotere dichtheid, dus de leidingen zijn steviger": "koper heeft juist een kleinere dichtheid. En dichtheid zegt niets over stevigheid.",
            "Koper drijft en lood zinkt": "allebei zinken ze: 8,96 en 11,3 zijn allebei groter dan 1,0.",
            "Koper heeft precies dezelfde dichtheid als water": "koper is bijna negen keer zo dicht als water."
          },
          w: "8,96 < 11,3, dus koperen leidingen zijn lichter bij hetzelfde volume.",
          meer: "De belangrijkste reden is gezondheid (lood is giftig), maar lichter zijn is een echt tweede voordeel: makkelijker te vervoeren en op te hangen." },

        { t: "sleep", opgave: "Drijft of zinkt het in water? (vergelijk met 1,0)",
          chips: [ {t:"vurenhout 0,58", bak:"drijft"}, {t:"perspex 1,2", bak:"zinkt"},
                   {t:"ijs 0,92", bak:"drijft"}, {t:"glas 2,6", bak:"zinkt"},
                   {t:"benzine 0,72", bak:"drijft"}, {t:"kwik 13,5", bak:"zinkt"} ],
          bakjes: [ {id:"drijft", label:"Drijft", som:"kleiner dan 1,0"},
                    {id:"zinkt", label:"Zinkt", som:"groter dan 1,0"} ],
          w: "Eén vergelijking per stof: is het getal kleiner of groter dan 1,0?",
          meer: "Let op de randgevallen: ijs met 0,92 drijft nét, perspex met 1,2 zinkt nét." }
      ]
    },
    {
      n: 3, naam: "Goud",
      uitleg: [
        "Op Goud reken je de dichtheid <b>zelf uit</b> en beslis je daarna pas.",
        "Voorbeeld: een vloeistof van 45 g in 50 cm³. dichtheid = 45 / 50 = 0,90 g/cm³. Kleiner dan 1,0, dus die vloeistof drijft op water.",
        "<b>Dezelfde regel werkt bij gassen</b>, alleen vergelijk je dan met <b>lucht: 0,001293 g/cm³</b>. Helium (0,000178) is kleiner, dus een heliumballon stijgt op. Koolstofdioxide (0,00198) is groter, dus die ballon zakt naar de grond.",
        "En een weerballon <b>stopt met stijgen</b> als de lucht om hem heen net zo'n kleine dichtheid heeft gekregen als de ballon zelf. Dan zweeft hij. Hoe hoger je komt, hoe ijler de lucht."
      ],
      regel: "Reken de dichtheid uit, vergelijk met 1,0 (water) of met 0,001293 (lucht).",
      voorbeelden: [
        { en: "45 g in 50 cm³", let: "45/50 = 0,90 → kleiner dan 1,0 → <b>drijft</b>." },
        { en: "helium 0,000178 vs lucht 0,001293", let: "Kleiner → de ballon <b>stijgt</b>." }
      ],
      vragen: [
        { t: "stap", opgave: "In een maatcilinder zit 50 cm³ van een vloeistof met een massa van 45 g. Bereken de dichtheid en bepaal of de vloeistof op water drijft.",
          stappen: [
            { prompt: "De dichtheid in g/cm³", a: "0,9",
              hints: ["dichtheid = massa / volume", "45 : 50", "= 0,90"] }
          ],
          w: "45 / 50 = 0,90 g/cm³, kleiner dan 1,0, dus het drijft.",
          meer: "0,90 is precies de dichtheid van slaolie. Daarom zie je olie altijd bovenop het water drijven." },

        { t: "mc", q: "Aileen vult twee ballonnen: één met helium (0,000178 g/cm³) en één met koolstofdioxide (0,00198 g/cm³). Lucht heeft 0,001293 g/cm³. Wat gebeurt er?",
          o: ["De heliumballon stijgt, de koolstofdioxideballon zakt",
              "Allebei stijgen ze", "Allebei zakken ze",
              "De koolstofdioxideballon stijgt, de heliumballon zakt"],
          a: "De heliumballon stijgt, de koolstofdioxideballon zakt",
          fout: {
            "Allebei stijgen ze": "koolstofdioxide (0,00198) heeft een gróttere dichtheid dan lucht (0,001293), dus die zakt.",
            "Allebei zakken ze": "helium (0,000178) heeft een veel kleinere dichtheid dan lucht, dus die stijgt juist.",
            "De koolstofdioxideballon stijgt, de heliumballon zakt": "precies omgekeerd. Vergelijk elk getal met 0,001293."
          },
          w: "Kleiner dan lucht → stijgen. Groter dan lucht → zakken.",
          meer: "Dezelfde regel als bij water, met een ander ijkpunt: een stof met een kleinere dichtheid dan wat eromheen zit, gaat drijven." },

        { t: "mc", q: "Hoe hoger je komt, hoe kleiner de dichtheid van de lucht. Waarom stijgt een weerballon op een bepaalde hoogte niet meer?",
          o: ["Omdat de dichtheid van de lucht dan gelijk is aan die van de ballon: hij gaat zweven",
              "Omdat de ballon dan leeg is",
              "Omdat het daar te koud is",
              "Omdat de ballon dan knapt"],
          a: "Omdat de dichtheid van de lucht dan gelijk is aan die van de ballon: hij gaat zweven",
          fout: {
            "Omdat de ballon dan leeg is": "de ballon blijft vol helium, anders zou hij meteen vallen.",
            "Omdat het daar te koud is": "het is er inderdaad koud, maar dat is niet de reden dat hij stopt met stijgen.",
            "Omdat de ballon dan knapt": "een weerballon knapt uiteindelijk wel, maar dat is een ander verhaal. Hier gaat het om het punt waarop hij blijft hangen."
          },
          w: "Gelijke dichtheid = zweven, precies als bij water.",
          meer: "Zweven is altijd hetzelfde grensgeval: de dichtheid van het voorwerp is precies gelijk aan die van de stof eromheen." },

        { t: "velden", q: "Een blokje heeft een volume van 20 cm³ en een massa van 25 g. Bereken de dichtheid en geef aan of het drijft (typ 1 voor drijven, 2 voor zinken).",
          velden: [ { label: "dichtheid (g/cm³)", a: "1,25" }, { label: "1 = drijft, 2 = zinkt", a: "2" } ],
          w: "25 / 20 = 1,25 g/cm³, groter dan 1,0, dus zinken.",
          meer: "Ook al is 25 gram niet zwaar, het blokje zinkt: het gaat om de dichtheid, niet om de massa." },

        { t: "mc", q: "Een laagjescocktail bestaat uit drankjes met verschillende dichtheden. Welk drankje moet onderin?",
          o: ["Het drankje met de grootste dichtheid",
              "Het drankje met de kleinste dichtheid",
              "Het drankje met de mooiste kleur",
              "Dat maakt niet uit"],
          a: "Het drankje met de grootste dichtheid",
          fout: {
            "Het drankje met de kleinste dichtheid": "dat drijft juist bovenop, net als olie op water.",
            "Het drankje met de mooiste kleur": "kleur heeft er niets mee te maken. De volgorde wordt volledig door de dichtheid bepaald.",
            "Dat maakt niet uit": "het maakt alles uit. Giet je ze in de verkeerde volgorde, dan wisselen de lagen alsnog van plek."
          },
          w: "De grootste dichtheid zakt naar beneden.",
          meer: "De drankjes bestaan vooral uit water en suiker. Meer suiker betekent een grotere dichtheid, dus het zoetste drankje ligt onderop en het waterigste bovenop." }
      ]
    }
  ]
}

];

/* =========================================================================
   OVERZICHT — de meetkaart. Één beslisboom die door de hele stof terugkomt:
   welk woord is wat, welke eenheid hoort bij welke grootheid, en welke kant
   op reken je om.
   ========================================================================= */
window.OVERZICHT = {
  titel: "De meetkaart",
  tegelTekst: "Grootheid, eenheid of meetwaarde? En welke kant op reken je om? Zie het in één overzicht",
  intro: "Je kent de losse woorden wel. Het lastige is <b>kiezen</b>: is dit nou de grootheid, de eenheid of de meetwaarde? " +
         "En bij omrekenen: keer of gedeeld? Deze kaart geeft je drie vaste tests. " +
         "Gebruik hem als je twijfelt, ook tijdens het maken van je huiswerk.",
  kaart: [
    { id: "woord", label: "WAT VOOR WOORD IS DIT?", kop: true, kleur: "brand", kinderen: [
      { id: "meetwaarde", label: "het kale GETAL", regel: "meetwaarde" },
      { id: "eenheid",    label: "past ACHTER een getal", regel: "eenheid" },
      { id: "grootheid",  label: "wat je MEET", regel: "grootheid" }
    ]},
    { id: "setje", label: "WELK SETJE HOORT ERBIJ?", kop: true, kleur: "plum", kinderen: [
      { id: "s-lengte", label: "lengte", regel: "meter · liniaal" },
      { id: "s-massa",  label: "massa", regel: "kilogram · weegschaal" },
      { id: "s-volume", label: "volume", regel: "liter / cm³ · maatcilinder" },
      { id: "s-overig", label: "tijd · temperatuur · dichtheid", regel: "seconde · °C · g/cm³" }
    ]},
    { id: "om", label: "OMREKENEN: WELKE KANT OP?", kop: true, kleur: "brand", kinderen: [
      { id: "groot-klein", label: "GROOT → KLEIN", regel: "keer 1000, getal groter" },
      { id: "klein-groot", label: "KLEIN → GROOT", regel: "gedeeld door 1000, getal kleiner" },
      { id: "gratis",      label: "1 mL = 1 cm³", regel: "niets doen" }
    ]}
  ],
  stappen: [
    { kop: "De test: past het achter een getal?", pad: ["woord"],
      uitleg: [
        "In elke meting zitten drie dingen. In <b>52 kg</b> zijn dat: <b>52</b>, <b>kg</b> en <b>massa</b>.",
        "De test die altijd werkt: <b>je kunt \"25 meter\" zeggen, maar niet \"25 lengte\".</b>",
        "Wat achter een getal past is de <b>eenheid</b>. Wat je meet is de <b>grootheid</b>. Het kale getal is de <b>meetwaarde</b>."
      ],
      vb: [{ en: "Het zwembad is 25 meter lang", let: "25 = meetwaarde · meter = eenheid · lengte = grootheid" }] },

    { kop: "Meetwaarde: het kale getal", pad: ["woord", "meetwaarde"],
      uitleg: [
        "De <b>meetwaarde</b> is het getal dat je bij de meting bepaalt, zonder maat erachter.",
        "In '600 gram' is dat de <b>600</b>. In '8,23 meter' is dat <b>8,23</b>.",
        "Een meetwaarde zónder eenheid is niet af. Denk aan het verkeersbord met alleen <b>60</b> erop: 60 wat?"
      ],
      vb: [{ en: "De massa van de bloemkool is 600 gram", let: "600 is de meetwaarde" }],
      check: { q: "Wat is de meetwaarde in 'De breedte van het tennisveld is 8,23 meter'?",
        o: ["8,23", "meter", "breedte"], a: "8,23",
        goed: "✅ Klopt, de meetwaarde is altijd het kale getal.",
        fout: { "meter": "dat is de eenheid: het past achter het getal.",
                "breedte": "dat is de grootheid: dat is wat er gemeten is." } } },

    { kop: "Eenheid: de maat achter het getal", pad: ["woord", "eenheid"],
      uitleg: [
        "De <b>eenheid</b> is de maat waarin je iets uitdrukt. Die staat <b>altijd achter</b> het getal.",
        "Voorbeelden: meter, centimeter, kilogram, gram, liter, milliliter, cm³, seconde, minuut, graden Celsius, g/cm³.",
        "Eén grootheid kan meerdere eenheden hebben. Bij tijd: seconden, minuten, uren, dagen, weken. Allemaal tijd."
      ],
      vb: [{ en: "45 minuten", let: "minuut is de eenheid, tijd is de grootheid" }],
      check: { q: "Welk woord is een eenheid?", o: ["seconde", "tijd", "temperatuur"], a: "seconde",
        goed: "✅ Ja, '25 seconde' kan en '25 tijd' niet.",
        fout: { "tijd": "tijd is de grootheid. Je kunt niet '25 tijd' zeggen.",
                "temperatuur": "ook een grootheid. De eenheid daarvan is graden Celsius." } } },

    { kop: "Grootheid: wat je meet", pad: ["woord", "grootheid"],
      uitleg: [
        "Een <b>grootheid</b> is een eigenschap die je kunt <b>meten</b>.",
        "De grootheden uit dit hoofdstuk: <b>lengte · massa · volume · tijd · temperatuur · dichtheid</b>.",
        "Iedere grootheid heeft zijn eigen eenheden én zijn eigen meetinstrument. Leer ze als setjes: dat is de volgende tak van deze kaart."
      ],
      vb: [{ en: "De massa van de bloemkool", let: "massa is de grootheid, gram de eenheid" }],
      check: { q: "Welk woord is een grootheid?", o: ["volume", "liter", "milliliter"], a: "volume",
        goed: "✅ Precies, volume is wat je meet; liter en mL zijn de maten.",
        fout: { "liter": "liter is een eenheid: '2 liter' kan.",
                "milliliter": "ook een eenheid, een duizendste liter." } } },

    { kop: "De setjes: grootheid, eenheid, instrument", pad: ["setje"],
      uitleg: [
        "Deze horen bij elkaar. Leer ze als drietallen, dan heb je er op de toets alle drie tegelijk bij:",
        "<b>lengte</b> → meter (m), centimeter (cm) → <b>liniaal / meetlint</b><br><b>massa</b> → kilogram (kg), gram (g) → <b>weegschaal</b><br><b>volume</b> → liter (L), mL, cm³, dm³ → <b>maatcilinder</b>",
        "<b>tijd</b> → seconde (s), minuut, uur → <b>stopwatch</b><br><b>temperatuur</b> → graden Celsius (°C) → <b>thermometer</b><br><b>dichtheid</b> → g/cm³ → <b>uitrekenen</b> (massa / volume)"
      ],
      vb: [{ en: "massa → kilogram → weegschaal", let: "Eén setje, drie antwoorden" }],
      check: { q: "Waarmee bepaal je het volume van een vloeistof?",
        o: ["Maatcilinder", "Weegschaal", "Thermometer"], a: "Maatcilinder",
        goed: "✅ Ja, en het getal lees je af in mL, wat gelijk is aan cm³.",
        fout: { "Weegschaal": "die geeft de massa, niet het volume.",
                "Thermometer": "die geeft de temperatuur." } } },

    { kop: "Dichtheid reken je uit, je meet hem niet", pad: ["setje", "s-overig"],
      uitleg: [
        "Dichtheid is de enige grootheid van dit hoofdstuk zonder eigen meetinstrument.",
        "Je meet de <b>massa</b> (weegschaal) en het <b>volume</b> (maatcilinder of l × b × h), en dan reken je uit:",
        "<b>dichtheid = massa / volume</b>, in <b>g/cm³</b>. Dat betekent letterlijk: hoeveel gram zit er in één blokje van 1 cm³?"
      ],
      vb: [{ en: "34 g in 4 cm³ → 8,5 g/cm³", let: "In elk blokje van 1 cm³ zit 8,5 gram" }],
      check: { q: "Wat betekent een dichtheid van 2,7 g/cm³?",
        o: ["Elk blokje van 1 cm³ weegt 2,7 gram", "Het hele voorwerp weegt 2,7 gram", "Het volume is 2,7 cm³"],
        a: "Elk blokje van 1 cm³ weegt 2,7 gram",
        goed: "✅ Precies, 'per cm³' betekent 'in elk blokje van 1 cm³'.",
        fout: { "Het hele voorwerp weegt 2,7 gram": "dat zou de massa zijn. De dichtheid zegt niets over hoe groot het voorwerp is.",
                "Het volume is 2,7 cm³": "dat zou het volume zijn. De dichtheid combineert massa én volume." } } },

    { kop: "Omrekenen: kijk welke eenheid groter is", pad: ["om"],
      uitleg: [
        "Het getal is altijd <b>1000</b>. De vraag is alleen: <b>keer of gedeeld?</b>",
        "Kijk welke van de twee eenheden de <b>grootste</b> is. Een kilogram is groter dan een gram. Een liter is groter dan een milliliter.",
        "Doe daarna altijd de <b>uitkomstcheck</b>: ging het getal de goede kant op?"
      ],
      vb: [{ en: "kg is groter dan g", let: "Dus van kg naar g wordt het getal groter" }] },

    { kop: "Groot → klein: keer 1000", pad: ["om", "groot-klein"],
      uitleg: [
        "Ga je naar een <b>kleinere</b> eenheid, dan heb je er <b>meer</b> nodig. Dus: <b>keer 1000</b>, het getal wordt <b>groter</b>.",
        "De komma schuift <b>drie plaatsen naar rechts</b>: 0,53 → 5,3 → 53 → <b>530</b>.",
        "Voorbeelden: 5 kg = 5000 g · 0,53 kg = 530 g · 4 L = 4000 mL · 21 dm³ = 21 000 cm³."
      ],
      vb: [{ en: "7,11 kg = 7110 g", let: "Komma drie naar rechts, getal groter ✔" }],
      check: { q: "0,6 L = … mL?", o: ["600", "0,0006", "60"], a: "600",
        goed: "✅ Klopt: ×1000, komma drie naar rechts.",
        fout: { "0,0006": "je hebt gedeeld in plaats van vermenigvuldigd. Naar mL (kleiner) hoort een gróter getal.",
                "60": "je bent maar twee plaatsen opgeschoven. Duizend heeft drie nullen." } } },

    { kop: "Klein → groot: gedeeld door 1000", pad: ["om", "klein-groot"],
      uitleg: [
        "Ga je naar een <b>grotere</b> eenheid, dan heb je er <b>minder</b> nodig. Dus: <b>gedeeld door 1000</b>, het getal wordt <b>kleiner</b>.",
        "De komma schuift <b>drie plaatsen naar links</b>: 2013 → 201,3 → 20,13 → <b>2,013</b>.",
        "Voorbeelden: 2013 g = 2,013 kg · 71 g = 0,071 kg · 540 mL = 0,54 L · 8645 mL = 8,645 L."
      ],
      vb: [{ en: "71 g = 0,071 kg", let: "Komma drie naar links, getal kleiner ✔" }],
      check: { q: "67 mL = … L?", o: ["0,067", "67 000", "6,7"], a: "0,067",
        goed: "✅ Ja: :1000, komma drie naar links.",
        fout: { "67 000": "je hebt vermenigvuldigd. 67 mL is minder dan een glas, 67 000 L is een zwembad.",
                "6,7": "je bent maar één plaats opgeschoven. Het zijn er drie." } } },

    { kop: "De gratis omrekening: 1 mL = 1 cm³", pad: ["om", "gratis"],
      uitleg: [
        "Een <b>milliliter is precies hetzelfde als een kubieke centimeter</b>. Zelfde inhoud, ander woord.",
        "Dat is puur winst bij dichtheid: de maatcilinder leest <b>mL</b> af en de dichtheid gaat in <b>g/cm³</b>. Je mag het getal <b>direct</b> overnemen.",
        "Onthoud het rijtje: <b>1 L = 1 dm³ = 1000 mL = 1000 cm³</b>. En 'liter' gebruik je alleen voor vloeistoffen."
      ],
      vb: [{ en: "Maatcilinder leest 45 mL", let: "Dat is 45 cm³, zonder rekenwerk" }],
      check: { q: "De maatcilinder leest 60 mL. Hoeveel cm³ is dat?",
        o: ["60 cm³", "0,06 cm³", "60 000 cm³"], a: "60 cm³",
        goed: "✅ Precies, mL en cm³ zijn gelijk, dus je hoeft niets te doen.",
        fout: { "0,06 cm³": "je hebt naar liter omgerekend. Van mL naar cm³ hoef je niets te doen.",
                "60 000 cm³": "je hebt keer 1000 gedaan. Dat hoort bij L naar mL." } } },

    { kop: "En dan: drijven of zinken?", pad: ["setje", "s-volume"],
      uitleg: [
        "Als je eenmaal een dichtheid hebt, is de laatste stap één vergelijking.",
        "Leg het getal naast <b>1,0 g/cm³</b>, de dichtheid van water. <b>Kleiner → drijft. Groter → zinkt. Precies gelijk → zweeft.</b>",
        "Bij gassen gebruik je hetzelfde trucje, maar dan naast de dichtheid van <b>lucht: 0,001293 g/cm³</b>."
      ],
      vb: [{ en: "0,90 g/cm³ naast 1,0", let: "Kleiner, dus het drijft" }],
      check: { q: "Een stof heeft een dichtheid van 1,2 g/cm³. Wat doet die in water?",
        o: ["Zinken", "Drijven", "Zweven"], a: "Zinken",
        goed: "✅ Ja, 1,2 is groter dan 1,0.",
        fout: { "Drijven": "drijven gebeurt bij een dichtheid kleiner dan 1,0. 1,2 is groter.",
                "Zweven": "zweven is alleen bij precies 1,0." } } }
  ]
};

/* =========================================================================
   MIXVRAGEN — interleaved discriminatie: welke categorie is dit ook alweer?
   Deze komen terug in de Hoofdstuktoets.
   ========================================================================= */
window.MIXVRAGEN = [
  { t: "mc", q: "Is <b>massa</b> een grootheid of een eenheid?",
    o: ["Een grootheid", "Een eenheid", "Een meetwaarde", "Een meetinstrument"],
    a: "Een grootheid",
    fout: {
      "Een eenheid": "de eenheid van massa is kilogram of gram. Massa zelf is wat je meet. Test: '52 massa' kan niet, '52 kilogram' wel.",
      "Een meetwaarde": "een meetwaarde is altijd een getal.",
      "Een meetinstrument": "het instrument is de weegschaal."
    },
    w: "Massa is wat je meet, dus een grootheid.", meer: "Setje: massa → kilogram → weegschaal." },

  { t: "mc", q: "Is <b>milliliter</b> een grootheid of een eenheid?",
    o: ["Een eenheid", "Een grootheid", "Een meetwaarde", "Een stofeigenschap"],
    a: "Een eenheid",
    fout: {
      "Een grootheid": "de grootheid is volume. Milliliter is de maat waarin je het uitdrukt.",
      "Een meetwaarde": "een meetwaarde is een getal, geen woord.",
      "Een stofeigenschap": "een stofeigenschap is iets waaraan je een stof herkent, zoals dichtheid."
    },
    w: "'250 milliliter' kan, dus het is een eenheid.", meer: "Grootheid volume, eenheden L, mL, cm³ en dm³." },

  { t: "mc", q: "Welke kant op reken je om van <b>gram naar kilogram</b>?",
    o: ["Gedeeld door 1000, het getal wordt kleiner", "Keer 1000, het getal wordt groter",
        "Keer 100", "Gedeeld door 100"],
    a: "Gedeeld door 1000, het getal wordt kleiner",
    fout: {
      "Keer 1000, het getal wordt groter": "dat is de andere kant op. Een kilogram is groter dan een gram, dus je hebt er minder nodig.",
      "Keer 100": "de stap tussen g en kg is 1000, en bovendien de andere kant op.",
      "Gedeeld door 100": "de richting klopt, het getal niet. Het is 1000."
    },
    w: "Klein naar groot = delen.", meer: "2013 g = 2,013 kg. Het getal werd kleiner, dat hoort zo." },

  { t: "mc", q: "Een stof heeft een dichtheid van 0,84 g/cm³. Drijft of zinkt die in water?",
    o: ["Drijven", "Zinken", "Zweven", "Dat hangt van de hoeveelheid af"],
    a: "Drijven",
    fout: {
      "Zinken": "0,84 is kleiner dan 1,0, dus het drijft.",
      "Zweven": "zweven is alleen bij precies 1,0.",
      "Dat hangt van de hoeveelheid af": "juist niet. Dichtheid is een stofeigenschap: een grote plas terpentine drijft net zo goed als een druppel."
    },
    w: "0,84 < 1,0, dus drijven.", meer: "0,84 is de dichtheid van terpentine." },

  { t: "mc", q: "Water dat verdampt: natuurkundig of scheikundig?",
    o: ["Natuurkundig, want het blijft water", "Scheikundig, want het verdwijnt",
        "Scheikundig, want er is warmte bij nodig", "Biologisch"],
    a: "Natuurkundig, want het blijft water",
    fout: {
      "Scheikundig, want het verdwijnt": "het verdwijnt niet, het wordt waterdamp. En waterdamp kan weer water worden.",
      "Scheikundig, want er is warmte bij nodig": "warmte bewijst niets. Smelten en verdampen hebben ook warmte nodig en zijn natuurkundig.",
      "Biologisch": "water leeft niet."
    },
    w: "Verandering van toestand = dezelfde stof = natuurkundig.", meer: "Water, ijs en waterdamp zijn dezelfde stof in drie toestanden." },

  { t: "mc", q: "'Ik denk dat de e-bike sneller is.' Is dit een onderzoeksvraag, hypothese of conclusie?",
    o: ["Een hypothese", "Een onderzoeksvraag", "Een conclusie", "Een meetwaarde"],
    a: "Een hypothese",
    fout: {
      "Een onderzoeksvraag": "er staat geen vraag, er staat een voorspelling.",
      "Een conclusie": "een conclusie schrijf je achteraf op als feit, zonder 'ik denk dat'.",
      "Een meetwaarde": "er staat geen getal in."
    },
    w: "'Ik denk dat' is de signaalzin van een hypothese.", meer: "Vraagteken → onderzoeksvraag. 'Ik denk' → hypothese. Kaal feit → conclusie." },

  { t: "mc", q: "Hoeveel cm³ is 250 mL?",
    o: ["250 cm³", "0,25 cm³", "250 000 cm³", "25 cm³"],
    a: "250 cm³",
    fout: {
      "0,25 cm³": "je hebt naar liter omgerekend. 250 mL = 0,25 L, maar de vraag is cm³.",
      "250 000 cm³": "je hebt keer 1000 gedaan. Dat hoeft niet: mL en cm³ zijn gelijk.",
      "25 cm³": "je bent één plaats opgeschoven zonder reden. Er verandert helemaal niets."
    },
    w: "1 mL = 1 cm³, dus het getal blijft staan.", meer: "Dat is de handigste omrekening van het hoofdstuk." },

  { t: "mc", q: "Welk zintuig mag je bij natuur- en scheikunde <b>nooit</b> gebruiken?",
    o: ["Proeven", "Horen", "Zien", "Voelen"],
    a: "Proeven",
    fout: {
      "Horen": "horen mag altijd.",
      "Zien": "zien mag altijd.",
      "Voelen": "voelen mag altijd."
    },
    w: "Proeven nooit; sommige stoffen zijn giftig.", meer: "Ruiken mag wel, maar alleen voorzichtig wapperen." },

  { t: "mc", q: "Een blok wordt in vier gelijke stukken gezaagd. Wat gebeurt er met de dichtheid van één stuk?",
    o: ["Die blijft precies hetzelfde", "Die wordt vier keer zo klein",
        "Die wordt vier keer zo groot", "Die wordt de helft"],
    a: "Die blijft precies hetzelfde",
    fout: {
      "Die wordt vier keer zo klein": "de massa wordt vier keer zo klein, maar het volume óók. 40 g in 5 cm³ is 8, en 10 g in 1,25 cm³ is ook 8.",
      "Die wordt vier keer zo groot": "er wordt niets groter. Beide getallen worden juist kleiner.",
      "Die wordt de helft": "ook niet. Hoe je het blok ook verdeelt, de dichtheid blijft gelijk."
    },
    w: "Dichtheid is een stofeigenschap: hoeveelheid maakt niet uit.", meer: "Massa en volume veranderen allebei even hard, dus de deling blijft gelijk." },

  { t: "mc", q: "Met welke formule bereken je het volume van een rechthoekig blokje?",
    o: ["lengte × breedte × hoogte", "massa / volume", "eindstand − beginstand", "lengte × breedte"],
    a: "lengte × breedte × hoogte",
    fout: {
      "massa / volume": "dat is de formule voor dichtheid.",
      "eindstand − beginstand": "dat is de onderdompelmethode, voor voorwerpen met een rare vorm.",
      "lengte × breedte": "dat is de oppervlakte van één vlak, niet de ruimte."
    },
    w: "Drie richtingen, drie lengtes keer elkaar.", meer: "cm × cm × cm geeft cm³, en dat is precies de eenheid van volume." },

  { t: "mc", q: "Op welke plek lees je een maatcilinder af?",
    o: ["Op ooghoogte, bij het vlakke deel van de vloeistofspiegel",
        "Bij de hoogste rand van de vloeistof", "Van bovenaf", "Onderaan de maatcilinder"],
    a: "Op ooghoogte, bij het vlakke deel van de vloeistofspiegel",
    fout: {
      "Bij de hoogste rand van de vloeistof": "die rand is opgekropen langs het glas en telt niet mee.",
      "Van bovenaf": "dan kijk je schuin langs de streepjes en lees je te laag af.",
      "Onderaan de maatcilinder": "daar staat de voet, niet de vloeistofspiegel."
    },
    w: "Ooghoogte, vlakke deel.", meer: "Schuin kijken heet parallax: van boven te laag, van onderen te hoog." },

  { t: "mc", q: "Wat kun je met een <b>indicator</b> aantonen?",
    o: ["Of een bepaalde stof aanwezig is", "Hoeveel gram er van een stof is",
        "Wat de dichtheid is", "Hoe warm een stof is"],
    a: "Of een bepaalde stof aanwezig is",
    fout: {
      "Hoeveel gram er van een stof is": "dat doe je met een weegschaal. Een indicator geeft een ja/nee-antwoord, geen getal.",
      "Wat de dichtheid is": "de dichtheid reken je uit met massa en volume.",
      "Hoe warm een stof is": "daarvoor gebruik je een thermometer."
    },
    w: "Een indicator toont aan óf een stof aanwezig is, met een kleurverandering.", meer: "Jodium is de indicator voor zetmeel: bruingeel wordt donkerblauw." },

  { t: "mc", q: "Welke grootheid hoort bij het meetinstrument <b>maatcilinder</b>?",
    o: ["Volume", "Massa", "Lengte", "Temperatuur"],
    a: "Volume",
    fout: {
      "Massa": "massa meet je met een weegschaal.",
      "Lengte": "lengte meet je met een liniaal of meetlint.",
      "Temperatuur": "temperatuur meet je met een thermometer."
    },
    w: "Maatcilinder → volume.", meer: "Setje: volume → liter, mL, cm³ → maatcilinder." },

  { t: "mc", q: "Een olietanker weegt 100 000 000 kg en drijft. Een muntje weegt 5 g en zinkt. Wat bewijst dit?",
    o: ["Dat drijven van de dichtheid afhangt, niet van de massa",
        "Dat grote voorwerpen altijd drijven",
        "Dat metaal altijd zinkt",
        "Dat de weegschaal kapot was"],
    a: "Dat drijven van de dichtheid afhangt, niet van de massa",
    fout: {
      "Dat grote voorwerpen altijd drijven": "een grote loden bal zinkt meteen. Grootte bepaalt het niet.",
      "Dat metaal altijd zinkt": "de tanker is óók van metaal en drijft, want er zit veel lucht in.",
      "Dat de weegschaal kapot was": "beide getallen kloppen prima. Ze laten juist zien dat massa niet de doorslag geeft."
    },
    w: "Alleen de dichtheid bepaalt drijven of zinken.", meer: "Dit is de belangrijkste denkfout van het hoofdstuk: 'zwaar dus het zinkt' klopt niet." },

  { t: "mc", q: "In welke stap van de wetenschappelijke methode zet je je metingen in een tabel?",
    o: ["Na het uitvoeren van het experiment, vóór de conclusie",
        "Vóór het opstellen van de onderzoeksvraag", "In de hypothese", "Dat hoeft niet"],
    a: "Na het uitvoeren van het experiment, vóór de conclusie",
    fout: {
      "Vóór het opstellen van de onderzoeksvraag": "vooraf heb je nog geen metingen.",
      "In de hypothese": "de hypothese is een voorspelling in woorden, geen tabel.",
      "Dat hoeft niet": "het hoort bij de vaste stappen. Zonder overzicht kan niemand je conclusie controleren."
    },
    w: "Stap 5: meetresultaten in een tabel of grafiek.", meer: "De volgorde: vraag → hypothese → experiment bedenken → uitvoeren → tabel → conclusie." }
];

/* =========================================================================
   BEGRIPPEN — omschrijving → begrip (flashcards en overhoren)
   ========================================================================= */
window.BEGRIPPEN = {
  "H1": {
    emoji: "🔬", titel: "Begrippen H1 — onderzoeken",
    items: [
      ["het opdoen van kennis en het toepassen van die kennis in het dagelijks leven", "wetenschap"],
      ["wetenschap die de natuur bestudeert", "natuurwetenschap"],
      ["schoolvak dat de levende natuur bestudeert", "biologie"],
      ["schoolvak dat tijdelijke veranderingen in de niet-levende natuur bestudeert", "natuurkunde"],
      ["schoolvak dat blijvende veranderingen in de niet-levende natuur bestudeert", "scheikunde"],
      ["foto's gemaakt met röntgenstraling, om breuken in botten op te sporen", "röntgenfoto's", ["rontgenfoto's", "röntgenfotos"]],
      ["het doen van onderzoek volgens een aantal vaste stappen", "wetenschappelijke methode"],
      ["wat je wilt ontdekken tijdens het onderzoek", "onderzoeksvraag"],
      ["voorlopig antwoord; de uitkomst die je vooraf voorspelt", "hypothese"],
      ["onderdeel van je lichaam waarmee je kunt waarnemen", "zintuig"],
      ["gereedschap om te meten", "meetinstrument"],
      ["getal dat bij de meting wordt bepaald", "meetwaarde"],
      ["maat waarin je iets uitdrukt", "eenheid"],
      ["eigenschap die je kunt meten", "grootheid"],
      ["stof waarmee je de aanwezigheid van een andere stof kunt aantonen", "indicator"],
      ["de indicator voor zetmeel; bruingeel, wordt donkerblauw", "jodium"]
    ]
  },
  "H2": {
    emoji: "⚖️", titel: "Begrippen H2 — massa, volume en dichtheid",
    items: [
      ["maat die aangeeft uit hoeveel stof een voorwerp bestaat", "massa"],
      ["maat voor de ruimte die een voorwerp of stof inneemt", "volume"],
      ["methode om het volume van een voorwerp met een onregelmatige vorm te bepalen", "onderdompelmethode"],
      ["de massa van 1 cm³ van een stof", "dichtheid"],
      ["een eigenschap waaraan je een stof kunt herkennen, zoals dichtheid", "stofeigenschap"],
      ["de stand van het water vóórdat het voorwerp erin gaat", "beginstand"],
      ["de stand van het water nadat het voorwerp erin is gezakt", "eindstand"],
      ["wat een voorwerp doet met een dichtheid kleiner dan 1,0 g/cm³", "drijven"],
      ["wat een voorwerp doet met een dichtheid groter dan 1,0 g/cm³", "zinken"],
      ["wat een voorwerp doet met een dichtheid precies gelijk aan die van water", "zweven"],
      ["oude massa-eenheid die per plaats verschilde, daarom afgeschaft", "pond"],
      ["het stelsel dat in 1820 in Nederland werd ingevoerd met vaste eenheden", "metrieke stelsel"]
    ]
  },
  "Meten": {
    emoji: "📏", titel: "Grootheden, eenheden en instrumenten",
    items: [
      ["het meetinstrument voor massa", "weegschaal"],
      ["het meetinstrument voor het volume van een vloeistof", "maatcilinder"],
      ["het meetinstrument voor temperatuur", "thermometer"],
      ["het meetinstrument voor lengte", "liniaal", ["meetlint", "rolmaat"]],
      ["het meetinstrument voor tijd", "stopwatch", ["klok"]],
      ["de eenheid van massa (afkorting)", "kg", ["kilogram"]],
      ["de eenheid van dichtheid (schrijf als g/cm3)", "g/cm3", ["g/cm³", "gram per kubieke centimeter"]],
      ["1 kilogram is hoeveel gram?", "1000"],
      ["1 liter is hoeveel milliliter?", "1000"],
      ["1 dm³ is hoeveel cm³?", "1000"],
      ["1 milliliter is hoeveel cm³?", "1"],
      ["de dichtheid van water in g/cm³", "1,0", ["1"]],
      ["de formule voor het volume van een rechthoekig voorwerp", "lengte x breedte x hoogte", ["lengte × breedte × hoogte", "l x b x h", "lxbxh"]],
      ["de formule voor dichtheid", "massa / volume", ["massa gedeeld door volume", "massa/volume"]],
      ["de formule voor de onderdompelmethode", "eindstand - beginstand", ["eindstand − beginstand", "eindstand min beginstand"]]
    ]
  }
};

window.OPSTAP = {};
window.PROEFTOETS = [];

window.AANMOEDIGING = {
  goed: ["Top!", "Goed bezig, Storm!", "Yes, gelukt!", "Knap hoor!", "Precies goed!", "Scherp gezien!", "Lekker!"],
  bijna: ["Bijna!", "Net niet, geeft niks.", "Dat hoort erbij, probeer 't nog eens.", "Bijna goed!", "Je zit er dichtbij."],
  levelup: ["Level omhoog! 🚀", "Je gaat naar een hoger niveau!", "Knap, door naar het volgende! ✨"],
  leveldown: ["We pakken het even rustiger aan.", "Even een stapje terug, dan zit het straks vast.", "Geen probleem, we bouwen het opnieuw op."],
  stapelklaar: ["Stapel klaar! 🎉", "Lekker gedaan, Storm! 🌟", "Helemaal af! 💪"]
};

/* =========================================================================
   GENERATORS — parametrische vraag-sjablonen per onderwerp x niveau.
   Elke functie levert een VERS vraagobject met willekeurige getallen binnen
   een vaste moeilijkheidsband, zodat elke ronde anders is.

   Bijzonder voor natuurkunde: de afleesvragen tekenen een ECHTE schaal als
   inline SVG in de vraagtekst (de engine rendert q.q als HTML). Zo oefent
   Storm de handeling die de toets vraagt, met elke ronde een andere stand
   én een andere schaalverdeling.

   Reken-types (bouw/stap/velden) worden numeriek nagekeken door math.js
   equiv(). Antwoorden zijn dus altijd PUUR NUMERIEK, met NL-komma; de
   eenheid staat in de vraag of in het veld-label. (De engine laat een
   meegetypte eenheid sinds 2026-09 toe, zie tools/oefen-engine/CLAUDE.md.)

   Elk object heeft w + meer, elke mc heeft per-optie fout.
   Verifieer met: node tools/checks/genverify.mjs <deze map>
                  node tools/checks/nask-verify.mjs <deze map>
   ========================================================================= */
(function () {
  const ri = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rond = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

  /* getal → Nederlandse notatie (komma als decimaalteken, geen drijfkomma-ruis) */
  function nl(x) {
    let s = String(rond(x, 6));
    if (s.indexOf("e") >= 0) s = x.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
    return s.replace(".", ",");
  }

  /* dichtheden uit tabel 1 van het boek */
  const STOFFEN = [
    ["alcohol", 0.80], ["aluminium", 2.7], ["benzine", 0.72], ["glas", 2.6],
    ["goud", 19.3], ["ijs", 0.92], ["ijzer", 7.9], ["keukenzout", 2.2],
    ["koper", 8.96], ["kwik", 13.5], ["lood", 11.3], ["messing", 8.5],
    ["perspex", 1.2], ["staal", 7.8], ["suiker", 1.6], ["terpentine", 0.84],
    ["vurenhout", 0.58], ["water", 1.0], ["zilver", 10.5], ["zink", 7.2]
  ];
  const DRIJVERS = STOFFEN.filter(s => s[1] < 1.0);
  const ZINKERS  = STOFFEN.filter(s => s[1] > 1.0);

  /* ---------------------------------------------------------------------
     SVG-meetinstrumenten. Alles in één <svg> zodat het in q.q past.
     --------------------------------------------------------------------- */

  /* maatcilinder: max = bovenkant schaal, major = stap tussen genummerde
     streepjes, perStreep = waarde van één klein streepje, waarde = stand. */
  function svgCilinder(max, major, perStreep, waarde, opts) {
    opts = opts || {};
    const n = Math.round(max / perStreep);
    /* De schaal moet TELBAAR zijn: dat is de hele vaardigheid. Daarom groeit de
       buis mee met het aantal streepjes, zodat er altijd ~7 px tussen twee
       streepjes zit, ook bij een fijne verdeling. */
    const span = Math.min(430, Math.max(190, n * 7));
    const W = 146, xL = 26, xR = 90, yTop = 42, yBot = yTop + span, H = yBot + 44;
    const y = v => yBot - (v / max) * (yBot - yTop);
    let ticks = "";
    for (let i = 0; i <= n; i++) {
      const v = rond(i * perStreep, 6), yy = y(v);
      const maj = Math.abs(v / major - Math.round(v / major)) < 1e-9;
      ticks += '<line x1="' + (xR - (maj ? 22 : 11)) + '" y1="' + yy.toFixed(1) +
               '" x2="' + xR + '" y2="' + yy.toFixed(1) +
               '" stroke="#64748b" stroke-width="' + (maj ? 1.6 : 0.9) + '"/>';
      /* de getallen staan BUITEN de buis: binnen de buis werden ze onleesbaar
         zodra het water er overheen liep */
      if (maj && v > 0) {
        ticks += '<text x="' + (xR + 7) + '" y="' + (yy + 4).toFixed(1) +
                 '" font-size="12" fill="#475569">' + nl(v) + '</text>';
      }
    }
    const yw = y(waarde);
    /* meniscus: aan de randen kruipt het water omhoog, het VLAKKE deel is de aflezing */
    const men = 'M ' + xL + ' ' + (yw - 5).toFixed(1) + ' Q ' + ((xL + xR) / 2) + ' ' +
                (yw + 4).toFixed(1) + ' ' + xR + ' ' + (yw - 5).toFixed(1);
    const voorwerp = opts.voorwerp
      ? '<ellipse cx="' + ((xL + xR) / 2) + '" cy="' + (yBot - 22) + '" rx="17" ry="13" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>'
      : "";
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H +
      '" role="img" aria-label="maatcilinder" style="display:block;margin:6px auto">' +
      '<rect x="' + xL + '" y="' + yw.toFixed(1) + '" width="' + (xR - xL) + '" height="' + (yBot - yw).toFixed(1) +
        '" fill="#bfdbfe" opacity="0.85"/>' +
      voorwerp +
      '<path d="' + men + '" fill="none" stroke="#3b82f6" stroke-width="1.6"/>' +
      '<line x1="' + xL + '" y1="' + yw.toFixed(1) + '" x2="' + xR + '" y2="' + yw.toFixed(1) +
        '" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="3 3"/>' +
      '<path d="M ' + xL + ' ' + yTop + ' L ' + xL + ' ' + yBot + ' L ' + xR + ' ' + yBot + ' L ' + xR + ' ' + yTop +
        '" fill="none" stroke="#334155" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M ' + (xL - 8) + ' ' + (yBot + 16) + ' L ' + (xR + 8) + ' ' + (yBot + 16) + ' L ' + (xR - 2) + ' ' + yBot +
        ' L ' + (xL + 2) + ' ' + yBot + ' Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6" stroke-linejoin="round"/>' +
      ticks +
      '<text x="' + (xR + 7) + '" y="' + (yTop - 10) + '" font-size="12" fill="#334155" font-weight="700">' +
        (opts.eenheid || "mL") + '</text>' +
      '</svg>';
  }

  /* thermometer: verticale buis met gekleurde kolom */
  function svgThermometer(min, max, major, perStreep, waarde) {
    const n = Math.round((max - min) / perStreep);
    const span = Math.min(430, Math.max(190, n * 7));
    const W = 132, xc = 62, yTop = 40, yBot = yTop + span, H = yBot + 50;
    const y = v => yBot - ((v - min) / (max - min)) * (yBot - yTop);
    let ticks = "";
    for (let i = 0; i <= n; i++) {
      const v = rond(min + i * perStreep, 6), yy = y(v);
      const maj = Math.abs(v / major - Math.round(v / major)) < 1e-9;
      ticks += '<line x1="' + (xc + 9) + '" y1="' + yy.toFixed(1) + '" x2="' + (xc + 9 + (maj ? 16 : 8)) +
               '" y2="' + yy.toFixed(1) + '" stroke="#64748b" stroke-width="' + (maj ? 1.6 : 0.9) + '"/>';
      if (maj) ticks += '<text x="' + (xc + 30) + '" y="' + (yy + 4).toFixed(1) +
                        '" font-size="11" fill="#475569">' + nl(v) + '</text>';
    }
    const yw = y(waarde);
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H +
      '" role="img" aria-label="thermometer" style="display:block;margin:6px auto">' +
      '<rect x="' + (xc - 8) + '" y="' + yTop + '" width="16" height="' + (yBot - yTop + 14) + '" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>' +
      '<rect x="' + (xc - 4) + '" y="' + yw.toFixed(1) + '" width="8" height="' + (yBot + 10 - yw).toFixed(1) + '" fill="#e11d48"/>' +
      '<circle cx="' + xc + '" cy="' + (yBot + 22) + '" r="15" fill="#e11d48" stroke="#334155" stroke-width="2"/>' +
      ticks +
      '<text x="' + (xc + 30) + '" y="' + (yTop - 14) + '" font-size="12" fill="#334155" font-weight="700">°C</text>' +
      '</svg>';
  }

  /* digitale weegschaal met afleesvenster */
  function svgWeegschaal(gram) {
    return '<svg viewBox="0 0 190 96" width="190" height="96" role="img" aria-label="weegschaal" style="display:block;margin:6px auto">' +
      '<rect x="6" y="30" width="178" height="52" rx="10" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>' +
      '<rect x="24" y="8" width="142" height="26" rx="6" fill="#cbd5e1" stroke="#334155" stroke-width="1.6"/>' +
      '<rect x="46" y="44" width="98" height="28" rx="5" fill="#0f172a"/>' +
      '<text x="95" y="65" text-anchor="middle" font-size="19" fill="#4ade80" font-family="monospace">' + nl(gram) + '</text>' +
      '<text x="160" y="66" text-anchor="middle" font-size="12" fill="#334155" font-weight="700">g</text>' +
      '</svg>';
  }

  /* twee cilinders naast elkaar: beginstand en eindstand */
  function svgOnderdompel(max, major, perStreep, begin, eind) {
    return '<div style="display:flex;gap:10px;justify-content:center;align-items:flex-end;flex-wrap:wrap">' +
      '<div style="text-align:center"><div style="font-size:.85rem;color:#475569;font-weight:700">beginstand</div>' +
      svgCilinder(max, major, perStreep, begin) + '</div>' +
      '<div style="text-align:center"><div style="font-size:.85rem;color:#475569;font-weight:700">eindstand</div>' +
      svgCilinder(max, major, perStreep, eind, { voorwerp: true }) + '</div></div>';
  }

  /* =======================================================================
     OMREKENEN
     ======================================================================= */
  const RICHTING_UITLEG =
    "Kijk welke eenheid de grootste is. Naar een <b>kleinere</b> eenheid hoort een <b>groter</b> getal (keer 1000), " +
    "naar een <b>grotere</b> eenheid een <b>kleiner</b> getal (gedeeld door 1000).";

  function omreken(waarde, van, naar, factor) {
    const antwoord = rond(waarde * factor, 6);
    const omhoog = factor > 1;
    return {
      t: "bouw",
      q: "Reken om: <b>" + nl(waarde) + " " + van + " = ___ " + naar + "</b><br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
      a: nl(antwoord),
      w: omhoog ? van + " is groter dan " + naar + ", dus keer 1000: het getal wordt groter."
                : van + " is kleiner dan " + naar + ", dus gedeeld door 1000: het getal wordt kleiner.",
      meer: nl(waarde) + " " + (omhoog ? "× 1000 = " : ": 1000 = ") + nl(antwoord) + " " + naar +
            ". Check: het getal werd " + (omhoog ? "groter" : "kleiner") + ", en dat hoort bij " +
            (omhoog ? "groot → klein" : "klein → groot") + ". " + RICHTING_UITLEG
    };
  }

  window.GENERATORS = {

    /* --- omrekenen Brons: hele getallen, kg/g en L/mL --- */
    omrekenen_n1: [
      () => omreken(ri(2, 12), "kg", "g", 1000),
      () => omreken(ri(2, 9) * 1000, "g", "kg", 1 / 1000),
      () => omreken(ri(2, 12), "L", "mL", 1000),
      () => omreken(ri(2, 9) * 1000, "mL", "L", 1 / 1000)
    ],

    /* --- omrekenen Zilver: kommagetallen, beide kanten op --- */
    omrekenen_n2: [
      () => omreken(rond(ri(11, 995) / 100, 2), "kg", "g", 1000),
      () => omreken(ri(11, 999), "g", "kg", 1 / 1000),
      () => omreken(rond(ri(11, 990) / 100, 2), "L", "mL", 1000),
      () => omreken(ri(105, 9990), "mL", "L", 1 / 1000),
      () => omreken(rond(ri(1, 9) / 1000, 3), "kg", "g", 1000)
    ],

    /* --- omrekenen Goud: de brug mL = cm³, en dm³ --- */
    omrekenen_n3: [
      () => {
        const v = ri(12, 95);
        return {
          t: "bouw",
          q: "Een maatcilinder leest <b>" + v + " mL</b> af. Hoeveel <b>cm³</b> is dat?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: String(v),
          w: "1 mL = 1 cm³, dus het getal blijft precies hetzelfde.",
          meer: "Milliliter en kubieke centimeter zijn dezelfde inhoud met een andere naam. Je mag " + v +
                " dus direct in de dichtheidsformule invullen als " + v + " cm³."
        };
      },
      () => omreken(ri(2, 40), "dm³", "cm³", 1000),
      () => omreken(ri(2, 40) * 1000, "cm³", "dm³", 1 / 1000),
      () => omreken(rond(ri(11, 95) / 10, 1), "L", "cm³", 1000),
      () => {
        const kg = rond(ri(105, 2500) / 100, 2);
        return {
          t: "velden",
          q: "Een voorwerp heeft een massa van <b>" + nl(kg) + " kg</b> en een volume van <b>" + 21 + " dm³</b>. " +
             "Zet allebei om vóórdat je gaat delen.",
          velden: [{ label: "massa (g)", a: nl(rond(kg * 1000, 3)) }, { label: "volume (cm³)", a: "21000" }],
          w: "Allebei keer 1000: kg → g en dm³ → cm³.",
          meer: nl(kg) + " kg = " + nl(rond(kg * 1000, 3)) + " g en 21 dm³ = 21 000 cm³. Pas als beide eenheden " +
                "bij elkaar passen (g en cm³) mag je delen, anders krijg je de verkeerde eenheid."
        };
      }
    ],

    /* =====================================================================
       AFLEZEN — met echte schalen op het scherm
       ===================================================================== */

    /* Brons: schaal van 1 per streepje, 10 per genummerd streepje */
    aflezen_n1: [
      () => {
        const max = 50;
        const waarde = ri(6, max - 4);
        return {
          t: "bouw",
          q: "Hoeveel <b>mL</b> water zit er in deze maatcilinder?<br><span style='font-size:.9rem;opacity:.75'>" +
             "(elk klein streepje is 1 mL — alleen het getal)</span>" + svgCilinder(max, 10, 1, waarde),
          a: String(waarde),
          w: "Tussen twee genummerde streepjes liggen 10 vakjes, dus elk streepje is 1 mL.",
          meer: "Ga uit van het laatste genummerde streepje eronder en tel de streepjes erbij op. Je leest " +
                waarde + " mL af. Lees altijd op ooghoogte, bij het vlakke deel van de vloeistofspiegel."
        };
      },
      () => {
        const max = 50, waarde = ri(5, 45);
        return {
          t: "bouw",
          q: "Hoeveel <b>cm³</b> vloeistof zit hierin?<br><span style='font-size:.9rem;opacity:.75'>" +
             "(let op: de schaal staat in mL — alleen het getal)</span>" + svgCilinder(max, 10, 1, waarde),
          a: String(waarde),
          w: "Eerst aflezen in mL, en 1 mL = 1 cm³.",
          meer: "De cilinder staat op " + waarde + " mL. Omdat 1 mL precies 1 cm³ is, is het antwoord " +
                waarde + " cm³ zonder omrekenen."
        };
      },
      () => {
        const waarde = ri(3, 47);
        return {
          t: "bouw",
          q: "Welke temperatuur lees je af?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal, in °C)</span>" +
             svgThermometer(0, 50, 10, 1, waarde),
          a: String(waarde),
          w: "Tussen 2 genummerde streepjes liggen 10 vakjes: elk streepje is 1 °C.",
          meer: "Zoek het laatste genummerde streepje eronder en tel de kleine streepjes erbij. Je leest " +
                waarde + " °C af."
        };
      }
    ],

    /* Zilver: eerst uitzoeken hoeveel één streepje waard is */
    aflezen_n2: [
      () => {
        const major = pick([10, 10, 20]), vakjes = pick([2, 4, 5]);
        const per = rond(major / vakjes, 4);
        return {
          t: "bouw",
          q: "Tussen de genummerde streepjes <b>" + major + "</b> en <b>" + (2 * major) + "</b> liggen <b>" +
             vakjes + " vakjes</b>. Hoeveel is <b>één streepje</b> waard?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: nl(per),
          w: "Verschil delen door het aantal vakjes.",
          meer: "Het verschil tussen " + major + " en " + (2 * major) + " is " + major + ". Verdeel dat over " +
                vakjes + " vakjes: " + major + " : " + vakjes + " = " + nl(per) +
                ". Let op: minder vakjes betekent dat elk streepje méér waard is."
        };
      },
      () => {
        const per = pick([2, 5]), max = per === 2 ? 100 : 250, major = per === 2 ? 10 : 50;   // 5 resp. 10 vakjes
        const waarde = ri(3, Math.round(max / per) - 3) * per;
        return {
          t: "bouw",
          q: "Hoeveel <b>mL</b> zit er in deze maatcilinder?<br><span style='font-size:.9rem;opacity:.75'>" +
             "(zoek eerst uit hoeveel één streepje waard is — alleen het getal)</span>" +
             svgCilinder(max, major, per, waarde),
          a: String(waarde),
          w: "Tussen twee genummerde streepjes liggen " + (major / per) + " vakjes, dus elk streepje is " + per + " mL.",
          meer: major + " : " + (major / per) + " = " + per + " mL per streepje. Tel vanaf het laatste genummerde " +
                "streepje en vermenigvuldig het aantal streepjes met " + per + ". Je leest " + waarde + " mL af."
        };
      },
      () => {
        const per = pick([2, 5]), major = per === 2 ? 10 : 20;
        const max = per === 2 ? 50 : 100;   // 5 resp. 4 vakjes tussen de nummers
        const waarde = ri(2, Math.round(max / per) - 2) * per;
        return {
          t: "bouw",
          q: "Welke temperatuur lees je af?<br><span style='font-size:.9rem;opacity:.75'>" +
             "(kijk goed naar de schaalverdeling — alleen het getal, in °C)</span>" +
             svgThermometer(0, max, major, per, waarde),
          a: String(waarde),
          w: "Elk streepje is hier " + per + " °C waard, niet 1 °C.",
          meer: "Tussen " + major + " en " + (2 * major) + " liggen " + (major / per) + " vakjes: " + major + " : " +
                (major / per) + " = " + per + " °C per streepje. Je leest " + waarde + " °C af."
        };
      }
    ],

    /* Goud: fijne schalen en de onderdompelmethode */
    aflezen_n3: [
      () => {
        const max = 10, waarde = rond(ri(3, 19) * 0.5, 1);
        return {
          t: "bouw",
          q: "Hoeveel <b>mL</b> zit hierin?<br><span style='font-size:.9rem;opacity:.75'>" +
             "(let op: dit is een fijne schaal — alleen het getal)</span>" + svgCilinder(max, 2, 0.5, waarde),
          a: nl(waarde),
          w: "Tussen 2 genummerde streepjes liggen 4 vakjes, dus 2 : 4 = 0,5 mL per streepje.",
          meer: "Bij een fijne schaal moet je de deling écht uitvoeren. Hier is elk streepje 0,5 mL waard en lees je " +
                nl(waarde) + " mL af."
        };
      },
      () => {
        const max = 100, begin = ri(3, 6) * 10, vol = ri(2, 6) * 5;
        const eind = begin + vol;
        return {
          t: "bouw",
          q: "Een steen wordt in de maatcilinder gelegd. Bepaal het <b>volume van de steen</b> in cm³." +
             "<br><span style='font-size:.9rem;opacity:.75'>(zoek eerst uit hoeveel één streepje waard is — alleen het getal)</span>" +
             svgOnderdompel(max, 10, 5, begin, eind),
          a: String(vol),
          w: "Elk streepje is 10 : 2 = 5 mL. volume = eindstand − beginstand.",
          meer: "De beginstand is " + begin + " mL en de eindstand " + eind + " mL. " + eind + " − " + begin +
                " = " + vol + " mL, en 1 mL = 1 cm³, dus het volume is " + vol + " cm³."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => s[1] >= 0.58 && s[1] <= 11.3));
        const vol = pick([10, 20, 25, 50]);
        const massa = rond(stof[1] * vol, 2);
        const max = 150, begin = ri(2, 4) * 10;
        return {
          t: "velden",
          q: "Je leest het volume af op de maatcilinder en de massa op de weegschaal. Bereken de dichtheid." +
             svgCilinder(max, 50, 5, begin + vol) + svgWeegschaal(massa) +
             "<span style='font-size:.9rem;opacity:.75'>De cilinder stond eerst op " + begin +
             " mL. Elk streepje is 5 mL.</span>",
          velden: [{ label: "volume (cm³)", a: String(vol) }, { label: "dichtheid (g/cm³)", a: nl(stof[1]) }],
          w: "Eerst het volume (eindstand − beginstand), dan massa / volume.",
          meer: "Volume = " + (begin + vol) + " − " + begin + " = " + vol + " cm³. Dichtheid = " + nl(massa) +
                " : " + vol + " = " + nl(stof[1]) + " g/cm³. Volgens tabel 1 is dat " + stof[0] + "."
        };
      }
    ],

    /* =====================================================================
       VOLUME
       ===================================================================== */
    volume_n1: [
      () => {
        const l = ri(2, 8), b = ri(1, 6), h = ri(1, 6);
        return {
          t: "bouw",
          q: "Een rechthoekig blokje is <b>" + l + ",0 cm</b> lang, <b>" + b + ",0 cm</b> breed en <b>" + h +
             ",0 cm</b> hoog. Wat is het volume in cm³?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: String(l * b * h),
          w: "volume = lengte × breedte × hoogte.",
          meer: l + " × " + b + " × " + h + " = " + (l * b * h) + " cm³. Je vult het blok in gedachten met " +
                (l * b * h) + " blokjes van 1 cm³. Let op de eenheid: cm × cm × cm geeft cm³."
        };
      },
      () => {
        const z = ri(2, 6);
        return {
          t: "bouw",
          q: "Een kubus heeft ribben van <b>" + z + ",0 cm</b>. Wat is het volume in cm³?<br>" +
             "<span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: String(z * z * z),
          w: "Bij een kubus zijn lengte, breedte en hoogte gelijk.",
          meer: z + " × " + z + " × " + z + " = " + (z * z * z) + " cm³. Dat zijn " + (z * z * z) +
                " blokjes van 1 cm³ op elkaar gestapeld."
        };
      }
    ],

    volume_n2: [
      () => {
        const l10 = ri(15, 80), b = ri(1, 5), h = ri(1, 5);
        const l = rond(l10 / 10, 1), v = rond(l * b * h, 2);
        return {
          t: "bouw",
          q: "Een blokje is <b>" + nl(l) + " cm</b> bij <b>" + b + ",0 cm</b> bij <b>" + h +
             ",0 cm</b>. Wat is het volume in cm³?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: nl(v),
          w: "Ook met kommagetallen: lengte × breedte × hoogte.",
          meer: nl(l) + " × " + b + " × " + h + " = " + nl(v) + " cm³. Reken eerst twee getallen uit en " +
                "vermenigvuldig daarna met het derde, dan houd je het overzicht."
        };
      },
      () => {
        const begin = ri(2, 6) * 10, vol = ri(5, 35), eind = begin + vol;
        return {
          t: "bouw",
          q: "Bij de onderdompelmethode is de <b>beginstand " + begin + " cm³</b> en de <b>eindstand " + eind +
             " cm³</b>. Wat is het volume van het voorwerp?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal, in cm³)</span>",
          a: String(vol),
          w: "volume = eindstand − beginstand.",
          meer: eind + " − " + begin + " = " + vol + " cm³. Het water dat omhoog kwam is precies de ruimte die " +
                "het voorwerp inneemt. Let op de volgorde: eindstand eerst, want die is het grootst."
        };
      },
      () => {
        const l = ri(2, 6), b = ri(2, 5), h = ri(2, 5);
        return {
          t: "stap",
          opgave: "Een blokje van " + l + ",0 bij " + b + ",0 bij " + h + ",0 cm gaat in water. Reken het volume uit.",
          stappen: [{
            prompt: "Volume in cm³", a: String(l * b * h),
            hints: ["volume = lengte × breedte × hoogte",
                    l + " × " + b + " = " + (l * b),
                    (l * b) + " × " + h + " = " + (l * b * h)]
          }],
          w: "volume = lengte × breedte × hoogte.",
          meer: l + " × " + b + " × " + h + " = " + (l * b * h) + " cm³."
        };
      }
    ],

    volume_n3: [
      () => {
        const l = ri(1, 3), b = ri(1, 3), h = ri(4, 9);
        const vol = l * b * h, begin = ri(3, 6) * 10;
        return {
          t: "stap",
          opgave: "Een staafje van " + l + ",0 bij " + b + ",0 bij " + h + ",0 cm gaat in een maatcilinder waar " +
                  "het water op " + begin + " mL staat. Bereken het volume en daarna de eindstand.",
          stappen: [
            { prompt: "Volume van het staafje in cm³", a: String(vol),
              hints: ["volume = lengte × breedte × hoogte", l + " × " + b + " = " + (l * b), (l * b) + " × " + h + " = " + vol] },
            { prompt: "Eindstand van het water in mL", a: String(begin + vol),
              hints: ["Het water stijgt met precies het volume van het staafje", "1 mL = 1 cm³, dus " + vol + " cm³ = " + vol + " mL", begin + " + " + vol + " = " + (begin + vol)] }
          ],
          w: "eindstand = beginstand + volume.",
          meer: "Het staafje heeft een volume van " + vol + " cm³ en duwt dus " + vol + " mL water omhoog: van " +
                begin + " naar " + (begin + vol) + " mL."
        };
      },
      () => {
        const L = ri(8, 24), B = ri(4, 12), H = ri(3, 8);
        const l = ri(2, Math.max(2, B - 1)), b = ri(2, Math.max(2, H - 1)), h = ri(1, Math.max(1, H - 1));
        const groot = L * B * H, klein = l * b * h;
        return {
          t: "stap",
          opgave: "Een steen van " + L + " × " + B + " × " + H + " cm. Er gaat een stukje van " + l + " × " + b +
                  " × " + h + " cm af. Bereken het volume dat overblijft.",
          stappen: [
            { prompt: "Volume van de hele steen in cm³", a: String(groot),
              hints: [L + " × " + B + " × " + H, L + " × " + B + " = " + (L * B), (L * B) + " × " + H + " = " + groot] },
            { prompt: "Volume van het afgehaalde stukje in cm³", a: String(klein),
              hints: [l + " × " + b + " × " + h, l + " × " + b + " = " + (l * b), (l * b) + " × " + h + " = " + klein] },
            { prompt: "Volume dat overblijft in cm³", a: String(groot - klein),
              hints: ["Trek het stukje van het geheel af", groot + " − " + klein, "= " + (groot - klein)] }
          ],
          w: "Knip de vorm in rechthoekige stukken en tel op of trek af.",
          meer: groot + " − " + klein + " = " + (groot - klein) + " cm³."
        };
      },
      () => {
        const begin = ri(2, 5) * 10, vol = ri(8, 30);
        return {
          t: "velden",
          q: "Een voorwerp wordt ondergedompeld. De beginstand is <b>" + begin + " mL</b> en de eindstand <b>" +
             (begin + vol) + " mL</b>.",
          velden: [{ label: "volume (cm³)", a: String(vol) }, { label: "eindstand als het voorwerp eruit is (mL)", a: String(begin) }],
          w: "Het volume is het verschil; haal je het voorwerp eruit, dan zakt het water weer terug.",
          meer: "Volume = " + (begin + vol) + " − " + begin + " = " + vol + " cm³. Haal je het voorwerp eruit, dan " +
                "gaat het water terug naar " + begin + " mL — al blijft er in het echt een beetje water aan het " +
                "voorwerp hangen. Precies daarom lees je de beginstand áltijd eerst af."
        };
      }
    ],

    /* =====================================================================
       DICHTHEID
       ===================================================================== */
    dichtheid_n1: [
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const vol = pick([2, 4, 5, 10, 20]);
        const massa = rond(stof[1] * vol, 2);
        return {
          t: "bouw",
          q: "Een voorwerp heeft een massa van <b>" + nl(massa) + " g</b> en een volume van <b>" + vol +
             " cm³</b>. Wat is de dichtheid in g/cm³?<br><span style='font-size:.9rem;opacity:.75'>(alleen het getal)</span>",
          a: nl(stof[1]),
          w: "dichtheid = massa / volume.",
          meer: nl(massa) + " : " + vol + " = " + nl(stof[1]) + " g/cm³. Dat betekent: in élk blokje van 1 cm³ " +
                "zit " + nl(stof[1]) + " gram. Volgens tabel 1 zou het " + stof[0] + " kunnen zijn."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const vol = pick([4, 5, 10, 20, 25]);
        const massa = rond(stof[1] * vol, 2);
        return {
          t: "stap",
          opgave: "Een voorwerp weegt " + nl(massa) + " g en heeft een volume van " + vol + " cm³. Bereken de dichtheid.",
          stappen: [{
            prompt: "Dichtheid in g/cm³", a: nl(stof[1]),
            hints: ["dichtheid = massa / volume", nl(massa) + " : " + vol, "= " + nl(stof[1])]
          }],
          w: "dichtheid = massa / volume.",
          meer: nl(massa) + " : " + vol + " = " + nl(stof[1]) + " g/cm³, dus dat kan " + stof[0] + " zijn."
        };
      }
    ],

    dichtheid_n2: [
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const z = pick([2, 3, 4, 5]);
        const vol = z * z * z, massa = rond(stof[1] * vol, 2);
        return {
          t: "velden",
          q: "Een kubusje met ribben van <b>" + z + ",0 cm</b> heeft een massa van <b>" + nl(massa) +
             " g</b>. Bereken eerst het volume en daarna de dichtheid.",
          velden: [{ label: "volume (cm³)", a: String(vol) }, { label: "dichtheid (g/cm³)", a: nl(stof[1]) }],
          w: "Eerst volume = l × b × h, dan pas dichtheid = massa / volume.",
          meer: "Volume = " + z + " × " + z + " × " + z + " = " + vol + " cm³. Dichtheid = " + nl(massa) + " : " +
                vol + " = " + nl(stof[1]) + " g/cm³, dus " + stof[0] + "."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10) && s[1] !== 1.0));
        const vol = pick([5, 10, 20, 25]);
        const massa = rond(stof[1] * vol, 2);
        const anderen = STOFFEN.filter(s => s[0] !== stof[0] && Math.abs(s[1] - stof[1]) > 0.05);
        const opties = [stof[0]];
        while (opties.length < 4) { const k = pick(anderen)[0]; if (opties.indexOf(k) < 0) opties.push(k); }
        const foutmap = {};
        opties.slice(1).forEach(naam => {
          const d = STOFFEN.find(s => s[0] === naam)[1];
          foutmap[naam] = "dat is " + nl(d) + " g/cm³ volgens tabel 1, en je rekende " + nl(stof[1]) +
                          " uit (" + nl(massa) + " : " + vol + "). Zoek het berekende getal op in de tabel.";
        });
        return {
          t: "mc",
          q: "Een voorwerp heeft een massa van <b>" + nl(massa) + " g</b> en een volume van <b>" + vol +
             " cm³</b>. Van welke stof is het gemaakt? (gebruik tabel 1)",
          o: opties, a: stof[0], fout: foutmap,
          w: nl(massa) + " : " + vol + " = " + nl(stof[1]) + " g/cm³, en dat is " + stof[0] + ".",
          meer: "Reken eerst de dichtheid uit met massa / volume, en zoek dat getal daarna op in tabel 1. " +
                "Andersom werken (raden welke stof het is) gaat bijna altijd mis."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const begin = ri(2, 5) * 10, vol = pick([10, 20, 25]);
        const massa = rond(stof[1] * vol, 2);
        return {
          t: "stap",
          opgave: "Een voorwerp met een massa van " + nl(massa) + " g wordt ondergedompeld. Beginstand " + begin +
                  " mL, eindstand " + (begin + vol) + " mL. Bereken de dichtheid.",
          stappen: [
            { prompt: "Volume in cm³", a: String(vol),
              hints: ["volume = eindstand − beginstand", (begin + vol) + " − " + begin, "= " + vol + " (en 1 mL = 1 cm³)"] },
            { prompt: "Dichtheid in g/cm³", a: nl(stof[1]),
              hints: ["dichtheid = massa / volume", nl(massa) + " : " + vol, "= " + nl(stof[1])] }
          ],
          w: "Eerst het volume uit de twee standen, dan pas delen.",
          meer: "Volume = " + vol + " cm³ en dichtheid = " + nl(massa) + " : " + vol + " = " + nl(stof[1]) +
                " g/cm³ (" + stof[0] + ")."
        };
      }
    ],

    dichtheid_n3: [
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 100)));
        const volDm = pick([2, 4, 5, 10, 20]);
        const kg = rond(stof[1] * volDm, 3);
        return {
          t: "stap",
          opgave: "Een voorwerp heeft een massa van " + nl(kg) + " kg en een volume van " + volDm +
                  " dm³. Bereken de dichtheid in g/cm³.",
          stappen: [
            { prompt: "Massa in gram", a: nl(rond(kg * 1000, 3)),
              hints: ["kg naar g is groot naar klein: keer 1000", nl(kg) + " × 1000", "= " + nl(rond(kg * 1000, 3))] },
            { prompt: "Volume in cm³", a: String(volDm * 1000),
              hints: ["dm³ naar cm³ is ook keer 1000", volDm + " × 1000", "= " + (volDm * 1000)] },
            { prompt: "Dichtheid in g/cm³", a: nl(stof[1]),
              hints: ["dichtheid = massa / volume", nl(rond(kg * 1000, 3)) + " : " + (volDm * 1000), "= " + nl(stof[1])] }
          ],
          w: "Eerst allebei omrekenen naar g en cm³, dan pas delen.",
          meer: "Deel je meteen kg door dm³, dan komt er toevallig hetzelfde getal uit, maar je eenheid is dan " +
                "kg/dm³ en niet g/cm³. Zet je eenheden altijd eerst goed."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const vol = pick([4, 5, 10, 20]);
        const massa = rond(stof[1] * vol, 2);
        const half = rond(massa / 2, 3), halfV = rond(vol / 2, 3);
        return {
          t: "velden",
          q: "Een blok heeft een massa van <b>" + nl(massa) + " g</b> en een volume van <b>" + vol +
             " cm³</b>. Het wordt <b>doormidden gezaagd</b>. Vul in voor <b>één helft</b>:",
          velden: [
            { label: "massa (g)", a: nl(half) },
            { label: "volume (cm³)", a: nl(halfV) },
            { label: "dichtheid (g/cm³)", a: nl(stof[1]) }
          ],
          w: "Massa én volume halveren, dus de dichtheid blijft precies hetzelfde.",
          meer: "Hele blok: " + nl(massa) + " : " + vol + " = " + nl(stof[1]) + ". Halve blok: " + nl(half) + " : " +
                nl(halfV) + " = " + nl(stof[1]) + ". Precies hetzelfde getal. Dát is wat 'stofeigenschap' betekent: " +
                "de dichtheid hangt niet af van hoeveel je van de stof hebt."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => Number.isInteger(s[1] * 10)));
        const l = ri(2, 5), b = ri(2, 5), h = ri(2, 5);
        const vol = l * b * h, massa = rond(stof[1] * vol, 2);
        return {
          t: "velden",
          q: "Een blok is <b>" + l + ",0 × " + b + ",0 × " + h + ",0 cm</b> en heeft een massa van <b>" +
             nl(massa) + " g</b>.",
          velden: [{ label: "volume (cm³)", a: String(vol) }, { label: "dichtheid (g/cm³)", a: nl(stof[1]) }],
          w: "Eerst volume = l × b × h, daarna massa / volume.",
          meer: "Volume = " + l + " × " + b + " × " + h + " = " + vol + " cm³. Dichtheid = " + nl(massa) + " : " +
                vol + " = " + nl(stof[1]) + " g/cm³, dus " + stof[0] + " volgens tabel 1."
        };
      }
    ],

    /* =====================================================================
       DRIJVEN, ZINKEN, ZWEVEN
       ===================================================================== */
    drijven_n1: [
      () => {
        const drijft = Math.random() < 0.5;
        const d = drijft ? rond(ri(20, 97) / 100, 2) : rond(ri(105, 1900) / 100, 2);
        return {
          t: "mc",
          q: "Een stof heeft een dichtheid van <b>" + nl(d) + " g/cm³</b>. Wat doet die stof in water?",
          o: ["Drijven", "Zinken", "Zweven"],
          a: drijft ? "Drijven" : "Zinken",
          fout: drijft
            ? { "Zinken": "zinken gebeurt bij een dichtheid gróter dan 1,0. " + nl(d) + " is juist kleiner.",
                "Zweven": "zweven is alleen bij precies 1,0 g/cm³. " + nl(d) + " is daar niet gelijk aan." }
            : { "Drijven": "drijven gebeurt bij een dichtheid kléiner dan 1,0. " + nl(d) + " is juist groter.",
                "Zweven": "zweven is alleen bij precies 1,0 g/cm³. " + nl(d) + " is daar niet gelijk aan." },
          w: nl(d) + " is " + (drijft ? "kleiner" : "groter") + " dan 1,0, dus " + (drijft ? "drijven" : "zinken") + ".",
          meer: "Water heeft een dichtheid van 1,0 g/cm³. Leg het getal daarnaast: kleiner drijft, groter zinkt, " +
                "precies gelijk zweeft. Meer hoef je niet te doen."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => s[1] !== 1.0));
        const drijft = stof[1] < 1.0;
        return {
          t: "mc",
          q: "Wat doet <b>" + stof[0] + "</b> (dichtheid " + nl(stof[1]) + " g/cm³) in water?",
          o: ["Drijven", "Zinken", "Zweven"],
          a: drijft ? "Drijven" : "Zinken",
          fout: drijft
            ? { "Zinken": nl(stof[1]) + " is kleiner dan 1,0, dus het blijft juist bovendrijven.",
                "Zweven": "daarvoor moet de dichtheid precies 1,0 zijn." }
            : { "Drijven": nl(stof[1]) + " is groter dan 1,0, dus het zakt naar beneden.",
                "Zweven": "daarvoor moet de dichtheid precies 1,0 zijn." },
          w: nl(stof[1]) + " naast 1,0 leggen: " + (drijft ? "kleiner, dus drijven" : "groter, dus zinken") + ".",
          meer: "Onthoud dat 'zwaar' hier niets betekent. Een olietanker van 100 000 000 kg drijft en een muntje " +
                "van 5 g zinkt. Alleen de dichtheid telt."
        };
      }
    ],

    drijven_n2: [
      () => {
        const a = pick(DRIJVERS), b = pick(ZINKERS);
        return {
          t: "mc",
          q: "Welke van deze twee stoffen <b>drijft</b> op water?",
          o: [a[0] + " (" + nl(a[1]) + " g/cm³)", b[0] + " (" + nl(b[1]) + " g/cm³)"],
          a: a[0] + " (" + nl(a[1]) + " g/cm³)",
          fout: (function () {
            const m = {};
            m[b[0] + " (" + nl(b[1]) + " g/cm³)"] = nl(b[1]) + " is groter dan 1,0, dus " + b[0] +
              " zinkt juist. " + a[0] + " heeft " + nl(a[1]) + " en blijft drijven.";
            return m;
          })(),
          w: nl(a[1]) + " < 1,0 < " + nl(b[1]) + ".",
          meer: "Vergelijk elk getal apart met 1,0. Je hoeft ze niet met elkaar te vergelijken, alleen met water."
        };
      },
      () => {
        const stof = pick(STOFFEN.filter(s => s[1] > 0.5 && s[1] < 3 && s[1] !== 1.0));
        const drijft = stof[1] < 1.0;
        return {
          t: "mc",
          q: "Een blokje <b>" + stof[0] + "</b> (" + nl(stof[1]) + " g/cm³) wordt in water gelegd. Iemand zegt: " +
             "\"Als ik een veel groter blok " + stof[0] + " neem, dan " + (drijft ? "zinkt" : "drijft") +
             " het wel.\" Klopt dat?",
          o: ["Nee, de dichtheid blijft hetzelfde, dus het doet precies hetzelfde",
              "Ja, groter betekent zwaarder",
              "Ja, maar alleen als het twee keer zo groot is"],
          a: "Nee, de dichtheid blijft hetzelfde, dus het doet precies hetzelfde",
          fout: {
            "Ja, groter betekent zwaarder": "groter is inderdaad zwaarder, maar het volume wordt net zo hard groter. " +
              "De dichtheid blijft " + nl(stof[1]) + " g/cm³ en dus gebeurt er precies hetzelfde.",
            "Ja, maar alleen als het twee keer zo groot is": "ook dan niet. Bij twee keer zo groot verdubbelen massa " +
              "én volume, dus de dichtheid blijft " + nl(stof[1]) + "."
          },
          w: "Dichtheid is een stofeigenschap: de hoeveelheid doet er niet toe.",
          meer: "Een hele boomstam drijft net zo goed als een houten blokje. En een klein loden kogeltje zinkt " +
                "net zo hard als een groot loden blok."
        };
      }
    ],

    drijven_n3: [
      () => {
        const drijft = Math.random() < 0.5;
        const vol = pick([10, 20, 25, 50]);
        const d = drijft ? rond(ri(40, 96) / 100, 2) : rond(ri(104, 300) / 100, 2);
        const massa = rond(d * vol, 2);
        return {
          t: "mc",
          q: "Een voorwerp heeft een massa van <b>" + nl(massa) + " g</b> en een volume van <b>" + vol +
             " cm³</b>. Wat doet het in water?",
          o: ["Drijven", "Zinken", "Zweven"],
          a: drijft ? "Drijven" : "Zinken",
          fout: drijft
            ? { "Zinken": "reken eerst uit: " + nl(massa) + " : " + vol + " = " + nl(d) + " g/cm³. Dat is kleiner dan 1,0, dus het drijft.",
                "Zweven": "de dichtheid is " + nl(d) + " g/cm³ en niet precies 1,0, dus zweven kan niet." }
            : { "Drijven": "reken eerst uit: " + nl(massa) + " : " + vol + " = " + nl(d) + " g/cm³. Dat is groter dan 1,0, dus het zinkt.",
                "Zweven": "de dichtheid is " + nl(d) + " g/cm³ en niet precies 1,0, dus zweven kan niet." },
          w: nl(massa) + " : " + vol + " = " + nl(d) + " g/cm³, en dat is " + (drijft ? "kleiner" : "groter") + " dan 1,0.",
          meer: "Eerst rekenen, dan pas beslissen. Kijk niet naar de massa alleen: " + nl(massa) +
                " gram zegt niets zolang je het volume er niet bij hebt."
        };
      },
      () => {
        const vol = pick([10, 20, 25, 50]);
        const d = rond(ri(40, 260) / 100, 2);
        const massa = rond(d * vol, 2);
        return {
          t: "velden",
          q: "Een voorwerp heeft een massa van <b>" + nl(massa) + " g</b> en een volume van <b>" + vol +
             " cm³</b>. Bereken de dichtheid en beslis wat het doet in water.",
          velden: [
            { label: "dichtheid (g/cm³)", a: nl(d) },
            { label: "1 = drijft, 2 = zinkt", a: d < 1.0 ? "1" : "2" }
          ],
          w: nl(massa) + " : " + vol + " = " + nl(d) + " g/cm³ → " + (d < 1.0 ? "drijft" : "zinkt") + ".",
          meer: "Water is 1,0 g/cm³. " + nl(d) + " is " + (d < 1.0 ? "kleiner" : "groter") + ", dus het voorwerp " +
                (d < 1.0 ? "drijft" : "zinkt") + "."
        };
      },
      () => {
        const gassen = [["helium", 0.000178], ["koolstofdioxide", 0.00198], ["waterdamp", 0.00060]];
        const g = pick(gassen), stijgt = g[1] < 0.001293;
        return {
          t: "mc",
          q: "Een ballon wordt gevuld met <b>" + g[0] + "</b> (dichtheid " + nl(g[1]) +
             " g/cm³). Lucht heeft een dichtheid van 0,001293 g/cm³. Wat doet de ballon?",
          o: ["Stijgt op", "Zakt naar de grond"],
          a: stijgt ? "Stijgt op" : "Zakt naar de grond",
          fout: stijgt
            ? { "Zakt naar de grond": nl(g[1]) + " is kleiner dan 0,001293, dus de ballon is 'lichter' dan de lucht eromheen en stijgt juist op." }
            : { "Stijgt op": nl(g[1]) + " is groter dan 0,001293, dus de ballon is 'zwaarder' dan de lucht eromheen en zakt." },
          w: nl(g[1]) + " is " + (stijgt ? "kleiner" : "groter") + " dan 0,001293 g/cm³ (lucht).",
          meer: "Precies dezelfde regel als bij water, alleen met lucht als ijkpunt: een stof met een kleinere " +
                "dichtheid dan wat eromheen zit, gaat drijven. Daarom stijgt een weerballon met helium op."
        };
      }
    ]
  };
})();

/* =========================================================================
   PODCASTS — gegenereerd door build/koppel-podcasts.mjs. Niet met de hand
   bewerken: draai dat script opnieuw als er een aflevering bijkomt.
   ========================================================================= */
window.PODCASTS = [
  { emoji: "🔎", titel: "Onderzoeken en waarnemen", sub: "De wetenschappelijke methode, veilig werken en de indicator.", file: "podcast-2.m4a" }
];

/* =========================================================================
   PODCASTS — gegenereerd door build/koppel-podcasts.mjs. Niet met de hand
   bewerken: draai dat script opnieuw als er een aflevering bijkomt.
   ========================================================================= */
window.PODCASTS = [
  { emoji: "🧪", titel: "Een nieuw vak", sub: "Biologie, natuurkunde of scheikunde? En Röntgen.", file: "podcast-1.m4a" },
  { emoji: "🔎", titel: "Onderzoeken en waarnemen", sub: "De wetenschappelijke methode, veilig werken en de indicator.", file: "podcast-2.m4a" },
  { emoji: "📏", titel: "Grootheid, eenheid en omrekenen", sub: "De drie woorden, de setjes, en welke kant je op rekent.", file: "podcast-3.m4a" },
  { emoji: "⚗️", titel: "Massa en volume", sub: "Aflezen, l × b × h en de onderdompelmethode.", file: "podcast-4.m4a" }
];
