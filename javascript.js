//muuttujat: let tai const;

function laskutehtava(ekaNumero, tokaNumero){
  return (ekaNumero + tokaNumero);
} 

 console.log("hello");
  let ika = 17;
  
  ika = ika + 1;

console.log(ika)

const pii=3.14;

console.log('piin likiarvo ' + pii);

const etunimi='Eetu'
const sukunimi= 'Tuominen'
const syntymavuosi='2003'
const lahtelainen=true; //boolean
let naarittelematon; //undefined 

console.log("syntymävuoden tyyppi:" + typeof syntymävuosi);
console.log("Nimen tyyppi:" + typeof etunimi);
console.log("lahtelaisuuden tyyppi:" + typeof lahtelainen);

console.log('nimeni on ' + etunimi +' ' +sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

const henkilotiedot=(`Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`);

console.log(henkilotiedot)

console.log(`henkilotiedot pituus on: ${henkilotiedot.lenght}`);

console.log(henkilotiedot.toUpperCase());

console.log(henkilotiedot.substring(0, 9));

console.log(henkilotiedot.substring(0,9).toUpperCase())

console.log(henkilotiedot.split(' ')[2]);
console.log(henkilotiedot.split(' '));
const autoja = ['hyndai', 'toyota', 'volvo'];

autoja[3]='BMW';

autoja.push ('tesla');

autoja.unshift('mersu');

autoja.pop();

console.log(autoja);

const opiskelija = {
  etunimi: 'Eetu',
  sukunimi: 'Tuominen',
  syntymävuosi: '2003',
 koulutus: ['insinööri', 'maisteri', 'opettajan pätevyys'],
  osoite: {
  katu: 'Strålberginkatu 8C',
  postinumero:15810,
  kunta: 'lahti'
  }
 }
console.log(opiskelija.etunimi)


const laksyt = [
    {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
    },
    {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
    },
    {
    id: 3,
    tehtava: 'Ohjelmointi, JS',
    tehty: false
    },
];

for(let i=0; i <= 10; i++){
  console.log(`iternaatio luku on: ${i}`);
}
let i = 0;
while(i<=10){
  console.log(`WHile loopiniternaatio luku on: ${i}`);
  i++;
}
for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksytTehtava = laksyt.map(function(laksy){
  return laksy.tehtava;
  
});

  console.log(laksytTehtava);

  console.log('------------');

const tehtavaTehty = laksyt.filter(function(laksy){
  return laksy.tehty ===false;
});
console.log(tehtavaTehty);

const numero = 6;
const nimi ="jorma";

if(numero < 18){
  console.log('Olet alaikäinen tai jorma ')
}else if(numero === 18){
  console.log('Olet juuri täyttänyt 18!')
}
else{
console.log('Olet täysi-ikäinen');
}

const access= numero > 18 ? "granted" : "denied";

console.log(access);

function laskutehtava(){

} 
console.log(laskutehtava(5, 2));

const kurssinosat = document.querySelectorAll(".sisalto");

kurssinOsat.forEach((osa)=>console.log));

const ul = document.querySelector(".kurssi");
const kurssinappi = document.querySelector(".kurssinappi");
const nimiSisalto = document.querySelector("#nimi");
const asiaSisalto = document.querySelector(".tieto");
const virhe = document.querySelector(".virheilmoitus");
const viesti = document.querySelector("#tiedot");

kurssinappi.addEventListener('click', e=>{
    e.preventDefault();

  if(nimiSisalto.value === ""|| asiaSisalto.value === ""){
   virhe.classList.add("virhe");
   virhe.innerHTML= "Täytä kaikki kentät";
   kurssinappi.style.background = `red`;
   kurssinappi.value= `Virhe, en lisännyt tietoa,`;
   setTimeout(()=> virhe.remove(), 3000);
   setTimeout(()=> kurssinappistyle.background = 'rgb(51, 44, 44)'(), 3000);
  }else{
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(`${nimiSisalto.value}:
  ${asiaSisalto.value}`));

  viesti.appendChild(li);

  nimiSisalto.value = ``;
  asiaSisalto.value = ``;
});

const merkitseValmiit = document.querySelector('.merkinta');

merkitseValmiit.addEventListener('click', e => {
  e.preventDefault();
  
  if(document.querySelector('#tehta').checked){
  ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }else{

  });
  if(document.querySelector('#tehta').checked){
  ul.children[1].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }
  });
  if(document.querySelector('#tehta').checked){
  ul.children[2].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }
  });
  });
  if(document.querySelector('#tehta').checked){
  ul.children[3].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }