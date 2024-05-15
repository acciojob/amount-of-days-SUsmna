//your JS code here. If required.

function daysofYears(year){
	if((year%4===0 && year%100 !==0)||(year%400===0)){
		return 366;
	}else{
		return 365;
	}
}

console.log(daysofYears(2022));
console.log(daysofYears(2024));
console.log(daysofYears(1900));
console.log(daysofYears(2000));