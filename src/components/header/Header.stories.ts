import type { Meta, StoryObj } from '@storybook/react-vite';


import { Header } from './Header';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    title: "Welcome Page",
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = { args: { title: "Logged Out Header", } };
