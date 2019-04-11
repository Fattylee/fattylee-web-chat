const button = document.querySelector('.copy-code-sample');
const textarea = document.querySelector('.code-sample ');
button.addEventListener('click', () => {
  textarea.select();
  document.execCommand("copy");
  button.textContent = 'Copied!';
});

document.querySelector('textarea').addEventListener('blur', () => {
  button.textContent = 'Copy';
})