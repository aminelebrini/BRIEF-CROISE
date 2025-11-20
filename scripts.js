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