import React, { useState } from 'react';
import styles from './GenerateContainer.module.css';

let used = [];

// person gen functions

function firstName() {
	if (document.getElementById('fantasy').checked) {
		var res = '';
		var nameStart = [
			'Ab',
			'Ac',
			'Ae',
			'Ag',
			'Ai',
			'Al',
			'Am',
			'An',
			'Ap',
			'Ar',
			'As',
			'At',
			'Ax',
			'Ba',
			'Be',
			'Bi',
			'Bo',
			'Bu',
			'Ca',
			'Ci',
			'Co',
			'Da',
			'De',
			'Di',
			'Do',
			'Eb',
			'Ec',
			'Ed',
			'Ei',
			'El',
			'Em',
			'En',
			'Er',
			'Es',
			'Et',
			'Ew',
			'Ey',
			'Fa',
			'Fe',
			'Fi',
			'Fo',
			'Ga',
			'Ge',
			'Go',
			'Ha',
			'He',
			'Hi',
			'Hu',
			'Ib',
			'Ic',
			'Id',
			'Ih',
			'Ij',
			'Im',
			'In',
			'Ip',
			'Ir',
			'Is',
			'It',
			'Ix',
			'Ja',
			'Je',
			'Ji',
			'Jo',
			'Ju',
			"J'",
			'Ka',
			'Ke',
			'Ki',
			'Ko',
			'Ku',
			"K'",
			'La',
			'Li',
			'Lu',
			'Le',
			'Lo',
			'Ma',
			'Me',
			'Mi',
			'Mo',
			'Mu',
			'Na',
			'Ne',
			'Ni',
			'No',
			'Nu',
			'Ob',
			'Oc',
			'Od',
			'Og',
			'Ol',
			'Om',
			'On',
			'Or',
			'Os',
			'Ot',
			'Ow',
			'Ox',
			'Pa',
			'Pe',
			'Pi',
			'Po',
			'Pu',
			'Qu',
			"Q'",
			'Ra',
			'Re',
			'Ri',
			'Ro',
			'Ru',
			'Sa',
			'Se',
			'Si',
			'So',
			'Su',
			'Ta',
			'Te',
			'Ti',
			'To',
			'Tu',
			"T'",
			'Wa',
			'We',
			'Wu',
			'Xa',
			'Xo',
			'Ya',
			'Ye',
			'Yi',
			'Yl',
			'Yo',
			'Yu',
			'Za',
			'Ze',
			'Zi',
			"Z'",
		];
		var nameMid = [
			'ba',
			'be',
			'bi',
			'bo',
			'bu',
			'ca',
			'ci',
			'co',
			'da',
			'de',
			'di',
			'do',
			'fa',
			'fe',
			'fi',
			'fo',
			'ga',
			'ge',
			'go',
			'ha',
			'he',
			'hi',
			'hu',
			'ja',
			'je',
			'ji',
			'jo',
			'ju',
			"j'",
			'ka',
			'ke',
			'ki',
			'ko',
			'ku',
			"k'",
			'la',
			'li',
			'lu',
			'le',
			'lo',
			'ma',
			'me',
			'mi',
			'mo',
			'mu',
			'na',
			'ne',
			'ni',
			'no',
			'nu',
			'pa',
			'pe',
			'pi',
			'po',
			'pu',
			'qu',
			"q'",
			'ra',
			're',
			'ri',
			'ro',
			'ru',
			'sa',
			'se',
			'si',
			'so',
			'su',
			'ta',
			'te',
			'ti',
			'to',
			'tu',
			"t'",
		];
		var nameEnd = [
			'a',
			'aba',
			'alas',
			'akev',
			'arel',
			'aren',
			'aten',
			'bon',
			'bors',
			'bres',
			'berev',
			'bert',
			'cial',
			'cen',
			'carn',
			'cel',
			'diel',
			'dal',
			'dern',
			'deg',
			'dottir',
			'ea',
			'eren',
			'evel',
			'ell',
			'ellol',
			'ellia',
			'fia',
			'fer',
			'faz',
			'fets',
			'foll',
			'gia',
			'ga',
			'gel',
			'gea',
			'hia',
			'hel',
			'hen',
			'hea',
			'ii',
			'ia',
			'illin',
			'ian',
			'lia',
			'lin',
			'lem',
			'liel',
			'mia',
			'ma',
			'me',
			'metis',
			'nia',
			'non',
			'nek',
			'neo',
			'ol',
			'orn',
			'org',
			'ork',
			'pia',
			'pa',
			'pol',
			'pern',
			'qua',
			'quen',
			'rel',
			'ren',
			'rria',
			'rima',
			'rma',
			'sia',
			'sevel',
			'sell',
			'sid',
			'son',
			'tia',
			'tem',
			'tellis',
			'tel',
			'uin',
			'ueno',
			'una',
			'ven',
			'vieve',
			'veren',
			'vera',
			'wa',
			'wern',
			'weiss',
			'wein',
			'xan',
			'xin',
			'xame',
			'xie',
			'zia',
			'zin',
			'zirn',
			'zie',
		];
		var numMids = Math.floor(Math.random() * 2);
		res += nameStart[Math.floor(Math.random() * nameStart.length)];
		for (var i = 0; i < numMids; i++) {
			res += nameMid[Math.floor(Math.random() * nameMid.length)];
		}
		res += nameEnd[Math.floor(Math.random() * nameEnd.length)];
		return res;
	}
	if (document.getElementById('scifi').checked) {
		var a = ['Alice', 'John'];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function lastName() {
	if (document.getElementById('fantasy').checked) {
		var res = '';
		var nameStart = [
			'Ab',
			'Ac',
			'Ae',
			'Ag',
			'Ai',
			'Al',
			'Am',
			'An',
			'Ap',
			'Ar',
			'As',
			'At',
			'Ax',
			'Ba',
			'Be',
			'Bi',
			'Bo',
			'Bu',
			'Ca',
			'Ci',
			'Co',
			'Da',
			'De',
			'Di',
			'Do',
			'Eb',
			'Ec',
			'Ed',
			'Ei',
			'El',
			'Em',
			'En',
			'Er',
			'Es',
			'Et',
			'Ew',
			'Ey',
			'Fa',
			'Fe',
			'Fi',
			'Fo',
			'Ga',
			'Ge',
			'Go',
			'Ha',
			'He',
			'Hi',
			'Hu',
			'Ib',
			'Ic',
			'Id',
			'Ih',
			'Ij',
			'Im',
			'In',
			'Ip',
			'Ir',
			'Is',
			'It',
			'Iw',
			'Ix',
			'Ja',
			'Je',
			'Ji',
			'Jo',
			'Ju',
			"J'",
			'Ka',
			'Ke',
			'Ki',
			'Ko',
			'Ku',
			"K'",
			'La',
			'Li',
			'Lu',
			'Le',
			'Lo',
			'Ma',
			'Me',
			'Mi',
			'Mo',
			'Mu',
			'Na',
			'Ne',
			'Ni',
			'No',
			'Nu',
			'Ob',
			'Oc',
			'Od',
			'Og',
			'Ol',
			'Om',
			'On',
			'Or',
			'Os',
			'Ot',
			'Ow',
			'Ox',
			'Pa',
			'Pe',
			'Pi',
			'Po',
			'Pu',
			'Qu',
			"Q'",
			'Ra',
			'Re',
			'Ri',
			'Ro',
			'Ru',
			'Sa',
			'Se',
			'Si',
			'So',
			'Su',
			'Ta',
			'Te',
			'Ti',
			'To',
			'Tu',
			"T'",
			'Wa',
			'We',
			'Wu',
			'Xa',
			'Xo',
			'Ya',
			'Yb',
			'Yd',
			'Ye',
			'Yi',
			'Yl',
			'Yo',
			'Ys',
			'Yt',
			'Yu',
			'Za',
			'Ze',
			'Zi',
			"Z'",
		];
		var nameMid = [
			'ba',
			'be',
			'bi',
			'bo',
			'bu',
			'ca',
			'ci',
			'co',
			'da',
			'de',
			'di',
			'do',
			'fa',
			'fe',
			'fi',
			'fo',
			'ga',
			'ge',
			'go',
			'ha',
			'he',
			'hi',
			'hu',
			'ja',
			'je',
			'ji',
			'jo',
			'ju',
			"j'",
			'ka',
			'ke',
			'ki',
			'ko',
			'ku',
			"k'",
			'la',
			'li',
			'lu',
			'le',
			'lo',
			'ma',
			'me',
			'mi',
			'mo',
			'mu',
			'na',
			'ne',
			'ni',
			'no',
			'nu',
			'pa',
			'pe',
			'pi',
			'po',
			'pu',
			'qu',
			"q'",
			'ra',
			're',
			'ri',
			'ro',
			'ru',
			'sa',
			'se',
			'si',
			'so',
			'su',
			'ta',
			'te',
			'ti',
			'to',
			'tu',
			"t'",
		];
		var nameEnd = [
			'a',
			'aba',
			'alas',
			'akev',
			'arel',
			'aren',
			'aten',
			'aus',
			'bon',
			'bors',
			'bres',
			'berev',
			'bert',
			'cial',
			'cen',
			'carn',
			'cel',
			'diel',
			'dal',
			'dern',
			'deg',
			'ea',
			'eren',
			'evel',
			'ell',
			'ellol',
			'ellia',
			'fia',
			'fer',
			'faz',
			'fets',
			'foll',
			'field',
			'gia',
			'ga',
			'gel',
			'gea',
			'hia',
			'hel',
			'hen',
			'hea',
			'ii',
			'ia',
			'illin',
			'ian',
			'ios',
			'ius',
			'lia',
			'lin',
			'lem',
			'liel',
			'mia',
			'ma',
			'me',
			'metis',
			'nia',
			'non',
			'nek',
			'neo',
			'ol',
			'orn',
			'org',
			'ork',
			'pia',
			'pa',
			'pol',
			'pern',
			'qua',
			'quen',
			'rel',
			'ren',
			'rria',
			'rima',
			'shi',
			'sia',
			'sevel',
			'sell',
			'sid',
			'son',
			'tia',
			'tem',
			'tellis',
			'tel',
			'uin',
			'ueno',
			'una',
			'ven',
			'vieve',
			'veren',
			'vera',
			'wa',
			'wern',
			'weiss',
			'wein',
			'xan',
			'xin',
			'xame',
			'xie',
			'zia',
			'zin',
			'zirn',
			'zie',
		];
		var numMids = Math.floor(Math.random() * 3);
		res += nameStart[Math.floor(Math.random() * nameStart.length)];
		for (var i = 0; i < numMids; i++) {
			res += nameMid[Math.floor(Math.random() * nameMid.length)];
		}
		res += nameEnd[Math.floor(Math.random() * nameEnd.length)];
		return res;
	} else {
		var a = ['Doe', 'Unknown'];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function buG() {
	var a = [
		'a slight',
		'a heavy',
		'an average',
		'a thin',
		'a chubby',
		'a fat',
		'a skinny',
		'a fair',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function heG() {
	var a = [
		'tall',
		'towering',
		'statuesque',
		'short',
		'miniscule',
		'diminutive',
		'petite',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function joG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			'woodcutter',
			'fisher',
			'farmer',
			'hunter',
			'guard',
			'mercenary',
			'alchemist',
			'baker',
			'beggar',
			'noble',
			'scribe',
			'blacksmith',
			'weaver',
			'merchant',
			'shepherd',
			'artist',
			'innkeeper',
			'cobbler',
			'miner',
			'tailor',
			'carpenter',
			'butcher',
			'brewer',
			'thief',
			'assassin',
			'leatherworker',
			'courier',
			'shipbuilder',
			'cultist',
			'priest',
			'necromancer',
			'mage',
			'wizard',
			'evil wizard',
			'witch',
			'warlock',
			'silly little guy',
			'unemployed person',
			'layabout',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			'retail worker',
			'food service worker',
			'healthcare worker',
			'cashier',
			'nurse',
			'general manager',
			'customer service worker',
			'manual laborer',
			'mover',
			'clerk',
			'order stocker',
			'janitor',
			'freight pilot',
			'secretary',
			'mechanic',
			'accountant',
			'software developer',
			'teacher',
			'line cook',
			'chef',
			'security guard',
			'lawyer',
			'personal assistant',
			'electrician',
			'electrical engineer',
			'software engineer',
			'computer engineer',
			'pathologist',
			'roboticist',
			'fighter pilot',
			'AI engineer',
			'mech pilot',
			'commercial pilot',
			'space trucker',
			'hired gun',
			'professional assassin',
			'hydroponics farmer',
			'systems analyst',
			'bartender',
			'private detective',
			'slacker',
			'unemployed person',
			'loser',
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function adG() {
	var a = [
		'warm',
		'kind',
		'soft',
		'silly',
		'stupid',
		'absurd',
		'sarcastic',
		'charismatic',
		'clumsy',
		'gullible',
		'vain',
		'sociable',
		'pragmatic',
		'serious',
		'reliable',
		'cold',
		'harsh',
		'mean',
		'fashionable',
		'edgy',
		'unattractive',
		'beautiful',
		'shabby',
		'sensible',
		'elegant',
		'affable',
		'aloof',
		'bossy',
		'callous',
		'conceited',
		'condescending',
		'dull',
		'interesting',
		'cunning',
		'pious',
		'energetic',
		'excitable',
		'loyal',
		'gentle',
		'honorable',
		'imaginative',
		'creative',
		'mature',
		'innocent',
		'lazy',
		'hard-working',
		'misanthropic',
		'opinionated',
		'argumentative',
		'competitive',
		'flirty',
		'patient',
		'impatient',
		'strange',
		'quixotic',
		'rebellious',
		'reckless',
		'sickly',
		'healthy',
		'sadistic',
		'stingy',
		'tactless',
		'tactful',
		'witty',
	];

	var res = a[Math.floor(Math.random() * a.length)];
	if (used.includes(res)) {
		while (used.includes(res)) {
			res = a[Math.floor(Math.random() * a.length)];
		}
		used.push(res);
	} else {
		used.push(res);
	}
	return res;
}

function hobG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			'fish',
			'whittle',
			'cook',
			'bake',
			'paint landscapes',
			'paint portraits',
			'exercise',
			'sew',
			'knit',
			'play music',
			'sing',
			'draw',
			'shop',
			'read books',
			'read periodicals',
			'hike',
			'garden',
			'fence',
			'swim',
			'gamble',
			'attempt alchemy',
			'perform stage magic',
			'perform actual magic',
			'summon demons',
			'try to resurrect the dead',
			'study various orbs',
			'surf the waves',
			'do martial arts',
			'do ballet',
			'predict the weather in normal ways',
			'predict the weather in magical ways',
			'predict the weather by using magic to change the weather',
			'ice skate',
			'construct things',
			'dive',
			'study normal texts',
			'study ancient and forbidden texts',
			'assemble a collection of strange objects',
			'play board games',
			'watch birds',
			'watch people',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			'program websites',
			'program database software',
			'program games',
			'make robots',
			'bedazzle their stuff',
			'hot glue things to each other',
			'drink',
			'read books',
			'journal',
			'learn languages',
			'take online classes',
			'run a blog',
			'get mad on social media',
			'cause drama on social media',
			'listen to podcasts',
			'record their podcast',
			'collect figurines',
			'collect old coins',
			'collect circuitboards',
			'cook',
			'bake',
			'run on the treadmill',
			'write novels',
			'draw comics',
			'visit museums',
			'volunteer for charitable causes',
			'do yoga',
			'play competitive online games',
			'gamble',
			'do graffiti',
			"plan vacations they'll never take",
			'surf the waves in VR',
			'do martial arts',
			'do ballet',
			'paint landscapes',
			'paint portraits',
			'paint space',
			'whittle',
			'3D print things',
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function taG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			'saw a dragon',
			'fell off a cliff and lived',
			'programmed a random description generator that described them exactly',
			'stole a magical orb from a wizard',
			'ate some questionable food and met the god of food poisoning',
			'rode a whirlwind',
			'met a very large cow',
			'saw a ghost',
			'saw a fairy',
			'made a deal with the devil',
			'won a duel with the devil',
			'sold their soul for minimal gain',
			'went viral',
			'starred in a short-lived run of a famous play',
			'got turned into a newt (they got better)',
			'saved a princess from a dragon',
			'saved a dragon from a princess',
			'was saved from a dragon by a princess',
			'died and came back wrong',
			'died and came back',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			'made an AI that became sentient and destroyed itself',
			'flew a spaceship into a black hole and escaped unharmed',
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function seG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			"they're actually from regular old Earth and found themselves here by some means",
			'they killed someone once',
			"they've actually never been on a date",
			'they have a terminal illness',
			'they hate their family',
			'they really love their family',
			'they really hate their job',
			'they have no sense of smell',
			'they witnessed a terrible event and were sworn to secrecy',
			'there are many binaries to which they do not adhere',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			"they've actually never been on a date",
			'they have a terminal illness',
			'they hate their family',
			'they really love their family',
			'they really hate their job',
			'they have no sense of smell',
			'they witnessed a terrible event and were sworn to secrecy',
			'there are many binaries to which they do not adhere',
			'they are actually a popular online content creator who hides their identity',
			"they anonymously exposed a major corporation's illegal activities",
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function feG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			'bugs',
			'fish',
			'sharks',
			'losing their memories',
			'being forgotten',
			'eternity',
			'spiders, but only the giant kind',
			'spiders, but only the small kind',
			'being alone',
			'emotional vulnerability',
			'magic',
			'facing their fears',
			'death',
			'everyone hating them',
			'everyone being indifferent toward them',
			'everyone being afraid of them',
			'wide open spaces',
			'enclosed spaces',
			'losing control of themselves',
			'having nonspecific health issues',
			'having very specific health issues',
			'snakes',
			'drawing the wrath of the gods',
			'drawing the attention of the gods',
			'the idea of their self-image being correct',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			'bugs',
			'fish',
			'sharks',
			'losing their memories',
			'being forgotten',
			'eternity',
			'spiders',
			'being alone',
			'emotional vulnerability',
			'magic',
			'facing their fears',
			'death',
			'everyone hating them',
			'everyone being indifferent toward them',
			'everyone being afraid of them',
			'wide open spaces',
			'enclosed spaces',
			'losing control of themselves',
			'having nonspecific health issues',
			'having very specific health issues',
			'snakes',
			'sentient AI',
			'airlocks',
			'robots',
			'their family hating them',
			'the idea of their self-image being correct',
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function hopG() {
	if (document.getElementById('fantasy').checked) {
		var a = [
			'to be happy',
			'to have a lot of money',
			'to get married',
			'to get divorced',
			'to have a child',
			'to have many children',
			"to get a good nights' sleep",
			'to achieve something amazing',
			'to gain the admiration of everyone',
			'to make the world a better place',
			'to make the world a slightly worse place',
			'to have a fulfilling job',
			'to slay a terrible beast',
			'to become a hero',
			'to become royalty',
			'to leave and never come back',
			'to become immortal',
			'to slay all their enemies',
			'to be remembered',
			'to be loved',
			'to retire',
			'to live a life of luxury',
			'to never do anything again',
			'to never get bored',
			'to achieve infinite arcane power',
		];
		return a[Math.floor(Math.random() * a.length)];
	} else {
		var a = [
			'to be happy',
			'to have a lot of money',
			'to get married',
			'to fall in love',
			'to get divorced',
			'to have a child',
			'to have many children',
			"to get a good nights' sleep",
			'to achieve something amazing',
			'to gain the admiration of everyone',
			'to make the world a better place',
			'to make the world a slightly worse place',
			'to have a fulfilling job',
			'to leave and never come back',
			'to be remembered',
			'to be loved',
			'to retire',
			'to live a life of luxury',
			'to never do anything again',
			'to never get bored',
			'to become famous online',
			'to get rich online',
			'to have a really cool robot butler',
			'to abolish capitalism',
		];
		return a[Math.floor(Math.random() * a.length)];
	}
}

function rngsent() {
	var rng = Math.floor(Math.random() * 8);
	var res;
	if (used.includes(rng)) {
		while (used.includes(rng)) {
			rng = Math.floor(Math.random() * 8);
		}
		used.push(rng);
	} else {
		used.push(rng);
	}
	if (rng === 0) {
		res = 'In their free time, they often ' + hobG() + '. ';
	} else if (rng === 1) {
		res = "They're very proud of how " + adG() + ' they are. ';
	} else if (rng === 2) {
		res =
			'They try their best not to be ' +
			adG() +
			", considering it a quality they're ashamed of. ";
	} else if (rng === 3) {
		res =
			'They once ' + taG() + ', but nobody believes them when they say so. ';
	} else if (rng === 4) {
		res = 'They have never told anyone, but ' + seG() + '. ';
	} else if (rng === 5) {
		res = 'Their greatest fear is ' + feG() + '. ';
	} else if (rng === 6) {
		res = 'Their most dearly-held dream is ' + hopG() + '. ';
	} else if (rng === 7) {
		res =
			'Growing up, they were ' + adG() + ', but they have grown out of it. ';
	} else {
		res =
			'Growing up, they were ' +
			adG() +
			", which they've never managed to shake. ";
	}
	return res;
}

//place gen functions

function poneG() {
	var a = [
		'Stone',
		'Rock',
		'Wood',
		'Marsh',
		'Dry',
		'Waste',
		'Var',
		'Sun',
		'Moon',
		'Star',
		'Beast',
		'Night',
		'Day',
		'Earth',
		'Sky',
		'North',
		'South',
		'East',
		'West',
		'Cave',
		'Hole',
		'River',
		'Sea',
		'Bay',
		'Bridge',
		'Ice',
		'Red',
		'Yellow',
		'Green',
		'Blue',
		'White',
		'Black',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function ptwoG() {
	var a = [
		'ton',
		'town',
		'wood',
		'march',
		'keep',
		'hold',
		'helm',
		'clear',
		'fjord',
		'ville',
		'borough',
		'shire',
		'glen',
		'dale',
		'comb',
		'cliff',
		'ford',
		'lock',
		'lea',
		'weed',
		'port',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function ptypeG() {
	var a = [
		'town',
		'city',
		'borough',
		'village',
		'settlement',
		'keep',
		'hamlet',
		'township',
		'burg',
		'port',
		'shire',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function prepG() {
	var a = [
		'is widely beloved and often traveled to',
		'is known for its many mysteries',
		'is largely overlooked among its more interesting peers',
		'is known for playing host to many untimely and suspicious deaths',
		'is rife with political corruption and nepotism',
		'is basically owned by a prominent crime family',
		'is home to great natural beauty',
		'is there',
		'has changed greatly in the last hundred years',
		'was once much greater and more powerful',
		'was once much smaller and less important',
		'howls at night with the screams of a thousand unquiet spirits',
		'falls victim in the night to all manner of dangerous wildlife',
		'is menaced by local bandits',
		'is a holy site for a certain religion',
		'is a holy site for more than one religion',
		'is avoided unfairly',
		'is avoided for good reason',
		'was once somewhere else, before circumstances neccessitated its relocation',
		'is unsettlingly normal',
		'is suffused with magical energies',
		'has long been thought to have the power to heal anyone who lives there',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function padG() {
	var a = [
		'calm',
		'lively',
		'crowded',
		'peaceful',
		'vibrant',
		'bleak',
		'rundown',
		'touristy',
		'ancient',
		'magical',
		'modern',
		'traditional',
		'majestic',
		'beautiful',
		'barren',
		'desolate',
		'colorful',
		'quaint',
		'charming',
		'picturesque',
		'quiet',
		'serene',
		'unassuming',
		'unremarkable',
		'chaotic',
		'dangerous',
		'safe',
		'welcoming',
		'hostile',
		'friendly',
		'unfriendly',
		'dry',
		'humid',
		'high in altitude',
		'low in altitude',
		'cold',
		'hot',
		'temperate',
		'rainy',
		'sunny',
		'windy',
		'foggy',
		'snowy',
		'mountainous',
		'flat',
		'hilly',
		'forested',
	];

	var res = a[Math.floor(Math.random() * a.length)];
	if (used.includes(res)) {
		while (used.includes(res)) {
			res = a[Math.floor(Math.random() * a.length)];
		}
		used.push(res);
	} else {
		used.push(res);
	}
	return res;
}

function plrngsent() {
	var rng = Math.floor(Math.random() * 6);
	var res;
	if (used.includes(rng)) {
		while (used.includes(rng)) {
			rng = Math.floor(Math.random() * 6);
		}
		used.push(rng);
	} else {
		used.push(rng);
	}
	if (rng === 0) {
		res = 'It has a famous ' + pthG() + '. ';
	} else if (rng === 1) {
		res = 'It was once ' + padG() + ', but it has recently changed. ';
	} else if (rng === 2) {
		res = 'Those who live there are known for being ' + adG() + '. ';
	} else if (rng === 3) {
		res = "It's widely known for its " + pgoG() + '. ';
	} else if (rng === 4) {
		res =
			'Its entire population is engaged in a conspiracy to ' + pcoG() + '. ';
	} else if (rng === 5) {
		res = 'It was once the site of ' + phiG() + '. ';
	} else {
		res = 'Every year, its people ' + panG() + '. ';
	}
	return res;
}

function pthG() {
	var a = [
		'monument to a historical figure',
		'hot spring',
		'pastry shop',
		'party scene',
		"celebrity's home",
		'inn in which great heroes once met',
		'mine from which vast quantities of mithral are excavated',
		'grove of many fruit trees',
		'pit that is said to lead directly to the underworld',
		'system of local government',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function pgoG() {
	var a = [
		'pastries',
		'ore',
		'glasswork',
		'enchanted items',
		'weapons',
		'lumber',
		'furniture',
		'waste products',
		'fine dining',
		'tourist attractions',
		'crops',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function pcoG() {
	var a = [
		'ensure that everyone who visits has a nice time',
		'ensure that everyone who visits has a terrible time',
		'revive the Dark Lord',
		'find a great hero to slay the Dark Lord',
		'keep property prices low',
		'keep property prices high',
		'scam visitors out of their money',
		'trick visitors into taking more money with them when they leave',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function phiG() {
	var a = [
		'the birth of a great ruler',
		'the death of a great ruler',
		'a terrible battle in which thousands died',
		'the founding of a nation',
		'the founding of a religion',
		'the discovery of a new method of frying food',
		'the discovery of a new method of forging metal',
		'the discovery of a new method of sewing',
		'the creation of a new art form',
		'the creation of a new alloy of metals',
		'the creation of a new type of magic',
		'the casting of a great spell',
		'the casting of a terrible spell',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function panG() {
	var a = [
		'celebrate a festival of lights',
		'celebrate a festival of darkness',
		'have a theologically distinct winter solstice festival',
		'have a festival for the longest day of the year',
		'celebrate the day of harvest',
		'celebrate the first day of spring',
		'celebrate a festival of winds',
		'pray for a full day for good harvest',
		'have a grand feast to which all are invited',
		'sacrifice a goat to the gods',
		'have a lively series of games to decide who gets to lead',
	];
	return a[Math.floor(Math.random() * a.length)];
}

// thing gen functions

function toneG() {
	var a = [
		'Dawn',
		'Dusk',
		'Night',
		'Day',
		'Flame',
		'Freeze',
		'Frost',
		'Heat',
		'Steel',
		'Iron',
		'Gold',
		'Silver',
		'Cobalt',
		'Wood',
		'Stone',
		'Air',
		'Wind',
		'Water',
		'Torrent',
		'Earth',
		'Fire',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function ttwoG() {
	var a = [
		'moon',
		'star',
		'blade',
		'fang',
		'claw',
		'tooth',
		'horn',
		'tear',
		'heart',
		'soul',
		'steel',
		'burn',
		'cast',
		'forge',
		'run',
		'skin',
		'blood',
		'bone',
		'beast',
		'turn',
		'twist',
		'bend',
		'break',
		'crush',
		'grind',
		'cut',
		'rend',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tadG() {
	var a = [
		'hardened',
		'sharp',
		'ancient',
		'fresh',
		'precise',
		'keen',
		'dull',
		'blunt',
		'jagged',
		'smooth',
		'worn',
		'broken',
		'cracked',
		'perfect',
		'flawless',
		'recent',
		'legendary',
		'mythical',
		'magical',
		'enchanted',
		'cursed',
		'holy',
		'unholy',
		'mysterious',
		'secret',
		'hidden',
		'lost',
		'forgotten',
		'forbidden',
	];

	var res = a[Math.floor(Math.random() * a.length)];
	if (used.includes(res)) {
		while (used.includes(res)) {
			res = a[Math.floor(Math.random() * a.length)];
		}
		used.push(res);
	} else {
		used.push(res);
	}
	return res;
}

function ttypeG() {
	var a = [
		'sword',
		'axe',
		'dagger',
		'spear',
		'bow',
		'staff',
		'wand',
		'mace',
		'hammer',
		'flail',
		'whip',
		'shield',
		'suit of armor',
		'helmet',
		'gauntlet',
		'glove',
		'bracer',
		'pair of boots',
		'pair of greaves',
		'chain shirt',
		'saw',
		'knife',
		'trident',
		'halberd',
		'lance',
		'crossbow',
		'sling',
		'club',
		'rod',
		'scepter',
		'orb',
		'tome',
		'stone',
		'ring',
		'amulet',
		'necklace',
		'crown',
		'diadem',
		'circlet',
		'tiara',
		'earring',
		'brooch',
		'pin',
		'cloak',
		'cape',
		'robe',
		'vest',
		'tunic',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function trepG() {
	var a = [
		'its use in a great battle',
		'its use by a great hero',
		'its use by a great evil',
		'the terrible deeds it has been party to',
		'being supposedly destroyed for its power',
		"not being its creator's best work",
		'being an early, unpolished work by its creator',
		"being its creator's first and best work",
		"being its creator's magnum opus",
		'ending the lives of many',
		'saving the lives of many',
		'forever changing the lives of many',
		'breaking the hearts of many',
		'sparking a war for its possession',
		'sparking a war for its destruction',
		'destroying those unworthy to use it',
		'its role in an ancient prophecy',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tmatG() {
	var a = [
		'mithral',
		'steel',
		'iron',
		'bronze',
		'gold',
		'silver',
		'diamond',
		'wood',
		'marble',
		'granite',
		'ruby',
		'emerald',
		'sapphire',
		'topaz',
		'bone',
		'glass',
		'enchanted water',
		'enchanted fire',
		'enchanted air',
		'amber',
		'dead grass',
		'flesh',
		'crystal',
		'quartz',
		'magical energy',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tcoG() {
	var a = [
		'the sudden death of its creator',
		'the sudden imprisonment of its creator',
		'the sudden destruction of the forge in which it was created',
		'the methods used to create it being outlawed',
		'an attack by demons',
		'an attack by forces of heaven',
		'an attack by hordes of undead',
		'an attack by a dragon',
		'a group attempting to steal it and use it for an unholy ritual',
		'a thief stealing it, who then completed it themselves',
		'a force ten thousand strong coming to destroy it',
		'someone trying to destroy it for their personal beliefs',
		'someone trying to destroy it for their religious beliefs',
		'someone trying to destroy it for their loyalty to an organization',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tpoG() {
	var a = [
		'permanently destroy a certain otherwise-immortal being',
		'wound an otherwise-invincible being',
		'tempt anyone who owns it into evil acts',
		'convince anyone who owns it to do unequicoval good',
		"slowly drain its user's life force",
		'transfer the life force of others into its user',
		'make its owner immortal',
		"make its owner's loved ones immortal",
		'control fire',
		'control water',
		'control air currents',
		'control stones of all kinds',
		'control the minds of others',
		'change the laws of reality',
		'allow its user to predict the future',
		'control the flow of time',
		'allow its user to travel through time',
		'allow its user to travel into other worlds',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tevG() {
	var a = [
		'kill a god',
		'kill a king',
		'kill a truly good person',
		'kill a truly evil person',
		'slay a great evil',
		'slay a great good',
		'kill its owner',
		'justify great atrocities',
		'create a new religion',
		'destroy the world or save it',
		'save the world',
		'destroy the world',
		'topple a political system',
		"change a truly good person's heart",
		"change a truly evil person's heart",
		'save a village',
		'save a person important to its creator',
		'save a person important to its owner',
		'save a city',
		'save a religion',
		'save a god',
		'save a king',
		'save its owner',
		"win the heart of its owner's true love",
	];
	return a[Math.floor(Math.random() * a.length)];
}

function tusG() {
	var a = [
		'slayed a dragon',
		'slayed an archdemon',
		'slayed an archangel',
		'served a just king',
		'served an unjust king',
		'dethroned a monarch',
		'served a good god',
		'served an evil god',
		'worked for a shadowy organization',
		'saved a town',
		'destroyed a town',
		'slipped through the cracks of reality and disappeared forever, leaving it behind',
		'saved the world from sure destruction',
		'saved the world from an extraplanar invasion',
		'saved the world from the concept of entropy',
		'cast a spell so powerful it changed the world',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function thiG() {
	var a = [
		'was blessed by an unknown presence',
		'was cursed by an unknown presence',
		'had great power bestowed upon it by a divine being',
		'had great power bestowed upon it by a demonic being',
		'was brought to a monarch as a gift, and it was rejected',
		'was brought to a god as an offering, and it was rejected',
		'was brought to a demon as an offering, and it was rejected',
		'was brought to a monarch as a gift, and it was accepted',
		'was brought to a god as an offering, and it was accepted',
		'was brought to a demon as an offering, and it was accepted',
		'was given as a wedding gift',
		'was given as a birthday gift',
		'was given as an anniversary gift',
		'was given to win the heart of another',
		'was given to break the heart of another',
		'caused a great storm',
		'caused a massive earthquake',
		'caused a tsunami',
		'caused a wildfire',
		'caused a volcanic eruption',
	];
	return a[Math.floor(Math.random() * a.length)];
}

function trngsent() {
	var rng = Math.floor(Math.random() * 6);
	var res;
	if (used.includes(rng)) {
		while (used.includes(rng)) {
			rng = Math.floor(Math.random() * 6);
		}
		used.push(rng);
	} else {
		used.push(rng);
	}
	if (rng === 0) {
		res = "It's made of " + tmatG() + ', with ' + tmatG() + ' accents. ';
	} else if (rng === 1) {
		res =
			'Its creation was complicated by ' +
			tcoG() +
			', but despite that, it exists. ';
	} else if (rng === 2) {
		res = 'One must be ' + adG() + ' to be worthy to use it. ';
	} else if (rng === 3) {
		res = 'Its secret power is to ' + tpoG() + '. ';
	} else if (rng === 4) {
		res = 'An oracle once prophesied it would be used to ' + tevG() + '. ';
	} else if (rng === 5) {
		res = 'A past user once ' + tusG() + '. ';
	} else {
		res = 'When it was created, it ' + thiG() + '. ';
	}
	return res;
}

function newGen() {
	var desc;
	if (document.getElementById('person').checked) {
		desc =
			firstName() +
			' ' +
			lastName() +
			', ' +
			buG() +
			', ' +
			heG() +
			' ' +
			joG() +
			', is well-known among their peers for being ' +
			adG() +
			' and ' +
			adG() +
			'. ' +
			rngsent() +
			rngsent() +
			rngsent();
		used = [];
	} else if (document.getElementById('place').checked) {
		desc =
			poneG() +
			ptwoG() +
			', a ' +
			ptypeG() +
			', is a place that ' +
			prepG() +
			". It's widely known for being " +
			padG() +
			' and ' +
			padG() +
			'. ' +
			plrngsent() +
			plrngsent() +
			plrngsent();
		used = [];
	} else if (document.getElementById('thing').checked) {
		desc =
			toneG() +
			ttwoG() +
			', a ' +
			tadG() +
			', ' +
			tadG() +
			' ' +
			ttypeG() +
			', is known for ' +
			trepG() +
			'. ' +
			trngsent() +
			trngsent() +
			trngsent();
		used = [];
	} else {
		desc = 'No boxes checked. Check Person, Place, or Thing to generate!';
	}
	return desc;
}

const GenerateContainer = (props) => {
	const boxCont = newGen();

	const [content, setContent] = useState(boxCont); // Default content
	const handleSave = () => {
		props.onSave(content);
	};
	const handleDelete = () => {
		//deletion code here
		console.log('delete attempt');
	};
	console.log(content);
	return (
		<div className={styles.singlegeneratecontainer}>
			<div className={styles.generatecontainer}>{boxCont}</div>
			<button className={styles.savegeneratebutton} onClick={handleSave}>
				<div className={styles.save}>Save</div>
				<img
					className={styles.materialSymbolssaveIcon}
					alt=''
					src='/materialsymbolssave.svg'
				/>
			</button>
			<button className={styles.deletebutton} onClick={handleDelete}>
				<img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
			</button>
		</div>
	);
};

export default GenerateContainer;
