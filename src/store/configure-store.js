import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import { settingsReducer } from '../reducers/app-settings.reducer';
import { authReducer } from '../reducers/auth.reducer';
import { loadingReducer } from '../reducers/loading.reducer';
import rootSaga from '../sagas/root.saga';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, loggerMiddleware),
);

const configureStore = (preloadedState = {}) => {
  const appReducers = combineReducers({
    loadingState: loadingReducer,
    settingsState: settingsReducer,
    authState: authReducer,
  });

  const persistConfig = {
    key: 'root',
    timeout: null,
    blacklist: ['loadingState'],
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, appReducers);

  const store = createStore(persistedReducer, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export const { store, persistor } = configureStore();
