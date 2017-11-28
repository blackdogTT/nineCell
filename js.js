window.onload = function () {
    color();//加载完成时运行color函数
}
//产生一个随机数组
function div_random() {
    var div = document.querySelectorAll('.row div');//得到需要变色的div数组
    var amount = div.length;//得到div数组的长度，由于数组索引含0，所以需要减一
    var index1 = parseInt(Math.random() * amount);//得到一个1到div数组长度-1的随机数，此项目中为0--8；
    var index2 = parseInt(Math.random() * amount);
    var index3 = parseInt(Math.random() * amount);
    while (index1 === index2 || index1 === index3 || index2 === index3) {//做一个判断，如果随机数存在重复，则重新选取两个，直到都不重复为止
        index2 = parseInt(Math.random() * amount);
        index3 = parseInt(Math.random() * amount);
    }
    var div_index = [index1, index2, index3];//把得到的三个随机数放入一个数组中
    return div_index;//返回随机数组
}

//此函数随机产生一个6位颜色代码
function color_random() {
    //建立一个数组，含1-F
    var color_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var color_index1 = color_array[parseInt(Math.random() * 15)];//从中取出一个随机值，以下同
    var color_index2 = color_array[parseInt(Math.random() * 15)];
    var color_index3 = color_array[parseInt(Math.random() * 15)];
    var color_index4 = color_array[parseInt(Math.random() * 15)];
    var color_index5 = color_array[parseInt(Math.random() * 15)];
    var color_index6 = color_array[parseInt(Math.random() * 15)];
    var color = '#' + color_index1 + color_index2 + color_index3 + color_index4 + color_index5 + color_index6;//定义color，其值为16进制颜色代码
    return color;//把color返回
}
//运行此函数则随机改变3个小方块颜色为随机颜色
function change() {
    var recolor = document.querySelectorAll('.row div');//找到所有的小方块，组成数组recolor
    for (var i = 0; i < recolor.length; i++) {//做一个遍历，给所有小方块都变成原来的颜色，因为要循环，所以每次都需要还原颜色才能保证每次执行都只有3个小方块变色
        recolor[i].style.backgroundColor = 'orange';
    }
    var color1 = color_random();//随机一个颜色
    var color2 = color_random();//随机一个颜色
    var color3 = color_random();//随机一个颜色
    var div_array = div_random();//取出div_random中返回的数组
    var div = document.querySelectorAll('.row div');//找到所有小方块组成一个数组
    div[div_array[0]].style.backgroundColor = color1;//数组索引为之前的随机数，共三个，给随机索引下的小方块指定随机颜色，下同
    div[div_array[1]].style.backgroundColor = color2;
    div[div_array[2]].style.backgroundColor = color3;
}
//加入计时器功能
function color() {
    var timer;//timer = setInterval(change, 1000)这条语句直接执行，所以先定义一个本函数中的全局变量用做setInterval的传递参数
    document.getElementById('start').addEventListener('click',function () {//点击开始闪按钮时启动定时器与change函数
        timer = setInterval(change, 1000);
    });
    document.getElementById('end').addEventListener('click',function () {//点击停止闪按钮时关闭定时器并将所有小方块的背景色还原
        clearInterval(timer);
        var recolor = document.querySelectorAll('.row div');
        for (var i = 0; i < recolor.length; i++) {
            recolor[i].style.backgroundColor = 'orange';
        }
    });
}
