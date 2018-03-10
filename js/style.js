const styles = ["Default", "James_People"];
let styleIndex = 0;

function setNextStyle() {
  styleIndex = (styleIndex + 1) % styles.length;
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  console.log("Next");
}

function setLastStyle() {
  console.log("Last");
  styleIndex = (styleIndex - 1) % styles.length;
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  console.log("Next");
}

function toggleText() {
  console.log("Text");
}

function changeCSS(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(1);
  
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
  
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
