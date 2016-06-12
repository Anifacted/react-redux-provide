import provide, { reloadProviders } from './provide';

import createProviderStore from './createProviderStore';
import { getClientState, getInitialState } from './createProviderStore';

import createKeyConcat from './createKeyConcat';
import shallowEqual from './shallowEqual';

import instantiateProvider from './instantiateProvider';
import {
  getFromContextOrProps,
  getProviders,
  getProviderInstances,
  getActiveQueries,
  getQueryResults,
  getFunctionOrObject,
  getQueries,
  getQuery,
  getQueryOptions,
  getQueriesOptions,
  getQueryHandler,
  getMergedResult,
  resultsEqual,
  handleQueries
} from './instantiateProvider';

import {
  pushMiddleware,
  unshiftMiddleware,

  pushEnhancer,
  unshiftEnhancer,

  pushOnInstantiated,
  unshiftOnInstantiated,

  pushOnReady,
  unshiftOnReady,

  pushReplication,
  unshiftReplication,

  pushReplicator,
  unshiftReplicator,

  pushWait,
  unshiftWait,

  pushClear,
  unshiftClear
} from './keyConcats';

export default provide;
export {
  provide,
  reloadProviders,

  createProviderStore,
  getClientState,
  getInitialState,

  createKeyConcat,
  shallowEqual,

  instantiateProvider,
  getFromContextOrProps,
  getProviders,
  getProviderInstances,
  getActiveQueries,
  getQueryResults,
  getFunctionOrObject,
  getQueries,
  getQuery,
  getQueryOptions,
  getQueriesOptions,
  getQueryHandler,
  getMergedResult,
  handleQueries,

  pushMiddleware,
  unshiftMiddleware,

  pushEnhancer,
  unshiftEnhancer,

  pushOnInstantiated,
  unshiftOnInstantiated,

  pushOnReady,
  unshiftOnReady,

  pushReplication,
  unshiftReplication,

  pushReplicator,
  unshiftReplicator,

  pushWait,
  unshiftWait,

  pushClear,
  unshiftClear
};
