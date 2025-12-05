import type { Meta, StoryObj } from '@storybook/react-vite';


import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'Pages/Page',
    component: Page,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};



export const Default: Story = {
    args:
    {
        flashcardData: [{ question: 'What is the capital of Scotland?', answer: 'Edinburgh' }, { question: 'What is the capital of England?', answer: 'London' }, { question: 'What is the capital of Wales?', answer: 'Cardiff' }],
    }
}
export default meta;
type Story = StoryObj<typeof meta>;

export const NoCards: Story = {
    args:
    {
    }
};