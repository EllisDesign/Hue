import { UI_UPDATE_REGISTER_OVERLAY } from 'store/constants'

const initialState = {
	registerOverlay: {
		active: false
	}
}

export function ui(state = initialState, action) {
	switch (action.type) {
		/*

    case CONSTANT:
      return action.PAYLOAD
    */

		case UI_UPDATE_REGISTER_OVERLAY:
			return {
				...state,
				registerOverlay: action.payload
			}

		default:
			return state
	}
}
