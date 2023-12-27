const btn = document.querySelector("button");
btn.addEventListener("click", draw) ;

console.dir(btn);

function draw() {
  const rand = 1 + Math.floor(Math.random()*7);

  const result = document.getElementById("result");

  switch(true){
    case rand > 0 && rand <=1:
      result.textContent=  "1.Château Blanc";
      break;
   case rand > 1 && rand <=2:
      result.textContent=  "2.ELISA chocolates";
      break;
   case rand > 2 && rand <=3:
      result.textContent= "3.The Chocolate Line";
      break; 
   case rand > 3 && rand <=4:
        result.textContent= "4.Chocolatier & Confiserie Burie";
      break; 
   case rand > 4 && rand <=5:
        result.textContent= "5.Neuhaus Chocolates";
      break;
   case rand > 5 && rand <=6:
        result.textContent= "6.Günther Watté";
      break; 
   case rand > 6 && rand <=7:
        result.textContent= "7.Chocolatier Del Rey";
      break;                               
  }


}

