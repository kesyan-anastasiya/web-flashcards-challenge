'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const questionsData = [
      {
        description: 'Как написать слово «мышеловка» пятью буквами?',
        category_id: 1,
        answer: 'Кошка',
        img: 'https://img10.joyreactor.cc/pics/post/%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-%D0%BC%D1%83%D0%B4%D1%80%D0%BE%D1%81%D1%82%D1%8C-%D0%BC%D1%8B%D1%88%D1%8C-%D0%BC%D1%8B%D1%88%D0%B5%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0-769186.gif',
      },
      {
        description: 'Как человек может оставаться бодрым, если он не спал 45 дней?',
        category_id: 1,
        answer: 'Он спит по ночам',
        img: 'https://n1s1.hsmedia.ru/73/f9/fd/73f9fd684ba97e5beb2dccd638e3803e/1200x1500_0xac120003_21167966601660577715.jpeg',
      },
      {
        description: 'Как написать число 11, используя три черточки?',
        category_id: 1,
        answer: 'XI',
        img: 'https://cs9.pikabu.ru/post_img/2017/01/16/6/1484557386146831615.jpg',
      },
      {
        description: 'Что только растет и никогда не уменьшается?',
        category_id: 1,
        answer: 'Возраст',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2gpFIROm1iwUn9iU1oIaTlQndOuQVLg5QPl_5W0Deg&s',
      },
      {
        description:'Что можно поддерживать, вообще не прикасаясь к нему?',
        category_id: 1,
        answer: 'Разговор',
        img: 'https://medialeaks.ru/wp-content/uploads/2021/09/screenshot-www.tiktok.com-2021-09-07-18-56-48-170-307x500.jpeg',
      },
      {
        description: 'Что становится только острее, чем больше вы его используете?',
        category_id: 1,
        answer: 'Ум',
        img: 'https://as.fishki.net/upload/post/2020/11/01/121035184/gallery/tn/994911841.jpg',
      },
      {
        description: 'Я легче, чем то, из чего сделан, и скрываюсь больше, чем показываюсь. Что я?',
        category_id: 1,
        answer: 'Айсберг',
        img: 'https://i.gifer.com/DeBf.gif',
      },
      {
        description: 'Из-за чего чаще всего опаздывают студенты Эльбруса?',
        category_id: 2,
        answer: 'Из-за лифта',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqPOP9bU5hkpMSevz9_3iYfJ0TiwtdW7xN5tXIinQXw&s',
      },
      {
        description: 'Какое самое лучшее пожелание на утреннем стендапе?',
        category_id: 2,
        answer: 'Счастья, здоровья и мужа богатого',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE1SGXUDKZG-o20TnkpXX1hi4tG_Wawne4jOwfD6Kog&s',
      },
      {
        description: 'Что возвращает UseEffect?',
        category_id: 2,
        answer: 'Ничего',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG-GvoXaoqC4D5_SpMHcQETKOpLgNgwPAPHw9ZYEEfg&s',
      },
      {
        description: 'Из-за отсутствия какой персоны в Эльбрусе не та "атмосфера"? (По словам Дани)',
        category_id: 2,
        answer: 'Катя',
        img:'https://sun9-77.userapi.com/impf/c631231/v631231586/3e369/tof-FHFDiGY.jpg?size=492x408&quality=96&sign=c34cd650b74b1d50d4ef4d3ecff7fa88&type=album',
      },
      {
        description: 'Рыбак, который раздаёт не лещей, а хорошее настроение?',
        category_id: 2,
        answer: 'Толя',
        img: 'https://memepedia.ru/wp-content/uploads/2017/05/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%B3%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-%D1%8F%D0%B7%D1%8C.jpg',
      },
      {
        description: 'Чьи тапки планирует отжать Настя?',
        category_id: 2,
        answer: 'Король гита',
        img: 'https://risovach.ru/upload/2015/05/mem/hitriy-getsbi_81495409_orig_.jpg',
      },
    ];

    const questions = questionsData.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
