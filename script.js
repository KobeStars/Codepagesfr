document.addEventListener('DOMContentLoaded', () => {
    // --- Définition des snippets de code ---
    const codeSnippets = [
        // ... (collez votre tableau de snippets de code ici, il reste inchangé)
        // Python
        { code: `def greet(name):\n    return f"Hello, {name}!"`, language: "python" },
        { code: `for i in range(5):\n    print(i)`, language: "python" },
        // CSS
        { code: `body {\n    background-color: #f0f0f0;\n}`, language: "css" },
        { code: `h1 {\n    color: blue;\n}`, language: "css" },
        // Java
        { code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`, language: "java" },
        // HTML
        { code: `<h1>Titre</h1>\n<p>Paragraphe.</p>`, language: "html" }
    ];

    // --- Variables d'état de l'application ---
    let currentLanguage = "";
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

    // --- Sélection des éléments du DOM ---
    const elements = {
        // Jeu principal
        codeOutput: document.getElementById("codeOutput"),
        feedback: document.getElementById("feedback"),
        languageGuess: document.getElementById("languageGuess"),
        generateCodeBtn: document.getElementById('generateCodeBtn'),
        checkGuessBtn: document.getElementById('checkGuessBtn'),
        
        // Popups et Pages
        explanationPopup: document.getElementById("explanationPopup"),
        container: document.querySelector(".container"),
        shop: document.getElementById("shop"),
        partnersPage: document.getElementById('partners-page'),
        settingsPage: document.getElementById('settingsPage'),
        
        // Boutons de navigation
        closeExplanationBtn: document.getElementById('closeExplanationBtn'),
        goToShopBtn: document.getElementById('goToShopBtn'),
        goBackBtn: document.getElementById('goBackBtn'),
        goToPartnersPageBtn: document.getElementById('goToPartnersPageBtn'),
        goBackToMainBtn: document.getElementById('goBackToMainBtn'),
        
        // Authentification
        authPopup: document.getElementById('authPopup'),
        loginForm: document.getElementById('loginForm'),
        registerForm: document.getElementById('registerForm'),
        openAuthPopupBtn: document.getElementById('openAuthPopupBtn'),
        closeAuthPopupBtn: document.getElementById('closeAuthPopupBtn'),
        showRegisterBtn: document.getElementById('showRegisterBtn'),
        showLoginBtn: document.getElementById('showLoginBtn'),
        registerBtn: document.getElementById('registerBtn'),
        loginBtn: document.getElementById('loginBtn'),

        // Menu Utilisateur
        userMenu: document.getElementById('userMenu'),
        userGreeting: document.getElementById('userGreeting'),
        logoutBtn: document.getElementById('logoutBtn'),
        settingsBtn: document.getElementById('settingsBtn'),
        goBackToMenuBtn: document.getElementById('goBackToMenuBtn'),

        // Autres
        notification: document.getElementById('notification'),
        darkModeToggle: document.getElementById('darkModeToggle'),
        partnerSection: document.querySelector('.partner-section')
    };

    // --- Fonctions Utilitaires ---
    const show = (element) => element?.classList.remove('hidden');
    const hide = (element) => element?.classList.add('hidden');

    const showNotification = (message, type = "success") => {
        if (!elements.notification) return;
        elements.notification.textContent = message;
        elements.notification.className = `notification ${type} show`;
        setTimeout(() => {
            elements.notification.classList.remove('show');
        }, 3000);
    };

    // --- Fonctions du Jeu ---
    const generateRandomCode = () => {
        const randomIndex = Math.floor(Math.random() * codeSnippets.length);
        currentLanguage = codeSnippets[randomIndex].language;
        elements.codeOutput.textContent = codeSnippets[randomIndex].code;
        elements.feedback.textContent = "";
        elements.languageGuess.value = "";
    };

    const checkGuess = () => {
        const userGuess = elements.languageGuess.value.toLowerCase().trim();
        if (!userGuess) {
            showNotification("Veuillez entrer une réponse.", "error");
            return;
        }
        if (userGuess === currentLanguage) {
            elements.feedback.textContent = "Bonne réponse ! 🎉";
            elements.feedback.className = "feedback correct";
        } else {
            elements.feedback.textContent = `Mauvaise réponse. C'était du ${currentLanguage.toUpperCase()} 😢`;
            elements.feedback.className = "feedback incorrect";
        }
    };

    // --- Authentification ---
    const register = () => {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (!username || !password) {
            showNotification('Veuillez remplir tous les champs.', 'error');
            return;
        }
        if (users.find(user => user.username === username)) {
            showNotification('Nom d’utilisateur déjà pris !', 'error');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            showNotification('Inscription réussie ! Vous pouvez maintenant vous connecter.', 'success');
            hide(elements.registerForm);
            show(elements.loginForm);
        }
    };

    const login = () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = { username };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUIForUser();
            hide(elements.authPopup);
            showNotification(`Bienvenue, ${username} !`, 'success');
        } else {
            showNotification('Nom d’utilisateur ou mot de passe incorrect.', 'error');
        }
    };

    const logout = () => {
        if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateUIForUser();
            showNotification('Vous êtes maintenant déconnecté.', 'success');
        }
    };

    // --- Gestion de l'UI ---
    const updateUIForUser = () => {
        if (currentUser) {
            show(elements.userMenu);
            hide(elements.openAuthPopupBtn);
            elements.userGreeting.textContent = `Bonjour, ${currentUser.username}`;
        } else {
            hide(elements.userMenu);
            show(elements.openAuthPopupBtn);
        }
    };

    const applyDarkMode = () => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        if (elements.darkModeToggle) {
            elements.darkModeToggle.checked = isDarkMode;
        }
    };
    
    // --- Écouteurs d'événements (Event Listeners) ---
    const addClickListener = (element, handler) => {
        if (element) {
            element.addEventListener('click', handler);
        }
    };
    
    // Jeu
    addClickListener(elements.generateCodeBtn, generateRandomCode);
    addClickListener(elements.checkGuessBtn, checkGuess);

    // Navigation
    addClickListener(elements.closeExplanationBtn, () => hide(elements.explanationPopup));
    addClickListener(elements.goToShopBtn, () => { hide(elements.container); show(elements.shop); });
    addClickListener(elements.goBackBtn, () => { hide(elements.shop); show(elements.container); });
    addClickListener(elements.goToPartnersPageBtn, () => { hide(elements.container); show(elements.partnersPage); });
    addClickListener(elements.goBackToMainBtn, () => { hide(elements.partnersPage); show(elements.container); });

    // Authentification
    addClickListener(elements.openAuthPopupBtn, () => show(elements.authPopup));
    addClickListener(elements.closeAuthPopupBtn, () => hide(elements.authPopup));
    addClickListener(elements.showRegisterBtn, () => { hide(elements.loginForm); show(elements.registerForm); });
    addClickListener(elements.showLoginBtn, () => { hide(elements.registerForm); show(elements.loginForm); });
    addClickListener(elements.registerBtn, register);
    addClickListener(elements.loginBtn, login);
    addClickListener(elements.logoutBtn, logout);

    // Menu utilisateur et Paramètres
    addClickListener(elements.settingsBtn, () => { hide(elements.userMenu); show(elements.settingsPage); });
    addClickListener(elements.goBackToMenuBtn, () => { hide(elements.settingsPage); show(elements.userMenu); });
    
    // Mode sombre
    if (elements.darkModeToggle) {
        elements.darkModeToggle.addEventListener('change', () => {
            isDarkMode = elements.darkModeToggle.checked;
            localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
            applyDarkMode();
        });
    }

    // --- Initialisation ---
    const init = () => {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        updateUIForUser();
        applyDarkMode();
    };

    init();
});
