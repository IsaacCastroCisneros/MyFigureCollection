//header scroll
let posAbsoluta = window.pageYOffset;
const header = document.querySelector('.header');
const floatList = document.querySelectorAll('.nav-bar__float-list');
const bodyBlock = document.querySelector('.body-block');

//-21
//93
//46.22
window.addEventListener('scroll',()=>
{
    let posActual = window.pageYOffset;
    if(posActual >= 72)
    {
      header.style.top='-3.5em';
      floatList.forEach((container)=>
      {
        container.style.opacity='0';
        container.style.pointerEvents='none';
      });
      console.log('yooo');
    }
    if (posActual < posAbsoluta)
    {
        header.style.top='0';
        floatList.forEach((container)=>
        {
            container.style.opacity='1';
            container.style.pointerEvents='auto';
        });
    }
    posAbsoluta=posActual;
});

//header drop-dow-menu
document.addEventListener('click',(e)=>
{
  const btn = e.target.matches('[data-nav-bar__button]');
  const menu = e.target.closest('[data-nav-bar__button-container]');
  if(!btn && menu != null)
  return

  let menuActual;
  if(menu)
  {
     menuActual = e.target.closest('[data-nav-bar__button-container]');
     menuActual.classList.toggle('active');
  }
  document.querySelectorAll('[data-nav-bar__button-container].active').forEach((menu)=>
  {
     if(menu === menuActual)
     return console.log('no')
     menu.classList.remove('active');
     console.log('si');
  });
}
);
//header-mob drop-down-menu
