const { log } = console;
let a = "Star";

a.split();

class HeadPhone {
	// property:feature/field/character/property(noun/adjective)
	color = "black";
	shape = "U";

	isPlaying = true; // is/has

	// methods: behaviors/actions/doing(verb)
	playMusic() {
		// playing music
	}

	sendVoiceMessage() {
		// sending speaking voice
	}
}

// Instantiating buitin class
let userName = "Justin";
let fruit = ["apple", "orange"];

log(userName.toUpperCase());
log(userName);

// Instantiating custom class
let turtleBeach = new HeadPhone();
turtleBeach.color = "Yellow";
turtleBeach.sendVoiceMessage();
turtleBeach.playMusic();
