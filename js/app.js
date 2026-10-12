/* Flashcard Reviewer: app logic.
   Setup lives in js/config.js, questions live in js/data/. */

const state = {
  subject: "CC03",
  term: "PRELIMS",
  chapter: "all",
  questions: [],
  index: 0,
  score: 0,
  selected: null, // the option the user picked for the current question
};

const $ = (id) => document.getElementById(id);
const current = () => state.questions[state.index];
const termChapters = () => TERMS[state.term].chapters;

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]);
}

/* ---------- Loading a set of questions ---------- */
function loadSet() {
  const allowed = termChapters();
  const pool = (QUESTION_BANK[state.subject] || []).filter(
    (q) => allowed.includes(q.chapter) && (state.chapter === "all" || String(q.chapter) === state.chapter)
  );
  state.questions = shuffle(pool).map((q) => ({ ...q, options: shuffle(q.options) }));
  Object.assign(state, { index: 0, score: 0, selected: null });
  render();
}

/* ---------- Chapter buttons (depend on the selected term) ---------- */
function renderToolbar() {
  const toolbar = $("toolbar");
  const chapters = termChapters();
  toolbar.hidden = chapters.length === 0;
  const choices = [["all", "All chapters"], ...chapters.map((c) => [String(c), "Chapter " + c])];
  toolbar.replaceChildren(
    ...choices.map(([value, label]) => {
      const button = document.createElement("button");
      button.className = "chapter-btn" + (state.chapter === value ? " active" : "");
      button.dataset.chapter = value;
      button.textContent = label;
      return button;
    })
  );
}

function setActiveTab(attribute, value) {
  document.querySelectorAll(`[data-${attribute}]`).forEach((tab) => {
    const active = tab.dataset[attribute] === value;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active);
  });
}

/* ---------- Rendering ---------- */
function render() {
  if (!termChapters().length) {
    return renderMessage(TERMS[state.term].label + " is empty for now", "Chapters and questions for this term will be added soon.");
  }
  if (!state.questions.length) {
    return renderMessage("No questions found", "Try another chapter or subject.");
  }
  renderQuiz();
}

function renderMessage(title, text) {
  $("appContent").innerHTML = `<div class="card result"><h2>${escapeHtml(title)}</h2><p class="muted">${escapeHtml(text)}</p></div>`;
}

function renderQuiz() {
  const q = current();
  const answered = state.selected !== null;
  const correct = state.selected === q.answer;
  const isLast = state.index === state.questions.length - 1;

  const options = q.options
    .map((text, i) => {
      let cls = "option";
      if (answered) {
        if (text === q.answer) cls += " correct";
        else if (text === state.selected) cls += " wrong";
      }
      return `<button class="${cls}" data-index="${i}" ${answered ? "disabled" : ""}>${escapeHtml(text)}</button>`;
    })
    .join("");

  $("appContent").innerHTML = `
    <div class="card">
      <div class="meta"><span>${state.subject} • Chapter ${q.chapter}</span><span>${state.index + 1} / ${state.questions.length}</span></div>
      <div class="progress"><div id="bar"></div></div>
      <div class="question">${escapeHtml(q.question)}</div>
      <div class="answers">${options}</div>
      ${answered ? `<div class="feedback ${correct ? "good" : "bad"}"><b>${correct ? "Correct!" : "Incorrect."}</b>Correct answer: <strong>${escapeHtml(q.answer)}</strong></div>` : ""}
      <div class="controls">
        <button class="btn primary next-btn" id="next" ${answered ? "" : "disabled"}>${isLast ? "See Result" : "Next question"}</button>
      </div>
    </div>`;
  $("bar").style.width = (state.index / state.questions.length) * 100 + "%";
}

function showResult() {
  const pct = Math.round((state.score / state.questions.length) * 100);
  const scope = state.chapter === "all" ? "All chapters" : "Chapter " + state.chapter;
  const remark = pct >= 90 ? "Excellent work." : pct >= 75 ? "Good job. Keep reviewing the missed items." : "Keep practicing. Retry to get a new shuffled set.";
  $("appContent").innerHTML = `
    <div class="card result">
      <div class="muted">${state.subject} • ${TERMS[state.term].label} • ${scope}</div>
      <div class="score">${state.score} / ${state.questions.length}</div>
      <h2>${pct}%</h2>
      <p class="muted">${remark}</p>
      <div class="controls"><button class="btn primary" id="retry">Retry</button></div>
    </div>`;
}

/* ---------- Events ---------- */
function choose(index) {
  const q = current();
  state.selected = q.options[index];
  if (state.selected === q.answer) state.score++;
  render();
}

function next() {
  if (state.selected === null) return;
  if (state.index === state.questions.length - 1) return showResult();
  state.index++;
  state.selected = null;
  render();
}

$("appContent").addEventListener("click", (e) => {
  const option = e.target.closest(".option");
  if (option && state.selected === null) return choose(Number(option.dataset.index));
  if (e.target.closest("#next")) return next();
  if (e.target.closest("#retry")) return loadSet();
});

document.querySelectorAll("[data-subject]").forEach((tab) =>
  tab.addEventListener("click", () => {
    state.subject = tab.dataset.subject;
    setActiveTab("subject", state.subject);
    loadSet();
  })
);

document.querySelectorAll("[data-term]").forEach((tab) =>
  tab.addEventListener("click", () => {
    state.term = tab.dataset.term;
    state.chapter = "all";
    setActiveTab("term", state.term);
    renderToolbar();
    loadSet();
  })
);

$("toolbar").addEventListener("click", (e) => {
  const button = e.target.closest(".chapter-btn");
  if (!button) return;
  state.chapter = button.dataset.chapter;
  renderToolbar();
  loadSet();
});

renderToolbar();
loadSet();
