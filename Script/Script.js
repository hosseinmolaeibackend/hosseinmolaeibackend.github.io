 // تمام سکشن‌ها را انتخاب می‌کنیم
 const sections = document.querySelectorAll('section');

 // وقتی صفحه اسکرول می‌شود، چک می‌کنیم کدام سکشن در دید است
 window.addEventListener('scroll', checkSections);

 function checkSections() {
   const triggerBottom = window.innerHeight * 0.8; // آستانه دید

   sections.forEach((sec) => {
     const rect = sec.getBoundingClientRect();
     if(rect.top < triggerBottom) {
       sec.classList.add('active');
     }
   });
 }

 // فراخوانی اولیه
 checkSections();