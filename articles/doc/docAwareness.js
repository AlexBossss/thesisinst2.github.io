const docAwareness = `
<div class="doc-card">
        <div class="article-menu doc-card_menu">
            <div data-tab-name="doc-awareness-initiator" class="menu_item active-item">Инициатор</div>
            <div data-tab-name="doc-awareness-awarener" class="menu_item">Ознакомляющийся</div>
        </div>
        <div class="article-content doc-awareness-initiator active-article-content">
            

                        <div class="article-title">
                        Сценарий работы инициатора
                    </div>
                    <div class="article-description">
                        Инициатор выбирает документ для ознакомления и составляет список
                        сотрудников, которые должны ознакомиться с этим документом.
                    </div>

                    <details>
                        <summary class='detail-title'>
                            Действия инициатора
                        </summary>
                        <div class="detail-content">
                        <ul>
                            <li><img src="img/awareness.PNG" alt=""> - запускает процесс ознакомления</li>
                            <li><img src="img/changePeople.PNG" alt=""> - позволяет добавить новых участников ознакомления, удалить ненужных</li>
                            <li><img src="img/cancel.PNG" alt=""> - отменяет процесс ознакомления</li>
                        </ul>
                        </div>
                    </details>

                    <details>
                        <summary class='detail-title'>
                            Запуск процесса
                        </summary>
                        <div class="detail-content">
                            <img src="img/startAwareness.PNG" style="height:400px">
                            <ul>
                                <li>Выберите пользователь для ознакомления,чтобы добавить несколько участников нажмите <img src="img/plus.PNG" alt=""> или <b> Добавить участника</b></li>
                                <li> При необходимости установите дату В поле <b> Завершить к</b> </li>
                                <li> Нажмите <b>Ок</b> </li>
                            </ul>
                        </div>
                    </details>
        </div>
        <div class="article-content doc-awareness-awarener">
                        <div class="article-title">
                        Сценарий работы ознакомляющегося
                    </div>
                    <div class="article-description">
                        Ознакомляющиеся получают документ, изучают его и отмечают завершение
                        ознакомления
                    </div>

                    <details>
                        <summary class='detail-title'>
                            Где найти карточку
                        </summary>
                        <div class="detail-content">
                        Карточки, направленные вам на ознакомление, попадают в <a href="">папку</a> действий <b>"Документы"</b> - <b>"Ознакомление"</b>. Рядом 
                        с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, то счетчик 
                        будет выделен цветом и жирным шрифтом. <br> 
                        После ознакомления, вы можете увидеть ее в папке поиска <b>"После ознакомления"</b>.
                        </div>
                    </details>

                    <details>
                        <summary class='detail-title'>
                            Действия ознакомляющегося
                        </summary>
                        <div class="detail-content">
                        <ul>
                            <li><img src="img/finishAwareness.PNG" alt=""> - отметить завершение ознакомления</li>
                            <li><img src="img/changePeople.PNG" alt=""> - вы можете  переназначить себя на другого сотрудника</li>              
                        </ul>
                        </div>
                    </details>
        </div>
    </div>
`;