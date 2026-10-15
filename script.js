const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const S=$$('.screen');let max=0,inited=0;
S.forEach((_,i)=>{const b=document.createElement('button');b.className='dot';b.setAttribute('aria-label','Layar '+(i+1));b.onclick=()=>go(i);$('#dots').append(b)});
function go(i){max=Math.max(max,i);S.forEach((s,k)=>s.classList.toggle('on',k==i));$$('.dot').forEach((d,k)=>{d.classList.toggle('on',k==i);d.disabled=k>max});S[i].scrollTop=0;if(i!=5&&window.vp)vp()}
$$('[data-go]').forEach(b=>b.onclick=()=>go(+b.dataset.go));go(0);
function say(el,t){el.hidden=false;el.textContent=t;el.style.animation='none';void el.offsetWidth;el.style.animation=''}
function burst(x,y,n=8,set=['💜','✨','🕸️','⭐','💖','🦘']){for(let i=0;i<n;i++){const e=document.createElement('i');e.className='fx';e.textContent=set[Math.random()*set.length|0];e.style.left=x+'px';e.style.top=y+'px';const a=Math.random()*6.28,d=40+Math.random()*80;e.style.setProperty('--x',Math.cos(a)*d+'px');e.style.setProperty('--y',Math.sin(a)*d-30+'px');document.body.append(e);setTimeout(()=>e.remove(),1200)}}
addEventListener('pointerdown',e=>burst(e.clientX,e.clientY,2,['✨','💜','🕸️']));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function stars(id,n,h){let s='';for(let i=0;i<n;i++)s+=`<circle cx="${Math.random()*360|0}" cy="${Math.random()*h|0}" r="${(Math.random()*1.2+.5).toFixed(1)}" fill="#fff" style="animation:twk ${1.5+Math.random()*2}s ease-in-out ${-Math.random()*3}s infinite alternate"/>`;$(id).innerHTML=s}
/* bagian 1: kota malam */
(()=>{stars('#ws',26,110);stars('#ast',30,150);let s='';[[0,56,100],[56,48,140],[104,76,90],[180,52,130],[232,44,100],[276,84,120]].forEach(([x,w,h],i)=>{s+=`<rect x="${x}" y="${210-h}" width="${w}" height="${h}" fill="${i%2?'#241052':'#1a0a3a'}"/>`;for(let wy=210-h+10;wy<200;wy+=16)for(let wx=x+8;wx<x+w-8;wx+=14)if(Math.random()<.35)s+=`<rect x="${wx}" y="${wy}" width="5" height="7" fill="#ffd6f0" opacity=".8"/>`});$('#cty').innerHTML=s;
let h='';for(let x=202;x<=340;x+=13){const t=(x-188)/164,y=(1-t)**2*160+2*(1-t)*t*66+t*t*160;h+=`<line x1="${x}" y1="${y+2}" x2="${x}" y2="159"/>`}$('#hg').innerHTML=h})();
/* bagian 2: surat */
const LT=['Heiii, Ica. 🤭','Jadiii, aku bikin website ini karena pengen bikin sesuatu yang beda aja buat kamu.','Biasanya kan cuma ngobrol lewat chat, nah sekarang coba lewat website buatan sendiri. Lumayan lah yaa, ada usaha dikit. WKWKWK 😹','Aku nggak tahu nanti kamu bakal suka bagian yang mana, tapi semoga ada yang bikin kamu ketawa atau senyum sendiri pas bacanya.','Pokoknya, jelajahi aja dulu semuanya. Jangan-jangan ada rahasia yang belum kamu temuin. 👀💜'];
$('#ev').onclick=()=>{const e=$('#ev');if(e.classList.contains('open'))return;e.classList.add('open');setTimeout(()=>{e.hidden=true;$('#eh').hidden=true;const l=$('#letter');l.hidden=false;l.innerHTML=LT.map((t,i)=>`<p style="animation-delay:${i*.9}s">${t}</p>`).join('');$('#lb').hidden=false;burst(innerWidth/2,innerHeight/2,12)},750)};
$('#lc').onclick=()=>{$('#letter').hidden=true;$('#lb').hidden=true;const e=$('#ev');e.classList.remove('open');e.hidden=false;$('#eh').hidden=false};
/* bagian 3: Spider-Man */
const SD=['MISI HARI INI: BIKIN ICA SENYUM. 🫡','Aku superhero, tapi kalau disuruh gombal malah error. 😭','Sssttt, jangan kasih tahu siapa-siapa kalau aku sebenarnya cuma kurir. 😹','Baiklah, aku kembali bertugas. Jaringku sudah menunggu! 🕷️','Eh, kamu senyum ya barusan? Aku liat lho. 👀','Jaring bisa nahan mobil, tapi nggak bisa nahan gombalan receh. 😹','Gajiku cuma dibayar pakai senyuman kamu. Murah banget kan? 🤭','Tolong jangan colek terus, nanti jaringku kusut. 😭'];let sl=-1;
function poke(){let i;do{i=Math.random()*SD.length|0}while(i==sl);sl=i;say($('#m0'),SD[i]);const b=$('#spi');b.classList.remove('wig');void b.getBoundingClientRect();b.classList.add('wig')}
$('#spi').onclick=e=>{poke();burst(e.clientX,e.clientY,5,['🕸️','✨','💜'])};$('#spi').onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();poke()}};
/* bagian 4: Australia senja -> malam */
$('#sc').onclick=()=>{const n=$('#aus').classList.toggle('night');$('#sc').textContent=n?'BALIK KE SENJA 🌇':'LIHAT PEMANDANGANNYA ✨';say($('#am'),n?'Nah, kan. Langitnya jadi penuh bintang, kangurunya ikut loncat-loncat. Jangan lupa foto dulu yaa. 🦘✨':'Balik ke senja deh. Cantik juga yaa. 🌇')};
/* bagian 5: animasi (CSS/SVG/JS, bukan video palsu) */
(()=>{const NS='http://www.w3.org/2000/svg',D=29;let T=0,play=false,last=0,lc='';
const SS=[...Array(36)].map(()=>{const c=document.createElementNS(NS,'circle'),o={c,p:Math.random()*6.28,s:1+Math.random()*2};c.setAttribute('cx',Math.random()*360);c.setAttribute('cy',Math.random()*190);c.setAttribute('r',Math.random()*1.4+.4);c.setAttribute('fill','#fff');$('#vst').append(c);return o});
let k='';[[0,50,70],[50,40,100],[90,60,60],[150,45,90],[195,55,75],[250,40,110],[290,70,65]].forEach(([x,w,h])=>k+=`<rect x="${x}" y="${280-h}" width="${w}" height="${h}" fill="#1a0a3a"/>`);$('#vsk').innerHTML=k;
const A=(e,o)=>{for(const n in o)e.setAttribute(n,o[n])},vs=$('#vs'),vtx=$('#vtx'),vth=$('#vth'),vsp=$('#vsp'),ve=$('#ve'),vf=$('#vf'),vo=$('#vo'),vc=$('#vc'),cap=$('#cap'),SL=$$('#vsvg .ss');
function R(t){SS.forEach(o=>o.c.setAttribute('opacity',.35+.65*Math.abs(Math.sin(t*o.s+o.p))));
const vis=t>=3&&t<=10.1;vs.setAttribute('opacity',vis?1:0);if(!vis)vtx.setAttribute('opacity',0);
if(vis){const u=Math.min(1,(t-3)/7),kk=u<.5?0:1,s=(u-kk*.5)*2,e=.5-.5*Math.cos(Math.PI*s),a0=kk?-55:-75,a1=kk?70:55,th=(a0+(a1-a0)*e)*Math.PI/180,px=kk?320:90,x=px+140*Math.sin(th),y=8+140*Math.cos(th);A(vth,{x1:px,y1:8,x2:x,y2:y-6});A(vtx,{x:clamp(x+12,70,290),y:Math.min(y+64,196),opacity:clamp((x-10)/50,0,1)*clamp((350-x)/50,0,1)});vsp.setAttribute('transform',`translate(${x} ${y}) rotate(${(th*28.6).toFixed(1)}) translate(-22 -8)`)}
[10.2,11.6,13].forEach((s0,i)=>{const p=(t-s0)/1.3,l=SL[i];if(p>=0&&p<=1){const x=40+i*70+p*220,y=10+i*30+p*110;A(l,{opacity:Math.sin(p*Math.PI),x1:x,y1:y,x2:x-40,y2:y-20})}else l.setAttribute('opacity',0)});
const ei=clamp(t-15,0,1);A(ve,{opacity:ei,transform:`translate(180 150) scale(${.6+.4*ei}) translate(-180 -150)`});
const fo=clamp(t-16.5,0,1),f1=1-2*Math.min(fo,.5);vf.setAttribute('transform',`translate(0 110) scale(1 ${f1}) translate(0 -110)`);vf.setAttribute('opacity',f1>0?1:0);vo.setAttribute('transform',`translate(0 110) scale(1 ${Math.max(0,2*fo-1)}) translate(0 -110)`);
vc.setAttribute('transform',`translate(0 ${-70*clamp((t-17.5)/2,0,1)})`);
const c=(t===0&&!play)?'Tekan ▶ Play yaa':t<20?'':t<25?'Hehehe, ini buat kamu. 💜':'Udah ah, malu aku. WKWKWK 🤭';if(c!==lc){lc=c;cap.textContent=c;cap.style.opacity=c?1:0}
$('#vb').style.width=(t/D*100)+'%'}
function upd(){$('#pl').disabled=play;$('#pa').disabled=!play;$('#pl').textContent=T>0&&T<D&&!play?'▶ Lanjut':'▶ Play'}
function loop(n){if(!play)return;T=Math.min(D,T+Math.min(.1,(n-last)/1000));last=n;if(T>=D)play=false;R(T);upd();if(play)requestAnimationFrame(loop)}
function start(){if(play)return;if(T>=D)T=0;play=true;last=performance.now();requestAnimationFrame(loop);upd()}
$('#pl').onclick=start;$('#pa').onclick=()=>{play=false;upd()};$('#re').onclick=()=>{T=0;start()};
window.vp=()=>{play=false;upd()};R(0)})();
const GV=[['🎟️','Voucher Dengerin Curhat','Mau cerita apa aja, boleh. Nangis boleh, ngomel boleh, ngomel sambil nangis juga boleh. Aku dengerin sampai habis, nggak bakal motong. 🤭'],['🗺️','Voucher Jalan-Jalan','Berlaku buat jalan-jalan bareng aku. Kamu yang pilih tempatnya, aku yang ngikut. Sekalian jadi tukang foto deh. 😹']];let op=0;
$$('button.gift').forEach((g,i)=>g.onclick=e=>{if(g.dataset.o)return;g.dataset.o=1;g.className='gift glass open';g.innerHTML=`${GV[i][0]}<b>${GV[i][1]}</b><small>${GV[i][2]}</small>`;burst(e.clientX,e.clientY,10);if(++op>=2)$('#n4').hidden=false});
/* voucher spesial: pilih foto -> kirim ke WA -> kode balasan */
const KODE='ICASENYUM';let foto=null;
$('#sph').onclick=()=>{const b=$('#spb');b.hidden=!b.hidden;$('#sph').setAttribute('aria-expanded',String(!b.hidden))};
$('#spgo').onclick=()=>{const v=$('#spcode').value.trim().toUpperCase();if(v==KODE)buka();else say($('#spm'),v?'Hehehe, kodenya belum pas. Tungguin aku bales dulu yaa. 😹':'Isi dulu dong kodenya. 🤭')};
$('#spcode').onkeydown=e=>{if(e.key=='Enter')$('#spgo').click()};
function buka(){$('#sph').innerHTML='💎<b>Voucher SPESIAL</b><small>Udah kebuka! 🎉</small>';$('#spb').innerHTML='<p><b>Cihuyyy, kebuka juga akhirnya! 💜</b> Isi vouchernya:</p>'+['Aku bakal lebih sering nyapa kamu 👋','Aku bakal sering senyum 😊','Aku nggak bakal malu-malu lagi kalau deket sama kamu 🙈','Dan aku bakal sering ngajak kamu jalan-jalan. Hehehe 🗺️'].map((t,i)=>`<div class="perk" style="animation-delay:${i*.35}s">${t}</div>`).join('')+'<p>Screenshot terus simpen yaa, berlaku selamanya lho. 😹</p>';conf(60);burst(innerWidth/2,innerHeight/2,20,['💜','⭐','✨','💖']);$('#n4').hidden=false}
$('#rain').onclick=()=>{for(let i=0;i<24;i++)setTimeout(()=>burst(Math.random()*innerWidth,Math.random()*innerHeight*.6,3,['💜','💖','🕸️','⭐']),i*90)};
let mt=0;$('#moon').onclick=e=>{burst(e.clientX,e.clientY,4,['🌙','✨']);if(++mt>=5){mt=0;$('#sec').classList.add('on')}};$('#cl').onclick=()=>$('#sec').classList.remove('on');
const cv=$('#bg'),cx=cv.getContext('2d');let W,H,st=[],sh=null;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;st=Array.from({length:Math.min(170,W*H/5500|0)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.3,p:Math.random()*6.28,s:.5+Math.random()*1.6}))}
rs();addEventListener('resize',rs);
(function f(t){cx.clearRect(0,0,W,H);cx.fillStyle='#fff';for(const s of st){cx.globalAlpha=.3+.7*Math.abs(Math.sin(t/1000*s.s+s.p));cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.28);cx.fill()}
if(!sh&&Math.random()<.005)sh={x:Math.random()*W*.8,y:Math.random()*H*.4,l:0};
if(sh){cx.globalAlpha=1-sh.l/55;cx.strokeStyle='#fff';cx.lineWidth=2;cx.beginPath();cx.moveTo(sh.x,sh.y);cx.lineTo(sh.x-48,sh.y-24);cx.stroke();sh.x+=7;sh.y+=3.5;if(++sh.l>55)sh=null}
requestAnimationFrame(f)})(0);
/* ===== PEMBUKAAN ===== */
const sleep=ms=>new Promise(r=>setTimeout(r,ms)),PS=$$('.ps'),p4=$('#p4');
function ps(id){PS.forEach(s=>s.classList.toggle('on',s.id==id))}
async function lines(el,a,gap=1100,keep){if(!keep)el.innerHTML='';for(const t of a){if(!el.closest('.ps').classList.contains('on'))return;const p=document.createElement('p');p.textContent=t;el.append(p);await sleep(gap+t.length*20)}}
function conf(n=50){const c=['#b79cff','#e2d6ff','#ff9fd0','#7c4dcc','#fff'];for(let i=0;i<n;i++){const e=document.createElement('i');e.className='cf';e.style.cssText=`left:${Math.random()*100}vw;background:${c[i%5]};animation-delay:${Math.random()*.6}s;--r:${Math.random()*720}deg;width:${6+Math.random()*6}px;height:${8+Math.random()*8}px`;document.body.append(e);setTimeout(()=>e.remove(),3200)}}
(()=>{let d='';for(let k=0;k<8;k++){const a=k*Math.PI/4;d+=`M0 0L${(92*Math.cos(a)).toFixed(1)} ${(92*Math.sin(a)).toFixed(1)}`}for(let r=18;r<=90;r+=18)for(let k=0;k<=8;k++){const a=k*Math.PI/4;d+=(k?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}$('#wg').setAttribute('d',d);
for(let i=0;i<16;i++){const e=document.createElement('i');e.className='pt';e.style.cssText=`left:${Math.random()*100}%;top:${30+Math.random()*65}%;animation-delay:${Math.random()*6}s`;$('#p1').append(e)}
for(let i=0;i<10;i++){const e=document.createElement('i');e.className='fh';e.textContent=i%2?'💜':'💖';e.style.cssText=`left:${Math.random()*95}%;animation-delay:${Math.random()*7}s`;$('#p3').append(e)}})();
/* tahap 1: loading, lanjut begitu siap */
(()=>{const T=['Bentar yaa, lagi nyiapin sesuatu buat kamu...','Lagi ngumpulin bintang dulu, susah tau nyarinya. 😭','Spider-Man lagi OTW...','Waduh, dia malah nyangkut di jaring sendiri. 😹','Sabar yaa, dikit lagi!'],lt=$('#lt'),lp=$('#lp'),wc=$('#wcc'),t0=performance.now(),MIN=2400;let ready=false,sh=-1;
Promise.race([Promise.all([document.fonts?document.fonts.ready:0,new Promise(r=>document.readyState=='complete'?r():addEventListener('load',r))]),sleep(5000)]).then(()=>ready=true);
(function tk(){const e=performance.now()-t0;let p=Math.min(e/MIN,1);if(!ready)p=Math.min(p,.9);const i=Math.min(4,p*5|0);if(i!=sh){sh=i;say(lt,T[i])}wc.setAttribute('r',p*95);lp.textContent=(p*100|0)+'%';if(p>=1)setTimeout(()=>{ps('p2');dlg()},350);else requestAnimationFrame(tk)})()})();
/* tahap 2 */
async function dlg(){await lines($('#b2'),['HEIII, ADA TITIPAN NIH! 👀','Dari seseorang yang agak aneh sih, suka bikin sesuatu yang nggak biasa. Tapi katanya ini khusus buat satu orang aja. 🤭','WETT, TUNGGU DULU! Takutnya yang buka bukan orangnya. 🕵️ Verifikasi dulu yaa, sebutin tanggal lahir kamu.'],1200);$('#nm').classList.remove('inv');$('#iam').classList.remove('inv')}
const VN=['Hmm, kok beda? Jangan-jangan kamu penyusup. 🕵️ Coba lagi deh.','Tanggal itu nggak cocok sama datanya. Coba lagi yaa. 😹'];let vn=0,hn=0;const okTgl=v=>/^17(\d\d){0,3}$/.test(v.replace(/\D/g,''));
$('#nm').onkeydown=e=>{if(e.key=='Enter')$('#iam').click()};
$('#iam').onclick=async()=>{const v=$('#nm').value.trim().toLowerCase();if(!okTgl(v)){say($('#vm'),v?VN[vn++%VN.length]:'Isi dulu dong tanggal lahirnya. Ini verifikasi lho. 🕵️');return}$('#nm').classList.add('inv');$('#iam').classList.add('inv');$('#vm').hidden=true;burst(innerWidth/2,innerHeight/2,8);await lines($('#b2'),['NAHHH, KETEMU JUGAA ORANGNYA!','Yaudah, sebelum masuk, ada satu pertanyaan penting nih. Jawab yang jujur yaa! 😼'],1200);await sleep(600);ps('p3');place();setTimeout(()=>$('#qa').classList.remove('inv'),1500)};
/* tahap 3 */
let d3=0,lx=0,ly=0,lt3=0,ans=0;const ng=$('#ng'),iy=$('#iy'),m4=$('#m4');
function bad(x,y,w,h,q){const i=iy.getBoundingClientRect(),l=i.left-q.left-14,t=i.top-q.top-10;return x+w>l&&x<l+i.width+28&&y+h>t&&y<t+i.height+20}
function place(){const q=$('#qa').getBoundingClientRect(),w=ng.offsetWidth,h=ng.offsetHeight;let x,y,k=0;do{x=Math.random()*Math.max(0,q.width-w);y=Math.random()*Math.max(0,q.height-h);k++}while(k<40&&(bad(x,y,w,h,q)||Math.hypot(x-lx,y-ly)<70));if(bad(x,y,w,h,q)){x=lx>q.width/2?0:q.width-w;y=q.height-h}lx=x;ly=y;ng.style.left=x+'px';ng.style.top=y+'px'}
function dodgeNg(){if(d3>=4||Date.now()-lt3<400)return;lt3=Date.now();d3++;place();if(d3==3)say($('#hn'),'Tombolnya licin ya 😹 Sabar, bentar lagi dia capek kok.')}
ng.addEventListener('pointerenter',e=>{if(e.pointerType=='mouse')dodgeNg()});
ng.addEventListener('pointerdown',e=>{if(d3<4){e.preventDefault();dodgeNg()}});
ng.onclick=()=>{if(d3<4){dodgeNg();return}no3()};
function lockQ(){ans=1;$('#qa').hidden=true;$('#hn').hidden=true;m4.hidden=false}
iy.onclick=async()=>{if(ans)return;lockQ();ps('p3b');burst(innerWidth/2,innerHeight/2,18);conf(60);await lines($('#m5'),['AHAYYYYYYYY!!! 😭','CIHUYYY, MAKASIHH YAKK! 🤭','EH, BENTAR, JANGAN LIATIN AKU GITU, MALU TAU. 🤭','Hehehe, makasih yaa. Halaman ini jangan ditutup dulu. 💜'],1100);$('#ssn').hidden=false;$('#b5').hidden=false;setTimeout(()=>$('#p3b').scrollTo({top:9999,behavior:'smooth'}),150)};
$('#b5').onclick=()=>ps('p3c');
async function oldNo(){if(ans)return;lockQ();$('#hold').classList.add('shy');await lines(m4,['LAHHH, KOK NGGAA SIHHH 😭','YAUDAH DEH, AKU MAU NGUMPET DULU DI BALIK SPIDER-MAN. 🥹🕷️'],1400);await sleep(500);await lines(m4,['EH, BOONG DENG, WKWKWK. YA UDAH, LANJUT AJA YUK! 😹'],900);$('#hold').classList.remove('shy');$('#go3').hidden=false}
function toPin(){ans=1;ps('p4')}$('#go3').onclick=toPin;
const KODE2='MAKASIHICA';
$('#kgo').onclick=()=>{const v=$('#kcode').value.trim().toUpperCase().replace(/\s+/g,'');if(v==KODE2)toPin();else say($('#km'),v?'Hehehe, kodenya belum pas. Kirim SS-nya dulu, nanti aku bales kodenya yaa. 😹':'Isi dulu dong kodenya. 🤭')};
$('#kcode').onkeydown=e=>{if(e.key=='Enter')$('#kgo').click()};
/* tahap 4: PIN (gerbang visual saja) */
let pin='',busy=false;const pd=$('#pd');
function upd(){[...pd.children].forEach((e,k)=>e.classList.toggle('f',k<pin.length))}
function key(k){if(!p4.classList.contains('on')||busy)return;if(k=='b')pin=pin.slice(0,-1);else if(pin.length<6)pin+=k;upd();if(pin.length==6)chk()}
function chk(){busy=true;if(pin=='170408')ok();else{say($('#pm'),'EITS, SALAH NIH WKWKWK. COBA LAGI YUK. 😹');pd.classList.add('sh');setTimeout(()=>{pd.classList.remove('sh');pin='';upd();busy=false},650)}}
[1,2,3,4,5,6,7,8,9,'b',0,''].forEach(k=>{const b=document.createElement('button');if(k===''){b.style.visibility='hidden';b.tabIndex=-1}else{b.className='k glass';b.textContent=k=='b'?'⌫':k;b.setAttribute('aria-label',k=='b'?'Hapus':'Angka '+k);b.onclick=()=>key(String(k))}$('#pad').append(b)});
addEventListener('keydown',e=>{if(/^\d$/.test(e.key))key(e.key);else if(e.key=='Backspace')key('b')});
$('#fg').onclick=()=>say($('#pm'),['clue nya mau tau? aja sendiri, ga lohh, clue nya tentang mu '][hn++%2]+'😹');
async function ok(){const g=$('#gate');g.classList.add('on');await sleep(200);g.classList.add('open');for(let i=0;i<8;i++)setTimeout(()=>burst(innerWidth/2,innerHeight/2,14,['⭐','✨','💜','🌟']),i*220);await sleep(3000);document.body.classList.remove('lock');go(0);$('#pre').classList.add('out');setTimeout(()=>$('#pre').remove(),1000)}
/* NGGAA beneran: kesempatan terakhir, lalu selesai */
async function no3(){if(ans)return;lockQ();$('#hold').classList.add('sad');$('#sign').innerHTML='<p>Hmm... bentar deh.</p><h3>Srius ni ga sayank aku? 🥺</h3>';await lines(m4,['Yah... beneran nggaa? 🥺','Satu kesempatan lagi deh. Cuma satu, jawab yang jujur yaa... 🥹'],1600);$('#ch2').hidden=false}
$('#iy2').onclick=()=>{$('#ch2').hidden=true;$('#hold').classList.remove('sad');$('#sign').innerHTML='<p>Eh, tapi sebelum lanjut...</p><h3>Kmu sayank aku ga whehehe? 🤭💜</h3>';ans=0;iy.onclick()};
function endAll(){ans=1;busy=true;document.body.classList.add('over');$('#end').classList.add('on')}
$('#ng2').onclick=()=>{$('#ch2').hidden=true;endAll()};
/* ===== kejutan tersembunyi ===== */
let tt;function toast(t,ms=3600){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),ms)}
function modal(ic,t,L,btn,cb){$('#mi').textContent=ic;$('#mt').textContent=t;$('#mb').innerHTML=L.map(l=>`<p>${l}</p>`).join('');const k=$('#mk');k.textContent=btn;k.onclick=()=>{$('#mdl').classList.remove('on');if(cb)cb()};$('#mdl').classList.add('on')}
function pick(a,last){let i;do{i=Math.random()*a.length|0}while(i==last&&a.length>1);return i}
/* 1 + 6: bintang tersembunyi & hadiah terakhir */
const SM=['EH, KAMU NEMU AKU! PINTAR JUGA YA. 😹','Jangan lupa senyum hari ini, Ica. 🤭','Coba cari lagi, masih ada yang ngumpet nih. 👀','WKWKWK, KETEMU LAGI! 💜','Oke, kamu lumayan jago juga jadi detektif. 🫡','Dikit lagi nih, tinggal satu bintang yang ngumpet. ✨','SEMUA BINTANG KETEMU! Kamu detektif beneran ternyata. 😭💜'];let hf=0,gbo=false;
function openGift(){gbo=true;$('#gb').hidden=true;conf(70);modal('🎁','YEAYYY, KAMU BERHASIL NEMUIN HADIAH RAHASIANYA! 💜',['Hehehe, makasih yaa udah mau menjelajahi semuanya. Tapi tunggu, masih ada satu hal terakhir nih. 🤭'],'KE YANG TERAKHIR ➜',()=>go(S.length-1))}
$('#gb').onclick=openGift;
[[0,12,13],[1,84,66],[2,9,72],[3,91,45],[5,7,40],[6,90,88],[8,82,18]].forEach(([i,x,y])=>{const b=document.createElement('button');b.className='hs';b.textContent='★';b.setAttribute('aria-label','Bintang tersembunyi');b.style.left=x+'%';b.style.top=y+'%';
b.onclick=e=>{b.remove();hf++;const c=$('#sc7');c.hidden=false;c.textContent='BINTANG DITEMUKAN: '+hf+'/7';burst(e.clientX,e.clientY,6,['⭐','✨']);toast(SM[hf-1]);
if(hf==4){$('#gb').hidden=false;setTimeout(()=>toast('Eh, ada kotak ungu muncul di pojok kiri bawah. 🎁'),3000)}
if(hf==7&&!gbo)setTimeout(openGift,1800)};S[i].append(b)});
/* 2: tombol tersembunyi */
(()=>{const b=document.createElement('button');b.className='hs hsp';b.textContent='🕷️';b.setAttribute('aria-label','Laba-laba kecil');b.style.left='6%';b.style.top='auto';b.style.bottom='72px';b.onclick=()=>{b.remove();conf(40);modal('🕷️','LAHHH, KOK KAMU BISA NEMU INI SIHHH?! 😭',['Padahal udah aku sembunyiin baik-baik. Yaudah deh, selamat yaa, detektif kecil. 🤭💜'],'Hehehe, oke ✨')};S[1].append(b)})();
/* 3: mini-game hubungin bintang */
(()=>{const N=12,s=7.3,NS='http://www.w3.org/2000/svg',pt=t=>[150+s*16*Math.sin(t)**3,130-s*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))];
const D=[...Array(361)].map((_,i)=>pt(Math.PI+i*2*Math.PI/360)),Ls=[0];for(let i=1;i<D.length;i++)Ls.push(Ls[i-1]+Math.hypot(D[i][0]-D[i-1][0],D[i][1]-D[i-1][1]));
const P=[...Array(N)].map((_,i)=>D[Math.max(Ls.findIndex(v=>v>=Ls[360]*i/N),0)]);let nx=0,done=false,d='';for(let i=0;i<=90;i++){const q=pt(Math.PI+i*2*Math.PI/90);d+=(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
P.forEach((q,i)=>{const g=document.createElementNS(NS,'g');g.setAttribute('role','button');g.setAttribute('tabindex','0');g.setAttribute('aria-label','Bintang '+(i+1));g.style.cursor='pointer';
g.innerHTML=`<circle cx="${q[0]}" cy="${q[1]}" r="17" fill="transparent"/><circle cx="${q[0]}" cy="${q[1]}" r="10" fill="#ffe9a8"/><text x="${q[0]}" y="${q[1]+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#3a1d6e" pointer-events="none">${i+1}</text>`;
const tap=()=>{if(done)return;if(i!=nx){say($('#gm'),i<nx?'Yang itu udah, lanjut ke nomor '+(nx+1)+' yaa. 😹':'Eits, urut dulu dong. Mulai dari nomor '+(nx+1)+'. 😹');return}
nx++;g.classList.add('on');$('#gline').setAttribute('points',P.slice(0,nx).concat(nx==N?[P[0]]:[]).map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' '));
if(nx==N){done=true;$('#gfill').setAttribute('d',d+'Z');$('#gfill').classList.add('on');say($('#gm'),'CIHUYYYY, BERHASIL JUGA! KAMU JAGO JUGA TERNYATA. 😹✨');conf(70);burst(innerWidth/2,innerHeight/2,18,['💜','✨','⭐'])}else say($('#gm'),'Mantap, lanjut ke nomor '+(nx+1)+'!')};
g.onclick=tap;g.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();tap()}};$('#gstars').append(g)});
$('#gre').onclick=()=>{nx=0;done=false;$('#gline').setAttribute('points','');$('#gfill').classList.remove('on');$$('#gstars g').forEach(g=>g.classList.remove('on'));say($('#gm'),'Yuk, ulang dari nomor 1. 🤭')}})();
/* 4: tombol penghibur */
const HB=['Heiii, jangan lupa istirahat yaa.','Semoga hari kamu menyenangkan, Ica. 💜','Kalau lagi capek, istirahat dulu. Nggak perlu buru-buru.','Aku punya satu gombalan, tapi takut kamu malah ketawa. 😭','Kamu udah senyum belum? Kalau belum, aku coba lagi deh. WKWKWK','Minum air dulu gih, terus tarik napas pelan-pelan. 💧','Apa pun yang terjadi hari ini, kamu udah berusaha. Itu udah cukup kok. 💜','Nih, peluk dari jauh. Eh, kekencengan ya? WKWKWK 🤗'];let hl=-1;
$$('.hib').forEach(b=>b.onclick=e=>{hl=pick(HB,hl);toast(HB[hl],4200);burst(e.clientX,e.clientY,4,['💜','✨'])});
/* 5: koleksi gombalan gagal */
const GB=['Kamu tahu nggak bedanya kamu sama Wi-Fi? Kalau Wi-Fi bikin HP terhubung, kalau kamu bikin aku pengen ngobrol terus. WKWKWK 😹','Aku tuh mau gombalin kamu, tapi takut kamu ketawa. Lah, kalau kamu ketawa berarti misi aku berhasil dong? 🤭','Kamu tuh kayak notifikasi, sekali muncul langsung bikin aku nengok. AHAAYYY 😭','Bebek ketemu merak, berak😹','Kamu kok bisa bikin hariku jadi lebih enak, padahal kamu nggak ngapa-ngapain. Curang banget sih. 😭','Katanya kalau jodoh nggak ke mana-mana. Tapi kamu jangan ke mana-mana juga dong, repot nyarinya. WKWKWK 🤭','Persamaan kamu sama kopi apa? Sama-sama bikin aku susah tidur. Bedanya, kamu lebih manis. 😹','Aku nggak jago gombal, tapi kalau soal bikin kamu senyum, aku mau belajar terus. Serius. 💜','Spider-Man punya jaring, aku punya website. Sama-sama niat banget nangkep perhatian kamu. 🕷️😹','Kamu itu kayak bulan: kadang bulat, kadang sabit, tapi tetep bikin orang pengen liat terus. Eh, bukan nyebut kamu bulat ya. 😭'];
const RC=['Receh sih, tapi kamu baca sampai habis kan? 😹','Namanya juga koleksi GAGAL, jadi wajar dong. 😭','Yaudah, aku belajar gombal lagi di pojokan dulu. 🥹'];let gop=new Set(),gcur=-1,rc=0;
GB.forEach((_,i)=>{const b=document.createElement('button');b.className='cd';b.textContent=i+1;b.setAttribute('aria-label','Kartu gombalan '+(i+1));b.onclick=()=>showG(i);$('#deck').append(b)});
function showG(i){gcur=i;gop.add(i);$$('#deck .cd').forEach((b,k)=>{b.classList.toggle('op',gop.has(k)&&k!=i);b.classList.toggle('cur',k==i)});say($('#gk'),GB[i]);$('#gr').hidden=true;$('#gbt').hidden=false}
$('#gya').onclick=()=>say($('#gr'),RC[rc++%RC.length]);
$('#gag').onclick=()=>{let rest=GB.map((_,i)=>i).filter(i=>!gop.has(i)),note='';if(!rest.length){gop.clear();rest=GB.map((_,i)=>i).filter(i=>i!=gcur);note='Udah habis semua, aku ulang dari awal yaa. 😭'}showG(rest[Math.random()*rest.length|0]);if(note)say($('#gr'),note)};
$('#mdl').onclick=e=>{if(e.target.id=='mdl')$('#mdl').classList.remove('on')};
