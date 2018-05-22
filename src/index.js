// import FontsCom from './providers/fonts.com';
// import MyFonts from './providers/myfonts';
// import Googlefonts from './providers/googlefonts';
import TypeKit from './providers/typekit';

const fontProviders = {
	// 'fonts.com': FontsCom,
	// myfonts: MyFonts,
	// googlefonts: Googlefonts,
	typekit: TypeKit,
};

function getProvider(provider, ...restArguments) {
	if (provider in fontProviders) {
		fontProviders[provider](...restArguments);
	} else {
		console.warn(`[SkyFonts] did not find "${provider}" in implemented font providers.`);
	}
}

export default getProvider;
