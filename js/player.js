let player;

//Setting the Player Object//
function Player(classType,health,damage,speed,attack,defense,arrows) {
	this.classType = classType;
	this.health = health;
	this.damage=damage;
	this.speed=speed;
	this.attack=attack;
	this.defense=defense;
	this.arrows=arrows;
}

let PlayerMoves = {
	calcAttack: function() {
		//who attacks first?
		let getPlayerSpeed = player.speed;
		let getEnemySpeed = enemy.speed;

		//player attacks
	let playerAttack = function(){
		let calcBaseDamage;
		if(player.arrows > 0){
			calcBaseDamage = player.attack * player.damage * ((player.arrows/4)/10);
		} else {
			calcBaseDamage = player.attack * player.damage/100;
		}

		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;
		let numberOfHits = Math.floor(Math.random() *Math.floor(player.health/10)/2) +1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
	}
	//enemy attack
	let enemyAttack = function(){
		let calcBaseDamage;
		if(enemy.arrows > 0){
			calcBaseDamage = enemy.attack * enemy.damage * ((enemy.arrows/4)/10);
		}  else {
			calcBaseDamage = enemy.attack * enemy.damage/100;
		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;
		let numberOfHits = Math.floor(Math.random() *Math.floor(enemy.health/10)/2) +1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
	}
	//gets player/enemy health to change later
	let getPlayerHealth = document.querySelector('.health-player');
	let getEnemyHealth = document.querySelector('.enemy-player');

	//initiate attacks
	if(getPlayerSpeed >= getEnemySpeed) {
		let playerAttackValues = playerAttack();
		let totalDamage = playerAttackValues[0] * playerAttackValues[1];
		enemy.health = enemy.health - totalDamage;
		alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

		if(enemy.health<=0){
			alert("You win! Refresh browser to play again!");
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			getEnemyHealth.innerHTML = 'Health: 0';
		} else{
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			//enemy attacks
			let enemyAttackValues = enemyAttack();
			let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
			player.health = player.health - totalDamage;
			alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
			if(player.health<=0){
			alert("You loose! Refresh browser to play again!");
			getPlayerHealth.innerHTML = 'Health: 0';
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			
		}
			else {
				getPlayerHealth.innerHTML = 'Health: ' + player.health;
			}
		}
	} else if(getEnemySpeed >= getPlayerSpeed){
		let enemyAttackValues = enemyAttack();
		let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		player.health = player.health - totalDamage;
		alert("You were hit with " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
		if(player.health<=0){
			alert("You lose! Refresh browser to play again!");
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			getPlayerHealth.innerHTML = 'Health: 0';
		} else {
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			let playerAttackValues = playerAttack();
			let totalDamage = playerAttackValues[0] * playerAttackValues[1];
			enemy.health = enemy.health - totalDamage;
			alert("You hit" + playerttackValues[0] + " damage " + playerAttackValues[1] + " times.");
			if(enemy.health<=0){
			alert("You win! Refresh browser to play again!");
			getEnemyHealth.innerHTML = 'Health: 0';
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			
		}
			else {
				getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			}
		}
	}
}
}
