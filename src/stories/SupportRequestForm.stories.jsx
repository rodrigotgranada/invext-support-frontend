import React from 'react';
import SupportRequestForm from '../components/SupportRequestForm';

export default {
    title: 'Components/SupportRequestForm',
    component: SupportRequestForm,
};

const Template = (args) => <SupportRequestForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
