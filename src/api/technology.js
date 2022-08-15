import http from '../utils/http'

//technology分页查询
export function technologypage(params) {
    return http({
        method: "get",
        url: "technology/page",
        params: params
    })
}

export function selectOne(data) {
    return http({
        method: 'get',
        url: "/technology/" + data
    })
}