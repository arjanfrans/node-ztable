# node-ztables
[![NPM](https://nodei.co/npm/ztable.png)](https://www.npmjs.com/package/ztable)

[![Build Status](https://travis-ci.org/arjanfrans/node-ztable.svg?branch=master)](https://travis-ci.org/arjanfrans/node-ztable)
[![Coverage Status](https://coveralls.io/repos/arjanfrans/node-ztable/badge.svg)](https://coveralls.io/r/arjanfrans/node-ztable)

A simple module to convert z-scores to percentiles. Example usage:

```Node
var ztable = require('ztable');

var zscore = -1.3452;

console.log(ztable(zscore));
// => 0.0901
```
