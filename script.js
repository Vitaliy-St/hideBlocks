const hide_block = document.querySelectorAll('.entry-content.col-sm-12.post-container');
const title = document.querySelector('.page-title');
let lg = hide_block.length;

for (i = 0; i < lg; i++) {
  if (title.innerText === 'Индивидуальные туры') {
    hide_block[i].style.display = 'none';
  }
}
