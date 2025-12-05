import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { Page } from '../page/Page';

const meta = {
    title: 'Components/Layout',
    component: Layout,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const flashcardData = [{ question: 'What is the capital of Scotland?', answer: 'Edinburgh' }, { question: 'What is the capital of England?', answer: 'London' }, { question: 'What is the capital of Wales?', answer: 'Cardiff' }];


export const CapitalCities: Story = {
    render: () => (
        <Layout user={{ name: 'Jane Doe' }} >
            <Page flashcardData={flashcardData} />
        </Layout>
    ),
};