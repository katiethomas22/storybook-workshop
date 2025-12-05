import type { Meta, StoryObj } from '@storybook/react';
import { Flashcard } from './Flashcard';

const meta = {
    title: 'Components/Flashcard',
    component: Flashcard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Flashcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Front: Story = {
    args:
    {
        flashcard: {
            question: 'What is the capital of France?',
            answer: 'Paris',
        },
    }
};
