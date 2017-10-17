/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_KOMS = 'sollieweb/StravaPage/LOAD_KOMS';
export const LOAD_KOMS_SUCCESS = 'sollieweb/StravaPage/LOAD_KOMS_SUCCESS';
export const LOAD_KOMS_ERROR = 'sollieweb/StravaPage/LOAD_KOMS_ERROR';
export const CHANGE_ATHLET_ID = 'sollieweb/StravaPage/CHANGE_ATHLET_ID';
