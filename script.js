const platform = document.getElementById("platform-value");
const userAgent = document.getElementById("useragent-value");

platform.innerText = window.navigator.platform;
userAgent.innerText = window.navigator.userAgent;
