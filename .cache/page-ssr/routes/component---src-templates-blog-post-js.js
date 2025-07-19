exports.id = "component---src-templates-blog-post-js";
exports.ids = ["component---src-templates-blog-post-js"];
exports.modules = {

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist lazy recursive":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/ lazy namespace object ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/gatsby-plugin-mdx/dist lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cachedImport = cachedImport;
exports.createFileToMdxCacheKey = createFileToMdxCacheKey;
function createFileToMdxCacheKey(absolutePath) {
  return `fileToMdx-${absolutePath}`;
}
const importCache = new Map();
async function cachedImport(packageName) {
  if (importCache.has(packageName)) {
    return importCache.get(packageName);
  }
  const importedPackage = await __webpack_require__("./node_modules/gatsby-plugin-mdx/dist lazy recursive")(packageName);
  return importedPackage;
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/compile-mdx.js":
/*!************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/compile-mdx.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compileMDX = compileMDX;
exports.compileMDXWithCustomOptions = void 0;
var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));
var _pluginOptions = __webpack_require__(/*! ./plugin-options */ "./node_modules/gatsby-plugin-mdx/dist/plugin-options.js");
var _errorUtils = __webpack_require__(/*! ./error-utils */ "./node_modules/gatsby-plugin-mdx/dist/error-utils.js");
var _cacheHelpers = __webpack_require__(/*! ./cache-helpers */ "./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js");
// Compiles MDX into JS
// Differences to original @mdx-js/loader:
// * We pass the MDX node and a metadata object to the processor
// * We inject the path to the original mdx file into the VFile which is used by the processor
async function compileMDX({
  absolutePath,
  source
}, options, cache, reporter) {
  try {
    const {
      createProcessor
    } = await (0, _cacheHelpers.cachedImport)(`@mdx-js/mdx`);
    const {
      VFile
    } = await (0, _cacheHelpers.cachedImport)(`vfile`);
    const processor = createProcessor(options);

    // Pass required custom data into the processor
    processor.data(`mdxNodeId`, await cache.get((0, _cacheHelpers.createFileToMdxCacheKey)(absolutePath)));
    processor.data(`mdxMetadata`, {});
    const result = await processor.process(
    // Inject path to original file for remark plugins. See: https://github.com/gatsbyjs/gatsby/issues/26914
    new VFile({
      value: source,
      path: absolutePath
    }));

    // Clone metadata so ensure it won't be overridden by later processings
    const clonedMetadata = Object.assign({}, processor.data(`mdxMetadata`));
    const processedMDX = result.toString();
    return {
      processedMDX,
      metadata: clonedMetadata
    };
  } catch (error) {
    reporter.panicOnBuild({
      id: _errorUtils.ERROR_CODES.MdxCompilation,
      context: {
        absolutePath,
        errorMeta: error
      }
    });
    return null;
  }
}

/**
 * This helper function allows you to inject additional plugins and configuration into the MDX
 * compilation pipeline. Very useful to create your own resolvers that return custom metadata.
 * Internally used to generate the tables of contents and the excerpts.
 */
const compileMDXWithCustomOptions = async ({
  absolutePath,
  source
}, {
  pluginOptions,
  customOptions,
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  store
}) => {
  const customPluginOptions = (0, _deepmerge.default)(Object.assign({}, pluginOptions), customOptions);

  // Prepare MDX compile
  const mdxOptions = await (0, _pluginOptions.enhanceMdxOptions)(customPluginOptions, {
    getNode,
    getNodesByType,
    pathPrefix,
    reporter,
    cache,
    store
  });

  // Compile MDX and extract metadata
  return compileMDX({
    source: source,
    absolutePath: absolutePath
  }, mdxOptions, cache, reporter);
};
exports.compileMDXWithCustomOptions = compileMDXWithCustomOptions;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/error-utils.js":
/*!************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/error-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ERROR_MAP = exports.ERROR_CODES = void 0;
const ERROR_CODES = {
  MdxCompilation: `10001`,
  NonExistentFileNode: `10002`,
  InvalidAcornAST: `10003`,
  NonDeterminableExportName: `10004`,
  AcornCompilation: `10005`
};
exports.ERROR_CODES = ERROR_CODES;
const ERROR_MAP = {
  [ERROR_CODES.MdxCompilation]: {
    text: context => `Failed to compile the file "${context.absolutePath}". Original error message:\n\n${context.errorMeta.message}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [ERROR_CODES.NonExistentFileNode]: {
    text: context => `Unable to locate the GraphQL File node for ${context.resourcePath}${context.mdxPath ? `\nFile: ${context.mdxPath}` : ``}`,
    level: `ERROR`,
    type: `PLUGIN`
  },
  [ERROR_CODES.InvalidAcornAST]: {
    text: context => `Invalid AST. Parsed source code did not return valid output.\n\nTemplate:\n${context.resourcePath}${context.mdxPath ? `\nFile: ${context.mdxPath}` : ``}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [ERROR_CODES.NonDeterminableExportName]: {
    text: context => `Unable to determine default export name for file:\n${context.resourcePath}`,
    level: `ERROR`,
    type: `PLUGIN`
  },
  [ERROR_CODES.AcornCompilation]: {
    text: context => `Unable to inject MDX into JS template:\n${context.resourcePath}`,
    level: `ERROR`,
    type: `PLUGIN`
  }
};
exports.ERROR_MAP = ERROR_MAP;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/get-source-plugins-as-remark-plugins.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/get-source-plugins-as-remark-plugins.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSourcePluginsAsRemarkPlugins = getSourcePluginsAsRemarkPlugins;
async function getSourcePluginsAsRemarkPlugins({
  gatsbyRemarkPlugins,
  getNode,
  getNodesByType,
  reporter,
  cache,
  pathPrefix
}) {
  const userPluginsFiltered = gatsbyRemarkPlugins ? gatsbyRemarkPlugins.filter(plugin => typeof plugin.module === `function`) : [];
  if (!userPluginsFiltered.length) {
    return [];
  }
  const userPlugins = userPluginsFiltered.map(plugin => {
    const requiredPlugin = plugin.module;
    const wrappedGatsbyPlugin = function wrappedGatsbyPlugin() {
      // eslint-disable-next-line @babel/no-invalid-this
      const mdxNode = getNode(this.data(`mdxNodeId`));
      return async function transformer(markdownAST) {
        // Execute gatsby-remark-* plugin
        await requiredPlugin({
          markdownAST,
          markdownNode: mdxNode,
          getNode,
          getNodesByType,
          get files() {
            return getNodesByType(`File`);
          },
          pathPrefix,
          reporter,
          cache
        }, plugin.pluginOptions || {});
      };
    };
    return wrappedGatsbyPlugin;
  });
  return userPlugins;
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _compileMdx = __webpack_require__(/*! ./compile-mdx */ "./node_modules/gatsby-plugin-mdx/dist/compile-mdx.js");
Object.keys(_compileMdx).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _compileMdx[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compileMdx[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/plugin-options.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/plugin-options.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.enhanceMdxOptions = exports.defaultOptions = void 0;
var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));
var _cacheHelpers = __webpack_require__(/*! ./cache-helpers */ "./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js");
var _getSourcePluginsAsRemarkPlugins = __webpack_require__(/*! ./get-source-plugins-as-remark-plugins */ "./node_modules/gatsby-plugin-mdx/dist/get-source-plugins-as-remark-plugins.js");
var _rehypeMetadataExtractor = _interopRequireDefault(__webpack_require__(/*! ./rehype-metadata-extractor */ "./node_modules/gatsby-plugin-mdx/dist/rehype-metadata-extractor.js"));
var _remarkMdxHtmlPlugin = __webpack_require__(/*! ./remark-mdx-html-plugin */ "./node_modules/gatsby-plugin-mdx/dist/remark-mdx-html-plugin.js");
var _remarkPathPrefixPlugin = __webpack_require__(/*! ./remark-path-prefix-plugin */ "./node_modules/gatsby-plugin-mdx/dist/remark-path-prefix-plugin.js");
const defaultOptions = pluginOptions => {
  const mdxOptions = {
    format: `mdx`,
    useDynamicImport: true,
    providerImportSource: `@mdx-js/react`
  };
  const defaults = {
    extensions: [`.mdx`],
    mdxOptions
  };
  const options = (0, _deepmerge.default)(defaults, pluginOptions);
  return options;
};
exports.defaultOptions = defaultOptions;
const enhanceMdxOptions = async (pluginOptions, helpers) => {
  const options = defaultOptions(pluginOptions);
  const {
    default: remarkUnwrapImages
  } = await (0, _cacheHelpers.cachedImport)(`remark-unwrap-images`);

  // Set jsxRuntime & jsxImportSource based on Gatsby project config
  const {
    config
  } = helpers.store.getState();
  const {
    jsxRuntime,
    jsxImportSource
  } = config;
  options.mdxOptions.jsxRuntime = jsxRuntime || `classic`;
  options.mdxOptions.jsxImportSource = jsxImportSource || `react`;
  if (!options.mdxOptions.remarkPlugins) {
    options.mdxOptions.remarkPlugins = [];
  }

  // The unwrapping has to happen before any other remark plugins are run (especially gatsby-remark-images)
  // Otherwise remark-unwrap-images would operate on the already transformed images
  options.mdxOptions.remarkPlugins.push(remarkUnwrapImages);

  // Inject Gatsby path prefix if needed
  if (helpers.pathPrefix) {
    options.mdxOptions.remarkPlugins.push([_remarkPathPrefixPlugin.remarkPathPlugin, {
      pathPrefix: helpers.pathPrefix
    }]);
  }

  // Support gatsby-remark-* plugins
  if (options.gatsbyRemarkPlugins && Object.keys(options.gatsbyRemarkPlugins).length) {
    if (!options.mdxOptions.remarkPlugins) {
      options.mdxOptions.remarkPlugins = [];
    }

    // Parser plugins
    for (const plugin of options.gatsbyRemarkPlugins) {
      const requiredPlugin = plugin.module;
      if (typeof requiredPlugin.setParserPlugins === `function`) {
        for (const parserPlugin of requiredPlugin.setParserPlugins(plugin.pluginOptions || {})) {
          if (Array.isArray(parserPlugin)) {
            const [parser, parserPluginOptions] = parserPlugin;
            options.mdxOptions.remarkPlugins.push([parser, parserPluginOptions]);
          } else {
            options.mdxOptions.remarkPlugins.push(parserPlugin);
          }
        }
      }
    }

    // Transformer plugins
    const gatsbyRemarkPlugins = await (0, _getSourcePluginsAsRemarkPlugins.getSourcePluginsAsRemarkPlugins)({
      gatsbyRemarkPlugins: options.gatsbyRemarkPlugins,
      ...helpers
    });
    if (gatsbyRemarkPlugins) {
      options.mdxOptions.remarkPlugins.push(...gatsbyRemarkPlugins);
    }
  }
  options.mdxOptions.remarkPlugins.push(_remarkMdxHtmlPlugin.remarkMdxHtmlPlugin);
  if (!options.mdxOptions.rehypePlugins) {
    options.mdxOptions.rehypePlugins = [];
  }
  const passThrough = [`element`];
  if (!options.mdxOptions.remarkRehypeOptions) {
    options.mdxOptions.remarkRehypeOptions = {};
  }
  options.mdxOptions.remarkRehypeOptions.passThrough = passThrough;

  // Extract metadata generated from by rehype-infer-* and similar plugins
  options.mdxOptions.rehypePlugins.push(_rehypeMetadataExtractor.default);
  return options.mdxOptions;
};
exports.enhanceMdxOptions = enhanceMdxOptions;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/rehype-metadata-extractor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/rehype-metadata-extractor.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * This plugin extracts metadata from the file and stores it
 * within the unified processor data for later extraction.
 */
const rehypeMdxMetadataExtractor = function () {
  const metadata = {};
  // eslint-disable-next-line @babel/no-invalid-this
  this.data(`mdxMetadata`, metadata);
  return (_tree, file) => {
    Object.assign(metadata, file.data.meta);
  };
};
var _default = rehypeMdxMetadataExtractor;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/remark-mdx-html-plugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/remark-mdx-html-plugin.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.remarkMdxHtmlPlugin = void 0;
var _mdastUtilToHast = _interopRequireDefault(__webpack_require__(/*! mdast-util-to-hast */ "./node_modules/mdast-util-to-hast/index.js"));
var _cacheHelpers = __webpack_require__(/*! ./cache-helpers */ "./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js");
// This plugin replaces html nodes with JSX spans that render given HTML via dangerouslySetInnerHTML
// We have to find out if this is really a good idea, but its processing footprint is very low
// compared to other solutions that would traverse the given HTML.
const remarkMdxHtmlPlugin = () => async function transformer(markdownAST) {
  const {
    visit
  } = await (0, _cacheHelpers.cachedImport)(`unist-util-visit`);

  // Turn mdast nodes into hast nodes
  // Required to support gatsby-plugin-autolink-headers
  visit(markdownAST, node => {
    if (node.data && Object.keys(node.data).includes(`hChildren`)) {
      const converted = (0, _mdastUtilToHast.default)(node, {
        allowDangerousHtml: true
      });
      if (converted) {
        Object.assign(node, converted);
      }
    }
  });

  // Turn raw & html nodes into JSX spans with dangerouslySetInnerHTML
  // Required to support gatsby-remark-images & gatsby-remark-autolink-headers
  visit(markdownAST, node => {
    if (![`html`, `raw`].includes(node.type)) {
      return;
    }
    const typedNode = node;
    typedNode.type = `mdxJsxFlowElement`;
    typedNode.name = `span`;
    typedNode.attributes = [{
      type: `mdxJsxAttribute`,
      name: `dangerouslySetInnerHTML`,
      value: {
        type: `mdxJsxAttributeValueExpression`,
        data: {
          estree: {
            type: `Program`,
            body: [{
              type: `ExpressionStatement`,
              expression: {
                type: `ObjectExpression`,
                properties: [{
                  type: `Property`,
                  method: false,
                  shorthand: false,
                  computed: false,
                  key: {
                    type: `Identifier`,
                    name: `__html`
                  },
                  value: {
                    type: `Literal`,
                    value: node.value
                  },
                  kind: `init`
                }]
              }
            }],
            sourceType: `module`
          }
        }
      }
    }];
  });
  return markdownAST;
};
exports.remarkMdxHtmlPlugin = remarkMdxHtmlPlugin;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/dist/remark-path-prefix-plugin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/dist/remark-path-prefix-plugin.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.remarkPathPlugin = void 0;
var _cacheHelpers = __webpack_require__(/*! ./cache-helpers */ "./node_modules/gatsby-plugin-mdx/dist/cache-helpers.js");
// ensure only one `/` in new url
const withPathPrefix = (url, pathPrefix) => (pathPrefix + url).replace(/\/\//, `/`);

// Ensure relative links include `pathPrefix`
const remarkPathPlugin = ({
  pathPrefix
}) => async function transformer(markdownAST) {
  if (!pathPrefix) {
    return markdownAST;
  }
  const {
    visit
  } = await (0, _cacheHelpers.cachedImport)(`unist-util-visit`);
  visit(markdownAST, [`link`, `definition`], node => {
    const typedNode = node;
    if (typedNode.url && typeof typedNode.url === `string` && typedNode.url.startsWith(`/`) && !typedNode.url.startsWith(`//`)) {
      typedNode.url = withPathPrefix(typedNode.url, pathPrefix);
    }
  });
  return markdownAST;
};
exports.remarkPathPlugin = remarkPathPlugin;

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: {
      background: `#f8f9fa`,
      padding: `2rem 1rem`,
      textAlign: `center`,
      marginTop: `auto`,
      borderTop: `1px solid #e9ecef`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      margin: 0,
      color: `#6c757d`
    }
  }, "\xA9 ", new Date().getFullYear(), " Your Tech Blog. Built with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.gatsbyjs.com",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: `#663399`
    }
  }, "Gatsby")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: {
      background: `#663399`,
      marginBottom: `1.45rem`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    style: {
      color: `white`,
      textDecoration: `none`
    }
  }, "Your Tech Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      marginTop: `1rem`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    style: {
      color: `white`,
      textDecoration: `none`,
      marginRight: `1rem`
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about",
    style: {
      color: `white`,
      textDecoration: `none`
    }
  }, "About"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);




const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      minHeight: `100vh`,
      display: `flex`,
      flexDirection: `column`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    style: {
      flex: 1,
      maxWidth: `800px`,
      margin: `0 auto`,
      padding: `2rem 1rem`
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");



const SEO = ({
  description,
  title,
  children
}) => {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang: `en`
    },
    title: title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : null,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }]
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/templates/blog-post.js?export=default":
/*!***************************************************!*\
  !*** ./src/templates/blog-post.js?export=default ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-mdx */ "./node_modules/gatsby-plugin-mdx/dist/index.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");





const BlogPostTemplate = ({
  data,
  pageContext
}) => {
  const post = data.mdx;
  const {
    previous,
    next
  } = pageContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "blog-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post-date"
  }, post.frontmatter.date), post.frontmatter.tags && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tags"
  }, post.frontmatter.tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: tag,
    className: "tag"
  }, tag)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__.MDXRenderer, null, post.body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "post-navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, previous && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: previous.fields.slug,
    rel: "prev"
  }, "\u2190 ", previous.frontmatter.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, next && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: next.fields.slug,
    rel: "next"
  }, next.frontmatter.title, " \u2192"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPostTemplate);
const pageQuery = "966325960";

/***/ }),

/***/ "./node_modules/mdast-util-definitions/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-definitions/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js")

module.exports = getDefinitionFactory

var own = {}.hasOwnProperty

// Get a definition in `node` by `identifier`.
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

// Gather all definitions in `node`
function gather(node) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', ondefinition)

  return cache

  function ondefinition(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
  }
}

// Factory to get a node from the given definition-cache.
function getterFactory(cache) {
  return getter

  // Get a node from the bound definition-cache.
  function getter(identifier) {
    var id = identifier && normalise(identifier)
    return id && own.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}


/***/ }),

/***/ "./node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/mdast-util-to-hast/lib/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/all.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/all.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = all

var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")

function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result
  var head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = result.value.replace(/^\s+/, '')
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = head.value.replace(/^\s+/, '')
        }
      }

      values = values.concat(result)
    }
  }

  return values
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/footer.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/footer.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = generateFootnotes

var thematicBreak = __webpack_require__(/*! ./handlers/thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js")
var list = __webpack_require__(/*! ./handlers/list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js")
var wrap = __webpack_require__(/*! ./wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")

function generateFootnotes(h) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var length = footnoteOrder.length
  var index = -1
  var listItems = []
  var def
  var backReference
  var content
  var tail

  while (++index < length) {
    def = footnoteById[footnoteOrder[index].toUpperCase()]

    if (!def) {
      continue
    }

    content = def.children.concat()
    tail = content[content.length - 1]
    backReference = {
      type: 'link',
      url: '#fnref-' + def.identifier,
      data: {hProperties: {className: ['footnote-backref']}},
      children: [{type: 'text', value: '↩'}]
    }

    if (!tail || tail.type !== 'paragraph') {
      tail = {type: 'paragraph', children: []}
      content.push(tail)
    }

    tail.children.push(backReference)

    listItems.push({
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: content,
      position: def.position
    })
  }

  if (listItems.length === 0) {
    return null
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {type: 'list', ordered: true, children: listItems})
      ],
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = blockquote

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/break.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/break.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = hardBreak

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')]
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/code.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = code

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}
  var code

  if (lang) {
    props.className = ['language-' + lang]
  }

  code = h(node, 'code', props, [u('text', value)])

  if (node.meta) {
    code.data = {meta: node.meta}
  }

  return h(node.position, 'pre', [code])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/delete.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = emphasis

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = footnoteReference

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function footnoteReference(h, node) {
  var footnoteOrder = h.footnoteOrder
  var identifier = String(node.identifier)

  if (footnoteOrder.indexOf(identifier) === -1) {
    footnoteOrder.push(identifier)
  }

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', node.label || identifier)
    ])
  ])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = footnote

var footnoteReference = __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js")

function footnote(h, node) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var identifier = 1

  while (identifier in footnoteById) {
    identifier++
  }

  identifier = String(identifier)

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/heading.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = heading

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/html.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/html.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = html

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Return either a `raw` node in dangerous mode, otherwise nothing.
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = imageReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")

function imageReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")

module.exports = image

function image(h, node) {
  var props = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  blockquote: __webpack_require__(/*! ./blockquote */ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"),
  break: __webpack_require__(/*! ./break */ "./node_modules/mdast-util-to-hast/lib/handlers/break.js"),
  code: __webpack_require__(/*! ./code */ "./node_modules/mdast-util-to-hast/lib/handlers/code.js"),
  delete: __webpack_require__(/*! ./delete */ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js"),
  emphasis: __webpack_require__(/*! ./emphasis */ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"),
  footnoteReference: __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"),
  footnote: __webpack_require__(/*! ./footnote */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js"),
  heading: __webpack_require__(/*! ./heading */ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js"),
  html: __webpack_require__(/*! ./html */ "./node_modules/mdast-util-to-hast/lib/handlers/html.js"),
  imageReference: __webpack_require__(/*! ./image-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"),
  image: __webpack_require__(/*! ./image */ "./node_modules/mdast-util-to-hast/lib/handlers/image.js"),
  inlineCode: __webpack_require__(/*! ./inline-code */ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"),
  linkReference: __webpack_require__(/*! ./link-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"),
  link: __webpack_require__(/*! ./link */ "./node_modules/mdast-util-to-hast/lib/handlers/link.js"),
  listItem: __webpack_require__(/*! ./list-item */ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js"),
  list: __webpack_require__(/*! ./list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js"),
  paragraph: __webpack_require__(/*! ./paragraph */ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"),
  root: __webpack_require__(/*! ./root */ "./node_modules/mdast-util-to-hast/lib/handlers/root.js"),
  strong: __webpack_require__(/*! ./strong */ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js"),
  table: __webpack_require__(/*! ./table */ "./node_modules/mdast-util-to-hast/lib/handlers/table.js"),
  text: __webpack_require__(/*! ./text */ "./node_modules/mdast-util-to-hast/lib/handlers/text.js"),
  thematicBreak: __webpack_require__(/*! ./thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"),
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = inlineCode

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function inlineCode(h, node) {
  var value = node.value.replace(/\r?\n|\r/g, ' ')
  return h(node, 'code', [u('text', value)])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = linkReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function linkReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

module.exports = link

function link(h, node) {
  var props = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list-item.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = listItem

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function listItem(h, node, parent) {
  var result = all(h, node)
  var head = result[0]
  var loose = parent ? listLoose(parent) : listItemLoose(node)
  var props = {}
  var wrapped = []
  var length
  var index
  var child

  if (typeof node.checked === 'boolean') {
    if (!head || head.tagName !== 'p') {
      head = h(null, 'p', [])
      result.unshift(head)
    }

    if (head.children.length > 0) {
      head.children.unshift(u('text', ' '))
    }

    head.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item']
  }

  length = result.length
  index = -1

  while (++index < length) {
    child = result[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (loose || index !== 0 || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'))
    }

    if (child.tagName === 'p' && !loose) {
      wrapped = wrapped.concat(child.children)
    } else {
      wrapped.push(child)
    }
  }

  // Add a final eol.
  if (length && (loose || child.tagName !== 'p')) {
    wrapped.push(u('text', '\n'))
  }

  return h(node, 'li', props, wrapped)
}

function listLoose(node) {
  var loose = node.spread
  var children = node.children
  var length = children.length
  var index = -1

  while (!loose && ++index < length) {
    loose = listItemLoose(children[index])
  }

  return loose
}

function listItemLoose(node) {
  var spread = node.spread

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = list

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function list(h, node) {
  var props = {}
  var name = node.ordered ? 'ol' : 'ul'
  var items
  var index = -1
  var length

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  items = all(h, node)
  length = items.length

  // Like GitHub, add a class for custom styling.
  while (++index < length) {
    if (
      items[index].properties.className &&
      items[index].properties.className.indexOf('task-list-item') !== -1
    ) {
      props.className = ['contains-task-list']
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = paragraph

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/root.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/root.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = root

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function root(h, node) {
  return h.augment(node, u('root', wrap(all(h, node))))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/strong.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = strong

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = table

var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function table(h, node) {
  var rows = node.children
  var index = rows.length
  var align = node.align || []
  var alignLength = align.length
  var result = []
  var pos
  var row
  var out
  var name
  var cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength || row.length
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: position.start(result[1]),
                end: position.end(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/text.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = text

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function text(h, node) {
  return h.augment(
    node,
    u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1'))
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = thematicBreak

function thematicBreak(h, node) {
  return h(node, 'hr')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = toHast

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js")
var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var generated = __webpack_require__(/*! unist-util-generated */ "./node_modules/unist-util-generated/index.js")
var definitions = __webpack_require__(/*! mdast-util-definitions */ "./node_modules/mdast-util-definitions/index.js")
var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")
var footer = __webpack_require__(/*! ./footer */ "./node_modules/mdast-util-to-hast/lib/footer.js")
var handlers = __webpack_require__(/*! ./handlers */ "./node_modules/mdast-util-to-hast/lib/handlers/index.js")

var own = {}.hasOwnProperty

var deprecationWarningIssued = false

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}

  // Issue a warning if the deprecated tag 'allowDangerousHTML' is used
  if (settings.allowDangerousHTML !== undefined && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
    )
  }

  var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree)
  h.footnoteById = footnoteById
  h.footnoteOrder = []
  h.augment = augment
  h.handlers = Object.assign({}, handlers, settings.handlers)
  h.unknownHandler = settings.unknownHandler
  h.passThrough = settings.passThrough

  visit(tree, 'footnoteDefinition', onfootnotedefinition)

  return h

  // Finalise the created `right`, a hast node, from `left`, an mdast node.
  function augment(left, right) {
    var data
    var ctx

    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && left.data) {
      data = left.data

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          }
        }

        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = Object.assign({}, right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  // Create an element for `node`.
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  }
}

// Transform `tree`, which is an mdast node, to a hast node.
function toHast(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var foot = footer(h)

  if (foot) {
    node.children = node.children.concat(u('text', '\n'), foot)
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/one.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/one.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = one

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

var own = {}.hasOwnProperty

// Transform an unknown node.
function unknown(h, node) {
  if (text(node)) {
    return h.augment(node, u('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

// Visit a node.
function one(h, node, parent) {
  var type = node && node.type
  var fn

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  if (own.call(h.handlers, type)) {
    fn = h.handlers[type]
  } else if (h.passThrough && h.passThrough.indexOf(type) > -1) {
    fn = returnNode
  } else {
    fn = h.unknownHandler
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

// Check if the node should be renderered as a text node.
function text(node) {
  var data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}

function returnNode(h, node) {
  var clone

  if (node.children) {
    clone = Object.assign({}, node)
    clone.children = all(h, node)
    return clone
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/revert.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/revert.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = revert

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

// Return the content of a reference without definition as Markdown.
function revert(h, node) {
  var subtype = node.referenceType
  var suffix = ']'
  var contents
  var head
  var tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/wrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/wrap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = wrap

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Wrap `nodes` with line feeds between each entry.
// Optionally adds line feeds at the start and end.
function wrap(nodes, loose) {
  var result = []
  var index = -1
  var length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length > 0) {
    result.push(u('text', '\n'))
  }

  return result
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/mdurl/encode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/encode.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = u

function u(type, props, value) {
  var node

  if (
    (value === null || value === undefined) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
    props = {}
  }

  node = Object.assign({type: String(type)}, props)

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== null && value !== undefined) {
    node.value = String(value)
  }

  return node
}


/***/ }),

/***/ "./node_modules/unist-util-generated/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-generated/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = generated

function generated(node) {
  return (
    !node ||
    !node.position ||
    !node.position.start ||
    !node.position.start.line ||
    !node.position.start.column ||
    !node.position.end ||
    !node.position.end.line ||
    !node.position.end.column
  )
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


var start = factory('start')
var end = factory('end')

module.exports = position

position.start = start
position.end = end

function position(node) {
  return {start: start(node), end: end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/color.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = color
function color(d) {
  return '\u001B[33m' + d + '\u001B[39m'
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var color = __webpack_require__(/*! ./color */ "./node_modules/unist-util-visit-parents/color.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var step
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)
  step = reverse ? -1 : 1

  factory(tree, null, [])()

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {}
    var name

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined

      visit.displayName =
        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node)
      var result = []
      var subresult
      var offset

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)()

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Your Tech Blog","description":"A blog about technology, programming, and development","author":"Your Name"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-js.js.map