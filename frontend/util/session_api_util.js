export const signup = newUser => {
    return (
    $.ajax({
        url: 'api/users', 
        method: 'post', 
        data: {
            user: 
            {
              username: newUser.username, 
              password: newUser.password, 
              email: newUser.email,
            }
        }
    })
    )
};

export const login = user => {
    return (
    $.ajax({
        url: '/api/session', 
        method: 'post', 
        data: {
            user: 
            {
              username: user.username, 
              password: user.password, 
            }
        }
    })
    )
};

export const logout = () => (
    $.ajax({
        url: 'api/session', 
        method: 'delete', 
    })
);