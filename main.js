const menus = new Map();
menus.set('task', taskMenu);
menus.set('doc', docMenu);

const articles = new Map();
articles.set('doc-endorsement', docEndorsment);
articles.set('doc-card', docCard);
articles.set('doc-template',docTemplate);
articles.set('doc-folders', docFolders);
articles.set('doc-contract', docContract);
articles.set('doc-prints', docPrints);
articles.set('task-management', taskManagement);


const initialArticles =  new Map();
initialArticles.set('doc',docEndorsment)
initialArticles.set('task',taskManagement)

changeMenu();
changeArticle();
changeTab();

