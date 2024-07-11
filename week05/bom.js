const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    let chapterArray = getChapterList() || [];

    function displayList(item) {
      let li = document.createElement('li');
      let deleteButton = document.createElement('button');
      li.textContent = item;
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      li.append(deleteButton);
      list.append(li);

      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); // Use item instead of li.textContent
        input.focus();
      });
    }

    function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
    }

    function getChapterList() {
      return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
      chapterArray = chapterArray.filter(item => item !== chapter);
      setChapterList();
    }

    button.addEventListener('click', () => {
      if (input.value !== '') {
        const myItem = input.value;
        displayList(myItem);
        chapterArray.push(myItem);
        setChapterList();
        input.value = '';
        input.focus();
      }
    });

    chapterArray.forEach(chapter => {
      displayList(chapter);
    });