console.log("Hello");


const gnome = {
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

const troll = {
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

