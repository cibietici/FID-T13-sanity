export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'intro',
            title: 'Intro',
            type: 'blockContent'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
}
