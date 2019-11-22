import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

const selectRouteTopic = () => (state, props) => props.params.topicName;

/**
 * Default selector used by LinkListContainer
 */

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(t => t.name === routeTopicName);

    return selectedTopic || {
      name: '',
    };
  }
);

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  (substate, topic) => Object.assign(substate.toJS(), { routeTopicName: topic.name })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
