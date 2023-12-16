var userName = document.getElementById("userName");
var nickName = document.getElementById("nickName");
var submitBtn = document.getElementById("submit");

// submitBtn.onclick = () => {
//   console.log("userName", userName.value);
//   console.log("nickName", nickName.value);
//   window.location.href = "./play.html";
//   return;   
//  };

submitBtn.onsubmit = (e) => {
  e.preventDefault()
  console.log(userName.value)
  window.location.href="./play.html";
}