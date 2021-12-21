const router=require('./../Routes/ArticleRouter')
const controller=require('./../Controllers/ArticleController')

test('sakam',()=>{
    let response=router.get('/:id',controller.GetById)
    console.log(response)
    expect(200).toBe(200)
})