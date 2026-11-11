/* Lernfelder und Inhalte der Trainings-App.
   Titel LF01–LF13: KMK-Rahmenlehrplan Bankkaufmann/-frau 2020, laut DIHK-Präsentation
   "Übersicht der Lernfelder" (ihk.de, bankkaufleute-praesentation-dihk-data.pdf).
   Prüfungsbereiche: AO 2020 laut Launchplan des Projekts.

   Inhalt je Kapitel (fester Aufbau):
     erklaert, beispiel, tabelle {kopf:[], zeilen:[[]]}, merksatz, tipp, achtung,
     korrektur [{stand, richtig}], ergaenzt (true = nicht aus der Mitschrift)
   Übungen je Lernfeld: karten, mc, rechnen, frei. Jede Übung nennt ihr Thema (thema: Kapitel-id),
   damit der Fortschrittskreis zählt, zu wie vielen Themen schon etwas gemacht wurde.
*/
window.PRUEFUNGSBEREICHE = [
  { id: "KAF", name: "Konten führen und Anschaffungen finanzieren", kurz: "Teil 1", datum: "", lf: [2, 3, 4, 5] },
  { id: "VR",  name: "Vermögen aufbauen und Risiken absichern", kurz: "Vermögen", datum: "2026-11-25", lf: [4, 8, 12] },
  { id: "FV",  name: "Finanzierungsvorhaben begleiten", kurz: "Finanzierung", datum: "2026-11-25", lf: [9, 13] },
  { id: "WISO", name: "Wirtschafts- und Sozialkunde", kurz: "WiSo", datum: "2026-11-24", lf: [1, 6, 10] },
  { id: "UEB", name: "Übergreifend (Rechnungswesen, Steuerung)", kurz: "Übergreifend", datum: "", lf: [7, 11] }
];

window.LERNFELDER = [
 {
  "nr": 1,
  "titel": "Die eigene Rolle im Betrieb und im Wirtschaftsleben mitgestalten",
  "std": 80,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: SV 2026, Mindestlohn 13,90 €, EZB-Sätze seit 16.09.2026 (2,65 / 2,90 / 2,50 %), Inflation Euroraum Okt. 2026 4,0 % vorläufig. EZB-Sitzung 29.10.2026: Sätze unverändert. Nächste EZB-Sitzung 17.12.2026. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Rechtsgeschäfte: Willenserklärung, Form, Nichtigkeit, Anfechtung, Kaufvertrag und Störungen beim Kaufvertrag, Verjährung und gerichtliches Mahnverfahren, Arbeitszeugnis und besondere Schutzgesetze.",
  "kapitel": [
   {
    "id": "lf01-k1",
    "titel": "Berufsausbildung nach dem BBiG",
    "ergaenzt": true,
    "erklaert": "Die Ausbildung läuft dual: Betrieb und Berufsschule. Grundlage ist das Berufsbildungsgesetz (BBiG). Der Ausbildungsvertrag wird vor Beginn schriftlich festgehalten und bei der IHK ins Verzeichnis eingetragen.",
    "beispiel": "Start am 01.09.2024 mit 4 Monaten Probezeit, also Ende der Probezeit am 31.12.2024. Der Vertrag läuft bis 31.01.2027. Gibt der Prüfungsausschuss das Bestehen schon am 15.01.2027 bekannt, endet die Ausbildung an diesem Tag. Arbeitest du am 18.01. ohne neue Absprache weiter, entsteht ein unbefristetes Arbeitsverhältnis (§ 24 BBiG).",
    "tabelle": {
     "kopf": [
      "Thema",
      "Regel",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Probezeit",
       "mindestens 1, höchstens 4 Monate",
       "§ 20 BBiG"
      ],
      [
       "Kündigung in der Probezeit",
       "jederzeit, ohne Frist, ohne Grund, schriftlich",
       "§ 22 Abs. 1, 3 BBiG"
      ],
      [
       "Kündigung nach der Probezeit",
       "beide: fristlos aus wichtigem Grund (binnen 2 Wochen nach Kenntnis); Azubi zusätzlich mit 4 Wochen Frist bei Aufgabe oder Wechsel des Berufs",
       "§ 22 Abs. 2, 4 BBiG"
      ],
      [
       "Ende",
       "mit Ablauf der Zeit oder vorher mit Bekanntgabe des Prüfungsergebnisses",
       "§ 21 BBiG"
      ],
      [
       "Nicht bestanden",
       "Verlängerung auf Verlangen bis zur Wiederholungsprüfung, höchstens 1 Jahr",
       "§ 21 Abs. 3 BBiG"
      ],
      [
       "Pflichten Azubi",
       "Lernpflicht, Berufsschule, Weisungen, Betriebsordnung, Schweigepflicht",
       "§ 13 BBiG"
      ],
      [
       "Pflichten Ausbildender",
       "Ausbildungsmittel kostenlos, Freistellung für Berufsschule und Prüfung, Vergütung, Zeugnis",
       "§§ 14 bis 17 BBiG"
      ]
     ]
    },
    "merksatz": "Probezeit 1 bis 4 Monate, danach kann nur noch der Azubi ordentlich kündigen.",
    "tipp": "Operator „Beurteilen“ bei Kündigungsfällen: erst prüfen, ob Probezeit läuft, dann wer kündigt, dann Form (schriftlich) und Frist.",
    "achtung": "Der Ausbildende kann nach der Probezeit nie ordentlich kündigen, nur fristlos aus wichtigem Grund."
   },
   {
    "id": "lf01-k2",
    "titel": "Arbeitsvertrag, Kündigung und Arbeitsschutz",
    "ergaenzt": true,
    "erklaert": "Der Arbeitsvertrag ist ein Dienstvertrag (§ 611a BGB). Eine Kündigung braucht Schriftform mit Unterschrift, eine E-Mail reicht nicht (§ 623 BGB). Fristen stehen in § 622 BGB, längere Fristen können im Tarif- oder Arbeitsvertrag stehen. Kündigungsschutzgesetz: gilt bei mehr als 10 Arbeitnehmern und mehr als 6 Monaten im Betrieb; die Kündigung muss personen-, verhaltens- oder betriebsbedingt sein, bei Verhalten meist nach Abmahnung; Klage binnen 3 Wochen (§ 4 KSchG). Besonderer Schutz: Schwangere, Elternzeit, Schwerbehinderte, Betriebs- und Personalratsmitglieder, Azubis nach der Probezeit. Arbeitszeit (ArbZG): höchstens 8 Stunden je Werktag, bis 10 bei Ausgleich auf 8 im Schnitt von 6 Monaten oder 24 Wochen; Pause 30 Minuten ab 6 Stunden, 45 Minuten ab 9 Stunden; 11 Stunden Ruhezeit. Unter 18 (JArbSchG): 8 Stunden am Tag, 40 in der Woche, Urlaub mindestens 30, 27 oder 25 Werktage (unter 16, 17, 18 zu Jahresbeginn). Erwachsene: mindestens 24 Werktage (BUrlG), also 20 Arbeitstage bei einer 5-Tage-Woche.",
    "beispiel": "Eine Kollegin ist seit 9 Jahren im Haus. Die Bank kündigt ihr, die Kündigung geht am 10.03. zu. Ab 8 Jahren gilt eine Frist von 3 Monaten zum Monatsende: 10.06. plus Monatsende ergibt Ende am 30.06. Kündigt sie selbst, gilt für sie nur die Grundfrist von 4 Wochen zum 15. oder zum Monatsende.",
    "tabelle": {
     "kopf": [
      "Betriebszugehörigkeit",
      "Frist für den Arbeitgeber (§ 622 Abs. 2 BGB)"
     ],
     "zeilen": [
      [
       "Probezeit (max. 6 Monate)",
       "2 Wochen"
      ],
      [
       "Grundfrist",
       "4 Wochen zum 15. oder Monatsende"
      ],
      [
       "ab 2 Jahren",
       "1 Monat zum Monatsende"
      ],
      [
       "ab 5 Jahren",
       "2 Monate"
      ],
      [
       "ab 8 Jahren",
       "3 Monate"
      ],
      [
       "ab 10 Jahren",
       "4 Monate"
      ],
      [
       "ab 12 Jahren",
       "5 Monate"
      ],
      [
       "ab 15 Jahren",
       "6 Monate"
      ],
      [
       "ab 20 Jahren",
       "7 Monate zum Monatsende"
      ]
     ]
    },
    "merksatz": "Der Arbeitgeber muss mit der Treue warten: je länger dabei, desto länger seine Frist. Der Arbeitnehmer bleibt bei 4 Wochen.",
    "tipp": "Operator „Ermitteln“ beim Kündigungstermin: Zugang, Frist, Stichtag (15. oder Monatsende) und das Ergebnis als Datum hinschreiben.",
    "achtung": "Die verlängerten Fristen gelten laut Gesetz nur für die Kündigung durch den Arbeitgeber."
   },
   {
    "id": "lf01-k3",
    "titel": "Mitbestimmung im Betrieb",
    "ergaenzt": true,
    "erklaert": "Arbeitnehmer reden im Betrieb mit. In privaten Banken regelt das das Betriebsverfassungsgesetz (Betriebsrat). Sparkassen sind öffentlich-rechtlich, dort gilt das Personalvertretungsrecht des Landes: Es gibt einen Personalrat und eine Jugend- und Auszubildendenvertretung. Wahl: Betriebsrat alle 4 Jahre, wählen ab 16 Jahren; JAV alle 2 Jahre. Im Aufsichtsrat: ab 500 Arbeitnehmern ein Drittel Arbeitnehmervertreter (DrittelbG), ab 2.000 die Hälfte (MitbestG), der Vorsitzende hat dann den Stichentscheid.",
    "beispiel": "Eine Privatbank-Filiale hat 14 Beschäftigte, davon 6 Azubis unter 25. Sie kann einen Betriebsrat (ab 5 ständigen wahlberechtigten Arbeitnehmern) und eine JAV (ab 5 Jugendlichen unter 18 oder Azubis unter 25) wählen. Will die Bank jemanden kündigen, ohne den Betriebsrat vorher anzuhören, ist die Kündigung unwirksam (§ 102 BetrVG).",
    "tabelle": {
     "kopf": [
      "Stufe",
      "Bedeutung",
      "Beispiel (BetrVG)"
     ],
     "zeilen": [
      [
       "Information",
       "Arbeitgeber muss unterrichten",
       "Personalplanung (§ 92)"
      ],
      [
       "Anhörung",
       "Meinung einholen, sonst unwirksam",
       "Kündigung (§ 102)"
      ],
      [
       "Widerspruch",
       "Zustimmung kann verweigert werden",
       "Einstellung, Versetzung (§ 99)"
      ],
      [
       "Echte Mitbestimmung",
       "ohne Zustimmung keine Maßnahme",
       "Beginn und Ende der Arbeitszeit, Urlaubsplan, Kontrolltechnik (§ 87)"
      ]
     ]
    },
    "merksatz": "Je stärker die Maßnahme den Alltag der Belegschaft trifft, desto stärker das Mitspracherecht.",
    "tipp": "Operator „Unterscheiden“: betriebliche Mitbestimmung (Betriebs- oder Personalrat) gegenüber Unternehmensmitbestimmung (Aufsichtsrat).",
    "achtung": "In deiner Sparkasse heißt das Gremium Personalrat, nicht Betriebsrat. Die Einzelheiten im sächsischen Personalvertretungsgesetz bitte mit der Mitschrift abgleichen."
   },
   {
    "id": "lf01-k4",
    "titel": "Tarifvertrag und Arbeitskampf",
    "ergaenzt": true,
    "erklaert": "Gewerkschaften und Arbeitgeber handeln Löhne und Bedingungen ohne den Staat aus (Tarifautonomie, Art. 9 Abs. 3 GG). Für Sparkassen gilt der TVöD-S (ver.di und VKA), für private Banken der Tarifvertrag für das private Bankgewerbe.",
    "beispiel": "Ein Entgelttarifvertrag läuft am 31.12. aus. Ab dem 01.01. endet die Friedenspflicht, ver.di ruft zu Warnstreiks auf. Nach gescheiterter Schlichtung stimmen 80 % der Mitglieder in der Urabstimmung für Streik, mehr als die üblichen 75 %. Nach der Einigung reichen meist 25 % Zustimmung, um den neuen Tarif anzunehmen.",
    "tabelle": {
     "kopf": [
      "Begriff",
      "Bedeutung"
     ],
     "zeilen": [
      [
       "Manteltarifvertrag",
       "Arbeitszeit, Urlaub, Kündigung; lange Laufzeit"
      ],
      [
       "Entgelttarifvertrag",
       "Höhe von Lohn und Gehalt; kurze Laufzeit"
      ],
      [
       "Friedenspflicht",
       "während der Laufzeit kein Arbeitskampf"
      ],
      [
       "Günstigkeitsprinzip",
       "Abweichung nur zugunsten des Arbeitnehmers"
      ],
      [
       "Tarifbindung",
       "gilt für Mitglieder; für alle nur nach Allgemeinverbindlicherklärung"
      ],
      [
       "Ablauf",
       "Verhandlung, Scheitern, Schlichtung, Urabstimmung, Streik oder Aussperrung, Einigung, zweite Urabstimmung"
      ]
     ]
    },
    "merksatz": "Erst verhandeln, dann schlichten, dann abstimmen, dann streiken.",
    "tipp": "Operator „Ordnen“: die Schritte des Arbeitskampfs in die richtige Reihenfolge bringen.",
    "achtung": "Die 75 % und 25 % stehen in den Satzungen der Gewerkschaften, nicht im Gesetz."
   },
   {
    "id": "lf01-k5",
    "titel": "Sozialversicherung und Gehaltsabrechnung",
    "ergaenzt": true,
    "erklaert": "Die Sozialversicherung hat 5 Zweige. Vier bezahlen Arbeitnehmer und Arbeitgeber gemeinsam, die Unfallversicherung zahlt der Arbeitgeber allein. Beiträge werden nur bis zur Beitragsbemessungsgrenze berechnet. Weitere Werte 2026: Minijob-Grenze 603 € im Monat, Übergangsbereich (Midijob) bis 2.000 €, Mindestlohn 13,90 € je Stunde, Versicherungspflichtgrenze KV 77.400 € im Jahr.",
    "beispiel": "Stand 2026: Azubi in Sachsen, 22 Jahre, ohne Kind, 1.300 € brutto, Krankenkasse mit 2,9 % Zusatzbeitrag. Arbeitnehmeranteile: RV 9,3 % = 120,90 €; AV 1,3 % = 16,90 €; KV 7,3 % + 1,45 % = 8,75 % = 113,75 €; PV Sachsen 2,3 % = 29,90 €. Summe 281,45 €. Ab 23 Jahren ohne Kind kämen 0,6 % Kinderlosenzuschlag dazu, also 7,80 € mehr.",
    "tabelle": {
     "kopf": [
      "Zweig",
      "Träger",
      "Satz 2026",
      "Arbeitnehmer",
      "Arbeitgeber",
      "BBG je Monat"
     ],
     "zeilen": [
      [
       "Krankenversicherung",
       "Krankenkassen",
       "14,6 % + Zusatzbeitrag (Ø 2,9 %)",
       "7,3 % + halber Zusatz",
       "7,3 % + halber Zusatz",
       "5.812,50 €"
      ],
      [
       "Pflegeversicherung",
       "Pflegekassen",
       "3,6 %",
       "Sachsen 2,3 % (+ 0,6 % kinderlos ab 23)",
       "Sachsen 1,3 %",
       "5.812,50 €"
      ],
      [
       "Rentenversicherung",
       "Deutsche Rentenversicherung",
       "18,6 %",
       "9,3 %",
       "9,3 %",
       "8.450 €"
      ],
      [
       "Arbeitslosenversicherung",
       "Bundesagentur für Arbeit",
       "2,6 %",
       "1,3 %",
       "1,3 %",
       "8.450 €"
      ],
      [
       "Unfallversicherung",
       "Berufsgenossenschaften, Unfallkassen",
       "nach Gefahrklasse",
       "0 %",
       "100 %",
       "(keine)"
      ]
     ]
    },
    "merksatz": "Kranke, Pflege, Rente, Arbeitslos teilen sich beide, den Unfall zahlt der Chef allein.",
    "tipp": "Operator „Ermitteln“: jeden Anteil einzeln mit Prozentsatz hinschreiben, dann summieren. Im Taschenrechner nie den Gesamtsatz und den halben Satz verwechseln.",
    "achtung": "Sachsen ist die Ausnahme bei der Pflegeversicherung: Arbeitnehmer 2,3 %, Arbeitgeber nur 1,3 %, weil der Buß- und Bettag Feiertag geblieben ist."
   },
   {
    "id": "lf01-k6",
    "titel": "Kreditwirtschaft in Deutschland",
    "ergaenzt": true,
    "erklaert": "Deutschland hat ein Drei-Säulen-System: private Banken, öffentlich-rechtliche Institute und Genossenschaftsbanken. Die meisten sind Universalbanken, die alle Bankgeschäfte nach § 1 KWG anbieten. Sparkasse: Träger ist eine Kommune oder ein Zweckverband. Organe sind Verwaltungsrat (überwacht) und Vorstand (leitet). Aufsicht: BaFin und Deutsche Bundesbank, für bedeutende Institute die EZB.",
    "beispiel": "Eine Kundin hat 130.000 € auf dem Tagesgeld einer Privatbank. Die gesetzliche Einlagensicherung deckt 100.000 € je Kunde und Bank, also sind 30.000 € nur über eine freiwillige Sicherung geschützt. Bei der Sparkasse schützt die Institutssicherung schon die Bank selbst, damit sind alle Einlagen gesichert.",
    "tabelle": {
     "kopf": [
      "Säule",
      "Beispiele",
      "Rechtsform",
      "Ziel"
     ],
     "zeilen": [
      [
       "Private Banken",
       "Großbanken, Regional- und Direktbanken",
       "meist AG",
       "Gewinn"
      ],
      [
       "Öffentlich-rechtlich",
       "Sparkassen, Landesbanken",
       "Anstalt des öffentlichen Rechts",
       "öffentlicher Auftrag, Regionalprinzip"
      ],
      [
       "Genossenschaftlich",
       "Volksbanken, Raiffeisenbanken",
       "eG",
       "Förderung der Mitglieder"
      ]
     ]
    },
    "merksatz": "Privat will Gewinn, Sparkasse will Region, Genossenschaft will Mitglieder.",
    "tipp": "Operator „Erläutern“: Regionalprinzip und öffentlichen Auftrag mit je einem Beispiel aus deiner Sparkasse.",
    "achtung": "Gesetzliche Einlagensicherung (100.000 €) und Institutssicherung sind zwei verschiedene Dinge."
   },
   {
    "id": "lf01-k7",
    "titel": "Kaufmann, Handelsregister und Rechtsformen",
    "ergaenzt": true,
    "erklaert": "Wer ein Handelsgewerbe betreibt, ist Kaufmann nach HGB. Das Handelsregister beim Amtsgericht zeigt öffentlich, wer haftet und wer vertreten darf. Für die Bank ist das wichtig bei Kontoeröffnung und Kredit. Kaufmannsarten: Istkaufmann (§ 1 HGB, Eintragung erklärend), Kannkaufmann (§§ 2, 3 HGB, Eintragung begründend), Formkaufmann (§ 6 HGB, GmbH, AG, eG). § 15 HGB: Wer eine eintragungspflichtige Tatsache nicht einträgt, kann sie gutgläubigen Dritten nicht entgegenhalten.",
    "beispiel": "Drei Freunde gründen eine GmbH mit 25.000 € Stammkapital, bei der Anmeldung sind 12.500 € eingezahlt. Sie haften nicht privat. Die Bank verlangt deshalb für einen Kredit oft eine persönliche Bürgschaft der Gesellschafter.",
    "tabelle": {
     "kopf": [
      "Rechtsform",
      "Register",
      "Mindestkapital",
      "Haftung"
     ],
     "zeilen": [
      [
       "Einzelunternehmen (e.K.)",
       "HR A",
       "keins",
       "unbeschränkt, privat"
      ],
      [
       "OHG",
       "HR A",
       "keins",
       "alle unbeschränkt, unmittelbar, gesamtschuldnerisch"
      ],
      [
       "KG",
       "HR A",
       "keins",
       "Komplementär unbeschränkt, Kommanditist bis zur Einlage"
      ],
      [
       "GmbH",
       "HR B",
       "25.000 €",
       "nur Gesellschaftsvermögen"
      ],
      [
       "UG (haftungsbeschränkt)",
       "HR B",
       "1 €, 25 % des Gewinns in Rücklage",
       "nur Gesellschaftsvermögen"
      ],
      [
       "AG",
       "HR B",
       "50.000 €",
       "nur Gesellschaftsvermögen"
      ],
      [
       "eG",
       "Genossenschaftsregister",
       "keins",
       "Gesellschaftsvermögen, ggf. Nachschuss laut Satzung"
      ]
     ]
    },
    "merksatz": "A wie alle Personen, B wie beschränkt: HR A für Einzelkaufleute und Personengesellschaften, HR B für Kapitalgesellschaften.",
    "tipp": "Operator „Zuordnen“: Rechtsform, Register und Haftung in einer Zeile verbinden.",
    "achtung": "„Deklaratorisch“ (erklärend) beim Istkaufmann, „konstitutiv“ (begründend) beim Kannkaufmann und bei GmbH und AG."
   },
   {
    "id": "lf01-k8",
    "titel": "Vollmachten: Prokura und Handlungsvollmacht",
    "ergaenzt": true,
    "erklaert": "Ein Kaufmann kann Mitarbeiter bevollmächtigen, für ihn zu handeln. Die Prokura ist die weiteste Vollmacht und steht im Handelsregister. Die Handlungsvollmacht ist enger und wird nicht eingetragen.",
    "beispiel": "Prokurist Herr Lang unterschreibt „ppa. Lang“ einen Kreditvertrag über 200.000 € für seine Firma. Das darf er. Ein Grundstück der Firma verkaufen darf er nur mit besonderer Befugnis. Die Sachbearbeiterin mit Artvollmacht für den Einkauf zeichnet „i. V.“ und darf keinen Kredit aufnehmen.",
    "tabelle": {
     "kopf": [
      "Merkmal",
      "Prokura (§§ 48 ff. HGB)",
      "Handlungsvollmacht (§ 54 HGB)"
     ],
     "zeilen": [
      [
       "Erteilung",
       "nur Kaufmann, ausdrücklich",
       "jeder Gewerbetreibende, auch stillschweigend"
      ],
      [
       "Handelsregister",
       "ja",
       "nein"
      ],
      [
       "Umfang",
       "alle Geschäfte irgendeines Handelsgewerbes",
       "gewöhnliche Geschäfte dieses Betriebs"
      ],
      [
       "Arten",
       "Einzel-, Gesamt-, Filialprokura",
       "allgemeine, Art-, Einzelvollmacht"
      ],
      [
       "Zeichnung",
       "ppa.",
       "i. V. (Einzelvollmacht oft i. A.)"
      ],
      [
       "Ohne Sonderbefugnis nicht",
       "Grundstücke veräußern oder belasten",
       "zusätzlich: Kredite aufnehmen, Wechsel, Prozesse führen"
      ],
      [
       "Nie erlaubt",
       "Bilanz und Steuererklärung unterschreiben, Prokura erteilen, Insolvenz anmelden, Geschäft verkaufen, Gesellschafter aufnehmen",
       "wie Prokura und mehr"
      ]
     ]
    },
    "merksatz": "Prokura darf fast alles, nur nicht das Geschäft selbst aufgeben oder weitergeben.",
    "tipp": "Operator „Begründen“: Immer sagen, ob das Geschäft gewöhnlich ist, und den Paragrafen nennen.",
    "achtung": "Beschränkungen der Prokura im Innenverhältnis gelten gegenüber Dritten nicht (§ 50 HGB)."
   },
   {
    "id": "lf01-k9",
    "titel": "Rechtsgeschäfte: Willenserklärung, Form, Nichtigkeit, Anfechtung",
    "erklaert": "Ein Rechtsgeschäft entsteht durch Willenserklärungen. Einseitig reicht eine Erklärung (Kündigung, Testament), zweiseitig braucht es zwei übereinstimmende: Antrag und Annahme ergeben einen Vertrag (§§ 145 ff. BGB). Werbung, Schaufenster und Online-Shop-Seiten sind noch kein Antrag, sondern nur eine Aufforderung, selbst ein Angebot zu machen. Meist ist die Form frei. Manche Geschäfte brauchen aber Schriftform, notarielle Beurkundung oder öffentliche Beglaubigung. Nichtig ist ein Geschäft von Anfang an, wenn es gegen Gesetz oder gute Sitten verstößt, die Form fehlt oder ein Geschäftsunfähiger handelt. Anfechtbar ist es bei Irrtum, arglistiger Täuschung oder Drohung. Wird wirksam angefochten, gilt das Geschäft als von Anfang an nichtig (§ 142 BGB).",
    "beispiel": "Ein Kunde unterschreibt eine Bürgschaft für den Kredit seines Bruders nur per E-Mail. Er ist kein Kaufmann, deshalb braucht die Bürgschaftserklärung Schriftform (§ 766 BGB). Ohne eigenhändige Unterschrift ist sie nichtig (§ 125 BGB). Anderes Beispiel: Ein Händler tippt im Angebot 150 € statt 510 €. Das ist ein Erklärungsirrtum, er muss unverzüglich anfechten (§§ 119, 121 BGB).",
    "tabelle": {
     "kopf": [
      "Fall",
      "Folge",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Geschäftsunfähiger (unter 7 Jahren) handelt",
       "nichtig",
       "§§ 104, 105 BGB"
      ],
      [
       "vorgeschriebene Form fehlt",
       "nichtig",
       "§ 125 BGB"
      ],
      [
       "Verstoß gegen gesetzliches Verbot",
       "nichtig",
       "§ 134 BGB"
      ],
      [
       "sittenwidrig, Wucher",
       "nichtig",
       "§ 138 BGB"
      ],
      [
       "Scheingeschäft, Scherzgeschäft",
       "nichtig",
       "§§ 117, 118 BGB"
      ],
      [
       "Inhalts- oder Erklärungsirrtum, Irrtum über wesentliche Eigenschaft",
       "anfechtbar, unverzüglich",
       "§§ 119, 121 BGB"
      ],
      [
       "arglistige Täuschung, widerrechtliche Drohung",
       "anfechtbar, binnen 1 Jahr ab Entdeckung bzw. Ende der Zwangslage",
       "§§ 123, 124 BGB"
      ],
      [
       "Schriftform: Bürgschaft (Nichtkaufmann), Kündigung Arbeitsvertrag, Verbraucherdarlehen",
       "eigenhändige Unterschrift",
       "§§ 766, 623, 492 BGB"
      ],
      [
       "notarielle Beurkundung: Grundstückskauf",
       "Notar beurkundet den ganzen Vertrag",
       "§ 311b BGB"
      ],
      [
       "öffentliche Beglaubigung: Anmeldung zum Handelsregister",
       "Notar bestätigt nur die Unterschrift",
       "§ 12 HGB"
      ]
     ]
    },
    "merksatz": "**Nichtig** ist von Anfang an ungültig, **anfechtbar** gilt, bis jemand anficht.",
    "tipp": "Operator „Beurteilen“: Prüfe der Reihe nach Geschäftsfähigkeit, Form, Inhalt (Gesetz, Sitte) und erst dann Anfechtungsgründe. Nenne immer die Folge (nichtig oder anfechtbar).",
    "achtung": "Ein Irrtum im Motiv (Kunde kauft Aktien, weil er auf steigende Kurse hofft) berechtigt nicht zur Anfechtung. Und: Beglaubigung ist nicht Beurkundung.",
    "ergaenzt": true
   },
   {
    "id": "lf01-k10",
    "titel": "Kaufvertrag und Störungen beim Kaufvertrag",
    "erklaert": "Mit dem Kaufvertrag (§ 433 BGB) verpflichtet sich der Verkäufer, die Sache mangelfrei zu übergeben und das Eigentum zu verschaffen, der Käufer, zu zahlen und die Sache abzunehmen. Das ist das Verpflichtungsgeschäft. Erst das Erfüllungsgeschäft überträgt das Eigentum: Einigung und Übergabe (§ 929 BGB). Beide sind rechtlich getrennt (Abstraktionsprinzip). Störungen: Mangelhafte Lieferung, Lieferungsverzug, Zahlungsverzug und Annahmeverzug. Bei einem Mangel hat der Käufer zuerst Anspruch auf Nacherfüllung, er wählt Nachbesserung oder Neulieferung (§ 439 BGB). Erst wenn diese scheitert, kann er zurücktreten, mindern oder Schadensersatz verlangen (§ 437 BGB). Die Mängelrechte verjähren bei beweglichen Sachen in 2 Jahren ab Ablieferung (§ 438 BGB). Verzug setzt Fälligkeit, in der Regel eine Mahnung und Verschulden voraus (§ 286 BGB).",
    "beispiel": "Die Sparkasse bestellt am 02.03. bei einem Händler 20 Bürostühle, Liefertermin „bis 31.03.“. Der Termin ist kalendermäßig bestimmt, also kommt der Händler ab 01.04. auch ohne Mahnung in Verzug. Die Sparkasse kann weiter Lieferung und Ersatz des Verzugsschadens verlangen. Nach einer angemessenen Nachfrist kann sie zurücktreten und Schadensersatz statt der Leistung fordern. Bei einem Kaufmann als Käufer gilt außerdem: Mängel unverzüglich rügen (§ 377 HGB), sonst gilt die Ware als genehmigt.",
    "tabelle": {
     "kopf": [
      "Störung",
      "Voraussetzungen",
      "Rechte des Vertragspartners"
     ],
     "zeilen": [
      [
       "mangelhafte Lieferung (§§ 434, 437 BGB)",
       "Sachmangel bei Gefahrübergang",
       "1. Nacherfüllung; danach Rücktritt oder Minderung, zusätzlich Schadensersatz"
      ],
      [
       "Lieferungsverzug (§ 286 BGB)",
       "fällig, Mahnung (entfällt bei Kalendertermin), Verschulden",
       "Lieferung + Verzugsschaden; nach Nachfrist Rücktritt, Schadensersatz statt der Leistung"
      ],
      [
       "Zahlungsverzug (§§ 286, 288 BGB)",
       "fällig, Mahnung oder 30 Tage nach Rechnung (bei Verbrauchern nur mit Hinweis auf der Rechnung)",
       "Zahlung + Verzugszinsen: 5 Prozentpunkte über Basiszins mit Verbraucher, 9 Prozentpunkte + 40 € Pauschale zwischen Unternehmen"
      ],
      [
       "Annahmeverzug (§§ 293 ff. BGB, § 373 HGB)",
       "Käufer nimmt ordnungsgemäß angebotene Ware nicht an",
       "Ware einlagern, Klage auf Abnahme, nach Androhung Selbsthilfeverkauf; Verkäufer haftet nur noch für Vorsatz und grobe Fahrlässigkeit"
      ]
     ]
    },
    "merksatz": "Erst **Nacherfüllung**, dann Rücktritt, Minderung oder Schadensersatz.",
    "tipp": "Operator „Erläutern“: Nenne die Störung, prüfe ihre Voraussetzungen am Fall und leite daraus die Rechte ab. Beim Verzug immer die Mahnung prüfen.",
    "achtung": "Beim Verbrauchsgüterkauf wird 1 Jahr lang vermutet, dass der Mangel schon bei Übergabe da war (§ 477 BGB). Das ist die Beweislastumkehr, nicht die Gewährleistungsfrist, die beträgt 2 Jahre.",
    "ergaenzt": true
   },
   {
    "id": "lf01-k11",
    "titel": "Verjährung und gerichtliches Mahnverfahren",
    "erklaert": "Nach Ablauf der Verjährung darf der Schuldner die Leistung verweigern (Einrede, § 214 BGB). Die Forderung erlischt aber nicht. Wer trotzdem zahlt, kann das Geld nicht zurückverlangen. Die regelmäßige Frist beträgt 3 Jahre und beginnt am Ende des Jahres, in dem der Anspruch entstanden ist und der Gläubiger davon weiß (§§ 195, 199 BGB). Hemmung hält die Uhr an, zum Beispiel durch Klage, Mahnbescheid oder Verhandlungen (§§ 203, 204 BGB). Neubeginn setzt die Uhr auf null, zum Beispiel durch ein Anerkenntnis des Schuldners wie eine Abschlagszahlung (§ 212 BGB). Das gerichtliche Mahnverfahren ist der schnelle Weg zu einem Vollstreckungstitel: Antrag auf Mahnbescheid, dann Vollstreckungsbescheid, dann Zwangsvollstreckung.",
    "beispiel": "Ein Handwerker stellt am 10.05.2023 eine Rechnung über 1.200 €, fällig sofort. Die Verjährung beginnt am 31.12.2023 um 24 Uhr und endet am 31.12.2026. Zahlt der Kunde am 15.03.2025 eine Rate von 200 €, beginnt die Verjährung neu: Ende jetzt am 15.03.2028. Ein Mahnbescheid hemmt dagegen nur, solange das Verfahren läuft (plus 6 Monate).",
    "tabelle": {
     "kopf": [
      "Anspruch",
      "Frist",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "regelmäßige Verjährung (z. B. Kaufpreis, Darlehensrückzahlung)",
       "3 Jahre ab Jahresende",
       "§§ 195, 199 BGB"
      ],
      [
       "Mängelansprüche bei beweglichen Sachen",
       "2 Jahre ab Ablieferung",
       "§ 438 BGB"
      ],
      [
       "Mängelansprüche bei Bauwerken",
       "5 Jahre",
       "§ 438 BGB"
      ],
      [
       "Rechte an Grundstücken",
       "10 Jahre",
       "§ 196 BGB"
      ],
      [
       "rechtskräftig festgestellte Ansprüche, Vollstreckungsbescheid",
       "30 Jahre",
       "§ 197 BGB"
      ],
      [
       "Mahnverfahren: Widerspruch gegen Mahnbescheid",
       "2 Wochen, dann streitiges Verfahren",
       "§ 692 ZPO"
      ],
      [
       "Mahnverfahren: Einspruch gegen Vollstreckungsbescheid",
       "2 Wochen, sonst vollstreckbarer Titel",
       "§§ 700, 339 ZPO"
      ]
     ]
    },
    "merksatz": "**Hemmung** hält die Uhr an, **Neubeginn** stellt sie auf null.",
    "tipp": "Operator „Ermitteln“ beim Verjährungsende: Entstehung, Jahresende, plus Frist, dann Hemmung oder Neubeginn prüfen. Datum am Ende ausschreiben (31.12., 24 Uhr).",
    "achtung": "Die regelmäßige Verjährung beginnt nicht am Tag der Rechnung, sondern erst am Jahresende. Die 2-Jahres-Frist für Mängel beginnt dagegen taggenau mit der Ablieferung.",
    "ergaenzt": true
   },
   {
    "id": "lf01-k12",
    "titel": "Arbeitszeugnis und besondere Schutzgesetze",
    "erklaert": "Jeder Arbeitnehmer hat beim Ausscheiden Anspruch auf ein schriftliches Zeugnis (§ 109 GewO), Auszubildende nach § 16 BBiG. Das einfache Zeugnis nennt Art und Dauer der Tätigkeit. Das qualifizierte Zeugnis bewertet zusätzlich Leistung und Verhalten, aber nur auf Wunsch. Es muss wahr und wohlwollend sein, deshalb hat sich eine Zeugnissprache entwickelt. Besondere Gruppen schützt das Gesetz extra: Schwangere und Mütter (Mutterschutzgesetz), Eltern in Elternzeit (BEEG), schwerbehinderte Menschen (SGB IX) und Jugendliche (JArbSchG). Gemeinsam ist ihnen ein besonderer Kündigungsschutz.",
    "beispiel": "Eine Kollegin ist schwanger, Geburtstermin 20.06. Die Schutzfrist beginnt 6 Wochen vorher am 09.05. und endet 8 Wochen nach der Geburt. Vom Beginn der Schwangerschaft bis 4 Monate nach der Entbindung darf ihr nicht gekündigt werden. Will sie danach Elternzeit bis zum 2. Geburtstag des Kindes nehmen, muss sie das spätestens 7 Wochen vor Beginn schriftlich verlangen.",
    "tabelle": {
     "kopf": [
      "Regel",
      "Inhalt",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "„stets zu unserer vollsten Zufriedenheit“",
       "sehr gut",
       "Zeugnissprache"
      ],
      [
       "„stets zu unserer vollen Zufriedenheit“",
       "gut",
       "Zeugnissprache"
      ],
      [
       "„zu unserer vollen Zufriedenheit“",
       "befriedigend",
       "Zeugnissprache"
      ],
      [
       "„zu unserer Zufriedenheit“",
       "ausreichend",
       "Zeugnissprache"
      ],
      [
       "Mutterschutzfristen",
       "6 Wochen vor, 8 Wochen nach der Geburt (12 bei Früh- und Mehrlingsgeburt)",
       "§ 3 MuSchG"
      ],
      [
       "Kündigungsverbot Mutterschutz",
       "Schwangerschaft bis 4 Monate nach Entbindung",
       "§ 17 MuSchG"
      ],
      [
       "Elternzeit",
       "bis 3 Jahre je Kind; Anmeldung 7 Wochen vorher (bis 3. Geburtstag); Kündigungsschutz ab Verlangen, frühestens 8 Wochen vor Beginn",
       "§§ 15, 16, 18 BEEG"
      ],
      [
       "Schwerbehinderte (Grad der Behinderung ab 50)",
       "5 Arbeitstage Zusatzurlaub; Kündigung nur mit Zustimmung des Integrationsamts",
       "§§ 208, 168 SGB IX"
      ]
     ]
    },
    "merksatz": "Zeugnis: **wahr und wohlwollend**, qualifiziert nur auf Wunsch.",
    "tipp": "Operator „Unterscheiden“ beim Zeugnis: Merkmal Inhalt nennen, dann einfach (Art, Dauer) und qualifiziert (zusätzlich Leistung, Verhalten) gegenüberstellen.",
    "achtung": "Der besondere Kündigungsschutz verbietet die Kündigung durch den Arbeitgeber. Die Arbeitnehmerin selbst darf weiter kündigen.",
    "ergaenzt": true
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf01-k1",
     "vorne": "Wie lang ist die Probezeit in der Ausbildung?",
     "hinten": "Mindestens 1, höchstens 4 Monate (§ 20 BBiG)."
    },
    {
     "thema": "lf01-k1",
     "vorne": "Wann endet die Ausbildung bei bestandener Prüfung vor Vertragsende?",
     "hinten": "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss (§ 21 Abs. 2 BBiG)."
    },
    {
     "thema": "lf01-k2",
     "vorne": "Gesetzliche Grundkündigungsfrist im Arbeitsverhältnis?",
     "hinten": "4 Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB)."
    },
    {
     "thema": "lf01-k2",
     "vorne": "Ab wann gilt das Kündigungsschutzgesetz?",
     "hinten": "Mehr als 10 Arbeitnehmer im Betrieb und mehr als 6 Monate Betriebszugehörigkeit."
    },
    {
     "thema": "lf01-k3",
     "vorne": "Wie heißt die Arbeitnehmervertretung in einer Sparkasse?",
     "hinten": "Personalrat (Personalvertretungsrecht des Landes), nicht Betriebsrat."
    },
    {
     "thema": "lf01-k4",
     "vorne": "Was bedeutet Friedenspflicht?",
     "hinten": "Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über die geregelten Punkte verboten."
    },
    {
     "thema": "lf01-k5",
     "vorne": "Welchen SV-Zweig zahlt der Arbeitgeber allein?",
     "hinten": "Die gesetzliche Unfallversicherung (Berufsgenossenschaft oder Unfallkasse)."
    },
    {
     "thema": "lf01-k5",
     "vorne": "Pflegeversicherung in Sachsen 2026: Anteile?",
     "hinten": "Gesamt 3,6 %; Arbeitnehmer 2,3 %, Arbeitgeber 1,3 %; kinderlos ab 23 zusätzlich 0,6 % für den Arbeitnehmer."
    },
    {
     "thema": "lf01-k6",
     "vorne": "Wie hoch ist die gesetzliche Einlagensicherung?",
     "hinten": "100.000 € je Kunde und Bank (EinSiG)."
    },
    {
     "thema": "lf01-k7",
     "vorne": "Welche Abteilung des Handelsregisters für eine GmbH?",
     "hinten": "Abteilung B (Kapitalgesellschaften)."
    },
    {
     "thema": "lf01-k8",
     "vorne": "Darf ein Prokurist ein Grundstück der Firma verkaufen?",
     "hinten": "Nur mit besonderer Befugnis (§ 49 Abs. 2 HGB)."
    },
    {
     "thema": "lf01-k9",
     "vorne": "Nichtig oder anfechtbar: Kaufvertrag eines 6-Jährigen?",
     "hinten": "Nichtig, ein Kind unter 7 ist geschäftsunfähig (§§ 104, 105 BGB)."
    },
    {
     "thema": "lf01-k9",
     "vorne": "Anfechtungsfrist bei arglistiger Täuschung?",
     "hinten": "1 Jahr ab Entdeckung der Täuschung (§ 124 BGB)."
    },
    {
     "thema": "lf01-k9",
     "vorne": "Welche Form braucht ein Grundstückskaufvertrag?",
     "hinten": "Notarielle Beurkundung (§ 311b BGB)."
    },
    {
     "thema": "lf01-k10",
     "vorne": "Erstes Recht des Käufers bei einem Sachmangel?",
     "hinten": "Nacherfüllung: Nachbesserung oder Neulieferung nach Wahl des Käufers (§ 439 BGB)."
    },
    {
     "thema": "lf01-k10",
     "vorne": "Wann kommt ein Schuldner ohne Mahnung in Verzug?",
     "hinten": "Bei kalendermäßig bestimmtem Termin, bei ernsthafter Verweigerung, bei Geldschulden 30 Tage nach Fälligkeit und Rechnung (§ 286 BGB)."
    },
    {
     "thema": "lf01-k10",
     "vorne": "Verzugszinssatz zwischen Unternehmen?",
     "hinten": "9 Prozentpunkte über dem Basiszinssatz plus 40 € Pauschale (§ 288 BGB)."
    },
    {
     "thema": "lf01-k11",
     "vorne": "Regelmäßige Verjährungsfrist und Beginn?",
     "hinten": "3 Jahre, Beginn am Ende des Jahres der Entstehung und Kenntnis (§§ 195, 199 BGB)."
    },
    {
     "thema": "lf01-k11",
     "vorne": "Unterschied Hemmung und Neubeginn?",
     "hinten": "Hemmung: Zeit läuft nicht weiter. Neubeginn: Frist startet von vorn, z. B. nach Abschlagszahlung."
    },
    {
     "thema": "lf01-k12",
     "vorne": "Was enthält ein qualifiziertes Arbeitszeugnis?",
     "hinten": "Art und Dauer der Tätigkeit sowie Leistung und Verhalten."
    },
    {
     "thema": "lf01-k12",
     "vorne": "Mutterschutzfristen?",
     "hinten": "6 Wochen vor und 8 Wochen nach der Geburt (§ 3 MuSchG)."
    }
   ],
   "mc": [
    {
     "thema": "lf01-k1",
     "operator": "Beurteilen",
     "frage": "Nach 6 Monaten Ausbildung kündigt der Betrieb einer Auszubildenden ordentlich mit 4 Wochen Frist. Wie ist das zu beurteilen?",
     "optionen": [
      "Wirksam, weil die Frist eingehalten ist",
      "Unwirksam, weil der Ausbildende nach der Probezeit nur aus wichtigem Grund fristlos kündigen kann",
      "Wirksam, wenn der Betriebsrat zustimmt",
      "Unwirksam, weil die Frist 3 Monate beträgt"
     ],
     "richtig": 1,
     "erklaerung": "§ 22 Abs. 2 BBiG: Nach der Probezeit kann der Ausbildende nur fristlos aus wichtigem Grund kündigen; die 4-Wochen-Kündigung steht nur dem Azubi bei Berufsaufgabe zu."
    },
    {
     "thema": "lf01-k2",
     "operator": "Ermitteln",
     "frage": "Ein Mitarbeiter ist 5 Jahre im Betrieb. Die Kündigung des Arbeitgebers geht am 20.04. zu. Wann endet das Arbeitsverhältnis (gesetzliche Frist)?",
     "optionen": [
      "31.05.",
      "15.06.",
      "30.06.",
      "31.07."
     ],
     "richtig": 2,
     "erklaerung": "Ab 5 Jahren: 2 Monate zum Monatsende. 20.04. plus 2 Monate = 20.06., nächstes Monatsende 30.06."
    },
    {
     "thema": "lf01-k3",
     "operator": "Zuordnen",
     "frage": "Bei welcher Maßnahme hat der Betriebsrat ein echtes Mitbestimmungsrecht?",
     "optionen": [
      "Kündigung eines Mitarbeiters",
      "Einstellung einer Kundenberaterin",
      "Festlegung des Urlaubsplans",
      "Personalplanung für das nächste Jahr"
     ],
     "richtig": 2,
     "erklaerung": "Soziale Angelegenheiten nach § 87 BetrVG, z. B. Urlaubsplan, unterliegen der echten Mitbestimmung. Kündigung = Anhörung, Einstellung = Zustimmungsverweigerung, Planung = Information."
    },
    {
     "thema": "lf01-k5",
     "operator": "Zuordnen",
     "frage": "Welche Beitragsbemessungsgrenze gilt 2026 in der Rentenversicherung je Monat?",
     "optionen": [
      "5.512,50 €",
      "5.812,50 €",
      "8.050 €",
      "8.450 €"
     ],
     "richtig": 3,
     "erklaerung": "RV und AV 2026: 8.450 € im Monat (101.400 € im Jahr), bundesweit einheitlich. 5.812,50 € gilt für KV und PV."
    },
    {
     "thema": "lf01-k7",
     "operator": "Zuordnen",
     "frage": "Welcher Gesellschafter haftet nur bis zur Höhe seiner Einlage?",
     "optionen": [
      "Komplementär einer KG",
      "Kommanditist einer KG",
      "Gesellschafter einer OHG",
      "Einzelkaufmann"
     ],
     "richtig": 1,
     "erklaerung": "Der Kommanditist haftet beschränkt bis zur Höhe seiner (eingetragenen) Einlage."
    },
    {
     "thema": "lf01-k8",
     "operator": "Beurteilen",
     "frage": "Eine Prokuristin will die Bilanz der Firma unterschreiben. Wie ist das zu beurteilen?",
     "optionen": [
      "Zulässig, Prokura umfasst alle Geschäfte",
      "Zulässig mit Gesamtprokura",
      "Unzulässig, die Bilanz unterschreibt nur der Kaufmann selbst",
      "Zulässig, wenn im Handelsregister eingetragen"
     ],
     "richtig": 2,
     "erklaerung": "Bilanz und Steuererklärung sind höchstpersönliche Pflichten des Kaufmanns (§ 245 HGB)."
    },
    {
     "thema": "lf01-k9",
     "operator": "Beurteilen",
     "frage": "Ein Privatkunde erklärt eine Bürgschaft nur mündlich am Schalter. Wie ist die Bürgschaft zu beurteilen?",
     "optionen": [
      "Wirksam, weil Verträge formfrei sind",
      "Nichtig, weil die Bürgschaft eines Nichtkaufmanns Schriftform braucht",
      "Anfechtbar wegen Irrtums",
      "Schwebend unwirksam bis zur Genehmigung der Eltern"
     ],
     "richtig": 1,
     "erklaerung": "§ 766 BGB verlangt die schriftliche Bürgschaftserklärung, ohne Form ist sie nach § 125 BGB nichtig. Nur für Kaufleute gilt die Ausnahme nach § 350 HGB."
    },
    {
     "thema": "lf01-k9",
     "operator": "Zuordnen",
     "frage": "Ein Kunde kauft Aktien in der Hoffnung auf steigende Kurse. Die Kurse fallen. Was liegt vor?",
     "optionen": [
      "Inhaltsirrtum, anfechtbar",
      "Erklärungsirrtum, anfechtbar",
      "Motivirrtum, nicht anfechtbar",
      "Sittenwidrigkeit, nichtig"
     ],
     "richtig": 2,
     "erklaerung": "Eine enttäuschte Erwartung ist ein Irrtum im Beweggrund (Motiv). Er berechtigt nicht zur Anfechtung."
    },
    {
     "thema": "lf01-k10",
     "operator": "Beurteilen",
     "frage": "Ein Kunde reklamiert einen defekten Laptop und verlangt sofort sein Geld zurück. Wie ist das zu beurteilen?",
     "optionen": [
      "Berechtigt, Rücktritt ist immer sofort möglich",
      "Nicht berechtigt, zuerst hat der Verkäufer das Recht auf Nacherfüllung",
      "Berechtigt, wenn der Kaufpreis über 500 € liegt",
      "Nicht berechtigt, weil Laptops vom Umtausch ausgeschlossen sind"
     ],
     "richtig": 1,
     "erklaerung": "Nach §§ 437, 439, 323 BGB hat die Nacherfüllung Vorrang. Erst wenn sie fehlschlägt oder verweigert wird, kann der Käufer zurücktreten."
    },
    {
     "thema": "lf01-k11",
     "operator": "Ermitteln",
     "frage": "Ein Darlehensrückzahlungsanspruch wird am 15.08.2024 fällig. Wann verjährt er ohne Hemmung oder Neubeginn?",
     "optionen": [
      "15.08.2027",
      "31.12.2027",
      "31.12.2026",
      "15.08.2034"
     ],
     "richtig": 1,
     "erklaerung": "Regelmäßige Verjährung 3 Jahre ab Ende 2024: Ablauf am 31.12.2027."
    },
    {
     "thema": "lf01-k11",
     "operator": "Nennen",
     "frage": "Was passiert, wenn der Schuldner gegen einen Mahnbescheid nichts unternimmt?",
     "optionen": [
      "Die Forderung erlischt",
      "Der Gläubiger kann einen Vollstreckungsbescheid beantragen",
      "Es folgt automatisch ein Gerichtsverfahren",
      "Die Verjährung beginnt neu"
     ],
     "richtig": 1,
     "erklaerung": "Ohne Widerspruch binnen 2 Wochen kann der Gläubiger den Vollstreckungsbescheid beantragen. Er ist ein Titel für die Zwangsvollstreckung."
    },
    {
     "thema": "lf01-k12",
     "operator": "Zuordnen",
     "frage": "Welche Note bedeutet „Sie erledigte ihre Aufgaben stets zu unserer vollen Zufriedenheit“?",
     "optionen": [
      "sehr gut",
      "gut",
      "befriedigend",
      "ausreichend"
     ],
     "richtig": 1,
     "erklaerung": "„stets zur vollsten“ = sehr gut, „stets zur vollen“ = gut, „zur vollen“ = befriedigend, „zur“ = ausreichend."
    }
   ],
   "rechnen": [
    {
     "thema": "lf01-k5",
     "operator": "Ermitteln",
     "frage": "Azubi in Sachsen, 21 Jahre, 1.150 € brutto, Zusatzbeitrag der Kasse 2,9 %. Ermitteln Sie die Summe der Arbeitnehmeranteile zur Sozialversicherung 2026 (RV 9,3 %, AV 1,3 %, KV 8,75 %, PV 2,3 %).",
     "ergebnis": 248.98,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Satz gesamt 9,3 + 1,3 + 8,75 + 2,3 = 21,65 %. 1.150 · 21,65 % = 248,975 €. Einzeln gerundet: 106,95 + 14,95 + 100,63 + 26,45 = 248,98 €."
    },
    {
     "thema": "lf01-k5",
     "operator": "Ermitteln",
     "frage": "Eine Mitarbeiterin verdient 9.000 € brutto im Monat. Wie hoch ist ihr Arbeitnehmeranteil zur Rentenversicherung 2026 (9,3 %, BBG 8.450 €)?",
     "ergebnis": 785.85,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Beitrag nur bis zur BBG: 8.450 · 9,3 % = 785,85 €."
    },
    {
     "thema": "lf01-k10",
     "operator": "Ermitteln",
     "frage": "Ein Verbraucher zahlt eine Rechnung über 2.400 € 45 Tage zu spät. Basiszinssatz angenommen 1,27 %. Ermitteln Sie die Verzugszinsen (taggenau, Jahr mit 365 Tagen).",
     "ergebnis": 18.55,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Verzugszins mit Verbraucher: 1,27 % + 5 Prozentpunkte = 6,27 % (§ 288 Abs. 1 BGB). 2.400 · 6,27 % · 45 : 365 = 18,55 €."
    }
   ],
   "frei": [
    {
     "thema": "lf01-k6",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Sparkasse und Genossenschaftsbank nach Rechtsform, Träger bzw. Eigentümer und Geschäftsziel.",
     "loesung": "Sparkasse: Anstalt des öffentlichen Rechts, Träger ist eine Kommune oder ein Zweckverband, Ziel ist der öffentliche Auftrag (Versorgung der Region mit Finanzdienstleistungen, Regionalprinzip), nicht Gewinnmaximierung. Genossenschaftsbank: eingetragene Genossenschaft (eG), Eigentümer sind die Mitglieder, Ziel ist die Förderung der Mitglieder."
    },
    {
     "thema": "lf01-k4",
     "operator": "Erläutern",
     "frage": "Erläutern Sie den Ablauf eines Arbeitskampfes bis zum neuen Tarifvertrag.",
     "loesung": "Nach Ablauf des Tarifvertrags und der Friedenspflicht verhandeln Gewerkschaft und Arbeitgeber. Scheitern die Verhandlungen, kann eine Schlichtung folgen. Scheitert auch sie, stimmen die Mitglieder in einer Urabstimmung über einen Streik ab (meist mind. 75 %). Es folgt Streik, der Arbeitgeber kann mit Aussperrung reagieren. Nach einer Einigung stimmen die Mitglieder erneut ab (meist mind. 25 %), dann gilt der neue Tarifvertrag."
    },
    {
     "thema": "lf01-k10",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Verpflichtungsgeschäft und Erfüllungsgeschäft am Beispiel eines Autokaufs.",
     "loesung": "Verpflichtungsgeschäft: Der Kaufvertrag (§ 433 BGB) begründet nur Pflichten: Der Verkäufer muss das Auto übergeben und übereignen, der Käufer muss zahlen und abnehmen. Erfüllungsgeschäft: Die Pflichten werden erfüllt. Eigentum am Auto geht durch Einigung und Übergabe über (§ 929 BGB), das Eigentum am Geld ebenso. Beide Geschäfte sind rechtlich getrennt (Abstraktionsprinzip)."
    },
    {
     "thema": "lf01-k11",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, wie sich eine Abschlagszahlung des Schuldners auf die Verjährung auswirkt.",
     "loesung": "Eine Abschlagszahlung ist ein Anerkenntnis des Schuldners (§ 212 Abs. 1 Nr. 1 BGB). Dadurch beginnt die Verjährung neu, und zwar ab dem Tag der Zahlung, nicht erst am Jahresende. Die volle Frist läuft also noch einmal."
    }
   ]
  }
 },
 {
  "nr": 2,
  "titel": "Konten für Privatkunden führen und den Zahlungsverkehr abwickeln",
  "std": 80,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen.",
  "kapitel": [
   {
    "id": "lf02-k1",
    "titel": "Geschäftsfähigkeit bei der Kontoeröffnung",
    "ergaenzt": true,
    "erklaert": "Bevor die Sparkasse ein Konto eröffnet, prüft sie, ob der Kunde wirksam Verträge schließen kann. Das hängt vom Alter ab. Das BGB unterscheidet drei Stufen: geschäftsunfähig, beschränkt geschäftsfähig und voll geschäftsfähig.",
    "beispiel": "Lena ist 15 und möchte ein Girokonto eröffnen. Sie ist beschränkt geschäftsfähig (§ 106 BGB). Der Kontovertrag braucht deshalb die Zustimmung beider Eltern als gesetzliche Vertreter. Ihr Taschengeld von 40 € im Monat darf sie nach § 110 BGB selbst ausgeben, ein Dispositionskredit ist für sie aber nicht möglich.",
    "tabelle": {
     "kopf": [
      "Alter",
      "Stufe",
      "Rechtsgrundlage",
      "Folge"
     ],
     "zeilen": [
      [
       "unter 7 Jahre",
       "geschäftsunfähig",
       "§ 104 BGB",
       "Willenserklärung nichtig (§ 105 BGB)"
      ],
      [
       "7 bis unter 18",
       "beschränkt geschäftsfähig",
       "§ 106 BGB",
       "Zustimmung der gesetzlichen Vertreter nötig (§ 107 BGB)"
      ],
      [
       "ab 18 Jahre",
       "voll geschäftsfähig",
       "§ 2 BGB",
       "Verträge voll wirksam"
      ]
     ]
    },
    "merksatz": "Unter 7 nichtig, 7 bis 17 nur mit Zustimmung, ab 18 voll wirksam.",
    "tipp": "Operator „Begründen“: Nenne immer die Stufe UND den Paragrafen, dann die Folge für das Konto.",
    "achtung": "Der Taschengeldparagraf (§ 110 BGB) gilt nur für Geschäfte, die mit eigenen Mitteln sofort bewirkt werden. Einen Kredit deckt er nie ab."
   },
   {
    "id": "lf02-k2",
    "titel": "Legitimationsprüfung und Identifizierung",
    "ergaenzt": true,
    "erklaert": "Vor jeder Kontoeröffnung muss die Sparkasse wissen, wer der Kunde ist. Das verlangen zwei Gesetze: die Abgabenordnung (Kontenwahrheit, § 154 AO) und das Geldwäschegesetz (Identifizierung, §§ 10 bis 12 GwG). Geprüft wird mit einem gültigen amtlichen Ausweis mit Lichtbild, meist Personalausweis oder Reisepass. Außerdem wird gefragt, ob der Kunde auf eigene Rechnung handelt.",
    "beispiel": "Herr Becker eröffnet ein Girokonto. Die Beraterin prüft seinen Personalausweis und erfasst Name, Geburtsort, Geburtsdatum, Staatsangehörigkeit und Wohnanschrift. Sie nimmt die Steuer-Identifikationsnummer auf und kopiert den Ausweis. Die Unterlagen bewahrt die Sparkasse mindestens 5 Jahre nach Ende der Geschäftsbeziehung auf.",
    "tabelle": {
     "kopf": [
      "Pflicht",
      "Inhalt",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Kontenwahrheit",
       "Konto nur auf echten Namen, Identität prüfen und festhalten",
       "§ 154 AO"
      ],
      [
       "Identifizierung",
       "Name, Geburtsort, Geburtsdatum, Staatsangehörigkeit, Anschrift",
       "§ 11 Abs. 4 GwG"
      ],
      [
       "Prüfdokument",
       "gültiger amtlicher Ausweis mit Lichtbild",
       "§ 12 GwG"
      ],
      [
       "Wirtschaftlich Berechtigter",
       "abklären, ob jemand anderes hinter dem Kunden steht",
       "§ 10 Abs. 1 Nr. 2 GwG"
      ],
      [
       "Aufbewahrung",
       "mindestens 5 Jahre nach Ende der Geschäftsbeziehung",
       "§ 8 Abs. 4 GwG"
      ]
     ]
    },
    "merksatz": "Erst **ausweisen**, dann **eröffnen**: kein Konto ohne geprüfte Identität.",
    "tipp": "Operator „Nennen“: Bei der Frage nach den Identifizierungsdaten zählen genau fünf Angaben. Bei Geschäftskunden kommen Rechtsform, Registernummer und Vertreter dazu.",
    "achtung": "Ein abgelaufener Ausweis reicht nicht. Und: Die Steuer-ID wird nach § 154 Abs. 2a AO erfasst, gehört aber nicht zu den fünf GwG-Angaben."
   },
   {
    "id": "lf02-k3",
    "titel": "Kontoarten und Verfügungsberechtigung",
    "ergaenzt": true,
    "erklaert": "Ein Konto kann einer Person gehören (Einzelkonto) oder mehreren (Gemeinschaftskonto). Beim Oder-Konto darf jeder allein verfügen, beim Und-Konto nur alle gemeinsam. Mit einer Vollmacht darf ein Dritter verfügen, ohne Inhaber zu sein. Jeder Mensch mit rechtmäßigem Aufenthalt in der EU hat Anspruch auf ein Basiskonto. Das Pfändungsschutzkonto (P-Konto) schützt bei einer Pfändung einen monatlichen Grundfreibetrag.",
    "beispiel": "Ehepaar Krause führt ein Oder-Konto. Frau Krause hebt allein 300 € ab, das ist erlaubt. Ihr Sohn hat eine Kontovollmacht und darf Überweisungen machen. Er darf das Konto aber nicht auflösen, weil das Inhabern vorbehalten ist.",
    "tabelle": {
     "kopf": [
      "Art",
      "Wer verfügt?",
      "Hinweis"
     ],
     "zeilen": [
      [
       "Einzelkonto",
       "Inhaber allein",
       "Vollmacht an Dritte möglich"
      ],
      [
       "Oder-Konto",
       "jeder Inhaber allein",
       "jeder haftet für den ganzen Saldo (Gesamtschuldner)"
      ],
      [
       "Und-Konto",
       "nur alle gemeinsam",
       "z. B. Erbengemeinschaft"
      ],
      [
       "Basiskonto",
       "Inhaber",
       "Anspruch nach § 31 ZKG, Ablehnung nur aus gesetzlichen Gründen"
      ],
      [
       "P-Konto",
       "Inhaber",
       "Grundfreibetrag geschützt (§ 899 ZPO), wird jedes Jahr zum 1. Juli angepasst"
      ]
     ]
    },
    "merksatz": "**Oder** heißt allein, **Und** heißt gemeinsam.",
    "tipp": "Operator „Unterscheiden“: Nenne immer das Merkmal (Verfügung) und die Ausprägung bei beiden Kontoarten.",
    "achtung": "Den Grundfreibetrag des P-Kontos nicht auswendig aus alten Büchern lernen. Er ändert sich jedes Jahr zum 1. Juli (Pfändungsfreigrenzenbekanntmachung im Bundesgesetzblatt). Seit 01.07.2026 beträgt er 1.590 € im Monat (01.07.2025 bis 30.06.2026: 1.560 €). Er wird auf volle 10 € aufgerundet und ist deshalb etwas höher als die Pfändungsfreigrenze für Arbeitseinkommen (seit 01.07.2026 1.587,40 €). Stand 07/2026, Pfändungsfreigrenzenbekanntmachung 2026. Und: Seit 2021 regelt § 899 ZPO das P-Konto, nicht mehr § 850k ZPO."
   },
   {
    "id": "lf02-k4",
    "titel": "Überweisung und Echtzeitüberweisung",
    "ergaenzt": true,
    "erklaert": "Mit einer SEPA-Überweisung schickt der Kunde Geld in Euro an ein Konto im SEPA-Raum. Nötig sind Name des Empfängers, IBAN, Betrag und Verwendungszweck. Die Bank des Zahlers muss den Betrag spätestens am Ende des folgenden Geschäftstags beim Empfängerinstitut haben, beleghaft einen Tag später. Die Echtzeitüberweisung kommt in höchstens 10 Sekunden an.",
    "beispiel": "Frau Schulz überweist am Montag online 250 € an ihren Vermieter. Die Sparkasse muss das Geld bis Dienstag Geschäftsschluss bei der Bank des Vermieters haben. Gibt sie den Auftrag als Echtzeitüberweisung, ist das Geld nach Sekunden da. Vorher zeigt die Sparkasse ihr, ob Name und IBAN zusammenpassen.",
    "tabelle": {
     "kopf": [
      "Regel",
      "Inhalt",
      "Grundlage"
     ],
     "zeilen": [
      [
       "Ausführungsfrist online",
       "1 Geschäftstag",
       "§ 675s Abs. 1 BGB"
      ],
      [
       "Ausführungsfrist beleghaft",
       "2 Geschäftstage",
       "§ 675s Abs. 1 BGB"
      ],
      [
       "Echtzeitüberweisung",
       "höchstens 10 Sekunden, rund um die Uhr",
       "EU-Verordnung 2024/886"
      ],
      [
       "Senden in Echtzeit",
       "Pflicht für Banken im Euroraum seit 09.10.2025",
       "EU-Verordnung 2024/886"
      ],
      [
       "Entgelt Echtzeit",
       "nicht höher als für eine normale Überweisung",
       "EU-Verordnung 2024/886"
      ],
      [
       "Empfängerüberprüfung",
       "Abgleich Name und IBAN vor Freigabe, seit 09.10.2025",
       "EU-Verordnung 2024/886"
      ]
     ]
    },
    "merksatz": "Normale Überweisung **D+1**, Echtzeit **10 Sekunden**.",
    "tipp": "Operator „Erläutern“: Bei der Empfängerüberprüfung den Zweck nennen (Schutz vor Betrug und Tippfehlern) und die Folge, wenn der Kunde trotz Warnung freigibt (er trägt das Risiko).",
    "achtung": "Für die Ausführung zählt allein die IBAN. Stimmt der Name nicht, warnt die Bank. Gibt der Kunde trotzdem frei, haftet die Bank nicht für eine Fehlbuchung."
   },
   {
    "id": "lf02-k5",
    "titel": "SEPA-Lastschrift",
    "ergaenzt": true,
    "erklaert": "Bei der Lastschrift holt der Zahlungsempfänger (Gläubiger) das Geld vom Konto des Zahlers. Dafür braucht er ein Mandat. Es gibt die SEPA-Basislastschrift für alle Kunden und die SEPA-Firmenlastschrift nur zwischen Unternehmen. Bei der Basislastschrift kann der Zahler eine autorisierte Belastung ohne Begründung zurückgeben lassen.",
    "beispiel": "Das Fitnessstudio zieht am 03.03. den Beitrag von 39,90 € ein. Herr Wolf ist unzufrieden und verlangt am 20.04. die Erstattung. Das sind weniger als 8 Wochen, also bekommt er das Geld ohne Begründung zurück. Der Vertrag mit dem Studio bleibt davon unberührt.",
    "tabelle": {
     "kopf": [
      "Merkmal",
      "Basislastschrift",
      "Firmenlastschrift"
     ],
     "zeilen": [
      [
       "Zahler",
       "alle Kunden",
       "nur Nicht-Verbraucher"
      ],
      [
       "Erstattung autorisiert",
       "8 Wochen ohne Begründung (§ 675x BGB)",
       "ausgeschlossen"
      ],
      [
       "Erstattung ohne Mandat",
       "13 Monate (§ 676b BGB)",
       "13 Monate (§ 676b BGB)"
      ],
      [
       "Mandat",
       "liegt beim Gläubiger",
       "auch der Zahlerbank vorlegen"
      ],
      [
       "Kennzeichen",
       "Gläubiger-ID und Mandatsreferenz",
       "Gläubiger-ID und Mandatsreferenz"
      ]
     ]
    },
    "merksatz": "Basislastschrift: **8 Wochen** ohne Grund, **13 Monate** ohne Mandat.",
    "tipp": "Operator „Beurteilen“: Prüfe zuerst, ob ein Mandat vorlag, dann die Frist ab Belastungstag, dann die Lastschriftart.",
    "achtung": "Die 8 Wochen zählen ab dem Tag der Belastung, nicht ab dem Fälligkeitstag aus der Vorabinformation."
   },
   {
    "id": "lf02-k6",
    "titel": "Kartenzahlung und Haftung bei Verlust",
    "ergaenzt": true,
    "erklaert": "Mit der girocard (Debitkarte) wird das Girokonto sofort belastet. Bei der Kreditkarte sammelt die Bank die Umsätze und rechnet meist einmal im Monat ab. Geht eine Karte verloren, muss der Kunde sie sofort sperren lassen (Sperrnotruf 116 116). Für Schäden vor der Sperre haftet er höchstens mit 50 €, außer er war grob fahrlässig.",
    "beispiel": "Frau Neumann verliert ihre girocard. Bevor sie sperrt, hebt ein Fremder 400 € ab. Die PIN war nicht notiert. Sie haftet mit höchstens 50 €, die Sparkasse trägt 350 €. Hätte die PIN auf der Karte gestanden (grob fahrlässig), haftet sie voll mit 400 €.",
    "tabelle": {
     "kopf": [
      "Fall",
      "Haftung Kunde",
      "Grundlage"
     ],
     "zeilen": [
      [
       "vor Sperranzeige, leichte Fahrlässigkeit",
       "höchstens 50 €",
       "§ 675v Abs. 1 BGB"
      ],
      [
       "Vorsatz oder grobe Fahrlässigkeit",
       "voller Schaden",
       "§ 675v Abs. 3 BGB"
      ],
      [
       "Bank verlangt keine starke Kundenauthentifizierung",
       "keine Haftung, außer Betrug",
       "§ 675v Abs. 4 BGB"
      ],
      [
       "nach Sperranzeige",
       "keine Haftung, außer Betrug",
       "§ 675v Abs. 5 BGB"
      ]
     ]
    },
    "merksatz": "Sofort sperren, sonst bis **50 €**; PIN notiert heißt **voll** haften.",
    "tipp": "Operator „Ermitteln“ bei Haftungsfällen: Zuerst den Schaden vor und nach der Sperre trennen, dann die Fahrlässigkeit beurteilen.",
    "achtung": "Die 50 € sind eine Obergrenze, kein Festbetrag. Ist der Schaden 30 €, haftet der Kunde mit 30 €."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf02-k1",
     "vorne": "Ab welchem Alter ist man beschränkt geschäftsfähig?",
     "hinten": "Ab 7 Jahren bis zur Vollendung des 18. Lebensjahres (§ 106 BGB)."
    },
    {
     "thema": "lf02-k1",
     "vorne": "Was regelt § 110 BGB?",
     "hinten": "Den Taschengeldparagrafen: Verträge Minderjähriger sind wirksam, wenn sie mit Mitteln bewirkt werden, die ihnen zur freien Verfügung überlassen wurden."
    },
    {
     "thema": "lf02-k1",
     "vorne": "Folge einer Willenserklärung eines Geschäftsunfähigen?",
     "hinten": "Sie ist nichtig (§ 105 BGB)."
    },
    {
     "thema": "lf02-k2",
     "vorne": "Welche fünf Angaben erfasst die Bank bei der Identifizierung einer natürlichen Person?",
     "hinten": "Name, Geburtsort, Geburtsdatum, Staatsangehörigkeit, Wohnanschrift (§ 11 Abs. 4 GwG)."
    },
    {
     "thema": "lf02-k2",
     "vorne": "Wie lange müssen Identifizierungsunterlagen aufbewahrt werden?",
     "hinten": "Mindestens 5 Jahre nach Ende der Geschäftsbeziehung (§ 8 Abs. 4 GwG)."
    },
    {
     "thema": "lf02-k3",
     "vorne": "Oder-Konto oder Und-Konto: Wo darf jeder Inhaber allein verfügen?",
     "hinten": "Beim Oder-Konto."
    },
    {
     "thema": "lf02-k3",
     "vorne": "Wer hat Anspruch auf ein Basiskonto?",
     "hinten": "Jeder Verbraucher mit rechtmäßigem Aufenthalt in der EU, auch ohne festen Wohnsitz (§ 31 ZKG)."
    },
    {
     "thema": "lf02-k4",
     "vorne": "Wie schnell muss eine Echtzeitüberweisung ankommen?",
     "hinten": "In höchstens 10 Sekunden."
    },
    {
     "thema": "lf02-k4",
     "vorne": "Ausführungsfrist einer Online-SEPA-Überweisung?",
     "hinten": "Spätestens Ende des folgenden Geschäftstags beim Empfängerinstitut (§ 675s BGB)."
    },
    {
     "thema": "lf02-k5",
     "vorne": "Erstattungsfrist bei einer autorisierten SEPA-Basislastschrift?",
     "hinten": "8 Wochen ab Belastung, ohne Begründung (§ 675x BGB)."
    },
    {
     "thema": "lf02-k5",
     "vorne": "Was braucht der Gläubiger für eine SEPA-Lastschrift?",
     "hinten": "Ein Mandat des Zahlers, eine Gläubiger-ID und eine Mandatsreferenz."
    },
    {
     "thema": "lf02-k6",
     "vorne": "Höchsthaftung des Kunden bei Kartenverlust vor der Sperre (leicht fahrlässig)?",
     "hinten": "50 € (§ 675v Abs. 1 BGB)."
    },
    {
     "thema": "lf02-k6",
     "vorne": "Sperrnotruf für Karten?",
     "hinten": "116 116."
    }
   ],
   "mc": [
    {
     "thema": "lf02-k1",
     "operator": "Zuordnen",
     "frage": "Tim ist 6 Jahre alt. Ordnen Sie seine Geschäftsfähigkeit zu.",
     "optionen": [
      "voll geschäftsfähig",
      "beschränkt geschäftsfähig",
      "geschäftsunfähig",
      "teilgeschäftsfähig nach § 110 BGB"
     ],
     "richtig": 2,
     "erklaerung": "Unter 7 Jahren ist man geschäftsunfähig (§ 104 Nr. 1 BGB)."
    },
    {
     "thema": "lf02-k1",
     "operator": "Beurteilen",
     "frage": "Die 16-jährige Mia möchte einen Dispositionskredit. Wie ist das zu beurteilen?",
     "optionen": [
      "Zulässig, wenn sie ein Ausbildungsgehalt bekommt",
      "Zulässig über den Taschengeldparagrafen",
      "Nicht ohne Weiteres möglich: Kreditverträge Minderjähriger brauchen Zustimmung der Eltern und Genehmigung des Familiengerichts",
      "Zulässig, wenn ein Elternteil zustimmt"
     ],
     "richtig": 2,
     "erklaerung": "Kreditaufnahme durch Minderjährige erfordert neben der Zustimmung der gesetzlichen Vertreter die Genehmigung des Familiengerichts (§ 1643 i. V. m. § 1854 Nr. 5 BGB, bis Ende 2022 § 1822 Nr. 8 BGB)."
    },
    {
     "thema": "lf02-k3",
     "operator": "Zuordnen",
     "frage": "Drei Erben wollen über das Konto des Verstorbenen nur gemeinsam verfügen. Welche Kontoart passt?",
     "optionen": [
      "Oder-Konto",
      "Und-Konto",
      "Einzelkonto mit Vollmacht",
      "Basiskonto"
     ],
     "richtig": 1,
     "erklaerung": "Beim Und-Konto verfügen alle Inhaber nur gemeinsam."
    },
    {
     "thema": "lf02-k5",
     "operator": "Beurteilen",
     "frage": "Eine Basislastschrift wurde vor 10 Wochen belastet, ein Mandat lag vor. Der Kunde will das Geld zurück. Wie ist das zu beurteilen?",
     "optionen": [
      "Erstattung ohne Begründung möglich",
      "Keine Erstattung über die Bank, die 8-Wochen-Frist ist abgelaufen",
      "Erstattung binnen 13 Monaten immer möglich",
      "Erstattung nur bei Firmenlastschrift"
     ],
     "richtig": 1,
     "erklaerung": "Bei autorisierter Lastschrift gilt die 8-Wochen-Frist. Die 13 Monate gelten nur ohne Mandat. Der Kunde muss sich an den Gläubiger wenden."
    },
    {
     "thema": "lf02-k6",
     "operator": "Ermitteln",
     "frage": "Karte verloren, vor der Sperre 30 € Schaden, Kunde leicht fahrlässig. Wie hoch ist seine Haftung?",
     "optionen": [
      "0 €",
      "30 €",
      "50 €",
      "150 €"
     ],
     "richtig": 1,
     "erklaerung": "Die Haftung ist auf 50 € begrenzt, aber nie höher als der Schaden."
    },
    {
     "thema": "lf02-k4",
     "operator": "Nennen",
     "frage": "Was gilt seit 09.10.2025 für Echtzeitüberweisungen im Euroraum?",
     "optionen": [
      "Sie dürfen 1 % Entgelt kosten",
      "Banken müssen sie senden können, und das Entgelt darf nicht höher sein als für eine normale Überweisung",
      "Sie sind auf 1.000 € begrenzt",
      "Sie sind nur beleghaft möglich"
     ],
     "richtig": 1,
     "erklaerung": "EU-Verordnung 2024/886: Sendepflicht und Preisgleichheit."
    }
   ],
   "rechnen": [
    {
     "thema": "lf02-k3",
     "operator": "Ermitteln",
     "frage": "Ein Kunde nutzt seinen Dispositionskredit 12 Tage lang mit 2.000,00 € zu 11,5 % p. a. Ermitteln Sie die Zinsen (360 Zinstage).",
     "ergebnis": 7.67,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Z = 2.000 · 11,5 · 12 / (100 · 360) = 276.000 / 36.000 = 7,67 €"
    },
    {
     "thema": "lf02-k6",
     "operator": "Ermitteln",
     "frage": "Karte gestohlen. Vor der Sperranzeige 420 € Schaden, nach der Sperre weitere 180 €. Der Kunde war leicht fahrlässig. Ermitteln Sie den Betrag, den er selbst trägt.",
     "ergebnis": 50,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Vor der Sperre: höchstens 50 €. Nach der Sperre: 0 €. Zusammen 50 €."
    }
   ],
   "frei": [
    {
     "thema": "lf02-k1",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Geschäftsunfähigkeit und beschränkte Geschäftsfähigkeit anhand von Alter und Rechtsfolge.",
     "loesung": "Geschäftsunfähig: unter 7 Jahren, Willenserklärungen sind nichtig (§§ 104, 105 BGB). Beschränkt geschäftsfähig: 7 bis unter 18 Jahre, Willenserklärungen brauchen die Zustimmung der gesetzlichen Vertreter, wenn sie nicht lediglich rechtlich vorteilhaft sind (§§ 106, 107 BGB)."
    },
    {
     "thema": "lf02-k2",
     "operator": "Begründen",
     "frage": "Begründen Sie, warum die Sparkasse ohne Ausweis kein Konto eröffnen darf.",
     "loesung": "Nach § 154 AO (Kontenwahrheit) und dem Geldwäschegesetz muss die Bank die Identität vor Begründung der Geschäftsbeziehung anhand eines gültigen amtlichen Lichtbildausweises prüfen und festhalten. Ohne diese Prüfung darf die Geschäftsbeziehung nicht begründet werden."
    },
    {
     "thema": "lf02-k5",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie SEPA-Basislastschrift und SEPA-Firmenlastschrift nach Zahlerkreis und Erstattungsrecht.",
     "loesung": "Basislastschrift: für alle Zahler, Erstattung autorisierter Lastschriften binnen 8 Wochen ohne Begründung. Firmenlastschrift: nur für Nicht-Verbraucher, keine Erstattung autorisierter Lastschriften; dafür muss das Mandat auch der Zahlerbank vorliegen."
    }
   ]
  }
 },
 {
  "nr": 3,
  "titel": "Konten für Geschäfts- und Firmenkunden führen und den Zahlungsverkehr abwickeln",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen.",
  "kapitel": [
   {
    "id": "lf03-k1",
    "titel": "Kontoeröffnung für Geschäftskunden",
    "ergaenzt": true,
    "erklaert": "Bei Firmenkunden prüft die Sparkasse nicht nur die Person am Schalter, sondern das Unternehmen selbst: Rechtsform, Name, Sitz, Registernummer und wer es vertreten darf. Grundlage ist meist ein aktueller Handelsregisterauszug. Außerdem muss sie den wirtschaftlich Berechtigten feststellen, also wer am Ende hinter dem Unternehmen steht.",
    "beispiel": "Die Müller Bau GmbH will ein Geschäftskonto. Geschäftsführerin Anna Müller legt einen aktuellen Handelsregisterauszug und ihren Ausweis vor. Ihr gehören 60 % der Anteile, Peter Lang 40 %. Beide halten mehr als 25 %, also sind beide wirtschaftlich Berechtigte. Die Sparkasse gleicht das mit dem Transparenzregister ab.",
    "tabelle": {
     "kopf": [
      "Prüfpunkt",
      "Unterlage",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Unternehmen",
       "Handelsregisterauszug: Firma, Rechtsform, Sitz, Registernummer",
       "§ 11 Abs. 4 Nr. 2 GwG"
      ],
      [
       "Vertreter",
       "Registerauszug und Ausweis der handelnden Person",
       "§ 12 GwG"
      ],
      [
       "Wirtschaftlich Berechtigter",
       "wer mehr als 25 % der Anteile oder Stimmrechte hält",
       "§ 3 Abs. 2 GwG"
      ],
      [
       "Abgleich",
       "Transparenzregister einsehen",
       "§ 11 Abs. 5 GwG"
      ]
     ]
    },
    "merksatz": "Bei Firmen gilt: **Register**, **Vertreter**, **wer steckt dahinter** (mehr als 25 %).",
    "tipp": "Operator „Ermitteln“: Bei Anteilsangaben jeden Gesellschafter gegen die Grenze von mehr als 25 % prüfen. Genau 25 % reicht nicht.",
    "achtung": "Findet sich kein Gesellschafter über 25 %, gilt ersatzweise der gesetzliche Vertreter (zum Beispiel der Geschäftsführer) als fiktiver wirtschaftlich Berechtigter."
   },
   {
    "id": "lf03-k2",
    "titel": "Wer darf für das Unternehmen verfügen?",
    "ergaenzt": true,
    "erklaert": "Wer über ein Firmenkonto verfügen darf, hängt von der Rechtsform ab. Bei Personengesellschaften handeln die Gesellschafter selbst. Bei Kapitalgesellschaften handeln Organe: der Geschäftsführer der GmbH, der Vorstand der AG. Die Sparkasse hält das in der Unterschriftenliste fest. Prokura und Handlungsvollmacht findest du in LF01.",
    "beispiel": "Die Schmidt & Weber KG hat einen Komplementär (Herr Schmidt) und eine Kommanditistin (Frau Weber). Herr Schmidt darf allein verfügen. Frau Weber darf es nicht, es sei denn, sie bekommt Prokura.",
    "tabelle": {
     "kopf": [
      "Rechtsform",
      "Vertretung",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "GbR",
       "alle Gesellschafter gemeinsam, wenn nichts anderes vereinbart",
       "§ 720 BGB"
      ],
      [
       "OHG",
       "jeder Gesellschafter allein",
       "§ 124 HGB"
      ],
      [
       "KG",
       "Komplementär allein, Kommanditist nicht",
       "§§ 124, 170 HGB"
      ],
      [
       "GmbH",
       "Geschäftsführer",
       "§ 35 GmbHG"
      ],
      [
       "AG",
       "Vorstand",
       "§ 78 AktG"
      ],
      [
       "eG",
       "Vorstand",
       "§ 24 GenG"
      ]
     ]
    },
    "merksatz": "Kommanditist **zahlt ein**, vertritt aber **nicht**.",
    "tipp": "Operator „Zuordnen“: Erst die Rechtsform bestimmen, dann das vertretende Organ. Personengesellschaft heißt Gesellschafter, Kapitalgesellschaft heißt Organ.",
    "achtung": "Seit 01.01.2024 (MoPeG) gilt das neue Recht der Personengesellschaften. In älteren Büchern stehen andere Paragrafen (zum Beispiel § 714 BGB für die GbR, § 125 HGB für die OHG)."
   },
   {
    "id": "lf03-k3",
    "titel": "Auslandszahlungsverkehr",
    "ergaenzt": true,
    "erklaert": "Zahlungen in Euro innerhalb des SEPA-Raums laufen als SEPA-Überweisung. Zahlungen in andere Währungen oder in Länder außerhalb von SEPA laufen als Auslandsüberweisung, meist über SWIFT. Der Kunde wählt dabei, wer die Entgelte trägt. Größere Zahlungen von und an Ausländer muss das Unternehmen der Bundesbank melden.",
    "beispiel": "Die Müller Bau GmbH bezahlt einen Lieferanten in den USA mit 20.000 USD. Sie wählt die Entgeltoption SHA: Sie trägt die Kosten ihrer Sparkasse, der Lieferant die Kosten seiner Bank. Weil der Betrag über 12.500 € liegt, meldet die GmbH die Zahlung an die Bundesbank.",
    "tabelle": {
     "kopf": [
      "Option",
      "Wer trägt die Entgelte?",
      "Hinweis"
     ],
     "zeilen": [
      [
       "SHA (shared)",
       "jeder die seiner Bank",
       "im EWR bei EWR-Währung Pflicht (§ 675q Abs. 3 BGB)"
      ],
      [
       "OUR",
       "alles der Auftraggeber",
       "nur außerhalb dieser Pflicht"
      ],
      [
       "BEN (beneficiary)",
       "alles der Empfänger",
       "nur außerhalb dieser Pflicht"
      ],
      [
       "Meldepflicht",
       "Zahlungen über 12.500 € oder Gegenwert",
       "§ 67 AWV, Meldung an die Bundesbank"
      ]
     ]
    },
    "merksatz": "**SHA** ist im EWR der Standard: jeder zahlt seine Bank.",
    "tipp": "Operator „Erläutern“: Bei der Entgeltoption immer sagen, was beim Empfänger ankommt. Bei OUR der volle Betrag, bei BEN der Betrag minus aller Entgelte.",
    "achtung": "Meldepflichtig ist der Kunde, nicht die Sparkasse. Die Grenze von 12.500 € gilt je Zahlung."
   },
   {
    "id": "lf03-k4",
    "titel": "Devisenkurse: Geld und Brief",
    "ergaenzt": true,
    "erklaert": "Devisen sind Guthaben in fremder Währung. Der Kurs wird als Mengennotierung angegeben: 1 Euro kostet so viele Einheiten der fremden Währung. Es gibt zwei Kurse. Zum Geldkurs verkauft die Bank Devisen an den Kunden, zum Briefkurs kauft sie Devisen vom Kunden an. Die Bank nimmt immer den Kurs, der für sie günstiger ist.",
    "beispiel": "EUR/USD Geld 1,0850, Brief 1,0910. Ein Kunde braucht 10.000 USD. Die Bank verkauft Devisen, also Geldkurs: 10.000 : 1,0850 = 9.216,59 €. Ein anderer Kunde bekommt 10.000 USD gutgeschrieben. Die Bank kauft an, also Briefkurs: 10.000 : 1,0910 = 9.165,90 €.",
    "tabelle": {
     "kopf": [
      "Geschäft",
      "Kurs",
      "Rechnung"
     ],
     "zeilen": [
      [
       "Bank verkauft Devisen (Kunde zahlt ins Ausland)",
       "Geldkurs",
       "Fremdwährung : Geldkurs = Euro-Belastung"
      ],
      [
       "Bank kauft Devisen (Kunde erhält aus dem Ausland)",
       "Briefkurs",
       "Fremdwährung : Briefkurs = Euro-Gutschrift"
      ]
     ]
    },
    "merksatz": "Mengennotierung: Bank **verkauft** zum **Geld**, **kauft** zum **Brief**.",
    "tipp": "Operator „Ermitteln“: Prüfe dein Ergebnis mit der Faustregel: Der Kunde zahlt immer etwas mehr Euro und bekommt immer etwas weniger Euro.",
    "achtung": "Nicht malnehmen: In der Mengennotierung teilst du den Fremdwährungsbetrag durch den Kurs, um Euro zu erhalten."
   },
   {
    "id": "lf03-k5",
    "titel": "Dokumenteninkasso und Akkreditiv",
    "ergaenzt": true,
    "erklaert": "Im Außenhandel kennen sich Käufer und Verkäufer oft nicht. Banken helfen mit Dokumenten. Beim Dokumenteninkasso bekommt der Käufer die Warendokumente erst, wenn er zahlt (D/P) oder einen Wechsel akzeptiert (D/A). Beim Akkreditiv verspricht die Bank des Käufers selbst die Zahlung, wenn der Verkäufer die vereinbarten Dokumente vorlegt. Das Akkreditiv ist für den Verkäufer am sichersten.",
    "beispiel": "Ein sächsischer Maschinenbauer liefert nach Indien. Er vereinbart ein bestätigtes Akkreditiv. Legt er Rechnung, Konnossement und Versicherungsdokument fristgerecht vor, zahlt die Bank, auch wenn der Käufer inzwischen zahlungsunfähig ist.",
    "tabelle": {
     "kopf": [
      "Verfahren",
      "Zahlungssicherheit Verkäufer",
      "Regeln"
     ],
     "zeilen": [
      [
       "Vorauszahlung",
       "sehr hoch, aber für Käufer riskant",
       "Vertrag"
      ],
      [
       "Dokumente gegen Zahlung (D/P)",
       "mittel: Käufer kann Annahme verweigern",
       "ERI 522"
      ],
      [
       "Dokumente gegen Akzept (D/A)",
       "geringer: Zahlung erst bei Fälligkeit des Wechsels",
       "ERI 522"
      ],
      [
       "Akkreditiv",
       "hoch: Zahlungsversprechen der Bank",
       "ERA 600"
      ]
     ]
    },
    "merksatz": "Beim Akkreditiv zählen **nur die Dokumente**, nicht die Ware.",
    "tipp": "Operator „Beurteilen“: Vergleiche die Verfahren immer aus Sicht beider Seiten: Sicherheit für den Verkäufer, Sicherheit für den Käufer, Kosten.",
    "achtung": "Banken prüfen beim Akkreditiv nur, ob die Dokumente formal stimmen. Ob die Ware in Ordnung ist, prüfen sie nicht."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf03-k1",
     "vorne": "Ab welchem Anteil ist jemand wirtschaftlich Berechtigter einer GmbH?",
     "hinten": "Bei mehr als 25 % der Kapitalanteile oder Stimmrechte (§ 3 Abs. 2 GwG)."
    },
    {
     "thema": "lf03-k1",
     "vorne": "Welche Unterlage zeigt Rechtsform, Sitz und Vertreter einer GmbH?",
     "hinten": "Der aktuelle Handelsregisterauszug."
    },
    {
     "thema": "lf03-k2",
     "vorne": "Wer vertritt eine GmbH?",
     "hinten": "Der Geschäftsführer (§ 35 GmbHG)."
    },
    {
     "thema": "lf03-k2",
     "vorne": "Darf ein Kommanditist die KG vertreten?",
     "hinten": "Nein (§ 170 HGB), nur mit Prokura oder Vollmacht."
    },
    {
     "thema": "lf03-k3",
     "vorne": "Was bedeutet die Entgeltoption OUR?",
     "hinten": "Der Auftraggeber trägt alle Entgelte, beim Empfänger kommt der volle Betrag an."
    },
    {
     "thema": "lf03-k3",
     "vorne": "Ab welchem Betrag ist eine Auslandszahlung meldepflichtig?",
     "hinten": "Über 12.500 € oder Gegenwert (§ 67 AWV)."
    },
    {
     "thema": "lf03-k4",
     "vorne": "Zu welchem Kurs verkauft die Bank Devisen (Mengennotierung)?",
     "hinten": "Zum Geldkurs."
    },
    {
     "thema": "lf03-k5",
     "vorne": "Welche Regeln gelten für Akkreditive?",
     "hinten": "Die ERA 600 der Internationalen Handelskammer."
    },
    {
     "thema": "lf03-k5",
     "vorne": "Was heißt D/P?",
     "hinten": "Documents against Payment: Dokumente gegen Zahlung."
    }
   ],
   "mc": [
    {
     "thema": "lf03-k1",
     "operator": "Ermitteln",
     "frage": "Eine GmbH hat vier Gesellschafter: A 40 %, B 25 %, C 20 %, D 15 %. Wer ist wirtschaftlich Berechtigter?",
     "optionen": [
      "A und B",
      "nur A",
      "alle vier",
      "niemand, daher der Geschäftsführer"
     ],
     "richtig": 1,
     "erklaerung": "Nur A liegt über 25 %. Genau 25 % reicht nicht."
    },
    {
     "thema": "lf03-k3",
     "operator": "Zuordnen",
     "frage": "Eine Euro-Überweisung von Dresden nach Wien. Welche Entgeltoption ist vorgeschrieben?",
     "optionen": [
      "OUR",
      "BEN",
      "SHA",
      "frei wählbar"
     ],
     "richtig": 2,
     "erklaerung": "Innerhalb des EWR in EWR-Währung gilt SHA (§ 675q Abs. 3 BGB)."
    },
    {
     "thema": "lf03-k5",
     "operator": "Beurteilen",
     "frage": "Welches Verfahren bietet dem Exporteur die höchste Sicherheit, wenn keine Vorauszahlung möglich ist?",
     "optionen": [
      "Dokumente gegen Akzept",
      "Dokumente gegen Zahlung",
      "bestätigtes Akkreditiv",
      "offene Rechnung"
     ],
     "richtig": 2,
     "erklaerung": "Beim bestätigten Akkreditiv verspricht zusätzlich eine Bank im Land des Exporteurs die Zahlung."
    }
   ],
   "rechnen": [
    {
     "thema": "lf03-k4",
     "operator": "Ermitteln",
     "frage": "EUR/USD Geld 1,0850, Brief 1,0910. Ein Kunde überweist 10.000 USD in die USA. Ermitteln Sie die Belastung in Euro.",
     "ergebnis": 9216.59,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Bank verkauft Devisen, also Geldkurs: 10.000 : 1,0850 = 9.216,59 €"
    },
    {
     "thema": "lf03-k4",
     "operator": "Ermitteln",
     "frage": "EUR/USD Geld 1,0850, Brief 1,0910. Ein Kunde erhält 10.000 USD aus den USA. Ermitteln Sie die Gutschrift in Euro.",
     "ergebnis": 9165.9,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Bank kauft Devisen an, also Briefkurs: 10.000 : 1,0910 = 9.165,90 €"
    }
   ],
   "frei": [
    {
     "thema": "lf03-k2",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie die Vertretung einer OHG und einer GmbH.",
     "loesung": "OHG: Jeder Gesellschafter vertritt die Gesellschaft allein (§ 124 HGB), es gilt Selbstorganschaft. GmbH: Die Gesellschaft wird durch ihr Organ, den Geschäftsführer, vertreten (§ 35 GmbHG); Gesellschafter als solche vertreten nicht (Fremdorganschaft möglich)."
    },
    {
     "thema": "lf03-k5",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, warum das Akkreditiv für den Exporteur sicherer ist als das Dokumenteninkasso.",
     "loesung": "Beim Inkasso hängt die Zahlung vom Käufer ab, er kann die Dokumente zurückweisen. Beim Akkreditiv gibt die Bank des Käufers ein eigenes, abstraktes Zahlungsversprechen. Legt der Exporteur fristgerecht ordnungsgemäße Dokumente vor, muss die Bank zahlen, unabhängig vom Käufer."
    }
   ]
  }
 },
 {
  "nr": 4,
  "titel": "Kunden über Anlagen auf Konten und staatlich gefördertes Sparen beraten",
  "std": 40,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: Sparer-Pauschbetrag 1.000/2.000 € (seit 2023), Sparzulage-Grenzen 40.000/80.000 € (seit 2024), BBG RV 2026 8.450 € im Monat, Riester-Zulagen nach bisherigem Recht (Reform ab 01.01.2027 beschlossen), Basisrente-Höchstbetrag 2026 30.826 €. Basiszins Vorabpauschale 2026 3,20 % (BMF), aktueller Rentenwert ab 01.07.2026 42,52 € (DRV); nachgetragen am 11.11.2026.",
  "kapitel": [
   {
    "id": "lf04-k1",
    "titel": "Einlagen auf Konten",
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
    "id": "lf04-k2",
    "titel": "Besteuerung von Kapitalerträgen",
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
    "id": "lf04-k3",
    "titel": "Einlagensicherung",
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
    "id": "lf04-k4",
    "titel": "Staatlich gefördertes Sparen",
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
    "id": "lf04-k5",
    "titel": "Zinsrechnung bei Kontoanlagen",
    "ergaenzt": true,
    "erklaert": "Für Zinsen brauchst du vier Größen: Kapital (K), Zinssatz (p), Zeit (t) und die Zahl der Tage im Jahr. Bei der kaufmännischen Methode hat jeder Monat 30 und das Jahr 360 Tage. Bei der Euro-Methode zählst du die echten Tage, teilst aber durch 360. Bleiben Zinsen über mehrere Jahre stehen, werden sie mitverzinst: das ist der Zinseszins.",
    "beispiel": "Festgeld 5.000 € für 90 Tage zu 2,0 %: 5.000 · 2 · 90 / 36.000 = 25,00 €. Sparbrief 10.000 € für 3 Jahre zu 2,5 % mit Zinsansammlung: 10.000 · 1,025³ = 10.768,91 €.",
    "tabelle": {
     "kopf": [
      "Methode",
      "Tage je Monat",
      "Tage im Jahr",
      "Einsatz"
     ],
     "zeilen": [
      [
       "kaufmännisch (30/360)",
       "30",
       "360",
       "Schule, viele Prüfungsaufgaben"
      ],
      [
       "Euro-Methode (act/360)",
       "echte Tage",
       "360",
       "Geldmarkt, Festgeld"
      ],
      [
       "taggenau (act/act)",
       "echte Tage",
       "365 oder 366",
       "Anleihen, Stückzinsen"
      ],
      [
       "Zinseszins",
       "-",
       "-",
       "Kn = K0 · (1 + p/100)^n"
      ]
     ]
    },
    "merksatz": "Z = **K · p · t / (100 · 360)**",
    "tipp": "Operator „Ermitteln“: Schreibe immer zuerst die Formel, dann die eingesetzten Werte, dann das Ergebnis. Teilpunkte gibt es für den Weg.",
    "achtung": "Die Methode steht in der Aufgabe. Fehlt sie, rechne kaufmännisch und schreib dazu, welche Methode du genommen hast."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf04-k1",
     "vorne": "Welche Kündigungsfrist haben Spareinlagen mindestens?",
     "hinten": "3 Monate (§ 21 Abs. 4 RechKredV)."
    },
    {
     "thema": "lf04-k1",
     "vorne": "Wie lange laufen Termineinlagen mindestens?",
     "hinten": "30 Tage."
    },
    {
     "thema": "lf04-k2",
     "vorne": "Wie hoch ist der Sparer-Pauschbetrag?",
     "hinten": "1.000 € je Person, 2.000 € bei Zusammenveranlagung (seit 2023)."
    },
    {
     "thema": "lf04-k2",
     "vorne": "Wie hoch ist die Kirchensteuer auf Kapitalerträge in Sachsen?",
     "hinten": "9 % der Abgeltungsteuer."
    },
    {
     "thema": "lf04-k2",
     "vorne": "Formel Abgeltungsteuer mit Kirchensteuer?",
     "hinten": "Abgeltungsteuer = Ertrag : (4 + Kirchensteuersatz), z. B. Ertrag : 4,09."
    },
    {
     "thema": "lf04-k3",
     "vorne": "Bis zu welchem Betrag schützt die gesetzliche Einlagensicherung?",
     "hinten": "100.000 € je Kunde und Institut, Auszahlung binnen 7 Arbeitstagen."
    },
    {
     "thema": "lf04-k3",
     "vorne": "Was schützt die Institutssicherung der Sparkassen?",
     "hinten": "Das Institut selbst, damit es gar nicht zum Entschädigungsfall kommt."
    },
    {
     "thema": "lf04-k4",
     "vorne": "Sparzulage bei VL in Beteiligungen?",
     "hinten": "20 % auf höchstens 400 € im Jahr = 80 €."
    },
    {
     "thema": "lf04-k4",
     "vorne": "Sparzulage bei VL in Bausparen?",
     "hinten": "9 % auf höchstens 470 € im Jahr = 42,30 €."
    },
    {
     "thema": "lf04-k4",
     "vorne": "Einkommensgrenze für die Arbeitnehmer-Sparzulage seit 2024?",
     "hinten": "Zu versteuerndes Einkommen 40.000 € (Ledige), 80.000 € (Verheiratete)."
    },
    {
     "thema": "lf04-k4",
     "vorne": "Wohnungsbauprämie?",
     "hinten": "10 % auf höchstens 700 € bzw. 1.400 €, Einkommensgrenze 35.000 / 70.000 €."
    },
    {
     "thema": "lf04-k5",
     "vorne": "Formel für Zinsen (kaufmännisch)?",
     "hinten": "Z = K · p · t / (100 · 360), t in Tagen."
    },
    {
     "thema": "lf04-k5",
     "vorne": "Formel für den Endwert mit Zinseszins?",
     "hinten": "Kn = K0 · (1 + p/100)^n"
    }
   ],
   "mc": [
    {
     "thema": "lf04-k1",
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
     "thema": "lf04-k2",
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
     "thema": "lf04-k3",
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
     "thema": "lf04-k4",
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
    }
   ],
   "rechnen": [
    {
     "thema": "lf04-k1",
     "operator": "Ermitteln",
     "frage": "Festgeld 18.000 € für 120 Tage zu 2,4 % p. a., act/360. Ermitteln Sie die Zinsen.",
     "ergebnis": 144,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "18.000 · 2,4 · 120 : (100 · 360) = 144,00 €."
    },
    {
     "thema": "lf04-k2",
     "operator": "Ermitteln",
     "frage": "Verheiratetes Paar (Zusammenveranlagung), Kapitalerträge 3.100 €, gemeinsamer Freistellungsauftrag 2.000 €, keine Kirchensteuer. Ermitteln Sie die Gutschrift nach Steuern.",
     "ergebnis": 2809.88,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Steuerpflichtig 1.100 €. Abgeltungsteuer 275,00 €, Soli 5,5 % = 15,125 → 15,12 €. Gutschrift: 3.100 − 275 − 15,12 = 2.809,88 €."
    },
    {
     "thema": "lf04-k2",
     "operator": "Ermitteln",
     "frage": "Kapitalertrag nach Freistellungsauftrag 600 €, Kirchensteuer Sachsen 9 %. Ermitteln Sie die Abgeltungsteuer.",
     "ergebnis": 146.7,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "600 : (4 + 0,09) = 600 : 4,09 = 146,70 €."
    },
    {
     "thema": "lf04-k5",
     "operator": "Ermitteln",
     "frage": "Ein Kunde legt 5.000,00 € für 90 Tage zu 2,0 % p. a. fest an. Ermitteln Sie die Zinsen (kaufmännische Zinsrechnung, 360 Zinstage).",
     "ergebnis": 25,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Z = K · p · t / (100 · 360) = 5.000 · 2 · 90 / 36.000 = 25,00 €"
    },
    {
     "thema": "lf04-k5",
     "operator": "Ermitteln",
     "frage": "Ein Kunde legt 10.000,00 € für 3 Jahre zu 2,5 % p. a. an. Die Zinsen werden mitverzinst. Ermitteln Sie das Endkapital.",
     "ergebnis": 10768.91,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Kn = 10.000 · 1,025³ = 10.000 · 1,076890625 = 10.768,91 €"
    }
   ],
   "frei": [
    {
     "thema": "lf04-k3",
     "operator": "Erläutern",
     "frage": "Erläutern Sie einer Kundin, wie ihre Einlagen bei der Sparkasse geschützt sind.",
     "loesung": "Gesetzlich sind Einlagen bis 100.000 € je Kunde und Institut geschützt, Auszahlung binnen 7 Arbeitstagen. Zusätzlich gehört die Sparkasse zur Institutssicherung der Sparkassen-Finanzgruppe: Gerät eine Sparkasse in Schwierigkeiten, stützen die anderen Institute sie, sodass es gar nicht zum Ausfall kommt. Diese Sicherung ist amtlich als Einlagensicherungssystem anerkannt."
    }
   ]
  }
 },
 {
  "nr": 5,
  "titel": "Allgemein-Verbraucherdarlehensverträge abschließen",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen.",
  "kapitel": [
   {
    "id": "lf05-k1",
    "titel": "Der Allgemein-Verbraucherdarlehensvertrag",
    "ergaenzt": true,
    "erklaert": "Leiht eine Bank einem Verbraucher gegen Zins Geld, ist das ein Verbraucherdarlehen. Wird es nicht für eine Immobilie genutzt, heißt es Allgemein-Verbraucherdarlehen. Der Vertrag braucht Schriftform und viele Pflichtangaben. Der Kunde kann ihn 14 Tage lang ohne Grund widerrufen. Vorher muss die Bank seine Kreditwürdigkeit prüfen.",
    "beispiel": "Herr Lehmann nimmt am 02.03. einen Ratenkredit über 12.000 € für ein Auto auf. Er bekommt den Vertrag mit allen Pflichtangaben und der Widerrufsbelehrung. Er kann bis einschließlich 16.03. widerrufen. Der effektive Jahreszins steht im Vertrag, damit er Angebote vergleichen kann.",
    "tabelle": {
     "kopf": [
      "Regel",
      "Inhalt",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Form",
       "Schriftform",
       "§ 492 BGB"
      ],
      [
       "Pflichtangaben",
       "u. a. Nettodarlehensbetrag, Sollzins, effektiver Jahreszins, Gesamtbetrag, Raten",
       "Art. 247 EGBGB"
      ],
      [
       "Widerruf",
       "14 Tage ohne Begründung",
       "§§ 495, 355 BGB"
      ],
      [
       "Kreditwürdigkeitsprüfung",
       "vor Vertragsschluss Pflicht",
       "§ 505a BGB"
      ],
      [
       "Effektiver Jahreszins",
       "Gesamtkosten in % pro Jahr",
       "§ 16 PAngV"
      ],
      [
       "Dispo-Beratung",
       "bei Inanspruchnahme 6 Monate ununterbrochen und im Schnitt über 75 % des Rahmens",
       "§ 504a BGB"
      ]
     ]
    },
    "merksatz": "**Schriftlich**, **14 Tage Widerruf**, **vorher Bonität prüfen**.",
    "tipp": "Operator „Nennen“: Bei Pflichtangaben reichen in der Prüfung meist vier bis fünf wichtige: Nettodarlehensbetrag, Sollzins, effektiver Jahreszins, Gesamtbetrag, Laufzeit und Raten.",
    "achtung": "Die neue EU-Verbraucherkreditrichtlinie (2023/2225) gilt ab 20.11.2026 und kann einzelne Regeln ändern. Für deine Prüfung am 25.11. gilt der Stand, den die IHK für den Prüfungszeitraum festlegt. Frag im Unterricht nach. Außerdem: Die Paragrafen der PAngV wurden 2022 neu nummeriert, früher stand der Effektivzins in § 6."
   },
   {
    "id": "lf05-k2",
    "titel": "Kreditwürdigkeit und Haushaltsrechnung",
    "ergaenzt": true,
    "erklaert": "Die Sparkasse prüft, ob der Kunde den Kredit zurückzahlen kann und will. Dazu gehören persönliche Kreditwürdigkeit (Zuverlässigkeit, SCHUFA-Auskunft) und wirtschaftliche Kreditwürdigkeit (Einkommen und Ausgaben). In der Haushaltsrechnung zieht sie von den Nettoeinnahmen alle festen Ausgaben ab. Was übrig bleibt, ist der Betrag, der höchstens für eine neue Rate zur Verfügung steht.",
    "beispiel": "Frau Hoffmann verdient 2.800 € netto. Ausgaben: Miete warm 850 €, Lebenshaltung 900 €, Versicherungen 150 €, bestehende Leasingrate 200 €. Frei verfügbar: 2.800 − 2.100 = 700 €. Mit einer Reserve von 20 % (140 €) hält die Sparkasse eine neue Rate bis 560 € für tragbar.",
    "tabelle": {
     "kopf": [
      "Prüfung",
      "Fragen",
      "Unterlagen"
     ],
     "zeilen": [
      [
       "persönlich",
       "Ist der Kunde zuverlässig und geschäftsfähig?",
       "Ausweis, SCHUFA-Auskunft"
      ],
      [
       "wirtschaftlich",
       "Reicht das Einkommen für die Rate?",
       "Gehaltsnachweise, Kontoauszüge"
      ],
      [
       "Haushaltsrechnung",
       "Einnahmen minus Ausgaben",
       "Selbstauskunft"
      ]
     ]
    },
    "merksatz": "Rate **kleiner** als frei verfügbares Einkommen, mit **Puffer**.",
    "tipp": "Operator „Beurteilen“: Rechne das freie Einkommen aus, vergleiche es mit der Rate und gib ein klares Urteil mit Begründung.",
    "achtung": "Die Reserve (hier 20 %) ist eine Hausregel der Sparkasse, kein Gesetz. Nimm die Werte aus der Aufgabe."
   },
   {
    "id": "lf05-k3",
    "titel": "Ratenkredit berechnen",
    "ergaenzt": true,
    "erklaert": "Ein Ratenkredit wird meist in gleichen Monatsraten (Annuitäten) getilgt. Jede Rate enthält Zinsen und Tilgung. Am Anfang ist der Zinsanteil groß, später die Tilgung. Der Gesamtbetrag ist die Summe aller Raten. Gesamtbetrag minus Nettodarlehensbetrag ergibt die Zinskosten.",
    "beispiel": "Nettodarlehen 10.000 €, Sollzins 6 % p. a. (0,5 % pro Monat), 48 Monate. Monatsrate 234,85 €. Gesamtbetrag 48 · 234,85 = 11.272,80 €. Zinskosten 1.272,80 €. Im ersten Monat sind 50,00 € Zinsen drin (10.000 · 0,5 %), die Tilgung beträgt 184,85 €.",
    "tabelle": {
     "kopf": [
      "Größe",
      "Rechnung",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Zinsen 1. Monat",
       "Restschuld · Monatszins",
       "10.000 · 0,005 = 50,00 €"
      ],
      [
       "Tilgung 1. Monat",
       "Rate − Zinsen",
       "234,85 − 50,00 = 184,85 €"
      ],
      [
       "Restschuld nach 1 Monat",
       "Restschuld − Tilgung",
       "10.000 − 184,85 = 9.815,15 €"
      ],
      [
       "Gesamtbetrag",
       "Rate · Anzahl",
       "234,85 · 48 = 11.272,80 €"
      ],
      [
       "Zinskosten",
       "Gesamtbetrag − Nettodarlehen",
       "1.272,80 €"
      ]
     ]
    },
    "merksatz": "Rate = **Zins + Tilgung**; Zinsen nur auf die **Restschuld**.",
    "tipp": "Operator „Ermitteln“: Die Monatsrate wird in der Prüfung fast immer vorgegeben. Gefragt sind dann Zins- und Tilgungsanteile, Restschuld oder Gesamtkosten.",
    "achtung": "Nicht 6 % auf das ganze Darlehen über 4 Jahre rechnen (das wären 2.400 €). Weil die Restschuld sinkt, sind die echten Zinsen viel niedriger."
   },
   {
    "id": "lf05-k4",
    "titel": "Sicherheiten im Privatkundenkredit",
    "ergaenzt": true,
    "erklaert": "Reicht die Kreditwürdigkeit allein nicht, verlangt die Sparkasse Sicherheiten. Bei Privatkrediten häufig: die Bürgschaft eines Dritten, die Sicherungsübereignung des finanzierten Autos und die Abtretung von Lohn oder Gehalt. Die Bürgschaft ist eine persönliche Sicherheit, die Sicherungsübereignung eine Sachsicherheit.",
    "beispiel": "Lukas, 19, finanziert ein Auto für 15.000 €. Sein Vater übernimmt eine selbstschuldnerische Bürgschaft. Außerdem übereignet Lukas das Auto zur Sicherheit an die Sparkasse, fährt es aber weiter selbst. Die Zulassungsbescheinigung Teil II bleibt bis zur Rückzahlung bei der Sparkasse.",
    "tabelle": {
     "kopf": [
      "Sicherheit",
      "Wie?",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Bürgschaft",
       "Dritter haftet; Erklärung des Bürgen schriftlich",
       "§§ 765, 766 BGB"
      ],
      [
       "selbstschuldnerisch",
       "Einrede der Vorausklage ausgeschlossen",
       "§ 773 BGB"
      ],
      [
       "Sicherungsübereignung",
       "Bank wird Eigentümerin, Kunde behält Besitz",
       "§§ 929, 930 BGB"
      ],
      [
       "Abtretung",
       "Lohnanspruch geht an die Bank",
       "§ 398 BGB"
      ]
     ]
    },
    "merksatz": "Bürgschaft = **Person** haftet, Übereignung = **Sache** haftet.",
    "tipp": "Operator „Unterscheiden“: Personensicherheit gegen Sachsicherheit, und bei Bürgschaften Ausfallbürgschaft gegen selbstschuldnerische Bürgschaft.",
    "achtung": "Eine Bürgschaft per E-Mail ist unwirksam (§ 766 BGB, elektronische Form ausgeschlossen). Ein Kaufmann kann sich aber formfrei verbürgen (§ 350 HGB)."
   },
   {
    "id": "lf05-k5",
    "titel": "Zahlungsverzug, Kündigung und vorzeitige Rückzahlung",
    "ergaenzt": true,
    "erklaert": "Zahlt der Kunde nicht, darf die Sparkasse ein Ratendarlehen nicht sofort kündigen. Das Gesetz verlangt einen Mindestrückstand und eine Frist. Umgekehrt darf der Kunde jederzeit vorzeitig zurückzahlen. Dann kann die Sparkasse eine begrenzte Vorfälligkeitsentschädigung verlangen.",
    "beispiel": "Herr Kaiser hat ein Darlehen über 10.000 € mit 48 Monaten Laufzeit. Er ist mit zwei Raten von je 234,85 € im Rückstand, zusammen 469,70 €. Bei mehr als 3 Jahren Laufzeit sind 5 % nötig, also 500 €. Der Rückstand reicht noch nicht für eine Kündigung.",
    "tabelle": {
     "kopf": [
      "Regel",
      "Inhalt",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "Kündigung wegen Verzug",
       "mind. 2 aufeinanderfolgende Raten ganz oder teilweise offen",
       "§ 498 BGB"
      ],
      [
       "Mindestrückstand",
       "10 % des Nennbetrags (bis 3 Jahre Laufzeit), 5 % (über 3 Jahre)",
       "§ 498 BGB"
      ],
      [
       "Frist",
       "2 Wochen Zahlungsfrist mit Androhung der Gesamtfälligkeit",
       "§ 498 BGB"
      ],
      [
       "Verzugszinsen",
       "5 Prozentpunkte über dem Basiszinssatz",
       "§ 497 BGB, § 288 BGB"
      ],
      [
       "Vorzeitige Rückzahlung",
       "jederzeit möglich",
       "§ 500 Abs. 2 BGB"
      ],
      [
       "Vorfälligkeitsentschädigung",
       "höchstens 1 % (Restlaufzeit über 1 Jahr), sonst 0,5 %",
       "§ 502 BGB"
      ]
     ]
    },
    "merksatz": "Kündigung erst bei **2 Raten** + **10 % / 5 %** + **2 Wochen Frist**.",
    "tipp": "Operator „Beurteilen“: Prüfe die drei Bedingungen der Reihe nach und schreibe zu jeder ein Ja oder Nein mit Zahl.",
    "achtung": "Der Basiszinssatz ändert sich zum 1. Januar und 1. Juli. Den aktuellen Wert veröffentlicht die Deutsche Bundesbank. Die Vorfälligkeitsentschädigung darf außerdem nie höher sein als die Sollzinsen bis zum Laufzeitende."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf05-k1",
     "vorne": "Widerrufsfrist beim Verbraucherdarlehen?",
     "hinten": "14 Tage ohne Begründung (§§ 495, 355 BGB)."
    },
    {
     "thema": "lf05-k1",
     "vorne": "Welche Form braucht ein Verbraucherdarlehensvertrag?",
     "hinten": "Schriftform (§ 492 BGB)."
    },
    {
     "thema": "lf05-k1",
     "vorne": "Wo ist der effektive Jahreszins geregelt?",
     "hinten": "§ 16 PAngV (seit 2022, vorher § 6)."
    },
    {
     "thema": "lf05-k2",
     "vorne": "Was ergibt die Haushaltsrechnung?",
     "hinten": "Das frei verfügbare Einkommen: Nettoeinnahmen minus alle festen Ausgaben."
    },
    {
     "thema": "lf05-k3",
     "vorne": "Woraus besteht eine Annuitätenrate?",
     "hinten": "Aus Zins und Tilgung. Der Zinsanteil sinkt, der Tilgungsanteil steigt."
    },
    {
     "thema": "lf05-k4",
     "vorne": "Was bedeutet selbstschuldnerische Bürgschaft?",
     "hinten": "Der Bürge kann nicht verlangen, dass die Bank erst gegen den Schuldner vollstreckt (keine Einrede der Vorausklage, § 773 BGB)."
    },
    {
     "thema": "lf05-k4",
     "vorne": "Wer ist bei der Sicherungsübereignung Eigentümer, wer Besitzer?",
     "hinten": "Bank = Eigentümerin, Kunde = unmittelbarer Besitzer (Besitzkonstitut, § 930 BGB)."
    },
    {
     "thema": "lf05-k5",
     "vorne": "Höchste Vorfälligkeitsentschädigung bei Restlaufzeit über 1 Jahr?",
     "hinten": "1 % des vorzeitig zurückgezahlten Betrags (§ 502 BGB)."
    },
    {
     "thema": "lf05-k5",
     "vorne": "Verzugszinssatz beim Allgemein-Verbraucherdarlehen?",
     "hinten": "5 Prozentpunkte über dem Basiszinssatz (§ 497 BGB)."
    }
   ],
   "mc": [
    {
     "thema": "lf05-k1",
     "operator": "Ermitteln",
     "frage": "Vertrag mit allen Pflichtangaben am 02.03. unterschrieben. Bis wann kann widerrufen werden?",
     "optionen": [
      "09.03.",
      "16.03.",
      "02.04.",
      "gar nicht"
     ],
     "richtig": 1,
     "erklaerung": "Die 14-Tage-Frist beginnt mit Vertragsschluss und Pflichtangaben und endet am 16.03."
    },
    {
     "thema": "lf05-k4",
     "operator": "Zuordnen",
     "frage": "Die Bank wird Eigentümerin des Autos, der Kunde fährt es weiter. Welche Sicherheit ist das?",
     "optionen": [
      "Pfandrecht",
      "Sicherungsübereignung",
      "Bürgschaft",
      "Abtretung"
     ],
     "richtig": 1,
     "erklaerung": "Übereignung nach §§ 929, 930 BGB mit Besitzkonstitut."
    },
    {
     "thema": "lf05-k5",
     "operator": "Beurteilen",
     "frage": "Darlehen 6.000 €, Laufzeit 24 Monate, Rückstand 2 Raten zu je 270 €. Darf die Sparkasse nach Fristsetzung kündigen?",
     "optionen": [
      "Ja, 2 Raten reichen immer",
      "Nein, nötig wären mindestens 600 € (10 %)",
      "Ja, weil über 5 % offen sind",
      "Nein, man braucht 3 Raten"
     ],
     "richtig": 1,
     "erklaerung": "Laufzeit bis 3 Jahre: 10 % von 6.000 € = 600 €. Offen sind nur 540 €."
    }
   ],
   "rechnen": [
    {
     "thema": "lf05-k2",
     "operator": "Ermitteln",
     "frage": "Netto 2.800 €. Ausgaben: Miete 850 €, Lebenshaltung 900 €, Versicherungen 150 €, Leasingrate 200 €. Die Sparkasse lässt 20 % Reserve. Ermitteln Sie die höchste tragbare neue Monatsrate.",
     "ergebnis": 560,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Frei: 2.800 − 2.100 = 700 €. Reserve 20 %: 140 €. Tragbare Rate 700 − 140 = 560 €."
    },
    {
     "thema": "lf05-k3",
     "operator": "Ermitteln",
     "frage": "Darlehen 10.000 €, Monatsrate 234,85 €, 48 Raten. Ermitteln Sie die gesamten Zinskosten.",
     "ergebnis": 1272.8,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Gesamtbetrag 48 · 234,85 = 11.272,80 €. Zinskosten 11.272,80 − 10.000 = 1.272,80 €."
    },
    {
     "thema": "lf05-k3",
     "operator": "Ermitteln",
     "frage": "Darlehen 10.000 €, Sollzins 6 % p. a. (0,5 % pro Monat), Rate 234,85 €. Ermitteln Sie die Restschuld nach der ersten Rate.",
     "ergebnis": 9815.15,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Zinsen 10.000 · 0,005 = 50,00 €. Tilgung 234,85 − 50,00 = 184,85 €. Restschuld 10.000 − 184,85 = 9.815,15 €."
    },
    {
     "thema": "lf05-k5",
     "operator": "Ermitteln",
     "frage": "Ein Kunde zahlt 8.000 € vorzeitig zurück, die Restlaufzeit beträgt 20 Monate. Ermitteln Sie die höchstmögliche Vorfälligkeitsentschädigung (die Sollzinsen bis zum Ende liegen darüber).",
     "ergebnis": 80,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Restlaufzeit über 1 Jahr: höchstens 1 %. 8.000 · 1 % = 80,00 €."
    }
   ],
   "frei": [
    {
     "thema": "lf05-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie den Zweck des effektiven Jahreszinses.",
     "loesung": "Der effektive Jahreszins drückt alle Kosten des Kredits (Zinsen und weitere Kosten) als jährlichen Prozentsatz des Darlehens aus (§ 16 PAngV). So kann der Verbraucher Angebote mit unterschiedlichen Laufzeiten und Kosten vergleichen."
    },
    {
     "thema": "lf05-k5",
     "operator": "Begründen",
     "frage": "Begründen Sie, ob die Sparkasse ein Darlehen über 10.000 € (Laufzeit 48 Monate) bei einem Rückstand von zwei Raten über zusammen 469,70 € kündigen darf.",
     "loesung": "Nein. Nach § 498 BGB muss bei mehr als 3 Jahren Laufzeit der Rückstand mindestens 5 % des Nennbetrags betragen, also 500 €. Mit 469,70 € ist diese Grenze nicht erreicht. Zwei aufeinanderfolgende Raten sind zwar offen, aber alle Voraussetzungen müssen zusammen vorliegen."
    }
   ]
  }
 },
 {
  "nr": 6,
  "titel": "Marktmodelle anwenden",
  "std": 40,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: SV 2026, Mindestlohn 13,90 €, EZB-Sätze seit 16.09.2026 (2,65 / 2,90 / 2,50 %), Inflation Euroraum Okt. 2026 4,0 % vorläufig. EZB-Sitzung 29.10.2026: Sätze unverändert. Nächste EZB-Sitzung 17.12.2026. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Unlauterer Wettbewerb (UWG).",
  "kapitel": [
   {
    "id": "lf06-k1",
    "titel": "Bedürfnisse, Bedarf, Güter und ökonomisches Prinzip",
    "ergaenzt": true,
    "erklaert": "Ein Bedürfnis ist ein Mangelgefühl. Wird es mit Kaufkraft verbunden, ist es Bedarf. Tritt der Bedarf am Markt auf, ist es Nachfrage. Weil Güter knapp sind, muss man wirtschaften, also nach dem ökonomischen Prinzip handeln.",
    "beispiel": "Lisa wünscht sich ein Auto (Bedürfnis). Sie hat 8.000 € gespart (Bedarf). Sie fragt beim Händler und bei der Sparkasse nach einem Kredit (Nachfrage). Die Filiale hat 5.000 € Werbebudget und will damit möglichst viele Neukunden gewinnen: Maximalprinzip.",
    "tabelle": {
     "kopf": [
      "Begriff",
      "Bedeutung",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Existenz-, Kultur-, Luxusbedürfnis",
       "nach Dringlichkeit",
       "Essen, Kino, Sportwagen"
      ],
      [
       "Individual- und Kollektivbedürfnis",
       "einzeln oder gemeinsam befriedigt",
       "Kleidung, Straßen"
      ],
      [
       "Freie und knappe Güter",
       "ohne oder mit Preis",
       "Luft, Wasser aus der Leitung"
      ],
      [
       "Sachgüter, Dienstleistungen, Rechte",
       "Form des Gutes",
       "Laptop, Beratung, Lizenz"
      ],
      [
       "Konsum- und Investitionsgüter",
       "Verwendung",
       "Brot, Geldautomat"
      ],
      [
       "Substitutions- und Komplementärgüter",
       "ersetzen oder ergänzen sich",
       "Butter oder Margarine, Auto und Benzin"
      ],
      [
       "Maximalprinzip",
       "gegebene Mittel, größtes Ergebnis",
       "5.000 € Budget, möglichst viele Kunden"
      ],
      [
       "Minimalprinzip",
       "gegebenes Ziel, kleinste Mittel",
       "100 Neukunden mit möglichst wenig Budget"
      ]
     ]
    },
    "merksatz": "Bedürfnis plus Kaufkraft gleich Bedarf, Bedarf am Markt gleich Nachfrage.",
    "tipp": "Operator „Unterscheiden“: bei Maximal- und Minimalprinzip immer sagen, was fest ist und was variiert.",
    "achtung": "„Mit minimalem Einsatz maximalen Erfolg“ ist kein ökonomisches Prinzip, sondern ein Widerspruch."
   },
   {
    "id": "lf06-k2",
    "titel": "Produktionsfaktoren und Wirtschaftskreislauf",
    "ergaenzt": true,
    "erklaert": "Volkswirtschaftlich wird mit Arbeit, Boden und Kapital produziert, oft kommt Wissen dazu. Der Wirtschaftskreislauf zeigt, wie Güter und Geld zwischen Haushalten, Unternehmen, Staat, Banken und Ausland fließen. Güterstrom und Geldstrom laufen entgegengesetzt.",
    "beispiel": "Haushalte erhalten 2.000 Mrd. € Einkommen. Sie geben 1.800 Mrd. € für Konsum aus und sparen 200 Mrd. € bei den Banken. Die Banken geben die 200 Mrd. € als Kredite an Unternehmen für Investitionen weiter. Ohne Staat und Ausland gilt: Sparen gleich Investieren.",
    "tabelle": {
     "kopf": [
      "Sektor",
      "Gibt",
      "Bekommt"
     ],
     "zeilen": [
      [
       "Private Haushalte",
       "Arbeit, Konsumausgaben, Ersparnis",
       "Einkommen, Konsumgüter"
      ],
      [
       "Unternehmen",
       "Güter, Einkommen",
       "Konsumausgaben, Kredite"
      ],
      [
       "Staat",
       "Transfers, Subventionen, Gehälter",
       "Steuern, Abgaben"
      ],
      [
       "Banken (Vermögensänderung)",
       "Kredite",
       "Ersparnis"
      ],
      [
       "Ausland",
       "Importe",
       "Zahlungen für Exporte"
      ]
     ]
    },
    "merksatz": "Wo Güter hinfließen, fließt Geld zurück.",
    "tipp": "Operator „Erläutern“: Die Rolle der Banken ist die Umwandlung von Ersparnissen in Kredite (Losgrößen-, Fristen- und Risikotransformation).",
    "achtung": "Im einfachen Kreislauf gibt es nur Haushalte und Unternehmen, Sparen kommt dort nicht vor."
   },
   {
    "id": "lf06-k3",
    "titel": "Marktformen und vollkommener Markt",
    "ergaenzt": true,
    "erklaert": "Die Marktform hängt davon ab, wie viele Anbieter und Nachfrager es gibt. Wie stark der Preis wirkt, hängt davon ab, ob der Markt vollkommen ist. Bedingungen des vollkommenen Marktes: gleichartige (homogene) Güter, vollständige Markttransparenz, keine Präferenzen (sachlich, persönlich, räumlich, zeitlich), sofortige Reaktion aller Beteiligten.",
    "beispiel": "Der Markt für Girokonten hat viele Anbieter, aber Kunden haben Präferenzen (Filiale um die Ecke, vertraute Beraterin). Er ist also unvollkommen. Die Börse kommt einem vollkommenen Markt sehr nahe: gleiche Aktie, alle Kurse sichtbar, sofortige Reaktion.",
    "tabelle": {
     "kopf": [
      "Anbieter / Nachfrager",
      "viele",
      "wenige",
      "einer"
     ],
     "zeilen": [
      [
       "viele",
       "Polypol (vollständige Konkurrenz)",
       "Nachfrageoligopol",
       "Nachfragemonopol"
      ],
      [
       "wenige",
       "Angebotsoligopol",
       "zweiseitiges Oligopol",
       "beschränktes Nachfragemonopol"
      ],
      [
       "einer",
       "Angebotsmonopol",
       "beschränktes Angebotsmonopol",
       "zweiseitiges Monopol"
      ]
     ]
    },
    "merksatz": "Gleiches Gut, voller Überblick, keine Vorlieben, sofort reagieren: dann ist der Markt vollkommen.",
    "tipp": "Operator „Beurteilen“: für einen Bankmarkt jede der vier Bedingungen einzeln prüfen.",
    "achtung": "Ein Polypol kann trotzdem unvollkommen sein, die Zahl der Anbieter allein sagt nichts über die Vollkommenheit."
   },
   {
    "id": "lf06-k4",
    "titel": "Preisbildung im Polypol",
    "ergaenzt": true,
    "erklaert": "Die Nachfrage sinkt, wenn der Preis steigt. Das Angebot steigt, wenn der Preis steigt. Wo beide gleich sind, liegt der Gleichgewichtspreis. Dort wird die größte Menge umgesetzt, der Markt wird geräumt. Verschiebungen: Steigt das Einkommen, verschiebt sich die Nachfragekurve nach rechts, Preis und Menge steigen. Sinken die Kosten der Anbieter, verschiebt sich die Angebotskurve nach rechts, der Preis sinkt, die Menge steigt. Konsumentenrente: Käufer, die mehr gezahlt hätten, sparen. Produzentenrente: Anbieter, die billiger verkauft hätten, gewinnen.",
    "beispiel": "Bei 2,00 € wollen Käufer 600 Stück und Verkäufer bieten 600 Stück an. Umsatz: 2,00 € × 600 = 1.200 €. Bei 2,50 € gibt es 800 Angebot und 400 Nachfrage, also einen Angebotsüberhang von 400 Stück, der Preis sinkt.",
    "tabelle": {
     "kopf": [
      "Preis",
      "Nachfrage",
      "Angebot",
      "Umsetzbare Menge",
      "Lage"
     ],
     "zeilen": [
      [
       "1,00 €",
       "900",
       "300",
       "300",
       "Nachfrageüberhang 600"
      ],
      [
       "1,50 €",
       "700",
       "500",
       "500",
       "Nachfrageüberhang 200"
      ],
      [
       "2,00 €",
       "600",
       "600",
       "600",
       "Gleichgewicht"
      ],
      [
       "2,50 €",
       "400",
       "800",
       "400",
       "Angebotsüberhang 400"
      ],
      [
       "3,00 €",
       "200",
       "1.000",
       "200",
       "Angebotsüberhang 800"
      ]
     ]
    },
    "merksatz": "Zu teuer bleibt Ware liegen, zu billig wird sie knapp.",
    "tipp": "Operator „Ermitteln“: Gleichgewichtspreis, Menge und Umsatz aus einer Tabelle ablesen. Umsetzbar ist immer die kleinere der beiden Mengen.",
    "achtung": "Eine Preisänderung ist eine Bewegung auf der Kurve. Eine Verschiebung der Kurve kommt nur von anderen Einflüssen (Einkommen, Kosten, Mode)."
   },
   {
    "id": "lf06-k5",
    "titel": "Staatliche Eingriffe in die Preisbildung",
    "ergaenzt": true,
    "erklaert": "Der Staat setzt manchmal Preise fest, um Schwache zu schützen. Ein Höchstpreis liegt unter dem Gleichgewichtspreis, ein Mindestpreis darüber. Marktkonforme Eingriffe lassen den Preismechanismus wirken (Subvention, Steuer), marktkonträre nicht (Höchst- und Mindestpreis).",
    "beispiel": "Im Modell aus Kapitel 6.4 legt der Staat einen Höchstpreis von 1,50 € fest. Nachfrage 700, Angebot 500: Es fehlen 200 Stück, es entstehen Wartelisten oder Schwarzmärkte. Der Mindestlohn von 13,90 € (2026) ist ein Mindestpreis für Arbeit.",
    "tabelle": {
     "kopf": [
      "Eingriff",
      "Lage zum Gleichgewicht",
      "Folge",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Höchstpreis",
       "darunter",
       "Nachfrageüberhang",
       "Mietpreisbremse"
      ],
      [
       "Mindestpreis",
       "darüber",
       "Angebotsüberhang",
       "Mindestlohn"
      ],
      [
       "Subvention",
       "marktkonform",
       "Angebot steigt",
       "Förderung E-Mobilität"
      ],
      [
       "Steuer",
       "marktkonform",
       "Angebot sinkt",
       "Tabaksteuer"
      ]
     ]
    },
    "merksatz": "Höchstpreis unten, Mindestpreis oben.",
    "tipp": "Operator „Begründen“: Folge des Eingriffs mit der Überhangmenge belegen.",
    "achtung": "Ein Höchstpreis über dem Gleichgewicht und ein Mindestpreis darunter bewirken nichts."
   },
   {
    "id": "lf06-k6",
    "titel": "Preiselastizität der Nachfrage",
    "ergaenzt": true,
    "erklaert": "Die Elastizität misst, wie stark die Nachfrage auf eine Preisänderung reagiert: E = prozentuale Mengenänderung : prozentuale Preisänderung. Ist der Betrag kleiner als 1, reagiert die Nachfrage schwach (unelastisch). Ist er größer als 1, reagiert sie stark (elastisch).",
    "beispiel": "Eine Bank erhöht den Kontopreis von 10 € auf 11 € (+10 %). Die Zahl der Konten sinkt von 1.000 auf 950 (−5 %). E = −5 % : 10 % = −0,5, also unelastisch. Der Umsatz steigt von 10.000 € auf 11 € × 950 = 10.450 €.",
    "tabelle": {
     "kopf": [
      "Betrag von E",
      "Bezeichnung",
      "Preiserhöhung führt zu",
      "Beispiel"
     ],
     "zeilen": [
      [
       "kleiner 1",
       "unelastisch",
       "mehr Umsatz",
       "Strom, Medikamente"
      ],
      [
       "gleich 1",
       "proportional",
       "gleichem Umsatz",
       "(Grenzfall)"
      ],
      [
       "größer 1",
       "elastisch",
       "weniger Umsatz",
       "Reisen, Markenkleidung"
      ]
     ]
    },
    "merksatz": "Unelastisch heißt: Kunden bleiben, auch wenn es teurer wird.",
    "tipp": "Operator „Ermitteln“: erst beide Prozentänderungen ausrechnen, dann teilen, dann den Umsatz vorher und nachher vergleichen.",
    "achtung": "Prozente immer auf den Ausgangswert beziehen, nicht auf den neuen Wert."
   },
   {
    "id": "lf06-k7",
    "titel": "Kooperation, Konzentration und Kartellrecht",
    "ergaenzt": true,
    "erklaert": "Unternehmen arbeiten zusammen (Kooperation) oder schließen sich zusammen (Konzentration). Zu viel Marktmacht schadet dem Wettbewerb, deshalb wacht das Bundeskartellamt nach dem GWB darüber. Richtung: horizontal (gleiche Stufe), vertikal (vor- oder nachgelagerte Stufe), diagonal (fremde Branche). Marktbeherrschung wird ab 40 % Marktanteil vermutet (§ 18 GWB). Große Zusammenschlüsse muss das Bundeskartellamt vorher prüfen (Fusionskontrolle).",
    "beispiel": "Zwei Nachbarsparkassen fusionieren zu einer Sparkasse: Konzentration auf gleicher Stufe (horizontal), beide geben ihre rechtliche Selbstständigkeit auf. Mehrere Banken bilden für eine Anleihe ein Emissionskonsortium: Kooperation auf Zeit, alle bleiben selbstständig.",
    "tabelle": {
     "kopf": [
      "Form",
      "Rechtlich selbstständig",
      "Wirtschaftlich selbstständig",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Kartell",
       "ja",
       "eingeschränkt (Absprache)",
       "Preisabsprache, grundsätzlich verboten (§ 1 GWB)"
      ],
      [
       "Konsortium",
       "ja",
       "ja, außer für das Projekt",
       "Kredit- oder Emissionskonsortium"
      ],
      [
       "Joint Venture",
       "ja (neue gemeinsame Firma)",
       "teilweise",
       "gemeinsame Tochter zweier Firmen"
      ],
      [
       "Konzern",
       "ja",
       "nein, einheitliche Leitung",
       "Mutter mit Tochtergesellschaften"
      ],
      [
       "Fusion",
       "nein",
       "nein",
       "Sparkassenfusion"
      ]
     ]
    },
    "merksatz": "Kooperation heißt Hand geben, Konzentration heißt Hand nehmen.",
    "tipp": "Operator „Zuordnen“: zu jedem Fall Form und Richtung nennen.",
    "achtung": "Im Konzern bleiben die Firmen rechtlich selbstständig, bei der Fusion nicht."
   },
   {
    "id": "lf06-k8",
    "titel": "Wirtschaftsordnungen und soziale Marktwirtschaft",
    "ergaenzt": true,
    "erklaert": "Die Wirtschaftsordnung legt fest, wer plant, wem das Eigentum gehört und wie Preise entstehen. Deutschland hat die soziale Marktwirtschaft: Markt und Wettbewerb, aber der Staat sorgt für sozialen Ausgleich. Grundlagen im Grundgesetz: Art. 2 (Vertragsfreiheit), Art. 9 (Koalitionsfreiheit), Art. 12 (Berufsfreiheit), Art. 14 (Eigentum), Art. 20 (Sozialstaat). Prägend: Ludwig Erhard und Alfred Müller-Armack.",
    "beispiel": "Eine Bank darf ihre Zinsen frei festlegen (Markt). Gleichzeitig schreibt der Staat ein Basiskonto für jeden vor und schützt Einlagen bis 100.000 € (sozialer Ausgleich).",
    "tabelle": {
     "kopf": [
      "Merkmal",
      "Freie Marktwirtschaft",
      "Zentralverwaltungswirtschaft",
      "Soziale Marktwirtschaft"
     ],
     "zeilen": [
      [
       "Planung",
       "jeder Einzelne",
       "Staat",
       "Einzelne, Staat setzt Rahmen"
      ],
      [
       "Eigentum",
       "privat",
       "staatlich",
       "privat, „verpflichtet“ (Art. 14 GG)"
      ],
      [
       "Preisbildung",
       "Markt",
       "Staat",
       "Markt, Eingriffe möglich"
      ],
      [
       "Rolle des Staates",
       "Nachtwächter",
       "lenkt alles",
       "Wettbewerb schützen, sozial absichern"
      ]
     ]
    },
    "merksatz": "So viel Markt wie möglich, so viel Staat wie nötig.",
    "tipp": "Operator „Nennen“: drei staatliche Eingriffe der sozialen Marktwirtschaft mit Bankbezug (Einlagensicherung, Basiskonto, Verbraucherschutz beim Kredit).",
    "achtung": "Das Grundgesetz schreibt keine bestimmte Wirtschaftsordnung vor, es setzt nur den Rahmen."
   },
   {
    "id": "lf06-k9",
    "titel": "Unlauterer Wettbewerb (UWG)",
    "erklaert": "Das Kartellrecht (GWB) schützt, dass es Wettbewerb überhaupt gibt. Das Gesetz gegen den unlauteren Wettbewerb (UWG) schützt, dass fair gekämpft wird. Es schützt Mitbewerber, Verbraucher und die Allgemeinheit. Verboten sind unter anderem irreführende Werbung, aggressive Verkaufsmethoden und unzumutbare Belästigung. Vergleichende Werbung ist erlaubt, wenn sie sachlich und nachprüfbar ist. Wer gegen das UWG verstößt, kann von Mitbewerbern, Verbänden und Kammern abgemahnt werden und muss Beseitigung und Unterlassung, bei Verschulden auch Schadensersatz leisten.",
    "beispiel": "Ein Kundenberater ruft Privatkunden aus dem Telefonbuch an, um Bausparverträge zu verkaufen. Die Angerufenen haben nie eingewilligt. Das ist eine unzumutbare Belästigung (§ 7 UWG). Mit Werbung für ein „Tagesgeld mit 5 % Zinsen“, obwohl der Zins nur 1 Monat gilt und das klein gedruckt ist, liegt außerdem irreführende Werbung vor (§ 5 UWG).",
    "tabelle": {
     "kopf": [
      "Verbot",
      "Beispiel",
      "Fundstelle"
     ],
     "zeilen": [
      [
       "aggressive geschäftliche Handlung",
       "Kunde wird unter Druck gesetzt, sofort zu unterschreiben",
       "§ 4a UWG"
      ],
      [
       "irreführende Werbung",
       "falsche oder verschleierte Angaben zu Preis, Zins, Eigenschaften",
       "§ 5 UWG"
      ],
      [
       "Irreführung durch Unterlassen",
       "wichtige Kosten werden verschwiegen",
       "§ 5a UWG"
      ],
      [
       "vergleichende Werbung",
       "erlaubt, wenn sachlich, nachprüfbar, nicht herabsetzend",
       "§ 6 UWG"
      ],
      [
       "unzumutbare Belästigung",
       "Werbeanruf bei Verbrauchern ohne vorherige ausdrückliche Einwilligung, Werbe-E-Mail ohne Einwilligung",
       "§ 7 UWG"
      ],
      [
       "Rechtsfolgen",
       "Beseitigung, Unterlassung, Schadensersatz, Gewinnabschöpfung",
       "§§ 8 bis 10 UWG"
      ]
     ]
    },
    "merksatz": "**GWB** schützt, dass Wettbewerb da ist, **UWG**, dass er fair ist.",
    "tipp": "Operator „Unterscheiden“ GWB und UWG: Merkmal Schutzziel nennen, dann je ein Beispiel (Kartell, irreführende Werbung).",
    "achtung": "Telefonwerbung bei Verbrauchern braucht eine vorherige ausdrückliche Einwilligung. Eine bestehende Kundenbeziehung allein reicht nicht.",
    "ergaenzt": true
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf06-k1",
     "vorne": "Unterschied Bedürfnis, Bedarf, Nachfrage?",
     "hinten": "Bedürfnis = Mangelgefühl; Bedarf = Bedürfnis mit Kaufkraft; Nachfrage = Bedarf, der am Markt auftritt."
    },
    {
     "thema": "lf06-k1",
     "vorne": "Was ist das Minimalprinzip?",
     "hinten": "Ein festes Ziel mit möglichst geringem Mitteleinsatz erreichen."
    },
    {
     "thema": "lf06-k2",
     "vorne": "Welche Rolle haben Banken im erweiterten Wirtschaftskreislauf?",
     "hinten": "Sie nehmen Ersparnisse auf und geben sie als Kredite für Investitionen weiter (Sektor Vermögensänderung)."
    },
    {
     "thema": "lf06-k3",
     "vorne": "Vier Bedingungen des vollkommenen Marktes?",
     "hinten": "Homogene Güter, vollständige Markttransparenz, keine Präferenzen, sofortige Reaktion."
    },
    {
     "thema": "lf06-k4",
     "vorne": "Was passiert bei einem Preis über dem Gleichgewichtspreis?",
     "hinten": "Angebotsüberhang: Das Angebot ist größer als die Nachfrage, der Preis sinkt."
    },
    {
     "thema": "lf06-k5",
     "vorne": "Höchstpreis: Lage und Folge?",
     "hinten": "Unter dem Gleichgewichtspreis; Folge ist ein Nachfrageüberhang (Knappheit, Schwarzmarkt)."
    },
    {
     "thema": "lf06-k6",
     "vorne": "Wann ist die Nachfrage unelastisch?",
     "hinten": "Wenn der Betrag der Elastizität kleiner als 1 ist: Die Menge ändert sich prozentual schwächer als der Preis."
    },
    {
     "thema": "lf06-k7",
     "vorne": "Unterschied Konzern und Fusion?",
     "hinten": "Konzern: rechtlich selbstständig, wirtschaftlich einheitlich geleitet. Fusion: rechtlich und wirtschaftlich verschmolzen."
    },
    {
     "thema": "lf06-k8",
     "vorne": "Wer gilt als Vater der sozialen Marktwirtschaft?",
     "hinten": "Ludwig Erhard (Begriff von Alfred Müller-Armack)."
    },
    {
     "thema": "lf06-k9",
     "vorne": "Was schützt das UWG?",
     "hinten": "Mitbewerber, Verbraucher und Allgemeinheit vor unlauteren geschäftlichen Handlungen (faire Mittel im Wettbewerb)."
    },
    {
     "thema": "lf06-k9",
     "vorne": "Ist vergleichende Werbung erlaubt?",
     "hinten": "Ja, wenn sie sachlich, nachprüfbar und nicht herabsetzend ist (§ 6 UWG)."
    },
    {
     "thema": "lf06-k9",
     "vorne": "Wann ist Telefonwerbung bei Verbrauchern erlaubt?",
     "hinten": "Nur mit vorheriger ausdrücklicher Einwilligung (§ 7 UWG)."
    }
   ],
   "mc": [
    {
     "thema": "lf06-k3",
     "operator": "Zuordnen",
     "frage": "Drei große Mobilfunkanbieter stehen Millionen Kunden gegenüber. Ordnen Sie die Marktform zu.",
     "optionen": [
      "Polypol",
      "Angebotsoligopol",
      "Angebotsmonopol",
      "Nachfrageoligopol"
     ],
     "richtig": 1,
     "erklaerung": "Wenige Anbieter, viele Nachfrager = Angebotsoligopol."
    },
    {
     "thema": "lf06-k4",
     "operator": "Beurteilen",
     "frage": "Die Einkommen der Haushalte steigen deutlich. Was passiert im Modell mit Gleichgewichtspreis und -menge eines normalen Gutes?",
     "optionen": [
      "Preis sinkt, Menge steigt",
      "Preis steigt, Menge sinkt",
      "Preis und Menge steigen",
      "Preis und Menge sinken"
     ],
     "richtig": 2,
     "erklaerung": "Die Nachfragekurve verschiebt sich nach rechts: Preis und Menge steigen."
    },
    {
     "thema": "lf06-k5",
     "operator": "Zuordnen",
     "frage": "Welcher Eingriff ist marktkonform?",
     "optionen": [
      "Höchstpreis für Mieten",
      "Mindestpreis für Milch",
      "Subvention für Wärmepumpen",
      "Festpreis für Brot"
     ],
     "richtig": 2,
     "erklaerung": "Eine Subvention verändert Kosten, der Preis bildet sich aber weiter am Markt. Höchst-, Mindest- und Festpreise sind marktkonträr."
    },
    {
     "thema": "lf06-k7",
     "operator": "Zuordnen",
     "frage": "Eine Brauerei kauft einen Hopfenanbauer. Welche Zusammenschlussrichtung liegt vor?",
     "optionen": [
      "horizontal",
      "vertikal",
      "diagonal",
      "Kartell"
     ],
     "richtig": 1,
     "erklaerung": "Vorgelagerte Produktionsstufe = vertikaler Zusammenschluss."
    },
    {
     "thema": "lf06-k7",
     "operator": "Nennen",
     "frage": "Ab welchem Marktanteil wird nach GWB eine marktbeherrschende Stellung eines Unternehmens vermutet?",
     "optionen": [
      "25 %",
      "33 %",
      "40 %",
      "50 %"
     ],
     "richtig": 2,
     "erklaerung": "§ 18 Abs. 4 GWB: Vermutung ab 40 % Marktanteil."
    },
    {
     "thema": "lf06-k9",
     "operator": "Zuordnen",
     "frage": "Zwei Banken sprechen ihre Kontoentgelte ab. Welches Gesetz ist verletzt?",
     "optionen": [
      "UWG, weil die Werbung irreführend ist",
      "GWB, weil eine Preisabsprache den Wettbewerb beschränkt",
      "BGB, weil der Kontovertrag nichtig ist",
      "Kein Gesetz, Absprachen sind erlaubt"
     ],
     "richtig": 1,
     "erklaerung": "Preisabsprachen sind Kartelle und nach § 1 GWB verboten. Das UWG betrifft unfaire Mittel einzelner Anbieter, z. B. irreführende Werbung."
    }
   ],
   "rechnen": [
    {
     "thema": "lf06-k6",
     "operator": "Ermitteln",
     "frage": "Der Preis eines Kontomodells steigt von 8,00 € auf 10,00 €. Die Zahl der Kunden sinkt von 2.000 auf 1.400. Ermitteln Sie den Betrag der Preiselastizität der Nachfrage.",
     "ergebnis": 1.2,
     "einheit": "",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Mengenänderung: −600 : 2.000 = −30 %. Preisänderung: +2 : 8 = +25 %. E = −30 : 25 = −1,2. Betrag 1,2 > 1, also elastisch; Umsatz sinkt von 16.000 € auf 14.000 €."
    },
    {
     "thema": "lf06-k4",
     "operator": "Ermitteln",
     "frage": "Nachfrage: 900 bei 1 €, 700 bei 1,50 €, 600 bei 2 €, 400 bei 2,50 €. Angebot: 300, 500, 600, 800. Ermitteln Sie den Umsatz im Gleichgewicht.",
     "ergebnis": 1200,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Gleichgewicht bei 2,00 € (Nachfrage = Angebot = 600). Umsatz 2,00 × 600 = 1.200 €."
    },
    {
     "thema": "lf06-k5",
     "operator": "Ermitteln",
     "frage": "Gleiche Werte wie oben. Der Staat setzt einen Höchstpreis von 1,50 €. Wie groß ist der Nachfrageüberhang in Stück?",
     "ergebnis": 200,
     "einheit": "Stück",
     "toleranz": 0,
     "ergaenzt": true,
     "weg": "Bei 1,50 €: Nachfrage 700, Angebot 500. Überhang 700 − 500 = 200 Stück."
    }
   ],
   "frei": [
    {
     "thema": "lf06-k3",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie, ob der Markt für Girokonten ein vollkommener Markt ist.",
     "loesung": "Nein. Zwar gibt es viele Anbieter, aber die Konten sind nicht völlig gleichartig (Leistungen, Filialnetz), die Markttransparenz ist eingeschränkt, Kunden haben persönliche und räumliche Präferenzen (Berater, Filiale in der Nähe) und reagieren nicht sofort auf Preisänderungen (Wechselaufwand). Damit sind mehrere Bedingungen verletzt, der Markt ist unvollkommen."
    },
    {
     "thema": "lf06-k8",
     "operator": "Erläutern",
     "frage": "Erläutern Sie zwei Merkmale der sozialen Marktwirtschaft mit je einem Beispiel aus der Kreditwirtschaft.",
     "loesung": "1. Freier Wettbewerb und Preisbildung am Markt: Banken legen Zinsen und Kontopreise selbst fest. 2. Sozialer Ausgleich durch den Staat: Anspruch auf ein Basiskonto für jeden Verbraucher, gesetzliche Einlagensicherung bis 100.000 €. (Weitere: Schutz des Wettbewerbs durch das Kartellamt, Verbraucherschutz bei Krediten.)"
    },
    {
     "thema": "lf06-k9",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie GWB und UWG nach Schutzziel und nennen Sie je ein Beispiel für einen Verstoß.",
     "loesung": "GWB (Kartellrecht): schützt den Wettbewerb als solchen vor Beschränkung, Beispiel: Preisabsprache zwischen Banken, Missbrauch einer marktbeherrschenden Stellung. UWG: schützt die Lauterkeit, also faire Mittel im Wettbewerb, Beispiel: irreführende Zinswerbung oder Werbeanrufe ohne Einwilligung."
    }
   ]
  }
 },
 {
  "nr": 7,
  "titel": "Wertströme und Geschäftsprozesse erfassen und dokumentieren",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Stand 09.11.2026: GWG-Grenze 800 €, CRR-Mindestquoten. Antizyklischer Puffer und Systemrisikopuffer nicht eingetragen. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Grundsätze ordnungsmäßiger Buchführung und Aufbewahrung, Anlagenabgang, GWG, Sammelposten und Umsatzsteuer.",
  "kapitel": [
   {
    "id": "lf07-k1",
    "titel": "Bilanz und Konten einer Bank",
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
    "id": "lf07-k2",
    "titel": "Abschreibungen und Bewertung",
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
    "id": "lf07-k3",
    "titel": "Gewinn- und Verlustrechnung einer Bank",
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
    "id": "lf07-k4",
    "titel": "Zeitliche Abgrenzung zum Jahresende",
    "ergaenzt": true,
    "erklaert": "Aufwand und Ertrag gehören in das Jahr, in dem sie wirtschaftlich entstehen, egal wann bezahlt wird. Zahlt die Bank im alten Jahr schon für das neue, bildet sie einen aktiven Rechnungsabgrenzungsposten (ARA). Bekommt sie im alten Jahr Geld für das neue, bildet sie einen passiven Rechnungsabgrenzungsposten (PRA). Wird erst im neuen Jahr für das alte gezahlt, entstehen sonstige Forderungen oder sonstige Verbindlichkeiten.",
    "beispiel": "Die Sparkasse zahlt am 01.11. die Miete für eine Filiale für 6 Monate im Voraus, 6.000 €. Davon gehören November und Dezember (2.000 €) ins alte Jahr, Januar bis April (4.000 €) ins neue. Buchung am 31.12.: ARA 4.000 € an Mietaufwand 4.000 €.",
    "tabelle": {
     "kopf": [
      "Fall",
      "Zahlung",
      "Erfolg",
      "Posten"
     ],
     "zeilen": [
      [
       "Bank zahlt vorab",
       "altes Jahr",
       "neues Jahr",
       "aktive Rechnungsabgrenzung"
      ],
      [
       "Bank erhält vorab",
       "altes Jahr",
       "neues Jahr",
       "passive Rechnungsabgrenzung"
      ],
      [
       "Bank erhält später",
       "neues Jahr",
       "altes Jahr",
       "sonstige Forderung"
      ],
      [
       "Bank zahlt später",
       "neues Jahr",
       "altes Jahr",
       "sonstige Verbindlichkeit"
      ]
     ]
    },
    "merksatz": "**Vorher bezahlt** heißt Rechnungsabgrenzung, **später bezahlt** heißt sonstige Forderung oder Verbindlichkeit.",
    "tipp": "Operator „Ermitteln“: Zeichne einen Zeitstrahl mit dem 31.12. und teile die Monate auf. Dann ist der Betrag fast von selbst klar.",
    "achtung": "Rechnungsabgrenzung nur für bestimmte Zeiträume nach dem Stichtag (§ 250 HGB). Und: Grundlage ist kaufmännisch, jeder Monat zählt gleich."
   },
   {
    "id": "lf07-k5",
    "titel": "Grundsätze ordnungsmäßiger Buchführung und Aufbewahrung",
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
    "id": "lf07-k6",
    "titel": "Anlagenabgang, GWG, Sammelposten und Umsatzsteuer",
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
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf07-k1",
     "vorne": "Sind Kundeneinlagen für die Bank Aktiva oder Passiva?",
     "hinten": "Passiva: Verbindlichkeiten der Bank gegenüber Kunden."
    },
    {
     "thema": "lf07-k1",
     "vorne": "Buchungssatz Barauszahlung vom Girokonto?",
     "hinten": "KKK an Kasse."
    },
    {
     "thema": "lf07-k1",
     "vorne": "Buchungssatz Belastung Kontoführungsentgelt?",
     "hinten": "KKK an Provisionserträge."
    },
    {
     "thema": "lf07-k2",
     "vorne": "Ab wann wird im Anschaffungsjahr abgeschrieben?",
     "hinten": "Ab dem Anschaffungsmonat, monatsgenau (pro rata temporis)."
    },
    {
     "thema": "lf07-k2",
     "vorne": "Grenze für geringwertige Wirtschaftsgüter?",
     "hinten": "800 € netto."
    },
    {
     "thema": "lf07-k2",
     "vorne": "Was ist eine Einzelwertberichtigung?",
     "hinten": "Wertberichtigung in Höhe des erwarteten Ausfalls einer bestimmten, zweifelhaften Forderung."
    },
    {
     "thema": "lf07-k3",
     "vorne": "Größte Ertragsquelle einer Sparkasse?",
     "hinten": "Der Zinsüberschuss."
    },
    {
     "thema": "lf07-k4",
     "vorne": "Bank zahlt im Dezember Miete für Januar. Welcher Posten?",
     "hinten": "Aktiver Rechnungsabgrenzungsposten (ARA)."
    },
    {
     "thema": "lf07-k4",
     "vorne": "Bank erhält im Januar Zinsen für Dezember. Welcher Posten am 31.12.?",
     "hinten": "Sonstige Forderung."
    },
    {
     "thema": "lf07-k5",
     "vorne": "Aufbewahrungsfrist für Jahresabschlüsse?",
     "hinten": "10 Jahre ab Ende des Kalenderjahres (§ 257 HGB, § 147 AO)."
    },
    {
     "thema": "lf07-k5",
     "vorne": "Unterschied Grundbuch und Hauptbuch?",
     "hinten": "Grundbuch: zeitliche Ordnung aller Buchungen. Hauptbuch: sachliche Ordnung nach Konten."
    },
    {
     "thema": "lf07-k5",
     "vorne": "Inventur, Inventar, Bilanz?",
     "hinten": "Inventur = Bestandsaufnahme, Inventar = ausführliches Verzeichnis, Bilanz = kurze Gegenüberstellung von Vermögen und Kapital."
    },
    {
     "thema": "lf07-k6",
     "vorne": "GWG-Grenze?",
     "hinten": "250,01 bis 800 € netto, Sofortabschreibung möglich (§ 6 Abs. 2 EStG)."
    },
    {
     "thema": "lf07-k6",
     "vorne": "Sammelposten?",
     "hinten": "Güter 250,01 bis 1.000 € netto, 5 Jahre je 20 % (§ 6 Abs. 2a EStG)."
    },
    {
     "thema": "lf07-k6",
     "vorne": "Warum kann eine Bank meist keine Vorsteuer abziehen?",
     "hinten": "Ihre Umsätze sind überwiegend umsatzsteuerfrei (§ 4 Nr. 8 UStG), Vorsteuer ist dann ausgeschlossen (§ 15 Abs. 2 UStG)."
    }
   ],
   "mc": [
    {
     "thema": "lf07-k1",
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
     "thema": "lf07-k2",
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
     "thema": "lf07-k4",
     "operator": "Zuordnen",
     "frage": "Ein Mieter zahlt der Sparkasse am 15.12. die Januarmiete für ein Ladenlokal. Welcher Posten entsteht bei der Sparkasse?",
     "optionen": [
      "aktive Rechnungsabgrenzung",
      "passive Rechnungsabgrenzung",
      "sonstige Forderung",
      "sonstige Verbindlichkeit"
     ],
     "richtig": 1,
     "erklaerung": "Geld im alten Jahr, Ertrag im neuen Jahr: passive Rechnungsabgrenzung."
    },
    {
     "thema": "lf07-k6",
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
     "thema": "lf07-k5",
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
    }
   ],
   "rechnen": [
    {
     "thema": "lf07-k2",
     "operator": "Ermitteln",
     "frage": "Kauf eines Servers am 01.10. für 12.000 €, Nutzungsdauer 4 Jahre. Ermitteln Sie den Buchwert am 31.12. des ersten Jahres.",
     "ergebnis": 11250,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "12.000 : 4 = 3.000 € im Jahr. Oktober bis Dezember 3 Monate: 750 €. Buchwert 12.000 − 750 = 11.250 €."
    },
    {
     "thema": "lf07-k2",
     "operator": "Ermitteln",
     "frage": "Forderung an einen Kunden 45.000 €, die Bank erwartet einen Ausfall von 40 %. Ermitteln Sie die Einzelwertberichtigung.",
     "ergebnis": 18000,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "45.000 · 40 % = 18.000 €."
    },
    {
     "thema": "lf07-k4",
     "operator": "Ermitteln",
     "frage": "Die Sparkasse zahlt am 01.11. Miete für 6 Monate im Voraus, 6.000 €. Ermitteln Sie den aktiven Rechnungsabgrenzungsposten am 31.12.",
     "ergebnis": 4000,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "1.000 € je Monat. Januar bis April = 4 Monate im neuen Jahr: 4 · 1.000 = 4.000 €."
    },
    {
     "thema": "lf07-k6",
     "operator": "Ermitteln",
     "frage": "Ein Geldzählautomat wurde am 01.01.2024 für 12.000 € gekauft, Nutzungsdauer 8 Jahre. Er wird am 30.09.2026 für 7.000 € verkauft. Ermitteln Sie den Aufwand aus dem Anlagenabgang.",
     "ergebnis": 875,
     "einheit": "€",
     "toleranz": 0.5,
     "ergaenzt": true,
     "weg": "Abschreibung 12.000 : 8 = 1.500 € im Jahr. 2024 und 2025: 3.000 €. 2026 Januar bis September: 1.500 · 9 : 12 = 1.125 €. Restbuchwert 12.000 − 3.000 − 1.125 = 7.875 €. Erlös 7.000 € liegt 875 € unter dem Restbuchwert 7.875 €: Aufwand aus Anlagenabgang 875 €."
    },
    {
     "thema": "lf07-k6",
     "operator": "Ermitteln",
     "frage": "Die Sparkasse kauft im Jahr einen Schreibtisch für 1.071 € brutto (900 € netto, kein Vorsteuerabzug) und bildet einen Sammelposten. Wie hoch ist die jährliche Auflösung?",
     "ergebnis": 214.2,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "900 € netto liegt zwischen 250,01 und 1.000 €, also Sammelposten. Anschaffungskosten ohne Vorsteuerabzug: 1.071 €. Auflösung 20 % = 214,20 € im Jahr."
    }
   ],
   "frei": [
    {
     "thema": "lf07-k1",
     "operator": "Begründen",
     "frage": "Begründen Sie, warum ein Kundenkredit in der Bankbilanz auf der Aktivseite steht.",
     "loesung": "Mit dem Kredit hat die Bank einen Anspruch auf Rückzahlung gegen den Kunden. Das ist eine Forderung und damit Vermögen der Bank. Vermögen steht auf der Aktivseite."
    },
    {
     "thema": "lf07-k6",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, warum bei einer Sparkasse die Umsatzsteuer meist zu den Anschaffungskosten gehört.",
     "loesung": "Kredite, Einlagen und Zahlungsverkehr sind nach § 4 Nr. 8 UStG umsatzsteuerfrei. Wer steuerfreie Umsätze ausführt, darf die Vorsteuer aus Eingangsrechnungen dafür nicht abziehen (§ 15 Abs. 2 UStG). Die gezahlte Umsatzsteuer ist deshalb für die Sparkasse echter Aufwand und wird mit dem Anlagegut aktiviert und abgeschrieben. Nur für steuerpflichtige Umsätze wie Depotverwahrung oder Schließfachmiete ist anteilig Vorsteuerabzug möglich."
    }
   ]
  }
 },
 {
  "nr": 8,
  "titel": "Kunden über die Anlage in Finanzinstrumenten beraten",
  "std": 120,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: Sparer-Pauschbetrag 1.000/2.000 € (seit 2023), Sparzulage-Grenzen 40.000/80.000 € (seit 2024), BBG RV 2026 8.450 € im Monat, Riester-Zulagen nach bisherigem Recht (Reform ab 01.01.2027 beschlossen), Basisrente-Höchstbetrag 2026 30.826 €. Basiszins Vorabpauschale 2026 3,20 % (BMF), aktueller Rentenwert ab 01.07.2026 42,52 € (DRV); nachgetragen am 11.11.2026. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Derivate, Optionsscheine und Zertifikate, Depot: Verwahrung und Verwaltung.",
  "kapitel": [
   {
    "id": "lf08-k1",
    "titel": "Anleihen: Kurswert und Stückzinsen",
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
    "id": "lf08-k2",
    "titel": "Rendite einer Anleihe",
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
    "id": "lf08-k3",
    "titel": "Aktien",
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
    "id": "lf08-k4",
    "titel": "Investmentfonds",
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
    "id": "lf08-k5",
    "titel": "Anlageberatung nach WpHG und Risiken",
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
    "id": "lf08-k6",
    "titel": "Wertpapierorder und Abrechnung",
    "ergaenzt": true,
    "erklaert": "Mit einer Order beauftragt der Kunde die Sparkasse, Wertpapiere zu kaufen oder zu verkaufen. Er kann ein Limit setzen oder billigst beziehungsweise bestens handeln. Eine Stop-Loss-Order wird zur Bestens-Order, wenn ein Kurs unterschritten wird. In der Abrechnung kommen beim Kauf die Entgelte dazu, beim Verkauf werden sie abgezogen.",
    "beispiel": "Frau Richter kauft 250 Aktien zu 45,50 €. Kurswert 11.375,00 €. Provision 1 % = 113,75 €. Belastung 11.488,75 €. Später verkauft sie zu 50,00 €: Kurswert 12.500,00 €, Provision 125,00 €, Gutschrift vor Steuern 12.375,00 €.",
    "tabelle": {
     "kopf": [
      "Orderart",
      "Bedeutung",
      "Risiko"
     ],
     "zeilen": [
      [
       "billigst / bestens",
       "zum nächsten Kurs",
       "Kurs kann stark abweichen"
      ],
      [
       "Kauflimit",
       "höchstens zu diesem Kurs",
       "Order wird vielleicht nicht ausgeführt"
      ],
      [
       "Verkaufslimit",
       "mindestens zu diesem Kurs",
       "Order wird vielleicht nicht ausgeführt"
      ],
      [
       "Stop-Loss",
       "unter Stoppkurs wird verkauft (bestens)",
       "Ausführung auch deutlich unter dem Stoppkurs möglich"
      ],
      [
       "Stop-Buy",
       "über Stoppkurs wird gekauft (billigst)",
       "Ausführung auch deutlich darüber möglich"
      ]
     ]
    },
    "merksatz": "Kauf: Kurswert **plus** Entgelte. Verkauf: Kurswert **minus** Entgelte.",
    "tipp": "Operator „Ermitteln“: Schreib die Abrechnung als kleine Tabelle: Stückzahl, Kurs, Kurswert, Entgelte, Endbetrag.",
    "achtung": "Entgelte beim Kauf erhöhen die Anschaffungskosten und senken so später den steuerpflichtigen Gewinn. Die Abgeltungsteuer kommt erst beim Verkauf."
   },
   {
    "id": "lf08-k7",
    "titel": "Derivate, Optionsscheine und Zertifikate",
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
    "id": "lf08-k8",
    "titel": "Depot: Verwahrung und Verwaltung",
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
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf08-k1",
     "vorne": "Wer zahlt die Stückzinsen?",
     "hinten": "Der Käufer an den Verkäufer, für die Zeit seit dem letzten Zinstermin."
    },
    {
     "thema": "lf08-k1",
     "vorne": "Welche Zinsmethode gilt bei Anleihen?",
     "hinten": "act/act."
    },
    {
     "thema": "lf08-k2",
     "vorne": "Formel der vereinfachten Rendite?",
     "hinten": "(Kupon + (Rückzahlung − Kaufkurs) : Restlaufzeit) : Kaufkurs · 100."
    },
    {
     "thema": "lf08-k3",
     "vorne": "Unterschied Stamm- und Vorzugsaktie?",
     "hinten": "Stammaktie mit Stimmrecht; Vorzugsaktie meist ohne Stimmrecht, dafür bevorzugte Dividende."
    },
    {
     "thema": "lf08-k3",
     "vorne": "Was bewirkt eine Stop-Loss-Order?",
     "hinten": "Bei Erreichen des Stoppkurses wird bestens verkauft, Ausführung auch darunter möglich."
    },
    {
     "thema": "lf08-k4",
     "vorne": "Teilfreistellung bei Aktienfonds?",
     "hinten": "30 % der Erträge sind steuerfrei."
    },
    {
     "thema": "lf08-k4",
     "vorne": "Warum ist ein Fonds bei Insolvenz der Fondsgesellschaft geschützt?",
     "hinten": "Das Fondsvermögen ist Sondervermögen der Anleger."
    },
    {
     "thema": "lf08-k5",
     "vorne": "Welche Unterlagen erhält ein Privatkunde nach einer Anlageberatung?",
     "hinten": "Geeignetheitserklärung, Basisinformationsblatt, Kosteninformation."
    },
    {
     "thema": "lf08-k5",
     "vorne": "Was muss seit August 2022 zusätzlich erfragt werden?",
     "hinten": "Die Nachhaltigkeitspräferenzen."
    },
    {
     "thema": "lf08-k6",
     "vorne": "Was passiert bei einer Stop-Loss-Order, wenn der Stoppkurs erreicht wird?",
     "hinten": "Sie wird zur Bestens-Verkaufsorder und zum nächsten Kurs ausgeführt."
    },
    {
     "thema": "lf08-k6",
     "vorne": "Was bedeutet ein Kauflimit von 40 €?",
     "hinten": "Gekauft wird höchstens zu 40 €."
    },
    {
     "thema": "lf08-k7",
     "vorne": "Was ist ein Put?",
     "hinten": "Eine Verkaufsoption: Recht, den Basiswert zum Basispreis zu verkaufen."
    },
    {
     "thema": "lf08-k7",
     "vorne": "Höchster Verlust des Optionskäufers?",
     "hinten": "Die gezahlte Prämie."
    },
    {
     "thema": "lf08-k7",
     "vorne": "Unterschied Option und Future?",
     "hinten": "Option: bedingtes Termingeschäft (Recht des Käufers). Future: unbedingtes Termingeschäft (Pflicht beider Seiten)."
    },
    {
     "thema": "lf08-k7",
     "vorne": "Rechtsnatur eines Zertifikats?",
     "hinten": "Inhaberschuldverschreibung, deshalb Emittentenrisiko."
    },
    {
     "thema": "lf08-k8",
     "vorne": "Regelfall der Verwahrung in Deutschland?",
     "hinten": "Girosammelverwahrung bei der Clearstream Banking AG, Miteigentum nach Bruchteilen (§ 5 DepotG)."
    },
    {
     "thema": "lf08-k8",
     "vorne": "Was passiert mit dem Depot, wenn die Bank insolvent wird?",
     "hinten": "Die Wertpapiere gehören dem Kunden, er kann sie aussondern (§ 47 InsO)."
    }
   ],
   "mc": [
    {
     "thema": "lf08-k1",
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
     "thema": "lf08-k2",
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
     "thema": "lf08-k3",
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
     "thema": "lf08-k4",
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
     "thema": "lf08-k5",
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
     "thema": "lf08-k6",
     "operator": "Beurteilen",
     "frage": "Ein Kunde will Kursverluste bei seinen Aktien begrenzen, ohne täglich zu schauen. Welche Order passt?",
     "optionen": [
      "Kauflimit",
      "Stop-Loss-Order",
      "Billigst-Order",
      "Stop-Buy-Order"
     ],
     "richtig": 1,
     "erklaerung": "Stop-Loss verkauft automatisch, sobald der Stoppkurs erreicht ist."
    },
    {
     "thema": "lf08-k7",
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
     "thema": "lf08-k8",
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
     "thema": "lf08-k1",
     "operator": "Ermitteln",
     "frage": "Kauf von 20.000 € Nennwert einer 2,5 %-Anleihe zu 101,20 %. 73 Zinstage, Zinsjahr 365 Tage. Ermitteln Sie Kurswert plus Stückzinsen (ohne Spesen).",
     "ergebnis": 20340,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Kurswert 20.000 · 101,20 % = 20.240,00 €. Stückzinsen 20.000 · 2,5 % · 73 : 365 = 100,00 €. Summe 20.340,00 €."
    },
    {
     "thema": "lf08-k2",
     "operator": "Ermitteln",
     "frage": "5 %-Anleihe, Kaufkurs 104 %, Restlaufzeit 5 Jahre. Ermitteln Sie die Rendite nach der vereinfachten Formel (zwei Nachkommastellen).",
     "ergebnis": 4.04,
     "einheit": "%",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Kursverlust je Jahr: (100 − 104) : 5 = −0,8. Rendite: (5 − 0,8) : 104 · 100 = 4,04 %."
    },
    {
     "thema": "lf08-k4",
     "operator": "Ermitteln",
     "frage": "Ein Kunde legt 3.000 € in einen Fonds an. Anteilwert 60,00 €, Ausgabeaufschlag 5 %. Wie viele Anteile erhält er (drei Nachkommastellen)?",
     "ergebnis": 47.619,
     "einheit": "Anteile",
     "toleranz": 0.001,
     "ergaenzt": true,
     "weg": "Ausgabepreis 60 · 1,05 = 63,00 €. 3.000 : 63 = 47,619 Anteile."
    },
    {
     "thema": "lf08-k4",
     "operator": "Ermitteln",
     "frage": "Ein Mischfonds schüttet 500 € aus, Freistellungsauftrag ausgeschöpft, keine Kirchensteuer. Ermitteln Sie die Abgeltungsteuer.",
     "ergebnis": 106.25,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Teilfreistellung 15 %: steuerpflichtig 425 €. 25 % = 106,25 €."
    },
    {
     "thema": "lf08-k6",
     "operator": "Ermitteln",
     "frage": "Kauf von 250 Aktien zu 45,50 €, Provision 1 % vom Kurswert. Ermitteln Sie den Belastungsbetrag.",
     "ergebnis": 11488.75,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Kurswert 250 · 45,50 = 11.375,00 €. Provision 1 % = 113,75 €. Belastung 11.488,75 €."
    },
    {
     "thema": "lf08-k7",
     "operator": "Ermitteln",
     "frage": "Ein Kunde kauft Puts auf 200 Aktien, Basispreis 50 €, Prämie 3 € je Aktie. Am Fälligkeitstag steht die Aktie bei 44 €. Ermitteln Sie seinen Gewinn.",
     "ergebnis": 600,
     "einheit": "€",
     "toleranz": 0.5,
     "ergaenzt": true,
     "weg": "Innerer Wert 50 − 44 = 6 € je Aktie. Minus Prämie 3 € = 3 € Gewinn je Aktie. 3 · 200 = 600 €."
    },
    {
     "thema": "lf08-k7",
     "operator": "Ermitteln",
     "frage": "Discountzertifikat: Kaufpreis 42 €, Cap 50 €. Ermitteln Sie den Höchstertrag in Prozent (2 Nachkommastellen).",
     "ergebnis": 19.05,
     "einheit": "%",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Höchster Rückzahlungsbetrag = Cap 50 €. (50 − 42) : 42 · 100 = 19,05 %."
    },
    {
     "thema": "lf08-k8",
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
     "thema": "lf08-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie das Zinsänderungsrisiko einer festverzinslichen Anleihe.",
     "loesung": "Steigt der Marktzins, werden neue Anleihen mit höherem Kupon ausgegeben. Die alte Anleihe mit niedrigem Kupon ist weniger attraktiv, ihr Kurs fällt, bis ihre Rendite dem Marktzins entspricht. Verkauft der Kunde vor Fälligkeit, kann er einen Verlust erleiden. Hält er bis zum Ende, erhält er 100 % zurück."
    },
    {
     "thema": "lf08-k4",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie ausschüttende und thesaurierende Fonds nach Ertragsverwendung und Besteuerung.",
     "loesung": "Ausschüttend: Erträge werden regelmäßig an den Anleger ausgezahlt und bei Zahlung besteuert (nach Teilfreistellung). Thesaurierend: Erträge werden im Fonds wieder angelegt; besteuert wird jährlich die Vorabpauschale (Rücknahmepreis Jahresanfang · Basiszins · 0,7, höchstens die Wertsteigerung), der Rest beim Verkauf."
    },
    {
     "thema": "lf08-k5",
     "operator": "Beurteilen",
     "frage": "Herr Stein (45) hat Erfahrung mit Fonds, möchte 20.000 € für 15 Jahre anlegen und nimmt Schwankungen in Kauf. Beurteilen Sie einen weltweit streuenden Aktienfonds für ihn.",
     "loesung": "Pro: langer Anlagehorizont von 15 Jahren, Erfahrung mit Fonds vorhanden, Risikobereitschaft gegeben, breite Streuung mindert das Einzelwertrisiko, Renditechancen höher als bei Einlagen. Contra: Kursschwankungen und zwischenzeitliche Verluste möglich, Kosten (Ausgabeaufschlag, laufende Kosten). Fazit: geeignet, sofern seine Verlusttragfähigkeit ausreicht und er eine Liquiditätsreserve auf dem Konto behält."
    },
    {
     "thema": "lf08-k7",
     "operator": "Erläutern",
     "frage": "Erläutern Sie einem Kunden die Hebelwirkung eines Optionsscheins.",
     "loesung": "Der Optionsschein kostet nur einen Bruchteil des Aktienkurses. Steigt die Aktie, steigt der Wert des Optionsscheins prozentual deutlich stärker, zum Beispiel Aktie + 10 %, Optionsschein + 40 %. Der Hebel wirkt aber auch nach unten: Fällt die Aktie oder bewegt sie sich nicht, verliert der Schein stark an Wert und kann bei Fälligkeit wertlos verfallen. Dazu kommt das Emittentenrisiko."
    }
   ]
  }
 },
 {
  "nr": 9,
  "titel": "Baufinanzierungen abschließen",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Stand 09.11.2026: Grunderwerbsteuer Sachsen 5,5 % (seit 2023). Notar/Grundbuch 2 % und Makler 3,57 % sind Faustwerte. Beleihungsgrenze 60 % ist der übliche Wert (PfandBG), die Sparkasse kann eigene Grundsätze haben. Keine KfW- oder SAB-Beträge eingetragen, weil sie oft wechseln. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Erbbaurecht, Wohnungseigentum und Kapitaldienstfähigkeit.",
  "kapitel": [
   {
    "id": "lf09-k1",
    "titel": "Finanzierungsplan und Kaufnebenkosten",
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
    "id": "lf09-k2",
    "titel": "Beleihungswert und Beleihungsgrenze",
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
    "id": "lf09-k3",
    "titel": "Grundbuch und Grundschuld",
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
    "id": "lf09-k4",
    "titel": "Annuitätendarlehen und Zinsbindung",
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
    "id": "lf09-k5",
    "titel": "Bausparen und Fördermittel",
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
    "id": "lf09-k6",
    "titel": "Verbraucherschutz bei Immobiliar-Darlehen",
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
    "id": "lf09-k7",
    "titel": "Erbbaurecht, Wohnungseigentum und Kapitaldienstfähigkeit",
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
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf09-k1",
     "vorne": "Grunderwerbsteuer in Sachsen?",
     "hinten": "5,5 % des Kaufpreises (seit 01.01.2023)."
    },
    {
     "thema": "lf09-k1",
     "vorne": "Wie viel Maklerprovision zahlt ein Verbraucher beim Kauf einer Wohnung höchstens?",
     "hinten": "Höchstens so viel wie der Verkäufer (§ 656c BGB)."
    },
    {
     "thema": "lf09-k2",
     "vorne": "Typische Beleihungsgrenze?",
     "hinten": "60 % des Beleihungswerts."
    },
    {
     "thema": "lf09-k2",
     "vorne": "Welches Wertermittlungsverfahren für ein vermietetes Mehrfamilienhaus?",
     "hinten": "Ertragswertverfahren."
    },
    {
     "thema": "lf09-k3",
     "vorne": "Was steht in Abteilung II des Grundbuchs?",
     "hinten": "Lasten und Beschränkungen, z. B. Wegerecht, Wohnrecht, Auflassungsvormerkung."
    },
    {
     "thema": "lf09-k3",
     "vorne": "Was steht in Abteilung III des Grundbuchs?",
     "hinten": "Grundpfandrechte: Hypotheken, Grundschulden, Rentenschulden."
    },
    {
     "thema": "lf09-k3",
     "vorne": "Warum ist die Grundschuld nicht akzessorisch?",
     "hinten": "Sie besteht unabhängig von einer Forderung; die Verbindung schafft die Sicherungszweckerklärung."
    },
    {
     "thema": "lf09-k4",
     "vorne": "Formel Annuität?",
     "hinten": "Darlehen · (Sollzins + anfängliche Tilgung)."
    },
    {
     "thema": "lf09-k4",
     "vorne": "Wann kann ein Festzinsdarlehen ohne Vorfälligkeitsentschädigung gekündigt werden?",
     "hinten": "10 Jahre nach vollständiger Auszahlung mit 6 Monaten Frist (§ 489 BGB)."
    },
    {
     "thema": "lf09-k5",
     "vorne": "Drei Phasen des Bausparens?",
     "hinten": "Sparphase, Zuteilung, Darlehensphase."
    },
    {
     "thema": "lf09-k6",
     "vorne": "Wie lange ist die Bank bei Immobiliar-Verbraucherdarlehen an ihr Angebot gebunden?",
     "hinten": "7 Tage (§ 495 Abs. 3 BGB)."
    },
    {
     "thema": "lf09-k6",
     "vorne": "Wie heißt das Pflicht-Informationsblatt vor einem Immobiliar-Verbraucherdarlehen?",
     "hinten": "ESIS-Merkblatt."
    },
    {
     "thema": "lf09-k7",
     "vorne": "Was ist ein Erbbaurecht?",
     "hinten": "Ein grundstücksgleiches, veräußerliches und vererbliches Recht, auf fremdem Grund ein Bauwerk zu haben; eigenes Erbbaugrundbuch."
    },
    {
     "thema": "lf09-k7",
     "vorne": "Woraus besteht Wohnungseigentum?",
     "hinten": "Sondereigentum an der Wohnung und Miteigentumsanteil am Gemeinschaftseigentum (§ 1 WEG)."
    },
    {
     "thema": "lf09-k7",
     "vorne": "Wann ist ein Kunde kapitaldienstfähig?",
     "hinten": "Wenn sein frei verfügbares Einkommen dauerhaft für Zins und Tilgung reicht."
    }
   ],
   "mc": [
    {
     "thema": "lf09-k1",
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
     "thema": "lf09-k2",
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
     "thema": "lf09-k3",
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
     "thema": "lf09-k3",
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
     "thema": "lf09-k4",
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
     "thema": "lf09-k6",
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
     "thema": "lf09-k7",
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
     "thema": "lf09-k1",
     "operator": "Ermitteln",
     "frage": "Kaufpreis 280.000 €, Grunderwerbsteuer 5,5 %, Notar und Grundbuch 2 %, Makler 3,57 %, Eigenkapital 60.000 €. Ermitteln Sie den Darlehensbedarf.",
     "ergebnis": 250996,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Nebenkosten: 15.400 + 5.600 + 9.996 = 30.996 €. Gesamtkosten 310.996 €. Minus 60.000 € = 250.996 €."
    },
    {
     "thema": "lf09-k2",
     "operator": "Ermitteln",
     "frage": "Beleihungswert 290.000 €, Beleihungsgrenze 60 %, Darlehen 230.000 €. Ermitteln Sie den nachrangigen Teil.",
     "ergebnis": 56000,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Erstrangig 290.000 · 60 % = 174.000 €. Nachrangig 230.000 − 174.000 = 56.000 €."
    },
    {
     "thema": "lf09-k4",
     "operator": "Ermitteln",
     "frage": "Darlehen 200.000 €, Sollzins 3,5 %, anfängliche Tilgung 2,5 %, jährliche Zahlung. Ermitteln Sie die Restschuld nach dem 2. Jahr.",
     "ergebnis": 189825,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Annuität 12.000 €. Jahr 1: Zinsen 7.000, Tilgung 5.000, Rest 195.000. Jahr 2: Zinsen 6.825, Tilgung 5.175, Rest 189.825,00 €."
    },
    {
     "thema": "lf09-k4",
     "operator": "Ermitteln",
     "frage": "Darlehen 320.000 €, Sollzins 3,8 %, anfängliche Tilgung 2 %. Ermitteln Sie die Monatsrate.",
     "ergebnis": 1546.67,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "320.000 · 5,8 % = 18.560 € im Jahr. 18.560 : 12 = 1.546,67 €."
    },
    {
     "thema": "lf09-k6",
     "operator": "Ermitteln",
     "frage": "Nettoeinkommen 4.200 €, Lebenshaltung 1.900 €, Bewirtschaftung 300 €, Sonstiges 350 €. Rate 1.400 €. Ermitteln Sie die monatliche Reserve.",
     "ergebnis": 250,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Frei verfügbar: 4.200 − 1.900 − 300 − 350 = 1.650 €. Reserve 1.650 − 1.400 = 250 €."
    },
    {
     "thema": "lf09-k7",
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
     "thema": "lf09-k3",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Grundschuld und Hypothek nach drei Merkmalen.",
     "loesung": "Akzessorietät: Hypothek hängt an einer bestimmten Forderung, Grundschuld nicht (Verbindung über Sicherungszweckerklärung). Höhe: Hypothek sinkt mit der Tilgung, Grundschuld bleibt in voller Höhe bestehen. Verwendung: Grundschuld kann für neue Kredite wiederverwendet werden, Hypothek erlischt als Fremdrecht mit der Forderung. In der Praxis wird fast nur die Grundschuld genutzt."
    },
    {
     "thema": "lf09-k4",
     "operator": "Erläutern",
     "frage": "Erläutern Sie das Zinsänderungsrisiko am Ende der Zinsbindung und eine Möglichkeit, es zu begrenzen.",
     "loesung": "Nach Ablauf der Zinsbindung muss die Restschuld zu dem dann gültigen Marktzins weiterfinanziert werden. Ist der Zins gestiegen, steigt die Rate. Begrenzen lässt sich das durch eine lange Zinsbindung, eine höhere anfängliche Tilgung (kleinere Restschuld), Sondertilgungen oder ein Forward-Darlehen, mit dem der Anschlusszins schon heute gesichert wird."
    },
    {
     "thema": "lf09-k6",
     "operator": "Beurteilen",
     "frage": "Familie Weber hat nach Abzug aller Ausgaben 1.500 € frei. Die geplante Rate beträgt 1.450 €. Beurteilen Sie die Tragbarkeit.",
     "loesung": "Die Rate ist rechnerisch gedeckt, die Reserve beträgt aber nur 50 €. Es fehlen Puffer für Reparaturen, Zinsanstieg nach der Zinsbindung, Einkommensausfall oder Familienzuwachs. Fazit: so nicht tragbar. Empfehlung: mehr Eigenkapital, längere Laufzeit oder niedrigere Tilgung mit Sondertilgungsrecht, günstigeres Objekt, Förderkredit prüfen."
    },
    {
     "thema": "lf09-k7",
     "operator": "Erläutern",
     "frage": "Erläutern Sie zwei Besonderheiten, die die Sparkasse bei der Finanzierung eines Hauses auf Erbbaugrund beachten muss.",
     "loesung": "1. Restlaufzeit: Das Erbbaurecht muss deutlich länger laufen als das Darlehen getilgt wird, sonst fällt die Sicherheit weg. 2. Zustimmung: Für die Eintragung der Grundschuld im Erbbaugrundbuch ist oft die Zustimmung des Grundstückseigentümers nötig (§ 5 ErbbauRG). Außerdem: Der Erbbauzins belastet die Haushaltsrechnung, und beim Heimfall muss die Grundschuld bestehen bleiben bzw. abgesichert sein."
    }
   ]
  }
 },
 {
  "nr": 10,
  "titel": "Gesamtwirtschaftliche Einflüsse analysieren und beurteilen",
  "std": 80,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: SV 2026, Mindestlohn 13,90 €, EZB-Sätze seit 16.09.2026 (2,65 / 2,90 / 2,50 %), Inflation Euroraum Okt. 2026 4,0 % vorläufig. EZB-Sitzung 29.10.2026: Sätze unverändert. Nächste EZB-Sitzung 17.12.2026. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Geldmengen, Verkehrsgleichung und Giralgeldschöpfung.",
  "kapitel": [
   {
    "id": "lf10-k1",
    "titel": "Wirtschaftspolitische Ziele",
    "ergaenzt": true,
    "erklaert": "Das Stabilitäts- und Wachstumsgesetz von 1967 (§ 1 StabG) nennt vier Ziele, die gleichzeitig erreicht werden sollen. Weil das kaum gelingt, heißt es „magisches Viereck“. Mit gerechter Einkommensverteilung und Umweltschutz wird es zum Sechseck. Zielkonflikt: Preisniveau gegen Beschäftigung, Wachstum gegen Umwelt. Zielharmonie: Wachstum und Beschäftigung.",
    "beispiel": "Der Staat senkt Steuern, um Wachstum und Beschäftigung zu stärken. Die Nachfrage steigt, die Preise auch. Das Ziel Preisniveaustabilität leidet: ein Zielkonflikt.",
    "tabelle": {
     "kopf": [
      "Ziel",
      "Messgröße",
      "Richtwert"
     ],
     "zeilen": [
      [
       "Stabiles Preisniveau",
       "Inflationsrate (HVPI, VPI)",
       "EZB: 2 % mittelfristig"
      ],
      [
       "Hoher Beschäftigungsstand",
       "Arbeitslosenquote",
       "niedrig, kein Wert im Gesetz"
      ],
      [
       "Außenwirtschaftliches Gleichgewicht",
       "Leistungsbilanzsaldo",
       "nahe ausgeglichen"
      ],
      [
       "Stetiges, angemessenes Wachstum",
       "reales BIP, Veränderung zum Vorjahr",
       "kein Wert im Gesetz"
      ],
      [
       "Gerechte Einkommensverteilung (Sechseck)",
       "Lohnquote, Gini-Koeffizient",
       "(politisch)"
      ],
      [
       "Umweltschutz (Sechseck)",
       "Emissionen, Ressourcenverbrauch",
       "(politisch)"
      ]
     ]
    },
    "merksatz": "Vier Ziele im Gesetz, zwei kamen später dazu.",
    "tipp": "Operator „Erläutern“: einen Zielkonflikt immer mit Ursache und Wirkungskette beschreiben.",
    "achtung": "Nur die vier Ziele des Vierecks stehen im StabG."
   },
   {
    "id": "lf10-k2",
    "titel": "Bruttoinlandsprodukt und Wachstum",
    "ergaenzt": true,
    "erklaert": "Das BIP ist der Wert aller Waren und Dienstleistungen, die in einem Jahr im Inland hergestellt werden. Nominal zählt zu aktuellen Preisen, real ist um Preissteigerungen bereinigt. Wachstum misst man am realen BIP. Formel (Verwendung): BIP = Konsum + Investitionen + Staatsausgaben + (Exporte − Importe). BIP gilt für das Inland (Inlandskonzept). Das Bruttonationaleinkommen zählt die Einkommen der Inländer, auch aus dem Ausland (Inländerkonzept).",
    "beispiel": "Verwendungsrechnung in Mrd. €: Konsum 1.000 + Investitionen 300 + Staatsausgaben 400 + Exporte 900 − Importe 800 = BIP 1.800. Steigt das nominale BIP um 5 % und das Preisniveau um 3 %, wächst das reale BIP um rund 2 % (genau 1,05 : 1,03 − 1 = 1,94 %).",
    "tabelle": {
     "kopf": [
      "Sicht",
      "Frage",
      "Inhalt"
     ],
     "zeilen": [
      [
       "Entstehung",
       "Wo wird produziert?",
       "Wertschöpfung der Wirtschaftsbereiche"
      ],
      [
       "Verwendung",
       "Wofür wird es genutzt?",
       "Konsum, Investitionen, Staat, Außenbeitrag"
      ],
      [
       "Verteilung",
       "Wer bekommt das Einkommen?",
       "Arbeitnehmerentgelte, Unternehmens- und Vermögenseinkommen"
      ]
     ]
    },
    "merksatz": "Real ist nominal ohne Inflation.",
    "tipp": "Operator „Ermitteln“: Außenbeitrag zuerst ausrechnen (Exporte minus Importe), dann addieren.",
    "achtung": "Hausarbeit, Ehrenamt und Schwarzarbeit fehlen im BIP. Es ist kein Maß für Wohlstand."
   },
   {
    "id": "lf10-k3",
    "titel": "Preisniveau und Inflation",
    "ergaenzt": true,
    "erklaert": "Inflation heißt: Das Preisniveau steigt dauerhaft, das Geld verliert Kaufkraft. Gemessen wird mit dem Verbraucherpreisindex (Warenkorb, Basisjahr 2020 = 100). Für den Euroraum gilt der harmonisierte Index HVPI. Folgen: Gläubiger und Sparer verlieren, Schuldner gewinnen; Flucht in Sachwerte. Deflation (sinkende Preise) ist ebenfalls gefährlich: Kaufzurückhaltung, sinkende Investitionen. Aktuell (vorläufig): Euroraum im Oktober 2026 4,0 % (HVPI), Deutschland 2,8 %.",
    "beispiel": "Der VPI steigt von 121,0 auf 124,4. Inflationsrate: (124,4 − 121,0) : 121,0 × 100 = 2,81 %. Eine Kundin hat 10.000 € auf dem Tagesgeld zu 2,5 %. Bei 2,8 % Inflation ist ihr Realzins vereinfacht 2,5 % − 2,8 % = −0,3 %: Sie verliert Kaufkraft.",
    "tabelle": {
     "kopf": [
      "Ursache",
      "Erklärung",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Nachfragesog",
       "Nachfrage wächst schneller als das Angebot",
       "Boom, hohe Staatsausgaben"
      ],
      [
       "Kostendruck",
       "höhere Kosten werden weitergegeben",
       "Energie, Löhne"
      ],
      [
       "Gewinndruck",
       "Marktmacht erlaubt höhere Preise",
       "Oligopol"
      ],
      [
       "Importierte Inflation",
       "Importe werden teurer",
       "schwacher Euro, Ölpreis"
      ],
      [
       "Geldmenge",
       "mehr Geld als Güter",
       "sehr lockere Geldpolitik"
      ]
     ]
    },
    "merksatz": "Realzins gleich Nominalzins minus Inflationsrate.",
    "tipp": "Operator „Beurteilen“: bei einer Geldanlage immer den Realzins nennen, nicht nur den Nominalzins.",
    "achtung": "Prozentpunkte und Prozent nicht verwechseln: von 2 % auf 3 % sind 1 Prozentpunkt, aber 50 %."
   },
   {
    "id": "lf10-k4",
    "titel": "Arbeitsmarkt und Arbeitslosigkeit",
    "ergaenzt": true,
    "erklaert": "Die Arbeitslosenquote zeigt den Anteil der Arbeitslosen an allen zivilen Erwerbspersonen. Die Bundesagentur für Arbeit veröffentlicht sie monatlich. Je nach Ursache gibt es vier Arten.",
    "beispiel": "2,9 Mio. Arbeitslose bei 46 Mio. zivilen Erwerbspersonen: 2,9 : 46 × 100 = 6,3 %. Eine Bankkauffrau wechselt im Januar die Stelle und ist drei Wochen ohne Job: friktionelle Arbeitslosigkeit.",
    "tabelle": {
     "kopf": [
      "Art",
      "Ursache",
      "Beispiel",
      "Mittel dagegen"
     ],
     "zeilen": [
      [
       "Friktionell",
       "Stellenwechsel, Suchzeit",
       "Umzug, neuer Job",
       "schnelle Vermittlung"
      ],
      [
       "Saisonal",
       "Jahreszeiten",
       "Bau im Winter, Tourismus",
       "Saison-Kurzarbeitergeld"
      ],
      [
       "Konjunkturell",
       "Abschwung, Nachfrage fehlt",
       "Rezession",
       "Konjunkturpolitik, Kurzarbeit"
      ],
      [
       "Strukturell",
       "Wandel von Branchen und Technik",
       "Filialschließungen durch Online-Banking",
       "Umschulung, Weiterbildung"
      ]
     ]
    },
    "merksatz": "Kurz und normal (friktionell, saisonal) oder lang und ernst (konjunkturell, strukturell).",
    "tipp": "Operator „Zuordnen“: aus der Fallbeschreibung die Ursache herauslesen, nicht die Branche.",
    "achtung": "Strukturelle Arbeitslosigkeit verschwindet nicht im Aufschwung."
   },
   {
    "id": "lf10-k5",
    "titel": "Konjunktur",
    "ergaenzt": true,
    "erklaert": "Konjunktur sind die Schwankungen der Wirtschaftstätigkeit um den langfristigen Trend. Ein Zyklus hat vier Phasen. Indikatoren zeigen früh, gleichzeitig oder spät, wo die Wirtschaft steht. Frühindikatoren: ifo-Geschäftsklima, ZEW-Konjunkturerwartungen, Auftragseingänge. Gleichlaufend: Produktion, Kapazitätsauslastung, BIP. Spätindikatoren: Arbeitslosenquote, Inflationsrate, Tarifabschlüsse.",
    "beispiel": "Das reale BIP sinkt im zweiten Quartal um 0,2 % und im dritten um 0,1 % zum Vorquartal. Zwei Quartale nacheinander mit Minus: technische Rezession. Steigt dann der ifo-Geschäftsklimaindex, deutet das auf einen Aufschwung hin.",
    "tabelle": {
     "kopf": [
      "Phase",
      "Produktion, Auslastung",
      "Beschäftigung",
      "Preise, Zinsen",
      "Stimmung"
     ],
     "zeilen": [
      [
       "Aufschwung (Expansion)",
       "steigt",
       "steigt langsam",
       "eher stabil",
       "optimistisch"
      ],
      [
       "Hochkonjunktur (Boom)",
       "sehr hoch",
       "Vollbeschäftigung",
       "steigen stark",
       "überschwänglich"
      ],
      [
       "Abschwung (Rezession)",
       "sinkt",
       "sinkt",
       "steigen noch, dann langsamer",
       "pessimistisch"
      ],
      [
       "Tiefstand (Depression)",
       "niedrig",
       "hohe Arbeitslosigkeit",
       "niedrig",
       "gedrückt"
      ]
     ]
    },
    "merksatz": "Aufträge kommen zuerst, Arbeitslose gehen zuletzt.",
    "tipp": "Operator „Begründen“: Phase immer mit zwei Indikatoren belegen.",
    "achtung": "Die Arbeitslosenquote ist ein Spätindikator, sie eignet sich nicht für eine Prognose."
   },
   {
    "id": "lf10-k6",
    "titel": "Fiskalpolitik des Staates",
    "ergaenzt": true,
    "erklaert": "Der Staat steuert die Konjunktur über Einnahmen und Ausgaben. Nachfrageorientiert (nach Keynes) handelt er antizyklisch: im Abschwung mehr ausgeben, im Boom sparen. Angebotsorientiert verbessert er dauerhaft die Bedingungen für Unternehmen. Grenzen: Zeitverzögerung, Schulden werden im Boom selten abgebaut, Schuldenbremse (Art. 109 und 115 GG): Der Bund darf strukturell höchstens 0,35 % des BIP neue Schulden machen. Seit der Grundgesetzänderung von 2025 sind Verteidigungsausgaben über 1 % des BIP ausgenommen, dazu kommt ein Sondervermögen Infrastruktur von 500 Mrd. €.",
    "beispiel": "In der Rezession legt der Bund ein Investitionsprogramm über 20 Mrd. € auf und finanziert es mit Krediten (Deficit Spending). Im Boom soll er Schulden tilgen oder eine Konjunkturausgleichsrücklage bilden.",
    "tabelle": {
     "kopf": [
      "Lage",
      "Ausgaben",
      "Steuern",
      "Ziel"
     ],
     "zeilen": [
      [
       "Abschwung",
       "erhöhen",
       "senken",
       "Nachfrage stärken"
      ],
      [
       "Boom",
       "senken",
       "erhöhen, Rücklage bilden",
       "Nachfrage dämpfen, Inflation bremsen"
      ]
     ]
    },
    "merksatz": "Antizyklisch heißt gegen den Strom: in schlechten Zeiten geben, in guten Zeiten nehmen.",
    "tipp": "Operator „Beurteilen“: Maßnahme nennen, Wirkungskette zeigen, dann eine Grenze nennen.",
    "achtung": "Prozyklisch (im Boom noch mehr ausgeben) verstärkt die Schwankungen."
   },
   {
    "id": "lf10-k7",
    "titel": "Geldpolitik der EZB",
    "ergaenzt": true,
    "erklaert": "Die Europäische Zentralbank ist unabhängig und hat ein Hauptziel: Preisstabilität, also 2 % Inflation mittelfristig. Sie steuert über die Leitzinsen, zu denen sich Banken bei ihr Geld leihen oder anlegen. Der EZB-Rat (Direktorium plus Präsidenten der nationalen Zentralbanken) entscheidet. Verlauf 2026: Erhöhung um je 0,25 Prozentpunkte am 11.06. (wirksam 17.06.) und am 10.09. (wirksam 16.09.), am 29.10. unverändert. Nächste Sitzung: 17.12.2026.",
    "beispiel": "Deine Sparkasse leiht sich 10 Mio. € über das Hauptrefinanzierungsgeschäft für 7 Tage zu 2,65 %. Zinsen: 10.000.000 × 2,65 % × 7 : 360 = 5.152,78 €. Steigt der Satz, wird Geld für Banken teurer, sie erhöhen ihre Kreditzinsen, Kunden fragen weniger Kredit nach, die Inflation sinkt.",
    "tabelle": {
     "kopf": [
      "Instrument",
      "Zweck",
      "Satz (seit 16.09.2026)"
     ],
     "zeilen": [
      [
       "Hauptrefinanzierungsgeschäft (Offenmarktgeschäft)",
       "wöchentliche Liquidität, 1 Woche Laufzeit",
       "2,65 %"
      ],
      [
       "Spitzenrefinanzierungsfazilität (ständige Fazilität)",
       "über Nacht Geld leihen, Obergrenze",
       "2,90 %"
      ],
      [
       "Einlagefazilität (ständige Fazilität)",
       "über Nacht Geld anlegen, Untergrenze",
       "2,50 %"
      ],
      [
       "Längerfristige Refinanzierung",
       "3 Monate Laufzeit",
       "(Tender)"
      ],
      [
       "Mindestreserve",
       "Pflichtguthaben bestimmter Einlagen, unverzinst",
       "1 %"
      ]
     ]
    },
    "merksatz": "Zinsen hoch bremst (restriktiv), Zinsen runter gibt Gas (expansiv).",
    "tipp": "Operator „Erläutern“: die Wirkungskette von der EZB über die Bank zum Kunden bis zum Preisniveau Schritt für Schritt aufschreiben.",
    "achtung": "Der wichtigste Satz für die Steuerung ist heute die Einlagefazilität, weil Banken sehr viel überschüssige Liquidität haben. In Medien heißt oft der Hauptrefinanzierungssatz „Leitzins“."
   },
   {
    "id": "lf10-k8",
    "titel": "Außenwirtschaft und Wechselkurse",
    "ergaenzt": true,
    "erklaert": "Die Zahlungsbilanz erfasst alle Geschäfte zwischen Inland und Ausland. Der Wechselkurs ist der Preis einer Währung in einer anderen. Im Euroraum gilt die Mengennotierung: 1 € = x Fremdwährung. Wertet der Euro auf (z. B. 1,10 auf 1,20 USD), werden Importe billiger und Exporte teurer, das dämpft die Inflation und belastet die Exportwirtschaft. Wertet er ab, ist es umgekehrt (importierte Inflation, Export wird gestützt). Einflussfaktoren auf den Kurs: Zinsunterschiede, Inflation, Leistungsbilanz, Erwartungen und Spekulation.",
    "beispiel": "Ein Importeur zahlt eine Rechnung über 10.000 USD. Bei 1 € = 1,10 USD kostet sie 10.000 : 1,10 = 9.090,91 €. Wertet der Euro auf 1,20 auf, kostet sie nur 8.333,33 €. Ein Exporteur, der eine Maschine für 50.000 € verkauft, wird für US-Kunden teurer: Bei 1,10 kostet sie 55.000 USD, bei 1,20 schon 60.000 USD.",
    "tabelle": {
     "kopf": [
      "Teilbilanz",
      "Inhalt"
     ],
     "zeilen": [
      [
       "Leistungsbilanz",
       "Warenhandel, Dienstleistungen, Primäreinkommen (Zinsen, Gewinne, Löhne), Sekundäreinkommen (Überweisungen, EU-Beiträge)"
      ],
      [
       "Vermögensänderungsbilanz",
       "Schuldenerlasse, Erbschaften, Verkauf immaterieller Rechte"
      ],
      [
       "Kapitalbilanz",
       "Direktinvestitionen, Wertpapiere, Kredite, Währungsreserven"
      ],
      [
       "Restposten",
       "statistische Differenz"
      ]
     ]
    },
    "merksatz": "Starker Euro, billiger Urlaub in den USA, schwerer Export.",
    "tipp": "Operator „Ermitteln“: In der Mengennotierung Fremdwährung durch Kurs teilen, um Euro zu bekommen.",
    "achtung": "Ein höherer Kurs in der Mengennotierung heißt: Der Euro ist mehr wert (Aufwertung)."
   },
   {
    "id": "lf10-k9",
    "titel": "Geldmengen, Verkehrsgleichung und Giralgeldschöpfung",
    "erklaert": "Die EZB misst die Geldmenge in drei Stufen: M1 ist Bargeld plus täglich fällige Einlagen. M2 enthält zusätzlich Einlagen mit Laufzeit bis 2 Jahre und mit Kündigungsfrist bis 3 Monate. M3 enthält zusätzlich Repogeschäfte, Geldmarktfondsanteile und Schuldverschreibungen bis 2 Jahre. Die Verkehrsgleichung von Fisher verbindet Geld und Preise: Geldmenge · Umlaufgeschwindigkeit = Handelsvolumen · Preisniveau. Wächst die Geldmenge schneller als die Gütermenge, steigt bei gleicher Umlaufgeschwindigkeit das Preisniveau. Banken schaffen selbst Geld: Vergibt eine Bank einen Kredit, schreibt sie ihn dem Kunden als Sichteinlage gut. Diese Giralgeldschöpfung wird begrenzt durch die Mindestreserve (1 % bestimmter Einlagen), die Barabhebungen der Kunden und die Kreditnachfrage.",
    "beispiel": "Ein Kunde zahlt 10.000 € bar bei Bank A ein. Mindestreserve 1 % = 100 €, Bank A kann 9.900 € Kredit geben. Der Kreditnehmer hebt 20 % bar ab (1.980 €), 7.920 € landen bei Bank B. Bank B hält 79,20 € Reserve und gibt 7.840,80 € Kredit, und so weiter. Insgesamt können alle Banken zusammen 9.900 : (1 − 0,8 · 0,99) = 9.900 : 0,208 = 47.596,15 € Kredit schaffen.",
    "tabelle": {
     "kopf": [
      "Begriff",
      "Inhalt"
     ],
     "zeilen": [
      [
       "M1",
       "Bargeldumlauf + täglich fällige Einlagen (Sichteinlagen)"
      ],
      [
       "M2",
       "M1 + Einlagen mit Laufzeit bis 2 Jahre + Einlagen mit Kündigungsfrist bis 3 Monate"
      ],
      [
       "M3",
       "M2 + Repogeschäfte + Geldmarktfondsanteile + Schuldverschreibungen bis 2 Jahre"
      ],
      [
       "Verkehrsgleichung",
       "G · U = H · P (Geldmenge · Umlaufgeschwindigkeit = Handelsvolumen · Preisniveau)"
      ],
      [
       "Zentralbankgeld",
       "Bargeld + Guthaben der Banken bei der Zentralbank, schafft nur das Eurosystem"
      ],
      [
       "Giralgeld (Buchgeld)",
       "Sichtguthaben bei Banken, entsteht durch Kredit, Wertpapierankauf oder Bareinzahlung"
      ],
      [
       "Grenzen der Giralgeldschöpfung",
       "Mindestreserve, Barabzugsquote, Kreditnachfrage, Eigenkapitalvorschriften"
      ]
     ]
    },
    "merksatz": "**Kredit schafft Einlage**: Jeder neue Kredit erhöht die Geldmenge.",
    "tipp": "Operator „Erläutern“ zur Verkehrsgleichung: Gleichung nennen, eine Größe ändern, die anderen konstant halten und die Wirkung auf das Preisniveau ableiten.",
    "achtung": "Die Formel für den Geldschöpfungsmultiplikator ist im Unterricht oft etwas anders aufgebaut. Lerne den Rechenweg Schritt für Schritt, dann passt es zu jeder Form. Die Mindestreserve wird seit 2023 nicht mehr verzinst.",
    "ergaenzt": true
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf10-k1",
     "vorne": "Die vier Ziele des magischen Vierecks?",
     "hinten": "Stabiles Preisniveau, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum (§ 1 StabG)."
    },
    {
     "thema": "lf10-k2",
     "vorne": "Unterschied nominales und reales BIP?",
     "hinten": "Nominal zu aktuellen Preisen, real um Preisänderungen bereinigt. Wachstum wird am realen BIP gemessen."
    },
    {
     "thema": "lf10-k3",
     "vorne": "Formel für den (vereinfachten) Realzins?",
     "hinten": "Realzins = Nominalzins − Inflationsrate."
    },
    {
     "thema": "lf10-k3",
     "vorne": "Wer gewinnt, wer verliert bei Inflation?",
     "hinten": "Schuldner gewinnen, Gläubiger und Sparer verlieren (Geld verliert Kaufkraft)."
    },
    {
     "thema": "lf10-k4",
     "vorne": "Vier Arten der Arbeitslosigkeit?",
     "hinten": "Friktionell, saisonal, konjunkturell, strukturell."
    },
    {
     "thema": "lf10-k5",
     "vorne": "Drei Frühindikatoren der Konjunktur?",
     "hinten": "ifo-Geschäftsklimaindex, ZEW-Konjunkturerwartungen, Auftragseingänge."
    },
    {
     "thema": "lf10-k5",
     "vorne": "Was ist eine technische Rezession?",
     "hinten": "Das reale BIP sinkt in zwei aufeinanderfolgenden Quartalen gegenüber dem Vorquartal."
    },
    {
     "thema": "lf10-k6",
     "vorne": "Was heißt antizyklische Fiskalpolitik?",
     "hinten": "Im Abschwung Ausgaben erhöhen und Steuern senken, im Boom Ausgaben senken und Rücklagen bilden (Keynes)."
    },
    {
     "thema": "lf10-k7",
     "vorne": "Die drei EZB-Leitzinsen seit 16.09.2026?",
     "hinten": "Hauptrefinanzierung 2,65 %, Spitzenrefinanzierung 2,90 %, Einlagefazilität 2,50 %."
    },
    {
     "thema": "lf10-k8",
     "vorne": "Was bewirkt eine Aufwertung des Euro?",
     "hinten": "Importe werden billiger, Exporte teurer; die Inflation wird gedämpft, die Exportwirtschaft belastet."
    },
    {
     "thema": "lf10-k9",
     "vorne": "Verkehrsgleichung nach Fisher?",
     "hinten": "G · U = H · P: Geldmenge · Umlaufgeschwindigkeit = Handelsvolumen · Preisniveau."
    },
    {
     "thema": "lf10-k9",
     "vorne": "Was gehört zu M1?",
     "hinten": "Bargeldumlauf und täglich fällige Einlagen."
    },
    {
     "thema": "lf10-k9",
     "vorne": "Was begrenzt die Giralgeldschöpfung?",
     "hinten": "Mindestreserve, Barabhebungen der Kunden, Kreditnachfrage und Eigenkapitalvorschriften."
    }
   ],
   "mc": [
    {
     "thema": "lf10-k1",
     "operator": "Zuordnen",
     "frage": "Welches Ziel steht NICHT im Stabilitäts- und Wachstumsgesetz?",
     "optionen": [
      "Stabilität des Preisniveaus",
      "Hoher Beschäftigungsstand",
      "Gerechte Einkommensverteilung",
      "Außenwirtschaftliches Gleichgewicht"
     ],
     "richtig": 2,
     "erklaerung": "Gerechte Einkommensverteilung und Umweltschutz ergänzen das Viereck zum Sechseck, stehen aber nicht in § 1 StabG."
    },
    {
     "thema": "lf10-k4",
     "operator": "Zuordnen",
     "frage": "Durch Online-Banking schließen viele Filialen, Kassierer finden keine neue Stelle. Welche Art von Arbeitslosigkeit liegt vor?",
     "optionen": [
      "friktionell",
      "saisonal",
      "konjunkturell",
      "strukturell"
     ],
     "richtig": 3,
     "erklaerung": "Dauerhafter technischer Wandel einer Branche = strukturelle Arbeitslosigkeit."
    },
    {
     "thema": "lf10-k5",
     "operator": "Zuordnen",
     "frage": "Welcher Indikator ist ein Spätindikator?",
     "optionen": [
      "ifo-Geschäftsklimaindex",
      "Auftragseingänge der Industrie",
      "Arbeitslosenquote",
      "ZEW-Konjunkturerwartungen"
     ],
     "richtig": 2,
     "erklaerung": "Unternehmen stellen erst spät ein oder entlassen spät; die Arbeitslosenquote läuft der Konjunktur hinterher."
    },
    {
     "thema": "lf10-k7",
     "operator": "Beurteilen",
     "frage": "Die EZB erhöht die Leitzinsen. Welche Wirkung ist zu erwarten?",
     "optionen": [
      "Kredite werden billiger, die Nachfrage steigt",
      "Kredite werden teurer, die Nachfrage und der Preisauftrieb sinken",
      "Der Euro wertet ab",
      "Die Sparzinsen sinken"
     ],
     "richtig": 1,
     "erklaerung": "Restriktive Geldpolitik: höhere Refinanzierungskosten, höhere Kreditzinsen, weniger Nachfrage, sinkende Inflation. Eher wertet der Euro auf."
    },
    {
     "thema": "lf10-k7",
     "operator": "Nennen",
     "frage": "Welcher EZB-Satz bildet die Untergrenze für den Tagesgeldsatz am Geldmarkt?",
     "optionen": [
      "Hauptrefinanzierungssatz",
      "Spitzenrefinanzierungssatz",
      "Einlagesatz",
      "Mindestreservesatz"
     ],
     "richtig": 2,
     "erklaerung": "Die Einlagefazilität (2,50 % seit 16.09.2026) ist die Untergrenze, die Spitzenrefinanzierung die Obergrenze."
    },
    {
     "thema": "lf10-k8",
     "operator": "Beurteilen",
     "frage": "Der Kurs ändert sich von 1 € = 1,15 USD auf 1 € = 1,05 USD. Wie wirkt sich das auf einen deutschen Exporteur aus?",
     "optionen": [
      "Seine Waren werden in den USA teurer",
      "Seine Waren werden in den USA billiger",
      "Keine Wirkung",
      "Er muss mehr Zoll zahlen"
     ],
     "richtig": 1,
     "erklaerung": "Der Euro wertet ab. US-Kunden brauchen weniger Dollar für dieselbe Euro-Rechnung, der Export wird gestützt."
    },
    {
     "thema": "lf10-k9",
     "operator": "Beurteilen",
     "frage": "Die Geldmenge steigt um 8 %, Umlaufgeschwindigkeit und Handelsvolumen bleiben gleich. Was folgt nach der Verkehrsgleichung?",
     "optionen": [
      "Das Preisniveau sinkt um 8 %",
      "Das Preisniveau steigt um 8 %",
      "Das Handelsvolumen steigt um 8 %",
      "Keine Wirkung"
     ],
     "richtig": 1,
     "erklaerung": "G · U = H · P. Steigt G bei konstantem U und H, muss P im gleichen Verhältnis steigen."
    },
    {
     "thema": "lf10-k9",
     "operator": "Zuordnen",
     "frage": "Zu welcher Geldmenge gehört ein Festgeld mit 1 Jahr Laufzeit erstmals?",
     "optionen": [
      "M1",
      "M2",
      "M3",
      "zu keiner"
     ],
     "richtig": 1,
     "erklaerung": "Einlagen mit vereinbarter Laufzeit bis 2 Jahre gehören zu M2 (und damit auch zu M3), nicht zu M1."
    }
   ],
   "rechnen": [
    {
     "thema": "lf10-k3",
     "operator": "Ermitteln",
     "frage": "Der Verbraucherpreisindex steigt von 118,5 auf 122,0. Ermitteln Sie die Inflationsrate in Prozent (2 Nachkommastellen).",
     "ergebnis": 2.95,
     "einheit": "%",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "(122,0 − 118,5) : 118,5 × 100 = 3,5 : 118,5 × 100 = 2,95 %."
    },
    {
     "thema": "lf10-k3",
     "operator": "Ermitteln",
     "frage": "Ein Sparbrief bringt 3,2 % Zinsen, die Inflationsrate liegt bei 4,0 %. Ermitteln Sie den vereinfachten Realzins.",
     "ergebnis": -0.8,
     "einheit": "%",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Realzins = 3,2 % − 4,0 % = −0,8 %."
    },
    {
     "thema": "lf10-k2",
     "operator": "Ermitteln",
     "frage": "Konsum 1.250 Mrd. €, Investitionen 420 Mrd. €, Staatsausgaben 560 Mrd. €, Exporte 1.180 Mrd. €, Importe 1.050 Mrd. €. Ermitteln Sie das BIP in Mrd. €.",
     "ergebnis": 2360,
     "einheit": "Mrd. €",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Außenbeitrag 1.180 − 1.050 = 130. BIP = 1.250 + 420 + 560 + 130 = 2.360 Mrd. €."
    },
    {
     "thema": "lf10-k4",
     "operator": "Ermitteln",
     "frage": "3,1 Mio. Arbeitslose, 45,8 Mio. zivile Erwerbspersonen. Ermitteln Sie die Arbeitslosenquote (1 Nachkommastelle).",
     "ergebnis": 6.8,
     "einheit": "%",
     "toleranz": 0.05,
     "ergaenzt": true,
     "weg": "3,1 : 45,8 × 100 = 6,77 %, gerundet 6,8 %."
    },
    {
     "thema": "lf10-k7",
     "operator": "Ermitteln",
     "frage": "Eine Bank leiht sich 25 Mio. € für 7 Tage über das Hauptrefinanzierungsgeschäft zu 2,65 %. Ermitteln Sie die Zinsen (act/360).",
     "ergebnis": 12881.94,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "25.000.000 · 2,65 % · 7 : 360 = 12.881,94 €."
    },
    {
     "thema": "lf10-k8",
     "operator": "Ermitteln",
     "frage": "Ein Importeur muss 24.000 USD bezahlen. Kurs: 1 € = 1,0850 USD. Ermitteln Sie den Betrag in Euro.",
     "ergebnis": 22119.82,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Mengennotierung: 24.000 : 1,0850 = 22.119,82 €."
    },
    {
     "thema": "lf10-k9",
     "operator": "Ermitteln",
     "frage": "Geldmenge 800 Mrd. €, Umlaufgeschwindigkeit 3, Handelsvolumen 2.000 Mrd. Einheiten. Die Geldmenge steigt um 10 %, alles andere bleibt gleich. Ermitteln Sie das neue Preisniveau.",
     "ergebnis": 1.32,
     "einheit": "",
     "toleranz": 0.005,
     "ergaenzt": true,
     "weg": "Vorher P = 800 · 3 : 2.000 = 1,20. Neue Geldmenge 880 Mrd. €: P = 880 · 3 : 2.000 = 1,32."
    },
    {
     "thema": "lf10-k9",
     "operator": "Ermitteln",
     "frage": "Bareinzahlung 50.000 € bei Bank A. Mindestreserve 1 %, die Kunden heben von jedem Kredit 10 % bar ab. Ermitteln Sie die maximale Kreditschöpfung aller Banken zusammen.",
     "ergebnis": 454128.44,
     "einheit": "€",
     "toleranz": 1,
     "ergaenzt": true,
     "weg": "Bank A darf 50.000 − 1 % = 49.500 € ausleihen. Von jedem Kredit kommen 90 % als Einlage zurück, davon sind 99 % ausleihbar: Faktor 0,9 · 0,99 = 0,891. Summe: 49.500 : (1 − 0,891) = 49.500 : 0,109 = 454.128,44 €."
    }
   ],
   "frei": [
    {
     "thema": "lf10-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie einen Zielkonflikt im magischen Viereck.",
     "loesung": "Preisniveaustabilität und hoher Beschäftigungsstand: Um die Beschäftigung zu erhöhen, stärkt der Staat die Nachfrage (z. B. Steuersenkung, Ausgabenprogramm). Unternehmen produzieren mehr und stellen ein, die höhere Nachfrage erlaubt aber auch Preissteigerungen. Damit gefährdet die Förderung der Beschäftigung die Preisniveaustabilität."
    },
    {
     "thema": "lf10-k7",
     "operator": "Erläutern",
     "frage": "Erläutern Sie die Wirkung einer Leitzinssenkung der EZB auf Kreditnachfrage und Preisniveau.",
     "loesung": "Banken refinanzieren sich günstiger bei der EZB und geben das über niedrigere Kreditzinsen weiter. Kredite für Konsum und Investitionen werden attraktiver, die Kreditnachfrage steigt. Die gesamtwirtschaftliche Nachfrage wächst, Produktion und Beschäftigung steigen, mittelfristig steigt auch das Preisniveau (expansive Geldpolitik)."
    },
    {
     "thema": "lf10-k6",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie antizyklische Fiskalpolitik.",
     "loesung": "Vorteil: Sie kann Konjunkturschwankungen glätten, im Abschwung Nachfrage und Beschäftigung stützen. Nachteile: Entscheidungen und Wirkung kommen oft zu spät (Zeitverzögerung), die Maßnahmen wirken dann prozyklisch; im Boom werden Schulden selten abgebaut, die Staatsverschuldung steigt; die Schuldenbremse begrenzt den Spielraum. Fazit: sinnvoll, wenn rechtzeitig und zeitlich begrenzt eingesetzt."
    },
    {
     "thema": "lf10-k9",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, wie eine Sparkasse durch Kreditvergabe Giralgeld schafft und was diesen Vorgang begrenzt.",
     "loesung": "Bewilligt die Sparkasse einen Kredit, schreibt sie den Betrag dem Girokonto des Kunden gut. Damit entsteht neues Sichtguthaben (Giralgeld), ohne dass jemand anderem Geld fehlt. Überweist der Kunde weiter, entsteht bei der Empfängerbank eine Einlage, die wieder als Kredit ausgeliehen werden kann. Grenzen: Die Bank muss 1 % Mindestreserve in Zentralbankgeld halten, Kunden heben einen Teil bar ab (Abfluss von Zentralbankgeld), die Kreditnachfrage und die Eigenkapitalvorschriften begrenzen das Volumen."
    }
   ]
  }
 },
 {
  "nr": 11,
  "titel": "Wertschöpfungsprozesse erfolgsorientiert steuern",
  "std": 80,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Stand 09.11.2026: GWG-Grenze 800 €, CRR-Mindestquoten. Antizyklischer Puffer und Systemrisikopuffer nicht eingetragen. Ergänzt am 11.11.2026 nach dem sächsischen Lehrplan Bankkaufleute (2020): Kosten- und Erlösrechnung: Abgrenzung und kalkulatorische Kosten, Kostenarten und Deckungsbeitragsrechnung, Gesamtbetriebskalkulation, Investitionsentscheidungen.",
  "kapitel": [
   {
    "id": "lf11-k1",
    "titel": "Marktzinsmethode",
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
    "id": "lf11-k2",
    "titel": "Kosten und Nettomarge",
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
    "id": "lf11-k3",
    "titel": "Banksteuerung: Kennzahlen und Eigenmittel",
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
    "id": "lf11-k4",
    "titel": "Risikokosten im Kreditgeschäft",
    "ergaenzt": true,
    "erklaert": "Mancher Kredit wird nicht zurückgezahlt. Diese erwarteten Verluste rechnet die Bank vorab als Standardrisikokosten in den Kreditzins ein. Dafür braucht sie drei Größen: wie viel offen ist, wenn der Kunde ausfällt, wie wahrscheinlich ein Ausfall ist und welcher Teil dann verloren geht.",
    "beispiel": "Kredit 100.000 €. Ausfallwahrscheinlichkeit 1,2 % pro Jahr laut Rating. Verlust bei Ausfall 40 %, weil Sicherheiten den Rest decken. Erwarteter Verlust: 100.000 · 1,2 % · 40 % = 480 € im Jahr, das sind 0,48 % des Kredits.",
    "tabelle": {
     "kopf": [
      "Größe",
      "Abkürzung",
      "Bedeutung"
     ],
     "zeilen": [
      [
       "offener Betrag bei Ausfall",
       "EAD",
       "Exposure at Default"
      ],
      [
       "Ausfallwahrscheinlichkeit",
       "PD",
       "Probability of Default, aus dem Rating"
      ],
      [
       "Verlustquote",
       "LGD",
       "Loss Given Default, sinkt mit Sicherheiten"
      ],
      [
       "erwarteter Verlust",
       "EL",
       "EL = EAD · PD · LGD"
      ]
     ]
    },
    "merksatz": "**EL = EAD · PD · LGD**",
    "tipp": "Operator „Erläutern“: Sag, warum bessere Sicherheiten den Zins senken: Sie senken die LGD und damit die Risikokosten.",
    "achtung": "Standardrisikokosten decken nur den erwarteten Verlust. Für unerwartete Verluste braucht die Bank Eigenkapital."
   },
   {
    "id": "lf11-k5",
    "titel": "Kosten- und Erlösrechnung: Abgrenzung und kalkulatorische Kosten",
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
    "id": "lf11-k6",
    "titel": "Kostenarten und Deckungsbeitragsrechnung",
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
    "id": "lf11-k7",
    "titel": "Gesamtbetriebskalkulation",
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
    "id": "lf11-k8",
    "titel": "Investitionsentscheidungen",
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
     "thema": "lf11-k1",
     "vorne": "Formel Konditionsbeitrag Aktiv?",
     "hinten": "(Kreditzins − GKM-Zins gleicher Laufzeit) · Volumen."
    },
    {
     "thema": "lf11-k1",
     "vorne": "Formel Konditionsbeitrag Passiv?",
     "hinten": "(GKM-Zins − Einlagenzins) · Volumen."
    },
    {
     "thema": "lf11-k1",
     "vorne": "Woraus entsteht der Strukturbeitrag?",
     "hinten": "Aus der Fristentransformation, verantwortet von der Gesamtbanksteuerung."
    },
    {
     "thema": "lf11-k2",
     "vorne": "Formel Nettomarge?",
     "hinten": "Konditionsbeitrag − Standardrisikokosten − Standardbetriebskosten."
    },
    {
     "thema": "lf11-k3",
     "vorne": "Formel Cost-Income-Ratio?",
     "hinten": "Verwaltungsaufwand : ordentliche Erträge (Zins- + Provisionsüberschuss + sonstige) · 100."
    },
    {
     "thema": "lf11-k3",
     "vorne": "Mindest-Gesamtkapitalquote nach CRR?",
     "hinten": "8 % der risikogewichteten Aktiva."
    },
    {
     "thema": "lf11-k4",
     "vorne": "Formel für den erwarteten Verlust?",
     "hinten": "EL = EAD · PD · LGD"
    },
    {
     "thema": "lf11-k4",
     "vorne": "Wodurch sinkt die LGD?",
     "hinten": "Durch werthaltige Sicherheiten."
    },
    {
     "thema": "lf11-k5",
     "vorne": "Was sind Zusatzkosten? Beispiel?",
     "hinten": "Kosten ohne Aufwand in der GuV, z. B. kalkulatorische Miete für eigene Räume, kalkulatorische Eigenkapitalzinsen."
    },
    {
     "thema": "lf11-k5",
     "vorne": "Was sind Anderskosten? Beispiel?",
     "hinten": "Kosten in anderer Höhe als der Aufwand, z. B. kalkulatorische Abschreibung vom Wiederbeschaffungswert."
    },
    {
     "thema": "lf11-k5",
     "vorne": "Drei Arten neutralen Aufwands?",
     "hinten": "betriebsfremd (Spende), periodenfremd (Nachzahlung Vorjahr), außerordentlich (Brandschaden)."
    },
    {
     "thema": "lf11-k6",
     "vorne": "Formel Gewinnschwelle (Break-even)?",
     "hinten": "Fixkosten : Deckungsbeitrag je Stück (Erlös − variable Stückkosten)."
    },
    {
     "thema": "lf11-k6",
     "vorne": "Was ist Fixkostendegression?",
     "hinten": "Mit steigender Menge sinken die fixen Kosten je Leistung."
    },
    {
     "thema": "lf11-k7",
     "vorne": "Formel Nettobedarfsspanne?",
     "hinten": "Bruttobedarfsspanne − Provisionsspanne."
    },
    {
     "thema": "lf11-k7",
     "vorne": "Formel Bruttogewinnspanne?",
     "hinten": "Zinsspanne − Nettobedarfsspanne (= Betriebsergebnis vor Bewertung in % des Geschäftsvolumens)."
    },
    {
     "thema": "lf11-k8",
     "vorne": "Formel Amortisationszeit?",
     "hinten": "Anschaffungskosten : (Gewinn + Abschreibung) im Jahr."
    },
    {
     "thema": "lf11-k8",
     "vorne": "Formel kritische Menge?",
     "hinten": "Differenz der Fixkosten : Differenz der variablen Stückkosten."
    }
   ],
   "mc": [
    {
     "thema": "lf11-k1",
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
     "thema": "lf11-k3",
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
     "thema": "lf11-k5",
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
     "thema": "lf11-k6",
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
     "thema": "lf11-k7",
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
     "thema": "lf11-k1",
     "operator": "Ermitteln",
     "frage": "Kredit 80.000 € zu 6,1 %, GKM-Zins gleicher Laufzeit 3,6 %. Ermitteln Sie den Konditionsbeitrag.",
     "ergebnis": 2000,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "(6,1 − 3,6) % = 2,5 %. 80.000 · 2,5 % = 2.000 €."
    },
    {
     "thema": "lf11-k1",
     "operator": "Ermitteln",
     "frage": "Festgeld 60.000 € zu 2,1 %, GKM-Zins gleicher Laufzeit 2,7 %. Ermitteln Sie den Konditionsbeitrag Passiv.",
     "ergebnis": 360,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "(2,7 − 2,1) % = 0,6 %. 60.000 · 0,6 % = 360 €."
    },
    {
     "thema": "lf11-k2",
     "operator": "Ermitteln",
     "frage": "Konditionsbeitrag 2.000 €, Standardrisikokosten 0,5 % von 80.000 €, Standardbetriebskosten 420 €. Ermitteln Sie die Nettomarge.",
     "ergebnis": 1180,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Risikokosten 400 €. 2.000 − 400 − 420 = 1.180 €."
    },
    {
     "thema": "lf11-k3",
     "operator": "Ermitteln",
     "frage": "Verwaltungsaufwand 48 Mio. €, Zinsüberschuss 55 Mio. €, Provisionsüberschuss 25 Mio. €. Ermitteln Sie die CIR.",
     "ergebnis": 60,
     "einheit": "%",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "48 : (55 + 25) · 100 = 48 : 80 · 100 = 60 %."
    },
    {
     "thema": "lf11-k3",
     "operator": "Ermitteln",
     "frage": "Risikogewichtete Aktiva 800 Mio. €. Wie viel Eigenmittel braucht die Bank mindestens inklusive Kapitalerhaltungspuffer (8 % + 2,5 %)?",
     "ergebnis": 84,
     "einheit": "Mio. €",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "800 · 10,5 % = 84 Mio. €."
    },
    {
     "thema": "lf11-k4",
     "operator": "Ermitteln",
     "frage": "Kredit 100.000 €, PD 1,2 %, LGD 40 %. Ermitteln Sie die Standardrisikokosten pro Jahr.",
     "ergebnis": 480,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "EL = 100.000 · 0,012 · 0,40 = 480 €"
    },
    {
     "thema": "lf11-k5",
     "operator": "Ermitteln",
     "frage": "GuV: Personalaufwand 1.800.000 €, Sachaufwand 700.000 €, bilanzielle Abschreibung 150.000 €, Spende 4.000 €. Kalkulatorisch: Abschreibung 175.000 €, Miete eigenes Gebäude 90.000 €. Ermitteln Sie die Kosten.",
     "ergebnis": 2765000,
     "einheit": "€",
     "toleranz": 1,
     "ergaenzt": true,
     "weg": "Grundkosten 1.800.000 + 700.000 = 2.500.000 €. Anderskosten statt bilanzieller Abschreibung: 175.000 €. Zusatzkosten Miete 90.000 €. Spende ist neutral. Kosten: 2.500.000 + 175.000 + 90.000 = 2.765.000 €."
    },
    {
     "thema": "lf11-k6",
     "operator": "Ermitteln",
     "frage": "Ein Kontoauszugsdrucker hat 9.000 € Fixkosten im Jahr, variable Kosten 0,05 € je Auszug. Die Sparkasse berechnet Firmenkunden 0,50 € je Auszug. Ab wie vielen Auszügen sind die Fixkosten gedeckt?",
     "ergebnis": 20000,
     "einheit": "Auszüge",
     "toleranz": 0,
     "ergaenzt": true,
     "weg": "Deckungsbeitrag je Auszug 0,50 − 0,05 = 0,45 €. Gewinnschwelle 9.000 : 0,45 = 20.000 Auszüge."
    },
    {
     "thema": "lf11-k7",
     "operator": "Ermitteln",
     "frage": "Durchschnittliches Geschäftsvolumen 1.500 Mio. €, Zinsüberschuss 33 Mio. €, Provisionsüberschuss 12 Mio. €, Verwaltungsaufwand 30 Mio. €. Ermitteln Sie die Bruttogewinnspanne in Prozent.",
     "ergebnis": 1,
     "einheit": "%",
     "toleranz": 0.005,
     "ergaenzt": true,
     "weg": "Zinsspanne 33 : 1.500 = 2,20 %. Provisionsspanne 0,80 %. Bruttobedarfsspanne 2,00 %. Nettobedarfsspanne 2,00 − 0,80 = 1,20 %. Bruttogewinnspanne 2,20 − 1,20 = 1,00 % (Probe: 33 + 12 − 30 = 15 Mio. € = 1,00 %)."
    },
    {
     "thema": "lf11-k8",
     "operator": "Ermitteln",
     "frage": "Geldautomat X: Fixkosten 25.000 € im Jahr, 0,10 € je Abhebung. Geldautomat Y: Fixkosten 19.000 €, 0,25 € je Abhebung. Ermitteln Sie die kritische Menge.",
     "ergebnis": 40000,
     "einheit": "Abhebungen",
     "toleranz": 0,
     "ergaenzt": true,
     "weg": "25.000 + 0,10 x = 19.000 + 0,25 x. 6.000 = 0,15 x. x = 40.000 Abhebungen. Darüber ist X günstiger."
    },
    {
     "thema": "lf11-k8",
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
     "thema": "lf11-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, warum die Marktzinsmethode den Strukturbeitrag nicht dem Kundenberater zurechnet.",
     "loesung": "Der Berater beeinflusst nur den Kundenzins seines Geschäfts gegenüber dem Marktzins gleicher Laufzeit (Konditionsbeitrag). Ob die Bank kurzfristige Einlagen langfristig ausleiht und am Unterschied der Marktzinsen verdient, entscheidet die Gesamtbanksteuerung. Sie trägt auch das Zinsänderungsrisiko daraus. Darum gehört der Strukturbeitrag ihr."
    },
    {
     "thema": "lf11-k3",
     "operator": "Erläutern",
     "frage": "Erläutern Sie zwei Maßnahmen, mit denen eine Sparkasse ihre Cost-Income-Ratio senken kann.",
     "loesung": "Kosten senken, zum Beispiel durch Digitalisierung von Prozessen oder Zusammenlegen von Filialen, sodass der Verwaltungsaufwand sinkt. Erträge steigern, zum Beispiel durch mehr Provisionsgeschäft (Wertpapiere, Versicherungsvermittlung) oder bessere Konditionen, sodass der Nenner wächst. Beides senkt den Aufwand je Euro Ertrag."
    },
    {
     "thema": "lf11-k5",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, warum die Sparkasse in der Kostenrechnung kalkulatorische Abschreibungen statt der bilanziellen ansetzt.",
     "loesung": "Die bilanzielle Abschreibung folgt HGB und Steuerrecht und rechnet von den historischen Anschaffungskosten. Die Kostenrechnung soll den tatsächlichen Werteverzehr zeigen und die Wiederbeschaffung sichern. Deshalb wird vom (höheren) Wiederbeschaffungswert und über die betriebliche Nutzungsdauer abgeschrieben. So werden die Preise der Leistungen richtig kalkuliert und die Substanz erhalten."
    },
    {
     "thema": "lf11-k8",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie, ob sich die Sparkasse nur nach der Kostenvergleichsrechnung für einen Geldautomaten entscheiden sollte.",
     "loesung": "Die Kostenvergleichsrechnung zeigt nur die günstigere Alternative bei einer angenommenen Menge. Sie berücksichtigt keine Erlöse, keine Zinseffekte und keine qualitativen Punkte. Zusätzlich sollte die Sparkasse Erlöse (Fremdkundenentgelte), Amortisationszeit, Ausfallsicherheit, Service, Sicherheit gegen Sprengung und Kundenzufriedenheit einbeziehen. Fazit: Sie ist eine gute erste Entscheidungshilfe, reicht allein aber nicht."
    }
   ]
  }
 },
 {
  "nr": 12,
  "titel": "Kunden über Produkte der Vorsorge und Absicherung informieren",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Wechselnde Werte Stand 09.11.2026: Sparer-Pauschbetrag 1.000/2.000 € (seit 2023), Sparzulage-Grenzen 40.000/80.000 € (seit 2024), BBG RV 2026 8.450 € im Monat, Riester-Zulagen nach bisherigem Recht (Reform ab 01.01.2027 beschlossen), Basisrente-Höchstbetrag 2026 30.826 €. Basiszins Vorabpauschale 2026 3,20 % (BMF), aktueller Rentenwert ab 01.07.2026 42,52 € (DRV); nachgetragen am 11.11.2026.",
  "kapitel": [
   {
    "id": "lf12-k1",
    "titel": "Altersvorsorge im Drei-Schichten-Modell",
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
    "id": "lf12-k2",
    "titel": "Riester-Rente und Basisrente",
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
    "id": "lf12-k3",
    "titel": "Betriebliche Altersversorgung",
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
    "id": "lf12-k4",
    "titel": "Versicherungen und Unterversicherung",
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
   },
   {
    "id": "lf12-k5",
    "titel": "Versorgungslücke ermitteln",
    "ergaenzt": true,
    "erklaert": "Die gesetzliche Rente reicht meist nicht, um den Lebensstandard zu halten. Die Differenz zwischen dem Bedarf im Alter und den erwarteten Renten heißt Versorgungslücke. Als Faustregel braucht man im Alter etwa 80 % des letzten Nettoeinkommens. Die erwartete gesetzliche Rente steht in der jährlichen Renteninformation.",
    "beispiel": "Herr Franke verdient 3.000 € netto. Bedarf im Alter: 80 % = 2.400 €. Laut Renteninformation erhält er 1.500 € Rente. Versorgungslücke: 900 € im Monat. Diese Lücke soll mit privater und betrieblicher Vorsorge geschlossen werden.",
    "tabelle": {
     "kopf": [
      "Schritt",
      "Rechnung",
      "Beispiel"
     ],
     "zeilen": [
      [
       "Bedarf",
       "Nettoeinkommen · 80 %",
       "3.000 · 0,8 = 2.400 €"
      ],
      [
       "erwartete Rente",
       "aus Renteninformation",
       "1.500 €"
      ],
      [
       "Lücke",
       "Bedarf − Rente",
       "900 € im Monat"
      ]
     ]
    },
    "merksatz": "**Lücke = Bedarf − Rente**",
    "tipp": "Operator „Ermitteln“: Rechne in der Prüfung mit den Zahlen aus der Aufgabe. Steuern und Krankenversicherung im Alter nur einbeziehen, wenn sie genannt sind.",
    "achtung": "Die Renteninformation zeigt einen Bruttowert vor Steuern und Sozialabgaben und berücksichtigt keine Inflation. Die echte Lücke ist meist größer."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf12-k1",
     "vorne": "Was gehört zur Schicht 2 der Altersvorsorge?",
     "hinten": "Riester-Rente und betriebliche Altersversorgung."
    },
    {
     "thema": "lf12-k2",
     "vorne": "Riester-Grundzulage?",
     "hinten": "175 € im Jahr."
    },
    {
     "thema": "lf12-k2",
     "vorne": "Riester-Kinderzulage für ab 2008 geborene Kinder?",
     "hinten": "300 € im Jahr je Kind."
    },
    {
     "thema": "lf12-k2",
     "vorne": "Riester-Sockelbetrag?",
     "hinten": "60 € im Jahr."
    },
    {
     "thema": "lf12-k3",
     "vorne": "Wie viel bAV-Beitrag ist 2026 steuerfrei?",
     "hinten": "8 % der BBG RV: 8.112 € im Jahr (676 € im Monat)."
    },
    {
     "thema": "lf12-k3",
     "vorne": "Wie viel bAV-Beitrag ist 2026 sozialversicherungsfrei?",
     "hinten": "4 % der BBG RV: 4.056 € im Jahr (338 € im Monat)."
    },
    {
     "thema": "lf12-k4",
     "vorne": "Formel Unterversicherung?",
     "hinten": "Entschädigung = Schaden · Versicherungssumme : Versicherungswert."
    },
    {
     "thema": "lf12-k5",
     "vorne": "Wie ermittelt man die Versorgungslücke?",
     "hinten": "Bedarf im Alter (oft 80 % des Nettoeinkommens) minus erwartete Renten."
    }
   ],
   "mc": [
    {
     "thema": "lf12-k2",
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
     "thema": "lf12-k3",
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
     "thema": "lf12-k4",
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
    }
   ],
   "rechnen": [
    {
     "thema": "lf12-k2",
     "operator": "Ermitteln",
     "frage": "Vorjahresbrutto 62.000 €, zwei Kinder (geboren 2012 und 2016). Ermitteln Sie den Riester-Mindesteigenbeitrag im Jahr.",
     "ergebnis": 1325,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "4 % von 62.000 = 2.480 €, gedeckelt auf 2.100 €. Zulagen 175 + 300 + 300 = 775 €. 2.100 − 775 = 1.325 €."
    },
    {
     "thema": "lf12-k3",
     "operator": "Ermitteln",
     "frage": "Ein Mitarbeiter wandelt 150 € im Monat in eine Direktversicherung um, der Arbeitgeber spart Sozialabgaben. Wie viel fließt im Monat insgesamt in den Vertrag?",
     "ergebnis": 172.5,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Arbeitgeberzuschuss 15 % von 150 € = 22,50 €. 150 + 22,50 = 172,50 €."
    },
    {
     "thema": "lf12-k4",
     "operator": "Ermitteln",
     "frage": "Hausrat: Versicherungssumme 52.000 €, Versicherungswert 65.000 €, Schaden 7.500 €, kein Unterversicherungsverzicht. Ermitteln Sie die Entschädigung.",
     "ergebnis": 6000,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "7.500 · 52.000 : 65.000 = 6.000,00 €."
    },
    {
     "thema": "lf12-k5",
     "operator": "Ermitteln",
     "frage": "Nettoeinkommen 3.000 €, Bedarf im Alter 80 %, erwartete Rente 1.500 €. Ermitteln Sie die monatliche Versorgungslücke.",
     "ergebnis": 900,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Bedarf 3.000 · 0,8 = 2.400 €. Lücke 2.400 − 1.500 = 900 €."
    }
   ],
   "frei": [
    {
     "thema": "lf12-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie, warum die gesetzliche Rente allein künftig oft nicht reicht.",
     "loesung": "Die gesetzliche Rente arbeitet im Umlageverfahren. Durch den demografischen Wandel (längere Lebenserwartung, wenige Geburten, Renteneintritt geburtenstarker Jahrgänge) kommen weniger Beitragszahler auf mehr Rentner. Das Rentenniveau sinkt im Verhältnis zum Lohn, es entsteht eine Versorgungslücke, die mit betrieblicher und privater Vorsorge geschlossen werden muss."
    },
    {
     "thema": "lf12-k2",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Riester-Rente und Basisrente nach Zielgruppe und Förderung.",
     "loesung": "Riester: für rentenversicherungspflichtige Arbeitnehmer, Beamte und deren Ehepartner; Förderung über Zulagen (175 € Grundzulage, Kinderzulagen) und Günstigerprüfung bis 2.100 € Sonderausgaben. Basisrente: vor allem für Selbstständige und Gutverdiener; Förderung über den Sonderausgabenabzug der Beiträge, seit 2023 zu 100 % bis zum Höchstbetrag, keine Zulagen."
    },
    {
     "thema": "lf12-k4",
     "operator": "Begründen",
     "frage": "Begründen Sie, warum eine Familie mit Baufinanzierung eine Risikolebensversicherung abschließen sollte.",
     "loesung": "Stirbt ein Hauptverdiener, fehlt sein Einkommen für die Kreditraten. Die Risikolebensversicherung zahlt dann die vereinbarte Summe aus, mit der der Kredit getilgt oder deutlich reduziert werden kann. So können die Hinterbliebenen das Haus behalten. Weil es keinen Sparanteil gibt, ist der Beitrag niedrig."
    }
   ]
  }
 },
 {
  "nr": 13,
  "titel": "Finanzierungen für Geschäfts- und Firmenkunden abschließen",
  "std": 60,
  "quelle": "Ergänzt aus offiziellen Quellen (Gesetze, Rahmenlehrplan AO 2020) und den Zusammenfassungen der Prüfungsbereiche. Wird durch deine Mitschrift ersetzt bzw. abgeglichen. Stand 09.11.2026: Grunderwerbsteuer Sachsen 5,5 % (seit 2023). Notar/Grundbuch 2 % und Makler 3,57 % sind Faustwerte. Beleihungsgrenze 60 % ist der übliche Wert (PfandBG), die Sparkasse kann eigene Grundsätze haben. Keine KfW- oder SAB-Beträge eingetragen, weil sie oft wechseln.",
  "kapitel": [
   {
    "id": "lf13-k1",
    "titel": "Kreditwürdigkeit und Jahresabschluss",
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
    "id": "lf13-k2",
    "titel": "Kreditarten für Firmenkunden",
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
    "id": "lf13-k3",
    "titel": "Kreditsicherheiten",
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
    "id": "lf13-k4",
    "titel": "Kreditüberwachung und Problemkredite",
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
   },
   {
    "id": "lf13-k5",
    "titel": "Leasing und Factoring",
    "ergaenzt": true,
    "erklaert": "Leasing und Factoring sind Alternativen zum Kredit. Beim Leasing nutzt das Unternehmen eine Maschine gegen Raten, Eigentümer bleibt die Leasinggesellschaft. Beim Factoring verkauft das Unternehmen seine Forderungen an einen Factor und bekommt sofort Geld. Übernimmt der Factor auch das Ausfallrisiko, heißt das echtes Factoring.",
    "beispiel": "Die Müller Bau GmbH verkauft Forderungen über 100.000 € an einen Factor. Er zahlt sofort aus, behält aber 15 % als Sicherheit für Abzüge (Sperrbetrag) und 1,5 % Gebühr. Auszahlung: 100.000 − 15.000 − 1.500 = 83.500 €. Den Sperrbetrag bekommt die GmbH, wenn die Kunden gezahlt haben.",
    "tabelle": {
     "kopf": [
      "Merkmal",
      "echtes Factoring",
      "unechtes Factoring"
     ],
     "zeilen": [
      [
       "Ausfallrisiko (Delkredere)",
       "trägt der Factor",
       "bleibt beim Unternehmen"
      ],
      [
       "Finanzierung",
       "ja",
       "ja"
      ],
      [
       "Dienstleistung (Buchhaltung, Mahnwesen)",
       "meist ja",
       "meist ja"
      ]
     ]
    },
    "merksatz": "Echtes Factoring = Factor trägt das **Ausfallrisiko**.",
    "tipp": "Operator „Beurteilen“: Nenne Vorteile (sofortige Liquidität, weniger Ausfallrisiko) und Nachteile (Kosten, Kunden erfahren vom Verkauf) und urteile dann für den Fall.",
    "achtung": "Beim Leasing steht die Maschine in der Regel nicht in der Bilanz des Leasingnehmers (Zurechnung nach den Leasingerlassen). Prüfungsfragen nach Bilanzwirkung bitte genau lesen."
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "lf13-k1",
     "vorne": "Formel Anlagendeckung II?",
     "hinten": "(Eigenkapital + langfristiges Fremdkapital) : Anlagevermögen · 100."
    },
    {
     "thema": "lf13-k1",
     "vorne": "Ab welchem Kreditvolumen muss sich die Bank die wirtschaftlichen Verhältnisse offenlegen lassen?",
     "hinten": "Ab 750.000 € (§ 18 KWG)."
    },
    {
     "thema": "lf13-k2",
     "vorne": "Was ist ein Avalkredit?",
     "hinten": "Eine Bürgschaft oder Garantie der Bank für den Kunden gegenüber Dritten; Kreditleihe, kein Geldfluss."
    },
    {
     "thema": "lf13-k2",
     "vorne": "Faustformel Jahreszins beim Verzicht auf Skonto?",
     "hinten": "Skontosatz · 360 : (Zahlungsziel − Skontofrist)."
    },
    {
     "thema": "lf13-k3",
     "vorne": "Was bedeutet Besitzkonstitut bei der Sicherungsübereignung?",
     "hinten": "Die Bank wird Eigentümerin, der Kunde bleibt unmittelbarer Besitzer und nutzt die Sache (§ 930 BGB)."
    },
    {
     "thema": "lf13-k3",
     "vorne": "Was ist eine selbstschuldnerische Bürgschaft?",
     "hinten": "Der Bürge verzichtet auf die Einrede der Vorausklage und haftet wie der Schuldner selbst."
    },
    {
     "thema": "lf13-k4",
     "vorne": "Frist für den Insolvenzantrag bei Überschuldung (GmbH)?",
     "hinten": "Spätestens 6 Wochen (§ 15a InsO), bei Zahlungsunfähigkeit 3 Wochen."
    },
    {
     "thema": "lf13-k4",
     "vorne": "Welches Recht gibt Sicherungseigentum in der Insolvenz?",
     "hinten": "Absonderung."
    },
    {
     "thema": "lf13-k5",
     "vorne": "Wer trägt beim echten Factoring das Ausfallrisiko?",
     "hinten": "Der Factor (Delkrederefunktion)."
    },
    {
     "thema": "lf13-k5",
     "vorne": "Wer ist beim Leasing Eigentümer?",
     "hinten": "Die Leasinggesellschaft (Leasinggeber)."
    }
   ],
   "mc": [
    {
     "thema": "lf13-k1",
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
     "thema": "lf13-k2",
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
     "thema": "lf13-k3",
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
     "thema": "lf13-k4",
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
    }
   ],
   "rechnen": [
    {
     "thema": "lf13-k1",
     "operator": "Ermitteln",
     "frage": "Anlagevermögen 500.000 €, Eigenkapital 180.000 €, langfristiges Fremdkapital 270.000 €. Ermitteln Sie die Anlagendeckung II.",
     "ergebnis": 90,
     "einheit": "%",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "(180.000 + 270.000) : 500.000 · 100 = 90 %. Unter 100 %: Teile des Anlagevermögens sind kurzfristig finanziert."
    },
    {
     "thema": "lf13-k1",
     "operator": "Ermitteln",
     "frage": "Flüssige Mittel 30.000 €, Forderungen 90.000 €, Vorräte 80.000 €, kurzfristiges Fremdkapital 150.000 €. Ermitteln Sie die Liquidität 2. Grades.",
     "ergebnis": 80,
     "einheit": "%",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "(30.000 + 90.000) : 150.000 · 100 = 80 %."
    },
    {
     "thema": "lf13-k2",
     "operator": "Ermitteln",
     "frage": "Abzahlungsdarlehen 120.000 €, Laufzeit 5 Jahre, Sollzins 4,5 %, jährliche Zahlung. Ermitteln Sie die Rate im 2. Jahr.",
     "ergebnis": 28320,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Tilgung 120.000 : 5 = 24.000 € im Jahr. Restschuld Anfang Jahr 2: 96.000 €. Zinsen 4,5 % = 4.320 €. Rate 28.320 €."
    },
    {
     "thema": "lf13-k2",
     "operator": "Ermitteln",
     "frage": "2 % Skonto innerhalb 14 Tagen, Zahlungsziel 30 Tage. Ermitteln Sie den Jahreszins nach der Faustformel.",
     "ergebnis": 45,
     "einheit": "%",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "2 · 360 : (30 − 14) = 720 : 16 = 45 %."
    },
    {
     "thema": "lf13-k5",
     "operator": "Ermitteln",
     "frage": "Forderungen 100.000 € an einen Factor verkauft. Sperrbetrag 15 %, Gebühr 1,5 %. Ermitteln Sie die sofortige Auszahlung.",
     "ergebnis": 83500,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "100.000 − 15.000 (Sperrbetrag) − 1.500 (Gebühr) = 83.500 €."
    }
   ],
   "frei": [
    {
     "thema": "lf13-k1",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie die Kreditwürdigkeit der Tischlerei Kühn anhand der Kennzahlen (EK-Quote 30 %, Anlagendeckung II 125 %, Liquidität 2. Grades 75 %).",
     "loesung": "Positiv: Die Eigenkapitalquote von 30 % ist solide, die Anlagendeckung II von 125 % erfüllt die goldene Bilanzregel, das Anlagevermögen ist langfristig finanziert. Negativ: Die Liquidität 2. Grades von 75 % liegt unter 100 %, kurzfristige Schulden sind nicht durch Geld und Forderungen gedeckt, Kühn ist auf den Abverkauf der Vorräte angewiesen. Fazit: grundsätzlich kreditwürdig, kurzfristige Liquidität beobachten, eventuell Teile des Kontokorrents in ein langfristiges Darlehen umschulden."
    },
    {
     "thema": "lf13-k3",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Sicherungsübereignung und Pfandrecht.",
     "loesung": "Sicherungsübereignung: Die Bank wird Eigentümerin, der Kunde bleibt Besitzer und nutzt die Sache weiter (Besitzkonstitut), nicht akzessorisch, geeignet für Maschinen und Fahrzeuge. Pfandrecht: Der Kunde bleibt Eigentümer, die Bank erhält den Besitz (Übergabe), akzessorisch; geeignet für Wertpapiere oder Guthaben, nicht für Sachen, die der Kunde braucht."
    },
    {
     "thema": "lf13-k4",
     "operator": "Nennen",
     "frage": "Nennen Sie vier Frühwarnzeichen für einen Problemkredit.",
     "loesung": "Dauerhafte Überziehung der Kreditlinie, Lastschrift- und Scheckrückgaben, verspätete oder ausbleibende Jahresabschlüsse, Umsatzrückgang auf dem Konto, Pfändungen, häufiger Wechsel von Steuerberater oder Hausbank, Zahlungsverzug bei Lieferanten (vier davon)."
    }
   ]
  }
 }
];
