# dagbok
En databasdriven dagboksapplikation där användaren kan läsa, skriva och ta bort dagboksinlägg.

Reflektion

Applikationen är en kombination av Java med Spring Boot ramverket, Thymeleaf, HTML, Javascript, CSS och en Sql databas. Det första jag gjorde var att skapa databas med en tabell som innehöll dem kolumner jag ville ha för min data. När jag titta tillbaka på detta hade det förmodligen varit smidigare att bara skapa primärnykeln och sedan låter min Java entity klass skapa resten automatiskt när en inlägg skapades.  Efter jag hade en Spring Boot ramverk och Github repository igång skapade jag alla Java klasser som behövdes; entity, controller, repository där jag hade kopplat till databasen genom application.properties. 

Jag tog valet att ignorera design totalt i början och fokusera bara på att få igång alla funktioner som jag ville ha i min applikation och därför väntade med att skapa CSS eller Javascript filer. Jag har haft dålig erfarenhet tidigare med att snöa in mig på design detaljer som behövdes ändå ändras senare när jag låg till en annan funktion.

Jag började med att fylla min entity klass med de egenskaper jag behövde och en enkel template och en GetMapping i min controller där jag kunde använda mockdata att testa att det gick att skicka en instans av min Entity klass till min databas. Det här var för att kunna veta senare att kommunikationen till databasen var i gång och därför inte anledningen till någon problem som kunde komma fram.

Efter det här gick jag igenom dem funktioner som var krav att kunna få godkänd där allt handlade om tråden från HTML input → Thymeleaf → Java → Sql → Java → Thymeleaf → HTML output. Efter jag var klar med en del grundfunktioner kom på att jag inte hade tänkt på att skapa issues i min repo och var tvungen att jobba lite retroaktivt. 

Jag valde att hålla mig till en html template och använda Javascript att manipulera min html där det behövdes för att även kunna enkelt koppla min backend data med Thymeleaf en gång och därför har tillgång till data:n för alla applikationens funktioner. 

Den enda stora utmaning jag fastnade på (förutom den vanliga CSS brottnings match) handlade om redigeringsfunktionen. Först behövde jag koppla varsin redigeringsknapp till respektive inlägg där alla inlägg har egen id tagit fram från en Thymeleaf funktion. Det här löste jag genom en gömd html element där id:n presenteras i text och kan fångas med Javascript. Det kändes som en 'nybörjare' lösning men jag kunde inte kommer på en bättre sätt med mina kunskaper. Jag ville också att inläggets detaljer; rubrik, text och valt datum, skulle visas i redigerings rutan direkt så att användaren inte var tvungen att skriver om eller kopiera och klistra in själv. Problemet var att dess html element skapades med Javascript vid behov och var inte kopplade till inlägget som redigeras. Därför kände jag att det skulle vara smidigare att varje inlägg skulle ha sin egen, gömd, redigerings formulär som genom mapping kunde plockar fram informationen från databasen. Sedan var det bara att använda Javascript att gör rutan synlig där användaren trycker på en knapp. Det här lösning gjorde det enklare med nästa steget med när jag behövde skicka in den redigerade texten till min Java kod. Det här lösning gav mig chansen att lära mig några fler CSS funktioner med där jag ville ge redigerings rutan estetiken av en pop-up. 

Jag känner att det här projektet i samband med förre grupp projektet har gett mig ett bra grep på båda Spring Boot och Thymeleaf och att Databas lagring är mycket enklare än att hålla på med massa olika objekt och listor i ren Java, även om det krävs en del mer förberedelse. 

