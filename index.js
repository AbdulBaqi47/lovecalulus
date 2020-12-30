document.querySelector("button").addEventListener("click",precent);


function precent(){
	var percentage = (Math.random() * 100);
	var per = Math.floor(percentage) + 1;
	document.querySelector(".output").innerHTML = per + "%";
	if(per>=70 && per<=100){
   document.querySelector(".output1").innerHTML = "You Have a best life-Partner";
}
else if(per>=30 && per<70){
   document.querySelector(".output2").innerHTML = "there is a doubt in your relation";
}
else if(per>=1 && per<30){
    document.querySelector(".output3").innerHTML ="sorry apka bhe katay ga";
}
	
}









