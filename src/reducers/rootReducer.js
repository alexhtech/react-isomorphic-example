import {combineReducers} from 'redux'
import * as reducers from './'
import * as baseReducers from '../../react-isomorphic-tools/src/reducers'

export default combineReducers(Object.assign(baseReducers, reducers))