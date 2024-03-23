let nomeHeroi = "Steve"
let expHeroi = 2001;
let rankHeroi = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante",];

switch(true){
    case (expHeroi <=1000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[0])
        break;
    case (expHeroi >= 1001 && expHeroi <=2000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[1])
        break;
    case (expHeroi >= 2001 && expHeroi <= 5000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[2])
        break;
    case (expHeroi >= 5001 && expHeroi <= 7000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[3])
        break;
    case (expHeroi >= 7001 && expHeroi <= 8000 ):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[4])
        break;
    case (expHeroi >= 8001 && expHeroi <= 9000 ):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[5])
        break;
    case (expHeroi >= 9001 && expHeroi <= 10000 ):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[6])
        break;
    case (expHeroi >= 10001):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[7])
        break; 
}