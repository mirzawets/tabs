function method1() {
  // With index matching

  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.content');

  function switchActive(i) {
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabs[i].classList.add('active');

    contents.forEach((content) => content.classList.remove('active'));
    contents[i].classList.add('active');
  }

  tabs.forEach((tab, index) => tab.addEventListener('click', () => switchActive(index)));
}

method1();

function method2() {
  // With dataset attributes

  const tabs = document.getElementById('tabs');
  const contents = document.getElementById('contents');

  function switchActive(clickedTab) {
    // for (const tab of tabs.children) {
    //   tab.classList.remove('active');
    // }

    tabs.querySelector('.active').classList.remove('active');
    clickedTab.classList.add('active');

    contents.querySelector('.active').classList.remove('active');
    for (const content of contents.children) {
      if (content.dataset.index === clickedTab.dataset.index) {
        content.classList.add('active');
      }
    }
  }

  tabs.addEventListener('click', (event) => switchActive(event.target));
}

// method2();

function method3() {
  // With conversion to array

  const tabs = document.getElementById('tabs');
  const contents = document.getElementById('contents');

  function switchActive(clickedTab) {
    const tabsArr = Array.from(tabs.children);
    const contentsArr = [...contents.children];

    // Additional method to convert
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

  tabs.addEventListener('click', (event) => switchActive(event.target));
}

// method3();
