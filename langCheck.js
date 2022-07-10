let a = document.getElementById('myLang')

let b = document.getElementById('myLang')

let myfun = () => {
  let lang1 = myLang.value;
//   let lang2 = myLang.value;
  if (lang1 == 'React') {
    document.getElementById('myDiv').innerHTML = "<img id='myImg' src='./Transparent Logo/rct.png'><br><br><h2 id='head2'>React is Frontend Web Development Framework</h2>";
  }
  else if(lang1 =='HTML'){
    document.getElementById('myDiv').innerHTML = "<img id='myImg' src='./Transparent Logo/html.png'><br><br><h2 id='head2'>HTML is Markup language for Browser</h2>";
  }
  else if (lang1 == 'CSS'){
    document.getElementById('myDiv').innerHTML = "<img id='myImg' src='./Transparent Logo/css.png'><br><br><h2 id='head2'>CSS is Cascading Stylesheet for HTML</h2>";
  }
  else if (lang1 == 'BS'){
    document.getElementById('myDiv').innerHTML = "<img id='myImg' src='./Transparent Logo/bs.png'><br><br><h2 id='head2'>BootStrap is CSS Framework for Styling</h2>";
  }
  else if (lang1 == 'Angular') {
    document.getElementById('myDiv').innerHTML ="<img id='myImg' src='./Transparent Logo/angular.png'><br><br><h2 id='head2'>Angular is Frontend Framework</h2>";
  }
  else if (lang1 == 'Vue') {
    document.getElementById('myDiv').innerHTML ="<img id='myImg' src='./Transparent Logo/v.png'><br><br><h2 id='head2'>Vue is Frontend Framework</h2>";
  }
  else if (lang1 == 'Node') {
    document.getElementById('myDiv').innerHTML ="<img id='myImg' src='./Transparent Logo/node-js.png'><br><br><h2 id='head2'>Node JS is a Backend Runtime Environment for JavaScript and creates the Server</h2>";  
  } else
    (document.getElementById('myDiv').innerHTML = "<h2 id='head2'>Please Type your input</h2>")
};