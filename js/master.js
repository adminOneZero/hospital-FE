$("#clinics").iziModal({
  title: ' جهه جديده ',
  subtitle: ' اضف جهه جديده او عياده جديده للنظام ',
  transitionOutOverlay: 'fadeOut',
  background: '#34495e',
  loop: false,
  radius: 3,
  borderBottom: true,
});
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#clinics').iziModal('open');
});
