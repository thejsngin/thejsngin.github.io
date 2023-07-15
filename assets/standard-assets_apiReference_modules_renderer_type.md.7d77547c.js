import{_ as e,c as t,o as r,V as a}from"./chunks/framework.9d7713fb.js";const u=JSON.parse('{"title":"Module: renderer/type","description":"","frontmatter":{},"headers":[],"relativePath":"standard-assets/apiReference/modules/renderer_type.md","filePath":"standard-assets/apiReference/modules/renderer_type.md"}'),d={name:"standard-assets/apiReference/modules/renderer_type.md"},n=a('<p><a href="./../README.html">@thejsngin/standard-assets</a> / <a href="./../modules.html">Modules</a> / renderer/type</p><h1 id="module-renderer-type" tabindex="-1">Module: renderer/type <a class="header-anchor" href="#module-renderer-type" aria-label="Permalink to &quot;Module: renderer/type&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./renderer_type.html#rendererresourcetype">rendererResourceType</a></li></ul><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><ul><li><a href="./renderer_type.html#afterrenderevent">afterRenderEvent</a></li><li><a href="./renderer_type.html#beforerenderevent">beforeRenderEvent</a></li><li><a href="./renderer_type.html#renderevent">renderEvent</a></li><li><a href="./renderer_type.html#rendererresizeevent">rendererResizeEvent</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="rendererresourcetype" tabindex="-1">rendererResourceType <a class="header-anchor" href="#rendererresourcetype" aria-label="Permalink to &quot;rendererResourceType&quot;">​</a></h3><p>Ƭ <strong>rendererResourceType</strong>: <code>THREE.WebGLRenderer</code></p><p>renderer resource. Stored added at <code>gameInstance.store.renderer</code>.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/renderer/type.ts#lines-14" target="_blank" rel="noreferrer">renderer/type.ts:14</a></p><h2 id="events-1" tabindex="-1">Events <a class="header-anchor" href="#events-1" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="afterrenderevent" tabindex="-1">afterRenderEvent <a class="header-anchor" href="#afterrenderevent" aria-label="Permalink to &quot;afterRenderEvent&quot;">​</a></h3><p>Ƭ <strong>afterRenderEvent</strong>: <code>Object</code></p><p>Fired after each render.</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;afterRender&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/renderer/type.ts#lines-33" target="_blank" rel="noreferrer">renderer/type.ts:33</a></p><hr><h3 id="beforerenderevent" tabindex="-1">beforeRenderEvent <a class="header-anchor" href="#beforerenderevent" aria-label="Permalink to &quot;beforeRenderEvent&quot;">​</a></h3><p>Ƭ <strong>beforeRenderEvent</strong>: <code>Object</code></p><p>Fired before each render.</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;beforeRender&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/renderer/type.ts#lines-21" target="_blank" rel="noreferrer">renderer/type.ts:21</a></p><hr><h3 id="renderevent" tabindex="-1">renderEvent <a class="header-anchor" href="#renderevent" aria-label="Permalink to &quot;renderEvent&quot;">​</a></h3><p>Ƭ <strong>renderEvent</strong>: <code>Object</code></p><p>Fired in parallel to the render.</p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;render&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/renderer/type.ts#lines-45" target="_blank" rel="noreferrer">renderer/type.ts:45</a></p><hr><h3 id="rendererresizeevent" tabindex="-1">rendererResizeEvent <a class="header-anchor" href="#rendererresizeevent" aria-label="Permalink to &quot;rendererResizeEvent&quot;">​</a></h3><p>Ƭ <strong>rendererResizeEvent</strong>: <code>Object</code></p><p>Fired before render, only if the dimenstions change.</p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[{ <code>x</code>: <code>number</code> ; <code>y</code>: <code>number</code> }]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;rendererResize&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/renderer/type.ts#lines-57" target="_blank" rel="noreferrer">renderer/type.ts:57</a></p>',45),l=[n];function o(i,s,c,h,f,y){return r(),t("div",null,l)}const b=e(d,[["render",o]]);export{u as __pageData,b as default};
