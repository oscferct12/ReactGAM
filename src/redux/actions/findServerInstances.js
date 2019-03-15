export const type = 'findServerInstances';

const findServerInstances = (text) => ({
    type,
    payload: text,
});

export default findServerInstances;
