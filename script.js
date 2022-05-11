console.log("Hello World");


function show(output){
  document.getElementById("output").innerHTML=`<p>${output}</p>`;
}
// show("Location: " + location.href);

// show(location.search)
// history.go(-2);
// history.back();
// history.forward();
// location.replace("www.google.com");
show('history.state: '+history.state);