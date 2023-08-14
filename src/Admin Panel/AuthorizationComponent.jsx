export const Authorization = () => {
    return {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
}