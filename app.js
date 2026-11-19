
/* ===== MA’LUMOTLAR =====
 C(nom, wikiSahifa, tur, toifa, narx$, ot kuchi, moment Nm, 0-100 s, maks km/s, yoqilg‘i, dvigatel, uzatma, yuritma, sarf/masofa, o‘rindiq, yukxona, rang, tavsif)
 Barcha raqamlar taxminiy. Narxni/ma’lumotni shu yerda o‘zgartiring. */
const C=(n,w,t,c,p,hp,tq,acc,top,fuel,eng,tr,dr,cons,seat,trunk,col,d)=>({n,w,t,c,p,hp,tq,acc,top,fuel,eng,tr,dr,cons,seat,trunk,col,d,ev:fuel==="Elektr"});
const CARS=[
C("BMW 118i","BMW_1_Series","Hatchback","Sedan",36900,136,220,8.5,213,"Benzin","1.5L 3-silindrli turbo","7 pog‘onali DCT","Old","5.7 L/100 km",5,"380 L","#c9d1dc","Shahar uchun ixcham va chaqqon premium hatchback."),
C("BMW 220i Gran Coupé","BMW_2_Series","Sedan","Sedan",39900,156,230,7.9,225,"Benzin","1.5L 3-silindrli turbo","7 pog‘onali DCT","Old","6.0 L/100 km",5,"430 L","#2b4a8f","Kupe siluetidagi to‘rt eshikli, yoshlar uchun sport avtomobil."),
C("BMW 330i","BMW_3_Series","Sedan","Sedan",45900,255,400,5.6,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","6.8 L/100 km",5,"480 L","#d8dde4","Sport sedanlar etalon­i: ideal boshqaruv va qulaylik."),
C("BMW 530i","BMW_5_Series","Sedan","Sedan",56900,255,400,6.1,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.0 L/100 km",5,"530 L","#1a1d21","Biznes-klass: keng salon va ilg‘or yordamchi tizimlar."),
C("BMW 740i","BMW_7_Series","Sedan","Sedan",99900,375,520,5.1,250,"Benzin","3.0L 6-silindrli turbo (mild-hybrid)","8 pog‘onali avtomat","Orqa / xDrive","8.5 L/100 km",5,"515 L","#8f98a6","Flagman sedan: hashamat, massaj o‘rindiqlari, kinoteatr ekrani."),
C("BMW 430i Coupé","BMW_4_Series","Coupe","Coupe",52500,255,400,5.5,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.0 L/100 km",4,"440 L","#c8472f","Ikki eshikli kupe — jozibali dizayn va sport xarakter."),
C("BMW 840i Coupé","BMW_8_Series","Coupe","Coupe",90900,335,500,4.9,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","Orqa / xDrive","8.5 L/100 km",4,"420 L","#6b7a8f","Gran turismo: yirik kupe, hashamat va tezlik uyg‘unligi."),
C("BMW Z4 sDrive30i","BMW_Z4","Roadster","Coupe",55200,255,400,5.1,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.2 L/100 km",2,"281 L","#e5b100","Ochiq tomli ikki o‘rinli roadster — ozodlik tuyg‘usi."),
C("BMW X1","BMW_X1","SUV","SUV",41500,241,350,6.3,240,"Benzin","2.0L 4-silindrli turbo","7 pog‘onali DCT","xDrive (to‘liq)","7.5 L/100 km",5,"540 L","#9aa7b4","Ixcham krossover: yuqori o‘tirish va tejamkorlik."),
C("BMW X3","BMW_X3","SUV","SUV",49900,248,350,6.1,240,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","8.0 L/100 km",5,"570 L","#2e3a52","O‘rta o‘lchamli SUV: oila va sarguzasht uchun."),
C("BMW X5 xDrive40i","BMW_X5","SUV","SUV",68500,375,520,5.3,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.0 L/100 km",5,"650 L","#b9c4bd","Premium SUV: keng salon, kuchli dvigatel va qulaylik."),
C("BMW X6","BMW_X6","SUV Coupe","SUV",77900,375,520,5.2,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.3 L/100 km",5,"580 L","#4a1f2a","SUV va kupe aralashmasi — jasur, yarqiroq dizayn."),
C("BMW X7 xDrive40i","BMW_X7","SUV","SUV",88000,375,520,5.8,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.5 L/100 km",7,"326 L","#d8d2c6","Eng katta BMW: 7 o‘rinli, hashamatli SUV."),
C("BMW i4 eDrive35","BMW_i4","Elektr Gran Coupé","Elektr",52200,281,400,5.7,190,"Elektr","Elektr motor (orqa)","1 pog‘onali","Orqa","Masofa: ~483 km",5,"470 L","#5aa0e6","Elektr Gran Coupé: nol emissiya, BMW dinamikasi."),
C("BMW i5 eDrive40","BMW_i5","Elektr sedan","Elektr",67100,335,430,5.7,193,"Elektr","Elektr motor (orqa)","1 pog‘onali","Orqa","Masofa: ~582 km",5,"490 L","#e8edf5","5 Series ning to‘liq elektr varianti."),
C("BMW i7 xDrive60","BMW_i7","Elektr sedan","Elektr",124200,536,745,4.5,240,"Elektr","Ikki elektr motor","1 pog‘onali","To‘liq (AWD)","Masofa: ~625 km",5,"500 L","#3d4450","Elektr flagman: hashamat va ulkan 31.3″ orqa ekran."),
C("BMW iX xDrive50","BMW_iX","Elektr SUV","Elektr",87100,516,765,4.4,200,"Elektr","Ikki elektr motor","1 pog‘onali","To‘liq (AWD)","Masofa: ~630 km",5,"500 L","#7fa8a0","Kelajak dizayndagi elektr SUV."),
C("BMW M2","BMW_M2","Coupe","M",64000,453,550,4.1,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa","9.6 L/100 km",4,"390 L","#ff6a13","Eng ixcham M: sof haydash zavqi."),
C("BMW M3 Competition","BMW_M3","Sedan","M",82000,503,650,3.5,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa / M xDrive","10.2 L/100 km",5,"480 L","#2fa36b","Kundalik sedan ko‘rinishidagi poyga mashinasi."),
C("BMW M4 Competition","BMW_M4","Coupe","M",85000,503,650,3.5,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa / M xDrive","10.2 L/100 km",4,"440 L","#e0152f","Sport kupe: ulkan burilish barqarorligi va tovush."),
C("BMW M5","BMW_M5","Sedan","M",119500,717,1000,3.5,250,"Gibrid","4.4L V8 twin-turbo + elektr motor","8 pog‘onali M avtomat","To‘liq (M xDrive)","~3.3 L/100 km (gibrid)",5,"466 L","#1c69d4","Eng kuchli M sedan: 717 ot kuchi, V8 + gibrid.")
];
const RATE=12700; /* 1$ = so‘m (taxminiy, o‘zingiz yangilang) */

/* ===== YORDAMCHILAR ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const MEM={};const S=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){if(v!==undefined)MEM[k]=v;return MEM[k]}};
const st={f:"all",sort:"def",max:130000,q:"",cur:S("cur")||"USD",fav:S("fav")||[],cmp:[],mode:"reg"};
const money=n=>st.cur==="USD"?"$"+n.toLocaleString("en-US"):(n*RATE/1e6).toFixed(0)+" mln so‘m";
const moneyF=n=>st.cur==="USD"?"$"+Math.round(n).toLocaleString("en-US"):Math.round(n*RATE).toLocaleString("ru-RU")+" so‘m";
const shape=c=>/SUV/.test(c.t)?"suv":(c.c==="Coupe"&&c.n!=="BMW M3 Competition")?"coupe":"sedan";
function toast(m){const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",2200)}

/* ===== SVG ZAXIRA RASM (foto yuklanmasa) ===== */
const BODY={sedan:"M14 84 L24 66 Q34 60 66 56 L98 38 Q152 28 204 38 L240 56 Q272 60 284 72 L288 84 Z",suv:"M14 84 L22 60 L66 54 L88 30 Q150 24 218 30 L248 54 L282 62 L288 84 Z",coupe:"M14 84 L28 68 L80 58 L120 40 Q166 32 206 44 L252 60 L284 70 L288 84 Z"};
function carSVG(k,c,id){return`<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".62"/></linearGradient></defs><ellipse cx="150" cy="98" rx="132" ry="6" fill="rgba(0,0,0,.25)"/><path d="${BODY[k]}" fill="url(#g${id})"/><path d="M104 54 L124 40 Q150 34 150 38 L150 54Z M156 38 Q190 36 206 42 L236 54 L156 54Z" fill="#0f1a2b" opacity=".85"/><rect x="262" y="70" width="22" height="5" rx="2" fill="#fff"/><rect x="16" y="70" width="14" height="5" rx="2" fill="#ff3b30"/><g><circle cx="78" cy="84" r="17" fill="#111"/><circle cx="78" cy="84" r="9" fill="#c5cbd3"/><circle cx="228" cy="84" r="17" fill="#111"/><circle cx="228" cy="84" r="9" fill="#c5cbd3"/></g></svg>`}

/* ===== HAQIQIY FOTOLAR (Wikipedia REST API, brauzerda yuklanadi) ===== */
const PH={};
function photo(w,sz){const k=w+sz;return PH[k]||(PH[k]=fetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+w).then(r=>r.json()).then(j=>j.thumbnail?j.thumbnail.source.replace(/\/\d+px-/,"/"+sz+"px-"):null).catch(()=>null))}
function hydrate(root){$$("[data-w]",root).forEach(el=>{
 if(el.dataset.svg&&!el.firstChild)el.innerHTML=carSVG(el.dataset.svg,el.dataset.color,Math.random().toString(36).slice(2,7));
 photo(el.dataset.w,el.dataset.sz||"500").then(u=>{if(!u)return;const im=new Image();im.alt=el.dataset.alt||"BMW";im.onload=()=>{el.innerHTML="";el.appendChild(im);el.classList.add("photo")};im.src=u})})}
hydrate(document);

/* ===== KARUSEL ===== */
const slides=$$(".slide"),dots=$("#dots");let cur=0,timer;
slides.forEach((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Slayd "+(i+1));b.onclick=()=>{go(i);auto()};dots.appendChild(b)});
function go(i){cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle("on",k===cur));[...dots.children].forEach((d,k)=>d.classList.toggle("on",k===cur))}
function auto(){clearInterval(timer);timer=setInterval(()=>go(cur+1),5500)}
$("#next").onclick=()=>{go(cur+1);auto()};$("#prev").onclick=()=>{go(cur-1);auto()};
let sx=0;const hero=$(".hero");hero.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
hero.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50){go(cur+(d<0?1:-1));auto()}});
go(0);auto();

/* ===== MODELLAR RO‘YXATI ===== */
const cats={all:"Barchasi",Sedan:"Sedan",SUV:"SUV",Coupe:"Kupe",Elektr:"Elektr",M:"BMW M"};
Object.entries(cats).forEach(([k,v])=>{const b=document.createElement("button");b.textContent=v;b.dataset.f=k;$("#filters").appendChild(b)});
function render(){
 $$("#filters button").forEach(b=>b.classList.toggle("on",b.dataset.f===st.f));
 let a=CARS.map((x,i)=>({x,i})).filter(({x})=>(st.f==="all"||x.c===st.f)&&x.p<=st.max&&(!st.q||x.n.toLowerCase().includes(st.q)));
 const so={pa:(a,b)=>a.x.p-b.x.p,pd:(a,b)=>b.x.p-a.x.p,hp:(a,b)=>b.x.hp-a.x.hp,ac:(a,b)=>a.x.acc-b.x.acc}[st.sort];if(so)a.sort(so);
 $("#maxv").textContent=money(st.max);
 $("#grid").innerHTML=a.length?a.map(({x,i})=>`<article class="card">
  ${x.ev?'<span class="tag">Elektr</span>':x.c==="M"?'<span class="tag" style="background:#c8102e">M Power</span>':''}
  <button class="heart" data-fav="${i}" aria-label="Sevimli">♥</button>
  <div class="pic" data-det="${i}" data-w="${x.w}" data-sz="500" data-svg="${shape(x)}" data-color="${x.col}" data-alt="${x.n}"></div>
  <div class="info"><h3>${x.n}</h3><div class="meta">${x.t} · ${x.hp} ot kuchi · ${x.fuel}</div>
  <div class="price">${money(x.p)}<small>dan boshlab · 0–100 km/soat: ${x.acc} s</small></div>
  <button class="cmpb" data-cmp="${i}">⇄ Solishtirishga qo‘shish</button>
  <div class="row"><button class="btn line" data-det="${i}">Batafsil</button><button class="btn" data-reg data-model="${x.n}">Buyurtma</button></div></div></article>`).join(""):`<p class="sub">Hech narsa topilmadi. Filtrni o‘zgartiring.</p>`;
 hydrate($("#grid"));sync();
}
function sync(){
 $$("[data-fav]").forEach(b=>b.classList.toggle("on",st.fav.includes(+b.dataset.fav)));
 $$("[data-cmp]").forEach(b=>{const on=st.cmp.includes(+b.dataset.cmp);b.classList.toggle("on",on);if(b.classList.contains("cmpb"))b.textContent=on?"✓ Solishtirishda":"⇄ Solishtirishga qo‘shish"});
 $("#favN").textContent=st.fav.length;$("#cmpN").textContent=st.cmp.length;
}
$("#filters").onclick=e=>{const b=e.target.closest("button");if(b){st.f=b.dataset.f;render()}};
$("#sort").onchange=e=>{st.sort=e.target.value;render()};
$("#max").oninput=e=>{st.max=+e.target.value;render()};

/* ===== MODAL ===== */
function openM(html,w){$("#mbox").innerHTML='<button class="close" data-close aria-label="Yopish">×</button>'+html;$("#mbox").style.maxWidth=w||"440px";$("#modal").classList.add("open");hydrate($("#mbox"))}
function closeM(){$("#modal").classList.remove("open")}
const opts=sel=>CARS.map((c,i)=>`<option value="${i}" ${i===sel?"selected":""}>${c.n}</option>`).join("");

/* --- batafsil (ot kuchi va h.k.) --- */
function detail(i){
 const x=CARS[i],on=st.fav.includes(i);
 const bar=(l,v,t)=>`<div class="bar"><span>${l}</span><i><span style="width:${v}%"></span></i><em>${t}</em></div>`;
 openM(`<div class="pic big" data-w="${x.w}" data-sz="960" data-svg="${shape(x)}" data-color="${x.col}" data-alt="${x.n}"></div>
 <h3><b>${x.n}</b></h3><p class="sub" style="margin-bottom:10px">${x.t} — ${x.d}</p>
 <div class="spec"><div>Dvigatel<b>${x.eng}</b></div><div>Quvvat<b>${x.hp} ot kuchi (${Math.round(x.hp*.7355)} kVt)</b></div>
 <div>Burovchi moment<b>${x.tq} Nm</b></div><div>0–100 km/soat<b>${x.acc} soniya</b></div>
 <div>Maksimal tezlik<b>${x.top} km/soat</b></div><div>Uzatma<b>${x.tr}</b></div>
 <div>Yuritma<b>${x.dr}</b></div><div>${x.ev?"Yurish masofasi":"Yoqilg‘i sarfi"}<b>${x.cons.replace("Masofa: ","")}</b></div>
 <div>O‘rindiqlar<b>${x.seat} ta</b></div><div>Yukxona<b>${x.trunk}</b></div></div>
 ${bar("Quvvat",x.hp/7.17,x.hp+" o.k.")}${bar("Tezlanish",Math.max(8,100-(x.acc-3)*15),x.acc+" s")}${bar("Maks. tezlik",x.top/2.5,x.top+" km/s")}
 <div class="bigprice">${money(x.p)}</div><p class="meta" style="margin-bottom:12px">Boshlang‘ich narx (taxminiy). Oyiga ~${moneyF(pmt(x.p*.85,.9,60))} dan (kredit, 60 oy).</p>
 <div class="row"><button class="btn" data-reg data-model="${x.n}">Buyurtma</button><button class="btn line" data-act="drive" data-i="${i}">Sinov haydovi</button><button class="btn line" data-act="credit" data-i="${i}">Kredit</button></div>
 <div class="row"><button class="btn line heartb" data-fav="${i}">${on?"♥ Sevimlilarda":"♡ Sevimlilarga"}</button><button class="btn line" data-cmp="${i}">⇄ Solishtirish</button></div>`,"600px");
}
const pmt=(P,r,n)=>{const m=r/1200;return m?P*m/(1-Math.pow(1+m,-n)):P/n};

/* --- kredit kalkulyatori --- */
function credit(i=10){
 openM(`<h3>Kredit <b>kalkulyatori</b></h3><p class="sub">BMW Finance taxminiy hisob-kitobi</p>
 <label class="f">Model</label><select id="cm">${opts(i)}</select>
 <label class="f">Dastlabki to‘lov: <b id="dpv"></b></label><input type="range" id="dp" min="10" max="70" value="15">
 <label class="f">Muddat: <b id="nv"></b> oy</label><input type="range" id="nn" min="12" max="84" step="6" value="60">
 <label class="f">Yillik foiz: <b id="rv"></b>%</label><input type="range" id="rr" min="0.9" max="18" step="0.1" value="0.9">
 <div class="res">Oylik to‘lov<b id="r1"></b><span class="meta" id="r2"></span></div>
 <div class="row"><button class="btn" data-act="drive" id="crbtn">Kredit uchun ariza</button></div>`);
 const calc=()=>{const x=CARS[+$("#cm").value],dp=+$("#dp").value,n=+$("#nn").value,r=+$("#rr").value,P=x.p*(1-dp/100),m=pmt(P,r,n);
  $("#dpv").textContent=dp+"% ("+money(Math.round(x.p*dp/100))+")";$("#nv").textContent=n;$("#rv").textContent=r.toFixed(1);
  $("#r1").textContent=moneyF(m);$("#r2").textContent="Jami: "+moneyF(m*n)+" · Ortiqcha: "+moneyF(m*n-P)};
 $$("#mbox input,#mbox select").forEach(e=>e.oninput=calc);calc();
}

/* --- sinov haydovi / trade-in --- */
function lead(type,i=0){
 const tr=type==="trade";
 openM(`<h3>${tr?"Trade-in <b>baholash</b>":"Sinov <b>haydovi</b>"}</h3><p class="sub">${tr?"Eski mashinangizni bepul baholaymiz va +$3 000 bonus beramiz.":"Menejerimiz sizga qo‘ng‘iroq qilib, vaqtni kelishadi."}</p>
 <form id="lf" data-type="${type}" novalidate><label class="f">Ism</label><input id="ln"><div class="err" id="e-ln"></div>
 <label class="f">Telefon</label><input id="lp" placeholder="+998 90 123 45 67"><div class="err" id="e-lp"></div>
 <label class="f">${tr?"Qiziqtirgan yangi model":"Model"}</label><select id="lm">${opts(+i)}</select>
 ${tr?'<label class="f">Eski mashina (marka, yil)</label><input id="lo" placeholder="Chevrolet Malibu, 2018">':'<label class="f">Qulay sana</label><input id="ld" type="date">'}
 <button class="btn" type="submit">Yuborish</button><div class="ok" id="ok"></div></form>`);
 if($("#ld"))$("#ld").min=new Date().toISOString().slice(0,10);
}

/* --- solishtirish --- */
function compare(){
 if(st.cmp.length<2){openM(`<h3><b>Solishtirish</b></h3><p class="sub">Kamida 2 ta modelni tanlang (kartadagi “Solishtirishga qo‘shish”). Hozir: ${st.cmp.length} ta.</p>`);return}
 const L=st.cmp.map(i=>CARS[i]);
 const rows=[["Narx",x=>money(x.p),"p",-1],["Quvvat",x=>x.hp+" o.k.","hp",1],["Moment",x=>x.tq+" Nm","tq",1],["0–100 km/s",x=>x.acc+" s","acc",-1],["Maks. tezlik",x=>x.top+" km/s","top",1],["Dvigatel",x=>x.eng],["Uzatma",x=>x.tr],["Yuritma",x=>x.dr],["Sarf / masofa",x=>x.cons],["O‘rindiq",x=>x.seat],["Yukxona",x=>x.trunk]];
 openM(`<h3><b>Solishtirish</b></h3><div style="overflow-x:auto"><table><tr><th></th>${L.map(x=>`<th>${x.n}</th>`).join("")}</tr>
 ${rows.map(([l,f,k,d])=>{const best=k?(d>0?Math.max:Math.min)(...L.map(x=>x[k])):null;return`<tr><td>${l}</td>${L.map(x=>`<td class="${k&&x[k]===best?"best":""}">${f(x)}</td>`).join("")}</tr>`}).join("")}</table></div>
 <p class="meta" style="margin-top:10px">Yashil — eng yaxshi ko‘rsatkich.</p><div class="row"><button class="btn line" data-act="clearcmp">Tozalash</button></div>`,"860px");
}

/* --- sevimlilar --- */
function favs(){
 openM(`<h3><b>Sevimlilar</b></h3>`+(st.fav.length?st.fav.map(i=>{const x=CARS[i];return`<div class="fav" data-det="${i}"><div class="pic" data-w="${x.w}" data-sz="500" data-svg="${shape(x)}" data-color="${x.col}"></div><div style="flex:1"><b>${x.n}</b><div class="meta">${x.hp} o.k. · ${money(x.p)}</div></div><button class="close" style="position:static" data-fav="${i}" data-refresh aria-label="Olib tashlash">×</button></div>`}).join(""):`<p class="sub">Hozircha bo‘sh. Kartadagi ♥ tugmasini bosing.</p>`),"520px");
}

/* --- ro‘yxatdan o‘tish / kirish --- */
function regModal(model,mode="reg"){
 st.mode=mode;const r=mode==="reg";
 openM(`<h3>BMW <b>akkaunt</b></h3><div class="tabs"><button class="${r?"on":""}" data-tab="reg">Ro‘yxatdan o‘tish</button><button class="${r?"":"on"}" data-tab="log">Kirish</button></div>
 <form id="rf" novalidate>${r?'<label class="f">Ism va familiya</label><input id="fn" autocomplete="name"><div class="err" id="e-fn"></div>':''}
 <label class="f">Email</label><input id="em" type="email" autocomplete="email"><div class="err" id="e-em"></div>
 ${r?'<label class="f">Telefon</label><input id="ph" placeholder="+998 90 123 45 67"><div class="err" id="e-ph"></div><label class="f">Qiziqtirgan model</label><select id="md">'+opts(Math.max(0,CARS.findIndex(c=>c.n===model)))+'</select>':''}
 <label class="f">Parol (kamida 6 belgi)</label><input id="pw" type="password"><div class="err" id="e-pw"></div>
 <button class="btn" type="submit">${r?"Ro‘yxatdan o‘tish":"Kirish"}</button><div class="ok" id="ok"></div></form>`);
}
function renderUser(){const u=S("bmwUser"),b=$("#userbox");
 if(u&&u.session){b.innerHTML=`<span style="font-size:14px">Salom, <b>${u.name.split(" ")[0]}</b></span> <button class="btn line" id="lo" style="padding:8px 12px">Chiqish</button>`;$("#openReg").style.display="none";$("#lo").onclick=()=>{u.session=false;S("bmwUser",u);renderUser()}}
 else{b.innerHTML="";$("#openReg").style.display=""}}

/* ===== HODISALAR (bitta joyda) ===== */
document.addEventListener("click",e=>{
 const t=e.target;let el;
 if(t.id==="modal"||t.closest("[data-close]"))return closeM();
 if(el=t.closest("[data-fav]")){e.stopPropagation();const i=+el.dataset.fav,k=st.fav.indexOf(i);k<0?(st.fav.push(i),toast("Sevimlilarga qo‘shildi")):st.fav.splice(k,1);S("fav",st.fav);
  $$(".heartb").forEach(b=>b.textContent=st.fav.includes(+b.dataset.fav)?"♥ Sevimlilarda":"♡ Sevimlilarga");sync();if(el.hasAttribute("data-refresh"))favs();return}
 if(el=t.closest("[data-cmp]")){const i=+el.dataset.cmp,k=st.cmp.indexOf(i);if(k<0){if(st.cmp.length>=3)return toast("Ko‘pi bilan 3 ta model");st.cmp.push(i);toast("Solishtirishga qo‘shildi")}else st.cmp.splice(k,1);return sync()}
 if(el=t.closest("[data-act]")){const a=el.dataset.act,i=el.dataset.i;
  ({credit:()=>credit(i===undefined?10:+i),drive:()=>lead("drive",i||0),trade:()=>lead("trade"),cmp:compare,fav:favs,clearcmp:()=>{st.cmp=[];sync();closeM()}})[a]();$("#menu").classList.remove("show");return}
 if(el=t.closest("[data-tab]"))return regModal(null,el.dataset.tab);
 if(el=t.closest("[data-reg]"))return regModal(el.dataset.model);
 if(el=t.closest("[data-det]"))return detail(+el.dataset.det);
 if(el=t.closest(".menu [data-f]")){st.f=el.dataset.f;render();$("#menu").classList.remove("show");$("#models").scrollIntoView();return}
 if(!t.closest(".search"))$("#sug").style.display="none";
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM()});

document.addEventListener("submit",e=>{
 e.preventDefault();const f=e.target,v=id=>($("#"+id)||{value:""}).value.trim();
 $$(".err",f).forEach(x=>x.textContent="");let bad=0;const er=(k,m)=>{$("#e-"+k).textContent=m;bad=1};
 const okm=m=>{const o=$("#ok");o.textContent=m;o.style.display="block"};
 if(f.id==="rf"){const r=st.mode==="reg";
  if(r&&v("fn").length<3)er("fn","Ism va familiyangizni kiriting");
  if(!/^\S+@\S+\.\S+$/.test(v("em")))er("em","Email noto‘g‘ri");
  if(r&&!/^\+?\d[\d\s-]{8,14}$/.test(v("ph")))er("ph","Telefon raqamni to‘g‘ri kiriting");
  if(v("pw").length<6)er("pw","Parol kamida 6 belgi bo‘lsin");if(bad)return;
  if(r){S("bmwUser",{name:v("fn"),email:v("em"),phone:v("ph"),model:CARS[+v("md")].n,pw:v("pw"),session:true});okm(`Tabriklaymiz, ${v("fn")}! Menejer tez orada bog‘lanadi.`);renderUser();setTimeout(closeM,2000)}
  else{const u=S("bmwUser");if(u&&u.email===v("em")&&u.pw===v("pw")){u.session=true;S("bmwUser",u);okm("Xush kelibsiz, "+u.name+"!");renderUser();setTimeout(closeM,1300)}else er("pw","Email yoki parol noto‘g‘ri (avval ro‘yxatdan o‘ting)")}}
 if(f.id==="lf"){if(v("ln").length<2)er("ln","Ismingizni kiriting");if(!/^\+?\d[\d\s-]{8,14}$/.test(v("lp")))er("lp","Telefon raqamni to‘g‘ri kiriting");if(bad)return;
  const L=S("leads")||[];L.push({type:f.dataset.type,name:v("ln"),phone:v("lp"),model:CARS[+v("lm")].n,date:v("ld"),old:v("lo")});S("leads",L);
  okm("Rahmat, "+v("ln")+"! So‘rovingiz qabul qilindi.");setTimeout(closeM,2000)}
});

/* ===== NAVBAR: qidiruv, valyuta, tungi rejim ===== */
const q=$("#q"),sug=$("#sug");
q.oninput=()=>{const s=q.value.trim().toLowerCase();st.q=s;
 const a=s?CARS.map((x,i)=>({x,i})).filter(({x})=>x.n.toLowerCase().includes(s)).slice(0,6):[];
 sug.innerHTML=a.map(({x,i})=>`<div data-det="${i}"><span>${x.n}</span><b>${money(x.p)}</b></div>`).join("");sug.style.display=a.length?"block":"none"};
q.onkeydown=e=>{if(e.key==="Enter"){sug.style.display="none";render();$("#models").scrollIntoView()}};
q.onblur=()=>setTimeout(()=>{if(!q.value){st.q="";render()}},200);
function setCur(){$("#cur").textContent=st.cur==="USD"?"USD":"UZS";render()}
$("#cur").onclick=()=>{st.cur=st.cur==="USD"?"UZS":"USD";S("cur",st.cur);setCur()};
const setDark=on=>{document.body.classList.toggle("dark",on);$("#dark").textContent=on?"☀️":"🌙";S("dark",on)};
$("#dark").onclick=()=>setDark(!document.body.classList.contains("dark"));
$("#burger").onclick=()=>$("#menu").classList.toggle("show");
setDark(!!S("dark"));setCur();renderUser();

/* ===== TAYMER ===== */
const end=Date.now()+5*864e5+3*36e5;
function tick(){const t=Math.max(0,end-Date.now()),p=n=>String(n).padStart(2,"0");
 $("#d").textContent=Math.floor(t/864e5);$("#h").textContent=p(Math.floor(t%864e5/36e5));$("#m").textContent=p(Math.floor(t%36e5/6e4));$("#s").textContent=p(Math.floor(t%6e4/1e3))}
tick();setInterval(tick,1000);
