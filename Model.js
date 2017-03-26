function diceRoll() {
    alert("This is Steven's change!");
}


function animalCompanion(name,str,dex,con,int,wis,cha){
	this.name = name;
	 
	this.level = 0;
	this.xp = 0;
	
	this.str = str;
	this.dex = dex;
	this.con = con;
	this.int = int;
	this.wis = wis;
	this.cha = cha;
	
	this.ac;
	this.touchAc;
	this.flatFootAc;
	
	this.rangeAttack;
	this.meleeAttack;
	
	this.create = function(){
		return "ass"
	}
	this.create();
}

function bat(name){
	animalCompanion.call(this,name,17,15,13,2,14,6);
}
