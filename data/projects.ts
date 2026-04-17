import type { LocalizedText } from "@/lib/types";

export type ProjectItem = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  longDescription?: LocalizedText;
  startDate?: LocalizedText;
  endDate?: LocalizedText;
  technologies?: string[];
  contributions?: LocalizedText[];
  icon: "spark" | "code" | "globe";
  groups: string[];
};

export const projects: ProjectItem[] = [
  {
    id: "ai-clash-royale",
    title: { it: "IA Clash Royale", en: "AI Player on Clash Royale" },
    description: {
      it: "Sistema di IA autonomo per Clash Royale basato su riconoscimento visivo e inferenza logica in Datalog.",
      en: "Autonomous Clash Royale AI based on real‑time image recognition and Datalog inference."
    },
    longDescription: {
      it: "Sistema di IA autonomo per Clash Royale basato su riconoscimento visivo e inferenza logica in Datalog. L’agente analizza la board tramite OpenCV, genera fatti osservabili e seleziona le mosse ottimali attraverso regole implementate con pyDatalog.",
      en: "Autonomous Clash Royale AI based on real‑time image recognition and Datalog inference. The agent extracts logical facts from the screen using OpenCV and selects optimal actions through rule‑based reasoning implemented with pyDatalog."
    },
    startDate: { it: "Mag 2023", en: "May 2023" },
    endDate: { it: "Mag 2023", en: "May 2023" },
    technologies: ["Python", "pyDatalog", "OpenCV", "NumPy"],
    contributions: [
      { it: "Implementazione dell’intera Base di Conoscenza in Datalog, definendo fatti, regole e inferenze per oltre 100 scenari tattici.", en: "Designed and implemented the full Datalog Knowledge Base, defining facts, rules, and inference patterns for 100+ tactical scenarios." },
      { it: "Integrazione tra OpenCV e pyDatalog, creando una pipeline che converte automaticamente gli oggetti riconosciuti in fatti logici.", en: "Integrated OpenCV with pyDatalog, enabling automatic conversion of visual detections into logical facts." },
      { it: "Ottimizzazione del ciclo sense–think–act, riducendo la latenza decisionale e migliorando la reattività dell’agente in tempo reale.", en: "Optimized the sense–think–act loop, improving latency and real‑time responsiveness of the agent." }
    ],
    icon: "spark",
    groups: ["AI"]
  },
  {
    id: "tracknet",
    title: { it: "TrackNet - Piattaforma da Gaming", en: "TrackNet - Gaming Platform" },
    description: {
      it: "TrackNet è una piattaforma web sviluppata con Spring Boot che permette di cercare profili e statistiche dei giocatori di Fortnite, League of Legends e Brawl Stars tramite chiamate API.",
      en: "TrackNet is a Spring Boot web platform that retrieves player profiles and statistics from Fortnite, League of Legends, and Brawl Stars through external API calls."
    },
    longDescription: {
      it: "TrackNet è una piattaforma web sviluppata con Spring Boot che permette di cercare profili e statistiche dei giocatori di Fortnite, League of Legends e Brawl Stars tramite chiamate API. Utilizza JSP, AJAX e PostgreSQL con pattern DAO per la gestione utenti, preferiti e inviti.",
      en: "TrackNet is a Spring Boot web platform that retrieves player profiles and statistics from Fortnite, League of Legends, and Brawl Stars through external API calls. It uses JSP, AJAX, and PostgreSQL with the DAO pattern to manage users, favorites, and invitations."
    },
    startDate: { it: "Giu 2022", en: "Jun 2022" },
    endDate: { it: "Lug 2022", en: "Jul 2022" },
    technologies: ["Java", "Spring Boot", "Java Server Pages", "AJAX", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
    contributions: [
      { it: "Integrazione delle API esterne per recuperare profili e statistiche da Fortnite, League of Legends e Brawl Stars tramite chiamate AJAX e servizi Spring Boot.", en: "Integrated external APIs to retrieve player profiles and statistics from Fortnite, League of Legends, and Brawl Stars using AJAX and Spring Boot services." },
      { it: "Implementazione della logica di gestione utenti, inclusi login, registrazione, privilegi admin e funzionalità riservate agli utenti autenticati.", en: "Implemented user management logic, including login, registration, admin privileges, and restricted-access features." },
      { it: "Sviluppo del sistema di preferiti e inviti, con memorizzazione su PostgreSQL e invio email tramite backend.", en: "Developed the favorites and invitation system, storing data in PostgreSQL and enabling email-based play invitations." },
      { it: "Progettazione e ottimizzazione dell’architettura DAO, garantendo modularità, pulizia del codice e separazione tra livelli applicativi.", en: "Designed and optimized the DAO-based architecture, ensuring modularity, clean code, and proper separation of application layers." }
    ],
    icon: "globe",
    groups: ["Web"]
  },
  {
    id: "forest-fire-simulator",
    title: { it: "Foresta - Simulatore di Incendi", en: "Forest - Fire Simulator" },
    description: {
      it: "Foresta è un automa cellulare implementato in C++ che simula l’evoluzione di un ecosistema boschivo tramite regole locali e aggiornamenti paralleli, sviluppato per l’esame di Algoritmi Paralleli e Sistemi Distribuiti.",
      en: "Foresta is a C++ cellular automaton that simulates the evolution of a forest ecosystem through local rules and parallel grid updates, developed for the Parallel Algorithms and Distributed Systems exam."
    },
    longDescription: {
      it: "Foresta è un automa cellulare bidimensionale sviluppato in C++ per modellare l’evoluzione di un ecosistema boschivo. Il progetto è stato realizzato per l’esame di Algoritmi Paralleli e Sistemi Distribuiti presso l’Università della Calabria e implementa un insieme di regole locali che determinano lo stato di ogni cella (albero, terreno vuoto, incendio, rigenerazione). L’aggiornamento della griglia avviene in modo sincrono e parallelo, sfruttando tecniche di decomposizione del dominio e gestione concorrente delle celle.",
      en: "Foresta is a two‑dimensional cellular automaton implemented in C++ to model the evolution of a forest ecosystem. Developed for the Parallel Algorithms and Distributed Systems course at the University of Calabria, the project defines a set of local transition rules governing each cell’s state (tree, empty ground, fire, regrowth). The grid is updated synchronously and in parallel, using domain decomposition and concurrent processing techniques."
    },
    startDate: { it: "Giu 2022", en: "Jun 2022" },
    endDate: { it: "Lug 2022", en: "Jul 2022" },
    technologies: ["C++", "OpenMP", "MPI"],
    contributions: [
      { it: "Implementazione completa dell’automa cellulare, definendo stati, regole di transizione e aggiornamento sincrono della griglia.", en: "Implemented the full cellular automaton model, defining cell states, transition rules, and the synchronous update mechanism governing the evolution of the forest grid." },
      { it: "Ottimizzazione del calcolo parallelo, migliorando le prestazioni tramite suddivisione del dominio e gestione concorrente delle celle.", en: "Optimized parallel computation, applying domain decomposition and concurrent update strategies to improve performance on large-scale simulations." },
      { it: "Progettazione della struttura dati della foresta, garantendo efficienza nelle operazioni ripetute e nella gestione della memoria.", en: "Designed and structured the data model, ensuring efficient memory usage and fast access patterns for repeated grid operations." },
      { it: "Analisi e validazione dei risultati, verificando la correttezza della simulazione e il comportamento emergente del sistema.", en: "Validated and analyzed simulation behavior, verifying correctness, emergent patterns, and the impact of rule configurations on forest dynamics." }
    ],
    icon: "code",
    groups: ["C++"]
  },
  {
    id: "inventory-management",
    title: { it: "Management Inventory Software - Gestione dell'Inventario", en: "Management Inventory Software" },
    description: {
      it: "Management Inventory Software è un gestionale Java (JDK 15, Maven) che permette di amministrare l’inventario di un negozio tramite interfacce grafiche FXML/CSS e database SQLite. ",
      en: "Management Inventory Software is a Java (JDK 15, Maven) application that manages store inventory using FXML/CSS graphical interfaces and an SQLite database."
    },
    longDescription: {
      it: "Management Inventory Software è un gestionale Java (JDK 15, Maven) che permette di amministrare l’inventario di un negozio tramite interfacce grafiche FXML/CSS e database SQLite. Include funzioni di modifica prodotti, statistiche automatiche, gestione sconti e esportazione in PDF.",
      en: "Management Inventory Software is a Java (JDK 15, Maven) application that manages store inventory using FXML/CSS graphical interfaces and an SQLite database. It includes product editing, automatic statistics, discount management, and PDF export."
    },
    startDate: { it: "Dic 2021", en: "Dec 2021" },
    endDate: { it: "Feb 2022", en: "Feb 2022" },
    technologies: ["Java 15", "FXML", "CSS", "Gluon Scene Builder", "SQLite", "PDF Export Module"],
    contributions: [
      { it: "Progettazione e sviluppo dell’interfaccia grafica in FXML/CSS tramite Scene Builder, con gestione completa degli eventi.", en: "Designed and implemented the full FXML/CSS interface, including event handling and dynamic UI updates." },
      { it: "Implementazione della logica di gestione prodotti, incluse modifica, rimozione e aggiornamento dinamico dell’inventario.", en: "Developed the product management logic, enabling editing, removal, and real‑time inventory updates." },
      { it: "Sviluppo del modulo statistiche, con query SQL ottimizzate per calcolare prezzi e disponibilità.", en: "Built the statistics module, using optimized SQL queries to compute price and availability metrics." },
      { it: "Gestione sconti e persistenza impostazioni, con salvataggio automatico su settings.txt ed esportazione dell’inventario in PDF.", en: "Implemented discount management and settings persistence, saving values to settings.txt and enabling PDF export of the inventory." }
    ],
    icon: "code",
    groups: ["Java"]
  },
  {
    id: "management-system",
    title: { it: "Gestionale Accademico", en: "Academic Management System" },
    description: {
      it: "Un gestionale accademico sviluppato in C++ con Qt per amministrare Autori, Conferenze, Riviste e Articoli.",
      en: "A C++/Qt management system for handling Authors, Conferences, Journals, and Articles."
    },
    longDescription: {
      it: "Un gestionale accademico sviluppato in C++ con Qt per amministrare Autori, Conferenze, Riviste e Articoli. Include interfacce multi‑pagina, validazione dei campi, navigazione tramite QStackedWidget e strutture dati dinamiche.",
      en: "A C++/Qt management system for handling Authors, Conferences, Journals, and Articles. It features multi‑page GUI navigation, field validation, dynamic data structures, and event‑driven interactions."
    },
    startDate: { it: "Gen 2021", en: "Jan 2021" },
    endDate: { it: "Feb 2021", en: "Feb 2021" },
    technologies: ["C++", "Qt Framework", "QStackedWidget", "QMessageBox", "QDate", "QTime", "ComboBox", "QListWidget"],
    contributions: [
      { it: "Implementazione completa della GUI Qt, con navigazione multi‑pagina, gestione eventi e messaggi di stato.", en: "Designed and implemented the full Qt GUI, including multi‑page navigation, event handling, and status messaging." },
      { it: "Sviluppo della logica di gestione delle entità, incluse validazioni, controlli di unicità e aggiornamento dinamico delle liste.", en: "Developed the entity management logic, with validation rules, uniqueness checks, and dynamic list updates." },
      { it: "Progettazione delle strutture dati e gestione della memoria, con distruzione sicura degli oggetti creati dinamicamente.", en: "Structured data handling and memory management, ensuring safe cleanup of dynamically allocated objects." },
      { it: "Automazione del popolamento delle interfacce, come combo‑box e contenitori, in base ai dati inseriti dall’utente.", en: "Automated UI population, such as combo boxes and containers, based on user‑generated data." }
    ],
    icon: "code",
    groups: ["C++"]
  },
  {
    id: "weather-forecasting",
    title: { it: "WeatherApp - Previsioni Meteorologiche", en: "WeatherApp - Weather Forecasting" },
    description: {
      it: "Un’applicazione mobile sviluppata in Python con Kivy, che permette di cercare una città e visualizzare la temperatura corrente tramite API OpenWeather.",
      en: "A mobile weather application built in Python using Kivy, capable of retrieving the current temperature of any city through the OpenWeather API."
    },
    longDescription: {
      it: "Un’applicazione mobile sviluppata in Python con Kivy, che permette di cercare una città e visualizzare la temperatura corrente tramite API OpenWeather. L’app è compilabile in APK e installabile su dispositivi Android.",
      en: "A mobile weather application built in Python using Kivy, capable of retrieving the current temperature of any city through the OpenWeather API. The app can be packaged as an APK and installed on Android devices."
    },
    startDate: { it: "Ott 2022", en: "Oct 2022" },
    endDate: { it: "Nov 2022", en: "Nov 2022" },
    technologies: ["Python 3", "Kivy", "OpenWeather API", "Mobile UI design", "Event‑Driven Programming"],
    contributions: [
      { it: "Sviluppo completo dell’interfaccia mobile Kivy, con layout responsive e componenti ottimizzati per il touch.", en: "Designed and implemented the full mobile Kivy interface, with responsive layout and touch‑optimized components." },
      { it: "Integrazione dell’API OpenWeather, con gestione asincrona delle richieste tramite UrlRequest.", en: "Integrated the OpenWeather API, handling asynchronous HTTP requests via UrlRequest." },
      { it: "Implementazione della logica di ricerca, parsing della risposta JSON e aggiornamento dinamico dell’interfaccia.", en: "Developed the search logic, parsing JSON responses and updating the UI dynamically." },
      { it: "Compilazione e packaging dell’app in APK, rendendola installabile su dispositivi Android.", en: "Packaged the application as an APK, making it installable on Android devices." }
    ],
    icon: "code",
    groups: ["Python"]
  },
  {
    id: "gestione-biblioteca",
    title: { it: "Gestione Biblioteca", en: "Library Management" },
    description: {
      it: "Gestionale completo per biblioteche con Swing, H2, autenticazione, CRUD e report PDF.",
      en: "Full library management system with Swing, H2, authentication, CRUD and PDF reports."
    },
    longDescription: {
      it: "Applicazione desktop professionale con dashboard, gestione prestiti, cittadini, libri e utenti. Include soft delete, filtri avanzati, sincronizzazione real‑time e reportistica PDF.",
      en: "Professional desktop system with dashboard, loan management, citizens, books and user administration. Includes soft delete, advanced filters, real‑time sync and PDF reporting."
    },
    startDate: { it: "Ott 2022", en: "Oct 2022" },
    endDate: { it: "Nov 2022", en: "Nov 2022" },
    technologies: ["Java 17", "Swing", "H2 Database", "FlatLaf", "OpenPDF", "AI‑Generated Code"],
    contributions: [
      { it: "Implementazione completa del modello di automa logico in Datalog tramite pyDatalog.", en: "Implemented the full Datalog logic model using pyDatalog." },
      { it: "Sviluppo della pipeline di computer vision per estrarre fatti logici dalla board.", en: "Built the computer‑vision pipeline to extract logical facts from the game board." },
      { it: "Progettazione del ciclo decisionale sense–think–act con regole tattiche e strategiche.", en: "Designed the sense–think–act decision loop with tactical and strategic rules." },
      { it: "Integrazione dei moduli e ottimizzazione delle prestazioni in tempo reale. Nota IA: usata solo per supporto grafico e mockup UI.", en: "Integrated all modules and optimized real‑time performance. AI Note: used only for UI mockups and visual suggestions." }
    ],
    icon: "code",
    groups: ["Java", "AI"]
  },
  {
    id: "alimentari-management",
    title: { it: "Alimentari Lanzo", en: "Alimentari Lanzo" },
    description: {
      it: "Alimentari Lanzo è un sito web dinamico per un negozio alimentare, sviluppato con HTML, CSS, JavaScript e PHP, e hostato su Altervista.",
      en: "Alimentari Lanzo is a dynamic website for a grocery shop, built with HTML, CSS, JavaScript and PHP, and hosted on Altervista."
    },
    longDescription: {
      it: "Alimentari Lanzo è un sito web dinamico per un negozio alimentare, sviluppato con HTML, CSS, JavaScript e PHP, e hostato su Altervista. Include catalogo prodotti, carrello, form contatti e pannello di gestione.",
      en: "Alimentari Lanzo is a dynamic website for a grocery shop, built with HTML, CSS, JavaScript and PHP, and hosted on Altervista. It includes a product catalog, shopping cart, contact form and admin panel."
    },
    startDate: { it: "Mar 2019", en: "Mar 2019" },
    endDate: { it: "Lug 2019", en: "Jul 2019" },
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Hosting Altervista"],
    contributions: [
      { it: "Sviluppo completo del frontend in HTML/CSS/JS, con layout responsive e UX moderna.", en: "Developed the full HTML/CSS/JS frontend with responsive layout and modern UX." },
      { it: "Implementazione del backend PHP per la gestione prodotti, carrello e form contatti.", en: "Implemented the PHP backend for product management, cart logic and contact form." },
      { it: "Configurazione del database MySQL su Altervista e integrazione con il sito.", en: "Configured the MySQL database on Altervista and integrated it with the website." },
      { it: "Deploy completo del progetto su Altervista, con ottimizzazione delle performance.", en: "Fully deployed the project on Altervista with performance optimizations." }
    ],
    icon: "code",
    groups: ["Web", "PHP"]
  }
];

export function getProjectGroups(): string[] {
  return [...new Set(projects.flatMap((p) => p.groups))];
}

export function getProjectsByGroup(group: string): ProjectItem[] {
  return projects.filter((p) => p.groups.includes(group));
}

export function isProjectInProgress(project: ProjectItem): boolean {
  return (
    !project.longDescription ||
    !project.startDate ||
    !project.endDate ||
    !project.technologies?.length ||
    !project.contributions?.length
  );
}
