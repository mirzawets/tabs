function method1() {
  // С дата атрибутами

  const tabs = document.getElementById('tabs');
  const contents = document.querySelectorAll('.content');

  const switchActive = (tab) => {
    for (const tab of tabs.children) {
      tab.classList.remove('active');
    }

    tab.classList.add('active');

    for (const content of contents) {
      content.classList.remove('active');

      if (content.dataset.index === tab.dataset.index) {
        content.classList.add('active');
      }
    }
  };

  tabs.addEventListener('click', function (event) {
    switchActive(event.target);
  });
}

method1();

function method2() {
  // С помощью метода indexOf()

  const tabs = document.getElementById('tabs');
  const contents = document.querySelectorAll('.content');

  function switchActive(clickedTab) {
    const tabsArr = Array.from(tabs.children);
    const contentsArr = [...contents];

    // Дополнительный способ конвертирования
    // const contentsArr = Object.assign([], contents);

    tabsArr.forEach((tab) => tab.classList.remove('active'));

    clickedTab.classList.add('active');

    contentsArr.forEach((content) => {
      content.classList.remove('active');

      if (contentsArr.indexOf(content) === tabsArr.indexOf(clickedTab)) {
        content.classList.add('active');
      }
    });
  }

  tabs.addEventListener('click', function (event) {
    switchActive(event.target);
  });
}

method2();

function method3() {
  // Более короткий способ

  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.content');

  function switchActive(i) {
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabs[i].classList.add('active');

    contents.forEach((content) => content.classList.remove('active'));
    contents[i].classList.add('active');
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      switchActive(index);
    });
  });
}

method3();
