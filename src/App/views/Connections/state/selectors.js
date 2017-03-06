import { createSelector } from 'reselect';

const selectConnections = (state) => state.get('connections');

const makeSelectChannelFilter = () => createSelector(
    selectConnections,
    (connections) => connections.get('channelFilter')
);

const makeSelectChannelType = () => createSelector(
    selectConnections,
    (connections) => connections.get('channelType')
);

const makeSelectConnections = () => createSelector(
    selectConnections,
    (connections) => connections.get('connections')
);

const makeSelectDialogShown = () => createSelector(
    selectConnections,
    (connections) => connections.get('dialogShown')
);

export {
    makeSelectChannelFilter,
    makeSelectChannelType,
    makeSelectConnections,
    makeSelectDialogShown
};
