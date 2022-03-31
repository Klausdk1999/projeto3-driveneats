let mainPlate="";
let mainDrink="";
let mainDessert="";
const plates=["pizza","frango","lanche","sushi","batata"];
const platesV=['34.9','24.9','19.9','19.9','14.9'];
const drinks=["coca","guarana","agua","suco"];
const drinksV=['7.9','4.9','6.9','4.9'];
const desserts=["brigadeiro","pizza-doce","bolo"];
const dessertsV=['4.9','29.9','7.9'];

//select recebe x=id do produto e y=tipo do produto
function select(x,y){
    if(y==plates){
        mainPlate=String(x);
    }
    if(y==drinks){
        mainDrink=String(x);
    }
    if(y==desserts){
        mainDessert=String(x);
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
//order verifica se os 3 produtos foram escolhidos para modificar o botão order
function order(){
    if(mainPlate!=null && mainDrink!=null && mainDessert!=null ){
        document.getElementById("orderTxt").style.display="none";
        document.getElementById("closeOrder").style.display="block";
        document.getElementById("order").style.backgroundColor="green";
    }
}

let t1=encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: ");
let t2=encodeURIComponent("\n- Bebida: ");
let t3=encodeURIComponent("\n- Sobremesa: ");
let t4=encodeURIComponent("\nTotal: ");

function whatsapp(){
    window.open("https://wa.me/+5547997709595?text="+t1+mainPlate+t2+mainDrink+t3+mainDessert+t4+total);
}
