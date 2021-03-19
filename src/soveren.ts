import IpfsLibrary from 'ipfs'
import OrbitDBLibrary from'orbit-db'
import { v4 as uuidv4 } from'uuid'

import {Freedom, Store} from 'soverenjs'

const freedom = new Freedom(IpfsLibrary, OrbitDBLibrary, uuidv4)

let _myStore;

async function myStore() {
    if (_myStore) return _myStore
    const store = new Store(freedom)
    await store.create()
    _myStore = store
    return _myStore
}

async function getStore(uid) {
    const store = new Store(freedom)
    await store.create(uid)
    return store
}

export {Freedom, freedom, Store, getStore, myStore }
