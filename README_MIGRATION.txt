README Migration

original versions 
expo SDK 34
expo-cli 3.6.0
node 12.9


---------------------------
35
---------------------------

The following packages were updated:
expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring

--CHANGES
-> app\sync\database\index.ts
original:
	import { SQLite } from 'expo-sqlite';
new:
	import * as SQLite from 'expo-sqlite';
	

---------------------------
36
---------------------------
The following packages were updated:
expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring

--WARNINGS
Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: Icon, 
TextField - react-native-material-textfield
DrawerMenu
MapController
Notifier
Label
SigninScreen

--CHANGES
-> app\components\dialog.component\dialogs\edit.poi\index.ts > EditPoiDialog

componentWillMount -> UNSAFE_componentWillMount


---------------------------
37
---------------------------
The following packages were updated:
expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring


ProjectList, withAnimatable(Component)


---------------------------
38
---------------------------
The following packages were updated:
expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring

--CHANGES
NetInfo has been removed from React Native. It can now be installed and imported from '@react-native-community/netinfo' instead of 'react-native'

-> app\redux\modules\connect.ts
import NetInfo from '@react-native-community/netinfo';

		//NetInfo.addEventListener(handleConnectivityChange);
        return () => NetInfo.addEventListener(handleConnectivityChange);

--updates librearies
npm i @react-native-community/netinfo@5.9.2
npm i react-native-indicator
npm i @react-native-community/art
npm i react-native-progress@4.1.2


---------------------------
39
---------------------------
The following packages were updated:
@react-native-community/netinfo, expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @react-native-community/art, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring


---------------------------
40
---------------------------
The following packages were updated:
@react-native-community/netinfo, expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @react-native-community/art, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring


---------------------------
41
---------------------------
The following packages were updated:
@react-native-community/netinfo, expo-image-picker, expo-location, expo-permissions, expo-sqlite, react-native-gesture-handler, react-native-maps, react-native-reanimated, react-native-screens, react-native-svg, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @react-native-community/art, @types/redux, @types/redux-saga, async, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring


It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens

--update libraries
npm i react-native-screens@3.4.0
expo install expo-app-loading
npm i react-navigation-tabs
npm i react-navigation-stack
npm i react-navigation-drawer


---------------------------
42
---------------------------
The following packages were updated:
react-native-svg, @react-native-community/netinfo, react-native-reanimated, react-native-maps, expo-modules-core, expo-permissions, expo-image-picker, react-native-screens, expo-sqlite, react-native-gesture-handler, expo-app-loading, expo-location, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @react-native-community/art, @types/redux, @types/redux-saga, async, expo-cli, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring

--downgrade libreries libraries
npm i react-native-reanimated@1.13.1



---------------------------
43
---------------------------
The following packages were updated:
expo-image-picker, react-native-safe-area-context, react-native-svg, expo-permissions, react-native-reanimated, expo-location, react-native-screens, expo-modules-core, react-native-maps, expo-sqlite, @react-native-community/netinfo, expo-app-loading, react-native-gesture-handler, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @react-native-community/art, @types/redux, @types/redux-saga, async, expo-cli, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring


npm install --save-dev @babel/plugin-proposal-optional-chaining

--deprecated libraries
react-native-indicator
@react-native-community/art

--changes
changed for 'ActivityIndicator' from 'react-native'  on
->app\screens\drawer\views\drawer.projects\project.list.tsx
->app\components\buttons\primary.button.tsx

changed componentWillReceiveProps to UNSAFE_componentWillReceiveProps on components
->DrawerMenu, MapController, Notifier, MapController, TextField, SignInScreen

--Manually changes
comment line 'style: Animated.Text.propTypes.style,'
->node-modules\react-native-material-textfield\src\components\label\index.js
->node-modules\react-native-material-textfield\src\components\helper\index.js
->node-modules\react-native-material-textfield\src\components\affix\index.js
->node-modules\react-native-material-dropdown\node-modules\react-native-material-textfield\src\components\label\index.js
->node-modules\react-native-material-dropdown\node-modules\react-native-material-textfield\src\components\helper\index.js
->node-modules\react-native-material-dropdown\node-modules\react-native-material-textfield\src\components\affix\index.js

--downgrade libreries libraries
npm i react-native-reanimated@2.1.0


---------------------------
44
---------------------------
 The following packages were updated:
@react-native-community/netinfo, react-native-reanimated, react-native-maps, react-native-safe-area-context, expo-image-picker, react-native-screens, react-native-gesture-handler, react-native-svg, expo-app-loading, expo-permissions, expo-location, expo-modules-core, expo-sqlite, react-native, react, react-dom, typescript, @types/react, react-native-web, babel-preset-expo, @types/react-native, expo

 The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@appbaseio/reactivesearch-native, @types/redux, @types/redux-saga, async, expo-cli, immutable, moment, react-native-axios, react-native-cluster-map, react-native-elements, react-native-indicator, react-native-map-clustering, react-native-material-dropdown, react-native-material-menu, react-native-material-textfield, react-native-modal, react-native-modal-datetime-picker, react-native-multiple-select, react-native-numeric-input, react-native-progress, react-native-sectioned-multi-select, react-native-snap-carousel, react-native-svg-uri, react-native-validate-form, react-native-vector-icons, react-navigation, react-navigation-drawer, react-navigation-stack, react-navigation-tabs, react-redux, remote-redux-devtools, rn-double-click, sqlstring

--downgrade libreries libraries
npm i react-native-reanimated@2.1.0


