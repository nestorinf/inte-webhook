import {success,error} from '../libs/response'
import request from '../libs/axios'
export const requestPost = async (req,res) => {
    try {
        const url = 'http://www.iancarina.com.ve/corporacionmary/api/'
        const path = '?service=inventario_computacion&method=inventory_status&status_id=2&opt=158'
        const {data} = await request(url).get(path)
        success(req,res,200,data)
    } catch (err) {
        error(req,res,400,err)
    }
}
export const requestGet = (req,res) => {}
