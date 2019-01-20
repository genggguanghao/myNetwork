import indexCtroller from "./indexCotroller.js";
const routesInit ={
   init(app,router){
    app.use(router(_=>{
        console.log(111)
        _.get("/",indexCtroller.testAction())
        }))
   }

}
export default routesInit;