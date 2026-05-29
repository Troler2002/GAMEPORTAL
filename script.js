document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURACIÓN DE IMÁGENES Y FALLBACK ---
    const DEFAULT_PLACEHOLDER = 'https://ui-avatars.com/api/?background=141414&color=ff1a1a&name=G';
    const DEFAULT_USER_IMG = 'https://ui-avatars.com/api/?background=ff1a1a&color=fff&name=User';

    /**
     * Capturador global de errores de carga de imágenes.
     * Detecta cualquier <img> que falle (404) y le asigna la imagen por defecto.
     */
    document.addEventListener('error', (e) => {
        if (e.target.tagName.toLowerCase() === 'img') {
            // Evitamos bucles infinitos si la imagen por defecto también falta
            if (!e.target.src.includes(DEFAULT_PLACEHOLDER)) {
                e.target.src = DEFAULT_PLACEHOLDER;
            }
        }
    }, true); // El parámetro 'true' es vital para capturar el error en la fase de captura

    // --- DATOS GLOBALES (Simulación de Base de Datos) ---
    const SITE_DATA = [
        // ARTÍCULOS DETALLADOS (PC Gaming / Tech)
        { 
            id: 'acer-aspire-maint', 
            title: 'Guía Completa: Cómo hacerle Mantenimiento a una Acer Aspire 3', 
            subtitle: 'Hardware & Software', 
            desc: `La Acer Aspire 3 es una de las laptops más populares por su equilibrio entre calidad y precio. Sin embargo, con el tiempo es normal que empiece a calentarse, a hacer ruido o a ponerse lenta. El polvo y el desgaste de la pasta térmica son los principales culpables.

En esta guía te exploramos, paso a paso, cómo realizar un mantenimiento preventivo completo (tanto físico como de sistema) para dejar tu laptop como nueva y alargar su vida útil.

🛠️ Fase 1: Mantenimiento Físico (Hardware)
⚠️ Antes de empezar: Apaga la laptop por completo, desconecta el cargador y trabaja sobre una superficie limpia y libre de estática.

1. Apertura del equipo
Retira todos los tornillos de la tapa trasera. Tip: Organízalos en el orden que los sacas, ya que algunos pueden tener tamaños diferentes.
Con una herramienta de apertura plástica (o una tarjeta vieja), haz palanca con cuidado por los bordes para soltar las grapas del chasis.
¡Importante! Lo primero que debes hacer al abrirla es desconectar el cable de la batería de la placa madre para evitar cualquier cortocircuito accidental.

2. Limpieza de ventiladores y disipador
Bloquea el ventilador con el dedo (para que no gire descontroladamente) y usa aire comprimido o una brocha suave para remover todo el polvo acumulado en las aspas y en las rejillas de ventilación.

3. Cambio de Pasta Térmica
Retira los tornillos que sujetan el disipador de cobre sobre el procesador.
Limpia los restos de la pasta térmica vieja y reseca usando un paño de microfibra o un hisopo humedecido con alcohol isopropílico.
Aplica una pequeña gota (del tamaño de un grano de arroz) de pasta térmica nueva de buena calidad en el centro del procesador y vuelve a colocar el disipador apretando los tornillos en cruz.

💻 Fase 2: Optimización del Sistema (Software)
No todo es limpieza física; el software también se satura. Sigue estos pasos para acelerar tu Acer Aspire 3:

1. Limpieza de archivos basura
Presiona las teclas Windows + R, escribe %temp% y presiona Enter. Elimina todos los archivos de esa carpeta (son temporales que solo ocupan espacio).
Usa el Liberador de espacio en disco integrado en Windows para borrar archivos del sistema innecesarios y vaciar la papelera.

2. Controla los programas de inicio
Abre el Administrador de tareas (Ctrl + Shift + Esc) y ve a la pestaña Aplicaciones de arranque.
Deshabilita programas pesados que no necesites que se abran solos al encender la laptop (como Spotify, Steam o launchers de software). Esto acelerará el encendido notablemente.

3. Mantén los drivers actualizados
Entra a la página oficial de soporte de Acer, introduce el número de serie de tu Aspire 3 y asegúrate de tener instalada la última versión del Chipset y los Drivers de Gráficos. Esto mejora la estabilidad y evita pantallas azules.

🚀 ¿Cada cuánto tiempo se debe hacer?
Para garantizar que tu Acer Aspire 3 funcione siempre al 100%, te recomendamos seguir esta rutina:
Limpieza de software: Cada 2 o 3 meses.
Limpieza física y cambio de pasta térmica: Cada 12 meses (o cada 6 meses si vives en un lugar con mucho polvo o mascotas).`, 
            badge: 'badge-support', 
            label: 'HARDWARE', 
            link: '#', 
            img: 'Img/Guía Completa Cómo hacerle Mantenimiento a una Acer Aspire 3.jpg', 
            type: 'tool', 
            btnText: 'Ver Guía Técnica' 
        },
        { id: 'atlas-os-guide', title: 'AtlasOS: El Windows definitivo', subtitle: 'Optimización Extrema de Software', desc: '...', badge: 'badge-pc', label: 'SOFTWARE', link: '#', img: 'Img/AtlasOS El Windows definitivo.jpg', type: 'tool', btnText: 'Descargar Playbook' },
        { id: 'xbox-s-storage', title: 'Xbox Series S: Almacenamiento', subtitle: 'Guía de Expansión de Consola', desc: '...', badge: 'badge-xbox', label: 'CONSOLAS', link: '#', img: 'Img/Xbox Series S Almacenamiento.jpg', type: 'tool', btnText: 'Ver Soluciones' },
        { 
            id: 'network-opt', 
            title: 'Optimización de Red para Gaming', 
            subtitle: 'Adiós al Lag y Packet Loss', 
            desc: `Lograr una conexión estable es vital para el gaming competitivo. El "lag" o latencia alta puede ser la diferencia entre la victoria y la derrota. En esta guía te enseñamos cómo optimizar tu red para obtener el menor ping posible.

🚀 Pasos Clave para la Optimización:

1. Conexión por Cable (Ethernet)
Siempre que sea posible, evita el Wi-Fi. Un cable Ethernet Cat 6 o Cat 7 proporciona una conexión mucho más estable y libre de interferencias electromagnéticas.

2. Configuración de DNS
Cambiar tus servidores DNS por unos más rápidos como los de Google (8.8.8.8) o Cloudflare (1.1.1.1) puede reducir los tiempos de resolución y mejorar la respuesta de la red.

3. Calidad de Servicio (QoS) en el Router
Accede a la configuración de tu router y prioriza el tráfico de tus dispositivos de juego sobre otros usos como streaming o descargas en segundo plano.`, 
            badge: 'badge-support', 
            label: 'SOFTWARE', 
            link: '#', 
            img: 'Img/Optimización de Red para Gaming.jpg', 
            type: 'tool', 
            btnText: 'Optimizar Ahora' 
        },

        // PC
        { title: 'Warframe', desc: '...', tags: ['Acción', 'F2P', 'Ninja'], badge: 'badge-pc', label: 'PC', link: 'pc.html', img: 'Img/Warframe.jpg', type: 'game' },
        { title: 'Delta Force', desc: '...', tags: ['FPS', 'Tactical', 'Shooter'], badge: 'badge-pc', label: 'PC', link: 'pc.html', img: 'Img/Delta Force.jpg', type: 'game' },
        { title: 'Cyberpunk 2077', desc: '...', tags: ['RPG', 'Open World', 'Cyberpunk'], badge: 'badge-pc', label: 'PC', link: 'pc.html', img: 'Img/Cyberpunk 2077.jpg', type: 'game' },
        { title: 'Starfield', desc: '...', tags: ['RPG', 'Exploration', 'Espacio'], badge: 'badge-pc', label: 'PC', link: 'pc.html', img: 'Img/Starfield.jpg', type: 'game' },
        { title: 'The Witcher 3: Wild Hunt', desc: '...', tags: ['RPG', 'Geralt', 'Fantasía'], badge: 'badge-pc', label: 'PC', link: 'pc.html', img: 'Img/The Witcher 3 Wild Hunt.jpg', type: 'game' },
        // XBOX
        { title: 'Halo Infinite', desc: '...', tags: ['FPS', 'Master Chief', 'Halo'], badge: 'badge-xbox', label: 'XBOX', link: 'xbox.html', img: 'Img/Halo Infinite.jpg', type: 'game' },
        { title: 'GTA V / Online', desc: '...', tags: ['Sandbox', 'Rockstar', 'GTA'], badge: 'badge-xbox', label: 'XBOX', link: 'xbox.html', img: 'Img/GTA V.jpg', type: 'game' },
        { title: 'Gears 5', desc: '...', tags: ['Shooter', 'Gears', 'Acción'], badge: 'badge-xbox', label: 'XBOX', link: 'xbox.html', img: 'Img/Gears 5.jpg', type: 'game' },
        { title: 'Forza Horizon 5', desc: '...', tags: ['Carreras', 'Autos', 'Forza'], badge: 'badge-xbox', label: 'XBOX', link: 'xbox.html', img: 'Img/Forza Horizon 5.jpg', type: 'game' },
        { title: 'Minecraft', desc: '...', tags: ['Sandbox', 'Bloques', 'Aventura'], badge: 'badge-xbox', label: 'XBOX', link: 'xbox.html', img: 'Img/Minecraft.jpg', type: 'game' },
        // PS3
        { title: 'God of War III', desc: '...', tags: ['Acción', 'Kratos', 'God of War'], badge: 'badge-ps3', label: 'PS3', link: 'ps3.html', img: 'Img/God of War III.jpg', type: 'game' },
        { title: 'Uncharted 2: Among Thieves', desc: '...', tags: ['Aventura', 'Drake', 'Shooter'], badge: 'badge-ps3', label: 'PS3', link: 'ps3.html', img: 'Img/Uncharted 2 Among Thieves.jpg', type: 'game' },
        { title: 'Metal Gear Solid 4', desc: '...', tags: ['Sigilo', 'Snake', 'Kojima'], badge: 'badge-ps3', label: 'PS3', link: 'ps3.html', img: 'Img/Metal Gear Solid 4.jpg', type: 'game' },
        { title: 'The Last of Us', desc: '...', tags: ['Survival', 'Joel', 'Ellie'], badge: 'badge-ps3', label: 'PS3', link: 'ps3.html', img: 'Img/The Last of Us.jpg', type: 'game' },
        // WII / DS
        { title: 'Super Mario Galaxy', desc: '...', tags: ['Nintendo', 'Mario', 'WII'], badge: 'badge-wii', label: 'WII', link: 'wii.html', img: 'Img/Super Mario Galaxy.jpg', type: 'game' },
        { title: 'Mario Kart Wii', desc: '...', tags: ['Nintendo', 'Kart', 'WII'], badge: 'badge-wii', label: 'WII', link: 'wii.html', img: 'Img/Mario Kart Wii.jpg', type: 'game' },
        { title: 'Wii Sports Resort', desc: '...', tags: ['Deportes', 'Nintendo', 'WII'], badge: 'badge-wii', label: 'WII', link: 'wii.html', img: 'Img/Wii Sports Resort.jpg', type: 'game' },
        { title: 'The Legend of Zelda: Twilight Princess', desc: '...', tags: ['Zelda', 'Link', 'WII'], badge: 'badge-wii', label: 'WII', link: 'wii.html', img: 'Img/The Legend of Zelda Twilight Princess.jpg', type: 'game' },
        { title: 'Pokémon HeartGold', desc: '...', tags: ['Pokémon', 'Nintendo', 'DS'], badge: 'badge-ds', label: 'DS', link: 'ds.html', img: 'Img/Pokémon HeartGold.jpg', type: 'game' },
        { title: 'New Super Mario Bros.', desc: '...', tags: ['Mario', 'Nintendo', 'DS'], badge: 'badge-ds', label: 'DS', link: 'ds.html', img: 'Img/New Super Mario Bros..jpg', type: 'game' },
        { title: 'Mario Kart DS', desc: '...', tags: ['Kart', 'Nintendo', 'DS'], badge: 'badge-ds', label: 'DS', link: 'ds.html', img: 'Img/Mario Kart DS.jpg', type: 'game' },
        { title: 'The Legend of Zelda: Phantom Hourglass', desc: '...', tags: ['Zelda', 'Link', 'DS'], badge: 'badge-ds', label: 'DS', link: 'ds.html', img: 'Img/The Legend of Zelda Phantom Hourglass.jpg', type: 'game' },
        // HERRAMIENTAS
        { title: 'AtlasOS Playbook', desc: '...', tags: ['Windows', 'Optimización', 'FPS'], badge: 'badge-support', label: 'TECH', link: 'descargas.html', img: 'Img/atlas-os-playbook.jpg', type: 'tool' },
        { title: 'Dolphin Emulator', desc: '...', tags: ['Wii', 'Emulator', 'Nintendo'], badge: 'badge-wii', label: 'WII', link: 'descargas.html', img: 'Img/dolphin-emulator.jpg', type: 'tool' },
        { title: 'MSI Afterburner', desc: '...', tags: ['GPU', 'Hardware', 'FPS'], badge: 'badge-support', label: 'TECH', link: 'descargas.html', img: 'Img/msi-afterburner.jpg', type: 'tool' },
        { title: 'DeSmuME v0.9.13', desc: '...', tags: ['DS', 'Emulator', 'Nintendo'], badge: 'badge-ds', label: 'DS', link: 'descargas.html', img: 'Img/desmume.jpg', type: 'tool' }
    ];

    // --- SELECTORES GLOBALES ---
    const gameDetailModal = document.getElementById('gameDetailModal');
    const communityFeed = document.getElementById('communityFeed');
    let imageViewerModal = document.getElementById('imageViewerModal');
    let viewerImg = document.getElementById('viewerImg');
    const searchInputs = document.querySelectorAll('.google-search-input');
    const btnToggleView = document.getElementById('btnToggleView');
    const modalViewInfo = document.getElementById('modalViewInfo');
    const modalViewChars = document.getElementById('modalViewChars');
    const modalTitle = document.getElementById('modalGameTitle');
    const modalSubtitle = document.getElementById('modalGameSubtitle');
    const modalImg = document.getElementById('modalGameImg');
    const modalSyn = document.getElementById('modalGameSynopsis');
    const modalTrickCodes = document.getElementById('modalTrickCodes');
    const modalFeatures = document.querySelector('.modal-features');
    const modalBadge = document.getElementById('modalGameBadge');
    const btnModalMain = gameDetailModal?.querySelector('.btn-modal-main');

    const successSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    successSound.volume = 0.5;

    const GAMER_STATS = {
        'TechGuru': { rank: 'Maestro de Hardware', posts: 154, trophies: 12 },
        'GhostPlayer': { rank: 'Infiltrado Élite', posts: 89, trophies: 5 },
        'PixelQueen': { rank: 'Diseñadora de Mundos', posts: 210, trophies: 18 },
        'JuanLauncher': { rank: 'Administrador', posts: 542, trophies: 25 },
        'Slayer': { rank: 'Cazador de Logros', posts: 45, trophies: 3 }
    };

    // Datos reales para el índice del foro
    const FORUM_DATA = {
        "Anuncios Oficiales": { threads: 15, posts: 42, lastUser: 'JuanLauncher', lastTime: 'Hace 5 min' },
        "Presentaciones": { threads: 124, posts: 312, lastUser: 'GhostPlayer', lastTime: 'Hace 1 hora' },
        "Mantenimiento de Consolas y PC": { threads: 45, posts: 156, lastUser: 'TechGuru', lastTime: 'Ayer' },
        "Software y AtlasOS": { threads: 89, posts: 542, lastUser: 'PixelQueen', lastTime: 'Hace 2 horas' }
    };

    const CHAR_DATA = {
        'Warframe': [
            { name: 'Excalibur', desc: 'Maestro de espadas y combate cuerpo a cuerpo.', img: 'Img/Excalibur.jpg' },
            { name: 'Lotus', desc: 'La guía misteriosa de todos los Tenno.', img: 'Img/Lotus.jpg' },
            { name: 'Volt', desc: 'Controlador de la electricidad y velocidad.', img: 'Img/Volt.jpg' }
        ],
        'Delta Force': [
            { name: 'Kai', desc: 'Especialista en asalto y tácticas de vanguardia.', img: 'Img/Kai.jpg' },
            { name: 'Luna', desc: 'Experta en reconocimiento y tiro de precisión.', img: 'Img/Luna.jpg' },
            { name: 'Terry', desc: 'Ingeniero de combate con armamento pesado.', img: 'Img/Terry.jpg' }
        ],
        'Cyberpunk 2077': [
            { name: 'V', desc: 'Mercenario en ascenso en Night City.', img: 'Img/V.jpg' },
            { name: 'Johnny Silverhand', desc: 'Rockero rebelde atrapado en un biochip.', img: 'Img/Johnny Silverhand.jpg' },
            { name: 'Panam Palmer', desc: 'Nómada experta en combate y conducción.', img: 'Img/Panam Palmer.jpg' }
        ],
        'Starfield': [
            { name: 'Sarah Morgan', desc: 'Líder de Constelación y ex-soldado.', img: 'Img/Sarah Morgan.jpg' },
            { name: 'Sam Coe', desc: 'Explorador y hábil pistolero de los Freestar Rangers.', img: 'Img/Sam Coe.jpg' },
            { name: 'Barrett', desc: 'Científico y explorador con gran carisma.', img: 'Img/Barrett.jpg' }
        ],
        'The Witcher 3: Wild Hunt': [
            { name: 'Geralt de Rivia', desc: 'El Lobo Blanco, un legendario brujo.', img: 'Img/Geralt de Rivia.jpg' },
            { name: 'Ciri', desc: 'La dama del espacio y el tiempo.', img: 'Img/Ciri.jpg' },
            { name: 'Yennefer', desc: 'Poderosa hechicera de Vengerberg.', img: 'Img/Yennefer.jpg' }
        ],
        'Halo Infinite': [
            { name: 'Master Chief', desc: 'Spartan-117, salvador de la humanidad.', img: 'Img/Master Chief.jpg' },
            { name: 'The Weapon', desc: 'Nueva IA de apoyo táctico.', img: 'Img/The Weapon.jpg' },
            { name: 'Ezcharum', desc: 'Líder de los Desterrados y formidable guerrero.', img: 'Img/Ezcharum.jpg' }
        ],
        'GTA V / Online': [
            { name: 'Michael', desc: 'Ex-ladrón de bancos retirado.', img: 'Img/Michael.jpg' },
            { name: 'Franklin', desc: 'Joven estafador buscando éxito.', img: 'Img/Franklin.jpg' },
            { name: 'Trevor', desc: 'Psicópata impredecible y violento.', img: 'Img/Trevor.jpg' }
        ],
        'Gears 5': [
            { name: 'Kait Diaz', desc: 'Soldado en busca de la verdad sobre su linaje.', img: 'Img/Kait Diaz.jpg' },
            { name: 'JD Fenix', desc: 'Héroe de guerra y líder del escuadrón.', img: 'Img/JD Fenix.jpg' },
            { name: 'Del Walker', desc: 'Estratega ingenioso y apoyo leal.', img: 'Img/Del Walker.jpg' }
        ],
        'Forza Horizon 5': [
            { name: 'Haley', desc: 'Directora del festival Horizon en México.', img: 'Img/Haley.jpg' },
            { name: 'Ramiro', desc: 'Guía local y experto en vuelos.', img: 'Img/Ramiro.jpg' },
            { name: 'Carmen', desc: 'Apasionada de la historia automovilística.' }
        ],
        'Minecraft': [
            { name: 'Steve', desc: 'El icónico aventurero constructor.', img: 'Img/Steve.jpg' },
            { name: 'Alex', desc: 'Maestra de la supervivencia y exploración.', img: 'Img/Alex.jpg' },
            { name: 'Creeper', desc: 'La criatura más explosiva y temida.', img: 'Img/Creeper.jpg' }
        ],
        'God of War III': [
            { name: 'Kratos', desc: 'El Fantasma de Esparta buscando venganza.', img: 'Img/Kratos.jpg' },
            { name: 'Zeus', desc: 'Rey del Olimpo y enemigo final.', img: 'Img/Zeus.jpg' },
            { name: 'Pandora', desc: 'La clave para abrir la caja del Olimpo.', img: 'Img/Pandora.jpg' }
        ],
        'Uncharted 2: Among Thieves': [
            { name: 'Nathan Drake', desc: 'Cazador de tesoros y aventurero incansable.', img: 'Img/Nathan Drake.jpg' },
            { name: 'Chloe Frazer', desc: 'Habilidosa conductora y ladrona profesional.', img: 'Img/Chloe Frazer.jpg' },
            { name: 'Elena Fisher', desc: 'Periodista valiente y aliada de confianza.', img: 'Img/Elena Fisher.jpg' }
        ],
        'Metal Gear Solid 4': [
            { name: 'Old Snake', desc: 'Leyenda del espionaje en su última misión.', img: 'Img/Old Snake.jpg' },
            { name: 'Otacon', desc: 'Genio tecnológico y apoyo de Snake.', img: 'Img/Otacon.jpg' },
            { name: 'Liquid Ocelot', desc: 'El antagonista que controla las PMC.', img: 'Img/Liquid Ocelot.jpg' }
        ],
        'The Last of Us': [
            { name: 'Joel Miller', desc: 'Superviviente endurecido por el mundo post-apocalíptico.', img: 'Img/Joel Miller.jpg' },
            { name: 'Ellie', desc: 'Una joven con una inmunidad clave para la humanidad.', img: 'Img/Ellie.jpg' },
            { name: 'Tess', desc: 'Compañera de contrabando valiente y decidida.', img: 'Img/Tess.jpg' }
        ],
        'Super Mario Galaxy': [
            { name: 'Mario', desc: 'El fontanero más famoso de la galaxia.', img: 'Img/Mario.jpg' },
            { name: 'Rosalina', desc: 'Protectora del cosmos y madre de los Destellos.', img: 'Img/Rosalina.jpg' },
            { name: 'Luma', desc: 'Pequeña estrella que otorga poderes a Mario.', img: 'Img/Luma.jpg' }
        ],
        'Mario Kart Wii': [
            { name: 'Mario', desc: 'Piloto equilibrado y estrella de las carreras.', img: 'Img/Mario.jpg' },
            { name: 'Luigi', desc: 'El hermano de Mario con gran velocidad.', img: 'Img/Luigi.jpg' },
            { name: 'Rosalina', desc: 'Piloto pesada con un toque místico.', img: 'Img/Rosalina.jpg' }
        ],
        'Wii Sports Resort': [
            { name: 'Mii', desc: 'Tu avatar personalizado en la isla Wuhu.', img: 'Img/Mii.jpg' },
            { name: 'Matt', desc: 'El legendario campeón de boxeo y espada.', img: 'Img/Matt.jpg' },
            { name: 'Lucía', desc: 'Experta competidora en diversos deportes.', img: 'Img/Lucia.jpg' }
        ],
        'The Legend of Zelda: Twilight Princess': [
            { name: 'Link', desc: 'El héroe elegido por los dioses.', img: 'Img/Link.jpg' },
            { name: 'Midna', desc: 'La princesa del Crepúsculo.', img: 'Img/Midna.jpg' },
            { name: 'Zant', desc: 'El usurpador del trono del Crepúsculo.', img: 'Img/Zant.jpg' }
        ],
        'Pokémon HeartGold': [
            { name: 'Ethan', desc: 'Entrenador decidido a conquistar Johto.', img: 'Img/Ethan.jpg' },
            { name: 'Lyra', desc: 'Habilidosa entrenadora y amiga leal.', img: 'Img/Lyra.jpg' },
            { name: 'Profesor Elm', desc: 'Investigador de la evolución Pokémon.', img: 'Img/Profesor Elm.jpg' }
        ],
        'New Super Mario Bros.': [
            { name: 'Mario', desc: 'Héroe del Reino Champiñón.', img: 'Img/Mario.jpg' },
            { name: 'Luigi', desc: 'Compañero inseparable de aventuras.', img: 'Img/Luigi.jpg' },
            { name: 'Bowser', desc: 'Rey de los Koopas y eterno rival.', img: 'Img/Bowser.jpg' }
        ],
        'Mario Kart DS': [
            { name: 'Mario', desc: 'Icono de las carreras portátiles.', img: 'Img/Mario.jpg' },
            { name: 'Luigi', desc: 'Piloto ágil con succión de rebufo.', img: 'Img/Luigi.jpg' },
            { name: 'Peach', desc: 'Princesa con excelente manejo y aceleración.', img: 'Img/Peach.jpg' }
        ],
        'The Legend of Zelda: Phantom Hourglass': [
            { name: 'Link', desc: 'Héroe del Gran Mar en una nueva odisea.', img: 'Img/Link Phantom Hourglass.jpg' },
            { name: 'Linebeck', desc: 'Capitán cobarde pero necesario.', img: 'Img/Linebeck.jpg' },
            { name: 'Ciela', desc: 'Espíritu que guía a Link.', img: 'Img/Ciela.jpg' }
        ]
    };

    // Función auxiliar para renderizar cada fila del autocompletado
    const createAutocompleteItem = (item) => `
        <a href="${item.link}" class="google-item" data-title="${item.title}">
            <img src="${item.img}" alt="${item.title}">
            <div class="google-item-text">
                <strong>${item.title}</strong>
                <small>${item.label} • ${item.desc.substring(0, 60)}...</small>
            </div>
        </a>
    `;

    const generateAutocompleteSuggestions = (inputElement, searchTerm) => {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        const autocompleteContainer = inputElement.closest('.google-search-wrap').querySelector('.google-autocomplete');

        if (normalizedSearchTerm.length === 0) {
            autocompleteContainer.style.display = 'none';
            return;
        }

        const matched = SITE_DATA.filter(item =>
            item.title.toLowerCase().includes(normalizedSearchTerm) ||
            item.desc.toLowerCase().includes(normalizedSearchTerm) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(normalizedSearchTerm)))
        ).slice(0, 6);

        if (matched.length > 0) {
            let html = '';
            const games = matched.filter(i => i.type === 'game');
            const tools = matched.filter(i => i.type === 'tool');
            if (games.length > 0) html += `<div class="google-autocomplete-header">Juegos</div>` + games.map(item => createAutocompleteItem(item)).join('');
            if (tools.length > 0) html += `<div class="google-autocomplete-header">Herramientas</div>` + tools.map(item => createAutocompleteItem(item)).join('');
            autocompleteContainer.innerHTML = html;
            autocompleteContainer.style.display = 'block';
        } else {
            autocompleteContainer.innerHTML = `<div class="google-item" style="pointer-events: none; justify-content: center; padding: 25px; text-align: center;"><div class="google-item-text"><i class="fas fa-search-minus" style="color: var(--red-neon); font-size: 1.5rem; margin-bottom: 8px;"></i><strong>Sin coincidencias</strong></div></div>`;
            autocompleteContainer.style.display = 'block';
        }
    };

    // Lógica para mostrar/ocultar scrollbar según movimiento del mouse
    let scrollbarTimeout;
    const handleMouseMove = () => {
        document.body.classList.add('show-scrollbar');
        
        // Aplicar también a autocompletados activos
        const autocompletes = document.querySelectorAll('.google-autocomplete');
        autocompletes.forEach(el => el.classList.add('show-scrollbar'));

        clearTimeout(scrollbarTimeout);
        scrollbarTimeout = setTimeout(() => {
            document.body.classList.remove('show-scrollbar');
            autocompletes.forEach(el => el.classList.remove('show-scrollbar'));
        }, 1500); // Se oculta tras 1.5s de inactividad
    };

    window.addEventListener('mousemove', handleMouseMove);
    // También mostrar al hacer scroll
    window.addEventListener('scroll', handleMouseMove);

    // Mejorar accesibilidad de búsqueda: cerrar al click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.google-search-wrap')) {
            const autocompletes = document.querySelectorAll('.google-autocomplete');
            autocompletes.forEach(el => el.style.display = 'none');
        }
    });

    // Lógica para la página de resultados (Verifica si existe el grid de resultados)
    const resultsGrid = document.getElementById('resultsGrid');
    if (resultsGrid) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');
        const queryDisplay = document.getElementById('searchQueryDisplay');

        if (query && resultsGrid) {
            queryDisplay.textContent = query;
            const filtered = SITE_DATA.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) || 
                (item.desc && item.desc.toLowerCase().includes(query.toLowerCase())) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
            );

            if (filtered.length > 0) {
                resultsGrid.innerHTML = filtered.map(item => `
                    <div class="game-card game-card-trigger">
                        <div class="game-thumb">
                            <img src="${item.img}" alt="${item.title}">
                            <span class="badge ${item.badge}">${item.label}</span>
                        </div>
                        <div class="game-info">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                            <div class="tags">
                                ${(item.tags || []).map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                            <a href="${item.link}" class="btn-read" style="margin-top:15px; display:block;">Ver más <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                `).join('');
            } else {
                resultsGrid.innerHTML = `
                    <div class="no-results-msg" style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                        <i class="fas fa-search-minus" style="font-size: 4rem; color: #222; margin-bottom: 20px;"></i>
                        <h2 style="color: var(--text-white); margin-bottom: 10px;">No se encontraron resultados para "${query}"</h2>
                        <p style="color: var(--text-gray); max-width: 500px; margin: 0 auto;">No pudimos encontrar nada que coincida con tu búsqueda. Revisa la ortografía o intenta con palabras más generales.</p>
                        <br>
                        <a href="index.html" class="btn-read" style="display: inline-block;">Volver al inicio</a>
                    </div>`;
            }
        }
    }

    searchInputs.forEach(input => {
        // Global autocomplete suggestions
        input.addEventListener('input', (e) => {
            generateAutocompleteSuggestions(input, e.target.value);
        });

        // Hide suggestions when input loses focus, with a slight delay
        input.addEventListener('blur', () => {
            const wrap = input.closest('.google-search-wrap');
            if (wrap) wrap.classList.remove('focused');
            
            setTimeout(() => {
                const wrap = input.closest('.google-search-wrap');
                const autocompleteContainer = wrap ? wrap.querySelector('.google-autocomplete') : null;
                if (autocompleteContainer) {
                    autocompleteContainer.style.display = 'none';
                }
            }, 150); // Small delay to allow click on suggestion
        });

        // Show suggestions again if input gains focus and has text
        input.addEventListener('focus', (e) => {
            const wrap = input.closest('.google-search-wrap');
            if (wrap) wrap.classList.add('focused');
            
            if (e.target.value.length > 0) {
                generateAutocompleteSuggestions(input, e.target.value);
            }
        });

        const form = input.closest('form');
        if (form) {
            form.addEventListener('submit', e => {
                e.preventDefault();
                const term = input.value.trim();
                if (term) {
                    window.location.href = `resultados.html?q=${encodeURIComponent(term)}`;
                }
            });
        }
    });

    // Hide/Show Navbar on Scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    // Ensure navbar exists before adding scroll listener
    if (navbar) {
        // Inyectar Botón Hamburguesa para Móvil
        const navTop = navbar.querySelector('.nav-top');
        if (navTop) {
            const toggle = document.createElement('div');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            navTop.querySelector('.nav-right').prepend(toggle);

            const navBottom = navbar.querySelector('.nav-bottom');
            toggle.addEventListener('click', () => {
                navBottom.classList.toggle('active');
                const icon = toggle.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
        }

        // Use a small timeout to ensure layout is stable before getting offsetHeight
        setTimeout(() => {
            const navbarHeight = navbar.offsetHeight;
            window.addEventListener('scroll', () => {
                let currentScroll = window.scrollY || document.documentElement.scrollTop;

                const scrollThreshold = 10;
                
                if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) return;

                if (currentScroll > lastScrollTop && currentScroll > navbarHeight * 2) {
                    navbar.classList.add('navbar-hidden'); // Ocultar al bajar
                } else {
                    navbar.classList.remove('navbar-hidden'); // Mostrar al subir
                }

                // Always update lastScrollTop, but clamp to 0 for very top
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            });
        }, 100); // Small delay
    }

    // Botón Volver Arriba
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.title = 'Volver arriba';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            backToTopBtn.classList.add('back-to-top-show');
        } else {
            backToTopBtn.classList.remove('back-to-top-show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle Password Visibility
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Password Match Validation (Registro)
    const signupForm = document.querySelector('.signup-card form');
    if (signupForm) {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const errorMsg = document.getElementById('password-error');

        const validatePasswords = () => {
            if (confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
                errorMsg.style.display = 'block';
                confirmPassword.style.borderColor = 'var(--red-neon)';
            } else {
                errorMsg.style.display = 'none';
                confirmPassword.style.borderColor = '#333';
            }
        };

        password.addEventListener('input', validatePasswords);
        confirmPassword.addEventListener('input', validatePasswords);
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (password.value !== confirmPassword.value) {
                showToast('<i class="fas fa-exclamation-triangle"></i> Las contraseñas no coinciden');
                return;
            }

            const emailInput = signupForm.querySelector('input[type="email"], input[type="text"]');
            if (emailInput && emailInput.value.trim()) {
                // Guardamos el nombre del usuario para que aparezca en la navbar
                const userDisplayName = emailInput.value.split('@')[0];
                localStorage.setItem('userName', userDisplayName);

                showToast('<i class="fas fa-user-plus"></i> Creando cuenta...');
                setTimeout(() => {
                    showToast('<i class="fas fa-check-circle"></i> ¡Registro exitoso! Bienvenido.');
                    setTimeout(() => window.location.href = 'index.html', 1000);
                }, 1500);
            }
        });
    }

    // --- SIMULACIÓN DE INICIO DE SESIÓN ---
    const loginForm = document.querySelector('.login-card form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            const emailInput = loginForm.querySelector('input[type="email"], input[type="text"]');
            const passInput = loginForm.querySelector('input[type="password"]');

            if (emailInput && passInput && emailInput.value.trim() && passInput.value.trim()) {
                // Extraemos el nombre del correo (antes del @) para usarlo como nombre de usuario
                const userDisplayName = emailInput.value.split('@')[0];
                localStorage.setItem('userName', userDisplayName);

                showToast('<i class="fas fa-spinner fa-spin"></i> Autenticando...');
                setTimeout(() => {
                    showToast('<i class="fas fa-check-circle"></i> ¡Bienvenido de nuevo!');
                    setTimeout(() => window.location.href = 'index.html', 1000);
                }, 1500);
            } else {
                showToast('<i class="fas fa-exclamation-triangle"></i> Por favor, completa todos los campos');
            }
        });
    }

    // --- GESTIÓN DE SESIÓN EN NAVBAR ---
    const updateNavbarAuth = () => {
        const userName = localStorage.getItem('userName');
        const navRight = document.querySelector('.nav-right');
        
        if (userName && navRight) {
            // Reemplazamos los botones de Inicio/Registro por el nombre del usuario y un botón de Salir
            navRight.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span style="font-size: 0.8rem; font-weight: 800; color: var(--text-white); text-transform: uppercase;">
                        <i class="fas fa-user-circle" style="color: var(--red-neon); margin-right: 5px;"></i> ${userName}
                    </span>
                    <a href="#" id="btnLogout" class="btn-login" style="padding: 4px 10px;">SALIR</a>
                </div>
            `;

            document.getElementById('btnLogout')?.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('userName');
                showToast('<i class="fas fa-sign-out-alt"></i> Cerrando sesión...');
                setTimeout(() => window.location.href = 'index.html', 800);
            });
        }
    };

    // Verificamos el estado de la sesión al cargar cualquier página
    updateNavbarAuth();

    // Resaltado automático de enlaces activos (Navbar y Sidebar)
    // Obtener el nombre del archivo sin parámetros (?q=...) ni fragmentos (#)
    const currentPath = window.location.pathname.split('/').pop().split('?')[0].split('#')[0] || 'index.html';
    const navAndSidebarLinks = document.querySelectorAll('.nav-menu a, .sidebar-menu a');
    
    navAndSidebarLinks.forEach(link => {
        const hrefAttr = link.getAttribute('href');
        
        // Gestionar estado activo para enlaces con rutas reales
        if (hrefAttr && hrefAttr !== '#') {
            const hrefFile = hrefAttr.split('/').pop();
            if (hrefFile === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }

        // Interceptar clics en la sidebar de trucos.html para filtrar en lugar de navegar
        if (currentPath === 'trucos.html' && link.closest('.sidebar-menu')) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 

                // UI: Resaltar el enlace seleccionado
                document.querySelectorAll('.sidebar-menu a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                const cheatBoxes = document.querySelectorAll('.cheats-content .game-card');
                
                // Extraer el texto de forma limpia, ignorando los iconos
                const linkText = Array.from(this.childNodes)
                    .filter(node => node.nodeType === Node.TEXT_NODE)
                    .map(n => n.textContent.trim())
                    .filter(t => t.length > 0)
                    .join(' ');

                if (this.id === 'btnShowAllCheats') {
                    cheatBoxes.forEach(box => box.style.display = 'block');
                    showToast(`<i class="fas fa-th-large"></i> Mostrando <strong>todos los trucos</strong>`);
                } else {
                    const isRecent = !!this.querySelector('.fa-star');
                    cheatBoxes.forEach(box => {
                        if (isRecent) {
                            // Filtrado por Título (Trucos Recientes)
                            const cardTitle = box.querySelector('h3').textContent.trim().toLowerCase();
                            box.style.display = cardTitle.includes(linkText.toLowerCase()) ? 'block' : 'none';
                        } else {
                            // Filtrado por Plataforma (Categorías)
                            const tag = box.querySelector('.badge');
                            const matches = tag && tag.textContent.trim().toUpperCase().includes(linkText.toUpperCase());
                            box.style.display = matches ? 'block' : 'none';
                        }
                    });
                    const icon = isRecent ? 'fa-star' : 'fa-filter';
                    showToast(`<i class="fas ${icon}"></i> Filtrando: <strong>${linkText}</strong>`);
                }
            });
        }
    });

    // Función para convertir hashtags en texto a enlaces clicables
    const linkifyHashtags = (text) => {
        // Expresión regular que evita capturar códigos de color hex como #000 o #ff1a1a
        // Solo captura # seguido de letras si no es parte de una declaración de estilo
        return text.replace(/(^|\s)#([a-zA-ZáéíóúÁÉÍÓÚñÑ]+)/g, '$1<a href="#" class="hashtag-link">#$2</a>');
    };

    // Función para actualizar la barra lateral de comunidad (Tendencias y Gamers Destacados)
    const updateCommunitySidebar = () => {
        const communityFeed = document.getElementById('communityFeed');
        if (!communityFeed) return;

        const hashtagCounts = {};
        const uniqueGamers = new Set();

        communityFeed.querySelectorAll('.post-card').forEach(post => {
            const contentElement = post.querySelector('.post-content');
            if (contentElement) {
                const contentText = contentElement.textContent;
                const hashtags = contentText.match(/#([a-zA-ZáéíóúÁÉÍÓÚñÑ0-9_]+)/g);
                if (hashtags) {
                    hashtags.forEach(tag => {
                        const cleanTag = tag.toLowerCase();
                        hashtagCounts[cleanTag] = (hashtagCounts[cleanTag] || 0) + 1;
                    });
                }
            }

            const authorElement = post.querySelector('.post-user-info strong');
            if (authorElement) {
                // Extraer el nombre ignorando el texto de la insignia de verificado si existe
                const authorName = authorElement.childNodes[0].textContent.trim();
                uniqueGamers.add(authorName);
            }
        });

        // Actualizar Tendencias
        const trendsList = document.querySelector('.community-sidebar ul'); // Primer ul
        if (trendsList) {
            trendsList.innerHTML = ''; // Limpiar existentes
            const sortedHashtags = Object.entries(hashtagCounts)
                .sort(([, countA], [, countB]) => countB - countA)
                .slice(0, 5); // Mostrar top 5 tendencias

            sortedHashtags.forEach(([tag, count]) => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" class="sidebar-filter-link" data-type="hashtag" data-value="${tag}"><i class="fas fa-hashtag"></i> ${tag} <small style="color: var(--text-gray); font-weight: 400;">(${count})</small></a>`;
                trendsList.appendChild(li);
            });
        }

        // Actualizar Gamers Destacados (se mantiene la lógica existente para GAMER_STATS)
        const gamersList = document.querySelector('.community-sidebar ul:last-of-type'); // Segundo ul
        if (gamersList) {
            gamersList.innerHTML = ''; // Limpiar existentes
            uniqueGamers.forEach(gamer => {
                const li = document.createElement('li');
                const stats = GAMER_STATS[gamer] || { rank: 'Novato', posts: 0, trophies: 0 }; // Stats por defecto
                const lvl = stats.posts ? Math.floor(stats.posts / 10) + 1 : 1; // Cálculo simple de LVL
                li.innerHTML = `
                    <a href="#" class="sidebar-filter-link" data-type="user" data-value="${gamer}">
                        <i class="fas fa-user-circle"></i> ${gamer} 
                        <span style="font-size: 0.7rem; color: var(--text-gray); margin-left: auto;">LVL ${lvl}</span>
                    </a>`;
                gamersList.appendChild(li);
            });
        }
    };

    // --- LÓGICA DEL VIDEO PLAYER MODAL ---
    const videoPlayerModal = document.getElementById('videoPlayerModal');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const closeVideoPlayerBtn = document.querySelector('.close-video-player');

    // Función para extraer el ID de YouTube de varias URL
    function getYouTubeId(url) {
        let videoId = null;
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            videoId = match[1];
        }
        return videoId;
    }

    const openVideoModal = (videoUrl) => {
        const youtubeId = getYouTubeId(videoUrl);
        if (youtubeId && youtubePlayer && videoPlayerModal) {
            youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
            videoPlayerModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            showToast('<i class="fas fa-exclamation-triangle"></i> No se pudo cargar el video. Solo se admiten enlaces de YouTube.');
        }
    };

    const closeVideoModal = () => {
        if (videoPlayerModal) {
            videoPlayerModal.style.display = 'none';
            if (youtubePlayer) youtubePlayer.src = ''; // Detener la reproducción del video
            document.body.style.overflow = 'auto';
        }
    };

    // --- LÓGICA DEL VISOR DE IMÁGENES (LIGHTBOX) ---
    const openImageViewer = (src) => {
        if (!imageViewerModal) imageViewerModal = document.getElementById('imageViewerModal');
        if (!viewerImg) viewerImg = document.getElementById('viewerImg');

        if (viewerImg && imageViewerModal) {
            viewerImg.src = src;
            // Asegurar que el contenedor sea visible
            const container = imageViewerModal.querySelector('.video-player-container');
            if (container) container.style.display = 'flex';
            imageViewerModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    const closeImageViewer = () => {
        if (!imageViewerModal) imageViewerModal = document.getElementById('imageViewerModal');
        if (!viewerImg) viewerImg = document.getElementById('viewerImg');
        if (imageViewerModal) {
            imageViewerModal.style.display = 'none';
            viewerImg.src = '';
            document.body.style.overflow = 'auto';
        }
    };

    closeVideoPlayerBtn?.addEventListener('click', closeVideoModal);
    videoPlayerModal?.addEventListener('click', (e) => {
        if (e.target === videoPlayerModal) closeVideoModal(); // Clic en el overlay
    });

    // --- FUNCIONALIDADES DE COMUNIDAD (FEEDBACK VISUAL) ---
    const storiesData = {
        'TechGuru': { avatar: 'https://i.pravatar.cc/150?u=tech', content: 'Img/techguru-story.jpg' },
        'Ghost...': { avatar: 'https://i.pravatar.cc/150?u=ghost', content: 'Img/ghostplayer-story.jpg' },
        'PixelQ': { avatar: 'https://i.pravatar.cc/150?u=pixel', content: 'Img/pixelqueen-story.jpg' },
        'Slayer': { avatar: 'https://i.pravatar.cc/150?u=slayer', content: 'Img/slayer-story.jpg' }
    };
    let currentStoryIndex = -1;

    // Función para sincronizar los contadores de comentarios con la cantidad real de elementos
    const syncCommentsCount = () => {
        document.querySelectorAll('.post-card').forEach(post => {
            const commentsList = post.querySelector('.comments-list');
            const countSpan = post.querySelector('.comment-count');
            if (commentsList && countSpan) {
                countSpan.textContent = commentsList.children.length;
            }
        });
    };

    // Ejecutar sincronización inicial al cargar
    syncCommentsCount();

    const storyViewer = document.getElementById('storyViewer');
    const storyProgressFill = document.querySelector('.story-progress-fill');
    let storyTimer;

    const closeStory = () => {
        if(storyViewer) {
            storyViewer.style.display = 'none';
            if (storyProgressFill) storyProgressFill.style.width = '0%';
            clearInterval(storyTimer);
            document.body.style.overflow = 'auto';
            currentStoryIndex = -1;
        }
    };

    const openStory = (name) => {
        const data = storiesData[name];
        if(!data) return;

        const storyKeys = Object.keys(storiesData);
        currentStoryIndex = storyKeys.indexOf(name);

        const avatar = document.getElementById('storyViewerAvatar');
        const user = document.getElementById('storyViewerUsername');
        const img = document.getElementById('storyViewerImg');
        
        if (avatar && data.avatar) avatar.src = data.avatar;
        if (user) user.textContent = name || 'Usuario';
        if (img && data.content) img.src = data.content;

        if (storyViewer) storyViewer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Actualizar visibilidad de flechas en el modal
        const prevBtn = document.querySelector('.story-viewer-prev');
        const nextBtn = document.querySelector('.story-viewer-next');
        if (prevBtn) prevBtn.style.display = currentStoryIndex > 0 ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = currentStoryIndex < storyKeys.length - 1 ? 'flex' : 'none';

        let progress = 0;
        if (storyProgressFill) storyProgressFill.style.width = '0%';
        clearInterval(storyTimer);
        storyTimer = setInterval(() => {
            progress += 1;
            if(storyProgressFill) storyProgressFill.style.width = `${progress}%`;
            if(progress >= 100) {
                nextStory();
            }
        }, 50); // La historia dura 5 segundos (100 * 50ms)
    };

    const nextStory = () => {
        const storyKeys = Object.keys(storiesData);
        currentStoryIndex++;
        if (currentStoryIndex < storyKeys.length) {
            openStory(storyKeys[currentStoryIndex]);
        } else {
            closeStory();
        }
    };

    const prevStory = () => {
        const storyKeys = Object.keys(storiesData);
        if (currentStoryIndex > 0) {
            openStory(storyKeys[currentStoryIndex - 1]);
        }
    };

    // Eventos para las flechas del modal
    document.querySelector('.story-viewer-prev')?.addEventListener('click', (e) => { e.stopPropagation(); prevStory(); });
    document.querySelector('.story-viewer-next')?.addEventListener('click', (e) => { e.stopPropagation(); nextStory(); });

    // Cerrar el visualizador al hacer clic en la X o en el fondo oscuro (fuera del contenedor)
    document.querySelector('.close-story-viewer')?.addEventListener('click', closeStory);
    storyViewer?.addEventListener('click', (e) => {
        if (e.target === storyViewer) closeStory();
    });

    // 1. Historias de Gamers
    const storyInput = document.getElementById('storyInput');
    const btnUploadStory = document.getElementById('btnUploadStory');

    btnUploadStory?.addEventListener('click', () => {
        storyInput?.click();
    });

    storyInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const userStoryImg = event.target.result;
                const username = "Tú";
                
                // Agregar a la base de datos local de la sesión
                storiesData[username] = {
                    avatar: 'https://i.pravatar.cc/100?img=12',
                    content: userStoryImg
                };

                // Crear la tarjeta visualmente
                const newStoryCard = document.createElement('div');
                newStoryCard.className = 'story-card';
                newStoryCard.innerHTML = `
                    <div class="story-avatar" style="border-color: var(--blue-neon);"><img src="${userStoryImg}" alt="Tú"></div>
                    <span>Tú</span>
                `;
                
                newStoryCard.addEventListener('click', () => openStory(username));
                btnUploadStory.after(newStoryCard);
                showToast('<i class="fas fa-check-circle"></i> ¡Historia publicada correctamente!');
            };
            reader.readAsDataURL(file);
        }
    });

    // --- FUNCIONALIDAD DE DESPLAZAMIENTO (ESTADOS/STORIES) ---
    const storiesContainer = document.querySelector('.stories-container');
    
    // Función para centrar un estado al hacer clic
    const centerStory = (card) => {
        if (!storiesContainer || !card) return;
        const containerWidth = storiesContainer.offsetWidth;
        const cardOffset = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const scrollTo = cardOffset - (containerWidth / 2) + (cardWidth / 2);
        
        storiesContainer.scrollTo({ left: scrollTo, behavior: 'smooth' });
    };

    if (storiesContainer) {
        let isDown = false;
        let startX, scrollLeft;
        let moved = false;

        // Inyectar flechas de navegación dinámicamente
        const wrapper = document.createElement('div');
        wrapper.className = 'stories-wrapper';
        storiesContainer.parentNode.insertBefore(wrapper, storiesContainer);
        wrapper.appendChild(storiesContainer);
        storiesContainer.style.margin = "0"; // Transferir margen al wrapper

        const prevBtn = document.createElement('button');
        prevBtn.className = 'story-nav-btn story-nav-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'story-nav-btn story-nav-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

        wrapper.appendChild(prevBtn);
        wrapper.appendChild(nextBtn);

        const updateArrows = () => {
            const { scrollLeft, scrollWidth, clientWidth } = storiesContainer;
            prevBtn.style.opacity = scrollLeft > 10 ? '1' : '0';
            prevBtn.style.visibility = scrollLeft > 10 ? 'visible' : 'hidden';
            nextBtn.style.opacity = scrollLeft < (scrollWidth - clientWidth - 10) ? '1' : '0';
            nextBtn.style.visibility = scrollLeft < (scrollWidth - clientWidth - 10) ? 'visible' : 'hidden';
        };

        prevBtn.addEventListener('click', () => storiesContainer.scrollBy({ left: -250, behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => storiesContainer.scrollBy({ left: 250, behavior: 'smooth' }));
        storiesContainer.addEventListener('scroll', updateArrows);
        setTimeout(updateArrows, 200);

        storiesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - storiesContainer.offsetLeft;
            scrollLeft = storiesContainer.scrollLeft;
            moved = false;
            storiesContainer.style.scrollBehavior = 'auto'; // Desactiva suavizado para drag instantáneo
        });

        // Soporte para dispositivos táctiles
        storiesContainer.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - storiesContainer.offsetLeft;
            scrollLeft = storiesContainer.scrollLeft;
            storiesContainer.style.scrollBehavior = 'auto';
        });

        const endDrag = () => { isDown = false; storiesContainer.style.scrollBehavior = 'smooth'; };
        storiesContainer.addEventListener('mouseleave', endDrag);
        storiesContainer.addEventListener('mouseup', endDrag);
        storiesContainer.addEventListener('touchend', endDrag);

        storiesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - storiesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            if (Math.abs(walk) > 5) moved = true;
            storiesContainer.scrollLeft = scrollLeft - walk;
        });

        storiesContainer.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - storiesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            storiesContainer.scrollLeft = scrollLeft - walk;
        });

        // Delegación de eventos para manejar cards actuales y futuras (dinámicas)
        document.querySelectorAll('.story-card:not(#btnUploadStory)').forEach(card => {
            card.addEventListener('click', () => {
                if (moved) return; // Si el usuario estaba arrastrando, no abre la historia
                
                // Forzar el desplazamiento al centro
                centerStory(card);
                
                // Abrir la historia
                const name = card.querySelector('span').textContent;
                openStory(name);
            });
        });
    }

    // 2. Acciones del Creador (Imagen, GIF, Encuesta)
    const imageInput = document.getElementById('imageInput');
    const mediaPreviewContainer = document.getElementById('mediaPreviewContainer');
    const mediaPreviewImg = document.getElementById('mediaPreviewImg');
    const removeMediaBtn = document.getElementById('removeMediaBtn');
    const pollCreatorContainer = document.getElementById('pollCreatorContainer');
    const videoUrlContainer = document.getElementById('videoUrlContainer');
    const videoUrlInput = document.getElementById('videoUrlInput');
    const btnConfirmVideo = document.getElementById('btnConfirmVideo');
    const pollOption1 = document.getElementById('pollOption1');
    const pollOption2 = document.getElementById('pollOption2');
    let currentPostMedia = { type: null, data: null };

    document.getElementById('btnActionImage')?.addEventListener('click', () => imageInput.click());
    
    imageInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if(mediaPreviewImg) mediaPreviewImg.src = event.target.result;
                if(mediaPreviewContainer) mediaPreviewContainer.style.display = 'block';
                if(pollCreatorContainer) pollCreatorContainer.style.display = 'none';
                if (videoUrlContainer) videoUrlContainer.style.display = 'none';
                currentPostMedia = { type: 'image', data: event.target.result };
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('btnActionVideo')?.addEventListener('click', () => {
        const isVisible = videoUrlContainer?.style.display === 'block';
        if(videoUrlContainer) videoUrlContainer.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            if(pollCreatorContainer) pollCreatorContainer.style.display = 'none';
            if(mediaPreviewContainer) mediaPreviewContainer.style.display = 'none';
            videoUrlInput?.focus();
        }
    });

    btnConfirmVideo?.addEventListener('click', () => {
        const url = videoUrlInput?.value.trim();
        if (url) {
            const youtubeId = getYouTubeId(url);
            if (youtubeId) {
                // Obtener miniatura real de YouTube en alta resolución
                if(mediaPreviewImg) mediaPreviewImg.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                showToast('<i class="fas fa-video"></i> Video de YouTube detectado.');
            } else {
                // Imagen genérica si el enlace no es de YouTube
                if(mediaPreviewImg) mediaPreviewImg.src = 'Img/video-default.jpg';
                showToast('<i class="fas fa-link"></i> Enlace de video añadido.');
            }

            if(mediaPreviewContainer) mediaPreviewContainer.style.display = 'block';
            if(videoUrlContainer) videoUrlContainer.style.display = 'none';
            currentPostMedia = { type: 'video', data: url };
            if(videoUrlInput) videoUrlInput.value = ''; // Limpiar campo
        }
    });

    document.getElementById('btnActionPoll')?.addEventListener('click', () => {
        const isVisible = pollCreatorContainer?.style.display === 'block';
        if(pollCreatorContainer) pollCreatorContainer.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            if(mediaPreviewContainer) mediaPreviewContainer.style.display = 'none';
            if(videoUrlContainer) videoUrlContainer.style.display = 'none';
            currentPostMedia = { type: 'poll', data: null };
        } else {
            currentPostMedia = { type: null, data: null };
        }
    });

    removeMediaBtn?.addEventListener('click', () => {
        if(mediaPreviewContainer) mediaPreviewContainer.style.display = 'none';
        currentPostMedia = { type: null, data: null };
    });

    // 4. Botones de la cabecera de comunidad (Discord, Torneo, Twitch)
    const communityHeaderBtns = document.querySelectorAll('.pc-header-comunidad .btn-discord, .pc-header-comunidad .btn-tournament, .pc-header-comunidad .btn-twitch');
    communityHeaderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar navegación real si tienen href
            const platform = btn.textContent.trim();
            showToast(`<i class="fas fa-external-link-alt"></i> Abriendo <strong>${platform}</strong>...`);
        });
    });

    // 5. Tarjetas de estadísticas de comunidad
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            const statName = card.querySelector('h3').textContent;
            showToast(`<i class="fas fa-chart-line"></i> Cargando detalles de <strong>${statName}</strong>`);
        });
    });

    // LÓGICA DEL MURO DE COMUNIDAD
    const btnPostWall = document.getElementById('btnPostWall');
    const wallInput = document.getElementById('wallPostInput');

    if (communityFeed) {
        communityFeed.addEventListener('click', (e) => {
            // 0. Manejar Clic en Hashtag dentro de un post
            const hashtagClick = e.target.closest('.hashtag-link');
            if (hashtagClick) {
                e.preventDefault();
                filterCommunityFeed('hashtag', hashtagClick.textContent.trim());
                return;
            }

            // 1. Manejar Voto en Encuesta
            const pollOpt = e.target.closest('.poll-opt');
            if (pollOpt) {
                pollOpt.style.background = 'rgba(255, 26, 26, 0.2)';
                pollOpt.style.borderColor = 'var(--red-neon)';
                showToast('<i class="fas fa-vote-yea"></i> ¡Voto registrado!');
                return;
            }

            // 2. Manejar Likes
            const likeBtn = e.target.closest('.btn-like');
            if (likeBtn) {
                likeBtn.classList.toggle('active');
                const icon = likeBtn.querySelector('i');
                const countSpan = likeBtn.querySelector('.like-count');
                let currentCount = parseInt(countSpan.textContent) || 0;
                
                if (likeBtn.classList.contains('active')) {
                    icon.className = 'fas fa-heart';
                    countSpan.textContent = currentCount + 1;
                } else {
                    icon.className = 'far fa-heart';
                    countSpan.textContent = Math.max(0, currentCount - 1); // Evita números negativos
                }
                return;
            }

            // 3. Manejar Toggle de Comentarios
            const commentBtn = e.target.closest('.btn-comment');
            if (commentBtn) {
                const postCard = commentBtn.closest('.post-card');
                const commentSection = postCard.querySelector('.comment-section');
                if (commentSection) {
                    commentSection.classList.toggle('active');
                    if (commentSection.classList.contains('active')) commentSection.querySelector('textarea').focus();
                }
                return;
            }

            // 4. Manejar Envío de Comentarios
            const sendBtn = e.target.closest('.btn-send-comment');
            if (sendBtn) {
                const commentSection = sendBtn.closest('.comment-section');
                const textarea = commentSection.querySelector('textarea');
                const commentsList = commentSection.querySelector('.comments-list');
                const content = textarea.value.trim();
                if (content.length > 0) {
                    const currentUser = localStorage.getItem('userName') || 'Gamer Invitado';
                    const newComment = document.createElement('div');
                    newComment.className = 'comment-item';
                    newComment.innerHTML = `
                        <span class="comment-user">${currentUser}</span>
                        <p class="comment-text">${content}</p>
                    `;
                    commentsList.appendChild(newComment);
                    textarea.value = '';
                    textarea.style.height = 'auto';
                    syncCommentsCount(); // Sincronización exacta tras añadir comentario
                }
                return;
            }

            // 5. Manejar Clic en Previsualización de Video
            const videoPreview = e.target.closest('.post-video-preview');
            if (videoPreview) {
                const videoUrl = videoPreview.dataset.videoUrl;
                if (videoUrl) openVideoModal(videoUrl);
                return;
            }


            // 5. Feedback Visual al abrir Post (si no es una acción)
            const isAction = e.target.closest('.btn-like') || e.target.closest('.btn-comment') || e.target.closest('.comment-section') || e.target.closest('.btn-submit') || e.target.closest('.post-video-preview') || e.target.closest('.hashtag-link');
            
            if (e.target.closest('.post-card') && !isAction && !document.getElementById('forumCategoryTitle')) {
                showToast(`<i class="fas fa-file-alt"></i> Abriendo publicación...`);
            }
        });

        // Auto-expandir textarea de comentarios según el contenido
        communityFeed.addEventListener('input', (e) => {
            if (e.target.tagName.toLowerCase() === 'textarea' && e.target.closest('.comment-input-wrapper')) {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }
        });
    }

    if (btnPostWall && wallInput && communityFeed) {
        btnPostWall.addEventListener('click', () => {
            const content = wallInput.value.trim();
            if (content.length > 0 || currentPostMedia.type) {
                const currentUser = localStorage.getItem('userName') || 'Gamer Invitado';
                const isVerified = currentUser === 'JuanLauncher' ? ' <i class="fas fa-check-circle verified-badge" title="Verificado"></i>' : '';

                let mediaHtml = '';
                if (currentPostMedia.type === 'image') {
                    mediaHtml = `<img src="${currentPostMedia.data}" style="width:100%; border-radius:8px; margin-top:10px; border: 1px solid var(--border-color);">`;
                } else if (currentPostMedia.type === 'video') {
                    mediaHtml = `
                        <div class="post-video-preview" data-video-url="${currentPostMedia.data}" style="position:relative; margin-top:10px; border-radius:8px; overflow:hidden; border: 1px solid var(--blue-neon); aspect-ratio: 16/9; background:#000; display:flex; align-items:center; justify-content:center; cursor:pointer;">
                            <i class="fas fa-play" style="font-size:3rem; color:var(--blue-neon); opacity:0.8;"></i>
                            <div style="position:absolute; bottom:10px; left:10px; font-size:0.7rem; color:white; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; max-width:80%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                                ${currentPostMedia.data}
                            </div>
                        </div>`;
                } else if (currentPostMedia.type === 'poll') {
                    const o1 = pollOption1.value || 'Opción 1';
                    const o2 = pollOption2.value || 'Opción 2';
                    mediaHtml = `
                        <div class="poll-display" style="margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                            <div class="poll-opt" style="background: rgba(255,26,26,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 12px; cursor: pointer; transition: 0.3s; font-size: 0.85rem;">${o1}</div>
                            <div class="poll-opt" style="background: rgba(255,26,26,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 12px; cursor: pointer; transition: 0.3s; font-size: 0.85rem;">${o2}</div>
                        </div>`;
                }

                const newPost = document.createElement('div');
                newPost.className = 'post-card';
                newPost.innerHTML = `
                    <div class="post-header">
                        <div class="avatar-wrapper">
                            <img src="${DEFAULT_USER_IMG}" alt="Usuario">
                            <span class="status-online pulse"></span>
                        </div>
                        <div class="post-user-info">
                            <strong>${currentUser}${isVerified}</strong>
                            <span>Recién publicado</span>
                        </div>
                    </div>
                    <div class="post-content">${linkifyHashtags(content)} ${mediaHtml}</div>
                    <div class="post-actions">
                        <button class="btn-like"><i class="far fa-heart"></i> Like <span class="like-count">0</span></button>
                        <button class="btn-comment"><i class="far fa-comment"></i> Comentar <span class="comment-count">0</span></button>
                    </div>
                    <div class="comment-section"><div class="comments-list"></div><div class="comment-input-wrapper"><textarea placeholder="Escribe un comentario..." rows="1"></textarea><button class="btn-submit btn-send-comment">Enviar</button></div></div>
                `;
                communityFeed.prepend(newPost);
                if (wallInput) wallInput.value = '';
                if (mediaPreviewContainer) mediaPreviewContainer.style.display = 'none';
                if (pollCreatorContainer) pollCreatorContainer.style.display = 'none';
                if (videoUrlContainer) videoUrlContainer.style.display = 'none';
                if (pollOption1) pollOption1.value = '';
                if (pollOption2) pollOption2.value = '';
                currentPostMedia = { type: null, data: null };
                updateCommunitySidebar(); // Actualizar sidebar después de un nuevo post
                showToast('<i class="fas fa-check"></i> ¡Post publicado con éxito!');
            }
        });
    }

    // --- LÓGICA DE FORO ---
    const initForumIndex = () => {
        document.querySelectorAll('.forum-item').forEach(item => {
            const h3 = item.querySelector('h3');
            if (!h3) return;
            const title = h3.textContent.trim();
            const data = FORUM_DATA[title];
            if (data) {
                const stats = item.querySelector('.forum-stats');
                const last = item.querySelector('.forum-last-post');
                if (stats) stats.innerHTML = `Temas: ${data.threads} <br> Mensajes: ${data.posts}`;
                if (last) last.innerHTML = `<span>Por: ${data.lastUser}</span> ${data.lastTime}`;
            }
        });
    };

    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        // Añadir icono de flecha si no existe
        if (!header.querySelector('.fa-chevron-down')) {
            const icon = document.createElement('i');
            icon.className = 'fas fa-chevron-down';
            header.appendChild(icon);
        }

        header.addEventListener('click', () => {
            const category = header.closest('.forum-category');
            if (category) {
                category.classList.toggle('collapsed');
            }
        });
    });

    // Interacción con hilos del foro
    document.querySelectorAll('.forum-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const h3 = item.querySelector('h3');
            if (!h3) return;

            const title = h3.textContent.trim();
            const mainForums = ["Anuncios Oficiales", "Presentaciones", "Mantenimiento de Consolas y PC", "Software y AtlasOS"];
            
            if (mainForums.includes(title)) {
                e.preventDefault();
                showToast('<i class="fas fa-file-alt"></i> Abriendo publicación...');
                setTimeout(() => {
                    window.location.href = `foro-categoria.html?cat=${encodeURIComponent(title)}`;
                }, 800);
            } else if (e.target.tagName.toLowerCase() !== 'a') {
                showToast(`<i class="fas fa-comments"></i> Entrando al foro: <strong>${title}</strong>`);
            }
        });
    });

    // Poblar estadísticas reales en foro.html
    initForumIndex();

    // LÓGICA DE PESTAÑAS (TABS) EN DESCARGAS
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length > 0 && tabPanes.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Quitar activo de todos los botones
                tabBtns.forEach(b => b.classList.remove('active'));
                // Añadir activo al pulsado
                btn.classList.add('active');

                // Obtener el ID del panel objetivo
                const targetTab = btn.getAttribute('data-tab');
                
                // Mostrar el panel correspondiente y ocultar los demás
                tabPanes.forEach(pane => {
                    if (pane.id === targetTab) {
                        pane.classList.add('active');
                    } else {
                        pane.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- LÓGICA PARA PÁGINA DE CATEGORÍA DE FORO ---
    const forumCategoryTitle = document.getElementById('forumCategoryTitle');
    if (forumCategoryTitle) {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('cat');
        
        if (cat && communityFeed) {
            forumCategoryTitle.innerHTML = `${cat}`;
            
            const catData = FORUM_DATA[cat] || { lastUser: 'Admin', lastTime: 'Reciente' };

            // Simulación de hilos específicos por categoría
            const mockThreads = [
                { 
                    user: catData.lastUser, 
                    time: catData.lastTime, 
                    title: `Hilo destacado: ${cat}`, 
                    content: `Bienvenidos a la discusión central sobre ${cat}. Aquí compartiremos todas las novedades y normas específicas. #Oficial #${cat.replace(/\s+/g, '')}`,
                    likes: Math.floor(Math.random() * 50) + 10,
                    comments: [
                        { user: 'TechGuru', text: '¡Excelente iniciativa! Estaré atento a las novedades.' },
                        { user: 'PixelQueen', text: 'Gracias por mantenernos informados, Admin.' }
                    ]
                },
                { 
                    user: 'TechGuru', 
                    time: '5 horas', 
                    title: 'Guía esencial del mes', 
                    content: `He preparado un pequeño resumen de lo que necesitas saber sobre ${cat}. Espero que os sirva de ayuda para vuestros proyectos. #Guía #Hardware`,
                    likes: 28,
                    comments: [
                        { user: 'GhostPlayer', text: 'Muy útil, justo lo que necesitaba.' }
                    ]
                },
                { 
                    user: 'GhostPlayer', 
                    time: 'Ayer', 
                    title: 'Duda sobre la última actualización', 
                    content: '¿Alguien sabe cómo configurar los nuevos parámetros introducidos esta semana? He intentado de todo y sigo con errores. #Ayuda #AtlasOS',
                    likes: 15,
                    comments: [] 
                }
            ];

            communityFeed.innerHTML = mockThreads.map(thread => `
                <div class="post-card">
                    <div class="post-header">
                        <div class="avatar-wrapper">
                            <img src="https://i.pravatar.cc/100?u=${encodeURIComponent(thread.user)}" alt="${thread.user}">
                            <span class="status-online pulse"></span>
                        </div>
                        <div class="post-user-info">
                            <strong>${thread.user}</strong>
                            <span>${thread.time}</span>
                        </div>
                    </div>
                    <div class="post-content">
                        <h3 style="margin-bottom: 10px; color: var(--red-neon); font-size: 1.1rem;">${thread.title}</h3>
                        <p>${linkifyHashtags(thread.content)}</p>
                    </div>
                    <div class="post-actions">
                        <button class="btn-like"><i class="far fa-heart"></i> Like <span class="like-count">${thread.likes}</span></button>
                        <button class="btn-comment"><i class="far fa-comment"></i> Comentar <span class="comment-count">${thread.comments.length}</span></button>
                    </div>
                    <div class="comment-section">
                        <div class="comments-list">
                            ${thread.comments.map(comment => `
                                <div class="comment-item">
                                    <span class="comment-user">${comment.user}</span>
                                    <p class="comment-text">${comment.text}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="comment-input-wrapper">
                            <textarea placeholder="Escribe un comentario..." rows="1"></textarea>
                            <button class="btn-submit btn-send-comment" style="width: auto; padding: 5px 15px; font-size: 0.8rem; margin: 0;">Enviar</button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Actualizar la barra lateral y contadores
            updateCommunitySidebar();
            syncCommentsCount();
        }
    }

    // 7. Enlaces de la barra lateral (Tendencias y Gamers)
    const filterCommunityFeed = (type, value) => {
        if (!communityFeed) return;
        const posts = communityFeed.querySelectorAll('.post-card');
        let found = 0;
        
        posts.forEach(post => {
            let matches = false;
            const content = post.querySelector('.post-content').textContent.toLowerCase();
            const author = post.querySelector('.post-user-info strong').textContent.toLowerCase();
            
            if (type === 'hashtag') {
                matches = content.includes(value.toLowerCase());
            } else if (type === 'user') {
                matches = author.includes(value.toLowerCase());
            }
            
            post.style.display = matches ? 'block' : 'none';
            if (matches) found++;
        });

        let filterStatus = document.getElementById('filterStatus');
        if (!filterStatus) {
            filterStatus = document.createElement('div');
            filterStatus.id = 'filterStatus';
            filterStatus.className = 'filter-status-bar';
            communityFeed.parentNode.insertBefore(filterStatus, communityFeed);
        }

        filterStatus.innerHTML = `
            <span><i class="fas fa-filter"></i> Mostrando: <strong>${value}</strong> (${found} resultados)</span>
            <button id="btnClearFilter" class="btn-clear-filter">Limpiar</button>
        `;

        document.getElementById('btnClearFilter').onclick = () => {
            if (posts) posts.forEach(p => p.style.display = 'block');
            filterStatus.remove();
        };

        window.scrollTo({ top: communityFeed.offsetTop - 120, behavior: 'smooth' });
    };

    // --- INICIALIZACIÓN DE COMUNIDAD ---
    if (communityFeed) {
        // Convertir hashtags en posts estáticos a enlaces e inicializar sidebar
        communityFeed.querySelectorAll('.post-content').forEach(contentElement => {
            const nodesToProcess = [];
            contentElement.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) nodesToProcess.push(node);
            });

            nodesToProcess.forEach(textNode => {
                const newHtml = linkifyHashtags(textNode.textContent);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newHtml;
                while (tempDiv.firstChild) contentElement.insertBefore(tempDiv.firstChild, textNode);
                contentElement.removeChild(textNode);
            });
        });
        updateCommunitySidebar();
    }

    // --- GESTIÓN DE VISTAS DEL MODAL ---
    const toggleModalView = () => {
        if (!modalViewInfo || !modalViewChars) return;
        const isInfoVisible = modalViewInfo.style.display !== 'none';
        const fullTitle = document.getElementById('modalGameTitle').textContent.trim();
        
        // Búsqueda flexible de personajes para que coincidan aunque el título varíe (ej. "GTA V: Trucos")
        const charKey = Object.keys(CHAR_DATA).find(key => fullTitle.includes(key) || key.includes(fullTitle.split(':')[0]));

        if (isInfoVisible) {
            modalViewInfo.style.display = 'none';
            modalViewChars.style.display = 'block';
            btnToggleView.innerHTML = '<i class="fas fa-info-circle"></i> Volver a Info';
            const grid = document.getElementById('modalCharsGrid');
            if(document.getElementById('charGameTitle')) document.getElementById('charGameTitle').textContent = fullTitle;
            grid.innerHTML = '';
            const chars = CHAR_DATA[charKey] || [{name: 'Personaje', desc: 'Detalles del personaje del juego.'}];
            chars.forEach((char, idx) => {
                grid.innerHTML += `
                    <div class="char-mini-card">
                        <img src="${char.img || DEFAULT_PLACEHOLDER}" alt="${char.name}" style="cursor: zoom-in;">
                        <div class="char-mini-info">
                            <h4>${char.name}</h4>
                            <p>${char.desc}</p>
                        </div>
                    </div>`;
            });
        } else {
            modalViewInfo.style.display = 'block';
            modalViewChars.style.display = 'none';
            btnToggleView.innerHTML = '<i class="fas fa-users"></i> Ver Personajes';
        }
    };

    // --- FUNCIÓN PARA EXTRAER DATOS DE LA TARJETA Y ABRIR MODAL ---
    const openGameDetailFromCard = (e) => {
        const card = e.currentTarget;
        const titleElement = card.querySelector('h3');
        const imgElement = card.querySelector('img');
        const descElement = card.querySelector('p');
        const badgeElement = card.querySelector('.badge');
        
        if (!titleElement || !imgElement || !descElement) return;

        const title = titleElement.textContent;
        const img = imgElement.src;
        const desc = descElement.textContent;
        const label = badgeElement ? badgeElement.textContent : 'GAME';
        
        // Determinar la clase del badge para mantener el color en el modal
        let badgeClass = 'badge-default';
        if (badgeElement) {
            badgeClass = Array.from(badgeElement.classList).find(c => c.startsWith('badge-')) || 'badge-default';
        }

        // Detectar si la tarjeta tiene una lista de trucos
        const codesElement = card.querySelector('.code-list');
        const trickCodes = codesElement ? codesElement.textContent : null;

        openGameDetail({ title, img, desc, label, badgeClass }, trickCodes);
    };

    // --- EVENTOS GLOBALES DE CLIC ---
    // Usamos mousedown y click para asegurar que la interacción con el autocompletado
    // se capture antes de que el menú se oculte por el evento 'blur' del input.
    const handleGlobalInteraction = (e) => {
        const isClick = e.type === 'click';
        const isMouseDown = e.type === 'mousedown';

        // 1. Clic en Tarjetas o enlaces "Leer más" (Abrir Modal de Guía)
        const btnRead = e.target.closest('.btn-read');
        const cardTrigger = e.target.closest('.game-card-trigger');
        const techTrigger = e.target.closest('.tech-card');

        // Determine if the click is on a card or a "read more" button within a card that should open a modal
        let shouldOpenModal = false;
        let targetElement = null;

        if (btnRead) {
            // If btnRead is clicked, check if its parent is a card trigger
            const parentCard = btnRead.closest('.game-card, .tech-card, .game-card-trigger');
            if (parentCard) {
                shouldOpenModal = true;
                targetElement = parentCard;
            }
        } else if (cardTrigger) {
            shouldOpenModal = true;
            targetElement = cardTrigger;
        } else if (techTrigger) {
            shouldOpenModal = true;
            targetElement = techTrigger;
        }

        if (shouldOpenModal) {
            if (isClick) e.preventDefault(); // Prevent default navigation for modal-opening elements
            if (targetElement.classList.contains('tech-card')) {
                const title = targetElement.querySelector('h3')?.textContent.trim();
                const foundData = SITE_DATA.find(item => item.title === title);
                const desc = foundData ? foundData.desc : targetElement.querySelector('p')?.textContent;
                const label = targetElement.querySelector('.tech-category')?.textContent || 'TECH';
                const img = targetElement.querySelector('.tech-img')?.style.backgroundImage.slice(5, -2) || ''; // Extract URL from background-image
                openGameDetail({ title, img, desc, label, badgeClass: 'badge-support' }, null);
            } else {
                openGameDetailFromCard({ currentTarget: targetElement });
            }
            return;
        }

        // 2. Clic en Resultados del Buscador
        const searchItem = e.target.closest('.google-item');
        if (searchItem) {
            // Evitamos la navegación y la pérdida de foco inmediata del buscador
            e.preventDefault();
            
            // Usamos mousedown para interceptar la selección antes de que el 'blur' oculte el menú
            if (isMouseDown && searchItem.dataset.title) {
                const titleToFind = searchItem.dataset.title.trim().toLowerCase();
                const gameData = SITE_DATA.find(item => item.title.trim().toLowerCase() === titleToFind);
                if (gameData) {
                    const autocomplete = searchItem.closest('.google-autocomplete');
                    if (autocomplete) autocomplete.style.display = 'none';
                    openGameDetail({ ...gameData, badgeClass: gameData.badge }, null);
                }
            }
            return;
        }

        // 3. Botones de Descarga
        const dlBtn = e.target.closest('.btn-card-dl, .btn-download');
        if (isClick && dlBtn && !e.target.closest('.btn-copy-cheat')) {
            e.preventDefault();
            simulateDownload(dlBtn);
        }

        // 3.1 Botón Copiar Trucos
        const copyBtn = e.target.closest('.btn-copy-cheat');
        if (copyBtn) {
            const text = modalTrickCodes?.textContent;
            if (text) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast('<i class="fas fa-copy"></i> ¡Trucos copiados al portapapeles!');
                });
            }
        }

        // 3.2 Filtrado desde Sidebar (Tendencias y Gamers)
        const sidebarFilter = e.target.closest('.sidebar-filter-link');
        if (sidebarFilter) {
            e.preventDefault();
            const { type, value } = sidebarFilter.dataset;
            filterCommunityFeed(type, value);
            return;
        }

        // 4. Abrir Lightbox para imágenes (Detección mejorada en modales y grid)
        const clickableImg = e.target.closest('.char-mini-card img, #modalGameImg, .post-content img, .tech-img, .story-viewer-content img, .modal-chars-grid img');
        
        // Evitamos que interfiera si se hace clic en el botón de play o botones principales
        if (clickableImg && !e.target.closest('.post-video-preview, .btn-modal-main')) {
            let src = clickableImg.src;
            if (!src && clickableImg.tagName !== 'IMG') {
                // Caso para elementos que usan background-image (como .tech-img)
                const bg = window.getComputedStyle(clickableImg).backgroundImage;
                src = bg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            }
            
            if (src && src !== 'none' && src !== '') {
                e.preventDefault();
                openImageViewer(src);
                return; // Detenemos la propagación para este clic
            }
        }

        // 5. Modal Cierre y Toggle
        if (e.target === gameDetailModal || e.target.closest('.close-detail')) closeGameDetail();
        if (e.target === imageViewerModal || e.target.closest('.close-image-viewer')) closeImageViewer();
        if (e.target.closest('#btnToggleView')) { e.preventDefault(); toggleModalView(); }
    };

    // Escuchamos ambos eventos para mayor robustez en menús dinámicos
    document.addEventListener('click', handleGlobalInteraction);
    document.addEventListener('mousedown', (e) => {
        if (e.target.closest('.google-item')) handleGlobalInteraction(e);
    });

    // Cierre con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (gameDetailModal?.style.display === 'flex') closeGameDetail();
            if (imageViewerModal?.style.display === 'flex') closeImageViewer();
            if (videoPlayerModal?.style.display === 'flex') closeVideoModal();
        }
    });

    // --- FUNCIONES DE UTILIDAD ---
    function closeGameDetail() {
        if (gameDetailModal) {
            gameDetailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    function showToast(message) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = message;
        Object.assign(toast.style, {
            position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%) translateY(20px)',
            background: 'rgba(15, 15, 15, 0.95)', color: 'white', padding: '12px 24px', borderRadius: '8px',
            border: '1px solid var(--red-neon)', boxShadow: '0 0 20px rgba(255, 26, 26, 0.3)', zIndex: '9999',
            fontSize: '0.85rem', opacity: '0', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            pointerEvents: 'none', backdropFilter: 'blur(10px)'
        });
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateX(-50%) translateY(0)'; }, 50);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 3000);
    }

    const simulateDownload = (btn) => {
        if (btn.classList.contains('simulating')) return;
        const originalContent = btn.innerHTML;
        btn.classList.add('simulating');
        let progress = 0;
        if (typeof successSound !== 'undefined') successSound.play().catch(() => {});
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 2; 
            if (progress >= 100) {
                progress = 100;
                btn.style.setProperty('--progress', '100%');
                btn.innerHTML = '<i class="fas fa-check"></i> ¡Listo!';
                clearInterval(interval);
                setTimeout(() => {
                    btn.classList.remove('simulating');
                    btn.innerHTML = originalContent;
                    btn.style.setProperty('--progress', '0%');
                    showToast('<i class="fas fa-check-circle"></i> Descarga completada');
                }, 2000);
            } else {
                btn.style.setProperty('--progress', `${progress}%`);
                btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${Math.floor(progress)}%`;
            }
        }, 350);
    };

    const openGameDetail = (data, trickCodes) => {
        // Resetear vista del modal siempre a INFO al abrir
        if (modalViewInfo) modalViewInfo.style.display = 'block';
        if (modalViewChars) modalViewChars.style.display = 'none';
        if (btnToggleView) btnToggleView.innerHTML = '<i class="fas fa-users"></i> Ver Personajes';

        if (modalTitle) modalTitle.innerHTML = data.title || 'Información';
        if (modalSubtitle) {
            modalSubtitle.textContent = data.subtitle || '';
            modalSubtitle.style.display = data.subtitle ? 'block' : 'none';
        }
        if (modalImg) modalImg.src = data.img;
        
        // Procesar descripción técnica con formato y resaltado mejorado
        if (modalSyn) {
            const cleanDesc = (data.desc || '').trim();
            const formattedDesc = cleanDesc
                .replace(/\n/g, '<br>')
                // Resalta iconos, números de lista (1.) y subtítulos técnicos (Texto:)
                .replace(/(🛠️|💻|⚠️|🚀|💡|(\d\.\s)|([\w\sÁÉÍÓÚÑáéíóúñ]{3,}:))/g, '<strong style="color: var(--red-neon);">$1</strong>');

            modalSyn.innerHTML = formattedDesc; // Se eliminó linkifyHashtags ya que no es apropiado para descripciones
        }

        // Ocultar features estáticas si es un artículo detallado
        if (modalFeatures) modalFeatures.style.display = data.subtitle ? 'none' : 'flex';

        if (modalTrickCodes) {
            if (trickCodes) {
                modalTrickCodes.textContent = trickCodes;
                modalTrickCodes.style.display = 'block';
                if (modalSyn) modalSyn.style.marginBottom = '15px';
            } else {
                modalTrickCodes.style.display = 'none';
                if (modalSyn) modalSyn.style.marginBottom = '25px';
            }
        }
        
        if (modalBadge) {
            modalBadge.textContent = data.label;
            modalBadge.className = 'modal-badge-dynamic ' + (data.badgeClass || data.badge || 'badge-default');
        }

        if (modalViewInfo) modalViewInfo.style.display = 'block';
        if (modalViewChars) modalViewChars.style.display = 'none';
        
        const isTech = data.label === 'TECH' || data.badgeClass === 'badge-support' || data.badge === 'badge-support';

        if (btnModalMain) {
            btnModalMain.classList.remove('btn-card-dl', 'btn-download', 'btn-copy-cheat'); // Limpiar clases anteriores
            btnModalMain.style.display = 'flex';
            btnModalMain.onclick = null; // Limpiar cualquier manejador de clic anterior

            if (trickCodes) {
                btnModalMain.innerHTML = `<i class="fas fa-copy"></i> Copiar Trucos`;
                btnModalMain.classList.add('btn-copy-cheat'); // Añadir clase para el manejador global de trucos
            } else if (isTech) {
                btnModalMain.innerHTML = `<i class="fas fa-clipboard"></i> Copiar Guía`;
                btnModalMain.onclick = (e) => {
                    e.preventDefault();
                    const guideContent = `
${data.title}
${data.subtitle ? data.subtitle + '\n' : ''}
${data.desc}
                    `.trim();
                    navigator.clipboard.writeText(guideContent).then(() => {
                        showToast('<i class="fas fa-clipboard"></i> ¡Guía copiada al portapapeles!');
                    }).catch(err => {
                        console.error('Error al copiar la guía:', err);
                        showToast('<i class="fas fa-exclamation-triangle"></i> Error al copiar la guía.');
                    });
                };
            } else {
                btnModalMain.innerHTML = `<i class="fas fa-download"></i> Descargar Juego`;
                btnModalMain.classList.add('btn-card-dl', 'btn-download');
            }
        }

        if (btnToggleView) {
            btnToggleView.style.display = (isTech || trickCodes) ? 'none' : 'flex';
        }

        if (gameDetailModal) gameDetailModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
});