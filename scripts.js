let mainPlate;
let mainDrink;
let mainDessert;
let pPlate;
let pDrink;
let pDessert;
const plates=["pizza","frango","lanche","sushi","batata"];
const platesV=["34.9","24.9","19.9","19.9","14.9"];
const drinks=["coca","guarana","suco","agua"];
const drinksV=["7.9","4.9","6.9","4.9"];
const desserts=["brigadeiro","pizza-doce","bolo"];
const dessertsV=["4.9","29.9","7.9"];

//select recebe x=id do produto e y=tipo do produto
function select(x,y){
    if(y==plates && mainPlate==String(x)){
        mainPlate=null;
        document.getElementById(x).style.borderColor="white";
        document.getElementById("i"+x).style.display="none";
        order();
        return;
    }
    if(y==drinks && mainDrink==String(x)){
        mainDrink=null;
        document.getElementById(x).style.borderColor="white";
        document.getElementById("i"+x).style.display="none";
        order();
        return;
    }
    if(y==desserts && mainDessert==String(x)){
        mainDessert=null;
        document.getElementById(x).style.borderColor="white";
        document.getElementById("i"+x).style.display="none";
        order();
        return;
    }

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
            if(y==plates){
                pPlate=Number(platesV[j]);
            }
            if(y==drinks){
                pDrink=Number(drinksV[j]);
            }
            if(y==desserts){
                pDessert=Number(dessertsV[j]);
            }
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
    }else{
        document.getElementById("orderTxt").style.display="block";
        document.getElementById("closeOrder").style.display="none";
        document.getElementById("order").style.backgroundColor="#e5e5e5";
    }
}

let t1=encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: ");
let t2=encodeURIComponent("\n- Bebida: ");
let t3=encodeURIComponent("\n- Sobremesa: ");
let t4=encodeURIComponent("\nTotal: ");
let t5=encodeURIComponent("\n\nNome: ");
let t6=encodeURIComponent("\nEndereço: ");

let total=(pPlate+pDrink+pDessert);
total=total.toFixed(2);

function confirmScreen(){
    let total=(pPlate+pDrink+pDessert);
    total=total.toFixed(2);
    document.getElementById("confirmation").style.display="block";
    document.getElementById("txtConfirmation1").innerHTML=mainPlate;
    document.getElementById("txtConfirmation2").innerHTML=mainDrink;
    document.getElementById("txtConfirmation3").innerHTML=mainDessert;
    document.getElementById("txtConfirmation4").innerHTML="R$ "+total;
    document.getElementById("txtConfirmation5").innerHTML=pPlate; 
    document.getElementById("txtConfirmation6").innerHTML=pDrink; 
    document.getElementById("txtConfirmation7").innerHTML=pDessert; 
}
function cancel(){
    document.getElementById("confirmation").style.display="none";
}

function whatsapp(){
    let name=prompt("Qual o seu nome?");
    name=encodeURIComponent(name);
    let address=prompt("Qual o endereço para entrega?");
    address=encodeURIComponent(address);
    let total=(pPlate+pDrink+pDessert);
    total=total.toFixed(2);
    total=encodeURIComponent(total);
    //confirm();
    window.open("https://wa.me/+5547997709595?text="+t1+mainPlate+t2+mainDrink+t3+mainDessert+t4+total+t5+name+t6+address);
}
