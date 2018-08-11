import { injectGlobal } from 'react-emotion';
import { Theme } from './Theme';

injectGlobal `
html,
body,
ul {
  margin: 0;
  padding: 0;
}

figure,
blockquote,
p {
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: currentColor;
  text-decoration: none;
}

a:hover,
a:focus {
  color: currentColor;
  text-decoration: none;
}

* {
  color: ${Theme.color};
}

`;
