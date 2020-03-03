const menus = new Map();
menus.set('task', taskMenu);
menus.set('doc', docMenu);

const articles = new Map();
articles.set('doc-endorsement', docEndorsment);
articles.set('doc-card', docCard);
articles.set('doc-template',docTemplate);


const initialArticles =  new Map();
initialArticles.set('doc',docEndorsment)
initialArticles.set('task',taskManagement)

changeMenu();
changeArticle();
changeTab();

