const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }

  // 2. 새로운 아이템(텍스트+삭제버튼) 생성
  const item = createItem(text);

  // 3. items 컨테이너에 새로 만든 아이템 추가
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});

  // 5. input 초기화
  input.value = '';
  // 사용자가 입력칸 다시 클릭하지 않고 바로 입력할 수 있도록 focus 줌
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'item_name');
  span.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item_delete');
  // i태그는 변동할 이유 없기때문에 innerHTML로 넣어줌
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item_divider');

  item.appendChild(span);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if(event.key === 'Enter'){
    onAdd();
  }
});