let styles = ["default", "James_People"];
let styleNames = ["Default", "James's People"];
let styleNoText = [false, true];
let styleIndex = 0;

function setNextStyle() {
  styleIndex = Math.abs((styleIndex + 1) % styles.length);
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  document.styleSheets[2].disabled = styleNoText[styleIndex]
  console.log(styleIndex, styles[styleIndex]);
  updatePreview();
}

function setLastStyle() {
  console.log("Last");
  styleIndex = Math.abs((styleIndex - 1) % styles.length);
  changeCSS("style/" + styles[styleIndex] + "/style.css");
  document.styleSheets[2].disabled = styleNoText[styleIndex]
  console.log(styleIndex, styles[styleIndex]);
  updatePreview();
}

function toggleText() {
  document.styleSheets[2].disabled = !document.styleSheets[2].disabled
  console.log("Text");
}

function updatePreview() {
  document.getElementById("sel-text").innerHTML = styleNames[styleIndex].replace(/_/g, " ");
  for (var i = 0; i < 6; i ++) {
	var newLink = "style/" + styles[styleIndex] + "/" + Math.pow(2, i + 1) + ".jpeg";
	document.getElementById("sel-top").children[i].src = newLink;
  }
  for (var i = 0; i < 5; i ++) {
    var newLink = "style/" + styles[styleIndex] + "/" + Math.pow(2, i + 7) + ".jpeg";
    document.getElementById("sel-btm").children[i].src = newLink;
  }
}

function changeCSS(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(1);
  
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
  
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
