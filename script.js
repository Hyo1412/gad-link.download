const files=[
{name:"Windows 11",cat:"Windows",desc:"Link download Windows 11 resmi.",icon:"WIN",url:"https://www.microsoft.com/software-download/windows11"},
{name:"Windows 10",cat:"Windows",desc:"Link download Windows 10 resmi.",icon:"WIN",url:"https://www.microsoft.com/software-download/windows10"},
{name:"Google Chrome",cat:"Software",desc:"Browser Google Chrome versi terbaru.",icon:"APP",url:"https://www.google.com/chrome/"},
{name:"Mozilla Firefox",cat:"Software",desc:"Browser Mozilla Firefox.",icon:"APP",url:"https://www.mozilla.org/firefox/"},
{name:"WinRAR",cat:"Tools",desc:"Tools untuk mengelola file arsip.",icon:"ZIP",url:"https://www.win-rar.com/download.html"},
{name:"Driver Anda",cat:"Driver",desc:"Ganti URL ini dengan link driver Anda.",icon:"DRV",url:"#"}
];

let active="Semua";
const list=document.getElementById("list"), search=document.getElementById("search"), info=document.getElementById("info");

function render(){
 const q=search.value.toLowerCase().trim();
 const data=files.filter(f=>(active==="Semua"||f.cat===active)&&
 (f.name.toLowerCase().includes(q)||f.desc.toLowerCase().includes(q)||f.cat.toLowerCase().includes(q)));
 list.innerHTML=data.length?data.map(f=>`<article class="card">
 <div class="icon">${f.icon}</div><h3>${f.name}</h3><p>${f.desc}</p>
 <div class="tags"><span class="tag">${f.cat}</span></div>
 <a class="download" href="${f.url}" target="_blank" rel="noopener">DOWNLOAD</a>
 </article>`).join(""):`<div class="empty">File tidak ditemukan.</div>`;
 info.textContent=`${data.length} file ditemukan`;
}
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{
 document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));
 b.classList.add("active");active=b.dataset.cat;render();
});
search.oninput=render;render();