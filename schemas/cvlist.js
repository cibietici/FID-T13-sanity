export default {
    name: 'cvList',
    title: 'Cv list',
    type: 'document',
    fields: [
        {
            name: 'employee',
            title: 'Employee',
            type: 'string'
        },
        {
            name: 'from',
            title: 'Date from',
            type: 'datetime'
        },
        {
            name: 'to',
            title: 'Date to',
            type: 'datetime'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
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
            title: 'employee'
        }
    }
}