const taskManagement = `<div class="task-management">
<div class="article-menu task-management_menu">
    <div data-tab-name="task-management-initiator" class="menu_item active-item">Инициатор</div>
    <div data-tab-name="task-management-executor" class="menu_item">Исполнитель</div>
    <div data-tab-name="task-management-controller" class="menu_item">Контролер</div>
    <div data-tab-name="task-management-viewer" class="menu_item">Наблюдатель</div>
</div>
<div class="article-content task-management-initiator active-article-content">
    <div class="article-title">
        Сценарий работы инициатора задачи
    </div>
    <div class="article-description">
        Инициатор создает задачу и направляет ее исполнителю
    </div>

    <details>
        <summary class='detail-title'>
            Как создать карточку
        </summary>
        <div class="detail-content">
            Создать можно как новую карточку с пустыми полями, так и карточку
            с уже заполненными полями используя <span class="link" current-article="task-management" data-tab-name = "task-template">шаблоны задач </span> или скопировать
            существующую карточку. Создать новую карточку:
            <ul>
                <li>на <span class="link" current-article="task-management" data-tab-name = "pr-main-screen" >главном экране </span> системы <img src="img/taskcreate.PNG"
                        style="height: 90px;"></li>
                <li>пункт меню «Задачи» – «Создать задачу»</li>
                <li>из списка задач «Создать» - «Новый»</li>
                <li>из списка шаблонов «Создать задачу»</li>
                <li>из другой карточки «Создать» - «На основании»</li>
                <li>С помощью сочетания клавиш <b>Alt+T </b></li>
                <li>используя <span class = "link" current-article="task-management" data-tab-name = "pr-plugins" >плагины</span></li>
            </ul>
        </div>
    </details>

    <details>
        <summary class='detail-title'>
            Действия инициатора
        </summary>
        <div class="detail-content">
            <ul>
                <li><b>Отправить исполнителю </b> – запускает процесс работы над задачей, при этом
                    необходимо назначить пользователей на нужные роли</li>
                <li><b>Завершить </b> – завершает процесс работы над задачей, доступно после
                    выполнения задачи исполнителем</li>
                <li><b>Выполнена </b> – завершает выполнение задачи</li>
                <li><b>Вернуть на доработку </b> – отправляет задачу на доработку исполнителю,
                    доступно для задачи, выполненной исполнителем
                     </li>
                <li><b>Отменить процесс</b> – позволяет прервать процесс работы над задачей</li>
            </ul>
        </div>
    </details>

    <details>
        <summary class='detail-title'>
            Как переназначить задачу
        </summary>
        <div class="detail-content">
            Если исполнитель еще не выполнил задачу, инициатор может изменить исполнителя
            нажав <img src="img/changeexecutor.PNG">
        </div>
    </details>

    <details>
        <summary class='detail-title'>
            Как назначить задачу самому себе
        </summary>
        <div class="detail-content">
            В <span class="link" current-article="task-management" data-tab-name = "pr-list"> списке</span> задач нажмите "Создать" - "Самому себе"<br> В этом случае вы
            являетесь
            одновременно инициатором и исполнителем задачи
        </div>
    </details>

    <details>
        <summary class='detail-title'>
            Как завершить задачу
        </summary>
        <div class="detail-content">
            После того, как исполнитель и контролер закончили свои действия задачи, она возвращается инициатору
            для завершения<br>
            <ul>
                <li>Если инициатор принимает задачу, он завершает ее, и, соответственно, весь процесс</li> 
            <li>Если же задача требует доработки, она возвращается исполнителю</li> 
            </ul>
              

        </div>
    </details>

</div>
<div class="article-content task-management-executor">
    <div class="article-title">
        Сценарий работы исполнителя задачи
    </div>
    <div class="article-description">
        Исполнитель выполняет задачу и отправляет её на контроль инициатору
    </div>

    <details>
        <summary class='detail-title'>
            Где найти карточку
        </summary>
        <div class="detail-content">
            Задачи, направленные вам на исполнение, попадаюд в <span class="link" current-article="task-management" data-tab-name = "task-folders">папку </span> <b>"Задачи"</b> -
            <b>"Назначенные" </b><br>
            После принятий вами задачи, она перейдет в папку <b>"В работе" </b><br>
            Рядом с названием папки отображается число входящих в нее карточек. Если имеются новые
            уведомления, то счетчик будет выделен цветом и жирнымшрифтом<br>
            <br>
            Также карточку можно увидеть в папке поиска <b>"Все мои задачи" </b> - <b>"Полученные"
            </b> - <b>"Активные" </b>
        </div>

    </details>

    <details>
        <summary class='detail-title'>
            Действия исполнителя
        </summary>
        <div class="detail-content">
            <ul>
                <li><b>Принять </b> – принять задачу к выполнению</li>
                <li><b>Выполнена </b> – отметить задачу как выполненную. После этого она
                    направляется
                    контролёру или инициатору  для проверки выполнения
                </li>
                <li><b> Переназначить</b> – позволяет переназначить задачу на выполнение другому
                    пользователю. Данное действие доступно, если при создании задачи был
                    отмечен флажок «Переназначение возможно». При этом необходимо выбрать
                    нового исполнителя и оставить комментарий, указав причину переназначения</li>
                <li><b>Вернуть инициатору </b>– возвращает невыполненную задачу 
                        инициатору по
                    одной из следующих причин</li>
            </ul>
        </div>

    </details>
    <details>
        <summary class='detail-title'>
            Причины возврата
        </summary>
        <div class="detail-content">
            <ul>
                <li><b>Запросить изменение сроков</b> – отправляет инициатору запрос на
                    изменение сроков выполнения задачи. При этом в комментарии
                    необходимо указать желаемый срок</li>
                <li><b>Уточнить детали </b> – отправляет инициатору запрос на уточнение
                    деталей задачи. Поле «Комментарий» обязательно должно быть
                    заполнено</li>
                <li>
                    <b> Отказаться</b> – отказаться от выполнения задачи. Данное действие
                    возможно, только если при создании задачи инициатором был отмечен
                    флажок <b>«Отказ возможен»</b>. При этом в комментарии необходимо
                    указать причину отказа
                </li>

            </ul>
        </div>

    </details>
</div>

<div class="article-content task-management-controller">
    <div class="article-title">
        Сценарий работы котролера 
    </div>
    <div class="article-description">
        Если задача нуждается в доработке,
        Контролер возвращает задачу исполнителю. Если контролер принимает задачу,
        она отправляется на контроль инициатору
    </div>

    <details>
        <summary class='detail-title'>
            Где найти карточку
        </summary>
        <div class="detail-content">
            Задачи, направленные вам на исполнение, попадаюд в <span class="link" current-article="task-management" data-tab-name = "task-folders" >папку </span> <b>"Задачи"</b> -
            <b>"Для контроля" </b><br>
            Если имеются новые
            уведомления, то счетчик будет выделен цветом и жирнымшрифтом<br>
            <br>
            Также карточку можно увидеть в папке поиска <b>"Все мои задачи" </b> - <b>"Полученные"
            </b> - <b>"Активные" </b>
        </div>

    </details>

    <details>
        <summary class='detail-title'>
            Действия контролера
        </summary>
        <div class="detail-content">
            <ul>
                <li><b>Принять</b> – принять выполнение задачи у исполнителя и направить ее
                   инициатору </li>
                <li><b>Вернуть на доработку</b> – отправляет задачу на доработку  исполнителю. При
                    этом в резолюции необходимо указать причину
                </li>
                <li><b> Переназначить</b> – позволяет переназначить задачу на выполнение другому
                    пользователю. Данное действие доступно, если при создании задачи был
                    отмечен флажок «Переназначение возможно». При этом необходимо выбрать
                    нового исполнителя и оставить комментарий, указав причину переназначения</li>
                </ul>
        </div>
    </details>
    
</div>



<div class="article-content task-management-viewer">
    <div class="article-title">
        Сценарий работы Наблюдателя 
    </div>
    <div class="article-description">
        Наблюдатели не принимают непосредственного участия в работе над задачей. 
        Будучи назначены, они могут следить за процессом и получать уведомления об этапах 
        выполнения задачи
    </div>

    <details>
        <summary class='detail-title'>
            Где найти карточку
        </summary>
        <div class="detail-content">
            Задачи, в которых вы назначены наблюдателем, находятся в <span class ="link" current-article="task-management" data-tab-name = "task-folders">папке </span> <b>"Задачи"</b> -
            <b>"Наблюдаемые" </b><br>
            Если имеются новые
            уведомления, то счетчик будет выделен цветом и жирнымшрифтом<br>
            <br>
            Также карточку можно увидеть в папке поиска <b>"Все мои задачи" </b> - <b>"Полученные"
            </b> - <b>"Активные" </b>
        </div>
    </details>

    <details>
        <summary class='detail-title'>
            Как прекратить наблюдение
        </summary>
        <div class="detail-content">
            Нажмите <b> прекратить наблюдение</b> и выбирите один из способов:
            <ul>
                <li><b>Удалить из наблюдателей </b> – вы перестаете быть наблюдателем для данной задачи, полностью лишаетесь доступа к карточке задачи.</li>
                <li><b> Отключить оповещения </b>– вы остаетесь наблюдателем, но больше не получаете оповещения об изменениях состояния задачи.</li>
            </ul>
        </div>
    </details>

</div>
</div>`