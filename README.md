![SwagLabs_E2E_suit](https://github.com/aseoaneo23/SwagLabsE2E/assets/145000901/a540e0b3-2fbb-4be0-a1f9-ab4b90b3e2c9)

![Static Badge](https://img.shields.io/badge/PFC%20DAW-%20blue)
 ![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-green) 
 ![Static Badge](https://img.shields.io/badge/NPM-v10.2.1-lightblue) 
 ![Static Badge](https://img.shields.io/badge/Node-v18.18-lightgreen)
 ![Static Badge](https://img.shields.io/badge/Cypress-v13.8.1-purple)
![Static Badge](https://img.shields.io/badge/Cucumber-v4.3.1-darkgreen)

# índice 
1. [Descripción del Proyecto](#descripción-del-proyecto) ✍️
2. [Estado del proyecto](#estado-del-proyecto) 💻
3. [Estructura del proyecto](#estructura-del-proyecto) 🛫
4. [Acceso al Proyecto](#acceso-al-proyecto) 🔑
5. [Tecnologías utilizadas](#tecnologías-utilizadas) 🧰
6. [Autor](#autor) 🧑‍💻
7. [Licencia](#licencia) 🪪


# Descripción del Proyecto 

Proyecto en desarrollo para trabajo de fin de ciclo de Desarrollo de Aplicaciones Web, basado en una *suite* de pruebas [E2E](https://qalified.com/es/blog/end-to-end-testing/). El objetivo es mostrar la utilidad de esta arquitectura de pruebas que cada vez toma más protagonismo en el mundo del quality assurance.

Este proyecto se centra en la automatización de pruebas sobre la web de [Swag Labs](https://www.saucedemo.com/) la cual contiene funcionalidad adecuada para llevar a cabo un plan de testing de extremo a extremo.

Se estudian las funcionalidades principales de cada página con el fin de asegurar el correcto funcionamiento de la interfaz por medio de tests que ayudan en la labor de [QA](https://ed.team/blog/que-es-y-que-hace-un-analista-qa).

El vídeo publicitario del proyecto se puede encontrar en [Teaser](https://youtu.be/qxe6HxAC_p4?si=q6eVeTnfxYjiWVHT)


# Estado del proyecto 

🛫 Finalizado 🛬

# Estructura del proyecto 

SwagLabsE2E

      ├── .gitignore
      
      ├── [cypress]
          ├── constants.js
         
          ├── [downloads]
          
          ├── [features]
              ├── cart_management.feature
              ├── checkout.feature
              ├── login.feature
              ├── logout.feature
              └── product_detail.feature
              
          ├── [fixtures]
              └── example.json
              
          ├── [pages]
              ├── cart_page.js
              ├── checkout_page.js
              ├── login_page.js
              └── main_page.js
              
          ├── [plugins]
              └── index.js
              
          ├── [screenshots]
           
              
          └── [support]
              ├── commands.js
              ├── e2e.js
              └── [step_definitions]
                  ├── cart_management.js
                  ├── checkout.js
                  ├── login.js
                  ├── logout.js
                  └── product_detail.js
                  
      ├── cypress.config.js
     
      ├── package.json
      └── README.md

### Explicación de directorios

- **.gitignore:** contiene los archivos que no deben ser subidos al repositorio
  
- **cypress:** contiene la estructura principal del proyecto cypress
  - **constants.js:** archivo que contiene constantes utilizadas en las pruebas
    
  - **downloads:** carpeta para almacenar archivos descargados durante las pruebas (sin usar)
    
  - **features:** contiene los archivos de características para las pruebas BDD
    - **cart_management.feature** 
    - **checkout.feature**
    - **login.feature**
    - **logout.feature**
    - **product_detail.feature**
      
  - **fixtures:** contiene datos de prueba estáticos (sin usar)
    - **example.json**
      
  - **pages:** contiene los objetos de página utilizados en las pruebas
    - **cart_page.js**
    - **checkout_page.js** 
    - **login_page.js**
    - **main_page.js**
      
  - **plugins:** contiene los plugins personalizados de Cypress
    - **index.js:** archivo principal de configuración de plugins
      
  - **screenshots:** carpeta para almacenar capturas de pantalla tomadas durante las pruebas
    
  - **support:** contiene archivos de soporte y configuraciones globales
    - **commands.js:** define comandos personalizados de Cypress
    - **e2e.js:** configuración y hooks globales de Cypress
    - **step_definitions:** contiene las definiciones de pasos para las pruebas BDD
      - **cart_management.js**
      - **checkout.js**
      - **login.js**
      - **logout.js**
      - **product_detail.js**
        
- **cypress.config.js:** archivo de configuración principal de Cypress
  
- **package.json:** archivo que contiene las dependencias del proyecto y scripts de npm
  
- **README.md:** archivo de documentación del proyecto



# Acceso al Proyecto

Instrucciones acerca de requerimientos, instalación y ejecución del proyecto de forma totalmente guiada

### Requerimientos

- **Entorno (SO):**  macOS 10.15 y superior, Linux Ubuntu 20.04 y superior, Windows 10 y superior (solo 64-bit).(Usado Windows 11 v23H2)
- **Navegadores compatibles:** Google Chrome v125 / Edge v125 / Electron v118 (No soporta Firefox debido a problemas de la versión con peticiones de la web)
- **Entorno de ejecución:**  Node 18 o superiores ( Usada en el proyecto: Node.js v18.18 + NPM 10.2.1)
- **Java 8 como mínimo (1.8.0)**

### Instalación y ejecución

Necesitas tener Node.js instalado antes de usar Cypress. Puedes encontrar más información [aquí](https://kinsta.com/es/blog/como-instalar-node-js/).

Clona el repositorio

    git clone https://github.com/aseoaneo23/SwagLabsE2E.git

Ve a la carpeta del proyecto en la línea de comandos, entra en el archivo "SwagLabsE2E" y escribe:

    npm install

lo cual instalará Cypress y otras herramientas de soporte.

Para ejecutar las pruebas, escribe:

    npx cypress open
    
# Tecnologías utilizadas

- **JavaScript**
  
- **cypress:** "13.8.1"
   
- **cypress-cucumber-preprocessor:** "4.3.1",

# Autor

|[<img src="https://avatars.githubusercontent.com/u/145000901?v=4" width=115><br><sub>Antonio Seoane de Ois</sub>](https://github.com/aseoaneo23)|
| :---: | 

# Licencia

La licencia de este proyecto está enfocada en el marco educativo, por lo que sus uso se reserva a fines únicamente orientados a su evaluación.

# Agradecimientos

En esta sección quería agradecer el papel de mi empresa de prácticas, en concreto de mis responsables de QA, los cuales me han ayudado a establecer unos conocimientos firmes sobre buenas prácticas y manejo de herramientas.

