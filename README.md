# sky-fonts

A small service containing different font services embedding. 

## Usage
Import the service `import SkyFont from 'SkyFonts'` and call the service like this:
`SkyFonts('providerName', [opt: serviceId]);`

supported providers: 'fonts.com', 'typekit', 'googlefonts', 'myfonts'
serviceId: only needed if the service require a id like typekit or fonts.com

### Example code
Typekit:
```js
import SkyFonts from 'sky-fonts';

SkyFonts('typekit', '{insert kit id here}');
```

fonts.com:
```js
import SkyFonts from 'sky-fonts';

SkyFonts('fonts.com', '{insert MTIProjectId here}');
```

## Credits

This module is made by the Frontenders at [skybrud.dk](http://www.skybrud.dk/). Feel free to use it in any way you want. Feedback, questions and bugreports should be posted as issues. Pull-requests appreciated!
