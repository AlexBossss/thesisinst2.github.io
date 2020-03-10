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
articles.set('doc-awareness', docAwareness);
articles.set('doc-registration', docRegistration);
articles.set('doc-resolution', docResolution);

articles.set('task-management', taskManagement);
articles.set('task-card', taskCard);
articles.set('task-template',taskTemplate);
articles.set('task-group-task', taskGroupTask);
articles.set('task-period-task', taskPeriodTask);
articles.set('task-folders', taskFolders);
articles.set('task-prints', taskPrints);

const initialArticles =  new Map();
initialArticles.set('doc',docEndorsment)
initialArticles.set('task',taskManagement)

getLinkTab();
back();
getLink();
changeMenu();
changeArticle();
changeTab();

