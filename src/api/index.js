import request from '@/utils/request';
export function getcalendar() {
  return request({
    url: '/api/getcalendar',
    method: 'post',
  })
}
export function addcalendar(data) {
  return request({
    url: '/api/addcalendar',
    method: 'post',
    data
  })
}
export function editcalendar(data) {
  return request({
    url: '/api/editcalendar',
    method: 'post',
    data
  })
}
export function delcalendar(data) {
  return request({
    url: '/api/delcalendar',
    method: 'post',
    data
  })
}

// 查询文章
// 查询文章列表
export function getarticleList(data) {
  return request({
    url: `/api/getArtCateList`,
    method: 'post',
    data
  })
}
// 根据id获取文章
export function getArtCate(id) {
  return request({
    url: `/api/getArtCate/${id}`,
    method: 'get',
  })
}
// 获取文章分类
export function getArtClass() {
  return request({
    url: `/my/article/cates`,
    method: 'get',
  })
}

// 获取全部网站
export function getShareList() {
  return request({
    url: `/api/getShareListserver`,
    method: 'get',
  })
}
// 获取ip
export function getip() {
  return request({
    url: `/ip`,
    method: 'get',
  })
}
// 查看访客列表
export function getAccessInfo(data) {
  return request({
    url: `/api/getUserAccessInfo`,
    method: 'post',
    data
  })
}
// 添加
export function addAccessInfo(data) {
  return request({
    url: `/api/addUserAccessInfo`,
    method: 'post',
    data
  })
}
// 获取随拍列表
export function somePhotolist(data) {
  return request({
    url: '/api/getsomePhtoto',
    method: 'post',
    data
  })
}

