//Swipe
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // formulario
  function toggleAllOptions() {
    let allOptionsCheckbox = document.getElementById('allOptions');
    let otherCheckboxes = document.querySelectorAll('input[name^="option"]');
    
    otherCheckboxes.forEach(function(checkbox) {
        checkbox.checked = allOptionsCheckbox.checked;
    });
}
function submitForm() {
    let selectedOptions = [];
    let checkboxes = document.querySelectorAll('input[name^="option"]:checked');

    checkboxes.forEach(function(checkbox) {
        selectedOptions.push(checkbox.id);
    });

    if (selectedOptions.length === 0) {
        alert('Selecione pelo menos uma opção de entrega.');
    } else {
        alert('Opções selecionadas: ' + selectedOptions.join(', '));
        // Aqui você pode enviar os dados para o servidor ou realizar outras ações necessárias.
    }
}
function submitForm() {
    var selectedDeliveryOption = document.getElementById('deliveryOptions').value;
  
    alert('Selected delivery option: ' + selectedDeliveryOption);
  }