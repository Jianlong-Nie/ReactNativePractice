export const CHANGE_HOME_APP = 'CHANGE_HOME_APP';

// 初始化 CHANGE_TEXT 对象
export const changeHomeApp = (homeApps = []) => {
    return {
        type: CHANGE_HOME_APP,
        homeApps
    };
};