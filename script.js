static/script.js
let startTime;
let interval;

function startTimer() {
  startTime = Date.now();
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const min = Math.floor(elapsed / 60);
  const sec = elapsed % 60;

  document.getElementById("timer").innerText =
    `${min}:${sec.toString().padStart(2, "0")}`;
}

function stopTimer() {
  clearInterval(interval);

  const task = document.getElementById("task").value;
  const time = document.getElementById("timer").innerText;

  fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, time })
  });

  const li = document.createElement("li");
  li.innerText = `${task}: ${time}`;
  document.getElementById("history").appendChild(li);
}
