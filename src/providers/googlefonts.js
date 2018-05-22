import WebFont from 'webfontloader';

function init(familyArray) {
	WebFont.load({
		google: {
			families: familyArray,
		},
	});
}

export default init;
