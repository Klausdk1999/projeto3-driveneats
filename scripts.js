let mainPlate;
let mainDrink;
let mainDessert;
const plates=["pizza","frango","lanche","sushi","batata"];
const drinks=["coca","guarana","agua","suco"];
const desserts=["brigadeiro","pizza-doce","bolo"];

//select recebe x=id do produto e y=tipo do produto
function select(x,y){
    if(y==plates){
        mainPlate=x;
    }
    if(y==drinks){
        mainDrink=x;
    }
    if(y==desserts){
        mainDessert=x;
    }
    let z="i"+x;
    for(let j=0;j<y.length;j++){
        if(x==y[j]){
            document.getElementById(x).style.borderColor="green";
            document.getElementById(z).style.display="block";
        }else{
            document.getElementById(y[j]).style.borderColor="white";
            document.getElementById("i"+y[j]).style.display="none";
        }
    }
    order();
}
function order(){
    if(mainPlate!=null && mainDrink!=null && mainDessert!=null ){
        document.getElementById("orderTxt").style.display="none";
        document.getElementById("closeOrder").style.display="block";
        document.getElementById("order").style.backgroundColor="green";
    }
}
