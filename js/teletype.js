//Option 2 - From http://onehackoranother.com/projects/jquery/jquery-grab-bag/text-effects.html
(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this),
                str = $ele.text(),
                progress = 0;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress++) + (progress & 1 ? '' : ''));
                if (progress >= str.length) clearInterval(timer);
            }, 75);
        });
        return this;
    };
})(jQuery);

$(".text-about").typewriter();
