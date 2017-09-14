export default {
    namespace: 'progressHud',
    state: {},
    reducers: {
        stateChange(state, { payload }) {
            return payload;
        },
    },
    effects: {
        *changeProgress({ payload }, { call, put }) {
            yield put({ type: 'stateChange', payload });
        },
    },
};