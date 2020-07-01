<template>
    <div class="about">
        <div class="left">左侧盒子</div>
        <div class="right">右侧盒子</div>
    </div>
</template>

<script>
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}
var myClass = new MyClass();
console.log(MyClass.prototype);
console.log(myClass.__proto__)
console.log([1, 2, 3] instanceof new MyClass() )
export default {
    data() {
        return {};
    },
    methods: {},
    mounted() {
        // 第一题答案
        // function getType(param) {
        //     return Object.prototype.toString
        //         .call(param)
        //         .slice(7, -1)
        //         .toLowerCase();
        // }
        // console.log(getType([]));

        // console.log(typeof [])
        // console.log("1111",Object.prototype.toString.call([]))

        // let i = 2;

        // Number.prototype.valueOf = function() {

        //     return i++;

        // };

        // let a = new Number( 21 );
        // // console.log('a',a)
        // if (a == 2 && a == 3) {

        //     console.log( true );

        // }
        // console.log(Array.apply(null,{a:1,length:1000}))
        var person = {
            fullName: function(city, country) {
                return (
                    this.firstName +
                    " " +
                    this.lastName +
                    "," +
                    city +
                    "," +
                    country
                );
            }
        };
        var person1 = {
            firstName: "John",
            lastName: "Doe"
        };
        console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))
        const arr = Array.from(new Array(10), (x, y) => {
            console.log(y);
            return y
            })
        console.log(arr)
        // Array.apply(null,{length:1000})
        // var number = 50;
        // var obj = {
        //     number:2,
        //     getNum: function(){
        //         var number = 6;
        //         console.log(this)
        //         return this.number;
        //     }
        // }
        // console.log(obj.getNum());  //
        // console.log(obj.getNum.call());  //
        // console.log(obj.getNum.call({number:7}))  //
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
// .about {
//     .left {
//         width: 200px;
//         height: 300px;
//         float: left;
//         background: #333;
//     }
//     .right {
//         height: 300px;
//         margin-left: 200px;
//         background: red;
//     }
// }

.about {
    display: flex;
    .left {
        height: 200px;
        width: 200px;
        background-color: blue;
    }
    .right {
        height: 200px;
        flex: 1;
        background-color: red;
    }
}
</style>