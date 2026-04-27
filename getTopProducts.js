// 2. Orders → User Summary with Top Product(Group + Count + Compare)
// Each order contains a userId and a product.Find, for each user, the most frequently ordered product.

//     Task:
// Group by userId
// Count products per user
// Find max count product
// Return { userId, topProduct }

    function getTopProducts(orders) {
        let userMap={};
        let result=[];

        for (let i=0;i<orders.length;i++){
            let getUserId=orders[i].userId;
            let getProduct=orders[i].product;

            if (userMap[getUserId]=== undefined){
                userMap[getUserId]={};
            }

            if (userMap[getUserId][getProduct]===undefined){
                userMap[getUserId][getProduct]=1;
            }else{
                userMap[getUserId][getProduct] = userMap[getUserId][getProduct]+1;
            }
        }

        for(let getUserId in userMap){
            let productMap = userMap[getUserId];
            let maxCount=0;
            let topProduct=null;
            
            for(let product in productMap){
                if(productMap[product]>maxCount){
                    maxCount=productMap[product];
                    topProduct = product;
                }   
            }
            result.push({
                userId: Number(getUserId),
                topProduct: topProduct,
            })
        }
        return result;
    }

console.log(getTopProducts([
    { userId: 1, product: "A" },
    { userId: 1, product: "B" },
    { userId: 1, product: "A" },
    { userId: 2, product: "C" },
    { userId: 2, product: "C" }
]));

// Expected:
// [
//   { userId: 1, topProduct: "A" },
//   { userId: 2, topProduct: "C" }
// ]