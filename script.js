
function _load() {
  
  //1es szabaly: mindig tervezd meg a lepeseket!
  
  //2es szabaly: figyelj a cleancode szabalyokra(tagolas,kommenteles)!
  
  //3as szabaly: fontos ne kapkodj - irasjelek, kis es nagybetuk, zarojelek pontos hasznalata!

  /* html
  1. hivatkozasok megadasa (css-link,js-script,font style-link+url)
  2. tabolas 
  <div class=attention>
  <h1>Minden elem fontos</h1>
  </div>
  
  <div class=attention>
  <h2>Minden elem fontos</h2>
  </div>
  
  3. minden tervezett elem letrehozasa es utana lepjunk tovabb a kulcsinyre-css es a cselekvesekre-js. Azaz teljes elorelathato struktura elkeszitese.
  
  
  scss/css
  1. mindig kezd azzal 
  *,
  *::before,
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  2. tagolas, mert akkor kesobb is tudod melyik elemhez milyen tulajdonsag tartozik
  
  3. kivulrol befele haladva (a szerkezetben) add meg az elemek tulajdonsagait      
  
  
  js
  1. Mindig azzal kezdj
  function _load() {
    //console.log(mukodik);
  }
  
  window.addEventListener("load", _load);
  
  2. figyelj arra, ha nem mukodik az automatikus kiegeszites, akkor elirtad vagy kommentelsz
  
  3. console.log(); hasznalata a lekerendo atalakitas utan egybol
  */
 
 let rootE = document.getElementById("root");
 
 let notes = [];
 let button = document.createElement("button");
 button.setAttribute("id", "hjs");
 button.innerHTML = "HighlightsJS bekapcsológomb";
 document.body.appendChild(button);
 
 notes.push({
   tag: "h3",
   content: `
   Órai munka.
   `
  });
  notes.push({
    tag: "div",
    content: `
    1.
    //1es szabaly: mindig tervezd meg a lepeseket! <br>
    
    //2es szabaly: figyelj a cleancode szabalyokra(tagolas,kommenteles)! <br>
    
    //3as szabaly: fontos ne kapkodj - irasjelek, kis es nagybetuk, zarojelek pontos hasznalata!<br>
    
  /* html
    1. hivatkozasok megadasa (css-link,js-script,font style-link+url)<br>
    2. tabolas
    `
  });
  notes.push({
    tag: "code",
    content: `
    &lt;div class=attention&gt; <br>
    &lt;h2&gt;
    &lt;Minden elem fontos&gt; 
    &lt;/h2&gt; <br>
    &lt;/div&gt;   
    `
  });
  notes.push({
    tag: "div",
    content: `
    3. minden tervezett elem letrehozasa es utana lepjunk tovabb a kulcsinyre-css es a cselekvesekre-js. Azaz teljes elorelathato struktura elkeszitese.
    `
  });
  notes.push({
    tag: "div",
    content: `
    scss/css
    1. mindig kezd azzal 
 `
  });
  notes.push({
    tag: "code",
    content: `
    *,
    *::before,
    *::after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    `
  });
  notes.push({
    tag: "div",
    content: `
2. tagolas, mert akkor kesobb is tudod melyik elemhez milyen tulajdonsag tartozik
    
    3. kivulrol befele haladva (a szerkezetben) add meg az elemek tulajdonsagait      
    `
  });
  notes.push({
    tag: "div",
    content: `
    js
    1. Mindig azzal kezdj <br>
        
    2. figyelj arra, ha nem mukodik az automatikus kiegeszites, akkor elirtad vagy kommentelsz <br>
      <br>
    3. console.log(); hasznalata a lekerendo atalakitas utan egybol <br>
  `
  });
 //Házi
 notes.push({
  tag: "h3",
  content: `
Hétfői feladat:
`
});

notes.push({
  tag: "div",
  content: `
 1. A megfelelő cél vagy kiindulási objektum kiválasztása
`
});
notes.push({
  tag: "code",
  content: `  document.getElementById/Class("anything"); document.querySelectorAll
`
});
notes.push({
  tag: "div",
  content: `
 2. For ciklus relációs jelei és értékei pl:
`
});
notes.push({
  tag: "code",
  content: `
 for (i = 0; i </=/> anything; i++)
`
});
notes.push({
  tag: "div",
  content: `
3.  Relációs jelek számának pontos megadása függvényekben, ha ezt elrontjuk, ellenkező hibát, vagy 
ellenkező módon teljesülést kaphatunk.
`
});
notes.push({
  tag: "code",
  content: `
  1 === let one <br>
  2 == two
`
});
notes.push({
  tag: "div",
  content: `
4. A " <b>;</b> " vagy "<b>,</b> " használata a sorok végén, a zárójelektől függően.
`
});
notes.push({
  tag: "code",
  content: `
  document.getElementById("anything, anything_els");
`
});

notes.push({
  tag: "div",
  content: `
 5. Tömbök [ ]-be írása
`
});
notes.push({
  tag: "div",
  content: `
6. Módosításkor a teljes parancs megadása, pl:
`
});
notes.push({
  tag: "code",
  content: `
  object.style.height = 100%; <br>
  és nem: object.height = 100%;
`
});
notes.push({
  tag: "div",
  content: `
7. Ne helyezzünk túl sok függvényt egy függvényen belülre, mert az lassaítja a végigfutást.
`
});
notes.push({
  tag: "div",
  content: `
8. Más helyzetben mást célszerű használni:
`
});
notes.push({
  tag: "code",
  content: `
  document.write - document.[...].innerHTML 
`
});
notes.push({
  tag: "div",
  content: `
9. Értékek hozzáadása idézőjeleken kívül
`
});
notes.push({
  tag: "code",
  content: `
  console.log ("Név: " + name)
`
});
notes.push({
  tag: "div",
  content: `
10. Angol nyelvű változók használata
`
});
  
  //console.log(notes);
  for (note of notes) {
    
    root.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };

  document.getElementById("hjs").addEventListener("click", hjs) ;
  function hjs(){
    document.querySelectorAll('div code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}
/* function hjs() {
  document.querySelectorAll('div code').forEach((block) => {
    hljs.highlightBlock(block);
  });
} */

window.addEventListener("load", _load);