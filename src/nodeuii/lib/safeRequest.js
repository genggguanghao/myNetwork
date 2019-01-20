import rp from 'request-promise';
class safeRequest{
    updateNum(options,cb){
        return new Promise((resolve,reject)=>{
          rp(options).then(function(result){
            //   const info=JSON.parse(result);
            //   if(info){
            //       resolve(info);
            //   }else{
            //       reject({});
            //   }
              console.log(result);
          })
        })
    }
}
export default safeRequest