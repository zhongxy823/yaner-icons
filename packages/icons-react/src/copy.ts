
var Chef = {
    //body 的宽高
    'bodyH':document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
    'bodyW':document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
    //动态创建 style 标签添加样式
    'cssStyle':function (){  
        var doc = document;  
        var style = doc.createElement("style");
        if (style.styleSheet){// IE
            style.styleSheet.cssText = arguments[0];
        } else { // w3c  
            var cssText = doc.createTextNode(arguments[0]);
            style.appendChild(cssText); 
        }
        var heads = doc.getElementsByTagName("head");
        if(heads.length){
            heads[0].appendChild(style);
        }else{
            doc.documentElement.appendChild(style);
        }
    },
    // 创建并显示遮罩层
    'createChef':function(){
        if(document.body.getElementsByClassName('Chef_opacity').length === 1){
            document.body.removeChild(document.body.getElementsByClassName('Chef_opacity')[0]);
        }
        var div = this.create('div');
            div.style.width = this.bodyW + 'px';
            div.style.height = this.bodyH + 'px';
            div.className = 'Chef_opacity';
            document.body.appendChild(div);
    },
    // 弹窗关闭
    'close': () => {
        document.getElementsByClassName('Chef_opacity')[0].style.display = 'none';
        document.body.removeChild(document.getElementsByClassName('Chef_alert')[0]);
    },
    //alert 框
    'alert':function(){
        // 显示遮罩层
        this.createChef();
        // 创建
                var alertDiv = this.create('div'),
                    alertH2 = this.create('h2'),
                    alertIcon = this.create('span')

                //样式以及内容
                alertDiv.className = 'Chef_alert';
                if(arguments.length === 1){
                    document.getElementsByClassName('Chef_opacity')[0].style.background = 'rgba(0,0,0,'+arguments[0].shade+')'    ;
                    alertDiv.style.top = arguments[0].offset;
                    if(arguments[0].width === undefined){
                        alertDiv.style.width = '380px';
                    }else{
                        alertDiv.style.width = arguments[0].width;
                        alertDiv.style.marginLeft = '-'+parseInt(arguments[0].width)/2 + 'px';
                    }
                    arguments[0].title === undefined ? alertH2.innerHTML = '来自网页的信息' : alertH2.innerText = arguments[0].title;
                }else{// -- 默认提示信息
                    alertH2.innerHTML = '来自网页的信息';
                }
                // 添加到页面
                alertDiv.appendChild(alertH2);
                document.body.appendChild(alertDiv);
            },
        //创建
    'create':function(){
        return document.createElement(arguments[0]);
    }
};
;(function(Chef){
    var cssString = '\
            *{padding:0;margin:0;}\
            .Chef_alert{position:fixed;top:50px;background:white;box-shadow: 0 0 8px 0 #4da6f7;border-radius: 8px;width:260px;left:50%;margin-left:-130px;z-index:2022;}\
            .Chef_alert>h2{width:90%;margin:10px auto;font-size:16px;}\
        ';
    Chef.cssStyle(cssString);
})(Chef);

export function copyName (name) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", `<${name} />`); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    Chef.alert({ title: `✅ <${name} />  复制成功!` })
    setTimeout(() => {
        Chef.close()
    }, 1500)
    // alert("复制成功");
}

