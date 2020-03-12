const taskCard =`   <div class="doc-card">
<div class="article-menu doc-card_menu">
    <div data-tab-name="task-card-details" class="menu_item active-item">Детали</div>
    <div data-tab-name="task-card-projects" class="menu_item">Роли</div>
    <div data-tab-name="task-card-attachments" class="menu_item">Вложения</div>
    <div data-tab-name="task-card-ierarchy" class="menu_item">Иерархия</div>
    <div data-tab-name="task-card-conversations" class="menu_item">Обсуждения</div>
    <div data-tab-name="task-card-additions" class="menu_item">Дополнительно</div>
</div>
<div class="article-content task-card-details active-article-content">
                    <div class="article-title">
                    Детали задачи
                    </div>
                    <div class="article-description">
                        Данная вкладка содержит основную информацию о задаче, которая вносится при её создании<br>
                        <img src="img/task-details.png">
                    </div>

                    <details>
                    <summary class='detail-title'>
                        Системные поля
                    </summary>
                    <div class="detail-content">
                        Данные поля назначаются системой автоматически и не могут быть изменены:
                        <ul>
                            <li><b>Номер</b></li>
                            <li><b>Дата создания</b> </li>
                            <li><b>Состояние</b> - текущий этап процесса</li>
                            
                        </ul>
                    </div>
                    </details>

                    <details>
                    <summary class='detail-title'>
                        Поля для заполнения
                    </summary>
                    <div class="detail-content">
                        <b> Название</b> – название задачи, задаваемое пользователем<br>
                        <br>
                        <b>Длительность</b> и <b> время</b> выполнения задаются инициатором в минутах, часах или днях. В этом случае время выполнения будет вычислено автоматически на основе рабочего календаря, в котором учитываются выходные и праздничные дни, а также количество рабочих часов.
                        Инициатор может задать срок, к которому должна быть выполнена задача, в поле <b>«Выполнить до» </b>. Этот способ удобно использовать в случае, если задача должна быть выполнена строго к определенной дате.
                        Нажав на символ  <img src="img/time.png"> , можно индивидуально настроить дату и время персональных уведомлений о выполнении задачи.<br>
                        <br>
                        <b>Тип задачи</b> выбирается из значений, заданных администратором в справочнике «Типы задач», и определяет общую категорию, к которой относится задача. В зависимости от типа задачи набор полей во вкладке может        
                        меняться <br>
                        <br>
                        <b>Приоритет </b> выбирается из типов, заданных в справочнике «Приоритеты», и определяет важность и/или срочность задачи. По умолчанию в системе есть четыре типа приоритетов: критический, высокий, нормальный и низкий.<br>
                        <br>
                    <b> Основание</b>  содержит название и номер задачи, документа, договора или совещания, послужившего основанием для создания текущей задачи. При создании задачи на основании либо при заполнении поля «Основание» система предлагает скопировать вложения в подчиненную карточку.
                        <b>Зависит от</b> – содержит название и номер задачи, от которой зависит текущая задача. Текущая задача автоматически запускается сразу после завершения предыдущей зависимой задачи.<br>
                        <br>
                        <b> Полное описание</b> задачи может содержать любую необходимую информацию о ней<br>
                        <br>
                        Флажок <b>«Переназначение возможно»</b>. Если отметить данный флажок, то исполнитель, назначенный при создании задачи, сможет переназначить ее выполнение другому пользователю.<br>
                        <br>
                        Флажок <b>«Отказ возможен» </b>. Если отметить данный флажок, то исполнитель, назначенный при создании задачи, сможет отказаться от её выполнения.<br>
                        <br>
                        Флажок <b> «Не требует подтверждения выполнения»</b>. Если отметить данный флажок, то после выполнения задачи исполнителем, она не будет отправлена на контроль инициатору.<br>
                        <br>
                        Флажок <b>«Доступ к карточке-основанию» </b>. Если отметить данный флажок, то исполнитель получит доступ к задаче/документу/договору/совещанию, которые указаны в поле «Основание».<br>
                        <br>
                        <b> </b>Процент выполнения на этапе создания задачи не отображается и недоступен для редактирования, однако может быть изменен на последующих этапах выполнения задачи передвижением ползунка.<br>
                        <br>
                        Если карточка задачи содержит вложения, в нижней части вкладки отображается список вложенных файлов. При нажатии на ссылку в списке файл будет открыт.
                    </div>
                    </details>

                    <details>
                    <summary class='detail-title'>
                    Журнал действий
                    </summary>
                    <div class="detail-content">
                        В нижней части экрана задачи отображается журнал действий, который содержит информацию об изменениях состояния задачи в процессе ее выполнения<br>
                        <img src="img/action-register.png" alt=""> <br>
                        Для просмотра записи журнала действий необходимо нажать на ссылку в столбце <b> «Дата поступления»</b>.
                    </div>
                    </details>

                    <details>
                        <summary class='detail-title'>
                            Как сделать задачу важной
                        </summary>
                        <div class="detail-content">
                            У всех карточек на вкладке «Детали» в верхнем левом углу расположена звездочка , нажав на 
                            которую можно отметить карточку как «важную». Если звездочка изменила цвет на желтый    <img src="img/star.PNG" style="height: 16px;">     , 
                            это означает, что карточка приобрела статус и будет отображаться во вкладке <b>«Важное»</b> на <a href="">основном  
                            экране</a> и <a href="">плагине</a> в MS Outlook. Для того чтобы изменить статус карточки, необходимо снова нажать 
                            на звездочку. После этого звездочка примет серый цвет, и карточка перестанет считаться важной.
                        </div>
                    </details>
</div>
<div class="article-content task-card-projects">
            <div class='article-title'>
            Роли
            </div>
            <div class="article-description">
            Данная вкладка позволяет просматривать роли участников процесса работы над задачей. Изменять роли во время работы процесса запрещено<br>
            <img src ="img/task-roles.png">
            
            </div>
</div>


<div class="article-content task-card-attachments">
                <div class="article-title">
                Вложения
                </div>
                <div class="article-description">
                    Данная вкладка позволяет  добавлять вложения к карточкам. В скобках рядом с названием вкладки 
                    указано число вложенных файлов.
                </div>

                <details>
                    <summary class='detail-title'>
                        Как добавить вложение
                    </summary>
                    <div class="detail-content">
                        Добавить вложение можно одним из способов:
                        <ul>
                            <li>добавить файл (или файлы) с жесткого диска</li>
                            <li>добавить файл из буфера</li>
                            <li>добавить файл со Сканера</li>
                            <li> добавить файл из подчиненых карточек</li>
                            <li>добавить <a href="">версию вложения</a></li>
                        </ul>
                        Также вложение можно добавить в окне запуска процесса.
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Типы вложений
                    </summary>
                    <div class="detail-content">
                        Типы вложений:<br>
                        В системе предусмотрено два типа вложений: тип <b>«Отчет исполнителя»</b> служит для обозначения 
                        вложений, содержащих отчёт по выполненной работе, в остальных случаях выбирается тип <b>«Вложение»</b>.
                        Дополнительные типы вложений создаются администратором в справочнике.
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Основные вложения
                    </summary>
                    <div class="detail-content">
                        В договорах есть возможность отмечать вложение как основное. <img src="img/main.PNG" alt="main" style="height: 16px;">   Отметка служит для более легкого 
                        восприятия информации в случае большого количества вложенных документов. <br>
                        <br>
                        Выставлять отметку <b>Основной</b> могут автор документа и инициатор процесса, например, согласования.
                        Также отметку может выставлять администратор системы. Другим пользователям 
                        запрещено изменять отметку <b>Основной</b>.
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Редактирование вложений
                    </summary>
                    <div class="detail-content">
                        Вы можете редактировать вложение, выделив его и нажав  <img src="img/edit.PNG" alt="edit" style="height: 20px;">  <br>
                        В открывшемся окне «Редактирование вложения» пользователь может изменить <b>наименование </b>
                        файла, добавить <b>комментарий </b> и выбрать <a href="">тип вложения</a>.
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Версии вложений
                    </summary>
                    <div class="detail-content">
                        Вы можете добавлять версии для вложений для отслеживания изменений, которые вносились 
                        в один и тот же документ в ходе процессов  
                        <ol>
                            <li>выделите нужное вложение</li>
                            <li>добавить - новую версию</li>
                        </ol>
                        Версию вложения можно также добавить со сканера или из буфера обмена<br>
                        В списке карточек будет отображаться последняя версия вложений
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Просмотр вложений
                    </summary>
                    <div class="detail-content">
                        Доступно два режима просмотра вложений:
                        <ul>
                            <li><b>Список вложений</b> – все вложения представлены в виде списка</li>
                            <li><b>Предварительный просмотр</b> – доступен предварительный просмотр содержания вложений 
                                форматов pdf, png, jpeg, tif, jpg, tiff, bmp</li>
                        </ul>
                        Также список вложений отображается на вкладке Детали карточки и в <a href="">списке</a>.
                    </div>
                </details>
    </div>
<div class="article-content task-card-ierarchy">
                        <div class="article-title">
                        Иерархия
                        </div>
                        <div class="article-description">
                            На вкладке <b>«Иерархия» </b> вы можете увидеть иерархический список отношений задач, документов, 
                            договоров и совещаний. Иерархия формируется в соответствии с тем, что
                            было указано в поле <b>«Основание» </b>в карточке. Текущая задача, документ, договор или
                            совещание выделены синим цветом<br>
                            Для просмотра выбранной в списке задачи, документа, договора или совещания
                            необходимо дважды нажать на соответствующую строку таблицы или выбрать пункт
                            меню, нажав на правую кнопку мыши.
                       </div>
    </div>
<div class="article-content task-card-conversations">
                    <div class="article-title">
                    Обсуждения
                    </div>
                    <div class="article-description">
                        На данной вкладке отображаются: 
                        <ul>
                            <li>обсуждения карточки – осуществляются в режиме реального времени</li>
                            <li>комментарии, оставленные при выполнении процессного действия – если действие выполнено 
                                без комментария, то запись добавлена не будет</li>
                            <li>информация о добавлении и изменении вложений – если действие выполнено сразу с 
                                добавлением/изменением вложения и комментарием, то запись добавляется только одна;</li>
                        </ul>
                        Текущее число обсуждений отображается в скобках рядом с названием вкладки.
                    </div>

                    <details>
                    <summary class='detail-title'>
                        Как отправить сообщение
                    </summary>
                    <div class="detail-content">
                        Чтобы добавить новое сообщение, введите текст в строку в нижней части экрана и нажмите на кнопку <img src="img/send.PNG" style="height: 22px;" alt='send'>
                        либо воспользоваться сочетанием клавиш <b>Ctrl+Enter</b><br>
                        <br>
                        <br>
                        Для того, чтобы указать одного или нескольких адресатов,  введите в поле сообщения символ <b>@</b> 
                        и выберите участников из выпадающего списка. Это может быть инициатор задачи или документа, 
                        все участники процесса, или любой пользователь системы. Все пользователи, которым адресован 
                        комментарий, получат доступ к просмотру карточки. <br><br>
                        Вы можете ответить на отдельное сообщение, просто кликнув по нему. В этом случае в 
                        строке сообщения автоматически отобразится имя адресата.  
                    </div>   
                    </details>
    </div>
<div class="article-content task-card-additions">
                    <div class="article-title">
                    Дополнительные вкладки
                    </div>
                    <div class="article-description">
                        Дополнительные вкладки, которые используются реже основных, доступны по кнопке <img src="img/additional.PNG" style="height: 25px;" alt=" additional">
                    </div>

                    <details>
                    <summary class='detail-title'>
                    Безопасность
                    </summary>
                    <div class="detail-content">
                        Данная вкладка содержит список пользователей, которым данная карточка доступна для просмотра.
                        В карточках документов, договоров существует возможность добавлять пользователей, которые будут 
                        иметь доступ к карточке. Данную операцию могут производить администратор, автор или инициатор.
                        На вкладку <b>«Безопасность» </b> автоматически добавляются пользователи, указанные в полях <b>«От»</b>, <b> «Кому»</b>, 
                        <b>«Копия» </b> вкладки «Детали» с ролями <b>«Отправитель» </b>,<b>«Получатель»</b>  и <b>«Получатель копии»</b> 
                        соответственно.
                    </div>
                    </details>


                    <details>
                    <summary class='detail-title'>
                      Проекты
                    </summary>
                    <div class="detail-content">
                    Вы можете объединять карточки, группируя их по различным проектам. На вкладке <b>«Проекты»</b> отображаются проекты компании, 
                    в рамках которых ведется работа над задачей. Задача может относиться к нескольким проектам одновременно. <br>
                    <br>
                    Чтобы отметить проект как основной выберите его и нажмите <img src="img/main-project.png"><br>
                    <br>
        
                    Для того чтобы добавить задачу в проект, на вкладке необходимо нажать на кнопку <img src="img/add.png">  и в открывшемся окне выбрать группу проектов и сам
                    проект. Затем следует нажать на кнопку <img src="img/choose.png" >
                    
                    </div>
                    </details>

                   

                    <details>
                    <summary class='detail-title'>
                    История изменений
                    </summary>
                    <div class="detail-content">
                        Данная вкладка содержит информацию об изменениях, произведенных в карточках документа, 
                        договора. В процессе создания карточки эта вкладка пуста. Первые записи появятся после 
                        сохранения карточки. На вкладке в хронологическом порядке отображаются все изменения. При 
                        выделении строк, в таблице снизу будут показаны атрибуты, которые были изменены, и их новое 
                        значение.

                    </div>
                    </details>

                    <details>
                    <summary class='detail-title'>
                        История открытий
                    </summary>
                    <div class="detail-content">
                        На данной вкладке фиксируется факт открытия карточки пользователями системы

                    </div>
                    </details>

                    


                    <details>
                    <summary class='detail-title'>
                        Cвязанные карточки
                    </summary>
                    <div class="detail-content">
                        На данной вкладке отображаются карточки, которые имеют отношения к данной<br>
                        Это могут быть:<br>
                        <br>
                        <b>Документы</b>
                        <li>добавленные пользователем</li>
                        <li>являющиеся основанием</li>
                        <li>участвующие в иерархии</li>
                        <li>из истории переписки</li>
                        <br>
                        <b>Договоры</b>
                        <li>добавленные пользователем</li>
                        <li>являющиеся основанием</li>
                        <li>участвующие в иерархии</li>
                        <br>
                        На данной вкладке вы можете сами добавлять и удалять карточки

                    </div>
                    </details>
   </div>
</div>
`;