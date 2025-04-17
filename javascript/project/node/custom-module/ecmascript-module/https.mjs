/**
 * Node treats JavaScript as CommandJs module
 * We need to explicitly tell node to treat as ECMAScript Module using .mjs extension or package.json
 */

import { send } from './request.mjs';
import { receive } from './response.mjs';

function communicate() {
    send('What is the name of your country?');
    receive('Bangladesh')
}

communicate()
