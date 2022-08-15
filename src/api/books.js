import http from '../utils/http'

//books分页查询
export function page(params) {
    return http({
        method: "get",
        url: "books/page",
        params: params
    })
}

export const addSentence = (data) => {
    return http({
        url: 'books/add',
        method: 'post',
        data
    })
}
