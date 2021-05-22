import React, { useEffect, useState } from 'react';

import styles from './DebugInfo.module.scss';

/**
 * Paste this component into App.tsx -> Page component to see the debug info
 * Is only intendent for use in development
 * @param props
 */
export const DebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<{
    innerWidth: number;
    innerHeight: number;
    devicePixelRatio: number;
  } | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDebugInfo({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {`innerWidth: ${debugInfo?.innerWidth}`}
      {`innerHeight: ${debugInfo?.innerHeight}`}
      {`devicePixelRatio: ${debugInfo?.devicePixelRatio}`}
    </div>
  );
};
