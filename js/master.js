$(document).ready(function(){

if ($('.mod').attr('data-page-name') == 'doctors') {
  $("#page").iziModal({
    title: ' اضافه طبيب ',
    subtitle: ' اضافه اطباء جدد ',
    headerColor: 'rgb(0,0,10,0.7)',
    background: 'rgb(30,50,70,0.8)',
    transitionOutOverlay: 'fadeOut',
    loop: false,
    radius: 3,
    borderBottom: true,
  });
}

if ($('.mod').attr('data-page-name') == 'clinics') {
  $("#page").iziModal({
    title: ' اضافه عيادة  ',
    subtitle: ' اضف عيادة جديده ',
    headerColor: 'rgb(0,0,10,0.7)',
    background: 'rgb(30,50,70,0.8)',
    transitionOutOverlay: 'fadeOut',
    background: '#34495e',
    loop: false,
    radius: 3,
    borderBottom: true,
  });
}


$(document).on('click', '.trigger', function (event) {
  event.preventDefault();

  if (this.dataset.modal == 'doctors') {

    $('.mod').iziModal('open');

  }
  if (this.dataset.modal == 'clinics') {

    $('.mod').iziModal('open');

  }
});





});
