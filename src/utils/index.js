import $ from 'jquery'

$.ajaxSetup({
    dataType: 'json',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true
});

const getEndPoint = () => {
    let API_END_POINT = 'http://localhost:8080';

    return API_END_POINT;
}

export default {
    Auth: {
        login:          (data) => $.post( getEndPoint() + '/login', data),
        logout:         () => $.get( getEndPoint() + '/logout'),
        register:       (data) => $.post( getEndPoint() + '/register', data),
    },

    User: {
        userEdit:       (userId, data) => $.post( getEndPoint() + ['/user/', userId, '/edit'].join(''), data),
    }

}
