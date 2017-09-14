//redux test
export const ACTION_TYPE_CLICK = 'ACTION_TYPE_CLICK';
export function onClick(content) {
    return {
        type: ACTION_TYPE_CLICK,
        text: content
    };
}
export const CHANGE_HOME_APP = 'CHANGE_HOME_APP';
export const CHANGE_PROGRESSHUD = 'CHANGE_PROGRESSHUD';

// 初始化 CHANGE_TEXT 对象
export const changeHomeApp = (homeApps = []) => {
    return {
        type: CHANGE_HOME_APP,
        homeApps
    };
};
// 初始化 CHANGE_TEXT 对象
export const changeProgress = (visible = false) => {
    return {
        type: CHANGE_PROGRESSHUD,
        visible
    };
};