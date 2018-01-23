function init(projectId) {
	if (!projectId) {
		console.warn('Fonts.com mtiFontTrackingCode.js script was initiated without project id');
	}
	/**
	 * Import fonts.com mtiFontTrackingCode.js script
	 * (script just requests css on fast.fonts.net
	 * server to give them font usage analytics)
	 */
	window.MTIProjectId = projectId;
	require('../external/mtiFontTrackingCode.js');
}

export default init;
