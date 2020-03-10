const docResolution =`
<div class="doc-card">
    <div class="article-menu doc-card_menu">
        <div data-tab-name="doc-resolution-initiator" class="menu_item active-item">Инициатор</div>
        <div data-tab-name="doc-resolution-approver" class="menu_item">Утверждающий</div>
       
    </div>
    <div class="article-content doc-resolution-initiator active-article-content">
       
                            <div class="article-title">
                            Сценарий работы инициатора
                            </div>
                            <div class="article-description">
                                Инициатор начинает процесс резолюции для выбранного документа и
                                отправляет его утверждающему для наложения резолюции.
                            </div>

                            <details>
                            <summary class='detail-title'>
                                Действия инициатора
                            </summary>
                            <div class="detail-content">
                            <ul>
                                <li><img src="img/resolution.PNG" alt=""> - запускает процесс резолюции</li>
                                <li><img src="img/changePeople.PNG" alt=""> - позволяет добавить новых участников, изменить текщих</li>
                                <li><img src="img/cancel.PNG" alt=""> - отменяет процесс резолюции</li>
                            </ul>
                            </div>
                            </details>

                            <details>
                            <summary class='detail-title'>
                                Запуск процесса
                            </summary>
                            <div class="detail-content">
                                    <img src="img/resolutionStart.PNG" style="height: 500px;" alt=""><br>
                                    <ul>
                                        <li>Выберите пользователя на роль <b> утверждающего</b></li>
                                        <li>Нажмите <b >ОК</b></li>     
                                    </ul>
                            </div>
                            </details>

                            <details>
                            <summary class='detail-title'>
                            Завершенире резолюции
                            </summary>
                            <div class="detail-content">
                                    После того как утверждающий ставит резолюцию карточка возвращается инициатору. Найти ее можно в папке <b>"Канцелярия"</b> - <b>"Обработка резолюции"</b> Вы можете завершить ее выполнение, либо начать новый процесс или создаать задачу
                                    или документ на основании текущего
                            </div>
                            </details>
    </div>
    <div class="article-content doc-resolution-approver">
        
   
                    <div class="article-title">
                    Сценарий работы утверждающего
                </div>
                <div class="article-description">
                    Утверждающий ставит свою резолюцию на документ
                </div>

                <details>
                    <summary class='detail-title'>
                        Где найти карточку
                    </summary>
                    <div class="detail-content">
                    Карточки, направленные вам на резолюцию, попадают в <a href="">папку</a> действий <b>"Канцелярия"</b> - <b>"Резолюция"</b>. Рядом 
                    с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, то счетчик 
                    будет выделен цветом и жирным шрифтом. <br> 
                
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                        Действия утверждающего
                    </summary>
                    <div class="detail-content">
                    <ul>
                        <li><img src="img/finishResolution.PNG" alt=""> - отметить завершение ознакомления</li>
                        <li> <img src="img/transfer.PNG" alt="">- вы можете  переназначить себя на другого сотрудника (или нажав <img src="img/changePeople.PNG" alt="">)</li>              
                    </ul>
                    </div>
                </details>

                <details>
                    <summary class='detail-title'>
                    Наложение резолюции
                    </summary>
                    <div class="detail-content">
                        <img src="img/resolutionWindow.PNG" alt="">
                        <ul>
                            <li>Укажите текс резолюции или выберите необходимую
                                из <span class="link"> справочника</span> типовых резолюций</li>
                            <li>Либо вы можете выбрать определенное действие –
                                создать <b>документ </b> или <b>задачу </b> или запустить один из <b>процессов </b> (ознакомление,
                                регистрация или согласование). В случае, если на основании резолюции будет создана
                                карточка или запущен процесс, обработка резолюции не потребуется</li>
                            <li>При необходимости установите дату в поле <b> Срок исполнени</b></li>
                            <li>Нажмите <b> Ок</b></li>
                        </ul>
                        Также есть возможность наложения голосовой резолюции. Данная функция доступна в
                браузере Google Chrome. Для того чтобы воспользоваться голосовым способом
                наложения резолюции утверждающему потребуется микрофон и доступ к сети
                Интернет
                    </div>
                </details>
    </div>
</div>
`;