/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "a3f37bd38c9e169fb4ee";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([28,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

module.exports = _initializerDefineProperty;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(19);

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
}

module.exports = _initializerWarningHelper;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

/* global _ */
(function () {
	'use strict';

	/* jshint ignore:start */
	// Underscore's Template Module
	// Courtesy of underscorejs.org
	var _ = (function (_) {
		_.defaults = function (object) {
			if (!object) {
				return object;
			}
			for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
				var iterable = arguments[argsIndex];
				if (iterable) {
					for (var key in iterable) {
						if (object[key] == null) {
							object[key] = iterable[key];
						}
					}
				}
			}
			return object;
		};

		// By default, Underscore uses ERB-style template delimiters, change the
		// following template settings to use alternative delimiters.
		_.templateSettings = {
			evaluate    : /<%([\s\S]+?)%>/g,
			interpolate : /<%=([\s\S]+?)%>/g,
			escape      : /<%-([\s\S]+?)%>/g
		};

		// When customizing `templateSettings`, if you don't want to define an
		// interpolation, evaluation or escaping regex, we need one that is
		// guaranteed not to match.
		var noMatch = /(.)^/;

		// Certain characters need to be escaped so that they can be put into a
		// string literal.
		var escapes = {
			"'":      "'",
			'\\':     '\\',
			'\r':     'r',
			'\n':     'n',
			'\t':     't',
			'\u2028': 'u2028',
			'\u2029': 'u2029'
		};

		var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

		// JavaScript micro-templating, similar to John Resig's implementation.
		// Underscore templating handles arbitrary delimiters, preserves whitespace,
		// and correctly escapes quotes within interpolated code.
		_.template = function(text, data, settings) {
			var render;
			settings = _.defaults({}, settings, _.templateSettings);

			// Combine delimiters into one regular expression via alternation.
			var matcher = new RegExp([
				(settings.escape || noMatch).source,
				(settings.interpolate || noMatch).source,
				(settings.evaluate || noMatch).source
			].join('|') + '|$', 'g');

			// Compile the template source, escaping string literals appropriately.
			var index = 0;
			var source = "__p+='";
			text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
				source += text.slice(index, offset)
					.replace(escaper, function(match) { return '\\' + escapes[match]; });

				if (escape) {
					source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
				}
				if (interpolate) {
					source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
				}
				if (evaluate) {
					source += "';\n" + evaluate + "\n__p+='";
				}
				index = offset + match.length;
				return match;
			});
			source += "';\n";

			// If a variable is not specified, place data values in local scope.
			if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

			source = "var __t,__p='',__j=Array.prototype.join," +
				"print=function(){__p+=__j.call(arguments,'');};\n" +
				source + "return __p;\n";

			try {
				render = new Function(settings.variable || 'obj', '_', source);
			} catch (e) {
				e.source = source;
				throw e;
			}

			if (data) return render(data, _);
			var template = function(data) {
				return render.call(this, data, _);
			};

			// Provide the compiled function source as a convenience for precompilation.
			template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

			return template;
		};

		return _;
	})({});

	if (location.hostname === 'todomvc.com') {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-31081062-1', 'auto');
		ga('send', 'pageview');
	}
	/* jshint ignore:end */

	function redirect() {
		if (location.hostname === 'tastejs.github.io') {
			location.href = location.href.replace('tastejs.github.io/todomvc', 'todomvc.com');
		}
	}

	function findRoot() {
		var base = location.href.indexOf('examples/');
		return location.href.substr(0, base);
	}

	function getFile(file, callback) {
		if (!location.host) {
			return console.info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
		}

		var xhr = new XMLHttpRequest();

		xhr.open('GET', findRoot() + file, true);
		xhr.send();

		xhr.onload = function () {
			if (xhr.status === 200 && callback) {
				callback(xhr.responseText);
			}
		};
	}

	function Learn(learnJSON, config) {
		if (!(this instanceof Learn)) {
			return new Learn(learnJSON, config);
		}

		var template, framework;

		if (typeof learnJSON !== 'object') {
			try {
				learnJSON = JSON.parse(learnJSON);
			} catch (e) {
				return;
			}
		}

		if (config) {
			template = config.template;
			framework = config.framework;
		}

		if (!template && learnJSON.templates) {
			template = learnJSON.templates.todomvc;
		}

		if (!framework && document.querySelector('[data-framework]')) {
			framework = document.querySelector('[data-framework]').dataset.framework;
		}

		this.template = template;

		if (learnJSON.backend) {
			this.frameworkJSON = learnJSON.backend;
			this.frameworkJSON.issueLabel = framework;
			this.append({
				backend: true
			});
		} else if (learnJSON[framework]) {
			this.frameworkJSON = learnJSON[framework];
			this.frameworkJSON.issueLabel = framework;
			this.append();
		}

		this.fetchIssueCount();
	}

	Learn.prototype.append = function (opts) {
		var aside = document.createElement('aside');
		aside.innerHTML = _.template(this.template, this.frameworkJSON);
		aside.className = 'learn';

		if (opts && opts.backend) {
			// Remove demo link
			var sourceLinks = aside.querySelector('.source-links');
			var heading = sourceLinks.firstElementChild;
			var sourceLink = sourceLinks.lastElementChild;
			// Correct link path
			var href = sourceLink.getAttribute('href');
			sourceLink.setAttribute('href', href.substr(href.lastIndexOf('http')));
			sourceLinks.innerHTML = heading.outerHTML + sourceLink.outerHTML;
		} else {
			// Localize demo links
			var demoLinks = aside.querySelectorAll('.demo-link');
			Array.prototype.forEach.call(demoLinks, function (demoLink) {
				if (demoLink.getAttribute('href').substr(0, 4) !== 'http') {
					demoLink.setAttribute('href', findRoot() + demoLink.getAttribute('href'));
				}
			});
		}

		document.body.className = (document.body.className + ' learn-bar').trim();
		document.body.insertAdjacentHTML('afterBegin', aside.outerHTML);
	};

	Learn.prototype.fetchIssueCount = function () {
		var issueLink = document.getElementById('issue-count-link');
		if (issueLink) {
			var url = issueLink.href.replace('https://github.com', 'https://api.github.com/repos');
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onload = function (e) {
				var parsedResponse = JSON.parse(e.target.responseText);
				if (parsedResponse instanceof Array) {
					var count = parsedResponse.length;
					if (count !== 0) {
						issueLink.innerHTML = 'This app has ' + count + ' open issues';
						document.getElementById('issue-count').style.display = 'inline';
					}
				}
			};
			xhr.send();
		}
	};

	redirect();
	getFile('learn.json', Learn);
})();


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_todomvc-common@1.0.5@todomvc-common/base.js
var base = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(4);
var initializerDefineProperty_default = /*#__PURE__*/__webpack_require__.n(initializerDefineProperty);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(2);
var applyDecoratedDescriptor_default = /*#__PURE__*/__webpack_require__.n(applyDecoratedDescriptor);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/initializerWarningHelper.js
var initializerWarningHelper = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/_mobx@4.9.2@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(1);

// CONCATENATED MODULE: ./src/models/TodoModel.js






var _class, _descriptor, _descriptor2, _temp;


var TodoModel_TodoModel = (_class = (_temp =
/*#__PURE__*/
function () {
  function TodoModel(store, id, title, completed) {
    classCallCheck_default()(this, TodoModel);

    this.store = void 0;
    this.id = void 0;

    initializerDefineProperty_default()(this, "title", _descriptor, this);

    initializerDefineProperty_default()(this, "completed", _descriptor2, this);

    this.store = store;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  createClass_default()(TodoModel, [{
    key: "toggle",
    value: function toggle() {
      this.completed = !this.completed;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.store.todos.remove(this);
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: "toJS",
    value: function toJS() {
      return {
        id: this.id,
        title: this.title,
        completed: this.completed
      };
    }
  }], [{
    key: "fromJS",
    value: function fromJS(store, object) {
      return new TodoModel(store, object.id, object.title, object.completed);
    }
  }]);

  return TodoModel;
}(), _temp), (_descriptor = applyDecoratedDescriptor_default()(_class.prototype, "title", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = applyDecoratedDescriptor_default()(_class.prototype, "completed", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);

// CONCATENATED MODULE: ./src/utils.js
function uuid() {
  /*jshint bitwise:false */
  var i, random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }

    uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }

  return uuid;
}
function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}
// CONCATENATED MODULE: ./src/stores/TodoStore.js






var TodoStore_class, TodoStore_descriptor, TodoStore_temp;




var TodoStore_TodoStore = (TodoStore_class = (TodoStore_temp =
/*#__PURE__*/
function () {
  function TodoStore() {
    classCallCheck_default()(this, TodoStore);

    initializerDefineProperty_default()(this, "todos", TodoStore_descriptor, this);
  }

  createClass_default()(TodoStore, [{
    key: "subscribeServerToStore",
    value: function subscribeServerToStore() {
      var _this = this;

      Object(mobx_module["reaction"])(function () {
        return _this.toJS();
      }, function (todos) {
        return window.fetch && fetch('/api/todos', {
          method: 'post',
          body: JSON.stringify({
            todos: todos
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
      });
    }
  }, {
    key: "addTodo",
    value: function addTodo(title) {
      this.todos.push(new TodoModel_TodoModel(this, uuid(), title, false));
    }
  }, {
    key: "toggleAll",
    value: function toggleAll(checked) {
      this.todos.forEach(function (todo) {
        return todo.completed = checked;
      });
    }
  }, {
    key: "clearCompleted",
    value: function clearCompleted() {
      this.todos = this.todos.filter(function (todo) {
        return !todo.completed;
      });
    }
  }, {
    key: "toJS",
    value: function toJS() {
      return this.todos.map(function (todo) {
        return todo.toJS();
      });
    }
  }, {
    key: "activeTodoCount",
    get: function get() {
      return this.todos.reduce(function (sum, todo) {
        return sum + (todo.completed ? 0 : 1);
      }, 0);
    }
  }, {
    key: "completedCount",
    get: function get() {
      return this.todos.length - this.activeTodoCount;
    }
  }], [{
    key: "fromJS",
    value: function fromJS(array) {
      var todoStore = new TodoStore();
      todoStore.todos = array.map(function (item) {
        return TodoModel_TodoModel.fromJS(todoStore, item);
      });
      return todoStore;
    }
  }]);

  return TodoStore;
}(), TodoStore_temp), (TodoStore_descriptor = applyDecoratedDescriptor_default()(TodoStore_class.prototype, "todos", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), applyDecoratedDescriptor_default()(TodoStore_class.prototype, "activeTodoCount", [mobx_module["computed"]], Object.getOwnPropertyDescriptor(TodoStore_class.prototype, "activeTodoCount"), TodoStore_class.prototype), applyDecoratedDescriptor_default()(TodoStore_class.prototype, "completedCount", [mobx_module["computed"]], Object.getOwnPropertyDescriptor(TodoStore_class.prototype, "completedCount"), TodoStore_class.prototype), applyDecoratedDescriptor_default()(TodoStore_class.prototype, "addTodo", [mobx_module["action"]], Object.getOwnPropertyDescriptor(TodoStore_class.prototype, "addTodo"), TodoStore_class.prototype), applyDecoratedDescriptor_default()(TodoStore_class.prototype, "toggleAll", [mobx_module["action"]], Object.getOwnPropertyDescriptor(TodoStore_class.prototype, "toggleAll"), TodoStore_class.prototype), applyDecoratedDescriptor_default()(TodoStore_class.prototype, "clearCompleted", [mobx_module["action"]], Object.getOwnPropertyDescriptor(TodoStore_class.prototype, "clearCompleted"), TodoStore_class.prototype)), TodoStore_class);

// CONCATENATED MODULE: ./src/constants.js
var ALL_TODOS = 'all';
var ACTIVE_TODOS = 'active';
var COMPLETED_TODOS = 'completed';
// CONCATENATED MODULE: ./src/stores/ViewStore.js





var ViewStore_class, ViewStore_descriptor, ViewStore_descriptor2, ViewStore_temp;



var ViewStore_ViewStore = (ViewStore_class = (ViewStore_temp = function ViewStore() {
  classCallCheck_default()(this, ViewStore);

  initializerDefineProperty_default()(this, "todoBeingEdited", ViewStore_descriptor, this);

  initializerDefineProperty_default()(this, "todoFilter", ViewStore_descriptor2, this);
}, ViewStore_temp), (ViewStore_descriptor = applyDecoratedDescriptor_default()(ViewStore_class.prototype, "todoBeingEdited", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), ViewStore_descriptor2 = applyDecoratedDescriptor_default()(ViewStore_class.prototype, "todoFilter", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return ALL_TODOS;
  }
})), ViewStore_class);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(10);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(11);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(12);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/_react@16.8.1@react/index.js
var _react_16_8_1_react = __webpack_require__(0);
var _react_16_8_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_8_1_react);

// EXTERNAL MODULE: ./node_modules/_prop-types@15.6.2@prop-types/index.js
var _prop_types_15_6_2_prop_types = __webpack_require__(6);
var _prop_types_15_6_2_prop_types_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_6_2_prop_types);

// EXTERNAL MODULE: ./node_modules/_mobx-react@5.4.3@mobx-react/index.module.js
var index_module = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/_director@1.2.8@director/build/director.js
var director = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.3.1@@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/_react-dom@16.8.1@react-dom/index.js
var _react_dom_16_8_1_react_dom = __webpack_require__(9);
var _react_dom_16_8_1_react_dom_default = /*#__PURE__*/__webpack_require__.n(_react_dom_16_8_1_react_dom);

// CONCATENATED MODULE: ./src/components/todoEntry.js










var todoEntry_class, _class2, todoEntry_descriptor, todoEntry_temp;






var ENTER_KEY = 13;

var todoEntry_TodoEntry = Object(index_module["observer"])(todoEntry_class = (_class2 = (todoEntry_temp =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TodoEntry, _React$Component);

  function TodoEntry() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TodoEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TodoEntry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    initializerDefineProperty_default()(_this, "handleNewTodoKeyDown", todoEntry_descriptor, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    return _this;
  }

  createClass_default()(TodoEntry, [{
    key: "render",
    value: function render() {
      return _react_16_8_1_react_default.a.createElement("input", {
        ref: "newField",
        className: "new-todo",
        placeholder: "What needs to be done?",
        onKeyDown: this.handleNewTodoKeyDown,
        autoFocus: true
      });
    }
  }]);

  return TodoEntry;
}(_react_16_8_1_react_default.a.Component), todoEntry_temp), (todoEntry_descriptor = applyDecoratedDescriptor_default()(_class2.prototype, "handleNewTodoKeyDown", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (event) {
      if (event.keyCode !== ENTER_KEY) {
        return;
      }

      event.preventDefault();
      var val = _react_dom_16_8_1_react_dom_default.a.findDOMNode(_this2.refs.newField).value.trim();

      if (val) {
        _this2.props.todoStore.addTodo(val);

        _react_dom_16_8_1_react_dom_default.a.findDOMNode(_this2.refs.newField).value = '';
      }
    };
  }
})), _class2)) || todoEntry_class;


todoEntry_TodoEntry.propTypes = {
  todoStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired
};
// CONCATENATED MODULE: ./src/components/todoItem.js










var todoItem_class, todoItem_class2, todoItem_descriptor, todoItem_descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, todoItem_temp;





var ESCAPE_KEY = 27;
var todoItem_ENTER_KEY = 13;

var todoItem_TodoItem = Object(index_module["observer"])(todoItem_class = (todoItem_class2 = (todoItem_temp =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TodoItem, _React$Component);

  function TodoItem() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TodoItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TodoItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    initializerDefineProperty_default()(_this, "editText", todoItem_descriptor, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleSubmit", todoItem_descriptor2, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleDestroy", _descriptor3, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleEdit", _descriptor4, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleKeyDown", _descriptor5, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleChange", _descriptor6, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    initializerDefineProperty_default()(_this, "handleToggle", _descriptor7, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    return _this;
  }

  createClass_default()(TodoItem, [{
    key: "render",
    value: function render() {
      var todo = this.props.todo;
      return _react_16_8_1_react_default.a.createElement("li", {
        className: [todo.completed ? "completed" : "", this.isBeingEdited ? "editing" : ""].join(" ")
      }, _react_16_8_1_react_default.a.createElement("div", {
        className: "view"
      }, _react_16_8_1_react_default.a.createElement("input", {
        className: "toggle",
        type: "checkbox",
        checked: todo.completed,
        onChange: this.handleToggle
      }), _react_16_8_1_react_default.a.createElement("label", {
        onDoubleClick: this.handleEdit
      }, todo.title), _react_16_8_1_react_default.a.createElement("button", {
        className: "destroy",
        onClick: this.handleDestroy
      })), _react_16_8_1_react_default.a.createElement("input", {
        ref: "editField",
        className: "edit",
        value: this.editText,
        onBlur: this.handleSubmit,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown
      }));
    }
  }, {
    key: "isBeingEdited",
    get: function get() {
      return this.props.viewStore.todoBeingEdited === this.props.todo;
    }
  }]);

  return TodoItem;
}(_react_16_8_1_react_default.a.Component), todoItem_temp), (todoItem_descriptor = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "editText", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), applyDecoratedDescriptor_default()(todoItem_class2.prototype, "isBeingEdited", [mobx_module["computed"]], Object.getOwnPropertyDescriptor(todoItem_class2.prototype, "isBeingEdited"), todoItem_class2.prototype), todoItem_descriptor2 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleSubmit", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (event) {
      var val = _this2.editText.trim();

      if (val) {
        _this2.props.todo.setTitle(val);

        _this2.editText = val;
      } else {
        _this2.handleDestroy();
      }

      _this2.props.viewStore.todoBeingEdited = null;
    };
  }
}), _descriptor3 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleDestroy", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.props.todo.destroy();

      _this3.props.viewStore.todoBeingEdited = null;
    };
  }
}), _descriptor4 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleEdit", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var todo = _this4.props.todo;
      _this4.props.viewStore.todoBeingEdited = todo;
      _this4.editText = todo.title;
    };
  }
}), _descriptor5 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleKeyDown", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (event) {
      if (event.which === ESCAPE_KEY) {
        _this5.editText = _this5.props.todo.title;
        _this5.props.viewStore.todoBeingEdited = null;
      } else if (event.which === todoItem_ENTER_KEY) {
        _this5.handleSubmit(event);
      }
    };
  }
}), _descriptor6 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleChange", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (event) {
      _this6.editText = event.target.value;
    };
  }
}), _descriptor7 = applyDecoratedDescriptor_default()(todoItem_class2.prototype, "handleToggle", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function () {
      _this7.props.todo.toggle();
    };
  }
})), todoItem_class2)) || todoItem_class;


todoItem_TodoItem.propTypes = {
  todo: _prop_types_15_6_2_prop_types_default.a.object.isRequired,
  viewStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired
};
// CONCATENATED MODULE: ./src/components/todoOverview.js






var todoOverview_class, todoOverview_temp;







var todoOverview_TodoOverview = Object(index_module["observer"])(todoOverview_class = (todoOverview_temp =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TodoOverview, _React$Component);

  function TodoOverview() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TodoOverview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TodoOverview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.toggleAll = function (event) {
      var checked = event.target.checked;

      _this.props.todoStore.toggleAll(checked);
    };

    return _this;
  }

  createClass_default()(TodoOverview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          todoStore = _this$props.todoStore,
          viewStore = _this$props.viewStore;
      if (todoStore.todos.length === 0) return null;
      return _react_16_8_1_react_default.a.createElement("section", {
        className: "main"
      }, _react_16_8_1_react_default.a.createElement("input", {
        className: "toggle-all",
        id: "toggle-all",
        type: "checkbox",
        onChange: this.toggleAll,
        checked: todoStore.activeTodoCount === 0
      }), _react_16_8_1_react_default.a.createElement("label", {
        htmlFor: "toggle-all"
      }), _react_16_8_1_react_default.a.createElement("ul", {
        className: "todo-list"
      }, this.getVisibleTodos().map(function (todo) {
        return _react_16_8_1_react_default.a.createElement(todoItem_TodoItem, {
          key: todo.id,
          todo: todo,
          viewStore: viewStore
        });
      })));
    }
  }, {
    key: "getVisibleTodos",
    value: function getVisibleTodos() {
      var _this2 = this;

      return this.props.todoStore.todos.filter(function (todo) {
        switch (_this2.props.viewStore.todoFilter) {
          case ACTIVE_TODOS:
            return !todo.completed;

          case COMPLETED_TODOS:
            return todo.completed;

          default:
            return true;
        }
      });
    }
  }]);

  return TodoOverview;
}(_react_16_8_1_react_default.a.Component), todoOverview_temp)) || todoOverview_class;


todoOverview_TodoOverview.propTypes = {
  viewStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired,
  todoStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired
};
// CONCATENATED MODULE: ./src/components/todoFooter.js










var todoFooter_class, todoFooter_class2, todoFooter_descriptor, todoFooter_temp;








var todoFooter_TodoFooter = Object(index_module["observer"])(todoFooter_class = (todoFooter_class2 = (todoFooter_temp =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TodoFooter, _React$Component);

  function TodoFooter() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TodoFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TodoFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    initializerDefineProperty_default()(_this, "clearCompleted", todoFooter_descriptor, assertThisInitialized_default()(assertThisInitialized_default()(_this)));

    return _this;
  }

  createClass_default()(TodoFooter, [{
    key: "render",
    value: function render() {
      var todoStore = this.props.todoStore;
      var activeTodoWord = pluralize(todoStore.activeTodoCount, 'item');
      return _react_16_8_1_react_default.a.createElement("footer", {
        className: "footer"
      }, _react_16_8_1_react_default.a.createElement("span", {
        className: "todo-count"
      }, _react_16_8_1_react_default.a.createElement("strong", null, todoStore.activeTodoCount), " ", activeTodoWord, " left"), _react_16_8_1_react_default.a.createElement("ul", {
        className: "filters"
      }, this.renderFilterLink(ALL_TODOS, "", "All"), this.renderFilterLink(ACTIVE_TODOS, "active", "Active"), this.renderFilterLink(COMPLETED_TODOS, "completed", "Completed")), todoStore.completedCount === 0 ? null : _react_16_8_1_react_default.a.createElement("button", {
        className: "clear-completed",
        onClick: this.clearCompleted
      }, "Clear completed"));
    }
  }, {
    key: "renderFilterLink",
    value: function renderFilterLink(filterName, url, caption) {
      return _react_16_8_1_react_default.a.createElement("li", null, _react_16_8_1_react_default.a.createElement("a", {
        href: "#/" + url,
        className: filterName === this.props.viewStore.todoFilter ? "selected" : ""
      }, caption), ' ');
    }
  }]);

  return TodoFooter;
}(_react_16_8_1_react_default.a.Component), todoFooter_temp), (todoFooter_descriptor = applyDecoratedDescriptor_default()(todoFooter_class2.prototype, "clearCompleted", [mobx_module["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.props.todoStore.clearCompleted();
    };
  }
})), todoFooter_class2)) || todoFooter_class;


todoFooter_TodoFooter.propTypes = {
  viewStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired,
  todoStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired
};
// CONCATENATED MODULE: ./src/components/todoApp.js






var todoApp_class;








 // import DevTool from 'mobx-react-devtools';

var todoApp_TodoApp = Object(index_module["observer"])(todoApp_class =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TodoApp, _React$Component);

  function TodoApp() {
    classCallCheck_default()(this, TodoApp);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(TodoApp).apply(this, arguments));
  }

  createClass_default()(TodoApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          todoStore = _this$props.todoStore,
          viewStore = _this$props.viewStore;
      return _react_16_8_1_react_default.a.createElement("div", null, _react_16_8_1_react_default.a.createElement("header", {
        className: "header"
      }, _react_16_8_1_react_default.a.createElement("h1", null, "todos"), _react_16_8_1_react_default.a.createElement(todoEntry_TodoEntry, {
        todoStore: todoStore
      })), _react_16_8_1_react_default.a.createElement(todoOverview_TodoOverview, {
        todoStore: todoStore,
        viewStore: viewStore
      }), _react_16_8_1_react_default.a.createElement(todoFooter_TodoFooter, {
        todoStore: todoStore,
        viewStore: viewStore
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var viewStore = this.props.viewStore;
      var router = Object(director["Router"])({
        '/': function _() {
          viewStore.todoFilter = ALL_TODOS;
        },
        '/active': function active() {
          viewStore.todoFilter = ACTIVE_TODOS;
        },
        '/completed': function completed() {
          viewStore.todoFilter = COMPLETED_TODOS;
        }
      });
      router.init('/');
    }
  }]);

  return TodoApp;
}(_react_16_8_1_react_default.a.Component)) || todoApp_class;


todoApp_TodoApp.propTypes = {
  viewStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired,
  todoStore: _prop_types_15_6_2_prop_types_default.a.object.isRequired
};
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(27);

// CONCATENATED MODULE: ./src/client.js







var initialState = window.initialState && JSON.parse(window.initialState) || {};
var client_todoStore = TodoStore_TodoStore.fromJS(initialState.todos || []);
var client_viewStore = new ViewStore_ViewStore();
client_todoStore.subscribeServerToStore();
_react_dom_16_8_1_react_dom_default.a.render(_react_16_8_1_react_default.a.createElement(todoApp_TodoApp, {
  todoStore: client_todoStore,
  viewStore: client_viewStore
}), document.getElementById('todoapp'));

/***/ })
/******/ ]);