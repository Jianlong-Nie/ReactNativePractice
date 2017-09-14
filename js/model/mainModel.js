export default {
    namespace: 'mainReducer',
    state: {},
    reducers: {
        stateChange(state, { payload }) {
            return { ...state, ...payload };
        },
    },
    effects: {
        *changeHomeApp({ payload }, { call, put }) {
            yield put({ type: 'stateChange', payload });
        },
    },
};