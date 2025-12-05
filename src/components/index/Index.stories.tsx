import type { Meta, StoryObj } from '@storybook/react';
import { Index } from './Index';

const meta = {
    title: 'Components/Index',
    component: Index,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTopics = [
    'Capital Cities',
    'American Presidents',
    'Song Titles',
    'World Rivers',
    'Famous Scientists',
    'Programming Languages',
];

export const Default: Story = {
    args: {
        topics: sampleTopics,
        title: 'Index',
    },
};

export const SingleItem: Story = {
    args: {
        topics: ['Mathematics'],
        title: 'Subject',
    },
};


export const Responsive: Story = {
    args: {
        topics: sampleTopics,
        title: 'Selectable Index',
        onSelectTopic: (topic: string) => alert(`Selected: ${topic}`),
    },
};
