import{_ as a,c as s,ab as i,o}from"./chunks/framework.DnBlaP3q.js";const l="/blog-site/nodejs/Snipaste_2023-05-20_15-38-06.png",t="/blog-site/nodejs/Snipaste_2023-05-20_15-43-30.png",r="/blog-site/nodejs/Snipaste_2023-05-20_15-44-37.png",n="/blog-site/nodejs/Snipaste_2023-05-20_15-46-25.png",p="/blog-site/nodejs/Snipaste_2023-05-20_15-47-27.png",d="/blog-site/nodejs/Snipaste_2023-05-20_15-48-51.png",_=JSON.parse('{"title":"什么是模块化","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"nodejs/6模块化.md","filePath":"nodejs/6模块化.md"}'),h={name:"nodejs/6模块化.md"};function u(c,e,m,k,q,x){return o(),s("div",null,e[0]||(e[0]=[i(`<h1 id="什么是模块化" tabindex="-1">什么是模块化 <a class="header-anchor" href="#什么是模块化" aria-label="Permalink to &quot;什么是模块化&quot;">​</a></h1><p>编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。 把代码进行模块化拆分的好处：</p><ul><li>提高了代码的复用性</li><li>提高了代码的可维护性</li><li>可以实现按需加载</li></ul><h2 id="模块化规范" tabindex="-1">模块化规范 <a class="header-anchor" href="#模块化规范" aria-label="Permalink to &quot;模块化规范&quot;">​</a></h2><p>模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。 例如：</p><ul><li>使用什么样的语法格式来引用模块</li><li>在模块中使用什么样的语法格式向外暴露成员 模块化规范的好处：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己。</li></ul><h2 id="node-js-中模块的分类" tabindex="-1">Node.js 中模块的分类 <a class="header-anchor" href="#node-js-中模块的分类" aria-label="Permalink to &quot;Node.js 中模块的分类&quot;">​</a></h2><p>Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：</p><ul><li>内置模块（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）</li><li>自定义模块（用户创建的每个 .js 文件，都是自定义模块）</li><li>第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）</li></ul><h2 id="加载模块" tabindex="-1">加载模块 <a class="header-anchor" href="#加载模块" aria-label="Permalink to &quot;加载模块&quot;">​</a></h2><p>使用强大的 require() 方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。</p><p>例如:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> moment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;moment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用 require() 方法加载其它模块时，会执行被加载模块中的代码。</p></div><h2 id="什么是模块作用域" tabindex="-1">什么是模块作用域 <a class="header-anchor" href="#什么是模块作用域" aria-label="Permalink to &quot;什么是模块作用域&quot;">​</a></h2><p>和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域 <img src="`+l+'" alt="图片"></p><h2 id="模块作用域的好处" tabindex="-1">模块作用域的好处 <a class="header-anchor" href="#模块作用域的好处" aria-label="Permalink to &quot;模块作用域的好处&quot;">​</a></h2><p>防止了全局变量污染的问题 <img src="'+t+'" alt="图片"></p><h2 id="向外共享模块作用域中的成员" tabindex="-1">向外共享模块作用域中的成员 <a class="header-anchor" href="#向外共享模块作用域中的成员" aria-label="Permalink to &quot;向外共享模块作用域中的成员&quot;">​</a></h2><h2 id="module-对象" tabindex="-1">module 对象 <a class="header-anchor" href="#module-对象" aria-label="Permalink to &quot;module 对象&quot;">​</a></h2><p>在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息，打印如下： <img src="'+r+'" alt="图片"></p><h2 id="module-exports-对象" tabindex="-1">module.exports 对象 <a class="header-anchor" href="#module-exports-对象" aria-label="Permalink to &quot;module.exports 对象&quot;">​</a></h2><p>在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。</p><p>外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。</p><p>使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。 <img src="'+n+'" alt="图片"></p><h2 id="exports-对象" tabindex="-1">exports 对象 <a class="header-anchor" href="#exports-对象" aria-label="Permalink to &quot;exports 对象&quot;">​</a></h2><p>由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。 <img src="'+p+'" alt="图片"></p><h2 id="exports-和-module-exports-的使用误区" tabindex="-1">exports 和 module.exports 的使用误区 <a class="header-anchor" href="#exports-和-module-exports-的使用误区" aria-label="Permalink to &quot;exports 和 module.exports 的使用误区&quot;">​</a></h2><p>时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象： <img src="'+d+'" alt="图片"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>为了防止混乱，建议大家不要在同一个模块中同时使用 exports 和 module.exports</p></div><h2 id="node-js-中的模块化规范" tabindex="-1">Node.js 中的模块化规范 <a class="header-anchor" href="#node-js-中的模块化规范" aria-label="Permalink to &quot;Node.js 中的模块化规范&quot;">​</a></h2><p>Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖。</p><p>CommonJS 规定：</p><ul><li>每个模块内部，module 变量代表当前模块。</li><li>module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。</li><li>加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块。</li></ul><h2 id="模块的加载机制" tabindex="-1">模块的加载机制 <a class="header-anchor" href="#模块的加载机制" aria-label="Permalink to &quot;模块的加载机制&quot;">​</a></h2><h3 id="_1-优先从缓存中加载" tabindex="-1">1.优先从缓存中加载 <a class="header-anchor" href="#_1-优先从缓存中加载" aria-label="Permalink to &quot;1.优先从缓存中加载&quot;">​</a></h3><p>模块在第一次加载后会被缓存。这也意味着多次调用 require() 不会导致模块的代码被执行多次。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。</p></div><h3 id="_2-内置模块的加载机制" tabindex="-1">2.内置模块的加载机制 <a class="header-anchor" href="#_2-内置模块的加载机制" aria-label="Permalink to &quot;2.内置模块的加载机制&quot;">​</a></h3><p>内置模块是由 Node.js 官方提供的模块，内置模块的加载优先级最高。</p><p>例如，<code>require(&#39;fs&#39;) </code>始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。</p><h3 id="_3-自定义模块的加载机制" tabindex="-1">3.自定义模块的加载机制 <a class="header-anchor" href="#_3-自定义模块的加载机制" aria-label="Permalink to &quot;3.自定义模块的加载机制&quot;">​</a></h3><p>使用 require() 加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，如果没有指定./ 或../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。</p><p>同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会按顺序分别尝试加载以下的文件：</p><ol><li>按照确切的文件名进行加载</li><li>补全.js 扩展名进行加载</li><li>补全.json 扩展名进行加载</li><li>补全.node 扩展名进行加载</li><li>加载失败，终端报错</li></ol><h3 id="_4-第三方模块的加载机制" tabindex="-1">4.第三方模块的加载机制 <a class="header-anchor" href="#_4-第三方模块的加载机制" aria-label="Permalink to &quot;4.第三方模块的加载机制&quot;">​</a></h3><p>如果传递给 require() 的模块标识符不是一个内置模块，也没有以‘./’ 或‘../’ 开头，则 Node.js 会从当前模块的父目录开始，尝试从/node_modules 文件夹中加载第三方模块。</p><p>如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。</p><p>例如，假设在&#39;C:\\Users\\itheima\\project\\foo.js&#39; 文件里调用了 require(&#39;tools&#39;)，则 Node.js 会按以下顺序查找：</p><ol><li>C:\\Users\\itheima\\project\\node_modules\\tools</li><li>C:\\Users\\itheima\\node_modules\\tools</li><li>C:\\Users\\node_modules\\tools</li><li>C:\\node_modules\\tools</li></ol><h3 id="_5-目录作为模块" tabindex="-1">5.目录作为模块 <a class="header-anchor" href="#_5-目录作为模块" aria-label="Permalink to &quot;5.目录作为模块&quot;">​</a></h3><p>当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：</p><ol><li>在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口</li><li>如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。</li><li>如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module &#39;xxx&#39;</li></ol>',53)]))}const g=a(h,[["render",u]]);export{_ as __pageData,g as default};
