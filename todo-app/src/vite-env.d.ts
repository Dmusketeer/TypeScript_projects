/// <reference types="vite/client" />
// jsx.d.ts
import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // div: React.HTMLProps<HTMLDivElement>;
            // div: React.HTMLAttributes<HTMLDivElement>;
            // You can define more elements as needed
        }
    }
}
