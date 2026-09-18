const BASE = import.meta.env.BASE_URL;
const GH = "https://github.com/InputOutputStream";

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Open Source", link: "#open-source" },
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
  { value: 15, suffix: "+", label: "Projets techniques documentés" },
  { value: 3, suffix: "", label: "Hackathons & compétitions" },
  { value: 1, suffix: "er", label: "Place — FraudZen, TU Berlin" },
];

// "Abilities" reframed to his actual strengths, not generic freelancer copy
const abilities = [
  {
    imgPath: `${BASE}images/seo.png`,
    title: "Bas niveau, sans filet",
    desc: "C/C++ pour des systèmes qui doivent tenir : hyperviseurs, serveurs réseau, cryptographie, noyau Unix. Pas de framework entre moi et la machine.",
  },
  {
    imgPath: `${BASE}images/chat.png`,
    title: "Sécurité par construction",
    desc: "Autorité de certification, TLS, durcissement système, détection d'intrusion — je conçois en pensant à ce qui peut être attaqué, pas seulement à ce qui marche.",
  },
  {
    imgPath: `${BASE}images/time.png`,
    title: "Comprendre avant d'utiliser",
    desc: "J'ai réécrit un transformer GPT et un réseau de neurones en Python pur (sans NumPy) avant de toucher PyTorch — pour savoir ce qui se passe sous le capot.",
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
    scale: 0.8,
    rotation: [1.7, -Math.PI / 7.5, -0.2],
  },
  {
    name: "C++ Programming",
    modelPath: `${BASE}models/cpp.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: `${BASE}models/python-transformed.glb`,
    scale: 0.6,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend / Systems",
    modelPath: `${BASE}models/node-transformed.glb`,
    scale: 3,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: `${BASE}models/git-svg-transformed.glb`,
    scale: 0.03,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Showcase projects — three headline projects for the top ShowCaseSection.
// Thoth Cloud stays the flagship (biggest / most technically complete).
// GeneAtlas Cameroun added as a live, verifiable deployed project.
const showcaseProjects = {
  main: {
    title: "Thoth Cloud — une plateforme IaaS/PaaS/SaaS multi-tenant construite from scratch",
    description:
      "Backend C++ (cpp-httplib) au-dessus de libvirt, orchestrant des machines virtuelles KVM et des workloads Docker Swarm sur plusieurs hôtes physiques. Création de VM, migration live, snapshots, accès console noVNC et provisioning automatique via cloud-init — testé avec 10+ VMs simultanées.",
    image: `${BASE}images/project1.png`,
    tags: ["C++", "KVM/QEMU", "libvirt", "Docker Swarm", "PostgreSQL"],
    link: GH,
  },
  secondary: [
    {
      title: "GeneAtlas Cameroun",
      description: "Prototype d'exploration génomique — recherche de traits/gènes par groupe ethnolinguistique camerounais",
      image: `${BASE}images/project-geneatlas.png`,
      link: "https://project-geneatlas-cameroon.vercel.app/",
      bg: "#16213e",
    },
    {
      title: "PKI Infrastructure & wrapper TLS universel",
      description: "Autorité de certification complète + sécurisation de protocoles legacy",
      image: `${BASE}images/project2.png`,
      link: GH,
      bg: "#0f3460",
    },
    {
      title: "IntelliStore",
      description: "Paiement automatique par vision — reconnaissance faciale & détection produit",
      image: `${BASE}images/project3.png`,
      link: GH,
      bg: "#1a1a2e",
    },
  ],
};

// Real project experience — replaces the fake "Hostinger / Docker Inc / Appwrite" jobs.
// Expanded with every project confirmed either via CV or directly verified on GitHub
// (see repo links below — fetched and confirmed live).
const expCards = [
  {
    review:
      "Plateforme IaaS/PaaS/SaaS multi-tenant : orchestration de VMs KVM sur plusieurs hôtes physiques, avec snapshots, migration, accès console noVNC et provisioning automatique via cloud-init. PaaS via Docker Swarm (WordPress, Odoo, Moodle), SaaS auto-hébergé (OwnCloud + OnlyOffice).",
    imgPath: `${BASE}images/exp1.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "Thoth Cloud — Plateforme IaaS/PaaS/SaaS Multi-tenant",
    date: "2025 — en cours",
    link: GH,
    responsibilities: [
      "Backend C++ (cpp-httplib) avec API REST et intégration libvirt",
      "Orchestration multi-hôtes coordonnée par SSH, 10+ VMs simultanées testées",
      "Déploiement d'applications conteneurisées via Docker Swarm ; isolation multi-tenant",
    ],
  },
  {
    review:
      "Fork du noyau xv6 (MIT) avec ajout d'un mécanisme de swap mémoire virtuelle et pagination vers disque — plongée directe dans la gestion mémoire d'un système d'exploitation réel, en C et Assembly RISC-V.",
    imgPath: `${BASE}images/exp-xv6.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "XV6 — Noyau Unix modifié (mécanisme de swap)",
    date: "2025",
    link: GH,
    responsibilities: [
      "Modification du gestionnaire de mémoire virtuelle pour supporter le swap disque",
      "Tests automatisés en Python, documentation technique, gestion des cas limites",
      "Technologies : C, Assembly RISC-V, gestion mémoire bas niveau",
    ],
  },
  {
    review:
      "Autorité de certification complète avec API REST pour la génération et la révocation de certificats SSL/TLS, plus un wrapper TLS universel pour sécuriser n'importe quel protocole legacy.",
    imgPath: `${BASE}images/exp2.png`,
    logoPath: `${BASE}images/logo2.png`,
    title: "Infrastructure PKI & Sécurisation de protocoles",
    date: "2025",
    link: GH,
    responsibilities: [
      "OpenSSL + Flask pour la CA et la gestion du cycle de vie des certificats",
      "Wrapper TLS universel (Telnet, FTP, HTTP, LDAP, SMTP)",
      "Reverse proxy Traefik, conteneurisation Docker",
    ],
  },
  {
    review:
      "Moteur d'autograd from scratch en C++ pur : graphe de calcul dynamique, différentiation automatique (reverse-mode), classe Matrix N-dimensionnelle générique via templates.",
    imgPath: `${BASE}images/exp-tensorf.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "TensorF — Moteur d'autograd & bibliothèque tensorielle en C++",
    date: "2025 — 2026",
    link: GH,
    responsibilities: [
      "Différentiation automatique reverse-mode implémentée sans dépendance externe",
      "Templates C++ pour les opérations matmul batché et élément-wise",
      "Démontre la compréhension des fondements mathématiques du Deep Learning",
    ],
  },
  {
    review:
      "Système de magasin intelligent combinant reconnaissance faciale et détection de produits, avec un backend C/C++ haute performance couplé à un service Python de vision par ordinateur.",
    imgPath: `${BASE}images/exp3.png`,
    logoPath: `${BASE}images/logo3.png`,
    title: "IntelliStore — Paiement automatique par vision",
    date: "2026",
    link: GH,
    responsibilities: [
      "OpenCV + face_recognition pour l'identification client et la détection de produits",
      "Architecture hybride C/C++ (système principal) et Python (ML)",
      "Persistance PostgreSQL, serveur web Mongoose",
    ],
  },
  {
    review:
      "Prototype d'exploration génomique : recherche par trait, gène ou groupe ethnolinguistique camerounais. Données de population illustratives (construites à partir de MalariaGEN, H3Africa, GWAS Catalog) pour démontrer l'interface ; la recherche de gène interroge en direct l'API publique du GWAS Catalog.",
    imgPath: `${BASE}images/project-geneatlas.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "GeneAtlas Cameroun — Prototype d'exploration génomique",
    date: "2026",
    link: "https://project-geneatlas-cameroon.vercel.app/",
    responsibilities: [
      "Interface de recherche par trait/gène avec panneau de lookup live sur le GWAS Catalog",
      "Démonstration honnête : distinction claire entre données illustratives et données live",
      "Vise à rendre visibles des données génomiques rarement représentées pour l'Afrique centrale",
    ],
  },
];

const expLogos = [];

// Real, independently-verifiable open source projects — every one of these
// was fetched and confirmed live on GitHub before being added here.
const openSourceProjects = [
  {
    name: "transformer-gpt-numpy",
    description:
      "Transformer GPT implémenté entièrement en NumPy pur (sans TensorFlow/PyTorch) : embeddings, attention multi-têtes, backpropagation manuelle, stabilisation numérique du softmax.",
    link: `${GH}/transformer-gpt-numpy`,
    stars: 2,
    lang: "Jupyter Notebook",
  },
  {
    name: "scratch_neural_network",
    description:
      "Perceptron 3 couches codé en Python pur — sans NumPy, sans pandas. Backpropagation, descente de gradient et softmax réimplémentés à la main ; ~85% d'accuracy sur un sous-ensemble MNIST.",
    link: `${GH}/scratch_neural_network`,
    stars: 0,
    lang: "Jupyter Notebook",
  },
  {
    name: "intrusion_detection_wmi",
    description:
      "Détection d'intrusion Windows via la librairie WMI en Python : parcours des journaux d'événements système pour repérer et signaler tous les événements de connexion (logon).",
    link: `${GH}/intrusion_detection_wmi`,
    stars: 2,
    lang: "Python",
  },
  {
    name: "backup_management_With_rsync",
    description:
      "Trois scripts Bash pour la gestion de sauvegardes : sauvegarde complète, sauvegarde incrémentielle (hard-links), et nettoyage automatique par expiration.",
    link: `${GH}/backup_management_With_rsync`,
    stars: 0,
    lang: "Shell",
  },
  {
    name: "whatsapp_bot",
    description: "Bot d'automatisation WhatsApp.",
    link: `${GH}/whatsapp_bot`,
    stars: 0,
    lang: "Python",
  },
];

// Real testimonials/distinctions + verified open-source badges
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
    mentions: "Projet open source · 2★",
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
  { name: "github", imgPath: `${BASE}images/github.png`, url: GH },
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
  showcaseProjects,
  openSourceProjects,
  GH,
};
