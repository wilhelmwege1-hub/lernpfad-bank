/* Beispielprüfungen je schriftlichem Bereich von Teil 2 (WiSo, Vermögen, Finanzierung).
   Je 100 Punkte: gebundener Teil 30 (10 × 3), ungebundener Teil 70 (3 Fälle mit Teilaufgaben).
   typ: mc (optionen, richtig), zuordnen (paare [links, rechts]), frei (loesung, bewertung), rechnen (ergebnis, einheit, toleranz, weg, bewertung).
   Note nach IHK-Schlüssel. Alles Ergänzt, Stand 09.11.2026. */
window.BEISPIELPRUEFUNGEN = [
 {
  "id": "bp-wiso-1",
  "bereich": "WISO",
  "titel": "Beispielprüfung Wirtschafts- und Sozialkunde",
  "minuten": 60,
  "punkte": 100,
  "ergaenzt": true,
  "ablauf": "60 Minuten, 100 Punkte. Gebundener Teil: 10 Aufgaben zu je 3 Punkten (30 Punkte, etwa 18 Minuten). Ungebundener Teil: 3 Fälle mit zusammen 70 Punkten (etwa 40 Minuten). Faustregel: 0,6 Minuten je Punkt. Die IHK kann die Aufteilung gebunden/ungebunden in WiSo anders gewichten; das Beispiel nutzt 30/70.",
  "hinweise": [
   "Erlaubt ist nur ein nicht programmierbarer Taschenrechner, keine Formelsammlung.",
   "Lies jeden Fall einmal ganz, bevor du anfängst.",
   "Achte auf den Operator jeder Teilaufgabe und schreib bei Rechnungen den Weg und die Einheit dazu.",
   "Bewertung nach IHK-Schlüssel: 100–92 = 1, 91–81 = 2, 80–67 = 3, 66–50 = 4, 49–30 = 5, 29–0 = 6."
  ],
  "teile": [
   {
    "name": "Gebundener Teil",
    "art": "gebunden",
    "punkte": 30,
    "aufgaben": [
     {
      "nr": 1,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Wie lang darf die Probezeit in einem Ausbildungsverhältnis höchstens sein?",
      "optionen": [
       "1 Monat",
       "3 Monate",
       "4 Monate",
       "6 Monate"
      ],
      "richtig": 2,
      "erklaerung": "§ 20 BBiG: mindestens 1, höchstens 4 Monate."
     },
     {
      "nr": 2,
      "operator": "Beurteilen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Ein Betrieb hat 4 ständig beschäftigte Arbeitnehmer. Kann ein Betriebsrat gewählt werden?",
      "optionen": [
       "Ja, ab 3 Arbeitnehmern",
       "Nein, erst ab 5 ständig wahlberechtigten Arbeitnehmern",
       "Ja, wenn der Arbeitgeber zustimmt",
       "Nein, erst ab 20 Arbeitnehmern"
      ],
      "richtig": 1,
      "erklaerung": "§ 1 BetrVG: mindestens 5 ständig wahlberechtigte Arbeitnehmer, davon 3 wählbar."
     },
     {
      "nr": 3,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Was bedeutet die Friedenspflicht?",
      "optionen": [
       "Arbeitgeber dürfen nicht kündigen",
       "Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über dessen Inhalte verboten",
       "Betriebsräte dürfen nicht streiken",
       "Gewerkschaften dürfen nicht verhandeln"
      ],
      "richtig": 1,
      "erklaerung": "Die Friedenspflicht gilt für die Laufzeit des Tarifvertrags."
     },
     {
      "nr": 4,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Vollmacht wird ins Handelsregister eingetragen?",
      "optionen": [
       "Handlungsvollmacht",
       "Prokura",
       "Einzelvollmacht",
       "Kontovollmacht"
      ],
      "richtig": 1,
      "erklaerung": "Prokura wird eingetragen (§ 53 HGB), Handlungsvollmacht nicht."
     },
     {
      "nr": 5,
      "operator": "Beurteilen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Ein Prokurist will ohne besondere Befugnis ein Betriebsgrundstück verkaufen. Ist das zulässig?",
      "optionen": [
       "Ja, Prokura deckt alle Geschäfte",
       "Nein, dafür braucht er eine besondere Befugnis (§ 49 Abs. 2 HGB)",
       "Ja, wenn der Kaufpreis unter 1 Mio. € liegt",
       "Nein, Prokuristen dürfen nie Verträge schließen"
      ],
      "richtig": 1,
      "erklaerung": "Veräußerung und Belastung von Grundstücken nur mit besonderer Befugnis."
     },
     {
      "nr": 6,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "zuordnen",
      "frage": "Ordnen Sie die Marktformen den Beispielen zu.",
      "paare": [
       [
        "Polypol",
        "Wochenmarkt für Gemüse"
       ],
       [
        "Oligopol",
        "Mineralölkonzerne an Tankstellen"
       ],
       [
        "Monopol",
        "Netzbetreiber in einem Stromnetzgebiet"
       ]
      ],
      "erklaerung": "Viele Anbieter: Polypol. Wenige: Oligopol. Einer: Monopol."
     },
     {
      "nr": 7,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Was ist das vorrangige Ziel der EZB?",
      "optionen": [
       "Vollbeschäftigung",
       "Preisniveaustabilität (mittelfristig 2 % Inflation)",
       "Stabiler Wechselkurs zum US-Dollar",
       "Wirtschaftswachstum"
      ],
      "richtig": 1,
      "erklaerung": "Art. 127 AEUV: vorrangiges Ziel Preisstabilität; Zielwert 2 % mittelfristig."
     },
     {
      "nr": 8,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Phase des Konjunkturzyklus zeigt sinkende Produktion, steigende Arbeitslosigkeit und sinkende Zinsen?",
      "optionen": [
       "Aufschwung",
       "Boom",
       "Abschwung (Rezession)",
       "Hochkonjunktur"
      ],
      "richtig": 2,
      "erklaerung": "Typisch für den Abschwung."
     },
     {
      "nr": 9,
      "operator": "Beurteilen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Die Sparkasse erhöht ihre Gebühren, Kunden wechseln kaum. Die Nachfrage ist also …",
      "optionen": [
       "vollkommen elastisch",
       "eher unelastisch",
       "eher elastisch",
       "anomal"
      ],
      "richtig": 1,
      "erklaerung": "Geringe Mengenreaktion auf Preisänderung: unelastische Nachfrage."
     },
     {
      "nr": 10,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Wer haftet bei einer GmbH für die Schulden der Gesellschaft?",
      "optionen": [
       "Die Gesellschafter unbeschränkt",
       "Die Gesellschaft mit ihrem Vermögen",
       "Der Geschäftsführer persönlich",
       "Das Registergericht"
      ],
      "richtig": 1,
      "erklaerung": "§ 13 Abs. 2 GmbHG: den Gläubigern haftet nur das Gesellschaftsvermögen."
     }
    ]
   },
   {
    "name": "Ungebundener Teil",
    "art": "ungebunden",
    "punkte": 70,
    "aufgaben": [
     {
      "nr": 1,
      "titel": "Ausbildung und Arbeit",
      "situation": "Lea Schubert (22) ist seit 14 Monaten Auszubildende bei der Sparkasse. Ihr Ausbildungsvertrag sieht 4 Monate Probezeit vor. Ihr Bruttogehalt beträgt 1.300 €, ihre Krankenkasse erhebt 2,9 % Zusatzbeitrag. Ihr Kollege Herr Petzold ist seit 6 Jahren bei der Sparkasse beschäftigt.",
      "punkte": 25,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Beurteilen",
        "punkte": 6,
        "typ": "frei",
        "frage": "Die Sparkasse möchte Lea wegen schwacher Leistungen ordentlich mit einer Frist von 4 Wochen kündigen. Beurteilen Sie die Kündigung.",
        "loesung": "Die Probezeit ist seit 10 Monaten vorbei. Nach der Probezeit kann der Ausbildende nur fristlos aus wichtigem Grund kündigen (§ 22 Abs. 2 BBiG), schriftlich und unter Angabe der Gründe. Schwache Leistungen sind in der Regel kein wichtiger Grund; zuerst wären Förderung und Gespräche nötig. Eine ordentliche Kündigung mit 4 Wochen Frist steht nur Lea selbst zu, wenn sie den Beruf aufgibt oder wechselt. Fazit: Die Kündigung ist unwirksam.",
        "bewertung": "2 P Probezeit vorbei erkannt, 2 P Regel § 22 BBiG (nur wichtiger Grund), 2 P Fazit unwirksam mit Begründung."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 6,
        "typ": "frei",
        "frage": "Die Sparkasse kündigt Herrn Petzold betriebsbedingt, die Kündigung geht ihm am 20.05. zu. Ermitteln Sie das Ende des Arbeitsverhältnisses nach § 622 BGB.",
        "loesung": "Betriebszugehörigkeit 6 Jahre: ab 5 Jahren beträgt die Frist für den Arbeitgeber 2 Monate zum Ende eines Kalendermonats. 20.05. plus 2 Monate = 20.07., nächstes Monatsende: 31.07. Ende des Arbeitsverhältnisses am 31.07.",
        "bewertung": "2 P richtige Frist (2 Monate zum Monatsende), 2 P Rechenweg ab Zugang, 2 P Ergebnis 31.07."
       },
       {
        "nr": "c",
        "operator": "Ermitteln",
        "punkte": 8,
        "typ": "rechnen",
        "frage": "Ermitteln Sie Leas Arbeitnehmeranteile zur Sozialversicherung 2026 insgesamt (RV 9,3 %, AV 1,3 %, KV 8,75 %, PV Sachsen 2,3 %).",
        "ergebnis": 281.45,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "Satz gesamt 9,3 + 1,3 + 8,75 + 2,3 = 21,65 %. 1.300 · 21,65 % = 281,45 €. Einzeln: 120,90 + 16,90 + 113,75 + 29,90 = 281,45 €.",
        "loesung": "Satz gesamt 9,3 + 1,3 + 8,75 + 2,3 = 21,65 %. 1.300 · 21,65 % = 281,45 €. Einzeln: 120,90 + 16,90 + 113,75 + 29,90 = 281,45 €.",
        "bewertung": "2 P je richtiger Zweig oder 8 P für das richtige Gesamtergebnis mit Weg."
       },
       {
        "nr": "d",
        "operator": "Erläutern",
        "punkte": 5,
        "typ": "frei",
        "frage": "Erläutern Sie die Rolle des Personalrats bei der Kündigung von Herrn Petzold.",
        "loesung": "Die Sparkasse ist eine Anstalt des öffentlichen Rechts, deshalb gilt das Personalvertretungsrecht (in Sachsen das Sächsische Personalvertretungsgesetz) statt des Betriebsverfassungsgesetzes. Der Personalrat muss vor jeder Kündigung beteiligt werden; er kann Einwendungen erheben. Eine Kündigung ohne ordnungsgemäße Beteiligung ist unwirksam. In einem privaten Betrieb wäre es der Betriebsrat mit Anhörung nach § 102 BetrVG.",
        "bewertung": "2 P Beteiligung vor der Kündigung, 2 P Folge bei fehlender Beteiligung (unwirksam), 1 P Personalrat statt Betriebsrat bei der Sparkasse."
       }
      ]
     },
     {
      "nr": 2,
      "titel": "Märkte und Wettbewerb",
      "situation": "In einer sächsischen Großstadt sind Mietwohnungen knapp. Die Stadt diskutiert, wie der Wohnungsmarkt entlastet werden kann.",
      "punkte": 20,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Erläutern",
        "punkte": 6,
        "typ": "frei",
        "frage": "Erläutern Sie, wie sich auf einem freien Markt der Preis bei einem Nachfrageüberhang verändert.",
        "loesung": "Bei einem Nachfrageüberhang wollen zum aktuellen Preis mehr Menschen kaufen (mieten), als angeboten wird. Anbieter können höhere Preise durchsetzen. Steigende Preise senken die nachgefragte Menge und erhöhen die angebotene Menge (z. B. Neubau). Der Preis steigt, bis Angebot und Nachfrage im Gleichgewichtspreis übereinstimmen.",
        "bewertung": "2 P Begriff Nachfrageüberhang, 2 P Preis steigt, 2 P Anpassung von Angebot und Nachfrage bis zum Gleichgewicht."
       },
       {
        "nr": "b",
        "operator": "Unterscheiden",
        "punkte": 6,
        "typ": "frei",
        "frage": "Unterscheiden Sie Höchstpreis und Mindestpreis mit je einem Beispiel.",
        "loesung": "Höchstpreis: staatlich festgelegte Obergrenze unter dem Gleichgewichtspreis, schützt Nachfrager, z. B. Mietpreisbremse. Mindestpreis: staatlich festgelegte Untergrenze über dem Gleichgewichtspreis, schützt Anbieter, z. B. gesetzlicher Mindestlohn als Mindestpreis für Arbeit.",
        "bewertung": "je Begriff 2 P Erklärung, je 1 P passendes Beispiel."
       },
       {
        "nr": "c",
        "operator": "Beurteilen",
        "punkte": 8,
        "typ": "frei",
        "frage": "Beurteilen Sie eine strenge Mietobergrenze (Höchstpreis) für den Wohnungsmarkt.",
        "loesung": "Pro: Mieter zahlen weniger, Schutz vor Verdrängung, soziale Absicherung. Contra: Unter dem Gleichgewichtspreis wird der Nachfrageüberhang größer; Investoren bauen weniger, das Angebot wächst nicht; Wohnungen werden über Beziehungen oder Schwarzmarkt vergeben; Vermieter sparen an Instandhaltung. Fazit: kurzfristig Entlastung für bestehende Mieter, langfristig verstärkt sie die Knappheit, wenn nicht gleichzeitig das Angebot (Neubau, Förderung) steigt.",
        "bewertung": "3 P Vorteile, 3 P Nachteile mit Marktwirkung, 2 P begründetes Fazit."
       }
      ]
     },
     {
      "nr": 3,
      "titel": "Wirtschaftspolitik",
      "situation": "Der Verbraucherpreisindex (2020 = 100) stieg von 118,4 im Oktober des Vorjahres auf 122,9 im Oktober dieses Jahres. Ein Kunde hat Festgeld zu 2,5 % angelegt.",
      "punkte": 25,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 6,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die Inflationsrate (zwei Nachkommastellen).",
        "ergebnis": 3.8,
        "einheit": "%",
        "toleranz": 0.02,
        "weg": "(122,9 : 118,4 − 1) · 100 = 3,80 %.",
        "loesung": "(122,9 : 118,4 − 1) · 100 = 3,80 %.",
        "bewertung": "3 P Ansatz, 3 P Ergebnis."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie näherungsweise den Realzins des Festgelds.",
        "ergebnis": -1.3,
        "einheit": "%",
        "toleranz": 0.05,
        "weg": "Realzins ≈ Nominalzins − Inflationsrate = 2,5 − 3,8 = −1,30 %. Der Kunde verliert Kaufkraft.",
        "loesung": "Realzins ≈ Nominalzins − Inflationsrate = 2,5 − 3,8 = −1,30 %. Der Kunde verliert Kaufkraft.",
        "bewertung": "2 P Ansatz, 2 P Ergebnis mit Vorzeichen."
       },
       {
        "nr": "c",
        "operator": "Erläutern",
        "punkte": 8,
        "typ": "frei",
        "frage": "Erläutern Sie, wie eine Leitzinserhöhung der EZB die Inflation dämpfen soll.",
        "loesung": "Banken refinanzieren sich teurer und erhöhen Kreditzinsen. Kredite für Konsum und Investitionen werden teurer, die Nachfrage sinkt. Sparen wird attraktiver. Weniger Nachfrage bremst Preissteigerungen, Unternehmen können Preise schwerer erhöhen. Außerdem kann der Euro aufwerten, Importe werden billiger. Die Inflation sinkt mit Verzögerung.",
        "bewertung": "2 P Refinanzierung/Kreditzins, 2 P Nachfrage sinkt, 2 P Sparen attraktiver, 2 P Wirkung auf Preise."
       },
       {
        "nr": "d",
        "operator": "Nennen",
        "punkte": 3,
        "typ": "frei",
        "frage": "Nennen Sie die vier Ziele des Stabilitätsgesetzes (magisches Viereck).",
        "loesung": "Stabilität des Preisniveaus, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum.",
        "bewertung": "4 Ziele = 3 P, 3 Ziele = 2 P, 2 Ziele = 1 P."
       },
       {
        "nr": "e",
        "operator": "Erläutern",
        "punkte": 4,
        "typ": "frei",
        "frage": "Erläutern Sie einen Zielkonflikt im magischen Viereck.",
        "loesung": "Preisniveaustabilität und hoher Beschäftigungsstand: Fördert der Staat die Beschäftigung durch mehr Nachfrage, steigen auch die Preise. Bremst die Zentralbank die Inflation durch höhere Zinsen, sinken Investitionen und damit die Beschäftigung.",
        "bewertung": "2 P zwei passende Ziele, 2 P nachvollziehbare Wirkungskette."
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "bp-vr-1",
  "bereich": "VR",
  "titel": "Beispielprüfung Vermögen aufbauen und Risiken absichern",
  "minuten": 90,
  "punkte": 100,
  "ergaenzt": true,
  "ablauf": "90 Minuten, 100 Punkte. Gebundener Teil: 10 Aufgaben zu je 3 Punkten (30 Punkte, etwa 25 Minuten). Ungebundener Teil: 3 Fälle mit zusammen 70 Punkten (etwa 60 Minuten), Rest zum Nachlesen. Faustregel: 0,9 Minuten je Punkt.",
  "hinweise": [
   "Erlaubt ist nur ein nicht programmierbarer Taschenrechner, keine Formelsammlung.",
   "Lies jeden Fall einmal ganz, bevor du anfängst.",
   "Achte auf den Operator jeder Teilaufgabe und schreib bei Rechnungen den Weg und die Einheit dazu.",
   "Bewertung nach IHK-Schlüssel: 100–92 = 1, 91–81 = 2, 80–67 = 3, 66–50 = 4, 49–30 = 5, 29–0 = 6."
  ],
  "teile": [
   {
    "name": "Gebundener Teil",
    "art": "gebunden",
    "punkte": 30,
    "aufgaben": [
     {
      "nr": 1,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Wie hoch ist der Sparer-Pauschbetrag für zusammenveranlagte Ehegatten?",
      "optionen": [
       "1.000 €",
       "1.602 €",
       "2.000 €",
       "801 €"
      ],
      "richtig": 2,
      "erklaerung": "Seit 2023: 1.000 € je Person, 2.000 € bei Zusammenveranlagung."
     },
     {
      "nr": 2,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Bis zu welchem Betrag sind Einlagen gesetzlich je Kunde und Institut geschützt?",
      "optionen": [
       "20.000 €",
       "50.000 €",
       "100.000 €",
       "unbegrenzt"
      ],
      "richtig": 2,
      "erklaerung": "Einlagensicherungsgesetz: 100.000 €."
     },
     {
      "nr": 3,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Anlage ist eine Spareinlage im Sinne der RechKredV?",
      "optionen": [
       "Tagesgeld",
       "Festgeld 6 Monate",
       "Sparbuch mit 3 Monaten Kündigungsfrist",
       "Girokonto"
      ],
      "richtig": 2,
      "erklaerung": "Spareinlage: Urkunde, mind. 3 Monate Kündigungsfrist, nicht für Zahlungsverkehr."
     },
     {
      "nr": 4,
      "operator": "Ermitteln",
      "punkte": 3,
      "typ": "mc",
      "frage": "Ein Azubi (zvE 15.000 €) zahlt 480 € VL im Jahr in einen Aktienfonds-Sparplan. Sparzulage?",
      "optionen": [
       "96 €",
       "80 €",
       "43,20 €",
       "0 €"
      ],
      "richtig": 1,
      "erklaerung": "20 % auf höchstens 400 € = 80 €."
     },
     {
      "nr": 5,
      "operator": "Beurteilen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Eine Anleihe mit 2 % Kupon steht bei 95 %. Was gilt für die Rendite bis zur Fälligkeit?",
      "optionen": [
       "unter 2 %",
       "genau 2 %",
       "über 2 %",
       "0 %"
      ],
      "richtig": 2,
      "erklaerung": "Unter pari gekauft: Kursgewinn bei Rückzahlung, Rendite über dem Kupon."
     },
     {
      "nr": 6,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Teilfreistellung gilt für Aktienfonds bei Privatanlegern?",
      "optionen": [
       "15 %",
       "30 %",
       "60 %",
       "80 %"
      ],
      "richtig": 1,
      "erklaerung": "Aktienfonds (mind. 51 % Aktien): 30 %."
     },
     {
      "nr": 7,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "zuordnen",
      "frage": "Ordnen Sie die Risiken zu.",
      "paare": [
       [
        "Emittent wird zahlungsunfähig",
        "Bonitätsrisiko"
       ],
       [
        "Marktzins steigt, Anleihekurs fällt",
        "Zinsänderungsrisiko"
       ],
       [
        "US-Dollar verliert gegenüber dem Euro",
        "Währungsrisiko"
       ]
      ],
      "erklaerung": "Jedes Risiko hat eine klare Ursache."
     },
     {
      "nr": 8,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Unterlage erhält ein Privatkunde nach einer Anlageberatung vor Vertragsschluss?",
      "optionen": [
       "Beratungsprotokoll nach altem Recht",
       "Geeignetheitserklärung",
       "ESIS-Merkblatt",
       "Schufa-Auskunft"
      ],
      "richtig": 1,
      "erklaerung": "§ 64 Abs. 4 WpHG: Geeignetheitserklärung."
     },
     {
      "nr": 9,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Zu welcher Schicht der Altersvorsorge gehört die Basisrente (Rürup)?",
      "optionen": [
       "Schicht 1",
       "Schicht 2",
       "Schicht 3",
       "keiner"
      ],
      "richtig": 0,
      "erklaerung": "Basisversorgung: gesetzliche Rente und Basisrente."
     },
     {
      "nr": 10,
      "operator": "Ermitteln",
      "punkte": 3,
      "typ": "mc",
      "frage": "bAV: Wie viel Prozent der BBG der Rentenversicherung sind steuerfrei?",
      "optionen": [
       "4 %",
       "8 %",
       "15 %",
       "20 %"
      ],
      "richtig": 1,
      "erklaerung": "§ 3 Nr. 63 EStG: 8 %; sozialversicherungsfrei 4 %."
     }
    ]
   },
   {
    "name": "Ungebundener Teil",
    "art": "ungebunden",
    "punkte": 70,
    "aufgaben": [
     {
      "nr": 1,
      "titel": "Anlage auf Konten",
      "situation": "Die Eheleute Lange (Sachsen, Zusammenveranlagung, nicht kirchensteuerpflichtig) haben 40.000 € auf dem Girokonto. Sie wollen 30.000 € für ein halbes Jahr sicher anlegen. Insgesamt erwarten sie in diesem Jahr Kapitalerträge von 2.400 €. Ein gemeinsamer Freistellungsauftrag über 2.000 € liegt bei der Sparkasse.",
      "punkte": 24,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die Zinsen für ein Festgeld über 30.000 € für 180 Tage zu 2,2 % p. a. (act/360).",
        "ergebnis": 330.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "30.000 · 2,2 · 180 : (100 · 360) = 330,00 €.",
        "loesung": "30.000 · 2,2 · 180 : (100 · 360) = 330,00 €.",
        "bewertung": "2 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 6,
        "typ": "rechnen",
        "frage": "Ermitteln Sie Abgeltungsteuer und Solidaritätszuschlag auf die Kapitalerträge des Jahres zusammen.",
        "ergebnis": 105.5,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "2.400 − 2.000 = 400 € steuerpflichtig. Abgeltungsteuer 25 % = 100,00 €, Soli 5,5 % = 5,50 €. Zusammen 105,50 €.",
        "loesung": "2.400 − 2.000 = 400 € steuerpflichtig. Abgeltungsteuer 25 % = 100,00 €, Soli 5,5 % = 5,50 €. Zusammen 105,50 €.",
        "bewertung": "2 P Bemessungsgrundlage, 2 P Abgeltungsteuer, 2 P Soli."
       },
       {
        "nr": "c",
        "operator": "Erläutern",
        "punkte": 6,
        "typ": "frei",
        "frage": "Frau Lange fragt, wie sicher ihr Geld bei der Sparkasse ist. Erläutern Sie den Einlagenschutz.",
        "loesung": "Gesetzlich sind Einlagen bis 100.000 € je Kunde und Institut geschützt, ausgezahlt wird binnen 7 Arbeitstagen. Die Sparkasse ist zusätzlich Mitglied der Institutssicherung der Sparkassen-Finanzgruppe: Sie stützt eine Sparkasse in Schwierigkeiten, damit sie gar nicht ausfällt. Das System ist amtlich als Einlagensicherungssystem anerkannt. Die 40.000 € der Langes sind damit voll geschützt.",
        "bewertung": "2 P gesetzlicher Schutz mit Betrag, 2 P Institutssicherung, 2 P Bezug zum Fall."
       },
       {
        "nr": "d",
        "operator": "Unterscheiden",
        "punkte": 8,
        "typ": "frei",
        "frage": "Unterscheiden Sie Festgeld und Spareinlage nach Verfügbarkeit, Verzinsung, Kündigung und Eignung für die Langes.",
        "loesung": "Verfügbarkeit: Festgeld erst nach Ablauf der festen Laufzeit; Spareinlage nach Kündigung mit mind. 3 Monaten Frist, oft bis 2.000 € im Monat frei. Verzinsung: Festgeld fester Zins für die Laufzeit; Spareinlage variabler Zins. Kündigung: Festgeld braucht keine, es endet automatisch (oder wird prolongiert); Spareinlage muss gekündigt werden. Eignung: Für ein halbes Jahr mit festem Zins passt das Festgeld.",
        "bewertung": "je Merkmal 2 P (beide Seiten richtig)."
       }
      ]
     },
     {
      "nr": 2,
      "titel": "Anlage in Wertpapieren",
      "situation": "Herr Lange (42) hat Erfahrung mit Fondssparplänen und mittlere Risikobereitschaft. Er kauft 15.000 € Nennwert einer 4 %-Unternehmensanleihe (Restlaufzeit 3 Jahre) zum Kurs von 97,40 %. Seit dem letzten Zinstermin sind 146 Tage vergangen, das Zinsjahr hat 365 Tage. Für seine Tochter (geboren 2024) möchte er monatlich 50 € anlegen.",
      "punkte": 26,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 7,
        "typ": "rechnen",
        "frage": "Ermitteln Sie den Kaufbetrag ohne Spesen (Kurswert plus Stückzinsen).",
        "ergebnis": 14850.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "Kurswert 15.000 · 97,40 % = 14.610,00 €. Stückzinsen 15.000 · 4 % · 146 : 365 = 240,00 €. Kaufbetrag 14.850,00 €.",
        "loesung": "Kurswert 15.000 · 97,40 % = 14.610,00 €. Stückzinsen 15.000 · 4 % · 146 : 365 = 240,00 €. Kaufbetrag 14.850,00 €.",
        "bewertung": "3 P Kurswert, 3 P Stückzinsen, 1 P Summe."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 5,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die Rendite nach der vereinfachten Formel (zwei Nachkommastellen).",
        "ergebnis": 5.0,
        "einheit": "%",
        "toleranz": 0.02,
        "weg": "(4 + (100 − 97,40) : 3) : 97,40 · 100 = (4 + 0,8667) : 97,40 · 100 = 5,00 %.",
        "loesung": "(4 + (100 − 97,40) : 3) : 97,40 · 100 = (4 + 0,8667) : 97,40 · 100 = 5,00 %.",
        "bewertung": "3 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "c",
        "operator": "Erläutern",
        "punkte": 5,
        "typ": "frei",
        "frage": "Erläutern Sie Herrn Lange zwei Risiken dieser Anleihe.",
        "loesung": "Bonitätsrisiko: Gerät das Unternehmen in Schwierigkeiten, zahlt es Zinsen oder Rückzahlung eventuell nicht; keine Einlagensicherung. Zinsänderungsrisiko: Steigt der Marktzins, fällt der Kurs; verkauft er vor Fälligkeit, kann er einen Verlust erleiden. (Auch möglich: Liquiditätsrisiko bei geringem Handel.)",
        "bewertung": "je Risiko 1 P Nennung und 1,5 P Erläuterung."
       },
       {
        "nr": "d",
        "operator": "Beurteilen",
        "punkte": 9,
        "typ": "frei",
        "frage": "Beurteilen Sie einen weltweit streuenden Aktienfonds-Sparplan für die Tochter.",
        "loesung": "Pro: Anlagehorizont von rund 18 Jahren bis zur Volljährigkeit, Schwankungen können sich ausgleichen; Sparplan ab kleinen Raten; durch Streuung geringeres Einzelwertrisiko; höhere Renditechancen als Einlagen; Durchschnittskosteneffekt. Contra: Kursschwankungen, Verluste zum Auszahlungszeitpunkt möglich; Kosten (Ausgabeaufschlag, laufende Kosten). Fazit: geeignet, weil die Laufzeit lang ist und Herr Lange Erfahrung und Risikobereitschaft mitbringt; einige Jahre vor dem Ziel schrittweise in sichere Anlagen umschichten.",
        "bewertung": "3 P Pro, 3 P Contra, 3 P Fazit mit Bezug zum Fall."
       }
      ]
     },
     {
      "nr": 3,
      "titel": "Vorsorge und Absicherung",
      "situation": "Frau Lange ist angestellt (rentenversicherungspflichtig), ihr Bruttogehalt im Vorjahr betrug 36.000 €. Die Tochter ist 2024 geboren. Die Hausratversicherung der Familie hat eine Versicherungssumme von 45.000 €, der Hausrat ist heute 60.000 € wert. Ein Unterversicherungsverzicht ist nicht vereinbart.",
      "punkte": 20,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 6,
        "typ": "rechnen",
        "frage": "Ermitteln Sie Frau Langes Riester-Mindesteigenbeitrag im Jahr.",
        "ergebnis": 965.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "4 % von 36.000 = 1.440 € (unter 2.100 €). Zulagen 175 + 300 = 475 €. 1.440 − 475 = 965 €.",
        "loesung": "4 % von 36.000 = 1.440 € (unter 2.100 €). Zulagen 175 + 300 = 475 €. 1.440 − 475 = 965 €.",
        "bewertung": "2 P 4 %, 2 P Zulagen, 2 P Ergebnis."
       },
       {
        "nr": "b",
        "operator": "Nennen",
        "punkte": 3,
        "typ": "frei",
        "frage": "Nennen Sie drei Durchführungswege der betrieblichen Altersversorgung.",
        "loesung": "Direktzusage, Unterstützungskasse, Direktversicherung, Pensionskasse, Pensionsfonds (drei davon).",
        "bewertung": "je Weg 1 P."
       },
       {
        "nr": "c",
        "operator": "Ermitteln",
        "punkte": 5,
        "typ": "rechnen",
        "frage": "Bei einem Wasserschaden entsteht ein Hausratschaden von 12.000 €. Ermitteln Sie die Entschädigung.",
        "ergebnis": 9000.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "Unterversicherung: 12.000 · 45.000 : 60.000 = 9.000,00 €.",
        "loesung": "Unterversicherung: 12.000 · 45.000 : 60.000 = 9.000,00 €.",
        "bewertung": "3 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "d",
        "operator": "Begründen",
        "punkte": 6,
        "typ": "frei",
        "frage": "Begründen Sie, warum Frau Lange eine Berufsunfähigkeitsversicherung abschließen sollte.",
        "loesung": "Ihr Einkommen ist die Grundlage für den Lebensunterhalt der Familie und für Sparpläne. Wird sie durch Krankheit oder Unfall berufsunfähig, fällt es weg. Die gesetzliche Erwerbsminderungsrente ist niedrig und wird nur bei starker Einschränkung gezahlt. Die BU-Versicherung zahlt eine vereinbarte Monatsrente und sichert so den Lebensstandard.",
        "bewertung": "2 P Einkommen als Risiko, 2 P Lücke der gesetzlichen Absicherung, 2 P Leistung der BU."
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "bp-fv-1",
  "bereich": "FV",
  "titel": "Beispielprüfung Finanzierungsvorhaben begleiten",
  "minuten": 90,
  "punkte": 100,
  "ergaenzt": true,
  "ablauf": "90 Minuten, 100 Punkte. Gebundener Teil: 10 Aufgaben zu je 3 Punkten (30 Punkte, etwa 25 Minuten). Ungebundener Teil: 3 Fälle mit zusammen 70 Punkten (etwa 60 Minuten), Rest zum Nachlesen. Faustregel: 0,9 Minuten je Punkt.",
  "hinweise": [
   "Erlaubt ist nur ein nicht programmierbarer Taschenrechner, keine Formelsammlung.",
   "Lies jeden Fall einmal ganz, bevor du anfängst.",
   "Achte auf den Operator jeder Teilaufgabe und schreib bei Rechnungen den Weg und die Einheit dazu.",
   "Bewertung nach IHK-Schlüssel: 100–92 = 1, 91–81 = 2, 80–67 = 3, 66–50 = 4, 49–30 = 5, 29–0 = 6."
  ],
  "teile": [
   {
    "name": "Gebundener Teil",
    "art": "gebunden",
    "punkte": 30,
    "aufgaben": [
     {
      "nr": 1,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Wie hoch ist die Grunderwerbsteuer in Sachsen (Stand 2026)?",
      "optionen": [
       "3,5 %",
       "5,0 %",
       "5,5 %",
       "6,5 %"
      ],
      "richtig": 2,
      "erklaerung": "Seit 01.01.2023 5,5 %."
     },
     {
      "nr": 2,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "zuordnen",
      "frage": "Ordnen Sie die Eintragungen den Teilen des Grundbuchs zu.",
      "paare": [
       [
        "Eigentümer",
        "Abteilung I"
       ],
       [
        "Wegerecht",
        "Abteilung II"
       ],
       [
        "Grundschuld",
        "Abteilung III"
       ]
      ],
      "erklaerung": "I wem, II Lasten, III Grundpfandrechte."
     },
     {
      "nr": 3,
      "operator": "Unterscheiden",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welche Aussage trifft auf die Grundschuld zu?",
      "optionen": [
       "Sie ist akzessorisch.",
       "Sie erlischt automatisch mit der Tilgung.",
       "Sie ist nicht akzessorisch und kann wiederverwendet werden.",
       "Sie steht in Abteilung II."
      ],
      "richtig": 2,
      "erklaerung": "Grundschuld: nicht akzessorisch, Verbindung über Sicherungszweckerklärung."
     },
     {
      "nr": 4,
      "operator": "Ermitteln",
      "punkte": 3,
      "typ": "mc",
      "frage": "Darlehen 150.000 €, Sollzins 4 %, anfängliche Tilgung 3 %. Jahresannuität?",
      "optionen": [
       "6.000 €",
       "4.500 €",
       "10.500 €",
       "875 €"
      ],
      "richtig": 2,
      "erklaerung": "150.000 · 7 % = 10.500 €."
     },
     {
      "nr": 5,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Nach wie vielen Jahren kann ein Festzinsdarlehen nach § 489 BGB ohne Vorfälligkeitsentschädigung gekündigt werden?",
      "optionen": [
       "5 Jahre",
       "10 Jahre nach vollständiger Auszahlung, Frist 6 Monate",
       "15 Jahre",
       "nie"
      ],
      "richtig": 1,
      "erklaerung": "§ 489 Abs. 1 Nr. 2 BGB."
     },
     {
      "nr": 6,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Wie lange ist die Bank bei einem Immobiliar-Verbraucherdarlehen an ihr Angebot gebunden?",
      "optionen": [
       "3 Tage",
       "7 Tage",
       "14 Tage",
       "1 Monat"
      ],
      "richtig": 1,
      "erklaerung": "§ 495 Abs. 3 BGB: Bedenkzeit von 7 Tagen."
     },
     {
      "nr": 7,
      "operator": "Ermitteln",
      "punkte": 3,
      "typ": "mc",
      "frage": "Eigenkapital 240.000 €, langfristiges Fremdkapital 160.000 €, Anlagevermögen 320.000 €. Anlagendeckung II?",
      "optionen": [
       "75 %",
       "100 %",
       "125 %",
       "150 %"
      ],
      "richtig": 2,
      "erklaerung": "(240.000 + 160.000) : 320.000 · 100 = 125 %."
     },
     {
      "nr": 8,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Bei welcher Sicherheit bleibt der Kunde Besitzer und die Bank wird Eigentümerin?",
      "optionen": [
       "Pfandrecht",
       "Sicherungsübereignung",
       "Bürgschaft",
       "Hypothek"
      ],
      "richtig": 1,
      "erklaerung": "Besitzkonstitut, § 930 BGB."
     },
     {
      "nr": 9,
      "operator": "Nennen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Was ist ein Avalkredit?",
      "optionen": [
       "Ein Kontokorrentkredit",
       "Eine Bürgschaft der Bank für den Kunden gegenüber Dritten",
       "Ein Kredit gegen Abtretung von Forderungen",
       "Ein Bauspardarlehen"
      ],
      "richtig": 1,
      "erklaerung": "Kreditleihe, die Bank stellt ihren Namen zur Verfügung."
     },
     {
      "nr": 10,
      "operator": "Zuordnen",
      "punkte": 3,
      "typ": "mc",
      "frage": "Welches Recht hat die Bank in der Insolvenz des Kunden an einer sicherungsübereigneten Maschine?",
      "optionen": [
       "Aussonderung",
       "Absonderung",
       "kein Recht",
       "Aufrechnung"
      ],
      "richtig": 1,
      "erklaerung": "§ 51 Nr. 1 InsO: Absonderung."
     }
    ]
   },
   {
    "name": "Ungebundener Teil",
    "art": "ungebunden",
    "punkte": 70,
    "aufgaben": [
     {
      "nr": 1,
      "titel": "Baufinanzierung Familie Hoffmann",
      "situation": "Familie Hoffmann (zwei Erwachsene, ein Kind) kauft in Leipzig eine Doppelhaushälfte für 300.000 €. Kaufnebenkosten: Grunderwerbsteuer 5,5 %, Notar und Grundbuch 2 %, Makler 3,57 %. Eigenkapital: 70.000 €. Die Sparkasse ermittelt einen Beleihungswert von 270.000 €, die Beleihungsgrenze beträgt 60 %. Angebot: Sollzins 3,6 %, anfängliche Tilgung 2 %, monatliche Rate. Haushalt: Nettoeinkommen 4.800 €, Lebenshaltung 2.100 €, Bewirtschaftung des Hauses 350 €, Versicherungen und Sonstiges 400 €.",
      "punkte": 30,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 7,
        "typ": "rechnen",
        "frage": "Ermitteln Sie den Darlehensbedarf.",
        "ergebnis": 263210.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "Grunderwerbsteuer 16.500 €, Notar und Grundbuch 6.000 €, Makler 10.710 €: Nebenkosten 33.210 €. Gesamtkosten 333.210 €. Minus Eigenkapital 70.000 € = 263.210 €.",
        "loesung": "Grunderwerbsteuer 16.500 €, Notar und Grundbuch 6.000 €, Makler 10.710 €: Nebenkosten 33.210 €. Gesamtkosten 333.210 €. Minus Eigenkapital 70.000 € = 263.210 €.",
        "bewertung": "je Nebenkostenart 1 P, 2 P Gesamtkosten, 2 P Darlehensbedarf."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie den Teil des Darlehens, der über der Beleihungsgrenze liegt.",
        "ergebnis": 101210.0,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "Beleihungsgrenze 270.000 · 60 % = 162.000 €. 263.210 − 162.000 = 101.210 €.",
        "loesung": "Beleihungsgrenze 270.000 · 60 % = 162.000 €. 263.210 − 162.000 = 101.210 €.",
        "bewertung": "2 P Beleihungsgrenze, 2 P Ergebnis."
       },
       {
        "nr": "c",
        "operator": "Ermitteln",
        "punkte": 5,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die monatliche Rate.",
        "ergebnis": 1228.31,
        "einheit": "€",
        "toleranz": 0.02,
        "weg": "263.210 · (3,6 + 2) % = 14.739,76 € im Jahr. 14.739,76 : 12 = 1.228,31 €.",
        "loesung": "263.210 · (3,6 + 2) % = 14.739,76 € im Jahr. 14.739,76 : 12 = 1.228,31 €.",
        "bewertung": "3 P Jahresannuität, 2 P Monatsrate."
       },
       {
        "nr": "d",
        "operator": "Beurteilen",
        "punkte": 8,
        "typ": "frei",
        "frage": "Beurteilen Sie die Tragbarkeit der Finanzierung.",
        "loesung": "Frei verfügbar: 4.800 − 2.100 − 350 − 400 = 1.950 €. Nach Abzug der Rate von 1.228,31 € bleiben 721,69 € Reserve. Positiv: Die Rate ist gut gedeckt, Reserve für Rücklagen und Zinsänderung vorhanden. Kritisch: Das Eigenkapital deckt die Nebenkosten und gut 11 % des Kaufpreises; der Beleihungsauslauf liegt bei rund 97 %, ein Teil ist nachrangig und teurer; nach der Zinsbindung bleibt eine hohe Restschuld. Fazit: tragbar; empfehlenswert sind eine lange Zinsbindung, ein Sondertilgungsrecht und eine Risikolebensversicherung.",
        "bewertung": "2 P freie Mittel, 2 P Reserve, 2 P Abwägung (Eigenkapital, Beleihung, Zinsrisiko), 2 P Fazit mit Empfehlung."
       },
       {
        "nr": "e",
        "operator": "Zuordnen",
        "punkte": 3,
        "typ": "frei",
        "frage": "Ordnen Sie zu, in welcher Abteilung des Grundbuchs stehen: Eheleute Hoffmann als Eigentümer, Auflassungsvormerkung, Grundschuld der Sparkasse.",
        "loesung": "Eigentümer: Abteilung I. Auflassungsvormerkung: Abteilung II. Grundschuld: Abteilung III.",
        "bewertung": "je richtige Zuordnung 1 P."
       },
       {
        "nr": "f",
        "operator": "Nennen",
        "punkte": 3,
        "typ": "frei",
        "frage": "Nennen Sie die Widerrufsfrist und die Bindefrist des Angebots bei diesem Darlehen.",
        "loesung": "Widerrufsfrist 14 Tage (§§ 495, 355 BGB). Bindefrist des Angebots (Bedenkzeit) 7 Tage (§ 495 Abs. 3 BGB).",
        "bewertung": "1,5 P je Frist."
       }
      ]
     },
     {
      "nr": 2,
      "titel": "Firmenkunde Tischlerei Kühn GmbH",
      "situation": "Die Tischlerei Kühn GmbH will eine CNC-Maschine für 120.000 € kaufen. Bilanz (Auszug): Anlagevermögen 400.000 €, Vorräte 150.000 €, Forderungen 110.000 €, flüssige Mittel 40.000 €. Eigenkapital 210.000 €, langfristiges Fremdkapital 290.000 €, kurzfristiges Fremdkapital 200.000 €. Lieferanten gewähren 3 % Skonto innerhalb von 10 Tagen, Zahlungsziel 40 Tage.",
      "punkte": 25,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die Anlagendeckung II.",
        "ergebnis": 125.0,
        "einheit": "%",
        "toleranz": 0.02,
        "weg": "(210.000 + 290.000) : 400.000 · 100 = 125 %.",
        "loesung": "(210.000 + 290.000) : 400.000 · 100 = 125 %.",
        "bewertung": "2 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "b",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie die Liquidität 2. Grades.",
        "ergebnis": 75.0,
        "einheit": "%",
        "toleranz": 0.02,
        "weg": "(40.000 + 110.000) : 200.000 · 100 = 75 %.",
        "loesung": "(40.000 + 110.000) : 200.000 · 100 = 75 %.",
        "bewertung": "2 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "c",
        "operator": "Beurteilen",
        "punkte": 8,
        "typ": "frei",
        "frage": "Beurteilen Sie die Kreditwürdigkeit der Kühn GmbH anhand der Bilanz (Eigenkapitalquote 30 %, Anlagendeckung II und Liquidität 2. Grades aus a und b).",
        "loesung": "Positiv: Eigenkapitalquote 30 % solide; Anlagendeckung II 125 % erfüllt die goldene Bilanzregel. Negativ: Liquidität 2. Grades 75 % unter 100 %, kurzfristige Schulden nicht durch Geld und Forderungen gedeckt. Fazit: grundsätzlich kreditwürdig; die Maschine langfristig finanzieren, die Liquidität beobachten und gegebenenfalls kurzfristige Schulden umschulden.",
        "bewertung": "2 P EK-Quote, 2 P Anlagendeckung, 2 P Liquidität, 2 P Fazit."
       },
       {
        "nr": "d",
        "operator": "Ermitteln",
        "punkte": 4,
        "typ": "rechnen",
        "frage": "Ermitteln Sie den Jahreszins des Lieferantenkredits nach der Faustformel.",
        "ergebnis": 36.0,
        "einheit": "%",
        "toleranz": 0.02,
        "weg": "3 · 360 : (40 − 10) = 1.080 : 30 = 36 %.",
        "loesung": "3 · 360 : (40 − 10) = 1.080 : 30 = 36 %.",
        "bewertung": "2 P Ansatz, 2 P Ergebnis."
       },
       {
        "nr": "e",
        "operator": "Unterscheiden",
        "punkte": 5,
        "typ": "frei",
        "frage": "Unterscheiden Sie Kontokorrentkredit und Investitionsdarlehen nach Zweck und Rückzahlung.",
        "loesung": "Kontokorrentkredit: finanziert den laufenden Bedarf (Material, Löhne, Skontoziehung), Kreditlinie nach Bedarf, schwankende Inanspruchnahme, Zinsen nur auf die Nutzung. Investitionsdarlehen: finanziert Anlagegüter wie die CNC-Maschine, fester Betrag, Rückzahlung in Raten über die Nutzungsdauer (Abzahlung oder Annuität).",
        "bewertung": "je Kreditart 1 P Zweck, 1 P Rückzahlung, 1 P passende Zuordnung zum Fall."
       }
      ]
     },
     {
      "nr": 3,
      "titel": "Kreditsicherheiten",
      "situation": "Die Sparkasse finanziert die CNC-Maschine. Als Sicherheiten kommen in Betracht: Sicherungsübereignung der Maschine, Abtretung der Kundenforderungen und eine Bürgschaft des Geschäftsführers.",
      "punkte": 15,
      "teilaufgaben": [
       {
        "nr": "a",
        "operator": "Unterscheiden",
        "punkte": 6,
        "typ": "frei",
        "frage": "Unterscheiden Sie Sicherungsübereignung und Pfandrecht nach Eigentum, Besitz und Eignung für die Maschine.",
        "loesung": "Sicherungsübereignung: Die Bank wird Eigentümerin, die Kühn GmbH bleibt Besitzerin und arbeitet weiter mit der Maschine (Besitzkonstitut). Pfandrecht: Die GmbH bleibt Eigentümerin, die Bank muss den Besitz erhalten; die Maschine stünde dann nicht mehr im Betrieb. Für die Maschine eignet sich nur die Sicherungsübereignung.",
        "bewertung": "je Merkmal 2 P."
       },
       {
        "nr": "b",
        "operator": "Erläutern",
        "punkte": 5,
        "typ": "frei",
        "frage": "Erläutern Sie die selbstschuldnerische Bürgschaft des Geschäftsführers.",
        "loesung": "Der Geschäftsführer verpflichtet sich, für die Schulden der GmbH einzustehen. Selbstschuldnerisch heißt: Er verzichtet auf die Einrede der Vorausklage (§§ 771, 773 BGB), die Sparkasse muss nicht erst gegen die GmbH vollstrecken, sondern kann ihn sofort in Anspruch nehmen. Die Bürgschaft ist akzessorisch und braucht für Nichtkaufleute die Schriftform (§ 766 BGB).",
        "bewertung": "2 P Grundidee, 2 P Verzicht auf Einrede der Vorausklage, 1 P akzessorisch oder Schriftform."
       },
       {
        "nr": "c",
        "operator": "Nennen",
        "punkte": 4,
        "typ": "frei",
        "frage": "Nennen Sie je zwei Arten der Zession nach Offenlegung und nach Umfang.",
        "loesung": "Nach Offenlegung: stille Zession und offene Zession. Nach Umfang: Globalzession und Mantelzession (auch Einzelzession).",
        "bewertung": "je richtige Art 1 P."
       }
      ]
     }
    ]
   }
  ]
 }
];
