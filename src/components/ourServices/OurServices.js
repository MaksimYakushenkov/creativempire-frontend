import React from 'react';

function OurServices(props) {
  const [isCreateWebSiteOpened, setIsCreateWebSiteOpened] = React.useState(false);
  const [isUXUIOpened, setIsUXUIOpened] = React.useState(false);
  const [isFixSitesOpened, setIsFixSitesOpened] = React.useState(false);
  const [isCreativeDesignOpened, setIsCreativeDesignOpened] = React.useState(false);
  const [isAdsBannersOpened, setIsAdsBannersOpened] = React.useState(false);
  const [isLogoAndBrandOpened, setIsLogoAndBrandOpened] = React.useState(false);
  
  function closeAllCollapses() {
    setIsCreateWebSiteOpened(false);
    setIsUXUIOpened(false);
    setIsFixSitesOpened(false);
    setIsCreativeDesignOpened(false);
    setIsAdsBannersOpened(false);
    setIsLogoAndBrandOpened(false);
  }

  function toggleCreateWebSiteOpened() {
    closeAllCollapses();
    setIsCreateWebSiteOpened(!isCreateWebSiteOpened);
  }
  function toggleUXUIOpened() {
    closeAllCollapses();
    setIsUXUIOpened(!isUXUIOpened);
  }
  function toggleFixSitesOpened() {
    closeAllCollapses();
    setIsFixSitesOpened(!isFixSitesOpened);
  }
  function toggleCreativeDesignOpened() {
    closeAllCollapses();
    setIsCreativeDesignOpened(!isCreativeDesignOpened);
  }
  function toggleAdsBannersOpened() {
    closeAllCollapses();
    setIsAdsBannersOpened(!isAdsBannersOpened);
  }
  function toggleLogoAndBrandOpened() {
    closeAllCollapses();
    setIsLogoAndBrandOpened(!isLogoAndBrandOpened);
  }

  return (
    <section className='ourServices'>
      <div className='ourServices__container'>
        <h3 className='section__title'>••• Наши услуги •••</h3>
        <h2 className='section__subtitle'>Широкий спектр услуг по дизайну</h2>
        <p className='section__paragraph'>Наша студия креативного дизайна отличается от других по-настоящему <b>индивидуальным</b> подходом и <b>лояльным</b> отношением к клиенту.</p>
      </div>
      <div className='ourServices__collapse'>
        <ul className='collapse__list'>
          <li className='collapse__li'>
            <div>
              <span>{isCreateWebSiteOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleCreateWebSiteOpened}>Создание сайтов (веб-разработка)</h2>
            </div>
            <div className={`collapse__text ${isCreateWebSiteOpened && 'collapse__text_visible'}`}>
              <p>Создание и разработка сайтов под ключ любой сложности: сайты-визитки, landing page, многостраничные сайты, корпоративные сайты, онлайн-магазины и форумы.</p>
            </div>
          </li>
          <li className='collapse__li'>
            <div>
              <span>{isUXUIOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleUXUIOpened}>Разработка UX/UI дизайна сайта</h2>
            </div>
            <div className={`collapse__text ${isUXUIOpened && 'collapse__text_visible'}`}>
              <p>Грамотно разработанный UX/UI дизайн сайта способен на многое: от увеличения трафика до повышения лояльности клиента и его конверсии.</p>
            </div>
          </li>
          <li className='collapse__li'>
            <div>
            <span>{isFixSitesOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleFixSitesOpened}>Доработка имеющегося сайта</h2>
            </div>
            <div className={`collapse__text ${isFixSitesOpened && 'collapse__text_visible'}`}>
              <p>Нужна мобильная версия сайта? Или нужно добавить кнопку/ссылку/статью или что-то еще на сайт? Только напишите — сделаем!</p>
            </div>
          </li>
          <li className='collapse__li'>
            <div>
              <span>{isCreativeDesignOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleCreativeDesignOpened}>Креативный дизайн</h2>
            </div>
            <div className={`collapse__text ${isCreativeDesignOpened && 'collapse__text_visible'}`}>
              <p>Нужна необычная, но красивая шапка для YouTube-канала? А может, геймерское превью для видео в TikTok или Rutube? Вы обратились по адресу, это мы делаем лучше всего! После сайтов, конечно.</p>
            </div>
          </li>
          <li className='collapse__li'>
            <div>
              <span>{isAdsBannersOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleAdsBannersOpened}>Рекламные баннеры</h2>
            </div>
            <div className={`collapse__text ${isAdsBannersOpened && 'collapse__text_visible'}`}>
              <p>Хотите запустить рекламную компанию, а привлекающей картинки нет под рукой? Не беда! Мы сделаем для вас самые продающие баннеры (рекламные креативы) для Яндекс.Директ, Google.Ads, VK Target и рекламы в соцсетях.</p>
            </div>
          </li>
          <li className='collapse__li'>
            <div>
              <span>{isLogoAndBrandOpened ? '-' : '+'}</span>
              <h2 className='collapce__header' onClick={toggleLogoAndBrandOpened}>Логотипы и брендирование</h2>
            </div>
            <div className={`collapse__text ${isLogoAndBrandOpened && 'collapse__text_visible'}`}>
              <p>Крутые, минималистичные, премиальные, — да абсолютно любые, — идеи и желания мы сможем воплотить в логотип и задать фирменный стиль вашему делу.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
);
}

export default OurServices;