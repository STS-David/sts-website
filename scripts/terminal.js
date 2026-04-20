(function initTerminal() {
    const terminal = document.querySelector("[data-terminal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!terminal) {
        return;
    }

    const commands = [
        { type: "input", text: 'sts --init --target "digital_ecosystem"' },
        { type: "log", tone: "scan", text: "[SCAN] Analysiere gewachsene Strukturen..." },
        { type: "log", tone: "warn", text: '[WARN] Unklare Zuständigkeiten in /ROOT/ACCESS_LOGS gefunden.' },
        { type: "log", tone: "error", text: '[ERR] Kritische Abhängigkeit von Einzelperson: "Admin_Head"' },
        { type: "pause", length: 900 },
        { type: "input", text: 'sts --restructure --mode "sauber"' },
        { type: "log", tone: "action", text: "-> Ordne Dateien und Ablagen..." },
        { type: "log", tone: "action", text: "-> Bereinige operative Zugriffslogik..." },
        { type: "log", tone: "action", text: "-> Sichere Übergabeprozesse ab..." },
        { type: "log", tone: "done", text: "[DONE] Systemstatus: BELASTBAR & NACHVOLLZIEHBAR" },
        { type: "pause", length: 2400 },
        { type: "clear" }
    ];

    async function typeWriter() {
        let commandIndex = 0;

        while (document.body.contains(terminal)) {
            if (commandIndex >= commands.length) {
                commandIndex = 0;
            }

            const item = commands[commandIndex];

            if (item.type === "clear") {
                terminal.innerHTML = "";
                commandIndex += 1;
                continue;
            }

            if (item.type === "pause") {
                await new Promise((resolve) => window.setTimeout(resolve, item.length));
                commandIndex += 1;
                continue;
            }

            const row = document.createElement("div");
            row.className = "terminal-row";

            if (item.type === "input") {
                row.innerHTML = '<span style="color: var(--sts-accent); margin-right: 0.45rem;">&gt;</span><span></span><span class="terminal-cursor"></span>';
                terminal.appendChild(row);

                const textNode = row.querySelector("span:nth-child(2)");
                const cursor = row.querySelector(".terminal-cursor");

                if (prefersReducedMotion) {
                    textNode.textContent = item.text;
                } else {
                    for (const character of item.text) {
                        textNode.textContent += character;
                        await new Promise((resolve) => window.setTimeout(resolve, 28));
                    }
                }

                if (cursor) {
                    cursor.remove();
                }
            } else {
                if (item.tone) {
                    row.classList.add(`terminal-row--${item.tone}`);
                }
                row.textContent = item.text;
                terminal.appendChild(row);
            }

            terminal.scrollTop = terminal.scrollHeight;
            commandIndex += 1;
            await new Promise((resolve) => window.setTimeout(resolve, prefersReducedMotion ? 50 : 420));
        }
    }

    terminal.innerHTML = "";
    void typeWriter();
})();

