import IpfsLibrary from 'ipfs'
import OrbitDBLibrary from'orbit-db'
import { v4 as uuidv4 } from'uuid'
import {ethers} from 'ethers'

import {Freedom, Store} from '../../soverenjs'
import abi from '../../soverencontract/abi/contracts/Soveren.sol/Soveren.json';
import {Soveren} from '../../soverencontract/typechain';
// const {Soveren} = require('../../soverencontract/typechain');

const origin = window.location.origin//'https://soveren.org/' //TODO

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

let _contract: Soveren;
async function getSoverenContract(): Promise<Soveren> {
    if (!_contract) {
        const daiAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
        //const provider = new ethers.providers.Web3Provider(window['ethereum'])
        const provider = new ethers.providers.JsonRpcProvider()
        let wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')
        wallet = wallet.connect(provider)
        console.log('wallet', wallet);
        // wallet.connectUnchecked();
        _contract = new ethers.Contract(daiAddress, abi, provider) as Soveren;
        _contract = await _contract.connect(wallet)
    }
    return _contract
}

export {Soveren, Freedom, freedom, Store, getStore, myStore, uidToStoreLink,
    getSoverenContract }
