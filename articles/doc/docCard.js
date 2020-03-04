const docCard = ` <div class="doc-card">
<div class="article-menu doc-card_menu">
    <div data-tab-name="doc-card-details" class="menu_item active-item">Детали</div>
    <div data-tab-name="doc-card-attachments" class="menu_item">Вложения</div>
    <div data-tab-name="doc-card-chancellery" class="menu_item">Канцелярия</div>
    <div data-tab-name="doc-card-ierarchy" class="menu_item">Иерархия</div>
    <div data-tab-name="doc-card-dialogs" class="menu_item">Обсуждения</div>
    <div data-tab-name="doc-card-additions" class="menu_item">Дополнительно</div>
</div>
<div class="article-content doc-card-details active-article-content">
<div class="article-title">
Детали документа
</div>
<div class="article-description">
    В этой вкладке вносится и отображается основная информация о документе. В зависимости от вида 
    документа набор полей может меняться. 
</div>
<details>
    <summary class='detail-title'>
        Системные поля
    </summary>
    <div class="detail-content">
        <b>Вид</b> – наименование вида документа, который заполняется автоматически, в зависимости 
        от того, какой вид документа был выбран при создании карточки.<br>
        <br>
        <b>Тек. процесс</b> – название текущего процесса, который ведется по данному документу. <br>
        <br>
        <b>Cостояние </b>– заполняется и изменяется автоматически при изменении состояния документа. 
        При нажатии на ссылку с названием состояния осуществляется переход к диаграмме процесса.<br>
        <br>
        В случае если документ уже прошел процесс регистрации, в заголовке также отображается его регистрационный номер и дата регистрации.
    </div>
</details>
<details>
    <summary class='detail-title'>
        Поля заполняемые пользователем
    </summary>
    <div class="detail-content">
        <b>Номер</b> – номер документа заполняется автоматически в соответствии с заданной нумерацией 
        документов в системе, однако может быть введен пользователем.<br>
        <b>Дата</b> – дата создания документа. Заполняется автоматически, но может быть изменена пользователем.<br>
        <b>Тема</b> – необходимо кратко указать основную тему документа, например, о чем говорится в письме.<br>
        <b>Организация</b>  – по умолчанию заполняется той организацией, к которой относится автор документа.<br>
        <b>Подразделение</b> – автоматически заполняется подразделением автора документа.<br>
        <b>Основание</b> – договор, документ, совещание или задача, на основании которых был создан этот документ. 
        При создании на основании либо при заполнении поля «Основание» в карточке система предлагает 
        скопировать вложения в подчиненную карточку.<br>
        <b>Категория</b> – название категории, к которой относится создаваемый документ. Выбирается из 
        справочника «Категории документов».<br>
        <b>Куратор</b> – выбор имени сотрудника, курирующего работу над данным документом. По умолчанию 
        заполняется фамилией автора документа, но может быть изменено вручную. Выбранному сотруднику 
        предоставляется доступ к просмотру этой карточки.<br>
        <b>Содержание</b> – в данном поле в свободной форме можно дать описание документа и указать любую 
        дополнительную информацию.<br>
        Флажок  <b>«Документ доступен всем»</b> разрешает просмотр документа всем пользователям системы вне 
        зависимости от настроек доступа. По умолчанию эта отметка скрыта. Для того чтобы включить данную 
        опцию, необходимо обратиться к администратору системы.<br>
        Флажок  <b>«Доступ к карточке-основанию»</b> позволяет пользователю, обладающему доступом к карточке 
        документа, получить доступ к задаче/документу/договору/совещанию, указанным в поле  <b>«Основание»</b>.<br>
        Если карточка документа содержит вложения, то в нижней ее части будет отображен список последних 
        версий вложенных файлов. При нажатии на ссылку система предложит сохранить файл на диск.               
    </div>
</details>
<details>
    <summary class='detail-title'>
        Журнал действий
    </summary>
    <div class="detail-content">
        В журнале действий вы можете увидеть информацию об изменениях состояния карточки  в 
        различных  процессах. Для просмотра записи журнала действий необходимо нажать на ссылку в 
        столбце <b>«Дата поступления»</b>.
    </div>
</details>
<details>
    <summary class='detail-title'>
        Как сделать документ важным
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
<div class="article-content doc-card-attachments">
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
                В документах есть возможность отмечать вложение как основное. <img src="img/main.PNG" alt="main" style="height: 16px;">   Отметка служит для более легкого 
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

        <details>
            <summary class='detail-title'>
                Проверка подписей
            </summary>
            <div class="detail-content">
                С помощью данной функции вы можете проверить вложения на подлинность. Проверяются 
                вложения подписанные на этапе согласования или утверждения. <br>
                В случае если вложения были  изменены после подписания, подписи станут не действительны.
                Нажав на  <img src="img/sign-check.PNG" alt="sign-check" style="height: 20px;">     вы увидите сообщение, что подпись не верна.   
            </div>
        </details>

        <details>
            <summary class='detail-title'>
                Сравнение вложений
            </summary>
            <div class="detail-content">
                Вы можете  выполнить сравнение отсканированной копии подписанного документа с его 
                электронной версией. 
                <br>
                Данный механизм позволит обнаружить отличия подписанного одной 
                стороной (контрагентом) документа от последней согласованной сторонами версии. <br>
                Для сравнения документов необходимо:
                <ul>
                    <li>выделить скан-копию оригинала</li>
                    <li>нажать на кнопку «Сравнить»</li>
                    <li>в открывшемся списке указать файл для сравнения</li>
                </ul> 
                Система обработает файлы и в отдельном окне откроет документ, где будут выделены все отличия   
            </div>
        </details>
</div>
<div class="article-content doc-card-chancellery">
                <div class="article-title">
                Канцелярия
                </div>
                <div class="article-description">
                В этой вкладке отображается информация, которая была внесена при регистрации и наложении
                резолюции. Состав полей зависит от выбранного вида документа. Поля могут быть заполнены до
                регистрации документа. В этом случае информация, внесенная в этой вкладке, будет использована
                для автоматического заполнения соответствующих полей при регистрации документа.

                </div>

                <details>
                <summary class='detail-title'>
                    Поля "Адресаты" и "Отправитель"
                </summary>
                <div class="detail-content">

                    <ul>
                        <li>Если документ является <b>внутренним</b>, и адресат и отправитель выбираются из справочника
                            <a href=""> сотрудников</a> или <a href=""> подразделений</a> организации
                        </li>
                        <li>Если документ является <b>входящим</b>, адресат выбирается из справочника <a href="">
                                сотрудников</a> или
                            <a href="">подразделений </a>, а отправитель – из справочника контрагентов (физических или
                            юридических лиц)</li>
                        <li>Если документ является <b>исходящим </b>, адресат выбирается из справочника <a href="">контрагентов
                            </a> , а
                            отправитель – из справочника <a href="">сотрудников </a> или <a href="">подразделений </a></li>
                    </ul>
                    Если заполнено поле <b>«Адресаты»</b>, при регистрации исходящего документа в списке
                    входящих формируется фильтр по отправителям входящих документов. Аналогично,
                    если для входящего документа в окне регистрации заполнено поле «Отправитель»,
                    для входящего документа в поле <b>«В ответ на» </b> будет сформирован фильтр по
                    адресатам исходящих документов.

                </div>
                </details>

                <details>
                <summary class='detail-title'>
                    Поле "Исполнитель"
                </summary>
                <div class="detail-content">
                    Если в поле <b>«Отправитель» </b> выбрать сотрудника организации или юридическое лицо из списка
                    контрагентов, то появится поле <b>«Исполнитель» </b> с возможностью выбора исполнителя данного письма.
                    Исполнитель выбирается из справочника сотрудников нашей организации или из списка контактных
                    лиц организации-контрагента.
                </div>
                </details>

                <details>
                <summary class='detail-title'>
                    Поле "Дело"
                </summary>
                <div class="detail-content">
                    В данном поле укажите дело, в которое будет помещена карточка. Если вы являетесь
                    <b>"Делопроизводителем"</b>, то помимо просмотра карточки выбранного дела вы можете произвести
                    редактирование, при этом данные обновятся в соответствующем справочнике канцелярии.
                </div>
                </details>

                <details>
                <summary class='detail-title'>
                    Поле "Ответ на"
                </summary>
                <div class="detail-content">
                    В поле «В ответ на» укажите входящий или исходящий документ, ответом на который является
                    текущий документ. <br>
                    При регистрации исходящего документа выполняется автоматический поиск документа
                    для заполнения поля «В ответ на». В иерархии карточки проводится проверка на ближайший
                    входящий документ. Для этого исходящий документ должен быть создан на основании входящего.
                </div>
                </details>

                <details>
                <summary class='detail-title'>
                    Поле "Ответить до"
                </summary>
                <div class="detail-content">
                    В поле <b>«Ответить до»</b> укажите дату ответа на <b>входящий </b> документ. Если ответ на документ был
                    зарегистрирован, то дата регистрации отобразится под полем «Ответить до» в виде ссылки на
                    историю переписки.
                </div>
                </details>
</div>
<div class="article-content doc-card-ierarchy">
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
<div class="article-content doc-card-dialogs">
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
<div class="article-content doc-card-additions">
           
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
                Версии
                </summary>
                <div class="detail-content">
                    Вкладка содержит информацию о версиях документа, созданных в процессе
                    его согласования. Новые записи во вкладке появляются при возврате документа на
                    доработку
                </div>
                </details>
                
                <details>
                <summary class='detail-title'>
                Журнал передачи
                </summary>
                <div class="detail-content">
                Данная вкладка отображает информацию о том, у кого из сотрудников
                    находились или находятся сейчас оригинал или копия документа<br>
                    При вередачи документа следаует создать новую запись, заполнив следующие поля:
                    <ul>
                        <li><b>Документ</b> – заполняется автоматически, информация в поле не может быть
                            изменена</li>
                        <li><b>Тип экземпляра </b> – в зависимости от того, оригинал или копия были переданы
                            сотруднику, необходимо выбрать соответствующее значение в списке</li>
                        <li><b>Кому передан </b> – имя сотрудника, которому был передан документ. Выбирается
                            из выпадающего списка или в открывающемся окне </li>
                        <li> <b> Дата передачи</b> – по умолчанию устанавливается дата создания записи, но
                            может быть изменена</li>
                        <li> <b>Возвращен </b> – данный флажок необходимо отметить, если документ возвращен</li>
                        <li> <b> Дата возврата</b>  – доступна для заполнения только в случае, если отмечен
                            флажок <b>«Возвращен» </b>. По умолчанию выставляется дата, когда был
                            установлен флажок, но она может быть изменена.</li>
                    </ul>
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
                    История переписки
                </summary>
                <div class="detail-content">
                    Данная вкладка содержит информацию о переписке, частью которой
                    является текущий документ. История формируется исходя из информации, указанной в
                    поле <b>«В ответ на»</b><br>
                    <li> <img src="img/out.PNG"> - исходящие письма </li>
                    <li> <img src="img/in.PNG">  - входящие письма </li>
                    Текущий документ выделен <b>синим цветом</b> . Любой документ в списке может быть
                    открыт для просмотра двойным нажатием на соответствующую строку таблицы.
                </div>
                </details>
                
                <details>
                <summary class='detail-title'>
                    Процессы
                </summary>
                <div class="detail-content">
                    Данная вкладка содержит информацию о процессах, в которых участвует текущий
                    документ, договор или совещание <br>
                    <br>
                    В первой таблице отображается информация о процессах: название, отметка о том,
                    запущен ли процесс, количество запусков и текущее состояние. При выборе процесса
                    в первой таблице во второй таблице отображается список ролей и пользователей,
                    участвующих в данном процессе. С помощью кнопки <b>«Диаграмма» </b> можно перейти к
                    наглядной диаграмме процессов, отображающей маршрут всех завершенных и
                    текущих процессов по документу. Кнопка доступна только для процессов, которые уже
                    были запущены

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
`