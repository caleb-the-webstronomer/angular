(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, ".light-theme {\n  background-color: #eeeeee;\n  color: #222222;\n}\n.light-theme .box,\n.light-theme .buttt {\n  box-shadow: 3px 3px 8px #d5d5d5, -5px -5px 8px white !important;\n}\n.light-theme h3 {\n  color: #c60025;\n}\n.light-theme h5 {\n  color: #222222;\n}\n.dark-theme {\n  background-color: #333333;\n  color: #eeeeee;\n}\n.dark-theme .box,\n.dark-theme .buttt {\n  box-shadow: 3px 3px 8px #1a1a1a, -5px -5px 8px #4d4d4d !important;\n}\n.dark-theme h3 {\n  color: #ff2d54;\n}\n.dark-theme h5 {\n  color: #eeeeee;\n}\n* {\n  box-sizing: border-box;\n  outline: none !important;\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml,\nbody,\n.light-theme,\n.dark-theme {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Comfortaa\" !important;\n}\n.landing {\n  padding-top: 20vh;\n  text-align: center;\n}\n.landing .box {\n  width: 300px;\n  padding: 20px;\n  margin: auto;\n  border-radius: 10px;\n}\n.landing img {\n  width: 150px;\n}\n.landing h3 {\n  display: block;\n  letter-spacing: 2.4px;\n}\n.landing h5 {\n  font-weight: 300;\n  letter-spacing: 2px;\n  font-size: 0.8em;\n}", "", {
      "version": 3,
      "sources": ["/Users/kaptainti/Documents/2/caleb/angular/src/variables.scss", "styles.scss", "/Users/kaptainti/Documents/2/caleb/angular/src/styles.scss"],
      "names": [],
      "mappings": "AAKE;EACE,yBAiBwB;EAhBxB,cAgBiC;ACpBrC;ADMI;;EAEE,+DAPS;ACGf;ADOI;EACE,cAfE;ACUR;ADOI;EACE,cAK+B;ACVrC;ADRE;EACE,yBAkBuB;EAjBvB,cAiBgC;ACNpC;ADTI;;EAEE,iEAPS;ACkBf;ADRI;EACE,cAdE;ACwBR;ADRI;EACE,cAM8B;ACIpC;AC1BA;EACE,sBAAA;EACA,wBAAA;AD6BF;AC1BA;;EAEE,sBAAA;AD6BF;AC1BA;;;;EAIE,SAAA;EACA,aAAA;EACA,YAAA;EACA,mCAAA;AD6BF;AC1BA;EACE,iBAAA;EACA,kBAAA;AD6BF;AC5BE;EACE,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;AD8BJ;AC3BE;EACE,YAAA;AD6BJ;AC1BE;EACE,cAAA;EACA,qBAAA;AD4BJ;ACzBE;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;AD2BJ",
      "file": "styles.scss",
      "sourcesContent": ["$colrl: #c60025;\n$colrd: lighten($colrl, 20%);\n\n@mixin theme($theme-name, $bg, $col, $tcol) {\n  $box-shadow: 3px 3px 8px darken($bg, 10%), -5px -5px 8px lighten($bg, 10%) !important;\n  .#{$theme-name} {\n    background-color: $bg;\n    color: $col;\n\n    .box,\n    .buttt {\n      box-shadow: $box-shadow;\n    }\n\n    h3 {\n      color: $tcol;\n    }\n    h5 {\n      color: $col;\n    }\n  }\n}\n\n@include theme(light-theme, #eeeeee, #222222, $colrl);\n@include theme(dark-theme, #333333, #eeeeee, $colrd);\n", ".light-theme {\n  background-color: #eeeeee;\n  color: #222222;\n}\n.light-theme .box,\n.light-theme .buttt {\n  box-shadow: 3px 3px 8px #d5d5d5, -5px -5px 8px white !important;\n}\n.light-theme h3 {\n  color: #c60025;\n}\n.light-theme h5 {\n  color: #222222;\n}\n\n.dark-theme {\n  background-color: #333333;\n  color: #eeeeee;\n}\n.dark-theme .box,\n.dark-theme .buttt {\n  box-shadow: 3px 3px 8px #1a1a1a, -5px -5px 8px #4d4d4d !important;\n}\n.dark-theme h3 {\n  color: #ff2d54;\n}\n.dark-theme h5 {\n  color: #eeeeee;\n}\n\n* {\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\n.light-theme,\n.dark-theme {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Comfortaa\" !important;\n}\n\n.landing {\n  padding-top: 20vh;\n  text-align: center;\n}\n.landing .box {\n  width: 300px;\n  padding: 20px;\n  margin: auto;\n  border-radius: 10px;\n}\n.landing img {\n  width: 150px;\n}\n.landing h3 {\n  display: block;\n  letter-spacing: 2.4px;\n}\n.landing h5 {\n  font-weight: 300;\n  letter-spacing: 2px;\n  font-size: 0.8em;\n}", "@import \"./variables.scss\";\n\n* {\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\n.light-theme,\n.dark-theme {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Comfortaa\" !important;\n}\n\n.landing {\n  padding-top: 20vh;\n  text-align: center;\n  .box {\n    width: 300px;\n    padding: 20px;\n    margin: auto;\n    border-radius: 10px;\n  }\n\n  img {\n    width: 150px;\n  }\n\n  h3 {\n    display: block;\n    letter-spacing: 2.4px;\n  }\n\n  h5 {\n    font-weight: 300;\n    letter-spacing: 2px;\n    font-size: 0.8em;\n  }\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kaptainti/Documents/2/caleb/angular/src/styles.scss */
    "./src/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map