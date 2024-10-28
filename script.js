// Lista de usuarios con nombres, contraseñas y fotos
const users = [
    {
        username: "ABASTO Israel",
        password: "18363",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/refs/heads/main/Abasto%20Israel.JPG"
    },
      {
        username: "ABASTO Oliver",
        password: "7935764",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Oliver.png"
    },
    {
        username: "ALARCON Sandro",
        password: "18139",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/alarcon%20sandro.JPG"
    },
    {
        username: "ANDRÉ Valeria",
        password: "9448755",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Valeria.png"
    },
    {
        username: "ANTEZANA Marcelo",
        password: "18336",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/marcelo%20antezana.JPG"
    },
    {
        username: "AREVALO Zacarias",
        password: "18001",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/zacarias%20arevalo.JPG"
    },
    {
        username: "ARIAS Javier",
        password: "18278",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/javier%20arias.JPG"
    },
    {
        username: "AYZA Macedonio",
        password: "18179",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/macedo%20ayza.JPG"
    },
    {
        username: "BALDERRAMA Willy Waldo",
        password: "18348",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/balderrama%20willy.JPG"
    },
    {
        username: "BALTAZAR Roberto",
        password: "17990",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/roberto%20baltazar.JPG"
    },
    {
        username: "BLANCO Luis Alberto",
        password: "18255",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Blanco%20Luis.JPG"
    },
    {
        username: "BORDA Jose Luis",
        password: "17988",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Borda%20Jose%20Luis.JPG"
    },
    {
        username: "BRAÑEZ David",
        password: "6485317",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/David.png"
    },
    {
        username: "CACERES Walcon Idalgo",
        password: "18327",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/C%C3%A1ceres%20Walcon.JPG"
    },
    {
        username: "CALAHUANA Rene Alberto",
        password: "18305",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Calahuana%20Rene.JPG"
    },
    {
        username: "CARI Sandalio",
        password: "18317",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Cari%20Sandalio.JPG"
    },
    {
        username: "CASTILLO Sara",
        password: "93023824",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Sara.png"
    },
    {
        username: "CATORCENO Eber Ivan",
        password: "18038",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Catorceno%20Ivan.JPG"
    },
    {
        username: "CESPEDES Victor Hugo",
        password: "18002",
        photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Cespedes%20Victor.JPG"
    }, 
  {
    username: "CHAMBI Humberto",
    password: "18356",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/humberto%20chambi.JPG"
},
{
    username: "CHAMBI Ramiro",
    password: "18333",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/ramiro%20chambi.JPG"
},
{
    username: "CHAVARRIA Humberto Jhans",
    password: "18214",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/humberto%20chavarria.JPG"
},
{
    username: "CHAVEZ Cirilo",
    password: "18262",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/CHAVEZ%20CIRILO.jpeg"
},
{
    username: "CHAVEZ Juan Carlos",
    password: "18331",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Chavez%20Juan%20Carlos.JPG"
},
{
    username: "CHOQUE Felix",
    password: "17997",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Felix%20Choque.JPG"
},
{
    username: "CHOQUE Marcos",
    password: "18023",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Choque%20Marco.JPG"
},
{
    username: "COLQUE Fabian",
    password: "18195",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/colque%20fabi%C3%A1n.JPG"
},
{
    username: "CRUZ Jose Luis",
    password: "18270",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/cruz%20jos%C3%A9%20luis.JPG"
},
{
    username: "CRUZ Mario",
    password: "18008",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/mario%20cruz.JPG"
},
{
    username: "CUELLAR Beltran",
    password: "18196",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Cuellar%20Beltran.JPG"
},
{
    username: "DAVILA Blanca Janette",
    password: "18200",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/D%C3%81VILA%20BLANCA.JPG"
},
{
    username: "DELGADO Bernabe",
    password: "18328",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/delgado%20bernab%C3%A9.JPG"
},
{
    username: "ESCOBAR Jose Luis",
    password: "18027",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Escobar%20Jose%20Luis.JPG"
},
{
    username: "FELIPE Lucas",
    password: "18229",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Felipe%20Lucas.JPG"
},
{
    username: "FERNANDEZ Emilio",
    password: "18219",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Fernandez%20Emilio.JPG"
},
{
    username: "FLORES Miguel Danjelo",
    password: "18316",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Flores%20Miguel.JPG"
},
{
    username: "GARCIA Mauricio",
    password: "17993",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/mauricio%20garcia.JPG"
},
{
    username: "GONZALES Alberto",
    password: "17989",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Gonzales%20Alberto.JPG"
},
{
    username: "GUAMAN Edgar",
    password: "18174",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/edgar%20guaman.JPG"
},
{
    username: "GUAYGUA Jhonny",
    password: "18011",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Guaygua%20Jhonny.JPG"
},
{
    username: "GUTIERREZ Edwin",
    password: "18012",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/edwin%20gutierrez.JPG"
},
{
    username: "GUTIERREZ Paola Andrea",
    password: "93023059",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Paola%20Gutierrez.png"
},
{
    username: "HERRERA Adolfo Juan",
    password: "18298",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/herrera%20adolfo.JPG"
},
{
    username: "HERRERA Ramiro",
    password: "18147",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Herrera%20Ramiro.JPG"
},
{
    username: "IRIGOYEN Rodmy Romel",
    password: "18006",
    photo: "IRIGOYEN Rodmy Romel"
},
{
    username: "LOPEZ Dario",
    password: "17996",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Lopez%20Dario.JPG"
},
{
    username: "LOPEZ Jose Angel",
    password: "18016",
    photo: "https://github.com/Paola06120/CBN/blob/bbe791dc627abe58fbd4485f3c53c421ec5320dd/angel%20lopez.JPG"
},
{
    username: "LOPEZ Jose Said",
    password: "18176",
    photo: "LOPEZ Jose Said"
},
{
    username: "LOPEZ Mario Macedonio",
    password: "18035",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Lopez%20Mario.JPG"
},
{
    username: "MALDONADO Edwin Ronald",
    password: "18137",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Maldonado%20Edwin.JPG"
},
{
    username: "MIRANDA Jhael Patricia",
    password: "93023421",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Patricia.png"
},
{
    username: "MOLINA Natalio",
    password: "18021",
    photo: "MOLINA Natalio"
},
{
    username: "MURILLO Edson Pedro",
    password: "93027296",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/edwin%20gutierrez.JPG"
},
{
    username: "MURILLO Mayron",
    password: "93023113",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/refs/heads/main/Murillo%20Mayron-removebg-preview.jpg"
},
{
    username: "SOTELO Paola Carol",
    password: "93023758",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Paola%20Sotelo.png"
},
{
    username: "TACASA Alvaro",
    password: "18253",
    photo: "TACASA Alvaro"
},
{
    username: "TOLEDO Roberto",
    password: "18183",
    photo: "TOLEDO Roberto"
},
{
    username: "UNZUETA Sergio Orlando",
    password: "93023520",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Sergio.png"
},
{
    username: "URQUIOLA Juan Carlos",
    password: "18319",
    photo: "URQUIOLA Juan Carlos"
},
{
    username: "URQUIOLA Reynaldo",
    password: "18189",
    photo: "URQUIOLA Reynaldo"
},
{
    username: "VALVERDE Judith",
    password: "14494",
    photo: "VALVERDE Judith"
},
{
    username: "VARGAS Ariel Alfonso",
    password: "18150",
    photo: "VARGAS Ariel Alfonso"
},
{
    username: "VARGAS Daniela",
    password: "93023792",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Daniela.png"
},
{
    username: "VARGAS Fernando",
    password: "18167",
    photo: "VARGAS Fernando"
},
{
    username: "VARGAS Gabriel",
    password: "8847070",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Gabriel.png"
},
{
    username: "VARGAS Rufo",
    password: "18015",
    photo: "VARGAS Rufo"
},
{
    username: "VEIZAGA Oligario",
    password: "18033",
    photo: "VEIZAGA Oligario"
},
{
    username: "VELARDE Esteban",
    password: "93023360",
    photo: "https://github.com/Paola06120/CBN/blob/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Esteban.png"
},
{
    username: "ZAMBRANA Jose Fernando",
    password: "18312",
    photo: "ZAMBRANA Jose Fernando"
},
{
    username: "ZUBIETA Alex",
    password: "18304",
    photo: "ZUBIETA Alex"
},
{
    username: "BALDERRAMA Nicole",
    password: "9494729",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/bbe791dc627abe58fbd4485f3c53c421ec5320dd/Imagen1.png"
},
{
    username: "HOYOS Adriana",
    password: "123456",
    photo: "https://raw.githubusercontent.com/Paola06120/CBN/d94a2efba88bce89594e68ffd31bf08d41547342/Adriana.png"
}
];

// Función para alternar la visibilidad de la contraseña en el inicio de sesión
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('togglePassword');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '🙈'; // Cambia el ícono al de 'ocultar'
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '👁️'; // Cambia el ícono al de 'mostrar'
    }
}

// Manejo del inicio de sesión
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("login-container").style.display = "none"; // Ocultar contenedor de login
        document.getElementById("background-container").style.display = "none"; // Ocultar fondo
        document.getElementById("app").style.display = "block"; // Mostrar la app

        // Mostrar datos de usuario en perfil (contraseña oculta)
        document.getElementById("user-name").textContent = user.username;
        document.getElementById("user-password").textContent = "********";
        document.getElementById("user-photo").src = user.photo;

        // Guardar el usuario actual para permitir el cambio de contraseña
        currentUser = user;
        
        // Mostrar la sección de perfil por defecto
        showSection('profile');
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
});

// Variable para almacenar el usuario actualmente autenticado
let currentUser = null;

// Mostrar secciones
document.getElementById("profile-btn").addEventListener("click", function() {
    showSection('profile');
});

document.getElementById("training-btn").addEventListener("click", function() {
    showSection('training');
});

document.getElementById("material-btn").addEventListener("click", function() {
    showSection('material');
});

document.getElementById("wellbeing-btn").addEventListener("click", function() {
    showSection('wellbeing');
});

document.getElementById("skap-btn").addEventListener("click", function() {
    showSection('skap');
});

// Función para mostrar secciones
function showSection(section) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(s => {
        s.style.display = "none"; // Ocultar todas las secciones
    });
    document.getElementById(section).style.display = "block"; // Mostrar la sección seleccionada
}

// Manejo de botones de capacitación
document.querySelectorAll(".video-btn").forEach(button => {
    button.addEventListener("click", function() {
        openModal(this.getAttribute("data-video"));
    });
});

document.querySelectorAll(".infographic-btn").forEach(button => {
    button.addEventListener("click", function() {
        openModal(this.getAttribute("data-infographic"));
    });
});

document.querySelectorAll(".exam-btn").forEach(button => {
    button.addEventListener("click", function() {
        openModal(this.getAttribute("data-exam"));
    });
});

// Función para abrir modal
function openModal(content) {
    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-iframe").src = content;
}

// Cerrar modal
document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("modal-iframe").src = "";
});

// Cerrar sesión
document.getElementById("logout-btn").addEventListener("click", function() {
    document.getElementById("app").style.display = "none"; // Ocultar la app
    document.getElementById("login-container").style.display = "block"; // Mostrar el contenedor de login
    document.getElementById("background-container").style.display = "block"; // Mostrar fondo nuevamente
    document.getElementById("error-message").textContent = ""; // Limpiar mensaje de error
    document.getElementById("password").value = ""; // Limpiar campo de contraseña
});

// Abrir modal de cambio de contraseña
document.getElementById("change-password-btn").addEventListener("click", () => {
    document.getElementById("change-password-modal").style.display = "block";
});

// Cancelar cambio de contraseña
document.getElementById("cancel-password-change").addEventListener("click", () => {
    document.getElementById("change-password-modal").style.display = "none";
});

// Aplicar cambio de contraseña
document.getElementById("apply-password-change").addEventListener("click", () => {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (currentUser && currentPassword === currentUser.password && newPassword === confirmPassword) {
        // Cambiar la contraseña del usuario actual
        currentUser.password = newPassword;
        alert("Contraseña cambiada exitosamente.");

        // Ocultar el modal y restablecer los campos
        document.getElementById("change-password-modal").style.display = "none";
        document.getElementById("current-password").value = "";
        document.getElementById("new-password").value = "";
        document.getElementById("confirm-password").value = "";
    } else {
        alert("Las contraseñas no coinciden o la contraseña actual es incorrecta.");
    }
});
