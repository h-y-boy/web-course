import request from './request'

//获取购物车商品
export function getShopCarList() {
    return request({
        url: '/api/shopcar/getShopCarList',
    })
}

//删除购物车
export function deleteShopCar(params, token) {
    return request({
        url: '/api/shopcar/deleteShopCar',
        params,
        headers: {
            token
        }
    })
}
//批量删除购物车
export function deleteShopCars(data, token) {
    return request({
        url: '/api/shopcar/deleteShopCars',
        method: 'post',
        data,
        headers: {
            token
        }
    })
}

//加入购物车
export function addShopCar(data, token) {
    return request({
        url: '/api/shopcar/addShopCar',
        method: 'post',
        headers: {
            token
        },
        data
    })
}

//去结算
export function settlement(data) {
    return request({
        url: '/api/order/settlement',
        method: 'post',
        data
    })
}

//支付宝结算
export function alipayOrder(data) {
    return request({
        url: '/api/pay/alipay/alipayOrder',
        method: 'post',
        data
    })
}

//支付宝结算
export function wxpayOrder(data) {
    return request({
        url: '/api/pay/wxpay/wxpayOrder',
        method: 'post',
        data
    })
}