// variabele met daarin alle stellingen van de stemwijzer
var stellingen = ["Nederland moet terug naar de Gulden",
				  "Er moet meer geld naar ontwikkelingshulp",
				  "De overheid moet afslanken",
				  "De AOW leeftijd moet terug naar 67 jaar",
				  "Wietteelt moet worden gelegaliseerd",
				  "We moeten minder geld aan het leger uitgeven",
				  "Alle werkenden moeten minder loonbelasting betalen",
				  "Leerlingen moeten op tijd in de les zijn",
				  "Elke dag lopen in de pauze is gezond",
				  " "];

var stellingNr = 0;

var btnEens = document.getElementById('btnEens');
var btnOneens = document.getElementById('btnOneens');
var btnVolgende = document.getElementById('btnVolgende');
var stelling = document.getElementById('stelling');

var keuzeEens = 0;
var huidigeKeuze = 'geen';

// starten van de stemwijzer, configureren van instellingen voor eerste stelling
// eventhandling toevoegen op de 3 buttons: eens, oneens en volgende
function startStemWijzer(){

	btnEens.onclick = keuzeStellingEens;
	btnOneens.onclick = keuzeStellingOneens;
	btnVolgende.onclick = verwerkKeuze;
	stelling.innerHTML = stellingen[stellingNr];
	btnVolgende.style.display = 'none';
}



// feedback aan gebruiker dat eens is gedrukt en bijhouden huidige keuze
function keuzeStellingEens(event){

	huidigeKeuze = 'eens';
	btnVolgende.style.display = 'inline-block';

}

// feedback aan gebruiker dat oneens is gedrukt en bijhouden huidige keuze
function keuzeStellingOneens(event){

	huidigeKeuze = 'oneens';
	btnVolgende.style.display = 'inline-block';
}


// verwerken van de stemming van de stelling
// de buttons eens en oneens worden weer op standaard kleur gezet
// de volgende button wordt uitgezet
// bij de laatste stelling wordt de tekst van VOLGENDE omgezet naar VOLTOOIEN
function verwerkKeuze(){

	stelling.innerHTML = stellingen[stellingNr + 1];
	stellingNr++;
	
	btnVolgende.style.display = 'none';

	if (huidigeKeuze == 'eens') {
		keuzeEens++;
	}

	huidigeKeuze = 'geen';

	if (stellingNr == 8) {
		btnVolgende.innerHTML = 'VOLTOOIEN';

	}

	if (stellingNr == 9) {
		
		btnEens.style.display = 'none';
		btnOneens.style.display = 'none';
		toonUitslag();
	}

}


// Deze functie toont de uitslag van de stemming in een alert box
// < 2 eens 			--> CDA
// >=2 en <= 4 eens 	--> VVD
// >=5 en <= 7 eens 	--> PvdA
// >=8 eens 			--> D66
function toonUitslag(){

	if (keuzeEens == 9) {
		alert('Partij van de dieren');
	}

	if (keuzeEens == 8) {
		alert('D66');
	} 

	if (keuzeEens == 7) {
		alert('PvdA');
	}

	if (keuzeEens == 6) {
		alert('Christenunie');
	}

	if (keuzeEens == 5) {
		alert('PvdA');
	}

	if (keuzeEens == 4) {
		alert('VVD');
	}

	if (keuzeEens == 3) {
		alert('VVD');
	}

	if (keuzeEens == 2) {
		alert('VVD');
	}

	if (keuzeEens == 1) {
		alert('CDA');
	}

	if (keuzeEens == 0) {
		alert('CDA');
	} 
}
