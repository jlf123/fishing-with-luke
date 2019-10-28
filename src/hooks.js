export const hooks = [
    {
        name: 'useState',
        description: `#useState hook\nReturns a stateful value and a function to update it. Calling the function to update it will cause the React component to re-render with the updated value. You can pass a default value into the useState function.\n\`\`\`\nimport React, { useState } from 'react';\nconst SomeComponent = () => {\nconst [ counter, setCounter ] = useState(0);\nreturn(\n<div>{ counter }</div>\n)\n}\`\`\`
        `
    },
    {
        name: 'useEffect',
        description: ''
    },
    {
        name: 'useRef',
        description: ''
    },
    {
        name: 'useContext',
        description: ''
    }
];
