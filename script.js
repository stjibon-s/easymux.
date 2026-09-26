const loader=document.getElementById("loader"), bar=document.getElementById("progress"), pct=document.getElementById("pct");
let n=0;const iv=setInterval(()=>{n+=Math.random()*16+7;if(n>=100){n=100;clearInterval(iv);setTimeout(()=>loader.classList.add("hide"),350)}bar.style.width=n+"%";pct.textContent=Math.floor(n)+"%"},90);

const canvas=document.getElementById("matrix"),ctx=canvas.getContext("2d");let w,h,drops=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;drops=Array(Math.ceil(w/15)).fill(0).map(()=>Math.random()*h/15)}
resize();addEventListener("resize",resize);
setInterval(()=>{ctx.fillStyle="rgba(5,8,16,.08)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#00ff88";ctx.font="14px monospace";drops.forEach((y,i)=>{ctx.fillText(Math.random()>.5?"0":"1",i*15,y*15);drops[i]=y*15>h&&Math.random()>.975?0:y+1})},55);

document.getElementById("menu").onclick=()=>{const n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="66px";n.style.right="5vw";n.style.flexDirection="column";n.style.background="#050810";n.style.padding="18px";n.style.border="1px solid #174138"};

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));

// Replace this URL with your published EasyMux APK/release URL.
document.getElementById("downloadBtn").addEventListener("click",e=>{
  const url=document.getElementById("downloadBtn").dataset.url;
  if(!url){e.preventDefault();alert("APK download link is not configured yet. Add your published EasyMux APK URL to the download button.");}
});
