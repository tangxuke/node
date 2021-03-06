'use strict';

const common = require('../../common');
const assert = require('assert');
const { testResolveAsync } = require(`./build/${common.buildType}/binding`);

let called = false;
testResolveAsync().then(() => { called = true; });

setTimeout(() => { assert(called); }, common.platformTimeout(50));
