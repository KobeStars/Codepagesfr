document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let currentLanguage = "";
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

    // --- DOM Elements ---
    const codeOutput = document.getElementById("codeOutput");
    const feedback = document.getElementById("feedback");
    const languageGuess = document.getElementById("languageGuess");
    const explanationPopup = document.getElementById("explanationPopup");
    const container = document.querySelector(".container");
    const shop = document.getElementById("shop");
    const partnersPage = document.getElementById('partners-page');
    const partnerSection = document.querySelector('.partner-section');
    const authPopup = document.getElementById('authPopup');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const userMenu = document.getElementById('userMenu');
    const userGreeting = document.getElementById('userGreeting');
    const notification = document.getElementById('notification');
    const settingsPage = document.getElementById('settingsPage');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // --- Code Snippets ---
    const codeSnippets = [
        // ... (votre tableau de snippets reste inchangé) ...
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

    // --- Functions ---
    const generateRandomCode = () => {
        const randomIndex = Math.floor(Math.random() * codeSnippets.length);
        const randomSnippet = codeSnippets[randomIndex];
        currentLanguage = randomSnippet.language;
        codeOutput.textContent = randomSnippet.code;
        feedback.textContent = "";
        languageGuess.value = "";
    };

    const checkGuess = () => {
        const userGuess = languageGuess.value.toLowerCase().trim();
        if (userGuess === currentLanguage) {
            feedback.textContent = "Bonne réponse ! 🎉";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = `Mauvaise réponse. C'était du ${currentLanguage.toUpperCase()} 😢`;
            feedback.className = "feedback incorrect";
        }
    };

    const showNotification = (message, type = "success") => {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    };

    // --- Authentication Functions ---
    const register = () => {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (username && password) {
            if (users.find(user => user.username === username)) {
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
    };

    const login = () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = { username };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            displayUserMenu(username);
            closeAuthPopup();
            showNotification(`Bienvenue, ${username} !`, 'success');
        } else {
            showNotification('Nom d’utilisateur ou mot de passe incorrect.', 'error');
        }
    };

    const logout = () => {
        if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
            localStorage.removeItem('currentUser');
            currentUser = null;
            userMenu.classList.add('hidden');
            document.getElementById('openAuthPopupBtn').classList.remove('hidden');
            showNotification('Vous êtes maintenant déconnecté.', 'success');
        }
    };
    
    const displayUserMenu = (username) => {
        userMenu.classList.remove('hidden');
        userGreeting.textContent = `Bonjour, ${username}`;
        document.getElementById('openAuthPopupBtn').classList.add('hidden');
    };

    // --- UI Navigation Functions ---
    const closeExplanation = () => explanationPopup.classList.add("hidden");
    const goToShop = () => {
        container.classList.add("hidden");
        shop.classList.remove("hidden");
    };
    const goBack = () => {
        container.classList.remove("hidden");
        shop.classList.add("hidden");
    };
    const goToPartnersPage = () => {
        partnersPage.style.display = 'block';
        partnerSection.style.display = 'none';
    };
    const goBackToMain = () => {
        partnersPage.style.display = 'none';
        partnerSection.style.display = 'block';
    };
    const openAuthPopup = () => authPopup.classList.remove('hidden');
    const closeAuthPopup = () => authPopup.classList.add('hidden');
    const showRegister = () => {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    };
    const showLogin = () => {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    };
    const showSettings = () => {
        userMenu.classList.add('hidden');
        settingsPage.classList.remove('hidden');
    };
    const goBackToMenu = () => {
        settingsPage.classList.add('hidden');
        userMenu.classList.remove('hidden');
    };
    
    // --- Dark Mode ---
    const applyDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.checked = false;
        }
    };

    const toggleDarkMode = () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        applyDarkMode();
    };

    // --- Event Listeners ---
    document.getElementById('closeExplanationBtn').addEventListener('click', closeExplanation);
    document.getElementById('generateCodeBtn').addEventListener('click', generateRandomCode);
    document.getElementById('checkGuessBtn').addEventListener('click', checkGuess);
    document.getElementById('goToShopBtn').addEventListener('click', goToShop);
    document.getElementById('goBackBtn').addEventListener('click', goBack);
    document.getElementById('goToPartnersPageBtn').addEventListener('click', goToPartnersPage);
    document.getElementById('goBackToMainBtn').addEventListener('click', goBackToMain);
    document.getElementById('openAuthPopupBtn').addEventListener('click', openAuthPopup);
    document.getElementById('closeAuthPopupBtn').addEventListener('click', closeAuthPopup);
    document.getElementById('showRegisterBtn').addEventListener('click', showRegister);
    document.getElementById('showLoginBtn').addEventListener('click', showLogin);
    document.getElementById('registerBtn').addEventListener('click', register);
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('settingsBtn').addEventListener('click', showSettings);
    document.getElementById('goBackToMenuBtn').addEventListener('click', goBackToMenu);
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // --- Initialization ---
    const init = () => {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        if (currentUser) {
            displayUserMenu(currentUser.username);
        }
        applyDarkMode();
    };

    init();
});
