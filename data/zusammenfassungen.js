/* Zusammenfassungen je Prüfungsbereich. Gleicher Aufbau wie ein Lernfeld in lernfelder.js
   (kapitel mit festem Aufbau, uebung mit karten/mc/rechnen/frei, jede Übung mit thema = Kapitel-id).
   nr ist ein Kürzel statt einer Zahl; lf nennt die zusammengefassten Lernfelder; bereich = id aus PRUEFUNGSBEREICHE.
   Kapitel-ids bitte mit "wiso-" beginnen, damit sie sich nicht mit den Einzel-Lernfeldern überschneiden.
   Die Einzel-Lernfelder LF01, LF06, LF10 bleiben in lernfelder.js unverändert bestehen. */
window.ZUSAMMENFASSUNGEN = [
 {
  "nr": "WiSo",
  "bereich": "WISO",
  "lf": [
   1,
   6,
   10
  ],
  "titel": "Wirtschafts- und Sozialkunde, alle drei Lernfelder in einem",
  "quelle": "Zusammenfassung aus dem Doc „WiSo-Zusammenfassung: LF01, LF06, LF10“. Alles Ergänzt (Gesetze, offizielle Werte), bis die Mitschriften abgeglichen sind. Wechselnde Werte Stand 09.11.2026: SV 2026, Mindestlohn 13,90 €, EZB-Sätze seit 16.09.2026 (2,65 / 2,90 / 2,50 %), Inflation Euroraum Okt. 2026 4,0 % vorläufig. Nächste EZB-Sitzung 17.12.2026.",
  "kapitel": [
   {
    "id": "wiso-lf01-k1",
    "titel": "LF01 · Berufsausbildung nach dem BBiG",
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
    "id": "wiso-lf01-k2",
    "titel": "LF01 · Arbeitsvertrag, Kündigung und Arbeitsschutz",
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
    "id": "wiso-lf01-k3",
    "titel": "LF01 · Mitbestimmung im Betrieb",
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
    "id": "wiso-lf01-k4",
    "titel": "LF01 · Tarifvertrag und Arbeitskampf",
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
    "id": "wiso-lf01-k5",
    "titel": "LF01 · Sozialversicherung und Gehaltsabrechnung",
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
    "id": "wiso-lf01-k6",
    "titel": "LF01 · Kreditwirtschaft in Deutschland",
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
    "id": "wiso-lf01-k7",
    "titel": "LF01 · Kaufmann, Handelsregister und Rechtsformen",
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
    "id": "wiso-lf01-k8",
    "titel": "LF01 · Vollmachten: Prokura und Handlungsvollmacht",
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
    "id": "wiso-lf06-k1",
    "titel": "LF06 · Bedürfnisse, Bedarf, Güter und ökonomisches Prinzip",
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
    "id": "wiso-lf06-k2",
    "titel": "LF06 · Produktionsfaktoren und Wirtschaftskreislauf",
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
    "id": "wiso-lf06-k3",
    "titel": "LF06 · Marktformen und vollkommener Markt",
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
    "id": "wiso-lf06-k4",
    "titel": "LF06 · Preisbildung im Polypol",
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
    "id": "wiso-lf06-k5",
    "titel": "LF06 · Staatliche Eingriffe in die Preisbildung",
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
    "id": "wiso-lf06-k6",
    "titel": "LF06 · Preiselastizität der Nachfrage",
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
    "id": "wiso-lf06-k7",
    "titel": "LF06 · Kooperation, Konzentration und Kartellrecht",
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
    "id": "wiso-lf06-k8",
    "titel": "LF06 · Wirtschaftsordnungen und soziale Marktwirtschaft",
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
    "id": "wiso-lf10-k1",
    "titel": "LF10 · Wirtschaftspolitische Ziele",
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
    "id": "wiso-lf10-k2",
    "titel": "LF10 · Bruttoinlandsprodukt und Wachstum",
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
    "id": "wiso-lf10-k3",
    "titel": "LF10 · Preisniveau und Inflation",
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
    "id": "wiso-lf10-k4",
    "titel": "LF10 · Arbeitsmarkt und Arbeitslosigkeit",
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
    "id": "wiso-lf10-k5",
    "titel": "LF10 · Konjunktur",
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
    "id": "wiso-lf10-k6",
    "titel": "LF10 · Fiskalpolitik des Staates",
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
    "id": "wiso-lf10-k7",
    "titel": "LF10 · Geldpolitik der EZB",
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
    "id": "wiso-lf10-k8",
    "titel": "LF10 · Außenwirtschaft und Wechselkurse",
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
   }
  ],
  "uebung": {
   "karten": [
    {
     "thema": "wiso-lf01-k1",
     "vorne": "Wie lang ist die Probezeit in der Ausbildung?",
     "hinten": "Mindestens 1, höchstens 4 Monate (§ 20 BBiG)."
    },
    {
     "thema": "wiso-lf01-k1",
     "vorne": "Wann endet die Ausbildung bei bestandener Prüfung vor Vertragsende?",
     "hinten": "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss (§ 21 Abs. 2 BBiG)."
    },
    {
     "thema": "wiso-lf01-k2",
     "vorne": "Gesetzliche Grundkündigungsfrist im Arbeitsverhältnis?",
     "hinten": "4 Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB)."
    },
    {
     "thema": "wiso-lf01-k2",
     "vorne": "Ab wann gilt das Kündigungsschutzgesetz?",
     "hinten": "Mehr als 10 Arbeitnehmer im Betrieb und mehr als 6 Monate Betriebszugehörigkeit."
    },
    {
     "thema": "wiso-lf01-k3",
     "vorne": "Wie heißt die Arbeitnehmervertretung in einer Sparkasse?",
     "hinten": "Personalrat (Personalvertretungsrecht des Landes), nicht Betriebsrat."
    },
    {
     "thema": "wiso-lf01-k4",
     "vorne": "Was bedeutet Friedenspflicht?",
     "hinten": "Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über die geregelten Punkte verboten."
    },
    {
     "thema": "wiso-lf01-k5",
     "vorne": "Welchen SV-Zweig zahlt der Arbeitgeber allein?",
     "hinten": "Die gesetzliche Unfallversicherung (Berufsgenossenschaft oder Unfallkasse)."
    },
    {
     "thema": "wiso-lf01-k5",
     "vorne": "Pflegeversicherung in Sachsen 2026: Anteile?",
     "hinten": "Gesamt 3,6 %; Arbeitnehmer 2,3 %, Arbeitgeber 1,3 %; kinderlos ab 23 zusätzlich 0,6 % für den Arbeitnehmer."
    },
    {
     "thema": "wiso-lf01-k6",
     "vorne": "Wie hoch ist die gesetzliche Einlagensicherung?",
     "hinten": "100.000 € je Kunde und Bank (EinSiG)."
    },
    {
     "thema": "wiso-lf01-k7",
     "vorne": "Welche Abteilung des Handelsregisters für eine GmbH?",
     "hinten": "Abteilung B (Kapitalgesellschaften)."
    },
    {
     "thema": "wiso-lf01-k8",
     "vorne": "Darf ein Prokurist ein Grundstück der Firma verkaufen?",
     "hinten": "Nur mit besonderer Befugnis (§ 49 Abs. 2 HGB)."
    },
    {
     "thema": "wiso-lf06-k1",
     "vorne": "Unterschied Bedürfnis, Bedarf, Nachfrage?",
     "hinten": "Bedürfnis = Mangelgefühl; Bedarf = Bedürfnis mit Kaufkraft; Nachfrage = Bedarf, der am Markt auftritt."
    },
    {
     "thema": "wiso-lf06-k1",
     "vorne": "Was ist das Minimalprinzip?",
     "hinten": "Ein festes Ziel mit möglichst geringem Mitteleinsatz erreichen."
    },
    {
     "thema": "wiso-lf06-k2",
     "vorne": "Welche Rolle haben Banken im erweiterten Wirtschaftskreislauf?",
     "hinten": "Sie nehmen Ersparnisse auf und geben sie als Kredite für Investitionen weiter (Sektor Vermögensänderung)."
    },
    {
     "thema": "wiso-lf06-k3",
     "vorne": "Vier Bedingungen des vollkommenen Marktes?",
     "hinten": "Homogene Güter, vollständige Markttransparenz, keine Präferenzen, sofortige Reaktion."
    },
    {
     "thema": "wiso-lf06-k4",
     "vorne": "Was passiert bei einem Preis über dem Gleichgewichtspreis?",
     "hinten": "Angebotsüberhang: Das Angebot ist größer als die Nachfrage, der Preis sinkt."
    },
    {
     "thema": "wiso-lf06-k5",
     "vorne": "Höchstpreis: Lage und Folge?",
     "hinten": "Unter dem Gleichgewichtspreis; Folge ist ein Nachfrageüberhang (Knappheit, Schwarzmarkt)."
    },
    {
     "thema": "wiso-lf06-k6",
     "vorne": "Wann ist die Nachfrage unelastisch?",
     "hinten": "Wenn der Betrag der Elastizität kleiner als 1 ist: Die Menge ändert sich prozentual schwächer als der Preis."
    },
    {
     "thema": "wiso-lf06-k7",
     "vorne": "Unterschied Konzern und Fusion?",
     "hinten": "Konzern: rechtlich selbstständig, wirtschaftlich einheitlich geleitet. Fusion: rechtlich und wirtschaftlich verschmolzen."
    },
    {
     "thema": "wiso-lf06-k8",
     "vorne": "Wer gilt als Vater der sozialen Marktwirtschaft?",
     "hinten": "Ludwig Erhard (Begriff von Alfred Müller-Armack)."
    },
    {
     "thema": "wiso-lf10-k1",
     "vorne": "Die vier Ziele des magischen Vierecks?",
     "hinten": "Stabiles Preisniveau, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum (§ 1 StabG)."
    },
    {
     "thema": "wiso-lf10-k2",
     "vorne": "Unterschied nominales und reales BIP?",
     "hinten": "Nominal zu aktuellen Preisen, real um Preisänderungen bereinigt. Wachstum wird am realen BIP gemessen."
    },
    {
     "thema": "wiso-lf10-k3",
     "vorne": "Formel für den (vereinfachten) Realzins?",
     "hinten": "Realzins = Nominalzins − Inflationsrate."
    },
    {
     "thema": "wiso-lf10-k3",
     "vorne": "Wer gewinnt, wer verliert bei Inflation?",
     "hinten": "Schuldner gewinnen, Gläubiger und Sparer verlieren (Geld verliert Kaufkraft)."
    },
    {
     "thema": "wiso-lf10-k4",
     "vorne": "Vier Arten der Arbeitslosigkeit?",
     "hinten": "Friktionell, saisonal, konjunkturell, strukturell."
    },
    {
     "thema": "wiso-lf10-k5",
     "vorne": "Drei Frühindikatoren der Konjunktur?",
     "hinten": "ifo-Geschäftsklimaindex, ZEW-Konjunkturerwartungen, Auftragseingänge."
    },
    {
     "thema": "wiso-lf10-k5",
     "vorne": "Was ist eine technische Rezession?",
     "hinten": "Das reale BIP sinkt in zwei aufeinanderfolgenden Quartalen gegenüber dem Vorquartal."
    },
    {
     "thema": "wiso-lf10-k6",
     "vorne": "Was heißt antizyklische Fiskalpolitik?",
     "hinten": "Im Abschwung Ausgaben erhöhen und Steuern senken, im Boom Ausgaben senken und Rücklagen bilden (Keynes)."
    },
    {
     "thema": "wiso-lf10-k7",
     "vorne": "Die drei EZB-Leitzinsen seit 16.09.2026?",
     "hinten": "Hauptrefinanzierung 2,65 %, Spitzenrefinanzierung 2,90 %, Einlagefazilität 2,50 %."
    },
    {
     "thema": "wiso-lf10-k8",
     "vorne": "Was bewirkt eine Aufwertung des Euro?",
     "hinten": "Importe werden billiger, Exporte teurer; die Inflation wird gedämpft, die Exportwirtschaft belastet."
    }
   ],
   "mc": [
    {
     "thema": "wiso-lf01-k1",
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
     "thema": "wiso-lf01-k2",
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
     "thema": "wiso-lf01-k3",
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
     "thema": "wiso-lf01-k5",
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
     "thema": "wiso-lf01-k7",
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
     "thema": "wiso-lf01-k8",
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
     "thema": "wiso-lf06-k3",
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
     "thema": "wiso-lf06-k4",
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
     "thema": "wiso-lf06-k5",
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
     "thema": "wiso-lf06-k7",
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
     "thema": "wiso-lf06-k7",
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
     "thema": "wiso-lf10-k1",
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
     "thema": "wiso-lf10-k4",
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
     "thema": "wiso-lf10-k5",
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
     "thema": "wiso-lf10-k7",
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
     "thema": "wiso-lf10-k7",
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
     "thema": "wiso-lf10-k8",
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
    }
   ],
   "rechnen": [
    {
     "thema": "wiso-lf01-k5",
     "operator": "Ermitteln",
     "frage": "Azubi in Sachsen, 21 Jahre, 1.150 € brutto, Zusatzbeitrag der Kasse 2,9 %. Ermitteln Sie die Summe der Arbeitnehmeranteile zur Sozialversicherung 2026 (RV 9,3 %, AV 1,3 %, KV 8,75 %, PV 2,3 %).",
     "ergebnis": 248.98,
     "einheit": "€",
     "toleranz": 0.02,
     "ergaenzt": true,
     "weg": "Satz gesamt 9,3 + 1,3 + 8,75 + 2,3 = 21,65 %. 1.150 · 21,65 % = 248,975 €. Einzeln gerundet: 106,95 + 14,95 + 100,63 + 26,45 = 248,98 €."
    },
    {
     "thema": "wiso-lf01-k5",
     "operator": "Ermitteln",
     "frage": "Eine Mitarbeiterin verdient 9.000 € brutto im Monat. Wie hoch ist ihr Arbeitnehmeranteil zur Rentenversicherung 2026 (9,3 %, BBG 8.450 €)?",
     "ergebnis": 785.85,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Beitrag nur bis zur BBG: 8.450 · 9,3 % = 785,85 €."
    },
    {
     "thema": "wiso-lf06-k6",
     "operator": "Ermitteln",
     "frage": "Der Preis eines Kontomodells steigt von 8,00 € auf 10,00 €. Die Zahl der Kunden sinkt von 2.000 auf 1.400. Ermitteln Sie den Betrag der Preiselastizität der Nachfrage.",
     "ergebnis": 1.2,
     "einheit": "",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Mengenänderung: −600 : 2.000 = −30 %. Preisänderung: +2 : 8 = +25 %. E = −30 : 25 = −1,2. Betrag 1,2 > 1, also elastisch; Umsatz sinkt von 16.000 € auf 14.000 €."
    },
    {
     "thema": "wiso-lf06-k4",
     "operator": "Ermitteln",
     "frage": "Nachfrage: 900 bei 1 €, 700 bei 1,50 €, 600 bei 2 €, 400 bei 2,50 €. Angebot: 300, 500, 600, 800. Ermitteln Sie den Umsatz im Gleichgewicht.",
     "ergebnis": 1200,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Gleichgewicht bei 2,00 € (Nachfrage = Angebot = 600). Umsatz 2,00 × 600 = 1.200 €."
    },
    {
     "thema": "wiso-lf06-k5",
     "operator": "Ermitteln",
     "frage": "Gleiche Werte wie oben. Der Staat setzt einen Höchstpreis von 1,50 €. Wie groß ist der Nachfrageüberhang in Stück?",
     "ergebnis": 200,
     "einheit": "Stück",
     "toleranz": 0,
     "ergaenzt": true,
     "weg": "Bei 1,50 €: Nachfrage 700, Angebot 500. Überhang 700 − 500 = 200 Stück."
    },
    {
     "thema": "wiso-lf10-k3",
     "operator": "Ermitteln",
     "frage": "Der Verbraucherpreisindex steigt von 118,5 auf 122,0. Ermitteln Sie die Inflationsrate in Prozent (2 Nachkommastellen).",
     "ergebnis": 2.95,
     "einheit": "%",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "(122,0 − 118,5) : 118,5 × 100 = 3,5 : 118,5 × 100 = 2,95 %."
    },
    {
     "thema": "wiso-lf10-k3",
     "operator": "Ermitteln",
     "frage": "Ein Sparbrief bringt 3,2 % Zinsen, die Inflationsrate liegt bei 4,0 %. Ermitteln Sie den vereinfachten Realzins.",
     "ergebnis": -0.8,
     "einheit": "%",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Realzins = 3,2 % − 4,0 % = −0,8 %."
    },
    {
     "thema": "wiso-lf10-k2",
     "operator": "Ermitteln",
     "frage": "Konsum 1.250 Mrd. €, Investitionen 420 Mrd. €, Staatsausgaben 560 Mrd. €, Exporte 1.180 Mrd. €, Importe 1.050 Mrd. €. Ermitteln Sie das BIP in Mrd. €.",
     "ergebnis": 2360,
     "einheit": "Mrd. €",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Außenbeitrag 1.180 − 1.050 = 130. BIP = 1.250 + 420 + 560 + 130 = 2.360 Mrd. €."
    },
    {
     "thema": "wiso-lf10-k4",
     "operator": "Ermitteln",
     "frage": "3,1 Mio. Arbeitslose, 45,8 Mio. zivile Erwerbspersonen. Ermitteln Sie die Arbeitslosenquote (1 Nachkommastelle).",
     "ergebnis": 6.8,
     "einheit": "%",
     "toleranz": 0.05,
     "ergaenzt": true,
     "weg": "3,1 : 45,8 × 100 = 6,77 %, gerundet 6,8 %."
    },
    {
     "thema": "wiso-lf10-k7",
     "operator": "Ermitteln",
     "frage": "Eine Bank leiht sich 25 Mio. € für 7 Tage über das Hauptrefinanzierungsgeschäft zu 2,65 %. Ermitteln Sie die Zinsen (act/360).",
     "ergebnis": 12881.94,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "25.000.000 · 2,65 % · 7 : 360 = 12.881,94 €."
    },
    {
     "thema": "wiso-lf10-k8",
     "operator": "Ermitteln",
     "frage": "Ein Importeur muss 24.000 USD bezahlen. Kurs: 1 € = 1,0850 USD. Ermitteln Sie den Betrag in Euro.",
     "ergebnis": 22119.82,
     "einheit": "€",
     "toleranz": 0.01,
     "ergaenzt": true,
     "weg": "Mengennotierung: 24.000 : 1,0850 = 22.119,82 €."
    }
   ],
   "frei": [
    {
     "thema": "wiso-lf01-k6",
     "operator": "Unterscheiden",
     "frage": "Unterscheiden Sie Sparkasse und Genossenschaftsbank nach Rechtsform, Träger bzw. Eigentümer und Geschäftsziel.",
     "loesung": "Sparkasse: Anstalt des öffentlichen Rechts, Träger ist eine Kommune oder ein Zweckverband, Ziel ist der öffentliche Auftrag (Versorgung der Region mit Finanzdienstleistungen, Regionalprinzip), nicht Gewinnmaximierung. Genossenschaftsbank: eingetragene Genossenschaft (eG), Eigentümer sind die Mitglieder, Ziel ist die Förderung der Mitglieder."
    },
    {
     "thema": "wiso-lf01-k4",
     "operator": "Erläutern",
     "frage": "Erläutern Sie den Ablauf eines Arbeitskampfes bis zum neuen Tarifvertrag.",
     "loesung": "Nach Ablauf des Tarifvertrags und der Friedenspflicht verhandeln Gewerkschaft und Arbeitgeber. Scheitern die Verhandlungen, kann eine Schlichtung folgen. Scheitert auch sie, stimmen die Mitglieder in einer Urabstimmung über einen Streik ab (meist mind. 75 %). Es folgt Streik, der Arbeitgeber kann mit Aussperrung reagieren. Nach einer Einigung stimmen die Mitglieder erneut ab (meist mind. 25 %), dann gilt der neue Tarifvertrag."
    },
    {
     "thema": "wiso-lf06-k3",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie, ob der Markt für Girokonten ein vollkommener Markt ist.",
     "loesung": "Nein. Zwar gibt es viele Anbieter, aber die Konten sind nicht völlig gleichartig (Leistungen, Filialnetz), die Markttransparenz ist eingeschränkt, Kunden haben persönliche und räumliche Präferenzen (Berater, Filiale in der Nähe) und reagieren nicht sofort auf Preisänderungen (Wechselaufwand). Damit sind mehrere Bedingungen verletzt, der Markt ist unvollkommen."
    },
    {
     "thema": "wiso-lf06-k8",
     "operator": "Erläutern",
     "frage": "Erläutern Sie zwei Merkmale der sozialen Marktwirtschaft mit je einem Beispiel aus der Kreditwirtschaft.",
     "loesung": "1. Freier Wettbewerb und Preisbildung am Markt: Banken legen Zinsen und Kontopreise selbst fest. 2. Sozialer Ausgleich durch den Staat: Anspruch auf ein Basiskonto für jeden Verbraucher, gesetzliche Einlagensicherung bis 100.000 €. (Weitere: Schutz des Wettbewerbs durch das Kartellamt, Verbraucherschutz bei Krediten.)"
    },
    {
     "thema": "wiso-lf10-k1",
     "operator": "Erläutern",
     "frage": "Erläutern Sie einen Zielkonflikt im magischen Viereck.",
     "loesung": "Preisniveaustabilität und hoher Beschäftigungsstand: Um die Beschäftigung zu erhöhen, stärkt der Staat die Nachfrage (z. B. Steuersenkung, Ausgabenprogramm). Unternehmen produzieren mehr und stellen ein, die höhere Nachfrage erlaubt aber auch Preissteigerungen. Damit gefährdet die Förderung der Beschäftigung die Preisniveaustabilität."
    },
    {
     "thema": "wiso-lf10-k7",
     "operator": "Erläutern",
     "frage": "Erläutern Sie die Wirkung einer Leitzinssenkung der EZB auf Kreditnachfrage und Preisniveau.",
     "loesung": "Banken refinanzieren sich günstiger bei der EZB und geben das über niedrigere Kreditzinsen weiter. Kredite für Konsum und Investitionen werden attraktiver, die Kreditnachfrage steigt. Die gesamtwirtschaftliche Nachfrage wächst, Produktion und Beschäftigung steigen, mittelfristig steigt auch das Preisniveau (expansive Geldpolitik)."
    },
    {
     "thema": "wiso-lf10-k6",
     "operator": "Beurteilen",
     "frage": "Beurteilen Sie antizyklische Fiskalpolitik.",
     "loesung": "Vorteil: Sie kann Konjunkturschwankungen glätten, im Abschwung Nachfrage und Beschäftigung stützen. Nachteile: Entscheidungen und Wirkung kommen oft zu spät (Zeitverzögerung), die Maßnahmen wirken dann prozyklisch; im Boom werden Schulden selten abgebaut, die Staatsverschuldung steigt; die Schuldenbremse begrenzt den Spielraum. Fazit: sinnvoll, wenn rechtzeitig und zeitlich begrenzt eingesetzt."
    }
   ]
  }
 }
];
