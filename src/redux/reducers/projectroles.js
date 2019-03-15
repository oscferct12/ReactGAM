import { type as findRolesType } from '../actions/findRoles';
import roles from '../../data/roles';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findRolesType: {
            if (!payload) {
                return [];
            }
            return roles;
        }

        default:
            return roles;
    }
}

export default reducer;