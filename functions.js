const menu = document.querySelector('.card-menu');
const article = document.querySelector('.article');
function changeMenu(){
  
    const headerMenuItem = document.querySelectorAll('.header-menu_item');
    let menuName;

    function showMenu(name){
        menu.innerHTML = menus.get(name);
        console.log(name);
    }

    function selectMenu(){
        headerMenuItem.forEach(item =>{
            item.classList.remove('active-card');
        });
        this.classList.add('active-card');
        menuName = this.getAttribute('data-tab-name');
        showMenu(menuName);
        initArticle(menuName);
        changeArticle();
        changeTab();
    }

    headerMenuItem.forEach(item =>{
        item.addEventListener('click', selectMenu);
    })
}
function changeArticle() {
    const articlesMenuItem = document.querySelectorAll('.article-menu_item');
    
    let articleName;

   function showArticle(name){
        article.innerHTML = articles.get(name);
        console.log(name)
   }

    function selectArticle() {
        articlesMenuItem.forEach(item =>{
            item.classList.remove('active-article-menu-item');
        });
        this.classList.add('active-article-menu-item');
        articleName = this.getAttribute('data-tab-name');
        showArticle(articleName);
        changeTab();
    }

    articlesMenuItem.forEach(item =>{
       item.addEventListener('click', selectArticle);
    });
}

function changeTab(){
    const listItem = document.querySelectorAll(".menu_item");
    const content = document.querySelectorAll('.article-content');
    let tabName;

    function selectContent(tabName){
        content.forEach(item =>{
            item.classList.contains(tabName)? item.classList.add('active-article-content'): item.classList.remove('active-article-content');
        });
    }

    function selectItem(){
        listItem.forEach(item =>{
            item.classList.remove('active-item')
        });
        this.classList.add('active-item');
        tabName = this.getAttribute('data-tab-name');
        selectContent(tabName);
    }

    listItem.forEach(item=>{
        item.addEventListener('click', selectItem);
    });
}

function initArticle(menuName){
    article.innerHTML = initialArticles.get(menuName);
}