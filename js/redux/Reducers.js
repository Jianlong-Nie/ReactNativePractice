import { combineReducers } from 'redux';
import { CHANGE_HOME_APP } from './Actions';

const mainReducer = (state = {}, action) => {
    const newState = state;
    const homeApps = action.homeApps;
    // 判断 action 类型
    switch (action.type) {
    case CHANGE_HOME_APP:
        return {
            ...newState,
            homeApps
        };
    default:
        return state;
    }
};
// 使用 ES6 的对象字面量简写方式定义对象结构
const rootReducer = combineReducers({
    mainReducer,
});

export default rootReducer;