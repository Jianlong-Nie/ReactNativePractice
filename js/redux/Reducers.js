import { CHANGE_TEXT, changeText } from './Actions';

const mainReducer = (state = changeText('welcome to React Native'), action) => {

    const newState = state;
    const text = action.text;

    // 判断 action 类型
    switch (action.type) {
    case CHANGE_TEXT:
        return {
            ...newState,
            text: '改变了' + text
        };

    default:
        return {
            ...newState,
            text:state.text
        };
    }
};

export default mainReducer;