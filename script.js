let type = "encadreur";

function authType(role) {
  type = role;
  const encadreurBtn = document.getElementById("encadreurBtn");
  const adminBtn = document.getElementById("adminBtn");
  const info = document.getElementById("info");
  const annee = document.getElementById("academ");

  if (role === "encadreur") {
    encadreurBtn.classList.add("active");
    adminBtn.classList.remove("active");
    annee.style.display = "flex";
    info.textContent = "Chargement des données...";
  } else if (role === "admin") {
    encadreurBtn.classList.remove("active");
    adminBtn.classList.add("active");
    annee.style.display = "none";
    info.textContent =
      "Vous êtes sur le point de vous connecter en tant qu'administrateur. Veuillez confirmer votre action.";
  }
}

function valider() {
  alert(`Rôle sélectionné : ${type}`);
}
