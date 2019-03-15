import { type as findServerInstancesType} from '../actions/findServerInstances';
import servers from '../../data/servers';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findServerInstancesType: {
            if (!payload) {
                return [];
            }
            return servers;
        }

        default:
            return servers;
    }
}

export default reducer;