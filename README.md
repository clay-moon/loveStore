loveStore
=
>本来是打算做一个管理系统的，做着做着改变了主意，遂有了这个项目，也因此不可避免的有一些管理系统的影子，因为时间原因并不来得及更改。我心目中项目的最终形态应该是可完全本地存储，拥有高度的自定义化收藏功能，仅收藏已完成并喜欢的事物，并且非常的简洁，不会有多余的功能。虽然现在说这个有点早，不过也算种下一颗种子吧，未来或许能长成一颗大树。


## 安装
### 项目地址
```
git clone git@github.com:clay-moon/Recode_System.git
```
### 进入文件夹
```
cd Recode_System
```
### 安装依赖
```
npm install
```
### 运行开发版本
```
npm run serve
```
### 运行生产版本
```
npm run build
```

## 预览
### 登录界面

>简单的登录界面，作了验证码功能和用户名传递功能

![image](https://user-images.githubusercontent.com/90896142/158959880-ae827ebe-3061-46c7-bbdd-500f556a51fa.png)
### 主界面
![image](https://user-images.githubusercontent.com/90896142/158960371-aca60bca-04e6-41dc-8d50-f393bd71d31e.png)
### 添加条目

>采用vuex传递参数

![image](https://user-images.githubusercontent.com/90896142/158964499-45df5ecf-c9aa-4edf-ae05-5d675462f606.png)
### 保存条目到本地

>主要用到localStorage进行本地存储,对于上传的图片采取转为DataURL再保存到localStorage的方法,由于localStorage的大小有限制,因此不能够无限制的添加,后续会对这面的进行优化以存储更多的内容。

![image](https://user-images.githubusercontent.com/90896142/158970508-ae22da7d-d092-4248-b4ef-85903253a42e.png)

## 问题清单:

  由于时间关系,项目完善程度有限,这个问题清单会比较长，主要有
* 关于账户密码的大部分功能没做，包括忘记密码，注册，修改密码，注销等功能
* 搜索功能没做，本来打算是将所有条目的名字提取出来做搜索用，由于时间原因先搁置了
* 没有做更多的页面，虽然他们本质上是相同的。现在只做了两个页面，默认页面和一个分页，原则上来说所有保存的条目都会保存到到默认页面，而分页则会依循用户的选择保存不同的条目，但是因为时间关系，没有做更多的页面适配。
* 条目没有删除和修改的功能，诚然，这是一个非常重要的功能，没有这个功能导致整个应用使用性和用户体验都极差，要想删除某个条目只能删除整个localStoage，这是不能够接收的。但是春招迫在眉睫，所以没办法只能先放一段时间，以后会第一时间处理这个问题。
* 还有非常非常多亟需改进的地方，比如说条目的可选内容，现在条目的内容太匮乏，需要增加更多的内容丰富条目。还有照片墙功能，日记功能等，以后会寻求更有效的本地保存功能用来保存更大的数据。
* 对了，还有样式，以后也要改一下，现在的简陋了。
* 每一类事物都将只对应完成状态，将其他的状态都去除掉，这样可以让用户无需花费繁多的时间来对这些内容进行增添修改。

Thank you for watching!
=
