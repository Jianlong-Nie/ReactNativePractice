export const CHANGE_TEXT = 'CHANGE_TEXT';

// 初始化 CHANGE_TEXT 对象
export const changeText = (text) => {
    return {
        type: CHANGE_TEXT,
        text
    };
};