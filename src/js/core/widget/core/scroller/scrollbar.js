/*global window, define, ns */
/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd
 *
 * Licensed under the Flora License, Version 1.1 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://floralicense.org/license/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * #Scrollbar namespace
 * Namespace with scrollbar for scroller widget.
 * @author Maciej Urbanski <m.urbanski@samsung.com>
 * @class ns.widget.core.scroller.scrollbar
 */
(function (window, ns) {
	"use strict";
	//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
	define(
		[
			"../scroller"
		],
		function () {
			//>>excludeEnd("tauBuildExclude");
			ns.widget.core.scroller.scrollbar = ns.widget.core.scroller.scrollbar || {};
			//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
			return ns.widget.core.scroller.scrollbar;
		}
	);
	//>>excludeEnd("tauBuildExclude");
}(window, ns));
