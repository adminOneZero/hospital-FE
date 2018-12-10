/********************resetSeting********************/

iziToast.settings({
    timeout: 60000,
    layout: 2,
    rtl: true,
    backgroundColor: 'rgb(233,51,53,0.8)',
    messageColor: '#fff',
    titleColor: '#fff',
    iconText: '☹',
    iconColor: '#fff',
    progressBarColor: '#fff',
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
});

/********************Login********************/
function login_v() {
    var noti = 0;
// Login Validation
      var username = $('.login form input[name=username]').val();
      var password = $('.login form input[name=password]').val();
      // check username
      if (username.length < 4) {
        noti = noti + 1;
        iziToast.show({
          title: ' خطأ ',
          message: ' عدد حروف اسم المستخدم يجب ان لا يقل عن 4 احرف انجليزيه '
        });
      }
      // check password
      if (password.length < 8) {
        noti       // Login Validation
= noti + 1;
        iziToast.show({
          title: ' خطأ ',
          message: ' كلمه المرور يجب ان لا تقل عن 8 احرف '
          });
      }
      if (noti > 0) {
        return false;
      }else {
        return true;
      }

}

/********************add********************/
