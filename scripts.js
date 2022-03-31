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

    for(let i=0;i<y.length;i++){
        if(x==y[i]){
            document.getElementById(x).style.borderColor="green";
        }else{
            document.getElementById(y[i]).style.borderColor="white";
        }
    }
}
