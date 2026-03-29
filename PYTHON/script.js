const questions = [
  { q: "Čo vypíše príkaz print('Ahoj')?", a: ["Ahoj", "print('Ahoj')", "chybu", "None"], correct: 0 },
  { q: "Ako deklarujeme premennú v Pythone?", a: ["var x = 5", "x = 5", "int x = 5", "let x = 5"], correct: 1 },
  { q: "Ktorý príkaz vytvorí cyklus?", a: ["if", "switch", "for", "def"], correct: 2 },
  { q: "Čo znamená operátor ==?", a: ["Priradenie", "Porovnanie", "Súčet", "Negácia"], correct: 1 },
  { q: "Ako vložíme komentár?", a: ["// komentár", "# komentár", "/* komentár */", "<!-- komentár -->"], correct: 1 },
  { q: "Ako zistíme aktuálny adresár?", a: ["os.getcwd()", "os.list()", "sys.path", "math.pi"], correct: 0 },
  { q: "Ktorý modul obsahuje funkciu sqrt?", a: ["random", "sys", "math", "datetime"], correct: 2 },
  { q: "Čo vráti len([1, 2, 3])?", a: ["3", "[1,2,3]", "1", "None"], correct: 0 },
  { q: "Ktorý zápis je funkcia?", a: ["def foo():", "var foo()", "function foo()", "fun foo()"], correct: 0 },
  { q: "Ako importujeme modul math?", a: ["include math", "import math", "using math", "require math"], correct: 1 },
  { q: "Čo robí range(5)?", a: ["Vytvorí zoznam 0..5", "Vytvorí iterátor 0..4", "Vráti 5", "Chybu"], correct: 1 },
  { q: "Ktorá hodnota je typu boolean?", a: ["True", "1", "'True'", "None"], correct: 0 },
  { q: "Ako získame dĺžku reťazca?", a: ["len('text')", "size('text')", "count('text')", "length('text')"], correct: 0 },
  { q: "Ktorý zápis je reťazec?", a: ["'text'", "[text]", "text", "<text>"], correct: 0 },
  { q: "Ktorý príkaz ukončí cyklus?", a: ["continue", "return", "exit", "break"], correct: 3 },
  { q: "Ktorý typ obsahu má hodnotu 3.14?", a: ["int", "str", "float", "bool"], correct: 2 },
  { q: "Čo vráti 2 + 3 * 4?", a: ["20", "14", "18", "11"], correct: 1 },
  { q: "Čo robí os.listdir('.')?", a: ["Zoznam súborov", "Vymaže súbory", "Spustí skript", "Zmení adresár"], correct: 0 },
  { q: "Ktorý modul vráti verziu Pythonu?", a: ["os", "sys", "math", "random"], correct: 1 },
  { q: "Ako definujeme návratovú hodnotu?", a: ["return", "yield", "break", "pass"], correct: 0 },
  { q: "Ktorý zápis je platný zoznam?", a: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"], correct: 2 },
  { q: "Ktorý príkaz pridá položku na koniec zoznamu?", a: ["append()", "add()", "push()", "insert()"], correct: 0 },
  { q: "Čo robí funkcia input()?", a: ["Číta vstup od používateľa", "Vypíše text", "Vytvorí súbor", "Spustí skript"], correct: 0 },
  { q: "Ktoré slovo vytvára triedu?", a: ["class", "struct", "obj", "type"], correct: 0 },
  { q: "Ako v Pythone odkomentujeme riadok?", a: ["Pridáme #", "Pridáme //", "Pridáme /*", "Odstránime riadok"], correct: 0 },
  { q: "Ktorý typ sa používa na pravdivostnú hodnotu?", a: ["int", "bool", "str", "float"], correct: 1 },
  { q: "Ako spustíme funkciu foo?", a: ["foo", "foo()", "call foo", "run foo"], correct: 1 },
  { q: "Ktorý znak používa Python na odsadenie bloku?", a: ["tab alebo medzera", "bodkočiarka", "zátvorka", "dvojbodka"], correct: 0 },
  { q: "Ktorý modul náhodí číslo?", a: ["datetime", "math", "random", "os"], correct: 2 }
];

const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');
const submitQuiz = document.getElementById('submitQuiz');

function createQuiz() {
  questions.forEach((item, index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-block';

    const legend = document.createElement('legend');
    legend.textContent = `${index + 1}. ${item.q}`;
    fieldset.appendChild(legend);

    item.a.forEach((answer, answerIndex) => {
      const label = document.createElement('label');
      label.className = 'quiz-label';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${index}`;
      input.value = answerIndex;
      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));
      fieldset.appendChild(label);
    });

    quizForm.appendChild(fieldset);
  });
}

function evaluateQuiz() {
  let score = 0;
  questions.forEach((item, index) => {
    const selected = quizForm.querySelector(`input[name=q${index}]:checked`);
    if (selected && Number(selected.value) === item.correct) {
      score += 1;
    }
  });

  quizResult.innerHTML = `Správne odpovede: <strong>${score} / ${questions.length}</strong><br>`;
  if (score === questions.length) {
    quizResult.innerHTML += '<p>Gratulujem! Máš plný počet bodov.</p>';
  } else if (score >= questions.length * 0.7) {
    quizResult.innerHTML += '<p>Dobrá práca! Zvládol si to veľmi dobre.</p>';
  } else {
    quizResult.innerHTML += '<p>Prečítaj si materiál znova a vyskúšaj test ešte raz.</p>';
  }
}

createQuiz();
submitQuiz.addEventListener('click', (event) => {
  event.preventDefault();
  evaluateQuiz();
});
