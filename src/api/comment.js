import http from '../utils/http'

export const pageComment = (id, params) => {
    return http({
        url: 'comment/page/' + id,
        method: 'get',
        params
    })
}

export const addComment = (data) => {
    return http({
        url: 'comment/add',
        method: 'post',
        data
    })
}