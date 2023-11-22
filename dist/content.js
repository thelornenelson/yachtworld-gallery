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

/***/ "./node_modules/limited-cache/dist/core/LimitedCache.js":
/*!**************************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/LimitedCache.js ***!
  \**************************************************************/
/*! exports provided: LimitedCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitedCache", function() { return LimitedCache; });
/* harmony import */ var _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lowLevelFunctions.js */ "./node_modules/limited-cache/dist/core/lowLevelFunctions.js");

// Most public functions just call a low-level function directly, passing the cacheMeta.
// Doing this via a helper function makes the typeChecks easier, and minifies better.
const bindFunctionToCacheMeta = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
fn, cacheMeta) => fn.bind(null, cacheMeta);
const LimitedCache = (options) => {
    const cacheMeta = Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelInit"])(options);
    return {
        get: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelGetOne"], cacheMeta),
        getAll: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelGetAll"], cacheMeta),
        has: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelHas"], cacheMeta),
        set: (cacheKey, item) => {
            Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelSet"])(cacheMeta, cacheKey, item);
            return item;
        },
        remove: (cacheKey) => {
            Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelRemove"])(cacheMeta, cacheKey);
            return true;
        },
        reset: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelReset"], cacheMeta),
        getCacheMeta: () => cacheMeta,
        getOptions: () => cacheMeta.options,
        setOptions: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelSetOptions"], cacheMeta),
        doMaintenance: bindFunctionToCacheMeta(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelDoMaintenance"], cacheMeta),
    };
};

//# sourceMappingURL=LimitedCache.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/core/LimitedCacheObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/LimitedCacheObject.js ***!
  \********************************************************************/
/*! exports provided: LimitedCacheObject, getCacheMetaFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitedCacheObject", function() { return LimitedCacheObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheMetaFromObject", function() { return getCacheMetaFromObject; });
/* harmony import */ var _builtIns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builtIns.js */ "./node_modules/limited-cache/dist/core/builtIns.js");
/* harmony import */ var _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lowLevelFunctions.js */ "./node_modules/limited-cache/dist/core/lowLevelFunctions.js");


// The `any` here doesn't escape out anywhere: it's overridden by the constructor below
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const proxyHandler = {
    get: (cacheMeta, cacheKey) => {
        if (cacheKey === 'hasOwnProperty') {
            return _builtIns_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"];
        }
        return Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelGetOne"])(cacheMeta, cacheKey);
    },
    getOwnPropertyDescriptor: (cacheMeta, cacheKey) => {
        const hasResult = Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelHas"])(cacheMeta, cacheKey);
        const getResult = Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelGetOne"])(cacheMeta, cacheKey);
        if (hasResult) {
            return {
                configurable: true,
                enumerable: hasResult,
                value: getResult,
                writable: true,
            };
        }
        return;
    },
    has: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelHas"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (cacheMeta, cacheKey, item) => {
        Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelSet"])(cacheMeta, cacheKey, item);
        return item;
    },
    deleteProperty: (cacheMeta, cacheKey) => {
        Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelRemove"])(cacheMeta, cacheKey);
        return true;
    },
    ownKeys: (cacheMeta) => Object.keys(Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelGetAll"])(cacheMeta)),
};
/**
 * So that we can retrieve the cacheMeta for a LimitedCacheObject, without polluting its properties, each proxy
 * is associated back to its internal cacheMeta here.
 */
const cacheMetasForProxies = new WeakMap();
const LimitedCacheObject = (options) => {
    const cacheMeta = Object(_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_1__["lowLevelInit"])(options);
    const limitedCacheObject = new Proxy(cacheMeta, proxyHandler);
    cacheMetasForProxies.set(limitedCacheObject, cacheMeta);
    return limitedCacheObject;
};
const getCacheMetaFromObject = (instance) => {
    return cacheMetasForProxies.get(instance);
};

//# sourceMappingURL=LimitedCacheObject.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/core/builtIns.js":
/*!**********************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/builtIns.js ***!
  \**********************************************************/
/*! exports provided: objectAssign, objectCreate, dateNow, hasOwnProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssign", function() { return objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectCreate", function() { return objectCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateNow", function() { return dateNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
// To help minification
const { create: objectCreate, assign: objectAssign, prototype: { hasOwnProperty }, } = Object;
const dateNow = Date.now;

//# sourceMappingURL=builtIns.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/core/defaultOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/defaultOptions.js ***!
  \****************************************************************/
/*! exports provided: CURRENT_META_VERSION, MAXIMUM_CACHE_TIME, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_META_VERSION", function() { return CURRENT_META_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_CACHE_TIME", function() { return MAXIMUM_CACHE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
const CURRENT_META_VERSION = 2;
const MAXIMUM_CACHE_TIME = 365 * 86400 * 1000;
const defaultOptions = {
    // Public
    maxCacheSize: 100,
    maxCacheTime: 86400 * 1000,
    // Development-only
    warnIfItemPurgedBeforeTime: 5000,
    // Private
    opLimit: 200,
    scanLimit: 50,
};

//# sourceMappingURL=defaultOptions.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/core/limitedCacheUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/limitedCacheUtil.js ***!
  \******************************************************************/
/*! exports provided: limitedCacheUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitedCacheUtil", function() { return limitedCacheUtil; });
/* harmony import */ var _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lowLevelFunctions.js */ "./node_modules/limited-cache/dist/core/lowLevelFunctions.js");

const limitedCacheUtil = {
    init: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelInit"],
    get: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelGetOne"],
    getAll: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelGetAll"],
    has: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelHas"],
    set: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelSet"],
    remove: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelRemove"],
    reset: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelReset"],
    doMaintenance: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelDoMaintenance"],
    setOptions: _lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_0__["lowLevelSetOptions"],
};

//# sourceMappingURL=limitedCacheUtil.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/core/lowLevelFunctions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/limited-cache/dist/core/lowLevelFunctions.js ***!
  \*******************************************************************/
/*! exports provided: isCacheMeta, upgradeCacheMeta, lowLevelInit, lowLevelGetOne, lowLevelGetAll, lowLevelHas, lowLevelSet, lowLevelRemove, lowLevelReset, lowLevelDoMaintenance, lowLevelSetOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCacheMeta", function() { return isCacheMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeCacheMeta", function() { return upgradeCacheMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelInit", function() { return lowLevelInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelGetOne", function() { return lowLevelGetOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelGetAll", function() { return lowLevelGetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelHas", function() { return lowLevelHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelSet", function() { return lowLevelSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelRemove", function() { return lowLevelRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelReset", function() { return lowLevelReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelDoMaintenance", function() { return lowLevelDoMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowLevelSetOptions", function() { return lowLevelSetOptions; });
/* harmony import */ var _builtIns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builtIns.js */ "./node_modules/limited-cache/dist/core/builtIns.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultOptions.js */ "./node_modules/limited-cache/dist/core/defaultOptions.js");


/* Initialization and options */
const positiveNumberOrZero = (value) => Math.max(value, 0) || 0;
const normalizeOptions = (cacheMetaOptions) => {
    Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(cacheMetaOptions, {
        maxCacheSize: positiveNumberOrZero(cacheMetaOptions.maxCacheSize),
        maxCacheTime: positiveNumberOrZero(cacheMetaOptions.maxCacheTime),
        opLimit: positiveNumberOrZero(cacheMetaOptions.opLimit),
    });
    if (true) {
        cacheMetaOptions.warnIfItemPurgedBeforeTime = positiveNumberOrZero(cacheMetaOptions.warnIfItemPurgedBeforeTime);
    }
    return cacheMetaOptions;
};
const isCacheMeta = (cacheMeta) => {
    return !!cacheMeta && !!cacheMeta.limitedCacheMetaVersion;
};
const upgradeCacheMeta = (cacheMeta) => {
    if (!isCacheMeta(cacheMeta)) {
        throw new Error('Limited-cache metadata is missing: please check your usage');
    }
    if (cacheMeta.limitedCacheMetaVersion !== _defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__["CURRENT_META_VERSION"]) {
        // Version is out of date! (Today the only prior version is 1)
        // Version 1: Cache meta cannot be migrated because timestamps and keys are incompatible
        console.warn('Limited-cache metadata is from an incompatible version (1). It must be reset.');
        cacheMeta.limitedCacheMetaVersion = _defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__["CURRENT_META_VERSION"];
        lowLevelReset(cacheMeta);
    }
};
const lowLevelSetOptions = (cacheMeta, options) => {
    upgradeCacheMeta(cacheMeta);
    return normalizeOptions(Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(cacheMeta.options, options));
};
const lowLevelInit = (optionsOrCacheMeta) => {
    if (isCacheMeta(optionsOrCacheMeta)) {
        const existingCacheMeta = optionsOrCacheMeta;
        upgradeCacheMeta(existingCacheMeta);
        return existingCacheMeta;
    }
    // Else: it's options
    const fullOptions = normalizeOptions({ ..._defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__["defaultOptions"], ...optionsOrCacheMeta });
    // The cacheMeta is created once, and persists per instance
    const newCacheMeta = lowLevelReset({
        limitedCacheMetaVersion: _defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__["CURRENT_META_VERSION"],
        options: fullOptions,
    });
    return newCacheMeta;
};
/* Internal cache manipulation */
const _getExpireTime = (cacheMeta, cacheKey) => {
    const { options: { maxCacheTime }, keyInfo: { [cacheKey]: keyInfo }, } = cacheMeta;
    if (!keyInfo) {
        // A missing record is always treated as expired
        return 0;
    }
    // If we have an exact expireTime then honor it. Otherwise it'll depend on the current maxCacheTime.
    const [setTime, expireTime] = keyInfo;
    return expireTime || setTime + (maxCacheTime || _defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__["MAXIMUM_CACHE_TIME"]);
};
const _cacheKeyHasExpired = (cacheMeta, cacheKey, now) => {
    return _getExpireTime(cacheMeta, cacheKey) < now;
};
const lowLevelDoMaintenance = (cacheMeta) => {
    upgradeCacheMeta(cacheMeta);
    const { cache, keyList, keyInfo } = cacheMeta;
    const now = Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["dateNow"])();
    // Rebuild cache from keyList only, checking timestamps to auto-remove expired
    const [newCache, newKeyList, newKeyInfo] = keyList.reduce((acc, cacheKey) => {
        const [accCache, accKeyList, accKeyInfo] = acc;
        if (!_cacheKeyHasExpired(cacheMeta, cacheKey, now)) {
            accCache[cacheKey] = cache[cacheKey];
            accKeyList.push(cacheKey);
            accKeyInfo[cacheKey] = keyInfo[cacheKey];
        }
        return acc;
    }, [
        {},
        [],
        Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectCreate"])(null),
    ]);
    return Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(cacheMeta, {
        cache: newCache,
        keyList: newKeyList,
        keyInfo: newKeyInfo,
        opsLeft: cacheMeta.options.opLimit,
    });
};
const _removeFromIndex = (cacheMeta, startIndex, now) => {
    const { cache, keyList, keyInfo } = cacheMeta;
    // Always remove the item requested, and also remove any neighbors who have expired
    let nextIndex = startIndex;
    let nextCacheKey = keyList[startIndex];
    const keyListLength = keyList.length;
    do {
        // Remove the 'next' item
        cache[nextCacheKey] = keyInfo[nextCacheKey] = undefined;
        // Now advance and decide whether to keep going
        nextIndex++;
        nextCacheKey = keyList[nextIndex];
    } while (nextIndex < keyListLength && _cacheKeyHasExpired(cacheMeta, nextCacheKey, now));
    // Remove the index for everything from the startIndex until we stopped
    keyList.splice(startIndex, nextIndex - startIndex);
};
const _removeItemsToMakeRoom = (cacheMeta, now) => {
    const { options: { scanLimit, warnIfItemPurgedBeforeTime }, cache, keyList, keyInfo, } = cacheMeta;
    // These track the soonest-to-expire thing we've found. It may not actually be "oldest".
    // By default we'll remove the item at the head of the queue, unless we find something better.
    let oldestItemIndex = 0;
    let oldestExpireTime = _getExpireTime(cacheMeta, keyList[0]);
    if (oldestExpireTime > now) {
        // The head of the list hasn't yet expired: scan for a better candidate to remove
        let indexToCheck = 0;
        const maxIndexToCheck = Math.min(keyList.length, scanLimit);
        while (indexToCheck < maxIndexToCheck) {
            const cacheKeyForIndex = keyList[indexToCheck];
            const expireTimeForIndex = _getExpireTime(cacheMeta, cacheKeyForIndex);
            // We only consider it if it's eligible for expiration: otherwise it can't be a better option
            // than the default head-of-queue
            if (expireTimeForIndex < now) {
                // We found an expired item! This wins automatically
                oldestItemIndex = indexToCheck;
                oldestExpireTime = 0;
                break;
            }
            if (expireTimeForIndex < oldestExpireTime) {
                // We have a new leader
                oldestItemIndex = indexToCheck;
                oldestExpireTime = expireTimeForIndex;
            }
            indexToCheck += 1;
        }
    }
    // Warn if the 'oldest' item is more recent than we'd like: this means it cycled into and out of
    // cache too quickly for the cache to be useful.
    if ( true &&
        warnIfItemPurgedBeforeTime &&
        oldestExpireTime > now) {
        const oldestItemKey = keyList[oldestItemIndex];
        const [oldestItemSetTime, oldestItemExpireTime] = keyInfo[oldestItemKey];
        if (now - oldestItemSetTime < warnIfItemPurgedBeforeTime) {
            console.warn('Purged an item from cache while it was still fresh: you may want to increase maxCacheSize', {
                currentTime: now,
                key: oldestItemKey,
                item: cache[oldestItemKey],
                setTime: oldestItemSetTime,
                expireTime: oldestItemExpireTime,
                timeInCache: now - oldestItemSetTime,
            });
        }
    }
    // Remove the oldest item we found, plus any expired neighbors
    _removeFromIndex(cacheMeta, oldestItemIndex, now);
};
/* Accessors */
const lowLevelHas = (cacheMeta, cacheKey) => {
    upgradeCacheMeta(cacheMeta);
    const { cache } = cacheMeta;
    if (_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"].call(cache, cacheKey) && cache[cacheKey] !== undefined) {
        if (!_cacheKeyHasExpired(cacheMeta, cacheKey, Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["dateNow"])())) {
            return true;
        }
        // If it's expired, clear the value so that we can short-circuit future lookups
        cache[cacheKey] = undefined;
    }
    return false;
};
const lowLevelGetOne = (cacheMeta, cacheKey) => {
    upgradeCacheMeta(cacheMeta);
    if (lowLevelHas(cacheMeta, cacheKey)) {
        return cacheMeta.cache[cacheKey];
    }
    return;
};
const lowLevelGetAll = (cacheMeta) => {
    upgradeCacheMeta(cacheMeta);
    // Remove all expired values, and return whatever's left
    lowLevelDoMaintenance(cacheMeta);
    // Retype because there won't be any `undefined` values after doMaintenance
    return cacheMeta.cache;
};
const lowLevelSet = (cacheMeta, cacheKey, item) => {
    upgradeCacheMeta(cacheMeta);
    const { options: { maxCacheSize }, keyList, keyInfo, } = cacheMeta;
    const now = Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["dateNow"])();
    const isNew = !keyInfo[cacheKey];
    if (cacheMeta.cache[cacheKey] !== item) {
        // The cache itself is immutable (but the rest of cacheMeta is not)
        cacheMeta.cache = {
            ...cacheMeta.cache,
            [cacheKey]: item,
        };
    }
    // We've now set or updated it. Regardless of whether it's new, bump its set time
    // @TODO: expireTime override
    keyInfo[cacheKey] = [now, 0];
    if (isNew) {
        // It's a new key: grow the cache, then shrink it if we can
        keyList.push(cacheKey);
        cacheMeta.opsLeft--;
        if (cacheMeta.opsLeft <= 0) {
            // Time for an oil change
            lowLevelDoMaintenance(cacheMeta);
        }
        if (maxCacheSize && cacheMeta.keyList.length > maxCacheSize) {
            // We're still over the limit: drop at least one item
            _removeItemsToMakeRoom(cacheMeta, now);
        }
    }
    if (_cacheKeyHasExpired(cacheMeta, keyList[0], now)) {
        // While we're here, if we need to expire the head of the queue then drop it
        _removeFromIndex(cacheMeta, 0, now);
    }
    return cacheMeta;
};
const lowLevelRemove = (cacheMeta, cacheKey) => {
    upgradeCacheMeta(cacheMeta);
    const { cache, keyInfo } = cacheMeta;
    if (keyInfo[cacheKey]) {
        if (cache[cacheKey] !== undefined) {
            cacheMeta.cache = {
                ...cache,
                [cacheKey]: undefined,
            };
        }
        keyInfo[cacheKey] = undefined;
    }
    return cacheMeta;
};
const lowLevelReset = (cacheMeta) => {
    upgradeCacheMeta(cacheMeta);
    return Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(cacheMeta, {
        cache: {},
        keyList: [],
        keyInfo: Object(_builtIns_js__WEBPACK_IMPORTED_MODULE_0__["objectCreate"])(null),
        opsLeft: cacheMeta.options.opLimit,
    });
};

//# sourceMappingURL=lowLevelFunctions.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/limited-cache/dist/index.js ***!
  \**************************************************/
/*! exports provided: CURRENT_META_VERSION, MAXIMUM_CACHE_TIME, defaultOptions, LimitedCache, LimitedCacheObject, getCacheMetaFromObject, limitedCacheUtil, isCacheMeta, upgradeCacheMeta, lowLevelInit, lowLevelGetOne, lowLevelGetAll, lowLevelHas, lowLevelSet, lowLevelRemove, lowLevelReset, lowLevelDoMaintenance, lowLevelSetOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/defaultOptions.js */ "./node_modules/limited-cache/dist/core/defaultOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENT_META_VERSION", function() { return _core_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__["CURRENT_META_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_CACHE_TIME", function() { return _core_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__["MAXIMUM_CACHE_TIME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return _core_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__["defaultOptions"]; });

/* harmony import */ var _core_LimitedCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/LimitedCache.js */ "./node_modules/limited-cache/dist/core/LimitedCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitedCache", function() { return _core_LimitedCache_js__WEBPACK_IMPORTED_MODULE_1__["LimitedCache"]; });

/* harmony import */ var _core_LimitedCacheObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/LimitedCacheObject.js */ "./node_modules/limited-cache/dist/core/LimitedCacheObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitedCacheObject", function() { return _core_LimitedCacheObject_js__WEBPACK_IMPORTED_MODULE_2__["LimitedCacheObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheMetaFromObject", function() { return _core_LimitedCacheObject_js__WEBPACK_IMPORTED_MODULE_2__["getCacheMetaFromObject"]; });

/* harmony import */ var _core_limitedCacheUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/limitedCacheUtil.js */ "./node_modules/limited-cache/dist/core/limitedCacheUtil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "limitedCacheUtil", function() { return _core_limitedCacheUtil_js__WEBPACK_IMPORTED_MODULE_3__["limitedCacheUtil"]; });

/* harmony import */ var _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/lowLevelFunctions.js */ "./node_modules/limited-cache/dist/core/lowLevelFunctions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCacheMeta", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["isCacheMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upgradeCacheMeta", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["upgradeCacheMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelInit", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelGetOne", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelGetOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelGetAll", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelGetAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelHas", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelHas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelSet", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelRemove", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelReset", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelDoMaintenance", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelDoMaintenance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowLevelSetOptions", function() { return _core_lowLevelFunctions_js__WEBPACK_IMPORTED_MODULE_4__["lowLevelSetOptions"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "./node_modules/limited-cache/dist/types.js");
/* empty/unused harmony star reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/limited-cache/dist/types.js":
/*!**************************************************!*\
  !*** ./node_modules/limited-cache/dist/types.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

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




function imageProbeFetch(url, cache) {
  const controller = new AbortController();
  const { signal } = controller;

  const cachedSize = cache.get(url);

  if (cachedSize) {
    console.log('got size from cache', url, cachedSize);
    return Promise.resolve(cachedSize);
  }

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
        .then(() => {
          cache.set(url, size);
          console.log('size', size);
          return size;
        });
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

/***/ "./src/content/components/sizeCache.js":
/*!*********************************************!*\
  !*** ./src/content/components/sizeCache.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SizeCache; });
/* harmony import */ var limited_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! limited-cache */ "./node_modules/limited-cache/dist/index.js");


class SizeCache {
  constructor({ id }) {
    this.id = id;
    const loadedCache = JSON.parse(window.localStorage.getItem(id));

    const options = {
      maxCacheSize: false,
      maxCacheTime: 1000 * 60 * 60 * 24 * 30, // 30 days
    };

    this.cacheMeta = Object(limited_cache__WEBPACK_IMPORTED_MODULE_0__["lowLevelInit"])(loadedCache || options);

    console.log('cacheMeta', this.cacheMeta);
  }

  set(key, value) {
    Object(limited_cache__WEBPACK_IMPORTED_MODULE_0__["lowLevelSet"])(this.cacheMeta, key, value);
    console.log('cacheMeta after set', this.cacheMeta);
  }

  get(key) {
    return Object(limited_cache__WEBPACK_IMPORTED_MODULE_0__["lowLevelGetOne"])(this.cacheMeta, key);
  }

  has(key) {
    return Object(limited_cache__WEBPACK_IMPORTED_MODULE_0__["lowLevelHas"])(this.cacheMeta, key);
  }

  save() {
    window.localStorage.setItem(this.id, JSON.stringify(this.cacheMeta));
  }
}


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
/* harmony import */ var _components_sizeCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sizeCache */ "./src/content/components/sizeCache.js");
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

  const sizeCache = new _components_sizeCache__WEBPACK_IMPORTED_MODULE_6__["default"]('yw-gallery-size-cache-v1');

  const imageSizes = await Promise.all(imageUrls.map(url => Object(_components_imageProbeFetch__WEBPACK_IMPORTED_MODULE_5__["default"])(url, sizeCache)));

  sizeCache.save();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L0JtcFByb2JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9HaWZQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvSnBlZzIwMDBQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvSnBlZ1Byb2JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9QbmdQcm9iZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvUHJvYmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L1NpZ25hdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHplcm9kZXBzL2ltYWdlLXByb2JlL2Rpc3QvU3RyaW5nU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AemVyb2RlcHMvaW1hZ2UtcHJvYmUvZGlzdC9XZWJwUHJvYmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B6ZXJvZGVwcy9pbWFnZS1wcm9iZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbWl0ZWQtY2FjaGUvZGlzdC9jb3JlL0xpbWl0ZWRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGltaXRlZC1jYWNoZS9kaXN0L2NvcmUvTGltaXRlZENhY2hlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW1pdGVkLWNhY2hlL2Rpc3QvY29yZS9idWlsdElucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGltaXRlZC1jYWNoZS9kaXN0L2NvcmUvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbWl0ZWQtY2FjaGUvZGlzdC9jb3JlL2xpbWl0ZWRDYWNoZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbWl0ZWQtY2FjaGUvZGlzdC9jb3JlL2xvd0xldmVsRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW1pdGVkLWNhY2hlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbWl0ZWQtY2FjaGUvZGlzdC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb21wb25lbnRzL2dhbGxlcnkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb21wb25lbnRzL2ltYWdlUHJvYmVGZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb21wb25lbnRzL2xhdW5jaGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29tcG9uZW50cy9waG90b3N3aXBlLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbXBvbmVudHMvc2l6ZUNhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29udGVudC5zY3NzPzA5NDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG1FQUFTO0FBQ2pDLDBCQUEwQixtQkFBTyxDQUFDLHVGQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQjtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDakIsRUFBRSxNQUFNLEVBSU47QUFDRixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSw0RjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTyxXQUFXO0FBQzNDO0FBQ0E7O0FBRUEsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw4Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsNkNBQTZDO0FBQzdDLEk7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJCQUEyQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsaUM7QUFDQSxVQUFVLFM7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGlFO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsMkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSw0QjtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLGtEO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFD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OztBQUVGO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEc7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEc7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTCxxQkFBcUI7QUFDckIsSztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixzQkFBc0I7QUFDdEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0osaUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQSxrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBOztBQUVBOztBQUVBLG1FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7QUFNQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE9B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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQLHFDQUFxQztBQUNyQzs7QUFFQSxNQUFNOztBQUVOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHlEQUF5RDtBQUMzRztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7O0FBRUE7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxvQ0FBb0MseURBQXlEOztBQUU3RjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHVCQUF1QixFQUFFOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDLGdDQUFnQztBQUNsRTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3I0QkQ7QUFBQTtBQUFBO0FBQXVGOztBQUV4RTtBQUNmLGVBQWUsS0FBSztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixrRUFBWTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvRUFBYztBQUN6Qjs7QUFFQTtBQUNBLFdBQVcsaUVBQVc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN3Qjs7QUFFeEI7QUFDd0Q7QUFDRjs7QUFFdEQ7O0FBRW9DO0FBQ2tCOztBQUVLO0FBQ1o7O0FBRS9DO0FBQ0EsOENBQThDLGdFQUFjO0FBQzVELDhDQUE4QywrREFBYTs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUE4QztBQUNwRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbURBQW1ELFlBQVk7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsRUFBRSxhQUFhOztBQUVqRDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDZEQUFTOztBQUVqQyw0REFBNEQsMkVBQWU7O0FBRTNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixpREFBVSxjQUFjLGdFQUFZOztBQUV0RDtBQUNBLHlDQUF5QywyQ0FBMkMsRUFBRTtBQUN0RixxQ0FBcUMsaUJBQWlCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQywwQkFBMEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZKQSx1QyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29udGVudC9jb250ZW50LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1Byb2JlXCIpO1xyXG5jb25zdCBTdHJpbmdTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1N0cmluZ1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gMjY7XHJcbmNvbnN0IFNJR05BVFVSRSA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJCTVwiKTtcclxuY2xhc3MgQm1wUHJvYmUgZXh0ZW5kcyBQcm9iZV8xLlByb2JlIHtcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImJtcFwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1pbWVUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImltYWdlL2JtcFwiO1xyXG4gICAgfVxyXG4gICAgcHJvYmVUeXBlKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBidWZmZXIubGVuZ3RoID49IE1JTklNVU1fQlVGRkVSX0xFTkdUSCAmJlxyXG4gICAgICAgICAgICBTSUdOQVRVUkUuY2hlY2soYnVmZmVyLCAwKTtcclxuICAgIH1cclxuICAgIHByb2JlU2l6ZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MTZMRSgxOCksXHJcbiAgICAgICAgICAgIGhlaWdodDogYnVmZmVyLnJlYWRVSW50MTZMRSgyMilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQm1wUHJvYmUgPSBCbXBQcm9iZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Qm1wUHJvYmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgUHJvYmVfMSA9IHJlcXVpcmUoXCIuL1Byb2JlXCIpO1xyXG5jb25zdCBTdHJpbmdTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1N0cmluZ1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gMTA7XHJcbmNvbnN0IFNJR05BVFVSRTg3QSA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJHSUY4N2FcIik7XHJcbmNvbnN0IFNJR05BVFVSRTg5QSA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJHSUY4OWFcIik7XHJcbmNsYXNzIEdpZlByb2JlIGV4dGVuZHMgUHJvYmVfMS5Qcm9iZSB7XHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJnaWZcIjtcclxuICAgIH1cclxuICAgIGdldCBtaW1lVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJpbWFnZS9naWZcIjtcclxuICAgIH1cclxuICAgIHByb2JlVHlwZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4gYnVmZmVyLmxlbmd0aCA+PSBNSU5JTVVNX0JVRkZFUl9MRU5HVEggJiZcclxuICAgICAgICAgICAgKFNJR05BVFVSRTg3QS5jaGVjayhidWZmZXIsIDApIHx8IFNJR05BVFVSRTg5QS5jaGVjayhidWZmZXIsIDApKTtcclxuICAgIH1cclxuICAgIHByb2JlU2l6ZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MTZMRSg2KSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBidWZmZXIucmVhZFVJbnQxNkxFKDgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdpZlByb2JlID0gR2lmUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdpZlByb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFByb2JlXzEgPSByZXF1aXJlKFwiLi9Qcm9iZVwiKTtcclxuY29uc3QgU3RyaW5nU2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi9TdHJpbmdTaWduYXR1cmVcIik7XHJcbmNvbnN0IE1JTklNVU1fQlVGRkVSX0xFTkdUSCA9IDU2O1xyXG5jb25zdCBTSUdOQVRVUkUgPSBuZXcgU3RyaW5nU2lnbmF0dXJlXzEuU3RyaW5nU2lnbmF0dXJlKFwiXFx4MDBcXHgwMFxceDAwXFx4MGNqUCAgXFxyXFxuXFx4ODdcXG5cIik7XHJcbmNsYXNzIEpwZWcyMDAwUHJvYmUgZXh0ZW5kcyBQcm9iZV8xLlByb2JlIHtcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImpwMlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1pbWVUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImltYWdlL2pwMlwiO1xyXG4gICAgfVxyXG4gICAgcHJvYmVUeXBlKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBidWZmZXIubGVuZ3RoID49IE1JTklNVU1fQlVGRkVSX0xFTkdUSCAmJlxyXG4gICAgICAgICAgICBTSUdOQVRVUkUuY2hlY2soYnVmZmVyLCAwKTtcclxuICAgIH1cclxuICAgIHByb2JlU2l6ZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MzJCRSg0OCArIDQpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDMyQkUoNDgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpwZWcyMDAwUHJvYmUgPSBKcGVnMjAwMFByb2JlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1KcGVnMjAwMFByb2JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFByb2JlXzEgPSByZXF1aXJlKFwiLi9Qcm9iZVwiKTtcclxuY29uc3QgU2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi9TaWduYXR1cmVcIik7XHJcbmNvbnN0IE1JTklNVU1fQlVGRkVSX0xFTkdUSCA9IDQ7XHJcbmNvbnN0IFNJR05BVFVSRSA9IG5ldyBTaWduYXR1cmVfMS5TaWduYXR1cmUoWzB4RkYsIDB4RDhdKTtcclxuY2xhc3MgSnBlZ1Byb2JlIGV4dGVuZHMgUHJvYmVfMS5Qcm9iZSB7XHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJqcGVnXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgbWltZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1hZ2UvanBlZ1wiO1xyXG4gICAgfVxyXG4gICAgcHJvYmVUeXBlKGJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBidWZmZXIubGVuZ3RoID49IE1JTklNVU1fQlVGRkVSX0xFTkdUSCAmJlxyXG4gICAgICAgICAgICBTSUdOQVRVUkUuY2hlY2soYnVmZmVyLCAwKTtcclxuICAgIH1cclxuICAgIHByb2JlU2l6ZShidWZmZXIpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMjtcclxuICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAtIG9mZnNldCA+IDIpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlcltvZmZzZXQrK10gIT09IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBidWZmZXJbb2Zmc2V0KytdO1xyXG4gICAgICAgICAgICB3aGlsZSAoY29kZSA9PT0gMHhGRiAmJiBvZmZzZXQgPCBidWZmZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gYnVmZmVyW29mZnNldCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgaWYgKChjb2RlID49IDB4RDAgJiYgY29kZSA8PSAweEQ5KSB8fCBjb2RlID09PSAweDAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPj0gMHhDMCAmJiBjb2RlIDw9IDB4RkUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoIC0gb2Zmc2V0IDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBidWZmZXIucmVhZFVJbnQxNkJFKG9mZnNldCkgLSAyO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAweEQ5IHx8IGNvZGUgPT09IDB4REEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxlbmd0aCA+PSA1ICYmIChjb2RlID49IDB4QzAgJiYgY29kZSA8PSAweENGKSAmJiBjb2RlICE9PSAweEM0ICYmIGNvZGUgIT09IDB4QzggJiYgY29kZSAhPT0gMHhDQykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggLSBvZmZzZXQgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJ1ZmZlci5yZWFkVUludDE2QkUob2Zmc2V0ICsgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBidWZmZXIucmVhZFVJbnQxNkJFKG9mZnNldCArIDEpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5KcGVnUHJvYmUgPSBKcGVnUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUpwZWdQcm9iZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBQcm9iZV8xID0gcmVxdWlyZShcIi4vUHJvYmVcIik7XHJcbmNvbnN0IFNpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vU2lnbmF0dXJlXCIpO1xyXG5jb25zdCBTdHJpbmdTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL1N0cmluZ1NpZ25hdHVyZVwiKTtcclxuY29uc3QgTUlOSU1VTV9CVUZGRVJfTEVOR1RIID0gMjQ7XHJcbmNvbnN0IFNJR05BVFVSRSA9IG5ldyBTaWduYXR1cmVfMS5TaWduYXR1cmUoWzEzNywgODAsIDc4LCA3MSwgMTMsIDEwLCAyNiwgMTBdKTtcclxuY29uc3QgU0lHTkFUVVJFSUhEUiA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJJSERSXCIpO1xyXG5jbGFzcyBQbmdQcm9iZSBleHRlbmRzIFByb2JlXzEuUHJvYmUge1xyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwicG5nXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgbWltZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW1hZ2UvcG5nXCI7XHJcbiAgICB9XHJcbiAgICBwcm9iZVR5cGUoYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5sZW5ndGggPj0gTUlOSU1VTV9CVUZGRVJfTEVOR1RIICYmXHJcbiAgICAgICAgICAgIFNJR05BVFVSRS5jaGVjayhidWZmZXIsIDApO1xyXG4gICAgfVxyXG4gICAgcHJvYmVTaXplKGJ1ZmZlcikge1xyXG4gICAgICAgIGlmIChTSUdOQVRVUkVJSERSLmNoZWNrKGJ1ZmZlciwgMTIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MzJCRSgxNiksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDMyQkUoMTYgKyA0KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYnVmZmVyLnJlYWRVSW50MzJCRSg4KSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBidWZmZXIucmVhZFVJbnQzMkJFKDggKyA0KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbmdQcm9iZSA9IFBuZ1Byb2JlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1QbmdQcm9iZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQcm9iZSB7XHJcbn1cclxuZXhwb3J0cy5Qcm9iZSA9IFByb2JlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9iZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTaWduYXR1cmUge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gZGF0YTtcclxuICAgIH1cclxuICAgIGNoZWNrKGJ1ZmZlciwgcG9zaXRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvc2l0aW9uOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyW2orK10gIT09IHRoaXMuYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNpZ25hdHVyZSA9IFNpZ25hdHVyZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2lnbmF0dXJlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFNpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vU2lnbmF0dXJlXCIpO1xyXG5jbGFzcyBTdHJpbmdTaWduYXR1cmUgZXh0ZW5kcyBTaWduYXR1cmVfMS5TaWduYXR1cmUge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IE1BU0sgPSAweEZGO1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goZGF0YS5jaGFyQ29kZUF0KGkpICYgTUFTSyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyKGFycmF5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ1NpZ25hdHVyZSA9IFN0cmluZ1NpZ25hdHVyZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RyaW5nU2lnbmF0dXJlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFByb2JlXzEgPSByZXF1aXJlKFwiLi9Qcm9iZVwiKTtcclxuY29uc3QgU3RyaW5nU2lnbmF0dXJlXzEgPSByZXF1aXJlKFwiLi9TdHJpbmdTaWduYXR1cmVcIik7XHJcbmNvbnN0IE1JTklNVU1fQlVGRkVSX0xFTkdUSCA9IDQwO1xyXG5jb25zdCBTSUdOQVRVUkVfUklGRiA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJSSUZGXCIpO1xyXG5jb25zdCBTSUdOQVRVUkVfVlA4ID0gbmV3IFN0cmluZ1NpZ25hdHVyZV8xLlN0cmluZ1NpZ25hdHVyZShcIldFQlBWUDggXCIpO1xyXG5jb25zdCBTSUdOQVRVUkVfVlA4TCA9IG5ldyBTdHJpbmdTaWduYXR1cmVfMS5TdHJpbmdTaWduYXR1cmUoXCJXRUJQVlA4TFwiKTtcclxuY29uc3QgU0lHTkFUVVJFX1ZQOFggPSBuZXcgU3RyaW5nU2lnbmF0dXJlXzEuU3RyaW5nU2lnbmF0dXJlKFwiV0VCUFZQOFhcIik7XHJcbmNsYXNzIFdlYnBQcm9iZSBleHRlbmRzIFByb2JlXzEuUHJvYmUge1xyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwid2VicFwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1pbWVUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBcImltYWdlL3dlYnBcIjtcclxuICAgIH1cclxuICAgIHByb2JlVHlwZShidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4gYnVmZmVyLmxlbmd0aCA+PSBNSU5JTVVNX0JVRkZFUl9MRU5HVEggJiZcclxuICAgICAgICAgICAgU0lHTkFUVVJFX1JJRkYuY2hlY2soYnVmZmVyLCAwKTtcclxuICAgIH1cclxuICAgIHByb2JlU2l6ZShidWZmZXIpIHtcclxuICAgICAgICBpZiAoU0lHTkFUVVJFX1ZQOC5jaGVjayhidWZmZXIsIDgpKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXJbMTYgKyA3XSAhPT0gMHg5RCB8fCBidWZmZXJbMTYgKyA4XSAhPT0gMHgwMSB8fCBidWZmZXJbMTYgKyA5XSAhPT0gMHgyQSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGJ1ZmZlci5yZWFkVUludDE2TEUoMTYgKyAxMCkgJiAweDNGRkYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJ1ZmZlci5yZWFkVUludDMyTEUoMTYgKyAxMikgJiAweDNGRkZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFNJR05BVFVSRV9WUDhMLmNoZWNrKGJ1ZmZlciwgOCkpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlclsyMF0gIT09IDB4MkYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYml0cyA9IGJ1ZmZlci5yZWFkVUludDMyTEUoMTYgKyA1KTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAoYml0cyAmIDB4M0ZGRikgKyAxLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAoKGJpdHMgPj4gMTQpICYgMHgzRkZGKSArIDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFNJR05BVFVSRV9WUDhYLmNoZWNrKGJ1ZmZlciwgOCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBidWZmZXIucmVhZFVJbnRMRSgxNiArIDgsIDMpICsgMSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYnVmZmVyLnJlYWRVSW50TEUoMTYgKyAxMSwgMykgKyAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5XZWJwUHJvYmUgPSBXZWJwUHJvYmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdlYnBQcm9iZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBCbXBQcm9iZV8xID0gcmVxdWlyZShcIi4vQm1wUHJvYmVcIik7XHJcbmNvbnN0IEpwZWdQcm9iZV8xID0gcmVxdWlyZShcIi4vSnBlZ1Byb2JlXCIpO1xyXG5jb25zdCBKcGVnMjAwMFByb2JlXzEgPSByZXF1aXJlKFwiLi9KcGVnMjAwMFByb2JlXCIpO1xyXG5jb25zdCBHaWZQcm9iZV8xID0gcmVxdWlyZShcIi4vR2lmUHJvYmVcIik7XHJcbmNvbnN0IFBuZ1Byb2JlXzEgPSByZXF1aXJlKFwiLi9QbmdQcm9iZVwiKTtcclxuY29uc3QgV2VicFByb2JlXzEgPSByZXF1aXJlKFwiLi9XZWJwUHJvYmVcIik7XHJcbmNsYXNzIEltYWdlUHJvYmUge1xyXG4gICAgc3RhdGljIHJlZ2lzdGVyKHByb2JlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9iZXMucHVzaChwcm9iZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZnJvbUJ1ZmZlcihidWZmZXIpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2JlIG9mIHRoaXMucHJvYmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9iZS5wcm9iZVR5cGUoYnVmZmVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHByb2JlLnByb2JlU2l6ZShidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHByb2JlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBwcm9iZS5taW1lVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlUHJvYmUgPSBJbWFnZVByb2JlO1xyXG5JbWFnZVByb2JlLnByb2JlcyA9IFtdO1xyXG5JbWFnZVByb2JlLnJlZ2lzdGVyKG5ldyBQbmdQcm9iZV8xLlBuZ1Byb2JlKCkpO1xyXG5JbWFnZVByb2JlLnJlZ2lzdGVyKG5ldyBKcGVnUHJvYmVfMS5KcGVnUHJvYmUoKSk7XHJcbkltYWdlUHJvYmUucmVnaXN0ZXIobmV3IEdpZlByb2JlXzEuR2lmUHJvYmUoKSk7XHJcbkltYWdlUHJvYmUucmVnaXN0ZXIobmV3IFdlYnBQcm9iZV8xLldlYnBQcm9iZSgpKTtcclxuSW1hZ2VQcm9iZS5yZWdpc3RlcihuZXcgSnBlZzIwMDBQcm9iZV8xLkpwZWcyMDAwUHJvYmUoKSk7XHJcbkltYWdlUHJvYmUucmVnaXN0ZXIobmV3IEJtcFByb2JlXzEuQm1wUHJvYmUoKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsImltcG9ydCB7IGxvd0xldmVsSW5pdCwgbG93TGV2ZWxHZXRPbmUsIGxvd0xldmVsR2V0QWxsLCBsb3dMZXZlbEhhcywgbG93TGV2ZWxTZXQsIGxvd0xldmVsUmVtb3ZlLCBsb3dMZXZlbFJlc2V0LCBsb3dMZXZlbFNldE9wdGlvbnMsIGxvd0xldmVsRG9NYWludGVuYW5jZSwgfSBmcm9tICcuL2xvd0xldmVsRnVuY3Rpb25zLmpzJztcbi8vIE1vc3QgcHVibGljIGZ1bmN0aW9ucyBqdXN0IGNhbGwgYSBsb3ctbGV2ZWwgZnVuY3Rpb24gZGlyZWN0bHksIHBhc3NpbmcgdGhlIGNhY2hlTWV0YS5cbi8vIERvaW5nIHRoaXMgdmlhIGEgaGVscGVyIGZ1bmN0aW9uIG1ha2VzIHRoZSB0eXBlQ2hlY2tzIGVhc2llciwgYW5kIG1pbmlmaWVzIGJldHRlci5cbmNvbnN0IGJpbmRGdW5jdGlvblRvQ2FjaGVNZXRhID0gKFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmZuLCBjYWNoZU1ldGEpID0+IGZuLmJpbmQobnVsbCwgY2FjaGVNZXRhKTtcbmNvbnN0IExpbWl0ZWRDYWNoZSA9IChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY2FjaGVNZXRhID0gbG93TGV2ZWxJbml0KG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogYmluZEZ1bmN0aW9uVG9DYWNoZU1ldGEobG93TGV2ZWxHZXRPbmUsIGNhY2hlTWV0YSksXG4gICAgICAgIGdldEFsbDogYmluZEZ1bmN0aW9uVG9DYWNoZU1ldGEobG93TGV2ZWxHZXRBbGwsIGNhY2hlTWV0YSksXG4gICAgICAgIGhhczogYmluZEZ1bmN0aW9uVG9DYWNoZU1ldGEobG93TGV2ZWxIYXMsIGNhY2hlTWV0YSksXG4gICAgICAgIHNldDogKGNhY2hlS2V5LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBsb3dMZXZlbFNldChjYWNoZU1ldGEsIGNhY2hlS2V5LCBpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IChjYWNoZUtleSkgPT4ge1xuICAgICAgICAgICAgbG93TGV2ZWxSZW1vdmUoY2FjaGVNZXRhLCBjYWNoZUtleSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGJpbmRGdW5jdGlvblRvQ2FjaGVNZXRhKGxvd0xldmVsUmVzZXQsIGNhY2hlTWV0YSksXG4gICAgICAgIGdldENhY2hlTWV0YTogKCkgPT4gY2FjaGVNZXRhLFxuICAgICAgICBnZXRPcHRpb25zOiAoKSA9PiBjYWNoZU1ldGEub3B0aW9ucyxcbiAgICAgICAgc2V0T3B0aW9uczogYmluZEZ1bmN0aW9uVG9DYWNoZU1ldGEobG93TGV2ZWxTZXRPcHRpb25zLCBjYWNoZU1ldGEpLFxuICAgICAgICBkb01haW50ZW5hbmNlOiBiaW5kRnVuY3Rpb25Ub0NhY2hlTWV0YShsb3dMZXZlbERvTWFpbnRlbmFuY2UsIGNhY2hlTWV0YSksXG4gICAgfTtcbn07XG5leHBvcnQgeyBMaW1pdGVkQ2FjaGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpbWl0ZWRDYWNoZS5qcy5tYXAiLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gJy4vYnVpbHRJbnMuanMnO1xuaW1wb3J0IHsgbG93TGV2ZWxJbml0LCBsb3dMZXZlbEdldE9uZSwgbG93TGV2ZWxHZXRBbGwsIGxvd0xldmVsSGFzLCBsb3dMZXZlbFNldCwgbG93TGV2ZWxSZW1vdmUsIH0gZnJvbSAnLi9sb3dMZXZlbEZ1bmN0aW9ucy5qcyc7XG4vLyBUaGUgYGFueWAgaGVyZSBkb2Vzbid0IGVzY2FwZSBvdXQgYW55d2hlcmU6IGl0J3Mgb3ZlcnJpZGRlbiBieSB0aGUgY29uc3RydWN0b3IgYmVsb3dcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5jb25zdCBwcm94eUhhbmRsZXIgPSB7XG4gICAgZ2V0OiAoY2FjaGVNZXRhLCBjYWNoZUtleSkgPT4ge1xuICAgICAgICBpZiAoY2FjaGVLZXkgPT09ICdoYXNPd25Qcm9wZXJ0eScpIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG93TGV2ZWxHZXRPbmUoY2FjaGVNZXRhLCBjYWNoZUtleSk7XG4gICAgfSxcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IChjYWNoZU1ldGEsIGNhY2hlS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc1Jlc3VsdCA9IGxvd0xldmVsSGFzKGNhY2hlTWV0YSwgY2FjaGVLZXkpO1xuICAgICAgICBjb25zdCBnZXRSZXN1bHQgPSBsb3dMZXZlbEdldE9uZShjYWNoZU1ldGEsIGNhY2hlS2V5KTtcbiAgICAgICAgaWYgKGhhc1Jlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogaGFzUmVzdWx0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXN1bHQsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9LFxuICAgIGhhczogbG93TGV2ZWxIYXMsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBzZXQ6IChjYWNoZU1ldGEsIGNhY2hlS2V5LCBpdGVtKSA9PiB7XG4gICAgICAgIGxvd0xldmVsU2V0KGNhY2hlTWV0YSwgY2FjaGVLZXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb3BlcnR5OiAoY2FjaGVNZXRhLCBjYWNoZUtleSkgPT4ge1xuICAgICAgICBsb3dMZXZlbFJlbW92ZShjYWNoZU1ldGEsIGNhY2hlS2V5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvd25LZXlzOiAoY2FjaGVNZXRhKSA9PiBPYmplY3Qua2V5cyhsb3dMZXZlbEdldEFsbChjYWNoZU1ldGEpKSxcbn07XG4vKipcbiAqIFNvIHRoYXQgd2UgY2FuIHJldHJpZXZlIHRoZSBjYWNoZU1ldGEgZm9yIGEgTGltaXRlZENhY2hlT2JqZWN0LCB3aXRob3V0IHBvbGx1dGluZyBpdHMgcHJvcGVydGllcywgZWFjaCBwcm94eVxuICogaXMgYXNzb2NpYXRlZCBiYWNrIHRvIGl0cyBpbnRlcm5hbCBjYWNoZU1ldGEgaGVyZS5cbiAqL1xuY29uc3QgY2FjaGVNZXRhc0ZvclByb3hpZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgTGltaXRlZENhY2hlT2JqZWN0ID0gKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjYWNoZU1ldGEgPSBsb3dMZXZlbEluaXQob3B0aW9ucyk7XG4gICAgY29uc3QgbGltaXRlZENhY2hlT2JqZWN0ID0gbmV3IFByb3h5KGNhY2hlTWV0YSwgcHJveHlIYW5kbGVyKTtcbiAgICBjYWNoZU1ldGFzRm9yUHJveGllcy5zZXQobGltaXRlZENhY2hlT2JqZWN0LCBjYWNoZU1ldGEpO1xuICAgIHJldHVybiBsaW1pdGVkQ2FjaGVPYmplY3Q7XG59O1xuY29uc3QgZ2V0Q2FjaGVNZXRhRnJvbU9iamVjdCA9IChpbnN0YW5jZSkgPT4ge1xuICAgIHJldHVybiBjYWNoZU1ldGFzRm9yUHJveGllcy5nZXQoaW5zdGFuY2UpO1xufTtcbmV4cG9ydCB7IExpbWl0ZWRDYWNoZU9iamVjdCwgZ2V0Q2FjaGVNZXRhRnJvbU9iamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGltaXRlZENhY2hlT2JqZWN0LmpzLm1hcCIsIi8vIFRvIGhlbHAgbWluaWZpY2F0aW9uXG5jb25zdCB7IGNyZWF0ZTogb2JqZWN0Q3JlYXRlLCBhc3NpZ246IG9iamVjdEFzc2lnbiwgcHJvdG90eXBlOiB7IGhhc093blByb3BlcnR5IH0sIH0gPSBPYmplY3Q7XG5jb25zdCBkYXRlTm93ID0gRGF0ZS5ub3c7XG5leHBvcnQgeyBvYmplY3RBc3NpZ24sIG9iamVjdENyZWF0ZSwgZGF0ZU5vdywgaGFzT3duUHJvcGVydHkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJ1aWx0SW5zLmpzLm1hcCIsImNvbnN0IENVUlJFTlRfTUVUQV9WRVJTSU9OID0gMjtcbmNvbnN0IE1BWElNVU1fQ0FDSEVfVElNRSA9IDM2NSAqIDg2NDAwICogMTAwMDtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIFB1YmxpY1xuICAgIG1heENhY2hlU2l6ZTogMTAwLFxuICAgIG1heENhY2hlVGltZTogODY0MDAgKiAxMDAwLFxuICAgIC8vIERldmVsb3BtZW50LW9ubHlcbiAgICB3YXJuSWZJdGVtUHVyZ2VkQmVmb3JlVGltZTogNTAwMCxcbiAgICAvLyBQcml2YXRlXG4gICAgb3BMaW1pdDogMjAwLFxuICAgIHNjYW5MaW1pdDogNTAsXG59O1xuZXhwb3J0IHsgQ1VSUkVOVF9NRVRBX1ZFUlNJT04sIE1BWElNVU1fQ0FDSEVfVElNRSwgZGVmYXVsdE9wdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRPcHRpb25zLmpzLm1hcCIsImltcG9ydCB7IGxvd0xldmVsR2V0T25lLCBsb3dMZXZlbEdldEFsbCwgbG93TGV2ZWxIYXMsIGxvd0xldmVsSW5pdCwgbG93TGV2ZWxEb01haW50ZW5hbmNlLCBsb3dMZXZlbFJlbW92ZSwgbG93TGV2ZWxSZXNldCwgbG93TGV2ZWxTZXQsIGxvd0xldmVsU2V0T3B0aW9ucywgfSBmcm9tICcuL2xvd0xldmVsRnVuY3Rpb25zLmpzJztcbmNvbnN0IGxpbWl0ZWRDYWNoZVV0aWwgPSB7XG4gICAgaW5pdDogbG93TGV2ZWxJbml0LFxuICAgIGdldDogbG93TGV2ZWxHZXRPbmUsXG4gICAgZ2V0QWxsOiBsb3dMZXZlbEdldEFsbCxcbiAgICBoYXM6IGxvd0xldmVsSGFzLFxuICAgIHNldDogbG93TGV2ZWxTZXQsXG4gICAgcmVtb3ZlOiBsb3dMZXZlbFJlbW92ZSxcbiAgICByZXNldDogbG93TGV2ZWxSZXNldCxcbiAgICBkb01haW50ZW5hbmNlOiBsb3dMZXZlbERvTWFpbnRlbmFuY2UsXG4gICAgc2V0T3B0aW9uczogbG93TGV2ZWxTZXRPcHRpb25zLFxufTtcbmV4cG9ydCB7IGxpbWl0ZWRDYWNoZVV0aWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbWl0ZWRDYWNoZVV0aWwuanMubWFwIiwiaW1wb3J0IHsgb2JqZWN0QXNzaWduLCBvYmplY3RDcmVhdGUsIGRhdGVOb3csIGhhc093blByb3BlcnR5IH0gZnJvbSAnLi9idWlsdElucy5qcyc7XG5pbXBvcnQgeyBDVVJSRU5UX01FVEFfVkVSU0lPTiwgTUFYSU1VTV9DQUNIRV9USU1FLCBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vZGVmYXVsdE9wdGlvbnMuanMnO1xuLyogSW5pdGlhbGl6YXRpb24gYW5kIG9wdGlvbnMgKi9cbmNvbnN0IHBvc2l0aXZlTnVtYmVyT3JaZXJvID0gKHZhbHVlKSA9PiBNYXRoLm1heCh2YWx1ZSwgMCkgfHwgMDtcbmNvbnN0IG5vcm1hbGl6ZU9wdGlvbnMgPSAoY2FjaGVNZXRhT3B0aW9ucykgPT4ge1xuICAgIG9iamVjdEFzc2lnbihjYWNoZU1ldGFPcHRpb25zLCB7XG4gICAgICAgIG1heENhY2hlU2l6ZTogcG9zaXRpdmVOdW1iZXJPclplcm8oY2FjaGVNZXRhT3B0aW9ucy5tYXhDYWNoZVNpemUpLFxuICAgICAgICBtYXhDYWNoZVRpbWU6IHBvc2l0aXZlTnVtYmVyT3JaZXJvKGNhY2hlTWV0YU9wdGlvbnMubWF4Q2FjaGVUaW1lKSxcbiAgICAgICAgb3BMaW1pdDogcG9zaXRpdmVOdW1iZXJPclplcm8oY2FjaGVNZXRhT3B0aW9ucy5vcExpbWl0KSxcbiAgICB9KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjYWNoZU1ldGFPcHRpb25zLndhcm5JZkl0ZW1QdXJnZWRCZWZvcmVUaW1lID0gcG9zaXRpdmVOdW1iZXJPclplcm8oY2FjaGVNZXRhT3B0aW9ucy53YXJuSWZJdGVtUHVyZ2VkQmVmb3JlVGltZSk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGFPcHRpb25zO1xufTtcbmNvbnN0IGlzQ2FjaGVNZXRhID0gKGNhY2hlTWV0YSkgPT4ge1xuICAgIHJldHVybiAhIWNhY2hlTWV0YSAmJiAhIWNhY2hlTWV0YS5saW1pdGVkQ2FjaGVNZXRhVmVyc2lvbjtcbn07XG5jb25zdCB1cGdyYWRlQ2FjaGVNZXRhID0gKGNhY2hlTWV0YSkgPT4ge1xuICAgIGlmICghaXNDYWNoZU1ldGEoY2FjaGVNZXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpbWl0ZWQtY2FjaGUgbWV0YWRhdGEgaXMgbWlzc2luZzogcGxlYXNlIGNoZWNrIHlvdXIgdXNhZ2UnKTtcbiAgICB9XG4gICAgaWYgKGNhY2hlTWV0YS5saW1pdGVkQ2FjaGVNZXRhVmVyc2lvbiAhPT0gQ1VSUkVOVF9NRVRBX1ZFUlNJT04pIHtcbiAgICAgICAgLy8gVmVyc2lvbiBpcyBvdXQgb2YgZGF0ZSEgKFRvZGF5IHRoZSBvbmx5IHByaW9yIHZlcnNpb24gaXMgMSlcbiAgICAgICAgLy8gVmVyc2lvbiAxOiBDYWNoZSBtZXRhIGNhbm5vdCBiZSBtaWdyYXRlZCBiZWNhdXNlIHRpbWVzdGFtcHMgYW5kIGtleXMgYXJlIGluY29tcGF0aWJsZVxuICAgICAgICBjb25zb2xlLndhcm4oJ0xpbWl0ZWQtY2FjaGUgbWV0YWRhdGEgaXMgZnJvbSBhbiBpbmNvbXBhdGlibGUgdmVyc2lvbiAoMSkuIEl0IG11c3QgYmUgcmVzZXQuJyk7XG4gICAgICAgIGNhY2hlTWV0YS5saW1pdGVkQ2FjaGVNZXRhVmVyc2lvbiA9IENVUlJFTlRfTUVUQV9WRVJTSU9OO1xuICAgICAgICBsb3dMZXZlbFJlc2V0KGNhY2hlTWV0YSk7XG4gICAgfVxufTtcbmNvbnN0IGxvd0xldmVsU2V0T3B0aW9ucyA9IChjYWNoZU1ldGEsIG9wdGlvbnMpID0+IHtcbiAgICB1cGdyYWRlQ2FjaGVNZXRhKGNhY2hlTWV0YSk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZU9wdGlvbnMob2JqZWN0QXNzaWduKGNhY2hlTWV0YS5vcHRpb25zLCBvcHRpb25zKSk7XG59O1xuY29uc3QgbG93TGV2ZWxJbml0ID0gKG9wdGlvbnNPckNhY2hlTWV0YSkgPT4ge1xuICAgIGlmIChpc0NhY2hlTWV0YShvcHRpb25zT3JDYWNoZU1ldGEpKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGVNZXRhID0gb3B0aW9uc09yQ2FjaGVNZXRhO1xuICAgICAgICB1cGdyYWRlQ2FjaGVNZXRhKGV4aXN0aW5nQ2FjaGVNZXRhKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ2FjaGVNZXRhO1xuICAgIH1cbiAgICAvLyBFbHNlOiBpdCdzIG9wdGlvbnNcbiAgICBjb25zdCBmdWxsT3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc09yQ2FjaGVNZXRhIH0pO1xuICAgIC8vIFRoZSBjYWNoZU1ldGEgaXMgY3JlYXRlZCBvbmNlLCBhbmQgcGVyc2lzdHMgcGVyIGluc3RhbmNlXG4gICAgY29uc3QgbmV3Q2FjaGVNZXRhID0gbG93TGV2ZWxSZXNldCh7XG4gICAgICAgIGxpbWl0ZWRDYWNoZU1ldGFWZXJzaW9uOiBDVVJSRU5UX01FVEFfVkVSU0lPTixcbiAgICAgICAgb3B0aW9uczogZnVsbE9wdGlvbnMsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0NhY2hlTWV0YTtcbn07XG4vKiBJbnRlcm5hbCBjYWNoZSBtYW5pcHVsYXRpb24gKi9cbmNvbnN0IF9nZXRFeHBpcmVUaW1lID0gKGNhY2hlTWV0YSwgY2FjaGVLZXkpID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnM6IHsgbWF4Q2FjaGVUaW1lIH0sIGtleUluZm86IHsgW2NhY2hlS2V5XToga2V5SW5mbyB9LCB9ID0gY2FjaGVNZXRhO1xuICAgIGlmICgha2V5SW5mbykge1xuICAgICAgICAvLyBBIG1pc3NpbmcgcmVjb3JkIGlzIGFsd2F5cyB0cmVhdGVkIGFzIGV4cGlyZWRcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXhhY3QgZXhwaXJlVGltZSB0aGVuIGhvbm9yIGl0LiBPdGhlcndpc2UgaXQnbGwgZGVwZW5kIG9uIHRoZSBjdXJyZW50IG1heENhY2hlVGltZS5cbiAgICBjb25zdCBbc2V0VGltZSwgZXhwaXJlVGltZV0gPSBrZXlJbmZvO1xuICAgIHJldHVybiBleHBpcmVUaW1lIHx8IHNldFRpbWUgKyAobWF4Q2FjaGVUaW1lIHx8IE1BWElNVU1fQ0FDSEVfVElNRSk7XG59O1xuY29uc3QgX2NhY2hlS2V5SGFzRXhwaXJlZCA9IChjYWNoZU1ldGEsIGNhY2hlS2V5LCBub3cpID0+IHtcbiAgICByZXR1cm4gX2dldEV4cGlyZVRpbWUoY2FjaGVNZXRhLCBjYWNoZUtleSkgPCBub3c7XG59O1xuY29uc3QgbG93TGV2ZWxEb01haW50ZW5hbmNlID0gKGNhY2hlTWV0YSkgPT4ge1xuICAgIHVwZ3JhZGVDYWNoZU1ldGEoY2FjaGVNZXRhKTtcbiAgICBjb25zdCB7IGNhY2hlLCBrZXlMaXN0LCBrZXlJbmZvIH0gPSBjYWNoZU1ldGE7XG4gICAgY29uc3Qgbm93ID0gZGF0ZU5vdygpO1xuICAgIC8vIFJlYnVpbGQgY2FjaGUgZnJvbSBrZXlMaXN0IG9ubHksIGNoZWNraW5nIHRpbWVzdGFtcHMgdG8gYXV0by1yZW1vdmUgZXhwaXJlZFxuICAgIGNvbnN0IFtuZXdDYWNoZSwgbmV3S2V5TGlzdCwgbmV3S2V5SW5mb10gPSBrZXlMaXN0LnJlZHVjZSgoYWNjLCBjYWNoZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBbYWNjQ2FjaGUsIGFjY0tleUxpc3QsIGFjY0tleUluZm9dID0gYWNjO1xuICAgICAgICBpZiAoIV9jYWNoZUtleUhhc0V4cGlyZWQoY2FjaGVNZXRhLCBjYWNoZUtleSwgbm93KSkge1xuICAgICAgICAgICAgYWNjQ2FjaGVbY2FjaGVLZXldID0gY2FjaGVbY2FjaGVLZXldO1xuICAgICAgICAgICAgYWNjS2V5TGlzdC5wdXNoKGNhY2hlS2V5KTtcbiAgICAgICAgICAgIGFjY0tleUluZm9bY2FjaGVLZXldID0ga2V5SW5mb1tjYWNoZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXG4gICAgICAgIHt9LFxuICAgICAgICBbXSxcbiAgICAgICAgb2JqZWN0Q3JlYXRlKG51bGwpLFxuICAgIF0pO1xuICAgIHJldHVybiBvYmplY3RBc3NpZ24oY2FjaGVNZXRhLCB7XG4gICAgICAgIGNhY2hlOiBuZXdDYWNoZSxcbiAgICAgICAga2V5TGlzdDogbmV3S2V5TGlzdCxcbiAgICAgICAga2V5SW5mbzogbmV3S2V5SW5mbyxcbiAgICAgICAgb3BzTGVmdDogY2FjaGVNZXRhLm9wdGlvbnMub3BMaW1pdCxcbiAgICB9KTtcbn07XG5jb25zdCBfcmVtb3ZlRnJvbUluZGV4ID0gKGNhY2hlTWV0YSwgc3RhcnRJbmRleCwgbm93KSA9PiB7XG4gICAgY29uc3QgeyBjYWNoZSwga2V5TGlzdCwga2V5SW5mbyB9ID0gY2FjaGVNZXRhO1xuICAgIC8vIEFsd2F5cyByZW1vdmUgdGhlIGl0ZW0gcmVxdWVzdGVkLCBhbmQgYWxzbyByZW1vdmUgYW55IG5laWdoYm9ycyB3aG8gaGF2ZSBleHBpcmVkXG4gICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgbGV0IG5leHRDYWNoZUtleSA9IGtleUxpc3Rbc3RhcnRJbmRleF07XG4gICAgY29uc3Qga2V5TGlzdExlbmd0aCA9IGtleUxpc3QubGVuZ3RoO1xuICAgIGRvIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSAnbmV4dCcgaXRlbVxuICAgICAgICBjYWNoZVtuZXh0Q2FjaGVLZXldID0ga2V5SW5mb1tuZXh0Q2FjaGVLZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBOb3cgYWR2YW5jZSBhbmQgZGVjaWRlIHdoZXRoZXIgdG8ga2VlcCBnb2luZ1xuICAgICAgICBuZXh0SW5kZXgrKztcbiAgICAgICAgbmV4dENhY2hlS2V5ID0ga2V5TGlzdFtuZXh0SW5kZXhdO1xuICAgIH0gd2hpbGUgKG5leHRJbmRleCA8IGtleUxpc3RMZW5ndGggJiYgX2NhY2hlS2V5SGFzRXhwaXJlZChjYWNoZU1ldGEsIG5leHRDYWNoZUtleSwgbm93KSk7XG4gICAgLy8gUmVtb3ZlIHRoZSBpbmRleCBmb3IgZXZlcnl0aGluZyBmcm9tIHRoZSBzdGFydEluZGV4IHVudGlsIHdlIHN0b3BwZWRcbiAgICBrZXlMaXN0LnNwbGljZShzdGFydEluZGV4LCBuZXh0SW5kZXggLSBzdGFydEluZGV4KTtcbn07XG5jb25zdCBfcmVtb3ZlSXRlbXNUb01ha2VSb29tID0gKGNhY2hlTWV0YSwgbm93KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zOiB7IHNjYW5MaW1pdCwgd2FybklmSXRlbVB1cmdlZEJlZm9yZVRpbWUgfSwgY2FjaGUsIGtleUxpc3QsIGtleUluZm8sIH0gPSBjYWNoZU1ldGE7XG4gICAgLy8gVGhlc2UgdHJhY2sgdGhlIHNvb25lc3QtdG8tZXhwaXJlIHRoaW5nIHdlJ3ZlIGZvdW5kLiBJdCBtYXkgbm90IGFjdHVhbGx5IGJlIFwib2xkZXN0XCIuXG4gICAgLy8gQnkgZGVmYXVsdCB3ZSdsbCByZW1vdmUgdGhlIGl0ZW0gYXQgdGhlIGhlYWQgb2YgdGhlIHF1ZXVlLCB1bmxlc3Mgd2UgZmluZCBzb21ldGhpbmcgYmV0dGVyLlxuICAgIGxldCBvbGRlc3RJdGVtSW5kZXggPSAwO1xuICAgIGxldCBvbGRlc3RFeHBpcmVUaW1lID0gX2dldEV4cGlyZVRpbWUoY2FjaGVNZXRhLCBrZXlMaXN0WzBdKTtcbiAgICBpZiAob2xkZXN0RXhwaXJlVGltZSA+IG5vdykge1xuICAgICAgICAvLyBUaGUgaGVhZCBvZiB0aGUgbGlzdCBoYXNuJ3QgeWV0IGV4cGlyZWQ6IHNjYW4gZm9yIGEgYmV0dGVyIGNhbmRpZGF0ZSB0byByZW1vdmVcbiAgICAgICAgbGV0IGluZGV4VG9DaGVjayA9IDA7XG4gICAgICAgIGNvbnN0IG1heEluZGV4VG9DaGVjayA9IE1hdGgubWluKGtleUxpc3QubGVuZ3RoLCBzY2FuTGltaXQpO1xuICAgICAgICB3aGlsZSAoaW5kZXhUb0NoZWNrIDwgbWF4SW5kZXhUb0NoZWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleUZvckluZGV4ID0ga2V5TGlzdFtpbmRleFRvQ2hlY2tdO1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlVGltZUZvckluZGV4ID0gX2dldEV4cGlyZVRpbWUoY2FjaGVNZXRhLCBjYWNoZUtleUZvckluZGV4KTtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgY29uc2lkZXIgaXQgaWYgaXQncyBlbGlnaWJsZSBmb3IgZXhwaXJhdGlvbjogb3RoZXJ3aXNlIGl0IGNhbid0IGJlIGEgYmV0dGVyIG9wdGlvblxuICAgICAgICAgICAgLy8gdGhhbiB0aGUgZGVmYXVsdCBoZWFkLW9mLXF1ZXVlXG4gICAgICAgICAgICBpZiAoZXhwaXJlVGltZUZvckluZGV4IDwgbm93KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYW4gZXhwaXJlZCBpdGVtISBUaGlzIHdpbnMgYXV0b21hdGljYWxseVxuICAgICAgICAgICAgICAgIG9sZGVzdEl0ZW1JbmRleCA9IGluZGV4VG9DaGVjaztcbiAgICAgICAgICAgICAgICBvbGRlc3RFeHBpcmVUaW1lID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBpcmVUaW1lRm9ySW5kZXggPCBvbGRlc3RFeHBpcmVUaW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIG5ldyBsZWFkZXJcbiAgICAgICAgICAgICAgICBvbGRlc3RJdGVtSW5kZXggPSBpbmRleFRvQ2hlY2s7XG4gICAgICAgICAgICAgICAgb2xkZXN0RXhwaXJlVGltZSA9IGV4cGlyZVRpbWVGb3JJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4VG9DaGVjayArPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdhcm4gaWYgdGhlICdvbGRlc3QnIGl0ZW0gaXMgbW9yZSByZWNlbnQgdGhhbiB3ZSdkIGxpa2U6IHRoaXMgbWVhbnMgaXQgY3ljbGVkIGludG8gYW5kIG91dCBvZlxuICAgIC8vIGNhY2hlIHRvbyBxdWlja2x5IGZvciB0aGUgY2FjaGUgdG8gYmUgdXNlZnVsLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHdhcm5JZkl0ZW1QdXJnZWRCZWZvcmVUaW1lICYmXG4gICAgICAgIG9sZGVzdEV4cGlyZVRpbWUgPiBub3cpIHtcbiAgICAgICAgY29uc3Qgb2xkZXN0SXRlbUtleSA9IGtleUxpc3Rbb2xkZXN0SXRlbUluZGV4XTtcbiAgICAgICAgY29uc3QgW29sZGVzdEl0ZW1TZXRUaW1lLCBvbGRlc3RJdGVtRXhwaXJlVGltZV0gPSBrZXlJbmZvW29sZGVzdEl0ZW1LZXldO1xuICAgICAgICBpZiAobm93IC0gb2xkZXN0SXRlbVNldFRpbWUgPCB3YXJuSWZJdGVtUHVyZ2VkQmVmb3JlVGltZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdQdXJnZWQgYW4gaXRlbSBmcm9tIGNhY2hlIHdoaWxlIGl0IHdhcyBzdGlsbCBmcmVzaDogeW91IG1heSB3YW50IHRvIGluY3JlYXNlIG1heENhY2hlU2l6ZScsIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogbm93LFxuICAgICAgICAgICAgICAgIGtleTogb2xkZXN0SXRlbUtleSxcbiAgICAgICAgICAgICAgICBpdGVtOiBjYWNoZVtvbGRlc3RJdGVtS2V5XSxcbiAgICAgICAgICAgICAgICBzZXRUaW1lOiBvbGRlc3RJdGVtU2V0VGltZSxcbiAgICAgICAgICAgICAgICBleHBpcmVUaW1lOiBvbGRlc3RJdGVtRXhwaXJlVGltZSxcbiAgICAgICAgICAgICAgICB0aW1lSW5DYWNoZTogbm93IC0gb2xkZXN0SXRlbVNldFRpbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIG9sZGVzdCBpdGVtIHdlIGZvdW5kLCBwbHVzIGFueSBleHBpcmVkIG5laWdoYm9yc1xuICAgIF9yZW1vdmVGcm9tSW5kZXgoY2FjaGVNZXRhLCBvbGRlc3RJdGVtSW5kZXgsIG5vdyk7XG59O1xuLyogQWNjZXNzb3JzICovXG5jb25zdCBsb3dMZXZlbEhhcyA9IChjYWNoZU1ldGEsIGNhY2hlS2V5KSA9PiB7XG4gICAgdXBncmFkZUNhY2hlTWV0YShjYWNoZU1ldGEpO1xuICAgIGNvbnN0IHsgY2FjaGUgfSA9IGNhY2hlTWV0YTtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgY2FjaGVLZXkpICYmIGNhY2hlW2NhY2hlS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghX2NhY2hlS2V5SGFzRXhwaXJlZChjYWNoZU1ldGEsIGNhY2hlS2V5LCBkYXRlTm93KCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGV4cGlyZWQsIGNsZWFyIHRoZSB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBzaG9ydC1jaXJjdWl0IGZ1dHVyZSBsb29rdXBzXG4gICAgICAgIGNhY2hlW2NhY2hlS2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGxvd0xldmVsR2V0T25lID0gKGNhY2hlTWV0YSwgY2FjaGVLZXkpID0+IHtcbiAgICB1cGdyYWRlQ2FjaGVNZXRhKGNhY2hlTWV0YSk7XG4gICAgaWYgKGxvd0xldmVsSGFzKGNhY2hlTWV0YSwgY2FjaGVLZXkpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZU1ldGEuY2FjaGVbY2FjaGVLZXldO1xuICAgIH1cbiAgICByZXR1cm47XG59O1xuY29uc3QgbG93TGV2ZWxHZXRBbGwgPSAoY2FjaGVNZXRhKSA9PiB7XG4gICAgdXBncmFkZUNhY2hlTWV0YShjYWNoZU1ldGEpO1xuICAgIC8vIFJlbW92ZSBhbGwgZXhwaXJlZCB2YWx1ZXMsIGFuZCByZXR1cm4gd2hhdGV2ZXIncyBsZWZ0XG4gICAgbG93TGV2ZWxEb01haW50ZW5hbmNlKGNhY2hlTWV0YSk7XG4gICAgLy8gUmV0eXBlIGJlY2F1c2UgdGhlcmUgd29uJ3QgYmUgYW55IGB1bmRlZmluZWRgIHZhbHVlcyBhZnRlciBkb01haW50ZW5hbmNlXG4gICAgcmV0dXJuIGNhY2hlTWV0YS5jYWNoZTtcbn07XG5jb25zdCBsb3dMZXZlbFNldCA9IChjYWNoZU1ldGEsIGNhY2hlS2V5LCBpdGVtKSA9PiB7XG4gICAgdXBncmFkZUNhY2hlTWV0YShjYWNoZU1ldGEpO1xuICAgIGNvbnN0IHsgb3B0aW9uczogeyBtYXhDYWNoZVNpemUgfSwga2V5TGlzdCwga2V5SW5mbywgfSA9IGNhY2hlTWV0YTtcbiAgICBjb25zdCBub3cgPSBkYXRlTm93KCk7XG4gICAgY29uc3QgaXNOZXcgPSAha2V5SW5mb1tjYWNoZUtleV07XG4gICAgaWYgKGNhY2hlTWV0YS5jYWNoZVtjYWNoZUtleV0gIT09IGl0ZW0pIHtcbiAgICAgICAgLy8gVGhlIGNhY2hlIGl0c2VsZiBpcyBpbW11dGFibGUgKGJ1dCB0aGUgcmVzdCBvZiBjYWNoZU1ldGEgaXMgbm90KVxuICAgICAgICBjYWNoZU1ldGEuY2FjaGUgPSB7XG4gICAgICAgICAgICAuLi5jYWNoZU1ldGEuY2FjaGUsXG4gICAgICAgICAgICBbY2FjaGVLZXldOiBpdGVtLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBXZSd2ZSBub3cgc2V0IG9yIHVwZGF0ZWQgaXQuIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBpdCdzIG5ldywgYnVtcCBpdHMgc2V0IHRpbWVcbiAgICAvLyBAVE9ETzogZXhwaXJlVGltZSBvdmVycmlkZVxuICAgIGtleUluZm9bY2FjaGVLZXldID0gW25vdywgMF07XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICAgIC8vIEl0J3MgYSBuZXcga2V5OiBncm93IHRoZSBjYWNoZSwgdGhlbiBzaHJpbmsgaXQgaWYgd2UgY2FuXG4gICAgICAgIGtleUxpc3QucHVzaChjYWNoZUtleSk7XG4gICAgICAgIGNhY2hlTWV0YS5vcHNMZWZ0LS07XG4gICAgICAgIGlmIChjYWNoZU1ldGEub3BzTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAvLyBUaW1lIGZvciBhbiBvaWwgY2hhbmdlXG4gICAgICAgICAgICBsb3dMZXZlbERvTWFpbnRlbmFuY2UoY2FjaGVNZXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4Q2FjaGVTaXplICYmIGNhY2hlTWV0YS5rZXlMaXN0Lmxlbmd0aCA+IG1heENhY2hlU2l6ZSkge1xuICAgICAgICAgICAgLy8gV2UncmUgc3RpbGwgb3ZlciB0aGUgbGltaXQ6IGRyb3AgYXQgbGVhc3Qgb25lIGl0ZW1cbiAgICAgICAgICAgIF9yZW1vdmVJdGVtc1RvTWFrZVJvb20oY2FjaGVNZXRhLCBub3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChfY2FjaGVLZXlIYXNFeHBpcmVkKGNhY2hlTWV0YSwga2V5TGlzdFswXSwgbm93KSkge1xuICAgICAgICAvLyBXaGlsZSB3ZSdyZSBoZXJlLCBpZiB3ZSBuZWVkIHRvIGV4cGlyZSB0aGUgaGVhZCBvZiB0aGUgcXVldWUgdGhlbiBkcm9wIGl0XG4gICAgICAgIF9yZW1vdmVGcm9tSW5kZXgoY2FjaGVNZXRhLCAwLCBub3cpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRhO1xufTtcbmNvbnN0IGxvd0xldmVsUmVtb3ZlID0gKGNhY2hlTWV0YSwgY2FjaGVLZXkpID0+IHtcbiAgICB1cGdyYWRlQ2FjaGVNZXRhKGNhY2hlTWV0YSk7XG4gICAgY29uc3QgeyBjYWNoZSwga2V5SW5mbyB9ID0gY2FjaGVNZXRhO1xuICAgIGlmIChrZXlJbmZvW2NhY2hlS2V5XSkge1xuICAgICAgICBpZiAoY2FjaGVbY2FjaGVLZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhY2hlTWV0YS5jYWNoZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5jYWNoZSxcbiAgICAgICAgICAgICAgICBbY2FjaGVLZXldOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGtleUluZm9bY2FjaGVLZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRhO1xufTtcbmNvbnN0IGxvd0xldmVsUmVzZXQgPSAoY2FjaGVNZXRhKSA9PiB7XG4gICAgdXBncmFkZUNhY2hlTWV0YShjYWNoZU1ldGEpO1xuICAgIHJldHVybiBvYmplY3RBc3NpZ24oY2FjaGVNZXRhLCB7XG4gICAgICAgIGNhY2hlOiB7fSxcbiAgICAgICAga2V5TGlzdDogW10sXG4gICAgICAgIGtleUluZm86IG9iamVjdENyZWF0ZShudWxsKSxcbiAgICAgICAgb3BzTGVmdDogY2FjaGVNZXRhLm9wdGlvbnMub3BMaW1pdCxcbiAgICB9KTtcbn07XG5leHBvcnQgeyBpc0NhY2hlTWV0YSwgdXBncmFkZUNhY2hlTWV0YSwgbG93TGV2ZWxJbml0LCBsb3dMZXZlbEdldE9uZSwgbG93TGV2ZWxHZXRBbGwsIGxvd0xldmVsSGFzLCBsb3dMZXZlbFNldCwgbG93TGV2ZWxSZW1vdmUsIGxvd0xldmVsUmVzZXQsIGxvd0xldmVsRG9NYWludGVuYW5jZSwgbG93TGV2ZWxTZXRPcHRpb25zLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG93TGV2ZWxGdW5jdGlvbnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb3JlL2RlZmF1bHRPcHRpb25zLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9MaW1pdGVkQ2FjaGUuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL0xpbWl0ZWRDYWNoZU9iamVjdC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvbGltaXRlZENhY2hlVXRpbC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvbG93TGV2ZWxGdW5jdGlvbnMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLyohIFBob3RvU3dpcGUgLSB2NC4xLjMgLSAyMDE5LTAxLTA4XG4qIGh0dHA6Ly9waG90b3N3aXBlLmNvbVxuKiBDb3B5cmlnaHQgKGMpIDIwMTkgRG1pdHJ5IFNlbWVub3Y7ICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHsgXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5QaG90b1N3aXBlID0gZmFjdG9yeSgpO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgUGhvdG9Td2lwZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBVaUNsYXNzLCBpdGVtcywgb3B0aW9ucyl7XG5cbi8qPj5mcmFtZXdvcmstYnJpZGdlKi9cbi8qKlxuICpcbiAqIFNldCBvZiBnZW5lcmljIGZ1bmN0aW9ucyB1c2VkIGJ5IGdhbGxlcnkuXG4gKiBcbiAqIFlvdSdyZSBmcmVlIHRvIG1vZGlmeSBhbnl0aGluZyBoZXJlIGFzIGxvbmcgYXMgZnVuY3Rpb25hbGl0eSBpcyBrZXB0LlxuICogXG4gKi9cbnZhciBmcmFtZXdvcmsgPSB7XG5cdGZlYXR1cmVzOiBudWxsLFxuXHRiaW5kOiBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB1bmJpbmQpIHtcblx0XHR2YXIgbWV0aG9kTmFtZSA9ICh1bmJpbmQgPyAncmVtb3ZlJyA6ICdhZGQnKSArICdFdmVudExpc3RlbmVyJztcblx0XHR0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlW2ldKSB7XG5cdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggdHlwZVtpXSwgbGlzdGVuZXIsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzQXJyYXk6IGZ1bmN0aW9uKG9iaikge1xuXHRcdHJldHVybiAob2JqIGluc3RhbmNlb2YgQXJyYXkpO1xuXHR9LFxuXHRjcmVhdGVFbDogZnVuY3Rpb24oY2xhc3NlcywgdGFnKSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcgfHwgJ2RpdicpO1xuXHRcdGlmKGNsYXNzZXMpIHtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fSxcblx0Z2V0U2Nyb2xsWTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0cmV0dXJuIHlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHlPZmZzZXQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcblx0XHRmcmFtZXdvcmsuYmluZCh0YXJnZXQsdHlwZSxsaXN0ZW5lcix0cnVlKTtcblx0fSxcblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNsYXNzTmFtZSArICcoXFxcXHN8JCknKTtcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJykucmVwbGFjZSgvXlxcc1xccyovLCAnJykucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7IFxuXHR9LFxuXHRhZGRDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRcdGlmKCAhZnJhbWV3b3JrLmhhc0NsYXNzKGVsLGNsYXNzTmFtZSkgKSB7XG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gKGVsLmNsYXNzTmFtZSA/ICcgJyA6ICcnKSArIGNsYXNzTmFtZTtcblx0XHR9XG5cdH0sXG5cdGhhc0NsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIGVsLmNsYXNzTmFtZSAmJiBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QoZWwuY2xhc3NOYW1lKTtcblx0fSxcblx0Z2V0Q2hpbGRCeUNsYXNzOiBmdW5jdGlvbihwYXJlbnRFbCwgY2hpbGRDbGFzc05hbWUpIHtcblx0XHR2YXIgbm9kZSA9IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUobm9kZSkge1xuXHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyhub2RlLCBjaGlsZENsYXNzTmFtZSkgKSB7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9LFxuXHRhcnJheVNlYXJjaDogZnVuY3Rpb24oYXJyYXksIHZhbHVlLCBrZXkpIHtcblx0XHR2YXIgaSA9IGFycmF5Lmxlbmd0aDtcblx0XHR3aGlsZShpLS0pIHtcblx0XHRcdGlmKGFycmF5W2ldW2tleV0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fSBcblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9LFxuXHRleHRlbmQ6IGZ1bmN0aW9uKG8xLCBvMiwgcHJldmVudE92ZXJ3cml0ZSkge1xuXHRcdGZvciAodmFyIHByb3AgaW4gbzIpIHtcblx0XHRcdGlmIChvMi5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRpZihwcmV2ZW50T3ZlcndyaXRlICYmIG8xLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bzFbcHJvcF0gPSBvMltwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGVhc2luZzoge1xuXHRcdHNpbmU6IHtcblx0XHRcdG91dDogZnVuY3Rpb24oaykge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIChNYXRoLlBJIC8gMikpO1xuXHRcdFx0fSxcblx0XHRcdGluT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtIChNYXRoLmNvcyhNYXRoLlBJICogaykgLSAxKSAvIDI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjdWJpYzoge1xuXHRcdFx0b3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qXG5cdFx0XHRlbGFzdGljOiB7XG5cdFx0XHRcdG91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRcdFx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtIDEwICogaykgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgMSApO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YmFjazoge1xuXHRcdFx0XHRvdXQ6IGZ1bmN0aW9uICggayApIHtcblx0XHRcdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Ki9cblx0fSxcblxuXHQvKipcblx0ICogXG5cdCAqIEByZXR1cm4ge29iamVjdH1cblx0ICogXG5cdCAqIHtcblx0ICogIHJhZiA6IHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICBjYWYgOiBjYW5jZWwgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICB0cmFuc2Zyb20gOiB0cmFuc2Zvcm0gcHJvcGVydHkga2V5ICh3aXRoIHZlbmRvciksIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZFxuXHQgKiAgb2xkSUUgOiBJRTggb3IgYmVsb3dcblx0ICogfVxuXHQgKiBcblx0ICovXG5cdGRldGVjdEZlYXR1cmVzOiBmdW5jdGlvbigpIHtcblx0XHRpZihmcmFtZXdvcmsuZmVhdHVyZXMpIHtcblx0XHRcdHJldHVybiBmcmFtZXdvcmsuZmVhdHVyZXM7XG5cdFx0fVxuXHRcdHZhciBoZWxwZXJFbCA9IGZyYW1ld29yay5jcmVhdGVFbCgpLFxuXHRcdFx0aGVscGVyU3R5bGUgPSBoZWxwZXJFbC5zdHlsZSxcblx0XHRcdHZlbmRvciA9ICcnLFxuXHRcdFx0ZmVhdHVyZXMgPSB7fTtcblxuXHRcdC8vIElFOCBhbmQgYmVsb3dcblx0XHRmZWF0dXJlcy5vbGRJRSA9IGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtcblxuXHRcdGZlYXR1cmVzLnRvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXG5cdFx0aWYod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0ZmVhdHVyZXMucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHRcdGZlYXR1cmVzLmNhZiA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcblx0XHR9XG5cblx0XHRmZWF0dXJlcy5wb2ludGVyRXZlbnQgPSAhISh3aW5kb3cuUG9pbnRlckV2ZW50KSB8fCBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcblxuXHRcdC8vIGZpeCBmYWxzZS1wb3NpdGl2ZSBkZXRlY3Rpb24gb2Ygb2xkIEFuZHJvaWQgaW4gbmV3IElFXG5cdFx0Ly8gKElFMTEgdWEgc3RyaW5nIGNvbnRhaW5zIFwiQW5kcm9pZCA0LjBcIilcblx0XHRcblx0XHRpZighZmVhdHVyZXMucG9pbnRlckV2ZW50KSB7IFxuXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdFx0XHQvLyBEZXRlY3QgaWYgZGV2aWNlIGlzIGlQaG9uZSBvciBpUG9kIGFuZCBpZiBpdCdzIG9sZGVyIHRoYW4gaU9TIDhcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0MjIzOTIwXG5cdFx0XHQvLyBcblx0XHRcdC8vIFRoaXMgZGV0ZWN0aW9uIGlzIG1hZGUgYmVjYXVzZSBvZiBidWdneSB0b3AvYm90dG9tIHRvb2xiYXJzXG5cdFx0XHQvLyB0aGF0IGRvbid0IHRyaWdnZXIgd2luZG93LnJlc2l6ZSBldmVudC5cblx0XHRcdC8vIEZvciBtb3JlIGluZm8gcmVmZXIgdG8gX2lzRml4ZWRQb3NpdGlvbiB2YXJpYWJsZSBpbiBjb3JlLmpzXG5cblx0XHRcdGlmICgvaVAoaG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSkge1xuXHRcdFx0XHR2YXIgdiA9IChuYXZpZ2F0b3IuYXBwVmVyc2lvbikubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcblx0XHRcdFx0aWYodiAmJiB2Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2ID0gcGFyc2VJbnQodlsxXSwgMTApO1xuXHRcdFx0XHRcdGlmKHYgPj0gMSAmJiB2IDwgOCApIHtcblx0XHRcdFx0XHRcdGZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXRlY3Qgb2xkIEFuZHJvaWQgKGJlZm9yZSBLaXRLYXQpXG5cdFx0XHQvLyBkdWUgdG8gYnVncyByZWxhdGVkIHRvIHBvc2l0aW9uOmZpeGVkXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxODQ1NzMvcGljay11cC10aGUtYW5kcm9pZC12ZXJzaW9uLWluLXRoZS1icm93c2VyLWJ5LWphdmFzY3JpcHRcblx0XHRcdFxuXHRcdFx0dmFyIG1hdGNoID0gdWEubWF0Y2goL0FuZHJvaWRcXHMoWzAtOVxcLl0qKS8pO1xuXHRcdFx0dmFyIGFuZHJvaWR2ZXJzaW9uID0gIG1hdGNoID8gbWF0Y2hbMV0gOiAwO1xuXHRcdFx0YW5kcm9pZHZlcnNpb24gPSBwYXJzZUZsb2F0KGFuZHJvaWR2ZXJzaW9uKTtcblx0XHRcdGlmKGFuZHJvaWR2ZXJzaW9uID49IDEgKSB7XG5cdFx0XHRcdGlmKGFuZHJvaWR2ZXJzaW9uIDwgNC40KSB7XG5cdFx0XHRcdFx0ZmVhdHVyZXMuaXNPbGRBbmRyb2lkID0gdHJ1ZTsgLy8gZm9yIGZpeGVkIHBvc2l0aW9uIGJ1ZyAmIHBlcmZvcm1hbmNlXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmVhdHVyZXMuYW5kcm9pZFZlcnNpb24gPSBhbmRyb2lkdmVyc2lvbjsgLy8gZm9yIHRvdWNoZW5kIGJ1Z1xuXHRcdFx0fVx0XG5cdFx0XHRmZWF0dXJlcy5pc01vYmlsZU9wZXJhID0gL29wZXJhIG1pbml8b3BlcmEgbW9iaS9pLnRlc3QodWEpO1xuXG5cdFx0XHQvLyBwLnMuIHllcywgeWVzLCBVQSBzbmlmZmluZyBpcyBiYWQsIHByb3Bvc2UgeW91ciBzb2x1dGlvbiBmb3IgYWJvdmUgYnVncy5cblx0XHR9XG5cdFx0XG5cdFx0dmFyIHN0eWxlQ2hlY2tzID0gWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnLCAnYW5pbWF0aW9uTmFtZSddLFxuXHRcdFx0dmVuZG9ycyA9IFsnJywgJ3dlYmtpdCcsJ01veicsJ21zJywnTyddLFxuXHRcdFx0c3R5bGVDaGVja0l0ZW0sXG5cdFx0XHRzdHlsZU5hbWU7XG5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2ZW5kb3IgPSB2ZW5kb3JzW2ldO1xuXG5cdFx0XHRmb3IodmFyIGEgPSAwOyBhIDwgMzsgYSsrKSB7XG5cdFx0XHRcdHN0eWxlQ2hlY2tJdGVtID0gc3R5bGVDaGVja3NbYV07XG5cblx0XHRcdFx0Ly8gdXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiBwcm9wZXJ0eSBuYW1lLCBpZiB2ZW5kb3IgaXMgcHJlc2VudFxuXHRcdFx0XHRzdHlsZU5hbWUgPSB2ZW5kb3IgKyAodmVuZG9yID8gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlQ2hlY2tJdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGVDaGVja0l0ZW0uc2xpY2UoMSkgOiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVDaGVja0l0ZW0pO1xuXHRcdFx0XG5cdFx0XHRcdGlmKCFmZWF0dXJlc1tzdHlsZUNoZWNrSXRlbV0gJiYgc3R5bGVOYW1lIGluIGhlbHBlclN0eWxlICkge1xuXHRcdFx0XHRcdGZlYXR1cmVzW3N0eWxlQ2hlY2tJdGVtXSA9IHN0eWxlTmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih2ZW5kb3IgJiYgIWZlYXR1cmVzLnJhZikge1xuXHRcdFx0XHR2ZW5kb3IgPSB2ZW5kb3IudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0ZmVhdHVyZXMucmFmID0gd2luZG93W3ZlbmRvcisnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0XHRcdGlmKGZlYXR1cmVzLnJhZikge1xuXHRcdFx0XHRcdGZlYXR1cmVzLmNhZiA9IHdpbmRvd1t2ZW5kb3IrJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3dbdmVuZG9yKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFxuXHRcdGlmKCFmZWF0dXJlcy5yYWYpIHtcblx0XHRcdHZhciBsYXN0VGltZSA9IDA7XG5cdFx0XHRmZWF0dXJlcy5yYWYgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0dmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG5cdFx0XHRcdHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBmbihjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCB0aW1lVG9DYWxsKTtcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH07XG5cdFx0XHRmZWF0dXJlcy5jYWYgPSBmdW5jdGlvbihpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBTVkcgc3VwcG9ydFxuXHRcdGZlYXR1cmVzLnN2ZyA9ICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmIFxuXHRcdFx0XHRcdFx0ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3Q7XG5cblx0XHRmcmFtZXdvcmsuZmVhdHVyZXMgPSBmZWF0dXJlcztcblxuXHRcdHJldHVybiBmZWF0dXJlcztcblx0fVxufTtcblxuZnJhbWV3b3JrLmRldGVjdEZlYXR1cmVzKCk7XG5cbi8vIE92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG9sZCB2ZXJzaW9ucyBvZiBJRVxuaWYoZnJhbWV3b3JrLmZlYXR1cmVzLm9sZElFKSB7XG5cblx0ZnJhbWV3b3JrLmJpbmQgPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB1bmJpbmQpIHtcblx0XHRcblx0XHR0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuXG5cdFx0dmFyIG1ldGhvZE5hbWUgPSAodW5iaW5kID8gJ2RldGFjaCcgOiAnYXR0YWNoJykgKyAnRXZlbnQnLFxuXHRcdFx0ZXZOYW1lLFxuXHRcdFx0X2hhbmRsZUV2ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIpO1xuXHRcdFx0fTtcblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRldk5hbWUgPSB0eXBlW2ldO1xuXHRcdFx0aWYoZXZOYW1lKSB7XG5cblx0XHRcdFx0aWYodHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0JyAmJiBsaXN0ZW5lci5oYW5kbGVFdmVudCkge1xuXHRcdFx0XHRcdGlmKCF1bmJpbmQpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdID0gX2hhbmRsZUV2O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZighbGlzdGVuZXJbJ29sZElFJyArIGV2TmFtZV0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggJ29uJyArIGV2TmFtZSwgbGlzdGVuZXJbJ29sZElFJyArIGV2TmFtZV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggJ29uJyArIGV2TmFtZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdFxufVxuXG4vKj4+ZnJhbWV3b3JrLWJyaWRnZSovXG5cbi8qPj5jb3JlKi9cbi8vZnVuY3Rpb24odGVtcGxhdGUsIFVpQ2xhc3MsIGl0ZW1zLCBvcHRpb25zKVxuXG52YXIgc2VsZiA9IHRoaXM7XG5cbi8qKlxuICogU3RhdGljIHZhcnMsIGRvbid0IGNoYW5nZSB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gKi9cbnZhciBET1VCTEVfVEFQX1JBRElVUyA9IDI1LCBcblx0TlVNX0hPTERFUlMgPSAzO1xuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xudmFyIF9vcHRpb25zID0ge1xuXHRhbGxvd1BhblRvTmV4dDp0cnVlLFxuXHRzcGFjaW5nOiAwLjEyLFxuXHRiZ09wYWNpdHk6IDEsXG5cdG1vdXNlVXNlZDogZmFsc2UsXG5cdGxvb3A6IHRydWUsXG5cdHBpbmNoVG9DbG9zZTogdHJ1ZSxcblx0Y2xvc2VPblNjcm9sbDogdHJ1ZSxcblx0Y2xvc2VPblZlcnRpY2FsRHJhZzogdHJ1ZSxcblx0dmVydGljYWxEcmFnUmFuZ2U6IDAuNzUsXG5cdGhpZGVBbmltYXRpb25EdXJhdGlvbjogMzMzLFxuXHRzaG93QW5pbWF0aW9uRHVyYXRpb246IDMzMyxcblx0c2hvd0hpZGVPcGFjaXR5OiBmYWxzZSxcblx0Zm9jdXM6IHRydWUsXG5cdGVzY0tleTogdHJ1ZSxcblx0YXJyb3dLZXlzOiB0cnVlLFxuXHRtYWluU2Nyb2xsRW5kRnJpY3Rpb246IDAuMzUsXG5cdHBhbkVuZEZyaWN0aW9uOiAwLjM1LFxuXHRpc0NsaWNrYWJsZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnQSc7XG4gICAgfSxcbiAgICBnZXREb3VibGVUYXBab29tOiBmdW5jdGlvbihpc01vdXNlQ2xpY2ssIGl0ZW0pIHtcbiAgICBcdGlmKGlzTW91c2VDbGljaykge1xuICAgIFx0XHRyZXR1cm4gMTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBpdGVtLmluaXRpYWxab29tTGV2ZWwgPCAwLjcgPyAxIDogMS4zMztcbiAgICBcdH1cbiAgICB9LFxuICAgIG1heFNwcmVhZFpvb206IDEuMzMsXG5cdG1vZGFsOiB0cnVlLFxuXG5cdC8vIG5vdCBmdWxseSBpbXBsZW1lbnRlZCB5ZXRcblx0c2NhbGVNb2RlOiAnZml0JyAvLyBUT0RPXG59O1xuZnJhbWV3b3JrLmV4dGVuZChfb3B0aW9ucywgb3B0aW9ucyk7XG5cblxuLyoqXG4gKiBQcml2YXRlIGhlbHBlciB2YXJpYWJsZXMgJiBmdW5jdGlvbnNcbiAqL1xuXG52YXIgX2dldEVtcHR5UG9pbnQgPSBmdW5jdGlvbigpIHsgXG5cdFx0cmV0dXJuIHt4OjAseTowfTsgXG5cdH07XG5cbnZhciBfaXNPcGVuLFxuXHRfaXNEZXN0cm95aW5nLFxuXHRfY2xvc2VkQnlTY3JvbGwsXG5cdF9jdXJyZW50SXRlbUluZGV4LFxuXHRfY29udGFpbmVyU3R5bGUsXG5cdF9jb250YWluZXJTaGlmdEluZGV4LFxuXHRfY3VyclBhbkRpc3QgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfc3RhcnRQYW5PZmZzZXQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfcGFuT2Zmc2V0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3VwTW92ZUV2ZW50cywgLy8gZHJhZyBtb3ZlLCBkcmFnIGVuZCAmIGRyYWcgY2FuY2VsIGV2ZW50cyBhcnJheVxuXHRfZG93bkV2ZW50cywgLy8gZHJhZyBzdGFydCBldmVudHMgYXJyYXlcblx0X2dsb2JhbEV2ZW50SGFuZGxlcnMsXG5cdF92aWV3cG9ydFNpemUgPSB7fSxcblx0X2N1cnJab29tTGV2ZWwsXG5cdF9zdGFydFpvb21MZXZlbCxcblx0X3RyYW5zbGF0ZVByZWZpeCxcblx0X3RyYW5zbGF0ZVN1Zml4LFxuXHRfdXBkYXRlU2l6ZUludGVydmFsLFxuXHRfaXRlbXNOZWVkVXBkYXRlLFxuXHRfY3VyclBvc2l0aW9uSW5kZXggPSAwLFxuXHRfb2Zmc2V0ID0ge30sXG5cdF9zbGlkZVNpemUgPSBfZ2V0RW1wdHlQb2ludCgpLCAvLyBzaXplIG9mIHNsaWRlIGFyZWEsIGluY2x1ZGluZyBzcGFjaW5nXG5cdF9pdGVtSG9sZGVycyxcblx0X3ByZXZJdGVtSW5kZXgsXG5cdF9pbmRleERpZmYgPSAwLCAvLyBkaWZmZXJlbmNlIG9mIGluZGV4ZXMgc2luY2UgbGFzdCBjb250ZW50IHVwZGF0ZVxuXHRfZHJhZ1N0YXJ0RXZlbnQsXG5cdF9kcmFnTW92ZUV2ZW50LFxuXHRfZHJhZ0VuZEV2ZW50LFxuXHRfZHJhZ0NhbmNlbEV2ZW50LFxuXHRfdHJhbnNmb3JtS2V5LFxuXHRfcG9pbnRlckV2ZW50RW5hYmxlZCxcblx0X2lzRml4ZWRQb3NpdGlvbiA9IHRydWUsXG5cdF9saWtlbHlUb3VjaERldmljZSxcblx0X21vZHVsZXMgPSBbXSxcblx0X3JlcXVlc3RBRixcblx0X2NhbmNlbEFGLFxuXHRfaW5pdGFsQ2xhc3NOYW1lLFxuXHRfaW5pdGFsV2luZG93U2Nyb2xsWSxcblx0X29sZElFLFxuXHRfY3VycmVudFdpbmRvd1Njcm9sbFksXG5cdF9mZWF0dXJlcyxcblx0X3dpbmRvd1Zpc2libGVTaXplID0ge30sXG5cdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gZmFsc2UsXG5cdF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQsXG5cblxuXHQvLyBSZWdpc3RlcnMgUGhvdG9TV2lwZSBtb2R1bGUgKEhpc3RvcnksIENvbnRyb2xsZXIgLi4uKVxuXHRfcmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbihuYW1lLCBtb2R1bGUpIHtcblx0XHRmcmFtZXdvcmsuZXh0ZW5kKHNlbGYsIG1vZHVsZS5wdWJsaWNNZXRob2RzKTtcblx0XHRfbW9kdWxlcy5wdXNoKG5hbWUpO1xuXHR9LFxuXG5cdF9nZXRMb29wZWRJZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIG51bVNsaWRlcyA9IF9nZXROdW1JdGVtcygpO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0XG5cdC8vIE1pY3JvIGJpbmQvdHJpZ2dlclxuXHRfbGlzdGVuZXJzID0ge30sXG5cdF9saXN0ZW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRcdGlmKCFfbGlzdGVuZXJzW25hbWVdKSB7XG5cdFx0XHRfbGlzdGVuZXJzW25hbWVdID0gW107XG5cdFx0fVxuXHRcdHJldHVybiBfbGlzdGVuZXJzW25hbWVdLnB1c2goZm4pO1xuXHR9LFxuXHRfc2hvdXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0dmFyIGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbbmFtZV07XG5cblx0XHRpZihsaXN0ZW5lcnMpIHtcblx0XHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHRcdGFyZ3Muc2hpZnQoKTtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsaXN0ZW5lcnNbaV0uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdF9nZXRDdXJyZW50VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fSxcblx0X2FwcGx5QmdPcGFjaXR5ID0gZnVuY3Rpb24ob3BhY2l0eSkge1xuXHRcdF9iZ09wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdHNlbGYuYmcuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHkgKiBfb3B0aW9ucy5iZ09wYWNpdHk7XG5cdH0sXG5cblx0X2FwcGx5Wm9vbVRyYW5zZm9ybSA9IGZ1bmN0aW9uKHN0eWxlT2JqLHgseSx6b29tLGl0ZW0pIHtcblx0XHRpZighX3JlbmRlck1heFJlc29sdXRpb24gfHwgKGl0ZW0gJiYgaXRlbSAhPT0gc2VsZi5jdXJySXRlbSkgKSB7XG5cdFx0XHR6b29tID0gem9vbSAvIChpdGVtID8gaXRlbS5maXRSYXRpbyA6IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pO1x0XG5cdFx0fVxuXHRcdFx0XG5cdFx0c3R5bGVPYmpbX3RyYW5zZm9ybUtleV0gPSBfdHJhbnNsYXRlUHJlZml4ICsgeCArICdweCwgJyArIHkgKyAncHgnICsgX3RyYW5zbGF0ZVN1Zml4ICsgJyBzY2FsZSgnICsgem9vbSArICcpJztcblx0fSxcblx0X2FwcGx5Q3VycmVudFpvb21QYW4gPSBmdW5jdGlvbiggYWxsb3dSZW5kZXJSZXNvbHV0aW9uICkge1xuXHRcdGlmKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXG5cdFx0XHRpZihhbGxvd1JlbmRlclJlc29sdXRpb24pIHtcblx0XHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0aWYoIV9yZW5kZXJNYXhSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKHNlbGYuY3Vyckl0ZW0sIGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYoX3JlbmRlck1heFJlc29sdXRpb24pIHtcblx0XHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoc2VsZi5jdXJySXRlbSk7XG5cdFx0XHRcdFx0XHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdF9hcHBseVpvb21UcmFuc2Zvcm0oX2N1cnJab29tRWxlbWVudFN0eWxlLCBfcGFuT2Zmc2V0LngsIF9wYW5PZmZzZXQueSwgX2N1cnJab29tTGV2ZWwpO1xuXHRcdH1cblx0fSxcblx0X2FwcGx5Wm9vbVBhblRvSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZihpdGVtLmNvbnRhaW5lcikge1xuXG5cdFx0XHRfYXBwbHlab29tVHJhbnNmb3JtKGl0ZW0uY29udGFpbmVyLnN0eWxlLCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbi54LCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbi55LCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwsXG5cdFx0XHRcdFx0XHRcdFx0aXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKHgsIGVsU3R5bGUpIHtcblx0XHRlbFN0eWxlW190cmFuc2Zvcm1LZXldID0gX3RyYW5zbGF0ZVByZWZpeCArIHggKyAncHgsIDBweCcgKyBfdHJhbnNsYXRlU3VmaXg7XG5cdH0sXG5cdF9tb3ZlTWFpblNjcm9sbCA9IGZ1bmN0aW9uKHgsIGRyYWdnaW5nKSB7XG5cblx0XHRpZighX29wdGlvbnMubG9vcCAmJiBkcmFnZ2luZykge1xuXHRcdFx0dmFyIG5ld1NsaWRlSW5kZXhPZmZzZXQgPSBfY3VycmVudEl0ZW1JbmRleCArIChfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXggLSB4KSAvIF9zbGlkZVNpemUueCxcblx0XHRcdFx0ZGVsdGEgPSBNYXRoLnJvdW5kKHggLSBfbWFpblNjcm9sbFBvcy54KTtcblxuXHRcdFx0aWYoIChuZXdTbGlkZUluZGV4T2Zmc2V0IDwgMCAmJiBkZWx0YSA+IDApIHx8IFxuXHRcdFx0XHQobmV3U2xpZGVJbmRleE9mZnNldCA+PSBfZ2V0TnVtSXRlbXMoKSAtIDEgJiYgZGVsdGEgPCAwKSApIHtcblx0XHRcdFx0eCA9IF9tYWluU2Nyb2xsUG9zLnggKyBkZWx0YSAqIF9vcHRpb25zLm1haW5TY3JvbGxFbmRGcmljdGlvbjtcblx0XHRcdH0gXG5cdFx0fVxuXHRcdFxuXHRcdF9tYWluU2Nyb2xsUG9zLnggPSB4O1xuXHRcdF9zZXRUcmFuc2xhdGVYKHgsIF9jb250YWluZXJTdHlsZSk7XG5cdH0sXG5cdF9jYWxjdWxhdGVQYW5PZmZzZXQgPSBmdW5jdGlvbihheGlzLCB6b29tTGV2ZWwpIHtcblx0XHR2YXIgbSA9IF9taWRab29tUG9pbnRbYXhpc10gLSBfb2Zmc2V0W2F4aXNdO1xuXHRcdHJldHVybiBfc3RhcnRQYW5PZmZzZXRbYXhpc10gKyBfY3VyclBhbkRpc3RbYXhpc10gKyBtIC0gbSAqICggem9vbUxldmVsIC8gX3N0YXJ0Wm9vbUxldmVsICk7XG5cdH0sXG5cdFxuXHRfZXF1YWxpemVQb2ludHMgPSBmdW5jdGlvbihwMSwgcDIpIHtcblx0XHRwMS54ID0gcDIueDtcblx0XHRwMS55ID0gcDIueTtcblx0XHRpZihwMi5pZCkge1xuXHRcdFx0cDEuaWQgPSBwMi5pZDtcblx0XHR9XG5cdH0sXG5cdF9yb3VuZFBvaW50ID0gZnVuY3Rpb24ocCkge1xuXHRcdHAueCA9IE1hdGgucm91bmQocC54KTtcblx0XHRwLnkgPSBNYXRoLnJvdW5kKHAueSk7XG5cdH0sXG5cblx0X21vdXNlTW92ZVRpbWVvdXQgPSBudWxsLFxuXHRfb25GaXJzdE1vdXNlTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFdhaXQgdW50aWwgbW91c2UgbW92ZSBldmVudCBpcyBmaXJlZCBhdCBsZWFzdCB0d2ljZSBkdXJpbmcgMTAwbXNcblx0XHQvLyBXZSBkbyB0aGlzLCBiZWNhdXNlIHNvbWUgbW9iaWxlIGJyb3dzZXJzIHRyaWdnZXIgaXQgb24gdG91Y2hzdGFydFxuXHRcdGlmKF9tb3VzZU1vdmVUaW1lb3V0ICkgeyBcblx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1oYXNfbW91c2UnKTtcblx0XHRcdF9vcHRpb25zLm1vdXNlVXNlZCA9IHRydWU7XG5cdFx0XHRfc2hvdXQoJ21vdXNlVXNlZCcpO1xuXHRcdH1cblx0XHRfbW91c2VNb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRfbW91c2VNb3ZlVGltZW91dCA9IG51bGw7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRfYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIHNlbGYpO1xuXG5cdFx0aWYoX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0Ly8gZG9uJ3QgYmluZCBjbGljayBldmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdHJhbnNmb3JtIChtb3N0bHkgSUU4KVxuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoc2VsZi5zY3JvbGxXcmFwLCAnY2xpY2snLCBzZWxmKTtcblx0XHR9XG5cdFx0XG5cblx0XHRpZighX29wdGlvbnMubW91c2VVc2VkKSB7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbkZpcnN0TW91c2VNb3ZlKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsuYmluZCh3aW5kb3csICdyZXNpemUgc2Nyb2xsIG9yaWVudGF0aW9uY2hhbmdlJywgc2VsZik7XG5cblx0XHRfc2hvdXQoJ2JpbmRFdmVudHMnKTtcblx0fSxcblxuXHRfdW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdyZXNpemUgc2Nyb2xsIG9yaWVudGF0aW9uY2hhbmdlJywgc2VsZik7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdzY3JvbGwnLCBfZ2xvYmFsRXZlbnRIYW5kbGVycy5zY3JvbGwpO1xuXHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywgc2VsZik7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbkZpcnN0TW91c2VNb3ZlKTtcblxuXHRcdGlmKF9mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdGZyYW1ld29yay51bmJpbmQoc2VsZi5zY3JvbGxXcmFwLCAnY2xpY2snLCBzZWxmKTtcblx0XHR9XG5cblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csIF91cE1vdmVFdmVudHMsIHNlbGYpO1xuXHRcdH1cblxuXHRcdGNsZWFyVGltZW91dChfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0KTtcblxuXHRcdF9zaG91dCgndW5iaW5kRXZlbnRzJyk7XG5cdH0sXG5cdFxuXHRfY2FsY3VsYXRlUGFuQm91bmRzID0gZnVuY3Rpb24oem9vbUxldmVsLCB1cGRhdGUpIHtcblx0XHR2YXIgYm91bmRzID0gX2NhbGN1bGF0ZUl0ZW1TaXplKCBzZWxmLmN1cnJJdGVtLCBfdmlld3BvcnRTaXplLCB6b29tTGV2ZWwgKTtcblx0XHRpZih1cGRhdGUpIHtcblx0XHRcdF9jdXJyUGFuQm91bmRzID0gYm91bmRzO1xuXHRcdH1cblx0XHRyZXR1cm4gYm91bmRzO1xuXHR9LFxuXHRcblx0X2dldE1pblpvb21MZXZlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZighaXRlbSkge1xuXHRcdFx0aXRlbSA9IHNlbGYuY3Vyckl0ZW07XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdH0sXG5cdF9nZXRNYXhab29tTGV2ZWwgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoIWl0ZW0pIHtcblx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbS53ID4gMCA/IF9vcHRpb25zLm1heFNwcmVhZFpvb20gOiAxO1xuXHR9LFxuXG5cdC8vIFJldHVybiB0cnVlIGlmIG9mZnNldCBpcyBvdXQgb2YgdGhlIGJvdW5kc1xuXHRfbW9kaWZ5RGVzdFBhbk9mZnNldCA9IGZ1bmN0aW9uKGF4aXMsIGRlc3RQYW5Cb3VuZHMsIGRlc3RQYW5PZmZzZXQsIGRlc3Rab29tTGV2ZWwpIHtcblx0XHRpZihkZXN0Wm9vbUxldmVsID09PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbltheGlzXTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gX2NhbGN1bGF0ZVBhbk9mZnNldChheGlzLCBkZXN0Wm9vbUxldmVsKTsgXG5cblx0XHRcdGlmKGRlc3RQYW5PZmZzZXRbYXhpc10gPiBkZXN0UGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gZGVzdFBhbkJvdW5kcy5taW5bYXhpc107XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmKGRlc3RQYW5PZmZzZXRbYXhpc10gPCBkZXN0UGFuQm91bmRzLm1heFtheGlzXSApIHtcblx0XHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IGRlc3RQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9zZXR1cFRyYW5zZm9ybXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF90cmFuc2Zvcm1LZXkpIHtcblx0XHRcdC8vIHNldHVwIDNkIHRyYW5zZm9ybXNcblx0XHRcdHZhciBhbGxvdzNkVHJhbnNmb3JtID0gX2ZlYXR1cmVzLnBlcnNwZWN0aXZlICYmICFfbGlrZWx5VG91Y2hEZXZpY2U7XG5cdFx0XHRfdHJhbnNsYXRlUHJlZml4ID0gJ3RyYW5zbGF0ZScgKyAoYWxsb3czZFRyYW5zZm9ybSA/ICczZCgnIDogJygnKTtcblx0XHRcdF90cmFuc2xhdGVTdWZpeCA9IF9mZWF0dXJlcy5wZXJzcGVjdGl2ZSA/ICcsIDBweCknIDogJyknO1x0XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT3ZlcnJpZGUgem9vbS9wYW4vbW92ZSBmdW5jdGlvbnMgaW4gY2FzZSBvbGQgYnJvd3NlciBpcyB1c2VkIChtb3N0IGxpa2VseSBJRSlcblx0XHQvLyAoc28gdGhleSB1c2UgbGVmdC90b3Avd2lkdGgvaGVpZ2h0LCBpbnN0ZWFkIG9mIENTUyB0cmFuc2Zvcm0pXG5cdFxuXHRcdF90cmFuc2Zvcm1LZXkgPSAnbGVmdCc7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0taWUnKTtcblxuXHRcdF9zZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24oeCwgZWxTdHlsZSkge1xuXHRcdFx0ZWxTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0fTtcblx0XHRfYXBwbHlab29tUGFuVG9JdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgem9vbVJhdGlvID0gaXRlbS5maXRSYXRpbyA+IDEgPyAxIDogaXRlbS5maXRSYXRpbyxcblx0XHRcdFx0cyA9IGl0ZW0uY29udGFpbmVyLnN0eWxlLFxuXHRcdFx0XHR3ID0gem9vbVJhdGlvICogaXRlbS53LFxuXHRcdFx0XHRoID0gem9vbVJhdGlvICogaXRlbS5oO1xuXG5cdFx0XHRzLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRzLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFx0cy5sZWZ0ID0gaXRlbS5pbml0aWFsUG9zaXRpb24ueCArICdweCc7XG5cdFx0XHRzLnRvcCA9IGl0ZW0uaW5pdGlhbFBvc2l0aW9uLnkgKyAncHgnO1xuXG5cdFx0fTtcblx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX2N1cnJab29tRWxlbWVudFN0eWxlKSB7XG5cblx0XHRcdFx0dmFyIHMgPSBfY3Vyclpvb21FbGVtZW50U3R5bGUsXG5cdFx0XHRcdFx0aXRlbSA9IHNlbGYuY3Vyckl0ZW0sXG5cdFx0XHRcdFx0em9vbVJhdGlvID0gaXRlbS5maXRSYXRpbyA+IDEgPyAxIDogaXRlbS5maXRSYXRpbyxcblx0XHRcdFx0XHR3ID0gem9vbVJhdGlvICogaXRlbS53LFxuXHRcdFx0XHRcdGggPSB6b29tUmF0aW8gKiBpdGVtLmg7XG5cblx0XHRcdFx0cy53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0XHRzLmhlaWdodCA9IGggKyAncHgnO1xuXG5cblx0XHRcdFx0cy5sZWZ0ID0gX3Bhbk9mZnNldC54ICsgJ3B4Jztcblx0XHRcdFx0cy50b3AgPSBfcGFuT2Zmc2V0LnkgKyAncHgnO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fTtcblx0fSxcblxuXHRfb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBrZXlkb3duQWN0aW9uID0gJyc7XG5cdFx0aWYoX29wdGlvbnMuZXNjS2V5ICYmIGUua2V5Q29kZSA9PT0gMjcpIHsgXG5cdFx0XHRrZXlkb3duQWN0aW9uID0gJ2Nsb3NlJztcblx0XHR9IGVsc2UgaWYoX29wdGlvbnMuYXJyb3dLZXlzKSB7XG5cdFx0XHRpZihlLmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRcdGtleWRvd25BY3Rpb24gPSAncHJldic7XG5cdFx0XHR9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAzOSkgeyBcblx0XHRcdFx0a2V5ZG93bkFjdGlvbiA9ICduZXh0Jztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihrZXlkb3duQWN0aW9uKSB7XG5cdFx0XHQvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzcGVjaWFsIGtleSBwcmVzc2VkIHRvIHByZXZlbnQgZnJvbSBvdmVycmlkaW5nIGRlZmF1bHQgYnJvd3NlciBhY3Rpb25zXG5cdFx0XHQvLyBlLmcuIGluIENocm9tZSBvbiBNYWMgY21kK2Fycm93LWxlZnQgcmV0dXJucyB0byBwcmV2aW91cyBwYWdlXG5cdFx0XHRpZiggIWUuY3RybEtleSAmJiAhZS5hbHRLZXkgJiYgIWUuc2hpZnRLZXkgJiYgIWUubWV0YUtleSApIHtcblx0XHRcdFx0aWYoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0XHRcdH0gXG5cdFx0XHRcdHNlbGZba2V5ZG93bkFjdGlvbl0oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0X29uR2xvYmFsQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBkb24ndCBhbGxvdyBjbGljayBldmVudCB0byBwYXNzIHRocm91Z2ggd2hlbiB0cmlnZ2VyaW5nIGFmdGVyIGRyYWcgb3Igc29tZSBvdGhlciBnZXN0dXJlXG5cdFx0aWYoX21vdmVkIHx8IF96b29tU3RhcnRlZCB8fCBfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfdmVydGljYWxEcmFnSW5pdGlhdGVkKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblxuXHRfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuc2V0U2Nyb2xsT2Zmc2V0KDAsIGZyYW1ld29yay5nZXRTY3JvbGxZKCkpO1x0XHRcblx0fTtcblx0XG5cblxuXHRcblxuXG5cbi8vIE1pY3JvIGFuaW1hdGlvbiBlbmdpbmVcbnZhciBfYW5pbWF0aW9ucyA9IHt9LFxuXHRfbnVtQW5pbWF0aW9ucyA9IDAsXG5cdF9zdG9wQW5pbWF0aW9uID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdGlmKF9hbmltYXRpb25zW25hbWVdKSB7XG5cdFx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXS5yYWYpIHtcblx0XHRcdFx0X2NhbmNlbEFGKCBfYW5pbWF0aW9uc1tuYW1lXS5yYWYgKTtcblx0XHRcdH1cblx0XHRcdF9udW1BbmltYXRpb25zLS07XG5cdFx0XHRkZWxldGUgX2FuaW1hdGlvbnNbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0X3N0b3BBbmltYXRpb24obmFtZSk7XG5cdFx0fVxuXHRcdGlmKCFfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0X251bUFuaW1hdGlvbnMrKztcblx0XHRcdF9hbmltYXRpb25zW25hbWVdID0ge307XG5cdFx0fVxuXHR9LFxuXHRfc3RvcEFsbEFuaW1hdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBwcm9wIGluIF9hbmltYXRpb25zKSB7XG5cblx0XHRcdGlmKCBfYW5pbWF0aW9ucy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuXHRcdFx0XHRfc3RvcEFuaW1hdGlvbihwcm9wKTtcblx0XHRcdH0gXG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdF9hbmltYXRlUHJvcCA9IGZ1bmN0aW9uKG5hbWUsIGIsIGVuZFByb3AsIGQsIGVhc2luZ0ZuLCBvblVwZGF0ZSwgb25Db21wbGV0ZSkge1xuXHRcdHZhciBzdGFydEFuaW1UaW1lID0gX2dldEN1cnJlbnRUaW1lKCksIHQ7XG5cdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24obmFtZSk7XG5cblx0XHR2YXIgYW5pbWxvb3AgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCBfYW5pbWF0aW9uc1tuYW1lXSApIHtcblx0XHRcdFx0XG5cdFx0XHRcdHQgPSBfZ2V0Q3VycmVudFRpbWUoKSAtIHN0YXJ0QW5pbVRpbWU7IC8vIHRpbWUgZGlmZlxuXHRcdFx0XHQvL2IgLSBiZWdpbm5pbmcgKHN0YXJ0IHByb3ApXG5cdFx0XHRcdC8vZCAtIGFuaW0gZHVyYXRpb25cblxuXHRcdFx0XHRpZiAoIHQgPj0gZCApIHtcblx0XHRcdFx0XHRfc3RvcEFuaW1hdGlvbihuYW1lKTtcblx0XHRcdFx0XHRvblVwZGF0ZShlbmRQcm9wKTtcblx0XHRcdFx0XHRpZihvbkNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRvblVwZGF0ZSggKGVuZFByb3AgLSBiKSAqIGVhc2luZ0ZuKHQvZCkgKyBiICk7XG5cblx0XHRcdFx0X2FuaW1hdGlvbnNbbmFtZV0ucmFmID0gX3JlcXVlc3RBRihhbmltbG9vcCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRhbmltbG9vcCgpO1xuXHR9O1xuXHRcblxuXG52YXIgcHVibGljTWV0aG9kcyA9IHtcblxuXHQvLyBtYWtlIGEgZmV3IGxvY2FsIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zIHB1YmxpY1xuXHRzaG91dDogX3Nob3V0LFxuXHRsaXN0ZW46IF9saXN0ZW4sXG5cdHZpZXdwb3J0U2l6ZTogX3ZpZXdwb3J0U2l6ZSxcblx0b3B0aW9uczogX29wdGlvbnMsXG5cblx0aXNNYWluU2Nyb2xsQW5pbWF0aW5nOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX21haW5TY3JvbGxBbmltYXRpbmc7XG5cdH0sXG5cdGdldFpvb21MZXZlbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jdXJyWm9vbUxldmVsO1xuXHR9LFxuXHRnZXRDdXJyZW50SW5kZXg6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY3VycmVudEl0ZW1JbmRleDtcblx0fSxcblx0aXNEcmFnZ2luZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9pc0RyYWdnaW5nO1xuXHR9LFx0XG5cdGlzWm9vbWluZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9pc1pvb21pbmc7XG5cdH0sXG5cdHNldFNjcm9sbE9mZnNldDogZnVuY3Rpb24oeCx5KSB7XG5cdFx0X29mZnNldC54ID0geDtcblx0XHRfY3VycmVudFdpbmRvd1Njcm9sbFkgPSBfb2Zmc2V0LnkgPSB5O1xuXHRcdF9zaG91dCgndXBkYXRlU2Nyb2xsT2Zmc2V0JywgX29mZnNldCk7XG5cdH0sXG5cdGFwcGx5Wm9vbVBhbjogZnVuY3Rpb24oem9vbUxldmVsLHBhblgscGFuWSxhbGxvd1JlbmRlclJlc29sdXRpb24pIHtcblx0XHRfcGFuT2Zmc2V0LnggPSBwYW5YO1xuXHRcdF9wYW5PZmZzZXQueSA9IHBhblk7XG5cdFx0X2N1cnJab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oIGFsbG93UmVuZGVyUmVzb2x1dGlvbiApO1xuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX2lzT3BlbiB8fCBfaXNEZXN0cm95aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGk7XG5cblx0XHRzZWxmLmZyYW1ld29yayA9IGZyYW1ld29yazsgLy8gYmFzaWMgZnVuY3Rpb25hbGl0eVxuXHRcdHNlbGYudGVtcGxhdGUgPSB0ZW1wbGF0ZTsgLy8gcm9vdCBET00gZWxlbWVudCBvZiBQaG90b1N3aXBlXG5cdFx0c2VsZi5iZyA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3ModGVtcGxhdGUsICdwc3dwX19iZycpO1xuXG5cdFx0X2luaXRhbENsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcblx0XHRfaXNPcGVuID0gdHJ1ZTtcblx0XHRcdFx0XG5cdFx0X2ZlYXR1cmVzID0gZnJhbWV3b3JrLmRldGVjdEZlYXR1cmVzKCk7XG5cdFx0X3JlcXVlc3RBRiA9IF9mZWF0dXJlcy5yYWY7XG5cdFx0X2NhbmNlbEFGID0gX2ZlYXR1cmVzLmNhZjtcblx0XHRfdHJhbnNmb3JtS2V5ID0gX2ZlYXR1cmVzLnRyYW5zZm9ybTtcblx0XHRfb2xkSUUgPSBfZmVhdHVyZXMub2xkSUU7XG5cdFx0XG5cdFx0c2VsZi5zY3JvbGxXcmFwID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3BfX3Njcm9sbC13cmFwJyk7XG5cdFx0c2VsZi5jb250YWluZXIgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHNlbGYuc2Nyb2xsV3JhcCwgJ3Bzd3BfX2NvbnRhaW5lcicpO1xuXG5cdFx0X2NvbnRhaW5lclN0eWxlID0gc2VsZi5jb250YWluZXIuc3R5bGU7IC8vIGZvciBmYXN0IGFjY2Vzc1xuXG5cdFx0Ly8gT2JqZWN0cyB0aGF0IGhvbGQgc2xpZGVzICh0aGVyZSBhcmUgb25seSAzIGluIERPTSlcblx0XHRzZWxmLml0ZW1Ib2xkZXJzID0gX2l0ZW1Ib2xkZXJzID0gW1xuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzBdICwgd3JhcDowLCBpbmRleDogLTF9LFxuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzFdICwgd3JhcDowLCBpbmRleDogLTF9LFxuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzJdICwgd3JhcDowLCBpbmRleDogLTF9XG5cdFx0XTtcblxuXHRcdC8vIGhpZGUgbmVhcmJ5IGl0ZW0gaG9sZGVycyB1bnRpbCBpbml0aWFsIHpvb20gYW5pbWF0aW9uIGZpbmlzaGVzICh0byBhdm9pZCBleHRyYSBQYWludHMpXG5cdFx0X2l0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSBfaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdF9zZXR1cFRyYW5zZm9ybXMoKTtcblxuXHRcdC8vIFNldHVwIGdsb2JhbCBldmVudHNcblx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycyA9IHtcblx0XHRcdHJlc2l6ZTogc2VsZi51cGRhdGVTaXplLFxuXG5cdFx0XHQvLyBGaXhlczogaU9TIDEwLjMgcmVzaXplIGV2ZW50XG5cdFx0XHQvLyBkb2VzIG5vdCB1cGRhdGUgc2Nyb2xsV3JhcC5jbGllbnRXaWR0aCBpbnN0YW50bHkgYWZ0ZXIgcmVzaXplXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9QaG90b1N3aXBlL2lzc3Vlcy8xMzE1XG5cdFx0XHRvcmllbnRhdGlvbmNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0KTtcblx0XHRcdFx0X29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoX3ZpZXdwb3J0U2l6ZS54ICE9PSBzZWxmLnNjcm9sbFdyYXAuY2xpZW50V2lkdGgpIHtcblx0XHRcdFx0XHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0sXG5cdFx0XHRzY3JvbGw6IF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0LFxuXHRcdFx0a2V5ZG93bjogX29uS2V5RG93bixcblx0XHRcdGNsaWNrOiBfb25HbG9iYWxDbGlja1xuXHRcdH07XG5cblx0XHQvLyBkaXNhYmxlIHNob3cvaGlkZSBlZmZlY3RzIG9uIG9sZCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgQ1NTIGFuaW1hdGlvbnMgb3IgdHJhbnNmb3JtcywgXG5cdFx0Ly8gb2xkIElPUywgQW5kcm9pZCBhbmQgT3BlcmEgbW9iaWxlLiBCbGFja2JlcnJ5IHNlZW1zIHRvIHdvcmsgZmluZSwgZXZlbiBvbGRlciBtb2RlbHMuXG5cdFx0dmFyIG9sZFBob25lID0gX2ZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgfHwgX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCB8fCBfZmVhdHVyZXMuaXNNb2JpbGVPcGVyYTtcblx0XHRpZighX2ZlYXR1cmVzLmFuaW1hdGlvbk5hbWUgfHwgIV9mZWF0dXJlcy50cmFuc2Zvcm0gfHwgb2xkUGhvbmUpIHtcblx0XHRcdF9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbiA9IF9vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gaW5pdCBtb2R1bGVzXG5cdFx0Zm9yKGkgPSAwOyBpIDwgX21vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNlbGZbJ2luaXQnICsgX21vZHVsZXNbaV1dKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGluaXRcblx0XHRpZihVaUNsYXNzKSB7XG5cdFx0XHR2YXIgdWkgPSBzZWxmLnVpID0gbmV3IFVpQ2xhc3Moc2VsZiwgZnJhbWV3b3JrKTtcblx0XHRcdHVpLmluaXQoKTtcblx0XHR9XG5cblx0XHRfc2hvdXQoJ2ZpcnN0VXBkYXRlJyk7XG5cdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleCB8fCBfb3B0aW9ucy5pbmRleCB8fCAwO1xuXHRcdC8vIHZhbGlkYXRlIGluZGV4XG5cdFx0aWYoIGlzTmFOKF9jdXJyZW50SXRlbUluZGV4KSB8fCBfY3VycmVudEl0ZW1JbmRleCA8IDAgfHwgX2N1cnJlbnRJdGVtSW5kZXggPj0gX2dldE51bUl0ZW1zKCkgKSB7XG5cdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IDA7XG5cdFx0fVxuXHRcdHNlbGYuY3Vyckl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXG5cdFx0XG5cdFx0aWYoX2ZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgfHwgX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCkge1xuXHRcdFx0X2lzRml4ZWRQb3NpdGlvbiA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0aWYoX29wdGlvbnMubW9kYWwpIHtcblx0XHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uKSB7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUudG9wID0gZnJhbWV3b3JrLmdldFNjcm9sbFkoKSArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX2N1cnJlbnRXaW5kb3dTY3JvbGxZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9zaG91dCgnaW5pdGlhbExheW91dCcpO1xuXHRcdFx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZID0gX2luaXRhbFdpbmRvd1Njcm9sbFkgPSBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpO1xuXHRcdH1cblx0XHRcblx0XHQvLyBhZGQgY2xhc3NlcyB0byByb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZVxuXHRcdHZhciByb290Q2xhc3NlcyA9ICdwc3dwLS1vcGVuICc7XG5cdFx0aWYoX29wdGlvbnMubWFpbkNsYXNzKSB7XG5cdFx0XHRyb290Q2xhc3NlcyArPSBfb3B0aW9ucy5tYWluQ2xhc3MgKyAnICc7XG5cdFx0fVxuXHRcdGlmKF9vcHRpb25zLnNob3dIaWRlT3BhY2l0eSkge1xuXHRcdFx0cm9vdENsYXNzZXMgKz0gJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eSAnO1xuXHRcdH1cblx0XHRyb290Q2xhc3NlcyArPSBfbGlrZWx5VG91Y2hEZXZpY2UgPyAncHN3cC0tdG91Y2gnIDogJ3Bzd3AtLW5vdG91Y2gnO1xuXHRcdHJvb3RDbGFzc2VzICs9IF9mZWF0dXJlcy5hbmltYXRpb25OYW1lID8gJyBwc3dwLS1jc3NfYW5pbWF0aW9uJyA6ICcnO1xuXHRcdHJvb3RDbGFzc2VzICs9IF9mZWF0dXJlcy5zdmcgPyAnIHBzd3AtLXN2ZycgOiAnJztcblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsIHJvb3RDbGFzc2VzKTtcblxuXHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXG5cdFx0Ly8gaW5pdGlhbCB1cGRhdGVcblx0XHRfY29udGFpbmVyU2hpZnRJbmRleCA9IC0xO1xuXHRcdF9pbmRleERpZmYgPSBudWxsO1xuXHRcdGZvcihpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdF9zZXRUcmFuc2xhdGVYKCAoaStfY29udGFpbmVyU2hpZnRJbmRleCkgKiBfc2xpZGVTaXplLngsIF9pdGVtSG9sZGVyc1tpXS5lbC5zdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYoIV9vbGRJRSkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoc2VsZi5zY3JvbGxXcmFwLCBfZG93bkV2ZW50cywgc2VsZik7IC8vIG5vIGRyYWdnaW5nIGZvciBvbGQgSUVcblx0XHR9XHRcblxuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW5FbmQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMF0sIF9jdXJyZW50SXRlbUluZGV4LTEpO1xuXHRcdFx0c2VsZi5zZXRDb250ZW50KF9pdGVtSG9sZGVyc1syXSwgX2N1cnJlbnRJdGVtSW5kZXgrMSk7XG5cblx0XHRcdF9pdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gX2l0ZW1Ib2xkZXJzWzJdLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRpZihfb3B0aW9ucy5mb2N1cykge1xuXHRcdFx0XHQvLyBmb2N1cyBjYXVzZXMgbGF5b3V0LCBcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGxhZyBkdXJpbmcgdGhlIGFuaW1hdGlvbiwgXG5cdFx0XHRcdC8vIHRoYXQncyB3aHkgd2UgZGVsYXkgaXQgdW50aWxsIHRoZSBpbml0aWFsIHpvb20gdHJhbnNpdGlvbiBlbmRzXG5cdFx0XHRcdHRlbXBsYXRlLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0XHQgXG5cblx0XHRcdF9iaW5kRXZlbnRzKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBzZXQgY29udGVudCBmb3IgY2VudGVyIHNsaWRlIChmaXJzdCB0aW1lKVxuXHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMV0sIF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHRcblx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cblx0XHRfc2hvdXQoJ2FmdGVySW5pdCcpO1xuXG5cdFx0aWYoIV9pc0ZpeGVkUG9zaXRpb24pIHtcblxuXHRcdFx0Ly8gT24gYWxsIHZlcnNpb25zIG9mIGlPUyBsb3dlciB0aGFuIDguMCwgd2UgY2hlY2sgc2l6ZSBvZiB2aWV3cG9ydCBldmVyeSBzZWNvbmQuXG5cdFx0XHQvLyBcblx0XHRcdC8vIFRoaXMgaXMgZG9uZSB0byBkZXRlY3Qgd2hlbiBTYWZhcmkgdG9wICYgYm90dG9tIGJhcnMgYXBwZWFyLCBcblx0XHRcdC8vIGFzIHRoaXMgYWN0aW9uIGRvZXNuJ3QgdHJpZ2dlciBhbnkgZXZlbnRzIChsaWtlIHJlc2l6ZSkuIFxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBPbiBpT1M4IHRoZXkgZml4ZWQgdGhpcy5cblx0XHRcdC8vIFxuXHRcdFx0Ly8gMTAgTm92IDIwMTQ6IGlPUyA3IHVzYWdlIH40MCUuIGlPUyA4IHVzYWdlIDU2JS5cblx0XHRcdFxuXHRcdFx0X3VwZGF0ZVNpemVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZighX251bUFuaW1hdGlvbnMgJiYgIV9pc0RyYWdnaW5nICYmICFfaXNab29taW5nICYmIChfY3Vyclpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSAgKSB7XG5cdFx0XHRcdFx0c2VsZi51cGRhdGVTaXplKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApO1xuXHRcdH1cblxuXHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXZpc2libGUnKTtcblx0fSxcblxuXHQvLyBDbG9zZSB0aGUgZ2FsbGVyeSwgdGhlbiBkZXN0cm95IGl0XG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRpZighX2lzT3Blbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF9pc09wZW4gPSBmYWxzZTtcblx0XHRfaXNEZXN0cm95aW5nID0gdHJ1ZTtcblx0XHRfc2hvdXQoJ2Nsb3NlJyk7XG5cdFx0X3VuYmluZEV2ZW50cygpO1xuXG5cdFx0X3Nob3dPckhpZGUoc2VsZi5jdXJySXRlbSwgbnVsbCwgdHJ1ZSwgc2VsZi5kZXN0cm95KTtcblx0fSxcblxuXHQvLyBkZXN0cm95cyB0aGUgZ2FsbGVyeSAodW5iaW5kcyBldmVudHMsIGNsZWFucyB1cCBpbnRlcnZhbHMgYW5kIHRpbWVvdXRzIHRvIGF2b2lkIG1lbW9yeSBsZWFrcylcblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0X3Nob3V0KCdkZXN0cm95Jyk7XG5cblx0XHRpZihfc2hvd09ySGlkZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfc2hvd09ySGlkZVRpbWVvdXQpO1xuXHRcdH1cblx0XHRcblx0XHR0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHR0ZW1wbGF0ZS5jbGFzc05hbWUgPSBfaW5pdGFsQ2xhc3NOYW1lO1xuXG5cdFx0aWYoX3VwZGF0ZVNpemVJbnRlcnZhbCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChfdXBkYXRlU2l6ZUludGVydmFsKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsudW5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgX2Rvd25FdmVudHMsIHNlbGYpO1xuXG5cdFx0Ly8gd2UgdW5iaW5kIHNjcm9sbCBldmVudCBhdCB0aGUgZW5kLCBhcyBjbG9zaW5nIGFuaW1hdGlvbiBtYXkgZGVwZW5kIG9uIGl0XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdzY3JvbGwnLCBzZWxmKTtcblxuXHRcdF9zdG9wRHJhZ1VwZGF0ZUxvb3AoKTtcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0X2xpc3RlbmVycyA9IG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBhbiBpbWFnZSB0byBwb3NpdGlvblxuXHQgKiBAcGFyYW0ge051bWJlcn0geCAgICAgXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB5ICAgICBcblx0ICogQHBhcmFtIHtCb29sZWFufSBmb3JjZSBXaWxsIGlnbm9yZSBib3VuZHMgaWYgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRwYW5UbzogZnVuY3Rpb24oeCx5LGZvcmNlKSB7XG5cdFx0aWYoIWZvcmNlKSB7XG5cdFx0XHRpZih4ID4gX2N1cnJQYW5Cb3VuZHMubWluLngpIHtcblx0XHRcdFx0eCA9IF9jdXJyUGFuQm91bmRzLm1pbi54O1xuXHRcdFx0fSBlbHNlIGlmKHggPCBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHR4ID0gX2N1cnJQYW5Cb3VuZHMubWF4Lng7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHkgPiBfY3VyclBhbkJvdW5kcy5taW4ueSkge1xuXHRcdFx0XHR5ID0gX2N1cnJQYW5Cb3VuZHMubWluLnk7XG5cdFx0XHR9IGVsc2UgaWYoeSA8IF9jdXJyUGFuQm91bmRzLm1heC55KSB7XG5cdFx0XHRcdHkgPSBfY3VyclBhbkJvdW5kcy5tYXgueTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0X3Bhbk9mZnNldC54ID0geDtcblx0XHRfcGFuT2Zmc2V0LnkgPSB5O1xuXHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdH0sXG5cdFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0aWYoX2dsb2JhbEV2ZW50SGFuZGxlcnNbZS50eXBlXSkge1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbZS50eXBlXShlKTtcblx0XHR9XG5cdH0sXG5cblxuXHRnb1RvOiBmdW5jdGlvbihpbmRleCkge1xuXG5cdFx0aW5kZXggPSBfZ2V0TG9vcGVkSWQoaW5kZXgpO1xuXG5cdFx0dmFyIGRpZmYgPSBpbmRleCAtIF9jdXJyZW50SXRlbUluZGV4O1xuXHRcdF9pbmRleERpZmYgPSBkaWZmO1xuXG5cdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBpbmRleDtcblx0XHRzZWxmLmN1cnJJdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRfY3VyclBvc2l0aW9uSW5kZXggLT0gZGlmZjtcblx0XHRcblx0XHRfbW92ZU1haW5TY3JvbGwoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KTtcblx0XHRcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXHRcdF9tYWluU2Nyb2xsQW5pbWF0aW5nID0gZmFsc2U7XG5cblx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuZ29UbyggX2N1cnJlbnRJdGVtSW5kZXggKyAxKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5nb1RvKCBfY3VycmVudEl0ZW1JbmRleCAtIDEpO1xuXHR9LFxuXG5cdC8vIHVwZGF0ZSBjdXJyZW50IHpvb20vcGFuIG9iamVjdHNcblx0dXBkYXRlQ3Vyclpvb21JdGVtOiBmdW5jdGlvbihlbXVsYXRlU2V0Q29udGVudCkge1xuXHRcdGlmKGVtdWxhdGVTZXRDb250ZW50KSB7XG5cdFx0XHRfc2hvdXQoJ2JlZm9yZUNoYW5nZScsIDApO1xuXHRcdH1cblxuXHRcdC8vIGl0ZW1Ib2xkZXJbMV0gaXMgbWlkZGxlIChjdXJyZW50KSBpdGVtXG5cdFx0aWYoX2l0ZW1Ib2xkZXJzWzFdLmVsLmNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0dmFyIHpvb21FbGVtZW50ID0gX2l0ZW1Ib2xkZXJzWzFdLmVsLmNoaWxkcmVuWzBdO1xuXHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyh6b29tRWxlbWVudCwgJ3Bzd3BfX3pvb20td3JhcCcpICkge1xuXHRcdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSB6b29tRWxlbWVudC5zdHlsZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XHRcblx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblxuXHRcdF9wYW5PZmZzZXQueCA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci54O1xuXHRcdF9wYW5PZmZzZXQueSA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci55O1xuXG5cdFx0aWYoZW11bGF0ZVNldENvbnRlbnQpIHtcblx0XHRcdF9zaG91dCgnYWZ0ZXJDaGFuZ2UnKTtcblx0XHR9XG5cdH0sXG5cblxuXHRpbnZhbGlkYXRlQ3Vyckl0ZW1zOiBmdW5jdGlvbigpIHtcblx0XHRfaXRlbXNOZWVkVXBkYXRlID0gdHJ1ZTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgTlVNX0hPTERFUlM7IGkrKykge1xuXHRcdFx0aWYoIF9pdGVtSG9sZGVyc1tpXS5pdGVtICkge1xuXHRcdFx0XHRfaXRlbUhvbGRlcnNbaV0uaXRlbS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHVwZGF0ZUN1cnJJdGVtOiBmdW5jdGlvbihiZWZvcmVBbmltYXRpb24pIHtcblxuXHRcdGlmKF9pbmRleERpZmYgPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlmZkFicyA9IE1hdGguYWJzKF9pbmRleERpZmYpLFxuXHRcdFx0dGVtcEhvbGRlcjtcblxuXHRcdGlmKGJlZm9yZUFuaW1hdGlvbiAmJiBkaWZmQWJzIDwgMikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXG5cdFx0c2VsZi5jdXJySXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cdFx0X3JlbmRlck1heFJlc29sdXRpb24gPSBmYWxzZTtcblx0XHRcblx0XHRfc2hvdXQoJ2JlZm9yZUNoYW5nZScsIF9pbmRleERpZmYpO1xuXG5cdFx0aWYoZGlmZkFicyA+PSBOVU1fSE9MREVSUykge1xuXHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXggKz0gX2luZGV4RGlmZiArIChfaW5kZXhEaWZmID4gMCA/IC1OVU1fSE9MREVSUyA6IE5VTV9IT0xERVJTKTtcblx0XHRcdGRpZmZBYnMgPSBOVU1fSE9MREVSUztcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRpZmZBYnM7IGkrKykge1xuXHRcdFx0aWYoX2luZGV4RGlmZiA+IDApIHtcblx0XHRcdFx0dGVtcEhvbGRlciA9IF9pdGVtSG9sZGVycy5zaGlmdCgpO1xuXHRcdFx0XHRfaXRlbUhvbGRlcnNbTlVNX0hPTERFUlMtMV0gPSB0ZW1wSG9sZGVyOyAvLyBtb3ZlIGZpcnN0IHRvIGxhc3RcblxuXHRcdFx0XHRfY29udGFpbmVyU2hpZnRJbmRleCsrO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggKF9jb250YWluZXJTaGlmdEluZGV4KzIpICogX3NsaWRlU2l6ZS54LCB0ZW1wSG9sZGVyLmVsLnN0eWxlKTtcblx0XHRcdFx0c2VsZi5zZXRDb250ZW50KHRlbXBIb2xkZXIsIF9jdXJyZW50SXRlbUluZGV4IC0gZGlmZkFicyArIGkgKyAxICsgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZW1wSG9sZGVyID0gX2l0ZW1Ib2xkZXJzLnBvcCgpO1xuXHRcdFx0XHRfaXRlbUhvbGRlcnMudW5zaGlmdCggdGVtcEhvbGRlciApOyAvLyBtb3ZlIGxhc3QgdG8gZmlyc3RcblxuXHRcdFx0XHRfY29udGFpbmVyU2hpZnRJbmRleC0tO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggX2NvbnRhaW5lclNoaWZ0SW5kZXggKiBfc2xpZGVTaXplLngsIHRlbXBIb2xkZXIuZWwuc3R5bGUpO1xuXHRcdFx0XHRzZWxmLnNldENvbnRlbnQodGVtcEhvbGRlciwgX2N1cnJlbnRJdGVtSW5kZXggKyBkaWZmQWJzIC0gaSAtIDEgLSAxKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdC8vIHJlc2V0IHpvb20vcGFuIG9uIHByZXZpb3VzIGl0ZW1cblx0XHRpZihfY3Vyclpvb21FbGVtZW50U3R5bGUgJiYgTWF0aC5hYnMoX2luZGV4RGlmZikgPT09IDEpIHtcblxuXHRcdFx0dmFyIHByZXZJdGVtID0gX2dldEl0ZW1BdChfcHJldkl0ZW1JbmRleCk7XG5cdFx0XHRpZihwcmV2SXRlbS5pbml0aWFsWm9vbUxldmVsICE9PSBfY3Vyclpvb21MZXZlbCkge1xuXHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUocHJldkl0ZW0gLCBfdmlld3BvcnRTaXplICk7XG5cdFx0XHRcdF9zZXRJbWFnZVNpemUocHJldkl0ZW0pO1xuXHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKCBwcmV2SXRlbSApOyBcdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gcmVzZXQgZGlmZiBhZnRlciB1cGRhdGVcblx0XHRfaW5kZXhEaWZmID0gMDtcblxuXHRcdHNlbGYudXBkYXRlQ3Vyclpvb21JdGVtKCk7XG5cblx0XHRfcHJldkl0ZW1JbmRleCA9IF9jdXJyZW50SXRlbUluZGV4O1xuXG5cdFx0X3Nob3V0KCdhZnRlckNoYW5nZScpO1xuXHRcdFxuXHR9LFxuXG5cblxuXHR1cGRhdGVTaXplOiBmdW5jdGlvbihmb3JjZSkge1xuXHRcdFxuXHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uICYmIF9vcHRpb25zLm1vZGFsKSB7XG5cdFx0XHR2YXIgd2luZG93U2Nyb2xsWSA9IGZyYW1ld29yay5nZXRTY3JvbGxZKCk7XG5cdFx0XHRpZihfY3VycmVudFdpbmRvd1Njcm9sbFkgIT09IHdpbmRvd1Njcm9sbFkpIHtcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsWSArICdweCc7XG5cdFx0XHRcdF9jdXJyZW50V2luZG93U2Nyb2xsWSA9IHdpbmRvd1Njcm9sbFk7XG5cdFx0XHR9XG5cdFx0XHRpZighZm9yY2UgJiYgX3dpbmRvd1Zpc2libGVTaXplLnggPT09IHdpbmRvdy5pbm5lcldpZHRoICYmIF93aW5kb3dWaXNpYmxlU2l6ZS55ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0X3dpbmRvd1Zpc2libGVTaXplLnggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdF93aW5kb3dWaXNpYmxlU2l6ZS55ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5cdFx0XHQvL3RlbXBsYXRlLnN0eWxlLndpZHRoID0gX3dpbmRvd1Zpc2libGVTaXplLnggKyAncHgnO1xuXHRcdFx0dGVtcGxhdGUuc3R5bGUuaGVpZ2h0ID0gX3dpbmRvd1Zpc2libGVTaXplLnkgKyAncHgnO1xuXHRcdH1cblxuXG5cblx0XHRfdmlld3BvcnRTaXplLnggPSBzZWxmLnNjcm9sbFdyYXAuY2xpZW50V2lkdGg7XG5cdFx0X3ZpZXdwb3J0U2l6ZS55ID0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudEhlaWdodDtcblxuXHRcdF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0KCk7XG5cblx0XHRfc2xpZGVTaXplLnggPSBfdmlld3BvcnRTaXplLnggKyBNYXRoLnJvdW5kKF92aWV3cG9ydFNpemUueCAqIF9vcHRpb25zLnNwYWNpbmcpO1xuXHRcdF9zbGlkZVNpemUueSA9IF92aWV3cG9ydFNpemUueTtcblxuXHRcdF9tb3ZlTWFpblNjcm9sbChfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXgpO1xuXG5cdFx0X3Nob3V0KCdiZWZvcmVSZXNpemUnKTsgLy8gZXZlbiBtYXkgYmUgdXNlZCBmb3IgZXhhbXBsZSB0byBzd2l0Y2ggaW1hZ2Ugc291cmNlc1xuXG5cblx0XHQvLyBkb24ndCByZS1jYWxjdWxhdGUgc2l6ZSBvbiBpbml0YWwgc2l6ZSB1cGRhdGVcblx0XHRpZihfY29udGFpbmVyU2hpZnRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHZhciBob2xkZXIsXG5cdFx0XHRcdGl0ZW0sXG5cdFx0XHRcdGhJbmRleDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdFx0aG9sZGVyID0gX2l0ZW1Ib2xkZXJzW2ldO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggKGkrX2NvbnRhaW5lclNoaWZ0SW5kZXgpICogX3NsaWRlU2l6ZS54LCBob2xkZXIuZWwuc3R5bGUpO1xuXG5cdFx0XHRcdGhJbmRleCA9IF9jdXJyZW50SXRlbUluZGV4K2ktMTtcblxuXHRcdFx0XHRpZihfb3B0aW9ucy5sb29wICYmIF9nZXROdW1JdGVtcygpID4gMikge1xuXHRcdFx0XHRcdGhJbmRleCA9IF9nZXRMb29wZWRJZChoSW5kZXgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdXBkYXRlIHpvb20gbGV2ZWwgb24gaXRlbXMgYW5kIHJlZnJlc2ggc291cmNlIChpZiBuZWVkc1VwZGF0ZSlcblx0XHRcdFx0aXRlbSA9IF9nZXRJdGVtQXQoIGhJbmRleCApO1xuXG5cdFx0XHRcdC8vIHJlLXJlbmRlciBnYWxsZXJ5IGl0ZW0gaWYgYG5lZWRzVXBkYXRlYCxcblx0XHRcdFx0Ly8gb3IgZG9lc24ndCBoYXZlIGBib3VuZHNgIChlbnRpcmVseSBuZXcgc2xpZGUgb2JqZWN0KVxuXHRcdFx0XHRpZiggaXRlbSAmJiAoX2l0ZW1zTmVlZFVwZGF0ZSB8fCBpdGVtLm5lZWRzVXBkYXRlIHx8ICFpdGVtLmJvdW5kcykgKSB7XG5cblx0XHRcdFx0XHRzZWxmLmNsZWFuU2xpZGUoIGl0ZW0gKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzZWxmLnNldENvbnRlbnQoIGhvbGRlciwgaEluZGV4ICk7XG5cblx0XHRcdFx0XHQvLyBpZiBcImNlbnRlclwiIHNsaWRlXG5cdFx0XHRcdFx0aWYoaSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0c2VsZi5jdXJySXRlbSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpdGVtLm5lZWRzVXBkYXRlID0gZmFsc2U7XG5cblx0XHRcdFx0fSBlbHNlIGlmKGhvbGRlci5pbmRleCA9PT0gLTEgJiYgaEluZGV4ID49IDApIHtcblx0XHRcdFx0XHQvLyBhZGQgY29udGVudCBmaXJzdCB0aW1lXG5cdFx0XHRcdFx0c2VsZi5zZXRDb250ZW50KCBob2xkZXIsIGhJbmRleCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGl0ZW0gJiYgaXRlbS5jb250YWluZXIpIHtcblx0XHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKCBpdGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRfaXRlbXNOZWVkVXBkYXRlID0gZmFsc2U7XG5cdFx0fVx0XG5cblx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXG5cdFx0aWYoX2N1cnJQYW5Cb3VuZHMpIHtcblx0XHRcdF9wYW5PZmZzZXQueCA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci54O1xuXHRcdFx0X3Bhbk9mZnNldC55ID0gX2N1cnJQYW5Cb3VuZHMuY2VudGVyLnk7XG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiggdHJ1ZSApO1xuXHRcdH1cblx0XHRcblx0XHRfc2hvdXQoJ3Jlc2l6ZScpO1xuXHR9LFxuXHRcblx0Ly8gWm9vbSBjdXJyZW50IGl0ZW0gdG9cblx0em9vbVRvOiBmdW5jdGlvbihkZXN0Wm9vbUxldmVsLCBjZW50ZXJQb2ludCwgc3BlZWQsIGVhc2luZ0ZuLCB1cGRhdGVGbikge1xuXHRcdC8qXG5cdFx0XHRpZihkZXN0Wm9vbUxldmVsID09PSAnZml0Jykge1xuXHRcdFx0XHRkZXN0Wm9vbUxldmVsID0gc2VsZi5jdXJySXRlbS5maXRSYXRpbztcblx0XHRcdH0gZWxzZSBpZihkZXN0Wm9vbUxldmVsID09PSAnZmlsbCcpIHtcblx0XHRcdFx0ZGVzdFpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uZmlsbFJhdGlvO1xuXHRcdFx0fVxuXHRcdCovXG5cblx0XHRpZihjZW50ZXJQb2ludCkge1xuXHRcdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnggPSBNYXRoLmFicyhjZW50ZXJQb2ludC54KSAtIF9wYW5PZmZzZXQueCA7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnkgPSBNYXRoLmFicyhjZW50ZXJQb2ludC55KSAtIF9wYW5PZmZzZXQueSA7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UGFuT2Zmc2V0LCBfcGFuT2Zmc2V0KTtcblx0XHR9XG5cblx0XHR2YXIgZGVzdFBhbkJvdW5kcyA9IF9jYWxjdWxhdGVQYW5Cb3VuZHMoZGVzdFpvb21MZXZlbCwgZmFsc2UpLFxuXHRcdFx0ZGVzdFBhbk9mZnNldCA9IHt9O1xuXG5cdFx0X21vZGlmeURlc3RQYW5PZmZzZXQoJ3gnLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKTtcblx0XHRfbW9kaWZ5RGVzdFBhbk9mZnNldCgneScsIGRlc3RQYW5Cb3VuZHMsIGRlc3RQYW5PZmZzZXQsIGRlc3Rab29tTGV2ZWwpO1xuXG5cdFx0dmFyIGluaXRpYWxab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbDtcblx0XHR2YXIgaW5pdGlhbFBhbk9mZnNldCA9IHtcblx0XHRcdHg6IF9wYW5PZmZzZXQueCxcblx0XHRcdHk6IF9wYW5PZmZzZXQueVxuXHRcdH07XG5cblx0XHRfcm91bmRQb2ludChkZXN0UGFuT2Zmc2V0KTtcblxuXHRcdHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0aWYobm93ID09PSAxKSB7XG5cdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gZGVzdFpvb21MZXZlbDtcblx0XHRcdFx0X3Bhbk9mZnNldC54ID0gZGVzdFBhbk9mZnNldC54O1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSBkZXN0UGFuT2Zmc2V0Lnk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IChkZXN0Wm9vbUxldmVsIC0gaW5pdGlhbFpvb21MZXZlbCkgKiBub3cgKyBpbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnggPSAoZGVzdFBhbk9mZnNldC54IC0gaW5pdGlhbFBhbk9mZnNldC54KSAqIG5vdyArIGluaXRpYWxQYW5PZmZzZXQueDtcblx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKGRlc3RQYW5PZmZzZXQueSAtIGluaXRpYWxQYW5PZmZzZXQueSkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHVwZGF0ZUZuKSB7XG5cdFx0XHRcdHVwZGF0ZUZuKG5vdyk7XG5cdFx0XHR9XG5cblx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCBub3cgPT09IDEgKTtcblx0XHR9O1xuXG5cdFx0aWYoc3BlZWQpIHtcblx0XHRcdF9hbmltYXRlUHJvcCgnY3VzdG9tWm9vbVRvJywgMCwgMSwgc3BlZWQsIGVhc2luZ0ZuIHx8IGZyYW1ld29yay5lYXNpbmcuc2luZS5pbk91dCwgb25VcGRhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvblVwZGF0ZSgxKTtcblx0XHR9XG5cdH1cblxuXG59O1xuXG5cbi8qPj5jb3JlKi9cblxuLyo+Pmdlc3R1cmVzKi9cbi8qKlxuICogTW91c2UvdG91Y2gvcG9pbnRlciBldmVudCBoYW5kbGVycy5cbiAqIFxuICogc2VwYXJhdGVkIGZyb20gQGNvcmUuanMgZm9yIHJlYWRhYmlsaXR5XG4gKi9cblxudmFyIE1JTl9TV0lQRV9ESVNUQU5DRSA9IDMwLFxuXHRESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUID0gMTA7IC8vIGFtb3VudCBvZiBwaXhlbHMgdG8gZHJhZyB0byBkZXRlcm1pbmUgZGlyZWN0aW9uIG9mIHN3aXBlXG5cbnZhciBfZ2VzdHVyZVN0YXJ0VGltZSxcblx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSxcblxuXHQvLyBwb29sIG9mIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBkdXJpbmcgZHJhZ2dpbmcgb2Ygem9vbWluZ1xuXHRwID0ge30sIC8vIGZpcnN0IHBvaW50XG5cdHAyID0ge30sIC8vIHNlY29uZCBwb2ludCAoZm9yIHpvb20gZ2VzdHVyZSlcblx0ZGVsdGEgPSB7fSxcblx0X2N1cnJQb2ludCA9IHt9LFxuXHRfc3RhcnRQb2ludCA9IHt9LFxuXHRfY3VyclBvaW50ZXJzID0gW10sXG5cdF9zdGFydE1haW5TY3JvbGxQb3MgPSB7fSxcblx0X3JlbGVhc2VBbmltRGF0YSxcblx0X3Bvc1BvaW50cyA9IFtdLCAvLyBhcnJheSBvZiBwb2ludHMgZHVyaW5nIGRyYWdnaW5nLCB1c2VkIHRvIGRldGVybWluZSB0eXBlIG9mIGdlc3R1cmVcblx0X3RlbXBQb2ludCA9IHt9LFxuXG5cdF9pc1pvb21pbmdJbixcblx0X3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCxcblx0X29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQsXG5cdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gMCxcblx0X2NlbnRlclBvaW50ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2xhc3RSZWxlYXNlVGltZSA9IDAsXG5cdF9pc0RyYWdnaW5nLCAvLyBhdCBsZWFzdCBvbmUgcG9pbnRlciBpcyBkb3duXG5cdF9pc011bHRpdG91Y2gsIC8vIGF0IGxlYXN0IHR3byBfcG9pbnRlcnMgYXJlIGRvd25cblx0X3pvb21TdGFydGVkLCAvLyB6b29tIGxldmVsIGNoYW5nZWQgZHVyaW5nIHpvb20gZ2VzdHVyZVxuXHRfbW92ZWQsXG5cdF9kcmFnQW5pbUZyYW1lLFxuXHRfbWFpblNjcm9sbFNoaWZ0ZWQsXG5cdF9jdXJyZW50UG9pbnRzLCAvLyBhcnJheSBvZiBjdXJyZW50IHRvdWNoIHBvaW50c1xuXHRfaXNab29taW5nLFxuXHRfY3VyclBvaW50c0Rpc3RhbmNlLFxuXHRfc3RhcnRQb2ludHNEaXN0YW5jZSxcblx0X2N1cnJQYW5Cb3VuZHMsXG5cdF9tYWluU2Nyb2xsUG9zID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2N1cnJab29tRWxlbWVudFN0eWxlLFxuXHRfbWFpblNjcm9sbEFuaW1hdGluZywgLy8gdHJ1ZSwgaWYgYW5pbWF0aW9uIGFmdGVyIHN3aXBlIGdlc3R1cmUgaXMgcnVubmluZ1xuXHRfbWlkWm9vbVBvaW50ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2N1cnJDZW50ZXJQb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9kaXJlY3Rpb24sXG5cdF9pc0ZpcnN0TW92ZSxcblx0X29wYWNpdHlDaGFuZ2VkLFxuXHRfYmdPcGFjaXR5LFxuXHRfd2FzT3ZlckluaXRpYWxab29tLFxuXG5cdF9pc0VxdWFsUG9pbnRzID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0cmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueTtcblx0fSxcblx0X2lzTmVhcmJ5UG9pbnRzID0gZnVuY3Rpb24odG91Y2gwLCB0b3VjaDEpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModG91Y2gwLnggLSB0b3VjaDEueCkgPCBET1VCTEVfVEFQX1JBRElVUyAmJiBNYXRoLmFicyh0b3VjaDAueSAtIHRvdWNoMS55KSA8IERPVUJMRV9UQVBfUkFESVVTO1xuXHR9LFxuXHRfY2FsY3VsYXRlUG9pbnRzRGlzdGFuY2UgPSBmdW5jdGlvbihwMSwgcDIpIHtcblx0XHRfdGVtcFBvaW50LnggPSBNYXRoLmFicyggcDEueCAtIHAyLnggKTtcblx0XHRfdGVtcFBvaW50LnkgPSBNYXRoLmFicyggcDEueSAtIHAyLnkgKTtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KF90ZW1wUG9pbnQueCAqIF90ZW1wUG9pbnQueCArIF90ZW1wUG9pbnQueSAqIF90ZW1wUG9pbnQueSk7XG5cdH0sXG5cdF9zdG9wRHJhZ1VwZGF0ZUxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfZHJhZ0FuaW1GcmFtZSkge1xuXHRcdFx0X2NhbmNlbEFGKF9kcmFnQW5pbUZyYW1lKTtcblx0XHRcdF9kcmFnQW5pbUZyYW1lID0gbnVsbDtcblx0XHR9XG5cdH0sXG5cdF9kcmFnVXBkYXRlTG9vcCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9pc0RyYWdnaW5nKSB7XG5cdFx0XHRfZHJhZ0FuaW1GcmFtZSA9IF9yZXF1ZXN0QUYoX2RyYWdVcGRhdGVMb29wKTtcblx0XHRcdF9yZW5kZXJNb3ZlbWVudCgpO1xuXHRcdH1cblx0fSxcblx0X2NhblBhbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAhKF9vcHRpb25zLnNjYWxlTW9kZSA9PT0gJ2ZpdCcgJiYgX2N1cnJab29tTGV2ZWwgPT09ICBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpO1xuXHR9LFxuXHRcblx0Ly8gZmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgRE9NIGVsZW1lbnRcblx0X2Nsb3Nlc3RFbGVtZW50ID0gZnVuY3Rpb24oZWwsIGZuKSB7XG5cdCAgXHRpZighZWwgfHwgZWwgPT09IGRvY3VtZW50KSB7XG5cdCAgXHRcdHJldHVybiBmYWxzZTtcblx0ICBcdH1cblxuXHQgIFx0Ly8gZG9uJ3Qgc2VhcmNoIGVsZW1lbnRzIGFib3ZlIHBzd3BfX3Njcm9sbC13cmFwXG5cdCAgXHRpZihlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluZGV4T2YoJ3Bzd3BfX3Njcm9sbC13cmFwJykgPiAtMSApIHtcblx0ICBcdFx0cmV0dXJuIGZhbHNlO1xuXHQgIFx0fVxuXG5cdCAgXHRpZiggZm4oZWwpICkge1xuXHQgIFx0XHRyZXR1cm4gZWw7XG5cdCAgXHR9XG5cblx0ICBcdHJldHVybiBfY2xvc2VzdEVsZW1lbnQoZWwucGFyZW50Tm9kZSwgZm4pO1xuXHR9LFxuXG5cdF9wcmV2ZW50T2JqID0ge30sXG5cdF9wcmV2ZW50RGVmYXVsdEV2ZW50QmVoYXZpb3VyID0gZnVuY3Rpb24oZSwgaXNEb3duKSB7XG5cdCAgICBfcHJldmVudE9iai5wcmV2ZW50ID0gIV9jbG9zZXN0RWxlbWVudChlLnRhcmdldCwgX29wdGlvbnMuaXNDbGlja2FibGVFbGVtZW50KTtcblxuXHRcdF9zaG91dCgncHJldmVudERyYWdFdmVudCcsIGUsIGlzRG93biwgX3ByZXZlbnRPYmopO1xuXHRcdHJldHVybiBfcHJldmVudE9iai5wcmV2ZW50O1xuXG5cdH0sXG5cdF9jb252ZXJ0VG91Y2hUb1BvaW50ID0gZnVuY3Rpb24odG91Y2gsIHApIHtcblx0XHRwLnggPSB0b3VjaC5wYWdlWDtcblx0XHRwLnkgPSB0b3VjaC5wYWdlWTtcblx0XHRwLmlkID0gdG91Y2guaWRlbnRpZmllcjtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0X2ZpbmRDZW50ZXJPZlBvaW50cyA9IGZ1bmN0aW9uKHAxLCBwMiwgcENlbnRlcikge1xuXHRcdHBDZW50ZXIueCA9IChwMS54ICsgcDIueCkgKiAwLjU7XG5cdFx0cENlbnRlci55ID0gKHAxLnkgKyBwMi55KSAqIDAuNTtcblx0fSxcblx0X3B1c2hQb3NQb2ludCA9IGZ1bmN0aW9uKHRpbWUsIHgsIHkpIHtcblx0XHRpZih0aW1lIC0gX2dlc3R1cmVDaGVja1NwZWVkVGltZSA+IDUwKSB7XG5cdFx0XHR2YXIgbyA9IF9wb3NQb2ludHMubGVuZ3RoID4gMiA/IF9wb3NQb2ludHMuc2hpZnQoKSA6IHt9O1xuXHRcdFx0by54ID0geDtcblx0XHRcdG8ueSA9IHk7IFxuXHRcdFx0X3Bvc1BvaW50cy5wdXNoKG8pO1xuXHRcdFx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSA9IHRpbWU7XG5cdFx0fVxuXHR9LFxuXG5cdF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgeU9mZnNldCA9IF9wYW5PZmZzZXQueSAtIHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFBvc2l0aW9uLnk7IC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBpbml0aWFsIGFuZCBjdXJyZW50IHBvc2l0aW9uXG5cdFx0cmV0dXJuIDEgLSAgTWF0aC5hYnMoIHlPZmZzZXQgLyAoX3ZpZXdwb3J0U2l6ZS55IC8gMikgICk7XG5cdH0sXG5cblx0XG5cdC8vIHBvaW50cyBwb29sLCByZXVzZWQgZHVyaW5nIHRvdWNoIGV2ZW50c1xuXHRfZVBvaW50MSA9IHt9LFxuXHRfZVBvaW50MiA9IHt9LFxuXHRfdGVtcFBvaW50c0FyciA9IFtdLFxuXHRfdGVtcENvdW50ZXIsXG5cdF9nZXRUb3VjaFBvaW50cyA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBjbGVhbiB1cCBwcmV2aW91cyBwb2ludHMsIHdpdGhvdXQgcmVjcmVhdGluZyBhcnJheVxuXHRcdHdoaWxlKF90ZW1wUG9pbnRzQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdF90ZW1wUG9pbnRzQXJyLnBvcCgpO1xuXHRcdH1cblxuXHRcdGlmKCFfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0aWYoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSkge1xuXG5cdFx0XHRcdGlmKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzBdID0gX2NvbnZlcnRUb3VjaFRvUG9pbnQoZS50b3VjaGVzWzBdLCBfZVBvaW50MSk7XG5cdFx0XHRcdFx0aWYoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzFdID0gX2NvbnZlcnRUb3VjaFRvUG9pbnQoZS50b3VjaGVzWzFdLCBfZVBvaW50Mik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2VQb2ludDEueCA9IGUucGFnZVg7XG5cdFx0XHRcdF9lUG9pbnQxLnkgPSBlLnBhZ2VZO1xuXHRcdFx0XHRfZVBvaW50MS5pZCA9ICcnO1xuXHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IF9lUG9pbnQxOy8vX2VQb2ludDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90ZW1wQ291bnRlciA9IDA7XG5cdFx0XHQvLyB3ZSBjYW4gdXNlIGZvckVhY2gsIGFzIHBvaW50ZXIgZXZlbnRzIGFyZSBzdXBwb3J0ZWQgb25seSBpbiBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdF9jdXJyUG9pbnRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG5cdFx0XHRcdGlmKF90ZW1wQ291bnRlciA9PT0gMCkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzBdID0gcDtcblx0XHRcdFx0fSBlbHNlIGlmKF90ZW1wQ291bnRlciA9PT0gMSkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzFdID0gcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGVtcENvdW50ZXIrKztcblxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBfdGVtcFBvaW50c0Fycjtcblx0fSxcblxuXHRfcGFuT3JNb3ZlTWFpblNjcm9sbCA9IGZ1bmN0aW9uKGF4aXMsIGRlbHRhKSB7XG5cblx0XHR2YXIgcGFuRnJpY3Rpb24sXG5cdFx0XHRvdmVyRGlmZiA9IDAsXG5cdFx0XHRuZXdPZmZzZXQgPSBfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10sXG5cdFx0XHRzdGFydE92ZXJEaWZmLFxuXHRcdFx0ZGlyID0gZGVsdGFbYXhpc10gPiAwLFxuXHRcdFx0bmV3TWFpblNjcm9sbFBvc2l0aW9uID0gX21haW5TY3JvbGxQb3MueCArIGRlbHRhLngsXG5cdFx0XHRtYWluU2Nyb2xsRGlmZiA9IF9tYWluU2Nyb2xsUG9zLnggLSBfc3RhcnRNYWluU2Nyb2xsUG9zLngsXG5cdFx0XHRuZXdQYW5Qb3MsXG5cdFx0XHRuZXdNYWluU2Nyb2xsUG9zO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZkaXN0YW5jZSBvdmVyIHRoZSBib3VuZHMgYW5kIGZyaWN0aW9uXG5cdFx0aWYobmV3T2Zmc2V0ID4gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIHx8IG5ld09mZnNldCA8IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXSkge1xuXHRcdFx0cGFuRnJpY3Rpb24gPSBfb3B0aW9ucy5wYW5FbmRGcmljdGlvbjtcblx0XHRcdC8vIExpbmVhciBpbmNyZWFzaW5nIG9mIGZyaWN0aW9uLCBzbyBhdCAxLzQgb2Ygdmlld3BvcnQgaXQncyBhdCBtYXggdmFsdWUuIFxuXHRcdFx0Ly8gTG9va3Mgbm90IGFzIG5pY2UgYXMgd2FzIGV4cGVjdGVkLiBMZWZ0IGZvciBoaXN0b3J5LlxuXHRcdFx0Ly8gcGFuRnJpY3Rpb24gPSAoMSAtIChfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10gKyBwYW5Cb3VuZHMubWluW2F4aXNdKSAvIChfdmlld3BvcnRTaXplW2F4aXNdIC8gNCkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFuRnJpY3Rpb24gPSAxO1xuXHRcdH1cblx0XHRcblx0XHRuZXdPZmZzZXQgPSBfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10gKiBwYW5GcmljdGlvbjtcblxuXHRcdC8vIG1vdmUgbWFpbiBzY3JvbGwgb3Igc3RhcnQgcGFubmluZ1xuXHRcdGlmKF9vcHRpb25zLmFsbG93UGFuVG9OZXh0IHx8IF9jdXJyWm9vbUxldmVsID09PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblxuXG5cdFx0XHRpZighX2N1cnJab29tRWxlbWVudFN0eWxlKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0XHR9IGVsc2UgaWYoX2RpcmVjdGlvbiA9PT0gJ2gnICYmIGF4aXMgPT09ICd4JyAmJiAhX3pvb21TdGFydGVkICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoZGlyKSB7XG5cdFx0XHRcdFx0aWYobmV3T2Zmc2V0ID4gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdKSB7XG5cdFx0XHRcdFx0XHRwYW5GcmljdGlvbiA9IF9vcHRpb25zLnBhbkVuZEZyaWN0aW9uO1xuXHRcdFx0XHRcdFx0b3ZlckRpZmYgPSBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10gLSBuZXdPZmZzZXQ7XG5cdFx0XHRcdFx0XHRzdGFydE92ZXJEaWZmID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIC0gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBkcmFnIHJpZ2h0XG5cdFx0XHRcdFx0aWYoIChzdGFydE92ZXJEaWZmIDw9IDAgfHwgbWFpblNjcm9sbERpZmYgPCAwKSAmJiBfZ2V0TnVtSXRlbXMoKSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0XHRcdFx0aWYobWFpblNjcm9sbERpZmYgPCAwICYmIG5ld01haW5TY3JvbGxQb3NpdGlvbiA+IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gX3N0YXJ0TWFpblNjcm9sbFBvcy54O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZihfY3VyclBhbkJvdW5kcy5taW4ueCAhPT0gX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0XHRcdFx0bmV3UGFuUG9zID0gbmV3T2Zmc2V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRpZihuZXdPZmZzZXQgPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10gKSB7XG5cdFx0XHRcdFx0XHRwYW5GcmljdGlvbiA9X29wdGlvbnMucGFuRW5kRnJpY3Rpb247XG5cdFx0XHRcdFx0XHRvdmVyRGlmZiA9IG5ld09mZnNldCAtIF9jdXJyUGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0XHRcdHN0YXJ0T3ZlckRpZmYgPSBfc3RhcnRQYW5PZmZzZXRbYXhpc10gLSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIChzdGFydE92ZXJEaWZmIDw9IDAgfHwgbWFpblNjcm9sbERpZmYgPiAwKSAmJiBfZ2V0TnVtSXRlbXMoKSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0XHRcdFx0XHRpZihtYWluU2Nyb2xsRGlmZiA+IDAgJiYgbmV3TWFpblNjcm9sbFBvc2l0aW9uIDwgX3N0YXJ0TWFpblNjcm9sbFBvcy54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBfc3RhcnRNYWluU2Nyb2xsUG9zLng7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld1BhblBvcyA9IG5ld09mZnNldDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly9cblx0XHRcdH1cblxuXHRcdFx0aWYoYXhpcyA9PT0gJ3gnKSB7XG5cblx0XHRcdFx0aWYobmV3TWFpblNjcm9sbFBvcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X21vdmVNYWluU2Nyb2xsKG5ld01haW5TY3JvbGxQb3MsIHRydWUpO1xuXHRcdFx0XHRcdGlmKG5ld01haW5TY3JvbGxQb3MgPT09IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0X21haW5TY3JvbGxTaGlmdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0aWYobmV3UGFuUG9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IG5ld1BhblBvcztcblx0XHRcdFx0XHR9IGVsc2UgaWYoIV9tYWluU2Nyb2xsU2hpZnRlZCkge1xuXHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ICs9IGRlbHRhLnggKiBwYW5GcmljdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbmV3TWFpblNjcm9sbFBvcyAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYoIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRcblx0XHRcdGlmKCFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSArPSBkZWx0YVtheGlzXSAqIHBhbkZyaWN0aW9uO1xuXHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdH0sXG5cblx0Ly8gUG9pbnRlcmRvd24vdG91Y2hzdGFydC9tb3VzZWRvd24gaGFuZGxlclxuXHRfb25EcmFnU3RhcnQgPSBmdW5jdGlvbihlKSB7XG5cblx0XHQvLyBBbGxvdyBkcmFnZ2luZyBvbmx5IHZpYSBsZWZ0IG1vdXNlIGJ1dHRvbi5cblx0XHQvLyBBcyB0aGlzIGhhbmRsZXIgaXMgbm90IGFkZGVkIGluIElFOCAtIHdlIGlnbm9yZSBlLndoaWNoXG5cdFx0Ly8gXG5cdFx0Ly8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2V2ZW50LmJ1dHRvblxuXHRcdGlmKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZS5idXR0b24gPiAwICApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihfaW5pdGlhbFpvb21SdW5uaW5nKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoX29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgJiYgZS50eXBlID09PSAnbW91c2Vkb3duJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKF9wcmV2ZW50RGVmYXVsdEV2ZW50QmVoYXZpb3VyKGUsIHRydWUpKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cblxuXHRcdF9zaG91dCgncG9pbnRlckRvd24nKTtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdGlmKHBvaW50ZXJJbmRleCA8IDApIHtcblx0XHRcdFx0cG9pbnRlckluZGV4ID0gX2N1cnJQb2ludGVycy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHRfY3VyclBvaW50ZXJzW3BvaW50ZXJJbmRleF0gPSB7eDplLnBhZ2VYLCB5OmUucGFnZVksIGlkOiBlLnBvaW50ZXJJZH07XG5cdFx0fVxuXHRcdFxuXG5cblx0XHR2YXIgc3RhcnRQb2ludHNMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpLFxuXHRcdFx0bnVtUG9pbnRzID0gc3RhcnRQb2ludHNMaXN0Lmxlbmd0aDtcblxuXHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0Ly8gaW5pdCBkcmFnXG5cdFx0aWYoIV9pc0RyYWdnaW5nIHx8IG51bVBvaW50cyA9PT0gMSkge1xuXG5cdFx0XHRcblxuXHRcdFx0X2lzRHJhZ2dpbmcgPSBfaXNGaXJzdE1vdmUgPSB0cnVlO1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblxuXHRcdFx0X2lzWm9vbWluZ0luID0gXG5cdFx0XHRcdF93YXNPdmVySW5pdGlhbFpvb20gPSBcblx0XHRcdFx0X29wYWNpdHlDaGFuZ2VkID0gXG5cdFx0XHRcdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQgPSBcblx0XHRcdFx0X21haW5TY3JvbGxTaGlmdGVkID0gXG5cdFx0XHRcdF9tb3ZlZCA9IFxuXHRcdFx0XHRfaXNNdWx0aXRvdWNoID0gXG5cdFx0XHRcdF96b29tU3RhcnRlZCA9IGZhbHNlO1xuXG5cdFx0XHRfZGlyZWN0aW9uID0gbnVsbDtcblxuXHRcdFx0X3Nob3V0KCdmaXJzdFRvdWNoU3RhcnQnLCBzdGFydFBvaW50c0xpc3QpO1xuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UGFuT2Zmc2V0LCBfcGFuT2Zmc2V0KTtcblxuXHRcdFx0X2N1cnJQYW5EaXN0LnggPSBfY3VyclBhbkRpc3QueSA9IDA7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX2N1cnJQb2ludCwgc3RhcnRQb2ludHNMaXN0WzBdKTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQb2ludCwgX2N1cnJQb2ludCk7XG5cblx0XHRcdC8vX2VxdWFsaXplUG9pbnRzKF9zdGFydE1haW5TY3JvbGxQb3MsIF9tYWluU2Nyb2xsUG9zKTtcblx0XHRcdF9zdGFydE1haW5TY3JvbGxQb3MueCA9IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleDtcblxuXHRcdFx0X3Bvc1BvaW50cyA9IFt7XG5cdFx0XHRcdHg6IF9jdXJyUG9pbnQueCxcblx0XHRcdFx0eTogX2N1cnJQb2ludC55XG5cdFx0XHR9XTtcblxuXHRcdFx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSA9IF9nZXN0dXJlU3RhcnRUaW1lID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cblx0XHRcdC8vX21haW5TY3JvbGxBbmltYXRpb25FbmQodHJ1ZSk7XG5cdFx0XHRfY2FsY3VsYXRlUGFuQm91bmRzKCBfY3Vyclpvb21MZXZlbCwgdHJ1ZSApO1xuXHRcdFx0XG5cdFx0XHQvLyBTdGFydCByZW5kZXJpbmdcblx0XHRcdF9zdG9wRHJhZ1VwZGF0ZUxvb3AoKTtcblx0XHRcdF9kcmFnVXBkYXRlTG9vcCgpO1xuXHRcdFx0XG5cdFx0fVxuXG5cdFx0Ly8gaW5pdCB6b29tXG5cdFx0aWYoIV9pc1pvb21pbmcgJiYgbnVtUG9pbnRzID4gMSAmJiAhX21haW5TY3JvbGxBbmltYXRpbmcgJiYgIV9tYWluU2Nyb2xsU2hpZnRlZCkge1xuXHRcdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0XHRfem9vbVN0YXJ0ZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiB6b29tIGNoYW5nZWQgYXQgbGVhc3Qgb25jZVxuXG5cdFx0XHRfaXNab29taW5nID0gX2lzTXVsdGl0b3VjaCA9IHRydWU7XG5cdFx0XHRfY3VyclBhbkRpc3QueSA9IF9jdXJyUGFuRGlzdC54ID0gMDtcblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhwLCBzdGFydFBvaW50c0xpc3RbMF0pO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKHAyLCBzdGFydFBvaW50c0xpc3RbMV0pO1xuXG5cdFx0XHRfZmluZENlbnRlck9mUG9pbnRzKHAsIHAyLCBfY3VyckNlbnRlclBvaW50KTtcblxuXHRcdFx0X21pZFpvb21Qb2ludC54ID0gTWF0aC5hYnMoX2N1cnJDZW50ZXJQb2ludC54KSAtIF9wYW5PZmZzZXQueDtcblx0XHRcdF9taWRab29tUG9pbnQueSA9IE1hdGguYWJzKF9jdXJyQ2VudGVyUG9pbnQueSkgLSBfcGFuT2Zmc2V0Lnk7XG5cdFx0XHRfY3VyclBvaW50c0Rpc3RhbmNlID0gX3N0YXJ0UG9pbnRzRGlzdGFuY2UgPSBfY2FsY3VsYXRlUG9pbnRzRGlzdGFuY2UocCwgcDIpO1xuXHRcdH1cblxuXG5cdH0sXG5cblx0Ly8gUG9pbnRlcm1vdmUvdG91Y2htb3ZlL21vdXNlbW92ZSBoYW5kbGVyXG5cdF9vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdHZhciBwb2ludGVySW5kZXggPSBmcmFtZXdvcmsuYXJyYXlTZWFyY2goX2N1cnJQb2ludGVycywgZS5wb2ludGVySWQsICdpZCcpO1xuXHRcdFx0aWYocG9pbnRlckluZGV4ID4gLTEpIHtcblx0XHRcdFx0dmFyIHAgPSBfY3VyclBvaW50ZXJzW3BvaW50ZXJJbmRleF07XG5cdFx0XHRcdHAueCA9IGUucGFnZVg7XG5cdFx0XHRcdHAueSA9IGUucGFnZVk7IFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9pc0RyYWdnaW5nKSB7XG5cdFx0XHR2YXIgdG91Y2hlc0xpc3QgPSBfZ2V0VG91Y2hQb2ludHMoZSk7XG5cdFx0XHRpZighX2RpcmVjdGlvbiAmJiAhX21vdmVkICYmICFfaXNab29taW5nKSB7XG5cblx0XHRcdFx0aWYoX21haW5TY3JvbGxQb3MueCAhPT0gX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KSB7XG5cdFx0XHRcdFx0Ly8gaWYgbWFpbiBzY3JvbGwgcG9zaXRpb24gaXMgc2hpZnRlZCDigJMgZGlyZWN0aW9uIGlzIGFsd2F5cyBob3Jpem9udGFsXG5cdFx0XHRcdFx0X2RpcmVjdGlvbiA9ICdoJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgZGlmZiA9IE1hdGguYWJzKHRvdWNoZXNMaXN0WzBdLnggLSBfY3VyclBvaW50LngpIC0gTWF0aC5hYnModG91Y2hlc0xpc3RbMF0ueSAtIF9jdXJyUG9pbnQueSk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgdGhlIGRpcmVjdGlvbiBvZiBtb3ZlbWVudFxuXHRcdFx0XHRcdGlmKE1hdGguYWJzKGRpZmYpID49IERJUkVDVElPTl9DSEVDS19PRkZTRVQpIHtcblx0XHRcdFx0XHRcdF9kaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdoJyA6ICd2Jztcblx0XHRcdFx0XHRcdF9jdXJyZW50UG9pbnRzID0gdG91Y2hlc0xpc3Q7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2N1cnJlbnRQb2ludHMgPSB0b3VjaGVzTGlzdDtcblx0XHRcdH1cblx0XHR9XHRcblx0fSxcblx0Ly8gXG5cdF9yZW5kZXJNb3ZlbWVudCA9ICBmdW5jdGlvbigpIHtcblxuXHRcdGlmKCFfY3VycmVudFBvaW50cykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBudW1Qb2ludHMgPSBfY3VycmVudFBvaW50cy5sZW5ndGg7XG5cblx0XHRpZihudW1Qb2ludHMgPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfZXF1YWxpemVQb2ludHMocCwgX2N1cnJlbnRQb2ludHNbMF0pO1xuXG5cdFx0ZGVsdGEueCA9IHAueCAtIF9jdXJyUG9pbnQueDtcblx0XHRkZWx0YS55ID0gcC55IC0gX2N1cnJQb2ludC55O1xuXG5cdFx0aWYoX2lzWm9vbWluZyAmJiBudW1Qb2ludHMgPiAxKSB7XG5cdFx0XHQvLyBIYW5kbGUgYmVoYXZpb3VyIGZvciBtb3JlIHRoYW4gMSBwb2ludFxuXG5cdFx0XHRfY3VyclBvaW50LnggPSBwLng7XG5cdFx0XHRfY3VyclBvaW50LnkgPSBwLnk7XG5cdFx0XG5cdFx0XHQvLyBjaGVjayBpZiBvbmUgb2YgdHdvIHBvaW50cyBjaGFuZ2VkXG5cdFx0XHRpZiggIWRlbHRhLnggJiYgIWRlbHRhLnkgJiYgX2lzRXF1YWxQb2ludHMoX2N1cnJlbnRQb2ludHNbMV0sIHAyKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMocDIsIF9jdXJyZW50UG9pbnRzWzFdKTtcblxuXG5cdFx0XHRpZighX3pvb21TdGFydGVkKSB7XG5cdFx0XHRcdF96b29tU3RhcnRlZCA9IHRydWU7XG5cdFx0XHRcdF9zaG91dCgnem9vbUdlc3R1cmVTdGFydGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIERpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xuXHRcdFx0dmFyIHBvaW50c0Rpc3RhbmNlID0gX2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlKHAscDIpO1xuXG5cdFx0XHR2YXIgem9vbUxldmVsID0gX2NhbGN1bGF0ZVpvb21MZXZlbChwb2ludHNEaXN0YW5jZSk7XG5cblx0XHRcdC8vIHNsaWdodGx5IG92ZXIgdGhlIG9mIGluaXRpYWwgem9vbSBsZXZlbFxuXHRcdFx0aWYoem9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsICsgc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsIC8gMTUpIHtcblx0XHRcdFx0X3dhc092ZXJJbml0aWFsWm9vbSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IHRoZSBmcmljdGlvbiBpZiB6b29tIGxldmVsIGlzIG91dCBvZiB0aGUgYm91bmRzXG5cdFx0XHR2YXIgem9vbUZyaWN0aW9uID0gMSxcblx0XHRcdFx0bWluWm9vbUxldmVsID0gX2dldE1pblpvb21MZXZlbCgpLFxuXHRcdFx0XHRtYXhab29tTGV2ZWwgPSBfZ2V0TWF4Wm9vbUxldmVsKCk7XG5cblx0XHRcdGlmICggem9vbUxldmVsIDwgbWluWm9vbUxldmVsICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoX29wdGlvbnMucGluY2hUb0Nsb3NlICYmICFfd2FzT3ZlckluaXRpYWxab29tICYmIF9zdGFydFpvb21MZXZlbCA8PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdFx0XHQvLyBmYWRlIG91dCBiYWNrZ3JvdW5kIGlmIHpvb21pbmcgb3V0XG5cdFx0XHRcdFx0dmFyIG1pbnVzRGlmZiA9IG1pblpvb21MZXZlbCAtIHpvb21MZXZlbDtcblx0XHRcdFx0XHR2YXIgcGVyY2VudCA9IDEgLSBtaW51c0RpZmYgLyAobWluWm9vbUxldmVsIC8gMS4yKTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eShwZXJjZW50KTtcblx0XHRcdFx0XHRfc2hvdXQoJ29uUGluY2hDbG9zZScsIHBlcmNlbnQpO1xuXHRcdFx0XHRcdF9vcGFjaXR5Q2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gKG1pblpvb21MZXZlbCAtIHpvb21MZXZlbCkgLyBtaW5ab29tTGV2ZWw7XG5cdFx0XHRcdFx0aWYoem9vbUZyaWN0aW9uID4gMSkge1xuXHRcdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0em9vbUxldmVsID0gbWluWm9vbUxldmVsIC0gem9vbUZyaWN0aW9uICogKG1pblpvb21MZXZlbCAvIDMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICggem9vbUxldmVsID4gbWF4Wm9vbUxldmVsICkge1xuXHRcdFx0XHQvLyAxLjUgLSBleHRyYSB6b29tIGxldmVsIGFib3ZlIHRoZSBtYXguIEUuZy4gaWYgbWF4IGlzIHg2LCByZWFsIG1heCA2ICsgMS41ID0gNy41XG5cdFx0XHRcdHpvb21GcmljdGlvbiA9ICh6b29tTGV2ZWwgLSBtYXhab29tTGV2ZWwpIC8gKCBtaW5ab29tTGV2ZWwgKiA2ICk7XG5cdFx0XHRcdGlmKHpvb21GcmljdGlvbiA+IDEpIHtcblx0XHRcdFx0XHR6b29tRnJpY3Rpb24gPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHpvb21MZXZlbCA9IG1heFpvb21MZXZlbCArIHpvb21GcmljdGlvbiAqIG1pblpvb21MZXZlbDtcblx0XHRcdH1cblxuXHRcdFx0aWYoem9vbUZyaWN0aW9uIDwgMCkge1xuXHRcdFx0XHR6b29tRnJpY3Rpb24gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBkaXN0YW5jZSBiZXR3ZWVuIHRvdWNoIHBvaW50cyBhZnRlciBmcmljdGlvbiBpcyBhcHBsaWVkXG5cdFx0XHRfY3VyclBvaW50c0Rpc3RhbmNlID0gcG9pbnRzRGlzdGFuY2U7XG5cblx0XHRcdC8vIF9jZW50ZXJQb2ludCAtIFRoZSBwb2ludCBpbiB0aGUgbWlkZGxlIG9mIHR3byBwb2ludGVyc1xuXHRcdFx0X2ZpbmRDZW50ZXJPZlBvaW50cyhwLCBwMiwgX2NlbnRlclBvaW50KTtcblx0XHRcblx0XHRcdC8vIHBhbmluZyB3aXRoIHR3byBwb2ludGVycyBwcmVzc2VkXG5cdFx0XHRfY3VyclBhbkRpc3QueCArPSBfY2VudGVyUG9pbnQueCAtIF9jdXJyQ2VudGVyUG9pbnQueDtcblx0XHRcdF9jdXJyUGFuRGlzdC55ICs9IF9jZW50ZXJQb2ludC55IC0gX2N1cnJDZW50ZXJQb2ludC55O1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9jdXJyQ2VudGVyUG9pbnQsIF9jZW50ZXJQb2ludCk7XG5cblx0XHRcdF9wYW5PZmZzZXQueCA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoJ3gnLCB6b29tTGV2ZWwpO1xuXHRcdFx0X3Bhbk9mZnNldC55ID0gX2NhbGN1bGF0ZVBhbk9mZnNldCgneScsIHpvb21MZXZlbCk7XG5cblx0XHRcdF9pc1pvb21pbmdJbiA9IHpvb21MZXZlbCA+IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X2N1cnJab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gaGFuZGxlIGJlaGF2aW91ciBmb3Igb25lIHBvaW50IChkcmFnZ2luZyBvciBwYW5uaW5nKVxuXG5cdFx0XHRpZighX2RpcmVjdGlvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9pc0ZpcnN0TW92ZSkge1xuXHRcdFx0XHRfaXNGaXJzdE1vdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBzdWJ0cmFjdCBkcmFnIGRpc3RhbmNlIHRoYXQgd2FzIHVzZWQgZHVyaW5nIHRoZSBkZXRlY3Rpb24gZGlyZWN0aW9uICBcblxuXHRcdFx0XHRpZiggTWF0aC5hYnMoZGVsdGEueCkgPj0gRElSRUNUSU9OX0NIRUNLX09GRlNFVCkge1xuXHRcdFx0XHRcdGRlbHRhLnggLT0gX2N1cnJlbnRQb2ludHNbMF0ueCAtIF9zdGFydFBvaW50Lng7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKCBNYXRoLmFicyhkZWx0YS55KSA+PSBESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUKSB7XG5cdFx0XHRcdFx0ZGVsdGEueSAtPSBfY3VycmVudFBvaW50c1swXS55IC0gX3N0YXJ0UG9pbnQueTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY3VyclBvaW50LnggPSBwLng7XG5cdFx0XHRfY3VyclBvaW50LnkgPSBwLnk7XG5cblx0XHRcdC8vIGRvIG5vdGhpbmcgaWYgcG9pbnRlcnMgcG9zaXRpb24gaGFzbid0IGNoYW5nZWRcblx0XHRcdGlmKGRlbHRhLnggPT09IDAgJiYgZGVsdGEueSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9kaXJlY3Rpb24gPT09ICd2JyAmJiBfb3B0aW9ucy5jbG9zZU9uVmVydGljYWxEcmFnKSB7XG5cdFx0XHRcdGlmKCFfY2FuUGFuKCkpIHtcblx0XHRcdFx0XHRfY3VyclBhbkRpc3QueSArPSBkZWx0YS55O1xuXHRcdFx0XHRcdF9wYW5PZmZzZXQueSArPSBkZWx0YS55O1xuXG5cdFx0XHRcdFx0dmFyIG9wYWNpdHlSYXRpbyA9IF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8oKTtcblxuXHRcdFx0XHRcdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdF9zaG91dCgnb25WZXJ0aWNhbERyYWcnLCBvcGFjaXR5UmF0aW8pO1xuXG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KG9wYWNpdHlSYXRpbyk7XG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRyZXR1cm4gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9wdXNoUG9zUG9pbnQoX2dldEN1cnJlbnRUaW1lKCksIHAueCwgcC55KTtcblxuXHRcdFx0X21vdmVkID0gdHJ1ZTtcblx0XHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XG5cdFx0XHRcblx0XHRcdHZhciBtYWluU2Nyb2xsQ2hhbmdlZCA9IF9wYW5Pck1vdmVNYWluU2Nyb2xsKCd4JywgZGVsdGEpO1xuXHRcdFx0aWYoIW1haW5TY3JvbGxDaGFuZ2VkKSB7XG5cdFx0XHRcdF9wYW5Pck1vdmVNYWluU2Nyb2xsKCd5JywgZGVsdGEpO1xuXG5cdFx0XHRcdF9yb3VuZFBvaW50KF9wYW5PZmZzZXQpO1xuXHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0sXG5cdFxuXHQvLyBQb2ludGVydXAvcG9pbnRlcmNhbmNlbC90b3VjaGVuZC90b3VjaGNhbmNlbC9tb3VzZXVwIGV2ZW50IGhhbmRsZXJcblx0X29uRHJhZ1JlbGVhc2UgPSBmdW5jdGlvbihlKSB7XG5cblx0XHRpZihfZmVhdHVyZXMuaXNPbGRBbmRyb2lkICkge1xuXG5cdFx0XHRpZihfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCAmJiBlLnR5cGUgPT09ICdtb3VzZXVwJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG9uIEFuZHJvaWQgKHY0LjEsIDQuMiwgNC4zICYgcG9zc2libHkgb2xkZXIpIFxuXHRcdFx0Ly8gZ2hvc3QgbW91c2Vkb3duL3VwIGV2ZW50IGlzbid0IHByZXZlbnRhYmxlIHZpYSBlLnByZXZlbnREZWZhdWx0LFxuXHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGZha2UgbW91c2Vkb3duIGV2ZW50XG5cdFx0XHQvLyBzbyB3ZSBibG9jayBtb3VzZWRvd24vdXAgZm9yIDYwMG1zXG5cdFx0XHRpZiggZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSApIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0KTtcblx0XHRcdFx0X29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ID0gMDtcblx0XHRcdFx0fSwgNjAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdF9zaG91dCgncG9pbnRlclVwJyk7XG5cblx0XHRpZihfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91cihlLCBmYWxzZSkpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcmVsZWFzZVBvaW50O1xuXG5cdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdHZhciBwb2ludGVySW5kZXggPSBmcmFtZXdvcmsuYXJyYXlTZWFyY2goX2N1cnJQb2ludGVycywgZS5wb2ludGVySWQsICdpZCcpO1xuXHRcdFx0XG5cdFx0XHRpZihwb2ludGVySW5kZXggPiAtMSkge1xuXHRcdFx0XHRyZWxlYXNlUG9pbnQgPSBfY3VyclBvaW50ZXJzLnNwbGljZShwb2ludGVySW5kZXgsIDEpWzBdO1xuXG5cdFx0XHRcdGlmKG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG5cdFx0XHRcdFx0dmFyIE1TUE9JTlRFUl9UWVBFUyA9IHtcblx0XHRcdFx0XHRcdDQ6ICdtb3VzZScsIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX01PVVNFXG5cdFx0XHRcdFx0XHQyOiAndG91Y2gnLCAvLyBldmVudC5NU1BPSU5URVJfVFlQRV9UT1VDSCBcblx0XHRcdFx0XHRcdDM6ICdwZW4nIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1BFTlxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50LnR5cGUgPSBNU1BPSU5URVJfVFlQRVNbZS5wb2ludGVyVHlwZV07XG5cblx0XHRcdFx0XHRpZighcmVsZWFzZVBvaW50LnR5cGUpIHtcblx0XHRcdFx0XHRcdHJlbGVhc2VQb2ludC50eXBlID0gZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJztcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHRvdWNoTGlzdCA9IF9nZXRUb3VjaFBvaW50cyhlKSxcblx0XHRcdGdlc3R1cmVUeXBlLFxuXHRcdFx0bnVtUG9pbnRzID0gdG91Y2hMaXN0Lmxlbmd0aDtcblxuXHRcdGlmKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG5cdFx0XHRudW1Qb2ludHMgPSAwO1xuXHRcdH1cblxuXHRcdC8vIERvIG5vdGhpbmcgaWYgdGhlcmUgd2VyZSAzIHRvdWNoIHBvaW50cyBvciBtb3JlXG5cdFx0aWYobnVtUG9pbnRzID09PSAyKSB7XG5cdFx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBzZWNvbmQgcG9pbnRlciByZWxlYXNlZFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMSkge1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBvaW50LCB0b3VjaExpc3RbMF0pO1xuXHRcdH1cdFx0XHRcdFxuXG5cblx0XHQvLyBwb2ludGVyIGhhc24ndCBtb3ZlZCwgc2VuZCBcInRhcCByZWxlYXNlXCIgcG9pbnRcblx0XHRpZihudW1Qb2ludHMgPT09IDAgJiYgIV9kaXJlY3Rpb24gJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRpZighcmVsZWFzZVBvaW50KSB7XG5cdFx0XHRcdGlmKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50ID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVksIHR5cGU6J21vdXNlJ307XG5cdFx0XHRcdH0gZWxzZSBpZihlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQgPSB7eDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCwgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSwgdHlwZTondG91Y2gnfTtcblx0XHRcdFx0fVx0XHRcblx0XHRcdH1cblxuXHRcdFx0X3Nob3V0KCd0b3VjaFJlbGVhc2UnLCBlLCByZWxlYXNlUG9pbnQpO1xuXHRcdH1cblxuXHRcdC8vIERpZmZlcmVuY2UgaW4gdGltZSBiZXR3ZWVuIHJlbGVhc2luZyBvZiB0d28gbGFzdCB0b3VjaCBwb2ludHMgKHpvb20gZ2VzdHVyZSlcblx0XHR2YXIgcmVsZWFzZVRpbWVEaWZmID0gLTE7XG5cblx0XHQvLyBHZXN0dXJlIGNvbXBsZXRlZCwgbm8gcG9pbnRlcnMgbGVmdFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMCkge1xuXHRcdFx0X2lzRHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblxuXHRcdFx0X3N0b3BEcmFnVXBkYXRlTG9vcCgpO1xuXG5cdFx0XHRpZihfaXNab29taW5nKSB7XG5cdFx0XHRcdC8vIFR3byBwb2ludHMgcmVsZWFzZWQgYXQgdGhlIHNhbWUgdGltZVxuXHRcdFx0XHRyZWxlYXNlVGltZURpZmYgPSAwO1xuXHRcdFx0fSBlbHNlIGlmKF9sYXN0UmVsZWFzZVRpbWUgIT09IC0xKSB7XG5cdFx0XHRcdHJlbGVhc2VUaW1lRGlmZiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2xhc3RSZWxlYXNlVGltZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X2xhc3RSZWxlYXNlVGltZSA9IG51bVBvaW50cyA9PT0gMSA/IF9nZXRDdXJyZW50VGltZSgpIDogLTE7XG5cdFx0XG5cdFx0aWYocmVsZWFzZVRpbWVEaWZmICE9PSAtMSAmJiByZWxlYXNlVGltZURpZmYgPCAxNTApIHtcblx0XHRcdGdlc3R1cmVUeXBlID0gJ3pvb20nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXN0dXJlVHlwZSA9ICdzd2lwZSc7XG5cdFx0fVxuXG5cdFx0aWYoX2lzWm9vbWluZyAmJiBudW1Qb2ludHMgPCAyKSB7XG5cdFx0XHRfaXNab29taW5nID0gZmFsc2U7XG5cblx0XHRcdC8vIE9ubHkgc2Vjb25kIHBvaW50IHJlbGVhc2VkXG5cdFx0XHRpZihudW1Qb2ludHMgPT09IDEpIHtcblx0XHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbVBvaW50ZXJVcCc7XG5cdFx0XHR9XG5cdFx0XHRfc2hvdXQoJ3pvb21HZXN0dXJlRW5kZWQnKTtcblx0XHR9XG5cblx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cdFx0aWYoIV9tb3ZlZCAmJiAhX3pvb21TdGFydGVkICYmICFfbWFpblNjcm9sbEFuaW1hdGluZyAmJiAhX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXHRcdFx0Ly8gbm90aGluZyB0byBhbmltYXRlXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdFxuXHRcdGlmKCFfcmVsZWFzZUFuaW1EYXRhKSB7XG5cdFx0XHRfcmVsZWFzZUFuaW1EYXRhID0gX2luaXREcmFnUmVsZWFzZUFuaW1hdGlvbkRhdGEoKTtcblx0XHR9XG5cdFx0XG5cdFx0X3JlbGVhc2VBbmltRGF0YS5jYWxjdWxhdGVTd2lwZVNwZWVkKCd4Jyk7XG5cblxuXHRcdGlmKF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQpIHtcblxuXHRcdFx0dmFyIG9wYWNpdHlSYXRpbyA9IF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8oKTtcblxuXHRcdFx0aWYob3BhY2l0eVJhdGlvIDwgX29wdGlvbnMudmVydGljYWxEcmFnUmFuZ2UpIHtcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGluaXRhbFBhblkgPSBfcGFuT2Zmc2V0LnksXG5cdFx0XHRcdFx0aW5pdGlhbEJnT3BhY2l0eSA9IF9iZ09wYWNpdHk7XG5cblx0XHRcdFx0X2FuaW1hdGVQcm9wKCd2ZXJ0aWNhbERyYWcnLCAwLCAxLCAzMDAsIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSAoc2VsZi5jdXJySXRlbS5pbml0aWFsUG9zaXRpb24ueSAtIGluaXRhbFBhblkpICogbm93ICsgaW5pdGFsUGFuWTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggICgxIC0gaW5pdGlhbEJnT3BhY2l0eSkgKiBub3cgKyBpbml0aWFsQmdPcGFjaXR5ICk7XG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0X3Nob3V0KCdvblZlcnRpY2FsRHJhZycsIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cblx0XHQvLyBtYWluIHNjcm9sbCBcblx0XHRpZiggIChfbWFpblNjcm9sbFNoaWZ0ZWQgfHwgX21haW5TY3JvbGxBbmltYXRpbmcpICYmIG51bVBvaW50cyA9PT0gMCkge1xuXHRcdFx0dmFyIGl0ZW1DaGFuZ2VkID0gX2ZpbmlzaFN3aXBlTWFpblNjcm9sbEdlc3R1cmUoZ2VzdHVyZVR5cGUsIF9yZWxlYXNlQW5pbURhdGEpO1xuXHRcdFx0aWYoaXRlbUNoYW5nZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbVBvaW50ZXJVcCc7XG5cdFx0fVxuXG5cdFx0Ly8gcHJldmVudCB6b29tL3BhbiBhbmltYXRpb24gd2hlbiBtYWluIHNjcm9sbCBhbmltYXRpb24gcnVuc1xuXHRcdGlmKF9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdC8vIENvbXBsZXRlIHNpbXBsZSB6b29tIGdlc3R1cmUgKHJlc2V0IHpvb20gbGV2ZWwgaWYgaXQncyBvdXQgb2YgdGhlIGJvdW5kcykgIFxuXHRcdGlmKGdlc3R1cmVUeXBlICE9PSAnc3dpcGUnKSB7XG5cdFx0XHRfY29tcGxldGVab29tR2VzdHVyZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdFx0Ly8gQ29tcGxldGUgcGFuIGdlc3R1cmUgaWYgbWFpbiBzY3JvbGwgaXMgbm90IHNoaWZ0ZWQsIGFuZCBpdCdzIHBvc3NpYmxlIHRvIHBhbiBjdXJyZW50IGltYWdlXG5cdFx0aWYoIV9tYWluU2Nyb2xsU2hpZnRlZCAmJiBfY3Vyclpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdF9jb21wbGV0ZVBhbkdlc3R1cmUoX3JlbGVhc2VBbmltRGF0YSk7XG5cdFx0fVxuXHR9LFxuXG5cblx0Ly8gUmV0dXJucyBvYmplY3Qgd2l0aCBkYXRhIGFib3V0IGdlc3R1cmVcblx0Ly8gSXQncyBjcmVhdGVkIG9ubHkgb25jZSBhbmQgdGhlbiByZXVzZWRcblx0X2luaXREcmFnUmVsZWFzZUFuaW1hdGlvbkRhdGEgID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGVtcCBsb2NhbCB2YXJzXG5cdFx0dmFyIGxhc3RGbGlja0R1cmF0aW9uLFxuXHRcdFx0dGVtcFJlbGVhc2VQb3M7XG5cblx0XHQvLyBzID0gdGhpc1xuXHRcdHZhciBzID0ge1xuXHRcdFx0bGFzdEZsaWNrT2Zmc2V0OiB7fSxcblx0XHRcdGxhc3RGbGlja0Rpc3Q6IHt9LFxuXHRcdFx0bGFzdEZsaWNrU3BlZWQ6IHt9LFxuXHRcdFx0c2xvd0Rvd25SYXRpbzogIHt9LFxuXHRcdFx0c2xvd0Rvd25SYXRpb1JldmVyc2U6ICB7fSxcblx0XHRcdHNwZWVkRGVjZWxlcmF0aW9uUmF0aW86ICB7fSxcblx0XHRcdHNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnM6ICB7fSxcblx0XHRcdGRpc3RhbmNlT2Zmc2V0OiAge30sXG5cdFx0XHRiYWNrQW5pbURlc3RpbmF0aW9uOiB7fSxcblx0XHRcdGJhY2tBbmltU3RhcnRlZDoge30sXG5cdFx0XHRjYWxjdWxhdGVTd2lwZVNwZWVkOiBmdW5jdGlvbihheGlzKSB7XG5cdFx0XHRcdFxuXG5cdFx0XHRcdGlmKCBfcG9zUG9pbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRsYXN0RmxpY2tEdXJhdGlvbiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2dlc3R1cmVDaGVja1NwZWVkVGltZSArIDUwO1xuXHRcdFx0XHRcdHRlbXBSZWxlYXNlUG9zID0gX3Bvc1BvaW50c1tfcG9zUG9pbnRzLmxlbmd0aC0yXVtheGlzXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsYXN0RmxpY2tEdXJhdGlvbiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2dlc3R1cmVTdGFydFRpbWU7IC8vIHRvdGFsIGdlc3R1cmUgZHVyYXRpb25cblx0XHRcdFx0XHR0ZW1wUmVsZWFzZVBvcyA9IF9zdGFydFBvaW50W2F4aXNdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdID0gX2N1cnJQb2ludFtheGlzXSAtIHRlbXBSZWxlYXNlUG9zO1xuXHRcdFx0XHRzLmxhc3RGbGlja0Rpc3RbYXhpc10gPSBNYXRoLmFicyhzLmxhc3RGbGlja09mZnNldFtheGlzXSk7XG5cdFx0XHRcdGlmKHMubGFzdEZsaWNrRGlzdFtheGlzXSA+IDIwKSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdIC8gbGFzdEZsaWNrRHVyYXRpb247XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoIE1hdGguYWJzKHMubGFzdEZsaWNrU3BlZWRbYXhpc10pIDwgMC4xICkge1xuXHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzLnNsb3dEb3duUmF0aW9bYXhpc10gPSAwLjk1O1xuXHRcdFx0XHRzLnNsb3dEb3duUmF0aW9SZXZlcnNlW2F4aXNdID0gMSAtIHMuc2xvd0Rvd25SYXRpb1theGlzXTtcblx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdID0gMTtcblx0XHRcdH0sXG5cblx0XHRcdGNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0OiBmdW5jdGlvbihheGlzLCBzcGVlZCkge1xuXHRcdFx0XHRpZighcy5iYWNrQW5pbVN0YXJ0ZWRbYXhpc10pIHtcblxuXHRcdFx0XHRcdGlmKF9wYW5PZmZzZXRbYXhpc10gPiBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10pIHtcblx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSA9IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSBpZihfcGFuT2Zmc2V0W2F4aXNdIDwgX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdKSB7XG5cdFx0XHRcdFx0XHRzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10gPSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYocy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1theGlzXSA9IDAuNztcblx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gPSAxIC0gcy5zbG93RG93blJhdGlvW2F4aXNdO1xuXHRcdFx0XHRcdFx0aWYocy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzW2F4aXNdIDwgMC4wNSkge1xuXG5cdFx0XHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSAwO1xuXHRcdFx0XHRcdFx0XHRzLmJhY2tBbmltU3RhcnRlZFtheGlzXSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0X2FuaW1hdGVQcm9wKCdib3VuY2Vab29tUGFuJytheGlzLF9wYW5PZmZzZXRbYXhpc10sIFxuXHRcdFx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSwgXG5cdFx0XHRcdFx0XHRcdFx0c3BlZWQgfHwgMzAwLCBcblx0XHRcdFx0XHRcdFx0XHRmcmFtZXdvcmsuZWFzaW5nLnNpbmUub3V0LCBcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihwb3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gPSBwb3M7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVkdWNlcyB0aGUgc3BlZWQgYnkgc2xvd0Rvd25SYXRpbyAocGVyIDEwbXMpXG5cdFx0XHRjYWxjdWxhdGVBbmltT2Zmc2V0OiBmdW5jdGlvbihheGlzKSB7XG5cdFx0XHRcdGlmKCFzLmJhY2tBbmltU3RhcnRlZFtheGlzXSkge1xuXHRcdFx0XHRcdHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSA9IHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSAqIChzLnNsb3dEb3duUmF0aW9bYXhpc10gKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gLSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gKiBzLnRpbWVEaWZmIC8gMTApO1xuXG5cdFx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzW2F4aXNdID0gTWF0aC5hYnMocy5sYXN0RmxpY2tTcGVlZFtheGlzXSAqIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSk7XG5cdFx0XHRcdFx0cy5kaXN0YW5jZU9mZnNldFtheGlzXSA9IHMubGFzdEZsaWNrU3BlZWRbYXhpc10gKiBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gKiBzLnRpbWVEaWZmO1xuXHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gKz0gcy5kaXN0YW5jZU9mZnNldFtheGlzXTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRwYW5BbmltTG9vcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggX2FuaW1hdGlvbnMuem9vbVBhbiApIHtcblx0XHRcdFx0XHRfYW5pbWF0aW9ucy56b29tUGFuLnJhZiA9IF9yZXF1ZXN0QUYocy5wYW5BbmltTG9vcCk7XG5cblx0XHRcdFx0XHRzLm5vdyA9IF9nZXRDdXJyZW50VGltZSgpO1xuXHRcdFx0XHRcdHMudGltZURpZmYgPSBzLm5vdyAtIHMubGFzdE5vdztcblx0XHRcdFx0XHRzLmxhc3ROb3cgPSBzLm5vdztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZUFuaW1PZmZzZXQoJ3gnKTtcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZUFuaW1PZmZzZXQoJ3knKTtcblxuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0XHRcdHMuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3knKTtcblxuXG5cdFx0XHRcdFx0aWYgKHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy54IDwgMC4wNSAmJiBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueSA8IDAuMDUpIHtcblxuXHRcdFx0XHRcdFx0Ly8gcm91bmQgcGFuIHBvc2l0aW9uXG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSBNYXRoLnJvdW5kKF9wYW5PZmZzZXQueCk7XG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSBNYXRoLnJvdW5kKF9wYW5PZmZzZXQueSk7XG5cdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfc3RvcEFuaW1hdGlvbignem9vbVBhbicpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcztcblx0fSxcblxuXHRfY29tcGxldGVQYW5HZXN0dXJlID0gZnVuY3Rpb24oYW5pbURhdGEpIHtcblx0XHQvLyBjYWxjdWxhdGUgc3dpcGUgc3BlZWQgZm9yIFkgYXhpcyAocGFhbm5pbmcpXG5cdFx0YW5pbURhdGEuY2FsY3VsYXRlU3dpcGVTcGVlZCgneScpO1xuXG5cdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcblx0XHRcblx0XHRhbmltRGF0YS5iYWNrQW5pbURlc3RpbmF0aW9uID0ge307XG5cdFx0YW5pbURhdGEuYmFja0FuaW1TdGFydGVkID0ge307XG5cblx0XHQvLyBBdm9pZCBhY2NlbGVyYXRpb24gYW5pbWF0aW9uIGlmIHNwZWVkIGlzIHRvbyBsb3dcblx0XHRpZihNYXRoLmFicyhhbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54KSA8PSAwLjA1ICYmIE1hdGguYWJzKGFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLnkpIDw9IDAuMDUgKSB7XG5cdFx0XHRhbmltRGF0YS5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnggPSBhbmltRGF0YS5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnkgPSAwO1xuXG5cdFx0XHQvLyBSdW4gcGFuIGRyYWcgcmVsZWFzZSBhbmltYXRpb24uIEUuZy4gaWYgeW91IGRyYWcgaW1hZ2UgYW5kIHJlbGVhc2UgZmluZ2VyIHdpdGhvdXQgbW9tZW50dW0uXG5cdFx0XHRhbmltRGF0YS5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0YW5pbURhdGEuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3knKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEFuaW1hdGlvbiBsb29wIHRoYXQgY29udHJvbHMgdGhlIGFjY2VsZXJhdGlvbiBhZnRlciBwYW4gZ2VzdHVyZSBlbmRzXG5cdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24oJ3pvb21QYW4nKTtcblx0XHRhbmltRGF0YS5sYXN0Tm93ID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cdFx0YW5pbURhdGEucGFuQW5pbUxvb3AoKTtcblx0fSxcblxuXG5cdF9maW5pc2hTd2lwZU1haW5TY3JvbGxHZXN0dXJlID0gZnVuY3Rpb24oZ2VzdHVyZVR5cGUsIF9yZWxlYXNlQW5pbURhdGEpIHtcblx0XHR2YXIgaXRlbUNoYW5nZWQ7XG5cdFx0aWYoIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRfY3Vyclpvb21lZEl0ZW1JbmRleCA9IF9jdXJyZW50SXRlbUluZGV4O1xuXHRcdH1cblxuXG5cdFx0XG5cdFx0dmFyIGl0ZW1zRGlmZjtcblxuXHRcdGlmKGdlc3R1cmVUeXBlID09PSAnc3dpcGUnKSB7XG5cdFx0XHR2YXIgdG90YWxTaGlmdERpc3QgPSBfY3VyclBvaW50LnggLSBfc3RhcnRQb2ludC54LFxuXHRcdFx0XHRpc0Zhc3RMYXN0RmxpY2sgPSBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja0Rpc3QueCA8IDEwO1xuXG5cdFx0XHQvLyBpZiBjb250YWluZXIgaXMgc2hpZnRlZCBmb3IgbW9yZSB0aGFuIE1JTl9TV0lQRV9ESVNUQU5DRSwgXG5cdFx0XHQvLyBhbmQgbGFzdCBmbGljayBnZXN0dXJlIHdhcyBpbiByaWdodCBkaXJlY3Rpb25cblx0XHRcdGlmKHRvdGFsU2hpZnREaXN0ID4gTUlOX1NXSVBFX0RJU1RBTkNFICYmIFxuXHRcdFx0XHQoaXNGYXN0TGFzdEZsaWNrIHx8IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrT2Zmc2V0LnggPiAyMCkgKSB7XG5cdFx0XHRcdC8vIGdvIHRvIHByZXYgaXRlbVxuXHRcdFx0XHRpdGVtc0RpZmYgPSAtMTtcblx0XHRcdH0gZWxzZSBpZih0b3RhbFNoaWZ0RGlzdCA8IC1NSU5fU1dJUEVfRElTVEFOQ0UgJiYgXG5cdFx0XHRcdChpc0Zhc3RMYXN0RmxpY2sgfHwgX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tPZmZzZXQueCA8IC0yMCkgKSB7XG5cdFx0XHRcdC8vIGdvIHRvIG5leHQgaXRlbVxuXHRcdFx0XHRpdGVtc0RpZmYgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBuZXh0Q2lyY2xlO1xuXG5cdFx0aWYoaXRlbXNEaWZmKSB7XG5cdFx0XHRcblx0XHRcdF9jdXJyZW50SXRlbUluZGV4ICs9IGl0ZW1zRGlmZjtcblxuXHRcdFx0aWYoX2N1cnJlbnRJdGVtSW5kZXggPCAwKSB7XG5cdFx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX29wdGlvbnMubG9vcCA/IF9nZXROdW1JdGVtcygpLTEgOiAwO1xuXHRcdFx0XHRuZXh0Q2lyY2xlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZihfY3VycmVudEl0ZW1JbmRleCA+PSBfZ2V0TnVtSXRlbXMoKSkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9vcHRpb25zLmxvb3AgPyAwIDogX2dldE51bUl0ZW1zKCktMTtcblx0XHRcdFx0bmV4dENpcmNsZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFuZXh0Q2lyY2xlIHx8IF9vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0X2luZGV4RGlmZiArPSBpdGVtc0RpZmY7XG5cdFx0XHRcdF9jdXJyUG9zaXRpb25JbmRleCAtPSBpdGVtc0RpZmY7XG5cdFx0XHRcdGl0ZW1DaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRcblx0XHR9XG5cblx0XHR2YXIgYW5pbWF0ZVRvWCA9IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleDtcblx0XHR2YXIgYW5pbWF0ZVRvRGlzdCA9IE1hdGguYWJzKCBhbmltYXRlVG9YIC0gX21haW5TY3JvbGxQb3MueCApO1xuXHRcdHZhciBmaW5pc2hBbmltRHVyYXRpb247XG5cblxuXHRcdGlmKCFpdGVtQ2hhbmdlZCAmJiBhbmltYXRlVG9YID4gX21haW5TY3JvbGxQb3MueCAhPT0gX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54ID4gMCkge1xuXHRcdFx0Ly8gXCJyZXR1cm4gdG8gY3VycmVudFwiIGR1cmF0aW9uLCBlLmcuIHdoZW4gZHJhZ2dpbmcgZnJvbSBzbGlkZSAwIHRvIC0xXG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSAzMzM7IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLmFicyhfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLngpID4gMCA/IFxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVRvRGlzdCAvIE1hdGguYWJzKF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCkgOiBcblx0XHRcdFx0XHRcdFx0XHRcdDMzMztcblxuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gTWF0aC5taW4oZmluaXNoQW5pbUR1cmF0aW9uLCA0MDApO1xuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gTWF0aC5tYXgoZmluaXNoQW5pbUR1cmF0aW9uLCAyNTApO1xuXHRcdH1cblxuXHRcdGlmKF9jdXJyWm9vbWVkSXRlbUluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0aXRlbUNoYW5nZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0X21haW5TY3JvbGxBbmltYXRpbmcgPSB0cnVlO1xuXHRcdFxuXHRcdF9zaG91dCgnbWFpblNjcm9sbEFuaW1TdGFydCcpO1xuXG5cdFx0X2FuaW1hdGVQcm9wKCdtYWluU2Nyb2xsJywgX21haW5TY3JvbGxQb3MueCwgYW5pbWF0ZVRvWCwgZmluaXNoQW5pbUR1cmF0aW9uLCBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgXG5cdFx0XHRfbW92ZU1haW5TY3JvbGwsXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cdFx0XHRcdF9tYWluU2Nyb2xsQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHRcdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gLTE7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihpdGVtQ2hhbmdlZCB8fCBfY3Vyclpvb21lZEl0ZW1JbmRleCAhPT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdF9zaG91dCgnbWFpblNjcm9sbEFuaW1Db21wbGV0ZScpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZihpdGVtQ2hhbmdlZCkge1xuXHRcdFx0c2VsZi51cGRhdGVDdXJySXRlbSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlbUNoYW5nZWQ7XG5cdH0sXG5cblx0X2NhbGN1bGF0ZVpvb21MZXZlbCA9IGZ1bmN0aW9uKHRvdWNoZXNEaXN0YW5jZSkge1xuXHRcdHJldHVybiAgMSAvIF9zdGFydFBvaW50c0Rpc3RhbmNlICogdG91Y2hlc0Rpc3RhbmNlICogX3N0YXJ0Wm9vbUxldmVsO1xuXHR9LFxuXG5cdC8vIFJlc2V0cyB6b29tIGlmIGl0J3Mgb3V0IG9mIGJvdW5kc1xuXHRfY29tcGxldGVab29tR2VzdHVyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkZXN0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwsXG5cdFx0XHRtaW5ab29tTGV2ZWwgPSBfZ2V0TWluWm9vbUxldmVsKCksXG5cdFx0XHRtYXhab29tTGV2ZWwgPSBfZ2V0TWF4Wm9vbUxldmVsKCk7XG5cblx0XHRpZiAoIF9jdXJyWm9vbUxldmVsIDwgbWluWm9vbUxldmVsICkge1xuXHRcdFx0ZGVzdFpvb21MZXZlbCA9IG1pblpvb21MZXZlbDtcblx0XHR9IGVsc2UgaWYgKCBfY3Vyclpvb21MZXZlbCA+IG1heFpvb21MZXZlbCApIHtcblx0XHRcdGRlc3Rab29tTGV2ZWwgPSBtYXhab29tTGV2ZWw7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc3RPcGFjaXR5ID0gMSxcblx0XHRcdG9uVXBkYXRlLFxuXHRcdFx0aW5pdGlhbE9wYWNpdHkgPSBfYmdPcGFjaXR5O1xuXG5cdFx0aWYoX29wYWNpdHlDaGFuZ2VkICYmICFfaXNab29taW5nSW4gJiYgIV93YXNPdmVySW5pdGlhbFpvb20gJiYgX2N1cnJab29tTGV2ZWwgPCBtaW5ab29tTGV2ZWwpIHtcblx0XHRcdC8vX2Nsb3NlZEJ5U2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmKF9vcGFjaXR5Q2hhbmdlZCkge1xuXHRcdFx0b25VcGRhdGUgPSBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KCAgKGRlc3RPcGFjaXR5IC0gaW5pdGlhbE9wYWNpdHkpICogbm93ICsgaW5pdGlhbE9wYWNpdHkgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0c2VsZi56b29tVG8oZGVzdFpvb21MZXZlbCwgMCwgMjAwLCAgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIG9uVXBkYXRlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5fcmVnaXN0ZXJNb2R1bGUoJ0dlc3R1cmVzJywge1xuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRpbml0R2VzdHVyZXM6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdGhhdCBidWlsZHMgdG91Y2gvcG9pbnRlci9tb3VzZSBldmVudHNcblx0XHRcdHZhciBhZGRFdmVudE5hbWVzID0gZnVuY3Rpb24ocHJlZiwgZG93biwgbW92ZSwgdXAsIGNhbmNlbCkge1xuXHRcdFx0XHRfZHJhZ1N0YXJ0RXZlbnQgPSBwcmVmICsgZG93bjtcblx0XHRcdFx0X2RyYWdNb3ZlRXZlbnQgPSBwcmVmICsgbW92ZTtcblx0XHRcdFx0X2RyYWdFbmRFdmVudCA9IHByZWYgKyB1cDtcblx0XHRcdFx0aWYoY2FuY2VsKSB7XG5cdFx0XHRcdFx0X2RyYWdDYW5jZWxFdmVudCA9IHByZWYgKyBjYW5jZWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X2RyYWdDYW5jZWxFdmVudCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRfcG9pbnRlckV2ZW50RW5hYmxlZCA9IF9mZWF0dXJlcy5wb2ludGVyRXZlbnQ7XG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCAmJiBfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0b3VjaCBldmVudHMsIGlmIGJyb3dzZXIgc3VwcG9ydHMgcG9pbnRlciBldmVudHNcblx0XHRcdFx0X2ZlYXR1cmVzLnRvdWNoID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHRcdGlmKG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG5cdFx0XHRcdFx0Ly8gSUUxMCBwb2ludGVyIGV2ZW50cyBhcmUgY2FzZS1zZW5zaXRpdmVcblx0XHRcdFx0XHRhZGRFdmVudE5hbWVzKCdNU1BvaW50ZXInLCAnRG93bicsICdNb3ZlJywgJ1VwJywgJ0NhbmNlbCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ3BvaW50ZXInLCAnZG93bicsICdtb3ZlJywgJ3VwJywgJ2NhbmNlbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoX2ZlYXR1cmVzLnRvdWNoKSB7XG5cdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ3RvdWNoJywgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJywgJ2NhbmNlbCcpO1xuXHRcdFx0XHRfbGlrZWx5VG91Y2hEZXZpY2UgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkRXZlbnROYW1lcygnbW91c2UnLCAnZG93bicsICdtb3ZlJywgJ3VwJyk7XHRcblx0XHRcdH1cblxuXHRcdFx0X3VwTW92ZUV2ZW50cyA9IF9kcmFnTW92ZUV2ZW50ICsgJyAnICsgX2RyYWdFbmRFdmVudCAgKyAnICcgKyAgX2RyYWdDYW5jZWxFdmVudDtcblx0XHRcdF9kb3duRXZlbnRzID0gX2RyYWdTdGFydEV2ZW50O1xuXG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCAmJiAhX2xpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdF9saWtlbHlUb3VjaERldmljZSA9IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKTtcblx0XHRcdH1cblx0XHRcdC8vIG1ha2UgdmFyaWFibGUgcHVibGljXG5cdFx0XHRzZWxmLmxpa2VseVRvdWNoRGV2aWNlID0gX2xpa2VseVRvdWNoRGV2aWNlOyBcblx0XHRcdFxuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdTdGFydEV2ZW50XSA9IF9vbkRyYWdTdGFydDtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnTW92ZUV2ZW50XSA9IF9vbkRyYWdNb3ZlO1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF0gPSBfb25EcmFnUmVsZWFzZTsgLy8gdGhlIEtyYWtlblxuXG5cdFx0XHRpZihfZHJhZ0NhbmNlbEV2ZW50KSB7XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnQ2FuY2VsRXZlbnRdID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJpbmQgbW91c2UgZXZlbnRzIG9uIGRldmljZSB3aXRoIGRldGVjdGVkIGhhcmR3YXJlIHRvdWNoIHN1cHBvcnQsIGluIGNhc2UgaXQgc3VwcG9ydHMgbXVsdGlwbGUgdHlwZXMgb2YgaW5wdXQuXG5cdFx0XHRpZihfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0X2Rvd25FdmVudHMgKz0gJyBtb3VzZWRvd24nO1xuXHRcdFx0XHRfdXBNb3ZlRXZlbnRzICs9ICcgbW91c2Vtb3ZlIG1vdXNldXAnO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZWRvd24gPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ1N0YXJ0RXZlbnRdO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZW1vdmUgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ01vdmVFdmVudF07XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzLm1vdXNldXAgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0VuZEV2ZW50XTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBkb24ndCBhbGxvdyBwYW4gdG8gbmV4dCBzbGlkZSBmcm9tIHpvb21lZCBzdGF0ZSBvbiBEZXNrdG9wXG5cdFx0XHRcdF9vcHRpb25zLmFsbG93UGFuVG9OZXh0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cbi8qPj5nZXN0dXJlcyovXG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG4vKipcbiAqIHNob3ctaGlkZS10cmFuc2l0aW9uLmpzOlxuICpcbiAqIE1hbmFnZXMgaW5pdGlhbCBvcGVuaW5nIG9yIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiBJZiB5b3UncmUgbm90IHBsYW5uaW5nIHRvIHVzZSB0cmFuc2l0aW9uIGZvciBnYWxsZXJ5IGF0IGFsbCxcbiAqIHlvdSBtYXkgc2V0IG9wdGlvbnMgaGlkZUFuaW1hdGlvbkR1cmF0aW9uIGFuZCBzaG93QW5pbWF0aW9uRHVyYXRpb24gdG8gMCxcbiAqIGFuZCBqdXN0IGRlbGV0ZSBzdGFydEFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICovXG5cblxudmFyIF9zaG93T3JIaWRlVGltZW91dCxcblx0X3Nob3dPckhpZGUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG91dCwgY29tcGxldGVGbikge1xuXG5cdFx0aWYoX3Nob3dPckhpZGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3Nob3dPckhpZGVUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRfaW5pdGlhbFpvb21SdW5uaW5nID0gdHJ1ZTtcblx0XHRfaW5pdGlhbENvbnRlbnRTZXQgPSB0cnVlO1xuXHRcdFxuXHRcdC8vIGRpbWVuc2lvbnMgb2Ygc21hbGwgdGh1bWJuYWlsIHt4Oix5Oix3On0uXG5cdFx0Ly8gSGVpZ2h0IGlzIG9wdGlvbmFsLCBhcyBjYWxjdWxhdGVkIGJhc2VkIG9uIGxhcmdlIGltYWdlLlxuXHRcdHZhciB0aHVtYkJvdW5kczsgXG5cdFx0aWYoaXRlbS5pbml0aWFsTGF5b3V0KSB7XG5cdFx0XHR0aHVtYkJvdW5kcyA9IGl0ZW0uaW5pdGlhbExheW91dDtcblx0XHRcdGl0ZW0uaW5pdGlhbExheW91dCA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iQm91bmRzID0gX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbiAmJiBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuKF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHR9XG5cblx0XHR2YXIgZHVyYXRpb24gPSBvdXQgPyBfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gOiBfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb247XG5cblx0XHR2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0X3N0b3BBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRpZighb3V0KSB7XG5cdFx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblx0XHRcdFx0aWYoaW1nKSB7XG5cdFx0XHRcdFx0aW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXRFbmQnIDogJ0luRW5kJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi50ZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHRcdHNlbGYuYmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihjb21wbGV0ZUZuKSB7XG5cdFx0XHRcdGNvbXBsZXRlRm4oKTtcblx0XHRcdH1cblx0XHRcdF9pbml0aWFsWm9vbVJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gaWYgYm91bmRzIGFyZW4ndCBwcm92aWRlZCwganVzdCBvcGVuIGdhbGxlcnkgd2l0aG91dCBhbmltYXRpb25cblx0XHRpZighZHVyYXRpb24gfHwgIXRodW1iQm91bmRzIHx8IHRodW1iQm91bmRzLnggPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRfc2hvdXQoJ2luaXRpYWxab29tJyArIChvdXQgPyAnT3V0JyA6ICdJbicpICk7XG5cblx0XHRcdF9jdXJyWm9vbUxldmVsID0gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblxuXHRcdFx0dGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IG91dCA/IDAgOiAxO1xuXHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRpZihkdXJhdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdFx0fSwgZHVyYXRpb24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvc2VXaXRoUmFmID0gX2Nsb3NlZEJ5U2Nyb2xsLFxuXHRcdFx0XHRmYWRlRXZlcnl0aGluZyA9ICFzZWxmLmN1cnJJdGVtLnNyYyB8fCBzZWxmLmN1cnJJdGVtLmxvYWRFcnJvciB8fCBfb3B0aW9ucy5zaG93SGlkZU9wYWNpdHk7XG5cdFx0XHRcblx0XHRcdC8vIGFwcGx5IGh3LWFjY2VsZXJhdGlvbiB0byBpbWFnZVxuXHRcdFx0aWYoaXRlbS5taW5pSW1nKSB7XG5cdFx0XHRcdGl0ZW0ubWluaUltZy5zdHlsZS53ZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdH1cblxuXHRcdFx0aWYoIW91dCkge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLnc7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IHRodW1iQm91bmRzLnkgLSBfaW5pdGFsV2luZG93U2Nyb2xsWTtcblxuXHRcdFx0XHRzZWxmW2ZhZGVFdmVyeXRoaW5nID8gJ3RlbXBsYXRlJyA6ICdiZyddLnN0eWxlLm9wYWNpdHkgPSAwLjAwMTtcblx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdH1cblxuXHRcdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRcblx0XHRcdGlmKG91dCAmJiAhY2xvc2VXaXRoUmFmKSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZhZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdGlmKG91dCkge1xuXHRcdFx0XHRcdGZyYW1ld29ya1sgKGNsb3NlV2l0aFJhZiA/ICdyZW1vdmUnIDogJ2FkZCcpICsgJ0NsYXNzJyBdKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZV9vcGFjaXR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eScpO1xuXHRcdFx0XHRcdH0sIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXQnIDogJ0luJykgKTtcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIW91dCkge1xuXG5cdFx0XHRcdFx0Ly8gXCJpblwiIGFuaW1hdGlvbiBhbHdheXMgdXNlcyBDU1MgdHJhbnNpdGlvbnMgKGluc3RlYWQgb2YgckFGKS5cblx0XHRcdFx0XHQvLyBDU1MgdHJhbnNpdGlvbiB3b3JrIGZhc3RlciBoZXJlLCBcblx0XHRcdFx0XHQvLyBhcyBkZXZlbG9wZXIgbWF5IGFsc28gd2FudCB0byBhbmltYXRlIG90aGVyIHRoaW5ncywgXG5cdFx0XHRcdFx0Ly8gbGlrZSB1aSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLCB3aGljaCBjYW4gYmUgYW5pbWF0ZWQganVzdCB2aWEgQ1NTXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRcdFx0aWYoZmFkZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3Nob3dPckhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBkdXJhdGlvbiArIDIwKTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIFwib3V0XCIgYW5pbWF0aW9uIHVzZXMgckFGIG9ubHkgd2hlbiBQaG90b1N3aXBlIGlzIGNsb3NlZCBieSBicm93c2VyIHNjcm9sbCwgdG8gcmVjYWxjdWxhdGUgcG9zaXRpb25cblx0XHRcdFx0XHR2YXIgZGVzdFpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLncsXG5cdFx0XHRcdFx0XHRpbml0aWFsUGFuT2Zmc2V0ID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBfcGFuT2Zmc2V0LngsXG5cdFx0XHRcdFx0XHRcdHk6IF9wYW5PZmZzZXQueVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGluaXRpYWxab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCxcblx0XHRcdFx0XHRcdGluaXRhbEJnT3BhY2l0eSA9IF9iZ09wYWNpdHksXG5cdFx0XHRcdFx0XHRvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYobm93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBkZXN0Wm9vbUxldmVsO1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gdGh1bWJCb3VuZHMueSAgLSBfY3VycmVudFdpbmRvd1Njcm9sbFk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSAoZGVzdFpvb21MZXZlbCAtIGluaXRpYWxab29tTGV2ZWwpICogbm93ICsgaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSAodGh1bWJCb3VuZHMueCAtIGluaXRpYWxQYW5PZmZzZXQueCkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKHRodW1iQm91bmRzLnkgLSBfY3VycmVudFdpbmRvd1Njcm9sbFkgLSBpbml0aWFsUGFuT2Zmc2V0LnkpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC55O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XHRpZihmYWRlRXZlcnl0aGluZykge1xuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxIC0gbm93O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggaW5pdGFsQmdPcGFjaXR5IC0gbm93ICogaW5pdGFsQmdPcGFjaXR5ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZihjbG9zZVdpdGhSYWYpIHtcblx0XHRcdFx0XHRcdF9hbmltYXRlUHJvcCgnaW5pdGlhbFpvb20nLCAwLCAxLCBkdXJhdGlvbiwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIG9uVXBkYXRlLCBvbkNvbXBsZXRlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b25VcGRhdGUoMSk7XG5cdFx0XHRcdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uQ29tcGxldGUsIGR1cmF0aW9uICsgMjApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR9LCBvdXQgPyAyNSA6IDkwKTsgLy8gTWFpbiBwdXJwb3NlIG9mIHRoaXMgZGVsYXkgaXMgdG8gZ2l2ZSBicm93c2VyIHRpbWUgdG8gcGFpbnQgYW5kXG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGNvbXBvc2l0ZSBsYXllcnMgb2YgUGhvdG9Td2lwZSBVSSBwYXJ0cyAoYmFja2dyb3VuZCwgY29udHJvbHMsIGNhcHRpb24sIGFycm93cykuXG5cdFx0XHRcdFx0Ly8gV2hpY2ggYXZvaWRzIGxhZyBhdCB0aGUgYmVnaW5uaW5nIG9mIHNjYWxlIHRyYW5zaXRpb24uXG5cdFx0fTtcblx0XHRzdGFydEFuaW1hdGlvbigpO1xuXG5cdFx0XG5cdH07XG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cbi8qKlxuKlxuKiBDb250cm9sbGVyIG1hbmFnZXMgZ2FsbGVyeSBpdGVtcywgdGhlaXIgZGltZW5zaW9ucywgYW5kIHRoZWlyIGNvbnRlbnQuXG4qIFxuKi9cblxudmFyIF9pdGVtcyxcblx0X3RlbXBQYW5BcmVhU2l6ZSA9IHt9LFxuXHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gW10sXG5cdF9pbml0aWFsQ29udGVudFNldCxcblx0X2luaXRpYWxab29tUnVubmluZyxcblx0X2NvbnRyb2xsZXJEZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRpbmRleDogMCxcblx0XHRlcnJvck1zZzogJzxkaXYgY2xhc3M9XCJwc3dwX19lcnJvci1tc2dcIj48YSBocmVmPVwiJXVybCVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9kaXY+Jyxcblx0XHRmb3JjZVByb2dyZXNzaXZlTG9hZGluZzogZmFsc2UsIC8vIFRPRE9cblx0XHRwcmVsb2FkOiBbMSwxXSxcblx0XHRnZXROdW1JdGVtc0ZuOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBfaXRlbXMubGVuZ3RoO1xuXHRcdH1cblx0fTtcblxuXG52YXIgX2dldEl0ZW1BdCxcblx0X2dldE51bUl0ZW1zLFxuXHRfaW5pdGlhbElzTG9vcCxcblx0X2dldFplcm9Cb3VuZHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2VudGVyOnt4OjAseTowfSwgXG5cdFx0XHRtYXg6e3g6MCx5OjB9LCBcblx0XHRcdG1pbjp7eDowLHk6MH1cblx0XHR9O1xuXHR9LFxuXHRfY2FsY3VsYXRlU2luZ2xlSXRlbVBhbkJvdW5kcyA9IGZ1bmN0aW9uKGl0ZW0sIHJlYWxQYW5FbGVtZW50VywgcmVhbFBhbkVsZW1lbnRIICkge1xuXHRcdHZhciBib3VuZHMgPSBpdGVtLmJvdW5kcztcblxuXHRcdC8vIHBvc2l0aW9uIG9mIGVsZW1lbnQgd2hlbiBpdCdzIGNlbnRlcmVkXG5cdFx0Ym91bmRzLmNlbnRlci54ID0gTWF0aC5yb3VuZCgoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSAvIDIpO1xuXHRcdGJvdW5kcy5jZW50ZXIueSA9IE1hdGgucm91bmQoKF90ZW1wUGFuQXJlYVNpemUueSAtIHJlYWxQYW5FbGVtZW50SCkgLyAyKSArIGl0ZW0udkdhcC50b3A7XG5cblx0XHQvLyBtYXhpbXVtIHBhbiBwb3NpdGlvblxuXHRcdGJvdW5kcy5tYXgueCA9IChyZWFsUGFuRWxlbWVudFcgPiBfdGVtcFBhbkFyZWFTaXplLngpID8gXG5cdFx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLng7XG5cdFx0XG5cdFx0Ym91bmRzLm1heC55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBcblx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZChfdGVtcFBhbkFyZWFTaXplLnkgLSByZWFsUGFuRWxlbWVudEgpICsgaXRlbS52R2FwLnRvcCA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLnk7XG5cdFx0XG5cdFx0Ly8gbWluaW11bSBwYW4gcG9zaXRpb25cblx0XHRib3VuZHMubWluLnggPSAocmVhbFBhbkVsZW1lbnRXID4gX3RlbXBQYW5BcmVhU2l6ZS54KSA/IDAgOiBib3VuZHMuY2VudGVyLng7XG5cdFx0Ym91bmRzLm1pbi55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBpdGVtLnZHYXAudG9wIDogYm91bmRzLmNlbnRlci55O1xuXHR9LFxuXHRfY2FsY3VsYXRlSXRlbVNpemUgPSBmdW5jdGlvbihpdGVtLCB2aWV3cG9ydFNpemUsIHpvb21MZXZlbCkge1xuXG5cdFx0aWYgKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0dmFyIGlzSW5pdGlhbCA9ICF6b29tTGV2ZWw7XG5cdFx0XHRcblx0XHRcdGlmKGlzSW5pdGlhbCkge1xuXHRcdFx0XHRpZighaXRlbS52R2FwKSB7XG5cdFx0XHRcdFx0aXRlbS52R2FwID0ge3RvcDowLGJvdHRvbTowfTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhbGxvd3Mgb3ZlcnJpZGluZyB2ZXJ0aWNhbCBtYXJnaW4gZm9yIGluZGl2aWR1YWwgaXRlbXNcblx0XHRcdFx0X3Nob3V0KCdwYXJzZVZlcnRpY2FsTWFyZ2luJywgaXRlbSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0X3RlbXBQYW5BcmVhU2l6ZS54ID0gdmlld3BvcnRTaXplLng7XG5cdFx0XHRfdGVtcFBhbkFyZWFTaXplLnkgPSB2aWV3cG9ydFNpemUueSAtIGl0ZW0udkdhcC50b3AgLSBpdGVtLnZHYXAuYm90dG9tO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsKSB7XG5cdFx0XHRcdHZhciBoUmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnggLyBpdGVtLnc7XG5cdFx0XHRcdHZhciB2UmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnkgLyBpdGVtLmg7XG5cblx0XHRcdFx0aXRlbS5maXRSYXRpbyA9IGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblx0XHRcdFx0Ly9pdGVtLmZpbGxSYXRpbyA9IGhSYXRpbyA+IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblxuXHRcdFx0XHR2YXIgc2NhbGVNb2RlID0gX29wdGlvbnMuc2NhbGVNb2RlO1xuXG5cdFx0XHRcdGlmIChzY2FsZU1vZGUgPT09ICdvcmlnJykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NhbGVNb2RlID09PSAnZml0Jykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IGl0ZW0uZml0UmF0aW87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoem9vbUxldmVsID4gMSkge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXRlbS5ib3VuZHMpIHtcblx0XHRcdFx0XHQvLyByZXVzZSBib3VuZHMgb2JqZWN0XG5cdFx0XHRcdFx0aXRlbS5ib3VuZHMgPSBfZ2V0WmVyb0JvdW5kcygpOyBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighem9vbUxldmVsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVNpbmdsZUl0ZW1QYW5Cb3VuZHMoaXRlbSwgaXRlbS53ICogem9vbUxldmVsLCBpdGVtLmggKiB6b29tTGV2ZWwpO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsICYmIHpvb21MZXZlbCA9PT0gaXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXRlbS5ib3VuZHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW0udyA9IGl0ZW0uaCA9IDA7XG5cdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSBpdGVtLmZpdFJhdGlvID0gMTtcblx0XHRcdGl0ZW0uYm91bmRzID0gX2dldFplcm9Cb3VuZHMoKTtcblx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBpbWFnZSwgd2UgcmV0dXJuIHplcm8gYm91bmRzIChjb250ZW50IGlzIG5vdCB6b29tYWJsZSlcblx0XHRcdHJldHVybiBpdGVtLmJvdW5kcztcblx0XHR9XG5cdFx0XG5cdH0sXG5cblx0XG5cblxuXHRfYXBwZW5kSW1hZ2UgPSBmdW5jdGlvbihpbmRleCwgaXRlbSwgYmFzZURpdiwgaW1nLCBwcmV2ZW50QW5pbWF0aW9uLCBrZWVwUGxhY2Vob2xkZXIpIHtcblx0XHRcblxuXHRcdGlmKGl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoaW1nKSB7XG5cblx0XHRcdGl0ZW0uaW1hZ2VBcHBlbmRlZCA9IHRydWU7XG5cdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0sIGltZywgKGl0ZW0gPT09IHNlbGYuY3Vyckl0ZW0gJiYgX3JlbmRlck1heFJlc29sdXRpb24pICk7XG5cdFx0XHRcblx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuXHRcdFx0aWYoa2VlcFBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSAmJiBpdGVtLmxvYWRlZCAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcblxuXG5cdF9wcmVsb2FkSW1hZ2UgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aXRlbS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRpdGVtLmxvYWRlZCA9IGZhbHNlO1xuXHRcdHZhciBpbWcgPSBpdGVtLmltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0aWYoaXRlbS5sb2FkQ29tcGxldGUpIHtcblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLmltZyA9IG51bGw7IC8vIG5vIG5lZWQgdG8gc3RvcmUgaW1hZ2Ugb2JqZWN0XG5cdFx0XHR9XG5cdFx0XHRpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0aW1nID0gbnVsbDtcblx0XHR9O1xuXHRcdGltZy5vbmxvYWQgPSBvbkNvbXBsZXRlO1xuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0fTtcdFx0XG5cblx0XHRpbWcuc3JjID0gaXRlbS5zcmM7Ly8gKyAnP2E9JyArIE1hdGgucmFuZG9tKCk7XG5cblx0XHRyZXR1cm4gaW1nO1xuXHR9LFxuXHRfY2hlY2tGb3JFcnJvciA9IGZ1bmN0aW9uKGl0ZW0sIGNsZWFuVXApIHtcblx0XHRpZihpdGVtLnNyYyAmJiBpdGVtLmxvYWRFcnJvciAmJiBpdGVtLmNvbnRhaW5lcikge1xuXG5cdFx0XHRpZihjbGVhblVwKSB7XG5cdFx0XHRcdGl0ZW0uY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLmNvbnRhaW5lci5pbm5lckhUTUwgPSBfb3B0aW9ucy5lcnJvck1zZy5yZXBsYWNlKCcldXJsJScsICBpdGVtLnNyYyApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdF9zZXRJbWFnZVNpemUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG1heFJlcykge1xuXHRcdGlmKCFpdGVtLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCFpbWcpIHtcblx0XHRcdGltZyA9IGl0ZW0uY29udGFpbmVyLmxhc3RDaGlsZDtcblx0XHR9XG5cblx0XHR2YXIgdyA9IG1heFJlcyA/IGl0ZW0udyA6IE1hdGgucm91bmQoaXRlbS53ICogaXRlbS5maXRSYXRpbyksXG5cdFx0XHRoID0gbWF4UmVzID8gaXRlbS5oIDogTWF0aC5yb3VuZChpdGVtLmggKiBpdGVtLmZpdFJhdGlvKTtcblx0XHRcblx0XHRpZihpdGVtLnBsYWNlaG9sZGVyICYmICFpdGVtLmxvYWRlZCkge1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpbWcuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRpbWcuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cdF9hcHBlbmRJbWFnZXNQb29sID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaW1hZ2VzVG9BcHBlbmRQb29sLmxlbmd0aCkge1xuXHRcdFx0dmFyIHBvb2xJdGVtO1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2ltYWdlc1RvQXBwZW5kUG9vbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwb29sSXRlbSA9IF9pbWFnZXNUb0FwcGVuZFBvb2xbaV07XG5cdFx0XHRcdGlmKCBwb29sSXRlbS5ob2xkZXIuaW5kZXggPT09IHBvb2xJdGVtLmluZGV4ICkge1xuXHRcdFx0XHRcdF9hcHBlbmRJbWFnZShwb29sSXRlbS5pbmRleCwgcG9vbEl0ZW0uaXRlbSwgcG9vbEl0ZW0uYmFzZURpdiwgcG9vbEl0ZW0uaW1nLCBmYWxzZSwgcG9vbEl0ZW0uY2xlYXJQbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wgPSBbXTtcblx0XHR9XG5cdH07XG5cdFxuXG5cbl9yZWdpc3Rlck1vZHVsZSgnQ29udHJvbGxlcicsIHtcblxuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRsYXp5TG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR2YXIgaXRlbSA9IF9nZXRJdGVtQXQoaW5kZXgpO1xuXG5cdFx0XHRpZighaXRlbSB8fCAoKGl0ZW0ubG9hZGVkIHx8IGl0ZW0ubG9hZGluZykgJiYgIV9pdGVtc05lZWRVcGRhdGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X3Nob3V0KCdnZXR0aW5nRGF0YScsIGluZGV4LCBpdGVtKTtcblxuXHRcdFx0aWYgKCFpdGVtLnNyYykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0fSxcblx0XHRpbml0Q29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuZXh0ZW5kKF9vcHRpb25zLCBfY29udHJvbGxlckRlZmF1bHRPcHRpb25zLCB0cnVlKTtcblx0XHRcdHNlbGYuaXRlbXMgPSBfaXRlbXMgPSBpdGVtcztcblx0XHRcdF9nZXRJdGVtQXQgPSBzZWxmLmdldEl0ZW1BdDtcblx0XHRcdF9nZXROdW1JdGVtcyA9IF9vcHRpb25zLmdldE51bUl0ZW1zRm47IC8vc2VsZi5nZXROdW1JdGVtcztcblxuXG5cblx0XHRcdF9pbml0aWFsSXNMb29wID0gX29wdGlvbnMubG9vcDtcblx0XHRcdGlmKF9nZXROdW1JdGVtcygpIDwgMykge1xuXHRcdFx0XHRfb3B0aW9ucy5sb29wID0gZmFsc2U7IC8vIGRpc2FibGUgbG9vcCBpZiBsZXNzIHRoZW4gMyBpdGVtc1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihkaWZmKSB7XG5cblx0XHRcdFx0dmFyIHAgPSBfb3B0aW9ucy5wcmVsb2FkLFxuXHRcdFx0XHRcdGlzTmV4dCA9IGRpZmYgPT09IG51bGwgPyB0cnVlIDogKGRpZmYgPj0gMCksXG5cdFx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIF9nZXROdW1JdGVtcygpICksXG5cdFx0XHRcdFx0cHJlbG9hZEFmdGVyID0gTWF0aC5taW4ocFsxXSwgX2dldE51bUl0ZW1zKCkgKSxcblx0XHRcdFx0XHRpO1xuXG5cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgraSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQmVmb3JlIDogcHJlbG9hZEFmdGVyKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgtaSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCdpbml0aWFsTGF5b3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuY3Vyckl0ZW0uaW5pdGlhbExheW91dCA9IF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4gJiYgX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbihfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3RlbignbWFpblNjcm9sbEFuaW1Db21wbGV0ZScsIF9hcHBlbmRJbWFnZXNQb29sKTtcblx0XHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW5FbmQnLCBfYXBwZW5kSW1hZ2VzUG9vbCk7XG5cblxuXG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpdGVtO1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aXRlbSA9IF9pdGVtc1tpXTtcblx0XHRcdFx0XHQvLyByZW1vdmUgcmVmZXJlbmNlIHRvIERPTSBlbGVtZW50cywgZm9yIEdDXG5cdFx0XHRcdFx0aWYoaXRlbS5jb250YWluZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0uY29udGFpbmVyID0gbnVsbDsgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0ucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmltZykge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLnByZWxvYWRlcikge1xuXHRcdFx0XHRcdFx0aXRlbS5wcmVsb2FkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSBpdGVtLmxvYWRFcnJvciA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblxuXHRcdGdldEl0ZW1BdDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdHJldHVybiBfaXRlbXNbaW5kZXhdICE9PSB1bmRlZmluZWQgPyBfaXRlbXNbaW5kZXhdIDogZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFsbG93UHJvZ3Jlc3NpdmVJbWc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gMS4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBpc24ndCB3b3JraW5nIG9uIHdlYmtpdC9ibGluayBcblx0XHRcdC8vICAgIHdoZW4gaHctYWNjZWxlcmF0aW9uIChlLmcuIHRyYW5zbGF0ZVopIGlzIGFwcGxpZWQgdG8gSU1HIGVsZW1lbnQuXG5cdFx0XHQvLyAgICBUaGF0J3Mgd2h5IGluIFBob3RvU3dpcGUgcGFyZW50IGVsZW1lbnQgZ2V0cyB6b29tIHRyYW5zZm9ybSwgbm90IGltYWdlIGl0c2VsZi5cblx0XHRcdC8vICAgIFxuXHRcdFx0Ly8gMi4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBzb21ldGltZXMgYmxpbmtzIGluIHdlYmtpdC9ibGluayB3aGVuIGFwcGx5aW5nIGFuaW1hdGlvbiB0byBwYXJlbnQgZWxlbWVudC5cblx0XHRcdC8vICAgIFRoYXQncyB3aHkgaXQncyBkaXNhYmxlZCBvbiB0b3VjaCBkZXZpY2VzIChtYWlubHkgYmVjYXVzZSBvZiBzd2lwZSB0cmFuc2l0aW9uKVxuXHRcdFx0Ly8gICAgXG5cdFx0XHQvLyAzLiBQcm9ncmVzc2l2ZSBpbWFnZSBsb2FkaW5nIHNvbWV0aW1lcyBkb2Vzbid0IHdvcmsgaW4gSUUgKHVwIHRvIDExKS5cblxuXHRcdFx0Ly8gRG9uJ3QgYWxsb3cgcHJvZ3Jlc3NpdmUgbG9hZGluZyBvbiBub24tbGFyZ2UgdG91Y2ggZGV2aWNlc1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLmZvcmNlUHJvZ3Jlc3NpdmVMb2FkaW5nIHx8ICFfbGlrZWx5VG91Y2hEZXZpY2UgfHwgX29wdGlvbnMubW91c2VVc2VkIHx8IHNjcmVlbi53aWR0aCA+IDEyMDA7IFxuXHRcdFx0Ly8gMTIwMCAtIHRvIGVsaW1pbmF0ZSB0b3VjaCBkZXZpY2VzIHdpdGggbGFyZ2Ugc2NyZWVuIChsaWtlIENocm9tZWJvb2sgUGl4ZWwpXG5cdFx0fSxcblxuXHRcdHNldENvbnRlbnQ6IGZ1bmN0aW9uKGhvbGRlciwgaW5kZXgpIHtcblxuXHRcdFx0aWYoX29wdGlvbnMubG9vcCkge1xuXHRcdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwcmV2SXRlbSA9IHNlbGYuZ2V0SXRlbUF0KGhvbGRlci5pbmRleCk7XG5cdFx0XHRpZihwcmV2SXRlbSkge1xuXHRcdFx0XHRwcmV2SXRlbS5jb250YWluZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcblx0XHRcdHZhciBpdGVtID0gc2VsZi5nZXRJdGVtQXQoaW5kZXgpLFxuXHRcdFx0XHRpbWc7XG5cdFx0XHRcblx0XHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRcdGhvbGRlci5lbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhbGxvdyB0byBvdmVycmlkZSBkYXRhXG5cdFx0XHRfc2hvdXQoJ2dldHRpbmdEYXRhJywgaW5kZXgsIGl0ZW0pO1xuXG5cdFx0XHRob2xkZXIuaW5kZXggPSBpbmRleDtcblx0XHRcdGhvbGRlci5pdGVtID0gaXRlbTtcblxuXHRcdFx0Ly8gYmFzZSBjb250YWluZXIgRElWIGlzIGNyZWF0ZWQgb25seSBvbmNlIGZvciBlYWNoIG9mIDMgaG9sZGVyc1xuXHRcdFx0dmFyIGJhc2VEaXYgPSBpdGVtLmNvbnRhaW5lciA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fem9vbS13cmFwJyk7IFxuXG5cdFx0XHRcblxuXHRcdFx0aWYoIWl0ZW0uc3JjICYmIGl0ZW0uaHRtbCkge1xuXHRcdFx0XHRpZihpdGVtLmh0bWwudGFnTmFtZSkge1xuXHRcdFx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaXRlbS5odG1sKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiYXNlRGl2LmlubmVySFRNTCA9IGl0ZW0uaHRtbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY2hlY2tGb3JFcnJvcihpdGVtKTtcblxuXHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XG5cdFx0XHRpZihpdGVtLnNyYyAmJiAhaXRlbS5sb2FkRXJyb3IgJiYgIWl0ZW0ubG9hZGVkKSB7XG5cblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdFx0XHQvLyBnYWxsZXJ5IGNsb3NlZCBiZWZvcmUgaW1hZ2UgZmluaXNoZWQgbG9hZGluZ1xuXHRcdFx0XHRcdGlmKCFfaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgaG9sZGVyIGhhc24ndCBjaGFuZ2VkIHdoaWxlIGltYWdlIHdhcyBsb2FkaW5nXG5cdFx0XHRcdFx0aWYoaG9sZGVyICYmIGhvbGRlci5pbmRleCA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRpZiggX2NoZWNrRm9yRXJyb3IoaXRlbSwgdHJ1ZSkgKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlID0gaXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0aWYoaG9sZGVyLmluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJlY2FsY3VsYXRlIGRpbWVuc2lvbnNcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKCAhaXRlbS5pbWFnZUFwcGVuZGVkICkge1xuXHRcdFx0XHRcdFx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtICYmIChfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfaW5pdGlhbFpvb21SdW5uaW5nKSApIHtcblx0XHRcdFx0XHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJQbGFjZWhvbGRlcjp0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX2luaXRpYWxab29tUnVubmluZywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBwcmVsb2FkZXIgJiBtaW5pLWltZ1xuXHRcdFx0XHRcdFx0XHRpZighX2luaXRpYWxab29tUnVubmluZyAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBudWxsO1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gbnVsbDsgLy8gbm8gbmVlZCB0byBzdG9yZSBpbWFnZSBlbGVtZW50IGFmdGVyIGl0J3MgYWRkZWRcblxuXHRcdFx0XHRcdF9zaG91dCgnaW1hZ2VMb2FkQ29tcGxldGUnLCBpbmRleCwgaXRlbSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0aWYoZnJhbWV3b3JrLmZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlckNsYXNzTmFtZSA9ICdwc3dwX19pbWcgcHN3cF9faW1nLS1wbGFjZWhvbGRlcic7IFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyQ2xhc3NOYW1lICs9IChpdGVtLm1zcmMgPyAnJyA6ICcgcHN3cF9faW1nLS1wbGFjZWhvbGRlci0tYmxhbmsnKTtcblxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGZyYW1ld29yay5jcmVhdGVFbChwbGFjZWhvbGRlckNsYXNzTmFtZSwgaXRlbS5tc3JjID8gJ2ltZycgOiAnJyk7XG5cdFx0XHRcdFx0aWYoaXRlbS5tc3JjKSB7XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlci5zcmMgPSBpdGVtLm1zcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSwgcGxhY2Vob2xkZXIpO1xuXG5cdFx0XHRcdFx0YmFzZURpdi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIWl0ZW0ubG9hZGluZykge1xuXHRcdFx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGlmKCBzZWxmLmFsbG93UHJvZ3Jlc3NpdmVJbWcoKSApIHtcblx0XHRcdFx0XHQvLyBqdXN0IGFwcGVuZCBpbWFnZVxuXHRcdFx0XHRcdGlmKCFfaW5pdGlhbENvbnRlbnRTZXQgJiYgX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLCBcblx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LCBcblx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLCBcblx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsIFxuXHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHQvLyBpbWFnZSBvYmplY3QgaXMgY3JlYXRlZCBldmVyeSB0aW1lLCBkdWUgdG8gYnVncyBvZiBpbWFnZSBsb2FkaW5nICYgZGVsYXkgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cdFx0XHRcdGltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdFx0XHRpbWcuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtLCBpbWcpO1xuXHRcdFx0XHRfYXBwZW5kSW1hZ2UoaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGltZywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0aWYoIV9pbml0aWFsQ29udGVudFNldCAmJiBpbmRleCA9PT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gYmFzZURpdi5zdHlsZTtcblx0XHRcdFx0X3Nob3dPckhpZGUoaXRlbSwgKGltZyB8fGl0ZW0uaW1nKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbShpdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0aG9sZGVyLmVsLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0aG9sZGVyLmVsLmFwcGVuZENoaWxkKGJhc2VEaXYpO1xuXHRcdH0sXG5cblx0XHRjbGVhblNsaWRlOiBmdW5jdGlvbiggaXRlbSApIHtcblx0XHRcdGlmKGl0ZW0uaW1nICkge1xuXHRcdFx0XHRpdGVtLmltZy5vbmxvYWQgPSBpdGVtLmltZy5vbmVycm9yID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGl0ZW0ubG9hZGVkID0gaXRlbS5sb2FkaW5nID0gaXRlbS5pbWcgPSBpdGVtLmltYWdlQXBwZW5kZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0fVxufSk7XG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cblxuLyo+PnRhcCovXG4vKipcbiAqIHRhcC5qczpcbiAqXG4gKiBEaXNwbGF0Y2hlcyB0YXAgYW5kIGRvdWJsZS10YXAgZXZlbnRzLlxuICogXG4gKi9cblxudmFyIHRhcFRpbWVyLFxuXHR0YXBSZWxlYXNlUG9pbnQgPSB7fSxcblx0X2Rpc3BhdGNoVGFwRXZlbnQgPSBmdW5jdGlvbihvcmlnRXZlbnQsIHJlbGVhc2VQb2ludCwgcG9pbnRlclR5cGUpIHtcdFx0XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApLFxuXHRcdFx0ZURldGFpbCA9IHtcblx0XHRcdFx0b3JpZ0V2ZW50Om9yaWdFdmVudCwgXG5cdFx0XHRcdHRhcmdldDpvcmlnRXZlbnQudGFyZ2V0LCBcblx0XHRcdFx0cmVsZWFzZVBvaW50OiByZWxlYXNlUG9pbnQsIFxuXHRcdFx0XHRwb2ludGVyVHlwZTpwb2ludGVyVHlwZSB8fCAndG91Y2gnXG5cdFx0XHR9O1xuXG5cdFx0ZS5pbml0Q3VzdG9tRXZlbnQoICdwc3dwVGFwJywgdHJ1ZSwgdHJ1ZSwgZURldGFpbCApO1xuXHRcdG9yaWdFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcblx0fTtcblxuX3JlZ2lzdGVyTW9kdWxlKCdUYXAnLCB7XG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0VGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdF9saXN0ZW4oJ2ZpcnN0VG91Y2hTdGFydCcsIHNlbGYub25UYXBTdGFydCk7XG5cdFx0XHRfbGlzdGVuKCd0b3VjaFJlbGVhc2UnLCBzZWxmLm9uVGFwUmVsZWFzZSk7XG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRhcFJlbGVhc2VQb2ludCA9IHt9O1xuXHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG9uVGFwU3RhcnQ6IGZ1bmN0aW9uKHRvdWNoTGlzdCkge1xuXHRcdFx0aWYodG91Y2hMaXN0Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25UYXBSZWxlYXNlOiBmdW5jdGlvbihlLCByZWxlYXNlUG9pbnQpIHtcblx0XHRcdGlmKCFyZWxlYXNlUG9pbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX21vdmVkICYmICFfaXNNdWx0aXRvdWNoICYmICFfbnVtQW5pbWF0aW9ucykge1xuXHRcdFx0XHR2YXIgcDAgPSByZWxlYXNlUG9pbnQ7XG5cdFx0XHRcdGlmKHRhcFRpbWVyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0YXBlZCBvbiB0aGUgc2FtZSBwbGFjZVxuXHRcdFx0XHRcdGlmICggX2lzTmVhcmJ5UG9pbnRzKHAwLCB0YXBSZWxlYXNlUG9pbnQpICkge1xuXHRcdFx0XHRcdFx0X3Nob3V0KCdkb3VibGVUYXAnLCBwMCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVsZWFzZVBvaW50LnR5cGUgPT09ICdtb3VzZScpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQsICdtb3VzZScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjbGlja2VkVGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0Ly8gYXZvaWQgZG91YmxlIHRhcCBkZWxheSBvbiBidXR0b25zIGFuZCBlbGVtZW50cyB0aGF0IGhhdmUgY2xhc3MgcHN3cF9fc2luZ2xlLXRhcFxuXHRcdFx0XHRpZihjbGlja2VkVGFnTmFtZSA9PT0gJ0JVVFRPTicgfHwgZnJhbWV3b3JrLmhhc0NsYXNzKGUudGFyZ2V0LCAncHN3cF9fc2luZ2xlLXRhcCcpICkge1xuXHRcdFx0XHRcdF9kaXNwYXRjaFRhcEV2ZW50KGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKHRhcFJlbGVhc2VQb2ludCwgcDApO1xuXG5cdFx0XHRcdHRhcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+dGFwKi9cblxuLyo+PmRlc2t0b3Atem9vbSovXG4vKipcbiAqXG4gKiBkZXNrdG9wLXpvb20uanM6XG4gKlxuICogLSBCaW5kcyBtb3VzZXdoZWVsIGV2ZW50IGZvciBwYW5pbmcgem9vbWVkIGltYWdlLlxuICogLSBNYW5hZ2VzIFwiZHJhZ2dpbmdcIiwgXCJ6b29tZWQtaW5cIiwgXCJ6b29tLW91dFwiIGNsYXNzZXMuXG4gKiAgICh3aGljaCBhcmUgdXNlZCBmb3IgY3Vyc29ycyBhbmQgem9vbSBpY29uKVxuICogLSBBZGRzIHRvZ2dsZURlc2t0b3Bab29tIGZ1bmN0aW9uLlxuICogXG4gKi9cblxudmFyIF93aGVlbERlbHRhO1xuXHRcbl9yZWdpc3Rlck1vZHVsZSgnRGVza3RvcFpvb20nLCB7XG5cblx0cHVibGljTWV0aG9kczoge1xuXG5cdFx0aW5pdERlc2t0b3Bab29tOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYoX29sZElFKSB7XG5cdFx0XHRcdC8vIG5vIHpvb20gZm9yIG9sZCBJRSAoPD04KVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBpZiBkZXRlY3RlZCBoYXJkd2FyZSB0b3VjaCBzdXBwb3J0LCB3ZSB3YWl0IHVudGlsIG1vdXNlIGlzIHVzZWQsXG5cdFx0XHRcdC8vIGFuZCBvbmx5IHRoZW4gYXBwbHkgZGVza3RvcC16b29tIGZlYXR1cmVzXG5cdFx0XHRcdF9saXN0ZW4oJ21vdXNlVXNlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSh0cnVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzZXR1cERlc2t0b3Bab29tOiBmdW5jdGlvbihvbkluaXQpIHtcblxuXHRcdFx0X3doZWVsRGVsdGEgPSB7fTtcblxuXHRcdFx0dmFyIGV2ZW50cyA9ICd3aGVlbCBtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJztcblx0XHRcdFxuXHRcdFx0X2xpc3RlbignYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsuYmluZCh0ZW1wbGF0ZSwgZXZlbnRzLCAgc2VsZi5oYW5kbGVNb3VzZVdoZWVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX3doZWVsRGVsdGEpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHRlbXBsYXRlLCBldmVudHMsIHNlbGYuaGFuZGxlTW91c2VXaGVlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSBmYWxzZTtcblxuXHRcdFx0dmFyIGhhc0RyYWdnaW5nQ2xhc3MsXG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoc2VsZi5tb3VzZVpvb21lZEluKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHRcdFx0XHRcdHNlbGYubW91c2Vab29tZWRJbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8IDEpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tLWFsbG93ZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlRHJhZ2dpbmdDbGFzcygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVEcmFnZ2luZ0NsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaGFzRHJhZ2dpbmdDbGFzcykge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tZHJhZ2dpbmcnKTtcblx0XHRcdFx0XHRcdGhhc0RyYWdnaW5nQ2xhc3MgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdF9saXN0ZW4oJ3Jlc2l6ZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdwb2ludGVyRG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihzZWxmLm1vdXNlWm9vbWVkSW4pIHtcblx0XHRcdFx0XHRoYXNEcmFnZ2luZ0NsYXNzID0gdHJ1ZTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1kcmFnZ2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ3BvaW50ZXJVcCcsIHJlbW92ZURyYWdnaW5nQ2xhc3MpO1xuXG5cdFx0XHRpZighb25Jbml0KSB7XG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXG5cdFx0aGFuZGxlTW91c2VXaGVlbDogZnVuY3Rpb24oZSkge1xuXG5cdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8PSBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdGlmKCBfb3B0aW9ucy5tb2RhbCApIHtcblxuXHRcdFx0XHRcdGlmICghX29wdGlvbnMuY2xvc2VPblNjcm9sbCB8fCBfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihfdHJhbnNmb3JtS2V5ICYmIE1hdGguYWJzKGUuZGVsdGFZKSA+IDIpIHtcblx0XHRcdFx0XHRcdC8vIGNsb3NlIFBob3RvU3dpcGVcblx0XHRcdFx0XHRcdC8vIGlmIGJyb3dzZXIgc3VwcG9ydHMgdHJhbnNmb3JtcyAmIHNjcm9sbCBjaGFuZ2VkIGVub3VnaFxuXHRcdFx0XHRcdFx0X2Nsb3NlZEJ5U2Nyb2xsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWxsb3cganVzdCBvbmUgZXZlbnQgdG8gZmlyZVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXG5cdFx0XHRfd2hlZWxEZWx0YS54ID0gMDtcblxuXHRcdFx0aWYoJ2RlbHRhWCcgaW4gZSkge1xuXHRcdFx0XHRpZihlLmRlbHRhTW9kZSA9PT0gMSAvKiBET01fREVMVEFfTElORSAqLykge1xuXHRcdFx0XHRcdC8vIDE4IC0gYXZlcmFnZSBsaW5lIGhlaWdodFxuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWCAqIDE4O1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRlbHRhWSAqIDE4O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWDtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gZS5kZWx0YVk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignd2hlZWxEZWx0YScgaW4gZSkge1xuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFYKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueCA9IC0wLjE2ICogZS53aGVlbERlbHRhWDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFZKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IC0wLjE2ICogZS53aGVlbERlbHRhWTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gLTAuMTYgKiBlLndoZWVsRGVsdGE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignZGV0YWlsJyBpbiBlKSB7XG5cdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRldGFpbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVBhbkJvdW5kcyhfY3Vyclpvb21MZXZlbCwgdHJ1ZSk7XG5cblx0XHRcdHZhciBuZXdQYW5YID0gX3Bhbk9mZnNldC54IC0gX3doZWVsRGVsdGEueCxcblx0XHRcdFx0bmV3UGFuWSA9IF9wYW5PZmZzZXQueSAtIF93aGVlbERlbHRhLnk7XG5cblx0XHRcdC8vIG9ubHkgcHJldmVudCBzY3JvbGxpbmcgaW4gbm9ubW9kYWwgbW9kZSB3aGVuIG5vdCBhdCBlZGdlc1xuXHRcdFx0aWYgKF9vcHRpb25zLm1vZGFsIHx8XG5cdFx0XHRcdChcblx0XHRcdFx0bmV3UGFuWCA8PSBfY3VyclBhbkJvdW5kcy5taW4ueCAmJiBuZXdQYW5YID49IF9jdXJyUGFuQm91bmRzLm1heC54ICYmXG5cdFx0XHRcdG5ld1BhblkgPD0gX2N1cnJQYW5Cb3VuZHMubWluLnkgJiYgbmV3UGFuWSA+PSBfY3VyclBhbkJvdW5kcy5tYXgueVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRPRE86IHVzZSByQUYgaW5zdGVhZCBvZiBtb3VzZXdoZWVsP1xuXHRcdFx0c2VsZi5wYW5UbyhuZXdQYW5YLCBuZXdQYW5ZKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlRGVza3RvcFpvb206IGZ1bmN0aW9uKGNlbnRlclBvaW50KSB7XG5cdFx0XHRjZW50ZXJQb2ludCA9IGNlbnRlclBvaW50IHx8IHt4Ol92aWV3cG9ydFNpemUueC8yICsgX29mZnNldC54LCB5Ol92aWV3cG9ydFNpemUueS8yICsgX29mZnNldC55IH07XG5cblx0XHRcdHZhciBkb3VibGVUYXBab29tTGV2ZWwgPSBfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKHRydWUsIHNlbGYuY3Vyckl0ZW0pO1xuXHRcdFx0dmFyIHpvb21PdXQgPSBfY3Vyclpvb21MZXZlbCA9PT0gZG91YmxlVGFwWm9vbUxldmVsO1xuXHRcdFx0XG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSAhem9vbU91dDtcblxuXHRcdFx0c2VsZi56b29tVG8oem9vbU91dCA/IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCA6IGRvdWJsZVRhcFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIDMzMyk7XG5cdFx0XHRmcmFtZXdvcmtbICghem9vbU91dCA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJ10odGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHR9XG5cblx0fVxufSk7XG5cblxuLyo+PmRlc2t0b3Atem9vbSovXG5cbi8qPj5oaXN0b3J5Ki9cbi8qKlxuICpcbiAqIGhpc3RvcnkuanM6XG4gKlxuICogLSBCYWNrIGJ1dHRvbiB0byBjbG9zZSBnYWxsZXJ5LlxuICogXG4gKiAtIFVuaXF1ZSBVUkwgZm9yIGVhY2ggc2xpZGU6IGV4YW1wbGUuY29tLyZwaWQ9MSZnaWQ9M1xuICogICAod2hlcmUgUElEIGlzIHBpY3R1cmUgaW5kZXgsIGFuZCBHSUQgYW5kIGdhbGxlcnkgaW5kZXgpXG4gKiAgIFxuICogLSBTd2l0Y2ggVVJMIHdoZW4gc2xpZGVzIGNoYW5nZS5cbiAqIFxuICovXG5cblxudmFyIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMgPSB7XG5cdGhpc3Rvcnk6IHRydWUsXG5cdGdhbGxlcnlVSUQ6IDFcbn07XG5cbnZhciBfaGlzdG9yeVVwZGF0ZVRpbWVvdXQsXG5cdF9oYXNoQ2hhbmdlVGltZW91dCxcblx0X2hhc2hBbmltQ2hlY2tUaW1lb3V0LFxuXHRfaGFzaENoYW5nZWRCeVNjcmlwdCxcblx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5LFxuXHRfaGFzaFJlc2V0ZWQsXG5cdF9pbml0aWFsSGFzaCxcblx0X2hpc3RvcnlDaGFuZ2VkLFxuXHRfY2xvc2VkRnJvbVVSTCxcblx0X3VybENoYW5nZWRPbmNlLFxuXHRfd2luZG93TG9jLFxuXG5cdF9zdXBwb3J0c1B1c2hTdGF0ZSxcblxuXHRfZ2V0SGFzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfd2luZG93TG9jLmhhc2guc3Vic3RyaW5nKDEpO1xuXHR9LFxuXHRfY2xlYW5IaXN0b3J5VGltZW91dHMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oaXN0b3J5VXBkYXRlVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oaXN0b3J5VXBkYXRlVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0aWYoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gcGlkIC0gUGljdHVyZSBpbmRleFxuXHQvLyBnaWQgLSBHYWxsZXJ5IGluZGV4XG5cdF9wYXJzZUl0ZW1JbmRleEZyb21VUkwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFzaCA9IF9nZXRIYXNoKCksXG5cdFx0XHRwYXJhbXMgPSB7fTtcblxuXHRcdGlmKGhhc2gubGVuZ3RoIDwgNSkgeyAvLyBwaWQ9MVxuXHRcdFx0cmV0dXJuIHBhcmFtcztcblx0XHR9XG5cblx0XHR2YXIgaSwgdmFycyA9IGhhc2guc3BsaXQoJyYnKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoIXZhcnNbaV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcdFxuXHRcdFx0aWYocGFpci5sZW5ndGggPCAyKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcblx0XHR9XG5cdFx0aWYoX29wdGlvbnMuZ2FsbGVyeVBJRHMpIHtcblx0XHRcdC8vIGRldGVjdCBjdXN0b20gcGlkIGluIGhhc2ggYW5kIHNlYXJjaCBmb3IgaXQgYW1vbmcgdGhlIGl0ZW1zIGNvbGxlY3Rpb25cblx0XHRcdHZhciBzZWFyY2hmb3IgPSBwYXJhbXMucGlkO1xuXHRcdFx0cGFyYW1zLnBpZCA9IDA7IC8vIGlmIGN1c3RvbSBwaWQgY2Fubm90IGJlIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgZmlyc3QgaXRlbVxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKF9pdGVtc1tpXS5waWQgPT09IHNlYXJjaGZvcikge1xuXHRcdFx0XHRcdHBhcmFtcy5waWQgPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcmFtcy5waWQgPSBwYXJzZUludChwYXJhbXMucGlkLDEwKS0xO1xuXHRcdH1cblx0XHRpZiggcGFyYW1zLnBpZCA8IDAgKSB7XG5cdFx0XHRwYXJhbXMucGlkID0gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fSxcblx0X3VwZGF0ZUhhc2ggPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oYXNoQW5pbUNoZWNrVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oYXNoQW5pbUNoZWNrVGltZW91dCk7XG5cdFx0fVxuXG5cblx0XHRpZihfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0Ly8gY2hhbmdpbmcgYnJvd3NlciBVUkwgZm9yY2VzIGxheW91dC9wYWludCBpbiBzb21lIGJyb3dzZXJzLCB3aGljaCBjYXVzZXMgbm90aWNhYmxlIGxhZyBkdXJpbmcgYW5pbWF0aW9uXG5cdFx0XHQvLyB0aGF0J3Mgd2h5IHdlIHVwZGF0ZSBoYXNoIG9ubHkgd2hlbiBubyBhbmltYXRpb25zIHJ1bm5pbmdcblx0XHRcdF9oYXNoQW5pbUNoZWNrVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDUwMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKF9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hDaGFuZ2VUaW1lb3V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2hhc2hDaGFuZ2VkQnlTY3JpcHQgPSB0cnVlO1xuXHRcdH1cblxuXG5cdFx0dmFyIHBpZCA9IChfY3VycmVudEl0ZW1JbmRleCArIDEpO1xuXHRcdHZhciBpdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRpZihpdGVtLmhhc093blByb3BlcnR5KCdwaWQnKSkge1xuXHRcdFx0Ly8gY2FycnkgZm9yd2FyZCBhbnkgY3VzdG9tIHBpZCBhc3NpZ25lZCB0byB0aGUgaXRlbVxuXHRcdFx0cGlkID0gaXRlbS5waWQ7XG5cdFx0fVxuXHRcdHZhciBuZXdIYXNoID0gX2luaXRpYWxIYXNoICsgJyYnICArICAnZ2lkPScgKyBfb3B0aW9ucy5nYWxsZXJ5VUlEICsgJyYnICsgJ3BpZD0nICsgcGlkO1xuXG5cdFx0aWYoIV9oaXN0b3J5Q2hhbmdlZCkge1xuXHRcdFx0aWYoX3dpbmRvd0xvYy5oYXNoLmluZGV4T2YobmV3SGFzaCkgPT09IC0xKSB7XG5cdFx0XHRcdF91cmxDaGFuZ2VkT25jZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBmaXJzdCB0aW1lIC0gYWRkIG5ldyBoaXNvcnkgcmVjb3JkLCB0aGVuIGp1c3QgcmVwbGFjZVxuXHRcdH1cblxuXHRcdHZhciBuZXdVUkwgPSBfd2luZG93TG9jLmhyZWYuc3BsaXQoJyMnKVswXSArICcjJyArICBuZXdIYXNoO1xuXG5cdFx0aWYoIF9zdXBwb3J0c1B1c2hTdGF0ZSApIHtcblxuXHRcdFx0aWYoJyMnICsgbmV3SGFzaCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0aGlzdG9yeVtfaGlzdG9yeUNoYW5nZWQgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSgnJywgZG9jdW1lbnQudGl0bGUsIG5ld1VSTCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF93aW5kb3dMb2MucmVwbGFjZSggbmV3VVJMICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfd2luZG93TG9jLmhhc2ggPSBuZXdIYXNoO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRcblxuXHRcdF9oaXN0b3J5Q2hhbmdlZCA9IHRydWU7XG5cdFx0X2hhc2hDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdF9oYXNoQ2hhbmdlZEJ5U2NyaXB0ID0gZmFsc2U7XG5cdFx0fSwgNjApO1xuXHR9O1xuXG5cblxuXHRcblxuX3JlZ2lzdGVyTW9kdWxlKCdIaXN0b3J5Jywge1xuXG5cdFxuXG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0SGlzdG9yeTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMsIHRydWUpO1xuXG5cdFx0XHRpZiggIV9vcHRpb25zLmhpc3RvcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXG5cdFx0XHRfd2luZG93TG9jID0gd2luZG93LmxvY2F0aW9uO1xuXHRcdFx0X3VybENoYW5nZWRPbmNlID0gZmFsc2U7XG5cdFx0XHRfY2xvc2VkRnJvbVVSTCA9IGZhbHNlO1xuXHRcdFx0X2hpc3RvcnlDaGFuZ2VkID0gZmFsc2U7XG5cdFx0XHRfaW5pdGlhbEhhc2ggPSBfZ2V0SGFzaCgpO1xuXHRcdFx0X3N1cHBvcnRzUHVzaFN0YXRlID0gKCdwdXNoU3RhdGUnIGluIGhpc3RvcnkpO1xuXG5cblx0XHRcdGlmKF9pbml0aWFsSGFzaC5pbmRleE9mKCdnaWQ9JykgPiAtMSkge1xuXHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc3BsaXQoJyZnaWQ9JylbMF07XG5cdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zcGxpdCgnP2dpZD0nKVswXTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScsIHNlbGYudXBkYXRlVVJMKTtcblx0XHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBzZWxmLm9uSGFzaENoYW5nZSk7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHR2YXIgcmV0dXJuVG9PcmlnaW5hbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfaGFzaFJlc2V0ZWQgPSB0cnVlO1xuXHRcdFx0XHRpZighX2Nsb3NlZEZyb21VUkwpIHtcblxuXHRcdFx0XHRcdGlmKF91cmxDaGFuZ2VkT25jZSkge1xuXHRcdFx0XHRcdFx0aGlzdG9yeS5iYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWYoX2luaXRpYWxIYXNoKSB7XG5cdFx0XHRcdFx0XHRcdF93aW5kb3dMb2MuaGFzaCA9IF9pbml0aWFsSGFzaDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfc3VwcG9ydHNQdXNoU3RhdGUpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBoYXNoIGZyb20gdXJsIHdpdGhvdXQgcmVmcmVzaGluZyBpdCBvciBzY3JvbGxpbmcgdG8gdG9wXG5cdFx0XHRcdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCAgX3dpbmRvd0xvYy5wYXRobmFtZSArIF93aW5kb3dMb2Muc2VhcmNoICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X3dpbmRvd0xvYy5oYXNoID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdH07XG5cblxuXHRcdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF9jbG9zZWRCeVNjcm9sbCkge1xuXHRcdFx0XHRcdC8vIGlmIFBob3RvU3dpcGUgaXMgY2xvc2VkIGJ5IHNjcm9sbCwgd2UgZ28gXCJiYWNrXCIgYmVmb3JlIHRoZSBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcblx0XHRcdFx0XHQvLyB0aGlzIGlzIGRvbmUgdG8ga2VlcCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG5cdFx0XHRcdFx0cmV0dXJuVG9PcmlnaW5hbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIV9oYXNoUmVzZXRlZCkge1xuXHRcdFx0XHRcdHJldHVyblRvT3JpZ2luYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbGlzdGVuKCdmaXJzdFVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9wYXJzZUl0ZW1JbmRleEZyb21VUkwoKS5waWQ7XG5cdFx0XHR9KTtcblxuXHRcdFx0XG5cblx0XHRcdFxuXHRcdFx0dmFyIGluZGV4ID0gX2luaXRpYWxIYXNoLmluZGV4T2YoJ3BpZD0nKTtcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdGlmKF9pbml0aWFsSGFzaC5zbGljZSgtMSkgPT09ICcmJykge1xuXHRcdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zbGljZSgwLCAtMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihfaXNPcGVuKSB7IC8vIGhhc24ndCBkZXN0cm95ZWQgeWV0XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCAnaGFzaGNoYW5nZScsIHNlbGYub25IYXNoQ2hhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgNDApO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRvbkhhc2hDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZihfZ2V0SGFzaCgpID09PSBfaW5pdGlhbEhhc2gpIHtcblxuXHRcdFx0XHRfY2xvc2VkRnJvbVVSTCA9IHRydWU7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYoIV9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cblx0XHRcdFx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5ID0gdHJ1ZTtcblx0XHRcdFx0c2VsZi5nb1RvKCBfcGFyc2VJdGVtSW5kZXhGcm9tVVJMKCkucGlkICk7XG5cdFx0XHRcdF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHR1cGRhdGVVUkw6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEZWxheSB0aGUgdXBkYXRlIG9mIFVSTCwgdG8gYXZvaWQgbGFnIGR1cmluZyB0cmFuc2l0aW9uLCBcblx0XHRcdC8vIGFuZCB0byBub3QgdG8gdHJpZ2dlciBhY3Rpb25zIGxpa2UgXCJyZWZyZXNoIHBhZ2Ugc291bmRcIiBvciBcImJsaW5raW5nIGZhdmljb25cIiB0byBvZnRlblxuXHRcdFx0XG5cdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdFxuXG5cdFx0XHRpZihfaGFzaENoYW5nZWRCeUhpc3RvcnkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF91cGRhdGVIYXNoKCk7IC8vIGZpcnN0IHRpbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9oaXN0b3J5VXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDgwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0fVxufSk7XG5cblxuLyo+Pmhpc3RvcnkqL1xuXHRmcmFtZXdvcmsuZXh0ZW5kKHNlbGYsIHB1YmxpY01ldGhvZHMpOyB9O1xuXHRyZXR1cm4gUGhvdG9Td2lwZTtcbn0pOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhLS0gPGRpdiBjbGFzcz1cXFwieXd6Zy1nYWxsZXJ5XFxcIiBkYXRhLXl3emctZ2FsbGVyeT1cXFwiY2xvc2VkXFxcIj5cXG4gIDxidXR0b24gY2xhc3M9XFxcInl3emctZ2FsbGVyeV9fY2xvc2VcXFwiIGRhdGEteXd6Zy1nYWxsZXJ5LWNsb3NlPkNsb3NlPC9idXR0b24+IC0tPlxcbiAgPCEtLSBSb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZS4gTXVzdCBoYXZlIGNsYXNzIHBzd3AuIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwicHN3cFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG5cXG4gICAgICA8IS0tIEJhY2tncm91bmQgb2YgUGhvdG9Td2lwZS5cXG4gICAgICAgICAgSXQncyBhIHNlcGFyYXRlIGVsZW1lbnQgYXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgZmFzdGVyIHRoYW4gcmdiYSgpLiAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19iZ1xcXCI+PC9kaXY+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd3JhcHBlciB3aXRoIG92ZXJmbG93OmhpZGRlbi4gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fc2Nyb2xsLXdyYXBcXFwiPlxcblxcbiAgICAgICAgICA8IS0tIENvbnRhaW5lciB0aGF0IGhvbGRzIHNsaWRlcy5cXG4gICAgICAgICAgICAgIFBob3RvU3dpcGUga2VlcHMgb25seSAzIG9mIHRoZW0gaW4gdGhlIERPTSB0byBzYXZlIG1lbW9yeS5cXG4gICAgICAgICAgICAgIERvbid0IG1vZGlmeSB0aGVzZSAzIHBzd3BfX2l0ZW0gZWxlbWVudHMsIGRhdGEgaXMgYWRkZWQgbGF0ZXIgb24uIC0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9faXRlbVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19pdGVtXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX2l0ZW1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPCEtLSBEZWZhdWx0IChQaG90b1N3aXBlVUlfRGVmYXVsdCkgaW50ZXJmYWNlIG9uIHRvcCBvZiBzbGlkaW5nIGFyZWEuIENhbiBiZSBjaGFuZ2VkLiAtLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlblxcXCI+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX190b3AtYmFyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICA8IS0tICBDb250cm9scyBhcmUgc2VsZi1leHBsYW5hdG9yeS4gT3JkZXIgY2FuIGJlIGNoYW5nZWQuIC0tPlxcblxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX2NvdW50ZXJcXFwiPjwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWRvd25sb2FkXFxcIiB0aXRsZT1cXFwiRG93bmxvYWQgYSAuemlwIG9mIGFsbCBpbWFnZXMsIGFuZCBhIHNuYXBzaG90IG9mIHRoZSBsaXN0aW5nXFxcIiBkYXRhLXl3emctZG93bmxvYWQtYWxsPkRvd25sb2FkIGFsbDwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwicHN3cF9fem9vbVxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIGlkPVxcXCJwc3dwX196b29tXFxcIiBuYW1lPVxcXCJ6b29tXFxcIiB2YWx1ZT1cXFwiMFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwXFxcIiBzdGVwPVxcXCIxXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS16b29tXFxcIiB0aXRsZT1cXFwiWm9vbSBpbi9vdXRcXFwiPjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWZzXFxcIiB0aXRsZT1cXFwiVG9nZ2xlIGZ1bGxzY3JlZW5cXFwiPjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXNoYXJlXFxcIiB0aXRsZT1cXFwiU2hhcmVcXFwiPjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXFxcIiB0aXRsZT1cXFwiQ2xvc2UgKEVzYylcXFwiPjwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgIDwhLS0gUHJlbG9hZGVyIGRlbW8gaHR0cHM6Ly9jb2RlcGVuLmlvL2RpbXNlbWVub3YvcGVuL3l5QldvUiAtLT5cXG4gICAgICAgICAgICAgICAgICA8IS0tIGVsZW1lbnQgd2lsbCBnZXQgY2xhc3MgcHN3cF9fcHJlbG9hZGVyLS1hY3RpdmUgd2hlbiBwcmVsb2FkZXIgaXMgcnVubmluZyAtLT5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19wcmVsb2FkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19wcmVsb2FkZXJfX2ljblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fcHJlbG9hZGVyX19jdXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHN3cF9fcHJlbG9hZGVyX19kb251dFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwc3dwX19zaGFyZS1tb2RhbCBwc3dwX19zaGFyZS1tb2RhbC0taGlkZGVuIHBzd3BfX3NpbmdsZS10YXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX3NoYXJlLXRvb2x0aXBcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdFxcXCIgdGl0bGU9XFxcIlByZXZpb3VzIChhcnJvdyBsZWZ0KVxcXCI+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1yaWdodFxcXCIgdGl0bGU9XFxcIk5leHQgKGFycm93IHJpZ2h0KVxcXCI+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX2NhcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBzd3BfX2NhcHRpb25fX2NlbnRlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgPC9kaXY+XFxuXFxuICA8IS0tIDwvZGl2PlxcbjwvZGl2PiAtLT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgeyBJbWFnZVByb2JlIH0gZnJvbSAnQHplcm9kZXBzL2ltYWdlLXByb2JlJztcblxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltYWdlUHJvYmVGZXRjaCh1cmwsIGNhY2hlKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHsgc2lnbmFsIH0gPSBjb250cm9sbGVyO1xuXG4gIGNvbnN0IGNhY2hlZFNpemUgPSBjYWNoZS5nZXQodXJsKTtcblxuICBpZiAoY2FjaGVkU2l6ZSkge1xuICAgIGNvbnNvbGUubG9nKCdnb3Qgc2l6ZSBmcm9tIGNhY2hlJywgdXJsLCBjYWNoZWRTaXplKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFNpemUpO1xuICB9XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgeyBzaWduYWwgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBsZXQgc2l6ZTtcblxuICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gcHJvY2Vzcyh7IGRvbmUsIHZhbHVlIH0pIHtcbiAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gQnVmZmVyLmNvbmNhdChbcmVzdWx0LCBCdWZmZXIuZnJvbSh2YWx1ZSldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gQnVmZmVyLmZyb20odmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJbWFnZVByb2JlIGF0dGVtcHRzIHRvIHJlYWQgYW4gb2Zmc2V0IHZhbHVlIGluIHRoZSBidWZmZXJcbiAgICAgICAgICAgIC8vIElmIHRoYXQgb2Zmc2V0IGlzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBidWZmZXIsIGFuIGVycm9yXG4gICAgICAgICAgICAvLyBpcyB0aHJvd24uXG4gICAgICAgICAgICBzaXplID0gSW1hZ2VQcm9iZS5mcm9tQnVmZmVyKHJlc3VsdClcbiAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGRldGVybWluZSBpbWFnZSBzaXplLCB3aWxsIGtlZXAgdHJ5aW5nJywgZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGNvbnRpbnVlIHJlYWRpbmcgc3RyZWFtXG4gICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNhY2hlLnNldCh1cmwsIHNpemUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXplJywgc2l6ZSk7XG4gICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwieXd6Zy1sYXVuY2hlclxcXCI+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJ5d3pnLWJ1dHRvblxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIiBkaXNhYmxlZCBkYXRhLXl3emctZ2FsbGVyeS1vcGVuPlxcbiAgICA8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgY2xhc3M9XFxcInl3emctYnV0dG9uX19sYXVuY2gtaWNvblxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxuICAgICAgICB2aWV3Qm94PVxcXCIwIDAgMzg0IDM4NFxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XFxuICAgICAgPGc+XFxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XFxcIjIzNC42NjcsMCAyMzQuNjY3LDQyLjY2NyAzMTEuMTQ3LDQyLjY2NyAxMDEuNDQsMjUyLjM3MyAxMzEuNjI3LDI4Mi41NiAzNDEuMzMzLDcyLjg1MyAzNDEuMzMzLDE0OS4zMzNcXG4gICAgICAgICAgMzg0LDE0OS4zMzMgMzg0LDAgXFx0XFx0XFx0XFxcIi8+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMzQxLjMzMywzNDEuMzMzSDQyLjY2N1Y0Mi42NjdIMTkyVjBINDIuNjY3QzE5LjA5MywwLDAsMTkuMDkzLDAsNDIuNjY3djI5OC42NjdDMCwzNjQuOTA3LDE5LjA5MywzODQsNDIuNjY3LDM4NFxcbiAgICAgICAgICBoMjk4LjY2N0MzNjQuOTA3LDM4NCwzODQsMzY0LjkwNywzODQsMzQxLjMzM1YxOTJoLTQyLjY2N1YzNDEuMzMzelxcXCIvPlxcbiAgICAgIDwvZz5cXG4gICAgPC9zdmc+XFxuICAgIDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBjbGFzcz1cXFwieXd6Zy1idXR0b25fX2xvYWRpbmctaWNvblxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxuICAgICAgdmlld0JveD1cXFwiMCAwIDQ2OS4zMzMgNDY5LjMzM1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XFxuICAgICAgICA8Zz5cXG4gICAgICAgICAgPHBhdGggZD1cXFwiTTIzNC42NjcsMzYyLjY2N2MtNzAuNzIsMC0xMjgtNTcuMjgtMTI4LTEyOGMwLTIxLjY1Myw1LjQ0LTQxLjkyLDE0LjgyNy01OS44NEw5MC4zNDcsMTQzLjY4XFxuICAgICAgICAgICAgQzczLjgxMywxNzAuMTMzLDY0LDIwMS4xNzMsNjQsMjM0LjY2N2MwLDk0LjI5Myw3Ni4zNzMsMTcwLjY2NywxNzAuNjY3LDE3MC42Njd2NjRMMzIwLDM4NGwtODUuMzMzLTg1LjMzM1YzNjIuNjY3elxcXCIvPlxcbiAgICAgICAgICA8cGF0aCBkPVxcXCJNMjM0LjY2Nyw2NFYwbC04NS4zMzMsODUuMzMzbDg1LjMzMyw4NS4zMzN2LTY0YzcwLjcyLDAsMTI4LDU3LjI4LDEyOCwxMjhjMCwyMS42NTMtNS40NCw0MS45Mi0xNC44MjcsNTkuODRcXG4gICAgICAgICAgICBsMzEuMTQ3LDMxLjE0N2MxNi41MzMtMjYuNDUzLDI2LjM0Ny01Ny40OTMsMjYuMzQ3LTkwLjk4N0M0MDUuMzMzLDE0MC4zNzMsMzI4Ljk2LDY0LDIzNC42NjcsNjR6XFxcIi8+XFxuICAgICAgICA8L2c+XFxuICAgIDwvc3ZnPlxcbiAgPC9idXR0b24+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLyoqXG4qXG4qIFVJIG9uIHRvcCBvZiBtYWluIHNsaWRpbmcgYXJlYSAoY2FwdGlvbiwgYXJyb3dzLCBjbG9zZSBidXR0b24sIGV0Yy4pLlxuKiBCdWlsdCBqdXN0IHVzaW5nIHB1YmxpYyBtZXRob2RzL3Byb3BlcnRpZXMgb2YgUGhvdG9Td2lwZS5cbipcbiovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlBob3RvU3dpcGVVSSA9IGZhY3RvcnkoKTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXG5cbnZhciBQaG90b1N3aXBlVUkgPVxuIGZ1bmN0aW9uKHBzd3AsIGZyYW1ld29yaykge1xuXG5cdHZhciB1aSA9IHRoaXM7XG5cdHZhciBfb3ZlcmxheVVJVXBkYXRlZCA9IGZhbHNlLFxuXHRcdF9jb250cm9sc1Zpc2libGUgPSB0cnVlLFxuXHRcdF9mdWxsc2NyZW5BUEksXG5cdFx0X2NvbnRyb2xzLFxuXHRcdF9jYXB0aW9uQ29udGFpbmVyLFxuXHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lcixcblx0XHRfaW5kZXhJbmRpY2F0b3IsXG4gICAgX3NoYXJlQnV0dG9uLFxuICAgIF96b29tU2xpZGVyLFxuXHRcdF9zaGFyZU1vZGFsLFxuXHRcdF9zaGFyZU1vZGFsSGlkZGVuID0gdHJ1ZSxcblx0XHRfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlLFxuXHRcdF9pc0lkbGUsXG5cdFx0X2xpc3RlbixcblxuXHRcdF9sb2FkaW5nSW5kaWNhdG9yLFxuXHRcdF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuLFxuXHRcdF9sb2FkaW5nSW5kaWNhdG9yVGltZW91dCxcblxuXHRcdF9nYWxsZXJ5SGFzT25lU2xpZGUsXG5cblx0XHRfb3B0aW9ucyxcblx0XHRfZGVmYXVsdFVJT3B0aW9ucyA9IHtcblx0XHRcdGJhcnNTaXplOiB7dG9wOjQ0LCBib3R0b206J2F1dG8nfSxcblx0XHRcdGNsb3NlRWxDbGFzc2VzOiBbJ2l0ZW0nLCAnY2FwdGlvbicsICd6b29tLXdyYXAnLCAndWknLCAndG9wLWJhciddLFxuXHRcdFx0dGltZVRvSWRsZTogNDAwMCxcblx0XHRcdHRpbWVUb0lkbGVPdXRzaWRlOiAxMDAwLFxuXHRcdFx0bG9hZGluZ0luZGljYXRvckRlbGF5OiAxMDAwLCAvLyAyc1xuXG5cdFx0XHRhZGRDYXB0aW9uSFRNTEZuOiBmdW5jdGlvbihpdGVtLCBjYXB0aW9uRWwgLyosIGlzRmFrZSAqLykge1xuXHRcdFx0XHRpZighaXRlbS50aXRsZSkge1xuXHRcdFx0XHRcdGNhcHRpb25FbC5jaGlsZHJlblswXS5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FwdGlvbkVsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2VFbDp0cnVlLFxuXHRcdFx0Y2FwdGlvbkVsOiB0cnVlLFxuXHRcdFx0ZnVsbHNjcmVlbkVsOiB0cnVlLFxuXHRcdFx0em9vbUVsOiB0cnVlLFxuXHRcdFx0c2hhcmVFbDogdHJ1ZSxcblx0XHRcdGNvdW50ZXJFbDogdHJ1ZSxcblx0XHRcdGFycm93RWw6IHRydWUsXG4gICAgICBwcmVsb2FkZXJFbDogdHJ1ZSxcbiAgICAgIHpvb21FbDogdHJ1ZSxcbiAgICAgIHpvb21MYWJlbEVsOiB0cnVlLFxuXG5cdFx0XHR0YXBUb0Nsb3NlOiBmYWxzZSxcblx0XHRcdHRhcFRvVG9nZ2xlQ29udHJvbHM6IHRydWUsXG5cblx0XHRcdGNsaWNrVG9DbG9zZU5vblpvb21hYmxlOiB0cnVlLFxuXG5cdFx0XHRzaGFyZUJ1dHRvbnM6IFtcblx0XHRcdFx0e2lkOidmYWNlYm9vaycsIGxhYmVsOidTaGFyZSBvbiBGYWNlYm9vaycsIHVybDonaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3t1cmx9fSd9LFxuXHRcdFx0XHR7aWQ6J3R3aXR0ZXInLCBsYWJlbDonVHdlZXQnLCB1cmw6J2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9e3t0ZXh0fX0mdXJsPXt7dXJsfX0nfSxcblx0XHRcdFx0e2lkOidwaW50ZXJlc3QnLCBsYWJlbDonUGluIGl0JywgdXJsOidodHRwOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vJytcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jz91cmw9e3t1cmx9fSZtZWRpYT17e2ltYWdlX3VybH19JmRlc2NyaXB0aW9uPXt7dGV4dH19J30sXG5cdFx0XHRcdHtpZDonZG93bmxvYWQnLCBsYWJlbDonRG93bmxvYWQgaW1hZ2UnLCB1cmw6J3t7cmF3X2ltYWdlX3VybH19JywgZG93bmxvYWQ6dHJ1ZX1cblx0XHRcdF0sXG5cdFx0XHRnZXRJbWFnZVVSTEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gcHN3cC5jdXJySXRlbS5zcmMgfHwgJyc7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0UGFnZVVSTEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0VGV4dEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gcHN3cC5jdXJySXRlbS50aXRsZSB8fCAnJztcblx0XHRcdH0sXG5cblx0XHRcdGluZGV4SW5kaWNhdG9yU2VwOiAnIC8gJyxcblx0XHRcdGZpdENvbnRyb2xzV2lkdGg6IDEyMDBcblxuXHRcdH0sXG5cdFx0X2Jsb2NrQ29udHJvbHNUYXAsXG5cdFx0X2Jsb2NrQ29udHJvbHNUYXBUaW1lb3V0O1xuXG5cblxuXHR2YXIgX29uQ29udHJvbHNUYXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZihfYmxvY2tDb250cm9sc1RhcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cblx0XHRcdGlmKF9vcHRpb25zLnRpbWVUb0lkbGUgJiYgX29wdGlvbnMubW91c2VVc2VkICYmICFfaXNJZGxlKSB7XG5cdFx0XHRcdC8vIHJlc2V0IGlkbGUgdGltZXJcblx0XHRcdFx0X29uSWRsZU1vdXNlTW92ZSgpO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsXG5cdFx0XHRcdHVpRWxlbWVudCxcblx0XHRcdFx0Y2xpY2tlZENsYXNzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJyxcblx0XHRcdFx0Zm91bmQ7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdWlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR1aUVsZW1lbnQgPSBfdWlFbGVtZW50c1tpXTtcblx0XHRcdFx0aWYodWlFbGVtZW50Lm9uVGFwICYmIGNsaWNrZWRDbGFzcy5pbmRleE9mKCdwc3dwX18nICsgdWlFbGVtZW50Lm5hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRcdHVpRWxlbWVudC5vblRhcCgpO1xuXHRcdFx0XHRcdGZvdW5kID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZvdW5kKSB7XG5cdFx0XHRcdGlmKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfYmxvY2tDb250cm9sc1RhcCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gU29tZSB2ZXJzaW9ucyBvZiBBbmRyb2lkIGRvbid0IHByZXZlbnQgZ2hvc3QgY2xpY2sgZXZlbnRcblx0XHRcdFx0Ly8gd2hlbiBwcmV2ZW50RGVmYXVsdCgpIHdhcyBjYWxsZWQgb24gdG91Y2hzdGFydCBhbmQvb3IgdG91Y2hlbmQuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoaXMgaGFwcGVucyBvbiB2NC4zLCA0LjIsIDQuMSxcblx0XHRcdFx0Ly8gb2xkZXIgdmVyc2lvbnMgc3RyYW5nZWx5IHdvcmsgY29ycmVjdGx5LFxuXHRcdFx0XHQvLyBidXQganVzdCBpbiBjYXNlIHdlIGFkZCBkZWxheSBvbiBhbGwgb2YgdGhlbSlcblx0XHRcdFx0dmFyIHRhcERlbGF5ID0gZnJhbWV3b3JrLmZlYXR1cmVzLmlzT2xkQW5kcm9pZCA/IDYwMCA6IDMwO1xuXHRcdFx0XHRfYmxvY2tDb250cm9sc1RhcFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwID0gZmFsc2U7XG5cdFx0XHRcdH0sIHRhcERlbGF5KTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0X2ZpdENvbnRyb2xzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICFwc3dwLmxpa2VseVRvdWNoRGV2aWNlIHx8IF9vcHRpb25zLm1vdXNlVXNlZCB8fCBzY3JlZW4ud2lkdGggPiBfb3B0aW9ucy5maXRDb250cm9sc1dpZHRoO1xuXHRcdH0sXG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjTmFtZSwgYWRkKSB7XG5cdFx0XHRmcmFtZXdvcmtbIChhZGQgPyAnYWRkJyA6ICdyZW1vdmUnKSArICdDbGFzcycgXShlbCwgJ3Bzd3BfXycgKyBjTmFtZSk7XG5cdFx0fSxcblxuXHRcdC8vIGFkZCBjbGFzcyB3aGVuIHRoZXJlIGlzIGp1c3Qgb25lIGl0ZW0gaW4gdGhlIGdhbGxlcnlcblx0XHQvLyAoYnkgZGVmYXVsdCBpdCBoaWRlcyBsZWZ0L3JpZ2h0IGFycm93cyBhbmQgMW9mWCBjb3VudGVyKVxuXHRcdF9jb3VudE51bUl0ZW1zID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaGFzT25lU2xpZGUgPSAoX29wdGlvbnMuZ2V0TnVtSXRlbXNGbigpID09PSAxKTtcblxuXHRcdFx0aWYoaGFzT25lU2xpZGUgIT09IF9nYWxsZXJ5SGFzT25lU2xpZGUpIHtcblx0XHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0tb25lLXNsaWRlJywgaGFzT25lU2xpZGUpO1xuXHRcdFx0XHRfZ2FsbGVyeUhhc09uZVNsaWRlID0gaGFzT25lU2xpZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9zaGFyZU1vZGFsLCAnc2hhcmUtbW9kYWwtLWhpZGRlbicsIF9zaGFyZU1vZGFsSGlkZGVuKTtcblx0XHR9LFxuXHRcdF90b2dnbGVTaGFyZU1vZGFsID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdF9zaGFyZU1vZGFsSGlkZGVuID0gIV9zaGFyZU1vZGFsSGlkZGVuO1xuXG5cblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzKCk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoX3NoYXJlTW9kYWwsICdwc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMzApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9zaGFyZU1vZGFsLCAncHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4nKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWxDbGFzcygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF91cGRhdGVTaGFyZVVSTHMoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0X29wZW5XaW5kb3dQb3B1cCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHRcdHBzd3Auc2hvdXQoJ3NoYXJlTGlua0NsaWNrJywgZSwgdGFyZ2V0KTtcblxuXHRcdFx0aWYoIXRhcmdldC5ocmVmKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cub3Blbih0YXJnZXQuaHJlZiwgJ3Bzd3Bfc2hhcmUnLCAnc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx0b29sYmFyPW5vLCcrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdsb2NhdGlvbj15ZXMsd2lkdGg9NTUwLGhlaWdodD00MjAsdG9wPTEwMCxsZWZ0PScgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQod2luZG93LnNjcmVlbiA/IE1hdGgucm91bmQoc2NyZWVuLndpZHRoIC8gMiAtIDI3NSkgOiAxMDApICApO1xuXG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0X3VwZGF0ZVNoYXJlVVJMcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNoYXJlQnV0dG9uT3V0ID0gJycsXG5cdFx0XHRcdHNoYXJlQnV0dG9uRGF0YSxcblx0XHRcdFx0c2hhcmVVUkwsXG5cdFx0XHRcdGltYWdlX3VybCxcblx0XHRcdFx0cGFnZV91cmwsXG5cdFx0XHRcdHNoYXJlX3RleHQ7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5zaGFyZUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2hhcmVCdXR0b25EYXRhID0gX29wdGlvbnMuc2hhcmVCdXR0b25zW2ldO1xuXG5cdFx0XHRcdGltYWdlX3VybCA9IF9vcHRpb25zLmdldEltYWdlVVJMRm9yU2hhcmUoc2hhcmVCdXR0b25EYXRhKTtcblx0XHRcdFx0cGFnZV91cmwgPSBfb3B0aW9ucy5nZXRQYWdlVVJMRm9yU2hhcmUoc2hhcmVCdXR0b25EYXRhKTtcblx0XHRcdFx0c2hhcmVfdGV4dCA9IF9vcHRpb25zLmdldFRleHRGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXG5cdFx0XHRcdHNoYXJlVVJMID0gc2hhcmVCdXR0b25EYXRhLnVybC5yZXBsYWNlKCd7e3VybH19JywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VfdXJsKSApXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgne3tpbWFnZV91cmx9fScsIGVuY29kZVVSSUNvbXBvbmVudChpbWFnZV91cmwpIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e3Jhd19pbWFnZV91cmx9fScsIGltYWdlX3VybCApXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgne3t0ZXh0fX0nLCBlbmNvZGVVUklDb21wb25lbnQoc2hhcmVfdGV4dCkgKTtcblxuXHRcdFx0XHRzaGFyZUJ1dHRvbk91dCArPSAnPGEgaHJlZj1cIicgKyBzaGFyZVVSTCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIiAnK1xuXHRcdFx0XHRcdFx0XHRcdFx0J2NsYXNzPVwicHN3cF9fc2hhcmUtLScgKyBzaGFyZUJ1dHRvbkRhdGEuaWQgKyAnXCInICtcblx0XHRcdFx0XHRcdFx0XHRcdChzaGFyZUJ1dHRvbkRhdGEuZG93bmxvYWQgPyAnZG93bmxvYWQnIDogJycpICsgJz4nICtcblx0XHRcdFx0XHRcdFx0XHRcdHNoYXJlQnV0dG9uRGF0YS5sYWJlbCArICc8L2E+JztcblxuXHRcdFx0XHRpZihfb3B0aW9ucy5wYXJzZVNoYXJlQnV0dG9uT3V0KSB7XG5cdFx0XHRcdFx0c2hhcmVCdXR0b25PdXQgPSBfb3B0aW9ucy5wYXJzZVNoYXJlQnV0dG9uT3V0KHNoYXJlQnV0dG9uRGF0YSwgc2hhcmVCdXR0b25PdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfc2hhcmVNb2RhbC5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBzaGFyZUJ1dHRvbk91dDtcblx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLm9uY2xpY2sgPSBfb3BlbldpbmRvd1BvcHVwO1xuXG5cdFx0fSxcblx0XHRfaGFzQ2xvc2VDbGFzcyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdFx0Zm9yKHZhciAgaSA9IDA7IGkgPCBfb3B0aW9ucy5jbG9zZUVsQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiggZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfXycgKyBfb3B0aW9ucy5jbG9zZUVsQ2xhc3Nlc1tpXSkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdF9pZGxlSW50ZXJ2YWwsXG5cdFx0X2lkbGVUaW1lcixcblx0XHRfaWRsZUluY3JlbWVudCA9IDAsXG5cdFx0X29uSWRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9pZGxlVGltZXIpO1xuXHRcdFx0X2lkbGVJbmNyZW1lbnQgPSAwO1xuXHRcdFx0aWYoX2lzSWRsZSkge1xuXHRcdFx0XHR1aS5zZXRJZGxlKGZhbHNlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9vbk1vdXNlTGVhdmVXaW5kb3cgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG5cdFx0XHR2YXIgZnJvbSA9IGUucmVsYXRlZFRhcmdldCB8fCBlLnRvRWxlbWVudDtcblx0XHRcdGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9pZGxlVGltZXIpO1xuXHRcdFx0XHRfaWRsZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR1aS5zZXRJZGxlKHRydWUpO1xuXHRcdFx0XHR9LCBfb3B0aW9ucy50aW1lVG9JZGxlT3V0c2lkZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBGdWxsc2NyZWVuQVBJID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihfb3B0aW9ucy5mdWxsc2NyZWVuRWwgJiYgIWZyYW1ld29yay5mZWF0dXJlcy5pc09sZEFuZHJvaWQpIHtcblx0XHRcdFx0aWYoIV9mdWxsc2NyZW5BUEkpIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJID0gdWkuZ2V0RnVsbHNjcmVlbkFQSSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgX2Z1bGxzY3JlbkFQSS5ldmVudEssIHVpLnVwZGF0ZUZ1bGxzY3JlZW4pO1xuXHRcdFx0XHRcdHVpLnVwZGF0ZUZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLXN1cHBvcnRzLWZzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHBzd3AudGVtcGxhdGUsICdwc3dwLS1zdXBwb3J0cy1mcycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBTZXR1cCBsb2FkaW5nIGluZGljYXRvclxuXHRcdFx0aWYoX29wdGlvbnMucHJlbG9hZGVyRWwpIHtcblxuXHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTtcblxuXHRcdFx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChfbG9hZGluZ0luZGljYXRvclRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0Ly8gZGlzcGxheSBsb2FkaW5nIGluZGljYXRvciB3aXRoIGRlbGF5XG5cdFx0XHRcdFx0X2xvYWRpbmdJbmRpY2F0b3JUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0aWYocHN3cC5jdXJySXRlbSAmJiBwc3dwLmN1cnJJdGVtLmxvYWRpbmcpIHtcblxuXHRcdFx0XHRcdFx0XHRpZiggIXBzd3AuYWxsb3dQcm9ncmVzc2l2ZUltZygpIHx8IChwc3dwLmN1cnJJdGVtLmltZyAmJiAhcHN3cC5jdXJySXRlbS5pbWcubmF0dXJhbFdpZHRoKSAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2hvdyBwcmVsb2FkZXIgaWYgcHJvZ3Jlc3NpdmUgbG9hZGluZyBpcyBub3QgZW5hYmxlZCxcblx0XHRcdFx0XHRcdFx0XHQvLyBvciBpbWFnZSB3aWR0aCBpcyBub3QgZGVmaW5lZCB5ZXQgKGJlY2F1c2Ugb2Ygc2xvdyBjb25uZWN0aW9uKVxuXHRcdFx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBpdGVtcy1jb250cm9sbGVyLmpzIGZ1bmN0aW9uIGFsbG93UHJvZ3Jlc3NpdmVJbWdcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTsgLy8gaGlkZSBwcmVsb2FkZXJcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0sIF9vcHRpb25zLmxvYWRpbmdJbmRpY2F0b3JEZWxheSk7XG5cblx0XHRcdFx0fSk7XG5cdFx0XHRcdF9saXN0ZW4oJ2ltYWdlTG9hZENvbXBsZXRlJywgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdFx0XHRpZihwc3dwLmN1cnJJdGVtID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uKGhpZGUpIHtcblx0XHRcdGlmKCBfbG9hZGluZ0luZGljYXRvckhpZGRlbiAhPT0gaGlkZSApIHtcblx0XHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfbG9hZGluZ0luZGljYXRvciwgJ3ByZWxvYWRlci0tYWN0aXZlJywgIWhpZGUpO1xuXHRcdFx0XHRfbG9hZGluZ0luZGljYXRvckhpZGRlbiA9IGhpZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfYXBwbHlOYXZCYXJHYXBzID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0dmFyIGdhcCA9IGl0ZW0udkdhcDtcblxuXHRcdFx0aWYoIF9maXRDb250cm9sc0luVmlld3BvcnQoKSApIHtcblxuXHRcdFx0XHR2YXIgYmFycyA9IF9vcHRpb25zLmJhcnNTaXplO1xuXHRcdFx0XHRpZihfb3B0aW9ucy5jYXB0aW9uRWwgJiYgYmFycy5ib3R0b20gPT09ICdhdXRvJykge1xuXHRcdFx0XHRcdGlmKCFfZmFrZUNhcHRpb25Db250YWluZXIpIHtcblx0XHRcdFx0XHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lciA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fY2FwdGlvbiBwc3dwX19jYXB0aW9uLS1mYWtlJyk7XG5cdFx0XHRcdFx0XHRfZmFrZUNhcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoIGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fY2FwdGlvbl9fY2VudGVyJykgKTtcblx0XHRcdFx0XHRcdF9jb250cm9scy5pbnNlcnRCZWZvcmUoX2Zha2VDYXB0aW9uQ29udGFpbmVyLCBfY2FwdGlvbkNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoX2NvbnRyb2xzLCAncHN3cF9fdWktLWZpdCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiggX29wdGlvbnMuYWRkQ2FwdGlvbkhUTUxGbihpdGVtLCBfZmFrZUNhcHRpb25Db250YWluZXIsIHRydWUpICkge1xuXG5cdFx0XHRcdFx0XHR2YXIgY2FwdGlvblNpemUgPSBfZmFrZUNhcHRpb25Db250YWluZXIuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IHBhcnNlSW50KGNhcHRpb25TaXplLDEwKSB8fCA0NDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IGJhcnMudG9wOyAvLyBpZiBubyBjYXB0aW9uLCBzZXQgc2l6ZSBvZiBib3R0b20gZ2FwIHRvIHNpemUgb2YgdG9wXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGdhcC5ib3R0b20gPSBiYXJzLmJvdHRvbSA9PT0gJ2F1dG8nID8gMCA6IGJhcnMuYm90dG9tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaGVpZ2h0IG9mIHRvcCBiYXIgaXMgc3RhdGljLCBubyBuZWVkIHRvIGNhbGN1bGF0ZSBpdFxuXHRcdFx0XHRnYXAudG9wID0gYmFycy50b3A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnYXAudG9wID0gZ2FwLmJvdHRvbSA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBJZGxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIHdoZW4gbW91c2UgaXMgdXNlZFxuXHRcdFx0aWYoX29wdGlvbnMudGltZVRvSWRsZSkge1xuXHRcdFx0XHRfbGlzdGVuKCdtb3VzZVVzZWQnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uSWRsZU1vdXNlTW92ZSk7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW91dCcsIF9vbk1vdXNlTGVhdmVXaW5kb3cpO1xuXG5cdFx0XHRcdFx0X2lkbGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X2lkbGVJbmNyZW1lbnQrKztcblx0XHRcdFx0XHRcdGlmKF9pZGxlSW5jcmVtZW50ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHVpLnNldElkbGUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgX29wdGlvbnMudGltZVRvSWRsZSAvIDIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cEhpZGluZ0NvbnRyb2xzRHVyaW5nR2VzdHVyZXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSGlkZSBjb250cm9scyBvbiB2ZXJ0aWNhbCBkcmFnXG5cdFx0XHRfbGlzdGVuKCdvblZlcnRpY2FsRHJhZycsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIG5vdyA8IDAuOTUpIHtcblx0XHRcdFx0XHR1aS5oaWRlQ29udHJvbHMoKTtcblx0XHRcdFx0fSBlbHNlIGlmKCFfY29udHJvbHNWaXNpYmxlICYmIG5vdyA+PSAwLjk1KSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIHdoZW4gcGluY2hpbmcgdG8gY2xvc2Vcblx0XHRcdHZhciBwaW5jaENvbnRyb2xzSGlkZGVuO1xuXHRcdFx0X2xpc3Rlbignb25QaW5jaENsb3NlJyAsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIG5vdyA8IDAuOSkge1xuXHRcdFx0XHRcdHVpLmhpZGVDb250cm9scygpO1xuXHRcdFx0XHRcdHBpbmNoQ29udHJvbHNIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYocGluY2hDb250cm9sc0hpZGRlbiAmJiAhX2NvbnRyb2xzVmlzaWJsZSAmJiBub3cgPiAwLjkpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9saXN0ZW4oJ3pvb21HZXN0dXJlRW5kZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cGluY2hDb250cm9sc0hpZGRlbiA9IGZhbHNlO1xuXHRcdFx0XHRpZihwaW5jaENvbnRyb2xzSGlkZGVuICYmICFfY29udHJvbHNWaXNpYmxlKSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fTtcblxuXG5cblx0dmFyIF91aUVsZW1lbnRzID0gW1xuXHRcdHtcblx0XHRcdG5hbWU6ICdjYXB0aW9uJyxcblx0XHRcdG9wdGlvbjogJ2NhcHRpb25FbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdF9jYXB0aW9uQ29udGFpbmVyID0gZWw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnc2hhcmUtbW9kYWwnLFxuXHRcdFx0b3B0aW9uOiAnc2hhcmVFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdF9zaGFyZU1vZGFsID0gZWw7XG5cdFx0XHR9LFxuXHRcdFx0b25UYXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2J1dHRvbi0tc2hhcmUnLFxuXHRcdFx0b3B0aW9uOiAnc2hhcmVFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdF9zaGFyZUJ1dHRvbiA9IGVsO1xuXHRcdFx0fSxcblx0XHRcdG9uVGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdidXR0b24tLXpvb20nLFxuXHRcdFx0b3B0aW9uOiAnem9vbUVsJyxcblx0XHRcdG9uVGFwOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3Vyckl0ZW0sIHRlbXBsYXRlIH0gPSBwc3dwO1xuICAgICAgICBpZiAodGVtcGxhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwc3dwLS16b29tZWQtaW4nKSkge1xuICAgICAgICAgIC8vIFJldHVybiB0byBpbml0aWFsIHpvb20gYW5kIHN5bmMgc2xpZGVyXG4gICAgICAgICAgX3pvb21TbGlkZXIudmFsdWUgPSAwO1xuICAgICAgICAgIHBzd3Auem9vbVRvKGN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwsIHsgeDogcHN3cC52aWV3cG9ydFNpemUueCAvIDIsIHk6IHBzd3Audmlld3BvcnRTaXplLnkgLyAyIH0sIDMzMyk7XG4gICAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LnJlbW92ZSgncHN3cC0tem9vbWVkLWluJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gem9vbSB0byBkb3VibGVUYXBab29tTGV2ZWwgYW5kIHN5bmMgc2xpZGVyXG4gICAgICAgICAgY29uc3QgZG91YmxlVGFwWm9vbUxldmVsID0gX29wdGlvbnMuZ2V0RG91YmxlVGFwWm9vbSh0cnVlLCBjdXJySXRlbSk7XG4gICAgICAgICAgX3pvb21TbGlkZXIudmFsdWUgPSAoZG91YmxlVGFwWm9vbUxldmVsIC0gY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCAvICgxIC0gY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkpICogMTA7XG4gICAgICAgICAgcHN3cC50b2dnbGVEZXNrdG9wWm9vbSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2NvdW50ZXInLFxuXHRcdFx0b3B0aW9uOiAnY291bnRlckVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0X2luZGV4SW5kaWNhdG9yID0gZWw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1jbG9zZScsXG5cdFx0XHRvcHRpb246ICdjbG9zZUVsJyxcblx0XHRcdG9uVGFwOiBwc3dwLmNsb3NlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1hcnJvdy0tbGVmdCcsXG5cdFx0XHRvcHRpb246ICdhcnJvd0VsJyxcblx0XHRcdG9uVGFwOiBwc3dwLnByZXZcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdidXR0b24tLWFycm93LS1yaWdodCcsXG5cdFx0XHRvcHRpb246ICdhcnJvd0VsJyxcblx0XHRcdG9uVGFwOiBwc3dwLm5leHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdidXR0b24tLWZzJyxcblx0XHRcdG9wdGlvbjogJ2Z1bGxzY3JlZW5FbCcsXG5cdFx0XHRvblRhcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkuaXNGdWxsc2NyZWVuKCkpIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJLmV4aXQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJLmVudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdwcmVsb2FkZXInLFxuXHRcdFx0b3B0aW9uOiAncHJlbG9hZGVyRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkge1xuXHRcdFx0XHRfbG9hZGluZ0luZGljYXRvciA9IGVsO1xuXHRcdFx0fVxuXHRcdH0sXG4gICAge1xuICAgICAgbmFtZTogJ3pvb20nLFxuICAgICAgb3B0aW9uOiAnem9vbUVsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd6b29tLWxhYmVsJyxcbiAgICAgIG9wdGlvbjogJ3pvb21MYWJlbEVsJyxcbiAgICB9XG5cdF07XG5cblx0dmFyIF9zZXR1cFVJRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaXRlbSxcblx0XHRcdGNsYXNzQXR0cixcblx0XHRcdHVpRWxlbWVudDtcblxuXHRcdHZhciBsb29wVGhyb3VnaENoaWxkRWxlbWVudHMgPSBmdW5jdGlvbihzQ2hpbGRyZW4pIHtcblx0XHRcdGlmKCFzQ2hpbGRyZW4pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbCA9IHNDaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBzQ2hpbGRyZW5baV07XG5cdFx0XHRcdGNsYXNzQXR0ciA9IGl0ZW0uY2xhc3NOYW1lO1xuXG5cdFx0XHRcdGZvcih2YXIgYSA9IDA7IGEgPCBfdWlFbGVtZW50cy5sZW5ndGg7IGErKykge1xuXHRcdFx0XHRcdHVpRWxlbWVudCA9IF91aUVsZW1lbnRzW2FdO1xuXG5cdFx0XHRcdFx0aWYoY2xhc3NBdHRyLmluZGV4T2YoJ3Bzd3BfXycgKyB1aUVsZW1lbnQubmFtZSkgPiAtMSAgKSB7XG5cblx0XHRcdFx0XHRcdGlmKCBfb3B0aW9uc1t1aUVsZW1lbnQub3B0aW9uXSApIHsgLy8gaWYgZWxlbWVudCBpcyBub3QgZGlzYWJsZWQgZnJvbSBvcHRpb25zXG5cblx0XHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKGl0ZW0sICdwc3dwX19lbGVtZW50LS1kaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHRpZih1aUVsZW1lbnQub25Jbml0KSB7XG5cdFx0XHRcdFx0XHRcdFx0dWlFbGVtZW50Lm9uSW5pdChpdGVtKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhpdGVtLCAncHN3cF9fZWxlbWVudC0tZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0Ly9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRsb29wVGhyb3VnaENoaWxkRWxlbWVudHMoX2NvbnRyb2xzLmNoaWxkcmVuKTtcblxuXHRcdHZhciB0b3BCYXIgPSAgZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhfY29udHJvbHMsICdwc3dwX190b3AtYmFyJyk7XG5cdFx0aWYodG9wQmFyKSB7XG5cdFx0XHRsb29wVGhyb3VnaENoaWxkRWxlbWVudHMoIHRvcEJhci5jaGlsZHJlbiApO1xuXHRcdH1cblx0fTtcblxuXG5cblxuXHR1aS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBleHRlbmQgb3B0aW9uc1xuXHRcdGZyYW1ld29yay5leHRlbmQocHN3cC5vcHRpb25zLCBfZGVmYXVsdFVJT3B0aW9ucywgdHJ1ZSk7XG5cblx0XHQvLyBjcmVhdGUgbG9jYWwgbGluayBmb3IgZmFzdCBhY2Nlc3Ncblx0XHRfb3B0aW9ucyA9IHBzd3Aub3B0aW9ucztcblxuXHRcdC8vIGZpbmQgcHN3cF9fdWkgZWxlbWVudFxuICAgIF9jb250cm9scyA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3MocHN3cC5zY3JvbGxXcmFwLCAncHN3cF9fdWknKTtcblxuICAgIF96b29tU2xpZGVyID0gX2NvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJyNwc3dwX196b29tJyk7XG5cblx0XHQvLyBjcmVhdGUgbG9jYWwgbGlua1xuICAgIF9saXN0ZW4gPSBwc3dwLmxpc3RlbjtcblxuICAgIGNvbnN0IG9uWm9vbVNsaWRlckNoYW5nZSA9IGUgPT4ge1xuICAgICAgY29uc3Qgem9vbUxldmVsID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IHsgaW5pdGlhbFpvb21MZXZlbCB9ID0gcHN3cC5jdXJySXRlbTtcbiAgICAgIGNvbnN0IHRhcmdldFpvb21MZXZlbCA9IGluaXRpYWxab29tTGV2ZWwgKyAoem9vbUxldmVsIC8gMTApICogKDEgLSBpbml0aWFsWm9vbUxldmVsKTtcbiAgICAgIHBzd3Auem9vbVRvKHRhcmdldFpvb21MZXZlbCwgeyB4OiBwc3dwLnZpZXdwb3J0U2l6ZS54IC8gMiwgeTogcHN3cC52aWV3cG9ydFNpemUueSAvIDIgfSwgMzMzKTtcblxuICAgICAgaWYgKHpvb21MZXZlbCA9PT0gMCkge1xuICAgICAgICBwc3dwLnRlbXBsYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Bzd3AtLXpvb21lZC1pbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHN3cC50ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwc3dwLS16b29tZWQtaW4nKTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHRfc2V0dXBIaWRpbmdDb250cm9sc0R1cmluZ0dlc3R1cmVzKCk7XG5cblx0XHQvLyB1cGRhdGUgY29udHJvbHMgd2hlbiBzbGlkZXMgY2hhbmdlXG5cdFx0X2xpc3RlbignYmVmb3JlQ2hhbmdlJywgdWkudXBkYXRlKTtcblxuXHRcdC8vIHRvZ2dsZSB6b29tIG9uIGRvdWJsZS10YXBcblx0XHRfbGlzdGVuKCdkb3VibGVUYXAnLCBmdW5jdGlvbihwb2ludCkge1xuXHRcdFx0dmFyIGluaXRpYWxab29tTGV2ZWwgPSBwc3dwLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRpZihwc3dwLmdldFpvb21MZXZlbCgpICE9PSBpbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdHBzd3Auem9vbVRvKGluaXRpYWxab29tTGV2ZWwsIHBvaW50LCAzMzMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHN3cC56b29tVG8oX29wdGlvbnMuZ2V0RG91YmxlVGFwWm9vbShmYWxzZSwgcHN3cC5jdXJySXRlbSksIHBvaW50LCAzMzMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gQWxsb3cgdGV4dCBzZWxlY3Rpb24gaW4gY2FwdGlvblxuXHRcdF9saXN0ZW4oJ3ByZXZlbnREcmFnRXZlbnQnLCBmdW5jdGlvbihlLCBpc0Rvd24sIHByZXZlbnRPYmopIHtcblx0XHRcdHZhciB0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXHRcdFx0aWYoXG5cdFx0XHRcdHQgJiZcblx0XHRcdFx0dC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50eXBlLmluZGV4T2YoJ21vdXNlJykgPiAtMSAmJlxuICAgICAgICAoXG4gICAgICAgICAgdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5kZXhPZignX19jYXB0aW9uJykgPiAwXG4gICAgICAgICAgfHwgKC8oU01BTEx8U1RST05HfEVNKS9pKS50ZXN0KHQudGFnTmFtZSlcbiAgICAgICAgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByZXZlbnRPYmoucHJldmVudCA9IGZhbHNlO1xuXHRcdFx0fVxuICAgIH0pO1xuXG5cdFx0Ly8gYmluZCBldmVudHMgZm9yIFVJXG5cdFx0X2xpc3RlbignYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoX2NvbnRyb2xzLCAncHN3cFRhcCBjbGljaycsIF9vbkNvbnRyb2xzVGFwKTtcbiAgICAgIGZyYW1ld29yay5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ3Bzd3BUYXAnLCB1aS5vbkdsb2JhbFRhcCk7XG4gICAgICBmcmFtZXdvcmsuYmluZChfem9vbVNsaWRlciwgJ2NoYW5nZScsIG9uWm9vbVNsaWRlckNoYW5nZSk7XG5cbiAgICAgIF9saXN0ZW4oJ2FmdGVyQ2hhbmdlJywgKCkgPT4geyBfem9vbVNsaWRlci52YWx1ZSA9IDA7IH0pO1xuXG5cdFx0XHRpZighcHN3cC5saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHRmcmFtZXdvcmsuYmluZChwc3dwLnNjcm9sbFdyYXAsICdtb3VzZW92ZXInLCB1aS5vbk1vdXNlT3Zlcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyB1bmJpbmQgZXZlbnRzIGZvciBVSVxuXHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9pZGxlSW50ZXJ2YWwpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaWRsZUludGVydmFsKTtcblx0XHRcdH1cblx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW91dCcsIF9vbk1vdXNlTGVhdmVXaW5kb3cpO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbklkbGVNb3VzZU1vdmUpO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChfY29udHJvbHMsICdwc3dwVGFwIGNsaWNrJywgX29uQ29udHJvbHNUYXApO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChwc3dwLnNjcm9sbFdyYXAsICdwc3dwVGFwJywgdWkub25HbG9iYWxUYXApO1xuICAgICAgZnJhbWV3b3JrLnVuYmluZChwc3dwLnNjcm9sbFdyYXAsICdtb3VzZW92ZXInLCB1aS5vbk1vdXNlT3Zlcik7XG4gICAgICBmcmFtZXdvcmsudW5iaW5kKF96b29tU2xpZGVyLCAnY2hhbmdlJywgb25ab29tU2xpZGVyQ2hhbmdlKTtcblxuXHRcdFx0aWYoX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCBfZnVsbHNjcmVuQVBJLmV2ZW50SywgdWkudXBkYXRlRnVsbHNjcmVlbik7XG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkuaXNGdWxsc2NyZWVuKCkpIHtcblx0XHRcdFx0XHRfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZXhpdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9mdWxsc2NyZW5BUEkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHQvLyBjbGVhbiB1cCB0aGluZ3Mgd2hlbiBnYWxsZXJ5IGlzIGRlc3Ryb3llZFxuXHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCkge1xuXHRcdFx0XHRpZihfZmFrZUNhcHRpb25Db250YWluZXIpIHtcblx0XHRcdFx0XHRfY29udHJvbHMucmVtb3ZlQ2hpbGQoX2Zha2VDYXB0aW9uQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX2NhcHRpb25Db250YWluZXIsICdwc3dwX19jYXB0aW9uLS1lbXB0eScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfc2hhcmVNb2RhbCkge1xuXHRcdFx0XHRfc2hhcmVNb2RhbC5jaGlsZHJlblswXS5vbmNsaWNrID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfY29udHJvbHMsICdwc3dwX191aS0tb3Zlci1jbG9zZScpO1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0XHR1aS5zZXRJZGxlKGZhbHNlKTtcblx0XHR9KTtcblxuXG5cdFx0aWYoIV9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbikge1xuXHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0fVxuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW4nLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbikge1xuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbU91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0fSk7XG5cblx0XHRfbGlzdGVuKCdwYXJzZVZlcnRpY2FsTWFyZ2luJywgX2FwcGx5TmF2QmFyR2Fwcyk7XG5cblx0XHRfc2V0dXBVSUVsZW1lbnRzKCk7XG5cblx0XHRpZihfb3B0aW9ucy5zaGFyZUVsICYmIF9zaGFyZUJ1dHRvbiAmJiBfc2hhcmVNb2RhbCkge1xuXHRcdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSB0cnVlO1xuXHRcdH1cblxuXHRcdF9jb3VudE51bUl0ZW1zKCk7XG5cblx0XHRfc2V0dXBJZGxlKCk7XG5cblx0XHRfc2V0dXBGdWxsc2NyZWVuQVBJKCk7XG5cblx0XHRfc2V0dXBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cdH07XG5cblx0dWkuc2V0SWRsZSA9IGZ1bmN0aW9uKGlzSWRsZSkge1xuXHRcdF9pc0lkbGUgPSBpc0lkbGU7XG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0taWRsZScsIGlzSWRsZSk7XG5cdH07XG5cblx0dWkudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIFVJIGlmIGl0J3MgaGlkZGVuXG5cdFx0aWYoX2NvbnRyb2xzVmlzaWJsZSAmJiBwc3dwLmN1cnJJdGVtKSB7XG5cblx0XHRcdHVpLnVwZGF0ZUluZGV4SW5kaWNhdG9yKCk7XG5cblx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCkge1xuXHRcdFx0XHRfb3B0aW9ucy5hZGRDYXB0aW9uSFRNTEZuKHBzd3AuY3Vyckl0ZW0sIF9jYXB0aW9uQ29udGFpbmVyKTtcblxuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jYXB0aW9uQ29udGFpbmVyLCAnY2FwdGlvbi0tZW1wdHknLCAhcHN3cC5jdXJySXRlbS50aXRsZSk7XG5cdFx0XHR9XG5cblx0XHRcdF9vdmVybGF5VUlVcGRhdGVkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfb3ZlcmxheVVJVXBkYXRlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHR9XG5cblx0XHRfY291bnROdW1JdGVtcygpO1xuXHR9O1xuXG5cdHVpLnVwZGF0ZUZ1bGxzY3JlZW4gPSBmdW5jdGlvbihlKSB7XG5cblx0XHRpZihlKSB7XG5cdFx0XHQvLyBzb21lIGJyb3dzZXJzIGNoYW5nZSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyB0aGUgZnVsbHNjcmVlblxuXHRcdFx0Ly8gc28gUGhvdG9Td2lwZSB1cGRhdGVzIGl0IGp1c3QgaW4gY2FzZVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cHN3cC5zZXRTY3JvbGxPZmZzZXQoIDAsIGZyYW1ld29yay5nZXRTY3JvbGxZKCkgKTtcblx0XHRcdH0sIDUwKTtcblx0XHR9XG5cblx0XHQvLyB0b29nbGUgcHN3cC0tZnMgY2xhc3Mgb24gcm9vdCBlbGVtZW50XG5cdFx0ZnJhbWV3b3JrWyAoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJyBdKHBzd3AudGVtcGxhdGUsICdwc3dwLS1mcycpO1xuXHR9O1xuXG5cdHVpLnVwZGF0ZUluZGV4SW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX29wdGlvbnMuY291bnRlckVsKSB7XG5cdFx0XHRfaW5kZXhJbmRpY2F0b3IuaW5uZXJIVE1MID0gKHBzd3AuZ2V0Q3VycmVudEluZGV4KCkrMSkgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfb3B0aW9ucy5pbmRleEluZGljYXRvclNlcCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9vcHRpb25zLmdldE51bUl0ZW1zRm4oKTtcblx0XHR9XG5cdH07XG5cblx0dWkub25HbG9iYWxUYXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHRpZihfYmxvY2tDb250cm9sc1RhcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKGUuZGV0YWlsICYmIGUuZGV0YWlsLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XG5cblx0XHRcdC8vIGNsb3NlIGdhbGxlcnkgaWYgY2xpY2tlZCBvdXRzaWRlIG9mIHRoZSBpbWFnZVxuXHRcdFx0aWYoX2hhc0Nsb3NlQ2xhc3ModGFyZ2V0KSkge1xuXHRcdFx0XHRwc3dwLmNsb3NlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfX2ltZycpKSB7XG5cdFx0XHRcdGlmKHBzd3AuZ2V0Wm9vbUxldmVsKCkgPT09IDEgJiYgcHN3cC5nZXRab29tTGV2ZWwoKSA8PSBwc3dwLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0aWYoX29wdGlvbnMuY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGUpIHtcblx0XHRcdFx0XHRcdHBzd3AuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHN3cC50b2dnbGVEZXNrdG9wWm9vbShlLmRldGFpbC5yZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyB0YXAgYW55d2hlcmUgKGV4Y2VwdCBidXR0b25zKSB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiBjb250cm9sc1xuXHRcdFx0aWYoX29wdGlvbnMudGFwVG9Ub2dnbGVDb250cm9scykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlKSB7XG5cdFx0XHRcdFx0dWkuaGlkZUNvbnRyb2xzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gdGFwIHRvIGNsb3NlIGdhbGxlcnlcblx0XHRcdGlmKF9vcHRpb25zLnRhcFRvQ2xvc2UgJiYgKGZyYW1ld29yay5oYXNDbGFzcyh0YXJnZXQsICdwc3dwX19pbWcnKSB8fCBfaGFzQ2xvc2VDbGFzcyh0YXJnZXQpKSApIHtcblx0XHRcdFx0cHN3cC5jbG9zZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHR9XG5cdH07XG5cdHVpLm9uTW91c2VPdmVyID0gZnVuY3Rpb24oZSkge1xuXHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG5cdFx0Ly8gYWRkIGNsYXNzIHdoZW4gbW91c2UgaXMgb3ZlciBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBnYWxsZXJ5XG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0tb3Zlci1jbG9zZScsIF9oYXNDbG9zZUNsYXNzKHRhcmdldCkpO1xuXHR9O1xuXG5cdHVpLmhpZGVDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay5hZGRDbGFzcyhfY29udHJvbHMsJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRfY29udHJvbHNWaXNpYmxlID0gZmFsc2U7XG5cdH07XG5cblx0dWkuc2hvd0NvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdFx0X2NvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG5cdFx0aWYoIV9vdmVybGF5VUlVcGRhdGVkKSB7XG5cdFx0XHR1aS51cGRhdGUoKTtcblx0XHR9XG5cdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9jb250cm9scywncHN3cF9fdWktLWhpZGRlbicpO1xuXHR9O1xuXG5cdHVpLnN1cHBvcnRzRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkID0gZG9jdW1lbnQ7XG5cdFx0cmV0dXJuICEhKGQuZXhpdEZ1bGxzY3JlZW4gfHwgZC5tb3pDYW5jZWxGdWxsU2NyZWVuIHx8IGQud2Via2l0RXhpdEZ1bGxzY3JlZW4gfHwgZC5tc0V4aXRGdWxsc2NyZWVuKTtcblx0fTtcblxuXHR1aS5nZXRGdWxsc2NyZWVuQVBJID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRFID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuXHRcdFx0YXBpLFxuXHRcdFx0dEYgPSAnZnVsbHNjcmVlbmNoYW5nZSc7XG5cblx0XHRpZiAoZEUucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ2V4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogdEZcblx0XHRcdH07XG5cblx0XHR9IGVsc2UgaWYoZEUubW96UmVxdWVzdEZ1bGxTY3JlZW4gKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHRcdFx0ZXhpdEs6ICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ21veicgKyB0RlxuXHRcdFx0fTtcblxuXG5cblx0XHR9IGVsc2UgaWYoZEUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ3dlYmtpdCcgKyB0RlxuXHRcdFx0fTtcblxuXHRcdH0gZWxzZSBpZihkRS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHRldmVudEs6ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmKGFwaSkge1xuXHRcdFx0YXBpLmVudGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGRpc2FibGUgY2xvc2Utb24tc2Nyb2xsIGluIGZ1bGxzY3JlZW5cblx0XHRcdFx0X2luaXRhbENsb3NlT25TY3JvbGxWYWx1ZSA9IF9vcHRpb25zLmNsb3NlT25TY3JvbGw7XG5cdFx0XHRcdF9vcHRpb25zLmNsb3NlT25TY3JvbGwgPSBmYWxzZTtcblxuXHRcdFx0XHRpZih0aGlzLmVudGVySyA9PT0gJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJykge1xuXHRcdFx0XHRcdHBzd3AudGVtcGxhdGVbdGhpcy5lbnRlcktdKCBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBzd3AudGVtcGxhdGVbdGhpcy5lbnRlcktdKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhcGkuZXhpdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfb3B0aW9ucy5jbG9zZU9uU2Nyb2xsID0gX2luaXRhbENsb3NlT25TY3JvbGxWYWx1ZTtcblxuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnRbdGhpcy5leGl0S10oKTtcblxuXHRcdFx0fTtcblx0XHRcdGFwaS5pc0Z1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIGRvY3VtZW50W3RoaXMuZWxlbWVudEtdOyB9O1xuXHRcdH1cblxuXHRcdHJldHVybiBhcGk7XG5cdH07XG5cblxuXG59O1xucmV0dXJuIFBob3RvU3dpcGVVSTtcblxuXG59KTtcbiIsImltcG9ydCB7IGxvd0xldmVsSW5pdCwgbG93TGV2ZWxHZXRPbmUsIGxvd0xldmVsSGFzLCBsb3dMZXZlbFNldCB9IGZyb20gJ2xpbWl0ZWQtY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplQ2FjaGUge1xuICBjb25zdHJ1Y3Rvcih7IGlkIH0pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgY29uc3QgbG9hZGVkQ2FjaGUgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1heENhY2hlU2l6ZTogZmFsc2UsXG4gICAgICBtYXhDYWNoZVRpbWU6IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xuICAgIH07XG5cbiAgICB0aGlzLmNhY2hlTWV0YSA9IGxvd0xldmVsSW5pdChsb2FkZWRDYWNoZSB8fCBvcHRpb25zKTtcblxuICAgIGNvbnNvbGUubG9nKCdjYWNoZU1ldGEnLCB0aGlzLmNhY2hlTWV0YSk7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGxvd0xldmVsU2V0KHRoaXMuY2FjaGVNZXRhLCBrZXksIHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygnY2FjaGVNZXRhIGFmdGVyIHNldCcsIHRoaXMuY2FjaGVNZXRhKTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gbG93TGV2ZWxHZXRPbmUodGhpcy5jYWNoZU1ldGEsIGtleSk7XG4gIH1cblxuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuIGxvd0xldmVsSGFzKHRoaXMuY2FjaGVNZXRhLCBrZXkpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYWNoZU1ldGEpKTtcbiAgfVxufVxuIiwiLy8gU3R5bGVzIChzbyB3ZWJwYWNrIHByb2Nlc3NlcyBzYXNzKVxuaW1wb3J0ICcuL2NvbnRlbnQuc2Nzcyc7XG5cbi8vIE1hcmt1cCAodG8gaW5qZWN0KVxuaW1wb3J0IGxhdW5jaGVyTWFya3VwIGZyb20gJy4vY29tcG9uZW50cy9sYXVuY2hlci5odG1sJztcbmltcG9ydCBnYWxsZXJ5TWFya3VwIGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5Lmh0bWwnO1xuXG4vLyBQaG90b3N3aXBlXG5cbmltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0IFBob3RvU3dpcGVVSSBmcm9tICcuL2NvbXBvbmVudHMvcGhvdG9zd2lwZS11aSc7XG5cbmltcG9ydCBpbWFnZVByb2JlRmV0Y2ggZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlUHJvYmVGZXRjaCc7XG5pbXBvcnQgU2l6ZUNhY2hlIGZyb20gJy4vY29tcG9uZW50cy9zaXplQ2FjaGUnO1xuXG4vLyBJbmplY3QgbWFya3VwXG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGF1bmNoZXJNYXJrdXApO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGdhbGxlcnlNYXJrdXApO1xuXG5jb25zdCBsYXVuY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS15d3pnLWdhbGxlcnktb3Blbl0nKTtcbmNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEteXd6Zy1kb3dubG9hZC1hbGxdJyk7XG5cbmNvbnN0IGluc2VydE1lc3NhZ2VTY3JpcHQgPSAoKSA9PiB7XG4gIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIGNvbnN0IHNjcmlwdCA9IFwid2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1JFRFVYX1NUQVRFJywgc3RhdGU6IF9fUkVEVVhfU1RBVEVfXyB9KVwiO1xuICBzY3JpcHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzY3JpcHQpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0RWwpO1xufVxuXG5jb25zdCBnZXRJbWFnZVVybHMgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgaW5zZXJ0TWVzc2FnZVNjcmlwdCgpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZSA9PiB7XG4gICAgaWYgKGUuc291cmNlICE9IHdpbmRvdykgcmV0dXJuO1xuXG4gICAgaWYgKGUuZGF0YS50eXBlICYmIGUuZGF0YS50eXBlID09PSAnUkVEVVhfU1RBVEUnKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGUuZGF0YS5zdGF0ZTtcblxuICAgICAgaWYgKCFzdGF0ZSkgcmVzb2x2ZShbXSk7XG5cbiAgICAgIGNvbnN0IGltYWdlcyA9IHN0YXRlLmFwcC5kYXRhLm1lZGlhLmZpbHRlcigoeyBtZWRpYVR5cGUgfSkgPT4gbWVkaWFUeXBlID09PSAnaW1hZ2UnKTtcblxuICAgICAgLy8gcGFyc2Ugc3JjIGFzIFVSTCB0byBlbnN1cmUgdGhlcmUgYXJlIG5vIHF1ZXJ5IHBhcmFtc1xuICAgICAgY29uc3QgdXJscyA9IGltYWdlc1xuICAgICAgICAubWFwKGltYWdlID0+IGltYWdlLnVybClcbiAgICAgICAgLm1hcCh1cmxTdHJpbmcgPT4gbmV3IFVSTCh1cmxTdHJpbmcpKVxuICAgICAgICAubWFwKHVybCA9PiBgJHt1cmwub3JpZ2lufSR7dXJsLnBhdGhuYW1lfWApO1xuXG4gICAgICByZXNvbHZlKHVybHMpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gVGhpcyBjb3VsZCBiZSBpbXByb3ZlZCB0byBsYXVuY2ggdGhlIGdhbGxlcnkgYXMgc29vbiBhcyB3ZSBoYXZlIHRoZSBmaXJzdCBpbWFnZSxcbiAgLy8gdGhlbiBkeW5hbWljYWxseSBhZGQgYWxsIG90aGVyIGltYWdlcyBhcyBkYXRhIGlzIHJldHJpZXZlZC5cbiAgY29uc3QgaW1hZ2VVcmxzID0gYXdhaXQgZ2V0SW1hZ2VVcmxzO1xuXG4gIGlmICghaW1hZ2VVcmxzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIGxhdW5jaEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBjb25zdCBzaXplQ2FjaGUgPSBuZXcgU2l6ZUNhY2hlKCd5dy1nYWxsZXJ5LXNpemUtY2FjaGUtdjEnKTtcblxuICBjb25zdCBpbWFnZVNpemVzID0gYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VVcmxzLm1hcCh1cmwgPT4gaW1hZ2VQcm9iZUZldGNoKHVybCwgc2l6ZUNhY2hlKSkpO1xuXG4gIHNpemVDYWNoZS5zYXZlKCk7XG5cbiAgY29uc3QgaXRlbXMgPSBpbWFnZVVybHMubWFwKCh1cmwsIGkpID0+ICh7XG4gICAgc3JjOiB1cmwsXG4gICAgdzogaW1hZ2VTaXplc1tpXS53aWR0aCxcbiAgICBoOiBpbWFnZVNpemVzW2ldLmhlaWdodCxcbiAgICB0aXRsZTogdXJsLFxuICB9KSk7XG5cbiAgY29uc29sZS5sb2coaXRlbXMpO1xuXG4gIGNvbnN0IHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBzd3AnKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGJnT3BhY2l0eTogMC45LFxuICAgIGluZGV4OiAwLCAvLyBzdGFydCBhdCBmaXJzdCBzbGlkZVxuICAgIGNsaWNrVG9DbG9zZU5vblpvb21hYmxlOiBmYWxzZSxcbiAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICBjbG9zZU9uVmVydGljYWxEcmFnOiBmYWxzZSxcbiAgICBjbG9zZU9uU2Nyb2xsOiBmYWxzZSxcbiAgICBwaW5jaFRvQ2xvc2U6IGZhbHNlLFxuICAgIGdldERvdWJsZVRhcFpvb206IChpc01vdXNlQ2xpY2ssIGl0ZW0pID0+ICBNYXRoLm1pbigxLCBpdGVtLmluaXRpYWxab29tTGV2ZWwgKiAyKSxcbiAgICBpc0NsaWNrYWJsZUVsZW1lbnQ6IGVsID0+IGVsLnRhZ05hbWUgPT09ICdBJyB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bzd3BfX3pvb20nKSxcbiAgICBjbG9zZUVsQ2xhc3NlczogW10sXG4gIH07XG5cbiAgbGV0IGdhbGxlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG9wZW5HYWxsZXJ5ID0gKCkgPT4ge1xuICAgIGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZShwc3dwRWxlbWVudCwgUGhvdG9Td2lwZVVJLCBpdGVtcywgb3B0aW9ucyk7XG5cbiAgICAvLyBVcGRhdGUgaW5kZXggc28gZ2FsbGVyeSByZS1vcGVucyB0byBzYW1lIHNsaWRlXG4gICAgZ2FsbGVyeS5saXN0ZW4oJ2FmdGVyQ2hhbmdlJywgKCkgPT4geyBvcHRpb25zLmluZGV4ID0gZ2FsbGVyeS5nZXRDdXJyZW50SW5kZXgoKTsgfSk7XG4gICAgZ2FsbGVyeS5saXN0ZW4oJ2Rlc3Ryb3knLCAoKSA9PiB7IGdhbGxlcnkgPSBudWxsIH0pO1xuXG4gICAgLy8gQnVnIGZpeCB0byBwcmV2ZW50IGdhbGxlcnkgZnJvbSBjbG9zaW5nIG9uIHZlcnRpY2FsIGRyYWdcbiAgICBpZiAoZ2FsbGVyeS5vcHRpb25zLm1vdXNlVXNlZCkge1xuICAgICAgZ2FsbGVyeS5vcHRpb25zLmNsb3NlT25WZXJ0aWNhbERyYWcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FsbGVyeS5saXN0ZW4oJ21vdXNlVXNlZCcsICgpID0+IHtcbiAgICAgICAgZ2FsbGVyeS5vcHRpb25zLmNsb3NlT25WZXJ0aWNhbERyYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdhbGxlcnkuaW5pdCgpO1xuICB9O1xuXG4gIGxhdW5jaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5HYWxsZXJ5KTtcblxuICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWdhbGxlcnkpIHJldHVybjtcbiAgICBnYWxsZXJ5Lmxpc3RlbignZGVzdHJveScsICgpID0+IHtcbiAgICAgIC8vIFNob3cgZGV0YWlscyBhbmQgc3BlY3MgYXQgb25jZSBzbyBpdCBpcyBhbGwgY2FwdHVyZWRcbiAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hdC1kZXRhaWxzLWNvbnRlbnQgLmNvbGxhcHNlLWNvbnRlbnQtZGV0YWlscycpO1xuICAgICAgY29uc3QgZGlzcGxheVN0YXRlID0gWy4uLmluZm9dLm1hcChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSk7XG4gICAgICBpbmZvLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgZXh0ZW5zaW9uIGVsZW1lbnRzIGJlY2F1c2UgaW5qZWN0ZWQgc3R5bGVzaGVldHNcbiAgICAgIC8vIGFyZSBub3QgaW5jbHVkZWQgaW4gcGFnZSBjYXB0dXJlXG4gICAgICBjb25zdCBleHRlbnNpb25VSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3dwLCAueXF6Zy1sYXVuY2hlcicpO1xuICAgICAgZXh0ZW5zaW9uVUkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcblxuICAgICAgLy8gV2FpdCB0byBlbnN1cmUgc3R5bGVzIGFyZSBhcHBsaWVkXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBkb3dubG9hZExpc3Q6IGltYWdlVXJscyB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlID09PSAncGFnZSBjYXB0dXJlZCcpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0byBvcmlnaW5hbCB2aWV3IG9uY2UgcGFnZSBpcyBjYXB0dXJlZC5cbiAgICAgICAgICAgIGluZm8uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJykpO1xuICAgICAgICAgICAgaW5mby5mb3JFYWNoKChlbCwgaSkgPT4gZWwuY2xhc3NMaXN0LmFkZChkaXNwbGF5U3RhdGVbaV0gPyAnb3BlbicgOiAnY2xvc2VkJykpO1xuICAgICAgICAgICAgZXh0ZW5zaW9uVUkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xuICAgICAgICAgICAgb3BlbkdhbGxlcnkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBnYWxsZXJ5LmNsb3NlKCk7XG4gIH0pO1xuXG4gIGxhdW5jaEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxubWFpbigpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==