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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@zerodeps/image-probe/dist/BmpProbe.js":
/*!*************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/BmpProbe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const StringSignature_1 = __webpack_require__(/*! ./StringSignature */ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js");
const MINIMUM_BUFFER_LENGTH = 26;
const SIGNATURE = new StringSignature_1.StringSignature("BM");
class BmpProbe extends Probe_1.Probe {
    get type() {
        return "bmp";
    }
    get mimeType() {
        return "image/bmp";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            SIGNATURE.check(buffer, 0);
    }
    probeSize(buffer) {
        return {
            width: buffer.readUInt16LE(18),
            height: buffer.readUInt16LE(22)
        };
    }
}
exports.BmpProbe = BmpProbe;
//# sourceMappingURL=BmpProbe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/GifProbe.js":
/*!*************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/GifProbe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const StringSignature_1 = __webpack_require__(/*! ./StringSignature */ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js");
const MINIMUM_BUFFER_LENGTH = 10;
const SIGNATURE87A = new StringSignature_1.StringSignature("GIF87a");
const SIGNATURE89A = new StringSignature_1.StringSignature("GIF89a");
class GifProbe extends Probe_1.Probe {
    get type() {
        return "gif";
    }
    get mimeType() {
        return "image/gif";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            (SIGNATURE87A.check(buffer, 0) || SIGNATURE89A.check(buffer, 0));
    }
    probeSize(buffer) {
        return {
            width: buffer.readUInt16LE(6),
            height: buffer.readUInt16LE(8)
        };
    }
}
exports.GifProbe = GifProbe;
//# sourceMappingURL=GifProbe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/Jpeg2000Probe.js":
/*!******************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/Jpeg2000Probe.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const StringSignature_1 = __webpack_require__(/*! ./StringSignature */ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js");
const MINIMUM_BUFFER_LENGTH = 56;
const SIGNATURE = new StringSignature_1.StringSignature("\x00\x00\x00\x0cjP  \r\n\x87\n");
class Jpeg2000Probe extends Probe_1.Probe {
    get type() {
        return "jp2";
    }
    get mimeType() {
        return "image/jp2";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            SIGNATURE.check(buffer, 0);
    }
    probeSize(buffer) {
        return {
            width: buffer.readUInt32BE(48 + 4),
            height: buffer.readUInt32BE(48)
        };
    }
}
exports.Jpeg2000Probe = Jpeg2000Probe;
//# sourceMappingURL=Jpeg2000Probe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/JpegProbe.js":
/*!**************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/JpegProbe.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const Signature_1 = __webpack_require__(/*! ./Signature */ "./node_modules/@zerodeps/image-probe/dist/Signature.js");
const MINIMUM_BUFFER_LENGTH = 4;
const SIGNATURE = new Signature_1.Signature([0xFF, 0xD8]);
class JpegProbe extends Probe_1.Probe {
    get type() {
        return "jpeg";
    }
    get mimeType() {
        return "image/jpeg";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            SIGNATURE.check(buffer, 0);
    }
    probeSize(buffer) {
        let offset = 2;
        while (buffer.length - offset > 2) {
            if (buffer[offset++] !== 0xFF) {
                return undefined;
            }
            let code = buffer[offset++];
            while (code === 0xFF && offset < buffer.length) {
                code = buffer[offset++];
            }
            let length = 0;
            if ((code >= 0xD0 && code <= 0xD9) || code === 0x01) {
                length = 0;
            }
            else if (code >= 0xC0 && code <= 0xFE) {
                if (buffer.length - offset < 2) {
                    return undefined;
                }
                length = buffer.readUInt16BE(offset) - 2;
                offset += 2;
            }
            else {
                return undefined;
            }
            if (code === 0xD9 || code === 0xDA) {
                return undefined;
            }
            if (length >= 5 && (code >= 0xC0 && code <= 0xCF) && code !== 0xC4 && code !== 0xC8 && code !== 0xCC) {
                if (buffer.length - offset < 2) {
                    return undefined;
                }
                return {
                    width: buffer.readUInt16BE(offset + 3),
                    height: buffer.readUInt16BE(offset + 1)
                };
            }
            offset += length;
        }
        return undefined;
    }
}
exports.JpegProbe = JpegProbe;
//# sourceMappingURL=JpegProbe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/PngProbe.js":
/*!*************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/PngProbe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const Signature_1 = __webpack_require__(/*! ./Signature */ "./node_modules/@zerodeps/image-probe/dist/Signature.js");
const StringSignature_1 = __webpack_require__(/*! ./StringSignature */ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js");
const MINIMUM_BUFFER_LENGTH = 24;
const SIGNATURE = new Signature_1.Signature([137, 80, 78, 71, 13, 10, 26, 10]);
const SIGNATUREIHDR = new StringSignature_1.StringSignature("IHDR");
class PngProbe extends Probe_1.Probe {
    get type() {
        return "png";
    }
    get mimeType() {
        return "image/png";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            SIGNATURE.check(buffer, 0);
    }
    probeSize(buffer) {
        if (SIGNATUREIHDR.check(buffer, 12)) {
            return {
                width: buffer.readUInt32BE(16),
                height: buffer.readUInt32BE(16 + 4)
            };
        }
        return {
            width: buffer.readUInt32BE(8),
            height: buffer.readUInt32BE(8 + 4)
        };
    }
}
exports.PngProbe = PngProbe;
//# sourceMappingURL=PngProbe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/Probe.js":
/*!**********************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/Probe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Probe {
}
exports.Probe = Probe;
//# sourceMappingURL=Probe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/Signature.js":
/*!**************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/Signature.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Signature {
    constructor(data) {
        this.array = [];
        this.array = data;
    }
    check(buffer, position) {
        for (let i = 0, j = position; i < this.array.length; i++) {
            if (buffer[j++] !== this.array[i]) {
                return false;
            }
        }
        return true;
    }
}
exports.Signature = Signature;
//# sourceMappingURL=Signature.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js":
/*!********************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/StringSignature.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Signature_1 = __webpack_require__(/*! ./Signature */ "./node_modules/@zerodeps/image-probe/dist/Signature.js");
class StringSignature extends Signature_1.Signature {
    constructor(data) {
        const MASK = 0xFF;
        const array = [];
        for (let i = 0; i < data.length; i++) {
            array.push(data.charCodeAt(i) & MASK);
        }
        super(array);
    }
}
exports.StringSignature = StringSignature;
//# sourceMappingURL=StringSignature.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/WebpProbe.js":
/*!**************************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/WebpProbe.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Probe_1 = __webpack_require__(/*! ./Probe */ "./node_modules/@zerodeps/image-probe/dist/Probe.js");
const StringSignature_1 = __webpack_require__(/*! ./StringSignature */ "./node_modules/@zerodeps/image-probe/dist/StringSignature.js");
const MINIMUM_BUFFER_LENGTH = 40;
const SIGNATURE_RIFF = new StringSignature_1.StringSignature("RIFF");
const SIGNATURE_VP8 = new StringSignature_1.StringSignature("WEBPVP8 ");
const SIGNATURE_VP8L = new StringSignature_1.StringSignature("WEBPVP8L");
const SIGNATURE_VP8X = new StringSignature_1.StringSignature("WEBPVP8X");
class WebpProbe extends Probe_1.Probe {
    get type() {
        return "webp";
    }
    get mimeType() {
        return "image/webp";
    }
    probeType(buffer) {
        return buffer.length >= MINIMUM_BUFFER_LENGTH &&
            SIGNATURE_RIFF.check(buffer, 0);
    }
    probeSize(buffer) {
        if (SIGNATURE_VP8.check(buffer, 8)) {
            if (buffer[16 + 7] !== 0x9D || buffer[16 + 8] !== 0x01 || buffer[16 + 9] !== 0x2A) {
                return undefined;
            }
            return {
                width: buffer.readUInt16LE(16 + 10) & 0x3FFF,
                height: buffer.readUInt32LE(16 + 12) & 0x3FFF
            };
        }
        if (SIGNATURE_VP8L.check(buffer, 8)) {
            if (buffer[20] !== 0x2F) {
                return undefined;
            }
            const bits = buffer.readUInt32LE(16 + 5);
            return {
                width: (bits & 0x3FFF) + 1,
                height: ((bits >> 14) & 0x3FFF) + 1
            };
        }
        if (SIGNATURE_VP8X.check(buffer, 8)) {
            return {
                width: buffer.readUIntLE(16 + 8, 3) + 1,
                height: buffer.readUIntLE(16 + 11, 3) + 1
            };
        }
        return undefined;
    }
}
exports.WebpProbe = WebpProbe;
//# sourceMappingURL=WebpProbe.js.map

/***/ }),

/***/ "./node_modules/@zerodeps/image-probe/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@zerodeps/image-probe/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BmpProbe_1 = __webpack_require__(/*! ./BmpProbe */ "./node_modules/@zerodeps/image-probe/dist/BmpProbe.js");
const JpegProbe_1 = __webpack_require__(/*! ./JpegProbe */ "./node_modules/@zerodeps/image-probe/dist/JpegProbe.js");
const Jpeg2000Probe_1 = __webpack_require__(/*! ./Jpeg2000Probe */ "./node_modules/@zerodeps/image-probe/dist/Jpeg2000Probe.js");
const GifProbe_1 = __webpack_require__(/*! ./GifProbe */ "./node_modules/@zerodeps/image-probe/dist/GifProbe.js");
const PngProbe_1 = __webpack_require__(/*! ./PngProbe */ "./node_modules/@zerodeps/image-probe/dist/PngProbe.js");
const WebpProbe_1 = __webpack_require__(/*! ./WebpProbe */ "./node_modules/@zerodeps/image-probe/dist/WebpProbe.js");
class ImageProbe {
    static register(probe) {
        this.probes.push(probe);
    }
    static fromBuffer(buffer) {
        for (const probe of this.probes) {
            if (probe.probeType(buffer)) {
                const results = probe.probeSize(buffer);
                if (results !== undefined) {
                    return {
                        type: probe.type,
                        mimeType: probe.mimeType,
                        ...results
                    };
                }
            }
        }
        return undefined;
    }
}
exports.ImageProbe = ImageProbe;
ImageProbe.probes = [];
ImageProbe.register(new PngProbe_1.PngProbe());
ImageProbe.register(new JpegProbe_1.JpegProbe());
ImageProbe.register(new GifProbe_1.GifProbe());
ImageProbe.register(new WebpProbe_1.WebpProbe());
ImageProbe.register(new Jpeg2000Probe_1.Jpeg2000Probe());
ImageProbe.register(new BmpProbe_1.BmpProbe());
//# sourceMappingURL=index.js.map

/***/ }),

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

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

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

/***/ "./src/content/components/gallery.html":
/*!*********************************************!*\
  !*** ./src/content/components/gallery.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!-- <div class=\"ywzg-gallery\" data-ywzg-gallery=\"closed\">\n  <button class=\"ywzg-gallery__close\" data-ywzg-gallery-close>Close</button> -->\n  <!-- Root element of PhotoSwipe. Must have class pswp. -->\n  <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\n      <!-- Background of PhotoSwipe.\n          It's a separate element as animating opacity is faster than rgba(). -->\n      <div class=\"pswp__bg\"></div>\n\n      <!-- Slides wrapper with overflow:hidden. -->\n      <div class=\"pswp__scroll-wrap\">\n\n          <!-- Container that holds slides.\n              PhotoSwipe keeps only 3 of them in the DOM to save memory.\n              Don't modify these 3 pswp__item elements, data is added later on. -->\n          <div class=\"pswp__container\">\n              <div class=\"pswp__item\"></div>\n              <div class=\"pswp__item\"></div>\n              <div class=\"pswp__item\"></div>\n          </div>\n\n          <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n          <div class=\"pswp__ui pswp__ui--hidden\">\n\n              <div class=\"pswp__top-bar\">\n\n                  <!--  Controls are self-explanatory. Order can be changed. -->\n\n                  <div class=\"pswp__counter\"></div>\n\n                  <button class=\"pswp__button pswp__button--download\" title=\"Download a .zip of all images, and a snapshot of the listing\" data-ywzg-download-all>Download all</button>\n\n                  <input class=\"pswp__zoom\" type=\"range\" id=\"pswp__zoom\" name=\"zoom\" value=\"0\" min=\"0\" max=\"10\" step=\"1\">\n\n                  <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n\n                  <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n\n                  <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n\n                  <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n\n                  <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n                  <!-- element will get class pswp__preloader--active when preloader is running -->\n                  <div class=\"pswp__preloader\">\n                      <div class=\"pswp__preloader__icn\">\n                        <div class=\"pswp__preloader__cut\">\n                          <div class=\"pswp__preloader__donut\"></div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n\n              <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                  <div class=\"pswp__share-tooltip\"></div>\n              </div>\n\n              <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n              </button>\n\n              <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n              </button>\n\n              <div class=\"pswp__caption\">\n                  <div class=\"pswp__caption__center\"></div>\n              </div>\n\n          </div>\n\n      </div>\n\n  <!-- </div>\n</div> -->\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/content/components/imageProbeFetch.js":
/*!***************************************************!*\
  !*** ./src/content/components/imageProbeFetch.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageProbeFetch; });
/* harmony import */ var _zerodeps_image_probe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zerodeps/image-probe */ "./node_modules/@zerodeps/image-probe/dist/index.js");
/* harmony import */ var _zerodeps_image_probe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zerodeps_image_probe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_1__);




function imageProbeFetch(url) {
  const controller = new AbortController();
  const { signal } = controller;


  return fetch(url, { signal })
    .then(response => {
      const reader = response.body.getReader();
      let result = null;
      let size;

      return reader.read()
        .then(function process({ done, value }) {
          if (done) return;

          if (result !== null) {
            result = buffer___WEBPACK_IMPORTED_MODULE_1__["Buffer"].concat([result, buffer___WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(value)]);
          } else {
            result = buffer___WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(value);
          }

          try {
            // ImageProbe attempts to read an offset value in the buffer
            // If that offset is beyond the end of the buffer, an error
            // is thrown.
            size = _zerodeps_image_probe__WEBPACK_IMPORTED_MODULE_0__["ImageProbe"].fromBuffer(result)
            if (size) {
              controller.abort();
              return;
            }
          } catch (e) {
            console.warn('Unable to determine image size, will keep trying', e);
          }

          // Otherwise continue reading stream
          return reader.read().then(process);
        })
        .then(() => size);
    });
}


/***/ }),

/***/ "./src/content/components/launcher.html":
/*!**********************************************!*\
  !*** ./src/content/components/launcher.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ywzg-launcher\">\n  <button class=\"ywzg-button\" style=\"display: none;\" disabled data-ywzg-gallery-open>\n    <svg version=\"1.1\" class=\"ywzg-button__launch-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 384 384\" xml:space=\"preserve\">\n      <g>\n        <polygon points=\"234.667,0 234.667,42.667 311.147,42.667 101.44,252.373 131.627,282.56 341.333,72.853 341.333,149.333\n          384,149.333 384,0 \t\t\t\"/>\n        <path d=\"M341.333,341.333H42.667V42.667H192V0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384\n          h298.667C364.907,384,384,364.907,384,341.333V192h-42.667V341.333z\"/>\n      </g>\n    </svg>\n    <svg version=\"1.1\" class=\"ywzg-button__loading-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 469.333 469.333\" xml:space=\"preserve\">\n        <g>\n          <path d=\"M234.667,362.667c-70.72,0-128-57.28-128-128c0-21.653,5.44-41.92,14.827-59.84L90.347,143.68\n            C73.813,170.133,64,201.173,64,234.667c0,94.293,76.373,170.667,170.667,170.667v64L320,384l-85.333-85.333V362.667z\"/>\n          <path d=\"M234.667,64V0l-85.333,85.333l85.333,85.333v-64c70.72,0,128,57.28,128,128c0,21.653-5.44,41.92-14.827,59.84\n            l31.147,31.147c16.533-26.453,26.347-57.493,26.347-90.987C405.333,140.373,328.96,64,234.667,64z\"/>\n        </g>\n    </svg>\n  </button>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/content/components/photoswipe-ui.js":
/*!*************************************************!*\
  !*** ./src/content/components/photoswipe-ui.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
*
*/
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';



var PhotoSwipeUI =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
    _shareButton,
    _zoomSlider,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
			timeToIdle: 4000,
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s

			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
      preloaderEl: true,
      zoomEl: true,
      zoomLabelEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},

			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event
				// when preventDefault() was called on touchstart and/or touchend.
				//
				// This happens on v4.3, 4.2, 4.1,
				// older versions strangely work correctly,
				// but just in case we add delay on all of them)
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;


			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}

			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' +
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' +
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {

				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled,
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false);
								// items-controller.js function allowProgressiveImg
							}

						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);

				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {

				var bars = _options.barsSize;
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}

				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {

					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{
			name: 'caption',
			option: 'captionEl',
			onInit: function(el) {
				_captionContainer = el;
			}
		},
		{
			name: 'share-modal',
			option: 'shareEl',
			onInit: function(el) {
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			}
		},
		{
			name: 'button--share',
			option: 'shareEl',
			onInit: function(el) {
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			}
		},
		{
			name: 'button--zoom',
			option: 'zoomEl',
			onTap: () => {
        const { currItem, template } = pswp;
        if (template.classList.contains('pswp--zoomed-in')) {
          // Return to initial zoom and sync slider
          _zoomSlider.value = 0;
          pswp.zoomTo(currItem.initialZoomLevel, { x: pswp.viewportSize.x / 2, y: pswp.viewportSize.y / 2 }, 333);
          template.classList.remove('pswp--zoomed-in');
        } else {
          // zoom to doubleTapZoomLevel and sync slider
          const doubleTapZoomLevel = _options.getDoubleTapZoom(true, currItem);
          _zoomSlider.value = (doubleTapZoomLevel - currItem.initialZoomLevel / (1 - currItem.initialZoomLevel)) * 10;
          pswp.toggleDesktopZoom();
        }
      },
		},
		{
			name: 'counter',
			option: 'counterEl',
			onInit: function(el) {
				_indexIndicator = el;
			}
		},
		{
			name: 'button--close',
			option: 'closeEl',
			onTap: pswp.close
		},
		{
			name: 'button--arrow--left',
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{
			name: 'button--arrow--right',
			option: 'arrowEl',
			onTap: pswp.next
		},
		{
			name: 'button--fs',
			option: 'fullscreenEl',
			onTap: function() {
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			}
		},
		{
			name: 'preloader',
			option: 'preloaderEl',
			onInit: function(el) {
				_loadingIndicator = el;
			}
		},
    {
      name: 'zoom',
      option: 'zoomEl',
    },
    {
      name: 'zoom-label',
      option: 'zoomLabelEl',
    }
	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options

							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}

							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};




	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
    _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

    _zoomSlider = _controls.querySelector('#pswp__zoom');

		// create local link
    _listen = pswp.listen;

    const onZoomSliderChange = e => {
      const zoomLevel = parseInt(e.target.value, 10);
      const { initialZoomLevel } = pswp.currItem;
      const targetZoomLevel = initialZoomLevel + (zoomLevel / 10) * (1 - initialZoomLevel);
      pswp.zoomTo(targetZoomLevel, { x: pswp.viewportSize.x / 2, y: pswp.viewportSize.y / 2 }, 333);

      if (zoomLevel === 0) {
        pswp.template.classList.remove('pswp--zoomed-in');
      } else {
        pswp.template.classList.add('pswp--zoomed-in');
      }
    }

		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t &&
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 &&
        (
          t.getAttribute('class').indexOf('__caption') > 0
          || (/(SMALL|STRONG|EM)/i).test(t.tagName)
        )
			) {
				preventObj.prevent = false;
			}
    });

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
      framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
      framework.bind(_zoomSlider, 'change', onZoomSliderChange);

      _listen('afterChange', () => { _zoomSlider.value = 0; });

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
      framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
      framework.unbind(_zoomSlider, 'change', onZoomSliderChange);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});


		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);

		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {

			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}

		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) +
										_options.indexIndicatorSep +
										_options.getNumItemsFn();
		}
	};

	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}

		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}

		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};



		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() {
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll;
				_options.closeOnScroll = false;

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK]();
				}
			};
			api.exit = function() {
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK]();

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI;


});


/***/ }),

/***/ "./src/content/content.js":
/*!********************************!*\
  !*** ./src/content/content.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.scss */ "./src/content/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_launcher_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/launcher.html */ "./src/content/components/launcher.html");
/* harmony import */ var _components_launcher_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_launcher_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_gallery_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gallery.html */ "./src/content/components/gallery.html");
/* harmony import */ var _components_gallery_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_gallery_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_photoswipe_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photoswipe-ui */ "./src/content/components/photoswipe-ui.js");
/* harmony import */ var _components_photoswipe_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_photoswipe_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_imageProbeFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/imageProbeFetch */ "./src/content/components/imageProbeFetch.js");
// Styles (so webpack processes sass)


// Markup (to inject)



// Photoswipe






// Inject markup
document.body.insertAdjacentHTML('beforeend', _components_launcher_html__WEBPACK_IMPORTED_MODULE_1___default.a);
document.body.insertAdjacentHTML('beforeend', _components_gallery_html__WEBPACK_IMPORTED_MODULE_2___default.a);

const launchButton = document.querySelector('[data-ywzg-gallery-open]');
const downloadButton = document.querySelector('[data-ywzg-download-all]');

const insertMessageScript = () => {
  const scriptEl = document.createElement('script');
  const script = "window.postMessage({ type: 'REDUX_STATE', state: __REDUX_STATE__ })";
  scriptEl.appendChild(document.createTextNode(script));
  document.body.append(scriptEl);
}

const getImageUrls = new Promise(resolve => {
  insertMessageScript();

  window.addEventListener('message', e => {
    if (e.source != window) return;

    if (e.data.type && e.data.type === 'REDUX_STATE') {
      const state = e.data.state;

      if (!state) resolve([]);

      const images = state.app.data.media.filter(({ mediaType }) => mediaType === 'image');

      // parse src as URL to ensure there are no query params
      const urls = images
        .map(image => image.url)
        .map(urlString => new URL(urlString))
        .map(url => `${url.origin}${url.pathname}`);

      resolve(urls);
    }
  });
});

const main = async () => {
  // This could be improved to launch the gallery as soon as we have the first image,
  // then dynamically add all other images as data is retrieved.
  const imageUrls = await getImageUrls;

  if (!imageUrls.length) return;

  launchButton.style.display = 'block';

  const imageSizes = await Promise.all(imageUrls.map(url => Object(_components_imageProbeFetch__WEBPACK_IMPORTED_MODULE_5__["default"])(url)));

  const items = imageUrls.map((url, i) => ({
    src: url,
    w: imageSizes[i].width,
    h: imageSizes[i].height,
    title: url,
  }));

  console.log(items);

  const pswpElement = document.querySelector('.pswp');

  const options = {
    bgOpacity: 0.9,
    index: 0, // start at first slide
    clickToCloseNonZoomable: false,
    history: false,
    closeOnVerticalDrag: false,
    closeOnScroll: false,
    pinchToClose: false,
    getDoubleTapZoom: (isMouseClick, item) =>  Math.min(1, item.initialZoomLevel * 2),
    isClickableElement: el => el.tagName === 'A' || el.classList.contains('pswp__zoom'),
    closeElClasses: [],
  };

  let gallery = null;

  const openGallery = () => {
    gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_3___default.a(pswpElement, _components_photoswipe_ui__WEBPACK_IMPORTED_MODULE_4___default.a, items, options);

    // Update index so gallery re-opens to same slide
    gallery.listen('afterChange', () => { options.index = gallery.getCurrentIndex(); });
    gallery.listen('destroy', () => { gallery = null });

    // Bug fix to prevent gallery from closing on vertical drag
    if (gallery.options.mouseUsed) {
      gallery.options.closeOnVerticalDrag = false;
    } else {
      gallery.listen('mouseUsed', () => {
        gallery.options.closeOnVerticalDrag = false;
      });
    }

    gallery.init();
  };

  launchButton.addEventListener('click', openGallery);

  downloadButton.addEventListener('click', () => {
    if (!gallery) return;
    gallery.listen('destroy', () => {
      // Show details and specs at once so it is all captured
      const info = document.querySelectorAll('.boat-details-content .collapse-content-details');
      const displayState = [...info].map(el => el.classList.contains('open'));
      info.forEach(el => {
        el.classList.remove('closed');
        el.classList.add('open');
      });

      // Hide extension elements because injected stylesheets
      // are not included in page capture
      const extensionUI = document.querySelectorAll('.pswp, .yqzg-launcher');
      extensionUI.forEach(el => el.style.display = 'none');

      // Wait to ensure styles are applied
      window.requestAnimationFrame(() => {
        chrome.runtime.sendMessage({ downloadList: imageUrls }, response => {
          if (response === 'page captured') {
            // Return to original view once page is captured.
            info.forEach(el => el.classList.remove('open'));
            info.forEach((el, i) => el.classList.add(displayState[i] ? 'open' : 'closed'));
            extensionUI.forEach(el => el.style.display = '');
            openGallery();
          }
        });
      });
    });

    gallery.close();
  });

  launchButton.disabled = false;
};

main();


/***/ }),

/***/ "./src/content/content.scss":
/*!**********************************!*\
  !*** ./src/content/content.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L0JtcFByb2JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9HaWZQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvSnBlZzIwMDBQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvSnBlZ1Byb2JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9QbmdQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvUHJvYmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L1NpZ25hdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvU3RyaW5nU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9XZWJwUHJvYmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29tcG9uZW50cy9nYWxsZXJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29tcG9uZW50cy9pbWFnZVByb2JlRmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29tcG9uZW50cy9sYXVuY2hlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbXBvbmVudHMvcGhvdG9zd2lwZS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNXZEQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCO0FBQ0EsS0FBSyxJQUEwQztBQUMvQyxFQUFFLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNqQixFQUFFLE1BQU0sRUFJTjtBQUNGLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLDRGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPLFdBQVc7QUFDM0M7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSw2Q0FBNkM7QUFDN0MsSTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMkJBQTJCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpQztBQUNBLFVBQVUsUztBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsaUU7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSwyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLDRCO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esa0Q7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LGlDQUFpQztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsS0FBSztBQUNMLHFCQUFxQjtBQUNyQixLO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixpRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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O0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7O0FBRUEsbUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOzs7OztBQUtKO0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcjRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN3Qjs7QUFFeEI7QUFDd0Q7QUFDRjs7QUFFdEQ7O0FBRW9DO0FBQ2tCOztBQUVLOztBQUUzRDtBQUNBLDhDQUE4QyxnRUFBYztBQUM1RCw4Q0FBOEMsK0RBQWE7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyw4Q0FBOEM7QUFDcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1EQUFtRCxZQUFZOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXLEVBQUUsYUFBYTs7QUFFakQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDREQUE0RCwyRUFBZTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFVLGNBQWMsZ0VBQVk7O0FBRXREO0FBQ0EseUNBQXlDLDJDQUEyQyxFQUFFO0FBQ3RGLHFDQUFxQyxpQkFBaUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLDBCQUEwQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEpBLHVDIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb250ZW50L2NvbnRlbnQuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBQcm9iZV8xID0gcmVxdWlyZShcIi4vUHJvYmVcIik7XHJcbmNvbnN0IFN0cmluZ1NpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vU3RyaW5nU2lnbmF0dXJlXCIpO1xyXG5jb25zdCBNSU5JTVVNX0JVRkZFUl9MRU5HVEggPSAyNjtcclxuY29uc3QgU0lHTkFUVVJFID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIkJNXCIpO1xyXG5jbGFzcyBCbXBQcm9iZSBleHRlbmRzIFByb2JlXzEuUHJvYmUge1xyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYm1wXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgbWltZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1hZ2UvYm1wXCI7XHJcbiAgICB9XHJcbiAgICBwcm9iZVR5cGUoYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGggPj0gTUlOSU1VTV9CVUZGRVJfTEVOR1RIICYmXHJcbiAgICAgICAgICAgIFNJR05BVFVSRS5jaGVjayhidWZmZXIsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnQxNkxFKDE4KSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBidWZmZXIucmVhZFVJbnQxNkxFKDIyKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CbXBQcm9iZSA9IEJtcFByb2JlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CbXBQcm9iZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBQcm9iZV8xID0gcmVxdWlyZShcIi4vUHJvYmVcIik7XHJcbmNvbnN0IFN0cmluZ1NpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vU3RyaW5nU2lnbmF0dXJlXCIpO1xyXG5jb25zdCBNSU5JTVVNX0JVRkZFUl9MRU5HVEggPSAxMDtcclxuY29uc3QgU0lHTkFUVVJFODdBID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIkdJRjg3YVwiKTtcclxuY29uc3QgU0lHTkFUVVJFODlBID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIkdJRjg5YVwiKTtcclxuY2xhc3MgR2lmUHJvYmUgZXh0ZW5kcyBQcm9iZV8xLlByb2JlIHtcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImdpZlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1pbWVUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImltYWdlL2dpZlwiO1xyXG4gICAgfVxyXG4gICAgcHJvYmVUeXBlKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBidWZmZXIubGVuZ3RoID49IE1JTklNVU1fQlVGRkVSX0xFTkdUSCAmJlxyXG4gICAgICAgICAgICAoU0lHTkFUVVJFODdBLmNoZWNrKGJ1ZmZlciwgMCkgfHwgU0lHTkFUVVJFODlBLmNoZWNrKGJ1ZmZlciwgMCkpO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnQxNkxFKDYpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDE2TEUoOClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR2lmUHJvYmUgPSBHaWZQcm9iZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R2lmUHJvYmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1Byb2JlXCIpO1xyXG5jb25zdCBTdHJpbmdTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1N0cmluZ1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gNTY7XHJcbmNvbnN0IFNJR05BVFVSRSA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJcXHgwMFxceDAwXFx4MDBcXHgwY2pQICBcXHJcXG5cXHg4N1xcblwiKTtcclxuY2xhc3MgSnBlZzIwMDBQcm9iZSBleHRlbmRzIFByb2JlXzEuUHJvYmUge1xyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwianAyXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgbWltZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1hZ2UvanAyXCI7XHJcbiAgICB9XHJcbiAgICBwcm9iZVR5cGUoYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGggPj0gTUlOSU1VTV9CVUZGRVJfTEVOR1RIICYmXHJcbiAgICAgICAgICAgIFNJR05BVFVSRS5jaGVjayhidWZmZXIsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnQzMkJFKDQ4ICsgNCksXHJcbiAgICAgICAgICAgIGhlaWdodDogYnVmZmVyLnJlYWRVSW50MzJCRSg0OClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnBlZzIwMDBQcm9iZSA9IEpwZWcyMDAwUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpwZWcyMDAwUHJvYmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1Byb2JlXCIpO1xyXG5jb25zdCBTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gNDtcclxuY29uc3QgU0lHTkFUVVJFID0gbmV3IFNpZ25hdHVyZV8xLlNpZ25hdHVyZShbMHhGRiwgMHhEOF0pO1xyXG5jbGFzcyBKcGVnUHJvYmUgZXh0ZW5kcyBQcm9iZV8xLlByb2JlIHtcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImpwZWdcIjtcclxuICAgIH1cclxuICAgIGdldCBtaW1lVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJpbWFnZS9qcGVnXCI7XHJcbiAgICB9XHJcbiAgICBwcm9iZVR5cGUoYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGggPj0gTUlOSU1VTV9CVUZGRVJfTEVOR1RIICYmXHJcbiAgICAgICAgICAgIFNJR05BVFVSRS5jaGVjayhidWZmZXIsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAyO1xyXG4gICAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoIC0gb2Zmc2V0ID4gMikge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyW29mZnNldCsrXSAhPT0gMHhGRikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29kZSA9IGJ1ZmZlcltvZmZzZXQrK107XHJcbiAgICAgICAgICAgIHdoaWxlIChjb2RlID09PSAweEZGICYmIG9mZnNldCA8IGJ1ZmZlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBidWZmZXJbb2Zmc2V0KytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBpZiAoKGNvZGUgPj0gMHhEMCAmJiBjb2RlIDw9IDB4RDkpIHx8IGNvZGUgPT09IDB4MDEpIHtcclxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA+PSAweEMwICYmIGNvZGUgPD0gMHhGRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggLSBvZmZzZXQgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGJ1ZmZlci5yZWFkVUludDE2QkUob2Zmc2V0KSAtIDI7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDB4RDkgfHwgY29kZSA9PT0gMHhEQSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGVuZ3RoID49IDUgJiYgKGNvZGUgPj0gMHhDMCAmJiBjb2RlIDw9IDB4Q0YpICYmIGNvZGUgIT09IDB4QzQgJiYgY29kZSAhPT0gMHhDOCAmJiBjb2RlICE9PSAweENDKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCAtIG9mZnNldCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MTZCRShvZmZzZXQgKyAzKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDE2QkUob2Zmc2V0ICsgMSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpwZWdQcm9iZSA9IEpwZWdQcm9iZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SnBlZ1Byb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFByb2JlXzEgPSByZXF1aXJlKFwiLi9Qcm9iZVwiKTtcclxuY29uc3QgU2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi9TaWduYXR1cmVcIik7XHJcbmNvbnN0IFN0cmluZ1NpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vU3RyaW5nU2lnbmF0dXJlXCIpO1xyXG5jb25zdCBNSU5JTVVNX0JVRkZFUl9MRU5HVEggPSAyNDtcclxuY29uc3QgU0lHTkFUVVJFID0gbmV3IFNpZ25hdHVyZV8xLlNpZ25hdHVyZShbMTM3LCA4MCwgNzgsIDcxLCAxMywgMTAsIDI2LCAxMF0pO1xyXG5jb25zdCBTSUdOQVRVUkVJSERSID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIklIRFJcIik7XHJcbmNsYXNzIFBuZ1Byb2JlIGV4dGVuZHMgUHJvYmVfMS5Qcm9iZSB7XHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJwbmdcIjtcclxuICAgIH1cclxuICAgIGdldCBtaW1lVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJpbWFnZS9wbmdcIjtcclxuICAgIH1cclxuICAgIHByb2JlVHlwZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4gYnVmZmVyLmxlbmd0aCA+PSBNSU5JTVVNX0JVRkZFUl9MRU5HVEggJiZcclxuICAgICAgICAgICAgU0lHTkFUVVJFLmNoZWNrKGJ1ZmZlciwgMCk7XHJcbiAgICB9XHJcbiAgICBwcm9iZVNpemUoYnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKFNJR05BVFVSRUlIRFIuY2hlY2soYnVmZmVyLCAxMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnQzMkJFKDE2KSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYnVmZmVyLnJlYWRVSW50MzJCRSgxNiArIDQpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnQzMkJFKDgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDMyQkUoOCArIDQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBuZ1Byb2JlID0gUG5nUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBuZ1Byb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFByb2JlIHtcclxufVxyXG5leHBvcnRzLlByb2JlID0gUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNpZ25hdHVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgY2hlY2soYnVmZmVyLCBwb3NpdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcG9zaXRpb247IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXJbaisrXSAhPT0gdGhpcy5hcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2lnbmF0dXJlID0gU2lnbmF0dXJlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaWduYXR1cmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgU2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi9TaWduYXR1cmVcIik7XHJcbmNsYXNzIFN0cmluZ1NpZ25hdHVyZSBleHRlbmRzIFNpZ25hdHVyZV8xLlNpZ25hdHVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgTUFTSyA9IDB4RkY7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChkYXRhLmNoYXJDb2RlQXQoaSkgJiBNQVNLKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoYXJyYXkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nU2lnbmF0dXJlID0gU3RyaW5nU2lnbmF0dXJlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdHJpbmdTaWduYXR1cmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1Byb2JlXCIpO1xyXG5jb25zdCBTdHJpbmdTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1N0cmluZ1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gNDA7XHJcbmNvbnN0IFNJR05BVFVSRV9SSUZGID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIlJJRkZcIik7XHJcbmNvbnN0IFNJR05BVFVSRV9WUDggPSBuZXcgU3RyaW5nU2lnbmF0dXJlXzEuU3RyaW5nU2lnbmF0dXJlKFwiV0VCUFZQOCBcIik7XHJcbmNvbnN0IFNJR05BVFVSRV9WUDhMID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIldFQlBWUDhMXCIpO1xyXG5jb25zdCBTSUdOQVRVUkVfVlA4WCA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJXRUJQVlA4WFwiKTtcclxuY2xhc3MgV2VicFByb2JlIGV4dGVuZHMgUHJvYmVfMS5Qcm9iZSB7XHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJ3ZWJwXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgbWltZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1hZ2Uvd2VicFwiO1xyXG4gICAgfVxyXG4gICAgcHJvYmVUeXBlKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBidWZmZXIubGVuZ3RoID49IE1JTklNVU1fQlVGRkVSX0xFTkdUSCAmJlxyXG4gICAgICAgICAgICBTSUdOQVRVUkVfUklGRi5jaGVjayhidWZmZXIsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIGlmIChTSUdOQVRVUkVfVlA4LmNoZWNrKGJ1ZmZlciwgOCkpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlclsxNiArIDddICE9PSAweDlEIHx8IGJ1ZmZlclsxNiArIDhdICE9PSAweDAxIHx8IGJ1ZmZlclsxNiArIDldICE9PSAweDJBKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MTZMRSgxNiArIDEwKSAmIDB4M0ZGRixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYnVmZmVyLnJlYWRVSW50MzJMRSgxNiArIDEyKSAmIDB4M0ZGRlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU0lHTkFUVVJFX1ZQOEwuY2hlY2soYnVmZmVyLCA4KSkge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyWzIwXSAhPT0gMHgyRikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBiaXRzID0gYnVmZmVyLnJlYWRVSW50MzJMRSgxNiArIDUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IChiaXRzICYgMHgzRkZGKSArIDEsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICgoYml0cyA+PiAxNCkgJiAweDNGRkYpICsgMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU0lHTkFUVVJFX1ZQOFguY2hlY2soYnVmZmVyLCA4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGJ1ZmZlci5yZWFkVUludExFKDE2ICsgOCwgMykgKyAxLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBidWZmZXIucmVhZFVJbnRMRSgxNiArIDExLCAzKSArIDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldlYnBQcm9iZSA9IFdlYnBQcm9iZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2VicFByb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEJtcFByb2JlXzEgPSByZXF1aXJlKFwiLi9CbXBQcm9iZVwiKTtcclxuY29uc3QgSnBlZ1Byb2JlXzEgPSByZXF1aXJlKFwiLi9KcGVnUHJvYmVcIik7XHJcbmNvbnN0IEpwZWcyMDAwUHJvYmVfMSA9IHJlcXVpcmUoXCIuL0pwZWcyMDAwUHJvYmVcIik7XHJcbmNvbnN0IEdpZlByb2JlXzEgPSByZXF1aXJlKFwiLi9HaWZQcm9iZVwiKTtcclxuY29uc3QgUG5nUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1BuZ1Byb2JlXCIpO1xyXG5jb25zdCBXZWJwUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1dlYnBQcm9iZVwiKTtcclxuY2xhc3MgSW1hZ2VQcm9iZSB7XHJcbiAgICBzdGF0aWMgcmVnaXN0ZXIocHJvYmUpIHtcclxuICAgICAgICB0aGlzLnByb2Jlcy5wdXNoKHByb2JlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmcm9tQnVmZmVyKGJ1ZmZlcikge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvYmUgb2YgdGhpcy5wcm9iZXMpIHtcclxuICAgICAgICAgICAgaWYgKHByb2JlLnByb2JlVHlwZShidWZmZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gcHJvYmUucHJvYmVTaXplKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcHJvYmUudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGU6IHByb2JlLm1pbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW1hZ2VQcm9iZSA9IEltYWdlUHJvYmU7XHJcbkltYWdlUHJvYmUucHJvYmVzID0gW107XHJcbkltYWdlUHJvYmUucmVnaXN0ZXIobmV3IFBuZ1Byb2JlXzEuUG5nUHJvYmUoKSk7XHJcbkltYWdlUHJvYmUucmVnaXN0ZXIobmV3IEpwZWdQcm9iZV8xLkpwZWdQcm9iZSgpKTtcclxuSW1hZ2VQcm9iZS5yZWdpc3RlcihuZXcgR2lmUHJvYmVfMS5HaWZQcm9iZSgpKTtcclxuSW1hZ2VQcm9iZS5yZWdpc3RlcihuZXcgV2VicFByb2JlXzEuV2VicFByb2JlKCkpO1xyXG5JbWFnZVByb2JlLnJlZ2lzdGVyKG5ldyBKcGVnMjAwMFByb2JlXzEuSnBlZzIwMDBQcm9iZSgpKTtcclxuSW1hZ2VQcm9iZS5yZWdpc3RlcihuZXcgQm1wUHJvYmVfMS5CbXBQcm9iZSgpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsIi8qISBQaG90b1N3aXBlIC0gdjQuMS4zIC0gMjAxOS0wMS0wOFxuKiBodHRwOi8vcGhvdG9zd2lwZS5jb21cbiogQ29weXJpZ2h0IChjKSAyMDE5IERtaXRyeSBTZW1lbm92OyAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7IFxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJvb3QuUGhvdG9Td2lwZSA9IGZhY3RvcnkoKTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIFBob3RvU3dpcGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgVWlDbGFzcywgaXRlbXMsIG9wdGlvbnMpe1xuXG4vKj4+ZnJhbWV3b3JrLWJyaWRnZSovXG4vKipcbiAqXG4gKiBTZXQgb2YgZ2VuZXJpYyBmdW5jdGlvbnMgdXNlZCBieSBnYWxsZXJ5LlxuICogXG4gKiBZb3UncmUgZnJlZSB0byBtb2RpZnkgYW55dGhpbmcgaGVyZSBhcyBsb25nIGFzIGZ1bmN0aW9uYWxpdHkgaXMga2VwdC5cbiAqIFxuICovXG52YXIgZnJhbWV3b3JrID0ge1xuXHRmZWF0dXJlczogbnVsbCxcblx0YmluZDogZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgdW5iaW5kKSB7XG5cdFx0dmFyIG1ldGhvZE5hbWUgPSAodW5iaW5kID8gJ3JlbW92ZScgOiAnYWRkJykgKyAnRXZlbnRMaXN0ZW5lcic7XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoJyAnKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZVtpXSkge1xuXHRcdFx0XHR0YXJnZXRbbWV0aG9kTmFtZV0oIHR5cGVbaV0sIGxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRpc0FycmF5OiBmdW5jdGlvbihvYmopIHtcblx0XHRyZXR1cm4gKG9iaiBpbnN0YW5jZW9mIEFycmF5KTtcblx0fSxcblx0Y3JlYXRlRWw6IGZ1bmN0aW9uKGNsYXNzZXMsIHRhZykge1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnIHx8ICdkaXYnKTtcblx0XHRpZihjbGFzc2VzKSB7XG5cdFx0XHRlbC5jbGFzc05hbWUgPSBjbGFzc2VzO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cdGdldFNjcm9sbFk6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB5T2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdHJldHVybiB5T2Zmc2V0ICE9PSB1bmRlZmluZWQgPyB5T2Zmc2V0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG5cdFx0ZnJhbWV3b3JrLmJpbmQodGFyZ2V0LHR5cGUsbGlzdGVuZXIsdHJ1ZSk7XG5cdH0sXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdFx0dmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJyk7XG5cdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpLnJlcGxhY2UoL15cXHNcXHMqLywgJycpLnJlcGxhY2UoL1xcc1xccyokLywgJycpOyBcblx0fSxcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcblx0XHRpZiggIWZyYW1ld29yay5oYXNDbGFzcyhlbCxjbGFzc05hbWUpICkge1xuXHRcdFx0ZWwuY2xhc3NOYW1lICs9IChlbC5jbGFzc05hbWUgPyAnICcgOiAnJykgKyBjbGFzc05hbWU7XG5cdFx0fVxuXHR9LFxuXHRoYXNDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRcdHJldHVybiBlbC5jbGFzc05hbWUgJiYgbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG5cdH0sXG5cdGdldENoaWxkQnlDbGFzczogZnVuY3Rpb24ocGFyZW50RWwsIGNoaWxkQ2xhc3NOYW1lKSB7XG5cdFx0dmFyIG5vZGUgPSBwYXJlbnRFbC5maXJzdENoaWxkO1xuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGlmKCBmcmFtZXdvcmsuaGFzQ2xhc3Mobm9kZSwgY2hpbGRDbGFzc05hbWUpICkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHRcdG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fSxcblx0YXJyYXlTZWFyY2g6IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSwga2V5KSB7XG5cdFx0dmFyIGkgPSBhcnJheS5sZW5ndGg7XG5cdFx0d2hpbGUoaS0tKSB7XG5cdFx0XHRpZihhcnJheVtpXVtrZXldID09PSB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH0gXG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fSxcblx0ZXh0ZW5kOiBmdW5jdGlvbihvMSwgbzIsIHByZXZlbnRPdmVyd3JpdGUpIHtcblx0XHRmb3IgKHZhciBwcm9wIGluIG8yKSB7XG5cdFx0XHRpZiAobzIuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblx0XHRcdFx0aWYocHJldmVudE92ZXJ3cml0ZSAmJiBvMS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG8xW3Byb3BdID0gbzJbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRlYXNpbmc6IHtcblx0XHRzaW5lOiB7XG5cdFx0XHRvdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc2luKGsgKiAoTWF0aC5QSSAvIDIpKTtcblx0XHRcdH0sXG5cdFx0XHRpbk91dDogZnVuY3Rpb24oaykge1xuXHRcdFx0XHRyZXR1cm4gLSAoTWF0aC5jb3MoTWF0aC5QSSAqIGspIC0gMSkgLyAyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3ViaWM6IHtcblx0XHRcdG91dDogZnVuY3Rpb24oaykge1xuXHRcdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKlxuXHRcdFx0ZWxhc3RpYzoge1xuXHRcdFx0XHRvdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdFx0XHRlbHNlIHMgPSBwICogTWF0aC5hc2luKCAxIC8gYSApIC8gKCAyICogTWF0aC5QSSApO1xuXHRcdFx0XHRcdHJldHVybiAoIGEgKiBNYXRoLnBvdyggMiwgLSAxMCAqIGspICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSArIDEgKTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGJhY2s6IHtcblx0XHRcdFx0b3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cdFx0XHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0XHRcdHJldHVybiAtLWsgKiBrICogKCAoIHMgKyAxICkgKiBrICsgcyApICsgMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCovXG5cdH0sXG5cblx0LyoqXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtvYmplY3R9XG5cdCAqIFxuXHQgKiB7XG5cdCAqICByYWYgOiByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBmdW5jdGlvblxuXHQgKiAgY2FmIDogY2FuY2VsIGFuaW1hdGlvbiBmcmFtZSBmdW5jdGlvblxuXHQgKiAgdHJhbnNmcm9tIDogdHJhbnNmb3JtIHByb3BlcnR5IGtleSAod2l0aCB2ZW5kb3IpLCBvciBudWxsIGlmIG5vdCBzdXBwb3J0ZWRcblx0ICogIG9sZElFIDogSUU4IG9yIGJlbG93XG5cdCAqIH1cblx0ICogXG5cdCAqL1xuXHRkZXRlY3RGZWF0dXJlczogZnVuY3Rpb24oKSB7XG5cdFx0aWYoZnJhbWV3b3JrLmZlYXR1cmVzKSB7XG5cdFx0XHRyZXR1cm4gZnJhbWV3b3JrLmZlYXR1cmVzO1xuXHRcdH1cblx0XHR2YXIgaGVscGVyRWwgPSBmcmFtZXdvcmsuY3JlYXRlRWwoKSxcblx0XHRcdGhlbHBlclN0eWxlID0gaGVscGVyRWwuc3R5bGUsXG5cdFx0XHR2ZW5kb3IgPSAnJyxcblx0XHRcdGZlYXR1cmVzID0ge307XG5cblx0XHQvLyBJRTggYW5kIGJlbG93XG5cdFx0ZmVhdHVyZXMub2xkSUUgPSBkb2N1bWVudC5hbGwgJiYgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cblx0XHRmZWF0dXJlcy50b3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcblxuXHRcdGlmKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdGZlYXR1cmVzLnJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0XHRmZWF0dXJlcy5jYWYgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cdFx0fVxuXG5cdFx0ZmVhdHVyZXMucG9pbnRlckV2ZW50ID0gISEod2luZG93LlBvaW50ZXJFdmVudCkgfHwgbmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG5cblx0XHQvLyBmaXggZmFsc2UtcG9zaXRpdmUgZGV0ZWN0aW9uIG9mIG9sZCBBbmRyb2lkIGluIG5ldyBJRVxuXHRcdC8vIChJRTExIHVhIHN0cmluZyBjb250YWlucyBcIkFuZHJvaWQgNC4wXCIpXG5cdFx0XG5cdFx0aWYoIWZlYXR1cmVzLnBvaW50ZXJFdmVudCkgeyBcblxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRcdFx0Ly8gRGV0ZWN0IGlmIGRldmljZSBpcyBpUGhvbmUgb3IgaVBvZCBhbmQgaWYgaXQncyBvbGRlciB0aGFuIGlPUyA4XG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDIyMzkyMFxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBUaGlzIGRldGVjdGlvbiBpcyBtYWRlIGJlY2F1c2Ugb2YgYnVnZ3kgdG9wL2JvdHRvbSB0b29sYmFyc1xuXHRcdFx0Ly8gdGhhdCBkb24ndCB0cmlnZ2VyIHdpbmRvdy5yZXNpemUgZXZlbnQuXG5cdFx0XHQvLyBGb3IgbW9yZSBpbmZvIHJlZmVyIHRvIF9pc0ZpeGVkUG9zaXRpb24gdmFyaWFibGUgaW4gY29yZS5qc1xuXG5cdFx0XHRpZiAoL2lQKGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpIHtcblx0XHRcdFx0dmFyIHYgPSAobmF2aWdhdG9yLmFwcFZlcnNpb24pLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG5cdFx0XHRcdGlmKHYgJiYgdi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0diA9IHBhcnNlSW50KHZbMV0sIDEwKTtcblx0XHRcdFx0XHRpZih2ID49IDEgJiYgdiA8IDggKSB7XG5cdFx0XHRcdFx0XHRmZWF0dXJlcy5pc09sZElPU1Bob25lID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRGV0ZWN0IG9sZCBBbmRyb2lkIChiZWZvcmUgS2l0S2F0KVxuXHRcdFx0Ly8gZHVlIHRvIGJ1Z3MgcmVsYXRlZCB0byBwb3NpdGlvbjpmaXhlZFxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTg0NTczL3BpY2stdXAtdGhlLWFuZHJvaWQtdmVyc2lvbi1pbi10aGUtYnJvd3Nlci1ieS1qYXZhc2NyaXB0XG5cdFx0XHRcblx0XHRcdHZhciBtYXRjaCA9IHVhLm1hdGNoKC9BbmRyb2lkXFxzKFswLTlcXC5dKikvKTtcblx0XHRcdHZhciBhbmRyb2lkdmVyc2lvbiA9ICBtYXRjaCA/IG1hdGNoWzFdIDogMDtcblx0XHRcdGFuZHJvaWR2ZXJzaW9uID0gcGFyc2VGbG9hdChhbmRyb2lkdmVyc2lvbik7XG5cdFx0XHRpZihhbmRyb2lkdmVyc2lvbiA+PSAxICkge1xuXHRcdFx0XHRpZihhbmRyb2lkdmVyc2lvbiA8IDQuNCkge1xuXHRcdFx0XHRcdGZlYXR1cmVzLmlzT2xkQW5kcm9pZCA9IHRydWU7IC8vIGZvciBmaXhlZCBwb3NpdGlvbiBidWcgJiBwZXJmb3JtYW5jZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZlYXR1cmVzLmFuZHJvaWRWZXJzaW9uID0gYW5kcm9pZHZlcnNpb247IC8vIGZvciB0b3VjaGVuZCBidWdcblx0XHRcdH1cdFxuXHRcdFx0ZmVhdHVyZXMuaXNNb2JpbGVPcGVyYSA9IC9vcGVyYSBtaW5pfG9wZXJhIG1vYmkvaS50ZXN0KHVhKTtcblxuXHRcdFx0Ly8gcC5zLiB5ZXMsIHllcywgVUEgc25pZmZpbmcgaXMgYmFkLCBwcm9wb3NlIHlvdXIgc29sdXRpb24gZm9yIGFib3ZlIGJ1Z3MuXG5cdFx0fVxuXHRcdFxuXHRcdHZhciBzdHlsZUNoZWNrcyA9IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2FuaW1hdGlvbk5hbWUnXSxcblx0XHRcdHZlbmRvcnMgPSBbJycsICd3ZWJraXQnLCdNb3onLCdtcycsJ08nXSxcblx0XHRcdHN0eWxlQ2hlY2tJdGVtLFxuXHRcdFx0c3R5bGVOYW1lO1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dmVuZG9yID0gdmVuZG9yc1tpXTtcblxuXHRcdFx0Zm9yKHZhciBhID0gMDsgYSA8IDM7IGErKykge1xuXHRcdFx0XHRzdHlsZUNoZWNrSXRlbSA9IHN0eWxlQ2hlY2tzW2FdO1xuXG5cdFx0XHRcdC8vIHVwcGVyY2FzZSBmaXJzdCBsZXR0ZXIgb2YgcHJvcGVydHkgbmFtZSwgaWYgdmVuZG9yIGlzIHByZXNlbnRcblx0XHRcdFx0c3R5bGVOYW1lID0gdmVuZG9yICsgKHZlbmRvciA/IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZUNoZWNrSXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlQ2hlY2tJdGVtLnNsaWNlKDEpIDogXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlQ2hlY2tJdGVtKTtcblx0XHRcdFxuXHRcdFx0XHRpZighZmVhdHVyZXNbc3R5bGVDaGVja0l0ZW1dICYmIHN0eWxlTmFtZSBpbiBoZWxwZXJTdHlsZSApIHtcblx0XHRcdFx0XHRmZWF0dXJlc1tzdHlsZUNoZWNrSXRlbV0gPSBzdHlsZU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodmVuZG9yICYmICFmZWF0dXJlcy5yYWYpIHtcblx0XHRcdFx0dmVuZG9yID0gdmVuZG9yLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGZlYXR1cmVzLnJhZiA9IHdpbmRvd1t2ZW5kb3IrJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHRcdFx0XHRpZihmZWF0dXJlcy5yYWYpIHtcblx0XHRcdFx0XHRmZWF0dXJlcy5jYWYgPSB3aW5kb3dbdmVuZG9yKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IFxuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93W3ZlbmRvcisnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XHRcblx0XHRpZighZmVhdHVyZXMucmFmKSB7XG5cdFx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdFx0ZmVhdHVyZXMucmFmID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdFx0dmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuXHRcdFx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgZm4oY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgdGltZVRvQ2FsbCk7XG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9O1xuXHRcdFx0ZmVhdHVyZXMuY2FmID0gZnVuY3Rpb24oaWQpIHsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgU1ZHIHN1cHBvcnRcblx0XHRmZWF0dXJlcy5zdmcgPSAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiBcblx0XHRcdFx0XHRcdCEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKS5jcmVhdGVTVkdSZWN0O1xuXG5cdFx0ZnJhbWV3b3JrLmZlYXR1cmVzID0gZmVhdHVyZXM7XG5cblx0XHRyZXR1cm4gZmVhdHVyZXM7XG5cdH1cbn07XG5cbmZyYW1ld29yay5kZXRlY3RGZWF0dXJlcygpO1xuXG4vLyBPdmVycmlkZSBhZGRFdmVudExpc3RlbmVyIGZvciBvbGQgdmVyc2lvbnMgb2YgSUVcbmlmKGZyYW1ld29yay5mZWF0dXJlcy5vbGRJRSkge1xuXG5cdGZyYW1ld29yay5iaW5kID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgdW5iaW5kKSB7XG5cdFx0XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoJyAnKTtcblxuXHRcdHZhciBtZXRob2ROYW1lID0gKHVuYmluZCA/ICdkZXRhY2gnIDogJ2F0dGFjaCcpICsgJ0V2ZW50Jyxcblx0XHRcdGV2TmFtZSxcblx0XHRcdF9oYW5kbGVFdiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyKTtcblx0XHRcdH07XG5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZXZOYW1lID0gdHlwZVtpXTtcblx0XHRcdGlmKGV2TmFtZSkge1xuXG5cdFx0XHRcdGlmKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ29iamVjdCcgJiYgbGlzdGVuZXIuaGFuZGxlRXZlbnQpIHtcblx0XHRcdFx0XHRpZighdW5iaW5kKSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lclsnb2xkSUUnICsgZXZOYW1lXSA9IF9oYW5kbGVFdjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoIWxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0YXJnZXRbbWV0aG9kTmFtZV0oICdvbicgKyBldk5hbWUsIGxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRbbWV0aG9kTmFtZV0oICdvbicgKyBldk5hbWUsIGxpc3RlbmVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRcbn1cblxuLyo+PmZyYW1ld29yay1icmlkZ2UqL1xuXG4vKj4+Y29yZSovXG4vL2Z1bmN0aW9uKHRlbXBsYXRlLCBVaUNsYXNzLCBpdGVtcywgb3B0aW9ucylcblxudmFyIHNlbGYgPSB0aGlzO1xuXG4vKipcbiAqIFN0YXRpYyB2YXJzLCBkb24ndCBjaGFuZ2UgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICovXG52YXIgRE9VQkxFX1RBUF9SQURJVVMgPSAyNSwgXG5cdE5VTV9IT0xERVJTID0gMztcblxuLyoqXG4gKiBPcHRpb25zXG4gKi9cbnZhciBfb3B0aW9ucyA9IHtcblx0YWxsb3dQYW5Ub05leHQ6dHJ1ZSxcblx0c3BhY2luZzogMC4xMixcblx0YmdPcGFjaXR5OiAxLFxuXHRtb3VzZVVzZWQ6IGZhbHNlLFxuXHRsb29wOiB0cnVlLFxuXHRwaW5jaFRvQ2xvc2U6IHRydWUsXG5cdGNsb3NlT25TY3JvbGw6IHRydWUsXG5cdGNsb3NlT25WZXJ0aWNhbERyYWc6IHRydWUsXG5cdHZlcnRpY2FsRHJhZ1JhbmdlOiAwLjc1LFxuXHRoaWRlQW5pbWF0aW9uRHVyYXRpb246IDMzMyxcblx0c2hvd0FuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXG5cdHNob3dIaWRlT3BhY2l0eTogZmFsc2UsXG5cdGZvY3VzOiB0cnVlLFxuXHRlc2NLZXk6IHRydWUsXG5cdGFycm93S2V5czogdHJ1ZSxcblx0bWFpblNjcm9sbEVuZEZyaWN0aW9uOiAwLjM1LFxuXHRwYW5FbmRGcmljdGlvbjogMC4zNSxcblx0aXNDbGlja2FibGVFbGVtZW50OiBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnO1xuICAgIH0sXG4gICAgZ2V0RG91YmxlVGFwWm9vbTogZnVuY3Rpb24oaXNNb3VzZUNsaWNrLCBpdGVtKSB7XG4gICAgXHRpZihpc01vdXNlQ2xpY2spIHtcbiAgICBcdFx0cmV0dXJuIDE7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHRyZXR1cm4gaXRlbS5pbml0aWFsWm9vbUxldmVsIDwgMC43ID8gMSA6IDEuMzM7XG4gICAgXHR9XG4gICAgfSxcbiAgICBtYXhTcHJlYWRab29tOiAxLjMzLFxuXHRtb2RhbDogdHJ1ZSxcblxuXHQvLyBub3QgZnVsbHkgaW1wbGVtZW50ZWQgeWV0XG5cdHNjYWxlTW9kZTogJ2ZpdCcgLy8gVE9ET1xufTtcbmZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIG9wdGlvbnMpO1xuXG5cbi8qKlxuICogUHJpdmF0ZSBoZWxwZXIgdmFyaWFibGVzICYgZnVuY3Rpb25zXG4gKi9cblxudmFyIF9nZXRFbXB0eVBvaW50ID0gZnVuY3Rpb24oKSB7IFxuXHRcdHJldHVybiB7eDowLHk6MH07IFxuXHR9O1xuXG52YXIgX2lzT3Blbixcblx0X2lzRGVzdHJveWluZyxcblx0X2Nsb3NlZEJ5U2Nyb2xsLFxuXHRfY3VycmVudEl0ZW1JbmRleCxcblx0X2NvbnRhaW5lclN0eWxlLFxuXHRfY29udGFpbmVyU2hpZnRJbmRleCxcblx0X2N1cnJQYW5EaXN0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3N0YXJ0UGFuT2Zmc2V0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3Bhbk9mZnNldCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF91cE1vdmVFdmVudHMsIC8vIGRyYWcgbW92ZSwgZHJhZyBlbmQgJiBkcmFnIGNhbmNlbCBldmVudHMgYXJyYXlcblx0X2Rvd25FdmVudHMsIC8vIGRyYWcgc3RhcnQgZXZlbnRzIGFycmF5XG5cdF9nbG9iYWxFdmVudEhhbmRsZXJzLFxuXHRfdmlld3BvcnRTaXplID0ge30sXG5cdF9jdXJyWm9vbUxldmVsLFxuXHRfc3RhcnRab29tTGV2ZWwsXG5cdF90cmFuc2xhdGVQcmVmaXgsXG5cdF90cmFuc2xhdGVTdWZpeCxcblx0X3VwZGF0ZVNpemVJbnRlcnZhbCxcblx0X2l0ZW1zTmVlZFVwZGF0ZSxcblx0X2N1cnJQb3NpdGlvbkluZGV4ID0gMCxcblx0X29mZnNldCA9IHt9LFxuXHRfc2xpZGVTaXplID0gX2dldEVtcHR5UG9pbnQoKSwgLy8gc2l6ZSBvZiBzbGlkZSBhcmVhLCBpbmNsdWRpbmcgc3BhY2luZ1xuXHRfaXRlbUhvbGRlcnMsXG5cdF9wcmV2SXRlbUluZGV4LFxuXHRfaW5kZXhEaWZmID0gMCwgLy8gZGlmZmVyZW5jZSBvZiBpbmRleGVzIHNpbmNlIGxhc3QgY29udGVudCB1cGRhdGVcblx0X2RyYWdTdGFydEV2ZW50LFxuXHRfZHJhZ01vdmVFdmVudCxcblx0X2RyYWdFbmRFdmVudCxcblx0X2RyYWdDYW5jZWxFdmVudCxcblx0X3RyYW5zZm9ybUtleSxcblx0X3BvaW50ZXJFdmVudEVuYWJsZWQsXG5cdF9pc0ZpeGVkUG9zaXRpb24gPSB0cnVlLFxuXHRfbGlrZWx5VG91Y2hEZXZpY2UsXG5cdF9tb2R1bGVzID0gW10sXG5cdF9yZXF1ZXN0QUYsXG5cdF9jYW5jZWxBRixcblx0X2luaXRhbENsYXNzTmFtZSxcblx0X2luaXRhbFdpbmRvd1Njcm9sbFksXG5cdF9vbGRJRSxcblx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZLFxuXHRfZmVhdHVyZXMsXG5cdF93aW5kb3dWaXNpYmxlU2l6ZSA9IHt9LFxuXHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IGZhbHNlLFxuXHRfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0LFxuXG5cblx0Ly8gUmVnaXN0ZXJzIFBob3RvU1dpcGUgbW9kdWxlIChIaXN0b3J5LCBDb250cm9sbGVyIC4uLilcblx0X3JlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24obmFtZSwgbW9kdWxlKSB7XG5cdFx0ZnJhbWV3b3JrLmV4dGVuZChzZWxmLCBtb2R1bGUucHVibGljTWV0aG9kcyk7XG5cdFx0X21vZHVsZXMucHVzaChuYW1lKTtcblx0fSxcblxuXHRfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBfZ2V0TnVtSXRlbXMoKTtcblx0XHRpZihpbmRleCA+IG51bVNsaWRlcyAtIDEpIHtcblx0XHRcdHJldHVybiBpbmRleCAtIG51bVNsaWRlcztcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bVNsaWRlcyArIGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH0sXG5cdFxuXHQvLyBNaWNybyBiaW5kL3RyaWdnZXJcblx0X2xpc3RlbmVycyA9IHt9LFxuXHRfbGlzdGVuID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0XHRpZighX2xpc3RlbmVyc1tuYW1lXSkge1xuXHRcdFx0X2xpc3RlbmVyc1tuYW1lXSA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xpc3RlbmVyc1tuYW1lXS5wdXNoKGZuKTtcblx0fSxcblx0X3Nob3V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdHZhciBsaXN0ZW5lcnMgPSBfbGlzdGVuZXJzW25hbWVdO1xuXG5cdFx0aWYobGlzdGVuZXJzKSB7XG5cdFx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0XHRhcmdzLnNoaWZ0KCk7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGlzdGVuZXJzW2ldLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfZ2V0Q3VycmVudFRpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH0sXG5cdF9hcHBseUJnT3BhY2l0eSA9IGZ1bmN0aW9uKG9wYWNpdHkpIHtcblx0XHRfYmdPcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRzZWxmLmJnLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5ICogX29wdGlvbnMuYmdPcGFjaXR5O1xuXHR9LFxuXG5cdF9hcHBseVpvb21UcmFuc2Zvcm0gPSBmdW5jdGlvbihzdHlsZU9iaix4LHksem9vbSxpdGVtKSB7XG5cdFx0aWYoIV9yZW5kZXJNYXhSZXNvbHV0aW9uIHx8IChpdGVtICYmIGl0ZW0gIT09IHNlbGYuY3Vyckl0ZW0pICkge1xuXHRcdFx0em9vbSA9IHpvb20gLyAoaXRlbSA/IGl0ZW0uZml0UmF0aW8gOiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKTtcdFxuXHRcdH1cblx0XHRcdFxuXHRcdHN0eWxlT2JqW190cmFuc2Zvcm1LZXldID0gX3RyYW5zbGF0ZVByZWZpeCArIHggKyAncHgsICcgKyB5ICsgJ3B4JyArIF90cmFuc2xhdGVTdWZpeCArICcgc2NhbGUoJyArIHpvb20gKyAnKSc7XG5cdH0sXG5cdF9hcHBseUN1cnJlbnRab29tUGFuID0gZnVuY3Rpb24oIGFsbG93UmVuZGVyUmVzb2x1dGlvbiApIHtcblx0XHRpZihfY3Vyclpvb21FbGVtZW50U3R5bGUpIHtcblxuXHRcdFx0aWYoYWxsb3dSZW5kZXJSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdGlmKF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRcdGlmKCFfcmVuZGVyTWF4UmVzb2x1dGlvbikge1xuXHRcdFx0XHRcdFx0X3NldEltYWdlU2l6ZShzZWxmLmN1cnJJdGVtLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmKF9yZW5kZXJNYXhSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKHNlbGYuY3Vyckl0ZW0pO1xuXHRcdFx0XHRcdFx0X3JlbmRlck1heFJlc29sdXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRfYXBwbHlab29tVHJhbnNmb3JtKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSwgX3Bhbk9mZnNldC54LCBfcGFuT2Zmc2V0LnksIF9jdXJyWm9vbUxldmVsKTtcblx0XHR9XG5cdH0sXG5cdF9hcHBseVpvb21QYW5Ub0l0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoaXRlbS5jb250YWluZXIpIHtcblxuXHRcdFx0X2FwcGx5Wm9vbVRyYW5zZm9ybShpdGVtLmNvbnRhaW5lci5zdHlsZSwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24ueCwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24ueSwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsWm9vbUxldmVsLFxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0pO1xuXHRcdH1cblx0fSxcblx0X3NldFRyYW5zbGF0ZVggPSBmdW5jdGlvbih4LCBlbFN0eWxlKSB7XG5cdFx0ZWxTdHlsZVtfdHJhbnNmb3JtS2V5XSA9IF90cmFuc2xhdGVQcmVmaXggKyB4ICsgJ3B4LCAwcHgnICsgX3RyYW5zbGF0ZVN1Zml4O1xuXHR9LFxuXHRfbW92ZU1haW5TY3JvbGwgPSBmdW5jdGlvbih4LCBkcmFnZ2luZykge1xuXG5cdFx0aWYoIV9vcHRpb25zLmxvb3AgJiYgZHJhZ2dpbmcpIHtcblx0XHRcdHZhciBuZXdTbGlkZUluZGV4T2Zmc2V0ID0gX2N1cnJlbnRJdGVtSW5kZXggKyAoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4IC0geCkgLyBfc2xpZGVTaXplLngsXG5cdFx0XHRcdGRlbHRhID0gTWF0aC5yb3VuZCh4IC0gX21haW5TY3JvbGxQb3MueCk7XG5cblx0XHRcdGlmKCAobmV3U2xpZGVJbmRleE9mZnNldCA8IDAgJiYgZGVsdGEgPiAwKSB8fCBcblx0XHRcdFx0KG5ld1NsaWRlSW5kZXhPZmZzZXQgPj0gX2dldE51bUl0ZW1zKCkgLSAxICYmIGRlbHRhIDwgMCkgKSB7XG5cdFx0XHRcdHggPSBfbWFpblNjcm9sbFBvcy54ICsgZGVsdGEgKiBfb3B0aW9ucy5tYWluU2Nyb2xsRW5kRnJpY3Rpb247XG5cdFx0XHR9IFxuXHRcdH1cblx0XHRcblx0XHRfbWFpblNjcm9sbFBvcy54ID0geDtcblx0XHRfc2V0VHJhbnNsYXRlWCh4LCBfY29udGFpbmVyU3R5bGUpO1xuXHR9LFxuXHRfY2FsY3VsYXRlUGFuT2Zmc2V0ID0gZnVuY3Rpb24oYXhpcywgem9vbUxldmVsKSB7XG5cdFx0dmFyIG0gPSBfbWlkWm9vbVBvaW50W2F4aXNdIC0gX29mZnNldFtheGlzXTtcblx0XHRyZXR1cm4gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdICsgX2N1cnJQYW5EaXN0W2F4aXNdICsgbSAtIG0gKiAoIHpvb21MZXZlbCAvIF9zdGFydFpvb21MZXZlbCApO1xuXHR9LFxuXHRcblx0X2VxdWFsaXplUG9pbnRzID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0cDEueCA9IHAyLng7XG5cdFx0cDEueSA9IHAyLnk7XG5cdFx0aWYocDIuaWQpIHtcblx0XHRcdHAxLmlkID0gcDIuaWQ7XG5cdFx0fVxuXHR9LFxuXHRfcm91bmRQb2ludCA9IGZ1bmN0aW9uKHApIHtcblx0XHRwLnggPSBNYXRoLnJvdW5kKHAueCk7XG5cdFx0cC55ID0gTWF0aC5yb3VuZChwLnkpO1xuXHR9LFxuXG5cdF9tb3VzZU1vdmVUaW1lb3V0ID0gbnVsbCxcblx0X29uRmlyc3RNb3VzZU1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBXYWl0IHVudGlsIG1vdXNlIG1vdmUgZXZlbnQgaXMgZmlyZWQgYXQgbGVhc3QgdHdpY2UgZHVyaW5nIDEwMG1zXG5cdFx0Ly8gV2UgZG8gdGhpcywgYmVjYXVzZSBzb21lIG1vYmlsZSBicm93c2VycyB0cmlnZ2VyIGl0IG9uIHRvdWNoc3RhcnRcblx0XHRpZihfbW91c2VNb3ZlVGltZW91dCApIHsgXG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uRmlyc3RNb3VzZU1vdmUpO1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0taGFzX21vdXNlJyk7XG5cdFx0XHRfb3B0aW9ucy5tb3VzZVVzZWQgPSB0cnVlO1xuXHRcdFx0X3Nob3V0KCdtb3VzZVVzZWQnKTtcblx0XHR9XG5cdFx0X21vdXNlTW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X21vdXNlTW92ZVRpbWVvdXQgPSBudWxsO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0X2JpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ2tleWRvd24nLCBzZWxmKTtcblxuXHRcdGlmKF9mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdC8vIGRvbid0IGJpbmQgY2xpY2sgZXZlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRyYW5zZm9ybSAobW9zdGx5IElFOClcblx0XHRcdGZyYW1ld29yay5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgJ2NsaWNrJywgc2VsZik7XG5cdFx0fVxuXHRcdFxuXG5cdFx0aWYoIV9vcHRpb25zLm1vdXNlVXNlZCkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cdFx0fVxuXG5cdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCAncmVzaXplIHNjcm9sbCBvcmllbnRhdGlvbmNoYW5nZScsIHNlbGYpO1xuXG5cdFx0X3Nob3V0KCdiaW5kRXZlbnRzJyk7XG5cdH0sXG5cblx0X3VuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAncmVzaXplIHNjcm9sbCBvcmllbnRhdGlvbmNoYW5nZScsIHNlbGYpO1xuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAnc2Nyb2xsJywgX2dsb2JhbEV2ZW50SGFuZGxlcnMuc2Nyb2xsKTtcblx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIHNlbGYpO1xuXHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cblx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtKSB7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgJ2NsaWNrJywgc2VsZik7XG5cdFx0fVxuXG5cdFx0aWYoX2lzRHJhZ2dpbmcpIHtcblx0XHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblx0XHR9XG5cblx0XHRjbGVhclRpbWVvdXQoX29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCk7XG5cblx0XHRfc2hvdXQoJ3VuYmluZEV2ZW50cycpO1xuXHR9LFxuXHRcblx0X2NhbGN1bGF0ZVBhbkJvdW5kcyA9IGZ1bmN0aW9uKHpvb21MZXZlbCwgdXBkYXRlKSB7XG5cdFx0dmFyIGJvdW5kcyA9IF9jYWxjdWxhdGVJdGVtU2l6ZSggc2VsZi5jdXJySXRlbSwgX3ZpZXdwb3J0U2l6ZSwgem9vbUxldmVsICk7XG5cdFx0aWYodXBkYXRlKSB7XG5cdFx0XHRfY3VyclBhbkJvdW5kcyA9IGJvdW5kcztcblx0XHR9XG5cdFx0cmV0dXJuIGJvdW5kcztcblx0fSxcblx0XG5cdF9nZXRNaW5ab29tTGV2ZWwgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoIWl0ZW0pIHtcblx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHR9LFxuXHRfZ2V0TWF4Wm9vbUxldmVsID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRpdGVtID0gc2VsZi5jdXJySXRlbTtcblx0XHR9XG5cdFx0cmV0dXJuIGl0ZW0udyA+IDAgPyBfb3B0aW9ucy5tYXhTcHJlYWRab29tIDogMTtcblx0fSxcblxuXHQvLyBSZXR1cm4gdHJ1ZSBpZiBvZmZzZXQgaXMgb3V0IG9mIHRoZSBib3VuZHNcblx0X21vZGlmeURlc3RQYW5PZmZzZXQgPSBmdW5jdGlvbihheGlzLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKSB7XG5cdFx0aWYoZGVzdFpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gc2VsZi5jdXJySXRlbS5pbml0aWFsUG9zaXRpb25bYXhpc107XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoYXhpcywgZGVzdFpvb21MZXZlbCk7IFxuXG5cdFx0XHRpZihkZXN0UGFuT2Zmc2V0W2F4aXNdID4gZGVzdFBhbkJvdW5kcy5taW5bYXhpc10pIHtcblx0XHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IGRlc3RQYW5Cb3VuZHMubWluW2F4aXNdO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZihkZXN0UGFuT2Zmc2V0W2F4aXNdIDwgZGVzdFBhbkJvdW5kcy5tYXhbYXhpc10gKSB7XG5cdFx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBkZXN0UGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHRfc2V0dXBUcmFuc2Zvcm1zID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfdHJhbnNmb3JtS2V5KSB7XG5cdFx0XHQvLyBzZXR1cCAzZCB0cmFuc2Zvcm1zXG5cdFx0XHR2YXIgYWxsb3czZFRyYW5zZm9ybSA9IF9mZWF0dXJlcy5wZXJzcGVjdGl2ZSAmJiAhX2xpa2VseVRvdWNoRGV2aWNlO1xuXHRcdFx0X3RyYW5zbGF0ZVByZWZpeCA9ICd0cmFuc2xhdGUnICsgKGFsbG93M2RUcmFuc2Zvcm0gPyAnM2QoJyA6ICcoJyk7XG5cdFx0XHRfdHJhbnNsYXRlU3VmaXggPSBfZmVhdHVyZXMucGVyc3BlY3RpdmUgPyAnLCAwcHgpJyA6ICcpJztcdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE92ZXJyaWRlIHpvb20vcGFuL21vdmUgZnVuY3Rpb25zIGluIGNhc2Ugb2xkIGJyb3dzZXIgaXMgdXNlZCAobW9zdCBsaWtlbHkgSUUpXG5cdFx0Ly8gKHNvIHRoZXkgdXNlIGxlZnQvdG9wL3dpZHRoL2hlaWdodCwgaW5zdGVhZCBvZiBDU1MgdHJhbnNmb3JtKVxuXHRcblx0XHRfdHJhbnNmb3JtS2V5ID0gJ2xlZnQnO1xuXHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWllJyk7XG5cblx0XHRfc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKHgsIGVsU3R5bGUpIHtcblx0XHRcdGVsU3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdH07XG5cdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0dmFyIHpvb21SYXRpbyA9IGl0ZW0uZml0UmF0aW8gPiAxID8gMSA6IGl0ZW0uZml0UmF0aW8sXG5cdFx0XHRcdHMgPSBpdGVtLmNvbnRhaW5lci5zdHlsZSxcblx0XHRcdFx0dyA9IHpvb21SYXRpbyAqIGl0ZW0udyxcblx0XHRcdFx0aCA9IHpvb21SYXRpbyAqIGl0ZW0uaDtcblxuXHRcdFx0cy53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0cy5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHRcdHMubGVmdCA9IGl0ZW0uaW5pdGlhbFBvc2l0aW9uLnggKyAncHgnO1xuXHRcdFx0cy50b3AgPSBpdGVtLmluaXRpYWxQb3NpdGlvbi55ICsgJ3B4JztcblxuXHRcdH07XG5cdFx0X2FwcGx5Q3VycmVudFpvb21QYW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXG5cdFx0XHRcdHZhciBzID0gX2N1cnJab29tRWxlbWVudFN0eWxlLFxuXHRcdFx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtLFxuXHRcdFx0XHRcdHpvb21SYXRpbyA9IGl0ZW0uZml0UmF0aW8gPiAxID8gMSA6IGl0ZW0uZml0UmF0aW8sXG5cdFx0XHRcdFx0dyA9IHpvb21SYXRpbyAqIGl0ZW0udyxcblx0XHRcdFx0XHRoID0gem9vbVJhdGlvICogaXRlbS5oO1xuXG5cdFx0XHRcdHMud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdFx0cy5oZWlnaHQgPSBoICsgJ3B4JztcblxuXG5cdFx0XHRcdHMubGVmdCA9IF9wYW5PZmZzZXQueCArICdweCc7XG5cdFx0XHRcdHMudG9wID0gX3Bhbk9mZnNldC55ICsgJ3B4Jztcblx0XHRcdH1cblx0XHRcdFxuXHRcdH07XG5cdH0sXG5cblx0X29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIga2V5ZG93bkFjdGlvbiA9ICcnO1xuXHRcdGlmKF9vcHRpb25zLmVzY0tleSAmJiBlLmtleUNvZGUgPT09IDI3KSB7IFxuXHRcdFx0a2V5ZG93bkFjdGlvbiA9ICdjbG9zZSc7XG5cdFx0fSBlbHNlIGlmKF9vcHRpb25zLmFycm93S2V5cykge1xuXHRcdFx0aWYoZS5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0XHRrZXlkb3duQWN0aW9uID0gJ3ByZXYnO1xuXHRcdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMzkpIHsgXG5cdFx0XHRcdGtleWRvd25BY3Rpb24gPSAnbmV4dCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoa2V5ZG93bkFjdGlvbikge1xuXHRcdFx0Ly8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc3BlY2lhbCBrZXkgcHJlc3NlZCB0byBwcmV2ZW50IGZyb20gb3ZlcnJpZGluZyBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uc1xuXHRcdFx0Ly8gZS5nLiBpbiBDaHJvbWUgb24gTWFjIGNtZCthcnJvdy1sZWZ0IHJldHVybnMgdG8gcHJldmlvdXMgcGFnZVxuXHRcdFx0aWYoICFlLmN0cmxLZXkgJiYgIWUuYWx0S2V5ICYmICFlLnNoaWZ0S2V5ICYmICFlLm1ldGFLZXkgKSB7XG5cdFx0XHRcdGlmKGUucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXHRcdFx0XHR9IFxuXHRcdFx0XHRzZWxmW2tleWRvd25BY3Rpb25dKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdF9vbkdsb2JhbENsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdGlmKCFlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZG9uJ3QgYWxsb3cgY2xpY2sgZXZlbnQgdG8gcGFzcyB0aHJvdWdoIHdoZW4gdHJpZ2dlcmluZyBhZnRlciBkcmFnIG9yIHNvbWUgb3RoZXIgZ2VzdHVyZVxuXHRcdGlmKF9tb3ZlZCB8fCBfem9vbVN0YXJ0ZWQgfHwgX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cblx0X3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQgPSBmdW5jdGlvbigpIHtcblx0XHRzZWxmLnNldFNjcm9sbE9mZnNldCgwLCBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpKTtcdFx0XG5cdH07XG5cdFxuXG5cblx0XG5cblxuXG4vLyBNaWNybyBhbmltYXRpb24gZW5naW5lXG52YXIgX2FuaW1hdGlvbnMgPSB7fSxcblx0X251bUFuaW1hdGlvbnMgPSAwLFxuXHRfc3RvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0aWYoX2FuaW1hdGlvbnNbbmFtZV0ucmFmKSB7XG5cdFx0XHRcdF9jYW5jZWxBRiggX2FuaW1hdGlvbnNbbmFtZV0ucmFmICk7XG5cdFx0XHR9XG5cdFx0XHRfbnVtQW5pbWF0aW9ucy0tO1xuXHRcdFx0ZGVsZXRlIF9hbmltYXRpb25zW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYoX2FuaW1hdGlvbnNbbmFtZV0pIHtcblx0XHRcdF9zdG9wQW5pbWF0aW9uKG5hbWUpO1xuXHRcdH1cblx0XHRpZighX2FuaW1hdGlvbnNbbmFtZV0pIHtcblx0XHRcdF9udW1BbmltYXRpb25zKys7XG5cdFx0XHRfYW5pbWF0aW9uc1tuYW1lXSA9IHt9O1xuXHRcdH1cblx0fSxcblx0X3N0b3BBbGxBbmltYXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBfYW5pbWF0aW9ucykge1xuXG5cdFx0XHRpZiggX2FuaW1hdGlvbnMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcblx0XHRcdFx0X3N0b3BBbmltYXRpb24ocHJvcCk7XG5cdFx0XHR9IFxuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRfYW5pbWF0ZVByb3AgPSBmdW5jdGlvbihuYW1lLCBiLCBlbmRQcm9wLCBkLCBlYXNpbmdGbiwgb25VcGRhdGUsIG9uQ29tcGxldGUpIHtcblx0XHR2YXIgc3RhcnRBbmltVGltZSA9IF9nZXRDdXJyZW50VGltZSgpLCB0O1xuXHRcdF9yZWdpc3RlclN0YXJ0QW5pbWF0aW9uKG5hbWUpO1xuXG5cdFx0dmFyIGFuaW1sb29wID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmICggX2FuaW1hdGlvbnNbbmFtZV0gKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHR0ID0gX2dldEN1cnJlbnRUaW1lKCkgLSBzdGFydEFuaW1UaW1lOyAvLyB0aW1lIGRpZmZcblx0XHRcdFx0Ly9iIC0gYmVnaW5uaW5nIChzdGFydCBwcm9wKVxuXHRcdFx0XHQvL2QgLSBhbmltIGR1cmF0aW9uXG5cblx0XHRcdFx0aWYgKCB0ID49IGQgKSB7XG5cdFx0XHRcdFx0X3N0b3BBbmltYXRpb24obmFtZSk7XG5cdFx0XHRcdFx0b25VcGRhdGUoZW5kUHJvcCk7XG5cdFx0XHRcdFx0aWYob25Db21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0b25VcGRhdGUoIChlbmRQcm9wIC0gYikgKiBlYXNpbmdGbih0L2QpICsgYiApO1xuXG5cdFx0XHRcdF9hbmltYXRpb25zW25hbWVdLnJhZiA9IF9yZXF1ZXN0QUYoYW5pbWxvb3ApO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0YW5pbWxvb3AoKTtcblx0fTtcblx0XG5cblxudmFyIHB1YmxpY01ldGhvZHMgPSB7XG5cblx0Ly8gbWFrZSBhIGZldyBsb2NhbCB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucyBwdWJsaWNcblx0c2hvdXQ6IF9zaG91dCxcblx0bGlzdGVuOiBfbGlzdGVuLFxuXHR2aWV3cG9ydFNpemU6IF92aWV3cG9ydFNpemUsXG5cdG9wdGlvbnM6IF9vcHRpb25zLFxuXG5cdGlzTWFpblNjcm9sbEFuaW1hdGluZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9tYWluU2Nyb2xsQW5pbWF0aW5nO1xuXHR9LFxuXHRnZXRab29tTGV2ZWw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY3Vyclpvb21MZXZlbDtcblx0fSxcblx0Z2V0Q3VycmVudEluZGV4OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2N1cnJlbnRJdGVtSW5kZXg7XG5cdH0sXG5cdGlzRHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaXNEcmFnZ2luZztcblx0fSxcdFxuXHRpc1pvb21pbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaXNab29taW5nO1xuXHR9LFxuXHRzZXRTY3JvbGxPZmZzZXQ6IGZ1bmN0aW9uKHgseSkge1xuXHRcdF9vZmZzZXQueCA9IHg7XG5cdFx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZID0gX29mZnNldC55ID0geTtcblx0XHRfc2hvdXQoJ3VwZGF0ZVNjcm9sbE9mZnNldCcsIF9vZmZzZXQpO1xuXHR9LFxuXHRhcHBseVpvb21QYW46IGZ1bmN0aW9uKHpvb21MZXZlbCxwYW5YLHBhblksYWxsb3dSZW5kZXJSZXNvbHV0aW9uKSB7XG5cdFx0X3Bhbk9mZnNldC54ID0gcGFuWDtcblx0XHRfcGFuT2Zmc2V0LnkgPSBwYW5ZO1xuXHRcdF9jdXJyWm9vbUxldmVsID0gem9vbUxldmVsO1xuXHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCBhbGxvd1JlbmRlclJlc29sdXRpb24gKTtcblx0fSxcblxuXHRpbml0OiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9pc09wZW4gfHwgX2lzRGVzdHJveWluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBpO1xuXG5cdFx0c2VsZi5mcmFtZXdvcmsgPSBmcmFtZXdvcms7IC8vIGJhc2ljIGZ1bmN0aW9uYWxpdHlcblx0XHRzZWxmLnRlbXBsYXRlID0gdGVtcGxhdGU7IC8vIHJvb3QgRE9NIGVsZW1lbnQgb2YgUGhvdG9Td2lwZVxuXHRcdHNlbGYuYmcgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHRlbXBsYXRlLCAncHN3cF9fYmcnKTtcblxuXHRcdF9pbml0YWxDbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XG5cdFx0X2lzT3BlbiA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdF9mZWF0dXJlcyA9IGZyYW1ld29yay5kZXRlY3RGZWF0dXJlcygpO1xuXHRcdF9yZXF1ZXN0QUYgPSBfZmVhdHVyZXMucmFmO1xuXHRcdF9jYW5jZWxBRiA9IF9mZWF0dXJlcy5jYWY7XG5cdFx0X3RyYW5zZm9ybUtleSA9IF9mZWF0dXJlcy50cmFuc2Zvcm07XG5cdFx0X29sZElFID0gX2ZlYXR1cmVzLm9sZElFO1xuXHRcdFxuXHRcdHNlbGYuc2Nyb2xsV3JhcCA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3ModGVtcGxhdGUsICdwc3dwX19zY3JvbGwtd3JhcCcpO1xuXHRcdHNlbGYuY29udGFpbmVyID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhzZWxmLnNjcm9sbFdyYXAsICdwc3dwX19jb250YWluZXInKTtcblxuXHRcdF9jb250YWluZXJTdHlsZSA9IHNlbGYuY29udGFpbmVyLnN0eWxlOyAvLyBmb3IgZmFzdCBhY2Nlc3NcblxuXHRcdC8vIE9iamVjdHMgdGhhdCBob2xkIHNsaWRlcyAodGhlcmUgYXJlIG9ubHkgMyBpbiBET00pXG5cdFx0c2VsZi5pdGVtSG9sZGVycyA9IF9pdGVtSG9sZGVycyA9IFtcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblswXSAsIHdyYXA6MCwgaW5kZXg6IC0xfSxcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblsxXSAsIHdyYXA6MCwgaW5kZXg6IC0xfSxcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblsyXSAsIHdyYXA6MCwgaW5kZXg6IC0xfVxuXHRcdF07XG5cblx0XHQvLyBoaWRlIG5lYXJieSBpdGVtIGhvbGRlcnMgdW50aWwgaW5pdGlhbCB6b29tIGFuaW1hdGlvbiBmaW5pc2hlcyAodG8gYXZvaWQgZXh0cmEgUGFpbnRzKVxuXHRcdF9pdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gX2l0ZW1Ib2xkZXJzWzJdLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHRfc2V0dXBUcmFuc2Zvcm1zKCk7XG5cblx0XHQvLyBTZXR1cCBnbG9iYWwgZXZlbnRzXG5cdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnMgPSB7XG5cdFx0XHRyZXNpemU6IHNlbGYudXBkYXRlU2l6ZSxcblxuXHRcdFx0Ly8gRml4ZXM6IGlPUyAxMC4zIHJlc2l6ZSBldmVudFxuXHRcdFx0Ly8gZG9lcyBub3QgdXBkYXRlIHNjcm9sbFdyYXAuY2xpZW50V2lkdGggaW5zdGFudGx5IGFmdGVyIHJlc2l6ZVxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvUGhvdG9Td2lwZS9pc3N1ZXMvMTMxNVxuXHRcdFx0b3JpZW50YXRpb25jaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoX29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCk7XG5cdFx0XHRcdF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKF92aWV3cG9ydFNpemUueCAhPT0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9LFxuXHRcdFx0c2Nyb2xsOiBfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCxcblx0XHRcdGtleWRvd246IF9vbktleURvd24sXG5cdFx0XHRjbGljazogX29uR2xvYmFsQ2xpY2tcblx0XHR9O1xuXG5cdFx0Ly8gZGlzYWJsZSBzaG93L2hpZGUgZWZmZWN0cyBvbiBvbGQgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IENTUyBhbmltYXRpb25zIG9yIHRyYW5zZm9ybXMsIFxuXHRcdC8vIG9sZCBJT1MsIEFuZHJvaWQgYW5kIE9wZXJhIG1vYmlsZS4gQmxhY2tiZXJyeSBzZWVtcyB0byB3b3JrIGZpbmUsIGV2ZW4gb2xkZXIgbW9kZWxzLlxuXHRcdHZhciBvbGRQaG9uZSA9IF9mZWF0dXJlcy5pc09sZElPU1Bob25lIHx8IF9mZWF0dXJlcy5pc09sZEFuZHJvaWQgfHwgX2ZlYXR1cmVzLmlzTW9iaWxlT3BlcmE7XG5cdFx0aWYoIV9mZWF0dXJlcy5hbmltYXRpb25OYW1lIHx8ICFfZmVhdHVyZXMudHJhbnNmb3JtIHx8IG9sZFBob25lKSB7XG5cdFx0XHRfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24gPSBfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuXHRcdH1cblxuXHRcdC8vIGluaXQgbW9kdWxlc1xuXHRcdGZvcihpID0gMDsgaSA8IF9tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzZWxmWydpbml0JyArIF9tb2R1bGVzW2ldXSgpO1xuXHRcdH1cblx0XHRcblx0XHQvLyBpbml0XG5cdFx0aWYoVWlDbGFzcykge1xuXHRcdFx0dmFyIHVpID0gc2VsZi51aSA9IG5ldyBVaUNsYXNzKHNlbGYsIGZyYW1ld29yayk7XG5cdFx0XHR1aS5pbml0KCk7XG5cdFx0fVxuXG5cdFx0X3Nob3V0KCdmaXJzdFVwZGF0ZScpO1xuXHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXggfHwgX29wdGlvbnMuaW5kZXggfHwgMDtcblx0XHQvLyB2YWxpZGF0ZSBpbmRleFxuXHRcdGlmKCBpc05hTihfY3VycmVudEl0ZW1JbmRleCkgfHwgX2N1cnJlbnRJdGVtSW5kZXggPCAwIHx8IF9jdXJyZW50SXRlbUluZGV4ID49IF9nZXROdW1JdGVtcygpICkge1xuXHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSAwO1xuXHRcdH1cblx0XHRzZWxmLmN1cnJJdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblxuXHRcdFxuXHRcdGlmKF9mZWF0dXJlcy5pc09sZElPU1Bob25lIHx8IF9mZWF0dXJlcy5pc09sZEFuZHJvaWQpIHtcblx0XHRcdF9pc0ZpeGVkUG9zaXRpb24gPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGVtcGxhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdGlmKF9vcHRpb25zLm1vZGFsKSB7XG5cdFx0XHRpZighX2lzRml4ZWRQb3NpdGlvbikge1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnRvcCA9IGZyYW1ld29yay5nZXRTY3JvbGxZKCkgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9jdXJyZW50V2luZG93U2Nyb2xsWSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfc2hvdXQoJ2luaXRpYWxMYXlvdXQnKTtcblx0XHRcdF9jdXJyZW50V2luZG93U2Nyb2xsWSA9IF9pbml0YWxXaW5kb3dTY3JvbGxZID0gZnJhbWV3b3JrLmdldFNjcm9sbFkoKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gYWRkIGNsYXNzZXMgdG8gcm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGVcblx0XHR2YXIgcm9vdENsYXNzZXMgPSAncHN3cC0tb3BlbiAnO1xuXHRcdGlmKF9vcHRpb25zLm1haW5DbGFzcykge1xuXHRcdFx0cm9vdENsYXNzZXMgKz0gX29wdGlvbnMubWFpbkNsYXNzICsgJyAnO1xuXHRcdH1cblx0XHRpZihfb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkpIHtcblx0XHRcdHJvb3RDbGFzc2VzICs9ICdwc3dwLS1hbmltYXRlX29wYWNpdHkgJztcblx0XHR9XG5cdFx0cm9vdENsYXNzZXMgKz0gX2xpa2VseVRvdWNoRGV2aWNlID8gJ3Bzd3AtLXRvdWNoJyA6ICdwc3dwLS1ub3RvdWNoJztcblx0XHRyb290Q2xhc3NlcyArPSBfZmVhdHVyZXMuYW5pbWF0aW9uTmFtZSA/ICcgcHN3cC0tY3NzX2FuaW1hdGlvbicgOiAnJztcblx0XHRyb290Q2xhc3NlcyArPSBfZmVhdHVyZXMuc3ZnID8gJyBwc3dwLS1zdmcnIDogJyc7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCByb290Q2xhc3Nlcyk7XG5cblx0XHRzZWxmLnVwZGF0ZVNpemUoKTtcblxuXHRcdC8vIGluaXRpYWwgdXBkYXRlXG5cdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXggPSAtMTtcblx0XHRfaW5kZXhEaWZmID0gbnVsbDtcblx0XHRmb3IoaSA9IDA7IGkgPCBOVU1fSE9MREVSUzsgaSsrKSB7XG5cdFx0XHRfc2V0VHJhbnNsYXRlWCggKGkrX2NvbnRhaW5lclNoaWZ0SW5kZXgpICogX3NsaWRlU2l6ZS54LCBfaXRlbUhvbGRlcnNbaV0uZWwuc3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKCFfb2xkSUUpIHtcblx0XHRcdGZyYW1ld29yay5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgX2Rvd25FdmVudHMsIHNlbGYpOyAvLyBubyBkcmFnZ2luZyBmb3Igb2xkIElFXG5cdFx0fVx0XG5cblx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbUluRW5kJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnNldENvbnRlbnQoX2l0ZW1Ib2xkZXJzWzBdLCBfY3VycmVudEl0ZW1JbmRleC0xKTtcblx0XHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMl0sIF9jdXJyZW50SXRlbUluZGV4KzEpO1xuXG5cdFx0XHRfaXRlbUhvbGRlcnNbMF0uZWwuc3R5bGUuZGlzcGxheSA9IF9pdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0aWYoX29wdGlvbnMuZm9jdXMpIHtcblx0XHRcdFx0Ly8gZm9jdXMgY2F1c2VzIGxheW91dCwgXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBsYWcgZHVyaW5nIHRoZSBhbmltYXRpb24sIFxuXHRcdFx0XHQvLyB0aGF0J3Mgd2h5IHdlIGRlbGF5IGl0IHVudGlsbCB0aGUgaW5pdGlhbCB6b29tIHRyYW5zaXRpb24gZW5kc1xuXHRcdFx0XHR0ZW1wbGF0ZS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdFx0IFxuXG5cdFx0XHRfYmluZEV2ZW50cygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gc2V0IGNvbnRlbnQgZm9yIGNlbnRlciBzbGlkZSAoZmlyc3QgdGltZSlcblx0XHRzZWxmLnNldENvbnRlbnQoX2l0ZW1Ib2xkZXJzWzFdLCBfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0XG5cdFx0c2VsZi51cGRhdGVDdXJySXRlbSgpO1xuXG5cdFx0X3Nob3V0KCdhZnRlckluaXQnKTtcblxuXHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uKSB7XG5cblx0XHRcdC8vIE9uIGFsbCB2ZXJzaW9ucyBvZiBpT1MgbG93ZXIgdGhhbiA4LjAsIHdlIGNoZWNrIHNpemUgb2Ygdmlld3BvcnQgZXZlcnkgc2Vjb25kLlxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBUaGlzIGlzIGRvbmUgdG8gZGV0ZWN0IHdoZW4gU2FmYXJpIHRvcCAmIGJvdHRvbSBiYXJzIGFwcGVhciwgXG5cdFx0XHQvLyBhcyB0aGlzIGFjdGlvbiBkb2Vzbid0IHRyaWdnZXIgYW55IGV2ZW50cyAobGlrZSByZXNpemUpLiBcblx0XHRcdC8vIFxuXHRcdFx0Ly8gT24gaU9TOCB0aGV5IGZpeGVkIHRoaXMuXG5cdFx0XHQvLyBcblx0XHRcdC8vIDEwIE5vdiAyMDE0OiBpT1MgNyB1c2FnZSB+NDAlLiBpT1MgOCB1c2FnZSA1NiUuXG5cdFx0XHRcblx0XHRcdF91cGRhdGVTaXplSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIV9udW1BbmltYXRpb25zICYmICFfaXNEcmFnZ2luZyAmJiAhX2lzWm9vbWluZyAmJiAoX2N1cnJab29tTGV2ZWwgPT09IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkgICkge1xuXHRcdFx0XHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS12aXNpYmxlJyk7XG5cdH0sXG5cblx0Ly8gQ2xvc2UgdGhlIGdhbGxlcnksIHRoZW4gZGVzdHJveSBpdFxuXHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIV9pc09wZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfaXNPcGVuID0gZmFsc2U7XG5cdFx0X2lzRGVzdHJveWluZyA9IHRydWU7XG5cdFx0X3Nob3V0KCdjbG9zZScpO1xuXHRcdF91bmJpbmRFdmVudHMoKTtcblxuXHRcdF9zaG93T3JIaWRlKHNlbGYuY3Vyckl0ZW0sIG51bGwsIHRydWUsIHNlbGYuZGVzdHJveSk7XG5cdH0sXG5cblx0Ly8gZGVzdHJveXMgdGhlIGdhbGxlcnkgKHVuYmluZHMgZXZlbnRzLCBjbGVhbnMgdXAgaW50ZXJ2YWxzIGFuZCB0aW1lb3V0cyB0byBhdm9pZCBtZW1vcnkgbGVha3MpXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdF9zaG91dCgnZGVzdHJveScpO1xuXG5cdFx0aWYoX3Nob3dPckhpZGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3Nob3dPckhpZGVUaW1lb3V0KTtcblx0XHR9XG5cdFx0XG5cdFx0dGVtcGxhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0dGVtcGxhdGUuY2xhc3NOYW1lID0gX2luaXRhbENsYXNzTmFtZTtcblxuXHRcdGlmKF91cGRhdGVTaXplSW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoX3VwZGF0ZVNpemVJbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0ZnJhbWV3b3JrLnVuYmluZChzZWxmLnNjcm9sbFdyYXAsIF9kb3duRXZlbnRzLCBzZWxmKTtcblxuXHRcdC8vIHdlIHVuYmluZCBzY3JvbGwgZXZlbnQgYXQgdGhlIGVuZCwgYXMgY2xvc2luZyBhbmltYXRpb24gbWF5IGRlcGVuZCBvbiBpdFxuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAnc2Nyb2xsJywgc2VsZik7XG5cblx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdF9saXN0ZW5lcnMgPSBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBQYW4gaW1hZ2UgdG8gcG9zaXRpb25cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFxuXHQgKiBAcGFyYW0ge051bWJlcn0geSAgICAgXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2UgV2lsbCBpZ25vcmUgYm91bmRzIGlmIHNldCB0byB0cnVlLlxuXHQgKi9cblx0cGFuVG86IGZ1bmN0aW9uKHgseSxmb3JjZSkge1xuXHRcdGlmKCFmb3JjZSkge1xuXHRcdFx0aWYoeCA+IF9jdXJyUGFuQm91bmRzLm1pbi54KSB7XG5cdFx0XHRcdHggPSBfY3VyclBhbkJvdW5kcy5taW4ueDtcblx0XHRcdH0gZWxzZSBpZih4IDwgX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0eCA9IF9jdXJyUGFuQm91bmRzLm1heC54O1xuXHRcdFx0fVxuXG5cdFx0XHRpZih5ID4gX2N1cnJQYW5Cb3VuZHMubWluLnkpIHtcblx0XHRcdFx0eSA9IF9jdXJyUGFuQm91bmRzLm1pbi55O1xuXHRcdFx0fSBlbHNlIGlmKHkgPCBfY3VyclBhbkJvdW5kcy5tYXgueSkge1xuXHRcdFx0XHR5ID0gX2N1cnJQYW5Cb3VuZHMubWF4Lnk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdF9wYW5PZmZzZXQueCA9IHg7XG5cdFx0X3Bhbk9mZnNldC55ID0geTtcblx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHR9LFxuXHRcblx0aGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdGlmKF9nbG9iYWxFdmVudEhhbmRsZXJzW2UudHlwZV0pIHtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW2UudHlwZV0oZSk7XG5cdFx0fVxuXHR9LFxuXG5cblx0Z29UbzogZnVuY3Rpb24oaW5kZXgpIHtcblxuXHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblxuXHRcdHZhciBkaWZmID0gaW5kZXggLSBfY3VycmVudEl0ZW1JbmRleDtcblx0XHRfaW5kZXhEaWZmID0gZGlmZjtcblxuXHRcdF9jdXJyZW50SXRlbUluZGV4ID0gaW5kZXg7XG5cdFx0c2VsZi5jdXJySXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cdFx0X2N1cnJQb3NpdGlvbkluZGV4IC09IGRpZmY7XG5cdFx0XG5cdFx0X21vdmVNYWluU2Nyb2xsKF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCk7XG5cdFx0XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblx0XHRfbWFpblNjcm9sbEFuaW1hdGluZyA9IGZhbHNlO1xuXG5cdFx0c2VsZi51cGRhdGVDdXJySXRlbSgpO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRzZWxmLmdvVG8oIF9jdXJyZW50SXRlbUluZGV4ICsgMSk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuZ29UbyggX2N1cnJlbnRJdGVtSW5kZXggLSAxKTtcblx0fSxcblxuXHQvLyB1cGRhdGUgY3VycmVudCB6b29tL3BhbiBvYmplY3RzXG5cdHVwZGF0ZUN1cnJab29tSXRlbTogZnVuY3Rpb24oZW11bGF0ZVNldENvbnRlbnQpIHtcblx0XHRpZihlbXVsYXRlU2V0Q29udGVudCkge1xuXHRcdFx0X3Nob3V0KCdiZWZvcmVDaGFuZ2UnLCAwKTtcblx0XHR9XG5cblx0XHQvLyBpdGVtSG9sZGVyWzFdIGlzIG1pZGRsZSAoY3VycmVudCkgaXRlbVxuXHRcdGlmKF9pdGVtSG9sZGVyc1sxXS5lbC5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdHZhciB6b29tRWxlbWVudCA9IF9pdGVtSG9sZGVyc1sxXS5lbC5jaGlsZHJlblswXTtcblx0XHRcdGlmKCBmcmFtZXdvcmsuaGFzQ2xhc3Moem9vbUVsZW1lbnQsICdwc3dwX196b29tLXdyYXAnKSApIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gem9vbUVsZW1lbnQuc3R5bGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1x0XG5cdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cblx0XHRfcGFuT2Zmc2V0LnggPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueDtcblx0XHRfcGFuT2Zmc2V0LnkgPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueTtcblxuXHRcdGlmKGVtdWxhdGVTZXRDb250ZW50KSB7XG5cdFx0XHRfc2hvdXQoJ2FmdGVyQ2hhbmdlJyk7XG5cdFx0fVxuXHR9LFxuXG5cblx0aW52YWxpZGF0ZUN1cnJJdGVtczogZnVuY3Rpb24oKSB7XG5cdFx0X2l0ZW1zTmVlZFVwZGF0ZSA9IHRydWU7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdGlmKCBfaXRlbUhvbGRlcnNbaV0uaXRlbSApIHtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzW2ldLml0ZW0ubmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHR1cGRhdGVDdXJySXRlbTogZnVuY3Rpb24oYmVmb3JlQW5pbWF0aW9uKSB7XG5cblx0XHRpZihfaW5kZXhEaWZmID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRpZmZBYnMgPSBNYXRoLmFicyhfaW5kZXhEaWZmKSxcblx0XHRcdHRlbXBIb2xkZXI7XG5cblx0XHRpZihiZWZvcmVBbmltYXRpb24gJiYgZGlmZkFicyA8IDIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblxuXHRcdHNlbGYuY3Vyckl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXHRcdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0X3Nob3V0KCdiZWZvcmVDaGFuZ2UnLCBfaW5kZXhEaWZmKTtcblxuXHRcdGlmKGRpZmZBYnMgPj0gTlVNX0hPTERFUlMpIHtcblx0XHRcdF9jb250YWluZXJTaGlmdEluZGV4ICs9IF9pbmRleERpZmYgKyAoX2luZGV4RGlmZiA+IDAgPyAtTlVNX0hPTERFUlMgOiBOVU1fSE9MREVSUyk7XG5cdFx0XHRkaWZmQWJzID0gTlVNX0hPTERFUlM7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkaWZmQWJzOyBpKyspIHtcblx0XHRcdGlmKF9pbmRleERpZmYgPiAwKSB7XG5cdFx0XHRcdHRlbXBIb2xkZXIgPSBfaXRlbUhvbGRlcnMuc2hpZnQoKTtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzW05VTV9IT0xERVJTLTFdID0gdGVtcEhvbGRlcjsgLy8gbW92ZSBmaXJzdCB0byBsYXN0XG5cblx0XHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXgrKztcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIChfY29udGFpbmVyU2hpZnRJbmRleCsyKSAqIF9zbGlkZVNpemUueCwgdGVtcEhvbGRlci5lbC5zdHlsZSk7XG5cdFx0XHRcdHNlbGYuc2V0Q29udGVudCh0ZW1wSG9sZGVyLCBfY3VycmVudEl0ZW1JbmRleCAtIGRpZmZBYnMgKyBpICsgMSArIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcEhvbGRlciA9IF9pdGVtSG9sZGVycy5wb3AoKTtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzLnVuc2hpZnQoIHRlbXBIb2xkZXIgKTsgLy8gbW92ZSBsYXN0IHRvIGZpcnN0XG5cblx0XHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXgtLTtcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIF9jb250YWluZXJTaGlmdEluZGV4ICogX3NsaWRlU2l6ZS54LCB0ZW1wSG9sZGVyLmVsLnN0eWxlKTtcblx0XHRcdFx0c2VsZi5zZXRDb250ZW50KHRlbXBIb2xkZXIsIF9jdXJyZW50SXRlbUluZGV4ICsgZGlmZkFicyAtIGkgLSAxIC0gMSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cblx0XHQvLyByZXNldCB6b29tL3BhbiBvbiBwcmV2aW91cyBpdGVtXG5cdFx0aWYoX2N1cnJab29tRWxlbWVudFN0eWxlICYmIE1hdGguYWJzKF9pbmRleERpZmYpID09PSAxKSB7XG5cblx0XHRcdHZhciBwcmV2SXRlbSA9IF9nZXRJdGVtQXQoX3ByZXZJdGVtSW5kZXgpO1xuXHRcdFx0aWYocHJldkl0ZW0uaW5pdGlhbFpvb21MZXZlbCAhPT0gX2N1cnJab29tTGV2ZWwpIHtcblx0XHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKHByZXZJdGVtICwgX3ZpZXdwb3J0U2l6ZSApO1xuXHRcdFx0XHRfc2V0SW1hZ2VTaXplKHByZXZJdGVtKTtcblx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSggcHJldkl0ZW0gKTsgXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIHJlc2V0IGRpZmYgYWZ0ZXIgdXBkYXRlXG5cdFx0X2luZGV4RGlmZiA9IDA7XG5cblx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSgpO1xuXG5cdFx0X3ByZXZJdGVtSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleDtcblxuXHRcdF9zaG91dCgnYWZ0ZXJDaGFuZ2UnKTtcblx0XHRcblx0fSxcblxuXG5cblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24oZm9yY2UpIHtcblx0XHRcblx0XHRpZighX2lzRml4ZWRQb3NpdGlvbiAmJiBfb3B0aW9ucy5tb2RhbCkge1xuXHRcdFx0dmFyIHdpbmRvd1Njcm9sbFkgPSBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpO1xuXHRcdFx0aWYoX2N1cnJlbnRXaW5kb3dTY3JvbGxZICE9PSB3aW5kb3dTY3JvbGxZKSB7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbFkgKyAncHgnO1xuXHRcdFx0XHRfY3VycmVudFdpbmRvd1Njcm9sbFkgPSB3aW5kb3dTY3JvbGxZO1xuXHRcdFx0fVxuXHRcdFx0aWYoIWZvcmNlICYmIF93aW5kb3dWaXNpYmxlU2l6ZS54ID09PSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBfd2luZG93VmlzaWJsZVNpemUueSA9PT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdF93aW5kb3dWaXNpYmxlU2l6ZS54ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRfd2luZG93VmlzaWJsZVNpemUueSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXHRcdFx0Ly90ZW1wbGF0ZS5zdHlsZS53aWR0aCA9IF93aW5kb3dWaXNpYmxlU2l6ZS54ICsgJ3B4Jztcblx0XHRcdHRlbXBsYXRlLnN0eWxlLmhlaWdodCA9IF93aW5kb3dWaXNpYmxlU2l6ZS55ICsgJ3B4Jztcblx0XHR9XG5cblxuXG5cdFx0X3ZpZXdwb3J0U2l6ZS54ID0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudFdpZHRoO1xuXHRcdF92aWV3cG9ydFNpemUueSA9IHNlbGYuc2Nyb2xsV3JhcC5jbGllbnRIZWlnaHQ7XG5cblx0XHRfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpO1xuXG5cdFx0X3NsaWRlU2l6ZS54ID0gX3ZpZXdwb3J0U2l6ZS54ICsgTWF0aC5yb3VuZChfdmlld3BvcnRTaXplLnggKiBfb3B0aW9ucy5zcGFjaW5nKTtcblx0XHRfc2xpZGVTaXplLnkgPSBfdmlld3BvcnRTaXplLnk7XG5cblx0XHRfbW92ZU1haW5TY3JvbGwoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KTtcblxuXHRcdF9zaG91dCgnYmVmb3JlUmVzaXplJyk7IC8vIGV2ZW4gbWF5IGJlIHVzZWQgZm9yIGV4YW1wbGUgdG8gc3dpdGNoIGltYWdlIHNvdXJjZXNcblxuXG5cdFx0Ly8gZG9uJ3QgcmUtY2FsY3VsYXRlIHNpemUgb24gaW5pdGFsIHNpemUgdXBkYXRlXG5cdFx0aWYoX2NvbnRhaW5lclNoaWZ0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR2YXIgaG9sZGVyLFxuXHRcdFx0XHRpdGVtLFxuXHRcdFx0XHRoSW5kZXg7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBOVU1fSE9MREVSUzsgaSsrKSB7XG5cdFx0XHRcdGhvbGRlciA9IF9pdGVtSG9sZGVyc1tpXTtcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIChpK19jb250YWluZXJTaGlmdEluZGV4KSAqIF9zbGlkZVNpemUueCwgaG9sZGVyLmVsLnN0eWxlKTtcblxuXHRcdFx0XHRoSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleCtpLTE7XG5cblx0XHRcdFx0aWYoX29wdGlvbnMubG9vcCAmJiBfZ2V0TnVtSXRlbXMoKSA+IDIpIHtcblx0XHRcdFx0XHRoSW5kZXggPSBfZ2V0TG9vcGVkSWQoaEluZGV4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHVwZGF0ZSB6b29tIGxldmVsIG9uIGl0ZW1zIGFuZCByZWZyZXNoIHNvdXJjZSAoaWYgbmVlZHNVcGRhdGUpXG5cdFx0XHRcdGl0ZW0gPSBfZ2V0SXRlbUF0KCBoSW5kZXggKTtcblxuXHRcdFx0XHQvLyByZS1yZW5kZXIgZ2FsbGVyeSBpdGVtIGlmIGBuZWVkc1VwZGF0ZWAsXG5cdFx0XHRcdC8vIG9yIGRvZXNuJ3QgaGF2ZSBgYm91bmRzYCAoZW50aXJlbHkgbmV3IHNsaWRlIG9iamVjdClcblx0XHRcdFx0aWYoIGl0ZW0gJiYgKF9pdGVtc05lZWRVcGRhdGUgfHwgaXRlbS5uZWVkc1VwZGF0ZSB8fCAhaXRlbS5ib3VuZHMpICkge1xuXG5cdFx0XHRcdFx0c2VsZi5jbGVhblNsaWRlKCBpdGVtICk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2VsZi5zZXRDb250ZW50KCBob2xkZXIsIGhJbmRleCApO1xuXG5cdFx0XHRcdFx0Ly8gaWYgXCJjZW50ZXJcIiBzbGlkZVxuXHRcdFx0XHRcdGlmKGkgPT09IDEpIHtcblx0XHRcdFx0XHRcdHNlbGYuY3Vyckl0ZW0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0c2VsZi51cGRhdGVDdXJyWm9vbUl0ZW0odHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aXRlbS5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdH0gZWxzZSBpZihob2xkZXIuaW5kZXggPT09IC0xICYmIGhJbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0Ly8gYWRkIGNvbnRlbnQgZmlyc3QgdGltZVxuXHRcdFx0XHRcdHNlbGYuc2V0Q29udGVudCggaG9sZGVyLCBoSW5kZXggKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtICYmIGl0ZW0uY29udGFpbmVyKSB7XG5cdFx0XHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSggaXRlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0X2l0ZW1zTmVlZFVwZGF0ZSA9IGZhbHNlO1xuXHRcdH1cdFxuXG5cdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcblxuXHRcdGlmKF9jdXJyUGFuQm91bmRzKSB7XG5cdFx0XHRfcGFuT2Zmc2V0LnggPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueDtcblx0XHRcdF9wYW5PZmZzZXQueSA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci55O1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oIHRydWUgKTtcblx0XHR9XG5cdFx0XG5cdFx0X3Nob3V0KCdyZXNpemUnKTtcblx0fSxcblx0XG5cdC8vIFpvb20gY3VycmVudCBpdGVtIHRvXG5cdHpvb21UbzogZnVuY3Rpb24oZGVzdFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIHNwZWVkLCBlYXNpbmdGbiwgdXBkYXRlRm4pIHtcblx0XHQvKlxuXHRcdFx0aWYoZGVzdFpvb21MZXZlbCA9PT0gJ2ZpdCcpIHtcblx0XHRcdFx0ZGVzdFpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW87XG5cdFx0XHR9IGVsc2UgaWYoZGVzdFpvb21MZXZlbCA9PT0gJ2ZpbGwnKSB7XG5cdFx0XHRcdGRlc3Rab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmZpbGxSYXRpbztcblx0XHRcdH1cblx0XHQqL1xuXG5cdFx0aWYoY2VudGVyUG9pbnQpIHtcblx0XHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X21pZFpvb21Qb2ludC54ID0gTWF0aC5hYnMoY2VudGVyUG9pbnQueCkgLSBfcGFuT2Zmc2V0LnggO1xuXHRcdFx0X21pZFpvb21Qb2ludC55ID0gTWF0aC5hYnMoY2VudGVyUG9pbnQueSkgLSBfcGFuT2Zmc2V0LnkgO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc3RQYW5Cb3VuZHMgPSBfY2FsY3VsYXRlUGFuQm91bmRzKGRlc3Rab29tTGV2ZWwsIGZhbHNlKSxcblx0XHRcdGRlc3RQYW5PZmZzZXQgPSB7fTtcblxuXHRcdF9tb2RpZnlEZXN0UGFuT2Zmc2V0KCd4JywgZGVzdFBhbkJvdW5kcywgZGVzdFBhbk9mZnNldCwgZGVzdFpvb21MZXZlbCk7XG5cdFx0X21vZGlmeURlc3RQYW5PZmZzZXQoJ3knLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKTtcblxuXHRcdHZhciBpbml0aWFsWm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0dmFyIGluaXRpYWxQYW5PZmZzZXQgPSB7XG5cdFx0XHR4OiBfcGFuT2Zmc2V0LngsXG5cdFx0XHR5OiBfcGFuT2Zmc2V0Lnlcblx0XHR9O1xuXG5cdFx0X3JvdW5kUG9pbnQoZGVzdFBhbk9mZnNldCk7XG5cblx0XHR2YXIgb25VcGRhdGUgPSBmdW5jdGlvbihub3cpIHtcblx0XHRcdGlmKG5vdyA9PT0gMSkge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IGRlc3Rab29tTGV2ZWw7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IGRlc3RQYW5PZmZzZXQueDtcblx0XHRcdFx0X3Bhbk9mZnNldC55ID0gZGVzdFBhbk9mZnNldC55O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSAoZGVzdFpvb21MZXZlbCAtIGluaXRpYWxab29tTGV2ZWwpICogbm93ICsgaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0X3Bhbk9mZnNldC54ID0gKGRlc3RQYW5PZmZzZXQueCAtIGluaXRpYWxQYW5PZmZzZXQueCkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IChkZXN0UGFuT2Zmc2V0LnkgLSBpbml0aWFsUGFuT2Zmc2V0LnkpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC55O1xuXHRcdFx0fVxuXG5cdFx0XHRpZih1cGRhdGVGbikge1xuXHRcdFx0XHR1cGRhdGVGbihub3cpO1xuXHRcdFx0fVxuXG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiggbm93ID09PSAxICk7XG5cdFx0fTtcblxuXHRcdGlmKHNwZWVkKSB7XG5cdFx0XHRfYW5pbWF0ZVByb3AoJ2N1c3RvbVpvb21UbycsIDAsIDEsIHNwZWVkLCBlYXNpbmdGbiB8fCBmcmFtZXdvcmsuZWFzaW5nLnNpbmUuaW5PdXQsIG9uVXBkYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b25VcGRhdGUoMSk7XG5cdFx0fVxuXHR9XG5cblxufTtcblxuXG4vKj4+Y29yZSovXG5cbi8qPj5nZXN0dXJlcyovXG4vKipcbiAqIE1vdXNlL3RvdWNoL3BvaW50ZXIgZXZlbnQgaGFuZGxlcnMuXG4gKiBcbiAqIHNlcGFyYXRlZCBmcm9tIEBjb3JlLmpzIGZvciByZWFkYWJpbGl0eVxuICovXG5cbnZhciBNSU5fU1dJUEVfRElTVEFOQ0UgPSAzMCxcblx0RElSRUNUSU9OX0NIRUNLX09GRlNFVCA9IDEwOyAvLyBhbW91bnQgb2YgcGl4ZWxzIHRvIGRyYWcgdG8gZGV0ZXJtaW5lIGRpcmVjdGlvbiBvZiBzd2lwZVxuXG52YXIgX2dlc3R1cmVTdGFydFRpbWUsXG5cdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUsXG5cblx0Ly8gcG9vbCBvZiBvYmplY3RzIHRoYXQgYXJlIHVzZWQgZHVyaW5nIGRyYWdnaW5nIG9mIHpvb21pbmdcblx0cCA9IHt9LCAvLyBmaXJzdCBwb2ludFxuXHRwMiA9IHt9LCAvLyBzZWNvbmQgcG9pbnQgKGZvciB6b29tIGdlc3R1cmUpXG5cdGRlbHRhID0ge30sXG5cdF9jdXJyUG9pbnQgPSB7fSxcblx0X3N0YXJ0UG9pbnQgPSB7fSxcblx0X2N1cnJQb2ludGVycyA9IFtdLFxuXHRfc3RhcnRNYWluU2Nyb2xsUG9zID0ge30sXG5cdF9yZWxlYXNlQW5pbURhdGEsXG5cdF9wb3NQb2ludHMgPSBbXSwgLy8gYXJyYXkgb2YgcG9pbnRzIGR1cmluZyBkcmFnZ2luZywgdXNlZCB0byBkZXRlcm1pbmUgdHlwZSBvZiBnZXN0dXJlXG5cdF90ZW1wUG9pbnQgPSB7fSxcblxuXHRfaXNab29taW5nSW4sXG5cdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQsXG5cdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0LFxuXHRfY3Vyclpvb21lZEl0ZW1JbmRleCA9IDAsXG5cdF9jZW50ZXJQb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9sYXN0UmVsZWFzZVRpbWUgPSAwLFxuXHRfaXNEcmFnZ2luZywgLy8gYXQgbGVhc3Qgb25lIHBvaW50ZXIgaXMgZG93blxuXHRfaXNNdWx0aXRvdWNoLCAvLyBhdCBsZWFzdCB0d28gX3BvaW50ZXJzIGFyZSBkb3duXG5cdF96b29tU3RhcnRlZCwgLy8gem9vbSBsZXZlbCBjaGFuZ2VkIGR1cmluZyB6b29tIGdlc3R1cmVcblx0X21vdmVkLFxuXHRfZHJhZ0FuaW1GcmFtZSxcblx0X21haW5TY3JvbGxTaGlmdGVkLFxuXHRfY3VycmVudFBvaW50cywgLy8gYXJyYXkgb2YgY3VycmVudCB0b3VjaCBwb2ludHNcblx0X2lzWm9vbWluZyxcblx0X2N1cnJQb2ludHNEaXN0YW5jZSxcblx0X3N0YXJ0UG9pbnRzRGlzdGFuY2UsXG5cdF9jdXJyUGFuQm91bmRzLFxuXHRfbWFpblNjcm9sbFBvcyA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSxcblx0X21haW5TY3JvbGxBbmltYXRpbmcsIC8vIHRydWUsIGlmIGFuaW1hdGlvbiBhZnRlciBzd2lwZSBnZXN0dXJlIGlzIHJ1bm5pbmdcblx0X21pZFpvb21Qb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9jdXJyQ2VudGVyUG9pbnQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfZGlyZWN0aW9uLFxuXHRfaXNGaXJzdE1vdmUsXG5cdF9vcGFjaXR5Q2hhbmdlZCxcblx0X2JnT3BhY2l0eSxcblx0X3dhc092ZXJJbml0aWFsWm9vbSxcblxuXHRfaXNFcXVhbFBvaW50cyA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXHRcdHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XG5cdH0sXG5cdF9pc05lYXJieVBvaW50cyA9IGZ1bmN0aW9uKHRvdWNoMCwgdG91Y2gxKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRvdWNoMC54IC0gdG91Y2gxLngpIDwgRE9VQkxFX1RBUF9SQURJVVMgJiYgTWF0aC5hYnModG91Y2gwLnkgLSB0b3VjaDEueSkgPCBET1VCTEVfVEFQX1JBRElVUztcblx0fSxcblx0X2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0X3RlbXBQb2ludC54ID0gTWF0aC5hYnMoIHAxLnggLSBwMi54ICk7XG5cdFx0X3RlbXBQb2ludC55ID0gTWF0aC5hYnMoIHAxLnkgLSBwMi55ICk7XG5cdFx0cmV0dXJuIE1hdGguc3FydChfdGVtcFBvaW50LnggKiBfdGVtcFBvaW50LnggKyBfdGVtcFBvaW50LnkgKiBfdGVtcFBvaW50LnkpO1xuXHR9LFxuXHRfc3RvcERyYWdVcGRhdGVMb29wID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2RyYWdBbmltRnJhbWUpIHtcblx0XHRcdF9jYW5jZWxBRihfZHJhZ0FuaW1GcmFtZSk7XG5cdFx0XHRfZHJhZ0FuaW1GcmFtZSA9IG51bGw7XG5cdFx0fVxuXHR9LFxuXHRfZHJhZ1VwZGF0ZUxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0X2RyYWdBbmltRnJhbWUgPSBfcmVxdWVzdEFGKF9kcmFnVXBkYXRlTG9vcCk7XG5cdFx0XHRfcmVuZGVyTW92ZW1lbnQoKTtcblx0XHR9XG5cdH0sXG5cdF9jYW5QYW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gIShfb3B0aW9ucy5zY2FsZU1vZGUgPT09ICdmaXQnICYmIF9jdXJyWm9vbUxldmVsID09PSAgc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKTtcblx0fSxcblx0XG5cdC8vIGZpbmQgdGhlIGNsb3Nlc3QgcGFyZW50IERPTSBlbGVtZW50XG5cdF9jbG9zZXN0RWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBmbikge1xuXHQgIFx0aWYoIWVsIHx8IGVsID09PSBkb2N1bWVudCkge1xuXHQgIFx0XHRyZXR1cm4gZmFsc2U7XG5cdCAgXHR9XG5cblx0ICBcdC8vIGRvbid0IHNlYXJjaCBlbGVtZW50cyBhYm92ZSBwc3dwX19zY3JvbGwtd3JhcFxuXHQgIFx0aWYoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpICYmIGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmRleE9mKCdwc3dwX19zY3JvbGwtd3JhcCcpID4gLTEgKSB7XG5cdCAgXHRcdHJldHVybiBmYWxzZTtcblx0ICBcdH1cblxuXHQgIFx0aWYoIGZuKGVsKSApIHtcblx0ICBcdFx0cmV0dXJuIGVsO1xuXHQgIFx0fVxuXG5cdCAgXHRyZXR1cm4gX2Nsb3Nlc3RFbGVtZW50KGVsLnBhcmVudE5vZGUsIGZuKTtcblx0fSxcblxuXHRfcHJldmVudE9iaiA9IHt9LFxuXHRfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91ciA9IGZ1bmN0aW9uKGUsIGlzRG93bikge1xuXHQgICAgX3ByZXZlbnRPYmoucHJldmVudCA9ICFfY2xvc2VzdEVsZW1lbnQoZS50YXJnZXQsIF9vcHRpb25zLmlzQ2xpY2thYmxlRWxlbWVudCk7XG5cblx0XHRfc2hvdXQoJ3ByZXZlbnREcmFnRXZlbnQnLCBlLCBpc0Rvd24sIF9wcmV2ZW50T2JqKTtcblx0XHRyZXR1cm4gX3ByZXZlbnRPYmoucHJldmVudDtcblxuXHR9LFxuXHRfY29udmVydFRvdWNoVG9Qb2ludCA9IGZ1bmN0aW9uKHRvdWNoLCBwKSB7XG5cdFx0cC54ID0gdG91Y2gucGFnZVg7XG5cdFx0cC55ID0gdG91Y2gucGFnZVk7XG5cdFx0cC5pZCA9IHRvdWNoLmlkZW50aWZpZXI7XG5cdFx0cmV0dXJuIHA7XG5cdH0sXG5cdF9maW5kQ2VudGVyT2ZQb2ludHMgPSBmdW5jdGlvbihwMSwgcDIsIHBDZW50ZXIpIHtcblx0XHRwQ2VudGVyLnggPSAocDEueCArIHAyLngpICogMC41O1xuXHRcdHBDZW50ZXIueSA9IChwMS55ICsgcDIueSkgKiAwLjU7XG5cdH0sXG5cdF9wdXNoUG9zUG9pbnQgPSBmdW5jdGlvbih0aW1lLCB4LCB5KSB7XG5cdFx0aWYodGltZSAtIF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPiA1MCkge1xuXHRcdFx0dmFyIG8gPSBfcG9zUG9pbnRzLmxlbmd0aCA+IDIgPyBfcG9zUG9pbnRzLnNoaWZ0KCkgOiB7fTtcblx0XHRcdG8ueCA9IHg7XG5cdFx0XHRvLnkgPSB5OyBcblx0XHRcdF9wb3NQb2ludHMucHVzaChvKTtcblx0XHRcdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPSB0aW1lO1xuXHRcdH1cblx0fSxcblxuXHRfY2FsY3VsYXRlVmVydGljYWxEcmFnT3BhY2l0eVJhdGlvID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHlPZmZzZXQgPSBfcGFuT2Zmc2V0LnkgLSBzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbi55OyAvLyBkaWZmZXJlbmNlIGJldHdlZW4gaW5pdGlhbCBhbmQgY3VycmVudCBwb3NpdGlvblxuXHRcdHJldHVybiAxIC0gIE1hdGguYWJzKCB5T2Zmc2V0IC8gKF92aWV3cG9ydFNpemUueSAvIDIpICApO1xuXHR9LFxuXG5cdFxuXHQvLyBwb2ludHMgcG9vbCwgcmV1c2VkIGR1cmluZyB0b3VjaCBldmVudHNcblx0X2VQb2ludDEgPSB7fSxcblx0X2VQb2ludDIgPSB7fSxcblx0X3RlbXBQb2ludHNBcnIgPSBbXSxcblx0X3RlbXBDb3VudGVyLFxuXHRfZ2V0VG91Y2hQb2ludHMgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly8gY2xlYW4gdXAgcHJldmlvdXMgcG9pbnRzLCB3aXRob3V0IHJlY3JlYXRpbmcgYXJyYXlcblx0XHR3aGlsZShfdGVtcFBvaW50c0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRfdGVtcFBvaW50c0Fyci5wb3AoKTtcblx0XHR9XG5cblx0XHRpZighX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdGlmKGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID4gLTEpIHtcblxuXHRcdFx0XHRpZihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IF9jb252ZXJ0VG91Y2hUb1BvaW50KGUudG91Y2hlc1swXSwgX2VQb2ludDEpO1xuXHRcdFx0XHRcdGlmKGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclsxXSA9IF9jb252ZXJ0VG91Y2hUb1BvaW50KGUudG91Y2hlc1sxXSwgX2VQb2ludDIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9lUG9pbnQxLnggPSBlLnBhZ2VYO1xuXHRcdFx0XHRfZVBvaW50MS55ID0gZS5wYWdlWTtcblx0XHRcdFx0X2VQb2ludDEuaWQgPSAnJztcblx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMF0gPSBfZVBvaW50MTsvL19lUG9pbnQxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdGVtcENvdW50ZXIgPSAwO1xuXHRcdFx0Ly8gd2UgY2FuIHVzZSBmb3JFYWNoLCBhcyBwb2ludGVyIGV2ZW50cyBhcmUgc3VwcG9ydGVkIG9ubHkgaW4gbW9kZXJuIGJyb3dzZXJzXG5cdFx0XHRfY3VyclBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRpZihfdGVtcENvdW50ZXIgPT09IDApIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IHA7XG5cdFx0XHRcdH0gZWxzZSBpZihfdGVtcENvdW50ZXIgPT09IDEpIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclsxXSA9IHA7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3RlbXBDb3VudGVyKys7XG5cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gX3RlbXBQb2ludHNBcnI7XG5cdH0sXG5cblx0X3Bhbk9yTW92ZU1haW5TY3JvbGwgPSBmdW5jdGlvbihheGlzLCBkZWx0YSkge1xuXG5cdFx0dmFyIHBhbkZyaWN0aW9uLFxuXHRcdFx0b3ZlckRpZmYgPSAwLFxuXHRcdFx0bmV3T2Zmc2V0ID0gX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdLFxuXHRcdFx0c3RhcnRPdmVyRGlmZixcblx0XHRcdGRpciA9IGRlbHRhW2F4aXNdID4gMCxcblx0XHRcdG5ld01haW5TY3JvbGxQb3NpdGlvbiA9IF9tYWluU2Nyb2xsUG9zLnggKyBkZWx0YS54LFxuXHRcdFx0bWFpblNjcm9sbERpZmYgPSBfbWFpblNjcm9sbFBvcy54IC0gX3N0YXJ0TWFpblNjcm9sbFBvcy54LFxuXHRcdFx0bmV3UGFuUG9zLFxuXHRcdFx0bmV3TWFpblNjcm9sbFBvcztcblxuXHRcdC8vIGNhbGN1bGF0ZSBmZGlzdGFuY2Ugb3ZlciB0aGUgYm91bmRzIGFuZCBmcmljdGlvblxuXHRcdGlmKG5ld09mZnNldCA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSB8fCBuZXdPZmZzZXQgPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10pIHtcblx0XHRcdHBhbkZyaWN0aW9uID0gX29wdGlvbnMucGFuRW5kRnJpY3Rpb247XG5cdFx0XHQvLyBMaW5lYXIgaW5jcmVhc2luZyBvZiBmcmljdGlvbiwgc28gYXQgMS80IG9mIHZpZXdwb3J0IGl0J3MgYXQgbWF4IHZhbHVlLiBcblx0XHRcdC8vIExvb2tzIG5vdCBhcyBuaWNlIGFzIHdhcyBleHBlY3RlZC4gTGVmdCBmb3IgaGlzdG9yeS5cblx0XHRcdC8vIHBhbkZyaWN0aW9uID0gKDEgLSAoX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdICsgcGFuQm91bmRzLm1pbltheGlzXSkgLyAoX3ZpZXdwb3J0U2l6ZVtheGlzXSAvIDQpICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhbkZyaWN0aW9uID0gMTtcblx0XHR9XG5cdFx0XG5cdFx0bmV3T2Zmc2V0ID0gX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdICogcGFuRnJpY3Rpb247XG5cblx0XHQvLyBtb3ZlIG1haW4gc2Nyb2xsIG9yIHN0YXJ0IHBhbm5pbmdcblx0XHRpZihfb3B0aW9ucy5hbGxvd1BhblRvTmV4dCB8fCBfY3Vyclpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cblxuXHRcdFx0aWYoIV9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXHRcdFx0XHRcblx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblxuXHRcdFx0fSBlbHNlIGlmKF9kaXJlY3Rpb24gPT09ICdoJyAmJiBheGlzID09PSAneCcgJiYgIV96b29tU3RhcnRlZCApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKGRpcikge1xuXHRcdFx0XHRcdGlmKG5ld09mZnNldCA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRcdFx0cGFuRnJpY3Rpb24gPSBfb3B0aW9ucy5wYW5FbmRGcmljdGlvbjtcblx0XHRcdFx0XHRcdG92ZXJEaWZmID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIC0gbmV3T2Zmc2V0O1xuXHRcdFx0XHRcdFx0c3RhcnRPdmVyRGlmZiA9IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSAtIF9zdGFydFBhbk9mZnNldFtheGlzXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gZHJhZyByaWdodFxuXHRcdFx0XHRcdGlmKCAoc3RhcnRPdmVyRGlmZiA8PSAwIHx8IG1haW5TY3JvbGxEaWZmIDwgMCkgJiYgX2dldE51bUl0ZW1zKCkgPiAxICkge1xuXHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblx0XHRcdFx0XHRcdGlmKG1haW5TY3JvbGxEaWZmIDwgMCAmJiBuZXdNYWluU2Nyb2xsUG9zaXRpb24gPiBfc3RhcnRNYWluU2Nyb2xsUG9zLngpIHtcblx0XHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IF9zdGFydE1haW5TY3JvbGxQb3MueDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld1BhblBvcyA9IG5ld09mZnNldDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0aWYobmV3T2Zmc2V0IDwgX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdICkge1xuXHRcdFx0XHRcdFx0cGFuRnJpY3Rpb24gPV9vcHRpb25zLnBhbkVuZEZyaWN0aW9uO1xuXHRcdFx0XHRcdFx0b3ZlckRpZmYgPSBuZXdPZmZzZXQgLSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0XHRzdGFydE92ZXJEaWZmID0gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdIC0gX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCAoc3RhcnRPdmVyRGlmZiA8PSAwIHx8IG1haW5TY3JvbGxEaWZmID4gMCkgJiYgX2dldE51bUl0ZW1zKCkgPiAxICkge1xuXHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblxuXHRcdFx0XHRcdFx0aWYobWFpblNjcm9sbERpZmYgPiAwICYmIG5ld01haW5TY3JvbGxQb3NpdGlvbiA8IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gX3N0YXJ0TWFpblNjcm9sbFBvcy54O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmKF9jdXJyUGFuQm91bmRzLm1pbi54ICE9PSBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdQYW5Qb3MgPSBuZXdPZmZzZXQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vXG5cdFx0XHR9XG5cblx0XHRcdGlmKGF4aXMgPT09ICd4Jykge1xuXG5cdFx0XHRcdGlmKG5ld01haW5TY3JvbGxQb3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9tb3ZlTWFpblNjcm9sbChuZXdNYWluU2Nyb2xsUG9zLCB0cnVlKTtcblx0XHRcdFx0XHRpZihuZXdNYWluU2Nyb2xsUG9zID09PSBfc3RhcnRNYWluU2Nyb2xsUG9zLngpIHtcblx0XHRcdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfbWFpblNjcm9sbFNoaWZ0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKF9jdXJyUGFuQm91bmRzLm1pbi54ICE9PSBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHRcdGlmKG5ld1BhblBvcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSBuZXdQYW5Qb3M7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCArPSBkZWx0YS54ICogcGFuRnJpY3Rpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5ld01haW5TY3JvbGxQb3MgIT09IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmKCFfbWFpblNjcm9sbEFuaW1hdGluZykge1xuXHRcdFx0XG5cdFx0XHRpZighX21haW5TY3JvbGxTaGlmdGVkKSB7XG5cdFx0XHRcdGlmKF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gKz0gZGVsdGFbYXhpc10gKiBwYW5GcmljdGlvbjtcblx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0fVxuXHRcdFxuXHR9LFxuXG5cdC8vIFBvaW50ZXJkb3duL3RvdWNoc3RhcnQvbW91c2Vkb3duIGhhbmRsZXJcblx0X29uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0Ly8gQWxsb3cgZHJhZ2dpbmcgb25seSB2aWEgbGVmdCBtb3VzZSBidXR0b24uXG5cdFx0Ly8gQXMgdGhpcyBoYW5kbGVyIGlzIG5vdCBhZGRlZCBpbiBJRTggLSB3ZSBpZ25vcmUgZS53aGljaFxuXHRcdC8vIFxuXHRcdC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZXZlbnRzX3Byb3BlcnRpZXMuaHRtbFxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ldmVudC5idXR0b25cblx0XHRpZihlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGUuYnV0dG9uID4gMCAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoX2luaXRpYWxab29tUnVubmluZykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ICYmIGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91cihlLCB0cnVlKSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXG5cblx0XHRfc2hvdXQoJ3BvaW50ZXJEb3duJyk7XG5cblx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0dmFyIHBvaW50ZXJJbmRleCA9IGZyYW1ld29yay5hcnJheVNlYXJjaChfY3VyclBvaW50ZXJzLCBlLnBvaW50ZXJJZCwgJ2lkJyk7XG5cdFx0XHRpZihwb2ludGVySW5kZXggPCAwKSB7XG5cdFx0XHRcdHBvaW50ZXJJbmRleCA9IF9jdXJyUG9pbnRlcnMubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0X2N1cnJQb2ludGVyc1twb2ludGVySW5kZXhdID0ge3g6ZS5wYWdlWCwgeTplLnBhZ2VZLCBpZDogZS5wb2ludGVySWR9O1xuXHRcdH1cblx0XHRcblxuXG5cdFx0dmFyIHN0YXJ0UG9pbnRzTGlzdCA9IF9nZXRUb3VjaFBvaW50cyhlKSxcblx0XHRcdG51bVBvaW50cyA9IHN0YXJ0UG9pbnRzTGlzdC5sZW5ndGg7XG5cblx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdC8vIGluaXQgZHJhZ1xuXHRcdGlmKCFfaXNEcmFnZ2luZyB8fCBudW1Qb2ludHMgPT09IDEpIHtcblxuXHRcdFx0XG5cblx0XHRcdF9pc0RyYWdnaW5nID0gX2lzRmlyc3RNb3ZlID0gdHJ1ZTtcblx0XHRcdGZyYW1ld29yay5iaW5kKHdpbmRvdywgX3VwTW92ZUV2ZW50cywgc2VsZik7XG5cblx0XHRcdF9pc1pvb21pbmdJbiA9IFxuXHRcdFx0XHRfd2FzT3ZlckluaXRpYWxab29tID0gXG5cdFx0XHRcdF9vcGFjaXR5Q2hhbmdlZCA9IFxuXHRcdFx0XHRfdmVydGljYWxEcmFnSW5pdGlhdGVkID0gXG5cdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IFxuXHRcdFx0XHRfbW92ZWQgPSBcblx0XHRcdFx0X2lzTXVsdGl0b3VjaCA9IFxuXHRcdFx0XHRfem9vbVN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdFx0X2RpcmVjdGlvbiA9IG51bGw7XG5cblx0XHRcdF9zaG91dCgnZmlyc3RUb3VjaFN0YXJ0Jywgc3RhcnRQb2ludHNMaXN0KTtcblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cblx0XHRcdF9jdXJyUGFuRGlzdC54ID0gX2N1cnJQYW5EaXN0LnkgPSAwO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9jdXJyUG9pbnQsIHN0YXJ0UG9pbnRzTGlzdFswXSk7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UG9pbnQsIF9jdXJyUG9pbnQpO1xuXG5cdFx0XHQvL19lcXVhbGl6ZVBvaW50cyhfc3RhcnRNYWluU2Nyb2xsUG9zLCBfbWFpblNjcm9sbFBvcyk7XG5cdFx0XHRfc3RhcnRNYWluU2Nyb2xsUG9zLnggPSBfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXg7XG5cblx0XHRcdF9wb3NQb2ludHMgPSBbe1xuXHRcdFx0XHR4OiBfY3VyclBvaW50LngsXG5cdFx0XHRcdHk6IF9jdXJyUG9pbnQueVxuXHRcdFx0fV07XG5cblx0XHRcdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPSBfZ2VzdHVyZVN0YXJ0VGltZSA9IF9nZXRDdXJyZW50VGltZSgpO1xuXG5cdFx0XHQvL19tYWluU2Nyb2xsQW5pbWF0aW9uRW5kKHRydWUpO1xuXHRcdFx0X2NhbGN1bGF0ZVBhbkJvdW5kcyggX2N1cnJab29tTGV2ZWwsIHRydWUgKTtcblx0XHRcdFxuXHRcdFx0Ly8gU3RhcnQgcmVuZGVyaW5nXG5cdFx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cdFx0XHRfZHJhZ1VwZGF0ZUxvb3AoKTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdC8vIGluaXQgem9vbVxuXHRcdGlmKCFfaXNab29taW5nICYmIG51bVBvaW50cyA+IDEgJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nICYmICFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X3pvb21TdGFydGVkID0gZmFsc2U7IC8vIHRydWUgaWYgem9vbSBjaGFuZ2VkIGF0IGxlYXN0IG9uY2VcblxuXHRcdFx0X2lzWm9vbWluZyA9IF9pc011bHRpdG91Y2ggPSB0cnVlO1xuXHRcdFx0X2N1cnJQYW5EaXN0LnkgPSBfY3VyclBhbkRpc3QueCA9IDA7XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQYW5PZmZzZXQsIF9wYW5PZmZzZXQpO1xuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMocCwgc3RhcnRQb2ludHNMaXN0WzBdKTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhwMiwgc3RhcnRQb2ludHNMaXN0WzFdKTtcblxuXHRcdFx0X2ZpbmRDZW50ZXJPZlBvaW50cyhwLCBwMiwgX2N1cnJDZW50ZXJQb2ludCk7XG5cblx0XHRcdF9taWRab29tUG9pbnQueCA9IE1hdGguYWJzKF9jdXJyQ2VudGVyUG9pbnQueCkgLSBfcGFuT2Zmc2V0Lng7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnkgPSBNYXRoLmFicyhfY3VyckNlbnRlclBvaW50LnkpIC0gX3Bhbk9mZnNldC55O1xuXHRcdFx0X2N1cnJQb2ludHNEaXN0YW5jZSA9IF9zdGFydFBvaW50c0Rpc3RhbmNlID0gX2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlKHAsIHAyKTtcblx0XHR9XG5cblxuXHR9LFxuXG5cdC8vIFBvaW50ZXJtb3ZlL3RvdWNobW92ZS9tb3VzZW1vdmUgaGFuZGxlclxuXHRfb25EcmFnTW92ZSA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdGlmKHBvaW50ZXJJbmRleCA+IC0xKSB7XG5cdFx0XHRcdHZhciBwID0gX2N1cnJQb2ludGVyc1twb2ludGVySW5kZXhdO1xuXHRcdFx0XHRwLnggPSBlLnBhZ2VYO1xuXHRcdFx0XHRwLnkgPSBlLnBhZ2VZOyBcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0dmFyIHRvdWNoZXNMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpO1xuXHRcdFx0aWYoIV9kaXJlY3Rpb24gJiYgIV9tb3ZlZCAmJiAhX2lzWm9vbWluZykge1xuXG5cdFx0XHRcdGlmKF9tYWluU2Nyb2xsUG9zLnggIT09IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCkge1xuXHRcdFx0XHRcdC8vIGlmIG1haW4gc2Nyb2xsIHBvc2l0aW9uIGlzIHNoaWZ0ZWQg4oCTIGRpcmVjdGlvbiBpcyBhbHdheXMgaG9yaXpvbnRhbFxuXHRcdFx0XHRcdF9kaXJlY3Rpb24gPSAnaCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyh0b3VjaGVzTGlzdFswXS54IC0gX2N1cnJQb2ludC54KSAtIE1hdGguYWJzKHRvdWNoZXNMaXN0WzBdLnkgLSBfY3VyclBvaW50LnkpO1xuXHRcdFx0XHRcdC8vIGNoZWNrIHRoZSBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcblx0XHRcdFx0XHRpZihNYXRoLmFicyhkaWZmKSA+PSBESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUKSB7XG5cdFx0XHRcdFx0XHRfZGlyZWN0aW9uID0gZGlmZiA+IDAgPyAnaCcgOiAndic7XG5cdFx0XHRcdFx0XHRfY3VycmVudFBvaW50cyA9IHRvdWNoZXNMaXN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9jdXJyZW50UG9pbnRzID0gdG91Y2hlc0xpc3Q7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdH0sXG5cdC8vIFxuXHRfcmVuZGVyTW92ZW1lbnQgPSAgZnVuY3Rpb24oKSB7XG5cblx0XHRpZighX2N1cnJlbnRQb2ludHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgbnVtUG9pbnRzID0gX2N1cnJlbnRQb2ludHMubGVuZ3RoO1xuXG5cdFx0aWYobnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0X2VxdWFsaXplUG9pbnRzKHAsIF9jdXJyZW50UG9pbnRzWzBdKTtcblxuXHRcdGRlbHRhLnggPSBwLnggLSBfY3VyclBvaW50Lng7XG5cdFx0ZGVsdGEueSA9IHAueSAtIF9jdXJyUG9pbnQueTtcblxuXHRcdGlmKF9pc1pvb21pbmcgJiYgbnVtUG9pbnRzID4gMSkge1xuXHRcdFx0Ly8gSGFuZGxlIGJlaGF2aW91ciBmb3IgbW9yZSB0aGFuIDEgcG9pbnRcblxuXHRcdFx0X2N1cnJQb2ludC54ID0gcC54O1xuXHRcdFx0X2N1cnJQb2ludC55ID0gcC55O1xuXHRcdFxuXHRcdFx0Ly8gY2hlY2sgaWYgb25lIG9mIHR3byBwb2ludHMgY2hhbmdlZFxuXHRcdFx0aWYoICFkZWx0YS54ICYmICFkZWx0YS55ICYmIF9pc0VxdWFsUG9pbnRzKF9jdXJyZW50UG9pbnRzWzFdLCBwMikgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKHAyLCBfY3VycmVudFBvaW50c1sxXSk7XG5cblxuXHRcdFx0aWYoIV96b29tU3RhcnRlZCkge1xuXHRcdFx0XHRfem9vbVN0YXJ0ZWQgPSB0cnVlO1xuXHRcdFx0XHRfc2hvdXQoJ3pvb21HZXN0dXJlU3RhcnRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBEaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcblx0XHRcdHZhciBwb2ludHNEaXN0YW5jZSA9IF9jYWxjdWxhdGVQb2ludHNEaXN0YW5jZShwLHAyKTtcblxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IF9jYWxjdWxhdGVab29tTGV2ZWwocG9pbnRzRGlzdGFuY2UpO1xuXG5cdFx0XHQvLyBzbGlnaHRseSBvdmVyIHRoZSBvZiBpbml0aWFsIHpvb20gbGV2ZWxcblx0XHRcdGlmKHpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCArIHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCAvIDE1KSB7XG5cdFx0XHRcdF93YXNPdmVySW5pdGlhbFpvb20gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSB0aGUgZnJpY3Rpb24gaWYgem9vbSBsZXZlbCBpcyBvdXQgb2YgdGhlIGJvdW5kc1xuXHRcdFx0dmFyIHpvb21GcmljdGlvbiA9IDEsXG5cdFx0XHRcdG1pblpvb21MZXZlbCA9IF9nZXRNaW5ab29tTGV2ZWwoKSxcblx0XHRcdFx0bWF4Wm9vbUxldmVsID0gX2dldE1heFpvb21MZXZlbCgpO1xuXG5cdFx0XHRpZiAoIHpvb21MZXZlbCA8IG1pblpvb21MZXZlbCApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKF9vcHRpb25zLnBpbmNoVG9DbG9zZSAmJiAhX3dhc092ZXJJbml0aWFsWm9vbSAmJiBfc3RhcnRab29tTGV2ZWwgPD0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdFx0Ly8gZmFkZSBvdXQgYmFja2dyb3VuZCBpZiB6b29taW5nIG91dFxuXHRcdFx0XHRcdHZhciBtaW51c0RpZmYgPSBtaW5ab29tTGV2ZWwgLSB6b29tTGV2ZWw7XG5cdFx0XHRcdFx0dmFyIHBlcmNlbnQgPSAxIC0gbWludXNEaWZmIC8gKG1pblpvb21MZXZlbCAvIDEuMik7XG5cblx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkocGVyY2VudCk7XG5cdFx0XHRcdFx0X3Nob3V0KCdvblBpbmNoQ2xvc2UnLCBwZXJjZW50KTtcblx0XHRcdFx0XHRfb3BhY2l0eUNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHpvb21GcmljdGlvbiA9IChtaW5ab29tTGV2ZWwgLSB6b29tTGV2ZWwpIC8gbWluWm9vbUxldmVsO1xuXHRcdFx0XHRcdGlmKHpvb21GcmljdGlvbiA+IDEpIHtcblx0XHRcdFx0XHRcdHpvb21GcmljdGlvbiA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHpvb21MZXZlbCA9IG1pblpvb21MZXZlbCAtIHpvb21GcmljdGlvbiAqIChtaW5ab29tTGV2ZWwgLyAzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAoIHpvb21MZXZlbCA+IG1heFpvb21MZXZlbCApIHtcblx0XHRcdFx0Ly8gMS41IC0gZXh0cmEgem9vbSBsZXZlbCBhYm92ZSB0aGUgbWF4LiBFLmcuIGlmIG1heCBpcyB4NiwgcmVhbCBtYXggNiArIDEuNSA9IDcuNVxuXHRcdFx0XHR6b29tRnJpY3Rpb24gPSAoem9vbUxldmVsIC0gbWF4Wm9vbUxldmVsKSAvICggbWluWm9vbUxldmVsICogNiApO1xuXHRcdFx0XHRpZih6b29tRnJpY3Rpb24gPiAxKSB7XG5cdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHR6b29tTGV2ZWwgPSBtYXhab29tTGV2ZWwgKyB6b29tRnJpY3Rpb24gKiBtaW5ab29tTGV2ZWw7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHpvb21GcmljdGlvbiA8IDApIHtcblx0XHRcdFx0em9vbUZyaWN0aW9uID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGlzdGFuY2UgYmV0d2VlbiB0b3VjaCBwb2ludHMgYWZ0ZXIgZnJpY3Rpb24gaXMgYXBwbGllZFxuXHRcdFx0X2N1cnJQb2ludHNEaXN0YW5jZSA9IHBvaW50c0Rpc3RhbmNlO1xuXG5cdFx0XHQvLyBfY2VudGVyUG9pbnQgLSBUaGUgcG9pbnQgaW4gdGhlIG1pZGRsZSBvZiB0d28gcG9pbnRlcnNcblx0XHRcdF9maW5kQ2VudGVyT2ZQb2ludHMocCwgcDIsIF9jZW50ZXJQb2ludCk7XG5cdFx0XG5cdFx0XHQvLyBwYW5pbmcgd2l0aCB0d28gcG9pbnRlcnMgcHJlc3NlZFxuXHRcdFx0X2N1cnJQYW5EaXN0LnggKz0gX2NlbnRlclBvaW50LnggLSBfY3VyckNlbnRlclBvaW50Lng7XG5cdFx0XHRfY3VyclBhbkRpc3QueSArPSBfY2VudGVyUG9pbnQueSAtIF9jdXJyQ2VudGVyUG9pbnQueTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfY3VyckNlbnRlclBvaW50LCBfY2VudGVyUG9pbnQpO1xuXG5cdFx0XHRfcGFuT2Zmc2V0LnggPSBfY2FsY3VsYXRlUGFuT2Zmc2V0KCd4Jywgem9vbUxldmVsKTtcblx0XHRcdF9wYW5PZmZzZXQueSA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoJ3knLCB6b29tTGV2ZWwpO1xuXG5cdFx0XHRfaXNab29taW5nSW4gPSB6b29tTGV2ZWwgPiBfY3Vyclpvb21MZXZlbDtcblx0XHRcdF9jdXJyWm9vbUxldmVsID0gem9vbUxldmVsO1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIGhhbmRsZSBiZWhhdmlvdXIgZm9yIG9uZSBwb2ludCAoZHJhZ2dpbmcgb3IgcGFubmluZylcblxuXHRcdFx0aWYoIV9kaXJlY3Rpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfaXNGaXJzdE1vdmUpIHtcblx0XHRcdFx0X2lzRmlyc3RNb3ZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gc3VidHJhY3QgZHJhZyBkaXN0YW5jZSB0aGF0IHdhcyB1c2VkIGR1cmluZyB0aGUgZGV0ZWN0aW9uIGRpcmVjdGlvbiAgXG5cblx0XHRcdFx0aWYoIE1hdGguYWJzKGRlbHRhLngpID49IERJUkVDVElPTl9DSEVDS19PRkZTRVQpIHtcblx0XHRcdFx0XHRkZWx0YS54IC09IF9jdXJyZW50UG9pbnRzWzBdLnggLSBfc3RhcnRQb2ludC54O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiggTWF0aC5hYnMoZGVsdGEueSkgPj0gRElSRUNUSU9OX0NIRUNLX09GRlNFVCkge1xuXHRcdFx0XHRcdGRlbHRhLnkgLT0gX2N1cnJlbnRQb2ludHNbMF0ueSAtIF9zdGFydFBvaW50Lnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2N1cnJQb2ludC54ID0gcC54O1xuXHRcdFx0X2N1cnJQb2ludC55ID0gcC55O1xuXG5cdFx0XHQvLyBkbyBub3RoaW5nIGlmIHBvaW50ZXJzIHBvc2l0aW9uIGhhc24ndCBjaGFuZ2VkXG5cdFx0XHRpZihkZWx0YS54ID09PSAwICYmIGRlbHRhLnkgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfZGlyZWN0aW9uID09PSAndicgJiYgX29wdGlvbnMuY2xvc2VPblZlcnRpY2FsRHJhZykge1xuXHRcdFx0XHRpZighX2NhblBhbigpKSB7XG5cdFx0XHRcdFx0X2N1cnJQYW5EaXN0LnkgKz0gZGVsdGEueTtcblx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgKz0gZGVsdGEueTtcblxuXHRcdFx0XHRcdHZhciBvcGFjaXR5UmF0aW8gPSBfY2FsY3VsYXRlVmVydGljYWxEcmFnT3BhY2l0eVJhdGlvKCk7XG5cblx0XHRcdFx0XHRfdmVydGljYWxEcmFnSW5pdGlhdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRfc2hvdXQoJ29uVmVydGljYWxEcmFnJywgb3BhY2l0eVJhdGlvKTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eShvcGFjaXR5UmF0aW8pO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0cmV0dXJuIDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfcHVzaFBvc1BvaW50KF9nZXRDdXJyZW50VGltZSgpLCBwLngsIHAueSk7XG5cblx0XHRcdF9tb3ZlZCA9IHRydWU7XG5cdFx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXHRcdFx0XG5cdFx0XHR2YXIgbWFpblNjcm9sbENoYW5nZWQgPSBfcGFuT3JNb3ZlTWFpblNjcm9sbCgneCcsIGRlbHRhKTtcblx0XHRcdGlmKCFtYWluU2Nyb2xsQ2hhbmdlZCkge1xuXHRcdFx0XHRfcGFuT3JNb3ZlTWFpblNjcm9sbCgneScsIGRlbHRhKTtcblxuXHRcdFx0XHRfcm91bmRQb2ludChfcGFuT2Zmc2V0KTtcblx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9LFxuXHRcblx0Ly8gUG9pbnRlcnVwL3BvaW50ZXJjYW5jZWwvdG91Y2hlbmQvdG91Y2hjYW5jZWwvbW91c2V1cCBldmVudCBoYW5kbGVyXG5cdF9vbkRyYWdSZWxlYXNlID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYoX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCApIHtcblxuXHRcdFx0aWYoX29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgJiYgZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBvbiBBbmRyb2lkICh2NC4xLCA0LjIsIDQuMyAmIHBvc3NpYmx5IG9sZGVyKSBcblx0XHRcdC8vIGdob3N0IG1vdXNlZG93bi91cCBldmVudCBpc24ndCBwcmV2ZW50YWJsZSB2aWEgZS5wcmV2ZW50RGVmYXVsdCxcblx0XHRcdC8vIHdoaWNoIGNhdXNlcyBmYWtlIG1vdXNlZG93biBldmVudFxuXHRcdFx0Ly8gc28gd2UgYmxvY2sgbW91c2Vkb3duL3VwIGZvciA2MDBtc1xuXHRcdFx0aWYoIGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID4gLTEgKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCk7XG5cdFx0XHRcdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCA9IDA7XG5cdFx0XHRcdH0sIDYwMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cblx0XHRfc2hvdXQoJ3BvaW50ZXJVcCcpO1xuXG5cdFx0aWYoX3ByZXZlbnREZWZhdWx0RXZlbnRCZWhhdmlvdXIoZSwgZmFsc2UpKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlbGVhc2VQb2ludDtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdFxuXHRcdFx0aWYocG9pbnRlckluZGV4ID4gLTEpIHtcblx0XHRcdFx0cmVsZWFzZVBvaW50ID0gX2N1cnJQb2ludGVycy5zcGxpY2UocG9pbnRlckluZGV4LCAxKVswXTtcblxuXHRcdFx0XHRpZihuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuXHRcdFx0XHRcdHZhciBNU1BPSU5URVJfVFlQRVMgPSB7XG5cdFx0XHRcdFx0XHQ0OiAnbW91c2UnLCAvLyBldmVudC5NU1BPSU5URVJfVFlQRV9NT1VTRVxuXHRcdFx0XHRcdFx0MjogJ3RvdWNoJywgLy8gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggXG5cdFx0XHRcdFx0XHQzOiAncGVuJyAvLyBldmVudC5NU1BPSU5URVJfVFlQRV9QRU5cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlbGVhc2VQb2ludC50eXBlID0gTVNQT0lOVEVSX1RZUEVTW2UucG9pbnRlclR5cGVdO1xuXG5cdFx0XHRcdFx0aWYoIXJlbGVhc2VQb2ludC50eXBlKSB7XG5cdFx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50LnR5cGUgPSBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciB0b3VjaExpc3QgPSBfZ2V0VG91Y2hQb2ludHMoZSksXG5cdFx0XHRnZXN0dXJlVHlwZSxcblx0XHRcdG51bVBvaW50cyA9IHRvdWNoTGlzdC5sZW5ndGg7XG5cblx0XHRpZihlLnR5cGUgPT09ICdtb3VzZXVwJykge1xuXHRcdFx0bnVtUG9pbnRzID0gMDtcblx0XHR9XG5cblx0XHQvLyBEbyBub3RoaW5nIGlmIHRoZXJlIHdlcmUgMyB0b3VjaCBwb2ludHMgb3IgbW9yZVxuXHRcdGlmKG51bVBvaW50cyA9PT0gMikge1xuXHRcdFx0X2N1cnJlbnRQb2ludHMgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgc2Vjb25kIHBvaW50ZXIgcmVsZWFzZWRcblx0XHRpZihudW1Qb2ludHMgPT09IDEpIHtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQb2ludCwgdG91Y2hMaXN0WzBdKTtcblx0XHR9XHRcdFx0XHRcblxuXG5cdFx0Ly8gcG9pbnRlciBoYXNuJ3QgbW92ZWQsIHNlbmQgXCJ0YXAgcmVsZWFzZVwiIHBvaW50XG5cdFx0aWYobnVtUG9pbnRzID09PSAwICYmICFfZGlyZWN0aW9uICYmICFfbWFpblNjcm9sbEFuaW1hdGluZykge1xuXHRcdFx0aWYoIXJlbGVhc2VQb2ludCkge1xuXHRcdFx0XHRpZihlLnR5cGUgPT09ICdtb3VzZXVwJykge1xuXHRcdFx0XHRcdHJlbGVhc2VQb2ludCA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZLCB0eXBlOidtb3VzZSd9O1xuXHRcdFx0XHR9IGVsc2UgaWYoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50ID0ge3g6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVksIHR5cGU6J3RvdWNoJ307XG5cdFx0XHRcdH1cdFx0XG5cdFx0XHR9XG5cblx0XHRcdF9zaG91dCgndG91Y2hSZWxlYXNlJywgZSwgcmVsZWFzZVBvaW50KTtcblx0XHR9XG5cblx0XHQvLyBEaWZmZXJlbmNlIGluIHRpbWUgYmV0d2VlbiByZWxlYXNpbmcgb2YgdHdvIGxhc3QgdG91Y2ggcG9pbnRzICh6b29tIGdlc3R1cmUpXG5cdFx0dmFyIHJlbGVhc2VUaW1lRGlmZiA9IC0xO1xuXG5cdFx0Ly8gR2VzdHVyZSBjb21wbGV0ZWQsIG5vIHBvaW50ZXJzIGxlZnRcblx0XHRpZihudW1Qb2ludHMgPT09IDApIHtcblx0XHRcdF9pc0RyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgX3VwTW92ZUV2ZW50cywgc2VsZik7XG5cblx0XHRcdF9zdG9wRHJhZ1VwZGF0ZUxvb3AoKTtcblxuXHRcdFx0aWYoX2lzWm9vbWluZykge1xuXHRcdFx0XHQvLyBUd28gcG9pbnRzIHJlbGVhc2VkIGF0IHRoZSBzYW1lIHRpbWVcblx0XHRcdFx0cmVsZWFzZVRpbWVEaWZmID0gMDtcblx0XHRcdH0gZWxzZSBpZihfbGFzdFJlbGVhc2VUaW1lICE9PSAtMSkge1xuXHRcdFx0XHRyZWxlYXNlVGltZURpZmYgPSBfZ2V0Q3VycmVudFRpbWUoKSAtIF9sYXN0UmVsZWFzZVRpbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9sYXN0UmVsZWFzZVRpbWUgPSBudW1Qb2ludHMgPT09IDEgPyBfZ2V0Q3VycmVudFRpbWUoKSA6IC0xO1xuXHRcdFxuXHRcdGlmKHJlbGVhc2VUaW1lRGlmZiAhPT0gLTEgJiYgcmVsZWFzZVRpbWVEaWZmIDwgMTUwKSB7XG5cdFx0XHRnZXN0dXJlVHlwZSA9ICd6b29tJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2VzdHVyZVR5cGUgPSAnc3dpcGUnO1xuXHRcdH1cblxuXHRcdGlmKF9pc1pvb21pbmcgJiYgbnVtUG9pbnRzIDwgMikge1xuXHRcdFx0X2lzWm9vbWluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBPbmx5IHNlY29uZCBwb2ludCByZWxlYXNlZFxuXHRcdFx0aWYobnVtUG9pbnRzID09PSAxKSB7XG5cdFx0XHRcdGdlc3R1cmVUeXBlID0gJ3pvb21Qb2ludGVyVXAnO1xuXHRcdFx0fVxuXHRcdFx0X3Nob3V0KCd6b29tR2VzdHVyZUVuZGVkJyk7XG5cdFx0fVxuXG5cdFx0X2N1cnJlbnRQb2ludHMgPSBudWxsO1xuXHRcdGlmKCFfbW92ZWQgJiYgIV96b29tU3RhcnRlZCAmJiAhX21haW5TY3JvbGxBbmltYXRpbmcgJiYgIV92ZXJ0aWNhbERyYWdJbml0aWF0ZWQpIHtcblx0XHRcdC8vIG5vdGhpbmcgdG8gYW5pbWF0ZVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cblx0XHRcblx0XHRpZighX3JlbGVhc2VBbmltRGF0YSkge1xuXHRcdFx0X3JlbGVhc2VBbmltRGF0YSA9IF9pbml0RHJhZ1JlbGVhc2VBbmltYXRpb25EYXRhKCk7XG5cdFx0fVxuXHRcdFxuXHRcdF9yZWxlYXNlQW5pbURhdGEuY2FsY3VsYXRlU3dpcGVTcGVlZCgneCcpO1xuXG5cblx0XHRpZihfdmVydGljYWxEcmFnSW5pdGlhdGVkKSB7XG5cblx0XHRcdHZhciBvcGFjaXR5UmF0aW8gPSBfY2FsY3VsYXRlVmVydGljYWxEcmFnT3BhY2l0eVJhdGlvKCk7XG5cblx0XHRcdGlmKG9wYWNpdHlSYXRpbyA8IF9vcHRpb25zLnZlcnRpY2FsRHJhZ1JhbmdlKSB7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpbml0YWxQYW5ZID0gX3Bhbk9mZnNldC55LFxuXHRcdFx0XHRcdGluaXRpYWxCZ09wYWNpdHkgPSBfYmdPcGFjaXR5O1xuXG5cdFx0XHRcdF9hbmltYXRlUHJvcCgndmVydGljYWxEcmFnJywgMCwgMSwgMzAwLCBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFBvc2l0aW9uLnkgLSBpbml0YWxQYW5ZKSAqIG5vdyArIGluaXRhbFBhblk7XG5cblx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoICAoMSAtIGluaXRpYWxCZ09wYWNpdHkpICogbm93ICsgaW5pdGlhbEJnT3BhY2l0eSApO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdF9zaG91dCgnb25WZXJ0aWNhbERyYWcnLCAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXG5cdFx0Ly8gbWFpbiBzY3JvbGwgXG5cdFx0aWYoICAoX21haW5TY3JvbGxTaGlmdGVkIHx8IF9tYWluU2Nyb2xsQW5pbWF0aW5nKSAmJiBudW1Qb2ludHMgPT09IDApIHtcblx0XHRcdHZhciBpdGVtQ2hhbmdlZCA9IF9maW5pc2hTd2lwZU1haW5TY3JvbGxHZXN0dXJlKGdlc3R1cmVUeXBlLCBfcmVsZWFzZUFuaW1EYXRhKTtcblx0XHRcdGlmKGl0ZW1DaGFuZ2VkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdlc3R1cmVUeXBlID0gJ3pvb21Qb2ludGVyVXAnO1xuXHRcdH1cblxuXHRcdC8vIHByZXZlbnQgem9vbS9wYW4gYW5pbWF0aW9uIHdoZW4gbWFpbiBzY3JvbGwgYW5pbWF0aW9uIHJ1bnNcblx0XHRpZihfbWFpblNjcm9sbEFuaW1hdGluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHQvLyBDb21wbGV0ZSBzaW1wbGUgem9vbSBnZXN0dXJlIChyZXNldCB6b29tIGxldmVsIGlmIGl0J3Mgb3V0IG9mIHRoZSBib3VuZHMpICBcblx0XHRpZihnZXN0dXJlVHlwZSAhPT0gJ3N3aXBlJykge1xuXHRcdFx0X2NvbXBsZXRlWm9vbUdlc3R1cmUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHRcdC8vIENvbXBsZXRlIHBhbiBnZXN0dXJlIGlmIG1haW4gc2Nyb2xsIGlzIG5vdCBzaGlmdGVkLCBhbmQgaXQncyBwb3NzaWJsZSB0byBwYW4gY3VycmVudCBpbWFnZVxuXHRcdGlmKCFfbWFpblNjcm9sbFNoaWZ0ZWQgJiYgX2N1cnJab29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRfY29tcGxldGVQYW5HZXN0dXJlKF9yZWxlYXNlQW5pbURhdGEpO1xuXHRcdH1cblx0fSxcblxuXG5cdC8vIFJldHVybnMgb2JqZWN0IHdpdGggZGF0YSBhYm91dCBnZXN0dXJlXG5cdC8vIEl0J3MgY3JlYXRlZCBvbmx5IG9uY2UgYW5kIHRoZW4gcmV1c2VkXG5cdF9pbml0RHJhZ1JlbGVhc2VBbmltYXRpb25EYXRhICA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHRlbXAgbG9jYWwgdmFyc1xuXHRcdHZhciBsYXN0RmxpY2tEdXJhdGlvbixcblx0XHRcdHRlbXBSZWxlYXNlUG9zO1xuXG5cdFx0Ly8gcyA9IHRoaXNcblx0XHR2YXIgcyA9IHtcblx0XHRcdGxhc3RGbGlja09mZnNldDoge30sXG5cdFx0XHRsYXN0RmxpY2tEaXN0OiB7fSxcblx0XHRcdGxhc3RGbGlja1NwZWVkOiB7fSxcblx0XHRcdHNsb3dEb3duUmF0aW86ICB7fSxcblx0XHRcdHNsb3dEb3duUmF0aW9SZXZlcnNlOiAge30sXG5cdFx0XHRzcGVlZERlY2VsZXJhdGlvblJhdGlvOiAge30sXG5cdFx0XHRzcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzOiAge30sXG5cdFx0XHRkaXN0YW5jZU9mZnNldDogIHt9LFxuXHRcdFx0YmFja0FuaW1EZXN0aW5hdGlvbjoge30sXG5cdFx0XHRiYWNrQW5pbVN0YXJ0ZWQ6IHt9LFxuXHRcdFx0Y2FsY3VsYXRlU3dpcGVTcGVlZDogZnVuY3Rpb24oYXhpcykge1xuXHRcdFx0XHRcblxuXHRcdFx0XHRpZiggX3Bvc1BvaW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0bGFzdEZsaWNrRHVyYXRpb24gPSBfZ2V0Q3VycmVudFRpbWUoKSAtIF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgKyA1MDtcblx0XHRcdFx0XHR0ZW1wUmVsZWFzZVBvcyA9IF9wb3NQb2ludHNbX3Bvc1BvaW50cy5sZW5ndGgtMl1bYXhpc107XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGFzdEZsaWNrRHVyYXRpb24gPSBfZ2V0Q3VycmVudFRpbWUoKSAtIF9nZXN0dXJlU3RhcnRUaW1lOyAvLyB0b3RhbCBnZXN0dXJlIGR1cmF0aW9uXG5cdFx0XHRcdFx0dGVtcFJlbGVhc2VQb3MgPSBfc3RhcnRQb2ludFtheGlzXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzLmxhc3RGbGlja09mZnNldFtheGlzXSA9IF9jdXJyUG9pbnRbYXhpc10gLSB0ZW1wUmVsZWFzZVBvcztcblx0XHRcdFx0cy5sYXN0RmxpY2tEaXN0W2F4aXNdID0gTWF0aC5hYnMocy5sYXN0RmxpY2tPZmZzZXRbYXhpc10pO1xuXHRcdFx0XHRpZihzLmxhc3RGbGlja0Rpc3RbYXhpc10gPiAyMCkge1xuXHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSBzLmxhc3RGbGlja09mZnNldFtheGlzXSAvIGxhc3RGbGlja0R1cmF0aW9uO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCBNYXRoLmFicyhzLmxhc3RGbGlja1NwZWVkW2F4aXNdKSA8IDAuMSApIHtcblx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cy5zbG93RG93blJhdGlvW2F4aXNdID0gMC45NTtcblx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSA9IDEgLSBzLnNsb3dEb3duUmF0aW9bYXhpc107XG5cdFx0XHRcdHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSA9IDE7XG5cdFx0XHR9LFxuXG5cdFx0XHRjYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldDogZnVuY3Rpb24oYXhpcywgc3BlZWQpIHtcblx0XHRcdFx0aWYoIXMuYmFja0FuaW1TdGFydGVkW2F4aXNdKSB7XG5cblx0XHRcdFx0XHRpZihfcGFuT2Zmc2V0W2F4aXNdID4gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdKSB7XG5cdFx0XHRcdFx0XHRzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10gPSBfY3VyclBhbkJvdW5kcy5taW5bYXhpc107XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9IGVsc2UgaWYoX3Bhbk9mZnNldFtheGlzXSA8IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXSkge1xuXHRcdFx0XHRcdFx0cy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdID0gX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRzLnNsb3dEb3duUmF0aW9bYXhpc10gPSAwLjc7XG5cdFx0XHRcdFx0XHRzLnNsb3dEb3duUmF0aW9SZXZlcnNlW2F4aXNdID0gMSAtIHMuc2xvd0Rvd25SYXRpb1theGlzXTtcblx0XHRcdFx0XHRcdGlmKHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Fic1theGlzXSA8IDAuMDUpIHtcblxuXHRcdFx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gMDtcblx0XHRcdFx0XHRcdFx0cy5iYWNrQW5pbVN0YXJ0ZWRbYXhpc10gPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdF9hbmltYXRlUHJvcCgnYm91bmNlWm9vbVBhbicrYXhpcyxfcGFuT2Zmc2V0W2F4aXNdLCBcblx0XHRcdFx0XHRcdFx0XHRzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10sIFxuXHRcdFx0XHRcdFx0XHRcdHNwZWVkIHx8IDMwMCwgXG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmVhc2luZy5zaW5lLm91dCwgXG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24ocG9zKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0W2F4aXNdID0gcG9zO1xuXHRcdFx0XHRcdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlZHVjZXMgdGhlIHNwZWVkIGJ5IHNsb3dEb3duUmF0aW8gKHBlciAxMG1zKVxuXHRcdFx0Y2FsY3VsYXRlQW5pbU9mZnNldDogZnVuY3Rpb24oYXhpcykge1xuXHRcdFx0XHRpZighcy5iYWNrQW5pbVN0YXJ0ZWRbYXhpc10pIHtcblx0XHRcdFx0XHRzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gPSBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gKiAocy5zbG93RG93blJhdGlvW2F4aXNdICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzLnNsb3dEb3duUmF0aW9SZXZlcnNlW2F4aXNdIC0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzLnNsb3dEb3duUmF0aW9SZXZlcnNlW2F4aXNdICogcy50aW1lRGlmZiAvIDEwKTtcblxuXHRcdFx0XHRcdHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Fic1theGlzXSA9IE1hdGguYWJzKHMubGFzdEZsaWNrU3BlZWRbYXhpc10gKiBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10pO1xuXHRcdFx0XHRcdHMuZGlzdGFuY2VPZmZzZXRbYXhpc10gPSBzLmxhc3RGbGlja1NwZWVkW2F4aXNdICogcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdICogcy50aW1lRGlmZjtcblx0XHRcdFx0XHRfcGFuT2Zmc2V0W2F4aXNdICs9IHMuZGlzdGFuY2VPZmZzZXRbYXhpc107XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0cGFuQW5pbUxvb3A6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIF9hbmltYXRpb25zLnpvb21QYW4gKSB7XG5cdFx0XHRcdFx0X2FuaW1hdGlvbnMuem9vbVBhbi5yYWYgPSBfcmVxdWVzdEFGKHMucGFuQW5pbUxvb3ApO1xuXG5cdFx0XHRcdFx0cy5ub3cgPSBfZ2V0Q3VycmVudFRpbWUoKTtcblx0XHRcdFx0XHRzLnRpbWVEaWZmID0gcy5ub3cgLSBzLmxhc3ROb3c7XG5cdFx0XHRcdFx0cy5sYXN0Tm93ID0gcy5ub3c7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVBbmltT2Zmc2V0KCd4Jyk7XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVBbmltT2Zmc2V0KCd5Jyk7XG5cblx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHMuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3gnKTtcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd5Jyk7XG5cblxuXHRcdFx0XHRcdGlmIChzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueCA8IDAuMDUgJiYgcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnkgPCAwLjA1KSB7XG5cblx0XHRcdFx0XHRcdC8vIHJvdW5kIHBhbiBwb3NpdGlvblxuXHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ID0gTWF0aC5yb3VuZChfcGFuT2Zmc2V0LngpO1xuXHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gTWF0aC5yb3VuZChfcGFuT2Zmc2V0LnkpO1xuXHRcdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0X3N0b3BBbmltYXRpb24oJ3pvb21QYW4nKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHM7XG5cdH0sXG5cblx0X2NvbXBsZXRlUGFuR2VzdHVyZSA9IGZ1bmN0aW9uKGFuaW1EYXRhKSB7XG5cdFx0Ly8gY2FsY3VsYXRlIHN3aXBlIHNwZWVkIGZvciBZIGF4aXMgKHBhYW5uaW5nKVxuXHRcdGFuaW1EYXRhLmNhbGN1bGF0ZVN3aXBlU3BlZWQoJ3knKTtcblxuXHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XG5cdFx0XG5cdFx0YW5pbURhdGEuYmFja0FuaW1EZXN0aW5hdGlvbiA9IHt9O1xuXHRcdGFuaW1EYXRhLmJhY2tBbmltU3RhcnRlZCA9IHt9O1xuXG5cdFx0Ly8gQXZvaWQgYWNjZWxlcmF0aW9uIGFuaW1hdGlvbiBpZiBzcGVlZCBpcyB0b28gbG93XG5cdFx0aWYoTWF0aC5hYnMoYW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCkgPD0gMC4wNSAmJiBNYXRoLmFicyhhbmltRGF0YS5sYXN0RmxpY2tTcGVlZC55KSA8PSAwLjA1ICkge1xuXHRcdFx0YW5pbURhdGEuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy54ID0gYW5pbURhdGEuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy55ID0gMDtcblxuXHRcdFx0Ly8gUnVuIHBhbiBkcmFnIHJlbGVhc2UgYW5pbWF0aW9uLiBFLmcuIGlmIHlvdSBkcmFnIGltYWdlIGFuZCByZWxlYXNlIGZpbmdlciB3aXRob3V0IG1vbWVudHVtLlxuXHRcdFx0YW5pbURhdGEuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3gnKTtcblx0XHRcdGFuaW1EYXRhLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd5Jyk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBBbmltYXRpb24gbG9vcCB0aGF0IGNvbnRyb2xzIHRoZSBhY2NlbGVyYXRpb24gYWZ0ZXIgcGFuIGdlc3R1cmUgZW5kc1xuXHRcdF9yZWdpc3RlclN0YXJ0QW5pbWF0aW9uKCd6b29tUGFuJyk7XG5cdFx0YW5pbURhdGEubGFzdE5vdyA9IF9nZXRDdXJyZW50VGltZSgpO1xuXHRcdGFuaW1EYXRhLnBhbkFuaW1Mb29wKCk7XG5cdH0sXG5cblxuXHRfZmluaXNoU3dpcGVNYWluU2Nyb2xsR2VzdHVyZSA9IGZ1bmN0aW9uKGdlc3R1cmVUeXBlLCBfcmVsZWFzZUFuaW1EYXRhKSB7XG5cdFx0dmFyIGl0ZW1DaGFuZ2VkO1xuXHRcdGlmKCFfbWFpblNjcm9sbEFuaW1hdGluZykge1xuXHRcdFx0X2N1cnJab29tZWRJdGVtSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleDtcblx0XHR9XG5cblxuXHRcdFxuXHRcdHZhciBpdGVtc0RpZmY7XG5cblx0XHRpZihnZXN0dXJlVHlwZSA9PT0gJ3N3aXBlJykge1xuXHRcdFx0dmFyIHRvdGFsU2hpZnREaXN0ID0gX2N1cnJQb2ludC54IC0gX3N0YXJ0UG9pbnQueCxcblx0XHRcdFx0aXNGYXN0TGFzdEZsaWNrID0gX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tEaXN0LnggPCAxMDtcblxuXHRcdFx0Ly8gaWYgY29udGFpbmVyIGlzIHNoaWZ0ZWQgZm9yIG1vcmUgdGhhbiBNSU5fU1dJUEVfRElTVEFOQ0UsIFxuXHRcdFx0Ly8gYW5kIGxhc3QgZmxpY2sgZ2VzdHVyZSB3YXMgaW4gcmlnaHQgZGlyZWN0aW9uXG5cdFx0XHRpZih0b3RhbFNoaWZ0RGlzdCA+IE1JTl9TV0lQRV9ESVNUQU5DRSAmJiBcblx0XHRcdFx0KGlzRmFzdExhc3RGbGljayB8fCBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja09mZnNldC54ID4gMjApICkge1xuXHRcdFx0XHQvLyBnbyB0byBwcmV2IGl0ZW1cblx0XHRcdFx0aXRlbXNEaWZmID0gLTE7XG5cdFx0XHR9IGVsc2UgaWYodG90YWxTaGlmdERpc3QgPCAtTUlOX1NXSVBFX0RJU1RBTkNFICYmIFxuXHRcdFx0XHQoaXNGYXN0TGFzdEZsaWNrIHx8IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrT2Zmc2V0LnggPCAtMjApICkge1xuXHRcdFx0XHQvLyBnbyB0byBuZXh0IGl0ZW1cblx0XHRcdFx0aXRlbXNEaWZmID0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgbmV4dENpcmNsZTtcblxuXHRcdGlmKGl0ZW1zRGlmZikge1xuXHRcdFx0XG5cdFx0XHRfY3VycmVudEl0ZW1JbmRleCArPSBpdGVtc0RpZmY7XG5cblx0XHRcdGlmKF9jdXJyZW50SXRlbUluZGV4IDwgMCkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9vcHRpb25zLmxvb3AgPyBfZ2V0TnVtSXRlbXMoKS0xIDogMDtcblx0XHRcdFx0bmV4dENpcmNsZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYoX2N1cnJlbnRJdGVtSW5kZXggPj0gX2dldE51bUl0ZW1zKCkpIHtcblx0XHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfb3B0aW9ucy5sb29wID8gMCA6IF9nZXROdW1JdGVtcygpLTE7XG5cdFx0XHRcdG5leHRDaXJjbGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighbmV4dENpcmNsZSB8fCBfb3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdF9pbmRleERpZmYgKz0gaXRlbXNEaWZmO1xuXHRcdFx0XHRfY3VyclBvc2l0aW9uSW5kZXggLT0gaXRlbXNEaWZmO1xuXHRcdFx0XHRpdGVtQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0XG5cdFx0fVxuXG5cdFx0dmFyIGFuaW1hdGVUb1ggPSBfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXg7XG5cdFx0dmFyIGFuaW1hdGVUb0Rpc3QgPSBNYXRoLmFicyggYW5pbWF0ZVRvWCAtIF9tYWluU2Nyb2xsUG9zLnggKTtcblx0XHR2YXIgZmluaXNoQW5pbUR1cmF0aW9uO1xuXG5cblx0XHRpZighaXRlbUNoYW5nZWQgJiYgYW5pbWF0ZVRvWCA+IF9tYWluU2Nyb2xsUG9zLnggIT09IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCA+IDApIHtcblx0XHRcdC8vIFwicmV0dXJuIHRvIGN1cnJlbnRcIiBkdXJhdGlvbiwgZS5nLiB3aGVuIGRyYWdnaW5nIGZyb20gc2xpZGUgMCB0byAtMVxuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gMzMzOyBcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gTWF0aC5hYnMoX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54KSA+IDAgPyBcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVUb0Rpc3QgLyBNYXRoLmFicyhfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLngpIDogXG5cdFx0XHRcdFx0XHRcdFx0XHQzMzM7XG5cblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IE1hdGgubWluKGZpbmlzaEFuaW1EdXJhdGlvbiwgNDAwKTtcblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IE1hdGgubWF4KGZpbmlzaEFuaW1EdXJhdGlvbiwgMjUwKTtcblx0XHR9XG5cblx0XHRpZihfY3Vyclpvb21lZEl0ZW1JbmRleCA9PT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdGl0ZW1DaGFuZ2VkID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdF9tYWluU2Nyb2xsQW5pbWF0aW5nID0gdHJ1ZTtcblx0XHRcblx0XHRfc2hvdXQoJ21haW5TY3JvbGxBbmltU3RhcnQnKTtcblxuXHRcdF9hbmltYXRlUHJvcCgnbWFpblNjcm9sbCcsIF9tYWluU2Nyb2xsUG9zLngsIGFuaW1hdGVUb1gsIGZpbmlzaEFuaW1EdXJhdGlvbiwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIFxuXHRcdFx0X21vdmVNYWluU2Nyb2xsLFxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXHRcdFx0XHRfbWFpblNjcm9sbEFuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0XHRfY3Vyclpvb21lZEl0ZW1JbmRleCA9IC0xO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoaXRlbUNoYW5nZWQgfHwgX2N1cnJab29tZWRJdGVtSW5kZXggIT09IF9jdXJyZW50SXRlbUluZGV4KSB7XG5cdFx0XHRcdFx0c2VsZi51cGRhdGVDdXJySXRlbSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRfc2hvdXQoJ21haW5TY3JvbGxBbmltQ29tcGxldGUnKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0aWYoaXRlbUNoYW5nZWQpIHtcblx0XHRcdHNlbGYudXBkYXRlQ3Vyckl0ZW0odHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZW1DaGFuZ2VkO1xuXHR9LFxuXG5cdF9jYWxjdWxhdGVab29tTGV2ZWwgPSBmdW5jdGlvbih0b3VjaGVzRGlzdGFuY2UpIHtcblx0XHRyZXR1cm4gIDEgLyBfc3RhcnRQb2ludHNEaXN0YW5jZSAqIHRvdWNoZXNEaXN0YW5jZSAqIF9zdGFydFpvb21MZXZlbDtcblx0fSxcblxuXHQvLyBSZXNldHMgem9vbSBpZiBpdCdzIG91dCBvZiBib3VuZHNcblx0X2NvbXBsZXRlWm9vbUdlc3R1cmUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZGVzdFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsLFxuXHRcdFx0bWluWm9vbUxldmVsID0gX2dldE1pblpvb21MZXZlbCgpLFxuXHRcdFx0bWF4Wm9vbUxldmVsID0gX2dldE1heFpvb21MZXZlbCgpO1xuXG5cdFx0aWYgKCBfY3Vyclpvb21MZXZlbCA8IG1pblpvb21MZXZlbCApIHtcblx0XHRcdGRlc3Rab29tTGV2ZWwgPSBtaW5ab29tTGV2ZWw7XG5cdFx0fSBlbHNlIGlmICggX2N1cnJab29tTGV2ZWwgPiBtYXhab29tTGV2ZWwgKSB7XG5cdFx0XHRkZXN0Wm9vbUxldmVsID0gbWF4Wm9vbUxldmVsO1xuXHRcdH1cblxuXHRcdHZhciBkZXN0T3BhY2l0eSA9IDEsXG5cdFx0XHRvblVwZGF0ZSxcblx0XHRcdGluaXRpYWxPcGFjaXR5ID0gX2JnT3BhY2l0eTtcblxuXHRcdGlmKF9vcGFjaXR5Q2hhbmdlZCAmJiAhX2lzWm9vbWluZ0luICYmICFfd2FzT3ZlckluaXRpYWxab29tICYmIF9jdXJyWm9vbUxldmVsIDwgbWluWm9vbUxldmVsKSB7XG5cdFx0XHQvL19jbG9zZWRCeVNjcm9sbCA9IHRydWU7XG5cdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZihfb3BhY2l0eUNoYW5nZWQpIHtcblx0XHRcdG9uVXBkYXRlID0gZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggIChkZXN0T3BhY2l0eSAtIGluaXRpYWxPcGFjaXR5KSAqIG5vdyArIGluaXRpYWxPcGFjaXR5ICk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHNlbGYuem9vbVRvKGRlc3Rab29tTGV2ZWwsIDAsIDIwMCwgIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBvblVwZGF0ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuX3JlZ2lzdGVyTW9kdWxlKCdHZXN0dXJlcycsIHtcblx0cHVibGljTWV0aG9kczoge1xuXG5cdFx0aW5pdEdlc3R1cmVzOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRvdWNoL3BvaW50ZXIvbW91c2UgZXZlbnRzXG5cdFx0XHR2YXIgYWRkRXZlbnROYW1lcyA9IGZ1bmN0aW9uKHByZWYsIGRvd24sIG1vdmUsIHVwLCBjYW5jZWwpIHtcblx0XHRcdFx0X2RyYWdTdGFydEV2ZW50ID0gcHJlZiArIGRvd247XG5cdFx0XHRcdF9kcmFnTW92ZUV2ZW50ID0gcHJlZiArIG1vdmU7XG5cdFx0XHRcdF9kcmFnRW5kRXZlbnQgPSBwcmVmICsgdXA7XG5cdFx0XHRcdGlmKGNhbmNlbCkge1xuXHRcdFx0XHRcdF9kcmFnQ2FuY2VsRXZlbnQgPSBwcmVmICsgY2FuY2VsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9kcmFnQ2FuY2VsRXZlbnQgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0X3BvaW50ZXJFdmVudEVuYWJsZWQgPSBfZmVhdHVyZXMucG9pbnRlckV2ZW50O1xuXHRcdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQgJiYgX2ZlYXR1cmVzLnRvdWNoKSB7XG5cdFx0XHRcdC8vIHdlIGRvbid0IG5lZWQgdG91Y2ggZXZlbnRzLCBpZiBicm93c2VyIHN1cHBvcnRzIHBvaW50ZXIgZXZlbnRzXG5cdFx0XHRcdF9mZWF0dXJlcy50b3VjaCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0XHRpZihuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuXHRcdFx0XHRcdC8vIElFMTAgcG9pbnRlciBldmVudHMgYXJlIGNhc2Utc2Vuc2l0aXZlXG5cdFx0XHRcdFx0YWRkRXZlbnROYW1lcygnTVNQb2ludGVyJywgJ0Rvd24nLCAnTW92ZScsICdVcCcsICdDYW5jZWwnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZGRFdmVudE5hbWVzKCdwb2ludGVyJywgJ2Rvd24nLCAnbW92ZScsICd1cCcsICdjYW5jZWwnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKF9mZWF0dXJlcy50b3VjaCkge1xuXHRcdFx0XHRhZGRFdmVudE5hbWVzKCd0b3VjaCcsICdzdGFydCcsICdtb3ZlJywgJ2VuZCcsICdjYW5jZWwnKTtcblx0XHRcdFx0X2xpa2VseVRvdWNoRGV2aWNlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ21vdXNlJywgJ2Rvd24nLCAnbW92ZScsICd1cCcpO1x0XG5cdFx0XHR9XG5cblx0XHRcdF91cE1vdmVFdmVudHMgPSBfZHJhZ01vdmVFdmVudCArICcgJyArIF9kcmFnRW5kRXZlbnQgICsgJyAnICsgIF9kcmFnQ2FuY2VsRXZlbnQ7XG5cdFx0XHRfZG93bkV2ZW50cyA9IF9kcmFnU3RhcnRFdmVudDtcblxuXHRcdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQgJiYgIV9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHRfbGlrZWx5VG91Y2hEZXZpY2UgPSAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSkgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBtYWtlIHZhcmlhYmxlIHB1YmxpY1xuXHRcdFx0c2VsZi5saWtlbHlUb3VjaERldmljZSA9IF9saWtlbHlUb3VjaERldmljZTsgXG5cdFx0XHRcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnU3RhcnRFdmVudF0gPSBfb25EcmFnU3RhcnQ7XG5cdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ01vdmVFdmVudF0gPSBfb25EcmFnTW92ZTtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnRW5kRXZlbnRdID0gX29uRHJhZ1JlbGVhc2U7IC8vIHRoZSBLcmFrZW5cblxuXHRcdFx0aWYoX2RyYWdDYW5jZWxFdmVudCkge1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0NhbmNlbEV2ZW50XSA9IF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnRW5kRXZlbnRdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCaW5kIG1vdXNlIGV2ZW50cyBvbiBkZXZpY2Ugd2l0aCBkZXRlY3RlZCBoYXJkd2FyZSB0b3VjaCBzdXBwb3J0LCBpbiBjYXNlIGl0IHN1cHBvcnRzIG11bHRpcGxlIHR5cGVzIG9mIGlucHV0LlxuXHRcdFx0aWYoX2ZlYXR1cmVzLnRvdWNoKSB7XG5cdFx0XHRcdF9kb3duRXZlbnRzICs9ICcgbW91c2Vkb3duJztcblx0XHRcdFx0X3VwTW92ZUV2ZW50cyArPSAnIG1vdXNlbW92ZSBtb3VzZXVwJztcblx0XHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnMubW91c2Vkb3duID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdTdGFydEV2ZW50XTtcblx0XHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnMubW91c2Vtb3ZlID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdNb3ZlRXZlbnRdO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZXVwID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF07XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFfbGlrZWx5VG91Y2hEZXZpY2UpIHtcblx0XHRcdFx0Ly8gZG9uJ3QgYWxsb3cgcGFuIHRvIG5leHQgc2xpZGUgZnJvbSB6b29tZWQgc3RhdGUgb24gRGVza3RvcFxuXHRcdFx0XHRfb3B0aW9ucy5hbGxvd1BhblRvTmV4dCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59KTtcblxuXG4vKj4+Z2VzdHVyZXMqL1xuXG4vKj4+c2hvdy1oaWRlLXRyYW5zaXRpb24qL1xuLyoqXG4gKiBzaG93LWhpZGUtdHJhbnNpdGlvbi5qczpcbiAqXG4gKiBNYW5hZ2VzIGluaXRpYWwgb3BlbmluZyBvciBjbG9zaW5nIHRyYW5zaXRpb24uXG4gKlxuICogSWYgeW91J3JlIG5vdCBwbGFubmluZyB0byB1c2UgdHJhbnNpdGlvbiBmb3IgZ2FsbGVyeSBhdCBhbGwsXG4gKiB5b3UgbWF5IHNldCBvcHRpb25zIGhpZGVBbmltYXRpb25EdXJhdGlvbiBhbmQgc2hvd0FuaW1hdGlvbkR1cmF0aW9uIHRvIDAsXG4gKiBhbmQganVzdCBkZWxldGUgc3RhcnRBbmltYXRpb24gZnVuY3Rpb24uXG4gKiBcbiAqL1xuXG5cbnZhciBfc2hvd09ySGlkZVRpbWVvdXQsXG5cdF9zaG93T3JIaWRlID0gZnVuY3Rpb24oaXRlbSwgaW1nLCBvdXQsIGNvbXBsZXRlRm4pIHtcblxuXHRcdGlmKF9zaG93T3JIaWRlVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9zaG93T3JIaWRlVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0X2luaXRpYWxab29tUnVubmluZyA9IHRydWU7XG5cdFx0X2luaXRpYWxDb250ZW50U2V0ID0gdHJ1ZTtcblx0XHRcblx0XHQvLyBkaW1lbnNpb25zIG9mIHNtYWxsIHRodW1ibmFpbCB7eDoseTosdzp9LlxuXHRcdC8vIEhlaWdodCBpcyBvcHRpb25hbCwgYXMgY2FsY3VsYXRlZCBiYXNlZCBvbiBsYXJnZSBpbWFnZS5cblx0XHR2YXIgdGh1bWJCb3VuZHM7IFxuXHRcdGlmKGl0ZW0uaW5pdGlhbExheW91dCkge1xuXHRcdFx0dGh1bWJCb3VuZHMgPSBpdGVtLmluaXRpYWxMYXlvdXQ7XG5cdFx0XHRpdGVtLmluaXRpYWxMYXlvdXQgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHVtYkJvdW5kcyA9IF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4gJiYgX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbihfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0fVxuXG5cdFx0dmFyIGR1cmF0aW9uID0gb3V0ID8gX29wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uIDogX29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uO1xuXG5cdFx0dmFyIG9uQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdF9zdG9wQW5pbWF0aW9uKCdpbml0aWFsWm9vbScpO1xuXHRcdFx0aWYoIW91dCkge1xuXHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cdFx0XHRcdGlmKGltZykge1xuXHRcdFx0XHRcdGltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0fVxuXHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1hbmltYXRlZC1pbicpO1xuXHRcdFx0XHRfc2hvdXQoJ2luaXRpYWxab29tJyArIChvdXQgPyAnT3V0RW5kJyA6ICdJbkVuZCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYudGVtcGxhdGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdFx0XHRzZWxmLmJnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoY29tcGxldGVGbikge1xuXHRcdFx0XHRjb21wbGV0ZUZuKCk7XG5cdFx0XHR9XG5cdFx0XHRfaW5pdGlhbFpvb21SdW5uaW5nID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdC8vIGlmIGJvdW5kcyBhcmVuJ3QgcHJvdmlkZWQsIGp1c3Qgb3BlbiBnYWxsZXJ5IHdpdGhvdXQgYW5pbWF0aW9uXG5cdFx0aWYoIWR1cmF0aW9uIHx8ICF0aHVtYkJvdW5kcyB8fCB0aHVtYkJvdW5kcy54ID09PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0X3Nob3V0KCdpbml0aWFsWm9vbScgKyAob3V0ID8gJ091dCcgOiAnSW4nKSApO1xuXG5cdFx0XHRfY3Vyclpvb21MZXZlbCA9IGl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfcGFuT2Zmc2V0LCAgaXRlbS5pbml0aWFsUG9zaXRpb24gKTtcblx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cblx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSBvdXQgPyAwIDogMTtcblx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblxuXHRcdFx0aWYoZHVyYXRpb24pIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0XHRcdH0sIGR1cmF0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNsb3NlV2l0aFJhZiA9IF9jbG9zZWRCeVNjcm9sbCxcblx0XHRcdFx0ZmFkZUV2ZXJ5dGhpbmcgPSAhc2VsZi5jdXJySXRlbS5zcmMgfHwgc2VsZi5jdXJySXRlbS5sb2FkRXJyb3IgfHwgX29wdGlvbnMuc2hvd0hpZGVPcGFjaXR5O1xuXHRcdFx0XG5cdFx0XHQvLyBhcHBseSBody1hY2NlbGVyYXRpb24gdG8gaW1hZ2Vcblx0XHRcdGlmKGl0ZW0ubWluaUltZykge1xuXHRcdFx0XHRpdGVtLm1pbmlJbWcuc3R5bGUud2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFvdXQpIHtcblx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSB0aHVtYkJvdW5kcy53IC8gaXRlbS53O1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnggPSB0aHVtYkJvdW5kcy54O1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSB0aHVtYkJvdW5kcy55IC0gX2luaXRhbFdpbmRvd1Njcm9sbFk7XG5cblx0XHRcdFx0c2VsZltmYWRlRXZlcnl0aGluZyA/ICd0ZW1wbGF0ZScgOiAnYmcnXS5zdHlsZS5vcGFjaXR5ID0gMC4wMDE7XG5cdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHR9XG5cblx0XHRcdF9yZWdpc3RlclN0YXJ0QW5pbWF0aW9uKCdpbml0aWFsWm9vbScpO1xuXHRcdFx0XG5cdFx0XHRpZihvdXQgJiYgIWNsb3NlV2l0aFJhZikge1xuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1hbmltYXRlZC1pbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihmYWRlRXZlcnl0aGluZykge1xuXHRcdFx0XHRpZihvdXQpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmtbIChjbG9zZVdpdGhSYWYgPyAncmVtb3ZlJyA6ICdhZGQnKSArICdDbGFzcycgXSh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1hbmltYXRlX29wYWNpdHknKTtcblx0XHRcdFx0XHR9LCAzMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X3Nob3dPckhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRfc2hvdXQoJ2luaXRpYWxab29tJyArIChvdXQgPyAnT3V0JyA6ICdJbicpICk7XG5cdFx0XHRcdFxuXG5cdFx0XHRcdGlmKCFvdXQpIHtcblxuXHRcdFx0XHRcdC8vIFwiaW5cIiBhbmltYXRpb24gYWx3YXlzIHVzZXMgQ1NTIHRyYW5zaXRpb25zIChpbnN0ZWFkIG9mIHJBRikuXG5cdFx0XHRcdFx0Ly8gQ1NTIHRyYW5zaXRpb24gd29yayBmYXN0ZXIgaGVyZSwgXG5cdFx0XHRcdFx0Ly8gYXMgZGV2ZWxvcGVyIG1heSBhbHNvIHdhbnQgdG8gYW5pbWF0ZSBvdGhlciB0aGluZ3MsIFxuXHRcdFx0XHRcdC8vIGxpa2UgdWkgb24gdG9wIG9mIHNsaWRpbmcgYXJlYSwgd2hpY2ggY2FuIGJlIGFuaW1hdGVkIGp1c3QgdmlhIENTU1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfcGFuT2Zmc2V0LCAgaXRlbS5pbml0aWFsUG9zaXRpb24gKTtcblx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblxuXHRcdFx0XHRcdGlmKGZhZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF9zaG93T3JIaWRlVGltZW91dCA9IHNldFRpbWVvdXQob25Db21wbGV0ZSwgZHVyYXRpb24gKyAyMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBcIm91dFwiIGFuaW1hdGlvbiB1c2VzIHJBRiBvbmx5IHdoZW4gUGhvdG9Td2lwZSBpcyBjbG9zZWQgYnkgYnJvd3NlciBzY3JvbGwsIHRvIHJlY2FsY3VsYXRlIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGRlc3Rab29tTGV2ZWwgPSB0aHVtYkJvdW5kcy53IC8gaXRlbS53LFxuXHRcdFx0XHRcdFx0aW5pdGlhbFBhbk9mZnNldCA9IHtcblx0XHRcdFx0XHRcdFx0eDogX3Bhbk9mZnNldC54LFxuXHRcdFx0XHRcdFx0XHR5OiBfcGFuT2Zmc2V0Lnlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpbml0aWFsWm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwsXG5cdFx0XHRcdFx0XHRpbml0YWxCZ09wYWNpdHkgPSBfYmdPcGFjaXR5LFxuXHRcdFx0XHRcdFx0b25VcGRhdGUgPSBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmKG5vdyA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gZGVzdFpvb21MZXZlbDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSB0aHVtYkJvdW5kcy54O1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9IHRodW1iQm91bmRzLnkgIC0gX2N1cnJlbnRXaW5kb3dTY3JvbGxZO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gKGRlc3Rab29tTGV2ZWwgLSBpbml0aWFsWm9vbUxldmVsKSAqIG5vdyArIGluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ID0gKHRodW1iQm91bmRzLnggLSBpbml0aWFsUGFuT2Zmc2V0LngpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC54O1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9ICh0aHVtYkJvdW5kcy55IC0gX2N1cnJlbnRXaW5kb3dTY3JvbGxZIC0gaW5pdGlhbFBhbk9mZnNldC55KSAqIG5vdyArIGluaXRpYWxQYW5PZmZzZXQueTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRcdFx0aWYoZmFkZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5vcGFjaXR5ID0gMSAtIG5vdztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoIGluaXRhbEJnT3BhY2l0eSAtIG5vdyAqIGluaXRhbEJnT3BhY2l0eSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYoY2xvc2VXaXRoUmFmKSB7XG5cdFx0XHRcdFx0XHRfYW5pbWF0ZVByb3AoJ2luaXRpYWxab29tJywgMCwgMSwgZHVyYXRpb24sIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBvblVwZGF0ZSwgb25Db21wbGV0ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG9uVXBkYXRlKDEpO1xuXHRcdFx0XHRcdFx0X3Nob3dPckhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBkdXJhdGlvbiArIDIwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0fSwgb3V0ID8gMjUgOiA5MCk7IC8vIE1haW4gcHVycG9zZSBvZiB0aGlzIGRlbGF5IGlzIHRvIGdpdmUgYnJvd3NlciB0aW1lIHRvIHBhaW50IGFuZFxuXHRcdFx0XHRcdC8vIGNyZWF0ZSBjb21wb3NpdGUgbGF5ZXJzIG9mIFBob3RvU3dpcGUgVUkgcGFydHMgKGJhY2tncm91bmQsIGNvbnRyb2xzLCBjYXB0aW9uLCBhcnJvd3MpLlxuXHRcdFx0XHRcdC8vIFdoaWNoIGF2b2lkcyBsYWcgYXQgdGhlIGJlZ2lubmluZyBvZiBzY2FsZSB0cmFuc2l0aW9uLlxuXHRcdH07XG5cdFx0c3RhcnRBbmltYXRpb24oKTtcblxuXHRcdFxuXHR9O1xuXG4vKj4+c2hvdy1oaWRlLXRyYW5zaXRpb24qL1xuXG4vKj4+aXRlbXMtY29udHJvbGxlciovXG4vKipcbipcbiogQ29udHJvbGxlciBtYW5hZ2VzIGdhbGxlcnkgaXRlbXMsIHRoZWlyIGRpbWVuc2lvbnMsIGFuZCB0aGVpciBjb250ZW50LlxuKiBcbiovXG5cbnZhciBfaXRlbXMsXG5cdF90ZW1wUGFuQXJlYVNpemUgPSB7fSxcblx0X2ltYWdlc1RvQXBwZW5kUG9vbCA9IFtdLFxuXHRfaW5pdGlhbENvbnRlbnRTZXQsXG5cdF9pbml0aWFsWm9vbVJ1bm5pbmcsXG5cdF9jb250cm9sbGVyRGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0aW5kZXg6IDAsXG5cdFx0ZXJyb3JNc2c6ICc8ZGl2IGNsYXNzPVwicHN3cF9fZXJyb3ItbXNnXCI+PGEgaHJlZj1cIiV1cmwlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIGltYWdlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLjwvZGl2PicsXG5cdFx0Zm9yY2VQcm9ncmVzc2l2ZUxvYWRpbmc6IGZhbHNlLCAvLyBUT0RPXG5cdFx0cHJlbG9hZDogWzEsMV0sXG5cdFx0Z2V0TnVtSXRlbXNGbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gX2l0ZW1zLmxlbmd0aDtcblx0XHR9XG5cdH07XG5cblxudmFyIF9nZXRJdGVtQXQsXG5cdF9nZXROdW1JdGVtcyxcblx0X2luaXRpYWxJc0xvb3AsXG5cdF9nZXRaZXJvQm91bmRzID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNlbnRlcjp7eDowLHk6MH0sIFxuXHRcdFx0bWF4Ont4OjAseTowfSwgXG5cdFx0XHRtaW46e3g6MCx5OjB9XG5cdFx0fTtcblx0fSxcblx0X2NhbGN1bGF0ZVNpbmdsZUl0ZW1QYW5Cb3VuZHMgPSBmdW5jdGlvbihpdGVtLCByZWFsUGFuRWxlbWVudFcsIHJlYWxQYW5FbGVtZW50SCApIHtcblx0XHR2YXIgYm91bmRzID0gaXRlbS5ib3VuZHM7XG5cblx0XHQvLyBwb3NpdGlvbiBvZiBlbGVtZW50IHdoZW4gaXQncyBjZW50ZXJlZFxuXHRcdGJvdW5kcy5jZW50ZXIueCA9IE1hdGgucm91bmQoKF90ZW1wUGFuQXJlYVNpemUueCAtIHJlYWxQYW5FbGVtZW50VykgLyAyKTtcblx0XHRib3VuZHMuY2VudGVyLnkgPSBNYXRoLnJvdW5kKChfdGVtcFBhbkFyZWFTaXplLnkgLSByZWFsUGFuRWxlbWVudEgpIC8gMikgKyBpdGVtLnZHYXAudG9wO1xuXG5cdFx0Ly8gbWF4aW11bSBwYW4gcG9zaXRpb25cblx0XHRib3VuZHMubWF4LnggPSAocmVhbFBhbkVsZW1lbnRXID4gX3RlbXBQYW5BcmVhU2l6ZS54KSA/IFxuXHRcdFx0XHRcdFx0XHRNYXRoLnJvdW5kKF90ZW1wUGFuQXJlYVNpemUueCAtIHJlYWxQYW5FbGVtZW50VykgOiBcblx0XHRcdFx0XHRcdFx0Ym91bmRzLmNlbnRlci54O1xuXHRcdFxuXHRcdGJvdW5kcy5tYXgueSA9IChyZWFsUGFuRWxlbWVudEggPiBfdGVtcFBhbkFyZWFTaXplLnkpID8gXG5cdFx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3RlbXBQYW5BcmVhU2l6ZS55IC0gcmVhbFBhbkVsZW1lbnRIKSArIGl0ZW0udkdhcC50b3AgOiBcblx0XHRcdFx0XHRcdFx0Ym91bmRzLmNlbnRlci55O1xuXHRcdFxuXHRcdC8vIG1pbmltdW0gcGFuIHBvc2l0aW9uXG5cdFx0Ym91bmRzLm1pbi54ID0gKHJlYWxQYW5FbGVtZW50VyA+IF90ZW1wUGFuQXJlYVNpemUueCkgPyAwIDogYm91bmRzLmNlbnRlci54O1xuXHRcdGJvdW5kcy5taW4ueSA9IChyZWFsUGFuRWxlbWVudEggPiBfdGVtcFBhbkFyZWFTaXplLnkpID8gaXRlbS52R2FwLnRvcCA6IGJvdW5kcy5jZW50ZXIueTtcblx0fSxcblx0X2NhbGN1bGF0ZUl0ZW1TaXplID0gZnVuY3Rpb24oaXRlbSwgdmlld3BvcnRTaXplLCB6b29tTGV2ZWwpIHtcblxuXHRcdGlmIChpdGVtLnNyYyAmJiAhaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdHZhciBpc0luaXRpYWwgPSAhem9vbUxldmVsO1xuXHRcdFx0XG5cdFx0XHRpZihpc0luaXRpYWwpIHtcblx0XHRcdFx0aWYoIWl0ZW0udkdhcCkge1xuXHRcdFx0XHRcdGl0ZW0udkdhcCA9IHt0b3A6MCxib3R0b206MH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYWxsb3dzIG92ZXJyaWRpbmcgdmVydGljYWwgbWFyZ2luIGZvciBpbmRpdmlkdWFsIGl0ZW1zXG5cdFx0XHRcdF9zaG91dCgncGFyc2VWZXJ0aWNhbE1hcmdpbicsIGl0ZW0pO1xuXHRcdFx0fVxuXG5cblx0XHRcdF90ZW1wUGFuQXJlYVNpemUueCA9IHZpZXdwb3J0U2l6ZS54O1xuXHRcdFx0X3RlbXBQYW5BcmVhU2l6ZS55ID0gdmlld3BvcnRTaXplLnkgLSBpdGVtLnZHYXAudG9wIC0gaXRlbS52R2FwLmJvdHRvbTtcblxuXHRcdFx0aWYgKGlzSW5pdGlhbCkge1xuXHRcdFx0XHR2YXIgaFJhdGlvID0gX3RlbXBQYW5BcmVhU2l6ZS54IC8gaXRlbS53O1xuXHRcdFx0XHR2YXIgdlJhdGlvID0gX3RlbXBQYW5BcmVhU2l6ZS55IC8gaXRlbS5oO1xuXG5cdFx0XHRcdGl0ZW0uZml0UmF0aW8gPSBoUmF0aW8gPCB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW87XG5cdFx0XHRcdC8vaXRlbS5maWxsUmF0aW8gPSBoUmF0aW8gPiB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW87XG5cblx0XHRcdFx0dmFyIHNjYWxlTW9kZSA9IF9vcHRpb25zLnNjYWxlTW9kZTtcblxuXHRcdFx0XHRpZiAoc2NhbGVNb2RlID09PSAnb3JpZycpIHtcblx0XHRcdFx0XHR6b29tTGV2ZWwgPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNjYWxlTW9kZSA9PT0gJ2ZpdCcpIHtcblx0XHRcdFx0XHR6b29tTGV2ZWwgPSBpdGVtLmZpdFJhdGlvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHpvb21MZXZlbCA+IDEpIHtcblx0XHRcdFx0XHR6b29tTGV2ZWwgPSAxO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5pbml0aWFsWm9vbUxldmVsID0gem9vbUxldmVsO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIWl0ZW0uYm91bmRzKSB7XG5cdFx0XHRcdFx0Ly8gcmV1c2UgYm91bmRzIG9iamVjdFxuXHRcdFx0XHRcdGl0ZW0uYm91bmRzID0gX2dldFplcm9Cb3VuZHMoKTsgXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIXpvb21MZXZlbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9jYWxjdWxhdGVTaW5nbGVJdGVtUGFuQm91bmRzKGl0ZW0sIGl0ZW0udyAqIHpvb21MZXZlbCwgaXRlbS5oICogem9vbUxldmVsKTtcblxuXHRcdFx0aWYgKGlzSW5pdGlhbCAmJiB6b29tTGV2ZWwgPT09IGl0ZW0uaW5pdGlhbFpvb21MZXZlbCkge1xuXHRcdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbiA9IGl0ZW0uYm91bmRzLmNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGl0ZW0uYm91bmRzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpdGVtLncgPSBpdGVtLmggPSAwO1xuXHRcdFx0aXRlbS5pbml0aWFsWm9vbUxldmVsID0gaXRlbS5maXRSYXRpbyA9IDE7XG5cdFx0XHRpdGVtLmJvdW5kcyA9IF9nZXRaZXJvQm91bmRzKCk7XG5cdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbiA9IGl0ZW0uYm91bmRzLmNlbnRlcjtcblxuXHRcdFx0Ly8gaWYgaXQncyBub3QgaW1hZ2UsIHdlIHJldHVybiB6ZXJvIGJvdW5kcyAoY29udGVudCBpcyBub3Qgem9vbWFibGUpXG5cdFx0XHRyZXR1cm4gaXRlbS5ib3VuZHM7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXG5cdFxuXG5cblx0X2FwcGVuZEltYWdlID0gZnVuY3Rpb24oaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGltZywgcHJldmVudEFuaW1hdGlvbiwga2VlcFBsYWNlaG9sZGVyKSB7XG5cdFx0XG5cblx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKGltZykge1xuXG5cdFx0XHRpdGVtLmltYWdlQXBwZW5kZWQgPSB0cnVlO1xuXHRcdFx0X3NldEltYWdlU2l6ZShpdGVtLCBpbWcsIChpdGVtID09PSBzZWxmLmN1cnJJdGVtICYmIF9yZW5kZXJNYXhSZXNvbHV0aW9uKSApO1xuXHRcdFx0XG5cdFx0XHRiYXNlRGl2LmFwcGVuZENoaWxkKGltZyk7XG5cblx0XHRcdGlmKGtlZXBQbGFjZWhvbGRlcikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0gJiYgaXRlbS5sb2FkZWQgJiYgaXRlbS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XG5cblxuXHRfcHJlbG9hZEltYWdlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGl0ZW0ubG9hZGluZyA9IHRydWU7XG5cdFx0aXRlbS5sb2FkZWQgPSBmYWxzZTtcblx0XHR2YXIgaW1nID0gaXRlbS5pbWcgPSBmcmFtZXdvcmsuY3JlYXRlRWwoJ3Bzd3BfX2ltZycsICdpbWcnKTtcblx0XHR2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aXRlbS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRpdGVtLmxvYWRlZCA9IHRydWU7XG5cblx0XHRcdGlmKGl0ZW0ubG9hZENvbXBsZXRlKSB7XG5cdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlKGl0ZW0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbS5pbWcgPSBudWxsOyAvLyBubyBuZWVkIHRvIHN0b3JlIGltYWdlIG9iamVjdFxuXHRcdFx0fVxuXHRcdFx0aW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gbnVsbDtcblx0XHRcdGltZyA9IG51bGw7XG5cdFx0fTtcblx0XHRpbWcub25sb2FkID0gb25Db21wbGV0ZTtcblx0XHRpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdH07XHRcdFxuXG5cdFx0aW1nLnNyYyA9IGl0ZW0uc3JjOy8vICsgJz9hPScgKyBNYXRoLnJhbmRvbSgpO1xuXG5cdFx0cmV0dXJuIGltZztcblx0fSxcblx0X2NoZWNrRm9yRXJyb3IgPSBmdW5jdGlvbihpdGVtLCBjbGVhblVwKSB7XG5cdFx0aWYoaXRlbS5zcmMgJiYgaXRlbS5sb2FkRXJyb3IgJiYgaXRlbS5jb250YWluZXIpIHtcblxuXHRcdFx0aWYoY2xlYW5VcCkge1xuXHRcdFx0XHRpdGVtLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aXRlbS5jb250YWluZXIuaW5uZXJIVE1MID0gX29wdGlvbnMuZXJyb3JNc2cucmVwbGFjZSgnJXVybCUnLCAgaXRlbS5zcmMgKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRfc2V0SW1hZ2VTaXplID0gZnVuY3Rpb24oaXRlbSwgaW1nLCBtYXhSZXMpIHtcblx0XHRpZighaXRlbS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZighaW1nKSB7XG5cdFx0XHRpbWcgPSBpdGVtLmNvbnRhaW5lci5sYXN0Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0dmFyIHcgPSBtYXhSZXMgPyBpdGVtLncgOiBNYXRoLnJvdW5kKGl0ZW0udyAqIGl0ZW0uZml0UmF0aW8pLFxuXHRcdFx0aCA9IG1heFJlcyA/IGl0ZW0uaCA6IE1hdGgucm91bmQoaXRlbS5oICogaXRlbS5maXRSYXRpbyk7XG5cdFx0XG5cdFx0aWYoaXRlbS5wbGFjZWhvbGRlciAmJiAhaXRlbS5sb2FkZWQpIHtcblx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdFx0fVxuXG5cdFx0aW1nLnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cdFx0aW1nLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHR9LFxuXHRfYXBwZW5kSW1hZ2VzUG9vbCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX2ltYWdlc1RvQXBwZW5kUG9vbC5sZW5ndGgpIHtcblx0XHRcdHZhciBwb29sSXRlbTtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9pbWFnZXNUb0FwcGVuZFBvb2wubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cG9vbEl0ZW0gPSBfaW1hZ2VzVG9BcHBlbmRQb29sW2ldO1xuXHRcdFx0XHRpZiggcG9vbEl0ZW0uaG9sZGVyLmluZGV4ID09PSBwb29sSXRlbS5pbmRleCApIHtcblx0XHRcdFx0XHRfYXBwZW5kSW1hZ2UocG9vbEl0ZW0uaW5kZXgsIHBvb2xJdGVtLml0ZW0sIHBvb2xJdGVtLmJhc2VEaXYsIHBvb2xJdGVtLmltZywgZmFsc2UsIHBvb2xJdGVtLmNsZWFyUGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gW107XG5cdFx0fVxuXHR9O1xuXHRcblxuXG5fcmVnaXN0ZXJNb2R1bGUoJ0NvbnRyb2xsZXInLCB7XG5cblx0cHVibGljTWV0aG9kczoge1xuXG5cdFx0bGF6eUxvYWRJdGVtOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0aW5kZXggPSBfZ2V0TG9vcGVkSWQoaW5kZXgpO1xuXHRcdFx0dmFyIGl0ZW0gPSBfZ2V0SXRlbUF0KGluZGV4KTtcblxuXHRcdFx0aWYoIWl0ZW0gfHwgKChpdGVtLmxvYWRlZCB8fCBpdGVtLmxvYWRpbmcpICYmICFfaXRlbXNOZWVkVXBkYXRlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9zaG91dCgnZ2V0dGluZ0RhdGEnLCBpbmRleCwgaXRlbSk7XG5cblx0XHRcdGlmICghaXRlbS5zcmMpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfcHJlbG9hZEltYWdlKGl0ZW0pO1xuXHRcdH0sXG5cdFx0aW5pdENvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnJhbWV3b3JrLmV4dGVuZChfb3B0aW9ucywgX2NvbnRyb2xsZXJEZWZhdWx0T3B0aW9ucywgdHJ1ZSk7XG5cdFx0XHRzZWxmLml0ZW1zID0gX2l0ZW1zID0gaXRlbXM7XG5cdFx0XHRfZ2V0SXRlbUF0ID0gc2VsZi5nZXRJdGVtQXQ7XG5cdFx0XHRfZ2V0TnVtSXRlbXMgPSBfb3B0aW9ucy5nZXROdW1JdGVtc0ZuOyAvL3NlbGYuZ2V0TnVtSXRlbXM7XG5cblxuXG5cdFx0XHRfaW5pdGlhbElzTG9vcCA9IF9vcHRpb25zLmxvb3A7XG5cdFx0XHRpZihfZ2V0TnVtSXRlbXMoKSA8IDMpIHtcblx0XHRcdFx0X29wdGlvbnMubG9vcCA9IGZhbHNlOyAvLyBkaXNhYmxlIGxvb3AgaWYgbGVzcyB0aGVuIDMgaXRlbXNcblx0XHRcdH1cblxuXHRcdFx0X2xpc3RlbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZGlmZikge1xuXG5cdFx0XHRcdHZhciBwID0gX29wdGlvbnMucHJlbG9hZCxcblx0XHRcdFx0XHRpc05leHQgPSBkaWZmID09PSBudWxsID8gdHJ1ZSA6IChkaWZmID49IDApLFxuXHRcdFx0XHRcdHByZWxvYWRCZWZvcmUgPSBNYXRoLm1pbihwWzBdLCBfZ2V0TnVtSXRlbXMoKSApLFxuXHRcdFx0XHRcdHByZWxvYWRBZnRlciA9IE1hdGgubWluKHBbMV0sIF9nZXROdW1JdGVtcygpICksXG5cdFx0XHRcdFx0aTtcblxuXG5cdFx0XHRcdGZvcihpID0gMTsgaSA8PSAoaXNOZXh0ID8gcHJlbG9hZEFmdGVyIDogcHJlbG9hZEJlZm9yZSk7IGkrKykge1xuXHRcdFx0XHRcdHNlbGYubGF6eUxvYWRJdGVtKF9jdXJyZW50SXRlbUluZGV4K2kpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcihpID0gMTsgaSA8PSAoaXNOZXh0ID8gcHJlbG9hZEJlZm9yZSA6IHByZWxvYWRBZnRlcik7IGkrKykge1xuXHRcdFx0XHRcdHNlbGYubGF6eUxvYWRJdGVtKF9jdXJyZW50SXRlbUluZGV4LWkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3RlbignaW5pdGlhbExheW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmN1cnJJdGVtLmluaXRpYWxMYXlvdXQgPSBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuICYmIF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4oX2N1cnJlbnRJdGVtSW5kZXgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9saXN0ZW4oJ21haW5TY3JvbGxBbmltQ29tcGxldGUnLCBfYXBwZW5kSW1hZ2VzUG9vbCk7XG5cdFx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbUluRW5kJywgX2FwcGVuZEltYWdlc1Bvb2wpO1xuXG5cblxuXHRcdFx0X2xpc3RlbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaXRlbTtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGl0ZW0gPSBfaXRlbXNbaV07XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHJlZmVyZW5jZSB0byBET00gZWxlbWVudHMsIGZvciBHQ1xuXHRcdFx0XHRcdGlmKGl0ZW0uY29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLmNvbnRhaW5lciA9IG51bGw7IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoaXRlbS5pbWcpIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoaXRlbS5wcmVsb2FkZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0ucHJlbG9hZGVyID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gaXRlbS5sb2FkRXJyb3IgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbCA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cblx0XHRnZXRJdGVtQXQ6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0XHRyZXR1cm4gX2l0ZW1zW2luZGV4XSAhPT0gdW5kZWZpbmVkID8gX2l0ZW1zW2luZGV4XSA6IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhbGxvd1Byb2dyZXNzaXZlSW1nOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIDEuIFByb2dyZXNzaXZlIGltYWdlIGxvYWRpbmcgaXNuJ3Qgd29ya2luZyBvbiB3ZWJraXQvYmxpbmsgXG5cdFx0XHQvLyAgICB3aGVuIGh3LWFjY2VsZXJhdGlvbiAoZS5nLiB0cmFuc2xhdGVaKSBpcyBhcHBsaWVkIHRvIElNRyBlbGVtZW50LlxuXHRcdFx0Ly8gICAgVGhhdCdzIHdoeSBpbiBQaG90b1N3aXBlIHBhcmVudCBlbGVtZW50IGdldHMgem9vbSB0cmFuc2Zvcm0sIG5vdCBpbWFnZSBpdHNlbGYuXG5cdFx0XHQvLyAgICBcblx0XHRcdC8vIDIuIFByb2dyZXNzaXZlIGltYWdlIGxvYWRpbmcgc29tZXRpbWVzIGJsaW5rcyBpbiB3ZWJraXQvYmxpbmsgd2hlbiBhcHBseWluZyBhbmltYXRpb24gdG8gcGFyZW50IGVsZW1lbnQuXG5cdFx0XHQvLyAgICBUaGF0J3Mgd2h5IGl0J3MgZGlzYWJsZWQgb24gdG91Y2ggZGV2aWNlcyAobWFpbmx5IGJlY2F1c2Ugb2Ygc3dpcGUgdHJhbnNpdGlvbilcblx0XHRcdC8vICAgIFxuXHRcdFx0Ly8gMy4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBzb21ldGltZXMgZG9lc24ndCB3b3JrIGluIElFICh1cCB0byAxMSkuXG5cblx0XHRcdC8vIERvbid0IGFsbG93IHByb2dyZXNzaXZlIGxvYWRpbmcgb24gbm9uLWxhcmdlIHRvdWNoIGRldmljZXNcblx0XHRcdHJldHVybiBfb3B0aW9ucy5mb3JjZVByb2dyZXNzaXZlTG9hZGluZyB8fCAhX2xpa2VseVRvdWNoRGV2aWNlIHx8IF9vcHRpb25zLm1vdXNlVXNlZCB8fCBzY3JlZW4ud2lkdGggPiAxMjAwOyBcblx0XHRcdC8vIDEyMDAgLSB0byBlbGltaW5hdGUgdG91Y2ggZGV2aWNlcyB3aXRoIGxhcmdlIHNjcmVlbiAobGlrZSBDaHJvbWVib29rIFBpeGVsKVxuXHRcdH0sXG5cblx0XHRzZXRDb250ZW50OiBmdW5jdGlvbihob2xkZXIsIGluZGV4KSB7XG5cblx0XHRcdGlmKF9vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0aW5kZXggPSBfZ2V0TG9vcGVkSWQoaW5kZXgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcHJldkl0ZW0gPSBzZWxmLmdldEl0ZW1BdChob2xkZXIuaW5kZXgpO1xuXHRcdFx0aWYocHJldkl0ZW0pIHtcblx0XHRcdFx0cHJldkl0ZW0uY29udGFpbmVyID0gbnVsbDtcblx0XHRcdH1cblx0XG5cdFx0XHR2YXIgaXRlbSA9IHNlbGYuZ2V0SXRlbUF0KGluZGV4KSxcblx0XHRcdFx0aW1nO1xuXHRcdFx0XG5cdFx0XHRpZighaXRlbSkge1xuXHRcdFx0XHRob2xkZXIuZWwuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWxsb3cgdG8gb3ZlcnJpZGUgZGF0YVxuXHRcdFx0X3Nob3V0KCdnZXR0aW5nRGF0YScsIGluZGV4LCBpdGVtKTtcblxuXHRcdFx0aG9sZGVyLmluZGV4ID0gaW5kZXg7XG5cdFx0XHRob2xkZXIuaXRlbSA9IGl0ZW07XG5cblx0XHRcdC8vIGJhc2UgY29udGFpbmVyIERJViBpcyBjcmVhdGVkIG9ubHkgb25jZSBmb3IgZWFjaCBvZiAzIGhvbGRlcnNcblx0XHRcdHZhciBiYXNlRGl2ID0gaXRlbS5jb250YWluZXIgPSBmcmFtZXdvcmsuY3JlYXRlRWwoJ3Bzd3BfX3pvb20td3JhcCcpOyBcblxuXHRcdFx0XG5cblx0XHRcdGlmKCFpdGVtLnNyYyAmJiBpdGVtLmh0bWwpIHtcblx0XHRcdFx0aWYoaXRlbS5odG1sLnRhZ05hbWUpIHtcblx0XHRcdFx0XHRiYXNlRGl2LmFwcGVuZENoaWxkKGl0ZW0uaHRtbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmFzZURpdi5pbm5lckhUTUwgPSBpdGVtLmh0bWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2NoZWNrRm9yRXJyb3IoaXRlbSk7XG5cblx0XHRcdF9jYWxjdWxhdGVJdGVtU2l6ZShpdGVtLCBfdmlld3BvcnRTaXplKTtcblx0XHRcdFxuXHRcdFx0aWYoaXRlbS5zcmMgJiYgIWl0ZW0ubG9hZEVycm9yICYmICFpdGVtLmxvYWRlZCkge1xuXG5cdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlID0gZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHRcdFx0Ly8gZ2FsbGVyeSBjbG9zZWQgYmVmb3JlIGltYWdlIGZpbmlzaGVkIGxvYWRpbmdcblx0XHRcdFx0XHRpZighX2lzT3Blbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIGhvbGRlciBoYXNuJ3QgY2hhbmdlZCB3aGlsZSBpbWFnZSB3YXMgbG9hZGluZ1xuXHRcdFx0XHRcdGlmKGhvbGRlciAmJiBob2xkZXIuaW5kZXggPT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0aWYoIF9jaGVja0ZvckVycm9yKGl0ZW0sIHRydWUpICkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmxvYWRDb21wbGV0ZSA9IGl0ZW0uaW1nID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKGl0ZW0pO1xuXG5cdFx0XHRcdFx0XHRcdGlmKGhvbGRlci5pbmRleCA9PT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyByZWNhbGN1bGF0ZSBkaW1lbnNpb25zXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51cGRhdGVDdXJyWm9vbUl0ZW0oKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiggIWl0ZW0uaW1hZ2VBcHBlbmRlZCApIHtcblx0XHRcdFx0XHRcdFx0aWYoX2ZlYXR1cmVzLnRyYW5zZm9ybSAmJiAoX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX2luaXRpYWxab29tUnVubmluZykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW06aXRlbSxcblx0XHRcdFx0XHRcdFx0XHRcdGJhc2VEaXY6YmFzZURpdixcblx0XHRcdFx0XHRcdFx0XHRcdGltZzppdGVtLmltZyxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4OmluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0aG9sZGVyOmhvbGRlcixcblx0XHRcdFx0XHRcdFx0XHRcdGNsZWFyUGxhY2Vob2xkZXI6dHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF9hcHBlbmRJbWFnZShpbmRleCwgaXRlbSwgYmFzZURpdiwgaXRlbS5pbWcsIF9tYWluU2Nyb2xsQW5pbWF0aW5nIHx8IF9pbml0aWFsWm9vbVJ1bm5pbmcsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyByZW1vdmUgcHJlbG9hZGVyICYgbWluaS1pbWdcblx0XHRcdFx0XHRcdFx0aWYoIV9pbml0aWFsWm9vbVJ1bm5pbmcgJiYgaXRlbS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlID0gbnVsbDtcblx0XHRcdFx0XHRpdGVtLmltZyA9IG51bGw7IC8vIG5vIG5lZWQgdG8gc3RvcmUgaW1hZ2UgZWxlbWVudCBhZnRlciBpdCdzIGFkZGVkXG5cblx0XHRcdFx0XHRfc2hvdXQoJ2ltYWdlTG9hZENvbXBsZXRlJywgaW5kZXgsIGl0ZW0pO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmKGZyYW1ld29yay5mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgcGxhY2Vob2xkZXJDbGFzc05hbWUgPSAncHN3cF9faW1nIHBzd3BfX2ltZy0tcGxhY2Vob2xkZXInOyBcblx0XHRcdFx0XHRwbGFjZWhvbGRlckNsYXNzTmFtZSArPSAoaXRlbS5tc3JjID8gJycgOiAnIHBzd3BfX2ltZy0tcGxhY2Vob2xkZXItLWJsYW5rJyk7XG5cblx0XHRcdFx0XHR2YXIgcGxhY2Vob2xkZXIgPSBmcmFtZXdvcmsuY3JlYXRlRWwocGxhY2Vob2xkZXJDbGFzc05hbWUsIGl0ZW0ubXNyYyA/ICdpbWcnIDogJycpO1xuXHRcdFx0XHRcdGlmKGl0ZW0ubXNyYykge1xuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXIuc3JjID0gaXRlbS5tc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0sIHBsYWNlaG9sZGVyKTtcblxuXHRcdFx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXG5cdFx0XHRcdFxuXG5cdFx0XHRcdGlmKCFpdGVtLmxvYWRpbmcpIHtcblx0XHRcdFx0XHRfcHJlbG9hZEltYWdlKGl0ZW0pO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHRpZiggc2VsZi5hbGxvd1Byb2dyZXNzaXZlSW1nKCkgKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCBhcHBlbmQgaW1hZ2Vcblx0XHRcdFx0XHRpZighX2luaXRpYWxDb250ZW50U2V0ICYmIF9mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdFx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGl0ZW06aXRlbSwgXG5cdFx0XHRcdFx0XHRcdGJhc2VEaXY6YmFzZURpdiwgXG5cdFx0XHRcdFx0XHRcdGltZzppdGVtLmltZywgXG5cdFx0XHRcdFx0XHRcdGluZGV4OmluZGV4LCBcblx0XHRcdFx0XHRcdFx0aG9sZGVyOmhvbGRlclxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9hcHBlbmRJbWFnZShpbmRleCwgaXRlbSwgYmFzZURpdiwgaXRlbS5pbWcsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZihpdGVtLnNyYyAmJiAhaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdFx0Ly8gaW1hZ2Ugb2JqZWN0IGlzIGNyZWF0ZWQgZXZlcnkgdGltZSwgZHVlIHRvIGJ1Z3Mgb2YgaW1hZ2UgbG9hZGluZyAmIGRlbGF5IHdoZW4gc3dpdGNoaW5nIGltYWdlc1xuXHRcdFx0XHRpbWcgPSBmcmFtZXdvcmsuY3JlYXRlRWwoJ3Bzd3BfX2ltZycsICdpbWcnKTtcblx0XHRcdFx0aW1nLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRpbWcuc3JjID0gaXRlbS5zcmM7XG5cdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSwgaW1nKTtcblx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpbWcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdGlmKCFfaW5pdGlhbENvbnRlbnRTZXQgJiYgaW5kZXggPT09IF9jdXJyZW50SXRlbUluZGV4KSB7XG5cdFx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IGJhc2VEaXYuc3R5bGU7XG5cdFx0XHRcdF9zaG93T3JIaWRlKGl0ZW0sIChpbWcgfHxpdGVtLmltZykgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdGhvbGRlci5lbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdGhvbGRlci5lbC5hcHBlbmRDaGlsZChiYXNlRGl2KTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5TbGlkZTogZnVuY3Rpb24oIGl0ZW0gKSB7XG5cdFx0XHRpZihpdGVtLmltZyApIHtcblx0XHRcdFx0aXRlbS5pbWcub25sb2FkID0gaXRlbS5pbWcub25lcnJvciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpdGVtLmxvYWRlZCA9IGl0ZW0ubG9hZGluZyA9IGl0ZW0uaW1nID0gaXRlbS5pbWFnZUFwcGVuZGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG4vKj4+aXRlbXMtY29udHJvbGxlciovXG5cbi8qPj50YXAqL1xuLyoqXG4gKiB0YXAuanM6XG4gKlxuICogRGlzcGxhdGNoZXMgdGFwIGFuZCBkb3VibGUtdGFwIGV2ZW50cy5cbiAqIFxuICovXG5cbnZhciB0YXBUaW1lcixcblx0dGFwUmVsZWFzZVBvaW50ID0ge30sXG5cdF9kaXNwYXRjaFRhcEV2ZW50ID0gZnVuY3Rpb24ob3JpZ0V2ZW50LCByZWxlYXNlUG9pbnQsIHBvaW50ZXJUeXBlKSB7XHRcdFxuXHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKSxcblx0XHRcdGVEZXRhaWwgPSB7XG5cdFx0XHRcdG9yaWdFdmVudDpvcmlnRXZlbnQsIFxuXHRcdFx0XHR0YXJnZXQ6b3JpZ0V2ZW50LnRhcmdldCwgXG5cdFx0XHRcdHJlbGVhc2VQb2ludDogcmVsZWFzZVBvaW50LCBcblx0XHRcdFx0cG9pbnRlclR5cGU6cG9pbnRlclR5cGUgfHwgJ3RvdWNoJ1xuXHRcdFx0fTtcblxuXHRcdGUuaW5pdEN1c3RvbUV2ZW50KCAncHN3cFRhcCcsIHRydWUsIHRydWUsIGVEZXRhaWwgKTtcblx0XHRvcmlnRXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG5cdH07XG5cbl9yZWdpc3Rlck1vZHVsZSgnVGFwJywge1xuXHRwdWJsaWNNZXRob2RzOiB7XG5cdFx0aW5pdFRhcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRfbGlzdGVuKCdmaXJzdFRvdWNoU3RhcnQnLCBzZWxmLm9uVGFwU3RhcnQpO1xuXHRcdFx0X2xpc3RlbigndG91Y2hSZWxlYXNlJywgc2VsZi5vblRhcFJlbGVhc2UpO1xuXHRcdFx0X2xpc3RlbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0YXBSZWxlYXNlUG9pbnQgPSB7fTtcblx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRvblRhcFN0YXJ0OiBmdW5jdGlvbih0b3VjaExpc3QpIHtcblx0XHRcdGlmKHRvdWNoTGlzdC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0YXBUaW1lcik7XG5cdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVGFwUmVsZWFzZTogZnVuY3Rpb24oZSwgcmVsZWFzZVBvaW50KSB7XG5cdFx0XHRpZighcmVsZWFzZVBvaW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9tb3ZlZCAmJiAhX2lzTXVsdGl0b3VjaCAmJiAhX251bUFuaW1hdGlvbnMpIHtcblx0XHRcdFx0dmFyIHAwID0gcmVsZWFzZVBvaW50O1xuXHRcdFx0XHRpZih0YXBUaW1lcikge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0YXBUaW1lcik7XG5cdFx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGFwZWQgb24gdGhlIHNhbWUgcGxhY2Vcblx0XHRcdFx0XHRpZiAoIF9pc05lYXJieVBvaW50cyhwMCwgdGFwUmVsZWFzZVBvaW50KSApIHtcblx0XHRcdFx0XHRcdF9zaG91dCgnZG91YmxlVGFwJywgcDApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHJlbGVhc2VQb2ludC50eXBlID09PSAnbW91c2UnKSB7XG5cdFx0XHRcdFx0X2Rpc3BhdGNoVGFwRXZlbnQoZSwgcmVsZWFzZVBvaW50LCAnbW91c2UnKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgY2xpY2tlZFRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdC8vIGF2b2lkIGRvdWJsZSB0YXAgZGVsYXkgb24gYnV0dG9ucyBhbmQgZWxlbWVudHMgdGhhdCBoYXZlIGNsYXNzIHBzd3BfX3NpbmdsZS10YXBcblx0XHRcdFx0aWYoY2xpY2tlZFRhZ05hbWUgPT09ICdCVVRUT04nIHx8IGZyYW1ld29yay5oYXNDbGFzcyhlLnRhcmdldCwgJ3Bzd3BfX3NpbmdsZS10YXAnKSApIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9lcXVhbGl6ZVBvaW50cyh0YXBSZWxlYXNlUG9pbnQsIHAwKTtcblxuXHRcdFx0XHR0YXBUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2Rpc3BhdGNoVGFwRXZlbnQoZSwgcmVsZWFzZVBvaW50KTtcblx0XHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cdFx0XHRcdH0sIDMwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PnRhcCovXG5cbi8qPj5kZXNrdG9wLXpvb20qL1xuLyoqXG4gKlxuICogZGVza3RvcC16b29tLmpzOlxuICpcbiAqIC0gQmluZHMgbW91c2V3aGVlbCBldmVudCBmb3IgcGFuaW5nIHpvb21lZCBpbWFnZS5cbiAqIC0gTWFuYWdlcyBcImRyYWdnaW5nXCIsIFwiem9vbWVkLWluXCIsIFwiem9vbS1vdXRcIiBjbGFzc2VzLlxuICogICAod2hpY2ggYXJlIHVzZWQgZm9yIGN1cnNvcnMgYW5kIHpvb20gaWNvbilcbiAqIC0gQWRkcyB0b2dnbGVEZXNrdG9wWm9vbSBmdW5jdGlvbi5cbiAqIFxuICovXG5cbnZhciBfd2hlZWxEZWx0YTtcblx0XG5fcmVnaXN0ZXJNb2R1bGUoJ0Rlc2t0b3Bab29tJywge1xuXG5cdHB1YmxpY01ldGhvZHM6IHtcblxuXHRcdGluaXREZXNrdG9wWm9vbTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmKF9vbGRJRSkge1xuXHRcdFx0XHQvLyBubyB6b29tIGZvciBvbGQgSUUgKDw9OClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfbGlrZWx5VG91Y2hEZXZpY2UpIHtcblx0XHRcdFx0Ly8gaWYgZGV0ZWN0ZWQgaGFyZHdhcmUgdG91Y2ggc3VwcG9ydCwgd2Ugd2FpdCB1bnRpbCBtb3VzZSBpcyB1c2VkLFxuXHRcdFx0XHQvLyBhbmQgb25seSB0aGVuIGFwcGx5IGRlc2t0b3Atem9vbSBmZWF0dXJlc1xuXHRcdFx0XHRfbGlzdGVuKCdtb3VzZVVzZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZWxmLnNldHVwRGVza3RvcFpvb20oKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLnNldHVwRGVza3RvcFpvb20odHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0c2V0dXBEZXNrdG9wWm9vbTogZnVuY3Rpb24ob25Jbml0KSB7XG5cblx0XHRcdF93aGVlbERlbHRhID0ge307XG5cblx0XHRcdHZhciBldmVudHMgPSAnd2hlZWwgbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCc7XG5cdFx0XHRcblx0XHRcdF9saXN0ZW4oJ2JpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQodGVtcGxhdGUsIGV2ZW50cywgIHNlbGYuaGFuZGxlTW91c2VXaGVlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF93aGVlbERlbHRhKSB7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh0ZW1wbGF0ZSwgZXZlbnRzLCBzZWxmLmhhbmRsZU1vdXNlV2hlZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi5tb3VzZVpvb21lZEluID0gZmFsc2U7XG5cblx0XHRcdHZhciBoYXNEcmFnZ2luZ0NsYXNzLFxuXHRcdFx0XHR1cGRhdGVab29tYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHNlbGYubW91c2Vab29tZWRJbikge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tem9vbWVkLWluJyk7XG5cdFx0XHRcdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPCAxKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tLWFsbG93ZWQnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tem9vbS1hbGxvd2VkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW92ZURyYWdnaW5nQ2xhc3MoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlRHJhZ2dpbmdDbGFzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGhhc0RyYWdnaW5nQ2xhc3MpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWRyYWdnaW5nJyk7XG5cdFx0XHRcdFx0XHRoYXNEcmFnZ2luZ0NsYXNzID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRfbGlzdGVuKCdyZXNpemUnICwgdXBkYXRlWm9vbWFibGUpO1xuXHRcdFx0X2xpc3RlbignYWZ0ZXJDaGFuZ2UnICwgdXBkYXRlWm9vbWFibGUpO1xuXHRcdFx0X2xpc3RlbigncG9pbnRlckRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoc2VsZi5tb3VzZVpvb21lZEluKSB7XG5cdFx0XHRcdFx0aGFzRHJhZ2dpbmdDbGFzcyA9IHRydWU7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0tZHJhZ2dpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbGlzdGVuKCdwb2ludGVyVXAnLCByZW1vdmVEcmFnZ2luZ0NsYXNzKTtcblxuXHRcdFx0aWYoIW9uSW5pdCkge1xuXHRcdFx0XHR1cGRhdGVab29tYWJsZSgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWw6IGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPD0gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRpZiggX29wdGlvbnMubW9kYWwgKSB7XG5cblx0XHRcdFx0XHRpZiAoIV9vcHRpb25zLmNsb3NlT25TY3JvbGwgfHwgX251bUFuaW1hdGlvbnMgfHwgX2lzRHJhZ2dpbmcpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYoX3RyYW5zZm9ybUtleSAmJiBNYXRoLmFicyhlLmRlbHRhWSkgPiAyKSB7XG5cdFx0XHRcdFx0XHQvLyBjbG9zZSBQaG90b1N3aXBlXG5cdFx0XHRcdFx0XHQvLyBpZiBicm93c2VyIHN1cHBvcnRzIHRyYW5zZm9ybXMgJiBzY3JvbGwgY2hhbmdlZCBlbm91Z2hcblx0XHRcdFx0XHRcdF9jbG9zZWRCeVNjcm9sbCA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFsbG93IGp1c3Qgb25lIGV2ZW50IHRvIGZpcmVcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxuXHRcdFx0X3doZWVsRGVsdGEueCA9IDA7XG5cblx0XHRcdGlmKCdkZWx0YVgnIGluIGUpIHtcblx0XHRcdFx0aWYoZS5kZWx0YU1vZGUgPT09IDEgLyogRE9NX0RFTFRBX0xJTkUgKi8pIHtcblx0XHRcdFx0XHQvLyAxOCAtIGF2ZXJhZ2UgbGluZSBoZWlnaHRcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS54ID0gZS5kZWx0YVggKiAxODtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gZS5kZWx0YVkgKiAxODtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS54ID0gZS5kZWx0YVg7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IGUuZGVsdGFZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoJ3doZWVsRGVsdGEnIGluIGUpIHtcblx0XHRcdFx0aWYoZS53aGVlbERlbHRhWCkge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSAtMC4xNiAqIGUud2hlZWxEZWx0YVg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoZS53aGVlbERlbHRhWSkge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSAtMC4xNiAqIGUud2hlZWxEZWx0YVk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IC0wLjE2ICogZS53aGVlbERlbHRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoJ2RldGFpbCcgaW4gZSkge1xuXHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gZS5kZXRhaWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9jYWxjdWxhdGVQYW5Cb3VuZHMoX2N1cnJab29tTGV2ZWwsIHRydWUpO1xuXG5cdFx0XHR2YXIgbmV3UGFuWCA9IF9wYW5PZmZzZXQueCAtIF93aGVlbERlbHRhLngsXG5cdFx0XHRcdG5ld1BhblkgPSBfcGFuT2Zmc2V0LnkgLSBfd2hlZWxEZWx0YS55O1xuXG5cdFx0XHQvLyBvbmx5IHByZXZlbnQgc2Nyb2xsaW5nIGluIG5vbm1vZGFsIG1vZGUgd2hlbiBub3QgYXQgZWRnZXNcblx0XHRcdGlmIChfb3B0aW9ucy5tb2RhbCB8fFxuXHRcdFx0XHQoXG5cdFx0XHRcdG5ld1BhblggPD0gX2N1cnJQYW5Cb3VuZHMubWluLnggJiYgbmV3UGFuWCA+PSBfY3VyclBhbkJvdW5kcy5tYXgueCAmJlxuXHRcdFx0XHRuZXdQYW5ZIDw9IF9jdXJyUGFuQm91bmRzLm1pbi55ICYmIG5ld1BhblkgPj0gX2N1cnJQYW5Cb3VuZHMubWF4Lnlcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUT0RPOiB1c2UgckFGIGluc3RlYWQgb2YgbW91c2V3aGVlbD9cblx0XHRcdHNlbGYucGFuVG8obmV3UGFuWCwgbmV3UGFuWSk7XG5cdFx0fSxcblxuXHRcdHRvZ2dsZURlc2t0b3Bab29tOiBmdW5jdGlvbihjZW50ZXJQb2ludCkge1xuXHRcdFx0Y2VudGVyUG9pbnQgPSBjZW50ZXJQb2ludCB8fCB7eDpfdmlld3BvcnRTaXplLngvMiArIF9vZmZzZXQueCwgeTpfdmlld3BvcnRTaXplLnkvMiArIF9vZmZzZXQueSB9O1xuXG5cdFx0XHR2YXIgZG91YmxlVGFwWm9vbUxldmVsID0gX29wdGlvbnMuZ2V0RG91YmxlVGFwWm9vbSh0cnVlLCBzZWxmLmN1cnJJdGVtKTtcblx0XHRcdHZhciB6b29tT3V0ID0gX2N1cnJab29tTGV2ZWwgPT09IGRvdWJsZVRhcFpvb21MZXZlbDtcblx0XHRcdFxuXHRcdFx0c2VsZi5tb3VzZVpvb21lZEluID0gIXpvb21PdXQ7XG5cblx0XHRcdHNlbGYuem9vbVRvKHpvb21PdXQgPyBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwgOiBkb3VibGVUYXBab29tTGV2ZWwsIGNlbnRlclBvaW50LCAzMzMpO1xuXHRcdFx0ZnJhbWV3b3JrWyAoIXpvb21PdXQgPyAnYWRkJyA6ICdyZW1vdmUnKSArICdDbGFzcyddKHRlbXBsYXRlLCAncHN3cC0tem9vbWVkLWluJyk7XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cbi8qPj5kZXNrdG9wLXpvb20qL1xuXG4vKj4+aGlzdG9yeSovXG4vKipcbiAqXG4gKiBoaXN0b3J5LmpzOlxuICpcbiAqIC0gQmFjayBidXR0b24gdG8gY2xvc2UgZ2FsbGVyeS5cbiAqIFxuICogLSBVbmlxdWUgVVJMIGZvciBlYWNoIHNsaWRlOiBleGFtcGxlLmNvbS8mcGlkPTEmZ2lkPTNcbiAqICAgKHdoZXJlIFBJRCBpcyBwaWN0dXJlIGluZGV4LCBhbmQgR0lEIGFuZCBnYWxsZXJ5IGluZGV4KVxuICogICBcbiAqIC0gU3dpdGNoIFVSTCB3aGVuIHNsaWRlcyBjaGFuZ2UuXG4gKiBcbiAqL1xuXG5cbnZhciBfaGlzdG9yeURlZmF1bHRPcHRpb25zID0ge1xuXHRoaXN0b3J5OiB0cnVlLFxuXHRnYWxsZXJ5VUlEOiAxXG59O1xuXG52YXIgX2hpc3RvcnlVcGRhdGVUaW1lb3V0LFxuXHRfaGFzaENoYW5nZVRpbWVvdXQsXG5cdF9oYXNoQW5pbUNoZWNrVGltZW91dCxcblx0X2hhc2hDaGFuZ2VkQnlTY3JpcHQsXG5cdF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSxcblx0X2hhc2hSZXNldGVkLFxuXHRfaW5pdGlhbEhhc2gsXG5cdF9oaXN0b3J5Q2hhbmdlZCxcblx0X2Nsb3NlZEZyb21VUkwsXG5cdF91cmxDaGFuZ2VkT25jZSxcblx0X3dpbmRvd0xvYyxcblxuXHRfc3VwcG9ydHNQdXNoU3RhdGUsXG5cblx0X2dldEhhc2ggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3dpbmRvd0xvYy5oYXNoLnN1YnN0cmluZygxKTtcblx0fSxcblx0X2NsZWFuSGlzdG9yeVRpbWVvdXRzID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaGlzdG9yeVVwZGF0ZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfaGlzdG9yeVVwZGF0ZVRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdGlmKF9oYXNoQW5pbUNoZWNrVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oYXNoQW5pbUNoZWNrVGltZW91dCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIHBpZCAtIFBpY3R1cmUgaW5kZXhcblx0Ly8gZ2lkIC0gR2FsbGVyeSBpbmRleFxuXHRfcGFyc2VJdGVtSW5kZXhGcm9tVVJMID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhc2ggPSBfZ2V0SGFzaCgpLFxuXHRcdFx0cGFyYW1zID0ge307XG5cblx0XHRpZihoYXNoLmxlbmd0aCA8IDUpIHsgLy8gcGlkPTFcblx0XHRcdHJldHVybiBwYXJhbXM7XG5cdFx0fVxuXG5cdFx0dmFyIGksIHZhcnMgPSBoYXNoLnNwbGl0KCcmJyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKCF2YXJzW2ldKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KCc9Jyk7XHRcblx0XHRcdGlmKHBhaXIubGVuZ3RoIDwgMikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHBhcmFtc1twYWlyWzBdXSA9IHBhaXJbMV07XG5cdFx0fVxuXHRcdGlmKF9vcHRpb25zLmdhbGxlcnlQSURzKSB7XG5cdFx0XHQvLyBkZXRlY3QgY3VzdG9tIHBpZCBpbiBoYXNoIGFuZCBzZWFyY2ggZm9yIGl0IGFtb25nIHRoZSBpdGVtcyBjb2xsZWN0aW9uXG5cdFx0XHR2YXIgc2VhcmNoZm9yID0gcGFyYW1zLnBpZDtcblx0XHRcdHBhcmFtcy5waWQgPSAwOyAvLyBpZiBjdXN0b20gcGlkIGNhbm5vdCBiZSBmb3VuZCwgZmFsbGJhY2sgdG8gdGhlIGZpcnN0IGl0ZW1cblx0XHRcdGZvcihpID0gMDsgaSA8IF9pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZihfaXRlbXNbaV0ucGlkID09PSBzZWFyY2hmb3IpIHtcblx0XHRcdFx0XHRwYXJhbXMucGlkID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXJhbXMucGlkID0gcGFyc2VJbnQocGFyYW1zLnBpZCwxMCktMTtcblx0XHR9XG5cdFx0aWYoIHBhcmFtcy5waWQgPCAwICkge1xuXHRcdFx0cGFyYW1zLnBpZCA9IDA7XG5cdFx0fVxuXHRcdHJldHVybiBwYXJhbXM7XG5cdH0sXG5cdF91cGRhdGVIYXNoID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaGFzaEFuaW1DaGVja1RpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfaGFzaEFuaW1DaGVja1RpbWVvdXQpO1xuXHRcdH1cblxuXG5cdFx0aWYoX251bUFuaW1hdGlvbnMgfHwgX2lzRHJhZ2dpbmcpIHtcblx0XHRcdC8vIGNoYW5naW5nIGJyb3dzZXIgVVJMIGZvcmNlcyBsYXlvdXQvcGFpbnQgaW4gc29tZSBicm93c2Vycywgd2hpY2ggY2F1c2VzIG5vdGljYWJsZSBsYWcgZHVyaW5nIGFuaW1hdGlvblxuXHRcdFx0Ly8gdGhhdCdzIHdoeSB3ZSB1cGRhdGUgaGFzaCBvbmx5IHdoZW4gbm8gYW5pbWF0aW9ucyBydW5uaW5nXG5cdFx0XHRfaGFzaEFuaW1DaGVja1RpbWVvdXQgPSBzZXRUaW1lb3V0KF91cGRhdGVIYXNoLCA1MDApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZihfaGFzaENoYW5nZWRCeVNjcmlwdCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oYXNoQ2hhbmdlVGltZW91dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9oYXNoQ2hhbmdlZEJ5U2NyaXB0ID0gdHJ1ZTtcblx0XHR9XG5cblxuXHRcdHZhciBwaWQgPSAoX2N1cnJlbnRJdGVtSW5kZXggKyAxKTtcblx0XHR2YXIgaXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cdFx0aWYoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncGlkJykpIHtcblx0XHRcdC8vIGNhcnJ5IGZvcndhcmQgYW55IGN1c3RvbSBwaWQgYXNzaWduZWQgdG8gdGhlIGl0ZW1cblx0XHRcdHBpZCA9IGl0ZW0ucGlkO1xuXHRcdH1cblx0XHR2YXIgbmV3SGFzaCA9IF9pbml0aWFsSGFzaCArICcmJyAgKyAgJ2dpZD0nICsgX29wdGlvbnMuZ2FsbGVyeVVJRCArICcmJyArICdwaWQ9JyArIHBpZDtcblxuXHRcdGlmKCFfaGlzdG9yeUNoYW5nZWQpIHtcblx0XHRcdGlmKF93aW5kb3dMb2MuaGFzaC5pbmRleE9mKG5ld0hhc2gpID09PSAtMSkge1xuXHRcdFx0XHRfdXJsQ2hhbmdlZE9uY2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZmlyc3QgdGltZSAtIGFkZCBuZXcgaGlzb3J5IHJlY29yZCwgdGhlbiBqdXN0IHJlcGxhY2Vcblx0XHR9XG5cblx0XHR2YXIgbmV3VVJMID0gX3dpbmRvd0xvYy5ocmVmLnNwbGl0KCcjJylbMF0gKyAnIycgKyAgbmV3SGFzaDtcblxuXHRcdGlmKCBfc3VwcG9ydHNQdXNoU3RhdGUgKSB7XG5cblx0XHRcdGlmKCcjJyArIG5ld0hhc2ggIT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRcdGhpc3RvcnlbX2hpc3RvcnlDaGFuZ2VkID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJ10oJycsIGRvY3VtZW50LnRpdGxlLCBuZXdVUkwpO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKF9oaXN0b3J5Q2hhbmdlZCkge1xuXHRcdFx0XHRfd2luZG93TG9jLnJlcGxhY2UoIG5ld1VSTCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3dpbmRvd0xvYy5oYXNoID0gbmV3SGFzaDtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0XG5cblx0XHRfaGlzdG9yeUNoYW5nZWQgPSB0cnVlO1xuXHRcdF9oYXNoQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRfaGFzaENoYW5nZWRCeVNjcmlwdCA9IGZhbHNlO1xuXHRcdH0sIDYwKTtcblx0fTtcblxuXG5cblx0XG5cbl9yZWdpc3Rlck1vZHVsZSgnSGlzdG9yeScsIHtcblxuXHRcblxuXHRwdWJsaWNNZXRob2RzOiB7XG5cdFx0aW5pdEhpc3Rvcnk6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRmcmFtZXdvcmsuZXh0ZW5kKF9vcHRpb25zLCBfaGlzdG9yeURlZmF1bHRPcHRpb25zLCB0cnVlKTtcblxuXHRcdFx0aWYoICFfb3B0aW9ucy5oaXN0b3J5ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblxuXHRcdFx0X3dpbmRvd0xvYyA9IHdpbmRvdy5sb2NhdGlvbjtcblx0XHRcdF91cmxDaGFuZ2VkT25jZSA9IGZhbHNlO1xuXHRcdFx0X2Nsb3NlZEZyb21VUkwgPSBmYWxzZTtcblx0XHRcdF9oaXN0b3J5Q2hhbmdlZCA9IGZhbHNlO1xuXHRcdFx0X2luaXRpYWxIYXNoID0gX2dldEhhc2goKTtcblx0XHRcdF9zdXBwb3J0c1B1c2hTdGF0ZSA9ICgncHVzaFN0YXRlJyBpbiBoaXN0b3J5KTtcblxuXG5cdFx0XHRpZihfaW5pdGlhbEhhc2guaW5kZXhPZignZ2lkPScpID4gLTEpIHtcblx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnNwbGl0KCcmZ2lkPScpWzBdO1xuXHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc3BsaXQoJz9naWQ9JylbMF07XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0X2xpc3RlbignYWZ0ZXJDaGFuZ2UnLCBzZWxmLnVwZGF0ZVVSTCk7XG5cdFx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdoYXNoY2hhbmdlJywgc2VsZi5vbkhhc2hDaGFuZ2UpO1xuXHRcdFx0fSk7XG5cblxuXHRcdFx0dmFyIHJldHVyblRvT3JpZ2luYWwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2hhc2hSZXNldGVkID0gdHJ1ZTtcblx0XHRcdFx0aWYoIV9jbG9zZWRGcm9tVVJMKSB7XG5cblx0XHRcdFx0XHRpZihfdXJsQ2hhbmdlZE9uY2UpIHtcblx0XHRcdFx0XHRcdGhpc3RvcnkuYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGlmKF9pbml0aWFsSGFzaCkge1xuXHRcdFx0XHRcdFx0XHRfd2luZG93TG9jLmhhc2ggPSBfaW5pdGlhbEhhc2g7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoX3N1cHBvcnRzUHVzaFN0YXRlKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyByZW1vdmUgaGFzaCBmcm9tIHVybCB3aXRob3V0IHJlZnJlc2hpbmcgaXQgb3Igc2Nyb2xsaW5nIHRvIHRvcFxuXHRcdFx0XHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCBkb2N1bWVudC50aXRsZSwgIF93aW5kb3dMb2MucGF0aG5hbWUgKyBfd2luZG93TG9jLnNlYXJjaCApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF93aW5kb3dMb2MuaGFzaCA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2NsZWFuSGlzdG9yeVRpbWVvdXRzKCk7XG5cdFx0XHR9O1xuXG5cblx0XHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihfY2xvc2VkQnlTY3JvbGwpIHtcblx0XHRcdFx0XHQvLyBpZiBQaG90b1N3aXBlIGlzIGNsb3NlZCBieSBzY3JvbGwsIHdlIGdvIFwiYmFja1wiIGJlZm9yZSB0aGUgY2xvc2luZyBhbmltYXRpb24gc3RhcnRzXG5cdFx0XHRcdFx0Ly8gdGhpcyBpcyBkb25lIHRvIGtlZXAgdGhlIHNjcm9sbCBwb3NpdGlvblxuXHRcdFx0XHRcdHJldHVyblRvT3JpZ2luYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCFfaGFzaFJlc2V0ZWQpIHtcblx0XHRcdFx0XHRyZXR1cm5Ub09yaWdpbmFsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X2xpc3RlbignZmlyc3RVcGRhdGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfcGFyc2VJdGVtSW5kZXhGcm9tVVJMKCkucGlkO1xuXHRcdFx0fSk7XG5cblx0XHRcdFxuXG5cdFx0XHRcblx0XHRcdHZhciBpbmRleCA9IF9pbml0aWFsSGFzaC5pbmRleE9mKCdwaWQ9Jyk7XG5cdFx0XHRpZihpbmRleCA+IC0xKSB7XG5cdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuXHRcdFx0XHRpZihfaW5pdGlhbEhhc2guc2xpY2UoLTEpID09PSAnJicpIHtcblx0XHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc2xpY2UoMCwgLTEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX2lzT3BlbikgeyAvLyBoYXNuJ3QgZGVzdHJveWVkIHlldFxuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBzZWxmLm9uSGFzaENoYW5nZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDQwKTtcblx0XHRcdFxuXHRcdH0sXG5cdFx0b25IYXNoQ2hhbmdlOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYoX2dldEhhc2goKSA9PT0gX2luaXRpYWxIYXNoKSB7XG5cblx0XHRcdFx0X2Nsb3NlZEZyb21VUkwgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmKCFfaGFzaENoYW5nZWRCeVNjcmlwdCkge1xuXG5cdFx0XHRcdF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSA9IHRydWU7XG5cdFx0XHRcdHNlbGYuZ29UbyggX3BhcnNlSXRlbUluZGV4RnJvbVVSTCgpLnBpZCApO1xuXHRcdFx0XHRfaGFzaENoYW5nZWRCeUhpc3RvcnkgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cdFx0dXBkYXRlVVJMOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRGVsYXkgdGhlIHVwZGF0ZSBvZiBVUkwsIHRvIGF2b2lkIGxhZyBkdXJpbmcgdHJhbnNpdGlvbiwgXG5cdFx0XHQvLyBhbmQgdG8gbm90IHRvIHRyaWdnZXIgYWN0aW9ucyBsaWtlIFwicmVmcmVzaCBwYWdlIHNvdW5kXCIgb3IgXCJibGlua2luZyBmYXZpY29uXCIgdG8gb2Z0ZW5cblx0XHRcdFxuXHRcdFx0X2NsZWFuSGlzdG9yeVRpbWVvdXRzKCk7XG5cdFx0XHRcblxuXHRcdFx0aWYoX2hhc2hDaGFuZ2VkQnlIaXN0b3J5KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9oaXN0b3J5Q2hhbmdlZCkge1xuXHRcdFx0XHRfdXBkYXRlSGFzaCgpOyAvLyBmaXJzdCB0aW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfaGlzdG9yeVVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF91cGRhdGVIYXNoLCA4MDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XG5cdH1cbn0pO1xuXG5cbi8qPj5oaXN0b3J5Ki9cblx0ZnJhbWV3b3JrLmV4dGVuZChzZWxmLCBwdWJsaWNNZXRob2RzKTsgfTtcblx0cmV0dXJuIFBob3RvU3dpcGU7XG59KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IS0tIDxkaXYgY2xhc3M9XFxcInl3emctZ2FsbGVyeVxcXCIgZGF0YS15d3pnLWdhbGxlcnk9XFxcImNsb3NlZFxcXCI+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJ5d3pnLWdhbGxlcnlfX2Nsb3NlXFxcIiBkYXRhLXl3emctZ2FsbGVyeS1jbG9zZT5DbG9zZTwvYnV0dG9uPiAtLT5cXG4gIDwhLS0gUm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGUuIE11c3QgaGF2ZSBjbGFzcyBwc3dwLiAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInBzd3BcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuXFxuICAgICAgPCEtLSBCYWNrZ3JvdW5kIG9mIFBob3RvU3dpcGUuXFxuICAgICAgICAgIEl0J3MgYSBzZXBhcmF0ZSBlbGVtZW50IGFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIGZhc3RlciB0aGFuIHJnYmEoKS4gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fYmdcXFwiPjwvZGl2PlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdyYXBwZXIgd2l0aCBvdmVyZmxvdzpoaWRkZW4uIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX3Njcm9sbC13cmFwXFxcIj5cXG5cXG4gICAgICAgICAgPCEtLSBDb250YWluZXIgdGhhdCBob2xkcyBzbGlkZXMuXFxuICAgICAgICAgICAgICBQaG90b1N3aXBlIGtlZXBzIG9ubHkgMyBvZiB0aGVtIGluIHRoZSBET00gdG8gc2F2ZSBtZW1vcnkuXFxuICAgICAgICAgICAgICBEb24ndCBtb2RpZnkgdGhlc2UgMyBwc3dwX19pdGVtIGVsZW1lbnRzLCBkYXRhIGlzIGFkZGVkIGxhdGVyIG9uLiAtLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX2l0ZW1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9faXRlbVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19pdGVtXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDwhLS0gRGVmYXVsdCAoUGhvdG9Td2lwZVVJX0RlZmF1bHQpIGludGVyZmFjZSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLiBDYW4gYmUgY2hhbmdlZC4gLS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX3VpIHBzd3BfX3VpLS1oaWRkZW5cXFwiPlxcblxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fdG9wLWJhclxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgPCEtLSAgQ29udHJvbHMgYXJlIHNlbGYtZXhwbGFuYXRvcnkuIE9yZGVyIGNhbiBiZSBjaGFuZ2VkLiAtLT5cXG5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19jb3VudGVyXFxcIj48L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1kb3dubG9hZFxcXCIgdGl0bGU9XFxcIkRvd25sb2FkIGEgLnppcCBvZiBhbGwgaW1hZ2VzLCBhbmQgYSBzbmFwc2hvdCBvZiB0aGUgbGlzdGluZ1xcXCIgZGF0YS15d3pnLWRvd25sb2FkLWFsbD5Eb3dubG9hZCBhbGw8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInBzd3BfX3pvb21cXFwiIHR5cGU9XFxcInJhbmdlXFxcIiBpZD1cXFwicHN3cF9fem9vbVxcXCIgbmFtZT1cXFwiem9vbVxcXCIgdmFsdWU9XFxcIjBcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMFxcXCIgc3RlcD1cXFwiMVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tem9vbVxcXCIgdGl0bGU9XFxcIlpvb20gaW4vb3V0XFxcIj48L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1mc1xcXCIgdGl0bGU9XFxcIlRvZ2dsZSBmdWxsc2NyZWVuXFxcIj48L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1zaGFyZVxcXCIgdGl0bGU9XFxcIlNoYXJlXFxcIj48L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1jbG9zZVxcXCIgdGl0bGU9XFxcIkNsb3NlIChFc2MpXFxcIj48L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgICA8IS0tIFByZWxvYWRlciBkZW1vIGh0dHBzOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1IgLS0+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBlbGVtZW50IHdpbGwgZ2V0IGNsYXNzIHBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHdoZW4gcHJlbG9hZGVyIGlzIHJ1bm5pbmcgLS0+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fcHJlbG9hZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fcHJlbG9hZGVyX19pY25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX3ByZWxvYWRlcl9fY3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX3ByZWxvYWRlcl9fZG9udXRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19zaGFyZS10b29sdGlwXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnRcXFwiIHRpdGxlPVxcXCJQcmV2aW91cyAoYXJyb3cgbGVmdClcXFwiPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcXFwiIHRpdGxlPVxcXCJOZXh0IChhcnJvdyByaWdodClcXFwiPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19jYXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19jYXB0aW9uX19jZW50ZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwvZGl2PlxcblxcbiAgPCEtLSA8L2Rpdj5cXG48L2Rpdj4gLS0+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiaW1wb3J0IHsgSW1hZ2VQcm9iZSB9IGZyb20gJ0B6ZXJvZGVwcy9pbWFnZS1wcm9iZSc7XG5cbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlci8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbWFnZVByb2JlRmV0Y2godXJsKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHsgc2lnbmFsIH0gPSBjb250cm9sbGVyO1xuXG5cbiAgcmV0dXJuIGZldGNoKHVybCwgeyBzaWduYWwgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBsZXQgc2l6ZTtcblxuICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gcHJvY2Vzcyh7IGRvbmUsIHZhbHVlIH0pIHtcbiAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gQnVmZmVyLmNvbmNhdChbcmVzdWx0LCBCdWZmZXIuZnJvbSh2YWx1ZSldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gQnVmZmVyLmZyb20odmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJbWFnZVByb2JlIGF0dGVtcHRzIHRvIHJlYWQgYW4gb2Zmc2V0IHZhbHVlIGluIHRoZSBidWZmZXJcbiAgICAgICAgICAgIC8vIElmIHRoYXQgb2Zmc2V0IGlzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBidWZmZXIsIGFuIGVycm9yXG4gICAgICAgICAgICAvLyBpcyB0aHJvd24uXG4gICAgICAgICAgICBzaXplID0gSW1hZ2VQcm9iZS5mcm9tQnVmZmVyKHJlc3VsdClcbiAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGRldGVybWluZSBpbWFnZSBzaXplLCB3aWxsIGtlZXAgdHJ5aW5nJywgZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGNvbnRpbnVlIHJlYWRpbmcgc3RyZWFtXG4gICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gc2l6ZSk7XG4gICAgfSk7XG59XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ5d3pnLWxhdW5jaGVyXFxcIj5cXG4gIDxidXR0b24gY2xhc3M9XFxcInl3emctYnV0dG9uXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiIGRpc2FibGVkIGRhdGEteXd6Zy1nYWxsZXJ5LW9wZW4+XFxuICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBjbGFzcz1cXFwieXd6Zy1idXR0b25fX2xhdW5jaC1pY29uXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcXG4gICAgICAgIHZpZXdCb3g9XFxcIjAgMCAzODQgMzg0XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cXG4gICAgICA8Zz5cXG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cXFwiMjM0LjY2NywwIDIzNC42NjcsNDIuNjY3IDMxMS4xNDcsNDIuNjY3IDEwMS40NCwyNTIuMzczIDEzMS42MjcsMjgyLjU2IDM0MS4zMzMsNzIuODUzIDM0MS4zMzMsMTQ5LjMzM1xcbiAgICAgICAgICAzODQsMTQ5LjMzMyAzODQsMCBcXHRcXHRcXHRcXFwiLz5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0zNDEuMzMzLDM0MS4zMzNINDIuNjY3VjQyLjY2N0gxOTJWMEg0Mi42NjdDMTkuMDkzLDAsMCwxOS4wOTMsMCw0Mi42Njd2Mjk4LjY2N0MwLDM2NC45MDcsMTkuMDkzLDM4NCw0Mi42NjcsMzg0XFxuICAgICAgICAgIGgyOTguNjY3QzM2NC45MDcsMzg0LDM4NCwzNjQuOTA3LDM4NCwzNDEuMzMzVjE5MmgtNDIuNjY3VjM0MS4zMzN6XFxcIi8+XFxuICAgICAgPC9nPlxcbiAgICA8L3N2Zz5cXG4gICAgPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGNsYXNzPVxcXCJ5d3pnLWJ1dHRvbl9fbG9hZGluZy1pY29uXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcXG4gICAgICB2aWV3Qm94PVxcXCIwIDAgNDY5LjMzMyA0NjkuMzMzXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cXG4gICAgICAgIDxnPlxcbiAgICAgICAgICA8cGF0aCBkPVxcXCJNMjM0LjY2NywzNjIuNjY3Yy03MC43MiwwLTEyOC01Ny4yOC0xMjgtMTI4YzAtMjEuNjUzLDUuNDQtNDEuOTIsMTQuODI3LTU5Ljg0TDkwLjM0NywxNDMuNjhcXG4gICAgICAgICAgICBDNzMuODEzLDE3MC4xMzMsNjQsMjAxLjE3Myw2NCwyMzQuNjY3YzAsOTQuMjkzLDc2LjM3MywxNzAuNjY3LDE3MC42NjcsMTcwLjY2N3Y2NEwzMjAsMzg0bC04NS4zMzMtODUuMzMzVjM2Mi42Njd6XFxcIi8+XFxuICAgICAgICAgIDxwYXRoIGQ9XFxcIk0yMzQuNjY3LDY0VjBsLTg1LjMzMyw4NS4zMzNsODUuMzMzLDg1LjMzM3YtNjRjNzAuNzIsMCwxMjgsNTcuMjgsMTI4LDEyOGMwLDIxLjY1My01LjQ0LDQxLjkyLTE0LjgyNyw1OS44NFxcbiAgICAgICAgICAgIGwzMS4xNDcsMzEuMTQ3YzE2LjUzMy0yNi40NTMsMjYuMzQ3LTU3LjQ5MywyNi4zNDctOTAuOTg3QzQwNS4zMzMsMTQwLjM3MywzMjguOTYsNjQsMjM0LjY2Nyw2NHpcXFwiLz5cXG4gICAgICAgIDwvZz5cXG4gICAgPC9zdmc+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvKipcbipcbiogVUkgb24gdG9wIG9mIG1haW4gc2xpZGluZyBhcmVhIChjYXB0aW9uLCBhcnJvd3MsIGNsb3NlIGJ1dHRvbiwgZXRjLikuXG4qIEJ1aWx0IGp1c3QgdXNpbmcgcHVibGljIG1ldGhvZHMvcHJvcGVydGllcyBvZiBQaG90b1N3aXBlLlxuKlxuKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJvb3QuUGhvdG9Td2lwZVVJID0gZmFjdG9yeSgpO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cblxudmFyIFBob3RvU3dpcGVVSSA9XG4gZnVuY3Rpb24ocHN3cCwgZnJhbWV3b3JrKSB7XG5cblx0dmFyIHVpID0gdGhpcztcblx0dmFyIF9vdmVybGF5VUlVcGRhdGVkID0gZmFsc2UsXG5cdFx0X2NvbnRyb2xzVmlzaWJsZSA9IHRydWUsXG5cdFx0X2Z1bGxzY3JlbkFQSSxcblx0XHRfY29udHJvbHMsXG5cdFx0X2NhcHRpb25Db250YWluZXIsXG5cdFx0X2Zha2VDYXB0aW9uQ29udGFpbmVyLFxuXHRcdF9pbmRleEluZGljYXRvcixcbiAgICBfc2hhcmVCdXR0b24sXG4gICAgX3pvb21TbGlkZXIsXG5cdFx0X3NoYXJlTW9kYWwsXG5cdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSB0cnVlLFxuXHRcdF9pbml0YWxDbG9zZU9uU2Nyb2xsVmFsdWUsXG5cdFx0X2lzSWRsZSxcblx0XHRfbGlzdGVuLFxuXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3IsXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3JIaWRkZW4sXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3JUaW1lb3V0LFxuXG5cdFx0X2dhbGxlcnlIYXNPbmVTbGlkZSxcblxuXHRcdF9vcHRpb25zLFxuXHRcdF9kZWZhdWx0VUlPcHRpb25zID0ge1xuXHRcdFx0YmFyc1NpemU6IHt0b3A6NDQsIGJvdHRvbTonYXV0byd9LFxuXHRcdFx0Y2xvc2VFbENsYXNzZXM6IFsnaXRlbScsICdjYXB0aW9uJywgJ3pvb20td3JhcCcsICd1aScsICd0b3AtYmFyJ10sXG5cdFx0XHR0aW1lVG9JZGxlOiA0MDAwLFxuXHRcdFx0dGltZVRvSWRsZU91dHNpZGU6IDEwMDAsXG5cdFx0XHRsb2FkaW5nSW5kaWNhdG9yRGVsYXk6IDEwMDAsIC8vIDJzXG5cblx0XHRcdGFkZENhcHRpb25IVE1MRm46IGZ1bmN0aW9uKGl0ZW0sIGNhcHRpb25FbCAvKiwgaXNGYWtlICovKSB7XG5cdFx0XHRcdGlmKCFpdGVtLnRpdGxlKSB7XG5cdFx0XHRcdFx0Y2FwdGlvbkVsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXB0aW9uRWwuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbG9zZUVsOnRydWUsXG5cdFx0XHRjYXB0aW9uRWw6IHRydWUsXG5cdFx0XHRmdWxsc2NyZWVuRWw6IHRydWUsXG5cdFx0XHR6b29tRWw6IHRydWUsXG5cdFx0XHRzaGFyZUVsOiB0cnVlLFxuXHRcdFx0Y291bnRlckVsOiB0cnVlLFxuXHRcdFx0YXJyb3dFbDogdHJ1ZSxcbiAgICAgIHByZWxvYWRlckVsOiB0cnVlLFxuICAgICAgem9vbUVsOiB0cnVlLFxuICAgICAgem9vbUxhYmVsRWw6IHRydWUsXG5cblx0XHRcdHRhcFRvQ2xvc2U6IGZhbHNlLFxuXHRcdFx0dGFwVG9Ub2dnbGVDb250cm9sczogdHJ1ZSxcblxuXHRcdFx0Y2xpY2tUb0Nsb3NlTm9uWm9vbWFibGU6IHRydWUsXG5cblx0XHRcdHNoYXJlQnV0dG9uczogW1xuXHRcdFx0XHR7aWQ6J2ZhY2Vib29rJywgbGFiZWw6J1NoYXJlIG9uIEZhY2Vib29rJywgdXJsOidodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19J30sXG5cdFx0XHRcdHtpZDondHdpdHRlcicsIGxhYmVsOidUd2VldCcsIHVybDonaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD17e3RleHR9fSZ1cmw9e3t1cmx9fSd9LFxuXHRcdFx0XHR7aWQ6J3BpbnRlcmVzdCcsIGxhYmVsOidQaW4gaXQnLCB1cmw6J2h0dHA6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8nK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnP3VybD17e3VybH19Jm1lZGlhPXt7aW1hZ2VfdXJsfX0mZGVzY3JpcHRpb249e3t0ZXh0fX0nfSxcblx0XHRcdFx0e2lkOidkb3dubG9hZCcsIGxhYmVsOidEb3dubG9hZCBpbWFnZScsIHVybDone3tyYXdfaW1hZ2VfdXJsfX0nLCBkb3dubG9hZDp0cnVlfVxuXHRcdFx0XSxcblx0XHRcdGdldEltYWdlVVJMRm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiBwc3dwLmN1cnJJdGVtLnNyYyB8fCAnJztcblx0XHRcdH0sXG5cdFx0XHRnZXRQYWdlVVJMRm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHRcdH0sXG5cdFx0XHRnZXRUZXh0Rm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiBwc3dwLmN1cnJJdGVtLnRpdGxlIHx8ICcnO1xuXHRcdFx0fSxcblxuXHRcdFx0aW5kZXhJbmRpY2F0b3JTZXA6ICcgLyAnLFxuXHRcdFx0Zml0Q29udHJvbHNXaWR0aDogMTIwMFxuXG5cdFx0fSxcblx0XHRfYmxvY2tDb250cm9sc1RhcCxcblx0XHRfYmxvY2tDb250cm9sc1RhcFRpbWVvdXQ7XG5cblxuXG5cdHZhciBfb25Db250cm9sc1RhcCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmKF9ibG9ja0NvbnRyb2xzVGFwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuXHRcdFx0aWYoX29wdGlvbnMudGltZVRvSWRsZSAmJiBfb3B0aW9ucy5tb3VzZVVzZWQgJiYgIV9pc0lkbGUpIHtcblx0XHRcdFx0Ly8gcmVzZXQgaWRsZSB0aW1lclxuXHRcdFx0XHRfb25JZGxlTW91c2VNb3ZlKCk7XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCxcblx0XHRcdFx0dWlFbGVtZW50LFxuXHRcdFx0XHRjbGlja2VkQ2xhc3MgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnLFxuXHRcdFx0XHRmb3VuZDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF91aUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHVpRWxlbWVudCA9IF91aUVsZW1lbnRzW2ldO1xuXHRcdFx0XHRpZih1aUVsZW1lbnQub25UYXAgJiYgY2xpY2tlZENsYXNzLmluZGV4T2YoJ3Bzd3BfXycgKyB1aUVsZW1lbnQubmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0dWlFbGVtZW50Lm9uVGFwKCk7XG5cdFx0XHRcdFx0Zm91bmQgPSB0cnVlO1xuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZm91bmQpIHtcblx0XHRcdFx0aWYoZS5zdG9wUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBTb21lIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgcHJldmVudCBnaG9zdCBjbGljayBldmVudFxuXHRcdFx0XHQvLyB3aGVuIHByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBvbiB0b3VjaHN0YXJ0IGFuZC9vciB0b3VjaGVuZC5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gVGhpcyBoYXBwZW5zIG9uIHY0LjMsIDQuMiwgNC4xLFxuXHRcdFx0XHQvLyBvbGRlciB2ZXJzaW9ucyBzdHJhbmdlbHkgd29yayBjb3JyZWN0bHksXG5cdFx0XHRcdC8vIGJ1dCBqdXN0IGluIGNhc2Ugd2UgYWRkIGRlbGF5IG9uIGFsbCBvZiB0aGVtKVxuXHRcdFx0XHR2YXIgdGFwRGVsYXkgPSBmcmFtZXdvcmsuZmVhdHVyZXMuaXNPbGRBbmRyb2lkID8gNjAwIDogMzA7XG5cdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2Jsb2NrQ29udHJvbHNUYXAgPSBmYWxzZTtcblx0XHRcdFx0fSwgdGFwRGVsYXkpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRfZml0Q29udHJvbHNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gIXBzd3AubGlrZWx5VG91Y2hEZXZpY2UgfHwgX29wdGlvbnMubW91c2VVc2VkIHx8IHNjcmVlbi53aWR0aCA+IF9vcHRpb25zLmZpdENvbnRyb2xzV2lkdGg7XG5cdFx0fSxcblx0XHRfdG9nZ2xlUHN3cENsYXNzID0gZnVuY3Rpb24oZWwsIGNOYW1lLCBhZGQpIHtcblx0XHRcdGZyYW1ld29ya1sgKGFkZCA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJyBdKGVsLCAncHN3cF9fJyArIGNOYW1lKTtcblx0XHR9LFxuXG5cdFx0Ly8gYWRkIGNsYXNzIHdoZW4gdGhlcmUgaXMganVzdCBvbmUgaXRlbSBpbiB0aGUgZ2FsbGVyeVxuXHRcdC8vIChieSBkZWZhdWx0IGl0IGhpZGVzIGxlZnQvcmlnaHQgYXJyb3dzIGFuZCAxb2ZYIGNvdW50ZXIpXG5cdFx0X2NvdW50TnVtSXRlbXMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoYXNPbmVTbGlkZSA9IChfb3B0aW9ucy5nZXROdW1JdGVtc0ZuKCkgPT09IDEpO1xuXG5cdFx0XHRpZihoYXNPbmVTbGlkZSAhPT0gX2dhbGxlcnlIYXNPbmVTbGlkZSkge1xuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1vbmUtc2xpZGUnLCBoYXNPbmVTbGlkZSk7XG5cdFx0XHRcdF9nYWxsZXJ5SGFzT25lU2xpZGUgPSBoYXNPbmVTbGlkZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF90b2dnbGVTaGFyZU1vZGFsQ2xhc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX3NoYXJlTW9kYWwsICdzaGFyZS1tb2RhbC0taGlkZGVuJywgX3NoYXJlTW9kYWxIaWRkZW4pO1xuXHRcdH0sXG5cdFx0X3RvZ2dsZVNoYXJlTW9kYWwgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSAhX3NoYXJlTW9kYWxIaWRkZW47XG5cblxuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsQ2xhc3MoKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhfc2hhcmVNb2RhbCwgJ3Bzd3BfX3NoYXJlLW1vZGFsLS1mYWRlLWluJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAzMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX3NoYXJlTW9kYWwsICdwc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbicpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKF9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3VwZGF0ZVNoYXJlVVJMcygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRfb3BlbldpbmRvd1BvcHVwID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuXHRcdFx0cHN3cC5zaG91dCgnc2hhcmVMaW5rQ2xpY2snLCBlLCB0YXJnZXQpO1xuXG5cdFx0XHRpZighdGFyZ2V0LmhyZWYpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5vcGVuKHRhcmdldC5ocmVmLCAncHN3cF9zaGFyZScsICdzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHRvb2xiYXI9bm8sJytcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvY2F0aW9uPXllcyx3aWR0aD01NTAsaGVpZ2h0PTQyMCx0b3A9MTAwLGxlZnQ9JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCh3aW5kb3cuc2NyZWVuID8gTWF0aC5yb3VuZChzY3JlZW4ud2lkdGggLyAyIC0gMjc1KSA6IDEwMCkgICk7XG5cblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRfdXBkYXRlU2hhcmVVUkxzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2hhcmVCdXR0b25PdXQgPSAnJyxcblx0XHRcdFx0c2hhcmVCdXR0b25EYXRhLFxuXHRcdFx0XHRzaGFyZVVSTCxcblx0XHRcdFx0aW1hZ2VfdXJsLFxuXHRcdFx0XHRwYWdlX3VybCxcblx0XHRcdFx0c2hhcmVfdGV4dDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnNoYXJlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzaGFyZUJ1dHRvbkRhdGEgPSBfb3B0aW9ucy5zaGFyZUJ1dHRvbnNbaV07XG5cblx0XHRcdFx0aW1hZ2VfdXJsID0gX29wdGlvbnMuZ2V0SW1hZ2VVUkxGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXHRcdFx0XHRwYWdlX3VybCA9IF9vcHRpb25zLmdldFBhZ2VVUkxGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXHRcdFx0XHRzaGFyZV90ZXh0ID0gX29wdGlvbnMuZ2V0VGV4dEZvclNoYXJlKHNoYXJlQnV0dG9uRGF0YSk7XG5cblx0XHRcdFx0c2hhcmVVUkwgPSBzaGFyZUJ1dHRvbkRhdGEudXJsLnJlcGxhY2UoJ3t7dXJsfX0nLCBlbmNvZGVVUklDb21wb25lbnQocGFnZV91cmwpIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e2ltYWdlX3VybH19JywgZW5jb2RlVVJJQ29tcG9uZW50KGltYWdlX3VybCkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3t7cmF3X2ltYWdlX3VybH19JywgaW1hZ2VfdXJsIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e3RleHR9fScsIGVuY29kZVVSSUNvbXBvbmVudChzaGFyZV90ZXh0KSApO1xuXG5cdFx0XHRcdHNoYXJlQnV0dG9uT3V0ICs9ICc8YSBocmVmPVwiJyArIHNoYXJlVVJMICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiICcrXG5cdFx0XHRcdFx0XHRcdFx0XHQnY2xhc3M9XCJwc3dwX19zaGFyZS0tJyArIHNoYXJlQnV0dG9uRGF0YS5pZCArICdcIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0KHNoYXJlQnV0dG9uRGF0YS5kb3dubG9hZCA/ICdkb3dubG9hZCcgOiAnJykgKyAnPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0c2hhcmVCdXR0b25EYXRhLmxhYmVsICsgJzwvYT4nO1xuXG5cdFx0XHRcdGlmKF9vcHRpb25zLnBhcnNlU2hhcmVCdXR0b25PdXQpIHtcblx0XHRcdFx0XHRzaGFyZUJ1dHRvbk91dCA9IF9vcHRpb25zLnBhcnNlU2hhcmVCdXR0b25PdXQoc2hhcmVCdXR0b25EYXRhLCBzaGFyZUJ1dHRvbk91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IHNoYXJlQnV0dG9uT3V0O1xuXHRcdFx0X3NoYXJlTW9kYWwuY2hpbGRyZW5bMF0ub25jbGljayA9IF9vcGVuV2luZG93UG9wdXA7XG5cblx0XHR9LFxuXHRcdF9oYXNDbG9zZUNsYXNzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0XHRmb3IodmFyICBpID0gMDsgaSA8IF9vcHRpb25zLmNsb3NlRWxDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKCBmcmFtZXdvcmsuaGFzQ2xhc3ModGFyZ2V0LCAncHN3cF9fJyArIF9vcHRpb25zLmNsb3NlRWxDbGFzc2VzW2ldKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X2lkbGVJbnRlcnZhbCxcblx0XHRfaWRsZVRpbWVyLFxuXHRcdF9pZGxlSW5jcmVtZW50ID0gMCxcblx0XHRfb25JZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2lkbGVUaW1lcik7XG5cdFx0XHRfaWRsZUluY3JlbWVudCA9IDA7XG5cdFx0XHRpZihfaXNJZGxlKSB7XG5cdFx0XHRcdHVpLnNldElkbGUoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uTW91c2VMZWF2ZVdpbmRvdyA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUgPSBlID8gZSA6IHdpbmRvdy5ldmVudDtcblx0XHRcdHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuXHRcdFx0aWYgKCFmcm9tIHx8IGZyb20ubm9kZU5hbWUgPT09ICdIVE1MJykge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoX2lkbGVUaW1lcik7XG5cdFx0XHRcdF9pZGxlVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHVpLnNldElkbGUodHJ1ZSk7XG5cdFx0XHRcdH0sIF9vcHRpb25zLnRpbWVUb0lkbGVPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cEZ1bGxzY3JlZW5BUEkgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLmZ1bGxzY3JlZW5FbCAmJiAhZnJhbWV3b3JrLmZlYXR1cmVzLmlzT2xkQW5kcm9pZCkge1xuXHRcdFx0XHRpZighX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkgPSB1aS5nZXRGdWxsc2NyZWVuQVBJKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCBfZnVsbHNjcmVuQVBJLmV2ZW50SywgdWkudXBkYXRlRnVsbHNjcmVlbik7XG5cdFx0XHRcdFx0dWkudXBkYXRlRnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhwc3dwLnRlbXBsYXRlLCAncHN3cC0tc3VwcG9ydHMtZnMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLXN1cHBvcnRzLWZzJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFNldHVwIGxvYWRpbmcgaW5kaWNhdG9yXG5cdFx0XHRpZihfb3B0aW9ucy5wcmVsb2FkZXJFbCkge1xuXG5cdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpO1xuXG5cdFx0XHRcdF9saXN0ZW4oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9sb2FkaW5nSW5kaWNhdG9yVGltZW91dCk7XG5cblx0XHRcdFx0XHQvLyBkaXNwbGF5IGxvYWRpbmcgaW5kaWNhdG9yIHdpdGggZGVsYXlcblx0XHRcdFx0XHRfbG9hZGluZ0luZGljYXRvclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRpZihwc3dwLmN1cnJJdGVtICYmIHBzd3AuY3Vyckl0ZW0ubG9hZGluZykge1xuXG5cdFx0XHRcdFx0XHRcdGlmKCAhcHN3cC5hbGxvd1Byb2dyZXNzaXZlSW1nKCkgfHwgKHBzd3AuY3Vyckl0ZW0uaW1nICYmICFwc3dwLmN1cnJJdGVtLmltZy5uYXR1cmFsV2lkdGgpICApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBzaG93IHByZWxvYWRlciBpZiBwcm9ncmVzc2l2ZSBsb2FkaW5nIGlzIG5vdCBlbmFibGVkLFxuXHRcdFx0XHRcdFx0XHRcdC8vIG9yIGltYWdlIHdpZHRoIGlzIG5vdCBkZWZpbmVkIHlldCAoYmVjYXVzZSBvZiBzbG93IGNvbm5lY3Rpb24pXG5cdFx0XHRcdFx0XHRcdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGl0ZW1zLWNvbnRyb2xsZXIuanMgZnVuY3Rpb24gYWxsb3dQcm9ncmVzc2l2ZUltZ1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpOyAvLyBoaWRlIHByZWxvYWRlclxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSwgX29wdGlvbnMubG9hZGluZ0luZGljYXRvckRlbGF5KTtcblxuXHRcdFx0XHR9KTtcblx0XHRcdFx0X2xpc3RlbignaW1hZ2VMb2FkQ29tcGxldGUnLCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0XHRcdGlmKHBzd3AuY3Vyckl0ZW0gPT09IGl0ZW0pIHtcblx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oaGlkZSkge1xuXHRcdFx0aWYoIF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuICE9PSBoaWRlICkge1xuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9sb2FkaW5nSW5kaWNhdG9yLCAncHJlbG9hZGVyLS1hY3RpdmUnLCAhaGlkZSk7XG5cdFx0XHRcdF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuID0gaGlkZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9hcHBseU5hdkJhckdhcHMgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHR2YXIgZ2FwID0gaXRlbS52R2FwO1xuXG5cdFx0XHRpZiggX2ZpdENvbnRyb2xzSW5WaWV3cG9ydCgpICkge1xuXG5cdFx0XHRcdHZhciBiYXJzID0gX29wdGlvbnMuYmFyc1NpemU7XG5cdFx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCAmJiBiYXJzLmJvdHRvbSA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdFx0aWYoIV9mYWtlQ2FwdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0XHRcdFx0X2Zha2VDYXB0aW9uQ29udGFpbmVyID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19jYXB0aW9uIHBzd3BfX2NhcHRpb24tLWZha2UnKTtcblx0XHRcdFx0XHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCggZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19jYXB0aW9uX19jZW50ZXInKSApO1xuXHRcdFx0XHRcdFx0X2NvbnRyb2xzLmluc2VydEJlZm9yZShfZmFrZUNhcHRpb25Db250YWluZXIsIF9jYXB0aW9uQ29udGFpbmVyKTtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhfY29udHJvbHMsICdwc3dwX191aS0tZml0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKCBfb3B0aW9ucy5hZGRDYXB0aW9uSFRNTEZuKGl0ZW0sIF9mYWtlQ2FwdGlvbkNvbnRhaW5lciwgdHJ1ZSkgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBjYXB0aW9uU2l6ZSA9IF9mYWtlQ2FwdGlvbkNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdFx0XHRnYXAuYm90dG9tID0gcGFyc2VJbnQoY2FwdGlvblNpemUsMTApIHx8IDQ0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRnYXAuYm90dG9tID0gYmFycy50b3A7IC8vIGlmIG5vIGNhcHRpb24sIHNldCBzaXplIG9mIGJvdHRvbSBnYXAgdG8gc2l6ZSBvZiB0b3Bcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IGJhcnMuYm90dG9tID09PSAnYXV0bycgPyAwIDogYmFycy5ib3R0b207XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBoZWlnaHQgb2YgdG9wIGJhciBpcyBzdGF0aWMsIG5vIG5lZWQgdG8gY2FsY3VsYXRlIGl0XG5cdFx0XHRcdGdhcC50b3AgPSBiYXJzLnRvcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdhcC50b3AgPSBnYXAuYm90dG9tID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cElkbGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEhpZGUgY29udHJvbHMgd2hlbiBtb3VzZSBpcyB1c2VkXG5cdFx0XHRpZihfb3B0aW9ucy50aW1lVG9JZGxlKSB7XG5cdFx0XHRcdF9saXN0ZW4oJ21vdXNlVXNlZCcsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25JZGxlTW91c2VNb3ZlKTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ21vdXNlb3V0JywgX29uTW91c2VMZWF2ZVdpbmRvdyk7XG5cblx0XHRcdFx0XHRfaWRsZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfaWRsZUluY3JlbWVudCsrO1xuXHRcdFx0XHRcdFx0aWYoX2lkbGVJbmNyZW1lbnQgPT09IDIpIHtcblx0XHRcdFx0XHRcdFx0dWkuc2V0SWRsZSh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBfb3B0aW9ucy50aW1lVG9JZGxlIC8gMik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3NldHVwSGlkaW5nQ29udHJvbHNEdXJpbmdHZXN0dXJlcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIG9uIHZlcnRpY2FsIGRyYWdcblx0XHRcdF9saXN0ZW4oJ29uVmVydGljYWxEcmFnJywgZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUgJiYgbm93IDwgMC45NSkge1xuXHRcdFx0XHRcdHVpLmhpZGVDb250cm9scygpO1xuXHRcdFx0XHR9IGVsc2UgaWYoIV9jb250cm9sc1Zpc2libGUgJiYgbm93ID49IDAuOTUpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEhpZGUgY29udHJvbHMgd2hlbiBwaW5jaGluZyB0byBjbG9zZVxuXHRcdFx0dmFyIHBpbmNoQ29udHJvbHNIaWRkZW47XG5cdFx0XHRfbGlzdGVuKCdvblBpbmNoQ2xvc2UnICwgZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUgJiYgbm93IDwgMC45KSB7XG5cdFx0XHRcdFx0dWkuaGlkZUNvbnRyb2xzKCk7XG5cdFx0XHRcdFx0cGluY2hDb250cm9sc0hpZGRlbiA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZihwaW5jaENvbnRyb2xzSGlkZGVuICYmICFfY29udHJvbHNWaXNpYmxlICYmIG5vdyA+IDAuOSkge1xuXHRcdFx0XHRcdHVpLnNob3dDb250cm9scygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3Rlbignem9vbUdlc3R1cmVFbmRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwaW5jaENvbnRyb2xzSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdGlmKHBpbmNoQ29udHJvbHNIaWRkZW4gJiYgIV9jb250cm9sc1Zpc2libGUpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR9O1xuXG5cblxuXHR2YXIgX3VpRWxlbWVudHMgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2NhcHRpb24nLFxuXHRcdFx0b3B0aW9uOiAnY2FwdGlvbkVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0X2NhcHRpb25Db250YWluZXIgPSBlbDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdzaGFyZS1tb2RhbCcsXG5cdFx0XHRvcHRpb246ICdzaGFyZUVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0X3NoYXJlTW9kYWwgPSBlbDtcblx0XHRcdH0sXG5cdFx0XHRvblRhcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1zaGFyZScsXG5cdFx0XHRvcHRpb246ICdzaGFyZUVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0X3NoYXJlQnV0dG9uID0gZWw7XG5cdFx0XHR9LFxuXHRcdFx0b25UYXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2J1dHRvbi0tem9vbScsXG5cdFx0XHRvcHRpb246ICd6b29tRWwnLFxuXHRcdFx0b25UYXA6ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJySXRlbSwgdGVtcGxhdGUgfSA9IHBzd3A7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Bzd3AtLXpvb21lZC1pbicpKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHRvIGluaXRpYWwgem9vbSBhbmQgc3luYyBzbGlkZXJcbiAgICAgICAgICBfem9vbVNsaWRlci52YWx1ZSA9IDA7XG4gICAgICAgICAgcHN3cC56b29tVG8oY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCwgeyB4OiBwc3dwLnZpZXdwb3J0U2l6ZS54IC8gMiwgeTogcHN3cC52aWV3cG9ydFNpemUueSAvIDIgfSwgMzMzKTtcbiAgICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdwc3dwLS16b29tZWQtaW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGRvdWJsZVRhcFpvb21MZXZlbCBhbmQgc3luYyBzbGlkZXJcbiAgICAgICAgICBjb25zdCBkb3VibGVUYXBab29tTGV2ZWwgPSBfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKHRydWUsIGN1cnJJdGVtKTtcbiAgICAgICAgICBfem9vbVNsaWRlci52YWx1ZSA9IChkb3VibGVUYXBab29tTGV2ZWwgLSBjdXJySXRlbS5pbml0aWFsWm9vbUxldmVsIC8gKDEgLSBjdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSkgKiAxMDtcbiAgICAgICAgICBwc3dwLnRvZ2dsZURlc2t0b3Bab29tKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY291bnRlcicsXG5cdFx0XHRvcHRpb246ICdjb3VudGVyRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkge1xuXHRcdFx0XHRfaW5kZXhJbmRpY2F0b3IgPSBlbDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdidXR0b24tLWNsb3NlJyxcblx0XHRcdG9wdGlvbjogJ2Nsb3NlRWwnLFxuXHRcdFx0b25UYXA6IHBzd3AuY2xvc2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdidXR0b24tLWFycm93LS1sZWZ0Jyxcblx0XHRcdG9wdGlvbjogJ2Fycm93RWwnLFxuXHRcdFx0b25UYXA6IHBzd3AucHJldlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2J1dHRvbi0tYXJyb3ctLXJpZ2h0Jyxcblx0XHRcdG9wdGlvbjogJ2Fycm93RWwnLFxuXHRcdFx0b25UYXA6IHBzd3AubmV4dFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2J1dHRvbi0tZnMnLFxuXHRcdFx0b3B0aW9uOiAnZnVsbHNjcmVlbkVsJyxcblx0XHRcdG9uVGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSkge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZXhpdCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZW50ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3ByZWxvYWRlcicsXG5cdFx0XHRvcHRpb246ICdwcmVsb2FkZXJFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdF9sb2FkaW5nSW5kaWNhdG9yID0gZWw7XG5cdFx0XHR9XG5cdFx0fSxcbiAgICB7XG4gICAgICBuYW1lOiAnem9vbScsXG4gICAgICBvcHRpb246ICd6b29tRWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3pvb20tbGFiZWwnLFxuICAgICAgb3B0aW9uOiAnem9vbUxhYmVsRWwnLFxuICAgIH1cblx0XTtcblxuXHR2YXIgX3NldHVwVUlFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpdGVtLFxuXHRcdFx0Y2xhc3NBdHRyLFxuXHRcdFx0dWlFbGVtZW50O1xuXG5cdFx0dmFyIGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uKHNDaGlsZHJlbikge1xuXHRcdFx0aWYoIXNDaGlsZHJlbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsID0gc0NoaWxkcmVuLmxlbmd0aDtcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aXRlbSA9IHNDaGlsZHJlbltpXTtcblx0XHRcdFx0Y2xhc3NBdHRyID0gaXRlbS5jbGFzc05hbWU7XG5cblx0XHRcdFx0Zm9yKHZhciBhID0gMDsgYSA8IF91aUVsZW1lbnRzLmxlbmd0aDsgYSsrKSB7XG5cdFx0XHRcdFx0dWlFbGVtZW50ID0gX3VpRWxlbWVudHNbYV07XG5cblx0XHRcdFx0XHRpZihjbGFzc0F0dHIuaW5kZXhPZigncHN3cF9fJyArIHVpRWxlbWVudC5uYW1lKSA+IC0xICApIHtcblxuXHRcdFx0XHRcdFx0aWYoIF9vcHRpb25zW3VpRWxlbWVudC5vcHRpb25dICkgeyAvLyBpZiBlbGVtZW50IGlzIG5vdCBkaXNhYmxlZCBmcm9tIG9wdGlvbnNcblxuXHRcdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoaXRlbSwgJ3Bzd3BfX2VsZW1lbnQtLWRpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGlmKHVpRWxlbWVudC5vbkluaXQpIHtcblx0XHRcdFx0XHRcdFx0XHR1aUVsZW1lbnQub25Jbml0KGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKGl0ZW0sICdwc3dwX19lbGVtZW50LS1kaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHQvL2l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyhfY29udHJvbHMuY2hpbGRyZW4pO1xuXG5cdFx0dmFyIHRvcEJhciA9ICBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKF9jb250cm9scywgJ3Bzd3BfX3RvcC1iYXInKTtcblx0XHRpZih0b3BCYXIpIHtcblx0XHRcdGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyggdG9wQmFyLmNoaWxkcmVuICk7XG5cdFx0fVxuXHR9O1xuXG5cblxuXG5cdHVpLmluaXQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIGV4dGVuZCBvcHRpb25zXG5cdFx0ZnJhbWV3b3JrLmV4dGVuZChwc3dwLm9wdGlvbnMsIF9kZWZhdWx0VUlPcHRpb25zLCB0cnVlKTtcblxuXHRcdC8vIGNyZWF0ZSBsb2NhbCBsaW5rIGZvciBmYXN0IGFjY2Vzc1xuXHRcdF9vcHRpb25zID0gcHN3cC5vcHRpb25zO1xuXG5cdFx0Ly8gZmluZCBwc3dwX191aSBlbGVtZW50XG4gICAgX2NvbnRyb2xzID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhwc3dwLnNjcm9sbFdyYXAsICdwc3dwX191aScpO1xuXG4gICAgX3pvb21TbGlkZXIgPSBfY29udHJvbHMucXVlcnlTZWxlY3RvcignI3Bzd3BfX3pvb20nKTtcblxuXHRcdC8vIGNyZWF0ZSBsb2NhbCBsaW5rXG4gICAgX2xpc3RlbiA9IHBzd3AubGlzdGVuO1xuXG4gICAgY29uc3Qgb25ab29tU2xpZGVyQ2hhbmdlID0gZSA9PiB7XG4gICAgICBjb25zdCB6b29tTGV2ZWwgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgeyBpbml0aWFsWm9vbUxldmVsIH0gPSBwc3dwLmN1cnJJdGVtO1xuICAgICAgY29uc3QgdGFyZ2V0Wm9vbUxldmVsID0gaW5pdGlhbFpvb21MZXZlbCArICh6b29tTGV2ZWwgLyAxMCkgKiAoMSAtIGluaXRpYWxab29tTGV2ZWwpO1xuICAgICAgcHN3cC56b29tVG8odGFyZ2V0Wm9vbUxldmVsLCB7IHg6IHBzd3Audmlld3BvcnRTaXplLnggLyAyLCB5OiBwc3dwLnZpZXdwb3J0U2l6ZS55IC8gMiB9LCAzMzMpO1xuXG4gICAgICBpZiAoem9vbUxldmVsID09PSAwKSB7XG4gICAgICAgIHBzd3AudGVtcGxhdGUuY2xhc3NMaXN0LnJlbW92ZSgncHN3cC0tem9vbWVkLWluJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwc3dwLnRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3Bzd3AtLXpvb21lZC1pbicpO1xuICAgICAgfVxuICAgIH1cblxuXHRcdF9zZXR1cEhpZGluZ0NvbnRyb2xzRHVyaW5nR2VzdHVyZXMoKTtcblxuXHRcdC8vIHVwZGF0ZSBjb250cm9scyB3aGVuIHNsaWRlcyBjaGFuZ2Vcblx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCB1aS51cGRhdGUpO1xuXG5cdFx0Ly8gdG9nZ2xlIHpvb20gb24gZG91YmxlLXRhcFxuXHRcdF9saXN0ZW4oJ2RvdWJsZVRhcCcsIGZ1bmN0aW9uKHBvaW50KSB7XG5cdFx0XHR2YXIgaW5pdGlhbFpvb21MZXZlbCA9IHBzd3AuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdGlmKHBzd3AuZ2V0Wm9vbUxldmVsKCkgIT09IGluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdFx0cHN3cC56b29tVG8oaW5pdGlhbFpvb21MZXZlbCwgcG9pbnQsIDMzMyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwc3dwLnpvb21Ubyhfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKGZhbHNlLCBwc3dwLmN1cnJJdGVtKSwgcG9pbnQsIDMzMyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBBbGxvdyB0ZXh0IHNlbGVjdGlvbiBpbiBjYXB0aW9uXG5cdFx0X2xpc3RlbigncHJldmVudERyYWdFdmVudCcsIGZ1bmN0aW9uKGUsIGlzRG93biwgcHJldmVudE9iaikge1xuXHRcdFx0dmFyIHQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cdFx0XHRpZihcblx0XHRcdFx0dCAmJlxuXHRcdFx0XHR0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnR5cGUuaW5kZXhPZignbW91c2UnKSA+IC0xICYmXG4gICAgICAgIChcbiAgICAgICAgICB0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmRleE9mKCdfX2NhcHRpb24nKSA+IDBcbiAgICAgICAgICB8fCAoLyhTTUFMTHxTVFJPTkd8RU0pL2kpLnRlc3QodC50YWdOYW1lKVxuICAgICAgICApXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJldmVudE9iai5wcmV2ZW50ID0gZmFsc2U7XG5cdFx0XHR9XG4gICAgfSk7XG5cblx0XHQvLyBiaW5kIGV2ZW50cyBmb3IgVUlcblx0XHRfbGlzdGVuKCdiaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChfY29udHJvbHMsICdwc3dwVGFwIGNsaWNrJywgX29uQ29udHJvbHNUYXApO1xuICAgICAgZnJhbWV3b3JrLmJpbmQocHN3cC5zY3JvbGxXcmFwLCAncHN3cFRhcCcsIHVpLm9uR2xvYmFsVGFwKTtcbiAgICAgIGZyYW1ld29yay5iaW5kKF96b29tU2xpZGVyLCAnY2hhbmdlJywgb25ab29tU2xpZGVyQ2hhbmdlKTtcblxuICAgICAgX2xpc3RlbignYWZ0ZXJDaGFuZ2UnLCAoKSA9PiB7IF96b29tU2xpZGVyLnZhbHVlID0gMDsgfSk7XG5cblx0XHRcdGlmKCFwc3dwLmxpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdGZyYW1ld29yay5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ21vdXNlb3ZlcicsIHVpLm9uTW91c2VPdmVyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHVuYmluZCBldmVudHMgZm9yIFVJXG5cdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX2lkbGVJbnRlcnZhbCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKF9pZGxlSW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlb3V0JywgX29uTW91c2VMZWF2ZVdpbmRvdyk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uSWRsZU1vdXNlTW92ZSk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKF9jb250cm9scywgJ3Bzd3BUYXAgY2xpY2snLCBfb25Db250cm9sc1RhcCk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ3Bzd3BUYXAnLCB1aS5vbkdsb2JhbFRhcCk7XG4gICAgICBmcmFtZXdvcmsudW5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ21vdXNlb3ZlcicsIHVpLm9uTW91c2VPdmVyKTtcbiAgICAgIGZyYW1ld29yay51bmJpbmQoX3pvb21TbGlkZXIsICdjaGFuZ2UnLCBvblpvb21TbGlkZXJDaGFuZ2UpO1xuXG5cdFx0XHRpZihfZnVsbHNjcmVuQVBJKSB7XG5cdFx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsIF9mdWxsc2NyZW5BUEkuZXZlbnRLLCB1aS51cGRhdGVGdWxsc2NyZWVuKTtcblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSkge1xuXHRcdFx0XHRcdF9vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG5cdFx0XHRcdFx0X2Z1bGxzY3JlbkFQSS5leGl0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2Z1bGxzY3JlbkFQSSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdC8vIGNsZWFuIHVwIHRoaW5ncyB3aGVuIGdhbGxlcnkgaXMgZGVzdHJveWVkXG5cdFx0X2xpc3RlbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX29wdGlvbnMuY2FwdGlvbkVsKSB7XG5cdFx0XHRcdGlmKF9mYWtlQ2FwdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0XHRcdF9jb250cm9scy5yZW1vdmVDaGlsZChfZmFrZUNhcHRpb25Db250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfY2FwdGlvbkNvbnRhaW5lciwgJ3Bzd3BfX2NhcHRpb24tLWVtcHR5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9zaGFyZU1vZGFsKSB7XG5cdFx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLm9uY2xpY2sgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9jb250cm9scywgJ3Bzd3BfX3VpLS1vdmVyLWNsb3NlJyk7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRcdHVpLnNldElkbGUoZmFsc2UpO1xuXHRcdH0pO1xuXG5cblx0XHRpZighX29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uKSB7XG5cdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHR9XG5cdFx0X2xpc3RlbignaW5pdGlhbFpvb21JbicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uKSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyggX2NvbnRyb2xzLCAncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tT3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHR9KTtcblxuXHRcdF9saXN0ZW4oJ3BhcnNlVmVydGljYWxNYXJnaW4nLCBfYXBwbHlOYXZCYXJHYXBzKTtcblxuXHRcdF9zZXR1cFVJRWxlbWVudHMoKTtcblxuXHRcdGlmKF9vcHRpb25zLnNoYXJlRWwgJiYgX3NoYXJlQnV0dG9uICYmIF9zaGFyZU1vZGFsKSB7XG5cdFx0XHRfc2hhcmVNb2RhbEhpZGRlbiA9IHRydWU7XG5cdFx0fVxuXG5cdFx0X2NvdW50TnVtSXRlbXMoKTtcblxuXHRcdF9zZXR1cElkbGUoKTtcblxuXHRcdF9zZXR1cEZ1bGxzY3JlZW5BUEkoKTtcblxuXHRcdF9zZXR1cExvYWRpbmdJbmRpY2F0b3IoKTtcblx0fTtcblxuXHR1aS5zZXRJZGxlID0gZnVuY3Rpb24oaXNJZGxlKSB7XG5cdFx0X2lzSWRsZSA9IGlzSWRsZTtcblx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1pZGxlJywgaXNJZGxlKTtcblx0fTtcblxuXHR1aS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBEb24ndCB1cGRhdGUgVUkgaWYgaXQncyBoaWRkZW5cblx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIHBzd3AuY3Vyckl0ZW0pIHtcblxuXHRcdFx0dWkudXBkYXRlSW5kZXhJbmRpY2F0b3IoKTtcblxuXHRcdFx0aWYoX29wdGlvbnMuY2FwdGlvbkVsKSB7XG5cdFx0XHRcdF9vcHRpb25zLmFkZENhcHRpb25IVE1MRm4ocHN3cC5jdXJySXRlbSwgX2NhcHRpb25Db250YWluZXIpO1xuXG5cdFx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX2NhcHRpb25Db250YWluZXIsICdjYXB0aW9uLS1lbXB0eScsICFwc3dwLmN1cnJJdGVtLnRpdGxlKTtcblx0XHRcdH1cblxuXHRcdFx0X292ZXJsYXlVSVVwZGF0ZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdF9vdmVybGF5VUlVcGRhdGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdH1cblxuXHRcdF9jb3VudE51bUl0ZW1zKCk7XG5cdH07XG5cblx0dWkudXBkYXRlRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmKGUpIHtcblx0XHRcdC8vIHNvbWUgYnJvd3NlcnMgY2hhbmdlIHdpbmRvdyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIHRoZSBmdWxsc2NyZWVuXG5cdFx0XHQvLyBzbyBQaG90b1N3aXBlIHVwZGF0ZXMgaXQganVzdCBpbiBjYXNlXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwc3dwLnNldFNjcm9sbE9mZnNldCggMCwgZnJhbWV3b3JrLmdldFNjcm9sbFkoKSApO1xuXHRcdFx0fSwgNTApO1xuXHRcdH1cblxuXHRcdC8vIHRvb2dsZSBwc3dwLS1mcyBjbGFzcyBvbiByb290IGVsZW1lbnRcblx0XHRmcmFtZXdvcmtbIChfZnVsbHNjcmVuQVBJLmlzRnVsbHNjcmVlbigpID8gJ2FkZCcgOiAncmVtb3ZlJykgKyAnQ2xhc3MnIF0ocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLWZzJyk7XG5cdH07XG5cblx0dWkudXBkYXRlSW5kZXhJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfb3B0aW9ucy5jb3VudGVyRWwpIHtcblx0XHRcdF9pbmRleEluZGljYXRvci5pbm5lckhUTUwgPSAocHN3cC5nZXRDdXJyZW50SW5kZXgoKSsxKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9vcHRpb25zLmluZGV4SW5kaWNhdG9yU2VwICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0X29wdGlvbnMuZ2V0TnVtSXRlbXNGbigpO1xuXHRcdH1cblx0fTtcblxuXHR1aS5vbkdsb2JhbFRhcCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuXHRcdGlmKF9ibG9ja0NvbnRyb2xzVGFwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoZS5kZXRhaWwgJiYgZS5kZXRhaWwucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcblxuXHRcdFx0Ly8gY2xvc2UgZ2FsbGVyeSBpZiBjbGlja2VkIG91dHNpZGUgb2YgdGhlIGltYWdlXG5cdFx0XHRpZihfaGFzQ2xvc2VDbGFzcyh0YXJnZXQpKSB7XG5cdFx0XHRcdHBzd3AuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihmcmFtZXdvcmsuaGFzQ2xhc3ModGFyZ2V0LCAncHN3cF9faW1nJykpIHtcblx0XHRcdFx0aWYocHN3cC5nZXRab29tTGV2ZWwoKSA9PT0gMSAmJiBwc3dwLmdldFpvb21MZXZlbCgpIDw9IHBzd3AuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdFx0XHRpZihfb3B0aW9ucy5jbGlja1RvQ2xvc2VOb25ab29tYWJsZSkge1xuXHRcdFx0XHRcdFx0cHN3cC5jbG9zZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwc3dwLnRvZ2dsZURlc2t0b3Bab29tKGUuZGV0YWlsLnJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIHRhcCBhbnl3aGVyZSAoZXhjZXB0IGJ1dHRvbnMpIHRvIHRvZ2dsZSB2aXNpYmlsaXR5IG9mIGNvbnRyb2xzXG5cdFx0XHRpZihfb3B0aW9ucy50YXBUb1RvZ2dsZUNvbnRyb2xzKSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUpIHtcblx0XHRcdFx0XHR1aS5oaWRlQ29udHJvbHMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyB0YXAgdG8gY2xvc2UgZ2FsbGVyeVxuXHRcdFx0aWYoX29wdGlvbnMudGFwVG9DbG9zZSAmJiAoZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfX2ltZycpIHx8IF9oYXNDbG9zZUNsYXNzKHRhcmdldCkpICkge1xuXHRcdFx0XHRwc3dwLmNsb3NlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdH1cblx0fTtcblx0dWkub25Nb3VzZU92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHQvLyBhZGQgY2xhc3Mgd2hlbiBtb3VzZSBpcyBvdmVyIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgY2xvc2UgdGhlIGdhbGxlcnlcblx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1vdmVyLWNsb3NlJywgX2hhc0Nsb3NlQ2xhc3ModGFyZ2V0KSk7XG5cdH07XG5cblx0dWkuaGlkZUNvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKF9jb250cm9scywncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdF9jb250cm9sc1Zpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHR1aS5zaG93Q29udHJvbHMgPSBmdW5jdGlvbigpIHtcblx0XHRfY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcblx0XHRpZighX292ZXJsYXlVSVVwZGF0ZWQpIHtcblx0XHRcdHVpLnVwZGF0ZSgpO1xuXHRcdH1cblx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX2NvbnRyb2xzLCdwc3dwX191aS0taGlkZGVuJyk7XG5cdH07XG5cblx0dWkuc3VwcG9ydHNGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGQgPSBkb2N1bWVudDtcblx0XHRyZXR1cm4gISEoZC5leGl0RnVsbHNjcmVlbiB8fCBkLm1vekNhbmNlbEZ1bGxTY3JlZW4gfHwgZC53ZWJraXRFeGl0RnVsbHNjcmVlbiB8fCBkLm1zRXhpdEZ1bGxzY3JlZW4pO1xuXHR9O1xuXG5cdHVpLmdldEZ1bGxzY3JlZW5BUEkgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZEUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdFx0XHRhcGksXG5cdFx0XHR0RiA9ICdmdWxsc2NyZWVuY2hhbmdlJztcblxuXHRcdGlmIChkRS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiB0RlxuXHRcdFx0fTtcblxuXHRcdH0gZWxzZSBpZihkRS5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiAnbW96JyArIHRGXG5cdFx0XHR9O1xuXG5cblxuXHRcdH0gZWxzZSBpZihkRS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiAnd2Via2l0JyArIHRGXG5cdFx0XHR9O1xuXG5cdFx0fSBlbHNlIGlmKGRFLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGVsZW1lbnRLOiAnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ01TRnVsbHNjcmVlbkNoYW5nZSdcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYoYXBpKSB7XG5cdFx0XHRhcGkuZW50ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gZGlzYWJsZSBjbG9zZS1vbi1zY3JvbGwgaW4gZnVsbHNjcmVlblxuXHRcdFx0XHRfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlID0gX29wdGlvbnMuY2xvc2VPblNjcm9sbDtcblx0XHRcdFx0X29wdGlvbnMuY2xvc2VPblNjcm9sbCA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmKHRoaXMuZW50ZXJLID09PSAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nKSB7XG5cdFx0XHRcdFx0cHN3cC50ZW1wbGF0ZVt0aGlzLmVudGVyS10oIEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcHN3cC50ZW1wbGF0ZVt0aGlzLmVudGVyS10oKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGFwaS5leGl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9vcHRpb25zLmNsb3NlT25TY3JvbGwgPSBfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlO1xuXG5cdFx0XHRcdHJldHVybiBkb2N1bWVudFt0aGlzLmV4aXRLXSgpO1xuXG5cdFx0XHR9O1xuXHRcdFx0YXBpLmlzRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZG9jdW1lbnRbdGhpcy5lbGVtZW50S107IH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFwaTtcblx0fTtcblxuXG5cbn07XG5yZXR1cm4gUGhvdG9Td2lwZVVJO1xuXG5cbn0pO1xuIiwiLy8gU3R5bGVzIChzbyB3ZWJwYWNrIHByb2Nlc3NlcyBzYXNzKVxuaW1wb3J0ICcuL2NvbnRlbnQuc2Nzcyc7XG5cbi8vIE1hcmt1cCAodG8gaW5qZWN0KVxuaW1wb3J0IGxhdW5jaGVyTWFya3VwIGZyb20gJy4vY29tcG9uZW50cy9sYXVuY2hlci5odG1sJztcbmltcG9ydCBnYWxsZXJ5TWFya3VwIGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5Lmh0bWwnO1xuXG4vLyBQaG90b3N3aXBlXG5cbmltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0IFBob3RvU3dpcGVVSSBmcm9tICcuL2NvbXBvbmVudHMvcGhvdG9zd2lwZS11aSc7XG5cbmltcG9ydCBpbWFnZVByb2JlRmV0Y2ggZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlUHJvYmVGZXRjaCc7XG5cbi8vIEluamVjdCBtYXJrdXBcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsYXVuY2hlck1hcmt1cCk7XG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZ2FsbGVyeU1hcmt1cCk7XG5cbmNvbnN0IGxhdW5jaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXl3emctZ2FsbGVyeS1vcGVuXScpO1xuY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS15d3pnLWRvd25sb2FkLWFsbF0nKTtcblxuY29uc3QgaW5zZXJ0TWVzc2FnZVNjcmlwdCA9ICgpID0+IHtcbiAgY29uc3Qgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgY29uc3Qgc2NyaXB0ID0gXCJ3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnUkVEVVhfU1RBVEUnLCBzdGF0ZTogX19SRURVWF9TVEFURV9fIH0pXCI7XG4gIHNjcmlwdEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNjcmlwdCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChzY3JpcHRFbCk7XG59XG5cbmNvbnN0IGdldEltYWdlVXJscyA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBpbnNlcnRNZXNzYWdlU2NyaXB0KCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBlID0+IHtcbiAgICBpZiAoZS5zb3VyY2UgIT0gd2luZG93KSByZXR1cm47XG5cbiAgICBpZiAoZS5kYXRhLnR5cGUgJiYgZS5kYXRhLnR5cGUgPT09ICdSRURVWF9TVEFURScpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZS5kYXRhLnN0YXRlO1xuXG4gICAgICBpZiAoIXN0YXRlKSByZXNvbHZlKFtdKTtcblxuICAgICAgY29uc3QgaW1hZ2VzID0gc3RhdGUuYXBwLmRhdGEubWVkaWEuZmlsdGVyKCh7IG1lZGlhVHlwZSB9KSA9PiBtZWRpYVR5cGUgPT09ICdpbWFnZScpO1xuXG4gICAgICAvLyBwYXJzZSBzcmMgYXMgVVJMIHRvIGVuc3VyZSB0aGVyZSBhcmUgbm8gcXVlcnkgcGFyYW1zXG4gICAgICBjb25zdCB1cmxzID0gaW1hZ2VzXG4gICAgICAgIC5tYXAoaW1hZ2UgPT4gaW1hZ2UudXJsKVxuICAgICAgICAubWFwKHVybFN0cmluZyA9PiBuZXcgVVJMKHVybFN0cmluZykpXG4gICAgICAgIC5tYXAodXJsID0+IGAke3VybC5vcmlnaW59JHt1cmwucGF0aG5hbWV9YCk7XG5cbiAgICAgIHJlc29sdmUodXJscyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAvLyBUaGlzIGNvdWxkIGJlIGltcHJvdmVkIHRvIGxhdW5jaCB0aGUgZ2FsbGVyeSBhcyBzb29uIGFzIHdlIGhhdmUgdGhlIGZpcnN0IGltYWdlLFxuICAvLyB0aGVuIGR5bmFtaWNhbGx5IGFkZCBhbGwgb3RoZXIgaW1hZ2VzIGFzIGRhdGEgaXMgcmV0cmlldmVkLlxuICBjb25zdCBpbWFnZVVybHMgPSBhd2FpdCBnZXRJbWFnZVVybHM7XG5cbiAgaWYgKCFpbWFnZVVybHMubGVuZ3RoKSByZXR1cm47XG5cbiAgbGF1bmNoQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGltYWdlU2l6ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbWFnZVVybHMubWFwKHVybCA9PiBpbWFnZVByb2JlRmV0Y2godXJsKSkpO1xuXG4gIGNvbnN0IGl0ZW1zID0gaW1hZ2VVcmxzLm1hcCgodXJsLCBpKSA9PiAoe1xuICAgIHNyYzogdXJsLFxuICAgIHc6IGltYWdlU2l6ZXNbaV0ud2lkdGgsXG4gICAgaDogaW1hZ2VTaXplc1tpXS5oZWlnaHQsXG4gICAgdGl0bGU6IHVybCxcbiAgfSkpO1xuXG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcblxuICBjb25zdCBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wc3dwJyk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBiZ09wYWNpdHk6IDAuOSxcbiAgICBpbmRleDogMCwgLy8gc3RhcnQgYXQgZmlyc3Qgc2xpZGVcbiAgICBjbGlja1RvQ2xvc2VOb25ab29tYWJsZTogZmFsc2UsXG4gICAgaGlzdG9yeTogZmFsc2UsXG4gICAgY2xvc2VPblZlcnRpY2FsRHJhZzogZmFsc2UsXG4gICAgY2xvc2VPblNjcm9sbDogZmFsc2UsXG4gICAgcGluY2hUb0Nsb3NlOiBmYWxzZSxcbiAgICBnZXREb3VibGVUYXBab29tOiAoaXNNb3VzZUNsaWNrLCBpdGVtKSA9PiAgTWF0aC5taW4oMSwgaXRlbS5pbml0aWFsWm9vbUxldmVsICogMiksXG4gICAgaXNDbGlja2FibGVFbGVtZW50OiBlbCA9PiBlbC50YWdOYW1lID09PSAnQScgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwc3dwX196b29tJyksXG4gICAgY2xvc2VFbENsYXNzZXM6IFtdLFxuICB9O1xuXG4gIGxldCBnYWxsZXJ5ID0gbnVsbDtcblxuICBjb25zdCBvcGVuR2FsbGVyeSA9ICgpID0+IHtcbiAgICBnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSSwgaXRlbXMsIG9wdGlvbnMpO1xuXG4gICAgLy8gVXBkYXRlIGluZGV4IHNvIGdhbGxlcnkgcmUtb3BlbnMgdG8gc2FtZSBzbGlkZVxuICAgIGdhbGxlcnkubGlzdGVuKCdhZnRlckNoYW5nZScsICgpID0+IHsgb3B0aW9ucy5pbmRleCA9IGdhbGxlcnkuZ2V0Q3VycmVudEluZGV4KCk7IH0pO1xuICAgIGdhbGxlcnkubGlzdGVuKCdkZXN0cm95JywgKCkgPT4geyBnYWxsZXJ5ID0gbnVsbCB9KTtcblxuICAgIC8vIEJ1ZyBmaXggdG8gcHJldmVudCBnYWxsZXJ5IGZyb20gY2xvc2luZyBvbiB2ZXJ0aWNhbCBkcmFnXG4gICAgaWYgKGdhbGxlcnkub3B0aW9ucy5tb3VzZVVzZWQpIHtcbiAgICAgIGdhbGxlcnkub3B0aW9ucy5jbG9zZU9uVmVydGljYWxEcmFnID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbGxlcnkubGlzdGVuKCdtb3VzZVVzZWQnLCAoKSA9PiB7XG4gICAgICAgIGdhbGxlcnkub3B0aW9ucy5jbG9zZU9uVmVydGljYWxEcmFnID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnYWxsZXJ5LmluaXQoKTtcbiAgfTtcblxuICBsYXVuY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuR2FsbGVyeSk7XG5cbiAgZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFnYWxsZXJ5KSByZXR1cm47XG4gICAgZ2FsbGVyeS5saXN0ZW4oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICAvLyBTaG93IGRldGFpbHMgYW5kIHNwZWNzIGF0IG9uY2Ugc28gaXQgaXMgYWxsIGNhcHR1cmVkXG4gICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXQtZGV0YWlscy1jb250ZW50IC5jb2xsYXBzZS1jb250ZW50LWRldGFpbHMnKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlTdGF0ZSA9IFsuLi5pbmZvXS5tYXAoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpO1xuICAgICAgaW5mby5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIaWRlIGV4dGVuc2lvbiBlbGVtZW50cyBiZWNhdXNlIGluamVjdGVkIHN0eWxlc2hlZXRzXG4gICAgICAvLyBhcmUgbm90IGluY2x1ZGVkIGluIHBhZ2UgY2FwdHVyZVxuICAgICAgY29uc3QgZXh0ZW5zaW9uVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN3cCwgLnlxemctbGF1bmNoZXInKTtcbiAgICAgIGV4dGVuc2lvblVJLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG5cbiAgICAgIC8vIFdhaXQgdG8gZW5zdXJlIHN0eWxlcyBhcmUgYXBwbGllZFxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZG93bmxvYWRMaXN0OiBpbWFnZVVybHMgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gJ3BhZ2UgY2FwdHVyZWQnKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdG8gb3JpZ2luYWwgdmlldyBvbmNlIHBhZ2UgaXMgY2FwdHVyZWQuXG4gICAgICAgICAgICBpbmZvLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpKTtcbiAgICAgICAgICAgIGluZm8uZm9yRWFjaCgoZWwsIGkpID0+IGVsLmNsYXNzTGlzdC5hZGQoZGlzcGxheVN0YXRlW2ldID8gJ29wZW4nIDogJ2Nsb3NlZCcpKTtcbiAgICAgICAgICAgIGV4dGVuc2lvblVJLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICcnKTtcbiAgICAgICAgICAgIG9wZW5HYWxsZXJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZ2FsbGVyeS5jbG9zZSgpO1xuICB9KTtcblxuICBsYXVuY2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cbm1haW4oKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=