/*返回文档中与指定选择器或选择器组匹配的第一个 Element对象。如果找不到匹配项，则返回null。*/
let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');
/*将指定的监听器注册到 EventTarget 上，这里实现鼠标点击注册时完成动画*/
signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});
/*将指定的监听器注册到 EventTarget 上，这里实现鼠标点击登录时完成动画*/
signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});