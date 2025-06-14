function checkVisit() {
  const lastVisit = getCookie("lastVisit");
  const now = new Date().toLocaleString();

  if (!lastVisit) {
    alert("Welcome to my homepage for the first time!");
  } else {
    alert("Welcome back! Your last visit was " + lastVisit);
  }

  setCookie("lastVisit", now, 365);
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const cookies = decoded.split(';');
  for (let c of cookies) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
  }
  return "";
}

$(document).ready(function(){
  $('#changeTheme').click(function(){
    if ($('body').hasClass('theme-blue')) {
      $('body').removeClass('theme-blue').addClass('theme-red');
    } else {
      $('body').removeClass('theme-red').addClass('theme-blue');
    }
  });
});
