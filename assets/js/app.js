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

function showDomains() {
  let useOfArticles = document.querySelector(
    'input[name="useOfArticles"]:checked'
  ).value;

  keywords = document.getElementById("keywords").value;
  if (keywords === "") {
    alert("The field 'keywords' is required.");
  } else {
    let keywordsArr = keywords.split(", ");

    categories = document.getElementById("categories").value;
    let categoriesArr = categories.split(", ");

    userExtensions = document.getElementById("userExtensions").value;
    let userExtensionsArr = userExtensions.split(", ");

    const results = document.getElementById("results");

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

    let resultsTitle = document.getElementById("results-title");
    resultsTitle.classList.remove("unvisible");
    resultsTitle.classList.add("visible");

    let appreciation = document.getElementById("appreciation");
    appreciation.classList.remove("unvisible");
    appreciation.classList.add("visible");
  }
}
