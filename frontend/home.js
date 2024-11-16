function e(id) {
  return document.getElementById(id);
}

function checkValues() {
  var addr = e("addr").value.trim();
  var port = e("port").value.trim();
  var name = e("name").value.trim();

  console.log(addr == "" , port == "" , name == "" , parseInt(port) < 1 , parseInt(port) > 65535)
  if (addr == "" || port == "" || name == "" || parseInt(port) < 1 || parseInt(port) > 65535) return e("begin").disabled = true;
  e("begin").disabled = false;
}

window.onload = function() {
  var url = new URL(window.location.href);
  e("addr").value = url.hostname;
  e("port").value = parseInt(url.port) + 1;
  
  checkValues();
}

function begin() {
  var addr = e("addr").value.trim();
  var port = e("port").value.trim();
  var name = e("name").value.trim();
  
  window.location.href = `/game?addr=${addr}&port=${port}&name=${name}`;
}