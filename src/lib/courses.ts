export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g. "8 min"
  content: string; // HTML-safe markdown-like content
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string; // tailwind bg class
  tier: string; // "Basic" | "Pro" | "Premium"
  chapters: Chapter[];
  totalDuration: string;
}

export const COURSES: Course[] = [
  {
    id: "cv-de-la-zero",
    title: "CV-ul Perfect — De la Zero la Interviu",
    description: "Invata sa-ti construiesti un CV profesional care iese in evidenta. De la structura si format pana la detaliile care fac diferenta.",
    icon: "📄",
    color: "bg-blue",
    tier: "Basic",
    totalDuration: "45 min",
    chapters: [
      {
        id: "de-ce-conteaza",
        title: "De ce conteaza un CV bun?",
        description: "Intelege rolul CV-ului in procesul de selectie si de ce primele 6 secunde sunt decisive.",
        lessons: [
          {
            id: "prima-impresie",
            title: "Prima impresie: 6 secunde",
            duration: "5 min",
            content: `<h3>Stiai ca un recrutor petrece in medie doar 6 secunde pe un CV?</h3>
<p>Intr-o lume in care competitia este acerba, CV-ul tau este prima ta carte de vizita. Nu este doar un document — este o <strong>poveste condensata</strong> despre cine esti si ce poti aduce.</p>

<h4>Ce vei invata in acest capitol</h4>
<ul>
<li>De ce un CV bun nu este despre tine, ci despre <strong>ce poti face pentru angajator</strong></li>
<li>Cele 3 greseli fatale care duc la respingerea unui CV in primele secunde</li>
<li>Diferenta dintre un CV generic si unul care atrage atentia</li>
</ul>

<h4>Cele 3 greseli fatale</h4>
<ol>
<li><strong>Format haotic</strong> — Daca recrutorii nu gasesc rapid informatia, trec mai departe. Un CV trebuie sa fie scanabil vizual.</li>
<li><strong>Obiective vagi</strong> — "Caut un loc de munca provocator" nu spune nimic. Fii specific: ce pozitie, ce domeniu, ce contributie.</li>
<li><strong>Lipsa rezultatelor</strong> — Nu scrie "Am lucrat in echipa", scrie "Am coordonat o echipa de 5 persoane care a livrat proiectul cu 2 saptamani inainte de deadline."</li>
</ol>

<blockquote>Retine: CV-ul tau nu trebuie sa fie cel mai lung. Trebuie sa fie cel mai <strong>relevant</strong>.</blockquote>`
          },
          {
            id: "cv-vs-portofoliu",
            title: "CV vs. Portofoliu vs. LinkedIn",
            duration: "4 min",
            content: `<h3>Trei instrumente, trei scopuri diferite</h3>
<p>Multi confunda CV-ul cu portofoliul sau cu profilul de LinkedIn. Fiecare are un rol specific:</p>

<h4>CV-ul</h4>
<p>Un document <strong>concis</strong> (1-2 pagini) care sumarizeaza experienta, educatia si competentele tale. Este formal, structurat si trimis direct angajatorilor.</p>

<h4>Portofoliul</h4>
<p>O colectie de <strong>proiecte si lucrari</strong> care demonstreaza ce stii sa faci. Essential pentru creativi, developeri, designeri. Poate fi un website, un PDF sau un folder Google Drive.</p>

<h4>LinkedIn</h4>
<p>Profilul tau profesional <strong>public</strong>. Spre deosebire de CV, LinkedIn permite networking activ, recomandari si vizibilitate continua.</p>

<h4>Cand folosesti fiecare?</h4>
<ul>
<li><strong>Aplici la un job</strong> → CV (obligatoriu) + LinkedIn (recomandat) + Portofoliu (daca ai)</li>
<li><strong>Internship sau voluntariat</strong> → CV + scrisoare de motivatie</li>
<li><strong>Erasmus / burse</strong> → CV Europass + scrisoare de intentie</li>
</ul>`
          }
        ]
      },
      {
        id: "structura-cv",
        title: "Structura unui CV castigator",
        description: "Sectiunile esentiale, ordinea corecta si cum sa adaptezi formatul in functie de experienta ta.",
        lessons: [
          {
            id: "sectiuni-esentiale",
            title: "Cele 6 sectiuni esentiale",
            duration: "6 min",
            content: `<h3>Anatomia unui CV profesional</h3>
<p>Indiferent de domeniu sau experienta, un CV solid contine aceste sectiuni, in aceasta ordine:</p>

<h4>1. Header — Informatii de contact</h4>
<ul>
<li>Nume complet (bold, mare)</li>
<li>Numar de telefon + email profesional</li>
<li>Oras (nu adresa completa)</li>
<li>Link LinkedIn / portofoliu (daca ai)</li>
</ul>
<p><strong>Atentie:</strong> Foloseste un email profesional (prenume.nume@gmail.com), nu "coolboy2007@yahoo.com".</p>

<h4>2. Profil / Obiectiv profesional</h4>
<p>2-3 propozitii care spun cine esti si ce cauti. Scurt, direct, personalizat pentru fiecare aplicare.</p>

<h4>3. Educatie</h4>
<p>Liceu, note relevante, olimpiade, premii. Daca esti elev, aceasta sectiune vine INAINTEA experientei.</p>

<h4>4. Experienta (sau Proiecte)</h4>
<p>Voluntariat, proiecte scolare, internship-uri. Foloseste <strong>verbe de actiune</strong>: "Am organizat", "Am coordonat", "Am creat".</p>

<h4>5. Competente</h4>
<p>Hard skills (limbi straine, software) + soft skills (comunicare, leadership). Fii onest — nu scrie "fluent in franceza" daca stii doar "Bonjour".</p>

<h4>6. Activitati extra</h4>
<p>Cursuri online, certificari, hobby-uri relevante. Arata ca esti activ si curios.</p>`
          },
          {
            id: "verbe-actiune",
            title: "Verbe de actiune si impact",
            duration: "5 min",
            content: `<h3>Transforma descrierile plictisitoare in declaratii de impact</h3>
<p>Diferenta dintre un CV mediocru si unul excelent sta in <strong>cum descrii ce ai facut</strong>.</p>

<h4>Regula de aur: Verb de actiune + Context + Rezultat</h4>

<h4>Exemple rele vs. bune:</h4>
<ul>
<li>❌ "Am fost responsabil de organizarea evenimentelor"</li>
<li>✅ "Am organizat 3 evenimente de caritate cu peste 200 de participanti, strangand 5.000 lei"</li>
</ul>
<ul>
<li>❌ "Am lucrat in echipa la un proiect"</li>
<li>✅ "Am coordonat o echipa de 4 colegi pentru un proiect de cercetare premiat la olimpiada judeteana"</li>
</ul>

<h4>Top 20 verbe de actiune</h4>
<p><strong>Leadership:</strong> Am coordonat, Am condus, Am initiat, Am supervizat</p>
<p><strong>Creatie:</strong> Am creat, Am dezvoltat, Am proiectat, Am implementat</p>
<p><strong>Comunicare:</strong> Am prezentat, Am negociat, Am facilitat, Am convins</p>
<p><strong>Analiza:</strong> Am analizat, Am evaluat, Am optimizat, Am cercetat</p>
<p><strong>Rezultate:</strong> Am crescut, Am redus, Am imbunatatit, Am livrat</p>

<blockquote>Trucul: Citeste fiecare bullet point din CV si intreaba-te: "Si ce daca?" Daca nu ai un raspuns clar, rescrie.</blockquote>`
          },
          {
            id: "greseli-comune",
            title: "10 greseli pe care sa le eviti",
            duration: "5 min",
            content: `<h3>Cele mai frecvente greseli din CV-urile pe care le vedem</h3>

<ol>
<li><strong>Poza neprofesionala</strong> — Selfie-uri, poze de la petreceri sau poze de pe plaja. Foloseste o poza pe fundal neutru, zambind natural.</li>
<li><strong>Greseli gramaticale</strong> — Un singur "care" in loc de "pe care" si credibilitatea scade. Citeste CV-ul cu voce tare inainte sa-l trimiti.</li>
<li><strong>Mai mult de 2 pagini</strong> — Ca elev sau student, 1 pagina este ideal. Niciodata mai mult de 2.</li>
<li><strong>Design excesiv</strong> — Culorile si grafica trebuie sa ajute citirea, nu sa distraga. Simplitatea este eleganta.</li>
<li><strong>Email neprofesional</strong> — Inca mai ai bombarder_king@yahoo.com? E timpul pentru prenume.nume@gmail.com.</li>
<li><strong>Experienta irelevanta</strong> — Daca aplici la un internship de marketing, experienta de babysitter nu ajuta. Pune doar ce e relevant.</li>
<li><strong>Format PDF</strong> — Trimite mereu in PDF, nu Word. Word-ul se poate strica pe alt calculator.</li>
<li><strong>Lipsa numerelor</strong> — "Am crescut vanzarile" vs "Am crescut vanzarile cu 30% in 3 luni". Numerele conving.</li>
<li><strong>Obiective generice</strong> — "Vreau sa ma dezvolt" spune toata lumea. Fii specific.</li>
<li><strong>Un singur CV pentru tot</strong> — Adapteaza CV-ul pentru fiecare aplicare. Nu exista "CV-ul universal".</li>
</ol>

<blockquote>Pro tip: Inainte sa trimiti CV-ul, cere parerea a 2-3 persoane de incredere. Fresh eyes descopera greseli pe care tu nu le vezi.</blockquote>`
          }
        ]
      },
      {
        id: "design-format",
        title: "Design si formatare",
        description: "Alege template-ul potrivit, fonturi, culori si margini care fac CV-ul tau sa arate profesional.",
        lessons: [
          {
            id: "template-alegere",
            title: "Cum alegi template-ul potrivit",
            duration: "5 min",
            content: `<h3>Designul CV-ului: simplu nu inseamna plictisitor</h3>
<p>CV-ul tau trebuie sa fie <strong>usor de citit</strong>, <strong>profesional</strong> si <strong>consistent</strong>. Iata regulile de aur:</p>

<h4>Fonturi recomandate</h4>
<ul>
<li><strong>Serif (clasic):</strong> Georgia, Garamond — pentru domenii formale (drept, finante)</li>
<li><strong>Sans-serif (modern):</strong> Inter, Calibri, Helvetica — pentru tech, marketing, design</li>
<li>Dimensiune titlu: 14-16pt | Corp text: 10-11pt</li>
</ul>

<h4>Culori</h4>
<ul>
<li>Maxim 2 culori: o culoare primara (navy, albastru inchis) + negru/gri pentru text</li>
<li>Evita: rosu, galben, roz neon, gradient-uri</li>
</ul>

<h4>Layout</h4>
<ul>
<li>Margini: minim 1.5 cm pe toate laturile</li>
<li>Spatiere consistenta intre sectiuni</li>
<li>Aliniament: stanga (nu centrat, nu justify)</li>
</ul>

<h4>Unde gasesti template-uri bune?</h4>
<ol>
<li><strong>Canva</strong> — Gratuit, multe optiuni, export PDF</li>
<li><strong>Google Docs</strong> — Template-uri curate, collaborative</li>
<li><strong>Europass</strong> — Obligatoriu pentru Erasmus si unele aplicari europene</li>
</ol>

<blockquote>Regula #1: Daca CV-ul tau arata bine printat in alb-negru, arata bine oriunde.</blockquote>`
          },
          {
            id: "cv-final-checklist",
            title: "Checklist final inainte de trimitere",
            duration: "4 min",
            content: `<h3>Checklist-ul complet — bifaza fiecare punct</h3>

<h4>Continut</h4>
<ul>
<li>☐ Informatii de contact actualizate</li>
<li>☐ Profil/obiectiv personalizat pentru aceasta aplicare</li>
<li>☐ Educatie cu ani si institutii corecte</li>
<li>☐ Experienta cu verbe de actiune si rezultate</li>
<li>☐ Competente relevante si oneste</li>
<li>☐ Nicio greseala gramaticala sau de tipar</li>
</ul>

<h4>Format</h4>
<ul>
<li>☐ 1 pagina (maxim 2)</li>
<li>☐ Font consistent si lizibil</li>
<li>☐ Spatiere uniforma</li>
<li>☐ Margini adecvate (minim 1.5 cm)</li>
<li>☐ Salvat ca PDF</li>
<li>☐ Numele fisierului: "CV_Prenume_Nume.pdf"</li>
</ul>

<h4>Ultima verificare</h4>
<ul>
<li>☐ Am citit CV-ul cu voce tare</li>
<li>☐ L-am rugat pe cineva sa-l citeasca</li>
<li>☐ Arata bine printat in alb-negru</li>
<li>☐ Toate linkurile functioneaza</li>
</ul>

<blockquote>Felicitari! Daca ai bifat tot, ai un CV care te reprezinta profesional. Acum e timpul sa-l trimiti cu incredere.</blockquote>`
          }
        ]
      }
    ]
  },
  {
    id: "public-speaking",
    title: "Public Speaking — Vorbeste cu Impact",
    description: "De la frica de a vorbi in public la prezentari care captiveaza. Tehnici practice pe care le poti aplica imediat.",
    icon: "🎤",
    color: "bg-navy",
    tier: "Pro",
    totalDuration: "35 min",
    chapters: [
      {
        id: "depaseste-frica",
        title: "Depaseste frica de scena",
        description: "Intelege de ce ne e frica sa vorbim in public si tehnici concrete pentru a o gestiona.",
        lessons: [
          {
            id: "de-ce-frica",
            title: "De ce ne e frica?",
            duration: "5 min",
            content: `<h3>Frica de a vorbi in public: a doua cea mai mare frica a omului</h3>
<p>Studiile arata ca <strong>75% dintre oameni</strong> au o forma de anxietate legata de vorbitul in public. Esti in majoritate — si asta e perfect normal.</p>

<h4>De ce se intampla?</h4>
<p>Creierul nostru interpreteaza atentia unui grup ca pe o <strong>amenintare</strong>. E un mecanism de supravietuire mostenit din vremurile in care a fi observat de un grup putea insemna pericol.</p>

<h4>Simptomele clasice</h4>
<ul>
<li>Palme transpirate si batai rapide ale inimii</li>
<li>Gura uscata si voce tremuranda</li>
<li>Senzatia de "blackout" — uiti ce aveai de spus</li>
<li>Dorinta de a fugi din sala</li>
</ul>

<h4>Vestea buna</h4>
<p>Frica de a vorbi in public nu se "vindeca" — se <strong>gestioneaza</strong>. Chiar si cei mai buni speakeri din lume au emotii. Diferenta? Ei au invatat sa transforme frica in energie.</p>

<blockquote>"Nu trebuie sa fii neinfricat. Trebuie sa fii pregatit." — Aceasta este singura regula.</blockquote>`
          },
          {
            id: "tehnici-calmare",
            title: "3 tehnici de calmare rapida",
            duration: "4 min",
            content: `<h3>Tehnici pe care le poti folosi chiar inainte de a urca pe scena</h3>

<h4>1. Respiratia 4-7-8</h4>
<p>O tehnica folosita de Navy SEALs pentru a se calma sub presiune:</p>
<ol>
<li>Inspira pe nas timp de <strong>4 secunde</strong></li>
<li>Tine aerul <strong>7 secunde</strong></li>
<li>Expira pe gura <strong>8 secunde</strong></li>
<li>Repeta de 3 ori</li>
</ol>
<p>Efectul: ritmul cardiac scade, mintea se linisteste, mainile nu mai tremura.</p>

<h4>2. Power Posing (2 minute)</h4>
<p>Cu 2 minute inainte de prezentare, adopta o <strong>postura deschisa</strong>: picioare departate, maini pe solduri, piept in fata. Studiile arata ca aceasta postura creste testosteronul (incredere) si scade cortizolul (stres).</p>

<h4>3. Ancora mentala</h4>
<p>Aminteste-ti un moment in care te-ai simtit <strong>incredibil de bine</strong> — un succes, un compliment, o realizare. Tine acea stare in minte 30 de secunde. Creierul nu face diferenta clara intre amintiri si prezent.</p>

<blockquote>Practica aceste tehnici acasa, nu doar cand ai nevoie. Cu cat le folosesti mai des, cu atat functioneaza mai bine.</blockquote>`
          }
        ]
      },
      {
        id: "structura-prezentare",
        title: "Structureaza o prezentare",
        description: "Formula pentru o prezentare clara, memorabila si convingatoare.",
        lessons: [
          {
            id: "formula-prezentare",
            title: "Formula: Hook → Poveste → Punct → CTA",
            duration: "6 min",
            content: `<h3>Orice prezentare buna urmeaza o structura</h3>
<p>Nu improviza. Foloseste aceasta formula testata:</p>

<h4>1. Hook (primele 30 de secunde)</h4>
<p>Capteaza atentia IMEDIAT. Optiuni:</p>
<ul>
<li><strong>Intrebare:</strong> "Cati dintre voi au facut ceva ce le-a fost frica sa faca?"</li>
<li><strong>Statistica surprinzatoare:</strong> "92% dintre elevi nu stiu ce vor sa faca dupa liceu."</li>
<li><strong>Afirmatie provocatoare:</strong> "Tot ce stiti despre CV-uri este gresit."</li>
</ul>

<h4>2. Poveste (corpul prezentarii)</h4>
<p>Oamenii nu tin minte date si cifre. Tin minte <strong>povesti</strong>. Structura unei povesti bune:</p>
<ul>
<li>Personaj (tu sau cineva relatable)</li>
<li>Provocare (ce problema a aparut)</li>
<li>Transformare (cum a fost depasita)</li>
</ul>

<h4>3. Punct (concluzia)</h4>
<p>Un singur mesaj clar pe care vrei ca audienta sa-l retina. Daca ai 3 mesaje, ai 0 mesaje.</p>

<h4>4. CTA (Call to Action)</h4>
<p>Spune-le ce sa faca ACUM: "Deschideti telefonul si scrieti-va obiectivul pentru saptamana asta."</p>

<blockquote>Regula lui Steve Jobs: Daca nu poti explica ideea intr-o propozitie, nu esti pregatit sa o prezinti.</blockquote>`
          },
          {
            id: "slide-design",
            title: "Slide-uri care ajuta, nu distrag",
            duration: "5 min",
            content: `<h3>Slide-urile sunt suportul tau vizual, nu teleprompterul</h3>

<h4>Regula 1-6-6</h4>
<ul>
<li>1 idee per slide</li>
<li>Maximum 6 cuvinte per rand</li>
<li>Maximum 6 randuri per slide</li>
</ul>

<h4>Ce sa pui pe slide-uri</h4>
<ul>
<li>Imagini puternice care sustin mesajul</li>
<li>Cifre-cheie (mari, bold, centrate)</li>
<li>Citate scurte</li>
<li>Diagrame simple</li>
</ul>

<h4>Ce sa NU pui pe slide-uri</h4>
<ul>
<li>❌ Paragrafe de text (nimeni nu le citeste)</li>
<li>❌ Animatii complicate (distreaza atentia)</li>
<li>❌ Fonturi mici (sub 24pt)</li>
<li>❌ Tabele complexe (nu se vad din spate)</li>
</ul>

<h4>Instrumente recomandate</h4>
<ol>
<li><strong>Canva Presentations</strong> — Gratuit, modern, usor</li>
<li><strong>Google Slides</strong> — Colaborativ, accesibil</li>
<li><strong>Pitch</strong> — Profesional, animatii subtile</li>
</ol>

<blockquote>Testul slide-ului: Daca oamenii se uita la slide in loc sa te asculte, slide-ul e prea plin.</blockquote>`
          }
        ]
      },
      {
        id: "livrare",
        title: "Livreaza cu incredere",
        description: "Voce, contact vizual, limbaj corporal si cum sa gestionezi intrebarile.",
        lessons: [
          {
            id: "voce-si-pauze",
            title: "Voce, pauze si ritmul perfect",
            duration: "5 min",
            content: `<h3>Vocea ta este cel mai puternic instrument</h3>

<h4>Volumul</h4>
<p>Vorbeste mai tare decat crezi ca e necesar. In momentul in care simti ca vorbesti "prea tare", probabil esti la nivelul perfect pentru audienta.</p>

<h4>Ritmul</h4>
<p>Cea mai mare greseala: a vorbi prea repede. Incetineste cu 20% fata de cum vorbesti normal. Audienta are nevoie de timp sa proceseze.</p>

<h4>Pauzele — arma ta secreta</h4>
<p>Pauzele strategice sunt mai puternice decat cuvintele:</p>
<ul>
<li><strong>Inainte de un punct important:</strong> "Si singurul lucru care conteaza este... <em>(pauza 2s)</em> ...sa incepi."</li>
<li><strong>Dupa o intrebare retorica:</strong> "De ce e important? <em>(pauza 3s)</em>"</li>
<li><strong>Cand pierzi firul:</strong> In loc de "aaaa" sau "deci", pur si simplu taci 2 secunde. Nimeni nu observa.</li>
</ul>

<h4>Exercitiu practic</h4>
<p>Citeste un paragraf cu voce tare. Apoi citeste-l din nou, dar de 2 ori mai incet, cu o pauza de 2 secunde dupa fiecare propozitie. Observa cat de diferit suna.</p>

<blockquote>Aminteste-ti: nu e vorba despre cat de multe spui, ci despre cat retine audienta.</blockquote>`
          },
          {
            id: "limbaj-corporal",
            title: "Limbajul corporal pe scena",
            duration: "5 min",
            content: `<h3>Corpul tau vorbeste inainte sa deschizi gura</h3>

<h4>Contactul vizual</h4>
<p>Nu te uita la perete, la podea sau la laptop. Priveste <strong>o persoana la un moment dat</strong>, 3-5 secunde, apoi treci la urmatoarea. Acesta se numeste "lighthouse technique".</p>

<h4>Mainile</h4>
<ul>
<li>NU le tine in buzunare, la spate sau incrucisate</li>
<li>Foloseste gesturi deschise, la nivelul pieptului</li>
<li>Indica slide-ul cu palma deschisa, nu cu degetul</li>
</ul>

<h4>Miscarea</h4>
<ul>
<li>Nu sta blocat intr-un loc — misca-te cu scop</li>
<li>Mergi catre audienta cand faci un punct important</li>
<li>Evita balansatul sau pasii nervosi</li>
</ul>

<h4>Zambetul</h4>
<p>Zambeste natural la inceput si la sfarsit. Un zambet autentic transmite incredere si deschidere.</p>

<blockquote>Exercitiu: Inregistreaza-te vorbind 2 minute pe telefon. Uita-te fara sunet. Ce spune limbajul tau corporal?</blockquote>`
          }
        ]
      }
    ]
  },
  {
    id: "orientare-cariera",
    title: "Orientare in Cariera — Gaseste-ti Directia",
    description: "Nu stii ce vrei sa faci dupa liceu? Acest curs te ajuta sa-ti descoperi punctele forte, sa explorezi optiuni si sa faci alegeri informate.",
    icon: "🧭",
    color: "bg-oak",
    tier: "Basic",
    totalDuration: "40 min",
    chapters: [
      {
        id: "autocunoastere",
        title: "Autocunoastere: Cine esti?",
        description: "Descopera-ti valorile, punctele forte si interesele reale — nu ce cred altii despre tine.",
        lessons: [
          {
            id: "valori-personale",
            title: "Valorile tale: busola interna",
            duration: "6 min",
            content: `<h3>Valorile tale determina ce te face fericit in munca</h3>
<p>Inainte sa alegi o facultate sau o cariera, trebuie sa stii <strong>ce conteaza cu adevarat pentru tine</strong>. Nu ce cred parintii tai, nu ce e "la moda", ci ce te face sa te simti implinit.</p>

<h4>Exercitiu: Top 5 valori</h4>
<p>Din lista de mai jos, alege <strong>doar 5</strong> valori care rezonseaza cel mai mult cu tine:</p>
<ul>
<li>Creativitate, Libertate, Securitate financiara</li>
<li>Impact social, Recunoastere, Provocare intelectuala</li>
<li>Echipa, Independenta, Calatorii</li>
<li>Echilibru viata-munca, Putere/influenta, Invatare continua</li>
<li>Ajutarea altora, Stabilitate, Aventura</li>
</ul>

<h4>Ce faci cu aceste valori?</h4>
<p>Valorile tale sunt <strong>filtrul</strong> prin care evaluezi orice oportunitate. Daca valorile tale sunt "Creativitate" si "Libertate", un job de contabil intr-o corporatie nu te va face fericit — chiar daca plateste bine.</p>

<blockquote>Nu exista valori "bune" sau "rele". Exista doar valori care sunt ale tale — sau nu.</blockquote>`
          },
          {
            id: "puncte-forte",
            title: "Punctele forte: ce faci tu mai bine?",
            duration: "5 min",
            content: `<h3>Talentele tale naturale vs. competentele invatate</h3>
<p>Exista o diferenta intre ceea ce <strong>poti</strong> face si ceea ce <strong>iti place</strong> sa faci. Intersectia lor = zona ta de excelenta.</p>

<h4>Metoda Ikigai simplificata</h4>
<p>Raspunde la aceste 4 intrebari:</p>
<ol>
<li>Ce imi place sa fac? (Pasiune)</li>
<li>La ce sunt bun? (Talent)</li>
<li>Ce are nevoie lumea? (Misiune)</li>
<li>Pentru ce as putea fi platit? (Profesie)</li>
</ol>
<p>Intersectia tuturor = <strong>Ikigai</strong> (motivul pentru care te trezesti dimineata).</p>

<h4>Trucul observatorului</h4>
<p>Intreaba 3 persoane de incredere: "Ce crezi ca fac eu bine?" Raspunsurile lor te vor surprinde — adesea vedem mai clar talentele altora decat pe ale noastre.</p>

<blockquote>Nu trebuie sa fii "cel mai bun" la ceva. Trebuie sa fii suficient de bun la ceva ce iti place suficient de mult incat sa perseverezi.</blockquote>`
          }
        ]
      },
      {
        id: "explorare-optiuni",
        title: "Exploreaza optiunile",
        description: "Facultate, gap year, internship, antreprenoriat — ce optiuni ai si cum le evaluezi.",
        lessons: [
          {
            id: "dupa-liceu",
            title: "Ce optiuni ai dupa liceu?",
            duration: "6 min",
            content: `<h3>Nu exista o singura cale corecta</h3>
<p>Societatea ne spune: liceu → facultate → job. Dar realitatea e mult mai nuantata.</p>

<h4>Optiunile tale</h4>

<p><strong>1. Facultate in Romania</strong></p>
<ul>
<li>Pro: Structura, diploma recunoscuta, retea sociala</li>
<li>Contra: Poate fi teoretica, dureaza 3-4 ani</li>
<li>Ideal pentru: Medicina, drept, inginerie, stiinte</li>
</ul>

<p><strong>2. Facultate in strainatate</strong></p>
<ul>
<li>Pro: Expunere internationala, calitate academica, limbi straine</li>
<li>Contra: Cost ridicat, departe de casa</li>
<li>Ideal pentru: Cei cu ambitii internationale</li>
</ul>

<p><strong>3. Gap Year</strong></p>
<ul>
<li>Pro: Timp sa explorezi, voluntariat, calatorii, proiecte</li>
<li>Contra: Presiune sociala, risc de "pierdere de timp"</li>
<li>Ideal pentru: Cei care nu stiu ce vor (si asta e OK!)</li>
</ul>

<p><strong>4. Cursuri si certificari</strong></p>
<ul>
<li>Pro: Rapide, practice, ieftine sau gratuite</li>
<li>Contra: Nu inlocuiesc o diploma in toate domeniile</li>
<li>Ideal pentru: IT, marketing, design, freelancing</li>
</ul>

<blockquote>Nu lua decizia bazat pe ce fac prietenii tai. Fiecare are un drum diferit — si asta e perfect normal.</blockquote>`
          },
          {
            id: "informatii-domenii",
            title: "Cum cercetezi un domeniu",
            duration: "5 min",
            content: `<h3>Nu alege un domeniu pe baza a ce crezi tu ca inseamna</h3>

<h4>Pasul 1: Vorbeste cu oameni din domeniu</h4>
<p>Cel mai valoros lucru pe care il poti face: contacteaza 3 persoane care lucreaza in domeniul care te intereseaza si intreaba-le:</p>
<ul>
<li>"Cum arata o zi tipica de lucru?"</li>
<li>"Ce iti place cel mai mult/putin?"</li>
<li>"Ce ai fi vrut sa stii inainte sa incepi?"</li>
<li>"Ce competente sunt cele mai importante?"</li>
</ul>

<h4>Pasul 2: Incearca inainte sa te angajezi</h4>
<ul>
<li><strong>Job shadowing</strong> — Petrece o zi urmarind pe cineva la locul de munca</li>
<li><strong>Internship / voluntariat</strong> — Chiar si 2 saptamani iti dau o perspectiva reala</li>
<li><strong>Proiecte personale</strong> — Vrei sa fii designer? Fa 3 proiecte. Vrei sa fii programator? Construieste o aplicatie mica.</li>
</ul>

<h4>Pasul 3: Cerceteaza piata muncii</h4>
<ul>
<li>Ce joburi exista in domeniu? Ce salarii au?</li>
<li>Domeniul creste sau scade?</li>
<li>Ce competente vor fi relevante peste 5-10 ani?</li>
</ul>

<blockquote>Nu trebuie sa gasesti "jobul perfect". Trebuie sa gasesti o directie care te entuziasmaza suficient incat sa incepi sa mergi.</blockquote>`
          }
        ]
      }
    ]
  },
  {
    id: "proiecte-echipa",
    title: "Lucrul in Echipa — De la Idee la Rezultat",
    description: "Cum sa lucrezi eficient in echipa, sa gestionezi conflicte si sa livrezi proiecte de impact.",
    icon: "👥",
    color: "bg-success",
    tier: "Pro",
    totalDuration: "30 min",
    chapters: [
      {
        id: "baze-echipa",
        title: "Fundamentele unei echipe bune",
        description: "Ce face o echipa sa functioneze si care sunt rolurile esentiale.",
        lessons: [
          {
            id: "roluri-echipa",
            title: "Roluri in echipa: gaseste-ti locul",
            duration: "5 min",
            content: `<h3>O echipa buna nu e formata din 5 lideri</h3>
<p>Fiecare echipa eficienta are nevoie de un mix de roluri complementare:</p>

<h4>Cele 4 roluri esentiale</h4>
<ul>
<li><strong>Liderul / Coordonatorul</strong> — Stabileste directia, ia decizii, mentine echipa focalizata. Nu e neaparat cel mai vocal, ci cel care vede imaginea de ansamblu.</li>
<li><strong>Creatorul / Inovatorul</strong> — Genereaza idei, propune solutii neconventionale, gandeste "outside the box". Poate fi haotic, dar aduce scanteia.</li>
<li><strong>Executantul / Implementatorul</strong> — Transforma ideile in actiune. Organizeaza, planifica, face treaba. Coloana vertebrala a echipei.</li>
<li><strong>Comunicatorul / Conectorul</strong> — Asigura ca toata lumea e pe aceeasi pagina. Mediaza conflicte, mentine moralul, creeaza coeziune.</li>
</ul>

<h4>Cum iti gasesti rolul?</h4>
<p>Gandeste-te la ultimul proiect de grup la care ai lucrat:</p>
<ul>
<li>Ai fost cel care a propus ideea? → <strong>Creator</strong></li>
<li>Ai organizat task-urile? → <strong>Implementator</strong></li>
<li>Ai tinut echipa unita? → <strong>Comunicator</strong></li>
<li>Ai luat deciziile grele? → <strong>Lider</strong></li>
</ul>

<blockquote>Nu esti blocat intr-un singur rol. Cel mai bun lucru este sa stii ce rol joci natural si sa il completezi cu altele cand e nevoie.</blockquote>`
          },
          {
            id: "comunicare-echipa",
            title: "Comunicarea in echipa: regulile de baza",
            duration: "5 min",
            content: `<h3>90% din problemele de echipa sunt probleme de comunicare</h3>

<h4>Regula 1: Claritate inainte de viteza</h4>
<p>Inainte de a incepe orice proiect, asigurati-va ca TOTI membrii inteleg:</p>
<ul>
<li>Ce trebuie livrat? (output concret)</li>
<li>Pana cand? (deadline realist)</li>
<li>Cine face ce? (responsabilitati clare)</li>
<li>Cum comunicam? (canal + frecventa)</li>
</ul>

<h4>Regula 2: Feedback-ul sandwich</h4>
<p>Cand dai feedback unui coechipier:</p>
<ol>
<li><strong>Pozitiv:</strong> "Imi place cum ai structurat prezentarea."</li>
<li><strong>Constructiv:</strong> "Cred ca putem imbunatati partea cu datele — le putem vizualiza mai clar."</li>
<li><strong>Incurajare:</strong> "Per total e pe drumul bun, hai sa finalizam impreuna."</li>
</ol>

<h4>Regula 3: Conflictul nu e rau</h4>
<p>Dezacordurile respectuoase duc la solutii mai bune. Ce e toxic e <strong>evitarea</strong> conflictului — problemele ignorate cresc.</p>

<blockquote>Cea mai importanta intrebare pe care o poti pune in echipa: "Toata lumea e de acord cu asta, sau doar tace?"</blockquote>`
          }
        ]
      },
      {
        id: "management-proiect",
        title: "Gestioneaza un proiect",
        description: "De la brainstorming la livrare — un mini-ghid de project management pentru elevi.",
        lessons: [
          {
            id: "planificare",
            title: "Planificarea in 5 pasi",
            duration: "6 min",
            content: `<h3>Un proiect fara plan e un hobby cu deadline</h3>

<h4>Pasul 1: Defineste obiectivul SMART</h4>
<ul>
<li><strong>S</strong>pecific — Ce exact vrem sa realizam?</li>
<li><strong>M</strong>asurabil — Cum stim ca am reusit?</li>
<li><strong>A</strong>tins (Achievable) — E realist cu resursele noastre?</li>
<li><strong>R</strong>elevant — De ce conteaza?</li>
<li><strong>T</strong>imp — Pana cand?</li>
</ul>

<h4>Pasul 2: Sparge in task-uri</h4>
<p>Ia obiectivul mare si sparge-l in 5-10 task-uri mici, fiecare cu un responsabil si un deadline.</p>

<h4>Pasul 3: Estimeaza timpul</h4>
<p>Regula: ia cat crezi ca dureaza si inmulteste cu 1.5. Mereu dureaza mai mult decat crezi.</p>

<h4>Pasul 4: Stabileste checkpoint-uri</h4>
<p>Programeaza 2-3 momente de verificare pe parcurs. Nu astepta deadline-ul sa descoperi ca ceva nu merge.</p>

<h4>Pasul 5: Pregateste un "Plan B"</h4>
<p>Ce faci daca un membru se imbolnaveste? Daca un tool nu functioneaza? Gandeste-te la riscuri si solutii de backup.</p>

<blockquote>Un plan nu trebuie sa fie perfect. Trebuie sa existe. Poti ajusta pe parcurs — dar fara directie, te invartesti in cerc.</blockquote>`
          },
          {
            id: "livrare-prezentare",
            title: "Livreaza si prezinta rezultatul",
            duration: "4 min",
            content: `<h3>Proiectul nu e terminat cand e gata. E terminat cand e prezentat.</h3>

<h4>Pregatirea livrarii</h4>
<ul>
<li>Verifica de 2 ori inainte de a trimite/prezenta</li>
<li>Testeaza tot ce poate fi testat (link-uri, imagini, demo)</li>
<li>Pregateste un pitch de 60 de secunde: "Ce am facut, de ce conteaza, ce am invatat"</li>
</ul>

<h4>Retrospectiva — cel mai important pas</h4>
<p>Dupa fiecare proiect, intreaba echipa:</p>
<ol>
<li>"Ce a mers bine?" (continuam sa facem)</li>
<li>"Ce nu a mers?" (schimbam data viitoare)</li>
<li>"Ce am invatat?" (luam cu noi)</li>
</ol>

<h4>Documenteaza totul</h4>
<p>Pune proiectul in portofoliu! Salveaza:</p>
<ul>
<li>Screenshots / demo video</li>
<li>Descrierea proiectului (2-3 propozitii)</li>
<li>Rolul tau specific</li>
<li>Rezultatele (numere, daca ai)</li>
</ul>

<blockquote>Fiecare proiect de echipa este un capitol in portofoliul tau. Trateaza-l ca atare.</blockquote>`
          }
        ]
      }
    ]
  }
];

// Helper to count total lessons in a course
export function getTotalLessons(course: Course): number {
  return course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
}

// Helper to get flat lesson index
export function getLessonIndex(course: Course, chapterId: string, lessonId: string): number {
  let index = 0;
  for (const ch of course.chapters) {
    for (const lesson of ch.lessons) {
      if (ch.id === chapterId && lesson.id === lessonId) return index;
      index++;
    }
  }
  return -1;
}
