import{_ as i,c as a,ab as n,o as h}from"./chunks/framework.DnBlaP3q.js";const l="/blog-site/assets/Snipaste_2023-05-20_22-50-39.C_JF8sdj.png",o=JSON.parse('{"title":"前端路由的概念与原理","description":"","frontmatter":{},"headers":[],"relativePath":"vue/3vueRouter/1路由的概念与原理.md","filePath":"vue/3vueRouter/1路由的概念与原理.md"}'),t={name:"vue/3vueRouter/1路由的概念与原理.md"};function p(k,s,e,E,r,d){return h(),a("div",null,s[0]||(s[0]=[n('<h1 id="前端路由的概念与原理" tabindex="-1">前端路由的概念与原理 <a class="header-anchor" href="#前端路由的概念与原理" aria-label="Permalink to &quot;前端路由的概念与原理&quot;">​</a></h1><h2 id="什么是路由" tabindex="-1">什么是路由？ <a class="header-anchor" href="#什么是路由" aria-label="Permalink to &quot;什么是路由？&quot;">​</a></h2><p>路由（英文：router）就是对应关系。</p><h2 id="spa" tabindex="-1">SPA <a class="header-anchor" href="#spa" aria-label="Permalink to &quot;SPA&quot;">​</a></h2><p>SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。此时，不同组件之间的切换需要通过前端路由来实现。</p><p>结论：在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成！</p><h2 id="前端路由" tabindex="-1">前端路由 <a class="header-anchor" href="#前端路由" aria-label="Permalink to &quot;前端路由&quot;">​</a></h2><p>通俗易懂的概念：Hash 地址与组件之间的对应关系。</p><h2 id="前端路由的工作方式" tabindex="-1">前端路由的工作方式 <a class="header-anchor" href="#前端路由的工作方式" aria-label="Permalink to &quot;前端路由的工作方式&quot;">​</a></h2><ul><li>用户点击了页面上的路由链接</li><li>导致了 URL 地址栏中的 Hash 值发生了变化</li><li>前端路由监听了到 Hash 地址的变化</li><li>前端路由把当前 Hash 地址对应的组件渲染都浏览器中 <img src="'+l+`" alt="图片"> 结论：前端路由，指的是 Hash 地址与组件之间的对应关系！</li></ul><h2 id="实现简易的前端路由" tabindex="-1">实现简易的前端路由 <a class="header-anchor" href="#实现简易的前端路由" aria-label="Permalink to &quot;实现简易的前端路由&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- &lt;a&gt; 链接添加对应的 hash 值： --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Home&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#/about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;About&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--通过 &lt;component&gt; 标签，结合 组件名 动态渲染组件。--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;comName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            comName:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Home&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    created</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 在 created 生命周期函数中，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //监听浏览器地址栏中 hash 地址的变化，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //动态切换要展示的组件的名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onhanshchange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location.hash){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#/home&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.comName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Home&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                break</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#/about&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.comName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;About&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                break</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,12)]))}const y=i(t,[["render",p]]);export{o as __pageData,y as default};
