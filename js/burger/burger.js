export function toggleClass(element) {
  return function () {
    console.log(element);
    element.classList.toggle('is-hidden');
  };
}
