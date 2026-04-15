export function initTerminal() {
    const terminal = document.getElementById('hero-terminal');
    if (!terminal) return;

    const commands = [
        { type: 'input', text: 'sts --init --target \"digital_ecosystem\"' },
        { type: 'log', text: '[SCAN] Analysiere gewachsene Strukturen...', color: 'text-gray-500' },
        { type: 'log', text: '[WARN] Unklare Zuständigkeiten in /ROOT/ACCESS_LOGS gefunden.', color: 'text-amber-500' },
        { type: 'log', text: '[ERR] Kritische Abhängigkeit von Einzelperson: "Admin_Head"', color: 'text-red-500' },
        { type: 'pause', length: 1000 },
        { type: 'input', text: 'sts --restructure --mode \"sauber\"' },
        { type: 'log', text: '-> Ordne Dateien und Ablagen...', color: 'text-cyan-500' },
        { type: 'log', text: '-> Bereinige operative Zugriffslogik...', color: 'text-cyan-500' },
        { type: 'log', text: '-> Sichere Übergabeprozesse ab...', color: 'text-cyan-500' },
        { type: 'log', text: '[DONE] Systemstatus: BELASTBAR & NACHVOLLZIEHBAR', color: 'text-emerald-500' },
        { type: 'pause', length: 3000 },
        { type: 'clear' }
    ];

    let cmdIndex = 0;

    async function typeWriter() {
        if (cmdIndex >= commands.length) {
            cmdIndex = 0;
            setTimeout(typeWriter, 500);
            return;
        }

        const cmd = commands[cmdIndex];

        if (cmd.type === 'clear') {
            terminal.innerHTML = '';
            cmdIndex++;
            typeWriter();
            return;
        }

        if (cmd.type === 'pause') {
            await new Promise(r => setTimeout(r, cmd.length));
            cmdIndex++;
            typeWriter();
            return;
        }

        const line = document.createElement('div');
        line.className = 'mb-1 flex items-start';
        
        if (cmd.type === 'input') {
            line.innerHTML = `<span class="text-cyan-500 mr-2">></span><span class="text-white"></span><span class="terminal-cursor"></span>`;
            terminal.appendChild(line);
            const textSpan = line.querySelector('.text-white');
            for (let i = 0; i < cmd.text.length; i++) {
                textSpan.textContent += cmd.text[i];
                await new Promise(r => setTimeout(r, 30));
            }
            line.querySelector('.terminal-cursor').remove();
        } else {
            line.className = `mb-1 ${cmd.color || 'text-gray-400'}`;
            line.textContent = cmd.text;
            terminal.appendChild(line);
        }

        terminal.scrollTop = terminal.scrollHeight;
        cmdIndex++;
        setTimeout(typeWriter, 500);
    }

    typeWriter();
}
