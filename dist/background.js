/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, setImmediate) {var require;var require;/*!

JSZip v3.5.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(t){if(true)module.exports=t();else {}}(function(){return function s(a,o,h){function u(r,t){if(!o[r]){if(!a[r]){var e="function"==typeof require&&require;if(!t&&e)return require(r,!0);if(l)return l(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return u(e||t)},n,n.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,r){"use strict";var c=t("./utils"),d=t("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,i,n,s,a,o,h=[],u=0,l=t.length,f=l,d="string"!==c.getTypeOf(t);u<t.length;)f=l-u,i=d?(e=t[u++],r=u<l?t[u++]:0,u<l?t[u++]:0):(e=t.charCodeAt(u++),r=u<l?t.charCodeAt(u++):0,u<l?t.charCodeAt(u++):0),n=e>>2,s=(3&e)<<4|r>>4,a=1<f?(15&r)<<2|i>>6:64,o=2<f?63&i:64,h.push(p.charAt(n)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(t){var e,r,i,n,s,a,o=0,h=0,u="data:";if(t.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(t.charAt(t.length-1)===p.charAt(64)&&f--,t.charAt(t.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=d.uint8array?new Uint8Array(0|f):new Array(0|f);o<t.length;)e=p.indexOf(t.charAt(o++))<<2|(n=p.indexOf(t.charAt(o++)))>>4,r=(15&n)<<4|(s=p.indexOf(t.charAt(o++)))>>2,i=(3&s)<<6|(a=p.indexOf(t.charAt(o++))),l[h++]=e,64!==s&&(l[h++]=r),64!==a&&(l[h++]=i);return l}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var i=t("./external"),n=t("./stream/DataWorker"),s=t("./stream/DataLengthProbe"),a=t("./stream/Crc32Probe");s=t("./stream/DataLengthProbe");function o(t,e,r,i,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var t=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,r){return t.pipe(new a).pipe(new s("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new s("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(t){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var i=t("./utils");var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==i.getTypeOf(t)?function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}(0|e,t,t.length,0):function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e.charCodeAt(a))];return-1^t}(0|e,t,t.length,0):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var i=null;i="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:i}},{lie:37}],7:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),s=t("./utils"),a=t("./stream/GenericWorker"),o=i?"uint8array":"array";function h(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,t.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(t){return new h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function A(t,e){var r,i="";for(r=0;r<e;r++)i+=String.fromCharCode(255&t),t>>>=8;return i}function i(t,e,r,i,n,s){var a,o,h=t.file,u=t.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),d=I.transformTo("string",O.utf8encode(h.name)),c=h.comment,p=I.transformTo("string",s(c)),m=I.transformTo("string",O.utf8encode(c)),_=d.length!==h.name.length,g=m.length!==c.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(x.crc32=t.crc32,x.compressedSize=t.compressedSize,x.uncompressedSize=t.uncompressedSize);var S=0;e&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===n?(C=798,z|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(t){return 63&(t||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+d,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(i,4)+f+b+p}}var I=t("../utils"),n=t("../stream/GenericWorker"),O=t("../utf8"),B=t("../crc32"),R=t("../signature");function s(t,e,r,i){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,n),s.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,n.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-i-1))/r:100}}))},s.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=i(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=i(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return R.DATA_DESCRIPTOR+A(t.crc32,4)+A(t.compressedSize,4)+A(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,i=function(t,e,r,i,n){var s=I.transformTo("string",n(i));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(t,2)+A(t,2)+A(e,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(t){var e=this._sources;if(!n.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},s.prototype.lock=function(){n.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var u=t("../compressions"),i=t("./ZipFileWorker");r.generateWorker=function(t,a,e){var o=new i(a.streamFiles,e,a.platform,a.encodeFileName),h=0;try{t.forEach(function(t,e){h++;var r=function(t,e){var r=t||e,i=u[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(e.options.compression,a.compression),i=e.options.compressionOptions||a.compressionOptions||{},n=e.dir,s=e.date;e._compressWorker(r,i).withStreamInfo("file",{name:t,dir:n,date:s,comment:e.comment||"",unixPermissions:e.unixPermissions,dosPermissions:e.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(t){o.error(t)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var t=new i;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.5.0",i.loadAsync=function(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var i=t("./utils"),n=t("./external"),o=t("./utf8"),h=(i=t("./utils"),t("./zipEntries")),s=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function l(i){return new n.Promise(function(t,e){var r=i.decompressed.getContentWorker().pipe(new s);r.on("error",function(t){e(t)}).on("end",function(){r.streamInfo.crc32!==i.decompressed.crc32?e(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}e.exports=function(t,s){var a=this;return s=i.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",t,!0,s.optimizedBinaryString,s.base64).then(function(t){var e=new h(s);return e.load(t),e}).then(function(t){var e=[n.Promise.resolve(t)],r=t.files;if(s.checkCRC32)for(var i=0;i<r.length;i++)e.push(l(r[i]));return n.Promise.all(e)}).then(function(t){for(var e=t.shift(),r=e.files,i=0;i<r.length;i++){var n=r[i];a.file(n.fileNameStr,n.decompressed,{binary:!0,optimizedBinaryString:!0,date:n.date,dir:n.dir,comment:n.fileCommentStr.length?n.fileCommentStr:null,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions,createFolders:s.createFolders})}return e.zipComment.length&&(a.comment=e.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../stream/GenericWorker");function s(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}i.inherits(s,n),s.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var n=t("readable-stream").Readable;function i(t,e,r){n.call(this,e),this._helper=t;var i=this;t.on("data",function(t,e){i.push(t)||i._helper.pause(),r&&r(e)}).on("error",function(t){i.emit("error",t)}).on("end",function(){i.push(null)})}t("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},e.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(t,e){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new Buffer(t,e)},allocBuffer:function(t){if(Buffer.alloc)return Buffer.alloc(t);var e=new Buffer(t);return e.fill(0),e},isBuffer:function(t){return Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function s(t,e,r){var i,n=u.getTypeOf(e),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=g(t)),s.createFolders&&(i=_(t))&&b.call(this,i,!0);var a="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var o=null;o=e instanceof d||e instanceof l?e:p.isNode&&p.isStream(e)?new m(t,e):u.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var h=new c(t,o,s);this.files[t]=h}var n=t("./utf8"),u=t("./utils"),l=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),f=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),o=t("./generate"),p=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),_=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},g=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:f.createFolders,t=g(t),this.files[t]||s.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var i={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,i;for(e in this.files)this.files.hasOwnProperty(e)&&(i=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,i))},filter:function(r){var i=[];return this.forEach(function(t,e){r(t,e)&&i.push(e)}),i},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,s.call(this,t,e,r),this;if(h(t)){var i=t;return this.filter(function(t,e){return!e.dir&&i.test(t)})}var n=this.files[this.root+t];return n&&!n.dir?n:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(t,e){return e.dir&&r.test(t)});var t=this.root+r,e=b.call(this,t),i=this.clone();return i.root=e.name,i},remove:function(r){r=this.root+r;var t=this.files[r];if(t||("/"!==r.slice(-1)&&(r+="/"),t=this.files[r]),t&&!t.dir)delete this.files[r];else for(var e=this.filter(function(t,e){return e.name.slice(0,r.length)===r}),i=0;i<e.length;i++)delete this.files[e[i].name];return this},generate:function(t){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=u.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";e=o.generateWorker(this,r,i)}catch(t){(e=new l("error")).error(t)}return new a(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=i},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===e&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.readData(4);return e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var i=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readAndCheckSignature:function(t){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var i=t("./Uint8ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var i=t("./ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../support"),s=t("./ArrayReader"),a=t("./StringReader"),o=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");e.exports=function(t){var e=i.getTypeOf(t);return i.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new o(t):n.uint8array?new h(i.transformTo("uint8array",t)):new s(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../utils");function s(t){i.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(s,i),s.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,i),s.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}i.inherits(s,n),s.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=i.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function i(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){"use strict";var h=t("../utils"),n=t("./ConvertWorker"),s=t("./GenericWorker"),u=t("../base64"),i=t("../support"),a=t("../external"),o=null;if(i.nodestream)try{o=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function l(t,o){return new a.Promise(function(e,r){var i=[],n=t._internalType,s=t._outputType,a=t._mimeType;t.on("data",function(t,e){i.push(t),o&&o(e)}).on("error",function(t){i=[],r(t)}).on("end",function(){try{var t=function(t,e,r){switch(t){case"blob":return h.newBlob(h.transformTo("arraybuffer",e),r);case"base64":return u.encode(e);default:return h.transformTo(t,e)}}(s,function(t,e){var r,i=0,n=null,s=0;for(r=0;r<e.length;r++)s+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(n=new Uint8Array(s),r=0;r<e.length;r++)n.set(e[r],i),i+=e[r].length;return n;case"nodebuffer":return Buffer.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(n,i),a);e(t)}catch(t){r(t)}i=[]}).resume()})}function f(t,e,r){var i=e;switch(e){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=e,this._mimeType=r,h.checkSupport(i),this._worker=t.pipe(new n(i)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}f.prototype={accumulate:function(t){return l(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,function(t){e.call(r,t.data,t.meta)}):this._worker.on(t,function(){h.delay(e,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,s){"use strict";for(var o=t("./utils"),h=t("./support"),r=t("./nodejsUtils"),i=t("./stream/GenericWorker"),u=new Array(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;u[254]=u[254]=1;function a(){i.call(this,"utf-8 decode"),this.leftOver=null}function l(){i.call(this,"utf-8 encode")}s.utf8encode=function(t){return h.nodebuffer?r.newBufferFrom(t,"utf-8"):function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=h.uint8array?new Uint8Array(o):new Array(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e}(t)},s.utf8decode=function(t){return h.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,i,n,s=t.length,a=new Array(2*s);for(e=r=0;e<s;)if((i=t[e++])<128)a[r++]=i;else if(4<(n=u[i]))a[r++]=65533,e+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&e<s;)i=i<<6|63&t[e++],n--;1<n?a[r++]=65533:i<65536?a[r++]=i:(i-=65536,a[r++]=55296|i>>10&1023,a[r++]=56320|1023&i)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(t=o.transformTo(h.uint8array?"uint8array":"array",t))},o.inherits(a,i),a.prototype.processChunk=function(t){var e=o.transformTo(h.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=e;(e=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),e.set(r,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var i=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}(e),n=e;i!==e.length&&(h.uint8array?(n=e.subarray(0,i),this.leftOver=e.subarray(i,e.length)):(n=e.slice(0,i),this.leftOver=e.slice(i,e.length))),this.push({data:s.utf8decode(n),meta:t.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,i),l.prototype.processChunk=function(t){this.push({data:s.utf8encode(t.data),meta:t.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,a){"use strict";var o=t("./support"),h=t("./base64"),r=t("./nodejsUtils"),i=t("set-immediate-shim"),u=t("./external");function n(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}a.newBlob=function(e,r){a.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(r)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(t,e,r){var i=[],n=0,s=t.length;if(s<=r)return String.fromCharCode.apply(null,t);for(;n<s;)"array"===e||"nodebuffer"===e?i.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(t){return!1}}()}};function f(t){var e=65536,r=a.getTypeOf(t),i=!0;if("uint8array"===r?i=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=s.applyCanBeUsed.nodebuffer),i)for(;1<e;)try{return s.stringifyByChunk(t,r,e)}catch(t){e=Math.floor(e/2)}return s.stringifyByChar(t)}function d(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}a.applyFromCharCode=f;var c={};c.string={string:n,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return c.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,r.allocBuffer(t.length))}},c.array={string:f,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(t)}},c.arraybuffer={string:function(t){return f(new Uint8Array(t))},array:function(t){return d(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(new Uint8Array(t))}},c.uint8array={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return r.newBufferFrom(t)}},c.nodebuffer={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return c.nodebuffer.uint8array(t).buffer},uint8array:function(t){return d(t,new Uint8Array(t.length))},nodebuffer:n},a.transformTo=function(t,e){if(e=e||"",!t)return e;a.checkSupport(t);var r=a.getTypeOf(e);return c[r][t](e)},a.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&r.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(t){var e,r,i="";for(r=0;r<(t||"").length;r++)i+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return i},a.delay=function(t,e,r){i(function(){t.apply(r||null,e||[])})},a.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},a.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},a.prepareContent=function(r,t,i,n,s){return u.Promise.resolve(t).then(function(i){return o.blob&&(i instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(i)))&&"undefined"!=typeof FileReader?new u.Promise(function(e,r){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=function(t){r(t.target.error)},t.readAsArrayBuffer(i)}):i}).then(function(t){var e=a.getTypeOf(t);return e?("arraybuffer"===e?t=a.transformTo("uint8array",t):"string"===e&&(s?t=h.decode(t):i&&!0!==n&&(t=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(t))),t):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),n=t("./utils"),s=t("./signature"),a=t("./zipEntry"),o=(t("./utf8"),t("./support"));function h(t){this.files=[],this.loadOptions=t}h.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var i=this.reader.readString(4)===e;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,i=this.zip64EndOfCentralSize-44;0<i;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(t<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(t);var e=t;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=e-r;if(0<i)this.isSignature(e,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(t){this.reader=i(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),u=t("./support");function l(t,e){this.options=t,this.loadOptions=e}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in h)if(h.hasOwnProperty(e)&&h[e].magic===t)return h[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,i,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),i=t.readData(r),this.extraFields[e]={id:e,length:r,value:i};t.setIndex(n)},handleUTF8:function(){var t=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=s.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=s.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function i(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=t("./stream/StreamHelper"),n=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),h=t("./stream/GenericWorker");i.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var i="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(e=e.pipe(new a.Utf8EncodeWorker)),!n&&i&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new h("error")).error(t)}return new s(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof o&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new n(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)i.prototype[u[f]]=l;e.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,l,e){(function(e){"use strict";var r,i,t=e.MutationObserver||e.WebKitMutationObserver;if(t){var n=0,s=new t(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var o=new e.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var t,e;i=!0;for(var r=h.length;r;){for(e=h,h=[],t=-1;++t<r;)e[t]();r=h.length}i=!1}l.exports=function(t){1!==h.push(t)||i||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var n=t("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],i=["PENDING"];function o(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=i,this.queue=[],this.outcome=void 0,t!==u&&c(this,t)}function h(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(e,r,i){n(function(){var t;try{t=r(i)}catch(t){return l.reject(e,t)}t===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,t)})}function d(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function c(e,t){var r=!1;function i(t){r||(r=!0,l.reject(e,t))}function n(t){r||(r=!0,l.resolve(e,t))}var s=p(function(){t(n,i)});"error"===s.status&&i(s.value)}function p(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=o).prototype.finally=function(e){if("function"!=typeof e)return this;var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})},o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){if("function"!=typeof t&&this.state===a||"function"!=typeof e&&this.state===s)return this;var r=new this.constructor(u);this.state!==i?f(r,this.state===a?t:e,this.outcome):this.queue.push(new h(r,t,e));return r},h.prototype.callFulfilled=function(t){l.resolve(this.promise,t)},h.prototype.otherCallFulfilled=function(t){f(this.promise,this.onFulfilled,t)},h.prototype.callRejected=function(t){l.reject(this.promise,t)},h.prototype.otherCallRejected=function(t){f(this.promise,this.onRejected,t)},l.resolve=function(t,e){var r=p(d,e);if("error"===r.status)return l.reject(t,r.value);var i=r.value;if(i)c(t,i);else{t.state=a,t.outcome=e;for(var n=-1,s=t.queue.length;++n<s;)t.queue[n].callFulfilled(e)}return t},l.reject=function(t,e){t.state=s,t.outcome=e;for(var r=-1,i=t.queue.length;++r<i;)t.queue[r].callRejected(e);return t},o.resolve=function(t){if(t instanceof this)return t;return l.resolve(new this(u),t)},o.reject=function(t){var e=new this(u);return l.reject(e,t)},o.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var i=t.length,n=!1;if(!i)return this.resolve([]);var s=new Array(i),a=0,e=-1,o=new this(u);for(;++e<i;)h(t[e],e);return o;function h(t,e){r.resolve(t).then(function(t){s[e]=t,++a!==i||n||(n=!0,l.resolve(o,s))},function(t){n||(n=!0,l.reject(o,t))})}},o.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,i=!1;if(!r)return this.resolve([]);var n=-1,s=new this(u);for(;++n<r;)a=t[n],e.resolve(a).then(function(t){i||(i=!0,l.resolve(s,t))},function(t){i||(i=!0,l.reject(s,t))});var a;return s}},{immediate:36}],38:[function(t,e,r){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var a=t("./zlib/deflate"),o=t("./utils/common"),h=t("./utils/strings"),n=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,d=0,c=8;function p(t){if(!(this instanceof p))return new p(t);this.options=o.assign({level:f,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==l)throw new Error(n[r]);if(e.header&&a.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=a.deflateSetDictionary(this.strm,i))!==l)throw new Error(n[r]);this._dict_set=!0}}function i(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||n[r.err];return r.result}p.prototype.push=function(t,e){var r,i,n=this.strm,s=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===u.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(s),n.next_out=0,n.avail_out=s),1!==(r=a.deflate(n,i))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0<n.avail_in||0===n.avail_out)&&1!==r);return 4===i?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==i||(this.onEnd(l),!(n.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=p,r.deflate=i,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var d=t("./zlib/inflate"),c=t("./utils/common"),p=t("./utils/strings"),m=t("./zlib/constants"),i=t("./zlib/messages"),n=t("./zlib/zstream"),s=t("./zlib/gzheader"),_=Object.prototype.toString;function a(t){if(!(this instanceof a))return new a(t);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,e.windowBits);if(r!==m.Z_OK)throw new Error(i[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(t,e){var r=new a(e);if(r.push(t,!0),r.err)throw r.msg||i[r.err];return r.result}a.prototype.push=function(t,e){var r,i,n,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof t?h.input=p.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new c.Buf8(u),h.next_out=0,h.avail_out=u),(r=d.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||i!==m.Z_FINISH&&i!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(n=p.utf8border(h.output,h.next_out),s=h.next_out-n,a=p.buf2string(h.output,n),h.next_out=s,h.avail_out=u-s,s&&c.arraySet(h.output,h.output,n,s,0),this.onData(a)):this.onData(c.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(i=m.Z_FINISH),i===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):i!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(t){this.chunks.push(t)},a.prototype.onEnd=function(t){t===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){var e,r,i,n,s,a;for(e=i=0,r=t.length;e<r;e++)i+=t[e].length;for(a=new Uint8Array(i),e=n=0,r=t.length;e<r;e++)s=t[e],a.set(s,n),n+=s.length;return a}},s={arraySet:function(t,e,r,i,n){for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(t,e,r){"use strict";var h=t("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var u=new h.Buf8(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function l(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&n))return String.fromCharCode.apply(null,h.shrinkBuf(t,e));for(var r="",i=0;i<e;i++)r+=String.fromCharCode(t[i]);return r}u[254]=u[254]=1,r.string2buf=function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=new h.Buf8(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new h.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,i,n,s,a=e||t.length,o=new Array(2*a);for(r=i=0;r<a;)if((n=t[r++])<128)o[i++]=n;else if(4<(s=u[n]))o[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<a;)n=n<<6|63&t[r++],s--;1<s?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return l(o,i)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,s=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+e[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}},{}],46:[function(t,e,r){"use strict";var h,d=t("../utils/common"),u=t("./trees"),c=t("./adler32"),p=t("./crc32"),i=t("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,n=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(t,e){return t.msg=i[e],e}function T(t){return(t<<1)-(4<t?9:0)}function D(t){for(var e=t.length;0<=--e;)t[e]=0}function F(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(d.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){u._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,F(t.strm)}function U(t,e){t.pending_buf[t.pending++]=e}function P(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function L(t,e){var r,i,n=t.max_chain_length,s=t.strstart,a=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-z?t.strstart-(t.w_size-z):0,u=t.window,l=t.w_mask,f=t.prev,d=t.strstart+S,c=u[s+a-1],p=u[s+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(u[(r=e)+a]===p&&u[r+a-1]===c&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<d);if(i=S-(d-s),s=d-S,a<i){if(t.match_start=e,o<=(a=i))break;c=u[s+a-1],p=u[s+a]}}}while((e=f[e&l])>h&&0!=--n);return a<=t.lookahead?a:t.lookahead}function j(t){var e,r,i,n,s,a,o,h,u,l,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-z)){for(d.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size;i=t.head[--e],t.head[e]=f<=i?i-f:0,--r;);for(e=r=f;i=t.prev[--e],t.prev[e]=f<=i?i-f:0,--r;);n+=f}if(0===t.strm.avail_in)break;if(a=t.strm,o=t.window,h=t.strstart+t.lookahead,u=n,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,d.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=c(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=x)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+x-1])&t.hash_mask,t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<x)););}while(t.lookahead<z&&0!==t.strm.avail_in)}function Z(t,e){for(var r,i;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r)),t.match_length>=x)if(i=u._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function W(t,e){for(var r,i,n;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===x&&4096<t.strstart-t.match_start)&&(t.match_length=x-1)),t.prev_length>=x&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-x,i=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=u._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function M(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*w),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(k+1),this.heap=new d.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?C:E,t.adler=2===e.wrap?0:1,e.last_flush=l,u._tr_init(e),m):R(t,_)}function K(t){var e=G(t);return e===m&&function(t){t.window_size=2*t.w_size,D(t.head),t.max_lazy_match=h[t.level].max_lazy,t.good_match=h[t.level].good_length,t.nice_match=h[t.level].nice_length,t.max_chain_length=h[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=x-1,t.match_available=0,t.ins_h=0}(t.state),e}function Y(t,e,r,i,n,s){if(!t)return _;var a=1;if(e===g&&(e=6),i<0?(a=0,i=-i):15<i&&(a=2,i-=16),n<1||y<n||r!==v||i<8||15<i||e<0||9<e||s<0||b<s)return R(t,_);8===i&&(i=9);var o=new H;return(t.state=o).strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=r,K(t)}h=[new M(0,0,0,0,function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(j(t),0===t.lookahead&&e===l)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start>=t.w_size-z&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(t,e){return Y(t,e,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,m):_},r.deflate=function(t,e){var r,i,n,s;if(!t||!t.state||5<e||e<0)return t?R(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==f)return R(t,0===t.avail_out?-5:_);if(i.strm=t,r=i.last_flush,i.last_flush=e,i.status===C)if(2===i.wrap)t.adler=0,U(i,31),U(i,139),U(i,8),i.gzhead?(U(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),U(i,255&i.gzhead.time),U(i,i.gzhead.time>>8&255),U(i,i.gzhead.time>>16&255),U(i,i.gzhead.time>>24&255),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(U(i,255&i.gzhead.extra.length),U(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=p(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(U(i,0),U(i,0),U(i,0),U(i,0),U(i,0),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,3),i.status=E);else{var a=v+(i.w_bits-8<<4)<<8;a|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(a|=32),a+=31-a%31,i.status=E,P(i,a),0!==i.strstart&&(P(i,t.adler>>>16),P(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending!==i.pending_buf_size));)U(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(t),i.pending+2<=i.pending_buf_size&&(U(i,255&t.adler),U(i,t.adler>>8&255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(F(t),0===t.avail_out)return i.last_flush=-1,m}else if(0===t.avail_in&&T(e)<=T(r)&&e!==f)return R(t,-5);if(666===i.status&&0!==t.avail_in)return R(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==l&&666!==i.status){var o=2===i.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(j(t),0===t.lookahead)){if(e===l)return A;break}if(t.match_length=0,r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):3===i.strategy?function(t,e){for(var r,i,n,s,a=t.window;;){if(t.lookahead<=S){if(j(t),t.lookahead<=S&&e===l)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=x&&0<t.strstart&&(i=a[n=t.strstart-1])===a[++n]&&i===a[++n]&&i===a[++n]){s=t.strstart+S;do{}while(i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&n<s);t.match_length=S-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=x?(r=u._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):h[i.level].func(i,e);if(o!==O&&o!==B||(i.status=666),o===A||o===O)return 0===t.avail_out&&(i.last_flush=-1),m;if(o===I&&(1===e?u._tr_align(i):5!==e&&(u._tr_stored_block(i,0,0,!1),3===e&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),F(t),0===t.avail_out))return i.last_flush=-1,m}return e!==f?m:i.wrap<=0?1:(2===i.wrap?(U(i,255&t.adler),U(i,t.adler>>8&255),U(i,t.adler>>16&255),U(i,t.adler>>24&255),U(i,255&t.total_in),U(i,t.total_in>>8&255),U(i,t.total_in>>16&255),U(i,t.total_in>>24&255)):(P(i,t.adler>>>16),P(i,65535&t.adler)),F(t),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?m:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==C&&69!==e&&73!==e&&91!==e&&103!==e&&e!==E&&666!==e?R(t,_):(t.state=null,e===E?R(t,-3):m):_},r.deflateSetDictionary=function(t,e){var r,i,n,s,a,o,h,u,l=e.length;if(!t||!t.state)return _;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new d.Buf8(r.w_size),d.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),a=t.avail_in,o=t.next_in,h=t.input,t.avail_in=l,t.next_in=0,t.input=e,j(r);r.lookahead>=x;){for(i=r.strstart,n=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+x-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--n;);r.strstart=i,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,t.next_in=o,t.input=h,t.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C;r=t.state,i=t.next_in,z=t.input,n=i+(t.avail_in-5),s=t.next_out,C=t.output,a=s-(e-t.avail_out),o=s+(t.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;t:do{p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=m[c&g];e:for(;;){if(c>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(c&(1<<y)-1)];continue e}if(32&y){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&v,(y&=15)&&(p<y&&(c+=z[i++]<<p,p+=8),w+=c&(1<<y)-1,c>>>=y,p-=y),p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=_[c&b];r:for(;;){if(c>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(c&(1<<y)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&v,p<(y&=15)&&(c+=z[i++]<<p,(p+=8)<y&&(c+=z[i++]<<p,p+=8)),h<(k+=c&(1<<y)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(c>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(S=d,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=d[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=d[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(i<n&&s<o);i-=w=p>>3,c&=(1<<(p-=w<<3))-1,t.next_in=i,t.next_out=s,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(t,e,r){"use strict";var I=t("../utils/common"),O=t("./adler32"),B=t("./crc32"),R=t("./inffast"),T=t("./inftrees"),D=1,F=2,N=0,U=-2,P=1,i=852,n=592;function L(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new I.Buf32(i),e.distcode=e.distdyn=new I.Buf32(n),e.sane=1,e.back=-1,N):U}function o(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,a(t)):U}function h(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?U:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,o(t))):U}function u(t,e){var r,i;return t?(i=new s,(t.state=i).window=null,(r=h(t,e))!==N&&(t.state=null),r):U}var l,f,d=!0;function j(t){if(d){var e;for(l=new I.Buf32(512),f=new I.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(T(D,t.lens,0,288,l,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;T(F,t.lens,0,32,f,0,t.work,{bits:5}),d=!1}t.lencode=l,t.lenbits=9,t.distcode=f,t.distbits=5}function Z(t,e,r,i){var n,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),i>=s.wsize?(I.arraySet(s.window,e,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(i<(n=s.wsize-s.wnext)&&(n=i),I.arraySet(s.window,e,r-i,n,s.wnext),(i-=n)?(I.arraySet(s.window,e,r-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(t){return u(t,15)},r.inflateInit2=u,r.inflate=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return U;12===(r=t.state).mode&&(r.mode=13),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,f=o,d=h,x=N;t:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){t.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,t.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,i,s,c,k)),512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,r.length-=c),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}t.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==e)break;u>>>=2,l-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),h<c&&(c=h),0===c)break t;I.arraySet(n,i,s,c,a),o-=c,s+=c,h-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+c>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=o&&258<=h){t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,R(t,d),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){t.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break t;if(c=d-h,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=n,p=a-r.offset,c=r.length;for(h<c&&(c=h),h-=c,r.length-=c;n[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break t;n[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break t;o--,u|=i[s++]<<l,l+=8}if(d-=h,t.total_out+=d,r.total+=d,d&&(t.adler=r.check=r.flags?B(r.check,n,d,a-d):O(r.check,n,d,a-d)),d=h,(r.flags?u:L(u))!==r.check){t.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return U}return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,(r.wsize||d!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&Z(t,t.output,t.next_out,d-t.avail_out)?(r.mode=31,-4):(f-=t.avail_in,d-=t.avail_out,t.total_in+=f,t.total_out+=d,r.total+=d,r.wrap&&d&&(t.adler=r.check=r.flags?B(r.check,n,d,t.next_out-d):O(r.check,n,d,t.next_out-d)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===d||4===e)&&x===N&&(x=-5),x)},r.inflateEnd=function(t){if(!t||!t.state)return U;var e=t.state;return e.window&&(e.window=null),t.state=null,N},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?U:((r.head=e).done=!1,N):U},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,e,i,0)!==r.check?-3:Z(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var D=t("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,i,n,s,a,o){var h,u,l,f,d,c,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<i;v++)O[e[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===t||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<i;v++)0!==e[r+v]&&(a[B[e[r+v]]++]=v);if(c=0===t?(A=R=a,19):1===t?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,d=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===t&&852<C||2===t&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<c?(m=0,a[v]):a[v]>c?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;n[d+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=e[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),d+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===t&&852<C||2===t&&592<C)return 1;n[l=E&f]=k<<24|x<<16|d-s|0}}return 0!==E&&(n[d+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var n=t("../utils/common"),o=0,h=1;function i(t){for(var e=t.length;0<=--e;)t[e]=0}var s=0,a=29,u=256,l=u+1+a,f=30,d=19,_=2*l+1,g=15,c=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));i(z);var C=new Array(2*f);i(C);var E=new Array(512);i(E);var A=new Array(256);i(A);var I=new Array(a);i(I);var O,B,R,T=new Array(f);function D(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function N(t){return t<256?E[t]:E[256+(t>>>7)]}function U(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function P(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,U(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function L(t,e,r){P(t,r[2*e],r[2*e+1])}function j(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function Z(t,e,r){var i,n,s=new Array(g+1),a=0;for(i=1;i<=g;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=j(s[o]++,o))}}function W(t){var e;for(e=0;e<l;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<d;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*m]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?U(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function H(t,e,r,i){var n=2*e,s=2*r;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[r]}function G(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&H(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!H(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function K(t,e,r){var i,n,s,a,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(s=A[n])+u+1,e),0!==(a=w[s])&&P(t,n-=I[s],a),L(t,s=N(--i),r),0!==(a=k[s])&&P(t,i-=T[s],a)),o<t.last_lit;);L(t,m,e)}function Y(t,e){var r,i,n,s=e.dyn_tree,a=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(t.heap[++t.heap_len]=u=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)s[2*(n=t.heap[++t.heap_len]=u<2?++u:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=a[2*n+1]);for(e.max_code=u,r=t.heap_len>>1;1<=r;r--)G(t,s,r);for(n=h;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,s,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,s[2*n]=s[2*r]+s[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,s[2*r+1]=s[2*i+1]=n,t.heap[1]=n++,G(t,s,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,s,a,o,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(s=0;s<=g;s++)t.bl_count[s]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<_;r++)p<(s=h[2*h[2*(i=t.heap[r])+1]+1]+1)&&(s=p,m++),h[2*i+1]=s,u<i||(t.bl_count[s]++,a=0,c<=i&&(a=d[i-c]),o=h[2*i],t.opt_len+=o*(s+a),f&&(t.static_len+=o*(l[2*i+1]+a)));if(0!==m){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(i=t.bl_count[s];0!==i;)u<(n=t.heap[--r])||(h[2*n+1]!==s&&(t.opt_len+=(s-h[2*n+1])*h[2*n],h[2*n+1]=s),i--)}}(t,e),Z(s,u,t.bl_count)}function X(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=e[2*(i+1)+1],++o<h&&n===a||(o<u?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[2*b]++):o<=10?t.bl_tree[2*v]++:t.bl_tree[2*y]++,s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4))}function V(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),i=0;i<=r;i++)if(n=a,a=e[2*(i+1)+1],!(++o<h&&n===a)){if(o<u)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==s&&(L(t,n,t.bl_tree),o--),L(t,b,t.bl_tree),P(t,o-3,2)):o<=10?(L(t,v,t.bl_tree),P(t,o-3,3)):(L(t,y,t.bl_tree),P(t,o-11,7));s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4)}}i(T);var q=!1;function J(t,e,r,i){P(t,(s<<1)+(i?1:0),3),function(t,e,r,i){M(t),i&&(U(t,r),U(t,~r)),n.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){q||(function(){var t,e,r,i,n,s=new Array(g+1);for(i=r=0;i<a-1;i++)for(I[i]=r,t=0;t<1<<w[i];t++)A[r++]=i;for(A[r-1]=i,i=n=0;i<16;i++)for(T[i]=n,t=0;t<1<<k[i];t++)E[n++]=i;for(n>>=7;i<f;i++)for(T[i]=n<<7,t=0;t<1<<k[i]-7;t++)E[256+n++]=i;for(e=0;e<=g;e++)s[e]=0;for(t=0;t<=143;)z[2*t+1]=8,t++,s[8]++;for(;t<=255;)z[2*t+1]=9,t++,s[9]++;for(;t<=279;)z[2*t+1]=7,t++,s[7]++;for(;t<=287;)z[2*t+1]=8,t++,s[8]++;for(Z(z,l+1,s),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=j(t,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,d,p)}(),q=!0),t.l_desc=new F(t.dyn_ltree,O),t.d_desc=new F(t.dyn_dtree,B),t.bl_desc=new F(t.bl_tree,R),t.bi_buf=0,t.bi_valid=0,W(t)},r._tr_stored_block=J,r._tr_flush_block=function(t,e,r,i){var n,s,a=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e<u;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),Y(t,t.l_desc),Y(t,t.d_desc),a=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),Y(t,t.bl_desc),e=d-1;3<=e&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=n&&(n=s)):n=s=r+5,r+4<=n&&-1!==e?J(t,e,r,i):4===t.strategy||s===n?(P(t,2+(i?1:0),3),K(t,z,C)):(P(t,4+(i?1:0),3),function(t,e,r,i){var n;for(P(t,e-257,5),P(t,r-1,5),P(t,i-4,4),n=0;n<i;n++)P(t,t.bl_tree[2*S[n]+1],3);V(t,t.dyn_ltree,e-1),V(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),K(t,t.dyn_ltree,t.dyn_dtree)),W(t),i&&M(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(A[r]+u+1)]++,t.dyn_dtree[2*N(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){P(t,2,3),L(t,m,z),function(t){16===t.bi_valid?(U(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,r){"use strict";e.exports="function"==typeof setImmediate?setImmediate:function(){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/background/background.js":
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);


const makeFileSystemSafeName = input => input
  .replace(/https:\/\//, '') // remove protocol
  .replace(/[<>:"\\|?*/]/g, '-') // replace invalid filename characters with dash
  .replace(/^-+|-+$/g, ''); // clean up leading or trailing dashes

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Sender:', sender);
  console.log('Message:', request);
  if (request.downloadList) {
    const zip = new jszip__WEBPACK_IMPORTED_MODULE_0___default.a();

    const savePage = new Promise(resolve => {
      chrome.pageCapture.saveAsMHTML({ tabId: sender.tab.id }, data => resolve(data));
    });

    savePage.then(data => {
      sendResponse('page captured');
      return data;
    });

    zip.file('listing.mhtml', savePage);

    request.downloadList.forEach((url, index) => {
      const blob = fetch(url).then(r => r.blob());
      const imageName = url.match(/[^/]+$/)[0];
      zip.file(makeFileSystemSafeName(imageName), blob);
    });

    zip.generateAsync({ type: 'blob' })
      .then(zipFile => {
        const url = URL.createObjectURL(zipFile);
        chrome.downloads.download({ url, filename: `${makeFileSystemSafeName(sender.tab.url)}.zip` });
      });

    return true; // Tell chrome to wait for async sendResponse
  }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanN6aXAvZGlzdC9qc3ppcC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxHQUFHLElBQW9ELG9CQUFvQixLQUFLLEVBQThLLENBQUMsWUFBWSx5QkFBeUIsZ0JBQWdCLFVBQVUsVUFBVSwwQ0FBMEMsZ0JBQWdCLE9BQUMsT0FBTyxvQkFBb0IsOENBQThDLGtDQUFrQyxZQUFZLFlBQVksbUNBQW1DLGlCQUFpQixlQUFlLHNCQUFzQixvQkFBb0Isa0RBQWtELFdBQVcsWUFBWSxTQUFTLEVBQUUsbUJBQW1CLGFBQWEsMEdBQTBHLHFCQUFxQiwwRUFBMEUsV0FBVywrT0FBK08sa0JBQWtCLHNCQUFzQixrQ0FBa0MsK0ZBQStGLDJEQUEyRCx5SkFBeUosc0RBQXNELFdBQVcsa01BQWtNLFVBQVUsRUFBRSw0QkFBNEIscUJBQXFCLGFBQWEsNEdBQTRHLGdDQUFnQyxzQkFBc0IsdUdBQXVHLGFBQWEsNEJBQTRCLG1JQUFtSSw2QkFBNkIsNkdBQTZHLElBQUksZ0NBQWdDLHlQQUF5UCxvQ0FBb0MsNklBQTZJLGFBQWEsRUFBRSwrRkFBK0YscUJBQXFCLGFBQWEsa0NBQWtDLFNBQVMsd0NBQXdDLGtDQUFrQyw2QkFBNkIscUNBQXFDLHdCQUF3QixFQUFFLHdDQUF3QyxxQkFBcUIsYUFBYSxtQkFBbUIsaUJBQWlCLG1CQUFtQixNQUFNLEtBQUssSUFBSSxZQUFZLElBQUksaUNBQWlDLE9BQU8sU0FBUyxHQUFHLHdCQUF3Qix3RUFBd0UsY0FBYyxNQUFNLFlBQVksSUFBSSw0QkFBNEIsV0FBVyxxQ0FBcUMsY0FBYyxNQUFNLFlBQVksSUFBSSx1Q0FBdUMsV0FBVyxzQkFBc0IsRUFBRSxhQUFhLHFCQUFxQixhQUFhLHlLQUF5SyxHQUFHLHFCQUFxQixhQUFhLFdBQVcsMERBQTBELFdBQVcsRUFBRSxPQUFPLHFCQUFxQixhQUFhLHlMQUF5TCxnQkFBZ0Isa0dBQWtHLG9FQUFvRSxtR0FBbUcsOEJBQThCLDBGQUEwRixnQ0FBZ0MsK0NBQStDLG9DQUFvQyxvQ0FBb0MseUNBQXlDLEVBQUUsV0FBVyw4QkFBOEIsUUFBUSxtQkFBbUIsR0FBRyw4QkFBOEIsMEJBQTBCLCtCQUErQix5QkFBeUIsR0FBRyxFQUFFLGlEQUFpRCxxQkFBcUIsYUFBYSxnQkFBZ0IsV0FBVyxRQUFRLElBQUkseUNBQXlDLFNBQVMsd0JBQXdCLGdUQUFnVCw2Q0FBNkMsaUdBQWlHLFFBQVEsK0JBQStCLFlBQVksOENBQThDLFFBQVEsMENBQTBDLDRDQUE0QyxpQkFBaUIsK1FBQStRLFNBQVMsaUtBQWlLLDRIQUE0SCxzR0FBc0csb0JBQW9CLGlSQUFpUiw2Q0FBNkMsbUVBQW1FLHlHQUF5RyxrQkFBa0IsOERBQThELEdBQUcsc0NBQXNDLHdFQUF3RSxvQ0FBb0MsTUFBTSw4RUFBOEUsV0FBVyx3QkFBd0IsV0FBVyxFQUFFLHdCQUF3QixzQ0FBc0MsbUJBQW1CLDhHQUE4RyxrREFBa0QsaUJBQWlCLG9GQUFvRixVQUFVLGFBQWEsRUFBRSxvQkFBb0Isd0JBQXdCLFdBQVcsRUFBRSwwQkFBMEIsdUNBQXVDLHNCQUFzQiw4QkFBOEIsZ0NBQWdDLHlCQUF5QixlQUFlLDhCQUE4QixhQUFhLEVBQUUsZ0RBQWdELG1DQUFtQyxzRkFBc0YsaUVBQWlFLFdBQVcsYUFBYSxhQUFhLEVBQUUsMENBQTBDLDJJQUEySSwwQ0FBMEMsc0JBQXNCLFdBQVcsK0JBQStCLGtCQUFrQix3QkFBd0Isc0ZBQXNGLDJCQUEyQixXQUFXLE9BQU8sK0JBQStCLDRMQUE0TCwrQkFBK0Isb0JBQW9CLDRDQUE0QyxZQUFZLFdBQVcsUUFBUSxjQUFjLFVBQVUsU0FBUyw2QkFBNkIsNEJBQTRCLDRCQUE0QixXQUFXLGdCQUFnQixhQUFhLEVBQUUsdUZBQXVGLHFCQUFxQixhQUFhLGtEQUFrRCxpQ0FBaUMsNkRBQTZELElBQUksd0JBQXdCLElBQUksb0JBQW9CLGtCQUFrQixnRUFBZ0UsU0FBUyw4RkFBOEYsa0JBQWtCLDhDQUE4Qyw0R0FBNEcsVUFBVSxtQkFBbUIsU0FBUyxXQUFXLFVBQVUsRUFBRSx3Q0FBd0Msc0JBQXNCLGFBQWEsYUFBYSxxQ0FBcUMsc0lBQXNJLGFBQWEsc0RBQXNELFlBQVksNkRBQTZELFVBQVUsa0pBQWtKLDZCQUE2Qix3Q0FBd0MsRUFBRSx1RUFBdUUsc0JBQXNCLGFBQWEsd0lBQXdJLGNBQWMsbUNBQW1DLG9EQUFvRCx5QkFBeUIsS0FBSyxzQkFBc0IsNkZBQTZGLFdBQVcsRUFBRSx3QkFBd0IsV0FBVyx1QkFBdUIsRUFBRSw4RkFBOEYsNk1BQTZNLGVBQWUsbUJBQW1CLG1CQUFtQix1Q0FBdUMsNEJBQTRCLFdBQVcsb0JBQW9CLHdCQUF3QixtQkFBbUIsa0NBQWtDLFdBQVcsS0FBSyxXQUFXLHFDQUFxQywrTUFBK00sRUFBRSx1REFBdUQsR0FBRyxFQUFFLHNHQUFzRyxzQkFBc0IsYUFBYSxtREFBbUQsZ0JBQWdCLDZGQUE2RixvREFBb0QsV0FBVyxpREFBaUQsUUFBUSxhQUFhLFdBQVcsRUFBRSx5QkFBeUIsNENBQTRDLHNCQUFzQix1Q0FBdUMsRUFBRSw4QkFBOEIsZ0VBQWdFLCtCQUErQixpR0FBaUcsYUFBYSxFQUFFLDJDQUEyQyxzQkFBc0IsYUFBYSxvQ0FBb0Msa0JBQWtCLDhCQUE4QixXQUFXLDBCQUEwQixxQ0FBcUMseUJBQXlCLGtCQUFrQixzQkFBc0IsYUFBYSxFQUFFLHlEQUF5RCxzQkFBc0IsYUFBYSxFQUFFLG1DQUFtQyxzQkFBc0IsYUFBYSxXQUFXLDhEQUE4RCxzRUFBc0Usa0ZBQWtGLHVCQUF1Qix5QkFBeUIsdUNBQXVDLG9CQUFvQixtQkFBbUIsc0JBQXNCLDBCQUEwQixzQkFBc0IsNkZBQTZGLEdBQUcsc0JBQXNCLGFBQWEsa0JBQWtCLHVDQUF1QyxJQUFJLHNWQUFzVixpREFBaUQsdUtBQXVLLFdBQVcsc0lBQXNJLG1CQUFtQixnQkFBZ0IseVBBQXlQLGlEQUFpRCx5QkFBeUIsK0JBQStCLGVBQWUsb0NBQW9DLGlCQUFpQixnRkFBZ0YsdUJBQXVCLGlCQUFpQixjQUFjLDREQUE0RCxPQUFPLGdCQUFnQiw4RkFBOEYscUJBQXFCLFVBQVUsNEpBQTRKLG9CQUFvQixTQUFTLGtDQUFrQyxrQkFBa0IsSUFBSSxzQkFBc0IscUVBQXFFLFNBQVMsUUFBUSxpQ0FBaUMsd0JBQXdCLEVBQUUsOEJBQThCLHdCQUF3QixvQkFBb0Isa0JBQWtCLHlDQUF5Qyx3QkFBd0IsRUFBRSxrREFBa0QsdUJBQXVCLG9CQUFvQixjQUFjLG9CQUFvQixtRkFBbUYseUNBQXlDLG9DQUFvQyxNQUFNLFdBQVcsaUNBQWlDLFlBQVksc0JBQXNCLDhGQUE4RixvQ0FBb0MsV0FBVyxJQUFJLG9CQUFvQixFQUFFLHNKQUFzSix1S0FBdUssK0tBQStLLGtDQUFrQyw2QkFBNkIsU0FBUyw0QkFBNEIsNENBQTRDLDZCQUE2QixvREFBb0Qsa0NBQWtDLGNBQWMsaUZBQWlGLFlBQVksRUFBRSxnTkFBZ04sc0JBQXNCLHNCQUFzQixFQUFFLGNBQWMsc0JBQXNCLGFBQWEsd0JBQXdCLGNBQWMsZUFBZSxZQUFZLG1CQUFtQixrQkFBa0IsMkRBQTJELDhCQUE4Qiw4Q0FBOEMsZ0dBQWdHLEtBQUssdUdBQXVHLFNBQVMsK0NBQStDLCtGQUErRiw4Q0FBOEMsa0NBQWtDLHNDQUFzQyxtRUFBbUUsdUJBQXVCLGFBQWEsRUFBRSxnQ0FBZ0Msc0JBQXNCLGFBQWEsb0JBQW9CLGNBQWMsMERBQTBELGFBQWEsd0JBQXdCLDhCQUE4Qix3QkFBd0IsNklBQTZJLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLDRCQUE0QixxQkFBcUIscUJBQXFCLFVBQVUseUNBQXlDLGNBQWMsNEJBQTRCLHVCQUF1Qix3QkFBd0IsZ0RBQWdELHVCQUF1QixtQ0FBbUMsb0NBQW9DLHFCQUFxQixzQkFBc0IsOEZBQThGLGFBQWEsRUFBRSxjQUFjLHNCQUFzQixhQUFhLDhCQUE4QixjQUFjLGVBQWUsNkRBQTZELG9CQUFvQixtRUFBbUUsdUJBQXVCLGFBQWEsRUFBRSxzQ0FBc0Msc0JBQXNCLGFBQWEsd0JBQXdCLGNBQWMsZUFBZSwyREFBMkQseUNBQXlDLDhDQUE4QywwQ0FBMEMsK0NBQStDLDRCQUE0QixrQ0FBa0Msb0JBQW9CLG1FQUFtRSx1QkFBdUIsYUFBYSxFQUFFLGdDQUFnQyxzQkFBc0IsYUFBYSx5QkFBeUIsY0FBYyxlQUFlLDZEQUE2RCxzREFBc0Qsc0VBQXNFLHVCQUF1QixhQUFhLEVBQUUsaUNBQWlDLHNCQUFzQixhQUFhLHFJQUFxSSxzQkFBc0IscUJBQXFCLDBLQUEwSyxFQUFFLHFIQUFxSCxzQkFBc0IsYUFBYSwrTEFBK0wsR0FBRyxzQkFBc0IsYUFBYSwyQ0FBMkMsY0FBYyxtREFBbUQscURBQXFELFdBQVcscURBQXFELEVBQUUsYUFBYSxFQUFFLG1DQUFtQyxzQkFBc0IsYUFBYSwyQ0FBMkMsYUFBYSx5REFBeUQsaUVBQWlFLHNFQUFzRSxhQUFhLEVBQUUsZ0RBQWdELHNCQUFzQixhQUFhLDJDQUEyQyxjQUFjLCtFQUErRSxxREFBcUQsTUFBTSx3Q0FBd0MsK0NBQStDLHNDQUFzQyxhQUFhLEVBQUUsbUNBQW1DLHNCQUFzQixhQUFhLDJDQUEyQyxjQUFjLDBCQUEwQixXQUFXLGtIQUFrSCxvR0FBb0csYUFBYSxXQUFXLEVBQUUsK0NBQStDLDhDQUE4QywrQkFBK0Isa0pBQWtKLHVDQUF1QyxxSkFBcUosOEJBQThCLDJDQUEyQyxpREFBaUQsMENBQTBDLGtCQUFrQixpREFBaUQsTUFBTSxvREFBb0QsTUFBTSw2REFBNkQsK0JBQStCLGFBQWEsNENBQTRDLEVBQUUsYUFBYSxFQUFFLG1DQUFtQyxzQkFBc0IsYUFBYSxjQUFjLHlDQUF5QyxpREFBaUQsdUVBQXVFLHdCQUF3QixvQkFBb0IsYUFBYSxpQkFBaUIsb0JBQW9CLGdCQUFnQiw0QkFBNEIsYUFBYSxJQUFJLG1EQUFtRCxTQUFTLHFCQUFxQixTQUFTLG1CQUFtQixnS0FBZ0ssa0JBQWtCLHVDQUF1QyxvQkFBb0IsaUZBQWlGLG9CQUFvQixrQ0FBa0MsNEJBQTRCLHVDQUF1QyxrQkFBa0IsZ0NBQWdDLDhCQUE4QixpRkFBaUYsb0VBQW9FLFdBQVcsK0JBQStCLGtCQUFrQix3QkFBd0IsUUFBUSwyQkFBMkIsV0FBVyxPQUFPLGtCQUFrQixtR0FBbUcsbUJBQW1CLDRDQUE0Qyx1QkFBdUIsNEdBQTRHLG1CQUFtQiwwQkFBMEIsYUFBYSw4QkFBOEIsNkRBQTZELDRCQUE0Qix1SEFBdUgsaUJBQWlCLGlGQUFpRixxREFBcUQscUJBQXFCLDBCQUEwQiwrQ0FBK0MsYUFBYSxHQUFHLHNCQUFzQixhQUFhLCtIQUErSCxvQkFBb0IsMkNBQTJDLFVBQVUsZ0JBQWdCLG1DQUFtQyx5REFBeUQsMEJBQTBCLGtCQUFrQix5QkFBeUIsVUFBVSxzQkFBc0IsSUFBSSxzQkFBc0IsVUFBVSw4REFBOEQsZ0NBQWdDLG1DQUFtQyxpQkFBaUIscUJBQXFCLFFBQVEsV0FBVyxtQkFBbUIsVUFBVSwrQkFBK0Isc0RBQXNELDZDQUE2QyxXQUFXLGlDQUFpQyxTQUFTLHlDQUF5Qyw4REFBOEQsU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLFdBQVcsRUFBRSxrQkFBa0IsUUFBUSxVQUFVLDRDQUE0QyxNQUFNLHdCQUF3QixJQUFJLGtIQUFrSCxTQUFTLG1EQUFtRCxhQUFhLHVCQUF1QixpQkFBaUIsa0JBQWtCLFdBQVcsK0NBQStDLHdCQUF3QiwrQkFBK0IsdUJBQXVCLE9BQU8sbUJBQW1CLHlEQUF5RCxrQkFBa0IsaUNBQWlDLDRCQUE0QixxSUFBcUksbUJBQW1CLDJDQUEyQyxLQUFLLGFBQWEsRUFBRSwrSUFBK0ksc0JBQXNCLGFBQWEsa1BBQWtQLEtBQUsseUJBQXlCLElBQUkseUJBQXlCLHVCQUF1QixPQUFPLFNBQVMsSUFBSSw2RkFBNkYseURBQXlELFNBQVMsWUFBWSxJQUFJLDZDQUE2QyxTQUFTLGlCQUFpQixFQUFFLHFCQUFxQixzQkFBc0IsYUFBYSxnSEFBZ0gsTUFBTSx3REFBd0QsZ0JBQWdCLGFBQWEsK0NBQStDLGFBQWEsNEJBQTRCLHlCQUF5QiwyREFBMkQsNkJBQTZCLFFBQVEsSUFBSSwySkFBMkosd0RBQXdELElBQUksNlFBQTZRLFNBQVMsSUFBSSwwQkFBMEIsZ0ZBQWdGLHdDQUF3QyxVQUFVLElBQUksNEJBQTRCLHVDQUF1QyxLQUFLLDJCQUEyQixTQUFTLHNCQUFzQix5RkFBeUYsc0ZBQXNGLHVEQUF1RCxzREFBc0QsOERBQThELHdDQUF3QyxpQkFBaUIsUUFBUSxxR0FBcUcsK0JBQStCLG1CQUFtQixvQkFBb0IsTUFBTSxpREFBaUQsc0JBQXNCLEtBQUsscUNBQXFDLFFBQVEsb0pBQW9KLGlDQUFpQyxFQUFFLDhCQUE4QixpREFBaUQseUNBQXlDLHNCQUFzQiwyRUFBMkUsV0FBVyxzQ0FBc0MsRUFBRSxzQkFBc0IsRUFBRSwyRUFBMkUsc0JBQXNCLGFBQWEsc0dBQXNHLGNBQWMsU0FBUyxnQkFBZ0IsWUFBWSxXQUFXLDZCQUE2QixTQUFTLHdCQUF3Qix1QkFBdUIsSUFBSSxxQkFBcUIsT0FBTyxFQUFFLFNBQVMsSUFBSSw2RkFBNkYsZ0NBQWdDLFNBQVMsc0RBQXNELE9BQU8saUNBQWlDLHdCQUF3QixpREFBaUQsS0FBSyxJQUFJLDZLQUE2SyxrQkFBa0IsNkJBQTZCLGlCQUFpQixXQUFXLGlDQUFpQyxTQUFTLGlCQUFpQixzQkFBc0IsSUFBSSxrRkFBa0YsU0FBUyxVQUFVLHlCQUF5QixJQUFJLGlGQUFpRixTQUFTLFVBQVUsS0FBSyxjQUFjLGtDQUFrQywyR0FBMkcsSUFBSSxLQUFLLGlDQUFpQyxTQUFTLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLFlBQVksV0FBVyxjQUFjLFNBQVMsc0JBQXNCLFNBQVMsVUFBVSwyQkFBMkIsZ0NBQWdDLHlCQUF5QixxQ0FBcUMsd0JBQXdCLHFDQUFxQyx3QkFBd0IscUNBQXFDLFVBQVUseUNBQXlDLGdDQUFnQyx3QkFBd0IseUJBQXlCLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLG9EQUFvRCxzQ0FBc0MseUJBQXlCLHdCQUF3QiwyQ0FBMkMsZUFBZSwyQkFBMkIsZ0NBQWdDLHlCQUF5QixnQkFBZ0IscUNBQXFDLDJCQUEyQixlQUFlLDJCQUEyQixnQ0FBZ0MseUJBQXlCLHlDQUF5Qyx3QkFBd0IscUNBQXFDLGNBQWMsNkJBQTZCLHVCQUF1QixrQkFBa0IscUJBQXFCLGtCQUFrQix5QkFBeUIsd1BBQXdQLDRCQUE0QiwrRUFBK0UscUVBQXFFLGFBQWEsUUFBUSxpQkFBaUIsMEVBQTBFLFNBQVMseUJBQXlCLGFBQWEsdUJBQXVCLEVBQUUsMEJBQTBCLGNBQWMsMENBQTBDLHFCQUFxQixhQUFhLFFBQVEsbUJBQW1CLGdHQUFnRyxTQUFTLHNDQUFzQyw2Q0FBNkMsa0xBQWtMLHFCQUFxQixxQkFBcUIsbUJBQW1CLHVCQUF1QixrQkFBa0Isd0JBQXdCLElBQUksbUJBQW1CLHFCQUFxQixxSEFBcUgsc0VBQXNFLGdKQUFnSixHQUFHLEVBQUUsc0ZBQXNGLHNCQUFzQixhQUFhLGlIQUFpSCxjQUFjLGlDQUFpQyxhQUFhLDJCQUEyQiwwQ0FBMEMscUJBQXFCLGdDQUFnQywyR0FBMkcsMkJBQTJCLHdCQUF3Qix3QkFBd0Isb0NBQW9DLGlDQUFpQyxrQ0FBa0Msc1VBQXNVLDJHQUEyRyxtREFBbUQsdUNBQXVDLDJYQUEyWCw4Q0FBOEMsSUFBSSwwR0FBMEcsdUJBQXVCLDhDQUE4QywyT0FBMk8sMkJBQTJCLFFBQVEsUUFBUSxvQkFBb0IseUtBQXlLLDJCQUEyQixNQUFNLGdEQUFnRCx5REFBeUQsV0FBVyxpQkFBaUIsb0VBQW9FLDZOQUE2Tiw2QkFBNkIsZ0VBQWdFLDBRQUEwUSx3QkFBd0IsUUFBUSxnV0FBZ1csbUxBQW1MLHliQUF5YixtSkFBbUosZ0RBQWdELHFEQUFxRCxVQUFVLHVFQUF1RSw2RUFBNkUsMkJBQTJCLGlCQUFpQixrQkFBa0IsMkZBQTJGLGFBQWEsRUFBRSxpR0FBaUcsc0JBQXNCLGFBQWEsMklBQTJJLGdCQUFnQixrQ0FBa0MsYUFBYSx1QkFBdUIsMkJBQTJCLG9CQUFvQixpQ0FBaUMsMkJBQTJCLFFBQVEsaVVBQWlVLHlCQUF5QixrRUFBa0UsWUFBWSwrS0FBK0ssZ0hBQWdILDZCQUE2Qiw4TkFBOE4sbUJBQW1CLHlTQUF5UyxtSEFBbUgsOEJBQThCLG1EQUFtRCw0QkFBNEIsb09BQW9PLGtDQUFrQyx3QkFBd0IsbUNBQW1DLGlVQUFpVSw2QkFBNkIsMkNBQTJDLDBDQUEwQyxFQUFFLFlBQVksb0VBQW9FLHVCQUF1QixjQUFjLHVCQUF1Qix3Q0FBd0Msa0hBQWtILEtBQUssdUNBQXVDLCtCQUErQixLQUFLLHFDQUFxQyxvREFBb0QsMENBQTBDLGtDQUFrQyxLQUFLLHdDQUF3Qyx5REFBeUQsc0NBQXNDLDhCQUE4QixNQUFNLGlCQUFpQix1R0FBdUcsWUFBWSx5Q0FBeUMsOEJBQThCLE1BQU0saUJBQWlCLDBHQUEwRyxhQUFhLGFBQWEsRUFBRSxzSEFBc0gsc0JBQXNCLGFBQWEsa0JBQWtCLG9NQUFvTSxtRUFBbUUsa0lBQWtJLGFBQWEsMkJBQTJCLHNCQUFzQixJQUFJLG1EQUFtRCxpREFBaUQsd0VBQXdFLHdCQUF3QixvRkFBb0YsU0FBUyw0QkFBNEIscUJBQXFCLHFCQUFxQiw0Q0FBNEMsMEJBQTBCLDhEQUE4RCwrQkFBK0IsMkdBQTJHLCtCQUErQixzRkFBc0YsOEJBQThCLG9IQUFvSCwyRkFBMkYsOEZBQThGLEtBQUssV0FBVyx3QkFBd0IsWUFBWSxFQUFFLG1IQUFtSCxzQkFBc0IsYUFBYSxhQUFhLHVEQUF1RCxNQUFNLG1EQUFtRCxhQUFhLGlCQUFpQixlQUFlLGdCQUFnQix5SUFBeUkseUNBQXlDLGdDQUFnQyxpRUFBaUUsMkNBQTJDLFlBQVksaUJBQWlCLEtBQUssMkJBQTJCLGlDQUFpQyx3QkFBd0IsU0FBUyxhQUFhLFFBQVEsS0FBSyxtQkFBbUIsRUFBRSxFQUFFLGtCQUFrQixNQUFNLFFBQVEsV0FBVyxLQUFLLHNCQUFzQix1QkFBdUIsZ0hBQWdILEVBQUUsR0FBRyxzQkFBc0IsYUFBYSxxQkFBcUIsY0FBYyxRQUFRLDhDQUE4QyxjQUFjLDJFQUEyRSxnRUFBZ0Usa0JBQWtCLHdMQUF3TCxrQkFBa0IsYUFBYSxNQUFNLElBQUksT0FBTyxTQUFTLHFCQUFxQixxRkFBcUYsRUFBRSxjQUFjLGdCQUFnQix5RkFBeUYsc0JBQXNCLGdCQUFnQixTQUFTLGNBQWMsd0JBQXdCLGNBQWMseUJBQXlCLG1CQUFtQixPQUFPLEVBQUUsK0JBQStCLGdCQUFnQixTQUFTLElBQUksZ0NBQWdDLFNBQVMsMkJBQTJCLFNBQVMsNENBQTRDLG9DQUFvQyx1QkFBdUIsNkJBQTZCLHNDQUFzQyxTQUFTLEVBQUUsYUFBYSxzQ0FBc0MsUUFBUSxFQUFFLEVBQUUsK0JBQStCLHlCQUF5QixnQ0FBZ0MsMEZBQTBGLDhCQUE4QixrRkFBa0YsU0FBUyx1Q0FBdUMsMEJBQTBCLDRDQUE0QyxtQ0FBbUMsc0NBQXNDLHlCQUF5QiwyQ0FBMkMsa0NBQWtDLHlCQUF5QixhQUFhLGlEQUFpRCxjQUFjLFlBQVksS0FBSyxzQkFBc0IsOEJBQThCLE1BQU0sNkJBQTZCLFNBQVMsd0JBQXdCLHNCQUFzQiw4QkFBOEIsTUFBTSw0QkFBNEIsU0FBUyx1QkFBdUIsOEJBQThCLGdDQUFnQyxzQkFBc0Isa0JBQWtCLHFCQUFxQixtQkFBbUIsV0FBVyw4R0FBOEcsb0JBQW9CLDhCQUE4QiwwQ0FBMEMsS0FBSyxNQUFNLFdBQVcsU0FBUyxnQkFBZ0IsOEJBQThCLHlDQUF5QyxhQUFhLHdCQUF3QixHQUFHLG9CQUFvQixXQUFXLDhHQUE4RyxvQkFBb0IsOEJBQThCLHVCQUF1QixLQUFLLE1BQU0sc0NBQXNDLHlCQUF5QixhQUFhLHdCQUF3QixFQUFFLE1BQU0sVUFBVSxFQUFFLGFBQWEsc0JBQXNCLGFBQWEsU0FBUyxrSEFBa0gsRUFBRSx3RkFBd0Ysc0JBQXNCLGFBQWEsaUtBQWlLLGNBQWMsd0NBQXdDLHVCQUF1QiwyRUFBMkUsTUFBTSxFQUFFLG1CQUFtQix1TUFBdU0sb0ZBQW9GLCtCQUErQixrRUFBa0UsTUFBTSx3TkFBd04sbUJBQW1CLGdCQUFnQixlQUFlLDRDQUE0QyxnQkFBZ0IsK0JBQStCLDZDQUE2Qyx1QkFBdUIsK0tBQStLLEdBQUcsNElBQTRJLDJMQUEyTCw4Q0FBOEMsbUhBQW1ILGdDQUFnQyxvQkFBb0IsK0JBQStCLCtKQUErSixvREFBb0QsY0FBYyxnQkFBZ0Isc0JBQXNCLGNBQWMsa0JBQWtCLEVBQUUsc0dBQXNHLHNCQUFzQixhQUFhLCtMQUErTCxjQUFjLHdDQUF3Qyx1QkFBdUIsbUNBQW1DLE1BQU0sRUFBRSxtQkFBbUIseVZBQXlWLDZDQUE2QyxvQ0FBb0MsNERBQTRELGdCQUFnQixlQUFlLDRDQUE0QyxnQkFBZ0IsK0JBQStCLG9GQUFvRix1QkFBdUIsc01BQXNNLEdBQUcsOFdBQThXLCtYQUErWCwyREFBMkQsc0xBQXNMLGdDQUFnQyxvQkFBb0IsK0JBQStCLG9LQUFvSyxvREFBb0QsY0FBYyxnQkFBZ0IsWUFBWSxFQUFFLGlKQUFpSixzQkFBc0IsYUFBYSxzR0FBc0cscUJBQXFCLGtEQUFrRCxTQUFTLEVBQUUsZ0JBQWdCLE1BQU0sa0VBQWtFLGlEQUFpRCxTQUFTLDJCQUEyQixpRUFBaUUsT0FBTyw2QkFBNkIscURBQXFELGlCQUFpQixJQUFJLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixJQUFJLG1CQUFtQix5Q0FBeUMsSUFBSSxrQ0FBa0MsVUFBVSxJQUFJLDZCQUE2QixZQUFZLElBQUksa0JBQWtCLDJCQUEyQiw4QkFBOEIsdUJBQXVCLG9JQUFvSSxlQUFlLEdBQUcsc0JBQXNCLGFBQWEsOEJBQThCLElBQUksb0NBQW9DLFNBQVMsS0FBSyxJQUFJLGtEQUFrRCxTQUFTLEtBQUssOEJBQThCLE1BQU0sd0RBQXdELGdCQUFnQixvR0FBb0csaUJBQWlCLElBQUksaUNBQWlDLFNBQVMseUNBQXlDLDZCQUE2QixRQUFRLElBQUksMkpBQTJKLDBCQUEwQixJQUFJLDZRQUE2USxTQUFTLDZCQUE2QixxQkFBcUIsNkJBQTZCLDhDQUE4QyxJQUFJLHlCQUF5QixTQUFTLDRCQUE0QiwyQ0FBMkMsVUFBVSxJQUFJLDRCQUE0Qix1Q0FBdUMsS0FBSywyQkFBMkIsU0FBUyxzQkFBc0IseUZBQXlGLGNBQWMsNEJBQTRCLE1BQU0saURBQWlELHNCQUFzQixLQUFLLHNDQUFzQyxFQUFFLGNBQWMsc0JBQXNCLGFBQWEsNEJBQTRCLHlDQUF5QyxNQUFNLEVBQUUscUJBQXFCLHlCQUF5QixFQUFFLGtCQUFrQixrQkFBa0IsR0FBRyxzQkFBc0IsYUFBYSxXQUFXLCtYQUErWCxHQUFHLHNCQUFzQixhQUFhLGlCQUFpQixtQkFBbUIsTUFBTSxLQUFLLElBQUksWUFBWSxJQUFJLGlDQUFpQyxPQUFPLFNBQVMsR0FBRyw0QkFBNEIsY0FBYyxNQUFNLFlBQVksSUFBSSw0QkFBNEIsWUFBWSxHQUFHLHNCQUFzQixhQUFhLDhNQUE4TSxnQkFBZ0Isb0JBQW9CLGNBQWMsdUJBQXVCLGNBQWMsbUJBQW1CLE9BQU8sUUFBUSxjQUFjLDBCQUEwQixpTkFBaU4sZ0JBQWdCLHFIQUFxSCxnQkFBZ0IsNkJBQTZCLGdCQUFnQixzRUFBc0UsZ0JBQWdCLDZMQUE2TCxvRUFBb0UsR0FBRywrREFBK0QsU0FBUyxJQUFJLG1KQUFtSix3QkFBd0Isa0NBQWtDLHNCQUFzQiw0QkFBNEIsb0NBQW9DLGNBQWMsbUNBQW1DLEdBQUcsK0RBQStELHdHQUF3Ryx1Q0FBdUMsRUFBRSxVQUFVLHVDQUF1QyxFQUFFLEtBQUssNkJBQTZCLHNaQUFzWixzS0FBc0ssR0FBRywwQ0FBMEMsZ0JBQWdCLGFBQWEsRUFBRSxrQkFBa0Isc0NBQXNDLHlCQUF5Qiw4WEFBOFgscUJBQXFCLCtLQUErSyxFQUFFLGFBQWEsaUpBQWlKLHdFQUF3RSw4Q0FBOEMsc0lBQXNJLGdCQUFnQixlQUFlLEVBQUUsa0JBQWtCLHNDQUFzQyx5QkFBeUIseWVBQXllLHdJQUF3SSxvTEFBb0wsRUFBRSxrR0FBa0csMkJBQTJCLGlIQUFpSCxvREFBb0QseU5BQXlOLHNCQUFzQixtRkFBbUYsYUFBYSw4bkNBQThuQyxjQUFjLE1BQU0sNk1BQTZNLGNBQWMsV0FBVywwQkFBMEIsNlNBQTZTLFlBQVksd0JBQXdCLGVBQWUsUUFBUSw4R0FBOEcsYUFBYSxZQUFZLHVlQUF1ZSwrQkFBK0IsWUFBWSxzREFBc0QsRUFBRSxtQkFBbUIsd0NBQXdDLHlCQUF5QixzQ0FBc0Msc0JBQXNCLGtIQUFrSCxpRkFBaUYsb0hBQW9ILDBOQUEwTix1QkFBdUIseUZBQXlGLDREQUE0RCx5QkFBeUIsWUFBWSw0Q0FBNEMseUdBQXlHLG1yQkFBbXJCLEtBQUssMkJBQTJCLHFMQUFxTCxvQ0FBb0MsZ0JBQWdCLDBNQUEwTSxnREFBZ0QsMElBQTBJLGlCQUFpQixtQ0FBbUMsWUFBWSxHQUFHLG1LQUFtSyxJQUFJLE1BQU0sb0ZBQW9GLGFBQWEsOEdBQThHLGlCQUFpQixzQ0FBc0MsWUFBWSxHQUFHLG1LQUFtSyxJQUFJLE1BQU0sMEZBQTBGLGFBQWEsbUdBQW1HLGtCQUFrQixpTUFBaU0saURBQWlELHlEQUF5RCxpREFBaUQsMkRBQTJELG1DQUFtQyxXQUFXLEVBQUUsNENBQTRDLGtCQUFrQixNQUFNLGtJQUFrSSwwR0FBMEcsbUNBQW1DLDRCQUE0QixFQUFFLG1CQUFtQix1Q0FBdUMseUJBQXlCLDBHQUEwRyxlQUFlLElBQUksMkdBQTJHLGdGQUFnRixtUEFBbVAsMEdBQTBHLDJCQUEyQix5RkFBeUYsbU1BQW1NLDZTQUE2UywwQkFBMEIsTUFBTSxrSUFBa0ksc0NBQXNDLCtCQUErQix5QkFBeUIsdUVBQXVFLGdSQUFnUixlQUFlLEVBQUUscUNBQXFDLHlIQUF5SCxFQUFFLGtDQUFrQyw4TEFBOEwsb0RBQW9ELEVBQUUsOEVBQThFLHNCQUFzQixhQUFhLHFCQUFxQix3SUFBd0ksR0FBRyxzQkFBc0IsYUFBYSx3QkFBd0Isc0RBQXNELHlQQUF5UCxLQUFLLHFEQUFxRCxRQUFRLEVBQUUsd0RBQXdELEtBQUssWUFBWSxjQUFjLDRCQUE0QixXQUFXLFNBQVMsVUFBVSxRQUFRLDhDQUE4QyxRQUFRLDZIQUE2SCxRQUFRLEVBQUUsNENBQTRDLGNBQWMsNEJBQTRCLFdBQVcsd0NBQXdDLFFBQVEsd0ZBQXdGLGdEQUFnRCxRQUFRLDBCQUEwQixzQkFBc0IsZ0RBQWdELFFBQVEsa0JBQWtCLGVBQWUsU0FBUyxrQkFBa0IsRUFBRSxXQUFXLGFBQWEsc0JBQXNCLFNBQVMsa0JBQWtCLEVBQUUsWUFBWSxXQUFXLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLFNBQVMsa0JBQWtCLEVBQUUsVUFBVSxLQUFLLElBQUksZ0RBQWdELHdDQUF3QyxLQUFLLFVBQVUsbURBQW1ELEVBQUUsd0NBQXdDLE9BQU8sT0FBTyxnQkFBZ0IseUlBQXlJLEdBQUcsc0JBQXNCLGFBQWEsK0hBQStILGNBQWMsOERBQThELGFBQWEsK2ZBQStmLGNBQWMsTUFBTSwwUUFBMFEsY0FBYyxNQUFNLG1FQUFtRSxnQkFBZ0IsUUFBUSxtS0FBbUssZ0JBQWdCLFFBQVEsOEVBQThFLGFBQWEsY0FBYyxNQUFNLE1BQU0sNkNBQTZDLE1BQU0sZUFBZSxLQUFLLE1BQU0sZUFBZSxLQUFLLE1BQU0sZUFBZSxLQUFLLE1BQU0sZUFBZSxpQ0FBaUMsT0FBTyxNQUFNLEtBQUssZUFBZSw0QkFBNEIsT0FBTyxPQUFPLGtEQUFrRCxvQkFBb0IsZ0JBQWdCLGtZQUFrWSxrRkFBa0YsZUFBZSwwQ0FBMEMsMkhBQTJILDhEQUE4RCwwSUFBMEksUUFBUSxnQkFBZ0Isc0JBQXNCLFVBQVUsTUFBTSxLQUFLLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLHdCQUF3QiwwRUFBMEUsTUFBTSw2RUFBNkUseUNBQXlDLE1BQU0sY0FBYyw2Q0FBNkMsTUFBTSxnREFBZ0QsbUJBQW1CLHNDQUFzQyxNQUFNLHVEQUF1RCxNQUFNLFlBQVksS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsK0JBQStCLDZDQUE2QyxNQUFNLGtCQUFrQiwyQ0FBMkMsTUFBTSw4R0FBOEcsWUFBWSxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQix5SUFBeUksWUFBWSxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQiw4SEFBOEgsd0JBQXdCLEtBQUssS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsZ0hBQWdILGlDQUFpQyxTQUFTLG9RQUFvUSxvQkFBb0Isd0JBQXdCLGlCQUFpQixRQUFRLG1GQUFtRixFQUFFLCtEQUErRCxnQ0FBZ0Msb0JBQW9CLHdCQUF3QixpQkFBaUIsUUFBUSxzRkFBc0YsRUFBRSwrREFBK0QsbUNBQW1DLFNBQVMsdUJBQXVCLEtBQUssS0FBSyxFQUFFLGlCQUFpQixzQkFBc0Isd0JBQXdCLHNDQUFzQyxNQUFNLE1BQU0sOEVBQThFLE1BQU0sYUFBYSxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQixxQ0FBcUMseUdBQXlHLDRCQUE0QixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixNQUFNLEtBQUssSUFBSSxFQUFFLGlCQUFpQixzQkFBc0IsbUNBQW1DLGlCQUFpQixNQUFNLHFDQUFxQyxZQUFZLFFBQVEsaUJBQWlCLE1BQU0sNENBQTRDLFlBQVksTUFBTSw0QkFBNEIsS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsOEJBQThCLCtDQUErQyxNQUFNLGtEQUFrRCxrQkFBa0IsdUJBQXVCLHVDQUF1QyxzREFBc0QsTUFBTSxVQUFVLE1BQU0sYUFBYSxLQUFLLEVBQUUsaUJBQWlCLHNCQUFzQixtSEFBbUgsc0RBQXNELE1BQU0sbUJBQW1CLGFBQWEsZUFBZSxFQUFFLEtBQUssSUFBSSxFQUFFLGlCQUFpQixzQkFBc0Isb0NBQW9DLEtBQUssVUFBVSx1QkFBdUIscUNBQXFDLGVBQWUsNkRBQTZELDJDQUEyQyxNQUFNLG1CQUFtQixhQUFhLHNCQUFzQixFQUFFLEtBQUssd0VBQXdFLEVBQUUsaUJBQWlCLHNCQUFzQix1Q0FBdUMsS0FBSyxXQUFXLFVBQVUsSUFBSSxFQUFFLGlCQUFpQixzQkFBc0IsMkJBQTJCLDRDQUE0QyxNQUFNLHlDQUF5QyxnQkFBZ0IsVUFBVSxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQixzQ0FBc0MsS0FBSyxVQUFVLElBQUksRUFBRSxpQkFBaUIsc0JBQXNCLHlDQUF5Qyw0QkFBNEIsNENBQTRDLE1BQU0sS0FBSyxJQUFJLHFCQUFxQixxQkFBcUIsb0JBQW9CLHVEQUF1RCxNQUFNLGtCQUFrQixlQUFlLGlFQUFpRSw4Q0FBOEMsTUFBTSx3Q0FBd0MsZ0JBQWdCLHlFQUF5RSx3Q0FBd0MsTUFBTSwyQkFBMkIsa0JBQWtCLHlCQUF5QixpTUFBaU0sTUFBTSxhQUFhLHdFQUF3RSxFQUFFLGlCQUFpQixzQkFBc0Isa0JBQWtCLGdCQUFnQiw2RUFBNkUsRUFBRSxpQkFBaUIsc0JBQXNCLHNCQUFzQiwyQ0FBMkMsVUFBVSxNQUFNLFNBQVMsb0JBQW9CLE1BQU0sU0FBUyw4Q0FBOEMsTUFBTSx1QkFBdUIsb0JBQW9CLGNBQWMsSUFBSSxFQUFFLGlCQUFpQixzQkFBc0IsbUVBQW1FLHlCQUF5QixhQUFhLDBFQUEwRSxFQUFFLGlCQUFpQixzQkFBc0IsZUFBZSxnQkFBZ0IsOEVBQThFLEVBQUUsaUJBQWlCLHNCQUFzQixzQkFBc0IsK0JBQStCLHdDQUF3QyxNQUFNLGtDQUFrQyxvQkFBb0IsY0FBYyxJQUFJLEVBQUUsaUJBQWlCLHNCQUFzQixtRUFBbUUsb0JBQW9CLGdEQUFnRCxNQUFNLFVBQVUseUJBQXlCLHFCQUFxQixtQ0FBbUMsZ0RBQWdELE1BQU0saUZBQWlGLGlDQUFpQyxnQ0FBZ0Msa0JBQWtCLEVBQUUsMEJBQTBCLE1BQU0seUJBQXlCLDhCQUE4QixNQUFNLG1CQUFtQixLQUFLLEtBQUssRUFBRSxpQkFBaUIsc0JBQXNCLHFJQUFxSSx1Q0FBdUMsTUFBTSxNQUFNLFVBQVUsNEJBQTRCLEtBQUssS0FBSyxFQUFFLGlCQUFpQixzQkFBc0IsNkJBQTZCLHlDQUF5QyxNQUFNLE1BQU0sVUFBVSxZQUFZLFFBQVEsYUFBYSxRQUFRLGlCQUFpQix5QkFBeUIsOGRBQThkLDBCQUEwQix5QkFBeUIsY0FBYyxnREFBZ0Qsa0NBQWtDLE1BQU0scUVBQXFFLHNDQUFzQyxpQkFBaUIsd0lBQXdJLG9EQUFvRCxFQUFFLGdGQUFnRixzQkFBc0IsYUFBYSxzYkFBc2Isb0NBQW9DLGlJQUFpSSxRQUFRLE1BQU0sV0FBVyxRQUFRLElBQUksZ0JBQWdCLGFBQWEsZUFBZSxLQUFLLHNFQUFzRSxRQUFRLGNBQWMsS0FBSyxxQkFBcUIsTUFBTSxrQ0FBa0MsZ0NBQWdDLGVBQWUsS0FBSyxxQkFBcUIsUUFBUSxJQUFJLG1DQUFtQywrSUFBK0ksTUFBTSxFQUFFLHdGQUF3Rix5Q0FBeUMsRUFBRSxhQUFhLElBQUksT0FBTywwQ0FBMEMsZUFBZSxZQUFZLG1CQUFtQixtQ0FBbUMseUJBQXlCLFdBQVcsK0NBQStDLDRCQUE0QixvREFBb0QsRUFBRSxxQkFBcUIsc0JBQXNCLGFBQWEsV0FBVyw0S0FBNEssR0FBRyxzQkFBc0IsYUFBYSxtQ0FBbUMsY0FBYyxtQkFBbUIsT0FBTyxRQUFRLHdVQUF3VSxLQUFLLHFCQUFxQixLQUFLLHFCQUFxQixLQUFLLHFCQUFxQixLQUFLLG1CQUFtQixLQUFLLHlCQUF5QixzQkFBc0IsaUhBQWlILGdCQUFnQixpREFBaUQsY0FBYyxpQ0FBaUMsZ0JBQWdCLHNFQUFzRSxrQkFBa0Isb0pBQW9KLGtCQUFrQixxQkFBcUIsZ0JBQWdCLFlBQVksMEJBQTBCLEVBQUUsYUFBYSxrQkFBa0IsNkJBQTZCLFFBQVEsS0FBSyx1QkFBdUIsUUFBUSxLQUFLLEtBQUssZUFBZSw2QkFBNkIsY0FBYyxNQUFNLFFBQVEsSUFBSSx1QkFBdUIsUUFBUSxJQUFJLHVCQUF1QixRQUFRLElBQUkscUJBQXFCLG1FQUFtRSxjQUFjLHVHQUF1RyxvQkFBb0IsZ0JBQWdCLDBDQUEwQyxrQkFBa0IsMkJBQTJCLGlHQUFpRywrQkFBK0IsWUFBWSxrQkFBa0IsZ0JBQWdCLHVCQUF1Qix3TkFBd04sRUFBRSxTQUFTLGdCQUFnQixrR0FBa0csa0NBQWtDLElBQUksa0VBQWtFLEtBQUssYUFBYSxnR0FBZ0csaUNBQWlDLEtBQUssYUFBYSxRQUFRLHdQQUF3UCxFQUFFLDZDQUE2QywyS0FBMkssUUFBUSxLQUFLLG9CQUFvQiwrQ0FBK0MsSUFBSSx3S0FBd0ssVUFBVSxHQUFHLFVBQVUsa0JBQWtCLEtBQUssd0RBQXdELFdBQVcsUUFBUSxNQUFNLHdCQUF3QixNQUFNLHFGQUFxRix3QkFBd0Isa0JBQWtCLGdDQUFnQyw4Q0FBOEMsS0FBSyxzTUFBc00sa0JBQWtCLGdDQUFnQywyQkFBMkIsS0FBSywyQ0FBMkMsWUFBWSx3QkFBd0IsRUFBRSwwSUFBMEksaURBQWlELEtBQUssU0FBUyxvQkFBb0Isd0NBQXdDLHVGQUF1RixXQUFXLHVCQUF1QixlQUFlLCtCQUErQixVQUFVLE1BQU0sbUJBQW1CLFVBQVUsYUFBYSxtQkFBbUIsS0FBSyxtQkFBbUIsVUFBVSxhQUFhLFVBQVUsSUFBSSxzQkFBc0IsWUFBWSxpQkFBaUIsUUFBUSxLQUFLLFdBQVcsUUFBUSxPQUFPLHVCQUF1QixLQUFLLE9BQU8sdUJBQXVCLEtBQUssT0FBTyx1QkFBdUIsS0FBSyxPQUFPLHVCQUF1QixtQkFBbUIsSUFBSSw2QkFBNkIsc0VBQXNFLCtIQUErSCwwREFBMEQsWUFBWSwrREFBK0QsbUJBQW1CLFFBQVEsTUFBTSxpREFBaUQsMEVBQTBFLFNBQVMsSUFBSSxxQ0FBcUMsU0FBUywrQ0FBK0MsTUFBTSwrRkFBK0YsOEJBQThCLEtBQUssa0NBQWtDLG9MQUFvTCxNQUFNLDJDQUEyQyxJQUFJLCtCQUErQiwwQ0FBMEMsMkZBQTJGLDZCQUE2QixnUkFBZ1IseUJBQXlCLDhCQUE4Qiw0SUFBNEksS0FBSyxFQUFFLHFCQUFxQixzQkFBc0IsYUFBYSxxQkFBcUIsNkxBQTZMLEdBQUcsc0JBQXNCLGFBQWEsa0VBQWtFLGdDQUFnQywwQ0FBMEMsR0FBRyxFQUFFLEdBQUcsV0FBVyxFOzs7Ozs7Ozs7Ozs7O0FDWjd0NkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUs7O0FBRXpCO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CLHVDQUF1QyxPQUFPO0FBQ3BHLE9BQU87O0FBRVAsZ0JBQWdCO0FBQ2hCO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyohXG5cbkpTWmlwIHYzLjUuMCAtIEEgSmF2YVNjcmlwdCBjbGFzcyBmb3IgZ2VuZXJhdGluZyBhbmQgcmVhZGluZyB6aXAgZmlsZXNcbjxodHRwOi8vc3R1YXJ0ay5jb20vanN6aXA+XG5cbihjKSAyMDA5LTIwMTYgU3R1YXJ0IEtuaWdodGxleSA8c3R1YXJ0IFthdF0gc3R1YXJ0ay5jb20+XG5EdWFsIGxpY2VuY2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBvciBHUEx2My4gU2VlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vU3R1ay9qc3ppcC9tYXN0ZXIvTElDRU5TRS5tYXJrZG93bi5cblxuSlNaaXAgdXNlcyB0aGUgbGlicmFyeSBwYWtvIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSA6XG5odHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3Bha28vYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsdCl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCF0JiZlKXJldHVybiBlKHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIGk9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBpLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsaX12YXIgbj1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwobi5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBlPWFbcl1bMV1bdF07cmV0dXJuIHUoZXx8dCl9LG4sbi5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsdD0wO3Q8aC5sZW5ndGg7dCsrKXUoaFt0XSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9dChcIi4vdXRpbHNcIiksZD10KFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyLGksbixzLGEsbyxoPVtdLHU9MCxsPXQubGVuZ3RoLGY9bCxkPVwic3RyaW5nXCIhPT1jLmdldFR5cGVPZih0KTt1PHQubGVuZ3RoOylmPWwtdSxpPWQ/KGU9dFt1KytdLHI9dTxsP3RbdSsrXTowLHU8bD90W3UrK106MCk6KGU9dC5jaGFyQ29kZUF0KHUrKykscj11PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/dC5jaGFyQ29kZUF0KHUrKyk6MCksbj1lPj4yLHM9KDMmZSk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8aT4+Njo2NCxvPTI8Zj82MyZpOjY0LGgucHVzaChwLmNoYXJBdChuKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYodC5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyoodD10LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpKS5sZW5ndGgvNDtpZih0LmNoYXJBdCh0Lmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLHQuY2hhckF0KHQubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWQudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288dC5sZW5ndGg7KWU9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpPDwyfChuPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSk+PjQscj0oMTUmbik8PDR8KHM9cC5pbmRleE9mKHQuY2hhckF0KG8rKykpKT4+MixpPSgzJnMpPDw2fChhPXAuaW5kZXhPZih0LmNoYXJBdChvKyspKSksbFtoKytdPWUsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1pKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL2V4dGVybmFsXCIpLG49dChcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz10KFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCIpLGE9dChcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIik7cz10KFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCIpO2Z1bmN0aW9uIG8odCxlLHIsaSxuKXt0aGlzLmNvbXByZXNzZWRTaXplPXQsdGhpcy51bmNvbXByZXNzZWRTaXplPWUsdGhpcy5jcmMzMj1yLHRoaXMuY29tcHJlc3Npb249aSx0aGlzLmNvbXByZXNzZWRDb250ZW50PW59by5wcm90b3R5cGU9e2dldENvbnRlbnRXb3JrZXI6ZnVuY3Rpb24oKXt2YXIgdD1uZXcgbihpLlByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXByZXNzZWRDb250ZW50KSkucGlwZSh0aGlzLmNvbXByZXNzaW9uLnVuY29tcHJlc3NXb3JrZXIoKSkucGlwZShuZXcgcyhcImRhdGFfbGVuZ3RoXCIpKSxlPXRoaXM7cmV0dXJuIHQub24oXCJlbmRcIixmdW5jdGlvbigpe2lmKHRoaXMuc3RyZWFtSW5mby5kYXRhX2xlbmd0aCE9PWUudW5jb21wcmVzc2VkU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJCdWcgOiB1bmNvbXByZXNzZWQgZGF0YSBzaXplIG1pc21hdGNoXCIpfSksdH0sZ2V0Q29tcHJlc3NlZFdvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihpLlByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXByZXNzZWRDb250ZW50KSkud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2VkU2l6ZVwiLHRoaXMuY29tcHJlc3NlZFNpemUpLndpdGhTdHJlYW1JbmZvKFwidW5jb21wcmVzc2VkU2l6ZVwiLHRoaXMudW5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLHRoaXMuY3JjMzIpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0aGlzLmNvbXByZXNzaW9uKX19LG8uY3JlYXRlV29ya2VyRnJvbT1mdW5jdGlvbih0LGUscil7cmV0dXJuIHQucGlwZShuZXcgYSkucGlwZShuZXcgcyhcInVuY29tcHJlc3NlZFNpemVcIikpLnBpcGUoZS5jb21wcmVzc1dvcmtlcihyKSkucGlwZShuZXcgcyhcImNvbXByZXNzZWRTaXplXCIpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzaW9uXCIsZSl9LGUuZXhwb3J0cz1vfSx7XCIuL2V4dGVybmFsXCI6NixcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vc3RyZWFtL0RhdGFMZW5ndGhQcm9iZVwiOjI2LFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiOjI3fV0sMzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO3IuU1RPUkU9e21hZ2ljOlwiXFwwXFwwXCIsY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBpKFwiU1RPUkUgY29tcHJlc3Npb25cIil9LHVuY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkoXCJTVE9SRSBkZWNvbXByZXNzaW9uXCIpfX0sci5ERUZMQVRFPXQoXCIuL2ZsYXRlXCIpfSx7XCIuL2ZsYXRlXCI6NyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi91dGlsc1wiKTt2YXIgbz1mdW5jdGlvbigpe2Zvcih2YXIgdCxlPVtdLHI9MDtyPDI1NjtyKyspe3Q9cjtmb3IodmFyIGk9MDtpPDg7aSsrKXQ9MSZ0PzM5ODgyOTIzODRedD4+PjE6dD4+PjE7ZVtyXT10fXJldHVybiBlfSgpO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDAhPT10JiZ0Lmxlbmd0aD9cInN0cmluZ1wiIT09aS5nZXRUeXBlT2YodCk/ZnVuY3Rpb24odCxlLHIsaSl7dmFyIG49byxzPWkrcjt0Xj0tMTtmb3IodmFyIGE9aTthPHM7YSsrKXQ9dD4+PjheblsyNTUmKHReZVthXSldO3JldHVybi0xXnR9KDB8ZSx0LHQubGVuZ3RoLDApOmZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuPW8scz1pK3I7dF49LTE7Zm9yKHZhciBhPWk7YTxzO2ErKyl0PXQ+Pj44Xm5bMjU1Jih0XmUuY2hhckNvZGVBdChhKSldO3JldHVybi0xXnR9KDB8ZSx0LHQubGVuZ3RoLDApOjB9fSx7XCIuL3V0aWxzXCI6MzJ9XSw1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ci5iYXNlNjQ9ITEsci5iaW5hcnk9ITEsci5kaXI9ITEsci5jcmVhdGVGb2xkZXJzPSEwLHIuZGF0ZT1udWxsLHIuY29tcHJlc3Npb249bnVsbCxyLmNvbXByZXNzaW9uT3B0aW9ucz1udWxsLHIuY29tbWVudD1udWxsLHIudW5peFBlcm1pc3Npb25zPW51bGwsci5kb3NQZXJtaXNzaW9ucz1udWxsfSx7fV0sNjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPW51bGw7aT1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOnQoXCJsaWVcIiksZS5leHBvcnRzPXtQcm9taXNlOml9fSx7bGllOjM3fV0sNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDE2QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MzJBcnJheSxuPXQoXCJwYWtvXCIpLHM9dChcIi4vdXRpbHNcIiksYT10KFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxvPWk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiO2Z1bmN0aW9uIGgodCxlKXthLmNhbGwodGhpcyxcIkZsYXRlV29ya2VyL1wiK3QpLHRoaXMuX3Bha289bnVsbCx0aGlzLl9wYWtvQWN0aW9uPXQsdGhpcy5fcGFrb09wdGlvbnM9ZSx0aGlzLm1ldGE9e319ci5tYWdpYz1cIlxcYlxcMFwiLHMuaW5oZXJpdHMoaCxhKSxoLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24odCl7dGhpcy5tZXRhPXQubWV0YSxudWxsPT09dGhpcy5fcGFrbyYmdGhpcy5fY3JlYXRlUGFrbygpLHRoaXMuX3Bha28ucHVzaChzLnRyYW5zZm9ybVRvKG8sdC5kYXRhKSwhMSl9LGgucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuZmx1c2guY2FsbCh0aGlzKSxudWxsPT09dGhpcy5fcGFrbyYmdGhpcy5fY3JlYXRlUGFrbygpLHRoaXMuX3Bha28ucHVzaChbXSwhMCl9LGgucHJvdG90eXBlLmNsZWFuVXA9ZnVuY3Rpb24oKXthLnByb3RvdHlwZS5jbGVhblVwLmNhbGwodGhpcyksdGhpcy5fcGFrbz1udWxsfSxoLnByb3RvdHlwZS5fY3JlYXRlUGFrbz1mdW5jdGlvbigpe3RoaXMuX3Bha289bmV3IG5bdGhpcy5fcGFrb0FjdGlvbl0oe3JhdzohMCxsZXZlbDp0aGlzLl9wYWtvT3B0aW9ucy5sZXZlbHx8LTF9KTt2YXIgZT10aGlzO3RoaXMuX3Bha28ub25EYXRhPWZ1bmN0aW9uKHQpe2UucHVzaCh7ZGF0YTp0LG1ldGE6ZS5tZXRhfSl9fSxyLmNvbXByZXNzV29ya2VyPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaChcIkRlZmxhdGVcIix0KX0sci51bmNvbXByZXNzV29ya2VyPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBoKFwiSW5mbGF0ZVwiLHt9KX19LHtcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vdXRpbHNcIjozMixwYWtvOjM4fV0sODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIEEodCxlKXt2YXIgcixpPVwiXCI7Zm9yKHI9MDtyPGU7cisrKWkrPVN0cmluZy5mcm9tQ2hhckNvZGUoMjU1JnQpLHQ+Pj49ODtyZXR1cm4gaX1mdW5jdGlvbiBpKHQsZSxyLGksbixzKXt2YXIgYSxvLGg9dC5maWxlLHU9dC5jb21wcmVzc2lvbixsPXMhPT1PLnV0ZjhlbmNvZGUsZj1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIscyhoLm5hbWUpKSxkPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixPLnV0ZjhlbmNvZGUoaC5uYW1lKSksYz1oLmNvbW1lbnQscD1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIscyhjKSksbT1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGMpKSxfPWQubGVuZ3RoIT09aC5uYW1lLmxlbmd0aCxnPW0ubGVuZ3RoIT09Yy5sZW5ndGgsYj1cIlwiLHY9XCJcIix5PVwiXCIsdz1oLmRpcixrPWguZGF0ZSx4PXtjcmMzMjowLGNvbXByZXNzZWRTaXplOjAsdW5jb21wcmVzc2VkU2l6ZTowfTtlJiYhcnx8KHguY3JjMzI9dC5jcmMzMix4LmNvbXByZXNzZWRTaXplPXQuY29tcHJlc3NlZFNpemUseC51bmNvbXByZXNzZWRTaXplPXQudW5jb21wcmVzc2VkU2l6ZSk7dmFyIFM9MDtlJiYoU3w9OCksbHx8IV8mJiFnfHwoU3w9MjA0OCk7dmFyIHo9MCxDPTA7dyYmKHp8PTE2KSxcIlVOSVhcIj09PW4/KEM9Nzk4LHp8PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dDtyZXR1cm4gdHx8KHI9ZT8xNjg5MzozMzIwNCksKDY1NTM1JnIpPDwxNn0oaC51bml4UGVybWlzc2lvbnMsdykpOihDPTIwLHp8PWZ1bmN0aW9uKHQpe3JldHVybiA2MyYodHx8MCl9KGguZG9zUGVybWlzc2lvbnMpKSxhPWsuZ2V0VVRDSG91cnMoKSxhPDw9NixhfD1rLmdldFVUQ01pbnV0ZXMoKSxhPDw9NSxhfD1rLmdldFVUQ1NlY29uZHMoKS8yLG89ay5nZXRVVENGdWxsWWVhcigpLTE5ODAsbzw8PTQsb3w9ay5nZXRVVENNb250aCgpKzEsbzw8PTUsb3w9ay5nZXRVVENEYXRlKCksXyYmKHY9QSgxLDEpK0EoQihmKSw0KStkLGIrPVwidXBcIitBKHYubGVuZ3RoLDIpK3YpLGcmJih5PUEoMSwxKStBKEIocCksNCkrbSxiKz1cInVjXCIrQSh5Lmxlbmd0aCwyKSt5KTt2YXIgRT1cIlwiO3JldHVybiBFKz1cIlxcblxcMFwiLEUrPUEoUywyKSxFKz11Lm1hZ2ljLEUrPUEoYSwyKSxFKz1BKG8sMiksRSs9QSh4LmNyYzMyLDQpLEUrPUEoeC5jb21wcmVzc2VkU2l6ZSw0KSxFKz1BKHgudW5jb21wcmVzc2VkU2l6ZSw0KSxFKz1BKGYubGVuZ3RoLDIpLEUrPUEoYi5sZW5ndGgsMikse2ZpbGVSZWNvcmQ6Ui5MT0NBTF9GSUxFX0hFQURFUitFK2YrYixkaXJSZWNvcmQ6Ui5DRU5UUkFMX0ZJTEVfSEVBREVSK0EoQywyKStFK0EocC5sZW5ndGgsMikrXCJcXDBcXDBcXDBcXDBcIitBKHosNCkrQShpLDQpK2YrYitwfX12YXIgST10KFwiLi4vdXRpbHNcIiksbj10KFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksTz10KFwiLi4vdXRmOFwiKSxCPXQoXCIuLi9jcmMzMlwiKSxSPXQoXCIuLi9zaWduYXR1cmVcIik7ZnVuY3Rpb24gcyh0LGUscixpKXtuLmNhbGwodGhpcyxcIlppcEZpbGVXb3JrZXJcIiksdGhpcy5ieXRlc1dyaXR0ZW49MCx0aGlzLnppcENvbW1lbnQ9ZSx0aGlzLnppcFBsYXRmb3JtPXIsdGhpcy5lbmNvZGVGaWxlTmFtZT1pLHRoaXMuc3RyZWFtRmlsZXM9dCx0aGlzLmFjY3VtdWxhdGU9ITEsdGhpcy5jb250ZW50QnVmZmVyPVtdLHRoaXMuZGlyUmVjb3Jkcz1bXSx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQ9MCx0aGlzLmVudHJpZXNDb3VudD0wLHRoaXMuY3VycmVudEZpbGU9bnVsbCx0aGlzLl9zb3VyY2VzPVtdfUkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWV0YS5wZXJjZW50fHwwLHI9dGhpcy5lbnRyaWVzQ291bnQsaT10aGlzLl9zb3VyY2VzLmxlbmd0aDt0aGlzLmFjY3VtdWxhdGU/dGhpcy5jb250ZW50QnVmZmVyLnB1c2godCk6KHRoaXMuYnl0ZXNXcml0dGVuKz10LmRhdGEubGVuZ3RoLG4ucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLHtkYXRhOnQuZGF0YSxtZXRhOntjdXJyZW50RmlsZTp0aGlzLmN1cnJlbnRGaWxlLHBlcmNlbnQ6cj8oZSsxMDAqKHItaS0xKSkvcjoxMDB9fSkpfSxzLnByb3RvdHlwZS5vcGVuZWRTb3VyY2U9ZnVuY3Rpb24odCl7dGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PXRoaXMuYnl0ZXNXcml0dGVuLHRoaXMuY3VycmVudEZpbGU9dC5maWxlLm5hbWU7dmFyIGU9dGhpcy5zdHJlYW1GaWxlcyYmIXQuZmlsZS5kaXI7aWYoZSl7dmFyIHI9aSh0LGUsITEsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7dGhpcy5wdXNoKHtkYXRhOnIuZmlsZVJlY29yZCxtZXRhOntwZXJjZW50OjB9fSl9ZWxzZSB0aGlzLmFjY3VtdWxhdGU9ITB9LHMucHJvdG90eXBlLmNsb3NlZFNvdXJjZT1mdW5jdGlvbih0KXt0aGlzLmFjY3VtdWxhdGU9ITE7dmFyIGU9dGhpcy5zdHJlYW1GaWxlcyYmIXQuZmlsZS5kaXIscj1pKHQsZSwhMCx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQsdGhpcy56aXBQbGF0Zm9ybSx0aGlzLmVuY29kZUZpbGVOYW1lKTtpZih0aGlzLmRpclJlY29yZHMucHVzaChyLmRpclJlY29yZCksZSl0aGlzLnB1c2goe2RhdGE6ZnVuY3Rpb24odCl7cmV0dXJuIFIuREFUQV9ERVNDUklQVE9SK0EodC5jcmMzMiw0KStBKHQuY29tcHJlc3NlZFNpemUsNCkrQSh0LnVuY29tcHJlc3NlZFNpemUsNCl9KHQpLG1ldGE6e3BlcmNlbnQ6MTAwfX0pO2Vsc2UgZm9yKHRoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pO3RoaXMuY29udGVudEJ1ZmZlci5sZW5ndGg7KXRoaXMucHVzaCh0aGlzLmNvbnRlbnRCdWZmZXIuc2hpZnQoKSk7dGhpcy5jdXJyZW50RmlsZT1udWxsfSxzLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmJ5dGVzV3JpdHRlbixlPTA7ZTx0aGlzLmRpclJlY29yZHMubGVuZ3RoO2UrKyl0aGlzLnB1c2goe2RhdGE6dGhpcy5kaXJSZWNvcmRzW2VdLG1ldGE6e3BlcmNlbnQ6MTAwfX0pO3ZhciByPXRoaXMuYnl0ZXNXcml0dGVuLXQsaT1mdW5jdGlvbih0LGUscixpLG4pe3ZhciBzPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixuKGkpKTtyZXR1cm4gUi5DRU5UUkFMX0RJUkVDVE9SWV9FTkQrXCJcXDBcXDBcXDBcXDBcIitBKHQsMikrQSh0LDIpK0EoZSw0KStBKHIsNCkrQShzLmxlbmd0aCwyKStzfSh0aGlzLmRpclJlY29yZHMubGVuZ3RoLHIsdCx0aGlzLnppcENvbW1lbnQsdGhpcy5lbmNvZGVGaWxlTmFtZSk7dGhpcy5wdXNoKHtkYXRhOmksbWV0YTp7cGVyY2VudDoxMDB9fSl9LHMucHJvdG90eXBlLnByZXBhcmVOZXh0U291cmNlPWZ1bmN0aW9uKCl7dGhpcy5wcmV2aW91cz10aGlzLl9zb3VyY2VzLnNoaWZ0KCksdGhpcy5vcGVuZWRTb3VyY2UodGhpcy5wcmV2aW91cy5zdHJlYW1JbmZvKSx0aGlzLmlzUGF1c2VkP3RoaXMucHJldmlvdXMucGF1c2UoKTp0aGlzLnByZXZpb3VzLnJlc3VtZSgpfSxzLnByb3RvdHlwZS5yZWdpc3RlclByZXZpb3VzPWZ1bmN0aW9uKHQpe3RoaXMuX3NvdXJjZXMucHVzaCh0KTt2YXIgZT10aGlzO3JldHVybiB0Lm9uKFwiZGF0YVwiLGZ1bmN0aW9uKHQpe2UucHJvY2Vzc0NodW5rKHQpfSksdC5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ZS5jbG9zZWRTb3VyY2UoZS5wcmV2aW91cy5zdHJlYW1JbmZvKSxlLl9zb3VyY2VzLmxlbmd0aD9lLnByZXBhcmVOZXh0U291cmNlKCk6ZS5lbmQoKX0pLHQub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UuZXJyb3IodCl9KSx0aGlzfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMucHJldmlvdXMmJnRoaXMuX3NvdXJjZXMubGVuZ3RoPyh0aGlzLnByZXBhcmVOZXh0U291cmNlKCksITApOnRoaXMucHJldmlvdXN8fHRoaXMuX3NvdXJjZXMubGVuZ3RofHx0aGlzLmdlbmVyYXRlZEVycm9yP3ZvaWQgMDoodGhpcy5lbmQoKSwhMCkpfSxzLnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9zb3VyY2VzO2lmKCFuLnByb3RvdHlwZS5lcnJvci5jYWxsKHRoaXMsdCkpcmV0dXJuITE7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspdHJ5e2Vbcl0uZXJyb3IodCl9Y2F0Y2godCl7fXJldHVybiEwfSxzLnByb3RvdHlwZS5sb2NrPWZ1bmN0aW9uKCl7bi5wcm90b3R5cGUubG9jay5jYWxsKHRoaXMpO2Zvcih2YXIgdD10aGlzLl9zb3VyY2VzLGU9MDtlPHQubGVuZ3RoO2UrKyl0W2VdLmxvY2soKX0sZS5leHBvcnRzPXN9LHtcIi4uL2NyYzMyXCI6NCxcIi4uL3NpZ25hdHVyZVwiOjIzLFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0ZjhcIjozMSxcIi4uL3V0aWxzXCI6MzJ9XSw5OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHU9dChcIi4uL2NvbXByZXNzaW9uc1wiKSxpPXQoXCIuL1ppcEZpbGVXb3JrZXJcIik7ci5nZW5lcmF0ZVdvcmtlcj1mdW5jdGlvbih0LGEsZSl7dmFyIG89bmV3IGkoYS5zdHJlYW1GaWxlcyxlLGEucGxhdGZvcm0sYS5lbmNvZGVGaWxlTmFtZSksaD0wO3RyeXt0LmZvckVhY2goZnVuY3Rpb24odCxlKXtoKys7dmFyIHI9ZnVuY3Rpb24odCxlKXt2YXIgcj10fHxlLGk9dVtyXTtpZighaSl0aHJvdyBuZXcgRXJyb3IocitcIiBpcyBub3QgYSB2YWxpZCBjb21wcmVzc2lvbiBtZXRob2QgIVwiKTtyZXR1cm4gaX0oZS5vcHRpb25zLmNvbXByZXNzaW9uLGEuY29tcHJlc3Npb24pLGk9ZS5vcHRpb25zLmNvbXByZXNzaW9uT3B0aW9uc3x8YS5jb21wcmVzc2lvbk9wdGlvbnN8fHt9LG49ZS5kaXIscz1lLmRhdGU7ZS5fY29tcHJlc3NXb3JrZXIocixpKS53aXRoU3RyZWFtSW5mbyhcImZpbGVcIix7bmFtZTp0LGRpcjpuLGRhdGU6cyxjb21tZW50OmUuY29tbWVudHx8XCJcIix1bml4UGVybWlzc2lvbnM6ZS51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6ZS5kb3NQZXJtaXNzaW9uc30pLnBpcGUobyl9KSxvLmVudHJpZXNDb3VudD1ofWNhdGNoKHQpe28uZXJyb3IodCl9cmV0dXJuIG99fSx7XCIuLi9jb21wcmVzc2lvbnNcIjozLFwiLi9aaXBGaWxlV29ya2VyXCI6OH1dLDEwOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSgpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGkpKXJldHVybiBuZXcgaTtpZihhcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIlRoZSBjb25zdHJ1Y3RvciB3aXRoIHBhcmFtZXRlcnMgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIik7dGhpcy5maWxlcz17fSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IGk7Zm9yKHZhciBlIGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1tlXSYmKHRbZV09dGhpc1tlXSk7cmV0dXJuIHR9fShpLnByb3RvdHlwZT10KFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz10KFwiLi9sb2FkXCIpLGkuc3VwcG9ydD10KFwiLi9zdXBwb3J0XCIpLGkuZGVmYXVsdHM9dChcIi4vZGVmYXVsdHNcIiksaS52ZXJzaW9uPVwiMy41LjBcIixpLmxvYWRBc3luYz1mdW5jdGlvbih0LGUpe3JldHVybihuZXcgaSkubG9hZEFzeW5jKHQsZSl9LGkuZXh0ZXJuYWw9dChcIi4vZXh0ZXJuYWxcIiksZS5leHBvcnRzPWl9LHtcIi4vZGVmYXVsdHNcIjo1LFwiLi9leHRlcm5hbFwiOjYsXCIuL2xvYWRcIjoxMSxcIi4vb2JqZWN0XCI6MTUsXCIuL3N1cHBvcnRcIjozMH1dLDExOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vdXRpbHNcIiksbj10KFwiLi9leHRlcm5hbFwiKSxvPXQoXCIuL3V0ZjhcIiksaD0oaT10KFwiLi91dGlsc1wiKSx0KFwiLi96aXBFbnRyaWVzXCIpKSxzPXQoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLHU9dChcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gbChpKXtyZXR1cm4gbmV3IG4uUHJvbWlzZShmdW5jdGlvbih0LGUpe3ZhciByPWkuZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBzKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlKHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PWkuZGVjb21wcmVzc2VkLmNyYzMyP2UobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTp0KCl9KS5yZXN1bWUoKX0pfWUuZXhwb3J0cz1mdW5jdGlvbih0LHMpe3ZhciBhPXRoaXM7cmV0dXJuIHM9aS5leHRlbmQoc3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm8udXRmOGRlY29kZX0pLHUuaXNOb2RlJiZ1LmlzU3RyZWFtKHQpP24uUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6aS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIix0LCEwLHMub3B0aW1pemVkQmluYXJ5U3RyaW5nLHMuYmFzZTY0KS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBoKHMpO3JldHVybiBlLmxvYWQodCksZX0pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9W24uUHJvbWlzZS5yZXNvbHZlKHQpXSxyPXQuZmlsZXM7aWYocy5jaGVja0NSQzMyKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKWUucHVzaChsKHJbaV0pKTtyZXR1cm4gbi5Qcm9taXNlLmFsbChlKX0pLnRoZW4oZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQuc2hpZnQoKSxyPWUuZmlsZXMsaT0wO2k8ci5sZW5ndGg7aSsrKXt2YXIgbj1yW2ldO2EuZmlsZShuLmZpbGVOYW1lU3RyLG4uZGVjb21wcmVzc2VkLHtiaW5hcnk6ITAsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiEwLGRhdGU6bi5kYXRlLGRpcjpuLmRpcixjb21tZW50Om4uZmlsZUNvbW1lbnRTdHIubGVuZ3RoP24uZmlsZUNvbW1lbnRTdHI6bnVsbCx1bml4UGVybWlzc2lvbnM6bi51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6bi5kb3NQZXJtaXNzaW9ucyxjcmVhdGVGb2xkZXJzOnMuY3JlYXRlRm9sZGVyc30pfXJldHVybiBlLnppcENvbW1lbnQubGVuZ3RoJiYoYS5jb21tZW50PWUuemlwQ29tbWVudCksYX0pfX0se1wiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cmllc1wiOjMzfV0sMTI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi4vdXRpbHNcIiksbj10KFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyh0LGUpe24uY2FsbCh0aGlzLFwiTm9kZWpzIHN0cmVhbSBpbnB1dCBhZGFwdGVyIGZvciBcIit0KSx0aGlzLl91cHN0cmVhbUVuZGVkPSExLHRoaXMuX2JpbmRTdHJlYW0oZSl9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLl9iaW5kU3RyZWFtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7KHRoaXMuX3N0cmVhbT10KS5wYXVzZSgpLHQub24oXCJkYXRhXCIsZnVuY3Rpb24odCl7ZS5wdXNoKHtkYXRhOnQsbWV0YTp7cGVyY2VudDowfX0pfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UuaXNQYXVzZWQ/dGhpcy5nZW5lcmF0ZWRFcnJvcj10OmUuZXJyb3IodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ZS5pc1BhdXNlZD9lLl91cHN0cmVhbUVuZGVkPSEwOmUuZW5kKCl9KX0scy5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4hIW4ucHJvdG90eXBlLnBhdXNlLmNhbGwodGhpcykmJih0aGlzLl9zdHJlYW0ucGF1c2UoKSwhMCl9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJih0aGlzLl91cHN0cmVhbUVuZGVkP3RoaXMuZW5kKCk6dGhpcy5fc3RyZWFtLnJlc3VtZSgpLCEwKX0sZS5leHBvcnRzPXN9LHtcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGlsc1wiOjMyfV0sMTM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10KFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlO2Z1bmN0aW9uIGkodCxlLHIpe24uY2FsbCh0aGlzLGUpLHRoaXMuX2hlbHBlcj10O3ZhciBpPXRoaXM7dC5vbihcImRhdGFcIixmdW5jdGlvbih0LGUpe2kucHVzaCh0KXx8aS5faGVscGVyLnBhdXNlKCksciYmcihlKX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtpLmVtaXQoXCJlcnJvclwiLHQpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe2kucHVzaChudWxsKX0pfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLl9yZWFkPWZ1bmN0aW9uKCl7dGhpcy5faGVscGVyLnJlc3VtZSgpfSxlLmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMTQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e2lzTm9kZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLG5ld0J1ZmZlckZyb206ZnVuY3Rpb24odCxlKXtpZihCdWZmZXIuZnJvbSYmQnVmZmVyLmZyb20hPT1VaW50OEFycmF5LmZyb20pcmV0dXJuIEJ1ZmZlci5mcm9tKHQsZSk7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkYXRhXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKTtyZXR1cm4gbmV3IEJ1ZmZlcih0LGUpfSxhbGxvY0J1ZmZlcjpmdW5jdGlvbih0KXtpZihCdWZmZXIuYWxsb2MpcmV0dXJuIEJ1ZmZlci5hbGxvYyh0KTt2YXIgZT1uZXcgQnVmZmVyKHQpO3JldHVybiBlLmZpbGwoMCksZX0saXNCdWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih0KX0saXNTdHJlYW06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucGF1c2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQucmVzdW1lfX19LHt9XSwxNTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCxlLHIpe3ZhciBpLG49dS5nZXRUeXBlT2YoZSkscz11LmV4dGVuZChyfHx7fSxmKTtzLmRhdGU9cy5kYXRlfHxuZXcgRGF0ZSxudWxsIT09cy5jb21wcmVzc2lvbiYmKHMuY29tcHJlc3Npb249cy5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpKSxcInN0cmluZ1wiPT10eXBlb2Ygcy51bml4UGVybWlzc2lvbnMmJihzLnVuaXhQZXJtaXNzaW9ucz1wYXJzZUludChzLnVuaXhQZXJtaXNzaW9ucyw4KSkscy51bml4UGVybWlzc2lvbnMmJjE2Mzg0JnMudW5peFBlcm1pc3Npb25zJiYocy5kaXI9ITApLHMuZG9zUGVybWlzc2lvbnMmJjE2JnMuZG9zUGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kaXImJih0PWcodCkpLHMuY3JlYXRlRm9sZGVycyYmKGk9Xyh0KSkmJmIuY2FsbCh0aGlzLGksITApO3ZhciBhPVwic3RyaW5nXCI9PT1uJiYhMT09PXMuYmluYXJ5JiYhMT09PXMuYmFzZTY0O3ImJnZvaWQgMCE9PXIuYmluYXJ5fHwocy5iaW5hcnk9IWEpLChlIGluc3RhbmNlb2YgZCYmMD09PWUudW5jb21wcmVzc2VkU2l6ZXx8cy5kaXJ8fCFlfHwwPT09ZS5sZW5ndGgpJiYocy5iYXNlNjQ9ITEscy5iaW5hcnk9ITAsZT1cIlwiLHMuY29tcHJlc3Npb249XCJTVE9SRVwiLG49XCJzdHJpbmdcIik7dmFyIG89bnVsbDtvPWUgaW5zdGFuY2VvZiBkfHxlIGluc3RhbmNlb2YgbD9lOnAuaXNOb2RlJiZwLmlzU3RyZWFtKGUpP25ldyBtKHQsZSk6dS5wcmVwYXJlQ29udGVudCh0LGUscy5iaW5hcnkscy5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcscy5iYXNlNjQpO3ZhciBoPW5ldyBjKHQsbyxzKTt0aGlzLmZpbGVzW3RdPWh9dmFyIG49dChcIi4vdXRmOFwiKSx1PXQoXCIuL3V0aWxzXCIpLGw9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksYT10KFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLGY9dChcIi4vZGVmYXVsdHNcIiksZD10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGM9dChcIi4vemlwT2JqZWN0XCIpLG89dChcIi4vZ2VuZXJhdGVcIikscD10KFwiLi9ub2RlanNVdGlsc1wiKSxtPXQoXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIiksXz1mdW5jdGlvbih0KXtcIi9cIj09PXQuc2xpY2UoLTEpJiYodD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpKTt2YXIgZT10Lmxhc3RJbmRleE9mKFwiL1wiKTtyZXR1cm4gMDxlP3Quc3Vic3RyaW5nKDAsZSk6XCJcIn0sZz1mdW5jdGlvbih0KXtyZXR1cm5cIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpLHR9LGI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZT12b2lkIDAhPT1lP2U6Zi5jcmVhdGVGb2xkZXJzLHQ9Zyh0KSx0aGlzLmZpbGVzW3RdfHxzLmNhbGwodGhpcyx0LG51bGwse2RpcjohMCxjcmVhdGVGb2xkZXJzOmV9KSx0aGlzLmZpbGVzW3RdfTtmdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9dmFyIGk9e2xvYWQ6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZm9yRWFjaDpmdW5jdGlvbih0KXt2YXIgZSxyLGk7Zm9yKGUgaW4gdGhpcy5maWxlcyl0aGlzLmZpbGVzLmhhc093blByb3BlcnR5KGUpJiYoaT10aGlzLmZpbGVzW2VdLChyPWUuc2xpY2UodGhpcy5yb290Lmxlbmd0aCxlLmxlbmd0aCkpJiZlLnNsaWNlKDAsdGhpcy5yb290Lmxlbmd0aCk9PT10aGlzLnJvb3QmJnQocixpKSl9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgaT1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7cih0LGUpJiZpLnB1c2goZSl9KSxpfSxmaWxlOmZ1bmN0aW9uKHQsZSxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdD10aGlzLnJvb3QrdCxzLmNhbGwodGhpcyx0LGUsciksdGhpcztpZihoKHQpKXt2YXIgaT10O3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiFlLmRpciYmaS50ZXN0KHQpfSl9dmFyIG49dGhpcy5maWxlc1t0aGlzLnJvb3QrdF07cmV0dXJuIG4mJiFuLmRpcj9uOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih0LGUpe3JldHVybiBlLmRpciYmci50ZXN0KHQpfSk7dmFyIHQ9dGhpcy5yb290K3IsZT1iLmNhbGwodGhpcyx0KSxpPXRoaXMuY2xvbmUoKTtyZXR1cm4gaS5yb290PWUubmFtZSxpfSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgdD10aGlzLmZpbGVzW3JdO2lmKHR8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLHQ9dGhpcy5maWxlc1tyXSksdCYmIXQuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciBlPXRoaXMuZmlsdGVyKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxpPTA7aTxlLmxlbmd0aDtpKyspZGVsZXRlIHRoaXMuZmlsZXNbZVtpXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGdlbmVyYXRlSW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24odCl7dmFyIGUscj17fTt0cnl7aWYoKHI9dS5leHRlbmQodHx8e30se3N0cmVhbUZpbGVzOiExLGNvbXByZXNzaW9uOlwiU1RPUkVcIixjb21wcmVzc2lvbk9wdGlvbnM6bnVsbCx0eXBlOlwiXCIscGxhdGZvcm06XCJET1NcIixjb21tZW50Om51bGwsbWltZVR5cGU6XCJhcHBsaWNhdGlvbi96aXBcIixlbmNvZGVGaWxlTmFtZTpuLnV0ZjhlbmNvZGV9KSkudHlwZT1yLnR5cGUudG9Mb3dlckNhc2UoKSxyLmNvbXByZXNzaW9uPXIuY29tcHJlc3Npb24udG9VcHBlckNhc2UoKSxcImJpbmFyeXN0cmluZ1wiPT09ci50eXBlJiYoci50eXBlPVwic3RyaW5nXCIpLCFyLnR5cGUpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt1LmNoZWNrU3VwcG9ydChyLnR5cGUpLFwiZGFyd2luXCIhPT1yLnBsYXRmb3JtJiZcImZyZWVic2RcIiE9PXIucGxhdGZvcm0mJlwibGludXhcIiE9PXIucGxhdGZvcm0mJlwic3Vub3NcIiE9PXIucGxhdGZvcm18fChyLnBsYXRmb3JtPVwiVU5JWFwiKSxcIndpbjMyXCI9PT1yLnBsYXRmb3JtJiYoci5wbGF0Zm9ybT1cIkRPU1wiKTt2YXIgaT1yLmNvbW1lbnR8fHRoaXMuY29tbWVudHx8XCJcIjtlPW8uZ2VuZXJhdGVXb3JrZXIodGhpcyxyLGkpfWNhdGNoKHQpeyhlPW5ldyBsKFwiZXJyb3JcIikpLmVycm9yKHQpfXJldHVybiBuZXcgYShlLHIudHlwZXx8XCJzdHJpbmdcIixyLm1pbWVUeXBlKX0sZ2VuZXJhdGVBc3luYzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0odCkuYWNjdW11bGF0ZShlKX0sZ2VuZXJhdGVOb2RlU3RyZWFtOmZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQ9dHx8e30pLnR5cGV8fCh0LnR5cGU9XCJub2RlYnVmZmVyXCIpLHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbSh0KS50b05vZGVqc1N0cmVhbShlKX19O2UuZXhwb3J0cz1pfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9kZWZhdWx0c1wiOjUsXCIuL2dlbmVyYXRlXCI6OSxcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiOjEyLFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwT2JqZWN0XCI6MzV9XSwxNjpbZnVuY3Rpb24odCxlLHIpe2UuZXhwb3J0cz10KFwic3RyZWFtXCIpfSx7c3RyZWFtOnZvaWQgMH1dLDE3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5kYXRhLmxlbmd0aDtlKyspdFtlXT0yNTUmdFtlXX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5ieXRlQXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZGF0YVt0aGlzLnplcm8rdF19LG4ucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10LmNoYXJDb2RlQXQoMCkscj10LmNoYXJDb2RlQXQoMSksaT10LmNoYXJDb2RlQXQoMiksbj10LmNoYXJDb2RlQXQoMykscz10aGlzLmxlbmd0aC00OzA8PXM7LS1zKWlmKHRoaXMuZGF0YVtzXT09PWUmJnRoaXMuZGF0YVtzKzFdPT09ciYmdGhpcy5kYXRhW3MrMl09PT1pJiZ0aGlzLmRhdGFbcyszXT09PW4pcmV0dXJuIHMtdGhpcy56ZXJvO3JldHVybi0xfSxuLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGFyQ29kZUF0KDApLHI9dC5jaGFyQ29kZUF0KDEpLGk9dC5jaGFyQ29kZUF0KDIpLG49dC5jaGFyQ29kZUF0KDMpLHM9dGhpcy5yZWFkRGF0YSg0KTtyZXR1cm4gZT09PXNbMF0mJnI9PT1zWzFdJiZpPT09c1syXSYmbj09PXNbM119LG4ucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKHQpe2lmKHRoaXMuY2hlY2tPZmZzZXQodCksMD09PXQpcmV0dXJuW107dmFyIGU9dGhpcy5kYXRhLnNsaWNlKHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K3QpO3JldHVybiB0aGlzLmluZGV4Kz10LGV9LGUuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwiLi9EYXRhUmVhZGVyXCI6MTh9XSwxODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBuKHQpe3RoaXMuZGF0YT10LHRoaXMubGVuZ3RoPXQubGVuZ3RoLHRoaXMuaW5kZXg9MCx0aGlzLnplcm89MH1uLnByb3RvdHlwZT17Y2hlY2tPZmZzZXQ6ZnVuY3Rpb24odCl7dGhpcy5jaGVja0luZGV4KHRoaXMuaW5kZXgrdCl9LGNoZWNrSW5kZXg6ZnVuY3Rpb24odCl7aWYodGhpcy5sZW5ndGg8dGhpcy56ZXJvK3R8fHQ8MCl0aHJvdyBuZXcgRXJyb3IoXCJFbmQgb2YgZGF0YSByZWFjaGVkIChkYXRhIGxlbmd0aCA9IFwiK3RoaXMubGVuZ3RoK1wiLCBhc2tlZCBpbmRleCA9IFwiK3QrXCIpLiBDb3JydXB0ZWQgemlwID9cIil9LHNldEluZGV4OmZ1bmN0aW9uKHQpe3RoaXMuY2hlY2tJbmRleCh0KSx0aGlzLmluZGV4PXR9LHNraXA6ZnVuY3Rpb24odCl7dGhpcy5zZXRJbmRleCh0aGlzLmluZGV4K3QpfSxieXRlQXQ6ZnVuY3Rpb24odCl7fSxyZWFkSW50OmZ1bmN0aW9uKHQpe3ZhciBlLHI9MDtmb3IodGhpcy5jaGVja09mZnNldCh0KSxlPXRoaXMuaW5kZXgrdC0xO2U+PXRoaXMuaW5kZXg7ZS0tKXI9KHI8PDgpK3RoaXMuYnl0ZUF0KGUpO3JldHVybiB0aGlzLmluZGV4Kz10LHJ9LHJlYWRTdHJpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIGkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLnJlYWREYXRhKHQpKX0scmVhZERhdGE6ZnVuY3Rpb24odCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbih0KXt9LHJlYWRBbmRDaGVja1NpZ25hdHVyZTpmdW5jdGlvbih0KXt9LHJlYWREYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkSW50KDQpO3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQygxOTgwKyh0Pj4yNSYxMjcpLCh0Pj4yMSYxNSktMSx0Pj4xNiYzMSx0Pj4xMSYzMSx0Pj41JjYzLCgzMSZ0KTw8MSkpfX0sZS5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzJ9XSwxOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gbih0KXtpLmNhbGwodGhpcyx0KX10KFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNoZWNrT2Zmc2V0KHQpO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vVWludDhBcnJheVJlYWRlclwiOjIxfV0sMjA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIG4odCl7aS5jYWxsKHRoaXMsdCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGEuY2hhckNvZGVBdCh0aGlzLnplcm8rdCl9LG4ucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGEubGFzdEluZGV4T2YodCktdGhpcy56ZXJvfSxuLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT10aGlzLnJlYWREYXRhKDQpfSxuLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNoZWNrT2Zmc2V0KHQpO3ZhciBlPXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMjE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9BcnJheVJlYWRlclwiKTtmdW5jdGlvbiBuKHQpe2kuY2FsbCh0aGlzLHQpfXQoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhuLGkpLG4ucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKHQpe2lmKHRoaXMuY2hlY2tPZmZzZXQodCksMD09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO3ZhciBlPXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxlLmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcIi4vQXJyYXlSZWFkZXJcIjoxN31dLDIyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4uL3N1cHBvcnRcIikscz10KFwiLi9BcnJheVJlYWRlclwiKSxhPXQoXCIuL1N0cmluZ1JlYWRlclwiKSxvPXQoXCIuL05vZGVCdWZmZXJSZWFkZXJcIiksaD10KFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldFR5cGVPZih0KTtyZXR1cm4gaS5jaGVja1N1cHBvcnQoZSksXCJzdHJpbmdcIiE9PWV8fG4udWludDhhcnJheT9cIm5vZGVidWZmZXJcIj09PWU/bmV3IG8odCk6bi51aW50OGFycmF5P25ldyBoKGkudHJhbnNmb3JtVG8oXCJ1aW50OGFycmF5XCIsdCkpOm5ldyBzKGkudHJhbnNmb3JtVG8oXCJhcnJheVwiLHQpKTpuZXcgYSh0KX19LHtcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTcsXCIuL05vZGVCdWZmZXJSZWFkZXJcIjoxOSxcIi4vU3RyaW5nUmVhZGVyXCI6MjAsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ci5MT0NBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAzXHUwMDA0XCIsci5DRU5UUkFMX0ZJTEVfSEVBREVSPVwiUEtcdTAwMDFcdTAwMDJcIixyLkNFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA1XHUwMDA2XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SPVwiUEtcdTAwMDZcdTAwMDdcIixyLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA2XHUwMDA2XCIsci5EQVRBX0RFU0NSSVBUT1I9XCJQS1x1MDAwN1xcYlwifSx7fV0sMjQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9HZW5lcmljV29ya2VyXCIpLG49dChcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIHModCl7aS5jYWxsKHRoaXMsXCJDb252ZXJ0V29ya2VyIHRvIFwiK3QpLHRoaXMuZGVzdFR5cGU9dH1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3RoaXMucHVzaCh7ZGF0YTpuLnRyYW5zZm9ybVRvKHRoaXMuZGVzdFR5cGUsdC5kYXRhKSxtZXRhOnQubWV0YX0pfSxlLmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9HZW5lcmljV29ya2VyXCIpLG49dChcIi4uL2NyYzMyXCIpO2Z1bmN0aW9uIHMoKXtpLmNhbGwodGhpcyxcIkNyYzMyUHJvYmVcIiksdGhpcy53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsMCl9dChcIi4uL3V0aWxzXCIpLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3RoaXMuc3RyZWFtSW5mby5jcmMzMj1uKHQuZGF0YSx0aGlzLnN0cmVhbUluZm8uY3JjMzJ8fDApLHRoaXMucHVzaCh0KX0sZS5leHBvcnRzPXN9LHtcIi4uL2NyYzMyXCI6NCxcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKHQpe24uY2FsbCh0aGlzLFwiRGF0YUxlbmd0aFByb2JlIGZvciBcIit0KSx0aGlzLnByb3BOYW1lPXQsdGhpcy53aXRoU3RyZWFtSW5mbyh0LDApfWkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9dGhpcy5zdHJlYW1JbmZvW3RoaXMucHJvcE5hbWVdfHwwO3RoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXT1lK3QuZGF0YS5sZW5ndGh9bi5wcm90b3R5cGUucHJvY2Vzc0NodW5rLmNhbGwodGhpcyx0KX0sZS5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKHQpe24uY2FsbCh0aGlzLFwiRGF0YVdvcmtlclwiKTt2YXIgZT10aGlzO3RoaXMuZGF0YUlzUmVhZHk9ITEsdGhpcy5pbmRleD0wLHRoaXMubWF4PTAsdGhpcy5kYXRhPW51bGwsdGhpcy50eXBlPVwiXCIsdGhpcy5fdGlja1NjaGVkdWxlZD0hMSx0LnRoZW4oZnVuY3Rpb24odCl7ZS5kYXRhSXNSZWFkeT0hMCxlLmRhdGE9dCxlLm1heD10JiZ0Lmxlbmd0aHx8MCxlLnR5cGU9aS5nZXRUeXBlT2YodCksZS5pc1BhdXNlZHx8ZS5fdGlja0FuZFJlcGVhdCgpfSxmdW5jdGlvbih0KXtlLmVycm9yKHQpfSl9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLmNsZWFuVXA9ZnVuY3Rpb24oKXtuLnByb3RvdHlwZS5jbGVhblVwLmNhbGwodGhpcyksdGhpcy5kYXRhPW51bGx9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhbi5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5fdGlja1NjaGVkdWxlZCYmdGhpcy5kYXRhSXNSZWFkeSYmKHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITAsaS5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpKSwhMCl9LHMucHJvdG90eXBlLl90aWNrQW5kUmVwZWF0PWZ1bmN0aW9uKCl7dGhpcy5fdGlja1NjaGVkdWxlZD0hMSx0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWR8fCh0aGlzLl90aWNrKCksdGhpcy5pc0ZpbmlzaGVkfHwoaS5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITApKX0scy5wcm90b3R5cGUuX3RpY2s9ZnVuY3Rpb24oKXtpZih0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIHQ9bnVsbCxlPU1hdGgubWluKHRoaXMubWF4LHRoaXMuaW5kZXgrMTYzODQpO2lmKHRoaXMuaW5kZXg+PXRoaXMubWF4KXJldHVybiB0aGlzLmVuZCgpO3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2VcInN0cmluZ1wiOnQ9dGhpcy5kYXRhLnN1YnN0cmluZyh0aGlzLmluZGV4LGUpO2JyZWFrO2Nhc2VcInVpbnQ4YXJyYXlcIjp0PXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLmluZGV4LGUpO2JyZWFrO2Nhc2VcImFycmF5XCI6Y2FzZVwibm9kZWJ1ZmZlclwiOnQ9dGhpcy5kYXRhLnNsaWNlKHRoaXMuaW5kZXgsZSl9cmV0dXJuIHRoaXMuaW5kZXg9ZSx0aGlzLnB1c2goe2RhdGE6dCxtZXRhOntwZXJjZW50OnRoaXMubWF4P3RoaXMuaW5kZXgvdGhpcy5tYXgqMTAwOjB9fSl9LGUuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkodCl7dGhpcy5uYW1lPXR8fFwiZGVmYXVsdFwiLHRoaXMuc3RyZWFtSW5mbz17fSx0aGlzLmdlbmVyYXRlZEVycm9yPW51bGwsdGhpcy5leHRyYVN0cmVhbUluZm89e30sdGhpcy5pc1BhdXNlZD0hMCx0aGlzLmlzRmluaXNoZWQ9ITEsdGhpcy5pc0xvY2tlZD0hMSx0aGlzLl9saXN0ZW5lcnM9e2RhdGE6W10sZW5kOltdLGVycm9yOltdfSx0aGlzLnByZXZpb3VzPW51bGx9aS5wcm90b3R5cGU9e3B1c2g6ZnVuY3Rpb24odCl7dGhpcy5lbWl0KFwiZGF0YVwiLHQpfSxlbmQ6ZnVuY3Rpb24oKXtpZih0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dGhpcy5mbHVzaCgpO3RyeXt0aGlzLmVtaXQoXCJlbmRcIiksdGhpcy5jbGVhblVwKCksdGhpcy5pc0ZpbmlzaGVkPSEwfWNhdGNoKHQpe3RoaXMuZW1pdChcImVycm9yXCIsdCl9cmV0dXJuITB9LGVycm9yOmZ1bmN0aW9uKHQpe3JldHVybiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkP3RoaXMuZ2VuZXJhdGVkRXJyb3I9dDoodGhpcy5pc0ZpbmlzaGVkPSEwLHRoaXMuZW1pdChcImVycm9yXCIsdCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5lcnJvcih0KSx0aGlzLmNsZWFuVXAoKSksITApfSxvbjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9saXN0ZW5lcnNbdF0ucHVzaChlKSx0aGlzfSxjbGVhblVwOmZ1bmN0aW9uKCl7dGhpcy5zdHJlYW1JbmZvPXRoaXMuZ2VuZXJhdGVkRXJyb3I9dGhpcy5leHRyYVN0cmVhbUluZm89bnVsbCx0aGlzLl9saXN0ZW5lcnM9W119LGVtaXQ6ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9saXN0ZW5lcnNbdF0pZm9yKHZhciByPTA7cjx0aGlzLl9saXN0ZW5lcnNbdF0ubGVuZ3RoO3IrKyl0aGlzLl9saXN0ZW5lcnNbdF1bcl0uY2FsbCh0aGlzLGUpfSxwaXBlOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZ2lzdGVyUHJldmlvdXModGhpcyl9LHJlZ2lzdGVyUHJldmlvdXM6ZnVuY3Rpb24odCl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuc3RyZWFtSW5mbz10LnN0cmVhbUluZm8sdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzLnByZXZpb3VzPXQ7dmFyIGU9dGhpcztyZXR1cm4gdC5vbihcImRhdGFcIixmdW5jdGlvbih0KXtlLnByb2Nlc3NDaHVuayh0KX0pLHQub24oXCJlbmRcIixmdW5jdGlvbigpe2UuZW5kKCl9KSx0Lm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtlLmVycm9yKHQpfSksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc1BhdXNlZCYmIXRoaXMuaXNGaW5pc2hlZCYmKHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5wYXVzZSgpLCEwKX0scmVzdW1lOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNQYXVzZWR8fHRoaXMuaXNGaW5pc2hlZClyZXR1cm4hMTt2YXIgdD10aGlzLmlzUGF1c2VkPSExO3JldHVybiB0aGlzLmdlbmVyYXRlZEVycm9yJiYodGhpcy5lcnJvcih0aGlzLmdlbmVyYXRlZEVycm9yKSx0PSEwKSx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLnJlc3VtZSgpLCF0fSxmbHVzaDpmdW5jdGlvbigpe30scHJvY2Vzc0NodW5rOmZ1bmN0aW9uKHQpe3RoaXMucHVzaCh0KX0sd2l0aFN0cmVhbUluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5leHRyYVN0cmVhbUluZm9bdF09ZSx0aGlzLm1lcmdlU3RyZWFtSW5mbygpLHRoaXN9LG1lcmdlU3RyZWFtSW5mbzpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmV4dHJhU3RyZWFtSW5mbyl0aGlzLmV4dHJhU3RyZWFtSW5mby5oYXNPd25Qcm9wZXJ0eSh0KSYmKHRoaXMuc3RyZWFtSW5mb1t0XT10aGlzLmV4dHJhU3RyZWFtSW5mb1t0XSl9LGxvY2s6ZnVuY3Rpb24oKXtpZih0aGlzLmlzTG9ja2VkKXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHJlYW0gJ1wiK3RoaXMrXCInIGhhcyBhbHJlYWR5IGJlZW4gdXNlZC5cIik7dGhpcy5pc0xvY2tlZD0hMCx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLmxvY2soKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgdD1cIldvcmtlciBcIit0aGlzLm5hbWU7cmV0dXJuIHRoaXMucHJldmlvdXM/dGhpcy5wcmV2aW91cytcIiAtPiBcIit0OnR9fSxlLmV4cG9ydHM9aX0se31dLDI5OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9dChcIi4uL3V0aWxzXCIpLG49dChcIi4vQ29udmVydFdvcmtlclwiKSxzPXQoXCIuL0dlbmVyaWNXb3JrZXJcIiksdT10KFwiLi4vYmFzZTY0XCIpLGk9dChcIi4uL3N1cHBvcnRcIiksYT10KFwiLi4vZXh0ZXJuYWxcIiksbz1udWxsO2lmKGkubm9kZXN0cmVhbSl0cnl7bz10KFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIil9Y2F0Y2godCl7fWZ1bmN0aW9uIGwodCxvKXtyZXR1cm4gbmV3IGEuUHJvbWlzZShmdW5jdGlvbihlLHIpe3ZhciBpPVtdLG49dC5faW50ZXJuYWxUeXBlLHM9dC5fb3V0cHV0VHlwZSxhPXQuX21pbWVUeXBlO3Qub24oXCJkYXRhXCIsZnVuY3Rpb24odCxlKXtpLnB1c2godCksbyYmbyhlKX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbih0KXtpPVtdLHIodCl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dHJ5e3ZhciB0PWZ1bmN0aW9uKHQsZSxyKXtzd2l0Y2godCl7Y2FzZVwiYmxvYlwiOnJldHVybiBoLm5ld0Jsb2IoaC50cmFuc2Zvcm1UbyhcImFycmF5YnVmZmVyXCIsZSkscik7Y2FzZVwiYmFzZTY0XCI6cmV0dXJuIHUuZW5jb2RlKGUpO2RlZmF1bHQ6cmV0dXJuIGgudHJhbnNmb3JtVG8odCxlKX19KHMsZnVuY3Rpb24odCxlKXt2YXIgcixpPTAsbj1udWxsLHM9MDtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKXMrPWVbcl0ubGVuZ3RoO3N3aXRjaCh0KXtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gZS5qb2luKFwiXCIpO2Nhc2VcImFycmF5XCI6cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sZSk7Y2FzZVwidWludDhhcnJheVwiOmZvcihuPW5ldyBVaW50OEFycmF5KHMpLHI9MDtyPGUubGVuZ3RoO3IrKyluLnNldChlW3JdLGkpLGkrPWVbcl0ubGVuZ3RoO3JldHVybiBuO2Nhc2VcIm5vZGVidWZmZXJcIjpyZXR1cm4gQnVmZmVyLmNvbmNhdChlKTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcImNvbmNhdCA6IHVuc3VwcG9ydGVkIHR5cGUgJ1wiK3QrXCInXCIpfX0obixpKSxhKTtlKHQpfWNhdGNoKHQpe3IodCl9aT1bXX0pLnJlc3VtZSgpfSl9ZnVuY3Rpb24gZih0LGUscil7dmFyIGk9ZTtzd2l0Y2goZSl7Y2FzZVwiYmxvYlwiOmNhc2VcImFycmF5YnVmZmVyXCI6aT1cInVpbnQ4YXJyYXlcIjticmVhaztjYXNlXCJiYXNlNjRcIjppPVwic3RyaW5nXCJ9dHJ5e3RoaXMuX2ludGVybmFsVHlwZT1pLHRoaXMuX291dHB1dFR5cGU9ZSx0aGlzLl9taW1lVHlwZT1yLGguY2hlY2tTdXBwb3J0KGkpLHRoaXMuX3dvcmtlcj10LnBpcGUobmV3IG4oaSkpLHQubG9jaygpfWNhdGNoKHQpe3RoaXMuX3dvcmtlcj1uZXcgcyhcImVycm9yXCIpLHRoaXMuX3dvcmtlci5lcnJvcih0KX19Zi5wcm90b3R5cGU9e2FjY3VtdWxhdGU6ZnVuY3Rpb24odCl7cmV0dXJuIGwodGhpcyx0KX0sb246ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzO3JldHVyblwiZGF0YVwiPT09dD90aGlzLl93b3JrZXIub24odCxmdW5jdGlvbih0KXtlLmNhbGwocix0LmRhdGEsdC5tZXRhKX0pOnRoaXMuX3dvcmtlci5vbih0LGZ1bmN0aW9uKCl7aC5kZWxheShlLGFyZ3VtZW50cyxyKX0pLHRoaXN9LHJlc3VtZTpmdW5jdGlvbigpe3JldHVybiBoLmRlbGF5KHRoaXMuX3dvcmtlci5yZXN1bWUsW10sdGhpcy5fd29ya2VyKSx0aGlzfSxwYXVzZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93b3JrZXIucGF1c2UoKSx0aGlzfSx0b05vZGVqc1N0cmVhbTpmdW5jdGlvbih0KXtpZihoLmNoZWNrU3VwcG9ydChcIm5vZGVzdHJlYW1cIiksXCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlKXRocm93IG5ldyBFcnJvcih0aGlzLl9vdXRwdXRUeXBlK1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBtZXRob2RcIik7cmV0dXJuIG5ldyBvKHRoaXMse29iamVjdE1vZGU6XCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlfSx0KX19LGUuZXhwb3J0cz1mfSx7XCIuLi9iYXNlNjRcIjoxLFwiLi4vZXh0ZXJuYWxcIjo2LFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIjoxMyxcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0NvbnZlcnRXb3JrZXJcIjoyNCxcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMzA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtpZihyLmJhc2U2ND0hMCxyLmFycmF5PSEwLHIuc3RyaW5nPSEwLHIuYXJyYXlidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxyLm5vZGVidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlcixyLnVpbnQ4YXJyYXk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksXCJ1bmRlZmluZWRcIj09dHlwZW9mIEFycmF5QnVmZmVyKXIuYmxvYj0hMTtlbHNle3ZhciBpPW5ldyBBcnJheUJ1ZmZlcigwKTt0cnl7ci5ibG9iPTA9PT1uZXcgQmxvYihbaV0se3R5cGU6XCJhcHBsaWNhdGlvbi96aXBcIn0pLnNpemV9Y2F0Y2godCl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO24uYXBwZW5kKGkpLHIuYmxvYj0wPT09bi5nZXRCbG9iKFwiYXBwbGljYXRpb24vemlwXCIpLnNpemV9Y2F0Y2godCl7ci5ibG9iPSExfX19dHJ5e3Iubm9kZXN0cmVhbT0hIXQoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGV9Y2F0Y2godCl7ci5ub2Rlc3RyZWFtPSExfX0se1wicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwzMTpbZnVuY3Rpb24odCxlLHMpe1widXNlIHN0cmljdFwiO2Zvcih2YXIgbz10KFwiLi91dGlsc1wiKSxoPXQoXCIuL3N1cHBvcnRcIikscj10KFwiLi9ub2RlanNVdGlsc1wiKSxpPXQoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLHU9bmV3IEFycmF5KDI1Niksbj0wO248MjU2O24rKyl1W25dPTI1Mjw9bj82OjI0ODw9bj81OjI0MDw9bj80OjIyNDw9bj8zOjE5Mjw9bj8yOjE7dVsyNTRdPXVbMjU0XT0xO2Z1bmN0aW9uIGEoKXtpLmNhbGwodGhpcyxcInV0Zi04IGRlY29kZVwiKSx0aGlzLmxlZnRPdmVyPW51bGx9ZnVuY3Rpb24gbCgpe2kuY2FsbCh0aGlzLFwidXRmLTggZW5jb2RlXCIpfXMudXRmOGVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gaC5ub2RlYnVmZmVyP3IubmV3QnVmZmVyRnJvbSh0LFwidXRmLThcIik6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scyxhPXQubGVuZ3RoLG89MDtmb3Iobj0wO248YTtuKyspNTUyOTY9PSg2NDUxMiYocj10LmNoYXJDb2RlQXQobikpKSYmbisxPGEmJjU2MzIwPT0oNjQ1MTImKGk9dC5jaGFyQ29kZUF0KG4rMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsoaS01NjMyMCksbisrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2ZvcihlPWgudWludDhhcnJheT9uZXcgVWludDhBcnJheShvKTpuZXcgQXJyYXkobyksbj1zPTA7czxvO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLHI8MTI4P2VbcysrXT1yOihyPDIwNDg/ZVtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj9lW3MrK109MjI0fHI+Pj4xMjooZVtzKytdPTI0MHxyPj4+MTgsZVtzKytdPTEyOHxyPj4+MTImNjMpLGVbcysrXT0xMjh8cj4+PjYmNjMpLGVbcysrXT0xMjh8NjMmcik7cmV0dXJuIGV9KHQpfSxzLnV0ZjhkZWNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9vLnRyYW5zZm9ybVRvKFwibm9kZWJ1ZmZlclwiLHQpLnRvU3RyaW5nKFwidXRmLThcIik6ZnVuY3Rpb24odCl7dmFyIGUscixpLG4scz10Lmxlbmd0aCxhPW5ldyBBcnJheSgyKnMpO2ZvcihlPXI9MDtlPHM7KWlmKChpPXRbZSsrXSk8MTI4KWFbcisrXT1pO2Vsc2UgaWYoNDwobj11W2ldKSlhW3IrK109NjU1MzMsZSs9bi0xO2Vsc2V7Zm9yKGkmPTI9PT1uPzMxOjM9PT1uPzE1Ojc7MTxuJiZlPHM7KWk9aTw8Nnw2MyZ0W2UrK10sbi0tOzE8bj9hW3IrK109NjU1MzM6aTw2NTUzNj9hW3IrK109aTooaS09NjU1MzYsYVtyKytdPTU1Mjk2fGk+PjEwJjEwMjMsYVtyKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGEubGVuZ3RoIT09ciYmKGEuc3ViYXJyYXk/YT1hLnN1YmFycmF5KDAscik6YS5sZW5ndGg9ciksby5hcHBseUZyb21DaGFyQ29kZShhKX0odD1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsdCkpfSxvLmluaGVyaXRzKGEsaSksYS5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKHQpe3ZhciBlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIix0LmRhdGEpO2lmKHRoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoKXtpZihoLnVpbnQ4YXJyYXkpe3ZhciByPWU7KGU9bmV3IFVpbnQ4QXJyYXkoci5sZW5ndGgrdGhpcy5sZWZ0T3Zlci5sZW5ndGgpKS5zZXQodGhpcy5sZWZ0T3ZlciwwKSxlLnNldChyLHRoaXMubGVmdE92ZXIubGVuZ3RoKX1lbHNlIGU9dGhpcy5sZWZ0T3Zlci5jb25jYXQoZSk7dGhpcy5sZWZ0T3Zlcj1udWxsfXZhciBpPWZ1bmN0aW9uKHQsZSl7dmFyIHI7Zm9yKChlPWV8fHQubGVuZ3RoKT50Lmxlbmd0aCYmKGU9dC5sZW5ndGgpLHI9ZS0xOzA8PXImJjEyOD09KDE5MiZ0W3JdKTspci0tO3JldHVybiByPDA/ZTowPT09cj9lOnIrdVt0W3JdXT5lP3I6ZX0oZSksbj1lO2khPT1lLmxlbmd0aCYmKGgudWludDhhcnJheT8obj1lLnN1YmFycmF5KDAsaSksdGhpcy5sZWZ0T3Zlcj1lLnN1YmFycmF5KGksZS5sZW5ndGgpKToobj1lLnNsaWNlKDAsaSksdGhpcy5sZWZ0T3Zlcj1lLnNsaWNlKGksZS5sZW5ndGgpKSksdGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZShuKSxtZXRhOnQubWV0YX0pfSxhLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe3RoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoJiYodGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZSh0aGlzLmxlZnRPdmVyKSxtZXRhOnt9fSksdGhpcy5sZWZ0T3Zlcj1udWxsKX0scy5VdGY4RGVjb2RlV29ya2VyPWEsby5pbmhlcml0cyhsLGkpLGwucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbih0KXt0aGlzLnB1c2goe2RhdGE6cy51dGY4ZW5jb2RlKHQuZGF0YSksbWV0YTp0Lm1ldGF9KX0scy5VdGY4RW5jb2RlV29ya2VyPWx9LHtcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMzI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10KFwiLi9zdXBwb3J0XCIpLGg9dChcIi4vYmFzZTY0XCIpLHI9dChcIi4vbm9kZWpzVXRpbHNcIiksaT10KFwic2V0LWltbWVkaWF0ZS1zaGltXCIpLHU9dChcIi4vZXh0ZXJuYWxcIik7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdH1mdW5jdGlvbiBsKHQsZSl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDsrK3IpZVtyXT0yNTUmdC5jaGFyQ29kZUF0KHIpO3JldHVybiBlfWEubmV3QmxvYj1mdW5jdGlvbihlLHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFtlXSx7dHlwZTpyfSl9Y2F0Y2godCl7dHJ5e3ZhciBpPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBpLmFwcGVuZChlKSxpLmdldEJsb2Iocil9Y2F0Y2godCl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgcz17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbih0LGUscil7dmFyIGk9W10sbj0wLHM9dC5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHQpO2Zvcig7bjxzOylcImFycmF5XCI9PT1lfHxcIm5vZGVidWZmZXJcIj09PWU/aS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCx0LnNsaWNlKG4sTWF0aC5taW4obityLHMpKSkpOmkucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zdWJhcnJheShuLE1hdGgubWluKG4rcixzKSkpKSxuKz1yO3JldHVybiBpLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbih0KXtmb3IodmFyIGU9XCJcIixyPTA7cjx0Lmxlbmd0aDtyKyspZSs9U3RyaW5nLmZyb21DaGFyQ29kZSh0W3JdKTtyZXR1cm4gZX0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKHQpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKHQpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIGYodCl7dmFyIGU9NjU1MzYscj1hLmdldFR5cGVPZih0KSxpPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9pPXMuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihpPXMuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksaSlmb3IoOzE8ZTspdHJ5e3JldHVybiBzLnN0cmluZ2lmeUJ5Q2h1bmsodCxyLGUpfWNhdGNoKHQpe2U9TWF0aC5mbG9vcihlLzIpfXJldHVybiBzLnN0cmluZ2lmeUJ5Q2hhcih0KX1mdW5jdGlvbiBkKHQsZSl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspZVtyXT10W3JdO3JldHVybiBlfWEuYXBwbHlGcm9tQ2hhckNvZGU9Zjt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkodCkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBsKHQsbmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gbCh0LHIuYWxsb2NCdWZmZXIodC5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpmLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHQpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodCl9LG5vZGVidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbSh0KX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm4gZihuZXcgVWludDhBcnJheSh0KSl9LGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKG5ldyBVaW50OEFycmF5KHQpLG5ldyBBcnJheSh0LmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgVWludDhBcnJheSh0KX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KHQpKX19LGMudWludDhhcnJheT17c3RyaW5nOmYsYXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIGQodCxuZXcgQXJyYXkodC5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKHQpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6ZixhcnJheTpmdW5jdGlvbih0KXtyZXR1cm4gZCh0LG5ldyBBcnJheSh0Lmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbih0KXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkodCkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBkKHQsbmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKHQsZSl7aWYoZT1lfHxcIlwiLCF0KXJldHVybiBlO2EuY2hlY2tTdXBwb3J0KHQpO3ZhciByPWEuZ2V0VHlwZU9mKGUpO3JldHVybiBjW3JdW3RdKGUpfSxhLmdldFR5cGVPZj1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKHQpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmdCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKHQpe2lmKCFvW3QudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKHQrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKHQpe3ZhciBlLHIsaT1cIlwiO2ZvcihyPTA7cjwodHx8XCJcIikubGVuZ3RoO3IrKylpKz1cIlxcXFx4XCIrKChlPXQuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gaX0sYS5kZWxheT1mdW5jdGlvbih0LGUscil7aShmdW5jdGlvbigpe3QuYXBwbHkocnx8bnVsbCxlfHxbXSl9KX0sYS5pbmhlcml0cz1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIoKXt9ci5wcm90b3R5cGU9ZS5wcm90b3R5cGUsdC5wcm90b3R5cGU9bmV3IHJ9LGEuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIHQsZSxyPXt9O2Zvcih0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylmb3IoZSBpbiBhcmd1bWVudHNbdF0pYXJndW1lbnRzW3RdLmhhc093blByb3BlcnR5KGUpJiZ2b2lkIDA9PT1yW2VdJiYocltlXT1hcmd1bWVudHNbdF1bZV0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsdCxpLG4scyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKHQpLnRoZW4oZnVuY3Rpb24oaSl7cmV0dXJuIG8uYmxvYiYmKGkgaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaSkpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbihlLHIpe3ZhciB0PW5ldyBGaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKHQpe2UodC50YXJnZXQucmVzdWx0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKHQpe3IodC50YXJnZXQuZXJyb3IpfSx0LnJlYWRBc0FycmF5QnVmZmVyKGkpfSk6aX0pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9YS5nZXRUeXBlT2YodCk7cmV0dXJuIGU/KFwiYXJyYXlidWZmZXJcIj09PWU/dD1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLHQpOlwic3RyaW5nXCI9PT1lJiYocz90PWguZGVjb2RlKHQpOmkmJiEwIT09biYmKHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGwodCxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpOm5ldyBBcnJheSh0Lmxlbmd0aCkpfSh0KSkpLHQpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxcInNldC1pbW1lZGlhdGUtc2hpbVwiOjU0fV0sMzM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLG49dChcIi4vdXRpbHNcIikscz10KFwiLi9zaWduYXR1cmVcIiksYT10KFwiLi96aXBFbnRyeVwiKSxvPSh0KFwiLi91dGY4XCIpLHQoXCIuL3N1cHBvcnRcIikpO2Z1bmN0aW9uIGgodCl7dGhpcy5maWxlcz1bXSx0aGlzLmxvYWRPcHRpb25zPXR9aC5wcm90b3R5cGU9e2NoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUodCkpe3RoaXMucmVhZGVyLmluZGV4LT00O3ZhciBlPXRoaXMucmVhZGVyLnJlYWRTdHJpbmcoNCk7dGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IHVuZXhwZWN0ZWQgc2lnbmF0dXJlIChcIituLnByZXR0eShlKStcIiwgZXhwZWN0ZWQgXCIrbi5wcmV0dHkodCkrXCIpXCIpfX0saXNTaWduYXR1cmU6ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLnJlYWRlci5pbmRleDt0aGlzLnJlYWRlci5zZXRJbmRleCh0KTt2YXIgaT10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpPT09ZTtyZXR1cm4gdGhpcy5yZWFkZXIuc2V0SW5kZXgociksaX0scmVhZEJsb2NrRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLnppcENvbW1lbnRMZW5ndGg9dGhpcy5yZWFkZXIucmVhZEludCgyKTt2YXIgdD10aGlzLnJlYWRlci5yZWFkRGF0YSh0aGlzLnppcENvbW1lbnRMZW5ndGgpLGU9by51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixyPW4udHJhbnNmb3JtVG8oZSx0KTt0aGlzLnppcENvbW1lbnQ9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWw6ZnVuY3Rpb24oKXt0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZT10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMucmVhZGVyLnNraXAoNCksdGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGE9e307Zm9yKHZhciB0LGUscixpPXRoaXMuemlwNjRFbmRPZkNlbnRyYWxTaXplLTQ0OzA8aTspdD10aGlzLnJlYWRlci5yZWFkSW50KDIpLGU9dGhpcy5yZWFkZXIucmVhZEludCg0KSxyPXRoaXMucmVhZGVyLnJlYWREYXRhKGUpLHRoaXMuemlwNjRFeHRlbnNpYmxlRGF0YVt0XT17aWQ6dCxsZW5ndGg6ZSx2YWx1ZTpyfX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yOmZ1bmN0aW9uKCl7aWYodGhpcy5kaXNrV2l0aFppcDY0Q2VudHJhbERpclN0YXJ0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5kaXNrc0NvdW50PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksMTx0aGlzLmRpc2tzQ291bnQpdGhyb3cgbmV3IEVycm9yKFwiTXVsdGktdm9sdW1lcyB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIil9LHJlYWRMb2NhbEZpbGVzOmZ1bmN0aW9uKCl7dmFyIHQsZTtmb3IodD0wO3Q8dGhpcy5maWxlcy5sZW5ndGg7dCsrKWU9dGhpcy5maWxlc1t0XSx0aGlzLnJlYWRlci5zZXRJbmRleChlLmxvY2FsSGVhZGVyT2Zmc2V0KSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuTE9DQUxfRklMRV9IRUFERVIpLGUucmVhZExvY2FsUGFydCh0aGlzLnJlYWRlciksZS5oYW5kbGVVVEY4KCksZS5wcm9jZXNzQXR0cmlidXRlcygpfSxyZWFkQ2VudHJhbERpcjpmdW5jdGlvbigpe3ZhciB0O2Zvcih0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLmNlbnRyYWxEaXJPZmZzZXQpO3RoaXMucmVhZGVyLnJlYWRBbmRDaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRklMRV9IRUFERVIpOykodD1uZXcgYSh7emlwNjQ6dGhpcy56aXA2NH0sdGhpcy5sb2FkT3B0aW9ucykpLnJlYWRDZW50cmFsUGFydCh0aGlzLnJlYWRlciksdGhpcy5maWxlcy5wdXNoKHQpO2lmKHRoaXMuY2VudHJhbERpclJlY29yZHMhPT10aGlzLmZpbGVzLmxlbmd0aCYmMCE9PXRoaXMuY2VudHJhbERpclJlY29yZHMmJjA9PT10aGlzLmZpbGVzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIG9yIGJ1ZzogZXhwZWN0ZWQgXCIrdGhpcy5jZW50cmFsRGlyUmVjb3JkcytcIiByZWNvcmRzIGluIGNlbnRyYWwgZGlyLCBnb3QgXCIrdGhpcy5maWxlcy5sZW5ndGgpfSxyZWFkRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpO2lmKHQ8MCl0aHJvdyF0aGlzLmlzU2lnbmF0dXJlKDAscy5MT0NBTF9GSUxFX0hFQURFUik/bmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgOiBpcyB0aGlzIGEgemlwIGZpbGUgPyBJZiBpdCBpcywgc2VlIGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9ob3d0by9yZWFkX3ppcC5odG1sXCIpOm5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KHQpO3ZhciBlPXQ7aWYodGhpcy5jaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2tFbmRPZkNlbnRyYWwoKSx0aGlzLmRpc2tOdW1iZXI9PT1uLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9PT1uLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzPT09bi5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJTaXplPT09bi5NQVhfVkFMVUVfMzJCSVRTfHx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9PT1uLk1BWF9WQUxVRV8zMkJJVFMpe2lmKHRoaXMuemlwNjQ9ITAsKHQ9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SKSk8MCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIHRoZSBaSVA2NCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgbG9jYXRvclwiKTtpZih0aGlzLnJlYWRlci5zZXRJbmRleCh0KSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUiksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbExvY2F0b3IoKSwhdGhpcy5pc1NpZ25hdHVyZSh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIscy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpJiYodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSx0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXI8MCkpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpciksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbCgpfXZhciByPXRoaXMuY2VudHJhbERpck9mZnNldCt0aGlzLmNlbnRyYWxEaXJTaXplO3RoaXMuemlwNjQmJihyKz0yMCxyKz0xMit0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZSk7dmFyIGk9ZS1yO2lmKDA8aSl0aGlzLmlzU2lnbmF0dXJlKGUscy5DRU5UUkFMX0ZJTEVfSEVBREVSKXx8KHRoaXMucmVhZGVyLnplcm89aSk7ZWxzZSBpZihpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogbWlzc2luZyBcIitNYXRoLmFicyhpKStcIiBieXRlcy5cIil9LHByZXBhcmVSZWFkZXI6ZnVuY3Rpb24odCl7dGhpcy5yZWFkZXI9aSh0KX0sbG9hZDpmdW5jdGlvbih0KXt0aGlzLnByZXBhcmVSZWFkZXIodCksdGhpcy5yZWFkRW5kT2ZDZW50cmFsKCksdGhpcy5yZWFkQ2VudHJhbERpcigpLHRoaXMucmVhZExvY2FsRmlsZXMoKX19LGUuZXhwb3J0cz1ofSx7XCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc2lnbmF0dXJlXCI6MjMsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyeVwiOjM0fV0sMzQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLHM9dChcIi4vdXRpbHNcIiksbj10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGE9dChcIi4vY3JjMzJcIiksbz10KFwiLi91dGY4XCIpLGg9dChcIi4vY29tcHJlc3Npb25zXCIpLHU9dChcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBsKHQsZSl7dGhpcy5vcHRpb25zPXQsdGhpcy5sb2FkT3B0aW9ucz1lfWwucHJvdG90eXBlPXtpc0VuY3J5cHRlZDpmdW5jdGlvbigpe3JldHVybiAxPT0oMSZ0aGlzLmJpdEZsYWcpfSx1c2VVVEY4OmZ1bmN0aW9uKCl7cmV0dXJuIDIwNDg9PSgyMDQ4JnRoaXMuYml0RmxhZyl9LHJlYWRMb2NhbFBhcnQ6ZnVuY3Rpb24odCl7dmFyIGUscjtpZih0LnNraXAoMjIpLHRoaXMuZmlsZU5hbWVMZW5ndGg9dC5yZWFkSW50KDIpLHI9dC5yZWFkSW50KDIpLHRoaXMuZmlsZU5hbWU9dC5yZWFkRGF0YSh0aGlzLmZpbGVOYW1lTGVuZ3RoKSx0LnNraXAociksLTE9PT10aGlzLmNvbXByZXNzZWRTaXplfHwtMT09PXRoaXMudW5jb21wcmVzc2VkU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJCdWcgb3IgY29ycnVwdGVkIHppcCA6IGRpZG4ndCBnZXQgZW5vdWdoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNlbnRyYWwgZGlyZWN0b3J5IChjb21wcmVzc2VkU2l6ZSA9PT0gLTEgfHwgdW5jb21wcmVzc2VkU2l6ZSA9PT0gLTEpXCIpO2lmKG51bGw9PT0oZT1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gaClpZihoLmhhc093blByb3BlcnR5KGUpJiZoW2VdLm1hZ2ljPT09dClyZXR1cm4gaFtlXTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgbih0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLGUsdC5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbih0KXt0aGlzLnZlcnNpb25NYWRlQnk9dC5yZWFkSW50KDIpLHQuc2tpcCgyKSx0aGlzLmJpdEZsYWc9dC5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9dC5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT10LnJlYWREYXRlKCksdGhpcy5jcmMzMj10LnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT10LnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPXQucmVhZEludCg0KTt2YXIgZT10LnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD10LnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD10LnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9dC5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz10LnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPXQucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PXQucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTt0LnNraXAoZSksdGhpcy5yZWFkRXh0cmFGaWVsZHModCksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZCh0KSx0aGlzLmZpbGVDb21tZW50PXQucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIHQ9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09dCYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT10JiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZXh0cmFGaWVsZHNbMV0pe3ZhciBlPWkodGhpcy5leHRyYUZpZWxkc1sxXS52YWx1ZSk7dGhpcy51bmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5sb2NhbEhlYWRlck9mZnNldD1lLnJlYWRJbnQoOCkpLHRoaXMuZGlza051bWJlclN0YXJ0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDQpKX19LHJlYWRFeHRyYUZpZWxkczpmdW5jdGlvbih0KXt2YXIgZSxyLGksbj10LmluZGV4K3RoaXMuZXh0cmFGaWVsZHNMZW5ndGg7Zm9yKHRoaXMuZXh0cmFGaWVsZHN8fCh0aGlzLmV4dHJhRmllbGRzPXt9KTt0LmluZGV4KzQ8bjspZT10LnJlYWRJbnQoMikscj10LnJlYWRJbnQoMiksaT10LnJlYWREYXRhKHIpLHRoaXMuZXh0cmFGaWVsZHNbZV09e2lkOmUsbGVuZ3RoOnIsdmFsdWU6aX07dC5zZXRJbmRleChuKX0saGFuZGxlVVRGODpmdW5jdGlvbigpe3ZhciB0PXUudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7aWYodGhpcy51c2VVVEY4KCkpdGhpcy5maWxlTmFtZVN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlTmFtZSksdGhpcy5maWxlQ29tbWVudFN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlQ29tbWVudCk7ZWxzZXt2YXIgZT10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGgoKTtpZihudWxsIT09ZSl0aGlzLmZpbGVOYW1lU3RyPWU7ZWxzZXt2YXIgcj1zLnRyYW5zZm9ybVRvKHQsdGhpcy5maWxlTmFtZSk7dGhpcy5maWxlTmFtZVN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKHIpfXZhciBpPXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudCgpO2lmKG51bGwhPT1pKXRoaXMuZmlsZUNvbW1lbnRTdHI9aTtlbHNle3ZhciBuPXMudHJhbnNmb3JtVG8odCx0aGlzLmZpbGVDb21tZW50KTt0aGlzLmZpbGVDb21tZW50U3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUobil9fX0sZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZXh0cmFGaWVsZHNbMjg3ODldO2lmKHQpe3ZhciBlPWkodC52YWx1ZSk7cmV0dXJuIDEhPT1lLnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZU5hbWUpIT09ZS5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKGUucmVhZERhdGEodC5sZW5ndGgtNSkpfXJldHVybiBudWxsfSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5leHRyYUZpZWxkc1syNTQ2MV07aWYodCl7dmFyIGU9aSh0LnZhbHVlKTtyZXR1cm4gMSE9PWUucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlQ29tbWVudCkhPT1lLnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUoZS5yZWFkRGF0YSh0Lmxlbmd0aC01KSl9cmV0dXJuIG51bGx9fSxlLmV4cG9ydHM9bH0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vY29tcHJlc3Npb25zXCI6MyxcIi4vY3JjMzJcIjo0LFwiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyfV0sMzU6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQsZSxyKXt0aGlzLm5hbWU9dCx0aGlzLmRpcj1yLmRpcix0aGlzLmRhdGU9ci5kYXRlLHRoaXMuY29tbWVudD1yLmNvbW1lbnQsdGhpcy51bml4UGVybWlzc2lvbnM9ci51bml4UGVybWlzc2lvbnMsdGhpcy5kb3NQZXJtaXNzaW9ucz1yLmRvc1Blcm1pc3Npb25zLHRoaXMuX2RhdGE9ZSx0aGlzLl9kYXRhQmluYXJ5PXIuYmluYXJ5LHRoaXMub3B0aW9ucz17Y29tcHJlc3Npb246ci5jb21wcmVzc2lvbixjb21wcmVzc2lvbk9wdGlvbnM6ci5jb21wcmVzc2lvbk9wdGlvbnN9fXZhciBzPXQoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksbj10KFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiKSxhPXQoXCIuL3V0ZjhcIiksbz10KFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGg9dChcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7aS5wcm90b3R5cGU9e2ludGVybmFsU3RyZWFtOmZ1bmN0aW9uKHQpe3ZhciBlPW51bGwscj1cInN0cmluZ1wiO3RyeXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3ZhciBpPVwic3RyaW5nXCI9PT0ocj10LnRvTG93ZXJDYXNlKCkpfHxcInRleHRcIj09PXI7XCJiaW5hcnlzdHJpbmdcIiE9PXImJlwidGV4dFwiIT09cnx8KHI9XCJzdHJpbmdcIiksZT10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7dmFyIG49IXRoaXMuX2RhdGFCaW5hcnk7biYmIWkmJihlPWUucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksIW4mJmkmJihlPWUucGlwZShuZXcgYS5VdGY4RGVjb2RlV29ya2VyKSl9Y2F0Y2godCl7KGU9bmV3IGgoXCJlcnJvclwiKSkuZXJyb3IodCl9cmV0dXJuIG5ldyBzKGUscixcIlwiKX0sYXN5bmM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbSh0KS5hY2N1bXVsYXRlKGUpfSxub2RlU3RyZWFtOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0odHx8XCJub2RlYnVmZmVyXCIpLnRvTm9kZWpzU3RyZWFtKGUpfSxfY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9kYXRhIGluc3RhbmNlb2YgbyYmdGhpcy5fZGF0YS5jb21wcmVzc2lvbi5tYWdpYz09PXQubWFnaWMpcmV0dXJuIHRoaXMuX2RhdGEuZ2V0Q29tcHJlc3NlZFdvcmtlcigpO3ZhciByPXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTtyZXR1cm4gdGhpcy5fZGF0YUJpbmFyeXx8KHI9ci5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSxvLmNyZWF0ZVdvcmtlckZyb20ocix0LGUpfSxfZGVjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhIGluc3RhbmNlb2Ygbz90aGlzLl9kYXRhLmdldENvbnRlbnRXb3JrZXIoKTp0aGlzLl9kYXRhIGluc3RhbmNlb2YgaD90aGlzLl9kYXRhOm5ldyBuKHRoaXMuX2RhdGEpfX07Zm9yKHZhciB1PVtcImFzVGV4dFwiLFwiYXNCaW5hcnlcIixcImFzTm9kZUJ1ZmZlclwiLFwiYXNVaW50OEFycmF5XCIsXCJhc0FycmF5QnVmZmVyXCJdLGw9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZj0wO2Y8dS5sZW5ndGg7ZisrKWkucHJvdG90eXBlW3VbZl1dPWw7ZS5leHBvcnRzPWl9LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6MjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxfV0sMzY6W2Z1bmN0aW9uKHQsbCxlKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsaSx0PWUuTXV0YXRpb25PYnNlcnZlcnx8ZS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO2lmKHQpe3ZhciBuPTAscz1uZXcgdCh1KSxhPWUuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7cy5vYnNlcnZlKGEse2NoYXJhY3RlckRhdGE6ITB9KSxyPWZ1bmN0aW9uKCl7YS5kYXRhPW49KytuJTJ9fWVsc2UgaWYoZS5zZXRJbW1lZGlhdGV8fHZvaWQgMD09PWUuTWVzc2FnZUNoYW5uZWwpcj1cImRvY3VtZW50XCJpbiBlJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIHQ9ZS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dSgpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0sZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodCl9OmZ1bmN0aW9uKCl7c2V0VGltZW91dCh1LDApfTtlbHNle3ZhciBvPW5ldyBlLk1lc3NhZ2VDaGFubmVsO28ucG9ydDEub25tZXNzYWdlPXUscj1mdW5jdGlvbigpe28ucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXZhciBoPVtdO2Z1bmN0aW9uIHUoKXt2YXIgdCxlO2k9ITA7Zm9yKHZhciByPWgubGVuZ3RoO3I7KXtmb3IoZT1oLGg9W10sdD0tMTsrK3Q8cjspZVt0XSgpO3I9aC5sZW5ndGh9aT0hMX1sLmV4cG9ydHM9ZnVuY3Rpb24odCl7MSE9PWgucHVzaCh0KXx8aXx8cigpfX0pLmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9KX0se31dLDM3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dChcImltbWVkaWF0ZVwiKTtmdW5jdGlvbiB1KCl7fXZhciBsPXt9LHM9W1wiUkVKRUNURURcIl0sYT1bXCJGVUxGSUxMRURcIl0saT1bXCJQRU5ESU5HXCJdO2Z1bmN0aW9uIG8odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3RoaXMuc3RhdGU9aSx0aGlzLnF1ZXVlPVtdLHRoaXMub3V0Y29tZT12b2lkIDAsdCE9PXUmJmModGhpcyx0KX1mdW5jdGlvbiBoKHQsZSxyKXt0aGlzLnByb21pc2U9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYodGhpcy5vbkZ1bGZpbGxlZD1lLHRoaXMuY2FsbEZ1bGZpbGxlZD10aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZCksXCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHRoaXMub25SZWplY3RlZD1yLHRoaXMuY2FsbFJlamVjdGVkPXRoaXMub3RoZXJDYWxsUmVqZWN0ZWQpfWZ1bmN0aW9uIGYoZSxyLGkpe24oZnVuY3Rpb24oKXt2YXIgdDt0cnl7dD1yKGkpfWNhdGNoKHQpe3JldHVybiBsLnJlamVjdChlLHQpfXQ9PT1lP2wucmVqZWN0KGUsbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGZcIikpOmwucmVzb2x2ZShlLHQpfSl9ZnVuY3Rpb24gZCh0KXt2YXIgZT10JiZ0LnRoZW47aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gYyhlLHQpe3ZhciByPSExO2Z1bmN0aW9uIGkodCl7cnx8KHI9ITAsbC5yZWplY3QoZSx0KSl9ZnVuY3Rpb24gbih0KXtyfHwocj0hMCxsLnJlc29sdmUoZSx0KSl9dmFyIHM9cChmdW5jdGlvbigpe3QobixpKX0pO1wiZXJyb3JcIj09PXMuc3RhdHVzJiZpKHMudmFsdWUpfWZ1bmN0aW9uIHAodCxlKXt2YXIgcj17fTt0cnl7ci52YWx1ZT10KGUpLHIuc3RhdHVzPVwic3VjY2Vzc1wifWNhdGNoKHQpe3Iuc3RhdHVzPVwiZXJyb3JcIixyLnZhbHVlPXR9cmV0dXJuIHJ9KGUuZXhwb3J0cz1vKS5wcm90b3R5cGUuZmluYWxseT1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzO3ZhciByPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0fSl9LGZ1bmN0aW9uKHQpe3JldHVybiByLnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgdH0pfSl9LG8ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0sby5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1hfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZ0aGlzLnN0YXRlPT09cylyZXR1cm4gdGhpczt2YXIgcj1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih1KTt0aGlzLnN0YXRlIT09aT9mKHIsdGhpcy5zdGF0ZT09PWE/dDplLHRoaXMub3V0Y29tZSk6dGhpcy5xdWV1ZS5wdXNoKG5ldyBoKHIsdCxlKSk7cmV0dXJuIHJ9LGgucHJvdG90eXBlLmNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24odCl7bC5yZXNvbHZlKHRoaXMucHJvbWlzZSx0KX0saC5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKHQpe2YodGhpcy5wcm9taXNlLHRoaXMub25GdWxmaWxsZWQsdCl9LGgucHJvdG90eXBlLmNhbGxSZWplY3RlZD1mdW5jdGlvbih0KXtsLnJlamVjdCh0aGlzLnByb21pc2UsdCl9LGgucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkPWZ1bmN0aW9uKHQpe2YodGhpcy5wcm9taXNlLHRoaXMub25SZWplY3RlZCx0KX0sbC5yZXNvbHZlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9cChkLGUpO2lmKFwiZXJyb3JcIj09PXIuc3RhdHVzKXJldHVybiBsLnJlamVjdCh0LHIudmFsdWUpO3ZhciBpPXIudmFsdWU7aWYoaSljKHQsaSk7ZWxzZXt0LnN0YXRlPWEsdC5vdXRjb21lPWU7Zm9yKHZhciBuPS0xLHM9dC5xdWV1ZS5sZW5ndGg7KytuPHM7KXQucXVldWVbbl0uY2FsbEZ1bGZpbGxlZChlKX1yZXR1cm4gdH0sbC5yZWplY3Q9ZnVuY3Rpb24odCxlKXt0LnN0YXRlPXMsdC5vdXRjb21lPWU7Zm9yKHZhciByPS0xLGk9dC5xdWV1ZS5sZW5ndGg7KytyPGk7KXQucXVldWVbcl0uY2FsbFJlamVjdGVkKGUpO3JldHVybiB0fSxvLnJlc29sdmU9ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIHRoaXMpcmV0dXJuIHQ7cmV0dXJuIGwucmVzb2x2ZShuZXcgdGhpcyh1KSx0KX0sby5yZWplY3Q9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHRoaXModSk7cmV0dXJuIGwucmVqZWN0KGUsdCl9LG8uYWxsPWZ1bmN0aW9uKHQpe3ZhciByPXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIGk9dC5sZW5ndGgsbj0hMTtpZighaSlyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgcz1uZXcgQXJyYXkoaSksYT0wLGU9LTEsbz1uZXcgdGhpcyh1KTtmb3IoOysrZTxpOyloKHRbZV0sZSk7cmV0dXJuIG87ZnVuY3Rpb24gaCh0LGUpe3IucmVzb2x2ZSh0KS50aGVuKGZ1bmN0aW9uKHQpe3NbZV09dCwrK2EhPT1pfHxufHwobj0hMCxsLnJlc29sdmUobyxzKSl9LGZ1bmN0aW9uKHQpe258fChuPSEwLGwucmVqZWN0KG8sdCkpfSl9fSxvLnJhY2U9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgcj10Lmxlbmd0aCxpPSExO2lmKCFyKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBuPS0xLHM9bmV3IHRoaXModSk7Zm9yKDsrK248cjspYT10W25dLGUucmVzb2x2ZShhKS50aGVuKGZ1bmN0aW9uKHQpe2l8fChpPSEwLGwucmVzb2x2ZShzLHQpKX0sZnVuY3Rpb24odCl7aXx8KGk9ITAsbC5yZWplY3Qocyx0KSl9KTt2YXIgYTtyZXR1cm4gc319LHtpbW1lZGlhdGU6MzZ9XSwzODpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBpPXt9OygwLHQoXCIuL2xpYi91dGlscy9jb21tb25cIikuYXNzaWduKShpLHQoXCIuL2xpYi9kZWZsYXRlXCIpLHQoXCIuL2xpYi9pbmZsYXRlXCIpLHQoXCIuL2xpYi96bGliL2NvbnN0YW50c1wiKSksZS5leHBvcnRzPWl9LHtcIi4vbGliL2RlZmxhdGVcIjozOSxcIi4vbGliL2luZmxhdGVcIjo0MCxcIi4vbGliL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9saWIvemxpYi9jb25zdGFudHNcIjo0NH1dLDM5OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dChcIi4vemxpYi9kZWZsYXRlXCIpLG89dChcIi4vdXRpbHMvY29tbW9uXCIpLGg9dChcIi4vdXRpbHMvc3RyaW5nc1wiKSxuPXQoXCIuL3psaWIvbWVzc2FnZXNcIikscz10KFwiLi96bGliL3pzdHJlYW1cIiksdT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGw9MCxmPS0xLGQ9MCxjPTg7ZnVuY3Rpb24gcCh0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBwKSlyZXR1cm4gbmV3IHAodCk7dGhpcy5vcHRpb25zPW8uYXNzaWduKHtsZXZlbDpmLG1ldGhvZDpjLGNodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjE1LG1lbUxldmVsOjgsc3RyYXRlZ3k6ZCx0bzpcIlwifSx0fHx7fSk7dmFyIGU9dGhpcy5vcHRpb25zO2UucmF3JiYwPGUud2luZG93Qml0cz9lLndpbmRvd0JpdHM9LWUud2luZG93Qml0czplLmd6aXAmJjA8ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYmJihlLndpbmRvd0JpdHMrPTE2KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IHMsdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWEuZGVmbGF0ZUluaXQyKHRoaXMuc3RybSxlLmxldmVsLGUubWV0aG9kLGUud2luZG93Qml0cyxlLm1lbUxldmVsLGUuc3RyYXRlZ3kpO2lmKHIhPT1sKXRocm93IG5ldyBFcnJvcihuW3JdKTtpZihlLmhlYWRlciYmYS5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSxlLmhlYWRlciksZS5kaWN0aW9uYXJ5KXt2YXIgaTtpZihpPVwic3RyaW5nXCI9PXR5cGVvZiBlLmRpY3Rpb25hcnk/aC5zdHJpbmcyYnVmKGUuZGljdGlvbmFyeSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUuZGljdGlvbmFyeSk/bmV3IFVpbnQ4QXJyYXkoZS5kaWN0aW9uYXJ5KTplLmRpY3Rpb25hcnksKHI9YS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0saSkpIT09bCl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5fZGljdF9zZXQ9ITB9fWZ1bmN0aW9uIGkodCxlKXt2YXIgcj1uZXcgcChlKTtpZihyLnB1c2godCwhMCksci5lcnIpdGhyb3cgci5tc2d8fG5bci5lcnJdO3JldHVybiByLnJlc3VsdH1wLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuPXRoaXMuc3RybSxzPXRoaXMub3B0aW9ucy5jaHVua1NpemU7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtpPWU9PT1+fmU/ZTohMD09PWU/NDowLFwic3RyaW5nXCI9PXR5cGVvZiB0P24uaW5wdXQ9aC5zdHJpbmcyYnVmKHQpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbCh0KT9uLmlucHV0PW5ldyBVaW50OEFycmF5KHQpOm4uaW5wdXQ9dCxuLm5leHRfaW49MCxuLmF2YWlsX2luPW4uaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1uLmF2YWlsX291dCYmKG4ub3V0cHV0PW5ldyBvLkJ1Zjgocyksbi5uZXh0X291dD0wLG4uYXZhaWxfb3V0PXMpLDEhPT0ocj1hLmRlZmxhdGUobixpKSkmJnIhPT1sKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7MCE9PW4uYXZhaWxfb3V0JiYoMCE9PW4uYXZhaWxfaW58fDQhPT1pJiYyIT09aSl8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMub25EYXRhKGguYnVmMmJpbnN0cmluZyhvLnNocmlua0J1ZihuLm91dHB1dCxuLm5leHRfb3V0KSkpOnRoaXMub25EYXRhKG8uc2hyaW5rQnVmKG4ub3V0cHV0LG4ubmV4dF9vdXQpKSl9d2hpbGUoKDA8bi5hdmFpbF9pbnx8MD09PW4uYXZhaWxfb3V0KSYmMSE9PXIpO3JldHVybiA0PT09aT8ocj1hLmRlZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PWwpOjIhPT1pfHwodGhpcy5vbkVuZChsKSwhKG4uYXZhaWxfb3V0PTApKX0scC5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKHQpe3RoaXMuY2h1bmtzLnB1c2godCl9LHAucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKHQpe3Q9PT1sJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PW8uZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPXQsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5EZWZsYXRlPXAsci5kZWZsYXRlPWksci5kZWZsYXRlUmF3PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGU9ZXx8e30pLnJhdz0hMCxpKHQsZSl9LHIuZ3ppcD1mdW5jdGlvbih0LGUpe3JldHVybihlPWV8fHt9KS5nemlwPSEwLGkodCxlKX19LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9kZWZsYXRlXCI6NDYsXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MDpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBkPXQoXCIuL3psaWIvaW5mbGF0ZVwiKSxjPXQoXCIuL3V0aWxzL2NvbW1vblwiKSxwPXQoXCIuL3V0aWxzL3N0cmluZ3NcIiksbT10KFwiLi96bGliL2NvbnN0YW50c1wiKSxpPXQoXCIuL3psaWIvbWVzc2FnZXNcIiksbj10KFwiLi96bGliL3pzdHJlYW1cIikscz10KFwiLi96bGliL2d6aGVhZGVyXCIpLF89T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztmdW5jdGlvbiBhKHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGEpKXJldHVybiBuZXcgYSh0KTt0aGlzLm9wdGlvbnM9Yy5hc3NpZ24oe2NodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjAsdG86XCJcIn0sdHx8e30pO3ZhciBlPXRoaXMub3B0aW9ucztlLnJhdyYmMDw9ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYmJihlLndpbmRvd0JpdHM9LWUud2luZG93Qml0cywwPT09ZS53aW5kb3dCaXRzJiYoZS53aW5kb3dCaXRzPS0xNSkpLCEoMDw9ZS53aW5kb3dCaXRzJiZlLndpbmRvd0JpdHM8MTYpfHx0JiZ0LndpbmRvd0JpdHN8fChlLndpbmRvd0JpdHMrPTMyKSwxNTxlLndpbmRvd0JpdHMmJmUud2luZG93Qml0czw0OCYmMD09KDE1JmUud2luZG93Qml0cykmJihlLndpbmRvd0JpdHN8PTE1KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IG4sdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWQuaW5mbGF0ZUluaXQyKHRoaXMuc3RybSxlLndpbmRvd0JpdHMpO2lmKHIhPT1tLlpfT0spdGhyb3cgbmV3IEVycm9yKGlbcl0pO3RoaXMuaGVhZGVyPW5ldyBzLGQuaW5mbGF0ZUdldEhlYWRlcih0aGlzLnN0cm0sdGhpcy5oZWFkZXIpfWZ1bmN0aW9uIG8odCxlKXt2YXIgcj1uZXcgYShlKTtpZihyLnB1c2godCwhMCksci5lcnIpdGhyb3cgci5tc2d8fGlbci5lcnJdO3JldHVybiByLnJlc3VsdH1hLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGg9dGhpcy5zdHJtLHU9dGhpcy5vcHRpb25zLmNodW5rU2l6ZSxsPXRoaXMub3B0aW9ucy5kaWN0aW9uYXJ5LGY9ITE7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtpPWU9PT1+fmU/ZTohMD09PWU/bS5aX0ZJTklTSDptLlpfTk9fRkxVU0gsXCJzdHJpbmdcIj09dHlwZW9mIHQ/aC5pbnB1dD1wLmJpbnN0cmluZzJidWYodCk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKHQpP2guaW5wdXQ9bmV3IFVpbnQ4QXJyYXkodCk6aC5pbnB1dD10LGgubmV4dF9pbj0wLGguYXZhaWxfaW49aC5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWguYXZhaWxfb3V0JiYoaC5vdXRwdXQ9bmV3IGMuQnVmOCh1KSxoLm5leHRfb3V0PTAsaC5hdmFpbF9vdXQ9dSksKHI9ZC5pbmZsYXRlKGgsbS5aX05PX0ZMVVNIKSk9PT1tLlpfTkVFRF9ESUNUJiZsJiYobz1cInN0cmluZ1wiPT10eXBlb2YgbD9wLnN0cmluZzJidWYobCk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKGwpP25ldyBVaW50OEFycmF5KGwpOmwscj1kLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxvKSkscj09PW0uWl9CVUZfRVJST1ImJiEwPT09ZiYmKHI9bS5aX09LLGY9ITEpLHIhPT1tLlpfU1RSRUFNX0VORCYmciE9PW0uWl9PSylyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApO2gubmV4dF9vdXQmJigwIT09aC5hdmFpbF9vdXQmJnIhPT1tLlpfU1RSRUFNX0VORCYmKDAhPT1oLmF2YWlsX2lufHxpIT09bS5aX0ZJTklTSCYmaSE9PW0uWl9TWU5DX0ZMVVNIKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/KG49cC51dGY4Ym9yZGVyKGgub3V0cHV0LGgubmV4dF9vdXQpLHM9aC5uZXh0X291dC1uLGE9cC5idWYyc3RyaW5nKGgub3V0cHV0LG4pLGgubmV4dF9vdXQ9cyxoLmF2YWlsX291dD11LXMscyYmYy5hcnJheVNldChoLm91dHB1dCxoLm91dHB1dCxuLHMsMCksdGhpcy5vbkRhdGEoYSkpOnRoaXMub25EYXRhKGMuc2hyaW5rQnVmKGgub3V0cHV0LGgubmV4dF9vdXQpKSkpLDA9PT1oLmF2YWlsX2luJiYwPT09aC5hdmFpbF9vdXQmJihmPSEwKX13aGlsZSgoMDxoLmF2YWlsX2lufHwwPT09aC5hdmFpbF9vdXQpJiZyIT09bS5aX1NUUkVBTV9FTkQpO3JldHVybiByPT09bS5aX1NUUkVBTV9FTkQmJihpPW0uWl9GSU5JU0gpLGk9PT1tLlpfRklOSVNIPyhyPWQuaW5mbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bS5aX09LKTppIT09bS5aX1NZTkNfRkxVU0h8fCh0aGlzLm9uRW5kKG0uWl9PSyksIShoLmF2YWlsX291dD0wKSl9LGEucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbih0KXt0aGlzLmNodW5rcy5wdXNoKHQpfSxhLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbih0KXt0PT09bS5aX09LJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PWMuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPXQsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5JbmZsYXRlPWEsci5pbmZsYXRlPW8sci5pbmZsYXRlUmF3PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGU9ZXx8e30pLnJhdz0hMCxvKHQsZSl9LHIudW5nemlwPW99LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9jb25zdGFudHNcIjo0NCxcIi4vemxpYi9nemhlYWRlclwiOjQ3LFwiLi96bGliL2luZmxhdGVcIjo0OSxcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEludDMyQXJyYXk7ci5hc3NpZ249ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtlLmxlbmd0aDspe3ZhciByPWUuc2hpZnQoKTtpZihyKXtpZihcIm9iamVjdFwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKHIrXCJtdXN0IGJlIG5vbi1vYmplY3RcIik7Zm9yKHZhciBpIGluIHIpci5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09cltpXSl9fXJldHVybiB0fSxyLnNocmlua0J1Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lmxlbmd0aD09PWU/dDp0LnN1YmFycmF5P3Quc3ViYXJyYXkoMCxlKToodC5sZW5ndGg9ZSx0KX07dmFyIG49e2FycmF5U2V0OmZ1bmN0aW9uKHQsZSxyLGksbil7aWYoZS5zdWJhcnJheSYmdC5zdWJhcnJheSl0LnNldChlLnN1YmFycmF5KHIscitpKSxuKTtlbHNlIGZvcih2YXIgcz0wO3M8aTtzKyspdFtuK3NdPWVbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbih0KXt2YXIgZSxyLGksbixzLGE7Zm9yKGU9aT0wLHI9dC5sZW5ndGg7ZTxyO2UrKylpKz10W2VdLmxlbmd0aDtmb3IoYT1uZXcgVWludDhBcnJheShpKSxlPW49MCxyPXQubGVuZ3RoO2U8cjtlKyspcz10W2VdLGEuc2V0KHMsbiksbis9cy5sZW5ndGg7cmV0dXJuIGF9fSxzPXthcnJheVNldDpmdW5jdGlvbih0LGUscixpLG4pe2Zvcih2YXIgcz0wO3M8aTtzKyspdFtuK3NdPWVbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbih0KXtyZXR1cm5bXS5jb25jYXQuYXBwbHkoW10sdCl9fTtyLnNldFR5cGVkPWZ1bmN0aW9uKHQpe3Q/KHIuQnVmOD1VaW50OEFycmF5LHIuQnVmMTY9VWludDE2QXJyYXksci5CdWYzMj1JbnQzMkFycmF5LHIuYXNzaWduKHIsbikpOihyLkJ1Zjg9QXJyYXksci5CdWYxNj1BcnJheSxyLkJ1ZjMyPUFycmF5LHIuYXNzaWduKHIscykpfSxyLnNldFR5cGVkKGkpfSx7fV0sNDI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD10KFwiLi9jb21tb25cIiksbj0hMCxzPSEwO3RyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsWzBdKX1jYXRjaCh0KXtuPSExfXRyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpfWNhdGNoKHQpe3M9ITF9Zm9yKHZhciB1PW5ldyBoLkJ1ZjgoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTtmdW5jdGlvbiBsKHQsZSl7aWYoZTw2NTUzNyYmKHQuc3ViYXJyYXkmJnN8fCF0LnN1YmFycmF5JiZuKSlyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGguc2hyaW5rQnVmKHQsZSkpO2Zvcih2YXIgcj1cIlwiLGk9MDtpPGU7aSsrKXIrPVN0cmluZy5mcm9tQ2hhckNvZGUodFtpXSk7cmV0dXJuIHJ9dVsyNTRdPXVbMjU0XT0xLHIuc3RyaW5nMmJ1Zj1mdW5jdGlvbih0KXt2YXIgZSxyLGksbixzLGE9dC5sZW5ndGgsbz0wO2ZvcihuPTA7bjxhO24rKyk1NTI5Nj09KDY0NTEyJihyPXQuY2hhckNvZGVBdChuKSkpJiZuKzE8YSYmNTYzMjA9PSg2NDUxMiYoaT10LmNoYXJDb2RlQXQobisxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhpLTU2MzIwKSxuKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKGU9bmV3IGguQnVmOChvKSxuPXM9MDtzPG87bisrKTU1Mjk2PT0oNjQ1MTImKHI9dC5jaGFyQ29kZUF0KG4pKSkmJm4rMTxhJiY1NjMyMD09KDY0NTEyJihpPXQuY2hhckNvZGVBdChuKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKGktNTYzMjApLG4rKykscjwxMjg/ZVtzKytdPXI6KHI8MjA0OD9lW3MrK109MTkyfHI+Pj42OihyPDY1NTM2P2VbcysrXT0yMjR8cj4+PjEyOihlW3MrK109MjQwfHI+Pj4xOCxlW3MrK109MTI4fHI+Pj4xMiY2MyksZVtzKytdPTEyOHxyPj4+NiY2MyksZVtzKytdPTEyOHw2MyZyKTtyZXR1cm4gZX0sci5idWYyYmluc3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBsKHQsdC5sZW5ndGgpfSxyLmJpbnN0cmluZzJidWY9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBoLkJ1ZjgodC5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspZVtyXT10LmNoYXJDb2RlQXQocik7cmV0dXJuIGV9LHIuYnVmMnN0cmluZz1mdW5jdGlvbih0LGUpe3ZhciByLGksbixzLGE9ZXx8dC5sZW5ndGgsbz1uZXcgQXJyYXkoMiphKTtmb3Iocj1pPTA7cjxhOylpZigobj10W3IrK10pPDEyOClvW2krK109bjtlbHNlIGlmKDQ8KHM9dVtuXSkpb1tpKytdPTY1NTMzLHIrPXMtMTtlbHNle2ZvcihuJj0yPT09cz8zMTozPT09cz8xNTo3OzE8cyYmcjxhOyluPW48PDZ8NjMmdFtyKytdLHMtLTsxPHM/b1tpKytdPTY1NTMzOm48NjU1MzY/b1tpKytdPW46KG4tPTY1NTM2LG9baSsrXT01NTI5NnxuPj4xMCYxMDIzLG9baSsrXT01NjMyMHwxMDIzJm4pfXJldHVybiBsKG8saSl9LHIudXRmOGJvcmRlcj1mdW5jdGlvbih0LGUpe3ZhciByO2ZvcigoZT1lfHx0Lmxlbmd0aCk+dC5sZW5ndGgmJihlPXQubGVuZ3RoKSxyPWUtMTswPD1yJiYxMjg9PSgxOTImdFtyXSk7KXItLTtyZXR1cm4gcjwwP2U6MD09PXI/ZTpyK3VbdFtyXV0+ZT9yOmV9fSx7XCIuL2NvbW1vblwiOjQxfV0sNDM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlLHIsaSl7Zm9yKHZhciBuPTY1NTM1JnR8MCxzPXQ+Pj4xNiY2NTUzNXwwLGE9MDswIT09cjspe2ZvcihyLT1hPTJlMzxyPzJlMzpyO3M9cysobj1uK2VbaSsrXXwwKXwwLC0tYTspO24lPTY1NTIxLHMlPTY1NTIxfXJldHVybiBufHM8PDE2fDB9fSx7fV0sNDQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e1pfTk9fRkxVU0g6MCxaX1BBUlRJQUxfRkxVU0g6MSxaX1NZTkNfRkxVU0g6MixaX0ZVTExfRkxVU0g6MyxaX0ZJTklTSDo0LFpfQkxPQ0s6NSxaX1RSRUVTOjYsWl9PSzowLFpfU1RSRUFNX0VORDoxLFpfTkVFRF9ESUNUOjIsWl9FUlJOTzotMSxaX1NUUkVBTV9FUlJPUjotMixaX0RBVEFfRVJST1I6LTMsWl9CVUZfRVJST1I6LTUsWl9OT19DT01QUkVTU0lPTjowLFpfQkVTVF9TUEVFRDoxLFpfQkVTVF9DT01QUkVTU0lPTjo5LFpfREVGQVVMVF9DT01QUkVTU0lPTjotMSxaX0ZJTFRFUkVEOjEsWl9IVUZGTUFOX09OTFk6MixaX1JMRTozLFpfRklYRUQ6NCxaX0RFRkFVTFRfU1RSQVRFR1k6MCxaX0JJTkFSWTowLFpfVEVYVDoxLFpfVU5LTk9XTjoyLFpfREVGTEFURUQ6OH19LHt9XSw0NTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10scj0wO3I8MjU2O3IrKyl7dD1yO2Zvcih2YXIgaT0wO2k8ODtpKyspdD0xJnQ/Mzk4ODI5MjM4NF50Pj4+MTp0Pj4+MTtlW3JdPXR9cmV0dXJuIGV9KCk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxyLGkpe3ZhciBuPW8scz1pK3I7dF49LTE7Zm9yKHZhciBhPWk7YTxzO2ErKyl0PXQ+Pj44Xm5bMjU1Jih0XmVbYV0pXTtyZXR1cm4tMV50fX0se31dLDQ2OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGgsZD10KFwiLi4vdXRpbHMvY29tbW9uXCIpLHU9dChcIi4vdHJlZXNcIiksYz10KFwiLi9hZGxlcjMyXCIpLHA9dChcIi4vY3JjMzJcIiksaT10KFwiLi9tZXNzYWdlc1wiKSxsPTAsZj00LG09MCxfPS0yLGc9LTEsYj00LG49Mix2PTgseT05LHM9Mjg2LGE9MzAsbz0xOSx3PTIqcysxLGs9MTUseD0zLFM9MjU4LHo9Uyt4KzEsQz00MixFPTExMyxBPTEsST0yLE89MyxCPTQ7ZnVuY3Rpb24gUih0LGUpe3JldHVybiB0Lm1zZz1pW2VdLGV9ZnVuY3Rpb24gVCh0KXtyZXR1cm4odDw8MSktKDQ8dD85OjApfWZ1bmN0aW9uIEQodCl7Zm9yKHZhciBlPXQubGVuZ3RoOzA8PS0tZTspdFtlXT0wfWZ1bmN0aW9uIEYodCl7dmFyIGU9dC5zdGF0ZSxyPWUucGVuZGluZztyPnQuYXZhaWxfb3V0JiYocj10LmF2YWlsX291dCksMCE9PXImJihkLmFycmF5U2V0KHQub3V0cHV0LGUucGVuZGluZ19idWYsZS5wZW5kaW5nX291dCxyLHQubmV4dF9vdXQpLHQubmV4dF9vdXQrPXIsZS5wZW5kaW5nX291dCs9cix0LnRvdGFsX291dCs9cix0LmF2YWlsX291dC09cixlLnBlbmRpbmctPXIsMD09PWUucGVuZGluZyYmKGUucGVuZGluZ19vdXQ9MCkpfWZ1bmN0aW9uIE4odCxlKXt1Ll90cl9mbHVzaF9ibG9jayh0LDA8PXQuYmxvY2tfc3RhcnQ/dC5ibG9ja19zdGFydDotMSx0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQsZSksdC5ibG9ja19zdGFydD10LnN0cnN0YXJ0LEYodC5zdHJtKX1mdW5jdGlvbiBVKHQsZSl7dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZX1mdW5jdGlvbiBQKHQsZSl7dC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109ZT4+PjgmMjU1LHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZlfWZ1bmN0aW9uIEwodCxlKXt2YXIgcixpLG49dC5tYXhfY2hhaW5fbGVuZ3RoLHM9dC5zdHJzdGFydCxhPXQucHJldl9sZW5ndGgsbz10Lm5pY2VfbWF0Y2gsaD10LnN0cnN0YXJ0PnQud19zaXplLXo/dC5zdHJzdGFydC0odC53X3NpemUteik6MCx1PXQud2luZG93LGw9dC53X21hc2ssZj10LnByZXYsZD10LnN0cnN0YXJ0K1MsYz11W3MrYS0xXSxwPXVbcythXTt0LnByZXZfbGVuZ3RoPj10Lmdvb2RfbWF0Y2gmJihuPj49Miksbz50Lmxvb2thaGVhZCYmKG89dC5sb29rYWhlYWQpO2Rve2lmKHVbKHI9ZSkrYV09PT1wJiZ1W3IrYS0xXT09PWMmJnVbcl09PT11W3NdJiZ1Wysrcl09PT11W3MrMV0pe3MrPTIscisrO2Rve313aGlsZSh1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmczxkKTtpZihpPVMtKGQtcykscz1kLVMsYTxpKXtpZih0Lm1hdGNoX3N0YXJ0PWUsbzw9KGE9aSkpYnJlYWs7Yz11W3MrYS0xXSxwPXVbcythXX19fXdoaWxlKChlPWZbZSZsXSk+aCYmMCE9LS1uKTtyZXR1cm4gYTw9dC5sb29rYWhlYWQ/YTp0Lmxvb2thaGVhZH1mdW5jdGlvbiBqKHQpe3ZhciBlLHIsaSxuLHMsYSxvLGgsdSxsLGY9dC53X3NpemU7ZG97aWYobj10LndpbmRvd19zaXplLXQubG9va2FoZWFkLXQuc3Ryc3RhcnQsdC5zdHJzdGFydD49ZisoZi16KSl7Zm9yKGQuYXJyYXlTZXQodC53aW5kb3csdC53aW5kb3csZixmLDApLHQubWF0Y2hfc3RhcnQtPWYsdC5zdHJzdGFydC09Zix0LmJsb2NrX3N0YXJ0LT1mLGU9cj10Lmhhc2hfc2l6ZTtpPXQuaGVhZFstLWVdLHQuaGVhZFtlXT1mPD1pP2ktZjowLC0tcjspO2ZvcihlPXI9ZjtpPXQucHJldlstLWVdLHQucHJldltlXT1mPD1pP2ktZjowLC0tcjspO24rPWZ9aWYoMD09PXQuc3RybS5hdmFpbF9pbilicmVhaztpZihhPXQuc3RybSxvPXQud2luZG93LGg9dC5zdHJzdGFydCt0Lmxvb2thaGVhZCx1PW4sbD12b2lkIDAsbD1hLmF2YWlsX2luLHU8bCYmKGw9dSkscj0wPT09bD8wOihhLmF2YWlsX2luLT1sLGQuYXJyYXlTZXQobyxhLmlucHV0LGEubmV4dF9pbixsLGgpLDE9PT1hLnN0YXRlLndyYXA/YS5hZGxlcj1jKGEuYWRsZXIsbyxsLGgpOjI9PT1hLnN0YXRlLndyYXAmJihhLmFkbGVyPXAoYS5hZGxlcixvLGwsaCkpLGEubmV4dF9pbis9bCxhLnRvdGFsX2luKz1sLGwpLHQubG9va2FoZWFkKz1yLHQubG9va2FoZWFkK3QuaW5zZXJ0Pj14KWZvcihzPXQuc3Ryc3RhcnQtdC5pbnNlcnQsdC5pbnNfaD10LndpbmRvd1tzXSx0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbcysxXSkmdC5oYXNoX21hc2s7dC5pbnNlcnQmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbcyt4LTFdKSZ0Lmhhc2hfbWFzayx0LnByZXZbcyZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT1zLHMrKyx0Lmluc2VydC0tLCEodC5sb29rYWhlYWQrdC5pbnNlcnQ8eCkpOyk7fXdoaWxlKHQubG9va2FoZWFkPHomJjAhPT10LnN0cm0uYXZhaWxfaW4pfWZ1bmN0aW9uIFoodCxlKXtmb3IodmFyIHIsaTs7KXtpZih0Lmxvb2thaGVhZDx6KXtpZihqKHQpLHQubG9va2FoZWFkPHomJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha31pZihyPTAsdC5sb29rYWhlYWQ+PXgmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLDAhPT1yJiZ0LnN0cnN0YXJ0LXI8PXQud19zaXplLXomJih0Lm1hdGNoX2xlbmd0aD1MKHQscikpLHQubWF0Y2hfbGVuZ3RoPj14KWlmKGk9dS5fdHJfdGFsbHkodCx0LnN0cnN0YXJ0LXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGgteCksdC5sb29rYWhlYWQtPXQubWF0Y2hfbGVuZ3RoLHQubWF0Y2hfbGVuZ3RoPD10Lm1heF9sYXp5X21hdGNoJiZ0Lmxvb2thaGVhZD49eCl7Zm9yKHQubWF0Y2hfbGVuZ3RoLS07dC5zdHJzdGFydCsrLHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0K3gtMV0pJnQuaGFzaF9tYXNrLHI9dC5wcmV2W3Quc3Ryc3RhcnQmdC53X21hc2tdPXQuaGVhZFt0Lmluc19oXSx0LmhlYWRbdC5pbnNfaF09dC5zdHJzdGFydCwwIT0tLXQubWF0Y2hfbGVuZ3RoOyk7dC5zdHJzdGFydCsrfWVsc2UgdC5zdHJzdGFydCs9dC5tYXRjaF9sZW5ndGgsdC5tYXRjaF9sZW5ndGg9MCx0Lmluc19oPXQud2luZG93W3Quc3Ryc3RhcnRdLHQuaW5zX2g9KHQuaW5zX2g8PHQuaGFzaF9zaGlmdF50LndpbmRvd1t0LnN0cnN0YXJ0KzFdKSZ0Lmhhc2hfbWFzaztlbHNlIGk9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnRdKSx0Lmxvb2thaGVhZC0tLHQuc3Ryc3RhcnQrKztpZihpJiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PXQuc3Ryc3RhcnQ8eC0xP3Quc3Ryc3RhcnQ6eC0xLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBXKHQsZSl7Zm9yKHZhciByLGksbjs7KXtpZih0Lmxvb2thaGVhZDx6KXtpZihqKHQpLHQubG9va2FoZWFkPHomJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha31pZihyPTAsdC5sb29rYWhlYWQ+PXgmJih0Lmluc19oPSh0Lmluc19oPDx0Lmhhc2hfc2hpZnRedC53aW5kb3dbdC5zdHJzdGFydCt4LTFdKSZ0Lmhhc2hfbWFzayxyPXQucHJldlt0LnN0cnN0YXJ0JnQud19tYXNrXT10LmhlYWRbdC5pbnNfaF0sdC5oZWFkW3QuaW5zX2hdPXQuc3Ryc3RhcnQpLHQucHJldl9sZW5ndGg9dC5tYXRjaF9sZW5ndGgsdC5wcmV2X21hdGNoPXQubWF0Y2hfc3RhcnQsdC5tYXRjaF9sZW5ndGg9eC0xLDAhPT1yJiZ0LnByZXZfbGVuZ3RoPHQubWF4X2xhenlfbWF0Y2gmJnQuc3Ryc3RhcnQtcjw9dC53X3NpemUteiYmKHQubWF0Y2hfbGVuZ3RoPUwodCxyKSx0Lm1hdGNoX2xlbmd0aDw9NSYmKDE9PT10LnN0cmF0ZWd5fHx0Lm1hdGNoX2xlbmd0aD09PXgmJjQwOTY8dC5zdHJzdGFydC10Lm1hdGNoX3N0YXJ0KSYmKHQubWF0Y2hfbGVuZ3RoPXgtMSkpLHQucHJldl9sZW5ndGg+PXgmJnQubWF0Y2hfbGVuZ3RoPD10LnByZXZfbGVuZ3RoKXtmb3Iobj10LnN0cnN0YXJ0K3QubG9va2FoZWFkLXgsaT11Ll90cl90YWxseSh0LHQuc3Ryc3RhcnQtMS10LnByZXZfbWF0Y2gsdC5wcmV2X2xlbmd0aC14KSx0Lmxvb2thaGVhZC09dC5wcmV2X2xlbmd0aC0xLHQucHJldl9sZW5ndGgtPTI7Kyt0LnN0cnN0YXJ0PD1uJiYodC5pbnNfaD0odC5pbnNfaDw8dC5oYXNoX3NoaWZ0XnQud2luZG93W3Quc3Ryc3RhcnQreC0xXSkmdC5oYXNoX21hc2sscj10LnByZXZbdC5zdHJzdGFydCZ0LndfbWFza109dC5oZWFkW3QuaW5zX2hdLHQuaGVhZFt0Lmluc19oXT10LnN0cnN0YXJ0KSwwIT0tLXQucHJldl9sZW5ndGg7KTtpZih0Lm1hdGNoX2F2YWlsYWJsZT0wLHQubWF0Y2hfbGVuZ3RoPXgtMSx0LnN0cnN0YXJ0KyssaSYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfWVsc2UgaWYodC5tYXRjaF9hdmFpbGFibGUpe2lmKChpPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0LTFdKSkmJk4odCwhMSksdC5zdHJzdGFydCsrLHQubG9va2FoZWFkLS0sMD09PXQuc3RybS5hdmFpbF9vdXQpcmV0dXJuIEF9ZWxzZSB0Lm1hdGNoX2F2YWlsYWJsZT0xLHQuc3Ryc3RhcnQrKyx0Lmxvb2thaGVhZC0tfXJldHVybiB0Lm1hdGNoX2F2YWlsYWJsZSYmKGk9dS5fdHJfdGFsbHkodCwwLHQud2luZG93W3Quc3Ryc3RhcnQtMV0pLHQubWF0Y2hfYXZhaWxhYmxlPTApLHQuaW5zZXJ0PXQuc3Ryc3RhcnQ8eC0xP3Quc3Ryc3RhcnQ6eC0xLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBNKHQsZSxyLGksbil7dGhpcy5nb29kX2xlbmd0aD10LHRoaXMubWF4X2xhenk9ZSx0aGlzLm5pY2VfbGVuZ3RoPXIsdGhpcy5tYXhfY2hhaW49aSx0aGlzLmZ1bmM9bn1mdW5jdGlvbiBIKCl7dGhpcy5zdHJtPW51bGwsdGhpcy5zdGF0dXM9MCx0aGlzLnBlbmRpbmdfYnVmPW51bGwsdGhpcy5wZW5kaW5nX2J1Zl9zaXplPTAsdGhpcy5wZW5kaW5nX291dD0wLHRoaXMucGVuZGluZz0wLHRoaXMud3JhcD0wLHRoaXMuZ3poZWFkPW51bGwsdGhpcy5nemluZGV4PTAsdGhpcy5tZXRob2Q9dix0aGlzLmxhc3RfZmx1c2g9LTEsdGhpcy53X3NpemU9MCx0aGlzLndfYml0cz0wLHRoaXMud19tYXNrPTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLndpbmRvd19zaXplPTAsdGhpcy5wcmV2PW51bGwsdGhpcy5oZWFkPW51bGwsdGhpcy5pbnNfaD0wLHRoaXMuaGFzaF9zaXplPTAsdGhpcy5oYXNoX2JpdHM9MCx0aGlzLmhhc2hfbWFzaz0wLHRoaXMuaGFzaF9zaGlmdD0wLHRoaXMuYmxvY2tfc3RhcnQ9MCx0aGlzLm1hdGNoX2xlbmd0aD0wLHRoaXMucHJldl9tYXRjaD0wLHRoaXMubWF0Y2hfYXZhaWxhYmxlPTAsdGhpcy5zdHJzdGFydD0wLHRoaXMubWF0Y2hfc3RhcnQ9MCx0aGlzLmxvb2thaGVhZD0wLHRoaXMucHJldl9sZW5ndGg9MCx0aGlzLm1heF9jaGFpbl9sZW5ndGg9MCx0aGlzLm1heF9sYXp5X21hdGNoPTAsdGhpcy5sZXZlbD0wLHRoaXMuc3RyYXRlZ3k9MCx0aGlzLmdvb2RfbWF0Y2g9MCx0aGlzLm5pY2VfbWF0Y2g9MCx0aGlzLmR5bl9sdHJlZT1uZXcgZC5CdWYxNigyKncpLHRoaXMuZHluX2R0cmVlPW5ldyBkLkJ1ZjE2KDIqKDIqYSsxKSksdGhpcy5ibF90cmVlPW5ldyBkLkJ1ZjE2KDIqKDIqbysxKSksRCh0aGlzLmR5bl9sdHJlZSksRCh0aGlzLmR5bl9kdHJlZSksRCh0aGlzLmJsX3RyZWUpLHRoaXMubF9kZXNjPW51bGwsdGhpcy5kX2Rlc2M9bnVsbCx0aGlzLmJsX2Rlc2M9bnVsbCx0aGlzLmJsX2NvdW50PW5ldyBkLkJ1ZjE2KGsrMSksdGhpcy5oZWFwPW5ldyBkLkJ1ZjE2KDIqcysxKSxEKHRoaXMuaGVhcCksdGhpcy5oZWFwX2xlbj0wLHRoaXMuaGVhcF9tYXg9MCx0aGlzLmRlcHRoPW5ldyBkLkJ1ZjE2KDIqcysxKSxEKHRoaXMuZGVwdGgpLHRoaXMubF9idWY9MCx0aGlzLmxpdF9idWZzaXplPTAsdGhpcy5sYXN0X2xpdD0wLHRoaXMuZF9idWY9MCx0aGlzLm9wdF9sZW49MCx0aGlzLnN0YXRpY19sZW49MCx0aGlzLm1hdGNoZXM9MCx0aGlzLmluc2VydD0wLHRoaXMuYmlfYnVmPTAsdGhpcy5iaV92YWxpZD0wfWZ1bmN0aW9uIEcodCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KHQudG90YWxfaW49dC50b3RhbF9vdXQ9MCx0LmRhdGFfdHlwZT1uLChlPXQuc3RhdGUpLnBlbmRpbmc9MCxlLnBlbmRpbmdfb3V0PTAsZS53cmFwPDAmJihlLndyYXA9LWUud3JhcCksZS5zdGF0dXM9ZS53cmFwP0M6RSx0LmFkbGVyPTI9PT1lLndyYXA/MDoxLGUubGFzdF9mbHVzaD1sLHUuX3RyX2luaXQoZSksbSk6Uih0LF8pfWZ1bmN0aW9uIEsodCl7dmFyIGU9Ryh0KTtyZXR1cm4gZT09PW0mJmZ1bmN0aW9uKHQpe3Qud2luZG93X3NpemU9Mip0Lndfc2l6ZSxEKHQuaGVhZCksdC5tYXhfbGF6eV9tYXRjaD1oW3QubGV2ZWxdLm1heF9sYXp5LHQuZ29vZF9tYXRjaD1oW3QubGV2ZWxdLmdvb2RfbGVuZ3RoLHQubmljZV9tYXRjaD1oW3QubGV2ZWxdLm5pY2VfbGVuZ3RoLHQubWF4X2NoYWluX2xlbmd0aD1oW3QubGV2ZWxdLm1heF9jaGFpbix0LnN0cnN0YXJ0PTAsdC5ibG9ja19zdGFydD0wLHQubG9va2FoZWFkPTAsdC5pbnNlcnQ9MCx0Lm1hdGNoX2xlbmd0aD10LnByZXZfbGVuZ3RoPXgtMSx0Lm1hdGNoX2F2YWlsYWJsZT0wLHQuaW5zX2g9MH0odC5zdGF0ZSksZX1mdW5jdGlvbiBZKHQsZSxyLGksbixzKXtpZighdClyZXR1cm4gXzt2YXIgYT0xO2lmKGU9PT1nJiYoZT02KSxpPDA/KGE9MCxpPS1pKToxNTxpJiYoYT0yLGktPTE2KSxuPDF8fHk8bnx8ciE9PXZ8fGk8OHx8MTU8aXx8ZTwwfHw5PGV8fHM8MHx8YjxzKXJldHVybiBSKHQsXyk7OD09PWkmJihpPTkpO3ZhciBvPW5ldyBIO3JldHVybih0LnN0YXRlPW8pLnN0cm09dCxvLndyYXA9YSxvLmd6aGVhZD1udWxsLG8ud19iaXRzPWksby53X3NpemU9MTw8by53X2JpdHMsby53X21hc2s9by53X3NpemUtMSxvLmhhc2hfYml0cz1uKzcsby5oYXNoX3NpemU9MTw8by5oYXNoX2JpdHMsby5oYXNoX21hc2s9by5oYXNoX3NpemUtMSxvLmhhc2hfc2hpZnQ9fn4oKG8uaGFzaF9iaXRzK3gtMSkveCksby53aW5kb3c9bmV3IGQuQnVmOCgyKm8ud19zaXplKSxvLmhlYWQ9bmV3IGQuQnVmMTYoby5oYXNoX3NpemUpLG8ucHJldj1uZXcgZC5CdWYxNihvLndfc2l6ZSksby5saXRfYnVmc2l6ZT0xPDxuKzYsby5wZW5kaW5nX2J1Zl9zaXplPTQqby5saXRfYnVmc2l6ZSxvLnBlbmRpbmdfYnVmPW5ldyBkLkJ1Zjgoby5wZW5kaW5nX2J1Zl9zaXplKSxvLmRfYnVmPTEqby5saXRfYnVmc2l6ZSxvLmxfYnVmPTMqby5saXRfYnVmc2l6ZSxvLmxldmVsPWUsby5zdHJhdGVneT1zLG8ubWV0aG9kPXIsSyh0KX1oPVtuZXcgTSgwLDAsMCwwLGZ1bmN0aW9uKHQsZSl7dmFyIHI9NjU1MzU7Zm9yKHI+dC5wZW5kaW5nX2J1Zl9zaXplLTUmJihyPXQucGVuZGluZ19idWZfc2l6ZS01KTs7KXtpZih0Lmxvb2thaGVhZDw9MSl7aWYoaih0KSwwPT09dC5sb29rYWhlYWQmJmU9PT1sKXJldHVybiBBO2lmKDA9PT10Lmxvb2thaGVhZClicmVha310LnN0cnN0YXJ0Kz10Lmxvb2thaGVhZCx0Lmxvb2thaGVhZD0wO3ZhciBpPXQuYmxvY2tfc3RhcnQrcjtpZigoMD09PXQuc3Ryc3RhcnR8fHQuc3Ryc3RhcnQ+PWkpJiYodC5sb29rYWhlYWQ9dC5zdHJzdGFydC1pLHQuc3Ryc3RhcnQ9aSxOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQTtpZih0LnN0cnN0YXJ0LXQuYmxvY2tfc3RhcnQ+PXQud19zaXplLXomJihOKHQsITEpLDA9PT10LnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gdC5pbnNlcnQ9MCxlPT09Zj8oTih0LCEwKSwwPT09dC5zdHJtLmF2YWlsX291dD9POkIpOih0LnN0cnN0YXJ0PnQuYmxvY2tfc3RhcnQmJihOKHQsITEpLHQuc3RybS5hdmFpbF9vdXQpLEEpfSksbmV3IE0oNCw0LDgsNCxaKSxuZXcgTSg0LDUsMTYsOCxaKSxuZXcgTSg0LDYsMzIsMzIsWiksbmV3IE0oNCw0LDE2LDE2LFcpLG5ldyBNKDgsMTYsMzIsMzIsVyksbmV3IE0oOCwxNiwxMjgsMTI4LFcpLG5ldyBNKDgsMzIsMTI4LDI1NixXKSxuZXcgTSgzMiwxMjgsMjU4LDEwMjQsVyksbmV3IE0oMzIsMjU4LDI1OCw0MDk2LFcpXSxyLmRlZmxhdGVJbml0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIFkodCxlLHYsMTUsOCwwKX0sci5kZWZsYXRlSW5pdDI9WSxyLmRlZmxhdGVSZXNldD1LLHIuZGVmbGF0ZVJlc2V0S2VlcD1HLHIuZGVmbGF0ZVNldEhlYWRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB0JiZ0LnN0YXRlPzIhPT10LnN0YXRlLndyYXA/XzoodC5zdGF0ZS5nemhlYWQ9ZSxtKTpffSxyLmRlZmxhdGU9ZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scztpZighdHx8IXQuc3RhdGV8fDU8ZXx8ZTwwKXJldHVybiB0P1IodCxfKTpfO2lmKGk9dC5zdGF0ZSwhdC5vdXRwdXR8fCF0LmlucHV0JiYwIT09dC5hdmFpbF9pbnx8NjY2PT09aS5zdGF0dXMmJmUhPT1mKXJldHVybiBSKHQsMD09PXQuYXZhaWxfb3V0Py01Ol8pO2lmKGkuc3RybT10LHI9aS5sYXN0X2ZsdXNoLGkubGFzdF9mbHVzaD1lLGkuc3RhdHVzPT09QylpZigyPT09aS53cmFwKXQuYWRsZXI9MCxVKGksMzEpLFUoaSwxMzkpLFUoaSw4KSxpLmd6aGVhZD8oVShpLChpLmd6aGVhZC50ZXh0PzE6MCkrKGkuZ3poZWFkLmhjcmM/MjowKSsoaS5nemhlYWQuZXh0cmE/NDowKSsoaS5nemhlYWQubmFtZT84OjApKyhpLmd6aGVhZC5jb21tZW50PzE2OjApKSxVKGksMjU1JmkuZ3poZWFkLnRpbWUpLFUoaSxpLmd6aGVhZC50aW1lPj44JjI1NSksVShpLGkuZ3poZWFkLnRpbWU+PjE2JjI1NSksVShpLGkuZ3poZWFkLnRpbWU+PjI0JjI1NSksVShpLDk9PT1pLmxldmVsPzI6Mjw9aS5zdHJhdGVneXx8aS5sZXZlbDwyPzQ6MCksVShpLDI1NSZpLmd6aGVhZC5vcyksaS5nemhlYWQuZXh0cmEmJmkuZ3poZWFkLmV4dHJhLmxlbmd0aCYmKFUoaSwyNTUmaS5nemhlYWQuZXh0cmEubGVuZ3RoKSxVKGksaS5nemhlYWQuZXh0cmEubGVuZ3RoPj44JjI1NSkpLGkuZ3poZWFkLmhjcmMmJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZywwKSksaS5nemluZGV4PTAsaS5zdGF0dXM9NjkpOihVKGksMCksVShpLDApLFUoaSwwKSxVKGksMCksVShpLDApLFUoaSw5PT09aS5sZXZlbD8yOjI8PWkuc3RyYXRlZ3l8fGkubGV2ZWw8Mj80OjApLFUoaSwzKSxpLnN0YXR1cz1FKTtlbHNle3ZhciBhPXYrKGkud19iaXRzLTg8PDQpPDw4O2F8PSgyPD1pLnN0cmF0ZWd5fHxpLmxldmVsPDI/MDppLmxldmVsPDY/MTo2PT09aS5sZXZlbD8yOjMpPDw2LDAhPT1pLnN0cnN0YXJ0JiYoYXw9MzIpLGErPTMxLWElMzEsaS5zdGF0dXM9RSxQKGksYSksMCE9PWkuc3Ryc3RhcnQmJihQKGksdC5hZGxlcj4+PjE2KSxQKGksNjU1MzUmdC5hZGxlcikpLHQuYWRsZXI9MX1pZig2OT09PWkuc3RhdHVzKWlmKGkuZ3poZWFkLmV4dHJhKXtmb3Iobj1pLnBlbmRpbmc7aS5nemluZGV4PCg2NTUzNSZpLmd6aGVhZC5leHRyYS5sZW5ndGgpJiYoaS5wZW5kaW5nIT09aS5wZW5kaW5nX2J1Zl9zaXplfHwoaS5nemhlYWQuaGNyYyYmaS5wZW5kaW5nPm4mJih0LmFkbGVyPXAodC5hZGxlcixpLnBlbmRpbmdfYnVmLGkucGVuZGluZy1uLG4pKSxGKHQpLG49aS5wZW5kaW5nLGkucGVuZGluZyE9PWkucGVuZGluZ19idWZfc2l6ZSkpOylVKGksMjU1JmkuZ3poZWFkLmV4dHJhW2kuZ3ppbmRleF0pLGkuZ3ppbmRleCsrO2kuZ3poZWFkLmhjcmMmJmkucGVuZGluZz5uJiYodC5hZGxlcj1wKHQuYWRsZXIsaS5wZW5kaW5nX2J1ZixpLnBlbmRpbmctbixuKSksaS5nemluZGV4PT09aS5nemhlYWQuZXh0cmEubGVuZ3RoJiYoaS5nemluZGV4PTAsaS5zdGF0dXM9NzMpfWVsc2UgaS5zdGF0dXM9NzM7aWYoNzM9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5uYW1lKXtuPWkucGVuZGluZztkb3tpZihpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUmJihpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLEYodCksbj1pLnBlbmRpbmcsaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9aS5nemluZGV4PGkuZ3poZWFkLm5hbWUubGVuZ3RoPzI1NSZpLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQoaS5nemluZGV4KyspOjAsVShpLHMpfXdoaWxlKDAhPT1zKTtpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLDA9PT1zJiYoaS5nemluZGV4PTAsaS5zdGF0dXM9OTEpfWVsc2UgaS5zdGF0dXM9OTE7aWYoOTE9PT1pLnN0YXR1cylpZihpLmd6aGVhZC5jb21tZW50KXtuPWkucGVuZGluZztkb3tpZihpLnBlbmRpbmc9PT1pLnBlbmRpbmdfYnVmX3NpemUmJihpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLEYodCksbj1pLnBlbmRpbmcsaS5wZW5kaW5nPT09aS5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9aS5nemluZGV4PGkuZ3poZWFkLmNvbW1lbnQubGVuZ3RoPzI1NSZpLmd6aGVhZC5jb21tZW50LmNoYXJDb2RlQXQoaS5nemluZGV4KyspOjAsVShpLHMpfXdoaWxlKDAhPT1zKTtpLmd6aGVhZC5oY3JjJiZpLnBlbmRpbmc+biYmKHQuYWRsZXI9cCh0LmFkbGVyLGkucGVuZGluZ19idWYsaS5wZW5kaW5nLW4sbikpLDA9PT1zJiYoaS5zdGF0dXM9MTAzKX1lbHNlIGkuc3RhdHVzPTEwMztpZigxMDM9PT1pLnN0YXR1cyYmKGkuZ3poZWFkLmhjcmM/KGkucGVuZGluZysyPmkucGVuZGluZ19idWZfc2l6ZSYmRih0KSxpLnBlbmRpbmcrMjw9aS5wZW5kaW5nX2J1Zl9zaXplJiYoVShpLDI1NSZ0LmFkbGVyKSxVKGksdC5hZGxlcj4+OCYyNTUpLHQuYWRsZXI9MCxpLnN0YXR1cz1FKSk6aS5zdGF0dXM9RSksMCE9PWkucGVuZGluZyl7aWYoRih0KSwwPT09dC5hdmFpbF9vdXQpcmV0dXJuIGkubGFzdF9mbHVzaD0tMSxtfWVsc2UgaWYoMD09PXQuYXZhaWxfaW4mJlQoZSk8PVQocikmJmUhPT1mKXJldHVybiBSKHQsLTUpO2lmKDY2Nj09PWkuc3RhdHVzJiYwIT09dC5hdmFpbF9pbilyZXR1cm4gUih0LC01KTtpZigwIT09dC5hdmFpbF9pbnx8MCE9PWkubG9va2FoZWFkfHxlIT09bCYmNjY2IT09aS5zdGF0dXMpe3ZhciBvPTI9PT1pLnN0cmF0ZWd5P2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByOzspe2lmKDA9PT10Lmxvb2thaGVhZCYmKGoodCksMD09PXQubG9va2FoZWFkKSl7aWYoZT09PWwpcmV0dXJuIEE7YnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCxyPXUuX3RyX3RhbGx5KHQsMCx0LndpbmRvd1t0LnN0cnN0YXJ0XSksdC5sb29rYWhlYWQtLSx0LnN0cnN0YXJ0KyssciYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiB0Lmluc2VydD0wLGU9PT1mPyhOKHQsITApLDA9PT10LnN0cm0uYXZhaWxfb3V0P086Qik6dC5sYXN0X2xpdCYmKE4odCwhMSksMD09PXQuc3RybS5hdmFpbF9vdXQpP0E6SX0oaSxlKTozPT09aS5zdHJhdGVneT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgcixpLG4scyxhPXQud2luZG93Ozspe2lmKHQubG9va2FoZWFkPD1TKXtpZihqKHQpLHQubG9va2FoZWFkPD1TJiZlPT09bClyZXR1cm4gQTtpZigwPT09dC5sb29rYWhlYWQpYnJlYWt9aWYodC5tYXRjaF9sZW5ndGg9MCx0Lmxvb2thaGVhZD49eCYmMDx0LnN0cnN0YXJ0JiYoaT1hW249dC5zdHJzdGFydC0xXSk9PT1hWysrbl0mJmk9PT1hWysrbl0mJmk9PT1hWysrbl0pe3M9dC5zdHJzdGFydCtTO2Rve313aGlsZShpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZpPT09YVsrK25dJiZuPHMpO3QubWF0Y2hfbGVuZ3RoPVMtKHMtbiksdC5tYXRjaF9sZW5ndGg+dC5sb29rYWhlYWQmJih0Lm1hdGNoX2xlbmd0aD10Lmxvb2thaGVhZCl9aWYodC5tYXRjaF9sZW5ndGg+PXg/KHI9dS5fdHJfdGFsbHkodCwxLHQubWF0Y2hfbGVuZ3RoLXgpLHQubG9va2FoZWFkLT10Lm1hdGNoX2xlbmd0aCx0LnN0cnN0YXJ0Kz10Lm1hdGNoX2xlbmd0aCx0Lm1hdGNoX2xlbmd0aD0wKToocj11Ll90cl90YWxseSh0LDAsdC53aW5kb3dbdC5zdHJzdGFydF0pLHQubG9va2FoZWFkLS0sdC5zdHJzdGFydCsrKSxyJiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIHQuaW5zZXJ0PTAsZT09PWY/KE4odCwhMCksMD09PXQuc3RybS5hdmFpbF9vdXQ/TzpCKTp0Lmxhc3RfbGl0JiYoTih0LCExKSwwPT09dC5zdHJtLmF2YWlsX291dCk/QTpJfShpLGUpOmhbaS5sZXZlbF0uZnVuYyhpLGUpO2lmKG8hPT1PJiZvIT09Qnx8KGkuc3RhdHVzPTY2Niksbz09PUF8fG89PT1PKXJldHVybiAwPT09dC5hdmFpbF9vdXQmJihpLmxhc3RfZmx1c2g9LTEpLG07aWYobz09PUkmJigxPT09ZT91Ll90cl9hbGlnbihpKTo1IT09ZSYmKHUuX3RyX3N0b3JlZF9ibG9jayhpLDAsMCwhMSksMz09PWUmJihEKGkuaGVhZCksMD09PWkubG9va2FoZWFkJiYoaS5zdHJzdGFydD0wLGkuYmxvY2tfc3RhcnQ9MCxpLmluc2VydD0wKSkpLEYodCksMD09PXQuYXZhaWxfb3V0KSlyZXR1cm4gaS5sYXN0X2ZsdXNoPS0xLG19cmV0dXJuIGUhPT1mP206aS53cmFwPD0wPzE6KDI9PT1pLndyYXA/KFUoaSwyNTUmdC5hZGxlciksVShpLHQuYWRsZXI+PjgmMjU1KSxVKGksdC5hZGxlcj4+MTYmMjU1KSxVKGksdC5hZGxlcj4+MjQmMjU1KSxVKGksMjU1JnQudG90YWxfaW4pLFUoaSx0LnRvdGFsX2luPj44JjI1NSksVShpLHQudG90YWxfaW4+PjE2JjI1NSksVShpLHQudG90YWxfaW4+PjI0JjI1NSkpOihQKGksdC5hZGxlcj4+PjE2KSxQKGksNjU1MzUmdC5hZGxlcikpLEYodCksMDxpLndyYXAmJihpLndyYXA9LWkud3JhcCksMCE9PWkucGVuZGluZz9tOjEpfSxyLmRlZmxhdGVFbmQ9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIHQmJnQuc3RhdGU/KGU9dC5zdGF0ZS5zdGF0dXMpIT09QyYmNjkhPT1lJiY3MyE9PWUmJjkxIT09ZSYmMTAzIT09ZSYmZSE9PUUmJjY2NiE9PWU/Uih0LF8pOih0LnN0YXRlPW51bGwsZT09PUU/Uih0LC0zKTptKTpffSxyLmRlZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsPWUubGVuZ3RoO2lmKCF0fHwhdC5zdGF0ZSlyZXR1cm4gXztpZigyPT09KHM9KHI9dC5zdGF0ZSkud3JhcCl8fDE9PT1zJiZyLnN0YXR1cyE9PUN8fHIubG9va2FoZWFkKXJldHVybiBfO2ZvcigxPT09cyYmKHQuYWRsZXI9Yyh0LmFkbGVyLGUsbCwwKSksci53cmFwPTAsbD49ci53X3NpemUmJigwPT09cyYmKEQoci5oZWFkKSxyLnN0cnN0YXJ0PTAsci5ibG9ja19zdGFydD0wLHIuaW5zZXJ0PTApLHU9bmV3IGQuQnVmOChyLndfc2l6ZSksZC5hcnJheVNldCh1LGUsbC1yLndfc2l6ZSxyLndfc2l6ZSwwKSxlPXUsbD1yLndfc2l6ZSksYT10LmF2YWlsX2luLG89dC5uZXh0X2luLGg9dC5pbnB1dCx0LmF2YWlsX2luPWwsdC5uZXh0X2luPTAsdC5pbnB1dD1lLGoocik7ci5sb29rYWhlYWQ+PXg7KXtmb3IoaT1yLnN0cnN0YXJ0LG49ci5sb29rYWhlYWQtKHgtMSk7ci5pbnNfaD0oci5pbnNfaDw8ci5oYXNoX3NoaWZ0XnIud2luZG93W2kreC0xXSkmci5oYXNoX21hc2ssci5wcmV2W2kmci53X21hc2tdPXIuaGVhZFtyLmluc19oXSxyLmhlYWRbci5pbnNfaF09aSxpKyssLS1uOyk7ci5zdHJzdGFydD1pLHIubG9va2FoZWFkPXgtMSxqKHIpfXJldHVybiByLnN0cnN0YXJ0Kz1yLmxvb2thaGVhZCxyLmJsb2NrX3N0YXJ0PXIuc3Ryc3RhcnQsci5pbnNlcnQ9ci5sb29rYWhlYWQsci5sb29rYWhlYWQ9MCxyLm1hdGNoX2xlbmd0aD1yLnByZXZfbGVuZ3RoPXgtMSxyLm1hdGNoX2F2YWlsYWJsZT0wLHQubmV4dF9pbj1vLHQuaW5wdXQ9aCx0LmF2YWlsX2luPWEsci53cmFwPXMsbX0sci5kZWZsYXRlSW5mbz1cInBha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vbWVzc2FnZXNcIjo1MSxcIi4vdHJlZXNcIjo1Mn1dLDQ3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy50ZXh0PTAsdGhpcy50aW1lPTAsdGhpcy54ZmxhZ3M9MCx0aGlzLm9zPTAsdGhpcy5leHRyYT1udWxsLHRoaXMuZXh0cmFfbGVuPTAsdGhpcy5uYW1lPVwiXCIsdGhpcy5jb21tZW50PVwiXCIsdGhpcy5oY3JjPTAsdGhpcy5kb25lPSExfX0se31dLDQ4OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsLGYsZCxjLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM7cj10LnN0YXRlLGk9dC5uZXh0X2luLHo9dC5pbnB1dCxuPWkrKHQuYXZhaWxfaW4tNSkscz10Lm5leHRfb3V0LEM9dC5vdXRwdXQsYT1zLShlLXQuYXZhaWxfb3V0KSxvPXMrKHQuYXZhaWxfb3V0LTI1NyksaD1yLmRtYXgsdT1yLndzaXplLGw9ci53aGF2ZSxmPXIud25leHQsZD1yLndpbmRvdyxjPXIuaG9sZCxwPXIuYml0cyxtPXIubGVuY29kZSxfPXIuZGlzdGNvZGUsZz0oMTw8ci5sZW5iaXRzKS0xLGI9KDE8PHIuZGlzdGJpdHMpLTE7dDpkb3twPDE1JiYoYys9eltpKytdPDxwLHArPTgsYys9eltpKytdPDxwLHArPTgpLHY9bVtjJmddO2U6Zm9yKDs7KXtpZihjPj4+PXk9dj4+PjI0LHAtPXksMD09PSh5PXY+Pj4xNiYyNTUpKUNbcysrXT02NTUzNSZ2O2Vsc2V7aWYoISgxNiZ5KSl7aWYoMD09KDY0JnkpKXt2PW1bKDY1NTM1JnYpKyhjJigxPDx5KS0xKV07Y29udGludWUgZX1pZigzMiZ5KXtyLm1vZGU9MTI7YnJlYWsgdH10Lm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVhayB0fXc9NjU1MzUmdiwoeSY9MTUpJiYocDx5JiYoYys9eltpKytdPDxwLHArPTgpLHcrPWMmKDE8PHkpLTEsYz4+Pj15LHAtPXkpLHA8MTUmJihjKz16W2krK108PHAscCs9OCxjKz16W2krK108PHAscCs9OCksdj1fW2MmYl07cjpmb3IoOzspe2lmKGM+Pj49eT12Pj4+MjQscC09eSwhKDE2Jih5PXY+Pj4xNiYyNTUpKSl7aWYoMD09KDY0JnkpKXt2PV9bKDY1NTM1JnYpKyhjJigxPDx5KS0xKV07Y29udGludWUgcn10Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVhayB0fWlmKGs9NjU1MzUmdixwPCh5Jj0xNSkmJihjKz16W2krK108PHAsKHArPTgpPHkmJihjKz16W2krK108PHAscCs9OCkpLGg8KGsrPWMmKDE8PHkpLTEpKXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIHR9aWYoYz4+Pj15LHAtPXksKHk9cy1hKTxrKXtpZihsPCh5PWsteSkmJnIuc2FuZSl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayB0fWlmKFM9ZCwoeD0wKT09PWYpe2lmKHgrPXUteSx5PHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7eD1zLWssUz1DfX1lbHNlIGlmKGY8eSl7aWYoeCs9dStmLXksKHktPWYpPHcpe2Zvcih3LT15O0NbcysrXT1kW3grK10sLS15Oyk7aWYoeD0wLGY8dyl7Zm9yKHctPXk9ZjtDW3MrK109ZFt4KytdLC0teTspO3g9cy1rLFM9Q319fWVsc2UgaWYoeCs9Zi15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWRbeCsrXSwtLXk7KTt4PXMtayxTPUN9Zm9yKDsyPHc7KUNbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLHctPTM7dyYmKENbcysrXT1TW3grK10sMTx3JiYoQ1tzKytdPVNbeCsrXSkpfWVsc2V7Zm9yKHg9cy1rO0NbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLDI8KHctPTMpOyk7dyYmKENbcysrXT1DW3grK10sMTx3JiYoQ1tzKytdPUNbeCsrXSkpfWJyZWFrfX1icmVha319d2hpbGUoaTxuJiZzPG8pO2ktPXc9cD4+MyxjJj0oMTw8KHAtPXc8PDMpKS0xLHQubmV4dF9pbj1pLHQubmV4dF9vdXQ9cyx0LmF2YWlsX2luPWk8bj9uLWkrNTo1LShpLW4pLHQuYXZhaWxfb3V0PXM8bz9vLXMrMjU3OjI1Ny0ocy1vKSxyLmhvbGQ9YyxyLmJpdHM9cH19LHt9XSw0OTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBJPXQoXCIuLi91dGlscy9jb21tb25cIiksTz10KFwiLi9hZGxlcjMyXCIpLEI9dChcIi4vY3JjMzJcIiksUj10KFwiLi9pbmZmYXN0XCIpLFQ9dChcIi4vaW5mdHJlZXNcIiksRD0xLEY9MixOPTAsVT0tMixQPTEsaT04NTIsbj01OTI7ZnVuY3Rpb24gTCh0KXtyZXR1cm4odD4+PjI0JjI1NSkrKHQ+Pj44JjY1MjgwKSsoKDY1MjgwJnQpPDw4KSsoKDI1NSZ0KTw8MjQpfWZ1bmN0aW9uIHMoKXt0aGlzLm1vZGU9MCx0aGlzLmxhc3Q9ITEsdGhpcy53cmFwPTAsdGhpcy5oYXZlZGljdD0hMSx0aGlzLmZsYWdzPTAsdGhpcy5kbWF4PTAsdGhpcy5jaGVjaz0wLHRoaXMudG90YWw9MCx0aGlzLmhlYWQ9bnVsbCx0aGlzLndiaXRzPTAsdGhpcy53c2l6ZT0wLHRoaXMud2hhdmU9MCx0aGlzLnduZXh0PTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLmhvbGQ9MCx0aGlzLmJpdHM9MCx0aGlzLmxlbmd0aD0wLHRoaXMub2Zmc2V0PTAsdGhpcy5leHRyYT0wLHRoaXMubGVuY29kZT1udWxsLHRoaXMuZGlzdGNvZGU9bnVsbCx0aGlzLmxlbmJpdHM9MCx0aGlzLmRpc3RiaXRzPTAsdGhpcy5uY29kZT0wLHRoaXMubmxlbj0wLHRoaXMubmRpc3Q9MCx0aGlzLmhhdmU9MCx0aGlzLm5leHQ9bnVsbCx0aGlzLmxlbnM9bmV3IEkuQnVmMTYoMzIwKSx0aGlzLndvcms9bmV3IEkuQnVmMTYoMjg4KSx0aGlzLmxlbmR5bj1udWxsLHRoaXMuZGlzdGR5bj1udWxsLHRoaXMuc2FuZT0wLHRoaXMuYmFjaz0wLHRoaXMud2FzPTB9ZnVuY3Rpb24gYSh0KXt2YXIgZTtyZXR1cm4gdCYmdC5zdGF0ZT8oZT10LnN0YXRlLHQudG90YWxfaW49dC50b3RhbF9vdXQ9ZS50b3RhbD0wLHQubXNnPVwiXCIsZS53cmFwJiYodC5hZGxlcj0xJmUud3JhcCksZS5tb2RlPVAsZS5sYXN0PTAsZS5oYXZlZGljdD0wLGUuZG1heD0zMjc2OCxlLmhlYWQ9bnVsbCxlLmhvbGQ9MCxlLmJpdHM9MCxlLmxlbmNvZGU9ZS5sZW5keW49bmV3IEkuQnVmMzIoaSksZS5kaXN0Y29kZT1lLmRpc3RkeW49bmV3IEkuQnVmMzIobiksZS5zYW5lPTEsZS5iYWNrPS0xLE4pOlV9ZnVuY3Rpb24gbyh0KXt2YXIgZTtyZXR1cm4gdCYmdC5zdGF0ZT8oKGU9dC5zdGF0ZSkud3NpemU9MCxlLndoYXZlPTAsZS53bmV4dD0wLGEodCkpOlV9ZnVuY3Rpb24gaCh0LGUpe3ZhciByLGk7cmV0dXJuIHQmJnQuc3RhdGU/KGk9dC5zdGF0ZSxlPDA/KHI9MCxlPS1lKToocj0xKyhlPj40KSxlPDQ4JiYoZSY9MTUpKSxlJiYoZTw4fHwxNTxlKT9VOihudWxsIT09aS53aW5kb3cmJmkud2JpdHMhPT1lJiYoaS53aW5kb3c9bnVsbCksaS53cmFwPXIsaS53Yml0cz1lLG8odCkpKTpVfWZ1bmN0aW9uIHUodCxlKXt2YXIgcixpO3JldHVybiB0PyhpPW5ldyBzLCh0LnN0YXRlPWkpLndpbmRvdz1udWxsLChyPWgodCxlKSkhPT1OJiYodC5zdGF0ZT1udWxsKSxyKTpVfXZhciBsLGYsZD0hMDtmdW5jdGlvbiBqKHQpe2lmKGQpe3ZhciBlO2ZvcihsPW5ldyBJLkJ1ZjMyKDUxMiksZj1uZXcgSS5CdWYzMigzMiksZT0wO2U8MTQ0Oyl0LmxlbnNbZSsrXT04O2Zvcig7ZTwyNTY7KXQubGVuc1tlKytdPTk7Zm9yKDtlPDI4MDspdC5sZW5zW2UrK109Nztmb3IoO2U8Mjg4Oyl0LmxlbnNbZSsrXT04O2ZvcihUKEQsdC5sZW5zLDAsMjg4LGwsMCx0Lndvcmsse2JpdHM6OX0pLGU9MDtlPDMyOyl0LmxlbnNbZSsrXT01O1QoRix0LmxlbnMsMCwzMixmLDAsdC53b3JrLHtiaXRzOjV9KSxkPSExfXQubGVuY29kZT1sLHQubGVuYml0cz05LHQuZGlzdGNvZGU9Zix0LmRpc3RiaXRzPTV9ZnVuY3Rpb24gWih0LGUscixpKXt2YXIgbixzPXQuc3RhdGU7cmV0dXJuIG51bGw9PT1zLndpbmRvdyYmKHMud3NpemU9MTw8cy53Yml0cyxzLnduZXh0PTAscy53aGF2ZT0wLHMud2luZG93PW5ldyBJLkJ1Zjgocy53c2l6ZSkpLGk+PXMud3NpemU/KEkuYXJyYXlTZXQocy53aW5kb3csZSxyLXMud3NpemUscy53c2l6ZSwwKSxzLnduZXh0PTAscy53aGF2ZT1zLndzaXplKTooaTwobj1zLndzaXplLXMud25leHQpJiYobj1pKSxJLmFycmF5U2V0KHMud2luZG93LGUsci1pLG4scy53bmV4dCksKGktPW4pPyhJLmFycmF5U2V0KHMud2luZG93LGUsci1pLGksMCkscy53bmV4dD1pLHMud2hhdmU9cy53c2l6ZSk6KHMud25leHQrPW4scy53bmV4dD09PXMud3NpemUmJihzLnduZXh0PTApLHMud2hhdmU8cy53c2l6ZSYmKHMud2hhdmUrPW4pKSksMH1yLmluZmxhdGVSZXNldD1vLHIuaW5mbGF0ZVJlc2V0Mj1oLHIuaW5mbGF0ZVJlc2V0S2VlcD1hLHIuaW5mbGF0ZUluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHUodCwxNSl9LHIuaW5mbGF0ZUluaXQyPXUsci5pbmZsYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIHIsaSxuLHMsYSxvLGgsdSxsLGYsZCxjLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM9MCxFPW5ldyBJLkJ1ZjgoNCksQT1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV07aWYoIXR8fCF0LnN0YXRlfHwhdC5vdXRwdXR8fCF0LmlucHV0JiYwIT09dC5hdmFpbF9pbilyZXR1cm4gVTsxMj09PShyPXQuc3RhdGUpLm1vZGUmJihyLm1vZGU9MTMpLGE9dC5uZXh0X291dCxuPXQub3V0cHV0LGg9dC5hdmFpbF9vdXQscz10Lm5leHRfaW4saT10LmlucHV0LG89dC5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cyxmPW8sZD1oLHg9Tjt0OmZvcig7Oylzd2l0Y2goci5tb2RlKXtjYXNlIFA6aWYoMD09PXIud3JhcCl7ci5tb2RlPTEzO2JyZWFrfWZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKDImci53cmFwJiYzNTYxNT09PXUpe0Vbci5jaGVjaz0wXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCksbD11PTAsci5tb2RlPTI7YnJlYWt9aWYoci5mbGFncz0wLHIuaGVhZCYmKHIuaGVhZC5kb25lPSExKSwhKDEmci53cmFwKXx8KCgoMjU1JnUpPDw4KSsodT4+OCkpJTMxKXt0Lm1zZz1cImluY29ycmVjdCBoZWFkZXIgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoOCE9KDE1JnUpKXt0Lm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKGwtPTQsaz04KygxNSYodT4+Pj00KSksMD09PXIud2JpdHMpci53Yml0cz1rO2Vsc2UgaWYoaz5yLndiaXRzKXt0Lm1zZz1cImludmFsaWQgd2luZG93IHNpemVcIixyLm1vZGU9MzA7YnJlYWt9ci5kbWF4PTE8PGssdC5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTUxMiZ1PzEwOjEyLGw9dT0wO2JyZWFrO2Nhc2UgMjpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihyLmZsYWdzPXUsOCE9KDI1NSZyLmZsYWdzKSl7dC5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZig1NzM0NCZyLmZsYWdzKXt0Lm1zZz1cInVua25vd24gaGVhZGVyIGZsYWdzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhlYWQmJihyLmhlYWQudGV4dD11Pj44JjEpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT0zO2Nhc2UgMzpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQudGltZT11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsRVsyXT11Pj4+MTYmMjU1LEVbM109dT4+PjI0JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDQsMCkpLGw9dT0wLHIubW9kZT00O2Nhc2UgNDpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQueGZsYWdzPTI1NSZ1LHIuaGVhZC5vcz11Pj44KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9NTtjYXNlIDU6aWYoMTAyNCZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLmxlbmd0aD11LHIuaGVhZCYmKHIuaGVhZC5leHRyYV9sZW49dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTB9ZWxzZSByLmhlYWQmJihyLmhlYWQuZXh0cmE9bnVsbCk7ci5tb2RlPTY7Y2FzZSA2OmlmKDEwMjQmci5mbGFncyYmKG88KGM9ci5sZW5ndGgpJiYoYz1vKSxjJiYoci5oZWFkJiYoaz1yLmhlYWQuZXh0cmFfbGVuLXIubGVuZ3RoLHIuaGVhZC5leHRyYXx8KHIuaGVhZC5leHRyYT1uZXcgQXJyYXkoci5oZWFkLmV4dHJhX2xlbikpLEkuYXJyYXlTZXQoci5oZWFkLmV4dHJhLGkscyxjLGspKSw1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLGksYyxzKSksby09YyxzKz1jLHIubGVuZ3RoLT1jKSxyLmxlbmd0aCkpYnJlYWsgdDtyLmxlbmd0aD0wLHIubW9kZT03O2Nhc2UgNzppZigyMDQ4JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIHQ7Zm9yKGM9MDtrPWlbcytjKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQubmFtZSs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmYzxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxrKWJyZWFrIHR9ZWxzZSByLmhlYWQmJihyLmhlYWQubmFtZT1udWxsKTtyLmxlbmd0aD0wLHIubW9kZT04O2Nhc2UgODppZig0MDk2JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIHQ7Zm9yKGM9MDtrPWlbcytjKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQuY29tbWVudCs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmYzxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxpLGMscykpLG8tPWMscys9YyxrKWJyZWFrIHR9ZWxzZSByLmhlYWQmJihyLmhlYWQuY29tbWVudD1udWxsKTtyLm1vZGU9OTtjYXNlIDk6aWYoNTEyJnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKHUhPT0oNjU1MzUmci5jaGVjaykpe3QubXNnPVwiaGVhZGVyIGNyYyBtaXNtYXRjaFwiLHIubW9kZT0zMDticmVha31sPXU9MH1yLmhlYWQmJihyLmhlYWQuaGNyYz1yLmZsYWdzPj45JjEsci5oZWFkLmRvbmU9ITApLHQuYWRsZXI9ci5jaGVjaz0wLHIubW9kZT0xMjticmVhaztjYXNlIDEwOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXQuYWRsZXI9ci5jaGVjaz1MKHUpLGw9dT0wLHIubW9kZT0xMTtjYXNlIDExOmlmKDA9PT1yLmhhdmVkaWN0KXJldHVybiB0Lm5leHRfb3V0PWEsdC5hdmFpbF9vdXQ9aCx0Lm5leHRfaW49cyx0LmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsMjt0LmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9MTI7Y2FzZSAxMjppZig1PT09ZXx8Nj09PWUpYnJlYWsgdDtjYXNlIDEzOmlmKHIubGFzdCl7dT4+Pj03JmwsbC09NyZsLHIubW9kZT0yNzticmVha31mb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXN3aXRjaChyLmxhc3Q9MSZ1LGwtPTEsMyYodT4+Pj0xKSl7Y2FzZSAwOnIubW9kZT0xNDticmVhaztjYXNlIDE6aWYoaihyKSxyLm1vZGU9MjAsNiE9PWUpYnJlYWs7dT4+Pj0yLGwtPTI7YnJlYWsgdDtjYXNlIDI6ci5tb2RlPTE3O2JyZWFrO2Nhc2UgMzp0Lm1zZz1cImludmFsaWQgYmxvY2sgdHlwZVwiLHIubW9kZT0zMH11Pj4+PTIsbC09MjticmVhaztjYXNlIDE0OmZvcih1Pj4+PTcmbCxsLT03Jmw7bDwzMjspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKCg2NTUzNSZ1KSE9KHU+Pj4xNl42NTUzNSkpe3QubXNnPVwiaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3Roc1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmd0aD02NTUzNSZ1LGw9dT0wLHIubW9kZT0xNSw2PT09ZSlicmVhayB0O2Nhc2UgMTU6ci5tb2RlPTE2O2Nhc2UgMTY6aWYoYz1yLmxlbmd0aCl7aWYobzxjJiYoYz1vKSxoPGMmJihjPWgpLDA9PT1jKWJyZWFrIHQ7SS5hcnJheVNldChuLGkscyxjLGEpLG8tPWMscys9YyxoLT1jLGErPWMsci5sZW5ndGgtPWM7YnJlYWt9ci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTc6Zm9yKDtsPDE0Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYoci5ubGVuPTI1NysoMzEmdSksdT4+Pj01LGwtPTUsci5uZGlzdD0xKygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5jb2RlPTQrKDE1JnUpLHU+Pj49NCxsLT00LDI4NjxyLm5sZW58fDMwPHIubmRpc3Qpe3QubXNnPVwidG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHNcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE4O2Nhc2UgMTg6Zm9yKDtyLmhhdmU8ci5uY29kZTspe2Zvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5zW0Fbci5oYXZlKytdXT03JnUsdT4+Pj0zLGwtPTN9Zm9yKDtyLmhhdmU8MTk7KXIubGVuc1tBW3IuaGF2ZSsrXV09MDtpZihyLmxlbmNvZGU9ci5sZW5keW4sci5sZW5iaXRzPTcsUz17Yml0czpyLmxlbmJpdHN9LHg9VCgwLHIubGVucywwLDE5LHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe3QubXNnPVwiaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xOTtjYXNlIDE5OmZvcig7ci5oYXZlPHIubmxlbityLm5kaXN0Oyl7Zm9yKDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKGI8MTYpdT4+Pj1fLGwtPV8sci5sZW5zW3IuaGF2ZSsrXT1iO2Vsc2V7aWYoMTY9PT1iKXtmb3Ioej1fKzI7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9aWYodT4+Pj1fLGwtPV8sMD09PXIuaGF2ZSl7dC5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWs9ci5sZW5zW3IuaGF2ZS0xXSxjPTMrKDMmdSksdT4+Pj0yLGwtPTJ9ZWxzZSBpZigxNz09PWIpe2Zvcih6PV8rMztsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1sLT1fLGs9MCxjPTMrKDcmKHU+Pj49XykpLHU+Pj49MyxsLT0zfWVsc2V7Zm9yKHo9Xys3O2w8ejspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWwtPV8saz0wLGM9MTErKDEyNyYodT4+Pj1fKSksdT4+Pj03LGwtPTd9aWYoci5oYXZlK2M+ci5ubGVuK3IubmRpc3Qpe3QubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31mb3IoO2MtLTspci5sZW5zW3IuaGF2ZSsrXT1rfX1pZigzMD09PXIubW9kZSlicmVhaztpZigwPT09ci5sZW5zWzI1Nl0pe3QubXNnPVwiaW52YWxpZCBjb2RlIC0tIG1pc3NpbmcgZW5kLW9mLWJsb2NrXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuYml0cz05LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoRCxyLmxlbnMsMCxyLm5sZW4sci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5kaXN0Yml0cz02LHIuZGlzdGNvZGU9ci5kaXN0ZHluLFM9e2JpdHM6ci5kaXN0Yml0c30seD1UKEYsci5sZW5zLHIubmxlbixyLm5kaXN0LHIuZGlzdGNvZGUsMCxyLndvcmssUyksci5kaXN0Yml0cz1TLmJpdHMseCl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlcyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5tb2RlPTIwLDY9PT1lKWJyZWFrIHQ7Y2FzZSAyMDpyLm1vZGU9MjE7Y2FzZSAyMTppZig2PD1vJiYyNTg8PWgpe3QubmV4dF9vdXQ9YSx0LmF2YWlsX291dD1oLHQubmV4dF9pbj1zLHQuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCxSKHQsZCksYT10Lm5leHRfb3V0LG49dC5vdXRwdXQsaD10LmF2YWlsX291dCxzPXQubmV4dF9pbixpPXQuaW5wdXQsbz10LmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLDEyPT09ci5tb2RlJiYoci5iYWNrPS0xKTticmVha31mb3Ioci5iYWNrPTA7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZihnJiYwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmxlbmNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sci5sZW5ndGg9YiwwPT09Zyl7ci5tb2RlPTI2O2JyZWFrfWlmKDMyJmcpe3IuYmFjaz0tMSxyLm1vZGU9MTI7YnJlYWt9aWYoNjQmZyl7dC5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5leHRyYT0xNSZnLHIubW9kZT0yMjtjYXNlIDIyOmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdSs9aVtzKytdPDxsLGwrPTh9ci5sZW5ndGgrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfXIud2FzPXIubGVuZ3RoLHIubW9kZT0yMztjYXNlIDIzOmZvcig7Zz0oQz1yLmRpc3Rjb2RlW3UmKDE8PHIuZGlzdGJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fWlmKDA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIuZGlzdGNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIHQ7by0tLHUrPWlbcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sNjQmZyl7dC5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5vZmZzZXQ9YixyLmV4dHJhPTE1Jmcsci5tb2RlPTI0O2Nhc2UgMjQ6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1yLm9mZnNldCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9aWYoci5vZmZzZXQ+ci5kbWF4KXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXIubW9kZT0yNTtjYXNlIDI1OmlmKDA9PT1oKWJyZWFrIHQ7aWYoYz1kLWgsci5vZmZzZXQ+Yyl7aWYoKGM9ci5vZmZzZXQtYyk+ci53aGF2ZSYmci5zYW5lKXt0Lm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXA9Yz5yLnduZXh0PyhjLT1yLnduZXh0LHIud3NpemUtYyk6ci53bmV4dC1jLGM+ci5sZW5ndGgmJihjPXIubGVuZ3RoKSxtPXIud2luZG93fWVsc2UgbT1uLHA9YS1yLm9mZnNldCxjPXIubGVuZ3RoO2ZvcihoPGMmJihjPWgpLGgtPWMsci5sZW5ndGgtPWM7blthKytdPW1bcCsrXSwtLWM7KTswPT09ci5sZW5ndGgmJihyLm1vZGU9MjEpO2JyZWFrO2Nhc2UgMjY6aWYoMD09PWgpYnJlYWsgdDtuW2ErK109ci5sZW5ndGgsaC0tLHIubW9kZT0yMTticmVhaztjYXNlIDI3OmlmKHIud3JhcCl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgdDtvLS0sdXw9aVtzKytdPDxsLGwrPTh9aWYoZC09aCx0LnRvdGFsX291dCs9ZCxyLnRvdGFsKz1kLGQmJih0LmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssbixkLGEtZCk6TyhyLmNoZWNrLG4sZCxhLWQpKSxkPWgsKHIuZmxhZ3M/dTpMKHUpKSE9PXIuY2hlY2spe3QubXNnPVwiaW5jb3JyZWN0IGRhdGEgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI4O2Nhc2UgMjg6aWYoci53cmFwJiZyLmZsYWdzKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayB0O28tLSx1Kz1pW3MrK108PGwsbCs9OH1pZih1IT09KDQyOTQ5NjcyOTUmci50b3RhbCkpe3QubXNnPVwiaW5jb3JyZWN0IGxlbmd0aCBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjk7Y2FzZSAyOTp4PTE7YnJlYWsgdDtjYXNlIDMwOng9LTM7YnJlYWsgdDtjYXNlIDMxOnJldHVybi00O2Nhc2UgMzI6ZGVmYXVsdDpyZXR1cm4gVX1yZXR1cm4gdC5uZXh0X291dD1hLHQuYXZhaWxfb3V0PWgsdC5uZXh0X2luPXMsdC5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLChyLndzaXplfHxkIT09dC5hdmFpbF9vdXQmJnIubW9kZTwzMCYmKHIubW9kZTwyN3x8NCE9PWUpKSYmWih0LHQub3V0cHV0LHQubmV4dF9vdXQsZC10LmF2YWlsX291dCk/KHIubW9kZT0zMSwtNCk6KGYtPXQuYXZhaWxfaW4sZC09dC5hdmFpbF9vdXQsdC50b3RhbF9pbis9Zix0LnRvdGFsX291dCs9ZCxyLnRvdGFsKz1kLHIud3JhcCYmZCYmKHQuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxuLGQsdC5uZXh0X291dC1kKTpPKHIuY2hlY2ssbixkLHQubmV4dF9vdXQtZCkpLHQuZGF0YV90eXBlPXIuYml0cysoci5sYXN0PzY0OjApKygxMj09PXIubW9kZT8xMjg6MCkrKDIwPT09ci5tb2RlfHwxNT09PXIubW9kZT8yNTY6MCksKDA9PWYmJjA9PT1kfHw0PT09ZSkmJng9PT1OJiYoeD0tNSkseCl9LHIuaW5mbGF0ZUVuZD1mdW5jdGlvbih0KXtpZighdHx8IXQuc3RhdGUpcmV0dXJuIFU7dmFyIGU9dC5zdGF0ZTtyZXR1cm4gZS53aW5kb3cmJihlLndpbmRvdz1udWxsKSx0LnN0YXRlPW51bGwsTn0sci5pbmZsYXRlR2V0SGVhZGVyPWZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIHQmJnQuc3RhdGU/MD09KDImKHI9dC5zdGF0ZSkud3JhcCk/VTooKHIuaGVhZD1lKS5kb25lPSExLE4pOlV9LHIuaW5mbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24odCxlKXt2YXIgcixpPWUubGVuZ3RoO3JldHVybiB0JiZ0LnN0YXRlPzAhPT0ocj10LnN0YXRlKS53cmFwJiYxMSE9PXIubW9kZT9VOjExPT09ci5tb2RlJiZPKDEsZSxpLDApIT09ci5jaGVjaz8tMzpaKHQsZSxpLGkpPyhyLm1vZGU9MzEsLTQpOihyLmhhdmVkaWN0PTEsTik6VX0sci5pbmZsYXRlSW5mbz1cInBha28gaW5mbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vaW5mZmFzdFwiOjQ4LFwiLi9pbmZ0cmVlc1wiOjUwfV0sNTA6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgRD10KFwiLi4vdXRpbHMvY29tbW9uXCIpLEY9WzMsNCw1LDYsNyw4LDksMTAsMTEsMTMsMTUsMTcsMTksMjMsMjcsMzEsMzUsNDMsNTEsNTksNjcsODMsOTksMTE1LDEzMSwxNjMsMTk1LDIyNywyNTgsMCwwXSxOPVsxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNywxNywxNywxNywxOCwxOCwxOCwxOCwxOSwxOSwxOSwxOSwyMCwyMCwyMCwyMCwyMSwyMSwyMSwyMSwxNiw3Miw3OF0sVT1bMSwyLDMsNCw1LDcsOSwxMywxNywyNSwzMyw0OSw2NSw5NywxMjksMTkzLDI1NywzODUsNTEzLDc2OSwxMDI1LDE1MzcsMjA0OSwzMDczLDQwOTcsNjE0NSw4MTkzLDEyMjg5LDE2Mzg1LDI0NTc3LDAsMF0sUD1bMTYsMTYsMTYsMTYsMTcsMTcsMTgsMTgsMTksMTksMjAsMjAsMjEsMjEsMjIsMjIsMjMsMjMsMjQsMjQsMjUsMjUsMjYsMjYsMjcsMjcsMjgsMjgsMjksMjksNjQsNjRdO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUscixpLG4scyxhLG8pe3ZhciBoLHUsbCxmLGQsYyxwLG0sXyxnPW8uYml0cyxiPTAsdj0wLHk9MCx3PTAsaz0wLHg9MCxTPTAsej0wLEM9MCxFPTAsQT1udWxsLEk9MCxPPW5ldyBELkJ1ZjE2KDE2KSxCPW5ldyBELkJ1ZjE2KDE2KSxSPW51bGwsVD0wO2ZvcihiPTA7Yjw9MTU7YisrKU9bYl09MDtmb3Iodj0wO3Y8aTt2KyspT1tlW3Irdl1dKys7Zm9yKGs9Zyx3PTE1OzE8PXcmJjA9PT1PW3ddO3ctLSk7aWYodzxrJiYoaz13KSwwPT09dylyZXR1cm4gbltzKytdPTIwOTcxNTIwLG5bcysrXT0yMDk3MTUyMCxvLmJpdHM9MSwwO2Zvcih5PTE7eTx3JiYwPT09T1t5XTt5KyspO2ZvcihrPHkmJihrPXkpLGI9ej0xO2I8PTE1O2IrKylpZih6PDw9MSwoei09T1tiXSk8MClyZXR1cm4tMTtpZigwPHomJigwPT09dHx8MSE9PXcpKXJldHVybi0xO2ZvcihCWzFdPTAsYj0xO2I8MTU7YisrKUJbYisxXT1CW2JdK09bYl07Zm9yKHY9MDt2PGk7disrKTAhPT1lW3Irdl0mJihhW0JbZVtyK3ZdXSsrXT12KTtpZihjPTA9PT10PyhBPVI9YSwxOSk6MT09PXQ/KEE9RixJLT0yNTcsUj1OLFQtPTI1NywyNTYpOihBPVUsUj1QLC0xKSxiPXksZD1zLFM9dj1FPTAsbD0tMSxmPShDPTE8PCh4PWspKS0xLDE9PT10JiY4NTI8Q3x8Mj09PXQmJjU5MjxDKXJldHVybiAxO2Zvcig7Oyl7Zm9yKHA9Yi1TLF89YVt2XTxjPyhtPTAsYVt2XSk6YVt2XT5jPyhtPVJbVCthW3ZdXSxBW0krYVt2XV0pOihtPTk2LDApLGg9MTw8Yi1TLHk9dT0xPDx4O25bZCsoRT4+UykrKHUtPWgpXT1wPDwyNHxtPDwxNnxffDAsMCE9PXU7KTtmb3IoaD0xPDxiLTE7RSZoOyloPj49MTtpZigwIT09aD8oRSY9aC0xLEUrPWgpOkU9MCx2KyssMD09LS1PW2JdKXtpZihiPT09dylicmVhaztiPWVbcithW3ZdXX1pZihrPGImJihFJmYpIT09bCl7Zm9yKDA9PT1TJiYoUz1rKSxkKz15LHo9MTw8KHg9Yi1TKTt4K1M8dyYmISgoei09T1t4K1NdKTw9MCk7KXgrKyx6PDw9MTtpZihDKz0xPDx4LDE9PT10JiY4NTI8Q3x8Mj09PXQmJjU5MjxDKXJldHVybiAxO25bbD1FJmZdPWs8PDI0fHg8PDE2fGQtc3wwfX1yZXR1cm4gMCE9PUUmJihuW2QrRV09Yi1TPDwyNHw2NDw8MTZ8MCksby5iaXRzPWssMH19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ezI6XCJuZWVkIGRpY3Rpb25hcnlcIiwxOlwic3RyZWFtIGVuZFwiLDA6XCJcIixcIi0xXCI6XCJmaWxlIGVycm9yXCIsXCItMlwiOlwic3RyZWFtIGVycm9yXCIsXCItM1wiOlwiZGF0YSBlcnJvclwiLFwiLTRcIjpcImluc3VmZmljaWVudCBtZW1vcnlcIixcIi01XCI6XCJidWZmZXIgZXJyb3JcIixcIi02XCI6XCJpbmNvbXBhdGlibGUgdmVyc2lvblwifX0se31dLDUyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dChcIi4uL3V0aWxzL2NvbW1vblwiKSxvPTAsaD0xO2Z1bmN0aW9uIGkodCl7Zm9yKHZhciBlPXQubGVuZ3RoOzA8PS0tZTspdFtlXT0wfXZhciBzPTAsYT0yOSx1PTI1NixsPXUrMSthLGY9MzAsZD0xOSxfPTIqbCsxLGc9MTUsYz0xNixwPTcsbT0yNTYsYj0xNix2PTE3LHk9MTgsdz1bMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXSxrPVswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSx4PVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XSxTPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XSx6PW5ldyBBcnJheSgyKihsKzIpKTtpKHopO3ZhciBDPW5ldyBBcnJheSgyKmYpO2koQyk7dmFyIEU9bmV3IEFycmF5KDUxMik7aShFKTt2YXIgQT1uZXcgQXJyYXkoMjU2KTtpKEEpO3ZhciBJPW5ldyBBcnJheShhKTtpKEkpO3ZhciBPLEIsUixUPW5ldyBBcnJheShmKTtmdW5jdGlvbiBEKHQsZSxyLGksbil7dGhpcy5zdGF0aWNfdHJlZT10LHRoaXMuZXh0cmFfYml0cz1lLHRoaXMuZXh0cmFfYmFzZT1yLHRoaXMuZWxlbXM9aSx0aGlzLm1heF9sZW5ndGg9bix0aGlzLmhhc19zdHJlZT10JiZ0Lmxlbmd0aH1mdW5jdGlvbiBGKHQsZSl7dGhpcy5keW5fdHJlZT10LHRoaXMubWF4X2NvZGU9MCx0aGlzLnN0YXRfZGVzYz1lfWZ1bmN0aW9uIE4odCl7cmV0dXJuIHQ8MjU2P0VbdF06RVsyNTYrKHQ+Pj43KV19ZnVuY3Rpb24gVSh0LGUpe3QucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPTI1NSZlLHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPWU+Pj44JjI1NX1mdW5jdGlvbiBQKHQsZSxyKXt0LmJpX3ZhbGlkPmMtcj8odC5iaV9idWZ8PWU8PHQuYmlfdmFsaWQmNjU1MzUsVSh0LHQuYmlfYnVmKSx0LmJpX2J1Zj1lPj5jLXQuYmlfdmFsaWQsdC5iaV92YWxpZCs9ci1jKToodC5iaV9idWZ8PWU8PHQuYmlfdmFsaWQmNjU1MzUsdC5iaV92YWxpZCs9cil9ZnVuY3Rpb24gTCh0LGUscil7UCh0LHJbMiplXSxyWzIqZSsxXSl9ZnVuY3Rpb24gaih0LGUpe2Zvcih2YXIgcj0wO3J8PTEmdCx0Pj4+PTEscjw8PTEsMDwtLWU7KTtyZXR1cm4gcj4+PjF9ZnVuY3Rpb24gWih0LGUscil7dmFyIGksbixzPW5ldyBBcnJheShnKzEpLGE9MDtmb3IoaT0xO2k8PWc7aSsrKXNbaV09YT1hK3JbaS0xXTw8MTtmb3Iobj0wO248PWU7bisrKXt2YXIgbz10WzIqbisxXTswIT09byYmKHRbMipuXT1qKHNbb10rKyxvKSl9fWZ1bmN0aW9uIFcodCl7dmFyIGU7Zm9yKGU9MDtlPGw7ZSsrKXQuZHluX2x0cmVlWzIqZV09MDtmb3IoZT0wO2U8ZjtlKyspdC5keW5fZHRyZWVbMiplXT0wO2ZvcihlPTA7ZTxkO2UrKyl0LmJsX3RyZWVbMiplXT0wO3QuZHluX2x0cmVlWzIqbV09MSx0Lm9wdF9sZW49dC5zdGF0aWNfbGVuPTAsdC5sYXN0X2xpdD10Lm1hdGNoZXM9MH1mdW5jdGlvbiBNKHQpezg8dC5iaV92YWxpZD9VKHQsdC5iaV9idWYpOjA8dC5iaV92YWxpZCYmKHQucGVuZGluZ19idWZbdC5wZW5kaW5nKytdPXQuYmlfYnVmKSx0LmJpX2J1Zj0wLHQuYmlfdmFsaWQ9MH1mdW5jdGlvbiBIKHQsZSxyLGkpe3ZhciBuPTIqZSxzPTIqcjtyZXR1cm4gdFtuXTx0W3NdfHx0W25dPT09dFtzXSYmaVtlXTw9aVtyXX1mdW5jdGlvbiBHKHQsZSxyKXtmb3IodmFyIGk9dC5oZWFwW3JdLG49cjw8MTtuPD10LmhlYXBfbGVuJiYobjx0LmhlYXBfbGVuJiZIKGUsdC5oZWFwW24rMV0sdC5oZWFwW25dLHQuZGVwdGgpJiZuKyssIUgoZSxpLHQuaGVhcFtuXSx0LmRlcHRoKSk7KXQuaGVhcFtyXT10LmhlYXBbbl0scj1uLG48PD0xO3QuaGVhcFtyXT1pfWZ1bmN0aW9uIEsodCxlLHIpe3ZhciBpLG4scyxhLG89MDtpZigwIT09dC5sYXN0X2xpdClmb3IoO2k9dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqb108PDh8dC5wZW5kaW5nX2J1Zlt0LmRfYnVmKzIqbysxXSxuPXQucGVuZGluZ19idWZbdC5sX2J1ZitvXSxvKyssMD09PWk/TCh0LG4sZSk6KEwodCwocz1BW25dKSt1KzEsZSksMCE9PShhPXdbc10pJiZQKHQsbi09SVtzXSxhKSxMKHQscz1OKC0taSksciksMCE9PShhPWtbc10pJiZQKHQsaS09VFtzXSxhKSksbzx0Lmxhc3RfbGl0Oyk7TCh0LG0sZSl9ZnVuY3Rpb24gWSh0LGUpe3ZhciByLGksbixzPWUuZHluX3RyZWUsYT1lLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxvPWUuc3RhdF9kZXNjLmhhc19zdHJlZSxoPWUuc3RhdF9kZXNjLmVsZW1zLHU9LTE7Zm9yKHQuaGVhcF9sZW49MCx0LmhlYXBfbWF4PV8scj0wO3I8aDtyKyspMCE9PXNbMipyXT8odC5oZWFwWysrdC5oZWFwX2xlbl09dT1yLHQuZGVwdGhbcl09MCk6c1syKnIrMV09MDtmb3IoO3QuaGVhcF9sZW48Mjspc1syKihuPXQuaGVhcFsrK3QuaGVhcF9sZW5dPXU8Mj8rK3U6MCldPTEsdC5kZXB0aFtuXT0wLHQub3B0X2xlbi0tLG8mJih0LnN0YXRpY19sZW4tPWFbMipuKzFdKTtmb3IoZS5tYXhfY29kZT11LHI9dC5oZWFwX2xlbj4+MTsxPD1yO3ItLSlHKHQscyxyKTtmb3Iobj1oO3I9dC5oZWFwWzFdLHQuaGVhcFsxXT10LmhlYXBbdC5oZWFwX2xlbi0tXSxHKHQscywxKSxpPXQuaGVhcFsxXSx0LmhlYXBbLS10LmhlYXBfbWF4XT1yLHQuaGVhcFstLXQuaGVhcF9tYXhdPWksc1syKm5dPXNbMipyXStzWzIqaV0sdC5kZXB0aFtuXT0odC5kZXB0aFtyXT49dC5kZXB0aFtpXT90LmRlcHRoW3JdOnQuZGVwdGhbaV0pKzEsc1syKnIrMV09c1syKmkrMV09bix0LmhlYXBbMV09bisrLEcodCxzLDEpLDI8PXQuaGVhcF9sZW47KTt0LmhlYXBbLS10LmhlYXBfbWF4XT10LmhlYXBbMV0sZnVuY3Rpb24odCxlKXt2YXIgcixpLG4scyxhLG8saD1lLmR5bl90cmVlLHU9ZS5tYXhfY29kZSxsPWUuc3RhdF9kZXNjLnN0YXRpY190cmVlLGY9ZS5zdGF0X2Rlc2MuaGFzX3N0cmVlLGQ9ZS5zdGF0X2Rlc2MuZXh0cmFfYml0cyxjPWUuc3RhdF9kZXNjLmV4dHJhX2Jhc2UscD1lLnN0YXRfZGVzYy5tYXhfbGVuZ3RoLG09MDtmb3Iocz0wO3M8PWc7cysrKXQuYmxfY291bnRbc109MDtmb3IoaFsyKnQuaGVhcFt0LmhlYXBfbWF4XSsxXT0wLHI9dC5oZWFwX21heCsxO3I8XztyKyspcDwocz1oWzIqaFsyKihpPXQuaGVhcFtyXSkrMV0rMV0rMSkmJihzPXAsbSsrKSxoWzIqaSsxXT1zLHU8aXx8KHQuYmxfY291bnRbc10rKyxhPTAsYzw9aSYmKGE9ZFtpLWNdKSxvPWhbMippXSx0Lm9wdF9sZW4rPW8qKHMrYSksZiYmKHQuc3RhdGljX2xlbis9byoobFsyKmkrMV0rYSkpKTtpZigwIT09bSl7ZG97Zm9yKHM9cC0xOzA9PT10LmJsX2NvdW50W3NdOylzLS07dC5ibF9jb3VudFtzXS0tLHQuYmxfY291bnRbcysxXSs9Mix0LmJsX2NvdW50W3BdLS0sbS09Mn13aGlsZSgwPG0pO2ZvcihzPXA7MCE9PXM7cy0tKWZvcihpPXQuYmxfY291bnRbc107MCE9PWk7KXU8KG49dC5oZWFwWy0tcl0pfHwoaFsyKm4rMV0hPT1zJiYodC5vcHRfbGVuKz0ocy1oWzIqbisxXSkqaFsyKm5dLGhbMipuKzFdPXMpLGktLSl9fSh0LGUpLFoocyx1LHQuYmxfY291bnQpfWZ1bmN0aW9uIFgodCxlLHIpe3ZhciBpLG4scz0tMSxhPWVbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSxlWzIqKHIrMSkrMV09NjU1MzUsaT0wO2k8PXI7aSsrKW49YSxhPWVbMiooaSsxKSsxXSwrK288aCYmbj09PWF8fChvPHU/dC5ibF90cmVlWzIqbl0rPW86MCE9PW4/KG4hPT1zJiZ0LmJsX3RyZWVbMipuXSsrLHQuYmxfdHJlZVsyKmJdKyspOm88PTEwP3QuYmxfdHJlZVsyKnZdKys6dC5ibF90cmVlWzIqeV0rKyxzPW4sdT0obz0wKT09PWE/KGg9MTM4LDMpOm49PT1hPyhoPTYsMyk6KGg9Nyw0KSl9ZnVuY3Rpb24gVih0LGUscil7dmFyIGksbixzPS0xLGE9ZVsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLGk9MDtpPD1yO2krKylpZihuPWEsYT1lWzIqKGkrMSkrMV0sISgrK288aCYmbj09PWEpKXtpZihvPHUpZm9yKDtMKHQsbix0LmJsX3RyZWUpLDAhPS0tbzspO2Vsc2UgMCE9PW4/KG4hPT1zJiYoTCh0LG4sdC5ibF90cmVlKSxvLS0pLEwodCxiLHQuYmxfdHJlZSksUCh0LG8tMywyKSk6bzw9MTA/KEwodCx2LHQuYmxfdHJlZSksUCh0LG8tMywzKSk6KEwodCx5LHQuYmxfdHJlZSksUCh0LG8tMTEsNykpO3M9bix1PShvPTApPT09YT8oaD0xMzgsMyk6bj09PWE/KGg9NiwzKTooaD03LDQpfX1pKFQpO3ZhciBxPSExO2Z1bmN0aW9uIEoodCxlLHIsaSl7UCh0LChzPDwxKSsoaT8xOjApLDMpLGZ1bmN0aW9uKHQsZSxyLGkpe00odCksaSYmKFUodCxyKSxVKHQsfnIpKSxuLmFycmF5U2V0KHQucGVuZGluZ19idWYsdC53aW5kb3csZSxyLHQucGVuZGluZyksdC5wZW5kaW5nKz1yfSh0LGUsciwhMCl9ci5fdHJfaW5pdD1mdW5jdGlvbih0KXtxfHwoZnVuY3Rpb24oKXt2YXIgdCxlLHIsaSxuLHM9bmV3IEFycmF5KGcrMSk7Zm9yKGk9cj0wO2k8YS0xO2krKylmb3IoSVtpXT1yLHQ9MDt0PDE8PHdbaV07dCsrKUFbcisrXT1pO2ZvcihBW3ItMV09aSxpPW49MDtpPDE2O2krKylmb3IoVFtpXT1uLHQ9MDt0PDE8PGtbaV07dCsrKUVbbisrXT1pO2ZvcihuPj49NztpPGY7aSsrKWZvcihUW2ldPW48PDcsdD0wO3Q8MTw8a1tpXS03O3QrKylFWzI1NituKytdPWk7Zm9yKGU9MDtlPD1nO2UrKylzW2VdPTA7Zm9yKHQ9MDt0PD0xNDM7KXpbMip0KzFdPTgsdCsrLHNbOF0rKztmb3IoO3Q8PTI1NTspelsyKnQrMV09OSx0Kyssc1s5XSsrO2Zvcig7dDw9Mjc5Oyl6WzIqdCsxXT03LHQrKyxzWzddKys7Zm9yKDt0PD0yODc7KXpbMip0KzFdPTgsdCsrLHNbOF0rKztmb3IoWih6LGwrMSxzKSx0PTA7dDxmO3QrKylDWzIqdCsxXT01LENbMip0XT1qKHQsNSk7Tz1uZXcgRCh6LHcsdSsxLGwsZyksQj1uZXcgRChDLGssMCxmLGcpLFI9bmV3IEQobmV3IEFycmF5KDApLHgsMCxkLHApfSgpLHE9ITApLHQubF9kZXNjPW5ldyBGKHQuZHluX2x0cmVlLE8pLHQuZF9kZXNjPW5ldyBGKHQuZHluX2R0cmVlLEIpLHQuYmxfZGVzYz1uZXcgRih0LmJsX3RyZWUsUiksdC5iaV9idWY9MCx0LmJpX3ZhbGlkPTAsVyh0KX0sci5fdHJfc3RvcmVkX2Jsb2NrPUosci5fdHJfZmx1c2hfYmxvY2s9ZnVuY3Rpb24odCxlLHIsaSl7dmFyIG4scyxhPTA7MDx0LmxldmVsPygyPT09dC5zdHJtLmRhdGFfdHlwZSYmKHQuc3RybS5kYXRhX3R5cGU9ZnVuY3Rpb24odCl7dmFyIGUscj00MDkzNjI0NDQ3O2ZvcihlPTA7ZTw9MzE7ZSsrLHI+Pj49MSlpZigxJnImJjAhPT10LmR5bl9sdHJlZVsyKmVdKXJldHVybiBvO2lmKDAhPT10LmR5bl9sdHJlZVsxOF18fDAhPT10LmR5bl9sdHJlZVsyMF18fDAhPT10LmR5bl9sdHJlZVsyNl0pcmV0dXJuIGg7Zm9yKGU9MzI7ZTx1O2UrKylpZigwIT09dC5keW5fbHRyZWVbMiplXSlyZXR1cm4gaDtyZXR1cm4gb30odCkpLFkodCx0LmxfZGVzYyksWSh0LHQuZF9kZXNjKSxhPWZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihYKHQsdC5keW5fbHRyZWUsdC5sX2Rlc2MubWF4X2NvZGUpLFgodCx0LmR5bl9kdHJlZSx0LmRfZGVzYy5tYXhfY29kZSksWSh0LHQuYmxfZGVzYyksZT1kLTE7Mzw9ZSYmMD09PXQuYmxfdHJlZVsyKlNbZV0rMV07ZS0tKTtyZXR1cm4gdC5vcHRfbGVuKz0zKihlKzEpKzUrNSs0LGV9KHQpLG49dC5vcHRfbGVuKzMrNz4+PjMsKHM9dC5zdGF0aWNfbGVuKzMrNz4+PjMpPD1uJiYobj1zKSk6bj1zPXIrNSxyKzQ8PW4mJi0xIT09ZT9KKHQsZSxyLGkpOjQ9PT10LnN0cmF0ZWd5fHxzPT09bj8oUCh0LDIrKGk/MTowKSwzKSxLKHQseixDKSk6KFAodCw0KyhpPzE6MCksMyksZnVuY3Rpb24odCxlLHIsaSl7dmFyIG47Zm9yKFAodCxlLTI1Nyw1KSxQKHQsci0xLDUpLFAodCxpLTQsNCksbj0wO248aTtuKyspUCh0LHQuYmxfdHJlZVsyKlNbbl0rMV0sMyk7Vih0LHQuZHluX2x0cmVlLGUtMSksVih0LHQuZHluX2R0cmVlLHItMSl9KHQsdC5sX2Rlc2MubWF4X2NvZGUrMSx0LmRfZGVzYy5tYXhfY29kZSsxLGErMSksSyh0LHQuZHluX2x0cmVlLHQuZHluX2R0cmVlKSksVyh0KSxpJiZNKHQpfSxyLl90cl90YWxseT1mdW5jdGlvbih0LGUscil7cmV0dXJuIHQucGVuZGluZ19idWZbdC5kX2J1ZisyKnQubGFzdF9saXRdPWU+Pj44JjI1NSx0LnBlbmRpbmdfYnVmW3QuZF9idWYrMip0Lmxhc3RfbGl0KzFdPTI1NSZlLHQucGVuZGluZ19idWZbdC5sX2J1Zit0Lmxhc3RfbGl0XT0yNTUmcix0Lmxhc3RfbGl0KyssMD09PWU/dC5keW5fbHRyZWVbMipyXSsrOih0Lm1hdGNoZXMrKyxlLS0sdC5keW5fbHRyZWVbMiooQVtyXSt1KzEpXSsrLHQuZHluX2R0cmVlWzIqTihlKV0rKyksdC5sYXN0X2xpdD09PXQubGl0X2J1ZnNpemUtMX0sci5fdHJfYWxpZ249ZnVuY3Rpb24odCl7UCh0LDIsMyksTCh0LG0seiksZnVuY3Rpb24odCl7MTY9PT10LmJpX3ZhbGlkPyhVKHQsdC5iaV9idWYpLHQuYmlfYnVmPTAsdC5iaV92YWxpZD0wKTo4PD10LmJpX3ZhbGlkJiYodC5wZW5kaW5nX2J1Zlt0LnBlbmRpbmcrK109MjU1JnQuYmlfYnVmLHQuYmlfYnVmPj49OCx0LmJpX3ZhbGlkLT04KX0odCl9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUzOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5pbnB1dD1udWxsLHRoaXMubmV4dF9pbj0wLHRoaXMuYXZhaWxfaW49MCx0aGlzLnRvdGFsX2luPTAsdGhpcy5vdXRwdXQ9bnVsbCx0aGlzLm5leHRfb3V0PTAsdGhpcy5hdmFpbF9vdXQ9MCx0aGlzLnRvdGFsX291dD0wLHRoaXMubXNnPVwiXCIsdGhpcy5zdGF0ZT1udWxsLHRoaXMuZGF0YV90eXBlPTIsdGhpcy5hZGxlcj0wfX0se31dLDU0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRJbW1lZGlhdGU6ZnVuY3Rpb24oKXt2YXIgdD1bXS5zbGljZS5hcHBseShhcmd1bWVudHMpO3Quc3BsaWNlKDEsMCwwKSxzZXRUaW1lb3V0LmFwcGx5KG51bGwsdCl9fSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG5jb25zdCBtYWtlRmlsZVN5c3RlbVNhZmVOYW1lID0gaW5wdXQgPT4gaW5wdXRcbiAgLnJlcGxhY2UoL2h0dHBzOlxcL1xcLy8sICcnKSAvLyByZW1vdmUgcHJvdG9jb2xcbiAgLnJlcGxhY2UoL1s8PjpcIlxcXFx8PyovXS9nLCAnLScpIC8vIHJlcGxhY2UgaW52YWxpZCBmaWxlbmFtZSBjaGFyYWN0ZXJzIHdpdGggZGFzaFxuICAucmVwbGFjZSgvXi0rfC0rJC9nLCAnJyk7IC8vIGNsZWFuIHVwIGxlYWRpbmcgb3IgdHJhaWxpbmcgZGFzaGVzXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coJ1NlbmRlcjonLCBzZW5kZXIpO1xuICBjb25zb2xlLmxvZygnTWVzc2FnZTonLCByZXF1ZXN0KTtcbiAgaWYgKHJlcXVlc3QuZG93bmxvYWRMaXN0KSB7XG4gICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG5cbiAgICBjb25zdCBzYXZlUGFnZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY2hyb21lLnBhZ2VDYXB0dXJlLnNhdmVBc01IVE1MKHsgdGFiSWQ6IHNlbmRlci50YWIuaWQgfSwgZGF0YSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICB9KTtcblxuICAgIHNhdmVQYWdlLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZW5kUmVzcG9uc2UoJ3BhZ2UgY2FwdHVyZWQnKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuXG4gICAgemlwLmZpbGUoJ2xpc3RpbmcubWh0bWwnLCBzYXZlUGFnZSk7XG5cbiAgICByZXF1ZXN0LmRvd25sb2FkTGlzdC5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBibG9iID0gZmV0Y2godXJsKS50aGVuKHIgPT4gci5ibG9iKCkpO1xuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gdXJsLm1hdGNoKC9bXi9dKyQvKVswXTtcbiAgICAgIHppcC5maWxlKG1ha2VGaWxlU3lzdGVtU2FmZU5hbWUoaW1hZ2VOYW1lKSwgYmxvYik7XG4gICAgfSk7XG5cbiAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJyB9KVxuICAgICAgLnRoZW4oemlwRmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoemlwRmlsZSk7XG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoeyB1cmwsIGZpbGVuYW1lOiBgJHttYWtlRmlsZVN5c3RlbVNhZmVOYW1lKHNlbmRlci50YWIudXJsKX0uemlwYCB9KTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7IC8vIFRlbGwgY2hyb21lIHRvIHdhaXQgZm9yIGFzeW5jIHNlbmRSZXNwb25zZVxuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=