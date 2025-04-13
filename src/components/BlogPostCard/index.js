import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function BlogPostCard({title, description, permalink, date, readingTime, tags}) {
  return (
    <div className={styles.blogPostCard}>
      <div className={styles.cardHeader}>
        {date && <div className={styles.blogPostDate}>{date}</div>}
        <Heading as="h3" className={styles.blogPostTitle}>
          <Link to={permalink}>{title}</Link>
        </Heading>
      </div>
      <div className={styles.cardBody}>
        <p>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        {tags && tags.length > 0 && (
          <div className={styles.tagList}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className={styles.cardMeta}>
          {readingTime && <span className={styles.readingTime}>{readingTime} min</span>}
          <Link to={permalink} className={styles.readMoreLink}>
            Lire l'article
          </Link>
        </div>
      </div>
    </div>
  );
}
