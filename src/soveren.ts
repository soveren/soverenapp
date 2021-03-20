import IpfsLibrary from 'ipfs'
import OrbitDBLibrary from'orbit-db'
import { v4 as uuidv4 } from'uuid'

import {Freedom, Store} from 'soverenjs'

const origin = window.location.origin//'https://soveren.org/'

function uidToStoreLink(storeUid) {
    return origin+'/tabs/store/'+storeUid
}

const freedom = new Freedom(IpfsLibrary, OrbitDBLibrary, uuidv4)

let _myStore;

async function myStore() {
    if (_myStore) return _myStore
    const store = new Store(freedom)
    await store.create()
    _myStore = store
    return _myStore
}

const _storesCache = {}

async function getStore(uid) {
    if (_storesCache[uid]) return _storesCache[uid]
    const store = new Store(freedom)
    await store.create(uid)
    _storesCache[uid] = store
    return store
}

export {Freedom, freedom, Store, getStore, myStore, uidToStoreLink }
