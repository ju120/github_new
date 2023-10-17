var messageDiv,
  loadingMessage = document.querySelector("#loadingMessage"),
  table = document.querySelector("table");
showNameInput.addEventListener("keyup", () => {
  const e = showNameInput.value.toLowerCase();
  if (!e) return;
  const t = `https://api.tvmaze.com/search/shows?q=${e}`;
  (loadingMessage.style.display = "block"),
    fetch(t)
      .then((e) => e.json())
      .then((t) => {
        isFetchComplete = !0;
        const n = document.querySelector("tbody");
        (n.innerHTML = ""), (loadingMessage.style.display = "none");
        const s = t.filter((t) => t.show.name.toLowerCase().includes(e));
        0 === s.length
          ? messageDiv
            ? ((messageDiv.style.display = "block"), (messageDiv.textContent = "No such show!"), (messageDiv.style.fontSize = "2em"))
            : (((messageDiv = document.createElement("div")).textContent = "No such show found!"), table.parentNode.insertBefore(messageDiv, table.nextSibling))
          : messageDiv && (messageDiv.style.display = "none"),
          s.forEach((e) => {
            const t = e.show,
              s = document.createElement("tr"),
              a = document.createElement("td");
            (a.innerText = t.name), (a.style.fontWeight = "800");
            const o = document.createElement("td");
            o.innerText = t.rating ? t.rating.average : "N/A";
            const l = document.createElement("td");
            l.innerText = t.genres.join(", ");
            const c = document.createElement("td");
            (c.innerHTML = t.summary.replace(/<\/?p>/g, "")), (c.innerHTML = t.summary.replace(/<\/?b>/g, "")), s.appendChild(a), s.appendChild(o), s.appendChild(l), s.appendChild(c), n.appendChild(s), (n.style.backgroundColor = "#ccc");
          });
      })
      .catch((e) => {
        console.error(e), (loadingMessage.style.display = "none");
      });
});
