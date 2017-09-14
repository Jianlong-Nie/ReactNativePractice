import { combineReducers } from 'redux';
import * as AC from './Actions';

const initialState = {
    content: 'Welcome to RN Redux Test!',
};
const textReducer = (state = initialState, action) => {
    switch (action.type) {
    case AC.ACTION_TYPE_CLICK:
        return Object.assign({}, state, {
            content: action.text
        });
    default:
        return state;
    }
};

const mainReducer = (state = {}, action) => {
    const newState = state;
    const homeApps = action.homeApps;
    // 判断 action 类型
    switch (action.type) {
    case AC.CHANGE_HOME_APP:
        return {
            ...newState,
            homeApps
        };
    default:
        return state;
    }
};

const progressHud = (state = {}, action) => {
    switch (action.type) {
    case AC.CHANGE_PROGRESSHUD:
        return action.visible;
    default:
        return state;
    }
};

// 使用 ES6 的对象字面量简写方式定义对象结构
const rootReducer = combineReducers({
    textReducer,
    mainReducer,
    progressHud,
});

export default rootReducer;
