import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigateAndReset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

export {navigate, setTopLevelNavigator, navigateAndReset};
