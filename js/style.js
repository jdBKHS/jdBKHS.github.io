let styles = ["default", "James_People"];
let styleIndex = 0;

function setNextStyle() {
  styleIndex = Math.abs((styleIndex + 1) % styles.length);
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  console.log(styleIndex, styles[styleIndex]);
}

function setLastStyle() {
  console.log("Last");
  styleIndex = Math.abs((styleIndex - 1) % styles.length);
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  console.log(styleIndex, styles[styleIndex]);
}

function toggleText() {
  console.log("Text");
}

function updatePreview() {
  document.getElementById("sel-text").innerHTML = styles[styleIndex];
}

function changeCSS(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(1);
  
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
  
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
