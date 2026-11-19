// ===== EDIT THIS: WhatsApp number with country code, digits only (e.g. 919876543210) =====
var WA_NUMBER = "918653535638";
// ======================================================================================
var $ = function(id){return document.getElementById(id)};
var inEl=$("in"), outEl=$("out");
function iso(d){var m=d.getMonth()+1,day=d.getDate();return d.getFullYear()+"-"+(m<10?"0":"")+m+"-"+(day<10?"0":"")+day}
function pretty(s){var p=s.split("-");return new Date(+p[0],+p[1]-1,+p[2]).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}
function nightsBetween(a,b){return Math.round((new Date(b)-new Date(a))/86400000)}
var today=new Date(); inEl.min=iso(today); outEl.min=iso(new Date(today.getTime()+86400000));
$("yr").textContent=today.getFullYear();

function update(){
  if(inEl.value){
    var next=new Date(new Date(inEl.value).getTime()+86400000); outEl.min=iso(next);
    if(outEl.value && outEl.value<=inEl.value) outEl.value="";
  }
  var n=$("nights");
  if(inEl.value && outEl.value){var k=nightsBetween(inEl.value,outEl.value); n.textContent=k+(k===1?" night":" nights")+" selected"}
  else n.textContent="";
}
inEl.addEventListener("change",update); outEl.addEventListener("change",update);

function waLink(text){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(text)}
$("wa-link").href=waLink("Hello Nine Ten Hotel, I have a question.");
$("wa-float").href=waLink("Hello Nine Ten Hotel, I have a question.");

$("send").addEventListener("click",function(){
  var err=$("err"); err.textContent="";
  if(!inEl.value||!outEl.value){err.textContent="Please choose check-in and check-out dates.";return}
  var k=nightsBetween(inEl.value,outEl.value);
  var name=$("name").value.trim();
  var msg="Hello Nine Ten Hotel, I’d like to check availability.\n\n"+
    (name?"Name: "+name+"\n":"")+
    "Check-in: "+pretty(inEl.value)+"\n"+
    "Check-out: "+pretty(outEl.value)+" ("+k+(k===1?" night":" nights")+")\n"+
    "Guests: "+$("guests").value+"\n"+
    "Rooms: "+$("rooms").value+"\n"+
    "Room type: "+$("type").value;
  window.open(waLink(msg),"_blank","noopener");
});
