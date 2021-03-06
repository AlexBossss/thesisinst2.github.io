const docEndorsment = ` 


<div class="article-menu doc-endorsement_menu">
    <div data-tab-name="doc-endorsement-initiator" class="menu_item active-item">Инициатор</div>
    <div data-tab-name="doc-endorsement-endorser" class="menu_item">Согласующий</div>
    <div data-tab-name="doc-endorsement-approver" class="menu_item">Утверждающий</div>
    <div data-tab-name="doc-endorsement-secretary" class="menu_item">Секретарь</div>
</div>
<div class="article-content doc-endorsement-initiator active-article-content">
    <div class="article-title">
    Сценарий работы инициатора
    </div>
    <div class="article-description">
    Инициатор создает карточку, заполняет необходимые ему поля,
    добавляет <a href =''>вложения </a>и запускает процесс согласования, выбирая
    участников процесса. 
    </div>
    <details>
    <summary class='detail-title'>
        Как создать карточку
    </summary>
    <div class="detail-content">
        Создать можно как новую карточку с пустыми полями, так и карточку
        с уже заполненными полями используя <a href =''>шаблоны </a> документов или скопировать
        существующую карточку. Создать новую карточку:
        <ul>
            <li>на <a href =''>главном экране </a> системы</li>
            <li>пункт меню «Документы» – «Создать документ»</li>
            <li>из списка документов «Создать» - «Новый»</li>
            <li>из списка шаблонов «Создать документ»</li>
            <li>из карточки документа «Создать» - «На основании»</li>
            <li>используя <a href =''>плагины</a></li>
        </ul>
    </div>

    </details>
    <details>
    <summary class='detail-title'>
        Как заполнить карточку
    </summary>
    <div class="detail-content">
        Основные поля для заполнения находятся на вкладке <a href =''>детали</a>. Обязательные
        поля помечены символом <span class='red'>*</span>. Для быстрого заполнения полей можно воспользоваться
        <a href =''>шаблонами</a>, нажав соответствующую кнопку в правой части экрана.
    </div>
    </details>
    <details>
    <summary class='detail-title'>
        Как добавить вложение
    </summary>
    <div class="detail-content">
        Перейдите на вкладку <a href =''>Вложения</a> и выберите один из способов:
        <ul>
            <li>добавить файл (или файлы) с жесткого диска</li>
            <li>добавить файл из буфера</li>
            <li>добавить файл со Сканера</li>
            <li>добавить файл из подчиненых карточек</li>
            <li>добавить версию вложения</li>
        </ul>
        Если вы являетесь создателем вложения, вы можете редактировать и изменять его
        на любых этапах. Удалять вложения других пользователей нельзя.
    </div>

    </details>
    <details>
    <summary class='detail-title'>
        Как запустить процесс согласования
    </summary>
    <div class="detail-content">
        <ol>
            <li>В правой части экрана нажмите «Согласование»</li>
            <li>Выберите пользователей на роли Согласующий, Утверждающий, Секретарь</li>
            <li>Для роли согласующий возможно выбрать несколько пользователей, использовав множественное назначение </li>
            <li>При необходимости установите срок исполнения и оставьте комментарий</li>
            <li>Запустите процесс нажав «ОК»</li>
        </ol>
        Вы можете отправить документ или договор либо только на согласование, либо только на утверждение, для этого
        необходимо удалить лишние роли из списка.
    </div>
    </details>
    <details>
    <summary class='detail-title'>
        Что такое доработка
    </summary>
    <div class="detail-content">
        В случае если участником процесса карточка была отклонена, она возвращается инициатору
        на доработку. Найти ее можно в <a hraf="">папке</a> <b>"Документы"</b> — <b>"Доработка"</b>. Инициатор вносит изменения в карточку (изменяет поле, вложение,
            участников процесса) и
        продолжает процесс. Время на доработку ограничено, если при запуске процесса
        у инициатора стояла длительность.
    </div>

    </details>
    <details>
    <summary class='detail-title'>
        Как изменить участников процесса
    </summary>
    <div class="detail-content">
        После запуска процесса Инициатор может поменять участников (если включена функция Изменения участников).
        <ol>
            <li>В правой части экрана нажмите «Изменить участников»</li>
            <li>Выберите новых пользователей на роль(и)</li>
            <li>Добавьте комментарий</li>
            <li>Нажмите «Ок»</li>
        </ol>
    </div>

    </details>
</div>
<div class="article-content doc-endorsement-endorser">
<div class="article-title">
Сценарий работы согласующего
</div>
<div class="article-description">
    Согласующий может либо согласовать документ, 
    либо отправить его на доработку. После согласования документ переходит на следующий этап процесса.
</div>
<details>
<summary class='detail-title'>
    Где найти карточку
</summary>
<div class="detail-content">
    Карточки, направленные вам на согласование, попадают в <a href="">папку</a> действий <b>"Документы"</b> - <b>"Согласование"</b>. 
    Рядом с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, 
    то счетчик будет выделен цветом и жирнымшрифтом.<br>
    В случае если карточка была вами согласованна, вы можете увидеть ее в <a href="">папке</a> поиска <b>"Согласованные мной"</b>.
</div>   
</details>
<details>
<summary class='detail-title'>
    Действия согласующего
</summary>
<div class="detail-content">
    Вы можете выполнить процессное действие из карточки документа, нажав соответствующую кнопку:
    <ul>
        <li><b>Согласовать</b> - документ согласован и отправляется на следующий этап процесса согласования. По желанию можно оставить комментарий.</li>
        <li><b>Отклонить</b> - документ возвращается на доработку инициатору. Необходимо в комментарии указать причину.</li>
    </ul>
    Данные действия также доступны из <a href="">списка</a> документов, по нажатию на "состояние" и при просмотре вложений.
</div>
</details>
<details>
<summary class='detail-title'>
    Возможность подписания ЭП
</summary>
<div class="detail-content">
    Вы может согласовать документ, подписав вложения документа/договора с помощью электронной цифровой подписи. 
    Настройка данной возможности осуществляется администратором.
    <ol>
        <li>нажмите Согласовать</li>
        <li>нажмите Подписать ЭЦП</li>
        <li>выберите сертификат из списка или укажите путь до него</li>
        <li>введите пароль</li>
        <li>нажмите Ок</li>
    </ol>
    Подписываются только вложения!
</div>

</details>
<details>
<summary class='detail-title'>
    Как изменить согласующего
</summary>
<div class="detail-content">
    Вы можете передать карточку другому пользователю или добавить дополнительных согласующих. 
    Данная функция возможна только при соответствующей настройке системы.
    <ol>
        <li>нажмите Изменить участников</li>
        <li>замените себя на другого пользователя или добавьте пользователей</li>
        <li>укажите причину изменений в комментарии</li>
        <li>нажмите Ок</li>
    </ol>
    Карточка перейдет указанному пользователю.
</div>
</details>
</div>
<div class="article-content doc-endorsement-approver">
<div class="article-title">
Сценарий работы утверждающего
</div>
<div class="article-description">
    Утверждающий может утвердить документ, отправить его на доработку или отменить процесс.
    В случае если утверждающий отправляет документ на доработку, процесс начинается сначала. 
    Если при запуске процесса на роль секретаря был назначен пользователь, то после утверждения 
    документ переходит к секретарю для регистрации, если пользователь назначен не был, то процесс завершается.
</div>
<details>
<summary class='detail-title'>
    Где найти карточку
</summary>
<div class="detail-content">
    Карточки, направленные вам на утверждение, попадают в <a href="">папку</a> действий <b>"Документы"</b> - <b>"Утверждение"</b>. Рядом 
    с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, то счетчик 
    будет выделен цветом и жирным шрифтом. <br> 
    В случае если карточка была вами утверждена, вы можете увидеть ее в папке поиска <b>"Утвержденные мной"</b>.
</div>   
</details>
<details>
<summary class='detail-title'>
    Действия утверждающего
</summary>
<div class="detail-content">
    Вы можете выполнить процессное действие из карточки документа, нажав соответствующую кнопку:
    <ul>
        <li><b>Утвердить </b>- документ утвержден, процесс завершается. Если в процессе учавствует секретарь, карточка переходит к нему на регистрацию. По желанию можно оставить комментарий.</li>
        <li><b> Отклонить </b> - документ возвращается на доработку инициатору, процесс начнется с начала. Необходимо в комментарии указать причину.</li>
        <li> <b>Отменить </b>-  процесс завершается. Необходимо в комментарии указать причину.</li>
    </ul>
    Данные действия также доступны из <a href="">списка</a> документов, по нажатию на "состояние" и при просмотре вложений.
</div>
</details>
<details>
<summary class='detail-title'>
    Возможность подписать ЭП
</summary>
<div class="detail-content">
    Утверждающий сотрудник, в отличие от согласующего, подписывает не только вложения, но и поля карточки, 
    которые после подписания становятся недоступны для редактирования. Подписываемые поля настраиваются администратором 
    в видах документов.
    <ol>
        <li>нажмите Утвердить</li>
        <li>нажмите Подписать ЭЦП</li>
        <li>выберите сертификат из списка или укажите путь до него</li>
        <li>введите пароль</li>
        <li>нажмите Ок</li>
    </ol>
    После утверждения документа с подписью во вкладке <a href="">детали </a> появляется поле «Подпись» и его значение 
    «Верна» или «Неверна», нажав на которое можно увидеть, что, кем и когда было подписано.
</div>

</details>
<details>
<summary class='detail-title'>
    Как изменить Утверждающего
</summary>
<div class="detail-content">
    Вы можете передать карточку другому пользователю или добавить дополнительных согласующих. 
    Данная функция возможна только при соответствующей настройке системы.
    <ol>
        <li>нажмите Изменить участников</li>
        <li>замените себя на другого пользователя или добавьте пользователей</li>
        <li>укажите причину изменений в комментарии</li>
        <li>нажмите Ок</li>
    </ol>
    Карточка перейдет указанному пользователю.
</div>
</details>
<details>
<summary class='detail-title'>
    Отмена процесса
</summary>
<div class="detail-content">
    Утверждающий может также отменить процесс согласования, нажав соответствующую кнопку. При этом вам необходимо указать причину.
</div>
</details>
</div>
<div class="article-content doc-endorsement-secretary">
<div class="article-title">
Сценарий работы Секрктаря
</div>
<div class="article-description">
    Секретарь регистрирует документ.
    После регистрации процесс согласования завершается.
</div>
<details>
<summary class='detail-title'>
    Где найти карточку
</summary>
<div class="detail-content">
    Карточки, направленные вам на регистрацию, попадают в папку действий <b>"Канцелярия"</b> - <b>"Регистрация"</b>. 
    Рядом с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, 
    то счетчик будет выделен цветом и жирным шрифтом.
</div>   
</details>
<details>
<summary class='detail-title'>
    Как зарегистрировать документ
</summary>
<div class="detail-content">
    
    <ol>
        <li>в списке документов или в карточке нажмите Зарегистрировать</li>
        <li>заполните форму регистрации</li>
        <li>нажмите ОК</li>
    </ol>
    Сработает <a href="">механизм повторной регистрации</a>, если, введенные вами данные уникальны, документ будет зарегистрирован, 
    процесс завершен.

</div>
</details>
<details>
<summary class='detail-title'>
    Возврат инициатору
</summary>
<div class="detail-content">
    Возврат карточки инициатору на доработку на данном этапе невозможен.
</div>

</details>
<details>
<summary class='detail-title'>
    Как изменить Секретаря
</summary>
<div class="detail-content">
    Вы можете передать карточку другому пользователю или добавить дополнительных согласующих. 
    Данная функция возможна только при соответствующей настройке системы.
    <ol>
        <li>нажмите Изменить участников</li>
        <li>замените себя на другого пользователя или добавьте пользователей</li>
        <li>укажите причину изменений в комментарии</li>
        <li>нажмите Ок</li>
    </ol>
    Карточка перейдет указанному пользователю.
</div>
</details>
<details>
<summary class='detail-title'>
    Связь с канцелярией
</summary>
<div class="detail-content">
    После регистрации документа карточка попадает в соответствующий журнал в разделе <a href="">Канцелярия</a>.
    <ul>
        <li>Входящие</li>
        <li>Исходящие</li>
        <li>Внутренние</li>
    </ul>
    Журналы документов доступны из пункта меню <a href="">Канцелярия</a> и содержат те же пункты управления, что и список документов.
</div>
</details>
</div>
</div>
`

