$(document).ready(function () {
    $(".aside_title .title").on("click", function () {
        $(this).toggleClass("active").parent().next().slideToggle();
    });
    $(".filter, .close").on("click", function () {
        $(".aside").toggleClass("active");
    });
    if ($('.range').length) {
        const slider = new Rangeable(".range input", {
            multiple: true,
            min: 1,
            max: 50,
            step: "0.30",
            value: [1, 50],
            tooltips: true,
            onInit: setDisplay,
            onChange: setDisplay,
        });
    
        function setDisplay(values) {
            const numbers = document.querySelectorAll(".range_inner .text");
            
            numbers[0].textContent = `${values[0]} ч`;
            numbers[1].textContent = `${values[1]} ч`;
        }
    }
    
    
    // modal.addEventListener("mousedown", e => {
    //     e.preventDefault();
    //     modal.classList.remove("active");
    // });

    // select drop
    (function selectDrop() {
        // radio
        $.each($(".main-form__list-item"), function () {
            if ($(this).find("input").prop("checked") == true) {
                $(this).addClass("active");
            }
        });

        $(document).on("click", ".main-form__list-item label", function () {
            var radioItem = $(this);
            radioItem
            .parents(".main-form__wrapper")
            .find(".main-form__list-item label")
            .parent()
            .removeClass("active");
            radioItem
            .parents(".main-form__wrapper")
            .find(".main-form__list-item input")
            .prop("checked", false);
            radioItem.parent().toggleClass("active");
            radioItem.parent().find("input").prop("checked", true);
            return false;
        });

        // change select (span)
        $(".main-form__wrapper label").click(function () {
            let newSort = $(this).text();
            $(this).parents(".main-form__wrapper").find("span").text(newSort);
        });

        // drop select function
        $(".main-form__drop .main-form__offer").click(function () {
            $(this).parent().toggleClass("active");
        });

        // remove visible
        $(".main-form__list-item label").click(function () {
            $(this).parents(".main-form__drop").removeClass("active");
        });
    }());

    // count people
    (function countPeople() {
        let countMinus = $(".count-minus");
        let countPlus = $(".count-plus");

        countMinus.click(functionMinus);
        countPlus.click(functionPlus);

        function functionMinus() {
            let navCount = $(this).parent().find("input");
            if (navCount.val() > 0) {
            navCount.val(+navCount.val() - 1);
            navCount.trigger("input");
            }
        }

        function functionPlus() {
            let navCount = $(this).parent().find("input");
            navCount.val(+navCount.val() + 1);
            navCount.trigger("input");
        }
    }());

    // dataToggle
    (function dataToggle() {
        $('.data-js').click(function() {
            $(this).parent().toggleClass('active');
        });
    }());

    // popup
    (function popup() {
        $('.buy-btn').click(function(e) {
            e.preventDefault();
            $('.buy-popup').addClass('show');
        });

        $('.popup-close').click(function() {
            $('.popup').removeClass('show');
        });
    }());

    // radio button
    (function radioButton() {
        $.each($('.radio-item'), function() {
            if($(this).find('input').prop('checked')==true){
                $(this).addClass('active');
            }
        });
    
        $(document).on('click', '.radio-item', function() {
            var thiss = $(this);
            thiss.parents('.radio-wrapper').find('.radio-item').removeClass('active');
            thiss.parents('.radio-wrapper').find('.radio-item input').prop('checked',false);
            thiss.toggleClass('active');
            thiss.find('input').prop('checked',true);
            return false;
        });
    }());

    function phoneCountryInput() {
        if ($('#phone-country').length) {
            let input = document.querySelector("#phone-country");
            window.intlTelInput(input, {
            autoHideDialCode:false,
            autoPlaceholder:"aggressive",
            placeholderNumberType:"MOBILE",
            allowExtensions: false,
            allowPlus: true,
            autoFormat: true,
            onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk", 
                "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv", 
                "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro", 
                "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
            preferredCountries: ['ru', 'ua', 'by'],
            nationalMode: false,
            utilsScript:'js/utils.js'
            });
        }
    }
    phoneCountryInput();

    // menu
    (function menu() {
        $('.header-toggle').click(function() {
            $('.header').toggleClass('menu-open');
        });
    }());
});