//btn-menu
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});

//custom-select
(function($) {
    $(document).ready(function() {
        var customSelect = $(".custom-select");

        customSelect.each(function() {
            var thisCustomSelect = $(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $("<div></div>", {
                class: "selected-item"
            })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $("<div></div>", {
                class: "all-items all-items-hide"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $(this),
                    optionText = that.text();

                var item = $("<div></div>", {
                    class: "item",
                    on: {
                        click: function() {
                            var selectedOptionText = that.text();
                            selectedItem.text(selectedOptionText).removeClass("arrowanim");
                            allItems.addClass("all-items-hide");
                        }
                    }
                })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $(".selected-item"),
            allItems = $(".all-items");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $(this),
                currentAllItems = currentSelectedItem.next(".all-items");

            allItems.not(currentAllItems).addClass("all-items-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("all-items-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $(document).on("click", function() {
            var opened = $(".all-items:not(.all-items-hide)"),
                index = opened.parent().index();

            customSelect
                .eq(index)
                .find(".all-items")
                .addClass("all-items-hide");
            customSelect
                .eq(index)
                .find(".selected-item")
                .removeClass("arrowanim");
        });
    });
})(jQuery);
//end


// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//progress-bar
const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    setTimeout(() => {
        const { size } = bar.dataset;
        bar.style.width = `${size}%`
    }, 1000);
});





<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/61dc4ab8b84f7301d32a4574/1fp287ot0';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->


var dle_root       = '/';
var dle_admin      = '';
var dle_login_hash = '84f8f63466dab7ac6e979455d580dbe1f51dec0c';
var dle_group      = 5;
var dle_skin       = 'Forexbox';
var dle_wysiwyg    = '2';
var quick_wysiwyg  = '2';
var dle_min_search = '4';
var dle_act_lang   = ["Да", "Нет", "Ввод", "Отмена", "Сохранить", "Удалить", "Загрузка. Пожалуйста, подождите..."];
var menu_short     = 'Быстрое редактирование';
var menu_full      = 'Полное редактирование';
var menu_profile   = 'Просмотр профиля';
var menu_send      = 'Отправить сообщение';
var menu_uedit     = 'Админцентр';
var dle_info       = 'Информация';
var dle_confirm    = 'Подтверждение';
var dle_prompt     = 'Ввод информации';
var dle_req_field  = ["Заполните поле с именем", "Заполните поле с сообщением", "Заполните поле с темой сообщения"];
var dle_del_agree  = 'Вы действительно хотите удалить? Данное действие невозможно будет отменить';
var dle_spam_agree = 'Вы действительно хотите отметить пользователя как спамера? Это приведёт к удалению всех его комментариев';
var dle_c_title    = 'Отправка жалобы';
var dle_complaint  = 'Укажите текст Вашей жалобы для администрации:';
var dle_mail       = 'Ваш e-mail:';
var dle_big_text   = 'Выделен слишком большой участок текста.';
var dle_orfo_title = 'Укажите комментарий для администрации к найденной ошибке на странице:';
var dle_p_send     = 'Отправить';
var dle_p_send_ok  = 'Уведомление успешно отправлено';
var dle_save_ok    = 'Изменения успешно сохранены. Обновить страницу?';
var dle_reply_title= 'Ответ на комментарий';
var dle_tree_comm  = '0';
var dle_del_news   = 'Удалить статью';
var dle_sub_agree  = 'Вы действительно хотите подписаться на комментарии к данной публикации?';
var dle_captcha_type  = '0';
var dle_share_interesting  = ["Поделиться ссылкой на выделенный текст", "Twitter", "Facebook", "Вконтакте", "Прямая ссылка:", "Нажмите правой клавишей мыши и выберите «Копировать ссылку»"];
var DLEPlayerLang     = {prev: 'Предыдущий',next: 'Следующий',play: 'Воспроизвести',pause: 'Пауза',mute: 'Выключить звук', unmute: 'Включить звук', settings: 'Настройки', enterFullscreen: 'На полный экран', exitFullscreen: 'Выключить полноэкранный режим', speed: 'Скорость', normal: 'Обычная', quality: 'Качество', pip: 'Режим PiP'};
var allow_dle_delete_news   = false;
var dle_search_delay   = false;
var dle_search_value   = '';
jQuery(function($){
    FastSearch();
});

var language_mobile = "ru";



/* --------------------------------------------------------- mobile menu -------------------------------- */
$(document).ready(function(){
    var ln = $('.lang_select_input').val();
    if (ln == 'ru') {
        $('.blog').css('display', 'none');

    }
    else {
        $('.blog').css('display', 'block');
    };


    var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if ($(window).width() < 626) {
        padding_body = 20;
        $('.main_wrap').css('padding-left', padding_body);
        $('.main_wrap').css('padding-right', padding_body);
        slider();
    }
    else{
        var padding_body = 40 - (scrollBarWidth / 2);
        $('.main_wrap').css('padding-left', padding_body);
        $('.main_wrap').css('padding-right', padding_body);

    }
    $( window ).resize(function() {
        if ($(window).width() > 1209) {
            $('header menu').css('display', 'block');
            $('.overlay').css('display', 'none');
        }
        else {
            $('header menu').css('display', 'none');
            $('.overlay').css('display', 'none');
        };
        if ($(window).width() < 626) {
            var padding_body = 20;
            $('.main_wrap').css('padding-left', padding_body);
            $('.main_wrap').css('padding-right', padding_body);
            slider();

        }
        else{
            $('.main_wrap').css('padding-left', padding_body);
            $('.main_wrap').css('padding-right', padding_body);
        }

    });
    $('.menu_mobile').click(function()
        {
            $('header menu').show('slide', {direction: 'right'}, 300);
            $('.overlay').css('display', 'block');
        }
    );



    if ($(window).width() < 1209) {
        $('header menu ul li').click(function()
            {
                $('header menu').css('display', 'none');
                $('.overlay').css('display', 'none');
            }
        );
    }



    $('.mune_close, .overlay').click(function()
        {
            $('header menu').hide('slide', {direction: 'right'}, 300);
            $('.overlay').css('display', 'none');
        }
    );
});


var url = window.location.pathname;
var url_ful = window.location.href;


var str = url_ful;
str1 = str.substr(str.indexOf('/')+1);
str2 = str1.substr(str1.indexOf('/')+1);
str3 = str2.substr(str2.indexOf('/')+1);

url = str3;
if(url == "contacts.html"){
    $('header menu ul li a').removeClass('active');
    $('#a_contacts').addClass('active');
}
else if(url == "#faq"){
    $('header menu ul li a').removeClass('active');
    $('#a_faq').addClass('active');
}
else if(url == "#partners"){
    $('header menu ul li a').removeClass('active');
    $('#a_partners').addClass('active');
}
else if(url == "services.html"){
    $('header menu ul li a').removeClass('active');
    $('#a_service').addClass('active');
}
else{
    $('header menu ul li a').removeClass('active');
    $(this).addClass('active');
}



/* lang select */
$(document).on('click', 'header menu ul li a', function() {
    $('header menu ul li a').removeClass('active');
    $(this).addClass('active');
});

function slider(){
    $('.products_slider_container').slick({
        centerMode: true,
        centerPadding: '0px',

        accessibility: true,

        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,


        arrows:true,
        appendArrows: $('.products_slider_arrows'),
        prevArrow: $('.products_slider_left_arrow'),
        nextArrow: $('.products_slider_right_arrow'),

        dots: true,
        appendDots: $('.products_slider_dots_box'),

        mobileFirst: true,
        responsive: [
            {
                breakpoint: 625,
                settings: "unslick"
            }
        ]
    })
}

/* --------------------------------------------------------- end mobile menu ---------------------------- */





/* lang select */
$(document).on('click', '.lang_select_title', function() {
    let select = $(this).closest('.lang_select');

    if (select.hasClass('active')) {
        select.removeClass('active');
    } else {
        select.addClass('active');
    }
});

$(document).on('click', '.lang_select_label', function() {
    let select = $(this).closest('.lang_select');
    let selectTitle = select.find('.lang_select_title');
    let selectCurrentOption = $(this).text();
    selectTitle.text(selectCurrentOption);
    select.removeClass('active');
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.custom_select_label').removeClass('active');
        $(this).addClass('active');
    }

    if($(this).text() === 'Ru') {
        $(this).removeClass('active')
        $(this).text('En')
    } else {
        $('.custom_select_label').removeClass('active');
        $(this).addClass('active');
        $(this).text('Ru')
    }
});



var document_jq = $(document)


/* --------------------------------------------------------- faq & partners ----------------------------------------- */

/* faq call function */

$(window).on("load", function () {
    vertical_slider_tabs (
        '#faq',
        '#faq_tabs_list',
        '.faq_tabs_section',

        '.tab',

        '.faq_input',

        10,
        '#faq_tab_left',
        '#faq_tab_right',
        '#faq_total_tabs',
        '#faq_current_tab'
    )

    /* partners call function */
    vertical_slider_tabs (
        '#partners',
        '#partners_list',
        '.partners_box',

        '.partners_link_2',

        '.partners_input',

        10,
        '#partners_tab_left',
        '#partners_tab_right',
        '#partners_total_tabs',
        '#partners_current_tab'
    )
})


function vertical_slider_tabs (
    container_global_param,
    container_local_param,
    elem_self_param,
    elem_link_param,
    input_param,
    elem_margin_param,
    arrow_left_param,
    arrow_right_param,
    count_total_param,
    count_current_param
) {
    var container_global = $(container_global_param),
        container_local = $(container_local_param),
        elem_self = container_global.find(elem_self_param),
        elem_link = $(elem_link_param),
        elem_height = elem_link.innerHeight() + elem_margin_param,
        input_elem = input_param,
        elem_total = elem_self.length,
        elem_class_name = 'div ' + elem_self_param,
        arrow_left = $(arrow_left_param),
        arrow_right = $(arrow_right_param),
        count_total = $(count_total_param),
        count_current = $(count_current_param),
        slides_to_scroll_next,
        slides_to_scroll_prev,
        container_total_margin;

    function container_local_scroll(scroll_height) {
        container_local.animate({
            scrollTop: scroll_height
        }, 100);
    }

    function get_container_current_height(start_index, end_index) {
        var container_current_height = 0;

        elem_self.each(function(i) {
            if (start_index <= i && i < end_index) {
                container_current_height += Number(elem_margin_param) + Number($(this).height());
            }
        });

        return container_current_height;
    }


// get window width
    if (window.innerWidth > 1024) {
        slides_to_scroll_next = 5;
        slides_to_scroll_prev = -5;
    } else {
        slides_to_scroll_next = 3;
        slides_to_scroll_prev = -3;
        elem_self.find('input:checked').prop('checked', false);
    }

// at load
// showing count of all pages and current pages at load
    count_total.text(elem_total);
    count_current.text(1);
    container_local.height(get_container_current_height(0, slides_to_scroll_next));


// making active tab when cliking on it
    container_global.on('click', elem_class_name, function() {
        // getting index of element
        var elem_index = $(this).index();

        if (elem_total >= (elem_index + slides_to_scroll_next)) {
            container_local_scroll(get_container_current_height(0, elem_index));

            container_local.height(get_container_current_height(elem_index, elem_index + slides_to_scroll_next));
        }

        // show current tab
        count_current.text(elem_index + 1);
    })

// left arrow for carousel
    var arrow_left_timer;

    var arrow_left_func = function () {
        var elem = elem_self.find('input:checked'),
            index_curr = elem.parent().index(),
            index_last = elem_total - 1,

            index_prev = index_curr + slides_to_scroll_prev;

        if (index_prev < elem_total && index_prev >= 0) {
            elem.prop('checked', false);
            elem_self.eq(index_prev).find('input').prop('checked', true);

            container_local_scroll(get_container_current_height(0, index_prev));
            container_local.height(get_container_current_height(index_prev, index_prev + slides_to_scroll_next));

            // show current tab
            count_current.text(index_prev + 1);
        } else {
            elem.prop('checked', false);
            elem_self.last().find('input').prop('checked', true);

            container_local_scroll(get_container_current_height(0, index_last - (slides_to_scroll_next - 1)));
            container_local.height(get_container_current_height(index_last - (slides_to_scroll_next - 1), (index_last + 1)));

            // show current tab
            count_current.text(index_last + 1);
        }

// first timer for left arrow
        arrow_left_timer = setTimeout(arrow_left_func, 500);
    }


// timer for left arrow
    arrow_left.on({
        'mousedown touchstart': function(evt) {
            evt.preventDefault();
// second timer for left arrow
            arrow_left_timer = setTimeout(arrow_left_func, 10);
        },
        'mouseup mouseleave touchend touchmove': function(evt) {
            evt.preventDefault();
// stopping both timers for left arrow
            clearTimeout(arrow_left_timer);
        }
    });


// right arrow for carousel
    var arrow_right_timer;

    var arrow_right_func = function() {
        var elem = elem_self.find('input:checked'),
            index_curr = elem.parent().index(),
            // index_next = index_curr + 1;
            index_next = index_curr + slides_to_scroll_next;

        if (index_next < elem_total && index_next >= 0) {
            elem.prop('checked', false);
            elem_self.eq(index_next).find('input').prop('checked', true);

            if ((elem_total - index_next + 1) < slides_to_scroll_next) {
                container_local_scroll(get_container_current_height(0, elem_total - slides_to_scroll_next));
                container_local.height(get_container_current_height(elem_total - slides_to_scroll_next, elem_total));
            } else {
                container_local_scroll(get_container_current_height(0, index_next));
                container_local.height(get_container_current_height(index_next, index_next + slides_to_scroll_next));
            }

            count_current.text(index_next + 1);
        } else {
            elem.prop('checked', false);
            elem_self.first().find('input').prop('checked', true);

            container_local_scroll(0);
            container_local.height(get_container_current_height(0, slides_to_scroll_next));

            count_current.text(1);
        }

// first timer for right arrow
        arrow_right_timer = setTimeout(arrow_right_func, 500);
    }


// timer for right arrow
    arrow_right.on({
        'mousedown touchstart': function(evt) {
            evt.preventDefault();
// second timer for right arrow
            arrow_right_timer = setTimeout(arrow_right_func, 10);
        },
        'mouseup mouseleave touchend touchmove': function(evt) {
            evt.preventDefault();
// stopping both timers for right arrow
            clearTimeout(arrow_right_timer);
        }
    });
}
/* --------------------------------------------------------- end faq & partners ------------------------------------- */


/* --------------------------------------------------------- blog carousel ------------------------------------------ */

/* --------------------------------------------------------- end blog carousel -------------------------------------- */

// /* partners tabs */
// $('.tabs-wrapper_2').each(function() {
//     let ths = $(this);
//     ths.find('.tab-item_2').not(':first').hide();
//
//     var scrl = ths.find('.tab-item_2:first').children(".text_body").prop("scrollHeight");
//     if (scrl <= 350) {
//         ths.find('.tab-item_2:first').children(".text_body").removeClass("scroll_partners").addClass("scroll_overflowed");
//     }
//
//     ths.find('.partners_link_2').first().find('.partners_arrow_sm_right').attr('src', '/templates/Forexbox/images/arrow_sm_left_active.svg');
//     ths.find('.partners_link_2').first().find('.partners_text').css('font-weight', '400');
//
//     ths.find('#partners_link_2').click(function() {
//         ths.find('.partners_link_2').removeClass('active').eq($(this).index()).addClass('active');
//         ths.find('.tab-item_2').hide().eq($(this).index()).fadeIn();
//
//         // change color of scroll
//         var tab_body = ths.find('.tab-item_2').eq($(this).index()).children(".text_body")
//         var scroll_height = tab_body.prop("scrollHeight")
//
//         if (scroll_height <= 350) {
//             ths.find('.tab-item_2').eq($(this).index()).children(".text_body").removeClass("scroll_partners")
//             ths.find('.tab-item_2').eq($(this).index()).children(".text_body").addClass("scroll_overflowed")
//         }
//         // -----------------------
//         ths.find('.partners_arrow_sm_right').eq($(this).index()).attr('src', '/templates/Forexbox/images/arrow_sm_left_active.svg');
//         ths.find('.partners_text').eq( $(this).index()).css('font-weight', '400');
//         ths.find('.partners_arrow_sm_right').not(ths.find('.partners_arrow_sm_right').eq($(this).index())).attr('src', '/templates/Forexbox/images/arrow_sm_right.svg');
//         ths.find('.partners_text').not(ths.find('.partners_text').eq($(this).index())).css('font-weight', '300');
//     }).eq(0).addClass('active');
// });
// /* end partners tabs */
//
// /* partners carousel */
// $(function (){
//     $('.partners_links_2').slick({
//         accessibility: true,
//         arrows:true,
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         appendArrows:$('.partners_arrows_blog'),
//         prevArrow: $('.partners_tab_left'),
//         nextArrow: $('.partners_tab_right'),
//         infinite: false,
//         vertical:true
//     });
//
//     // show current and last slide number
//     $('.partners_links_2').on('setPosition', function( event, slick, direction) {
//         var firstSlide = $('.partners_links_2 .slick-active').first();
//         var lastSlide = +firstSlide.attr('data-slick-index') + 5;
//         var allSlides = slick.slideCount;
//         $('.partners_current_tab').text(lastSlide);
//         $('.partners_total_tabs').text(allSlides);
//     });
// });
// /* end partners carousel */

/* custom select */
$(document).ready(function () {
    let first_label = $('.ping .custom_select_label').first()
    let text = first_label.text()
    let min = first_label.attr("data-min")
    let max = first_label.attr("data-max")
    $('.ping .custom_select_title').text(text).attr({"data-min":min, "data-max":max})
});

$(document).on('click', '.custom_select_title', function() {
    let select = $(this).closest('.custom_select');

    if (select.hasClass('active')) {
        select.removeClass('active');


    } else {
        $('.tariff_constructor_item .tariff_constructor_section').removeClass('active');
        select.addClass('active');

    }
});

$(document).on('click', '.custom_select_label', function() {
    let select = $(this).closest('.custom_select');
    let selectTitle = select.find('.custom_select_title');
    let selectCurrentOption = $(this).text();
    selectTitle.text(selectCurrentOption);
    select.removeClass('active');
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.custom_select_label').removeClass('active');
        $(this).addClass('active');
        let min = $(this).attr("data-min")
        let max = $(this).attr("data-max")
        $('.ping_select_title').attr({"data-min":min, "data-max":max})
    }
});

$(document).on('click', '.ping_button', function() {
    let min = $('.ping_select_title').attr("data-min")
    let max = $('.ping_select_title').attr("data-max")
    p.run(min, max)
});

$(function($) {
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $('.custom_select'); // тут указываем ID элемента
        // let select = $( this ).closest( '.custom_select' );
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            // div.hide(); // скрываем его
            div.removeClass('active');
        }
    });
});
/* --------------------------------------------------------- ping progressbar --------------------------------------- */
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function progressBar() {
    this.run = (min, max)=> {
        let random = randomInteger(min, max);
        // let width = random +'%';


        $('.progressbar').css('display', 'block');
        // $('.progressbar > div').css('width', width);
        $('.progressbar_word').css('display', 'inline-block');
        $('.progressbar_percent').text(random);

        let width = random +'%';
        $('.progressbar > div').animate({
            width: width
        }, {
            duration: 1500,
            easing: "linear",
        });
    }
}
p = new progressBar;
/* --------------------------------------------------------- end ping progressbar ----------------------------------- */

/* SERVICES tabs */
$('.faq-tabs').each(function () {
    let ths = $(this)
    let link = '.faq-tabs_label';
    let body = '.faq-tabs_item';

    $(link).first().addClass('active')
    $(body).first().show()

    $(link).click(function () {
        ths.find(link).removeClass('active').eq($(this).index()).addClass('active')
        ths.find(body).hide().eq($(this).index()).fadeIn()
    })
})

/* SERVICES subtabs 1 */
$('.faq-tabs').each(function () {
    let ths = $(this)
    let link = '.faq_tabs_link';
    let body = '.faq_tabs_text';

    $(link).first().addClass('active')
    $(link).first().find('.faq_tabs_arrow_sm_right').attr('src', '/templates/Forexbox/images/arrow_sm_left_active.svg')
    $(body).first().show()

    $(link).click(function () {
        ths.find(link).removeClass('active').eq($(this).index()).addClass('active').find('img')
        ths.find('.faq_tabs_arrow_sm_right').attr('src', '/templates/Forexbox/images/arrow_sm_right.svg');
        ths.find('.faq_tabs_arrow_sm_right' ).eq( $(this).index()).attr('src', '/templates/Forexbox/images/arrow_sm_left_active.svg');
        ths.find(body).hide().eq($(this).index()).fadeIn()
    })
})

/* SERVICES subtabs 2 */
function tabs(val) {
    $(val).each(function () {

        let main = $(val)
        let links = $(val).find('.tabs_link');
        let texts = $(val).find('.tabs_text');
        let active_img = '/templates/Forexbox/images/arrow_sm_left_active.svg'
        let not_active_img = '/templates/Forexbox/images/arrow_sm_right.svg'
        let link_names = $(val).find('.tabs_tagline');

        // give first
        links.first().addClass('active')
        $(links).first().find('.arrow_sm_right').attr('src', active_img)
        $(texts).first().show()

        // toogle on click
        $(links).click(function () {
            links.removeClass('active').eq($(this).index()).addClass('active')
            main.find('.arrow_sm_right').attr('src', not_active_img);
            main.find('.arrow_sm_right').eq( $(this).index()).attr('src', active_img);
            main.find(texts).hide().eq($(this).index()).fadeIn()
        })
    })
}

tabs('.faq-tabs_item_3');

/* smooth scroll */
// $(".navbar_link").click(function() {
//     $("html, body").animate({
//         // scrollTop: $($(this).attr("href")).offset().top + "px"
//         scrollTop: $($("this").attr("href")).offset().top + "px"
//     }, {
//         duration: 500,
//         easing: "linear"
//     });
//     return false;
// });

/* TARIFF CONSTRUCTOR selects */
var url='';

function gotourl_ru() {
    location.href=url+'&language=russian';
}

function gotourl_en() {
    location.href=url+'&language=english';
}

function count() {
    var selectsCreate = document.querySelectorAll(".tariff_constructor_preview");

    if (selectsCreate) {
        var counter = 0;

        var str0;
        var str1 = "https://my.forex-box.com/cart.php?a=add";
        var int0 = 0;
        var value;

        selectsCreate.forEach(function (item) {
            str0 = item.textContent;

            value = 0;

            if (str0)
            {
                if ((str0 == "1 шт.") || (str0 == "1 pc.")) { int0 = 1; value = 2.52; str1 += "&pid=1"; }
                if ((str0 == "2 шт.") || (str0 == "2 pc.")) { int0 = 2; value = 4.87; str1 += "&pid=2"; }
                if ((str0 == "3 шт.") || (str0 == "3 pc.")) { int0 = 3; value = 7.06; str1 += "&pid=3"; }
                if ((str0 == "4 шт.") || (str0 == "4 pc.")) { int0 = 4; value = 9.07; str1 += "&pid=4"; }



                if ((str0 == "5%")    && (int0 == 1)) { value = 0.00; str1 += "&configoption[22]=211"; }
                if ((str0 == "5.5%")  && (int0 == 1)) { value = 0.42; str1 += "&configoption[22]=261"; }
                if ((str0 == "6%")    && (int0 == 1)) { value = 0.84; str1 += "&configoption[22]=212"; }
                if ((str0 == "6.5%")  && (int0 == 1)) { value = 1.26; str1 += "&configoption[22]=262"; }
                if ((str0 == "7%")    && (int0 == 1)) { value = 1.68; str1 += "&configoption[22]=213"; }
                if ((str0 == "7.5%")  && (int0 == 1)) { value = 2.10; str1 += "&configoption[22]=263"; }
                if ((str0 == "8%")    && (int0 == 1)) { value = 2.52; str1 += "&configoption[22]=214"; }
                if ((str0 == "8.5%")  && (int0 == 1)) { value = 2.94; str1 += "&configoption[22]=264"; }
                if ((str0 == "9%")    && (int0 == 1)) { value = 3.36; str1 += "&configoption[22]=215"; }
                if ((str0 == "9.5%")  && (int0 == 1)) { value = 3.78; str1 += "&configoption[22]=265"; }
                if ((str0 == "10%")   && (int0 == 1)) { value = 4.20; str1 += "&configoption[22]=216"; }
                if ((str0 == "10.5%") && (int0 == 1)) { value = 4.62; str1 += "&configoption[22]=266"; }

                if ((str0 == "500MB") && (int0 == 1)) { value = 0.00; str1 += "&configoption[4]=134"; }
                if ((str0 == "550MB") && (int0 == 1)) { value = 0.21; str1 += "&configoption[4]=135"; }
                if ((str0 == "600MB") && (int0 == 1)) { value = 0.42; str1 += "&configoption[4]=104"; }
                if ((str0 == "650MB") && (int0 == 1)) { value = 0.63; str1 += "&configoption[4]=136"; }
                if ((str0 == "700MB") && (int0 == 1)) { value = 0.84; str1 += "&configoption[4]=137"; }
                if ((str0 == "750MB") && (int0 == 1)) { value = 1.05; str1 += "&configoption[4]=138"; }
                if ((str0 == "800MB") && (int0 == 1)) { value = 1.26; str1 += "&configoption[4]=139"; }
                if ((str0 == "850MB") && (int0 == 1)) { value = 1.47; str1 += "&configoption[4]=140"; }
                if ((str0 == "900MB") && (int0 == 1)) { value = 1.68; str1 += "&configoption[4]=141"; }

                if ((str0 == "3GB")  && (int0 == 1)) { value = 0.00; str1 += "&configoption[5]=15"; }
                if ((str0 == "4GB")  && (int0 == 1)) { value = 0.42; str1 += "&configoption[5]=69"; }
                if ((str0 == "5GB")  && (int0 == 1)) { value = 0.84; str1 += "&configoption[5]=18"; }
                if ((str0 == "6GB")  && (int0 == 1)) { value = 1.26; str1 += "&configoption[5]=70"; }
                if ((str0 == "7GB")  && (int0 == 1)) { value = 1.68; str1 += "&configoption[5]=71"; }
                if ((str0 == "8GB")  && (int0 == 1)) { value = 2.10; str1 += "&configoption[5]=145"; }
                if ((str0 == "9GB")  && (int0 == 1)) { value = 2.52; str1 += "&configoption[5]=146"; }
                if ((str0 == "10GB") && (int0 == 1)) { value = 2.94; str1 += "&configoption[5]=72"; }



                if ((str0 == "5%")    && (int0 == 2)) { value = 0.00; str1 += "&configoption[23]=219"; }
                if ((str0 == "5.5%")  && (int0 == 2)) { value = 0.84; str1 += "&configoption[23]=268"; }
                if ((str0 == "6%")    && (int0 == 2)) { value = 1.68; str1 += "&configoption[23]=220"; }
                if ((str0 == "6.5%")  && (int0 == 2)) { value = 2.52; str1 += "&configoption[23]=269"; }
                if ((str0 == "7%")    && (int0 == 2)) { value = 3.36; str1 += "&configoption[23]=221"; }
                if ((str0 == "7.5%")  && (int0 == 2)) { value = 4.20; str1 += "&configoption[23]=270"; }
                if ((str0 == "8%")    && (int0 == 2)) { value = 5.04; str1 += "&configoption[23]=222"; }
                if ((str0 == "8.5%")  && (int0 == 2)) { value = 5.88; str1 += "&configoption[23]=271"; }
                if ((str0 == "9%")    && (int0 == 2)) { value = 6.72; str1 += "&configoption[23]=223"; }
                if ((str0 == "9.5%")  && (int0 == 2)) { value = 7.56; str1 += "&configoption[23]=272"; }
                if ((str0 == "10%")   && (int0 == 2)) { value = 8.40; str1 += "&configoption[23]=224"; }
                if ((str0 == "10.5%") && (int0 == 2)) { value = 9.24; str1 += "&configoption[23]=273"; }

                if ((str0 == "500MB") && (int0 == 2)) { value = 0.00; str1 += "&configoption[7]=107"; }
                if ((str0 == "550MB") && (int0 == 2)) { value = 0.42; str1 += "&configoption[7]=151"; }
                if ((str0 == "600MB") && (int0 == 2)) { value = 0.84; str1 += "&configoption[7]=303"; }
                if ((str0 == "650MB") && (int0 == 2)) { value = 1.26; str1 += "&configoption[7]=304"; }
                if ((str0 == "700MB") && (int0 == 2)) { value = 1.68; str1 += "&configoption[7]=305"; }
                if ((str0 == "750MB") && (int0 == 2)) { value = 2.10; str1 += "&configoption[7]=306"; }
                if ((str0 == "800MB") && (int0 == 2)) { value = 2.52; str1 += "&configoption[7]=307"; }
                if ((str0 == "850MB") && (int0 == 2)) { value = 2.94; str1 += "&configoption[7]=308"; }
                if ((str0 == "900MB") && (int0 == 2)) { value = 3.36; str1 += "&configoption[7]=309"; }

                if ((str0 == "4GB")  && (int0 == 2)) { value = 0.00; str1 += "&configoption[6]=19"; }
                if ((str0 == "5GB")  && (int0 == 2)) { value = 0.42; str1 += "&configoption[6]=21"; }
                if ((str0 == "6GB")  && (int0 == 2)) { value = 0.84; str1 += "&configoption[6]=67"; }
                if ((str0 == "7GB")  && (int0 == 2)) { value = 1.26; str1 += "&configoption[6]=22"; }
                if ((str0 == "8GB")  && (int0 == 2)) { value = 1.68; str1 += "&configoption[6]=156"; }
                if ((str0 == "9GB")  && (int0 == 2)) { value = 2.10; str1 += "&configoption[6]=157"; }
                if ((str0 == "10GB") && (int0 == 2)) { value = 2.52; str1 += "&configoption[6]=68"; }



                if ((str0 == "5%")    && (int0 == 3)) { value = 0.00;  str1 += "&configoption[24]=227"; }
                if ((str0 == "5.5%")  && (int0 == 3)) { value = 1.26;  str1 += "&configoption[24]=275"; }
                if ((str0 == "6%")    && (int0 == 3)) { value = 2.52;  str1 += "&configoption[24]=228"; }
                if ((str0 == "6.5%")  && (int0 == 3)) { value = 3.78;  str1 += "&configoption[24]=276"; }
                if ((str0 == "7%")    && (int0 == 3)) { value = 5.04;  str1 += "&configoption[24]=229"; }
                if ((str0 == "7.5%")  && (int0 == 3)) { value = 6.30;  str1 += "&configoption[24]=277"; }
                if ((str0 == "8%")    && (int0 == 3)) { value = 7.56;  str1 += "&configoption[24]=230"; }
                if ((str0 == "8.5%")  && (int0 == 3)) { value = 8.82;  str1 += "&configoption[24]=278"; }
                if ((str0 == "9%")    && (int0 == 3)) { value = 10.08; str1 += "&configoption[24]=231"; }
                if ((str0 == "9.5%")  && (int0 == 3)) { value = 11.34; str1 += "&configoption[24]=279"; }
                if ((str0 == "10%")   && (int0 == 3)) { value = 12.60; str1 += "&configoption[24]=232"; }
                if ((str0 == "10.5%") && (int0 == 3)) { value = 13.86; str1 += "&configoption[24]=280"; }

                if ((str0 == "500MB") && (int0 == 3)) { value = 0.00; str1 += "&configoption[10]=158"; }
                if ((str0 == "550MB") && (int0 == 3)) { value = 0.63; str1 += "&configoption[10]=163"; }
                if ((str0 == "600MB") && (int0 == 3)) { value = 1.26; str1 += "&configoption[10]=165"; }
                if ((str0 == "650MB") && (int0 == 3)) { value = 1.89; str1 += "&configoption[10]=310"; }
                if ((str0 == "700MB") && (int0 == 3)) { value = 2.52; str1 += "&configoption[10]=311"; }
                if ((str0 == "750MB") && (int0 == 3)) { value = 3.15; str1 += "&configoption[10]=312"; }
                if ((str0 == "800MB") && (int0 == 3)) { value = 3.78; str1 += "&configoption[10]=313"; }
                if ((str0 == "850MB") && (int0 == 3)) { value = 4.41; str1 += "&configoption[10]=314"; }
                if ((str0 == "900MB") && (int0 == 3)) { value = 5.04; str1 += "&configoption[10]=315"; }

                if ((str0 == "5GB")  && (int0 == 3)) { value = 0.00; str1 += "&configoption[9]=35"; }
                if ((str0 == "6GB")  && (int0 == 3)) { value = 0.42; str1 += "&configoption[9]=65"; }
                if ((str0 == "7GB")  && (int0 == 3)) { value = 0.84; str1 += "&configoption[9]=37"; }
                if ((str0 == "8GB")  && (int0 == 3)) { value = 1.26; str1 += "&configoption[9]=320"; }
                if ((str0 == "9GB")  && (int0 == 3)) { value = 1.68; str1 += "&configoption[9]=321"; }
                if ((str0 == "10GB") && (int0 == 3)) { value = 2.10; str1 += "&configoption[9]=38"; }



                if ((str0 == "5%")    && (int0 == 4)) { value = 0.00;  str1 += "&configoption[25]=235"; }
                if ((str0 == "5.5%")  && (int0 == 4)) { value = 1.68;  str1 += "&configoption[25]=282"; }
                if ((str0 == "6%")    && (int0 == 4)) { value = 3.36;  str1 += "&configoption[25]=236"; }
                if ((str0 == "6.5%")  && (int0 == 4)) { value = 5.04;  str1 += "&configoption[25]=283"; }
                if ((str0 == "7%")    && (int0 == 4)) { value = 6.72;  str1 += "&configoption[25]=237"; }
                if ((str0 == "7.5%")  && (int0 == 4)) { value = 8.40;  str1 += "&configoption[25]=284"; }
                if ((str0 == "8%")    && (int0 == 4)) { value = 10.08; str1 += "&configoption[25]=238"; }
                if ((str0 == "8.5%")  && (int0 == 4)) { value = 11.76; str1 += "&configoption[25]=285"; }
                if ((str0 == "9%")    && (int0 == 4)) { value = 13.44; str1 += "&configoption[25]=239"; }
                if ((str0 == "9.5%")  && (int0 == 4)) { value = 15.12; str1 += "&configoption[25]=286"; }
                if ((str0 == "10%")   && (int0 == 4)) { value = 16.80; str1 += "&configoption[25]=240"; }
                if ((str0 == "10.5%") && (int0 == 4)) { value = 18.48; str1 += "&configoption[25]=287"; }

                if ((str0 == "500MB") && (int0 == 4)) { value = 0.00; str1 += "&configoption[13]=57"; }
                if ((str0 == "550MB") && (int0 == 4)) { value = 0.84; str1 += "&configoption[13]=171"; }
                if ((str0 == "600MB") && (int0 == 4)) { value = 1.68; str1 += "&configoption[13]=172"; }
                if ((str0 == "650MB") && (int0 == 4)) { value = 2.52; str1 += "&configoption[13]=173"; }
                if ((str0 == "700MB") && (int0 == 4)) { value = 3.36; str1 += "&configoption[13]=174"; }
                if ((str0 == "750MB") && (int0 == 4)) { value = 4.20; str1 += "&configoption[13]=175"; }
                if ((str0 == "800MB") && (int0 == 4)) { value = 5.04; str1 += "&configoption[13]=176"; }
                if ((str0 == "850MB") && (int0 == 4)) { value = 5.88; str1 += "&configoption[13]=177"; }
                if ((str0 == "900MB") && (int0 == 4)) { value = 6.72; str1 += "&configoption[13]=316"; }

                if ((str0 == "6GB")  && (int0 == 4)) { value = 0.00; str1 += "&configoption[12]=115"; }
                if ((str0 == "7GB")  && (int0 == 4)) { value = 0.42; str1 += "&configoption[12]=53"; }
                if ((str0 == "8GB")  && (int0 == 4)) { value = 0.84; str1 += "&configoption[12]=181"; }
                if ((str0 == "9GB")  && (int0 == 4)) { value = 1.26; str1 += "&configoption[12]=182"; }
                if ((str0 == "10GB") && (int0 == 4)) { value = 1.68; str1 += "&configoption[12]=54"; }
            }

            counter += value;
        });

        var price = document.querySelector(".tariff_constructor_money");
        if (price) {
            price.innerHTML = counter.toFixed(2);
        }

        url = str1;
    }
}

window.addEventListener("load", count);
var mainselectors = document.querySelectorAll(".tariff_constructor_item");
mainselectors.forEach(function (item) {
    item.addEventListener("click", function () {
        setTimeout(count, 100);
    });
});
/* end TARIFF CONSTRUCTOR selects */

/* --------------------------------------------------------- mobile version ----------------------------------------- */

/* --------------------------------------------------------- mobile hide-show navbar -------------------------------- */
document_jq.on('click', '.navbar_mobile_close_wrapper', function() {
    $('.navbar_box_mobile').hide()
})

document_jq.on('click', '.navbar_menu_mobile', function() {
    $('.navbar_box_mobile').toggle()
})
/* --------------------------------------------------------- end mobile hide-show navbar ---------------------------- */

/* --------------------------------------------------------- mobile change language --------------------------------- */
if (language_mobile == 'en') {
    $('.lang_ru_mobile').css('font-weight', 300)
    $('.lang_en_mobile').css('font-weight', 400)

    $('.lang_en_mobile_underline').show()
    $('.lang_ru_mobile_underline').hide()
} else {
    $('.lang_ru_mobile').css('font-weight', 400)
    $('.lang_en_mobile').css('font-weight', 300)

    $('.lang_ru_mobile_underline').show()
    $('.lang_en_mobile_underline').hide()
}
/* --------------------------------------------------------- end mobile change language ----------------------------- */



/* --------------------------------------------------------- tariff_constructor tabs -------------------------------- */
$(function() {
    $("#tabs-nav a").click(function(event) {
        event.preventDefault();
        $("#tabs-nav a").removeClass("tabs-menu-active");
        $(this).addClass("tabs-menu-active");
        $(".tabs-panel").removeClass("animated-tabs fadeIn").hide();
        var tab_id = $(this).data("target");
        $("#"+tab_id).addClass("animated-tabs fadeIn").show();
    });
});
/* --------------------------------------------------------- end tariff_constructor tabs ---------------------------- */

/* --------------------------------------------------------- faq mobile accordion ----------------------------------- */
// $(function() {
//     $(".accordion-header").click(function(event) {
//         event.preventDefault()
//
//         var dis = $(this)
//         var acr_box = dis.closest(".accordion")
//
//         if (!dis.hasClass("active-accordion")) {
//             acr_box.find(".accordion-header").removeClass("active-accordion")
//             dis.addClass("active-accordion")
//             acr_box.find(".accordion-content").removeClass("animation_acrd fadeIn").hide()
//             dis.next().show().addClass("animation_acrd fadeIn")
//         }
//         else {
//             dis.removeClass("active-accordion")
//         }
//     })
// })
//
// // clear height of current slide
// $('.faq_mobile_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     $(".faq_mobile_slider .accordion-header").removeClass("active-accordion")
// })
//
// // making correct height of slide when one of slides is active
// $(document).on('click', '.faq_mobile .accordion-box', function() {
//     var elem_height = $('.faq_mobile .slick-current').innerHeight()
//
//     $('.faq_mobile .draggable').css('height', elem_height)
// })
/* --------------------------------------------------------- end faq mobile accordion ------------------------------- */

/* --------------------------------------------------------- faq mobile carousel ------------------------------------ */
// $('.faq_mobile_slider').slick({
//     centerMode: false,
//     accessibility: true,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerPadding: '25px',
//
//     vertical: true,
//     rows: 5,
//     verticalSwiping: true,
//
//     arrows:true,
//     appendArrows: $('.faq_mobile_slider_arrows'),
//     prevArrow: $('.faq_mobile_slider_left_arrow'),
//     nextArrow: $('.faq_mobile_slider_right_arrow'),
//
//     dots: true,
//     appendDots: $('.faq_mobile_slider_dots_box'),
//     mobileFirst: true,
//
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: "unslick",
//         }
//     ]
// })
//
// // tablet version - show current and last slide number
// $('.faq_mobile_slider').on('setPosition', function(event, slick, direction) {
//     var firstSlide = $('.faq_mobile_slider .slick-active').first();
//     var lastSlide = +firstSlide.attr('data-slick-index') + 1;
//     var allSlides = slick.slideCount;
//     $('.faq_tab_current_tab').text(lastSlide);
//     $('.faq_tab_total_tabs').text(allSlides);
// });
/* --------------------------------------------------------- end faq mobile carousel -------------------------------- */

/* --------------------------------------------------------- blog mobile carousel ----------------------------------- */
/*------------------------------------------------------- end blog mobile carousel ------------------------------- */

/* --------------------------------------------------------- partners mobile carousel ------------------------------- */
// $(function () {
//     $('.partners_mobile_links').slick({
//         accessibility: true,
//         infinite: false,
//         mobileFirst: true,
//         centerPadding: '25px',
//
//         rows: 5,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//
//         vertical:true,
//         verticalSwiping: true,
//
//         arrows:true,
//         appendArrows:$('.partners_mobile_arrows_block'),
//         prevArrow: $('.partners_mobile_arrow_up'),
//         nextArrow: $('.partners_mobile_arrow_down'),
//
//         dots: true,
//         appendDots: $('.partners_mobile_slider_dots_box'),
//
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: "unslick",
//             }
//         ]
//     });
//
//     // get current and last slide number
//     $('.partners_mobile_links').on('setPosition', function(event, slick, direction) {
//         var firstSlide = $('.partners_mobile_links .slick-active').first()
//         var lastSlide = +firstSlide.attr('data-slick-index') + 1;
//         var allSlides = slick.slideCount;
//         $('.partners_tablet_current_tab').text(lastSlide)
//         $('.partners_tablet_total_tabs').text(allSlides)
//     })
// })
/* --------------------------------------------------------- end partners mobile carousel --------------------------- */
/* --------------------------------------------------------- partners mobile accordion ------------------------------ */
// $(function () {
//     $(function() {
//         $(".partners_mobile_link").click(function(event) {
//             event.preventDefault()
//
//             var dis = $(this)
//             var acr_box = dis.closest(".partners_mobile_links")
//
//             if (!$(this).hasClass("active-accordion")) {
//                 $(".partners_mobile_link").removeClass("active-accordion")
//                 $(this).addClass("active-accordion")
//             }
//             else {
//                 $(this).removeClass("active-accordion")
//             }
//         })
//     })
// })
//
// // // clear height of current slide
// $('.partners_mobile_links').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     $(".partners_mobile_link").removeClass("active-accordion")
// })
//
// // // making correct height of slide when one of slides is active
// $(".partners_mobile").click(function(event) {
//     var elem_height = $('.partners_mobile .slick-current').css('height')
//
//     $('.partners_mobile_links .draggable').css('height', elem_height)
// })
/* --------------------------------------------------------- end partners mobile accordion -------------------------- */

/* --------------------------------------------------------- footer mobile accordion -------------------------------- */

document_jq.on('click', '.footer_title', function() {
    var footer_conteiner = $(this).parent()

    if (footer_conteiner.hasClass('active')) {
        // close other tabs
        footer_conteiner.removeClass('active')
    } else {
        $('.footer_conteiner_9689').removeClass('active')
        footer_conteiner.addClass('active')
    }
});

/* --------------------------------------------------------- end footer mobile accordion ---------------------------- */

/* --------------------------------------------------------- services 2 tab content mobile -------------------------- */
document_jq.on('click', '.faq_tabs_link', function() {
    var faq_tabs_mobile_box = $(this).parent()

    if (faq_tabs_mobile_box.hasClass('active')) {
        // close other tab
        faq_tabs_mobile_box.removeClass('active')
    } else {
        $('.faq-tabs_mobile_box').removeClass('active')
        faq_tabs_mobile_box.addClass('active')
    }
})
/* --------------------------------------------------------- end services 2 tab content mobile ---------------------- */

/* --------------------------------------------------------- services 3 tab content mobile -------------------------- */
document_jq.on('click', '.tabs_link', function() {
    var faq_tabs_mobile_container = $(this).parent()

    if (faq_tabs_mobile_container.hasClass('active')) {
        // close other tab
        faq_tabs_mobile_container.removeClass('active')
    } else {
        $('.faq-tabs_mobile_container').removeClass('active')
        faq_tabs_mobile_container.addClass('active')
    }
})
/* --------------------------------------------------------- end services 3 tab content mobile ---------------------- */




