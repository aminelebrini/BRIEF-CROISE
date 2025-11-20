const container = document.getElementById('container');
const persoList = document.getElementById("persolist");
const GlobalArr = [];
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
        
        document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const Fname = document.getElementById("fullname").value;
        const Image = document.getElementById("profileimage").value;
        const Email = document.getElementById("email").value;
        const Telephone = document.getElementById("telephone").value;
        const Role = document.getElementById("role").value;
        const ExpRole = document.getElementById('exprole').value;
        const ExpEntreprise = document.getElementById('expentreprise').value;
        const DebutExp = document.getElementById('debut').value;
        const FinExp = document.getElementById('fin').value;

        personnelCarte(Fname,Image,Role,Email,Telephone,allExperience);
        localStorage.setItem("fullName", Fname);
        localStorage.setItem("image", Image);
        localStorage.setItem("role", Role);
        localStorage.setItem("email", Email);
        localStorage.setItem("telephone", Telephone);
        localStorage.setItem("experiences", allExperience);

    });
});

//fonction pour creer une carte de personnel
function personnelCarte(
  Fname,
  Image,
  Role,
  Email,
  Telephone) {
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
  });
  console.log(GlobalArr);
  persoList.appendChild(carte);
}
function cancel() {
  document.getElementById("validationForm").remove();
}
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
        ValidForm.innerHTML = "Empty list";
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
        roomList.appendChild(carte);
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
                    <h2>EXPERIENCE</h2>
                    <p>ENTREPRISE: ${pr.entreprise}</p>
                    <p>ROLE: ${pr.role}</p>
                    <p>EXPERIENCE : <span>${pr.debut}</span> / <span>${pr.fin}</span></p>
                </div>
            </div>`;
            container.appendChild(DiplayProfile);
        }
    })
})