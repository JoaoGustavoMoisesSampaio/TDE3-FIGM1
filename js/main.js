const cats=["Alimentos e Bebidas","Automotivo","Bebês","Beleza e Cuidados Pessoais","Games","Livros","Eletrônicos"];
const $=s=>document.querySelector(s);
let cart=+localStorage.getItem("cart")||0;
$("#hdr").innerHTML=`<header class="hd"><a class="logo" href="index.html">amazon<b>.com.br</b></a>
<div class="sm">Entrega em<strong>Bela Vista 11300908</strong></div>
<form class="srch" onsubmit="return false"><select><option>Todos</option><option>Livros</option><option>Games</option></select><input placeholder="Pesquisar Amazon.com.br"><button aria-label="Buscar">🔍</button></form>
<a class="sm" href="login.html">Olá, faça seu login<strong>Contas e Listas</strong></a><a class="sm" href="#">Devoluções<strong>e Pedidos</strong></a>
<a href="#"><strong>🛒 <span id="cnt">${cart}</span></strong> Carrinho</a></header>
<nav class="nav"><button id="mn">☰ Todos</button>${["Venda na Amazon","Chega em 15 min","Ofertas do Dia","Mais Vendidos","Games","Livros","Música","Casa","Eletrônicos","Brinquedos e Jogos"].map(t=>`<a href="index.html">${t}</a>`).join("")}</nav>
<div class="ov" id="ov"></div><button class="x" id="cl">✕</button>
<aside class="dr" id="dr"><div>👤 Olá, faça seu login</div><h5>Destaques</h5>${["Mais Vendidos","Novidades na Amazon","Produtos em alta"].map(t=>`<a href="#">${t}</a>`).join("")}
<h5>Conteúdo digital</h5>${["Fire TV","Amazon Music","Prime Video","Kindle e eBooks","Echo e Alexa","Audible"].map(t=>`<a href="#">${t}</a>`).join("")}
<h5>Comprar por categoria</h5>${cats.map(t=>`<a href="#">${t}</a>`).join("")}</aside>`;
$("#ftr").innerHTML=`<div class="cta">Ver recomendações personalizadas<br><br><a class="btn" href="login.html">Fazer login de forma segura</a></div>
<a class="top" onclick="scrollTo({top:0,behavior:'smooth'})">Voltar ao início</a>
<footer class="ft">${[["Conheça-nos","Carreiras","Sobre a Amazon"],["Ganhe dinheiro","Venda na Amazon","Afiliados"],["Pagamento","Cartões","Boleto e Pix"],["Ajuda","Devoluções","Fale conosco"]].map(c=>`<ul><h4>${c[0]}</h4>${c.slice(1).map(l=>`<li><a href="#">${l}</a></li>`).join("")}</ul>`).join("")}</footer>
<div class="cp">Condições de Uso · Notificação de Privacidade · Cookies · Anúncios Baseados em Interesses<br>© 2021-2026 Amazon.com, Inc. ou suas afiliadas<br>Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03 | Formas de pagamento: cartões, Boleto e Pix.</div>`;
const tg=o=>["#dr","#ov","#cl"].forEach(s=>$(s).classList.toggle("on",o));
$("#mn").onclick=()=>tg(true);$("#ov").onclick=$("#cl").onclick=()=>tg(false);
document.onkeydown=e=>e.key=="Escape"&&tg(false);
function add(){cart++;localStorage.setItem("cart",cart);$("#cnt").textContent=cart}
function sc(id,d){document.getElementById(id).scrollBy({left:d*420})}
