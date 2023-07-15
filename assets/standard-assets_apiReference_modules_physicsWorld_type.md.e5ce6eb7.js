import{_ as e,c as t,o as d,V as a}from"./chunks/framework.9d7713fb.js";const u=JSON.parse('{"title":"Module: physicsWorld/type","description":"","frontmatter":{},"headers":[],"relativePath":"standard-assets/apiReference/modules/physicsWorld_type.md","filePath":"standard-assets/apiReference/modules/physicsWorld_type.md"}'),o={name:"standard-assets/apiReference/modules/physicsWorld_type.md"},l=a('<p><a href="./../README.html">@thejsngin/standard-assets</a> / <a href="./../modules.html">Modules</a> / physicsWorld/type</p><h1 id="module-physicsworld-type" tabindex="-1">Module: physicsWorld/type <a class="header-anchor" href="#module-physicsworld-type" aria-label="Permalink to &quot;Module: physicsWorld/type&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./physicsWorld_type.html#physicsworldresourcetype">physicsWorldResourceType</a></li></ul><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><ul><li><a href="./physicsWorld_type.html#afterphysicsupdateevent">afterPhysicsUpdateEvent</a></li><li><a href="./physicsWorld_type.html#beforephysicsupdateevent">beforePhysicsUpdateEvent</a></li><li><a href="./physicsWorld_type.html#collisionevent">collisionEvent</a></li><li><a href="./physicsWorld_type.html#contactforceevent">contactForceEvent</a></li><li><a href="./physicsWorld_type.html#physicsupdateevent">physicsUpdateEvent</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="physicsworldresourcetype" tabindex="-1">physicsWorldResourceType <a class="header-anchor" href="#physicsworldresourcetype" aria-label="Permalink to &quot;physicsWorldResourceType&quot;">​</a></h3><p>Ƭ <strong>physicsWorldResourceType</strong>: <code>RAPIER.World</code></p><p>physicsWorld resource. Stored added at <code>gameInstance.store.world</code>.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-16" target="_blank" rel="noreferrer">physicsWorld/type.ts:16</a></p><h2 id="events-1" tabindex="-1">Events <a class="header-anchor" href="#events-1" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="afterphysicsupdateevent" tabindex="-1">afterPhysicsUpdateEvent <a class="header-anchor" href="#afterphysicsupdateevent" aria-label="Permalink to &quot;afterPhysicsUpdateEvent&quot;">​</a></h3><p>Ƭ <strong>afterPhysicsUpdateEvent</strong>: <code>Object</code></p><p>Fired after each physicsUpdate.</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;afterPhysicsUpdate&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-49" target="_blank" rel="noreferrer">physicsWorld/type.ts:49</a></p><hr><h3 id="beforephysicsupdateevent" tabindex="-1">beforePhysicsUpdateEvent <a class="header-anchor" href="#beforephysicsupdateevent" aria-label="Permalink to &quot;beforePhysicsUpdateEvent&quot;">​</a></h3><p>Ƭ <strong>beforePhysicsUpdateEvent</strong>: <code>Object</code></p><p>Fired before each physicsUpdate.</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;beforePhysicsUpdate&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-25" target="_blank" rel="noreferrer">physicsWorld/type.ts:25</a></p><hr><h3 id="collisionevent" tabindex="-1">collisionEvent <a class="header-anchor" href="#collisionevent" aria-label="Permalink to &quot;collisionEvent&quot;">​</a></h3><p>Ƭ <strong>collisionEvent</strong>: <code>Object</code></p><p>Fired for every colliding collider pair that has collision detection enabled for one of them.</p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">{ <code>handle1</code>: <code>number</code> ; <code>handle2</code>: <code>number</code> ; <code>started</code>: <code>boolean</code> }</td></tr><tr><td style="text-align:left;"><code>data.handle1</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>data.handle2</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>data.started</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;collisionEvent&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-61" target="_blank" rel="noreferrer">physicsWorld/type.ts:61</a></p><hr><h3 id="contactforceevent" tabindex="-1">contactForceEvent <a class="header-anchor" href="#contactforceevent" aria-label="Permalink to &quot;contactForceEvent&quot;">​</a></h3><p>Ƭ <strong>contactForceEvent</strong>: <code>Object</code></p><p>Fired for every colliding collider pair that has contact Force detection enabled for one of them.</p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">{ <code>collider1</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;collider1&quot;</code>]&gt; ; <code>collider2</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;collider2&quot;</code>]&gt; ; <code>maxForceDirection</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;maxForceDirection&quot;</code>]&gt; ; <code>maxForceMagnitude</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;maxForceMagnitude&quot;</code>]&gt; ; <code>totalForce</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;totalForce&quot;</code>]&gt; ; <code>totalForceMagnitude</code>: <code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;totalForceMagnitude&quot;</code>]&gt; }</td></tr><tr><td style="text-align:left;"><code>data.collider1</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;collider1&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>data.collider2</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;collider2&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>data.maxForceDirection</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;maxForceDirection&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>data.maxForceMagnitude</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;maxForceMagnitude&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>data.totalForce</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;totalForce&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>data.totalForceMagnitude</code></td><td style="text-align:left;"><code>ReturnType</code>&lt;<code>RAPIER.TempContactForceEvent</code>[<code>&quot;totalForceMagnitude&quot;</code>]&gt;</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;contactForceEvent&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-74" target="_blank" rel="noreferrer">physicsWorld/type.ts:74</a></p><hr><h3 id="physicsupdateevent" tabindex="-1">physicsUpdateEvent <a class="header-anchor" href="#physicsupdateevent" aria-label="Permalink to &quot;physicsUpdateEvent&quot;">​</a></h3><p>Ƭ <strong>physicsUpdateEvent</strong>: <code>Object</code></p><p>Fired in parallel to the physicsUpdate.</p><h4 id="type-declaration-4" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-4" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;"><code>eventLevel</code></td><td style="text-align:left;">[<code>&quot;game&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>&quot;physicsUpdate&quot;</code></td></tr><tr><td style="text-align:left;"><code>returnVal</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>waitForCompletion</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://bitbucket.org/k4gameengine/standard-assets/src/2aff3ea/physicsWorld/type.ts#lines-37" target="_blank" rel="noreferrer">physicsWorld/type.ts:37</a></p>',53),c=[l];function r(n,i,s,h,p,y){return d(),t("div",null,c)}const g=e(o,[["render",r]]);export{u as __pageData,g as default};
