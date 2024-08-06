import { UI_UPDATE_REGISTER_OVERLAY } from 'store/constants'

/*

REDUX ACTION

export function fnName (PAYLOAD) {
  return { type : CONSTANT, PAYLOAD }
}

*/

/*

REDUX THUNK

export function fnName (PAYLOAD) {
  return dispatch => dispatch( fnNameSuccess(PAYLOAD) )
}

*/

export function uiUpdateRegisterOverlay(payload) {
	return { type: UI_UPDATE_REGISTER_OVERLAY, payload }
}
