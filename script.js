const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');

// Toggle the mobile menu and close it after a navigation link is selected.
menuButton?.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
  });
});

// Keep the copyright year up to date automatically.
document.querySelector('#year').textContent = new Date().getFullYear();
