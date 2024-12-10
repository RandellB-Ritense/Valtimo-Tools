import React from "react";
import { createRoot } from "react-dom/client";

const Panel: React.FC = () => {
    return (
        <div>
            <h1>DevTools Panel</h1>
            <p>This is the content for the custom DevTools panel!</p>
        </div>
    );
};

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Panel />);
} else {
    console.error("Root element not found for DevTools panel.");
}
