//*********************************************************************************
//【TODOを入力して追加ボタンをクリックしたときの関数】
//*********************************************************************************
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputTxt = document.querySelector('#add-txt').value;
  document.querySelector('#add-txt').value = '';

  //リストアイテムを生成
  const listItem = document.createElement('li');
  listItem.classList.add('list__item');

  //取得したテキストボックスの値を格納する
  listItem.innerText = inputTxt;

  //完了ボタンと削除ボタンを生成して「listItem」に追加
  createIncompleteBtn(listItem);

  //未完了のulブロックの中に、新しく入力して作ったリストアイテムを追加する
  document.querySelector('#incomplete-area__list').appendChild(listItem);
}

//*********************************************************************************
//【未完了リストから要素を削除する関数】
//*********************************************************************************
const deleteIncompleteList = (target) => {
  document.querySelector('#incomplete-area__list').removeChild(target);
}

//*********************************************************************************
//【未完了リストに要素を追加する関数】
//*********************************************************************************
const addIncompleteItem = (target) => {
  document.querySelector('#incomplete-area__list').appendChild(target);
}

//*********************************************************************************
//【完了リストから要素を削除する関数】
//*********************************************************************************
const deleteCompleteList = (target) => {
  document.querySelector('#complete-area__list').removeChild(target);
}

//*********************************************************************************
//【完了リストに要素を追加する関数】
//*********************************************************************************
const addCompleteItem = (target) => {
  document.querySelector('#complete-area__list').appendChild(target);
}

//*********************************************************************************
//【未完了リストのボタンを作る関数】
//*********************************************************************************
const createIncompleteBtn = (target) => {
  //完了ボタンを生成して追加
  const fixBtn = document.createElement('button');
  fixBtn.classList.add('fix-btn');
  fixBtn.innerText = '完了';
  target.appendChild(fixBtn);

  //完了ボタンにクリックイベントを設置
  fixBtn.addEventListener('click', () => {
    const completeItem = fixBtn.parentNode;

    //未完了のTODOリストのボタン(完了、削除)を一旦全て削除
    deleteIncompleteItemBtn(completeItem);

    //戻すボタンを生成して追加
    createCompleteItemBtn(completeItem);

    //未完了のTODOリストから削除
    deleteIncompleteList(completeItem);

    //完了したTODOリストに追加
    addCompleteItem(completeItem);
  })

  //削除ボタンを生成して追加
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerText = '削除';
  target.appendChild(deleteBtn);

  //削除ボタンにクリックイベントを設置
  deleteBtn.addEventListener('click', () => {
    deleteIncompleteList(deleteBtn.parentNode);
  })
}

//*********************************************************************************
//【完了リストのボタンを作る関数】
//*********************************************************************************
const createCompleteItemBtn = (target) => {
  const backBtn = document.createElement('button');
  backBtn.classList.add('dack-btn');
  backBtn.innerText = '戻す';

  backBtn.addEventListener('click', () => {
    addIncompleteItem(backBtn.parentNode);
    createIncompleteBtn(backBtn.parentNode);

    backBtn.remove();

    deleteCompleteList(backBtn.parentNode);
  })
  target.appendChild(backBtn);
}

//*********************************************************************************
//【未完了リストのボタンを削除する関数】
//*********************************************************************************
const deleteIncompleteItemBtn = (target) => {
  target.querySelector('.fix-btn').remove();
  target.querySelector('.delete-btn').remove();
}

//*********************************************************************************
//【完了リストのボタンを削除する関数】
//*********************************************************************************
const deleteCompleteItemBtn = (target) => {
  target.querySelector('.back-btn').remove();
}

//*********************************************************************************
//【TODOを入力して追加をクリックしたときのイベント】
//*********************************************************************************
document.querySelector('#add-btn').addEventListener('click', () => {
  onClickAdd();
})