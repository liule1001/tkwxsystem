export function today() {  //当天 传给后端
    let myDate = new Date();
    //获取当前日(1-31))
    let today = myDate.getFullYear()+"-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
    return today
}
export function yestoday(){ //昨天
    //昨天的时间
    let myDate= new Date();
    myDate.setTime(myDate.getTime()-24*60*60*1000); 
    let yestoday = myDate.getFullYear()+"-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
    return yestoday
}

export function tommorrow(){  //明天
    //明天的时间
    let myDate = new Date();
    myDate.setTime(myDate.getTime()+24*60*60*1000);
    let tomorrow = myDate.getFullYear()+"-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
    return tomorrow
}

export function weekMon(){ //本周一
    let now = new Date();
    let nowTime = now.getTime() ;
    let day = now.getDay();
    let oneDayTime = 24*60*60*1000 ;
    let MondayTime = nowTime - (day-1)*oneDayTime ;//显示周一
    let weekMon=new Date(MondayTime).getFullYear()+"-" + (new Date(MondayTime).getMonth()+1) + "-" + new Date(MondayTime).getDate()
    return weekMon
}

export function weekNextMon(){  //下周一
    let now = new Date();
    let nowTime = now.getTime() ;
    let day = now.getDay();
    let oneDayTime = 24*60*60*1000 ;
    let SundayTime =  nowTime + (7-day)*oneDayTime ;//显示周日
    SundayTime=SundayTime+24*60*60*1000;//周日加一天
    let weekNextMon = new Date(SundayTime).getFullYear()+"-" + (new Date(SundayTime).getMonth()+1) + "-" + new Date(SundayTime).getDate();
    return weekNextMon
}

export function monthFirst(){ //本月第一天
    let now = new Date(); //当前日期 
    let nowMonth = now.getMonth(); //当前月 
    let nowYear = now.getFullYear(); //当前年 
    //本月的开始时间
    let monthStartDate = new Date(nowYear, nowMonth, 1); 
    let monthFirst=new Date(monthStartDate).getFullYear()+"-" + (new Date(monthStartDate).getMonth()+1) + "-" + new Date(monthStartDate).getDate();
    return monthFirst
}

export function monthNextFirst(){ //下个月第一天
    let now = new Date(); //当前日期 
    let nowMonth = now.getMonth(); //当前月 
    let nowYear = now.getFullYear(); //当前年 
    //本月的结束时间
    let monthEndDate = new Date(nowYear, nowMonth+1, 0);
     monthEndDate=Date.parse(monthEndDate)+24*60*60*1000;//s
    // monthEndDate=timeEnd+24*60*60*1000;
    let monthNextFirst = new Date(monthEndDate).getFullYear()+"-" + (new Date(monthEndDate).getMonth()+1) + "-" + new Date(monthEndDate).getDate();
    return monthNextFirst
}
