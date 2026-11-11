/* Zusammenfassungen Teil 2: Vermögen (LF04, LF08, LF12), Finanzierung (LF09, LF13), Übergreifend (LF07, LF11).
   Gleicher Aufbau wie WiSo in zusammenfassungen.js. Muss NACH zusammenfassungen.js geladen werden.
   Kapitel-ids: vr-…, fv-…, ueb-…. Alles Ergänzt, bis die Mitschriften abgeglichen sind. Stand 09.11.2026. */
window.ZUSAMMENFASSUNGEN = window.ZUSAMMENFASSUNGEN || [];
window.ZUSAMMENFASSUNGEN.push(
{
 "nr": "Vermögen",
 "kurz": "Vermögen",
 "lang": "Vermögen kompakt",
 "bereich": "VR",
 "lf": [
  4,
  8,
  12
 ],
 "titel": "Vermögen aufbauen und Risiken absichern, LF04, LF08 und LF12 in einem",
 "quelle": "Alles Ergänzt (Gesetze und offizielle Werte), bis die Mitschriften abgeglichen sind. Wechselnde Werte Stand 09.11.2026: Sparer-Pauschbetrag 1.000/2.000 € (seit 2023), Sparzulage-Grenzen 40.000/80.000 € (seit 2024), BBG RV 2026 8.450 € im Monat, Riester-Zulagen nach bisherigem Recht (Reform ab 01.01.2027 beschlossen), Basisrente-Höchstbetrag 2026 30.826 €. Basiszins Vorabpauschale 2026 3,20 % (BMF), aktueller Rentenwert ab 01.07.2026 42,52 € (DRV); nachgetragen am 11.11.2026. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): LF08 · Derivate, Optionsscheine und Zertifikate, LF08 · Depot: Verwahrung und Verwaltung.",
 "kapitel": [
  {
   "id": "vr-k0",
   "titel": "Überblick · Was in diesem Bereich drankommt",
   "ergaenzt": true,
   "erklaert": "Der Bereich „Vermögen aufbauen und Risiken absichern“ prüft am 25.11.2026 in 90 Minuten, wie du Kunden bei Geldanlage und Vorsorge berätst. Typisch ist ein durchgehender Kundenfall: Ein Kunde hat Geld übrig, du ermittelst Erträge und Steuern, vergleichst Anlageformen, prüfst die Eignung nach WpHG und schließt mit Vorsorge und Versicherungen ab.",
   "beispiel": "Familie Lange (Sachsen, verheiratet, ein Kind) hat 40.000 € auf dem Girokonto. Mögliche Aufgaben: Zinsen für Festgeld ermitteln, Abgeltungsteuer nach Freistellungsauftrag ermitteln, Einlagensicherung erläutern, Anleihe und Aktienfonds unterscheiden, Riester-Eigenbeitrag ermitteln, Hausratversicherung beurteilen.",
   "tabelle": {
    "kopf": [
     "Lernfeld",
     "Kernthemen",
     "Typische Rechnung"
    ],
    "zeilen": [
     [
      "LF04 Anlagen auf Konten, gefördertes Sparen",
      "Einlagenarten, Abgeltungsteuer, Einlagensicherung, VL, Wohnungsbauprämie",
      "Zinsen, Steuer nach Freistellungsauftrag, Sparzulage"
     ],
     [
      "LF08 Finanzinstrumente",
      "Anleihen, Aktien, Fonds, Risiken, Anlageberatung nach WpHG",
      "Kurswert, Stückzinsen, Rendite, Ausgabepreis, Teilfreistellung"
     ],
     [
      "LF12 Vorsorge und Absicherung",
      "Drei-Schichten-Modell, Riester, Basisrente, bAV, Versicherungen",
      "Riester-Eigenbeitrag, bAV-Grenzen, Unterversicherung"
     ]
    ]
   },
   "merksatz": "Ertrag, Steuer, Sicherheit, Eignung, Vorsorge: in dieser Reihenfolge läuft fast jeder Fall.",
   "tipp": "Lies den Fall einmal ganz, bevor du rechnest. Spätere Teilaufgaben verraten oft, welche Zahl du früher brauchst.",
   "achtung": "Rechenergebnisse ohne Einheit und ohne Rechenweg kosten Punkte, auch wenn die Zahl stimmt."
  },
  {
   "id": "vr-k1",
   "titel": "LF04 · Einlagen auf Konten",
   "ergaenzt": true,
   "erklaert": "Banken nehmen drei Arten von Einlagen an. Sichteinlagen (Girokonto, Tagesgeld) sind täglich verfügbar. Termineinlagen (Festgeld, Kündigungsgeld) sind für eine feste Zeit angelegt, mindestens 30 Tage. Spareinlagen haben eine Kündigungsfrist von mindestens 3 Monaten, sind durch eine Urkunde (meist Sparbuch) belegt und dürfen nicht für den Zahlungsverkehr dienen (§ 21 Abs. 4 RechKredV). Viele Sparkassen erlauben, ohne Kündigung bis 2.000 € je Kalendermonat abzuheben; darüber hinaus können Vorschusszinsen anfallen. Festgeld wird meist taggenau nach act/360 verzinst.",
   "beispiel": "Termingeld 25.000 € für 90 Tage zu 2,0 % p. a., Methode act/360: Zinsen = 25.000 · 2,0 · 90 : (100 · 360) = 125,00 €.",
   "tabelle": {
    "kopf": [
     "Einlageart",
     "Verfügbarkeit",
     "Zins",
     "Zweck"
    ],
    "zeilen": [
     [
      "Sichteinlage (Giro, Tagesgeld)",
      "täglich",
      "variabel, oft niedrig",
      "Zahlungsverkehr, Liquiditätsreserve"
     ],
     [
      "Termineinlage (Festgeld)",
      "nach fester Laufzeit, mind. 30 Tage",
      "fest für die Laufzeit",
      "Geld, das sicher eine Weile nicht gebraucht wird"
     ],
     [
      "Termineinlage (Kündigungsgeld)",
      "nach Kündigung und Frist",
      "variabel",
      "flexiblere Alternative zum Festgeld"
     ],
     [
      "Spareinlage",
      "Kündigungsfrist mind. 3 Monate",
      "variabel, ggf. Prämie",
      "Vermögensbildung, nicht für Zahlungsverkehr"
     ]
    ]
   },
   "merksatz": "Sicht täglich, Termin fest, Spar mit 3 Monaten Kündigung.",
   "tipp": "Operator „Unterscheiden“: Stell immer dieselben Merkmale gegenüber: Verfügbarkeit, Verzinsung, Zweck.",
   "achtung": "Spareinlagen dürfen nicht dem Zahlungsverkehr dienen. Überweisungen direkt vom Sparbuch gehen daher nicht."
  },
  {
   "id": "vr-k2",
   "titel": "LF04 · Besteuerung von Kapitalerträgen",
   "ergaenzt": true,
   "erklaert": "Zinsen, Dividenden und Kursgewinne sind Einkünfte aus Kapitalvermögen. Die Bank behält Abgeltungsteuer (25 %), Solidaritätszuschlag (5,5 % der Abgeltungsteuer) und gegebenenfalls Kirchensteuer (Sachsen 9 %) direkt ein. Steuerfrei bleibt der Sparer-Pauschbetrag von 1.000 € je Person (2.000 € bei Zusammenveranlagung). Ihn nutzt der Kunde per Freistellungsauftrag, aufteilbar auf mehrere Banken. Wer insgesamt so wenig verdient, dass keine Einkommensteuer anfällt, kann eine Nichtveranlagungs-Bescheinigung (NV-Bescheinigung) vorlegen, dann bleibt alles steuerfrei. Mit Kirchensteuer gilt: Abgeltungsteuer = Ertrag : (4 + Kirchensteuersatz).",
   "beispiel": "Ledige Kundin, keine Kirchensteuer, Zinsen 1.800 €, Freistellungsauftrag 1.000 €. Steuerpflichtig: 800 €. Abgeltungsteuer 25 % = 200,00 €, Soli 5,5 % von 200 € = 11,00 €. Gutschrift: 1.800 − 211 = 1.589,00 €. Mit 9 % Kirchensteuer: Abgeltungsteuer = 800 : 4,09 = rund 195,60 €, Kirchensteuer 9 % davon = 17,60 €, Soli 5,5 % davon = 10,75 € (Cent-Bruchteile fallen weg).",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Wert",
     "Stand"
    ],
    "zeilen": [
     [
      "Abgeltungsteuer",
      "25 %",
      "§ 32d EStG"
     ],
     [
      "Solidaritätszuschlag",
      "5,5 % der Abgeltungsteuer",
      "fällt bei Kapitalerträgen weiter an"
     ],
     [
      "Kirchensteuer Sachsen",
      "9 % der Abgeltungsteuer",
      "Bayern und Baden-Württemberg 8 %"
     ],
     [
      "Sparer-Pauschbetrag",
      "1.000 € / 2.000 €",
      "seit 2023 (§ 20 Abs. 9 EStG)"
     ],
     [
      "NV-Bescheinigung",
      "gilt höchstens 3 Jahre",
      "vom Finanzamt"
     ]
    ]
   },
   "merksatz": "Erst Freistellung abziehen, dann 25 % und 5,5 % darauf.",
   "tipp": "Operator „Ermitteln“: Schreib jeden Schritt einzeln: Ertrag, minus Freistellung, Bemessungsgrundlage, Steuer, Soli, (KiSt), Nettoertrag.",
   "achtung": "Der Soli wird von der Abgeltungsteuer berechnet, nicht vom Zinsertrag. 5,5 % von 800 € wäre falsch."
  },
  {
   "id": "vr-k3",
   "titel": "LF04 · Einlagensicherung",
   "ergaenzt": true,
   "erklaert": "Die gesetzliche Einlagensicherung (Einlagensicherungsgesetz) schützt Einlagen bis 100.000 € je Kunde und Institut. Im Entschädigungsfall wird innerhalb von 7 Arbeitstagen ausgezahlt. Bestimmte vorübergehend hohe Guthaben, etwa aus einem Immobilienverkauf, sind bis 500.000 € für 6 Monate geschützt. Sparkassen sichern sich zusätzlich über die Institutssicherung der Sparkassen-Finanzgruppe: Sie schützt das Institut selbst, damit Kunden gar nicht erst entschädigt werden müssen. Dieses System ist amtlich als Einlagensicherungssystem anerkannt.",
   "beispiel": "Herr Roth hat bei einer Bank 130.000 € Festgeld. Fällt die Bank aus, sind gesetzlich 100.000 € gesichert, 30.000 € nicht. Hat er die 130.000 € vor drei Monaten aus dem Verkauf seiner selbst genutzten Wohnung erhalten, ist der Betrag bis 500.000 € für 6 Monate geschützt.",
   "tabelle": {
    "kopf": [
     "Schutz",
     "Höhe",
     "Wer"
    ],
    "zeilen": [
     [
      "gesetzliche Einlagensicherung",
      "100.000 € je Kunde und Institut",
      "alle Einlagenkreditinstitute in der EU"
     ],
     [
      "vorübergehend hohe Guthaben",
      "bis 500.000 € für 6 Monate",
      "z. B. Immobilienverkauf, Erbschaft, Abfindung"
     ],
     [
      "Institutssicherung",
      "schützt das Institut als Ganzes",
      "Sparkassen-Finanzgruppe, Genossenschaftsbanken"
     ],
     [
      "nicht geschützt",
      "Wertpapiere im Depot sind Sondervermögen des Kunden",
      "bleiben bei Insolvenz Eigentum des Kunden"
     ]
    ]
   },
   "merksatz": "100.000 € je Kunde und Bank, Auszahlung in 7 Arbeitstagen.",
   "tipp": "Bei „Erläutern“ zur Sparkasse: zuerst gesetzlicher Mindestschutz, dann der Unterschied Institutssicherung.",
   "achtung": "Zertifikate und Anleihen sind keine Einlagen. Fällt der Emittent aus, greift keine Einlagensicherung (Emittentenrisiko)."
  },
  {
   "id": "vr-k4",
   "titel": "LF04 · Staatlich gefördertes Sparen",
   "ergaenzt": true,
   "erklaert": "Vermögenswirksame Leistungen (VL) zahlt der Arbeitgeber laut Tarif- oder Arbeitsvertrag zusätzlich zum Lohn auf einen Sparvertrag. Der Staat fördert das mit der Arbeitnehmer-Sparzulage: 20 % auf höchstens 400 € im Jahr bei Beteiligungen (z. B. Aktienfonds-Sparplan), 9 % auf höchstens 470 € bei Bausparen. Einkommensgrenze seit 2024: zu versteuerndes Einkommen 40.000 € (Ledige) bzw. 80.000 € (Verheiratete). Die Sperrfrist beträgt 7 Jahre. Die Wohnungsbauprämie gibt 10 % auf höchstens 700 € bzw. 1.400 € Sparleistung in einen Bausparvertrag, Einkommensgrenze 35.000 € bzw. 70.000 €, Mindestsparleistung 50 € im Jahr.",
   "beispiel": "Azubi, zu versteuerndes Einkommen 14.000 €. Er spart 40 € im Monat VL in einen Aktienfonds-Sparplan, also 480 € im Jahr. Gefördert sind höchstens 400 €: Sparzulage 20 % · 400 = 80 € im Jahr. Spart er stattdessen 480 € in einen Bausparvertrag: 9 % · 470 = 42,30 € Sparzulage.",
   "tabelle": {
    "kopf": [
     "Förderung",
     "Satz",
     "Höchstbetrag",
     "Einkommensgrenze (zvE)"
    ],
    "zeilen": [
     [
      "Sparzulage Beteiligungen",
      "20 %",
      "400 € → 80 €",
      "40.000 / 80.000 €"
     ],
     [
      "Sparzulage Bausparen",
      "9 %",
      "470 € → 42,30 €",
      "40.000 / 80.000 €"
     ],
     [
      "Wohnungsbauprämie",
      "10 %",
      "700 / 1.400 € → 70 / 140 €",
      "35.000 / 70.000 €"
     ]
    ]
   },
   "merksatz": "VL in Fonds: 20 auf 400. VL in Bausparen: 9 auf 470.",
   "tipp": "Operator „Ermitteln“: Prüfe zuerst die Einkommensgrenze, dann den Höchstbetrag, erst dann rechnest du den Prozentsatz.",
   "achtung": "Dieselbe Sparleistung bekommt nicht Sparzulage und Wohnungsbauprämie gleichzeitig. Die Prämie gibt es nur für den Teil, der nicht schon mit Sparzulage gefördert wird."
  },
  {
   "id": "vr-k5",
   "titel": "LF08 · Anleihen: Kurswert und Stückzinsen",
   "ergaenzt": true,
   "erklaert": "Eine Anleihe ist ein verbrieftes Darlehen an einen Emittenten (Staat, Bank, Unternehmen). Der Anleger erhält einen festen Kupon und am Ende den Nennwert zurück. Anleihen werden in Prozent des Nennwerts gehandelt. Wer zwischen zwei Zinsterminen kauft, zahlt dem Verkäufer die seit dem letzten Zinstermin aufgelaufenen Zinsen: die Stückzinsen. Bei Anleihen gilt act/act: tatsächliche Tage durch tatsächliche Tage des Zinsjahres. Gezählt wird bis einschließlich des Tages vor der Valuta.",
   "beispiel": "Kauf von 10.000 € Nennwert einer 3 %-Anleihe zum Kurs von 98,50 %. Seit dem letzten Zinstermin sind 120 Zinstage vergangen, das Zinsjahr hat 365 Tage. Kurswert: 10.000 · 98,50 % = 9.850,00 €. Stückzinsen: 10.000 · 3 % · 120 : 365 = 98,63 €. Zu zahlen (ohne Spesen): 9.948,63 €.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung"
    ],
    "zeilen": [
     [
      "Nennwert",
      "Betrag, auf den der Kupon gezahlt und der am Ende zurückgezahlt wird"
     ],
     [
      "Kurs",
      "Preis in % des Nennwerts"
     ],
     [
      "Kupon",
      "fester Zins in % des Nennwerts"
     ],
     [
      "Stückzinsen",
      "aufgelaufene Zinsen seit dem letzten Zinstermin, zahlt der Käufer"
     ],
     [
      "Valuta",
      "Tag der Wertstellung, beim Börsenkauf 2 Geschäftstage nach dem Handelstag"
     ],
     [
      "Zinsänderungsrisiko",
      "steigt der Marktzins, fällt der Kurs bestehender Anleihen"
     ]
    ]
   },
   "merksatz": "Kurswert aus dem Kurs, Stückzinsen aus dem Kupon.",
   "tipp": "Rechne Kurswert und Stückzinsen getrennt und addiere erst am Schluss. So gibt es Teilpunkte, auch wenn eine Zahl falsch ist.",
   "achtung": "Stückzinsen werden auf den Nennwert berechnet, nie auf den Kurswert."
  },
  {
   "id": "vr-k6",
   "titel": "LF08 · Rendite einer Anleihe",
   "ergaenzt": true,
   "erklaert": "Die Rendite zeigt, was die Anleihe pro Jahr wirklich bringt, wenn man sie bis zum Ende hält. Neben dem Kupon zählt der Unterschied zwischen Kaufkurs und Rückzahlung (100 %). Die vereinfachte Formel der Prüfung lautet: Rendite = (Kupon + (Rückzahlungskurs − Kaufkurs) : Restlaufzeit) : Kaufkurs · 100. Die laufende Verzinsung berücksichtigt nur den Kupon: Kupon : Kaufkurs · 100.",
   "beispiel": "3 %-Anleihe, Kaufkurs 96 %, Restlaufzeit 4 Jahre. Kursgewinn je Jahr: (100 − 96) : 4 = 1. Rendite: (3 + 1) : 96 · 100 = 4,17 %. Laufende Verzinsung: 3 : 96 · 100 = 3,13 %.",
   "tabelle": {
    "kopf": [
     "Kaufkurs",
     "Wirkung auf die Rendite"
    ],
    "zeilen": [
     [
      "unter 100 % (unter pari)",
      "Rendite höher als der Kupon"
     ],
     [
      "genau 100 % (pari)",
      "Rendite gleich dem Kupon"
     ],
     [
      "über 100 % (über pari)",
      "Rendite niedriger als der Kupon"
     ]
    ]
   },
   "merksatz": "Unter pari gekauft, Gewinn bei Rückzahlung: Rendite über dem Kupon.",
   "tipp": "Bei „Beurteilen“ zwischen zwei Anleihen: nicht den Kupon, sondern die Rendite vergleichen und Bonität des Emittenten dazunehmen.",
   "achtung": "Spesen und Steuern bleiben in der vereinfachten Formel außen vor. Steht in der Aufgabe nichts davon, rechne ohne."
  },
  {
   "id": "vr-k7",
   "titel": "LF08 · Aktien",
   "ergaenzt": true,
   "erklaert": "Mit einer Aktie wird der Kunde Miteigentümer einer Aktiengesellschaft. Er hat Vermögensrechte (Dividende, Anteil am Liquidationserlös, Bezugsrecht bei Kapitalerhöhung) und Verwaltungsrechte (Teilnahme an der Hauptversammlung, Stimmrecht, Auskunftsrecht). Stammaktien haben Stimmrecht, Vorzugsaktien meist nicht, dafür eine bevorzugte Dividende. Beim Kauf über die Börse kann der Kunde Orderzusätze nutzen: Limit (höchstens bzw. mindestens zu diesem Kurs), Stop-Loss (bei Erreichen eines Kurses wird billigst verkauft), Stop-Limit (bei Erreichen wird limitiert verkauft).",
   "beispiel": "Kunde hält 200 Aktien, Dividende 1,50 € je Aktie: 300,00 € brutto. Freistellungsauftrag schon ausgeschöpft, keine Kirchensteuer: Abgeltungsteuer 75,00 €, Soli 4,12 €, Gutschrift 220,88 €.",
   "tabelle": {
    "kopf": [
     "Orderzusatz",
     "Wirkung",
     "Risiko"
    ],
    "zeilen": [
     [
      "billigst / bestens",
      "Ausführung zum nächsten Kurs",
      "Kurs kann ungünstig sein"
     ],
     [
      "Limit",
      "Kauf nur bis, Verkauf nur ab dem Limit",
      "Order wird eventuell nicht ausgeführt"
     ],
     [
      "Stop-Loss",
      "bei Erreichen des Stoppkurses Verkauf bestens",
      "Ausführung unter dem Stoppkurs möglich"
     ],
     [
      "Stop-Limit",
      "bei Erreichen Verkauf mit Limit",
      "bei Kurssturz keine Ausführung"
     ]
    ]
   },
   "merksatz": "Stammaktie stimmt mit, Vorzugsaktie kassiert zuerst.",
   "tipp": "Operator „Nennen“ bei Aktionärsrechten: je zwei Vermögens- und zwei Verwaltungsrechte reichen meist.",
   "achtung": "Der Soli wird kaufmännisch nicht aufgerundet: 5,5 % von 75 € = 4,125 €, die Bank schreibt 4,12 € ab."
  },
  {
   "id": "vr-k8",
   "titel": "LF08 · Investmentfonds",
   "ergaenzt": true,
   "erklaert": "Ein Investmentfonds sammelt Geld vieler Anleger und legt es gestreut an. Das Fondsvermögen ist Sondervermögen: Es gehört den Anlegern und ist bei einer Insolvenz der Fondsgesellschaft geschützt. Der Anleger kauft zum Ausgabepreis (Anteilwert plus Ausgabeaufschlag) und gibt zum Rücknahmepreis (Anteilwert) zurück. Seit 2018 gilt eine Teilfreistellung: Bei Aktienfonds (mind. 51 % Aktien) sind 30 % der Erträge steuerfrei, bei Mischfonds (mind. 25 %) 15 %, bei Immobilienfonds 60 % (Schwerpunkt Ausland 80 %). Thesaurierende Fonds lösen jedes Jahr eine Vorabpauschale aus: Rücknahmepreis am Jahresanfang · Basiszins · 0,7, höchstens die tatsächliche Wertsteigerung.",
   "beispiel": "Anteilwert 50,00 €, Ausgabeaufschlag 5 %: Ausgabepreis 52,50 €. Für 5.000 € erhält der Kunde 5.000 : 52,50 = 95,238 Anteile. Ein Aktienfonds schüttet 400 € aus: 30 % Teilfreistellung, steuerpflichtig sind 280 €.",
   "tabelle": {
    "kopf": [
     "Fondsart",
     "Teilfreistellung (Privatanleger)"
    ],
    "zeilen": [
     [
      "Aktienfonds (mind. 51 % Aktien)",
      "30 %"
     ],
     [
      "Mischfonds (mind. 25 % Aktien)",
      "15 %"
     ],
     [
      "Immobilienfonds",
      "60 %"
     ],
     [
      "Immobilienfonds mit Auslandsschwerpunkt",
      "80 %"
     ],
     [
      "Rentenfonds",
      "0 %"
     ]
    ]
   },
   "merksatz": "Aktienfonds 30, Mischfonds 15, Immobilienfonds 60 oder 80 Prozent steuerfrei.",
   "tipp": "Bei „Erläutern“ zum Vorteil von Fonds: Streuung (Risikominderung), Sondervermögen (Insolvenzschutz), kleine Sparraten möglich.",
   "achtung": "Der Basiszins für die Vorabpauschale wechselt jährlich: 2025 2,53 %, 2026 3,20 % (BMF-Schreiben vom 13.01.2026). Die Vorabpauschale für 2026 fließt erst Anfang 2027 zu."
  },
  {
   "id": "vr-k9",
   "titel": "LF08 · Anlageberatung nach WpHG und Risiken",
   "ergaenzt": true,
   "erklaert": "Wer zu Finanzinstrumenten berät, muss nach § 64 WpHG zuerst alle nötigen Informationen einholen: Kenntnisse und Erfahrungen, finanzielle Verhältnisse einschließlich Verlusttragfähigkeit, Anlageziele einschließlich Risikotoleranz und seit August 2022 auch Nachhaltigkeitspräferenzen. Empfohlen werden darf nur, was geeignet ist. Vor Vertragsschluss erhält der Privatkunde eine Geeignetheitserklärung, ein Basisinformationsblatt und eine Kosteninformation. Telefonische Beratung wird aufgezeichnet und 5 Jahre aufbewahrt. Kunden werden als Privatkunde, professioneller Kunde oder geeignete Gegenpartei eingestuft; Privatkunden haben den höchsten Schutz.",
   "beispiel": "Frau Beck (68) will 30.000 € anlegen, braucht das Geld in zwei Jahren für ein neues Auto und hat keine Wertpapiererfahrung. Eine reine Aktienanlage ist nicht geeignet: kurzer Anlagehorizont, keine Erfahrung, geringe Verlusttragfähigkeit. Geeignet sind Festgeld oder eine Anleihe hoher Bonität mit passender Laufzeit.",
   "tabelle": {
    "kopf": [
     "Risiko",
     "Bedeutung",
     "Betrifft vor allem"
    ],
    "zeilen": [
     [
      "Bonitäts- / Emittentenrisiko",
      "Schuldner zahlt Zinsen oder Rückzahlung nicht",
      "Anleihen, Zertifikate"
     ],
     [
      "Kursrisiko",
      "Kurs fällt unter den Kaufkurs",
      "Aktien, Fonds, Anleihen vor Fälligkeit"
     ],
     [
      "Zinsänderungsrisiko",
      "steigender Marktzins senkt Anleihekurse",
      "Anleihen, Rentenfonds"
     ],
     [
      "Währungsrisiko",
      "Fremdwährung verliert gegenüber dem Euro",
      "Anlagen in Fremdwährung"
     ],
     [
      "Liquiditätsrisiko",
      "Anlage lässt sich nicht schnell zu fairem Preis verkaufen",
      "Nebenwerte, offene Immobilienfonds"
     ]
    ]
   },
   "merksatz": "Erst erfragen, dann prüfen, dann empfehlen, dann dokumentieren.",
   "tipp": "Operator „Beurteilen“ zur Eignung: Kundenangaben aus dem Fall nennen, mit den Merkmalen des Produkts abgleichen, Fazit „geeignet“ oder „nicht geeignet“.",
   "achtung": "Rentabilität, Sicherheit und Liquidität stehen im Zielkonflikt (magisches Dreieck): Eine Anlage kann nicht alle drei gleichzeitig maximal erfüllen."
  },
  {
   "id": "vr-k14",
   "titel": "LF08 · Derivate, Optionsscheine und Zertifikate",
   "erklaert": "Derivate leiten ihren Wert von einem Basiswert ab (Aktie, Index, Zins, Währung, Rohstoff). Bei Termingeschäften liegen Abschluss und Erfüllung auseinander. Unbedingt sind Futures: Beide Seiten müssen zum vereinbarten Preis kaufen bzw. verkaufen. Bedingt sind Optionen: Der Käufer hat das Recht, der Verkäufer (Stillhalter) hat die Pflicht. Ein Call ist ein Kaufrecht, ein Put ein Verkaufsrecht. Der Käufer zahlt dafür eine Prämie, sie ist sein höchster Verlust. Derivate wirken mit Hebel: kleiner Einsatz, große Wirkung in beide Richtungen. Optionsscheine sind verbriefte Optionsrechte, Zertifikate sind Schuldverschreibungen, deren Rückzahlung von einem Basiswert abhängt. Bei beiden trägt der Anleger das Emittentenrisiko, weil sie kein Sondervermögen sind.",
   "beispiel": "Ein Kunde kauft Calls auf 100 Aktien, Basispreis 100 €, Prämie 5 € je Aktie (500 €). Am Fälligkeitstag steht die Aktie bei 112 €. Er übt aus: (112 − 100 − 5) · 100 = 700 € Gewinn. Gewinnschwelle 105 €. Steht die Aktie unter 100 €, verfällt die Option, Verlust 500 €. Discountzertifikat: Aktie 47 €, Zertifikat 42 €, Cap 50 €. Höchstertrag (50 − 42) : 42 = 19,05 %. Schließt die Aktie bei 40 €, bekommt der Kunde die Aktie (40 €), Verlust 2 € je Zertifikat.",
   "tabelle": {
    "kopf": [
     "Produkt",
     "Merkmal",
     "größtes Risiko"
    ],
    "zeilen": [
     [
      "Long Call (Kaufoption gekauft)",
      "Recht zu kaufen, Erwartung steigende Kurse",
      "Prämie (Totalverlust)"
     ],
     [
      "Long Put (Verkaufsoption gekauft)",
      "Recht zu verkaufen, Absicherung gegen fallende Kurse",
      "Prämie (Totalverlust)"
     ],
     [
      "Stillhalter (Short Call, Short Put)",
      "Pflicht zu liefern bzw. abzunehmen, erhält Prämie",
      "beim Short Call unbegrenzt"
     ],
     [
      "Future",
      "unbedingte Pflicht beider Seiten, Sicherheitsleistung (Margin)",
      "Nachschusspflicht"
     ],
     [
      "Optionsschein",
      "verbriefte Option, börsengehandelt",
      "Hebel, Verfall, Emittent"
     ],
     [
      "Indexzertifikat",
      "bildet einen Index 1 : 1 ab",
      "Index fällt, Emittent"
     ],
     [
      "Discountzertifikat",
      "Abschlag auf die Aktie, Gewinn begrenzt durch Cap",
      "Aktie fällt deutlich, Emittent"
     ],
     [
      "Bonuszertifikat",
      "Bonus, solange die Barriere nicht berührt wird",
      "Barriere wird gerissen, Emittent"
     ]
    ]
   },
   "merksatz": "**Call** = Kaufrecht, **Put** = Verkaufsrecht; der Käufer kann höchstens die Prämie verlieren.",
   "tipp": "Operator „Erläutern“ zum Hebel: kleines Beispiel mit Prozenten rechnen (Aktie + 10 %, Option + 50 %) und das Risiko in beide Richtungen nennen.",
   "achtung": "Zertifikate sind keine Fonds. Geht der Emittent insolvent, kann das Geld weg sein, auch wenn der Basiswert gut läuft. Vor dem Kauf bekommt der Kunde ein Basisinformationsblatt.",
   "ergaenzt": true
  },
  {
   "id": "vr-k15",
   "titel": "LF08 · Depot: Verwahrung und Verwaltung",
   "erklaert": "Wertpapiere verwahrt die Bank im Depot nach dem Depotgesetz. Regelfall ist die Girosammelverwahrung: Gleiche Wertpapiere aller Kunden liegen gemeinsam bei der Wertpapiersammelbank (Clearstream Banking AG), der Kunde ist Miteigentümer nach Bruchteilen. Selten ist die Sonderverwahrung (Streifband), bei der die Stücke getrennt liegen. Ausländische Papiere werden oft im Ausland verwahrt, der Kunde bekommt eine Gutschrift in Wertpapierrechnung. Zur Verwaltung gehören: Zinsen und Dividenden gutschreiben, fällige Anleihen einlösen, über Hauptversammlungen und Kapitalmaßnahmen (z. B. Bezugsrechte) informieren, Steuern abführen und die Steuerbescheinigung ausstellen. Wertpapiere bleiben Eigentum des Kunden. Wird die Bank insolvent, kann er sie heraus verlangen (Aussonderung).",
   "beispiel": "Ein Kunde hat Wertpapiere im Kurswert von 40.000 € im Depot. Depotentgelt 0,15 % im Jahr = 60 €. Die Verwahrung ist umsatzsteuerpflichtig, 19 % = 11,40 €. Belastung 71,40 €. Bei einer Kapitalerhöhung seiner Aktie informiert ihn die Bank über die Bezugsrechte. Gibt er keine Weisung, verkauft die Bank die Bezugsrechte in der Regel am letzten Handelstag bestens.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung",
     "Grundlage"
    ],
    "zeilen": [
     [
      "Girosammelverwahrung",
      "Regelfall, Miteigentum nach Bruchteilen am Sammelbestand",
      "§ 5 DepotG"
     ],
     [
      "Sonderverwahrung (Streifband)",
      "getrennte Verwahrung bestimmter Stücke, teurer",
      "§ 2 DepotG"
     ],
     [
      "Wertpapierrechnung",
      "Auslandsverwahrung, Kunde hat schuldrechtlichen Anspruch auf Lieferung",
      "Sonderbedingungen für Wertpapiergeschäfte"
     ],
     [
      "Clearstream Banking AG",
      "deutsche Wertpapiersammelbank (Zentralverwahrer)",
      "DepotG"
     ],
     [
      "elektronische Wertpapiere",
      "Wertpapiere ohne Urkunde, Eintrag in ein Register",
      "eWpG"
     ],
     [
      "Insolvenz der Bank",
      "Depotwerte gehören dem Kunden, Aussonderung",
      "§ 47 InsO"
     ],
     [
      "Entgelte",
      "Depotverwahrung und -verwaltung umsatzsteuerpflichtig",
      "§ 4 Nr. 8e UStG"
     ]
    ]
   },
   "merksatz": "Einlagen schützt die Einlagensicherung, Wertpapiere schützt das **Eigentum**.",
   "tipp": "Operator „Erläutern“ zur Sicherheit im Depot: Eigentum bzw. Miteigentum nennen, Aussonderung im Insolvenzfall, und den Unterschied zur Einlagensicherung.",
   "achtung": "Das Emittentenrisiko bleibt: Das Depot schützt vor der Pleite der Depotbank, nicht vor der Pleite des Unternehmens, dessen Anleihe oder Zertifikat der Kunde hält.",
   "ergaenzt": true
  },
  {
   "id": "vr-k10",
   "titel": "LF12 · Altersvorsorge im Drei-Schichten-Modell",
   "ergaenzt": true,
   "erklaert": "Die Altersvorsorge wird in drei Schichten eingeteilt. Schicht 1 ist die Basisversorgung: gesetzliche Rentenversicherung und Basisrente (Rürup). Schicht 2 ist die Zusatzversorgung: betriebliche Altersversorgung (bAV) und Riester-Rente. Schicht 3 ist die private Vorsorge ohne besondere Förderung: private Rentenversicherung, Kapitallebensversicherung, Fondssparpläne. Die gesetzliche Rente arbeitet im Umlageverfahren: Die heutigen Beitragszahler finanzieren die heutigen Renten. Weil immer weniger Beitragszahler auf immer mehr Rentner kommen, entsteht eine Versorgungslücke.",
   "beispiel": "Herr Wolf verdient 3.200 € netto. Er rechnet mit einer gesetzlichen Rente von 1.500 € netto und möchte im Alter 80 % seines heutigen Nettos, also 2.560 €. Versorgungslücke: 2.560 − 1.500 = 1.060 € im Monat.",
   "tabelle": {
    "kopf": [
     "Schicht",
     "Produkte",
     "Förderung",
     "Auszahlung"
    ],
    "zeilen": [
     [
      "1 Basisversorgung",
      "gesetzliche Rente, Basisrente (Rürup)",
      "Beiträge als Sonderausgaben abziehbar",
      "lebenslange Rente, nicht vererbbar, nicht beleihbar"
     ],
     [
      "2 Zusatzversorgung",
      "Riester, betriebliche Altersversorgung",
      "Zulagen oder Steuer- und SV-Freiheit",
      "überwiegend als Rente"
     ],
     [
      "3 private Vorsorge",
      "private Rentenversicherung, Lebensversicherung, Fonds",
      "keine besondere Förderung",
      "flexibel, Kapital oder Rente"
     ]
    ]
   },
   "merksatz": "Basis, Zusatz, Privat: je höher die Schicht, desto flexibler und desto weniger gefördert.",
   "tipp": "Bei „Erläutern“ zur Versorgungslücke: Umlageverfahren, demografischer Wandel, sinkendes Rentenniveau nennen.",
   "achtung": "Der aktuelle Rentenwert ändert sich jedes Jahr zum 1. Juli. Seit 01.07.2026 beträgt er 42,52 € je Entgeltpunkt (Rentenanpassung + 4,24 %, Deutsche Rentenversicherung)."
  },
  {
   "id": "vr-k11",
   "titel": "LF12 · Riester-Rente und Basisrente",
   "ergaenzt": true,
   "erklaert": "Riester fördern darf, wer in der gesetzlichen Rentenversicherung pflichtversichert ist (auch Azubis) oder Beamter ist; der Ehepartner ist mittelbar förderberechtigt. Zulagen: Grundzulage 175 € im Jahr, Kinderzulage 300 € je Kind (ab 2008 geboren) bzw. 185 € (vor 2008), einmalig 200 € Berufseinsteigerbonus unter 25 Jahren. Volle Zulagen gibt es nur, wenn der Mindesteigenbeitrag gezahlt wird: 4 % des rentenversicherungspflichtigen Vorjahresbruttos, höchstens 2.100 €, abzüglich der Zulagen, mindestens 60 € Sockelbetrag. Zusätzlich prüft das Finanzamt, ob der Sonderausgabenabzug bis 2.100 € günstiger ist (Günstigerprüfung). Die Basisrente (Rürup) ist vor allem für Selbstständige gedacht: Beiträge sind seit 2023 zu 100 % als Sonderausgaben abziehbar, bis zum Höchstbetrag (2026: 30.826 € für Ledige, 61.652 € für Verheiratete). Sie zahlt nur eine lebenslange Rente.",
   "beispiel": "Frau Neumann, Vorjahresbrutto 40.000 €, ein Kind (geboren 2015). 4 % von 40.000 € = 1.600 €. Zulagen: 175 + 300 = 475 €. Mindesteigenbeitrag: 1.600 − 475 = 1.125 € im Jahr, also 93,75 € im Monat.",
   "tabelle": {
    "kopf": [
     "Riester-Wert",
     "Betrag"
    ],
    "zeilen": [
     [
      "Grundzulage",
      "175 € im Jahr"
     ],
     [
      "Kinderzulage ab 2008 geboren",
      "300 € je Kind"
     ],
     [
      "Kinderzulage vor 2008 geboren",
      "185 € je Kind"
     ],
     [
      "Berufseinsteigerbonus",
      "einmalig 200 € (unter 25)"
     ],
     [
      "Mindesteigenbeitrag",
      "4 % Vorjahresbrutto, max. 2.100 €, minus Zulagen"
     ],
     [
      "Sockelbetrag",
      "60 € im Jahr"
     ]
    ]
   },
   "merksatz": "4 Prozent vom Vorjahr, minus Zulagen, mindestens 60 Euro.",
   "tipp": "Operator „Ermitteln“ beim Mindesteigenbeitrag: Vorjahresbrutto · 4 %, Deckel 2.100 € prüfen, Zulagen abziehen, Sockel 60 € prüfen.",
   "achtung": "Das Altersvorsorgereformgesetz ist beschlossen (BGBl. I Nr. 156 vom 29.05.2026). Ab 01.01.2027 gibt es für neue Verträge das Altersvorsorgedepot mit neuen Zulagen; bestehende Riester-Verträge laufen weiter. Für 2026 und deine Prüfung gelten die Riester-Werte hier (bisheriges Recht)."
  },
  {
   "id": "vr-k12",
   "titel": "LF12 · Betriebliche Altersversorgung",
   "ergaenzt": true,
   "erklaert": "Jeder in der gesetzlichen Rentenversicherung pflichtversicherte Arbeitnehmer hat Anspruch auf Entgeltumwandlung (§ 1a BetrAVG): Ein Teil des Bruttolohns fließt in eine bAV. Beiträge sind bis 8 % der Beitragsbemessungsgrenze der Rentenversicherung steuerfrei (§ 3 Nr. 63 EStG) und bis 4 % sozialversicherungsfrei. Spart der Arbeitgeber dadurch Sozialabgaben, muss er 15 % des umgewandelten Betrags zuschießen. Es gibt fünf Durchführungswege. Die Rente im Alter ist voll steuer- und in der Regel kranken- und pflegeversicherungspflichtig.",
   "beispiel": "BBG Rentenversicherung 2026: 8.450 € im Monat, also 101.400 € im Jahr. Steuerfrei: 8 % = 8.112 € im Jahr (676 € im Monat). Sozialversicherungsfrei: 4 % = 4.056 € im Jahr (338 € im Monat). Wandelt ein Mitarbeiter 200 € im Monat um, zahlt der Arbeitgeber 15 % dazu: 30 €, zusammen 230 €.",
   "tabelle": {
    "kopf": [
     "Durchführungsweg",
     "Träger",
     "extern oder intern"
    ],
    "zeilen": [
     [
      "Direktzusage",
      "Arbeitgeber selbst",
      "intern"
     ],
     [
      "Unterstützungskasse",
      "rechtlich selbstständige Versorgungseinrichtung",
      "extern"
     ],
     [
      "Direktversicherung",
      "Lebensversicherer, Arbeitgeber ist Versicherungsnehmer",
      "extern"
     ],
     [
      "Pensionskasse",
      "rechtlich selbstständiges Versorgungsunternehmen",
      "extern"
     ],
     [
      "Pensionsfonds",
      "rechtlich selbstständige Einrichtung, freiere Anlage",
      "extern"
     ]
    ]
   },
   "merksatz": "8 Prozent steuerfrei, 4 Prozent SV-frei, 15 Prozent Zuschuss vom Chef.",
   "tipp": "Operator „Nennen“: Die fünf Durchführungswege merkst du dir mit „DUD-PP“: Direktzusage, Unterstützungskasse, Direktversicherung, Pensionskasse, Pensionsfonds.",
   "achtung": "Weniger Sozialabgaben heute heißt auch etwas weniger gesetzliche Rente später. Das gehört zur ehrlichen Beratung."
  },
  {
   "id": "vr-k13",
   "titel": "LF12 · Versicherungen und Unterversicherung",
   "ergaenzt": true,
   "erklaert": "Personenversicherungen sichern das Leben und die Arbeitskraft ab: Berufsunfähigkeitsversicherung (wichtigste Absicherung für Berufstätige), Risikolebensversicherung (zahlt nur im Todesfall, z. B. zur Absicherung einer Baufinanzierung), Unfallversicherung, Pflegezusatzversicherung. Sach- und Vermögensversicherungen schützen Sachen und Vermögen: Privathaftpflicht (wichtigste Versicherung überhaupt, Haftung nach § 823 BGB unbegrenzt), Hausrat, Wohngebäude. Ist die Versicherungssumme kleiner als der Versicherungswert, liegt Unterversicherung vor: Der Schaden wird nur anteilig ersetzt (§ 75 VVG). Viele Hausratverträge verzichten auf diese Kürzung, wenn eine Summe je m² Wohnfläche vereinbart ist (Unterversicherungsverzicht).",
   "beispiel": "Hausrat: Versicherungssumme 40.000 €, tatsächlicher Wert 50.000 €, Schaden 10.000 €. Entschädigung = 10.000 · 40.000 : 50.000 = 8.000 €. Der Kunde bleibt auf 2.000 € sitzen.",
   "tabelle": {
    "kopf": [
     "Versicherung",
     "Schützt vor",
     "Dringlichkeit"
    ],
    "zeilen": [
     [
      "Privathaftpflicht",
      "Schadenersatzforderungen Dritter",
      "existenziell, für jeden"
     ],
     [
      "Berufsunfähigkeit",
      "Einkommensausfall bei Krankheit oder Unfall",
      "existenziell für Berufstätige"
     ],
     [
      "Risikolebensversicherung",
      "finanzielle Not der Hinterbliebenen",
      "wichtig bei Familie oder Kredit"
     ],
     [
      "Wohngebäude",
      "Schäden am Haus durch Feuer, Sturm, Leitungswasser",
      "Pflicht der Bank bei Baufinanzierung"
     ],
     [
      "Hausrat",
      "Schäden am Inventar, Einbruchdiebstahl",
      "sinnvoll, meist nicht existenziell"
     ]
    ]
   },
   "merksatz": "Entschädigung = Schaden mal Versicherungssumme durch Versicherungswert.",
   "tipp": "Operator „Beurteilen“ beim Versicherungsschutz: erst existenzielle Risiken (Haftpflicht, BU), dann Sachwerte.",
   "achtung": "Die Risikolebensversicherung hat keinen Sparanteil. Läuft sie ohne Todesfall aus, gibt es kein Geld zurück."
  }
 ],
 "uebung": {
  "karten": [
   {
    "thema": "vr-k1",
    "vorne": "Welche Kündigungsfrist haben Spareinlagen mindestens?",
    "hinten": "3 Monate (§ 21 Abs. 4 RechKredV)."
   },
   {
    "thema": "vr-k1",
    "vorne": "Wie lange laufen Termineinlagen mindestens?",
    "hinten": "30 Tage."
   },
   {
    "thema": "vr-k2",
    "vorne": "Wie hoch ist der Sparer-Pauschbetrag?",
    "hinten": "1.000 € je Person, 2.000 € bei Zusammenveranlagung (seit 2023)."
   },
   {
    "thema": "vr-k2",
    "vorne": "Wie hoch ist die Kirchensteuer auf Kapitalerträge in Sachsen?",
    "hinten": "9 % der Abgeltungsteuer."
   },
   {
    "thema": "vr-k2",
    "vorne": "Formel Abgeltungsteuer mit Kirchensteuer?",
    "hinten": "Abgeltungsteuer = Ertrag : (4 + Kirchensteuersatz), z. B. Ertrag : 4,09."
   },
   {
    "thema": "vr-k3",
    "vorne": "Bis zu welchem Betrag schützt die gesetzliche Einlagensicherung?",
    "hinten": "100.000 € je Kunde und Institut, Auszahlung binnen 7 Arbeitstagen."
   },
   {
    "thema": "vr-k3",
    "vorne": "Was schützt die Institutssicherung der Sparkassen?",
    "hinten": "Das Institut selbst, damit es gar nicht zum Entschädigungsfall kommt."
   },
   {
    "thema": "vr-k4",
    "vorne": "Sparzulage bei VL in Beteiligungen?",
    "hinten": "20 % auf höchstens 400 € im Jahr = 80 €."
   },
   {
    "thema": "vr-k4",
    "vorne": "Sparzulage bei VL in Bausparen?",
    "hinten": "9 % auf höchstens 470 € im Jahr = 42,30 €."
   },
   {
    "thema": "vr-k4",
    "vorne": "Einkommensgrenze für die Arbeitnehmer-Sparzulage seit 2024?",
    "hinten": "Zu versteuerndes Einkommen 40.000 € (Ledige), 80.000 € (Verheiratete)."
   },
   {
    "thema": "vr-k4",
    "vorne": "Wohnungsbauprämie?",
    "hinten": "10 % auf höchstens 700 € bzw. 1.400 €, Einkommensgrenze 35.000 / 70.000 €."
   },
   {
    "thema": "vr-k5",
    "vorne": "Wer zahlt die Stückzinsen?",
    "hinten": "Der Käufer an den Verkäufer, für die Zeit seit dem letzten Zinstermin."
   },
   {
    "thema": "vr-k5",
    "vorne": "Welche Zinsmethode gilt bei Anleihen?",
    "hinten": "act/act."
   },
   {
    "thema": "vr-k6",
    "vorne": "Formel der vereinfachten Rendite?",
    "hinten": "(Kupon + (Rückzahlung − Kaufkurs) : Restlaufzeit) : Kaufkurs · 100."
   },
   {
    "thema": "vr-k7",
    "vorne": "Unterschied Stamm- und Vorzugsaktie?",
    "hinten": "Stammaktie mit Stimmrecht; Vorzugsaktie meist ohne Stimmrecht, dafür bevorzugte Dividende."
   },
   {
    "thema": "vr-k7",
    "vorne": "Was bewirkt eine Stop-Loss-Order?",
    "hinten": "Bei Erreichen des Stoppkurses wird bestens verkauft, Ausführung auch darunter möglich."
   },
   {
    "thema": "vr-k8",
    "vorne": "Teilfreistellung bei Aktienfonds?",
    "hinten": "30 % der Erträge sind steuerfrei."
   },
   {
    "thema": "vr-k8",
    "vorne": "Warum ist ein Fonds bei Insolvenz der Fondsgesellschaft geschützt?",
    "hinten": "Das Fondsvermögen ist Sondervermögen der Anleger."
   },
   {
    "thema": "vr-k9",
    "vorne": "Welche Unterlagen erhält ein Privatkunde nach einer Anlageberatung?",
    "hinten": "Geeignetheitserklärung, Basisinformationsblatt, Kosteninformation."
   },
   {
    "thema": "vr-k9",
    "vorne": "Was muss seit August 2022 zusätzlich erfragt werden?",
    "hinten": "Die Nachhaltigkeitspräferenzen."
   },
   {
    "thema": "vr-k10",
    "vorne": "Was gehört zur Schicht 2 der Altersvorsorge?",
    "hinten": "Riester-Rente und betriebliche Altersversorgung."
   },
   {
    "thema": "vr-k11",
    "vorne": "Riester-Grundzulage?",
    "hinten": "175 € im Jahr."
   },
   {
    "thema": "vr-k11",
    "vorne": "Riester-Kinderzulage für ab 2008 geborene Kinder?",
    "hinten": "300 € im Jahr je Kind."
   },
   {
    "thema": "vr-k11",
    "vorne": "Riester-Sockelbetrag?",
    "hinten": "60 € im Jahr."
   },
   {
    "thema": "vr-k12",
    "vorne": "Wie viel bAV-Beitrag ist 2026 steuerfrei?",
    "hinten": "8 % der BBG RV: 8.112 € im Jahr (676 € im Monat)."
   },
   {
    "thema": "vr-k12",
    "vorne": "Wie viel bAV-Beitrag ist 2026 sozialversicherungsfrei?",
    "hinten": "4 % der BBG RV: 4.056 € im Jahr (338 € im Monat)."
   },
   {
    "thema": "vr-k13",
    "vorne": "Formel Unterversicherung?",
    "hinten": "Entschädigung = Schaden · Versicherungssumme : Versicherungswert."
   },
   {
    "thema": "vr-k14",
    "vorne": "Was ist ein Put?",
    "hinten": "Eine Verkaufsoption: Recht, den Basiswert zum Basispreis zu verkaufen."
   },
   {
    "thema": "vr-k14",
    "vorne": "Höchster Verlust des Optionskäufers?",
    "hinten": "Die gezahlte Prämie."
   },
   {
    "thema": "vr-k14",
    "vorne": "Unterschied Option und Future?",
    "hinten": "Option: bedingtes Termingeschäft (Recht des Käufers). Future: unbedingtes Termingeschäft (Pflicht beider Seiten)."
   },
   {
    "thema": "vr-k14",
    "vorne": "Rechtsnatur eines Zertifikats?",
    "hinten": "Inhaberschuldverschreibung, deshalb Emittentenrisiko."
   },
   {
    "thema": "vr-k15",
    "vorne": "Regelfall der Verwahrung in Deutschland?",
    "hinten": "Girosammelverwahrung bei der Clearstream Banking AG, Miteigentum nach Bruchteilen (§ 5 DepotG)."
   },
   {
    "thema": "vr-k15",
    "vorne": "Was passiert mit dem Depot, wenn die Bank insolvent wird?",
    "hinten": "Die Wertpapiere gehören dem Kunden, er kann sie aussondern (§ 47 InsO)."
   }
  ],
  "mc": [
   {
    "thema": "vr-k1",
    "operator": "Zuordnen",
    "frage": "Ein Kunde will Geld für 6 Monate zu einem festen Zins anlegen. Welche Einlage passt?",
    "optionen": [
     "Sichteinlage",
     "Termineinlage (Festgeld)",
     "Spareinlage mit 3 Monaten Kündigungsfrist",
     "Girokonto"
    ],
    "richtig": 1,
    "erklaerung": "Festgeld: feste Laufzeit, fester Zins."
   },
   {
    "thema": "vr-k2",
    "operator": "Ermitteln",
    "frage": "Zinsen 1.400 €, Freistellungsauftrag 1.000 €, keine Kirchensteuer. Wie hoch sind Abgeltungsteuer und Soli zusammen?",
    "optionen": [
     "100,00 €",
     "105,50 €",
     "369,25 €",
     "350,00 €"
    ],
    "richtig": 1,
    "erklaerung": "Steuerpflichtig 400 €. 25 % = 100 €, Soli 5,5 % = 5,50 €. Zusammen 105,50 €."
   },
   {
    "thema": "vr-k3",
    "operator": "Beurteilen",
    "frage": "Eine Kundin hat 80.000 € Festgeld und 40.000 € Tagesgeld bei derselben Bank. Wie viel schützt die gesetzliche Einlagensicherung?",
    "optionen": [
     "120.000 €",
     "100.000 €",
     "80.000 €",
     "40.000 €"
    ],
    "richtig": 1,
    "erklaerung": "Der Schutz gilt je Kunde und Institut, alle Einlagen zusammen bis 100.000 €."
   },
   {
    "thema": "vr-k4",
    "operator": "Ermitteln",
    "frage": "Ledige Azubine, zvE 12.000 €, spart 600 € VL im Jahr in einen Aktienfonds-Sparplan. Wie hoch ist die Sparzulage?",
    "optionen": [
     "120 €",
     "80 €",
     "54 €",
     "42,30 €"
    ],
    "richtig": 1,
    "erklaerung": "Gefördert höchstens 400 €, 20 % = 80 €."
   },
   {
    "thema": "vr-k5",
    "operator": "Nennen",
    "frage": "Worauf werden Stückzinsen berechnet?",
    "optionen": [
     "Kurswert",
     "Nennwert",
     "Kurswert plus Spesen",
     "Rücknahmepreis"
    ],
    "richtig": 1,
    "erklaerung": "Stückzinsen = Nennwert · Kupon · Tage : Tage des Zinsjahres."
   },
   {
    "thema": "vr-k6",
    "operator": "Beurteilen",
    "frage": "Eine Anleihe mit 4 % Kupon notiert bei 103 %. Wie ist die Rendite bis zur Fälligkeit im Vergleich zum Kupon?",
    "optionen": [
     "höher als 4 %",
     "genau 4 %",
     "niedriger als 4 %",
     "nicht bestimmbar"
    ],
    "richtig": 2,
    "erklaerung": "Über pari gekauft: Bei Rückzahlung zu 100 % entsteht ein Verlust, die Rendite liegt unter dem Kupon."
   },
   {
    "thema": "vr-k7",
    "operator": "Zuordnen",
    "frage": "Welches Recht ist ein Verwaltungsrecht des Aktionärs?",
    "optionen": [
     "Dividende",
     "Bezugsrecht",
     "Stimmrecht in der Hauptversammlung",
     "Anteil am Liquidationserlös"
    ],
    "richtig": 2,
    "erklaerung": "Stimm-, Teilnahme- und Auskunftsrecht sind Verwaltungsrechte."
   },
   {
    "thema": "vr-k8",
    "operator": "Ermitteln",
    "frage": "Anteilwert 80,00 €, Ausgabeaufschlag 4 %. Wie hoch ist der Ausgabepreis?",
    "optionen": [
     "76,80 €",
     "83,20 €",
     "84,00 €",
     "80,00 €"
    ],
    "richtig": 1,
    "erklaerung": "80 · 1,04 = 83,20 €."
   },
   {
    "thema": "vr-k9",
    "operator": "Beurteilen",
    "frage": "Welche Angabe muss vor einer Anlageempfehlung nach § 64 WpHG NICHT eingeholt werden?",
    "optionen": [
     "Kenntnisse und Erfahrungen",
     "Verlusttragfähigkeit",
     "Nachhaltigkeitspräferenzen",
     "Religionszugehörigkeit"
    ],
    "richtig": 3,
    "erklaerung": "Die Religionszugehörigkeit spielt nur für den Kirchensteuerabzug eine Rolle, nicht für die Geeignetheit."
   },
   {
    "thema": "vr-k11",
    "operator": "Ermitteln",
    "frage": "Vorjahresbrutto 30.000 €, kein Kind. Wie hoch ist der Riester-Mindesteigenbeitrag?",
    "optionen": [
     "1.200 €",
     "1.025 €",
     "1.025 € im Monat",
     "60 €"
    ],
    "richtig": 1,
    "erklaerung": "4 % von 30.000 = 1.200 €, minus Grundzulage 175 € = 1.025 € im Jahr."
   },
   {
    "thema": "vr-k12",
    "operator": "Nennen",
    "frage": "Welcher ist KEIN Durchführungsweg der bAV?",
    "optionen": [
     "Direktversicherung",
     "Pensionskasse",
     "Riester-Banksparplan",
     "Unterstützungskasse"
    ],
    "richtig": 2,
    "erklaerung": "Die fünf Wege: Direktzusage, Unterstützungskasse, Direktversicherung, Pensionskasse, Pensionsfonds."
   },
   {
    "thema": "vr-k13",
    "operator": "Beurteilen",
    "frage": "Welche Versicherung ist für eine 25-jährige Berufseinsteigerin am dringendsten?",
    "optionen": [
     "Hausrat",
     "Privathaftpflicht",
     "Kapitallebensversicherung",
     "Glasversicherung"
    ],
    "richtig": 1,
    "erklaerung": "Haftpflichtschäden können existenzbedrohend sein, die Haftung ist unbegrenzt."
   },
   {
    "thema": "vr-k14",
    "operator": "Beurteilen",
    "frage": "Ein Kunde besitzt Aktien und befürchtet fallende Kurse, will die Aktien aber behalten. Welches Geschäft passt?",
    "optionen": [
     "Kauf eines Calls",
     "Kauf eines Puts",
     "Verkauf eines Puts",
     "Kauf eines Discountzertifikats"
    ],
    "richtig": 1,
    "erklaerung": "Mit einem gekauften Put sichert er sich das Recht, zum Basispreis zu verkaufen. Fällt die Aktie, gleicht der Put den Verlust aus."
   },
   {
    "thema": "vr-k15",
    "operator": "Zuordnen",
    "frage": "Welche Leistung ist umsatzsteuerpflichtig?",
    "optionen": [
     "Kontoführung",
     "Kreditvergabe",
     "Depotverwahrung",
     "Überweisung"
    ],
    "richtig": 2,
    "erklaerung": "Verwahrung und Verwaltung von Wertpapieren sind vom Steuerbefreiungstatbestand des § 4 Nr. 8e UStG ausgenommen."
   }
  ],
  "rechnen": [
   {
    "thema": "vr-k1",
    "operator": "Ermitteln",
    "frage": "Festgeld 18.000 € für 120 Tage zu 2,4 % p. a., act/360. Ermitteln Sie die Zinsen.",
    "ergebnis": 144,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "18.000 · 2,4 · 120 : (100 · 360) = 144,00 €."
   },
   {
    "thema": "vr-k2",
    "operator": "Ermitteln",
    "frage": "Verheiratetes Paar (Zusammenveranlagung), Kapitalerträge 3.100 €, gemeinsamer Freistellungsauftrag 2.000 €, keine Kirchensteuer. Ermitteln Sie die Gutschrift nach Steuern.",
    "ergebnis": 2809.88,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Steuerpflichtig 1.100 €. Abgeltungsteuer 275,00 €, Soli 5,5 % = 15,125 → 15,12 €. Gutschrift: 3.100 − 275 − 15,12 = 2.809,88 €."
   },
   {
    "thema": "vr-k2",
    "operator": "Ermitteln",
    "frage": "Kapitalertrag nach Freistellungsauftrag 600 €, Kirchensteuer Sachsen 9 %. Ermitteln Sie die Abgeltungsteuer.",
    "ergebnis": 146.7,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "600 : (4 + 0,09) = 600 : 4,09 = 146,70 €."
   },
   {
    "thema": "vr-k5",
    "operator": "Ermitteln",
    "frage": "Kauf von 20.000 € Nennwert einer 2,5 %-Anleihe zu 101,20 %. 73 Zinstage, Zinsjahr 365 Tage. Ermitteln Sie Kurswert plus Stückzinsen (ohne Spesen).",
    "ergebnis": 20340,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Kurswert 20.000 · 101,20 % = 20.240,00 €. Stückzinsen 20.000 · 2,5 % · 73 : 365 = 100,00 €. Summe 20.340,00 €."
   },
   {
    "thema": "vr-k6",
    "operator": "Ermitteln",
    "frage": "5 %-Anleihe, Kaufkurs 104 %, Restlaufzeit 5 Jahre. Ermitteln Sie die Rendite nach der vereinfachten Formel (zwei Nachkommastellen).",
    "ergebnis": 4.04,
    "einheit": "%",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Kursverlust je Jahr: (100 − 104) : 5 = −0,8. Rendite: (5 − 0,8) : 104 · 100 = 4,04 %."
   },
   {
    "thema": "vr-k8",
    "operator": "Ermitteln",
    "frage": "Ein Kunde legt 3.000 € in einen Fonds an. Anteilwert 60,00 €, Ausgabeaufschlag 5 %. Wie viele Anteile erhält er (drei Nachkommastellen)?",
    "ergebnis": 47.619,
    "einheit": "Anteile",
    "toleranz": 0.001,
    "ergaenzt": true,
    "weg": "Ausgabepreis 60 · 1,05 = 63,00 €. 3.000 : 63 = 47,619 Anteile."
   },
   {
    "thema": "vr-k8",
    "operator": "Ermitteln",
    "frage": "Ein Mischfonds schüttet 500 € aus, Freistellungsauftrag ausgeschöpft, keine Kirchensteuer. Ermitteln Sie die Abgeltungsteuer.",
    "ergebnis": 106.25,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Teilfreistellung 15 %: steuerpflichtig 425 €. 25 % = 106,25 €."
   },
   {
    "thema": "vr-k11",
    "operator": "Ermitteln",
    "frage": "Vorjahresbrutto 62.000 €, zwei Kinder (geboren 2012 und 2016). Ermitteln Sie den Riester-Mindesteigenbeitrag im Jahr.",
    "ergebnis": 1325,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "4 % von 62.000 = 2.480 €, gedeckelt auf 2.100 €. Zulagen 175 + 300 + 300 = 775 €. 2.100 − 775 = 1.325 €."
   },
   {
    "thema": "vr-k12",
    "operator": "Ermitteln",
    "frage": "Ein Mitarbeiter wandelt 150 € im Monat in eine Direktversicherung um, der Arbeitgeber spart Sozialabgaben. Wie viel fließt im Monat insgesamt in den Vertrag?",
    "ergebnis": 172.5,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Arbeitgeberzuschuss 15 % von 150 € = 22,50 €. 150 + 22,50 = 172,50 €."
   },
   {
    "thema": "vr-k13",
    "operator": "Ermitteln",
    "frage": "Hausrat: Versicherungssumme 52.000 €, Versicherungswert 65.000 €, Schaden 7.500 €, kein Unterversicherungsverzicht. Ermitteln Sie die Entschädigung.",
    "ergebnis": 6000,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "7.500 · 52.000 : 65.000 = 6.000,00 €."
   },
   {
    "thema": "vr-k14",
    "operator": "Ermitteln",
    "frage": "Ein Kunde kauft Puts auf 200 Aktien, Basispreis 50 €, Prämie 3 € je Aktie. Am Fälligkeitstag steht die Aktie bei 44 €. Ermitteln Sie seinen Gewinn.",
    "ergebnis": 600,
    "einheit": "€",
    "toleranz": 0.5,
    "ergaenzt": true,
    "weg": "Innerer Wert 50 − 44 = 6 € je Aktie. Minus Prämie 3 € = 3 € Gewinn je Aktie. 3 · 200 = 600 €."
   },
   {
    "thema": "vr-k14",
    "operator": "Ermitteln",
    "frage": "Discountzertifikat: Kaufpreis 42 €, Cap 50 €. Ermitteln Sie den Höchstertrag in Prozent (2 Nachkommastellen).",
    "ergebnis": 19.05,
    "einheit": "%",
    "toleranz": 0.01,
    "ergaenzt": true,
    "weg": "Höchster Rückzahlungsbetrag = Cap 50 €. (50 − 42) : 42 · 100 = 19,05 %."
   },
   {
    "thema": "vr-k15",
    "operator": "Ermitteln",
    "frage": "Kurswert im Depot 65.000 €, Depotentgelt 0,12 % im Jahr zuzüglich 19 % Umsatzsteuer. Ermitteln Sie die Belastung.",
    "ergebnis": 92.82,
    "einheit": "€",
    "toleranz": 0.01,
    "ergaenzt": true,
    "weg": "65.000 · 0,12 % = 78,00 €. Umsatzsteuer 19 % = 14,82 €. Belastung 92,82 €."
   }
  ],
  "frei": [
   {
    "thema": "vr-k3",
    "operator": "Erläutern",
    "frage": "Erläutern Sie einer Kundin, wie ihre Einlagen bei der Sparkasse geschützt sind.",
    "loesung": "Gesetzlich sind Einlagen bis 100.000 € je Kunde und Institut geschützt, Auszahlung binnen 7 Arbeitstagen. Zusätzlich gehört die Sparkasse zur Institutssicherung der Sparkassen-Finanzgruppe: Gerät eine Sparkasse in Schwierigkeiten, stützen die anderen Institute sie, sodass es gar nicht zum Ausfall kommt. Diese Sicherung ist amtlich als Einlagensicherungssystem anerkannt."
   },
   {
    "thema": "vr-k5",
    "operator": "Erläutern",
    "frage": "Erläutern Sie das Zinsänderungsrisiko einer festverzinslichen Anleihe.",
    "loesung": "Steigt der Marktzins, werden neue Anleihen mit höherem Kupon ausgegeben. Die alte Anleihe mit niedrigem Kupon ist weniger attraktiv, ihr Kurs fällt, bis ihre Rendite dem Marktzins entspricht. Verkauft der Kunde vor Fälligkeit, kann er einen Verlust erleiden. Hält er bis zum Ende, erhält er 100 % zurück."
   },
   {
    "thema": "vr-k8",
    "operator": "Unterscheiden",
    "frage": "Unterscheiden Sie ausschüttende und thesaurierende Fonds nach Ertragsverwendung und Besteuerung.",
    "loesung": "Ausschüttend: Erträge werden regelmäßig an den Anleger ausgezahlt und bei Zahlung besteuert (nach Teilfreistellung). Thesaurierend: Erträge werden im Fonds wieder angelegt; besteuert wird jährlich die Vorabpauschale (Rücknahmepreis Jahresanfang · Basiszins · 0,7, höchstens die Wertsteigerung), der Rest beim Verkauf."
   },
   {
    "thema": "vr-k9",
    "operator": "Beurteilen",
    "frage": "Herr Stein (45) hat Erfahrung mit Fonds, möchte 20.000 € für 15 Jahre anlegen und nimmt Schwankungen in Kauf. Beurteilen Sie einen weltweit streuenden Aktienfonds für ihn.",
    "loesung": "Pro: langer Anlagehorizont von 15 Jahren, Erfahrung mit Fonds vorhanden, Risikobereitschaft gegeben, breite Streuung mindert das Einzelwertrisiko, Renditechancen höher als bei Einlagen. Contra: Kursschwankungen und zwischenzeitliche Verluste möglich, Kosten (Ausgabeaufschlag, laufende Kosten). Fazit: geeignet, sofern seine Verlusttragfähigkeit ausreicht und er eine Liquiditätsreserve auf dem Konto behält."
   },
   {
    "thema": "vr-k10",
    "operator": "Erläutern",
    "frage": "Erläutern Sie, warum die gesetzliche Rente allein künftig oft nicht reicht.",
    "loesung": "Die gesetzliche Rente arbeitet im Umlageverfahren. Durch den demografischen Wandel (längere Lebenserwartung, wenige Geburten, Renteneintritt geburtenstarker Jahrgänge) kommen weniger Beitragszahler auf mehr Rentner. Das Rentenniveau sinkt im Verhältnis zum Lohn, es entsteht eine Versorgungslücke, die mit betrieblicher und privater Vorsorge geschlossen werden muss."
   },
   {
    "thema": "vr-k11",
    "operator": "Unterscheiden",
    "frage": "Unterscheiden Sie Riester-Rente und Basisrente nach Zielgruppe und Förderung.",
    "loesung": "Riester: für rentenversicherungspflichtige Arbeitnehmer, Beamte und deren Ehepartner; Förderung über Zulagen (175 € Grundzulage, Kinderzulagen) und Günstigerprüfung bis 2.100 € Sonderausgaben. Basisrente: vor allem für Selbstständige und Gutverdiener; Förderung über den Sonderausgabenabzug der Beiträge, seit 2023 zu 100 % bis zum Höchstbetrag, keine Zulagen."
   },
   {
    "thema": "vr-k13",
    "operator": "Begründen",
    "frage": "Begründen Sie, warum eine Familie mit Baufinanzierung eine Risikolebensversicherung abschließen sollte.",
    "loesung": "Stirbt ein Hauptverdiener, fehlt sein Einkommen für die Kreditraten. Die Risikolebensversicherung zahlt dann die vereinbarte Summe aus, mit der der Kredit getilgt oder deutlich reduziert werden kann. So können die Hinterbliebenen das Haus behalten. Weil es keinen Sparanteil gibt, ist der Beitrag niedrig."
   },
   {
    "thema": "vr-k14",
    "operator": "Erläutern",
    "frage": "Erläutern Sie einem Kunden die Hebelwirkung eines Optionsscheins.",
    "loesung": "Der Optionsschein kostet nur einen Bruchteil des Aktienkurses. Steigt die Aktie, steigt der Wert des Optionsscheins prozentual deutlich stärker, zum Beispiel Aktie + 10 %, Optionsschein + 40 %. Der Hebel wirkt aber auch nach unten: Fällt die Aktie oder bewegt sie sich nicht, verliert der Schein stark an Wert und kann bei Fälligkeit wertlos verfallen. Dazu kommt das Emittentenrisiko."
   }
  ]
 }
},
{
 "nr": "Finanzierung",
 "kurz": "Finanzierung",
 "lang": "Finanzierung kompakt",
 "bereich": "FV",
 "lf": [
  9,
  13
 ],
 "titel": "Finanzierungsvorhaben begleiten, LF09 und LF13 in einem",
 "quelle": "Alles Ergänzt (Gesetze und Lehrbuchwissen), bis die Mitschriften abgeglichen sind. Stand 09.11.2026: Grunderwerbsteuer Sachsen 5,5 % (seit 2023). Notar/Grundbuch 2 % und Makler 3,57 % sind Faustwerte. Beleihungsgrenze 60 % ist der übliche Wert (PfandBG), die Sparkasse kann eigene Grundsätze haben. Keine KfW- oder SAB-Beträge eingetragen, weil sie oft wechseln. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): LF09 · Erbbaurecht, Wohnungseigentum und Kapitaldienstfähigkeit.",
 "kapitel": [
  {
   "id": "fv-k0",
   "titel": "Überblick · Was in diesem Bereich drankommt",
   "ergaenzt": true,
   "erklaert": "Der Bereich „Finanzierungsvorhaben begleiten“ prüft am 25.11.2026 in 90 Minuten zwei Welten: private Baufinanzierung (LF09) und Kredite für Geschäfts- und Firmenkunden (LF13). Typische Fälle: Eine Familie kauft ein Haus, du stellst den Finanzierungsplan auf, ermittelst Beleihungsgrenze und Rate und beurteilst die Tragbarkeit. Ein Handwerksbetrieb braucht eine Maschine, du wertest den Jahresabschluss aus, wählst Kreditart und Sicherheit.",
   "beispiel": "Familie Hoffmann kauft in Leipzig eine Doppelhaushälfte für 300.000 €. Aufgaben: Kaufnebenkosten und Darlehensbedarf ermitteln, Grundbuchabteilungen zuordnen, Annuität ermitteln, Haushaltsrechnung beurteilen, Widerrufsrecht erläutern.",
   "tabelle": {
    "kopf": [
     "Lernfeld",
     "Kernthemen",
     "Typische Rechnung"
    ],
    "zeilen": [
     [
      "LF09 Baufinanzierung",
      "Finanzierungsplan, Beleihung, Grundbuch, Grundschuld, Annuitätendarlehen, Bausparen, Verbraucherschutz",
      "Nebenkosten, Beleihungsgrenze, Annuität, Restschuld, Haushaltsrechnung"
     ],
     [
      "LF13 Firmenkunden",
      "Kreditwürdigkeit, Jahresabschluss, Kreditarten, Kreditsicherheiten, Problemkredite",
      "Bilanzkennzahlen, Skonto, Abzahlungsdarlehen"
     ]
    ]
   },
   "merksatz": "Erst Bedarf, dann Wert, dann Rate, dann Sicherheit.",
   "tipp": "Bei Baufinanzierung geben die Zahlen der ersten Teilaufgabe oft die Basis für alles Weitere. Prüfe sie einmal nach, bevor du weiterrechnest.",
   "achtung": "Grunderwerbsteuer ist Ländersache. In Sachsen sind es seit 2023 5,5 %, in Prüfungsaufgaben steht der Satz aber meist dabei. Nimm immer den Satz aus der Aufgabe."
  },
  {
   "id": "fv-k1",
   "titel": "LF09 · Finanzierungsplan und Kaufnebenkosten",
   "ergaenzt": true,
   "erklaert": "Zum Kaufpreis kommen Kaufnebenkosten: Grunderwerbsteuer (Sachsen 5,5 %), Notar und Grundbuch (Faustwert etwa 2 %) und gegebenenfalls Maklerprovision. Bei Wohnung oder Einfamilienhaus darf der Käufer als Verbraucher höchstens so viel Provision zahlen wie der Verkäufer (§ 656c BGB), üblich sind je Seite 3,57 % inklusive Umsatzsteuer. Gesamtkosten minus Eigenkapital ergibt den Darlehensbedarf. Banken erwarten, dass mindestens die Nebenkosten aus Eigenkapital bezahlt werden.",
   "beispiel": "Kaufpreis 300.000 €. Grunderwerbsteuer 5,5 % = 16.500 €, Notar und Grundbuch 2 % = 6.000 €, Makler 3,57 % = 10.710 €. Nebenkosten 33.210 €, Gesamtkosten 333.210 €. Eigenkapital 70.000 €: Darlehensbedarf 263.210 €.",
   "tabelle": {
    "kopf": [
     "Kostenart",
     "Satz",
     "Bei 300.000 €"
    ],
    "zeilen": [
     [
      "Grunderwerbsteuer Sachsen",
      "5,5 %",
      "16.500 €"
     ],
     [
      "Notar und Grundbuch",
      "ca. 2 %",
      "6.000 €"
     ],
     [
      "Makler (Käuferanteil)",
      "3,57 % inkl. USt",
      "10.710 €"
     ],
     [
      "Summe Nebenkosten",
      "11,07 %",
      "33.210 €"
     ]
    ]
   },
   "merksatz": "Gesamtkosten minus Eigenkapital gleich Darlehensbedarf.",
   "tipp": "Operator „Ermitteln“: Erst jede Nebenkostenart einzeln, dann Summe, dann Gesamtkosten, dann Abzug Eigenkapital. Jede Zeile bringt Teilpunkte.",
   "achtung": "Die Grunderwerbsteuer wird auf den Kaufpreis berechnet, nicht auf das Darlehen und nicht auf die Gesamtkosten."
  },
  {
   "id": "fv-k2",
   "titel": "LF09 · Beleihungswert und Beleihungsgrenze",
   "ergaenzt": true,
   "erklaert": "Der Beleihungswert ist der Wert, den die Bank dauerhaft für erzielbar hält. Er wird vorsichtig ermittelt und liegt meist unter dem Kaufpreis. Bei selbst genutzten Häusern dient das Sachwertverfahren (Bodenwert plus Gebäudewert), bei vermieteten Objekten das Ertragswertverfahren, bei Eigentumswohnungen oft das Vergleichswertverfahren. Die Beleihungsgrenze ist der Anteil des Beleihungswerts, der als erstrangiger Realkredit gilt, typischerweise 60 % (wie bei Pfandbriefen, § 14 PfandBG). Darlehen darüber sind nachrangig und tragen meist einen Zinsaufschlag.",
   "beispiel": "Beleihungswert 270.000 €. Beleihungsgrenze 60 % = 162.000 €. Bei einem Darlehensbedarf von 263.210 € sind 162.000 € erstrangig und 101.210 € nachrangig. Der Beleihungsauslauf beträgt 263.210 : 270.000 = 97,5 %.",
   "tabelle": {
    "kopf": [
     "Verfahren",
     "Wann",
     "Grundidee"
    ],
    "zeilen": [
     [
      "Sachwertverfahren",
      "selbst genutzte Ein- und Zweifamilienhäuser",
      "Bodenwert plus Wert des Gebäudes"
     ],
     [
      "Ertragswertverfahren",
      "vermietete Objekte",
      "Wert aus nachhaltig erzielbarer Miete"
     ],
     [
      "Vergleichswertverfahren",
      "Eigentumswohnungen, Bauland",
      "Wert aus Preisen vergleichbarer Objekte"
     ]
    ]
   },
   "merksatz": "Beleihungswert ist vorsichtig, 60 Prozent davon sind erstrangig.",
   "tipp": "Bei „Erläutern“: Unterschied Marktwert (heute erzielbar) und Beleihungswert (dauerhaft erzielbar, Sicherheitsabschläge) zeigen.",
   "achtung": "Die Beleihungsgrenze bezieht sich auf den Beleihungswert, nicht auf den Kaufpreis."
  },
  {
   "id": "fv-k3",
   "titel": "LF09 · Grundbuch und Grundschuld",
   "ergaenzt": true,
   "erklaert": "Das Grundbuch beim Amtsgericht zeigt die Rechtsverhältnisse eines Grundstücks. Es hat ein Bestandsverzeichnis (Lage, Größe) und drei Abteilungen: I Eigentümer, II Lasten und Beschränkungen (z. B. Wegerecht, Wohnrecht, Vorkaufsrecht, Auflassungsvormerkung), III Grundpfandrechte (Hypothek, Grundschuld, Rentenschuld). Banken sichern Baufinanzierungen fast immer mit einer Grundschuld. Sie ist nicht akzessorisch: Sie besteht unabhängig von der Forderung, die Verbindung schafft die Sicherungszweckerklärung. Die Hypothek ist akzessorisch: Sie hängt an einer bestimmten Forderung und sinkt mit der Tilgung. Der Rang entscheidet, wer bei einer Zwangsversteigerung zuerst bedient wird: in derselben Abteilung nach der Reihenfolge der Eintragung, zwischen Abteilungen nach dem Datum der Eintragung (§ 879 BGB).",
   "beispiel": "Familie Hoffmann bestellt eine Buchgrundschuld über 263.210 € zugunsten der Sparkasse in Abteilung III, Rang 1. Die Grundschuld bleibt nach voller Tilgung bestehen und kann für einen späteren Kredit erneut genutzt werden oder gelöscht werden.",
   "tabelle": {
    "kopf": [
     "Teil",
     "Inhalt",
     "Beispiel"
    ],
    "zeilen": [
     [
      "Bestandsverzeichnis",
      "Grundstück",
      "Flur, Flurstück, Größe"
     ],
     [
      "Abteilung I",
      "Eigentümer",
      "Eheleute Hoffmann je zur Hälfte"
     ],
     [
      "Abteilung II",
      "Lasten und Beschränkungen",
      "Wegerecht, Auflassungsvormerkung"
     ],
     [
      "Abteilung III",
      "Grundpfandrechte",
      "Grundschuld 263.210 € für die Sparkasse"
     ]
    ]
   },
   "merksatz": "Eins wem, zwei was belastet, drei wer Geld bekommt.",
   "tipp": "Operator „Unterscheiden“ Grundschuld und Hypothek: Akzessorietät, Höhe nach Tilgung, Wiederverwendbarkeit, Bedeutung in der Praxis.",
   "achtung": "Die Auflassungsvormerkung steht in Abteilung II, nicht in III. Sie sichert den Anspruch des Käufers auf Eigentumsübertragung."
  },
  {
   "id": "fv-k4",
   "titel": "LF09 · Annuitätendarlehen und Zinsbindung",
   "ergaenzt": true,
   "erklaert": "Beim Annuitätendarlehen bleibt die Rate (Annuität) während der Zinsbindung gleich. Weil die Restschuld sinkt, wird der Zinsanteil kleiner und der Tilgungsanteil größer. Annuität im Jahr = Darlehen · (Sollzins + anfängliche Tilgung). Nach Ende der Zinsbindung bleibt eine Restschuld, die neu finanziert wird (Anschlussfinanzierung, z. B. mit Forward-Darlehen). Der Kunde kann ein Festzinsdarlehen nach § 489 BGB 10 Jahre nach vollständiger Auszahlung mit 6 Monaten Frist kündigen, ohne Vorfälligkeitsentschädigung. Wer vorher aussteigt, zahlt meist eine Vorfälligkeitsentschädigung.",
   "beispiel": "Darlehen 250.000 €, Sollzins 3,6 %, anfängliche Tilgung 2 %. Annuität: 250.000 · 5,6 % = 14.000 € im Jahr, also 1.166,67 € im Monat. Jahr 1 (jährliche Zahlung): Zinsen 9.000 €, Tilgung 5.000 €, Restschuld 245.000 €. Jahr 2: Zinsen 8.820 €, Tilgung 5.180 €, Restschuld 239.820 €. Restschuld nach 10 Jahren: 191.071,23 €.",
   "tabelle": {
    "kopf": [
     "Jahr",
     "Zinsen",
     "Tilgung",
     "Restschuld"
    ],
    "zeilen": [
     [
      "1",
      "9.000,00 €",
      "5.000,00 €",
      "245.000,00 €"
     ],
     [
      "2",
      "8.820,00 €",
      "5.180,00 €",
      "239.820,00 €"
     ],
     [
      "3",
      "8.633,52 €",
      "5.366,48 €",
      "234.453,52 €"
     ]
    ]
   },
   "merksatz": "Rate bleibt, Zins sinkt, Tilgung wächst um die ersparten Zinsen.",
   "tipp": "Operator „Ermitteln“ beim Tilgungsplan: Restschuld · Zins = Zinsen; Annuität − Zinsen = Tilgung; Restschuld − Tilgung = neue Restschuld.",
   "achtung": "Monatliche Raten verringern die Restschuld schneller als eine Jahreszahlung. Rechne in der Prüfung mit der Zahlungsweise, die in der Aufgabe steht."
  },
  {
   "id": "fv-k5",
   "titel": "LF09 · Bausparen und Fördermittel",
   "ergaenzt": true,
   "erklaert": "Der Bausparvertrag hat drei Phasen. In der Sparphase spart der Kunde meist 40 bis 50 % der Bausparsumme an. Ist das Mindestsparguthaben erreicht und die Bewertungszahl hoch genug, wird der Vertrag zugeteilt. In der Darlehensphase bekommt er Guthaben plus Bauspardarlehen zu einem schon bei Vertragsschluss festgelegten Zins. Vorteile: Zinssicherheit, nachrangige Besicherung möglich, Förderung durch Wohnungsbauprämie und Arbeitnehmer-Sparzulage. Zusätzlich gibt es Förderkredite der KfW (z. B. für Familien beim Wohneigentum oder für energieeffiziente Neubauten) und Landesprogramme der Sächsischen Aufbaubank. Förderkredite werden über die Hausbank beantragt, vor Vertragsschluss.",
   "beispiel": "Bausparsumme 50.000 €, Mindestsparguthaben 40 %. Der Kunde muss 20.000 € ansparen; bei Zuteilung erhält er die 20.000 € Guthaben und 30.000 € Bauspardarlehen.",
   "tabelle": {
    "kopf": [
     "Phase",
     "Was passiert"
    ],
    "zeilen": [
     [
      "Sparphase",
      "regelmäßige Sparraten, Guthabenzins, Abschlussgebühr meist 1 bis 1,6 % der Bausparsumme"
     ],
     [
      "Zuteilung",
      "Mindestsparguthaben, Mindestsparzeit und Bewertungszahl erreicht"
     ],
     [
      "Darlehensphase",
      "Auszahlung von Guthaben und Darlehen, fester Darlehenszins, hohe Tilgung"
     ]
    ]
   },
   "merksatz": "Ansparen, zuteilen, finanzieren.",
   "tipp": "Bei „Beurteilen“ des Bausparens: Zinssicherheit gegen niedrige Guthabenzinsen und Abschlussgebühr abwägen.",
   "achtung": "KfW-Programme, Konditionen und Einkommensgrenzen ändern sich oft. Hier stehen bewusst keine Beträge; aktuelle Werte auf kfw.de und sab.sachsen.de prüfen."
  },
  {
   "id": "fv-k6",
   "titel": "LF09 · Verbraucherschutz bei Immobiliar-Darlehen",
   "ergaenzt": true,
   "erklaert": "Ein Darlehen an einen Verbraucher, das durch ein Grundpfandrecht gesichert ist oder dem Kauf oder Bau einer Immobilie dient, ist ein Immobiliar-Verbraucherdarlehensvertrag (§ 491 Abs. 3 BGB). Die Bank muss rechtzeitig vorher das ESIS-Merkblatt aushändigen (Europäisches Standardisiertes Merkblatt), die Kreditwürdigkeit gründlich prüfen (§ 505a, § 505b BGB) und den effektiven Jahreszins angeben. Der Kunde hat ein Widerrufsrecht von 14 Tagen. Vor Vertragsschluss muss die Bank ihm ein Angebot geben, an das sie 7 Tage gebunden ist (Bedenkzeit, § 495 Abs. 3 BGB). In der Kreditwürdigkeitsprüfung zählt, ob der Kunde die Raten voraussichtlich aus seinem Einkommen tragen kann, nicht vorrangig der Wert der Immobilie.",
   "beispiel": "Haushaltsrechnung Hoffmann: Nettoeinkommen 4.800 €, Lebenshaltung 2.100 €, Bewirtschaftung des Hauses 350 €, Versicherungen und Sonstiges 400 €. Frei verfügbar: 4.800 − 2.850 = 1.950 €. Rate 1.166,67 €. Reserve: 783,33 €. Die Rate ist tragbar.",
   "tabelle": {
    "kopf": [
     "Pflicht",
     "Inhalt",
     "Rechtsgrundlage"
    ],
    "zeilen": [
     [
      "ESIS-Merkblatt",
      "standardisierte vorvertragliche Information",
      "Art. 247 § 1 EGBGB"
     ],
     [
      "Kreditwürdigkeitsprüfung",
      "Tragbarkeit aus dem Einkommen",
      "§§ 505a, 505b BGB"
     ],
     [
      "Bedenkzeit",
      "Bank 7 Tage an ihr Angebot gebunden",
      "§ 495 Abs. 3 BGB"
     ],
     [
      "Widerrufsrecht",
      "14 Tage ab Vertragsschluss und Pflichtangaben",
      "§§ 495, 355 BGB"
     ],
     [
      "Effektiver Jahreszins",
      "Gesamtkosten in % p. a.",
      "§ 16 PAngV (bis 2022 § 6)"
     ]
    ]
   },
   "merksatz": "Merkblatt, Prüfung, Bedenkzeit, Widerruf.",
   "tipp": "Operator „Beurteilen“ der Tragbarkeit: freie Mittel ermitteln, mit der Rate vergleichen, Reserve für Zinsänderung und Rücklagen nennen, Fazit.",
   "achtung": "Steigende Immobilienpreise ersetzen nicht die Kreditwürdigkeit. Die Bank darf nicht allein auf die Erwartung bauen, dass das Haus mehr wert wird."
  },
  {
   "id": "fv-k11",
   "titel": "LF09 · Erbbaurecht, Wohnungseigentum und Kapitaldienstfähigkeit",
   "erklaert": "Wer ein Haus auf fremdem Grund baut, nutzt oft ein Erbbaurecht. Das ist ein grundstücksgleiches Recht: Es bekommt ein eigenes Erbbaugrundbuch, kann verkauft, vererbt und mit einer Grundschuld belastet werden (Erbbaurechtsgesetz). Der Erbbauberechtigte zahlt dem Grundstückseigentümer einen Erbbauzins, meist über 60 bis 99 Jahre. Bei einer Eigentumswohnung erwirbt der Kunde Sondereigentum an der Wohnung und einen Miteigentumsanteil am Grundstück, eingetragen im Wohnungsgrundbuch (Wohnungseigentumsgesetz). Vor jeder Baufinanzierung prüft die Bank die Kapitaldienstfähigkeit: Reicht das Einkommen nach allen Ausgaben dauerhaft für Zins und Tilgung?",
   "beispiel": "Familie Hoffmann: Nettoeinkommen 4.600 € im Monat. Lebenshaltung 1.850 €, Bewirtschaftungskosten des Hauses 380 €, Auto und Versicherungen 420 €. Bleiben 1.950 €. Das Haus steht auf Erbbaugrund, Erbbauzins 4 % von 80.000 € = 3.200 € im Jahr, also 266,67 € im Monat. Bleiben 1.683,33 €. Darlehen 260.000 € mit 3,6 % Zins und 2 % Tilgung: 14.560 € im Jahr = 1.213,33 € im Monat. Überschuss 470,00 €: Die Familie ist kapitaldienstfähig.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung",
     "Grundlage"
    ],
    "zeilen": [
     [
      "Erbbaurecht",
      "veräußerliches, vererbliches Recht, auf fremdem Grund ein Bauwerk zu haben",
      "§ 1 ErbbauRG"
     ],
     [
      "Erbbaugrundbuch",
      "eigenes Grundbuchblatt für das Erbbaurecht",
      "§ 14 ErbbauRG"
     ],
     [
      "Zustimmungsvorbehalt",
      "Belastung mit Grundschuld braucht oft Zustimmung des Eigentümers",
      "§ 5 ErbbauRG"
     ],
     [
      "Heimfall",
      "Erbbaurecht fällt bei Vertragsverstößen an den Eigentümer zurück",
      "§ 2 ErbbauRG"
     ],
     [
      "Wohnungseigentum",
      "Sondereigentum an der Wohnung + Miteigentumsanteil am Gemeinschaftseigentum",
      "§ 1 WEG"
     ],
     [
      "Kapitaldienstfähigkeit",
      "frei verfügbares Einkommen ≥ Zins + Tilgung",
      "Haushaltsrechnung"
     ],
     [
      "Kapitaldienst im Jahr",
      "Darlehen · (Sollzins + anfängliche Tilgung)",
      "Annuitätendarlehen"
     ]
    ]
   },
   "merksatz": "Einkommen − Ausgaben − Erbbauzins − Kapitaldienst muss **positiv** bleiben.",
   "tipp": "Operator „Beurteilen“ zur Kapitaldienstfähigkeit: Rechnung zeigen, Überschuss nennen und dann bewerten (Reserve für Zinserhöhung nach Ende der Zinsbindung, Kinder, Arbeitsplatz).",
   "achtung": "Die Restlaufzeit des Erbbaurechts muss deutlich länger sein als die Tilgungszeit des Darlehens. Und der Erbbauzins gehört in die Haushaltsrechnung, er wird gern vergessen.",
   "ergaenzt": true
  },
  {
   "id": "fv-k7",
   "titel": "LF13 · Kreditwürdigkeit und Jahresabschluss",
   "ergaenzt": true,
   "erklaert": "Bei Firmenkunden prüft die Bank die persönliche Kreditwürdigkeit (Zuverlässigkeit, fachliche und kaufmännische Qualifikation) und die wirtschaftliche (Jahresabschluss, Auftragslage, Planung). Ab 750.000 € Kreditvolumen muss sie sich die wirtschaftlichen Verhältnisse offenlegen lassen (§ 18 KWG). Aus der Bilanz werden Kennzahlen gebildet: Eigenkapitalquote, Anlagendeckung I und II, Liquidität 1., 2. und 3. Grades, Rentabilität.",
   "beispiel": "Bilanz Tischlerei Kühn: Anlagevermögen 400.000 €, Umlaufvermögen 300.000 € (Vorräte 150.000, Forderungen 110.000, flüssige Mittel 40.000). Eigenkapital 210.000 €, langfristiges Fremdkapital 290.000 €, kurzfristiges 200.000 €. Bilanzsumme 700.000 €. EK-Quote 30 %. Anlagendeckung I: 210 : 400 = 52,5 %. Anlagendeckung II: 500 : 400 = 125 %. Liquidität 1. Grades 20 %, 2. Grades 75 %, 3. Grades 150 %.",
   "tabelle": {
    "kopf": [
     "Kennzahl",
     "Formel",
     "Faustregel"
    ],
    "zeilen": [
     [
      "Eigenkapitalquote",
      "Eigenkapital : Gesamtkapital · 100",
      "je höher, desto unabhängiger"
     ],
     [
      "Anlagendeckung I",
      "Eigenkapital : Anlagevermögen · 100",
      "möglichst 100 %"
     ],
     [
      "Anlagendeckung II",
      "(EK + langfr. FK) : Anlagevermögen · 100",
      "über 100 % (goldene Bilanzregel)"
     ],
     [
      "Liquidität 1. Grades",
      "flüssige Mittel : kurzfr. FK · 100",
      "ca. 20 %"
     ],
     [
      "Liquidität 2. Grades",
      "(flüssige Mittel + Forderungen) : kurzfr. FK · 100",
      "mind. 100 %"
     ],
     [
      "Liquidität 3. Grades",
      "Umlaufvermögen : kurzfr. FK · 100",
      "mind. 150 bis 200 %"
     ],
     [
      "Eigenkapitalrentabilität",
      "Gewinn : Eigenkapital · 100",
      "über dem Marktzins"
     ],
     [
      "Umsatzrentabilität",
      "Gewinn : Umsatz · 100",
      "Branchenvergleich"
     ]
    ]
   },
   "merksatz": "Langfristiges Vermögen langfristig finanzieren: Anlagendeckung II über 100.",
   "tipp": "Operator „Beurteilen“ bei Kennzahlen: Wert nennen, mit der Faustregel vergleichen, Folge für den Kredit nennen, Fazit.",
   "achtung": "Liquidität 2. Grades unter 100 % heißt: Die kurzfristigen Schulden sind nicht durch Geld und Forderungen gedeckt. Bei Kühn (75 %) ein Warnsignal."
  },
  {
   "id": "fv-k8",
   "titel": "LF13 · Kreditarten für Firmenkunden",
   "ergaenzt": true,
   "erklaert": "Der Kontokorrentkredit deckt den laufenden Bedarf (Löhne, Material): Der Kunde nutzt eine Kreditlinie nach Bedarf und zahlt Zinsen nur auf die Inanspruchnahme. Investitionskredite finanzieren Maschinen, Fahrzeuge oder Gebäude, als Fälligkeits-, Abzahlungs- oder Annuitätendarlehen. Beim Abzahlungsdarlehen bleibt die Tilgung gleich, die Rate sinkt mit den Zinsen. Der Avalkredit ist eine Bürgschaft der Bank für den Kunden (z. B. Gewährleistungsbürgschaft); die Bank leiht ihren Namen, kein Geld. Alternativen: Leasing (Nutzung statt Kauf), Factoring (Verkauf von Forderungen). Der Lieferantenkredit wirkt bequem, ist aber teuer: Wer kein Skonto zieht, zahlt einen hohen Jahreszins.",
   "beispiel": "Lieferantenrechnung mit „2 % Skonto innerhalb 10 Tagen, 30 Tage netto“. Wer am 30. statt am 10. Tag zahlt, leiht sich das Geld für 20 Tage gegen 2 %. Jahreszins (Faustformel): 2 · 360 : 20 = 36 %. Genauer: 2 : 98 · 360 : 20 = 36,73 %. Selbst ein Kontokorrentkredit zu 10 % ist billiger.",
   "tabelle": {
    "kopf": [
     "Kreditart",
     "Zweck",
     "Rückzahlung"
    ],
    "zeilen": [
     [
      "Kontokorrentkredit",
      "laufende Betriebsmittel",
      "schwankend, Zinsen auf die Inanspruchnahme"
     ],
     [
      "Abzahlungsdarlehen",
      "Investition",
      "gleiche Tilgung, sinkende Rate"
     ],
     [
      "Annuitätendarlehen",
      "Investition, Immobilie",
      "gleiche Rate, steigende Tilgung"
     ],
     [
      "Fälligkeitsdarlehen",
      "Überbrückung, Investition",
      "nur Zinsen, Tilgung am Ende in einer Summe"
     ],
     [
      "Avalkredit",
      "Bürgschaft der Bank gegenüber Dritten",
      "Avalprovision, kein Geldfluss"
     ]
    ]
   },
   "merksatz": "Skonto ziehen lohnt fast immer, sogar mit Kontokorrentkredit.",
   "tipp": "Operator „Unterscheiden“ Abzahlungs- und Annuitätendarlehen: Rate, Tilgung, Zinsanteil, Liquiditätsbelastung am Anfang.",
   "achtung": "Beim Avalkredit fließt kein Geld. Die Bank berechnet Avalprovision, keine Zinsen."
  },
  {
   "id": "fv-k9",
   "titel": "LF13 · Kreditsicherheiten",
   "ergaenzt": true,
   "erklaert": "Sicherheiten sind entweder Personensicherheiten (Bürgschaft, Garantie) oder Sachsicherheiten (Grundschuld, Sicherungsübereignung, Zession, Pfandrecht). Akzessorische Sicherheiten hängen am Bestand der Forderung (Bürgschaft, Pfandrecht, Hypothek). Fiduziarische (treuhänderische) Sicherheiten geben der Bank formal mehr Recht als nötig, gebunden durch eine Sicherungsabrede (Grundschuld, Sicherungsübereignung, Zession). Bei der selbstschuldnerischen Bürgschaft verzichtet der Bürge auf die Einrede der Vorausklage (§ 771, § 773 BGB): Die Bank kann ihn sofort in Anspruch nehmen. Ist die Bürgschaft für den Bürgen ein Handelsgeschäft, hat er diese Einrede ohnehin nicht (§ 349 HGB). Bei der Sicherungsübereignung wird die Bank Eigentümerin einer beweglichen Sache, der Kunde bleibt Besitzer und nutzt sie weiter (Besitzkonstitut, § 930 BGB). Bei der Zession tritt der Kunde Forderungen an die Bank ab (§ 398 BGB), meist still, sodass die Schuldner nichts erfahren.",
   "beispiel": "Tischlerei Kühn kauft eine CNC-Maschine für 120.000 €. Sicherheit: Sicherungsübereignung der Maschine, Kühn arbeitet weiter damit. Für den Kontokorrentkredit tritt Kühn per Globalzession alle Forderungen an Kunden mit den Anfangsbuchstaben A bis Z ab. Der Inhaber übernimmt zusätzlich eine selbstschuldnerische Bürgschaft.",
   "tabelle": {
    "kopf": [
     "Sicherheit",
     "Art",
     "akzessorisch?",
     "Besonderheit"
    ],
    "zeilen": [
     [
      "Bürgschaft",
      "Personensicherheit",
      "ja",
      "Schriftform für Nichtkaufleute (§ 766 BGB)"
     ],
     [
      "Grundschuld",
      "Sachsicherheit, Grundstück",
      "nein",
      "Sicherungszweckerklärung"
     ],
     [
      "Sicherungsübereignung",
      "Sachsicherheit, bewegliche Sache",
      "nein",
      "Kunde bleibt Besitzer"
     ],
     [
      "Zession",
      "Sachsicherheit, Forderungen",
      "nein",
      "still oder offen, Global- oder Mantelzession"
     ],
     [
      "Pfandrecht",
      "Sachsicherheit, bewegliche Sache oder Recht",
      "ja",
      "Bank erhält den Besitz (z. B. Depot)"
     ]
    ]
   },
   "merksatz": "Bei der Übereignung bleibt die Maschine im Betrieb, beim Pfand geht sie zur Bank.",
   "tipp": "Operator „Unterscheiden“ Sicherungsübereignung und Pfandrecht: Eigentum, Besitz, Nutzbarkeit für den Kunden.",
   "achtung": "Bei der stillen Zession zahlt der Schuldner weiter mit befreiender Wirkung an den Kunden. Erst nach Offenlegung muss er an die Bank zahlen."
  },
  {
   "id": "fv-k10",
   "titel": "LF13 · Kreditüberwachung und Problemkredite",
   "ergaenzt": true,
   "erklaert": "Nach der Auszahlung überwacht die Bank den Kredit: Kontoführung, jährliche Unterlagen, Werthaltigkeit der Sicherheiten. Frühwarnzeichen sind zum Beispiel Überziehungen, Lastschriftrückgaben, verspätete Bilanzen, Umsatzrückgang oder Wechsel des Steuerberaters. Je nach Lage folgt Intensivbetreuung, Sanierung oder Abwicklung (Kündigung, Verwertung der Sicherheiten). Insolvenzgründe sind Zahlungsunfähigkeit, drohende Zahlungsunfähigkeit und (bei juristischen Personen) Überschuldung (§§ 17 bis 19 InsO). Geschäftsführer einer GmbH müssen spätestens 3 Wochen nach Eintritt der Zahlungsunfähigkeit und 6 Wochen nach Eintritt der Überschuldung den Antrag stellen (§ 15a InsO). Sicherungseigentum gibt der Bank in der Insolvenz ein Absonderungsrecht.",
   "beispiel": "Die Kühn GmbH überzieht drei Monate in Folge die Kontokorrentlinie und reicht die Bilanz 8 Monate zu spät ein. Die Sparkasse stuft den Kredit in die Intensivbetreuung, fordert aktuelle Zahlen an und prüft die Werthaltigkeit der übereigneten Maschine.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung"
    ],
    "zeilen": [
     [
      "Zahlungsunfähigkeit",
      "fällige Schulden können nicht bezahlt werden (§ 17 InsO)"
     ],
     [
      "drohende Zahlungsunfähigkeit",
      "nur Antragsrecht des Schuldners (§ 18 InsO)"
     ],
     [
      "Überschuldung",
      "Vermögen deckt Schulden nicht, keine positive Fortführungsprognose (§ 19 InsO)"
     ],
     [
      "Aussonderung",
      "Gegenstand gehört nicht zur Masse, z. B. Eigentumsvorbehalt (§ 47 InsO)"
     ],
     [
      "Absonderung",
      "bevorzugte Befriedigung aus dem Erlös, z. B. Grundschuld, Sicherungseigentum (§§ 49 bis 51 InsO)"
     ]
    ]
   },
   "merksatz": "Früh erkennen, intensiv betreuen, sanieren oder abwickeln.",
   "tipp": "Operator „Nennen“ bei Frühwarnzeichen: drei konkrete Kontosignale und ein Signal aus dem Jahresabschluss reichen.",
   "achtung": "Sicherungseigentum führt in der Insolvenz zur Absonderung, nicht zur Aussonderung, obwohl die Bank Eigentümerin ist."
  }
 ],
 "uebung": {
  "karten": [
   {
    "thema": "fv-k1",
    "vorne": "Grunderwerbsteuer in Sachsen?",
    "hinten": "5,5 % des Kaufpreises (seit 01.01.2023)."
   },
   {
    "thema": "fv-k1",
    "vorne": "Wie viel Maklerprovision zahlt ein Verbraucher beim Kauf einer Wohnung höchstens?",
    "hinten": "Höchstens so viel wie der Verkäufer (§ 656c BGB)."
   },
   {
    "thema": "fv-k2",
    "vorne": "Typische Beleihungsgrenze?",
    "hinten": "60 % des Beleihungswerts."
   },
   {
    "thema": "fv-k2",
    "vorne": "Welches Wertermittlungsverfahren für ein vermietetes Mehrfamilienhaus?",
    "hinten": "Ertragswertverfahren."
   },
   {
    "thema": "fv-k3",
    "vorne": "Was steht in Abteilung II des Grundbuchs?",
    "hinten": "Lasten und Beschränkungen, z. B. Wegerecht, Wohnrecht, Auflassungsvormerkung."
   },
   {
    "thema": "fv-k3",
    "vorne": "Was steht in Abteilung III des Grundbuchs?",
    "hinten": "Grundpfandrechte: Hypotheken, Grundschulden, Rentenschulden."
   },
   {
    "thema": "fv-k3",
    "vorne": "Warum ist die Grundschuld nicht akzessorisch?",
    "hinten": "Sie besteht unabhängig von einer Forderung; die Verbindung schafft die Sicherungszweckerklärung."
   },
   {
    "thema": "fv-k4",
    "vorne": "Formel Annuität?",
    "hinten": "Darlehen · (Sollzins + anfängliche Tilgung)."
   },
   {
    "thema": "fv-k4",
    "vorne": "Wann kann ein Festzinsdarlehen ohne Vorfälligkeitsentschädigung gekündigt werden?",
    "hinten": "10 Jahre nach vollständiger Auszahlung mit 6 Monaten Frist (§ 489 BGB)."
   },
   {
    "thema": "fv-k5",
    "vorne": "Drei Phasen des Bausparens?",
    "hinten": "Sparphase, Zuteilung, Darlehensphase."
   },
   {
    "thema": "fv-k6",
    "vorne": "Wie lange ist die Bank bei Immobiliar-Verbraucherdarlehen an ihr Angebot gebunden?",
    "hinten": "7 Tage (§ 495 Abs. 3 BGB)."
   },
   {
    "thema": "fv-k6",
    "vorne": "Wie heißt das Pflicht-Informationsblatt vor einem Immobiliar-Verbraucherdarlehen?",
    "hinten": "ESIS-Merkblatt."
   },
   {
    "thema": "fv-k7",
    "vorne": "Formel Anlagendeckung II?",
    "hinten": "(Eigenkapital + langfristiges Fremdkapital) : Anlagevermögen · 100."
   },
   {
    "thema": "fv-k7",
    "vorne": "Ab welchem Kreditvolumen muss sich die Bank die wirtschaftlichen Verhältnisse offenlegen lassen?",
    "hinten": "Ab 750.000 € (§ 18 KWG)."
   },
   {
    "thema": "fv-k8",
    "vorne": "Was ist ein Avalkredit?",
    "hinten": "Eine Bürgschaft oder Garantie der Bank für den Kunden gegenüber Dritten; Kreditleihe, kein Geldfluss."
   },
   {
    "thema": "fv-k8",
    "vorne": "Faustformel Jahreszins beim Verzicht auf Skonto?",
    "hinten": "Skontosatz · 360 : (Zahlungsziel − Skontofrist)."
   },
   {
    "thema": "fv-k9",
    "vorne": "Was bedeutet Besitzkonstitut bei der Sicherungsübereignung?",
    "hinten": "Die Bank wird Eigentümerin, der Kunde bleibt unmittelbarer Besitzer und nutzt die Sache (§ 930 BGB)."
   },
   {
    "thema": "fv-k9",
    "vorne": "Was ist eine selbstschuldnerische Bürgschaft?",
    "hinten": "Der Bürge verzichtet auf die Einrede der Vorausklage und haftet wie der Schuldner selbst."
   },
   {
    "thema": "fv-k10",
    "vorne": "Frist für den Insolvenzantrag bei Überschuldung (GmbH)?",
    "hinten": "Spätestens 6 Wochen (§ 15a InsO), bei Zahlungsunfähigkeit 3 Wochen."
   },
   {
    "thema": "fv-k10",
    "vorne": "Welches Recht gibt Sicherungseigentum in der Insolvenz?",
    "hinten": "Absonderung."
   },
   {
    "thema": "fv-k11",
    "vorne": "Was ist ein Erbbaurecht?",
    "hinten": "Ein grundstücksgleiches, veräußerliches und vererbliches Recht, auf fremdem Grund ein Bauwerk zu haben; eigenes Erbbaugrundbuch."
   },
   {
    "thema": "fv-k11",
    "vorne": "Woraus besteht Wohnungseigentum?",
    "hinten": "Sondereigentum an der Wohnung und Miteigentumsanteil am Gemeinschaftseigentum (§ 1 WEG)."
   },
   {
    "thema": "fv-k11",
    "vorne": "Wann ist ein Kunde kapitaldienstfähig?",
    "hinten": "Wenn sein frei verfügbares Einkommen dauerhaft für Zins und Tilgung reicht."
   }
  ],
  "mc": [
   {
    "thema": "fv-k1",
    "operator": "Ermitteln",
    "frage": "Kaufpreis 240.000 €, Grunderwerbsteuer 5,5 %, Notar und Grundbuch 2 %, kein Makler. Wie hoch sind die Nebenkosten?",
    "optionen": [
     "13.200 €",
     "18.000 €",
     "4.800 €",
     "26.568 €"
    ],
    "richtig": 1,
    "erklaerung": "5,5 % = 13.200 €, 2 % = 4.800 €, zusammen 18.000 €."
   },
   {
    "thema": "fv-k2",
    "operator": "Ermitteln",
    "frage": "Beleihungswert 320.000 €, Beleihungsgrenze 60 %. Wie hoch ist der erstrangige Teil?",
    "optionen": [
     "192.000 €",
     "128.000 €",
     "320.000 €",
     "256.000 €"
    ],
    "richtig": 0,
    "erklaerung": "320.000 · 60 % = 192.000 €."
   },
   {
    "thema": "fv-k3",
    "operator": "Zuordnen",
    "frage": "In welche Abteilung wird ein Wohnrecht der Eltern eingetragen?",
    "optionen": [
     "Bestandsverzeichnis",
     "Abteilung I",
     "Abteilung II",
     "Abteilung III"
    ],
    "richtig": 2,
    "erklaerung": "Wohnrechte sind Lasten und Beschränkungen: Abteilung II."
   },
   {
    "thema": "fv-k3",
    "operator": "Unterscheiden",
    "frage": "Welche Aussage trifft auf die Hypothek, aber nicht auf die Grundschuld zu?",
    "optionen": [
     "Sie steht in Abteilung III.",
     "Sie ist akzessorisch.",
     "Sie kann vollstreckt werden.",
     "Sie ist ein Grundpfandrecht."
    ],
    "richtig": 1,
    "erklaerung": "Nur die Hypothek hängt am Bestand der Forderung."
   },
   {
    "thema": "fv-k4",
    "operator": "Ermitteln",
    "frage": "Darlehen 180.000 €, Sollzins 4 %, anfängliche Tilgung 2 %. Wie hoch ist die Monatsrate?",
    "optionen": [
     "900 €",
     "600 €",
     "1.080 €",
     "10.800 €"
    ],
    "richtig": 0,
    "erklaerung": "180.000 · 6 % = 10.800 € im Jahr, : 12 = 900 €."
   },
   {
    "thema": "fv-k6",
    "operator": "Nennen",
    "frage": "Wie lange beträgt die Widerrufsfrist bei einem Immobiliar-Verbraucherdarlehen?",
    "optionen": [
     "7 Tage",
     "14 Tage",
     "1 Monat",
     "Kein Widerrufsrecht"
    ],
    "richtig": 1,
    "erklaerung": "14 Tage (§§ 495, 355 BGB); die 7 Tage sind die Bindefrist des Angebots."
   },
   {
    "thema": "fv-k7",
    "operator": "Beurteilen",
    "frage": "Liquidität 2. Grades eines Kunden: 82 %. Wie ist das zu beurteilen?",
    "optionen": [
     "sehr gut, über 20 %",
     "ausreichend, über 50 %",
     "kritisch, die kurzfristigen Schulden sind nicht voll gedeckt",
     "nicht aussagekräftig"
    ],
    "richtig": 2,
    "erklaerung": "Faustregel mind. 100 %."
   },
   {
    "thema": "fv-k8",
    "operator": "Beurteilen",
    "frage": "Ein Kunde kann eine Rechnung mit 3 % Skonto in 10 Tagen oder netto in 30 Tagen zahlen. Sein Kontokorrentkredit kostet 11 %. Was ist richtig?",
    "optionen": [
     "Netto zahlen, weil Kredit teuer ist",
     "Mit Kontokorrent Skonto ziehen, weil der Lieferantenkredit rund 54 % kostet",
     "Egal, beides kostet gleich",
     "Skonto nur ab 5 % sinnvoll"
    ],
    "richtig": 1,
    "erklaerung": "3 · 360 : 20 = 54 % Jahreszins, viel teurer als 11 %."
   },
   {
    "thema": "fv-k9",
    "operator": "Zuordnen",
    "frage": "Welche Sicherheit ist akzessorisch?",
    "optionen": [
     "Grundschuld",
     "Sicherungsübereignung",
     "Bürgschaft",
     "Zession"
    ],
    "richtig": 2,
    "erklaerung": "Bürgschaft (§ 767 BGB) hängt am Bestand der Hauptschuld."
   },
   {
    "thema": "fv-k10",
    "operator": "Zuordnen",
    "frage": "Ein Lieferant hat unter Eigentumsvorbehalt geliefert. Welches Recht hat er in der Insolvenz des Kunden?",
    "optionen": [
     "Absonderung",
     "Aussonderung",
     "Aufrechnung",
     "keines"
    ],
    "richtig": 1,
    "erklaerung": "Die Ware gehört ihm, sie fällt nicht in die Masse: Aussonderung."
   },
   {
    "thema": "fv-k11",
    "operator": "Beurteilen",
    "frage": "Ein Kunde will ein Haus auf Erbbaugrund finanzieren. Das Erbbaurecht läuft noch 25 Jahre, die Tilgung dauert 30 Jahre. Wie beurteilen Sie das?",
    "optionen": [
     "Unproblematisch, das Haus bleibt Sicherheit",
     "Problematisch, die Sicherheit endet vor der vollständigen Tilgung",
     "Unproblematisch, wenn der Erbbauzins niedrig ist",
     "Problematisch, weil Erbbaurechte nicht beleihbar sind"
    ],
    "richtig": 1,
    "erklaerung": "Erbbaurechte sind beleihbar, aber die Restlaufzeit muss die Tilgungszeit deutlich übersteigen. Sonst endet die Sicherheit, bevor der Kredit zurückgezahlt ist."
   }
  ],
  "rechnen": [
   {
    "thema": "fv-k1",
    "operator": "Ermitteln",
    "frage": "Kaufpreis 280.000 €, Grunderwerbsteuer 5,5 %, Notar und Grundbuch 2 %, Makler 3,57 %, Eigenkapital 60.000 €. Ermitteln Sie den Darlehensbedarf.",
    "ergebnis": 250996,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Nebenkosten: 15.400 + 5.600 + 9.996 = 30.996 €. Gesamtkosten 310.996 €. Minus 60.000 € = 250.996 €."
   },
   {
    "thema": "fv-k2",
    "operator": "Ermitteln",
    "frage": "Beleihungswert 290.000 €, Beleihungsgrenze 60 %, Darlehen 230.000 €. Ermitteln Sie den nachrangigen Teil.",
    "ergebnis": 56000,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Erstrangig 290.000 · 60 % = 174.000 €. Nachrangig 230.000 − 174.000 = 56.000 €."
   },
   {
    "thema": "fv-k4",
    "operator": "Ermitteln",
    "frage": "Darlehen 200.000 €, Sollzins 3,5 %, anfängliche Tilgung 2,5 %, jährliche Zahlung. Ermitteln Sie die Restschuld nach dem 2. Jahr.",
    "ergebnis": 189825,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Annuität 12.000 €. Jahr 1: Zinsen 7.000, Tilgung 5.000, Rest 195.000. Jahr 2: Zinsen 6.825, Tilgung 5.175, Rest 189.825,00 €."
   },
   {
    "thema": "fv-k4",
    "operator": "Ermitteln",
    "frage": "Darlehen 320.000 €, Sollzins 3,8 %, anfängliche Tilgung 2 %. Ermitteln Sie die Monatsrate.",
    "ergebnis": 1546.67,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "320.000 · 5,8 % = 18.560 € im Jahr. 18.560 : 12 = 1.546,67 €."
   },
   {
    "thema": "fv-k6",
    "operator": "Ermitteln",
    "frage": "Nettoeinkommen 4.200 €, Lebenshaltung 1.900 €, Bewirtschaftung 300 €, Sonstiges 350 €. Rate 1.400 €. Ermitteln Sie die monatliche Reserve.",
    "ergebnis": 250,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Frei verfügbar: 4.200 − 1.900 − 300 − 350 = 1.650 €. Reserve 1.650 − 1.400 = 250 €."
   },
   {
    "thema": "fv-k7",
    "operator": "Ermitteln",
    "frage": "Anlagevermögen 500.000 €, Eigenkapital 180.000 €, langfristiges Fremdkapital 270.000 €. Ermitteln Sie die Anlagendeckung II.",
    "ergebnis": 90,
    "einheit": "%",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "(180.000 + 270.000) : 500.000 · 100 = 90 %. Unter 100 %: Teile des Anlagevermögens sind kurzfristig finanziert."
   },
   {
    "thema": "fv-k7",
    "operator": "Ermitteln",
    "frage": "Flüssige Mittel 30.000 €, Forderungen 90.000 €, Vorräte 80.000 €, kurzfristiges Fremdkapital 150.000 €. Ermitteln Sie die Liquidität 2. Grades.",
    "ergebnis": 80,
    "einheit": "%",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "(30.000 + 90.000) : 150.000 · 100 = 80 %."
   },
   {
    "thema": "fv-k8",
    "operator": "Ermitteln",
    "frage": "Abzahlungsdarlehen 120.000 €, Laufzeit 5 Jahre, Sollzins 4,5 %, jährliche Zahlung. Ermitteln Sie die Rate im 2. Jahr.",
    "ergebnis": 28320,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Tilgung 120.000 : 5 = 24.000 € im Jahr. Restschuld Anfang Jahr 2: 96.000 €. Zinsen 4,5 % = 4.320 €. Rate 28.320 €."
   },
   {
    "thema": "fv-k8",
    "operator": "Ermitteln",
    "frage": "2 % Skonto innerhalb 14 Tagen, Zahlungsziel 30 Tage. Ermitteln Sie den Jahreszins nach der Faustformel.",
    "ergebnis": 45,
    "einheit": "%",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "2 · 360 : (30 − 14) = 720 : 16 = 45 %."
   },
   {
    "thema": "fv-k11",
    "operator": "Ermitteln",
    "frage": "Nettoeinkommen 3.900 € im Monat, Lebenshaltung 1.500 €, Bewirtschaftungskosten 320 €, sonstige Verpflichtungen 280 €. Darlehen 200.000 € mit 3,8 % Sollzins und 1,5 % anfänglicher Tilgung. Ermitteln Sie den monatlichen Überschuss nach Kapitaldienst.",
    "ergebnis": 916.67,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Frei verfügbar: 3.900 − 1.500 − 320 − 280 = 1.800 €. Kapitaldienst 200.000 · 5,3 % = 10.600 € im Jahr = 883,33 € im Monat. Überschuss 1.800 − 883,33 = 916,67 €."
   }
  ],
  "frei": [
   {
    "thema": "fv-k3",
    "operator": "Unterscheiden",
    "frage": "Unterscheiden Sie Grundschuld und Hypothek nach drei Merkmalen.",
    "loesung": "Akzessorietät: Hypothek hängt an einer bestimmten Forderung, Grundschuld nicht (Verbindung über Sicherungszweckerklärung). Höhe: Hypothek sinkt mit der Tilgung, Grundschuld bleibt in voller Höhe bestehen. Verwendung: Grundschuld kann für neue Kredite wiederverwendet werden, Hypothek erlischt als Fremdrecht mit der Forderung. In der Praxis wird fast nur die Grundschuld genutzt."
   },
   {
    "thema": "fv-k4",
    "operator": "Erläutern",
    "frage": "Erläutern Sie das Zinsänderungsrisiko am Ende der Zinsbindung und eine Möglichkeit, es zu begrenzen.",
    "loesung": "Nach Ablauf der Zinsbindung muss die Restschuld zu dem dann gültigen Marktzins weiterfinanziert werden. Ist der Zins gestiegen, steigt die Rate. Begrenzen lässt sich das durch eine lange Zinsbindung, eine höhere anfängliche Tilgung (kleinere Restschuld), Sondertilgungen oder ein Forward-Darlehen, mit dem der Anschlusszins schon heute gesichert wird."
   },
   {
    "thema": "fv-k6",
    "operator": "Beurteilen",
    "frage": "Familie Weber hat nach Abzug aller Ausgaben 1.500 € frei. Die geplante Rate beträgt 1.450 €. Beurteilen Sie die Tragbarkeit.",
    "loesung": "Die Rate ist rechnerisch gedeckt, die Reserve beträgt aber nur 50 €. Es fehlen Puffer für Reparaturen, Zinsanstieg nach der Zinsbindung, Einkommensausfall oder Familienzuwachs. Fazit: so nicht tragbar. Empfehlung: mehr Eigenkapital, längere Laufzeit oder niedrigere Tilgung mit Sondertilgungsrecht, günstigeres Objekt, Förderkredit prüfen."
   },
   {
    "thema": "fv-k7",
    "operator": "Beurteilen",
    "frage": "Beurteilen Sie die Kreditwürdigkeit der Tischlerei Kühn anhand der Kennzahlen (EK-Quote 30 %, Anlagendeckung II 125 %, Liquidität 2. Grades 75 %).",
    "loesung": "Positiv: Die Eigenkapitalquote von 30 % ist solide, die Anlagendeckung II von 125 % erfüllt die goldene Bilanzregel, das Anlagevermögen ist langfristig finanziert. Negativ: Die Liquidität 2. Grades von 75 % liegt unter 100 %, kurzfristige Schulden sind nicht durch Geld und Forderungen gedeckt, Kühn ist auf den Abverkauf der Vorräte angewiesen. Fazit: grundsätzlich kreditwürdig, kurzfristige Liquidität beobachten, eventuell Teile des Kontokorrents in ein langfristiges Darlehen umschulden."
   },
   {
    "thema": "fv-k9",
    "operator": "Unterscheiden",
    "frage": "Unterscheiden Sie Sicherungsübereignung und Pfandrecht.",
    "loesung": "Sicherungsübereignung: Die Bank wird Eigentümerin, der Kunde bleibt Besitzer und nutzt die Sache weiter (Besitzkonstitut), nicht akzessorisch, geeignet für Maschinen und Fahrzeuge. Pfandrecht: Der Kunde bleibt Eigentümer, die Bank erhält den Besitz (Übergabe), akzessorisch; geeignet für Wertpapiere oder Guthaben, nicht für Sachen, die der Kunde braucht."
   },
   {
    "thema": "fv-k10",
    "operator": "Nennen",
    "frage": "Nennen Sie vier Frühwarnzeichen für einen Problemkredit.",
    "loesung": "Dauerhafte Überziehung der Kreditlinie, Lastschrift- und Scheckrückgaben, verspätete oder ausbleibende Jahresabschlüsse, Umsatzrückgang auf dem Konto, Pfändungen, häufiger Wechsel von Steuerberater oder Hausbank, Zahlungsverzug bei Lieferanten (vier davon)."
   },
   {
    "thema": "fv-k11",
    "operator": "Erläutern",
    "frage": "Erläutern Sie zwei Besonderheiten, die die Sparkasse bei der Finanzierung eines Hauses auf Erbbaugrund beachten muss.",
    "loesung": "1. Restlaufzeit: Das Erbbaurecht muss deutlich länger laufen als das Darlehen getilgt wird, sonst fällt die Sicherheit weg. 2. Zustimmung: Für die Eintragung der Grundschuld im Erbbaugrundbuch ist oft die Zustimmung des Grundstückseigentümers nötig (§ 5 ErbbauRG). Außerdem: Der Erbbauzins belastet die Haushaltsrechnung, und beim Heimfall muss die Grundschuld bestehen bleiben bzw. abgesichert sein."
   }
  ]
 }
},
{
 "nr": "Übergreifend",
 "kurz": "Übergreifend",
 "lang": "Übergreifend kompakt",
 "bereich": "UEB",
 "lf": [
  7,
  11
 ],
 "titel": "Rechnungswesen und Steuerung, LF07 und LF11 in einem",
 "quelle": "Alles Ergänzt (HGB, EStG, CRR und Lehrbuchwissen), bis die Mitschriften abgeglichen sind. Kontenbezeichnungen (KKK usw.) wie in vielen Schulbüchern; die Namen aus deiner Mitschrift werden übernommen, sobald sie vorliegt. Stand 09.11.2026: GWG-Grenze 800 €, CRR-Mindestquoten. Antizyklischer Puffer und Systemrisikopuffer nicht eingetragen. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): LF07 · Grundsätze ordnungsmäßiger Buchführung und Aufbewahrung, LF07 · Anlagenabgang, GWG, Sammelposten und Umsatzsteuer. LF11 · Kosten- und Erlösrechnung: Abgrenzung und kalkulatorische Kosten, LF11 · Kostenarten und Deckungsbeitragsrechnung, LF11 · Gesamtbetriebskalkulation, LF11 · Investitionsentscheidungen.",
 "kapitel": [
  {
   "id": "ueb-k1",
   "titel": "LF07 · Bilanz und Konten einer Bank",
   "ergaenzt": true,
   "erklaert": "Die Bilanz zeigt Vermögen (Aktiva) und Herkunft der Mittel (Passiva). Bei einer Bank ist vieles spiegelverkehrt zum Kunden: Kredite an Kunden sind Forderungen der Bank, also Aktiva. Einlagen der Kunden sind Verbindlichkeiten der Bank, also Passiva. Bestandskonten (aktiv und passiv) werden über die Bilanz abgeschlossen, Erfolgskonten (Aufwand und Ertrag) über die GuV. Ein Buchungssatz nennt immer zuerst das Soll-Konto, dann „an“ und das Haben-Konto. Im Unterricht heißt das Girokonto der Kunden oft KKK (Kundenkontokorrent): Guthaben stehen im Haben, Überziehungen im Soll.",
   "beispiel": "Kundin zahlt 500 € bar auf ihr Girokonto ein. Die Kasse der Bank (Aktiva) steigt, ihre Verbindlichkeit gegenüber der Kundin (Passiva) steigt. Buchungssatz: Kasse 500 € an KKK 500 €.",
   "tabelle": {
    "kopf": [
     "Geschäftsfall",
     "Soll",
     "Haben"
    ],
    "zeilen": [
     [
      "Bareinzahlung auf Girokonto",
      "Kasse",
      "KKK"
     ],
     [
      "Barauszahlung vom Girokonto",
      "KKK",
      "Kasse"
     ],
     [
      "Auszahlung Darlehen auf Girokonto",
      "Kundendarlehen",
      "KKK"
     ],
     [
      "Belastung Kreditzinsen auf Girokonto",
      "KKK",
      "Zinserträge"
     ],
     [
      "Gutschrift Einlagenzinsen auf Girokonto",
      "Zinsaufwendungen",
      "KKK"
     ],
     [
      "Belastung Kontoführungsentgelt",
      "KKK",
      "Provisionserträge"
     ]
    ]
   },
   "merksatz": "Kundengeld bei der Bank ist für die Bank eine Schuld.",
   "tipp": "Operator „Zuordnen“ bei Buchungssätzen: Frag dich bei jedem Konto, ob es zunimmt oder abnimmt und ob es Aktiv, Passiv, Aufwand oder Ertrag ist.",
   "achtung": "Die Bezeichnungen der Konten unterscheiden sich je nach Schulbuch (KKK, „Forderungen an Kunden“, „Verbindlichkeiten gegenüber Kunden“). In der Prüfung gelten die Namen aus der Aufgabe. Wenn deine Mitschrift andere Namen nutzt, werden sie übernommen."
  },
  {
   "id": "ueb-k2",
   "titel": "LF07 · Abschreibungen und Bewertung",
   "ergaenzt": true,
   "erklaert": "Anlagegüter verlieren an Wert. Die lineare Abschreibung verteilt die Anschaffungskosten gleichmäßig auf die Nutzungsdauer, im Anschaffungsjahr monatsgenau (pro rata temporis, § 7 Abs. 1 EStG). Geringwertige Wirtschaftsgüter bis 800 € netto können sofort voll abgeschrieben werden. Forderungen an Kunden werden vorsichtig bewertet: Ist ein Ausfall wahrscheinlich, bildet die Bank eine Einzelwertberichtigung in Höhe des erwarteten Ausfalls. Für das allgemeine Ausfallrisiko des übrigen Bestands bildet sie eine Pauschalwertberichtigung.",
   "beispiel": "Kauf eines Geldautomaten am 01.04. für 30.000 €, Nutzungsdauer 6 Jahre. Jährliche Abschreibung 5.000 €. Im ersten Jahr 9 Monate (April bis Dezember): 5.000 · 9 : 12 = 3.750 €. Buchwert am 31.12.: 26.250 €.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung"
    ],
    "zeilen": [
     [
      "lineare Abschreibung",
      "Anschaffungskosten : Nutzungsdauer"
     ],
     [
      "pro rata temporis",
      "im ersten Jahr nur die Monate ab Anschaffung (Anschaffungsmonat zählt voll)"
     ],
     [
      "geringwertiges Wirtschaftsgut",
      "bis 800 € netto, Sofortabschreibung möglich"
     ],
     [
      "Einzelwertberichtigung",
      "erwarteter Ausfall einer bestimmten Forderung"
     ],
     [
      "Pauschalwertberichtigung",
      "pauschaler Abschlag auf den übrigen Forderungsbestand"
     ]
    ]
   },
   "merksatz": "Abschreiben ab dem Monat, in dem gekauft wird.",
   "tipp": "Operator „Ermitteln“ beim Buchwert: Jahresbetrag, Monate im ersten Jahr, Abschreibung, Buchwert. Vier Zeilen, vier Teilpunkte.",
   "achtung": "Der Anschaffungsmonat zählt voll. Kauf am 20.04. heißt trotzdem 9 Monate im ersten Jahr."
  },
  {
   "id": "ueb-k3",
   "titel": "LF07 · Gewinn- und Verlustrechnung einer Bank",
   "ergaenzt": true,
   "erklaert": "Die GuV einer Bank zeigt, womit sie Geld verdient. Der Zinsüberschuss ist Zinserträge minus Zinsaufwendungen und bei Sparkassen der größte Posten. Dazu kommt der Provisionsüberschuss (Entgelte für Konten, Zahlungsverkehr, Wertpapiere, Vermittlung). Davon gehen Verwaltungsaufwendungen (Personal und Sachkosten) und die Risikovorsorge ab. Das Ergebnis vor Steuern zeigt, wie viel übrig bleibt.",
   "beispiel": "Sparkasse: Zinsüberschuss 70 Mio. €, Provisionsüberschuss 30 Mio. €, Verwaltungsaufwand 60 Mio. €, Risikovorsorge 8 Mio. €. Betriebsergebnis vor Bewertung 40 Mio. €, nach Bewertung 32 Mio. €.",
   "tabelle": {
    "kopf": [
     "Posten",
     "Mio. €"
    ],
    "zeilen": [
     [
      "Zinsüberschuss",
      "70"
     ],
     [
      "+ Provisionsüberschuss",
      "30"
     ],
     [
      "− Verwaltungsaufwand",
      "60"
     ],
     [
      "= Betriebsergebnis vor Bewertung",
      "40"
     ],
     [
      "− Risikovorsorge (Bewertungsergebnis)",
      "8"
     ],
     [
      "= Betriebsergebnis nach Bewertung",
      "32"
     ]
    ]
   },
   "merksatz": "Zinsen plus Provisionen minus Kosten minus Risiko.",
   "tipp": "Bei „Erläutern“ zur Ertragslage: Abhängigkeit vom Zinsüberschuss nennen und warum Provisionen das Ergebnis stabiler machen.",
   "achtung": "Einlagenzinsen sind für die Bank Aufwand, Kreditzinsen Ertrag. Wer das verwechselt, dreht die ganze Rechnung um."
  },
  {
   "id": "ueb-k7",
   "titel": "LF07 · Grundsätze ordnungsmäßiger Buchführung und Aufbewahrung",
   "erklaert": "Jeder Kaufmann muss Bücher führen und darin seine Geschäfte nach den Grundsätzen ordnungsmäßiger Buchführung (GoB) sichtbar machen (§ 238 HGB). Ein sachverständiger Dritter muss sich in angemessener Zeit einen Überblick verschaffen können. Die Buchungen müssen vollständig, richtig, zeitgerecht und geordnet sein (§ 239 HGB). Es gilt: keine Buchung ohne Beleg. Das Grundbuch (Journal) erfasst alle Buchungen zeitlich geordnet, das Hauptbuch sachlich nach Konten. Nebenbücher erläutern einzelne Konten, bei Banken vor allem die Kundenkonten (Kontokorrent). Am Jahresende werden durch Inventur alle Vermögensteile und Schulden gezählt und bewertet. Das Ergebnis ist das Inventar, daraus entsteht die Bilanz.",
   "beispiel": "Die Sparkasse stellt den Jahresabschluss 2026 im März 2027 auf. Die 10-Jahres-Frist beginnt mit Ablauf des Jahres 2027 und endet am 31.12.2037. Einen Geschäftsbrief vom März 2026 bewahrt sie 6 Jahre auf, bis 31.12.2032.",
   "tabelle": {
    "kopf": [
     "Unterlage",
     "Aufbewahrung",
     "Fundstelle"
    ],
    "zeilen": [
     [
      "Bücher, Inventare, Jahresabschlüsse, Lageberichte, Eröffnungsbilanz",
      "10 Jahre",
      "§ 257 HGB, § 147 AO"
     ],
     [
      "Buchungsbelege (Rechnungen, Kontoauszüge, Quittungen)",
      "8 Jahre (seit 2025; für Kreditinstitute erst ab 2026)",
      "§ 257 HGB, § 147 AO"
     ],
     [
      "empfangene und abgesandte Handels- und Geschäftsbriefe",
      "6 Jahre",
      "§ 257 HGB, § 147 AO"
     ],
     [
      "Beginn der Frist",
      "Ende des Kalenderjahres, in dem die Unterlage entstanden ist",
      "§ 257 Abs. 5 HGB"
     ],
     [
      "Grundbuch (Journal)",
      "zeitliche Ordnung aller Buchungen",
      "GoB"
     ],
     [
      "Hauptbuch",
      "sachliche Ordnung nach Konten",
      "GoB"
     ],
     [
      "Inventur → Inventar → Bilanz",
      "zählen, auflisten, kurz gegenüberstellen",
      "§§ 240, 242 HGB"
     ]
    ]
   },
   "merksatz": "**Keine Buchung ohne Beleg**, und Belege 8, Bücher 10, Briefe 6 Jahre.",
   "tipp": "Operator „Nennen“ zu den GoB: vollständig, richtig, zeitgerecht, geordnet, nachprüfbar, Belegprinzip. Vier davon reichen meist für die volle Punktzahl.",
   "achtung": "Die Belegfrist wurde durch das Bürokratieentlastungsgesetz IV von 10 auf 8 Jahre verkürzt, für Banken mit einem Jahr Verzögerung. In älteren Büchern stehen noch 10 Jahre. Gleiche den Stand mit deinem Unterricht ab, Quelle: § 147 AO.",
   "ergaenzt": true
  },
  {
   "id": "ueb-k8",
   "titel": "LF07 · Anlagenabgang, GWG, Sammelposten und Umsatzsteuer",
   "erklaert": "Verkauft die Bank ein Anlagegut, wird zuerst die Abschreibung bis zum Verkaufsmonat gebucht. Dann wird der Restbuchwert ausgebucht. Liegt der Erlös über dem Buchwert, entsteht ein Ertrag aus Anlagenabgang, liegt er darunter, ein Aufwand. Kleine Anschaffungen bis 250 € netto dürfen sofort als Aufwand gebucht werden. Geringwertige Wirtschaftsgüter von 250,01 bis 800 € netto dürfen sofort abgeschrieben werden (§ 6 Abs. 2 EStG). Alternativ kommen alle Güter von 250,01 bis 1.000 € netto eines Jahres in einen Sammelposten, der 5 Jahre lang mit je 20 % aufgelöst wird (§ 6 Abs. 2a EStG). Umsatzsteuer: Die meisten Bankumsätze (Kredite, Einlagen, Zahlungsverkehr, Wertpapierhandel) sind steuerfrei (§ 4 Nr. 8 UStG). Deshalb darf die Bank meist keine Vorsteuer abziehen, die Umsatzsteuer gehört dann zu den Anschaffungskosten. Steuerpflichtig sind z. B. Depotverwahrung, Vermögensverwaltung und Schließfachmiete.",
   "beispiel": "Dienstwagen, gekauft am 01.07.2023 für 36.000 € (ohne Vorsteuerabzug), Nutzungsdauer 6 Jahre, also 6.000 € Abschreibung im Jahr. Buchwert 31.12.2025: 36.000 − 3.000 − 6.000 − 6.000 = 21.000 €. Verkauf am 31.03.2026 für 21.000 €. Abschreibung Januar bis März: 1.500 €, Restbuchwert 19.500 €. Buchungen: Abschreibungen 1.500 € an Geschäftsausstattung 1.500 €; KKK 21.000 € an Geschäftsausstattung 19.500 € und Erträge aus Anlagenabgang 1.500 €.",
   "tabelle": {
    "kopf": [
     "Fall",
     "Behandlung",
     "Fundstelle"
    ],
    "zeilen": [
     [
      "Anschaffung bis 250 € netto",
      "sofort Aufwand",
      "§ 6 Abs. 2a EStG"
     ],
     [
      "250,01 bis 800 € netto",
      "GWG: Sofortabschreibung (Wahlrecht)",
      "§ 6 Abs. 2 EStG"
     ],
     [
      "250,01 bis 1.000 € netto",
      "oder Sammelposten, 5 Jahre je 20 %, für alle Güter des Jahres einheitlich",
      "§ 6 Abs. 2a EStG"
     ],
     [
      "Grenzwerte",
      "immer netto prüfen, auch wenn die Bank keine Vorsteuer abzieht",
      "R 9b EStR"
     ],
     [
      "Verkauf über Buchwert",
      "Ertrag aus Anlagenabgang",
      "HGB"
     ],
     [
      "Verkauf unter Buchwert",
      "Aufwand aus Anlagenabgang",
      "HGB"
     ],
     [
      "Bankumsätze (Kredit, Einlagen, Zahlungsverkehr)",
      "umsatzsteuerfrei, kein Vorsteuerabzug",
      "§ 4 Nr. 8, § 15 Abs. 2 UStG"
     ],
     [
      "Depotverwahrung, Vermögensverwaltung, Schließfach",
      "umsatzsteuerpflichtig, 19 %",
      "§ 4 Nr. 8e UStG (Ausnahme)"
     ]
    ]
   },
   "merksatz": "Erst **abschreiben bis zum Abgang**, dann Buchwert gegen Erlös stellen.",
   "tipp": "Operator „Ermitteln“ beim Anlagenabgang: Abschreibung bis Verkaufsmonat, Restbuchwert, Differenz zum Erlös, Ertrag oder Aufwand benennen.",
   "achtung": "Bei der GWG-Grenze zählt immer der Nettobetrag. Ein Stuhl für 940 € brutto (790 € netto) ist ein GWG, auch wenn die Bank 940 € als Anschaffungskosten bucht.",
   "ergaenzt": true
  },
  {
   "id": "ueb-k4",
   "titel": "LF11 · Marktzinsmethode",
   "ergaenzt": true,
   "erklaert": "Die Marktzinsmethode zeigt, was jedes einzelne Geschäft verdient. Jedes Kundengeschäft wird mit einem Geld- oder Kapitalmarktzins gleicher Laufzeit (GKM-Zins) verglichen. Bei Krediten ist der Konditionsbeitrag (Kundenzins − GKM-Zins) · Volumen, bei Einlagen (GKM-Zins − Kundenzins) · Volumen. Der Strukturbeitrag entsteht aus der Fristentransformation: Die Bank legt kurzfristige Einlagen langfristig als Kredit aus und verdient am Unterschied der Marktzinsen. Er ist Ergebnis der Gesamtbanksteuerung, nicht des Kundenberaters. Zinsüberschuss = Konditionsbeiträge Aktiv + Konditionsbeiträge Passiv + Strukturbeitrag.",
   "beispiel": "Kredit 100.000 € für 10 Jahre zu 5,2 %, GKM-Zins 10 Jahre 3,4 %: Konditionsbeitrag Aktiv 1,8 % = 1.800 €. Einlage 100.000 € für 3 Monate zu 1,5 %, GKM-Zins 3 Monate 2,8 %: Konditionsbeitrag Passiv 1,3 % = 1.300 €. Strukturbeitrag (3,4 − 2,8) % · 100.000 = 600 €. Zinsüberschuss 5.200 − 1.500 = 3.700 € = 1.800 + 1.300 + 600.",
   "tabelle": {
    "kopf": [
     "Beitrag",
     "Formel",
     "Wer verantwortet"
    ],
    "zeilen": [
     [
      "Konditionsbeitrag Aktiv",
      "(Kreditzins − GKM-Zins) · Volumen",
      "Kundenberater, Markt"
     ],
     [
      "Konditionsbeitrag Passiv",
      "(GKM-Zins − Einlagenzins) · Volumen",
      "Kundenberater, Markt"
     ],
     [
      "Strukturbeitrag",
      "Unterschied der GKM-Zinsen aus Fristentransformation",
      "Treasury, Gesamtbanksteuerung"
     ]
    ]
   },
   "merksatz": "Konditionsbeitrag gehört dem Berater, Strukturbeitrag der Gesamtbank.",
   "tipp": "Operator „Ermitteln“: Immer Prozentpunkte zuerst, dann mal Volumen. So siehst du sofort, ob das Vorzeichen stimmt.",
   "achtung": "Bei Einlagen wird umgekehrt gerechnet: GKM-Zins minus Kundenzins. Ein höherer Einlagenzins senkt den Konditionsbeitrag."
  },
  {
   "id": "ueb-k5",
   "titel": "LF11 · Kosten und Nettomarge",
   "ergaenzt": true,
   "erklaert": "Der Konditionsbeitrag allein reicht nicht. Davon gehen Standardrisikokosten ab (erwarteter Ausfall, abhängig von der Bonität) und Standardbetriebskosten (Kosten für Beratung, Bearbeitung und Abwicklung des Geschäfts). Übrig bleibt die Nettomarge, der Beitrag des Geschäfts zum Gewinn. Betriebskosten je Stück ermittelt die Bank, indem sie die Kosten einer Kostenstelle durch die Zahl der Leistungen teilt (z. B. Kosten je Buchung oder je Beratung).",
   "beispiel": "Kredit 100.000 €, Konditionsbeitrag 1.800 €. Standardrisikokosten 0,4 % = 400 €, Standardbetriebskosten 350 €. Nettomarge: 1.800 − 400 − 350 = 1.050 €. Kostenstelle Zahlungsverkehr: 240.000 € Kosten im Jahr bei 80.000 Buchungen: 3,00 € je Buchung.",
   "tabelle": {
    "kopf": [
     "Stufe",
     "Kredit 100.000 €"
    ],
    "zeilen": [
     [
      "Konditionsbeitrag",
      "1.800 €"
     ],
     [
      "− Standardrisikokosten",
      "400 €"
     ],
     [
      "− Standardbetriebskosten",
      "350 €"
     ],
     [
      "= Nettomarge",
      "1.050 €"
     ]
    ]
   },
   "merksatz": "Konditionsbeitrag minus Risiko minus Betrieb gleich Nettomarge.",
   "tipp": "Bei „Beurteilen“ von Konditionen: Ein Kredit mit hohem Zins ist nicht automatisch gut, wenn die Risikokosten wegen schwacher Bonität hoch sind.",
   "achtung": "Risikokosten sind der erwartete Ausfall, kein tatsächlich eingetretener Verlust. Sie werden vorab kalkuliert."
  },
  {
   "id": "ueb-k6",
   "titel": "LF11 · Banksteuerung: Kennzahlen und Eigenmittel",
   "ergaenzt": true,
   "erklaert": "Die Cost-Income-Ratio (CIR) zeigt, wie viel Euro Verwaltungsaufwand die Bank einsetzt, um einen Euro Ertrag zu verdienen: Verwaltungsaufwand : (Zinsüberschuss + Provisionsüberschuss + sonstige ordentliche Erträge) · 100. Je niedriger, desto wirtschaftlicher. Die Eigenkapitalvorschriften der CRR verlangen Eigenmittel von mindestens 8 % der risikogewichteten Aktiva (RWA), davon mindestens 4,5 % hartes Kernkapital und 6 % Kernkapital. Hinzu kommen Kapitalpuffer, etwa der Kapitalerhaltungspuffer von 2,5 % aus hartem Kernkapital. Die Liquiditätsdeckungsquote (LCR) muss mindestens 100 % betragen: Die Bank hält genug liquide Mittel für 30 Tage Stress.",
   "beispiel": "CIR: Verwaltungsaufwand 60 Mio. € : (70 + 30) Mio. € = 60 %. Eigenmittel: RWA 500 Mio. €, Mindestquote 8 % = 40 Mio. €, mit Kapitalerhaltungspuffer 10,5 % = 52,5 Mio. €.",
   "tabelle": {
    "kopf": [
     "Kennzahl",
     "Mindestwert",
     "Grundlage"
    ],
    "zeilen": [
     [
      "hartes Kernkapital",
      "4,5 % der RWA",
      "Art. 92 CRR"
     ],
     [
      "Kernkapital",
      "6 % der RWA",
      "Art. 92 CRR"
     ],
     [
      "Gesamtkapital",
      "8 % der RWA",
      "Art. 92 CRR"
     ],
     [
      "Kapitalerhaltungspuffer",
      "+ 2,5 % hartes Kernkapital",
      "§ 10c KWG"
     ],
     [
      "LCR",
      "mindestens 100 %",
      "CRR, 30-Tage-Stressszenario"
     ],
     [
      "Verschuldungsquote (Leverage Ratio)",
      "mindestens 3 %",
      "Art. 92 CRR"
     ]
    ]
   },
   "merksatz": "4,5 hart, 6 Kern, 8 gesamt, plus 2,5 Puffer.",
   "tipp": "Operator „Erläutern“ zur CIR: Formel, Bedeutung (Kosten je Euro Ertrag) und eine Maßnahme zur Verbesserung (Kosten senken oder Erträge steigern).",
   "achtung": "Weitere Puffer (antizyklischer Puffer, Systemrisikopuffer) setzt die Aufsicht fest. Ihre Höhe wechselt; im Unterricht nachfragen, welche Werte geprüft werden."
  },
  {
   "id": "ueb-k9",
   "titel": "LF11 · Kosten- und Erlösrechnung: Abgrenzung und kalkulatorische Kosten",
   "erklaert": "Die Finanzbuchhaltung (Rechnungskreis I) zeigt Aufwand und Ertrag für die GuV, nach HGB und Steuerrecht. Die Kosten- und Erlösrechnung (Rechnungskreis II) zeigt nur, was der Betrieb für seine eigentliche Leistung verbraucht und verdient. Deshalb wird abgegrenzt: Neutraler Aufwand ist betriebsfremd (Spende), periodenfremd (Nachzahlung für das Vorjahr) oder außerordentlich (Brandschaden) und zählt nicht als Kosten. Aufwand, der gleichzeitig Kosten ist, heißt Grundkosten. Kalkulatorische Kosten setzt die Bank selbst an: Anderskosten ersetzen einen Aufwand durch einen anderen Wert (kalkulatorische Abschreibung vom Wiederbeschaffungswert, kalkulatorische Risikokosten statt tatsächlicher Ausfälle). Zusatzkosten haben gar keinen Aufwand dahinter (kalkulatorische Miete für eigene Räume, kalkulatorische Eigenkapitalzinsen). Bei Erträgen gilt dasselbe: Zweckertrag ist Erlös, neutraler Ertrag (z. B. Gewinn aus Grundstücksverkauf) nicht. Bankbetriebe trennen außerdem den Wertbereich (Zinsen, Risiko, Liquidität) vom Betriebsbereich (Personal, Sachkosten, Provisionen).",
   "beispiel": "Aus der GuV einer Sparkasse: Personalaufwand 2.400.000 €, Sachaufwand 900.000 €, bilanzielle Abschreibung 180.000 €, Spende an den Sportverein 10.000 €, Mietnachzahlung für das Vorjahr 6.000 €. Kalkulatorisch setzt sie 210.000 € Abschreibung vom Wiederbeschaffungswert und 120.000 € Miete für das eigene Hauptgebäude an. Kosten: 2.400.000 + 900.000 (Grundkosten) + 210.000 (Anderskosten) + 120.000 (Zusatzkosten) = 3.630.000 €. Neutral bleiben 16.000 €.",
   "tabelle": {
    "kopf": [
     "Begriff",
     "Bedeutung",
     "Beispiel"
    ],
    "zeilen": [
     [
      "Grundkosten (Zweckaufwand)",
      "Aufwand = Kosten, gleicher Betrag",
      "Gehälter, Sachkosten der Filialen"
     ],
     [
      "neutraler Aufwand",
      "Aufwand, aber keine Kosten",
      "Spende, Nachzahlung Vorjahr, Brandschaden"
     ],
     [
      "Anderskosten",
      "Kosten mit anderem Wert als der Aufwand",
      "kalkulatorische Abschreibung, kalkulatorische Risikokosten"
     ],
     [
      "Zusatzkosten",
      "Kosten ohne Aufwand",
      "kalkulatorische Miete eigener Räume, kalkulatorische Eigenkapitalzinsen"
     ],
     [
      "Zweckertrag = Erlös",
      "Ertrag aus der Banktätigkeit",
      "Zinserträge, Provisionen"
     ],
     [
      "neutraler Ertrag",
      "Ertrag, aber kein Erlös",
      "Gewinn aus Verkauf eines Grundstücks"
     ],
     [
      "Wertbereich",
      "liquiditätsmäßig-finanzieller Bereich",
      "Zinsergebnis, Risikokosten"
     ],
     [
      "Betriebsbereich",
      "technisch-organisatorischer Bereich",
      "Personal- und Sachkosten, Provisionserlöse"
     ]
    ]
   },
   "merksatz": "**Anders**kosten haben einen anderen Betrag, **Zusatz**kosten gar keinen Aufwand.",
   "tipp": "Operator „Zuordnen“: Frage dich bei jedem Posten zuerst, ob er betriebsbedingt und periodengerecht ist. Nur dann ist er Kosten.",
   "achtung": "Die bilanzielle Abschreibung wird in der Kostenrechnung durch die kalkulatorische ersetzt, nicht zusätzlich gerechnet. Sonst zählst du doppelt.",
   "ergaenzt": true
  },
  {
   "id": "ueb-k10",
   "titel": "LF11 · Kostenarten und Deckungsbeitragsrechnung",
   "erklaert": "Fixe Kosten bleiben gleich, egal wie viele Leistungen die Bank erbringt (Miete, Gehälter, Abschreibung eines Geldautomaten). Variable Kosten steigen mit jeder Leistung (Porto je Kontoauszug, Bargeldtransport je Befüllung). Sprungfixe Kosten springen ab einer bestimmten Menge (zweiter Berater nötig). Je mehr Leistungen, desto weniger Fixkosten entfallen auf eine Leistung (Fixkostendegression). Einzelkosten lassen sich einem Produkt direkt zurechnen (Schufa-Entgelt für einen Kredit), Gemeinkosten nicht (Vorstand, Gebäude). Die Deckungsbeitragsrechnung zieht vom Erlös zuerst nur die zurechenbaren Kosten ab. Der Rest (Deckungsbeitrag) deckt die Fixkosten und bildet den Gewinn. In der Kundenkalkulation stuft die Bank: Konditionsbeiträge + Provisionen = DB I; minus Standardbetriebskosten = DB II; minus Standardrisikokosten = DB III.",
   "beispiel": "Geldautomat: Fixkosten 36.000 € im Jahr, variable Kosten 0,15 € je Abhebung. Bei 120.000 Abhebungen: 36.000 + 18.000 = 54.000 €, also 0,45 € je Abhebung. Bei 180.000 Abhebungen: 63.000 €, nur noch 0,35 € je Abhebung. Fremdkunden zahlen 4,00 € je Abhebung, Deckungsbeitrag 3,85 €. Gewinnschwelle: 36.000 : 3,85 = 9.350,6, also ab 9.351 Fremdabhebungen sind die Fixkosten gedeckt (wenn nur Fremdkunden zahlen).",
   "tabelle": {
    "kopf": [
     "Stufe der Kundenkalkulation",
     "Familie Hoffmann"
    ],
    "zeilen": [
     [
      "Konditionsbeitrag Kredit",
      "1.800 €"
     ],
     [
      "+ Konditionsbeitrag Einlagen",
      "600 €"
     ],
     [
      "+ Provisionserlöse",
      "400 €"
     ],
     [
      "= Deckungsbeitrag I",
      "2.800 €"
     ],
     [
      "− Standardbetriebskosten",
      "900 €"
     ],
     [
      "= Deckungsbeitrag II",
      "1.900 €"
     ],
     [
      "− Standardrisikokosten",
      "400 €"
     ],
     [
      "= Deckungsbeitrag III",
      "1.500 €"
     ]
    ]
   },
   "merksatz": "Deckungsbeitrag = Erlös − variable Kosten; Gewinnschwelle = Fixkosten : Deckungsbeitrag je Stück.",
   "tipp": "Operator „Ermitteln“ bei der Gewinnschwelle: Deckungsbeitrag je Stück bilden, Fixkosten teilen, auf die nächste ganze Leistung aufrunden.",
   "achtung": "Die Reihenfolge der DB-Stufen (erst Betriebs- oder erst Risikokosten) ist nicht in jedem Lehrbuch gleich. Nimm die Reihenfolge aus deinem Unterricht, das Ergebnis am Ende ist dasselbe.",
   "ergaenzt": true
  },
  {
   "id": "ueb-k11",
   "titel": "LF11 · Gesamtbetriebskalkulation",
   "erklaert": "Die Gesamtbetriebskalkulation betrachtet die ganze Bank auf einmal. Alle Ergebnisse werden in Prozent des durchschnittlichen Geschäftsvolumens ausgedrückt (Spannen), damit man Jahre und Institute vergleichen kann. Die Zinsspanne ist der Zinsüberschuss im Verhältnis zum Geschäftsvolumen. Die Provisionsspanne gilt entsprechend für den Provisionsüberschuss. Die Bruttobedarfsspanne zeigt die Verwaltungskosten (Personal und Sachkosten). Zieht man davon die Provisionsspanne ab, bleibt die Nettobedarfsspanne: der Teil der Kosten, den das Zinsgeschäft tragen muss. Zinsspanne minus Nettobedarfsspanne ergibt die Bruttogewinnspanne (Betriebsergebnis vor Bewertung). Nach Abzug der Risikospanne bleibt die Nettogewinnspanne.",
   "beispiel": "Durchschnittliches Geschäftsvolumen 2.000 Mio. €. Zinsüberschuss 46 Mio. € = Zinsspanne 2,30 %. Provisionsüberschuss 16 Mio. € = 0,80 %. Personal- und Sachaufwand 40 Mio. € = Bruttobedarfsspanne 2,00 %. Nettobedarfsspanne 2,00 − 0,80 = 1,20 %. Bruttogewinnspanne 2,30 − 1,20 = 1,10 % (22 Mio. €). Bewertungsergebnis 5 Mio. € = 0,25 %. Nettogewinnspanne 0,85 % (17 Mio. €).",
   "tabelle": {
    "kopf": [
     "Spanne",
     "Formel",
     "Beispiel"
    ],
    "zeilen": [
     [
      "Zinsspanne",
      "Zinsüberschuss : Geschäftsvolumen · 100",
      "2,30 %"
     ],
     [
      "Provisionsspanne",
      "Provisionsüberschuss : Geschäftsvolumen · 100",
      "0,80 %"
     ],
     [
      "Bruttobedarfsspanne",
      "Verwaltungsaufwand : Geschäftsvolumen · 100",
      "2,00 %"
     ],
     [
      "Nettobedarfsspanne",
      "Bruttobedarfsspanne − Provisionsspanne",
      "1,20 %"
     ],
     [
      "Bruttogewinnspanne",
      "Zinsspanne − Nettobedarfsspanne",
      "1,10 %"
     ],
     [
      "Risikospanne",
      "Bewertungsergebnis : Geschäftsvolumen · 100",
      "0,25 %"
     ],
     [
      "Nettogewinnspanne",
      "Bruttogewinnspanne − Risikospanne",
      "0,85 %"
     ]
    ]
   },
   "merksatz": "Zinsspanne − (Bedarfsspanne − Provisionsspanne) = Bruttogewinnspanne.",
   "tipp": "Operator „Beurteilen“: Vergleiche die Spannen mit dem Vorjahr oder dem Durchschnitt der Sparkassen und nenne die Ursache (z. B. sinkende Zinsspanne bei hohem Wettbewerb).",
   "achtung": "Spannen beziehen sich auf das durchschnittliche Geschäftsvolumen, nicht auf die Bilanzsumme am Stichtag. Lies in der Aufgabe genau, welche Bezugsgröße gegeben ist.",
   "ergaenzt": true
  },
  {
   "id": "ueb-k12",
   "titel": "LF11 · Investitionsentscheidungen",
   "erklaert": "Vor einer Investition (neuer Geldautomat, Software, Filialumbau) vergleicht die Bank die Alternativen mit statischen Verfahren. Die Kostenvergleichsrechnung stellt die Gesamtkosten gegenüber. Liegen die Fixkosten der einen und die variablen Kosten der anderen höher, gibt es eine kritische Menge, ab der sich die Alternative mit den höheren Fixkosten lohnt. Die Gewinnvergleichsrechnung bezieht zusätzlich die Erlöse ein. Die Rentabilitätsrechnung setzt den Gewinn ins Verhältnis zum durchschnittlich gebundenen Kapital (halbe Anschaffungskosten). Die Amortisationsrechnung zeigt, nach wie vielen Jahren das eingesetzte Geld über die Rückflüsse (Gewinn + Abschreibung) zurück ist.",
   "beispiel": "SB-Terminal A: Fixkosten 18.000 € im Jahr, 0,12 € je Transaktion. Terminal B: 12.000 €, 0,27 €. Kritische Menge: 18.000 + 0,12 x = 12.000 + 0,27 x, also x = 6.000 : 0,15 = 40.000 Transaktionen. Erwartet die Filiale 50.000 Transaktionen, kostet A 24.000 €, B 25.500 €: A ist günstiger. A kostet 60.000 € (5 Jahre Nutzung, Abschreibung 12.000 € im Jahr) und bringt 9.000 € Gewinn im Jahr. Amortisation: 60.000 : (9.000 + 12.000) = 2,86 Jahre. Rentabilität: 9.000 : 30.000 · 100 = 30 %.",
   "tabelle": {
    "kopf": [
     "Verfahren",
     "Formel",
     "Entscheidung"
    ],
    "zeilen": [
     [
      "Kostenvergleich",
      "Fixkosten + variable Kosten · Menge",
      "niedrigere Gesamtkosten"
     ],
     [
      "kritische Menge",
      "Differenz Fixkosten : Differenz variable Stückkosten",
      "darüber lohnt die Alternative mit höheren Fixkosten"
     ],
     [
      "Gewinnvergleich",
      "Erlöse − Kosten",
      "höherer Gewinn"
     ],
     [
      "Rentabilität",
      "Gewinn : (Anschaffungskosten : 2) · 100",
      "höhere Rendite, über Mindestverzinsung"
     ],
     [
      "Amortisationszeit",
      "Anschaffungskosten : (Gewinn + Abschreibung)",
      "kürzere Zeit, unter der Nutzungsdauer"
     ]
    ]
   },
   "merksatz": "Rückfluss = Gewinn + Abschreibung, weil die Abschreibung kein Geld kostet.",
   "tipp": "Operator „Beurteilen“: Neben dem Rechenergebnis immer qualitative Gründe nennen, z. B. Kundenzufriedenheit, Ausfallsicherheit, Wartungsvertrag.",
   "achtung": "Statische Verfahren rechnen mit Durchschnittswerten und ohne Zinseszins. Das ist eine Vereinfachung, im Unterricht reichen sie aber für die Prüfung.",
   "ergaenzt": true
  }
 ],
 "uebung": {
  "karten": [
   {
    "thema": "ueb-k1",
    "vorne": "Sind Kundeneinlagen für die Bank Aktiva oder Passiva?",
    "hinten": "Passiva: Verbindlichkeiten der Bank gegenüber Kunden."
   },
   {
    "thema": "ueb-k1",
    "vorne": "Buchungssatz Barauszahlung vom Girokonto?",
    "hinten": "KKK an Kasse."
   },
   {
    "thema": "ueb-k1",
    "vorne": "Buchungssatz Belastung Kontoführungsentgelt?",
    "hinten": "KKK an Provisionserträge."
   },
   {
    "thema": "ueb-k2",
    "vorne": "Ab wann wird im Anschaffungsjahr abgeschrieben?",
    "hinten": "Ab dem Anschaffungsmonat, monatsgenau (pro rata temporis)."
   },
   {
    "thema": "ueb-k2",
    "vorne": "Grenze für geringwertige Wirtschaftsgüter?",
    "hinten": "800 € netto."
   },
   {
    "thema": "ueb-k2",
    "vorne": "Was ist eine Einzelwertberichtigung?",
    "hinten": "Wertberichtigung in Höhe des erwarteten Ausfalls einer bestimmten, zweifelhaften Forderung."
   },
   {
    "thema": "ueb-k3",
    "vorne": "Größte Ertragsquelle einer Sparkasse?",
    "hinten": "Der Zinsüberschuss."
   },
   {
    "thema": "ueb-k4",
    "vorne": "Formel Konditionsbeitrag Aktiv?",
    "hinten": "(Kreditzins − GKM-Zins gleicher Laufzeit) · Volumen."
   },
   {
    "thema": "ueb-k4",
    "vorne": "Formel Konditionsbeitrag Passiv?",
    "hinten": "(GKM-Zins − Einlagenzins) · Volumen."
   },
   {
    "thema": "ueb-k4",
    "vorne": "Woraus entsteht der Strukturbeitrag?",
    "hinten": "Aus der Fristentransformation, verantwortet von der Gesamtbanksteuerung."
   },
   {
    "thema": "ueb-k5",
    "vorne": "Formel Nettomarge?",
    "hinten": "Konditionsbeitrag − Standardrisikokosten − Standardbetriebskosten."
   },
   {
    "thema": "ueb-k6",
    "vorne": "Formel Cost-Income-Ratio?",
    "hinten": "Verwaltungsaufwand : ordentliche Erträge (Zins- + Provisionsüberschuss + sonstige) · 100."
   },
   {
    "thema": "ueb-k6",
    "vorne": "Mindest-Gesamtkapitalquote nach CRR?",
    "hinten": "8 % der risikogewichteten Aktiva."
   },
   {
    "thema": "ueb-k7",
    "vorne": "Aufbewahrungsfrist für Jahresabschlüsse?",
    "hinten": "10 Jahre ab Ende des Kalenderjahres (§ 257 HGB, § 147 AO)."
   },
   {
    "thema": "ueb-k7",
    "vorne": "Unterschied Grundbuch und Hauptbuch?",
    "hinten": "Grundbuch: zeitliche Ordnung aller Buchungen. Hauptbuch: sachliche Ordnung nach Konten."
   },
   {
    "thema": "ueb-k7",
    "vorne": "Inventur, Inventar, Bilanz?",
    "hinten": "Inventur = Bestandsaufnahme, Inventar = ausführliches Verzeichnis, Bilanz = kurze Gegenüberstellung von Vermögen und Kapital."
   },
   {
    "thema": "ueb-k8",
    "vorne": "GWG-Grenze?",
    "hinten": "250,01 bis 800 € netto, Sofortabschreibung möglich (§ 6 Abs. 2 EStG)."
   },
   {
    "thema": "ueb-k8",
    "vorne": "Sammelposten?",
    "hinten": "Güter 250,01 bis 1.000 € netto, 5 Jahre je 20 % (§ 6 Abs. 2a EStG)."
   },
   {
    "thema": "ueb-k8",
    "vorne": "Warum kann eine Bank meist keine Vorsteuer abziehen?",
    "hinten": "Ihre Umsätze sind überwiegend umsatzsteuerfrei (§ 4 Nr. 8 UStG), Vorsteuer ist dann ausgeschlossen (§ 15 Abs. 2 UStG)."
   },
   {
    "thema": "ueb-k9",
    "vorne": "Was sind Zusatzkosten? Beispiel?",
    "hinten": "Kosten ohne Aufwand in der GuV, z. B. kalkulatorische Miete für eigene Räume, kalkulatorische Eigenkapitalzinsen."
   },
   {
    "thema": "ueb-k9",
    "vorne": "Was sind Anderskosten? Beispiel?",
    "hinten": "Kosten in anderer Höhe als der Aufwand, z. B. kalkulatorische Abschreibung vom Wiederbeschaffungswert."
   },
   {
    "thema": "ueb-k9",
    "vorne": "Drei Arten neutralen Aufwands?",
    "hinten": "betriebsfremd (Spende), periodenfremd (Nachzahlung Vorjahr), außerordentlich (Brandschaden)."
   },
   {
    "thema": "ueb-k10",
    "vorne": "Formel Gewinnschwelle (Break-even)?",
    "hinten": "Fixkosten : Deckungsbeitrag je Stück (Erlös − variable Stückkosten)."
   },
   {
    "thema": "ueb-k10",
    "vorne": "Was ist Fixkostendegression?",
    "hinten": "Mit steigender Menge sinken die fixen Kosten je Leistung."
   },
   {
    "thema": "ueb-k11",
    "vorne": "Formel Nettobedarfsspanne?",
    "hinten": "Bruttobedarfsspanne − Provisionsspanne."
   },
   {
    "thema": "ueb-k11",
    "vorne": "Formel Bruttogewinnspanne?",
    "hinten": "Zinsspanne − Nettobedarfsspanne (= Betriebsergebnis vor Bewertung in % des Geschäftsvolumens)."
   },
   {
    "thema": "ueb-k12",
    "vorne": "Formel Amortisationszeit?",
    "hinten": "Anschaffungskosten : (Gewinn + Abschreibung) im Jahr."
   },
   {
    "thema": "ueb-k12",
    "vorne": "Formel kritische Menge?",
    "hinten": "Differenz der Fixkosten : Differenz der variablen Stückkosten."
   }
  ],
  "mc": [
   {
    "thema": "ueb-k1",
    "operator": "Zuordnen",
    "frage": "Ein Kunde erhält 40 € Zinsen auf seinem Girokonto gutgeschrieben. Buchungssatz?",
    "optionen": [
     "KKK an Zinserträge",
     "Zinsaufwendungen an KKK",
     "Kasse an Zinserträge",
     "Zinserträge an KKK"
    ],
    "richtig": 1,
    "erklaerung": "Für die Bank sind Einlagenzinsen Aufwand; die Verbindlichkeit gegenüber dem Kunden steigt (Haben KKK)."
   },
   {
    "thema": "ueb-k2",
    "operator": "Ermitteln",
    "frage": "Kauf eines Fahrzeugs am 15.07. für 36.000 €, Nutzungsdauer 6 Jahre. Abschreibung im ersten Jahr?",
    "optionen": [
     "6.000 €",
     "3.000 €",
     "2.500 €",
     "3.500 €"
    ],
    "richtig": 1,
    "erklaerung": "6.000 € im Jahr, Juli bis Dezember 6 Monate: 3.000 €."
   },
   {
    "thema": "ueb-k4",
    "operator": "Beurteilen",
    "frage": "Ein Berater erhöht den Zins einer Einlage, sonst bleibt alles gleich. Was passiert?",
    "optionen": [
     "Konditionsbeitrag Passiv steigt",
     "Konditionsbeitrag Passiv sinkt",
     "Strukturbeitrag sinkt",
     "nichts"
    ],
    "richtig": 1,
    "erklaerung": "KB Passiv = (GKM − Kundenzins) · Volumen; höherer Kundenzins senkt ihn."
   },
   {
    "thema": "ueb-k6",
    "operator": "Beurteilen",
    "frage": "Sparkasse A hat eine CIR von 58 %, Sparkasse B von 72 %. Was ist richtig?",
    "optionen": [
     "B arbeitet wirtschaftlicher",
     "A braucht für 1 € Ertrag weniger Verwaltungsaufwand",
     "A hat mehr Eigenkapital",
     "B hat mehr Provisionserträge"
    ],
    "richtig": 1,
    "erklaerung": "Niedrigere CIR = weniger Aufwand je Euro Ertrag."
   },
   {
    "thema": "ueb-k8",
    "operator": "Beurteilen",
    "frage": "Die Sparkasse verkauft einen Drucker mit Restbuchwert 400 € für 250 €. Was ist zu buchen?",
    "optionen": [
     "Ertrag aus Anlagenabgang 150 €",
     "Aufwand aus Anlagenabgang 150 €",
     "Abschreibung 250 €",
     "Kein Erfolg, nur Bestandsbuchung"
    ],
    "richtig": 1,
    "erklaerung": "Erlös unter Buchwert: Die Differenz von 150 € ist Aufwand aus Anlagenabgang."
   },
   {
    "thema": "ueb-k7",
    "operator": "Nennen",
    "frage": "Was gehört nicht zu den Grundsätzen ordnungsmäßiger Buchführung?",
    "optionen": [
     "keine Buchung ohne Beleg",
     "zeitgerechte Erfassung",
     "Buchung nur am Jahresende",
     "Nachprüfbarkeit durch Dritte"
    ],
    "richtig": 2,
    "erklaerung": "Geschäftsvorfälle müssen zeitgerecht erfasst werden (§ 239 HGB), nicht gesammelt am Jahresende."
   },
   {
    "thema": "ueb-k9",
    "operator": "Zuordnen",
    "frage": "Die Sparkasse spendet 5.000 € an einen Kindergarten. Wie ist das in der Kostenrechnung zu behandeln?",
    "optionen": [
     "Grundkosten",
     "Anderskosten",
     "neutraler Aufwand",
     "Zusatzkosten"
    ],
    "richtig": 2,
    "erklaerung": "Die Spende ist Aufwand in der GuV, hat aber nichts mit der Bankleistung zu tun (betriebsfremd), also neutraler Aufwand."
   },
   {
    "thema": "ueb-k10",
    "operator": "Zuordnen",
    "frage": "Welche Kosten sind beim Geldautomaten variabel?",
    "optionen": [
     "Miete für den Standort",
     "Abschreibung des Automaten",
     "Kosten je Bargeldbefüllung und Transaktion",
     "Wartungspauschale im Jahr"
    ],
    "richtig": 2,
    "erklaerung": "Variabel sind Kosten, die mit der Menge steigen. Miete, Abschreibung und Wartungspauschale bleiben gleich."
   },
   {
    "thema": "ueb-k11",
    "operator": "Ermitteln",
    "frage": "Zinsspanne 2,1 %, Bruttobedarfsspanne 1,9 %, Provisionsspanne 0,7 %. Wie hoch ist die Bruttogewinnspanne?",
    "optionen": [
     "0,2 %",
     "0,9 %",
     "1,2 %",
     "2,8 %"
    ],
    "richtig": 1,
    "erklaerung": "Nettobedarfsspanne 1,9 − 0,7 = 1,2 %. Bruttogewinnspanne 2,1 − 1,2 = 0,9 %."
   }
  ],
  "rechnen": [
   {
    "thema": "ueb-k2",
    "operator": "Ermitteln",
    "frage": "Kauf eines Servers am 01.10. für 12.000 €, Nutzungsdauer 4 Jahre. Ermitteln Sie den Buchwert am 31.12. des ersten Jahres.",
    "ergebnis": 11250,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "12.000 : 4 = 3.000 € im Jahr. Oktober bis Dezember 3 Monate: 750 €. Buchwert 12.000 − 750 = 11.250 €."
   },
   {
    "thema": "ueb-k2",
    "operator": "Ermitteln",
    "frage": "Forderung an einen Kunden 45.000 €, die Bank erwartet einen Ausfall von 40 %. Ermitteln Sie die Einzelwertberichtigung.",
    "ergebnis": 18000,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "45.000 · 40 % = 18.000 €."
   },
   {
    "thema": "ueb-k4",
    "operator": "Ermitteln",
    "frage": "Kredit 80.000 € zu 6,1 %, GKM-Zins gleicher Laufzeit 3,6 %. Ermitteln Sie den Konditionsbeitrag.",
    "ergebnis": 2000,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "(6,1 − 3,6) % = 2,5 %. 80.000 · 2,5 % = 2.000 €."
   },
   {
    "thema": "ueb-k4",
    "operator": "Ermitteln",
    "frage": "Festgeld 60.000 € zu 2,1 %, GKM-Zins gleicher Laufzeit 2,7 %. Ermitteln Sie den Konditionsbeitrag Passiv.",
    "ergebnis": 360,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "(2,7 − 2,1) % = 0,6 %. 60.000 · 0,6 % = 360 €."
   },
   {
    "thema": "ueb-k5",
    "operator": "Ermitteln",
    "frage": "Konditionsbeitrag 2.000 €, Standardrisikokosten 0,5 % von 80.000 €, Standardbetriebskosten 420 €. Ermitteln Sie die Nettomarge.",
    "ergebnis": 1180,
    "einheit": "€",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "Risikokosten 400 €. 2.000 − 400 − 420 = 1.180 €."
   },
   {
    "thema": "ueb-k6",
    "operator": "Ermitteln",
    "frage": "Verwaltungsaufwand 48 Mio. €, Zinsüberschuss 55 Mio. €, Provisionsüberschuss 25 Mio. €. Ermitteln Sie die CIR.",
    "ergebnis": 60,
    "einheit": "%",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "48 : (55 + 25) · 100 = 48 : 80 · 100 = 60 %."
   },
   {
    "thema": "ueb-k6",
    "operator": "Ermitteln",
    "frage": "Risikogewichtete Aktiva 800 Mio. €. Wie viel Eigenmittel braucht die Bank mindestens inklusive Kapitalerhaltungspuffer (8 % + 2,5 %)?",
    "ergebnis": 84,
    "einheit": "Mio. €",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "800 · 10,5 % = 84 Mio. €."
   },
   {
    "thema": "ueb-k8",
    "operator": "Ermitteln",
    "frage": "Ein Geldzählautomat wurde am 01.01.2024 für 12.000 € gekauft, Nutzungsdauer 8 Jahre. Er wird am 30.09.2026 für 7.000 € verkauft. Ermitteln Sie den Aufwand aus dem Anlagenabgang.",
    "ergebnis": 875,
    "einheit": "€",
    "toleranz": 0.5,
    "ergaenzt": true,
    "weg": "Abschreibung 12.000 : 8 = 1.500 € im Jahr. 2024 und 2025: 3.000 €. 2026 Januar bis September: 1.500 · 9 : 12 = 1.125 €. Restbuchwert 12.000 − 3.000 − 1.125 = 7.875 €. Erlös 7.000 € liegt 875 € unter dem Restbuchwert 7.875 €: Aufwand aus Anlagenabgang 875 €."
   },
   {
    "thema": "ueb-k8",
    "operator": "Ermitteln",
    "frage": "Die Sparkasse kauft im Jahr einen Schreibtisch für 1.071 € brutto (900 € netto, kein Vorsteuerabzug) und bildet einen Sammelposten. Wie hoch ist die jährliche Auflösung?",
    "ergebnis": 214.2,
    "einheit": "€",
    "toleranz": 0.01,
    "ergaenzt": true,
    "weg": "900 € netto liegt zwischen 250,01 und 1.000 €, also Sammelposten. Anschaffungskosten ohne Vorsteuerabzug: 1.071 €. Auflösung 20 % = 214,20 € im Jahr."
   },
   {
    "thema": "ueb-k9",
    "operator": "Ermitteln",
    "frage": "GuV: Personalaufwand 1.800.000 €, Sachaufwand 700.000 €, bilanzielle Abschreibung 150.000 €, Spende 4.000 €. Kalkulatorisch: Abschreibung 175.000 €, Miete eigenes Gebäude 90.000 €. Ermitteln Sie die Kosten.",
    "ergebnis": 2765000,
    "einheit": "€",
    "toleranz": 1,
    "ergaenzt": true,
    "weg": "Grundkosten 1.800.000 + 700.000 = 2.500.000 €. Anderskosten statt bilanzieller Abschreibung: 175.000 €. Zusatzkosten Miete 90.000 €. Spende ist neutral. Kosten: 2.500.000 + 175.000 + 90.000 = 2.765.000 €."
   },
   {
    "thema": "ueb-k10",
    "operator": "Ermitteln",
    "frage": "Ein Kontoauszugsdrucker hat 9.000 € Fixkosten im Jahr, variable Kosten 0,05 € je Auszug. Die Sparkasse berechnet Firmenkunden 0,50 € je Auszug. Ab wie vielen Auszügen sind die Fixkosten gedeckt?",
    "ergebnis": 20000,
    "einheit": "Auszüge",
    "toleranz": 0,
    "ergaenzt": true,
    "weg": "Deckungsbeitrag je Auszug 0,50 − 0,05 = 0,45 €. Gewinnschwelle 9.000 : 0,45 = 20.000 Auszüge."
   },
   {
    "thema": "ueb-k11",
    "operator": "Ermitteln",
    "frage": "Durchschnittliches Geschäftsvolumen 1.500 Mio. €, Zinsüberschuss 33 Mio. €, Provisionsüberschuss 12 Mio. €, Verwaltungsaufwand 30 Mio. €. Ermitteln Sie die Bruttogewinnspanne in Prozent.",
    "ergebnis": 1,
    "einheit": "%",
    "toleranz": 0.005,
    "ergaenzt": true,
    "weg": "Zinsspanne 33 : 1.500 = 2,20 %. Provisionsspanne 0,80 %. Bruttobedarfsspanne 2,00 %. Nettobedarfsspanne 2,00 − 0,80 = 1,20 %. Bruttogewinnspanne 2,20 − 1,20 = 1,00 % (Probe: 33 + 12 − 30 = 15 Mio. € = 1,00 %)."
   },
   {
    "thema": "ueb-k12",
    "operator": "Ermitteln",
    "frage": "Geldautomat X: Fixkosten 25.000 € im Jahr, 0,10 € je Abhebung. Geldautomat Y: Fixkosten 19.000 €, 0,25 € je Abhebung. Ermitteln Sie die kritische Menge.",
    "ergebnis": 40000,
    "einheit": "Abhebungen",
    "toleranz": 0,
    "ergaenzt": true,
    "weg": "25.000 + 0,10 x = 19.000 + 0,25 x. 6.000 = 0,15 x. x = 40.000 Abhebungen. Darüber ist X günstiger."
   },
   {
    "thema": "ueb-k12",
    "operator": "Ermitteln",
    "frage": "Eine Software kostet 48.000 €, Nutzungsdauer 4 Jahre (lineare Abschreibung), jährlicher Gewinn durch Einsparungen 6.000 €. Ermitteln Sie die Amortisationszeit in Jahren (2 Nachkommastellen).",
    "ergebnis": 2.67,
    "einheit": "Jahre",
    "toleranz": 0.01,
    "ergaenzt": true,
    "weg": "Abschreibung 48.000 : 4 = 12.000 €. Rückfluss 6.000 + 12.000 = 18.000 € im Jahr. Amortisation 48.000 : 18.000 = 2,67 Jahre."
   }
  ],
  "frei": [
   {
    "thema": "ueb-k1",
    "operator": "Begründen",
    "frage": "Begründen Sie, warum ein Kundenkredit in der Bankbilanz auf der Aktivseite steht.",
    "loesung": "Mit dem Kredit hat die Bank einen Anspruch auf Rückzahlung gegen den Kunden. Das ist eine Forderung und damit Vermögen der Bank. Vermögen steht auf der Aktivseite."
   },
   {
    "thema": "ueb-k4",
    "operator": "Erläutern",
    "frage": "Erläutern Sie, warum die Marktzinsmethode den Strukturbeitrag nicht dem Kundenberater zurechnet.",
    "loesung": "Der Berater beeinflusst nur den Kundenzins seines Geschäfts gegenüber dem Marktzins gleicher Laufzeit (Konditionsbeitrag). Ob die Bank kurzfristige Einlagen langfristig ausleiht und am Unterschied der Marktzinsen verdient, entscheidet die Gesamtbanksteuerung. Sie trägt auch das Zinsänderungsrisiko daraus. Darum gehört der Strukturbeitrag ihr."
   },
   {
    "thema": "ueb-k6",
    "operator": "Erläutern",
    "frage": "Erläutern Sie zwei Maßnahmen, mit denen eine Sparkasse ihre Cost-Income-Ratio senken kann.",
    "loesung": "Kosten senken, zum Beispiel durch Digitalisierung von Prozessen oder Zusammenlegen von Filialen, sodass der Verwaltungsaufwand sinkt. Erträge steigern, zum Beispiel durch mehr Provisionsgeschäft (Wertpapiere, Versicherungsvermittlung) oder bessere Konditionen, sodass der Nenner wächst. Beides senkt den Aufwand je Euro Ertrag."
   },
   {
    "thema": "ueb-k8",
    "operator": "Erläutern",
    "frage": "Erläutern Sie, warum bei einer Sparkasse die Umsatzsteuer meist zu den Anschaffungskosten gehört.",
    "loesung": "Kredite, Einlagen und Zahlungsverkehr sind nach § 4 Nr. 8 UStG umsatzsteuerfrei. Wer steuerfreie Umsätze ausführt, darf die Vorsteuer aus Eingangsrechnungen dafür nicht abziehen (§ 15 Abs. 2 UStG). Die gezahlte Umsatzsteuer ist deshalb für die Sparkasse echter Aufwand und wird mit dem Anlagegut aktiviert und abgeschrieben. Nur für steuerpflichtige Umsätze wie Depotverwahrung oder Schließfachmiete ist anteilig Vorsteuerabzug möglich."
   },
   {
    "thema": "ueb-k9",
    "operator": "Erläutern",
    "frage": "Erläutern Sie, warum die Sparkasse in der Kostenrechnung kalkulatorische Abschreibungen statt der bilanziellen ansetzt.",
    "loesung": "Die bilanzielle Abschreibung folgt HGB und Steuerrecht und rechnet von den historischen Anschaffungskosten. Die Kostenrechnung soll den tatsächlichen Werteverzehr zeigen und die Wiederbeschaffung sichern. Deshalb wird vom (höheren) Wiederbeschaffungswert und über die betriebliche Nutzungsdauer abgeschrieben. So werden die Preise der Leistungen richtig kalkuliert und die Substanz erhalten."
   },
   {
    "thema": "ueb-k12",
    "operator": "Beurteilen",
    "frage": "Beurteilen Sie, ob sich die Sparkasse nur nach der Kostenvergleichsrechnung für einen Geldautomaten entscheiden sollte.",
    "loesung": "Die Kostenvergleichsrechnung zeigt nur die günstigere Alternative bei einer angenommenen Menge. Sie berücksichtigt keine Erlöse, keine Zinseffekte und keine qualitativen Punkte. Zusätzlich sollte die Sparkasse Erlöse (Fremdkundenentgelte), Amortisationszeit, Ausfallsicherheit, Service, Sicherheit gegen Sprengung und Kundenzufriedenheit einbeziehen. Fazit: Sie ist eine gute erste Entscheidungshilfe, reicht allein aber nicht."
   }
  ]
 }
}
);
