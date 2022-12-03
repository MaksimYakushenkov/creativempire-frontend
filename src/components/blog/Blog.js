import React from 'react';
import authorAvatar from '../../assets/images/team/authorAvatar.jpg';
import testPreview from '../../assets/images/shop/thumb2.jpg';

function Blog() {

  return (
    <section className='blog'>
      <div className='section__header wow fadeInUp delay-0-2s'>
        <h3 className='section__title first-color'>••• Лучший блог •••</h3>
        <h2 className='section__subtitle'>Свежие новости, акции и спецпредложения</h2>
      </div>
      <div className='blog__container wow fadeInUp delay-0-4s'>
        <div className='blog__item'>

          <div className='blog__preview-container'>
            <img className='blog__preview' src={testPreview} />
          </div>

          <div className='blog__description'>

            <p className='blog__date'>12 March 2022</p>
            <a href="ya.ru" className='blog__title'>Как быстро раскрутиться в веб-разработке?</a>

            <div className='blog__author'>

              <div>
                <img className='blog__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
              </div>

              <div className='blog__author-description'>
                <p>Автор:</p>
                <a href='ya.ru' className='blog__link'>Максим Якушенков</a>
              </div>

            </div>
          </div>
        </div>

        <div className='blog__item'>

          <div className='blog__preview-container'>
            <img className='blog__preview' src={testPreview} />
          </div>

          <div className='blog__description'>

            <p className='blog__date'>12 March 2022</p>
            <a href="ya.ru" className='blog__title'>Как быстро раскрутиться в веб-разработке?</a>

            <div className='blog__author'>

              <div>
                <img className='blog__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
              </div>

              <div className='blog__author-description'>
                <p>Автор:</p>
                <a href='ya.ru' className='blog__link'>Максим Якушенков</a>
              </div>

        </div>
</div>
        </div>

        <div className='blog__item'>

        <div className='blog__preview-container'>
          <img className='blog__preview' src={testPreview} />
        </div>

        <div className='blog__description'>

          <p className='blog__date'>12 March 2022</p>
          <a href="ya.ru" className='blog__title'>Как быстро раскрутиться в веб-разработке?</a>

          <div className='blog__author'>

            <div>
              <img className='blog__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
            </div>

            <div className='blog__author-description'>
              <p>Автор:</p>
              <a href='ya.ru' className='blog__link'>Максим Якушенков</a>
            </div>

          </div>
        </div>
        </div>

        <div className='blog__item'>

        <div className='blog__preview-container'>
          <img className='blog__preview' src={testPreview} />
        </div>

        <div className='blog__description'>

          <p className='blog__date'>12 March 2022</p>
          <a href="ya.ru" className='blog__title'>Как быстро раскрутиться в веб-разработке?</a>

          <div className='blog__author'>

            <div>
              <img className='blog__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
            </div>

            <div className='blog__author-description'>
              <p>Автор:</p>
              <a href='ya.ru' className='blog__link'>Максим Якушенков</a>
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;