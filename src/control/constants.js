export default {
  Events: {
    CHANGE: 'CHANGE'
  },

  ActionTypes: {
    CHANGE_EMAIL: 'CHANGE_EMAIL',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    INPUT_EMAIL: 'INPUT_EMAIL',
    INPUT_PASSWORD: 'INPUT_PASSWORD',
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    HIDE_LOCK: 'HIDE_LOCK',
    INVALIDATE_CREDENTIALS: 'INVALIDATE_CREDENTIALS',
    RECEIVE_CLIENT: 'RECEIVE_CLIENT',
    RECEIVE_CLIENT_ERROR: 'RECEIVE_CLIENT_ERROR',
    RECEIVE_CLIENT_TIMEOUT: 'RECEIVE_CLIENT_TIMEOUT',
    RECEIVE_GRAVATAR: 'RECEIVE_GRAVATAR',
    RECEIVE_GRAVATAR_ERROR: 'RECEIVE_GRAVATAR_ERROR',
    SETUP_LOCK: 'SETUP_LOCK',
    SHOW_LOCK: 'SHOW_LOCK',
    SIGN_IN: 'SIGN_IN',
    SUCCESSFUL_SIGN_IN: 'SUCCESSFUL_SIGN_IN'
  },

  LockStates: {
    CRASHED: 'CRASHED',
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    READY: 'READY',
    SIGNED_IN: 'SIGNED_IN',
    SIGNING_IN: 'SIGNING_IN',
    WAITING_CLIENT_CONFIG: 'WAITING_CLIENT_CONFIG'
  }
}
