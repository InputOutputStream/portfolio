const BASE = import.meta.env.BASE_URL;

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Distinctions", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// Hero rotating words — short on purpose, this line shares space with the 3D model
const words = [
  { text: "Systems", imgPath: `${BASE}images/code.svg` },
  { text: "Security", imgPath: `${BASE}images/ideas.svg` },
  { text: "ML/AI", imgPath: `${BASE}images/concepts.svg` },
  { text: "Infra", imgPath: `${BASE}images/designs.svg` },
  { text: "Systems", imgPath: `${BASE}images/code.svg` },
  { text: "Security", imgPath: `${BASE}images/ideas.svg` },
  { text: "ML/AI", imgPath: `${BASE}images/concepts.svg` },
  { text: "Infra", imgPath: `${BASE}images/designs.svg` },
];

// Real, honest numbers — no fake "200+ clients"
const counterItems = [
  { value: 10, suffix: "+", label: "VMs orchestrated simultaneously" },
  { value: 3, suffix: "", label: "Hackathons & competitions" },
  { value: 5, suffix: "", label: "Systems projects shipped" },
  { value: 1, suffix: "st", label: "Place — FraudZen, TU Berlin" },
];

// "Abilities" reframed to his actual strengths, not generic freelancer copy
const abilities = [
  {
    imgPath: `${BASE}images/seo.png`,
    title: "Bas niveau, sans filet",
    desc: "C/C++ pour des systèmes qui doivent tenir : hyperviseurs, serveurs réseau, cryptographie. Pas de framework entre moi et la machine.",
  },
  {
    imgPath: `${BASE}images/chat.png`,
    title: "Sécurité par construction",
    desc: "Autorité de certification, TLS, durcissement système — je conçois en pensant à ce qui peut être attaqué, pas seulement à ce qui marche.",
  },
  {
    imgPath: `${BASE}images/time.png`,
    title: "Comprendre avant d'utiliser",
    desc: "J'ai réécrit un transformer GPT et des algorithmes de RL en NumPy pur avant de toucher PyTorch — pour savoir ce qui se passe sous le capot.",
  },
];

const logoIconsList = [];

const techStackImgs = [
  { name: "C / C++", imgPath: `${BASE}images/logos/cpp.svg` },
  { name: "Python", imgPath: `${BASE}images/logos/python.svg` },
  { name: "KVM / libvirt", imgPath: `${BASE}images/logos/kvm.svg` },
  { name: "Docker Swarm", imgPath: `${BASE}images/logos/docker.svg` },
  { name: "OpenSSL / PKI", imgPath: `${BASE}images/logos/openssl.svg` },
  { name: "PostgreSQL", imgPath: `${BASE}images/logos/postgres.svg` },
  { name: "Linux", imgPath: `${BASE}images/logos/linux.svg` },
];

// 3D tech icons — keep the ones matching his real stack, drop React/frontend ones
const techStackIcons = [
  {
    name: "C Programming",
    modelPath: `${BASE}models/c_programming_language.glb`,
    scale: 1,
    rotation: [1.7, -Math.PI / 7.5, -0.2],
  },
  {
    name: "C++ Programming",
    modelPath: `${BASE}models/cpp.glb`,
    scale: 0.075,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: `${BASE}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend / Systems",
    modelPath: `${BASE}models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: `${BASE}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Real project experience — replaces the fake "Hostinger / Docker Inc / Appwrite" jobs
const expCards = [
  {
    review:
      "Plateforme IaaS multi-tenant : orchestration de VMs KVM sur plusieurs hôtes physiques, avec snapshots, migration, accès console noVNC et provisioning automatique via cloud-init.",
    imgPath: `${BASE}images/exp1.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "Thoth Cloud — Plateforme IaaS Multi-tenant",
    date: "2025 — en cours",
    responsibilities: [
      "Backend C++ (cpp-httplib) avec API REST et intégration libvirt",
      "Orchestration multi-hôtes coordonnée par SSH, 10+ VMs simultanées testées",
      "Déploiement d'applications conteneurisées (WordPress, Odoo, Moodle) via Docker Swarm",
    ],
  },
  {
    review:
      "Autorité de certification complète avec API REST pour la génération et la révocation de certificats SSL/TLS, plus un wrapper TLS universel pour sécuriser n'importe quel protocole legacy.",
    imgPath: `${BASE}images/exp2.png`,
    logoPath: `${BASE}images/logo2.png`,
    title: "Infrastructure PKI & Sécurisation de protocoles",
    date: "2025",
    responsibilities: [
      "OpenSSL + Flask pour la CA et la gestion du cycle de vie des certificats",
      "Wrapper TLS universel (Telnet, FTP, HTTP, LDAP, SMTP)",
      "Application pensée pour la sécurisation d'infrastructures IoT et embarquées",
    ],
  },
  {
    review:
      "Système de magasin intelligent combinant reconnaissance faciale et détection de produits, avec un backend C/C++ haute performance couplé à un service Python de vision par ordinateur.",
    imgPath: `${BASE}images/exp3.png`,
    logoPath: `${BASE}images/logo3.png`,
    title: "IntelliStore — Paiement automatique par vision",
    date: "2026",
    responsibilities: [
      "OpenCV + face_recognition pour l'identification client et la détection de produits",
      "Architecture hybride C/C++ (système principal) et Python (ML)",
      "Persistance PostgreSQL, serveur web Mongoose",
    ],
  },
];

const expLogos = [];

// Replaces fake client testimonials with real, verifiable distinctions
const testimonials = [
  {
    name: "NASA Space Apps Challenge 2025",
    mentions: "Finaliste Global",
    review:
      "Système de détection d'exoplanètes par apprentissage automatique — analyse automatique de courbes de lumière stellaires pour identifier des transits planétaires. Python, scikit-learn, traitement de signal.",
    imgPath: `${BASE}images/badge-nasa.png`,
  },
  {
    name: "Hackathon FraudZen — TU Berlin",
    mentions: "1ère place, équipe de 3",
    review:
      "Détection de fraude SIMBox dans les télécommunications par réseaux de neurones et techniques adversariales (SMOTE, PCA) — ciblant un type de fraude responsable de 3,11 milliards USD de pertes annuelles.",
    imgPath: `${BASE}images/badge-fraudzen.png`,
  },
  {
    name: "Transformer GPT — from scratch",
    mentions: "Projet personnel",
    review:
      "Implémentation complète d'un modèle GPT en NumPy pur, sans TensorFlow ni PyTorch — attention multi-têtes, backpropagation manuelle, tokenization, génération de texte.",
    imgPath: `${BASE}images/badge-gpt.png`,
  },
  {
    name: "Reinforcement Learning — double implémentation",
    mentions: "Projet personnel",
    review:
      "Q-Learning, SARSA, Policy Gradient, Actor-Critic, DQN — implémentés en NumPy pur puis en PyTorch, testés sur GridWorld, CartPole et Atari.",
    imgPath: `${BASE}images/badge-rl.png`,
  },
];

const socialImgs = [
  { name: "github", imgPath: `${BASE}images/github.png`, url: "https://github.com/InputOutputStream" },
  { name: "linkedin", imgPath: `${BASE}images/linkedin.png`, url: "https://www.linkedin.com/in/edu-guiedi-hermann-arnold" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};