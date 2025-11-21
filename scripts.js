const container = document.getElementById("container");
const conferenceList = document.getElementById("conferencelist");
const receptionList = document.getElementById("receptionlist");
const serveursList = document.getElementById("serveurslist");
const securiteList = document.getElementById("securitelist");
const personnelList = document.getElementById("persnnallist");
const archivesList = document.getElementById("archiveslist");
const persoList = document.getElementById("persolist");
const GlobalArr = [];

const roomConfig = {
  conference: ["IT", "MANAGER"],
  securite: ["SECURITE", "MANAGER"],
  serveurs: ["MANAGER", "IT"],
  reception: ["IT", "MANGER", "NETOYAGE", "SECURITE","RECEPTIONNISTE"],
  personnel: ["IT", "MANGER"],
  archives: ["SECURITE", "MANAGER"],
};

const ConferenceArr = [];
const ReceptionArr = [];
const SecuriteArr = [];
const ServeurArr = [];
const PersonnelArr = [];
const ArchivesArr = [];

const RoomArr = {
  conference: ConferenceArr,
  securite: SecuriteArr,
  serveurs: ServeurArr,
  reception: ReceptionArr,
  personnel: PersonnelArr,
  archives: ArchivesArr,
};

document.getElementById("validation").addEventListener("click", ()=>{


  const ValidForm = document.createElement("div");
  ValidForm.className = "validationForm";
  ValidForm.id = "validationForm";
  ValidForm.innerHTML = `
        <div class="forms" id="forms">
            <div class="btncancel">
                <button type="button" id="cancelbtn" class="cancelbtn" onclick="cancel()"><i class="fas fa-multiply"></i></button>
            </div>
            <h1>MERCI DE REMPLIR LE FORMULAIRE SUIVANT</h1>
            <hr>
            <form class="fromremplit" id="myForm">
                <div class="input-group">
                    <label for="fullname">nom et prénom</label>
                    <input type="text" placeholder="NOM ET PRENOM" id="fullname"/>
                    <p id="fnamemessage"></p>
                </div>

                <div class="input-group1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" id="profileimg" class="profileimg"/>
                    <input type="url" placeholder="LE LIEN DU IMAGE" id="profileimage"/>
                </div>
                <div class="input-group2">
                    <label for="role">Role</label>
                    <select id="role">
                        <option value="IT">IT</option>
                        <option value="SECURITE">SECURITE</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="RECEPTIONNISTE">RECEPTIONNISTE</option>
                        <option value="NETTOYAGE">NETTOYAGE</option>
                        <option value="SERVEUR">SERVEUR</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" placeholder="EMAIL" id="email"/>
                    <p id="emailmessage"></p>
                </div>

                <div class="input-group">
                    <label for="telephone">Téléphone</label>
                    <input type="text" placeholder="NUMERO DE TELEPHONE" id="telephone"/>
                    <p id="phonemessage"></p>
                </div>

                <div class="experienceforms">
                    <div class="input-group3">
                        <h1>EXPERIENCE</h1>
                        <div class="exp">
                            <label for="exprole">LE ROLE</label>
                            <input type="text" id="exprole" class="exprole" placeholder="ROLE"/>
                            <label for="expentreprise">ENTREPRISE</label>
                            <input type="text" id="expentreprise" class="expentreprise" placeholder="ENTREPRISE"/>
                            <label for="debut">DATE DE DEBUT</label>
                            <input type="date" class="debut" id="debut" placeholder="DATE DE DEBUT"/>
                            <label for="fin">DATE DE FIN</label>
                            <input type="date" class="fin" id="fin" placeholder="DATE DE FIN"/>
                        </div>
                        <p id="experiencemessage"></p>
                    </div>
                </div>
                <div class="addexpbtn">
                    <button type="button" id="addexperience" class="addexperience">ADD EXPERIENCE</button>
                </div>
                <div class="btnsubmit">
                    <button type="submit" id="submitt">ENVOYER</button>
                </div>
            </form>
        </div>
    `;
        container.appendChild(ValidForm);
        //uploader automatiquement l'image
        const profileInput = document.getElementById("profileimage");
        const profileImg   = document.getElementById("profileimg");
        profileInput.addEventListener('input', function (e){
            profileImg.src  = e.target.value;
        })
        //

        //ajouter plus d'experience
        const Forms = document.querySelector(".experienceforms");
        const addBtn = document.getElementById("addexperience");
        const ExperienceForme = document.querySelector(".input-group3");

        addBtn.addEventListener("click", () => {
        const clone = ExperienceForme.cloneNode(true);
        console.log(clone);
        Forms.appendChild(clone);
        });
        //
        document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const useExperience = [];

        const Fname = document.getElementById("fullname").value;
        const Image = document.getElementById("profileimage").value;
        const Email = document.getElementById("email").value;
        const Telephone = document.getElementById("telephone").value;
        const Role = document.getElementById("role").value;
        const EmailMessage = document.getElementById('emailmessage');
        const PhoneMessage = document.getElementById('phonemessage');
        const Fnamemessage = document.getElementById('fnamemessage');
        const ExperMessage = document.getElementById('experiencemessage');
        //verification de FULL NAME
        if(Fname.length === 0)
        {
          Fnamemessage.innerText = "S'il vous plaît, mettez Votre Full Name";
          Fnamemessage.style.color = "red";
          return;
        }
        for (let i = 0; i < Fname.length; i++) {
          const char = Fname[i];
            if (!((char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || char === " ")) {
                Fnamemessage.innerText = "S'il vous plaît, mettez votre Full Name valide";
                Fnamemessage.style.color = "red";
                return;
            }
            Fnamemessage.innerText = "";
        }

        //verification de numero de telephone
        if(!(((Telephone[0]==="0" && Telephone[1]==="5") || (Telephone[0]==="0" && Telephone[1]==="6") || (Telephone[0]==="0" && Telephone[1]==="7")) && Telephone.length===10))
        {
          PhoneMessage.innerText="S'il vous plaît, mettez une Numéro Valide";
          PhoneMessage.style.color = "red";
          return;
        }else{
          PhoneMessage.innerText = "";
        }
        //verification de l'email
        if(Email.length === 0)
        {
            
            EmailMessage.textContent = "S'il vous plaît, mettez une adresse email";
            EmailMessage.style.color = "red";
            return;  
        }
        //const EmailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[A-Za-z]{2,}$/;
        let Domaine = Email.split('@')[1];
        let DomaineCheck = Domaine.split('@')[0];

        if(!(DomaineCheck >= 'a' && DomaineCheck <= 'z')){
          return;
        }
        if (!(Email.endsWith(".com") || Email.endsWith(".ma")))
        {
            EmailMessage.textContent = "S'il vous plaît, mettez une adresse email valide";
            EmailMessage.style.color = "red";
            return; 
        }else{
          EmailMessage.innerText = "";
        }
        // verification du date d'experience
    //get la valeur des experie1nce ajouter
    document.querySelectorAll('.input-group3').forEach(ex=>{
        const ExpEntreprise = ex.querySelector('.expentreprise').value;
        const ExpRole = ex.querySelector('.exprole').value;
        const Debut = ex.querySelector('.debut').value;
        const Fin = ex.querySelector('.fin').value;
        const YearFin = Fin.split("-")[0];
        const YearDebut = Debut.split("-")[0];
    
        const verif = YearFin - YearDebut;
        console.log(verif);
        if(verif < 0)
        {
          ExperMessage.innerText = "Les dates Sont Invalides!";
          return;
        }
        else{
          ExperMessage.innerText = "";
        }
        let exper = {
          role : ExpRole,
          entreprise : ExpEntreprise,
          debut : Debut,
          fin : Fin
        }
        useExperience.push(exper);
    });
     console.log("this "  + useExperience);
    const exist = GlobalArr.some((p) => p.name === Fname);
    if (exist) {
      alert("L'employé est déjà là !");
      return;
    }
    personnelCarte(
      Fname,
      Image,
      Role,
      Email,
      Telephone,
      useExperience
    );
    localStorage.setItem("fullName", Fname);
    localStorage.setItem("image", Image);
    localStorage.setItem("role", Role);
    localStorage.setItem("email", Email);
    localStorage.setItem("telephone", Telephone);
    localStorage.setItem("experiences", useExperience);
    document.getElementById('myForm').reset(); 
  });
});
//fonction pour creer une carte de personnel
function personnelCarte(
  Fname,
  Image,
  Role,
  Email,
  Telephone,
  Experiences) {
  const carte = document.createElement("div");
  carte.classList.add("pronalinfo");
  carte.id = "pronalinfo";
  carte.innerHTML += `
        <img src="${Image}" alt="userlogo" width="60px" height="60px">
        <div class="info" id="profile1" data-profile="${Fname}">
            <h1>${Fname}</h1>
            <p id="job">${Role}</p>
        </div>
    `;
  GlobalArr.push({
    name: Fname,
    image: Image,
    role: Role,
    email: Email,
    telephone: Telephone,
    experiences: Experiences
  });
  console.log(GlobalArr);
  persoList.appendChild(carte);
}
//cancel button
function cancel() {
  document.getElementById("validationForm").remove();
}
//add button in carte


document.querySelectorAll(".plusbtnROOM").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = e.currentTarget.dataset.room;
    const allowedRoles = roomConfig[type];
    console.log(type);
    const ValidForm = document.createElement("div");
    ValidForm.className = "validationForm";
    ValidForm.id = "validationForm";
    ValidForm.innerHTML = `
        <div class="btncancel">
            <button type="button" id="cancelbtn" onclick="cancel()"><i class="fas fa-multiply"></i></button>
        </div>`;

    GlobalArr.forEach((ele) => {
      if (allowedRoles.includes(ele.role)) {
        const carte = document.createElement("div");
        carte.classList.add("pronalinfo");
        carte.id = "pronalinfo";

        carte.innerHTML += `
                        <img src="${ele.image}" width="60px">
                        <div class="info" id="profile1" data-profile="${ele.name}">
                            <h1>${ele.name}</h1>
                            <p id="job">${ele.role}</p>
                        </div>
                        <div class="btns">
                            <button type="button" class="plusbtn" data-room="${type}" data-role="${ele.role}">+</button>
                            <button type="button" class="moinbtn" data-room="${type}" data-role="${ele.role}">-</button>
                        </div>
                    `;
        ValidForm.appendChild(carte);
      }
      if(!allowedRoles.includes(ele.role))
      {
        ValidForm.innerHTML += "Empty list";
        ValidForm.style.fontSize = "30px";
      }
    });

    container.appendChild(ValidForm);

    const IMAGE = localStorage.getItem("image");
    const Fname = localStorage.getItem("fullName");
    const Role = localStorage.getItem("role");
    const Email = localStorage.getItem("email");
    const Telephone = localStorage.getItem("telephone");
    const Experiences1 = localStorage.getItem("experiences");

    console.log(Fname);
    document.querySelectorAll(".plusbtn").forEach((btns) => {
      btns.addEventListener("click", (e) => {
        const type = e.currentTarget.dataset.room;
        const roomList = document.getElementById(`${type}list`);
        const roomArray = RoomArr[type];
        if (roomArray.some(membre=>membre.name === Fname)) {
          alert("L'employé est déjà là !");
          return;
        }
        const carte = document.createElement("div");
          carte.classList.add("pronalinfor");
          carte.id = "pronalinfor";
          carte.setAttribute("data-name", Fname);
          carte.innerHTML = `<img src="${IMAGE}" alt="userlogo" id="profile1" data-profile="${Fname}" width="60px" height="60px">`;
          carte.style.transition = "all 0.4s ease";
          roomArray.push({
            name: Fname,
            role: Role,
            email: Email,
            image: IMAGE,
            telephone: Telephone,
            Experiences : Experiences1
          });
        if(roomArray.length < 3)
        {
          roomList.appendChild(carte);
        }
        
        

        //console.log("Added to room:", type, carte);
      });
    });

    document.querySelectorAll(".moinbtn").forEach((btns) => {
      btns.addEventListener("click", (e) => {
        const type = e.currentTarget.dataset.room;
        const roomList1 = document.getElementById(`${type}list`);
        const roomArray1 = RoomArr[type];
        console.log(roomArray1);
        const element = roomList1.querySelector(`[data-name="${Fname}"]`);

        if (element) {
          element.remove();
          roomArray1.forEach((ele) => {
            if (ele.name === element) {
              ele.name -= 1;
            }
          });
          console.log("new arr " + roomArray1);
        }
      });
    });
  });
});

document.addEventListener('click', (e)=>{
  const DataName = e.target.dataset.profile;
  GlobalArr.forEach(pr=>{
    if(pr.name === DataName)
    {
      const DiplayProfile = document.createElement('div');
      DiplayProfile.classList.add('profiledisplay');
      DiplayProfile.id ="profiledisplay";

      // for(let i = 0; i < pr.experiences.length; i++)
      // {
      //   cosn
      // 
      console.log(pr.experiences);
      let exp_html = ""
      pr.experiences.forEach(exp => {
      exp_html += `
              <h2>EXPERIENCE</h2>
              <p>ENTREPRISE: ${exp.entreprise}</p>
              <p>ROLE: ${exp.role}</p>
              <p>EXPERIENCE : <span>${exp.debut}</span> / <span>${exp.fin}</span></p>`;
      });

      DiplayProfile.innerHTML = `
        <div class="profiledisplay2">
          <div class="btncancel2">
              <button type="button" id="cancelbtn" onclick="cancel2()"><i class="fas fa-multiply"></i></button>
          </div>
          <div class="infor">
              <img src="${pr.image}" alt="profileImage"/>
              <h1 id="profileName">${pr.name}</h1>
              <p>${pr.role}</p>
              <p>Email: <span>${pr.email}</span></p>
              <p>TELEPHONE: <span>${pr.telephone}</span></p>
              ${exp_html}
          </div>
        </div>
      `
      container.appendChild(DiplayProfile);
    }
  })
})

function cancel2()
{
  document.getElementById('profiledisplay').remove();
}
// const num_regex = /^(0 | \+212)(5|7|6)[0-9]{8}$/g






// document.addEventListener("click", (e) => {
//   const Fname = localStorage.getItem("fullName");
//   const Image = localStorage.getItem("image");
//   const Role = localStorage.getItem("role");
//   const Email = localStorage.getItem("email");
//   const Telephone = localStorage.getItem("telephone");
//   const Experiences = localStorage.getItem("experiences");

  // const user = GlobalArr.find(p => p.name === Fname);

  // if(includeConference.includes(user.role))
  // {
  //     console.log("oui vous pouver entrer");
  // }
  // if (e.target.classList.contains("plusbtn")) {
  //   const card = e.target.closest(".pronalinfo");
  //   const Job = card.querySelector("#job").textContent.trim();
  //   console.log(Job);

    // if(PersoArr.includes(Fname))
    // {
    //     alert("L'employé est déjà là !")
    //     return;
    // }
    // // if(PersoArr.length < 3)   {
    // //     const carte = document.createElement('div');
    // //     carte.classList.add("pronalinfor");
    // //     carte.id = "pronalinfor";
    // //     carte.innerHTML = `<img src="${Image}" alt="userlogo" width="60px" height="60px">`;
    // //     personnelList.appendChild(carte);
    // //     PersoArr.push(Fname);
    // // }else{
    // //     alert('la chambre est en plein');
    // // }

    // if(SecurArr.includes(Fname))
    // {
    //     alert("L'employé est déjà là !")
    //     return;
    // }
    // // if(SecurArr.length < 3)
    // // {
    // //     const carte = document.createElement('div');
    // //     carte.classList.add("pronalinfor");;
    // //     carte.id = "pronalinfor";
    // //     carte.innerHTML = `<img src="${Image}" alt="userlogo" width="60px" height="60px">`;
    // //     carte.style.transition = "all 0.4s ease";
    // //     securiteList.appendChild(carte);
    // //     SecurArr.push(Fname);
    // // }else{
    // //     alert('la chambre est en plein');
    // // }

    // if(SerArr.includes(Fname))
    // {
    //     alert("L'employé est déjà là !")
    //     return;
    // }

    // // if(SerArr.length < 3)
    // // {
    // //     const carte = document.createElement('div');
    // //     carte.classList.add("pronalinfor");;
    // //     carte.id = "pronalinfor";
    // //     carte.innerHTML = `<img src="${Image}" alt="userlogo" width="60px" height="60px">`;
    // //     carte.style.transition = "all 0.4s ease";
    // //     serveursList.appendChild(carte);
    // //     SerArr.push(Fname);
    // // }else{
    // //     alert('la chambre est en plein');
    // // }

    // if(ManArr.includes(Fname))
    // {
    //     alert("L'employé est déjà là !")
    //     return;
    // }
    // // if(SerArr.length < 3)
    // // {
    // //     const carte = document.createElement('div');
    // //     carte.classList.add("pronalinfor");;
    // //     carte.id = "pronalinfor";
    // //     carte.innerHTML = `<img src="${Image}" alt="userlogo" width="60px" height="60px">`;
    // //     carte.style.transition = "all 0.4s ease";
    // //     SerArr.push(Fname);
    // // }else{
    // //     alert('la chambre est en plein');
    // //
//   }
// });