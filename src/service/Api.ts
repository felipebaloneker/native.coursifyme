import database from './database'

export default{
    getListCategory:async()=>{
        const listCategory = await database.get('/categories')
        .then(function(res){
            return res
        }).catch(err=>{
            console.log(err)
        })
        return listCategory;
    },
    getListPost:async(id:number)=>{
        const listPost = await database.get(`/posts?categories=${id}`)
        .then(function(res){
            console.log(res)
            return res
        }).catch(err=>{
            console.log(err)
        })
        return listPost;
    }
}