export default function changeColorRating() {
  const ratingAll = document.querySelectorAll('.filmCard__rating');
  ratingAll.forEach((elem, index) => {
    if (elem.textContent < 6) {
      ratingAll[index].style.color = '#ff0000';
    }
    if (elem.textContent >= 6 && elem.textContent < 7) {
      ratingAll[index].style.color = '#ff6b08';
    }
    if (elem.textContent >= 7) {
      ratingAll[index].style.color = '#40c821';
    }
  });
}
