const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = [
    'https://images.chinahighlights.com/allpicture/2022/01/71f3fb1c59094ed78844ba56_cut_750x401_264.webp',
    'https://images.chinahighlights.com/allpicture/2018/03/69a81807fa104be39bbaba01_cut_750x400_264.webp',
    'https://images.chinahighlights.com/allpicture/2014/08/f10dd64230c54f5db6fbb6cc_cut_750x400_264.webp',
    'https://images.chinahighlights.com/allpicture/2021/12/82b9d2ce14ee494d8e63fccf_cut_750x400_264.webp'
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

