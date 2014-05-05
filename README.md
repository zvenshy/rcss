rcss
====

Rixin sass modules library
现在是个人项目。

这是一个三栏布局系列的sass模板集。
需要按约定的布局和命名，之后就随意了。

参数
====

参数有这些需要设置，分别是左边栏，右边栏，header的实际高度,例如

$sub-width : 220px;</br>
$extra-width : 200px;</br>
$header-height : 50px;</br>


基本布局
====

首先是基本的内容和头尾
    <div id="content"></div>
    <div id="footer"></div>
    <div id="header"></div>
命名不要改变，或者可以通过修改scss文件自行命名

模板采用绝对定位将header定到头部，所以需要通过给 $header-height 赋值，从而对content的margin-top赋值。
header是否有height不是关键，只是需要一个值。

然后是三栏

    <div class="main"><div class="main-wrap">main</div></div>
    <div class="sub">sub</div>
    <div class="extra">extra</div>
    
注意.main中还有一个.main-wrap，通过它来控制margin, 从而使main不被sub,extra遮住。
命名依旧需要注意。
模板有三种_s-m-e.scss  _s-e-m.scss  _m-s-e.scss。满足不同的布局需求。
在主scss文件中，比如style.scss，通过例如@import 's-m-c'便可载入相应的布局模板。

实例：
<code>
//style.scss
$sub-width : 220px;
$extra-width : 200px;
$header-height : 50px;

@import  "s-m-e";

#content > .content-wrap {background: gray; margin: 0 auto; text-align: center; width: 700px; 
.sub { background:  #c3c; }
.extra { background: #ccc; }
.main, .sub, .extra {height: 50px;}}

#header , #footer{ height: $header-height; background: blue;}
#header div, #footer div {margin: 0 auto; width: 700px; text-align: center;}

//html
<body>
    <div id="content">
        <div class="content-wrap">
                <div class="main"><div class="main-wrap">main</div></div>
                <div class="sub">sub</div>
                <div class="extra">extra</div>
        </div>
    </div>
    <div id="footer"><div>footer</div></div>
    <div id="header"><div>header</div></div>
    </code>
二栏
====

也可通过设置$sub-width，$extra-width为0，轻松切换至二栏布局。

项目肯定有缺陷，希望大家指正，也希望大家为之添砖加瓦，提出好意见啊！！
