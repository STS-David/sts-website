const BOOKING_URL = 'https://outlook.office.com/bookwithme/user/e350f7fd08f34efeba9088672e26bbe6@SimonicTechSolutions.onmicrosoft.com/meetingtype/tH17irHtLkCkYUdYjc98Fw2?anonymous&ismsaljsauthenabled&ep=mlink';

window.openBooking = function () {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
};

function renderContent(route) {
    const routes = {
        'home': renderHome,
        'solutions': renderSolutions,
        'industries': renderIndustries,
        'about': renderAbout,
        'pricing': renderPricing,
        'contact': renderContact,
        'faq': renderFaq,
        'legal-imprint': renderImprint,
        'legal-privacy': renderPrivacy,
        'legal-cookies': renderCookies,
        'legal-agb': renderAgb
    };

    const renderRoute = routes[route] || routes['home'];
    return `<div class="page-enter">${renderRoute()}</div>`;
}

function renderHome() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-40">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
                <div class="reveal">
                    <span class="section-label">Simonic Tech Solutions</span>
                    <h1 class="hero-title text-white mb-8 leading-tight">Wenn alles an einer Person hängt, fehlt kein Tool. <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Es fehlt Struktur.</span></h1>
                    <p class="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">Digitale Zustände wirken oft vorhanden. Kritisch wird es dort, wo intern Klarheit, Zuständigkeit und Kontrolle fehlen.</p>
                </div>

                <div class="relative reveal">
                    <div class="liquid-glass rounded-2xl border border-white/20 overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
                        <div class="bg-black/80 backdrop-blur-md p-1 border-b border-white/10 flex items-center gap-2 px-4 h-10">
                            <div class="flex gap-1.5">
                                <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                            </div>
                            <div class="flex-grow text-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">STS_SYSTEM_INIT</div>
                        </div>
                        <div id="hero-terminal" class="h-64 bg-black/90 p-6 font-mono text-[11px] leading-relaxed overflow-y-auto scrollbar-hide"></div>
                        <div class="terminal-scanline"></div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
                ${renderNavCard('Typische Probleme', 'Wo digital etwas nicht sauber läuft', 'alert-circle', 'home', '#problem')}
                ${renderNavCard('So arbeiten wir', 'Wie STS strukturiert vorgeht', 'terminal', 'home', '#work')}
                ${renderNavCard('Für wen das relevant ist', 'Wo STS sinnvoll passt', 'users', 'industries')}
                ${renderNavCard('Leistungen im Überblick', 'Was wir konkret übernehmen', 'layers', 'solutions')}
            </div>
        </section>

        <section id="problem" class="max-w-7xl mx-auto px-6 mb-40">
            <div class="reveal mb-16">
                <span class="section-label">Das Problem</span>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Digital wirkt nach außen oft vorhanden. Intern fehlt trotzdem Klarheit.</h2>
                <p class="text-gray-400 text-lg max-w-3xl leading-relaxed">
                    Die meisten Unternehmen haben längst Website, Cloud, Freigaben, gemeinsame Ablagen und laufende digitale Prozesse. Kritisch wird es dort, wo Zuständigkeiten gewachsen sind, Zugriffe niemand vollständig überblickt und Änderungen mehr Unsicherheit als Ordnung erzeugen.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${renderProblemCard('01', 'Unklare Zuständigkeiten', 'Zugriffe, Freigaben und Abläufe sind über die Zeit gewachsen. Im Alltag funktioniert es irgendwie, aber niemand hat den vollständigen Überblick.')}
                ${renderProblemCard('02', 'Abhängigkeit von Einzelpersonen', 'Sobald jemand ausfällt, wechselt oder vertreten werden muss, wird sichtbar, wie viel Wissen nicht im System, sondern nur in Köpfen liegt.')}
                ${renderProblemCard('03', 'Gewachsene Zugriffe', 'Rechte wurden ergänzt, weitergegeben oder nie sauber bereinigt. Wer worauf Zugriff hat, lässt sich intern oft nicht klar erklären.')}
                ${renderProblemCard('04', 'Unsichere Übergaben', 'Neue Mitarbeiter, Vertretungen oder externe Partner treffen auf Strukturen, die nicht sauber dokumentiert oder nachvollziehbar aufgebaut sind.')}
                ${renderProblemCard('05', 'Brüche im Tagesgeschäft', 'Änderungen an Abläufen, Tools oder Zuständigkeiten führen nicht zu mehr Ordnung, sondern zu Rückfragen, Reibung und manuellen Umwegen.')}
                ${renderProblemCard('06', 'Sichtbar digital, intern fragil', 'Nach außen wirkt vieles vorhanden. Im Inneren fehlt jedoch oft die belastbare Grundlage, damit Prozesse auch unter Veränderung stabil bleiben.')}
            </div>
        </section>

        <section id="work" class="max-w-7xl mx-auto px-6 mb-40">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div class="reveal">
                    <span class="section-label">So arbeitet STS</span>
                    <h2 class="text-4xl font-bold text-white mb-8">Nicht mit allgemeiner IT-Betreuung. Sondern mit klarer technischer Systemumsetzung.</h2>
                    <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                        Ausgangspunkt ist immer ein konkretes digitales Problem. STS macht sichtbar, was nicht sauber funktioniert, ordnet den Zustand dahinter ein und bringt digitale Strukturen wieder in eine Form, die im Alltag nachvollziehbar und belastbar funktioniert.
                    </p>
                    <div class="p-6 bg-cyan-500/5 border-l-2 border-cyan-500 rounded-r-xl">
                        <p class="text-gray-300 text-sm italic leading-relaxed">
                            STS verkauft keine Software und übernimmt keine klassische IT-Betreuung. Entscheidend ist, dass digitale Strukturen, Zugriffe und Verantwortlichkeiten wieder sauber funktionieren.
                        </p>
                    </div>
                </div>
                <div class="space-y-6">
                    ${renderPhase('Phase 01', 'Problem sichtbar machen', 'Am Anfang steht kein abstraktes Modell, sondern ein konkreter Zustand, der Reibung, Unklarheit oder Abhängigkeit erzeugt.')}
                    ${renderPhase('Phase 02', 'Zustand dahinter verstehen', 'Danach wird sichtbar gemacht, welche Struktur, welche Zuständigkeiten und welche Zugriffslogik den aktuellen Zustand tatsächlich tragen.')}
                    ${renderPhase('Phase 03', 'Struktur sauber ordnen', 'Digitale Zuständigkeiten, Ablagen, Zugriffe und Arbeitslogiken werden in eine Form gebracht, die verständlich, begrenzbar und technisch sauber ist.')}
                    ${renderPhase('Phase 04', 'Belastbaren Betrieb herstellen', 'Am Ende steht kein loses Sammelsurium an Änderungen, sondern eine Umgebung, die bei Übergaben, Veränderungen und im Tagesgeschäft deutlich besser funktioniert.')}
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 mb-40 bg-white/[0.01] py-24 rounded-[3rem] border border-white/5 reveal">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span class="section-label">Für wen</span>
                    <h2 class="text-4xl font-bold text-white mb-8">Dort, wo digitale Struktur keine Option ist, sondern Pflicht.</h2>
                    <p class="text-gray-400 mb-6 text-lg">STS ist dort relevant, wo Zuständigkeiten, Zugriffe, Übergaben und operative Stabilität nicht vom Zufall oder von Einzelpersonen abhängen dürfen.</p>
                    <p class="text-gray-400 text-lg">Typisch sind Umgebungen mit gewachsener Struktur, sensiblen Abläufen und spürbarem Schaden, sobald im Alltag Unklarheit entsteht.</p>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    ${['Rechtsanwaltskanzleien', 'Steuerberatungen', 'Notariate', 'Arztpraxen & medizinische Einrichtungen', 'Verantwortungsnahe KMUs'].map(item => `
                        <div class="flex items-center gap-4 p-5 liquid-glass rounded-2xl border border-white/10 group">
                            <div class="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_10px_#06b6d4] transition-all"></div>
                            <span class="text-white font-medium">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 mb-40">
            <div class="reveal mb-16">
                <span class="section-label">Das Ergebnis</span>
                <h2 class="text-4xl font-bold text-white mb-6">Ein digitaler Zustand, der nicht nur vorhanden ist, sondern sauber funktioniert.</h2>
                <p class="text-gray-400 text-lg max-w-3xl leading-relaxed">
                    Am Ende geht es nicht um mehr Tools oder mehr Komplexität. Es geht um eine digitale Umgebung, die nachvollziehbar aufgebaut ist, bei Änderungen nicht auseinanderfällt und im Alltag deutlich besser funktioniert.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${renderResultBlock('Klare Zuständigkeiten', 'Es ist nachvollziehbar, wer wofür zuständig ist, wo Verantwortung liegt und wie digitale Abläufe im Unternehmen tatsächlich organisiert sind.')}
                ${renderResultBlock('Weniger Abhängigkeit von Einzelpersonen', 'Wissen, Struktur und digitale Ordnung hängen nicht mehr ausschließlich an einzelnen Personen, sondern sind deutlich robuster im laufenden Betrieb.')}
                ${renderResultBlock('Saubere Zugriffe', 'Zuständigkeiten, Zugänge und operative Abläufe müssen nicht erst zusammengesucht werden. Der Zustand ist verständlich und greifbar.')}
                ${renderResultBlock('Stabilität bei Übergaben und Änderungen', 'Neue Mitarbeiter, Vertretungen, externe Partner oder Systemänderungen führen nicht automatisch zu Unsicherheit, sondern zu einem Zustand, der besser mitgeht.')}
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 mb-40 text-center">
            <div class="reveal max-w-3xl mx-auto mb-16">
                <span class="section-label justify-center">Vertrauen</span>
                <h2 class="text-4xl font-bold text-white mb-6">Vertrauen entsteht dort, wo Struktur, Verantwortung und Umsetzung zusammenpassen.</h2>
                <p class="text-gray-400 text-lg leading-relaxed">
                    Gerade dort, wo digitale Zustände sensibel, gewachsen oder verantwortungskritisch sind, reicht gute Absicht nicht aus. Entscheidend ist, dass sauber gearbeitet, klar abgegrenzt und technisch nachvollziehbar umgesetzt wird.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                ${renderPrinciple('Klare Abgrenzung statt allgemeiner IT-Versprechen.')}
                ${renderPrinciple('Dokumentierte Standards statt improvisierter Einzelentscheidungen.')}
                ${renderPrinciple('Fokus auf Eigentümerschaft, Zuständigkeit und Kontrolle.')}
                ${renderPrinciple('Technische Umsetzung mit Struktur, nicht bloß lose Empfehlungen.')}
                ${renderPrinciple('Arbeit in regulierten oder verantwortungsnahen Umfeldern.')}
            </div>
        </section>

        <section class="max-w-4xl mx-auto px-6 mb-40 reveal">
            <div class="text-center mb-16">
                <span class="section-label justify-center">Häufige Fragen</span>
                <h2 class="text-4xl font-bold text-white mb-4">Die wichtigsten Antworten</h2>
            </div>
            <div class="shell-container">
                <div class="faq-list">
                    ${renderFAQItem('Was genau macht STS?', 'STS bringt digitale Umgebungen in einen Zustand, in dem Zuständigkeiten, Zugriffe, Übergaben und operative Abläufe wieder klar und belastbar sind. Der Einstieg erfolgt über ein konkretes Problem, die Arbeit darunter ist strukturierte Umsetzung, nicht bloße Beratung.')}
                    ${renderFAQItem('Ist das IT-Support oder ersetzt STS unseren IT-Dienstleister?', 'Nein. STS ist keine klassische IT-Betreuung und ersetzt keinen laufenden Support. STS arbeitet dort, wo digitale Zustände strukturell unklar geworden sind und wieder in eine saubere Form gebracht werden müssen.')}
                </div>
                <div class="p-6 text-center border-t border-white/5">
                    <button onclick="navigateTo('faq')" class="text-cyan-400 text-sm hover:underline">Alle Fragen anzeigen</button>
                </div>
            </div>
        </section>

        <section class="max-w-4xl mx-auto px-6 mb-40 text-center reveal">
            <div class="liquid-glass p-16 rounded-[3rem] border border-cyan-500/20">
                <h2 class="text-4xl font-bold text-white mb-4">Bereit für mehr Klarheit im digitalen Betrieb?</h2>
                <p class="text-gray-400 mb-10">Im strukturierten Erstgespräch klären wir, ob konkreter Handlungsbedarf besteht und wo ein sinnvoller Startpunkt liegt.</p>
                <button onclick="openBooking()" class="primary-cta px-12 py-6 rounded-2xl font-bold text-lg">
                    Erstgespräch buchen
                </button>
            </div>
        </section>
    `;
}

function renderNavCard(title, subtitle, icon, link, hash = '') {
    return `
        <div onclick="navigateTo('${link}'); if('${hash}') setTimeout(() => { const el = document.querySelector('${hash}'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100)" class="p-8 liquid-glass rounded-2xl border border-white/10 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all cursor-pointer group relative overflow-hidden h-full flex flex-col justify-between">
            <div>
                <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="${icon}" class="w-5 h-5 text-cyan-400"></i>
                </div>
                <h4 class="text-white font-bold text-sm mb-2 uppercase tracking-wider">${title}</h4>
                <p class="text-gray-500 text-xs leading-relaxed">${subtitle}</p>
            </div>
        </div>
    `;
}

function renderProblemCard(num, title, text) {
    return `
        <div class="p-8 liquid-glass rounded-3xl border border-white/5 reveal h-full">
            <span class="text-cyan-500 font-mono text-[10px] mb-4 block opacity-50 tracking-[0.3em]">ISSUE_${num}</span>
            <h3 class="text-white font-bold text-xl mb-3">${title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${text}</p>
        </div>
    `;
}

function renderResultBlock(title, text) {
    return `
        <div class="p-8 bg-white/[0.02] border border-white/5 rounded-3xl reveal">
            <h3 class="text-white font-bold text-xl mb-3">${title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${text}</p>
        </div>
    `;
}

function renderPhase(num, title, text) {
    return `
        <div class="p-6 bg-white/[0.02] border border-white/5 rounded-2xl reveal group hover:bg-white/[0.04] transition-all">
            <div class="flex gap-6">
                <span class="text-cyan-500 font-mono text-sm font-bold shrink-0 uppercase tracking-tighter mt-1">${num}</span>
                <div>
                    <h4 class="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">${title}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">${text}</p>
                </div>
            </div>
        </div>
    `;
}

function renderPrinciple(text) {
    return `
        <div class="p-4 liquid-glass rounded-xl border border-white/5 reveal flex items-center justify-center text-center">
            <p class="text-gray-400 text-[11px] font-medium leading-tight">${text}</p>
        </div>
    `;
}

function renderFAQItem(q, a) {
    return `
        <div class="faq-shell-item">
            <button class="faq-shell-header">
                <span class="font-mono text-xs md:text-sm leading-tight uppercase tracking-tighter">> ${q}</span>
                <i data-lucide="chevron-down" class="faq-chevron w-4 h-4 shrink-0"></i>
            </button>
            <div class="faq-shell-content">
                <div class="px-8 pb-6 text-gray-400 text-sm leading-relaxed">
                    ${a}
                </div>
            </div>
        </div>
    `;
}

function renderSolutions() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <span class="section-label">Lösungen</span>
            <h1 class="hero-title text-white mb-8">Lösungen für digitale Zustände, die intern nicht mehr sauber funktionieren.</h1>
            <p class="text-xl text-gray-400 mb-20 max-w-4xl leading-relaxed">STS arbeitet dort, wo digitale Umgebungen vorhanden sind, aber im Alltag Reibung, Unklarheit, Abhängigkeit oder Kontrollverlust erzeugen. Die Leistungen sind nicht nach Tools, sondern nach dem tatsächlich zu behebenden Zustand geordnet.</p>

            <div class="reveal mb-12">
                <h2 class="text-3xl font-bold text-white mb-6">Wenn das Problem sichtbar ist, die Ursache dahinter aber tiefer liegt.</h2>
                <p class="text-gray-400 max-w-3xl mb-12">Viele Probleme wirken auf den ersten Blick klein oder operativ. In der Praxis zeigen sie jedoch, dass Zuständigkeiten, Zugriffe, Abläufe oder Eigentümerschaft digital nicht sauber organisiert sind.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 solution-grid">
                ${renderSolutionCard('Lösung 1 – Struktur und Zuständigkeiten ordnen', 'Wenn Dateien, Ablagen, Verantwortlichkeiten oder Routinen über die Zeit gewachsen sind, sorgt STS für eine Form, die nachvollziehbar, begrenzbar und im Alltag verständlich bleibt.')}
                ${renderSolutionCard('Lösung 2 – Zugriffe und Rollen bereinigen', 'Wenn nicht mehr klar ist, wer worauf Zugriff hat, wie Freigaben gewachsen sind oder welche Rechte intern eigentlich gelten, bringt STS die operative Zugriffslogik wieder in Ordnung.')}
                ${renderSolutionCard('Lösung 3 – Übergaben und Veränderungen absichern', 'Wenn Ausfälle, Vertretungen, neue Mitarbeiter oder Änderungen im System regelmäßig Unsicherheit erzeugen, arbeitet STS an einem Zustand, der Übergaben und Veränderungen robuster macht.')}
                ${renderSolutionCard('Lösung 4 – Bestehende digitale Umgebungen stabilisieren', 'STS arbeitet mit bestehenden Systemen, statt alles neu zu ersetzen. Microsoft 365, Google Workspace, Websites, gemeinsame Ablagen und gewachsene Prozesse werden in eine stabilere Form gebracht.')}
                ${renderSolutionCard('Lösung 5 – Sichtbare Probleme in strukturelle Umsetzung überführen', 'Ob Website, Zugriffslage, Ablagestruktur oder operative Reibung: STS nutzt das sichtbare Problem als Einstieg und baut darunter die Struktur, die langfristig gefehlt hat.')}
            </div>

            <div class="bg-red-500/5 border border-red-500/20 p-12 rounded-[2rem] mb-32 reveal">
                <h2 class="text-2xl font-bold text-white mb-6">Was STS nicht übernimmt</h2>
                <p class="text-gray-400">STS übernimmt keine klassische IT-Betreuung, verkauft keine Software, betreibt keine Hotline und ersetzt keine laufende Infrastruktur-Administration. Entscheidend ist immer die strukturierte technische Umsetzung eines gewachsenen Problems.</p>
            </div>

            <div class="reveal mb-12 text-center">
                <h2 class="text-3xl font-bold text-white mb-16">Typische Ergebnisse</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    ${['klare Zuständigkeiten', 'saubere Zugriffe', 'bessere Übergaben', 'weniger Abhängigkeit von Einzelpersonen', 'nachvollziehbarere digitale Abläufe', 'mehr operative Stabilität bei Veränderungen'].map(res => `<div class="p-6 liquid-glass rounded-xl border border-white/5 text-cyan-400 font-medium">${res}</div>`).join('')}
                </div>
            </div>

            <div class="max-w-4xl mx-auto mt-40 text-center reveal">
                <h2 class="text-3xl font-bold text-white mb-6">Passt einer dieser Zustände zu Ihrer aktuellen Situation?</h2>
                <p class="text-gray-400 mb-10">Im strukturierten Erstgespräch klären wir, ob das Problem operativ bleibt oder bereits strukturell geworden ist.</p>
                <button onclick="openBooking()" class="primary-cta px-12 py-6 rounded-2xl font-bold">Erstgespräch buchen</button>
            </div>
        </section>
    `;
}

function renderSolutionCard(title, text) {
    return `
        <div class="liquid-glass p-10 rounded-[2rem] reveal border border-white/5">
            <h3 class="text-white font-bold text-xl mb-4">${title}</h3>
            <p class="text-gray-500 leading-relaxed text-sm">${text}</p>
        </div>
    `;
}

function renderIndustries() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <span class="section-label">Branchen</span>
            <h1 class="hero-title text-white mb-8">Branchen, in denen digitale Struktur nicht dem Zufall überlassen werden kann.</h1>
            <p class="text-xl text-gray-400 mb-20 max-w-4xl leading-relaxed">STS ist besonders dort relevant, wo sensible Abläufe, Verantwortung, Mandats- oder Patientenumfelder und gewachsene digitale Zustände nicht von einzelnen Personen oder unsauberen Übergaben abhängen dürfen.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                ${renderIndustryCard('Rechtsanwaltskanzleien', 'In Kanzleien wird operative Klarheit besonders dann relevant, wenn Übergaben, Vertretungen, Zuständigkeiten oder externe Zugriffe nicht sauber nachvollziehbar sind. STS bringt digitale Strukturen, Ablagen und Zugriffslogiken wieder in eine belastbare Form.')}
                ${renderIndustryCard('Steuerberatungen', 'Wo laufende Mandatsarbeit, Fristen, Mitarbeiterwechsel und sensible Daten auf gewachsene digitale Systeme treffen, wird operative Struktur zur Voraussetzung. STS hilft dort, wo digitale Ordnung, Eigentümerschaft und Zugriffslogik unscharf geworden sind.')}
                ${renderIndustryCard('Notariate', 'In Notariaten sind kontrollierte digitale Abläufe, klare Zuständigkeiten und nachvollziehbare Übergaben kein Komfort, sondern Grundvoraussetzung. STS arbeitet an der technischen Seite dieses Zustands.')}
                ${renderIndustryCard('Arztpraxen & medizinische Einrichtungen', 'Wenn sensible Abläufe, Mitarbeiterwechsel, Rollenverteilung und digitale Prozesse im Praxisalltag auf gewachsene Umgebungen treffen, braucht es Strukturen, die auch unter Belastung verständlich bleiben.')}
                ${renderIndustryCard('Verantwortungsnahe KMUs', 'Auch außerhalb streng regulierter Berufe gibt es Unternehmen, in denen digitale Zustände bei Ausfall, Vertretung oder Wachstum zu fragil werden. STS ist dort relevant, wo Verantwortung, Zugriff und operative Stabilität digital nicht sauber organisiert sind.')}
            </div>

            <div class="max-w-3xl mx-auto text-center reveal">
                <h2 class="text-3xl font-bold text-white mb-6">Was alle diese Umfelder gemeinsam haben</h2>
                <p class="text-gray-400 mb-16">Nicht die Branche allein ist entscheidend, sondern die Kombination aus Verantwortung, gewachsener Struktur, sensiblen Abläufen und dem Bedarf nach einem Zustand, der im Alltag und unter Veränderung funktioniert.</p>

                <div class="liquid-glass p-16 rounded-[3rem] border border-cyan-500/20">
                    <h2 class="text-2xl font-bold text-white mb-6">Ist Ihre Branche nicht explizit genannt?</h2>
                    <p class="text-gray-400 mb-10 text-sm">Wenn digitale Zuständigkeiten, Zugriffe, Übergaben oder Arbeitsabläufe in Ihrer Umgebung gewachsen und unscharf geworden sind, ist das Thema trotzdem relevant.</p>
                    <button onclick="openBooking()" class="primary-cta px-10 py-5 rounded-xl font-bold uppercase tracking-widest">Erstgespräch buchen</button>
                </div>
            </div>
        </section>
    `;
}

function renderIndustryCard(title, text) {
    return `
        <div class="p-8 bg-white/[0.02] border border-white/5 rounded-3xl reveal">
            <h3 class="text-white font-bold text-xl mb-4">${title}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">${text}</p>
        </div>
    `;
}

function renderPricing() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <span class="section-label">Preise</span>
            <h1 class="hero-title text-white mb-8">Preise für strukturierte digitale Systemumsetzung.</h1>
            <p class="text-xl text-gray-400 mb-20 max-w-3xl">STS verkauft keine Stundenkontingente, keine allgemeine IT-Betreuung und keine beliebige Tool-Arbeit. Preislogik folgt dem Ausgangszustand: Einstieg, Umsetzung und laufende Stabilisierung.</p>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                ${renderPriceCard('1. Einstieg', 'ab 500 € bis 1.500 €', 'Für konkrete sichtbare Probleme, erste Einordnung und klaren Startpunkt.', 'Strukturierte Einordnung des Problems, Sichtbarmachung der Lage, erste priorisierte Maßnahmen, Klarheit über den weiteren Weg.')}
                ${renderPriceCard('2. Umsetzung', 'ab 2.500 € bis 5.000 €+', 'Für Zustände, die nicht nur operativ stören, sondern strukturell geordnet werden müssen.', 'Struktur, Zuständigkeiten, Rollen, Zugriffe, Abläufe, Übergaben und digitale Ordnung werden in eine belastbare Form gebracht.', true)}
                ${renderPriceCard('3. Laufende Stabilisierung', 'ab 150 € bis 500 € / mtl.', 'Für Umgebungen, die nach der Umsetzung nicht wieder in alte Unklarheit zurückfallen sollen.', 'Gezielte Nachsteuerung, kleine strukturelle Anpassungen, laufende Kontrolle und Stabilisierung des Zustands.')}
            </div>

            <div class="reveal mb-32">
                <h2 class="text-3xl font-bold text-white mb-8 text-center">Was Preis bei STS nicht bedeutet</h2>
                <p class="text-gray-400 text-center max-w-3xl mx-auto mb-20">Preis richtet sich nicht nach hübschen Folien, langen Workshops oder allgemeiner Beratung. Entscheidend ist, ob ein Zustand sichtbar gemacht, geordnet und belastbar hergestellt wird.</p>

                <div class="shell-container max-w-4xl mx-auto">
                    ${renderFAQItem('Warum gibt es Preisrahmen und keine langen Tabellen?', 'Weil STS nicht austauschbare Pakete verkauft, sondern Zustände sauber einordnet und entsprechend bearbeitet. Der Preis muss zur realen Lage passen, nicht zu einer künstlichen Paketlogik.')}
                    ${renderFAQItem('Ersetzt STS damit unsere IT?', 'Nein. STS arbeitet unterhalb des laufenden IT-Betriebs an Struktur, Klarheit und digitaler Belastbarkeit.')}
                </div>
            </div>

            <div class="max-w-4xl mx-auto text-center reveal">
                <h2 class="text-3xl font-bold text-white mb-6">Sinnvoll ist nicht der größte Umfang, sondern der richtige Start.</h2>
                <p class="text-gray-400 mb-10">Im Erstgespräch klären wir, ob ein kleiner sauberer Einstieg reicht oder bereits struktureller Handlungsbedarf besteht.</p>
                <button onclick="openBooking()" class="primary-cta px-12 py-6 rounded-2xl font-bold text-lg">Erstgespräch buchen</button>
            </div>
        </section>
    `;
}

function renderPriceCard(title, price, desc, scope, featured = false) {
    return `
        <div class="liquid-glass p-10 rounded-3xl flex flex-col reveal ${featured ? 'border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]' : 'border-white/5'}">
            <h3 class="text-white font-mono text-sm mb-2 uppercase tracking-widest">${title}</h3>
            <p class="text-gray-400 text-xs mb-8">${desc}</p>
            <div class="text-3xl font-bold text-cyan-400 mb-8 font-mono">${price}</div>
            <div class="space-y-4 mb-12 flex-grow border-t border-white/5 pt-8">
                <p class="text-gray-400 text-xs leading-relaxed"><span class="text-cyan-500 font-mono mr-2">LOG:</span>${scope}</p>
            </div>
            <button onclick="openBooking()" class="${featured ? 'primary-cta' : 'bg-white/5 border border-white/10 hover:bg-white/10'} w-full py-4 rounded-xl font-bold transition-all">Erstgespräch buchen</button>
        </div>
    `;
}

function renderAbout() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <span class="section-label">Über uns</span>
            <h1 class="hero-title text-white mb-8">STS arbeitet dort, wo digitale Systeme vorhanden sind, aber intern nicht mehr sauber funktionieren.</h1>
            <p class="text-xl text-gray-400 mb-20 max-w-4xl">Simonic Tech Solutions ist keine klassische IT-Betreuung, kein Softwareanbieter und keine allgemeine Beratung. STS ist die technische Umsetzungsebene dort, wo digitale Zustände gewachsen, unklar oder operativ fragil geworden sind.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                <div class="reveal">
                    <h2 class="text-2xl font-bold text-white mb-8">Was STS ist</h2>
                    <div class="space-y-4">
                        ${['STS ist die Ausführungsebene für Struktur, Klarheit und digitale Belastbarkeit.', 'STS arbeitet an Zuständigkeiten, Zugriffslogiken, Ablagestrukturen, Übergaben und nachvollziehbaren Abläufen.', 'STS verbindet sichtbare Probleme mit der technischen Arbeit darunter, die einen stabilen Zustand herstellt.'].map(txt => `<div class="p-5 bg-cyan-500/[0.06] border border-cyan-400/15 rounded-xl text-cyan-50/88 text-sm shadow-[0_20px_40px_-30px_rgba(6,182,212,0.45)]">${txt}</div>`).join('')}
                    </div>
                </div>
                <div class="reveal">
                    <h2 class="text-2xl font-bold text-white mb-8">Was STS nicht ist</h2>
                    <div class="space-y-4">
                        ${['keine allgemeine IT-Betreuung', 'kein SaaS-Anbieter', 'kein Software-Reseller', 'keine Rechts- oder Datenschutzberatung', 'keine lose Strategieberatung ohne Umsetzung'].map(txt => `<div class="p-5 border border-red-500/10 bg-red-500/[0.02] rounded-xl text-gray-500 text-sm uppercase tracking-tighter">${txt}</div>`).join('')}
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 reveal">
                <div>
                    <h2 class="text-2xl font-bold text-white mb-6">Warum es STS gibt</h2>
                    <p class="text-gray-400 leading-relaxed mb-8">Viele Unternehmen haben längst digitale Systeme, Websites, Cloud-Umgebungen und gemeinsame Ablagen. Das eigentliche Problem ist oft nicht das Fehlen von Digitalisierung, sondern deren unsaubere Ausführung. Genau dort setzt STS an.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-white mb-6">Arbeitsweise</h2>
                    <p class="text-gray-400 leading-relaxed">STS steigt über ein sichtbares Problem ein, klärt den Zustand dahinter und setzt die nötige technische Ordnung um. Das Ziel ist nie theoretische Eleganz, sondern ein Zustand, der im Alltag und bei Veränderung tatsächlich besser funktioniert.</p>
                </div>
            </div>

            <div class="liquid-glass p-12 rounded-[2rem] border border-white/10 reveal mb-32">
                <h2 class="text-2xl font-bold text-white mb-6">Über den Gründer</h2>
                <p class="text-gray-400 leading-relaxed">David Simonič Galun baut STS als spezialisierte technische Umsetzungsstruktur auf. Der Fokus liegt nicht auf großen Behauptungen, sondern auf sauberer Ausführung, klarer Abgrenzung und einem Arbeitsstil, der Verantwortung, Eigentümerschaft und digitale Belastbarkeit ernst nimmt.</p>
            </div>

            <div class="max-w-4xl mx-auto text-center reveal">
                <h2 class="text-3xl font-bold text-white mb-6">Wenn Struktur, Zugriff und Verantwortung unklar geworden sind, ist das kein Randthema.</h2>
                <p class="text-gray-400 mb-10">Dann braucht es keine weitere Tool-Diskussion, sondern einen sauberen technischen Startpunkt.</p>
                <button onclick="openBooking()" class="primary-cta px-10 py-5 rounded-xl font-bold uppercase tracking-widest">Erstgespräch buchen</button>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="max-w-7xl mx-auto px-6 mb-32">
            <span class="section-label">Kontakt</span>
            <h1 class="hero-title text-white mb-8">Kontakt für ein strukturiertes Erstgespräch.</h1>
            <p class="text-xl text-gray-400 mb-20 max-w-4xl">Wenn digitale Zustände intern unklar geworden sind, klären wir im ersten Schritt, ob tatsächlich Handlungsbedarf besteht und welcher Startpunkt sinnvoll ist.</p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div class="reveal">
                    <h2 class="text-2xl font-bold text-white mb-6">Erstgespräch</h2>
                    <p class="text-gray-400 mb-10 leading-relaxed">Das Erstgespräch dient nicht dazu, möglichst viel zu verkaufen, sondern den Ausgangszustand sauber einzuordnen. Wenn das Thema operativ bleibt, bleibt auch der Einstieg klein. Wenn es strukturell ist, wird das klar benannt.</p>
                    <button onclick="openBooking()" class="primary-cta px-10 py-5 rounded-xl font-bold uppercase tracking-widest mb-16">Erstgespräch buchen</button>

                    <h2 class="text-2xl font-bold text-white mb-6">Was nach der Anfrage passiert</h2>
                    <div class="space-y-6">
                        ${['Kurze Sichtung des Anliegens', 'Einordnung, ob ein strukturiertes Erstgespräch sinnvoll ist', 'Rückmeldung mit nächstem Schritt'].map((step, i) => `
                            <div class="flex gap-4 items-center">
                                <span class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-mono text-xs">${i + 1}</span>
                                <span class="text-gray-400">${step}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="liquid-glass p-10 rounded-3xl border border-white/10 reveal">
                    <h2 class="text-2xl font-bold text-white mb-8">Anfrage senden</h2>
                    <form class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" class="contact-input">
                            <input type="text" placeholder="Unternehmen" class="contact-input">
                        </div>
                        <input type="email" placeholder="E-Mail" class="contact-input">
                        <input type="text" placeholder="Telefon (optional)" class="contact-input">
                        <textarea placeholder="Worum geht es aktuell?" rows="3" class="contact-input"></textarea>
                        <textarea placeholder="Welche Systeme oder Abläufe sind betroffen?" rows="3" class="contact-input"></textarea>
                        <textarea placeholder="Was soll sich nach der Zusammenarbeit verbessert haben?" rows="3" class="contact-input"></textarea>
                        <button type="button" class="primary-cta w-full py-5 rounded-xl font-bold uppercase tracking-widest mt-4">Anfrage senden</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

function renderFaq() {
    const faqs = [
        { q: 'Was genau macht STS?', a: 'STS bringt digitale Umgebungen in einen Zustand, in dem Zuständigkeiten, Zugriffe, Übergaben und operative Abläufe wieder klar und belastbar sind. Der Einstieg erfolgt über ein konkretes Problem, die Arbeit darunter ist strukturierte Umsetzung, nicht bloße Beratung.' },
        { q: 'Ist das IT-Support oder ersetzt STS unseren IT-Dienstleister?', a: 'Nein. STS ist keine klassische IT-Betreuung und ersetzt keinen laufenden Support. STS arbeitet dort, wo digitale Zustände strukturell unklar geworden sind und wieder in eine saubere Form gebracht werden müssen.' },
        { q: 'Für wen ist STS relevant?', a: 'Relevant ist STS überall dort, wo Verantwortung, sensible Abläufe, Übergaben und digitale Ordnung nicht vom Zufall oder von Einzelpersonen abhängen dürfen.' },
        { q: 'Woran merkt man, dass das Problem nicht nur operativ, sondern strukturell ist?', a: 'Ein strukturelles Thema zeigt sich dann, wenn Unklarheiten immer wieder auftauchen: bei Vertretungen, neuen Mitarbeitern, Zugriffsfragen, Übergaben, Änderungen oder externen Anfragen.' },
        { q: 'Wie beginnt die Zusammenarbeit?', a: 'Der Einstieg erfolgt über ein strukturiertes Erstgespräch. Dort wird geklärt, ob tatsächlicher Handlungsbedarf besteht und welcher Startpunkt sinnvoll ist.' },
        { q: 'Ist STS auch relevant, wenn aktuell noch nichts akut eskaliert ist?', a: 'Ja. Gerade bevor etwas sichtbar eskaliert, ist der beste Zeitpunkt, um gewachsene Zustände sauber einzuordnen und belastbar aufzubauen.' },
        { q: 'Arbeitet STS mit bestehenden Microsoft-365-, Google-Workspace- und Website-Umgebungen?', a: 'Ja. STS arbeitet mit bestehenden digitalen Umgebungen und bringt diese in eine klarere, stabilere und nachvollziehbarere Form, statt alles neu zu ersetzen.' },
        { q: 'Was ist das Ziel nach der Umsetzung?', a: 'Das Ziel ist ein Zustand, der im Alltag funktioniert, bei Änderungen nicht auseinanderfällt und bei Verantwortungs-, Zugriffs- oder Übergabefragen nicht erst mühsam rekonstruiert werden muss.' },
        { q: 'Warum startet STS über sichtbare Probleme und nicht über große Audit- oder Compliance-Begriffe?', a: 'Weil Unternehmen in der Regel handeln, wenn etwas konkret nicht sauber funktioniert. STS nutzt dieses reale Problem als Einstieg und baut darunter die Struktur, die langfristig gefehlt hat.' },
        { q: 'Kann STS auch in bestehenden gewachsenen Umgebungen arbeiten?', a: 'Ja. Gerade gewachsene Umgebungen sind der typische Ausgangszustand. STS arbeitet nicht nur bei „grünen Wiesen“, sondern genau dort, wo über Jahre Unklarheit, Sonderfälle und Übergabeprobleme entstanden sind.' },
        { q: 'Muss bereits ein großer Schaden eingetreten sein?', a: 'Nein. Relevanz beginnt oft früher: wenn im Alltag wiederholt Rückfragen entstehen, Zugriffe nicht klar erklärt werden können, Zuständigkeiten verwischen oder Vertretungen regelmäßig Reibung erzeugen.' },
        { q: 'Arbeitet STS auch mit internen oder externen IT-Dienstleistern zusammen?', a: 'Ja, solange die Rollen klar bleiben. STS ersetzt keinen laufenden Betrieb, sondern arbeitet an Struktur, Klarheit und Zustandsqualität.' },
        { q: 'Wie konkret ist das Ergebnis nach der Zusammenarbeit?', a: 'Das Ergebnis soll nicht nur dokumentiert, sondern im Alltag spürbar sein: weniger Unsicherheit, nachvollziehbarere Zuständigkeiten, sauberere Zugriffe und stabilere Übergaben.' },
        { q: 'Ist STS nur für stark regulierte Branchen geeignet?', a: 'Nein. Regulierte und verantwortungsnahe Umfelder sind besonders naheliegend, aber entscheidend ist der Zustand: gewachsene Struktur, sensible Abläufe, unklare Zuständigkeiten und operative Fragilität.' },
        { q: 'Was passiert, wenn sich im Erstgespräch zeigt, dass der Bedarf klein ist?', a: 'Dann bleibt der Einstieg klein. STS hat kein Interesse daran, aus jedem Thema künstlich ein Großprojekt zu machen.' }
    ];

    return `
        <section class="max-w-4xl mx-auto px-6 mb-32">
            <span class="section-label">Häufige Fragen</span>
            <h1 class="hero-title text-white mb-8">Häufige Fragen zu STS.</h1>
            <p class="text-xl text-gray-400 mb-20">Die folgenden Antworten dienen der klaren Einordnung. Sie ersetzen kein Erstgespräch, helfen aber dabei, Rolle, Abgrenzung und Relevanz von STS sauber zu verstehen.</p>

            <div class="shell-container">
                ${faqs.map(f => renderFAQItem(f.q, f.a)).join('')}
            </div>
        </section>
    `;
}

function renderImprint() {
    return `
        <section class="max-w-3xl mx-auto px-6 py-20 text-gray-400 reveal">
            <h1 class="text-4xl text-white font-bold mb-12">Impressum</h1>
            <p class="mb-8">Angaben gemäß § 5 ECG, § 14 UGB und Offenlegungspflichten nach Mediengesetz.</p>
            <div class="space-y-4 font-mono text-sm">
                <p><span class="text-cyan-500 uppercase">Firma:</span> Simonic Tech Solutions</p>
                <p><span class="text-cyan-500 uppercase">Form:</span> Einzelunternehmen</p>
                <p><span class="text-cyan-500 uppercase">Inhaber:</span> David Simonič Galun</p>
                <p><span class="text-cyan-500 uppercase">UID:</span> ATU80918238</p>
                <p><span class="text-cyan-500 uppercase">GISA:</span> 38070623</p>
                <p><span class="text-cyan-500 uppercase">Web:</span> www.simonictech.com</p>
            </div>
            <div class="mt-12 space-y-8 text-sm">
                <div>
                    <h4 class="text-white font-bold mb-2">Haftung für Inhalte</h4>
                    <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-2">Urheberrecht</h4>
                    <p>Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.</p>
                </div>
            </div>
        </section>
    `;
}

function renderPrivacy() {
    return `
        <section class="max-w-3xl mx-auto px-6 py-20 text-gray-400 reveal">
            <h1 class="text-4xl text-white font-bold mb-12">Datenschutzerklärung</h1>
            <p class="mb-12">Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche Daten bei der Nutzung dieser Website verarbeitet werden.</p>
            <div class="space-y-12">
                <div><h2 class="text-xl text-white font-bold mb-4">1. Verantwortlicher</h2><p>Verantwortlich für die Datenverarbeitung auf dieser Website ist: Simonic Tech Solutions, David Simonič Galun.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-4">2. Server-Logfiles</h2><p>Beim Aufruf dieser Website werden aus technischen Gründen IP-Adresse, Datum, Uhrzeit und Browsertyp automatisch verarbeitet zur Sicherstellung des technischen Betriebs.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-4">3. Kontaktaufnahme</h2><p>Wenn Sie uns per Formular kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-4">9. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.</p></div>
            </div>
        </section>
    `;
}

function renderCookies() {
    return `
        <section class="max-w-3xl mx-auto px-6 py-20 text-gray-400 reveal">
            <h1 class="text-4xl text-white font-bold mb-12">Cookie-Richtlinie</h1>
            <p class="mb-12">Diese Richtlinie erklärt, welche Cookies auf dieser Website eingesetzt werden.</p>
            <div class="space-y-8">
                <div><h2 class="text-xl text-white font-bold mb-2">Was sind Cookies?</h2><p>Kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-2">Technisch notwendige Cookies</h2><p>Diese sind erforderlich, damit die Website ordnungsgemäß funktioniert (Sicherheit, Navigation).</p></div>
            </div>
        </section>
    `;
}

function renderAgb() {
    return `
        <section class="max-w-3xl mx-auto px-6 py-20 text-gray-400 reveal">
            <h1 class="text-4xl text-white font-bold mb-12">Allgemeine Geschäftsbedingungen</h1>
            <div class="space-y-8">
                <div><h2 class="text-xl text-white font-bold mb-2">1. Geltungsbereich</h2><p>Diese AGB gelten für alle Leistungen von Simonic Tech Solutions gegenüber Unternehmern.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-2">2. Leistungsgegenstand</h2><p>STS erbringt strukturierte technische Umsetzungsleistungen im Bereich digitaler Systeme. Keine allgemeine IT-Betreuung.</p></div>
                <div><h2 class="text-xl text-white font-bold mb-2">6. Haftung</h2><p>Eine Haftung für leichte Fahrlässigkeit ist – soweit rechtlich zulässig – ausgeschlossen.</p></div>
            </div>
        </section>
    `;
}

function initTerminal() {
    const terminal = document.getElementById('hero-terminal');
    if (!terminal) return;

    const commands = [
        { type: 'input', text: 'sts --init --target "digital_ecosystem"' },
        { type: 'log', text: '[SCAN] Analysiere gewachsene Strukturen...', color: 'text-gray-500' },
        { type: 'log', text: '[WARN] Unklare Zuständigkeiten in /ROOT/ACCESS_LOGS gefunden.', color: 'text-amber-500' },
        { type: 'log', text: '[ERR] Kritische Abhängigkeit von Einzelperson: "Admin_Head"', color: 'text-red-500' },
        { type: 'pause', length: 1000 },
        { type: 'input', text: 'sts --restructure --mode "sauber"' },
        { type: 'log', text: '-> Ordne Dateien und Ablagen...', color: 'text-cyan-500' },
        { type: 'log', text: '-> Bereinige operative Zugriffslogik...', color: 'text-cyan-500' },
        { type: 'log', text: '-> Sichere Übergabeprozesse ab...', color: 'text-cyan-500' },
        { type: 'log', text: '[DONE] Systemstatus: BELASTBAR & NACHVOLLZIEHBAR', color: 'text-emerald-500' },
        { type: 'pause', length: 3000 },
        { type: 'clear' }
    ];

    let cmdIndex = 0;

    async function typeWriter() {
        if (!document.getElementById('hero-terminal')) return;

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

            const cursor = line.querySelector('.terminal-cursor');
            if (cursor) cursor.remove();
        } else {
            line.className = `mb-1 ${cmd.color || 'text-gray-400'}`;
            line.textContent = cmd.text;
            terminal.appendChild(line);
        }

        terminal.scrollTop = terminal.scrollHeight;
        cmdIndex++;
        setTimeout(typeWriter, 500);
    }

    terminal.innerHTML = '';
    typeWriter();
}

function bootSTS() {
    if (window.__stsBooted) return;
    window.__stsBooted = true;

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    function getCurrentPage() {
        return window.location.hash.replace('#', '') || 'home';
    }

    function renderPage(pageId, animate = true) {
        const contentArea = document.getElementById('content-area');
        const overlay = document.getElementById('transition-overlay');

        if (!contentArea) return;

        const transition = () => {
            contentArea.innerHTML = renderContent(pageId);
            window.scrollTo({ top: 0, behavior: 'auto' });

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            initLiquidGlass();
            initFaqInteractivity();
            applyScrollAnimations();

            if (pageId === 'home') {
                initTerminal();
            }

            if (overlay && typeof gsap !== 'undefined') {
                gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.out" });
            }
        };

        if (animate && overlay && typeof gsap !== 'undefined') {
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.25,
                ease: "power2.inOut",
                onComplete: transition
            });
        } else {
            transition();
        }
    }

    window.navigateTo = (pageId) => {
        const currentPage = getCurrentPage();

        if (currentPage === pageId) {
            renderPage(pageId, false);
            return;
        }

        window.location.hash = pageId;
    };

    window.addEventListener('hashchange', () => {
        renderPage(getCurrentPage(), true);
    });

    renderPage(getCurrentPage(), false);
    requestAnimationFrame(() => {
        document.body.classList.add('sts-app-ready');
    });

    window.addEventListener('load', () => {
        document.body.classList.add('sts-app-ready');
    }, { once: true });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootSTS);
} else {
    bootSTS();
}

function initLiquidGlass() {
    const cards = document.querySelectorAll('.liquid-glass');

    cards.forEach(card => {
        if (card.querySelector('.prismatic-glare')) return;

        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        const glare = document.createElement('div');
        glare.className = 'prismatic-glare';
        card.appendChild(glare);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.6,
                    ease: "power2.out"
                });

                gsap.to(glare, {
                    left: x,
                    top: y,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out"
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.4)"
                });

                gsap.to(glare, {
                    opacity: 0,
                    duration: 0.35
                });
            }
        });
    });
}

function initFaqInteractivity() {
    const items = document.querySelectorAll('.faq-shell-item');

    items.forEach(item => {
        const header = item.querySelector('.faq-shell-header');
        if (!header) return;

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function applyScrollAnimations() {
    if (typeof ScrollTrigger === 'undefined' || typeof gsap === 'undefined') return;

    ScrollTrigger.getAll().forEach(t => t.kill());

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, i) => {
        gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                delay: (i % 4) * 0.05
            }
        );
    });
}

