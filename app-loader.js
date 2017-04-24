if (Meteor.isServer) {
	Inject.rawHead("loader", Assets.getText('loader.html'));
}


if (Meteor.isClient) {
	Meteor.autorun(function () {
        if ((Meteor.status().status === "connected")  && ($("#inject-loader-wrapper").length)) {
            setTimeout(function() {
			$("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });
		}, 500);
	  }
        });
}
