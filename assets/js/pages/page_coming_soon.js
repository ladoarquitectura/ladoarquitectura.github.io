var PageComingSoon = function () {
    return {
      //Coming Soon
      initPageComingSoon: function () {
			var newYear = new Date();
			newYear = new Date(2018, 3, 6, 6, 0, 0, 0);
			$('#defaultCountdown').countdown({until: newYear})
        }
    };
}();
