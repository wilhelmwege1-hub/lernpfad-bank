/* Allgemeine Prüfungszusammenfassung mit Ablauf und Beispielprüfungen.
   Erscheint im Lernfeld-Menü unter "Prüfungen". Gleicher Aufbau wie ein Lernfeld in lernfelder.js
   (kapitel mit festem Aufbau, uebung mit karten/mc/rechnen/frei, jede Übung mit thema = Kapitel-id).
   Kapitel-ids bitte mit "pr-" beginnen. Wird vom Thread "Prüfungszusammenfassung" gefüllt. */
window.PRUEFUNGSUEBERBLICK = {
 "nr": "Prüfung",
 "kurz": "Prüfung",
 "lang": "Prüfungsüberblick",
 "bereich": "ALLE",
 "lf": [],
 "titel": "Prüfungsablauf und Beispielprüfungen",
 "quelle": "Ergänzt: Prüfungsrahmen laut Launchplan (AO 2020 für Bankkaufleute, IHK-Notenschlüssel). Termine Stand 09.11.2026. Bewertungsmodell mündlich ist ein Übungsmodell, die IHK nennt keine feste Gewichtung.",
 "kapitel": [
  {
   "id": "pr-k1",
   "titel": "Prüfungsrahmen nach AO 2020",
   "ergaenzt": true,
   "erklaert": "Die Abschlussprüfung ist gestreckt: Teil 1 (Konten führen und Anschaffungen finanzieren) liegt hinter dir. Teil 2 besteht aus drei schriftlichen Bereichen und der mündlichen Prüfung „Kunden beraten“. Teil 1 zählt 20 %, Teil 2 zusammen 80 % des Gesamtergebnisses. In den schriftlichen Bereichen sind etwa 30 % der Punkte gebundene Aufgaben (ankreuzen, zuordnen, ordnen) und etwa 70 % ungebundene Aufgaben (selbst formulieren oder rechnen). Erlaubt ist nur ein Taschenrechner, keine Formelsammlung.",
   "beispiel": "Deine Termine: Di 24.11.2026 WiSo (60 Minuten). Mi 25.11.2026 Vermögen aufbauen und Risiken absichern sowie Finanzierungsvorhaben begleiten (je 90 Minuten). Danach die mündliche Prüfung, Termin folgt.",
   "tabelle": {
    "kopf": [
     "Prüfungsbereich",
     "Art und Dauer",
     "Gewicht",
     "Lernfelder"
    ],
    "zeilen": [
     [
      "Konten führen und Anschaffungen finanzieren (Teil 1)",
      "schriftlich, 90 Min.",
      "20 %",
      "LF02 bis LF05"
     ],
     [
      "Vermögen aufbauen und Risiken absichern",
      "schriftlich, 90 Min.",
      "20 %",
      "LF04, LF08, LF12"
     ],
     [
      "Finanzierungsvorhaben begleiten",
      "schriftlich, 90 Min.",
      "20 %",
      "LF09, LF13"
     ],
     [
      "Wirtschafts- und Sozialkunde",
      "schriftlich, 60 Min., gebunden und ungebunden",
      "10 %",
      "LF01, LF06, LF10"
     ],
     [
      "Kunden beraten",
      "mündlich, 15 Min. Auswahl und Vorbereitung, 30 Min. Gespräch",
      "30 %",
      "LF02 bis LF05, LF08, LF09, LF12"
     ]
    ]
   },
   "merksatz": "Teil 1 zählt 20, Teil 2 zählt 80, die mündliche Prüfung allein 30 Prozent.",
   "tipp": "LF07 (Buchführung) und LF11 (Kosten- und Erlösrechnung) haben keinen eigenen Bereich, tauchen aber in allen schriftlichen Teilen als Rechen- oder Begründungsaufgabe auf.",
   "achtung": "Die mündliche Prüfung ist mit 30 % der größte Einzelbereich. Wer sie unterschätzt, verschenkt fast ein Drittel der Note."
  },
  {
   "id": "pr-k2",
   "titel": "Bestehensregeln und Gesamtergebnis",
   "ergaenzt": true,
   "erklaert": "Du bestehst, wenn drei Bedingungen erfüllt sind: Das Gesamtergebnis aus Teil 1 und Teil 2 ist mindestens „ausreichend“ (50 Punkte). Das Ergebnis von Teil 2 allein ist mindestens „ausreichend“. In mindestens drei Bereichen von Teil 2 hast du „ausreichend“, und kein Bereich von Teil 2 ist „ungenügend“ (unter 30 Punkte). Das Gesamtergebnis ist der gewichtete Durchschnitt aller fünf Bereiche.",
   "beispiel": "Teil 1: 72 Punkte, Vermögen: 65, Finanzierung: 58, WiSo: 80, Kunden beraten: 75. Gesamt: 72 · 0,2 + 65 · 0,2 + 58 · 0,2 + 80 · 0,1 + 75 · 0,3 = 14,4 + 13 + 11,6 + 8 + 22,5 = 69,5 Punkte, also „befriedigend“. Teil 2 allein: (65 · 20 + 58 · 20 + 80 · 10 + 75 · 30) : 80 = 5.510 : 80 = 68,875 Punkte. Alle vier Bereiche von Teil 2 mindestens „ausreichend“: bestanden.",
   "tabelle": {
    "kopf": [
     "Bedingung",
     "Schwelle",
     "Geprüft wird"
    ],
    "zeilen": [
     [
      "Gesamtergebnis",
      "mindestens 50 Punkte",
      "Teil 1 und Teil 2 gewichtet"
     ],
     [
      "Ergebnis Teil 2",
      "mindestens 50 Punkte",
      "nur die vier Bereiche von Teil 2, gewichtet"
     ],
     [
      "Einzelbereiche Teil 2",
      "mindestens drei mit 50 Punkten oder mehr",
      "jeder Bereich einzeln"
     ],
     [
      "Sperrnote",
      "kein Bereich von Teil 2 unter 30 Punkten",
      "jeder Bereich einzeln"
     ]
    ]
   },
   "merksatz": "Gesamt ausreichend, Teil 2 ausreichend, drei von vier ausreichend, keine Sechs.",
   "tipp": "Rechne dir nach jeder Probeprüfung aus, wie viele Punkte du in jedem Bereich brauchst. So weißt du, wo sich das Lernen am meisten lohnt.",
   "achtung": "Ein „ungenügend“ (unter 30 Punkte) in einem Bereich von Teil 2 bedeutet „nicht bestanden“, auch wenn alle anderen Bereiche sehr gut sind."
  },
  {
   "id": "pr-k3",
   "titel": "Mündliche Ergänzungsprüfung",
   "ergaenzt": true,
   "erklaert": "Liegt ein schriftlicher Bereich von Teil 2 unter „ausreichend“, kannst du dort eine mündliche Ergänzungsprüfung bekommen, wenn sie für das Bestehen den Ausschlag geben kann. Sie dauert etwa 15 Minuten. Das alte schriftliche Ergebnis zählt doppelt, das neue mündliche einfach (2 : 1).",
   "beispiel": "Finanzierung schriftlich: 44 Punkte. In der Ergänzungsprüfung erreichst du 62 Punkte. Neues Ergebnis: (2 · 44 + 62) : 3 = 150 : 3 = 50 Punkte, also „ausreichend“.",
   "tabelle": {
    "kopf": [
     "Punkte schriftlich",
     "nötig mündlich für 50 Punkte",
     "Rechnung"
    ],
    "zeilen": [
     [
      "45",
      "60",
      "(2 · 45 + 60) : 3 = 50"
     ],
     [
      "40",
      "70",
      "(2 · 40 + 70) : 3 = 50"
     ],
     [
      "35",
      "80",
      "(2 · 35 + 80) : 3 = 50"
     ],
     [
      "30",
      "90",
      "(2 · 30 + 90) : 3 = 50"
     ]
    ]
   },
   "merksatz": "Alt zählt doppelt, neu einfach: (2 · alt + neu) : 3.",
   "tipp": "Operator „Ermitteln“: Nötige Punkte mündlich = 150 − 2 · schriftlich. Bei 42 schriftlich also 150 − 84 = 66.",
   "achtung": "Die Ergänzungsprüfung gibt es nur in einem schriftlichen Bereich von Teil 2, nicht für die mündliche Prüfung „Kunden beraten“ und nicht für Teil 1."
  },
  {
   "id": "pr-k4",
   "titel": "IHK-Notenschlüssel und Zeitplanung",
   "ergaenzt": true,
   "erklaert": "Jeder Bereich wird mit 100 Punkten bewertet und nach dem IHK-Schlüssel in eine Note umgerechnet. Für die Zeit hilft eine einfache Faustregel: Teile die Minuten durch die Punkte. In den 90-Minuten-Bereichen hast du 0,9 Minuten je Punkt, in WiSo 0,6 Minuten je Punkt. Eine Aufgabe mit 12 Punkten sollte also in den Fachbereichen nach etwa 11 Minuten fertig sein.",
   "beispiel": "Vermögen, 90 Minuten: gebundener Teil 30 Punkte, Zeitbudget 30 · 0,9 = 27 Minuten. Ungebundener Teil 70 Punkte, 63 Minuten. Plane 5 Minuten am Ende zum Nachlesen ein: dann bleiben etwa 25 und 60 Minuten.",
   "tabelle": {
    "kopf": [
     "Punkte",
     "Note",
     "Bezeichnung"
    ],
    "zeilen": [
     [
      "100 bis 92",
      "1",
      "sehr gut"
     ],
     [
      "91 bis 81",
      "2",
      "gut"
     ],
     [
      "80 bis 67",
      "3",
      "befriedigend"
     ],
     [
      "66 bis 50",
      "4",
      "ausreichend"
     ],
     [
      "49 bis 30",
      "5",
      "mangelhaft"
     ],
     [
      "29 bis 0",
      "6",
      "ungenügend"
     ]
    ]
   },
   "merksatz": "50 Punkte reichen zum Bestehen, unter 30 ist Schluss.",
   "tipp": "Fang mit dem gebundenen Teil an und markiere unsichere Kreuze. So sammelst du schnell sichere Punkte und hast für die Fälle einen klaren Kopf.",
   "achtung": "Leere Antworten bringen sicher 0 Punkte. Auch ein Teilansatz (Rechenweg, Fachbegriff) bringt im ungebundenen Teil oft Teilpunkte."
  },
  {
   "id": "pr-k5",
   "titel": "Operatoren richtig erfüllen",
   "ergaenzt": true,
   "erklaert": "Jede IHK-Aufgabe beginnt mit einem Operator. Er sagt dir, was du tun sollst, und die Korrektur prüft genau das. Wer „Nennen“ mit einem Aufsatz beantwortet, verliert Zeit. Wer „Begründen“ nur mit einem Stichwort beantwortet, verliert Punkte.",
   "beispiel": "„Nennen Sie zwei Risiken einer Aktienanlage.“ Antwort: Kursrisiko, Dividendenrisiko. Fertig. „Erläutern Sie das Kursrisiko.“ Antwort: Der Börsenkurs kann unter den Kaufkurs fallen, etwa nach schlechten Unternehmenszahlen. Verkauft der Kunde dann, erleidet er einen Verlust.",
   "tabelle": {
    "kopf": [
     "Operator",
     "Was du tust",
     "Umfang"
    ],
    "zeilen": [
     [
      "Nennen",
      "Begriffe oder Fakten ohne Erklärung aufzählen",
      "Stichworte"
     ],
     [
      "Erläutern",
      "Sachverhalt verständlich erklären, gern mit Beispiel",
      "2 bis 4 Sätze je Punkt"
     ],
     [
      "Begründen",
      "Aussage mit Argumenten oder Paragrafen stützen",
      "Aussage plus Weil-Satz"
     ],
     [
      "Unterscheiden",
      "Unterschiede nach Merkmalen gegenüberstellen",
      "gleiche Merkmale, beide Seiten"
     ],
     [
      "Beurteilen",
      "Fakten abwägen und ein eigenes, begründetes Urteil fällen",
      "Pro, Contra, Fazit"
     ],
     [
      "Ermitteln",
      "Ergebnis rechnerisch oder anhand von Unterlagen bestimmen",
      "Rechenweg und Ergebnis mit Einheit"
     ],
     [
      "Zuordnen",
      "Elemente passenden Kategorien zuweisen",
      "Paare bilden"
     ],
     [
      "Ordnen",
      "Elemente in eine Reihenfolge bringen",
      "Nummern vergeben"
     ]
    ]
   },
   "merksatz": "Der Operator ist die Bestellung, die Antwort liefert genau diese Bestellung.",
   "tipp": "Unterstreiche den Operator und die Zahl („zwei“, „drei“). Nennst du mehr als verlangt, wird oft nur die verlangte Anzahl von vorn gewertet.",
   "achtung": "„Beurteilen“ ohne Fazit bringt selten volle Punkte. Schreib am Ende immer einen klaren Satz: „Daher empfehle ich …“ oder „Daher ist … nicht geeignet.“"
  },
  {
   "id": "pr-k6",
   "titel": "Mündliche Prüfung „Kunden beraten“",
   "ergaenzt": true,
   "erklaert": "Du bekommst zwei Fälle zur Auswahl und hast 15 Minuten für Auswahl und Vorbereitung. Danach folgt eine Gesprächssimulation von etwa 30 Minuten: Ein Prüfer spielt den Kunden, du berätst. Themen sind Konten führen, Anschaffungen finanzieren, Vermögen aufbauen, Risiken absichern und Baufinanzierung. Die IHK nennt keine feste Gewichtung der Kriterien. Zum Üben nutzen wir vier Bereiche mit je 25 Punkten.",
   "beispiel": "Fall: Herr Krause (34) hat 25.000 € geerbt und will „etwas Sicheres mit etwas Rendite“. Gesprächsaufbau: Begrüßung und Anlass, Bedarfsanalyse (Ziel, Anlagedauer, Risikobereitschaft, Kenntnisse, finanzielle Lage, Nachhaltigkeit), Lösung mit zwei Bausteinen (z. B. Festgeld und Fondssparplan), Einwandbehandlung, Abschluss und nächster Schritt.",
   "tabelle": {
    "kopf": [
     "Kriterium (Übungsmodell)",
     "Punkte",
     "Woran der Prüfer es erkennt"
    ],
    "zeilen": [
     [
      "Verständnis für Zusammenhänge",
      "25",
      "fachlich richtige Lösung, Produkte passen zum Bedarf"
     ],
     [
      "Methodisches Vorgehen",
      "25",
      "klarer Gesprächsaufbau, Bedarfsanalyse vor dem Angebot"
     ],
     [
      "Kommunikation",
      "25",
      "offene Fragen, aktives Zuhören, verständliche Sprache"
     ],
     [
      "Kundenorientierung",
      "25",
      "Lösung aus Kundensicht, Nutzen statt Merkmale"
     ]
    ]
   },
   "merksatz": "Erst fragen, dann zuhören, dann empfehlen.",
   "tipp": "Nutze die Vorbereitungszeit für einen Spickzettel mit drei Spalten: Fragen an den Kunden, mögliche Produkte, Nutzenargumente.",
   "achtung": "Die Funktionen für die mündliche Prüfung kommen nach dem 25.11. in die App. Diese Seite gibt nur den Rahmen."
  }
 ],
 "uebung": {
  "karten": [
   {
    "thema": "pr-k1",
    "vorne": "Wie viel zählt Teil 1 im Gesamtergebnis?",
    "hinten": "20 %."
   },
   {
    "thema": "pr-k1",
    "vorne": "Wie lange dauert die WiSo-Prüfung?",
    "hinten": "60 Minuten, gebundene und ungebundene Aufgaben."
   },
   {
    "thema": "pr-k1",
    "vorne": "Welche Lernfelder gehören zu „Vermögen aufbauen und Risiken absichern“?",
    "hinten": "LF04, LF08, LF12."
   },
   {
    "thema": "pr-k1",
    "vorne": "Welche Lernfelder gehören zu „Finanzierungsvorhaben begleiten“?",
    "hinten": "LF09 und LF13."
   },
   {
    "thema": "pr-k1",
    "vorne": "Welche Hilfsmittel sind schriftlich erlaubt?",
    "hinten": "Nur ein Taschenrechner, keine Formelsammlung."
   },
   {
    "thema": "pr-k2",
    "vorne": "Ab wie vielen Punkten droht in Teil 2 das Nichtbestehen trotz guter anderer Bereiche?",
    "hinten": "Unter 30 Punkten („ungenügend“) in einem Bereich von Teil 2."
   },
   {
    "thema": "pr-k2",
    "vorne": "Wie viele Bereiche von Teil 2 müssen mindestens „ausreichend“ sein?",
    "hinten": "Mindestens drei der vier."
   },
   {
    "thema": "pr-k3",
    "vorne": "Wie wird die Ergänzungsprüfung verrechnet?",
    "hinten": "Alt zu neu 2 : 1, also (2 · schriftlich + mündlich) : 3."
   },
   {
    "thema": "pr-k4",
    "vorne": "Welche Punkte ergeben die Note 3?",
    "hinten": "80 bis 67 Punkte."
   },
   {
    "thema": "pr-k4",
    "vorne": "Welche Punkte ergeben die Note 4?",
    "hinten": "66 bis 50 Punkte."
   },
   {
    "thema": "pr-k5",
    "vorne": "Was verlangt der Operator „Beurteilen“?",
    "hinten": "Fakten abwägen und ein eigenes, begründetes Urteil mit Fazit fällen."
   },
   {
    "thema": "pr-k5",
    "vorne": "Was verlangt der Operator „Nennen“?",
    "hinten": "Aufzählen ohne Erklärung."
   },
   {
    "thema": "pr-k6",
    "vorne": "Wie lange dauert die Gesprächssimulation in „Kunden beraten“?",
    "hinten": "Etwa 30 Minuten, vorher 15 Minuten Auswahl und Vorbereitung."
   }
  ],
  "mc": [
   {
    "thema": "pr-k2",
    "operator": "Beurteilen",
    "frage": "Ergebnisse Teil 2: Vermögen 48, Finanzierung 55, WiSo 61, Kunden beraten 70. Wie ist das zu beurteilen, wenn auch das Gesamtergebnis über 50 liegt?",
    "optionen": [
     "Nicht bestanden, weil ein Bereich unter 50 liegt",
     "Bestanden, weil drei Bereiche mindestens ausreichend sind und keiner unter 30 liegt",
     "Nicht bestanden, weil Vermögen mangelhaft ist und 20 % zählt",
     "Bestanden nur nach Ergänzungsprüfung"
    ],
    "richtig": 1,
    "erklaerung": "Drei von vier Bereichen sind mindestens 50, keiner unter 30, Teil 2 gewichtet = (48·20 + 55·20 + 61·10 + 70·30) : 80 = 4.770 : 80 = 59,6. Damit bestanden."
   },
   {
    "thema": "pr-k4",
    "operator": "Zuordnen",
    "frage": "Welcher Note entsprechen 81 Punkte?",
    "optionen": [
     "1",
     "2",
     "3",
     "4"
    ],
    "richtig": 1,
    "erklaerung": "91 bis 81 Punkte = 2 (gut)."
   },
   {
    "thema": "pr-k5",
    "operator": "Unterscheiden",
    "frage": "Welche Antwort erfüllt den Operator „Begründen“?",
    "optionen": [
     "Kursrisiko",
     "Die Aktie ist riskant.",
     "Die Aktie passt nicht, weil der Kunde das Geld in einem Jahr braucht und Kurse in dieser Zeit stark fallen können.",
     "Aktien, Anleihen, Fonds"
    ],
    "richtig": 2,
    "erklaerung": "Begründen heißt: Aussage plus Argument (weil …)."
   },
   {
    "thema": "pr-k1",
    "operator": "Nennen",
    "frage": "Welcher Bereich hat das größte Gewicht?",
    "optionen": [
     "WiSo",
     "Vermögen aufbauen und Risiken absichern",
     "Kunden beraten",
     "Teil 1"
    ],
    "richtig": 2,
    "erklaerung": "Kunden beraten zählt 30 %."
   }
  ],
  "rechnen": [
   {
    "thema": "pr-k3",
    "operator": "Ermitteln",
    "frage": "Du hast in Finanzierung schriftlich 42 Punkte. Wie viele Punkte brauchst du in der Ergänzungsprüfung mindestens für 50 Punkte?",
    "ergebnis": 66,
    "einheit": "Punkte",
    "toleranz": 0,
    "ergaenzt": true,
    "weg": "(2 · 42 + x) : 3 = 50, also 84 + x = 150, x = 66."
   },
   {
    "thema": "pr-k2",
    "operator": "Ermitteln",
    "frage": "Teil 1: 68, Vermögen: 59, Finanzierung: 62, WiSo: 74, Kunden beraten: 70. Ermitteln Sie das Gesamtergebnis in Punkten.",
    "ergebnis": 66.2,
    "einheit": "Punkte",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "68 · 0,2 + 59 · 0,2 + 62 · 0,2 + 74 · 0,1 + 70 · 0,3 = 13,6 + 11,8 + 12,4 + 7,4 + 21 = 66,2 Punkte."
   },
   {
    "thema": "pr-k4",
    "operator": "Ermitteln",
    "frage": "Eine Aufgabe im Bereich Finanzierung bringt 16 Punkte. Wie viele Minuten solltest du nach der Faustregel höchstens brauchen?",
    "ergebnis": 14.4,
    "einheit": "Minuten",
    "toleranz": 0.02,
    "ergaenzt": true,
    "weg": "90 Minuten : 100 Punkte = 0,9 Minuten je Punkt. 16 · 0,9 = 14,4 Minuten."
   }
  ],
  "frei": [
   {
    "thema": "pr-k6",
    "operator": "Nennen",
    "frage": "Nennen Sie vier Punkte, die Sie in der Bedarfsanalyse einer Geldanlage erfragen.",
    "loesung": "Anlageziel, Anlagedauer, Risikobereitschaft und Verlusttragfähigkeit, Kenntnisse und Erfahrungen, finanzielle Verhältnisse, Nachhaltigkeitspräferenzen (vier davon)."
   },
   {
    "thema": "pr-k5",
    "operator": "Unterscheiden",
    "frage": "Unterscheiden Sie die Operatoren „Erläutern“ und „Beurteilen“.",
    "loesung": "Erläutern: einen Sachverhalt verständlich erklären, ohne eigenes Urteil. Beurteilen: Argumente abwägen und zu einem eigenen, begründeten Urteil mit Fazit kommen."
   }
  ]
 }
};
