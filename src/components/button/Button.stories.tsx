import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Click me",
        onClick: () => alert("Button clicked with custom callback!"),
    }
};

export const DefaultCallback: Story = {
    args: {
        label: "Click me for the default message",
    }
};
