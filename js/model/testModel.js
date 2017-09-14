const delay = time => new Promise(resolve => setTimeout(resolve, time));

const wait = async () => {
    await delay(2000);
}

export default {
    namespace: 'textReducer',
    state: {
        content: 'Welcome to React Native!'
    },
    reducers: {
        stateChange(state, { payload }) {
          return { ...state, ...payload }
        },
    },
    effects: {
        *onClick({ payload }, { call, put }) {
            yield put({ type: 'stateChange', payload });
            yield call(wait)
            yield put({ type: 'stateChange', payload: { content: 'After onClick 3000' } });
        },
    },
}