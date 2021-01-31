declare module 'react-redux';

type CategoryType = {
    id: number
    type: string,
    title: string,
    list?: Array<{id: number, content: string}>
};