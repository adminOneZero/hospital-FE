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

if ($('.mod').attr('data-page-name') == 'medicine_service') {
  $("#page").iziModal({
    title: ' الخدمات الطبيه ',
    subtitle: ' اضافه خدمه جديده ',
    headerColor: 'rgb(0,0,10,0.7)',
    background: 'rgb(30,50,70,0.8)',
    transitionOutOverlay: 'fadeOut',
    background: '#34495e',
    loop: false,
    radius: 3,
    borderBottom: true,
  });
}
if ($('.mod').attr('data-page-name') == 'rooms') {
  $("#page").iziModal({
    title: ' الغرف ',
    subtitle: ' تصنيف الغرف ',
    headerColor: 'rgb(0,0,10,0.7)',
    background: 'rgb(30,50,70,0.8)',
    transitionOutOverlay: 'fadeOut',
    background: '#34495e',
    loop: false,
    radius: 3,
    borderBottom: true,
  });
}

if ($('.mod').attr('data-page-name') == 'payment') {
  $("#page").iziModal({
    title: ' طرق الدفع ',
    subtitle: ' اضف طريقه دفع جديده ',
    headerColor: 'rgb(0,0,10,0.7)',
    background: 'rgb(30,50,70,0.8)',
    transitionOutOverlay: 'fadeOut',
    background: '#34495e',
    loop: false,
    radius: 3,
    borderBottom: true,
  });
}

if ($('.mod').attr('data-page-name') == 'users') {
  $("#page").iziModal({
    title: ' حسابات المستخدمين ',
    subtitle: ' اضف مستخدم جديد ',
    // fullscreen: true,
    openFullscreen: true,
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
  if (this.dataset.modal == 'medicine_service') {

    $('.mod').iziModal('open');

  }
  if (this.dataset.modal == 'payment') {

    $('.mod').iziModal('open');

  }
  if (this.dataset.modal == 'users') {

    $('.mod').iziModal('open');

  }

});

// tooltipster Object
$('.tips').tooltipster({
  animation: 'fade',
  delay: 200,
});



});
