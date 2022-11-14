$(document).ready(function () {


    $('.head1-item-navbar-2').click(function () {
        if ($('.body1-item-navbar-2').css('display') == 'none') {
            $('.body1-item-navbar-2').slideDown();
            $('.anggle1-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(-45deg)'
            });
            $('.anggle1-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(45deg) '
            });


            if ($('.btn-hazf1').css('display') == 'block') {
                $('.btn-hazf1').css('display', 'none');
                $('.left1-head-item-navbar-2').css('display', 'block');

            }
        } else {

            $('.body1-item-navbar-2').slideUp();
            $('.anggle1-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(45deg)'
            });
            $('.anggle1-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(-45deg)'
            });


            if ($('.left1-head-item-navbar-2').css('display') == 'block') {
                $('.left1-head-item-navbar-2').css('display', 'none');
                $('.btn-hazf1').css('display', 'block');
            }
        }


    });
    $('.head2-item-navbar-2').click(function () {
        if ($('.body2-item-navbar-2').css('display') == 'none') {
            $('.body2-item-navbar-2').slideDown();
            $('.anggle2-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(-45deg)'
            });
            $('.anggle2-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(45deg) '
            });

            if ($('.btn-hazf2').css('display') == 'block') {
                $('.btn-hazf2').css('display', 'none');
                $('.left2-head-item-navbar-2').css('display', 'block');
            }
        } else {
            $('.body2-item-navbar-2').slideUp();
            $('.anggle2-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(45deg)'
            });
            $('.anggle2-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(-45deg)'
            });

            if ($('.left2-head-item-navbar-2').css('display') == 'block') {
                $('.left2-head-item-navbar-2').css('display', 'none');
                console.log($('.left2-head-item-navbar-2').css('display'));
                $('.btn-hazf2').css('display', 'block');
            }
        }
    });
    $('.head3-item-navbar-2').click(function () {
        if ($('.body3-item-navbar-2').css('display') == 'none') {
            $('.body3-item-navbar-2').slideDown();
            $('.anggle3-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(-45deg)'
            });
            $('.anggle3-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(45deg)'
            });
            if ($('.btn-hazf3').css('display') == 'block') {
                $('.btn-hazf3').css('display', 'none');
                $('.left3-head-item-navbar-2').css('display', 'block');
            }


        } else {
            $('.body3-item-navbar-2').slideUp();
            $('.anggle3-navbar-2 div:nth-child(1)').css({
                'transform': 'rotate(45deg)'
            });
            $('.anggle3-navbar-2 div:nth-child(2)').css({
                'transform': 'rotate(-45deg)'
            });
            if ($('.left3-head-item-navbar-2').css('display') == 'block') {
                $('.left3-head-item-navbar-2').css('display', 'none');
                $('.btn-hazf3').css('display', 'block');
            }

        }
    });
    $('.left3-head-item-navbar-2').click(function () {
        $(this).css('display', 'none');
        $('.btn-hazf3').css('display', 'none');

        let checkbox_picture = document.querySelector('#checkbox1-item-navbar2');
        let checkbox_picture2 = document.querySelector('#checkbox2-item-navbar2');

        let toggle_checkbox = document.querySelector('.toggle-d-checkbox1');
        let btn_toggle_checkbox = document.querySelector('.btn1-d-checkbox');
        let btn_d_checkbox_bg_light = document.querySelector('.btn1-d-checkbox-bg-light');

        toggle_checkbox.style.backgroundColor = 'rgba(0,0,0,.24)';
        btn_toggle_checkbox.style.transform = 'translateX(0px)';
        btn_d_checkbox_bg_light.style.backgroundColor = 'rgba(168, 168, 168,0.2)';

        let toggle_checkbox2 = document.querySelector('.toggle-d-checkbox2');
        let btn_toggle_checkbox2 = document.querySelector('.btn2-d-checkbox');
        let btn_d_checkbox_bg_light2 = document.querySelector('.btn2-d-checkbox-bg-light');

        toggle_checkbox2.style.backgroundColor = 'rgba(0,0,0,.24)';
        btn_toggle_checkbox2.style.transform = 'translateX(0px)';
        btn_d_checkbox_bg_light2.style.backgroundColor = 'rgba(168, 168, 168,0.2)';

    });


    $('.body-taiinmahal label').click(function () {
        let checkbox_taiinmahal = document.querySelectorAll('.checkbox-taiinmahal');
        let btn_taiid = document.querySelector('.taiid-taiinmahal');
        let hazf_hame = document.querySelector('.hazf-hame');

        for (let i = 0; i < checkbox_taiinmahal.length; i++) {
            if (checkbox_taiinmahal[i].checked == true) {
                hazf_hame.style.display = 'inline';
                btn_taiid.style.backgroundColor = '#a62626';
                btn_taiid.style.color = '#fff';
                btn_taiid.style.cursor = 'pointer';
                break;
            } else {
                hazf_hame.style.display = 'none';
                btn_taiid.style.backgroundColor = '#f5f5f5';
                btn_taiid.style.color = 'rgba(0, 0, 0, 0.32)';
                btn_taiid.style.cursor = 'no-drop';
                $('.p-entekhab-mahal').css({
                    'display': 'inherit',
                    'margin': '5px 0 0 0 '
                });

            }

        }

    });
    $('.taiid-taiinmahal').click(function () {

        var checkbox_taiinmahal = document.querySelectorAll('.checkbox-taiinmahal');
        var head_location = document.querySelectorAll('.head-matn-location');

        let bg_dark = document.querySelector('.bg-dark');
        let taiin = document.querySelector('.taiinmahal');
        bg_dark.style.zIndex = '-10';
        bg_dark.style.opacity = '0';
        taiin.style.zIndex = '-10';
        taiin.style.opacity = '0';

        for (let i = 0; i < checkbox_taiinmahal.length; i++) {
            if (checkbox_taiinmahal[i].checked == true) {

                $('.left1-head-item-navbar-2').css('display', 'inline');

                $('.start-item-selected').after("<div class='item-selected'><p>" + head_location[i].innerHTML + "</p><input type='checkbox' checked></div>");
            } else {
                if (head_location[i].innerHTML == 'آبشار') $('.item-selected').remove();
            }

        }
    });
    $('.body-taiinmahal label').click(function () {

        $('.sarbarg-mahal').css('display', 'flex');
        var checkbox_taiinmahal = document.querySelectorAll('.checkbox-taiinmahal');
        var head_location = document.querySelectorAll('.head-matn-location');

        for (let i = 0; i < checkbox_taiinmahal.length; i++) {

            if (checkbox_taiinmahal[i].checked == true) {
                $('.p-entekhab-mahal').css('display', 'none');
                $('.start-sarbarg-mahal').after("<div class='item-sarbarg-mahal'><p>" + head_location[i].innerHTML + "</p><i class='material-icons'>close</i></div>");
            } else {
                if (head_location[i].innerHTML == '') $('.item-sarbarg-mahal').remove();
            }
        }
    });

    $('.hazf-hame').click(function () {
        let checkbox_taiinmahal = document.querySelectorAll('.checkbox-taiinmahal');
        let btn_taiid = document.querySelector('.taiid-taiinmahal');
        let hazf_hame = document.querySelector('.hazf-hame');
        for (let i = 0; i < checkbox_taiinmahal.length; i++) {
            checkbox_taiinmahal[i].checked = false;
            hazf_hame.style.display = 'none';
            btn_taiid.style.backgroundColor = '#f5f5f5';
            btn_taiid.style.color = 'rgba(0, 0, 0, 0.32)';
            btn_taiid.style.cursor = 'no-drop';
        }
        $('.p-entekhab-mahal').css({
            'display': 'inherit',
            'margin': '30px 0 20px 0'
        });

        $('.item-sarbarg-mahal').remove();
        $('.p-entekhab-mahal').css('display', 'inherit');
        $('.sarbarg-mahal').css('display', 'none');


        $('.taiid-taiinmahal').trigger('click');

        $('.left1-head-item-navbar-2').css('display', 'none');

    });


    $('.li-amlak').hover(function () {
        $('.main-amlak').css('display', 'flex');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-vasayel-naghlie').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'flex');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-kala-digital').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'flex');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-khane-ashpazkhane').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'flex');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-khadamat').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'flex');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-vasayel-shakhsi').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'flex');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-sargarmi').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'flex');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-ejtemaii').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'flex');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-tajhizat').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'flex');
        $('.main-estekhdam').css('display', 'none');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', 'rgba(0,0,0,.04)');
        $('.li-estekhdam').css('background-color', '#fff');
    });
    $('.li-estekhdam').hover(function () {
        $('.main-amlak').css('display', 'none');
        $('.main-vasayel-naghlie').css('display', 'none');
        $('.main-kala-digital').css('display', 'none');
        $('.main-khane-ashpazkhane').css('display', 'none');
        $('.main-khadamat').css('display', 'none');
        $('.main-vasayel-shakhsi').css('display', 'none');
        $('.main-sargarmi').css('display', 'none');
        $('.main-ejtemaii').css('display', 'none');
        $('.main-tajhizat').css('display', 'none');
        $('.main-estekhdam').css('display', 'flex');
        $('.li-amlak').css('background-color', '#fff');
        $('.li-vasayel-naghlie').css('background-color', '#fff');
        $('.li-kala-digital').css('background-color', '#fff');
        $('.li-khane-ashpazkhane').css('background-color', '#fff');
        $('.li-khadamat').css('background-color', '#fff');
        $('.li-vasayel-shakhsi').css('background-color', '#fff');
        $('.li-sargarmi').css('background-color', '#fff');
        $('.li-ejtemaii').css('background-color', '#fff');
        $('.li-tajhizat').css('background-color', '#fff');
        $('.li-estekhdam').css('background-color', 'rgba(0,0,0,.04)');
    });


    $('.enseraf-taiinmahal').click(function () {
        $('.hazf-hame').trigger('click');
    });
    $('.left1-head-item-navbar-2').click(function () {
        $('.hazf-hame').trigger('click');
        $(this).css('display', 'none');
    });



    $('.azarbaiijan-sharghi').click(function () {
        $('.child-azarbaiijan-sharghi').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.azarbaiijan-gharbi').click(function () {
        $('.child-azarbaiijan-gharbi').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.ardabil').click(function () {
        $('.child-ardabil').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.esfehan').click(function () {
        $('.child-esfehan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.alborz').click(function () {
        $('.child-alborz').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.ilam').click(function () {
        $('.child-ilam').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.boshehr').click(function () {
        $('.child-boshehr').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.tehran').click(function () {
        $('.child-tehran').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.charmahalbakhtiari').click(function () {
        $('.child-charmahalbakhtiari').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.khorasan-jonobi').click(function () {
        $('.child-khorasan-jonobi').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.khorasan-razavi').click(function () {
        $('.child-khorasan-razavi').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.khorasan-shomali').click(function () {
        $('.child-khorasan-shomali').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.khozestan').click(function () {
        $('.child-khozestan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.zanjan').click(function () {
        $('.child-zanjan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.semnan').click(function () {
        $('.child-semnan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.sistan-balochestan').click(function () {
        $('.child-sistan-balochestan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.fars').click(function () {
        $('.child-fars').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.qazvin').click(function () {
        $('.child-qazvin').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.qhom').click(function () {
        $('.child-qhom').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.kordestan').click(function () {
        $('.child-kordestan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.kerman').click(function () {
        $('.child-kerman').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.kermanshah').click(function () {
        $('.child-kermanshah').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.kohgiloye').click(function () {
        $('.child-kohgiloye').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.golestan').click(function () {
        $('.child-golestan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.gilan').click(function () {
        $('.child-gilan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.lorestan').click(function () {
        $('.child-lorestan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.mazandaran').click(function () {
        $('.child-mazandaran').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.markazi').click(function () {
        $('.child-markazi').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.hormozgan').click(function () {
        $('.child-hormozgan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.hamedan').click(function () {
        $('.child-hamedan').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });
    $('.yazd').click(function () {
        $('.child-yazd').css('display', 'inherit');
        $('.item-pedar-taiinmahal').css('display', 'none');
    });

    $('.hame-shahr-ha').click(function () {
        $('.item-pedar-taiinmahal').css('display', 'flex');
        $('.child-item-entekhabshahr').css('display', 'none');
    });

    $('.child-item-entekhabshahr label').click(function () {
        let checkboxEntekhabshahr = document.querySelectorAll('.checkbox-entekhabshahr');
        let btn_taiid = document.querySelector('.taiid-entekhabshahr');
        let headMatnLocation = document.querySelectorAll('.head-matn-location-shahr');

        for (let i = 0; i < checkboxEntekhabshahr.length; i++) {

            if (checkboxEntekhabshahr[i].checked == true) {
                $('.start-sarbarg-mahal').after("<div class='item-sarbarg-mahal'><p>" + headMatnLocation[i].innerHTML + "</p><i class='material-icons'>close</i></div>");
                $('.hazf-hame-shahr').css('display', 'inherit');
                btn_taiid.style.backgroundColor = 'rgb(166, 38, 38)';
                btn_taiid.style.color = 'rgb(255, 255, 255)';
                btn_taiid.style.cursor = 'pointer';
            } else {

                if (headMatnLocation[i].innerHTML == '') $('.item-sarbarg-mahal').remove();
            }

        }

    });

    $('.child-item-entekhabshahr').click(function () {
        let checkboxEntekhabshahr = document.querySelectorAll('.checkbox-entekhabshahr');
        let btn_taiid = document.querySelector('.taiid-entekhabshahr');
        let hazf_hame = document.querySelector('.hazf-hame-shahr');
        for (let i = 0; i < checkboxEntekhabshahr.length; i++) {
            if (checkboxEntekhabshahr[i].checked == true) {
                hazf_hame.style.display = 'inline';
                btn_taiid.style.backgroundColor = '#a62626';
                btn_taiid.style.color = '#fff';
                btn_taiid.style.cursor = 'pointer';
                break;
            } else {
                hazf_hame.style.display = 'none';
                btn_taiid.style.backgroundColor = '#f5f5f5';
                btn_taiid.style.color = 'rgba(0, 0, 0, 0.32)';
                btn_taiid.style.cursor = 'no-drop';
            }
        }
    });


    $('.hazf-hame-shahr').click(function () {
        let checkboxEntekhabshahr = document.querySelectorAll('.checkbox-entekhabshahr');
        let btn_taiid = document.querySelector('.taiid-entekhabshahr');
        let hazf_hame = document.querySelector('.hazf-hame-shahr');
        for (let i = 0; i < checkboxEntekhabshahr.length; i++) {
            checkboxEntekhabshahr[i].checked = false;
            hazf_hame.style.display = 'none';
            btn_taiid.style.backgroundColor = '#f5f5f5';
            btn_taiid.style.color = 'rgba(0, 0, 0, 0.32)';
            btn_taiid.style.cursor = 'no-drop';
        }
        $('.item-sarbarg-mahal').remove();
    });
    $('.enseraf-entekhabshahr').click(function () {
        $('.hazf-hame-shahr').trigger("click");
    });

    $('.taiid-entekhabshahr').click(function () {
        let tedad_shahr = document.querySelector('.p-tedad-shahr');
        let kalame_shahr = document.querySelector('#tehran-nav');
        let tedad_shahr2 = document.querySelector('.p-tedad-shahr2');
        let kalame_shahr2 = document.querySelector('#tehran-nav2');

        let checkboxEntekhabshahr = document.querySelectorAll('.checkbox-entekhabshahr');
        let headMatnLocation = document.querySelectorAll('.head-matn-location-shahr');
        var number = 0;

        for (let i = 0; i < checkboxEntekhabshahr.length; i++) {

            if (checkboxEntekhabshahr[i].checked == true) {
                number++;

                if (number <= 1) {
                    kalame_shahr.innerHTML = headMatnLocation[i].innerHTML;
                    kalame_shahr2.innerHTML = headMatnLocation[i].innerHTML;
                    tedad_shahr.innerHTML = number;
                    tedad_shahr.style.display = 'none';
                    tedad_shahr2.style.display = 'none';
                } else {
                    tedad_shahr.innerHTML = number;
                    kalame_shahr.innerHTML = 'شهر';
                    tedad_shahr2.innerHTML = number;
                    kalame_shahr2.innerHTML = 'شهر';
                    tedad_shahr.style.display = 'inline';
                    tedad_shahr2.style.display = 'inline';
                }
            } else {

            }


        }

        $('#tehran-nav p').css('display', 'inline');

    });
    var matn_head_dasteha = document.querySelector('.matn-head-dasteha');
    $('.item-dasteha-amlak').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-amlak').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'املاک';
    });
    $('.item-dasteha-vasayelnaghlie').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-vasayelnaghlie').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'وسایل نقلیه';
    });
    $('.item-dasteha-kaladigital').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-kaladigital').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'کالای دیجیتال';
    });
    $('.item-dasteha-khane-ashpazkhane').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-khane-ashpazkhane').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
    });
    $('.item-dasteha-khadamat').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-khadamat').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'خدمات';
    });
    $('.item-dasteha-vasayel-shakhsi').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-vasayel-shakhsi').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'وسایل شخصی';
    });
    $('.item-dasteha-sargarmi').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-sargarmi').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
    });
    $('.item-dasteha-ejtemaii').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-ejtemaii').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'اجتماعی';
    });
    $('.item-dasteha-sanati').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-sanati').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'تجهیزات و صنعتی';
    });
    $('.item-dasteha-estekhdam').click(function () {
        $('.item-dasteha-mobile').css('display', 'none');
        $('.child-dasteha-estekhdam').css('display', 'inline');
        $('.i-head-dasteha').addClass('fas fa-arrow-right');
        matn_head_dasteha.innerHTML = 'استخدام و کاریابی';
    });

    $('.d-masir-dasteha').click(function () {
        if (matn_head_dasteha.innerHTML == 'املاک' || matn_head_dasteha.innerHTML == 'وسایل نقلیه' || matn_head_dasteha.innerHTML == 'کالای دیجیتال' ||
            matn_head_dasteha.innerHTML == 'خانه و آشپزخانه' || matn_head_dasteha.innerHTML == 'خدمات' || matn_head_dasteha.innerHTML == 'وسایل شخصی' ||
            matn_head_dasteha.innerHTML == 'سرگرمی و فراغت' || matn_head_dasteha.innerHTML == 'اجتماعی' || matn_head_dasteha.innerHTML == 'تجهیزات و صنعتی' ||
            matn_head_dasteha.innerHTML == 'استخدام و کاریابی') {
            $('.item-dasteha-mobile').css('display', 'flex');
            $('.child-item-dasteha-mobile').css('display', 'none');
            $('.i-head-dasteha').removeClass('fas fa-arrow-right');
            matn_head_dasteha.innerHTML = 'انتخاب دسته‌بندی';
        } else {

            if (document.querySelector('.ul-1-amlak').style.display == 'inline') {
                $('.ul-1-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-2-amlak').style.display == 'inline') {
                $('.ul-2-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-3-amlak').style.display == 'inline') {
                $('.ul-3-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-4-amlak').style.display == 'inline') {
                $('.ul-4-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-5-amlak').style.display == 'inline') {
                $('.ul-5-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-6-amlak').style.display == 'inline') {
                $('.ul-6-amlak').css('display', 'none');
                $('.li-amlak').css('display', 'flex');
                $('.li-amlak').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'املاک';
            } else if (document.querySelector('.ul-khodro').style.display == 'inline') {
                $('.ul-khodro').css('display', 'none');
                $('.li-khodro').css('display', 'flex');
                $('.li-khodro').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'وسایل نقلیه';
            } else if (document.querySelector('.ul-1-kaladigital').style.display == 'inline') {
                $('.ul-1-kaladigital').css('display', 'none');
                $('.li-kaladigital').css('display', 'flex');
                $('.li-kaladigital').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'کالای دیجیتال';
            } else if (document.querySelector('.ul-2-kaladigital').style.display == 'inline') {
                $('.ul-2-kaladigital').css('display', 'none');
                $('.li-kaladigital').css('display', 'flex');
                $('.li-kaladigital').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'کالای دیجیتال';
            } else if (document.querySelector('.ul-3-kaladigital').style.display == 'inline') {
                $('.ul-3-kaladigital').css('display', 'none');
                $('.li-kaladigital').css('display', 'flex');
                $('.li-kaladigital').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'کالای دیجیتال';
            } else if (document.querySelector('.ul-1-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-1-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-2-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-2-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-3-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-3-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-4-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-4-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-5-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-5-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-6-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-6-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-7-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-7-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-8-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-8-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-9-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-9-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-10-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-10-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-11-khane-ashpazkhane').style.display == 'inline') {
                $('.ul-11-khane-ashpazkhane').css('display', 'none');
                $('.li-khane-ashpazkhane').css('display', 'flex');
                $('.li-khane-ashpazkhane').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خانه و آشپزخانه';
            } else if (document.querySelector('.ul-1-khadamat').style.display == 'inline') {
                $('.ul-1-khadamat').css('display', 'none');
                $('.li-khadamat').css('display', 'flex');
                $('.li-khadamat').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'خدمات';
            } else if (document.querySelector('.ul-1-vasayel-shakhsi').style.display == 'inline') {
                $('.ul-1-vasayel-shakhsi').css('display', 'none');
                $('.li-vasayel-shakhsi').css('display', 'flex');
                $('.li-vasayel-shakhsi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'وسایل شخصی';
            } else if (document.querySelector('.ul-2-vasayel-shakhsi').style.display == 'inline') {
                $('.ul-2-vasayel-shakhsi').css('display', 'none');
                $('.li-vasayel-shakhsi').css('display', 'flex');
                $('.li-vasayel-shakhsi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'وسایل شخصی';
            } else if (document.querySelector('.ul-3-vasayel-shakhsi').style.display == 'inline') {
                $('.ul-3-vasayel-shakhsi').css('display', 'none');
                $('.li-vasayel-shakhsi').css('display', 'flex');
                $('.li-vasayel-shakhsi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'وسایل شخصی';
            } else if (document.querySelector('.ul-1-sargarmi').style.display == 'inline') {
                $('.ul-1-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-2-sargarmi').style.display == 'inline') {
                $('.ul-2-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-3-sargarmi').style.display == 'inline') {
                $('.ul-3-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-4-sargarmi').style.display == 'inline') {
                $('.ul-4-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-5-sargarmi').style.display == 'inline') {
                $('.ul-5-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-6-sargarmi').style.display == 'inline') {
                $('.ul-6-sargarmi').css('display', 'none');
                $('.li-sargarmi').css('display', 'flex');
                $('.li-sargarmi').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'سرگرمی و فراغت';
            } else if (document.querySelector('.ul-1-ejtemaii').style.display == 'inline') {
                $('.ul-1-ejtemaii').css('display', 'none');
                $('.li-ejtemaii').css('display', 'flex');
                $('.li-ejtemaii').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'اجتماعی';
            } else if (document.querySelector('.ul-2-ejtemaii').style.display == 'inline') {
                $('.ul-2-ejtemaii').css('display', 'none');
                $('.li-ejtemaii').css('display', 'flex');
                $('.li-ejtemaii').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'اجتماعی';
            } else if (document.querySelector('.ul-3-ejtemaii').style.display == 'inline') {
                $('.ul-3-ejtemaii').css('display', 'none');
                $('.li-ejtemaii').css('display', 'flex');
                $('.li-ejtemaii').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'اجتماعی';
            } else if (document.querySelector('.ul-1-sanati').style.display == 'inline') {
                $('.ul-1-sanati').css('display', 'none');
                $('.li-sanati').css('display', 'flex');
                $('.li-sanati').css('background-color', '#fff');
                matn_head_dasteha.innerHTML = 'تجهیزات و صنعتی';
            }

        }
    });


    $('.li-1-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'فروش مسکونی';
    });
    $('.li-2-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'اجاره مسکونی';
    });
    $('.li-3-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'فروش اداری و تجاری';
    });
    $('.li-4-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-4-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'اجاره اداری و تجاری';
    });
    $('.li-5-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-5-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'اجاره کوتاه مدت';
    });
    $('.li-6-amlak').click(function () {
        $('.li-amlak,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-6-amlak').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'پروژه‌های ساخت و ساز';
    });


    $('.li-1-khodro').click(function () {
        $('.li-khodro,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-khodro').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'خودرو';
    });


    $('.li-1-kaladigital').click(function () {
        $('.li-kaladigital,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-kaladigital').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'موبایل و تبلت';
    });
    $('.li-2-kaladigital').click(function () {
        $('.li-kaladigital,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-kaladigital').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'رایانه';
    });
    $('.li-3-kaladigital').click(function () {
        $('.li-kaladigital,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-kaladigital').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'صوتی و تصویری';
    });

    $('.li-1-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'لوازم خانگی برقی';
    });
    $('.li-2-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'ظروف و لوازم آشپزخانه';
    });
    $('.li-3-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'خیاطی و بافتنی';
    });
    $('.li-4-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-4-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'مبلمان و صنایع چوب';
    });
    $('.li-5-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-5-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'نور و روشنایی';
    });
    $('.li-6-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-6-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'فرش، گلیم و موکت';
    });
    $('.li-7-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-7-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'تشک، روتختی و رختخواب';
    });
    $('.li-8-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-8-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'لوازم دکوری و تزئینی';
    });
    $('.li-9-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-9-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'تهویه، سرمایش و گرمایش';
    });
    $('.li-10-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-10-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'شست‌وشو و نظافت';
    });
    $('.li-11-khane-ashpazkhane').click(function () {
        $('.li-khane-ashpazkhane,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-11-khane-ashpazkhane').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'حمام و سرویس بهداشتی';
    });

    $('.li-1-khadamat').click(function () {
        $('.li-khadamat,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-khadamat').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'خدمات رایانه‌ای و موبایل';
    });
    $('.li-2-khadamat').click(function () {
        $('.li-khadamat,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-khadamat').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'آموزشی';
    });

    $('.li-1-vasayel-shakhsi').click(function () {
        $('.li-vasayel-shakhsi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-vasayel-shakhsi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'کیف، کفش و لباس';
    });
    $('.li-2-vasayel-shakhsi').click(function () {
        $('.li-vasayel-shakhsi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-vasayel-shakhsi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'زیورآلات و اکسسوری';
    });
    $('.li-3-vasayel-shakhsi').click(function () {
        $('.li-vasayel-shakhsi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-vasayel-shakhsi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'وسایل بچه و اسباب بازی';
    });

    $('.li-1-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'بلیط';
    });
    $('.li-2-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'کتاب و مجله';
    });
    $('.li-3-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'حیوانات';
    });
    $('.li-4-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-4-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'کلکسیون و سرگرمی';
    });
    $('.li-5-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-5-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'آلات موسیقی';
    });
    $('.li-6-sargarmi').click(function () {
        $('.li-sargarmi,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-6-sargarmi').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'ورزش و تناسب اندام';
    });

    $('.li-1-ejtemaii').click(function () {
        $('.li-ejtemaii,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-ejtemaii').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'رویداد';
    });
    $('.li-2-ejtemaii').click(function () {
        $('.li-ejtemaii,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-2-ejtemaii').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'داوطلبانه';
    });
    $('.li-3-ejtemaii').click(function () {
        $('.li-ejtemaii,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-3-ejtemaii').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'گم‌شده‌ها';
    });

    $('.li-1-sanati').click(function () {
        $('.li-sanati,.hame-child-item-dasteha-mobile').css('display', 'none');
        $('.ul-1-sanati').css('display', 'inline');
        matn_head_dasteha.innerHTML = 'تجهیزات کسب‌وکار';
    });

    $('.dasteha-mobile li,.dasteha-mobile ul').click(function () {
        $('.dasteha-mobile li').css('background-color', '#fff');
        $('.dasteha-mobile ul').css('background-color', '#fff');
    });

    var checkbox1_entekhabshahr = document.querySelector('#checkbox1-entekhabshahr');
    checkbox1_entekhabshahr.addEventListener("click", function () {
        if (checkbox1_entekhabshahr.checked == true) {
            $('.child-azarbaiijan-sharghi .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-azarbaiijan-sharghi .checkbox-entekhabshahr').prop('checked', false);
        }
    });
    var checkbox11_entekhabshahr = document.querySelector('#checkbox11-entekhabshahr');
    checkbox11_entekhabshahr.addEventListener("click", function () {
        if (checkbox11_entekhabshahr.checked == true) {
            $('.child-azarbaiijan-gharbi .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-azarbaiijan-gharbi .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox23_entekhabshahr = document.querySelector('#checkbox23-entekhabshahr');
    checkbox23_entekhabshahr.addEventListener("click", function () {
        if (checkbox23_entekhabshahr.checked == true) {
            $('.child-ardabil .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-ardabil .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox31_entekhabshahr = document.querySelector('#checkbox31-entekhabshahr');
    checkbox31_entekhabshahr.addEventListener("click", function () {
        if (checkbox31_entekhabshahr.checked == true) {
            $('.child-esfehan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-esfehan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox49_entekhabshahr = document.querySelector('#checkbox49-entekhabshahr');
    checkbox49_entekhabshahr.addEventListener("click", function () {
        if (checkbox49_entekhabshahr.checked == true) {
            $('.child-alborz .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-alborz .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox63_entekhabshahr = document.querySelector('#checkbox63-entekhabshahr');
    checkbox63_entekhabshahr.addEventListener("click", function () {
        if (checkbox63_entekhabshahr.checked == true) {
            $('.child-ilam .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-ilam .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox69_entekhabshahr = document.querySelector('#checkbox69-entekhabshahr');
    checkbox69_entekhabshahr.addEventListener("click", function () {
        if (checkbox69_entekhabshahr.checked == true) {
            $('.child-boshehr .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-boshehr .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox77_entekhabshahr = document.querySelector('#checkbox77-entekhabshahr');
    checkbox77_entekhabshahr.addEventListener("click", function () {
        if (checkbox77_entekhabshahr.checked == true) {
            $('.child-tehran .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-tehran .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox113_entekhabshahr = document.querySelector('#checkbox113-entekhabshahr');
    checkbox113_entekhabshahr.addEventListener("click", function () {
        if (checkbox113_entekhabshahr.checked == true) {
            $('.child-charmahalbakhtiari .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-charmahalbakhtiari .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox119_entekhabshahr = document.querySelector('#checkbox119-entekhabshahr');
    checkbox119_entekhabshahr.addEventListener("click", function () {
        if (checkbox119_entekhabshahr.checked == true) {
            $('.child-khorasan-jonobi .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-khorasan-jonobi .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox124_entekhabshahr = document.querySelector('#checkbox124-entekhabshahr');
    checkbox124_entekhabshahr.addEventListener("click", function () {
        if (checkbox124_entekhabshahr.checked == true) {
            $('.child-khorasan-razavi .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-khorasan-razavi .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox141_entekhabshahr = document.querySelector('#checkbox141-entekhabshahr');
    checkbox141_entekhabshahr.addEventListener("click", function () {
        if (checkbox141_entekhabshahr.checked == true) {
            $('.child-khorasan-shomali .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-khorasan-shomali .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox146_entekhabshahr = document.querySelector('#checkbox146-entekhabshahr');
    checkbox146_entekhabshahr.addEventListener("click", function () {
        if (checkbox146_entekhabshahr.checked == true) {
            $('.child-khozestan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-khozestan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox167_entekhabshahr = document.querySelector('#checkbox167-entekhabshahr');
    checkbox167_entekhabshahr.addEventListener("click", function () {
        if (checkbox167_entekhabshahr.checked == true) {
            $('.child-zanjan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-zanjan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox172_entekhabshahr = document.querySelector('#checkbox172-entekhabshahr');
    checkbox172_entekhabshahr.addEventListener("click", function () {
        if (checkbox172_entekhabshahr.checked == true) {
            $('.child-semnan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-semnan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox177_entekhabshahr = document.querySelector('#checkbox177-entekhabshahr');
    checkbox177_entekhabshahr.addEventListener("click", function () {
        if (checkbox177_entekhabshahr.checked == true) {
            $('.child-sistan-balochestan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-sistan-balochestan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox186_entekhabshahr = document.querySelector('#checkbox186-entekhabshahr');
    checkbox186_entekhabshahr.addEventListener("click", function () {
        if (checkbox186_entekhabshahr.checked == true) {
            $('.child-fars .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-fars .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox204_entekhabshahr = document.querySelector('#checkbox204-entekhabshahr');
    checkbox204_entekhabshahr.addEventListener("click", function () {
        if (checkbox204_entekhabshahr.checked == true) {
            $('.child-qazvin .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-qazvin .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox212_entekhabshahr = document.querySelector('#checkbox212-entekhabshahr');
    checkbox212_entekhabshahr.addEventListener("click", function () {
        if (checkbox212_entekhabshahr.checked == true) {
            $('.child-qhom .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-qhom .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox214_entekhabshahr = document.querySelector('#checkbox214-entekhabshahr');
    checkbox214_entekhabshahr.addEventListener("click", function () {
        if (checkbox214_entekhabshahr.checked == true) {
            $('.child-kordestan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-kordestan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox223_entekhabshahr = document.querySelector('#checkbox223-entekhabshahr');
    checkbox223_entekhabshahr.addEventListener("click", function () {
        if (checkbox223_entekhabshahr.checked == true) {
            $('.child-kerman .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-kerman .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox235_entekhabshahr = document.querySelector('#checkbox235-entekhabshahr');
    checkbox235_entekhabshahr.addEventListener("click", function () {
        if (checkbox235_entekhabshahr.checked == true) {
            $('.child-kermanshah .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-kermanshah .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox246_entekhabshahr = document.querySelector('#checkbox246-entekhabshahr');
    checkbox246_entekhabshahr.addEventListener("click", function () {
        if (checkbox246_entekhabshahr.checked == true) {
            $('.child-kohgiloye .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-kohgiloye .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox251_entekhabshahr = document.querySelector('#checkbox251-entekhabshahr');
    checkbox251_entekhabshahr.addEventListener("click", function () {
        if (checkbox251_entekhabshahr.checked == true) {
            $('.child-golestan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-golestan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox263_entekhabshahr = document.querySelector('#checkbox263-entekhabshahr');
    checkbox263_entekhabshahr.addEventListener("click", function () {
        if (checkbox263_entekhabshahr.checked == true) {
            $('.child-gilan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-gilan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox313_entekhabshahr = document.querySelector('#checkbox313-entekhabshahr');
    checkbox313_entekhabshahr.addEventListener("click", function () {
        if (checkbox313_entekhabshahr.checked == true) {
            $('.child-lorestan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-lorestan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox323_entekhabshahr = document.querySelector('#checkbox323-entekhabshahr');
    checkbox323_entekhabshahr.addEventListener("click", function () {
        if (checkbox323_entekhabshahr.checked == true) {
            $('.child-mazandaran .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-mazandaran .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox371_entekhabshahr = document.querySelector('#checkbox371-entekhabshahr');
    checkbox371_entekhabshahr.addEventListener("click", function () {
        if (checkbox371_entekhabshahr.checked == true) {
            $('.child-markazi .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-markazi .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox379_entekhabshahr = document.querySelector('#checkbox379-entekhabshahr');
    checkbox379_entekhabshahr.addEventListener("click", function () {
        if (checkbox379_entekhabshahr.checked == true) {
            $('.child-hormozgan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-hormozgan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox387_entekhabshahr = document.querySelector('#checkbox387-entekhabshahr');
    checkbox387_entekhabshahr.addEventListener("click", function () {
        if (checkbox387_entekhabshahr.checked == true) {
            $('.child-hamedan .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-hamedan .checkbox-entekhabshahr').prop('checked', false);

        }
    });
    var checkbox395_entekhabshahr = document.querySelector('#checkbox395-entekhabshahr');
    checkbox395_entekhabshahr.addEventListener("click", function () {
        if (checkbox395_entekhabshahr.checked == true) {
            $('.child-yazd .checkbox-entekhabshahr').prop('checked', true);
        } else {
            $('.child-yazd .checkbox-entekhabshahr').prop('checked', false);

        }
    });

});


function checkbox_just_picture1() {
    let checkbox_picture = document.querySelector('#checkbox1-item-navbar2-mobile');
    let checkbox_picture2 = document.querySelector('#checkbox2-item-navbar2-mobile');
    let toggle_checkbox = document.querySelector('.toggle-d-checkbox1-mobile');
    let btn_toggle_checkbox = document.querySelector('.btn1-d-checkbox-mobile');
    let btn_d_checkbox_bg_light = document.querySelector('.btn1-d-checkbox-bg-light-mobile');
    let hazf = document.querySelector('.left3-head-item-navbar-2-mobile');
    if (checkbox_picture.checked == true) {
        toggle_checkbox.style.backgroundColor = '#a62626';
        btn_toggle_checkbox.style.transform = 'translateX(-16px)';
        btn_d_checkbox_bg_light.style.backgroundColor = 'rgba(211, 104, 104, 0.2)';
        hazf.style.display = 'inline';
    } else {
        toggle_checkbox.style.backgroundColor = 'rgba(0,0,0,.24)';
        btn_toggle_checkbox.style.transform = 'translateX(0px)';
        btn_d_checkbox_bg_light.style.backgroundColor = 'rgba(168, 168, 168,0.2)';
        if (checkbox_picture2.checked == true) {
            hazf.style.display = 'none';
        }
    }
}

function checkbox_just_picture2() {
    let checkbox_picture = document.querySelector('#checkbox2-item-navbar2-mobile');
    let checkbox_picture2 = document.querySelector('#checkbox1-item-navbar2-mobile');
    let toggle_checkbox = document.querySelector('.toggle-d-checkbox2-mobile');
    let btn_toggle_checkbox = document.querySelector('.btn2-d-checkbox-mobile');
    let btn_d_checkbox_bg_light = document.querySelector('.btn2-d-checkbox-bg-light-mobile');
    let hazf = document.querySelector('.left3-head-item-navbar-2-mobile');
    if (checkbox_picture.checked == true) {
        toggle_checkbox.style.backgroundColor = '#a62626';
        btn_toggle_checkbox.style.transform = 'translateX(-16px)';
        btn_d_checkbox_bg_light.style.backgroundColor = 'rgba(211, 104, 104, 0.2)';
        hazf.style.display = 'inline';
    } else {
        toggle_checkbox.style.backgroundColor = 'rgba(0,0,0,.24)';
        btn_toggle_checkbox.style.transform = 'translateX(0px)';
        btn_d_checkbox_bg_light.style.backgroundColor = 'rgba(168, 168, 168,0.2)';
        if (checkbox_picture2.checked == true) {
            hazf.style.display = 'none';
        }
    }
}

function show_divarman() {
    document.querySelector('.divar-man').style.display = 'flex';
}

function show_worod() {
    let worod = document.querySelector('.worod');
    let bg_dark = document.querySelector('.bg-dark');
    let divar_man = document.querySelector('.divar-man');
    let p1_worod = document.querySelector('.p1-matn-worod');
    let p2_worod = document.querySelector('.p2-matn-worod');
    divar_man.style.display = 'none';
    worod.style.zIndex = '1000000000';
    worod.style.opacity = '1';
    bg_dark.style.zIndex = '100000000';
    bg_dark.style.opacity = '1';
    p1_worod.innerHTML = 'برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد';
    p2_worod.innerHTML = '';
}

function close_worod() {
    let worod = document.querySelector('.worod');
    let bg_dark = document.querySelector('.bg-dark');
    let nav = document.querySelector('.nav');
    worod.style.zIndex = '-10';
    worod.style.opacity = '0';
    bg_dark.style.zIndex = '-10';
    bg_dark.style.opacity = '0';
    /***********************************************************/
    let taiin = document.querySelector('.taiinmahal');
    taiin.style.zIndex = '-10';
    taiin.style.opacity = '0';
    let entekhabshahr = document.querySelector('.entekhabshahr');
    entekhabshahr.style.zIndex = '-10';
    entekhabshahr.style.opacity = '0';
    let dasteha_mobile = document.querySelector('.dasteha-mobile');
    dasteha_mobile.style.opacity = '0';
    dasteha_mobile.style.zIndex = '-1';
    dasteha_mobile.style.display = 'none';

    let filter_mobile = document.querySelector('.filter-mobile');
    filter_mobile.style.opacity = '0';
    filter_mobile.style.zIndex = '-1';
    filter_mobile.style.display = 'none';
}

function check_valid_phone_number() {
    let input_phone = document.querySelector('.input-phone-number').value;
    let err_input = document.querySelector('.err-input-phone');
    if (Number(input_phone) && input_phone.length == 10) {
        err_input.innerHTML = '';
    } else {
        err_input.innerHTML = '.لطفا یک شماره موبایل معتبر وارد نمایید';

    }
}

function show_worod2() {
    let worod = document.querySelector('.worod');
    let bg_dark = document.querySelector('.bg-dark');
    let divar_man = document.querySelector('.divar-man');
    let p1_worod = document.querySelector('.p1-matn-worod');
    let p2_worod = document.querySelector('.p2-matn-worod');
    divar_man.style.display = 'none';
    worod.style.zIndex = '100000000';
    worod.style.opacity = '1';
    bg_dark.style.zIndex = '10000000';
    bg_dark.style.opacity = '1';
    p1_worod.innerHTML = '.قبل از ثبت آگهی، لطفاً وارد حساب خود شوید';
    p2_worod.innerHTML = '.کد تأیید به این شماره پیامک می‌شود';
}

function show_bistarinJostojo() {
    let pishnahada = document.querySelector('.bishtarin-jostojo');
    let input_search = document.querySelector('.input-search');
    let bg_light = document.querySelector('.bg-light');
    let dasteha = document.querySelector('.dasteha');
    dasteha.style.display = 'none';

    pishnahada.style.zIndex = '100';
    pishnahada.style.opacity = '1';
    bg_light.style.zIndex = '100';
    bg_light.style.opacity = '1';
    input_search.style.backgroundColor = '#fff';
    input_search.style.boxShadow = ' 0 -4px 10px 2px rgba(0, 0, 0 ,0.05)';
}

function close_bistarinJostojo() {
    let pishnahada = document.querySelector('.bishtarin-jostojo');
    let input_search = document.querySelector('.input-search');
    let bg_light = document.querySelector('.bg-light');
    let dasteha = document.querySelector('.dasteha');
    let icon_btn_dasteha = document.querySelector('.icon-btn-dasteha');

    dasteha.style.display = 'none';

    dasteha.style.zIndex = '-10';
    dasteha.style.opacity = '0';
    pishnahada.style.zIndex = '-10';
    pishnahada.style.opacity = '0';
    bg_light.style.zIndex = '-10';
    bg_light.style.opacity = '0';
    input_search.style.backgroundColor = 'rgba(0,0,0,.04)';
    input_search.style.boxShadow = ' 0 -4px 10px 2px #fff';
    icon_btn_dasteha.style.transform = 'rotate(0deg) translate(0px)';

}

function show_taiinmahal() {
    let bg_dark = document.querySelector('.bg-dark');
    let taiin = document.querySelector('.taiinmahal');
    bg_dark.style.zIndex = '1000000000';
    bg_dark.style.opacity = '1';
    taiin.style.zIndex = '1000000001';
    taiin.style.opacity = '1';
}

function close_taiinmahal() {
    let bg_dark = document.querySelector('.bg-dark');
    let taiin = document.querySelector('.taiinmahal');
    bg_dark.style.zIndex = '-10';
    bg_dark.style.opacity = '0';
    taiin.style.zIndex = '-10';
    taiin.style.opacity = '0';
}

function show_entekhabshahr() {
    let bg_dark = document.querySelector('.bg-dark');
    let taiin = document.querySelector('.entekhabshahr');
    bg_dark.style.zIndex = '100000000';
    bg_dark.style.opacity = '1';
    taiin.style.zIndex = '1000000000';
    taiin.style.opacity = '1';
}

function close_entekhabshahr() {
    let bg_dark = document.querySelector('.bg-dark');
    let taiin = document.querySelector('.entekhabshahr');
    bg_dark.style.zIndex = '-10';
    bg_dark.style.opacity = '0';
    taiin.style.zIndex = '-10';
    taiin.style.opacity = '0';
}

function taiid_entekhabshahr() {
    let bg_dark = document.querySelector('.bg-dark');
    let taiin = document.querySelector('.entekhabshahr');
    bg_dark.style.zIndex = '-10';
    bg_dark.style.opacity = '0';
    taiin.style.zIndex = '-10';
    taiin.style.opacity = '0';
}

function to_right_khane_ashpazkhane() {
    let ashpazkhane = document.querySelector('.main-khane-ashpazkhane');
    document.querySelector('.div-btn-rigth-khane').style.display = 'none';
    document.querySelector('.div-btn-left-khane').style.display = 'flex';
    ashpazkhane.scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

function to_left_khane_ashpazkhane() {
    let ashpazkhane = document.querySelector('.main-khane-ashpazkhane');
    document.querySelector('.div-btn-rigth-khane').style.display = 'flex';
    document.querySelector('.div-btn-left-khane').style.display = 'none';
    ashpazkhane.scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function show_dasteha() {
    let bg_light = document.querySelector('.bg-light');
    let dasteha = document.querySelector('.dasteha');
    let icon_btn_dasteha = document.querySelector('.icon-btn-dasteha');
    if (dasteha.style.opacity == '1') {
        bg_light.style.zIndex = '-10';
        bg_light.style.opacity = '0';
        dasteha.style.zIndex = '-10';
        dasteha.style.opacity = '0';
        dasteha.style.display = 'none';
        icon_btn_dasteha.style.transform = 'rotate(0deg) translate(0px)';
    } else {
        bg_light.style.zIndex = '100';
        bg_light.style.opacity = '1';
        dasteha.style.zIndex = '100';
        dasteha.style.opacity = '1';
        dasteha.style.display = 'flex';
        icon_btn_dasteha.style.transform = 'rotate(180deg) translate(-2px,3px)';
    }
}

function show_min_price() {
    let min_price = document.querySelector('.d-main-min');
    let icon_min = document.querySelector('.i-min');
    if (min_price.style.display == 'flex') {
        min_price.style.display = 'none';
        icon_min.style.transform = 'rotate(0deg) translate(0px)';
        icon_min.style.color = 'rgba(0,0,0,.32)';
    } else {
        min_price.style.display = 'flex';
        icon_min.style.transform = 'rotate(180deg) translate(5px,1px)';
        icon_min.style.color = 'rgba(0,0,0,.56)';
    }
}

function show_max_price() {
    let max_price = document.querySelector('.d-main-max');
    let icon_max = document.querySelector('.i-max');
    if (max_price.style.display == 'flex') {
        max_price.style.display = 'none';
        icon_max.style.transform = 'rotate(0deg) translate(0px)';
        icon_max.style.color = 'rgba(0,0,0,.32)';
    } else {
        max_price.style.display = 'flex';
        icon_max.style.transform = 'rotate(180deg) translate(5px,1px)';
        icon_max.style.color = 'rgba(0,0,0,.56)';
    }
}

function show_min_price_mobile() {
    let min_price = document.querySelector('.d-main-min_mobile');
    let icon_min = document.querySelector('.i-min');
    if (min_price.style.display == 'flex') {
        min_price.style.display = 'none';
        icon_min.style.transform = 'rotate(0deg) translate(0px)';
        icon_min.style.color = 'rgba(0,0,0,.32)';
    } else {
        min_price.style.display = 'flex';
        icon_min.style.transform = 'rotate(180deg) translate(5px,1px)';
        icon_min.style.color = 'rgba(0,0,0,.56)';
    }
}

function show_max_price_mobile() {
    let max_price = document.querySelector('.d-main-max_mobile');
    let icon_max = document.querySelector('.i-max');
    if (max_price.style.display == 'flex') {
        max_price.style.display = 'none';
        icon_max.style.transform = 'rotate(0deg) translate(0px)';
        icon_max.style.color = 'rgba(0,0,0,.32)';
    } else {
        max_price.style.display = 'flex';
        icon_max.style.transform = 'rotate(180deg) translate(5px,1px)';
        icon_max.style.color = 'rgba(0,0,0,.56)';
    }
}

function price_delkhah() {
    let input_min = document.querySelector('.input-min');
    input_min.removeAttribute("disabled");
    input_min.setAttribute('placeholder', 'مقدار دلخواه');
    let min_price = document.querySelector('.d-main-min');
    let icon_min = document.querySelector('.i-min');
    min_price.style.display = 'none';
    icon_min.style.transform = 'rotate(0deg) translate(0px)';
    icon_min.style.color = 'rgba(0,0,0,.32)';
    input_min.focus();

}

function price_delkhah2() {
    let input_max = document.querySelector('.input-max');
    input_max.removeAttribute("disabled");
    input_max.setAttribute('placeholder', 'مقدار دلخواه');
    let max_price = document.querySelector('.d-main-max');
    let icon_max = document.querySelector('.i-max');
    max_price.style.display = 'none';
    icon_max.style.transform = 'rotate(0deg) translate(0px)';
    icon_max.style.color = 'rgba(0,0,0,.32)';
    input_max.focus();
}

function check_empty_value() {
    let input_search_mobile = document.querySelector('.input-search-mobile').value;
    let icon_input_search_mobile = document.querySelector('.icon-input-search-mobile');
    if (input_search_mobile != '') {
        icon_input_search_mobile.style.display = 'inline';
    } else {
        icon_input_search_mobile.style.display = 'none';
    }
}

function clear_input_search_mobile() {
    document.querySelector('.input-search-mobile').value = '';
    document.querySelector('.icon-input-search-mobile').style.display = 'none';
}

function close_seach_mobile() {
    document.querySelector('.search-mobile').style.display = 'none';
}

function show_seach_mobile() {
    document.querySelector('.search-mobile').style.display = 'inline';
    document.querySelector('.input-search-mobile').focus();
}

function show_dasteha_mobile() {
    let dasteha_mobile = document.querySelector('.dasteha-mobile');
    let bg_dark = document.querySelector('.bg-dark');
    dasteha_mobile.style.opacity = '1';
    dasteha_mobile.style.zIndex = '100000000000';
    dasteha_mobile.style.display = 'inline';
    bg_dark.style.opacity = '1';
    bg_dark.style.zIndex = '10000000';
}

function close_dasteha_mobile() {
    let dasteha_mobile = document.querySelector('.dasteha-mobile');
    let bg_dark = document.querySelector('.bg-dark');
    let filter_mobile = document.querySelector('.filter-mobile');
    if (filter_mobile.style.display == 'none') {
        bg_dark.style.opacity = '0';
        bg_dark.style.zIndex = '-1';
    }
    dasteha_mobile.style.opacity = '0';
    dasteha_mobile.style.zIndex = '-1';
    dasteha_mobile.style.display = 'none';
}

function show_filterha_mobile() {
    let filter_mobile = document.querySelector('.filter-mobile');
    let bg_dark = document.querySelector('.bg-dark');

    filter_mobile.style.opacity = '1';
    filter_mobile.style.zIndex = '1000000000';
    filter_mobile.style.display = 'inline';

    bg_dark.style.zIndex = '100000000';
    bg_dark.style.opacity = '1';
}

function close_filterha_mobile() {
    let filter_mobile = document.querySelector('.filter-mobile');
    filter_mobile.style.opacity = '0';
    filter_mobile.style.zIndex = '-1';
    filter_mobile.style.display = 'none';

    let bg_dark = document.querySelector('.bg-dark');
    bg_dark.style.zIndex = '-1';
    bg_dark.style.opacity = '0';
}

(function () {
    if (document.querySelector('.input-min').placeholder != 'مثلا ۷۰،۰۰۰،۰۰۰' && document.querySelector('.input-max').placeholder != 'مثلا ۷۰،۰۰۰،۰۰۰') {
        document.querySelector('.left2-head-item-navbar-2').style.display = 'none';
    } else {
        document.querySelector('.left2-head-item-navbar-2').style.display = 'inline';
    }
});

var li_nahaii_dasteha = document.querySelectorAll('.li-nahaii-dasteha');
for (let i = 0; i < li_nahaii_dasteha.length; i++) {
    li_nahaii_dasteha[i].addEventListener("click", function (event) {
        var target = event.target || event.srcElement;

        let div_entekhab_dasteha = document.querySelector('.div-entekhab-dasteha');
        let p_entekhab_dasteha = document.querySelector('.p-entekhab-dasteha');
        let i_entekhab_dasteha = document.querySelector('.i-entekhab-dasteha');

        p_entekhab_dasteha.innerHTML = target.innerText;
        div_entekhab_dasteha.classList.add('div-entekhab-dasteha2');
        div_entekhab_dasteha.classList.remove('div-entekhab-dasteha');
        i_entekhab_dasteha.classList.add('material-icons');
        i_entekhab_dasteha.classList.remove('fas');
        i_entekhab_dasteha.classList.remove('fa-list-ul');
        i_entekhab_dasteha.innerHTML = 'close';

        for (let j = 0; j < 10; j++) {
            document.querySelectorAll('.a-pishnahada-nav')[j].style.display = 'none';
        }


        let dasteha_mobile = document.querySelector('.dasteha-mobile');
        dasteha_mobile.style.opacity = '0';
        dasteha_mobile.style.zIndex = '-1';
        dasteha_mobile.style.display = 'none';
        let bg_dark = document.querySelector('.bg-dark');
        bg_dark.style.opacity = '0';
        bg_dark.style.zIndex = '-1';
    });
}

var i_entekhab_dasteha = document.querySelector('.i-entekhab-dasteha');

i_entekhab_dasteha.addEventListener("click", function () {
    let div_entekhab_dasteha = document.querySelector('.div-entekhab-dasteha2');
    let p_entekhab_dasteha = document.querySelector('.p-entekhab-dasteha');
    let i_entekhab_dasteha = document.querySelector('.i-entekhab-dasteha');

    div_entekhab_dasteha.classList.remove('div-entekhab-dasteha2');
    div_entekhab_dasteha.classList.add('div-entekhab-dasteha');
    i_entekhab_dasteha.classList.remove('material-icons');
    i_entekhab_dasteha.classList.add('fas');
    i_entekhab_dasteha.classList.add('fa-list-ul');
    i_entekhab_dasteha.innerHTML = '';
    p_entekhab_dasteha.innerHTML = 'دسته‌ها';

    for (let j = 0; j < 10; j++) {
        document.querySelectorAll('.a-pishnahada-nav')[j].style.display = 'flex';
    }
});


document.querySelector('.ul-prices-min').addEventListener("click", function (event) {
    var target = event.target || event.srcElement;
    document.querySelector('.input-min').placeholder = target.innerText;
    document.querySelector('.input-min').value = '';
    document.querySelector('.d-main-min').style.display = 'none';
    // if(document.querySelector('.input-min').placeholder!='مثلا ۷۰،۰۰۰،۰۰۰'){
    //     document.querySelector('.left2-head-item-navbar-2').style.display='inline';
    // }else{
    //     document.querySelector('.left2-head-item-navbar-2').style.display='none';
    // }
});
document.querySelector('.ul-prices-max').addEventListener("click", function (event) {
    var target = event.target || event.srcElement;
    document.querySelector('.input-max').placeholder = target.innerText;
    document.querySelector('.input-max').value = '';
    document.querySelector('.d-main-max').style.display = 'none';
    // if(document.querySelector('.input-max').placeholder!='مثلا ۷۰،۰۰۰،۰۰۰'){
    //     document.querySelector('.left2-head-item-navbar-2').style.display='inline';
    // }else{
    //     document.querySelector('.left2-head-item-navbar-2').style.display='none';
    // }
});


window.onload = function () {
    let divarman = document.querySelector('.divar-man');
    let pishnahada = document.querySelector('.bishtarin-jostojo');
    let bg_light = document.querySelector('.bg-light');
    let input_search = document.querySelector('.input-search');
    let min_price = document.querySelector('.d-main-min');
    let max_price = document.querySelector('.d-main-max');
    let icon_min = document.querySelector('.i-min');
    let icon_max = document.querySelector('.i-max');
    let input_min = document.querySelector('.input-min');
    let input_max = document.querySelector('.input-max');

    document.onclick = function (e) {
        if (e.target.id !== 'dontclose') {
            divarman.style.display = 'none';
        }
        if (e.target.id !== 'dontclose3') {

            min_price.style.display = 'none';
            icon_min.style.transform = 'rotate(0deg) translate(0px)';
            icon_min.style.color = 'rgba(0,0,0,.32)';
            input_min.removeAttribute("disabled");

            if (input_min.placeholder == 'مقدار دلخواه') {
                input_min.setAttribute('placeholder', 'مثلا ۷۰،۰۰۰،۰۰۰');
                input_min.setAttribute("disabled", true);
            } else {
                input_min.removeAttribute("disabled");

            }

            if (document.querySelector('.input-min').placeholder == 'مثلا ۷۰،۰۰۰،۰۰۰' && document.querySelector('.input-max').placeholder == 'مثلا ۷۰،۰۰۰،۰۰۰') {
                document.querySelector('.left2-head-item-navbar-2').style.display = 'none';
            } else {
                document.querySelector('.left2-head-item-navbar-2').style.display = 'inline';
            }

        }
        if (e.target.id !== 'dontclose4') {
            max_price.style.display = 'none';
            icon_max.style.transform = 'rotate(0deg) translate(0px)';
            icon_max.style.color = 'rgba(0,0,0,.32)';

            if (input_max.placeholder == 'مقدار دلخواه') {
                input_max.setAttribute('placeholder', 'مثلا ۷۰،۰۰۰،۰۰۰');
                input_max.setAttribute("disabled", true);
            } else {
                input_max.removeAttribute("disabled");
            }


            if (document.querySelector('.input-min').placeholder == 'مثلا ۷۰،۰۰۰،۰۰۰' && document.querySelector('.input-max').placeholder == 'مثلا ۷۰،۰۰۰،۰۰۰') {
                document.querySelector('.left2-head-item-navbar-2').style.display = 'none';
            } else {
                document.querySelector('.left2-head-item-navbar-2').style.display = 'inline';
            }
        }
        // if (e.target.id !== 'dontclose2') {
        //     pishnahada.style.zIndex = '-10';
        //     pishnahada.style.opacity = '0';
        //     bg_light.style.zIndex = '-10';
        //     bg_light.style.opacity = '0';
        //     input_search.style.backgroundColor = 'rgba(0,0,0,.04)';
        //     input_search.style.boxShadow = ' 0 -4px 10px 2px #fff';
        // }
    };

};