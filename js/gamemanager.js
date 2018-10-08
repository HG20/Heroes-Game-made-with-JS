let GameManager = {
	setGameStart: function(classType) {
		this.resetPlayer(classType);
		this.setPreFight();
	},

	resetPlayer: function(classType) {
		switch(classType){
			case "Thunderbird":
			player = new Player(classType, 60, 20, 12, 10, 8, 0);
			break;
			case "LizardWarrior":
			player = new Player(classType, 20, 10, 7, 6, 5, 14);
			break;
			case "Scorpicore":
			player = new Player(classType, 80, 25, 10, 12, 9, 0);
			break;
			case "Cerberus":
			player = new Player(classType, 25, 12, 8, 8, 6, 0);
			break;
			case "Medusa":
			player = new Player(classType, 35, 15, 6, 10, 8, 4);
			break;
			case "Behemoth":
			player = new Player(classType, 300, 50, 9, 16, 16, 0);
			break;
			case "Wyvern":
			player = new Player(classType, 70, 30, 8, 13, 8, 0);
			break;
			case "Minotaur":
			player = new Player(classType, 50, 20, 7, 11, 10, 0);
			break;
			
		}

		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="images/' + 
		classType.toLowerCase() + '.jpg" class="image-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health +
		'</p><p>Damage: ' + player.damage + '</p><p>Speed: ' + player.speed + '</p><p>Attack: ' + 
		player.attack + '</p><p>Defense: ' + player.defense + '</p><p>Arrows: ' + player.arrows + '</p></div>';
		
	},

	setPreFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		
		getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy</a>';
		

	},

	setFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getEnemy = document.querySelector(".enemy");

		//Create enemy
		let enemy00 = new Enemy("LizardWarrior", 20, 10, 7, 6, 5, 14 );
		let enemy01 = new Enemy("Scorpicore", 80, 25, 10, 12, 9, 0);
		let enemy02 = new Enemy("Cerberus", 25, 12, 8, 8, 6, 0);
		let enemy03 = new Enemy("Medusa", 35, 15, 6, 10, 8, 4);
		let enemy04 = new Enemy("Behemoth", 300, 50, 9, 16, 16, 0);
		let enemy05 = new Enemy("Wyvern", 70, 30, 8, 13, 8, 0);
		let enemy06 = new Enemy("Minotaur", 50, 20, 7, 11, 10, 0);
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(7));

		
			switch(chooseRandomEnemy) {
				case 0:
				enemy = enemy00;
				break;
				case 1:
				enemy = enemy01;
				break;
				case 2:
				enemy = enemy02;
				break;
				case 3:
				enemy = enemy03;
				break;
				case 4:
				enemy = enemy04;
				break;
				case 5:
				enemy = enemy05;
				break;
				case 6:
				enemy = enemy06;
				break;
			}

			getHeader.innerHTML = '<p>Task: Choose your move!</p> ';
			getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
			getEnemy.innerHTML = '<img src="images/' +  enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="image-avatar"><div><h3>' + enemy.enemyType
			+ '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Damage: ' + enemy.damage + '</p><p>Speed: ' + enemy.speed + '</p><p>Attack: ' + 
		enemy.attack + '</p><p>Defense: ' + enemy.defense + '</p><p>Arrows: ' + enemy.arrows + '</p></div>';
	}
	
}