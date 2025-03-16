// Cory Wolf 3/16/25

const myName = "Cory Wolf";
const para1 = document.getElementById("p1");
para1.textContent = myName;

const n1 = 5;
const n2 = 8;
const numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

const numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

const myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

const myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

const ageCompare = 24 <= numberMult;
document.getElementById("p6").textContent = ageCompare;