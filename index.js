//------------------------------------------------------ DEBUT-LOUM ------------------------------------------------------
// Navbar
  // navbar
  const navEl = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
      navEl.classList.add('navbar-scrolled');
    }else if (window.scrollY < 56) {
      navEl.classList.remove('navbar-scrolled');
    }
  })

// Animation texte Section Banner
var aText = new Array(
    "NIAFAY, c’est simple, c’est facile, c’est rapide"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("titre");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + ".";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }  
    typewriter();


 //------------------------------------------------------ FIN-LOUM ------------------------------------------------------


 //------------------------------------------------------ DEBUT-MAMA ------------------------------------------------------
// slide 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        margin:10,
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

// loacal Storage
details = [];
getData();

function getData() {
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};

// Ajouter les données 
const ajouter = document.getElementById("enregistrez");
ajouter.addEventListener('click', (e) => {
e.preventDefault();
let PrenomNom = document.getElementById("FullName");
let ServiceProfessionel= document.getElementById("serviceProfessionel");
let ServiceJournalier= document.getElementById("serviceJournalier");
let Email = document.getElementById("email");
let Telephone = document.getElementById("telephone");
let Address = document.getElementById("address");

let data = {
    PrenomNom: PrenomNom.value,
    ServiceProfessionel: ServiceProfessionel.value,
    ServiceJournalier: ServiceJournalier.value,
    Email: Email.value,
    Telephone: Telephone.value,
    Address: Address.value,
};
details.push(data);
Swal.fire('Votre réservation a été prise en compte')
setData();

PrenomNom.value = "";
ServiceProfessionel.value = "";
ServiceJournalier.value = "";
Email.value = "";
Telephone.value = "";
Address.value = "";

})
// Demande de devis
const devisForm = document.querySelector('#devis-form');
const prixParHeure = 50; // Prix par heure de service

devisForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const surface = parseInt(document.querySelector('#surface').value);
  const duree = parseInt(document.querySelector('#duree').value);

  const prixTotal = surface * prixParHeure * duree;

  document.querySelector('#prix').textContent = `Coût estimé : ${prixTotal} €`;
});
