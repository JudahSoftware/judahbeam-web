(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.ES(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.v(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.w0(b)
return new s(c,this)}:function(){if(s===null)s=A.w0(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.w0(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
w9(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uw(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.w7==null){A.Eo()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.vu("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.rX
if(o==null)o=$.rX=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Ey(a)
if(p!=null)return p
if(typeof a=="function")return B.b5
s=Object.getPrototypeOf(a)
if(s==null)return B.ab
if(s===Object.prototype)return B.ab
if(typeof q=="function"){o=$.rX
if(o==null)o=$.rX=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.V,enumerable:false,writable:true,configurable:true})
return B.V}return B.V},
vd(a,b){if(a<0||a>4294967295)throw A.b(A.ac(a,0,4294967295,"length",null))
return J.Az(new Array(a),b)},
ve(a,b){if(a<0)throw A.b(A.K("Length must be a non-negative integer: "+a,null))
return A.v(new Array(a),b.h("t<0>"))},
Az(a,b){var s=A.v(a,b.h("t<0>"))
s.$flags=1
return s},
AA(a,b){return J.wl(a,b)},
dC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fk.prototype
return J.iC.prototype}if(typeof a=="string")return J.cn.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.iB.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
if(typeof a=="symbol")return J.dW.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uw(a)},
a4(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
if(typeof a=="symbol")return J.dW.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uw(a)},
bD(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
if(typeof a=="symbol")return J.dW.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uw(a)},
Ei(a){if(typeof a=="number")return J.dV.prototype
if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.df.prototype
return a},
w5(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.df.prototype
return a},
uv(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
if(typeof a=="symbol")return J.dW.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uw(a)},
z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dC(a).D(a,b)},
eX(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.yS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a4(a).i(a,b)},
kZ(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.yS(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.bD(a).m(a,b,c)},
l_(a,b){return J.bD(a).q(a,b)},
zI(a,b){return J.w5(a).e3(a,b)},
zJ(a){return J.uv(a).iU(a)},
cN(a,b,c){return J.uv(a).e4(a,b,c)},
wk(a,b){return J.bD(a).d9(a,b)},
wl(a,b){return J.Ei(a).a_(a,b)},
wm(a,b){return J.a4(a).U(a,b)},
hP(a,b){return J.bD(a).V(a,b)},
zK(a){return J.uv(a).gao(a)},
y(a){return J.dC(a).gv(a)},
l0(a){return J.a4(a).gE(a)},
zL(a){return J.a4(a).gaN(a)},
U(a){return J.bD(a).gA(a)},
aG(a){return J.a4(a).gk(a)},
zM(a){return J.uv(a).gju(a)},
wn(a){return J.dC(a).ga3(a)},
dG(a,b,c){return J.bD(a).aY(a,b,c)},
zN(a,b,c){return J.w5(a).cF(a,b,c)},
zO(a,b){return J.a4(a).sk(a,b)},
zP(a,b,c,d,e){return J.bD(a).P(a,b,c,d,e)},
l1(a,b){return J.bD(a).aS(a,b)},
wo(a,b){return J.bD(a).cQ(a,b)},
zQ(a,b){return J.w5(a).dK(a,b)},
wp(a,b){return J.bD(a).bN(a,b)},
zR(a){return J.bD(a).dB(a)},
aW(a){return J.dC(a).j(a)},
iy:function iy(){},
iB:function iB(){},
dU:function dU(){},
ai:function ai(){},
co:function co(){},
j_:function j_(){},
df:function df(){},
aZ:function aZ(){},
aQ:function aQ(){},
dW:function dW(){},
t:function t(a){this.$ti=a},
iA:function iA(){},
nz:function nz(a){this.$ti=a},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dV:function dV(){},
fk:function fk(){},
iC:function iC(){},
cn:function cn(){}},A={vh:function vh(){},
i6(a,b,c){if(t.O.b(a))return new A.h9(a,b.h("@<0>").G(c).h("h9<1,2>"))
return new A.cR(a,b.h("@<0>").G(c).h("cR<1,2>"))},
wR(a){return new A.d1("Field '"+a+"' has been assigned during initialization.")},
wS(a){return new A.d1("Field '"+a+"' has not been initialized.")},
AE(a){return new A.d1("Field '"+a+"' has already been initialized.")},
uz(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
F(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
c4(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
xj(a,b,c){return A.c4(A.F(A.F(c,a),b))},
bb(a,b,c){return a},
w8(a){var s,r
for(s=$.dz.length,r=0;r<s;++r)if(a===$.dz[r])return!0
return!1},
bN(a,b,c,d){A.aJ(b,"start")
if(c!=null){A.aJ(c,"end")
if(b>c)A.w(A.ac(b,0,c,"start",null))}return new A.dc(a,b,c,d.h("dc<0>"))},
ft(a,b,c,d){if(t.O.b(a))return new A.cY(a,b,c.h("@<0>").G(d).h("cY<1,2>"))
return new A.bZ(a,b,c.h("@<0>").G(d).h("bZ<1,2>"))},
xk(a,b,c){var s="takeCount"
A.hS(b,s)
A.aJ(b,s)
if(t.O.b(a))return new A.fa(a,b,c.h("fa<0>"))
return new A.de(a,b,c.h("de<0>"))},
xe(a,b,c){var s="count"
if(t.O.b(a)){A.hS(b,s)
A.aJ(b,s)
return new A.dP(a,b,c.h("dP<0>"))}A.hS(b,s)
A.aJ(b,s)
return new A.c2(a,b,c.h("c2<0>"))},
bY(){return new A.b6("No element")},
wM(){return new A.b6("Too few elements")},
jb(a,b,c,d){if(c-b<=32)A.Bd(a,b,c,d)
else A.Bc(a,b,c,d)},
Bd(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.a4(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.i(a,p-1),q)>0))break
o=p-1
r.m(a,p,r.i(a,o))
p=o}r.m(a,p,q)}},
Bc(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.T(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.T(a4+a5,2),e=f-i,d=f+i,c=J.a4(a3),b=c.i(a3,h),a=c.i(a3,e),a0=c.i(a3,f),a1=c.i(a3,d),a2=c.i(a3,g)
if(a6.$2(b,a)>0){s=a
a=b
b=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}if(a6.$2(b,a0)>0){s=a0
a0=b
b=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(b,a1)>0){s=a1
a1=b
b=s}if(a6.$2(a0,a1)>0){s=a1
a1=a0
a0=s}if(a6.$2(a,a2)>0){s=a2
a2=a
a=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}c.m(a3,h,b)
c.m(a3,f,a0)
c.m(a3,g,a2)
c.m(a3,e,c.i(a3,a4))
c.m(a3,d,c.i(a3,a5))
r=a4+1
q=a5-1
p=J.z(a6.$2(a,a1),0)
if(p)for(o=r;o<=q;++o){n=c.i(a3,o)
m=a6.$2(n,a)
if(m===0)continue
if(m<0){if(o!==r){c.m(a3,o,c.i(a3,r))
c.m(a3,r,n)}++r}else for(;;){m=a6.$2(c.i(a3,q),a)
if(m>0){--q
continue}else{l=q-1
if(m<0){c.m(a3,o,c.i(a3,r))
k=r+1
c.m(a3,r,c.i(a3,q))
c.m(a3,q,n)
q=l
r=k
break}else{c.m(a3,o,c.i(a3,q))
c.m(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=c.i(a3,o)
if(a6.$2(n,a)<0){if(o!==r){c.m(a3,o,c.i(a3,r))
c.m(a3,r,n)}++r}else if(a6.$2(n,a1)>0)for(;;)if(a6.$2(c.i(a3,q),a1)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.i(a3,q),a)<0){c.m(a3,o,c.i(a3,r))
k=r+1
c.m(a3,r,c.i(a3,q))
c.m(a3,q,n)
r=k}else{c.m(a3,o,c.i(a3,q))
c.m(a3,q,n)}q=l
break}}j=r-1
c.m(a3,a4,c.i(a3,j))
c.m(a3,j,a)
j=q+1
c.m(a3,a5,c.i(a3,j))
c.m(a3,j,a1)
A.jb(a3,a4,r-2,a6)
A.jb(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.z(a6.$2(c.i(a3,r),a),0))++r
while(J.z(a6.$2(c.i(a3,q),a1),0))--q
for(o=r;o<=q;++o){n=c.i(a3,o)
if(a6.$2(n,a)===0){if(o!==r){c.m(a3,o,c.i(a3,r))
c.m(a3,r,n)}++r}else if(a6.$2(n,a1)===0)for(;;)if(a6.$2(c.i(a3,q),a1)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.i(a3,q),a)<0){c.m(a3,o,c.i(a3,r))
k=r+1
c.m(a3,r,c.i(a3,q))
c.m(a3,q,n)
r=k}else{c.m(a3,o,c.i(a3,q))
c.m(a3,q,n)}q=l
break}}A.jb(a3,r,q,a6)}else A.jb(a3,r,q,a6)},
cT:function cT(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cA:function cA(){},
i7:function i7(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b){this.a=a
this.$ti=b},
h9:function h9(a,b){this.a=a
this.$ti=b},
h3:function h3(){},
qV:function qV(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
lE:function lE(a,b){this.a=a
this.b=b},
lD:function lD(a){this.a=a},
d1:function d1(a){this.a=a},
br:function br(a){this.a=a},
uQ:function uQ(){},
oo:function oo(){},
x:function x(){},
X:function X(){},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
fa:function fa(a,b,c){this.a=a
this.b=b
this.$ti=c},
jr:function jr(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
ja:function ja(a,b){this.a=a
this.b=b},
cZ:function cZ(a){this.$ti=a},
ii:function ii(){},
fY:function fY(a,b){this.a=a
this.$ti=b},
jE:function jE(a,b){this.a=a
this.$ti=b},
fB:function fB(a,b){this.a=a
this.$ti=b},
iU:function iU(a){this.a=a
this.b=null},
ff:function ff(){},
ju:function ju(){},
ef:function ef(){},
d9:function d9(a,b){this.a=a
this.$ti=b},
jp:function jp(a){this.a=a},
hG:function hG(){},
A6(){throw A.b(A.S("Cannot modify constant Set"))},
z5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
yS(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aW(a)
return s},
e4(a){var s,r=$.x0
if(r==null)r=$.x0=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
vm(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
j1(a){var s,r,q,p
if(a instanceof A.k)return A.b9(A.bo(a),null)
s=J.dC(a)
if(s===B.b4||s===B.b6||t.cx.b(a)){r=B.Y(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.b9(A.bo(a),null)},
x7(a){var s,r,q
if(a==null||typeof a=="number"||A.kN(a))return J.aW(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cU)return a.j(0)
if(a instanceof A.hn)return a.iJ(!0)
s=$.zC()
for(r=0;r<1;++r){q=s[r].oU(a)
if(q!=null)return q}return"Instance of '"+A.j1(a)+"'"},
AT(){if(!!self.location)return self.location.href
return null},
x_(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
AX(a){var s,r,q,p=A.v([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r){q=a[r]
if(!A.hH(q))throw A.b(A.dA(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.a1(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.dA(q))}return A.x_(p)},
x8(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.hH(q))throw A.b(A.dA(q))
if(q<0)throw A.b(A.dA(q))
if(q>65535)return A.AX(a)}return A.x_(a)},
AY(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aR(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a1(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ac(a,0,1114111,null,null))},
d6(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
x6(a){var s=A.d6(a).getFullYear()+0
return s},
x4(a){var s=A.d6(a).getMonth()+1
return s},
x1(a){var s=A.d6(a).getDate()+0
return s},
x2(a){var s=A.d6(a).getHours()+0
return s},
x3(a){var s=A.d6(a).getMinutes()+0
return s},
x5(a){var s=A.d6(a).getSeconds()+0
return s},
AV(a){var s=A.d6(a).getMilliseconds()+0
return s},
AW(a){var s=A.d6(a).getDay()+0
return B.b.aR(s+6,7)+1},
AU(a){var s=a.$thrownJsError
if(s==null)return null
return A.P(s)},
j2(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.ao(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
kS(a,b){var s,r="index"
if(!A.hH(b))return new A.a6(!0,b,r,null)
s=J.aG(a)
if(b<0||b>=s)return A.iv(b,s,a,null,r)
return A.o7(b,r)},
Eb(a,b,c){if(a<0||a>c)return A.ac(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ac(b,a,c,"end",null)
return new A.a6(!0,b,"end",null)},
dA(a){return new A.a6(!0,a,null,null)},
b(a){return A.ao(a,new Error())},
ao(a,b){var s
if(a==null)a=new A.c5()
b.dartException=a
s=A.ET
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ET(){return J.aW(this.dartException)},
w(a,b){throw A.ao(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.w(A.CS(a,b,c),s)},
CS(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.fR("'"+s+"': Cannot "+o+" "+l+k+n)},
a5(a){throw A.b(A.ap(a))},
c6(a){var s,r,q,p,o,n
a=A.yY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.v([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.pw(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
px(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vi(a,b){var s=b==null,r=s?null:b.method
return new A.iD(a,r,s?null:b.receiver)},
I(a){if(a==null)return new A.iW(a)
if(a instanceof A.fb)return A.cL(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cL(a,a.dartException)
return A.DH(a)},
cL(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
DH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a1(r,16)&8191)===10)switch(q){case 438:return A.cL(a,A.vi(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.cL(a,new A.fC())}}if(a instanceof TypeError){p=$.zc()
o=$.zd()
n=$.ze()
m=$.zf()
l=$.zi()
k=$.zj()
j=$.zh()
$.zg()
i=$.zl()
h=$.zk()
g=p.b7(s)
if(g!=null)return A.cL(a,A.vi(s,g))
else{g=o.b7(s)
if(g!=null){g.method="call"
return A.cL(a,A.vi(s,g))}else if(n.b7(s)!=null||m.b7(s)!=null||l.b7(s)!=null||k.b7(s)!=null||j.b7(s)!=null||m.b7(s)!=null||i.b7(s)!=null||h.b7(s)!=null)return A.cL(a,new A.fC())}return A.cL(a,new A.jt(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fI()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cL(a,new A.a6(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fI()
return a},
P(a){var s
if(a instanceof A.fb)return a.b
if(a==null)return new A.ht(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ht(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kT(a){if(a==null)return J.y(a)
if(typeof a=="object")return A.e4(a)
return J.y(a)},
Eg(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
D2(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.wE("Unsupported number of arguments for wrapped closure"))},
cK(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.E5(a,b)
a.$identity=s
return s},
E5(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.D2)},
A0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.oz().constructor.prototype):Object.create(new A.eZ(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wA(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.zX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wA(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
zX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zT)}throw A.b("Error in functionType of tearoff")},
zY(a,b,c,d){var s=A.wx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wA(a,b,c,d){if(c)return A.A_(a,b,d)
return A.zY(b.length,d,a,b)},
zZ(a,b,c,d){var s=A.wx,r=A.zU
switch(b?-1:a){case 0:throw A.b(new A.j7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
A_(a,b,c){var s,r
if($.wv==null)$.wv=A.wu("interceptor")
if($.ww==null)$.ww=A.wu("receiver")
s=b.length
r=A.zZ(s,c,a,b)
return r},
w0(a){return A.A0(a)},
zT(a,b){return A.hA(v.typeUniverse,A.bo(a.a),b)},
wx(a){return a.a},
zU(a){return a.b},
wu(a){var s,r,q,p=new A.eZ("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.K("Field name "+a+" not found.",null))},
yN(a){return v.getIsolateTag(a)},
EX(a,b){var s=$.m
if(s===B.e)return a
return s.fH(a,b)},
z_(){return v.G},
FX(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Ey(a){var s,r,q,p,o,n=$.yO.$1(a),m=$.us[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.yG.$2(a,n)
if(q!=null){m=$.us[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.uI(s)
$.us[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uD[n]=s
return s}if(p==="-"){o=A.uI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yW(a,s)
if(p==="*")throw A.b(A.vu(n))
if(v.leafTags[n]===true){o=A.uI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yW(a,s)},
yW(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.w9(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
uI(a){return J.w9(a,!1,null,!!a.$ib_)},
EB(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.uI(s)
else return J.w9(s,c,null,null)},
Eo(){if(!0===$.w7)return
$.w7=!0
A.Ep()},
Ep(){var s,r,q,p,o,n,m,l
$.us=Object.create(null)
$.uD=Object.create(null)
A.En()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yX.$1(o)
if(n!=null){m=A.EB(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
En(){var s,r,q,p,o,n,m=B.aB()
m=A.eS(B.aC,A.eS(B.aD,A.eS(B.Z,A.eS(B.Z,A.eS(B.aE,A.eS(B.aF,A.eS(B.aG(B.Y),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.yO=new A.uA(p)
$.yG=new A.uB(o)
$.yX=new A.uC(n)},
eS(a,b){return a(b)||b},
Cd(a,b){var s
for(s=0;s<a.length;++s)if(!J.z(a[s],b[s]))return!1
return!0},
Ea(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vg(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ak("Illegal RegExp pattern ("+String(o)+")",a,null))},
EP(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.fl){s=B.a.a0(a,c)
return b.b.test(s)}else return!J.zI(b,B.a.a0(a,c)).gE(0)},
Ed(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yY(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hM(a,b,c){var s=A.EQ(a,b,c)
return s},
EQ(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.yY(b),"g"),A.Ed(c))},
yC(a){return a},
z0(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.e3(0,a),s=new A.jJ(s.a,s.b,s.c),r=t.lu,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.yC(B.a.t(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.yC(B.a.a0(a,q)))
return s.charCodeAt(0)==0?s:s},
ER(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.z1(a,s,s+b.length,c)},
z1(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
ho:function ho(a){this.a=a},
a3:function a3(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
kf:function kf(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a){this.a=a},
f2:function f2(){},
lZ:function lZ(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
hf:function hf(a,b){this.a=a
this.$ti=b},
ex:function ex(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f3:function f3(){},
f4:function f4(a,b,c){this.a=a
this.b=b
this.$ti=c},
nr:function nr(){},
fj:function fj(a,b){this.a=a
this.$ti=b},
fD:function fD(){},
pw:function pw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(){},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
iW:function iW(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a
this.b=null},
cU:function cU(){},
lK:function lK(){},
lL:function lL(){},
pk:function pk(){},
oz:function oz(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
b0:function b0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nA:function nA(a){this.a=a},
nD:function nD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b1:function b1(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
be:function be(a,b){this.a=a
this.$ti=b},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ax:function ax(a,b){this.a=a
this.$ti=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fm:function fm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uA:function uA(a){this.a=a},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
hn:function hn(){},
kc:function kc(){},
kb:function kb(){},
kd:function kd(){},
ke:function ke(){},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
eB:function eB(a){this.b=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fM:function fM(a,b){this.a=a
this.c=b},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ES(a){throw A.ao(A.wR(a),new Error())},
M(){throw A.ao(A.wS(""),new Error())},
z2(){throw A.ao(A.AE(""),new Error())},
wc(){throw A.ao(A.wR(""),new Error())},
xA(){var s=new A.jS("")
return s.b=s},
qW(a){var s=new A.jS(a)
return s.b=s},
jS:function jS(a){this.a=a
this.b=null},
kL(a,b,c){},
vU(a){var s,r,q
if(t.iy.b(a))return a
s=J.a4(a)
r=A.b2(s.gk(a),null,!1,t.z)
for(q=0;q<s.gk(a);++q)r[q]=s.i(a,q)
return r},
AM(a){return new DataView(new ArrayBuffer(a))},
AN(a,b,c){var s
A.kL(a,b,c)
s=new DataView(a,b)
return s},
c0(a,b,c){A.kL(a,b,c)
c=B.b.T(a.byteLength-b,4)
return new Int32Array(a,b,c)},
AO(a){return new Int8Array(a)},
AP(a,b,c){A.kL(a,b,c)
return new Uint32Array(a,b,c)},
AQ(a){return new Uint8Array(a)},
b4(a,b,c){A.kL(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cg(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.kS(b,a))},
ye(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Eb(a,b,c))
return b},
e0:function e0(){},
bG:function bG(){},
fy:function fy(){},
kE:function kE(a){this.a=a},
fx:function fx(){},
e1:function e1(){},
cq:function cq(){},
b3:function b3(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
fz:function fz(){},
fA:function fA(){},
d4:function d4(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
vo(a,b){var s=b.c
return s==null?b.c=A.hy(a,"o",[b.x]):s},
xa(a){var s=a.w
if(s===6||s===7)return A.xa(a.x)
return s===11||s===12},
B7(a){return a.as},
ED(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
al(a){return A.tC(v.typeUniverse,a,!1)},
Er(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.cI(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
cI(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cI(a1,s,a3,a4)
if(r===s)return a2
return A.xS(a1,r,!0)
case 7:s=a2.x
r=A.cI(a1,s,a3,a4)
if(r===s)return a2
return A.xR(a1,r,!0)
case 8:q=a2.y
p=A.eR(a1,q,a3,a4)
if(p===q)return a2
return A.hy(a1,a2.x,p)
case 9:o=a2.x
n=A.cI(a1,o,a3,a4)
m=a2.y
l=A.eR(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vJ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eR(a1,j,a3,a4)
if(i===j)return a2
return A.xT(a1,k,i)
case 11:h=a2.x
g=A.cI(a1,h,a3,a4)
f=a2.y
e=A.DB(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xQ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eR(a1,d,a3,a4)
o=a2.x
n=A.cI(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vK(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.hX("Attempted to substitute unexpected RTI kind "+a0))}},
eR(a,b,c,d){var s,r,q,p,o=b.length,n=A.tL(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cI(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
DC(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tL(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cI(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
DB(a,b,c,d){var s,r=b.a,q=A.eR(a,r,c,d),p=b.b,o=A.eR(a,p,c,d),n=b.c,m=A.DC(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.k0()
s.a=q
s.b=o
s.c=m
return s},
v(a,b){a[v.arrayRti]=b
return a},
kR(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ej(s)
return a.$S()}return null},
Eq(a,b){var s
if(A.xa(b))if(a instanceof A.cU){s=A.kR(a)
if(s!=null)return s}return A.bo(a)},
bo(a){if(a instanceof A.k)return A.p(a)
if(Array.isArray(a))return A.a8(a)
return A.vY(J.dC(a))},
a8(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.vY(a)},
vY(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.D0(a,s)},
D0(a,b){var s=a instanceof A.cU?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Cp(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ej(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tC(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
uy(a){return A.bn(A.p(a))},
w6(a){var s=A.kR(a)
return A.bn(s==null?A.bo(a):s)},
w_(a){var s
if(a instanceof A.hn)return a.i4()
s=a instanceof A.cU?A.kR(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.wn(a).a
if(Array.isArray(a))return A.a8(a)
return A.bo(a)},
bn(a){var s=a.r
return s==null?a.r=new A.tA(a):s},
Ee(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.hA(v.typeUniverse,A.w_(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.xU(v.typeUniverse,s,A.w_(q[r]))
return A.hA(v.typeUniverse,s,a)},
bp(a){return A.bn(A.tC(v.typeUniverse,a,!1))},
D_(a){var s=this
s.b=A.Dy(s)
return s.b(a)},
Dy(a){var s,r,q,p
if(a===t.K)return A.D8
if(A.dD(a))return A.Dc
s=a.w
if(s===6)return A.CY
if(s===1)return A.ym
if(s===7)return A.D3
r=A.Dx(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dD)){a.f="$i"+q
if(q==="r")return A.D6
if(a===t.m)return A.D5
return A.Db}}else if(s===10){p=A.Ea(a.x,a.y)
return p==null?A.ym:p}return A.CW},
Dx(a){if(a.w===8){if(a===t.S)return A.hH
if(a===t.i||a===t.q)return A.D7
if(a===t.N)return A.Da
if(a===t.y)return A.kN}return null},
CZ(a){var s=this,r=A.CV
if(A.dD(s))r=A.CD
else if(s===t.K)r=A.CC
else if(A.eU(s)){r=A.CX
if(s===t.aV)r=A.yb
else if(s===t.T)r=A.kJ
else if(s===t.o9)r=A.vQ
else if(s===t.jh)r=A.CB
else if(s===t.jX)r=A.ya
else if(s===t.A)r=A.vR}else if(s===t.S)r=A.R
else if(s===t.N)r=A.an
else if(s===t.y)r=A.aV
else if(s===t.q)r=A.CA
else if(s===t.i)r=A.bS
else if(s===t.m)r=A.T
s.a=r
return s.a(a)},
CW(a){var s=this
if(a==null)return A.eU(s)
return A.Ew(v.typeUniverse,A.Eq(a,s),s)},
CY(a){if(a==null)return!0
return this.x.b(a)},
Db(a){var s,r=this
if(a==null)return A.eU(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dC(a)[s]},
D6(a){var s,r=this
if(a==null)return A.eU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dC(a)[s]},
D5(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
yl(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
CV(a){var s=this
if(a==null){if(A.eU(s))return a}else if(s.b(a))return a
throw A.ao(A.yh(a,s),new Error())},
CX(a){var s=this
if(a==null||s.b(a))return a
throw A.ao(A.yh(a,s),new Error())},
yh(a,b){return new A.hw("TypeError: "+A.xD(a,A.b9(b,null)))},
xD(a,b){return A.il(a)+": type '"+A.b9(A.w_(a),null)+"' is not a subtype of type '"+b+"'"},
bm(a,b){return new A.hw("TypeError: "+A.xD(a,b))},
D3(a){var s=this
return s.x.b(a)||A.vo(v.typeUniverse,s).b(a)},
D8(a){return a!=null},
CC(a){if(a!=null)return a
throw A.ao(A.bm(a,"Object"),new Error())},
Dc(a){return!0},
CD(a){return a},
ym(a){return!1},
kN(a){return!0===a||!1===a},
aV(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ao(A.bm(a,"bool"),new Error())},
vQ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ao(A.bm(a,"bool?"),new Error())},
bS(a){if(typeof a=="number")return a
throw A.ao(A.bm(a,"double"),new Error())},
ya(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bm(a,"double?"),new Error())},
hH(a){return typeof a=="number"&&Math.floor(a)===a},
R(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ao(A.bm(a,"int"),new Error())},
yb(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ao(A.bm(a,"int?"),new Error())},
D7(a){return typeof a=="number"},
CA(a){if(typeof a=="number")return a
throw A.ao(A.bm(a,"num"),new Error())},
CB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bm(a,"num?"),new Error())},
Da(a){return typeof a=="string"},
an(a){if(typeof a=="string")return a
throw A.ao(A.bm(a,"String"),new Error())},
kJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ao(A.bm(a,"String?"),new Error())},
T(a){if(A.yl(a))return a
throw A.ao(A.bm(a,"JSObject"),new Error())},
vR(a){if(a==null)return a
if(A.yl(a))return a
throw A.ao(A.bm(a,"JSObject?"),new Error())},
yy(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.b9(a[q],b)
return s},
Do(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.yy(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.b9(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yj(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.v([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.b9(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.b9(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.b9(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.b9(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.b9(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
b9(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.b9(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.b9(a.x,b)+">"
if(m===8){p=A.DG(a.x)
o=a.y
return o.length>0?p+("<"+A.yy(o,b)+">"):p}if(m===10)return A.Do(a,b)
if(m===11)return A.yj(a,b,null)
if(m===12)return A.yj(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
DG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Cq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Cp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tC(a,b,!1)
else if(typeof m=="number"){s=m
r=A.hz(a,5,"#")
q=A.tL(s)
for(p=0;p<s;++p)q[p]=r
o=A.hy(a,b,q)
n[b]=o
return o}else return m},
Co(a,b){return A.y7(a.tR,b)},
Cn(a,b){return A.y7(a.eT,b)},
tC(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xM(A.xK(a,null,b,!1))
r.set(b,s)
return s},
hA(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xM(A.xK(a,b,c,!0))
q.set(c,r)
return r},
xU(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vJ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cG(a,b){b.a=A.CZ
b.b=A.D_
return b},
hz(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bv(null,null)
s.w=b
s.as=c
r=A.cG(a,s)
a.eC.set(c,r)
return r},
xS(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Cl(a,b,r,c)
a.eC.set(r,s)
return s},
Cl(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dD(b))if(!(b===t.P||b===t.v))if(s!==6)r=s===7&&A.eU(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bv(null,null)
q.w=6
q.x=b
q.as=c
return A.cG(a,q)},
xR(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Cj(a,b,r,c)
a.eC.set(r,s)
return s},
Cj(a,b,c,d){var s,r
if(d){s=b.w
if(A.dD(b)||b===t.K)return b
else if(s===1)return A.hy(a,"o",[b])
else if(b===t.P||b===t.v)return t.gK}r=new A.bv(null,null)
r.w=7
r.x=b
r.as=c
return A.cG(a,r)},
Cm(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bv(null,null)
s.w=13
s.x=b
s.as=q
r=A.cG(a,s)
a.eC.set(q,r)
return r},
hx(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ci(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hy(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hx(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bv(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cG(a,r)
a.eC.set(p,q)
return q},
vJ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hx(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bv(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cG(a,o)
a.eC.set(q,n)
return n},
xT(a,b,c){var s,r,q="+"+(b+"("+A.hx(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bv(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cG(a,s)
a.eC.set(q,r)
return r},
xQ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hx(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hx(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ci(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bv(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cG(a,p)
a.eC.set(r,o)
return o},
vK(a,b,c,d){var s,r=b.as+("<"+A.hx(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Ck(a,b,c,r,d)
a.eC.set(r,s)
return s},
Ck(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tL(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cI(a,b,r,0)
m=A.eR(a,c,r,0)
return A.vK(a,n,m,c!==m)}}l=new A.bv(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cG(a,l)},
xK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
xM(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.C8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xL(a,r,l,k,!1)
else if(q===46)r=A.xL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dt(a.u,a.e,k.pop()))
break
case 94:k.push(A.Cm(a.u,k.pop()))
break
case 35:k.push(A.hz(a.u,5,"#"))
break
case 64:k.push(A.hz(a.u,2,"@"))
break
case 126:k.push(A.hz(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Ca(a,k)
break
case 38:A.C9(a,k)
break
case 63:p=a.u
k.push(A.xS(p,A.dt(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xR(p,A.dt(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.C7(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xN(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Cc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.dt(a.u,a.e,m)},
C8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Cq(s,o.x)[p]
if(n==null)A.w('No "'+p+'" in "'+A.B7(o)+'"')
d.push(A.hA(s,o,n))}else d.push(p)
return m},
Ca(a,b){var s,r=a.u,q=A.xJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hy(r,p,q))
else{s=A.dt(r,a.e,p)
switch(s.w){case 11:b.push(A.vK(r,s,q,a.n))
break
default:b.push(A.vJ(r,s,q))
break}}},
C7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dt(p,a.e,o)
q=new A.k0()
q.a=s
q.b=n
q.c=m
b.push(A.xQ(p,r,q))
return
case-4:b.push(A.xT(p,b.pop(),s))
return
default:throw A.b(A.hX("Unexpected state under `()`: "+A.q(o)))}},
C9(a,b){var s=b.pop()
if(0===s){b.push(A.hz(a.u,1,"0&"))
return}if(1===s){b.push(A.hz(a.u,4,"1&"))
return}throw A.b(A.hX("Unexpected extended operation "+A.q(s)))},
xJ(a,b){var s=b.splice(a.p)
A.xN(a.u,a.e,s)
a.p=b.pop()
return s},
dt(a,b,c){if(typeof c=="string")return A.hy(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Cb(a,b,c)}else return c},
xN(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dt(a,b,c[s])},
Cc(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dt(a,b,c[s])},
Cb(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.hX("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.hX("Bad index "+c+" for "+b.j(0)))},
Ew(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aw(a,b,null,c,null)
r.set(c,s)}return s},
aw(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dD(d))return!0
s=b.w
if(s===4)return!0
if(A.dD(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aw(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.v){if(q===7)return A.aw(a,b,c,d.x,e)
return d===p||d===t.v||q===6}if(d===t.K){if(s===7)return A.aw(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aw(a,b.x,c,d,e))return!1
return A.aw(a,A.vo(a,b),c,d,e)}if(s===6)return A.aw(a,p,c,d,e)&&A.aw(a,b.x,c,d,e)
if(q===7){if(A.aw(a,b,c,d.x,e))return!0
return A.aw(a,b,c,A.vo(a,d),e)}if(q===6)return A.aw(a,b,c,p,e)||A.aw(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aw(a,j,c,i,e)||!A.aw(a,i,e,j,c))return!1}return A.yk(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.yk(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.D4(a,b,c,d,e)}if(o&&q===10)return A.D9(a,b,c,d,e)
return!1},
yk(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aw(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aw(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aw(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aw(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aw(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
D4(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hA(a,b,r[o])
return A.y9(a,p,null,c,d.y,e)}return A.y9(a,b.y,null,c,d.y,e)},
y9(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aw(a,b[s],d,e[s],f))return!1
return!0},
D9(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aw(a,r[s],c,q[s],e))return!1
return!0},
eU(a){var s=a.w,r=!0
if(!(a===t.P||a===t.v))if(!A.dD(a))if(s!==6)r=s===7&&A.eU(a.x)
return r},
dD(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
y7(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tL(a){return a>0?new Array(a):v.typeUniverse.sEA},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
k0:function k0(){this.c=this.b=this.a=null},
tA:function tA(a){this.a=a},
jX:function jX(){},
hw:function hw(a){this.a=a},
BB(){var s,r,q
if(self.scheduleImmediate!=null)return A.DI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cK(new A.qB(s),1)).observe(r,{childList:true})
return new A.qA(s,r,q)}else if(self.setImmediate!=null)return A.DJ()
return A.DK()},
BC(a){self.scheduleImmediate(A.cK(new A.qC(a),0))},
BD(a){self.setImmediate(A.cK(new A.qD(a),0))},
BE(a){A.vs(B.a1,a)},
vs(a,b){var s=B.b.T(a.a,1000)
return A.Cg(s<0?0:s,b)},
Cg(a,b){var s=new A.kA(!0)
s.l4(a,b)
return s},
Ch(a,b){var s=new A.kA(!1)
s.l5(a,b)
return s},
i(a){return new A.h0(new A.l($.m,a.h("l<0>")),a.h("h0<0>"))},
h(a,b){a.$2(0,null)
b.b=!0
return b.a},
c(a,b){A.yc(a,b)},
f(a,b){b.X(a)},
e(a,b){b.b6(A.I(a),A.P(a))},
yc(a,b){var s,r,q=new A.tP(b),p=new A.tQ(b)
if(a instanceof A.l)a.iH(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.b8(q,p,s)
else{r=new A.l($.m,t._)
r.a=8
r.c=a
r.iH(q,p,s)}}},
d(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.m.cH(new A.um(s),t.H,t.S,t.z)},
kK(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.bU(null)
else{s=c.a
s===$&&A.M()
s.n()}return}else if(b===1){s=c.c
if(s!=null){r=A.I(a)
q=A.P(a)
s.a9(new A.a1(r,q))}else{s=A.I(a)
r=A.P(a)
q=c.a
q===$&&A.M()
q.ad(s,r)
c.a.n()}return}if(a instanceof A.he){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.M()
r.q(0,s)
A.eW(new A.tN(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.M()
s.e2(p,!1).aQ(new A.tO(c,b),t.P)
return}}A.yc(a,b)},
DA(a){var s=a.a
s===$&&A.M()
return new A.a7(s,A.p(s).h("a7<1>"))},
BF(a,b){var s=new A.jL(b.h("jL<0>"))
s.l_(a,b)
return s},
De(a,b){return A.BF(a,b)},
C_(a){return new A.he(a,1)},
xH(a){return new A.he(a,0)},
xP(a,b,c){return 0},
cO(a){var s
if(t.C.b(a)){s=a.gbz()
if(s!=null)return s}return B.r},
Am(a,b){var s=new A.l($.m,b.h("l<0>"))
A.pv(B.a1,new A.mV(a,s))
return s},
dS(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.I(q)
r=A.P(q)
p=new A.l($.m,b.h("l<0>"))
o=s
n=r
m=A.dy(o,n)
if(m==null)o=new A.a1(o,n==null?A.cO(o):n)
else o=m
p.S(o)
return p}return b.h("o<0>").b(l)?l:A.bP(l,b)},
mU(a,b){var s=a==null?b.a(a):a,r=new A.l($.m,b.h("l<0>"))
r.aA(s)
return r},
mW(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.l($.m,b.h("l<r<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.mY(i,h,g,f)
try{for(n=J.U(a),m=t.P;n.l();){r=n.gp()
q=i.b
r.b8(new A.mX(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bU(A.v([],b.h("t<0>")))
return n}i.a=A.b2(n,null,!1,b.h("0?"))}catch(l){p=A.I(l)
o=A.P(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.dy(m,k)
if(j==null)m=new A.a1(m,k==null?A.cO(m):k)
else m=j
n.S(m)
return n}else{i.d=p
i.c=o}}return f},
it(a,b,c,d){var s=new A.mO(d,null,b,c),r=$.m,q=new A.l(r,c.h("l<0>"))
if(r!==B.e)s=r.cH(s,c.h("0/"),t.K,t.l)
a.cl(new A.bj(q,2,null,s,a.$ti.h("@<1>").G(c).h("bj<1,2>")))
return q},
Al(a,b){var s,r,q,p=A.v([],b.h("t<bk<0>>"))
for(s=a.length,r=b.h("bk<0>"),q=0;q<a.length;a.length===s||(0,A.a5)(a),++q)p.push(new A.bk(a[q],r))
if(p.length===0)return A.mU(A.v([],b.h("t<0>")),b.h("r<0>"))
s=new A.l($.m,b.h("l<r<0>>"))
A.xE(p,new A.mP(new A.O(s,b.h("O<r<0>>")),p,b))
return s},
Dh(a){return a!=null},
wJ(a,b,c,d){var s=b.h("@<0>").G(c).G(d),r=new A.l($.m,s.h("l<+(1,2,3)>")),q=new A.bk(a.a,b.h("bk<0>")),p=new A.bk(a.b,c.h("bk<0>")),o=new A.bk(a.c,d.h("bk<0>"))
A.xE(A.v([q,p,o],t.dB),new A.mT(new A.O(r,s.h("O<+(1,2,3)>")),q,p,o))
return r},
xE(a,b){var s,r={},q=r.a=r.b=0,p=new A.rw(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.a5)(a),++q)a[q].mD(p)},
dy(a,b){var s,r,q,p=$.m
if(p===B.e)return null
s=p.ja(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.j2(r,q)
return s},
av(a,b){var s
if($.m!==B.e){s=A.dy(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gbz()
if(b==null){A.j2(a,B.r)
b=B.r}}else b=B.r
else if(t.C.b(a))A.j2(a,b)
return new A.a1(a,b)},
BU(a,b,c){var s=new A.l(b,c.h("l<0>"))
s.a=8
s.c=a
return s},
bP(a,b){var s=new A.l($.m,b.h("l<0>"))
s.a=8
s.c=a
return s},
rC(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.fJ()
b.S(new A.a1(new A.a6(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.ij(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.d1()
b.dN(p.a)
A.dr(b,q)
return}b.a^=2
b.b.bP(new A.rD(p,b))},
dr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.cz(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.dr(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbk()===k.gbk())}else f=!1
if(f){f=g.a
r=f.c
f.b.cz(r.a,r.b)
return}j=$.m
if(j!==k)$.m=k
else j=null
f=s.a.c
if((f&15)===8)new A.rH(s,g,p).$0()
else if(q){if((f&1)!==0)new A.rG(s,m).$0()}else if((f&2)!==0)new A.rF(g,s).$0()
if(j!=null)$.m=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.h("o<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.dU(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.rC(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.dU(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
ys(a,b){if(t.d.b(a))return b.cH(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.bs(a,t.z,t.K)
throw A.b(A.aX(a,"onError",u.w))},
Dg(){var s,r
for(s=$.eP;s!=null;s=$.eP){$.hJ=null
r=s.b
$.eP=r
if(r==null)$.hI=null
s.a.$0()}},
Dz(){$.vZ=!0
try{A.Dg()}finally{$.hJ=null
$.vZ=!1
if($.eP!=null)$.wf().$1(A.yH())}},
yA(a){var s=new A.jK(a),r=$.hI
if(r==null){$.eP=$.hI=s
if(!$.vZ)$.wf().$1(A.yH())}else $.hI=r.b=s},
Dw(a){var s,r,q,p=$.eP
if(p==null){A.yA(a)
$.hJ=$.hI
return}s=new A.jK(a)
r=$.hJ
if(r==null){s.b=p
$.eP=$.hJ=s}else{q=r.b
s.b=q
$.hJ=r.b=s
if(q==null)$.hI=s}},
eW(a){var s,r=null,q=$.m
if(B.e===q){A.u9(r,r,B.e,a)
return}if(B.e===q.gft().a)s=B.e.gbk()===q.gbk()
else s=!1
if(s){A.u9(r,r,q,q.aZ(a,t.H))
return}s=$.m
s.bP(s.d8(a))},
xf(a,b){var s=null,r=b.h("bO<0>"),q=new A.bO(s,s,s,s,r)
q.M(a)
q.hH()
return new A.a7(q,r.h("a7<1>"))},
Fc(a){return new A.bR(A.bb(a,"stream",t.K))},
bL(a,b,c,d,e,f){return e?new A.cF(b,c,d,a,f.h("cF<0>")):new A.bO(b,c,d,a,f.h("bO<0>"))},
cv(a,b){var s=null
return a?new A.dv(s,s,b.h("dv<0>")):new A.h1(s,s,b.h("h1<0>"))},
kO(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.I(q)
r=A.P(q)
$.m.cz(s,r)}},
BS(a,b,c,d,e,f){var s=$.m,r=e?1:0,q=c!=null?32:0,p=A.jO(s,b,f),o=A.jP(s,c),n=d==null?A.un():d
return new A.cB(a,p,o,s.aZ(n,t.H),s,r|q,f.h("cB<0>"))},
Bz(a,b,c){var s=$.m,r=a.geQ(),q=a.gdM()
return new A.h_(new A.l(s,t._),b.B(r,!1,a.geW(),q))},
BA(a){return new A.qy(a)},
jO(a,b,c){var s=b==null?A.DM():b
return a.bs(s,t.H,c)},
jP(a,b){if(b==null)b=A.DN()
if(t.r.b(b))return a.cH(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.bs(b,t.z,t.K)
throw A.b(A.K(u.y,null))},
Di(a){},
Dk(a,b){$.m.cz(a,b)},
Dj(){},
xC(a,b){var s=$.m,r=new A.es(s,b.h("es<0>"))
A.eW(r.gig())
if(a!=null)r.c=s.aZ(a,t.H)
return r},
Du(a,b,c){var s,r,q,p
try{b.$1(a.$0())}catch(p){s=A.I(p)
r=A.P(p)
q=A.dy(s,r)
if(q!=null)c.$2(q.a,q.b)
else c.$2(s,r)}},
CL(a,b,c){var s=a.u()
if(s!==$.cM())s.J(new A.tT(b,c))
else b.a9(c)},
CM(a,b){return new A.tS(a,b)},
CN(a,b,c){var s=a.u()
if(s!==$.cM())s.J(new A.tU(b,c))
else b.bb(c)},
y8(a,b,c){var s=A.dy(b,c)
if(s!=null){b=s.a
c=s.b}a.a7(b,c)},
pv(a,b){var s=$.m
if(s===B.e)return s.fL(a,b)
return s.fL(a,s.d8(b))},
EL(a,b,c){return A.Dv(a,null,b,c)},
Dv(a,b,c,d){return $.m.ed(c,b).bt(a,d)},
Ds(a,b,c,d,e){A.hK(d,e)},
hK(a,b){A.Dw(new A.u5(a,b))},
u6(a,b,c,d){var s,r=$.m
if(r===c)return d.$0()
$.m=c
s=r
try{r=d.$0()
return r}finally{$.m=s}},
u8(a,b,c,d,e){var s,r=$.m
if(r===c)return d.$1(e)
$.m=c
s=r
try{r=d.$1(e)
return r}finally{$.m=s}},
u7(a,b,c,d,e,f){var s,r=$.m
if(r===c)return d.$2(e,f)
$.m=c
s=r
try{r=d.$2(e,f)
return r}finally{$.m=s}},
yw(a,b,c,d){return d},
yx(a,b,c,d){return d},
yv(a,b,c,d){return d},
Dr(a,b,c,d,e){return null},
u9(a,b,c,d){var s,r
if(B.e!==c){s=B.e.gbk()
r=c.gbk()
d=s!==r?c.d8(d):c.fG(d,t.H)}A.yA(d)},
Dq(a,b,c,d,e){return A.vs(d,B.e!==c?c.fG(e,t.H):e)},
Dp(a,b,c,d,e){var s
if(B.e!==c)e=c.iY(e,t.H,t.hU)
s=B.b.T(d.a,1000)
return A.Ch(s<0?0:s,e)},
Dt(a,b,c,d){A.wa(d)},
Dl(a){$.m.jD(a)},
yu(a,b,c,d,e){var s,r,q,p
$.yr=A.DO()
if(d==null)d=B.ca
if(e==null)s=c.gib()
else{r=t.X
s=A.An(e,r,r)}r=new A.jU(c.gix(),c.giz(),c.giy(),c.gir(),c.gis(),c.giq(),c.ghW(),c.gft(),c.ghQ(),c.ghP(),c.gik(),c.gi0(),c.gfj(),c,s)
q=d.x
if(q!=null)r.w=new A.aF(r,q)
p=d.a
if(p!=null)r.as=new A.aF(r,p)
return r},
qB:function qB(a){this.a=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
kA:function kA(a){this.a=a
this.b=null
this.c=0},
tz:function tz(a,b){this.a=a
this.b=b},
ty:function ty(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b){this.a=a
this.b=!1
this.$ti=b},
tP:function tP(a){this.a=a},
tQ:function tQ(a){this.a=a},
um:function um(a){this.a=a},
tN:function tN(a,b){this.a=a
this.b=b},
tO:function tO(a,b){this.a=a
this.b=b},
jL:function jL(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
qE:function qE(a){this.a=a},
he:function he(a,b){this.a=a
this.b=b},
ky:function ky(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
eH:function eH(a,b){this.a=a
this.$ti=b},
a1:function a1(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.$ti=b},
dl:function dl(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ca:function ca(){},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tv:function tv(a,b){this.a=a
this.b=b},
tx:function tx(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(a){this.a=a},
h1:function h1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
mV:function mV(a,b){this.a=a
this.b=b},
mY:function mY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX:function mX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mO:function mO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a,b){this.c=a
this.d=b},
bk:function bk(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
rw:function rw(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(){},
ad:function ad(a,b){this.a=a
this.$ti=b},
O:function O(a,b){this.a=a
this.$ti=b},
bj:function bj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rz:function rz(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
rD:function rD(a,b){this.a=a
this.b=b},
rB:function rB(a,b){this.a=a
this.b=b},
rA:function rA(a,b){this.a=a
this.b=b},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(a){this.a=a},
rG:function rG(a,b){this.a=a
this.b=b},
rF:function rF(a,b){this.a=a
this.b=b},
rK:function rK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a
this.b=null},
D:function D(){},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oL:function oL(a,b){this.a=a
this.b=b},
oM:function oM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oJ:function oJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK:function oK(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
oH:function oH(a){this.a=a},
oI:function oI(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(){},
jl:function jl(){},
cD:function cD(){},
tp:function tp(a){this.a=a},
to:function to(a){this.a=a},
kz:function kz(){},
jM:function jM(){},
bO:function bO(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
cF:function cF(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
a7:function a7(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
h_:function h_(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
qx:function qx(a){this.a=a},
kv:function kv(a,b,c){this.c=a
this.a=b
this.b=c},
au:function au(){},
qT:function qT(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a){this.a=a},
eG:function eG(){},
jW:function jW(){},
bz:function bz(a){this.b=a
this.a=null},
er:function er(a,b){this.b=a
this.c=b
this.a=null},
ro:function ro(){},
eC:function eC(){this.a=0
this.c=this.b=null},
t8:function t8(a,b){this.a=a
this.b=b},
es:function es(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bR:function bR(a){this.a=null
this.b=a
this.c=!1},
dq:function dq(a){this.$ti=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
t6:function t6(a,b){this.a=a
this.b=b},
hh:function hh(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
tT:function tT(a,b){this.a=a
this.b=b},
tS:function tS(a,b){this.a=a
this.b=b},
tU:function tU(a,b){this.a=a
this.b=b},
b7:function b7(){},
ew:function ew(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
cf:function cf(a,b,c){this.b=a
this.a=b
this.$ti=c},
aL:function aL(a,b,c){this.b=a
this.a=b
this.$ti=c},
ha:function ha(a){this.a=a},
eE:function eE(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ku:function ku(a){this.a=a},
aF:function aF(a,b){this.a=a
this.b=b},
kH:function kH(){},
jU:function jU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=null
_.ax=n
_.ay=o},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rh:function rh(a,b){this.a=a
this.b=b},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(){},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tc:function tc(a,b){this.a=a
this.b=b},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
eL:function eL(a){this.a=a},
u5:function u5(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
n_(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cc(d.h("@<0>").G(e).h("cc<1,2>"))
b=A.w2()}else{if(A.yK()===b&&A.yJ()===a)return new A.ds(d.h("@<0>").G(e).h("ds<1,2>"))
if(a==null)a=A.w1()}else{if(b==null)b=A.w2()
if(a==null)a=A.w1()}return A.BT(a,b,c,d,e)},
xF(a,b){var s=a[b]
return s===a?null:s},
vG(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vF(){var s=Object.create(null)
A.vG(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
BT(a,b,c,d,e){var s=c!=null?c:new A.rg(d)
return new A.h5(a,b,s,d.h("@<0>").G(e).h("h5<1,2>"))},
vj(a,b,c,d){if(b==null){if(a==null)return new A.b0(c.h("@<0>").G(d).h("b0<1,2>"))
b=A.w2()}else{if(A.yK()===b&&A.yJ()===a)return new A.fm(c.h("@<0>").G(d).h("fm<1,2>"))
if(a==null)a=A.w1()}return A.C5(a,b,null,c,d)},
bt(a,b,c){return A.Eg(a,new A.b0(b.h("@<0>").G(c).h("b0<1,2>")))},
a2(a,b){return new A.b0(a.h("@<0>").G(b).h("b0<1,2>"))},
C5(a,b,c,d,e){return new A.hg(a,b,new A.t4(d),d.h("@<0>").G(e).h("hg<1,2>"))},
vk(a){return new A.cd(a.h("cd<0>"))},
bu(a){return new A.cd(a.h("cd<0>"))},
vI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
C6(a,b,c){var s=new A.ez(a,b,c.h("ez<0>"))
s.c=a.e
return s},
CP(a,b){return J.z(a,b)},
CQ(a){return J.y(a)},
An(a,b,c){var s=A.n_(null,null,null,b,c)
a.aa(0,new A.n0(s,b,c))
return s},
Ax(a){var s=new A.kn(a)
if(s.l())return s.gp()
return null},
wT(a,b,c){var s=A.vj(null,null,b,c)
a.aa(0,new A.nE(s,b,c))
return s},
AF(a,b){var s,r,q=A.vk(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r)q.q(0,b.a(a[r]))
return q},
AG(a,b){var s=A.vk(b)
s.ac(0,a)
return s},
AH(a,b){var s=t.bP
return J.wl(s.a(a),s.a(b))},
nJ(a){var s,r
if(A.w8(a))return"{...}"
s=new A.Y("")
try{r={}
$.dz.push(a)
s.a+="{"
r.a=!0
a.aa(0,new A.nK(r,s))
s.a+="}"}finally{$.dz.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
nF(a){return new A.fq(A.b2(A.AI(null),null,!1,a.h("0?")),a.h("fq<0>"))},
AI(a){return 8},
cc:function cc(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ds:function ds(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
h5:function h5(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
rg:function rg(a){this.a=a},
hc:function hc(a,b){this.a=a
this.$ti=b},
k1:function k1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hg:function hg(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
t4:function t4(a){this.a=a},
cd:function cd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
t5:function t5(a){this.a=a
this.c=this.b=null},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dg:function dg(a,b){this.a=a
this.$ti=b},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
k8:function k8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aI:function aI(){},
A:function A(){},
J:function J(){},
nI:function nI(a){this.a=a},
nK:function nK(a,b){this.a=a
this.b=b},
kD:function kD(){},
fs:function fs(){},
dh:function dh(a,b){this.a=a
this.$ti=b},
fq:function fq(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
k9:function k9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
ct:function ct(){},
hs:function hs(){},
hB:function hB(){},
yo(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.I(r)
q=A.ak(String(s),null,null)
throw A.b(q)}q=A.tV(p)
return q},
tV(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.k5(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tV(a[s])
return a},
Cz(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zs()
else s=new Uint8Array(o)
for(r=J.a4(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Cy(a,b,c,d){var s=a?$.zr():$.zq()
if(s==null)return null
if(0===c&&d===b.length)return A.y5(s,b)
return A.y5(s,b.subarray(c,d))},
y5(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
wr(a,b,c,d,e,f){if(B.b.aR(f,4)!==0)throw A.b(A.ak("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ak("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ak("Invalid base64 padding, more than two '=' characters",a,b))},
BG(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.a4(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.i(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>18&63)
g=n+1
f[n]=a.charCodeAt(l>>>12&63)
n=g+1
f[g]=a.charCodeAt(l>>>6&63)
g=n+1
f[n]=a.charCodeAt(l&63)
l=0
k=3}}if(p>=0&&p<=255){if(e&&k<3){n=g+1
m=n+1
if(3-k===1){r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.i(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aX(b,"Not a byte value at index "+q+": 0x"+B.b.oS(s.i(b,q),16),null))},
wD(a){return B.bk.i(0,a.toLowerCase())},
wQ(a,b,c){return new A.fn(a,b)},
CR(a){return a.ew()},
C0(a,b){return new A.t_(a,[],A.E7())},
C1(a,b,c){var s,r=new A.Y("")
A.xI(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
xI(a,b,c,d){var s=A.C0(b,c)
s.eB(a)},
C2(a,b,c){var s,r,q
for(s=J.a4(a),r=b,q=0;r<c;++r)q=(q|s.i(a,r))>>>0
if(q>=0&&q<=255)return
A.C3(a,b,c)},
C3(a,b,c){var s,r,q
for(s=J.a4(a),r=b;r<c;++r){q=s.i(a,r)
if(q<0||q>255)throw A.b(A.ak("Source contains non-Latin-1 characters.",a,r))}},
C4(a){return new A.ey(a,new A.du(a))},
y6(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
k5:function k5(a,b){this.a=a
this.b=b
this.c=null},
k6:function k6(a){this.a=a},
rY:function rY(a,b,c){this.b=a
this.c=b
this.a=c},
tJ:function tJ(){},
tI:function tI(){},
hT:function hT(){},
kC:function kC(){},
hV:function hV(a){this.a=a},
tB:function tB(a,b){this.a=a
this.b=b},
kB:function kB(){},
hU:function hU(a,b){this.a=a
this.b=b},
rr:function rr(a){this.a=a},
tg:function tg(a){this.a=a},
lg:function lg(){},
hZ:function hZ(){},
qK:function qK(){},
qR:function qR(a){this.c=null
this.a=0
this.b=a},
qL:function qL(){},
qz:function qz(a,b){this.a=a
this.b=b},
lw:function lw(){},
jQ:function jQ(a){this.a=a},
jR:function jR(a,b){this.a=a
this.b=b
this.c=0},
i9:function i9(){},
dn:function dn(a,b){this.a=a
this.b=b},
ia:function ia(){},
ah:function ah(){},
m2:function m2(a){this.a=a},
d_:function d_(){},
mI:function mI(){},
mJ:function mJ(){},
fn:function fn(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
nB:function nB(){},
iG:function iG(a){this.b=a},
rZ:function rZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
iF:function iF(a){this.a=a},
t0:function t0(){},
t1:function t1(a,b){this.a=a
this.b=b},
t_:function t_(a,b,c){this.c=a
this.a=b
this.b=c},
iH:function iH(){},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
t2:function t2(a){this.a=a},
nC:function nC(){},
t3:function t3(){},
ey:function ey(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=null
_.d=!1},
jn:function jn(){},
tu:function tu(a,b){this.a=a
this.b=b},
hv:function hv(){},
du:function du(a){this.a=a},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(){},
jC:function jC(){},
kG:function kG(a){this.b=this.a=0
this.c=a},
tK:function tK(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jB:function jB(a){this.a=a},
cH:function cH(a){this.a=a
this.b=16
this.c=0},
kI:function kI(){},
BK(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.aI(0,$.wg()).dF(0,A.qM(s))
s=0
o=0}}if(b)return q.by(0)
return q},
xt(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
BL(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.a5.mY(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.xt(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.xt(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bi(j,i)
return new A.az(l===0?!1:c,i,l)},
BN(a,b){var s,r,q,p,o
if(a==="")return null
s=$.zn().jf(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.BK(p,q)
if(o!=null)return A.BL(o,2,q)
return null},
bi(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
vD(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
qM(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bi(4,s)
return new A.az(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bi(1,s)
return new A.az(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a1(a,16)
r=A.bi(2,s)
return new A.az(r===0?!1:o,s,r)}r=B.b.T(B.b.giZ(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.T(a,65536)}r=A.bi(r,s)
return new A.az(r===0?!1:o,s,r)},
vE(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.C(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.C(d)
d[s]=0}return b+c},
BJ(a,b,c,d){var s,r,q,p,o,n=B.b.T(c,16),m=B.b.aR(c,16),l=16-m,k=B.b.cO(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.cP(p,l)
r&2&&A.C(d)
d[s+n+1]=(o|q)>>>0
q=B.b.cO((p&k)>>>0,m)}r&2&&A.C(d)
d[n]=q},
xu(a,b,c,d){var s,r,q,p,o=B.b.T(c,16)
if(B.b.aR(c,16)===0)return A.vE(a,b,o,d)
s=b+o+1
A.BJ(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.C(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
BM(a,b,c,d){var s,r,q,p,o=B.b.T(c,16),n=B.b.aR(c,16),m=16-n,l=B.b.cO(1,n)-1,k=B.b.cP(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.cO((q&l)>>>0,m)
s&2&&A.C(d)
d[r]=(p|k)>>>0
k=B.b.cP(q,n)}s&2&&A.C(d)
d[j]=k},
qN(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
BH(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a1(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a1(r,16)}s&2&&A.C(e)
e[b]=r},
jN(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a1(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a1(r,16)&1)}},
xz(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=p&65535
r=B.b.T(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=n&65535
r=B.b.T(n,65536)}},
BI(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.hx((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Em(a){return A.kT(a)},
Ai(a){var s=!0
s=typeof a=="string"
if(s)A.wF(a)},
wF(a){throw A.b(A.aX(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
k_(a,b){var s=$.zo()
s=s==null?null:new s(A.cK(A.EX(a,b),1))
return new A.jZ(s,b.h("jZ<0>"))},
yQ(a){var s=A.vm(a,null)
if(s!=null)return s
throw A.b(A.ak(a,null,null))},
Ag(a,b){a=A.ao(a,new Error())
a.stack=b.j(0)
throw a},
b2(a,b,c,d){var s,r=c?J.ve(a,d):J.vd(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
AK(a,b,c){var s,r=A.v([],c.h("t<0>"))
for(s=J.U(a);s.l();)r.push(s.gp())
r.$flags=1
return r},
as(a,b){var s,r
if(Array.isArray(a))return A.v(a.slice(0),b.h("t<0>"))
s=A.v([],b.h("t<0>"))
for(r=J.U(a);r.l();)s.push(r.gp())
return s},
nG(a,b){var s=A.AK(a,!1,b)
s.$flags=3
return s},
bM(a,b,c){var s,r,q,p,o
A.aJ(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ac(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.x8(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Bh(a,b,c)
if(r)a=J.wp(a,c)
if(b>0)a=J.l1(a,b)
s=A.as(a,t.S)
return A.x8(s)},
Bh(a,b,c){var s=a.length
if(b>=s)return""
return A.AY(a,b,c==null||c>s?s:c)},
at(a,b){return new A.fl(a,A.vg(a,!1,b,!1,!1,""))},
El(a,b){return a==null?b==null:a===b},
vq(a,b,c){var s=J.U(b)
if(!s.l())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.l())}else{a+=A.q(s.gp())
while(s.l())a=a+c+A.q(s.gp())}return a},
vv(){var s,r,q=A.AT()
if(q==null)throw A.b(A.S("'Uri.base' is not supported"))
s=$.xr
if(s!=null&&q===$.xq)return s
r=A.di(q)
$.xr=r
$.xq=q
return r},
fJ(){return A.P(new Error())},
mE(a){var s=B.b.aR(a,1000),r=B.b.T(a-s,1000)
if(r<-864e13||r>864e13)A.w(A.ac(r,-864e13,864e13,"millisecondsSinceEpoch",null))
if(r===864e13&&s!==0)A.w(A.aX(s,"microsecond","Time including microseconds is outside valid range"))
A.bb(!1,"isUtc",t.y)
return new A.bc(r,s,!1)},
Ab(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wC(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ih(a){if(a>=10)return""+a
return"0"+a},
mH(a,b){return new A.aY(a+1000*b)},
ij(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aX(b,"name","No enum value with that name"))},
il(a){if(typeof a=="number"||A.kN(a)||a==null)return J.aW(a)
if(typeof a=="string")return JSON.stringify(a)
return A.x7(a)},
im(a,b){A.bb(a,"error",t.K)
A.bb(b,"stackTrace",t.l)
A.Ag(a,b)},
hX(a){return new A.hW(a)},
K(a,b){return new A.a6(!1,null,b,a)},
aX(a,b,c){return new A.a6(!0,a,b,c)},
hS(a,b){return a},
ay(a){var s=null
return new A.e5(s,s,!1,s,s,a)},
o7(a,b){return new A.e5(null,null,!0,a,b,"Value not in range")},
ac(a,b,c,d,e){return new A.e5(b,c,!0,a,d,"Invalid value")},
x9(a,b,c,d){if(a<b||a>c)throw A.b(A.ac(a,b,c,d,null))
return a},
aN(a,b,c){if(0>a||a>c)throw A.b(A.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ac(b,a,c,"end",null))
return b}return c},
aJ(a,b){if(a<0)throw A.b(A.ac(a,0,null,b,null))
return a},
wL(a,b){var s=b.b
return new A.fi(s,!0,a,null,"Index out of range")},
iv(a,b,c,d,e){return new A.fi(b,!0,a,e,"Index out of range")},
As(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.iv(a,b,c,d,e==null?"index":e))
return a},
S(a){return new A.fR(a)},
vu(a){return new A.js(a)},
E(a){return new A.b6(a)},
ap(a){return new A.ib(a)},
wE(a){return new A.jY(a)},
ak(a,b,c){return new A.aT(a,b,c)},
Ay(a,b,c){var s,r
if(A.w8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.v([],t.s)
$.dz.push(a)
try{A.Dd(a,s)}finally{$.dz.pop()}r=A.vq(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ny(a,b,c){var s,r
if(A.w8(a))return b+"..."+c
s=new A.Y(b)
$.dz.push(a)
try{r=s
r.a=A.vq(r.a,a,", ")}finally{$.dz.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Dd(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.q(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gp();++j
if(!l.l()){if(j<=4){b.push(A.q(p))
return}r=A.q(p)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.l();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
wW(a,b,c,d,e){return new A.cS(a,b.h("@<0>").G(c).G(d).G(e).h("cS<1,2,3,4>"))},
bH(a,b,c,d,e,f,g,h,i,j){var s
if(B.c===c)return A.xj(J.y(a),J.y(b),$.bU())
if(B.c===d){s=J.y(a)
b=J.y(b)
c=J.y(c)
return A.c4(A.F(A.F(A.F($.bU(),s),b),c))}if(B.c===e){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
return A.c4(A.F(A.F(A.F(A.F($.bU(),s),b),c),d))}if(B.c===f){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
return A.c4(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e))}if(B.c===g){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
f=J.y(f)
return A.c4(A.F(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e),f))}if(B.c===h){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
f=J.y(f)
g=J.y(g)
return A.c4(A.F(A.F(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e),f),g))}if(B.c===i){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
f=J.y(f)
g=J.y(g)
h=J.y(h)
return A.c4(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e),f),g),h))}if(B.c===j){s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
f=J.y(f)
g=J.y(g)
h=J.y(h)
i=J.y(i)
return A.c4(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e),f),g),h),i))}s=J.y(a)
b=J.y(b)
c=J.y(c)
d=J.y(d)
e=J.y(e)
f=J.y(f)
g=J.y(g)
h=J.y(h)
i=J.y(i)
j=J.y(j)
j=A.c4(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F(A.F($.bU(),s),b),c),d),e),f),g),h),i),j))
return j},
AR(a){var s,r,q=$.bU()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r)q=A.F(q,J.y(a[r]))
return A.c4(q)},
AS(a){var s,r,q,p,o
for(s=a.gA(a),r=0,q=0;s.l();){p=J.y(s.gp())
o=((p^p>>>16)>>>0)*569420461>>>0
o=((o^o>>>15)>>>0)*3545902487>>>0
r=r+((o^o>>>15)>>>0)&1073741823;++q}return A.xj(r,q,0)},
uU(a){var s=A.q(a),r=$.yr
if(r==null)A.wa(s)
else r.$1(s)},
di(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xp(a4<a4?B.a.t(a5,0,a4):a5,5,a3).gjN()
else if(s===32)return A.xp(B.a.t(a5,5,a4),0,a3).gjN()}r=A.b2(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.yz(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.yz(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.R(a5,"\\",n))if(p>0)h=B.a.R(a5,"\\",p-1)||B.a.R(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.R(a5,"..",n)))h=m>n+2&&B.a.R(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.R(a5,"file",0)){if(p<=0){if(!B.a.R(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.t(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.c6(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.R(a5,"http",0)){if(i&&o+3===n&&B.a.R(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.c6(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.R(a5,"https",0)){if(i&&o+4===n&&B.a.R(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.c6(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bl(a4<a5.length?B.a.t(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vM(a5,0,q)
else{if(q===0)A.eJ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.y1(a5,c,p-1):""
a=A.xZ(a5,p,o,!1)
i=o+1
if(i<n){a0=A.vm(B.a.t(a5,i,n),a3)
d=A.tH(a0==null?A.w(A.ak("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.y_(a5,n,m,a3,j,a!=null)
a2=m<l?A.y0(a5,m+1,l,a3):a3
return A.hD(j,b,a,d,a1,a2,l<a4?A.xY(a5,l+1,a4):a3)},
Bu(a){return A.vP(a,0,a.length,B.k,!1)},
jz(a,b,c){throw A.b(A.ak("Illegal IPv4 address, "+a,b,c))},
Br(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.jz("each part must be in the range 0..255",a,r)}A.jz("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.jz(k,a,q)}l=p+1
s&2&&A.C(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.jz(k,a,q)
p=l}A.jz("IPv4 address should contain exactly 4 parts",a,q)},
Bs(a,b,c){var s
if(b===c)throw A.b(A.ak("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Bt(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.xs(a,b,c)
return!0},
Bt(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.aT(o,a,r)
s=r
break}return new A.aT("Unexpected character",a,r-1)}if(s-1===b)return new A.aT(o,a,s)
return new A.aT("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.aT("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.aT("Invalid IPvFuture address character",a,s)}},
xs(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.pJ(a1)
if(a3-a2<2)a0.$2("address is too short",null)
s=new Uint8Array(16)
r=-1
q=0
if(a1.charCodeAt(a2)===58)if(a1.charCodeAt(a2+1)===58){p=a2+2
o=p
r=0
q=1}else{a0.$2("invalid start colon",a2)
p=a2
o=p}else{p=a2
o=p}for(n=0,m=!0;;){l=p>=a3?0:a1.charCodeAt(p)
A:{k=l^48
j=!1
if(k<=9)i=k
else{h=l|32
if(h>=97&&h<=102)i=h-87
else break A
m=j}if(p<o+4){n=n*16+i;++p
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Br(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.a1(n,8)
s[g+1]=n&255;++q
if(l===58){if(q<8){++p
o=p
n=0
m=!0
continue}a0.$2(a,p)}break}if(l===58){if(r<0){f=q+1;++p
r=q
q=f
o=p
continue}a0.$2("only one wildcard `::` is allowed",p)}if(r!==q-1)a0.$2("missing part",p)
break}if(p<a3)a0.$2("invalid character",p)
if(q<8){if(r<0)a0.$2("an address without a wildcard must contain exactly 8 parts",a3)
e=r+1
d=q-e
if(d>0){c=e*2
b=16-d*2
B.f.P(s,b,16,s,c)
B.f.fQ(s,c,b,0)}}return s},
hD(a,b,c,d,e,f,g){return new A.hC(a,b,c,d,e,f,g)},
xV(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
eJ(a,b,c){throw A.b(A.ak(c,a,b))},
Cs(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.U(q,"/")){s=A.S("Illegal path character "+q)
throw A.b(s)}}},
tH(a,b){if(a!=null&&a===A.xV(b))return null
return a},
xZ(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.eJ(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Ct(a,r,s)
if(p<s){o=p+1
q=A.y4(a,B.a.R(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Bs(a,r,s)
m=B.a.t(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bl(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.y4(a,B.a.R(a,"25",o)?s+3:o,c,"%25")}else q=""
A.xs(a,b,s)
return"["+B.a.t(a,b,s)+q+"]"}return A.Cw(a,b,c)},
Ct(a,b,c){var s=B.a.bl(a,"%",b)
return s>=b&&s<c?s:c},
y4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.Y(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.vN(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.Y("")
m=i.a+=B.a.t(a,r,s)
if(n)o=B.a.t(a,s,s+3)
else if(o==="%")A.eJ(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.Y("")
if(r<s){i.a+=B.a.t(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.t(a,r,s)
if(i==null){i=new A.Y("")
n=i}else n=i
n.a+=j
m=A.vL(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.t(a,b,c)
if(r<c){j=B.a.t(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Cw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.vN(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.Y("")
l=B.a.t(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.t(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.Y("")
if(r<s){q.a+=B.a.t(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.eJ(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.Y("")
m=q}else m=q
m.a+=l
k=A.vL(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.t(a,b,c)
if(r<c){l=B.a.t(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
vM(a,b,c){var s,r,q
if(b===c)return""
if(!A.xX(a.charCodeAt(b)))A.eJ(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.eJ(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.t(a,b,c)
return A.Cr(r?a.toLowerCase():a)},
Cr(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
y1(a,b,c){if(a==null)return""
return A.hE(a,b,c,16,!1,!1)},
y_(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.hE(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.K(s,"/"))s="/"+s
return A.Cv(s,e,f)},
Cv(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.K(a,"/")&&!B.a.K(a,"\\"))return A.vO(a,!s||c)
return A.dx(a)},
y0(a,b,c,d){if(a!=null)return A.hE(a,b,c,256,!0,!1)
return null},
xY(a,b,c){if(a==null)return null
return A.hE(a,b,c,256,!0,!1)},
vN(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.uz(s)
p=A.uz(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.aR(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.t(a,b,b+3).toUpperCase()
return null},
vL(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.ms(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.bM(s,0,null)},
hE(a,b,c,d,e,f){var s=A.y3(a,b,c,d,e,f)
return s==null?B.a.t(a,b,c):s},
y3(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.vN(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.eJ(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.vL(o)}if(p==null){p=new A.Y("")
l=p}else l=p
l.a=(l.a+=B.a.t(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.t(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
y2(a){if(B.a.K(a,"."))return!0
return B.a.cA(a,"/.")!==-1},
dx(a){var s,r,q,p,o,n
if(!A.y2(a))return a
s=A.v([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.d.bI(s,"/")},
vO(a,b){var s,r,q,p,o,n
if(!A.y2(a))return!b?A.xW(a):a
s=A.v([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.d.gaO(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.xW(s[0])
return B.d.bI(s,"/")},
xW(a){var s,r,q=a.length
if(q>=2&&A.xX(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.t(a,0,s)+"%3A"+B.a.a0(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Cx(a,b){if(a.ei("package")&&a.c==null)return A.yB(b,0,b.length)
return-1},
Cu(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.K("Invalid URL encoding",null))}}return s},
vP(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.t(a,b,c)
else p=new A.br(B.a.t(a,b,c))
else{p=A.v([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.K("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.K("Truncated URI",null))
p.push(A.Cu(a,o+1))
o+=2}else p.push(r)}}return d.aG(p)},
xX(a){var s=a|32
return 97<=s&&s<=122},
xp(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.v([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.ak(k,a,r))}}if(q<0&&r>b)throw A.b(A.ak(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.d.gaO(j)
if(p!==44||r!==n+7||!B.a.R(a,"base64",n+1))throw A.b(A.ak("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ax.ov(a,m,s)
else{l=A.y3(a,m,s,256,!0,!1)
if(l!=null)a=B.a.c6(a,m,s,l)}return new A.pI(a,j,c)},
yz(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
xO(a){if(a.b===7&&B.a.K(a.a,"package")&&a.c<=0)return A.yB(a.a,a.e,a.f)
return-1},
yB(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
yd(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(){},
qP:function qP(){},
jZ:function jZ(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a},
rp:function rp(){},
W:function W(){},
hW:function hW(a){this.a=a},
c5:function c5(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fi:function fi(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fR:function fR(a){this.a=a},
js:function js(a){this.a=a},
b6:function b6(a){this.a=a},
ib:function ib(a){this.a=a},
iX:function iX(){},
fI:function fI(){},
jY:function jY(a){this.a=a},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(){},
n:function n(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
G:function G(){},
k:function k(){},
kx:function kx(){},
Y:function Y(a){this.a=a},
pJ:function pJ(a){this.a=a},
hC:function hC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
jV:function jV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
ip:function ip(a){this.a=a},
yf(a,b,c,d){if(a)return""+d+"-"+c+"-begin"
if(b)return""+d+"-"+c+"-end"
return c},
yq(a){var s=$.eM.i(0,a)
if(s==null)return a
return a+"-"+A.q(s)},
CO(a){var s,r
if(!$.eM.H(a))return
s=$.eM.i(0,a)
s.toString
r=s-1
s=$.eM
if(r<=0)s.I(0,a)
else s.m(0,a,r)},
FS(a,b,c,d,e){var s,r,q,p,o,n
if(c===9||c===11||c===10)return
if($.eO>1e4&&$.eM.a===0){$.kY().clearMarks()
$.kY().clearMeasures()
$.eO=0}s=c===1||c===5
r=c===2||c===7
q=A.yf(s,r,d,a)
if(s){p=$.eM.i(0,q)
if(p==null)p=0
$.eM.m(0,q,p+1)
q=A.yq(q)}o=$.kY()
o.toString
o.mark(q,$.zx().parse(e))
$.eO=$.eO+1
if(r){n=A.yf(!0,!1,d,a)
o=$.kY()
o.toString
o.measure(d,A.yq(n),q)
$.eO=$.eO+1
A.CO(n)}B.b.mZ($.eO,0,10001)},
FF(a){if(a==null||a.a===0)return"{}"
return B.h.bi(a)},
u2:function u2(){},
u0:function u0(){},
vz:function vz(a,b){this.a=a
this.b=b},
yP(){return v.G},
AJ(a){return a},
AB(a){return a},
AD(a){return a},
vr(a){return a},
wI(a){return new v.G.Promise(A.b8(new A.mS(a)))},
iV:function iV(a){this.a=a},
mS:function mS(a){this.a=a},
mQ:function mQ(a){this.a=a},
mR:function mR(a){this.a=a},
u_(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.CF,a)
s[$.dE()]=a
return s},
bC(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.CG,a)
s[$.dE()]=a
return s},
b8(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.CH,a)
s[$.dE()]=a
return s},
kM(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.CI,a)
s[$.dE()]=a
return s},
eN(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.CJ,a)
s[$.dE()]=a
return s},
vX(a){var s
if(typeof a=="function")throw A.b(A.K("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.CK,a)
s[$.dE()]=a
return s},
CF(a){return a.$0()},
CG(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
CH(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
CI(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
CJ(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
CK(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
yn(a){return a==null||A.kN(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.i7.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
Ex(a){if(A.yn(a))return a
return new A.uE(new A.ds(t.mp)).$1(a)},
ux(a,b){return a[b]},
yI(a,b,c){return a[b].apply(a,c)},
E1(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.d.ac(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
aq(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.ad(s,b.h("ad<0>"))
a.then(A.cK(new A.uV(r),1),A.cK(new A.uW(r),1))
return s},
uE:function uE(a){this.a=a},
uV:function uV(a){this.a=a},
uW:function uW(a){this.a=a},
yT(a,b){return Math.max(a,b)},
AZ(){return B.aP},
rV:function rV(){},
rW:function rW(a){this.a=a},
ik:function ik(a,b){this.a=a
this.b=b},
fV:function fV(a){this.a=a},
fK:function fK(a,b,c){var _=this
_.a=$
_.b=!1
_.c=a
_.e=b
_.$ti=c},
oD:function oD(){},
oE:function oE(a,b){this.a=a
this.b=b},
oC:function oC(){},
oB:function oB(a){this.a=a},
oA:function oA(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
V:function V(){},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a){this.a=a},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(){},
iL:function iL(a){this.$ti=a},
eI:function eI(){},
da:function da(a){this.$ti=a},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.$ti=a},
wY(){throw A.b(A.S(u.O))},
iT:function iT(){},
jv:function jv(){},
Fb(a){return new A.cs("Request aborted by `abortTrigger`",a)},
l4:function l4(){},
cs:function cs(a,b){this.a=a
this.b=b},
i_:function i_(){},
i0:function i0(){},
lh:function lh(){},
li:function li(){},
lj:function lj(){},
yD(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.cs("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.bV)){s=J.aW(a)
if(B.a.K(s,"TypeError: "))s=B.a.a0(s,11)
a=new A.bV(s,b.b)}return a},
yt(a,b,c){A.im(A.yD(a,c),b)},
CE(a,b){return new A.bB(!1,new A.tR(a,b),t.fb)},
eQ(a,b,c){return A.Dn(a,b,c)},
Dn(a0,a1,a2){var s=0,r=A.i(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$eQ=A.d(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:d={}
c=a1.body
b=c==null?null:c.getReader()
s=b==null?3:4
break
case 3:s=5
return A.c(a2.n(),$async$eQ)
case 5:s=1
break
case 4:d.a=null
d.b=d.c=!1
a2.f=new A.u3(d)
a2.r=new A.u4(d,b,a0)
c=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.c(A.aq(b.read(),k),$async$eQ)
case 12:n=a4
p=2
s=11
break
case 9:p=8
a=o.pop()
m=A.I(a)
l=A.P(a)
s=!d.c?13:14
break
case 13:d.b=!0
c=A.yD(m,a0)
k=l
j=a2.b
if(j>=4)A.w(a2.am())
if((j&1)!==0){g=a2.a
if((j&8)!==0)g=g.c
g.a7(c,k==null?B.r:k)}s=15
return A.c(a2.n(),$async$eQ)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a2.j2()
s=7
break}else{f=n.value
f.toString
c.a(f)
e=a2.b
if(e>=4)A.w(a2.am())
if((e&1)!==0){g=a2.a;((e&8)!==0?g.c:g).M(f)}}f=a2.b
if((f&1)!==0){g=a2.a
e=(((f&8)!==0?g.c:g).e&4)!==0
f=e}else f=(f&2)===0
s=f?16:17
break
case 16:f=d.a
s=18
return A.c((f==null?d.a=new A.ad(new A.l($.m,j),i):f).a,$async$eQ)
case 18:case 17:if((a2.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eQ,r)},
i4:function i4(a){this.b=!1
this.c=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
tR:function tR(a,b){this.a=a
this.b=b},
u3:function u3(a){this.a=a},
u4:function u4(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
lx:function lx(a){this.a=a},
wz(a,b){return new A.bV(a,b)},
bV:function bV(a,b){this.a=a
this.b=b},
v5(a,b,c){var s=new Uint8Array(0),r=$.z7()
if(!r.b.test(a))A.w(A.aX(a,"method","Not a valid method"))
r=t.N
return new A.hR(c,s,a,b,A.vj(new A.lh(),new A.li(),r,r))},
oj:function oj(){},
hR:function hR(a,b,c,d,e){var _=this
_.cx=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
jH:function jH(){},
j6(a){var s=0,r=A.i(t.Y),q,p,o,n,m,l,k,j
var $async$j6=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(a.w.hc(),$async$j6)
case 3:p=c
o=a.b
n=a.a
m=a.e
l=a.c
k=A.z4(p)
j=p.length
k=new A.e7(k,n,o,l,j,m,!1,!0)
k.eO(o,j,m,!1,!0,l,n)
q=k
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j6,r)},
vS(a){var s=a.i(0,"content-type")
if(s!=null)return A.wX(s)
return A.nL("application","octet-stream",null)},
e7:function e7(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
Bg(a,b,c,d,e,f,g,h){var s=new A.cw(A.z3(a),h,b,g,c,d,!1,!0)
s.eO(b,c,d,!1,!0,g,h)
return s},
cw:function cw(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
jm:function jm(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
zV(a){return a.toLowerCase()},
f_:function f_(a,b,c){this.a=a
this.c=b
this.$ti=c},
wX(a){return A.EV("media type",a,new A.nM(a))},
nL(a,b,c){var s=t.N
if(c==null)s=A.a2(s,s)
else{s=new A.f_(A.E2(),A.a2(s,t.gc),t.kj)
s.ac(0,c)}return new A.fu(a.toLowerCase(),b.toLowerCase(),new A.dh(s,t.oP))},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
nM:function nM(a){this.a=a},
nO:function nO(a){this.a=a},
nN:function nN(){},
Ef(a){var s
a.jd($.zA(),"quoted string")
s=a.gh0().i(0,0)
return A.z0(B.a.t(s,1,s.length-1),$.zz(),new A.ut(),null)},
ut:function ut(){},
cp:function cp(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.r=e
_.w=f},
vl(a){return $.AL.cG(a,new A.nH(a))},
wV(a,b,c){var s=new A.dY(a,b,c)
if(b==null)s.c=B.l
else b.d.m(0,a,s)
return s},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.f=null},
nH:function nH(a){this.a=a},
yp(a){return a},
yE(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.Y("")
o=a+"("
p.a=o
n=A.a8(b)
m=n.h("dc<1>")
l=new A.dc(b,0,s,m)
l.kW(b,0,s,n.c)
m=o+new A.ab(l,new A.ul(),m.h("ab<X.E,j>")).bI(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.K(p.j(0),null))}},
m_:function m_(a){this.a=a},
m0:function m0(){},
m1:function m1(){},
ul:function ul(){},
nv:function nv(){},
iY(a,b){var s,r,q,p,o,n=b.kr(a)
b.bH(a)
if(n!=null)a=B.a.a0(a,n.length)
s=t.s
r=A.v([],s)
q=A.v([],s)
s=a.length
if(s!==0&&b.bm(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bm(a.charCodeAt(o))){r.push(B.a.t(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.a0(a,p))
q.push("")}return new A.nU(b,n,r,q)},
nU:function nU(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
wZ(a){return new A.iZ(a)},
iZ:function iZ(a){this.a=a},
Bi(){var s,r,q,p,o,n,m,l,k=null
if(A.vv().gaz()!=="file")return $.hN()
if(!B.a.bF(A.vv().gaP(),"/"))return $.hN()
s=A.y1(k,0,0)
r=A.xZ(k,0,0,!1)
q=A.y0(k,0,0,k)
p=A.xY(k,0,0)
o=A.tH(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.y_("a/b",0,3,k,"",m)
if(n&&!B.a.K(l,"/"))l=A.vO(l,m)
else l=A.dx(l)
if(A.hD("",s,n&&B.a.K(l,"//")?"":r,o,l,q,p).hd()==="a\\b")return $.kW()
return $.zb()},
p7:function p7(){},
nV:function nV(a,b,c){this.d=a
this.e=b
this.f=c},
pK:function pK(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qd:function qd(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
wq(){var s=$.m,r=t.D,q=t.h,p=new A.ad(new A.l(s,r),q),o=A.bu(t.oh)
o.q(0,p)
return new A.hQ(p,o,new A.ad(new A.l(s,r),q))},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bq(a){switch(a){case"PUT":return B.bU
case"PATCH":return B.bT
case"DELETE":return B.bS
default:return null}},
f6:function f6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fT:function fT(a,b,c){this.c=a
this.a=b
this.b=c},
EG(a){var s=a.$ti.h("aL<D.T,bf>"),r=s.h("cf<D.T>")
return new A.cT(new A.cf(new A.uS(),new A.aL(new A.uT(),a,s),r),r.h("cT<D.T,L>"))},
uT:function uT(){},
uS:function uS(){},
v8(a){return new A.f5(a)},
p8(a){return A.Bk(a)},
Bk(a){var s=0,r=A.i(t.jM),q,p=2,o=[],n,m,l,k
var $async$p8=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.c(B.k.n7(a.w),$async$p8)
case 7:n=c
m=A.xg(a,n)
q=m
s=1
break
p=2
s=6
break
case 4:p=3
k=o.pop()
if(t.L.b(A.I(k))){q=A.xh(a)
s=1
break}else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$p8,r)},
xi(a){var s,r,q
try{s=A.w4(A.vS(a.e)).aG(a.w)
r=A.xg(a,s)
return r}catch(q){if(t.L.b(A.I(q)))return A.xh(a)
else throw q}},
xg(a,b){var s,r,q=J.eX(B.h.c3(b,null),"error")
A:{if(t.f.b(q)){s=A.Bj(q)
break A}s=null
break A}r=s==null?b:s
s=a.c
if(s==null)s="Request failed"
return new A.dd(a.b,s+": "+r)},
xh(a){var s=a.c
if(s==null)s="Request failed"
return new A.dd(a.b,s)},
Bj(a){var s,r=a.i(0,"code"),q=a.i(0,"description"),p=a.i(0,"name"),o=a.i(0,"details")
if(typeof r!="string"||typeof q!="string")return null
s=(typeof p=="string"?r+("("+p+")"):r)+": "+q
if(typeof o=="string")s=s+", "+o
return s.charCodeAt(0)==0?s:s},
f5:function f5(a){this.a=a},
e3:function e3(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
Df(){var s=A.wV("PowerSync",null,A.a2(t.N,t.I))
if(s.b!=null)A.w(A.S('Please set "hierarchicalLoggingEnabled" to true if you want to change the level on a non-root logger.'))
J.z(s.c,B.t)
s.c=B.t
s.fa().O(new A.u1())
return s},
u1:function u1(){},
d0:function d0(a){this.a=a},
vW(a){var s,r,q,p=A.bu(t.N)
for(s=a.gA(a);s.l();){r=s.gp()
q=A.Eh(r)
if(q!=null)p.q(0,q)
else if(!B.a.K(r,"ps_"))p.q(0,r)}return p},
bf:function bf(a){this.a=a},
i5(a,b){var s=0,r=A.i(t.G),q
var $async$i5=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(a.aw(b,B.o),$async$i5)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$i5,r)},
lr(a){var s=0,r=A.i(t.N),q,p
var $async$lr=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.i5(a,"SELECT powersync_client_id() as client_id"),$async$lr)
case 3:p=c
q=A.an(p.gae(p).i(0,"client_id"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$lr,r)},
v6(a,b,c,d){return a.mM(new A.lv(b,d),c,d)},
dI(a,b){var s=0,r=A.i(t.y),q,p,o,n,m
var $async$dI=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(a.oH(new A.lt(),t.T),$async$dI)
case 3:if(d!=="9223372036854775807"){q=!1
s=1
break}s=4
return A.c(A.i5(a,u.B),$async$dI)
case 4:p=d
if(p.gk(0)===0){q=!1
s=1
break}o=a
n=A
m=A.R(p.gae(p).i(0,"seq"))
s=6
return A.c(b.$0(),$async$dI)
case 6:s=5
return A.c(o.b_(new n.lu(m,d),t.y),$async$dI)
case 5:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dI,r)},
ls(a){var s=0,r=A.i(t.d_),q,p,o,n,m,l,k,j,i,h,g
var $async$ls=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(a.kn("SELECT * FROM ps_crud ORDER BY id ASC LIMIT 1"),$async$ls)
case 3:g=c
if(g==null)p=null
else{o=B.h.c3(A.an(g.i(0,"data")),null)
p=A.R(g.i(0,"id"))
n=J.a4(o)
m=A.Bq(A.an(n.i(o,"op")))
m.toString
l=A.an(n.i(o,"type"))
k=A.an(n.i(o,"id"))
j=A.R(g.i(0,"tx_id"))
i=t.h9
h=i.a(n.i(o,"data"))
i=i.a(n.i(o,"old"))
i=new A.f6(p,j,m,l,k,A.kJ(n.i(o,"metadata")),h,i)
p=i}q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ls,r)},
lp(a,b,c){var s=0,r=A.i(t.N),q
var $async$lp=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.c(a.b_(new A.lq(b,c),t.N),$async$lp)
case 3:q=e
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$lp,r)},
j0(a,b,c){var s=0,r=A.i(t.T),q,p
var $async$j0=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.c(a.bw("SELECT CAST(powersync_control(?, ?) AS TEXT)",[b,c]),$async$j0)
case 3:q=p.kJ(e.b[0])
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j0,r)},
d5(a,b,c){var s=0,r=A.i(t.T),q
var $async$d5=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.c(A.j0(a,b+"_checkpoint_request_id",c),$async$d5)
case 3:q=e
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$d5,r)},
nX(a){var s=0,r=A.i(t.N),q,p
var $async$nX=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.d5(a,"next",null),$async$nX)
case 3:p=c
p.toString
q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$nX,r)},
lv:function lv(a,b){this.a=a
this.b=b},
lt:function lt(){},
lu:function lu(a,b){this.a=a
this.b=b},
lq:function lq(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
lH:function lH(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a,b){this.a=a
this.b=b},
cb:function cb(){},
hm:function hm(){},
em:function em(a){this.a=a},
h8:function h8(){},
Au(a){return A.At(a)},
At(a){var s,r,q,p,o,n,m,l="UpdateSyncStatus",k="EstablishSyncStream",j="FetchCredentials",i="CloseSyncStream",h="DidCompleteSync"
A:{s=a.i(0,"LogLine")
if(s==null)r=a.H("LogLine")
else r=!0
if(r){t.f.a(s)
r=new A.fr(A.an(s.i(0,"severity")),A.an(s.i(0,"line")))
break A}q=a.i(0,l)
if(q==null)r=a.H(l)
else r=!0
if(r){r=t.f
r=new A.fS(A.A8(r.a(r.a(q).i(0,"status"))))
break A}p=a.i(0,k)
if(p==null)r=a.H(k)
else r=!0
if(r){r=A.Ah(t.f.a(p))
break A}o=a.i(0,j)
if(o==null)r=a.H(j)
else r=!0
if(r){r=new A.fd(A.aV(t.f.a(o).i(0,"did_expire")))
break A}n=a.i(0,i)
if(n==null)r=a.H(i)
else r=!0
if(r){t.f.a(n)
r=new A.dL(A.aV(n.i(0,"hide_disconnect")))
break A}m=a.i(0,h)
if(m==null)r=a.H(h)
else r=!0
if(r){r=B.az
break A}r=new A.fQ(a)
break A}return r},
Ah(a){var s=t.f,r=s.a(a.i(0,"request")),q=a.i(0,"checkpoint_request")
A:{if(q==null){s=null
break A}s.a(q)
s=new A.lG(A.an(q.i(0,"client_id")),A.an(q.i(0,"checkpoint_request_id")))
break A}return new A.dQ(r,s)},
A8(a){var s,r,q,p,o,n=A.aV(a.i(0,"connected")),m=A.aV(a.i(0,"connecting")),l=A.v([],t.cH)
for(s=J.U(t.j.a(a.i(0,"priority_status"))),r=t.f;s.l();)l.push(A.A9(r.a(s.gp())))
q=a.i(0,"downloading")
A:{if(q==null){s=null
break A}s=A.Ac(r.a(q))
break A}r=J.dG(t.ia.a(a.i(0,"streams")),new A.m4(),t.em)
r=A.as(r,r.$ti.h("X.E"))
p=A.kJ(a.i(0,"internal_last_applied_checkpoint_request_id"))
B:{if(p==null){o=null
break B}o=new A.d0(v.G.BigInt(p))
break B}return new A.m3(n,m,l,s,r,o)},
A9(a){var s,r=A.R(a.i(0,"priority")),q=A.vQ(a.i(0,"has_synced")),p=a.i(0,"last_synced_at")
A:{if(p==null){s=null
break A}s=A.mE(A.R(p))
break A}return new A.kk(q,s,r)},
Ac(a){return new A.mF(t.f.a(a.i(0,"buckets")).cE(0,new A.mG(),t.N,t.cV))},
fr:function fr(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
lG:function lG(a,b){this.a=a
this.b=b},
fS:function fS(a){this.a=a},
m3:function m3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
m4:function m4(){},
mF:function mF(a){this.a=a},
mG:function mG(){},
fd:function fd(a){this.a=a},
dL:function dL(a){this.a=a},
f9:function f9(){},
fQ:function fQ(a){this.a=a},
qU:function qU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){var _=this
_.d=_.c=_.b=_.a=!1
_.e=null
_.f=a
_.z=_.y=_.x=_.w=_.r=null},
nP:function nP(){},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
B2(a){var s=a.a
return s==null?B.L:s},
B3(a){var s=a.b
return s==null?B.K:s},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lF:function lF(){},
fo:function fo(){},
d8:function d8(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
A7(a){var s,r,q,p,o,n,m,l,k,j,i=A.an(a.i(0,"name")),h=t.h9.a(a.i(0,"parameters")),g=A.yb(a.i(0,"priority"))
A:{if(g!=null){s=g
break A}s=2147483647
break A}r=t.f.a(a.i(0,"progress"))
q=A.R(r.i(0,"total"))
r=A.R(r.i(0,"downloaded"))
p=A.aV(a.i(0,"active"))
o=A.aV(a.i(0,"is_default"))
n=A.aV(a.i(0,"has_explicit_subscription"))
m=a.i(0,"expires_at")
B:{if(m==null){l=null
break B}l=A.mE(A.R(m))
break B}k=a.i(0,"last_synced_at")
C:{if(k==null){j=null
break C}j=A.mE(A.R(k))
break C}return new A.dO(i,h,s,new A.kf(r,q),p,o,n,l,j)},
dO:function dO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
yU(a,b){var s=null,r={},q=A.bL(s,s,s,s,!0,b)
r.a=null
r.b=!1
q.d=new A.uM(r,a,q,b)
q.r=new A.uN(r)
q.e=new A.uO(r)
q.f=new A.uP(r)
return new A.a7(q,A.p(q).h("a7<1>"))},
EF(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r)a[r].ah()},
EJ(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r)a[r].aj()},
kP(a){var s=0,r=A.i(t.H)
var $async$kP=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.c(A.mW(new A.ab(a,new A.uo(),A.a8(a).h("ab<1,o<~>>")),t.H),$async$kP)
case 2:return A.f(null,r)}})
return A.h($async$kP,r)},
EM(a,b){var s=null,r={},q=A.bL(s,s,s,s,!0,b)
r.a=!1
q.r=new A.v0(r,a.b8(new A.v1(q,b),new A.v2(r,q),t.P))
return new A.a7(q,A.p(q).h("a7<1>"))},
Bv(a,b,c,d,e,f){var s=new A.l($.m,t.D),r=new A.ad(s,t.h),q=a.O(null),p=new A.pL(e,r,q,f)
q.bq(p)
p.$1(c)
b.J(new A.pM(r,d,q))
return s},
BP(a){return new A.el(a,new DataView(new ArrayBuffer(4)))},
uM:function uM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uL:function uL(a,b,c){this.a=a
this.b=b
this.c=c},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a,b){this.a=a
this.b=b},
uN:function uN(a){this.a=a},
uO:function uO(a){this.a=a},
uP:function uP(a){this.a=a},
uo:function uo(){},
v1:function v1(a,b){this.a=a
this.b=b},
v2:function v2(a,b){this.a=a
this.b=b},
v0:function v0(a,b){this.a=a
this.b=b},
pL:function pL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.c=4
_.d=null},
vT(a){var s,r={},q=new A.l($.m,t.D)
r.a=null
s=new A.tX(r,new A.O(q,t.F))
r.a=A.pv(a,s)
return new A.a3(q,s)},
DD(a){var s="Sync service error"
if(a instanceof A.bV)return s
else if(a instanceof A.dd)if(a.a===401)return"Authorization error"
else return s
else if(a instanceof A.a6||t.lW.b(a))return"Configuration error"
else if(a instanceof A.f5)return"Credentials error"
else if(a instanceof A.e3)return"Protocol error"
else return J.wn(a).j(0)+": "+A.q(a)},
B0(a){return new A.cr(a)},
vV(a,b){if((a.a.a.a&30)===0)return!1
return b instanceof A.bV||b instanceof A.ci},
oP:function oP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=null
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=null},
p5:function p5(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
oY:function oY(a){this.a=a},
oZ:function oZ(a){this.a=a},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(){},
oS:function oS(){},
oT:function oT(a,b){this.a=a
this.b=b},
oU:function oU(a){this.a=a},
oV:function oV(){},
p4:function p4(a){this.a=a},
p3:function p3(){},
p_:function p_(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b){this.a=a
this.b=b},
p0:function p0(a,b){this.a=a
this.b=b},
p1:function p1(){},
oW:function oW(a,b){this.a=a
this.b=b},
tX:function tX(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b
this.c=!1},
qp:function qp(){},
qw:function qw(a){this.a=a},
qv:function qv(a){this.a=a},
qu:function qu(){},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
qs:function qs(a){this.a=a},
qt:function qt(){},
dN:function dN(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
fU:function fU(){},
fP:function fP(){},
fg:function fg(a){this.a=a},
f1:function f1(a,b){this.a=a
this.b=b},
Av(a){var s=A.p(a).h("be<2>"),r=t.S,q=s.h("n.E")
return new A.iz(a,A.wN(A.ft(new A.be(a,s),new A.nw(),q,r)),A.wN(A.ft(new A.be(a,s),new A.nx(),q,r)))},
cx:function cx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
ph:function ph(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.c=a
this.a=b
this.b=c},
nw:function nw(){},
nx:function nx(){},
o_:function o_(){},
Ce(a,b){var s=null,r=new A.km(a,b,A.bL(s,s,s,s,!0,t.p))
r.l3(a,b)
return r},
e6:function e6(a){this.a=a
this.b=0},
oi:function oi(a,b){this.a=a
this.b=b},
km:function km(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
ta:function ta(a){this.a=a},
Fa(a){var s
if(t.p.b(a)){s=B.f.gao(a)
if(a.byteOffset===0&&J.zM(s)===a.length)return t.a.a(s)}return t.a.a(B.f.gao(new Uint8Array(A.vU(a))))},
vn:function vn(a){this.a=a},
vH:function vH(a){this.a=!1
this.b=a
this.c=null},
A5(a,b){var s=new A.cj(b)
s.kS(a,b)
return s},
Bl(a){var s=null,r=new A.fK(B.ar,A.a2(t.ir,t.mQ),t.a9),q=t.pp
r.a=A.bL(r.gmw(),r.gm0(),r.gmx(),r.gmz(),!0,q)
q=new A.ed(a,new A.fN(s,s,s,s,B.O,s,s,s),r,A.bL(s,s,s,s,!1,q),A.a2(t.hM,t.eL),A.v([],t.bN))
q.kX(a)
return q},
pi:function pi(a){this.a=a},
pj:function pj(a){this.a=a},
cj:function cj(a){var _=this
_.a=$
_.b=a
_.d=_.c=null},
lX:function lX(a){this.a=a},
lW:function lW(a){this.a=a},
lY:function lY(a){this.a=a},
ed:function ed(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c="{}"
_.d=c
_.e=d
_.w=_.r=_.f=null
_.x=e
_.y=f},
pf:function pf(a){this.a=a},
p9:function p9(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
h7:function h7(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
xo(a){var s=a.content
s=B.d.aY(s,new A.pH(),t.E)
s=A.as(s,s.$ti.h("X.E"))
return s},
xb(a){var s,r,q=a.endpoint,p=a.token,o=a.userId
if(o==null)o=null
if(a.expiresAt==null)s=null
else{s=a.expiresAt
s.toString
s=A.mE(A.R(s))}r=A.di(q)
if(!r.ei("http")&&!r.ei("https")||r.gbG().length===0)A.w(A.aX(q,"PowerSync endpoint must be a valid URL",null))
return new A.bI(q,p,o,s)},
Bb(a){var s,r,q,p=A.v([],t.W)
for(s=new A.ax(a,A.p(a).h("ax<1,2>")).gA(0);s.l();){r=s.d
q=r.a
r=r.b.a
p.push({name:q,priority:r[1],atLast:r[0],sinceLast:r[2],targetCount:r[3]})}return p},
xc(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=a.f
g=g==null?h:1000*g.a+g.b
s=a.w
s=s==null?h:J.aW(s)
r=a.x
r=r==null?h:J.aW(r)
q=A.v([],t.fT)
for(p=J.U(a.y);p.l();){o=p.gp()
n=o.c
m=o.b
m=m==null?h:1000*m.a+m.b
l=o.a
q.push([n,m,l==null?h:l])}k=a.d
A:{if(k==null){p=h
break A}p=A.Bb(k.c)
break A}n=B.h.bi(a.z)
j=a.Q
B:{if(j==null){m=h
break B}i=j.a
m=i
break B}return{connected:a.a,connecting:a.b,downloading:a.c,uploading:a.e,lastSyncedAt:g,hasSyned:a.r,uploadError:s,downloadError:r,priorityStatusEntries:q,syncProgress:p,streamSubscriptions:n,lastAppliedCheckpoint:m}},
Bx(a,b){var s=null,r=$.m,q=A.bL(s,s,s,s,!1,t.l4),p=$.wi()
r=new A.jF(A.a2(t.S,t.kn),new A.ad(new A.l(r,t.D),t.h),a,b,q,p,s)
r.kZ(s,s,s,a,b)
return r},
am:function am(a,b){this.a=a
this.b=b},
pH:function pH(){},
jF:function jF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=!1
_.r=_.f=null
_.x=c
_.y=d
_.z=e
_.Q=f
_.as=g},
qi:function qi(a){this.a=a},
qe:function qe(){},
qf:function qf(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(){},
Ez(){var s=null,r=v.G,q=r.location.href,p=t.m,o=A.bL(s,s,s,s,!0,p),n=t.cj
new A.qj(new A.rq(new A.nY(new A.rn(q)),new A.a7(o,A.p(o).h("a7<1>"))),new A.nW(),A.v([],t.az),A.a2(t.S,t.lp),new A.e_(A.nF(n)),new A.e_(A.nF(n))).cw()
if($.zv())A.aD(r,"connect",new A.uF(new A.uH(new A.uG(new A.pi(A.a2(t.N,t.mO)),o))),!1,p)
else A.aD(r,"message",o.gc2(o),!1,p)},
uG:function uG(a,b){this.a=a
this.b=b},
uH:function uH(a){this.a=a},
uF:function uF(a){this.a=a},
rq:function rq(a,b){this.a=a
this.b=b},
nW:function nW(){},
nY:function nY(a){this.a=a},
vb(a,b){if(b<0)A.w(A.ay("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.w(A.ay("Offset "+b+u.D+a.gk(0)+"."))
return new A.is(a,b)},
os:function os(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
is:function is(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
Ao(a,b){var s=A.Ap(A.v([A.BV(a,!0)],t.g7)),r=new A.nl(b).$0(),q=B.b.j(B.d.gaO(s).b+1),p=A.Aq(s)?0:3,o=A.a8(s)
return new A.n1(s,r,null,1+Math.max(q.length,p),new A.ab(s,new A.n3(),o.h("ab<1,a>")).oI(0,B.aw),!A.Eu(new A.ab(s,new A.n4(),o.h("ab<1,k?>"))),new A.Y(""))},
Aq(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.z(r.c,q.c))return!1}return!0},
Ap(a){var s,r,q=A.Ek(a,new A.n6(),t.nf,t.K)
for(s=new A.bd(q,q.r,q.e);s.l();)J.wo(s.d,new A.n7())
s=A.p(q).h("ax<1,2>")
r=s.h("fc<n.E,bA>")
s=A.as(new A.fc(new A.ax(q,s),new A.n8(),r),r.h("n.E"))
return s},
BV(a,b){var s=new A.rN(a).$0()
return new A.aP(s,!0,null)},
BX(a){var s,r,q,p,o,n,m=a.gaf()
if(!B.a.U(m,"\r\n"))return a
s=a.gC().ga6()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gF()
p=a.gL()
o=a.gC().gW()
p=A.jc(s,a.gC().ga5(),o,p)
o=A.hM(m,"\r\n","\n")
n=a.gaF()
return A.ot(r,p,o,A.hM(n,"\r\n","\n"))},
BY(a){var s,r,q,p,o,n,m
if(!B.a.bF(a.gaF(),"\n"))return a
if(B.a.bF(a.gaf(),"\n\n"))return a
s=B.a.t(a.gaF(),0,a.gaF().length-1)
r=a.gaf()
q=a.gF()
p=a.gC()
if(B.a.bF(a.gaf(),"\n")){o=A.uu(a.gaF(),a.gaf(),a.gF().ga5())
o.toString
o=o+a.gF().ga5()+a.gk(a)===a.gaF().length}else o=!1
if(o){r=B.a.t(a.gaf(),0,a.gaf().length-1)
if(r.length===0)p=q
else{o=a.gC().ga6()
n=a.gL()
m=a.gC().gW()
p=A.jc(o-1,A.xG(s),m-1,n)
q=a.gF().ga6()===a.gC().ga6()?p:a.gF()}}return A.ot(q,p,r,s)},
BW(a){var s,r,q,p,o
if(a.gC().ga5()!==0)return a
if(a.gC().gW()===a.gF().gW())return a
s=B.a.t(a.gaf(),0,a.gaf().length-1)
r=a.gF()
q=a.gC().ga6()
p=a.gL()
o=a.gC().gW()
p=A.jc(q-1,s.length-B.a.cD(s,"\n")-1,o-1,p)
return A.ot(r,p,s,B.a.bF(a.gaF(),"\n")?B.a.t(a.gaF(),0,a.gaF().length-1):a.gaF())},
xG(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ej(a,"\n",s-2)-1
else return s-B.a.cD(a,"\n")-1},
n1:function n1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nl:function nl(a){this.a=a},
n3:function n3(){},
n2:function n2(){},
n4:function n4(){},
n6:function n6(){},
n7:function n7(){},
n8:function n8(){},
n5:function n5(a){this.a=a},
nm:function nm(){},
n9:function n9(a){this.a=a},
ng:function ng(a,b,c){this.a=a
this.b=b
this.c=c},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a){this.a=a},
nj:function nj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(a,b){this.a=a
this.b=b},
na:function na(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nb:function nb(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function nd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a){this.a=a},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc(a,b,c,d){if(a<0)A.w(A.ay("Offset may not be negative, was "+a+"."))
else if(c<0)A.w(A.ay("Line may not be negative, was "+c+"."))
else if(b<0)A.w(A.ay("Column may not be negative, was "+b+"."))
return new A.bx(d,a,c,b)},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(){},
jf:function jf(){},
Be(a,b,c){return new A.e9(c,a,b)},
jg:function jg(){},
e9:function e9(a,b,c){this.c=a
this.a=b
this.b=c},
ea:function ea(){},
ot(a,b,c,d){var s=new A.c3(d,a,b,c)
s.kV(a,b,c)
if(!B.a.U(d,c))A.w(A.K('The context line "'+d+'" must contain "'+c+'".',null))
if(A.uu(d,c,a.ga5())==null)A.w(A.K('The span text "'+c+'" must start at column '+(a.ga5()+1)+' in a line within "'+d+'".',null))
return s},
c3:function c3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Bf(a){var s
A:{if(18===a){s=B.ae
break A}if(23===a){s=B.af
break A}if(9===a){s=B.ag
break A}s=null
break A}return s},
eb:function eb(a,b){this.a=a
this.b=b},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
jk(a,b,c,d,e,f,g){return new A.db(d,b,c,e,f,a,g)},
db:function db(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oy:function oy(){},
mn:function mn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
mw:function mw(a){this.a=a},
mv:function mv(a){this.a=a},
mx:function mx(a){this.a=a},
mt:function mt(a){this.a=a},
ms:function ms(a){this.a=a},
mu:function mu(a){this.a=a},
mp:function mp(a){this.a=a},
mo:function mo(a){this.a=a},
mq:function mq(a){this.a=a},
mr:function mr(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.w=_.r=null
_.$ti=e},
tq:function tq(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c){this.a=a
this.b=b
this.c=c},
ts:function ts(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function ou(){},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
vc(a,b){var s=$.kV()
return new A.iu(A.a2(t.N,t.a_),s,a)},
iu:function iu(a,b,c){this.d=a
this.b=b
this.a=c},
k2:function k2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
EE(a){var s=J.zQ(new v.G.URL(a,"file:///").pathname,"/")
return new A.c8(s,new A.uR(),A.a8(s).h("c8<1>"))},
uR:function uR(){},
m5:function m5(){},
bJ:function bJ(a,b,c){this.d=a
this.a=b
this.c=c},
aU:function aU(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a
this.b=-1},
ko:function ko(){},
kp:function kp(){},
kr:function kr(){},
ks:function ks(){},
nT:function nT(a,b){this.a=a
this.b=b},
B_(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bu(r,"step")}return s},
cV:function cV(){},
nq:function nq(){},
f7:function f7(a){this.a=a},
eg(a){return new A.c7(a)},
ws(a,b){var s,r,q,p
if(b==null)b=$.kV()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.en(256)
r&2&&A.C(a)
a[q]=p}},
c7:function c7(a){this.a=a},
fH:function fH(a){this.a=a},
aC:function aC(){},
i2:function i2(){},
i1:function i1(){},
EK(a,b){var s=null,r=new A.d2(t.kk)
return A.EL(a,new A.hF(s,s,s,s,s,s,s,s,new A.uY(new A.uX(r,A.u_(new A.uZ(r)))),s,s,s,s),b)},
dk:function dk(a){var _=this
_.d=a
_.c=_.b=_.a=null},
uZ:function uZ(a){this.a=a},
uX:function uX(a,b){this.a=a
this.b=b},
uY:function uY(a){this.a=a},
pX:function pX(a){this.a=a},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pY:function pY(a,b,c){this.b=a
this.c=b
this.d=c},
dj:function dj(){},
cy:function cy(){},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
ba(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.I(r)
if(q instanceof A.c7){s=q
return s.a}else return 1}},
id:function id(a){this.b=this.a=$
this.d=a},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mc:function mc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(a,b){this.a=a
this.b=b},
m9:function m9(a){this.a=a},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mi:function mi(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a,b){this.a=a
this.b=b},
mj:function mj(a,b){this.a=a
this.b=b},
m8:function m8(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a,b){this.a=a
this.$ti=b},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
bE(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.O(s,b.h("O<0>")),q=t.m
A.aD(a,"success",new A.lO(r,a,b),!1,q)
A.aD(a,"error",new A.lP(r,a),!1,q)
return s},
A4(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.O(s,b.h("O<0>")),q=t.m
A.aD(a,"success",new A.lT(r,a,b),!1,q)
A.aD(a,"error",new A.lU(r,a),!1,q)
A.aD(a,"blocked",new A.lV(r),!1,q)
return s},
dp:function dp(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
re:function re(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b){this.a=a
this.b=b},
lT:function lT(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b){this.a=a
this.b=b},
lV:function lV(a){this.a=a},
v_(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
wG(a,b,c){var s=a.read(b,c)
return s},
wH(a,b,c){var s=a.write(b,c)
return s},
Aj(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.w(A.K("Target object does not implement the async iterable interface",null))
return new A.aL(new A.mL(),new A.eY(a,s),s.h("aL<D.T,u>"))},
mL:function mL(){},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pW(a,b){var s=0,r=A.i(t.w),q,p,o
var $async$pW=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.c(A.aq(p.fetch(new p.URL(a,A.T(p.location).href),null),t.m),$async$pW)
case 3:q=o.pV(d,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$pW,r)},
pV(a,b){var s=0,r=A.i(t.w),q,p,o,n,m
var $async$pV=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=new A.id(A.a2(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.c(new A.pT(p).el(a),$async$pV)
case 3:q=new o.eh(new n.pX(m.Bw(d,p)))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$pV,r)},
eh:function eh(a){this.a=a},
BZ(a){var s=new A.hd(a,new A.O(new A.l($.m,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.l1(a)
return s},
iw(a,b,c){var s=0,r=A.i(t.cF),q,p,o,n,m,l
var $async$iw=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.lc(a)
n=A.vc("dart-memory",null)
m=$.kV()
l=new A.cm(o,n,new A.d2(t.p3),A.bu(p),A.a2(p,t.S),m,b)
l.r=!1
s=3
return A.c(o.eo(),$async$iw)
case 3:s=4
return A.c(l.d0(),$async$iw)
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$iw,r)},
lc:function lc(a){this.a=null
this.b=a},
lf:function lf(a){this.a=a},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a){this.a=a},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
rQ:function rQ(a){this.a=a},
rR:function rR(a){this.a=a},
rP:function rP(a){this.a=a},
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
rU:function rU(a,b){this.a=a
this.b=b},
rT:function rT(a,b){this.a=a
this.b=b},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(){},
nn:function nn(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
rO:function rO(a,b){this.a=a
this.b=b},
aE:function aE(){},
hb:function hb(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
h6:function h6(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
eq:function eq(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
eK:function eK(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
xd(a){var s=A.vc("dart-memory",null),r=$.kV()
return new A.e8(s,r,a)},
j8(a,b){var s=0,r=A.i(t.mt),q,p,o,n,m,l,k,j
var $async$j8=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:j=A.v_()
if(j==null)throw A.b(A.eg(1))
p=t.m
s=3
return A.c(A.aq(j.getDirectory(),p),$async$j8)
case 3:o=d
n=A.EE(a),m=J.U(n.a),n=new A.ej(m,n.b),l=null
case 4:if(!n.l()){s=6
break}s=7
return A.c(A.aq(o.getDirectoryHandle(m.gp(),{create:!0}),p),$async$j8)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a3(l,o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j8,r)},
j9(a){var s=0,r=A.i(t.m),q
var $async$j9=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.j8(a,!0),$async$j9)
case 3:q=c.b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j9,r)},
oq(a,b){var s=0,r=A.i(t.g_),q,p
var $async$oq=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if(A.v_()==null)throw A.b(A.eg(1))
p=A
s=3
return A.c(A.j9(a),$async$oq)
case 3:q=p.op(d,!1,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$oq,r)},
op(a,b,c){var s=0,r=A.i(t.g_),q,p
var $async$op=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=A.xd(c)
s=3
return A.c(p.bL(a,!1),$async$op)
case 3:q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$op,r)},
dR:function dR(a,b,c){this.c=a
this.a=b
this.b=c},
e8:function e8(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
or:function or(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
t7:function t7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bw(a,b){var s=A.T(a.exports.memory)
b.b!==$&&A.z2()
b.b=s
s=new A.pN(s,b,a.exports)
s.kY(a,b)
return s},
qn(a,b){var s,r=A.b4(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
ek(a,b){var s=a.buffer,r=A.qn(a,b)
return B.k.aG(A.b4(s,b,r))},
vx(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.aG(A.b4(s,b,c==null?A.qn(a,b):c))},
pN:function pN(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
pQ:function pQ(a){this.a=a},
pR:function pR(a){this.a=a},
ur(){var s=0,r=A.i(t.ja),q,p,o,n,m,l
var $async$ur=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.hO()
s=l!=null?3:5
break
case 3:p=A.Dm()
s=6
return A.c(A.fX(l,p,null,null,!1),$async$ur)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a3({port:m.port1,lockName:p},new A.dM(n,p,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ur,r)},
Dm(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.aR(97+$.zB().en(26))
return r.charCodeAt(0)==0?r:r},
zW(a){return new A.f0(a)},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(){},
o4:function o4(a){this.a=a},
o5:function o5(a){this.a=a},
o3:function o3(a){this.a=a},
o2:function o2(a){this.a=a},
o1:function o1(a){this.a=a},
o6:function o6(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
B1(a,b){var s=t.H
s=new A.j5(a,b,new A.ad(new A.l($.m,t.ny),t.mE),A.cv(!1,t.e1),new A.jT(A.cv(!1,s)),new A.jT(A.cv(!1,s)))
s.kT(a,b)
return s},
By(a,b){var s=t.m,r=A.cv(!1,s),q=new A.l($.m,t.D),p=t.S
s=new A.jG(r,b,a.a,new A.ad(q,t.h),A.a2(p,t.br),A.a2(p,s))
s.hy(a)
q.J(r.gaE())
return s},
Aa(a,b,c,d){var s=A.nF(t.cj)
return new A.ml(d,new A.e_(s),A.bu(t.jC))},
jT:function jT(a){this.a=null
this.b=a},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.r=f},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
o9:function o9(a){this.a=a},
of:function of(a){this.a=a},
og:function og(a){this.a=a},
oh:function oh(a){this.a=a},
ob:function ob(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
ml:function ml(a,b,c){this.d=a
this.e=b
this.z=c},
mm:function mm(){},
ic:function ic(a){this.a=a},
m6:function m6(a,b){this.c=a
this.a=b},
cz:function cz(){},
rm:function rm(){},
ir(a,b,c){var s=0,r=A.i(t.eZ),q,p,o
var $async$ir=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.c(A.j9(a),$async$ir)
case 3:p=e
o=A.xd(c)
s=b?4:5
break
case 4:s=6
return A.c(o.bL(p,!0),$async$ir)
case 6:case 5:q=new A.iq(o,p,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ir,r)},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
fX(a,b,c,d,e){var s,r,q={},p=new A.l($.m,t.fV),o=new A.O(p,t.l6)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.it(A.aq(a.request(b,s,A.bC(new A.q5(q,o))),r),new A.q6(q,d,o),r,t.K)
return p},
q5:function q5(a,b){this.a=a
this.b=b},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a){this.a=a},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
mz:function mz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b){this.a=a
this.b=b},
mA:function mA(a){this.a=a},
e_:function e_(a){this.a=!1
this.b=a},
nS:function nS(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nQ:function nQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A1(a){var s,r,q,p,o=A.v([],t.kC),n=t.c.a(a.a),m=t.k.b(n)?n:new A.ag(n,A.a8(n).h("ag<1,j>"))
for(s=J.a4(m),r=0;r<s.gk(m)/2;++r){q=r*2
o.push(new A.a3(A.ij(B.bi,s.i(m,q)),s.i(m,q+1)))}s=A.aV(a.b)
q=A.aV(a.c)
p=A.aV(a.d)
return new A.cW(o,s,q,A.aV(a.g),p)},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B4(a){var s
if(J.z(a.t,"errorResponse")){s=A.Ad(a)
if(s!=null&&s instanceof A.bq)return s
else return new A.d7(a.e,s)}else return new A.d7("Did not respond with expected type, got "+A.q(a),null)},
Ad(a){var s=a.s,r=s==null?null:A.R(s)
A:{if(0===r){s=A.Ae(t.c.a(a.r))
break A}if(1===r){s=B.A
break A}s=null
break A}return s},
Ae(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.E("Pattern matching error"))
n=new A.mK()
l=A.R(A.bS(l))
A.an(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ck(i,h,A.b4(h,0,o))}else p=o
n=n.$1(k)
A.ya(g)
return new A.db(s,r,l,g==null?o:A.R(g),n,q,p)},
Af(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.vt(l)
break A}r=a.b
if(r==null)r=m
q=a.e
if(q==null)q=m
p=a.f
if(p==null)p=m
o=s==null
n=o?m:s.a
s=o?m:s.b
o=a.d
if(o==null)o=m
return[a.a,r,a.c,q,p,n,s,o]},
B5(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.mZ(a2,512,"transfer" in a2)
a5.iX(a4)
for(s=a4.a,r=s.c,s=s.b,q=r.d,r=r.b,p=0,o=!0;A.B_(a4);){if(o){p=q.sqlite3_column_count(s)
o=!1}n=a3.d
m=a3.d=n+p
if(m>a3.b)a3.lN(m)
m=new a0.DataView(a3.a,n,p)
l=new a0.Array(p)
for(k=0;k<p;++k){switch(q.sqlite3_column_type(s,k)){case 1:j=q.sqlite3_column_int64(s,k)
i=a0.Number(j)
if(a0.Number.isSafeInteger(i)){j=i
h=B.P}else h=B.Q
break
case 2:j=q.sqlite3_column_double(s,k)
h=B.R
break
case 3:g=q.sqlite3_column_text(s,k)
f=r.buffer
e=A.qn(r,g)
g=new Uint8Array(f,g,e)
d=new A.cH(!1).cU(g,0,a,!0)
j=d
h=B.S
break
case 4:g=q.sqlite3_column_bytes(s,k)
f=q.sqlite3_column_blob(s,k)
c=new Uint8Array(g)
e=r.buffer
g=new Uint8Array(e,f,g)
B.f.cg(c,0,g)
j=c
h=B.T
break
case 5:default:j=a
h=B.U}l[k]=j
m.setUint8(k,h.a)}a1.push(l)}b=new a0.Array(p)
for(k=0;k<p;++k){a0=q.sqlite3_column_name(s,k)
m=r.buffer
g=A.qn(r,a0)
a0=new Uint8Array(m,a0,g)
b[k]=new A.cH(!1).cU(a0,0,a,!0)}return A.yV(!1,b,0,0,a1,a,a3.oQ(0))},
B6(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c
if(h!=null){s=t.k.b(h)?h:new A.ag(h,A.a8(h).h("ag<1,j>"))
s=J.dG(s,new A.ol(),t.N)
r=A.as(s,s.$ti.h("X.E"))
s=a.n
if(s!=null){s=t.fi.b(s)?s:new A.ag(s,A.a8(s).h("ag<1,j?>"))
s=J.dG(s,new A.om(),t.T)
A.as(s,s.$ti.h("X.E"))}s=a.v
q=s==null?null:A.b4(s,0,null)
p=A.v([],t.dO)
s=a.r
s.toString
if(!t.mu.b(s))s=new A.ag(s,A.a8(s).h("ag<1,t<k?>>"))
s=J.U(s)
o=q!=null
n=0
while(s.l()){m=s.gp()
l=[]
m=B.d.gA(m)
while(m.l()){k=m.gp()
if(o){j=q[n]
i=j>=8?B.v:B.I[j]}else i=B.v
l.push(i.j8(k));++n}p.push(l)}s=new A.bJ(p,r,B.bl)
s.ld()
return s}else return null},
Ev(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
mK:function mK(){},
ol:function ol(){},
om:function om(){},
yV(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
dB(a){var s,r,q,p,o=v.G,n=new o.Array()
switch(a.t){case"connect":n.push(a.r.port)
break
case"fileSystemAccess":s=a.b
if(s!=null)n.push(s)
break
case"runQuery":n.push(a.v)
break
case"simpleSuccessResponse":r=a.r
if(r!=null){o=o.ArrayBuffer
o=r instanceof o
q=r}else{q=null
o=!1}if(o)n.push(q)
break
case"endpointResponse":n.push(a.r.port)
break
case"rowsResponse":p=a.v
if(p!=null)n.push(p)
break}return n},
Ec(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
fv:function fv(a,b){this.a=a
this.b=b},
ok:function ok(){},
Ak(a){var s,r
for(s=0;s<5;++s){r=B.bc[s]
if(r.c===a)return r}throw A.b(A.K("Unknown FS implementation: "+a,null))},
Bm(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.U
break A}q=A.hH(a)
p=q?a:j
if(q){s=p
r=B.P
break A}q=a instanceof A.az
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.j(0))
r=B.Q
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.R
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.S
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.T
break A}q=A.kN(a)
k=q?a:j
if(q){s=k
r=B.ao
break A}throw A.b(A.K("Unsupported value: "+A.q(a),j))}return new A.a3(r,s)},
vt(a){var s,r,q,p,o,n
if(a instanceof A.ck)return new A.a3(a.a,a.b)
s=[]
r=J.a4(a)
q=r.gk(a)
p=new Uint8Array(q)
for(o=0;o<r.gk(a);++o){n=A.Bm(r.i(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a3(s,t.a.a(B.f.gao(p)))},
cl:function cl(a,b,c){this.c=a
this.a=b
this.b=c},
by:function by(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
kQ(){var s=0,r=A.i(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$kQ=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.T(i.indexedDB)
i=$.hO()
i=i==null?null:A.fX(i,"drift_mock_db",null,null,!1)
s=3
return A.c(t.fP.b(i)?i:A.bP(i,t.b3),$async$kQ)
case 3:l=b
p=5
s=8
return A.c(A.A3(m.open("drift_mock_db"),t.m),$async$kQ)
case 8:k=b
k.close()
m.deleteDatabase("drift_mock_db")
n.push(7)
s=6
break
case 5:p=4
h=o.pop()
q=!1
n=[1]
s=6
break
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
i=l
if(i!=null)i.a.N()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$kQ,r)},
up(a){return A.E3(a)},
E3(a){var s=0,r=A.i(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$up=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.T(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.bC(new A.uq(j,m))
s=7
return A.c(A.A2(m,t.m),$async$up)
case 7:l=c
if(j.a==null)j.a=!0
l.close()
p=2
s=6
break
case 4:p=3
i=o.pop()
s=6
break
case 3:s=2
break
case 6:j=j.a
q=j===!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$up,r)},
eV(){var s=0,r=A.i(t.k),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$eV=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.v_()
if(h==null){q=B.J
s=1
break}j=t.m
s=3
return A.c(A.aq(h.getDirectory(),j),$async$eV)
case 3:m=b
p=5
s=8
return A.c(A.aq(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$eV)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.J
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.v([],t.s)
j=new A.bR(A.bb(A.Aj(m),"stream",t.K))
p=9
case 12:s=14
return A.c(j.l(),$async$eV)
case 14:if(!b){s=13
break}k=j.gp()
if(J.z(k.kind,"directory"))J.l_(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.c(j.u(),$async$eV)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eV,r)},
A2(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.O(s,b.h("O<0>")),q=t.m
A.aD(a,"success",new A.lM(r,a,b),!1,q)
A.aD(a,"error",new A.lN(r,a),!1,q)
return s},
A3(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.O(s,b.h("O<0>")),q=t.m
A.aD(a,"success",new A.lQ(r,a,b),!1,q)
A.aD(a,"error",new A.lR(r,a),!1,q)
A.aD(a,"blocked",new A.lS(r,a),!1,q)
return s},
uq:function uq(a,b){this.a=a
this.b=b},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b){this.a=a
this.b=b},
lS:function lS(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
rn:function rn(a){this.a=a},
tM:function tM(){},
rl:function rl(a){this.a=a},
CT(a){var s=a.go9()
return new A.aL(new A.tY(),s,A.p(s).h("aL<D.T,u>"))},
xB(a,b){var s=A.v([],t.W),r=b==null?a.b:b
return new A.eo(a,r,new A.hu(),new A.hu(),new A.hu(),s)},
BQ(a,b,c){var s=t.S
s=new A.en(c,A.v([],t.ba),a.a,new A.ad(new A.l($.m,t.D),t.h),A.a2(s,t.br),A.a2(s,t.m))
s.hy(a)
s.l0(a,b,c)
return s},
yi(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
tY:function tY(){},
hu:function hu(){this.a=null},
eo:function eo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
r9:function r9(a){this.a=a},
rd:function rd(a,b){this.a=a
this.b=b},
ra:function ra(a,b){this.a=a
this.b=b},
rb:function rb(a){this.a=a},
rc:function rc(a,b){this.a=a
this.b=b},
en:function en(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
qY:function qY(a){this.a=a},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b){this.a=a
this.b=b},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b){this.a=a
this.b=b},
qZ:function qZ(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
r4:function r4(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
r7:function r7(a,b){this.a=a
this.b=b},
r1:function r1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r2:function r2(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
mD:function mD(a){this.a=a},
mC:function mC(a){this.a=a},
mB:function mB(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=d
_.f=0
_.w=_.r=null
_.x=e
_.y=f
_.Q=$},
qk:function qk(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(a){this.a=a},
Cf(){return new A.th(A.k_(new A.ti(),t.z))},
iM:function iM(a){this.a=a},
th:function th(a){this.a=null
this.b=a},
ti:function ti(){},
tm:function tm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tj:function tj(a,b){this.a=a
this.b=b},
tk:function tk(a){this.a=a},
tn:function tn(a,b){this.a=a
this.b=b},
tl:function tl(a){this.a=a},
ji:function ji(){},
jj:function jj(){},
ox:function ox(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a){this.a=a},
on(a,b,c){return A.B8(a,b,c,c)},
B8(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m,l
var $async$on=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:l=new A.fE(a)
p=3
s=6
return A.c(b.$1(l),$async$on)
case 6:m=f
q=m
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.c=!0
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$on,r)},
B9(a){var s
A:{if(0===a){s=B.bo
break A}s=""+a
s=new A.cC("SAVEPOINT s"+s,"RELEASE s"+s,"ROLLBACK TO s"+s)
break A}return s},
fG(a,b,c){return A.Ba(a,b,c,c)},
Ba(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m,l
var $async$fG=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:l=new A.fF(0,a)
p=3
s=6
return A.c(b.$1(l),$async$fG)
case 6:m=f
s=7
return A.c(a.e6(),$async$fG)
case 7:q=m
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.c=!0
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$fG,r)},
jw:function jw(){},
fE:function fE(a){this.a=a
this.c=this.b=!1},
fF:function fF(a,b){var _=this
_.d=a
_.a=b
_.c=_.b=!1},
jh:function jh(){},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
this.b=b},
Bn(a){return new A.L(a)},
Bp(a,b,c){return A.DE(new A.pG(),c,a,!0,b,t.b)},
Bo(a){var s,r=A.bu(t.N)
for(s=0;s<1;++s)r.q(0,a[s].toLowerCase())
return new A.ku(new A.pF(r))},
DE(a,b,c,d,e,f){return new A.bB(!1,new A.uf(e,a,c,b,!0,f),f.h("bB<0>"))},
L:function L(a){this.a=a},
pG:function pG(){},
pF:function pF(a){this.a=a},
pE:function pE(a){this.a=a},
uf:function uf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ug:function ug(a,b){this.a=a
this.b=b},
uh:function uh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ub:function ub(a,b,c){this.a=a
this.b=b
this.c=c},
ua:function ua(a,b){this.a=a
this.b=b},
ui:function ui(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uk:function uk(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
uc:function uc(a){this.a=a},
ud:function ud(a,b,c){this.a=a
this.b=b
this.c=c},
ue:function ue(a,b){this.a=a
this.b=b},
xm(a,b,c,d,e,f){var s
if(a==null)return c.$0()
s=A.EH(b,d,e)
a.pJ(s.a,s.b)
return A.dS(c,f).J(new A.pu(a))},
EH(a,b,c){var s,r,q,p,o,n,m=t.z
m=A.a2(m,m)
m.m(0,"sql",c)
s=[]
for(r=b.length,q=t.j,p=0;p<b.length;b.length===r||(0,A.a5)(b),++p){o=b[p]
A:{if(q.b(o)){n="<blob>"
break A}if(o instanceof A.az){n=o.j(0)
break A}n=o
break A}s.push(n)}m.m(0,"parameters",s)
return new A.a3("sqlite_async:"+a+" "+c,m)},
pu:function pu(a){this.a=a},
eT(a,b,c,d){return A.Et(a,b,c,d,d)},
Et(a,b,c,d,e){var s=0,r=A.i(e),q,p=2,o=[],n,m,l,k,j
var $async$eT=A.d(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.c(a.eI(c?"BEGIN IMMEDIATE":"BEGIN"),$async$eT)
case 7:s=8
return A.c(b.$1(a),$async$eT)
case 8:n=g
s=9
return A.c(a.eI("END TRANSACTION"),$async$eT)
case 9:q=n
s=1
break
p=2
s=6
break
case 4:p=3
k=o.pop()
p=11
s=14
return A.c(a.eI("ROLLBACK"),$async$eT)
case 14:p=3
s=13
break
case 11:p=10
j=o.pop()
s=13
break
case 10:s=3
break
case 13:throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eT,r)},
xl(a){var s={},r=A.v([],t.jI),q=A.bu(t.N)
s.a=A.v([],t.bO)
return new A.bB(!0,new A.pr(new A.pm(s,r,a,new A.ps(q),new A.pp(r,q),new A.pq(q)),new A.pt(s,r)),t.cn)},
ps:function ps(a){this.a=a},
pp:function pp(a,b){this.a=a
this.b=b},
pq:function pq(a){this.a=a},
pm:function pm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pn:function pn(a){this.a=a},
po:function po(a){this.a=a},
pt:function pt(a,b){this.a=a
this.b=b},
pr:function pr(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
kU(a,b){return A.EW(a,b,b)},
EW(a,b,c){var s=0,r=A.i(c),q,p=2,o=[],n,m,l,k,j,i,h
var $async$kU=A.d(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.c(a.$0(),$async$kU)
case 7:j=e
q=j
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
j=A.I(h)
if(j instanceof A.d7){n=j
m=n.b
l=null
if(m!=null){l=m
throw A.b(l)}if(B.a.U(n.a,"Database is not in a transaction"))throw A.b(A.jk(null,null,0,"Transaction rolled back by earlier statement. Cannot execute.",null,null,null))
if(B.a.U("Remote error: "+n.a,"SqliteException")){k=A.at("SqliteException\\((\\d+)\\)",!0)
j=k.jf(n.a)
j=j==null?null:j.i(0,1)
throw A.b(A.jk(null,null,A.yQ(j==null?"0":j),n.a,null,null,null))}throw h}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$kU,r)},
CU(a,b,c){return A.it(a,new A.tZ(b),c,t.fN)},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q1:function q1(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
q2:function q2(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(a,b,c){this.a=a
this.b=b
this.c=c},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tD:function tD(a,b,c){this.a=a
this.b=b
this.c=c},
tZ:function tZ(a){this.a=a},
BO(a){return{a:0,b:a.a.aY(0,new A.qQ(),t.N).dB(0)}},
i3:function i3(a){this.b=a},
lm:function lm(){},
lk:function lk(){},
ll:function ll(){},
qQ:function qQ(){},
v9(a,b,c){var s=A.vt(c)
return{rawKind:a.b,rawSql:b,rawParameters:s.a,typeInfo:s.b}},
bW:function bW(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=0
this.b=a},
pB:function pB(){},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
q8(a){var s=A.Cf()
return new A.q7(s,a)},
q7:function q7(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a){this.a=a},
qa:function qa(){},
fh:function fh(a){this.a=a},
BR(){return new A.ep()},
l8:function l8(){},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
l9:function l9(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(){this.a=!1
this.b=null},
jo:function jo(a,b,c){this.c=a
this.a=b
this.b=c},
p6:function p6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
ee:function ee(){},
k4:function k4(){},
bg:function bg(a,b){this.a=a
this.b=b},
aD(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.yF(new A.rs(c),t.m)
s=s==null?null:A.bC(s)}s=new A.eu(a,b,s,!1,e.h("eu<0>"))
s.fw()
return s},
yF(a,b){var s=$.m
if(s===B.e)return a
return s.fH(a,b)},
va:function va(a,b){this.a=a
this.$ti=b},
et:function et(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eu:function eu(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rs:function rs(a){this.a=a},
rt:function rt(a){this.a=a},
qc(a){var s=0,r=A.i(t.m1),q,p,o,n,m
var $async$qc=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=new A.jx(A.a2(t.N,t.ao))
s=3
return A.c(A.Aa(B.aQ,v.G.location.href,B.aN,o.go2()).fI(new A.a3(a.b,a.a)),$async$qc)
case 3:n=c
m=a.c
A:{p=null
if(m!=null){p=A.q8(m)
break A}break A}q=new A.jD(n,p,!1,o.oW(n))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$qc,r)},
wa(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
AC(a,b){return b in a},
vf(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
wP(a,b){return b in a},
Ek(a,b,c,d){var s,r,q,p,o,n=A.a2(d,c.h("r<0>"))
for(s=c.h("t<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.i(0,p)
if(o==null){o=A.v([],s)
n.m(0,p,o)
p=o}else p=o
J.l_(p,q)}return n},
Aw(a,b){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a5)(a),++r){q=a[r]
if(b.$1(q))return q}return null},
wN(a){var s,r,q,p
for(s=A.p(a),r=new A.bF(J.U(a.a),a.b,s.h("bF<1,2>")),s=s.y[1],q=0;r.l();){p=r.a
q+=p==null?s.a(p):p}return q},
wO(a,b){var s,r,q=A.bu(b)
for(s=a.a,s=new A.bd(s,s.r,s.e);s.l();)for(r=J.U(s.d);r.l();)q.q(0,r.gp())
return q},
w4(a){var s,r=a.c.a.i(0,"charset")
if(a.a==="application"&&a.b==="json"&&r==null)return B.k
if(r!=null){s=A.wD(r)
if(s==null)s=B.j}else s=B.j
return s},
z4(a){return a},
z3(a){return new A.cQ(a)},
EV(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.I(p)
if(q instanceof A.e9){s=q
throw A.b(A.Be("Invalid "+a+": "+s.a,s.b,s.gdJ()))}else if(t.lW.b(q)){r=q
throw A.b(A.ak("Invalid "+a+' "'+b+'": '+r.gjv(),r.gdJ(),r.ga6()))}else throw p}},
yL(){var s,r,q,p,o=null
try{o=A.vv()}catch(s){if(t.L.b(A.I(s))){r=$.tW
if(r!=null)return r
throw s}else throw s}if(J.z(o,$.yg)){r=$.tW
r.toString
return r}$.yg=o
if($.wd()===$.hN())r=$.tW=o.dw(".").j(0)
else{q=o.hd()
p=q.length-1
r=$.tW=p===0?q:B.a.t(q,0,p)}return r},
yR(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
yM(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.yR(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.t(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Eh(a){if(B.a.K(a,"ps_data_local__"))return B.a.a0(a,15)
else if(B.a.K(a,"ps_data__"))return B.a.a0(a,9)
else return null},
Ar(a){var s=t.N
return t.f.a(B.h.aG(a.h)).bh(0,s,s)},
Eu(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gae(0)
for(r=A.bN(a,1,null,a.$ti.h("X.E")),q=r.$ti,r=new A.ar(r,r.gk(0),q.h("ar<X.E>")),q=q.h("X.E");r.l();){p=r.d
if(!J.z(p==null?q.a(p):p,s))return!1}return!0},
EI(a,b){var s=B.d.cA(a,null)
if(s<0)throw A.b(A.K(A.q(a)+" contains no null elements.",null))
a[s]=b},
yZ(a,b){var s=B.d.cA(a,b)
if(s<0)throw A.b(A.K(A.q(a)+" contains no elements matching "+b.j(0)+".",null))
a[s]=null},
E9(a,b){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.ar(s,s.gk(0),r.h("ar<A.E>")),r=r.h("A.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
uu(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bl(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.cA(a,b)
while(r!==-1){q=r===0?0:B.a.ej(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bl(a,b,r+1)}return null},
w3(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.db(A.ek(r.b,p.sqlite3_errmsg(q)),A.ek(s.b,s.d.sqlite3_errstr(o))+" (code "+A.q(o)+")",c,n,d,e,f)},
wb(a,b,c,d,e){throw A.b(A.w3(a.a,a.b,b,c,d,e))},
wK(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.aR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.en(61)))
return s.charCodeAt(0)==0?s:s},
o8(a){var s=0,r=A.i(t.lo),q
var $async$o8=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.aq(a.arrayBuffer(),t.a),$async$o8)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$o8,r)},
cJ(){var s=0,r=A.i(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$cJ=A.d(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.v_()
if(b==null){q=B.N
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.hO()
d=d==null?null:A.fX(d,"_drift_feature_detection",null,null,!1)
s=7
return A.c(t.fP.b(d)?d:A.bP(d,t.b3),$async$cJ)
case 7:j=a1
d=t.m
s=8
return A.c(A.aq(b.getDirectory(),d),$async$cJ)
case 8:m=a1
s=9
return A.c(A.aq(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$cJ)
case 9:l=a1
s=10
return A.c(A.hL(l),$async$cJ)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.vf(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.c(A.aq(A.T(e),t.X),$async$cJ)
case 13:q=B.N
n=[1]
s=5
break
case 12:g=i
q=new A.hp(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.N
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.N()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.c(A.aq(m.removeEntry("_drift_feature_detection",{recursive:!1}),t.X),$async$cJ)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cJ,r)},
hL(a){return A.DF(a)},
DF(a){var s=0,r=A.i(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$hL=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.c(A.aq(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$hL)
case 7:j=c
s=8
return A.c(A.aq(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$hL)
case 8:n=c
n.close()
l=j
q=new A.a3(!0,l)
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
l=j
if(l!=null)l.close()
s=9
return A.c(A.aq(a.createSyncAccessHandle(),t.m),$async$hL)
case 9:m=c
q=new A.a3(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$hL,r)},
EA(){return A.Ez()}},B={}
var w=[A,J,B]
var $={}
A.vh.prototype={}
J.iy.prototype={
D(a,b){return a===b},
gv(a){return A.e4(a)},
j(a){return"Instance of '"+A.j1(a)+"'"},
ga3(a){return A.bn(A.vY(this))}}
J.iB.prototype={
j(a){return String(a)},
gv(a){return a?519018:218159},
ga3(a){return A.bn(t.y)},
$ia0:1,
$iH:1}
J.dU.prototype={
D(a,b){return null==b},
j(a){return"null"},
gv(a){return 0},
$ia0:1,
$iG:1}
J.ai.prototype={$iu:1}
J.co.prototype={
gv(a){return 0},
ga3(a){return B.bM},
j(a){return String(a)}}
J.j_.prototype={}
J.df.prototype={}
J.aZ.prototype={
j(a){var s=a[$.z8()]
if(s==null)s=a[$.dE()]
if(s==null)return this.kH(a)
return"JavaScript function for "+J.aW(s)}}
J.aQ.prototype={
gv(a){return 0},
j(a){return String(a)}}
J.dW.prototype={
gv(a){return 0},
j(a){return String(a)}}
J.t.prototype={
d9(a,b){return new A.ag(a,A.a8(a).h("@<1>").G(b).h("ag<1,2>"))},
q(a,b){a.$flags&1&&A.C(a,29)
a.push(b)},
es(a,b){var s
a.$flags&1&&A.C(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.o7(b,null))
return a.splice(b,1)[0]},
ob(a,b,c){var s
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.o7(b,null))
a.splice(b,0,c)},
fX(a,b,c){var s,r
a.$flags&1&&A.C(a,"insertAll",2)
A.x9(b,0,a.length,"index")
if(!t.O.b(c))c=J.zR(c)
s=J.aG(c)
a.length=a.length+s
r=b+s
this.P(a,r,a.length,a,b)
this.ai(a,b,r,c)},
jJ(a){a.$flags&1&&A.C(a,"removeLast",1)
if(a.length===0)throw A.b(A.kS(a,-1))
return a.pop()},
I(a,b){var s
a.$flags&1&&A.C(a,"remove",1)
for(s=0;s<a.length;++s)if(J.z(a[s],b)){a.splice(s,1)
return!0}return!1},
me(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ap(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
ac(a,b){var s
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.l9(a,b)
return}for(s=J.U(b);s.l();)a.push(s.gp())},
l9(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ap(a))
for(s=0;s<r;++s)a.push(b[s])},
aL(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
aY(a,b,c){return new A.ab(a,b,A.a8(a).h("@<1>").G(c).h("ab<1,2>"))},
bI(a,b){var s,r=A.b2(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
bN(a,b){return A.bN(a,0,A.bb(b,"count",t.S),A.a8(a).c)},
aS(a,b){return A.bN(a,b,null,A.a8(a).c)},
jg(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ap(a))}throw A.b(A.bY())},
V(a,b){return a[b]},
gae(a){if(a.length>0)return a[0]
throw A.b(A.bY())},
gaO(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.bY())},
P(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.C(a,5)
A.aN(b,c,a.length)
s=c-b
if(s===0)return
A.aJ(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.l1(d,e).bv(0,!1)
q=0}p=J.a4(r)
if(q+s>p.gk(r))throw A.b(A.wM())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
ai(a,b,c,d){return this.P(a,b,c,d,0)},
cQ(a,b){var s,r,q,p,o
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.D1()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a8(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.cK(b,2))
if(p>0)this.mf(a,p)},
kA(a){return this.cQ(a,null)},
mf(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cA(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.z(a[s],b))return s
return-1},
cD(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.z(a[s],b))return s
return-1},
U(a,b){var s
for(s=0;s<a.length;++s)if(J.z(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gaN(a){return a.length!==0},
j(a){return A.ny(a,"[","]")},
bv(a,b){var s=A.v(a.slice(0),A.a8(a))
return s},
dB(a){return this.bv(a,!0)},
gA(a){return new J.dH(a,a.length,A.a8(a).h("dH<1>"))},
gv(a){return A.e4(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.b(A.ac(b,0,null,"newLength",null))
if(b>a.length)A.a8(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.b(A.kS(a,b))
return a[b]},
m(a,b,c){a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.b(A.kS(a,b))
a[b]=c},
oa(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.bn(A.a8(a))},
$iaH:1,
$ix:1,
$in:1,
$ir:1}
J.iA.prototype={
oU(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.j1(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.nz.prototype={}
J.dH.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.a5(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dV.prototype={
a_(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gh_(b)
if(this.gh_(a)===s)return 0
if(this.gh_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gh_(a){return a===0?1/a<0:a<0},
mY(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.S(""+a+".ceil()"))},
mZ(a,b,c){if(B.b.a_(b,c)>0)throw A.b(A.dA(b))
if(this.a_(a,b)<0)return b
if(this.a_(a,c)>0)return c
return a},
oS(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ac(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.w(A.S("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.aI("0",q)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dF(a,b){return a+b},
aR(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
hx(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.iF(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.iF(a,b)},
iF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.S("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cO(a,b){if(b<0)throw A.b(A.dA(b))
return b>31?0:a<<b>>>0},
cP(a,b){var s
if(b<0)throw A.b(A.dA(b))
if(a>0)s=this.fu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a1(a,b){var s
if(a>0)s=this.fu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ms(a,b){if(0>b)throw A.b(A.dA(b))
return this.fu(a,b)},
fu(a,b){return b>31?0:a>>>b},
ks(a,b){return a>b},
ga3(a){return A.bn(t.q)},
$ia9:1,
$iZ:1}
J.fk.prototype={
giZ(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.T(q,4294967296)
s+=32}return s-Math.clz32(q)},
ga3(a){return A.bn(t.S)},
$ia0:1,
$ia:1}
J.iC.prototype={
ga3(a){return A.bn(t.i)},
$ia0:1}
J.cn.prototype={
fE(a,b,c){var s=b.length
if(c>s)throw A.b(A.ac(c,0,s,null,null))
return new A.kw(b,a,c)},
e3(a,b){return this.fE(a,b,0)},
cF(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ac(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.fM(c,a)},
bF(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a0(a,r-s)},
dK(a,b){var s=A.v(a.split(b),t.s)
return s},
c6(a,b,c,d){var s=A.aN(b,c,a.length)
return A.z1(a,b,s,d)},
R(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ac(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
K(a,b){return this.R(a,b,0)},
t(a,b,c){return a.substring(b,A.aN(b,c,a.length))},
a0(a,b){return this.t(a,b,null)},
aI(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.aI)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oB(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aI(c,s)+a},
oC(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aI(" ",s)},
bl(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ac(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cA(a,b){return this.bl(a,b,0)},
ej(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ac(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cD(a,b){return this.ej(a,b,null)},
U(a,b){return A.EP(a,b,0)},
a_(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.bn(t.N)},
gk(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.b(A.kS(a,b))
return a[b]},
$iaH:1,
$ia0:1,
$ia9:1,
$ij:1}
A.cT.prototype={
gaq(){return this.a.gaq()},
B(a,b,c,d){var s=this.a.bn(null,b,c),r=new A.dJ(s,$.m,this.$ti.h("dJ<1,2>"))
s.bq(r.gl6())
r.bq(a)
r.dr(d)
return r},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.dJ.prototype={
u(){return this.a.u()},
bq(a){this.c=a==null?null:this.b.bs(a,t.z,this.$ti.y[1])},
dr(a){var s=this
s.a.dr(a)
if(a==null)s.d=null
else if(t.r.b(a))s.d=s.b.cH(a,t.z,t.K,t.l)
else if(t.i6.b(a))s.d=s.b.bs(a,t.z,t.K)
else throw A.b(A.K(u.y,null))},
l7(a){var s,r,q,p,o,n,m=this,l=m.c
if(l==null)return
s=null
try{s=m.$ti.y[1].a(a)}catch(o){r=A.I(o)
q=A.P(o)
p=m.d
if(p==null)m.b.cz(r,q)
else{l=t.K
n=m.b
if(t.r.b(p))n.hb(p,r,q,l,t.l)
else n.c8(t.i6.a(p),r,l)}return}m.b.c8(l,s,m.$ti.y[1])},
aH(a){this.a.aH(a)},
ah(){return this.aH(null)},
aj(){this.a.aj()},
$iaf:1}
A.cA.prototype={
gA(a){return new A.i7(J.U(this.gb5()),A.p(this).h("i7<1,2>"))},
gk(a){return J.aG(this.gb5())},
gE(a){return J.l0(this.gb5())},
gaN(a){return J.zL(this.gb5())},
aS(a,b){var s=A.p(this)
return A.i6(J.l1(this.gb5(),b),s.c,s.y[1])},
bN(a,b){var s=A.p(this)
return A.i6(J.wp(this.gb5(),b),s.c,s.y[1])},
V(a,b){return A.p(this).y[1].a(J.hP(this.gb5(),b))},
U(a,b){return J.wm(this.gb5(),b)},
j(a){return J.aW(this.gb5())}}
A.i7.prototype={
l(){return this.a.l()},
gp(){return this.$ti.y[1].a(this.a.gp())}}
A.cR.prototype={
gb5(){return this.a}}
A.h9.prototype={$ix:1}
A.h3.prototype={
i(a,b){return this.$ti.y[1].a(J.eX(this.a,b))},
m(a,b,c){J.kZ(this.a,b,this.$ti.c.a(c))},
sk(a,b){J.zO(this.a,b)},
q(a,b){J.l_(this.a,this.$ti.c.a(b))},
cQ(a,b){var s=b==null?null:new A.qV(this,b)
J.wo(this.a,s)},
P(a,b,c,d,e){var s=this.$ti
J.zP(this.a,b,c,A.i6(d,s.y[1],s.c),e)},
ai(a,b,c,d){return this.P(0,b,c,d,0)},
$ix:1,
$ir:1}
A.qV.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("a(1,1)")}}
A.ag.prototype={
d9(a,b){return new A.ag(this.a,this.$ti.h("@<1>").G(b).h("ag<1,2>"))},
gb5(){return this.a}}
A.cS.prototype={
bh(a,b,c){return new A.cS(this.a,this.$ti.h("@<1,2>").G(b).G(c).h("cS<1,2,3,4>"))},
H(a){return this.a.H(a)},
i(a,b){return this.$ti.h("4?").a(this.a.i(0,b))},
aa(a,b){this.a.aa(0,new A.lE(this,b))},
ga2(){var s=this.$ti
return A.i6(this.a.ga2(),s.c,s.y[2])},
gk(a){var s=this.a
return s.gk(s)},
gE(a){var s=this.a
return s.gE(s)},
gbj(){var s=this.a.gbj()
return s.aY(s,new A.lD(this),this.$ti.h("N<3,4>"))}}
A.lE.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.lD.prototype={
$1(a){var s=this.a.$ti
return new A.N(s.y[2].a(a.a),s.y[3].a(a.b),s.h("N<3,4>"))},
$S(){return this.a.$ti.h("N<3,4>(N<1,2>)")}}
A.d1.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.br.prototype={
gk(a){return this.a.length},
i(a,b){return this.a.charCodeAt(b)}}
A.uQ.prototype={
$0(){return A.mU(null,t.H)},
$S:3}
A.oo.prototype={}
A.x.prototype={}
A.X.prototype={
gA(a){var s=this
return new A.ar(s,s.gk(s),A.p(s).h("ar<X.E>"))},
gE(a){return this.gk(this)===0},
gae(a){if(this.gk(this)===0)throw A.b(A.bY())
return this.V(0,0)},
U(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(J.z(r.V(0,s),b))return!0
if(q!==r.gk(r))throw A.b(A.ap(r))}return!1},
bI(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.V(0,0))
if(o!==p.gk(p))throw A.b(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.V(0,q))
if(o!==p.gk(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.V(0,q))
if(o!==p.gk(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
oe(a){return this.bI(0,"")},
aY(a,b,c){return new A.ab(this,b,A.p(this).h("@<X.E>").G(c).h("ab<1,2>"))},
oI(a,b){var s,r,q=this,p=q.gk(q)
if(p===0)throw A.b(A.bY())
s=q.V(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.V(0,r))
if(p!==q.gk(q))throw A.b(A.ap(q))}return s},
aS(a,b){return A.bN(this,b,null,A.p(this).h("X.E"))},
bN(a,b){return A.bN(this,0,A.bb(b,"count",t.S),A.p(this).h("X.E"))},
dC(a){var s,r=this,q=A.vk(A.p(r).h("X.E"))
for(s=0;s<r.gk(r);++s)q.q(0,r.V(0,s))
return q}}
A.dc.prototype={
kW(a,b,c,d){var s,r=this.b
A.aJ(r,"start")
s=this.c
if(s!=null){A.aJ(s,"end")
if(r>s)throw A.b(A.ac(r,0,s,"start",null))}},
gls(){var s=J.aG(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmu(){var s=J.aG(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.aG(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
V(a,b){var s=this,r=s.gmu()+b
if(b<0||r>=s.gls())throw A.b(A.iv(b,s.gk(0),s,null,"index"))
return J.hP(s.a,r)},
aS(a,b){var s,r,q=this
A.aJ(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.cZ(q.$ti.h("cZ<1>"))
return A.bN(q.a,s,r,q.$ti.c)},
bN(a,b){var s,r,q,p=this
A.aJ(b,"count")
s=p.c
r=p.b
if(s==null)return A.bN(p.a,r,B.b.dF(r,b),p.$ti.c)
else{q=B.b.dF(r,b)
if(s<q)return p
return A.bN(p.a,r,q,p.$ti.c)}},
bv(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a4(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ve(0,n):J.vd(0,n)}r=A.b2(s,m.V(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.V(n,o+q)
if(m.gk(n)<l)throw A.b(A.ap(p))}return r}}
A.ar.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.a4(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.V(q,s);++r.c
return!0}}
A.bZ.prototype={
gA(a){return new A.bF(J.U(this.a),this.b,A.p(this).h("bF<1,2>"))},
gk(a){return J.aG(this.a)},
gE(a){return J.l0(this.a)},
V(a,b){return this.b.$1(J.hP(this.a,b))}}
A.cY.prototype={$ix:1}
A.bF.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.ab.prototype={
gk(a){return J.aG(this.a)},
V(a,b){return this.b.$1(J.hP(this.a,b))}}
A.c8.prototype={
gA(a){return new A.ej(J.U(this.a),this.b)},
aY(a,b,c){return new A.bZ(this,b,this.$ti.h("@<1>").G(c).h("bZ<1,2>"))}}
A.ej.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()}}
A.fc.prototype={
gA(a){return new A.io(J.U(this.a),this.b,B.X,this.$ti.h("io<1,2>"))}}
A.io.prototype={
gp(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
l(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.l();){q.d=null
if(s.l()){q.c=null
p=J.U(r.$1(s.gp()))
q.c=p}else return!1}q.d=q.c.gp()
return!0}}
A.de.prototype={
gA(a){var s=this.a
return new A.jr(s.gA(s),this.b,A.p(this).h("jr<1>"))}}
A.fa.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(B.b.ks(r,s))return s
return r},
$ix:1}
A.jr.prototype={
l(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gp(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gp()}}
A.c2.prototype={
aS(a,b){A.hS(b,"count")
A.aJ(b,"count")
return new A.c2(this.a,this.b+b,A.p(this).h("c2<1>"))},
gA(a){var s=this.a
return new A.ja(s.gA(s),this.b)}}
A.dP.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
aS(a,b){A.hS(b,"count")
A.aJ(b,"count")
return new A.dP(this.a,this.b+b,this.$ti)},
$ix:1}
A.ja.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gp(){return this.a.gp()}}
A.cZ.prototype={
gA(a){return B.X},
gE(a){return!0},
gk(a){return 0},
V(a,b){throw A.b(A.ac(b,0,0,"index",null))},
U(a,b){return!1},
aY(a,b,c){return new A.cZ(c.h("cZ<0>"))},
aS(a,b){A.aJ(b,"count")
return this},
bN(a,b){A.aJ(b,"count")
return this},
bv(a,b){var s=this.$ti.c
return b?J.ve(0,s):J.vd(0,s)}}
A.ii.prototype={
l(){return!1},
gp(){throw A.b(A.bY())}}
A.fY.prototype={
gA(a){return new A.jE(J.U(this.a),this.$ti.h("jE<1>"))}}
A.jE.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())}}
A.fB.prototype={
gi_(){var s,r,q
for(s=this.a,r=A.p(s),s=new A.bF(J.U(s.a),s.b,r.h("bF<1,2>")),r=r.y[1];s.l();){q=s.a
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
gE(a){return this.gi_()==null},
gaN(a){return this.gi_()!=null},
gA(a){var s=this.a
return new A.iU(new A.bF(J.U(s.a),s.b,A.p(s).h("bF<1,2>")))}}
A.iU.prototype={
l(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.y[1];s.l();){q=s.a
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gp(){var s=this.b
return s==null?A.w(A.bY()):s}}
A.ff.prototype={
sk(a,b){throw A.b(A.S(u.O))},
q(a,b){throw A.b(A.S("Cannot add to a fixed-length list"))}}
A.ju.prototype={
m(a,b,c){throw A.b(A.S("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.b(A.S("Cannot change the length of an unmodifiable list"))},
q(a,b){throw A.b(A.S("Cannot add to an unmodifiable list"))},
cQ(a,b){throw A.b(A.S("Cannot modify an unmodifiable list"))},
P(a,b,c,d,e){throw A.b(A.S("Cannot modify an unmodifiable list"))},
ai(a,b,c,d){return this.P(0,b,c,d,0)}}
A.ef.prototype={}
A.d9.prototype={
gk(a){return J.aG(this.a)},
V(a,b){var s=this.a,r=J.a4(s)
return r.V(s,r.gk(s)-1-b)}}
A.jp.prototype={
gv(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gv(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
D(a,b){if(b==null)return!1
return b instanceof A.jp&&this.a===b.a}}
A.hG.prototype={}
A.ho.prototype={$r:"+immediateRestart(1)",$s:1}
A.a3.prototype={$r:"+(1,2)",$s:2}
A.hp.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:3}
A.hq.prototype={$r:"+controller,sync(1,2)",$s:4}
A.kf.prototype={$r:"+downloaded,total(1,2)",$s:5}
A.eD.prototype={$r:"+file,outFlags(1,2)",$s:6}
A.kg.prototype={$r:"+name,parameters(1,2)",$s:7}
A.kh.prototype={$r:"+result,resultCode(1,2)",$s:8}
A.cC.prototype={$r:"+(1,2,3)",$s:9}
A.ki.prototype={$r:"+autocommit,lastInsertRowid,result(1,2,3)",$s:10}
A.kj.prototype={$r:"+connectName,connectPort,lockName(1,2,3)",$s:11}
A.kk.prototype={$r:"+hasSynced,lastSyncedAt,priority(1,2,3)",$s:12}
A.kl.prototype={$r:"+atLast,priority,sinceLast,targetCount(1,2,3,4)",$s:13}
A.f2.prototype={
bh(a,b,c){var s=A.p(this)
return A.wW(this,s.c,s.y[1],b,c)},
gE(a){return this.gk(this)===0},
j(a){return A.nJ(this)},
gbj(){return new A.eH(this.nB(),A.p(this).h("eH<N<1,2>>"))},
nB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbj(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga2(),o=o.gA(o),n=A.p(s).h("N<1,2>")
case 2:if(!o.l()){r=3
break}m=o.gp()
r=4
return a.b=new A.N(m,s.i(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cE(a,b,c,d){var s=A.a2(c,d)
this.aa(0,new A.lZ(this,b,s))
return s},
$ia_:1}
A.lZ.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.m(0,s.a,s.b)},
$S(){return A.p(this.a).h("~(1,2)")}}
A.bs.prototype={
gk(a){return this.b.length},
gi9(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
H(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.H(b))return null
return this.b[this.a[b]]},
aa(a,b){var s,r,q=this.gi9(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
ga2(){return new A.hf(this.gi9(),this.$ti.h("hf<1>"))}}
A.hf.prototype={
gk(a){return this.a.length},
gE(a){return 0===this.a.length},
gaN(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.ex(s,s.length,this.$ti.h("ex<1>"))}}
A.ex.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.f3.prototype={
q(a,b){A.A6()}}
A.f4.prototype={
gk(a){return this.b},
gE(a){return this.b===0},
gaN(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ex(s,s.length,r.$ti.h("ex<1>"))},
U(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
dC(a){return A.AG(this,this.$ti.c)}}
A.nr.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.fj&&this.a.D(0,b.a)&&A.w6(this)===A.w6(b)},
gv(a){return A.bH(this.a,A.w6(this),B.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)},
j(a){var s=B.d.bI([A.bn(this.$ti.c)],", ")
return this.a.j(0)+" with "+("<"+s+">")}}
A.fj.prototype={
$1(a){return this.a.$1$1(a,this.$ti.y[0])},
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Er(A.kR(this.a),this.$ti)}}
A.fD.prototype={}
A.pw.prototype={
b7(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.fC.prototype={
j(a){return"Null check operator used on a null value"}}
A.iD.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.jt.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.iW.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iQ:1}
A.fb.prototype={}
A.ht.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iae:1}
A.cU.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.z5(r==null?"unknown":r)+"'"},
ga3(a){var s=A.kR(this)
return A.bn(s==null?A.bo(this):s)},
gpI(){return this},
$C:"$1",
$R:1,
$D:null}
A.lK.prototype={$C:"$0",$R:0}
A.lL.prototype={$C:"$2",$R:2}
A.pk.prototype={}
A.oz.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.z5(s)+"'"}}
A.eZ.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.eZ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.kT(this.a)^A.e4(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.j1(this.a)+"'")}}
A.j7.prototype={
j(a){return"RuntimeError: "+this.a}}
A.b0.prototype={
gk(a){return this.a},
gE(a){return this.a===0},
ga2(){return new A.b1(this,A.p(this).h("b1<1>"))},
gbj(){return new A.ax(this,A.p(this).h("ax<1,2>"))},
H(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jq(a)},
jq(a){var s=this.d
if(s==null)return!1
return this.cC(s[this.cB(a)],a)>=0},
ac(a,b){b.aa(0,new A.nA(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jr(b)},
jr(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cB(a)]
r=this.cC(s,a)
if(r<0)return null
return s[r].b},
m(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.hB(s==null?q.b=q.fn():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.hB(r==null?q.c=q.fn():r,b,c)}else q.jt(b,c)},
jt(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.fn()
s=p.cB(a)
r=o[s]
if(r==null)o[s]=[p.fo(a,b)]
else{q=p.cC(r,a)
if(q>=0)r[q].b=b
else r.push(p.fo(a,b))}},
cG(a,b){var s,r,q=this
if(q.H(a)){s=q.i(0,a)
return s==null?A.p(q).y[1].a(s):s}r=b.$0()
q.m(0,a,r)
return r},
I(a,b){var s=this
if(typeof b=="string")return s.it(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.it(s.c,b)
else return s.js(b)},
js(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cB(a)
r=n[s]
q=o.cC(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.iK(p)
if(r.length===0)delete n[s]
return p.b},
aL(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fm()}},
aa(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ap(s))
r=r.c}},
hB(a,b,c){var s=a[b]
if(s==null)a[b]=this.fo(b,c)
else s.b=c},
it(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.iK(s)
delete a[b]
return s.b},
fm(){this.r=this.r+1&1073741823},
fo(a,b){var s,r=this,q=new A.nD(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fm()
return q},
iK(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fm()},
cB(a){return J.y(a)&1073741823},
cC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1},
j(a){return A.nJ(this)},
fn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.nA.prototype={
$2(a,b){this.a.m(0,a,b)},
$S(){return A.p(this.a).h("~(1,2)")}}
A.nD.prototype={}
A.b1.prototype={
gk(a){return this.a.a},
gE(a){return this.a.a===0},
gA(a){var s=this.a
return new A.fp(s,s.r,s.e)},
U(a,b){return this.a.H(b)}}
A.fp.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.be.prototype={
gk(a){return this.a.a},
gE(a){return this.a.a===0},
gA(a){var s=this.a
return new A.bd(s,s.r,s.e)}}
A.bd.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.ax.prototype={
gk(a){return this.a.a},
gE(a){return this.a.a===0},
gA(a){var s=this.a
return new A.iK(s,s.r,s.e,this.$ti.h("iK<1,2>"))}}
A.iK.prototype={
gp(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.N(s.a,s.b,r.$ti.h("N<1,2>"))
r.c=s.c
return!0}}}
A.fm.prototype={
cB(a){return A.kT(a)&1073741823},
cC(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.uA.prototype={
$1(a){return this.a(a)},
$S:36}
A.uB.prototype={
$2(a,b){return this.a(a,b)},
$S:148}
A.uC.prototype={
$1(a){return this.a(a)},
$S:91}
A.hn.prototype={
ga3(a){return A.bn(this.i4())},
i4(){return A.Ee(this.$r,this.cW())},
j(a){return this.iJ(!1)},
iJ(a){var s,r,q,p,o,n=this.lw(),m=this.cW(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.x7(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
lw(){var s,r=this.$s
while($.t9.length<=r)$.t9.push(null)
s=$.t9[r]
if(s==null){s=this.lj()
$.t9[r]=s}return s},
lj(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.v(new Array(l),t.hf)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}return A.nG(k,t.K)}}
A.kc.prototype={
cW(){return[this.a,this.b]},
D(a,b){if(b==null)return!1
return b instanceof A.kc&&this.$s===b.$s&&J.z(this.a,b.a)&&J.z(this.b,b.b)},
gv(a){return A.bH(this.$s,this.a,this.b,B.c,B.c,B.c,B.c,B.c,B.c,B.c)}}
A.kb.prototype={
cW(){return[this.a]},
D(a,b){if(b==null)return!1
return b instanceof A.kb&&this.$s===b.$s&&J.z(this.a,b.a)},
gv(a){return A.bH(this.$s,this.a,B.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)}}
A.kd.prototype={
cW(){return[this.a,this.b,this.c]},
D(a,b){var s=this
if(b==null)return!1
return b instanceof A.kd&&s.$s===b.$s&&J.z(s.a,b.a)&&J.z(s.b,b.b)&&J.z(s.c,b.c)},
gv(a){var s=this
return A.bH(s.$s,s.a,s.b,s.c,B.c,B.c,B.c,B.c,B.c,B.c)}}
A.ke.prototype={
cW(){return this.a},
D(a,b){if(b==null)return!1
return b instanceof A.ke&&this.$s===b.$s&&A.Cd(this.a,b.a)},
gv(a){return A.bH(this.$s,A.AR(this.a),B.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)}}
A.fl.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
glS(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vg(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
glR(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.vg(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
jf(a){var s=this.b.exec(a)
if(s==null)return null
return new A.eB(s)},
fE(a,b,c){var s=b.length
if(c>s)throw A.b(A.ac(c,0,s,null,null))
return new A.jI(this,b,c)},
e3(a,b){return this.fE(0,b,0)},
lv(a,b){var s,r=this.glS()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.eB(s)},
lu(a,b){var s,r=this.glR()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.eB(s)},
cF(a,b,c){if(c<0||c>b.length)throw A.b(A.ac(c,0,b.length,null,null))
return this.lu(b,c)}}
A.eB.prototype={
gC(){var s=this.b
return s.index+s[0].length},
i(a,b){return this.b[b]},
$id3:1,
$ij3:1}
A.jI.prototype={
gA(a){return new A.jJ(this.a,this.b,this.c)}}
A.jJ.prototype={
gp(){var s=this.d
return s==null?t.lu.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.lv(l,s)
if(p!=null){m.d=p
o=p.gC()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.fM.prototype={
gC(){return this.a+this.c.length},
i(a,b){if(b!==0)throw A.b(A.o7(b,null))
return this.c},
$id3:1}
A.kw.prototype={
gA(a){return new A.tt(this.a,this.b,this.c)}}
A.tt.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.fM(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s}}
A.jS.prototype={
dT(){var s=this.b
if(s===this)throw A.b(new A.d1("Local '"+this.a+"' has not been initialized."))
return s},
aT(){var s=this.b
if(s===this)throw A.b(A.wS(this.a))
return s}}
A.e0.prototype={
gju(a){return a.byteLength},
ga3(a){return B.bF},
e4(a,b,c){A.kL(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
iU(a){return this.e4(a,0,null)},
$ia0:1,
$icP:1}
A.bG.prototype={$ibG:1}
A.fy.prototype={
gao(a){if(((a.$flags|0)&2)!==0)return new A.kE(a.buffer)
else return a.buffer},
lJ(a,b,c,d){var s=A.ac(b,0,c,d,null)
throw A.b(s)},
hG(a,b,c,d){if(b>>>0!==b||b>c)this.lJ(a,b,c,d)}}
A.kE.prototype={
gju(a){return this.a.byteLength},
e4(a,b,c){var s=A.b4(this.a,b,c)
s.$flags=3
return s},
iU(a){return this.e4(0,0,null)},
$icP:1}
A.fx.prototype={
ga3(a){return B.bG},
$ia0:1,
$iv7:1}
A.e1.prototype={
gk(a){return a.length},
iB(a,b,c,d,e){var s,r,q=a.length
this.hG(a,b,q,"start")
this.hG(a,c,q,"end")
if(b>c)throw A.b(A.ac(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.K(e,null))
r=d.length
if(r-e<s)throw A.b(A.E("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaH:1,
$ib_:1}
A.cq.prototype={
i(a,b){A.cg(b,a,a.length)
return a[b]},
m(a,b,c){a.$flags&2&&A.C(a)
A.cg(b,a,a.length)
a[b]=c},
P(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.dQ.b(d)){this.iB(a,b,c,d,e)
return}this.hv(a,b,c,d,e)},
ai(a,b,c,d){return this.P(a,b,c,d,0)},
$ix:1,
$in:1,
$ir:1}
A.b3.prototype={
m(a,b,c){a.$flags&2&&A.C(a)
A.cg(b,a,a.length)
a[b]=c},
P(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.aj.b(d)){this.iB(a,b,c,d,e)
return}this.hv(a,b,c,d,e)},
ai(a,b,c,d){return this.P(a,b,c,d,0)},
$ix:1,
$in:1,
$ir:1}
A.iN.prototype={
ga3(a){return B.bH},
$ia0:1,
$imM:1}
A.iO.prototype={
ga3(a){return B.bI},
$ia0:1,
$imN:1}
A.iP.prototype={
ga3(a){return B.bJ},
i(a,b){A.cg(b,a,a.length)
return a[b]},
$ia0:1,
$ins:1}
A.iQ.prototype={
ga3(a){return B.bK},
i(a,b){A.cg(b,a,a.length)
return a[b]},
$ia0:1,
$int:1}
A.iR.prototype={
ga3(a){return B.bL},
i(a,b){A.cg(b,a,a.length)
return a[b]},
$ia0:1,
$inu:1}
A.iS.prototype={
ga3(a){return B.bO},
i(a,b){A.cg(b,a,a.length)
return a[b]},
$ia0:1,
$ipy:1}
A.fz.prototype={
ga3(a){return B.bP},
i(a,b){A.cg(b,a,a.length)
return a[b]},
bR(a,b,c){return new Uint32Array(a.subarray(b,A.ye(b,c,a.length)))},
$ia0:1,
$ipz:1}
A.fA.prototype={
ga3(a){return B.bQ},
gk(a){return a.length},
i(a,b){A.cg(b,a,a.length)
return a[b]},
$ia0:1,
$ipA:1}
A.d4.prototype={
ga3(a){return B.bR},
gk(a){return a.length},
i(a,b){A.cg(b,a,a.length)
return a[b]},
bR(a,b,c){return new Uint8Array(a.subarray(b,A.ye(b,c,a.length)))},
$ia0:1,
$id4:1,
$ibh:1}
A.hi.prototype={}
A.hj.prototype={}
A.hk.prototype={}
A.hl.prototype={}
A.bv.prototype={
h(a){return A.hA(v.typeUniverse,this,a)},
G(a){return A.xU(v.typeUniverse,this,a)}}
A.k0.prototype={}
A.tA.prototype={
j(a){return A.b9(this.a,null)}}
A.jX.prototype={
j(a){return this.a}}
A.hw.prototype={$ic5:1}
A.qB.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
A.qA.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:114}
A.qC.prototype={
$0(){this.a.$0()},
$S:1}
A.qD.prototype={
$0(){this.a.$0()},
$S:1}
A.kA.prototype={
l4(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.cK(new A.tz(this,b),0),a)
else throw A.b(A.S("`setTimeout()` not found."))},
l5(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.cK(new A.ty(this,a,Date.now(),b),0),a)
else throw A.b(A.S("Periodic timer."))},
u(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.S("Canceling a timer."))}}
A.tz.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ty.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.hx(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.h0.prototype={
X(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aA(a)
else{s=r.a
if(r.$ti.h("o<1>").b(a))s.hF(a)
else s.bU(a)}},
N(){return this.X(null)},
b6(a,b){var s
if(b==null)b=A.cO(a)
s=this.a
if(this.b)s.a9(new A.a1(a,b))
else s.S(new A.a1(a,b))},
a8(a){return this.b6(a,null)},
$icX:1}
A.tP.prototype={
$1(a){return this.a.$2(0,a)},
$S:11}
A.tQ.prototype={
$2(a,b){this.a.$2(1,new A.fb(a,b))},
$S:62}
A.um.prototype={
$2(a,b){this.a(a,b)},
$S:63}
A.tN.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.M()
s=q.b
if((s&1)!==0?(q.gag().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.tO.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:10}
A.jL.prototype={
l_(a,b){var s=new A.qF(a)
this.a=A.bL(new A.qH(this,a),new A.qI(s),null,new A.qJ(this,s),!1,b)}}
A.qF.prototype={
$0(){A.eW(new A.qG(this.a))},
$S:1}
A.qG.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.qI.prototype={
$0(){this.a.$0()},
$S:0}
A.qJ.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.qH.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.M()
if((r.b&4)===0){s.c=new A.l($.m,t._)
if(s.b){s.b=!1
A.eW(new A.qE(this.b))}return s.c}},
$S:80}
A.qE.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.he.prototype={
j(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.ky.prototype={
gp(){return this.b},
ml(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.ml(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xP
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.xP
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.E("sync*"))}return!1},
pK(a){var s,r,q=this
if(a instanceof A.eH){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.U(a)
return 2}}}
A.eH.prototype={
gA(a){return new A.ky(this.a())}}
A.a1.prototype={
j(a){return A.q(this.a)},
$iW:1,
gbz(){return this.b}}
A.aA.prototype={
gaq(){return!0}}
A.dl.prototype={
b1(){},
b2(){}}
A.ca.prototype={
sjy(a){throw A.b(A.S(u.t))},
sjz(a){throw A.b(A.S(u.t))},
gbA(){return new A.aA(this,A.p(this).h("aA<1>"))},
gbZ(){return this.c<4},
dP(){var s=this.r
return s==null?this.r=new A.l($.m,t.D):s},
iu(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
fv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.xC(c,A.p(j).c)
s=A.p(j)
r=$.m
q=d?1:0
p=b!=null?32:0
o=A.jO(r,a,s.c)
n=A.jP(r,b)
m=c==null?A.un():c
l=new A.dl(j,o,n,r.aZ(m,t.H),r,q|p,s.h("dl<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.kO(j.a)
return l},
im(a){var s,r=this
A.p(r).h("dl<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.iu(a)
if((r.c&2)===0&&r.d==null)r.eS()}return null},
io(a){},
ip(a){},
bT(){if((this.c&4)!==0)return new A.b6("Cannot add new events after calling close")
return new A.b6("Cannot add new events while doing an addStream")},
q(a,b){if(!this.gbZ())throw A.b(this.bT())
this.an(b)},
ad(a,b){var s
if(!this.gbZ())throw A.b(this.bT())
s=A.av(a,b)
this.bf(s.a,s.b)},
n(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbZ())throw A.b(q.bT())
q.c|=4
r=q.dP()
q.bD()
return r},
e2(a,b){var s,r=this
if(!r.gbZ())throw A.b(r.bT())
r.c|=8
s=A.Bz(r,a,!1)
r.f=s
return s.a},
iS(a){return this.e2(a,null)},
M(a){this.an(a)},
a7(a,b){this.bf(a,b)},
Z(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aA(null)},
f9(a){var s,r,q,p=this,o=p.c
if((o&2)!==0)throw A.b(A.E(u.c))
s=p.d
if(s==null)return
r=o&1
p.c=o^3
while(s!=null){o=s.ay
if((o&1)===r){s.ay=o|2
a.$1(s)
o=s.ay^=1
q=s.ch
if((o&4)!==0)p.iu(s)
s.ay&=4294967293
s=q}else s=s.ch}p.c&=4294967293
if(p.d==null)p.eS()},
eS(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aA(null)}A.kO(this.b)},
$iaj:1,
$ibK:1,
sjx(a){return this.a=a},
sjw(a){return this.b=a}}
A.dv.prototype={
gbZ(){return A.ca.prototype.gbZ.call(this)&&(this.c&2)===0},
bT(){if((this.c&2)!==0)return new A.b6(u.c)
return this.kM()},
an(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.M(a)
s.c&=4294967293
if(s.d==null)s.eS()
return}s.f9(new A.tv(s,a))},
bf(a,b){if(this.d==null)return
this.f9(new A.tx(this,a,b))},
bD(){var s=this
if(s.d!=null)s.f9(new A.tw(s))
else s.r.aA(null)}}
A.tv.prototype={
$1(a){a.M(this.b)},
$S(){return this.a.$ti.h("~(au<1>)")}}
A.tx.prototype={
$1(a){a.a7(this.b,this.c)},
$S(){return this.a.$ti.h("~(au<1>)")}}
A.tw.prototype={
$1(a){a.Z()},
$S(){return this.a.$ti.h("~(au<1>)")}}
A.h1.prototype={
an(a){var s
for(s=this.d;s!=null;s=s.ch)s.ba(new A.bz(a))},
bf(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.ba(new A.er(a,b))},
bD(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.ba(B.y)
else this.r.aA(null)}}
A.mV.prototype={
$0(){var s,r,q,p,o,n,m=null
try{m=this.a.$0()}catch(q){s=A.I(q)
r=A.P(q)
p=s
o=r
n=A.dy(p,o)
if(n==null)p=new A.a1(p,o)
else p=n
this.b.a9(p)
return}this.b.bb(m)},
$S:0}
A.mY.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.a9(new A.a1(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.a9(new A.a1(q,r))}},
$S:5}
A.mX.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.kZ(j,m.b,a)
if(J.z(k,0)){l=m.d
s=A.v([],l.h("t<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.a5)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.l_(s,n)}m.c.bU(s)}}else if(J.z(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.a9(new A.a1(s,l))}},
$S(){return this.d.h("G(0)")}}
A.mO.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.h("0/(k,ae)")}}
A.mP.prototype={
$1(a){var s,r,q,p,o,n,m=this
if(a===0){s=A.v([],m.c.h("t<0>"))
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.a5)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}m.a.X(s)}else{s=A.v([],t.b9)
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.a5)(r),++p)s.push(r[p].c)
q=A.v([],m.c.h("t<0?>"))
for(n=r.length,p=0;p<r.length;r.length===n||(0,A.a5)(r),++p)q.push(r[p].b)
m.a.a8(new A.e2(B.d.jg(s,A.DL()),a))}},
$S:7}
A.mT.prototype={
$1(a){var s=this,r=s.a,q=s.b
if(a===0)r.X(new A.cC(q.ghg(),s.c.ghg(),s.d.ghg()))
else{q=q.c
if(q==null)q=s.c.c
r.a8(new A.e2(q==null?s.d.c:q,a))}},
$S:7}
A.e2.prototype={
j(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gbz(){var s=this.c
s=s==null?null:s.b
return s==null?A.W.prototype.gbz.call(this):s}}
A.bk.prototype={
ghg(){var s=this.b
if(s==null)this.$ti.c.a(s)
return s},
mD(a){this.a.b8(new A.rx(this,a),new A.ry(this,a),t.P)}}
A.rx.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.h("G(1)")}}
A.ry.prototype={
$2(a,b){this.a.c=new A.a1(a,b)
this.b.$1(1)},
$S:6}
A.rw.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:7}
A.dm.prototype={
b6(a,b){if((this.a.a&30)!==0)throw A.b(A.E("Future already completed"))
this.a9(A.av(a,b))},
a8(a){return this.b6(a,null)},
$icX:1}
A.ad.prototype={
X(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.E("Future already completed"))
s.aA(a)},
N(){return this.X(null)},
a9(a){this.a.S(a)}}
A.O.prototype={
X(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.E("Future already completed"))
s.bb(a)},
N(){return this.X(null)},
a9(a){this.a.a9(a)}}
A.bj.prototype={
ou(a){if((this.c&15)!==6)return!0
return this.b.b.c7(this.d,a.a,t.y,t.K)},
nW(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.d.b(r))q=m.ha(r,n,a.b,p,o,t.l)
else q=m.c7(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.I(s))){if((this.c&1)!==0)throw A.b(A.K("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.K("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
b8(a,b,c){var s,r,q=$.m
if(q===B.e){if(b!=null&&!t.d.b(b)&&!t.mq.b(b))throw A.b(A.aX(b,"onError",u.w))}else{a=q.bs(a,c.h("0/"),this.$ti.c)
if(b!=null)b=A.ys(b,q)}s=new A.l($.m,c.h("l<0>"))
r=b==null?1:3
this.cl(new A.bj(s,r,a,b,this.$ti.h("@<1>").G(c).h("bj<1,2>")))
return s},
aQ(a,b){return this.b8(a,null,b)},
iH(a,b,c){var s=new A.l($.m,c.h("l<0>"))
this.cl(new A.bj(s,19,a,b,this.$ti.h("@<1>").G(c).h("bj<1,2>")))
return s},
lG(){var s,r
if(((this.a|=1)&4)!==0){s=this
do s=s.c
while(r=s.a,(r&4)!==0)
s.a=r|1}},
j0(a){var s=this.$ti,r=$.m,q=new A.l(r,s)
if(r!==B.e)a=A.ys(a,r)
this.cl(new A.bj(q,2,null,a,s.h("bj<1,1>")))
return q},
J(a){var s=this.$ti,r=$.m,q=new A.l(r,s)
if(r!==B.e)a=r.aZ(a,t.z)
this.cl(new A.bj(q,8,a,null,s.h("bj<1,1>")))
return q},
mq(a){this.a=this.a&1|16
this.c=a},
dN(a){this.a=a.a&30|this.a&1
this.c=a.c},
cl(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.cl(a)
return}s.dN(r)}s.b.bP(new A.rz(s,a))}},
ij(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ij(a)
return}n.dN(s)}m.a=n.dU(a)
n.b.bP(new A.rE(m,n))}},
d1(){var s=this.c
this.c=null
return this.dU(s)},
dU(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bb(a){var s,r=this
if(r.$ti.h("o<1>").b(a))A.rC(a,r,!0)
else{s=r.d1()
r.a=8
r.c=a
A.dr(r,s)}},
bU(a){var s=this,r=s.d1()
s.a=8
s.c=a
A.dr(s,r)},
li(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbk()===r.gbk())}else s=!1
if(s)return
q=p.d1()
p.dN(a)
A.dr(p,q)},
a9(a){var s=this.d1()
this.mq(a)
A.dr(this,s)},
lh(a,b){this.a9(new A.a1(a,b))},
aA(a){if(this.$ti.h("o<1>").b(a)){this.hF(a)
return}this.hD(a)},
hD(a){this.a^=2
this.b.bP(new A.rB(this,a))},
hF(a){A.rC(a,this,!1)
return},
S(a){this.a^=2
this.b.bP(new A.rA(this,a))},
oR(a,b){var s,r,q,p=this,o={}
if((p.a&24)!==0){o=new A.l($.m,p.$ti)
o.aA(p)
return o}s=p.$ti
r=$.m
q=new A.l(r,s)
o.a=null
o.a=A.pv(a,new A.rK(p,q,r,r.aZ(b,s.h("1/"))))
p.b8(new A.rL(o,p,q),new A.rM(o,q),t.P)
return q},
$io:1}
A.rz.prototype={
$0(){A.dr(this.a,this.b)},
$S:0}
A.rE.prototype={
$0(){A.dr(this.b,this.a.a)},
$S:0}
A.rD.prototype={
$0(){A.rC(this.a.a,this.b,!0)},
$S:0}
A.rB.prototype={
$0(){this.a.bU(this.b)},
$S:0}
A.rA.prototype={
$0(){this.a.a9(this.b)},
$S:0}
A.rH.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bt(q.d,t.z)}catch(p){s=A.I(p)
r=A.P(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.cO(q)
n=k.a
n.c=new A.a1(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.b8(new A.rI(l,m),new A.rJ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rI.prototype={
$1(a){this.a.li(this.b)},
$S:10}
A.rJ.prototype={
$2(a,b){this.a.a9(new A.a1(a,b))},
$S:6}
A.rG.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.c7(p.d,this.b,o.h("2/"),o.c)}catch(n){s=A.I(n)
r=A.P(n)
q=s
p=r
if(p==null)p=A.cO(q)
o=this.a
o.c=new A.a1(q,p)
o.b=!0}},
$S:0}
A.rF.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.ou(s)&&p.a.e!=null){p.c=p.a.nW(s)
p.b=!1}}catch(o){r=A.I(o)
q=A.P(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cO(p)
m=l.b
m.c=new A.a1(p,n)
p=m}p.b=!0}},
$S:0}
A.rK.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.bb(n.c.bt(n.d,n.a.$ti.h("1/")))}catch(q){s=A.I(q)
r=A.P(q)
p=s
o=r
if(o==null)o=A.cO(p)
n.b.a9(new A.a1(p,o))}},
$S:0}
A.rL.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.u()
this.c.bU(a)}},
$S(){return this.b.$ti.h("G(1)")}}
A.rM.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.u()
this.b.a9(new A.a1(a,b))}},
$S:6}
A.jK.prototype={}
A.D.prototype={
gaq(){return!1},
mW(a,b){var s,r=null,q={}
q.a=null
s=this.gaq()?q.a=new A.dv(r,r,b.h("dv<0>")):q.a=new A.cF(r,r,r,r,b.h("cF<0>"))
s.sjx(new A.oG(q,this,a))
return q.a.gbA()},
nP(a,b,c,d){var s,r={},q=new A.l($.m,d.h("l<0>"))
r.a=b
s=this.B(null,!0,new A.oL(r,q),q.gf1())
s.bq(new A.oM(r,this,c,s,q,d))
return q},
gk(a){var s={},r=new A.l($.m,t.hy)
s.a=0
this.B(new A.oN(s,this),!0,new A.oO(s,r),r.gf1())
return r},
gae(a){var s=new A.l($.m,A.p(this).h("l<D.T>")),r=this.B(null,!0,new A.oH(s),s.gf1())
r.bq(new A.oI(this,r,s))
return s}}
A.oG.prototype={
$0(){var s=this.b,r=this.a,q=r.a.gdM(),p=s.ar(null,r.a.gaE(),q)
p.bq(new A.oF(r,s,this.c,p))
r.a.sjw(p.ge5())
if(!s.gaq()){s=r.a
s.sjy(p.gep())
s.sjz(p.gbM())}},
$S:0}
A.oF.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=null
try{k=l.c.$1(a)}catch(p){s=A.I(p)
r=A.P(p)
o=s
n=r
m=A.dy(o,n)
if(m==null)m=new A.a1(o,n==null?A.cO(o):n)
q=m
l.a.a.ad(q.a,q.b)
return}if(k!=null){o=l.d
o.ah()
l.a.a.iS(k).J(o.gbM())}},
$S(){return A.p(this.b).h("~(D.T)")}}
A.oL.prototype={
$0(){this.b.bb(this.a.a)},
$S:0}
A.oM.prototype={
$1(a){var s=this,r=s.a,q=s.f
A.Du(new A.oJ(r,s.c,a,q),new A.oK(r,q),A.CM(s.d,s.e))},
$S(){return A.p(this.b).h("~(D.T)")}}
A.oJ.prototype={
$0(){return this.b.$2(this.a.a,this.c)},
$S(){return this.d.h("0()")}}
A.oK.prototype={
$1(a){this.a.a=a},
$S(){return this.b.h("G(0)")}}
A.oN.prototype={
$1(a){++this.a.a},
$S(){return A.p(this.b).h("~(D.T)")}}
A.oO.prototype={
$0(){this.b.bb(this.a.a)},
$S:0}
A.oH.prototype={
$0(){var s,r=A.fJ(),q=new A.b6("No element")
A.j2(q,r)
s=A.dy(q,r)
if(s==null)s=new A.a1(q,r)
this.a.a9(s)},
$S:0}
A.oI.prototype={
$1(a){A.CN(this.b,this.c,a)},
$S(){return A.p(this.a).h("~(D.T)")}}
A.fL.prototype={
gaq(){return this.a.gaq()},
B(a,b,c,d){return this.a.B(a,b,c,d)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.jl.prototype={}
A.cD.prototype={
gbA(){return new A.a7(this,A.p(this).h("a7<1>"))},
gm3(){if((this.b&8)===0)return this.a
return this.a.c},
bW(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.eC():s}r=q.a
s=r.c
return s==null?r.c=new A.eC():s},
gag(){var s=this.a
return(this.b&8)!==0?s.c:s},
am(){if((this.b&4)!==0)return new A.b6("Cannot add event after closing")
return new A.b6("Cannot add event while adding a stream")},
e2(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.am())
if((o&2)!==0){o=new A.l($.m,t._)
o.aA(null)
return o}o=p.a
s=b===!0
r=new A.l($.m,t._)
q=s?A.BA(p):p.gdM()
q=a.B(p.geQ(),s,p.geW(),q)
s=p.b
if((s&1)!==0?(p.gag().e&4)!==0:(s&2)===0)q.ah()
p.a=new A.kv(o,r,q)
p.b|=8
return r},
iS(a){return this.e2(a,null)},
dP(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.cM():new A.l($.m,t.D)
return s},
q(a,b){if(this.b>=4)throw A.b(this.am())
this.M(b)},
ad(a,b){var s
if(this.b>=4)throw A.b(this.am())
s=A.av(a,b)
this.a7(s.a,s.b)},
mP(a){return this.ad(a,null)},
n(){var s=this,r=s.b
if((r&4)!==0)return s.dP()
if(r>=4)throw A.b(s.am())
s.hH()
return s.dP()},
hH(){var s=this.b|=4
if((s&1)!==0)this.bD()
else if((s&3)===0)this.bW().q(0,B.y)},
M(a){var s=this.b
if((s&1)!==0)this.an(a)
else if((s&3)===0)this.bW().q(0,new A.bz(a))},
a7(a,b){var s=this.b
if((s&1)!==0)this.bf(a,b)
else if((s&3)===0)this.bW().q(0,new A.er(a,b))},
Z(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aA(null)},
fv(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.E("Stream has already been listened to."))
s=A.BS(p,a,b,c,d,A.p(p).c)
r=p.gm3()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.aj()}else p.a=s
s.mr(r)
s.fb(new A.tp(p))
return s},
im(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.u()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.l)k=r}catch(o){q=A.I(o)
p=A.P(o)
n=new A.l($.m,t.D)
n.S(new A.a1(q,p))
k=n}else k=k.J(s)
m=new A.to(l)
if(k!=null)k=k.J(m)
else m.$0()
return k},
io(a){if((this.b&8)!==0)this.a.b.ah()
A.kO(this.e)},
ip(a){if((this.b&8)!==0)this.a.b.aj()
A.kO(this.f)},
$iaj:1,
$ibK:1,
sjx(a){return this.d=a},
sjy(a){return this.e=a},
sjz(a){return this.f=a},
sjw(a){return this.r=a}}
A.tp.prototype={
$0(){A.kO(this.a.d)},
$S:0}
A.to.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aA(null)},
$S:0}
A.kz.prototype={
an(a){this.gag().M(a)},
bf(a,b){this.gag().a7(a,b)},
bD(){this.gag().Z()}}
A.jM.prototype={
an(a){this.gag().ba(new A.bz(a))},
bf(a,b){this.gag().ba(new A.er(a,b))},
bD(){this.gag().ba(B.y)}}
A.bO.prototype={}
A.cF.prototype={}
A.a7.prototype={
gv(a){return(A.e4(this.a)^892482866)>>>0},
D(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a7&&b.a===this.a}}
A.cB.prototype={
dS(){return this.w.im(this)},
b1(){this.w.io(this)},
b2(){this.w.ip(this)}}
A.h_.prototype={
u(){var s=this.b.u()
return s.J(new A.qx(this))}}
A.qy.prototype={
$2(a,b){var s=this.a
s.a7(a,b)
s.Z()},
$S:6}
A.qx.prototype={
$0(){this.a.a.aA(null)},
$S:1}
A.kv.prototype={}
A.au.prototype={
mr(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.dH(s)}},
bq(a){this.a=A.jO(this.d,a,A.p(this).h("au.T"))},
dr(a){var s=this,r=s.e
if(a==null)s.e=(r&4294967263)>>>0
else s.e=(r|32)>>>0
s.b=A.jP(s.d,a)},
aH(a){var s,r=this,q=r.e
if((q&8)!==0)return
r.e=(q+256|4)>>>0
if(a!=null)a.J(r.gbM())
if(q<256){s=r.r
if(s!=null)if(s.a===1)s.a=3}if((q&4)===0&&(r.e&64)===0)r.fb(r.gcY())},
ah(){return this.aH(null)},
aj(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.dH(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.fb(s.gcZ())}}},
u(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.eT()
r=s.f
return r==null?$.cM():r},
eT(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.dS()},
M(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.an(a)
else this.ba(new A.bz(a))},
a7(a,b){var s
if(t.C.b(a))A.j2(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.bf(a,b)
else this.ba(new A.er(a,b))},
Z(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.bD()
else s.ba(B.y)},
b1(){},
b2(){},
dS(){return null},
ba(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.eC()
q.q(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.dH(r)}},
an(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.c8(s.a,a,A.p(s).h("au.T"))
s.e=(s.e&4294967231)>>>0
s.eV((r&4)!==0)},
bf(a,b){var s,r=this,q=r.e,p=new A.qT(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.eT()
s=r.f
if(s!=null&&s!==$.cM())s.J(p)
else p.$0()}else{p.$0()
r.eV((q&4)!==0)}},
bD(){var s,r=this,q=new A.qS(r)
r.eT()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.cM())s.J(q)
else q.$0()},
fb(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.eV((r&4)!==0)},
eV(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.b1()
else q.b2()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.dH(q)},
$iaf:1}
A.qT.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.r.b(s))q.hb(s,o,this.c,r,t.l)
else q.c8(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.qS.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.dA(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.eG.prototype={
B(a,b,c,d){return this.a.fv(a,d,c,b===!0)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.jW.prototype={
gbp(){return this.a},
sbp(a){return this.a=a}}
A.bz.prototype={
h8(a){a.an(this.b)}}
A.er.prototype={
h8(a){a.bf(this.b,this.c)}}
A.ro.prototype={
h8(a){a.bD()},
gbp(){return null},
sbp(a){throw A.b(A.E("No events after a done."))}}
A.eC.prototype={
dH(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eW(new A.t8(s,a))
s.a=1},
q(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sbp(b)
s.c=b}}}
A.t8.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gbp()
q.b=r
if(r==null)q.c=null
s.h8(this.b)},
$S:0}
A.es.prototype={
bq(a){},
dr(a){},
aH(a){var s=this.a
if(s>=0){this.a=s+2
if(a!=null)a.J(this.gbM())}},
ah(){return this.aH(null)},
aj(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.eW(s.gig())}else s.a=r},
u(){this.a=-1
this.c=null
return $.cM()},
m2(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.dA(s)}}else r.a=q},
$iaf:1}
A.bR.prototype={
gp(){if(this.c)return this.b
return null},
l(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.l($.m,t.x)
r.b=s
r.c=!1
q.aj()
return s}throw A.b(A.E("Already waiting for next."))}return r.lH()},
lH(){var s,r,q=this,p=q.b
if(p!=null){s=new A.l($.m,t.x)
q.b=s
r=p.B(q.glV(),!0,q.glX(),q.glZ())
if(q.b!=null)q.a=r
return s}return $.z9()},
u(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aA(!1)
else s.c=!1
return r.u()}return $.cM()},
lW(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.bb(!0)
if(q.c){r=q.a
if(r!=null)r.ah()}},
m_(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.a9(new A.a1(a,b))
else q.S(new A.a1(a,b))},
lY(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.bU(!1)
else q.hD(!1)}}
A.dq.prototype={
B(a,b,c,d){return A.xC(c,this.$ti.c)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)},
gaq(){return!0}}
A.bB.prototype={
B(a,b,c,d){var s=null,r=new A.hh(s,s,s,s,this.$ti.h("hh<1>"))
r.d=new A.t6(this,r)
return r.fv(a,d,c,b===!0)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)},
gaq(){return this.a}}
A.t6.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.hh.prototype={
mT(a){var s=this.b
if(s>=4)throw A.b(this.am())
if((s&1)!==0)this.gag().M(a)},
mQ(a,b){var s=this.b
if(s>=4)throw A.b(this.am())
if((s&1)!==0){s=this.gag()
s.a7(a,b==null?B.r:b)}},
j2(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.am())
r|=4
s.b=r
if((r&1)!==0)s.gag().Z()},
$ic_:1}
A.tT.prototype={
$0(){return this.a.a9(this.b)},
$S:0}
A.tS.prototype={
$2(a,b){A.CL(this.a,this.b,new A.a1(a,b))},
$S:5}
A.tU.prototype={
$0(){return this.a.bb(this.b)},
$S:0}
A.b7.prototype={
gaq(){return this.a.gaq()},
B(a,b,c,d){var s=A.p(this),r=$.m,q=b===!0?1:0,p=d!=null?32:0,o=A.jO(r,a,s.h("b7.T")),n=A.jP(r,d),m=c==null?A.un():c
s=new A.ew(this,o,n,r.aZ(m,t.H),r,q|p,s.h("ew<b7.S,b7.T>"))
s.x=this.a.ar(s.gfc(),s.gfe(),s.gfg())
return s},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.ew.prototype={
M(a){if((this.e&2)!==0)return
this.bS(a)},
a7(a,b){if((this.e&2)!==0)return
this.eN(a,b)},
b1(){var s=this.x
if(s!=null)s.ah()},
b2(){var s=this.x
if(s!=null)s.aj()},
dS(){var s=this.x
if(s!=null){this.x=null
return s.u()}return null},
fd(a){this.w.i6(a,this)},
fh(a,b){this.a7(a,b)},
ff(){this.Z()}}
A.cf.prototype={
i6(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.I(q)
r=A.P(q)
A.y8(b,s,r)
return}if(p)b.M(a)}}
A.aL.prototype={
i6(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.I(q)
r=A.P(q)
A.y8(b,s,r)
return}b.M(p)}}
A.ha.prototype={
q(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.E("Stream is already closed"))
s.bS(b)},
ad(a,b){this.a.a7(a,b)},
n(){var s=this.a
if((s.e&2)!==0)A.w(A.E("Stream is already closed"))
s.hw()},
$iaj:1}
A.eE.prototype={
M(a){if((this.e&2)!==0)throw A.b(A.E("Stream is already closed"))
this.bS(a)},
a7(a,b){if((this.e&2)!==0)throw A.b(A.E("Stream is already closed"))
this.eN(a,b)},
Z(){if((this.e&2)!==0)throw A.b(A.E("Stream is already closed"))
this.hw()},
b1(){var s=this.x
if(s!=null)s.ah()},
b2(){var s=this.x
if(s!=null)s.aj()},
dS(){var s=this.x
if(s!=null){this.x=null
return s.u()}return null},
fd(a){var s,r,q,p
try{q=this.w
q===$&&A.M()
q.q(0,a)}catch(p){s=A.I(p)
r=A.P(p)
this.a7(s,r)}},
fh(a,b){var s,r,q,p
try{q=this.w
q===$&&A.M()
q.ad(a,b)}catch(p){s=A.I(p)
r=A.P(p)
if(s===a)this.a7(a,b)
else this.a7(s,r)}},
ff(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.M()
q.n()}catch(p){s=A.I(p)
r=A.P(p)
this.a7(s,r)}}}
A.c9.prototype={
gaq(){return this.b.gaq()},
B(a,b,c,d){var s=this.$ti,r=$.m,q=b===!0?1:0,p=d!=null?32:0,o=A.jO(r,a,s.y[1]),n=A.jP(r,d),m=c==null?A.un():c,l=new A.eE(o,n,r.aZ(m,t.H),r,q|p,s.h("eE<1,2>"))
l.w=this.a.$1(new A.ha(l))
l.x=this.b.ar(l.gfc(),l.gfe(),l.gfg())
return l},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.ku.prototype={
bg(a){return this.a.$1(a)}}
A.aF.prototype={}
A.kH.prototype={
d_(a,b,c){var s,r,q,p,o,n,m,l,k=this.gfj(),j=k.a
if(j===B.e){A.hK(b,c)
return}s=k.b
r=j.gaC()
m=j.gjA()
m.toString
q=m
p=$.m
try{$.m=q
s.$5(j,r,a,b,c)
$.m=p}catch(l){o=A.I(l)
n=A.P(l)
$.m=p
m=b===o?c:n
q.d_(j,o,m)}},
$iB:1}
A.jU.prototype={
ghT(){var s=this.at
return s==null?this.at=new A.eL(this):s},
gaC(){return this.ax.ghT()},
gbk(){return this.as.a},
dA(a){var s,r,q
try{this.bt(a,t.H)}catch(q){s=A.I(q)
r=A.P(q)
this.d_(this,s,r)}},
c8(a,b,c){var s,r,q
try{this.c7(a,b,t.H,c)}catch(q){s=A.I(q)
r=A.P(q)
this.d_(this,s,r)}},
hb(a,b,c,d,e){var s,r,q
try{this.ha(a,b,c,t.H,d,e)}catch(q){s=A.I(q)
r=A.P(q)
this.d_(this,s,r)}},
fG(a,b){return new A.ri(this,this.aZ(a,b),b)},
iY(a,b,c){return new A.rk(this,this.bs(a,b,c),c,b)},
d8(a){return new A.rh(this,this.aZ(a,t.H))},
fH(a,b){return new A.rj(this,this.bs(a,t.H,b),b)},
i(a,b){var s,r=this.ay,q=r.i(0,b)
if(q!=null||r.H(b))return q
s=this.ax.i(0,b)
if(s!=null)r.m(0,b,s)
return s},
cz(a,b){this.d_(this,a,b)},
ed(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gaC(),this,a,b)},
jh(a){return this.ed(null,a)},
bt(a){var s=this.a,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
c7(a,b){var s=this.b,r=s.a
return s.b.$5(r,r.gaC(),this,a,b)},
ha(a,b,c){var s=this.c,r=s.a
return s.b.$6(r,r.gaC(),this,a,b,c)},
aZ(a){var s=this.d,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
bs(a){var s=this.e,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
cH(a){var s=this.f,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
ja(a,b){var s=this.r,r=s.a
if(r===B.e)return null
return s.b.$5(r,r.gaC(),this,a,b)},
bP(a){var s=this.w,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
fL(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gaC(),this,a,b)},
jD(a){var s=this.z,r=s.a
return s.b.$4(r,r.gaC(),this,a)},
gix(){return this.a},
giz(){return this.b},
giy(){return this.c},
gir(){return this.d},
gis(){return this.e},
giq(){return this.f},
ghW(){return this.r},
gft(){return this.w},
ghQ(){return this.x},
ghP(){return this.y},
gik(){return this.z},
gi0(){return this.Q},
gfj(){return this.as},
gjA(){return this.ax},
gib(){return this.ay}}
A.ri.prototype={
$0(){return this.a.bt(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.rk.prototype={
$1(a){var s=this
return s.a.c7(s.b,a,s.d,s.c)},
$S(){return this.d.h("@<0>").G(this.c).h("1(2)")}}
A.rh.prototype={
$0(){return this.a.dA(this.b)},
$S:0}
A.rj.prototype={
$1(a){return this.a.c8(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.kq.prototype={
gix(){return B.c5},
giz(){return B.c7},
giy(){return B.c6},
gir(){return B.c4},
gis(){return B.c_},
giq(){return B.c9},
ghW(){return B.c1},
gft(){return B.c8},
ghQ(){return B.c0},
ghP(){return B.bZ},
gik(){return B.c3},
gi0(){return B.c2},
gfj(){return B.bY},
gjA(){return null},
gib(){return $.zp()},
ghT(){var s=$.tb
return s==null?$.tb=new A.eL(this):s},
gaC(){var s=$.tb
return s==null?$.tb=new A.eL(this):s},
gbk(){return this},
dA(a){var s,r,q
try{if(B.e===$.m){a.$0()
return}A.u6(null,null,this,a)}catch(q){s=A.I(q)
r=A.P(q)
A.hK(s,r)}},
c8(a,b){var s,r,q
try{if(B.e===$.m){a.$1(b)
return}A.u8(null,null,this,a,b)}catch(q){s=A.I(q)
r=A.P(q)
A.hK(s,r)}},
hb(a,b,c){var s,r,q
try{if(B.e===$.m){a.$2(b,c)
return}A.u7(null,null,this,a,b,c)}catch(q){s=A.I(q)
r=A.P(q)
A.hK(s,r)}},
fG(a,b){return new A.td(this,a,b)},
iY(a,b,c){return new A.tf(this,a,c,b)},
d8(a){return new A.tc(this,a)},
fH(a,b){return new A.te(this,a,b)},
i(a,b){return null},
cz(a,b){A.hK(a,b)},
ed(a,b){return A.yu(null,null,this,a,b)},
jh(a){return this.ed(null,a)},
bt(a){if($.m===B.e)return a.$0()
return A.u6(null,null,this,a)},
c7(a,b){if($.m===B.e)return a.$1(b)
return A.u8(null,null,this,a,b)},
ha(a,b,c){if($.m===B.e)return a.$2(b,c)
return A.u7(null,null,this,a,b,c)},
aZ(a){return a},
bs(a){return a},
cH(a){return a},
ja(a,b){return null},
bP(a){A.u9(null,null,this,a)},
fL(a,b){return A.vs(a,b)},
jD(a){A.wa(a)}}
A.td.prototype={
$0(){return this.a.bt(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.tf.prototype={
$1(a){var s=this
return s.a.c7(s.b,a,s.d,s.c)},
$S(){return this.d.h("@<0>").G(this.c).h("1(2)")}}
A.tc.prototype={
$0(){return this.a.dA(this.b)},
$S:0}
A.te.prototype={
$1(a){return this.a.c8(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.eL.prototype={$iaa:1}
A.u5.prototype={
$0(){A.im(this.a,this.b)},
$S:0}
A.hF.prototype={$ivy:1}
A.cc.prototype={
gk(a){return this.a},
gE(a){return this.a===0},
ga2(){return new A.hc(this,A.p(this).h("hc<1>"))},
H(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.hN(a)},
hN(a){var s=this.d
if(s==null)return!1
return this.bc(this.i3(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xF(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xF(q,b)
return r}else return this.i2(b)},
i2(a){var s,r,q=this.d
if(q==null)return null
s=this.i3(q,a)
r=this.bc(s,a)
return r<0?null:s[r+1]},
m(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.hJ(s==null?q.b=A.vF():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.hJ(r==null?q.c=A.vF():r,b,c)}else q.iA(b,c)},
iA(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.vF()
s=p.bB(a)
r=o[s]
if(r==null){A.vG(o,s,[a,b]);++p.a
p.e=null}else{q=p.bc(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
aa(a,b){var s,r,q,p,o,n=this,m=n.hK()
for(s=m.length,r=A.p(n).y[1],q=0;q<s;++q){p=m[q]
o=n.i(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ap(n))}},
hK(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.b2(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
hJ(a,b,c){if(a[b]==null){++this.a
this.e=null}A.vG(a,b,c)},
bB(a){return J.y(a)&1073741823},
i3(a,b){return a[this.bB(b)]},
bc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.z(a[r],b))return r
return-1}}
A.ds.prototype={
bB(a){return A.kT(a)&1073741823},
bc(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.h5.prototype={
i(a,b){if(!this.w.$1(b))return null
return this.kO(b)},
m(a,b,c){this.kP(b,c)},
H(a){if(!this.w.$1(a))return!1
return this.kN(a)},
bB(a){return this.r.$1(a)&1073741823},
bc(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.rg.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.hc.prototype={
gk(a){return this.a.a},
gE(a){return this.a.a===0},
gaN(a){return this.a.a!==0},
gA(a){var s=this.a
return new A.k1(s,s.hK(),this.$ti.h("k1<1>"))},
U(a,b){return this.a.H(b)}}
A.k1.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.hg.prototype={
i(a,b){if(!this.y.$1(b))return null
return this.kE(b)},
m(a,b,c){this.kG(b,c)},
H(a){if(!this.y.$1(a))return!1
return this.kD(a)},
I(a,b){if(!this.y.$1(b))return null
return this.kF(b)},
cB(a){return this.x.$1(a)&1073741823},
cC(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.t4.prototype={
$1(a){return this.a.b(a)},
$S:17}
A.cd.prototype={
lU(){return new A.cd(A.p(this).h("cd<1>"))},
gA(a){var s=this,r=new A.ez(s,s.r,A.p(s).h("ez<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gE(a){return this.a===0},
gaN(a){return this.a!==0},
U(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ll(b)
return r}},
ll(a){var s=this.d
if(s==null)return!1
return this.bc(s[this.bB(a)],a)>=0},
q(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.hI(s==null?q.b=A.vI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.hI(r==null?q.c=A.vI():r,b)}else return q.eY(b)},
eY(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.vI()
s=q.bB(a)
r=p[s]
if(r==null)p[s]=[q.f_(a)]
else{if(q.bc(r,a)>=0)return!1
r.push(q.f_(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hL(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hL(s.c,b)
else return s.fs(b)},
fs(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bB(a)
r=n[s]
q=o.bc(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hM(p)
return!0},
aL(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eZ()}},
hI(a,b){if(a[b]!=null)return!1
a[b]=this.f_(b)
return!0},
hL(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.hM(s)
delete a[b]
return!0},
eZ(){this.r=this.r+1&1073741823},
f_(a){var s,r=this,q=new A.t5(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.eZ()
return q},
hM(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.eZ()},
bB(a){return J.y(a)&1073741823},
bc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1}}
A.t5.prototype={}
A.ez.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.dg.prototype={
d9(a,b){return new A.dg(J.wk(this.a,b),b.h("dg<0>"))},
gk(a){return J.aG(this.a)},
i(a,b){return J.hP(this.a,b)}}
A.n0.prototype={
$2(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:30}
A.nE.prototype={
$2(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:30}
A.d2.prototype={
U(a,b){return!1},
gA(a){var s=this
return new A.k8(s,s.a,s.c,s.$ti.h("k8<1>"))},
gk(a){return this.b},
aL(a){var s,r,q,p=this;++p.a
if(p.b===0)return
s=p.c
s.toString
r=s
do{q=r.b
q.toString
r.b=r.c=r.a=null
if(q!==s){r=q
continue}else break}while(!0)
p.c=null
p.b=0},
gae(a){var s
if(this.b===0)throw A.b(A.E("No such element"))
s=this.c
s.toString
return s},
gaO(a){var s
if(this.b===0)throw A.b(A.E("No such element"))
s=this.c.c
s.toString
return s},
gE(a){return this.b===0},
dQ(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.E("LinkedListEntry is already in a LinkedList"));++q.a
b.a=q
s=q.b
if(s===0){b.b=b
q.c=b.c=b
q.b=s+1
return}r=a.c
r.toString
b.c=r
b.b=a
a.c=r.b=b
q.b=s+1},
fz(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.k8.prototype={
gp(){var s=this.c
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ap(s))
if(r.b!==0)r=s.e&&s.d===r.gae(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aI.prototype={
gdt(){var s=this.a
if(s==null||this===s.gae(0))return null
return this.c}}
A.A.prototype={
gA(a){return new A.ar(a,this.gk(a),A.bo(a).h("ar<A.E>"))},
V(a,b){return this.i(a,b)},
gE(a){return this.gk(a)===0},
gaN(a){return!this.gE(a)},
gae(a){if(this.gk(a)===0)throw A.b(A.bY())
return this.i(a,0)},
U(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.z(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.ap(a))}return!1},
aY(a,b,c){return new A.ab(a,b,A.bo(a).h("@<A.E>").G(c).h("ab<1,2>"))},
aS(a,b){return A.bN(a,b,null,A.bo(a).h("A.E"))},
bN(a,b){return A.bN(a,0,A.bb(b,"count",t.S),A.bo(a).h("A.E"))},
q(a,b){var s=this.gk(a)
this.sk(a,s+1)
this.m(a,s,b)},
d9(a,b){return new A.ag(a,A.bo(a).h("@<A.E>").G(b).h("ag<1,2>"))},
cQ(a,b){var s=b==null?A.E4():b
A.jb(a,0,this.gk(a)-1,s)},
kq(a,b,c){A.aN(b,c,this.gk(a))
return A.bN(a,b,c,A.bo(a).h("A.E"))},
fQ(a,b,c,d){var s
A.aN(b,c,this.gk(a))
for(s=b;s<c;++s)this.m(a,s,d)},
P(a,b,c,d,e){var s,r,q,p,o
A.aN(b,c,this.gk(a))
s=c-b
if(s===0)return
A.aJ(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.l1(d,e).bv(0,!1)
r=0}p=J.a4(q)
if(r+s>p.gk(q))throw A.b(A.wM())
if(r<b)for(o=s-1;o>=0;--o)this.m(a,b+o,p.i(q,r+o))
else for(o=0;o<s;++o)this.m(a,b+o,p.i(q,r+o))},
ai(a,b,c,d){return this.P(a,b,c,d,0)},
cg(a,b,c){var s,r
if(t.j.b(c))this.ai(a,b,b+c.length,c)
else for(s=J.U(c);s.l();b=r){r=b+1
this.m(a,b,s.gp())}},
j(a){return A.ny(a,"[","]")},
$ix:1,
$in:1,
$ir:1}
A.J.prototype={
bh(a,b,c){var s=A.p(this)
return A.wW(this,s.h("J.K"),s.h("J.V"),b,c)},
aa(a,b){var s,r,q,p
for(s=J.U(this.ga2()),r=A.p(this).h("J.V");s.l();){q=s.gp()
p=this.i(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbj(){return J.dG(this.ga2(),new A.nI(this),A.p(this).h("N<J.K,J.V>"))},
cE(a,b,c,d){var s,r,q,p,o,n=A.a2(c,d)
for(s=J.U(this.ga2()),r=A.p(this).h("J.V");s.l();){q=s.gp()
p=this.i(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.m(0,o.a,o.b)}return n},
H(a){return J.wm(this.ga2(),a)},
gk(a){return J.aG(this.ga2())},
gE(a){return J.l0(this.ga2())},
j(a){return A.nJ(this)},
$ia_:1}
A.nI.prototype={
$1(a){var s=this.a,r=s.i(0,a)
if(r==null)r=A.p(s).h("J.V").a(r)
return new A.N(a,r,A.p(s).h("N<J.K,J.V>"))},
$S(){return A.p(this.a).h("N<J.K,J.V>(J.K)")}}
A.nK.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:34}
A.kD.prototype={}
A.fs.prototype={
bh(a,b,c){return this.a.bh(0,b,c)},
i(a,b){return this.a.i(0,b)},
H(a){return this.a.H(a)},
aa(a,b){this.a.aa(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gk(a){var s=this.a
return s.gk(s)},
ga2(){return this.a.ga2()},
j(a){return this.a.j(0)},
gbj(){return this.a.gbj()},
cE(a,b,c,d){return this.a.cE(0,b,c,d)},
$ia_:1}
A.dh.prototype={
bh(a,b,c){return new A.dh(this.a.bh(0,b,c),b.h("@<0>").G(c).h("dh<1,2>"))}}
A.fq.prototype={
gA(a){var s=this
return new A.k9(s,s.c,s.d,s.b,s.$ti.h("k9<1>"))},
gE(a){return this.b===this.c},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
V(a,b){var s,r=this
A.As(b,r.gk(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
I(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.z(r.a[s],b)){r.fs(s);++r.d
return!0}return!1},
j(a){return A.ny(this,"{","}")},
oK(){var s,r,q=this,p=q.b
if(p===q.c)throw A.b(A.bY());++q.d
s=q.a
r=s[p]
if(r==null)r=q.$ti.c.a(r)
s[p]=null
q.b=(p+1&s.length-1)>>>0
return r},
eY(a){var s,r,q=this,p=q.a,o=q.c
p[o]=a
p=p.length
o=(o+1&p-1)>>>0
q.c=o
if(q.b===o){s=A.b2(p*2,null,!1,q.$ti.h("1?"))
p=q.a
o=q.b
r=p.length-o
B.d.P(s,0,r,p,o)
B.d.P(s,r,r+q.b,q.a,0)
q.b=0
q.c=q.a.length
q.a=s}++q.d},
fs(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.k9.prototype={
gp(){var s=this.e
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a
if(r.c!==q.d)A.w(A.ap(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.ct.prototype={
gE(a){return this.gk(this)===0},
gaN(a){return this.gk(this)!==0},
ac(a,b){var s
for(s=J.U(b);s.l();)this.q(0,s.gp())},
cK(a){var s=this.dC(0)
s.ac(0,a)
return s},
bv(a,b){var s=A.as(this,A.p(this).c)
return s},
dB(a){return this.bv(0,!0)},
aY(a,b,c){return new A.cY(this,b,A.p(this).h("@<1>").G(c).h("cY<1,2>"))},
j(a){return A.ny(this,"{","}")},
bN(a,b){return A.xk(this,b,A.p(this).c)},
aS(a,b){return A.xe(this,b,A.p(this).c)},
V(a,b){var s,r
A.aJ(b,"index")
s=this.gA(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.iv(b,b-r,this,null,"index"))},
$ix:1,
$in:1,
$ibw:1}
A.hs.prototype={
dC(a){var s=this.lU()
s.ac(0,this)
return s}}
A.hB.prototype={}
A.k5.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.m7(b):s}},
gk(a){return this.b==null?this.c.a:this.dO().length},
gE(a){return this.gk(0)===0},
ga2(){if(this.b==null){var s=this.c
return new A.b1(s,A.p(s).h("b1<1>"))}return new A.k6(this)},
H(a){if(this.b==null)return this.c.H(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aa(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.aa(0,b)
s=o.dO()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tV(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ap(o))}},
dO(){var s=this.c
if(s==null)s=this.c=A.v(Object.keys(this.a),t.s)
return s},
m7(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tV(this.a[a])
return this.b[a]=s}}
A.k6.prototype={
gk(a){return this.a.gk(0)},
V(a,b){var s=this.a
return s.b==null?s.ga2().V(0,b):s.dO()[b]},
gA(a){var s=this.a
if(s.b==null){s=s.ga2()
s=s.gA(s)}else{s=s.dO()
s=new J.dH(s,s.length,A.a8(s).h("dH<1>"))}return s},
U(a,b){return this.a.H(b)}}
A.rY.prototype={
n(){var s,r,q=this
q.kQ()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.M(A.yo(r.charCodeAt(0)==0?r:r,q.b))
s.Z()}}
A.tJ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:40}
A.tI.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:40}
A.hT.prototype={
gbK(){return"us-ascii"},
bi(a){return B.au.ap(a)},
aG(a){var s=B.W.ap(a)
return s},
gdc(){return B.W}}
A.kC.prototype={
ap(a){var s,r,q,p=A.aN(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aX(a,"string","Contains invalid characters."))
o[r]=q}return o},
b9(a){return new A.tB(new A.jQ(a),this.a)}}
A.hV.prototype={}
A.tB.prototype={
n(){this.a.a.a.Z()},
ab(a,b,c,d){var s,r,q,p,o
A.aN(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.K("Source contains invalid character with code point: "+q+".",null))}s=new A.br(a)
p=s.gk(0)
A.aN(b,c,p)
s=A.as(s.kq(s,b,c),t.V.h("A.E"))
o=this.a.a.a
o.M(s)
if(d)o.Z()}}
A.kB.prototype={
ap(a){var s,r,q,p=A.aN(0,null,a.length)
for(s=~this.b,r=0;r<p;++r){q=a[r]
if((q&s)!==0){if(!this.a)throw A.b(A.ak("Invalid value in input: "+q,null,null))
return this.lm(a,0,p)}}return A.bM(a,0,p)},
lm(a,b,c){var s,r,q,p
for(s=~this.b,r=b,q="";r<c;++r){p=a[r]
q+=A.aR((p&s)!==0?65533:p)}return q.charCodeAt(0)==0?q:q},
bg(a){return this.hu(a)}}
A.hU.prototype={
b9(a){var s=new A.du(a)
if(this.a)return new A.rr(new A.kF(new A.cH(!1),s,new A.Y("")))
else return new A.tg(s)}}
A.rr.prototype={
n(){this.a.n()},
q(a,b){this.ab(b,0,J.aG(b),!1)},
ab(a,b,c,d){var s,r,q=J.a4(a)
A.aN(b,c,q.gk(a))
for(s=this.a,r=b;r<c;++r)if((q.i(a,r)&4294967168)>>>0!==0){if(r>b)s.ab(a,b,r,!1)
s.ab(B.ba,0,3,!1)
b=r+1}if(b<c)s.ab(a,b,c,!1)}}
A.tg.prototype={
n(){this.a.a.a.Z()},
q(a,b){var s,r
for(s=J.a4(b),r=0;r<s.gk(b);++r)if((s.i(b,r)&4294967168)>>>0!==0)throw A.b(A.ak("Source contains non-ASCII bytes.",null,null))
this.a.a.a.M(A.bM(b,0,null))}}
A.lg.prototype={
ov(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.aN(a1,a2,a0.length)
s=$.zm()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.uz(a0.charCodeAt(l))
h=A.uz(a0.charCodeAt(l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){f=s[g]
if(f>=0){g=u.U.charCodeAt(f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.Y("")
e=p}else e=p
e.a+=B.a.t(a0,q,r)
d=A.aR(k)
e.a+=d
q=l
continue}}throw A.b(A.ak("Invalid base64 data",a0,r))}if(p!=null){e=B.a.t(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.wr(a0,n,a2,o,m,d)
else{c=B.b.aR(d-1,4)+1
if(c===1)throw A.b(A.ak(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.c6(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.wr(a0,n,a2,o,m,b)
else{c=B.b.aR(b,4)
if(c===1)throw A.b(A.ak(a,a0,a2))
if(c>1)a0=B.a.c6(a0,a2,a2,c===2?"==":"=")}return a0}}
A.hZ.prototype={
b9(a){return new A.qz(a,new A.qR(u.U))}}
A.qK.prototype={
j4(a){return new Uint8Array(a)},
nz(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.T(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.j4(o)
r.a=A.BG(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.qR.prototype={
j4(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.cN(B.f.gao(s),s.byteOffset,a)}}
A.qL.prototype={
q(a,b){this.hO(b,0,J.aG(b),!1)},
n(){this.hO(B.bg,0,0,!0)}}
A.qz.prototype={
hO(a,b,c,d){var s=this.b.nz(a,b,c,d)
if(s!=null)this.a.a.M(A.bM(s,0,null))
if(d)this.a.a.Z()}}
A.lw.prototype={}
A.jQ.prototype={
q(a,b){this.a.a.M(b)},
n(){this.a.a.Z()}}
A.jR.prototype={
q(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.a4(b)
if(n.gk(b)>p.length-o){p=q.b
s=n.gk(b)+p.length-1
s|=B.b.a1(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.ai(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.ai(p,o,o+n.gk(b),b)
q.c=q.c+n.gk(b)},
n(){this.a.$1(B.f.bR(this.b,0,this.c))}}
A.i9.prototype={}
A.dn.prototype={
q(a,b){this.b.q(0,b)},
ad(a,b){A.bb(a,"error",t.K)
this.a.ad(a,b)},
n(){this.b.n()},
$iaj:1}
A.ia.prototype={}
A.ah.prototype={
b9(a){throw A.b(A.S("This converter does not support chunked conversions: "+this.j(0)))},
bg(a){return new A.c9(new A.m2(this),a,t.fM.G(A.p(this).h("ah.T")).h("c9<1,2>"))}}
A.m2.prototype={
$1(a){return new A.dn(a,this.a.b9(a))},
$S:167}
A.d_.prototype={
n7(a){return this.gdc().bg(a).nP(0,new A.Y(""),new A.mI(),t.of).aQ(new A.mJ(),t.N)}}
A.mI.prototype={
$2(a,b){a.a+=b
return a},
$S:163}
A.mJ.prototype={
$1(a){var s=a.a
return s.charCodeAt(0)==0?s:s},
$S:161}
A.fn.prototype={
j(a){var s=A.il(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.iE.prototype={
j(a){return"Cyclic error in JSON stringify"}}
A.nB.prototype={
c3(a,b){var s=A.yo(a,this.gdc().a)
return s},
aG(a){return this.c3(a,null)},
fO(a,b){var s=A.C1(a,this.gnA().b,null)
return s},
bi(a){return this.fO(a,null)},
gnA(){return B.b8},
gdc(){return B.b7}}
A.iG.prototype={
b9(a){return new A.rZ(null,this.b,new A.du(a))}}
A.rZ.prototype={
q(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.E("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.Y("")
q=new A.tu(r,s)
A.xI(b,q,p.b,p.a)
if(r.a.length!==0)q.f8()
s.n()},
n(){}}
A.iF.prototype={
b9(a){return new A.rY(this.a,a,new A.Y(""))}}
A.t0.prototype={
jP(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.eC(a,s,r)
s=r+1
n.a4(92)
n.a4(117)
n.a4(100)
p=q>>>8&15
n.a4(p<10?48+p:87+p)
p=q>>>4&15
n.a4(p<10?48+p:87+p)
p=q&15
n.a4(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.eC(a,s,r)
s=r+1
n.a4(92)
switch(q){case 8:n.a4(98)
break
case 9:n.a4(116)
break
case 10:n.a4(110)
break
case 12:n.a4(102)
break
case 13:n.a4(114)
break
default:n.a4(117)
n.a4(48)
n.a4(48)
p=q>>>4&15
n.a4(p<10?48+p:87+p)
p=q&15
n.a4(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.eC(a,s,r)
s=r+1
n.a4(92)
n.a4(q)}}if(s===0)n.av(a)
else if(s<m)n.eC(a,s,m)},
eU(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.iE(a,null))}s.push(a)},
eB(a){var s,r,q,p,o=this
if(o.jO(a))return
o.eU(a)
try{s=o.b.$1(a)
if(!o.jO(s)){q=A.wQ(a,null,o.gih())
throw A.b(q)}o.a.pop()}catch(p){r=A.I(p)
q=A.wQ(a,r,o.gih())
throw A.b(q)}},
jO(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.p6(a)
return!0}else if(a===!0){r.av("true")
return!0}else if(a===!1){r.av("false")
return!0}else if(a==null){r.av("null")
return!0}else if(typeof a=="string"){r.av('"')
r.jP(a)
r.av('"')
return!0}else if(t.j.b(a)){r.eU(a)
r.p0(a)
r.a.pop()
return!0}else if(t.av.b(a)){r.eU(a)
s=r.p5(a)
r.a.pop()
return s}else return!1},
p0(a){var s,r,q=this
q.av("[")
s=J.a4(a)
if(s.gaN(a)){q.eB(s.i(a,0))
for(r=1;r<s.gk(a);++r){q.av(",")
q.eB(s.i(a,r))}}q.av("]")},
p5(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.av("{}")
return!0}s=a.gk(a)*2
r=A.b2(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.aa(0,new A.t1(n,r))
if(!n.b)return!1
o.av("{")
for(p='"';q<s;q+=2,p=',"'){o.av(p)
o.jP(A.an(r[q]))
o.av('":')
o.eB(r[q+1])}o.av("}")
return!0}}
A.t1.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:34}
A.t_.prototype={
gih(){var s=this.c
return s instanceof A.Y?s.j(0):null},
p6(a){this.c.eA(B.a5.j(a))},
av(a){this.c.eA(a)},
eC(a,b,c){this.c.eA(B.a.t(a,b,c))},
a4(a){this.c.a4(a)}}
A.iH.prototype={
gbK(){return"iso-8859-1"},
bi(a){return B.b9.ap(a)},
aG(a){var s=B.a6.ap(a)
return s},
gdc(){return B.a6}}
A.iJ.prototype={}
A.iI.prototype={
b9(a){var s=new A.du(a)
if(!this.a)return new A.k7(s)
return new A.t2(s)}}
A.k7.prototype={
n(){this.a.a.a.Z()
this.a=null},
q(a,b){this.ab(b,0,J.aG(b),!1)},
hC(a,b,c,d){var s=this.a
s.toString
s.a.a.M(A.bM(a,b,c))},
ab(a,b,c,d){A.aN(b,c,J.aG(a))
if(b===c)return
if(!t.p.b(a))A.C2(a,b,c)
this.hC(a,b,c,!1)}}
A.t2.prototype={
ab(a,b,c,d){var s,r,q,p,o="Stream is already closed",n=J.a4(a)
A.aN(b,c,n.gk(a))
for(s=b;s<c;++s){r=n.i(a,s)
if(r>255||r<0){if(s>b){q=this.a
q.toString
p=A.bM(a,b,s)
q=q.a.a
if((q.e&2)!==0)A.w(A.E(o))
q.bS(p)}q=this.a
q.toString
p=A.bM(B.bb,0,1)
q=q.a.a
if((q.e&2)!==0)A.w(A.E(o))
q.bS(p)
b=s+1}}if(b<c)this.hC(a,b,c,!1)}}
A.nC.prototype={
bg(a){return new A.c9(A.E6(),a,t.it)}}
A.t3.prototype={
ab(a,b,c,d){var s=this
c=A.aN(b,c,a.length)
if(b<c){if(s.d){if(a.charCodeAt(b)===10)++b
s.d=!1}s.la(a,b,c,d)}if(d)s.n()},
n(){var s=this,r=s.b
if(r!=null)s.a.a.a.M(s.fB(r,""))
s.a.a.a.Z()},
la(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.b
for(s=k.a.a.a,r=b,q=r,p=0;r<c;++r,p=o){o=a.charCodeAt(r)
if(o!==13){if(o!==10)continue
if(p===13){q=r+1
continue}}n=B.a.t(a,q,r)
if(j!=null){n=k.fB(j,n)
j=null}if((s.e&2)!==0)A.w(A.E("Stream is already closed"))
s.bS(n)
q=r+1}if(q<c){m=B.a.t(a,q,c)
if(d){s.M(j!=null?k.fB(j,m):m)
return}if(j==null)k.b=m
else{l=k.c
if(l==null)l=k.c=new A.Y("")
if(j.length!==0){l.a+=j
k.b=""}l.a+=m}}else k.d=p===13},
fB(a,b){var s,r
this.b=null
if(a.length!==0)return a+b
s=this.c
r=s.a+=b
s.a=""
return r.charCodeAt(0)==0?r:r}}
A.ey.prototype={
ad(a,b){this.e.ad(a,b)},
$iaj:1}
A.jn.prototype={
q(a,b){this.ab(b,0,b.length,!1)}}
A.tu.prototype={
a4(a){var s=this.a,r=A.aR(a)
if((s.a+=r).length>16)this.f8()},
eA(a){if(this.a.a.length!==0)this.f8()
this.b.q(0,a)},
f8(){var s=this.a,r=s.a
s.a=""
this.b.q(0,r.charCodeAt(0)==0?r:r)}}
A.hv.prototype={
n(){},
ab(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.aR(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.n()},
q(a,b){this.a.a+=b}}
A.du.prototype={
q(a,b){this.a.a.M(b)},
ab(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.M(a)
else r.M(B.a.t(a,b,c))
if(d)r.Z()},
n(){this.a.a.Z()}}
A.kF.prototype={
n(){var s,r,q,p=this.c
this.a.nO(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.ab(q,0,q.length,!0)}else r.n()},
q(a,b){this.ab(b,0,J.aG(b),!1)},
ab(a,b,c,d){var s,r=this,q=r.c,p=r.a.cU(a,b,c,!1)
p=q.a+=p
if(p.length!==0){s=p.charCodeAt(0)==0?p:p
r.b.ab(s,0,s.length,d)
q.a=""
return}if(d)r.n()}}
A.jA.prototype={
gbK(){return"utf-8"},
aG(a){return new A.cH(!1).cU(a,0,null,!0)},
bi(a){return B.n.ap(a)},
gdc(){return B.ap}}
A.jC.prototype={
ap(a){var s,r,q=A.aN(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.kG(s)
if(r.hZ(a,0,q)!==q)r.dY()
return B.f.bR(s,0,r.b)},
b9(a){return new A.tK(new A.jQ(a),new Uint8Array(1024))}}
A.kG.prototype={
dY(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.C(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
iQ(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.C(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.dY()
return!1}},
hZ(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.C(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.iQ(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.dY()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.C(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.C(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.tK.prototype={
n(){if(this.a!==0){this.ab("",0,0,!0)
return}this.d.a.a.Z()},
ab(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.iQ(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.hZ(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.dY()
else n.a=a.charCodeAt(b);++b}s.q(0,B.f.bR(r,0,n.b))
if(o)s.n()
n.b=0}while(b<c)
if(d)n.n()}}
A.jB.prototype={
b9(a){return new A.kF(new A.cH(this.a),new A.du(a),new A.Y(""))},
bg(a){return this.hu(a)}}
A.cH.prototype={
cU(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.aN(b,c,J.aG(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Cz(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Cy(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.f4(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.y6(p)
m.b=0
throw A.b(A.ak(n,a,q+m.c))}return o},
f4(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.T(b+c,2)
r=q.f4(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.f4(a,s,c,d)}return q.n6(a,b,c,d)},
nO(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.aR(65533)
a.a+=s}else throw A.b(A.ak(A.y6(77),null,null))},
n6(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.Y(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.aR(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.aR(k)
h.a+=q
break
case 65:q=A.aR(k)
h.a+=q;--g
break
default:q=A.aR(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break A
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.aR(a[m])
h.a+=q}else{q=A.bM(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.aR(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.kI.prototype={}
A.az.prototype={
by(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bi(p,r)
return new A.az(p===0?!1:s,r,p)},
lr(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.wh():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bi(s,q)
m=new A.az(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.eM(0,$.kX())
return m},
cP(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.K("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.T(b,16)
q=B.b.aR(b,16)
if(q===0)return j.lr(r)
p=s-r
if(p<=0)return j.a?$.wh():$.ch()
o=j.b
n=new Uint16Array(p)
A.BM(o,s,b,n)
s=j.a
m=A.bi(p,n)
l=new A.az(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.cO(1,q)-1)>>>0!==0)return l.eM(0,$.kX())
for(k=0;k<r;++k)if(o[k]!==0)return l.eM(0,$.kX())}return l},
a_(a,b){var s,r=this.a
if(r===b.a){s=A.qN(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
eP(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.eP(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.by(0)
s=o+1
r=new Uint16Array(s)
A.BH(p.b,o,a.b,n,r)
q=A.bi(s,r)
return new A.az(q===0?!1:b,r,q)},
dL(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.by(0)
r=new Uint16Array(o)
A.jN(p.b,o,a.b,s,r)
q=A.bi(o,r)
return new A.az(q===0?!1:b,r,q)},
dF(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.eP(b,r)
if(A.qN(q.b,p,b.b,s)>=0)return q.dL(b,r)
return b.dL(q,!r)},
eM(a,b){var s,r,q=this,p=q.c
if(p===0)return b.by(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.eP(b,r)
if(A.qN(q.b,p,b.b,s)>=0)return q.dL(b,r)
return b.dL(q,!r)},
aI(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.xz(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bi(s,p)
return new A.az(m===0?!1:n,p,m)},
lp(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.hU(a)
s=$.vB.aT()-$.h2.aT()
r=A.vD($.vA.aT(),$.h2.aT(),$.vB.aT(),s)
q=A.bi(s,r)
p=new A.az(!1,r,q)
return this.a!==a.a&&q>0?p.by(0):p},
md(a){var s,r,q,p=this
if(p.c<a.c)return p
p.hU(a)
s=A.vD($.vA.aT(),0,$.h2.aT(),$.h2.aT())
r=A.bi($.h2.aT(),s)
q=new A.az(!1,s,r)
if($.vC.aT()>0)q=q.cP(0,$.vC.aT())
return p.a&&q.c>0?q.by(0):q},
hU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.xw&&a.c===$.xy&&c.b===$.xv&&a.b===$.xx)return
s=a.b
r=a.c
q=16-B.b.giZ(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.xu(s,r,q,p)
n=new Uint16Array(b+5)
m=A.xu(c.b,b,q,n)}else{n=A.vD(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.vE(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.qN(n,m,j,i)>=0){g&2&&A.C(n)
n[m]=1
A.jN(n,h,j,i,n)}else{g&2&&A.C(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.jN(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.BI(l,n,e);--k
A.xz(d,f,0,n,k,o)
if(n[e]<d){i=A.vE(f,o,k,j)
A.jN(n,h,j,i,n)
while(--d,n[e]<d)A.jN(n,h,j,i,n)}--e}$.xv=c.b
$.xw=b
$.xx=s
$.xy=r
$.vA.b=n
$.vB.b=h
$.h2.b=o
$.vC.b=q},
gv(a){var s,r,q,p=new A.qO(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.qP().$1(s)},
D(a,b){if(b==null)return!1
return b instanceof A.az&&this.a_(0,b)===0},
j(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.j(-n.b[0])
return B.b.j(n.b[0])}s=A.v([],t.s)
m=n.a
r=m?n.by(0):n
while(r.c>1){q=$.wg()
if(q.c===0)A.w(B.aA)
p=r.md(q).j(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.lp(q)}s.push(B.b.j(r.b[0]))
if(m)s.push("-")
return new A.d9(s,t.hF).oe(0)},
$ia9:1}
A.qO.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:159}
A.qP.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:151}
A.jZ.prototype={
iV(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
j9(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.bc.prototype={
D(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bc)if(this.a===b.a)s=this.b===b.b
return s},
gv(a){return A.bH(this.a,this.b,B.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)},
a_(a,b){var s=B.b.a_(this.a,b.a)
if(s!==0)return s
return B.b.a_(this.b,b.b)},
j(a){var s=this,r=A.Ab(A.x6(s)),q=A.ih(A.x4(s)),p=A.ih(A.x1(s)),o=A.ih(A.x2(s)),n=A.ih(A.x3(s)),m=A.ih(A.x5(s)),l=A.wC(A.AV(s)),k=s.b,j=k===0?"":A.wC(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$ia9:1}
A.aY.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.aY&&this.a===b.a},
gv(a){return B.b.gv(this.a)},
a_(a,b){return B.b.a_(this.a,b.a)},
j(a){var s,r,q,p,o,n=this.a,m=B.b.T(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.T(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.T(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.oB(B.b.j(n%1e6),6,"0")},
$ia9:1}
A.rp.prototype={
j(a){return this.aB()}}
A.W.prototype={
gbz(){return A.AU(this)}}
A.hW.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.il(s)
return"Assertion failed"}}
A.c5.prototype={}
A.a6.prototype={
gf7(){return"Invalid argument"+(!this.a?"(s)":"")},
gf6(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gf7()+q+o
if(!s.a)return n
return n+s.gf6()+": "+A.il(s.gfZ())},
gfZ(){return this.b}}
A.e5.prototype={
gfZ(){return this.b},
gf7(){return"RangeError"},
gf6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.fi.prototype={
gfZ(){return this.b},
gf7(){return"RangeError"},
gf6(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.fR.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.js.prototype={
j(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.b6.prototype={
j(a){return"Bad state: "+this.a}}
A.ib.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.il(s)+"."}}
A.iX.prototype={
j(a){return"Out of Memory"},
gbz(){return null},
$iW:1}
A.fI.prototype={
j(a){return"Stack Overflow"},
gbz(){return null},
$iW:1}
A.jY.prototype={
j(a){return"Exception: "+this.a},
$iQ:1}
A.aT.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.t(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}l=""
if(m-q>78){k="..."
if(f-q<75){j=q+75
i=q}else{if(m-f<75){i=m-75
j=m
k=""}else{i=f-36
j=f+36}l="..."}}else{j=m
i=q
k=""}return g+l+B.a.t(e,i,j)+k+"\n"+B.a.aI(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iQ:1,
gjv(){return this.a},
gdJ(){return this.b},
ga6(){return this.c}}
A.ix.prototype={
gbz(){return null},
j(a){return"IntegerDivisionByZeroException"},
$iW:1,
$iQ:1}
A.n.prototype={
d9(a,b){return A.i6(this,A.p(this).h("n.E"),b)},
aY(a,b,c){return A.ft(this,b,A.p(this).h("n.E"),c)},
U(a,b){var s
for(s=this.gA(this);s.l();)if(J.z(s.gp(),b))return!0
return!1},
bv(a,b){var s=A.p(this).h("n.E")
if(b)s=A.as(this,s)
else{s=A.as(this,s)
s.$flags=1
s=s}return s},
dB(a){return this.bv(0,!0)},
gk(a){var s,r=this.gA(this)
for(s=0;r.l();)++s
return s},
gE(a){return!this.gA(this).l()},
gaN(a){return!this.gE(this)},
bN(a,b){return A.xk(this,b,A.p(this).h("n.E"))},
aS(a,b){return A.xe(this,b,A.p(this).h("n.E"))},
gae(a){var s=this.gA(this)
if(!s.l())throw A.b(A.bY())
return s.gp()},
V(a,b){var s,r
A.aJ(b,"index")
s=this.gA(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.iv(b,b-r,this,null,"index"))},
j(a){return A.Ay(this,"(",")")}}
A.N.prototype={
j(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.G.prototype={
gv(a){return A.k.prototype.gv.call(this,0)},
j(a){return"null"}}
A.k.prototype={$ik:1,
D(a,b){return this===b},
gv(a){return A.e4(this)},
j(a){return"Instance of '"+A.j1(this)+"'"},
ga3(a){return A.uy(this)},
toString(){return this.j(this)}}
A.kx.prototype={
j(a){return""},
$iae:1}
A.Y.prototype={
gk(a){return this.a.length},
eA(a){var s=A.q(a)
this.a+=s},
a4(a){var s=A.aR(a)
this.a+=s},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.pJ.prototype={
$2(a,b){throw A.b(A.ak("Illegal IPv6 address, "+a,this.a,b))},
$S:149}
A.hC.prototype={
giG(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.q(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
goD(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.a0(s,1)
r=s.length===0?B.J:A.nG(new A.ab(A.v(s.split("/"),t.s),A.E8(),t.iZ),t.N)
q.x!==$&&A.wc()
p=q.x=r}return p},
gv(a){var s,r=this,q=r.y
if(q===$){s=B.a.gv(r.giG())
r.y!==$&&A.wc()
r.y=s
q=s}return q},
ghf(){return this.b},
gbG(){var s=this.c
if(s==null)return""
if(B.a.K(s,"[")&&!B.a.R(s,"v",1))return B.a.t(s,1,s.length-1)
return s},
gds(){var s=this.d
return s==null?A.xV(this.a):s},
gdu(){var s=this.f
return s==null?"":s},
gee(){var s=this.r
return s==null?"":s},
ei(a){var s=this.a
if(a.length!==s.length)return!1
return A.yd(a,s,0)>=0},
jL(a){var s,r,q,p,o,n,m,l=this
a=A.vM(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.tH(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.K(o,"/"))o="/"+o
m=o
return A.hD(a,r,p,q,m,l.f,l.r)},
ie(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.R(b,"../",r);){r+=3;++s}q=B.a.cD(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ej(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.c6(a,q+1,null,B.a.a0(b,r-3*s))},
dw(a){return this.dz(A.di(a))},
dz(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaz().length!==0)return a
else{s=h.a
if(a.gfU()){r=a.jL(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gjo())m=a.geg()?a.gdu():h.f
else{l=A.Cx(h,n)
if(l>0){k=B.a.t(n,0,l)
n=a.gfT()?k+A.dx(a.gaP()):k+A.dx(h.ie(B.a.a0(n,k.length),a.gaP()))}else if(a.gfT())n=A.dx(a.gaP())
else if(n.length===0)if(p==null)n=s.length===0?a.gaP():A.dx(a.gaP())
else n=A.dx("/"+a.gaP())
else{j=h.ie(n,a.gaP())
r=s.length===0
if(!r||p!=null||B.a.K(n,"/"))n=A.dx(j)
else n=A.vO(j,!r||p!=null)}m=a.geg()?a.gdu():null}}}i=a.gfV()?a.gee():null
return A.hD(s,q,p,o,n,m,i)},
gfU(){return this.c!=null},
geg(){return this.f!=null},
gfV(){return this.r!=null},
gjo(){return this.e.length===0},
gfT(){return B.a.K(this.e,"/")},
hd(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.S("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.S(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.S(u.A))
if(r.c!=null&&r.gbG()!=="")A.w(A.S(u.Q))
s=r.goD()
A.Cs(s,!1)
q=A.vq(B.a.K(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
j(a){return this.giG()},
D(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gaz())if(p.c!=null===b.gfU())if(p.b===b.ghf())if(p.gbG()===b.gbG())if(p.gds()===b.gds())if(p.e===b.gaP()){r=p.f
q=r==null
if(!q===b.geg()){if(q)r=""
if(r===b.gdu()){r=p.r
q=r==null
if(!q===b.gfV()){s=q?"":r
s=s===b.gee()}}}}return s},
$ijy:1,
gaz(){return this.a},
gaP(){return this.e}}
A.pI.prototype={
gjN(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bl(m,"?",s)
q=m.length
if(r>=0){p=A.hE(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.jV("data","",n,n,A.hE(m,s,q,128,!1,!1),p,n)}return m},
j(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bl.prototype={
gfU(){return this.c>0},
gfW(){return this.c>0&&this.d+1<this.e},
geg(){return this.f<this.r},
gfV(){return this.r<this.a.length},
gfT(){return B.a.R(this.a,"/",this.e)},
gjo(){return this.e===this.f},
ei(a){var s=a.length
if(s===0)return this.b<0
if(s!==this.b)return!1
return A.yd(a,this.a,0)>=0},
gaz(){var s=this.w
return s==null?this.w=this.lk():s},
lk(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.K(r.a,"http"))return"http"
if(q===5&&B.a.K(r.a,"https"))return"https"
if(s&&B.a.K(r.a,"file"))return"file"
if(q===7&&B.a.K(r.a,"package"))return"package"
return B.a.t(r.a,0,q)},
ghf(){var s=this.c,r=this.b+3
return s>r?B.a.t(this.a,r,s-1):""},
gbG(){var s=this.c
return s>0?B.a.t(this.a,s,this.d):""},
gds(){var s,r=this
if(r.gfW())return A.yQ(B.a.t(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.K(r.a,"http"))return 80
if(s===5&&B.a.K(r.a,"https"))return 443
return 0},
gaP(){return B.a.t(this.a,this.e,this.f)},
gdu(){var s=this.f,r=this.r
return s<r?B.a.t(this.a,s+1,r):""},
gee(){var s=this.r,r=this.a
return s<r.length?B.a.a0(r,s+1):""},
i8(a){var s=this.d+1
return s+a.length===this.e&&B.a.R(this.a,a,s)},
oL(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bl(B.a.t(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
jL(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.vM(a,0,a.length)
s=!(h.b===a.length&&B.a.K(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.t(h.a,h.b+3,q):""
o=h.gfW()?h.gds():g
if(s)o=A.tH(o,a)
q=h.c
if(q>0)n=B.a.t(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.t(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.K(l,"/"))l="/"+l
k=h.r
j=m<k?B.a.t(q,m+1,k):g
m=h.r
i=m<q.length?B.a.a0(q,m+1):g
return A.hD(a,p,n,o,l,j,i)},
dw(a){return this.dz(A.di(a))},
dz(a){if(a instanceof A.bl)return this.mt(this,a)
return this.iI().dz(a)},
mt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.K(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.K(a.a,"http"))p=!b.i8("80")
else p=!(r===5&&B.a.K(a.a,"https"))||!b.i8("443")
if(p){o=r+1
return new A.bl(B.a.t(a.a,0,o)+B.a.a0(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.iI().dz(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bl(B.a.t(a.a,0,r)+B.a.a0(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bl(B.a.t(a.a,0,r)+B.a.a0(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.oL()}s=b.a
if(B.a.R(s,"/",n)){m=a.e
l=A.xO(this)
k=l>0?l:m
o=k-n
return new A.bl(B.a.t(a.a,0,k)+B.a.a0(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.R(s,"../",n))n+=3
o=j-n+1
return new A.bl(B.a.t(a.a,0,j)+"/"+B.a.a0(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.xO(this)
if(l>=0)g=l
else for(g=j;B.a.R(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.R(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.R(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bl(B.a.t(h,0,i)+d+B.a.a0(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
hd(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.K(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.S("Cannot extract a file path from a "+r.gaz()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.S(u.z))
throw A.b(A.S(u.A))}if(r.c<r.d)A.w(A.S(u.Q))
q=B.a.t(s,r.e,q)
return q},
gv(a){var s=this.x
return s==null?this.x=B.a.gv(this.a):s},
D(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.j(0)},
iI(){var s=this,r=null,q=s.gaz(),p=s.ghf(),o=s.c>0?s.gbG():r,n=s.gfW()?s.gds():r,m=s.a,l=s.f,k=B.a.t(m,s.e,l),j=s.r
l=l<j?s.gdu():r
return A.hD(q,p,o,n,k,l,j<m.length?s.gee():r)},
j(a){return this.a},
$ijy:1}
A.jV.prototype={}
A.ip.prototype={
i(a,b){var s=!0
s=typeof b=="string"
if(s)A.wF(b)
return this.a.get(b)},
j(a){return"Expando:null"}}
A.u2.prototype={
$0(){var s=v.G.performance
if(t.m.b(s))if(s.measure!=null&&s.mark!=null&&s.clearMeasures!=null&&s.clearMarks!=null)return s
return null},
$S:94}
A.u0.prototype={
$0(){var s=v.G.JSON
if(t.m.b(s))return s
throw A.b(A.S("Missing JSON.parse() support"))},
$S:18}
A.vz.prototype={}
A.iV.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iQ:1}
A.mS.prototype={
$2(a,b){this.a.b8(new A.mQ(a),new A.mR(b),t.X)},
$S:146}
A.mQ.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:145}
A.mR.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.E1(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.d9.b(a))A.w("Attempting to box non-Dart object.")
s={}
s[$.zw()]=a
p.error=s
p.stack=b.j(0)
r=this.a
r.call(r,p)},
$S:6}
A.uE.prototype={
$1(a){var s,r,q,p
if(A.yn(a))return a
s=this.a
if(s.H(a))return s.i(0,a)
if(t.av.b(a)){r={}
s.m(0,a,r)
for(s=J.U(a.ga2());s.l();){q=s.gp()
r[q]=this.$1(a.i(0,q))}return r}else if(t.e7.b(a)){p=[]
s.m(0,a,p)
B.d.ac(p,J.dG(a,this,t.z))
return p}else return a},
$S:136}
A.uV.prototype={
$1(a){return this.a.X(a)},
$S:11}
A.uW.prototype={
$1(a){if(a==null)return this.a.a8(new A.iV(a===undefined))
return this.a.a8(a)},
$S:11}
A.rV.prototype={
en(a){if(a<=0||a>4294967296)throw A.b(A.ay(u.E+a))
return Math.random()*a>>>0}}
A.rW.prototype={
l2(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.S("No source of cryptographically secure random numbers available."))},
en(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.ay(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.R(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.cN(B.aa.gao(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.ik.prototype={
giT(){return this},
gv(a){return(J.y(this.a)^A.e4(this.b)^492929599)>>>0},
D(a,b){if(b==null)return!1
return b instanceof A.ik&&J.z(this.a,b.a)&&this.b===b.b}}
A.fV.prototype={
giT(){return null},
gv(a){return B.H.gv(this.a)^842997089},
D(a,b){if(b==null)return!1
return b instanceof A.fV}}
A.fK.prototype={
q(a,b){var s,r=this
if(r.b)throw A.b(A.E("Can't add a Stream to a closed StreamGroup."))
s=r.c
if(s===B.ar)r.e.cG(b,new A.oD())
else if(s===B.aq)return b.O(null).u()
else r.e.cG(b,new A.oE(r,b))
return null},
m1(){var s,r,q,p,o,n,m,l=this
l.c=B.as
r=l.e
q=A.as(new A.ax(r,A.p(r).h("ax<1,2>")),l.$ti.h("N<D<1>,af<1>?>"))
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.a5)(q),++o){n=q[o]
if(n.b!=null)continue
s=n.a
try{r.m(0,s,l.ia(s))}catch(m){r=l.iE()
if(r!=null)r.j0(new A.oC())
throw m}}},
my(){this.c=B.at
for(var s=this.e,s=new A.bd(s,s.r,s.e);s.l();)s.d.ah()},
mA(){this.c=B.as
for(var s=this.e,s=new A.bd(s,s.r,s.e);s.l();)s.d.aj()},
iE(){var s,r,q,p
this.c=B.aq
s=this.e
r=A.p(s).h("ax<1,2>")
q=t.bC
p=A.as(new A.fB(A.ft(new A.ax(s,r),new A.oB(this),r.h("n.E"),t.m2),q),q.h("n.E"))
s.aL(0)
return p.length===0?null:A.mW(p,t.H)},
ia(a){var s,r=this.a
r===$&&A.M()
s=a.ar(r.gc2(r),new A.oA(this,a),r.gfD())
if(this.c===B.at)s.ah()
return s}}
A.oD.prototype={
$0(){return null},
$S:1}
A.oE.prototype={
$0(){return this.a.ia(this.b)},
$S(){return this.a.$ti.h("af<1>()")}}
A.oC.prototype={
$1(a){},
$S:10}
A.oB.prototype={
$1(a){var s,r,q=a.b
try{if(q!=null){s=q.u()
return s}s=a.a.O(null).u()
return s}catch(r){return null}},
$S(){return this.a.$ti.h("o<~>?(N<D<1>,af<1>?>)")}}
A.oA.prototype={
$0(){var s=this.a,r=s.e,q=r.I(0,this.b),p=q==null?null:q.u()
if(r.a===0)if(s.b){s=s.a
s===$&&A.M()
A.eW(s.gaE())}return p},
$S:0}
A.eF.prototype={
j(a){return this.a}}
A.V.prototype={
i(a,b){var s,r=this
if(!r.fl(b))return null
s=r.c.i(0,r.a.$1(r.$ti.h("V.K").a(b)))
return s==null?null:s.b},
m(a,b,c){var s=this
if(!s.fl(b))return
s.c.m(0,s.a.$1(b),new A.N(b,c,s.$ti.h("N<V.K,V.V>")))},
ac(a,b){b.aa(0,new A.ly(this))},
bh(a,b,c){return this.c.bh(0,b,c)},
H(a){var s=this
if(!s.fl(a))return!1
return s.c.H(s.a.$1(s.$ti.h("V.K").a(a)))},
gbj(){var s=this.c,r=A.p(s).h("ax<1,2>")
return A.ft(new A.ax(s,r),new A.lz(this),r.h("n.E"),this.$ti.h("N<V.K,V.V>"))},
aa(a,b){this.c.aa(0,new A.lA(this,b))},
gE(a){return this.c.a===0},
ga2(){var s=this.c,r=A.p(s).h("be<2>")
return A.ft(new A.be(s,r),new A.lB(this),r.h("n.E"),this.$ti.h("V.K"))},
gk(a){return this.c.a},
cE(a,b,c,d){return this.c.cE(0,new A.lC(this,b,c,d),c,d)},
j(a){return A.nJ(this)},
fl(a){return this.$ti.h("V.K").b(a)},
$ia_:1}
A.ly.prototype={
$2(a,b){this.a.m(0,a,b)
return b},
$S(){return this.a.$ti.h("~(V.K,V.V)")}}
A.lz.prototype={
$1(a){var s=a.b
return new A.N(s.a,s.b,this.a.$ti.h("N<V.K,V.V>"))},
$S(){return this.a.$ti.h("N<V.K,V.V>(N<V.C,N<V.K,V.V>>)")}}
A.lA.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.h("~(V.C,N<V.K,V.V>)")}}
A.lB.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.h("V.K(N<V.K,V.V>)")}}
A.lC.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.G(this.c).G(this.d).h("N<1,2>(V.C,N<V.K,V.V>)")}}
A.f8.prototype={
aM(a,b){return J.z(a,b)},
c5(a){return J.y(a)},
od(a){return!0}}
A.iL.prototype={
aM(a,b){var s,r,q,p
if(a==null?b==null:a===b)return!0
if(a==null||b==null)return!1
s=J.a4(a)
r=s.gk(a)
q=J.a4(b)
if(r!==q.gk(b))return!1
for(p=0;p<r;++p)if(!J.z(s.i(a,p),q.i(b,p)))return!1
return!0},
c5(a){var s,r,q
if(a==null)return B.H.gv(null)
for(s=J.a4(a),r=0,q=0;q<s.gk(a);++q){r=r+J.y(s.i(a,q))&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.eI.prototype={
aM(a,b){var s,r,q,p,o
if(a===b)return!0
s=A.n_(B.B.gnC(),B.B.go6(),B.B.goc(),this.$ti.h("eI.E"),t.S)
for(r=a.gA(a),q=0;r.l();){p=r.gp()
o=s.i(0,p)
s.m(0,p,(o==null?0:o)+1);++q}for(r=b.gA(b);r.l();){p=r.gp()
o=s.i(0,p)
if(o==null||o===0)return!1
s.m(0,p,o-1);--q}return q===0}}
A.da.prototype={}
A.eA.prototype={
gv(a){return 3*J.y(this.b)+7*J.y(this.c)&2147483647},
D(a,b){if(b==null)return!1
return b instanceof A.eA&&J.z(this.b,b.b)&&J.z(this.c,b.c)}}
A.dZ.prototype={
aM(a,b){var s,r,q,p,o
if(a==b)return!0
if(a==null||b==null)return!1
if(a.gk(a)!==b.gk(b))return!1
s=A.n_(null,null,null,t.fA,t.S)
for(r=J.U(a.ga2());r.l();){q=r.gp()
p=new A.eA(this,q,a.i(0,q))
o=s.i(0,p)
s.m(0,p,(o==null?0:o)+1)}for(r=J.U(b.ga2());r.l();){q=r.gp()
p=new A.eA(this,q,b.i(0,q))
o=s.i(0,p)
if(o==null||o===0)return!1
s.m(0,p,o-1)}return!0},
c5(a){var s,r,q,p,o,n
if(a==null)return B.H.gv(null)
for(s=J.U(a.ga2()),r=this.$ti.y[1],q=0;s.l();){p=s.gp()
o=J.y(p)
n=a.i(0,p)
q=q+3*o+7*J.y(n==null?r.a(n):n)&2147483647}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.iT.prototype={
sk(a,b){A.wY()},
q(a,b){return A.wY()}}
A.jv.prototype={}
A.l4.prototype={}
A.cs.prototype={}
A.i_.prototype={
n(){},
$ilJ:1}
A.i0.prototype={
nK(){if(this.w)throw A.b(A.E("Can't finalize a finalized Request."))
this.w=!0
return B.av},
j(a){return this.a+" "+this.b.j(0)}}
A.lh.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:135}
A.li.prototype={
$1(a){return B.a.gv(a.toLowerCase())},
$S:126}
A.lj.prototype={
eO(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.K("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.K("Invalid content length "+A.q(s)+".",null))}}}
A.i4.prototype={
al(a){return this.kw(a)},
kw(b6){var s=0,r=A.i(t.n),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$al=A.d(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.wz("HTTP request failed. Client is already closed.",b6.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
b6.ht()
s=3
return A.c(new A.cQ(A.xf(b6.y,t.f4)).hc(),$async$al)
case 3:k=b8
p=5
j=b6
i=null
h=!1
g=null
if(j instanceof A.hR){if(h)a6=i
else{h=!0
a7=j.cx
i=a7
a6=a7}a6=a6!=null}else a6=!1
if(a6){if(h){a6=i
a8=a6}else{h=!0
a7=j.cx
i=a7
a8=a7}g=a8==null?t.p8.a(a8):a8
g.J(new A.ln(l))}a6=b6.b
a9=a6.j(0)
b0=!J.l0(k)?k:null
b1=t.N
f=A.a2(b1,t.K)
e=b6.y.length
d=null
if(e!=null){d=e
J.kZ(f,"content-length",d)}for(b2=b6.r,b2=new A.ax(b2,A.p(b2).h("ax<1,2>")).gA(0);b2.l();){b3=b2.d
b3.toString
c=b3
J.kZ(f,c.a,c.b)}f=A.Ex(f)
f.toString
A.T(f)
b2=l.signal
s=8
return A.c(A.aq(a4.fetch(a9,{method:b6.a,headers:f,body:b0,credentials:"same-origin",redirect:"follow",signal:b2}),t.m),$async$al)
case 8:b=b8
a=b.headers.get("content-length")
a0=a!=null?A.vm(a,null):null
if(a0==null&&a!=null){f=A.wz("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.a2(b1,b1)
b.headers.forEach(A.kM(new A.lo(a1)))
f=A.CE(b6,b)
a4=b.status
a6=a1
b0=a0
A.di(b.url)
b1=b.statusText
f=new A.jm(A.z3(f),b6,a4,b1,b0,a6,!1,!0)
f.eO(a4,b0,a6,!1,!0,b1,b6)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b5=o.pop()
a2=A.I(b5)
a3=A.P(b5)
A.yt(a2,a3,b6)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.d.I(a5,l)
s=n.pop()
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$al,r)},
n(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q)s[q].abort()
this.b=!0}}
A.ln.prototype={
$0(){return this.a.abort()},
$S:0}
A.lo.prototype={
$3(a,b,c){this.a.m(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:124}
A.tR.prototype={
$1(a){return A.eQ(this.a,this.b,a)},
$S:119}
A.u3.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.N()}},
$S:0}
A.u4.prototype={
$0(){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.c(A.aq(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.I(k)
m=A.P(k)
if(!o.a.b)A.yt(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:3}
A.cQ.prototype={
hc(){var s=new A.l($.m,t.jz),r=new A.ad(s,t.iq),q=new A.jR(new A.lx(r),new Uint8Array(1024))
this.B(q.gc2(q),!0,q.gaE(),r.gn0())
return s}}
A.lx.prototype={
$1(a){return this.a.X(new Uint8Array(A.vU(a)))},
$S:118}
A.bV.prototype={
j(a){var s=this.b,r="ClientException: "+this.a
if(s!=null)return r+", uri="+s.j(0)
else return r},
$iQ:1}
A.oj.prototype={
gfP(){var s,r
if(this.gbC()==null||!this.gbC().c.a.H("charset"))return B.k
s=this.gbC().c.a.i(0,"charset")
s.toString
r=A.wD(s)
return r==null?A.w(A.ak('Unsupported encoding "'+s+'".',null,null)):r},
sj_(a){var s,r,q,p,o,n,m=this,l=m.gfP().bi(a)
m.le()
m.y=A.z4(l)
s=m.gbC()
if(s==null){l=t.N
m.sbC(A.nL("text","plain",A.bt(["charset",m.gfP().gbK()],l,l)))}else{l=m.gbC()
if(l!=null){r=l.a
if(r!=="text"){l=r+"/"+l.b
l=l==="application/xml"||l==="application/xml-external-parsed-entity"||l==="application/xml-dtd"||B.a.bF(l,"+xml")}else l=!0}else l=!1
if(l&&!s.c.a.H("charset")){l=t.N
q=A.bt(["charset",m.gfP().gbK()],l,l)
p=s.a
o=s.b
n=A.wT(s.c,l,l)
n.ac(0,q)
m.sbC(A.nL(p,o,n))}}},
gbC(){var s=this.r.i(0,"content-type")
if(s==null)return null
return A.wX(s)},
sbC(a){this.r.m(0,"content-type",a.j(0))},
le(){if(!this.w)return
throw A.b(A.E("Can't modify a finalized Request."))}}
A.hR.prototype={}
A.jH.prototype={}
A.e7.prototype={}
A.cw.prototype={}
A.jm.prototype={}
A.f_.prototype={}
A.fu.prototype={
j(a){var s=new A.Y(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.aa(0,new A.nO(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.nM.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.p6(null,j),h=$.zH()
i.eK(h)
s=$.zG()
i.de(s)
r=i.gh0().i(0,0)
r.toString
i.de("/")
i.de(s)
q=i.gh0().i(0,0)
q.toString
i.eK(h)
p=t.N
o=A.a2(p,p)
for(;;){p=i.d=B.a.cF(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gC():n
if(!m)break
p=i.d=h.cF(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gC()
i.de(s)
if(i.c!==i.e)i.d=null
p=i.d.i(0,0)
p.toString
i.de("=")
n=i.d=s.cF(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gC()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.i(0,0)
n.toString
k=n}else k=A.Ef(i)
n=i.d=h.cF(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gC()
o.m(0,p,k)}i.nH()
return A.nL(r,q,o)},
$S:112}
A.nO.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.zE()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.z0(b,$.zt(),new A.nN(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:47}
A.nN.prototype={
$1(a){return"\\"+A.q(a.i(0,0))},
$S:48}
A.ut.prototype={
$1(a){var s=a.i(0,1)
s.toString
return s},
$S:48}
A.cp.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.cp&&this.b===b.b},
a_(a,b){return this.b-b.b},
gv(a){return this.b},
j(a){return this.a},
$ia9:1}
A.dX.prototype={
j(a){return"["+this.a.a+"] "+this.d+": "+this.b}}
A.dY.prototype={
gji(){var s=this.b,r=s==null?null:s.a.length!==0,q=this.a
return r===!0?s.gji()+"."+q:q},
gog(){var s,r
if(this.b==null){s=this.c
s.toString
r=s}else{s=$.v4().c
s.toString
r=s}return r},
Y(a,b,c,d){var s,r,q=this,p=a.b
if(p>=q.gog().b){if((d==null||d===B.r)&&p>=2000){d=A.fJ()
if(c==null)c="autogenerated stack trace for "+a.j(0)+" "+b}p=q.gji()
s=Date.now()
$.wU=$.wU+1
r=new A.dX(a,b,p,new A.bc(s,0,!1),c,d)
if(q.b==null)q.il(r)
else $.v4().il(r)}},
oq(a,b){return this.Y(a,b,null,null)},
fa(){if(this.b==null){var s=this.f
if(s==null)s=this.f=A.cv(!0,t.ag)
return new A.aA(s,A.p(s).h("aA<1>"))}else return $.v4().fa()},
il(a){var s=this.f
return s==null?null:s.q(0,a)}}
A.nH.prototype={
$0(){var s,r,q=this.a
if(B.a.K(q,"."))A.w(A.K("name shouldn't start with a '.'",null))
if(B.a.bF(q,"."))A.w(A.K("name shouldn't end with a '.'",null))
s=B.a.cD(q,".")
if(s===-1)r=q!==""?A.vl(""):null
else{r=A.vl(B.a.t(q,0,s))
q=B.a.a0(q,s+1)}return A.wV(q,r,A.a2(t.N,t.I))},
$S:111}
A.m_.prototype={
mO(a){var s,r,q=t.mf
A.yE("absolute",A.v([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.au(a)>0&&!s.bH(a)
if(s)return a
s=A.yL()
r=A.v([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.yE("join",r)
return this.of(new A.fY(r,t.lS))},
of(a){var s,r,q,p,o,n,m,l,k
for(s=a.gA(0),r=new A.ej(s,new A.m0()),q=this.a,p=!1,o=!1,n="";r.l();){m=s.gp()
if(q.bH(m)&&o){l=A.iY(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.t(k,0,q.cJ(k,!0))
l.b=n
if(q.dq(n))l.e[0]=q.gcf()
n=l.j(0)}else if(q.au(m)>0){o=!q.bH(m)
n=m}else{if(!(m.length!==0&&q.fK(m[0])))if(p)n+=q.gcf()
n+=m}p=q.dq(m)}return n.charCodeAt(0)==0?n:n},
dK(a,b){var s=A.iY(b,this.a),r=s.d,q=A.a8(r).h("c8<1>")
r=A.as(new A.c8(r,new A.m1(),q),q.h("n.E"))
s.d=r
q=s.b
if(q!=null)B.d.ob(r,0,q)
return s.d},
h4(a){var s
if(!this.lT(a))return a
s=A.iY(a,this.a)
s.h3()
return s.j(0)},
lT(a){var s,r,q,p,o,n,m,l=this.a,k=l.au(a)
if(k!==0){if(l===$.kW())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bm(n)){if(l===$.kW()&&n===47)return!0
if(q!=null&&l.bm(q))return!0
if(q===46)m=o==null||o===46||l.bm(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bm(q))return!0
if(q===46)l=o==null||l.bm(o)||o===46
else l=!1
if(l)return!0
return!1},
oJ(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.au(a)
if(l<=0)return o.h4(a)
s=A.yL()
if(m.au(s)<=0&&m.au(a)>0)return o.h4(a)
if(m.au(a)<=0||m.bH(a))a=o.mO(a)
if(m.au(a)<=0&&m.au(s)>0)throw A.b(A.wZ(n+a+'" from "'+s+'".'))
r=A.iY(s,m)
r.h3()
q=A.iY(a,m)
q.h3()
l=r.d
if(l.length!==0&&l[0]===".")return q.j(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.h7(l,p)
else l=!1
if(l)return q.j(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.h7(l[0],p[0])}else l=!1
if(!l)break
B.d.es(r.d,0)
B.d.es(r.e,1)
B.d.es(q.d,0)
B.d.es(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.wZ(n+a+'" from "'+s+'".'))
l=t.N
B.d.fX(q.d,0,A.b2(p,"..",!1,l))
p=q.e
p[0]=""
B.d.fX(p,1,A.b2(r.d.length,m.gcf(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.d.gaO(m)==="."){B.d.jJ(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.jK()
return q.j(0)},
jC(a){var s,r,q=this,p=A.yp(a)
if(p.gaz()==="file"&&q.a===$.hN())return p.j(0)
else if(p.gaz()!=="file"&&p.gaz()!==""&&q.a!==$.hN())return p.j(0)
s=q.h4(q.a.h6(A.yp(p)))
r=q.oJ(s)
return q.dK(0,r).length>q.dK(0,s).length?s:r}}
A.m0.prototype={
$1(a){return a!==""},
$S:26}
A.m1.prototype={
$1(a){return a.length!==0},
$S:26}
A.ul.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:110}
A.nv.prototype={
kr(a){var s=this.au(a)
if(s>0)return B.a.t(a,0,s)
return this.bH(a)?a[0]:null},
h7(a,b){return a===b}}
A.nU.prototype={
jK(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.d.gaO(s)===""))break
B.d.jJ(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
h3(){var s,r,q,p,o,n=this,m=A.v([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.a5)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.d.fX(m,0,A.b2(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.b2(m.length+1,s.gcf(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.dq(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.kW())n.b=A.hM(r,"/","\\")
n.jK()},
j(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.d.gaO(q)
return o.charCodeAt(0)==0?o:o}}
A.iZ.prototype={
j(a){return"PathException: "+this.a},
$iQ:1}
A.p7.prototype={
j(a){return this.gbK()}}
A.nV.prototype={
fK(a){return B.a.U(a,"/")},
bm(a){return a===47},
dq(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
cJ(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
au(a){return this.cJ(a,!1)},
bH(a){return!1},
h6(a){var s
if(a.gaz()===""||a.gaz()==="file"){s=a.gaP()
return A.vP(s,0,s.length,B.k,!1)}throw A.b(A.K("Uri "+a.j(0)+" must have scheme 'file:'.",null))},
gbK(){return"posix"},
gcf(){return"/"}}
A.pK.prototype={
fK(a){return B.a.U(a,"/")},
bm(a){return a===47},
dq(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bF(a,"://")&&this.au(a)===s},
cJ(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bl(a,"/",B.a.R(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.K(a,"file://"))return q
p=A.yM(a,q+1)
return p==null?q:p}}return 0},
au(a){return this.cJ(a,!1)},
bH(a){return a.length!==0&&a.charCodeAt(0)===47},
h6(a){return a.j(0)},
gbK(){return"url"},
gcf(){return"/"}}
A.qd.prototype={
fK(a){return B.a.U(a,"/")},
bm(a){return a===47||a===92},
dq(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
cJ(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bl(a,"\\",2)
if(s>0){s=B.a.bl(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.yR(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
au(a){return this.cJ(a,!1)},
bH(a){return this.au(a)===1},
h6(a){var s,r
if(a.gaz()!==""&&a.gaz()!=="file")throw A.b(A.K("Uri "+a.j(0)+" must have scheme 'file:'.",null))
s=a.gaP()
if(a.gbG()===""){r=s.length
if(r>=3&&B.a.K(s,"/")&&A.yM(s,1)!=null){A.x9(0,0,r,"startIndex")
s=A.ER(s,"/","",0)}}else s="\\\\"+a.gbG()+s
r=A.hM(s,"/","\\")
return A.vP(r,0,r.length,B.k,!1)},
n_(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
h7(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.n_(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gbK(){return"windows"},
gcf(){return"\\"}}
A.hQ.prototype={
aD(){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$aD=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if((q.a.a.a&30)===0){for(p=q.b,o=A.C6(p,p.r,A.p(p).c),n=o.$ti.c;o.l();){m=o.d;(m==null?n.a(m):m).N()}p.aL(0)}s=2
return A.c(q.c.a,$async$aD)
case 2:return A.f(null,r)}})
return A.h($async$aD,r)},
j3(){var s=this.c
if((s.a.a&30)===0)s.N()},
cd(a,b){var s=new A.ad(new A.l($.m,t.D),t.h)
if((this.a.a.a&30)!==0)s.N()
else this.b.q(0,s)
return A.dS(new A.l2(a,s,b),b).J(new A.l3(this,s))}}
A.l2.prototype={
$0(){return this.a.$1(this.b.a)},
$S(){return this.c.h("o<0>()")}}
A.l3.prototype={
$0(){var s=this.b
this.a.b.I(0,s)
if((s.a.a&30)===0)s.N()},
$S:1}
A.bI.prototype={
j(a){return"PowerSyncCredentials<endpoint: "+this.a+" userId: "+A.q(this.c)+" expiresAt: "+A.q(this.d)+">"}}
A.f6.prototype={
ew(){var s=this
return A.bt(["op_id",s.a,"op",s.c.c,"type",s.d,"id",s.e,"tx_id",s.b,"data",s.r,"metadata",s.f,"old",s.w],t.N,t.z)},
j(a){var s=this
return"CrudEntry<"+s.b+"/"+s.a+" "+s.c.c+" "+s.d+"/"+s.e+" "+A.q(s.r)+">"},
D(a,b){var s=this
if(b==null)return!1
return b instanceof A.f6&&b.b===s.b&&b.a===s.a&&b.c===s.c&&b.d===s.d&&b.e===s.e&&B.x.aM(b.r,s.r)},
gv(a){var s=this
return A.bH(s.b,s.a,s.c.c,s.d,s.e,B.x.c5(s.r),B.c,B.c,B.c,B.c)}}
A.fT.prototype={
aB(){return"UpdateType."+this.b},
ew(){return this.c}}
A.uT.prototype={
$1(a){return new A.bf(A.vW(a.a))},
$S:108}
A.uS.prototype={
$1(a){var s=a.a
return s.gaN(s)},
$S:103}
A.f5.prototype={
j(a){return"CredentialsException: "+this.a},
$iQ:1}
A.e3.prototype={
j(a){return"SyncProtocolException: "+this.a},
$iQ:1}
A.dd.prototype={
j(a){return"SyncResponseException: "+this.a+" "+this.b},
$iQ:1}
A.u1.prototype={
$1(a){var s
A.uU("["+a.d+"] "+a.a.a+": "+a.e.j(0)+": "+a.b)
s=a.r
if(s!=null)A.uU(s)
s=a.w
if(s!=null)A.uU(s)},
$S:53}
A.d0.prototype={
j(a){return v.G.String(this.a)},
gv(a){return A.R(v.G.Number(this.a))},
D(a,b){if(b==null)return!1
return b instanceof A.d0&&this.a===b.a},
$idT:1}
A.bf.prototype={
cK(a){var s=this.a
if(a instanceof A.bf)return new A.bf(s.cK(a.a))
else return new A.bf(s.cK(A.vW(a.a)))},
fJ(a){return this.kK(A.vW(a))}}
A.lv.prototype={
$1(a){return a.b_(this.a,this.b)},
$S(){return this.b.h("o<0>(aK)")}}
A.lt.prototype={
$1(a){return A.d5(a,"target",null)},
$S:101}
A.lu.prototype={
$1(a){return this.jT(a)},
jT(a){var s=0,r=A.i(t.y),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(a.jb("SELECT 1 FROM ps_crud LIMIT 1"),$async$$1)
case 3:n=c
if(!n.gE(n)){q=!1
s=1
break}s=4
return A.c(a.jb(u.B),$async$$1)
case 4:o=c
if(A.R(o.gae(o).i(0,"seq"))!==p.a){q=!1
s=1
break}s=5
return A.c(A.d5(a,"target",p.b),$async$$1)
case 5:q=!0
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:99}
A.lq.prototype={
$1(a){return this.jS(a)},
jS(a){var s=0,r=A.i(t.N),q,p=this,o
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.j0(a,p.a,p.b),$async$$1)
case 3:o=c
o.toString
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:55}
A.dK.prototype={
j(a){return this.a},
$iQ:1}
A.lH.prototype={
hh(a,b){var s=this.b
return A.Bv(new A.aA(s,A.p(s).h("aA<1>")),a,this.a,"waitForCheckpointRequestsReady",new A.lI(this,b),t.hi)},
oY(a){return this.hh(a,!0)}}
A.lI.prototype={
$1(a){var s,r,q
if(a instanceof A.h8)throw A.b(B.aS)
s=a instanceof A.em
r=s?a.a:null
if(s){q=r.giT()
if(q!=null)A.im(q.a,q.b)
return!0}if(a instanceof A.hm){if(this.b&&(this.a.c.a.a&30)===0)this.a.c.N()
return!1}},
$S:79}
A.cb.prototype={}
A.hm.prototype={}
A.em.prototype={}
A.h8.prototype={}
A.fr.prototype={$iaM:1,$ic1:1}
A.dQ.prototype={$iaM:1}
A.lG.prototype={}
A.fS.prototype={$iaM:1,$ic1:1}
A.m3.prototype={}
A.m4.prototype={
$1(a){return A.A7(t.f.a(a))},
$S:75}
A.mF.prototype={
ew(){var s,r,q,p,o=t.N,n=A.a2(o,t.dV)
for(s=this.a,s=new A.ax(s,A.p(s).h("ax<1,2>")).gA(0),r=t.S;s.l();){q=s.d
p=q.a
q=q.b.a
n.m(0,p,A.bt(["priority",q[1],"at_last",q[0],"since_last",q[2],"target_count",q[3]],o,r))}return A.bt(["buckets",n],o,t.X)}}
A.mG.prototype={
$2(a,b){var s
t.f.a(b)
s=A.R(b.i(0,"priority"))
return new A.N(a,new A.kl([A.R(b.i(0,"at_last")),s,A.R(b.i(0,"since_last")),A.R(b.i(0,"target_count"))]),t.lx)},
$S:58}
A.fd.prototype={$iaM:1,$ic1:1}
A.dL.prototype={$iaM:1}
A.f9.prototype={$iaM:1,$ic1:1}
A.fQ.prototype={$iaM:1,$ic1:1}
A.qU.prototype={
oE(a,b){var s=this.d.$2(a,b)
return s}}
A.fw.prototype={
mV(a){var s,r,q,p=this
p.a=a.a
p.b=a.b
s=a.d
r=s==null
p.c=!r
q=a.c
p.f=q
A:{if(r){s=null
break A}s=A.Av(s.a)
break A}p.e=s
q=A.Aw(q,new A.nP())
p.x=q==null?null:q.b
p.r=a.e
p.w=a.f}}
A.nP.prototype={
$1(a){return a.c===2147483647},
$S:59}
A.pg.prototype={
ca(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
a.$1(i)
s=j.c
if((s.c&4)!==0)return
r=i.a
q=i.b
p=i.c
o=i.d
n=i.e
if(n==null)n=null
m=i.f
l=i.x
k=new A.cx(r,q,p,n,o,l,l!=null,i.y,i.z,new A.dg(m,t.ph),i.r,i.w)
if(!k.D(0,j.b)){s.q(0,k)
j.b=k}}}
A.fN.prototype={}
A.lF.prototype={}
A.fo.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.fo},
gv(a){return B.a.gv("legacy")}}
A.d8.prototype={
D(a,b){var s
if(b==null)return!1
if(b instanceof A.d8)s=b.a.a===this.a.a
else s=!1
return s},
gv(a){return B.b.gv(this.a.a)}}
A.jq.prototype={
aB(){return"SyncClientImplementation."+this.b}}
A.dO.prototype={
ew(){var s,r,q,p,o=this,n=o.d,m=t.N
n=A.bt(["total",n.b,"downloaded",n.a],m,t.S)
s=o.w
A:{if(s==null){r=null
break A}r=1000*s.a+s.b
break A}q=o.x
B:{if(q==null){p=null
break B}p=1000*q.a+q.b
break B}return A.bt(["name",o.a,"parameters",o.b,"priority",o.c,"progress",n,"active",o.e,"is_default",o.f,"has_explicit_subscription",o.r,"expires_at",r,"last_synced_at",p],m,t.X)}}
A.uM.prototype={
$0(){var s=this,r=s.b,q=s.a,p=s.d,o=A.a8(r).h("@<1>").G(p.h("af<0>")).h("ab<1,2>"),n=A.as(new A.ab(r,new A.uL(q,s.c,p),o),o.h("X.E"))
q.a=n},
$S:0}
A.uL.prototype={
$1(a){var s=this.b
return a.ar(new A.uJ(s,this.c),new A.uK(this.a,s),s.gfD())},
$S(){return this.c.h("af<0>(D<0>)")}}
A.uJ.prototype={
$1(a){return this.a.q(0,a)},
$S(){return this.b.h("~(0)")}}
A.uK.prototype={
$0(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:j=n.a
s=!j.b?2:3
break
case 2:j.b=!0
q=5
j=j.a
j.toString
s=8
return A.c(A.kP(j),$async$$0)
case 8:o.push(7)
s=6
break
case 5:q=4
i=p.pop()
m=A.I(i)
l=A.P(i)
n.b.ad(m,l)
o.push(7)
s=6
break
case 4:o=[1]
case 6:q=1
n.b.n()
s=o.pop()
break
case 7:case 3:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:3}
A.uN.prototype={
$0(){var s=this.a,r=s.a
if(r!=null&&!s.b)return A.kP(r)},
$S:39}
A.uO.prototype={
$0(){var s=this.a.a
if(s!=null)return A.EF(s)},
$S:0}
A.uP.prototype={
$0(){var s=this.a.a
if(s!=null)return A.EJ(s)},
$S:0}
A.uo.prototype={
$1(a){return a.u()},
$S:60}
A.v1.prototype={
$1(a){var s=this.a
s.q(0,a)
s.n()},
$S(){return this.b.h("G(0)")}}
A.v2.prototype={
$2(a,b){var s
if(this.a.a)throw A.b(a)
else{s=this.b
s.ad(a,b)
s.n()}},
$S:6}
A.v0.prototype={
$0(){var s=0,r=A.i(t.H),q=this
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q.a.a=!0
s=2
return A.c(q.b,$async$$0)
case 2:return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.pL.prototype={
$1(a){var s,r,q,p=this
try{if(p.a.$1(a)){p.b.N()
p.c.u()}}catch(q){s=A.I(q)
r=A.P(q)
p.b.b6(s,r)
p.c.u()}},
$S(){return this.d.h("~(0)")}}
A.pM.prototype={
$0(){var s=this.a
if((s.a.a&30)===0){s.a8(new A.ci(this.b))
this.c.u()}},
$S:1}
A.el.prototype={
q(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="Stream is already closed"
for(s=J.a4(b),r=h.b,q=h.a.a,p=0;p<s.gk(b);){o=s.gk(b)-p
n=h.d
m=h.c
if(n!=null){l=Math.min(o,m)
k=p+l
if(p<0)A.w(A.ac(p,0,g,"start",g))
if(p>k)A.w(A.ac(k,p,g,"end",g))
n.hA(b,p,k)
if((h.c-=l)===0){m=B.f.gao(n.a)
j=n.a
j=J.cN(m,j.byteOffset,n.b*j.BYTES_PER_ELEMENT)
if((q.e&2)!==0)A.w(A.E(f))
q.bS(j)
h.d=null
h.c=4}p=k}else{l=Math.min(o,m)
i=J.zJ(B.aa.gao(r))
m=4-h.c
B.f.P(i,m,m+l,b,p)
p+=l
if((h.c-=l)===0){m=h.c=r.getInt32(0,!0)-4
if(m<5){j=A.fJ()
if((q.e&2)!==0)A.w(A.E(f))
q.eN(new A.e3("Invalid length for bson: "+m),j)}m=new A.bg(new Uint8Array(0),0)
m.hA(i,0,g)
h.d=m}}}},
ad(a,b){this.a.ad(a,b)},
n(){var s=this
if(s.d!=null||s.c!==4)s.a.ad(new A.e3("Pending data when stream was closed"),A.fJ())
s.a.a.Z()},
$iaj:1,
gk(a){return this.b}}
A.oP.prototype={
aD(){var s=0,r=A.i(t.H),q=this,p,o
var $async$aD=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=q.Q
s=o!=null?2:3
break
case 2:p=t.z
s=4
return A.c(A.wJ(new A.cC(o.aD(),q.w.n(),q.ax.n()),t.H,p,p),$async$aD)
case 4:case 3:q.x.n()
q.y.c.n()
return A.f(null,r)}})
return A.h($async$aD,r)},
cS(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j
var $async$cS=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:j=A.wq()
n.Q=j
m=j
q=2
s=5
return A.c(n.cq(),$async$cS)
case 5:k=t.H
l=A.it(n.cm(m),new A.p5(n,m),k,t.K)
s=6
return A.c(A.wJ(new A.cC(l,n.cV(m),n.d2(m)),k,k,k),$async$cS)
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
k=n.z
k.a=B.a0
k.b.q(0,B.a0)
m.j3()
s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cS,r)},
eu(){var s=0,r=A.i(t.g2),q,p=this,o,n,m
var $async$eu=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.d.w
if(!((o==null?B.q:o) instanceof A.d8))throw A.b(B.aT)
n=A
m=v.G
s=3
return A.c(p.iw(A.wq()),$async$eu)
case 3:q=new n.d0(m.BigInt(b))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eu,r)},
cq(){var s=0,r=A.i(t.N),q,p=this,o
var $async$cq=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.ch
s=o==null?3:5
break
case 3:s=6
return A.c(A.lr(p.b),$async$cq)
case 6:b=p.ch=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cq,r)},
cV(a){return this.lq(a)},
lq(a1){var s=0,r=A.i(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cV=A.d(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:g=a1.a.a,f=n.f,e=n.y,d=n.as,c=t.U,b=t.H
case 3:if(!((g.a&30)===0)){s=4
break}m=!1
p=6
l=null
s=9
return A.c(d.bJ(new A.oX(n,a1),n.f5(a1),c),$async$cV)
case 9:k=a3
l=k.a
m=!l
p=2
s=8
break
case 6:p=5
a0=o.pop()
j=A.I(a0)
i=A.P(a0)
if(A.vV(a1,j)){s=1
break}m=!0
h=A.DD(j)
f.Y(B.m,"Sync error: "+A.q(h),j,i)
e.ca(new A.oY(j))
s=8
break
case 5:s=2
break
case 8:s=(g.a&30)===0&&m?10:11
break
case 10:s=12
return A.c(a1.cd(new A.oZ(n),b),$async$cV)
case 12:case 11:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cV,r)},
cm(a){return this.ln(a)},
ln(a){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k
var $async$cm=A.d(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:l=n.w
k=t.H
l=new A.bR(A.bb(A.yU(A.v([n.r,new A.a7(l,A.p(l).h("a7<1>"))],t.i3),k),"stream",t.K))
q=2
m=n.at
case 5:s=7
return A.c(l.l(),$async$cm)
case 7:if(!c){s=6
break}l.gp()
s=8
return A.c(m.bJ(new A.oQ(n,a),n.f5(a),k),$async$cm)
case 8:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=9
return A.c(l.u(),$async$cm)
case 9:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cm,r)},
bV(a){return this.lo(a)},
lo(a4){var s=0,r=A.i(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bV=A.d(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a2=null
h=a4.a.a,g=m.y,f=g.a,e=m.f,d=m.c.c,c=m.b,b=m.ax
case 3:if(!((h.a&30)===0)){s=4
break}l=!1
p=6
s=9
return A.c(A.ls(c),$async$bV)
case 9:k=a6
s=k!=null?10:12
break
case 10:g.ca(new A.oR())
a=k.a
a0=a2
if(a===(a0==null?null:a0.a)){e.Y(B.m,"Potentially previously uploaded CRUD entries are still present in the upload queue. \n                Make sure to handle uploads and complete CRUD transactions or batches by calling and awaiting their [.complete()] method.\n                The next upload iteration will be delayed.",null,null)
a=A.wE("Delaying due to previously encountered CRUD item.")
throw A.b(a)}a2=k
s=13
return A.c(d.$0(),$async$bV)
case 13:g.ca(new A.oS())
s=11
break
case 12:s=14
return A.c(A.dI(c,new A.oT(m,a4)),$async$bV)
case 14:l=a6
n=[4]
s=7
break
case 11:n.push(8)
s=7
break
case 6:p=5
a3=o.pop()
j=A.I(a3)
i=A.P(a3)
a2=null
if(A.vV(a4,j)){n=[1]
s=7
break}e.Y(B.m,"Data upload error",j,i)
g.ca(new A.oU(j))
s=15
return A.c(m.f5(a4),$async$bV)
case 15:if(!f.a){n=[4]
s=7
break}e.Y(B.m,"Caught exception when uploading. Upload will retry after a delay",j,i)
n.push(8)
s=7
break
case 5:n=[2]
case 7:p=2
g.ca(new A.oV())
if((h.a&30)===0&&l){if(!b.gbZ())A.w(b.bT())
b.an(B.aM)}s=n.pop()
break
case 8:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$bV,r)},
eR(a,b){var s=a.r
s.m(0,"Authorization","Token "+b.b)
s.ac(0,this.ay)},
iw(a){return a.cd(new A.p4(this),t.N)},
b3(a,b,c){return this.mi(a,b,c)},
iv(a,b){return this.b3(a,b,null)},
mi(a,b,c){var s=0,r=A.i(t.N),q,p=this,o,n,m,l,k,j,i
var $async$b3=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=c==null?3:4
break
case 3:s=5
return A.c(p.cq(),$async$b3)
case 5:c=e
case 4:o=p.c
n=o.oE(c,b)
s=6
return A.c(t.cI.b(n)?n:A.bP(n,t.T),$async$b3)
case 6:m=e
if(m!=null){q=m
s=1
break}s=7
return A.c(o.a.$0(),$async$b3)
case 7:l=e
if(l==null)throw A.b(A.v8("Not logged in"))
k=A.v5("POST",A.di(l.a).dw("sync/checkpoint-request"),a)
n=t.N
k.sj_(B.h.fO(A.bt(["client_id",c,"checkpoint_request_id",b],n,n),null))
p.eR(k,l)
n=k.r
n.m(0,"Accept","application/json")
n.m(0,"Content-Type","application/json")
i=A
s=9
return A.c(p.x.al(k),$async$b3)
case 9:s=8
return A.c(i.j6(e),$async$b3)
case 8:j=e
n=j.b
s=n===401?10:11
break
case 10:s=12
return A.c(o.b.$1$invalidate(!0),$async$b3)
case 12:case 11:if(n===404)throw A.b(B.aR)
if(n!==200)throw A.b(A.xi(j))
q=A.an(J.eX(J.eX(B.h.c3(A.w4(A.vS(j.e)).aG(j.w),null),"data"),"checkpoint_request_id"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$b3,r)},
bX(a){return this.ly(a)},
ly(a){var s=0,r=A.i(t.N),q,p=this,o,n,m,l,k
var $async$bX=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:m=p.c
s=3
return A.c(m.a.$0(),$async$bX)
case 3:l=c
if(l==null)throw A.b(A.v8("Not logged in"))
k=A
s=4
return A.c(p.cq(),$async$bX)
case 4:o=k.q(c)
s=5
return A.c(a.cd(new A.p_(p,A.di(l.a).dw("write-checkpoint2.json?client_id="+o),l),t.Y),$async$bX)
case 5:n=c
o=n.b
s=o===401?6:7
break
case 6:s=8
return A.c(m.b.$1$invalidate(!0),$async$bX)
case 8:case 7:if(o!==200)throw A.b(A.xi(n))
q=A.an(J.eX(J.eX(B.h.c3(A.w4(A.vS(n.e)).aG(n.w),null),"data"),"write_checkpoint"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bX,r)},
dV(a){return this.mo(a)},
mo(a){var s=0,r=A.i(t.U),q,p=this,o,n
var $async$dV=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:n=p.f
n.Y(B.l,"Starting Rust sync iteration",null,null)
s=3
return A.c(new A.qo(p,a).kR(),$async$dV)
case 3:o=c
n.Y(B.l,"Ending Rust sync iteration. Immediate restart: "+o.a,null,null)
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dV,r)},
c_(a,b){return this.m5(a,b)},
m5(a,b){var s=0,r=A.i(t.n),q,p=this,o,n,m,l,k,j
var $async$c_=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:l=p.c
s=3
return A.c(l.a.$0(),$async$c_)
case 3:k=d
if(k==null)throw A.b(A.v8("Not logged in"))
o=A.v5("POST",A.di(k.a).dw("sync/stream"),b)
p.eR(o,k)
n=o.r
n.m(0,"Content-Type","application/json")
n.m(0,"Accept","application/vnd.powersync.bson-stream;q=0.9,application/x-ndjson;q=0.8")
o.sj_(B.h.fO(a,null))
s=4
return A.c(p.x.al(o),$async$c_)
case 4:m=d
n=m.b
s=n===401?5:6
break
case 5:s=7
return A.c(l.b.$1$invalidate(!0),$async$c_)
case 7:case 6:s=n!==200?8:9
break
case 8:j=A
s=10
return A.c(A.p8(m),$async$c_)
case 10:throw j.b(d)
case 9:q=m
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$c_,r)},
d2(a){return this.mh(a)},
mh(a){var s=0,r=A.i(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$d2=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:e={}
e.a=null
A:{k=n.d.w
if(k==null)k=B.q
j=k instanceof A.d8
i=j?k.a:null
if(j){e.a=i
break A}s=1
break}j=a.a.a,h=n.f,g=t.H
case 3:if(!((j.a&30)===0)){s=4
break}p=6
s=9
return A.c(a.cd(new A.p2(e,n),g),$async$d2)
case 9:p=2
s=8
break
case 6:p=5
d=o.pop()
m=A.I(d)
l=A.P(d)
if((j.a&30)!==0){s=1
break}h.Y(B.m,"Error retrying checkpoint request",m,l)
s=10
return A.c(n.hS(a,e.a),$async$d2)
case 10:s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$d2,r)},
be(a,b){return this.mg(a,b)},
mg(a,b){var s=0,r=A.i(t.H),q,p=this,o,n,m,l,k,j,i
var $async$be=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:k=new A.p0(p,b)
j=p.z
s=3
return A.c(j.hh(b,!1),$async$be)
case 3:s=4
return A.c(k.$0(),$async$be)
case 4:o=d
n=A.vT(a)
b.J(n.b)
s=5
return A.c(n.a,$async$be)
case 5:i=o==null
if(i)d=i
else{s=6
break}s=7
break
case 6:i=o
s=8
return A.c(k.$0(),$async$be)
case 8:d=!i.D(0,d)
case 7:if(d){s=1
break}m=p.y.a.w
k=!1
if(m!=null){l=m.a>=o.a
k=l}if(k){s=1
break}s=9
return A.c(j.hh(b,!1),$async$be)
case 9:p.f.Y(B.t,"Retry checkpoint request "+o.j(0),null,null)
s=10
return A.c(p.iv(b,v.G.String(o.a)),$async$be)
case 10:case 1:return A.f(q,r)}})
return A.h($async$be,r)},
hS(a,b){return a.cd(new A.oW(this,b),t.H)},
f5(a){return this.hS(a,null)}}
A.p5.prototype={
$2(a,b){if(A.vV(this.b,a))return
this.a.f.Y(B.m,"Error in crud upload loop",a,b)},
$S:6}
A.oX.prototype={
$0(){return this.a.dV(this.b)},
$S:61}
A.oY.prototype={
$1(a){a.c=a.b=a.a=!1
a.e=null
a.z=this.a
return null},
$S:8}
A.oZ.prototype={
$1(a){var s=this.a,r=s.d.d,q=A.vT(r==null?B.u:r),p=q.b
a.J(p)
s.z.c.a.J(p)
return q.a},
$S:23}
A.oQ.prototype={
$0(){return this.a.bV(this.b)},
$S:3}
A.oR.prototype={
$1(a){return a.d=!0},
$S:8}
A.oS.prototype={
$1(a){return a.y=null},
$S:8}
A.oT.prototype={
$0(){var s,r=this.a,q=r.d.w
if(q==null)q=B.q
s=this.b
if(q instanceof A.fo)return r.bX(s)
else return r.iw(s)},
$S:64}
A.oU.prototype={
$1(a){a.d=!1
a.y=this.a
return null},
$S:8}
A.oV.prototype={
$1(a){return a.d=!1},
$S:8}
A.p4.prototype={
$1(a){return this.k7(a)},
k7(a){var s=0,r=A.i(t.N),q,p=this,o,n,m
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.c(o.z.oY(a),$async$$1)
case 3:n=o
m=a
s=5
return A.c(A.v6(o.b,new A.p3(),a,t.N),$async$$1)
case 5:s=4
return A.c(n.iv(m,c),$async$$1)
case 4:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:65}
A.p3.prototype={
$1(a){return A.nX(a)},
$S:55}
A.p_.prototype={
$1(a){return this.k5(a)},
k5(a){var s=0,r=A.i(t.Y),q,p=this,o,n,m
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=A.v5("GET",p.b,a)
n=p.a
n.eR(o,p.c)
o.r.m(0,"Accept","application/json")
m=A
s=4
return A.c(n.x.al(o),$async$$1)
case 4:s=3
return A.c(m.j6(c),$async$$1)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:66}
A.p2.prototype={
$1(a){return this.b.be(this.a.a,a)},
$S:23}
A.p0.prototype={
$0(){return A.v6(this.a.b,new A.p1(),this.b,t.fo)},
$S:67}
A.p1.prototype={
$1(a){return this.k6(a)},
k6(a){var s=0,r=A.i(t.fo),q,p
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.d5(a,"current",null),$async$$1)
case 3:p=c
q=p==null?null:new A.d0(v.G.BigInt(p))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:68}
A.oW.prototype={
$1(a){var s,r=this.b
if(r==null){r=this.a.d.d
if(r==null)r=B.u}s=A.vT(r)
a.J(s.b)
return s.a},
$S:23}
A.tX.prototype={
$0(){var s,r,q=this.b
if((q.a.a&30)===0){s=this.a
r=s.a
if(r!=null)r.u()
s.a=null
q.N()}},
$S:0}
A.qo.prototype={
hV(a){var s=this.a.e,r=A.a8(s).h("ab<1,a_<j,@>>")
s=A.as(new A.ab(s,new A.qp(),r),r.h("X.E"))
return s},
kR(){return this.b.cd(new A.qw(this),t.U)},
dW(){var s=0,r=A.i(t.ks),q,p=this,o,n,m,l,k,j
var $async$dW=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=p.a
m=n.d
l=A.B2(m)
k=A.B3(m)
j=B.h.aG(n.a)
n=p.hV(n.e)
o=m.w
o=(o==null?B.q:o) instanceof A.d8?"requests":"legacy"
s=3
return A.c(p.bd("start",B.h.bi(A.bt(["app_metadata",l,"parameters",k,"schema",j,"include_defaults",m.f!==!1,"active_streams",n,"checkpoint_mode",o],t.N,t.z))),$async$dW)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dW,r)},
d3(a,b){return this.mp(a,b)},
mp(a,b){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$d3=A.d(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
j=n.a
i=b.a.a
s=6
return A.c(j.b3(i,a.b,a.a),$async$d3)
case 6:m=d
s=7
return A.c(A.v6(j.b,new A.qv(m),i,t.H),$async$d3)
case 7:j=j.z
i=new A.em(new A.fV(null))
j.a=i
j.b.q(0,i)
o.push(5)
s=4
break
case 3:q=2
g=p.pop()
l=A.I(g)
k=A.P(g)
if((b.a.a.a&30)===0){j=n.a
j.ax.q(0,new A.f1(l,k))
j=j.z
i=new A.em(new A.ik(l,k))
j.a=i
j.b.q(0,i)}o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.j3()
s=o.pop()
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$d3,r)},
ma(a,b){return A.EM(this.a.c_(a,b),t.n).mW(new A.qu(),t.o)},
aK(a){return this.lD(a)},
lD(b5){var s=0,r=A.i(t.U),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$aK=A.d(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b3=!1
p=4
a2=new A.bR(A.bb(b5,"stream",t.K))
p=7
a3=t.M,a4=m.a,a5=a4.f,a6=m.b.a.a,a7=t.p,a4=a4.w
case 11:s=13
return A.c(a2.l(),$async$aK)
case 13:if(!b7){s=12
break}l=a2.gp()
if((a6.a&30)!==0){s=10
break}k=null
j=l
i=null
h=!1
s=j instanceof A.dN?15:16
break
case 15:s=17
return A.c(m.bd("connection",l.b),$async$aK)
case 17:k=b7
s=14
break
case 16:g=null
if(j instanceof A.cr){if(h)a8=i
else{h=!0
a9=j.a
i=a9
a8=a9}a8=a7.b(a8)
if(a8){if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}g=a7.a(b0)}}else a8=!1
s=a8?18:19
break
case 18:if(!m.c){a8=a4.b
if(a8>=4)A.w(a4.am())
if((a8&1)!==0)a4.an(null)
else if((a8&3)===0){a8=a4.bW()
b0=new A.bz(null)
b1=a8.c
if(b1==null)a8.b=a8.c=b0
else{b1.sbp(b0)
a8.c=b0}}m.c=!0}s=20
return A.c(m.bd("line_binary",g),$async$aK)
case 20:k=b7
s=14
break
case 19:f=null
a8=j instanceof A.cr
if(a8){if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}A.an(b0)
if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}f=A.an(b0)}s=a8?21:22
break
case 21:if(!m.c){a8=a4.b
if(a8>=4)A.w(a4.am())
if((a8&1)!==0)a4.an(null)
else if((a8&3)===0){a8=a4.bW()
b0=new A.bz(null)
b1=a8.c
if(b1==null)a8.b=a8.c=b0
else{b1.sbp(b0)
a8.c=b0}}m.c=!0}s=23
return A.c(m.bd("line_text",f),$async$aK)
case 23:k=b7
s=14
break
case 22:s=j instanceof A.fU?24:25
break
case 24:s=26
return A.c(m.fk("completed_upload"),$async$aK)
case 26:k=b7
s=14
break
case 25:s=j instanceof A.fP?27:28
break
case 27:s=29
return A.c(m.fk("refreshed_token"),$async$aK)
case 29:k=b7
s=14
break
case 28:e=null
a8=j instanceof A.fg
if(a8)e=j.a
s=a8?30:31
break
case 30:s=32
return A.c(m.bd("update_subscriptions",B.h.bi(m.hV(e))),$async$aK)
case 32:k=b7
s=14
break
case 31:d=null
c=null
a8=j instanceof A.f1
if(a8){d=j.a
c=j.b}if(a8)A.im(d,c)
case 14:a8=J.U(k)
case 33:if(!a8.l()){s=34
break}b=a8.gp()
a=b
if(a instanceof A.dQ){a5.Y(B.m,"Received EstablishSyncStream connection while already connected.",null,null)
s=33
break}a0=null
b0=a instanceof A.dL
if(b0)a0=a.a
if(b0){b3=a0
s=10
break}a1=null
b0=a3.b(a)
if(b0)a1=a
s=b0?35:36
break
case 35:s=37
return A.c(m.cp(a1),$async$aK)
case 37:case 36:s=33
break
case 34:s=11
break
case 12:case 10:n.push(9)
s=8
break
case 7:n=[4]
case 8:p=4
s=38
return A.c(a2.u(),$async$aK)
case 38:s=n.pop()
break
case 9:p=2
s=6
break
case 4:p=3
b4=o.pop()
if(A.I(b4) instanceof A.cs){if((m.b.a.a.a&30)===0)throw b4}else throw b4
s=6
break
case 3:s=2
break
case 6:q=new A.ho(b3)
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$aK,r)},
d4(){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$d4=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:m=J
s=2
return A.c(q.fk("stop"),$async$d4)
case 2:p=m.U(b),o=t.M
case 3:if(!p.l()){s=4
break}n=p.gp()
s=o.b(n)?5:6
break
case 5:s=7
return A.c(q.cp(n),$async$d4)
case 7:case 6:s=3
break
case 4:return A.f(null,r)}})
return A.h($async$d4,r)},
bd(a,b){return this.lK(a,b)},
fk(a){return this.bd(a,null)},
lK(a,b){var s=0,r=A.i(t.ks),q,p=this,o,n,m,l
var $async$bd=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=J
m=t.j
l=B.h
s=3
return A.c(A.lp(p.a.b,a,b),$async$bd)
case 3:o=n.wk(m.a(l.aG(d)),t.f)
q=new A.ab(o,A.Es(),A.p(o).h("ab<A.E,aM>"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bd,r)},
cp(a){return this.lC(a)},
lC(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$cp=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=a instanceof A.fr
if(p){o=a.a
n=a.b}else{o=null
n=null}if(p){A:{if("DEBUG"===o){p=B.t
break A}if("INFO"===o){p=B.l
break A}p=B.m
break A}q.a.f.oq(p,n)
s=2
break}p={}
p.a=null
m=a instanceof A.fS
if(m)p.a=a.a
if(m){q.a.y.ca(new A.qq(p))
s=2
break}p=a instanceof A.fd
l=p?a.a:null
s=p?3:4
break
case 3:p=q.a.c
s=l?5:7
break
case 5:s=8
return A.c(p.b.$1$invalidate(!0),$async$cp)
case 8:s=6
break
case 7:p.b.$1$invalidate(!1).b8(new A.qr(q),new A.qs(q),t.P)
case 6:s=2
break
case 4:if(a instanceof A.f9){q.a.y.ca(new A.qt())
s=2
break}p=a instanceof A.fQ
k=p?a.a:null
if(p)q.a.f.Y(B.m,"Unknown instruction: "+A.q(k),null,null)
case 2:return A.f(null,r)}})
return A.h($async$cp,r)}}
A.qp.prototype={
$1(a){return A.bt(["name",a.a,"params",B.h.aG(a.b)],t.N,t.z)},
$S:69}
A.qw.prototype={
$1(a){return this.kf(a)},
kf(b0){var s=0,r=A.i(t.U),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.d(function(b1,b2){if(b1===1){o.push(b2)
s=p}for(;;)switch(s){case 0:a6=null
a7=null
a8=l=m.a
a9=J
s=3
return A.c(l.dW(),$async$$1)
case 3:a8,k=a9.U(b2),j=t.M,i=l.a,h=i.ax,g=A.p(h).h("aA<1>"),f=t.o,e=t.fu,d=t.D,c=t.h,b=t.oh
case 4:if(!k.l()){s=5
break}a=k.gp()
a0=a instanceof A.dQ
if(a0){a1=a.a
a2=a.b}else{a1=null
a2=null}if(a0){a6=A.yU(A.v([l.ma(a1,b0),new A.aA(h,g)],e),f)
if(a2!=null){a0=$.m
a3=new A.ad(new A.l(a0,d),c)
a4=A.bu(b)
a5=new A.hQ(a3,a4,new A.ad(new A.l(a0,d),c))
a4.q(0,a3)
a7=a5
l.d3(a2,a5)}s=4
break}if(a instanceof A.dL){q=B.ac
s=1
break}a0=j.b(a)
a=a0?a:null
s=a0?6:7
break
case 6:s=8
return A.c(l.cp(a),$async$$1)
case 8:case 7:s=4
break
case 5:if(a6==null){q=B.ac
s=1
break}p=9
s=12
return A.c(l.aK(a6),$async$$1)
case 12:k=b2
q=k
n=[1]
s=10
break
n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
k=a7
k=k==null?null:k.aD()
s=13
return A.c(k instanceof A.l?k:A.bP(k,t.H),$async$$1)
case 13:k=i.z
k.c=new A.ad(new A.l($.m,d),c)
k.a=B.C
k.b.q(0,B.C)
s=14
return A.c(l.d4(),$async$$1)
case 14:s=n.pop()
break
case 11:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$1,r)},
$S:70}
A.qv.prototype={
$1(a){return A.d5(a,"seed",this.a)},
$S:71}
A.qu.prototype={
$1(a){return this.ke(a)},
ke(a){var $async$$1=A.d(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:s=3
q=[1]
return A.kK(A.xH(B.aU),$async$$1,r)
case 3:m=a.w
if(a.e.i(0,"content-type")==="application/vnd.powersync.bson-stream")m=new A.c9(A.EN(),m,t.jB)
else m=B.aH.bg(B.ap.bg(m))
s=4
q=[1]
return A.kK(A.C_(new A.aL(A.EO(),m,m.$ti.h("aL<D.T,aS>"))),$async$$1,r)
case 4:s=5
q=[1]
return A.kK(A.xH(B.aV),$async$$1,r)
case 5:case 1:return A.kK(null,0,r)
case 2:return A.kK(o.at(-1),1,r)}})
var s=0,r=A.De($async$$1,t.o),q,p=2,o=[],n=[],m
return A.DA(r)},
$S:72}
A.qq.prototype={
$1(a){return a.mV(this.a.a)},
$S:8}
A.qr.prototype={
$1(a){var s=this.a
if((s.b.a.a.a&30)===0)s.a.ax.q(0,B.aL)},
$S:73}
A.qs.prototype={
$2(a,b){this.a.a.f.Y(B.m,"Could not prefetch credentials",a,b)},
$S:6}
A.qt.prototype={
$1(a){return a.z=null},
$S:8}
A.dN.prototype={
aB(){return"ConnectionEvent."+this.b},
$iaS:1}
A.cr.prototype={$iaS:1}
A.fU.prototype={$iaS:1}
A.fP.prototype={$iaS:1}
A.fg.prototype={$iaS:1}
A.f1.prototype={$iaS:1}
A.cx.prototype={
D(a,b){var s=this
if(b==null)return!1
return b instanceof A.cx&&b.a===s.a&&b.c===s.c&&b.e===s.e&&b.b===s.b&&J.z(b.x,s.x)&&J.z(b.w,s.w)&&J.z(b.f,s.f)&&b.r==s.r&&B.w.aM(b.y,s.y)&&B.w.aM(b.z,s.z)&&J.z(b.d,s.d)&&J.z(b.Q,s.Q)},
gv(a){var s=this
return A.bH(s.a,s.c,s.e,s.b,s.w,s.x,s.f,B.w.c5(s.y),s.d,B.w.c5(s.z))},
j(a){var s,r,q,p,o=this,n="connected",m={},l=new A.Y("SyncStatus<")
m.a=!0
m=new A.ph(m,l)
if(o.a)m.$2(n,!0)
else if(o.b)m.$2(n,"connecting")
else m.$2(n,"offline (not connecting)")
m.$2("downloading",""+o.c+" (progress: "+A.q(o.d)+")")
m.$2("uploading",o.e)
m.$2("lastSyncedAt",o.f)
m.$2("hasSynced",o.r)
s=o.x
r=s==null
if(!r)m.$2("downloadError",s)
q=o.w
p=q==null
if(!p)m.$2("uploadError",q)
if(r&&p)m.$2("error",null)
m=l.a+=">"
return m.charCodeAt(0)==0?m:m}}
A.ph.prototype={
$2(a,b){var s,r,q=this.a
if(!q.a)this.b.a+=" "
s=this.b
r=a+": "+A.q(b)
s.a+=r
q.a=!1},
$S:74}
A.iz.prototype={
gv(a){return B.a_.c5(this.c)},
D(a,b){if(b==null)return!1
return b instanceof A.iz&&this.a===b.a&&this.b===b.b&&B.a_.aM(this.c,b.c)},
j(a){return"for total: "+this.b+" / "+this.a}}
A.nw.prototype={
$1(a){var s=a.a
return s[3]-s[0]},
$S:57}
A.nx.prototype={
$1(a){return a.a[2]},
$S:57}
A.o_.prototype={}
A.e6.prototype={
al(a){return this.kx(a)},
kx(a){var s=0,r=A.i(t.n),q,p=this,o,n,m,l,k,j
var $async$al=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:a.ht()
k=t.a
j=B.f
s=3
return A.c(new A.cQ(A.xf(a.y,t.f4)).hc(),$async$al)
case 3:o=k.a(j.gao(c))
n=p.b++
m=p.a.dI({r:0,i:n,u:a.b.j(0),m:a.a,h:B.h.bi(a.r),b:o})
a.cx.J(new A.oi(p,n))
s=4
return A.c(m,$async$al)
case 4:l=c
n=A.Ce(p,n).c
q=A.Bg(new A.a7(n,A.p(n).h("a7<1>")),l.s,null,A.Ar(l),!1,!0,null,a)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$al,r)},
hq(a,b){this.a.x.postMessage({type:"abortHttpRequest",payload:{r:b,i:a}})}}
A.oi.prototype={
$0(){return this.a.hq(this.b,!1)},
$S:0}
A.km.prototype={
l3(a,b){var s=this.c
s.f=s.d=this.gnI()
s.r=new A.ta(this)},
eb(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eb=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.d=!0
q=3
s=6
return A.c(n.a.a.er(n.b),$async$eb)
case 6:m=b
j=n.c
if(m!=null)j.q(0,A.b4(m,0,null))
else j.n()
o.push(5)
s=4
break
case 3:q=2
h=p.pop()
l=A.I(h)
k=A.P(h)
j=n.c
j.ad(l,k)
j.n()
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.d=!1
n.je()
s=o.pop()
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$eb,r)},
je(){var s,r,q=!1
if(!this.d){s=this.c
r=s.b
if((r&1)!==0)if((r&4)===0){q=s.gag().e
q=(q&4)===0}}if(q)this.eb()}}
A.ta.prototype={
$0(){var s=this.a
return s.a.hq(s.b,!0)},
$S:0}
A.vn.prototype={
$2(a,b){this.a.r.m(0,a,b)
return b},
$S:47}
A.vH.prototype={
n(){var s,r=this
if(!r.a){r.a=!0
s=r.c
if(s!=null)s.u()
r.iR(!1)}},
iR(a){var s,r=this.b
if((r.a.a&30)===0){if(a){s=this.c
if(s!=null)s.u()}r.N()}}}
A.pi.prototype={
mb(a,b,c,d,e){var s=this.a.cG(a,new A.pj(a))
s.e.q(0,new A.fZ(e,b,c,d))
return s}}
A.pj.prototype={
$0(){return A.Bl(this.a)},
$S:76}
A.cj.prototype={
kS(a,b){var s=this,r=A.Bx(a,new A.lX(s))
s.a=r
r.b.a.J(s.got())
s.d=$.dF().fa().O(new A.lY(s))},
h2(){var s=this,r=s.d
if(r!=null)r.u()
r=s.c
if(r!=null)r.e.q(0,new A.hr(s))
s.c=null}}
A.lX.prototype={
$2(a,b){return this.jU(a,b)},
jU(a2,a3){var s=0,r=A.i(t.k0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$2=A.d(function(a4,a5){if(a4===1)return A.e(a5,r)
for(;;)switch(s){case 0:case 3:switch(a2.a){case 1:s=5
break
case 3:s=6
break
case 2:s=7
break
case 7:s=8
break
default:s=9
break}break
case 5:A.T(a3)
o=p.a
n=o.a
n===$&&A.M()
m=a3.lockName
if(!n.e){n.e=!0
A.q8(m).oo(n.gaE(),t.H)}n=A.mH(0,a3.crudThrottleTimeMs)
l=a3.retryDelayMs
A:{if(l==null){m=null
break A}m=A.mH(0,l)
break A}k=a3.syncParamsEncoded
B:{if(k==null){j=null
break B}j=t.f.a(B.h.c3(k,null))
break B}i=a3.implementationName
C:{if(i==null){h=B.O
break C}h=A.ij(B.bd,i)
break C}g=a3.appMetadataEncoded
D:{if(g==null){f=null
break D}f=t.N
f=A.wT(t.ea.a(B.h.c3(g,null)),f,f)
break D}e=J.z(a3.customHttpClient,!0)?new A.lW(o):null
d=a3.checkpointModeRequestsDelay
E:{if(d==null){c=B.q
break E}c=new A.d8(A.mH(d,0))
break E}b=a3.databaseName
a=a3.schemaJson
a0=a3.subscriptions
a0=a0==null?null:A.xo(a0)
if(a0==null)a0=B.bf
o.c=o.b.mb(b,new A.fN(f,j,n,m,h,null,e,c),a,a0,o)
q=new A.a3({},null)
s=1
break
case 6:o=p.a
n=o.c
if(n!=null)n.e.q(0,new A.h7(o))
o.c=null
q=new A.a3({},null)
s=1
break
case 7:o=p.a
n=o.c
if(n!=null){m=A.xo(A.T(a3))
n.e.q(0,new A.h4(o,m))}q=new A.a3({},null)
s=1
break
case 8:a1=A
s=10
return A.c(p.a.c.f.eu(),$async$$2)
case 10:q=new a1.a3(a5.a,null)
s=1
break
case 9:throw A.b(A.E("Unexpected message type "+a2.j(0)))
case 4:case 1:return A.f(q,r)}})
return A.h($async$$2,r)},
$S:77}
A.lW.prototype={
$0(){var s=this.a.a
s===$&&A.M()
return new A.e6(s)},
$S:78}
A.lY.prototype={
$1(a){var s="["+a.d+"] "+a.a.a+": "+a.e.j(0)+": "+a.b,r=a.r
if(r!=null)s=s+"\n"+A.q(r)
r=a.w
if(r!=null)s=s+"\n"+r.j(0)
r=this.a.a
r===$&&A.M()
r.x.postMessage({type:"logEvent",payload:s.charCodeAt(0)==0?s:s})},
$S:53}
A.ed.prototype={
kX(a){var s=this.e
this.d.q(0,new A.a7(s,A.p(s).h("a7<1>")))
A.Am(new A.pf(this),t.P)},
ck(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$ck=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=$.dF()
n.Y(B.l,"Remote database closed, finding a new client",null,null)
p=q.f
p=p==null?null:p.aD()
s=2
return A.c(p instanceof A.l?p:A.bP(p,t.H),$async$ck)
case 2:q.f=null
s=3
return A.c(q.eX(),$async$ck)
case 3:o=b
s=o==null?4:6
break
case 4:n.Y(B.l,"No client remains",null,null)
s=5
break
case 6:s=7
return A.c(q.c0(o),$async$ck)
case 7:case 5:return A.f(null,r)}})
return A.h($async$ck,r)},
jH(){var s,r,q=this,p=q.y,o=A.AF(p,A.a8(p).c)
p=q.x
s=A.wO(new A.be(p,A.p(p).h("be<2>")),t.E)
if(!B.aJ.aM(o,s)){$.dF().Y(B.l,"Subscriptions across tabs have changed, checking whether a reconnect is necessary",null,null)
p=A.as(s,A.p(s).c)
q.y=p
r=q.f
if(r!=null){r.e=p
r=r.ax
if(r.d!=null)r.q(0,new A.fg(p))}}},
eX(){return this.lf()},
lf(){var s=0,r=A.i(t.gO),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eX=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:j={}
i=p.x
h=A.p(i).h("b1<1>")
g=A.as(new A.b1(i,h),h.h("n.E"))
i=g.length
if(i===0){q=null
s=1
break}h=new A.l($.m,t.iB)
o=new A.ad(h,t.if)
j.a=i
for(n=t.P,m=0;m<g.length;g.length===i||(0,A.a5)(g),++m){l=g[m]
k=l.a
k===$&&A.M()
k.eq().aQ(new A.p9(j,o,l),n).oR(B.u,new A.pa(j,l,o))}q=h
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eX,r)},
c0(a){return this.mj(a)},
mj(a4){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$c0=A.d(function(a5,a6){if(a5===1)return A.e(a6,r)
for(;;)switch(s){case 0:a3=$.dF()
a3.Y(B.l,"Sync setup: Requesting database",null,null)
p=a4.a
p===$&&A.M()
s=2
return A.c(p.ev(),$async$c0)
case 2:o=a6
a3.Y(B.l,"Sync setup: Connecting to endpoint",null,null)
p=o.databasePort
s=3
return A.c(A.qc(new A.kj(o.databaseName,p,o.lockName)),$async$c0)
case 3:n=a6
a3.Y(B.l,"Sync setup: Has database, starting sync!",null,null)
q.w=a4
p=t.P
n.a.c.a.aQ(new A.pb(a4),p)
m=A.v(["ps_crud"],t.s)
A.EG(new A.dq(t.hV))
l=n.d
k=A.Bo(m).bg(l)
l=q.b.c
if(l==null)l=B.F
j=A.Bp(k,l,new A.L(B.bp))
l=q.x
l=A.wO(new A.be(l,A.p(l).h("be<2>")),t.E)
l=A.as(l,A.p(l).c)
q.y=l
i=q.c
h=a4.a
g=q.b
f=q.a
p=A.bL(null,null,null,null,!1,p)
e=A.cv(!1,t.gs)
d=A.cv(!1,t.hi)
c=$.m
b=A.cv(!1,t.o)
a=g.r
a=a==null?null:a.$0()
if(a==null){a0=$.m.i(0,B.br)
a=a0==null?null:t.dF.a(a0).$0()
if(a==null)a=new A.i4(A.v([],t.W))}a1=A.q8("sync-"+f)
f=A.q8("crud-"+f)
a2=t.N
a2=A.bt(["X-User-Agent","powersync-dart-core/2.4.0 Dart (flutter-web)"],a2,a2)
q.f=new A.oP(i,n,new A.qU(h.gn4(),new A.pc(a4),h.goX(),new A.pd(a4)),g,l,a3,j,p,a,new A.pg(new A.fw(B.a9),B.bs,e),new A.lH(B.C,d,new A.ad(new A.l(c,t.D),t.h)),a1,f,b,a2)
new A.aA(e,A.p(e).h("aA<1>")).O(new A.pe(q))
q.f.cS()
return A.f(null,r)}})
return A.h($async$c0,r)}}
A.pf.prototype={
$0(){var s=0,r=A.i(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
var $async$$0=A.d(function(c9,d0){if(c9===1){p.push(d0)
s=q}for(;;)switch(s){case 0:c6=n.a
c7=c6.d.a
c7===$&&A.M()
c7=new A.bR(A.bb(new A.a7(c7,A.p(c7).h("a7<1>")),"stream",t.K))
q=2
a8=c6.x,a9=t.D
case 5:s=7
return A.c(c7.l(),$async$$0)
case 7:if(!d0){s=6
break}m=c7.gp()
q=9
l=m
k=null
j=!1
i=null
h=!1
g=null
f=null
e=null
d=null
b0=l instanceof A.fZ
if(b0){if(j)b1=k
else{j=!0
b2=l.a
k=b2
b1=b2}g=b1
f=l.b
e=l.c
if(h)b3=i
else{h=!0
b4=l.d
i=b4
b3=b4}d=b3}s=b0?13:14
break
case 13:a8.m(0,g,d)
c=null
b=null
b0=c6.b
b5=f
b6=b5.c
if(b6==null){b6=b0.c
if(b6==null)b6=B.F}b7=b5.d
if(b7==null){b7=b0.d
if(b7==null)b7=B.u}b8=b5.b
if(b8==null){b8=b0.b
if(b8==null)b8=B.K}b9=b5.e
c0=b5.f
if(c0==null)c0=b0.f!==!1
c1=b5.a
if(c1==null){c1=b0.a
if(c1==null)c1=B.L}c2=b5.r
if(c2==null)c2=b0.r
b5=b5.w
if(b5==null){b5=b0.w
if(b5==null)b5=B.q}c3=b0.b
c4=!0
if(B.x.aM(b8,c3==null?B.K:c3)){c3=b0.c
if(b6.D(0,c3==null?B.F:c3)){c3=b0.d
if(b7.D(0,c3==null?B.u:c3))if(b9===b0.e)if(c0===(b0.f!==!1)){c3=b0.a
if(B.x.aM(c1,c3==null?B.L:c3)){b0=b0.w
b0=!b5.D(0,b0==null?B.q:b0)}else b0=c4}else b0=c4
else b0=c4
else b0=c4
c4=b0}}a=new A.a3(new A.fN(c1,b8,b6,b7,b9,c0,c2,b5),c4)
c=a.a
b=a.b
c6.b=c
c6.c=e
b0=c6.f
s=b0==null?15:17
break
case 15:s=18
return A.c(c6.c0(g),$async$$0)
case 18:s=16
break
case 17:s=b?19:21
break
case 19:b0.aD()
c6.f=null
s=22
return A.c(c6.c0(g),$async$$0)
case 22:s=20
break
case 21:c6.jH()
case 20:case 16:a0=c6.r
a1=null
if(a0!=null){a1=a0
b0=g
b5=A.xc(a1)
b0=b0.a
b0===$&&A.M()
b0.x.postMessage({type:"notifySyncStatus",payload:b5})}s=12
break
case 14:a2=null
b0=l instanceof A.hr
if(b0){if(j)b1=k
else{j=!0
b2=l.a
k=b2
b1=b2}a2=b1}s=b0?23:24
break
case 23:a8.I(0,a2)
s=a8.a===0?25:27
break
case 25:b0=c6.f
b0=b0==null?null:b0.aD()
if(!(b0 instanceof A.l)){b5=new A.l($.m,a9)
b5.a=8
b5.c=b0
b0=b5}s=28
return A.c(b0,$async$$0)
case 28:c6.f=null
s=26
break
case 27:s=J.z(a2,c6.w)?29:30
break
case 29:s=31
return A.c(c6.ck(),$async$$0)
case 31:case 30:case 26:s=12
break
case 24:a3=null
b0=l instanceof A.h7
if(b0){if(j)b1=k
else{j=!0
b2=l.a
k=b2
b1=b2}a3=b1}s=b0?32:33
break
case 32:a8.I(0,a3)
b0=c6.f
b0=b0==null?null:b0.aD()
if(!(b0 instanceof A.l)){b5=new A.l($.m,a9)
b5.a=8
b5.c=b0
b0=b5}s=34
return A.c(b0,$async$$0)
case 34:c6.f=null
s=12
break
case 33:a4=null
a5=null
b0=l instanceof A.h4
if(b0){if(j)b1=k
else{j=!0
b2=l.a
k=b2
b1=b2}a4=b1
if(h)b3=i
else{h=!0
b4=l.b
i=b4
b3=b4}a5=b3}if(b0){a8.m(0,a4,a5)
c6.jH()}case 12:q=2
s=11
break
case 9:q=8
c8=p.pop()
a6=A.I(c8)
a7=A.P(c8)
b0=$.dF()
b5=A.q(m)
b0.Y(B.m,"Error handling "+b5,a6,a7)
s=11
break
case 8:s=2
break
case 11:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=35
return A.c(c7.u(),$async$$0)
case 35:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:56}
A.p9.prototype={
$1(a){var s;--this.a.a
s=this.b
if((s.a.a&30)===0)s.X(this.c)},
$S:9}
A.pa.prototype={
$0(){var s=this,r=s.a;--r.a
s.b.h2()
if(r.a===0&&(s.c.a.a&30)===0)s.c.X(null)},
$S:1}
A.pb.prototype={
$1(a){$.dF().Y(B.t,"Detected closed client",null,null)
this.a.h2()},
$S:9}
A.pc.prototype={
$1$invalidate(a){return this.k9(a)},
k9(a){var s=0,r=A.i(t.B),q,p=this,o
var $async$$1$invalidate=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.M()
s=3
return A.c(o.eh(),$async$$1$invalidate)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1$invalidate,r)},
$S:81}
A.pd.prototype={
$2(a,b){return this.k8(a,b)},
k8(a,b){var s=0,r=A.i(t.T),q,p=this,o
var $async$$2=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.M()
s=3
return A.c(o.e9(a,b),$async$$2)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$2,r)},
$S:82}
A.pe.prototype={
$1(a){var s,r,q
$.dF().Y(B.t,"Broadcasting sync event: "+a.j(0),null,null)
s=this.a
s.r=a
r=A.xc(a)
for(s=s.x,s=new A.fp(s,s.r,s.e);s.l();){q=s.d.a
q===$&&A.M()
q.x.postMessage({type:"notifySyncStatus",payload:r})}},
$S:83}
A.fZ.prototype={$ibQ:1}
A.hr.prototype={$ibQ:1}
A.h7.prototype={$ibQ:1}
A.h4.prototype={$ibQ:1}
A.am.prototype={
aB(){return"SyncWorkerMessageType."+this.b}}
A.pH.prototype={
$1(a){var s,r,q,p,o
t.c.a(a)
s=t.k.b(a)?a:new A.ag(a,A.a8(a).h("ag<1,j>"))
r=J.a4(s)
q=r.gk(s)===2
if(q){p=r.i(s,0)
o=r.i(s,1)}else{p=null
o=null}if(!q)throw A.b(A.E("Pattern matching error"))
return new A.kg(p,o)},
$S:84}
A.jF.prototype={
kZ(a,b,c,d,e){var s=this,r=s.x
r.start()
s.r=null
s.f=A.aD(r,"message",new A.qi(s),!1,t.m)},
c1(a,b){return this.mk(a,b)},
mk(a,b){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$c1=A.d(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
g=b.$0()
s=6
return A.c(t.nK.b(g)?g:A.bP(g,t.iu),$async$c1)
case 6:l=d
n=l.a
m=l.b
k={type:"okResponse",payload:{requestId:a,payload:n}}
g=o.x
if(m!=null)g.postMessage(k,m)
else g.postMessage(k)
q=1
s=5
break
case 3:q=2
e=p.pop()
j=A.I(e)
i=null
h=j
A:{if(h instanceof A.cs){i=1
break A}i=0
break A}o.x.postMessage({type:"errorResponse",payload:{requestId:a,recognizedType:i,errorMessage:J.aW(j)}})
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$c1,r)},
dR(){var s,r,q=this
if(q.d||(q.b.a.a&30)!==0)throw A.b(A.E("Channel has error, cannot send new requests"))
s=q.c++
r=new A.l($.m,t.ny)
q.a.m(0,s,new A.O(r,t.gW))
return new A.a3(s,r)},
cX(a){var s=this.dR()
this.x.postMessage({type:a.b,payload:s.a})
return s.b},
eq(){var s=0,r=A.i(t.H),q=this
var $async$eq=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=2
return A.c(q.cX(B.aj),$async$eq)
case 2:return A.f(null,r)}})
return A.h($async$eq,r)},
ev(){var s=0,r=A.i(t.m),q,p=this,o
var $async$ev=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.c(p.cX(B.ak),$async$ev)
case 3:q=o.T(b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ev,r)},
e8(){var s=0,r=A.i(t.B),q,p=this,o,n
var $async$e8=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=A
s=3
return A.c(p.cX(B.an),$async$e8)
case 3:o=n.vR(b)
q=o==null?null:A.xb(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$e8,r)},
eh(){var s=0,r=A.i(t.B),q,p=this,o,n
var $async$eh=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=A
s=3
return A.c(p.cX(B.am),$async$eh)
case 3:o=n.vR(b)
q=o==null?null:A.xb(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eh,r)},
ex(){var s=0,r=A.i(t.H),q=this
var $async$ex=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=2
return A.c(q.cX(B.al),$async$ex)
case 2:return A.f(null,r)}})
return A.h($async$ex,r)},
e9(a,b){return this.n5(a,b)},
n5(a,b){var s=0,r=A.i(t.T),q,p=this,o,n,m
var $async$e9=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.dR()
p.x.postMessage({type:"customCheckpointRequest",payload:{req:n.a,clientId:a,requestId:b}})
m=A
s=3
return A.c(n.b,$async$e9)
case 3:o=m.kJ(d)
q=o==null?null:o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$e9,r)},
dI(a){return this.ky(a)},
ky(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dI=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.dR()
a.r=o.a
p.x.postMessage({type:"sendHttpRequest",payload:a},[a.b])
n=A
s=3
return A.c(o.b,$async$dI)
case 3:q=n.T(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dI,r)},
er(a){return this.oG(a)},
oG(a){var s=0,r=A.i(t.aC),q,p=this,o,n
var $async$er=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.dR()
p.x.postMessage({type:"readResponseChunk",payload:{r:o.a,i:a}})
n=t.aC
s=3
return A.c(o.b,$async$er)
case 3:q=n.a(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$er,r)},
n(){var s=0,r=A.i(t.H),q=this,p,o
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=q.b
if((o.a.a&30)===0){p=q.f
if(p!=null)p.u()
q.x.close()
p=q.as
if(p!=null)p.pP()
for(p=q.a,p=new A.bd(p,p.r,p.e);p.l();)p.d.a8(B.ay)
o.N()}return A.f(null,r)}})
return A.h($async$n,r)}}
A.qi.prototype={
$1(a){return this.kd(a)},
kd(a){var s=0,r=A.i(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)A:switch(s){case 0:j=A.T(a.data)
i=A.ij(B.bj,j.type)
h=p.a
g=h.Q
g.Y(B.t,"[in] "+i.j(0),null,null)
switch(i.a){case 0:q=h.c1(A.R(A.bS(j.payload)),new A.qe())
s=1
break A
case 1:o=A.T(j.payload).requestId
break
case 2:o=A.T(j.payload).requestId
break
case 4:case 3:case 9:case 8:case 5:case 7:o=A.R(A.bS(j.payload))
break
case 6:o=A.R(A.T(j.payload).req)
break
case 12:n=A.T(j.payload)
q=h.c1(n.r,new A.qf(h,n))
s=1
break A
case 13:m=A.T(j.payload)
g=m.i
l=m.r
g=h.as.b.I(0,g)
if(g!=null)g.iR(l)
s=1
break A
case 14:n=A.T(j.payload)
q=h.c1(n.r,new A.qg(h,n))
s=1
break A
case 15:m=A.T(j.payload)
h.a.I(0,m.requestId).X(m.payload)
s=1
break A
case 16:m=A.T(j.payload)
k=m.recognizedType
B:{if(1===(k==null?0:k)){g=new A.cs("Request aborted by `abortTrigger`",null)
break B}g=m.errorMessage
break B}h.a.I(0,m.requestId).a8(g)
s=1
break A
case 10:h.z.q(0,new A.a3(i,j.payload))
s=1
break A
case 11:g.Y(B.l,"[Sync Worker]: "+A.an(j.payload),null,null)
s=1
break A
default:o=null}s=3
return A.c(h.c1(o,new A.qh(h,i,j)),$async$$1)
case 3:case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:86}
A.qe.prototype={
$0(){var s=0,r=A.i(t.lg),q
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q=B.ad
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:87}
A.qf.prototype={
$0(){var s=0,r=A.i(t.iS),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.c(p.a.as.pQ(p.b),$async$$0)
case 3:q=new o.a3(b,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:88}
A.qg.prototype={
$0(){var s=0,r=A.i(t.jc),q,p=this,o,n
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=3
return A.c(p.a.as.pR(p.b.i),$async$$0)
case 3:n=b
A:{if(n==null){o=B.ad
break A}o=new A.a3(n,[n])
break A}q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:89}
A.qh.prototype={
$0(){return this.a.y.$2(this.b,this.c.payload)},
$S:90}
A.i8.prototype={
j(a){return"Worker communication channel closed"},
$iQ:1}
A.uG.prototype={
$1(a){var s=A.T(a.data)
if(s.isForSyncWorker)A.A5(A.T(s.message),this.a)
else this.b.q(0,new v.G.MessageEvent("message",{data:s.message}))},
$S:2}
A.uH.prototype={
$1(a){a.start()
A.aD(a,"message",this.a,!1,t.m)},
$S:2}
A.uF.prototype={
$1(a){var s,r=a.ports
r=J.U(t.ip.b(r)?r:new A.ag(r,A.a8(r).h("ag<1,u>")))
s=this.a
while(r.l())s.$1(r.gp())},
$S:2}
A.rq.prototype={
n(){if($.zu())v.G.close()},
gn1(){return this.a},
go9(){return this.b}}
A.nW.prototype={}
A.nY.prototype={
eL(){return this.a.eL()}}
A.os.prototype={
gk(a){return this.c.length},
goh(){return this.b.length},
kU(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.C(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
cM(a){var s,r=this
if(a<0)throw A.b(A.ay("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.ay("Offset "+a+u.D+r.gk(0)+"."))
s=r.b
if(a<B.d.gae(s))return-1
if(a>=B.d.gaO(s))return s.length-1
if(r.lL(a)){s=r.d
s.toString
return s}return r.d=r.lb(a)-1},
lL(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
lb(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.T(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
eJ(a){var s,r,q=this
if(a<0)throw A.b(A.ay("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.ay("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gk(0)+"."))
s=q.cM(a)
r=q.b[s]
if(r>a)throw A.b(A.ay("Line "+s+" comes after offset "+a+"."))
return a-r},
dG(a){var s,r,q,p
if(a<0)throw A.b(A.ay("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.ay("Line "+a+" must be less than the number of lines in the file, "+this.goh()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.ay("Line "+a+" doesn't have 0 columns."))
return q}}
A.is.prototype={
gL(){return this.a.a},
gW(){return this.a.cM(this.b)},
ga5(){return this.a.eJ(this.b)},
ga6(){return this.b}}
A.ev.prototype={
gL(){return this.a.a},
gk(a){return this.c-this.b},
gF(){return A.vb(this.a,this.b)},
gC(){return A.vb(this.a,this.c)},
gaf(){return A.bM(B.M.bR(this.a.c,this.b,this.c),0,null)},
gaF(){var s=this,r=s.a,q=s.c,p=r.cM(q)
if(r.eJ(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.bM(B.M.bR(r.c,r.dG(p),r.dG(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dG(p+1)
return A.bM(B.M.bR(r.c,r.dG(r.cM(s.b)),q),0,null)},
a_(a,b){var s
if(!(b instanceof A.ev))return this.kJ(0,b)
s=B.b.a_(this.b,b.b)
return s===0?B.b.a_(this.c,b.c):s},
D(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.ev))return s.kI(0,b)
return s.b===b.b&&s.c===b.c&&J.z(s.a.a,b.a.a)},
gv(a){return A.bH(this.b,this.c,this.a.a,B.c,B.c,B.c,B.c,B.c,B.c,B.c)},
$ic3:1}
A.n1.prototype={
o7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.iO(B.d.gae(a1).c)
s=a.e
r=A.b2(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.z(m.c,l)){a.dZ("\u2575")
q.a+="\n"
a.iO(l)}else if(m.b+1!==n.b){a.mK("...")
q.a+="\n"}}for(l=n.d,k=A.a8(l).h("d9<1>"),j=new A.d9(l,k),j=new A.ar(j,j.gk(0),k.h("ar<X.E>")),k=k.h("X.E"),i=n.b,h=n.a;j.l();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gF().gW()!==f.gC().gW()&&f.gF().gW()===i&&a.lM(B.a.t(h,0,f.gF().ga5()))){e=B.d.cA(r,a0)
if(e<0)A.w(A.K(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.mJ(i)
q.a+=" "
a.mI(n,r)
if(s)q.a+=" "
d=B.d.oa(l,new A.nm())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gF().gW()===i?j.gF().ga5():0
a.mG(h,g,j.gC().gW()===i?j.gC().ga5():h.length,p)}else a.e0(h)
q.a+="\n"
if(k)a.mH(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.dZ("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
iO(a){var s,r,q=this
if(!q.f||!t.R.b(a))q.dZ("\u2577")
else{q.dZ("\u250c")
q.aJ(new A.n9(q),"\x1b[34m")
s=q.r
r=" "+$.wj().jC(a)
s.a+=r}q.r.a+="\n"},
dX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gF().gW()
i=k?null:l.a.gC().gW()
if(s&&l===c){h.aJ(new A.ng(h,j,a),r)
n=!0}else if(n)h.aJ(new A.nh(h,l),r)
else if(k)if(g.a)h.aJ(new A.ni(h),g.b)
else o.a+=" "
else h.aJ(new A.nj(g,h,c,j,a,l,i),p)}},
mI(a,b){return this.dX(a,b,null)},
mG(a,b,c,d){var s=this
s.e0(B.a.t(a,0,b))
s.aJ(new A.na(s,a,b,c),d)
s.e0(B.a.t(a,c,a.length))},
mH(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gF().gW()===p.gC().gW()){r.fC()
p=r.r
p.a+=" "
r.dX(a,c,b)
if(c.length!==0)p.a+=" "
r.iP(b,c,r.aJ(new A.nb(r,a,b),q))}else{s=a.b
if(p.gF().gW()===s){if(B.d.U(c,b))return
A.EI(c,b)
r.fC()
p=r.r
p.a+=" "
r.dX(a,c,b)
r.aJ(new A.nc(r,a,b),q)
p.a+="\n"}else if(p.gC().gW()===s){p=p.gC().ga5()
if(p===a.a.length){A.yZ(c,b)
return}r.fC()
r.r.a+=" "
r.dX(a,c,b)
r.iP(b,c,r.aJ(new A.nd(r,!1,a,b),q))
A.yZ(c,b)}}},
iN(a,b,c){var s=c?0:1,r=this.r
s=B.a.aI("\u2500",1+b+this.f2(B.a.t(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
mF(a,b){return this.iN(a,b,!0)},
iP(a,b,c){this.r.a+="\n"
return},
e0(a){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.ar(s,s.gk(0),r.h("ar<A.E>")),q=this.r,r=r.h("A.E");s.l();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aI(" ",4)
else{p=A.aR(p)
q.a+=p}}},
e_(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.j(b+1)
this.aJ(new A.nk(s,this,a),"\x1b[34m")},
dZ(a){return this.e_(a,null,null)},
mK(a){return this.e_(null,null,a)},
mJ(a){return this.e_(null,a,null)},
fC(){return this.e_(null,null,null)},
f2(a){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.ar(s,s.gk(0),r.h("ar<A.E>")),r=r.h("A.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
lM(a){var s,r,q
for(s=new A.br(a),r=t.V,s=new A.ar(s,s.gk(0),r.h("ar<A.E>")),r=r.h("A.E");s.l();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
lg(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
aJ(a,b){return this.lg(a,b,t.z)}}
A.nl.prototype={
$0(){return this.a},
$S:92}
A.n3.prototype={
$1(a){var s=a.d
return new A.c8(s,new A.n2(),A.a8(s).h("c8<1>")).gk(0)},
$S:93}
A.n2.prototype={
$1(a){var s=a.a
return s.gF().gW()!==s.gC().gW()},
$S:22}
A.n4.prototype={
$1(a){return a.c},
$S:95}
A.n6.prototype={
$1(a){var s=a.a.gL()
return s==null?new A.k():s},
$S:96}
A.n7.prototype={
$2(a,b){return a.a.a_(0,b.a)},
$S:97}
A.n8.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.v([],t.dg)
for(s=J.bD(c),r=s.gA(c),q=t.g7;r.l();){p=r.gp().a
o=p.gaF()
n=A.uu(o,p.gaf(),p.gF().ga5())
n.toString
m=B.a.e3("\n",B.a.t(o,0,n)).gk(0)
l=p.gF().gW()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.d.gaO(b).b)b.push(new A.bA(j,l,d,A.v([],q)));++l}}i=A.v([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.a5)(b),++k){j=b[k]
h&1&&A.C(i,16)
B.d.me(i,new A.n5(j),!0)
f=i.length
for(q=s.aS(c,g),p=q.$ti,q=new A.ar(q,q.gk(0),p.h("ar<X.E>")),n=j.b,p=p.h("X.E");q.l();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gF().gW()>n)break
i.push(e)}g+=i.length-f
B.d.ac(j.d,i)}return b},
$S:98}
A.n5.prototype={
$1(a){return a.a.gC().gW()<this.a.b},
$S:22}
A.nm.prototype={
$1(a){return!0},
$S:22}
A.n9.prototype={
$0(){this.a.r.a+=B.a.aI("\u2500",2)+">"
return null},
$S:0}
A.ng.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:1}
A.nh.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:1}
A.ni.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.nj.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aJ(new A.ne(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gC().ga5()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aJ(new A.nf(r,o),p.b)}}},
$S:1}
A.ne.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:1}
A.nf.prototype={
$0(){this.a.r.a+=this.b},
$S:1}
A.na.prototype={
$0(){var s=this
return s.a.e0(B.a.t(s.b,s.c,s.d))},
$S:0}
A.nb.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gF().ga5(),l=n.gC().ga5()
n=this.b.a
s=q.f2(B.a.t(n,0,m))
r=q.f2(B.a.t(n,m,l))
m+=s*3
n=(p.a+=B.a.aI(" ",m))+B.a.aI("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:29}
A.nc.prototype={
$0(){return this.a.mF(this.b,this.c.a.gF().ga5())},
$S:0}
A.nd.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aI("\u2500",3)
else r.iN(s.c,Math.max(s.d.a.gC().ga5()-1,0),!1)
return q.a.length-p.length},
$S:29}
A.nk.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.oC(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:1}
A.aP.prototype={
j(a){var s=this.a
s="primary "+(""+s.gF().gW()+":"+s.gF().ga5()+"-"+s.gC().gW()+":"+s.gC().ga5())
return s.charCodeAt(0)==0?s:s}}
A.rN.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.uu(o.gaF(),o.gaf(),o.gF().ga5())!=null)){s=A.jc(o.gF().ga6(),0,0,o.gL())
r=o.gC().ga6()
q=o.gL()
p=A.E9(o.gaf(),10)
o=A.ot(s,A.jc(r,A.xG(o.gaf()),p,q),o.gaf(),o.gaf())}return A.BW(A.BY(A.BX(o)))},
$S:100}
A.bA.prototype={
j(a){return""+this.b+': "'+this.a+'" ('+B.d.bI(this.d,", ")+")"}}
A.bx.prototype={
fN(a){var s=this.a
if(!J.z(s,a.gL()))throw A.b(A.K('Source URLs "'+A.q(s)+'" and "'+A.q(a.gL())+"\" don't match.",null))
return Math.abs(this.b-a.ga6())},
a_(a,b){var s=this.a
if(!J.z(s,b.gL()))throw A.b(A.K('Source URLs "'+A.q(s)+'" and "'+A.q(b.gL())+"\" don't match.",null))
return this.b-b.ga6()},
D(a,b){if(b==null)return!1
return t.hq.b(b)&&J.z(this.a,b.gL())&&this.b===b.ga6()},
gv(a){var s=this.a
s=s==null?null:s.gv(s)
if(s==null)s=0
return s+this.b},
j(a){var s=this,r=A.uy(s).j(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$ia9:1,
gL(){return this.a},
ga6(){return this.b},
gW(){return this.c},
ga5(){return this.d}}
A.jd.prototype={
fN(a){if(!J.z(this.a.a,a.gL()))throw A.b(A.K('Source URLs "'+A.q(this.gL())+'" and "'+A.q(a.gL())+"\" don't match.",null))
return Math.abs(this.b-a.ga6())},
a_(a,b){if(!J.z(this.a.a,b.gL()))throw A.b(A.K('Source URLs "'+A.q(this.gL())+'" and "'+A.q(b.gL())+"\" don't match.",null))
return this.b-b.ga6()},
D(a,b){if(b==null)return!1
return t.hq.b(b)&&J.z(this.a.a,b.gL())&&this.b===b.ga6()},
gv(a){var s=this.a.a
s=s==null?null:s.gv(s)
if(s==null)s=0
return s+this.b},
j(a){var s=A.uy(this).j(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.cM(r)+1)+":"+(q.eJ(r)+1))+">"},
$ia9:1,
$ibx:1}
A.jf.prototype={
kV(a,b,c){var s,r=this.b,q=this.a
if(!J.z(r.gL(),q.gL()))throw A.b(A.K('Source URLs "'+A.q(q.gL())+'" and  "'+A.q(r.gL())+"\" don't match.",null))
else if(r.ga6()<q.ga6())throw A.b(A.K("End "+r.j(0)+" must come after start "+q.j(0)+".",null))
else{s=this.c
if(s.length!==q.fN(r))throw A.b(A.K('Text "'+s+'" must be '+q.fN(r)+" characters long.",null))}},
gF(){return this.a},
gC(){return this.b},
gaf(){return this.c}}
A.jg.prototype={
gjv(){return this.a},
j(a){var s,r,q,p=this.b,o="line "+(p.gF().gW()+1)+", column "+(p.gF().ga5()+1)
if(p.gL()!=null){s=p.gL()
r=$.wj()
s.toString
s=o+(" of "+r.jC(s))
o=s}o+=": "+this.a
q=p.o8(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iQ:1}
A.e9.prototype={
ga6(){var s=this.b
s=A.vb(s.a,s.b)
return s.b},
$iaT:1,
gdJ(){return this.c}}
A.ea.prototype={
gL(){return this.gF().gL()},
gk(a){return this.gC().ga6()-this.gF().ga6()},
a_(a,b){var s=this.gF().a_(0,b.gF())
return s===0?this.gC().a_(0,b.gC()):s},
o8(a){var s=this
if(!t.ol.b(s)&&s.gk(s)===0)return""
return A.Ao(s,a).o7()},
D(a,b){if(b==null)return!1
return b instanceof A.ea&&this.gF().D(0,b.gF())&&this.gC().D(0,b.gC())},
gv(a){return A.bH(this.gF(),this.gC(),B.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)},
j(a){var s=this
return"<"+A.uy(s).j(0)+": from "+s.gF().j(0)+" to "+s.gC().j(0)+' "'+s.gaf()+'">'},
$ia9:1}
A.c3.prototype={
gaF(){return this.d}}
A.eb.prototype={
aB(){return"SqliteUpdateKind."+this.b}}
A.b5.prototype={
gv(a){return A.bH(this.a,this.b,this.c,B.c,B.c,B.c,B.c,B.c,B.c,B.c)},
D(a,b){if(b==null)return!1
return b instanceof A.b5&&b.a===this.a&&b.b===this.b&&b.c===this.c},
j(a){return"SqliteUpdate: "+this.a.j(0)+" on "+this.b+", rowid = "+this.c}}
A.db.prototype={
j(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.q(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.dG(p,new A.oy(),t.N).bI(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iQ:1}
A.oy.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.aW(a)},
$S:54}
A.mn.prototype={
iM(){var s=this,r=s.d
return r==null?s.d=new A.cE(s,A.v([],t.fU),new A.mw(s),new A.mx(s),t.jy):r},
mm(){var s=this,r=s.e
return r==null?s.e=new A.cE(s,A.v([],t.lw),new A.mt(s),new A.mu(s),t.lU):r},
f0(){var s=this,r=s.f
return r==null?s.f=new A.cE(s,A.v([],t.lw),new A.mp(s),new A.mq(s),t.af):r},
n(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.n()
s=p.f
if(s!=null)s.n()
s=p.e
if(s!=null)s.n()
s=p.b
r=s.hr()
q=r!==0?A.w3(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aW(a,b){var s,r,q
if(this.r)A.w(A.E("This database has already been closed"))
s=this.b
r=s.a
q=r.d7(B.n.ap(a),1)
r=r.d
s=A.yI(r,"sqlite3_exec",[s.b,q,0,0,0])
r.dart_sqlite3_free(q)
if(s!==0)A.wb(this,s,"executing",a,b)},
m6(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.w(A.E("This database has already been closed"))
s=B.n.ap(a)
r=e.b
q=r.a
p=q.fF(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.pZ(r,p,n,o)
l=A.v([],t.lE)
k=new A.mr(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.hs(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.wb(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.T(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.a1(o,2)]-p
f=i.a
if(f!=null)l.push(new A.ec(f,e,new A.cH(!1).cU(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.hs(j,r-j,0)
n=q.buffer
h=B.b.T(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.a1(o,2)]-p
f=i.a
if(f!=null){l.push(new A.ec(f,e,""))
k.$0()
throw A.b(A.aX(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aX(a,"sql","Has trailing data after the first sql statement:"))}}m.n()
return l},
jB(a,b){var s=this.m6(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aX(a,"sql","Must contain an SQL statement."))
return B.d.gae(s)},
oF(a){return this.jB(a,!1)}}
A.mw.prototype={
$0(){var s=this.a,r=s.b
r.a.j7(r.b,new A.mv(s))},
$S:0}
A.mv.prototype={
$3(a,b,c){var s=A.Bf(a)
if(s==null)return
this.a.d.fM(new A.b5(s,b,c))},
$S:102}
A.mx.prototype={
$0(){var s=this.a.b
s.a.j7(s.b,null)
return null},
$S:0}
A.mt.prototype={
$0(){var s=this.a,r=s.b
r.a.j6(r.b,new A.ms(s))
return null},
$S:0}
A.ms.prototype={
$0(){this.a.e.fM(null)},
$S:0}
A.mu.prototype={
$0(){var s=this.a.b
s.a.j6(s.b,null)
return null},
$S:0}
A.mp.prototype={
$0(){var s=this.a,r=s.b
r.a.j5(r.b,new A.mo(s))
return null},
$S:0}
A.mo.prototype={
$0(){var s=this.a.f
s.fM(null)
return 0},
$S:29}
A.mq.prototype={
$0(){var s=this.a.b
s.a.j5(s.b,null)
return null},
$S:0}
A.mr.prototype={
$0(){var s,r,q,p,o,n
this.a.n()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q){p=s[q]
if(!p.r){p.r=!0
if(!p.f){o=p.a
o.c.d.sqlite3_reset(o.b)
p.f=!0}o=p.a
n=o.c
n.d.sqlite3_finalize(o.b)
n=n.w
if(n!=null){n=n.a
if(n!=null)n.unregister(o.d)}}}},
$S:0}
A.cE.prototype={
gbA(){var s=this.r
return s==null?this.r=this.i1(!1):s},
i1(a){return new A.bB(!0,new A.tq(this,a),this.$ti.h("bB<1>"))},
fM(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.w(o.am())
if((n&1)!==0){m=o.a;((n&8)!==0?m.c:m).M(a)}}else{n=o.b
if(n>=4)A.w(o.am())
if((n&1)!==0)o.an(a)
else if((n&3)===0){o=o.bW()
n=new A.bz(a)
l=o.c
if(l==null)o.b=o.c=n
else{l.sbp(n)
o.c=n}}}}},
n(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q)s[q].a.n()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.tq.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.n()
return}s=this.b
r=new A.tr(q,a,s)
a.r=a.e=new A.ts(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.h("~(c_<1>)")}}
A.tr.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.hq(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.ts.prototype={
$0(){var s=this.a,r=s.c
B.d.I(r,new A.hq(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.ou.prototype={
jp(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.jk(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
oy(a,b){var s,r,q,p,o,n,m,l,k,j
this.jp()
switch(2){case 2:break}s=this.a
r=s.a
q=r.d7(B.n.ap(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.d7(B.n.ap(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.c0(r.b.buffer,0,null)[B.b.a1(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.pS(r,l,o)
r=r.r
if(r!=null)r.iV(k,l,o)
if(m!==0){j=A.w3(s,k,m,"opening the database",null,null)
k.hr()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.mn(s,k,!1)}}
A.ec.prototype={
bu(a,b){A.wb(this.b,a,b,this.d,this.e)},
hX(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dv()
if(s!==0?s!==101:q)r.bu(s,"executing statement")},
lc(a){var s=this.a
s=s.c.d.sqlite3_bind_parameter_count(s.b)
if(0!==s)A.w(A.aX(a,"parameters","Expected "+A.q(s)+" parameters, got 0"))
return},
hE(a){A:{if(a instanceof A.nq){this.lc(a.a)
break A}if(a instanceof A.f7)a.a.$1(this)}},
dv(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
n(){var s,r,q=this
if(!q.r){q.r=!0
q.dv()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.j9(s.d)}},
nG(a){var s=this
if(s.r||s.b.r)A.w(A.E(u.f))
s.dv()
s.hE(a)
s.hX()}}
A.iu.prototype={
eD(a,b){return this.d.H(a)?1:0},
hk(a,b){this.d.I(0,a)},
hl(a){return new v.G.URL(a,"file:///").pathname},
cc(a,b){var s,r=a.a
if(r==null)r=A.wK(this.b,"/")
s=this.d
if(!s.H(r))if((b&4)!==0)s.m(0,r,new A.bg(new Uint8Array(0),0))
else throw A.b(A.eg(14))
return new A.eD(new A.k2(this,r,(b&8)!==0),0)},
hn(a){}}
A.k2.prototype={
jE(a,b){var s,r=this.a.d.i(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.P(a,0,s,J.cN(B.f.gao(r.a),0,r.b),b)
return s},
hj(){return this.d>=2?1:0},
eE(){if(this.c)this.a.d.I(0,this.b)},
dD(){return this.a.d.i(0,this.b).b},
hm(a){this.d=a},
ho(a){},
dE(a){var s=this.a.d,r=this.b,q=s.i(0,r)
if(q==null){s.m(0,r,new A.bg(new Uint8Array(0),0))
s.i(0,r).sk(0,a)}else q.sk(0,a)},
hp(a){this.d=a},
cL(a,b){var s,r=this.a.d,q=this.b,p=r.i(0,q)
if(p==null){p=new A.bg(new Uint8Array(0),0)
r.m(0,q,p)}s=b+a.length
if(s>p.b)p.sk(0,s)
p.ai(0,b,s,a)}}
A.uR.prototype={
$1(a){return a.length!==0},
$S:26}
A.m5.prototype={
ld(){var s,r,q,p,o=A.a2(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q){p=s[q]
o.m(0,p,B.d.cD(s,p))}this.c=o}}
A.bJ.prototype={
gA(a){return new A.kn(this)},
i(a,b){return new A.aU(this,A.nG(this.d[b],t.X))},
m(a,b,c){throw A.b(A.S("Can't change rows from a result set"))},
gk(a){return this.d.length},
$ix:1,
$in:1,
$ir:1}
A.aU.prototype={
i(a,b){var s
if(typeof b!="string"){if(A.hH(b))return this.b[b]
return null}s=this.a.c.i(0,b)
if(s==null)return null
return this.b[s]},
ga2(){return this.a.a},
$ia_:1}
A.kn.prototype={
gp(){var s=this.a
return new A.aU(s,A.nG(s.d[this.b],t.X))},
l(){return++this.b<this.a.d.length}}
A.ko.prototype={}
A.kp.prototype={}
A.kr.prototype={}
A.ks.prototype={}
A.nT.prototype={
aB(){return"OpenMode."+this.b}}
A.cV.prototype={}
A.nq.prototype={}
A.f7.prototype={}
A.c7.prototype={
j(a){return"VfsException("+this.a+")"},
$iQ:1}
A.fH.prototype={}
A.aC.prototype={}
A.i2.prototype={}
A.i1.prototype={
geF(){return 0},
jQ(a,b){return 12},
geH(){return 4096},
eG(a,b){var s=this.jE(a,b),r=a.length
if(s<r){B.f.fQ(a,s,r,0)
throw A.b(B.bW)}},
$iaO:1,
$ifW:1}
A.dk.prototype={}
A.uZ.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.w(A.E("No such element"))
r=s.c
q=r.a
q.toString
q.fz(A.p(r).h("aI.E").a(r))
r.d.$0()}},
$S:0}
A.uX.prototype={
$1(a){var s=this.a,r=s.b
s.dQ(s.c,new A.dk(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:12}
A.uY.prototype={
$4(a,b,c,d){this.a.$1(c.d8(d))},
$S:104}
A.pX.prototype={}
A.pS.prototype={
hr(){var s=this.a,r=s.r
if(r!=null)r.j9(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.pZ.prototype={
n(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
hs(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.yI(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.c0(o.b.buffer,0,null)[B.b.a1(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.pY(s,o,n)
o=o.w
if(o!=null)o.iV(r,s,n)}return new A.kh(r,p)}}
A.pY.prototype={}
A.dj.prototype={}
A.cy.prototype={}
A.ei.prototype={
sk(a,b){throw A.b(A.S("Setting length in WasmValueList"))},
i(a,b){A.c0(this.a.b.buffer,0,null)
B.b.a1(this.c+b*4,2)
return new A.cy()},
m(a,b,c){throw A.b(A.S("Setting element in WasmValueList"))},
gk(a){return this.b}}
A.id.prototype={
os(a){var s=this.b
s===$&&A.M()
A.uU("[sqlite3] "+A.ek(s,a))},
on(a,b){var s,r,q,p=A.R(v.G.Number(a))*1000
if(p<-864e13||p>864e13)A.w(A.ac(p,-864e13,864e13,"millisecondsSinceEpoch",null))
A.bb(!1,"isUtc",t.y)
s=new A.bc(p,0,!1)
r=this.b
r===$&&A.M()
q=A.AP(r.buffer,b,8)
q.$flags&2&&A.C(q)
q[0]=A.x5(s)
q[1]=A.x3(s)
q[2]=A.x2(s)
q[3]=A.x1(s)
q[4]=A.x4(s)-1
q[5]=A.x6(s)-1900
q[6]=B.b.aR(A.AW(s),7)},
ps(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.M()
s=new A.fH(A.vx(j,b,k))
try{r=a.cc(s,d)
if(e!==0){p=r.b
o=A.c0(j.buffer,0,k)
n=B.b.a1(e,2)
o.$flags&2&&A.C(o)
o[n]=p}p=A.c0(j.buffer,0,k)
o=B.b.a1(c,2)
p.$flags&2&&A.C(p)
p[o]=0
m=r.a
return m}catch(l){p=A.I(l)
if(p instanceof A.c7){q=p
p=q.a
j=A.c0(j.buffer,0,k)
o=B.b.a1(c,2)
j.$flags&2&&A.C(j)
j[o]=p}else{j=j.buffer
j=A.c0(j,0,k)
p=B.b.a1(c,2)
j.$flags&2&&A.C(j)
j[p]=1}}return k},
ph(a,b,c){var s=this.b
s===$&&A.M()
return A.ba(new A.ma(a,A.ek(s,b),c))},
p9(a,b,c,d){var s=this.b
s===$&&A.M()
return A.ba(new A.m7(this,a,A.ek(s,b),c,d))},
po(a,b,c,d){var s=this.b
s===$&&A.M()
return A.ba(new A.mc(this,a,A.ek(s,b),c,d))},
pu(a,b,c){return A.ba(new A.me(this,c,b,a))},
pz(a,b){return A.ba(new A.mg(a,b))},
pf(a,b){var s,r=Date.now(),q=this.b
q===$&&A.M()
s=v.G.BigInt(r)
A.vf(A.AN(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
pd(a){return A.ba(new A.m9(a))},
pw(a,b,c,d){return A.ba(new A.mf(this,a,b,c,d))},
pH(a,b,c,d){return A.ba(new A.mk(this,a,b,c,d))},
pD(a,b){return A.ba(new A.mi(a,b))},
pB(a,b){return A.ba(new A.mh(a,b))},
pm(a,b){return A.ba(new A.mb(this,a,b))},
pq(a,b){return A.ba(new A.md(a,b))},
pF(a,b){return A.ba(new A.mj(a,b))},
pb(a,b){return A.ba(new A.m8(this,a,b))},
pi(a){return a.geF()},
pk(a,b,c){if(t.j2.b(a))return a.jQ(b,c)
return 12},
px(a){if(t.j2.b(a))return a.geH()
return 4096},
nl(a){a.$0()},
ng(a){return a.$0()},
nj(a,b,c,d,e){var s=this.b
s===$&&A.M()
a.$3(b,A.ek(s,d),A.R(v.G.Number(e)))},
nr(a,b,c,d){var s=a.gpT(),r=this.a
r===$&&A.M()
s.$2(new A.dj(),new A.ei(r,c,d))},
nv(a,b,c,d){var s=a.gpV(),r=this.a
r===$&&A.M()
s.$2(new A.dj(),new A.ei(r,c,d))},
nt(a,b,c,d){var s=a.gpU(),r=this.a
r===$&&A.M()
s.$2(new A.dj(),new A.ei(r,c,d))},
nx(a,b){var s=a.gpW()
this.a===$&&A.M()
s.$1(new A.dj())},
np(a,b){var s=a.gpS()
this.a===$&&A.M()
s.$1(new A.dj())},
nn(a,b,c,d,e){var s,r,q=this.b
q===$&&A.M()
s=A.vx(q,c,b)
r=A.vx(q,e,d)
return a.gpL().$2(s,r)},
ne(a,b){return a.$1(b)},
nc(a,b){return a.gpN().$1(b)},
na(a,b,c){return a.gpM().$2(b,c)}}
A.ma.prototype={
$0(){return this.a.hk(this.b,this.c)},
$S:0}
A.m7.prototype={
$0(){var s,r=this,q=r.b.eD(r.c,r.d),p=r.a.b
p===$&&A.M()
p=A.c0(p.buffer,0,null)
s=B.b.a1(r.e,2)
p.$flags&2&&A.C(p)
p[s]=q},
$S:0}
A.mc.prototype={
$0(){var s,r,q=this,p=B.n.ap(q.b.hl(q.c)),o=p.length
if(o>q.d)throw A.b(A.eg(14))
s=q.a.b
s===$&&A.M()
s=A.b4(s.buffer,0,null)
r=q.e
B.f.cg(s,r,p)
s.$flags&2&&A.C(s)
s[r+o]=0},
$S:0}
A.me.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.M()
s=A.b4(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.ws(s,q.b)
else return A.ws(s,null)},
$S:0}
A.mg.prototype={
$0(){this.a.hn(A.mH(this.b,0))},
$S:0}
A.m9.prototype={
$0(){return this.a.eE()},
$S:0}
A.mf.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.M()
s.b.eG(A.b4(r.buffer,s.c,s.d),A.R(v.G.Number(s.e)))},
$S:0}
A.mk.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.M()
s.b.cL(A.b4(r.buffer,s.c,s.d),A.R(v.G.Number(s.e)))},
$S:0}
A.mi.prototype={
$0(){return this.a.dE(A.R(v.G.Number(this.b)))},
$S:0}
A.mh.prototype={
$0(){return this.a.ho(this.b)},
$S:0}
A.mb.prototype={
$0(){var s,r=this.b.dD(),q=this.a.b
q===$&&A.M()
q=A.c0(q.buffer,0,null)
s=B.b.a1(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.md.prototype={
$0(){return this.a.hm(this.b)},
$S:0}
A.mj.prototype={
$0(){return this.a.hp(this.b)},
$S:0}
A.m8.prototype={
$0(){var s,r=this.b.hj(),q=this.a.b
q===$&&A.M()
q=A.c0(q.buffer,0,null)
s=B.b.a1(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.eY.prototype={
B(a,b,c,d){var s,r=null,q={},p=A.T(A.vf(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.bL(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.l5(q,this,p,o)
o.d=s
o.f=new A.l6(q,o,s)
return new A.a7(o,A.p(o).h("a7<1>")).B(a,b,c,d)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.l5.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.aq(q,t.m).b8(new A.l7(p,r.b,s,r),s.gfD(),t.P)},
$S:0}
A.l7.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.n()
q.a.a=null}else{r.q(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gag().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:14}
A.l6.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gag().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.dp.prototype={
u(){var s=0,r=A.i(t.H),q=this,p
var $async$u=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.u()
p=q.c
if(p!=null)p.u()
q.c=q.b=null
return A.f(null,r)}})
return A.h($async$u,r)},
gp(){var s=this.a
return s==null?A.w(A.E("Await moveNext() first")):s},
l(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.l($.m,t.x)
s=new A.O(o,t.ex)
r=p.d
q=t.m
p.b=A.aD(r,"success",new A.re(p,s),!1,q)
p.c=A.aD(r,"error",new A.rf(p,s),!1,q)
return o}}
A.re.prototype={
$1(a){var s,r=this.a
r.u()
s=r.$ti.h("1?").a(r.d.result)
r.a=s
this.b.X(s!=null)},
$S:2}
A.rf.prototype={
$1(a){var s=this.a
s.u()
s=s.d.error
if(s==null)s=a
this.b.a8(s)},
$S:2}
A.lO.prototype={
$1(a){this.a.X(this.c.a(this.b.result))},
$S:2}
A.lP.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.a8(s)},
$S:2}
A.lT.prototype={
$1(a){this.a.X(this.c.a(this.b.result))},
$S:2}
A.lU.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.a8(s)},
$S:2}
A.lV.prototype={
$1(a){this.a.a8(new A.b6("IndexedDB open blocked"))},
$S:2}
A.mL.prototype={
$1(a){return A.T(a[1])},
$S:188}
A.pT.prototype={
n3(){var s={}
s.dart=new A.pU(this).$0()
return s},
el(a){return this.oi(a)},
oi(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$el=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.aq(v.G.WebAssembly.instantiateStreaming(a,p.n3()),t.m),$async$el)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$el,r)}}
A.pU.prototype={
$0(){var s=this.a.a,r=A.T(v.G.Object),q=A.T(r.create.apply(r,[null]))
q.error_log=A.bC(s.gor())
q.localtime=A.b8(s.gom())
q.xOpen=A.vX(s.gpr())
q.xDelete=A.kM(s.gpg())
q.xAccess=A.eN(s.gp8())
q.xFullPathname=A.eN(s.gpn())
q.xRandomness=A.kM(s.gpt())
q.xSleep=A.b8(s.gpy())
q.xCurrentTimeInt64=A.b8(s.gpe())
q.xClose=A.bC(s.gpc())
q.xRead=A.eN(s.gpv())
q.xWrite=A.eN(s.gpG())
q.xTruncate=A.b8(s.gpC())
q.xSync=A.b8(s.gpA())
q.xFileSize=A.b8(s.gpl())
q.xLock=A.b8(s.gpp())
q.xUnlock=A.b8(s.gpE())
q.xCheckReservedLock=A.b8(s.gpa())
q.xDeviceCharacteristics=A.bC(s.geF())
q.xFileControl=A.kM(s.gpj())
q.xSectorSize=A.bC(s.geH())
q["dispatch_()v"]=A.bC(s.gnk())
q["dispatch_()i"]=A.bC(s.gnf())
q.dispatch_update=A.vX(s.gni())
q.dispatch_xFunc=A.eN(s.gnq())
q.dispatch_xStep=A.eN(s.gnu())
q.dispatch_xInverse=A.eN(s.gns())
q.dispatch_xValue=A.b8(s.gnw())
q.dispatch_xFinal=A.b8(s.gno())
q.dispatch_compare=A.vX(s.gnm())
q.dispatch_busy=A.b8(s.gnd())
q.changeset_apply_filter=A.b8(s.gnb())
q.changeset_apply_conflict=A.kM(s.gn9())
return q},
$S:18}
A.eh.prototype={}
A.lc.prototype={
eo(){var s=0,r=A.i(t.H),q=this,p,o
var $async$eo=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=new A.l($.m,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.bC(new A.lf(o))
new A.O(p,t.h1).X(A.A4(o,t.m))
s=2
return A.c(p,$async$eo)
case 2:q.a=b
return A.f(null,r)}})
return A.h($async$eo,r)},
cr(a,b){return this.mn(a,b)},
mn(a,b){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$cr=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.zD(),b)
o=A.BZ(p)
s=2
return A.c(A.EK(new A.le(a,o,p),t.mj),$async$cr)
case 2:s=3
return A.c(o.b.a,$async$cr)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.f(null,r)}})
return A.h($async$cr,r)},
m4(a){return this.cr(new A.ld(a),"readwrite")}}
A.lf.prototype={
$1(a){var s=A.T(this.a.result)
if(J.z(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:14}
A.le.prototype={
$0(){var s=0,r=A.i(t.P),q=1,p=[],o=this,n,m
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.c(o.a.$1(o.b),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
m=p.pop()
o.c.abort()
throw m
s=5
break
case 2:s=1
break
case 5:o.c.commit()
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:56}
A.ld.prototype={
$1(a){return this.jR(a)},
jR(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.c(p[n].ak(a),$async$$1)
case 5:case 3:p.length===o||(0,A.a5)(p),++n
s=2
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:20}
A.hd.prototype={
l1(a){var s=A.u_(new A.rQ(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.u_(new A.rR(this))},
fp(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.v([a,c],s),A.v([a,b],s))},
m8(a){return this.fp(a,9007199254740992,0)},
m9(a,b){return this.fp(a,9007199254740992,b)},
ek(){var s=0,r=A.i(t.dV),q,p=this,o,n,m,l,k
var $async$ek=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=A.a2(t.N,t.S)
k=new A.dp(p.d.index("fileName").openKeyCursor(),t.Q)
case 3:s=5
return A.c(k.l(),$async$ek)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.w(A.E("Await moveNext() first"))
n=o.key
n.toString
A.an(n)
m=o.primaryKey
m.toString
l.m(0,n,A.R(A.bS(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ek,r)},
ec(a){return this.nJ(a)},
nJ(a){var s=0,r=A.i(t.aV),q,p=this,o
var $async$ec=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.c(A.bE(p.d.index("fileName").getKey(a),t.i),$async$ec)
case 3:q=o.R(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ec,r)},
fq(a){return A.bE(this.d.get(a),t.A).aQ(new A.rP(a),t.m)},
cR(a,b){return this.kB(a,b)},
kB(a,b){var s=0,r=A.i(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cR=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.fq(a),$async$cR)
case 3:h=d
g=h.length
f=new A.bg(new Uint8Array(g),g)
e=new A.dp(p.e.openCursor(p.m8(a)),t.Q)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.c(e.l(),$async$cR)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.w(A.E("Await moveNext() first"))
k=n.a(l.key)
j=A.R(A.bS(k[1]))
if(j>=h.length){s=5
break}i=new A.rS(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.o8(A.T(l.value)).aQ(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cR,r)},
e7(a){return this.n2(a)},
n2(a){var s=0,r=A.i(t.S),q,p=this,o
var $async$e7=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.w(A.E("IDB transaction already completed"))
o=A
s=3
return A.c(A.bE(p.d.put({name:a,length:0}),t.i),$async$e7)
case 3:q=o.R(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$e7,r)},
cb(a,b){return this.p_(a,b)},
p_(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l
var $async$cb=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.E("IDB transaction already completed"))
s=2
return A.c(q.fq(a),$async$cb)
case 2:p=d
o=b.b
n=A.p(o).h("b1<1>")
m=A.as(new A.b1(o,n),n.h("n.E"))
B.d.kA(m)
s=3
return A.c(A.mW(new A.ab(m,new A.rT(new A.rU(q,a),b),A.a8(m).h("ab<1,o<~>>")),t.H),$async$cb)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.dp(q.d.openCursor(a),t.Q)
s=6
return A.c(l.l(),$async$cb)
case 6:s=7
return A.c(A.bE(l.gp().update({name:p.name,length:b.c}),t.X),$async$cb)
case 7:case 5:return A.f(null,r)}})
return A.h($async$cb,r)},
c9(a,b,c){return this.oT(0,b,c)},
oT(a,b,c){var s=0,r=A.i(t.H),q=this,p,o
var $async$c9=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.E("IDB transaction already completed"))
s=2
return A.c(q.fq(b),$async$c9)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.c(A.bE(q.e.delete(q.m9(b,B.b.T(c,4096)*4096)),t.X),$async$c9)
case 5:case 4:o=new A.dp(q.d.openCursor(b),t.Q)
s=6
return A.c(o.l(),$async$c9)
case 6:s=7
return A.c(A.bE(o.gp().update({name:p.name,length:c}),t.X),$async$c9)
case 7:return A.f(null,r)}})
return A.h($async$c9,r)},
ea(a){return this.n8(a)},
n8(a){var s=0,r=A.i(t.H),q=this,p
var $async$ea=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.E("IDB transaction already completed"))
p=t.X
s=2
return A.c(A.mW(A.v([A.bE(q.e.delete(q.fp(a,9007199254740992,0)),p),A.bE(q.d.delete(a),p)],t.iw),t.H),$async$ea)
case 2:return A.f(null,r)}})
return A.h($async$ea,r)}}
A.rQ.prototype={
$0(){this.a.b.N()},
$S:1}
A.rR.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.a8(r)},
$S:1}
A.rP.prototype={
$1(a){if(a==null)throw A.b(A.aX(this.a,"fileId","File not found in database"))
else return a},
$S:127}
A.rS.prototype={
$1(a){var s=this.a
s.cg(s,this.b,J.cN(a,0,this.c))},
$S:128}
A.rU.prototype={
kh(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.c(A.bE(p.openCursor(v.G.IDBKeyRange.only(A.v([o,a],n))),t.A),$async$$2)
case 2:m=d
l=t.a.a(B.f.gao(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.c(A.bE(p.put(l,A.v([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.c(A.bE(m.update(l),k),$async$$2)
case 7:case 4:return A.f(null,r)}})
return A.h($async$$2,r)},
$2(a,b){return this.kh(a,b)},
$S:129}
A.rT.prototype={
$1(a){var s=this.b.b.i(0,a)
s.toString
return this.a.$2(a,s)},
$S:130}
A.ru.prototype={
mC(a,b,c){B.f.cg(this.b.cG(a,new A.rv(this,a)),b,c)},
mU(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.T(q,4096)
o=B.b.aR(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.mC(p*4096,o,J.cN(B.f.gao(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.rv.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cg(s,0,J.cN(B.f.gao(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:131}
A.ka.prototype={}
A.cm.prototype={
d5(a){var s=this
if(s.e||s.d.a==null)A.w(A.eg(10))
if(a.fY(s.x)){s.bE(!0)
return a.d.a}else return A.mU(null,t.H)},
bE(a){return this.mv(a)},
mv(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$bE=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.as(o,o.$ti.h("n.E"))
o.aL(0)
s=5
return A.c(p.d.m4(n).J(new A.no(p,n,a)),$async$bE)
case 5:case 4:case 1:return A.f(q,r)}})
return A.h($async$bE,r)},
n(){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.d5(new A.hb(new A.np(),new A.O(new A.l($.m,t.D),t.F)))
p.e=!0
p.bE(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.gaO(0).d.a
s=1
break}}case 1:return A.f(q,r)}})
return A.h($async$n,r)},
cn(a,b){return this.lx(a,b)},
lx(a,b){var s=0,r=A.i(t.S),q,p=this,o,n
var $async$cn=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.H(b)?3:5
break
case 3:n=n.i(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.c(a.ec(b),$async$cn)
case 6:o=d
o.toString
n.m(0,b,o)
q=o
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$cn,r)},
d0(){var s=0,r=A.i(t.H),q=this,p
var $async$d0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=A.v([],t.iw)
s=2
return A.c(q.d.cr(new A.nn(q,p),"readonly"),$async$d0)
case 2:s=3
return A.c(A.Al(p,t.H),$async$d0)
case 3:return A.f(null,r)}})
return A.h($async$d0,r)},
nN(){return this.bE(!1)},
eD(a,b){return this.w.d.H(a)?1:0},
hk(a,b){var s=this
s.w.d.I(0,a)
if(!s.y.I(0,a))s.d5(new A.h6(s,a,new A.O(new A.l($.m,t.D),t.F)))},
hl(a){return new v.G.URL(a,"file:///").pathname},
cc(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.wK(p.b,"/")
s=p.w
r=s.d.H(o)?1:0
q=s.cc(new A.fH(o),b)
if(r===0)if((b&8)!==0)p.y.q(0,o)
else p.d5(new A.eq(p,o,new A.O(new A.l($.m,t.D),t.F)))
return new A.eD(new A.k3(p,q.a,o),0)},
hn(a){}}
A.no.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.w(A.E("Future already completed"))
p.bb(null)}o.bE(this.c)},
$S:1}
A.np.prototype={
$1(a){return this.jW(a)},
jW(a){var s=0,r=A.i(t.H)
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.f(null,r)}})
return A.h($async$$1,r)},
$S:20}
A.nn.prototype={
$1(a){return this.jV(a)},
jV(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.c(a.ek(),$async$$1)
case 2:m=c
l=q.a
l.z.ac(0,m)
p=m.gbj(),p=p.gA(p),o=q.b,l=l.w.d
case 3:if(!p.l()){s=4
break}n=p.gp()
k=l
j=n.a
s=5
return A.c(a.cR(n.b,o),$async$$1)
case 5:k.m(0,j,c)
s=3
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:20}
A.k3.prototype={
eG(a,b){this.b.eG(a,b)},
geF(){return 0},
geH(){return 4096},
hj(){return this.b.d>=2?1:0},
eE(){},
dD(){return this.b.dD()},
hm(a){this.b.d=a
return null},
ho(a){},
jQ(a,b){return 12},
dE(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.w(A.eg(10))
s.b.dE(a)
if(!r.y.U(0,s.c))r.d5(new A.hb(new A.rO(s,a),new A.O(new A.l($.m,t.D),t.F)))},
hp(a){this.b.d=a
return null},
cL(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.w(A.eg(10))
s=m.c
if(l.y.U(0,s)){m.b.cL(a,b)
return}r=l.w.d.i(0,s)
if(r==null)r=new A.bg(new Uint8Array(0),0)
q=J.cN(B.f.gao(r.a),0,r.b)
m.b.cL(a,b)
p=new Uint8Array(a.length)
B.f.cg(p,0,a)
o=A.v([],t.o6)
n=$.m
o.push(new A.ka(b,p))
l.d5(new A.eK(l,s,q,o,new A.O(new A.l(n,t.D),t.F)))},
$iaO:1,
$ifW:1}
A.rO.prototype={
$1(a){return this.kg(a)},
kg(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.c(o.a.cn(a,o.c),$async$$1)
case 3:q=n.c9(0,c,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:20}
A.aE.prototype={
fY(a){a.dQ(a.c,this,!1)
return!0}}
A.hb.prototype={
ak(a){return this.w.$1(a)}}
A.h6.prototype={
fY(a){var s,r,q,p
if(!a.gE(0)){s=a.gaO(0)
for(r=this.x;s!=null;)if(s instanceof A.h6)if(s.x===r)return!1
else s=s.gdt()
else if(s instanceof A.eK){q=s.gdt()
if(s.x===r){p=s.a
p.toString
p.fz(A.p(s).h("aI.E").a(s))}s=q}else if(s instanceof A.eq){if(s.x===r){r=s.a
r.toString
r.fz(A.p(s).h("aI.E").a(s))
return!1}s=s.gdt()}else break}a.dQ(a.c,this,!1)
return!0},
ak(a){return this.oO(a)},
oO(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$ak=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.c(p.cn(a,o),$async$ak)
case 2:n=c
p.z.I(0,o)
s=3
return A.c(a.ea(n),$async$ak)
case 3:return A.f(null,r)}})
return A.h($async$ak,r)}}
A.eq.prototype={
ak(a){return this.oN(a)},
oN(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$ak=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.c(a.e7(p),$async$ak)
case 2:o.m(0,n,c)
return A.f(null,r)}})
return A.h($async$ak,r)}}
A.eK.prototype={
fY(a){var s,r=a.b===0?null:a.gaO(0)
for(s=this.x;r!=null;)if(r instanceof A.eK)if(r.x===s){B.d.ac(r.z,this.z)
return!1}else r=r.gdt()
else if(r instanceof A.eq){if(r.x===s)break
r=r.gdt()}else break
a.dQ(a.c,this,!1)
return!0},
ak(a){return this.oP(a)},
oP(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$ak=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.ru(m,A.a2(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.a5)(m),++o){n=m[o]
l.mU(n.a,n.b)}k=a
s=3
return A.c(q.w.cn(a,q.x),$async$ak)
case 3:s=2
return A.c(k.cb(c,l),$async$ak)
case 2:return A.f(null,r)}})
return A.h($async$ak,r)}}
A.dR.prototype={
aB(){return"FileType."+this.b}}
A.e8.prototype={
b4(){var s=this.d
if(s!=null)return s
throw A.b(A.E("VFS closed"))},
eD(a,b){var s=$.v3().i(0,a)
if(s==null)return this.e.d.H(a)?1:0
else return this.b4().jc(s)?1:0},
hk(a,b){var s=$.v3().i(0,a)
if(s==null){this.e.d.I(0,a)
return null}else this.b4().dn(s,!1)},
hl(a){return new v.G.URL(a,"file:///").pathname},
cc(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.cc(a,b)
s=$.v3().i(0,p)
if(s==null)return q.e.cc(a,b)
r=q.b4()
if(!r.jc(s))if((b&4)!==0){r.c4(s).truncate(0)
r.dn(s,!0)}else throw A.b(B.bV)
return new A.eD(new A.kt(q,s,(b&8)!==0),0)},
hn(a){},
n(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
bL(a,b){return this.oz(a,b)},
ox(a){return this.bL(a,!1)},
oz(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$bL=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=new A.or(a,b)
s=2
return A.c(m.$1("meta"),$async$bL)
case 2:l=d
k=J.z(l.getSize(),0)
l.truncate(2)
s=3
return A.c(m.$1("database"),$async$bL)
case 3:p=d
s=4
return A.c(m.$1("journal"),$async$bL)
case 4:o=d
n=q.d=new A.t7(new Uint8Array(2),l,p,o)
if(k){n.dn(B.a3,p.getSize()>0)
n.dn(B.a4,o.getSize()>0)}return A.f(null,r)}})
return A.h($async$bL,r)}}
A.or.prototype={
jY(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.c(A.aq(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.c(A.aq(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$1(a){return this.jY(a)},
$S:132}
A.kt.prototype={
jE(a,b){return A.wG(this.a.b4().c4(this.b),a,{at:b})},
hj(){return this.d>=2?1:0},
eE(){var s=this.a,r=this.b
s.b4().c4(r).flush()
if(this.c)s.b4().dn(r,!1)},
dD(){return this.a.b4().c4(this.b).getSize()},
hm(a){this.d=a},
ho(a){this.a.b4().c4(this.b).flush()},
dE(a){this.a.b4().c4(this.b).truncate(a)},
hp(a){this.d=a},
cL(a,b){if(A.wH(this.a.b4().c4(this.b),a,{at:b})<a.length)throw A.b(B.bX)}}
A.t7.prototype={
jc(a){var s=this.a
A.wG(this.b,s,{at:0})
return s[a.a]!==0},
dn(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.C(s)
s[a.a]=r
A.wH(this.b,s,{at:0})},
c4(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.pN.prototype={
kY(a,b){var s=this,r=s.c
r.a!==$&&A.z2()
r.a=s
r=t.S
A.k_(new A.pO(s),r)
A.k_(new A.pP(s),r)
s.r=A.k_(new A.pQ(s),r)
s.w=A.k_(new A.pR(s),r)},
d7(a,b){var s=a.length,r=this.d.dart_sqlite3_malloc(s+b),q=A.b4(this.b.buffer,0,null)
s=r+s
B.f.ai(q,r,s,a)
B.f.fQ(q,s,s+b,0)
return r},
fF(a){return this.d7(a,0)},
j7(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
j5(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
j6(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.pO.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:7}
A.pP.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:7}
A.pQ.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:7}
A.pR.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:7}
A.dM.prototype={}
A.o0.prototype={
hy(a){var s,r=this,q=r.a
q.start()
r.c=A.aD(q,"message",new A.o4(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.hO()
q.toString
A.fX(q,s,null,null,!1).aQ(new A.o5(r),t.P)}},
fi(a){return this.lB(a)},
lB(a){var s=0,r=A.i(t.H),q=this
var $async$fi=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:A.Ec(a,new A.o1(q),q.gjl(),new A.o2(q),new A.o3(q))
return A.f(null,r)}})
return A.h($async$fi,r)},
bQ(a,b,c,d){return this.kz(a,b,c,d,d)},
ce(a,b,c){return this.bQ(a,b,null,c)},
kz(a,b,c,d,e){var s=0,r=A.i(e),q,p=this,o,n,m,l
var $async$bQ=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:l={}
if((p.b.a.a&30)!==0)throw A.b(A.zW(null))
o=p.e++
n=new A.l($.m,t.a7)
p.f.m(0,o,new A.O(n,t.h1))
a.i=o
p.a.postMessage(a,A.dB(a))
l.a=!1
if(c!=null)c.J(new A.o6(l,p,o))
s=3
return A.c(n,$async$bQ)
case 3:m=g
l.a=!0
if(J.z(m.t,b.b)){q=d.a(m)
s=1
break}else throw A.b(A.B4(m))
case 1:return A.f(q,r)}})
return A.h($async$bQ,r)},
lQ(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.u()
s=q.d
if(s!=null)s.u()
for(s=q.f,r=new A.bd(s,s.r,s.e);r.l();)r.d.a8(new A.f0(a))
s.aL(0)
p.N()},
ic(){return this.lQ(null)}}
A.o4.prototype={
$1(a){if(a.data=="_disconnect"){this.a.ic()
return}this.a.fi(A.T(a.data))},
$S:2}
A.o5.prototype={
$1(a){this.a.ic()
a.a.N()},
$S:133}
A.o3.prototype={
$1(a){var s=this.a.f.I(0,a.i)
if(s!=null)s.X(a)},
$S:14}
A.o2.prototype={
$1(a){return this.jX(a)},
jX(a1){var s=0,r=A.i(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.d(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:f=null
e=a1.i
d=n.a
c=d.r
b=v.G
a=new b.AbortController()
c.m(0,e,a)
m=a
q=3
j=d.nh(a1,m.signal)
s=6
return A.c(t.nW.b(j)?j:A.bP(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.I(a0)
k=A.P(a0)
if(!(l instanceof A.bq)){b.console.error("Error in worker: "+J.aW(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.db){h=A.Af(b)
g=0}else{g=b instanceof A.bq?1:null
h=null}f={e:J.aW(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.I(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.dB(c))
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$1,r)},
$S:134}
A.o1.prototype={
$1(a){var s=this.a.r.I(0,a.i)
if(s!=null)s.abort()},
$S:14}
A.o6.prototype={
$0(){if(!this.a.a){var s={i:this.c,t:"abort"}
this.b.a.postMessage(s,A.dB(s))}},
$S:1}
A.f0.prototype={
j(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iQ:1}
A.jT.prototype={}
A.j5.prototype={
kT(a,b){var s,r=this
r.a.b.a.aQ(new A.od(r),t.P)
s=r.e
s.a=new A.oe(r)
s.b=new A.of(r)
r.iC(r.f,new A.og(r),"notifyCommit")
r.iC(r.r,new A.oh(r),"notifyRollback")},
iC(a,b,c){var s=a.b
s.a=new A.ob(this,a,c,b)
s.b=new A.oc(this,a,b)},
aV(a){var s=0,r=A.i(t.X),q,p=this
var $async$aV=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(p.a.bQ({r:a,z:null,i:0,d:p.b,t:"custom"},B.p,null,t.m),$async$aV)
case 3:q=c.r
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aV,r)},
cI(a,b,c){return this.oM(a,b,c,c)},
oM(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$cI=A.d(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:k=m.a
j=m.b
i=t.m
g=A
f=A
s=3
return A.c(k.bQ({i:0,d:j,t:"exclusiveLock"},B.p,b,i),$async$cI)
case 3:h=g.R(f.bS(a0.r))
p=4
s=7
return A.c(a.$1(h),$async$cI)
case 7:l=a0
q=l
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=8
return A.c(k.ce({z:h,i:0,d:j,t:"releaseLock"},B.p,i),$async$cI)
case 8:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cI,r)},
cN(a,b,c,d){return this.ku(a,b,c,d)},
ku(a,b,c,d){var s=0,r=A.i(t.ii),q,p=this,o,n,m,l,k
var $async$cN=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:m=A.vt(c)
l=d==null?null:d
s=3
return A.c(p.a.bQ({s:a,p:m.a,v:m.b,z:l,r:!0,c:b,i:0,d:p.b,t:"runQuery"},B.bm,null,t.m),$async$cN)
case 3:k=f
l=k.x
o=k.y
n=A.B6(k)
n.toString
q=new A.ki(l,o,n)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cN,r)},
$iwB:1}
A.od.prototype={
$1(a){var s=this.a,r=s.c
if((r.a.a&30)===0){r.N()
s.e.n()
s.r.b.n()
s.f.b.n()}},
$S:9}
A.oe.prototype={
$0(){var s,r=this.a
if(r.d==null){s=r.a.w
r.d=new A.aA(s,A.p(s).h("aA<1>")).O(new A.o9(r))}if((r.c.a.a&30)===0)r.a.ce({a:!0,i:0,d:r.b,t:"updateRequest"},B.p,t.m)},
$S:0}
A.o9.prototype={
$1(a){var s
if(J.z(a.t,"notifyUpdate")){s=this.a
if(J.z(a.d,s.b))s.e.q(0,new A.b5(B.be[a.k],a.u,a.r))}},
$S:2}
A.of.prototype={
$0(){var s=this.a,r=s.d
if(r!=null)r.u()
s.d=null
if((s.c.a.a&30)===0)s.a.ce({a:!1,i:0,d:s.b,t:"updateRequest"},B.p,t.m)},
$S:1}
A.og.prototype={
$1(a){return{a:a,i:0,d:this.a.b,t:"commitRequest"}},
$S:42}
A.oh.prototype={
$1(a){return{a:a,i:0,d:this.a.b,t:"rollbackRequest"}},
$S:42}
A.ob.prototype={
$0(){var s,r,q=this,p=q.b
if(p.a==null){s=q.a
r=s.a.w
p.a=new A.aA(r,A.p(r).h("aA<1>")).O(new A.oa(s,q.c,p))}p=q.a
if((p.c.a.a&30)===0)p.a.ce(q.d.$1(!0),B.p,t.m)},
$S:0}
A.oa.prototype={
$1(a){if(J.z(a.t,this.b)&&J.z(a.d,this.a.b))this.c.b.q(0,null)},
$S:2}
A.oc.prototype={
$0(){var s=this.b,r=s.a
if(r!=null)r.u()
s.a=null
s=this.a
if((s.c.a.a&30)===0)s.a.ce(this.c.$1(!1),B.p,t.m)},
$S:1}
A.jG.prototype={
aX(a,b){return this.nT(a,b)},
nT(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$aX=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.x.$1(a.r),$async$aX)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aX,r)},
fR(a){this.w.q(0,a)}}
A.ml.prototype={
fI(a){var s=0,r=A.i(t.kS),q,p=this,o
var $async$fI=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o={port:a.a,lockName:a.b}
q=A.B1(A.By(new A.dM(o.port,o.lockName,null),p.d),0)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$fI,r)}}
A.mm.prototype={
bo(a){return this.oj(a)},
oj(a){var s=0,r=A.i(t.w),q
var $async$bo=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=A.pW(a,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bo,r)}}
A.ic.prototype={}
A.m6.prototype={}
A.cz.prototype={
n(){this.gda().n()}}
A.rm.prototype={}
A.iq.prototype={
em(){var s=0,r=A.i(t.H),q=this
var $async$em=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.c(q.a.ox(q.b),$async$em)
case 4:case 3:return A.f(null,r)}})
return A.h($async$em,r)},
h9(){var s=0,r=A.i(t.H),q=this
var $async$h9=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.n()
return A.f(null,r)}})
return A.h($async$h9,r)}}
A.mZ.prototype={
oQ(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
lN(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.q5.prototype={
$1(a){var s=new A.l($.m,t.D),r=new A.bX(new A.O(s,t.F))
this.a.a=r
this.b.X(r)
return A.wI(s)},
$S:38}
A.q6.prototype={
$2(a,b){var s,r,q
A.T(a)
s=J.z(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.b6(new A.bq("Operation was cancelled",null),b)
else q.b6(a,b)}return null},
$S:137}
A.bX.prototype={}
A.ie.prototype={
gmX(){if(this.c.a)return!1
return!this.d||this.f!=null},
cj(a){return this.l8(a)},
l8(a){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$cj=A.d(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.hO()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.c(A.fX(n,o.a,null,o.glE(),!0),$async$cj)
case 6:m=c
s=7
return A.c(A.fX(n,o.b,a,null,!1),$async$cj)
case 7:l=c
j=o.e
j=j==null?null:j.em()
s=8
return A.c(j instanceof A.l?j:A.bP(j,t.H),$async$cj)
case 8:o.f=new A.a3(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.N()
j=l
if(j!=null)j.a.N()
throw i
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cj,r)},
lF(){this.jI()},
h1(a,b,c){return this.c.ez(new A.mz(this,a,b,c),b,c)},
jI(){return this.c.hi(new A.mA(this),t.H)}}
A.mz.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.cj(r.c).aQ(new A.my(r.b,s),s)},
$S(){return this.d.h("0/()")}}
A.my.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.h("0/(~)")}}
A.mA.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.h9()
s.a.N()
r.a.N()
p.f=null}},
$S:1}
A.e_.prototype={
ez(a,b,c){return this.oZ(a,b,c,c)},
hi(a,b){return this.ez(a,null,b)},
oZ(a,b,c,d){var s=0,r=A.i(d),q,p=this,o,n,m,l,k,j
var $async$ez=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:k={}
j=b==null
if(J.z(j?null:b.aborted,!0))throw A.b(B.A)
k.a=!1
o=new A.nS(k,p)
if(!p.a){k.a=p.a=!0
q=A.dS(a,c).J(o)
s=1
break}else{n={}
m=new A.l($.m,c.h("l<0>"))
l=new A.O(m,c.h("O<0>"))
n.a=null
k=new A.nR(k,n,l,a,c)
if(!j)n.a=A.aD(b,"abort",new A.nQ(n,p,l,k),!1,t.m)
p.b.eY(k)
q=m.J(o)
s=1
break}case 1:return A.f(q,r)}})
return A.h($async$ez,r)}}
A.nS.prototype={
$0(){var s,r
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0))r.oK().$0()
else s.a=!1},
$S:0}
A.nR.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.u()
r.c.X(A.dS(r.d,r.e))},
$S:0}
A.nQ.prototype={
$1(a){var s,r=this
r.a.a.u()
s=r.c
if((s.a.a&30)===0){r.b.b.I(0,r.d)
s.a8(B.A)}},
$S:2}
A.cW.prototype={
gjM(){var s,r,q,p,o,n=this,m=t.s,l=A.v([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q){p=s[q]
B.d.ac(l,A.v([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.mK.prototype={
$1(a){if(a!=null)return A.an(a)
return null},
$S:138}
A.ol.prototype={
$1(a){return a},
$S:15}
A.om.prototype={
$1(a){return a==null?null:a},
$S:140}
A.fv.prototype={
aB(){return"MessageType."+this.b}}
A.ok.prototype={
di(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
ef(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
aX(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
cu(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
cv(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
ct(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dl(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dh(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
jm(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
df(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dj(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dm(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dk(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
dg(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
jj(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
jn(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
jk(a,b){var s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.S(s)
return r},
nh(a,b){var s,r,q=this
switch(a.t){case"open":return q.di(a,b)
case"connect":return q.ef(a,b)
case"custom":return q.aX(a,b)
case"fileSystemExists":return q.cu(a,b)
case"fileSystemFlush":return q.cv(a,b)
case"fileSystemAccess":return q.ct(a,b)
case"runQuery":return q.dl(a,b)
case"exclusiveLock":return q.dh(a,b)
case"releaseLock":return q.jm(a,b)
case"closeDatabase":return q.df(a,b)
case"openAdditionalConnection":return q.dj(a,b)
case"updateRequest":return q.dm(a,b)
case"rollbackRequest":return q.dk(a,b)
case"commitRequest":return q.dg(a,b)
case"dedicatedCompatibilityCheck":return q.jj(a,b)
case"sharedCompatibilityCheck":return q.jn(a,b)
case"dedicatedInSharedCompatibilityCheck":return q.jk(a,b)
default:s=A.av(new A.a6(!1,null,null,"Unsupported request "+A.q(a.t)),null)
r=new A.l($.m,t.e)
r.S(s)
return r}}}
A.cl.prototype={
aB(){return"FileSystemImplementation."+this.b}}
A.by.prototype={
aB(){return"TypeCode."+this.b},
j8(a){var s,r=null,q=r
switch(this.a){case 0:q=A.w(A.K("Unsupported type code",r))
break
case 1:a=A.R(A.bS(a))
q=a
break
case 2:q=t.bJ.a(a).toString()
s=A.BN(q,r)
if(s==null)A.w(A.ak("Could not parse BigInt",q,r))
q=s
break
case 3:A.bS(a)
q=a
break
case 4:A.an(a)
q=a
break
case 5:t.Z.a(a)
q=a
break
case 7:A.aV(a)
q=a
break
case 6:break}return q}}
A.ck.prototype={
iX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.K("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.v:B.I[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.R(A.bS(h))))
if(k!==0)a.bu(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bu(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.bS(h))
if(k!==0)a.bu(k,e)
break
case 4:g=B.n.ap(A.an(h))
k=s.dart_sqlite3_bind_text(d,i,c.fF(g),g.length)
if(k!==0)a.bu(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.fF(h),h.length)
if(k!==0)a.bu(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bu(k,e)
break
case 7:f=A.aV(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bu(k,e)
break
case 0:throw A.b(A.S("Unknown type code"))}}},
gk(a){return this.a.length},
sk(a,b){this.iL()},
i(a,b){var s=this.c[b],r=s>=8?B.v:B.I[s]
return r.j8(this.a[b])},
m(a,b,c){this.iL()},
iL(){throw A.b(A.S("decodeValues list is unmodifiable"))}}
A.uq.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:14}
A.lM.prototype={
$1(a){this.a.X(this.c.a(this.b.result))},
$S:2}
A.lN.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.a8(s)},
$S:2}
A.lQ.prototype={
$1(a){this.a.X(this.c.a(this.b.result))},
$S:2}
A.lR.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.a8(s)},
$S:2}
A.lS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.a8(s)},
$S:2}
A.nZ.prototype={
ny(){var s,r,q,p
for(s=this.b,r=new A.bd(s,s.r,s.e);r.l();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aL(0)}}
A.fe.prototype={
aB(){return"FileType."+this.b}}
A.cu.prototype={
aB(){return"StorageMode."+this.b}}
A.d7.prototype={
j(a){return"Remote error: "+this.a},
$iQ:1}
A.bq.prototype={}
A.rn.prototype={
eL(){var s=v.G
if(!("Worker" in s))return null
return new A.rl(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.tM.prototype={}
A.rl.prototype={}
A.tY.prototype={
$1(a){return A.T(a.data)},
$S:142}
A.hu.prototype={
u(){var s=this.a
if(s!=null)s.u()
this.a=null}}
A.eo.prototype={
n(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q.c.u()
q.d.u()
q.e.u()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.a5)(p),++n)p[n].abort()
B.d.aL(p)
p=q.f
if(p!=null)p.b.N()
s=2
return A.c(q.a.dd(),$async$n)
case 2:return A.f(null,r)}})
return A.h($async$n,r)},
iD(a){var s=new v.G.AbortController()
a.onabort=A.u_(new A.r9(s))
this.w.push(s)
return s},
ey(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gmX()){r=p.iD(b)
o=s.h1(c,r.signal,d).J(new A.rd(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.E("Requested operation on inactive lock state."))}if(o==null)o=A.dS(c,d)
q=p.a.z
return q instanceof A.cm?o.J(q.gnM()):o},
ow(a){var s=this,r=s.iD(a),q=new A.l($.m,t.hy),p=new A.ad(q,t.ho),o=t.H
A.it(s.a.f.h1(new A.ra(s,p),r.signal,o),new A.rb(p),o,t.K)
return q.J(new A.rc(s,r))}}
A.r9.prototype={
$0(){return this.a.abort()},
$S:0}
A.rd.prototype={
$0(){B.d.I(this.a.w,this.b)},
$S:1}
A.ra.prototype={
$0(){var s=this.a,r=s.r++,q=new A.l($.m,t.D)
s.f=new A.a3(r,new A.ad(q,t.h))
this.b.X(r)
return q},
$S:3}
A.rb.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.b6(a,b)},
$S:6}
A.rc.prototype={
$0(){B.d.I(this.a.w,this.b)},
$S:1}
A.en.prototype={
l0(a,b,c){this.b.a.J(new A.qY(this))},
co(a,b){return this.lA(a,b)},
lA(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$co=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.w.j1(a),$async$co)
case 3:q={r:d.gjM(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$co,r)},
jj(a,b){return this.co(a,b)},
jk(a,b){return this.co(a,b)},
jn(a,b){return this.co(a,b)},
ef(a,b){return this.nS(a,b)},
nS(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$ef=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.w.gi7()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.dB(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ef,r)},
aX(a,b){return this.nU(a,b)},
nU(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k
var $async$aX=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:k=a.d
s=k!=null?3:5
break
case 3:o=p.hR(k)
n=a.z
m=a.r
s=7
return A.c(o.a.gbr(),$async$aX)
case 7:s=6
return A.c(d.cs(p,new A.m6(new A.r0(o,n,b),m)),$async$aX)
case 6:l=d
s=4
break
case 5:s=8
return A.c(p.w.b.cs(p,new A.ic(a)),$async$aX)
case 8:l=d
case 4:q={r:l,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aX,r)},
di(a,b){return this.o0(a,b)},
o0(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$di=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.w.y.hi(new A.r3(p,a),t.m),$async$di)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$di,r)},
dl(a,b){return this.o4(a,b)},
o4(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$dl=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=o.a
s=3
return A.c(n.gbr(),$async$dl)
case 3:m=d
q=o.ey(a.z,b,new A.r6(m,a,n),t.m)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dl,r)},
dh(a,b){return this.nX(a,b)},
nX(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$dh=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.aU(a).ow(b),$async$dh)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dh,r)},
jm(a,b){var s=this.aU(a),r=a.z,q=s.f
if((q==null?null:q.a)!==r)A.w(A.E("Lock to be released is not active."))
q.b.N()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}},
dg(a,b){return this.nR(a,b)},
nR(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dg=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.c(p.ci(n,new A.r_(p,o),a),$async$dg)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$dg,r)},
dk(a,b){return this.o3(a,b)},
o3(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dk=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.c(p.ci(n,new A.r5(p,o),a),$async$dk)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$dk,r)},
dm(a,b){return this.o5(a,b)},
o5(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dm=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.c(p.ci(n,new A.r8(p,o),a),$async$dm)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$dm,r)},
dj(a,b){return this.o1(a,b)},
o1(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$dj=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=p.aU(a).a;++m.w
s=3
return A.c(A.ur(),$async$dj)
case 3:o=d
n=o.a
p.w.hz(o.b).x.push(A.xB(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dj,r)},
df(a,b){return this.nQ(a,b)},
nQ(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$df=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
B.d.I(p.x,o)
s=3
return A.c(o.n(),$async$df)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$df,r)},
cv(a,b){return this.o_(a,b)},
o_(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$cv=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.aU(a).a.gbO(),$async$cv)
case 3:o=d
s=o instanceof A.cm?4:5
break
case 4:s=6
return A.c(o.bE(!1),$async$cv)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cv,r)},
ct(a,b){return this.nY(a,b)},
nY(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k,j
var $async$ct=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=B.a7[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.c(o.a.gbO(),$async$ct)
case 4:s=3
return A.c(l.ey(null,k,new j.r1(d,n,m,a),t.m),$async$ct)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ct,r)},
cu(a,b){return this.nZ(a,b)},
nZ(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l
var $async$cu=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aU(a)
n=o
m=b
l=A
s=4
return A.c(o.a.gbO(),$async$cu)
case 4:s=3
return A.c(n.ey(null,m,new l.r2(d,a),t.y),$async$cu)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cu,r)},
ci(a,b,c){return this.kC(a,b,c)},
kC(a,b,c){var s=0,r=A.i(t.m),q,p
var $async$ci=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.c(b.$0(),$async$ci)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ci,r)},
fR(a){},
aV(a){var s=0,r=A.i(t.X),q,p=this
var $async$aV=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(p.ce({r:a,z:null,i:0,d:null,t:"custom"},B.p,t.m),$async$aV)
case 3:q=c.r
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aV,r)},
hR(a){return B.d.jg(this.x,new A.qX(a))},
aU(a){var s=a.d
if(s!=null)return this.hR(s)
else throw A.b(A.K("Request requires database id",null))},
$iwy:1}
A.qY.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.c(p[n].n(),$async$$0)
case 5:case 3:p.length===o||(0,A.a5)(p),++n
s=2
break
case 4:B.d.aL(p)
return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.r0.prototype={
$1$1(a,b){return this.a.ey(this.b,this.c,a,b)},
$1(a){return this.$1$1(a,t.z)},
$S:143}
A.r3.prototype={
$0(){var s=0,r=A.i(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.c(i.bo(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.nL(h.d,A.Ak(h.s),h.c,h.a)
s=8
return A.c(h.o?m.gbO():m.gbr(),$async$$0)
case 8:l=A.xB(m,null)
j.x.push(l)
i={r:m.b,i:h.i,t:"simpleSuccessResponse"}
q=i
s=1
break
p=2
s=7
break
case 5:p=4
g=o.pop()
s=m!=null?9:10
break
case 9:B.d.I(j.x,l)
s=11
return A.c(m.dd(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$0,r)},
$S:144}
A.r6.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.gda(),k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.E("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ck(s,r,A.b4(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.kt(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.R(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.nE(l,k.s,q)
s=o.d
return A.yV(s.sqlite3_get_autocommit(p)!==0,m,A.R(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:18}
A.r_.prototype={
$0(){var s=0,r=A.i(t.ey),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.gbr(),$async$$0)
case 3:q=b.gda().f0().gbA().O(new A.qZ(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:37}
A.qZ.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.dB(s))},
$S:21}
A.r5.prototype={
$0(){var s=0,r=A.i(t.ey),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.gbr(),$async$$0)
case 3:q=b.gda().mm().gbA().O(new A.r4(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:37}
A.r4.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.dB(s))},
$S:21}
A.r8.prototype={
$0(){var s=0,r=A.i(t.ha),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.gbr(),$async$$0)
case 3:q=b.gda().iM().gbA().O(new A.r7(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:147}
A.r7.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.dB(s))},
$S:35}
A.r1.prototype={
$0(){var s,r,q,p=this,o=p.a.cc(new A.fH(A.yi(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.dE(s.byteLength)
o.cL(A.b4(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.dD()
r=new Uint8Array(q)
o.eG(r,0)
q={r:t.a.a(J.zK(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.eE()}},
$S:18}
A.r2.prototype={
$0(){return this.a.eD(A.yi(B.a7[this.b.f]),0)===1},
$S:33}
A.qX.prototype={
$1(a){return a.b===this.a},
$S:150}
A.ig.prototype={
gbO(){var s=0,r=A.i(t.e6),q,p=this,o
var $async$gbO=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.c(o==null?p.y=A.dS(new A.mD(p),t.H):o,$async$gbO)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$gbO,r)},
gbr(){var s=0,r=A.i(t.u),q,p=this,o
var $async$gbr=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.c(o==null?p.x=A.dS(new A.mC(p),t.u):o,$async$gbr)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$gbr,r)},
dd(){var s=0,r=A.i(t.H),q=this
var $async$dd=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.c(q.n(),$async$dd)
case 4:case 3:return A.f(null,r)}})
return A.h($async$dd,r)},
n(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.c(j,$async$n)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.c(o,$async$n)
case 5:n=b
j=q.r
if(j!=null)j.ny()
n.n()
m=q.z
if(m!=null){j=p.a
l=$.we()
A.Ai(m)
k=l.a.get(m)
if(k==null)A.w(A.E("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.c(j instanceof A.l?j:A.bP(j,t.H),$async$n)
case 6:q.f.jI()
return A.f(null,r)}})
return A.h($async$n,r)},
ii(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.I(0,b)
if(q!=null)r.m(0,b,q)
s=q}if(s!=null)return new A.a3(s,!0)
p=a.jB(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.I(0,new A.b1(n,A.p(n).h("b1<1>")).gae(0)).n()
n.m(0,p.d,p)
return new A.a3(p,!0)}return new A.a3(p,!1)},
nE(a,b,c){var s,r,q
if(c.gk(0)===0)return a.aW(b,B.o)
else{s=null
r=null
q=this.ii(a,b)
s=q.a
r=q.b
try{s.nG(new A.f7(c.giW()))}finally{if(r)s.dv()
else s.n()}}},
kt(a,b,c){var s,r=null,q=null,p=this.ii(a,b)
r=p.a
q=p.b
try{s=A.B5(r,c)
return s}finally{if(q)r.dv()
else r.n()}}}
A.mD.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=q.a
k=l.d
case 2:switch(k.a){case 0:s=4
break
case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
default:s=3
break}break
case 4:s=9
return A.c(A.oq("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gaE()
s=3
break
case 5:case 6:s=10
return A.c(A.ir("drift_db/"+l.c,k===B.G,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gaE()
s=3
break
case 7:s=11
return A.c(A.iw(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gaE()
s=3
break
case 8:l.z=A.vc("vfs-web-"+l.b,null)
s=3
break
case 3:return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.mC.prototype={
$0(){var s=0,r=A.i(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.c(k,$async$$0)
case 3:o=b
s=4
return A.c(l.gbO(),$async$$0)
case 4:n=b
o.jp()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.d7(B.n.ap(n.a),1),n,0)
if(m===0)A.w(A.E("could not register vfs"))
k=$.we()
k.a.set(n,m)
s=5
return A.c(l.f.h1(new A.mB(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:32}
A.mB.prototype={
$0(){var s=this.a
return s.a.b.h5(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:32}
A.qj.prototype={
gi7(){var s,r=this,q=r.Q
if(q===$){s=r.a.gn1().eL()
r.Q!==$&&A.wc()
r.Q=s
q=s}return q},
cw(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$cw=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bR(A.bb(A.CT(n.a),"stream",t.K))
q=2
j=v.G
case 5:s=7
return A.c(h.l(),$async$cw)
case 7:if(!b){s=6
break}m=h.gp()
s=J.z(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.dM(i.port,i.lockName,null)
n.hz(l)
s=9
break
case 10:s=A.Ev(m.t)?11:12
break
case 11:s=13
return A.c(n.j1(m),$async$cw)
case 13:k=b
j.postMessage(k.gjM())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.c(h.u(),$async$cw)
case 14:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cw,r)},
hz(a){var s=this,r=A.BQ(a,s.d++,s)
s.c.push(r)
r.b.a.J(new A.qk(s,r))
return r},
j1(a){return this.x.hi(new A.ql(this,a),t.p6)},
bo(a){return this.ol(a)},
ol(a){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$bo=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.T(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.E("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.c(t.jN.b(n)?n:A.bP(n,t.he),$async$bo)
case 5:s=3
break
case 4:o=A.it(q.b.bo(m),new A.qm(q),t.w,t.K)
q.r=o
s=6
return A.c(o,$async$bo)
case 6:q.w=m
case 3:return A.f(null,r)}})
return A.h($async$bo,r)},
nL(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.bd(s,s.r,s.e);r.l();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.G||b===B.a2
o=A.nF(t.cj)
n=c===0?null:new A.nZ(c,A.vj(null,null,t.N,t.fw))
n=new A.ig(this,r,a,b,d,new A.ie(q+"-outer",q,new A.e_(o),p),n)
s.m(0,r,n)
return n}}
A.qk.prototype={
$0(){var s=this.a,r=s.c
B.d.I(r,this.b)
if(r.length===0)s.a.n()
return null},
$S:0}
A.ql.prototype={
$0(){var s=0,r=A.i(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.d(function(a0,a1){if(a0===1)return A.e(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.z(d.t,"dedicatedCompatibilityCheck")||J.z(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.c(A.cJ(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.z(d.t,"dedicatedCompatibilityCheck")||J.z(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.c(A.kQ(),$async$$0)
case 9:case 8:j=a1
i=A.bu(t.cU)
s=J.z(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gi7()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.dB(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.c(new A.et(n,"message",!1,t.d4).gae(0),$async$$0)
case 15:e=b.A1(a.T(a1.data))
k=e.c
l=e.d
i.ac(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.c(A.eV(),$async$$0)
case 18:d=b.U(a1)
case 19:if(!d.l()){s=20
break}i.q(0,new A.a3(B.ah,d.gp()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.c(A.up(c),$async$$0)
case 23:if(a1)i.q(0,new A.a3(B.ai,c))
case 22:d=A.as(i,i.$ti.c)
q=new A.cW(d,g,k,l,j)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:152}
A.qm.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:153}
A.iM.prototype={
j(a){return"LockError: "+this.a}}
A.th.prototype={
bJ(a,b,c){return this.op(a,b,c,c)},
op(a,b,c,d){var s=0,r=A.i(d),q,p=this,o
var $async$bJ=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:if($.m.i(0,p)!=null)throw A.b(new A.iM("Recursive lock is not allowed"))
o=t.X
q=$.m.jh(A.bt([p,!0],o,o)).bt(new A.tm(p,b,a,c),c.h("0/"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bJ,r)}}
A.ti.prototype={
$1(a){},
$S:11}
A.tm.prototype={
$0(){return this.ki(this.d)},
ki(a){var s=0,r=A.i(a),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$$0=A.d(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:j={}
i=m.a
h=i.a
g=j.a=!1
f=$.m
e=t.D
d=t.F
c=new A.O(new A.l(f,e),d)
i.a=c.a
p=3
s=h!=null?6:7
break
case 6:l=new A.O(new A.l(f,e),d)
h.aQ(new A.tj(j,l),t.P)
f=m.b
if(f!=null)f.J(new A.tk(l))
s=8
return A.c(l.a,$async$$0)
case 8:case 7:s=9
return A.c(m.c.$0(),$async$$0)
case 9:f=a0
q=f
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
k=new A.tn(i,c)
if(h!=null?!j.a:g)h.aQ(new A.tl(k),t.P).lG()
else k.$0()
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$0,r)},
$S(){return this.d.h("o<0>()")}}
A.tj.prototype={
$1(a){var s
this.a.a=!0
s=this.b
if((s.a.a&30)===0)s.N()},
$S:9}
A.tk.prototype={
$0(){var s=this.a
if((s.a.a&30)===0)s.b6(new A.ci("lock"),A.fJ())},
$S:1}
A.tn.prototype={
$0(){var s=this.a,r=this.b
if(s.a===r.a)s.a=null
r.N()},
$S:0}
A.tl.prototype={
$1(a){this.a.$0()},
$S:9}
A.ji.prototype={}
A.jj.prototype={
oH(a,b){return this.jG(new A.ox(this,a,b),"readTransaction()",null,b)}}
A.ox.prototype={
$1(a){return this.k0(a,this.c)},
k0(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(A.eT(a,p.b,!1,p.c),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.c.h("o<0>(aB)")}}
A.ci.prototype={
j(a){return"A call to "+this.a+" has been aborted"},
$iQ:1}
A.jw.prototype={
bw(a,b){return this.kk(a,b)},
kk(a,b){var s=0,r=A.i(t.oy),q,p=this,o
var $async$bw=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.aw(a,b),$async$bw)
case 3:o=d
q=o.gae(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bw,r)},
b0(a,b){return this.kp(a,b)},
kp(a,b){var s=0,r=A.i(t.J),q,p=this,o
var $async$b0=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=A
s=3
return A.c(p.aw(a,b),$async$b0)
case 3:q=o.Ax(d)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$b0,r)},
e6(){var s=0,r=A.i(t.H),q=this
var $async$e6=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=2
return A.c(q.bx(),$async$e6)
case 2:if(!b)throw A.b(A.jk(null,null,0,"Dangling transaction detected. If you want to use BEGIN statements manually, COMMIT or ROLLBACK them before returning from writeLock.",null,null,null))
return A.f(null,r)}})
return A.h($async$e6,r)},
$iaB:1}
A.fE.prototype={
cT(){if(this.c)A.w(A.E("This context to a callback is no longer open. Make sure to await all statements on a database to avoid a context still being used after its callback has finished."))
if(this.b)throw A.b(A.E("The context from the callback was locked, e.g. due to a nested transaction."))},
bw(a,b){return this.kj(a,b)},
kj(a,b){var s=0,r=A.i(t.oy),q,p=this
var $async$bw=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cT()
q=p.a.bw(a,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bw,r)},
aw(a,b){return this.kl(a,b)},
eI(a){return this.aw(a,B.o)},
kl(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aw=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cT()
s=3
return A.c(p.a.aw(a,b),$async$aw)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aw,r)},
b0(a,b){return this.ko(a,b)},
ko(a,b){var s=0,r=A.i(t.J),q,p=this
var $async$b0=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cT()
q=p.a.b0(a,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$b0,r)},
$iaB:1}
A.fF.prototype={
aW(a,b){return this.nF(a,b)},
jb(a){return this.aW(a,B.o)},
nF(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aW=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cT()
s=3
return A.c(p.a.aW(a,b),$async$aW)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aW,r)},
b_(a,b){return this.p7(a,b,b)},
p7(a2,a3,a4){var s=0,r=A.i(a4),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b_=A.d(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:m.cT()
l=null
k=null
j=null
f=m.d
e=A.B9(f)
l=e.a
k=e.b
j=e.c
i=null
d=m.a
if(f===0){c=new A.ce(d.a,d.b,null)
c.d=!0}else c=d
h=c
p=4
m.b=!0
s=7
return A.c(d.aW(l,B.o),$async$b_)
case 7:i=new A.fF(f+1,h)
s=8
return A.c(a2.$1(i),$async$b_)
case 8:g=a6
s=9
return A.c(h.aW(k,B.o),$async$b_)
case 9:q=g
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a0=o.pop()
p=11
s=14
return A.c(h.aW(j,B.o),$async$b_)
case 14:p=3
s=13
break
case 11:p=10
a1=o.pop()
s=13
break
case 10:s=3
break
case 13:throw a0
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.b=!1
f=i
if(f!=null)f.c=!0
s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$b_,r)},
$iaK:1}
A.jh.prototype={
jG(a,b,c,d){return this.mL(a,null,b,d)},
jF(a,b,c){return this.jG(a,b,null,c)},
aw(a,b){return this.jF(new A.ov(a,b),"getAll()",t.G)},
b0(a,b){return this.jF(new A.ow(a,b),"getOptional()",t.J)},
kn(a){return this.b0(a,B.o)},
$iaB:1,
$iaK:1}
A.ov.prototype={
$1(a){return this.jZ(a)},
jZ(a){var s=0,r=A.i(t.G),q,p=this
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=a.aw(p.a,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:154}
A.ow.prototype={
$1(a){return this.k_(a)},
k_(a){var s=0,r=A.i(t.J),q,p=this
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=a.b0(p.a,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:155}
A.L.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.L&&B.aK.aM(b.a,this.a)},
gv(a){return A.AS(this.a)},
j(a){return"UpdateNotification<"+this.a.j(0)+">"},
cK(a){return new A.L(this.a.cK(a.a))},
fJ(a){var s
for(s=this.a,s=s.gA(s);s.l();)if(a.U(0,s.gp().toLowerCase()))return!0
return!1}}
A.pG.prototype={
$2(a,b){return a.cK(b)},
$S:156}
A.pF.prototype={
$1(a){return new A.cf(new A.pE(this.a),a,A.p(a).h("cf<D.T>"))},
$S:157}
A.pE.prototype={
$1(a){return a.fJ(this.a)},
$S:158}
A.uf.prototype={
$1(a){var s,r,q,p,o=this,n={}
n.a=n.b=null
n.c=!1
s=new A.ug(n,a)
r=A.xA()
q=new A.uh(n,a,s,r)
r.b=new A.ub(n,o.a,q)
p=o.c.ar(new A.ui(n,o.b,q,o.f),new A.uj(s,a),new A.uk(s,a))
a.e=new A.uc(n)
a.f=new A.ud(n,r,q)
a.r=new A.ue(n,p)
a.q(0,o.d)
r.dT().$0()},
$S(){return this.f.h("~(c_<0>)")}}
A.ug.prototype={
$0(){var s,r=this.a,q=r.b
if(q!=null){r.b=null
this.b.mT(q)
s=r.a
if(s!=null)s.u()
r.a=null
return!0}else return!1},
$S:33}
A.uh.prototype={
$0(){var s,r,q=this,p=q.a
if(p.a==null){s=q.b
r=s.b
s=!((r&1)!==0?(s.gag().e&4)!==0:(r&2)===0)}else s=!1
if(s)if(q.c.$0()){s=q.b
r=s.b
if((r&1)!==0?(s.gag().e&4)!==0:(r&2)===0)p.c=!0
else q.d.dT().$0()}},
$S:0}
A.ub.prototype={
$0(){var s=this.a
s.a=A.pv(this.b,new A.ua(s,this.c))},
$S:0}
A.ua.prototype={
$0(){this.a.a=null
this.b.$0()},
$S:0}
A.ui.prototype={
$1(a){var s,r=this.a,q=r.b
A:{if(q==null){s=a
break A}s=this.b.$2(q,a)
break A}r.b=s
this.c.$0()},
$S(){return this.d.h("~(0)")}}
A.uk.prototype={
$2(a,b){this.a.$0()
this.b.mQ(a,b)},
$S:5}
A.uj.prototype={
$0(){this.a.$0()
this.b.j2()},
$S:0}
A.uc.prototype={
$0(){var s=this.a,r=s.a,q=r==null
s.c=!q
if(!q)r.u()
s.a=null},
$S:0}
A.ud.prototype={
$0(){if(this.a.c)this.b.dT().$0()
else this.c.$0()},
$S:0}
A.ue.prototype={
$0(){var s=0,r=A.i(t.H),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a.a
if(o!=null)o.u()
q=p.b.u()
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:3}
A.pu.prototype={
$0(){this.a.pO()},
$S:1}
A.ps.prototype={
$1(a){this.a.q(0,a.b)},
$S:35}
A.pp.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=this.a,r=s.length,q=this.b,p=t.N,o=0;o<s.length;s.length===r||(0,A.a5)(s),++o){n=s[o]
n.b.ac(0,q)
m=n.a
l=m.b
k=(l&1)!==0
if(k){j=m.a
i=(((l&8)!==0?j.c:j).e&4)!==0}else i=(l&2)===0
if(!i){i=n.b
if(i.a!==0){if(l>=4)A.w(m.am())
if(k)m.an(i)
else if((l&3)===0){m=m.bW()
i=new A.bz(i)
h=m.c
if(h==null)m.b=m.c=i
else{h.sbp(i)
m.c=i}}n.b=A.bu(p)}}}q.aL(0)},
$S:0}
A.pq.prototype={
$0(){this.a.aL(0)},
$S:0}
A.pm.prototype={
$1(a){var s,r,q=this,p=q.b
p.push(a)
if(p.length===1){p=q.c
s=p.iM()
r=s.w
s=r==null?s.w=s.i1(!0):r
q.a.a=A.v([s.O(q.d),p.f0().gbA().O(new A.pn(q.e)),p.f0().gbA().O(new A.po(q.f))],t.bO)}},
$S:31}
A.pn.prototype={
$1(a){return this.a.$0()},
$S:21}
A.po.prototype={
$1(a){return this.a.$0()},
$S:21}
A.pt.prototype={
$1(a){var s,r,q=this.b
B.d.I(q,a)
if(q.length===0)for(q=this.a.a,s=q.length,r=0;r<q.length;q.length===s||(0,A.a5)(q),++r)q[r].u()},
$S:31}
A.pr.prototype={
$1(a){var s=new A.dw(a,A.bu(t.N))
this.a.$1(s)
a.f=s.gmR()
a.r=new A.pl(this.b,s)},
$S:160}
A.pl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.dw.prototype={
mS(){var s=this.b
if(s.a!==0){this.a.q(0,s)
this.b=A.bu(t.N)}}}
A.jD.prototype={
bx(){var s=0,r=A.i(t.y),q,p=this,o,n
var $async$bx=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=A
s=3
return A.c(p.a.aV({rawKind:"getAutoCommit"}),$async$bx)
case 3:o=n.vQ(b)
if(o==null)o=null
q=o===!0
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bx,r)},
mL(a,b,c,d){return this.bY(new A.q1(a,d),b,c,d)},
b_(a,b){return this.lO(new A.q4(a,b),null,b)},
e1(a,b,c,d){return this.mN(a,b,c,d,d)},
mM(a,b,c){return this.e1(a,b,null,c)},
mN(a,b,c,d,e){var s=0,r=A.i(e),q,p=this
var $async$e1=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:s=3
return A.c(p.bY(new A.q2(a,d),b,c,d),$async$e1)
case 3:q=g
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$e1,r)},
bY(a,b,c,d){return this.lP(a,b,c,d,d)},
lO(a,b,c){return this.bY(a,b,null,c)},
lP(a,b,c,d,e){var s=0,r=A.i(e),q,p=this,o,n
var $async$bY=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:n=p.b
s=n!=null?3:5
break
case 3:s=6
return A.c(n.bJ(new A.q_(p,a,d),b,d),$async$bY)
case 6:q=g
s=1
break
s=4
break
case 5:o=p.a.cI(new A.q0(p,a,d),b,d)
s=7
return A.c(A.CU(o,c==null?"lock":c,d),$async$bY)
case 7:q=g
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$bY,r)},
$ivw:1}
A.q1.prototype={
$1(a){return A.on(a,this.a,this.b)},
$S(){return this.b.h("o<0>(ce)")}}
A.q4.prototype={
$1(a){var s=this.b
return A.fG(a,new A.q3(this.a,s),s)},
$S(){return this.b.h("o<0>(ce)")}}
A.q3.prototype={
$1(a){return this.kc(a,this.b)},
kc(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(a.b_(p.a,p.b),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.b.h("o<0>(aK)")}}
A.q2.prototype={
$1(a){return A.fG(a,this.a,this.b)},
$S(){return this.b.h("o<0>(ce)")}}
A.q_.prototype={
$0(){return this.kb(this.c)},
kb(a){var s=0,r=A.i(a),q,p=this
var $async$$0=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(p.b.$1(new A.ce(p.a,null,null)),$async$$0)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S(){return this.c.h("o<0>()")}}
A.q0.prototype={
$1(a){return this.ka(a,this.c)},
ka(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.b.$1(new A.ce(p.a,a,null)),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.c.h("o<0>(a)")}}
A.ce.prototype={
aw(a,b){return this.km(a,b)},
km(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aw=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:q=A.xm(p.c,"getAll",new A.tG(p,a,b),b,a,t.G)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aw,r)},
bx(){var s=0,r=A.i(t.y),q,p=this
var $async$bx=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q=p.a.bx()
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bx,r)},
aW(a,b){return A.xm(this.c,"execute",new A.tE(this,a,b),b,a,t.G)}}
A.tG.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=3
return A.c(A.kU(new A.tF(p.a,p.b,p.c),t.G),$async$$0)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:16}
A.tF.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.c(o.a.a.cN(p.b,o.d,p.c,o.b),$async$$0)
case 3:q=b.c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:16}
A.tE.prototype={
$0(){return A.kU(new A.tD(this.a,this.b,this.c),t.G)},
$S:16}
A.tD.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.c(o.a.a.cN(p.b,o.d,p.c,o.b),$async$$0)
case 3:q=b.c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:16}
A.tZ.prototype={
$2(a,b){return A.im(new A.ci(this.a),b)},
$S:162}
A.i3.prototype={
goV(){var s=t.d4,r=s.h("aL<D.T,L?>"),q=r.h("cf<D.T>")
return new A.cT(new A.cf(new A.ll(),new A.aL(new A.lm(),new A.et(this.b,"message",!1,s),r),q),q.h("cT<D.T,L>"))},
al(a){this.b.postMessage(A.BO(a))}}
A.lm.prototype={
$1(a){var s,r,q=A.T(a.data)
if(J.z(q.a,0)){s=t.c.a(q.b)
r=t.k.b(s)?s:new A.ag(s,A.a8(s).h("ag<1,j>"))
return new A.L(J.dG(r,new A.lk(),t.N).dC(0))}else return null},
$S:164}
A.lk.prototype={
$1(a){return a},
$S:15}
A.ll.prototype={
$1(a){return a!=null},
$S:165}
A.qQ.prototype={
$1(a){return a},
$S:15}
A.bW.prototype={
aB(){return"CustomDatabaseMessageKind."+this.b}}
A.jx.prototype={
fS(a){var s=0,r=A.i(t.X),q,p=this,o,n
var $async$fS=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:A.T(a)
if(A.ij(B.a8,a.rawKind)===B.E){o=a.rawParameters
o=B.d.aY(o,new A.pB(),t.N).dC(0)
n=p.b.i(0,a.rawSql)
if(n!=null)n.q(0,new A.L(o))}q=null
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$fS,r)},
oW(a){var s=null,r=B.b.j(this.a++),q=A.bL(s,s,s,s,!1,t.b)
this.b.m(0,r,q)
q.d=new A.pC(a,r)
q.r=new A.pD(this,a,r)
return new A.a7(q,A.p(q).h("a7<1>"))}}
A.pB.prototype={
$1(a){return A.an(a)},
$S:54}
A.pC.prototype={
$0(){this.a.aV(A.v9(B.D,this.b,[!0]))},
$S:0}
A.pD.prototype={
$0(){var s=this.c
this.b.aV(A.v9(B.D,s,[!1]))
this.a.b.I(0,s)},
$S:1}
A.q7.prototype={
bJ(a,b,c){if("locks" in v.G.navigator)return this.d6(a,b,c)
else return this.a.bJ(a,b,c)},
oo(a,b){return this.bJ(a,null,b)},
d6(a,b,c){return this.mE(a,b,c,c)},
mE(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m=this,l,k
var $async$d6=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:s=3
return A.c(m.lz(b),$async$d6)
case 3:k=f
p=4
s=7
return A.c(a.$0(),$async$d6)
case 7:l=f
q=l
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
k.a.N()
s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$d6,r)},
lz(a){var s,r=new A.l($.m,t.nI),q=new A.O(r,t.aP),p=v.G,o=new p.AbortController()
if(a!=null)a.J(new A.q9(this,q,o))
s={}
s.signal=o.signal
A.aq(p.navigator.locks.request(this.b,s,A.bC(new A.qb(q))),t.X).j0(new A.qa())
return r}}
A.q9.prototype={
$0(){var s=this.b
if((s.a.a&30)===0){s.a8(new A.ci("getWebLock("+this.a.b+")"))
this.c.abort("aborted in Dart")}},
$S:1}
A.qb.prototype={
$1(a){var s=new A.l($.m,t.D),r=new A.O(s,t.F),q=this.a
if((q.a.a&30)===0)q.X(new A.fh(r))
else r.N()
return A.wI(s)},
$S:38}
A.qa.prototype={
$1(a){return null},
$S:10}
A.fh.prototype={}
A.l8.prototype={
h5(a,b,c,d){return this.oA(a,b,c,d)},
oA(a,b,c,d){var s=0,r=A.i(t.u),q,p,o,n,m,l
var $async$h5=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:p=d==null?null:A.T(d)
o=a.oy(b,p!=null&&p.useMultipleCiphersVfs?"multipleciphers-"+c:c)
n=A.cv(!1,t.b)
m=A.v([],t.a6)
l=A.xl(o)
m.push(new A.aL(A.z6(),l,l.$ti.h("aL<D.T,L>")).O(n.gc2(n)))
q=new A.hY(o,n,m,A.a2(t.eg,t.fK))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$h5,r)},
cs(a,b){throw A.b(A.vu(null))}}
A.hY.prototype={
mc(a,b){if(!a.a){a.a=!0
b.b.a.aQ(new A.l9(a),t.P)}},
n(){var s,r,q,p=this
p.kL()
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a5)(s),++q)s[q].u()
p.b.n()
s=p.d
if(s!=null)s.b.close()},
cs(a,b){return this.nV(a,b)},
nV(a,b){var s=0,r=A.i(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cs=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:i=A.T(b.a)
case 3:switch(A.ij(B.a8,i.rawKind).a){case 0:s=5
break
case 4:s=6
break
case 1:s=7
break
case 2:s=8
break
case 3:s=9
break
case 5:s=10
break
default:s=4
break}break
case 5:case 6:throw A.b(A.S("This is a response, not a request"))
case 7:o=p.a.b
q=o.a.d.sqlite3_get_autocommit(o.b)!==0
s=1
break
case 8:s=11
return A.c(b.c.$1$1(new A.la(p,i),t.P),$async$cs)
case 11:s=4
break
case 9:o=i.rawParameters
n=A.aV(o[0])
o=i.rawSql
m=p.e.cG(a,A.EU())
if(n){m.he()
p.mc(m,a)
l=A.xA()
k=p.b
l.b=m.b=new A.aA(k,A.p(k).h("aA<1>")).O(new A.lb(l,a,o))}else m.he()
s=4
break
case 10:o=i.name
if(p.d==null){j=p.d=new A.i3(new v.G.BroadcastChannel("sqlite3_async_updates/"+o))
o=p.c
k=A.xl(p.a)
o.push(new A.aL(A.z6(),k,k.$ti.h("aL<D.T,L>")).O(j.gkv()))
k=p.b
o.push(j.goV().O(k.gc2(k)))}s=4
break
case 4:q={rawKind:"ok"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cs,r)},
gda(){return this.a}}
A.l9.prototype={
$1(a){this.a.he()},
$S:9}
A.la.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k=this.b
if(k.requireTransaction){q=this.a.a.b
q=q.a.d.sqlite3_get_autocommit(q.b)!==0}else q=!1
if(q)throw A.b(A.jk(A.AD(A.ux(k,"rawSql")),l,0,"Transaction rolled back by earlier statement. Cannot execute",l,l,l))
s=this.a.a.oF(k.rawSql)
try{k=k.parameters
k=J.U(t.ip.b(k)?k:new A.ag(k,A.a8(k).h("ag<1,u>")))
while(k.l()){r=k.gp()
q=s
p=r
o=p.parameters
p=p.parameterTypes
p.toString
n=new Uint8Array(p,0)
if(q.r||q.b.r)A.w(A.E(u.f))
if(!q.f){m=q.a
m.c.d.sqlite3_reset(m.b)
q.f=!0}q.hE(new A.f7(new A.ck(o,p,n).giW()))
q.hX()}}finally{s.n()}},
$S:1}
A.lb.prototype={
$1(a){this.a.dT().aH(this.b.aV(A.v9(B.E,this.c,a.a.dB(0))))},
$S:49}
A.ep.prototype={
he(){var s=this.b
if(s!=null){this.b=null
s.u()}}}
A.jo.prototype={
gdJ(){return A.an(this.c)}}
A.p6.prototype={
gh0(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
eK(a){var s,r=this,q=r.d=J.zN(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gC()
return s},
jd(a,b){var s
if(this.eK(a))return
if(b==null)if(a instanceof A.fl)b="/"+a.a+"/"
else{s=J.aW(a)
s=A.hM(s,"\\","\\\\")
b='"'+A.hM(s,'"','\\"')+'"'}this.hY(b)},
de(a){return this.jd(a,null)},
nH(){if(this.c===this.b.length)return
this.hY("no more input")},
nD(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.w(A.ay("position must be greater than or equal to 0."))
else if(c>n.length)A.w(A.ay("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.w(A.ay("position plus length must not go beyond the end of the string."))
s=this.a
r=A.v([0],t.t)
q=n.length
p=new A.os(s,r,new Uint32Array(q))
p.kU(new A.br(n),s)
o=c+b
if(o>q)A.w(A.ay("End "+o+u.D+p.gk(0)+"."))
else if(c<0)A.w(A.ay("Start may not be negative, was "+c+"."))
throw A.b(new A.jo(n,a,new A.ev(p,c,o)))},
hY(a){this.nD("expected "+a+".",0,this.c)}}
A.ee.prototype={
gk(a){return this.b},
i(a,b){if(b>=this.b)throw A.b(A.wL(b,this))
return this.a[b]},
m(a,b,c){var s
if(b>=this.b)throw A.b(A.wL(b,this))
s=this.a
s.$flags&2&&A.C(s)
s[b]=c},
sk(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.C(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.f3(b)
B.f.ai(p,0,o.b,o.a)
o.a=p}}o.b=b},
mB(a){var s,r=this,q=r.b
if(q===r.a.length)r.i5(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=a},
q(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.i5(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=b},
hA(a,b,c){var s,r,q
if(t.j.b(a))c=c==null?J.aG(a):c
if(c!=null){this.lI(this.b,a,b,c)
return}for(s=J.U(a),r=0;s.l();){q=s.gp()
if(r>=b)this.mB(q);++r}if(r<b)throw A.b(A.E("Too few elements"))},
lI(a,b,c,d){var s,r,q,p,o=this
if(t.j.b(b)){s=J.a4(b)
if(c>s.gk(b)||d>s.gk(b))throw A.b(A.E("Too few elements"))}r=d-c
q=o.b+r
o.lt(q)
s=o.a
p=a+r
B.f.P(s,p,o.b+r,s,a)
B.f.P(o.a,a,p,b,c)
o.b=q},
lt(a){var s,r=this
if(a<=r.a.length)return
s=r.f3(a)
B.f.ai(s,0,r.b,r.a)
r.a=s},
f3(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
i5(a){var s=this.f3(null)
B.f.ai(s,0,a,this.a)
this.a=s},
P(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ac(c,0,s,null,null))
s=this.a
if(d instanceof A.bg)B.f.P(s,b,c,d.a,e)
else B.f.P(s,b,c,d,e)},
ai(a,b,c,d){return this.P(0,b,c,d,0)}}
A.k4.prototype={}
A.bg.prototype={}
A.va.prototype={}
A.et.prototype={
gaq(){return!0},
B(a,b,c,d){return A.aD(this.a,this.b,a,!1,this.$ti.c)},
O(a){return this.B(a,null,null,null)},
ar(a,b,c){return this.B(a,null,b,c)},
bn(a,b,c){return this.B(a,b,c,null)}}
A.eu.prototype={
u(){var s=this,r=A.mU(null,t.H)
if(s.b==null)return r
s.fA()
s.d=s.b=null
return r},
bq(a){var s,r=this
if(r.b==null)throw A.b(A.E("Subscription has been canceled."))
r.fA()
s=A.yF(new A.rt(a),t.m)
s=s==null?null:A.bC(s)
r.d=s
r.fw()},
dr(a){},
aH(a){var s=this
if(s.b==null)return;++s.a
s.fA()
if(a!=null)a.J(s.gbM())},
ah(){return this.aH(null)},
aj(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.fw()},
fw(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
fA(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$iaf:1}
A.rs.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.rt.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.co.prototype
s.kH=s.j
s=A.b0.prototype
s.kD=s.jq
s.kE=s.jr
s.kG=s.jt
s.kF=s.js
s=A.ca.prototype
s.kM=s.bT
s=A.au.prototype
s.bS=s.M
s.eN=s.a7
s.hw=s.Z
s=A.cc.prototype
s.kN=s.hN
s.kO=s.i2
s.kP=s.iA
s=A.A.prototype
s.hv=s.P
s=A.ah.prototype
s.hu=s.bg
s=A.hv.prototype
s.kQ=s.n
s=A.i0.prototype
s.ht=s.nK
s=A.ea.prototype
s.kJ=s.a_
s.kI=s.D
s=A.cz.prototype
s.kL=s.n
s=A.L.prototype
s.kK=s.fJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1u,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._static_1,n=hunkHelpers._static_0,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_1i,k=hunkHelpers._instance_2u
s(J,"D1","AA",41)
var j
r(j=A.dJ.prototype,"ge5","u",19)
q(j,"gl6","l7",4)
p(j,"gep",0,0,null,["$1","$0"],["aH","ah"],52,0,0)
r(j,"gbM","aj",0)
o(A,"DI","BC",12)
o(A,"DJ","BD",12)
o(A,"DK","BE",12)
o(A,"DL","Dh",17)
n(A,"yH","Dz",0)
o(A,"DM","Di",11)
s(A,"DN","Dk",5)
n(A,"un","Dj",0)
m(A,"DT",5,null,["$5"],["Ds"],168,0)
m(A,"DY",4,null,["$1$4","$4"],["u6",function(a,b,c,d){return A.u6(a,b,c,d,t.z)}],169,0)
m(A,"E_",5,null,["$2$5","$5"],["u8",function(a,b,c,d,e){var i=t.z
return A.u8(a,b,c,d,e,i,i)}],170,0)
m(A,"DZ",6,null,["$3$6","$6"],["u7",function(a,b,c,d,e,f){var i=t.z
return A.u7(a,b,c,d,e,f,i,i,i)}],171,0)
m(A,"DW",4,null,["$1$4","$4"],["yw",function(a,b,c,d){return A.yw(a,b,c,d,t.z)}],172,0)
m(A,"DX",4,null,["$2$4","$4"],["yx",function(a,b,c,d){var i=t.z
return A.yx(a,b,c,d,i,i)}],173,0)
m(A,"DV",4,null,["$3$4","$4"],["yv",function(a,b,c,d){var i=t.z
return A.yv(a,b,c,d,i,i,i)}],174,0)
m(A,"DR",5,null,["$5"],["Dr"],175,0)
m(A,"E0",4,null,["$4"],["u9"],176,0)
m(A,"DQ",5,null,["$5"],["Dq"],177,0)
m(A,"DP",5,null,["$5"],["Dp"],178,0)
m(A,"DU",4,null,["$4"],["Dt"],179,0)
o(A,"DO","Dl",180)
m(A,"DS",5,null,["$5"],["yu"],181,0)
r(j=A.dl.prototype,"gcY","b1",0)
r(j,"gcZ","b2",0)
l(j=A.ca.prototype,"gc2","q",4)
r(j,"gaE","n",3)
q(j,"geQ","M",4)
k(j,"gdM","a7",5)
r(j,"geW","Z",0)
p(A.dm.prototype,"gn0",0,1,null,["$2","$1"],["b6","a8"],44,0,0)
k(A.l.prototype,"gf1","lh",5)
l(j=A.cD.prototype,"gc2","q",4)
p(j,"gfD",0,1,null,["$2","$1"],["ad","mP"],44,0,0)
r(j,"gaE","n",19)
q(j,"geQ","M",4)
k(j,"gdM","a7",5)
r(j,"geW","Z",0)
r(j=A.cB.prototype,"gcY","b1",0)
r(j,"gcZ","b2",0)
p(j=A.au.prototype,"gep",0,0,null,["$1","$0"],["aH","ah"],43,0,0)
r(j,"gbM","aj",0)
r(j,"ge5","u",19)
r(j,"gcY","b1",0)
r(j,"gcZ","b2",0)
p(j=A.es.prototype,"gep",0,0,null,["$1","$0"],["aH","ah"],43,0,0)
r(j,"gbM","aj",0)
r(j,"ge5","u",19)
r(j,"gig","m2",0)
q(j=A.bR.prototype,"glV","lW",4)
k(j,"glZ","m_",5)
r(j,"glX","lY",0)
r(j=A.ew.prototype,"gcY","b1",0)
r(j,"gcZ","b2",0)
q(j,"gfc","fd",4)
k(j,"gfg","fh",139)
r(j,"gfe","ff",0)
r(j=A.eE.prototype,"gcY","b1",0)
r(j,"gcZ","b2",0)
q(j,"gfc","fd",4)
k(j,"gfg","fh",5)
r(j,"gfe","ff",0)
s(A,"w1","CP",24)
o(A,"w2","CQ",25)
s(A,"E4","AH",41)
o(A,"E7","CR",36)
o(A,"E6","C4",182)
l(j=A.jR.prototype,"gc2","q",4)
r(j,"gaE","n",0)
o(A,"yK","Em",25)
s(A,"yJ","El",24)
o(A,"E8","Bu",15)
m(A,"EC",2,null,["$1$2","$2"],["yT",function(a,b){return A.yT(a,b,t.q)}],183,0)
r(j=A.fK.prototype,"gm0","m1",0)
r(j,"gmx","my",0)
r(j,"gmz","mA",0)
r(j,"gmw","iE",39)
k(j=A.f8.prototype,"gnC","aM",24)
q(j,"go6","c5",25)
q(j,"goc","od",17)
o(A,"E2","zV",15)
o(A,"Es","Au",184)
o(A,"EN","BP",185)
o(A,"EO","B0",186)
r(A.km.prototype,"gnI","je",0)
r(A.cj.prototype,"got","h2",0)
r(j=A.jF.prototype,"gn4","e8",85)
r(j,"goX","ex",3)
r(j,"gaE","n",3)
q(j=A.id.prototype,"gor","os",7)
k(j,"gom","on",105)
p(j,"gpr",0,5,null,["$5"],["ps"],106,0,0)
p(j,"gpg",0,3,null,["$3"],["ph"],107,0,0)
p(j,"gp8",0,4,null,["$4"],["p9"],51,0,0)
p(j,"gpn",0,4,null,["$4"],["po"],51,0,0)
p(j,"gpt",0,3,null,["$3"],["pu"],109,0,0)
k(j,"gpy","pz",50)
k(j,"gpe","pf",50)
q(j,"gpc","pd",28)
p(j,"gpv",0,4,null,["$4"],["pw"],46,0,0)
p(j,"gpG",0,4,null,["$4"],["pH"],46,0,0)
k(j,"gpC","pD",113)
k(j,"gpA","pB",13)
k(j,"gpl","pm",13)
k(j,"gpp","pq",13)
k(j,"gpE","pF",13)
k(j,"gpa","pb",13)
q(j,"geF","pi",28)
p(j,"gpj",0,3,null,["$3"],["pk"],115,0,0)
q(j,"geH","px",28)
q(j,"gnk","nl",12)
q(j,"gnf","ng",116)
p(j,"gni",0,5,null,["$5"],["nj"],117,0,0)
p(j,"gnq",0,4,null,["$4"],["nr"],27,0,0)
p(j,"gnu",0,4,null,["$4"],["nv"],27,0,0)
p(j,"gns",0,4,null,["$4"],["nt"],27,0,0)
k(j,"gnw","nx",45)
k(j,"gno","np",45)
p(j,"gnm",0,5,null,["$5"],["nn"],120,0,0)
k(j,"gnd","ne",121)
k(j,"gnb","nc",122)
p(j,"gn9",0,3,null,["$3"],["na"],123,0,0)
r(j=A.cm.prototype,"gaE","n",3)
r(j,"gnM","nN",3)
r(A.e8.prototype,"gaE","n",0)
q(A.jG.prototype,"gjl","fR",2)
r(A.ie.prototype,"glE","lF",0)
q(A.ck.prototype,"giW","iX",141)
q(A.en.prototype,"gjl","fR",2)
o(A,"z6","Bn",187)
r(A.dw.prototype,"gmR","mS",0)
q(A.i3.prototype,"gkv","al",49)
q(A.jx.prototype,"go2","fS",166)
n(A,"EU","BR",125)
r(j=A.eu.prototype,"ge5","u",3)
p(j,"gep",0,0,null,["$1","$0"],["aH","ah"],52,0,0)
r(j,"gbM","aj",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.vh,J.iy,A.fD,J.dH,A.D,A.dJ,A.n,A.i7,A.cU,A.J,A.W,A.A,A.oo,A.ar,A.bF,A.ej,A.io,A.jr,A.ja,A.ii,A.jE,A.iU,A.ff,A.ju,A.jp,A.hn,A.f2,A.ex,A.ct,A.pw,A.iW,A.fb,A.ht,A.nD,A.fp,A.bd,A.iK,A.fl,A.eB,A.jJ,A.fM,A.tt,A.jS,A.kE,A.bv,A.k0,A.tA,A.kA,A.h0,A.jL,A.he,A.ky,A.a1,A.au,A.ca,A.bk,A.dm,A.bj,A.l,A.jK,A.jl,A.cD,A.kz,A.jM,A.h_,A.jW,A.ro,A.eC,A.es,A.bR,A.ha,A.aF,A.kH,A.eL,A.hF,A.k1,A.t5,A.ez,A.k8,A.aI,A.kD,A.fs,A.k9,A.jn,A.ia,A.ah,A.lw,A.qK,A.i9,A.dn,A.t0,A.tu,A.kG,A.cH,A.az,A.jZ,A.bc,A.aY,A.rp,A.iX,A.fI,A.jY,A.aT,A.ix,A.N,A.G,A.kx,A.Y,A.hC,A.pI,A.bl,A.ip,A.vz,A.iV,A.rV,A.rW,A.ik,A.fV,A.fK,A.eF,A.V,A.f8,A.iL,A.eI,A.eA,A.dZ,A.iT,A.jv,A.l4,A.bV,A.i_,A.i0,A.lj,A.fu,A.cp,A.dX,A.dY,A.m_,A.p7,A.nU,A.iZ,A.hQ,A.bI,A.f6,A.f5,A.e3,A.dd,A.d0,A.L,A.dK,A.lH,A.cb,A.fr,A.dQ,A.lG,A.fS,A.m3,A.mF,A.fd,A.dL,A.f9,A.fQ,A.qU,A.fw,A.pg,A.fN,A.lF,A.dO,A.el,A.oP,A.qo,A.cr,A.fU,A.fP,A.fg,A.f1,A.cx,A.o_,A.km,A.vH,A.pi,A.cj,A.ed,A.fZ,A.hr,A.h7,A.h4,A.jF,A.i8,A.rq,A.mm,A.nY,A.os,A.jd,A.ea,A.n1,A.aP,A.bA,A.bx,A.jg,A.b5,A.db,A.mn,A.cE,A.ou,A.cV,A.aC,A.i1,A.m5,A.kr,A.kn,A.nq,A.f7,A.c7,A.fH,A.pX,A.pS,A.pZ,A.pY,A.dj,A.cy,A.id,A.dp,A.pT,A.lc,A.hd,A.ru,A.ka,A.k3,A.t7,A.pN,A.dM,A.ok,A.f0,A.jT,A.j5,A.ml,A.ic,A.cz,A.iq,A.mZ,A.bX,A.ie,A.e_,A.cW,A.nZ,A.d7,A.rn,A.tM,A.rl,A.hu,A.eo,A.ig,A.qj,A.th,A.jh,A.ci,A.jw,A.fE,A.dw,A.i3,A.jx,A.q7,A.fh,A.ep,A.p6,A.va,A.eu])
q(J.iy,[J.iB,J.dU,J.ai,J.aQ,J.dW,J.dV,J.cn])
q(J.ai,[J.co,J.t,A.e0,A.fy])
q(J.co,[J.j_,J.df,J.aZ])
r(J.iA,A.fD)
r(J.nz,J.t)
q(J.dV,[J.fk,J.iC])
q(A.D,[A.cT,A.eG,A.fL,A.dq,A.bB,A.b7,A.c9,A.eY,A.et])
q(A.n,[A.cA,A.x,A.bZ,A.c8,A.fc,A.de,A.c2,A.fY,A.fB,A.hf,A.jI,A.kw,A.eH,A.d2])
q(A.cA,[A.cR,A.hG])
r(A.h9,A.cR)
r(A.h3,A.hG)
q(A.cU,[A.lL,A.lD,A.lK,A.nr,A.pk,A.uA,A.uC,A.qB,A.qA,A.tP,A.tO,A.tv,A.tx,A.tw,A.mX,A.mP,A.mT,A.rx,A.rw,A.rI,A.rL,A.oF,A.oM,A.oK,A.oN,A.oI,A.rk,A.rj,A.tf,A.te,A.rg,A.t4,A.nI,A.m2,A.mJ,A.qP,A.mQ,A.uE,A.uV,A.uW,A.oC,A.oB,A.lz,A.lB,A.li,A.lo,A.tR,A.lx,A.nN,A.ut,A.m0,A.m1,A.ul,A.uT,A.uS,A.u1,A.lv,A.lt,A.lu,A.lq,A.lI,A.m4,A.nP,A.uL,A.uJ,A.uo,A.v1,A.pL,A.oY,A.oZ,A.oR,A.oS,A.oU,A.oV,A.p4,A.p3,A.p_,A.p2,A.p1,A.oW,A.qp,A.qw,A.qv,A.qu,A.qq,A.qr,A.qt,A.nw,A.nx,A.lY,A.p9,A.pb,A.pc,A.pe,A.pH,A.qi,A.uG,A.uH,A.uF,A.n3,A.n2,A.n4,A.n6,A.n8,A.n5,A.nm,A.oy,A.mv,A.tq,A.uR,A.uX,A.uY,A.l7,A.re,A.rf,A.lO,A.lP,A.lT,A.lU,A.lV,A.mL,A.lf,A.ld,A.rP,A.rS,A.rT,A.np,A.nn,A.rO,A.or,A.pO,A.pP,A.pQ,A.pR,A.o4,A.o5,A.o3,A.o2,A.o1,A.od,A.o9,A.og,A.oh,A.oa,A.q5,A.my,A.nQ,A.mK,A.ol,A.om,A.uq,A.lM,A.lN,A.lQ,A.lR,A.lS,A.tY,A.r0,A.qZ,A.r4,A.r7,A.qX,A.ti,A.tj,A.tl,A.ox,A.ov,A.ow,A.pF,A.pE,A.uf,A.ui,A.ps,A.pm,A.pn,A.po,A.pt,A.pr,A.q1,A.q4,A.q3,A.q2,A.q0,A.lm,A.lk,A.ll,A.qQ,A.pB,A.qb,A.qa,A.l9,A.lb,A.rs,A.rt])
q(A.lL,[A.qV,A.lE,A.lZ,A.nA,A.uB,A.tQ,A.um,A.mY,A.mO,A.ry,A.rJ,A.rM,A.qy,A.tS,A.n0,A.nE,A.nK,A.mI,A.t1,A.qO,A.pJ,A.mS,A.mR,A.ly,A.lA,A.lC,A.lh,A.nO,A.mG,A.v2,A.p5,A.qs,A.ph,A.vn,A.lX,A.pd,A.n7,A.rU,A.q6,A.rb,A.qm,A.pG,A.uk,A.tZ])
r(A.ag,A.h3)
q(A.J,[A.cS,A.b0,A.cc,A.k5])
q(A.W,[A.d1,A.c5,A.iD,A.jt,A.j7,A.jX,A.e2,A.fn,A.hW,A.a6,A.fR,A.js,A.b6,A.ib,A.iM])
q(A.A,[A.ef,A.ei,A.ck,A.ee])
q(A.ef,[A.br,A.dg])
q(A.lK,[A.uQ,A.qC,A.qD,A.tz,A.ty,A.tN,A.qF,A.qG,A.qI,A.qJ,A.qH,A.qE,A.mV,A.rz,A.rE,A.rD,A.rB,A.rA,A.rH,A.rG,A.rF,A.rK,A.oG,A.oL,A.oJ,A.oO,A.oH,A.tp,A.to,A.qx,A.qT,A.qS,A.t8,A.t6,A.tT,A.tU,A.ri,A.rh,A.td,A.tc,A.u5,A.tJ,A.tI,A.u2,A.u0,A.oD,A.oE,A.oA,A.ln,A.u3,A.u4,A.nM,A.nH,A.l2,A.l3,A.uM,A.uK,A.uN,A.uO,A.uP,A.v0,A.pM,A.oX,A.oQ,A.oT,A.p0,A.tX,A.oi,A.ta,A.pj,A.lW,A.pf,A.pa,A.qe,A.qf,A.qg,A.qh,A.nl,A.n9,A.ng,A.nh,A.ni,A.nj,A.ne,A.nf,A.na,A.nb,A.nc,A.nd,A.nk,A.rN,A.mw,A.mx,A.mt,A.ms,A.mu,A.mp,A.mo,A.mq,A.mr,A.tr,A.ts,A.uZ,A.ma,A.m7,A.mc,A.me,A.mg,A.m9,A.mf,A.mk,A.mi,A.mh,A.mb,A.md,A.mj,A.m8,A.l5,A.l6,A.pU,A.le,A.rQ,A.rR,A.rv,A.no,A.o6,A.oe,A.of,A.ob,A.oc,A.mz,A.mA,A.nS,A.nR,A.r9,A.rd,A.ra,A.rc,A.qY,A.r3,A.r6,A.r_,A.r5,A.r8,A.r1,A.r2,A.mD,A.mC,A.mB,A.qk,A.ql,A.tm,A.tk,A.tn,A.ug,A.uh,A.ub,A.ua,A.uj,A.uc,A.ud,A.ue,A.pu,A.pp,A.pq,A.pl,A.q_,A.tG,A.tF,A.tE,A.tD,A.pC,A.pD,A.q9,A.la])
q(A.x,[A.X,A.cZ,A.b1,A.be,A.ax,A.hc])
q(A.X,[A.dc,A.ab,A.d9,A.fq,A.k6])
r(A.cY,A.bZ)
r(A.fa,A.de)
r(A.dP,A.c2)
q(A.hn,[A.kb,A.kc,A.kd,A.ke])
r(A.ho,A.kb)
q(A.kc,[A.a3,A.hp,A.hq,A.kf,A.eD,A.kg,A.kh])
q(A.kd,[A.cC,A.ki,A.kj,A.kk])
r(A.kl,A.ke)
r(A.bs,A.f2)
q(A.ct,[A.f3,A.hs])
r(A.f4,A.f3)
r(A.fj,A.nr)
r(A.fC,A.c5)
q(A.pk,[A.oz,A.eZ])
q(A.b0,[A.fm,A.hg])
r(A.bG,A.e0)
q(A.fy,[A.fx,A.e1])
q(A.e1,[A.hi,A.hk])
r(A.hj,A.hi)
r(A.cq,A.hj)
r(A.hl,A.hk)
r(A.b3,A.hl)
q(A.cq,[A.iN,A.iO])
q(A.b3,[A.iP,A.iQ,A.iR,A.iS,A.fz,A.fA,A.d4])
r(A.hw,A.jX)
r(A.a7,A.eG)
r(A.aA,A.a7)
q(A.au,[A.cB,A.ew,A.eE])
r(A.dl,A.cB)
q(A.ca,[A.dv,A.h1])
q(A.dm,[A.ad,A.O])
q(A.cD,[A.bO,A.cF])
r(A.kv,A.h_)
q(A.jW,[A.bz,A.er])
r(A.hh,A.bO)
q(A.b7,[A.cf,A.aL])
q(A.jl,[A.ku,A.nC])
q(A.kH,[A.jU,A.kq])
q(A.cc,[A.ds,A.h5])
r(A.cd,A.hs)
r(A.hB,A.fs)
r(A.dh,A.hB)
q(A.jn,[A.hv,A.tB,A.t3,A.du])
r(A.rY,A.hv)
q(A.ia,[A.d_,A.lg,A.nB])
q(A.d_,[A.hT,A.iH,A.jA])
q(A.ah,[A.kC,A.kB,A.hZ,A.iG,A.iF,A.jC,A.jB])
q(A.kC,[A.hV,A.iJ])
q(A.kB,[A.hU,A.iI])
q(A.lw,[A.rr,A.tg,A.qL,A.jQ,A.jR,A.k7,A.kF])
r(A.qR,A.qK)
r(A.qz,A.qL)
r(A.iE,A.fn)
r(A.rZ,A.i9)
r(A.t_,A.t0)
r(A.t2,A.k7)
r(A.ey,A.t3)
r(A.kI,A.kG)
r(A.tK,A.kI)
q(A.a6,[A.e5,A.fi])
r(A.jV,A.hC)
r(A.da,A.eI)
r(A.cs,A.bV)
q(A.i_,[A.i4,A.e6])
r(A.cQ,A.fL)
r(A.oj,A.i0)
r(A.jH,A.oj)
r(A.hR,A.jH)
q(A.lj,[A.e7,A.cw])
r(A.jm,A.cw)
r(A.f_,A.V)
r(A.nv,A.p7)
q(A.nv,[A.nV,A.pK,A.qd])
q(A.rp,[A.fT,A.jq,A.dN,A.am,A.eb,A.nT,A.dR,A.fv,A.cl,A.by,A.fe,A.cu,A.bW])
r(A.bf,A.L)
q(A.cb,[A.hm,A.em,A.h8])
q(A.lF,[A.fo,A.d8])
r(A.iz,A.o_)
q(A.mm,[A.l8,A.rm])
r(A.nW,A.l8)
r(A.is,A.jd)
q(A.ea,[A.ev,A.jf])
r(A.e9,A.jg)
r(A.c3,A.jf)
r(A.ec,A.cV)
r(A.i2,A.aC)
q(A.i2,[A.iu,A.cm,A.e8])
q(A.i1,[A.k2,A.kt])
r(A.ko,A.m5)
r(A.kp,A.ko)
r(A.bJ,A.kp)
r(A.ks,A.kr)
r(A.aU,A.ks)
q(A.aI,[A.dk,A.aE])
r(A.eh,A.ou)
q(A.aE,[A.hb,A.h6,A.eq,A.eK])
r(A.o0,A.ok)
q(A.o0,[A.jG,A.en])
r(A.m6,A.ic)
r(A.bq,A.d7)
r(A.ji,A.jh)
r(A.jj,A.ji)
r(A.fF,A.fE)
r(A.jD,A.jj)
r(A.ce,A.jw)
r(A.hY,A.cz)
r(A.jo,A.e9)
r(A.k4,A.ee)
r(A.bg,A.k4)
s(A.ef,A.ju)
s(A.hG,A.A)
s(A.hi,A.A)
s(A.hj,A.ff)
s(A.hk,A.A)
s(A.hl,A.ff)
s(A.bO,A.jM)
s(A.cF,A.kz)
s(A.hB,A.kD)
s(A.kI,A.jn)
s(A.jH,A.l4)
s(A.ko,A.A)
s(A.kp,A.iT)
s(A.kr,A.jv)
s(A.ks,A.J)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",Z:"double",bT:"num",j:"String",H:"bool",G:"Null",r:"List",k:"Object",a_:"Map",u:"JSObject"},mangledNames:{},types:["~()","G()","~(u)","o<~>()","~(k?)","~(k,ae)","G(k,ae)","~(a)","~(fw)","G(~)","G(@)","~(@)","~(~())","a(aO,a)","G(u)","j(j)","o<bJ>()","H(k?)","u()","o<@>()","o<~>(hd)","~(~)","H(aP)","o<~>(o<~>)","H(k?,k?)","a(k?)","H(j)","~(j4,a,a,a)","a(aO)","a()","~(@,@)","~(dw)","o<cz>()","H()","~(k?,k?)","~(b5)","@(@)","o<af<~>>()","u(k)","o<~>?()","@()","a(@,@)","u(H)","~([o<~>?])","~(k[ae?])","~(j4,a)","a(aO,a,a,aQ)","~(j,j)","j(d3)","~(L)","a(aC,a)","a(aC,a,a,a)","~([o<@>?])","~(dX)","j(k?)","o<j>(aK)","o<G>()","a(+atLast,priority,sinceLast,targetCount(a,a,a,a))","N<j,+atLast,priority,sinceLast,targetCount(a,a,a,a)>(j,k?)","H(+hasSynced,lastSyncedAt,priority(H?,bc?,a))","o<~>(af<~>)","o<+immediateRestart(H)>()","G(@,ae)","~(a,@)","o<j>()","o<j>(o<~>)","o<e7>(o<~>)","o<dT?>()","o<dT?>(aK)","a_<j,@>(+name,parameters(j,j))","o<+immediateRestart(H)>(o<~>)","o<~>(aK)","D<aS>?(cw)","G(bI?)","~(j,k?)","dO(k?)","ed()","o<+(k,G)>(am,k)","e6()","H(cb)","l<@>?()","o<bI?>({invalidate!H})","o<j?>(j,j)","~(cx)","+name,parameters(j,j)(k?)","o<bI?>()","o<~>(u)","o<+(G,G)>()","o<+(u,G)>()","o<+(bG?,t<k?>?)>()","+(k?,t<k?>?)/()","@(j)","j?()","a(bA)","u?()","k(bA)","k(aP)","a(aP,aP)","r<bA>(N<k,r<aP>>)","o<H>(aK)","c3()","o<j?>(aB)","~(a,j,a)","H(bf)","~(B,aa,B,~())","~(aQ,a)","aO?(aC,a,a,a,a)","a(aC,a,a)","bf(L)","a(aC?,a,a)","j(j?)","dY()","fu()","a(aO,aQ)","G(~())","a(aO,a,a)","a(a())","~(~(a,j,a),a,a,a,aQ)","~(r<a>)","~(c_<r<a>>)","a(j4,a,a,a,a)","a(a(a),a)","a(vp,a)","a(vp,a,a)","G(j,j[k?])","ep()","a(j)","u(u?)","~(cP)","o<~>(a,bh)","o<~>(a)","bh()","o<u>(j)","G(bX)","o<G>(u)","H(j,j)","k?(k?)","G(k?,ae)","j?(k?)","~(@,ae)","j?(j?)","~(cV)","u(u)","o<0^>(0^())<k?>","o<u>()","k?(~)","G(aZ,aZ)","o<af<b5>>()","@(@,j)","0&(j,a?)","H(eo)","a(a)","o<cW>()","0&(k?,ae)","o<bJ>(aB)","o<aU?>(aB)","L(L,L)","D<L>(D<L>)","H(L)","a(a,a)","~(c_<bw<j>>)","j(Y)","0&(bq,ae)","Y(Y,j)","L?(u)","H(L?)","o<k?>(k?)","dn<@,@>(aj<@>)","~(B?,aa?,B,k,ae)","0^(B?,aa?,B,0^())<k?>","0^(B?,aa?,B,0^(1^),1^)<k?,k?>","0^(B?,aa?,B,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(B,aa,B,0^())<k?>","0^(1^)(B,aa,B,0^(1^))<k?,k?>","0^(1^,2^)(B,aa,B,0^(1^,2^))<k?,k?,k?>","a1?(B,aa,B,k,ae?)","~(B?,aa?,B,~())","fO(B,aa,B,aY,~())","fO(B,aa,B,aY,~(fO))","~(B,aa,B,j)","~(j)","B(B?,aa?,B,vy?,a_<k?,k?>?)","ey(aj<j>)","0^(0^,0^)<bT>","aM(a_<j,k?>)","el(aj<bh>)","cr(k)","L(bw<j>)","u(t<k?>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"1;immediateRestart":a=>b=>b instanceof A.ho&&a.b(b.a),"2;":(a,b)=>c=>c instanceof A.a3&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.hp&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.hq&&a.b(c.a)&&b.b(c.b),"2;downloaded,total":(a,b)=>c=>c instanceof A.kf&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.eD&&a.b(c.a)&&b.b(c.b),"2;name,parameters":(a,b)=>c=>c instanceof A.kg&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.kh&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cC&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;autocommit,lastInsertRowid,result":(a,b,c)=>d=>d instanceof A.ki&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;connectName,connectPort,lockName":(a,b,c)=>d=>d instanceof A.kj&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;hasSynced,lastSyncedAt,priority":(a,b,c)=>d=>d instanceof A.kk&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;atLast,priority,sinceLast,targetCount":a=>b=>b instanceof A.kl&&A.ED(a,b.a)}}
A.Co(v.typeUniverse,JSON.parse('{"aZ":"co","j_":"co","df":"co","F7":"e0","t":{"r":["1"],"ai":[],"x":["1"],"u":[],"n":["1"],"aH":["1"]},"iB":{"H":[],"a0":[]},"dU":{"G":[],"a0":[]},"ai":{"u":[]},"co":{"ai":[],"u":[]},"iA":{"fD":[]},"nz":{"t":["1"],"r":["1"],"ai":[],"x":["1"],"u":[],"n":["1"],"aH":["1"]},"dV":{"Z":[],"a9":["bT"]},"fk":{"Z":[],"a":[],"a9":["bT"],"a0":[]},"iC":{"Z":[],"a9":["bT"],"a0":[]},"cn":{"j":[],"a9":["j"],"aH":["@"],"a0":[]},"cT":{"D":["2"],"D.T":"2"},"dJ":{"af":["2"]},"cA":{"n":["2"]},"cR":{"cA":["1","2"],"n":["2"],"n.E":"2"},"h9":{"cR":["1","2"],"cA":["1","2"],"x":["2"],"n":["2"],"n.E":"2"},"h3":{"A":["2"],"r":["2"],"cA":["1","2"],"x":["2"],"n":["2"]},"ag":{"h3":["1","2"],"A":["2"],"r":["2"],"cA":["1","2"],"x":["2"],"n":["2"],"A.E":"2","n.E":"2"},"cS":{"J":["3","4"],"a_":["3","4"],"J.V":"4","J.K":"3"},"d1":{"W":[]},"br":{"A":["a"],"r":["a"],"x":["a"],"n":["a"],"A.E":"a"},"x":{"n":["1"]},"X":{"x":["1"],"n":["1"]},"dc":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"bZ":{"n":["2"],"n.E":"2"},"cY":{"bZ":["1","2"],"x":["2"],"n":["2"],"n.E":"2"},"ab":{"X":["2"],"x":["2"],"n":["2"],"X.E":"2","n.E":"2"},"c8":{"n":["1"],"n.E":"1"},"fc":{"n":["2"],"n.E":"2"},"de":{"n":["1"],"n.E":"1"},"fa":{"de":["1"],"x":["1"],"n":["1"],"n.E":"1"},"c2":{"n":["1"],"n.E":"1"},"dP":{"c2":["1"],"x":["1"],"n":["1"],"n.E":"1"},"cZ":{"x":["1"],"n":["1"],"n.E":"1"},"fY":{"n":["1"],"n.E":"1"},"fB":{"n":["1"],"n.E":"1"},"ef":{"A":["1"],"r":["1"],"x":["1"],"n":["1"]},"d9":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"f2":{"a_":["1","2"]},"bs":{"f2":["1","2"],"a_":["1","2"]},"hf":{"n":["1"],"n.E":"1"},"f3":{"ct":["1"],"bw":["1"],"x":["1"],"n":["1"]},"f4":{"ct":["1"],"bw":["1"],"x":["1"],"n":["1"]},"fC":{"c5":[],"W":[]},"iD":{"W":[]},"jt":{"W":[]},"iW":{"Q":[]},"ht":{"ae":[]},"j7":{"W":[]},"b0":{"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"b1":{"x":["1"],"n":["1"],"n.E":"1"},"be":{"x":["1"],"n":["1"],"n.E":"1"},"ax":{"x":["N<1,2>"],"n":["N<1,2>"],"n.E":"N<1,2>"},"fm":{"b0":["1","2"],"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"eB":{"j3":[],"d3":[]},"jI":{"n":["j3"],"n.E":"j3"},"fM":{"d3":[]},"kw":{"n":["d3"],"n.E":"d3"},"bG":{"ai":[],"u":[],"cP":[],"a0":[]},"e0":{"ai":[],"u":[],"cP":[],"a0":[]},"fy":{"ai":[],"u":[]},"kE":{"cP":[]},"fx":{"ai":[],"v7":[],"u":[],"a0":[]},"e1":{"b_":["1"],"ai":[],"u":[],"aH":["1"]},"cq":{"A":["Z"],"r":["Z"],"b_":["Z"],"ai":[],"x":["Z"],"u":[],"aH":["Z"],"n":["Z"]},"b3":{"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"]},"iN":{"cq":[],"mM":[],"A":["Z"],"r":["Z"],"b_":["Z"],"ai":[],"x":["Z"],"u":[],"aH":["Z"],"n":["Z"],"a0":[],"A.E":"Z"},"iO":{"cq":[],"mN":[],"A":["Z"],"r":["Z"],"b_":["Z"],"ai":[],"x":["Z"],"u":[],"aH":["Z"],"n":["Z"],"a0":[],"A.E":"Z"},"iP":{"b3":[],"ns":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"iQ":{"b3":[],"nt":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"iR":{"b3":[],"nu":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"iS":{"b3":[],"py":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"fz":{"b3":[],"pz":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"fA":{"b3":[],"pA":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"d4":{"b3":[],"bh":[],"A":["a"],"r":["a"],"b_":["a"],"ai":[],"x":["a"],"u":[],"aH":["a"],"n":["a"],"a0":[],"A.E":"a"},"jX":{"W":[]},"hw":{"c5":[],"W":[]},"a1":{"W":[]},"l":{"o":["1"]},"c_":{"bK":["1"],"aj":["1"]},"bK":{"aj":["1"]},"au":{"af":["1"],"au.T":"1"},"h0":{"cX":["1"]},"eH":{"n":["1"],"n.E":"1"},"aA":{"a7":["1"],"eG":["1"],"D":["1"],"D.T":"1"},"dl":{"cB":["1"],"au":["1"],"af":["1"],"au.T":"1"},"ca":{"bK":["1"],"aj":["1"]},"dv":{"ca":["1"],"bK":["1"],"aj":["1"]},"h1":{"ca":["1"],"bK":["1"],"aj":["1"]},"e2":{"W":[]},"dm":{"cX":["1"]},"ad":{"dm":["1"],"cX":["1"]},"O":{"dm":["1"],"cX":["1"]},"fL":{"D":["1"]},"cD":{"bK":["1"],"aj":["1"]},"bO":{"cD":["1"],"bK":["1"],"aj":["1"]},"cF":{"cD":["1"],"bK":["1"],"aj":["1"]},"a7":{"eG":["1"],"D":["1"],"D.T":"1"},"cB":{"au":["1"],"af":["1"],"au.T":"1"},"eG":{"D":["1"]},"es":{"af":["1"]},"dq":{"D":["1"],"D.T":"1"},"bB":{"D":["1"],"D.T":"1"},"hh":{"bO":["1"],"cD":["1"],"c_":["1"],"bK":["1"],"aj":["1"]},"b7":{"D":["2"]},"ew":{"au":["2"],"af":["2"],"au.T":"2"},"cf":{"b7":["1","1"],"D":["1"],"D.T":"1","b7.T":"1","b7.S":"1"},"aL":{"b7":["1","2"],"D":["2"],"D.T":"2","b7.T":"2","b7.S":"1"},"ha":{"aj":["1"]},"eE":{"au":["2"],"af":["2"],"au.T":"2"},"c9":{"D":["2"],"D.T":"2"},"kH":{"B":[]},"jU":{"B":[]},"kq":{"B":[]},"eL":{"aa":[]},"hF":{"vy":[]},"cc":{"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"ds":{"cc":["1","2"],"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"h5":{"cc":["1","2"],"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"hc":{"x":["1"],"n":["1"],"n.E":"1"},"hg":{"b0":["1","2"],"J":["1","2"],"a_":["1","2"],"J.V":"2","J.K":"1"},"cd":{"hs":["1"],"ct":["1"],"bw":["1"],"x":["1"],"n":["1"]},"dg":{"A":["1"],"r":["1"],"x":["1"],"n":["1"],"A.E":"1"},"d2":{"n":["1"],"n.E":"1"},"A":{"r":["1"],"x":["1"],"n":["1"]},"J":{"a_":["1","2"]},"fs":{"a_":["1","2"]},"dh":{"fs":["1","2"],"kD":["1","2"],"a_":["1","2"]},"fq":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"ct":{"bw":["1"],"x":["1"],"n":["1"]},"hs":{"ct":["1"],"bw":["1"],"x":["1"],"n":["1"]},"dn":{"aj":["1"]},"ey":{"aj":["j"]},"k5":{"J":["j","@"],"a_":["j","@"],"J.V":"@","J.K":"j"},"k6":{"X":["j"],"x":["j"],"n":["j"],"X.E":"j","n.E":"j"},"hT":{"d_":[]},"kC":{"ah":["j","r<a>"]},"hV":{"ah":["j","r<a>"],"ah.T":"r<a>"},"kB":{"ah":["r<a>","j"]},"hU":{"ah":["r<a>","j"],"ah.T":"j"},"hZ":{"ah":["r<a>","j"],"ah.T":"j"},"fn":{"W":[]},"iE":{"W":[]},"iG":{"ah":["k?","j"],"ah.T":"j"},"iF":{"ah":["j","k?"],"ah.T":"k?"},"iH":{"d_":[]},"iJ":{"ah":["j","r<a>"],"ah.T":"r<a>"},"iI":{"ah":["r<a>","j"],"ah.T":"j"},"jA":{"d_":[]},"jC":{"ah":["j","r<a>"],"ah.T":"r<a>"},"jB":{"ah":["r<a>","j"],"ah.T":"j"},"wt":{"a9":["wt"]},"bc":{"a9":["bc"]},"Z":{"a9":["bT"]},"aY":{"a9":["aY"]},"a":{"a9":["bT"]},"r":{"x":["1"],"n":["1"]},"bT":{"a9":["bT"]},"j3":{"d3":[]},"bw":{"x":["1"],"n":["1"]},"j":{"a9":["j"]},"az":{"a9":["wt"]},"hW":{"W":[]},"c5":{"W":[]},"a6":{"W":[]},"e5":{"W":[]},"fi":{"W":[]},"fR":{"W":[]},"js":{"W":[]},"b6":{"W":[]},"ib":{"W":[]},"iX":{"W":[]},"fI":{"W":[]},"jY":{"Q":[]},"aT":{"Q":[]},"ix":{"Q":[],"W":[]},"kx":{"ae":[]},"hC":{"jy":[]},"bl":{"jy":[]},"jV":{"jy":[]},"iV":{"Q":[]},"V":{"a_":["2","3"]},"da":{"eI":["1","bw<1>"],"eI.E":"1"},"cs":{"Q":[]},"i_":{"lJ":[]},"i4":{"lJ":[]},"cQ":{"D":["r<a>"],"D.T":"r<a>"},"bV":{"Q":[]},"jm":{"cw":[]},"f_":{"V":["j","j","1"],"a_":["j","1"],"V.K":"j","V.V":"1","V.C":"j"},"cp":{"a9":["cp"]},"iZ":{"Q":[]},"dd":{"Q":[]},"f5":{"Q":[]},"e3":{"Q":[]},"d0":{"dT":[]},"bf":{"L":[]},"dK":{"Q":[]},"hm":{"cb":[]},"em":{"cb":[]},"h8":{"cb":[]},"fr":{"c1":[],"aM":[]},"dQ":{"aM":[]},"fS":{"c1":[],"aM":[]},"fd":{"c1":[],"aM":[]},"dL":{"aM":[]},"f9":{"c1":[],"aM":[]},"fQ":{"c1":[],"aM":[]},"el":{"aj":["r<a>"]},"cr":{"aS":[]},"dN":{"aS":[]},"fU":{"aS":[]},"fP":{"aS":[]},"fg":{"aS":[]},"f1":{"aS":[]},"e6":{"lJ":[]},"fZ":{"bQ":[]},"hr":{"bQ":[]},"h7":{"bQ":[]},"h4":{"bQ":[]},"i8":{"Q":[]},"is":{"bx":[],"a9":["bx"]},"ev":{"c3":[],"a9":["je"]},"bx":{"a9":["bx"]},"jd":{"bx":[],"a9":["bx"]},"je":{"a9":["je"]},"jf":{"a9":["je"]},"jg":{"Q":[]},"e9":{"aT":[],"Q":[]},"ea":{"a9":["je"]},"c3":{"a9":["je"]},"db":{"Q":[]},"ec":{"cV":[]},"iu":{"aC":[]},"k2":{"fW":[],"aO":[]},"bJ":{"A":["aU"],"r":["aU"],"x":["aU"],"n":["aU"],"A.E":"aU"},"aU":{"jv":["j","@"],"J":["j","@"],"a_":["j","@"],"J.V":"@","J.K":"j"},"c7":{"Q":[]},"i2":{"aC":[]},"i1":{"fW":[],"aO":[]},"dk":{"aI":["dk"],"aI.E":"dk"},"ei":{"A":["cy"],"r":["cy"],"x":["cy"],"n":["cy"],"A.E":"cy"},"eY":{"D":["1"],"D.T":"1"},"cm":{"aC":[]},"aE":{"aI":["aE"]},"k3":{"fW":[],"aO":[]},"hb":{"aE":[],"aI":["aE"],"aI.E":"aE"},"h6":{"aE":[],"aI":["aE"],"aI.E":"aE"},"eq":{"aE":[],"aI":["aE"],"aI.E":"aE"},"eK":{"aE":[],"aI":["aE"],"aI.E":"aE"},"e8":{"aC":[]},"kt":{"fW":[],"aO":[]},"f0":{"Q":[]},"j5":{"wB":[]},"ck":{"A":["k?"],"r":["k?"],"x":["k?"],"n":["k?"],"A.E":"k?"},"bq":{"Q":[]},"d7":{"Q":[]},"en":{"wy":[]},"iM":{"W":[]},"ji":{"aK":[],"aB":[]},"jj":{"aK":[],"aB":[]},"ci":{"Q":[]},"jw":{"aB":[]},"fE":{"aB":[]},"fF":{"aK":[],"aB":[]},"aK":{"aB":[]},"jh":{"aK":[],"aB":[]},"ce":{"aB":[]},"jD":{"vw":[],"aK":[],"aB":[]},"hY":{"cz":[]},"jo":{"aT":[],"Q":[]},"bg":{"ee":["a"],"A":["a"],"r":["a"],"x":["a"],"n":["a"],"A.E":"a"},"ee":{"A":["1"],"r":["1"],"x":["1"],"n":["1"]},"k4":{"ee":["a"],"A":["a"],"r":["a"],"x":["a"],"n":["a"]},"et":{"D":["1"],"D.T":"1"},"eu":{"af":["1"]},"nu":{"r":["a"],"x":["a"],"n":["a"]},"bh":{"r":["a"],"x":["a"],"n":["a"]},"pA":{"r":["a"],"x":["a"],"n":["a"]},"ns":{"r":["a"],"x":["a"],"n":["a"]},"py":{"r":["a"],"x":["a"],"n":["a"]},"nt":{"r":["a"],"x":["a"],"n":["a"]},"pz":{"r":["a"],"x":["a"],"n":["a"]},"mM":{"r":["Z"],"x":["Z"],"n":["Z"]},"mN":{"r":["Z"],"x":["Z"],"n":["Z"]},"vw":{"aK":[],"aB":[]}}'))
A.Cn(v.typeUniverse,JSON.parse('{"ej":1,"ja":1,"ii":1,"iU":1,"ff":1,"ju":1,"ef":1,"hG":2,"f3":1,"fp":1,"bd":1,"e1":1,"aj":1,"ky":1,"e2":2,"fL":1,"jl":2,"kz":1,"jM":1,"h_":1,"kv":1,"jW":1,"bz":1,"eC":1,"bR":1,"ha":1,"ku":2,"aF":1,"hB":2,"dn":2,"i9":1,"ia":2,"hv":1,"ip":1,"fV":1,"f8":1,"iT":1,"fv":1,"zS":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",D:" must not be greater than the number of characters in the file, ",U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t:"Broadcast stream controllers do not support pause callbacks",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",c:"Cannot fire new event. Controller is already firing an event",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",B:"SELECT seq FROM main.sqlite_sequence WHERE name = 'ps_crud'",f:"Tried to operate on a released prepared statement",y:"handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.al
return{fM:s("@<@>"),fN:s("bq"),ie:s("zS<k?>"),om:s("eY<t<k?>>"),lo:s("cP"),fW:s("v7"),kj:s("f_<j>"),eg:s("wy"),dF:s("lJ()"),V:s("br"),fw:s("cV"),bP:s("a9<@>"),p6:s("cW"),br:s("cX<u>"),kn:s("cX<k?>"),oh:s("cX<~>"),hM:s("cj"),em:s("dO"),kS:s("wB"),lp:s("ig"),O:s("x<@>"),C:s("W"),L:s("Q"),eZ:s("iq"),pk:s("mM"),kI:s("mN"),lW:s("aT"),gY:s("F2"),nW:s("o<u>"),mj:s("o<G>"),nK:s("o<+(k?,t<k?>?)>"),fP:s("o<bX?>"),cI:s("o<j?>"),jN:s("o<eh?>"),p8:s("o<~>"),cF:s("cm"),m6:s("ns"),bW:s("nt"),g2:s("dT"),jx:s("nu"),ks:s("n<aM>"),e7:s("n<@>"),iw:s("t<o<~>>"),W:s("t<u>"),dO:s("t<r<k?>>"),hf:s("t<k>"),fU:s("t<+controller,sync(c_<b5>,H)>"),lw:s("t<+controller,sync(c_<~>,H)>"),kC:s("t<+(cu,j)>"),bN:s("t<+name,parameters(j,j)>"),cH:s("t<+hasSynced,lastSyncedAt,priority(H?,bc?,a)>"),lE:s("t<ec>"),a6:s("t<af<L>>"),bO:s("t<af<~>>"),fu:s("t<D<aS>>"),i3:s("t<D<~>>"),s:s("t<j>"),az:s("t<en>"),ba:s("t<eo>"),dB:s("t<bk<@>>"),g7:s("t<aP>"),dg:s("t<bA>"),o6:s("t<ka>"),jI:s("t<dw>"),gk:s("t<Z>"),dG:s("t<@>"),t:s("t<a>"),b9:s("t<a1?>"),fT:s("t<t<k?>?>"),c:s("t<k?>"),mf:s("t<j?>"),iy:s("aH<@>"),v:s("dU"),m:s("u"),bJ:s("aQ"),g:s("aZ"),dX:s("b_<@>"),d9:s("ai"),kk:s("d2<dk>"),p3:s("d2<aE>"),mu:s("r<t<k?>>"),ip:s("r<u>"),eL:s("r<+name,parameters(j,j)>"),k:s("r<j>"),j:s("r<@>"),f4:s("r<a>"),ia:s("r<k?>"),fi:s("r<j?>"),ag:s("dX"),I:s("dY"),gc:s("N<j,j>"),lx:s("N<j,+atLast,priority,sinceLast,targetCount(a,a,a,a)>"),ea:s("a_<j,@>"),dV:s("a_<j,a>"),av:s("a_<@,@>"),f:s("a_<j,k?>"),iZ:s("ab<j,@>"),jC:s("F6"),a:s("bG"),dQ:s("cq"),aj:s("b3"),Z:s("d4"),M:s("c1"),bC:s("fB<o<~>>"),P:s("G"),K:s("k"),lZ:s("F9"),aK:s("+()"),U:s("+immediateRestart(H)"),ja:s("+(u,dM)"),iS:s("+(u,G)"),lg:s("+(G,G)"),k0:s("+(k,G)"),cU:s("+(cu,j)"),E:s("+name,parameters(j,j)"),l4:s("+(am,k)"),mk:s("+(H,u)"),kO:s("+basicSupport,supportsReadWriteUnsafe(H,H)"),mt:s("+(u?,u)"),jc:s("+(bG?,t<k?>?)"),iu:s("+(k?,t<k?>?)"),ii:s("+autocommit,lastInsertRowid,result(H,a,bJ)"),cV:s("+atLast,priority,sinceLast,targetCount(a,a,a,a)"),lu:s("j3"),Y:s("e7"),G:s("bJ"),hF:s("d9<j>"),oy:s("aU"),g_:s("e8"),hq:s("bx"),ol:s("c3"),e1:s("b5"),l:s("ae"),ao:s("bK<L>"),a9:s("fK<bQ>"),ha:s("af<b5>"),ey:s("af<~>"),ir:s("D<bQ>"),n:s("cw"),N:s("j"),of:s("Y"),o:s("aS"),jM:s("dd"),mO:s("ed"),gs:s("cx"),hU:s("fO"),aJ:s("a0"),do:s("c5"),i7:s("py"),mC:s("pz"),oR:s("bg"),nn:s("pA"),p:s("bh"),cx:s("df"),ph:s("dg<+hasSynced,lastSyncedAt,priority(H?,bc?,a)>"),oP:s("dh<j,j>"),b:s("L"),R:s("jy"),e6:s("aC"),j2:s("fW"),w:s("eh"),m1:s("vw"),lS:s("fY<j>"),u:s("cz"),iq:s("ad<bh>"),ho:s("ad<a>"),if:s("ad<cj?>"),mE:s("ad<k?>"),h:s("ad<~>"),it:s("c9<@,j>"),jB:s("c9<@,bh>"),hi:s("cb"),fK:s("ep"),Q:s("dp<u>"),hV:s("dq<L>"),d4:s("et<u>"),nI:s("l<fh>"),fV:s("l<bX>"),a7:s("l<u>"),e:s("l<0&>"),jz:s("l<bh>"),x:s("l<H>"),_:s("l<@>"),hy:s("l<a>"),iB:s("l<cj?>"),ny:s("l<k?>"),D:s("l<~>"),nf:s("aP"),mp:s("ds<k?,k?>"),fA:s("eA"),fb:s("bB<r<a>>"),cn:s("bB<bw<j>>"),pp:s("bQ"),jy:s("cE<b5,~()>"),af:s("cE<~,H()>"),lU:s("cE<~,~()>"),aP:s("O<fh>"),l6:s("O<bX>"),h1:s("O<u>"),ex:s("O<H>"),gW:s("O<k?>"),F:s("O<~>"),y:s("H"),i:s("Z"),z:s("@"),mq:s("@(k)"),d:s("@(k,ae)"),S:s("a"),gO:s("cj?"),d_:s("f6?"),gK:s("o<G>?"),m2:s("o<~>?"),b3:s("bX?"),fo:s("dT?"),A:s("u?"),h9:s("a_<j,k?>?"),aC:s("bG?"),X:s("k?"),B:s("bI?"),J:s("aU?"),mQ:s("af<bQ>?"),T:s("j?"),a_:s("bg?"),he:s("eh?"),dd:s("aP?"),o9:s("H?"),jX:s("Z?"),aV:s("a?"),jh:s("bT?"),q:s("bT"),H:s("~"),cj:s("~()"),i6:s("~(k)"),r:s("~(k,ae)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.b4=J.iy.prototype
B.d=J.t.prototype
B.b=J.fk.prototype
B.H=J.dU.prototype
B.a5=J.dV.prototype
B.a=J.cn.prototype
B.b5=J.aZ.prototype
B.b6=J.ai.prototype
B.aa=A.fx.prototype
B.M=A.fz.prototype
B.f=A.d4.prototype
B.ab=J.j_.prototype
B.V=J.df.prototype
B.A=new A.bq("Operation was cancelled",null)
B.W=new A.hU(!1,127)
B.au=new A.hV(127)
B.aO=new A.dq(A.al("dq<r<a>>"))
B.av=new A.cQ(B.aO)
B.aw=new A.fj(A.EC(),A.al("fj<a>"))
B.cb=new A.hZ()
B.ax=new A.lg()
B.ay=new A.i8()
B.B=new A.f8()
B.az=new A.f9()
B.X=new A.ii()
B.aA=new A.ix()
B.Y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aB=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.aG=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aC=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aF=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aE=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aD=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.Z=function(hooks) { return hooks; }

B.h=new A.nB()
B.j=new A.iH()
B.q=new A.fo()
B.aH=new A.nC()
B.w=new A.iL(A.al("iL<k?>"))
B.x=new A.dZ(A.al("dZ<j,@>"))
B.a_=new A.dZ(A.al("dZ<k?,k?>"))
B.aI=new A.iX()
B.c=new A.oo()
B.aK=new A.da(A.al("da<j>"))
B.aJ=new A.da(A.al("da<+name,parameters(j,j)>"))
B.aL=new A.fP()
B.aM=new A.fU()
B.k=new A.jA()
B.n=new A.jC()
B.aN=new A.rm()
B.y=new A.ro()
B.a0=new A.h8()
B.aP=new A.rV()
B.C=new A.hm()
B.e=new A.kq()
B.r=new A.kx()
B.aQ=new A.tM()
B.aR=new A.dK("The PowerSync service does not support checkpoint requests. Update to PowerSync service version 1.24.0 or later to use this API.")
B.aS=new A.dK("Cannot request checkpoints, sync client is disconnected")
B.aT=new A.dK("Connected with legacy checkpoint mode, cannot request checkpoints")
B.aU=new A.dN(0,"established")
B.aV=new A.dN(1,"end")
B.D=new A.bW(3,"updateSubscriptionManagement")
B.E=new A.bW(4,"notifyUpdates")
B.a1=new A.aY(0)
B.F=new A.aY(1e4)
B.u=new A.aY(5e6)
B.G=new A.cl("x",1,"opfsExternalLocks")
B.a2=new A.cl("y",2,"opfsExternalLocksWorkaround")
B.a3=new A.dR("/database",0,"database")
B.a4=new A.dR("/database-journal",1,"journal")
B.b7=new A.iF(null)
B.b8=new A.iG(null)
B.a6=new A.iI(!1,255)
B.b9=new A.iJ(255)
B.t=new A.cp("FINE",500)
B.l=new A.cp("INFO",800)
B.m=new A.cp("WARNING",900)
B.ba=s([239,191,189],t.t)
B.v=new A.by(0,"unknown")
B.P=new A.by(1,"integer")
B.Q=new A.by(2,"bigInt")
B.R=new A.by(3,"float")
B.S=new A.by(4,"text")
B.T=new A.by(5,"blob")
B.U=new A.by(6,"$null")
B.ao=new A.by(7,"boolean")
B.I=s([B.v,B.P,B.Q,B.R,B.S,B.T,B.U,B.ao],A.al("t<by>"))
B.bb=s([65533],t.t)
B.b2=new A.fe(0,"database")
B.b3=new A.fe(1,"journal")
B.a7=s([B.b2,B.b3],A.al("t<fe>"))
B.b1=new A.cl("s",0,"opfsShared")
B.b_=new A.cl("i",3,"indexedDb")
B.b0=new A.cl("m",4,"inMemory")
B.bc=s([B.b1,B.G,B.a2,B.b_,B.b0],A.al("t<cl>"))
B.aW=new A.bW(0,"ok")
B.aX=new A.bW(1,"getAutoCommit")
B.aY=new A.bW(2,"executeBatch")
B.aZ=new A.bW(5,"installBroadcastUpdates")
B.a8=s([B.aW,B.aX,B.aY,B.D,B.E,B.aZ],A.al("t<bW>"))
B.O=new A.jq(0,"rust")
B.bd=s([B.O],A.al("t<jq>"))
B.ae=new A.eb(0,"insert")
B.af=new A.eb(1,"update")
B.ag=new A.eb(2,"delete")
B.be=s([B.ae,B.af,B.ag],A.al("t<eb>"))
B.J=s([],t.s)
B.bg=s([],t.t)
B.o=s([],t.c)
B.bf=s([],t.bN)
B.a9=s([],t.cH)
B.bh=s([B.a3,B.a4],A.al("t<dR>"))
B.ah=new A.cu(0,"opfs")
B.ai=new A.cu(1,"indexedDb")
B.bq=new A.cu(2,"inMemory")
B.bi=s([B.ah,B.ai,B.bq],A.al("t<cu>"))
B.aj=new A.am(0,"ping")
B.bt=new A.am(1,"startSynchronization")
B.bB=new A.am(2,"updateSubscriptions")
B.bC=new A.am(3,"abortSynchronization")
B.ak=new A.am(4,"requestEndpoint")
B.al=new A.am(5,"uploadCrud")
B.bD=new A.am(6,"customCheckpointRequest")
B.bE=new A.am(7,"requestCheckpoint")
B.am=new A.am(8,"invalidCredentialsCallback")
B.an=new A.am(9,"credentialsCallback")
B.bu=new A.am(10,"notifySyncStatus")
B.bv=new A.am(11,"logEvent")
B.bw=new A.am(12,"sendHttpRequest")
B.bx=new A.am(13,"abortHttpRequest")
B.by=new A.am(14,"readResponseChunk")
B.bz=new A.am(15,"okResponse")
B.bA=new A.am(16,"errorResponse")
B.bj=s([B.aj,B.bt,B.bB,B.bC,B.ak,B.al,B.bD,B.bE,B.am,B.an,B.bu,B.bv,B.bw,B.bx,B.by,B.bz,B.bA],A.al("t<am>"))
B.bn={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.i=new A.hT()
B.bk=new A.bs(B.bn,[B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.i,B.i,B.i,B.i,B.i,B.i,B.i,B.i,B.i,B.i,B.i,B.k,B.k],A.al("bs<j,d_>"))
B.z={}
B.L=new A.bs(B.z,[],A.al("bs<j,j>"))
B.bl=new A.bs(B.z,[],A.al("bs<j,a>"))
B.K=new A.bs(B.z,[],A.al("bs<j,@>"))
B.p=new A.fv(11,"simpleSuccessResponse")
B.bm=new A.fv(13,"rowsResponse")
B.cc=new A.nT(2,"readWriteCreate")
B.ac=new A.ho(!1)
B.ad=new A.a3(null,null)
B.N=new A.hp(!1,!1)
B.bo=new A.cC("BEGIN IMMEDIATE","COMMIT","ROLLBACK")
B.bp=new A.f4(B.z,0,A.al("f4<j>"))
B.br=new A.jp("_clientToken")
B.bs=new A.cx(!1,!1,!1,null,!1,null,null,null,null,B.a9,null,null)
B.bF=A.bp("cP")
B.bG=A.bp("v7")
B.bH=A.bp("mM")
B.bI=A.bp("mN")
B.bJ=A.bp("ns")
B.bK=A.bp("nt")
B.bL=A.bp("nu")
B.bM=A.bp("u")
B.bN=A.bp("k")
B.bO=A.bp("py")
B.bP=A.bp("pz")
B.bQ=A.bp("pA")
B.bR=A.bp("bh")
B.bS=new A.fT("DELETE",2,"delete")
B.bT=new A.fT("PATCH",1,"patch")
B.bU=new A.fT("PUT",0,"put")
B.ap=new A.jB(!1)
B.bV=new A.c7(14)
B.bW=new A.c7(522)
B.bX=new A.c7(778)
B.aq=new A.eF("canceled")
B.ar=new A.eF("dormant")
B.as=new A.eF("listening")
B.at=new A.eF("paused")
B.bY=new A.aF(B.e,A.DT())
B.bZ=new A.aF(B.e,A.DP())
B.c_=new A.aF(B.e,A.DX())
B.c0=new A.aF(B.e,A.DQ())
B.c1=new A.aF(B.e,A.DR())
B.c2=new A.aF(B.e,A.DS())
B.c3=new A.aF(B.e,A.DU())
B.c4=new A.aF(B.e,A.DW())
B.c5=new A.aF(B.e,A.DY())
B.c6=new A.aF(B.e,A.DZ())
B.c7=new A.aF(B.e,A.E_())
B.c8=new A.aF(B.e,A.E0())
B.c9=new A.aF(B.e,A.DV())
B.ca=new A.hF(null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.rX=null
$.dz=A.v([],t.hf)
$.yr=null
$.x0=null
$.ww=null
$.wv=null
$.yO=null
$.yG=null
$.yX=null
$.us=null
$.uD=null
$.w7=null
$.t9=A.v([],A.al("t<r<k>?>"))
$.eP=null
$.hI=null
$.hJ=null
$.vZ=!1
$.m=B.e
$.tb=null
$.xv=null
$.xw=null
$.xx=null
$.xy=null
$.vA=A.qW("_lastQuoRemDigits")
$.vB=A.qW("_lastQuoRemUsed")
$.h2=A.qW("_lastRemUsed")
$.vC=A.qW("_lastRem_nsh")
$.xq=""
$.xr=null
$.eO=0
$.eM=A.a2(t.N,t.S)
$.wU=0
$.AL=A.a2(t.N,t.I)
$.yg=null
$.tW=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"F0","z8",()=>A.yN("_$dart_dartClosure"))
s($,"F_","dE",()=>A.yN("_$dart_dartClosure_dartJSInterop"))
s($,"FZ","zF",()=>B.e.bt(new A.uQ(),t.p8))
s($,"FT","zC",()=>A.v([new J.iA()],A.al("t<fD>")))
s($,"Fh","zc",()=>A.c6(A.px({
toString:function(){return"$receiver$"}})))
s($,"Fi","zd",()=>A.c6(A.px({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Fj","ze",()=>A.c6(A.px(null)))
s($,"Fk","zf",()=>A.c6(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fn","zi",()=>A.c6(A.px(void 0)))
s($,"Fo","zj",()=>A.c6(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fm","zh",()=>A.c6(A.xn(null)))
s($,"Fl","zg",()=>A.c6(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Fq","zl",()=>A.c6(A.xn(void 0)))
s($,"Fp","zk",()=>A.c6(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ft","wf",()=>A.BB())
s($,"F4","cM",()=>$.zF())
s($,"F3","z9",()=>A.BU(!1,B.e,t.y))
s($,"FB","zp",()=>{var q=t.z
return A.n_(null,null,null,q,q)})
s($,"FE","zs",()=>A.AQ(4096))
s($,"FC","zq",()=>new A.tJ().$0())
s($,"FD","zr",()=>new A.tI().$0())
s($,"Fu","zm",()=>A.AO(A.vU(A.v([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Fz","ch",()=>A.qM(0))
s($,"Fy","kX",()=>A.qM(1))
s($,"Fw","wh",()=>$.kX().by(0))
s($,"Fv","wg",()=>A.qM(1e4))
r($,"Fx","zn",()=>A.at("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"FA","zo",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"FH","bU",()=>A.kT(B.bN))
r($,"FO","kY",()=>new A.u2().$0())
r($,"FL","zx",()=>new A.u0().$0())
s($,"FK","zw",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"F8","za",()=>{var q=new A.rW(A.AM(8))
q.l2()
return q})
s($,"EY","z7",()=>A.at("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"FG","zt",()=>A.at('["\\x00-\\x1F\\x7F]',!0))
s($,"G_","zG",()=>A.at('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"FN","zy",()=>A.at("(?:\\r\\n)?[ \\t]+",!0))
s($,"FQ","zA",()=>A.at('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"FP","zz",()=>A.at("\\\\(.)",!0))
s($,"FY","zE",()=>A.at('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"G0","zH",()=>A.at("(?:"+$.zy().a+")*",!0))
s($,"F5","v4",()=>A.vl(""))
s($,"FW","wj",()=>new A.m_($.wd()))
s($,"Fe","zb",()=>new A.nV(A.at("/",!0),A.at("[^/]$",!0),A.at("^/",!0)))
s($,"Fg","kW",()=>new A.qd(A.at("[/\\\\]",!0),A.at("[^/\\\\]$",!0),A.at("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.at("^[/\\\\](?![/\\\\])",!0)))
s($,"Ff","hN",()=>new A.pK(A.at("/",!0),A.at("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.at("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.at("^/",!0)))
s($,"Fd","wd",()=>A.Bi())
s($,"FV","wi",()=>A.Df())
s($,"FM","dF",()=>$.wi())
s($,"FJ","zv",()=>A.wP(A.yP(),"SharedWorkerGlobalScope"))
s($,"FI","zu",()=>A.wP(A.yP(),"DedicatedWorkerGlobalScope"))
s($,"EZ","kV",()=>$.za())
s($,"Fr","we",()=>new A.ip(new WeakMap()))
s($,"FU","zD",()=>A.AJ(A.v([A.vr("files"),A.vr("blocks")],t.s)))
s($,"F1","v3",()=>{var q,p,o=A.a2(t.N,A.al("dR"))
for(q=0;q<2;++q){p=B.bh[q]
o.m(0,p.c,p)}return o})
s($,"FR","zB",()=>A.AZ())
r($,"Fs","hO",()=>{var q="navigator"
return A.AB(A.AC(A.ux(A.z_(),q),A.vr("locks")))?A.ux(A.ux(A.z_(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.e0,ArrayBuffer:A.bG,ArrayBufferView:A.fy,DataView:A.fx,Float32Array:A.iN,Float64Array:A.iO,Int16Array:A.iP,Int32Array:A.iQ,Int8Array:A.iR,Uint16Array:A.iS,Uint32Array:A.fz,Uint8ClampedArray:A.fA,CanvasPixelArray:A.fA,Uint8Array:A.d4})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.e1.$nativeSuperclassTag="ArrayBufferView"
A.hi.$nativeSuperclassTag="ArrayBufferView"
A.hj.$nativeSuperclassTag="ArrayBufferView"
A.cq.$nativeSuperclassTag="ArrayBufferView"
A.hk.$nativeSuperclassTag="ArrayBufferView"
A.hl.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$1=function(a){return this(a)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$2$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.EA
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=powersync_db.worker.js.map
