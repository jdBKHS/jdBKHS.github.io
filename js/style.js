let styleStorage = new LocalStorageManager();
let styles = ["default", "China", "James_People"];
let styleNames = ["Classic 2048", "Chinese Dynasties", "People!"];
let styleText = [true, false, false, false];

function setNextStyle() {
  styleIndex++;
  if (styleIndex > styles.length - 1) styleIndex = 0;
  setStyle(styleIndex);
}

function setLastStyle() {
  styleIndex--;
  if (styleIndex < 0) styleIndex = styles.length - 1;
  setStyle(styleIndex);
}

function toggleText() {
  document.styleSheets[2].disabled = !document.styleSheets[2].disabled;
  styleText[styleIndex] = !styleText[styleIndex];;
  console.log("Text");
}

function setStyle(style) {
  styleStorage.setGameStyle(styleIndex);
  changeCSS("style/" + styles[style] + "/style.css");
  updatePreview();
  document.styleSheets[2].disabled = styleText[style];
  console.log(styleIndex, styles[style]);
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
