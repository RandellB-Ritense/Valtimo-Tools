import React from "react";
import { createRoot } from "react-dom/client";

const Popup: React.FC = () => {
    return (
        <div>
            <h1>Popup Panel</h1>
            <p>This is the content for the custom Popup panel!</p>
        </div>
    );
};

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
} else {
    console.error("Root element not found for DevTools panel.");
}