export default (user = [],action) => {
    switch (action.type) {
        case 'CREATE_USER':
return [...user,action.payload]

        default:
            return user
    }
}