// Tableau contenant des snippets de code avec leur langage associé
const codeSnippets = [
    // --- Python (50 snippets) ---
    { code: `def greet(name):\n    return f"Hello, {name}!"\nprint(greet("Alice"))`, language: "python" },
    { code: `for i in range(1, 6):\n    print(f"Number: {i}")`, language: "python" },
    { code: `def factorial(n):\n    return 1 if n == 0 else n * factorial(n - 1)\nprint(factorial(5))`, language: "python" },
    { code: `numbers = [1, 2, 3, 4]\nsquared = [n**2 for n in numbers]\nprint(squared)`, language: "python" },
    { code: `text = "Hello, World!"\nprint(text[::-1])`, language: "python" },
    { code: `from math import sqrt\nprint(sqrt(16))`, language: "python" },
    { code: `names = ["Alice", "Bob", "Charlie"]\nfor name in names:\n    print(f"Hi, {name}!")`, language: "python" },
    { code: `def is_even(num):\n    return num % 2 == 0\nprint(is_even(4))`, language: "python" },
    { code: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`, language: "python" },
    { code: `nums = [1, 2, 3]\nprint(sum(nums))`, language: "python" },
    { code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f"{self.name} makes a sound!"\n\ncat = Animal("Cat")\nprint(cat.speak())`, language: "python" },
    { code: `x = lambda a, b: a + b\nprint(x(5, 10))`, language: "python" },
    { code: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\nprint(list(fibonacci(5)))`, language: "python" },
    { code: `data = {"name": "Alice", "age": 30}\nprint(data.get("name"))`, language: "python" },
    { code: `def reverse_string(s):\n    return s[::-1]\nprint(reverse_string("Python"))`, language: "python" },
    { code: `import random\nprint(random.randint(1, 100))`, language: "python" },
    { code: `with open("file.txt", "w") as file:\n    file.write("Hello, World!")`, language: "python" },
    { code: `matrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    print(row)`, language: "python" },
    { code: `def factorial_iterative(n):\n    result = 1\n    for i in range(1, n+1):\n        result *= i\n    return result\nprint(factorial_iterative(5))`, language: "python" },
    { code: `def count_vowels(string):\n    vowels = "aeiou"\n    return sum(1 for char in string if char.lower() in vowels)\nprint(count_vowels("Python"))`, language: "python" },

    // --- CSS (50 snippets) ---
    { code: `body {\n    background-color: #f0f0f0;\n    color: #333;\n}`, language: "css" },
    { code: `.button {\n    padding: 10px 15px;\n    background-color: #6200ea;\n    border-radius: 5px;\n}`, language: "css" },
    { code: `h1 {\n    font-size: 24px;\n    text-align: center;\n}`, language: "css" },
    { code: `.container {\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n}`, language: "css" },
    { code: `.box {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n}`, language: "css" },
    { code: `body {\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n}`, language: "css" },
    { code: `.hidden {\n    display: none;\n}`, language: "css" },
    { code: `input[type="text"] {\n    border: 1px solid #ccc;\n    padding: 8px;\n}`, language: "css" },
    { code: `img {\n    max-width: 100%;\n    height: auto;\n}`, language: "css" },
    { code: `a {\n    text-decoration: none;\n    color: blue;\n}`, language: "css" },
    { code: `.grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n}`, language: "css" },
    { code: `@media (max-width: 600px) {\n    body {\n        background-color: lightblue;\n    }\n}`, language: "css" },
    { code: `.circle {\n    width: 100px;\n    height: 100px;\n    background-color: green;\n    border-radius: 50%;\n}`, language: "css" },
    { code: `table {\n    border-collapse: collapse;\n    width: 100%;\n}`, language: "css" },
    { code: `button {\n    background-color: orange;\n    color: white;\n    padding: 10px;\n}`, language: "css" },
    { code: `.card {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n    padding: 15px;\n}`, language: "css" },

    // --- Java (50 snippets) ---
    { code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`, language: "java" },
    { code: `int sum(int a, int b) {\n    return a + b;\n}`, language: "java" },
    { code: `String name = "Alice";\nSystem.out.println(name.toUpperCase());`, language: "java" },
    { code: `for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}`, language: "java" },
    { code: `import java.util.ArrayList;\nArrayList<Integer> numbers = new ArrayList<>();`, language: "java" },
    { code: `boolean isEven(int num) {\n    return num % 2 == 0;\n}`, language: "java" },

    // --- HTML (50 snippets) ---
    { code: `<div>\n    <h1>Hello, World!</h1>\n    <p>Welcome to the web page.</p>\n</div>`, language: "html" },
    { code: `<img src="image.jpg" alt="A beautiful image">`, language: "html" },
    { code: `<button onclick="alert('Hello!')">Click Me</button>`, language: "html" },
    { code: `<form>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n</form>`, language: "html" },
    { code: `<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>`, language: "html" }
];

// Variable pour stocker le langage du code affiché
let currentLanguage = "";

// Fonction pour générer un code aléatoire
function generateRandomCode() {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    const randomSnippet = codeSnippets[randomIndex];
    currentLanguage = randomSnippet.language; // Stocke le langage
    document.getElementById("codeOutput").textContent = randomSnippet.code;
    document.getElementById("feedback").textContent = ""; // Réinitialise le feedback
}

// Fonction pour vérifier si la réponse est correcte
function checkGuess() {
    const userGuess = document.getElementById("languageGuess").value;
    const feedback = document.getElementById("feedback");


    if (userGuess === currentLanguage) {
        feedback.textContent = "Bonne réponse ! 🎉";
        feedback.className = "feedback correct"; // Ajoute la classe CSS pour feedback correct
    } else {
        feedback.textContent = `Mauvaise réponse. C'était du ${currentLanguage.toUpperCase()} 😢`;
        feedback.className = "feedback incorrect"; // Ajoute la classe CSS pour feedback incorrect
    }
}

function closeExplanation() {
    const explanationPopup = document.getElementById("explanationPopup");
    explanationPopup.classList.add("hidden");} // Ajoute la classe CSS pour masquer le popup  

    // Fonction pour aller au Shop
function goToShop() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("shop").classList.add("visible"); }

    // Fonction pour revenir au jeu
function goBack() {
    document.querySelector(".container").classList.remove("hidden");
    document.getElementById("shop").classList.remove("visible");
}

// Fonction pour afficher la page des partenaires
function goToPartnersPage() {
    document.getElementById('partners-page').style.display = 'block';
    document.querySelector('.partner-section').style.display = 'none'; // Cacher le bouton
}

// Fonction pour revenir à la page principale
function goBackToMain() {
    document.getElementById('partners-page').style.display = 'none';
    document.querySelector('.partner-section').style.display = 'block'; // Afficher le bouton
}

// Variables pour la gestion de l'authentification
let users = JSON.parse(localStorage.getItem('users')) || [];

// Ouvrir la popup de connexion
function openAuthPopup() {
    document.getElementById('authPopup').classList.remove('hidden');
}

// Fermer la popup de connexion
function closeAuthPopup() {
    document.getElementById('authPopup').classList.add('hidden');
}

// Afficher le formulaire d'inscription
function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

// Afficher le formulaire de connexion
function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

// Inscription
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            alert('Nom d’utilisateur déjà pris !');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            showLogin();
        }
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}

// Connexion
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert(`Bienvenue, ${username} !`);
        currentUser = { username };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        displayUserMenu(username);
        closeAuthPopup();
    } else {
        alert('Nom d’utilisateur ou mot de passe incorrect.');
    }
}

// Affiche le menu utilisateur après connexion
function displayUserMenu(username) {
    document.getElementById('authPopup').style.display = 'none';
    const userMenu = document.getElementById('userMenu');
    const userGreeting = document.getElementById('userGreeting');

    userMenu.style.display = 'flex';
    userGreeting.textContent = `Bonjour, ${username}`;
}

// Déconnexion
function logout() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        localStorage.removeItem('currentUser');
        currentUser = null;
        document.getElementById('userMenu').style.display = 'none';
        alert('Vous êtes maintenant déconnecté.');
    }
}
// Variables pour la gestion du mode sombre
let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

// Appliquer le mode sombre si activé
window.onload = function () {
    if (currentUser) {
        displayUserMenu(currentUser.username);
    }
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
};

// Basculer entre le mode sombre et le mode clair
function toggleDarkMode() {
    const isChecked = document.getElementById('darkModeToggle').checked;
    if (isChecked) {
        document.body.classList.add('dark-mode');
        isDarkMode = true;
    } else {
        document.body.classList.remove('dark-mode');
        isDarkMode = false;
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

// Affiche le menu utilisateur après connexion
function displayUserMenu(username) {
    document.getElementById('authPopup').style.display = 'none';
    const userMenu = document.getElementById('userMenu');
    const userGreeting = document.getElementById('userGreeting');

    userMenu.style.display = 'flex';
    userGreeting.textContent = `Bonjour, ${username}`;
}

// Déconnexion
function logout() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        localStorage.removeItem('currentUser');
        currentUser = null;
        document.getElementById('userMenu').style.display = 'none';
        alert('Vous êtes maintenant déconnecté.');
    }
}

// Affiche un message de notification
function showNotification(message, type = "success") {
    const notification = document.getElementById('notification');

    // Ajout du message et du type (success ou error)
    notification.textContent = message;
    notification.classList.remove('hidden', 'error', 'success');
    notification.classList.add(type, 'show');

    // Cache la notification après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.classList.add('hidden'), 300); // Petit délai avant de cacher complètement
    }, 3000);
}
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            showNotification('Nom d’utilisateur déjà pris !', 'error');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            showNotification('Inscription réussie ! Vous pouvez maintenant vous connecter.', 'success');
            showLogin();
        }
    } else {
        showNotification('Veuillez remplir tous les champs.', 'error');
    }
}
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        showNotification(`Bienvenue, ${username} !`, 'success');
        currentUser = { username };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        displayUserMenu(username);
        closeAuthPopup();
    } else {
        showNotification('Nom d’utilisateur ou mot de passe incorrect.', 'error');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    document.getElementById('userMenu').style.display = 'none';
    showNotification('Vous êtes maintenant déconnecté.', 'success');
}



    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.classList.add('hidden'), 300);
    }, 3000);
 

// Basculer entre le mode sombre et normal
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Sauvegarder la préférence du mode sombre
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

// Afficher la page des paramètres
function showSettings() {
    document.getElementById('userMenu').style.display = 'none';
    document.getElementById('settingsPage').style.display = 'block';
}

// Retour au menu utilisateur
function goBackToMenu() {
    document.getElementById('settingsPage').style.display = 'none';
    document.getElementById('userMenu').style.display = 'block';
}