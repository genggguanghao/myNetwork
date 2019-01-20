
## 你所被喷的那些js

1.变量相关
  （1）变量的定义  
  
     NO：滥用变量
    let kpi = 4;  // 定义好了之后再也没用过
    function example() {
	var a = 1;
	var b = 2;
	var c = a+b;
	var d = c+1;
	var e = d+a;
	return e;
    }
    YES: 数据只使用一次或不使用就无需装到变量中
    let kpi = 4;  // 没用的就删除掉，不然过三个月自己都不敢删，怕是不是     那用到了
     function example() {
	var a = 1;
	var b = 2;
	return 2*a+b+1;
    }
  
(2)变量的命名

     NO：自我感觉良好的缩写
    let fName = 'jackie'; // 看起来命名挺规范，缩写，驼峰法都用上，ESlint各种检测规范的工具都通过，But，fName是啥？这时候，你是不是想说What are you 弄啥呢？
    let lName = 'willen'; // 这个问题和上面的一样

    YES：无需对每个变量都写注释，从名字上就看懂
    let firstName = 'jackie'; // 怎么样，是不是一目了然。少被喷了一次
    let lastName = 'willen';

（3)特定的变量

    NO：无说明的参数
    if (value.length < 8) { // 为什么要小于8，8表示啥？长度，还是位移，还是高度？Oh,my God!!
    }
 
    YES：添加变量
    const MAX_INPUT_LENGTH = 8;
     if (value.length < MAX_INPUT_LENGTH) { // 一目了然，不能超过最   大输入长度
    }

（4）变量的命名

     NO：命名过于啰嗦
      let nameString;
      let theUsers;  
    YES： 做到简洁明了
       let name;
       let users;
 
（5）使用说明性的变量(即有意义的变量名)

     NO：长代码不知道啥意思
     const address = 'One Infinite Loop, Cupertino 95014';
      const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    saveCityZipCode(
    address.match(cityZipCodeRegex)[1], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码
    address.match(cityZipCodeRegex)[2], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码
    );

    YES：用变量名来解释长代码的含义
    const address = 'One Infinite Loop, Cupertino 95014';
    const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
    saveCityZipCode(city, zipCode);
   
（6）避免使用太多的全局变量


     NO：在不同的文件不停的定义全局变量
       name.js
        window.name = 'a';
        hello.js
        window.name = 'b';
        time.js
        window.name = 'c';  //三个文件的先后加载顺序不同，都会使得       window.name的值不同，同时，你对window.name的修改了都有可能不生效，因为你不知道你修改过之后别人是不是又在别的说明文件中对其的值重置了。所以随着文件的增多，会导致一团乱麻。
        
     YES：少用或使用替代方案 你可以选择只用局部变量。通过(){}的方法。
     如果你确实用很多的全局变量需要共享，你可以使用vuex,redux或者你自己参考flux模式写一个也行。

   (7) 变量的赋值。
   
    NO：对于求值获取的变量，没有兜底。
    const MIN_NAME_LENGTH = 8;
     let lastName = fullName[1];
    if(lastName.length > MIN_NAME_LENGTH) { // 这样你就给你的代码成功的埋了一个坑，你有考虑过如果fullName = ['jackie']这样的情况吗？这样程序一跑起来就爆炸。要不你试试。
    }
    YES：对于求值变量，做好兜底。
    const MIN_NAME_LENGTH = 8;
    let lastName = fullName[1] || ''; // 做好兜底，fullName[1]中取不到的     时候，不至于赋值个undefined,至少还有个空字符，从根本上讲，      lastName的变量类型还是String，String原型链上的特性都能使用，不会报错。不会变成undefined。
    if(lastName.length > MIN_NAME_LENGTH) {
    }
     其实在项目中有很多求值变量，对于每个求值变量都需要做好兜底。
    let propertyValue = Object.attr || 0; // 因为Object.attr有可能为空，所以需要兜底。
    但是，赋值变量就不需要兜底了。
    let a = 2; // 因为有底了，所以不要兜着。
    let myName = 'Tiny'; // 因为有底了，所以不要兜着。

2.函数相关

（1）函数命名

    NO：从命名无法知道返回值类型
    function showFriendsList() {....} // 现在问，你知道这个返回的是一个数  组，还是一个对象，还是true or false。你能答的上来否？你能答得上来我请你吃松鹤楼的满汉全席还请你不要当真。
    
    Yes: 对于返回true or false的函数，最好以should/is/can/has开头
    function shouldShowFriendsList() {...}
    function isEmpty() {...}
    function canCreateDocuments() {...}
    function hasLicense() {...}
       
(2) 功能函数最好为纯函数

     NO: 不要让功能函数的输出变化无常
        function plusAbc(a, b, c) {  // 这个函数的输出将变化无常，因为api返回的值一旦改变，同样输入函数的a，b,c的值，但函数返回的结果却不一定相同。
		var c = fetch('../api');
		return a+b+c;
        }

        YES：功能函数使用纯函数，输入一致，输出结果永远唯一
         function plusAbc(a, b, c) {  // 同样输入函数的a，b,c的值，但函数返    回的结果永远相同。
		return a+b+c;
         }


4）动作函数要以动词开头

    NO: 无法辨别函数意图
    function emlU(user) {
    }
   
    YES：动词开头，函数意图就很明显
    function sendEmailToUser(user) {

    }

（5）一个函数完成一个独立的功能，不要一个函数混杂多个功能
     
这是软件工程中最重要的一条规则，当函数需要做更多的事情时，它们将会更难进行编写、测试、理解和组合。当你能将一个函数抽离出只完成一个动作，他们将能够很容易的进行重构并且你的代码将会更容易阅读。如果你严格遵守本条规则，你将会领先于许多开发者。

    NO：函数功能混乱，一个函数包含多个功能。
     function sendEmailToClients(clients) {
     clients.forEach(client => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
    })
    }

    YES： 功能拆解,
     function sendEmailToActiveClients(clients) {  //各个击破，易于维护和复用
    clients.filter(isActiveClient).forEach(email)
     }
    function isActiveClient(client) {
    const clientRecord = database.lookup(client)
    return clientRecord.isActive()
    }


（6）优先使用函数式编程

    NO: 使用for循环编程
     for(i = 1; i <= 10; i++) { // 一看到for循环让人顿生不想看的情愫
    a[i] = a[i] +1;
    }

    YES：使用函数式编程
    let b = a.map(item => ++item) // 怎么样，是不是很好理解，就是把a的值每项加一赋值给b就可以了。现在在javascript中几乎所有的for循环都可以被map,filter,find,some,any,forEach等函数式编程取代。


(7) 函数中过多的采用if else ..

     No： if else过多
    if (a === 1) {
	...
    } else if (a ===2) {
	...
    } else if (a === 3) {
	...
    } else {
     ...
    }

    YES: 可以使用switch替代或用数组替代
    switch(a) {
      case 1:
   	    ....
    case 2:
   		....
    case 3:
    		....
    default:
    	....
    }
    Or
    let handler = {
    1: () => {....},
    2: () => {....}.
    3: () => {....},
    default: () => {....}
     }
     handler[a]() || handler['default']()


三、尽量使用ES6，有可以能的话ES7中新语法（只罗列最常用的新语法，说实话，有些新语法不怎么常用）


（1）尽量使用箭头函数

（2）连接字符串
    
    NO：采用传统+号
    var message = 'Hello ' + name + ', it\'s ' + time + ' now'

    YES：采用模板字符
    var message = `Hello ${name}, it's ${time} now`
    
    
(3) 使用解构赋值


（4） 尽量使用类class












