export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: string
  authorImage: string
  category: string
  metaDescription: string
  keyWords: string[]
  content: string
}

export const projectsPosts: BlogPost[] = [
  {
    title: "Encriptación de datos en aplicaciones web",
    slug: "encriptacion-datos-aplicaciones-web",
    excerpt:
      "Implementación de encriptación de datos sensibles utilizando AWS KMS en aplicaciones web, garantizando la seguridad y confidencialidad de la información almacenada y transmitida.",
    date: "21-03-2026",
    coverImage: "/images/projects/aws-kms.PNG",
    author: "Dev Eliyonai Molero",
    authorImage: "/images/blogdetail-page/silicaman.png",
    category: "AWS",
    metaDescription: 'Caso de estudio real: De una vulnerabilidad detectada por Ethical Hacking a una arquitectura robusta de cifrado E2E con AWS KMS, almacenamiento en caché y mitigación de Replay Attacks.',
    keyWords: ['AWS KMS', 'Cifrado Asimétrico', 'Seguridad de Datos', 'Ethical Hacking', 'Replay Attacks', 'Criptografía', 'Arquitectura de Software'],
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Introducción</h2>
      <p>En el desarrollo de software moderno, la seguridad de los datos sensibles no puede ser un pensamiento secundario. Recientemente, nuestro equipo se enfrentó a un desafío crítico: un ejercicio de <strong>Ethical Hacking</strong> ejecutado por nuestro equipo interno de ciberseguridad identificó una vulnerabilidad importante en uno de nuestros sistemas de cara al ciudadano. Estábamos utilizando un esquema criptográfico basado en una llave estática que no rotaba y que, desafortunadamente, había quedado expuesta.</p>

      <p>Mantener una clave estática para proteger información gubernamental o de ciudadanos representa un riesgo inaceptable. Si la llave se compromete, la integridad de todo el histórico de datos se derrumba. Ante este escenario, decidimos rediseñar el sistema desde sus cimientos, investigando a fondo el servicio <strong>AWS Key Management Service (KMS)</strong> para determinar si cumplía con los estrictos requerimientos de seguridad y escalabilidad que el proyecto exigía.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">El desafío: Proteger datos ciudadanos de extremo a extremo</h2>
      <p>El objetivo principal era implementar un cifrado de extremo a extremo (E2E) que ofuscara y protegiera los payloads enviados desde el cliente (frontend) hacia nuestros servidores (backend). El principal desafío residía en romper el acoplamiento de la clave compartida. Necesitábamos un modelo donde el cliente pudiera cifrar la información de manera segura, pero fuera estrictamente incapaz de descifrarla, mitigando así el impacto si un actor malicioso comprometía el entorno del navegador.</p>
        
      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Requerimientos clave del diseño:</p>
        <ul>
          <li><strong>Asimetría estricta:</strong> El frontend cifra con una clave pública; solo el backend puede descifrar con la clave privada.</li>
          <li><strong>Privilegio mínimo:</strong> El material de la clave privada nunca debe salir de AWS KMS.</li>
          <li><strong>Mitigación de Replay Attacks:</strong> Evitar que un payload interceptado pueda ser reenviado maliciosamente.</li>
          <li><strong>Eficiencia criptográfica:</strong> Minimizar el impacto en el rendimiento y latencia de la aplicación.</li>
        </ul>
      </div>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Investigación y diseño de la solución</h2>
      <p>Al evaluar AWS KMS, decidimos optar por una arquitectura basada en <strong>llaves asimétricas</strong>. En este modelo, AWS KMS actúa como el custodio seguro de la raíz de confianza. La arquitectura se estructuró bajo las siguientes reglas de diseño:</p>
        
      <ul>
        <li><strong>Aislamiento de la clave privada:</strong> La clave privada reside de forma segura dentro de los Hardware Security Modules (HSM) de AWS y es inaccesible para cualquier usuario o servicio exterior. El backend es el único autorizado para interactuar con KMS para desencriptar, regulado estrictamente a través de roles de IAM previamente configurados desde la consola de AWS.</li>
        <li><strong>Hibridación criptográfica personalizada:</strong> Debido a que las operaciones asimétricas directas en KMS imponen restricciones severas en el tamaño del payload y costos operativos, utilizamos AWS KMS para generar material de claves aleatorias y seguras bajo demanda, aplicando un algoritmo de encriptación propio optimizado para la transferencia de datos.</li>
      </ul>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Implementación técnica y optimización de rendimiento</h2>
      <p>El flujo operativo se diseñó para balancear la seguridad de alta confianza con la latencia del usuario final. El proceso se ejecuta de la siguiente manera:</p>
        
      <p>1. <strong>Estrategia de Caching en el Cliente:</strong> Para evitar realizar peticiones HTTP hacia el backend (y subsecuentemente llamadas a la API de AWS KMS) en cada renderizado o interacción, el frontend implementa un sistema de almacenamiento en caché a través de <code>localStorage</code>. Al iniciar una sesión, se solicita la llave pública; si esta sigue vigente dentro de una ventana de tiempo prudente, se reutiliza localmente, reduciendo drásticamente la latencia y los costos de infraestructura.</p>
        
      <p>2. <strong>Flujo de Cifrado y Descifrado:</strong> Una vez expirado el tiempo de caché, el frontend solicita la llave pública fresca a través de un endpoint del backend. El backend recupera el material criptográfico en tiempo real desde KMS. Con esta clave pública, el frontend cifra el payload sensible y lo envía al servidor.</p>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Blindando el Backend contra ataques de reutilización</h2>
      <p>El cifrado por sí solo no detiene a un atacante que intercepta una petición válida y la reenvía al servidor (ataque de réplica o <i>Replay Attack</i>). Para solucionar esto, el backend implementó capas avanzadas de validación antes de procesar cualquier desencriptado:</p>
        
      <ul>
        <li><strong>Nonces únicos:</strong> Cada petición del frontend debe incluir un identificador único (nonce) de un solo uso. El backend registra y valida que dicho nonce no haya sido procesado previamente.</li>
        <li><strong>Timestamps con expiración estricta:</strong> Se incluyeron marcas de tiempo en el payload. El backend calcula la diferencia de tiempo y destruye la petición si sobrepasa una ventana de expiración muy corta (pocos segundos), garantizando que los datos expiren casi inmediatamente después de ser emitidos.</li>
      </ul>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Resultados y Lecciones Aprendidas</h2>
      <p>La refactorización no solo resolvió el hallazgo crítico del equipo de Ethical Hacking, sino que elevó la madurez del sistema a estándares corporativos de alta seguridad. Al delegar la administración de claves a AWS KMS mediante roles IAM y no en código, eliminamos por completo el riesgo de filtración de credenciales en repositorios de código.</p>
        
      <p>Como principal lección aprendida, confirmamos que <strong>la seguridad y el rendimiento no tienen por qué competir</strong>. Diseñar una estrategia de caché inteligente para las llaves públicas en el cliente y combinar la robustez de KMS con validaciones a nivel de aplicación (nonces y timestamps) demuestra que es posible proteger información sensible de los ciudadanos de forma masiva, transparente y altamente eficiente.</p>
    `,
  },
  {
    title:
      "Migración de Webpack a Vite: Mejorando el rendimiento y la experiencia de desarrollo",
    slug: "migracion-webpack-vite",
    excerpt:
      "Migración del portal ChileAtiende desde Webpack a Vite, logrando una mejora significativa en los tiempos de construcción y recarga en caliente, lo que resultó en una experiencia de desarrollo más fluida y eficiente.",
    date: "21-03-2026",
    coverImage: "/images/projects/webpack-vite.PNG",
    author: "Dev Eliyonai Molero",
    authorImage: "/images/blogdetail-page/silicaman.png",
    category: "Vite",
    metaDescription: 'Caso de estudio técnico: Cómo actualizamos una aplicación legacy a Laravel 12 y Node 20, reemplazando Webpack por Vite y reduciendo el tiempo de build de 10 a 1 minuto para un pipeline con S3 y CloudFront.', 
    keyWords: ['Laravel 12', 'Vite', 'Webpack', 'Vue 2', 'Migración Frontend', 'Node 20 LTS', 'CI/CD', 'AWS S3', 'CloudFront', 'ES Modules'],
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Introducción</h2>
      <p>Llevar a cabo la modernización de una aplicación <i>legacy</i> es una de las tareas más complejas y gratificantes en la ingeniería de software. Recientemente, nuestro equipo asumió un desafío de infraestructura y código masivo: realizar el upgrade de un sistema basado en <strong>Laravel desde su versión 6 hasta la versión 12</strong>. Un salto de seis versiones mayores que transformó por completo la arquitectura del backend.</p>
        
      <p>Sin embargo, decidimos ir más allá de la capa del servidor. El proyecto arrastraba un ecosistema frontend acoplado a <strong>Node 12 y Webpack (vía Laravel Mix)</strong>, tecnologías que ralentizaban el desarrollo y limitaban la adopción de pipelines modernos. La meta fue ambiciosa: actualizar el entorno a la versión <strong>Node 20 (LTS)</strong> y erradicar Webpack para dar el salto definitivo a <strong>Vite</strong>, buscando optimizar nuestros tiempos de despliegue y la eficiencia de la aplicación.</p>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">El Desafío: Cirugía de dependencias y Breaking Changes</h2>
      <p>Saltar de Node 12 a Node 20 y cambiar el bundler principal introdujo una oleada de <i>breaking changes</i> críticos. El verdadero trabajo de trinchera consistió en auditar y actualizar minuciosamente cada uno de los paquetes de dependencias de la aplicación para asegurar su compatibilidad con la versión LTS de Node.</p>
        
      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Manteniendo Vue 2 en el ecosistema moderno:</p>
        <p>Una decisión arquitectónica clave fue <strong>mantener Vue 2</strong> en el proyecto. Migrar la capa de componentes a Vue 3 en paralelo con el upgrade de Laravel y Node representaba un riesgo operativo desmesurado. Para lograr esto, configuramos Vite utilizando el plugin específico de compatibilidad (<code>@vitejs/plugin-vue2</code>), logrando rejuvenecer el entorno de compilación sin necesidad de reescribir cientos de componentes desde cero.</p>
      </div>
        
      <p>Esta decisión nos obligó a modificar archivos altamente sensibles de la estructura de Laravel, tales como <code>app.js</code> y <code>bootstrap.js</code>, reescribiendo la inicialización global de los componentes de Vue y adaptando los plugins para cumplir con los nuevos estándares de empaquetado.</p>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">La trampa del compilado: Webpack vs. El orden estricto de Vite</h2>
      <p>Durante la migración, uno de los desafíos técnicos más sutiles y complejos que encontramos radicó en la diferencia fundamental de cómo procesan los archivos ambos bundlers. Webpack tiende a ser más permisivo y flexible con el orden de resolución de las dependencias e importaciones durante el bundling.</p>
        
      <p>Vite, por el contrario, se basa en <strong>ES Modules (ESM) nativos</strong> y procesa el árbol de dependencias con un orden matemático y estricto. Esto provocó que ciertas hojas de estilo, utilidades globales y plugins de Vue que antes se cargaban de manera implícita bajo Webpack, dejaran de funcionar o se importaran de forma incorrecta. Tuvimos que mapear el árbol de dependencias manualmente, reestructurando las declaraciones de importación para garantizar que el orden de carga frontend fuera exactamente el que Vite requería de forma explícita.</p>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">De 10 minutos a menos de 1: Impacto en el Pipeline de CI/CD</h2>
      <p>El principal catalizador de negocio para justificar esta migración fue una nueva propuesta de arquitectura de infraestructura: queríamos compilar todos los assets estáticos del frontend, subirlos a un bucket de <strong>AWS S3</strong> y distribuirlos a nivel global mediante <strong>Amazon CloudFront</strong>.</p>
        
      <p>Bajo la arquitectura antigua con Webpack, el pipeline de CI/CD sufría un cuello de botella crítico: los procesos de <code>npm install</code> y <code>npm run prod</code> (compilación y minificación) demoraban <strong>más de 10 minutos</strong> en completarse. Aunque el proceso posterior de sincronización con el bucket de S3 era sumamente rápido, el tiempo de procesamiento local del pipeline volvía los despliegues lentos y costosos.</p>
        
      <p>Al implementar Vite, la diferencia fue drástica:</p>
      <ul>
        <li><strong>Tiempo de compilación:</strong> Se redujo de más de 10 minutos a <strong>menos de 1 minuto</strong>.</li>
        <li><strong>Peso del Bundle:</strong> Gracias al <i>Tree Shaking</i> nativo de Vite, el peso de los archivos finales disminuyó considerablemente, optimizando la velocidad de carga para el usuario final.</li>
      </ul>
        
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Lecciones Aprendidas y Conclusión</h2>
      <p>Esta migración demostró que es totalmente viable y saludable modernizar el herramental de desarrollo (Vite, Node 20, Laravel 12) sin verse obligado a migrar de forma inmediata la librería reactiva principal (Vue 2), logrando un balance perfecto entre estabilidad operativa y modernización técnica.</p>
        
      <p>Para otros equipos abordando un desafío similar, la recomendación es clara: presten especial atención al orden de sus importaciones en los archivos de inicialización y auditen sus dependencias con anticipación. El esfuerzo de mitigar los <i>breaking changes</i> se paga con creces al recuperar la agilidad del equipo de desarrollo y recortar en un 90% los tiempos de espera en el pipeline de despliegue continuo.</p>
    `,
  },
  {
    title: "QuickCheckout",
    excerpt:
      "Formulario de pago renderiable en cualquier plataforma, con validaciones en tiempo real y optimizado para conversiones.",
    date: "21-03-2026",
    coverImage: "/images/projects/quick-checkout.PNG",
    slug: "quickcheckout",
    author: "Dev Eliyonai Molero",
    authorImage: "/images/blogdetail-page/silicaman.png",
    category: "Payments",
    metaDescription: 'Cómo diseñamos una solución PayTech para eliminar la triple redirección de Webpay en Chile, implementando un SDK embebible mediante NPM, comunicación segura con postMessage y cumplimiento PCI-DSS.',
    keyWords: ['PayTech', 'Webpay', 'FinTech Chile', 'IFrame Security', 'postMessage', 'Cifrado de Tarjetas', 'AWS KMS', 'Validación de BIN', 'Conversión de Pagos'],
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Introducción</h2>
      <p>En el ecosistema del comercio electrónico en Chile, la fricción en el momento del pago es uno de los principales enemigos de la tasa de conversión. Históricamente, la gran mayoría de las pasarelas locales implementan un flujo basado en la redirección: el usuario es llevado desde el comercio hacia el formulario de la pasarela, de ahí redirigido al banco emisor para su autenticación, luego de vuelta a la pasarela y, finalmente, retorna al comercio asociado. Esta "triple redirección" interrumpe la experiencia de usuario y provoca un abandono masivo de carritos de compra.</p>

      <p>Para resolver este problema en una PayTech, diseñamos <strong>QuickCheckout</strong>: un formulario de pago altamente optimizado para conversión, capaz de renderizarse de manera nativa en cualquier plataforma sin romper la identidad visual del comercio, emulando la fluidez de soluciones globales y transformando una experiencia fragmentada en un único flujo continuo.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">El Desafío: Aislamiento, Seguridad y Cumplimiento PCI-DSS</h2>
      <p>El reto no era solo estético o de conversión; la captura de datos de tarjetas de crédito y débito está estrictamente regulada por la normativa <strong>PCI-DSS</strong>. Permitir que el comercio manipule directamente los números de tarjeta incrementa exponencialmente el alcance de sus responsabilidades de seguridad y auditoría. Necesitábamos un mecanismo donde el formulario se integrara visualmente en la web del comercio, pero donde los datos sensibles jamás tocaran sus servidores.</p>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Arquitectura de Integración Segura (NPM + IFrame):</p>
        <p>Para mitigar el alcance de PCI-DSS, la solución se dividió en dos componentes frontend autónomos:</p>
        <ul>
          <li><strong>SDK del Cliente (Paquete NPM):</strong> Una librería ligera que los comercios instalan en su plataforma. Su única responsabilidad es inicializar el entorno e inyectar un elemento contenedor.</li>
          <li><strong>IFrame de Renderizado:</strong> Un frontend independiente y aislado, alojado en nuestros servidores seguros, que carga el formulario de pago real dentro del contenedor provisto por el SDK.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Comunicación e Inyección Segura de Datos</h2>
      <p>Al aislar el formulario en un dominio distinto mediante un IFrame, surge la necesidad de comunicar ambos entornos de forma segura. El comercio necesita enviar configuraciones iniciales (como el ID del comercio, monto o la llave pública de sesión) al formulario. Esto se logró implementando la API nativa del navegador <code>window.postMessage</code>, configurando una <strong>validación estricta de orígenes (Origins) permitidos</strong>. El IFrame rechaza inmediatamente cualquier mensaje que no provenga del dominio explícitamente registrado por el comercio.</p>

      <p>Una vez que el backend recibe la llave pública del comercio durante la inicialización, ejecuta un árbol de validaciones críticas en tiempo real antes de permitir el renderizado:</p>
      <ul>
        <li><strong>Vigencia y Pertenencia:</strong> Verifica que la llave exista, esté activa y pertenezca exactamente al comercio que la invoca.</li>
        <li><strong>Reglas de Negocio Geográficas (Geoblocking):</strong> Analiza el contexto de la transacción. Si el comercio no tiene autorizadas transacciones internacionales y el intento se origina en el extranjero, el renderizado se bloquea de inmediato.</li>
      </ul>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Cifrado Progresivo en Tiempo Real con AWS KMS</h2>
      <p>Para maximizar la seguridad de los datos del tarjetahabiente, QuickCheckout no espera a que el usuario presione el botón de "Pagar" para proteger la información. El IFrame implementa una lógica de <strong>cifrado progresivo dígito a dígito (keystroke encryption)</strong> utilizando una llave pública criptográfica.</p>

      <p>Cada vez que el usuario escribe en los campos sensibles, el payload en tránsito se enmascara criptográficamente antes de salir del entorno del navegador. Al enviarse la petición final, el backend de la PayTech —el único componente autorizado mediante políticas y roles IAM estrictos— interactúa con <strong>AWS KMS (Key Management Service)</strong> para desencriptar el paquete de forma segura, procesar la transacción y retornar la respuesta cifrada al cliente.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Validaciones en Tiempo Real basadas en BIN (Bank Identification Number)</h2>
      <p>Uno de los mayores aciertos en la optimización de la experiencia de usuario fue la validación inteligente de reglas de contrato. No todos los comercios aceptan los mismos medios de pago: algunos optan por operar solo con Débito, mientras que otros habilitan Crédito (con o sin cuotas) o Tarjetas de Prepago.</p>

      <p>En lugar de procesar una transacción y esperar el rechazo tardío del banco emisor, QuickCheckout evalúa las condiciones dinámicamente en el cliente:</p>

      <p>Al momento en que el usuario digita los <strong>primeros 8 dígitos de su tarjeta (el BIN)</strong>, el frontend dispara una petición asíncrona hacia el backend. El servidor consulta una tabla de BINs de actualización constante y analiza los términos del contrato del comercio. Si un usuario intenta pagar con una tarjeta de Crédito en un comercio que contractualmente solo tiene permitido Débito, el sistema bloquea preventivamente el formulario y muestra un mensaje claro al usuario indicando los métodos válidos de ese comercio específico, evitando transacciones fallidas y frustración en la UI.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Resultados y Conclusiones</h2>
      <p>El desarrollo de QuickCheckout demostró que las exigencias técnicas y regulatorias de la industria Fintech no tienen por qué mermar la experiencia de usuario. El uso estratégico de tecnologías nativas de los navegadores (como IFrames y <code>postMessage</code> seguros) combinado con la robustez criptográfica de AWS KMS nos permitió construir un producto que no solo redujo drásticamente el alcance de cumplimiento PCI-DSS para la PayTech y sus comercios asociados, sino que eliminó por completo la fricción de la triple redirección, impulsando sustancialmente las tasas de conversión del e-commerce local.</p>
    `,
  },
];

export function getProjectBySlug(slug: string) {
  return projectsPosts.find((post) => post.slug === slug)
}
