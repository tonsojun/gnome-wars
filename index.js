console.log("Hello");


let gnome = {
    "id": 0,
    "name": "Jimmy",
    "weapon": "Wrench",
    "level": 3,
    "hasMagic": false,
    "skills": [
        "stealth",
        "camouflage"
    ],
    "health": 80,
    "isInvisible": true
}

let troll = {
    "id": 0,
    "name": "Zgurub",
    "weapon": "Big Stick",
    "level": 27,
    "hasMagic": true,
    "skills": [
        "Smash",
        "Smash hard",
        "Smash really hard",
    ],
    "health": 95
}

console.log("The gnome object is");
console.log(gnome);
console.log("The troll object is");
console.log(troll);


const gnomeName = document.getElementById("gnome-name");
gnomeName.innerHTML = "Name: " + gnome.name;

const gnomeWeapon = document.getElementById("gnome-weapon");
gnomeWeapon.innerHTML = "Weapon: " + gnome.weapon;

const gnomeLevel = document.getElementById("gnome-level");
gnomeLevel.innerHTML = "Level: " + gnome.level;

const gnomeHealth = document.getElementById("gnome-health");
gnomeHealth.innerHTML = "Health: " + gnome.health;


const trollName = document.getElementById("troll-name");
trollName.innerHTML = "Name: " + troll.name;

const trollWeapon = document.getElementById("troll-weapon");
trollWeapon.innerHTML = "Weapon: " + troll.weapon;

const trollLevel = document.getElementById("troll-level");
trollLevel.innerHTML = "Level: " + troll.level;

const trollHealth = document.getElementById("troll-health");
trollHealth.innerHTML = "Health: " + troll.health;



const fightButton = document.getElementById("fight-button");

fightButton.addEventListener("click", fight);

function fight() {
	if (gnome.health > troll.health) {
		console.log("The gnome wins");
		winner = gnome.name + "wins!";
	} else {
		console.log("The troll wins");
		winner = troll.name + " wins!";
	}
	alert(winner);
}

const request = new XMLHttpRequest();

const typeOfRequest = "GET";
const placeWeAreCommunicatingWith = "https://theoctagon.dev/api/practice-room/gnomes/1";

request.open(typeOfRequest, placeWeAreCommunicatingWith);
request.onload = infoReceived;
request.send();

function infoReceived() {
	console.log("The info has arrived");
	console.log(request.responseText);

	const infoAsObject = JSON.parse(request.responseText);

	console.log("Now in object shape");
	console.log(infoAsObject);
}



const findGnomeButton = document.getElementById("find-gnome");

findGnomeButton.addEventListener("click", findGnome);

function findGnome() {
	//What's in the input?
	const inputGnome = document.getElementById("gnome-input");
	console.log("The number selected is " + inputGnome.value);
 
	const address = "https://theoctagon.dev/api/practice-room/gnomes/" + inputGnome.value;
	console.log("gnome address is https://theoctagon.dev/api/practice-room/gnomes/" + inputGnome.value);

	const request = new XMLHttpRequest();

	const typeOfRequest = "GET";
	const placeWeAreCommunicatingWith = address;

	request.open(typeOfRequest, placeWeAreCommunicatingWith);
	request.onload = infoReceived;
	request.send();

	function infoReceived() {
		console.log("The info has arrived");
		console.log(request.responseText);

		const infoAsObject = JSON.parse(request.responseText);

		console.log("Now in object shape");
		console.log(infoAsObject);

		gnome = infoAsObject;

		const gnomeName = document.getElementById("gnome-name");
		gnomeName.innerHTML = "Name: " + infoAsObject.name;

		const gnomeWeapon = document.getElementById("gnome-weapon");
		gnomeWeapon.innerHTML = "Weapon: " + infoAsObject.weapon;

		const gnomeLevel = document.getElementById("gnome-level");
		gnomeLevel.innerHTML = "Level: " + infoAsObject.level;

		const gnomeHealth = document.getElementById("gnome-health");
		gnomeHealth.innerHTML = "Health: " + infoAsObject.health;
	}

}

const findTrollButton = document.getElementById("find-troll");

findTrollButton.addEventListener("click", findTroll);

function findTroll() {
	const inputTroll = document.getElementById("troll-input");
	console.log("The number selected is " + inputTroll.value);
}

function findTroll() {
	const inputTroll = document.getElementById("troll-input");
	console.log("The number selected is " + inputTroll.value);

	const address = "https://theoctagon.dev/api/practice-room/trolls/" + inputTroll.value;
	console.log("address for trolls is " + address);

	const request = new XMLHttpRequest();

	const typeOfRequest = "GET";
	const placeWeAreCommunicatingWith = address;

	request.open(typeOfRequest, placeWeAreCommunicatingWith);
	request.onload = infoReceived;
	request.send();

	function infoReceived() {
		console.log("the info has arrived");
		console.log(request.responseText);

		const infoAsObject = JSON.parse(request.responseText);

		console.log("Now in object shape");
		console.log(infoAsObject);

		troll = infoAsObject;

		const trollName = document.getElementById("troll-name");
		trollName.innerHTML = "Name: " + infoAsObject.name;

		const trollWeapon = document.getElementById("troll-weapon");
		trollWeapon.innerHTML = "Weapon: " + infoAsObject.weapon;

		const trollLevel = document.getElementById("troll-level");
		trollLevel.innerHTML = "Level: " + infoAsObject.level;

		const trollHealth = document.getElementById("troll-health");
		trollHealth.innerHTML = "Health: " + infoAsObject.health;
	}
}





