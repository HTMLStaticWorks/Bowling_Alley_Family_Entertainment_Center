document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlEl = document.documentElement;
  
  // Check local storage
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-bs-theme', savedTheme);
  
  themeToggleBtns.forEach(btn => {
      if(savedTheme === 'dark') btn.innerHTML = 'Light';
      else btn.innerHTML = 'Dark';
      
      btn.addEventListener('click', () => {
          const currentTheme = htmlEl.getAttribute('data-bs-theme');
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          htmlEl.setAttribute('data-bs-theme', newTheme);
          localStorage.setItem('theme', newTheme);
          
          themeToggleBtns.forEach(b => {
              b.innerHTML = newTheme === 'dark' ? 'Light' : 'Dark';
          });
      });
  });

  // RTL Toggle
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const savedDir = localStorage.getItem('dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);
  
  rtlToggleBtns.forEach(btn => {
      btn.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
      
      btn.addEventListener('click', () => {
          const currentDir = htmlEl.getAttribute('dir');
          const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
          htmlEl.setAttribute('dir', newDir);
          localStorage.setItem('dir', newDir);
          
          rtlToggleBtns.forEach(b => {
              b.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
          });
      });
  });

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if(backToTop) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              backToTop.classList.add('show');
          } else {
              backToTop.classList.remove('show');
          }
      });
      
      backToTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  // Active Menu Highlight
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentLocation) {
          link.classList.add('active');
      }
  });
});
