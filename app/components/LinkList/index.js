/**
*
* LinkList
*
*/

import React from 'react';


import Link from '../Link';
import styles from './styles.css';
import IconButton from '../IconButton';

function LinkList({ links, routeTopicName, children, startAdd }) {
  const linkNodes = links.map(t => (
    <Link
      key={t.id}
      link={t}
    />
  ));

  return (
    <div className={styles.linkList}>
      <h1>{routeTopicName}</h1>
      {linkNodes}

      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        onClick={() => startAdd(topicName)}
      />

      {children}
    </div>
  );
}

LinkList.propTypes = {
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
  routeTopicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};

export default LinkList;
