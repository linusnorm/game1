document.addEventListener("DOMContentLoaded", function () {
    // Get elements from the DOM
    const startPage = document.getElementById("start-page");
    const flashcardContainer = document.getElementById("flashcard-container");
    const startGameButton = document.getElementById("start-game");

    const team1Input = document.getElementById("team1");
    const team2Input = document.getElementById("team2");

    const team1NameDisplay = document.getElementById("team1-name");
    const team2NameDisplay = document.getElementById("team2-name");

    const piles = document.querySelectorAll(".pile");
    const flashcardModal = document.getElementById("flashcard-modal");
    const questionText = document.getElementById("question-text");
    const answerText = document.getElementById("answer-text");
    const seeAnswerButton = document.getElementById("see-answer");
    const continueGameButton = document.getElementById("continue-game");
    const flashcardContent = document.querySelector(".flashcard-content");
    const flashcardBack = document.querySelector(".flashcard-back");
    const backgroundElements = document.querySelectorAll('.game-page, .game-rules-frame, .scoreboard-frame, .pile')
    const endGameButton = document.getElementById('end-game');
    const team1ScoreInput = document.getElementById('team1-score');
    const team2ScoreInput = document.getElementById('team2-score');
    const team1Name = document.getElementById('team1-name').textContent;
    const team2Name = document.getElementById('team2-name').textContent;

// End Game logic: compare scores and announce the winner
endGameButton.addEventListener('click', function () {
    const team1Score = parseInt(team1ScoreInput.value, 10);
    const team2Score = parseInt(team2ScoreInput.value, 10);

    let winnerText;
    if (team1Score > team2Score) {
        winnerText = `Stort grattis ${team1Name}, ni är precis som vi alla misstänkte klart bättre på genusfrågor än ${team2Name}!`;
    } else if (team2Score > team1Score) {
        winnerText = `Stort grattis ${team2Name}, ni är precis som vi alla misstänkte klart bättre på genusfrågor än ${team1Name}!`;
    } else {
        winnerText = `Det är oavgjort! Både ${team1Name} och ${team2Name} är lika bra på genusfrågor!`;
    }

    // Display the popup with the winner message
    alert(winnerText);
});;

    // Lists of questions and answers for each category
    const herrfrågor = [
        ["Vad är en menscykel och hur många dagar brukar den i regel vara?", "En menscykel är tiden från den första dagen av en menstruation till den första dagen av nästa menstruation. Den brukar vara omkring 28 dagar, men kan variera mellan 21 och 35 dagar."],
        ["Mellan vilket åldersspann brukar puberteten börja för kvinnor?", "Puberteten för kvinnor börjar vanligtvis mellan 8 och 13 års ålder."],
        ["Vilken färg är den vanligaste favoritfärgen bland kvinnor?", "Undersökningar visar att blått ofta är en favoritfärg bland både män och kvinnor, men rosa och lila är populära specifikt bland kvinnor."],
        ["Vad är concealer för något?", "Concealer är en sminkprodukt som används för att täcka mörka ringar, finnar, rodnader eller andra ojämnheter i ansiktet."],
        ["Varför finns det olika storlekar på tamponger?", "Olika storlekar på tamponger finns för att passa olika mängder av menstruationsflöde, från lätt till kraftigt flöde."],
        ["Vilken sport har flest kvinnliga utövare i världen?", "Fotboll!"],
        ["Vad är sockerpiller för något?", "Sockerpiller är de inaktiva tabletterna i vissa p-pillerkartor som inte innehåller några hormoner och tas under den vecka då menstruationen kommer."],
        ["Vad är det vanligaste yrket för kvinnor i Sverige?", "Det vanligaste yrket för kvinnor i Sverige är undersköterska, följt av vårdbiträde."],
        ["Vad heter huvudkaraktären i Sex and the City? (fullständiga namnet i serien)", "Huvudkaraktären heter Carrie Bradshaw."],
        ["Vad karaktäriserar en klacksko från Louboutain?", "Louboutin-klackar är kända för sina höga stilettklackar och karakteristiska röda sulor."],
        ["Vad är en så kallad bomullsrondell?", "En bomullsrondell är en rund bomullspad som används för att applicera ansiktsprodukter eller ta bort smink."],
        ["Kan kvinnor äta sushi under graviditeten?", "Ja, kvinnor kan äta sushi under graviditeten så länge fisken är färsk, av hög kvalitet och har frysts för att döda eventuella parasiter."],
        ["Vad betyder ordet PMS?", "PMS står för premenstruellt syndrom och innebär symptom som humörsvängningar, uppblåsthet och huvudvärk före menstruation."],
        ["Vad är Veckorevyn för något?", "Veckorevyn är en svensk modetidning som fokuserar på mode, skönhet, kändisar och relationer."],
        ["Vad är skillnaden mellan dag- och nattbindor?", "Dagbindor är tunnare och utformade för lättare mensflöde, medan nattbindor är tjockare och längre för att ge bättre skydd under natten."],
        ["Vilken typ av bh ger mest stöd?", "En bygel-bh med vadderade kupor ger oftast mest stöd."],
        ["Vad används torrschampo till?", "Torrschampo används för att fräscha upp håret mellan tvättar genom att absorbera överflödigt fett i hårbotten."],
        ["Vad är peeling och varför gör man det?", "Peeling innebär att avlägsna döda hudceller från hudens yta för att förbättra hudens textur och lyster."],
        ["Vad är skillnaden mellan hårborttagningskräm och vaxning?", "Hårborttagningskräm löser upp håret på ytan, medan vaxning drar upp håret från roten, vilket ger längre resultat."],
        ["Vad är skillnaden mellan foundation och BB-cream?", "Foundation ger en mer täckande bas, medan BB-cream är lättare och kombinerar fuktighetskräm med lätt täckning och ibland solskydd."],
        ["Hur ofta rekommenderas det att man gör en gynekologisk undersökning?", "Det rekommenderas att man gör en gynekologisk undersökning vartannat till var tredje år, eller vid symtom som förändringar i underlivet."],
        ["Vad är en hårtoning jämfört med en permanent?", "En hårtoning är en tillfällig färg som tvättas ur efter några tvättar, medan en permanent hårfärg sitter kvar tills håret växer ut."],
        ["Vad används en ögonfransböjare till?", "En ögonfransböjare används för att ge fransarna en uppåtböjd form, vilket gör att de ser längre och fylligare ut."],
        ["Vad är skillnaden mellan gellack och vanligt nagellack?", "Gellack härdas under UV-ljus och håller betydligt längre än vanligt nagellack, som kan flagna snabbare."],
        ["Vad är en scrunchie?", "En scrunchie är en tygklädd hårsnodd som ofta används för att sätta upp håret utan att slita på det."],
        ["Varför används primer innan sminkning?", "Primer används innan smink för att skapa en jämn bas och få sminket att sitta bättre och längre."],
        ["Vad innebär att ha ett pärlarmband;?", "Att ha ett pärlarmband innebär att bära ett armband med pärlor, som ofta anses klassiskt och elegant."],
        ["Vad är en pedikyr?", "En pedikyr innebär att man tar hand om fötterna genom att fila, vårda naglarna och ibland applicera nagellack."],
        ["Vad gör man när man gör en Brazilian Wax?", "En Brazilian Wax innebär att man tar bort allt eller nästan allt könshår med hjälp av vax."],
        ["Vilken funktion har en ögonbrynsgel?", "Ögonbrynsgel används för att forma och hålla ögonbrynen på plats under dagen."],
        ["Vad är skillnaden mellan en kofta och en cardigan?", "Det finns ingen egentlig skillnad mellan en kofta och en cardigan, båda är stickade tröjor med knäppning eller öppning fram."],
        ["Vad innebär termen bad hair day?", "Bad hair day innebär en dag då håret inte går att styla som man vill och ofta ser rufsigt eller ostyrigt ut."],
        ["Vilken sminkprodukt används för att ge en solkysst look?", "Bronzer används för att ge en solkysst look och framhäva ansiktets konturer."],
        ["Vad är en jumpsuit?", "En jumpsuit är ett plagg som kombinerar både byxor och topp i ett enda stycke."],
        ["Vad innebär termen mammajeans?", "Mammajeans är jeans som är designade för gravida, ofta med högre midja och stretchigt material för komfort."],
        ["Vad är en bralette och hur skiljer den sig från en vanlig bh?", "En bralette är en mjukare, icke-vadderad bh utan byglar, som erbjuder lätt stöd jämfört med en vanlig bh."],
        ["Vad är skillnaden mellan en maxi-klänning och en midi-klänning?", "En maxi-klänning går ner till anklarna eller fötterna, medan en midi-klänning slutar runt knäna."],
        ["Vad är syftet med en setting spray inom sminkning?", "Setting spray används för att fixera sminket så att det håller längre och för att förhindra att det smetas ut."],
        ["Vad är en fransk manikyr?", "En fransk manikyr innebär att naglarna målas i en naturlig färg med vita toppar."],
        ["Vad används ansiktsvatten (Face Mist) till?", "Ansiktsvatten (Face Mist) används för att återfukta och fräscha upp huden under dagen."],
        ["Vad är skillnaden mellan en sport-bh och en vanlig bh?", "En sport-bh är designad för att ge extra stöd under fysisk aktivitet och minska rörelse, medan en vanlig bh främst fokuserar på komfort och form i vardagen."],
        ["Vad innebär det att göra en balayage hos frisören?", "Balayage är en hårfärgningsmetod där frisören målar färgen på håret för att skapa en naturlig, solkysst look med mjuka övergångar."],
        ["Vad är syftet med att använda en hårinpackning?", "En hårinackning ger djup återfuktning och vård till håret, reparerar skador och stärker hårstråna."],
        ["Vad är en stay-up-strumpa och hur skiljer den sig från vanliga strumpbyxor?", "En stay-up-strumpa hålls uppe med hjälp av en silikonkant och behöver inga strumpeband, medan vanliga strumpbyxor täcker hela benen och midjan."],
        ["Vad är contouring inom smink?", "Contouring inom smink innebär att använda ljusa och mörka nyanser för att framhäva ansiktsdrag och skapa skuggor, vilket ger ett mer definierat utseende."],
        ["Vad är ett värmeskydd för håret och varför används det?", "Värmeskydd för håret används före värmestyling, som plattång eller locktång, för att skydda håret från skador orsakade av hög temperatur."],
        ["Vad är den lilla svarta och varför är den ett måste i garderoben?", "Den lilla svarta är en klassisk svart klänning som ofta anses vara ett tidlöst plagg, passande för många olika tillfällen, från vardag till fest."],
        ["Vad är skillnaden mellan en eyeliner och en kajalpenna?", "Eyeliner är en flytande eller gelbaserad produkt som används för att skapa skarpa linjer runt ögonen, medan kajalpenna är mjukare och används oftare på vattenlinjen för en mer sotad look."],
        ["Vad är ett så kallat statementsmycke?", "Ett statementsmycke är ett stort och iögonfallande smycke som används för att dra uppmärksamhet till sig och ge en outfit en tydlig stilmarkör."],
        ["I serien Gossip Girl, vem är den anonyma bloggaren som avslöjar allas hemligheter?", "I serien Gossip Girl avslöjas det i slutet att Dan Humphrey är den anonyma bloggaren."],
        ["Vad är skillnaden på manikyr och pedikyr?", "Manikyr innebär vård av naglar och händer, medan pedikyr innebär vård av fötter och tånaglar."],
        ["Vad är skillnaden mellan pilates och yoga?", "Pilates fokuserar på kärnstyrka, hållning och kontroll, medan yoga handlar om flexibilitet, balans och andning med en mer spirituell dimension."],
        ["Vad är skillnaden mellan vanliga träningstights och kompressionstights?", "Vanliga träningstights ger stöd och komfort vid träning, medan kompressionstights är designade för att förbättra blodcirkulationen och stödja musklerna under och efter träning."],
        ["I filmen Mean Girls, vad kallas den populära tjejgruppen som Regina George leder?", "I filmen Mean Girls kallas den populära tjejgruppen som Regina George leder för The Plastics."],
        ["Vad innebär begreppet love languages och vilka är de fem vanligaste?", "Begreppet love languages refererar till de sätt människor uttrycker och tar emot kärlek på. De fem vanligaste är: ord av bekräftelse, kvalitetstid, gåvor, tjänster och fysisk beröring."],
        ["Vad heter Bianca Ingrossos smyckesmärke?", "Bianca Ingrossos smyckesmärke heter ANI Jewels."]
    ];

    const damfrågor = [
        ["Röda Lacket och General. Vad är det exempel på?", "Röda Lacket och General är exempel på svenska snusmärken."],
        ["Vilken färg är den vanligaste favoritfärgen bland män?", "Blått är den vanligaste favoritfärgen bland män."],
        ["Var har vi läst När älgen är blå är ölen kall?", "När älgen är blå är ölen kall har vi läst på burkar av Öl från Norrlands Guld."],
        ["I vilken tung actionfilm hör vi Nicolas Cage säga: Peach. I could eat a peach for hours?", "I actionfilmen Face/Off säger Nicolas Cage repliken: Peach. I could eat a peach for hours."],
        ["Vilken sport har flest manliga utövare i världen?", "Fotboll är den sport som har flest manliga utövare i världen."],
        ["Vad syftar man på när man pratar om exempelvis 4-3-3, 4-2-3-1, 4-4-2?", "När man pratar om 4-3-3, 4-2-3-1, 4-4-2 syftar man på fotbollsformationer, som beskriver hur spelarna är placerade på planen."],
        ["Vad är Nürburgring för något?", "Nürburgring är en berömd racerbana i Tyskland, känd för sina svåra kurvor och används både för professionella tävlingar och amatörkörningar."],
        ["Vilken veckodag är den klassiska Formel1 Grand Prixdagen?", "Formel 1 Grand Prix körs klassiskt på söndagar."],
        ["Vad är det vanligaste yrket för män i Sverige?", "Det vanligaste yrket för män i Sverige är lager- och terminalpersonal."],
        ["Vad är en ballofix?", "En ballofix är en liten ventil som används för att stänga av vattnet lokalt i ett rörsystem, ofta under handfat eller diskbänkar."],
        ["Vad är en så kallad Varmboga?", "Det är när man värmer upp ölen Arboga till 55 grader och dricker den varm, något som blev ett internetfenomen förra vintern i Sverige."],
        ["Vem är Simo Hähyä och vad är han känd för?", "Simo Häyhä var en finsk prickskytt, känd som Vita Döden för sina många dödsfall under vinterkriget mot Sovjetunionen."],
        ["Black Ops, Modern Warfare, Warzone. Vilket TV-spel är det vi pratar om?", "Black Ops, Modern Warfare, och Warzone är delar av spelserien Call of Duty."],
        ["Vad är en V8-motor?", "En V8-motor är en motor med åtta cylindrar ordnade i två rader av fyra, vilket ger mycket kraft och används ofta i större bilar eller sportbilar."],
        ["Vad signalerar man när man knackar i bordet under pokerspelet Texas Hold Em?", "När man knackar i bordet under pokerspelet Texas Hold&#x27;em signalerar man att man passar, det vill säga att man inte satsar mer utan låter spelet gå vidare till nästa spelare."],
        ["Vad är skillnaden mellan ett moderkort och ett grafikkort i en dator?", "Moderkortet är den centrala kretsen i datorn som kopplar samman alla komponenter, medan grafikkortet är specialiserat för att bearbeta grafik och används särskilt i spel och videoredigering."],
        ["Vad heter de 4 största ligorna i USA för: Hockey, Basket, Baseboll och Amerikansk fotboll?", "De fyra största ligorna i USA är: NHL (hockey), NBA (basket), MLB (baseboll), och NFL (amerikansk fotboll)."],
        ["Vad är en så kallad PWO?", "PWO står för pre-workout och är ett kosttillskott som tas före träning för att öka energi och prestation."],
        ["Vad innebär det att spela i boxplay i hockey?", "Att spela i boxplay i hockey innebär att ett lag har en eller flera spelare utvisade och spelar med färre spelare än motståndaren."],
        ["I racingtävlingar, vad innebär det att vara i pole position?", "Att vara i pole position i racing innebär att man startar i den främsta positionen på startlinjen, vilket är en fördel i tävlingen."],
        ["Hur många varv kör man i det legendariska racingloppet Indy500?", "Man kör 200 varv i det legendariska racingloppet Indy500."],
        ["Vad är skillnaden mellan en single malt och en blended whisky?", "En single malt whisky kommer från ett enda destilleri och är gjord på mältat korn, medan en blended whisky är en blandning av flera olika whiskysorter från olika destillerier."],
        ["Vad innebär button-down på en herrskjorta?", "Button-down på en herrskjorta innebär att kragen har knappar som fäster den mot skjortan."],
        ["Vad är skillnaden mellan en smoking och en kostym?", "En smoking är en mer formell klädsel som oftast används vid galor eller formella middagar, medan en kostym är en mindre formell klädsel som används vid affärsmöten eller finare tillställningar."],
        ["Vad heter arenan där det svenska herrlandslaget i fotboll spelar sina hemmamatcher?", "Arenan där det svenska herrlandslaget i fotboll spelar sina hemmamatcher heter Strawberry Arena."],
        ["Vad heter den populära svenska motorsporttävlingen som hålls på Mantorp Park varje år?", "Den populära svenska motorsporttävlingen som hålls på Mantorp Park varje år heter Gatebil."],
        ["Vad heter sångaren i rockbandet Metallica?", "Sångaren i rockbandet Metallica heter James Hetfield."],
        ["Vad gär man när man growlar?", "När man growlar använder man en speciell sångteknik inom hårdrock och metal där man skriker eller vrålar fram texten med en djup och rå ton."],
        ["Vad är en så kallad mosh pit för något?", "En mosh pit är ett område framför scenen på en konsert, särskilt inom rock och metal, där publiken dansar vilt och ibland knuffar varandra."],
        ["Vad heter den mest framgångsrika svenske fightern som tävlat i UFC?", "Den mest framgångsrika svenske fightern som tävlat i UFC heter Alexander Gustafsson."],
        ["Vad heter regissören som ligger bakom filmer som Pulp Fiction och Kill Bill?", "Regissören som ligger bakom filmer som Pulp Fiction och Kill Bill heter Quentin Tarantino."],
        ["Vad heter HBOs succéserie om andra världskriget?", "Succéserie om andra världskriget heter Band of Brothers."],
        ["Vilket företag är det som står bakom utvecklingen av Playstation?", "Företaget bakom utvecklingen av PlayStation är Sony."],
        ["Vad betyder battle royal i tv- och datorspel?", "Battle royal i tv- och datorspel innebär en spelstil där ett stort antal spelare tävlar mot varandra tills endast en spelare eller ett lag återstår som vinnare."],
        ["Vad heter tv-spelskaraktären som är en arkeolog och actionhjälte i spelserien Tomb Raider?", "Tv-spelskaraktären som är en arkeolog och actionhjälte i spelserien Tomb Raider heter Lara Croft."],
        ["Vad är skillnaden mellan att bulka och deffa när det gäller träning?", "Att bulka innebär att äta ett kaloriöverskott för att bygga muskler, medan deffa innebär att minska kroppsfett genom att äta ett kaloriunderskott och behålla musklerna."],
        ["Om en kille får höra från sina vänner att han är en toffel, vad innebär det?", "Om en kille kallas toffel av sina vänner innebär det att han anses styras eller kontrolleras av sin partner, ofta genom att följa hennes vilja över sina egna intressen."],
        ["Vad är prostatans funktion i den manliga kroppen?", "Prostatans funktion i den manliga kroppen är att producera en del av vätskan i sädesvätskan, som hjälper spermierna att röra sig och överleva."],
        ["Vad är egentligen adamsäpplet och varför är det mer framträdande hos män?", "Adamsäpplet är en utskjutande del av struphuvudet som är mer framträdande hos män eftersom deras struphuvud växer under puberteten."],
        ["Var i kroppen produceras testosteron hos män?", "Testosteron produceras i testiklarna hos män."],
        ["Vad betyder FPS i gaming och varför är det viktigt?", "FPS står för frames per second i gaming och är viktigt eftersom det mäter hur många bildrutor som visas per sekund. Ju högre FPS, desto jämnare och mer responsivt upplevs spelet."],
        ["Vad är man om man är Bosman i fotboll?", "Om man är Bosman i fotboll innebär det att man är en spelare vars kontrakt har löpt ut, vilket gör att man kan byta klubb utan övergångssumma, enligt den så kallade Bosmandomen."],
        ["Vad är skillnaden mellan en tvåtaktsmotor och en fyrtaktsmotor?", "En tvåtaktsmotor genomgår två steg (takt) per cykel och har enklare design men är mindre bränsleeffektiv, medan en fyrtaktsmotor går igenom fyra steg (takt) och är mer bränsleeffektiv och miljövänligare."],
        ["Vad är Brabus för något?", "Brabus är ett tyskt företag som specialiserar sig på att trimma och anpassa lyxbilar, särskilt Mercedes-Benz."],
        ["Vad betyder det att en dator har SSD istället för en traditionell hårddisk (HDD)?", "Om en dator har SSD (solid state drive) istället för en traditionell hårddisk (HDD), innebär det att den lagrar data på ett snabbare sätt utan rörliga delar, vilket gör datorn snabbare och mer responsiv."],
        ["Vilken svensk f.d. ishockeyspelare kallas ofta Zäta?", "Den svenska f.d. ishockeyspelaren som kallas Zäta är Henrik Zetterberg."],
        ["Vad är Dreamhack för något?", "Dreamhack är världens största LAN-party och digitala festival, som hålls i Sverige och inkluderar esportstävlingar, streaming och teknikevent."],
        ["I tv och datorspel, vad innebär det att göra ett HS?", "Att göra ett HS i tv- och datorspel betyder att göra ett headshot, vilket innebär att man träffar en motståndare direkt i huvudet för maximal skada."],
        ["Vilket bilmärke tillverkar modellen 911 som är en ikonisk sportbil?", "Bilmärket som tillverkar den ikoniska sportbilsmodellen 911 är Porsche."],
        ["Under hur många timmar körs det klassiska racingloppet Le Mans?", "Det klassiska racingloppet Le Mans körs under 24 timmar."],
        ["Hur ser skruvhuvudet ut på en så kallad Torx-skruv?", "Skruvhuvudet på en Torx-skruv har en stjärnform med sex uddar."],
        ["Vad är bits när man pratar om verktyg?", "Bits är små utbytbara delar som sätts i en skruvdragare eller skruvmejsel och används för att passa olika typer av skruvhuvuden."],
        ["Vad är skillnaden mellan direkt och indirekt grillning?", "Direkt grillning innebär att man placerar maten direkt över glöden eller värmekällan, vilket ger snabb och intensiv värme. Indirekt grillning innebär att maten placeras vid sidan av värmekällan för långsammare och jämnare tillagning."],
        ["Vad innebär reverse sear när man tillagar kött på grillen?", "Reverse sear innebär att man först långsamt tillagar köttet på låg temperatur, vanligtvis i ugn eller indirekt på grillen, och avslutar med att snabbt bryna det på hög värme för en krispig yta."],
        ["Vad betyder termen session IPA när det gäller ölstilar?", "En session IPA är en lättare variant av India Pale Ale med lägre alkoholhalt, vilket gör den mer lämplig för att dricka under en längre tid, eller session."],
        ["Vad innebär det att en öl är ofiltrerad och hur påverkar det smaken?", "Om en öl är ofiltrerad innebär det att den inte har gått igenom en filtreringsprocess, vilket ofta gör att den är något grumlig och kan ha en mer komplex och fyllig smak."]
    ];

    const manVsKvinnor = [
        ["Är det fler män än kvinnor i Sverige som har gymkort?", "Fler män än kvinnor i Sverige har gymkort."],
        ["Vilka har högst IQ i genomsnitt globalt: Män eller kvinnor?", "Män och kvinnor har i genomsnitt liknande IQ globalt, men skillnader kan bero på individuella variationer snarare än kön."],
        ["Är det fler kvinnor eller fler män i Sverige som snusar?", "Det är fler män än kvinnor som snusar i Sverige."],
        ["Vad finns det flest av på jorden: män eller kvinnor?", "Det finns fler män än kvinnor på jorden, men skillnaden är liten."],
        ["Sant eller falskt: Kvinnor har 4 färre tänder i munnen än män?", "Falskt: Kvinnor har inte färre tänder än män, båda könen har samma antal tänder."],
        ["Sant eller falskt: Det är fler män än kvinnor som röstar på SD", "Sant: Det är fler män än kvinnor som röstar på Sverigedemokraterna (SD)."],
        ["Är det fler män eller kvinnor i Sverige som har körkort?", "Fler män än kvinnor i Sverige har körkort."],
        ["Vem lever i genomsnitt längre, män eller kvinnor?", "Kvinnor lever i genomsnitt längre än män."],
        ["Sant eller falskt: Kvinnor har en högre smärttröskel än män?", "Sant: Kvinnor har i genomsnitt en högre smärttröskel än män, även om en del studier påvisar att män har samma/högre."],
        ["Är det fler män eller kvinnor som jobbar heltid i Sverige?", "Fler män än kvinnor jobbar heltid i Sverige."],
        ["Sant eller falskt: Män har större hjärnor än kvinnor i genomsnitt?", "Sant. Män har i genomsnitt något större hjärnor än kvinnor, men detta påverkar inte intelligens eller kognitiva förmågor."],
        ["Vilka söker oftare vård i Sverige, män eller kvinnor?", "Kvinnor. Statistik visar att kvinnor generellt sett söker vård oftare än män i Sverige."],
        ["Är det fler kvinnor eller män som äger bostadsrätter i Sverige?", "Kvinnor. Enligt statistik från bland annat SCB är fler bostadsrätter ägda av kvinnor än män, särskilt i storstadsområden."],
        ["Vilka spenderar mer tid på hushållsarbete i genomsnitt, män eller kvinnor?", "Kvinnor. Studier visar att kvinnor i genomsnitt lägger mer tid på hushållsarbete än män, även om skillnaderna minskar över tid."],
        ["Sant eller falskt: Fler kvinnor än män utbildar sig på högskola och universitet i Sverige?", "Sant. Fler kvinnor än män utbildar sig på högskola och universitet i Sverige."],
        ["Har män eller kvinnor generellt högre risk för hjärt- och kärlsjukdomar?", "Män. Män har i genomsnitt en högre risk för hjärt- och kärlsjukdomar än kvinnor, särskilt i yngre åldrar."],
        ["Sant eller falskt: Kvinnor har bättre hörsel än män i genomsnitt?", "Sant. Kvinnor tenderar att ha bättre hörsel än män, särskilt vid högre frekvenser, och män är mer benägna att drabbas av hörselnedsättning med åldern."],
        ["Är det fler män eller kvinnor som köper elbilar i Sverige?", "Män. Det är fler män än kvinnor som köper elbilar i Sverige, enligt statistik."],
        ["Vilket kön läser fler böcker i genomsnitt, män eller kvinnor?", "Kvinnor. Kvinnor läser i genomsnitt fler böcker än män."],
        ["Sant eller falskt: Män har en snabbare ämnesomsättning än kvinnor i genomsnitt?", "Sant. Män har i genomsnitt en snabbare ämnesomsättning än kvinnor, främst på grund av större muskelmassa."],
        ["Vilket kön har i genomsnitt högre alkoholkonsumtion i Sverige, män eller kvinnor?", "Män. Män har i genomsnitt högre alkoholkonsumtion än kvinnor i Sverige."],
        ["Sant eller falskt: Det är fler kvinnor än män som är politiskt aktiva i Sverige.", "Falskt. Det är fler män än kvinnor som är politiskt aktiva på vissa högre nivåer, även om kvinnors representation i politiken har ökat."],
        ["Har män eller kvinnor oftare anmält förslitningsskador i sitt yrke?", "Kvinnor. Kvinnor anmäler oftare förslitningsskador, särskilt inom vård- och omsorgsyrken."],
        ["Vilka löper större risk för benskörhet, män eller kvinnor?", "Kvinnor. Kvinnor, särskilt efter klimakteriet, löper större risk för benskörhet (osteoporos)."],
        ["Sant eller falskt: Kvinnor drabbas oftare av migrän än män?", "Sant. Kvinnor drabbas oftare av migrän än män."],
        ["Är det fler män eller kvinnor som äger företag i Sverige?", "Män. Fler män än kvinnor äger företag i Sverige."],
        ["Sant eller falskt: Fler kvinnor än män har sällskapsdjur i Sverige?", "Falskt. Det är ingen tydlig majoritet mellan könen, men i vissa studier har män något högre benägenhet att äga sällskapsdjur"],
        ["Vilka sover oftare dåligt, män eller kvinnor?", "Kvinnor. Kvinnor rapporterar oftare dålig sömn än män."],
        ["Sant eller falskt: Fler män än kvinnor tar ut föräldraledighet i Sverige?", "Falskt. Fler kvinnor än män tar ut föräldraledighet i Sverige."],
        ["Är det fler kvinnor eller män som spelar dataspel i Sverige?", "Män. Fler män än kvinnor spelar dataspel i Sverige, särskilt när det gäller konsol- och pc-spel."],
        ["Vilket kön har högre risk att utveckla typ 2-diabetes, män eller kvinnor?", "Män. Män har en något högre risk att utveckla typ 2-diabetes än kvinnor."],
        ["Är det fler män eller kvinnor som använder sociala medier dagligen i Sverige?", "Kvinnor. Fler kvinnor än män använder sociala medier dagligen i Sverige."],
        ["Är det vanligare för män eller kvinnor att ha synfel?", "Kvinnor. Synfel, som närsynthet eller åldersrelaterade synproblem, är något vanligare bland kvinnor."],
        ["Vilka har generellt bättre finmotorik, män eller kvinnor?", "Kvinnor. Kvinnor har generellt bättre finmotorik än män."],
        ["Är det fler män eller kvinnor som kör bil till jobbet i Sverige?", "Män. Fler män än kvinnor kör bil till jobbet i Sverige."],
        ["Sant eller falskt: Kvinnor har starkare immunförsvar än män?", "Sant. Kvinnor har i genomsnitt ett starkare immunförsvar än män, vilket gör att de generellt klarar infektioner bättre."],
        ["Vilket kön upplever oftare stress, män eller kvinnor?", "Kvinnor. Kvinnor rapporterar oftare högre stressnivåer än män."],
        ["Är det fler män eller kvinnor som tar hand om äldre anhöriga i Sverige?", "Kvinnor. Fler kvinnor än män tar hand om äldre anhöriga i Sverige."],
        ["Sant eller falskt: Kvinnor är mer benägna att prata i telefon än män?", "Sant. Studier visar att kvinnor i genomsnitt pratar mer i telefon än män."],
        ["Är det flest män eller flest kvinnor som röker i Sverige?", "Män. Det är något fler män än kvinnor som röker i Sverige."],
        ["Sant eller falskt: Kvinnor har i genomsnitt högre kroppstemperatur än män?", "Sant. Kvinnor har i genomsnitt något högre kroppstemperatur än män."],
        ["Är det fler män eller fler kvinnor som jobbar inom vård och omsorg i Sverige?", "Fler kvinnor. Kvinnor utgör en majoritet av de som arbetar inom vård och omsorg i Sverige."],
        ["Vilket kön orsakar flest trafikolyckor, män eller kvinnor?", "Män. Män är inblandade i och orsakar fler trafikolyckor än kvinnor, enligt statistik."],
        ["Sant eller falskt: Fler kvinnor än män är vegetarianer i Sverige?", "Sant. Fler kvinnor än män är vegetarianer eller följer en växtbaserad kost i Sverige."],
        ["Vilket kön sover mest i genomsnitt i Sverige, män eller kvinnor?", "Kvinnor. Kvinnor sover i genomsnitt något mer än män, men rapporterar oftare problem med sömnkvaliteten."],
        ["Är det fler män eller kvinnor som lider av psykiska sjukdomar?", "Fler kvinnor. Kvinnor rapporterar oftare psykiska sjukdomar och diagnoser, såsom ångest och depression."],
        ["Sant eller falskt: Kvinnor har bättre smak- och luktsinne än män?", "Sant. Kvinnor har i genomsnitt bättre smak- och luktsinne än män."],
        ["Är det fler män eller kvinnor som tar antidepressiva mediciner i Sverige?", "Fler kvinnor. Kvinnor är överrepresenterade när det gäller användning av antidepressiva mediciner i Sverige."],
        ["Vilket kön dricker mer kaffe i genomsnitt, män eller kvinnor?", "Män. Män dricker i genomsnitt mer kaffe än kvinnor i Sverige."],
        ["Sant eller falskt: Fler kvinnor än män jobbar deltid i Sverige?", "Sant. Fler kvinnor än män arbetar deltid i Sverige, särskilt inom vård, omsorg och serviceyrken."],
        ["Vilka är mer benägna att handla kläder online, män eller kvinnor?", "Kvinnor. Kvinnor handlar generellt mer kläder online än män."],
        ["Sant eller falskt: Kvinnor har oftare lägre blodtryck än män?", "Sant. Kvinnor har i genomsnitt lägre blodtryck än män."],
        ["Vilket kön är oftare chefer inom svenska företag, män eller kvinnor?", "Män. Män är oftare chefer inom svenska företag, även om andelen kvinnor i ledande positioner ökar."],
        ["Är det fler män eller kvinnor som är medlemmar i fackförbund i Sverige?", "Män. Fler män är medlemmar i fackförbund i Sverige, men skillnaden mellan könen har minskat något över tid."],
        ["Sant eller falskt: Kvinnor har i genomsnitt högre utbildning än män?", "Sant. Kvinnor har i genomsnitt högre utbildning än män i många länder, inklusive Sverige."],
        ["Är det fler män eller fler kvinnor på dejtingappar i Sverige?", "Fler män. Det är oftast fler män än kvinnor som är aktiva på dejtingappar i Sverige."]
    ];

        // Start Game
    startGameButton.addEventListener("click", function () {
        const team1Name = team1Input.value || "Herrlaget";
        const team2Name = team2Input.value || "Damlaget";

        // Hide the start page and show the flashcard page
        startPage.style.display = "none";
        flashcardContainer.style.display = "flex";

        // Update the scoreboard with team names
        team1NameDisplay.textContent = team1Name;
        team2NameDisplay.textContent = team2Name;
    });

    // Function to get a random question from a category
    function getRandomQuestion(category) {
        const randomIndex = Math.floor(Math.random() * category.length);
        return category[randomIndex];
    }

// Flashcard click event
piles.forEach(pile => {
    pile.addEventListener("click", function () {
        let selectedQuestion;
        const pileId = pile.id;

        // Grey out background
        backgroundElements.forEach(el => el.classList.add('blur-background'));

        // Reset the color classes on flashcard modal and buttons
        flashcardContent.classList.remove("blue", "pink", "yellow");
        seeAnswerButton.classList.remove("blue", "pink", "yellow");
        continueGameButton.classList.remove("blue", "pink", "yellow");

        // Determine which category to use based on the pile clicked
        if (pileId === "pile1") {
            selectedQuestion = getRandomQuestion(herrfrågor);
            flashcardContent.classList.add("blue");
            seeAnswerButton.classList.add("blue");
            continueGameButton.classList.add("blue");
        } else if (pileId === "pile2") {
            selectedQuestion = getRandomQuestion(damfrågor);
            flashcardContent.classList.add("pink");
            seeAnswerButton.classList.add("pink");
            continueGameButton.classList.add("pink");
        } else if (pileId === "pile3") {
            selectedQuestion = getRandomQuestion(manVsKvinnor);
            flashcardContent.classList.add("yellow");
            seeAnswerButton.classList.add("yellow");
            continueGameButton.classList.add("yellow");
        }

        // Show modal and display the selected question
        flashcardModal.style.display = "flex";
        flashcardContent.classList.remove("flipped");
        flashcardBack.style.display = "none";
        questionText.textContent = selectedQuestion[0]; // Question
        answerText.textContent = selectedQuestion[1]; // Answer
    });
});

    // Show the answer when "Visa svar" is clicked
    seeAnswerButton.addEventListener("click", function () {
        flashcardContent.classList.add("flipped");
        flashcardBack.style.display = "flex";
        flashcardFront.style.display = "none"; // Hide the question side when flipped
    });

    // Close the modal and return to flashcards when "Spela vidare" is clicked
    continueGameButton.addEventListener("click", function () {
        flashcardModal.style.display = "none";
        backgroundElements.forEach(el => el.classList.remove('blur-background'));
    });
});