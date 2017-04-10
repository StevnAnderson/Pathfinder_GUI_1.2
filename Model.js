function diceRoll() {
    alert("This is Steven's change!");
}


/*
parameters: 
int charaters-class: 0 = druid, 1 = ranger, 2 = sorcerer, 3 = wizard
int charater-level

returns: animal companion object
*/
function AnimalCompanion(lvl){
	this.HD;
	this.BAB;
	this.fort;
	this.ref;
	this.will;
	this.numbOfSkills;
	this.numbOfFeats;
	this.nateralArmorBonus;
	this.strOrDexBonus;
	this.bonusTrick;
	this.bonusFeats = new Array;
	
	this.generate = function(){
		
		if(lvl > 0){
		
			switch(lvl){
				case 1:
					this.HD = 2;
					this.BAB = 1;
					this.fort = 3;
					this.ref = 3;
					this.will = 0;
					this.numbOfSkills = 2;
					this.numbOfFeats = 1;
					this.nateralArmorBonus = 0;
					this.strOrDexBonus = 0;
					this.bonusTrick = 1;
					this.bonusFeats.push("link")
					this.bonusFeats.push("share spells")
					break;
				case 2:
					this.HD = 3;
					this.BAB = 2;
					this.fort = 3;
					this.ref = 3;
					this.will = 1;
					this.numbOfSkills = 3;
					this.numbOfFeats = 2;
					this.nateralArmorBonus = 0;
					this.strOrDexBonus = 0;
					this.bonusTrick = 1;
					this.bonusFeats.push("link")
					this.bonusFeats.push("share spells")
					break;
				case 3:
					this.HD = 3;
					this.BAB = 2;
					this.fort = 3;
					this.ref = 3;
					this.will = 1;
					this.numbOfSkills = 3;
					this.numbOfFeats = 2;
					this.nateralArmorBonus = 2;
					this.strOrDexBonus = 1;
					this.bonusTrick = 2;
					this.bonusFeats.push("link")
					this.bonusFeats.push("share spells")
					this.bonusFeats.push("evasion")
					break;
			}
		}
	}
	this.generate();
}

function Ape(lvl){
	AnimalCompanion.call(this,lvl);
	this.size;
	this.AC = 10;
	this.str;
	this.dex;
	this.con;
	this.int;
	this.wis;
	this.cha;
	
	this.generate = function(){
		if(lvl < 4){
			this.size = "medium";
			this.AC += this.nateralArmorBonus + 1;
			this.str = 13;
			this.dex = 17;
			this.con = 10;
			this.int = 2;
			this.wis = 12;
			this.cha = 7;
			
			this.attack = function(){return Math.ceil((Math.random()*20) + this.BAB)}
			this.damage = function(){return Math.ceil((Math.random()*4) + ((this.str -10)/2))}
		}
		else{
			this.size = "large";
			this.AC += this.nateralArmorBonus + 2;
			this.str = 21;
			this.dex = 15;
			this.con = 12;
			this.int = 2;
			this.wis = 12;
			this.cha = 7;
			
			this.attack = function(){return Math.ceil((Math.random()*20) + this.BAB)}
			this.damage = function(){return Math.ceil((Math.random()*6) + ((this.str -10)/2))}
		}
	}
	this.generate();
}
/*
parameters: 
int charaters-class: 0 = druid, 1 = ranger, 2 = sorcerer, 3 = wizard
int charater-level

returns: animal companion object
*/
function AnimalCompanionGenerator(cls,lvl){
	switch(cls){
		case 0:
			return new Ape(lvl);
			break;
	}
}
