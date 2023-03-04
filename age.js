function calculer(){
    let DT=new Date()
    let a=document.getElementById("D").value;
     
    let an=a.substr(0,4);
    an=Number(an);
    let age=DT.getFullYear() - an;
    document.getElementById('age').value=age;

    janniv=a.substr(8,2);
    manniv=a.substr(5,2);
    jactu=DT.getDate();
    mactu=DT.getMonth()+1;
    if (Number(manniv)>mactu) {ananniv=DT.getFullYear();}
    else if(Number(manniv)==mactu &&Number(janniv)>=jactu)
    {
        ananniv=DT.getFullYear();
    }
    else
        ananniv=DT.getFullYear()+1;
    let danniv=new Date(ananniv+'-'+manniv+'-'+janniv);
    document.getElementById('reste').value=Math.round((danniv.getTime()-DT.getTime())/(1000*60*60*24));
}
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const Telephone = document.querySelector("#email");

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = Telephone.value.trim();
    // Username verify
    if (userValue === "") {
        let message ="Username ne peut pas être vide";
        setError(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Username doit commencer par une lettre";
        setError(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            setError(username,message)
        } else {
            setSuccess(username);
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
    }
    if (phoneValue === "") {
      let message = "phone ne peut pas être vide";
      setError(Telephone, message);
    } else if (!Telephone_verify(phoneValue)) {
      let message = "phone non valide";
      setError(Telephone, message);
    } else {
      setSuccess(Telephone);
    }

}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
};

