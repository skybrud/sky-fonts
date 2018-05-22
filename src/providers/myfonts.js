function init() {
	/**
	 * Import modified MyFonts MyFontsWebfontsKit.css
	 * asynchronously ("clever" hack, so the blocking
	 * @import statement is delayed)
	 */
	require.ensure([], (require) => {
		require('../external/MyFontsWebfontsKit.css');
	}, 'myfonts');
}

export default init;
