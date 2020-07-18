import ajax from "./ajax"

//包含n个接口请求函数的模块
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
    //获取食物的分类列表
export const reqFoodTypes = () => ajax('/index_category')
    //获取商家列表
export const reqShopList = (latitude, longitude) => ajax('')