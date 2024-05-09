var menuList = document.getElementById('navList');
var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('close');

if (menuIcon){
    menuIcon.addEventListener('click', function(){
        menuList.classList.add('show');
       
    });
};
    if(closeIcon){
        closeIcon.addEventListener('click',function(){
            menuList.classList.remove('show');
        });
    };