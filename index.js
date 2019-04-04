const http = require('http');
const request = require('./modules/request')
const memory_cache = require('./modules/memory_cache');
const cache = new memory_cache(60 * 10, 10000);
