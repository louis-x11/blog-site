import{_ as a,c as i,ab as e,o as t}from"./chunks/framework.DnBlaP3q.js";const k=JSON.parse('{"title":"WXSS 微信样式表","description":"","frontmatter":{},"headers":[],"relativePath":"mp-weixin/1微信小程序/13WXSS微信样式表.md","filePath":"mp-weixin/1微信小程序/13WXSS微信样式表.md"}'),l={name:"mp-weixin/1微信小程序/13WXSS微信样式表.md"};function n(o,s,d,p,h,c){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="wxss-微信样式表" tabindex="-1">WXSS 微信样式表 <a class="header-anchor" href="#wxss-微信样式表" aria-label="Permalink to &quot;WXSS 微信样式表&quot;">​</a></h1><p><code>WXSS</code> 与 <code>CSS</code> 相比，<code>WXSS</code> 扩展的特性有：</p><ul><li>尺寸单位</li><li>样式导入</li></ul><h2 id="样式导入-不难" tabindex="-1">样式导入 - 不难 <a class="header-anchor" href="#样式导入-不难" aria-label="Permalink to &quot;样式导入 - 不难&quot;">​</a></h2><p>在某个样式表中导入其他样式表，写法和 <code>less</code> 样式导入写法完全一样。</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;xxx.wxss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="尺寸单位-不难" tabindex="-1">尺寸单位 - 不难 <a class="header-anchor" href="#尺寸单位-不难" aria-label="Permalink to &quot;尺寸单位 - 不难&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目中用到的三种相对单位：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            相对于父容器</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vw           相对于视口宽度    分为100份     </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rpx          相对于视口宽度    分为750份</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>新增：开发微信小程序时设计师可以用 <code>iPhone6/7/8/X</code> 作为视觉稿的标准，宽度 <code>750px</code>。</li><li>新增：<code>@import </code> 样式导入。</li><li>修改：删除了通配符选择器 <code>*</code> ，开发者不能使用 <code>*{ }</code>。</li><li>修改：样式表中<code>不能</code>引入 本地背景图片，本地字体文件等，需要用 网络图片，网络的字体文件。</li></ol>`,10)]))}const u=a(l,[["render",n]]);export{k as __pageData,u as default};
