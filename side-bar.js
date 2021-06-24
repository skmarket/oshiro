'use strict'
{

  const btn = document.querySelector('.btn-menu');
  const nav = document.querySelector('nav');
  
  btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
    if (btn.innerHTML === 'めにゅー') {
      btn.innerHTML = '閉じる';
    } else {
      btn.innerHTML = 'めにゅー';
    }
  });
  
  // -------------------------------------------------------
  
  // const btnlist1 = document.querySelector(".btn-list-1");
  // const hidden1 = document.querySelector(".hidden-list-1");
  
  // btnlist1.addEventListener('click',() => {
  //   hidden1.classList.toggle('hidden-list-open-1');
  // });
  
  // const btnlist2 = document.querySelector(".btn-list-2");
  // const hidden2 = document.querySelector(".hidden-list-2");
  
  // btnlist2.addEventListener('click',() => {
  //   hidden2.classList.toggle('hidden-list-open-2');
  // });
  
  // const btnlist3 = document.querySelector(".btn-list-3");
  // const hidden3 = document.querySelector(".hidden-list-3");
  
  // btnlist3.addEventListener('click',() => {
  //   hidden3.classList.toggle('hidden-list-open-3');
  // });
  
}
