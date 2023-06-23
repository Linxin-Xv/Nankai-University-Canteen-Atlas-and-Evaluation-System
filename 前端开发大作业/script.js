var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认跳转行为
    var href = this.getAttribute('href');
    window.location.href = href; // 跳转到目标页面
  });
}