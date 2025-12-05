import React from 'react';
import './Index.css';

export interface IndexProps {
    topics: string[];
    onSelectTopic?: (topic: string) => void;
    title?: string;
}

export const Index: React.FC<IndexProps> = ({
    topics,
    onSelectTopic,
    title = 'Index'
}: IndexProps) => {
    return (
        <aside className="index-container" aria-label="Topics index">
            <nav>
                <h3 className="index-title">{title}</h3>
                <ul className="index-list">
                    {topics.map((topic) => (
                        <li
                            key={topic}
                            className="index-item"

                            onClick={() => onSelectTopic?.(topic)}

                        >
                            {topic}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
