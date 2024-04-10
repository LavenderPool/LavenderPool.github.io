function changeStatus() {
   let status = document.getElementById('status');
   let statusButton = document.getElementById('status-button');
   if (status.getAttribute('contenteditable') == 'false') {
      status.setAttribute('contenteditable', true);
      statusButton.innerHTML = `<img src="img/pen.svg" alt=""> Сохранить`
      statusButton.style.borderRadius = '20px';
   } else {
      statusButton.innerHTML = `<img src="img/pen.svg">`
      status.setAttribute('contenteditable', false);
      statusButton.style.borderRadius = '50%';
   }
}

const linkElements = document.querySelectorAll('[data-link]');
const chatElements = document.querySelectorAll('[data-chat]');  
linkElements.forEach(linkElement => {
linkElement.addEventListener('click', () => {
   const linkValue = linkElement.getAttribute('data-link');
   
   chatElements.forEach(chatElement => {
      chatElement.style.display = 'none';
   });
   
   const chatToShow = document.querySelector(`[data-chat="${linkValue}"]`);
   if (chatToShow) {
      chatToShow.style.display = 'block';
   }

   linkElements.forEach(element => {
      element.classList.remove('active');
   });
   
   linkElement.classList.add('active');
});
});