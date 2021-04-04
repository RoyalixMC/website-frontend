import React from 'react';

const TocContext = React.createContext({
    toc: [],
    setToc: () => {}
});

export default TocContext;
