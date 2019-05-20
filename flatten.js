const _ =require('lodash');
// const arr1 = [99,0,33,[101,202,[303,305,[922,11]]],1,2];
// const arr2 = [2,1,2];
const users = [
    {
        user:'fred',age:48
    },
    {
        user:'barney',age:36
    },
    {
        user:'fred',age:40
    },
    {
        user:'barney',age:34
    },
]
const sortedUser = _.sortBy(users,['user','age']);
// const flattenArr1 = _.flattenDeep(arr1);
// const .uniq([2, 1, 2])
// console.log(flattenArr1);
console.log(sortedUser)