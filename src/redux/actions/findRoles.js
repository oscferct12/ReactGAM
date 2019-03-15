export const type = 'findRoles';

const findRoles = (text) => ({
    type,
    payload: text,
});

export default findRoles;