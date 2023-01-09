let articles = ["the", "our", "my", "your"];
let keywords = "";
let categories = "";
let userExtensions = "";
let extensions = [
  "aero",
  "biz",
  "cat",
  "com",
  "coop",
  "edu",
  "gov",
  "info",
  "int",
  "jobs",
  "mil",
  "mobi",
  "museum",
  "name",
  "net",
  "org",
  "travel",
  "ac",
  "ad",
  "ae",
  "af",
  "ag",
  "ai",
  "al",
  "am",
  "an",
  "ao",
  "aq",
  "ar",
  "as",
  "at",
  "au",
  "aw",
  "az",
  "ba",
  "bb",
  "bd",
  "be",
  "bf",
  "bg",
  "bh",
  "bi",
  "bj",
  "bm",
  "bn",
  "bo",
  "br",
  "bs",
  "bt",
  "bv",
  "bw",
  "by",
  "bz",
  "ca",
  "cc",
  "cd",
  "cf",
  "cg",
  "ch",
  "ci",
  "ck",
  "cl",
  "cm",
  "cn",
  "co",
  "cr",
  "cs",
  "cu",
  "cv",
  "cx",
  "cy",
  "cz",
  "de",
  "dj",
  "dk",
  "dm",
  "do",
  "dz",
  "ec",
  "ee",
  "eg",
  "eh",
  "er",
  "es",
  "et",
  "eu",
  "fi",
  "fj",
  "fk",
  "fm",
  "fo",
  "fr",
  "ga",
  "gb",
  "gd",
  "ge",
  "gf",
  "gg",
  "gh",
  "gi",
  "gl",
  "gm",
  "gn",
  "gp",
  "gq",
  "gr",
  "gs",
  "gt",
  "gu",
  "gw",
  "gy",
  "hk",
  "hm",
  "hn",
  "hr",
  "ht",
  "hu",
  "id",
  "ie",
  "il",
  "im",
  "in",
  "io",
  "iq",
  "ir",
  "is",
  "it",
  "je",
  "jm",
  "jo",
  "jp",
  "ke",
  "kg",
  "kh",
  "ki",
  "km",
  "kn",
  "kp",
  "kr",
  "kw",
  "ky",
  "kz",
  "la",
  "lb",
  "lc",
  "li",
  "lk",
  "lr",
  "ls",
  "lt",
  "lu",
  "lv",
  "ly",
  "ma",
  "mc",
  "md",
  "mg",
  "mh",
  "mk",
  "ml",
  "mm",
  "mn",
  "mo",
  "mp",
  "mq",
  "mr",
  "ms",
  "mt",
  "mu",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nc",
  "ne",
  "nf",
  "ng",
  "ni",
  "nl",
  "no",
  "np",
  "nr",
  "nu",
  "nz",
  "om",
  "pa",
  "pe",
  "pf",
  "pg",
  "ph",
  "pk",
  "pl",
  "pm",
  "pn",
  "pr",
  "ps",
  "pt",
  "pw",
  "py",
  "qa",
  "re",
  "ro",
  "ru",
  "rw",
  "sa",
  "sb",
  "sc",
  "sd",
  "se",
  "sg",
  "sh",
  "si",
  "sj",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sr",
  "st",
  "su",
  "sv",
  "sy",
  "sz",
  "tc",
  "td",
  "tf",
  "tg",
  "th",
  "tj",
  "tk",
  "tm",
  "tn",
  "to",
  "tp",
  "tr",
  "tt",
  "tv",
  "tw",
  "tz",
  "ua",
  "ug",
  "uk",
  "um",
  "us",
  "uy",
  "uz",
  "va",
  "vc",
  "ve",
  "vg",
  "vi",
  "vn",
  "vu",
  "wf",
  "ws",
  "ye",
  "yt",
  "yu",
  "za",
  "zm",
  "zr",
  "zw",
];
let spanishOn = false;

function changeLanguage() {
  spanishOn = true;

  let englishButton = document.getElementById("english-button");
  englishButton.classList.remove("invisible");
  englishButton.classList.add("visible");

  let spanishButton = document.getElementById("spanish-button");
  spanishButton.classList.remove("visible");
  spanishButton.classList.remove("position-absolute");
  spanishButton.classList.add("invisible");

  document.getElementById("main-title").innerText = "Generador de dominios";
  document.getElementById("introduction").innerText =
    "¿Se te acabaron las ideas sobre qué nombre de dominio elegir? ¡Déjame hacer tu vida más fácil con este generador de nombres de dominio!";

  document.getElementById(
    "legend-1"
  ).innerHTML = `1. ¿Te gustaría que algunos artículos <span class="text-secondary">(my, our, your, the...)</span> fueren añadidos a tus ideas de nombres de dominio?`;

  document.getElementById("yes-legend").innerText = "Sí";

  document.getElementById(
    "educative-1-title"
  ).innerText = `La importancia de elegir el nombre de dominio apropiado`;

  document.getElementById(
    "educative-1-content"
  ).innerText = `Decidir y registrar un nombre de dominio es algo que no debiere ser hecho al apuro. Es una herramienta de marketing valiosísima que, elegida con el debido rigor, habría de conducir a los potenciales clientes a nuestro sitio con el mayor de los éxitos. Una cuidadosa deliberación —e incluso investigación— debería ser llevada a cabo a la hora de elegir el mejor nombre de dominio posible.`;

  document.getElementById(
    "educative-2-title"
  ).innerText = `Tan corto como te sea posible`;

  document.getElementById(
    "educative-2-content"
  ).innerText = `Los nombres de dominio deberían ser tan cortos como nos fuere posible elegirlos para mejorar la pregnancia —esto es, la facilidad de ser recordados— por parte del usuario.`;

  document.getElementById(
    "legend-2"
  ).innerHTML = `2. Por favor, describe tu negocio con una lista de palabras clave separada por comas. No olvides incluir un espacio después de cada coma. Ejemplo: una, lista, separada, por, comas. Igualmente, por favor, recuerda que el único símbolo aceptado en lo que a nombres de dominio se refiere es el guión <code>[-]</code>.`;

  document.getElementById("small-1").innerText = `Campo obligatorio`;

  document.getElementById(
    "keywords"
  ).placeholder = `Por favor, describe tu negocio con una lista de palabras clave separada por comas.`;

  document.getElementById(
    "categories"
  ).placeholder = `¿En qué categorías encaja mejor tu negocio?`;

  document.getElementById(
    "userExtensions"
  ).placeholder = `¿Sabes ya qué extensiones de dominio te interesan?`;

  document.getElementById(
    "legend-3"
  ).innerHTML = `3. Por favor, describe la categoría o categorías a las que pertenece tu negocio. Utiliza una lista de palabras clave separada por comas para hacerlo. No olvides incluir un espacio después de cada coma. Ejemplo: <span class="text-secondary">una, lista, separada, por, comas</span>. Además, recuerda que el único símbolo posible aceptado dentro de cualquier nombre de dominio dado es el guión [<code>-</code>].`;

  document.getElementById(
    "legend-4"
  ).innerHTML = `4. Por favor, lista las extensiones de dominio en las cuales tienes interés. Hazlo en forma de lista separada por comas. NO INCLUYAS el punto [.]. Deja este campo vacío para utilizar las extensiones de dominio por defecto. No te olvides de incluir un espacio tras cada coma. Ejemplo: <span class="text-secondary">una, lista, separada, por, comas</span>.`;

  document.getElementById("submit-button").value = `Enviar`;

  document.getElementById(
    "footer"
  ).innerHTML = `<a href="https://ibaifernandez.com" target="_blank">Ibai Fernández</a> © Todos los derechos reservados · 2022`;
}

function showDomains() {
  let useOfArticles = document.querySelector(
    'input[name="useOfArticles"]:checked'
  ).value;

  keywords = document.getElementById("keywords").value;
  if (keywords === "") {
    if (!spanishOn) {
      alert("The field 'keywords' is required.");
    } else {
      alert("El campo 'keywords' es obligatorio.");
    }
  } else {
    let keywordsArr = keywords.split(", ");

    categories = document.getElementById("categories").value;
    let categoriesArr = categories.split(", ");

    userExtensions = document.getElementById("userExtensions").value;
    let userExtensionsArr = userExtensions.split(", ");

    const results = document.getElementById("results");
    const resultsTitle = document.getElementById("results-title");
    const appreciation = document.getElementById("appreciation");

    const ul = document.createElement("ul");
    ul.setAttribute("id", "domainsList");
    ul.classList.add("domains");
    results.appendChild(ul);

    function useArticlesWithExtensions() {
      for (let i = 0; i < articles.length; i++) {
        for (let j = 0; j < keywordsArr.length; j++) {
          for (let k = 0; k < categoriesArr.length; k++) {
            for (let l = 0; l < extensions.length; l++) {
              const li = document.createElement("li");
              li.innerHTML = `<a class="domainName" href="https://${keywordsArr[j]}${categoriesArr[k]}.${extensions[l]}">${keywordsArr[j]}${categoriesArr[k]}.${extensions[l]}</a>`;
              domainsList.appendChild(li);
            }
          }
        }
      }
    }

    function dontUseArticlesWithExtensions() {
      for (let j = 0; j < keywordsArr.length; j++) {
        for (let k = 0; k < categoriesArr.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="https://${keywordsArr[j]}${categoriesArr[k]}.${extensions[l]}">${keywordsArr[j]}${categoriesArr[k]}.${extensions[l]}</a>`;
            domainsList.appendChild(li);
          }
        }
      }
    }

    function useArticlesWithUserExtensions() {
      for (let i = 0; i < articles.length; i++) {
        for (let j = 0; j < keywordsArr.length; j++) {
          for (let k = 0; k < categoriesArr.length; k++) {
            for (let l = 0; l < userExtensionsArr.length; l++) {
              const li = document.createElement("li");
              li.innerHTML = `<a href="https://${articles[i]}${keywordsArr[j]}${categoriesArr[k]}.${userExtensionsArr[l]}">${articles[i]}${keywordsArr[j]}${categoriesArr[k]}.${userExtensionsArr[l]}</a>`;
              domainsList.appendChild(li);
            }
          }
        }
      }
    }

    function dontUseArticlesWithUserExtensions() {
      for (let j = 0; j < keywordsArr.length; j++) {
        for (let k = 0; k < categoriesArr.length; k++) {
          for (let l = 0; l < userExtensionsArr.length; l++) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="https://${keywordsArr[j]}${categoriesArr[k]}.${userExtensionsArr[l]}">${keywordsArr[j]}${categoriesArr[k]}.${userExtensionsArr[l]}</a>`;
            domainsList.appendChild(li);
          }
        }
      }
    }

    if (useOfArticles === "yes") {
      if (userExtensionsArr[0] === "") {
        useArticlesWithExtensions();
      } else {
        useArticlesWithUserExtensions();
      }
    } else {
      if (userExtensionsArr[0] === "") {
        dontUseArticlesWithExtensions();
      } else {
        dontUseArticlesWithUserExtensions();
      }
    }

    const resultsTitleContent = document.createElement("h2");
    resultsTitleContent.classList.add("h2");
    resultsTitleContent.classList.add("text-center");
    resultsTitleContent.classList.add("mt-5");
    resultsTitleContent.classList.add("fw-bold");
    resultsTitleContent.innerText = "Here are your results 👇🏼";
    resultsTitle.appendChild(resultsTitleContent);

    const appreciationContent = document.createElement("p");
    appreciationContent.classList.add("p");
    appreciationContent.classList.add("text-center");
    appreciationContent.classList.add("display-6");
    appreciationContent.classList.add("mb-5");
    appreciationContent.innerHTML =
      'If you\'ve liked the ride, please, show some appreciation by letting me know it thru <a href="https://twitter.com/intent/tweet?text=This%20is%20me%20showing%20some%20appreciation%20to%20@ibaifernandezec😂%20Have%20a%20look%20at%20his%20work%20at%20&url=http%3A%2F%2Fportfolio.ibaifernandez.com%2F&hashtags=100DaysOfCode,HTML,CSS,JavaScript" target="_blank">a tweet</a>.';
    appreciation.appendChild(appreciationContent);
  }
}

function reboot() {
  location.reload();
}
