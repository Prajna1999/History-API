document.addEventListener("DOMContentLoaded", ()=>{

  // Add a non existing filename to the location bar
  // history.pushState("null", "Title", "pretend.html");
  document.getElementById("link").addEventListener("click", c);
  window.addEventListener("hashchange", hc);
  window.addEventListener("popstate", ps);


});
function c(ev){
  showOutput("clicked")
  ev.preventDefault(); //prevents from going to the page anchored by the a tag.
  let href=ev.currentTarget.href;
  showOutput(href);
  history.pushState({"abc":123}, "title", href); //change the link in the address bar.

}
function hc(ev){
  showOutput("hashchanged");

}
function ps(ev){
  console.log(ev.state);
  showOutput("popstateupdated");
}

function showOutput(output){
  let p=document.createElement("p");
  p.textContent=output;
  document.getElementById("output").appendChild(p);

  // remove the things from the UI
  setTimeout(_=>{
    document.getElementById("output").removeChild(p)
  },4000);
}