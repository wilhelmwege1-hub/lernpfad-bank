/* Rechentrainer: Aufgaben mit Zufallszahlen. Alle als "Ergänzt" gekennzeichnet (nicht aus der Mitschrift).
   Jeder Generator liefert { titel, operator, frage, ergebnis, einheit, toleranz, schritte[], formel, ergaenzt }.
   Rundung: kaufmännisch auf 2 Nachkommastellen. Datumsrechnung in UTC, damit die Zeitumstellung nicht stört. */
(function () {
  "use strict";
  function r2(x) { return Math.round((x + Number.EPSILON) * 100) / 100; }
  function zuf(min, max, schritt) { var n = Math.round((max - min) / schritt); return r2(min + Math.floor(Math.random() * (n + 1)) * schritt); }
  function de(x, nk) {
    nk = nk == null ? 2 : nk;
    var s = x.toFixed(nk).split("."), g = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return nk ? g + "," + s[1] : g;
  }
  function deKurz(x) { /* ohne überflüssige Nullen, z. B. 2,5 statt 2,50 */
    var s = String(r2(x)).split("."); return s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (s[1] ? "," + s[1] : "");
  }
  function tag(y, m, d) { return Date.UTC(y, m - 1, d); }
  function plusTage(t, n) { return t + n * 864e5; }
  function datum(t) { var d = new Date(t); return ("0" + d.getUTCDate()).slice(-2) + "." + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "." + d.getUTCFullYear(); }
  function tageZwischen(a, b) { return Math.round((b - a) / 864e5); }

  var GEN = [
    {
      id: "zins30360", name: "Zinsen 30/360", lf: [4, 7, 11],
      bau: function () {
        var K = zuf(1000, 50000, 500), p = zuf(0.5, 4.5, 0.25), t = zuf(30, 360, 15);
        var Z = r2(K * p * t / 36000);
        return {
          titel: "Zinsen nach der deutschen Methode (30/360)", operator: "Ermitteln",
          frage: "Ein Kunde legt " + de(K) + " € für " + t + " Zinstage zu " + deKurz(p) + " % p. a. an. Ermitteln Sie die Zinsen (deutsche kaufmännische Methode 30/360).",
          ergebnis: Z, einheit: "€", toleranz: 0.01,
          formel: "Z = K · p · t / (100 · 360)",
          schritte: [
            "Formel: Z = K · p · t / (100 · 360)",
            "Einsetzen: Z = " + de(K) + " · " + deKurz(p) + " · " + t + " / 36.000",
            "Ergebnis: Z = " + de(Z) + " €"
          ]
        };
      }
    },
    {
      id: "zinsact360", name: "Zinsen act/360", lf: [4, 8],
      bau: function () {
        var K = zuf(5000, 100000, 1000), p = zuf(0.5, 4, 0.25);
        var start = plusTage(tag(2026, 1, 1), Math.floor(Math.random() * 200)), t = 30 + Math.floor(Math.random() * 151), ende = plusTage(start, t);
        var Z = r2(K * p * t / 36000);
        return {
          titel: "Zinsen nach der Euro-Zinsmethode (act/360)", operator: "Ermitteln",
          frage: "Festgeld über " + de(K) + " € zu " + deKurz(p) + " % p. a. vom " + datum(start) + " bis " + datum(ende) + ". Ermitteln Sie die Zinsen nach der Euro-Zinsmethode (act/360).",
          ergebnis: Z, einheit: "€", toleranz: 0.01,
          formel: "Z = K · p · tatsächliche Tage / (100 · 360)",
          schritte: [
            "Tage kalendergenau zählen: vom " + datum(start) + " bis " + datum(ende) + " sind es " + t + " Tage.",
            "Formel: Z = K · p · t / (100 · 360)",
            "Einsetzen: Z = " + de(K) + " · " + deKurz(p) + " · " + t + " / 36.000",
            "Ergebnis: Z = " + de(Z) + " €"
          ]
        };
      }
    },
    {
      id: "zinsact365", name: "Zinsen act/365", lf: [4, 8],
      bau: function () {
        var K = zuf(5000, 100000, 1000), p = zuf(0.5, 4, 0.25);
        var start = plusTage(tag(2026, 1, 1), Math.floor(Math.random() * 200)), t = 30 + Math.floor(Math.random() * 151), ende = plusTage(start, t);
        var Z = r2(K * p * t / 36500);
        return {
          titel: "Zinsen nach der englischen Methode (act/365)", operator: "Ermitteln",
          frage: "Anlage über " + de(K) + " € zu " + deKurz(p) + " % p. a. vom " + datum(start) + " bis " + datum(ende) + ". Ermitteln Sie die Zinsen nach der englischen Methode (act/365).",
          ergebnis: Z, einheit: "€", toleranz: 0.01,
          formel: "Z = K · p · tatsächliche Tage / (100 · 365)",
          schritte: [
            "Tage kalendergenau zählen: vom " + datum(start) + " bis " + datum(ende) + " sind es " + t + " Tage.",
            "Formel: Z = K · p · t / (100 · 365)",
            "Einsetzen: Z = " + de(K) + " · " + deKurz(p) + " · " + t + " / 36.500",
            "Ergebnis: Z = " + de(Z) + " €"
          ]
        };
      }
    },
    {
      id: "annuitaet", name: "Annuität", lf: [5, 9, 13],
      bau: function () {
        var K = zuf(10000, 300000, 5000), p = zuf(2, 6, 0.25), n = zuf(5, 30, 1), q = 1 + p / 100, qn = Math.pow(q, n);
        var A = r2(K * qn * (q - 1) / (qn - 1));
        return {
          titel: "Jährliche Annuität", operator: "Ermitteln",
          frage: "Ein Darlehen über " + de(K) + " € wird in " + n + " Jahren mit gleichbleibenden jährlichen Raten (Annuitäten) zurückgezahlt. Sollzins " + deKurz(p) + " % p. a., Zahlung jeweils am Jahresende. Ermitteln Sie die Annuität.",
          ergebnis: A, einheit: "€", toleranz: 0.05,
          formel: "A = K · qⁿ · (q − 1) / (qⁿ − 1), q = 1 + p/100",
          schritte: [
            "q = 1 + " + deKurz(p) + "/100 = " + de(q, 4),
            "qⁿ = " + de(q, 4) + "^" + n + " = " + de(qn, 6),
            "Annuitätenfaktor = qⁿ · (q − 1) / (qⁿ − 1) = " + de(qn * (q - 1) / (qn - 1), 6),
            "A = " + de(K) + " € · " + de(qn * (q - 1) / (qn - 1), 6) + " = " + de(A) + " €"
          ],
          hinweis: "Mit gerundetem Faktor kann das Ergebnis um wenige Cent abweichen; ±0,05 € gelten als richtig."
        };
      }
    },
    {
      id: "tilgung", name: "Tilgungsplan Jahr 1", lf: [5, 9, 13],
      bau: function () {
        var K = zuf(50000, 400000, 10000), p = zuf(2, 5, 0.25), t = zuf(1, 3, 0.5);
        var A = r2(K * (p + t) / 100), Z = r2(K * p / 100), T = r2(A - Z), R = r2(K - T);
        return {
          titel: "Annuitätendarlehen: Restschuld nach einem Jahr", operator: "Ermitteln",
          frage: "Baufinanzierung über " + de(K) + " €, Sollzins " + deKurz(p) + " % p. a., anfängliche Tilgung " + deKurz(t) + " % p. a. Vereinfachung: eine Zahlung am Jahresende. Ermitteln Sie die Restschuld nach dem ersten Jahr.",
          ergebnis: R, einheit: "€", toleranz: 0.01,
          formel: "Annuität = K · (Sollzins + anfängliche Tilgung) / 100",
          schritte: [
            "Jahresannuität = " + de(K) + " · (" + deKurz(p) + " + " + deKurz(t) + ") % = " + de(A) + " €",
            "Zinsen Jahr 1 = " + de(K) + " · " + deKurz(p) + " % = " + de(Z) + " €",
            "Tilgung Jahr 1 = Annuität − Zinsen = " + de(A) + " − " + de(Z) + " = " + de(T) + " €",
            "Restschuld = " + de(K) + " − " + de(T) + " = " + de(R) + " €"
          ]
        };
      }
    },
    {
      id: "rendite", name: "Rendite Anleihe", lf: [8],
      bau: function () {
        var c = zuf(1, 6, 0.25), kurs = zuf(90, 110, 0.5), n = zuf(2, 10, 1);
        var rend = r2((c + (100 - kurs) / n) / kurs * 100);
        return {
          titel: "Rendite einer Anleihe (Faustformel)", operator: "Ermitteln",
          frage: "Eine Anleihe mit " + deKurz(c) + " % Nominalzins wird zum Kurs von " + de(kurs) + " % gekauft. Restlaufzeit " + n + " Jahre, Rückzahlung zu 100 %. Ermitteln Sie die Rendite nach der Faustformel (ohne Spesen und Stückzinsen), auf 2 Stellen gerundet.",
          ergebnis: rend, einheit: "%", toleranz: 0.01,
          formel: "Rendite = (Nominalzins + (Rückzahlungskurs − Kaufkurs) / Laufzeit) / Kaufkurs · 100",
          schritte: [
            "Kursgewinn bzw. -verlust je Jahr: (100 − " + de(kurs) + ") / " + n + " = " + de((100 - kurs) / n, 4),
            "Jährlicher Ertrag: " + deKurz(c) + " + " + de((100 - kurs) / n, 4) + " = " + de(c + (100 - kurs) / n, 4),
            "Rendite: " + de(c + (100 - kurs) / n, 4) + " / " + de(kurs) + " · 100 = " + de(rend) + " %"
          ]
        };
      }
    },
    {
      id: "stueckzins", name: "Kurswert und Stückzinsen", lf: [8],
      bau: function () {
        var nw = zuf(1000, 50000, 1000), c = zuf(1, 5, 0.25), kurs = zuf(95, 105, 0.25);
        var zt = tag(2026, 3, 1), valuta = plusTage(zt, 1 + Math.floor(Math.random() * 360)), tage = tageZwischen(zt, valuta);
        var kw = r2(nw * kurs / 100), sz = r2(nw * c / 100 * tage / 365), ab = r2(kw + sz);
        return {
          titel: "Kauf einer Anleihe: Kurswert und Stückzinsen", operator: "Ermitteln",
          frage: "Kauf von " + de(nw, 0) + " € Nennwert einer " + deKurz(c) + " %-Anleihe zum Kurs von " + de(kurs) + " %. Zinstermin jährlich am 01.03., Valuta " + datum(valuta) + ". Stückzinsen nach act/act (Zinsperiode 01.03.2026 bis 01.03.2027 = 365 Tage). Ermitteln Sie den Betrag ohne Spesen (Kurswert + Stückzinsen).",
          ergebnis: ab, einheit: "€", toleranz: 0.01,
          formel: "Kurswert = Nennwert · Kurs / 100; Stückzinsen = Nennwert · Zins · Tage / (100 · 365)",
          schritte: [
            "Kurswert = " + de(nw, 0) + " · " + de(kurs) + " / 100 = " + de(kw) + " €",
            "Stückzinstage: vom 01.03.2026 bis einschließlich " + datum(valuta - 864e5) + " (Tag vor Valuta) = " + tage + " Tage",
            "Stückzinsen = " + de(nw, 0) + " · " + deKurz(c) + " · " + tage + " / 36.500 = " + de(sz) + " €",
            "Betrag = " + de(kw) + " + " + de(sz) + " = " + de(ab) + " €"
          ]
        };
      }
    }
  ];
  window.RECHNER = { GEN: GEN, de: de, r2: r2 };
})();
