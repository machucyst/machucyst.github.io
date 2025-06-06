function getDimen(x,y){
    return x==0 ? btn[y].offsetWidth : btn[y].offsetWidth;
}
const dimens = {
    btn1:{
        width: getDimen(0,0),
        height: getDimen(1,0)
    },
    btn2:{
        width: getDimen(0,1),
        height: getDimen(1,1)
    },
    btn3:{
        width: getDimen(0,2),
        height: getDimen(1,2)
    },
    btn3:{
        width: getDimen(0,3),
        height: getDimen(1,3)
    },
    btn4:{
        width: getDimen(0,4),
        height: getDimen(1,4)
    },
    btn5:{
        width: getDimen(0,4),
        height: getDimen(1,4)
    },
    btn5:{
        width: getDimen(0,5),
        height: getDimen(1,5)
    },
}