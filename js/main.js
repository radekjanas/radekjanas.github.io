/*------------------------------------------------------------------------------------------------------------*/
/*--------------------------------- Wywołanie funkcji po załadowaniu DOM -------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
    fullHeightSection();
    lineElementsPosition();
    hintMargin();
    boxContentSquare();
    centerBox();
    centerFewWordsAbout();
    setSkillBoxHeight();
    setSpriteSize();
    changeOpacityOnHover();
    setSkillDescriptionPos();
    clickedSkill();
    clickedProject();
    setSliderIndicatorsPos();
    showTitle();
    zoomIcon();
    smoothScroll();
    showMenu();
    underlineMenu();
    showElements();
});


/*------------------------------------------------------------------------------------------------------------*/
/*---------------- Ustawienie wysokości każdej sekcji strony na maksymalną wysokość viewportu ----------------*/
/*------------------------------------------------------------------------------------------------------------*/
function fullHeightSection() {

    // Warunek dotyczący szerokości viewportu
    var windowWidth = $(window).width();
    if (windowWidth > 991) {

        // Jeśli szerokość okna jest większa niż 991px to działają sekcje o wymiarach viewportu
        var viewportHeight = $(window).height();
        $('.section').css('height', viewportHeight);

    } else {

        // Jeśli szerokość okna jest mniejsza lub równa 991px to sekcje nie mają sztywno zdefiniowanych wymiarów
        $('.section').css('height', 'initial');

    }

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fullHeightSection, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------- Ustawienie wymiarów i marginesu dla .line-box .circle oraz pozycji dla pionowej osi -------------*/
/*------------------------------------------------------------------------------------------------------------*/
function lineElementsPosition() {

    // Zachowanie równej wysokości i szerokości dla elementu koła na pionowej osi
    var circleSize = $('.line-box .circle').outerWidth();
    $('.line-box .circle').css('height', circleSize);

    // Warunek dotyczący szerokości viewportu
    var windowWidth = $(window).width();
    if (windowWidth > 991) {

        // Wyrównanie położenia elementów .circle minusowym marginesem (tak aby znajdywały się na środku pełnoekranowej sekcji)
        $('.line-box').css('margin-top', -circleSize / 2);

        // Dla viewportu większego niż 991px pionowa oś jest położona przy lewej krawędzi ekranu więc jej dokładne położenie to połowa szerokości .circle plus szerokość .line
        var lineBoxWidth = $('.line-box .circle').outerWidth();
        $('.line').css('left', lineBoxWidth / 2 + 10);

    } else {

        // Dla viewportu mniejszego lub równego 991px nie działają pełnoekranowe sekcje a pionowa oś jest wyśrodkowana
        $('.line-box').css('margin-top', 'initial');
        $('.line').css('left', windowWidth / 2 - 5);

    }

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(lineElementsPosition, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*------------ Ustawienie marginesu ujemnego dla .skill-hint i .portfolio-hint aby je wyśrodkować ------------*/
/*------------------------------------------------------------------------------------------------------------*/
function hintMargin() {

    // Niewielki timeout aby zdążyły się przestawić wyrazy do kolejnych wierszy przy zmniejszaniu ekranu
    setTimeout(function () {

        // Margines dla .skill-hint
        var skillHintMargin = -$('.skill-hint').height() / 2;
        $('.skill-hint').css('margin-top', skillHintMargin);

        // Margines dla .portfolio-hint
        var portfolioHintMargin = -$('.portfolio-hint').height() / 2;
        $('.portfolio-hint').css('margin-top', portfolioHintMargin);

    }, 100);

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(hintMargin, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*----------- Ustawienie wysokości każdego .box-content takiej jak szerokość (zachowujemy kwadrat) -----------*/
/*------------------------------------------------------------------------------------------------------------*/
function boxContentSquare() {

    // Wyrównanie wysokości i szerokości dla wszystkich .box-content oprócz tych z sekcji #welcome (mają mniejszy rozmiar)
    var boxContentWidth = $('#about-me .box-content').outerWidth();
    $('.box-content').css('height', boxContentWidth);

    // Wyrównanie wysokości i szerokości dla .box-content z sekcji #welcome
    var titleBoxContentWidth = $('#welcome .box-content').outerWidth();
    $('#welcome .box-content').css('height', titleBoxContentWidth);

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(boxContentSquare, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*--------------------------- Wyśrodkowanie .box w sekcji oraz .content w .box -------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function centerBox() {

    var content = $('.content');
    var box = $('.box');
    var welcomeBox = $('#welcome .box');

    // Warunek dotyczący szerokości viewportu
    var windowWidth = $(window).width();
    if (windowWidth > 991) {

        // Dla desktopów środkujemy .box w sekcji za pomocą minusowego marginesu a następnie .content w .box (zachowujemy w ten sposób ramkę .box która ma 10px)
        var boxHeight = $('#about-me .box').height();
        box.css('margin-top', -boxHeight / 2);
        content.css({'height': boxHeight - 20, 'width': boxHeight - 20});

        // Dla desktopów środkujemy .box w sekcji #welcome za pomocą minusowego marginesu oraz nadajemy nagłówkom w .box odpowiedni line-height by je wyśrodkować w .box
        var welcomeBoxHeight = $('#welcome .box .box-content').outerHeight();
        welcomeBox.css('margin-top', -welcomeBoxHeight / 2);


    } else if (windowWidth > 767) {

        // Dla tabletów nie działają pełnoekranowe sekcje więc resetujemy minosowy margin-top przypisany w celu środkowania .box w sekcji oraz zachowujemy ramkę .box która ma 10px
        var boxHeight = $('#about-me .box').height();
        box.css('margin-top', 'initial');
        content.css({'height': boxHeight - 20, 'width': boxHeight - 20});

    } else {

        // Dla urządzeń mniejszych niż tablety także nie działają pełnoekranowe sekcje ale widok strony jest jednokolumnowy więc resetujemy marginesy ujemne oraz zachowujemy proporcje kwadratów .box
        var boxHeight = $('#about-me .box').height();
        box.css('margin-top', 'initial');
        content.css({'height': boxHeight, 'width': boxHeight});

    }

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(centerBox, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------------- Wyśrodkowanie tekstu w #few-words-about za pomocą ujemnego marginesu ----------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function centerFewWordsAbout() {

    var fewWordsAboutMargin = -$('#few-words-about').outerHeight() / 2;
    $('#few-words-about').css('margin-top', fewWordsAboutMargin);

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(centerFewWordsAbout, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*--------------------------------- Zachowanie kwadratowych .skill-box'ów ------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function setSkillBoxHeight() {

    var skillBoxWidth = $('.skill-box').outerWidth();
    $('.skill-box').css('height', skillBoxWidth);

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSkillBoxHeight, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*-------------------------- Responsywne obrazki w formie sprite'ów (w .skill-box) ---------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function setSpriteSize() {

    // Proporcje obrazka w formie sprite
    var imageWidth = 159;
    var imageHeight = 1431;
    var imageProportion = imageHeight / imageWidth;

    // Pobiera szerokość obszaru na zdjęcie (nowa szerokość zdjęcia)
    var skillBoxDimension = parseInt($('.skill-box').width(), 10);

    // Oblicza jaką wysokość powinno mieć zdjęcie aby zachować proporcję
    var newImageHeight = skillBoxDimension * imageProportion;

    // Ustawia wymiary zdjęcia w tle dostosowane do dostępnego obszaru na zdjęcie
    $('.equal').css('background-size', skillBoxDimension + 'px ' + newImageHeight + 'px');



    // Ustalanie pozycji elementów które chcemy wyświetlić
    var changeMultiplier = skillBoxDimension / imageWidth;

    // Pozycja html
    var defaultHtmlPos = -477;
    var newHtmlPos = defaultHtmlPos * changeMultiplier;
    $('.html').css('background-position', '0 ' + newHtmlPos + 'px');

    // Pozycja css
    var defaultCssPos = -318;
    var newCssPos = defaultCssPos * changeMultiplier;
    $('.css').css('background-position', '0 ' + newCssPos + 'px');

    // Pozycja sass
    var defaultSassPos = -636;
    var newSassPos = defaultSassPos * changeMultiplier;
    $('.sass').css('background-position', '0 ' + newSassPos + 'px');

    // Pozycja javascript
    var defaultJavascriptPos = -1113;
    var newJavascriptPos = defaultJavascriptPos * changeMultiplier;
    $('.javascript').css('background-position', '0 ' + newJavascriptPos + 'px');

    // Pozycja jquery
    var defaultJqueryPos = -1272;
    var newJqueryPos = defaultJqueryPos * changeMultiplier;
    $('.jquery').css('background-position', '0 ' + newJqueryPos + 'px');

    // Pozycja gulp
    var defaultGulpPos = -159;
    var newGulpPos = defaultGulpPos * changeMultiplier;
    $('.gulp').css('background-position', '0 ' + newGulpPos + 'px');

    // Pozycja bootstrap
    var defaultBootstrapPos = -954;
    var newBootstrapPos = defaultBootstrapPos * changeMultiplier;
    $('.bootstrap').css('background-position', '0 ' + newBootstrapPos + 'px');

    // Pozycja wordpress
    var defaultWordpressPos = -795;
    var newWordpressPos = defaultWordpressPos * changeMultiplier;
    $('.wordpress').css('background-position', '0 ' + newWordpressPos + 'px');

    // Pozycja photoshop
    var defaultPhotoshopPos = 0;
    var newPhotoshopPos = defaultPhotoshopPos * changeMultiplier;
    $('.photoshop').css('background-position', '0 ' + newPhotoshopPos + 'px');

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSpriteSize, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------------------------------- Kolorowe tło .skill-boxa po najechaniu myszą ----------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function changeOpacityOnHover() {

    $('.skill-box').hover(function () {
        $(this).find('.coloured-bg').addClass('visible');
    }, function () {
        $(this).find('.coloured-bg').removeClass('visible');
    });

}


/*------------------------------------------------------------------------------------------------------------*/
/*----- Wyśrodkowanie tekstu w .description (w zależności czy tekst jest w .pop-up czy .descriptions-box) ----*/
/*------------------------------------------------------------------------------------------------------------*/

// Zmienna globalna przechowująca zawsze obiekty .descriptions-box .skills (potrzebne do działania funkcji clickedSkill, która zmienia położenie tych elementów w DOM w zależności od szerokości ekranu)
var skills = $('.descriptions-box .skills');

// Zmienna globalna przechowująca zawsze obiekty .descriptions-box .projects (potrzebne do działania funkcji clickedProject, która zmienia położenie tych elementów w DOM w zależności od szerokości ekranu)
var projects = $('.descriptions-box .projects');



function setSkillDescriptionPos() {

    // Na początku usuwamy wszystkie elementy .skills i .projects z .descriptions-box i .pop-up (mogły tam zostać po zmniejszaniu wielkości ekranu). Mamy je oczywiście cały czas w zmiennych globalnych.
    $('.descriptions-box .skills, .pop-up .skills, .descriptions-box .projects, .pop-up .projects').remove();

    // Ustawiamy od razu wysokość .pop-up na pełną wysokość viewportu gdyż na nim będą wyświetlane teksty gdy szerokość viewportu będzie mniejsza lub równa 767px
    var windowHeight = $(window).height();
    $('.pop-up').css('height', windowHeight);

    // Warunek dotyczący szerokości viewportu
    var windowWidth = $(window).width();
    if (windowWidth > 767) {

        // Gdy szerokość viewportu jest większa niż 767px to przenosimy wszystkie opisy do .description box'ów
        skills.appendTo('#skills .descriptions-box');
        projects.appendTo('#portfolio .descriptions-box');

        // Ustalamy margines ujemny w celu wyśrodkowania każdego opisu umiejętności gdy znajduje się on w .description-box
        $('#skills .descriptions-box .description').each(function () {
            var skillDescriptionHeight = $(this).find('.skill-description').outerHeight();
            var skillTitleHeight = $(this).find('.skill-title').outerHeight();
            $(this).find('.skill-description').css('margin-top', -skillDescriptionHeight / 2 + skillTitleHeight / 2);
        });

        // Ustalamy margines ujemny w celu wyśrodkowania każdego opisu projektu gdy znajduje się on w .description-box
        $('#portfolio .descriptions-box .description').each(function () {
            var portfolioDescriptionHeight = $(this).find('.project-description').outerHeight();
            $(this).find('.project-description').css('margin-top', -portfolioDescriptionHeight / 2);
        });

    } else {

        // Gdy szerokość viewportu jest mniejsza lub równa 767px to przenosimy wszystkie opisy do .pop-up
        skills.appendTo('.pop-up');
        projects.appendTo('.pop-up');

        // Ustalamy margines ujemny w celu wyśrodkowania każdego opisu umiejętności gdy znajduje się on w .pop-up
        $('.pop-up .skills').each(function () {
            var skillDescriptionHeight = $(this).find('.skill-description').outerHeight();
            var skillTitleHeight = $(this).find('.skill-title').outerHeight();
            $(this).find('.skill-description').css('margin-top', -skillDescriptionHeight / 2 + skillTitleHeight / 2);
        });

        // Ustalamy margines ujemny w celu wyśrodkowania każdego opisu projektu gdy znajduje się on w .pop-up
        $('.pop-up .projects').each(function () {
            var portfolioDescriptionHeight = $(this).find('.project-description').outerHeight();
            $(this).find('.project-description').css('margin-top', -portfolioDescriptionHeight / 2);
        });

    }

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSkillDescriptionPos, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------------------- Mechanizm wyświetlania treści po kliknięciu w .skill-box ----------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

// Funkcja czyszcząca gdy treści umieszczone są w .descriptions-box'ach
function clearingBoxes() {

    // Dla umiejętności usuwamy zaznaczony .skill-box, wyłączamy wyświetlony opis w sąsiednim .box'ie i przywracamy element ze wskazówką dotyczącącą klikania w .skill-box. Usuwamy także dla każdego .description klasę .show-in-pop-up, która mogła pozostać po zmianie wielkości viewportu
    $('.skill-box').removeClass('clicked').find('.coloured-bg').removeClass('clicked-coloured');
    $('#skills .descriptions-box .description').removeClass('show show-in-pop-up');
    $('.skill-hint').addClass('show');

    // Dla projektów usuwamy zaznaczony .project, wyłączamy wyświetlony opis w sąsiednim .box'ie i przywracamy element ze wskazówką dotyczącą klikania w .carousel-inner. Usuwamy także dla każdego .description klasę .show-in-pop-up, która mogła pozostać po zmianie wielkości viewportu
    $('.item').removeClass('chosen');
    $('#portfolio .descriptions-box .description').removeClass('show show-in-pop-up');
    $('.portfolio-hint').addClass('show');
    // Usuwamy także klasy .above i .under z elementów nawigacji aby je przywrócić oraz usuwamy klasę .click z elementów .one i .two ("latające" okrągłe ramki po kliknięciu w projekt)
    $('.carousel-navigation').removeClass('above');
    $('.indicators-container').removeClass('under');
    $('.one, .two').removeClass('click');

}


// Funkcja czyszcząca gdy treści umieszczone są w .pop-up
function clearingPopUp() {

    // Dla umiejętności usuwamy zaznaczony .skill-box, zamykamy .pop-up oraz opis w .pop-up. Usuwamy także dla każdego .description klasę .show, która mogła pozostać po zmianie wielkości viewportu
    $('.skill-box').removeClass('clicked').find('.coloured-bg').removeClass('clicked-coloured');
    $('.pop-up').removeClass('show-pop-up');
    $('.pop-up .description').removeClass('show-in-pop-up show');

    // Dla projektów usuwamy zaznaczony .project, zamykamy .pop-up oraz opis w .pop-up. 
    $('.item').removeClass('chosen');
    $('.pop-up').removeClass('show-pop-up');
    $('.pop-up .description').removeClass('show-in-pop-up show');
    // Usuwamy także klasy .above i .under z elementów nawigacji aby je przywrócić oraz usuwamy klasę .click z elementów .one i .two ("latające" okrągłe ramki po kliknięciu w projekt)
    $('.carousel-navigation').removeClass('above');
    $('.indicators-container').removeClass('under');
    $('.one, .two').removeClass('click');

}


function clickedSkill() {

    // Zamykamy treści na początku i resetujemy klasy (ma znaczenie przy throttlingu)
    clearingBoxes();
    clearingPopUp();

    // Zamykamy treści po kliknięciu w krzyżyk oraz poza obszar .box-content
    $('html, #skills .close-description, .pop-up .close-description').click(function () {
        
        // Warunek dotyczący szerokości viewportu
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            
            // Przy viewporcie większym niż 767px treści są w .descriptions-box więc zamykamy treść w nich umieszczoną
            clearingBoxes();
            
        } else {
            
            // Przy viewporcie mniejszym lub równym 767px treści są w .pop-up więc zamykamy treść w nim umieszczoną
            clearingPopUp();
            
        }
        
    });


    // Wyświetlamy treść po kliknięciu w .skill-box
    $('.skill-box').click(function (event) {
        
        // Wyłączamy bubbling aby było możliwe kliknięcie w wybranego .skill-box'a
        event.stopPropagation();
        
        // Warunek dotyczący szerokości viewportu
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            
            // Gdy viewport jest większy niż 767px wyświetlamy treści w .descriptons-box
            // Po kliknięciu w wybrany .skill-box usuwamy wskazówkę dotyczącą klikania w .skill-box, ewentualny wciśnięty poprzedni .skill-box i powodujemy wciśnięcie nowowybranego przez nas .skill-boxa
            $('.skill-hint').removeClass('show');
            $('.skill-box').removeClass('clicked').find('.coloured-bg').removeClass('clicked-coloured');
            $(this).addClass('clicked').find('.coloured-bg').addClass('clicked-coloured');

            // Na podstawie klasy wciśniętego .skill-boxa pobieramy informację, który opis ma zostać wyświetlony
            var elementClasses = $(this).find('.gray-bg').attr('class');
            var classArray = elementClasses.split(' ');
            var identifier = classArray[1];
            var name = identifier + '-text';

            // Usuwamy poprzednio wyświetlony opis w .descriptions-box i wyświetlamy bieżący opis
            $('#skills .descriptions-box .description').removeClass('show');
            $('#skills .descriptions-box').find('.' + name).addClass('show');
            
        } else {
            
            // Gdy viewport jest mniejszy lub równy 767px wyświetlamy treści w .pop-up
            // Po kliknięciu w wybrany .skill-box usuwamy ewentualny wciśnięty poprzedni .skill-box i powodujemy wciśnięcie nowowybranego przez nas .skill-boxa. Uruchamiamy także .pop-up.
            $('.pop-up').addClass('show-pop-up');
            $('.skill-box').removeClass('clicked').find('.coloured-bg').removeClass('clicked-coloured');
            $(this).addClass('clicked').find('.coloured-bg').addClass('clicked-coloured');

            // Na podstawie klasy wciśniętego .skill-boxa pobieramy informację, który opis ma zostać wyświetlony
            var elementClasses = $(this).find('.gray-bg').attr('class');
            var classArray = elementClasses.split(' ');
            var identifier = classArray[1];
            var name = identifier + '-text';

            // Usuwamy poprzednio wyświetlony opis w .pop-up i wyświetlamy bieżący opis
            $('.pop-up .description').removeClass('show-in-pop-up');
            $('.pop-up').find('.' + name).addClass('show-in-pop-up');    

        }
        
    });


    // Usuwamy możliwość wyłączenia boxu po kliknięciu w opis w sąsiednim boxie albo w .pop-up'ie
    $('#skills .descriptions-box, .pop-up .description').click(function (event) {
        
        event.stopPropagation();
        
    });
}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(clickedSkill, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*------------------- Mechanizm wyświetlania treści po kliknięciu w .portfolio-carousel ----------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function clickedProject() {

    // Zamykamy treści na początku i resetujemy klasy (ma znaczenie przy throttlingu)
    clearingBoxes();
    clearingPopUp();

    // Zamykamy treści po kliknięciu w krzyżyk oraz poza obszar .box-content
    $('html, #portfolio .close-description, .pop-up .close-description').click(function () {
        
        // Warunek dotyczący szerokości viewportu
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            
            // Przy viewporcie większym niż 767px treści są w .descriptions-box więc zamykamy treść w nich umieszczoną
            clearingBoxes();
            
        } else {
            
            // Przy viewporcie mniejszym lub równym 767px treści są w .pop-up więc zamykamy treść w nim umieszczoną
            clearingPopUp();
            
        }
        
    });


    // Wyświetlamy treść po kliknięciu w .carousel-inner .item
    $('.item').click(function (event) {
        
        // Wyłączamy bubbling aby było możliwe kliknięcie w wybrany .item
        event.stopPropagation();
        
        // Warunek dotyczący szerokości viewportu
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            
            // Gdy viewport jest większy niż 767px wyświetlamy treści w .descriptons-box
            // Po kliknięciu w wybrany .item usuwamy wskazówkę dotyczącą klikania w .carousel-inner, ewentualny wciśnięty poprzedni .item i powodujemy wciśnięcie nowowybranego przez nas .item'u
            $('.portfolio-hint').removeClass('show');
            $('.item').removeClass('chosen');
            $(this).addClass('chosen');
            // Po kliknięciu w .item chowa się nawigacja oraz pojawia się animacja ramek .one i .two (druga ramka zaczyna swoją animację po 160ms od pierwszej)
            $('.carousel-navigation').addClass('above');
            $('.indicators-container').addClass('under');
            $('.one').addClass('click');
            setTimeout(function () {
                $('.two').addClass('click');
            }, 160);

            // Na podstawie id wciśniętego .item'u pobieramy informację, który opis ma zostać wyświetlony
            var elementId = $(this).attr('id');

            // Usuwamy poprzednio wyświetlony opis w .descriptions-box i wyświetlamy bieżący opis
            $('#portfolio .descriptions-box .description').removeClass('show');
            $('#portfolio .descriptions-box').find('.' + elementId).addClass('show');
            
        } else {
            
            // Gdy viewport jest mniejszy lub równy 767px wyświetlamy treści w .pop-up
            // Po kliknięciu w wybrany .item usuwamy ewentualny wciśnięty poprzedni .item i powodujemy wciśnięcie nowowybranego przez nas .item'u. Uruchamiamy także .pop-up.
            $('.pop-up').addClass('show-pop-up');
            $('.item').removeClass('chosen');
            $(this).addClass('chosen');
            // Po kliknięciu w .item chowa się nawigacja oraz pojawia się animacja ramek .one i .two (druga ramka zaczyna swoją animację po 160ms od pierwszej)
            $('.carousel-navigation').addClass('above');
            $('.indicators-container').addClass('under');
            $('.one').addClass('click');
            setTimeout(function () {
                $('.two').addClass('click');
            }, 160);

            // Na podstawie id wciśniętego .item'u pobieramy informację, który opis ma zostać wyświetlony
            var elementId = $(this).attr('id');

            // Usuwamy poprzednio wyświetlony opis w .pop-up'ie i wyświetlamy bieżący opis
            $('.pop-up .description').removeClass('show-in-pop-up');
            $('.pop-up').find('.' + elementId).addClass('show-in-pop-up');
        
        }
        
    });


    // Usuwamy możliwość wyłączenia boxu po kliknięciu w opis w sąsiednim boxie albo w .pop-up'ie
    $('#portfolio .descriptions-box, .pop-up .description').click(function (event) {
        
        event.stopPropagation();
        
    });
    
}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(clickedProject, 250);
    });
}(jQuery));








/*------------------------------------------------------------------------------------------------------------*/
/*------------------------------ Wyśrodkowanie indicators w sliderze portfolio -------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function setSliderIndicatorsPos() {
    
    var indicatorsHeight = $('.carousel-indicators').height();
    var indicatorsContainerHeight = $('.indicators-container').height();
    $('.carousel-indicators').css('top', (indicatorsContainerHeight - indicatorsHeight) / 2);
    
}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSliderIndicatorsPos, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------------------- Slider z portfolio - powiększanie tytułu slajdu na hoverze --------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function showTitle() {
    
    $('.carousel-inner .item').hover(function () {
        
        if ($(this).hasClass('chosen')) {
            
            return;
            
        } else {
            
            $(this).find('.project-title-circle').addClass('show-slide-title');
            
        }
        
    }, function () {
        
        $(this).find('.project-title-circle').removeClass('show-slide-title');
        
    });
    
}


/*------------------------------------------------------------------------------------------------------------*/
/*---------------- Powiększanie ikon social media w kontakcie po najechaniu na nie myszą ---------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function zoomIcon() {

    // Warunek dotyczący szerokości viewportu
    var windowWidth = $(window).width();
    if (windowWidth > 991) {
        
        // Dla desktopów uaktywniamy transition po najechaniu kursorem na daną ikonę serwisu społecznościowego
        $('.social-media').hover(function () {

            if ($(this).attr('id') == 'linkedin') {

                $('#linkedin').addClass('majority');
                $('#goldenline').addClass('minority');

            } else {

                $('#goldenline').addClass('majority');
                $('#linkedin').addClass('minority');

            }

        }, function () {

            $('.social-media').removeClass('majority minority');

        });
        
    } else {
        
        $('.social-media').removeClass('majority minority');
        
    }

}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(zoomIcon, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*---------------------------------- Płynne przewijanie po kotwicach na stronie ------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function smoothScroll() {
    
    $('.scroll').click(function (event) {
        
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
        
    });
    
}


/*------------------------------------------------------------------------------------------------------------*/
/*------------------------------------- Sterowanie wysuwaniem mobilnego menu ---------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function showMenu() {
    $('.hamburger-button').click(function () {
        
        if ($('nav, .hamburger-button').hasClass('visible-menu')) {
            
            $('nav, .hamburger-button').removeClass('visible-menu');
            
        } else {
            
            $('nav, .hamburger-button').addClass('visible-menu');
            
        }
        
    });
}


/*------------------------------------------------------------------------------------------------------------*/
/*------------------------- Podkreślanie pozycji w menu w zależności od wartości scrolla ---------------------*/
/*------------------------------------------------------------------------------------------------------------*/
function underlineMenu() {
    
    // Wartość połowy wysokości sekcji (od połowy każdej sekcji będzie się zaczynało transition podkreślające pozycję w menu)
    var halfSectionHeight = $('.section').height() / 2;
    
    // Zbiór punktów początkowych dla rozpoczęcia transition (dla każdej sekcji)
    var welcomePoint = $('#welcome').offset().top - halfSectionHeight;
    var aboutMePoint = $('#about-me').offset().top - halfSectionHeight;
    var skillsPoint = $('#skills').offset().top - halfSectionHeight;
    var portfolioPoint = $('#portfolio').offset().top - halfSectionHeight;
    var contactPoint = $('#contact').offset().top - halfSectionHeight;

    // Uruchamiamy przy onscrollu funkcję podkreślania aktualnej pozycji w menu w zależności od scrollTop'a
    $(window).on('scroll', scrollingMenuUnderline);


    // Funkcja podkreślania aktualnej pozycji w menu w zależności od scrollTop'a
    function scrollingMenuUnderline() {
        
        // Pobieramy aktualną wartość scrollTop
        var actualScroll = $(document).scrollTop();
        
        // W zależności od wartości scrollTopa podkreślamy odpowiednią sekcję w menu
        if (actualScroll >= welcomePoint && actualScroll < aboutMePoint) {
            
            $('nav ul li a span').removeClass('underlined');
            $('nav ul li a[href="#welcome"] span').addClass('underlined');
            
        } else if (actualScroll >= aboutMePoint && actualScroll < skillsPoint) {
            
            $('nav ul li a span').removeClass('underlined');
            $('nav ul li a[href="#about-me"] span').addClass('underlined');
            
        } else if (actualScroll >= skillsPoint && actualScroll < portfolioPoint) {
            
            $('nav ul li a span').removeClass('underlined');
            $('nav ul li a[href="#skills"] span').addClass('underlined');
            
        } else if (actualScroll >= portfolioPoint && actualScroll < contactPoint) {
            
            $('nav ul li a span').removeClass('underlined');
            $('nav ul li a[href="#portfolio"] span').addClass('underlined');
            
        } else {
            
            $('nav ul li a span').removeClass('underlined');
            $('nav ul li a[href="#contact"] span').addClass('underlined');
            
        }
        
    }


    // Funkcja, która przy kliknięciu w daną pozycję w menu zatrzymuje działanie funkcji scrollingMenuUnderline, usuwa aktualne podkreślenie pozycji w menu i podkreśla pozycję, w którą kliknęliśmy. Funkcja scrollingMenuUnderline jest włączana ponownie po czasie 500ms - jest to czas równy trwaniu funkcji smoothScroll (chodzi tu o to aby podczas przewijania do wybranej pozycji w menu nie podkreślały się żadne pozycje "po drodze".
    $('nav ul li a').click(function () {
        
        if ($(this).attr('href') == '#welcome') {
            
            $(window).off('scroll', scrollingMenuUnderline);
            $('nav ul li a span').removeClass('underlined');
            $(this).find('span').addClass('underlined');
            setTimeout(function () {
                $(window).on('scroll', scrollingMenuUnderline);
            }, 500);
            
        } else if ($(this).attr('href') == '#about-me') {
            
            $(window).off('scroll', scrollingMenuUnderline);
            $('nav ul li a span').removeClass('underlined');
            $(this).find('span').addClass('underlined');
            setTimeout(function () {
                $(window).on('scroll', scrollingMenuUnderline);
            }, 500);
            
        } else if ($(this).attr('href') == '#skills') {
            
            $(window).off('scroll', scrollingMenuUnderline);
            $('nav ul li a span').removeClass('underlined');
            $(this).find('span').addClass('underlined');
            setTimeout(function () {
                $(window).on('scroll', scrollingMenuUnderline);
            }, 500);
            
        } else if ($(this).attr('href') == '#portfolio') {
            
            $(window).off('scroll', scrollingMenuUnderline);
            $('nav ul li a span').removeClass('underlined');
            $(this).find('span').addClass('underlined');
            setTimeout(function () {
                $(window).on('scroll', scrollingMenuUnderline);
            }, 500);
            
        } else if ($(this).attr('href') == '#contact') {
            
            $(window).off('scroll', scrollingMenuUnderline);
            $('nav ul li a span').removeClass('underlined');
            $(this).find('span').addClass('underlined');
            setTimeout(function () {
                $(window).on('scroll', scrollingMenuUnderline);
            }, 500);
            
        }
        
    });
    
}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(underlineMenu, 250);
    });
}(jQuery));


/*------------------------------------------------------------------------------------------------------------*/
/*------------- Pojawianie się kolejnych elementów na stronie po osiągnięciu pewnego scrollTopa --------------*/
/*------------------------------------------------------------------------------------------------------------*/
function showElements() {
    
    // Pobranie szerokości viewportu (będzie potrzebne gdyż pojawią się warunki dotyczące szerokości)
    var windowWidth = $(window).width();
    
    // Wartość połowy wysokości sekcji (od połowy każdej sekcji będzie się zaczynało transition wprowadzające kolejne elementy)
    var halfSectionHeight = $('.section').height() / 2;
    
    // Zbiór punktów początkowych dla rozpoczęcia transition (dla każdej sekcji oprócz pierwszej gdyż ona pojawia się od razu na początku)
    var aboutMePoint = $('#about-me').offset().top - halfSectionHeight;
    var skillsPoint = $('#skills').offset().top - halfSectionHeight;
    var portfolioPoint = $('#portfolio').offset().top - halfSectionHeight;
    var contactPoint = $('#contact').offset().top - halfSectionHeight;

    // Pojawienie się elementów pierwszej sekcji po wczytaniu strony
    $('#welcome .line-box .circle').addClass('show-circle');
    $('#welcome .box').addClass('opaque');

    // Warunek dotyczący szerokości viewportu
    if (windowWidth < 768) {
        
        // Dla mniejszych urządzeń linia pionowa będzie pojawiać się wraz z kolejnymi elementami
        $('#welcome .line').addClass('show-line');
        
    } else {
        
        // Dla tabletów i desktopów linia pionowa jest widoczna w całości cały czas od załadowania strony
        $('#welcome .line').removeClass('show-line');
        
    }

    // Funkcja działająca przy scrollowaniu okna, która w zależności od wartości scrollTop powoduje pojawianie się kolejnych elementów strony
    $(window).scroll(function () {
        
        // Pobieramy aktualną wartość scrollTop
        var actualScroll = $(document).scrollTop();

        // W zależności od wartości scrollTop wyświetlamy kolejne elementy strony
        if (actualScroll >= aboutMePoint) {
            
            $('#about-me .line-box .circle').addClass('show-circle');
            $('#about-me .box').addClass('opaque');

            if (windowWidth < 768) {
                
                $('#about-me .line').addClass('show-line');
                
            } else {
                
                $('#about-me .line').removeClass('show-line');
                
            }
            
        }

        if (actualScroll >= skillsPoint) {
            
            $('#skills .line-box .circle').addClass('show-circle');
            $('#skills .box').addClass('opaque');

            if (windowWidth < 768) {
                
                $('#skills .line').addClass('show-line');
                
            } else {
                
                $('#skills .line').removeClass('show-line');
                
            }
            
        }

        if (actualScroll >= portfolioPoint) {
            
            $('#portfolio .line-box .circle').addClass('show-circle');
            $('#portfolio .box').addClass('opaque');

            if (windowWidth < 768) {
                
                $('#portfolio .line').addClass('show-line');
                
            } else {
                
                $('#portfolio .line').removeClass('show-line');
                
            }
            
        }

        if (actualScroll >= contactPoint) {
            
            $('#contact .line-box .circle').addClass('show-circle');
            $('#contact .box').addClass('opaque');

            if (windowWidth < 768) {
                
                $('#contact .line').addClass('show-line');
                
            } else {
                
                $('#contact .line').removeClass('show-line');
                
            }
            
        }
        
    });
}

// Throttling dla funkcji
(function ($) {
    var resizeTimer;

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(showElements, 250);
    });
}(jQuery));
