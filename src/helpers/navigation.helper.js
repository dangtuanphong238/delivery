import { useNavigationState, useRoute } from '@react-navigation/native';
import rootNavigation from '../navigations/root.navigator';
import {
  BOTTOM_TAB,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  VERIFY_SCREEN,
} from '../navigations/route-name';
const listAuthRouteName = [LOGIN_SCREEN, REGISTER_SCREEN, VERIFY_SCREEN];

export function useIsFirstRouteInParent() {
  const route = useRoute();
  const isFirstRouteInParent = useNavigationState(
    state => state.routes[0].key === route.key,
  );

  return isFirstRouteInParent;
}

export const handleNavigation = ({ previousScreen, isCreateNewSceen }) => {
  if (previousScreen) {
    if (isCreateNewSceen) {
      const { name, params } = previousScreen;
      rootNavigation.removeSomeStackAndNavigate(
        [...listAuthRouteName, name],
        name,
        params,
      );
    } else {
      rootNavigation.removeSomeStackAndNavigate(listAuthRouteName);
    }
  } else {
    rootNavigation.removeSomeStackAndNavigate(listAuthRouteName, BOTTOM_TAB);
  }
};
