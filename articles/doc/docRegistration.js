const docRegistration =`
<div class="doc-card">
<div class="article-menu doc-card_menu">
    <div data-tab-name="doc-registration-initiator" class="menu_item active-item">Инициатор</div>
    <div data-tab-name="doc-registration-docworker" class="menu_item">Делопроизводитель</div>
   
</div>
<div class="article-content doc-registration-initiator active-article-content">
  
            <div class="article-title">
            Сценарий работы инициатора
            </div>
            <div class="article-description">
            Инициатор отправляет документ на регистрацию делопроизводителю,
            указывая при этом необходимую информацию
            </div>

            <details>
            <summary class='detail-title'>
                Действия инициатора
            </summary>
            <div class="detail-content">
            <ul>
                <li><img src="img/registration.PNG" alt=""> - запускает процесс регистрации</li>
                <li><img src="img/changePeople.PNG" alt=""> - позволяет добавить новых участников, изменить текщих</li>
                <li><img src="img/cancel.PNG" alt=""> - отменяет процесс регистрации</li>
            </ul>
            </div>
            </details>

            <details>
            <summary class='detail-title'>
                Запуск процесса
            </summary>
            <div class="detail-content">
                    <img src="img/registrationStrat.PNG" style="height: 550px;" alt=""><br>
                    <ul>
                        <li>Выберите пользователя на роль <b> секретаря</b></li>
                        <li> Заполнить форму регистрации. Обязательные поля помечены <b class='red'> *</b></li>
                        <li> Нажмите <b >ОК</b></li>
                        
                    </ul>
                
            </div>
            </details>

            <details>
            <summary class='detail-title'>
               Доработка
            </summary>
            <div class="detail-content">
                    В случае если делопроизводитель отправляет карточку на доработку инициатору, вы можете увидеть ее в в <a href="">папке</a> действий <b>"Документы"</b> - <b>"Доработка"</b>.<br>
                    Внесите необходимые изменения в документ и нажмите <img src="img/registrationGreen.PNG"> чтобы продолжить процесс
            </div>
            </details>
</div>
<div class="article-content doc-registration-docworker">
    
                        <div class="article-title">
                        Сценарий работы делопроизводителя
                        </div>
                        <div class="article-description">
                        Делопроизводитель регистрирует документ
                        </div>

                        <details>
                        <summary class='detail-title'>
                            Где найти карточку
                        </summary>
                        <div class="detail-content">
                        Карточки, направленные вам на регистрации, попадают в <a href="">папку</a> действий <b>"Канцелярия"</b> - <b>"Регистрация"</b>. Рядом 
                        с названием папки отображается число входящих в нее карточек. Если имеются новые уведомления, то счетчик 
                        будет выделен цветом и жирным шрифтом. <br> 
                        </div>
                        </details>

                        <details>
                        <summary class='detail-title'>
                            Действия делопроизводителя
                        </summary>
                        <div class="detail-content">
                        <ul>
                            <li><img src="img/finishRegistration.PNG" alt=""> - отметить завершение ознакомления</li>
                            <li><img src="img/changePeople.PNG" alt=""> - вы можете  переназначить себя на другого сотрудника</li>              
                            <li><img src="img/backToInitiator.PNG" alt=""> - вы можете  вернуть карточку иницатору на доработку</li>              
                        </ul>
                        </div>
                        </details>
</div>

</div>`;
