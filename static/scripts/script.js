$(document).ready(function() {
    let clicked = 0
    $('.search-icon').click(function() {
        clicked += 1;
        $('.hidden-search-input').css('transition', 'transform 0.5s ease-in-out')
                        .css('max-width', '100%')
                        .css('display', 'block')
                        .css('transform', 'translateX(-75%)');
        $('.hidden-search-input input[type="search"]').focus();

    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('.hidden-search-input').length && !$target.closest('.search-icon').length) {
            $('.hidden-search-input').css('transition', 'transform 0.5s ease-in-out')
                        .css('max-width', '0')
                        .css('display', 'none')
                        .css('transform', 'translateX(0)');

    }
    }
    );
    var editor = CodeMirror.fromTextArea($("#code-editor")[0], {
    lineNumbers: true,
    mode: "css",
    theme: "default"
    });
});
