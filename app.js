(function () {
  "use strict";
  document.documentElement.lang = "de";
  var LF = window.LERNFELDER, PB = window.PRUEFUNGSBEREICHE, ZF = (window.ZUSAMMENFASSUNGEN || []).concat(window.PRUEFUNGSUEBERBLICK ? [window.PRUEFUNGSUEBERBLICK] : []), RE = window.RECHNER || { GEN: [] };
  var KEY = "lernpfad-bank-v1";

  /* =====================================================================
     Stand (bleibt im Gerät gespeichert, abwärtskompatibel zu v1)
     ===================================================================== */
  var NEU = !hatStand();
  var S = load();
  function hatStand() { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } }
  function leer0() {
    var start = ZF.filter(function (z) { return (z.kapitel || []).length; })[0];
    return { lf: start ? start.nr : 1, mode: "heute", kap: {}, gelesen: {}, karten: {}, mc: {}, rechnen: {}, frei: {}, ganz: false,
      gelesenAm: {}, leitner: {}, fehler: {}, kurz: {}, luecke: {}, tagplan: null, sims: [], simLauf: null, zeit: {},
      einst: { schrift: 1 }, kartenAlle: false };
  }
  function load() {
    var d = leer0();
    try { var raw = localStorage.getItem(KEY); if (raw) Object.assign(d, JSON.parse(raw)); } catch (e) {}
    ["gelesenAm", "leitner", "fehler", "kurz", "luecke", "zeit", "einst"].forEach(function (k) { if (!d[k] || typeof d[k] !== "object") d[k] = k === "einst" ? { schrift: 1 } : {}; });
    if (!Array.isArray(d.sims)) d.sims = [];
    if (!lfById(d.lf)) d.lf = 1;
    return d;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* =====================================================================
     Lernmodi (gruppiert im Menü)
     ===================================================================== */
  var SV = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  var I = {
    heute: '<svg ' + SV + '><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-4"/></svg>',
    lesen: '<svg ' + SV + '><path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v13.5"/></svg>',
    kurz: '<svg ' + SV + '><path d="M13 3L5 13h6l-1 8 8-10h-6z"/></svg>',
    karten: '<svg ' + SV + '><rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v10"/></svg>',
    luecke: '<svg ' + SV + '><path d="M3 12h4M10 12h4M17 12h4"/><path d="M3 7h18M3 17h10"/></svg>',
    mc: '<svg ' + SV + '><circle cx="6" cy="7" r="2"/><circle cx="6" cy="17" r="2"/><path d="M11 7h9M11 17h9"/></svg>',
    rechnen: '<svg ' + SV + '><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/></svg>',
    frei: '<svg ' + SV + '><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg>',
    ops: '<svg ' + SV + '><path d="M4 6h16M4 12h10M4 18h7"/><circle cx="18" cy="16" r="3"/></svg>',
    fehler: '<svg ' + SV + '><path d="M5 4h11l3 3v13H5z"/><path d="M9 10l6 6M15 10l-6 6"/></svg>',
    bp: '<svg ' + SV + '><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
    sim: '<svg ' + SV + '><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/></svg>',
    stand: '<svg ' + SV + '><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    info: '<svg ' + SV + '><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>'
  };
  var MODES = [
    { id: "heute", name: "Heute", text: "Tagesplan und Countdown", gruppe: "Planen" },
    { id: "stand", name: "Mein Stand", text: "Fortschritt, Schwächen, Lernzeit", gruppe: "Planen" },
    { id: "lesen", name: "Lesen", text: "Fließtext Kapitel für Kapitel", gruppe: "Lernen" },
    { id: "kurz", name: "Kurz wiederholen", text: "5 Minuten: Merksätze und Fallen", gruppe: "Lernen" },
    { id: "karten", name: "Karteikarten", text: "Mit Wiederholsystem in 5 Fächern", gruppe: "Üben" },
    { id: "luecke", name: "Lückentext", text: "Begriffe und Zahlen einsetzen", gruppe: "Üben" },
    { id: "mc", name: "Multiple Choice", text: "Gebundene Aufgaben wie in der IHK", gruppe: "Üben" },
    { id: "rechnen", name: "Rechnen", text: "Schritt für Schritt, auch Zufallsaufgaben", gruppe: "Üben" },
    { id: "frei", name: "Schreiben", text: "Ungebundene Aufgaben mit Operator", gruppe: "Üben" },
    { id: "ops", name: "Operatoren", text: "Was verlangt „Erläutern“ & Co.?", gruppe: "Üben" },
    { id: "fehler", name: "Fehlerheft", text: "Alles, was noch nicht sitzt", gruppe: "Prüfen" },
    { id: "sim", name: "Prüfungssimulation", text: "Zufällige Aufgaben, Zeitlimit, IHK-Note", gruppe: "Prüfen" },
    { id: "bp", name: "Beispielprüfungen", text: "Komplette Prüfungssätze mit Musterlösung", gruppe: "Prüfen" }
  ];
  var OPERATOREN = {
    Nennen: "Aufzählen, ohne zu begründen oder zu erklären.",
    "Erläutern": "Mit Beispiel oder Zusammenhang verständlich erklären.",
    "Begründen": "Ursache oder Argument angeben, warum etwas so ist.",
    Unterscheiden: "Merkmale zweier oder mehrerer Dinge gegenüberstellen.",
    Beurteilen: "Abwägen und zu einem eigenen, begründeten Urteil kommen.",
    Ermitteln: "Rechnen oder ein Ergebnis nachvollziehbar herleiten.",
    Zuordnen: "Sachverhalte vorgegebenen Begriffen oder Gruppen zuweisen.",
    Ordnen: "In eine sinnvolle Reihenfolge oder Struktur bringen."
  };
  var NOTEN = [[92, 1], [81, 2], [67, 3], [50, 4], [30, 5], [0, 6]];
  function note(pct) { for (var i = 0; i < NOTEN.length; i++) if (pct >= NOTEN[i][0]) return NOTEN[i][1]; return 6; }
  var NOTENNAME = { 1: "sehr gut", 2: "gut", 3: "befriedigend", 4: "ausreichend", 5: "mangelhaft", 6: "ungenügend" };

  /* =====================================================================
     Hilfen
     ===================================================================== */
  function $(s) { return document.querySelector(s); }
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }).replace(/(\d) (%|€|‰)/g, "$1\u00a0$2").replace(/(§§?) (?=\d)/g, "$1\u00a0"); }
  function fett(t) { return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
  function ohneMarker(t) { return String(t || "").replace(/\*\*/g, ""); }
  function pad(n) { return typeof n === "string" ? n : (n < 10 ? "0" : "") + n; }
  function lfById(n) { return LF.concat(ZF).filter(function (l) { return l.nr === n; })[0]; }
  function istZF(l) { return typeof l.nr === "string"; }
  function kurzName(l) { return l.kurz || (istZF(l) ? l.nr : "LF" + pad(l.nr)); }
  function langName(l) { return l.lang || (istZF(l) ? l.nr + " kompakt" : "Lernfeld " + l.nr); }
  function lfWert(v) { return /^\d+$/.test(v) ? +v : v; }
  function u(l, k) { return (l.uebung && l.uebung[k]) || []; }
  function kapitel(l) { return l.kapitel || []; }
  function echteKapitel(l) { return kapitel(l).filter(function (k) { return !k.platzhalter; }); }
  function lkey(l) { return "lf" + pad(l.nr); }
  function ikey(l, i) { return lkey(l) + "-" + i; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function heute() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function tageZw(a, b) { return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 864e5); }
  function tageBis(iso) { return tageZw(heute(), iso); }
  function datumDE(iso) { var p = iso.split("-"); return p[2] + "." + p[1] + "." + p[0]; }
  function bereich(id) { return PB.filter(function (b) { return b.id === id; })[0]; }
  function bereicheVon(n) { return PB.filter(function (b) { return b.lf.indexOf(n) >= 0; }); }
  /* Vom Nutzer als abgeschlossen festgelegt (Teil 1 bestanden). LF04 gehört laut AO auch zu "Vermögen aufbauen",
     der Nutzer wollte es trotzdem hier haben. Lernfelder mit 100 % rutschen automatisch dazu. */
  var ABGESCHLOSSEN = [2, 3, 4, 5];
  function nurTeil1(n) { return ABGESCHLOSSEN.indexOf(n) >= 0; }
  function abgeschlossen(l) { if (istZF(l)) return false; if (nurTeil1(l.nr)) return true; var f = fortschritt(l); return f.total > 0 && f.pct === 100; }
  function kapIndex(l, id) { var ks = kapitel(l); for (var i = 0; i < ks.length; i++) if (ks[i].id === id) return i; return -1; }
  function kapById(l, id) { return kapitel(l)[kapIndex(l, id)]; }
  function zahl(v) { return parseFloat(String(v).replace(/\s/g, "").replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", ".")); }

  /* Inhaltsquelle eines Prüfungsbereichs: gibt es eine gefüllte Zusammenfassung (z. B. WiSo kompakt),
     wird sie genommen, sonst die einzelnen Lernfelder. So wird nichts doppelt gezählt. */
  function quellen(b) {
    var z = ZF.filter(function (x) { return x.bereich === b.id && kapitel(x).length; });
    return z.length ? z : b.lf.map(lfById);
  }

  /* ---------- Fortschritt: Anteil der Themen, zu denen schon irgendetwas gemacht wurde ---------- */
  var TYPEN = ["karten", "mc", "rechnen", "frei"];
  function themaBearbeitet(l, k) {
    if (S.gelesen[k.id] || S.kurz[k.id] || S.luecke[k.id]) return true;
    return TYPEN.some(function (t) { return u(l, t).some(function (q, i) { return q.thema === k.id && S[t][ikey(l, i)] !== undefined; }); });
  }
  function fortschritt(l) {
    var ks = kapitel(l), done = ks.filter(function (k) { return themaBearbeitet(l, k); }).length;
    return { total: ks.length, done: done, pct: ks.length ? Math.round(done / ks.length * 100) : 0 };
  }
  function bereichPct(b) {
    var t = 0, d = 0;
    quellen(b).forEach(function (l) { var f = fortschritt(l); t += f.total; d += f.done; });
    return { pct: t ? Math.round(d / t * 100) : 0, total: t, done: d };
  }
  function naechstesLF() {
    for (var i = 0; i < LF.length; i++) { if (abgeschlossen(LF[i])) continue; var f = fortschritt(LF[i]); if (!f.total || f.pct < 100) return LF[i].nr; }
    return null;
  }
  function ring(pct, size, label) {
    var r = 18, c = 2 * Math.PI * r;
    return '<svg class="ring" viewBox="0 0 44 44" width="' + (size || 44) + '" height="' + (size || 44) + '" role="img" aria-label="' + esc(label || pct + " Prozent") + '"><title>' + esc(label || pct + " %") + "</title>" +
      '<circle cx="22" cy="22" r="' + r + '" fill="none" stroke="var(--line)" stroke-width="4"/>' +
      '<circle cx="22" cy="22" r="' + r + '" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-opacity="' + (pct ? 1 : 0) + '" stroke-dasharray="' + (c * pct / 100).toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 22 22)"/>' +
      '<text x="22" y="26" text-anchor="middle" class="num">' + pct + '<tspan class="pc">%</tspan></text></svg>';
  }
  function tageText(t) { return t > 1 ? "in " + t + " Tagen" : t === 1 ? "morgen" : t === 0 ? "heute" : "vorbei"; }

  /* =====================================================================
     Antworten verbuchen: Fortschritt, Wiederholsystem, Fehlerheft
     ===================================================================== */
  var FAECHER = [1, 2, 4, 7, 14];
  function karteFaellig(l, i) {
    var st = S.leitner[ikey(l, i)];
    if (!st) return true;
    return tageZw(st.d, heute()) >= FAECHER[st.f - 1];
  }
  function fach(l, i) { var st = S.leitner[ikey(l, i)]; return st ? st.f : 1; }
  function fKey(l, typ, i) { return typ + "|" + l.nr + "|" + i; }
  function verbuchen(l, typ, i, richtig, wert) {
    var k = ikey(l, i);
    if (typ === "karten") {
      S.karten[k] = wert;
      var st = S.leitner[k] || { f: 1, d: heute() };
      st.f = wert === 2 ? Math.min(5, st.f + 1) : wert === 0 ? 1 : st.f;
      st.d = heute(); S.leitner[k] = st;
    } else if (typ === "frei") S.frei[k] = wert;
    else S[typ][k] = richtig;
    var fk = fKey(l, typ, i), e = S.fehler[fk];
    if (!richtig) S.fehler[fk] = { lf: l.nr, typ: typ, i: i, serie: 0, seit: heute(), anz: (e ? e.anz : 0) + 1 };
    else if (e) { e.serie++; if (e.serie >= 2) delete S.fehler[fk]; }
  }
  function fehlerListe(filter) {
    return Object.keys(S.fehler).map(function (k) { return S.fehler[k]; }).filter(function (e) {
      var l = lfById(e.lf); if (!l) return false;
      var q = u(l, e.typ)[e.i]; if (!q) return false;
      if (filter === "lf") return e.lf === S.lf;
      return true;
    });
  }

  /* =====================================================================
     Kopfleiste und Menüs
     ===================================================================== */
  function renderBar() {
    var l = lfById(S.lf), m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
    $("#lfChip").innerHTML = '<span class="long">' + langName(l) + '</span><span class="short">' + kurzName(l) + "</span>";
    var f = fortschritt(l);
    $("#lfRing").innerHTML = ring(f.pct, 30, f.total ? f.done + " von " + f.total + " Themen bearbeitet" : "Noch keine Themen");
    $("#lfTitle").textContent = l.titel;
    $("#modeIcon").innerHTML = I[m.id];
    $("#modeLabel").textContent = m.name;
    $("#barFill").style.width = f.pct + "%";
  }
  function closeSheets() { ["#scrim", "#sheetLf", "#sheetMode", "#sheetSearch"].forEach(function (s) { $(s).hidden = true; }); }
  function openSheet(id) { closeSheets(); $("#scrim").hidden = false; $(id).hidden = false; }
  function lfItem(l, nxt) {
    var f = fortschritt(l), meta, label = f.total ? f.done + " von " + f.total + " Themen bearbeitet" : "Inhalt folgt";
    if (istZF(l)) {
      var b = bereich(l.bereich);
      meta = b && b.datum ? "Prüfung " + tageText(tageBis(b.datum)) : l.lf.length ? l.lf.map(function (n) { return "LF" + pad(n); }).join(" + ") : "Ablauf und Beispielprüfungen";
      return '<button class="lf-item zf" data-lf="' + esc(l.nr) + '" aria-current="' + (l.nr === S.lf) + '"><span class="lf-txt"><span class="lf-name">' + esc(langName(l)) + '</span><span class="lf-sub">' + esc(meta) + "</span></span>" + ring(f.pct, 44, label) + "</button>";
    }
    meta = l.nr === nxt ? '<span class="tag next">Als Nächstes</span>' : "";
    return '<button class="lf-item' + (abgeschlossen(l) ? " muted" : "") + '" data-lf="' + l.nr + '" aria-current="' + (l.nr === S.lf) + '">' +
      '<span class="lf-no">' + kurzName(l) + '</span><span class="lf-txt"><span class="lf-name">' + esc(l.titel) + "</span>" + (meta ? '<span class="lf-meta">' + meta + "</span>" : "") + "</span>" + ring(f.pct, 44, label) + "</button>";
  }
  function openLf() {
    var nxt = naechstesLF(), it = function (l) { return lfItem(l, nxt); };
    var offen = LF.filter(function (l) { return !abgeschlossen(l); }), fertig = LF.filter(abgeschlossen);
    $("#sheetLf").innerHTML =
      "<h3>Lernfelder</h3>" + offen.map(it).join("") +
      '<h3 class="h-sep">Prüfungen</h3>' + ZF.map(it).join("") +
      '<details class="group done-group"' + (S.teil1Offen ? " open" : "") + ' data-teil1><summary><div class="group-h"><span><b>Abgeschlossen</b><span class="count">' + fertig.length + " Lernfelder</span></span><span class=\"caret\"></span></div></summary>" + fertig.map(it).join("") + "</details>";
    openSheet("#sheetLf");
  }
  function modeZaehler(id, l) {
    var n = function (x, eins, mehr) { return x ? x + " " + (x === 1 ? eins : mehr) : ""; };
    switch (id) {
      case "lesen": return n(kapitel(l).length, "Kapitel", "Kapitel");
      case "karten": var f = u(l, "karten").filter(function (_, i) { return karteFaellig(l, i); }).length; return u(l, "karten").length ? (f ? f + " fällig" : "erledigt") : "";
      case "mc": return n(u(l, "mc").length, "Frage", "Fragen");
      case "rechnen": return n(u(l, "rechnen").length, "Aufgabe", "Aufgaben");
      case "frei": return n(u(l, "frei").length, "Aufgabe", "Aufgaben");
      case "luecke": return n(lueckenFuer(l).length, "Satz", "Sätze");
      case "kurz": return n(kurzKarten(l).length, "Karte", "Karten");
      case "fehler": var e = fehlerListe("alle").length; return e ? String(e) : "";
      default: return "";
    }
  }
  function openMode() {
    var l = lfById(S.lf), gruppe = "";
    $("#sheetMode").innerHTML = MODES.map(function (m) {
      var h = m.gruppe !== gruppe ? "<h3>" + m.gruppe + "</h3>" : ""; gruppe = m.gruppe;
      return h + '<button class="mode-item" data-mode="' + m.id + '" aria-current="' + (m.id === S.mode) + '"><span class="mode-ico">' + I[m.id] + "</span><span><b>" + m.name + "</b><span>" + m.text + '</span></span><span class="count num">' + modeZaehler(m.id, l) + "</span></button>";
    }).join("");
    openSheet("#sheetMode");
  }

  /* =====================================================================
     Suche und Glossar
     ===================================================================== */
  function alleQuellen() { return ZF.concat(LF); }
  function suchtreffer(q) {
    q = q.trim().toLowerCase(); if (q.length < 2) return [];
    var res = [];
    alleQuellen().forEach(function (l) {
      kapitel(l).forEach(function (k, i) {
        var text = [k.titel, k.erklaert, k.beispiel, ohneMarker(k.merksatz), k.tipp, k.achtung].concat(k.tabelle ? k.tabelle.zeilen.map(function (z) { return z.join(" "); }) : []).join(" ");
        var pos = text.toLowerCase().indexOf(q);
        if (pos >= 0) res.push({ l: l, art: "Kapitel", titel: k.titel, ausz: auszug(text, pos, q.length), ziel: { mode: "lesen", kap: i } });
      });
      u(l, "karten").forEach(function (c, i) {
        var text = c.vorne + " " + c.hinten, pos = text.toLowerCase().indexOf(q);
        if (pos >= 0) res.push({ l: l, art: "Karteikarte", titel: c.vorne, ausz: auszug(text, pos, q.length), ziel: { mode: "karten", karte: i } });
      });
    });
    return res.slice(0, 60);
  }
  function auszug(text, pos, len) {
    var a = Math.max(0, pos - 50), b = Math.min(text.length, pos + len + 70);
    return (a ? "… " : "") + esc(text.slice(a, pos)) + "<mark>" + esc(text.slice(pos, pos + len)) + "</mark>" + esc(text.slice(pos + len, b)) + (b < text.length ? " …" : "");
  }
  /* Glossar: erste Spalte aus Übersichtstabellen und **markierte** Begriffe, je mit Kurzdefinition und Kapitel. */
  function glossar() {
    var g = {};
    alleQuellen().forEach(function (l) {
      kapitel(l).forEach(function (k, i) {
        if (k.tabelle && k.tabelle.zeilen) k.tabelle.zeilen.forEach(function (z) {
          var t = String(z[0] || "").trim();
          if (t.length < 2 || t.length > 40 || /\d/.test(t) || !/^[A-ZÄÖÜ]/.test(t)) return;
          if (!g[t]) g[t] = { begriff: t, def: z.slice(1).filter(Boolean).join(" · "), l: l, kap: i, ktitel: k.titel };
        });
        String(k.merksatz || "").replace(/\*\*(.+?)\*\*/g, function (_, t) { if (!g[t]) g[t] = { begriff: t, def: ohneMarker(k.merksatz), l: l, kap: i, ktitel: k.titel }; });
      });
    });
    return Object.keys(g).sort(function (a, b) { return a.localeCompare(b, "de"); }).map(function (k) { return g[k]; });
  }
  var suchTab = "suche";
  function openSearch() {
    $("#sheetSearch").innerHTML = '<div class="seg" role="tablist"><button role="tab" data-stab="suche" aria-selected="' + (suchTab === "suche") + '">Suche</button><button role="tab" data-stab="glossar" aria-selected="' + (suchTab === "glossar") + '">Glossar</button></div>' +
      (suchTab === "suche" ? '<div class="search-in"><input id="suchFeld" type="search" placeholder="Begriff, Paragraf oder Zahl" aria-label="Suchbegriff" autocomplete="off"></div><div id="suchErg" class="search-res"><p class="hint">Tippe mindestens zwei Zeichen. Gesucht wird in allen Kapiteln, Merksätzen und Karteikarten.</p></div>'
        : '<div class="search-in"><input id="glossFeld" type="search" placeholder="Im Glossar filtern" aria-label="Glossar filtern" autocomplete="off"></div><div id="glossErg" class="search-res"></div>');
    openSheet("#sheetSearch");
    if (suchTab === "glossar") zeigeGlossar("");
    var f = $("#suchFeld") || $("#glossFeld"); if (f) setTimeout(function () { f.focus(); }, 30);
  }
  var trefferCache = [];
  function zeigeSuche(q) {
    trefferCache = suchtreffer(q);
    $("#suchErg").innerHTML = q.trim().length < 2 ? '<p class="hint">Tippe mindestens zwei Zeichen.</p>' : !trefferCache.length ? '<p class="hint">Nichts gefunden. Versuche ein kürzeres Wort.</p>' :
      trefferCache.map(function (t, n) { return '<button class="hit" data-hit="' + n + '"><span class="hit-k">' + kurzName(t.l) + " · " + t.art + '</span><b>' + esc(t.titel) + "</b><span>" + t.ausz + "</span></button>"; }).join("");
  }
  var glossCache = [];
  function zeigeGlossar(q) {
    q = q.trim().toLowerCase();
    glossCache = glossar().filter(function (g) { return !q || g.begriff.toLowerCase().indexOf(q) >= 0; });
    var buchst = "";
    $("#glossErg").innerHTML = glossCache.length ? glossCache.map(function (g, n) {
      var b = g.begriff[0].toUpperCase(), h = b !== buchst ? '<div class="gl-letter">' + esc(b) + "</div>" : ""; buchst = b;
      return h + '<button class="hit" data-gl="' + n + '"><b>' + esc(g.begriff) + "</b><span>" + esc(g.def) + '</span><span class="hit-k">' + kurzName(g.l) + " · " + esc(g.ktitel) + "</span></button>";
    }).join("") : '<p class="hint">Keine Begriffe gefunden.</p>';
  }
  function springe(l, ziel) {
    closeSheets(); resetPractice();
    S.lf = l.nr; S.mode = ziel.mode; S.ganz = false; S.fokus = false;
    if (ziel.kap != null) S.kap[lkey(l)] = ziel.kap;
    if (ziel.karte != null) { S.kartenAlle = true; P.springKarte = ziel.karte; }
    save(); render(); window.scrollTo(0, 0);
  }

  /* =====================================================================
     1 · Heute: Tagesplan und Countdown
     ===================================================================== */
  function fokusBereiche() {
    var wiso = bereich("WISO"), schr = bereich("VR");
    if (tageBis(wiso.datum) >= 0) return { ids: ["WISO"], datum: wiso.datum, name: "WiSo" };
    if (tageBis(schr.datum) >= 0) return { ids: ["VR", "FV"], datum: schr.datum, name: "Vermögen und Finanzierung" };
    return null;
  }
  function offeneKapitel(ids) {
    var out = [];
    ids.forEach(function (id) { quellen(bereich(id)).forEach(function (l) { echteKapitel(l).forEach(function (k) { if (!S.gelesen[k.id]) out.push({ lf: l.nr, id: k.id }); }); }); });
    return out;
  }
  function tagesplan() {
    var fb = fokusBereiche(); if (!fb) return null;
    if (S.tagplan && S.tagplan.datum === heute() && S.tagplan.fokus === fb.ids.join("+")) return S.tagplan;
    var offen = offeneKapitel(fb.ids), tage = Math.max(1, tageBis(fb.datum));
    var pensum = Math.ceil(offen.length / tage);
    S.tagplan = { datum: heute(), fokus: fb.ids.join("+"), pensum: pensum, liste: offen.slice(0, pensum) };
    save(); return S.tagplan;
  }
  function renderHeute() {
    var fb = fokusBereiche(), plan = tagesplan();
    var termine = [["WiSo", "2026-11-24", "Wirtschafts- und Sozialkunde, 60 Min."], ["Schriftlich", "2026-11-25", "Vermögen und Finanzierung, je 90 Min."]];
    var cd = '<div class="countdown">' + termine.map(function (t) {
      var d = tageBis(t[1]);
      return '<div class="cd' + (d < 0 ? " vorbei" : "") + '"><span class="cd-n num">' + (d < 0 ? "✓" : d) + '</span><span><b>' + t[0] + (d >= 0 ? " " + tageText(d) : " geschafft") + "</b><span>" + datumDE(t[1]) + " · " + t[2] + "</span></span></div>";
    }).join("") + "</div>";
    var h = '<div class="practice-head"><h1>Heute</h1><span class="count">' + new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }) + "</span></div>" + cd;
    if (!fb) return { cls: "single", html: h + '<div class="empty-state"><b>Alle schriftlichen Prüfungen sind geschafft</b>Als Nächstes kommt die mündliche Prüfung „Kunden beraten“.</div>' };
    var gelesenHeute = Object.keys(S.gelesenAm).filter(function (id) { return S.gelesenAm[id] === heute() && S.gelesen[id]; }).length;
    var offenGesamt = offeneKapitel(fb.ids).length;
    var liste = plan.liste.map(function (x) {
      var l = lfById(x.lf), k = kapById(l, x.id); if (!k) return "";
      var ok = !!S.gelesen[k.id];
      return '<li class="plan-item' + (ok ? " ok" : "") + '"><button class="tick" data-tick="' + esc(k.id) + '" data-tlf="' + l.nr + '" aria-pressed="' + ok + '" aria-label="' + (ok ? "Als ungelesen markieren" : "Als gelesen abhaken") + '"></button><button class="plan-link" data-goto="' + esc(k.id) + '" data-glf="' + l.nr + '"><span class="hit-k">' + kurzName(l) + "</span><b>" + esc(k.titel.replace(/^LF\d\d · /, "")) + "</b></button></li>";
    }).join("");
    var plus = gelesenHeute - plan.pensum;
    var lage = !plan.pensum ? "Alle Kapitel für " + fb.name + " sind gelesen. Jetzt heißt es üben und wiederholen."
      : plus > 0 ? "Du bist " + plus + (plus === 1 ? " Kapitel" : " Kapitel") + " voraus. Sehr gut."
      : plan.liste.every(function (x) { return S.gelesen[x.id]; }) ? "Pensum für heute geschafft."
      : "Noch " + offenGesamt + " Kapitel bis " + fb.name + ", also " + plan.pensum + " pro Tag.";
    var faellig = 0, fehler = fehlerListe("alle").length;
    fb.ids.forEach(function (id) { quellen(bereich(id)).forEach(function (l) { u(l, "karten").forEach(function (_, i) { if (karteFaellig(l, i)) faellig++; }); }); });
    h += '<section class="today"><div class="today-h"><div><div class="lbl">Tagesplan · Fokus ' + esc(fb.name) + '</div><p class="today-lage">' + esc(lage) + '</p></div>' + ring(plan.pensum ? Math.min(100, Math.round(Math.min(gelesenHeute, plan.pensum) / plan.pensum * 100)) : 100, 52, "Heutiges Pensum") + "</div>" +
      (liste ? '<ol class="plan">' + liste + "</ol>" : "") + "</section>" +
      '<div class="quick">' +
      '<button class="quick-b" data-quick="karten"><span class="mode-ico">' + I.karten + "</span><span><b>" + faellig + " Karten fällig</b><span>Wiederholen nach Plan</span></span></button>" +
      '<button class="quick-b" data-quick="fehler"><span class="mode-ico">' + I.fehler + "</span><span><b>" + fehler + " im Fehlerheft</b><span>Zweimal richtig, dann raus</span></span></button>" +
      '<button class="quick-b" data-quick="sim"><span class="mode-ico">' + I.sim + "</span><span><b>Probeprüfung</b><span>" + (fb.ids[0] === "WISO" ? "WiSo, 60 Minuten" : "90 Minuten") + "</span></span></button>" +
      "</div>";
    return { cls: "single", html: h };
  }

  /* =====================================================================
     Lesen (mit Fokusmodus und Schriftgröße)
     ===================================================================== */
  function kapitelHtml(k) {
    if (k.platzhalter) return "<h1>" + esc(k.titel) + '</h1><div class="placeholder">' + esc(k.erklaert) + "</div>";
    var h = "<h1>" + esc(k.titel) + (k.ergaenzt ? ' <span class="badge">Ergänzt</span>' : "") + "</h1>";
    if (k.erklaert) h += '<div class="block"><div class="lbl">Einfach erklärt</div><p class="prose">' + esc(k.erklaert) + "</p></div>";
    if (k.beispiel) h += '<div class="block example"><div class="lbl">Beispiel</div><p class="prose">' + esc(k.beispiel) + "</p></div>";
    if (k.tabelle) h += '<div class="block"><div class="lbl">Übersicht</div><div class="tbl-wrap"><table class="stack"><thead><tr>' + k.tabelle.kopf.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + k.tabelle.zeilen.map(function (r) { return "<tr>" + r.map(function (c, ci) { return '<td data-k="' + esc(k.tabelle.kopf[ci] || "") + '">' + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div></div>";
    if (k.merksatz) h += '<div class="block merk"><div class="lbl">Merksatz</div><p>' + fett(k.merksatz) + "</p></div>";
    if (k.tipp || k.achtung) h += '<div class="block duo">' + (k.tipp ? '<div class="note tip"><div class="lbl">Prüfungstipp</div>' + esc(k.tipp) + "</div>" : "<div></div>") + (k.achtung ? '<div class="note trap"><div class="lbl">Achtung, typische Falle</div>' + esc(k.achtung) + "</div>" : "") + "</div>";
    (k.korrektur || []).forEach(function (c) { h += '<div class="block fix"><div class="lbl">Korrektur zur Mitschrift</div><div><s>' + esc(c.stand) + "</s></div><div><b>Richtig:</b> " + esc(c.richtig) + "</div></div>"; });
    return h;
  }
  function leseLeiste() {
    var s = S.einst.schrift;
    return '<div class="readbar"><div class="seg seg-s" role="group" aria-label="Schriftgröße">' + ["A", "A", "A"].map(function (a, i) { return '<button data-schrift="' + i + '" aria-pressed="' + (s === i) + '" style="font-size:' + (12 + i * 3) + 'px" aria-label="Schriftgröße ' + (i + 1) + '">' + a + "</button>"; }).join("") +
      '</div><button class="chip-b" data-act="fokus">Fokus</button><button class="chip-b" data-act="theme">Hell / Dunkel</button></div>';
  }
  function renderLesen(l) {
    var ks = kapitel(l), key = lkey(l);
    if (!ks.length) return leer(l, "Für dieses Lernfeld sind noch keine Kapitel drin. Sobald deine Mitschrift hochgeladen ist, erscheint sie hier.");
    var idx = Math.min(S.kap[key] || 0, ks.length - 1), k = ks[idx];
    var toc = '<nav class="toc" aria-label="Kapitel"><h4>Kapitel ' + kurzName(l) + "</h4><ol>" + ks.map(function (c, i) {
      var mt = /^(LF\d\d) · (.*)$/.exec(c.titel), titel = mt ? mt[2] : c.titel, vor = i ? /^(LF\d\d) · /.exec(ks[i - 1].titel) : null;
      var kopfzeile = mt && (!vor || vor[1] !== mt[1]) ? '<li class="toc-group">' + mt[1] + "</li>" : "";
      return kopfzeile + '<li><button data-kap="' + i + '" aria-current="' + (!S.ganz && i === idx) + '"><span class="dot' + (S.gelesen[c.id] ? " done" : (themaBearbeitet(l, c) ? " touched" : "")) + '"></span><span>' + (i + 1) + ". " + esc(titel) + "</span></button></li>";
    }).join("") + '</ol><button class="whole" data-act="ganz">' + (S.ganz ? "Kapitelweise lesen" : "Ganzes Lernfeld am Stück") + "</button></nav>";
    var body;
    if (S.ganz) {
      body = '<article class="chapter">' + leseLeiste() + '<div class="crumbs">' + kurzName(l) + " · alle " + ks.length + " Kapitel</div>" + ks.map(kapitelHtml).join('<hr class="sep">') + "</article>";
    } else {
      var last = idx === ks.length - 1, nxt = last && !istZF(l) ? lfById(l.nr + 1) : null;
      body = '<article class="chapter">' + leseLeiste() + '<div class="crumbs">' + kurzName(l) + " · Kapitel " + (idx + 1) + " von " + ks.length + "</div>" + kapitelHtml(k) +
        '<div class="pager"><button class="btn" data-act="zurueck"' + (idx === 0 ? " disabled" : "") + ">Zurück</button>" +
        (k.platzhalter ? "" : '<button class="btn check" data-act="gelesen" aria-pressed="' + !!S.gelesen[k.id] + '">' + (S.gelesen[k.id] ? "Gelesen ✓" : "Als gelesen abhaken") + "</button>") +
        (last ? (nxt ? '<button class="btn primary" data-act="nextlf">Weiter mit ' + kurzName(nxt) + "</button>" : "<span></span>") : '<button class="btn primary" data-act="weiter">Weiter</button>') + "</div></article>";
    }
    if (l.nr === "Prüfung" && BP.length && !S.fokus) body = body.replace('<article class="chapter">', '<article class="chapter"><div class="bp-call"><div><b>' + BP.length + ' Beispielprüfungen</b><span class="count">' + BP.map(function (p) { return bereich(p.bereich) ? bereich(p.bereich).kurz : p.bereich; }).join(" · ") + ' · mit Zeitlimit und Musterlösung</span></div><button class="btn primary" data-mode="bp">Öffnen</button></div>');
    return { cls: S.fokus ? "single fokus-main" : "", html: (S.fokus ? "" : toc) + body };
  }

  /* =====================================================================
     8 · Kurz wiederholen (Merksätze und Fallen)
     ===================================================================== */
  function kurzKarten(l) {
    var out = [];
    echteKapitel(l).forEach(function (k) {
      if (k.merksatz) out.push({ k: k, art: "Merksatz", text: k.merksatz });
      if (k.achtung) out.push({ k: k, art: "Achtung", text: k.achtung });
    });
    return out;
  }
  function renderKurz(l) {
    var ks = kurzKarten(l); if (!ks.length) return leer(l, "Für dieses Lernfeld gibt es noch keine Merksätze.");
    P.i = ((P.i % ks.length) + ks.length) % ks.length; var c = ks[P.i];
    if (!S.kurz[c.k.id]) { S.kurz[c.k.id] = true; save(); }
    return { cls: "single", html: kopf("Kurz wiederholen", l, ks.length) +
      '<div class="kurz' + (c.art === "Achtung" ? " trap" : "") + '" id="swipe"><div class="lbl">' + (c.art === "Achtung" ? "Achtung, typische Falle" : "Merksatz") + '</div><p>' + fett(c.text) + '</p><span class="kurz-k">' + esc(c.k.titel) + "</span></div>" +
      '<div class="kurz-prog" aria-hidden="true"><i style="width:' + Math.round((P.i + 1) / ks.length * 100) + '%"></i></div>' +
      '<div class="pager plain"><button class="btn" data-act="kprev">Zurück</button><span class="count">Wischen oder ← → </span><button class="btn primary" data-act="knext">Weiter</button></div>' };
  }

  /* =====================================================================
     Gemeinsame Aufgaben-Darstellung (Üben, Fehlerheft, Simulation)
     ===================================================================== */
  var P = { i: 0, turned: false, picked: null, shown: false, step: 0 };
  function kopf(titel, l, n, extra) { return '<div class="practice-head"><h1>' + titel + '</h1><span class="count num">' + (l ? kurzName(l) : "") + (n ? " · " + (Math.min(P.i, n - 1) + 1) + " von " + n : "") + (extra || "") + "</span></div>"; }
  function leer(l, text) { return { cls: "single", html: '<div class="empty-state"><b>' + kurzName(l) + " · noch leer</b>" + esc(text) + "</div>" }; }
  function opBadge(op) {
    if (!op) return "";
    var d = OPERATOREN[op];
    return '<span class="op-wrap"><button class="op" data-opinfo="1" aria-expanded="false">' + esc(op) + (d ? I.info : "") + "</button>" + (d ? '<span class="op-tip" hidden>' + esc(op) + ": " + esc(d) + "</span>" : "") + "</span>";
  }
  function schritte(q) {
    if (q.schritte) return q.schritte;
    var teile = String(q.weg || "").split(/\.\s+(?=[A-ZÄÖÜ0-9])/), out = [];
    teile.forEach(function (t) { if (out.length && /(\b[a-zA-Z]|\d)$/.test(out[out.length - 1]) && out[out.length - 1].length < 4) out[out.length - 1] += ". " + t; else out.push(t); });
    return out.map(function (t, i) { return i < out.length - 1 && !/[.!?]$/.test(t) ? t + "." : t; });
  }
  /* Eine Aufgabe zeichnen. ctx: { l, typ, i, q } */
  function aufgabeHtml(ctx) {
    var q = ctx.q, l = ctx.l;
    if (ctx.typ === "karten") {
      return '<div class="flip"><button class="card' + (P.turned ? " turned" : "") + '" data-act="drehen" aria-label="Karte umdrehen"><div class="face"><div class="lbl">Frage</div><p>' + esc(q.vorne) + '</p></div><div class="face back"><div class="lbl">Antwort</div><p>' + esc(q.hinten) + "</p></div></button></div>" +
        (P.turned ? '<div class="rate"><button class="btn r0" data-rate="0">Nicht gewusst</button><button class="btn r1" data-rate="1">Unsicher</button><button class="btn r2" data-rate="2">Gewusst</button></div>' : '<p class="count center">Tippe auf die Karte, um sie umzudrehen.</p>');
    }
    if (ctx.typ === "mc") {
      var opts = q.optionen.map(function (o, i) {
        var c = P.picked == null ? "" : (i === q.richtig ? " right" : (i === P.picked ? " wrong" : ""));
        return '<button class="opt' + c + '" data-pick="' + i + '"' + (P.picked != null ? " disabled" : "") + '><span class="k">' + "ABCDEF"[i] + "</span><span>" + esc(o) + "</span></button>";
      }).join("");
      return '<div class="q">' + opBadge(q.operator) + '<p class="frage">' + esc(q.frage) + '</p><div class="opts">' + opts + "</div>" +
        (P.picked != null ? '<div class="feedback"><b>' + (P.picked === q.richtig ? "Richtig." : "Nicht ganz.") + "</b> " + esc(q.erklaerung) + '</div><div class="pager plain"><span></span><button class="btn primary" data-act="naechste">Weiter</button></div>' : "") + "</div>";
    }
    if (ctx.typ === "rechnen") {
      var st = schritte(q), fb = "";
      if (P.shown === "ok" || P.shown === "falsch") fb = '<div class="feedback ' + (P.shown === "ok" ? "good" : "bad") + '"><b>' + (P.shown === "ok" ? "Richtig." : "Noch nicht richtig.") + "</b> " + (P.shown === "ok" ? "Ergebnis: " + esc(RE.de ? RE.de(q.ergebnis) : q.ergebnis) + " " + esc(q.einheit) : "Schau dir den Lösungsweg Schritt für Schritt an.") + "</div>";
      var weg = P.step ? '<ol class="steps">' + st.slice(0, P.step).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "";
      var stepBtn = P.step < st.length ? '<button class="btn" data-act="schritt">' + (P.step ? "Nächster Schritt" : "Lösungsweg") + "</button>" : "";
      return '<div class="q">' + opBadge(q.operator) + (q.ergaenzt ? ' <span class="badge">Ergänzt</span>' : "") + '<p class="frage">' + esc(q.frage) + "</p>" +
        (q.formel && P.step ? '<p class="formel">' + esc(q.formel) + "</p>" : "") +
        '<div class="calc-row"><input id="calcIn" inputmode="decimal" placeholder="Ergebnis" aria-label="Ergebnis" autocomplete="off"><span class="unit">' + esc(q.einheit) + '</span><button class="btn primary" data-act="pruefen">Prüfen</button>' + stepBtn + "</div>" +
        fb + weg + (q.hinweis && P.step ? '<p class="count">' + esc(q.hinweis) + "</p>" : "") +
        (P.shown || P.step >= st.length ? '<div class="pager plain"><span></span><button class="btn" data-act="naechste">Nächste Aufgabe</button></div>' : "") + "</div>";
    }
    if (ctx.typ === "frei") {
      return '<div class="q">' + opBadge(q.operator) + '<p class="frage">' + esc(q.frage) + '</p><label for="freiIn" class="count">Deine Antwort, wie in der Prüfung in ganzen Sätzen</label><textarea id="freiIn"></textarea>' +
        (P.shown ? '<div class="feedback"><b>Musterlösung:</b> ' + esc(q.loesung) + '</div><p class="count">Wie vollständig war deine Antwort?</p><div class="rate"><button class="btn r0" data-frei="0">Fehlt viel</button><button class="btn r1" data-frei="1">Teilweise</button><button class="btn r2" data-frei="2">Vollständig</button></div>' : '<div class="pager plain"><span></span><button class="btn primary" data-act="loesung">Musterlösung zeigen</button></div>') + "</div>";
    }
    return "";
  }

  /* ---------- 2 · Karteikarten mit Wiederholsystem ---------- */
  function kartenQueue(l) {
    var alle = u(l, "karten").map(function (_, i) { return i; });
    return S.kartenAlle ? alle : alle.filter(function (i) { return karteFaellig(l, i); });
  }
  function faecherHtml(l) {
    var n = [0, 0, 0, 0, 0]; u(l, "karten").forEach(function (_, i) { n[fach(l, i) - 1]++; });
    return '<div class="faecher" aria-label="Karten je Fach">' + n.map(function (x, i) { return '<div class="fach' + (x ? " voll" : "") + '" title="Fach ' + (i + 1) + ": " + x + ' Karten"><b class="num">' + x + "</b><em>Fach " + (i + 1) + "</em></div>"; }).join("") + "</div>";
  }
  function renderKarten(l) {
    var alle = u(l, "karten"); if (!alle.length) return leer(l, "Noch keine Karteikarten für dieses Lernfeld.");
    var qu = kartenQueue(l);
    if (P.springKarte != null) { var pos = qu.indexOf(P.springKarte); if (pos >= 0) P.i = pos; P.springKarte = null; }
    var faellig = alle.filter(function (_, i) { return karteFaellig(l, i); }).length;
    var schalter = '<div class="seg seg-inline" role="group"><button data-kalle="0" aria-pressed="' + !S.kartenAlle + '">Nur fällige · ' + faellig + '</button><button data-kalle="1" aria-pressed="' + !!S.kartenAlle + '">Alle · ' + alle.length + "</button></div>";
    var top = '<div class="karten-top">' + schalter + faecherHtml(l) + "</div>";
    if (!qu.length) return { cls: "single", html: kopf("Karteikarten", l) + top + '<div class="empty-state"><b>Für heute alles wiederholt</b>Die nächsten Karten werden nach Plan wieder fällig: Fach 1 täglich, Fach 2 alle 2 Tage, Fach 3 alle 4, Fach 4 alle 7, Fach 5 alle 14 Tage.<div class="pager plain center"><button class="btn" data-kalle="1">Trotzdem alle üben</button></div></div>' };
    P.i %= qu.length; var i = qu[P.i];
    P.cur = { lf: l.nr, typ: "karten", i: i };
    return { cls: "single", html: kopf("Karteikarten", l, qu.length, " · Fach " + fach(l, i)) + top + aufgabeHtml({ l: l, typ: "karten", i: i, q: alle[i] }) };
  }
  function renderUeben(l, typ, titel, leerText) {
    var qs = u(l, typ); if (!qs.length && !(typ === "rechnen" && genFuer(l).length)) return leer(l, leerText);
    if (typ === "rechnen") return renderRechnen(l);
    P.i %= qs.length;
    P.cur = { lf: l.nr, typ: typ, i: P.i };
    return { cls: "single", html: kopf(titel, l, qs.length) + aufgabeHtml({ l: l, typ: typ, i: P.i, q: qs[P.i] }) };
  }

  /* ---------- 5 · Rechentrainer ---------- */
  function genFuer(l) { return RE.GEN; }
  function renderRechnen(l) {
    var qs = u(l, "rechnen"), quelle = S.rechenQuelle === "zufall" || !qs.length ? "zufall" : "lf";
    var gens = genFuer(l), passend = istZF(l) ? [] : gens.filter(function (g) { return g.lf.indexOf(l.nr) >= 0; });
    var seg = '<div class="seg seg-inline" role="group"><button data-rq="lf" aria-pressed="' + (quelle === "lf") + '"' + (qs.length ? "" : " disabled") + ">Aufgaben aus " + kurzName(l) + " · " + qs.length + '</button><button data-rq="zufall" aria-pressed="' + (quelle === "zufall") + '">Zufallsaufgaben</button></div>';
    if (quelle === "lf") {
      P.i %= qs.length; P.cur = { lf: l.nr, typ: "rechnen", i: P.i };
      return { cls: "single", html: kopf("Rechnen", l, qs.length) + seg + aufgabeHtml({ l: l, typ: "rechnen", i: P.i, q: qs[P.i] }) };
    }
    var gid = S.genId && gens.some(function (g) { return g.id === S.genId; }) ? S.genId : (passend[0] || gens[0]).id;
    var chips = '<div class="chips">' + gens.map(function (g) { return '<button class="chip-b' + (passend.indexOf(g) >= 0 ? " passend" : "") + '" data-gen="' + g.id + '" aria-pressed="' + (g.id === gid) + '">' + esc(g.name) + "</button>"; }).join("") + "</div>";
    if (!P.gen || P.gen.id !== gid) { P.gen = Object.assign({ id: gid }, gens.filter(function (g) { return g.id === gid; })[0].bau()); P.step = 0; P.shown = false; }
    P.cur = { gen: true };
    return { cls: "single", html: kopf("Rechnen", l, 0, " · Zufallsaufgabe") + seg + chips + '<p class="count">' + esc(P.gen.titel) + (passend.length ? " · hervorgehoben: passt zu " + kurzName(l) : "") + "</p>" + aufgabeHtml({ l: l, typ: "rechnen", q: P.gen }) };
  }

  /* ---------- 4 · Fehlerheft ---------- */
  function renderFehler(l) {
    var filter = S.fehlerFilter || "alle", liste = fehlerListe(filter);
    var seg = '<div class="seg seg-inline" role="group"><button data-ff="alle" aria-pressed="' + (filter === "alle") + '">Alle · ' + fehlerListe("alle").length + '</button><button data-ff="lf" aria-pressed="' + (filter === "lf") + '">Nur ' + kurzName(l) + " · " + fehlerListe("lf").length + "</button></div>";
    if (!liste.length) return { cls: "single", html: kopf("Fehlerheft") + seg + '<div class="empty-state"><b>Nichts im Fehlerheft</b>Falsche Antworten und Karten mit „Nicht gewusst“ landen automatisch hier. Wer zweimal hintereinander richtig liegt, fliegt raus.</div>' };
    P.i %= liste.length; var e = liste[P.i], el = lfById(e.lf), q = u(el, e.typ)[e.i], k = q.thema ? kapById(el, q.thema) : null;
    P.cur = { lf: e.lf, typ: e.typ, i: e.i, fehler: true };
    var info = '<p class="count">' + kurzName(el) + (k ? " · " + esc(k.titel.replace(/^LF\d\d · /, "")) : "") + " · " + { karten: "Karteikarte", mc: "Multiple Choice", rechnen: "Rechnen", frei: "Schreiben" }[e.typ] + " · " + e.serie + " von 2 richtig</p>";
    return { cls: "single", html: kopf("Fehlerheft", null, liste.length) + seg + info + aufgabeHtml({ l: el, typ: e.typ, i: e.i, q: q }) };
  }

  /* ---------- 6 · Operatoren-Training ---------- */
  function neueOpFrage() {
    var namen = Object.keys(OPERATOREN), richtig = namen[Math.floor(Math.random() * namen.length)];
    var andere = shuffle(namen.filter(function (n) { return n !== richtig; })).slice(0, 3), opts = shuffle(andere.concat(richtig));
    var richtung = Math.random() < 0.5 ? "def" : "op";
    return { richtung: richtung, richtig: richtig, opts: opts };
  }
  function renderOps() {
    if (!P.opf) P.opf = neueOpFrage();
    var f = P.opf, frage = f.richtung === "def" ? "Was verlangt der Operator „" + f.richtig + "“?" : "Welcher Operator passt? „" + OPERATOREN[f.richtig] + "“";
    var opts = f.opts.map(function (o, i) {
      var c = P.picked == null ? "" : (o === f.richtig ? " right" : (i === P.picked ? " wrong" : ""));
      return '<button class="opt' + c + '" data-oppick="' + i + '"' + (P.picked != null ? " disabled" : "") + '><span class="k">' + "ABCD"[i] + "</span><span>" + esc(f.richtung === "def" ? OPERATOREN[o] : o) + "</span></button>";
    }).join("");
    var stat = S.opsStat || { r: 0, n: 0 };
    var tabelle = '<details class="op-list"><summary>Alle Operatoren auf einen Blick</summary><dl>' + Object.keys(OPERATOREN).map(function (o) { return "<dt>" + o + "</dt><dd>" + OPERATOREN[o] + "</dd>"; }).join("") + "</dl></details>";
    return { cls: "single", html: kopf("Operatoren", null, 0, stat.n ? stat.r + " von " + stat.n + " richtig" : "") +
      '<div class="q"><p class="frage">' + esc(frage) + '</p><div class="opts">' + opts + "</div>" +
      (P.picked != null ? '<div class="feedback"><b>' + (f.opts[P.picked] === f.richtig ? "Richtig." : "Nicht ganz.") + "</b> " + f.richtig + ": " + OPERATOREN[f.richtig] + '</div><div class="pager plain"><span></span><button class="btn primary" data-act="opnext">Nächste Frage</button></div>' : "") + "</div>" + tabelle };
  }

  /* ---------- 7 · Lückentext ---------- */
  var STOP = /^(Der|Die|Das|Den|Dem|Des|Ein|Eine|Einen|Einem|Einer|Und|Oder|Aber|Wenn|Weil|Dass|Nur|Nicht|Kein|Keine|Bei|Mit|Nach|Vor|Für|Über|Unter|Ohne|Auch|Immer|Erst|Dann|Jede|Jeder|Jedes|Alle|Wer|Was|Wie|Wird|Werden|Sind|Ist|Hat|Haben|Kann|Muss|Darf|Sie|Er|Es|Ab|Bis|Je|Desto|Umso|Also)$/;
  function luecken(text) {
    /* Markierte Begriffe **…** haben Vorrang, sonst Zahlen (mit Einheit) und lange Hauptwörter. */
    var marks = [], m, re = /\*\*(.+?)\*\*/g;
    while ((m = re.exec(text))) marks.push(m[1]);
    var plain = ohneMarker(text);
    if (marks.length) return { text: plain, luecken: marks.slice(0, 3) };
    var kand = [], z = /\d[\d.,]*\s?(?:%|€|Euro|Monate?n?|Wochen|Jahre?n?|Tage?n?|Stunden)?/g;
    while ((m = z.exec(plain))) kand.push({ w: m[0].trim(), zahl: true });
    var w = /\b[A-ZÄÖÜ][a-zäöüß]+(?:-[A-ZÄÖÜa-zäöüß]+)*\b/g, nr = 0;
    while ((m = w.exec(plain))) { if (m.index > 0 && m[0].length >= 7 && !STOP.test(m[0])) kand.push({ w: m[0], zahl: false }); nr++; }
    var gesehen = {}, out = [];
    kand.sort(function (a, b) { return (b.zahl - a.zahl) || (b.w.length - a.w.length); }).forEach(function (c) { if (!gesehen[c.w] && out.length < 2) { gesehen[c.w] = 1; out.push(c.w); } });
    return { text: plain, luecken: out };
  }
  function lueckenFuer(l) {
    var out = [];
    echteKapitel(l).forEach(function (k) {
      (k.luecken || []).forEach(function (t) { var x = luecken(t); if (x.luecken.length) out.push({ k: k, t: x }); });
      if (!k.luecken && k.merksatz) { var x = luecken(k.merksatz); if (x.luecken.length) out.push({ k: k, t: x }); }
    });
    return out;
  }
  function renderLuecke(l) {
    var ls = lueckenFuer(l); if (!ls.length) return leer(l, "Für dieses Lernfeld gibt es noch keine Merksätze für Lückentexte.");
    P.i %= ls.length; var it = ls[P.i], t = it.t;
    if (!P.lu || P.lu.idx !== P.i) {
      var pool = []; ls.forEach(function (x) { pool = pool.concat(x.t.luecken); });
      P.lu = { idx: P.i, filled: {}, opts: t.luecken.map(function (w) {
        var istZahl = /^\d/.test(w), andere = shuffle(pool.filter(function (p) { return p !== w && /^\d/.test(p) === istZahl; }));
        while (andere.length < 2) andere.push(istZahl ? String(Math.max(1, (parseInt(w, 10) || 2) + (andere.length ? 2 : -1))) + w.replace(/^[\d.,]+/, "") : "Grundsatz");
        return shuffle([w, andere[0], andere[1]]);
      }) };
    }
    var html = esc(t.text), alleRichtig = true, slots = [];
    t.luecken.forEach(function (w, n) {
      var f = P.lu.filled[n], ok = f === w;
      if (!ok) alleRichtig = false;
      var slot = f == null ? '<span class="gap" data-gap="' + n + '">' + (P.lu.aktiv === n ? "…" : "_____") + "</span>" : '<span class="gap ' + (ok ? "ok" : "bad") + '" data-gap="' + n + '">' + esc(f) + "</span>";
      /* nur ganze Wörter bzw. Zahlen ersetzen, damit "1" nicht in "13,90" landet */
      var rw = new RegExp("(^|[^0-9A-Za-zÄÖÜäöüß,.])" + esc(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![0-9A-Za-zÄÖÜäöüß])");
      html = html.replace(rw, function (_, vor) { return vor + "\u0000" + n + "\u0000"; });
      slots[n] = slot;
    });
    html = html.replace(/\u0000(\d+)\u0000/g, function (_, n) { return slots[+n]; });
    var aktiv = P.lu.aktiv != null ? P.lu.aktiv : t.luecken.findIndex(function (w, n) { return P.lu.filled[n] !== w; });
    var wahl = aktiv >= 0 && !alleRichtig ? '<p class="count">Lücke ' + (aktiv + 1) + " von " + t.luecken.length + ' wählen:</p><div class="chips">' + P.lu.opts[aktiv].map(function (o) { return '<button class="chip-b big" data-lw="' + esc(o) + '" data-ln="' + aktiv + '">' + esc(o) + "</button>"; }).join("") + "</div>" : "";
    if (alleRichtig && !S.luecke[it.k.id]) { S.luecke[it.k.id] = true; save(); }
    return { cls: "single", html: kopf("Lückentext", l, ls.length) + '<div class="q"><div class="lbl">' + esc(it.k.titel.replace(/^LF\d\d · /, "")) + '</div><p class="luecke">' + html + "</p>" + wahl +
      (alleRichtig ? '<div class="feedback good"><b>Alles richtig.</b></div><div class="pager plain"><span></span><button class="btn primary" data-act="lnext">Nächster Satz</button></div>' : "") + "</div>" };
  }

  /* =====================================================================
     3 · Prüfungssimulation
     ===================================================================== */
  var SIMB = [{ id: "WISO", min: 60 }, { id: "VR", min: 90 }, { id: "FV", min: 90 }];
  function simPool(bid) {
    var pool = { mc: [], ung: [] };
    quellen(bereich(bid)).forEach(function (l) {
      u(l, "mc").forEach(function (_, i) { pool.mc.push({ lf: l.nr, typ: "mc", i: i }); });
      u(l, "frei").forEach(function (_, i) { pool.ung.push({ lf: l.nr, typ: "frei", i: i }); });
      u(l, "rechnen").forEach(function (_, i) { pool.ung.push({ lf: l.nr, typ: "rechnen", i: i }); });
    });
    return pool;
  }
  function simStart(bid) {
    var p = simPool(bid), n = Math.min(10, p.mc.length + p.ung.length);
    var nm = Math.min(p.mc.length, Math.round(n * 0.3)), nu = Math.min(p.ung.length, n - nm);
    nm = Math.min(p.mc.length, n - nu);
    var tasks = shuffle(shuffle(p.mc).slice(0, nm).concat(shuffle(p.ung).slice(0, nu)));
    var min = SIMB.filter(function (s) { return s.id === bid; })[0].min;
    S.simLauf = { bereich: bid, tasks: tasks, ans: {}, pts: {}, dauer: min * 60, verbraucht: 0, pause: false, phase: "run", j: 0 };
    save();
  }
  function fmtZeit(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function simAufgabe(sl, j, bewerten) {
    var t = sl.tasks[j], l = lfById(t.lf), q = u(l, t.typ)[t.i], a = sl.ans[j];
    var h = '<div class="q sim-q"><div class="sim-meta"><span class="count">Aufgabe ' + (j + 1) + " von " + sl.tasks.length + " · " + kurzName(l) + " · 10 Punkte</span>" + opBadge(q.operator) + '</div><p class="frage">' + esc(q.frage) + "</p>";
    if (t.typ === "mc") {
      h += '<div class="opts">' + q.optionen.map(function (o, i) {
        var c = bewerten ? (i === q.richtig ? " right" : (i === a ? " wrong" : "")) : (i === a ? " chosen" : "");
        return '<button class="opt' + c + '" data-simpick="' + i + '"' + (bewerten ? " disabled" : "") + '><span class="k">' + "ABCDEF"[i] + "</span><span>" + esc(o) + "</span></button>";
      }).join("") + "</div>";
      if (bewerten) h += '<div class="feedback">' + esc(q.erklaerung) + "</div>";
    } else if (t.typ === "rechnen") {
      h += '<div class="calc-row"><input id="simIn" data-simin="' + j + '" inputmode="decimal" placeholder="Ergebnis" aria-label="Ergebnis" value="' + esc(a || "") + '"' + (bewerten ? " disabled" : "") + '><span class="unit">' + esc(q.einheit) + "</span></div>";
      if (bewerten) h += '<div class="feedback"><b>Lösung: ' + esc(RE.de(q.ergebnis)) + " " + esc(q.einheit) + "</b><br>" + esc(q.weg || schritte(q).join(" ")) + "</div>";
    } else {
      h += '<textarea id="simIn" data-simin="' + j + '"' + (bewerten ? " disabled" : "") + ">" + esc(a || "") + "</textarea>";
      if (bewerten) h += '<div class="feedback"><b>Musterlösung:</b> ' + esc(q.loesung) + '</div><p class="count">Vergib dir selbst Punkte:</p><div class="pts">' + [0, 2, 4, 6, 8, 10].map(function (p) { return '<button class="chip-b" data-simpts="' + p + '" data-simj="' + j + '" aria-pressed="' + (sl.pts[j] === p) + '">' + p + "</button>"; }).join("") + "</div>";
    }
    return h + "</div>";
  }
  function simAutoPunkte(sl) {
    sl.tasks.forEach(function (t, j) {
      var q = u(lfById(t.lf), t.typ)[t.i];
      if (t.typ === "mc") sl.pts[j] = sl.ans[j] === q.richtig ? 10 : 0;
      if (t.typ === "rechnen") { var n = zahl(sl.ans[j]); sl.pts[j] = !isNaN(n) && Math.abs(n - q.ergebnis) <= (q.toleranz || 0.01) ? 10 : 0; }
    });
  }
  function renderSim() {
    var sl = S.simLauf;
    if (!sl) {
      var karten = SIMB.map(function (s) {
        var b = bereich(s.id), p = simPool(s.id), n = p.mc.length + p.ung.length;
        return '<button class="sim-pick" data-simstart="' + s.id + '"' + (n < 3 ? " disabled" : "") + "><b>" + esc(b.name) + "</b><span>" + s.min + " Minuten · " + (n < 3 ? "noch zu wenige Aufgaben" : Math.min(10, n) + " Aufgaben aus " + n) + "</span><span class=\"count\">Prüfung " + tageText(tageBis(b.datum)) + "</span></button>";
      }).join("");
      var hist = S.sims.length ? '<h2 class="section-h">Bisherige Simulationen</h2>' + simVerlauf() : "";
      return { cls: "single", html: kopf("Prüfungssimulation") + '<p class="lead">Wie in der IHK-Prüfung: Aufgaben aus allen Lernfeldern eines Bereichs, etwa 30 % gebunden und 70 % ungebunden, mit Zeitlimit. Am Ende bekommst du Punkte und die Note nach IHK-Schlüssel.</p><div class="sim-grid">' + karten + "</div>" + hist };
    }
    var b = bereich(sl.bereich);
    if (sl.phase === "run") {
      var nav = '<div class="sim-nav">' + sl.tasks.map(function (t, j) { return '<button data-simj="' + j + '" aria-current="' + (j === sl.j) + '" class="' + (sl.ans[j] != null && sl.ans[j] !== "" ? "done" : "") + '">' + (j + 1) + "</button>"; }).join("") + "</div>";
      return { cls: "single", html: '<div class="sim-bar"><div><b>' + esc(b.name) + '</b><span class="count">Probeprüfung</span></div><div class="timer num" id="simTimer">' + fmtZeit(sl.dauer - sl.verbraucht) + '</div><button class="btn" data-act="simpause">' + (sl.pause ? "Weiter" : "Pause") + "</button></div>" + nav +
        (sl.pause ? '<div class="empty-state"><b>Pause</b>Die Zeit steht. Weiter geht es mit „Weiter“.</div>' : simAufgabe(sl, sl.j, false)) +
        '<div class="pager"><button class="btn" data-act="simprev"' + (sl.j === 0 ? " disabled" : "") + '>Zurück</button><button class="btn" data-act="simabbruch">Abbrechen</button>' + (sl.j < sl.tasks.length - 1 ? '<button class="btn primary" data-act="simnext">Weiter</button>' : '<button class="btn primary" data-act="simabgabe">Abgeben</button>') + "</div>" };
    }
    if (sl.phase === "rate") {
      var offen = sl.tasks.filter(function (t, j) { return t.typ === "frei" && sl.pts[j] == null; }).length;
      return { cls: "single", html: kopf("Auswertung", null, 0, esc(b.name)) + '<p class="lead">Gebundene Aufgaben und Rechnungen sind schon bewertet. Bewerte deine Textantworten selbst anhand der Musterlösung.</p>' +
        sl.tasks.map(function (_, j) { return simAufgabe(sl, j, true); }).join("") +
        '<div class="pager"><span class="count">' + (offen ? "Noch " + offen + " Antwort" + (offen === 1 ? "" : "en") + " zu bewerten" : "Alles bewertet") + '</span><button class="btn primary" data-act="simfertig"' + (offen ? " disabled" : "") + ">Ergebnis zeigen</button></div>" };
    }
    return { cls: "single", html: "" };
  }
  function simVerlauf() {
    return '<div class="tbl-wrap"><table><thead><tr><th>Datum</th><th>Bereich</th><th>Punkte</th><th>Note</th></tr></thead><tbody>' + S.sims.slice().reverse().map(function (s) {
      return "<tr><td class=\"num\">" + datumDE(s.datum) + "</td><td>" + esc(bereich(s.bereich).kurz) + (s.bp ? ' <span class="count">Beispiel</span>' : "") + '</td><td class="num">' + s.pct + " %</td><td>" + s.note + " · " + NOTENNAME[s.note] + "</td></tr>";
    }).join("") + "</tbody></table></div>";
  }
  function simTick() {
    var sl = S.simLauf; if (!sl || sl.phase !== "run" || sl.pause) return;
    sl.verbraucht += 1;
    var el = $("#simTimer"); if (el) { el.textContent = fmtZeit(sl.dauer - sl.verbraucht); el.classList.toggle("knapp", sl.dauer - sl.verbraucht <= 300); }
    if (sl.verbraucht % 10 === 0) save();
    if (sl.verbraucht >= sl.dauer) { simAutoPunkte(sl); sl.phase = "rate"; save(); if (S.mode === "sim") render(); }
  }
  function simErgebnisHtml(r) {
    return '<div class="result"><div class="result-n num">' + r.pct + ' %</div><div><b>Note ' + r.note + " · " + NOTENNAME[r.note] + '</b><span class="count">' + esc(bereich(r.bereich).name) + " · " + r.punkte + " von " + r.max + " Punkten</span></div></div>";
  }

  /* =====================================================================
     12 · Beispielprüfungen (komplette Prüfungssätze aus data/beispielpruefungen.js)
     Gebunden: MC und Zuordnen werden automatisch bewertet (Zuordnen anteilig).
     Ungebunden: Rechnungen mit richtigem Ergebnis automatisch, sonst und bei Text selbst bewerten.
     ===================================================================== */
  var BP = window.BEISPIELPRUEFUNGEN || [];
  function bpById(id) { return BP.filter(function (b) { return b.id === id; })[0]; }
  function bpSeiten(p) { /* eine Seite je gebundener Aufgabe und je Fall */
    var out = [];
    p.teile.forEach(function (t) { t.aufgaben.forEach(function (a) { out.push({ art: t.art, a: a, teil: t.name }); }); });
    return out;
  }
  function bpFelder(p) { /* alle bewertbaren Einheiten mit Schlüssel */
    var out = [];
    bpSeiten(p).forEach(function (s) {
      if (s.a.teilaufgaben) s.a.teilaufgaben.forEach(function (x) { out.push({ key: "u" + s.a.nr + x.nr, q: x }); });
      else out.push({ key: "g" + s.a.nr, q: s.a });
    });
    return out;
  }
  function bpStart(id) {
    var p = bpById(id), ord = {};
    bpFelder(p).forEach(function (f) { if (f.q.typ === "zuordnen") ord[f.key] = shuffle(f.q.paare.map(function (_, i) { return i; })); });
    S.bpLauf = { id: id, ans: {}, pts: {}, ord: ord, dauer: p.minuten * 60, verbraucht: 0, pause: false, phase: "run", j: 0 };
    S.bpErgebnis = null;
  }
  function bpAuto(bl) {
    var p = bpById(bl.id);
    bpFelder(p).forEach(function (f) {
      var q = f.q, a = bl.ans[f.key];
      if (q.typ === "mc") bl.pts[f.key] = a === q.richtig ? q.punkte : 0;
      else if (q.typ === "zuordnen") { var r = 0; q.paare.forEach(function (_, i) { if (a && a[i] === i) r++; }); bl.pts[f.key] = Math.round(q.punkte * r / q.paare.length * 2) / 2; }
      else if (q.typ === "rechnen") { var n = zahl(a == null ? "" : a); if (!isNaN(n) && Math.abs(n - q.ergebnis) <= (q.toleranz || 0.01)) bl.pts[f.key] = q.punkte; else delete bl.pts[f.key]; }
    });
    bl.richtigAuto = {};
    bpFelder(p).forEach(function (f) { if (f.q.typ === "rechnen" && bl.pts[f.key] === f.q.punkte) bl.richtigAuto[f.key] = true; });
  }
  function bpOffen(bl) {
    return bpFelder(bpById(bl.id)).filter(function (f) { return (f.q.typ === "frei" || f.q.typ === "rechnen") && bl.pts[f.key] == null; }).length;
  }
  function bpPunkteKnoepfe(key, max, gew) {
    var h = '<p class="count">Vergib dir selbst Punkte (höchstens ' + max + "):</p><div class=\"pts\">";
    for (var p = 0; p <= max; p++) h += '<button class="chip-b" data-bppts="' + p + '" data-bpkey="' + key + '" aria-pressed="' + (gew === p) + '">' + p + "</button>";
    return h + "</div>";
  }
  function bpFeld(bl, key, q, bewerten) {
    var a = bl.ans[key], h = "";
    var pts = bewerten && bl.pts[key] != null ? ' · <b class="num">' + String(bl.pts[key]).replace(".", ",") + " / " + q.punkte + " P</b>" : "";
    h += '<div class="sim-meta"><span class="count">' + q.punkte + " Punkte" + pts + "</span>" + (q.operator ? opBadge(q.operator) : "") + '</div><p class="frage">' + fett(q.frage) + "</p>";
    if (q.typ === "mc") {
      h += '<div class="opts">' + q.optionen.map(function (o, i) {
        var c = bewerten ? (i === q.richtig ? " right" : (i === a ? " wrong" : "")) : (i === a ? " chosen" : "");
        return '<button class="opt' + c + '" data-bppick="' + i + '" data-bpkey="' + key + '"' + (bewerten ? " disabled" : "") + '><span class="k">' + "ABCDEF"[i] + "</span><span>" + esc(o) + "</span></button>";
      }).join("") + "</div>";
      if (bewerten && q.erklaerung) h += '<div class="feedback">' + esc(q.erklaerung) + "</div>";
    } else if (q.typ === "zuordnen") {
      var ord = bl.ord[key] || q.paare.map(function (_, i) { return i; });
      h += '<div class="zuordnen">' + q.paare.map(function (pr, i) {
        var gew = a ? a[i] : null, ok = bewerten ? (gew === i ? " right" : " wrong") : "";
        return '<label class="zu-row' + ok + '"><span class="zu-l">' + esc(pr[0]) + '</span><select data-bpzu="' + i + '" data-bpkey="' + key + '"' + (bewerten ? " disabled" : "") + '><option value="">Bitte wählen</option>' +
          ord.map(function (r) { return '<option value="' + r + '"' + (gew === r ? " selected" : "") + ">" + esc(q.paare[r][1]) + "</option>"; }).join("") + "</select></label>";
      }).join("") + "</div>";
      if (bewerten) h += '<div class="feedback"><b>Richtig:</b> ' + q.paare.map(function (pr) { return esc(pr[0]) + " → " + esc(pr[1]); }).join("; ") + (q.erklaerung ? "<br>" + esc(q.erklaerung) : "") + "</div>";
    } else if (q.typ === "rechnen") {
      h += '<div class="calc-row"><input data-bpin="' + key + '" inputmode="decimal" placeholder="Ergebnis" aria-label="Ergebnis" value="' + esc(a || "") + '"' + (bewerten ? " disabled" : "") + '><span class="unit">' + esc(q.einheit || "") + "</span></div>";
      if (bewerten) {
        h += '<div class="feedback"><b>Lösung: ' + esc(RE.de(q.ergebnis)) + " " + esc(q.einheit || "") + "</b><br>" + esc(q.weg || q.loesung || "") + (q.bewertung ? '<br><span class="count">' + esc(q.bewertung) + "</span>" : "") + "</div>";
        if (!(bl.richtigAuto && bl.richtigAuto[key])) h += '<p class="count">Ergebnis stimmt nicht. Für einen richtigen Rechenweg gibt es in der IHK Teilpunkte.</p>' + bpPunkteKnoepfe(key, q.punkte, bl.pts[key]);
      }
    } else {
      h += '<textarea data-bpin="' + key + '"' + (bewerten ? " disabled" : "") + ">" + esc(a || "") + "</textarea>";
      if (bewerten) h += '<div class="feedback"><b>Musterlösung:</b> ' + esc(q.loesung) + (q.bewertung ? '<br><span class="count">Bewertung: ' + esc(q.bewertung) + "</span>" : "") + "</div>" + bpPunkteKnoepfe(key, q.punkte, bl.pts[key]);
    }
    return h;
  }
  function bpSeiteHtml(bl, s, bewerten) {
    var a = s.a, h = '<div class="q sim-q bp-q">';
    if (a.teilaufgaben) {
      h += '<div class="bp-lbl">' + esc(s.teil) + " · Fall " + a.nr + " · " + a.punkte + " Punkte</div><h2 class=\"bp-fall\">" + esc(a.titel || "") + '</h2><p class="situation">' + fett(a.situation || "") + "</p>" +
        a.teilaufgaben.map(function (x) { return '<div class="teil"><span class="teil-nr">' + esc(x.nr) + ")</span>" + bpFeld(bl, "u" + a.nr + x.nr, x, bewerten) + "</div>"; }).join("");
    } else {
      h += '<div class="bp-lbl">' + esc(s.teil) + " · Aufgabe " + a.nr + "</div>" + bpFeld(bl, "g" + a.nr, a, bewerten);
    }
    return h + "</div>";
  }
  function bpBeantwortet(bl, s) {
    var keys = s.a.teilaufgaben ? s.a.teilaufgaben.map(function (x) { return "u" + s.a.nr + x.nr; }) : ["g" + s.a.nr];
    return keys.every(function (k) { var v = bl.ans[k]; return v != null && v !== "" && !(Array.isArray(v) && v.some(function (x) { return x == null; })); });
  }
  function renderBp() {
    var bl = S.bpLauf;
    if (S.bpErgebnis) {
      var r = S.bpErgebnis;
      return { cls: "single", html: kopf("Ergebnis") + simErgebnisHtml(r) + (r.teile ? '<dl class="kv bp-kv">' + r.teile.map(function (t) { return "<dt>" + esc(t.name) + '</dt><dd class="num">' + String(t.p).replace(".", ",") + " / " + t.max + "</dd>"; }).join("") + "</dl>" : "") +
        '<div class="pager plain"><button class="btn" data-act="bpneu">Andere Beispielprüfung</button><button class="btn primary" data-mode="stand">Zu Mein Stand</button></div>' };
    }
    if (!bl) {
      if (!BP.length) return { cls: "single", html: kopf("Beispielprüfungen") + '<div class="empty-state"><b>Noch keine Beispielprüfungen</b>Sie erscheinen hier, sobald sie eingetragen sind.</div>' };
      var karten = BP.map(function (p) {
        var b = bereich(p.bereich), alt = S.sims.filter(function (s) { return s.bp === p.id; }), letzt = alt[alt.length - 1];
        return '<div class="bp-card"><div class="bp-top"><div><b>' + esc(p.titel) + '</b><span class="count">' + (b && b.datum ? "Prüfung " + tageText(tageBis(b.datum)) : p.minuten + " Minuten") + "</span></div>" +
          (letzt ? '<span class="tag">Zuletzt ' + letzt.pct + " % · Note " + letzt.note + "</span>" : "") + "</div>" +
          '<p class="hint">' + esc(p.ablauf) + "</p>" +
          (p.hinweise && p.hinweise.length ? '<details class="bp-hinw"><summary>Hinweise vor dem Start</summary><ul>' + p.hinweise.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></details>" : "") +
          '<div class="bp-foot">' + (p.ergaenzt ? '<span class="tag soft">Ergänzt</span>' : "<span></span>") + '<button class="btn primary" data-bpstart="' + esc(p.id) + '">Prüfung starten</button></div></div>';
      }).join("");
      return { cls: "single", html: kopf("Beispielprüfungen") + '<p class="lead">Komplette Prüfungssätze wie am Prüfungstag: gebundener Teil (30 Punkte) und ungebundene Fälle (70 Punkte), mit Zeitlimit. Danach bewertest du deine Textantworten anhand der Musterlösung selbst.</p><div class="bp-list">' + karten + "</div>" };
    }
    var p = bpById(bl.id), seiten = bpSeiten(p);
    if (!p) { S.bpLauf = null; return renderBp(); }
    if (bl.phase === "run") {
      var nav = '<div class="sim-nav">' + seiten.map(function (s, j) { return (j && s.art !== seiten[j - 1].art ? '<span class="nav-sep"></span>' : "") + '<button data-bpj="' + j + '" aria-current="' + (j === bl.j) + '" class="' + (bpBeantwortet(bl, s) ? "done" : "") + '" title="' + esc(s.teil) + '">' + (s.art === "ungebunden" ? "F" + s.a.nr : s.a.nr) + "</button>"; }).join("") + "</div>";
      return { cls: "single", html: '<div class="sim-bar"><div><b>' + esc(p.titel) + '</b><span class="count">Beispielprüfung</span></div><div class="timer num" id="bpTimer">' + fmtZeit(bl.dauer - bl.verbraucht) + '</div><button class="btn" data-act="bppause">' + (bl.pause ? "Weiter" : "Pause") + "</button></div>" + nav +
        (bl.pause ? '<div class="empty-state"><b>Pause</b>Die Zeit steht. Weiter geht es mit „Weiter“.</div>' : bpSeiteHtml(bl, seiten[bl.j], false)) +
        '<div class="pager"><button class="btn" data-act="bpprev"' + (bl.j === 0 ? " disabled" : "") + '>Zurück</button><button class="btn" data-act="bpabbruch">Abbrechen</button>' + (bl.j < seiten.length - 1 ? '<button class="btn primary" data-act="bpnext">Weiter</button>' : '<button class="btn primary" data-act="bpabgabe">Abgeben</button>') + "</div>" };
    }
    var offen = bpOffen(bl);
    return { cls: "single", html: kopf("Auswertung", null, 0, esc(p.titel)) + '<p class="lead">Multiple Choice, Zuordnungen und richtige Rechenergebnisse sind schon bewertet. Bewerte deine Textantworten und falsche Rechnungen selbst.</p>' +
      seiten.map(function (s) { return bpSeiteHtml(bl, s, true); }).join("") +
      '<div class="pager"><span class="count">' + (offen ? "Noch " + offen + " Antwort" + (offen === 1 ? "" : "en") + " zu bewerten" : "Alles bewertet") + '</span><button class="btn primary" data-act="bpfertig"' + (offen ? " disabled" : "") + ">Ergebnis zeigen</button></div>" };
  }
  function bpTick() {
    var bl = S.bpLauf; if (!bl || bl.phase !== "run" || bl.pause) return;
    bl.verbraucht += 1;
    var el = $("#bpTimer"); if (el) { el.textContent = fmtZeit(bl.dauer - bl.verbraucht); el.classList.toggle("knapp", bl.dauer - bl.verbraucht <= 300); }
    if (bl.verbraucht % 10 === 0) save();
    if (bl.verbraucht >= bl.dauer) { bpAuto(bl); bl.phase = "rate"; save(); if (S.mode === "bp") render(); }
  }
  function bpFertig() {
    var bl = S.bpLauf, p = bpById(bl.id), sum = 0, teile = [];
    p.teile.forEach(function (t) {
      var ts = 0;
      t.aufgaben.forEach(function (a) { (a.teilaufgaben ? a.teilaufgaben.map(function (x) { return "u" + a.nr + x.nr; }) : ["g" + a.nr]).forEach(function (k) { ts += bl.pts[k] || 0; }); });
      teile.push({ name: t.name, p: ts, max: t.punkte }); sum += ts;
    });
    var max = p.punkte || 100, pct = Math.round(sum / max * 100);
    var r = { datum: heute(), bereich: p.bereich, pct: pct, note: note(pct), punkte: sum, max: max, bp: p.id, teile: teile };
    S.sims.push(r); S.bpErgebnis = r; S.bpLauf = null;
  }

  /* =====================================================================
     11 · Mein Stand
     ===================================================================== */
  function bereichDetails(b) {
    var ks = 0, gel = 0, geuebt = 0, mcR = 0, mcN = 0;
    quellen(b).forEach(function (l) {
      echteKapitel(l).forEach(function (k) {
        ks++; if (S.gelesen[k.id]) gel++;
        if (TYPEN.some(function (t) { return u(l, t).some(function (q, i) { return q.thema === k.id && S[t][ikey(l, i)] !== undefined; }); }) || S.luecke[k.id]) geuebt++;
      });
      u(l, "mc").forEach(function (_, i) { var v = S.mc[ikey(l, i)]; if (v !== undefined) { mcN++; if (v === true) mcR++; } });
    });
    return { ks: ks, gel: ks ? Math.round(gel / ks * 100) : 0, geuebt: ks ? Math.round(geuebt / ks * 100) : 0, mc: mcN ? Math.round(mcR / mcN * 100) : null, mcN: mcN };
  }
  function ampel(l) {
    var f = fortschritt(l); if (!f.total) return "leer";
    var r = 0, n = 0; u(l, "mc").forEach(function (_, i) { var v = S.mc[ikey(l, i)]; if (v !== undefined) { n++; if (v) r++; } });
    var wert = n ? (f.pct + r / n * 100) / 2 : f.pct;
    return wert >= 67 ? "gut" : wert >= 34 ? "mittel" : "offen";
  }
  function schwaechen() {
    var liste = [];
    alleQuellen().forEach(function (l) {
      echteKapitel(l).forEach(function (k, ki) {
        var falsch = 0, richtig = 0;
        TYPEN.forEach(function (t) { u(l, t).forEach(function (q, i) { if (q.thema !== k.id) return; var v = S[t][ikey(l, i)]; if (v === undefined) return; if (v === true || v === 2) richtig++; else if (v === false || v === 0) falsch++; }); });
        Object.keys(S.fehler).forEach(function (fk) { var e = S.fehler[fk]; if (e.lf === l.nr) { var q = u(l, e.typ)[e.i]; if (q && q.thema === k.id) falsch++; } });
        if (falsch) liste.push({ l: l, k: k, ki: ki, score: falsch / (falsch + richtig + 1), falsch: falsch });
      });
    });
    return liste.sort(function (a, b) { return b.score - a.score || b.falsch - a.falsch; }).slice(0, 5);
  }
  function renderStand() {
    var tiles = ["WISO", "VR", "FV"].map(function (id) {
      var b = bereich(id), d = bereichDetails(b), p = bereichPct(b);
      return '<div class="stat"><div class="stat-top"><div><div class="lbl">' + esc(b.name) + '</div><div class="sub">Prüfung ' + tageText(tageBis(b.datum)) + "</div></div>" + ring(p.pct, 52, p.pct + " % der Themen bearbeitet") + "</div>" +
        '<dl class="kv"><dt>Gelesen</dt><dd class="num">' + (d.ks ? d.gel + " %" : "–") + '</dd><dt>Geübt</dt><dd class="num">' + (d.ks ? d.geuebt + " %" : "–") + '</dd><dt>MC-Quote</dt><dd class="num">' + (d.mc == null ? "–" : d.mc + " %") + "</dd></dl></div>";
    }).join("");
    var schw = schwaechen();
    var nachlegen = schw.length ? '<div class="lf-rows">' + schw.map(function (s) { return '<button class="lf-row slim" data-goto="' + esc(s.k.id) + '" data-glf="' + s.l.nr + '"><span class="lf-no">' + kurzName(s.l) + '</span><span class="lf-name">' + esc(s.k.titel.replace(/^LF\d\d · /, "")) + '</span><span class="count num">' + s.falsch + " Fehler</span></button>"; }).join("") + "</div>"
      : '<p class="hint">Noch keine Schwächen erkannt. Sobald du übst, erscheinen hier die Kapitel mit den meisten Fehlern.</p>';
    var zeit = [], max = 1;
    for (var i = 6; i >= 0; i--) { var d = new Date(); d.setDate(d.getDate() - i); var k2 = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); var m = Math.round((S.zeit[k2] || 0) / 60); max = Math.max(max, m); zeit.push({ t: d.toLocaleDateString("de-DE", { weekday: "short" }), m: m }); }
    var heuteMin = zeit[6].m, woche = zeit.reduce(function (a, z) { return a + z.m; }, 0);
    var zeitHtml = '<div class="zeit"><div class="zeit-bars">' + zeit.map(function (z) { return '<div class="zb"><i style="height:' + Math.max(3, Math.round(z.m / max * 100)) + '%" title="' + z.m + ' Min."></i><span>' + z.t + "</span></div>"; }).join("") + '</div><div class="zeit-sum"><b class="num">' + heuteMin + ' Min.</b><span class="count">heute</span><b class="num">' + (woche >= 60 ? Math.floor(woche / 60) + " Std. " + (woche % 60) + " Min." : woche + " Min.") + '</b><span class="count">letzte 7 Tage</span></div></div>';
    function standZeile(l, fertig) {
      var f = fortschritt(l), a = fertig ? "fertig" : ampel(l);
      return '<button class="lf-row' + (istZF(l) ? " zf" : "") + '" data-lf="' + esc(l.nr) + '">' + (istZF(l) ? "" : '<span class="lf-no">' + esc(kurzName(l)) + "</span>") + '<span class="lf-name"><i class="amp ' + a + '" title="' + { gut: "Läuft gut", mittel: "Teilweise", offen: "Noch offen", leer: "Inhalt folgt", fertig: "Abgeschlossen" }[a] + '"></i>' + esc(istZF(l) ? langName(l) : l.titel) + '</span><span class="meter"><i style="width:' + (fertig ? 100 : f.pct) + '%"></i></span><span class="num pct">' + (fertig ? "✓" : f.total ? f.pct + "\u00a0%" : "–") + "</span></button>";
    }
    var zfRows = ZF.filter(function (z) { return kapitel(z).length && z.bereich !== "ALLE"; }).map(function (z) { return standZeile(z, false); }).join("");
    var rows = (zfRows ? '<div class="lf-rows">' + zfRows + '</div><h3 class="h-sep">Einzelne Lernfelder</h3>' : "") +
      '<div class="lf-rows">' + LF.filter(function (l) { return !abgeschlossen(l); }).map(function (l) { return standZeile(l, false); }).join("") + "</div>" +
      '<h3 class="h-sep">Abgeschlossen</h3><div class="lf-rows">' + LF.filter(abgeschlossen).map(function (l) { return standZeile(l, true); }).join("") + "</div>";
    return { cls: "single", html: '<div class="practice-head"><h1>Mein Stand</h1></div>' +
      '<h2 class="section-h">Prüfungsbereiche</h2><div class="stats">' + tiles + "</div>" +
      '<div class="two"><section><h2 class="section-h">Hier nachlegen</h2>' + nachlegen + '</section><section><h2 class="section-h">Lernzeit</h2>' + zeitHtml + "</section></div>" +
      (S.sims.length ? '<h2 class="section-h">Prüfungssimulationen</h2>' + simVerlauf() : "") +
      '<h2 class="section-h">Lerninhalte</h2><div class="legend"><span><i class="amp gut"></i>läuft gut</span><span><i class="amp mittel"></i>teilweise</span><span><i class="amp offen"></i>noch offen</span><span><i class="amp leer"></i>Inhalt folgt</span><span><i class="amp fertig"></i>abgeschlossen</span></div>' + rows +
      '<div class="settings"><button class="btn" data-act="theme">Hell / Dunkel</button><button class="btn" data-act="reset">Stand zurücksetzen</button></div>' };
  }

  /* =====================================================================
     Rendern und Bedienung
     ===================================================================== */
  function render() {
    renderBar();
    document.documentElement.dataset.schrift = S.einst.schrift;
    var fokus = S.mode === "lesen" && S.fokus;
    document.body.classList.toggle("fokus", !!fokus); $("#fokusExit").hidden = !fokus;
    var l = lfById(S.lf), v;
    P.cur = null;
    switch (S.mode) {
      case "heute": v = renderHeute(); break;
      case "kurz": v = renderKurz(l); break;
      case "karten": v = renderKarten(l); break;
      case "luecke": v = renderLuecke(l); break;
      case "mc": v = renderUeben(l, "mc", "Multiple Choice", "Noch keine Multiple-Choice-Fragen für dieses Lernfeld."); break;
      case "rechnen": v = renderUeben(l, "rechnen", "Rechnen", "Für dieses Lernfeld gibt es noch keine Rechenaufgaben."); break;
      case "frei": v = renderUeben(l, "frei", "Schreiben", "Für dieses Lernfeld gibt es noch keine ungebundenen Aufgaben."); break;
      case "ops": v = renderOps(); break;
      case "fehler": v = renderFehler(l); break;
      case "sim": v = S.simErgebnis ? { cls: "single", html: kopf("Ergebnis") + simErgebnisHtml(S.simErgebnis) + '<div class="pager plain"><button class="btn" data-act="simneu">Neue Simulation</button><button class="btn primary" data-mode="stand">Zu Mein Stand</button></div>' } : renderSim(); break;
      case "bp": v = renderBp(); break;
      case "stand": v = renderStand(); break;
      default: v = renderLesen(l);
    }
    var m = $("#main"); m.className = "main " + v.cls; m.innerHTML = v.html;
  }
  function go(fn) { fn(); save(); render(); }
  function resetPractice() { P = { i: 0, turned: false, picked: null, shown: false, step: 0 }; }
  function nextItem() { P.i++; P.turned = false; P.picked = null; P.shown = false; P.step = 0; P.lu = null; }
  function nach(fn) { var y = window.scrollY; fn(); window.scrollTo(0, y); }
  /* Nach einer Antwort: im Fehlerheft verschwindet die Aufgabe ggf. aus der Liste, daher Index halten */
  function weiterNachAntwort(cur) { if (cur && cur.fehler) { P.turned = false; P.picked = null; P.shown = false; P.step = 0; if (S.fehler[fKey(lfById(cur.lf), cur.typ, cur.i)]) P.i++; } else nextItem(); }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("button, [data-gap]"); if (!t) return;
    var ds = t.dataset, l = lfById(S.lf), key = lkey(l), cur = P.cur, cl = cur && cur.lf != null ? lfById(cur.lf) : null;
    if (t.id === "lfBtn") return openLf();
    if (t.id === "modeBtn") return openMode();
    if (t.id === "searchBtn") return openSearch();
    if (t.id === "brandBtn") { closeSheets(); return go(function () { S.mode = "heute"; S.fokus = false; }); }
    if (t.id === "fokusExit") return go(function () { S.fokus = false; });
    if (ds.ansicht) { S.lfAnsicht = ds.ansicht; save(); return openLf(); }
    if (ds.stab) { suchTab = ds.stab; return openSearch(); }
    if (ds.hit) { var h = trefferCache[+ds.hit]; return springe(h.l, h.ziel); }
    if (ds.gl) { var g = glossCache[+ds.gl]; return springe(g.l, { mode: "lesen", kap: g.kap }); }
    if (ds.lf) { closeSheets(); resetPractice(); return go(function () { S.lf = lfWert(ds.lf); if (["stand", "heute", "ops", "sim", "bp"].indexOf(S.mode) >= 0) S.mode = "lesen"; window.scrollTo(0, 0); }); }
    if (ds.mode) { closeSheets(); resetPractice(); return go(function () { S.mode = ds.mode; S.fokus = false; if (ds.mode === "sim") S.simErgebnis = null; if (ds.mode === "bp") S.bpErgebnis = null; window.scrollTo(0, 0); }); }
    if (ds.goto) { var gl = lfById(lfWert(ds.glf)); return springe(gl, { mode: "lesen", kap: kapIndex(gl, ds.goto) }); }
    if (ds.tick) return go(function () { var id = ds.tick; S.gelesen[id] = !S.gelesen[id]; if (S.gelesen[id]) S.gelesenAm[id] = heute(); else delete S.gelesenAm[id]; });
    if (ds.quick) { resetPractice(); return go(function () { var fb = fokusBereiche(); if (ds.quick === "karten" && fb) { var q = quellen(bereich(fb.ids[0]))[0]; if (q) S.lf = q.nr; S.kartenAlle = false; } S.mode = ds.quick; if (ds.quick === "sim") S.simErgebnis = null; window.scrollTo(0, 0); }); }
    if (ds.kap) return go(function () { S.ganz = false; S.kap[key] = +ds.kap; window.scrollTo(0, 0); });
    if (ds.schrift) return go(function () { S.einst.schrift = +ds.schrift; });
    if (ds.kalle) { P.i = 0; P.turned = false; return go(function () { S.kartenAlle = ds.kalle === "1"; }); }
    if (ds.rq) { resetPractice(); return go(function () { S.rechenQuelle = ds.rq; }); }
    if (ds.gen) { P.gen = null; return go(function () { S.genId = ds.gen; S.rechenQuelle = "zufall"; }); }
    if (ds.ff) { P.i = 0; return go(function () { S.fehlerFilter = ds.ff; }); }
    if (ds.opinfo) { var tip = t.parentNode.querySelector(".op-tip"); if (tip) { tip.hidden = !tip.hidden; t.setAttribute("aria-expanded", String(!tip.hidden)); } return; }
    if (ds.rate && cur) return nach(function () { go(function () { verbuchen(cl, "karten", cur.i, +ds.rate === 2, +ds.rate); weiterNachAntwort(cur); }); });
    if (ds.frei && cur) return nach(function () { go(function () { verbuchen(cl, "frei", cur.i, +ds.frei === 2, +ds.frei); weiterNachAntwort(cur); }); });
    if (ds.pick && cur) return nach(function () { go(function () { P.picked = +ds.pick; verbuchen(cl, "mc", cur.i, P.picked === u(cl, "mc")[cur.i].richtig); }); });
    if (ds.oppick) return nach(function () { P.picked = +ds.oppick; var st = S.opsStat || { r: 0, n: 0 }; st.n++; if (P.opf.opts[P.picked] === P.opf.richtig) st.r++; S.opsStat = st; save(); render(); });
    if (ds.lw != null && ds.ln != null) return nach(function () { P.lu.filled[+ds.ln] = ds.lw; P.lu.aktiv = null; render(); });
    if (ds.gap != null && P.lu) return nach(function () { P.lu.aktiv = +ds.gap; delete P.lu.filled[+ds.gap]; render(); });
    if (ds.bpstart) { bpStart(ds.bpstart); return go(function () { S.mode = "bp"; window.scrollTo(0, 0); }); }
    if (ds.bpj != null) return go(function () { S.bpLauf.j = +ds.bpj; window.scrollTo(0, 0); });
    if (ds.bppick != null) return nach(function () { go(function () { S.bpLauf.ans[ds.bpkey] = +ds.bppick; }); });
    if (ds.bppts != null) return nach(function () { go(function () { S.bpLauf.pts[ds.bpkey] = +ds.bppts; }); });
    if (ds.simstart) { simStart(ds.simstart); return go(function () { window.scrollTo(0, 0); }); }
    if (ds.simj != null && ds.simpts == null) return go(function () { S.simLauf.j = +ds.simj; });
    if (ds.simpick != null) return nach(function () { go(function () { S.simLauf.ans[S.simLauf.j] = +ds.simpick; }); });
    if (ds.simpts != null) return nach(function () { go(function () { S.simLauf.pts[+ds.simj] = +ds.simpts; }); });
    var a = ds.act, ks = kapitel(l), idx = Math.min(S.kap[key] || 0, Math.max(0, ks.length - 1));
    if (!a) return;
    if (a === "weiter") go(function () { S.kap[key] = Math.min(idx + 1, ks.length - 1); window.scrollTo(0, 0); });
    else if (a === "zurueck") go(function () { S.kap[key] = Math.max(idx - 1, 0); window.scrollTo(0, 0); });
    else if (a === "gelesen") go(function () { var id = ks[idx].id; S.gelesen[id] = !S.gelesen[id]; if (S.gelesen[id]) S.gelesenAm[id] = heute(); else delete S.gelesenAm[id]; });
    else if (a === "ganz") go(function () { S.ganz = !S.ganz; });
    else if (a === "fokus") go(function () { S.fokus = true; S.ganz = false; });
    else if (a === "nextlf") go(function () { S.lf = l.nr + 1; window.scrollTo(0, 0); });
    else if (a === "drehen") { P.turned = !P.turned; t.classList.toggle("turned", P.turned); setTimeout(function () { nach(render); }, P.turned ? 280 : 0); }
    else if (a === "naechste") nach(function () { if (cur && cur.gen) { P.gen = null; P.step = 0; P.shown = false; } else weiterNachAntwort(cur || {}); render(); });
    else if (a === "loesung") { var txt = $("#freiIn").value; P.shown = true; nach(render); $("#freiIn").value = txt; }
    else if (a === "schritt") { var v1 = $("#calcIn").value; P.step++; nach(render); $("#calcIn").value = v1; }
    else if (a === "pruefen") {
      var val = $("#calcIn").value, q = cur && cur.gen ? P.gen : u(cl, "rechnen")[cur.i], n = zahl(val);
      if (val.trim() === "") return;
      var ok = !isNaN(n) && Math.abs(n - q.ergebnis) <= (q.toleranz || 0.01);
      if (!cur.gen) verbuchen(cl, "rechnen", cur.i, ok);
      P.shown = ok ? "ok" : "falsch"; save(); nach(render); $("#calcIn").value = val;
    }
    else if (a === "kprev" || a === "knext") nach(function () { P.i += a === "knext" ? 1 : -1; render(); });
    else if (a === "lnext") nach(function () { nextItem(); render(); });
    else if (a === "opnext") nach(function () { P.opf = null; P.picked = null; render(); });
    else if (a === "simnext" || a === "simprev") go(function () { S.simLauf.j += a === "simnext" ? 1 : -1; window.scrollTo(0, 0); });
    else if (a === "simpause") go(function () { S.simLauf.pause = !S.simLauf.pause; });
    else if (a === "simabbruch") { if (ds.sure) go(function () { S.simLauf = null; }); else { ds.sure = "1"; t.textContent = "Wirklich abbrechen?"; } }
    else if (a === "simabgabe") { if (ds.sure) go(function () { simAutoPunkte(S.simLauf); S.simLauf.phase = "rate"; window.scrollTo(0, 0); }); else { ds.sure = "1"; t.textContent = "Wirklich abgeben?"; } }
    else if (a === "simfertig") go(function () {
      var sl = S.simLauf, sum = 0; sl.tasks.forEach(function (_, j) { sum += sl.pts[j] || 0; });
      var max = sl.tasks.length * 10, pct = Math.round(sum / max * 100);
      var r = { datum: heute(), bereich: sl.bereich, pct: pct, note: note(pct), punkte: sum, max: max, n: sl.tasks.length };
      S.sims.push(r); S.simErgebnis = r; S.simLauf = null; window.scrollTo(0, 0);
    });
    else if (a === "simneu") go(function () { S.simErgebnis = null; });
    else if (a === "bpnext" || a === "bpprev") go(function () { S.bpLauf.j += a === "bpnext" ? 1 : -1; window.scrollTo(0, 0); });
    else if (a === "bppause") go(function () { S.bpLauf.pause = !S.bpLauf.pause; });
    else if (a === "bpabbruch") { if (ds.sure) go(function () { S.bpLauf = null; }); else { ds.sure = "1"; t.textContent = "Wirklich abbrechen?"; } }
    else if (a === "bpabgabe") { if (ds.sure) go(function () { bpAuto(S.bpLauf); S.bpLauf.phase = "rate"; window.scrollTo(0, 0); }); else { ds.sure = "1"; t.textContent = "Wirklich abgeben?"; } }
    else if (a === "bpfertig") go(function () { bpFertig(); window.scrollTo(0, 0); });
    else if (a === "bpneu") go(function () { S.bpErgebnis = null; });
    else if (a === "theme") { var r2 = document.documentElement, dark = r2.dataset.theme ? r2.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; r2.dataset.theme = dark ? "light" : "dark"; try { localStorage.setItem(KEY + "-theme", r2.dataset.theme); } catch (e2) {} }
    else if (a === "reset") { if (ds.sure) go(function () { S = leer0(); }); else { ds.sure = "1"; t.textContent = "Wirklich alles zurücksetzen?"; } }
  });
  document.addEventListener("input", function (e) {
    var t = e.target;
    if (t.id === "suchFeld") zeigeSuche(t.value);
    else if (t.id === "glossFeld") zeigeGlossar(t.value);
    else if (t.dataset && t.dataset.bpin != null && S.bpLauf) { S.bpLauf.ans[t.dataset.bpin] = t.value; bpNavDone(); }
    else if (t.dataset && t.dataset.simin != null && S.simLauf) { S.simLauf.ans[+t.dataset.simin] = t.value; var b = document.querySelector('.sim-nav [data-simj="' + t.dataset.simin + '"]'); if (b) b.classList.toggle("done", t.value.trim() !== ""); }
  });
  function bpNavDone() { var bl = S.bpLauf; if (!bl) return; var b = document.querySelector('.sim-nav [data-bpj="' + bl.j + '"]'); if (b) b.classList.toggle("done", bpBeantwortet(bl, bpSeiten(bpById(bl.id))[bl.j])); }
  document.addEventListener("change", function (e) {
    var t = e.target; if (!t.dataset || t.dataset.bpzu == null || !S.bpLauf) return;
    var bl = S.bpLauf, k = t.dataset.bpkey, q = bpFelder(bpById(bl.id)).filter(function (f) { return f.key === k; })[0].q;
    var arr = bl.ans[k] || q.paare.map(function () { return null; }); arr[+t.dataset.bpzu] = t.value === "" ? null : +t.value; bl.ans[k] = arr; save(); bpNavDone();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSheets(); if (S.fokus) go(function () { S.fokus = false; }); return; }
    if (/INPUT|TEXTAREA/.test(document.activeElement && document.activeElement.tagName)) { if (e.key === "Enter" && document.activeElement.id === "calcIn") { var b = document.querySelector('[data-act="pruefen"]'); if (b) b.click(); } return; }
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var dir = e.key === "ArrowRight" ? "weiter" : "zurueck";
    if (S.mode === "lesen" && !S.ganz) { var b2 = document.querySelector('[data-act="' + (dir === "weiter" ? (document.querySelector('[data-act="weiter"]') ? "weiter" : "nextlf") : "zurueck") + '"]'); if (b2 && !b2.disabled) b2.click(); }
    if (S.mode === "kurz") { var b3 = document.querySelector('[data-act="' + (dir === "weiter" ? "knext" : "kprev") + '"]'); if (b3) b3.click(); }
  });
  /* Wischen in Lesen (Fokus) und Kurz wiederholen */
  var tx = null, ty = null;
  document.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; } }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (tx == null) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    if (S.mode === "kurz" || (S.mode === "lesen" && S.fokus)) document.dispatchEvent(new KeyboardEvent("keydown", { key: dx < 0 ? "ArrowRight" : "ArrowLeft" }));
  }, { passive: true });
  $("#scrim").addEventListener("click", closeSheets);
  $("#sheetLf").addEventListener("toggle", function (e) { if (e.target.hasAttribute("data-teil1")) { S.teil1Offen = e.target.open; save(); } }, true);

  /* Lernzeit: zählt, solange die App sichtbar ist und in den letzten 2 Minuten bedient wurde */
  var aktiv = Date.now();
  ["click", "keydown", "touchstart", "scroll", "input"].forEach(function (ev) { document.addEventListener(ev, function () { aktiv = Date.now(); }, { passive: true }); });
  setInterval(function () {
    simTick(); bpTick();
  }, 1000);
  setInterval(function () {
    if (document.visibilityState === "visible" && Date.now() - aktiv < 120000) { var d = heute(); S.zeit[d] = (S.zeit[d] || 0) + 15; save(); }
  }, 15000);

  try { var th = localStorage.getItem(KEY + "-theme"); if (th) document.documentElement.dataset.theme = th; } catch (e) {}
  if ("serviceWorker" in navigator && location.protocol === "https:") { navigator.serviceWorker.register("sw.js").catch(function () {}); }
  if (NEU) S.mode = "heute";
  render();
})();
