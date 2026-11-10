var Fp=i=>{throw TypeError(i)};var tr=(i,e,t)=>e.has(i)?Fp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Op(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="170",zp=0,yh=1,Bp=2,Df=1,kf=2,Jn=3,yi=0,jt=1,Jt=2,ni=0,Ds=1,Ur=2,bh=3,Mh=4,Hp=5,Fi=100,Vp=101,Gp=102,Wp=103,$p=104,Xp=200,jp=201,qp=202,Yp=203,Mc=204,Sc=205,Zp=206,Kp=207,Jp=208,Qp=209,em=210,tm=211,nm=212,im=213,sm=214,Tc=0,wc=1,Ec=2,zs=3,Ac=4,Cc=5,Rc=6,Pc=7,Il=0,rm=1,om=2,xi=0,Uf=1,Nf=2,Ff=3,Dl=4,am=5,Of=6,zf=7,Bf=300,Bs=301,Hs=302,Lc=303,Ic=304,va=306,An=1e3,gi=1001,Dc=1002,an=1003,cm=1004,Kr=1005,On=1006,wa=1007,Hi=1008,si=1009,Hf=1010,Vf=1011,Nr=1012,kl=1013,Xi=1014,Cn=1015,Hn=1016,Ul=1017,Nl=1018,Vs=1020,Gf=35902,Wf=1021,$f=1022,vn=1023,Xf=1024,jf=1025,ks=1026,Gs=1027,Fl=1028,Ol=1029,qf=1030,zl=1031,Bl=1033,Vo=33776,Go=33777,Wo=33778,$o=33779,kc=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,zc=37492,Bc=37496,Hc=37808,Vc=37809,Gc=37810,Wc=37811,$c=37812,Xc=37813,jc=37814,qc=37815,Yc=37816,Zc=37817,Kc=37818,Jc=37819,Qc=37820,el=37821,Xo=36492,tl=36494,nl=36495,Yf=36283,il=36284,sl=36285,rl=36286,lm=3200,hm=3201,Hl=0,um=1,mi="",_t="srgb",qs="srgb-linear",_a="linear",ft="srgb",is=7680,Sh=519,fm=512,dm=513,pm=514,Zf=515,mm=516,gm=517,vm=518,_m=519,ol=35044,Th="300 es",ti=2e3,ta=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const Tr=Math.PI/180,Fr=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Vl(i,e){return(i%e+e)%e}function xm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ym(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function bm(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function Mm(i,e=1){return e-Math.abs(Vl(i,e*2)-e)}function Sm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Em(i,e){return i+Math.random()*(e-i)}function Am(i){return i*(.5-Math.random())}function Cm(i){i!==void 0&&(wh=i);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rm(i){return i*Tr}function Pm(i){return i*Fr}function Lm(i){return(i&i-1)===0&&i!==0}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function km(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const al={DEG2RAD:Tr,RAD2DEG:Fr,generateUUID:Rn,clamp:Pt,euclideanModulo:Vl,mapLinear:xm,inverseLerp:ym,lerp:wr,damp:bm,pingpong:Mm,smoothstep:Sm,smootherstep:Tm,randInt:wm,randFloat:Em,randFloatSpread:Am,seededRandom:Cm,degToRad:Rm,radToDeg:Pm,isPowerOfTwo:Lm,ceilPowerOfTwo:Im,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:km,normalize:dt,denormalize:En};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=s[0],v=s[3],p=s[6],y=s[1],_=s[4],x=s[7],E=s[2],M=s[5],S=s[8];return r[0]=a*g+o*y+c*E,r[3]=a*v+o*_+c*M,r[6]=a*p+o*x+c*S,r[1]=l*g+h*y+u*E,r[4]=l*v+h*_+u*M,r[7]=l*p+h*x+u*S,r[2]=d*g+f*y+m*E,r[5]=d*v+f*_+m*M,r[8]=d*p+f*x+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Qe;function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){const i=Or("canvas");return i.style.display="block",i}const Eh={};function yr(i){i in Eh||(Eh[i]=!0,console.warn(i))}function Nm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Om(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?_a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ah=[.64,.33,.3,.6,.15,.06],Ch=[.2126,.7152,.0722],Rh=[.3127,.329],Ph=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[qs]:{primaries:Ah,whitePoint:Rh,transfer:_a,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:Ah,whitePoint:Rh,transfer:ft,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});let ss;class zm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=Or("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class Ut extends Ys{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=gi,s=gi,r=On,a=Hi,o=vn,c=si,l=Ut.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Rn(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Bf;Ut.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],g=c[2],v=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+v)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(f+1)/2,E=(p+1)/2,M=(h+d)/4,S=(u+g)/4,A=(m+v)/4;return _>x&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=S/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((v-m)*(v-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(v-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vm extends Ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ut(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Vm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qf extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gm extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==m){let v=1-o;const p=c*d+l*f+h*m+u*g,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);v=Math.sin(v*M)/E,o=Math.sin(o*M)/E}const x=o*y;if(c=c*v+d*x,l=l*v+f*x,h=h*v+m*x,u=u*v+g*x,v===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new L,Ih=new St;class Ki{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Qr.subVectors(this.max,nr),rs.subVectors(e.a,nr),os.subVectors(e.b,nr),as.subVectors(e.c,nr),ai.subVectors(os,rs),ci.subVectors(as,os),Si.subVectors(rs,as);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Si.z,Si.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Si.z,0,-Si.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Si.y,Si.x,0];return!Ra(t,rs,os,as,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,rs,os,as,Qr))?!1:(eo.crossVectors(ai,ci),t=[eo.x,eo.y,eo.z],Ra(t,rs,os,as,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Jr=new Ki,rs=new L,os=new L,as=new L,ai=new L,ci=new L,Si=new L,nr=new L,Qr=new L,eo=new L,Ti=new L;function Ra(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Wm=new Ki,ir=new L,Pa=new L;class Ji{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Pa)),this.expandByPoint(ir.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new L,La=new L,to=new L,li=new L,Ia=new L,no=new L,Da=new L;class Gl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){La.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),li.copy(this.origin).sub(La);const r=e.distanceTo(t)*.5,a=-this.direction.dot(to),o=li.dot(this.direction),c=-li.dot(to),l=li.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(to,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){Ia.subVectors(t,e),no.subVectors(n,e),Da.crossVectors(Ia,no);let a=this.direction.dot(Da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const c=o*this.direction.dot(no.crossVectors(li,no));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(li));if(l<0||c+l>a)return null;const h=-o*li.dot(Da);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Xm)}lookAt(e,t,n){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),hi.crossVectors(n,en),hi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),hi.crossVectors(n,en)),hi.normalize(),io.crossVectors(en,hi),s[0]=hi.x,s[4]=io.x,s[8]=en.x,s[1]=hi.y,s[5]=io.y,s[9]=en.y,s[2]=hi.z,s[6]=io.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],v=n[10],p=n[14],y=n[3],_=n[7],x=n[11],E=n[15],M=s[0],S=s[4],A=s[8],T=s[12],b=s[1],P=s[5],N=s[9],B=s[13],U=s[2],G=s[6],D=s[10],z=s[14],k=s[3],K=s[7],oe=s[11],le=s[15];return r[0]=a*M+o*b+c*U+l*k,r[4]=a*S+o*P+c*G+l*K,r[8]=a*A+o*N+c*D+l*oe,r[12]=a*T+o*B+c*z+l*le,r[1]=h*M+u*b+d*U+f*k,r[5]=h*S+u*P+d*G+f*K,r[9]=h*A+u*N+d*D+f*oe,r[13]=h*T+u*B+d*z+f*le,r[2]=m*M+g*b+v*U+p*k,r[6]=m*S+g*P+v*G+p*K,r[10]=m*A+g*N+v*D+p*oe,r[14]=m*T+g*B+v*z+p*le,r[3]=y*M+_*b+x*U+E*k,r[7]=y*S+_*P+x*G+E*K,r[11]=y*A+_*N+x*D+E*oe,r[15]=y*T+_*B+x*z+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+v*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],v=e[14],p=e[15],y=u*v*l-g*d*l+g*c*f-o*v*f-u*c*p+o*d*p,_=m*d*l-h*v*l-m*c*f+a*v*f+h*c*p-a*d*p,x=h*g*l-m*u*l+m*o*f-a*g*f-h*o*p+a*u*p,E=m*u*c-h*g*c-m*o*d+a*g*d+h*o*v-a*u*v,M=t*y+n*_+s*x+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=y*S,e[1]=(g*d*r-u*v*r-g*s*f+n*v*f+u*s*p-n*d*p)*S,e[2]=(o*v*r-g*c*r+g*s*l-n*v*l-o*s*p+n*c*p)*S,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*S,e[4]=_*S,e[5]=(h*v*r-m*d*r+m*s*f-t*v*f-h*s*p+t*d*p)*S,e[6]=(m*c*r-a*v*r-m*s*l+t*v*l+a*s*p-t*c*p)*S,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*S,e[8]=x*S,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*S,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*S,e[12]=E*S,e[13]=(h*g*s-m*u*s+m*n*d-t*g*d-h*n*v+t*u*v)*S,e[14]=(m*o*s-a*g*s-m*n*c+t*g*c+a*n*v-t*o*v)*S,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,g=a*h,v=a*u,p=o*u,y=c*l,_=c*h,x=c*u,E=n.x,M=n.y,S=n.z;return s[0]=(1-(g+p))*E,s[1]=(f+x)*E,s[2]=(m-_)*E,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(v+y)*M,s[7]=0,s[8]=(m+_)*S,s[9]=(v-y)*S,s[10]=(1-(d+g))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ti){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,m;if(o===ti)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ta)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ti){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h;let m,g;if(o===ti)m=(a+r)*u,g=-2*u;else if(o===ta)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new L,Sn=new Ne,$m=new L(0,0,0),Xm=new L(1,1,1),hi=new L,io=new L,en=new L,Dh=new Ne,kh=new St;class Bt{constructor(e=0,t=0,n=0,s=Bt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bt.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jm=0;const Uh=new L,ls=new St,qn=new Ne,so=new L,sr=new L,qm=new L,Ym=new St,Nh=new L(1,0,0),Fh=new L(0,1,0),Oh=new L(0,0,1),zh={type:"added"},Zm={type:"removed"},hs={type:"childadded",child:null},ka={type:"childremoved",child:null};class wt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new L,t=new Bt,n=new St,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Qe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(sr,so,this.up):qn.lookAt(so,sr,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(qn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,Yn=new L,Ua=new L,Zn=new L,us=new L,fs=new L,Bh=new L,Na=new L,Fa=new L,Oa=new L,za=new Tt,Ba=new Tt,Ha=new Tt;class gn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Yn.subVectors(n,t),Ua.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Yn),c=Tn.dot(Ua),l=Yn.dot(Yn),h=Yn.dot(Ua),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return za.setScalar(0),Ba.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(Ha,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;us.subVectors(s,n),fs.subVectors(r,n),Na.subVectors(e,n);const c=us.dot(Na),l=fs.dot(Na);if(c<=0&&l<=0)return t.copy(n);Fa.subVectors(e,s);const h=us.dot(Fa),u=fs.dot(Fa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(us,a);Oa.subVectors(e,r);const f=us.dot(Oa),m=fs.dot(Oa);if(m>=0&&f<=m)return t.copy(r);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(fs,o);const v=h*m-f*u;if(v<=0&&u-h>=0&&f-m>=0)return Bh.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Bh,o);const p=1/(v+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Vl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Va(a,r,e+1/3),this.g=Va(a,r,e),this.b=Va(a,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return it.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Pt(Ot.r*255,0,255))*65536+Math.round(Pt(Ot.g*255,0,255))*256+Math.round(Pt(Ot.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=_t){it.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(ro);const n=wr(ui.h,ro.h,t),s=wr(ui.s,ro.s,t),r=wr(ui.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ve;ve.NAMES=td;let Km=0;class Pn extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.blending=Ds,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xa extends Pn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new L,oo=new fe;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class nd extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class id extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jm=0;const ln=new Ne,Ga=new wt,ds=new L,tn=new Ki,rr=new Ki,Dt=new L;class ht extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?id:nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(tn.min,rr.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,rr.max),tn.expandByPoint(Dt)):(tn.expandByPoint(rr.min),tn.expandByPoint(rr.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(e,l),Dt.add(ds)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new L,c[A]=new L;const l=new L,h=new L,u=new L,d=new fe,f=new fe,m=new fe,g=new L,v=new L;function p(A,T,b){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),v.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[A].add(g),o[T].add(g),o[b].add(g),c[A].add(v),c[T].add(v),c[b].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,T=y.length;A<T;++A){const b=y[A],P=b.start,N=b.count;for(let B=P,U=P+N;B<U;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new L,x=new L,E=new L,M=new L;function S(A){E.fromBufferAttribute(s,A),M.copy(E);const T=o[A];_.copy(T),_.sub(E.multiplyScalar(E.dot(T))).normalize(),x.crossVectors(M,T);const P=x.dot(c[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,P)}for(let A=0,T=y.length;A<T;++A){const b=y[A],P=b.start,N=b.count;for(let B=P,U=P+N;B<U;B+=3)S(e.getX(B+0)),S(e.getX(B+1)),S(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let g=0,v=c.length;g<v;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new Ne,wi=new Gl,ao=new Ji,Vh=new L,co=new L,lo=new L,ho=new L,Wa=new L,uo=new L,Gh=new L,fo=new L;class pe extends wt{constructor(e=new ht,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Wa.fromBufferAttribute(u,e),a?uo.addScaledVector(Wa,h):uo.addScaledVector(Wa.sub(t),h))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(ao.containsPoint(wi.origin)===!1&&(wi.intersectSphere(ao,Vh)===null||wi.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Hh.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=a[v.materialIndex],y=Math.max(v.start,f.start),_=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let x=y,E=_;x<E;x+=3){const M=o.getX(x),S=o.getX(x+1),A=o.getX(x+2);s=po(this,p,e,n,l,h,u,M,S,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const y=o.getX(v),_=o.getX(v+1),x=o.getX(v+2);s=po(this,a,e,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=a[v.materialIndex],y=Math.max(v.start,f.start),_=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=y,E=_;x<E;x+=3){const M=x,S=x+1,A=x+2;s=po(this,p,e,n,l,h,u,M,S,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const y=v,_=v+1,x=v+2;s=po(this,a,e,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Qm(i,e,t,n,s,r,a,o){let c;if(e.side===jt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===yi,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,co),i.getVertexPosition(c,lo),i.getVertexPosition(l,ho);const h=Qm(i,e,t,n,co,lo,ho,Gh);if(h){const u=new L;gn.getBarycoord(Gh,co,lo,ho,u),s&&(h.uv=gn.getInterpolatedAttribute(s,o,c,l,u,new fe)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,l,u,new fe)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};gn.getNormal(co,lo,ho,d.normal),h.face=d,h.barycoord=u}return h}class nt extends ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function m(g,v,p,y,_,x,E,M,S,A,T){const b=x/S,P=E/A,N=x/2,B=E/2,U=M/2,G=S+1,D=A+1;let z=0,k=0;const K=new L;for(let oe=0;oe<D;oe++){const le=oe*P-B;for(let ye=0;ye<G;ye++){const Ve=ye*b-N;K[g]=Ve*y,K[v]=le*_,K[p]=U,l.push(K.x,K.y,K.z),K[g]=0,K[v]=0,K[p]=M>0?1:-1,h.push(K.x,K.y,K.z),u.push(ye/S),u.push(1-oe/A),z+=1}}for(let oe=0;oe<A;oe++)for(let le=0;le<S;le++){const ye=d+le+G*oe,Ve=d+le+G*(oe+1),F=d+(le+1)+G*(oe+1),ie=d+(le+1)+G*oe;c.push(ye,Ve,ie),c.push(Ve,F,ie),k+=6}o.addGroup(f,k,T),f+=k,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function e0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const $s={clone:Ws,merge:Wt};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Pn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,Wh=new fe,$h=new fe;class pn extends rd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,$h),t.subVectors($h,Wh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class i0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new pn(ps,ms,e,t);r.layers=this.layers,this.add(r);const a=new pn(ps,ms,e,t);a.layers=this.layers,this.add(a);const o=new pn(ps,ms,e,t);o.layers=this.layers,this.add(o);const c=new pn(ps,ms,e,t);c.layers=this.layers,this.add(c);const l=new pn(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class od extends Ut{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s0 extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new od(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nt(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ni});r.uniforms.tEquirect.value=t;const a=new pe(s,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=On),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const $a=new L,r0=new L,o0=new Qe;class ki{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$a.subVectors(n,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||o0.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ji,mo=new L;class Wl{constructor(e=new ki,t=new ki,n=new ki,s=new ki,r=new ki,a=new ki){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],g=s[10],v=s[11],p=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,v-f,x-p).normalize(),n[1].setComponents(c+r,d+l,v+f,x+p).normalize(),n[2].setComponents(c+a,d+h,v+m,x+y).normalize(),n[3].setComponents(c-a,d-h,v-m,x-y).normalize(),n[4].setComponents(c-o,d-u,v-g,x-_).normalize(),t===ti)n[5].setComponents(c+o,d+u,v+g,x+_).normalize();else if(t===ta)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function a0(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class on extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],g=[],v=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<l;_++){const x=_*u-r;m.push(x,-y,0),g.push(0,0,1),v.push(_/o),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,x=y+l*(p+1),E=y+1+l*(p+1),M=y+1+l*p;f.push(_,x,M),f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:v0,begin_vertex:_0,beginnormal_vertex:x0,bsdfs:y0,iridescence_fragment:b0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:E0,color_fragment:A0,color_pars_fragment:C0,color_pars_vertex:R0,color_vertex:P0,common:L0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:D0,displacementmap_pars_vertex:k0,displacementmap_vertex:U0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:z0,envmap_fragment:B0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:eg,envmap_vertex:W0,fog_vertex:$0,fog_pars_vertex:X0,fog_fragment:j0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:Z0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:J0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:vg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:xg,morphinstance_vertex:yg,morphcolor_vertex:bg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Eg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:kg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:zg,dithering_pars_fragment:Bg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:$g,shadowmask_pars_fragment:Xg,skinbase_vertex:jg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:Zg,specularmap_fragment:Kg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:sv,uv_vertex:rv,worldpos_vertex:ov,background_vert:av,background_frag:cv,backgroundCube_vert:lv,backgroundCube_frag:hv,cube_vert:uv,cube_frag:fv,depth_vert:dv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:gv,equirect_vert:vv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:bv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Tv,meshmatcap_vert:wv,meshmatcap_frag:Ev,meshnormal_vert:Av,meshnormal_frag:Cv,meshphong_vert:Rv,meshphong_frag:Pv,meshphysical_vert:Lv,meshphysical_frag:Iv,meshtoon_vert:Dv,meshtoon_frag:kv,points_vert:Uv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:zv,sprite_frag:Bv},Ae={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Nn={basic:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Wt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Wt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Wt([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Wt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Wt([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Wt([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Wt([Ae.common,Ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Wt([Ae.lights,Ae.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Nn.physical={uniforms:Wt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const go={r:0,b:0,g:0},Ai=new Bt,Hv=new Ne;function Vv(i,e,t,n,s,r,a){const o=new ve(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function g(y){let _=!1;const x=m(y);x===null?p(o,c):x&&x.isColor&&(p(x,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===va)?(h===void 0&&(h=new pe(new nt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ws(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(_.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ai)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==ft,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pe(new on(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ws(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(go,sd(i)),n.buffers.color.setClear(go.r,go.g,go.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:v}}function Gv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,P,N,B,U){let G=!1;const D=u(B,N,P);r!==D&&(r=D,l(r.object)),G=f(b,B,N,U),G&&m(b,B,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(b,P,N,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,N){const B=N.wireframe===!0;let U=n[b.id];U===void 0&&(U={},n[b.id]=U);let G=U[P.id];G===void 0&&(G={},U[P.id]=G);let D=G[B];return D===void 0&&(D=d(c()),G[B]=D),D}function d(b){const P=[],N=[],B=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,N,B){const U=r.attributes,G=P.attributes;let D=0;const z=N.getAttributes();for(const k in z)if(z[k].location>=0){const oe=U[k];let le=G[k];if(le===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;D++}return r.attributesNum!==D||r.index!==B}function m(b,P,N,B){const U={},G=P.attributes;let D=0;const z=N.getAttributes();for(const k in z)if(z[k].location>=0){let oe=G[k];oe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),U[k]=le,D++}r.attributes=U,r.attributesNum=D,r.index=B}function g(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function v(b){p(b,0)}function p(b,P){const N=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;N[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),U[b]!==P&&(i.vertexAttribDivisor(b,P),U[b]=P)}function y(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==b[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function _(b,P,N,B,U,G,D){D===!0?i.vertexAttribIPointer(b,P,N,U,G):i.vertexAttribPointer(b,P,N,B,U,G)}function x(b,P,N,B){g();const U=B.attributes,G=N.getAttributes(),D=P.defaultAttributeValues;for(const z in G){const k=G[z];if(k.location>=0){let K=U[z];if(K===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const oe=K.normalized,le=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Ve=ye.buffer,F=ye.type,ie=ye.bytesPerElement,ee=F===i.INT||F===i.UNSIGNED_INT||K.gpuType===kl;if(K.isInterleavedBufferAttribute){const ae=K.data,Me=ae.stride,Re=K.offset;if(ae.isInstancedInterleavedBuffer){for(let V=0;V<k.locationSize;V++)p(k.location+V,ae.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let V=0;V<k.locationSize;V++)v(k.location+V);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let V=0;V<k.locationSize;V++)_(k.location+V,le/k.locationSize,F,oe,Me*ie,(Re+le/k.locationSize*V)*ie,ee)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,K.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<k.locationSize;ae++)v(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae,le/k.locationSize,F,oe,le*ie,le/k.locationSize*ae*ie,ee)}}else if(D!==void 0){const oe=D[z];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}y()}function E(){A();for(const b in n){const P=n[b];for(const N in P){const B=P[N];for(const U in B)h(B[U].object),delete B[U];delete P[N]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const B=P[N];for(const U in B)h(B[U].object),delete B[U];delete P[N]}delete n[b.id]}function S(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const B=N[b.id];for(const U in B)h(B[U].object),delete B[U];delete N[b.id]}}function A(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:v,disableUnusedAttributes:y}}function Wv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $v(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==vn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const A=S===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==si&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Cn&&!A)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:E,maxSamples:M}}function Xv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ki,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,v=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!v)r?h(null):l();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let E=0;E!==_;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let v=null;if(g!==0){if(v=c.value,m!==!0||v===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<p)&&(v=new Float32Array(p));for(let _=0,x=f;_!==g;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(v,x),v[x+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function jv(i){let e=new WeakMap;function t(a,o){return o===Lc?a.mapping=Bs:o===Ic&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lc||o===Ic)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new s0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class $l extends rd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Xh=[.125,.215,.35,.446,.526,.582],Oi=20,Xa=new $l,jh=new ve;let ja=null,qa=0,Ya=0,Za=!1;const Ui=(1+Math.sqrt(5))/2,gs=1/Ui,qh=[new L(-Ui,gs,0),new L(Ui,gs,0),new L(-gs,0,Ui),new L(gs,0,Ui),new L(0,Ui,-gs),new L(0,Ui,gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,qa,Ya),this._renderer.xr.enabled=Za,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Hn,format:vn,colorSpace:qs,depthBuffer:!1},s=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(r)),this._blurMaterial=Yv(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,s){const o=new pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jh),h.toneMapping=xi,h.autoClear=!1;const f=new xa({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new pe(new nt,f);let g=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,g=!0):(f.color.copy(jh),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;vo(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qh[(s-r-1)%qh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),g=r/m,v=isFinite(r)?1+Math.floor(h*g):Oi;v>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let S=0;S<Oi;++S){const A=S/g,T=Math.exp(-A*A/2);p.push(T),S===0?y+=T:S<v&&(y+=2*T)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[s],E=3*x*(s>_-As?s-_+As:0),M=4*(this._cubeSize-x);vo(t,E,M,3*x,2*x),c.setRenderTarget(t),c.render(u,Xa)}}function qv(i){const e=[],t=[],n=[];let s=i;const r=i-As+1+Xh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-As?c=Xh[a-i+As-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,v=2,p=1,y=new Float32Array(g*m*f),_=new Float32Array(v*m*f),x=new Float32Array(p*m*f);for(let M=0;M<f;M++){const S=M%3*2/3-1,A=M>2?0:-1,T=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];y.set(T,g*m*M),_.set(d,v*m*M);const b=[M,M,M,M,M,M];x.set(b,p*m*M)}const E=new ht;E.setAttribute("position",new Ct(y,g)),E.setAttribute("uv",new Ct(_,v)),E.setAttribute("faceIndex",new Ct(x,p)),e.push(E),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yv(i,e,t){const n=new Float32Array(Oi),s=new L(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zh(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kh(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lc||c===Ic,h=c===Bs||c===Hs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new cl(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new cl(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jv(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let v=0,p=g.length;v<p;v++)e.remove(g[v])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let v=0,p=g.length;v<p;v++)e.update(g[v],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,x=y.length;_<x;_+=3){const E=y[_+0],M=y[_+1],S=y[_+2];d.push(E,M,M,S,S,E)}}else if(m!==void 0){const y=m.array;g=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const E=_+0,M=_+1,S=_+2;d.push(E,M,M,S,S,E)}}else return;const v=new(Kf(d)?id:nd)(d,1);v.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,v)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Qv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];t.update(v,n,1)}function u(d,f,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,e,t){const n=new WeakMap,s=new Tt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let E=o.attributes.position.count*x,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const S=new Float32Array(E*M*4*u),A=new Qf(S,E,M,u);A.type=Cn,A.needsUpdate=!0;const T=x*4;for(let P=0;P<u;P++){const N=p[P],B=y[P],U=_[P],G=E*M*4*P;for(let D=0;D<N.count;D++){const z=D*T;m===!0&&(s.fromBufferAttribute(N,D),S[G+z+0]=s.x,S[G+z+1]=s.y,S[G+z+2]=s.z,S[G+z+3]=0),g===!0&&(s.fromBufferAttribute(B,D),S[G+z+4]=s.x,S[G+z+5]=s.y,S[G+z+6]=s.z,S[G+z+7]=0),v===!0&&(s.fromBufferAttribute(U,D),S[G+z+8]=s.x,S[G+z+9]=s.y,S[G+z+10]=s.z,S[G+z+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new fe(E,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class cd extends Ut{constructor(e,t,n,s,r,a,o,c,l,h=ks){if(h!==ks&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=Xi),n===void 0&&h===Gs&&(n=Vs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ld=new Ut,Jh=new cd(1,1),hd=new Qf,ud=new Gm,fd=new od,Qh=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function a_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),It(t,n)}}function c_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),It(t,n)}}function l_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),It(t,n)}}function h_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function d_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function p_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function __(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=Zf,r=Jh):r=ld,t.setTexture2D(e||r,s)}function x_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ud,s)}function y_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fd,s)}function b_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hd,s)}function M_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return b_}}function S_(i,e){i.uniform1fv(this.addr,e)}function T_(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function w_(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function E_(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function A_(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C_(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R_(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P_(i,e){i.uniform1iv(this.addr,e)}function L_(i,e){i.uniform2iv(this.addr,e)}function I_(i,e){i.uniform3iv(this.addr,e)}function D_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function U_(i,e){i.uniform2uiv(this.addr,e)}function N_(i,e){i.uniform3uiv(this.addr,e)}function F_(i,e){i.uniform4uiv(this.addr,e)}function O_(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ld,r[a])}function z_(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ud,r[a])}function B_(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fd,r[a])}function H_(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hd,r[a])}function V_(i){switch(i){case 5126:return S_;case 35664:return T_;case 35665:return w_;case 35666:return E_;case 35674:return A_;case 35675:return C_;case 35676:return R_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return I_;case 35669:case 35673:return D_;case 5125:return k_;case 36294:return U_;case 36295:return N_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return H_}}class G_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function su(i,e){i.seq.push(e),i.map[e.id]=e}function X_(i,e,t){const n=i.name,s=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){su(t,l===void 0?new G_(o,i,e):new W_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new $_(o),su(t,u)),t=u}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);X_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ru(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j_=37297;let q_=0;function Y_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ou=new Qe;function Z_(i){it._getMatrix(ou,it.workingColorSpace,i);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case _a:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function au(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Y_(i.getShaderSource(e),a)}else return s}function K_(i,e){const t=Z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J_(i,e){let t;switch(e){case Uf:t="Linear";break;case Nf:t="Reinhard";break;case Ff:t="Cineon";break;case Dl:t="ACESFilmic";break;case Of:t="AgX";break;case zf:t="Neutral";break;case am:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new L;function Q_(){it.getLuminanceCoefficients(_o);const i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function tx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(ix,rx)}const sx=new Map;function rx(i,e){let t=tt[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(ox,ax)}function ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case om:e="ENVMAP_BLENDING_ADD";break}return e}function fx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cx(t),l=lx(t),h=hx(t),u=ux(t),d=fx(t),f=ex(t),m=tx(r),g=s.createProgram();let v,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(v=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?tt.tonemapping_pars_fragment:"",t.toneMapping!==xi?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=ll(a),a=cu(a,t),a=lu(a,t),o=ll(o),o=cu(o,t),o=lu(o,t),a=hu(a),o=hu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+v+a,x=y+p+o,E=ru(s,s.VERTEX_SHADER,_),M=ru(s,s.FRAGMENT_SHADER,x);s.attachShader(g,E),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(M).trim();let G=!0,D=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,M);else{const z=au(s,E,"vertex"),k=au(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+z+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||U==="")&&(D=!1);D&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:B,prefix:v},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(M),A=new jo(s,g),T=nx(s,g)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,j_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=M,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function vx(i,e,t,n,s,r,a){const o=new ed,c=new mx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return l.add(T),T===0?"uv":`uv${T}`}function v(T,b,P,N,B){const U=N.fog,G=B.geometry,D=T.isMeshStandardMaterial?N.environment:null,z=(T.isMeshStandardMaterial?t:e).get(T.envMap||D),k=z&&z.mapping===va?z.image.height:null,K=m[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=oe!==void 0?oe.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let Ve,F,ie,ee;if(K){const ut=Nn[K];Ve=ut.vertexShader,F=ut.fragmentShader}else Ve=T.vertexShader,F=T.fragmentShader,c.update(T),ie=c.getVertexShaderID(T),ee=c.getFragmentShaderID(T);const ae=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,V=B.isBatchedMesh===!0,Y=!!T.map,j=!!T.matcap,H=!!z,C=!!T.aoMap,de=!!T.lightMap,te=!!T.bumpMap,re=!!T.normalMap,se=!!T.displacementMap,Se=!!T.emissiveMap,_e=!!T.metalnessMap,I=!!T.roughnessMap,w=T.anisotropy>0,W=T.clearcoat>0,Q=T.dispersion>0,ce=T.iridescence>0,ne=T.sheen>0,De=T.transmission>0,be=w&&!!T.anisotropyMap,Ce=W&&!!T.clearcoatMap,et=W&&!!T.clearcoatNormalMap,ge=W&&!!T.clearcoatRoughnessMap,ue=ce&&!!T.iridescenceMap,Te=ce&&!!T.iridescenceThicknessMap,$e=ne&&!!T.sheenColorMap,we=ne&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,je=!!T.specularColorMap,Ee=!!T.specularIntensityMap,O=De&&!!T.transmissionMap,me=De&&!!T.thicknessMap,q=!!T.gradientMap,he=!!T.alphaMap,Pe=T.alphaTest>0,Le=!!T.alphaHash,Ke=!!T.extensions;let bt=xi;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(bt=i.toneMapping);const Nt={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:F,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:V,batchingColor:V&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:qs,alphaToCoverage:!!T.alphaToCoverage,map:Y,matcap:j,envMap:H,envMapMode:H&&z.mapping,envMapCubeUVHeight:k,aoMap:C,lightMap:de,bumpMap:te,normalMap:re,displacementMap:d&&se,emissiveMap:Se,normalMapObjectSpace:re&&T.normalMapType===um,normalMapTangentSpace:re&&T.normalMapType===Hl,metalnessMap:_e,roughnessMap:I,anisotropy:w,anisotropyMap:be,clearcoat:W,clearcoatMap:Ce,clearcoatNormalMap:et,clearcoatRoughnessMap:ge,dispersion:Q,iridescence:ce,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:je,specularIntensityMap:Ee,transmission:De,transmissionMap:O,thicknessMap:me,gradientMap:q,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:Le,combine:T.combine,mapUv:Y&&g(T.map.channel),aoMapUv:C&&g(T.aoMap.channel),lightMapUv:de&&g(T.lightMap.channel),bumpMapUv:te&&g(T.bumpMap.channel),normalMapUv:re&&g(T.normalMap.channel),displacementMapUv:se&&g(T.displacementMap.channel),emissiveMapUv:Se&&g(T.emissiveMap.channel),metalnessMapUv:_e&&g(T.metalnessMap.channel),roughnessMapUv:I&&g(T.roughnessMap.channel),anisotropyMapUv:be&&g(T.anisotropyMap.channel),clearcoatMapUv:Ce&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(T.sheenRoughnessMap.channel),specularMapUv:Ye&&g(T.specularMap.channel),specularColorMapUv:je&&g(T.specularColorMap.channel),specularIntensityMapUv:Ee&&g(T.specularIntensityMap.channel),transmissionMapUv:O&&g(T.transmissionMap.channel),thicknessMapUv:me&&g(T.thicknessMap.channel),alphaMapUv:he&&g(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(re||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Y||he),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:Y&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&it.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Jt,flipSided:T.side===jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&T.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)b.push(P),b.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(y(b,T),_(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function _(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function x(T){const b=m[T.type];let P;if(b){const N=Nn[b];P=$s.clone(N.uniforms)}else P=T.uniforms;return P}function E(T,b){let P;for(let N=0,B=h.length;N<B;N++){const U=h[N];if(U.cacheKey===b){P=U,++P.usedTimes;break}}return P===void 0&&(P=new dx(i,b,T,r),h.push(P)),P}function M(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function S(T){c.remove(T)}function A(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:M,releaseShaderCache:S,programs:h,dispose:A}}function _x(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function du(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,g,v){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:v},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=v),e++,p}function o(u,d,f,m,g,v){const p=a(u,d,f,m,g,v);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,g,v){const p=a(u,d,f,m,g,v);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||xx),n.length>1&&n.sort(d||fu),s.length>1&&s.sort(d||fu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function yx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new du,i.set(n,[a])):s>=r.length?(a=new du,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Mx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sx=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i){const e=new bx,t=Mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Ne,a=new Ne;function o(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,g=0,v=0,p=0,y=0,_=0,x=0,E=0,M=0,S=0;l.sort(Tx);for(let T=0,b=l.length;T<b;T++){const P=l[T],N=P.color,B=P.intensity,U=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],B);S++}else if(P.isDirectionalLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(N).multiplyScalar(B),D.distance=U,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[g]=D;const z=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,z.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[g]=z.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=G,x++}g++}else if(P.isRectAreaLight){const D=e.get(P);D.color.copy(N).multiplyScalar(B),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=D,v++}else if(P.isPointLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const z=P.shadow,k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=D,m++}else if(P.isHemisphereLight){const D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(B),D.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=D,p++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==m||A.spotLength!==g||A.rectAreaLength!==v||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==x||A.numSpotMaps!==E||A.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=v,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=S,A.directionalLength=f,A.pointLength=m,A.spotLength=g,A.rectAreaLength=v,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=x,A.numSpotMaps=E,A.numLightProbes=S,n.version=Sx++)}function c(l,h){let u=0,d=0,f=0,m=0,g=0;const v=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),a.identity(),r.copy(_.matrixWorld),r.premultiply(v),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(v),g++}}}return{setup:o,setupView:c,state:n}}function pu(i){const e=new wx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ex(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pu(i),e.set(s,[o])):r>=a.length?(o=new pu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ax extends Pn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends Pn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(i,e,t){let n=new Wl;const s=new fe,r=new fe,a=new Tt,o=new Ax({depthPacking:hm}),c=new Cx,l={},h=t.maxTextureSize,u={[yi]:jt,[jt]:yi,[Jt]:Jt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Rx,fragmentShader:Px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ht;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pe(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let p=this.type;this.render=function(M,S,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;const T=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Jn&&this.type===Jn,U=p===Jn&&this.type!==Jn;for(let G=0,D=M.length;G<D;G++){const z=M[G],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();if(s.multiply(K),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,k.mapSize.y=r.y)),k.map===null||B===!0||U===!0){const le=this.type!==Jn?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new _n(s.x,s.y,le),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let le=0;le<oe;le++){const ye=k.getViewport(le);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),N.viewport(a),k.updateMatrices(z,le),n=k.getFrustum(),x(S,A,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Jn&&y(k,A),k.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(T,b,P)};function y(M,S){const A=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,A,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,A,f,g,null)}function _(M,S,A,T){let b=null;const P=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=A.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=b.uuid,B=S.uuid;let U=l[N];U===void 0&&(U={},l[N]=U);let G=U[B];G===void 0&&(G=b.clone(),U[B]=G,S.addEventListener("dispose",E)),b=G}if(b.visible=S.visible,b.wireframe=S.wireframe,T===Jn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=A}return b}function x(M,S,A,T,b){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Jn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const B=e.update(M),U=M.material;if(Array.isArray(U)){const G=B.groups;for(let D=0,z=G.length;D<z;D++){const k=G[D],K=U[k.materialIndex];if(K&&K.visible){const oe=_(M,K,T,b);M.onBeforeShadow(i,M,S,A,B,oe,k),i.renderBufferDirect(A,null,B,oe,M,k),M.onAfterShadow(i,M,S,A,B,oe,k)}}}else if(U.visible){const G=_(M,U,T,b);M.onBeforeShadow(i,M,S,A,B,G,null),i.renderBufferDirect(A,null,B,G,M,null),M.onAfterShadow(i,M,S,A,B,G,null)}}const N=M.children;for(let B=0,U=N.length;B<U;B++)x(N[B],S,A,T,b)}function E(M){M.target.removeEventListener("dispose",E);for(const A in l){const T=l[A],b=M.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const Ix={[Tc]:wc,[Ec]:Rc,[Ac]:Pc,[zs]:Cc,[wc]:Tc,[Rc]:Ec,[Pc]:Ac,[Cc]:zs};function Dx(i,e){function t(){let O=!1;const me=new Tt;let q=null;const he=new Tt(0,0,0,0);return{setMask:function(Pe){q!==Pe&&!O&&(i.colorMask(Pe,Pe,Pe,Pe),q=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,Le,Ke,bt,Nt){Nt===!0&&(Pe*=bt,Le*=bt,Ke*=bt),me.set(Pe,Le,Ke,bt),he.equals(me)===!1&&(i.clearColor(Pe,Le,Ke,bt),he.copy(me))},reset:function(){O=!1,q=null,he.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,q=null,he=null,Pe=null;return{setReversed:function(Le){if(me!==Le){const Ke=e.get("EXT_clip_control");me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const bt=Pe;Pe=null,this.setClear(bt)}me=Le},getReversed:function(){return me},setTest:function(Le){Le?ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Le){q!==Le&&!O&&(i.depthMask(Le),q=Le)},setFunc:function(Le){if(me&&(Le=Ix[Le]),he!==Le){switch(Le){case Tc:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Rc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Le}},setLocked:function(Le){O=Le},setClear:function(Le){Pe!==Le&&(me&&(Le=1-Le),i.clearDepth(Le),Pe=Le)},reset:function(){O=!1,q=null,he=null,Pe=null,me=!1}}}function s(){let O=!1,me=null,q=null,he=null,Pe=null,Le=null,Ke=null,bt=null,Nt=null;return{setTest:function(ut){O||(ut?ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ut){me!==ut&&!O&&(i.stencilMask(ut),me=ut)},setFunc:function(ut,yn,Wn){(q!==ut||he!==yn||Pe!==Wn)&&(i.stencilFunc(ut,yn,Wn),q=ut,he=yn,Pe=Wn)},setOp:function(ut,yn,Wn){(Le!==ut||Ke!==yn||bt!==Wn)&&(i.stencilOp(ut,yn,Wn),Le=ut,Ke=yn,bt=Wn)},setLocked:function(ut){O=ut},setClear:function(ut){Nt!==ut&&(i.clearStencil(ut),Nt=ut)},reset:function(){O=!1,me=null,q=null,he=null,Pe=null,Le=null,Ke=null,bt=null,Nt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,y=null,_=null,x=null,E=null,M=null,S=new ve(0,0,0),A=0,T=!1,b=null,P=null,N=null,B=null,U=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,z=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=z>=2);let K=null,oe={};const le=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ve=new Tt().fromArray(le),F=new Tt().fromArray(ye);function ie(O,me,q,he){const Pe=new Uint8Array(4),Le=i.createTexture();i.bindTexture(O,Le),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<q;Ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(me+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Le}const ee={};ee[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(zs),te(!1),re(yh),ae(i.CULL_FACE),C(ni);function ae(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Me(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Re(O,me){return u[O]!==me?(i.bindFramebuffer(O,me),u[O]=me,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function V(O,me){let q=f,he=!1;if(O){q=d.get(me),q===void 0&&(q=[],d.set(me,q));const Pe=O.textures;if(q.length!==Pe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Ke=Pe.length;Le<Ke;Le++)q[Le]=i.COLOR_ATTACHMENT0+Le;q.length=Pe.length,he=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,he=!0);he&&i.drawBuffers(q)}function Y(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const j={[Fi]:i.FUNC_ADD,[Vp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};j[Wp]=i.MIN,j[$p]=i.MAX;const H={[Xp]:i.ZERO,[jp]:i.ONE,[qp]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[em]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[Yp]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[nm]:i.ONE_MINUS_CONSTANT_COLOR,[im]:i.CONSTANT_ALPHA,[sm]:i.ONE_MINUS_CONSTANT_ALPHA};function C(O,me,q,he,Pe,Le,Ke,bt,Nt,ut){if(O===ni){g===!0&&(Me(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),O!==Hp){if(O!==v||ut!==T){if((p!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,x=Fi),ut)switch(O){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ur:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ur:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,E=null,M=null,S.set(0,0,0),A=0,v=O,T=ut}return}Pe=Pe||me,Le=Le||q,Ke=Ke||he,(me!==p||Pe!==x)&&(i.blendEquationSeparate(j[me],j[Pe]),p=me,x=Pe),(q!==y||he!==_||Le!==E||Ke!==M)&&(i.blendFuncSeparate(H[q],H[he],H[Le],H[Ke]),y=q,_=he,E=Le,M=Ke),(bt.equals(S)===!1||Nt!==A)&&(i.blendColor(bt.r,bt.g,bt.b,Nt),S.copy(bt),A=Nt),v=O,T=!1}function de(O,me){O.side===Jt?Me(i.CULL_FACE):ae(i.CULL_FACE);let q=O.side===jt;me&&(q=!q),te(q),O.blending===Ds&&O.transparent===!1?C(ni):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function re(O){O!==zp?(ae(i.CULL_FACE),O!==P&&(O===yh?i.cullFace(i.BACK):O===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),P=O}function se(O){O!==N&&(D&&i.lineWidth(O),N=O)}function Se(O,me,q){O?(ae(i.POLYGON_OFFSET_FILL),(B!==me||U!==q)&&(i.polygonOffset(me,q),B=me,U=q)):Me(i.POLYGON_OFFSET_FILL)}function _e(O){O?ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+G-1),K!==O&&(i.activeTexture(O),K=O)}function w(O,me,q){q===void 0&&(K===null?q=i.TEXTURE0+G-1:q=K);let he=oe[q];he===void 0&&(he={type:void 0,texture:void 0},oe[q]=he),(he.type!==O||he.texture!==me)&&(K!==q&&(i.activeTexture(q),K=q),i.bindTexture(O,me||ee[O]),he.type=O,he.texture=me)}function W(){const O=oe[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(O){Ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ve.copy(O))}function we(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function Ye(O,me){let q=l.get(me);q===void 0&&(q=new WeakMap,l.set(me,q));let he=q.get(O);he===void 0&&(he=i.getUniformBlockIndex(me,O.name),q.set(O,he))}function je(O,me){const he=l.get(me).get(O);c.get(me)!==he&&(i.uniformBlockBinding(me,he,O.__bindingPointIndex),c.set(me,he))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,oe={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,y=null,_=null,x=null,E=null,M=null,S=new ve(0,0,0),A=0,T=!1,b=null,P=null,N=null,B=null,U=null,Ve.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Me,bindFramebuffer:Re,drawBuffers:V,useProgram:Y,setBlending:C,setMaterial:de,setFlipSided:te,setCullFace:re,setLineWidth:se,setPolygonOffset:Se,setScissorTest:_e,activeTexture:I,bindTexture:w,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ce,texImage2D:ue,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:je,texStorage2D:et,texStorage3D:ge,texSubImage2D:ne,texSubImage3D:De,compressedTexSubImage2D:be,compressedTexSubImage3D:Ce,scissor:$e,viewport:we,reset:Ee}}function mu(i,e,t,n){const s=kx(n);switch(t){case Wf:return i*e;case Xf:return i*e;case jf:return i*e*2;case Fl:return i*e/s.components*s.byteLength;case Ol:return i*e/s.components*s.byteLength;case qf:return i*e*2/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case $f:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Bl:return i*e*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case kc:case Nc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xo:case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yf:case il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(i){switch(i){case si:case Hf:return{byteLength:1,components:1};case Nr:case Vf:case Hn:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case Xi:case kl:case Cn:return{byteLength:4,components:1};case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ux(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return f?new OffscreenCanvas(I,w):Or("canvas")}function g(I,w,W){let Q=1;const ce=_e(I);if((ce.width>W||ce.height>W)&&(Q=W/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ne=Math.floor(Q*ce.width),De=Math.floor(Q*ce.height);u===void 0&&(u=m(ne,De));const be=w?m(ne,De):u;return be.width=ne,be.height=De,be.getContext("2d").drawImage(I,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+De+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),I;return I}function v(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,w,W,Q,ce=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ne=w;if(w===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),w===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),w===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),w===i.RGBA){const De=ce?_a:it.getTransfer(Q);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=De===ft?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(I,w){let W;return I?w===null||w===Xi||w===Vs?W=i.DEPTH24_STENCIL8:w===Cn?W=i.DEPTH32F_STENCIL8:w===Nr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===Vs?W=i.DEPTH_COMPONENT24:w===Cn?W=i.DEPTH_COMPONENT32F:w===Nr&&(W=i.DEPTH_COMPONENT16),W}function E(I,w){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function M(I){const w=I.target;w.removeEventListener("dispose",M),A(w),w.isVideoTexture&&h.delete(w)}function S(I){const w=I.target;w.removeEventListener("dispose",S),b(w)}function A(I){const w=n.get(I);if(w.__webglInit===void 0)return;const W=I.source,Q=d.get(W);if(Q){const ce=Q[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(I),Object.keys(Q).length===0&&d.delete(W)}n.remove(I)}function T(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const W=I.source,Q=d.get(W);delete Q[w.__cacheKey],a.memory.textures--}function b(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ce=0;ce<w.__webglFramebuffer[Q].length;ce++)i.deleteFramebuffer(w.__webglFramebuffer[Q][ce]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=I.textures;for(let Q=0,ce=W.length;Q<ce;Q++){const ne=n.get(W[Q]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(W[Q])}n.remove(I)}let P=0;function N(){P=0}function B(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function G(I,w){const W=n.get(I);if(I.isVideoTexture&&se(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(W,I,w);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function D(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){F(W,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function z(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){F(W,I,w);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function k(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){ie(W,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const K={[An]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},oe={[an]:i.NEAREST,[cm]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},le={[fm]:i.NEVER,[_m]:i.ALWAYS,[dm]:i.LESS,[Zf]:i.LEQUAL,[pm]:i.EQUAL,[vm]:i.GEQUAL,[mm]:i.GREATER,[gm]:i.NOTEQUAL};function ye(I,w){if(w.type===Cn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===wa||w.magFilter===Kr||w.magFilter===Hi||w.minFilter===On||w.minFilter===wa||w.minFilter===Kr||w.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,oe[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===an||w.minFilter!==Kr&&w.minFilter!==Hi||w.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",M));const Q=w.source;let ce=d.get(Q);ce===void 0&&(ce={},d.set(Q,ce));const ne=U(w);if(ne!==I.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ce[ne].usedTimes++;const De=ce[I.__cacheKey];De!==void 0&&(ce[I.__cacheKey].usedTimes--,De.usedTimes===0&&T(w)),I.__cacheKey=ne,I.__webglTexture=ce[ne].texture}return W}function F(I,w,W){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const ce=Ve(I,w),ne=w.source;t.bindTexture(Q,I.__webglTexture,i.TEXTURE0+W);const De=n.get(ne);if(ne.version!==De.__version||ce===!0){t.activeTexture(i.TEXTURE0+W);const be=it.getPrimaries(it.workingColorSpace),Ce=w.colorSpace===mi?null:it.getPrimaries(w.colorSpace),et=w.colorSpace===mi||be===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ge=g(w.image,!1,s.maxTextureSize);ge=Se(w,ge);const ue=r.convert(w.format,w.colorSpace),Te=r.convert(w.type);let $e=_(w.internalFormat,ue,Te,w.colorSpace,w.isVideoTexture);ye(Q,w);let we;const Ye=w.mipmaps,je=w.isVideoTexture!==!0,Ee=De.__version===void 0||ce===!0,O=ne.dataReady,me=E(w,ge);if(w.isDepthTexture)$e=x(w.format===Gs,w.type),Ee&&(je?t.texStorage2D(i.TEXTURE_2D,1,$e,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,$e,ge.width,ge.height,0,ue,Te,null));else if(w.isDataTexture)if(Ye.length>0){je&&Ee&&t.texStorage2D(i.TEXTURE_2D,me,$e,Ye[0].width,Ye[0].height);for(let q=0,he=Ye.length;q<he;q++)we=Ye[q],je?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,we.width,we.height,ue,Te,we.data):t.texImage2D(i.TEXTURE_2D,q,$e,we.width,we.height,0,ue,Te,we.data);w.generateMipmaps=!1}else je?(Ee&&t.texStorage2D(i.TEXTURE_2D,me,$e,ge.width,ge.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,ue,Te,ge.data)):t.texImage2D(i.TEXTURE_2D,0,$e,ge.width,ge.height,0,ue,Te,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,$e,Ye[0].width,Ye[0].height,ge.depth);for(let q=0,he=Ye.length;q<he;q++)if(we=Ye[q],w.format!==vn)if(ue!==null)if(je){if(O)if(w.layerUpdates.size>0){const Pe=mu(we.width,we.height,w.format,w.type);for(const Le of w.layerUpdates){const Ke=we.data.subarray(Le*Pe/we.data.BYTES_PER_ELEMENT,(Le+1)*Pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Le,we.width,we.height,1,ue,Ke)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ge.depth,ue,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,$e,we.width,we.height,ge.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ge.depth,ue,Te,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,$e,we.width,we.height,ge.depth,0,ue,Te,we.data)}else{je&&Ee&&t.texStorage2D(i.TEXTURE_2D,me,$e,Ye[0].width,Ye[0].height);for(let q=0,he=Ye.length;q<he;q++)we=Ye[q],w.format!==vn?ue!==null?je?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,we.width,we.height,ue,we.data):t.compressedTexImage2D(i.TEXTURE_2D,q,$e,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,we.width,we.height,ue,Te,we.data):t.texImage2D(i.TEXTURE_2D,q,$e,we.width,we.height,0,ue,Te,we.data)}else if(w.isDataArrayTexture)if(je){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,$e,ge.width,ge.height,ge.depth),O)if(w.layerUpdates.size>0){const q=mu(ge.width,ge.height,w.format,w.type);for(const he of w.layerUpdates){const Pe=ge.data.subarray(he*q/ge.data.BYTES_PER_ELEMENT,(he+1)*q/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ge.width,ge.height,1,ue,Te,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ue,Te,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,ge.width,ge.height,ge.depth,0,ue,Te,ge.data);else if(w.isData3DTexture)je?(Ee&&t.texStorage3D(i.TEXTURE_3D,me,$e,ge.width,ge.height,ge.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ue,Te,ge.data)):t.texImage3D(i.TEXTURE_3D,0,$e,ge.width,ge.height,ge.depth,0,ue,Te,ge.data);else if(w.isFramebufferTexture){if(Ee)if(je)t.texStorage2D(i.TEXTURE_2D,me,$e,ge.width,ge.height);else{let q=ge.width,he=ge.height;for(let Pe=0;Pe<me;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,$e,q,he,0,ue,Te,null),q>>=1,he>>=1}}else if(Ye.length>0){if(je&&Ee){const q=_e(Ye[0]);t.texStorage2D(i.TEXTURE_2D,me,$e,q.width,q.height)}for(let q=0,he=Ye.length;q<he;q++)we=Ye[q],je?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ue,Te,we):t.texImage2D(i.TEXTURE_2D,q,$e,ue,Te,we);w.generateMipmaps=!1}else if(je){if(Ee){const q=_e(ge);t.texStorage2D(i.TEXTURE_2D,me,$e,q.width,q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Te,ge)}else t.texImage2D(i.TEXTURE_2D,0,$e,ue,Te,ge);v(w)&&p(Q),De.__version=ne.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ie(I,w,W){if(w.image.length!==6)return;const Q=Ve(I,w),ce=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const ne=n.get(ce);if(ce.version!==ne.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);const De=it.getPrimaries(it.workingColorSpace),be=w.colorSpace===mi?null:it.getPrimaries(w.colorSpace),Ce=w.colorSpace===mi||De===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let he=0;he<6;he++)!et&&!ge?ue[he]=g(w.image[he],!0,s.maxCubemapSize):ue[he]=ge?w.image[he].image:w.image[he],ue[he]=Se(w,ue[he]);const Te=ue[0],$e=r.convert(w.format,w.colorSpace),we=r.convert(w.type),Ye=_(w.internalFormat,$e,we,w.colorSpace),je=w.isVideoTexture!==!0,Ee=ne.__version===void 0||Q===!0,O=ce.dataReady;let me=E(w,Te);ye(i.TEXTURE_CUBE_MAP,w);let q;if(et){je&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ye,Te.width,Te.height);for(let he=0;he<6;he++){q=ue[he].mipmaps;for(let Pe=0;Pe<q.length;Pe++){const Le=q[Pe];w.format!==vn?$e!==null?je?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Le.width,Le.height,$e,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Le.width,Le.height,$e,we,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ye,Le.width,Le.height,0,$e,we,Le.data)}}}else{if(q=w.mipmaps,je&&Ee){q.length>0&&me++;const he=_e(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(ge){je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ue[he].width,ue[he].height,$e,we,ue[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,ue[he].width,ue[he].height,0,$e,we,ue[he].data);for(let Pe=0;Pe<q.length;Pe++){const Ke=q[Pe].image[he].image;je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Ke.width,Ke.height,$e,we,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ye,Ke.width,Ke.height,0,$e,we,Ke.data)}}else{je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,we,ue[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,$e,we,ue[he]);for(let Pe=0;Pe<q.length;Pe++){const Le=q[Pe];je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,$e,we,Le.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ye,$e,we,Le.image[he])}}}v(w)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ce.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ee(I,w,W,Q,ce,ne){const De=r.convert(W.format,W.colorSpace),be=r.convert(W.type),Ce=_(W.internalFormat,De,be,W.colorSpace),et=n.get(w),ge=n.get(W);if(ge.__renderTarget=w,!et.__hasExternalTextures){const ue=Math.max(1,w.width>>ne),Te=Math.max(1,w.height>>ne);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,Ce,ue,Te,w.depth,0,De,be,null):t.texImage2D(ce,ne,Ce,ue,Te,0,De,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),re(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ce,ge.__webglTexture,0,te(w)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ce,ge.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(I,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const Q=w.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,ne=x(w.stencilBuffer,ce),De=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=te(w);re(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ne,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,I)}else{const Q=w.textures;for(let ce=0;ce<Q.length;ce++){const ne=Q[ce],De=r.convert(ne.format,ne.colorSpace),be=r.convert(ne.type),Ce=_(ne.internalFormat,De,be,ne.colorSpace),et=te(w);W&&re(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ce,w.width,w.height):re(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ce=Q.__webglTexture,ne=te(w);if(w.depthTexture.format===ks)re(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(w.depthTexture.format===Gs)re(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Re(I){const w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ce=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),w.__depthDisposeCallback=ce}w.__boundDepthTexture=Q}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Me(w.__webglFramebuffer,I)}else if(W){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),ae(w.__webglDepthbuffer[Q],I,!1);else{const ce=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ae(w.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(I,w,W){const Q=n.get(I);w!==void 0&&ee(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Re(I)}function Y(I){const w=I.texture,W=n.get(I),Q=n.get(w);I.addEventListener("dispose",S);const ce=I.textures,ne=I.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++),ne){W.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[be]=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)W.__webglFramebuffer[be][Ce]=i.createFramebuffer()}else W.__webglFramebuffer[be]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)W.__webglFramebuffer[be]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(De)for(let be=0,Ce=ce.length;be<Ce;be++){const et=n.get(ce[be]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&re(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<ce.length;be++){const Ce=ce[be];W.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[be]);const et=r.convert(Ce.format,Ce.colorSpace),ge=r.convert(Ce.type),ue=_(Ce.internalFormat,et,ge,Ce.colorSpace,I.isXRRenderTarget===!0),Te=te(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,W.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ye(i.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)ee(W.__webglFramebuffer[be][Ce],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce);else ee(W.__webglFramebuffer[be],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let be=0,Ce=ce.length;be<Ce;be++){const et=ce[be],ge=n.get(et);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ye(i.TEXTURE_2D,et),ee(W.__webglFramebuffer,I,et,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),v(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),ye(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)ee(W.__webglFramebuffer[Ce],I,w,i.COLOR_ATTACHMENT0,be,Ce);else ee(W.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,be,0);v(w)&&p(be),t.unbindTexture()}I.depthBuffer&&Re(I)}function j(I){const w=I.textures;for(let W=0,Q=w.length;W<Q;W++){const ce=w[W];if(v(ce)){const ne=y(I),De=n.get(ce).__webglTexture;t.bindTexture(ne,De),p(ne),t.unbindTexture()}}}const H=[],C=[];function de(I){if(I.samples>0){if(re(I)===!1){const w=I.textures,W=I.width,Q=I.height;let ce=i.COLOR_BUFFER_BIT;const ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),be=w.length>1;if(be)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const et=n.get(w[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,ce,i.NEAREST),c===!0&&(H.length=0,C.length=0,H.push(i.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(H.push(ne),C.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const et=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function te(I){return Math.min(s.maxSamples,I.samples)}function re(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function se(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Se(I,w){const W=I.colorSpace,Q=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==qs&&W!==mi&&(it.getTransfer(W)===ft?(Q!==vn||ce!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=V,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=re}function Nx(i,e){function t(n,s=mi){let r;const a=it.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hf)return i.BYTE;if(n===Vf)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Wf)return i.ALPHA;if(n===$f)return i.RGB;if(n===vn)return i.RGBA;if(n===Xf)return i.LUMINANCE;if(n===jf)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===qf)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===$o)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===Uc||n===Nc||n===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===zc||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===zc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc||n===$c||n===Xc||n===jc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===tl||n===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===il||n===sl||n===rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Fx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),p=this._getHandJoint(l,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:zx,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends Ys{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const g=new Hx,v=t.getContextAttributes();let p=null,y=null;const _=[],x=[],E=new fe;let M=null;const S=new pn;S.viewport=new Tt;const A=new pn;A.viewport=new Tt;const T=[S,A],b=new Fx;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ie=_[F];return ie===void 0&&(ie=new Ja,_[F]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(F){let ie=_[F];return ie===void 0&&(ie=new Ja,_[F]=ie),ie.getGripSpace()},this.getHand=function(F){let ie=_[F];return ie===void 0&&(ie=new Ja,_[F]=ie),ie.getHandSpace()};function B(F){const ie=x.indexOf(F.inputSource);if(ie===-1)return;const ee=_[ie];ee!==void 0&&(ee.update(F.inputSource,F.frame,l||a),ee.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",G);for(let F=0;F<_.length;F++){const ie=x[F];ie!==null&&(x[F]=null,_[F].disconnect(ie))}P=null,N=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:vn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,ee=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Gs:ks,ee=v.stencil?Vs:Xi);const Me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:vn,type:si,depthTexture:new cd(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(F){for(let ie=0;ie<F.removed.length;ie++){const ee=F.removed[ie],ae=x.indexOf(ee);ae>=0&&(x[ae]=null,_[ae].disconnect(ee))}for(let ie=0;ie<F.added.length;ie++){const ee=F.added[ie];let ae=x.indexOf(ee);if(ae===-1){for(let Re=0;Re<_.length;Re++)if(Re>=x.length){x.push(ee),ae=Re;break}else if(x[Re]===null){x[Re]=ee,ae=Re;break}if(ae===-1)break}const Me=_[ae];Me&&Me.connect(ee)}}const D=new L,z=new L;function k(F,ie,ee){D.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const ae=D.distanceTo(z),Me=ie.projectionMatrix.elements,Re=ee.projectionMatrix.elements,V=Me[14]/(Me[10]-1),Y=Me[14]/(Me[10]+1),j=(Me[9]+1)/Me[5],H=(Me[9]-1)/Me[5],C=(Me[8]-1)/Me[0],de=(Re[8]+1)/Re[0],te=V*C,re=V*de,se=ae/(-C+de),Se=se*-C;if(ie.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Se),F.translateZ(se),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Me[10]===-1)F.projectionMatrix.copy(ie.projectionMatrix),F.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const _e=V+se,I=Y+se,w=te-Se,W=re+(ae-Se),Q=j*Y/I*_e,ce=H*Y/I*_e;F.projectionMatrix.makePerspective(w,W,Q,ce,_e,I),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function K(F,ie){ie===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ie.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let ie=F.near,ee=F.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),b.near=A.near=S.near=ie,b.far=A.far=S.far=ee,(P!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),S.layers.mask=F.layers.mask|2,A.layers.mask=F.layers.mask|4,b.layers.mask=S.layers.mask|A.layers.mask;const ae=F.parent,Me=b.cameras;K(b,ae);for(let Re=0;Re<Me.length;Re++)K(Me[Re],ae);Me.length===2?k(b,S,A):b.projectionMatrix.copy(S.projectionMatrix),oe(F,b,ae)};function oe(F,ie,ee){ee===null?F.matrix.copy(ie.matrixWorld):(F.matrix.copy(ee.matrixWorld),F.matrix.invert(),F.matrix.multiply(ie.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ie.projectionMatrix),F.projectionMatrixInverse.copy(ie.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Fr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let le=null;function ye(F,ie){if(h=ie.getViewerPose(l||a),m=ie,h!==null){const ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Re=0;Re<ee.length;Re++){const V=ee[Re];let Y=null;if(f!==null)Y=f.getViewport(V);else{const H=u.getViewSubImage(d,V);Y=H.viewport,Re===0&&(e.setRenderTargetTextures(y,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(y))}let j=T[Re];j===void 0&&(j=new pn,j.layers.enable(Re),j.viewport=new Tt,T[Re]=j),j.matrix.fromArray(V.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(V.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Y.x,Y.y,Y.width,Y.height),Re===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(j)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Re=u.getDepthInformation(ee[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,s.renderState)}}for(let ee=0;ee<_.length;ee++){const ae=x[ee],Me=_[ee];ae!==null&&Me!==void 0&&Me.update(ae,ie,l||a)}le&&le(F,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Ve=new ad;Ve.setAnimationLoop(ye),this.setAnimationLoop=function(F){le=F},this.dispose=function(){}}}const Ci=new Bt,Gx=new Ne;function Wx(i,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,sd(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),u(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(r(v,p),m(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),g(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(a(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?c(v,p,y,_):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===jt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===jt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(v.envMap.value=_,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),v.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Ci)),v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function a(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,y,_){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*y,v.scale.value=_*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function u(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,y){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const y=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $x(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",v));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(d(y),r[y.id]=M)}function h(y){const _=u();y.__bindingPointIndex=_;const x=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,S=x.length;M<S;M++){const A=Array.isArray(x[M])?x[M]:[x[M]];for(let T=0,b=A.length;T<b;T++){const P=A[T];if(f(P,M,T,E)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let G=0;G<B.length;G++){const D=B[G],z=g(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,N+U,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,x,E){const M=y.value,S=_+"_"+x;if(E[S]===void 0)return typeof M=="number"||typeof M=="boolean"?E[S]=M:E[S]=M.clone(),!0;{const A=E[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return E[S]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function m(y){const _=y.uniforms;let x=0;const E=16;for(let S=0,A=_.length;S<A;S++){const T=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,P=T.length;b<P;b++){const N=T[b],B=Array.isArray(N.value)?N.value:[N.value];for(let U=0,G=B.length;U<G;U++){const D=B[U],z=g(D),k=x%E,K=k%z.boundary,oe=k+K;x+=K,oe!==0&&E-oe<z.storage&&(x+=E-oe),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=z.storage}}}const M=x%E;return M>0&&(x+=E-M),y.__size=x,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function v(y){const _=y.target;_.removeEventListener("dispose",v);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Xx{constructor(e={}){const{canvas:t=Um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let E=!1,M=0,S=0,A=null,T=-1,b=null;const P=new Tt,N=new Tt;let B=null;const U=new ve(0);let G=0,D=t.width,z=t.height,k=1,K=null,oe=null;const le=new Tt(0,0,D,z),ye=new Tt(0,0,D,z);let Ve=!1;const F=new Wl;let ie=!1,ee=!1;const ae=new Ne,Me=new Ne,Re=new L,V=new Tt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function H(){return A===null?k:1}let C=n;function de(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Le,!1),C===null){const $="webgl2";if(C=de($,R),C===null)throw de($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,re,se,Se,_e,I,w,W,Q,ce,ne,De,be,Ce,et,ge,ue,Te,$e,we,Ye,je,Ee,O;function me(){te=new Kv(C),te.init(),je=new Nx(C,te),re=new $v(C,te,e,je),se=new Dx(C,te),re.reverseDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Se=new e_(C),_e=new _x,I=new Ux(C,te,se,_e,re,je,Se),w=new jv(x),W=new Zv(x),Q=new a0(C),Ee=new Gv(C,Q),ce=new Jv(C,Q,Se,Ee),ne=new n_(C,ce,Q,Se),$e=new t_(C,re,I),ge=new Xv(_e),De=new vx(x,w,W,te,re,Ee,ge),be=new Wx(x,_e),Ce=new yx,et=new Ex(te),Te=new Vv(x,w,W,se,ne,f,c),ue=new Lx(x,ne,re),O=new $x(C,Se,re,se),we=new Wv(C,te,Se),Ye=new Qv(C,te,Se),Se.programs=De.programs,x.capabilities=re,x.extensions=te,x.properties=_e,x.renderLists=Ce,x.shadowMap=ue,x.state=se,x.info=Se}me();const q=new Vx(x,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(D,z,!1))},this.getSize=function(R){return R.set(D,z)},this.setSize=function(R,$,Z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,z=$,t.width=Math.floor(R*k),t.height=Math.floor($*k),Z===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(D*k,z*k).floor()},this.setDrawingBufferSize=function(R,$,Z){D=R,z=$,k=Z,t.width=Math.floor(R*Z),t.height=Math.floor($*Z),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,$,Z,J){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,$,Z,J),se.viewport(P.copy(le).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,$,Z,J){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,$,Z,J),se.scissor(N.copy(ye).multiplyScalar(k).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){se.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(R=!0,$=!0,Z=!0){let J=0;if(R){let X=!1;if(A!==null){const xe=A.texture.format;X=xe===Bl||xe===zl||xe===Ol}if(X){const xe=A.texture.type,Ie=xe===si||xe===Xi||xe===Nr||xe===Vs||xe===Ul||xe===Nl,Fe=Te.getClearColor(),Oe=Te.getClearAlpha(),Ze=Fe.r,Je=Fe.g,ze=Fe.b;Ie?(m[0]=Ze,m[1]=Je,m[2]=ze,m[3]=Oe,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Ze,g[1]=Je,g[2]=ze,g[3]=Oe,C.clearBufferiv(C.COLOR,0,g))}else J|=C.COLOR_BUFFER_BIT}$&&(J|=C.DEPTH_BUFFER_BIT),Z&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ce.dispose(),et.dispose(),_e.dispose(),w.dispose(),W.dispose(),ne.dispose(),Ee.dispose(),O.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",fh),q.removeEventListener("sessionend",dh),Mi.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Se.autoReset,$=ue.enabled,Z=ue.autoUpdate,J=ue.needsUpdate,X=ue.type;me(),Se.autoReset=R,ue.enabled=$,ue.autoUpdate=Z,ue.needsUpdate=J,ue.type=X}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ke(R){const $=R.target;$.removeEventListener("dispose",Ke),bt($)}function bt(R){Nt(R),_e.remove(R)}function Nt(R){const $=_e.get(R).programs;$!==void 0&&($.forEach(function(Z){De.releaseProgram(Z)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,Z,J,X,xe){$===null&&($=Y);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Fe=kp(R,$,Z,J,X);se.setMaterial(J,Ie);let Oe=Z.index,Ze=1;if(J.wireframe===!0){if(Oe=ce.getWireframeAttribute(Z),Oe===void 0)return;Ze=2}const Je=Z.drawRange,ze=Z.attributes.position;let st=Je.start*Ze,mt=(Je.start+Je.count)*Ze;xe!==null&&(st=Math.max(st,xe.start*Ze),mt=Math.min(mt,(xe.start+xe.count)*Ze)),Oe!==null?(st=Math.max(st,0),mt=Math.min(mt,Oe.count)):ze!=null&&(st=Math.max(st,0),mt=Math.min(mt,ze.count));const gt=mt-st;if(gt<0||gt===1/0)return;Ee.setup(X,J,Fe,Z,Oe);let Yt,ct=we;if(Oe!==null&&(Yt=Q.get(Oe),ct=Ye,ct.setIndex(Yt)),X.isMesh)J.wireframe===!0?(se.setLineWidth(J.wireframeLinewidth*H()),ct.setMode(C.LINES)):ct.setMode(C.TRIANGLES);else if(X.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),se.setLineWidth(Ge*H()),X.isLineSegments?ct.setMode(C.LINES):X.isLineLoop?ct.setMode(C.LINE_LOOP):ct.setMode(C.LINE_STRIP)}else X.isPoints?ct.setMode(C.POINTS):X.isSprite&&ct.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ge=X._multiDrawStarts,$n=X._multiDrawCounts,lt=X._multiDrawCount,bn=Oe?Q.get(Oe).bytesPerElement:1,ns=_e.get(J).currentProgram.getUniforms();for(let Qt=0;Qt<lt;Qt++)ns.setValue(C,"_gl_DrawID",Qt),ct.render(Ge[Qt]/bn,$n[Qt])}else if(X.isInstancedMesh)ct.renderInstances(st,gt,X.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,$n=Math.min(Z.instanceCount,Ge);ct.renderInstances(st,gt,$n)}else ct.render(st,gt)};function ut(R,$,Z){R.transparent===!0&&R.side===Jt&&R.forceSinglePass===!1?(R.side=jt,R.needsUpdate=!0,Zr(R,$,Z),R.side=yi,R.needsUpdate=!0,Zr(R,$,Z),R.side=Jt):Zr(R,$,Z)}this.compile=function(R,$,Z=null){Z===null&&(Z=R),p=et.get(Z),p.init($),_.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const J=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Ie=0;Ie<xe.length;Ie++){const Fe=xe[Ie];ut(Fe,Z,X),J.add(Fe)}else ut(xe,Z,X),J.add(xe)}),_.pop(),p=null,J},this.compileAsync=function(R,$,Z=null){const J=this.compile(R,$,Z);return new Promise(X=>{function xe(){if(J.forEach(function(Ie){_e.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){X(R);return}setTimeout(xe,10)}te.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let yn=null;function Wn(R){yn&&yn(R)}function fh(){Mi.stop()}function dh(){Mi.start()}const Mi=new ad;Mi.setAnimationLoop(Wn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){yn=R,q.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},q.addEventListener("sessionstart",fh),q.addEventListener("sessionend",dh),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera($),$=q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,$,A),p=et.get(R,_.length),p.init($),_.push(p),Me.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),F.setFromProjectionMatrix(Me),ee=this.localClippingEnabled,ie=ge.init(this.clippingPlanes,ee),v=Ce.get(R,y.length),v.init(),y.push(v),q.enabled===!0&&q.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&Ta(xe,$,-1/0,x.sortObjects)}Ta(R,$,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,oe),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&Te.addToRenderList(v,R),this.info.render.frame++,ie===!0&&ge.beginShadows();const Z=p.state.shadowsArray;ue.render(Z,R,$),ie===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,X=v.transmissive;if(p.setupLights(),$.isArrayCamera){const xe=$.cameras;if(X.length>0)for(let Ie=0,Fe=xe.length;Ie<Fe;Ie++){const Oe=xe[Ie];mh(J,X,R,Oe)}j&&Te.render(R);for(let Ie=0,Fe=xe.length;Ie<Fe;Ie++){const Oe=xe[Ie];ph(v,R,Oe,Oe.viewport)}}else X.length>0&&mh(J,X,R,$),j&&Te.render(R),ph(v,R,$);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,$),Ee.resetDefaultState(),T=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],ie===!0&&ge.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function Ta(R,$,Z,J){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){J&&V.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);const Ie=ne.update(R),Fe=R.material;Fe.visible&&v.push(R,Ie,Fe,Z,V.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const Ie=ne.update(R),Fe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),V.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),V.copy(Ie.boundingSphere.center)),V.applyMatrix4(R.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){const Oe=Ie.groups;for(let Ze=0,Je=Oe.length;Ze<Je;Ze++){const ze=Oe[Ze],st=Fe[ze.materialIndex];st&&st.visible&&v.push(R,Ie,st,Z,V.z,ze)}}else Fe.visible&&v.push(R,Ie,Fe,Z,V.z,null)}}const xe=R.children;for(let Ie=0,Fe=xe.length;Ie<Fe;Ie++)Ta(xe[Ie],$,Z,J)}function ph(R,$,Z,J){const X=R.opaque,xe=R.transmissive,Ie=R.transparent;p.setupLightsView(Z),ie===!0&&ge.setGlobalState(x.clippingPlanes,Z),J&&se.viewport(P.copy(J)),X.length>0&&Yr(X,$,Z),xe.length>0&&Yr(xe,$,Z),Ie.length>0&&Yr(Ie,$,Z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function mh(R,$,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new _n(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Hn:si,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const xe=p.state.transmissionRenderTarget[J.id],Ie=J.viewport||P;xe.setSize(Ie.z,Ie.w);const Fe=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(U),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),j&&Te.render(Z);const Oe=x.toneMapping;x.toneMapping=xi;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ie===!0&&ge.setGlobalState(x.clippingPlanes,J),Yr(R,Z,J),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,st=$.length;ze<st;ze++){const mt=$[ze],gt=mt.object,Yt=mt.geometry,ct=mt.material,Ge=mt.group;if(ct.side===Jt&&gt.layers.test(J.layers)){const $n=ct.side;ct.side=jt,ct.needsUpdate=!0,gh(gt,Z,J,Yt,ct,Ge),ct.side=$n,ct.needsUpdate=!0,Je=!0}}Je===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe))}x.setRenderTarget(Fe),x.setClearColor(U,G),Ze!==void 0&&(J.viewport=Ze),x.toneMapping=Oe}function Yr(R,$,Z){const J=$.isScene===!0?$.overrideMaterial:null;for(let X=0,xe=R.length;X<xe;X++){const Ie=R[X],Fe=Ie.object,Oe=Ie.geometry,Ze=J===null?Ie.material:J,Je=Ie.group;Fe.layers.test(Z.layers)&&gh(Fe,$,Z,Oe,Ze,Je)}}function gh(R,$,Z,J,X,xe){R.onBeforeRender(x,$,Z,J,X,xe),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,$,Z,J,R,xe),X.transparent===!0&&X.side===Jt&&X.forceSinglePass===!1?(X.side=jt,X.needsUpdate=!0,x.renderBufferDirect(Z,$,J,X,R,xe),X.side=yi,X.needsUpdate=!0,x.renderBufferDirect(Z,$,J,X,R,xe),X.side=Jt):x.renderBufferDirect(Z,$,J,X,R,xe),R.onAfterRender(x,$,Z,J,X,xe)}function Zr(R,$,Z){$.isScene!==!0&&($=Y);const J=_e.get(R),X=p.state.lights,xe=p.state.shadowsArray,Ie=X.state.version,Fe=De.getParameters(R,X.state,xe,$,Z),Oe=De.getProgramCacheKey(Fe);let Ze=J.programs;J.environment=R.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(R.isMeshStandardMaterial?W:w).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Ke),Ze=new Map,J.programs=Ze);let Je=Ze.get(Oe);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Ie)return _h(R,Fe),Je}else Fe.uniforms=De.getUniforms(R),R.onBeforeCompile(Fe,x),Je=De.acquireProgram(Fe,Oe),Ze.set(Oe,Je),J.uniforms=Fe.uniforms;const ze=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=ge.uniform),_h(R,Fe),J.needsLights=Np(R),J.lightsStateVersion=Ie,J.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function vh(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=jo.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function _h(R,$){const Z=_e.get(R);Z.outputColorSpace=$.outputColorSpace,Z.batching=$.batching,Z.batchingColor=$.batchingColor,Z.instancing=$.instancing,Z.instancingColor=$.instancingColor,Z.instancingMorph=$.instancingMorph,Z.skinning=$.skinning,Z.morphTargets=$.morphTargets,Z.morphNormals=$.morphNormals,Z.morphColors=$.morphColors,Z.morphTargetsCount=$.morphTargetsCount,Z.numClippingPlanes=$.numClippingPlanes,Z.numIntersection=$.numClipIntersection,Z.vertexAlphas=$.vertexAlphas,Z.vertexTangents=$.vertexTangents,Z.toneMapping=$.toneMapping}function kp(R,$,Z,J,X){$.isScene!==!0&&($=Y),I.resetTextureUnits();const xe=$.fog,Ie=J.isMeshStandardMaterial?$.environment:null,Fe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qs,Oe=(J.isMeshStandardMaterial?W:w).get(J.envMap||Ie),Ze=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!Z.morphAttributes.position,st=!!Z.morphAttributes.normal,mt=!!Z.morphAttributes.color;let gt=xi;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=Yt!==void 0?Yt.length:0,Ge=_e.get(J),$n=p.state.lights;if(ie===!0&&(ee===!0||R!==b)){const cn=R===b&&J.id===T;ge.setState(J,R,cn)}let lt=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==$n.state.version||Ge.outputColorSpace!==Fe||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isBatchedMesh&&Ge.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ge.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ge.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ge.instancingMorph===!1&&X.morphTexture!==null||Ge.envMap!==Oe||J.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ge.numPlanes||Ge.numIntersection!==ge.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==Je||Ge.morphTargets!==ze||Ge.morphNormals!==st||Ge.morphColors!==mt||Ge.toneMapping!==gt||Ge.morphTargetsCount!==ct)&&(lt=!0):(lt=!0,Ge.__version=J.version);let bn=Ge.currentProgram;lt===!0&&(bn=Zr(J,$,X));let ns=!1,Qt=!1,Qs=!1;const vt=bn.getUniforms(),In=Ge.uniforms;if(se.useProgram(bn.program)&&(ns=!0,Qt=!0,Qs=!0),J.id!==T&&(T=J.id,Qt=!0),ns||b!==R){se.buffers.depth.getReversed()?(ae.copy(R.projectionMatrix),Fm(ae),Om(ae),vt.setValue(C,"projectionMatrix",ae)):vt.setValue(C,"projectionMatrix",R.projectionMatrix),vt.setValue(C,"viewMatrix",R.matrixWorldInverse);const ri=vt.map.cameraPosition;ri!==void 0&&ri.setValue(C,Re.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Qt=!0,Qs=!0)}if(X.isSkinnedMesh){vt.setOptional(C,X,"bindMatrix"),vt.setOptional(C,X,"bindMatrixInverse");const cn=X.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),vt.setValue(C,"boneTexture",cn.boneTexture,I))}X.isBatchedMesh&&(vt.setOptional(C,X,"batchingTexture"),vt.setValue(C,"batchingTexture",X._matricesTexture,I),vt.setOptional(C,X,"batchingIdTexture"),vt.setValue(C,"batchingIdTexture",X._indirectTexture,I),vt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(C,"batchingColorTexture",X._colorsTexture,I));const er=Z.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&$e.update(X,Z,bn),(Qt||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,vt.setValue(C,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(In.envMap.value=Oe,In.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&$.environment!==null&&(In.envMapIntensity.value=$.environmentIntensity),Qt&&(vt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Up(In,Qs),xe&&J.fog===!0&&be.refreshFogUniforms(In,xe),be.refreshMaterialUniforms(In,J,k,z,p.state.transmissionRenderTarget[R.id]),jo.upload(C,vh(Ge),In,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jo.upload(C,vh(Ge),In,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(C,"center",X.center),vt.setValue(C,"modelViewMatrix",X.modelViewMatrix),vt.setValue(C,"normalMatrix",X.normalMatrix),vt.setValue(C,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const cn=J.uniformsGroups;for(let ri=0,oi=cn.length;ri<oi;ri++){const xh=cn[ri];O.update(xh,bn),O.bind(xh,bn)}}return bn}function Up(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Np(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,$,Z){_e.get(R.texture).__webglTexture=$,_e.get(R.depthTexture).__webglTexture=Z;const J=_e.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const Z=_e.get(R);Z.__webglFramebuffer=$,Z.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,Z=0){A=R,M=$,S=Z;let J=!0,X=null,xe=!1,Ie=!1;if(R){const Oe=_e.get(R);if(Oe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(C.FRAMEBUFFER,null),J=!1;else if(Oe.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Oe.__hasExternalTextures)I.rebindTextures(R,_e.get(R.texture).__webglTexture,_e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&_e.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Je=_e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[$])?X=Je[$][Z]:X=Je[$],xe=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?X=_e.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[Z]:X=Je,P.copy(R.viewport),N.copy(R.scissor),B=R.scissorTest}else P.copy(le).multiplyScalar(k).floor(),N.copy(ye).multiplyScalar(k).floor(),B=Ve;if(se.bindFramebuffer(C.FRAMEBUFFER,X)&&J&&se.drawBuffers(R,X),se.viewport(P),se.scissor(N),se.setScissorTest(B),xe){const Oe=_e.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,Z)}else if(Ie){const Oe=_e.get(R.texture),Ze=$||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,Ze)}T=-1},this.readRenderTargetPixels=function(R,$,Z,J,X,xe,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){se.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const Oe=R.texture,Ze=Oe.format,Je=Oe.type;if(!re.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-J&&Z>=0&&Z<=R.height-X&&C.readPixels($,Z,J,X,je.convert(Ze),je.convert(Je),xe)}finally{const Oe=A!==null?_e.get(A).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,$,Z,J,X,xe,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){const Oe=R.texture,Ze=Oe.format,Je=Oe.type;if(!re.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-J&&Z>=0&&Z<=R.height-X){se.bindFramebuffer(C.FRAMEBUFFER,Fe);const ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),C.readPixels($,Z,J,X,je.convert(Ze),je.convert(Je),0);const st=A!==null?_e.get(A).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,st);const mt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nm(C,mt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.deleteBuffer(ze),C.deleteSync(mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,Z=0){R.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-Z),X=Math.floor(R.image.width*J),xe=Math.floor(R.image.height*J),Ie=$!==null?$.x:0,Fe=$!==null?$.y:0;I.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Ie,Fe,X,xe),se.unbindTexture()},this.copyTextureToTexture=function(R,$,Z=null,J=null,X=0){R.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],$=arguments[2],X=arguments[3]||0,Z=null);let xe,Ie,Fe,Oe,Ze,Je,ze,st,mt;const gt=R.isCompressedTexture?R.mipmaps[X]:R.image;Z!==null?(xe=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,Ze=Z.min.y,Je=Z.isBox3?Z.min.z:0):(xe=gt.width,Ie=gt.height,Fe=gt.depth||1,Oe=0,Ze=0,Je=0),J!==null?(ze=J.x,st=J.y,mt=J.z):(ze=0,st=0,mt=0);const Yt=je.convert($.format),ct=je.convert($.type);let Ge;$.isData3DTexture?(I.setTexture3D($,0),Ge=C.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(I.setTexture2DArray($,0),Ge=C.TEXTURE_2D_ARRAY):(I.setTexture2D($,0),Ge=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,$.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,$.unpackAlignment);const $n=C.getParameter(C.UNPACK_ROW_LENGTH),lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),bn=C.getParameter(C.UNPACK_SKIP_PIXELS),ns=C.getParameter(C.UNPACK_SKIP_ROWS),Qt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Je);const Qs=R.isDataArrayTexture||R.isData3DTexture,vt=$.isDataArrayTexture||$.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const In=_e.get(R),er=_e.get($),cn=_e.get(In.__renderTarget),ri=_e.get(er.__renderTarget);se.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Fe;oi++)Qs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(R).__webglTexture,X,Je+oi),R.isDepthTexture?(vt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get($).__webglTexture,X,mt+oi),C.blitFramebuffer(Oe,Ze,xe,Ie,ze,st,xe,Ie,C.DEPTH_BUFFER_BIT,C.NEAREST)):vt?C.copyTexSubImage3D(Ge,X,ze,st,mt+oi,Oe,Ze,xe,Ie):C.copyTexSubImage2D(Ge,X,ze,st,mt+oi,Oe,Ze,xe,Ie);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else vt?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(Ge,X,ze,st,mt,xe,Ie,Fe,Yt,ct,gt.data):$.isCompressedArrayTexture?C.compressedTexSubImage3D(Ge,X,ze,st,mt,xe,Ie,Fe,Yt,gt.data):C.texSubImage3D(Ge,X,ze,st,mt,xe,Ie,Fe,Yt,ct,gt):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,X,ze,st,xe,Ie,Yt,ct,gt.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,X,ze,st,gt.width,gt.height,Yt,gt.data):C.texSubImage2D(C.TEXTURE_2D,X,ze,st,xe,Ie,Yt,ct,gt);C.pixelStorei(C.UNPACK_ROW_LENGTH,$n),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ns),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qt),X===0&&$.generateMipmaps&&C.generateMipmap(Ge),se.unbindTexture()},this.copyTextureToTexture3D=function(R,$,Z=null,J=null,X=0){return R.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,R=arguments[2],$=arguments[3],X=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,Z,J,X)},this.initRenderTarget=function(R){_e.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),se.unbindTexture()},this.resetState=function(){M=0,S=0,A=null,se.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gu extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ol,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new L;class ia{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dd extends Pn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const or=new L,_s=new L,xs=new L,ys=new fe,ar=new fe,pd=new Ne,xo=new L,cr=new L,yo=new L,vu=new fe,Qa=new fe,_u=new fe;class qx extends wt{constructor(e=new dd){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jx(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new ia(n,3,0,!1)),vs.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;bo(xo.set(-.5,-.5,0),xs,a,_s,s,r),bo(cr.set(.5,-.5,0),xs,a,_s,s,r),bo(yo.set(.5,.5,0),xs,a,_s,s,r),vu.set(0,0),Qa.set(1,0),_u.set(1,1);let o=e.ray.intersectTriangle(xo,cr,yo,!1,or);if(o===null&&(bo(cr.set(-.5,.5,0),xs,a,_s,s,r),Qa.set(0,1),o=e.ray.intersectTriangle(xo,yo,cr,!1,or),o===null))return;const c=e.ray.origin.distanceTo(or);c<e.near||c>e.far||t.push({distance:c,point:or.clone(),uv:gn.getInterpolation(or,xo,cr,yo,vu,Qa,_u,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bo(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*ys.x-s*ys.y,ar.y=s*ys.x+r*ys.y):ar.copy(ys),i.copy(e),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(pd)}class Yx extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=an,h=an,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=new Ne,Zx=new Ne;class jl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Zx;xu.multiplyMatrices(o,t[r]),xu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new md(t,e,e,vn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Yx),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class hl extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Ne,yu=new Ne,Mo=[],bu=new Ki,Kx=new Ne,lr=new pe,hr=new Ji;class sa extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),bu.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),hr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),yu.multiplyMatrices(n,bs),lr.matrixWorld=yu,lr.raycast(e,Mo);for(let a=0,o=Mo.length;a<o;a++){const c=Mo[a];c.instanceId=r,c.object=this,t.push(c)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(s*this.count),s,this.count,Fl,Cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qo extends Pn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new L,oa=new L,Mu=new Ne,ur=new Gl,So=new Ji,ec=new L,Su=new L;class Jx extends wt{constructor(e=new ht,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ra.fromBufferAttribute(t,s-1),oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ra.distanceTo(oa);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Mu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,v=m-1;g<v;g+=l){const p=h.getX(g),y=h.getX(g+1),_=To(this,e,ur,c,p,y);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(m-1),v=h.getX(f),p=To(this,e,ur,c,g,v);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,v=m-1;g<v;g+=l){const p=To(this,e,ur,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=To(this,e,ur,c,m-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function To(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(ra.fromBufferAttribute(a,s),oa.fromBufferAttribute(a,r),t.distanceSqToSegment(ra,oa,ec,Su)>n)return;ec.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ec);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Tu=new L,wu=new L;class Eu extends Jx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(wu);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vi extends Pn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new Ne,ul=new Gl,wo=new Ji,Eo=new L;class Ns extends wt{constructor(e=new ht,t=new vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Au.copy(s).invert(),ul.copy(e.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const v=l.getX(m);Eo.fromBufferAttribute(u,v),Cu(Eo,v,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)Eo.fromBufferAttribute(u,m),Cu(Eo,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cu(i,e,t,n,s,r,a){const o=ul.distanceSqToPoint(i);if(o<t){const c=new L;ul.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xn extends Ut{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],a=[],o=new L,c=new Ne;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ql extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qx extends ql{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ao=new L,tc=new Yl,nc=new Yl,ic=new Yl;class Vi extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),tc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,v),nc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,v),ic.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,v)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),nc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ic.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(tc.calc(c),nc.calc(c),ic.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ru(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ey(i,e){const t=1-i;return t*t*e}function ty(i,e){return 2*(1-i)*i*e}function ny(i,e){return i*i*e}function Er(i,e,t,n){return ey(i,e)+ty(i,t)+ny(i,n)}function iy(i,e){const t=1-i;return t*t*t*e}function sy(i,e){const t=1-i;return 3*t*t*i*e}function ry(i,e){return 3*(1-i)*i*i*e}function oy(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return iy(i,e)+sy(i,t)+ry(i,n)+oy(i,s)}class gd extends Gn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ay extends Gn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y),Ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vd extends Gn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cy extends Gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends Gn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,s.x,r.x,a.x),Er(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zl extends Gn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,s.x,r.x,a.x),Er(e,s.y,r.y,a.y),Er(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ru(o,c.x,l.x,h.x,u.x),Ru(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:Qx,CatmullRomCurve3:Vi,CubicBezierCurve:gd,CubicBezierCurve3:ay,EllipseCurve:ql,LineCurve:vd,LineCurve3:cy,QuadraticBezierCurve:_d,QuadraticBezierCurve3:Zl,SplineCurve:xd});class ly extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new aa[s.type]().fromJSON(s))}return this}}class fl extends ly{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vd(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new _d(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new gd(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new ql(e,t,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jr extends ht{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,d=new fe,f=new L,m=new L,g=new L;let v=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:v=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-v,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:v=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-v,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*s,x=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*x,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=y/t,d.y=M/(e.length-1),o.push(d.x,d.y);const S=c[3*M+0]*x,A=c[3*M+1],T=c[3*M+0]*E;l.push(S,A,T)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,E=x,M=x+e.length,S=x+e.length+1,A=x+1;r.push(E,M,A),r.push(S,A,M)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.points,e.segments,e.phiStart,e.phiLength)}}class ji extends jr{constructor(e=1,t=1,n=4,s=8){const r=new fl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ji(e.radius,e.length,e.capSegments,e.radialSegments)}}class ba extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new L,h=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class at extends ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],v=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function y(){const x=new L,E=new L;let M=0;const S=(t-e)/n;for(let A=0;A<=r;A++){const T=[],b=A/r,P=b*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,U=B*c+o,G=Math.sin(U),D=Math.cos(U);E.x=P*G,E.y=-b*n+v,E.z=P*D,u.push(E.x,E.y,E.z),x.set(G,S,D).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-b),T.push(m++)}g.push(T)}for(let A=0;A<s;A++)for(let T=0;T<r;T++){const b=g[T][A],P=g[T+1][A],N=g[T+1][A+1],B=g[T][A+1];(e>0||T!==0)&&(h.push(b,P,B),M+=3),(t>0||T!==r-1)&&(h.push(P,N,B),M+=3)}l.addGroup(p,M,0),p+=M}function _(x){const E=m,M=new fe,S=new L;let A=0;const T=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,v*b,0),d.push(0,b,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=s;N++){const U=N/s*c+o,G=Math.cos(U),D=Math.sin(U);S.x=T*D,S.y=v*b,S.z=T*G,u.push(S.x,S.y,S.z),d.push(0,b,0),M.x=G*.5+.5,M.y=D*.5*b+.5,f.push(M.x,M.y),m++}for(let N=0;N<s;N++){const B=E+N,U=P+N;x===!0?h.push(U,U+1,B):h.push(U+1,U,B),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends at{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new L,x=new L,E=new L;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],x),f(t[M+2],E),c(_,x,E,y)}function c(y,_,x,E){const M=E+1,S=[];for(let A=0;A<=M;A++){S[A]=[];const T=y.clone().lerp(x,A/M),b=_.clone().lerp(x,A/M),P=M-A;for(let N=0;N<=P;N++)N===0&&A===M?S[A][N]=T:S[A][N]=T.clone().lerp(b,N/P)}for(let A=0;A<M;A++)for(let T=0;T<2*(M-A)-1;T++){const b=Math.floor(T/2);T%2===0?(d(S[A][b+1]),d(S[A+1][b]),d(S[A][b])):(d(S[A][b+1]),d(S[A+1][b+1]),d(S[A+1][b]))}}function l(y){const _=new L;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=v(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(x,1-E)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],E=a[y+4],M=Math.max(_,x,E),S=Math.min(_,x,E);M>.9&&S<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const y=new L,_=new L,x=new L,E=new L,M=new fe,S=new fe,A=new fe;for(let T=0,b=0;T<r.length;T+=9,b+=6){y.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),M.set(a[b+0],a[b+1]),S.set(a[b+2],a[b+3]),A.set(a[b+4],a[b+5]),E.copy(y).add(_).add(x).divideScalar(3);const P=v(E);g(M,b+0,y,P),g(S,b+2,_,P),g(A,b+4,x,P)}}function g(y,_,x,E){E<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=E/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.vertices,e.indices,e.radius,e.details)}}class Kl extends Ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class yd extends fl{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new fl().fromJSON(s))}return this}}const hy={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=bd(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=my(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return zr(r,a,t,o,c,f,0),a}};function bd(i,e,t,n,s){let r,a;if(s===Ey(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Pu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pu(r,i[r],i[r+1],a);return a&&Sa(a,a.next)&&(Hr(a),a=a.next),a}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Sa(t,t.next)||yt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&yy(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?fy(i,n,s,r):uy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Hr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=dy(qi(i),e,t),zr(i,e,t,n,s,r,2)):a===2&&py(i,e,t,n,s,r):zr(qi(i),e,t,n,s,r,1);break}}}function uy(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Cs(s,o,r,c,a,l,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function fy(i,e,t,n){const s=i.prev,r=i,a=i.next;if(yt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,g=o>c?o>l?o:l:c>l?c:l,v=h>u?h>d?h:d:u>d?u:d,p=dl(f,m,e,t,n),y=dl(g,v,e,t,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==s&&_!==a&&Cs(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==s&&x!==a&&Cs(o,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==s&&_!==a&&Cs(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==s&&x!==a&&Cs(o,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dy(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Sa(s,r)&&Md(s,n,n.next,r)&&Br(s,r)&&Br(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function py(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sy(a,o)){let c=Sd(a,o);a=qi(a,a.next),c=qi(c,c.next),zr(a,e,t,n,s,r,0),zr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function my(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=bd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(My(l));for(s.sort(gy),r=0;r<s.length;r++)t=vy(s[r],t);return t}function gy(i,e){return i.x-e.x}function vy(i,e){const t=_y(i,e);if(!t)return e;const n=Sd(t,i);return qi(n,n.next),qi(t,t.next)}function _y(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Cs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Br(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&xy(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function xy(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function yy(i,e,t,n){let s=i;do s.z===0&&(s.z=dl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,by(s)}function by(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function dl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function My(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ty(i,e)&&(Br(i,e)&&Br(e,i)&&wy(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Sa(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Sa(i,e){return i.x===e.x&&i.y===e.y}function Md(i,e,t,n){const s=Ro(yt(i,e,t)),r=Ro(yt(i,e,n)),a=Ro(yt(t,n,i)),o=Ro(yt(t,n,e));return!!(s!==r&&a!==o||s===0&&Co(i,t,e)||r===0&&Co(i,n,e)||a===0&&Co(t,i,n)||o===0&&Co(t,e,n))}function Co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ro(i){return i>0?1:i<0?-1:0}function Ty(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Md(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Br(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function wy(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sd(i,e){const t=new pl(i.i,i.x,i.y),n=new pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(i,e,t,n){const s=new pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ey(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Cr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Cr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Lu(e),Iu(n,e);let a=e.length;t.forEach(Lu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Iu(n,t[c]);const o=hy.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Lu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Jl extends ht{constructor(e=new yd([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ay;let _,x=!1,E,M,S,A;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,E=p.computeFrenetFrames(h,!1),M=new L,S=new L,A=new L),d||(v=0,f=0,m=0,g=0);const T=o.extractPoints(l);let b=T.shape;const P=T.holes;if(!Cr.isClockWise(b)){b=b.reverse();for(let j=0,H=P.length;j<H;j++){const C=P[j];Cr.isClockWise(C)&&(P[j]=C.reverse())}}const B=Cr.triangulateShape(b,P),U=b;for(let j=0,H=P.length;j<H;j++){const C=P[j];b=b.concat(C)}function G(j,H,C){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(H,C)}const D=b.length,z=B.length;function k(j,H,C){let de,te,re;const se=j.x-H.x,Se=j.y-H.y,_e=C.x-j.x,I=C.y-j.y,w=se*se+Se*Se,W=se*I-Se*_e;if(Math.abs(W)>Number.EPSILON){const Q=Math.sqrt(w),ce=Math.sqrt(_e*_e+I*I),ne=H.x-Se/Q,De=H.y+se/Q,be=C.x-I/ce,Ce=C.y+_e/ce,et=((be-ne)*I-(Ce-De)*_e)/(se*I-Se*_e);de=ne+se*et-j.x,te=De+Se*et-j.y;const ge=de*de+te*te;if(ge<=2)return new fe(de,te);re=Math.sqrt(ge/2)}else{let Q=!1;se>Number.EPSILON?_e>Number.EPSILON&&(Q=!0):se<-Number.EPSILON?_e<-Number.EPSILON&&(Q=!0):Math.sign(Se)===Math.sign(I)&&(Q=!0),Q?(de=-Se,te=se,re=Math.sqrt(w)):(de=se,te=Se,re=Math.sqrt(w/2))}return new fe(de/re,te/re)}const K=[];for(let j=0,H=U.length,C=H-1,de=j+1;j<H;j++,C++,de++)C===H&&(C=0),de===H&&(de=0),K[j]=k(U[j],U[C],U[de]);const oe=[];let le,ye=K.concat();for(let j=0,H=P.length;j<H;j++){const C=P[j];le=[];for(let de=0,te=C.length,re=te-1,se=de+1;de<te;de++,re++,se++)re===te&&(re=0),se===te&&(se=0),le[de]=k(C[de],C[re],C[se]);oe.push(le),ye=ye.concat(le)}for(let j=0;j<v;j++){const H=j/v,C=f*Math.cos(H*Math.PI/2),de=m*Math.sin(H*Math.PI/2)+g;for(let te=0,re=U.length;te<re;te++){const se=G(U[te],K[te],de);ae(se.x,se.y,-C)}for(let te=0,re=P.length;te<re;te++){const se=P[te];le=oe[te];for(let Se=0,_e=se.length;Se<_e;Se++){const I=G(se[Se],le[Se],de);ae(I.x,I.y,-C)}}}const Ve=m+g;for(let j=0;j<D;j++){const H=d?G(b[j],ye[j],Ve):b[j];x?(S.copy(E.normals[0]).multiplyScalar(H.x),M.copy(E.binormals[0]).multiplyScalar(H.y),A.copy(_[0]).add(S).add(M),ae(A.x,A.y,A.z)):ae(H.x,H.y,0)}for(let j=1;j<=h;j++)for(let H=0;H<D;H++){const C=d?G(b[H],ye[H],Ve):b[H];x?(S.copy(E.normals[j]).multiplyScalar(C.x),M.copy(E.binormals[j]).multiplyScalar(C.y),A.copy(_[j]).add(S).add(M),ae(A.x,A.y,A.z)):ae(C.x,C.y,u/h*j)}for(let j=v-1;j>=0;j--){const H=j/v,C=f*Math.cos(H*Math.PI/2),de=m*Math.sin(H*Math.PI/2)+g;for(let te=0,re=U.length;te<re;te++){const se=G(U[te],K[te],de);ae(se.x,se.y,u+C)}for(let te=0,re=P.length;te<re;te++){const se=P[te];le=oe[te];for(let Se=0,_e=se.length;Se<_e;Se++){const I=G(se[Se],le[Se],de);x?ae(I.x,I.y+_[h-1].y,_[h-1].x+C):ae(I.x,I.y,u+C)}}}F(),ie();function F(){const j=s.length/3;if(d){let H=0,C=D*H;for(let de=0;de<z;de++){const te=B[de];Me(te[2]+C,te[1]+C,te[0]+C)}H=h+v*2,C=D*H;for(let de=0;de<z;de++){const te=B[de];Me(te[0]+C,te[1]+C,te[2]+C)}}else{for(let H=0;H<z;H++){const C=B[H];Me(C[2],C[1],C[0])}for(let H=0;H<z;H++){const C=B[H];Me(C[0]+D*h,C[1]+D*h,C[2]+D*h)}}n.addGroup(j,s.length/3-j,0)}function ie(){const j=s.length/3;let H=0;ee(U,H),H+=U.length;for(let C=0,de=P.length;C<de;C++){const te=P[C];ee(te,H),H+=te.length}n.addGroup(j,s.length/3-j,1)}function ee(j,H){let C=j.length;for(;--C>=0;){const de=C;let te=C-1;te<0&&(te=j.length-1);for(let re=0,se=h+v*2;re<se;re++){const Se=D*re,_e=D*(re+1),I=H+de+Se,w=H+te+Se,W=H+te+_e,Q=H+de+_e;Re(I,w,W,Q)}}}function ae(j,H,C){c.push(j),c.push(H),c.push(C)}function Me(j,H,C){V(j),V(H),V(C);const de=s.length/3,te=y.generateTopUV(n,s,de-3,de-2,de-1);Y(te[0]),Y(te[1]),Y(te[2])}function Re(j,H,C,de){V(j),V(H),V(de),V(H),V(C),V(de);const te=s.length/3,re=y.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);Y(re[0]),Y(re[1]),Y(re[3]),Y(re[1]),Y(re[2]),Y(re[3])}function V(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Y(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new aa[s.type]().fromJSON(s)),new Jl(n,e.options)}}const Ay={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],g=e[r*3],v=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-u),new fe(d,1-m),new fe(g,1-p)]:[new fe(o,1-c),new fe(h,1-u),new fe(f,1-m),new fe(v,1-p)]}};function Cy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rr extends Ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rr(e.radius,e.detail)}}class ca extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new L,m=new fe;for(let g=0;g<=s;g++){for(let v=0;v<=n;v++){const p=r+v/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<s;g++){const v=g*(n+1);for(let p=0;p<n;p++){const y=p+v,_=y,x=y+n+1,E=y+n+2,M=y+1;o.push(_,x,M),o.push(x,E,M)}}this.setIndex(o),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rn extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],m=[],g=[],v=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),v.push(M+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&f.push(_,x,M),(p!==n-1||c<Math.PI)&&f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _i extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const g=m/s*r,v=f/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(g),u.y=(e+t*Math.cos(v))*Math.sin(g),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const g=(s+1)*f+m-1,v=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;a.push(g,v,y),a.push(v,p,y)}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gi extends ht{constructor(e=new Zl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new fe;let h=new L;const u=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function g(){for(let _=0;_<t;_++)v(_);v(r===!1?t:0),y(),p()}function v(_){h=e.getPointAt(_/t,h);const x=a.normals[_],E=a.binormals[_];for(let M=0;M<=s;M++){const S=M/s*Math.PI*2,A=Math.sin(S),T=-Math.cos(S);c.x=T*x.x+A*E.x,c.y=T*x.y+A*E.y,c.z=T*x.z+A*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){const E=(s+1)*(_-1)+(x-1),M=(s+1)*_+(x-1),S=(s+1)*_+x,A=(s+1)*(_-1)+x;m.push(E,M,A),m.push(M,S,A)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)l.x=_/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gi(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ry extends Ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ue extends Pn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends Ue{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Py extends Pn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const la={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ly{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Iy=new Ly;class qr{constructor(e){this.manager=e!==void 0?e:Iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Dy extends Error{constructor(e,t){super(e),this.response=t}}class ky extends qr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=la.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const v=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let M=0,S=h.length;M<S;M++){const A=h[M];A.onProgress&&A.onProgress(E)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(v)}else throw new Dy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{la.add(e,l);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uy extends qr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=la.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Or("img");function c(){h(),la.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Du extends qr{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,a=new Uy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Td extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ny extends Td{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sc=new Ne,ku=new L,Uu=new L;class Fy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oy extends Fy{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zy extends Td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Oy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class By{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);const wd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hy=new $l(-1,1,1,-1,0,1);class Vy extends ht{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}}const Gy=new Vy;class Ql{constructor(e){this._mesh=new pe(Gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ed extends Ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ql(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fu extends Ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Wy extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $y{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ed(wd),this.copyPass.material.blending=ni,this.clock=new By}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fu!==void 0&&(a instanceof Fu?n=!0:a instanceof Wy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xy extends Ks{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends Ks{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new _n(r,a,{type:Hn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new _n(r,a,{type:Hn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=jy;this.highPassUniforms=$s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wd;this.copyUniforms=$s.clone(h.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ur,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new xa,this.fsQuad=new Ql(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xs.BlurDirectionX=new fe(1,0);Xs.BlurDirectionY=new fe(0,1);const qy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Yy extends Ks{constructor(){super();const e=qy;this.uniforms=$s.clone(e.uniforms),this.material=new Ry({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Of?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const He={gameName:"The Grand Tour",subtitle:"Ein Rennrad-Abenteuer",startPrompt:"Beliebige Taste drücken, um zu starten",wunschzettel:{briefkasten:"https://grand-tour-wunsch.google-e22.workers.dev"},colors:{gold:"#f5c76b",accent:"#ff7a3d",jersey:"#d62839",bikeFrame:"#14365c"},sunElevation:5,exposure:.62,titleRider:{number:11,name:"PAUL",brand:"canyon"},music:{volume:.45,tempo:78,chords:[["A3","C4","E4"],["F3","A3","C4"],["C3","E3","G3"],["G3","B3","D4"]]},soundVolume:.8,windLautstaerke:.3,zeitfahren:{luftwiderstand:.8},windschatten:.4,riderPower:520,steering:{start:.25,vollNach:1.3,stick:.4},sprint:{dauer:15,aufladen:30,kraft:1.6,abLadung:.75,windschattenBonus:1.5},rollen:{rennrad:{asphalt:.005,schotter:.02,wiese:.06},cx:{asphalt:.008,schotter:.011,wiese:.022}},jahreszeiten:{rennrad:"sommer",cx:"herbst"},raceLaps:3},Zy="Paulsdorf",At=2.9,Ky={House_1:0,House_2:0,House_3:0,House_4:0,Inn:0,Blacksmith:0,Stable:0,Sawmill:0,Mill:0,Bell_Tower:0},Ou=[["House_1",5],["House_2",5],["House_3",3],["House_4",2],["Inn",1],["Blacksmith",1.2],["Stable",.8],["Sawmill",.6]];function Jy(i,e){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d");n.fillStyle="#f2c230",n.fillRect(0,0,512,256),n.strokeStyle="#111",n.lineWidth=14,n.strokeRect(14,14,484,228),n.fillStyle="#111",n.font='800 92px "Barlow Condensed", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,120),n.font='600 34px "Barlow Condensed", sans-serif',n.fillText("Landkreis Grand Tour",256,200);const s=new xn(t);s.colorSpace=_t;const r=new Ue({color:"#cfcfcf"}),a=new rt,o=new pe(new nt(1.6,.8,.05),[r,r,r,r,new Ue({map:s,roughness:.5}),r]);o.position.y=2.2;const c=new pe(new at(.04,.04,2.6),new Ue({color:"#bfc3c8",metalness:.8,roughness:.3}));return c.position.y=1.3,a.add(o,c),a}function Qy(){return{pole:new at(.07,.1,3.6,6).translate(0,1.8,0),arm:new nt(.08,.08,.7).translate(0,3.5,.3),glas:new rn(.17,10,8).translate(0,3.25,.6)}}function eb(i,e){let t=2024;const n=()=>((t=t*16807%2147483647)-1)/2147483646,s=new rt;s.name="dorf";const r=i.length,a=i.SH,o={},c=[],l=[],h=new Ue({vertexColors:!0,roughness:.85}),u=new Map,d=(b,P,N,B,U,G=null)=>{const D=new Ne().compose(new L(P,G??i.terrainHeight(P,N)-.05,N),new St().setFromAxisAngle(new L(0,1,0),B),new L(U,U,U));u.has(b)||u.set(b,[]),u.get(b).push(D)},f=(b,P)=>{const N=e[b].boundingBox;return{w:(N.max.x-N.min.x)*P,d:(N.max.z-N.min.z)*P}},m=(b,P,N)=>i.clearOfPath(b,P,N)&&l.every(B=>Math.hypot(B.x-b,B.z-P)>B.r+N),g=b=>Math.atan2(b*o.tz,-b*o.tx),v=()=>{const b=Ou.reduce((N,[,B])=>N+B,0);let P=n()*b;for(const[N,B]of Ou)if((P-=B)<=0)return N;return"House_1"};let p=0,y=1/0;for(let b=60;b<r-60;b+=10){const P=i.turnBetween(Math.round((b-30)/i.ds),Math.round((b+30)/i.ds));P<y&&Math.abs(b-r*.5)<r*.4&&(y=P,p=b)}const _=1;{i.poseAt(p,_*(a+17),o),m(o.x,o.z,5)&&(d("Bell_Tower",o.x,o.z,g(_),At*1.15),l.push({x:o.x,z:o.z,r:4.5}),c.push({x:o.x,z:o.z,r:6}));const b=[["Well",0,7,0,At],["MarketStand_1",-11,6,.3,At],["MarketStand_2",-6,10.5,-.2,At],["MarketStand_1",7,10,.5,At],["MarketStand_2",11,5.5,-.4,At],["Cart",-14,11,1.2,At],["Bench_1",-3,3.2,0,At],["Bench_1",4,3.2,0,At],["Barrel",9,13,0,At],["Barrel",9.8,13.4,0,At],["Crate",-9,13,.4,At],["Hay",13,12,.2,At],["Bags",-12,8.5,0,At],["Bonfire_Lit",2,14,0,At]];for(const[P,N,B,U,G]of b)i.poseAt(p+N,_*(a+B),o),i.clearOfPath(o.x,o.z,.8)&&(d(P,o.x,o.z,g(_)+U,G),c.push({x:o.x,z:o.z,r:2.5}));if(i.poseAt(p,_*(a+9.5),o),l.push({x:o.x,z:o.z,r:13,flach:!0}),c.push({x:o.x,z:o.z,r:15}),i.roadTex){const P=i.roadTex.clone();P.wrapS=P.wrapT=An,P.repeat.set(3,2.2),P.needsUpdate=!0;const N=new pe(new ba(15,40),new Ue({map:P,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));N.rotation.x=-Math.PI/2,N.rotation.z=o.heading,N.position.set(o.x,i.terrainHeight(o.x,o.z)+.04,o.z),N.receiveShadow=!0,s.add(N)}}for(const b of[-1,1]){let P=25+n()*8;for(;P<r-20;){const N=v(),B=At*(.92+n()*.16),{w:U,d:G}=f(N,B),D=b*(a+1.6+G/2+n()*2.2);i.poseAt(P+U/2,D,o);const z=Math.max(U,G)*.5;if(m(o.x,o.z,z*.9)){const k=g(b)+Ky[N]+(n()-.5)*.18;if(d(N,o.x,o.z,k,B),l.push({x:o.x,z:o.z,r:z*.9}),c.push({x:o.x,z:o.z,r:z+2}),n()<.55){const K=(n()<.5?-1:1)*(U/2+.8);i.poseAt(P+U/2+K,b*(a+1.4+n()*1.2),o);const oe=["Barrel","Crate","Hay","Package_1","Bags"][Math.floor(n()*5)];i.clearOfPath(o.x,o.z,.6)&&d(oe,o.x,o.z,n()*6,At)}if(P+=U+1.2+n()*4,n()<.22){const K=9+n()*9;if(n()<.6)for(let oe=.8;oe<K-.8;oe+=2.3)i.poseAt(P+oe,b*(a+1.3),o),i.clearOfPath(o.x,o.z,.3)&&d("Fence",o.x,o.z,o.heading+Math.PI/2,At);P+=K}}else P+=4}}for(const b of[17,31])for(const P of[-1,1]){let N=n()*10;for(;N<r;){const B=v(),U=At*(.9+n()*.2),{w:G,d:D}=f(B,U);i.poseAt(N,P*(a+b+n()*5),o);const z=Math.max(G,D)*.5;if(n()<(b<20?.75:.5)&&m(o.x,o.z,z)){const k=g(P)+[0,Math.PI/2,-Math.PI/2,.3][Math.floor(n()*4)]+(n()-.5)*.3;d(B,o.x,o.z,k,U),l.push({x:o.x,z:o.z,r:z*.9}),c.push({x:o.x,z:o.z,r:z+2})}N+=G+3+n()*9}}for(const[b,P,N]of[["Mill",.27,30],["Mill",.71,-34]])i.poseAt(r*P,N+Math.sign(N)*a,o),m(o.x,o.z,6)&&(d(b,o.x,o.z,g(Math.sign(N)),At*1.2),l.push({x:o.x,z:o.z,r:5}),c.push({x:o.x,z:o.z,r:7}));const x=Qy(),E=new Ue({color:"#4a3424",roughness:.9}),M=new Ue({color:"#fff1c4",emissive:"#ffbf5a",emissiveIntensity:1.4}),S=[];for(let b=18,P=0;b<r-10;b+=26,P++){const N=P%2?1:-1;i.poseAt(b,N*(a+.7),o),i.clearOfPath(o.x,o.z,.5)&&S.push(new Ne().compose(new L(o.x,i.terrainHeight(o.x,o.z),o.z),new St().setFromAxisAngle(new L(0,1,0),g(N)),new L(1,1,1)))}for(const[b,P]of[[x.pole,E],[x.arm,E],[x.glas,M]]){const N=new sa(b,P,S.length);S.forEach((B,U)=>N.setMatrixAt(U,B)),N.castShadow=P===E,s.add(N)}const A=["#d62839","#f6f6f6","#2f7cf6","#f2d14b","#2bb24c"];for(const b of[.08,p/r,.62,.9]){const P={},N={};i.poseAt(r*b,-(a+.7),P),i.poseAt(r*b,a+.7,N);const B=new L(P.x,P.h+4.6,P.z),U=new L(N.x,N.h+4.6,N.z),G=B.clone().lerp(U,.5);G.y-=.8;const D=new Zl(B,G,U);s.add(new pe(new Gi(D,16,.015,4),new Ue({color:"#333"})));for(let z=1;z<16;z++){const k=D.getPoint(z/16),K=new pe(new $i(.18,.45,3),new Ue({color:A[z%A.length],side:Jt}));K.position.copy(k),K.position.y-=.25,K.rotation.x=Math.PI,s.add(K)}}{i.poseAt(r-30,a+1.1,o);const b=Jy(Zy);b.position.set(o.x,i.terrainHeight(o.x,o.z),o.z),b.rotation.y=Math.atan2(-o.tx,-o.tz),s.add(b)}const T=90;for(const[b,P]of u){const N=new Map;for(const B of P){const U=`${Math.floor(B.elements[12]/T)},${Math.floor(B.elements[14]/T)}`;N.has(U)||N.set(U,[]),N.get(U).push(B)}for(const B of N.values()){const U=new sa(e[b],h,B.length);B.forEach((G,D)=>U.setMatrixAt(D,G)),U.castShadow=!0,U.receiveShadow=!0,U.computeBoundingSphere(),s.add(U)}}return{group:s,footprints:c,platzS:p,solid:l.filter(b=>b.r>0&&!b.flach)}}class Vr extends pe{constructor(){const e=Vr.SkyShader,t=new Ht({name:e.name,uniforms:$s.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:jt,depthWrite:!1});super(new nt(1,1,1),t),this.isSky=!0}}Vr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Gr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ht;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const m=zu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function zu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ct(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const g=h.getComponent(d,m);o.setComponent(d+u,m,g)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function tb(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,_=o.length;y<_;y++){const x=o[y],E=i.attributes[x];c[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const M=i.morphAttributes[x];M&&(l[x]||(l[x]=[]),M.forEach((S,A)=>{const T=new S.array.constructor(S.count*S.itemSize);l[x][A]=new S.constructor(T,S.itemSize,S.normalized)}))}const f=e*.5,m=Math.log10(1/e),g=Math.pow(10,m),v=f*g;for(let y=0;y<r;y++){const _=n?n.getX(y):y;let x="";for(let E=0,M=o.length;E<M;E++){const S=o[E],A=i.getAttribute(S),T=A.itemSize;for(let b=0;b<T;b++)x+=`${~~(A[u[b]](_)*g+v)},`}if(x in t)h.push(t[x]);else{for(let E=0,M=o.length;E<M;E++){const S=o[E],A=i.getAttribute(S),T=i.morphAttributes[S],b=A.itemSize,P=c[S],N=l[S];for(let B=0;B<b;B++){const U=u[B],G=d[B];if(P[G](a,A[U](_)),T)for(let D=0,z=T.length;D<z;D++)N[D][G](a,T[D][U](_))}}t[x]=a,h.push(a),a++}}const p=i.clone();for(const y in i.attributes){const _=c[y];if(p.setAttribute(y,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),y in l)for(let x=0;x<l[y].length;x++){const E=l[y][x];p.morphAttributes[y][x]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}function Qn(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function rc(i=1){const e=Qn(i),t=new Uint8Array(256);for(let c=0;c<256;c++)t[c]=c;for(let c=255;c>0;c--){const l=Math.floor(e()*(c+1));[t[c],t[l]]=[t[l],t[c]]}const n=new Uint8Array(512);for(let c=0;c<512;c++)n[c]=t[c&255];const s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],a=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return(c,l)=>{const h=(c+l)*a,u=Math.floor(c+h),d=Math.floor(l+h),f=(u+d)*o,m=c-(u-f),g=l-(d-f),v=m>g?1:0,p=m>g?0:1,y=m-v+o,_=g-p+o,x=m-1+2*o,E=g-1+2*o,M=u&255,S=d&255;let A=0,T=.5-m*m-g*g;if(T>0){const N=n[M+n[S]]&7;T*=T,A+=T*T*(s[N]*m+r[N]*g)}let b=.5-y*y-_*_;if(b>0){const N=n[M+v+n[S+p]]&7;b*=b,A+=b*b*(s[N]*y+r[N]*_)}let P=.5-x*x-E*E;if(P>0){const N=n[M+1+n[S+1]]&7;P*=P,A+=P*P*(s[N]*x+r[N]*E)}return 70*A}}const ot=(i,e,t)=>Math.min(t,Math.max(e,i)),fn=(i,e,t)=>i+(e-i)*t,xt=(i,e,t)=>{const n=ot((t-i)/(e-i),0,1);return n*n*(3-2*n)},We=(i,e,t,n)=>fn(i,e,1-Math.exp(-t*n)),Bu=1800,Hu=320,Po=20;function $t(i,e,t,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new xn(r);return s&&(a.colorSpace=_t),n&&(a.wrapS=a.wrapT=An,a.repeat.set(n[0],n[1])),a.anisotropy=8,a}function Rs(i,e,t,n,s,r,a,o=1){i.fillStyle=s,i.fillRect(0,0,e,t);for(let c=0;c<a;c++){const l=Math.floor(n()*r);i.fillStyle=`rgba(${l},${l},${l},${.08+n()*.18})`,i.fillRect(n()*e,n()*t,o+n()*o,o+n()*o)}}function nb(i){return $t(512,1024,(e,t,n)=>{e.fillStyle="#3c3a37",e.fillRect(0,0,t,n);const s=40,r=n/s;for(let o=0;o<s;o++){let c=o%2?-r*.6:0;for(;c<t;){const l=r*(.9+i()*.7),h=105+Math.floor(i()*55),u=Math.floor(i()*12);e.fillStyle=`rgb(${h+u},${h+u-4},${h-8})`;const d=2.2,f=c+d,m=o*r+d,g=l-d*2,v=r-d*2;e.beginPath(),e.roundRect?e.roundRect(f,m,g,v,6):e.rect(f,m,g,v),e.fill(),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(f+2,m+1,g-4,v*.3),e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(f+2,m+v*.72,g-4,v*.25),c+=l}}Rs(e,t,n,i,"rgba(0,0,0,0)",120,6e3,1.2);const a=e.createLinearGradient(0,0,t,0);a.addColorStop(0,"rgba(30,28,24,0.45)"),a.addColorStop(.08,"rgba(30,28,24,0)"),a.addColorStop(.92,"rgba(30,28,24,0)"),a.addColorStop(1,"rgba(30,28,24,0.45)"),e.fillStyle=a,e.fillRect(0,0,t,n)})}function ib(i){return $t(256,1024,(e,t,n)=>{Rs(e,t,n,i,"#6b5136",255,22e3,1.4);for(let r=0;r<900;r++){const a=90+Math.floor(i()*70);e.fillStyle=`rgba(${a},${a-8},${a-20},${.4+i()*.4})`,e.fillRect(i()*t,i()*n,1.5+i()*2.5,1.5+i()*2.5)}e.fillStyle="rgba(35,24,14,0.28)",e.fillRect(t*.28,0,t*.1,n),e.fillRect(t*.62,0,t*.1,n);for(let r=0;r<4;r++)e.fillStyle="rgba(30,24,18,0.55)",e.beginPath(),e.ellipse(t*(.25+i()*.5),i()*n,18+i()*30,30+i()*60,0,0,Math.PI*2),e.fill();for(let r=0;r<7;r++){e.strokeStyle="rgba(70,48,28,0.9)",e.lineWidth=3+i()*4,e.beginPath();const a=i()*n;e.moveTo(0,a),e.bezierCurveTo(t*.3,a+(i()-.5)*40,t*.7,a+(i()-.5)*40,t,a+(i()-.5)*30),e.stroke()}const s=e.createLinearGradient(0,0,t,0);s.addColorStop(0,"rgba(60,70,30,0.6)"),s.addColorStop(.12,"rgba(60,70,30,0)"),s.addColorStop(.88,"rgba(60,70,30,0)"),s.addColorStop(1,"rgba(60,70,30,0.6)"),e.fillStyle=s,e.fillRect(0,0,t,n)})}class Vu{constructor(e,t="road",n=null,s=null){if(this.kind=t,this.cx=t==="cx",this.tt=t==="tt",this.nature=n,this.dorf=s,this.season=(He.jahreszeiten||{})[this.cx?"cx":"rennrad"]||(this.cx?"herbst":"sommer"),this.autumn=this.season==="herbst",this.RH=this.cx?1.6:this.tt?3.2:3.6,this.SH=this.cx?2.4:this.tt?4.4:5,this.scene=new gu,this.rand=Qn(1337),this.n1=rc(11),this.n2=rc(23),this.n3=rc(37),this._nr={found:!1,dist:0,i:0,f:0,h:0,s:0,lateral:0},this.focus=new L,this.setupLakes(),this.buildTrack(),this.buildSky(e),this.buildLights(),this.buildTerrain(),this.buildLakes(),this.buildRoad(),this.buildVegetation(),this.buildProps(),this.tt&&this.dorf){const r=eb(this,this.dorf);this.village=r.group,this.solid=r.solid,this.clearAreas(r.footprints),this.scene.add(this.village)}this.buildFinishZone(),this.buildClouds(),this.buildMotes()}fbm(e,t){let n=1,s=1,r=0,a=0;for(let o=0;o<4;o++)r+=n*this.n1(e*s,t*s),a+=n,n*=.5,s*=2.03;return r/a}setupLakes(){this.lakes=this.cx||this.tt?[]:[{x:-40,z:-30,r:120},{x:180,z:140,r:60},{x:-200,z:170,r:60},{x:-560,z:0,r:70}];for(const e of this.lakes){let t=1/0;for(let n=0;n<64;n++){const s=n/64*Math.PI*2,r=this.lakeRadius(e,s)*1.3;t=Math.min(t,this.rawHeight(e.x+Math.cos(s)*r,e.z+Math.sin(s)*r))}e.level=t-.4}}lakeRadius(e,t){return e.r*(1+.22*this.n3(Math.cos(t)*1.2+e.x*.013,Math.sin(t)*1.2+e.z*.013))}lakeAt(e,t,n=0){for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(!(o>s.r*1.6+n)&&o<this.lakeRadius(s,Math.atan2(a,r))*1.3+n)return s}return null}baseHeight(e,t){let n=this.rawHeight(e,t);for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(o>s.r*1.6)continue;const c=this.lakeRadius(s,Math.atan2(a,r))*1.3;if(o>=c)continue;const l=s.level-4.5*(1-o/c*(o/c));n=fn(l,n,xt(c*.58,c,o))}return n}rawHeight(e,t){const n=Math.hypot(e,t);let s=this.fbm(e*.0035,t*.0035)*16+this.n2(e*.02,t*.02)*1.2;if(this.serp){const a=this.serpBump(e,t);s=fn(s,this.serp.h0,this.serp.k*.9)+a}this.tt&&(s*=.3);const r=xt(660,880,n);if(r>0){const a=1-Math.abs(this.fbm(e*.0032+7,t*.0032-3));s+=r*(35+a*a*120)}return s}villageRoute(){const e=[[-80,-170],[70,-170],[95,-120],[180,-110],[190,-20],[140,10],[150,90],[60,120],[20,175],[-90,160],[-110,90],[-190,70],[-200,-40],[-130,-60],[-120,-130]],t=Qn(77),n=e.map(([c,l])=>new L(c+(t()-.5)*10,0,l+(t()-.5)*10)),s=[],r=n.length;let a=0,o=0;for(let c=0;c<r;c++){const l=n[(c-1+r)%r],h=n[c],u=n[(c+1)%r],d=h.clone().sub(l),f=u.clone().sub(h),m=Math.min(24,d.length()*.4),g=Math.min(24,f.length()*.4),v=h.clone().addScaledVector(d.normalize(),-m),p=h.clone().addScaledVector(f.normalize(),g);for(let _=0;_<=1.0001;_+=1/6){const x=1-_;s.push(new L(x*x*v.x+2*x*_*h.x+_*_*p.x,0,x*x*v.z+2*x*_*h.z+_*_*p.z))}const y=u.distanceTo(h);y>60&&(y>a&&(a=y,o=s.length),s.push(h.clone().lerp(u,.5)))}return[...s.slice(o),...s.slice(0,o)]}serpentinenRoute(e){const t=new Vi(e,!0,"centripetal"),n=t.getLength(),s=1480,r=40,a=45,o=5,c=16,l=.13,h=s+o*r,u=S=>t.getPointAt((S%n+n)%n/n),d=S=>t.getTangentAt((S%n+n)%n/n),f=(S,A)=>{const T=u(S),b=d(S);return new L(T.x-b.z*A,0,T.z+b.x*A)},m=[[s-60,0],[s,0]];for(let S=0;S<o;S++)m.push([s+r/2+S*r,S%2===0?a:-a]);m.push([h,0],[h+60,0]);const g=[],v=(S,A)=>{const T=Math.max(1,Math.round(Math.hypot(A[0]-S[0],A[1]-S[1])/10));for(let b=1;b<T;b++)g.push([S[0]+(A[0]-S[0])*b/T,S[1]+(A[1]-S[1])*b/T])};let p=m[0];g.push(p);for(let S=1;S<m.length-1;S++){const[A,T,b]=[m[S-1],m[S],m[S+1]];let P=[T[0]-A[0],T[1]-A[1]],N=[b[0]-T[0],b[1]-T[1]];const B=Math.hypot(...P),U=Math.hypot(...N);P=[P[0]/B,P[1]/B],N=[N[0]/U,N[1]/U];const G=Math.acos(Math.max(-1,Math.min(1,P[0]*N[0]+P[1]*N[1]))),D=Math.sign(P[0]*N[1]-P[1]*N[0])||1,z=S===1||S===m.length-2?30:c,k=Math.min(z*Math.tan(G/2),B*.48,U*.48),K=k/Math.tan(G/2),oe=[T[0]-P[0]*k,T[1]-P[1]*k],le=[T[0]+N[0]*k,T[1]+N[1]*k];v(p,oe);const ye=[oe[0]-P[1]*K*D,oe[1]+P[0]*K*D],Ve=Math.atan2(oe[1]-ye[1],oe[0]-ye[0]),F=Math.max(3,Math.round(G*K/4));for(let ie=0;ie<=F;ie++){const ee=Ve+D*G*(ie/F);g.push([ye[0]+Math.cos(ee)*K,ye[1]+Math.sin(ee)*K])}p=le}v(p,m[m.length-1]),g.push(m[m.length-1]);const y=[];for(let S=s-160;S<=h+660;S+=3){const A=u(S),T=d(S);y.push({u:S,x:A.x,z:A.z,tx:T.x,tz:T.z})}const _=u((s+h)/2+150),x=u(s),E=this.fbm(x.x*.0035,x.z*.0035)*16;this.serp={U0:s,U1:h,W:a,H:l*(h-s),h0:E,proben:y,cx:_.x,cz:_.z,rad:650,k:0};const M=[];for(let S=0;S<s-60;S+=12)M.push(u(S));for(const[S,A]of g)M.push(f(S,A));for(let S=h+72;S<n-6;S+=12)M.push(u(S));return M}serpBump(e,t){const n=this.serp;if(n&&(n.k=0),!n||Math.hypot(e-n.cx,t-n.cz)>n.rad)return 0;let s=1/0,r=null;for(const h of n.proben){const u=(h.x-e)*(h.x-e)+(h.z-t)*(h.z-t);u<s&&(s=u,r=h)}const a=Math.abs((e-r.x)*-r.tz+(t-r.z)*r.tx),o=r.u+(e-r.x)*r.tx+(t-r.z)*r.tz;let c;o<n.U0?c=xt(n.U0-40,n.U0,o)*.03:o<n.U1?c=.03+.97*((o-n.U0)/(n.U1-n.U0)):o<n.U1+25?c=1:c=1-xt(n.U1+25,n.U1+600,o);const l=1-xt(n.W+25,n.W+110,a);return n.k=l*xt(n.U0-140,n.U0-10,o)*(1-xt(n.U1+450,n.U1+640,o)),n.H*c*l}buildTrack(){let e=[];this.tt&&(e=this.villageRoute());const t=this.cx?24:16;for(let f=0;f<(this.tt?0:t);f++){const m=f/t*Math.PI*2,g=this.cx?200+45*Math.sin(3*m+.6)+30*Math.sin(5*m+1.9)+16*Math.sin(9*m+.4):360+80*Math.sin(3*m+.6)+45*Math.sin(5*m+1.9)+25*Math.sin(7*m);e.push(new L(Math.cos(m)*g*1.18,0,Math.sin(m)*g*.95))}!this.cx&&!this.tt&&(e=this.serpentinenRoute(e));const n=new Vi(e,!0,"centripetal"),s=this.cx?1600:this.tt?1800:3e3,r=n.getSpacedPoints(s);this.N=s,this.length=n.getLength(),this.ds=this.length/s;const a=this.px=new Float32Array(s),o=this.pz=new Float32Array(s),c=this.ph=new Float32Array(s),l=this.tx=new Float32Array(s),h=this.tz=new Float32Array(s);for(let f=0;f<s;f++)a[f]=r[f].x,o[f]=r[f].z;for(let f=0;f<s;f++){const m=(f-1+s)%s,g=(f+1)%s,v=a[g]-a[m],p=o[g]-o[m],y=Math.hypot(v,p);l[f]=v/y,h[f]=p/y}let u=new Float32Array(s);for(let f=0;f<s;f++)u[f]=this.baseHeight(a[f],o[f]);const d=30;for(let f=0;f<3;f++){const m=new Float32Array(s);for(let g=0;g<s;g++){let v=0;for(let p=-d;p<=d;p++)v+=u[(g+p+s)%s];m[g]=v/(2*d+1)}u=m}if(this.drops=[],this.cx){const f=Math.round(45/this.ds),m=Math.round(15/this.ds),g=[];for(let _=Math.round(80/this.ds);_<s-Math.round(80/this.ds);_+=2)g.push({i:_,t:this.turnBetween(_-f,_+m)});g.sort((_,x)=>_.t-x.t);const v=[];for(const _ of g){if(v.length>=5)break;v.every(x=>Math.abs(x-_.i)>s/7)&&v.push(_.i)}v.sort((_,x)=>_-x);const p=[1.1,1.4,1,1.5,1.2];let y=0;v.forEach((_,x)=>{this.drops.push({i:_,s:(_+1)*this.ds,d:p[x],turn:this.turnBetween(_-f,_+m)}),y+=p[x]});for(let _=0;_<s;_++){let x=y*(_/s);for(const E of this.drops)_>E.i&&(x-=E.d);u[_]+=x}}c.set(u),this.rhArr=new Float32Array(s),this.shArr=new Float32Array(s);for(let f=0;f<s;f++){let m=this.RH;if(this.cx){const g=f/s*Math.PI*2;m=1.2+.3*Math.sin(3*g+1)+.2*Math.sin(7*g+2.2),m=Math.min(this.RH,Math.max(.75,m));const v=Math.min(f,s-f)*this.ds;m=fn(this.RH,m,xt(15,50,v))}this.rhArr[f]=m,this.shArr[f]=m+(this.SH-this.RH)}if(this.rocks=[],this.cx){const f=Qn(99);let m=0;for(;this.rocks.length<0&&m++<800;){const g=Math.floor(f()*s),v=g*this.ds;if(Math.min(g,s-g)*this.ds<50||this.drops.some(E=>Math.abs(E.i-g)*this.ds<30)||this.rocks.some(E=>Math.abs(E.i-g)*this.ds<45))continue;const p=this.rhArr[g];if(p<1.05||this.turnBetween(g-Math.round(20/this.ds),g)>.35)continue;const y=.35+f()*.25,x=(f()<.5?-1:1)*(p-y-.1)*(.6+.4*f());this.rocks.push({i:g,s:v,lat:x,r:y})}}this.grid=new Map;for(let f=0;f<s;f++){const m=this.cellKey(Math.floor(a[f]/Po),Math.floor(o[f]/Po));let g=this.grid.get(m);g||this.grid.set(m,g=[]),g.push(f)}if(this.serp){let f=1/0,m=-1/0,g=0,v=0;for(let p=0;p<s;p++)c[p]>g&&(g=c[p],v=p*this.ds);for(let p=0;p<s;p++){const y=p*this.ds;y<v&&y<f&&this.serpBump(a[p],o[p])>1&&(f=y)}m=v,this.serp.sStart=f,this.serp.sTop=m}}cellKey(e,t){return(e+1e3)*4e3+(t+1e3)}turnBetween(e,t){const n=this.N,s=o=>Math.atan2(this.tx[(o%n+n)%n],this.tz[(o%n+n)%n]),r=s(e);let a=0;for(let o=e;o<=t;o++)a=Math.max(a,Math.abs(Math.atan2(Math.sin(s(o)-r),Math.cos(s(o)-r))));return a}shAt(e){const t=Math.floor((e%this.length+this.length)%this.length/this.ds)%this.N;return this.shArr[t]}nearest(e,t){const n=this._nr,s=Math.floor(e/Po),r=Math.floor(t/Po);let a=1/0,o=-1;for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++){const d=this.grid.get(this.cellKey(s+h,r+u));if(d)for(let f=0;f<d.length;f++){const m=d[f],g=this.px[m]-e,v=this.pz[m]-t,p=g*g+v*v;p<a&&(a=p,o=m)}}if(o<0)return n.found=!1,n.dist=1/0,n;const c=this.N;a=1/0;for(const h of[(o-1+c)%c,o]){const u=(h+1)%c,d=this.px[h],f=this.pz[h],m=this.px[u]-d,g=this.pz[u]-f,v=ot(((e-d)*m+(t-f)*g)/(m*m+g*g),0,1),p=d+m*v,y=f+g*v,_=(e-p)*(e-p)+(t-y)*(t-y);_<a&&(a=_,n.i=h,n.f=v,n.lateral=(e-p)*-this.tz[h]+(t-y)*this.tx[h])}const l=(n.i+1)%c;return n.found=!0,n.dist=Math.sqrt(a),n.h=fn(this.ph[n.i],this.ph[l],n.f),n.s=(n.i+n.f)*this.ds,n}terrainHeight(e,t){const n=this.nearest(e,t),s=this.baseHeight(e,t);if(!n.found)return s;const r=this.rhArr[n.i],a=xt(r+1.2,r+22,n.dist);return fn(n.h-.15,s,a)}groundAt(e,t,n={}){const s=this.nearest(e,t),r=s.found?this.rhArr[s.i]:this.RH,a=s.found?this.shArr[s.i]:this.SH;return s.found&&s.dist<r+.2?(n.h=s.h+.06,n.surface=this.cx?"gravel":"road"):s.found&&s.dist<a?(n.h=s.h+.03-xt(r+.5,a,s.dist)*.12,n.surface=this.cx?"grass":"gravel"):(n.h=this.terrainHeight(e,t),n.surface="grass"),n}poseAt(e,t=0,n={}){const s=this.length;e=(e%s+s)%s;const r=e/this.ds,a=Math.floor(r)%this.N,o=(a+1)%this.N,c=r-Math.floor(r),l=fn(this.tx[a],this.tx[o],c),h=fn(this.tz[a],this.tz[o],c),u=Math.hypot(l,h);n.tx=l/u,n.tz=h/u,n.x=fn(this.px[a],this.px[o],c)-n.tz*t,n.z=fn(this.pz[a],this.pz[o],c)+n.tx*t,n.h=fn(this.ph[a],this.ph[o],c)+.06,n.heading=Math.atan2(n.tx,n.tz);const d=this.ph[(a-2+this.N)%this.N],f=this.ph[(a+3)%this.N];return n.pitch=Math.atan2(f-d,this.ds*5),n.s=e,n}buildSky(e){const t=new Vr;t.scale.setScalar(1e4);const n=t.material.uniforms;n.turbidity.value=7,n.rayleigh.value=2.4,n.mieCoefficient.value=.006,n.mieDirectionalG.value=.86;const s=this.poseAt(this.length-100),r=al.degToRad(He.sunElevation);this.sunDir=new L(-s.tx*Math.cos(r),Math.sin(r),-s.tz*Math.cos(r)).applyAxisAngle(new L(0,1,0),.35).normalize(),n.sunPosition.value.copy(this.sunDir),this.scene.add(t),this.sky=t;const a=new cl(e),o=new gu,c=new Vr;c.scale.setScalar(50),c.material=t.material,o.add(c),this.scene.environment=a.fromScene(o,.04).texture,this.scene.environmentIntensity=.55,a.dispose(),this.scene.fog=this.cx?new na(new ve(this.autumn?"#a8977a":"#9fa88f"),.0042):new na(new ve("#c9a58f"),.0013)}buildLights(){const e=new Ny("#b9cdf5","#5b4634",this.cx?1.35:.9);this.scene.add(e);const t=Math.atan2(this.sunDir.x,this.sunDir.z),n=al.degToRad(17);this.lightDir=new L(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));const s=new zy("#ffc994",3.4);s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=s.shadow.camera;r.left=r.bottom=-32,r.right=r.top=32,r.near=1,r.far=150,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,this.scene.add(s,s.target),this.sun=s}buildTerrain(){const e=new on(Bu,Bu,Hu,Hu);e.rotateX(-Math.PI/2);const t=e.attributes.position,n=t.count,s=new Float32Array(n);for(let _=0;_<n;_++){const x=t.getX(_),E=t.getZ(_),M=this.nearest(x,E),S=this.baseHeight(x,E);let A=S;if(M.found){const T=this.rhArr[M.i],b=xt(T+1.2,T+22,M.dist);A=fn(M.h-.15,S,b),s[_]=1-xt(this.shArr[M.i],this.shArr[M.i]+5,M.dist)}t.setY(_,A)}e.computeVertexNormals();const r=e.attributes.normal,a=new ve(this.autumn?"#4a4a22":this.cx?"#33501f":"#3f6b25"),o=new ve(this.autumn?"#7a6a2e":this.cx?"#5b6b2c":"#86a33c"),c=new ve(this.autumn?"#9a5a26":this.cx?"#7a5a34":"#b9a457"),l=new ve("#7d756b"),h=new ve("#f4efe9"),u=new ve(this.cx?"#5e4630":"#8d7457"),d=new ve("#cbb98b"),f=new Float32Array(n*3),m=new ve;for(let _=0;_<n;_++){const x=t.getX(_),E=t.getZ(_),M=t.getY(_),S=this.n3(x*.012,E*.012)*.5+.5;m.copy(a).lerp(o,S);const A=xt(.25,.8,this.n2(x*.004+50,E*.004));m.lerp(c,A*(this.autumn?.85:.55));const T=1-r.getY(_),b=ot(xt(.18,.4,T)+xt(50,100,M)*.7,0,1);m.lerp(l,b);const P=xt(115,150,M+this.n1(x*.02,E*.02)*12);m.lerp(h,P),m.lerp(u,s[_]*.85);const N=this.lakeAt(x,E,4);N&&m.lerp(d,xt(N.level+1.4,N.level-.2,M)),f[_*3]=m.r,f[_*3+1]=m.g,f[_*3+2]=m.b}e.setAttribute("color",new Ct(f,3));const g=Qn(5),v=$t(256,256,(_,x,E)=>{Rs(_,x,E,g,"#e8e8e8",255,9e3,1);for(let M=0;M<1600;M++)_.fillStyle=`rgba(30,40,10,${.08+g()*.12})`,_.fillRect(g()*x,g()*E,1,2+g()*4)},{repeat:[360,360]}),p=new Ue({vertexColors:!0,map:v,roughness:.95}),y=new pe(e,p);y.receiveShadow=!0,this.scene.add(y)}buildLakes(){const e=new Ue({color:"#2c6a8e",roughness:.05,metalness:.15,transparent:!0,opacity:.9,envMapIntensity:1.5});for(const t of this.lakes){const n=new ba(1,96),s=n.attributes.position;for(let a=1;a<s.count;a++){const o=Math.atan2(s.getY(a),s.getX(a)),c=this.lakeRadius(t,-o)*1.3;s.setXY(a,Math.cos(o)*c,Math.sin(o)*c)}n.rotateX(-Math.PI/2);const r=new pe(n,e);r.position.set(t.x,t.level,t.z),r.receiveShadow=!0,this.scene.add(r)}}buildRoad(){const e=this.N,t=Qn(9),n=this.cx?ib(t):this.tt?nb(t):$t(256,1024,(m,g,v)=>{Rs(m,g,v,t,"#45464a",255,26e3,1.2);for(let p=0;p<18;p++)m.fillStyle=`rgba(20,20,22,${.08+t()*.1})`,m.fillRect(t()*g,t()*v,20+t()*60,30+t()*120);m.fillStyle="rgba(15,15,15,0.18)",m.fillRect(g*.2,0,g*.1,v),m.fillRect(g*.7,0,g*.1,v),m.fillStyle="#eceae2",m.fillRect(g*.035,0,g*.03,v),m.fillRect(g*.935,0,g*.03,v),m.fillRect(g*.49,0,g*.02,v*.5)});n.wrapT=An,this.roadTex=n;const s=$t(256,256,(m,g,v)=>{if(this.cx){Rs(m,g,v,t,"#5a4a2c",255,6e3,1.5);for(let p=0;p<700;p++)m.fillStyle=`hsl(${20+t()*30}, ${50+t()*30}%, ${22+t()*25}%)`,m.beginPath(),m.ellipse(t()*g,t()*v,2+t()*4,1+t()*2,t()*3,0,Math.PI*2),m.fill()}else Rs(m,g,v,t,"#8a7a66",255,12e3,1.5)},{repeat:[1,1]});s.wrapS=s.wrapT=An;const r=[],a=[],o=[],c=[];for(let m=0;m<=e;m++){const g=m%e,v=this.px[g],p=this.pz[g],y=this.ph[g],_=-this.tz[g],x=this.tx[g],E=m*this.ds/12,M=this.rhArr[g];r.push(v-_*M,y+.06,p-x*M,v+_*M,y+.06,p+x*M),a.push(0,E,1,E);const S=this.shArr[g],A=M+.3;o.push(v-_*S,y-.12,p-x*S,v-_*A,y+.035,p-x*A,v+_*A,y+.035,p+x*A,v+_*S,y-.12,p+x*S);const T=m*this.ds/4;c.push(0,T,.4,T,.6,T,1,T)}const l=[],h=[];for(let m=0;m<e;m++){const g=m*2,v=(m+1)*2;l.push(g,g+1,v,g+1,v+1,v);const p=m*4,y=(m+1)*4;for(let _=0;_<3;_++)h.push(p+_,p+_+1,y+_,p+_+1,y+_+1,y+_)}const u=(m,g,v)=>{const p=new ht;return p.setAttribute("position",new Xe(m,3)),p.setAttribute("uv",new Xe(g,2)),p.setIndex(v),p.computeVertexNormals(),p},d=new pe(u(r,a,l),new Ue({map:n,roughness:.82,metalness:0,envMapIntensity:.6}));if(d.receiveShadow=!0,!this.cx&&!this.tt){const m=new Du,g=d.material,v=(p,y)=>(p.wrapS=gi,p.wrapT=An,p.anisotropy=8,y&&(p.colorSpace=_t),p.repeat.set(1,12/14),p);m.load("texturen/strasse/farbe.jpg",p=>{g.map=v(p,!0),g.needsUpdate=!0}),m.load("texturen/strasse/normal.jpg",p=>{g.normalMap=v(p,!1),g.normalScale.set(.8,.8),g.needsUpdate=!0}),m.load("texturen/strasse/rauheit.jpg",p=>{g.roughnessMap=v(p,!1),g.roughness=1,g.needsUpdate=!0})}const f=new pe(u(o,c,h),new Ue({map:s,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));f.receiveShadow=!0,this.scene.add(d,f)}instanced(e,t,n,s,{cast:r=!0,receive:a=!0}={}){const o=(u,d)=>{const f=new sa(e,t,u.length);return u.forEach((m,g)=>f.setMatrixAt(g,m)),d&&d.forEach((m,g)=>f.setColorAt(g,m)),f.castShadow=r,f.receiveShadow=a,f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),this.scene.add(f),f};if(n.length<40)return o(n,s);const c=60,l=new Map;n.forEach((u,d)=>{const f=`${Math.floor(u.elements[12]/c)},${Math.floor(u.elements[14]/c)}`;l.has(f)||l.set(f,{mats:[],cols:[]});const m=l.get(f);m.mats.push(u),s&&m.cols.push(s[d])});let h=null;this.chunks||(this.chunks=[]);for(const u of l.values()){const d=o(u.mats,s?u.cols:null);this.chunks.push(d),h||(h=d)}return h}buildVegetation(){const e=this.rand,t=new St,n=new L(0,1,0),s=(U,G,D,z,k=z,K=e()*Math.PI*2)=>new Ne().compose(new L(U,G,D),t.setFromAxisAngle(n,K).clone(),new L(z,k,z)),r=Gr([new $i(1.9,4.2,8).translate(0,3.6,0),new $i(1.4,3.4,8).translate(0,5.7,0),new $i(.85,2.4,8).translate(0,7.4,0)]),a=new at(.16,.28,2.4,6).translate(0,1.2,0),o=new Rr(2.3,1),c=o.attributes.position;for(let U=0;U<c.count;U++){const G=c.getX(U),D=c.getY(U),z=c.getZ(U),k=1+this.n1(G*1.3+3,z*1.3+D)*.22;c.setXYZ(U,G*k,D*k*.85,z*k)}o.translate(0,4.4,0),o.computeVertexNormals();const l=new at(.2,.32,3.2,6).translate(0,1.6,0),h=new Ue({color:"#ffffff",flatShading:!0,roughness:.9}),u=new Ue({color:"#5a4030",roughness:1}),d=[],f=[],m=[],g=[],v=this.cx?520:860;let p=0;const y=this.cx?7e3:this.tt?1300:2600;for(;d.length+m.length<y&&p++<6e4;){const U=(e()*2-1)*v,G=(e()*2-1)*v;if(Math.hypot(U,G)>(this.cx?540:870))continue;const D=this.n3(U*.006+20,G*.006);if(!this.cx&&D<.05&&e()>.08)continue;const z=this.nearest(U,G);if(z.found&&z.dist<(this.cx?this.shArr[z.i]+1.6:this.tt?26:11)||this.lakeAt(U,G,6))continue;const k=this.terrainHeight(U,G);if(k>120)continue;const K=.75+e()*.75;k>45||D>.45||e()<.35?(d.push(s(U,k-.2,G,K,K*(.9+e()*.4))),f.push(new ve().setHSL(.31+e()*.05,.45,.17+e()*.08))):(m.push(s(U,k-.2,G,K)),g.push(new ve().setHSL(.18+e()*.1,.5,.25+e()*.12)))}if(this.nature?this.plantModels(e,d,m,3):(this.instanced(r,h,d,f),this.instanced(a,u,d),this.instanced(o,h,m,g),this.instanced(l,u,m)),this.cx){const U=[],G=[],D=[],z=[],k={};for(const K of[-1,1])for(let oe=e()*5;oe<this.length;oe+=4.5+e()*4.5){const le=K*(this.shAt(oe)+1+e()*2.5);this.poseAt(oe,le,k);const ye=this.terrainHeight(k.x,k.z),Ve=2.6+e()*1;e()<.75?(U.push(s(k.x,ye-.3,k.z,Ve,Ve*(.95+e()*.25))),G.push(new ve().setHSL(.22+e()*.08,.5,.2+e()*.1))):(D.push(s(k.x,ye-.3,k.z,Ve*.9,Ve*(1+e()*.3))),z.push(new ve().setHSL(.31+e()*.04,.45,.14+e()*.06)))}this.nature?this.plantModels(e,[],[...U,...D],3,!0):(this.instanced(o,h,U,G),this.instanced(l,u,U),this.instanced(r,h,D,z),this.instanced(a,u,D)),this.giantCount=U.length+D.length}const _=[];for(let U=0;U<3;U++){const G=new ht,D=.05;G.setAttribute("position",new Xe([-D,0,0,D,0,0,.03,.55,0],3));const z=this.autumn?[.22,.18,.07]:[.18,.3,.08],k=this.autumn?[.8,.6,.28]:[.75,.8,.35];G.setAttribute("color",new Xe([...z,...z,...k],3)),G.rotateZ((e()-.5)*.5),G.rotateY(U/3*Math.PI+e()*.4),G.translate((e()-.5)*.15,0,(e()-.5)*.15),G.computeVertexNormals(),_.push(G)}const x=Gr(_),E=[],M=[],S=[],A=[],T=(this.autumn?["#c2461f","#e07b24","#e9b13a","#8a3b1c","#b5651d"]:["#f2d14b","#ffffff","#e2455b","#9b6bd6","#ff9a3c"]).map(U=>new ve(U)),b={};for(let U=0;U<(this.tt?9e3:22e3);U++){const G=e()*this.length,z=(e()<.5?-1:1)*(this.SH+.3+Math.pow(e(),1.6)*45);if(this.poseAt(G,z,b),this.lakeAt(b.x,b.z,1)||this.tt&&!this.clearOfPath(b.x,b.z,.4))continue;const k=this.terrainHeight(b.x,b.z),K=.7+e()*.9;if(E.push(s(b.x,k-.05,b.z,K,K*(.8+e()*.8))),M.push(new ve().setHSL((this.autumn?.1:.2)+e()*.06,.4,.4+e()*.3)),e()<(this.autumn?.3:.1)){const oe=.6+e()*.5;this.autumn?S.push(s(b.x+e()-.5,k+.02,b.z+e()-.5,oe*1.6,oe*.35)):S.push(s(b.x+e()-.5,k+.28+e()*.1,b.z+e()-.5,oe)),A.push(T[Math.floor(e()*T.length)])}}const P=new Ue({vertexColors:!0,side:Jt,roughness:1});this.instanced(x,P,E,M,{cast:!1}),this.instanced(new Rr(.07,0),new Ue({color:"#fff",roughness:.7}),S,A,{cast:!1});const N=[];for(let U=0;U<260;U++){const G=(e()*2-1)*800,D=(e()*2-1)*800,z=this.nearest(G,D);if(z.found&&z.dist<7||this.lakeAt(G,D,2))continue;const k=.4+e()*1.8;N.push(new Ne().compose(new L(G,this.terrainHeight(G,D)-k*.3,D),new St().setFromEuler(new Bt(e()*3,e()*3,e()*3)),new L(k,k*.7,k*(.8+e()*.4))))}this.nature?(this.placeOnGeos(N,this.nature.rocks,e,.9),this.plantUnderwood(e)):this.instanced(new Kl(1,0),new Ue({color:"#8b8580",roughness:.95,flatShading:!0}),N);const B=[];for(let U=0;U<(this.cx||this.tt?0:60);U++){const G=e()*this.length,D=(e()<.5?-1:1)*(18+e()*60);this.poseAt(G,D,b);const z=this.terrainHeight(b.x,b.z);z>30||this.lakeAt(b.x,b.z,3)||B.push(new Ne().compose(new L(b.x,z+.7,b.z),new St().setFromEuler(new Bt(0,e()*3,Math.PI/2)),new L(1,1,1)))}this.instanced(new at(.75,.75,1.2,16),new Ue({color:"#d2b15e",roughness:1}),B)}clearAreas(e){const t=new Ne,n=new Ne().makeScale(0,0,0);let s=1/0,r=-1/0,a=1/0,o=-1/0;for(const c of e)s=Math.min(s,c.x-c.r),r=Math.max(r,c.x+c.r),a=Math.min(a,c.z-c.r),o=Math.max(o,c.z+c.r);this.scene.traverse(c=>{var h;if(!c.isInstancedMesh)return;let l=!1;for(let u=0;u<c.count;u++){c.getMatrixAt(u,t);const d=t.elements[12],f=t.elements[14];if(!(d<s||d>r||f<a||f>o)){for(const m of e)if((d-m.x)**2+(f-m.z)**2<m.r*m.r){c.setMatrixAt(u,n),l=!0;break}}}l&&(c.instanceMatrix.needsUpdate=!0,(h=c.computeBoundingSphere)==null||h.call(c))})}clearOfPath(e,t,n){const s=this.nearest(e,t);return!s.found||s.dist>=this.shArr[s.i]+n}natureMaterial(e=0){if(this._natMats||(this._natMats=[]),this._natMats[e])return this._natMats[e];const t=new Ue({vertexColors:!0,roughness:.85}),n=new Du().load(`texturen/rinde/${e?"rinde012":"rinde007"}.jpg`);return n.colorSpace=_t,n.wrapS=n.wrapT=An,n.anisotropy=4,t.onBeforeCompile=s=>{s.uniforms.barkMap={value:n},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float bark;
varying float vBark;
varying vec3 vBarkPos;
varying vec3 vBarkN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBark = bark;
vBarkPos = position;
vBarkN = normal;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D barkMap;
varying float vBark;
varying vec3 vBarkPos;
varying vec3 vBarkN;`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vBark > 0.5) {
            vec3 n = abs(normalize(vBarkN));
            vec2 sc = vec2(1.6, 0.8);
            vec3 a = texture2D(barkMap, vBarkPos.xy * sc).rgb;
            vec3 b = texture2D(barkMap, vBarkPos.zy * sc).rgb;
            float w = n.x / max(n.x + n.z, 0.001);
            vec3 rinde = mix(a, b, w);
            // etwas Farbe des Modells (und die Tönung je Baum) behalten
            diffuseColor.rgb = rinde * (0.55 + 0.6 * vColor.rgb / max(max(vColor.r, vColor.g), max(vColor.b, 0.001)) * 0.75);
          }`)},t.customProgramCacheKey=()=>"rinde"+e,this._natMats[e]=t}leafTint(e){if(!this.autumn)return new ve(1,1,1).multiplyScalar(.85+e()*.3);const t=e();return t<.35?new ve(1.5,.7,.5):t<.7?new ve(1.3,1.2,.55):new ve(1,1,1).multiplyScalar(.9+e()*.25)}plantModels(e,t,n,s,r=!1){const a=this.nature.trees[this.season]||this.nature.trees.sommer,o=new Map,c=(h,u,d)=>{const f=u.elements,m=Math.hypot(f[0],f[1],f[2])*s;if(!this.clearOfPath(f[12],f[14],(r?.14:.1)*m+.4))return;o.has(h)||o.set(h,{mats:[],cols:[]});const g=o.get(h);g.mats.push(u.clone().multiply(new Ne().makeScale(s,s,s))),g.cols.push(d)},l=()=>Math.floor(e()*5);for(const h of t){const u=this.autumn&&e()<.25?a.pineAlt:a.pine;c(u[l()],h,new ve(1,1,1).multiplyScalar(.85+e()*.3))}for(const h of n){const u=e(),d=r?u<.85?a.common:a.birch:u<.5?a.common:u<.8?a.birch:a.willow;c(d[l()],h,this.leafTint(e))}for(const[h,u]of o){const d=[{mats:[],cols:[]},{mats:[],cols:[]}];u.mats.forEach((f,m)=>{const g=d[e()<.5?0:1];g.mats.push(f),g.cols.push(u.cols[m])}),d.forEach((f,m)=>f.mats.length&&this.instanced(h,this.natureMaterial(m),f.mats,f.cols))}}placeOnGeos(e,t,n,s=1,r=null){const a=t.map(()=>({mats:[],cols:[]}));for(const o of e){const c=Math.floor(n()*t.length);a[c].mats.push(s===1?o:o.clone().multiply(new Ne().makeScale(s,s,s))),a[c].cols.push(r?r(n):new ve(1,1,1).multiplyScalar(.85+n()*.3))}a.forEach((o,c)=>o.mats.length&&this.instanced(t[c],this.natureMaterial(),o.mats,o.cols))}plantUnderwood(e){const t={},n=new St,s=new L(0,1,0),r=(u,d,f,m=f,g=e()*Math.PI*2)=>new Ne().compose(new L(u,this.terrainHeight(u,d)-.05,d),n.setFromAxisAngle(s,g).clone(),new L(f,m,f)),a=[],o=this.cx?2600:this.tt?260:1600;for(let u=0;u<o*2&&a.length<o;u++){const f=(e()<.5?-1:1)*(this.SH+1.4+Math.pow(e(),1.4)*(this.cx?14:55));this.poseAt(e()*this.length,f,t);const m=.8+e()*.8;this.clearOfPath(t.x,t.z,.75*m+.3)&&(this.lakeAt(t.x,t.z,2)||a.push(r(t.x,t.z,m,m*(.8+e()*.4))))}const c=u=>{if(!this.autumn)return new ve(1,1,1).multiplyScalar(.9+u()*.4);const d=u();return d<.35?new ve(2.6,1,.5):d<.7?new ve(2.4,1.6,.5):new ve(1.2,1.1,.8)};this.placeOnGeos(a,this.nature.bushes,e,1,c);const l=[],h=[];for(let u=0;u<(this.cx?260:this.tt?30:160);u++){const d=e()<.5?-1:1;if(this.poseAt(e()*this.length,d*(this.SH+2+e()*(this.cx?12:60)),t),!this.lakeAt(t.x,t.z,2))if(e()<.5){const f=1.1+e()*.7;this.clearOfPath(t.x,t.z,.75*f+.3)&&l.push(r(t.x,t.z,f))}else{const f=1+e()*.4,m=1.35*f;this.clearOfPath(t.x+t.tx*m,t.z+t.tz*m,.6)&&this.clearOfPath(t.x-t.tx*m,t.z-t.tz*m,.6)&&this.clearOfPath(t.x,t.z,.6)&&h.push(r(t.x,t.z,f,f,t.heading+(e()-.5)*.4))}}this.placeOnGeos(l,[this.nature.stump],e),this.placeOnGeos(h,[this.nature.log],e)}buildRocks(e){if(this.nature){const h=Qn(7),u=this.nature.rocks,d=u.map(()=>[]);for(const f of this.rocks){this.poseAt(f.s,f.lat,e),f.x=e.x,f.z=e.z;const m=Math.floor(h()*u.length),g=u[m].boundingBox,v=Math.max(g.max.x-g.min.x,g.max.z-g.min.z)/2,p=f.r/v;d[m].push(new Ne().compose(new L(e.x,this.ph[f.i]-.05,e.z),new St().setFromAxisAngle(new L(0,1,0),h()*6.28),new L(p,p*1.1,p)))}d.forEach((f,m)=>f.length&&this.instanced(u[m],this.natureMaterial(),f));return}const t=new Rr(1,1),n=t.attributes.position,s=[],r=new ve("#5b6b3a"),a=new ve("#8a8580"),o=new ve;for(let h=0;h<n.count;h++){const u=n.getX(h),d=n.getY(h),f=n.getZ(h),m=1+this.n1(u*2.1+5,f*2.1+d*1.7)*.25;n.setXYZ(h,u*m,d*m,f*m),o.copy(a).lerp(r,Math.max(0,d)*.8),s.push(o.r,o.g,o.b)}t.setAttribute("color",new Xe(s,3)),t.computeVertexNormals();const c=Qn(7),l=this.rocks.map(h=>(this.poseAt(h.s,h.lat,e),h.x=e.x,h.z=e.z,new Ne().compose(new L(e.x,this.ph[h.i]+h.r*.35,e.z),new St().setFromEuler(new Bt(c()*3,c()*3,c()*3)),new L(h.r,h.r*.8,h.r*1.1))));this.instanced(t,new Ue({vertexColors:!0,roughness:.95,flatShading:!0}),l)}buildDropLogs(e){const t=[];for(const n of this.drops){this.poseAt(n.s-.6,0,e);const s=this.rhArr[n.i]*2+1.6;t.push(new Ne().compose(new L(e.x,this.ph[n.i]+.1,e.z),new St().setFromEuler(new Bt(0,e.heading,Math.PI/2,"YXZ")),new L(1,s,1)))}this.instanced(new at(.17,.2,1,10),new Ue({color:"#6b4b30",roughness:1}),t)}buildTape(e){const t=[],n=[],r=new St,a=new L(0,1,0);for(const h of[-1,1]){let u=null;for(let d=0;d<=this.length+.01;d+=5){this.poseAt(d,h*(this.shAt(d)+.4),e);const f=new L(e.x,this.terrainHeight(e.x,e.z),e.z);if(t.push(new Ne().makeTranslation(f.x,f.y+.45,f.z)),u){const m=u.clone().add(new L(0,.82,0)),g=f.clone().add(new L(0,.82,0)),v=m.clone().add(g).multiplyScalar(.5),p=m.distanceTo(g);r.setFromAxisAngle(a,Math.atan2(g.x-m.x,g.z-m.z));const y=new St().setFromAxisAngle(new L(1,0,0),-Math.atan2(g.y-m.y,Math.hypot(g.x-m.x,g.z-m.z)));n.push(new Ne().compose(v,r.clone().multiply(y),new L(1,1,p)))}u=f}}this.instanced(new at(.03,.035,.9,6),new Ue({color:"#8a6a45",roughness:1}),t);const o=$t(64,16,(h,u,d)=>{for(let f=0;f<8;f++)h.fillStyle=f%2?"#f4f4f0":"#d8232a",h.fillRect(f*u/8,0,u/8,d)},{repeat:[1,1]}),c=new nt(.005,.05,1),l=c.attributes.uv;for(let h=0;h<l.count;h++)l.setX(h,l.getX(h)*5/1.2);this.instanced(c,new Ue({map:o,roughness:.6}),n,null,{cast:!1})}buildProps(){const e={},t=[],n=[];this.cx&&(this.buildTape(e),this.buildDropLogs(e),this.buildRocks(e));for(let d=0;d<(this.cx||this.tt?0:this.length);d+=50)for(const f of[-1,1]){this.poseAt(d,f*(this.SH+.5),e);const m=this.terrainHeight(e.x,e.z);t.push(new Ne().makeTranslation(e.x,m+.5,e.z)),n.push(new Ne().makeTranslation(e.x,m+.92,e.z))}this.instanced(new nt(.12,1,.12),new Ue({color:"#f2f2ee"}),t),this.instanced(new nt(.13,.16,.13),new Ue({color:"#ff7a1a",emissive:"#ff5a00",emissiveIntensity:.6}),n,null,{cast:!1}),this.poseAt(0,0,e);const s=new rt;s.position.set(e.x,e.h,e.z),s.rotation.y=e.heading;const r=new Ue({color:"#1b2233",roughness:.5,metalness:.4}),a=this.SH+.8;for(const d of[-1,1]){const f=new pe(new nt(.5,6.2,.5),r);f.position.set(d*a,3,0),f.castShadow=!0,s.add(f)}const o=$t(1024,192,(d,f,m)=>{const g=d.createLinearGradient(0,0,f,0);g.addColorStop(0,"#101a33"),g.addColorStop(.5,"#1d2f5c"),g.addColorStop(1,"#101a33"),d.fillStyle=g,d.fillRect(0,0,f,m),d.fillStyle=He.colors.gold,d.fillRect(0,8,f,6),d.fillRect(0,m-14,f,6),d.font='800 92px "Barlow Condensed", Arial, sans-serif',d.textAlign="center",d.textBaseline="middle",d.fillText("START  •  ZIEL",f/2,m/2-12),d.font='600 30px "Cinzel", Georgia, serif',d.fillStyle="#ffffff",d.fillText(He.gameName.toUpperCase(),f/2,m-40)}),c=new pe(new nt(a*2+.5,1.5,.25),new Ue({map:o,emissive:"#ffffff",emissiveMap:o,emissiveIntensity:.25}));c.position.y=5.6,c.castShadow=!0,s.add(c);const l=$t(256,32,(d,f,m)=>{for(let g=0;g<16;g++)for(let v=0;v<2;v++)d.fillStyle=(g+v)%2?"#111":"#f4f4f0",d.fillRect(g*16,v*16,16,16)}),h=new pe(new on(this.rhArr[0]*2,.9),new Ue({map:l,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,s.add(h);const u=new Ue({color:He.colors.accent,side:Jt});for(let d=-3;d<=3;d++)if(d!==0)for(const f of[-1,1]){const m=new rt,g=new pe(new at(.03,.03,3.4),r);g.position.y=1.7;const v=new pe(new on(.7,1.1),u);v.position.set(0,2.7,.35),v.rotation.y=Math.PI/2,m.add(g,v),m.position.set(f*(this.SH+3),0,d*7),s.add(m)}this.scene.add(s)}buildFinishZone(){const e={},t=new rt,n=.075,s=(p,y,_,x=0)=>{const E=[],M=[],S=[],A=Math.max(2,Math.round((y-p)/1));for(let P=0;P<=A;P++){const N=p+(y-p)*P/A;this.poseAt(N,0,e);const B=this.nearest(e.x,e.z),U=(B.found?this.rhArr[B.i]:this.RH)+.25,G=-e.tz,D=e.tx,z=e.h-.06+n+x;if(E.push(e.x-G*U,z,e.z-D*U,e.x+G*U,z,e.z+D*U),M.push(0,P/A,1,P/A),P>0){const k=(P-1)*2;S.push(k,k+1,k+2,k+1,k+3,k+2)}}const T=new ht;T.setAttribute("position",new Xe(E,3)),T.setAttribute("uv",new Xe(M,2)),T.setIndex(S),T.computeVertexNormals();const b=new pe(T,_);b.receiveShadow=!0,t.add(b)},r=p=>new Ue({map:p,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),a="#2fa37a",o=$t(1024,512,(p,y,_)=>{p.fillStyle=a,p.fillRect(0,0,y,_),p.translate(y/2,_/2),p.fillStyle="#e9fff4",p.textAlign="center",p.textBaseline="middle";let x=250;do p.font=`900 ${x}px "Barlow Condensed", Arial, sans-serif`;while(p.measureText("GRAND TOUR").width>y*.86&&(x-=8)>60);p.fillText("GRAND TOUR",0,10)}),c=$t(64,64,(p,y,_)=>{p.fillStyle="#7fe0bf",p.fillRect(0,0,y,_)}),l=$t(64,64,(p,y,_)=>{p.fillStyle="#f2f2ee",p.fillRect(0,0,y,_)}),h=this.length;s(h-52,h-45,r(o)),s(h-26,h-19,r(o)),s(h-3.2,h-1.6,r(l)),s(1.2,9,r(c)),s(13,20,r(o));const u=[["#2fa37a","#ffffff","GRAND TOUR"],["#1d2433","#ffffff","PAULSDORF • SEIT 2026"],["#f2f2ee","#1d2433","PEDAL LEGENDS"],["#2fa37a","#ffffff","GRAND TOUR"],["#f4c430","#1d2433","ZIELKAMERA"]].map(([p,y,_])=>new Ue({roughness:.6,map:$t(512,128,(x,E,M)=>{x.fillStyle=p,x.fillRect(0,0,E,M),x.fillStyle=y;let S=70;do x.font=`800 ${S}px "Barlow Condensed", Arial, sans-serif`;while(x.measureText(_).width>E*.9&&(S-=4)>20);x.textAlign="center",x.textBaseline="middle",x.fillText(_,E/2,M/2+2)})})),d=new Ue({color:"#b9bcc2",metalness:.8,roughness:.35}),f=new nt(2.3,.9,.04),m=new at(.03,.03,2.4,6).rotateZ(Math.PI/2),g=new nt(.06,1.15,.5);let v=0;for(let p=h-75;p<h+25;p+=2.45){for(const y of[-1,1]){this.poseAt(p,0,e);const _=this.nearest(e.x,e.z),x=(_.found?this.shArr[_.i]:this.SH)+.4;if(this.poseAt(p,y*x,e),this.solid&&this.solid.some(T=>Math.hypot(T.x-e.x,T.z-e.z)<T.r+.6))continue;const E=new rt;E.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),E.rotation.y=e.heading+Math.PI/2;const M=new pe(f,u[(v+(y>0?2:0))%u.length]);M.position.y=.62,M.castShadow=!0;const S=new pe(m,d);S.position.y=1.1;const A=new pe(g,d);A.position.set(-1.15,.57,0),E.add(M,S,A),t.add(E)}v++}for(const p of this.cx?[]:[this.SH+4.5,this.SH+7,-(this.SH+4.5)]){if(this.poseAt(6,p,e),this.solid&&this.solid.some(A=>Math.hypot(A.x-e.x,A.z-e.z)<A.r+3)||!this.clearOfPath(e.x,e.z,2.5))continue;const y=new rt;y.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),y.rotation.y=e.heading+(p>0?-Math.PI/2:Math.PI/2);const _=new Ue({color:"#f4d21c",roughness:.5}),x=new pe(new nt(4.2,2.6,2.6),_);x.position.y=1.7,x.castShadow=!0;const E=new pe(new nt(3.4,1,.05),new Ue({color:"#1d2433",roughness:.1,metalness:.6}));E.position.set(0,2.1,1.31);const M=new pe(new on(2.2,.55),u[4]);M.position.set(0,3.3,1.31);const S=new pe(new nt(4,.4,2.4),new Ue({color:"#555a62"}));S.position.y=.2,y.add(x,E,M,S),t.add(y);break}this.scene.add(t)}buildClouds(){const e=Qn(77),t=$t(256,128,(n,s,r)=>{for(let a=0;a<40;a++){const o=s*(.15+e()*.7),c=r*(.45+(e()-.5)*.35),l=18+e()*30,h=n.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,"rgba(255,255,255,0.35)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,s,r)}});for(let n=0;n<26;n++){const s=new dd({map:t,color:new ve().setHSL(.05+e()*.04,.7,.78+e()*.1),fog:!1,depthWrite:!1,transparent:!0,opacity:.55+e()*.35}),r=new qx(s),a=e()*Math.PI*2,o=1300+e()*1200;r.position.set(Math.cos(a)*o,220+e()*380,Math.sin(a)*o);const c=380+e()*500;r.scale.set(c,c*.4,1),this.scene.add(r)}}buildMotes(){const t=new Float32Array(1050);for(let a=0;a<350*3;a++)t[a]=(Math.random()-.5)*50;const n=new ht;if(n.setAttribute("position",new Ct(t,3)),this.autumn){const a=new Float32Array(1050),o=["#c2461f","#e07b24","#e9b13a","#8a3b1c"].map(l=>new ve(l));for(let l=0;l<350;l++)o[l%o.length].toArray(a,l*3);n.setAttribute("color",new Ct(a,3));const c=$t(64,64,l=>{l.fillStyle="#fff",l.beginPath(),l.ellipse(32,32,26,13,.6,0,Math.PI*2),l.fill()});this.motes=new Ns(n,new vi({size:.16,map:c,vertexColors:!0,transparent:!0,alphaTest:.4,depthWrite:!1})),this.motes.frustumCulled=!1,this.scene.add(this.motes);return}const s=$t(64,64,a=>{const o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.3,"rgba(255,230,180,0.6)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),r=new vi({size:.09,map:s,color:new ve(2.2,1.7,1.1),transparent:!0,depthWrite:!1,blending:Ur});this.motes=new Ns(n,r),this.motes.frustumCulled=!1,this.scene.add(this.motes)}update(e,t,n,s){if(this.chunks&&this.cx){const l=n.position;for(const h of this.chunks){const u=h.boundingSphere;u&&(h.visible=Math.hypot(u.center.x-l.x,u.center.z-l.z)-u.radius<330)}}this.sun.position.copy(t).addScaledVector(this.lightDir,120),this.sun.target.position.copy(t);const r=this.motes.geometry.attributes.position,a=n.position.x,o=n.position.y,c=n.position.z;for(let l=0;l<r.count;l++){let h=r.getX(l)+Math.sin(s*.5+l)*.15*e+.25*e,u=r.getY(l)+Math.cos(s*.4+l*1.7)*.1*e;this.autumn&&(u-=(.45+l%5*.08)*e,h+=Math.sin(s*1.3+l)*.5*e);let d=r.getZ(l)+.1*e;const f=(m,g)=>m-g>25?m-50:m-g<-25?m+50:m;h=f(h,a),u-o<-2?u+=16:u-o>14&&(u-=16),d=f(d,c),r.setXYZ(l,h,u,d)}r.needsUpdate=!0}}const Ms=.0105,fr=new L(1,0,0),ml=new Ne,Gu=new L,sb=new L,rb=new St,ob=new St,ab=new L,cb=new L,lb=new L,Ni=new L,Wu=new L,hb={Hips:"Spine",Spine:"Spine1",Spine1:"Spine2",Spine2:"Neck",Neck:"Head",Head:"HeadTop_End",LeftUpLeg:"LeftLeg",LeftLeg:"LeftFoot",LeftFoot:"LeftToeBase",RightUpLeg:"RightLeg",RightLeg:"RightFoot",RightFoot:"RightToeBase",LeftArm:"LeftForeArm",LeftForeArm:"LeftHand",LeftHand:"LeftHandMiddle1",RightArm:"RightForeArm",RightForeArm:"RightHand",RightHand:"RightHandMiddle1"};function $u(i,e,t){const n=ab.copy(i).normalize(),s=cb.copy(e).addScaledVector(n,-e.dot(n));s.lengthSq()<1e-8&&s.set(0,0,1).addScaledVector(n,-n.z),s.normalize();const r=lb.crossVectors(s,n);return t.setFromRotationMatrix(ml.makeBasis(s,n,r))}function Xu(i,e,t,n,s,r){Ni.copy(e).sub(i);let a=Ni.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),Ni.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return Wu.copy(s).addScaledVector(Ni,-s.dot(Ni)).normalize(),r.copy(i).addScaledVector(Ni,o*t).addScaledVector(Wu,c*t)}class ub{constructor(e){this.scene=e,e.scale.setScalar(Ms),this.inv=new Ne;const t=r=>r.replace(/^mixamorig\d*/,"").replace(/_\d+$/,"");this.bones={},e.traverse(r=>{r.isBone&&!this.bones[t(r.name)]&&!/_\d+$/.test(r.name)&&(this.bones[t(r.name)]=r)}),this.meshes={},e.traverse(r=>{if(!r.isSkinnedMesh)return;const a=r.skeleton.bones.map(o=>this.bones[t(o.name)]||o);r.bind(new jl(a,r.skeleton.boneInverses),r.bindMatrix),r.frustumCulled=!1,r.castShadow=!0,r.receiveShadow=!0,this.meshes[r.name.replace(/^Ch\d+_/,"")]=r}),this.meshes.Hair&&(this.meshes.Hair.visible=!1),e.updateMatrixWorld(!0),this.inv.copy(e.matrixWorld).invert(),this.rest=new Map;const n=this.bones;for(const[r,a]of Object.entries(hb)){const o=n[r],c=n[a];if(!o||!c)continue;const l=this.pos(o,new L),h=this.pos(c,new L).sub(l).normalize(),u=/^Left(Arm|ForeArm|Hand)$/.test(r)?new L(0,-1,0):/^Right(Arm|ForeArm|Hand)$/.test(r)?new L(0,1,0):fr.clone(),d=this.quat(o,new St),f=$u(h,u,new St).invert().multiply(d);this.rest.set(o,{off:f,len:this.pos(c,new L).distanceTo(l)})}const s=r=>{var a;return((a=this.rest.get(n[r]))==null?void 0:a.len)||0};this.thigh=s("LeftUpLeg"),this.shin=s("LeftLeg"),this.upperArm=s("LeftArm"),this.foreArm=s("LeftForeArm"),this.foot=s("LeftFoot"),this.hipsRest=n.Hips.position.clone(),this.hipParentInv=new Ne}pos(e,t){return t.setFromMatrixPosition(ml.multiplyMatrices(this.inv,e.matrixWorld))}quat(e,t){return ml.multiplyMatrices(this.inv,e.matrixWorld).decompose(Gu,t,sb),t}aim(e,t,n=fr){const s=this.bones[e],r=this.rest.get(s);if(!r)return;const a=$u(t,n,rb).multiply(r.off),o=this.quat(s.parent,ob).invert();s.quaternion.copy(o.multiply(a)),s.updateMatrixWorld(!0)}pose({hip:e,pedals:t,angles:n,hands:s,bob:r,aero:a=!1,stand:o=0}){const c=1/Ms,l=this.bones;this.scene.updateMatrixWorld(!0),this.inv.copy(this.scene.matrixWorld).invert();const h=Gu.copy(e);a&&(h.z+=.07),h.multiplyScalar(c),h.y+=r*c,this.hipParentInv.copy(l.Hips.parent.matrixWorld).invert(),l.Hips.position.copy(h.applyMatrix4(this.scene.matrixWorld).applyMatrix4(this.hipParentInv)),l.Hips.updateMatrixWorld(!0);const u=g=>Ni.set(0,Math.cos(g),Math.sin(g));let d=a?[.75,1.3,1.45,1.5,1,.45]:[.55,.95,1.1,1.2,.6,.12];if(o>0){const g=[.75,1.3,1.45,1.5,.95,.4];d=d.map((v,p)=>v+(g[p]-v)*o)}this.aim("Hips",u(d[0])),this.aim("Spine",u(d[1])),this.aim("Spine1",u(d[2])),this.aim("Spine2",u(d[3])),this.aim("Neck",u(d[4])),this.aim("Head",u(d[5]));const f=new L;for(const g of[1,-1]){const v=g>0?"Left":"Right",p=g>0?1:0,y=this.pos(l[v+"UpLeg"],new L),_=.5+.06+.22*Math.sin(n[p]),x=new L(0,-Math.sin(_),Math.cos(_)),E=new L().copy(t[p]).multiplyScalar(c);E.y+=2.5;const M=E.clone().addScaledVector(x,-this.foot);Xu(y,M,this.thigh,this.shin,new L(g*.1,.1,1),f);const S=f.clone().sub(y),A=M.clone().sub(f),T=new L().crossVectors(S,A);T.lengthSq()<1e-6&&T.copy(fr),this.aim(v+"UpLeg",S,T),this.aim(v+"Leg",A,T),this.aim(v+"Foot",x,fr)}const m=new L;for(const g of[1,-1]){const v=g>0?"Left":"Right",p=this.pos(l[v+"Arm"],new L),y=new L().copy(s[g>0?1:0]).multiplyScalar(c);Xu(p,y,this.upperArm,this.foreArm,a?new L(0,-1,-.15):new L(g*.15,-.75,-.35),m);const _=m.clone().sub(p),x=y.clone().sub(m),E=new L().crossVectors(_,x);E.lengthSq()<1e-6&&E.set(0,-g,0),this.aim(v+"Arm",_,E),this.aim(v+"ForeArm",x,E),this.aim(v+"Hand",x.normalize().add(new L(0,-.35,0)),E)}}setKit({jersey:e,shorts:t}){if(!this.tinted){this.tinted={};for(const n of["Shirt","Shorts","Socks","Shoes"]){const s=this.meshes[n];if(!s||!s.material.map)continue;const r=s.material.clone();r.map=fb(s),s.material=r,this.tinted[n]=r}this.tinted.Socks&&this.tinted.Socks.color.set("#f4f4f4"),this.tinted.Shoes&&this.tinted.Shoes.color.set("#f2f2f2")}e&&this.tinted.Shirt&&this.tinted.Shirt.color.set(e),t&&this.tinted.Shorts&&this.tinted.Shorts.color.set(t)}attachShoes(e){this.meshes.Shoes&&(this.meshes.Shoes.visible=!1);const t=this.foot*Ms,n=.42,s=new L(0,-Math.sin(n),-Math.cos(n)),r=new L(0,Math.cos(n),-Math.sin(n)),a=new Ne().makeBasis(fr,s,r);this.shoes=[];for(const o of["LeftFoot","RightFoot"]){const c=this.bones[o],l=this.rest.get(c);if(!c||!l)continue;const h=new rt;h.quaternion.copy(l.off).invert(),h.scale.setScalar(1/Ms);const u=e();u.quaternion.setFromRotationMatrix(a),u.position.set(0,t,0).addScaledVector(s,-.026),h.add(u),c.add(h),this.shoes.push(u)}}attach(e,t){const n=this.bones[e];t.scale.multiplyScalar(1/Ms),t.position.multiplyScalar(1/Ms),n.add(t)}}function fb(i){const e=i.material.map,t=e.image,n=t.width,s=t.height,r=document.createElement("canvas");r.width=n,r.height=s;const a=r.getContext("2d");a.drawImage(t,0,0);const o=a.getImageData(0,0,n,s),c=o.data,l=i.geometry.attributes.uv;let h=0,u=0;for(let g=0;g<l.count;g+=7){const v=Math.min(n-1,Math.max(0,Math.floor(l.getX(g)*n))),y=(Math.min(s-1,Math.max(0,Math.floor((e.flipY?1-l.getY(g):l.getY(g))*s)))*n+v)*4;h+=.3*c[y]+.59*c[y+1]+.11*c[y+2],u++}const f=225/Math.max(8,h/Math.max(1,u));for(let g=0;g<c.length;g+=4){const v=Math.min(255,(.3*c[g]+.59*c[g+1]+.11*c[g+2])*f);c[g]=c[g+1]=c[g+2]=v}a.putImageData(o,0,0);const m=new xn(r);return m.colorSpace=e.colorSpace,m.flipY=e.flipY,m.wrapS=e.wrapS,m.wrapT=e.wrapT,m}class db{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return pb(e).buffer}}function pb(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Ad(i){return new mb(i).unpack()}function Cd(i){const e=new gb,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class mb{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class gb{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new db,this._textEncoder=new TextEncoder}}let Rd=!0,Pd=!0;function Mr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Qi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){eh("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function vb(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Rd=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function _b(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Pd=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function eh(){if(typeof window=="object"){if(Rd)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function th(i,e){Pd&&console.warn(i+" is deprecated, please use "+e+" instead.")}function xb(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Mr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Mr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Mr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Mr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function ju(i){return Object.prototype.toString.call(i)==="[object Object]"}function Ld(i){return ju(i)?Object.keys(i).reduce(function(e,t){const n=ju(i[t]),s=n?Ld(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function gl(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?gl(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{gl(i,i.get(s),t)})}))}function qu(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&gl(i,o,s)})}),s}const Yu=eh;function Id(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(m=>m.kind==="videoinput");let f=d.find(m=>u.some(g=>m.label.toLowerCase().includes(g)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(o.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=n(o.video),Yu("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Yu("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Dd(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function kd(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Qi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Ud(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Nd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>qu(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Qi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>qu(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Fd(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Od(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Fd(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(g=>g===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(g=>g.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[u.id];if(m)m.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const g=new i.MediaStream([h]);this._streams[u.id]=g,this._reverseStreams[g.id]=u,this.addStream(g)}return this.getSenders().find(g=>g.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],m=l._streams[f.id];u=u.replace(new RegExp(m.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],m=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[m=>{const g=r(this,m);d[0].apply(null,[g])},m=>{d[1]&&d[1].apply(null,m)},arguments[2]]):h.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[l]=u[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(g=>h.track===g)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function vl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function zd(i,e){e.version>102||Qi(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Zu=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:zd,shimAddTrackRemoveTrack:Od,shimAddTrackRemoveTrackWithNative:Fd,shimGetSendersWithDtmf:Ud,shimGetUserMedia:Id,shimMediaStream:Dd,shimOnTrack:kd,shimPeerConnection:vl,shimSenderReceiverGetStats:Nd},Symbol.toStringTag,{value:"Module"}));function Bd(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){th("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function yb(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Hd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function _l(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Vd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Gd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Wd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Qi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function $d(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){th("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Xd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function jd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function qd(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Yd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Zd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Ku=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:jd,shimCreateAnswer:Zd,shimCreateOffer:Yd,shimGetDisplayMedia:yb,shimGetParameters:qd,shimGetStats:Vd,shimGetUserMedia:Bd,shimOnTrack:Hd,shimPeerConnection:_l,shimRTCDataChannel:Xd,shimReceiverGetStats:Wd,shimRemoveStream:$d,shimSenderGetStats:Gd},Symbol.toStringTag,{value:"Module"}));function Kd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Jd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Qd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let o=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,h){const u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=o}function ep(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(tp(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function tp(i){return i&&i.video!==void 0?Object.assign({},i,{video:Ld(i.video)}):i}function np(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(th("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function ip(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function sp(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function rp(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Ju=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:rp,shimCallbacksAPI:Qd,shimConstraints:tp,shimCreateOfferLegacy:sp,shimGetUserMedia:ep,shimLocalStreamsAPI:Kd,shimRTCIceServerUrls:np,shimRemoteStreamsAPI:Jd,shimTrackEventTransceiver:ip},Symbol.toStringTag,{value:"Module"}));function bb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var oc={exports:{}},Qu;function Mb(){return Qu||(Qu=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<r.length;a++)s=r[a].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?r.push(a+"="+t.parameters[a]):r.push(a)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{s+=e.writeRtpMap(a),s+=e.writeFmtp(a),s+=e.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=e.writeExtmap(a)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(m=>parseInt(m,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const a=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(oc)),oc.exports}var op=Mb();const Fs=bb(op),Sb=Op({__proto__:null,default:Fs},[op]);function Yo(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Fs.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Qi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function xl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Qi(i,"icecandidate",e=>{if(e.candidate){const t=Fs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Zo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=Fs.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=Fs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Fs.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return a.apply(this,arguments)}}function Ko(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Qi(i,"datachannel",s=>(t(s.channel,s.target),s))}function yl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function bl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Jo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Qo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Tb=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:bl,shimAddIceCandidateNullOrEmpty:Jo,shimConnectionState:yl,shimMaxMessageSize:Zo,shimParameterlessSetLocalDescription:Qo,shimRTCIceCandidate:Yo,shimRTCIceCandidateRelayProtocol:xl,shimSendThrowTypeError:Ko},Symbol.toStringTag,{value:"Module"}));function wb({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=eh,n=xb(i),s={browserDetails:n,commonShim:Tb,extractVersion:Mr,disableLog:vb,disableWarnings:_b,sdp:Sb};switch(n.browser){case"chrome":if(!Zu||!vl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Zu,Jo(i,n),Qo(i),Id(i,n),Dd(i),vl(i,n),kd(i,n),Od(i,n),Ud(i),Nd(i,n),zd(i,n),Yo(i),xl(i),yl(i),Zo(i,n),Ko(i,n),bl(i,n);break;case"firefox":if(!Ku||!_l||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Ku,Jo(i,n),Qo(i),Bd(i,n),_l(i,n),Vd(i,n),Hd(i),$d(i),Gd(i),Wd(i),Xd(i),jd(i,n),qd(i,n),Yd(i,n),Zd(i,n),Yo(i),yl(i),Zo(i,n),Ko(i,n);break;case"safari":if(!Ju||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Ju,Jo(i,n),Qo(i),np(i),sp(i),Qd(i),Kd(i),Jd(i),ip(i),ep(i),rp(i),Yo(i),xl(i),Zo(i,n),Ko(i,n),bl(i,n);break;default:t("Unsupported browser!");break}return s}const ef=wb({window:typeof window>"u"?void 0:window});function es(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class ap{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function Eb(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const ac=ef.default||ef,dr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ac.browserDetails.browser}getVersion(){return ac.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=ac.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ab=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),cp=()=>Math.random().toString(36).slice(2),tf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Cb extends ap{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=tf,this.browser=dr.getBrowser(),this.browserVersion=dr.getVersion(),this.pack=Cd,this.unpack=Ad,this.supports=(function(){const t={browser:dr.isBrowserSupported(),webRTC:dr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(tf),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!dr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ab,this.randomToken=cp}}const Kt=new Cb,Rb="PeerJS: ";var nf;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(nf||(nf={}));class Pb{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Rb,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ke=new Pb,nh={},Lb=Object.prototype.hasOwnProperty,qt="~";function Wr(){}Object.create&&(Wr.prototype=Object.create(null),new Wr().__proto__||(qt=!1));function Ib(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function lp(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Ib(t,n||i,s),a=qt?qt+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function ea(i,e){--i._eventsCount===0?i._events=new Wr:delete i._events[e]}function Vt(){this._events=new Wr,this._eventsCount=0}Vt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Lb.call(t,n)&&e.push(qt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Vt.prototype.listeners=function(e){var t=qt?qt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Vt.prototype.listenerCount=function(e){var t=qt?qt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Vt.prototype.emit=function(e,t,n,s,r,a){var o=qt?qt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};Vt.prototype.on=function(e,t,n){return lp(this,e,t,n,!1)};Vt.prototype.once=function(e,t,n){return lp(this,e,t,n,!0)};Vt.prototype.removeListener=function(e,t,n,s){var r=qt?qt+e:e;if(!this._events[r])return this;if(!t)return ea(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&ea(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:ea(this,r)}return this};Vt.prototype.removeAllListeners=function(e){var t;return e?(t=qt?qt+e:e,this._events[t]&&ea(this,t)):(this._events=new Wr,this._eventsCount=0),this};Vt.prototype.off=Vt.prototype.removeListener;Vt.prototype.addListener=Vt.prototype.on;Vt.prefixed=qt;Vt.EventEmitter=Vt;nh=Vt;var ts={};es(ts,"ConnectionType",()=>Vn);es(ts,"PeerErrorType",()=>Mt);es(ts,"BaseConnectionErrorType",()=>$r);es(ts,"DataConnectionErrorType",()=>Xr);es(ts,"SerializationType",()=>js);es(ts,"SocketEventType",()=>zn);es(ts,"ServerMessageType",()=>kt);var Vn;(function(i){i.Data="data",i.Media="media"})(Vn||(Vn={}));var Mt;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(Mt||(Mt={}));var $r;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})($r||($r={}));var Xr;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(Xr||(Xr={}));var js;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(js||(js={}));var zn;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})(zn||(zn={}));var kt;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(kt||(kt={}));var ih={};ih=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class Db extends nh.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ih.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ke.log("Server message received:",r)}catch{ke.log("Invalid server message",s.data);return}this.emit(zn.Message,r)},this._socket.onclose=s=>{this._disconnected||(ke.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(zn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ke.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ke.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:kt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(zn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class hp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Vn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ke.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ke.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(ke.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:kt.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ke.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError($r.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ke.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError($r.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ke.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ke.log("Listening for data channel"),e.ondatachannel=a=>{ke.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},ke.log("Listening for remote stream"),e.ontrack=a=>{ke.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===Vn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){ke.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ke.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Vn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:kt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Mt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Mt.WebRTC,n),ke.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ke.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:kt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Mt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Mt.WebRTC,n),ke.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;ke.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ke.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Mt.WebRTC,a),ke.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){ke.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ke.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Mt.WebRTC,t),ke.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ke.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ke.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ke.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class up extends nh.EventEmitter{emitError(e,t){ke.error("Error:",t),this.emit("error",new kb(`${e}`,t))}}class kb extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class fp extends up{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Al;const Dr=class Dr extends fp{get type(){return Vn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Dr.ID_PREFIX+Kt.randomToken(),this._negotiator=new hp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ke.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case kt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case kt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ke.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ke.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Al=new WeakMap,tr(Dr,Al,Dr.ID_PREFIX="mc_");let ha=Dr;class Ub{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ih.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ke.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Kt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Kt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ke.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Cl,Rl;const Bi=class Bi extends fp{get type(){return Vn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Bi.ID_PREFIX+cp(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new hp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ke.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Xr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case kt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case kt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ke.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Cl=new WeakMap,Rl=new WeakMap,tr(Bi,Cl,Bi.ID_PREFIX="dc_"),tr(Bi,Rl,Bi.MAX_BUFFERED_AMOUNT=8388608);let ua=Bi;class sh extends ua{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ua.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ke.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class cc extends sh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new ap,this.serialization=js.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ad(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=Eb(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Cd(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ke.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Nb extends sh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=js.None}}class Fb extends sh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Kt.chunkedMTU){this.emitError(Xr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=js.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Pl;const kr=class kr extends up{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Nb,json:Fb,binary:cc,"binary-utf8":cc,default:cc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Kt.CLOUD_HOST,port:Kt.CLOUD_PORT,path:"/",key:kr.DEFAULT_KEY,token:Kt.randomToken(),config:Kt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Kt.CLOUD_HOST?this._options.secure=Kt.isSecure():this._options.host==Kt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ke.setLogFunction(this._options.logFunction),ke.logLevel=this._options.debug||0,this._api=new Ub(t),this._socket=this._createServerConnection(),!Kt.supports.audioVideo&&!Kt.supports.data){this._delayedAbort(Mt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Kt.validateId(n)){this._delayedAbort(Mt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Mt.ServerError,s))}_createServerConnection(){const e=new Db(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(zn.Message,t=>{this._handleMessage(t)}),e.on(zn.Error,t=>{this._abort(Mt.SocketError,t)}),e.on(zn.Disconnected,()=>{this.disconnected||(this.emitError(Mt.Network,"Lost connection to server."),this.disconnect())}),e.on(zn.Close,()=>{this.disconnected||this._abort(Mt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case kt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case kt.Error:this._abort(Mt.ServerError,n.msg);break;case kt.IdTaken:this._abort(Mt.UnavailableID,`ID "${this.id}" is taken`);break;case kt.InvalidKey:this._abort(Mt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case kt.Leave:ke.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case kt.Expire:this.emitError(Mt.PeerUnavailable,`Could not connect to peer ${s}`);break;case kt.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),ke.warn(`Offer received for existing Connection ID:${r}`)),n.type===Vn.Media){const c=new ha(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Vn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{ke.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){ke.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):ke.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Mt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Mt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ke.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new ha(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ke.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ke.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ke.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ke.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ke.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ke.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Mt.ServerError,t))}};Pl=new WeakMap,tr(kr,Pl,kr.DEFAULT_KEY="peerjs");let Ml=kr;var sf=Ml;const rf="the-grand-tour-v1-";function of(i){const e=["name","number","jersey","frame","helmet","shorts","brand","paint","kit","bar","groupset","tires"],t={};for(const n of e)i[n]!=null&&(t[n]=i[n]);return t}class Ob{constructor(){this.peer=null,this.conn=null,this.role=null,this.code=null,this.remote=null,this.listener=null,this.status="off"}get connected(){return this.status==="connected"}listen(e){this.listener=e}emit(e){var t;(t=this.listener)==null||t.call(this,e)}host(e,t,n=0){this.close(),this.role="host",this.me={char:of(e),mode:t},this.code=String(1e3+Math.floor(Math.random()*9e3)),this.status="waiting";const s=this.peer=new sf(rf+this.code);s.on("error",r=>{if(r.type==="unavailable-id"&&n<5)return this.host(e,t,n+1);this.fail(r)}),s.on("open",()=>this.emit({t:"code",code:this.code})),s.on("connection",r=>{if(this.conn){r.close();return}this.attach(r)})}join(e,t,n){this.close(),this.role="guest",this.me={char:of(t),mode:n},this.code=e,this.status="connecting";const s=this.peer=new sf;s.on("error",r=>this.fail(r)),s.on("open",()=>this.attach(s.connect(rf+e,{reliable:!0}))),clearTimeout(this.joinTimer),this.joinTimer=setTimeout(()=>{this.status==="connecting"&&this.fail({type:"timeout"})},12e3)}attach(e){this.conn=e,e.on("open",()=>{clearTimeout(this.joinTimer),this.status="connected",e.send({t:"hello",...this.me})}),e.on("data",t=>{if(!(!t||typeof t!="object")){if(t.t==="bye"){this.status="closed",this.emit({t:"closed"});return}t.t==="hello"&&(this.remote={char:t.char,mode:t.mode}),this.emit(t)}}),e.on("close",()=>{this.status==="connected"&&(this.status="closed",this.emit({t:"closed"}))}),e.on("error",t=>this.fail(t))}send(e){var t;this.connected&&((t=this.conn)!=null&&t.open)&&this.conn.send(e)}fail(e){if(this.status==="off")return;this.status="error";const t=(e==null?void 0:e.type)==="peer-unavailable"||(e==null?void 0:e.type)==="timeout"?"Kein Rennen mit diesem Code gefunden.":(e==null?void 0:e.type)==="network"||(e==null?void 0:e.type)==="server-error"||(e==null?void 0:e.type)==="socket-error"?"Keine Verbindung zum Internet-Dienst.":"Die Verbindung hat nicht geklappt.";this.emit({t:"error",why:t})}close(){var t,n,s;clearTimeout(this.joinTimer);const e=this.status;this.status="off";try{e==="connected"&&((t=this.conn)==null||t.send({t:"bye"}))}catch{}(n=this.conn)==null||n.close(),(s=this.peer)==null||s.destroy(),this.conn=null,this.peer=null,this.remote=null}}const Pr=.27,zi=.185,af=22,Rt=20;function Ps(i){const e=.064+.03*Math.sin(Math.PI*Math.min(1,i*1.35))-.012*Math.max(0,i-.8)/.2,t=i<.2?.1+.008*(i/.2):i<.58?.108-.045*((i-.2)/.38):.063-.033*((i-.58)/.42),n=.012*Math.max(0,(i-.82)/.18)**2+.006*Math.max(0,(.08-i)/.08);return{w:e,h:t,lift:n}}function zb(){const i=[],e=[],t=(a,o)=>{const{w:c,h:l,lift:h}=Ps(a),u=a*Pr-zi;for(let d=0;d<Rt;d++){const f=d/Rt*Math.PI*2,m=Math.cos(f),g=Math.sin(f),p=Math.sign(m)*Math.abs(m)**.55*(c/2)*o,y=g>0?Math.abs(g)**.8*l*o:g*.004;i.push(p,y+h+.012,u)}},n=[];n.push([0,.35],[.008,.7],[.02,.9]);for(let a=1;a<=af;a++)n.push([.02+.95*a/af,1]);n.push([.985,.75],[1,.3]),n.forEach(([a,o])=>t(a,o));for(let a=0;a<n.length-1;a++)for(let o=0;o<Rt;o++){const c=a*Rt+o,l=a*Rt+(o+1)%Rt,h=c+Rt,u=l+Rt;e.push(c,l,h,l,u,h)}const s=(a,o)=>{const c=i.length/3;let l=0,h=0,u=0;for(let d=0;d<Rt;d++)l+=i[(a*Rt+d)*3],h+=i[(a*Rt+d)*3+1],u+=i[(a*Rt+d)*3+2];i.push(l/Rt,h/Rt,u/Rt);for(let d=0;d<Rt;d++){const f=a*Rt+d,m=a*Rt+(d+1)%Rt;o?e.push(c,f,m):e.push(c,m,f)}};s(0,!1),s(n.length-1,!0);const r=new ht;return r.setAttribute("position",new Xe(i,3)),r.setIndex(e),r.computeVertexNormals(),r}function Bb(){const i=new yd,e=[];for(let n=0;n<=24;n++){const s=n/24;e.push([Ps(s).w/2+.003,s*Pr-zi])}i.moveTo(-e[0][0],e[0][1]);for(const[n,s]of e)i.lineTo(n,s);for(let n=e.length-1;n>=0;n--)i.lineTo(-e[n][0],e[n][1]);const t=new Jl(i,{depth:.012,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:2});return t.rotateX(Math.PI/2),t.translate(0,.014,0),t}let Lo=null;function Hb(){return Lo||(Lo={upper:zb(),sole:Bb(),dial:new at(.016,.017,.012,16),dialRing:new _i(.016,.003,6,16),strap:new nt(1,1,1),cleat:new nt(.05,.008,.06),heel:new nt(.03,.006,.022)},Lo)}function cf(i){const e=Hb(),t=new rt,n=(d,f,m,g,v,p=0,y=0,_=0,x=1,E=1,M=1)=>{const S=new pe(d,f);return S.position.set(m,g,v),S.rotation.set(p,y,_),S.scale.set(x,E,M),S.castShadow=!0,t.add(S),S};n(e.upper,i.upper,0,0,0),n(e.sole,i.sole,0,0,0),n(e.cleat,i.cleat||i.sole,0,.002,0),n(e.heel,i.sole,0,.002,-zi+.02);const s=0,r=Ps((s+zi)/Pr);n(e.strap,i.accent,0,.012+r.h*.92,s,-.2,0,0,r.w*.98,.008,.035);const a=Ps((s+.05+zi)/Pr);n(e.strap,i.accent,0,.012+a.h*.92,s+.05,-.15,0,0,a.w*.98,.008,.03);const o=Ps(.04);n(e.strap,i.sole,0,.012+o.h*.45,-zi+.006,0,0,0,o.w*.8,o.h*.8,.012);const c=.4,l=Ps(c),h=c*Pr-zi,u=.012+l.h*.98;return n(e.dial,i.dial,.012,u,h,-.35,0,-.25),n(e.dialRing,i.accent,.012,u+.005,h,Math.PI/2-.35,0,-.25),t}function Vb(){return{upper:new un({color:"#f6f6f4",roughness:.28,clearcoat:.8,clearcoatRoughness:.2}),sole:new Ue({color:"#141416",roughness:.45,metalness:.2}),cleat:new Ue({color:"#c8352c",roughness:.6}),dial:new Ue({color:"#1a1a1e",roughness:.3,metalness:.4})}}const fa=[{id:"canyon",name:"Canyon",land:"Deutschland",font:"800 italic",upper:!0},{id:"rose",name:"Rose",land:"Deutschland",font:"800",upper:!0},{id:"colnago",name:"Colnago",land:"Italien",font:"800",upper:!0,wide:!0},{id:"cervelo",name:"Cervélo",land:"Kanada",font:"700 italic",upper:!1}],Lr=[{hex:"#f6f6f6",name:"Weiß"},{hex:"#16161b",name:"Schwarz"},{hex:"#9aa0a6",name:"Grau"},{hex:"#d62839",name:"Rot"},{hex:"#f4a12a",name:"Orange"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2bb24c",name:"Grün"},{hex:"#1fa88f",name:"Türkis"},{hex:"#2f7cf6",name:"Blau"},{hex:"#14365c",name:"Dunkelblau"},{hex:"#8a3ffc",name:"Lila"},{hex:"#ff6fb5",name:"Pink"},{hex:"#d4af37",name:"Gold"}],rh=Lr.map(i=>i.hex==="#2bb24c"?{hex:"#145a32",name:"Dunkelgrün"}:i),Gb=Lr.map(i=>i.hex==="#f4a12a"?{hex:"#d9731c",name:"Orange"}:i);function Wb(i){return rh.some(e=>e.matte&&e.hex===i)}const dp=[{id:"solid",name:"Einfarbig"},{id:"team",name:"Team-Design"},{id:"rainbow",name:"Weltmeister"}],da=[{id:"105",name:"105",maker:"Shimano",crank:"#26272c",ring:"#1b1c20",accent:"#b9bdc4",kraft:1},{id:"ultegra",name:"Ultegra",maker:"Shimano",crank:"#55585f",ring:"#3d4046",accent:"#d5d8dd",kraft:1.02},{id:"duraace",name:"Dura-Ace",maker:"Shimano",crank:"#2e3036",ring:"#a9aeb6",accent:"#e8eaee",kraft:1.05},{id:"rival",name:"Rival AXS",maker:"SRAM",crank:"#141416",ring:"#141416",accent:"#6f747c",kraft:.97},{id:"force",name:"Force AXS",maker:"SRAM",crank:"#3a3d43",ring:"#2a2c31",accent:"#a3a8b0",kraft:1.02},{id:"red",name:"Red AXS",maker:"SRAM",crank:"#101012",ring:"#101012",accent:"#c8102e",kraft:1.05}],$b=[{hex:"#1c1c1c",name:"Schwarz"},{hex:"#b8864e",name:"Braun (Classic)"},{hex:"#f1f1ee",name:"Weiß"},{hex:"#d62839",name:"Rot"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2f7cf6",name:"Blau"},{hex:"#2bb24c",name:"Grün"},{hex:"#ff6fb5",name:"Pink"}];function pp(i){return da.find(e=>e.id===i)||da[0]}const mn={groupset:"105",helmet:"#f6f6f6",shorts:"#16161b",brand:"canyon",paint:"solid",kit:"plain"};function mp(i){return fa.find(e=>e.id===i)||fa[0]}function gp(i){return i.upper?i.name.toUpperCase():i.name.toLowerCase()}function Xb(i){const e=parseInt(i.slice(1),16),t=e>>16&255,n=e>>8&255,s=e&255;return .299*t+.587*n+.114*s>150?"#111111":"#ffffff"}const Io='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function jb(i,e,t){const n=i.getContext("2d"),s=i.width,r=i.height;n.clearRect(0,0,s,r);const a=s*.06;n.fillStyle="#fbfbf6",n.beginPath(),n.roundRect(s*.02,r*.02,s*.96,r*.96,a),n.fill(),n.lineWidth=s*.008,n.strokeStyle="#c9c9c0",n.stroke(),n.fillStyle="#9a9a92";for(const[m,g]of[[.08,.1],[.92,.1],[.08,.9],[.92,.9]])n.beginPath(),n.arc(s*m,r*g,s*.022,0,Math.PI*2),n.fill();const o=String(e??"");n.fillStyle="#111",n.textAlign="center",n.textBaseline="alphabetic";let c=r*.62;n.font=`800 ${c}px ${Io}`;const l=s*.82,h=n.measureText(o).width;h>l&&(c*=l/h,n.font=`800 ${c}px ${Io}`),n.fillText(o,s/2,r*.64);const u=String(t??"").toUpperCase();let d=r*.15;n.font=`700 ${d}px ${Io}`;const f=n.measureText(u).width;f>s*.8&&(d*=s*.8/f,n.font=`700 ${d}px ${Io}`),n.fillStyle="#333",n.fillText(u,s/2,r*.84)}const qb=[{id:"plain",name:"Einfarbig"},{id:"stripes",name:"Streifen"},{id:"rainbow",name:"Weltmeister"}],oh=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"];function Os(i,e){const t=new ve(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l*e))),"#"+t.getHexString()}function Do(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=new xn(t);return n.colorSpace=_t,n.anisotropy=4,{canvas:t,tex:n}}function Bn(i,e,t,n,s,r){const a=(s-n)/r.length;r.forEach((o,c)=>{const l=s-a*c;i.fillStyle=o,i.fillRect(0,(1-l)*t,e,a*t+.6)})}function Yb(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),n.fillStyle=Os(e,.62),n.fillRect(s*.19,0,s*.12,r),n.fillRect(s*.69,0,s*.12,r),t==="stripes"?(Bn(n,s,r,.6,.66,["#ffffff"]),Bn(n,s,r,.53,.56,["#ffffff"])):t==="rainbow"&&Bn(n,s,r,.57,.74,oh),n.strokeStyle=Os(e,.55),n.lineWidth=3;const a=s*.36,o=s*.28;n.strokeRect(a,r*.8,o,r*.16),n.beginPath(),n.moveTo(a+o/3,r*.8),n.lineTo(a+o/3,r*.96),n.moveTo(a+2*o/3,r*.8),n.lineTo(a+2*o/3,r*.96),n.stroke(),n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=2;for(const c of[.19,.31,.69,.81])n.beginPath(),n.moveTo(s*c,0),n.lineTo(s*c,r),n.stroke();Bn(n,s,r,.95,1,[t==="rainbow"?"#0b6cb5":Os(e,.5)]),n.fillStyle="rgba(20,20,24,0.8)",n.fillRect(0,0,3,r*.62),n.fillRect(s-3,0,3,r*.62),n.fillStyle=t==="rainbow"||vp(e)?"#1a1a1e":"#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`800 ${Math.round(r*.05)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(He.gameName.toUpperCase(),s*.5,r*.13),n.font=`700 ${Math.round(r*.04)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(He.gameName.toUpperCase(),s*.09,r*.2),i.tex.needsUpdate=!0}function Zb(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),t==="rainbow"?Bn(n,s,r,.76,.96,oh):t==="stripes"&&Bn(n,s,r,.82,.92,["#ffffff"]),Bn(n,s,r,.96,1,[Os(e,.5)]),i.tex.needsUpdate=!0}function Kb(i,e,t,n){const s=i.canvas.getContext("2d"),r=i.canvas.width,a=i.canvas.height;s.fillStyle=t,s.fillRect(0,0,r,a),Bn(s,r,a,0,.74,[e]),n==="rainbow"?Bn(s,r,a,.62,.74,oh):Bn(s,r,a,.69,.74,[Os(e,vp(e)?.6:1.8)]),i.tex.needsUpdate=!0}function Jb(i,e){const t=i.canvas.getContext("2d"),n=i.canvas.width,s=i.canvas.height;t.fillStyle=e,t.fillRect(0,0,n,s),t.fillStyle="rgba(15,15,18,0.85)";const r=9;for(let a=0;a<r;a++){const o=(a+.5)/r*n;t.beginPath(),t.ellipse(o,s*.38,n*.018,s*.14,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(o+n/r/2,s*.72,n*.014,s*.09,0,0,Math.PI*2),t.fill()}t.fillStyle=Os(e,.7),t.fillRect(0,s*.93,n,s*.07),i.tex.needsUpdate=!0}function vp(i){const e=new ve(i),t={};return e.getHSL(t),t.l>.6}const pa=new L(0,1,0),Be=(i,e,t)=>new L(i,e,t),ei=new L,Sl=new L,Qb=new L,e1=new L,Ri=new L,lf=new L(1,0,0),t1=new L,Xt=.34,nn=Be(0,.27,-.08),ko=.17;function zt(i,e,t,n,s=t,r=10){const a=i.distanceTo(e),o=new pe(new at(s,t,a,r),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(pa,ei.copy(e).sub(i).normalize()),o.castShadow=!0,o}function Ss(i,e,t){i.position.copy(e).add(t).multiplyScalar(.5),i.quaternion.setFromUnitVectors(pa,ei.copy(t).sub(e).normalize())}function hf(i,e,t,n,s,r){ei.copy(e).sub(i);let a=ei.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),ei.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return Sl.copy(s).addScaledVector(ei,-s.dot(ei)).normalize(),r.copy(i).addScaledVector(ei,o*t).addScaledVector(Sl,c*t)}let Pi=null;function n1(){if(Pi)return Pi;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=(a,o)=>(a=(a+i)%i,o=(o+i)%i,.25*Math.sin(a*Math.PI/2)*Math.sin(o*Math.PI/4)+.15*Math.sin((a+o)*Math.PI/4)),s=t.createImageData(i,i),r=new L;for(let a=0;a<i;a++)for(let o=0;o<i;o++){r.set(-(n(o+1,a)-n(o-1,a))*2,-(n(o,a+1)-n(o,a-1))*2,1).normalize();const c=(a*i+o)*4;s.data[c]=(r.x*.5+.5)*255,s.data[c+1]=(r.y*.5+.5)*255,s.data[c+2]=(r.z*.5+.5)*255,s.data[c+3]=255}return t.putImageData(s,0,0),Pi=new xn(e),Pi.wrapS=Pi.wrapT=An,Pi.repeat.set(10,10),Pi}function i1(i){const e=[new nt(.058,.068,.03)];for(let n=0;n<4;n++){const s=new ji(.0095,.034,2,6);s.rotateX(1.15),s.translate(-.021+n*.014,.046,.02),e.push(s)}const t=new ji(.0105,.03,2,6);return t.rotateZ(i*.9),t.translate(i*.034,.018,.012),e.push(t),Gr(e)}function Uo(i,e,t,n=10){const s=[];for(let a=0;a<=n;a++){const o=a/n;s.push(new fe(e(o),-i/2+o*i))}const r=new pe(new jr(s,14),t);return r.castShadow=!0,r}function uf(i,e,t){const n=new pe(new ji(e,Math.max(.01,i-2*e),4,10),t);return n.castShadow=!0,n}const lc={};function ff(i="gold"){if(lc[i])return lc[i];const e=i==="team",t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");n.fillStyle="#121214",n.fillRect(0,0,512,512);for(let o=0;o<512;o+=4)n.fillStyle=o%8?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.2)",n.fillRect(o,0,2,512);n.translate(256,256);const s=` ${He.gameName.toUpperCase()} `;n.font=e?'800 46px "Barlow Condensed", Arial, sans-serif':'800 30px "Barlow Condensed", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle";const r=e?226:233;for(let o=0;o<2;o++){let c=o*Math.PI;for(const l of s){const h=n.measureText(l).width;c+=h/2/r,n.save(),n.rotate(c),n.translate(0,-r),n.fillStyle=e?"#f2f2ee":He.colors.gold,n.fillText(l,0,0),n.restore(),c+=h/2/r}}e||(n.strokeStyle=He.colors.accent,n.lineWidth=4,n.beginPath(),n.arc(0,0,214,.3,1.4),n.stroke(),n.beginPath(),n.arc(0,0,214,.3+Math.PI,1.4+Math.PI),n.stroke());const a=new xn(t);return a.colorSpace=_t,a.anisotropy=8,lc[i]=a,a}const hc={};function uc(i,e=!1,t=7,n=20){const s=`${i}-${e}-${t}-${n}`;if(hc[s])return hc[s];const r=128,a=512,o=document.createElement("canvas");o.width=r,o.height=a;const c=o.getContext("2d");e&&(c.translate(0,a),c.scale(1,-1)),c.fillStyle="#000",c.fillRect(0,0,r,a),c.fillStyle="#fff";const l=(1-i)*a;c.fillRect(0,0,r,l);for(let u=0;u<t;u++){const f=26-u*3.2,m=l+u*n;for(let g=0;g<8;g++){if(u>2&&(g+u)%2)continue;const v=(g+u%2*.5)/8*r;c.beginPath(),c.moveTo(v-f/2,m-2),c.lineTo(v+f/2,m-2),c.lineTo(v,m+f*1.1),c.closePath(),c.fill()}}const h=new xn(o);return h.colorSpace=_t,h.anisotropy=8,hc[s]=h,h}function s1(){const e=new _i(.318,.026,10,144),t=e.attributes.position,n=[],s=new L,r=new L;for(let a=0;a<t.count;a++){s.fromBufferAttribute(t,a);const o=Math.atan2(s.y,s.x);r.set(Math.cos(o)*.318,Math.sin(o)*.318,0);const c=s.clone().sub(r),l=c.dot(r)/(c.length()*.318+1e-6),h=o/(Math.PI*2)*40;l>.2&&h-Math.floor(h)<.5&&s.addScaledVector(c.normalize(),.006),t.setXYZ(a,s.x,s.y,s.z);const u=l>.35?r1:o1;n.push(u.r,u.g,u.b)}return e.setAttribute("color",new Xe(n,3)),e.computeVertexNormals(),e}const r1=new ve("#1e1a16"),o1=new ve("#c39a5a"),fc={};function a1(i,e,t,n){const s=`${i}-${e}-${t}-${n}`;if(fc[s])return fc[s];const r=document.createElement("canvas");r.width=32,r.height=512;const a=r.getContext("2d");a.fillStyle=i,a.fillRect(0,0,32,512);const o=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"],c=(t-e)/o.length;o.forEach((h,u)=>{const d=n?e+c*(u+1):t-c*u;a.fillStyle=h,a.fillRect(0,(1-d)*512,32,c*512+.5)});const l=new xn(r);return l.colorSpace=_t,fc[s]=l,l}class ah{constructor(){this.root=new rt,this.root.rotation.order="YXZ",this.wheelAngle=0,this.crankAngle=0;const e=s=>new un({roughness:.68,sheen:.7,sheenRoughness:.45,sheenColor:new ve("#ffffff"),normalMap:n1(),normalScale:new fe(.35,.35),...s}),t=this.mats={frame:new un({color:He.colors.bikeFrame,metalness:.4,roughness:.3,clearcoat:1,clearcoatRoughness:.08}),accent:new un({color:He.colors.gold,metalness:.7,roughness:.25,clearcoat:1}),black:new Ue({color:"#17171a",roughness:.45,metalness:.3}),alu:new Ue({color:"#b9bcc2",roughness:.25,metalness:1}),tire:new Ue({color:"#1c1c1c",roughness:.9}),cxTire:new Ue({color:"#ffffff",vertexColors:!0,roughness:.95}),tape:new Ue({color:"#f1f1ee",roughness:.7}),crankArm:new un({color:"#26272c",metalness:.6,roughness:.3,clearcoat:1}),ring:new Ue({color:"#1b1c20",metalness:.7,roughness:.3}),groupAccent:new Ue({color:"#b9bdc4",metalness:.8,roughness:.25}),jersey:e({}),skin:new un({color:"#e2ad8c",roughness:.55,sheen:.35,sheenRoughness:.7,sheenColor:new ve("#ff9f7a")}),shorts:e({color:"#16161b",roughness:.6}),shoe:new Ue({color:"#f4f4f4",roughness:.4}),helmet:new un({roughness:.3,clearcoat:1}),glasses:new un({color:"#ff8a2a",roughness:.05,metalness:1,envMapIntensity:2.2,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[200,700]}),glassFrame:new Ue({color:"#111114",roughness:.4}),glove:e({color:"#f1f1ee",roughness:.75}),hair:new Ue({color:"#4a3324",roughness:.9}),jerseyPlain:e({}),sole:new Ue({color:"#141416",roughness:.6}),sleeve:e({}),thigh:e({roughness:.6})},n=s=>new un({map:s,roughness:.3,metalness:.2,clearcoat:1,clearcoatRoughness:.1});this.teamMats={down:n(uc(.86,!1,4,12)),top:n(uc(.4)),fork:n(uc(.45,!0)),solid:n(null)},this.frameColor=He.colors.bikeFrame,this.design="solid",this.buildFrame(t),this.buildWheels(t),this.buildDrivetrain(t),this.buildCockpit(t),this.buildRider(t),this.buildKit(t),this.buildPlates(),this.buildDecals(),this.setBrand(mn.brand),this.update(0,0,0,0)}buildFrame(e){const t=Be(0,Xt,-.5),n=Be(0,.8,-.24),s=Be(0,.86,.36),r=Be(0,.7,.4),a=this.root;this.tubes={down:zt(nn,r,.032,e.frame,.027),top:zt(n,s,.017,e.frame,.016),head:zt(r,s,.026,e.frame)},this.tubes.down.scale.z=1.9,this.tubes.top.scale.z=1.4,this.tubes.head.scale.z=1.3,a.add(this.tubes.down,this.tubes.top,this.tubes.head),this.tubes.seat=zt(nn,n,.018,e.frame),a.add(this.tubes.seat);for(const l of[-1,1])a.add(zt(Be(l*.012,nn.y,nn.z),Be(l*.06,t.y,t.z),.01,e.frame)),a.add(zt(Be(l*.012,.62,-.19),Be(l*.06,t.y,t.z),.009,e.frame));this.stripe=zt(Be(0,.812,-.15),Be(0,.845,.2),.0175,e.accent,.0175),a.add(this.stripe),a.add(zt(n,Be(0,.88,-.265),.0135,e.black));const o=new pe(new nt(.03,.045,.02),new Ue({color:"#ff2a2a",emissive:"#ff0000",emissiveIntensity:.8}));o.position.set(0,.83,-.285),a.add(o);const c=new pe(new ji(.045,.18,4,8),e.black);c.rotation.x=Math.PI/2+.06,c.scale.set(1.2,1,.35),c.position.set(0,.895,-.25),c.castShadow=!0,a.add(c),this.bottle=new pe(new at(.035,.035,.2,12),e.accent),this.bottle.position.copy(nn).lerp(n,.5),this.bottle.position.z+=.06,this.bottle.quaternion.setFromUnitVectors(pa,ei.copy(n).sub(nn).normalize()),a.add(this.bottle)}makeWheel(e,t){const n=new rt,s=new pe(new _i(.317,.023,14,64),e.tire);s.rotation.y=Math.PI/2,s.castShadow=!0,n.add(s);const r=new pe(s1(),e.cxTire);r.rotation.y=Math.PI/2,r.castShadow=!0,r.visible=!1,n.add(r),(this.roadTires||(this.roadTires=[])).push(s),(this.cxTires||(this.cxTires=[])).push(r);for(let h=0;h<4;h++){const u=new pe(new nt(.03,.02,.008),e.accent),d=h*Math.PI/2;u.position.set(0,Math.sin(d)*.2,Math.cos(d)*.2),u.rotation.x=-d,n.add(u)}for(const h of[-1,1]){const u=new pe(new ca(.232,.306,56,1),t);u.rotation.y=h*Math.PI/2,u.position.x=h*.012,n.add(u)}for(const h of[.3,.234]){const u=new pe(new _i(h,.006,6,56),e.alu);u.rotation.y=Math.PI/2,n.add(u)}const a=new pe(new at(.306,.306,.024,56,1,!0),e.black);a.rotation.z=Math.PI/2,n.add(a);const o=[];for(let h=0;h<28;h++){const u=h/28*Math.PI*2,d=h%2?1:-1,f=Be(d*.03,Math.cos(u)*.025,Math.sin(u)*.025),m=Be(d*.006,Math.cos(u)*.234,Math.sin(u)*.234),g=f.distanceTo(m),v=new at(.0022,.0022,g,4);v.applyQuaternion(new St().setFromUnitVectors(pa,m.clone().sub(f).normalize())),v.translate((f.x+m.x)/2,(f.y+m.y)/2,(f.z+m.z)/2),o.push(v)}n.add(new pe(Gr(o),e.alu));const c=new pe(new at(.022,.022,.1,12),e.alu);c.rotation.z=Math.PI/2,n.add(c);for(const h of[-1,1]){const u=new pe(new at(.034,.034,.008,16),e.alu);u.rotation.z=Math.PI/2,u.position.x=h*.03,n.add(u)}const l=new pe(new at(.004,.004,.03,6),e.alu);return l.position.set(0,.29,0),n.add(l),n}buildWheels(e){const t=this.rimMat=new Ue({map:ff(),roughness:.3,metalness:.3,side:Jt});this.rearWheel=this.makeWheel(e,t),this.rearWheel.position.set(0,Xt,-.5),this.root.add(this.rearWheel);const n=new un({color:"#1a1b1f",roughness:.35,metalness:.3,clearcoat:1}),s=[Be(.001,.04,0),Be(.03,.038,0),Be(.306,.013,0),Be(.306,-.013,0),Be(.03,-.038,0),Be(.001,-.04,0)].map(a=>new fe(a.x,a.y));this.disc=new pe(new jr(s,56),n),this.disc.rotation.z=Math.PI/2,this.disc.visible=!1,this.rearWheel.add(this.disc),this.steer=new rt,this.steer.position.set(0,0,.45),this.root.add(this.steer),this.frontWheel=this.makeWheel(e,t),this.frontWheel.position.set(0,Xt,.05),this.steer.add(this.frontWheel),this.deepRim=new rt;for(const a of[-1,1]){const o=new pe(new ca(.17,.307,56,1),n);o.rotation.y=a*Math.PI/2,o.position.x=a*.014,this.deepRim.add(o)}this.deepRim.visible=!1,this.frontWheel.add(this.deepRim),this.forkTubes=[-1,1].map(a=>zt(Be(a*.045,.7,-.05),Be(a*.05,Xt,.05),.014,e.frame,.018)),this.forkCrown=zt(Be(0,.7,-.05),Be(0,.72,-.05),.03,e.frame),this.steer.add(...this.forkTubes,this.forkCrown);const r=new pe(new at(.05,.05,.04,16),e.alu);r.rotation.z=Math.PI/2,r.position.set(-.04,Xt,-.5),this.root.add(r)}buildDrivetrain(e){this.crank=new rt,this.crank.position.copy(nn),this.root.add(this.crank);const t=new pe(new at(.105,.105,.006,40),e.ring);t.rotation.z=Math.PI/2,t.position.x=-.065,this.crank.add(t);const n=new pe(new at(.06,.06,.012,5),e.crankArm);n.rotation.z=Math.PI/2,n.position.x=-.07,this.crank.add(n);for(const h of[-1,1]){const u=new pe(new nt(.02,ko,.03),e.crankArm);u.position.set(h*-.085,-h*ko/2,0),u.castShadow=!0,this.crank.add(u)}const s=new pe(new at(.02,.02,.19,10),e.black);s.rotation.z=Math.PI/2,this.crank.add(s);const r=new pe(new at(.028,.028,.004,20),e.groupAccent);r.rotation.z=Math.PI/2,r.position.x=-.077,this.crank.add(r);const a=new rt;a.position.set(-.07,Xt-.05,-.47);const o=new pe(new nt(.022,.07,.04),e.crankArm);o.rotation.x=.4;const c=new pe(new nt(.008,.035,.02),e.groupAccent);c.position.set(-.013,.005,0),c.rotation.x=.4;const l=new pe(new nt(.01,.09,.03),e.crankArm);l.position.set(.004,-.07,.01),a.add(o,c,l);for(const h of[-.035,-.105]){const u=new pe(new at(.014,.014,.008,12),e.black);u.rotation.z=Math.PI/2,u.position.set(.006,h,.01),a.add(u)}this.root.add(a);for(const h of[.105,-.105])this.root.add(zt(Be(-.065,nn.y+h,nn.z),Be(-.04,Xt+h*.45,-.5),.004,e.alu));this.pedals=[-1,1].map(h=>{const u=new pe(new nt(.08,.018,.07),e.black);return u.userData.side=h,this.root.add(u),u})}buildCockpit(e){const t=this.steer;t.add(zt(Be(0,.86,-.08),Be(0,.9,.03),.016,e.black));const n=this.roadBars=new rt;t.add(n),n.add(zt(Be(-.21,.9,.03),Be(.21,.9,.03),.013,e.tape));for(const r of[-1,1]){const a=r*.21,o=[Be(a,.9,.03),Be(a,.91,.1),Be(a,.86,.13),Be(a,.79,.09),Be(a,.78,0)],c=new Vi(o),l=new pe(new Gi(c,16,.013,8),e.tape);l.castShadow=!0,n.add(l);const h=new pe(new nt(.03,.07,.05),e.black);h.position.set(a,.925,.1),h.rotation.x=-.4,n.add(h)}const s=new pe(new rn(.02,12,8,0,Math.PI*2,0,Math.PI/2),e.accent);s.position.set(.05,.915,.03),n.add(s),this.buildAeroBars(e)}buildAeroBars(e){const t=new un({color:"#16171b",roughness:.35,metalness:.3,clearcoat:1,clearcoatRoughness:.15}),n=new Ue({color:"#2a2b30",roughness:.95}),s=t.clone();s.side=Jt;const r=this.ttBars=new rt,a=new pe(new nt(.36,.014,.045),t);a.position.set(0,.885,.035),a.castShadow=!0,r.add(a);for(const o of[-1,1]){const c=o*.19,l=new pe(new Gi(new Vi([Be(c,.885,.04),Be(c+o*.02,.882,.1),Be(c+o*.022,.87,.17)]),12,.013,8),t);r.add(l);const h=new pe(new at(.008,.006,.06,8),e.black);h.position.set(c+o*.022,.84,.18),h.rotation.x=.3,r.add(h);const u=o*.095;r.add(zt(Be(u,.89,-.04),Be(u,.925,-.04),.012,t));const d=new pe(new at(.042,.042,.12,14,1,!0,-Math.PI/2,Math.PI),s);d.rotation.x=Math.PI/2,d.position.set(u,.972,-.04),r.add(d);const f=new pe(new nt(.07,.012,.11),n);f.position.set(u,.934,-.04),r.add(f);const m=o*.055,g=new pe(new Gi(new Vi([Be(o*.07,.915,-.07),Be(m,.918,.05),Be(m,.922,.15),Be(m,.94,.2),Be(m,.965,.22)]),20,.011,8),t);g.castShadow=!0,r.add(g);const v=new pe(new at(.009,.011,.03,8),e.black);v.position.set(m,.978,.225),v.rotation.x=-.6,r.add(v)}r.add(zt(Be(-.06,.917,0),Be(.06,.917,0),.008,t)),r.visible=!1,this.steer.add(r)}buildRider(e){const t=this.rider=new rt;this.root.add(t),this.hip=Be(0,.94,-.2),this.shoulder=Be(0,1.2,.25);const n=new pe(new ji(.11,.1,4,10),e.shorts);n.rotation.z=Math.PI/2,n.position.copy(this.hip),n.castShadow=!0,t.add(n),this.torso=new rt;const s=this.hip.distanceTo(this.shoulder)+.04,r=uf(s,.15,e.jersey),a=r.geometry;a.computeBoundingBox();const o=a.boundingBox.min.y,c=a.boundingBox.max.y,l=a.attributes.position;for(let S=0;S<l.count;S++){const A=(l.getY(S)-o)/(c-o),T=1.02+.38*Math.pow(Math.max(0,(A-.25)/.75),1.4);l.setX(S,l.getX(S)*T);let b=l.getZ(S)*(.9-.12*A);b<0?b-=.035*Math.sin(Math.PI*A):A>.55&&(b+=.015*Math.sin(Math.PI*(A-.55)/.45)),l.setZ(S,b)}a.computeVertexNormals(),this.torso.add(r),Ss(this.torso,this.hip,this.shoulder),t.add(this.torso),this.head=new rt;const h=new rn(.1,20,16);h.scale(.95,1.08,1.06);const u=new pe(h,e.skin);u.castShadow=!0,this.head.add(u);const d=new pe(new rn(.125,18,10,0,Math.PI*2,0,Math.PI/2),e.helmet);d.scale.set(1,.95,1.3),d.position.set(0,.02,-.02),d.rotation.x=-.25,d.castShadow=!0,this.head.add(d);const f=2.3,m=new pe(new _i(.104,.021,6,24,f),e.glasses);m.rotation.set(Math.PI/2,0,0);const g=new rt;g.rotation.y=f/2-Math.PI/2,g.add(m),m.scale.set(1,1,.55),g.position.set(0,.008,.004),this.head.add(g);const v=new pe(new _i(.106,.006,4,24,f+.2),e.glassFrame);v.rotation.set(Math.PI/2,0,0);const p=new rt;p.rotation.y=(f+.2)/2-Math.PI/2,p.add(v),p.position.set(0,.03,.004),this.head.add(p);const y=new pe(new $i(.014,.035,6),e.skin);y.rotation.x=Math.PI/2,y.position.set(0,-.022,.1),this.head.add(y);for(const S of[-1,1]){const A=new pe(new rn(.022,8,6),e.skin);A.scale.set(.45,1,.7),A.position.set(S*.098,-.008,-.01),this.head.add(A);const T=new pe(new Gi(new Vi([Be(S*.1,.03,0),Be(S*.085,-.05,.03),Be(0,-.098,.045)]),8,.0045,4),e.glassFrame);this.head.add(T)}const _=new pe(new rn(1,18,12),e.helmet);_.scale.set(.1,.075,.2),_.position.set(0,.035,-.11),_.rotation.x=-.25,_.visible=!1,_.userData.tt=!0,this.head.add(_);const x=new pe(new rn(.128,18,10,-Math.PI*.32,Math.PI*.64,Math.PI*.42,Math.PI*.2),e.glasses);x.position.set(0,.005,.005),x.visible=!1,x.userData.tt=!0,this.head.add(x);const E=new pe(new rn(.098,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.3),e.hair);E.position.set(0,-.005,-.012),this.head.add(E);const M=new pe(new nt(.026,.01,.24),e.glassFrame);M.position.set(0,.127,-.03),M.rotation.x=-.18,this.head.add(M),this.head.position.set(0,1.31,.39),this.head.rotation.x=.05,t.add(this.head),t.add(zt(Be(0,1.2,.27),Be(0,1.28,.35),.045,e.skin)),this.arms=[-1,1].map(S=>({s:S,upper:Uo(.27,A=>.044+.009*Math.sin(Math.PI*Math.min(1,A*1.1)),e.sleeve),lower:Uo(.26,A=>.041-.015*A+.006*Math.exp(-(((A-.2)/.2)**2)),e.skin),hand:new pe(i1(S),e.glove),elbow:new pe(new rn(.041,10,8),e.skin),cap:new pe(new rn(.054,12,8),e.jerseyPlain)})),this.shoeMats={...Vb(),accent:e.jerseyPlain},this.legs=[-1,1].map(S=>({s:S,thigh:Uo(.44,A=>.086-.026*A+.007*Math.sin(Math.PI*A),e.thigh),shin:Uo(.43,A=>.044+.02*Math.exp(-(((A-.3)/.17)**2))-.008*A,e.skin),knee:new pe(new rn(.058,12,8),e.skin),sock:uf(.18,.058,e.shoe),shoe:cf(this.shoeMats)}));for(const S of this.arms)S.hand.castShadow=!0,t.add(S.upper,S.lower,S.hand,S.elbow,S.cap);for(const S of this.legs)t.add(S.thigh,S.shin,S.sock,S.shoe,S.knee)}buildKit(e){this.kitTex={torso:Do(512,512),sleeve:Do(128,128),thigh:Do(128,256),helmet:Do(256,128)},e.jersey.map=this.kitTex.torso.tex,e.sleeve.map=this.kitTex.sleeve.tex,e.thigh.map=this.kitTex.thigh.tex,e.helmet.map=this.kitTex.helmet.tex,this.kitCol={jersey:He.colors.jersey,shorts:"#16161b",helmet:"#f6f6f6"},this.kit="plain",this.updateKit()}updateKit(){var n;const e=this.kitCol;Yb(this.kitTex.torso,e.jersey,this.kit),this.mats.jerseyPlain.color.set(e.jersey),Zb(this.kitTex.sleeve,e.jersey,this.kit),Kb(this.kitTex.thigh,e.shorts,"#"+this.mats.skin.color.getHexString(),this.kit),Jb(this.kitTex.helmet,e.helmet);const t=e.helmet.toLowerCase()==="#d4af37";this.mats.helmet.metalness=t?.85:0,this.mats.helmet.roughness=t?.18:.3,this.mats.helmet.needsUpdate=!0,(n=this.model)==null||n.setKit(e)}useModel(e){const t=new ub(e);this.model=t,this.root.add(e),this.rider.visible=!1;const n=this.head.clone();for(const s of[...n.children])s.material===this.mats.skin&&n.remove(s);n.position.set(0,.107,.034),n.rotation.set(.12,0,0),n.scale.setScalar(1.12),t.attach("Head",n),this.modelHelmet=n,this.backPlate.removeFromParent(),this.backPlate.position.set(0,.063,-.145),this.backPlate.rotation.set(0,Math.PI,0),t.attach("Spine1",this.backPlate),t.setKit(this.kitCol),t.attachShoes(()=>cf(this.shoeMats)),this.update(0,0,0,0)}buildPlates(){this.plateCanvas=document.createElement("canvas"),this.plateCanvas.width=512,this.plateCanvas.height=384,this.plateTex=new xn(this.plateCanvas),this.plateTex.colorSpace=_t,this.plateTex.anisotropy=8;const e=new Ue({map:this.plateTex,roughness:.6}),t=new pe(new on(.3,.225),e);t.position.set(0,.02,-.132),t.rotation.set(0,Math.PI,0),this.torso.add(t),this.backPlate=t;for(const n of[-1,1]){const s=new pe(new on(.17,.1275),e);s.position.set(n*.016,.8,-.33),s.rotation.y=n*Math.PI/2,this.root.add(s)}this.setPlate(1,"")}buildDecals(){this.decalCanvas=document.createElement("canvas"),this.decalCanvas.width=512,this.decalCanvas.height=128,this.decalTex=new xn(this.decalCanvas),this.decalTex.colorSpace=_t,this.decalTex.anisotropy=8;const e=new Ue({map:this.decalTex,transparent:!0,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-2}),t=Be(0,.7,.4),n=t.clone().sub(nn),s=n.length();n.normalize();const r=nn.clone().lerp(t,.5);for(const a of[-1,1]){const o=Be(a,0,0),c=a>0?n.clone().negate():n.clone(),l=new L().crossVectors(o,c),h=new pe(new on(s*.48,s*.48*(128/512)),e);h.quaternion.setFromRotationMatrix(new Ne().makeBasis(c,l,o)),h.position.copy(r).addScaledVector(o,.033),this.root.add(h)}}setBrand(e){const t=mp(e);this.brand=t.id;const n=this.decalCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height);const r=t.serif?'"Cinzel", Georgia, serif':'"Barlow Condensed", Arial, sans-serif';s.letterSpacing!==void 0&&(s.letterSpacing=t.wide?"6px":"0px"),s.font=`${t.font} 104px ${r}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=Xb(this.design==="team"?"#111114":this.frameColor);const a=gp(t),o=s.measureText(a).width;o>n.width*.95&&(s.font=`${t.font} ${Math.floor(104*n.width*.95/o)}px ${r}`),s.fillText(a,n.width/2,n.height/2+2),this.decalTex.needsUpdate=!0}applyLook(e={}){this.design=e.paint||mn.paint,this.kit=e.kit||"plain",this.barColor=e.bar||null,this.setColors({jersey:e.jersey||He.colors.jersey,frame:e.frame||He.colors.bikeFrame,helmet:e.helmet||mn.helmet,shorts:e.shorts||mn.shorts}),this.setBrand(e.brand||mn.brand),this.setGroupset(e.groupset||mn.groupset),this.tireColor=e.tires||null,this.applyTireColor()}applyTireColor(){this.mats.tire.color.set(this.aero&&this.tireColor?this.tireColor:"#1c1c1c")}setGroupset(e){const t=pp(e);this.groupset=t.id,this.mats.crankArm.color.set(t.crank),this.mats.ring.color.set(t.ring),this.mats.groupAccent.color.set(t.accent)}applyPaint(){const e=this.mats,t=this.design==="team",n=this.teamMats,s=Wb(this.frameColor),r=l=>{l.roughness=s?.72:.3,l.metalness=s?.05:.3,l.clearcoat=s?0:1};if(t){e.frame.color.set("#111114"),e.frame.roughness=.55,e.frame.metalness=.2,e.frame.clearcoat=.25;for(const l of["down","top","fork","solid"])n[l].color.set(this.frameColor),r(n[l])}else e.frame.color.set(this.frameColor),r(e.frame);const a=this.design==="rainbow",o=(l,h,u)=>new un({map:a1("#"+new ve(this.frameColor).getHexString(),l,h,u),roughness:.3,metalness:.2,clearcoat:1});a&&this.rainbowFor!==this.frameColor&&(this.rainbowFor=this.frameColor,this.rainbowMats={seat:o(.5,.82,!1),fork:o(.3,.62,!0)}),this.tubes.seat.material=a?this.rainbowMats.seat:e.frame,this.tubes.down.material=t?n.down:e.frame,this.tubes.top.material=t?n.top:e.frame,this.tubes.head.material=t?n.solid:e.frame;for(const l of this.forkTubes)l.material=t?n.fork:a?this.rainbowMats.fork:e.frame;this.forkCrown.material=t?n.solid:e.frame;const c=t||a;this.stripe.visible=!c,e.accent.color.set(c?"#1b1b1e":He.colors.gold),e.tape.color.set(this.barColor||(c?"#1b1b1e":"#f1f1ee")),this.rimMat.map=ff(c?"team":"gold"),this.rimMat.needsUpdate=!0}setTires(e){const t=e==="cx";for(const s of this.roadTires)s.visible=!t;for(const s of this.cxTires)s.visible=t;const n=this.aero=e==="tt";this.ttBars.visible=n,this.roadBars.visible=!n,this.applyTireColor(),this.disc.visible=n,this.deepRim.visible=n;for(const s of[this.head,this.modelHelmet])s==null||s.traverse(r=>r.userData.tt&&(r.visible=n));this.update(0,0,0,0)}setPlate(e,t){this.plateNumber=e,this.plateName=t,jb(this.plateCanvas,e,t),this.plateTex.needsUpdate=!0}setColors({jersey:e,frame:t,helmet:n,shorts:s}={}){e&&(this.kitCol.jersey=e),t&&(this.frameColor=t),this.applyPaint(),n&&(this.kitCol.helmet=n),s&&(this.kitCol.shorts=s,this.mats.shorts.color.set(s)),(e||n||s)&&this.updateKit(),t&&this.brand&&this.setBrand(this.brand)}update(e,t,n,s){this.wheelAngle+=t/Xt*e,this.rearWheel.rotation.x=this.wheelAngle,this.frontWheel.rotation.x=this.wheelAngle,this.crankAngle+=n*e,this.crank.rotation.x=this.crankAngle,this.steer.rotation.y=-s*.35;const r=this.crankAngle,a=Math.sin(r*2)*.006*Math.min(1,Math.abs(n)/4);this.standK=(this.standK||0)+((this.stand||0)-(this.standK||0))*(1-Math.exp(-6*e));const o=this.aero?0:this.standK;this.wurfK=(this.wurfK||0)+((this.wurf||0)-(this.wurfK||0))*(1-Math.exp(-28*e));const c=this.aero?0:this.wurfK,l=.2*o+.28*c;this.rider.rotation.x=l;const h=t1.copy(this.hip).applyAxisAngle(lf,l);this.rider.position.set(0,a+.06*o-.07*c,.13*o-.3*c).add(this.hip).sub(h),this.rider.updateMatrix();const u=(this._toRider||(this._toRider=new Ne)).copy(this.rider.matrix).invert();o>.01&&(this.root.rotation.z+=Math.sin(r)*.11*o),this.torso.rotation.y=0;for(const m of this.legs){const g=m.s,v=g>0?r+Math.PI:r,p=this.pedals[g>0?1:0];p.position.set(g*.12,nn.y-ko*Math.cos(v),nn.z-ko*Math.sin(v));const y=Qb.copy(p.position).applyMatrix4(u);m.shoe.position.copy(y).add(Ri.set(0,.008,0));const _=.06+.22*Math.sin(v);m.shoe.rotation.x=_;const x=e1.copy(y).add(Ri.set(0,.095,-.12).applyAxisAngle(lf,_)),M=Sl.copy(this.hip).add(Ri.set(g*.09,0,0)).clone(),S=hf(M,x,.44,.43,Ri.set(g*.12,.1,1),new L);Ss(m.thigh,M,S),m.knee.position.copy(S);const A=x.clone().sub(S).normalize(),T=S.clone().addScaledVector(A,.43);Ss(m.shin,S,T),Ss(m.sock,T.clone().addScaledVector(A,-.16),T.clone().addScaledVector(A,.02))}const d=this.steer.rotation.y,f=this._hands||(this._hands=[new L,new L]);for(const m of this.arms){const g=Be(m.s*.19,1.19,.23),v=m.s*.21,p=.1+.45,y=this.aero?m.s*.058:v,_=this.aero?.45+.17:p-.03*o,x=Be(y*Math.cos(d)+(_-.45)*Math.sin(d),this.aero?.95:.94-.12*o,.45-y*Math.sin(d)+(_-.45)*Math.cos(d)),E=x.clone();x.applyMatrix4(u);const M=hf(g,x,.27,.26,Ri.set(m.s*.05,-.75,-.35),new L);Ss(m.upper,g,M),Ss(m.lower,M,x),m.hand.position.copy(x),f[m.s>0?1:0].copy(E),m.hand.quaternion.copy(m.lower.quaternion),m.elbow.position.copy(M),m.cap.position.copy(g).add(Ri.set(-m.s*.01,-.012,0))}this.model&&this.model.pose({hip:(this._hipS||(this._hipS=new L)).copy(this.hip).add(Ri.set(0,.06*o-.07*c,.13*o-.3*c)),pedals:[this.pedals[0].position,this.pedals[1].position],angles:[r,r+Math.PI],hands:f,bob:a,aero:this.aero,stand:o})}}function Ln(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Tl(i){for(const e of["mousedown","pointerdown","touchstart"])i.addEventListener(e,t=>t.stopPropagation(),{passive:!0})}function qe(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const c1={A:"✕",B:"○",X:"□",Y:"△",LB:"L1",RB:"R1",LT:"L2",RT:"R2"},l1={A:"Enter",B:"Esc",X:"Entf",Y:"Y",LB:"Bild↓",RB:"Bild↑",LT:"A",RT:"D"},pt=i=>`<span class="btn btn-${i.toLowerCase()}"><i class="glyph-xbox">${i}</i><i class="glyph-ps">${c1[i]??i}</i><i class="glyph-keys">${l1[i]??i}</i></span>`;function Yi(i){const e={A:"confirm",B:"back",X:"x",Y:"y",LB:"lb",RB:"rb"};return`<footer class="hints">${i.map(([t,n])=>`<span class="hint" ${e[t]?`data-act="${e[t]}"`:""}>${pt(t)}${n}</span>`).join("")}</footer>`}const Dn={};function bi(i,e){const t=i.npc;t.s+=t.speed*e,i.world.poseAt(t.s,t.lateral,Dn);const n=i.bike.root;n.position.set(Dn.x,Dn.h,Dn.z),n.rotation.set(-Dn.pitch,Dn.heading,0);const s=t.speed>.5?t.speed/Xt/3.6:0;return i.bike.update(e,t.speed,t.pedal===!1?0:s,0),i.focus.set(Dn.x,Dn.h,Dn.z),Dn}const dn=new L,Ls=new L;function h1(i,e,{dist:t=4.4,height:n=1.75,lag:s=4,fovBase:r=58,speed:a=0,snap:o=!1}={}){const c=i.camera,l=i.bike.root,h=l.rotation.y,u=Math.sin(h),d=Math.cos(h);dn.set(l.position.x-u*t,l.position.y+n,l.position.z-d*t);const f=i.world.terrainHeight(dn.x,dn.z)+.7;dn.y<f&&(dn.y=f),o?c.position.copy(dn):(c.position.x=We(c.position.x,dn.x,s,e),c.position.y=We(c.position.y,dn.y,s,e),c.position.z=We(c.position.z,dn.z,s,e)),Ls.set(l.position.x+u*3,l.position.y+1,l.position.z+d*3),c.lookAt(Ls);const m=r+Math.min(a,20)*.9;c.fov=o?m:We(c.fov,m,3,e),c.updateProjectionMatrix()}const df=new L;function Js(i,e,t,n=!1){const s=i.camera,r=t.tz,a=-t.tx,o=i.time,c=4.4;dn.set(t.x+r*c+t.tx*1.2,t.h+1.2+Math.sin(o*.2)*.1,t.z+a*c+t.tz*1.2),n?s.position.copy(dn):s.position.lerp(dn,1-Math.exp(-5*e)),s.fov=40,s.updateProjectionMatrix();const l=Math.tan(al.degToRad(s.fov/2))*c*s.aspect;Ls.set(t.x,t.h+.85,t.z).sub(s.position),df.crossVectors(Ls,s.up).normalize(),Ls.add(s.position).addScaledVector(df,-l*.42),s.lookAt(Ls)}function Un(i){if(i==null)return"–:––.–";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(1)}`}const wn=[{id:"road",name:"Rennrad"},{id:"cx",name:"Cycle Cross"},{id:"tt",name:"Zeitfahren"}],ma=i=>(wn.find(e=>e.id===i)||wn[0]).name,_p=i=>i==="cx"?"cx":i==="tt"?"tt":"road";function u1(i){let e,t=0,n=!0,s=!1;function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),wn[t]&&i.bike.setTires(wn[t].id),o||(i.audio.nav(),i.input.rumble(.15,30))}async function a(){if(s)return;if(t===wn.length){i.audio.select(),i.go("story");return}i.mode=wn[t].id,i.audio.select(),i.input.rumble(.35,80);const o=_p(i.mode);if(i.worlds[o]){i.useWorld(o),i.go("menu");return}s=!0;const c=e.querySelector(".mode-building");c.textContent=o==="tt"?"Das Dorf wird gebaut …":"Der Wald wird gebaut …",c.classList.add("show"),await new Promise(l=>setTimeout(l,60)),await i.prepareWorld(o),s=!1,i.go("menu")}return{enter(o={}){t=o.minigame?wn.length:Math.max(0,wn.findIndex(c=>c.id===i.mode)),e=Ln(`
        <div class="screen mode-screen ${o.fromTransition?"intro":""}">
          <div class="mode-head">
            <div class="menu-brand">${qe(He.gameName)}</div>
            <div class="menu-heading">Womit fährst du?</div>
          </div>
          <div class="mode-cards">
            ${wn.map((c,l)=>`
              <div class="mode-card" data-i="${l}">
                <div class="mode-name">${qe(c.name)}</div>
              </div>`).join("")}
              <div class="mode-card mode-card-game" data-i="${wn.length}">
                <div class="mode-name">🎮 Game</div>
                <div class="control-sub">Das große Rennen</div>
              </div>
          </div>
          ${Yi([["A","Auswählen"],["Y","Steuerung ändern"],["X","Flaschenjagd"],["B","Zurück"]])}
          <div class="mode-building">Der Wald wird gebaut …</div>
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(c=>c.addEventListener("click",()=>{t=Number(c.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=bi(i,o);Js(i,o,c,n),n=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,o),i.fx.uLines.value=We(i.fx.uLines.value,0,6,o),i.fx.uFade.value=We(i.fx.uFade.value,0,5,o);const l=i.input;s||((l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<wn.length?(t++,r()):l.pressed("confirm")?a():l.pressed("x")?(i.audio.select(),i.go("minigame")):l.pressed("y")?(i.audio.select(),i.go("control",{next:"mode"})):l.pressed("back")&&(i.audio.back(),i.go("title")))},exit(){e.remove()}}}function f1(i){let e,t,n,s=0,r=["","","",""],a=0,o="",c=!0,l=!1;const h=()=>i.online;function u(){var _,x;const p=e.querySelector(".lobby-body"),y=(_=h().remote)==null?void 0:_.char;if(n==="choose")p.innerHTML=["Rennen erstellen","Rennen beitreten"].map((E,M)=>`<div class="card lobby-opt ${M===s?"selected":""}" data-i="${M}">
            <div class="card-info"><div class="card-name">${E}</div>
            <div class="card-sub">${M===0?"Du bekommst einen Code für deinen Gegner":"Gib den Code deines Gegners ein"}</div></div>
            <div class="card-go">›</div></div>`).join(""),p.querySelectorAll(".lobby-opt").forEach(E=>E.addEventListener("click",()=>{s=Number(E.dataset.i),m()}));else if(n==="hosting"){const E=h().code;p.innerHTML=`
        <div class="lobby-label">Dein Code</div>
        <div class="lobby-code">${qe(E||"…")}</div>
        <div class="lobby-info">${y?`<b>${qe(y.name)}</b> (Nr. ${qe(y.number)}) ist da!<br>Drück A zum Starten.`:"Sag deinem Gegner diesen Code.<br>Warte, bis er beitritt …"}</div>
        ${y?'<div class="card lobby-start selected"><div class="card-info"><div class="card-name">Rennen starten</div></div><div class="card-go">›</div></div>':'<div class="lobby-wait"></div>'}
        <div class="lobby-mode">Modus: ${qe(ma(i.mode))}</div>`,(x=p.querySelector(".lobby-start"))==null||x.addEventListener("click",g)}else n==="code"?(p.innerHTML=`
        <div class="lobby-label">Code eingeben</div>
        <div class="lobby-digits">${r.map((E,M)=>`<span class="lobby-digit ${M===a?"cursor":""}">${E===""?"·":E}</span>`).join("")}</div>
        <div class="lobby-info">Zahlen tippen – oder mit ↑ ↓ ändern und ← → wechseln.<br>Auf dem iPad: Ziffer antippen zählt hoch. Dann A drücken.</div>
        <div class="card lobby-start selected lobby-join"><div class="card-info"><div class="card-name">Beitreten</div></div><div class="card-go">›</div></div>`,p.querySelectorAll(".lobby-digit").forEach((E,M)=>E.addEventListener("click",()=>{a=M,r[M]=String(((r[M]===""?-1:Number(r[M]))+1)%10),i.audio.nav(),u()})),p.querySelector(".lobby-join").addEventListener("click",m)):n==="connecting"?p.innerHTML=`<div class="lobby-label">Verbinde mit Code ${qe(r.join(""))} …</div><div class="lobby-wait"></div>`:n==="joined"?p.innerHTML=`
        <div class="lobby-label">Verbunden!</div>
        <div class="lobby-info">${y?`Gegner: <b>${qe(y.name)}</b> (Nr. ${qe(y.number)})`:""}<br>Warte, bis dein Gegner das Rennen startet …</div>
        <div class="lobby-wait"></div>
        <div class="lobby-mode">Modus: ${qe(ma(i.mode))}</div>`:n==="error"&&(p.innerHTML=`<div class="lobby-label">Hat nicht geklappt</div><div class="lobby-info">${qe(o)}<br>Drück A, um es nochmal zu versuchen.</div>`)}function d(p){n=p,u()}function f(p){e&&(p.t==="code"?u():p.t==="hello"?(i.audio.success(),i.input.rumble(.5,200),h().role==="guest"&&p.mode&&p.mode!==i.mode&&(i.mode=p.mode,i.prepareWorld(_p(i.mode)),i.bike.setTires(i.mode)),h().role==="guest"?d("joined"):u()):p.t==="start"?(l=!0,i.go("ride",{character:t,online:!0})):p.t==="closed"?(o="Dein Gegner hat das Rennen verlassen.",h().close(),d("error")):p.t==="error"&&(o=p.why,h().close(),d("error"),i.audio.error()))}function m(){if(i.audio.select(),n==="choose")s===0?(h().host(t,i.mode),d("hosting")):(r=["","","",""],a=0,d("code"));else if(n==="hosting")h().remote&&g();else if(n==="code"){if(r.some(p=>p==="")){i.audio.error();return}h().join(r.join(""),t,i.mode),d("connecting")}else n==="error"&&d("choose")}function g(){h().send({t:"start"}),l=!0,i.go("ride",{character:t,online:!0})}function v(){if(i.audio.back(),n==="code"||n==="error"){h().close(),d("choose");return}h().close(),n==="choose"?i.go("menu",{selectId:t.id}):d("choose")}return{enter(p={}){t=p.character,l=!1,o="",e=Ln(`
        <div class="screen menu-screen lobby-screen">
          <div class="menu-panel">
            <div class="menu-brand">${qe(He.gameName)}</div>
            <div class="menu-heading">Online gegen einen Freund</div>
            <div class="lobby-me">Du fährst als <b>${qe(t.name)}</b> · Nr. ${qe(t.number)}</div>
            <div class="lobby-body"></div>
          </div>
          ${Yi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),i.ui.append(e),i.online.listen(f),i.online.connected?d(i.online.role==="host"?"hosting":"joined"):(s=0,d("choose")),c=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(p){const y=bi(i,p);Js(i,p,y,c),c=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,p),i.fx.uFade.value=We(i.fx.uFade.value,0,5,p);const _=i.input;if(n==="code"){for(const E of _.chars)/^[0-9]$/.test(E)?(r[a]=E,a=Math.min(3,a+1),i.audio.nav()):E==="\b"&&(r[a]===""&&a>0&&a--,r[a]=""),u();const x=E=>{const M=r[a]===""?E>0?-1:10:Number(r[a]);r[a]=String((M+E+10)%10),i.audio.nav(),u()};_.pressed("up")?x(1):_.pressed("down")?x(-1):_.pressed("left")&&a>0?(a--,u()):_.pressed("right")&&a<3&&(a++,u())}else n==="choose"&&(_.pressed("up")||_.pressed("down"))&&(s=1-s,i.audio.nav(),u());_.pressed("confirm")?m():_.pressed("back")&&v()},exit(){e.remove(),e=null,l||i.online.listen(null)}}}const Wi=[{id:"pad",name:"Controller",icon:"🎮",sub:"Xbox oder PlayStation"},{id:"keys",name:"Tastatur",icon:"⌨️",sub:"Computer oder Laptop"},{id:"touch",name:"iPad",icon:"📱",sub:"mit dem Finger steuern"}],xp="grandtour.steuerung";function Ir(){try{return localStorage.getItem(xp)}catch{return null}}function ch(i,e,t=!0){const n=Wi.some(s=>s.id===e)?e:"pad";i.control=n,t&&(i.controlChosen=n),i.input.touchEnabled=n==="touch";for(const s of Wi)document.body.classList.toggle(`control-${s.id}`,s.id===n);if(t)try{localStorage.setItem(xp,n)}catch{}}function yp(i){return i.input.pad?"pad":matchMedia("(pointer: coarse)").matches?"touch":"keys"}function d1(i){let e,t=0,n=!0,s="mode";function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),o||i.audio.nav()}function a(){ch(i,Wi[t].id),i.audio.select(),i.go(s,{fromTransition:!0})}return{enter(o={}){s=o.next||"mode";const c=Ir()||yp(i);t=Math.max(0,Wi.findIndex(l=>l.id===c)),e=Ln(`
        <div class="screen mode-screen control-screen intro">
          <div class="mode-head">
            <div class="menu-brand">${qe(He.gameName)}</div>
            <div class="menu-heading">Womit spielst du?</div>
          </div>
          <div class="mode-cards">
            ${Wi.map((l,h)=>`
              <div class="mode-card" data-i="${h}">
                <div class="control-icon">${l.icon}</div>
                <div class="mode-name">${qe(l.name)}</div>
                <div class="control-sub">${qe(l.sub)}</div>
              </div>`).join("")}
          </div>
          <div class="control-note">Das kannst du später bei „Womit fährst du?“ wieder ändern.</div>
          ${Yi([["A","Auswählen"]])}
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(l=>l.addEventListener("click",()=>{t=Number(l.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=bi(i,o);Js(i,o,c,n),n=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,o),i.fx.uFade.value=We(i.fx.uFade.value,0,5,o),i.fx.uLines.value=We(i.fx.uLines.value,0,6,o);const l=i.input;(l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<Wi.length-1?(t++,r()):l.pressed("confirm")&&a()},exit(){e.remove()}}}const p1=/^[og]\s*(.+)?/,m1=/^mtllib /,g1=/^usemtl /,v1=/^usemap /,pf=/\s+/,mf=new L,dc=new L,gf=new L,vf=new L,hn=new L,No=new ve;function _1(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;mf.fromArray(s,e),dc.fromArray(s,t),gf.fromArray(s,n),hn.subVectors(gf,dc),vf.subVectors(mf,dc),hn.cross(vf),hn.normalize(),r.push(hn.x,hn.y,hn.z),r.push(hn.x,hn.y,hn.z),r.push(hn.x,hn.y,hn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){const m=this.normals.length;u=this.parseNormalIndex(o,m),d=this.parseNormalIndex(c,m),f=this.parseNormalIndex(l,m),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){const m=this.uvs.length;u=this.parseUVIndex(s,m),d=this.parseUVIndex(r,m),f=this.parseUVIndex(a,m),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class x1 extends qr{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new ky(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new _1;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(pf);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(No.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),_t),t.colors.push(No.r,No.g,No.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=l.slice(1).trim().split(pf),f=[];for(let g=0,v=d.length;g<v;g++){const p=d[g];if(p.length>0){const y=p.split("/");f.push(y)}}const m=f[0];for(let g=1,v=f.length-1;g<v;g++){const p=f[g],y=f[g+1];t.addFace(m[0],p[0],y[0],m[1],p[1],y[1],m[2],p[2],y[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let d=[];const f=[];if(l.indexOf("/")===-1)d=u;else for(let m=0,g=u.length;m<g;m++){const v=u[m].split("/");v[0]!==""&&d.push(v[0]),v[1]!==""&&f.push(v[1])}t.addLineGeometry(d,f)}else if(h==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=p1.exec(l))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(g1.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(m1.test(l))t.materialLibraries.push(l.substring(7).trim());else if(v1.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new rt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const g=new ht;g.setAttribute("position",new Xe(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Xe(h.normals,3)),h.colors.length>0&&(m=!0,g.setAttribute("color",new Xe(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Xe(h.uvs,2));const v=[];for(let y=0,_=u.length;y<_;y++){const x=u[y],E=x.name+"_"+x.smooth+"_"+m;let M=t.materials[E];if(this.materials!==null){if(M=this.materials.create(x.name),d&&M&&!(M instanceof qo)){const S=new qo;Pn.prototype.copy.call(S,M),S.color.copy(M.color),M=S}else if(f&&M&&!(M instanceof vi)){const S=new vi({size:10,sizeAttenuation:!1});Pn.prototype.copy.call(S,M),S.color.copy(M.color),S.map=M.map,M=S}}M===void 0&&(d?M=new qo:f?M=new vi({size:1,sizeAttenuation:!1}):M=new Py,M.name=x.name,M.flatShading=!x.smooth,M.vertexColors=m,t.materials[E]=M),v.push(M)}let p;if(v.length>1){for(let y=0,_=u.length;y<_;y++){const x=u[y];g.addGroup(x.groupStart,x.groupCount,y)}d?p=new Eu(g,v):f?p=new Ns(g,v):p=new pe(g,v)}else d?p=new Eu(g,v[0]):f?p=new Ns(g,v[0]):p=new pe(g,v[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){const o=new vi({size:1,sizeAttenuation:!1}),c=new ht;c.setAttribute("position",new Xe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Xe(t.colors,3)),o.vertexColors=!0);const l=new Ns(c,o);r.add(l)}return r}}const y1="modelle/natur/",pc={sommer:{common:"CommonTree",birch:"BirchTree",willow:"Willow",pine:"PineTree",pineAlt:"PineTree"},herbst:{common:"CommonTree_Autumn",birch:"BirchTree_Autumn",willow:"Willow_Autumn",pine:"PineTree",pineAlt:"PineTree_Autumn"}};function b1(i,e=1.6){const t={};let n=null;for(const s of i.split(`
`)){const r=s.trim().split(/\s+/);r[0]==="newmtl"?n=r[1]:r[0]==="Kd"&&n&&(t[n]=new ve(Math.min(1,r[1]*e),Math.min(1,r[2]*e),Math.min(1,r[3]*e)))}return t}async function bp(i,e=y1,t=1.6,n=!0,s=!0){const[r,a]=await Promise.all([fetch(e+i+".obj").then(x=>x.text()),fetch(e+i+".mtl").then(x=>x.text())]),o=b1(a,t),c=new x1().parse(r.replace(/^l .*$/gm,"")),l=[];c.traverse(x=>{var P;if(!x.isMesh)return;let E=x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone();E.applyMatrix4(x.matrixWorld),E.attributes.normal||E.computeVertexNormals();const M=Array.isArray(x.material)?x.material:[x.material],S=E.groups.length?E.groups:[{start:0,count:E.attributes.position.count,materialIndex:0}],A=new Float32Array(E.attributes.position.count*3),T=new Float32Array(E.attributes.position.count);for(const N of S){const B=(P=M[N.materialIndex])==null?void 0:P.name,U=o[B]||new ve(.5,.5,.5),G=s&&B==="Wood"?1:0;for(let D=N.start;D<N.start+N.count;D++)A[D*3]=U.r,A[D*3+1]=U.g,A[D*3+2]=U.b,T[D]=G}const b=new ht;b.setAttribute("position",E.attributes.position),b.setAttribute("normal",E.attributes.normal),b.setAttribute("color",new Ct(A,3)),b.setAttribute("bark",new Ct(T,1)),l.push(b)});const h=Gr(l);h.computeBoundingBox();const u=h.boundingBox,d=h.attributes.position,f=u.min.y+(u.max.y-u.min.y)*.06;let m=0,g=0,v=0;for(let x=0;x<d.count;x++)d.getY(x)<=f&&(m+=d.getX(x),g+=d.getZ(x),v++);const p=v&&n?m/v:(u.min.x+u.max.x)/2,y=v&&n?g/v:(u.min.z+u.max.z)/2;h.translate(-p,-u.min.y,-y);const _=tb(h,1e-4);return _.computeBoundingBox(),_}const di=(i,e)=>Array.from({length:e},(t,n)=>`${i}_${n+1}`);async function M1(){try{const i=new Set;for(const r of Object.values(pc))for(const a of Object.values(r))di(a,5).forEach(o=>i.add(o));["Bush_1","Bush_2","BushBerries_1","BushBerries_2","TreeStump_Moss","WoodLog_Moss",...di("Rock_Moss",7)].forEach(r=>i.add(r));const e=[...i],t=await Promise.all(e.map(r=>bp(r))),n=Object.fromEntries(e.map((r,a)=>[r,t[a]])),s=r=>{const a=pc[r]||pc.sommer;return{common:di(a.common,5).map(o=>n[o]),birch:di(a.birch,5).map(o=>n[o]),willow:di(a.willow,5).map(o=>n[o]),pine:di(a.pine,5).map(o=>n[o]),pineAlt:di(a.pineAlt,5).map(o=>n[o])}};return{trees:{sommer:s("sommer"),herbst:s("herbst")},bushes:["Bush_1","Bush_2","BushBerries_1","BushBerries_2"].map(r=>n[r]),rocks:di("Rock_Moss",7).map(r=>n[r]),stump:n.TreeStump_Moss,log:n.WoodLog_Moss}}catch(i){return console.warn("Natur-Modelle konnten nicht geladen werden, nutze einfache Bäume.",i),null}}const S1=["House_1","House_2","House_3","House_4","Inn","Blacksmith","Stable","Sawmill","Mill","Bell_Tower"],T1=["Well","MarketStand_1","MarketStand_2","Cart","Barrel","Crate","Fence","Bench_1","Gazebo","Hay","Bags","Package_1","Bonfire_Lit"];async function w1(){try{const i="modelle/dorf/",e=[...S1,...T1],t=await Promise.all(e.map(n=>bp(n,i,1.9,!1,!1)));return Object.fromEntries(e.map((n,s)=>[n,t[s]]))}catch(i){return console.warn("Dorf-Modelle konnten nicht geladen werden.",i),null}}const E1=["up","down","left","right"],A1={0:"confirm",1:"back",2:"x",3:"y",4:"lb",5:"rb",6:"lt",7:"rt",8:"select",9:"start",11:"view"},C1={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"confirm",NumpadEnter:"confirm",Escape:"back",Delete:"x",PageUp:"rb",PageDown:"lb"},pr=.14;function R1(i=""){return/xbox|045e/i.test(i)?!1:/054c|dualsense|dualshock|playstation|wireless controller/i.test(i)}const Fo=.55;class P1{constructor(){this.keys=new Set,this.queue=[],this.charQueue=[],this.frame=new Set,this.chars=[],this.prevButtons=[],this.dirTime={up:0,down:0,left:0,right:0},this.dirRepeat={up:0,down:0,left:0,right:0},this.steer=0,this.steerHold=0,this.steerDir=0,this.lookX=0,this.lookY=0,this.throttle=0,this.brake=0,this.pad=null,this.usingPad=!1,this.touchRide=!1,this.touches=new Map,this.touchPedal=!1,this.touchEnabled=!1,this.setupTouch(),this.layout="xbox",window.addEventListener("keydown",e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Tab","Backspace"].includes(e.key)&&e.preventDefault(),this.usingPad=!1,this.keys.add(e.code),e.repeat||this.queue.push("any");const t=C1[e.key];t&&this.queue.push(t),e.code==="KeyC"&&this.queue.push("view"),e.code==="KeyT"&&this.queue.push("cruise"),e.code==="KeyK"&&!e.repeat&&this.queue.push("klingel"),(e.code==="Space"&&!e.repeat||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.queue.push("sprint"),e.key==="Escape"&&this.queue.push("pause"),e.key==="Backspace"?this.charQueue.push("\b"):e.key.length===1&&this.charQueue.push(e.key)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousedown",()=>this.queue.push("any")),window.addEventListener("pointerdown",()=>this.queue.push("any")),window.addEventListener("touchstart",()=>this.queue.push("any"),{passive:!0}),window.addEventListener("pointerup",e=>{var n,s;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"[data-act]");t&&this.queue.push(t.dataset.act)})}setupTouch(){const t={passive:!1};window.addEventListener("touchstart",s=>{if(!(!this.touchRide||!this.touchEnabled||s.target.closest("button, .pause-box, .result, .touch-pause"))){s.preventDefault();for(const r of s.changedTouches)this.touches.set(r.identifier,{x0:r.clientX,y0:r.clientY,t0:performance.now(),mode:"steer",side:r.clientX<innerWidth/2?-1:1})}},t),window.addEventListener("touchmove",s=>{if(!(!this.touchRide||!this.touchEnabled)){s.preventDefault();for(const r of s.changedTouches){const a=this.touches.get(r.identifier);if(!a||a.mode!=="steer")continue;const o=r.clientY-a.y0,c=r.clientX-a.x0;Math.abs(o)>45&&Math.abs(o)>Math.abs(c)*1.3&&(o<0?(this.touchPedal&&this.queue.push("sprint"),this.touchPedal=!0,a.mode="up"):(this.touchPedal=!1,a.mode="brake"))}}},t);const n=s=>{for(const r of s.changedTouches)this.touches.delete(r.identifier)};window.addEventListener("touchend",n),window.addEventListener("touchcancel",n)}inject(e){this.queue.push(e),e!=="any"&&this.queue.push("any")}pressed(e){return this.frame.has(e)}holdTime(e){return this.dirTime[e]}rumble(e=.3,t=60){const n=this.pad&&this.pad.vibrationActuator;if(!(!n||!n.playEffect))try{const s=n.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});s&&s.catch&&s.catch(()=>{})}catch{}}update(e){this.frame.clear();for(const U of this.queue)this.frame.add(U);this.queue.length=0,this.chars=this.charQueue,this.charQueue=[];const t=navigator.getGamepads?navigator.getGamepads():[];let n=null;for(const U of t)if(U&&U.connected&&(n=U,U.mapping==="standard"))break;this.pad=n;const s=n&&R1(n.id)?"ps":"xbox";s!==this.layout&&(this.layout=s,document.body.classList.toggle("pad-ps",s==="ps"));const r={up:!1,down:!1,left:!1,right:!1};let a=0,o=0,c=0,l=0,h=0,u=0;if(n){const U=n.buttons;for(let le=0;le<U.length;le++){const ye=!!(U[le]&&(U[le].pressed||U[le].value>.5)),Ve=!!this.prevButtons[le];if(ye&&!Ve){this.frame.add("any"),this.usingPad=!0;const F=A1[le];F&&this.frame.add(F),le===1&&this.frame.add("cruise")}this.prevButtons[le]=ye}const G=n.axes[0]||0,D=n.axes[1]||0;Math.abs(G)>Math.abs(D)?(r.left=G<-Fo,r.right=G>Fo):(r.up=D<-Fo,r.down=D>Fo);const z=le=>!!(U[le]&&U[le].pressed);r.up||(r.up=z(12)),r.down||(r.down=z(13)),r.left||(r.left=z(14)),r.right||(r.right=z(15)),(Math.abs(G)>.3||Math.abs(D)>.3)&&(this.usingPad=!0);const k=le=>U[le]?U[le].value:0;a=k(7)-k(6),o=Math.abs(G)>pr?(G-Math.sign(G)*pr)/(1-pr):0,c=k(0),l=k(3);const K=n.axes[2]||0,oe=n.axes[3]||0;h=Math.abs(K)>pr?K:0,u=Math.abs(oe)>pr?oe:0}for(const U of E1)if(r[U]){if(this.dirTime[U]===0&&this.frame.add(U),this.dirTime[U]+=e,this.dirTime[U]>.35){this.dirRepeat[U]+=e;const G=this.dirTime[U]>1.6?.035:.09;this.dirRepeat[U]>=G&&(this.dirRepeat[U]=0,this.frame.add(U))}}else this.dirTime[U]=0,this.dirRepeat[U]=0;const d=this.keys;let f=0;(d.has("KeyA")||d.has("ArrowLeft"))&&(f-=1),(d.has("KeyD")||d.has("ArrowRight"))&&(f+=1);const m=d.has("KeyW")||d.has("ArrowUp")?1:0,g=d.has("KeyS")||d.has("ArrowDown")?1:0;let v=0,p=!1,y=!1,_=0;if(this.touchRide){for(const U of this.touches.values())U.mode==="steer"?U.side<0?p=!0:y=!0:U.mode==="brake"&&(_=1);v=(y?1:0)-(p?1:0)}else this.touchPedal=!1,this.touches.clear();const x=Math.max(-1,Math.min(1,a+f+v)),E=Math.abs(x)>.05?Math.sign(x):0;E!==0&&E===this.steerDir?this.steerHold+=e:this.steerHold=0,this.steerDir=E;const{start:M,vollNach:S,stick:A=.4}=He.steering,T=Math.min(1,this.steerHold/S),b=M+(1-M)*T*T*(3-2*T),P=Math.max(-1,Math.min(1,x*b+o*A)),N=Math.abs(P)>Math.abs(this.steer)?3:7;this.steer+=Math.max(-N*e,Math.min(N*e,P-this.steer)),d.has("KeyJ")&&(h-=1),d.has("KeyL")&&(h+=1),d.has("KeyI")&&(u-=1),d.has("Comma")&&(u+=1),this.lookX=Math.max(-1,Math.min(1,h)),this.lookY=Math.max(-1,Math.min(1,u)),this.throttle=Math.max(c,m,this.touchRide&&this.touchPedal?1:0),this.brake=Math.max(l,g,_);const B=U=>!!(n&&n.buttons[U]&&n.buttons[U].pressed);this.l1=B(4)||d.has("KeyQ")||p&&y,this.r1=B(5)||d.has("KeyE")||p&&y}}const L1={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Ts(i){const e=/^([A-G])([#b]?)(-?\d)$/.exec(i);if(!e)return 440;const t=L1[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0)+(parseInt(e[3],10)+1)*12;return 440*Math.pow(2,(t-69)/12)}class I1{constructor(){this.ctx=null,this.fwPhase=0,this.musicStarted=!1,this.muted=!1}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.build()}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}get ok(){return!!this.ctx&&this.ctx.state==="running"}build(){const e=this.ctx,t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,t.connect(e.destination),this.master=e.createGain(),this.master.connect(t),this.sfx=e.createGain(),this.sfx.gain.value=He.soundVolume,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=He.music.volume,this.musicBus.connect(this.master),this.musicIn=e.createGain(),this.musicIn.connect(this.musicBus);const n=e.createConvolver();n.buffer=this.impulse(3.2);const s=e.createGain();s.gain.value=.55,this.musicIn.connect(n),n.connect(s),s.connect(this.musicBus);const r=e.sampleRate*2;this.noise=e.createBuffer(1,r,e.sampleRate);const a=this.noise.getChannelData(0);for(let c=0;c<r;c++)a[c]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=this.noise,o.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=400,this.windGain=e.createGain(),this.windGain.gain.value=0,o.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),o.start()}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}toggleMute(){this.ctx&&(this.muted=!this.muted,this.master.gain.setTargetAtTime(this.muted?0:1,this.ctx.currentTime,.05))}tone(e,t,{type:n="sine",vol:s=.2,attack:r=.005,slideTo:a=null,when:o=0,dest:c=null}={}){if(!this.ok)return;const l=this.ctx,h=l.currentTime+o,u=l.createOscillator(),d=l.createGain();u.type=n,u.frequency.setValueAtTime(e,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+t),d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+r),d.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(c||this.sfx),u.start(h),u.stop(h+t+.05)}noiseBurst(e,{vol:t=.3,freq:n=3e3,type:s="highpass",q:r=1,when:a=0}={}){if(!this.ok)return;const o=this.ctx,c=o.currentTime+a,l=o.createBufferSource();l.buffer=this.noise;const h=o.createBiquadFilter();h.type=s,h.frequency.value=n,h.Q.value=r;const u=o.createGain();u.gain.setValueAtTime(t,c),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(u),u.connect(this.sfx),l.start(c,Math.random()*1.5),l.stop(c+e+.02)}nav(){this.tone(720,.08,{type:"triangle",vol:.13,slideTo:960})}select(){this.tone(880,.1,{type:"triangle",vol:.16}),this.tone(1320,.16,{type:"triangle",vol:.14,when:.07})}back(){this.tone(620,.14,{type:"triangle",vol:.14,slideTo:360})}error(){this.tone(150,.22,{type:"square",vol:.07})}key(){this.noiseBurst(.03,{vol:.2,freq:2600,type:"bandpass",q:2}),this.tone(1400,.035,{vol:.04})}success(){["C5","E5","G5","C6"].forEach((e,t)=>this.tone(Ts(e),.35,{type:"triangle",vol:.13,when:t*.08}))}klingel(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime;for(const n of[0,.17])for(const[s,r]of[[1,.16],[2.4,.07],[3.9,.04]]){const a=e.createOscillator();a.frequency.value=2100*s;const o=e.createGain(),c=t+n;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(r,c+.004),o.gain.exponentialRampToValueAtTime(1e-4,c+.7),a.connect(o),o.connect(this.sfx),a.start(c),a.stop(c+.75)}}lap(){["G5","C6","E6"].forEach((e,t)=>this.tone(Ts(e),.4,{type:"square",vol:.05,when:t*.1}))}whoosh(e=1.8){if(!this.ok)return;const t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noise,s.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.Q.value=.9,r.frequency.setValueAtTime(200,n),r.frequency.exponentialRampToValueAtTime(2800,n+e*.7),r.frequency.exponentialRampToValueAtTime(700,n+e);const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.6,n+e*.6),a.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(r),r.connect(a),a.connect(this.sfx),s.start(n),s.stop(n+e+.1)}freewheel(e,t){if(!this.ok||t<=0){this.fwPhase=0;return}this.fwPhase+=t*e;let n=0;for(;this.fwPhase>=1&&n<6;)this.fwPhase-=1,this.noiseBurst(.006,{vol:.32,freq:4500,when:n*(1/Math.max(t,1))}),n++;this.fwPhase>1&&(this.fwPhase=0)}setWind(e){if(!this.ctx)return;const t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime(e*.3*He.windLautstaerke,t,.15),this.windFilter.frequency.setTargetAtTime(250+e*1100,t,.2)}setMusicLevel(e){this.ctx&&this.musicBus.gain.setTargetAtTime(He.music.volume*e,this.ctx.currentTime,.6)}startMusic(){!this.ok||this.musicStarted||(this.musicStarted=!0,this.step=0,this.nextTime=this.ctx.currentTime+.15,this.timer=setInterval(()=>this.schedule(),50))}schedule(){const e=this.ctx,t=30/He.music.tempo,n=He.music.chords;for(;this.nextTime<e.currentTime+.3;){const s=this.nextTime,r=Math.floor(this.step/8),a=this.step%8,o=n[r%n.length];if(a===0&&(this.pad(o,t*8.5,s),this.bass(Ts(o[0])/2,t*8,s),r%4===0&&this.bell(Ts(o[2])*4,s+t*4)),r>=2){const l=Ts(o[[0,1,2,1,0,2,1,2][a]])*2;this.pluck(l,s,a%2===0?.07:.045)}this.nextTime+=t,this.step++}}pad(e,t,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,n),r.frequency.linearRampToValueAtTime(1400,n+t*.5),r.frequency.linearRampToValueAtTime(600,n+t);const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.05,n+t*.35),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicIn);for(const o of e)for(const c of[-8,8]){const l=s.createOscillator();l.type="sawtooth",l.frequency.value=Ts(o),l.detune.value=c,l.connect(r),l.start(n),l.stop(n+t+.1)}}bass(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.16,n+.3),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicBus),r.start(n),r.stop(n+t+.1)}pluck(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(n,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+.5),r.connect(a),a.connect(this.musicIn),r.start(t),r.stop(t+.6)}bell(e,t){const n=this.ctx;for(const[s,r]of[[1,.04],[2.76,.015]]){const a=n.createOscillator();a.frequency.value=e*s;const o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(r,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+2.5),a.connect(o),o.connect(this.musicIn),a.start(t),a.stop(t+2.6)}}}const D1={uniforms:{tDiffuse:{value:null},uBlur:{value:0},uLines:{value:0},uTime:{value:0},uVignette:{value:.45},uFade:{value:0},uAspect:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uBlur, uLines, uTime, uVignette, uFade, uAspect;
    varying vec2 vUv;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

    void main() {
      vec2 c = vec2(0.5, 0.54);
      vec2 d = vUv - c;
      vec3 col;
      if (uBlur > 0.001) {
        col = vec3(0.0);
        for (int i = 0; i < 12; i++) {
          float k = float(i) / 11.0;
          col += texture2D(tDiffuse, c + d * (1.0 - uBlur * 0.14 * k)).rgb;
        }
        col /= 12.0;
      } else {
        col = texture2D(tDiffuse, vUv).rgb;
      }
      vec2 pd = vec2(d.x * uAspect, d.y);
      float r = length(pd);
      if (uLines > 0.001) {
        float a = atan(pd.y, pd.x) * 30.0;
        float seg = floor(a);
        float rnd = hash(vec2(seg, floor(uTime * 16.0)));
        float on = step(0.72, rnd);
        float thin = pow(max(0.0, 1.0 - abs(fract(a) - 0.5) * 2.0), 8.0);
        float radial = smoothstep(0.18 + rnd * 0.25, 0.85, r);
        col += vec3(1.0, 0.93, 0.82) * on * thin * radial * uLines * 1.6;
      }
      col *= mix(1.0, smoothstep(1.1, 0.3, r), uVignette);
      col *= 1.0 - uFade;
      gl_FragColor = vec4(col, 1.0);
    }
  `},ga="grandtour.wuensche";function Fn(){try{return JSON.parse(localStorage.getItem(ga))||[]}catch{return[]}}function Sr(i){try{localStorage.setItem(ga,JSON.stringify(i))}catch{}}async function _f(i,e){const t=He.wunschzettel.briefkasten;{const n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({von:i||"Paul",text:e})});if(!n.ok)throw new Error("Senden fehlgeschlagen");return(await n.json().catch(()=>({}))).nummer??null}}const lh=["umgesetzt","uebersprungen"],Mp=i=>i.sent&&i.nr!=null&&!lh.includes(i.status);async function Sp(){const i=He.wunschzettel.briefkasten,t=Fn().filter(Mp).map(a=>a.nr);if(!t.length)return[];let n;try{n=await(await fetch(`${i}?nr=${t.join(",")}`,{cache:"no-store"})).json()}catch{return[]}if(!(n!=null&&n.ok))return[];const s=[],r=Fn();for(const a of r){const o=a.nr!=null&&n.status[a.nr];o&&(o.status!==a.status&&lh.includes(o.status)&&(s.push(a),a.seen=!1,a.fertigAm=Date.now()),a.status=o.status,a.info=o.info||"")}return Sr(r),s}function k1(){return Fn().filter(i=>lh.includes(i.status)&&i.seen===!1).length}function wl(){return Fn().some(Mp)}function U1(i){if(!i.sent)return'<div class="wish-item-meta">noch nicht verschickt – wird gleich nachgeholt</div>';if(i.nr==null)return'<div class="wish-item-meta">verschickt ✓</div>';const e=i.status||"angekommen",t={angekommen:1,in_arbeit:2,umgesetzt:3,uebersprungen:3}[e]||1,s=`<div class="wish-track s${t} ${e}">${["Angekommen","Claude arbeitet",e==="uebersprungen"?"Nicht umgesetzt":"Umgesetzt"].map((a,o)=>`<span class="${o<t?"on":""} ${o===t-1?"now":""}"><i></i>${a}</span>`).join("")}</div>`;let r="";if(e==="angekommen")r="📬 Dein Wunsch ist bei Claude angekommen und wartet auf die Bearbeitung.";else if(e==="in_arbeit")r='🛠️ Claude arbeitet gerade daran<span class="wish-dots"></span>';else if(e==="umgesetzt"){const a=i.fertigAm&&Date.now()-i.fertigAm<18e4;r=`✅ Umgesetzt! ${qe(i.info||"")}${a?" <b>In 1–2 Minuten im Spiel – dann die Seite neu laden.</b>":""}`}else r=`💬 ${qe(i.info||"Diesmal nicht umgesetzt.")}`;return`${s}<div class="wish-item-meta wish-now">${r}</div>`}const N1=[{von:"Paul",text:"ich will einen goldenen helm :-)",am:"2026-11-06T21:05:00Z",status:"umgesetzt",info:"Neue Farbe „Gold“ für Helm, Trikot und Hose."},{von:"Papa (Test)",text:"Wenn man im Ziel ankommt, soll buntes Konfetti fliegen.",am:"2026-11-06T20:57:00Z",status:"umgesetzt",info:"Im Ziel fliegt buntes Konfetti."},{von:"Papa (Test)",text:"Eine Fahrradklingel auf der Taste K.",am:"2026-11-06T14:23:00Z",status:"umgesetzt",info:"Mit K klingelt es beim Fahren."}],xf={angekommen:["📬","Angekommen"],in_arbeit:["🛠️","Claude arbeitet daran"],umgesetzt:["✅","Umgesetzt"],uebersprungen:["💬","Nicht umgesetzt"]};async function F1(){const i=He.wunschzettel.briefkasten,t=await(await fetch(`${i}?liste=1`,{cache:"no-store"})).json();if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.fehler)||"Liste nicht da");return[...t.wuensche,...N1]}const yf=i=>new Date(i).toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});function O1(i,e){const t=Ln(`
    <div class="wish-overlay">
      <div class="wish-card">
        <button class="wish-close" title="Schließen">✕</button>
        <div class="wish-kicker">${qe(He.gameName)}</div>
        <h2>Mein Wunschzettel</h2>
        <p class="wish-intro">Was soll es im Spiel noch geben? Schreib deinen Wunsch auf – er wird direkt an die Spiele-Werkstatt geschickt.</p>
        <label class="wish-label">Dein Name</label>
        <input class="wish-name" maxlength="20" placeholder="Paul">
        <label class="wish-label">Dein Wunsch</label>
        <textarea class="wish-text" maxlength="400" rows="4" placeholder="Zum Beispiel: Ich wünsche mir einen goldenen Helm!"></textarea>
        <div class="wish-row">
          <span class="wish-count">0 / 400</span>
          <button class="wish-send">Wunsch abschicken</button>
        </div>
        <div class="wish-status"></div>
        <div class="wish-tabs">
          <button class="wish-tab active" data-tab="mine">Meine Wünsche</button>
          <button class="wish-tab" data-tab="alle">Alle Wünsche</button>
        </div>
        <div class="wish-list"></div>
        <div class="wish-all" hidden></div>
      </div>
    </div>`),n=v=>t.querySelector(v),s=n(".wish-name"),r=n(".wish-text");try{s.value=localStorage.getItem(ga+".name")||""}catch{}function a(){const v=Fn();n(".wish-list").innerHTML=v.length?v.slice().reverse().map(p=>`<div class="wish-item ${p.sent?"":"pending"} st-${p.status||"neu"} ${p.seen===!1?"fresh":""}">
              <div class="wish-item-text">${qe(p.text)}</div>
              <div class="wish-item-time">${yf(p.at)}</div>
              ${U1(p)}
            </div>`).join(""):'<div class="wish-empty">Noch keine Wünsche – leg los!</div>'}let o=null;async function c(){clearTimeout(o);const v=n(".wish-all");if(!(v.hidden||!t.isConnected)){v.innerHTML||(v.innerHTML='<div class="wish-empty">Lade alle Wünsche …</div>');try{const p=await F1(),y=p.filter(_=>_.status==="umgesetzt").length;v.innerHTML=`<div class="wish-all-sum">${p.length} Wünsche · ${y} umgesetzt</div>`+p.map(_=>{const[x,E]=xf[_.status]||xf.angekommen,M=String(_.von||"Unbekannt").split(/\s+/)[0];return`<div class="wish-item st-${_.status}">
              <div class="wish-all-head"><b>${qe(M)}</b><span>${yf(_.am)}</span></div>
              <div class="wish-item-text">${qe(_.text)}</div>
              <div class="wish-chip st-${_.status}">${x} ${E}</div>
              ${_.info?`<div class="wish-item-meta wish-now">${qe(_.info)}</div>`:""}
            </div>`}).join("")}catch{v.innerHTML='<div class="wish-empty">Die Liste lädt gerade nicht – kein Internet? Versuch es gleich nochmal.</div>'}o=setTimeout(c,15e3)}}t.querySelectorAll(".wish-tab").forEach(v=>v.addEventListener("click",()=>{t.querySelectorAll(".wish-tab").forEach(y=>y.classList.toggle("active",y===v));const p=v.dataset.tab==="alle";n(".wish-list").hidden=p,n(".wish-all").hidden=!p,i.audio.nav(),p&&c()}));async function l(){const v=Fn();let p=!1;for(const y of v)if(!y.sent)try{y.nr=await _f(y.from,y.text),y.sent=!0,y.status=y.nr!=null?"angekommen":void 0,p=!0}catch{break}p&&(Sr(v),a())}async function h(){const v=r.value.trim(),p=s.value.trim()||"Paul";if(v.length<3){n(".wish-status").textContent="Schreib erst deinen Wunsch auf 🙂",i.audio.error(),r.focus();return}try{localStorage.setItem(ga+".name",p)}catch{}const y={text:v,from:p,at:Date.now(),sent:!1},_=Fn();_.push(y),Sr(_),n(".wish-send").disabled=!0,n(".wish-status").textContent="Wird verschickt …";try{const x=await _f(p,v);y.sent=!0;const E=Fn(),M=E.find(S=>S.at===y.at);M&&(M.sent=!0,M.nr=x,x!=null&&(M.status="angekommen")),Sr(E),n(".wish-status").textContent=x!=null?"Danke! Dein Wunsch ist bei Claude angekommen. 🎉 Unten siehst du, wie weit er ist.":"Danke! Dein Wunsch ist angekommen. 🎉",f(),i.audio.success(),r.value=""}catch{n(".wish-status").textContent="Gerade kein Internet – der Wunsch ist gemerkt und wird später verschickt.",i.audio.error()}n(".wish-send").disabled=!1,u(),a()}function u(){n(".wish-count").textContent=`${r.value.length} / 400`}let d=null;async function f(){clearTimeout(d);const v=await Sp();if(!t.isConnected)return;v.some(y=>y.status==="umgesetzt")&&i.audio.success(),a(),Fn().some(y=>y.seen===!1)&&setTimeout(()=>{const y=Fn();y.forEach(_=>_.seen===!1&&(_.seen=!0)),Sr(y)},4e3),wl()&&(d=setTimeout(f,8e3))}function m(){clearTimeout(d),clearTimeout(o),t.remove(),window.removeEventListener("keydown",g,!0),e==null||e()}function g(v){v.key==="Escape"&&(v.stopPropagation(),m())}return Tl(t),t.addEventListener("keydown",v=>v.stopPropagation()),n(".wish-close").addEventListener("click",m),n(".wish-send").addEventListener("click",h),r.addEventListener("input",u),r.addEventListener("keydown",v=>{v.key==="Enter"&&(v.metaKey||v.ctrlKey)&&h()}),window.addEventListener("keydown",g,!0),t.addEventListener("click",v=>{v.target===t&&m()}),document.body.append(t),a(),l().then(f),setTimeout(()=>r.focus(),50),{close:m}}function z1(i){let e,t=0,n=!1,s=null;function r(){const h=e==null?void 0:e.querySelector(".wish-badge");if(!h)return;const u=k1();h.textContent=u?`✨ ${u===1?"Wunsch erledigt!":`${u} Wünsche erledigt!`}`:wl()?"🛠️ in Arbeit":"",h.classList.toggle("show",!!h.textContent),h.classList.toggle("done",u>0)}async function a(){clearTimeout(s),e&&(!n&&wl()&&(await Sp()).length&&i.audio.success(),r(),s=setTimeout(a,2e4))}const o=new L,c=new L;function l(){n||(n=!0,i.audio.select(),O1(i,()=>{setTimeout(()=>n=!1,250),r()}))}return{enter(){t=0,e=Ln(`
        <div class="screen title-screen">
          <div class="letterbox top"></div><div class="letterbox bottom"></div>
          <div class="title-wrap">
            <div class="title-kicker">${qe(He.subtitle)}</div>
            <h1 class="game-title" data-text="${qe(He.gameName)}">${qe(He.gameName)}</h1>
            <div class="ornament"><span></span><i></i><span></span></div>
            <div class="press-start">${qe(He.startPrompt)}</div>
          </div>
          <div class="title-controls" role="group" aria-label="Womit spielst du?">
            <span class="title-controls-label">Ich spiele mit</span>
            ${Wi.map(m=>`<button class="title-control" data-c="${m.id}"><span>${m.icon}</span>${qe(m.name)}</button>`).join("")}
          </div>
          <button class="wish-button">${pt("Y")}<span>🎁 Wunschzettel</span><b class="wish-badge"></b></button>
          <div class="sparkles">${Array.from({length:24},(m,g)=>`<b style="--i:${g};--x:${g*37%100};--d:${3+g%5}s"></b>`).join("")}</div>
        </div>`),i.ui.append(e),i.titleRoot=e;const h=e.querySelector(".wish-button");Tl(h),h.addEventListener("click",()=>l());const u=e.querySelector(".title-controls");Tl(u);const d=()=>{u.querySelectorAll(".title-control").forEach(m=>m.classList.toggle("active",m.dataset.c===i.controlChosen)),e.querySelector(".press-start").textContent=i.control==="touch"?"Zum Starten antippen":He.startPrompt};u.querySelectorAll(".title-control").forEach(m=>m.addEventListener("click",()=>{ch(i,m.dataset.c),i.controlChosen=m.dataset.c,i.audio.unlock(),i.audio.select(),d()})),d(),a(),i.fx.uFade.value=1,i.fx.uBlur.value=0,i.fx.uLines.value=0,i.npc.s=i.world.length-150,i.npc.speed=6,i.npc.lateral=i.world.cx?.5:1.5,i.npc.pedal=!0;const f=He.titleRider;i.bike.setPlate(f.number,f.name),i.bike.applyLook(He.titleRider),i.bike.setTires(i.mode),i.audio.setWind(0),i.audio.setMusicLevel(1),i.audio.startMusic()},update(h){t+=h,i.fx.uFade.value=Math.max(0,1-t/2.5);const u=bi(i,h),d=.55+t*.03+Math.sin(t*.05)*.2,f=5-Math.sin(t*.07)*1,m=u.tz,g=-u.tx,v=Math.cos(d)*f,p=Math.sin(d)*f;if(o.set(u.x+u.tx*v+m*p,0,u.z+u.tz*v+g*p),o.y=Math.max(u.h+.9+Math.sin(t*.11)*.35,i.world.terrainHeight(o.x,o.z)+.6),o.x+=Math.sin(t*.7)*.05,o.y+=Math.sin(t*.9+1)*.03,i.camera.position.copy(o),c.set(u.x,u.h+.95,u.z),i.camera.lookAt(c),i.camera.fov=42,i.camera.updateProjectionMatrix(),!n){if(t>.5&&i.input.pressed("y")){l();return}t>.5&&i.input.pressed("any")&&(i.audio.unlock(),i.audio.startMusic(),i.go("transition"))}},exit(){clearTimeout(s);const h=e;setTimeout(()=>h.remove(),700)}}}const mc=2;function B1(){let n="";for(let a=0;a<42;a++){const o=a/42*Math.PI*2,c=(a+.3)/42*Math.PI*2,l=(a+.55)/42*Math.PI*2,h=(a+.85)/42*Math.PI*2,u=(d,f)=>`${(Math.cos(f)*d).toFixed(2)} ${(Math.sin(f)*d).toFixed(2)}`;n+=`${a===0?"M":"L"}${u(92,o)} L${u(100,c)} L${u(100,l)} L${u(92,h)} `}n+="Z";let s="";for(let a=0;a<5;a++){const o=a/5*360;s+=`<path d="M-9 -18 L-6 -76 Q0 -80 6 -76 L9 -18 Z" transform="rotate(${o})"/>`}let r="";for(let a=0;a<5;a++){const o=a/5*Math.PI*2+Math.PI/5;r+=`<circle cx="${(Math.cos(o)*64).toFixed(1)}" cy="${(Math.sin(o)*64).toFixed(1)}" r="4"/>`}return`
  <svg viewBox="-110 -110 220 220" class="chainring">
    <defs>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff1c4"/><stop offset=".45" stop-color="var(--gold)"/><stop offset="1" stop-color="#8a5d1c"/>
      </linearGradient>
    </defs>
    <g fill="url(#gold)">
      <path d="${n} M0 -80 A80 80 0 1 0 0.01 -80 Z" fill-rule="evenodd"/>
      ${s}
      <circle r="22"/>
    </g>
    <g fill="#1a1208">${r}<circle r="9"/></g>
  </svg>`}const Li=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function H1(i){let e=0,t,n,s,r=6;return{enter(){var a;e=0,r=i.npc.speed,t=Ln(`<div class="screen transition-screen"><div class="veil"></div><div class="ring-wrap">${B1()}</div></div>`),i.ui.append(t),n=t.querySelector(".ring-wrap"),s=t.querySelector(".veil"),(a=i.titleRoot)==null||a.classList.add("leaving"),i.audio.whoosh(mc),i.audio.select(),i.input.rumble(.5,250)},update(a){e+=a;const o=e/mc;i.npc.speed=r+Li(o*1.2)*22,i.npc.pedal=e>.45,bi(i,a),h1(i,a,{dist:3.6+o*1.5,height:1.15,lag:3+o*4,fovBase:50,speed:i.npc.speed*1.4,snap:e<=a}),e<.45&&i.audio.freewheel(a,20+e*80),i.audio.setWind(Li(o*1.4)),i.fx.uBlur.value=Li(o*1.25),i.fx.uLines.value=Li((o-.1)*1.6);const c=Li((e-.85)/.5),l=Li((e-1.45)/.5),h=e*900+e*e*400;n.style.opacity=String(c*(1-l)),n.style.transform=`translate(-50%, -50%) scale(${.35+c*.65+l*2.4}) rotate(${h}deg)`,s.style.opacity=String(Li((e-1.25)/.6)),e>=mc&&i.go(Ir()?"mode":"control",{fromTransition:!0})},exit(){var o;(o=i.titleRoot)==null||o.remove(),i.titleRoot=null,t.classList.add("fade-out");const a=t;setTimeout(()=>a.remove(),500),i.audio.setWind(0),i.npc.speed=4,i.npc.pedal=!0}}}const Tp="pedal-legends.characters.v1";function Zi(){try{const i=JSON.parse(localStorage.getItem(Tp)||"[]");return Array.isArray(i)?i:[]}catch{return[]}}function hh(i){try{localStorage.setItem(Tp,JSON.stringify(i))}catch{}}function V1(i="road"){return{id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()),name:"",number:1,jersey:He.colors.jersey,frame:He.colors.bikeFrame,helmet:mn.helmet,shorts:mn.shorts,brand:mn.brand,paint:mn.paint,kit:mn.kit,bar:"#f6f6f6",mode:i,bestLap:null,createdAt:Date.now(),version:1}}function G1(i){const e=Zi();e.push(i),hh(e)}function wp(i){hh(Zi().map(e=>e.id===i.id?i:e))}function bf(i){hh(Zi().filter(e=>e.id!==i))}function W1(i){let e,t,n=[],s=0,r=null,a=!0,o=null;function c(){n=Zi().filter(y=>(y.mode||"road")===i.mode),s=Math.min(s,n.length);const p=n.map((y,_)=>`
        <div class="card" data-i="${_}">
          <div class="mini-plate"><span>${y.number}</span></div>
          <div class="card-info">
            <div class="card-name">${qe(y.name)}</div>
            <div class="card-sub">Nr. ${y.number} · ${qe(mp(y.brand).name)}${y.bestLap?` · Bestzeit ${Un(y.bestLap)}`:""}</div>
          </div>
          <div class="card-go">›</div>
        </div>`).join("");t.innerHTML=`${p}
      <div class="card card-new" data-i="${n.length}">
        <div class="card-info"><div class="card-name">Neuer Charakter</div>
        <div class="card-sub">${n.length?"Lege einen weiteren Fahrer an":"Lege deinen ersten Fahrer an"}</div></div>
        <div class="plus">+</div>
      </div>`,t.querySelectorAll(".card").forEach(y=>y.addEventListener("click",()=>{const _=Number(y.dataset.i);if(o!==null){if(_===s)return;m()}s=_,l(),d()})),l(!0)}function l(p=!1){t.querySelectorAll(".card").forEach((E,M)=>{E.classList.toggle("selected",M===s),E.classList.toggle("confirm-delete",M===s&&r===s)});const y=t.querySelector(".card.selected");y==null||y.scrollIntoView({block:"nearest",behavior:p?"auto":"smooth"});const _=n[s];_?(i.bike.setPlate(_.number,_.name),i.bike.applyLook(_)):(i.bike.setPlate("?","NEU"),i.bike.applyLook({}));const x=e.querySelector(".hint-delete");x&&(x.style.visibility=_?"visible":"hidden"),p||(i.audio.nav(),i.input.rumble(.15,30))}const h=["Rennen fahren","Online gegen Freund","Fahrer bearbeiten","Löschen"];let u=!1;function d(){i.audio.select(),i.input.rumble(.35,80),s<n.length?f():i.go("creator")}function f(){o=0,u=!1;const p=t.querySelector(".card.selected");p.insertAdjacentHTML("beforeend",`<div class="card-actions">${h.map((y,_)=>`<div class="card-action" data-a="${_}">${y}</div>`).join("")}</div>`),p.querySelectorAll(".card-action").forEach(y=>y.addEventListener("click",_=>{_.stopPropagation(),o=Number(y.dataset.a),v()})),g()}function m(){var p;o=null,(p=t.querySelector(".card-actions"))==null||p.remove()}function g(){t.querySelectorAll(".card-action").forEach((p,y)=>p.classList.toggle("selected",y===o))}function v(){const p=n[s];if(i.audio.select(),o===0)i.go("ride",{character:p});else if(o===1)i.go("lobby",{character:p});else if(o===2)i.go("creator",{edit:p});else if(u)bf(p.id),i.audio.back(),i.input.rumble(.6,150),o=null,c();else{u=!0;const y=t.querySelectorAll(".card-action")[3];y&&(y.textContent="Wirklich löschen? Nochmal!",y.classList.add("danger")),i.audio.back()}}return{enter(p={}){if(e=Ln(`
        <div class="screen menu-screen ${p.fromTransition?"intro":""}">
          <div class="menu-panel">
            <div class="menu-brand">${qe(He.gameName)}</div>
            <div class="menu-heading">Wähle deinen Fahrer · ${ma(i.mode)}</div>
            <div class="menu-list"></div>
          </div>
          ${Yi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),e.querySelector(".hints").insertAdjacentHTML("beforeend",`<span class="hint hint-delete" data-act="x">${pt("X")}Löschen</span>`),i.ui.append(e),t=e.querySelector(".menu-list"),p.selectId){const y=Zi().filter(_=>(_.mode||"road")===i.mode).findIndex(_=>_.id===p.selectId);y>=0&&(s=y)}r=null,o=null,c(),a=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1),i.audio.setWind(.05)},update(p){const y=bi(i,p);Js(i,p,y,a),a=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,p),i.fx.uLines.value=We(i.fx.uLines.value,0,6,p),i.fx.uFade.value=We(i.fx.uFade.value,0,5,p);const _=i.input,x=n.length+1;if(o!==null){if(_.pressed("left")||_.pressed("right")||_.pressed("up")||_.pressed("down")){const E=_.pressed("left")||_.pressed("up")?-1:1;o=(o+E+h.length)%h.length,g(),i.audio.nav()}else _.pressed("confirm")?v():_.pressed("back")&&(m(),i.audio.back());return}_.pressed("up")&&s>0?(s--,r=null,l()):_.pressed("down")&&s<x-1?(s++,r=null,l()):_.pressed("confirm")?d():_.pressed("back")?r!==null?(r=null,l(!0),i.audio.back()):(i.audio.back(),i.go("mode")):_.pressed("x")&&s<n.length&&(r===s?(bf(n[s].id),r=null,i.audio.back(),i.input.rumble(.6,150),c()):(r=s,i.audio.error(),l(!0)))},exit(){e.remove()}}}const Ep="grandtour.minispiel.rekord",Oo=3,Mf=3;function $1(){try{return Number(localStorage.getItem(Ep))||0}catch{return 0}}function X1(i){try{localStorage.setItem(Ep,String(i))}catch{}}function j1(i){let e,t,n,s=0,r=0,a=1,o,c,l,h,u,d,f,m,g,v,p,y,_,x=!0;const E=()=>Math.min(s*.86,460),M=()=>(s-E())/2,S=()=>E()/Oo,A=F=>M()+S()*(F+.5),T=()=>r*.8,b=()=>r*Math.min(1.35,.5+f*.014);function P(){c=1,l=A(1),h=[],u=0,d=Mf,f=0,m=0,g=r*.25,v=0,_=0,y=!1}function N(){a=Math.min(2,window.devicePixelRatio||1),s=innerWidth,r=innerHeight,t.width=s*a,t.height=r*a,n.setTransform(a,0,0,a,0,0),c!==void 0&&(l=A(c))}function B(){const F=Math.floor(Math.random()*Oo),ie=Math.random()<.35+Math.min(.4,f*.01)?2:1,ee=[0,1,2].filter(ae=>ae!==F).sort(()=>Math.random()-.5);for(let ae=0;ae<ie;ae++){const Me=Math.random();h.push({lane:ee[ae],y:-60,typ:Me<.45?"huetchen":Me<.8?"loch":"schaf",wobble:Math.random()*6})}Math.random()<.75&&h.push({lane:F,y:-60,typ:Math.random()<.1?"gold":"flasche",wobble:0})}function U(F){const ie=Math.max(0,Math.min(Oo-1,c+F));ie!==c&&(c=ie,i.audio.nav())}function G(){P(),o="play",i.audio.select(),z()}function D(){o="over",i.audio.error(),i.input.rumble(.6,300),u>p&&(p=u,y=!0,X1(p),setTimeout(()=>i.audio.success(),350)),z()}function z(){const F=e.querySelector(".mg-hud");F.innerHTML=`
      <div class="mg-score">🍶 ${u}</div>
      <div class="mg-lives">${"❤️".repeat(Math.max(0,d))}${"🤍".repeat(Mf-Math.max(0,d))}</div>
      <div class="mg-best">Rekord ${p}</div>`;const ie=e.querySelector(".mg-msg");o==="ready"?ie.innerHTML=`<div class="mg-title">Flaschenjagd</div>
        <div class="mg-text">Sammle Trinkflaschen 🍶 (goldene zählen 5).<br>Weiche Hütchen, Schlaglöchern und Schafen aus!<br>
        ${i.control==="touch"?"Links oder rechts antippen = Spur wechseln.":"← → = Spur wechseln."}</div>
        <div class="mg-go">${i.control==="touch"?"Antippen zum Starten":"A drücken zum Starten"}</div>`:o==="over"?ie.innerHTML=`<div class="mg-title">${y?"Neuer Rekord!":"Sturz!"}</div>
        <div class="mg-text">Du hast <b>${u}</b> ${u===1?"Flasche":"Flaschen"} gesammelt.</div>
        <div class="mg-go">${i.control==="touch"?"Antippen für noch einmal":"A = noch einmal"}</div>`:ie.innerHTML="",ie.classList.toggle("show",o!=="play")}function k(F){if(!(F.target!==t&&!F.target.closest(".mg-msg"))){if(o!=="play"){G();return}U(F.clientX<s/2?-1:1)}}function K(){const F=M(),ie=E();n.clearRect(0,0,s,r),n.fillStyle="rgba(46, 92, 40, 0.88)",n.fillRect(F-46,0,46,r),n.fillRect(F+ie,0,46,r),n.fillStyle="#4b4b52",n.fillRect(F,0,ie,r),n.fillStyle="#f2f2f2",n.fillRect(F+4,0,5,r),n.fillRect(F+ie-9,0,5,r);const ee=46,ae=m%(ee*2);for(let Me=1;Me<Oo;Me++){const Re=F+S()*Me-2;for(let V=-ee*2+ae;V<r;V+=ee*2)n.fillRect(Re,V,4,ee)}n.fillStyle="rgba(120, 170, 70, 0.9)";for(let Me=-40+m*1%80;Me<r;Me+=80)n.fillRect(F-30,Me,8,14),n.fillRect(F+ie+20,Me+40,8,14)}function oe(F){const ie=A(F.lane),ee=S()*.36;if(n.save(),n.translate(ie,F.y),F.typ==="flasche"||F.typ==="gold")n.rotate(Math.sin(f*4+F.lane)*.25),n.fillStyle=F.typ==="gold"?"#f5c76b":"#3d8fe0",n.beginPath(),n.roundRect(-ee*.32,-ee*.55,ee*.64,ee*1.15,ee*.18),n.fill(),n.fillStyle="#fff",n.fillRect(-ee*.32,-ee*.12,ee*.64,ee*.18),n.fillStyle="#222",n.fillRect(-ee*.13,-ee*.75,ee*.26,ee*.22),F.typ==="gold"&&(n.strokeStyle="rgba(255, 240, 180, 0.9)",n.lineWidth=3,n.beginPath(),n.arc(0,0,ee*.95+Math.sin(f*8)*3,0,Math.PI*2),n.stroke());else if(F.typ==="huetchen")n.fillStyle="#ff7a1a",n.beginPath(),n.moveTo(0,-ee*.8),n.lineTo(ee*.6,ee*.6),n.lineTo(-ee*.6,ee*.6),n.closePath(),n.fill(),n.fillStyle="#fff",n.fillRect(-ee*.36,-ee*.05,ee*.72,ee*.2),n.fillStyle="#ff7a1a",n.fillRect(-ee*.75,ee*.55,ee*1.5,ee*.18);else if(F.typ==="loch")n.fillStyle="#26262b",n.beginPath(),n.ellipse(0,0,ee*.85,ee*.5,.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a3a40",n.beginPath(),n.ellipse(-ee*.15,-ee*.08,ee*.45,ee*.24,.2,0,Math.PI*2),n.fill();else if(F.typ==="schaf"){n.translate(Math.sin(f*2+F.wobble)*ee*.25,0),n.fillStyle="#f4f1ea";for(const[ae,Me]of[[-.35,-.2],[.35,-.2],[-.35,.3],[.35,.3],[0,.05],[0,-.4],[0,.5]])n.beginPath(),n.arc(ae*ee,Me*ee,ee*.38,0,Math.PI*2),n.fill();n.fillStyle="#2b2b2b",n.beginPath(),n.ellipse(0,-ee*.85,ee*.24,ee*.3,0,0,Math.PI*2),n.fill()}n.restore()}function le(){var ae;if(v>0&&Math.floor(v*12)%2===0)return;const F=S()*.42,ie=(A(c)-l)/S(),ee=((ae=i.bike.kitCol)==null?void 0:ae.jersey)||"#d23c3c";n.save(),n.translate(l+Math.sin(_*30)*_*20,T()),n.rotate(-ie*.35),n.fillStyle="#111",n.beginPath(),n.roundRect(-F*.09,-F*1.15,F*.18,F*.75,F*.08),n.roundRect(-F*.09,F*.35,F*.18,F*.75,F*.08),n.fill(),n.fillStyle="#ccc",n.fillRect(-F*.5,-F*.72,F,F*.08),n.fillStyle=typeof ee=="string"?ee:"#d23c3c",n.beginPath(),n.ellipse(0,-F*.05,F*.38,F*.55,0,0,Math.PI*2),n.fill(),n.strokeStyle="#e8b896",n.lineWidth=F*.12,n.lineCap="round",n.beginPath(),n.moveTo(-F*.3,-F*.3),n.lineTo(-F*.42,-F*.7),n.moveTo(F*.3,-F*.3),n.lineTo(F*.42,-F*.7),n.stroke(),n.fillStyle="#f5c76b",n.beginPath(),n.ellipse(0,-F*.5,F*.22,F*.27,0,0,Math.PI*2),n.fill(),n.restore()}function ye(){K();for(const F of h)oe(F);le()}function Ve(F){f+=F;const ie=b();m+=ie*F,v=Math.max(0,v-F),_=Math.max(0,_-F*2),l=We(l,A(c),14,F),g-=ie*F,g<=0&&(B(),g=r*Math.max(.24,.42-f*.003)*(.85+Math.random()*.3));const ee=T(),ae=S()*.4;let Me=!1;for(const Re of h)if(Re.y+=ie*F,!(Re.done||Math.abs(Re.y-ee)>ae||Math.abs(A(Re.lane)-l)>S()*.45)){if(Re.typ==="flasche"||Re.typ==="gold")Re.done=!0,u+=Re.typ==="gold"?5:1,i.audio.key(),Me=!0;else if(v<=0){if(Re.done=!0,d--,v=1.2,_=.5,i.input.rumble(.5,150),Me=!0,d<=0){D();return}i.audio.error()}}h=h.filter(Re=>!Re.done&&Re.y<r+80),Me&&z()}return{enter(){p=$1(),e=Ln(`
        <div class="screen minigame-screen">
          <canvas class="mg-canvas"></canvas>
          <div class="mg-hud"></div>
          <div class="mg-msg"></div>
          ${Yi([["A","Start"],["B","Zurück"]])}
        </div>`),i.ui.append(e),t=e.querySelector("canvas"),n=t.getContext("2d"),N(),addEventListener("resize",N),e.addEventListener("pointerdown",k),P(),o="ready",z(),x=!0,i.npc.speed=6,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(F){const ie=bi(i,F);Js(i,F,ie,x),x=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,F),i.fx.uFade.value=We(i.fx.uFade.value,0,5,F),i.fx.uLines.value=We(i.fx.uLines.value,0,6,F);const ee=i.input;if(ee.pressed("back")){i.audio.back(),i.go("mode",{minigame:!0});return}o==="play"?(ee.pressed("left")?U(-1):ee.pressed("right")&&U(1),Ve(Math.min(F,.05))):ee.pressed("confirm")&&G(),ye()},exit(){removeEventListener("resize",N),e.remove(),e=null}}}const Ap=[{name:"Mia",number:7,jersey:"#1fa88f",frame:"#f1f1ec",helmet:"#1fa88f",kit:"stripes",brand:"canyon",power:515,lane:-1.6},{name:"Leo",number:21,jersey:"#f4a12a",frame:"#f6f6f6",paint:"team",bar:"#16161b",helmet:"#16161b",brand:"colnago",power:495,lane:.3},{name:"Emma",number:33,jersey:"#8a3ffc",frame:"#d8d8de",helmet:"#8a3ffc",kit:"stripes",brand:"rose",power:470,lane:-.6},{name:"Ben",number:52,jersey:"#2f7cf6",frame:"#b8222c",helmet:"#f6f6f6",brand:"cervelo",power:445,lane:1.4}],gc=78,Sf=9.81,Is=8;let Ii=null;function Cp(){if(Ii)return Ii;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");return e.strokeStyle="#ffffff",e.lineWidth=14,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(18,40),e.lineTo(64,88),e.lineTo(110,40),e.stroke(),Ii=new xn(i),Ii.wrapS=Ii.wrapT=An,Ii.repeat.set(1,5),Ii}function q1(){const i=new on(1.3,Is-.8,1,8),e=i.attributes.position,t=[];for(let r=0;r<e.count;r++){const o=1-(e.getY(r)+(Is-.8)/2)/(Is-.8);t.push(.45*o,.9*o,1*o)}i.setAttribute("color",new Xe(t,3)),i.rotateX(-Math.PI/2);const n=new xa({map:Cp(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ur}),s=new pe(i,n);return s.position.set(0,.07,-.8-(Is-.8)/2),s.renderOrder=2,s.visible=!1,s}const Y1=[0,5,5,10],Zt={};class El{constructor(e,t=Ap){this.app=e,this.list=t.map((n,s)=>{var o;const r=new ah;if(r.setPlate(n.number,n.name),r.applyLook(n),r.root.visible=!1,e.world.scene.add(r.root),n.remote){const c=(o=e.cloneRider)==null?void 0:o.call(e);c&&r.useModel(c),r.setTires(e.mode)}const a=q1();return r.root.add(a),{...n,bike:r,draftZone:a,grid:Y1[s]??10+s*2,d:0,v:0,lat:n.lane,heading:0,lean:0,finished:null}})}reset(e){this.startS=e;for(const t of this.list)t.d=-t.grid,t.v=0,t.lat=t.lane,t.lean=0,t.finished=null,t.net=null,t.wobble=Math.random()*10,t.bike.root.visible=!0,this.place(t,0,0),t.heading=Zt.heading}draftFor(e,t){let n=0,s=null;for(const r of this.list){if(!r.bike.root.visible||r.v<3)continue;const a=Math.sin(r.heading),o=Math.cos(r.heading),c=e-r.x,l=t-r.z,h=-(c*a+l*o),u=Math.abs(c*o-l*a);if(h<.8||h>Is)continue;const d=.7+h*.05;if(u>d)continue;const f=(1-(h-.8)/(Is-.8))*(1-u/d*.5);f>n&&(n=f,s=r)}return{strength:n,rival:s}}showDraft(e,t,n){Cp().offset.y+=n*2.2;for(const s of this.list){const r=s.draftZone.material,a=s===e?.35+.55*t:0;r.opacity=We(r.opacity,a,8,n),s.draftZone.visible=r.opacity>.01}}updateRemote(e,t){const n=e.net;if(!n)return;const s=1-Math.exp(-12*t),r=Math.min(.25,(performance.now()-n.at)/1e3),a=n.x+Math.sin(n.heading)*n.speed*r,o=n.z+Math.cos(n.heading)*n.speed*r;(e.x==null||Math.hypot(a-e.x,o-e.z)>15)&&(e.x=a,e.z=o,e.h=n.h),e.x+=(a-e.x)*s,e.z+=(o-e.z)*s,e.h+=(n.h-e.h)*s,e.heading+=Math.atan2(Math.sin(n.heading-e.heading),Math.cos(n.heading-e.heading))*s,e.lean+=(n.lean-e.lean)*s,e.pitch=n.pitch,e.v=n.speed,e.finished=n.f;const c=e.bike.root;c.position.set(e.x,e.h,e.z),c.rotation.set(-e.pitch,e.heading,e.lean),e.bike.update(t,e.v,n.crank,n.steer)}dispose(){for(const e of this.list)e.bike.root.removeFromParent();this.list=[]}hide(){for(const e of this.list)e.bike.root.visible=!1,e.draftZone.material.opacity=0,e.draftZone.visible=!1}progress(e){return e.remote?e.net?e.net.p:-20:e.d-(this.app.world.length-this.startS)}place(e,t,n){if(this.app.world.poseAt(this.startS+e.d,e.lat,Zt),t>0){const a=Math.atan2(Math.sin(Zt.heading-e.heading),Math.cos(Zt.heading-e.heading))/t;e.lean=We(e.lean,ot(-Math.atan(e.v*a/9.81),-.5,.5),6,t)}e.heading=Zt.heading;const r=e.bike.root;r.position.set(Zt.x,Zt.h,Zt.z),r.rotation.set(-Zt.pitch,Zt.heading,e.lean),e.bike.update(t,e.v,n,0),e.x=Zt.x,e.z=Zt.z,e.pitch=Zt.pitch,e.h=Zt.h}update(e,t,n,s,r){for(const a of this.list){if(a.remote){this.updateRemote(a,e);continue}let o=0;if(t){o=a.power,o*=1+Math.sin(r*.23+a.wobble)*.05;const v=n.progress-this.progress(a);o*=1+ot(v/300,-.15,.12),a.finished!=null&&(o=120)}const c=a.v,l=Math.min(o/Math.max(c,2.5),340),h=.5*1.2*.36*c*c,u=(l-h-.005*gc*Sf-gc*Sf*Math.sin(a.pitch||0))/gc;a.v=Math.max(0,c+u*e),t||(a.v=0),a.d+=a.v*e;const d=this.progress(a);let f=a.lane;const m=n.progress-d;m>-2&&m<5&&Math.abs(n.lateral-a.lane)<1.1&&(f=a.lane+(a.lane>n.lateral?1.3:-1.3)),a.lat=We(a.lat,ot(f,-3,3),2,e),t&&a.finished==null&&d>=s&&(a.finished=r);const g=a.v>.5?a.v/Xt/3.6:0;this.place(a,e,g)}}}const mr=16,Tf=new Ne,Z1=new Ne,K1=new St,wf=new Bt,J1=new L,Q1=new L(1,1,1);function eM(i,e){for(let t=i;t&&t!==e;t=t.parent)if(!t.visible)return!1;return!0}class tM{constructor(e,t){this.count=t,this.group=new rt,e.add(this.group);const n=new ah;n.applyLook({jersey:"#ffffff",frame:"#ffffff",helmet:"#ffffff",kit:"plain",paint:"solid",bar:"#16161b"}),n.setTires("road");const s=n.mats,r=new Map([[s.jersey,"jersey"],[s.sleeve,"jersey"],[s.jerseyPlain,"jersey"],[s.helmet,"helmet"],[s.frame,"frame"]]),a=[];n.root.traverse(o=>{if(!o.isMesh||!eM(o,n.root))return;const c=Array.isArray(o.material)?o.material[0]:o.material;c!=null&&c.map&&c.map===n.plateTex||a.push(o)}),this.bilder=[];for(let o=0;o<mr;o++)n.crankAngle=o/mr*Math.PI*2,n.wheelAngle=o/mr*Math.PI*2,n.update(0,0,0,0),n.root.updateMatrixWorld(!0),this.bilder.push(a.map(c=>c.matrixWorld.clone()));this.meshes=a.map(o=>{const c=new sa(o.geometry,o.material,t);c.castShadow=o.castShadow,c.receiveShadow=o.receiveShadow,c.frustumCulled=!1;const l=r.get(Array.isArray(o.material)?o.material[0]:o.material);return l&&(c.instanceColor=new hl(new Float32Array(t*3).fill(1),3),c.userData.rolle=l),this.group.add(c),c}),this.crank=new Float32Array(t).map(()=>Math.random()*Math.PI*2)}setColors(e,t){const n=new ve;for(const s of this.meshes){const r=s.userData.rolle;r&&(s.setColorAt(e,n.set(t[r])),s.instanceColor.needsUpdate=!0)}}set(e,t,n,s,r,a,o,c,l,h=!0){h&&c>.3&&(this.crank[e]+=c/.34/3.6*l);const u=Math.floor((this.crank[e]/(Math.PI*2)%1+1)%1*mr)%mr;wf.set(-a,r,o),Tf.compose(J1.set(t,n,s),K1.setFromEuler(wf),Q1);const d=this.bilder[u];for(let f=0;f<this.meshes.length;f++)this.meshes[f].setMatrixAt(e,Z1.multiplyMatrices(Tf,d[f]))}commit(){for(const e of this.meshes)e.instanceMatrix.needsUpdate=!0}set visible(e){this.group.visible=e}}const ws="Team Blitz",Es=(i,e)=>({name:i,number:e,jersey:"#8e2b36",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#8e2b36"}),nM=[Es("Felix",12),Es("Noah",13),Es("Leon",15),Es("Jonas",11),Es("Elias",14),Es("Finn",16)],zo=["Felix","Noah"],Ef=[["#2f7cf6","#f6f6f6","#2f7cf6"],["#1fa88f","#f1f1ec","#f1f1ec"],["#d23c3c","#16161b","#d23c3c"],["#f4d21c","#16161b","#16161b"],["#8a3ffc","#d8d8de","#8a3ffc"],["#ff8c1a","#16161b","#ff8c1a"],["#16161b","#d23c3c","#d23c3c"],["#3bceac","#16161b","#3bceac"]],Af="#efeee9",gr=44,vc=2500,iM=600,sM=260,_c=11.5,rM=10.8,vr=13.2,oM=7.4,aM=15.5,cM=17.4,lM=.5,Cf=3.6,_r=-1.5,xc=[{name:"Hinten",dist:5.2,height:2.7},{name:"Weit",dist:9,height:3.6},{name:"Von oben",dist:6,height:11}];function hM(i){let e,t,n=null,s=null,r=null,a=null;const o={},c={},l=[];let h=0,u=0,d=0;const f=V=>e.querySelector(V);function m(V,Y=""){const j=f(".banner");j.innerHTML=`<div>${V}</div>${Y?`<small>${Y}</small>`:""}`,j.classList.remove("show"),j.offsetWidth,j.classList.add("show")}function g(V){const Y=f(".story-tipp");Y.dataset.text!==V&&(Y.dataset.text=V,Y.innerHTML=V,Y.classList.toggle("show",!!V))}const v=()=>i.control==="touch"?"nach oben wischen":i.control==="keys"?"<b>W</b> halten":`${pt("A")} halten`,p=()=>i.control==="touch"?"nochmal nach oben wischen":i.control==="keys"?"<b>Leertaste</b>":pt("X"),y=()=>i.control==="touch"?"links/rechts halten":i.control==="keys"?"<b>A</b> <b>D</b>":pt("LT")+pt("RT");function _(V,Y,j){const H=document.createElement("canvas");H.width=V,H.height=Y,j(H.getContext("2d"),V,Y);const C=new xn(H);return C.colorSpace=_t,C.anisotropy=4,C}function x(V,Y,j,H,C){i.world.poseAt(V,0,c);const te=_(1024,192,(W,Q,ce)=>{W.fillStyle=j,W.fillRect(0,0,Q,ce),W.fillStyle=H,W.font='900 120px "Barlow Condensed", Arial, sans-serif',W.textAlign="center",W.textBaseline="middle",W.fillText(C,Q/2,ce/2+6)}),re=Y*2+1.6,se=new Ue({color:j}),Se=new Ue({map:te}),_e=new pe(new nt(re,1.2,.3),[se,se,se,se,Se,Se]),I=new rt;I.position.set(c.x,c.h,c.z),I.rotation.y=c.heading,_e.position.y=4.6,_e.castShadow=!0,I.add(_e);const w=new Ue({color:"#e9e9e4",roughness:.5});for(const W of[-1,1]){const Q=new pe(new at(.22,.26,5.2,10),w);Q.position.set(W*(re/2-.2),2.6,0),Q.castShadow=!0,I.add(Q)}return I}function E(V){const Y=new rt,j=i.world;j.poseAt(V,0,c);const H=j.nearest(c.x,c.z),C=H.found?j.rhArr[H.i]:j.RH,de=new pe(new on(C*2,.45),new Ue({color:"#f2f2ee",roughness:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));de.rotation.x=-Math.PI/2,de.receiveShadow=!0;const te=new rt;te.position.set(c.x,c.h+.03,c.z),te.rotation.y=c.heading,te.add(de),Y.add(te),Y.add(x(V,C,"#2fa37a","#ffffff","START · GRAND TOUR"));const re=V+Math.min(vc,i.world.length-200)-1e3;j.poseAt(re,0,c);const se=j.nearest(c.x,c.z);Y.add(x(re,se.found?j.rhArr[se.i]:j.RH,"#d8262e","#ffffff","▼  NOCH 1 KM  ▼"));const Se=V+Math.min(vc,i.world.length-200);for(const _e of[500,300,200,100]){const I=_(256,256,(w,W,Q)=>{w.fillStyle="#ffffff",w.fillRect(0,0,W,Q),w.strokeStyle="#d8262e",w.lineWidth=18,w.strokeRect(9,9,W-18,Q-18),w.fillStyle="#16161b",w.font='900 110px "Barlow Condensed", Arial, sans-serif',w.textAlign="center",w.textBaseline="middle",w.fillText(String(_e),W/2,Q/2-18),w.font='800 64px "Barlow Condensed", Arial, sans-serif',w.fillText("m",W/2,Q/2+62)});for(const w of[-1,1]){j.poseAt(Se-_e,0,c);const W=j.nearest(c.x,c.z),Q=(W.found?j.shArr[W.i]:j.SH)+.6;j.poseAt(Se-_e,w*Q,c);const ce=new rt;ce.position.set(c.x,j.terrainHeight(c.x,c.z),c.z),ce.rotation.y=c.heading+Math.PI;const ne=new pe(new nt(.9,.9,.05),[0,0,0,0,1,1].map(be=>be?new Ue({map:I}):new Ue({color:"#ffffff"})));ne.position.y=2,ne.castShadow=!0;const De=new pe(new at(.04,.04,2,6),new Ue({color:"#b9bcc2",metalness:.7,roughness:.4}));De.position.y=1,ce.add(ne,De),Y.add(ce)}}return j.scene.add(Y),Y}function M(){const V=i.world,Y=V.length;o.sZiel=Y-2.4,o.sStart=o.sZiel-Math.min(vc,Y-200),a!==V&&(n==null||n.dispose(),s&&s.group.removeFromParent(),r==null||r.removeFromParent(),n=new El(i,nM.map(de=>({...de,power:0,lane:_r}))),s=new tM(V.scene,gr),r=E(o.sStart),a=V),n.reset(0),n.startS=0,s.visible=!0,r.visible=!0;const j=[];for(const de of[-2.6,-1.3,1.3,2.6])j.push({dz:0,lat:de});for(let de=1;j.length<gr+4;de++)for(const te of[-2.6,-1.3,0,1.3,2.6])(de>2||te!==0)&&j.push({dz:-1.9*de,lat:te});const H=[j[4],j[5],j[8],j[9],j[12],j[13]],C=j.filter(de=>!H.includes(de));l.length=0;for(let de=0;de<gr;de++){const te=C[de],re=Ef[de%Ef.length];s.setColors(de,{jersey:re[0],frame:re[1],helmet:re[2]}),l.push({dz:te.dz,lat:te.lat,latOff:0,jit:Math.random()*100,s:o.sStart+te.dz-70-Math.random()*15,v:0,anfahrt:!0})}o.team=n.list.map((de,te)=>({r:de,dz:H[te].dz,lat:H[te].lat,latT:H[te].lat,s:o.sStart+H[te].dz-72-te*3,v:0,anfahrt:!0,ziel:null,weg:!1,passT:0})),o.reihe=[...o.team],Object.assign(o,{phase:"anfahrt",t:0,raceTime:0,s:o.sStart-55,v:0,lat:0,lean:0,steerVis:0,cruise:!1,pf:o.sStart,vf:0,cd:5,lastCount:6,idle:0,surge:0,meldung:0,draft:0,sprint:!1,sprintGap:null,sprintT:0,winnerShown:!1,winner:null,meZiel:null,paused:!1,showResult:!1,feldWeg:!1,tippAttacke:0,hPrev:null,konterT:0,konterDone:!1,konterOk:!1,zurueck:!1,jagdT:0,jagdDone:!1,allesGeben:!1,einKm:!1,foto:!1,fotoNach:null,fotoCamDa:!1,slow:1,slowZiel:1,schild200:!1,schild100:!1,jubelT:0,bergAttacke:!1,bergStart:!1,bergOben:!1,konterBoost:2.8})}const S=()=>o.team.find(V=>V.r.name==="Jonas"),A=()=>o.reihe[0],T=()=>o.reihe.reduce((V,Y)=>Math.min(V,Y.s),1/0);function b(V){const Y=i.world.serp;return Y?V>=Y.sStart&&V<=Y.sTop?oM/vr:V>Y.sTop&&V<Y.sTop+520?aM/vr:1:1}function P(V,Y){i.world.poseAt(o.s,o.lat,c);const H=i.bike.root;H.position.set(c.x,c.h,c.z),H.rotation.set(-c.pitch,c.heading,o.lean),i.focus.set(c.x,c.h,c.z),i.bike.update(V,o.v,Y,o.steerVis),o.x=c.x,o.z=c.z,o.h=c.h}const N=(V,Y=2.5)=>Math.sqrt(Math.max(0,2*Y*V));function B(V){const Y=i.world,j=o.raceTime;for(let H=0;H<l.length;H++){const C=l[H];let de;if(C.anfahrt){const _e=o.sStart+C.dz,I=_e-C.s;o.phase==="anfahrt"?C.v=0:C.v=Math.min(9.5,N(I,2.2),C.v+4*V),C.s=Math.min(_e,C.s+C.v*V),I<.05&&(C.s=_e,C.v=0,C.anfahrt=!1)}else o.phase==="aufstellen"||o.phase==="countdown"?C.v=0:(de=o.pf+C.dz+Math.sin(j*.37+C.jit)*.7,C.v=Math.max(0,o.vf+ot((de-C.s)*1.2,-2,2)),o.phase==="auslaufen"&&C.s>o.sZiel+30&&(C.v=Math.max(0,C.v-3)),C.s+=C.v*V);let te=C.lat+Math.sin(j*.21+C.jit)*.25;Math.abs(C.s-o.s)<2.2&&Math.abs(te-o.lat)<1.1&&(te=o.lat+(te>=o.lat?1.15:-1.15));for(const _e of o.team)Math.abs(C.s-_e.s)<2&&Math.abs(te-_e.lat)<1&&(te=_e.lat+(te>=_e.lat?1.1:-1.1));C.latOff=We(C.latOff,ot(te,-3,3)-C.lat,2.5,V),Y.poseAt(C.s,C.lat+C.latOff,c);const re=i.camera.position,se=Math.hypot(c.x-re.x,c.z-re.z)<1.6&&o.phase!=="aufstellen"&&o.phase!=="countdown",Se=C.hPrev==null||V<=0?0:Math.atan2(Math.sin(c.heading-C.hPrev),Math.cos(c.heading-C.hPrev))/V;C.hPrev=c.heading,C.lean=We(C.lean||0,ot(-Math.atan(C.v*Se/9.81),-.5,.5),4,V),s.set(H,c.x,c.h-(se?5:0),c.z,c.heading,c.pitch,C.lean,C.v,V,C.v>.3)}s.commit()}function U(V){const Y=S();for(let j=0;j<o.team.length;j++){const H=o.team[j];if(H.anfahrt){const C=o.sStart+H.dz,de=C-H.s;o.phase==="anfahrt"?H.v=0:H.v=Math.min(9.5,N(de,2.2),H.v+4*V),H.s=Math.min(C,H.s+H.v*V),de<.05&&(H.s=C,H.v=0,H.anfahrt=!1)}else if(o.phase==="aufstellen"||o.phase==="countdown")H.v=0;else if(o.phase==="feld"){const C=o.pf+H.dz;H.v=Math.max(0,o.vf+ot((C-H.s)*1.2,-2,2)),H.s+=H.v*V}else{const C=A(),de=b(C.s);let te=(o.phase==="attacke"&&o.t<7?15.2:vr*de)+(o.konterT>0?o.konterBoost:0)+(o.allesGeben?.9:0);const re=o.phase==="sprint"||o.phase==="auslaufen",se=o.reihe.indexOf(H);if(re&&H===Y){let Se=o.sprintT<3.2?Math.min(18.8,vr+o.sprintT*3.2):cM;o.phase==="auslaufen"&&Y.s>o.sZiel+5&&(Se=Math.max(4,Y.v-1.5*V)),H.v=We(H.v,Se,2,V),H.latT=_r}else if(re)H.latT=.3+o.team.indexOf(H)%4*.55,H.v=We(H.v,H.s>o.sZiel+5?4:H.weg?11:12.6,1.2,V);else if(H.weg)H.latT=_r+1.6,H.v=We(H.v,Math.max(5.5,vr*b(H.s)-2.2),1,V);else if(se===0)H.v=We(H.v,te,2,V),H.latT=_r;else{const Se=o.reihe[se-1].s-2.3;H.v=We(H.v,Math.min(te+3,te+ot((Se-H.s)*1.3,-2,4)),3,V),H.latT=_r}for(const Se of o.team)Se!==H&&Se.s-H.s>0&&Se.s-H.s<3.5&&Math.abs(Se.lat-H.lat)<.8&&H.v>Se.v+.3&&(H.passT=1.2);H.passT=Math.max(0,H.passT-V),H.passT>0&&!H.weg&&(H.latT+=1),H.s+=H.v*V}H.lat=We(H.lat,H.latT,1.5,V),H.ziel==null&&H.s>=o.sZiel&&o.raceTime>0&&(H.ziel=o.raceTime-(H.s-o.sZiel)/Math.max(H.v,1)),H.r.d=H.s,H.r.lat=H.lat,H.r.v=H.v,n.place(H.r,V,H.v>.5?H.v/Xt/Cf:0)}}function G(){return n.draftFor(o.x,o.z)}function D(){let V=0;for(const Y of l)Y.s>o.s&&V++;for(const Y of o.team)(Y.ziel!=null?o.meZiel==null||Y.ziel<o.meZiel:Y.s>o.s)&&V++;return V+1}function z(){const V=S().ziel,Y=[],j=se=>se==null?"–":se-V<.05?Un(se):`+${(se-V).toFixed(1).replace(".",",")} s`,H=[...o.team.map(se=>({name:se.r.name,number:se.r.number,color:se.r.jersey,t:se.ziel??o.raceTime+(o.sZiel-se.s)/Math.max(se.v,5),sub:ws})),{name:t.name,number:t.number,color:Af,t:o.meZiel,me:!0}].sort((se,Se)=>se.t-Se.t);H.forEach((se,Se)=>Y.push(`<div class="result-row ${se.me?"me":""}">
        <b>${Se+1}.</b><i style="background:${se.color}"></i><span class="mini-plate"><span>${qe(se.number)}</span></span>
        <span class="result-name">${qe(se.name)}${se.sub?` <small>${qe(se.sub)}</small>`:""}</span>
        <span class="result-time">${j(se.t)}</span></div>`));const C=o.raceTime+(o.sZiel-o.pf)/Math.max(o.vf,8),de=Math.floor((C-V)/60),te=Math.round((C-V)%60);Y.push(`<div class="result-row"><b>${H.length+1}.</b><i style="background:#888"></i><span class="result-name">Das Feld · ${gr} Fahrer</span>
      <span class="result-time">+${de}:${String(te).padStart(2,"0")}</span></div>`),f(".result-list").innerHTML=Y.join("");const re=o.meZiel-V;f(".result-title").innerHTML=`Platz 2 – nur ${re.toFixed(1).replace(".",",")} Sekunden!`,d=0,k(),f(".result").classList.add("show"),o.showResult=!0}function k(){e.querySelectorAll(".result-item").forEach((V,Y)=>V.classList.toggle("selected",Y===d))}function K(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((V,Y)=>V.classList.toggle("selected",Y===u))}function oe(V){o.paused=V,u=0,f(".pause").classList.toggle("show",V),K(),i.audio.setWind(0),V?i.audio.back():i.audio.select()}function le(V){const Y=f(".countdown");Y.textContent=V>0?V:"LOS!",Y.classList.toggle("go",V<=0),Y.classList.remove("show"),Y.offsetWidth,Y.classList.add("show"),V>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}const ye=new L;function Ve(V){const Y=i.world;Y.poseAt(o.s+7,1.2,c),ye.set(c.x,c.h+2.4,c.z),i.camera.position.lerp(ye,1-Math.exp(-2.5*V)),Y.poseAt(o.s-9,0,c),i.camera.lookAt(c.x,c.h+.8,c.z),i.camera.fov=We(i.camera.fov,55,3,V),i.camera.updateProjectionMatrix()}let F=null;function ie(V,Y=!1){const j=xc[h],H=i.bike.root,C=H.rotation.y;F=Y||F==null?C:F+Math.atan2(Math.sin(C-F),Math.cos(C-F))*(1-Math.exp(-4*V));const de=Math.sin(F),te=Math.cos(F),re=i.camera;ye.set(H.position.x-de*j.dist,H.position.y+j.height,H.position.z-te*j.dist);const se=i.world.terrainHeight(ye.x,ye.z)+.7;ye.y<se&&(ye.y=se),Y?re.position.copy(ye):re.position.lerp(ye,1-Math.exp(-10*V)),re.lookAt(H.position.x+de*4,H.position.y+1,H.position.z+te*4);const Se=56+Math.min(o.v,20)*.6+(o.sprint&&o.phase==="sprint"?8:0);re.fov=Y?Se:We(re.fov,Se,3,V),re.updateProjectionMatrix()}const ee=new L;function ae(V){const Y=i.world;Y.poseAt(o.sZiel,0,c);const j=Y.nearest(c.x,c.z),H=(j.found?Y.rhArr[j.i]:Y.RH)+.9;Y.poseAt(o.sZiel-.8,H,c),ee.set(c.x,c.h+1.25,c.z),o.fotoCamDa?i.camera.position.lerp(ee,1-Math.exp(-6*V)):(o.fotoCamDa=!0,i.camera.position.copy(ee));const C=S().r.bike.root.position,de=i.bike.root.position;i.camera.lookAt(de.x+(C.x-de.x)*.07,de.y+.9,de.z+(C.z-de.z)*.07),i.camera.fov=We(i.camera.fov,62,4,V),i.camera.updateProjectionMatrix()}function Me(V){for(let Y=0;Y<V;Y++)i.audio.tone(58,.12,{type:"sine",vol:.35,when:Y*.75}),i.audio.tone(52,.12,{type:"sine",vol:.28,when:Y*.75+.22})}function Re(V){o.phase=V,o.t=0}return{enter(V={}){i.world.kind!=="road"&&i.worlds.road&&i.useWorld("road"),i.mode="road";const Y=Zi();t=V.character||Y.find(j=>(j.mode||"road")==="road")||Y[0]||{id:null,name:"Du",number:1,jersey:"#d23c3c"},i.bike.setPlate(t.number,t.name),i.bike.applyLook({...t,jersey:Af}),i.bike.setTires("road"),e=Ln(`
        <div class="screen ride-screen story-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Rennen</label><b class="story-phase">Zum Start</b></div>
            <div class="hud-box"><label>Ziel in</label><b class="story-rest">–</b></div>
            <div class="hud-box story-gap-box"><label>Vorsprung aufs Feld</label><b class="story-gap">–</b></div>
          </div>
          <div class="view-toast"></div>
          <div class="draft-badge">
            <span class="draft-icon">≋</span>
            <div class="draft-text"><b>Windschatten</b><small class="draft-name"></small></div>
            <div class="draft-meter"><i></i></div>
          </div>
          <div class="cruise-badge">${pt("B")} Dauertreten an</div>
          <div class="story-tipp"></div>
          <div class="speedo">
            <svg viewBox="0 0 200 200">
              <circle class="speedo-bg" cx="100" cy="100" r="80" pathLength="100"/>
              <circle class="speedo-fill" cx="100" cy="100" r="80" pathLength="100"/>
            </svg>
            <div class="speedo-val"><b>0</b><span>km/h</span></div>
          </div>
          <button class="touch-pause" data-act="pause" aria-label="Pause">❚❚</button>
          <div class="banner"></div>
          <div class="countdown"></div>
          <div class="result">
            <div class="pause-box result-box">
              <h2 class="result-title"></h2>
              <div class="result-list"></div>
              <div class="pause-item result-item">Nochmal fahren</div>
              <div class="pause-item result-item">Zurück</div>
            </div>
          </div>
          <div class="pause">
            <div class="pause-box">
              <h2>Pause</h2>
              <div class="pause-item">Weiterfahren</div>
              <div class="pause-item">Rennen beenden</div>
            </div>
          </div>
        </div>`),i.ui.append(e),e.querySelectorAll(".pause-item:not(.result-item)").forEach((j,H)=>j.addEventListener("click",()=>{u=H,K(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((j,H)=>j.addEventListener("click",()=>{d=H,k(),i.input.inject("confirm")})),M(),h=0,P(0,0),U(0),B(0),F=null,ie(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45),m("Das große Rennen","Fahr zum Start!"),i.story=o},update(V){const Y=i.input;if(V=Math.min(V,.05),i.fx.uFade.value=We(i.fx.uFade.value,0,3,V),i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,V),Y.touchRide=!o.paused&&!o.showResult,o.paused){Y.pressed("up")||Y.pressed("down")?(u=1-u,K(),i.audio.nav()):Y.pressed("back")||Y.pressed("start")?oe(!1):Y.pressed("confirm")&&(u===0?oe(!1):(i.audio.select(),i.go("mode",{minigame:!0})));return}if(o.showResult){if(Y.pressed("up")||Y.pressed("down"))d=1-d,k(),i.audio.nav();else if(Y.pressed("confirm")){i.audio.select(),d===0?i.go("story",{character:t}):i.go("mode",{minigame:!0});return}}else if(Y.pressed("pause")||Y.pressed("start")){oe(!0);return}const j=V;o.slow=We(o.slow,o.slowZiel,5,j),o.fotoNach!=null&&(o.fotoNach-=j,o.fotoNach<=0&&(o.fotoNach=null,o.slowZiel=1,m("Platz 2!",`Nur ${(o.meZiel-(S().ziel??o.meZiel)).toFixed(1).replace(".",",")} Sekunden hinter ${S().r.name}`),i.audio.success(),i.input.rumble(.8,400),setTimeout(()=>e&&o.phase==="auslaufen"&&z(),3e3))),V*=o.slow;const H=o.phase==="sprint"&&o.sprint||o.konterT>0&&o.konterOk?.55:0;if(i.fx.uLines.value=We(i.fx.uLines.value,H,4,j),(o.phase==="sprint"||o.phase==="auslaufen"&&o.t<4)&&(o.jubelT-=j,o.jubelT<=0)){const ue=ot(1-(o.sZiel-o.s)/320,.2,1);o.jubelT=.35,i.audio.noiseBurst(.7,{vol:.05+.12*ue,freq:700+Math.random()*500,type:"bandpass",q:.7})}if(o.t+=V,["feld","attacke","flucht","sprint","auslaufen"].includes(o.phase)&&(o.raceTime+=V),Y.pressed("klingel")&&i.audio.klingel(),Y.pressed("cruise")&&(o.cruise=!o.cruise,f(".cruise-badge").classList.toggle("on",o.cruise),o.cruise?i.audio.select():i.audio.back()),Y.pressed("view")){h=(h+1)%xc.length,i.audio.nav();const ue=f(".view-toast");ue.textContent=`Kamera: ${xc[h].name}`,ue.classList.remove("show"),ue.offsetWidth,ue.classList.add("show")}const C=o.cruise||Y.throttle>.1,de=Y.pressed("x")||Y.pressed("sprint"),te=["feld","attacke","flucht","sprint"].includes(o.phase);let re=o.v;if(o.phase==="anfahrt"){const ue=o.sStart-o.s;re=Math.min(C?6.5:Math.max(0,o.v-1.5*V),N(ue,2.5)),o.idle=C?0:o.idle+V,g(o.idle>2.5&&o.v<.5?`Zum Losfahren ${v()}`:""),ue<.08&&(o.s=o.sStart,o.v=0,re=0,Re("aufstellen"),g(""),m("Startaufstellung","Die anderen Fahrer kommen …"),f(".story-phase").textContent="Aufstellen")}else if(o.phase==="aufstellen")re=0,o.lat=We(o.lat,0,2,V),l.every(Te=>!Te.anfahrt)&&o.team.every(Te=>!Te.anfahrt)&&o.t>2&&(Re("countdown"),f(".story-phase").textContent="Gleich geht’s los");else if(o.phase==="countdown"){re=0,o.cd-=V;const ue=Math.ceil(o.cd);ue!==o.lastCount&&(o.lastCount=ue,le(ue)),ue<=0&&(Re("feld"),o.cruise=!1,f(".story-phase").textContent="Im Feld",setTimeout(()=>e&&o.phase==="feld"&&g(`Treten: ${v()} · Lenken: ${y()}`),1200),setTimeout(()=>e&&g(""),7e3))}else if(o.phase==="feld"){const ue=Math.min(_c,o.raceTime*2.4);o.vf=ue+ot((o.s-o.pf)*.9,-1.5,3),o.pf+=o.vf*V,de&&(o.surge=2),o.surge=Math.max(0,o.surge-V),re=o.surge>0?ue+5:C?ue+2:ue-2.5,o.s>o.pf+3.5&&(o.s=o.pf+3.5,o.v=Math.min(o.v,o.vf),o.meldung-=V,o.meldung<=0&&(C||o.surge>0)&&(o.meldung=6,m("Kein Ausreißen!","Das Feld lässt dich nicht wegfahren"))),o.s<o.pf-8&&(re=Math.max(re,o.vf+1.2)),o.pf-o.sStart>=iM&&(Re("attacke"),m(`Attacke von ${ws}!`,"Schnell, häng dich in ihren Windschatten!"),i.audio.whoosh(1.4),i.input.rumble(.7,300),f(".story-phase").textContent="Ausreißer!")}else if(o.phase==="attacke"||o.phase==="flucht"||o.phase==="sprint"){o.vf=We(o.vf,(o.jagdT>0?17:rM)*b(o.pf),.6,V),o.pf+=o.vf*V;const ue=S(),Te=o.phase==="sprint"?ue:A(),$e=o.sZiel-ue.s,we=i.world.serp,Ye=T(),je=Ye>o.s+.5,Ee=G();if(o.draft=We(o.draft,Ee.rival?Ee.strength:0,5,V),o.phase!=="sprint"){if(je?o.draft>.2?re=C?Te.v+1.5:Te.v-.3:re=C?Te.v-.6:o.vf:re=Math.min(C?_c+.8:_c,Te.v-1.5),je&&o.s>Ye-2&&(o.s=Ye-2,o.v=Math.min(o.v,o.reihe[o.reihe.length-1].v)),je&&o.s<Ye-16&&(re=Math.max(re,Te.v+.6)),je&&o.draft<.2&&o.raceTime>0?(o.tippAttacke+=V,o.tippAttacke>.6&&g(`Lenk hinter die <b style="color:#e0607a">weinroten Trikots</b> (${y()}) und tritt!`)):(o.tippAttacke=0,g(je&&!C?`Weiter treten: ${v()}`:"")),o.phase==="attacke"&&o.t>10&&Re("flucht"),o.phase==="flucht"){if(!o.konterDone&&(we?A().s>we.sStart-230:$e<1080)&&(o.konterDone=!0,o.konterBoost=2.8,o.konterT=6,o.konterOk=!1,m(`${ws} verschärft das Tempo!`,`Schnell SPRINT (${p()}), sonst bist du weg!`),i.audio.whoosh(1.3),i.input.rumble(.7,300),Me(3)),o.konterT>0){if(o.konterT-=V,de&&!o.konterOk&&(o.konterOk=!0,m("Stark!","Du bleibst dran!"),i.audio.select(),i.input.rumble(.6,200)),o.konterOk?re=Te.v+1.2:(re=Math.min(re,Te.v-2.4),g(`SPRINT: ${p()}!`)),o.konterT<=0&&!o.konterOk){o.zurueck=!0,m("Eine Lücke!","Kämpf dich zurück – tritt!");for(const O of o.team)O.weg&&(O.passT=0)}}else o.zurueck&&(re=C?Te.v+1.8:Te.v-.5,g(`Kämpf dich zurück: ${v()}`),Ye-o.s<3.2&&(o.zurueck=!1,g(""),m("Wieder dran!","Puh, geschafft"),i.audio.success()));if(we&&!o.bergStart&&A().s>we.sStart&&(o.bergStart=!0,m("Der Anstieg!","Serpentinen – jetzt wird es hart"),f(".story-phase").textContent="Berg!"),we&&!o.bergAttacke&&A().s>we.sStart+(we.sTop-we.sStart)*.35){o.bergAttacke=!0;const O=zo.map(me=>o.team.find(q=>q.r.name===me));for(const me of o.team)me.weg=me!==ue&&!O.includes(me);o.reihe=[ue,...O],o.konterBoost=1.9,o.konterT=8,o.konterOk=!1,o.zurueck=!1,m("Jonas attackiert am Berg!",`Nur ${zo.join(" und ")} kommen mit – SPRINT (${p()})!`),i.audio.whoosh(1.5),i.input.rumble(.8,400),Me(4)}if(we&&o.bergAttacke&&!o.bergOben&&ue.s>we.sTop+30){o.bergOben=!0;const O=zo.map(me=>o.team.find(q=>q.r.name===me));o.reihe=[O[0],ue,O[1]],m("Oben!",`${zo[0]} führt jetzt, Jonas sitzt an zweiter Stelle`),f(".story-phase").textContent="Abfahrt"}o.s<Ye-30&&(re=Math.max(re,Te.v+.8)),!o.jagdDone&&$e<820&&(o.jagdDone=!0,o.jagdT=13,m("Achtung!","Das Feld jagt euch!"),i.audio.tone(330,.4,{type:"sawtooth",vol:.06,slideTo:220}),Me(4)),o.jagdT>0&&(o.jagdT-=V),f(".story-gap-box").classList.toggle("alarm",o.jagdT>0||o.feldWeg&&(o.s-o.pf)/Math.max(o.vf,5)<7),!o.allesGeben&&$e<600&&(o.allesGeben=!0,m(`${ws} gibt nochmal alles!`,"Das Feld fällt wieder zurück"),i.audio.whoosh(1)),!o.einKm&&o.sZiel-o.s<1e3&&(o.einKm=!0,m("Noch 1 Kilometer!","Gleich geht der Sprint los …"),i.audio.tone(880,.15,{type:"square",vol:.06}),i.audio.tone(880,.15,{type:"square",vol:.06,when:.2}),Me(5))}!o.feldWeg&&o.s-o.pf>30&&(o.feldWeg=!0,m("Das Feld kommt nicht mit!",`Nur noch du und ${ws} vorne`),i.audio.success()),ue.s>=o.sZiel-sM&&(Re("sprint"),o.sprintT=0,m("Schlusssprint!",`Jetzt SPRINT: ${p()}`),i.audio.whoosh(1.6),i.input.rumble(.8,300),f(".story-phase").textContent="Sprint!")}else{o.sprintT+=V,de&&!o.sprint&&(o.sprint=!0,o.sprintGap=Te.s-o.s,o.sprintRest=Math.max(1,o.sZiel-Te.s),m("Sprint!","Volle Kraft!"),i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.8,400));const O=Te.s-o.s,me=lM*Math.max(Te.v,10);if(o.sprint){const q=ot((o.sZiel-Te.s)/o.sprintRest,0,1),he=me+(Math.max(o.sprintGap,me)-me)*q;re=Math.min(19.2,Te.v+ot((O-he)*1.6,-3,6)),g("")}else re=C?Te.v-2.5:Te.v-4,g(`SPRINT: ${p()}!`);O<me&&(o.s=Te.s-me,o.v=Math.min(o.v,Te.v));for(const q of[200,100])!o["schild"+q]&&o.sZiel-o.s<q&&(o["schild"+q]=!0,m(`${q} m!`,q===200?"Alles geben!":"Gleich ist es entschieden!"));!o.foto&&Te.s>o.sZiel-22&&(o.foto=!0,o.slowZiel=.22,m("Fotofinish!",""),i.audio.whoosh(2.2)),Te.ziel!=null&&!o.winnerShown&&(o.winnerShown=!0)}}else o.phase==="auslaufen"&&(o.vf=We(o.vf,6,.4,V),o.pf+=o.vf*V,re=Math.max(0,o.v-1.6*V),o.draft=We(o.draft,0,5,V));const se=re>o.v?1.3:2.2;o.v=Math.max(0,o.v+ot(re-o.v,-se*6*V,se*3.5*V)),(o.phase==="aufstellen"||o.phase==="countdown")&&(o.v=0),o.s+=o.v*V,o.phase==="sprint"&&o.meZiel==null&&o.s>=o.sZiel&&(o.meZiel=o.raceTime-(o.s-o.sZiel)/Math.max(o.v,1),Re("auslaufen"),o.cruise=!1,f(".cruise-badge").classList.remove("on"),f(".story-phase").textContent="Ziel",g(""),o.fotoNach=1.1);const Se=Y.steer,_e=i.world.nearest(o.x??0,o.z??0),I=(_e.found?i.world.rhArr[_e.i]:i.world.RH)-.5;o.phase!=="aufstellen"&&o.phase!=="countdown"&&(o.lat=ot(o.lat+Se*2.4*V*ot(o.v/4,.3,1),-I,I));const w=i.bike.root.rotation.y,W=o.hPrev==null||V<=0?0:Math.atan2(Math.sin(w-o.hPrev),Math.cos(w-o.hPrev))/V;o.hPrev=w;const Q=ot(-Math.atan(o.v*W/9.81)*1.1+Se*ot(o.v/9,0,1)*.25,-.6,.6);o.lean=We(o.lean,Q,4,V),o.steerVis=We(o.steerVis,Se*(1-ot(o.v/14,0,.85))*.5,10,V);for(const ue of o.team)Math.abs(ue.s-o.s)<1&&Math.abs(ue.lat-o.lat)<.8&&(o.lat=ue.lat+(o.lat>=ue.lat?.8:-.8));const ce=C||te&&o.v>1||o.phase==="anfahrt"&&o.v>.3?Math.max(o.v/Xt/Cf,C?3:0):0;ce>0?i.audio.freewheel(V,0):i.audio.freewheel(V,Math.min(55,o.v/(2*Math.PI*Xt)*24));const ne=o.foto&&(o.slow<.95||o.fotoNach!=null),De=ue=>ot(1-Math.abs(o.sZiel+1-ue)/7,0,1);i.bike.stand=o.phase==="sprint"&&o.sprint||o.surge>0||ne||o.konterT>0&&o.konterOk?1:0,i.bike.wurf=ne?De(o.s):0,S().r.bike.wurf=o.foto?De(S().s):0,S().r.bike.stand=o.phase==="sprint"&&o.sprintT>.3||o.foto&&(o.slow<.95||o.fotoNach!=null)||o.bergAttacke&&o.konterT>0?1:0,P(V,ce),U(V),B(V),n.showDraft(o.draft>.2?n.draftFor(o.x,o.z).rival:null,o.draft,V),o.phase==="aufstellen"||o.phase==="countdown"&&o.cd>1.6?Ve(V):o.foto&&(o.slow<.9||o.fotoNach!=null)?ae(j):ie(V),o.phase==="sprint"&&o.sprint&&o.slow>.9&&(i.camera.position.x+=(Math.random()-.5)*.03,i.camera.position.y+=(Math.random()-.5)*.03),i.audio.setWind(ot(o.v/15,0,1)*(1-.5*o.draft));const be=o.v*3.6;f(".speedo-val b").textContent=Math.round(be),f(".speedo-fill").style.strokeDasharray=`${ot(be/70,0,1)*75} 100`,f(".place").textContent=te||o.phase==="auslaufen"?`${o.meZiel!=null?2:D()}/${gr+7}`:"–";const Ce=o.sZiel-o.s;f(".story-rest").textContent=te?Ce>1e3?`${(Ce/1e3).toFixed(1).replace(".",",")} km`:`${Math.max(0,Math.round(Ce))} m`:"–";const et=(o.s-o.pf)/Math.max(o.vf,5);f(".story-gap-box").classList.toggle("show",o.feldWeg),f(".story-gap").textContent=`${Math.floor(et/60)}:${String(Math.max(0,Math.round(et%60))).padStart(2,"0")}`,f(".draft-badge").classList.toggle("on",o.draft>.08),o.draft>.08&&(f(".draft-name").textContent=`hinter ${ws} · −${Math.round(40*o.draft)} % Wind`,f(".draft-meter i").style.width=`${Math.round(o.draft*100)}%`)},exit(){var Y;i.input.touchRide=!1,i.bike.stand=0,i.bike.wurf=0,(Y=S())!=null&&Y.r&&(S().r.bike.wurf=0),t&&i.bike.applyLook(t),n==null||n.hide(),s&&(s.visible=!1),r&&(r.visible=!1),g(""),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0);const V=i.world.nearest(o.x??0,o.z??0);i.npc.s=V.found?V.s:0}}}const Rf=12,uM=[["1","2","3","4","5","6","7","8","9","0"],["Q","W","E","R","T","Z","U","I","O","P"],["A","S","D","F","G","H","J","K","L","Ü"],["Y","X","C","V","B","N","M","Ö","Ä","-"]],fM=[{k:"shift",label:"⇧ Groß/klein",span:3},{k:"space",label:"Leerzeichen",span:4},{k:"del",label:"⌫ Löschen",span:3}];function dM(){const i=uM.map(t=>t.map(n=>({k:n,label:n,span:1}))),e=[];for(const t of fM)for(let n=0;n<t.span;n++)e.push(t);return i.push(e),i}const Rp={id:"identity",title:"Name & Startnummer",tab:"Name & Nummer",hints:[["A","Taste drücken"],["X","Buchstabe löschen"],["Y","Leerzeichen"],["B","Abbrechen"]],mount(i,e,t){this.draft=e,this.ctx=t,this.grid=dM(),this.zone="kb",this.r=1,this.c=0,this.upper=!e.name,this.autoLower=!e.name,i.innerHTML=`
      <div class="creator-body">
        <div class="plate-stage">
          <div class="plate big">
            <i class="hole tl"></i><i class="hole tr"></i><i class="hole bl"></i><i class="hole br"></i>
            <div class="plate-number"></div>
            <div class="plate-name"></div>
          </div>
        </div>
        <div class="creator-controls">
          <div class="panel kb-panel" data-zone="kb">
            <div class="field-label">Dein Name</div>
            <div class="name-field"><span class="name-text"></span><span class="caret"></span><span class="name-count"></span></div>
            <div class="keyboard">
              ${this.grid.map((n,s)=>{const r=new Set;return`<div class="kb-row">${n.map(a=>r.has(a)?"":(r.add(a),`<div class="key ${a.span>1?"wide":""}" style="--span:${a.span}" data-k="${qe(a.k)}" data-r="${s}">${qe(a.label)}</div>`)).join("")}</div>`}).join("")}
            </div>
          </div>
          <div class="panel num-panel" data-zone="num">
            <div class="field-label">Startnummer</div>
            <div class="number-picker">
              <div class="arrow up">▲</div>
              <div class="number-value"></div>
              <div class="arrow down">▼</div>
            </div>
            <div class="small-hint">Stick ↑↓ · halten = schneller</div>
          </div>
          <div class="panel done-panel" data-zone="done">
            <div class="done-btn">Fertig <span>✓</span></div>
            <div class="error-msg"></div>
          </div>
        </div>
      </div>`,this.root=i,this.keyEls=[...i.querySelectorAll(".key")],this.keyEls.forEach(n=>n.addEventListener("click",()=>{const s=Number(n.dataset.r),r=this.grid[s].findIndex(a=>a.k===n.dataset.k);this.zone="kb",this.r=s,this.c=r,this.press(this.grid[s][r])})),i.querySelector(".arrow.up").addEventListener("click",()=>this.changeNumber(1)),i.querySelector(".arrow.down").addEventListener("click",()=>this.changeNumber(-1)),i.querySelector(".done-btn").addEventListener("click",()=>t.next()),this.refresh()},get key(){return this.grid[this.r][this.c]},refresh(){const i=this.draft,e=n=>this.root.querySelector(n);e(".name-text").textContent=i.name,e(".name-count").textContent=`${i.name.length}/${Rf}`,e(".plate-number").textContent=i.number,e(".plate-name").textContent=i.name||"DEIN NAME",e(".plate-name").classList.toggle("placeholder",!i.name),e(".number-value").textContent=i.number;for(const n of this.root.querySelectorAll(".panel"))n.classList.toggle("active",n.dataset.zone===this.zone);const t=this.key;this.keyEls.forEach(n=>{n.classList.toggle("focus",this.zone==="kb"&&n.dataset.k===t.k&&Number(n.dataset.r)===this.r),n.dataset.k.length===1&&/[A-ZÄÖÜ]/.test(n.dataset.k)&&(n.textContent=this.upper?n.dataset.k:n.dataset.k.toLowerCase())}),e(".done-btn").classList.toggle("focus",this.zone==="done"),this.ctx.preview(i)},typeChar(i){const e=this.draft;if(e.name.length>=Rf){this.ctx.audio.error(),this.bump(".name-field");return}e.name+=i,this.autoLower&&this.upper&&/[A-Za-zÄÖÜäöü]/.test(i)&&(this.upper=!1,this.autoLower=!1),this.ctx.audio.key(),this.clearError()},backspace(){const i=this.draft;i.name.length&&(i.name=i.name.slice(0,-1),i.name.length||(this.upper=!0,this.autoLower=!0),this.ctx.audio.key())},press(i){i.k==="shift"?(this.upper=!this.upper,this.autoLower=!1,this.ctx.audio.key()):i.k==="space"?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):i.k==="del"?this.backspace():this.typeChar(this.upper?i.k:i.k.toLowerCase()),this.flashKey(),this.refresh()},flashKey(){const i=this.keyEls.find(e=>e.classList.contains("focus"));i&&(i.classList.remove("pressed"),i.offsetWidth,i.classList.add("pressed"))},bump(i){const e=this.root.querySelector(i);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")},changeNumber(i){const e=this.draft;let t=e.number+i;t>999&&(t=i>1?999:1),t<1&&(t=i<-1?1:999),e.number=t,this.ctx.audio.nav();const n=this.root.querySelector(".number-value");n.classList.remove("tick-up","tick-down"),n.offsetWidth,n.classList.add(i>0?"tick-up":"tick-down"),this.refresh()},move(i,e){const t=this.ctx.audio;if(this.zone==="kb")if(i){const n=this.r+i;if(n<0||n>=this.grid.length)return;this.r=n}else{let n=this.c;const s=this.key;do n+=e;while(n>=0&&n<10&&this.grid[this.r][n]===s);if(n>=10)this.zone="num";else{if(n<0)return;{const r=this.grid[this.r][n];this.c=this.grid[this.r].indexOf(r)}}}else if(this.zone==="num"){if(i)return this.changeNumber(-i*1);e<0?(this.zone="kb",this.c=9,this.c=this.grid[this.r].indexOf(this.grid[this.r][9])):this.zone="done"}else if(this.zone==="done")if(e<0)this.zone="num";else return;t.nav(),this.refresh()},update(i){if(i.pressed("up")&&(this.zone==="num"&&i.holdTime("up")>1.6?this.changeNumber(5):this.move(-1,0)),i.pressed("down")&&(this.zone==="num"&&i.holdTime("down")>1.6?this.changeNumber(-5):this.move(1,0)),i.pressed("left")&&this.move(0,-1),i.pressed("right")&&this.move(0,1),i.pressed("x")&&(this.backspace(),this.refresh()),i.pressed("y")&&this.press({k:"space"}),i.pressed("start")){this.zone="done",this.refresh(),this.ctx.next();return}for(const e of i.chars){if(this.zone==="num"){if(/\d/.test(e)){const t=String(this.draft.number);let n=Number(this.typedDigits?t+e:e);n>999&&(n=Number(e)),this.draft.number=Math.max(1,n),this.typedDigits=!0,this.refresh()}else e==="\b"&&(this.draft.number=Math.max(1,Math.floor(this.draft.number/10)),this.refresh());continue}this.typedDigits=!1,e==="\b"?this.backspace():e===" "?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):/^[\p{L}\d\-]$/u.test(e)&&this.typeChar(e),this.refresh()}i.pressed("confirm")&&(this.zone==="kb"?this.press(this.key):this.zone==="num"?(this.zone="done",this.ctx.audio.nav(),this.refresh()):this.ctx.next())},clearError(){this.root.querySelector(".error-msg").textContent=""},validate(){return this.draft.name=this.draft.name.trim(),this.draft.name?!0:(this.root.querySelector(".error-msg").textContent="Bitte gib zuerst einen Namen ein.",this.bump(".name-field"),this.zone="kb",this.refresh(),!1)},unmount(){}};function uh({id:i,title:e,tab:t,rows:n}){return{id:i,title:e,tab:t,seeBike:!0,hints:[["A","Weiter"],["B","Zurück"]],mount(s,r,a){this.draft=r,this.ctx=a,this.row=0;const o=(c,l,h)=>c.type==="brand"?`<div class="brand-opt" data-o="${h}"><span class="brand-logo ${l.serif?"serif":""} ${l.font.includes("italic")?"italic":""}">${qe(gp(l))}</span><small>${qe(l.land)}</small></div>`:c.type==="group"?`<div class="brand-opt group-opt" data-o="${h}"><i class="group-dot" style="--c:${l.accent}"></i><span>${qe(l.name)}</span><small>${qe(l.maker)}</small></div>`:c.type==="paint"?`<div class="brand-opt paint-opt" data-o="${h}"><i class="paint-preview ${l.id}"></i><span>${qe(l.name)}</span></div>`:`<div class="swatch ${l.matte?"matte":""}" data-o="${h}" style="--c:${l.hex}"></div>`;s.innerHTML=`
        <div class="choice-panel">
          ${n.map((c,l)=>`
            <div class="choice-row" data-r="${l}">
              <div class="choice-head"><span class="field-label">${qe(c.label)}</span><span class="choice-name"></span></div>
              <div class="choice-opts ${c.type}">${c.options.map((h,u)=>o(c,h,u)).join("")}</div>
            </div>`).join("")}
          <div class="choice-row done-row" data-r="${n.length}">
            <div class="done-btn">${a.isLast(this)?"Fertig":"Weiter"} <span>${a.isLast(this)?"✓":"›"}</span></div>
          </div>
        </div>`,this.root=s,s.querySelectorAll(".choice-row").forEach(c=>{const l=Number(c.dataset.r);c.querySelectorAll("[data-o]").forEach(h=>h.addEventListener("click",()=>{this.row=l,this.select(l,Number(h.dataset.o))}))}),s.querySelector(".done-btn").addEventListener("click",()=>a.next()),this.refresh()},valueOf(s,r){return r.id??r.hex},current(s){const r=n[s];return r.options.findIndex(a=>this.valueOf(r,a)===this.draft[r.key])},select(s,r){const a=n[s];this.draft[a.key]=this.valueOf(a,a.options[r]),this.ctx.audio.nav(),this.ctx.preview(this.draft),this.refresh()},refresh(){var s;this.root.querySelectorAll(".choice-row").forEach(r=>{const a=Number(r.dataset.r);if(r.classList.toggle("active",a===this.row),a>=n.length)return;const o=this.current(a);r.querySelectorAll("[data-o]").forEach(h=>h.classList.toggle("selected",Number(h.dataset.o)===o));const l=n[a].options[o];r.querySelector(".choice-name").textContent=l?l.name:""}),this.root.querySelector(".done-btn").classList.toggle("focus",this.row===n.length),(s=this.root.querySelector(`.choice-row[data-r="${this.row}"]`))==null||s.scrollIntoView({block:"nearest",behavior:"smooth"})},update(s){if(s.pressed("up")&&this.row>0&&(this.row--,this.ctx.audio.nav(),this.refresh()),s.pressed("down")&&this.row<n.length&&(this.row++,this.ctx.audio.nav(),this.refresh()),this.row<n.length&&(s.pressed("left")||s.pressed("right"))){const r=n[this.row].options.length,a=Math.max(0,this.current(this.row));this.select(this.row,(a+(s.pressed("right")?1:-1)+r)%r)}s.pressed("confirm")&&(this.row<n.length?(this.row++,this.ctx.audio.nav(),this.refresh()):this.ctx.next()),s.pressed("start")&&this.ctx.next()},validate(){return!0},unmount(){}}}const Pp=uh({id:"looks",title:"Dein Aussehen",tab:"Aussehen",rows:[{key:"helmet",label:"Helm",type:"color",options:Lr},{key:"jersey",label:"Trikot",type:"color",options:Lr},{key:"kit",label:"Trikot-Muster",type:"paint",options:qb},{key:"shorts",label:"Hose",type:"color",options:Lr}]}),Lp=uh({id:"bike",title:"Dein Rennrad",tab:"Rennrad",rows:[{key:"brand",label:"Marke",type:"brand",options:fa},{key:"paint",label:"Lackierung",type:"paint",options:dp},{key:"frame",label:"Rahmenfarbe",type:"color",options:rh},{key:"bar",label:"Lenkerband",type:"color",options:Gb},{key:"groupset",label:"Schaltung",type:"group",options:da}]}),pM=uh({id:"ttbike",title:"Dein Zeitfahrrad",tab:"Zeitfahrrad",rows:[{key:"brand",label:"Marke",type:"brand",options:fa},{key:"paint",label:"Lackierung",type:"paint",options:dp},{key:"frame",label:"Rahmenfarbe",type:"color",options:rh},{key:"tires",label:"Reifen",type:"color",options:$b},{key:"groupset",label:"Schaltung",type:"group",options:da}]});let sn=[Rp,Pp,Lp];function mM(i){let e,t,n=0,s,r=0,a=!0,o=!1;function c(){const u=sn[n];e.querySelector(".step-label").textContent=`${o?"Fahrer bearbeiten":"Neuer Charakter"} · Schritt ${n+1} von ${sn.length}`,e.querySelector(".step-title").textContent=u.title,e.querySelector(".step-tabs").innerHTML=`${pt("LB")}${sn.map((m,g)=>`<span class="step-tab ${g===n?"active":""} ${g<n?"done":""}" data-i="${g}">${qe(m.tab)}</span>`).join('<i class="tab-dot"></i>')}${pt("RB")}`,e.querySelectorAll(".step-tab").forEach(m=>m.addEventListener("click",()=>l(Number(m.dataset.i)))),e.classList.toggle("see-bike",!!u.seeBike);const d=n===0?u.hints:u.hints.map(([m,g])=>[m,m==="B"?"Zurück":g]);e.querySelector(".hints").outerHTML=Yi(d),u.mount(t,s,h),h.preview(s);const f=t.querySelector(".done-btn");f&&n<sn.length-1&&(f.firstChild.textContent="Weiter ")}function l(u){if(u<0||u>=sn.length||u===n||n<0)return;const d=sn[n];if(u>n&&!d.validate()){i.audio.error(),i.input.rumble(.4,120);return}d.unmount(),n=u,i.audio.nav(),i.input.rumble(.15,40),c()}const h={audio:i.audio,preview(u){i.bike.setPlate(u.number,u.name||" "),i.bike.applyLook(u)},isLast(u){return sn.indexOf(u)===sn.length-1},next(){const u=sn[n];if(!u.validate()){i.audio.error(),i.input.rumble(.4,120);return}if(u.unmount(),n<sn.length-1){n++,i.audio.select(),c();return}o?wp(s):G1(s),i.audio.success(),i.input.rumble(.5,200),e.classList.add("saved");const d=s.id;setTimeout(()=>i.currentName==="creator"&&i.go("menu",{selectId:d}),650),n=-1}};return{enter(u={}){o=!!u.edit,s=o?{...mn,...u.edit}:V1(i.mode),sn=[Rp,Pp,i.mode==="tt"?pM:Lp],n=0,r=0,a=!0,e=Ln(`
        <div class="screen creator-screen">
          <header class="creator-head">
            <div class="step-tabs"></div>
            <div class="step-label"></div>
            <h2 class="step-title"></h2>
          </header>
          <div class="step-body"></div>
          ${Yi([])}
          <div class="toast"></div>
        </div>`),t=e.querySelector(".step-body"),i.ui.append(e),c()},update(u){const d=bi(i,u);if(Js(i,u,d,a),a=!1,n<0)return;r=Math.max(0,r-u);const f=i.input;if(f.pressed("rb")||f.pressed("rt")){l(n+1);return}if(f.pressed("lb")||f.pressed("lt")){l(n-1);return}if(i.input.pressed("back")&&n>0){sn[n].unmount(),n--,i.audio.back(),c();return}if(i.input.pressed("back")){if(r>0){i.audio.back(),i.go("menu",o?{selectId:s.id}:{});return}r=2,i.audio.back();const m=e.querySelector(".toast");m.innerHTML=`Nochmal ${pt("B")} drücken, um abzubrechen`,m.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>m.classList.remove("show"),2e3);return}sn[n].update(i.input)},exit(){e.remove()}}}const Bo=110,Di=140,kn=210,xr=14;class gM{constructor(e,t){this.world=e,this.canvas=t,this.dpr=Math.min(window.devicePixelRatio||1,2),t.width=t.height=kn*this.dpr,t.style.width=t.style.height=`${kn}px`,this.ctx=t.getContext("2d");let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let d=0;d<e.N;d++)n=Math.min(n,e.px[d]),s=Math.max(s,e.px[d]),r=Math.min(r,e.pz[d]),a=Math.max(a,e.pz[d]);n-=Bo,s+=Bo,r-=Bo,a+=Bo,this.scale=(kn-xr*2)/Math.max(s-n,a-r),this.ox=xr+(kn-xr*2-(s-n)*this.scale)/2-n*this.scale,this.oz=xr+(kn-xr*2-(a-r)*this.scale)/2-r*this.scale,this.base=document.createElement("canvas"),this.base.width=this.base.height=t.width;const o=this.base.getContext("2d");o.scale(this.dpr,this.dpr),o.save(),o.beginPath(),o.roundRect(0,0,kn,kn,10),o.clip(),o.imageSmoothingEnabled=!0,o.drawImage(this.renderTerrain(),0,0,kn,kn),o.restore(),o.lineJoin=o.lineCap="round",this.tracePath(o,0,e.N),o.closePath(),o.strokeStyle="rgba(0,0,0,0.55)",o.lineWidth=8,o.stroke(),o.strokeStyle="rgba(240,234,222,0.85)",o.lineWidth=4,o.stroke();const c=this.mx(e.px[0]),l=this.mz(e.pz[0]),h=-e.tz[0],u=e.tx[0];o.strokeStyle=He.colors.gold,o.lineWidth=3,o.lineCap="butt",o.beginPath(),o.moveTo(c-h*8,l-u*8),o.lineTo(c+h*8,l+u*8),o.stroke()}renderTerrain(){const e=this.world,t=document.createElement("canvas");t.width=t.height=Di;const n=t.getContext("2d"),s=n.createImageData(Di,Di),r=kn/Di,a=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)],o=(p,y,_)=>[p[0]+(y[0]-p[0])*_,p[1]+(y[1]-p[1])*_,p[2]+(y[2]-p[2])*_],c=a("#5f9140"),l=a("#8db657"),h=a("#bfae63"),u=a("#2e5a2a"),d=a("#8c8279"),f=a("#f4f2ec"),m=a("#d8c896"),g=a("#245f92"),v=a("#5aa0d4");for(let p=0;p<Di;p++)for(let y=0;y<Di;y++){const _=((y+.5)*r-this.ox)/this.scale,x=((p+.5)*r-this.oz)/this.scale,E=e.baseHeight(_,x);let M;const S=e.lakeAt(_,x);if(S&&E<S.level)M=o(v,g,xt(0,3,S.level-E));else{M=o(c,l,e.n3(_*.006,x*.006)*.35+.5),M=o(M,h,xt(.25,.8,e.n2(_*.004+50,x*.004))*.5),E<120&&(M=o(M,u,xt(0,.25,e.n3(_*.006+20,x*.006))*.75)),M=o(M,d,xt(45,95,E)),M=o(M,f,xt(110,140,E)),S&&(M=o(M,m,xt(S.level+1.4,S.level,E)));const T=e.baseHeight(_+6,x)-E,b=e.baseHeight(_,x+6)-E,P=ot(1-(T+b)*.07,.55,1.3);M=[M[0]*P,M[1]*P,M[2]*P]}const A=(p*Di+y)*4;s.data[A]=M[0],s.data[A+1]=M[1],s.data[A+2]=M[2],s.data[A+3]=255}return n.putImageData(s,0,0),t}mx(e){return this.ox+e*this.scale}mz(e){return this.oz+e*this.scale}tracePath(e,t,n){const s=this.world;e.beginPath();for(let r=t;r<=n;r++){const a=r%s.N,o=this.mx(s.px[a]),c=this.mz(s.pz[a]);r===t?e.moveTo(o,c):e.lineTo(o,c)}}draw(e,t,n,s,r=[]){const a=this.ctx;if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width,this.canvas.height),a.drawImage(this.base,0,0),a.scale(this.dpr,this.dpr),a.lineJoin=a.lineCap="round",s!=null&&s>0){const u=Math.min(this.world.N,Math.floor(s/this.world.ds));this.tracePath(a,0,u),a.strokeStyle=He.colors.gold,a.lineWidth=4,a.shadowColor=He.colors.gold,a.shadowBlur=6,a.stroke(),a.shadowBlur=0}for(const u of r)a.beginPath(),a.arc(this.mx(u.x),this.mz(u.z),4.5,0,Math.PI*2),a.fillStyle=u.jersey,a.strokeStyle="#fff",a.lineWidth=1.5,a.fill(),a.stroke();const o=this.mx(e),c=this.mz(t),l=Math.sin(n),h=Math.cos(n);a.beginPath(),a.moveTo(o+l*10,c+h*10),a.lineTo(o-l*5+h*6,c-h*5-l*6),a.lineTo(o-l*2,c-h*2),a.lineTo(o-l*5-h*6,c-h*5+l*6),a.closePath(),a.fillStyle=He.colors.accent,a.strokeStyle="#fff",a.lineWidth=2,a.fill(),a.stroke()}}const Ho=78,yc=9.81,vM=3.6,Pf=[.25,.5,.75],pi=He.raceLaps,bc=[{name:"Hinten",yaw:0,pitch:.32,dist:4.4},{name:"Seite",yaw:Math.PI/2,pitch:.12,dist:4.6},{name:"Von oben",yaw:0,pitch:1.3,dist:12},{name:"Von vorne",yaw:Math.PI,pitch:.16,dist:4.2}],Ip=i=>Math.atan2(Math.sin(i),Math.cos(i)),Lf=(i,e,t,n)=>i+Ip(e-i)*(1-Math.exp(-t*n));function _M(i){let e,t;const n={},s={},r={};let a=0,o,c,l=!1,h=null,u=!1,d=0;const f=new Map;let m=0;const g={view:0,yawOff:0,pitchOff:0,idle:0,yaw:0,pitch:.32,dist:4.4,heading:0};let v=null;const p=["#ff4d6d","#ffd23f","#3bceac","#4daaff","#ff9f1c","#c77dff"];function y(D,z,k){const oe=new Float32Array(480),le=new Float32Array(480),ye=new Float32Array(480),Ve=new ve;for(let ae=0;ae<160;ae++){oe[ae*3]=D,oe[ae*3+1]=z+1.4,oe[ae*3+2]=k;const Me=Math.random()*Math.PI*2,Re=1.5+Math.random()*2.5;ye[ae*3]=Math.cos(Me)*Re,ye[ae*3+1]=3+Math.random()*3,ye[ae*3+2]=Math.sin(Me)*Re,Ve.set(p[ae%p.length]),Ve.toArray(le,ae*3)}const F=new ht;F.setAttribute("position",new Ct(oe,3)),F.setAttribute("color",new Ct(le,3));const ie=new vi({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1}),ee=new Ns(F,ie);ee.frustumCulled=!1,i.world.scene.add(ee),v={points:ee,vel:ye,age:0}}function _(){v&&(i.world.scene.remove(v.points),v.points.geometry.dispose(),v.points.material.dispose(),v=null)}function x(D){if(!v)return;v.age+=D;const z=v.points.geometry.attributes.position;for(let k=0;k<z.count;k++)v.vel[k*3+1]-=2.5*D,z.setXYZ(k,z.getX(k)+v.vel[k*3]*D,z.getY(k)+v.vel[k*3+1]*D,z.getZ(k)+v.vel[k*3+2]*D);z.needsUpdate=!0,v.points.material.opacity=Math.max(0,1-v.age/3),v.age>3.2&&_()}function E(D,z=!1){const k=i.input,K=bc[g.view];k.lookX||k.lookY?(g.idle=0,g.yawOff+=k.lookX*2.6*D,g.pitchOff-=k.lookY*1.5*D):(g.idle+=D,g.idle>1.5&&(g.yawOff=We(g.yawOff,0,2,D),g.pitchOff=We(g.pitchOff,0,2,D))),g.yawOff=Ip(g.yawOff);const oe=ot(K.pitch+g.pitchOff,.04,1.45);g.pitchOff=oe-K.pitch,z?(g.yaw=K.yaw+g.yawOff,g.pitch=oe,g.dist=K.dist,g.heading=n.heading):(g.yaw=Lf(g.yaw,K.yaw+g.yawOff,6,D),g.pitch=We(g.pitch,oe,6,D),g.dist=We(g.dist,K.dist,4,D),g.heading=Lf(g.heading,n.heading,5,D));const le=i.camera,ye=g.heading+Math.PI+g.yaw,Ve=Math.cos(g.pitch)*g.dist;le.position.set(n.x+Math.sin(ye)*Ve,n.h+.9+Math.sin(g.pitch)*g.dist,n.z+Math.cos(ye)*Ve);const F=i.world.terrainHeight(le.position.x,le.position.z)+.6;le.position.y<F&&(le.position.y=F);const ie=2.5*Math.max(0,Math.cos(g.yaw))*(1-g.pitch/1.5);le.lookAt(n.x+Math.sin(n.heading)*ie,n.h+.9,n.z+Math.cos(n.heading)*ie);const ee=58+Math.min(n.speed,20)*.9+(n.sprint==="active"?7:0);if(le.fov=z?ee:We(le.fov,ee,3,D),le.updateProjectionMatrix(),k.pressed("view")){g.view=(g.view+1)%bc.length,g.yawOff=0,g.pitchOff=0,i.audio.nav();const ae=M(".view-toast");ae.textContent=`Kamera: ${bc[g.view].name}`,ae.classList.remove("show"),ae.offsetWidth,ae.classList.add("show")}}function M(D){return e.querySelector(D)}function S(D){n.paused=D,a=0,M(".pause").classList.toggle("show",D),A(),i.audio.setWind(0),D?i.audio.back():i.audio.select()}function A(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((D,z)=>D.classList.toggle("selected",z===a))}function T(){const D=i.world.length;return n.lap===0?n.lastS-D:(n.lap-1)*D+n.lastS}function b(){if(n.place)return n.place;const D=T();let z=0;for(const k of c.list)(k.finished!=null||c.progress(k)>D)&&z++;return z+1}function P(D){if(!e||!l)return;const z=h==null?void 0:h.list[0];D.t==="s"&&z?z.net={...D,at:performance.now()}:D.t==="start"?(u=!0,i.go("ride",{character:t,online:!0})):(D.t==="closed"||D.t==="error")&&(G("Verbindung getrennt","Dein Gegner ist nicht mehr da"),i.audio.error(),l=!1,h==null||h.hide(),i.online.close())}function N(){const D=i.world.length,z=[{name:t.name,number:t.number,color:t.jersey,me:!0,t:n.finishTime,p:T()},...c.list.map(k=>({name:k.name,number:k.number,color:k.jersey,t:k.finished,p:c.progress(k)}))];z.sort((k,K)=>k.t!=null&&K.t!=null?k.t-K.t:k.t!=null?-1:K.t!=null?1:K.p-k.p),M(".result-list").innerHTML=z.map((k,K)=>`<div class="result-row ${k.me?"me":""}">
          <b>${K+1}.</b><i style="background:${k.color}"></i><span class="mini-plate"><span>${k.number}</span></span>
          <span class="result-name">${qe(k.name)}</span>
          <span class="result-time">${k.t!=null?Un(k.t):`noch ${Math.max(1,Math.ceil((pi*D-k.p)/1e3*10)/10)} km`}</span>
        </div>`).join(""),M(".result-title").textContent=c.list.length?n.place===1?"Sieg! Du bist Erster!":`Ziel! Du bist ${n.place}.`:`Ziel! ${Un(n.finishTime)}`,m=0,B(),M(".result").classList.add("show"),n.showResult=!0}function B(){e.querySelectorAll(".result-item").forEach((D,z)=>D.classList.toggle("selected",z===m))}function U(D,z,k=null,K=0){var oe;n.crash=1.8,n.speed=0,n.air=!1,n.cruise=!1,n.resumeS=k,n.resumeLat=K,(oe=e.querySelector(".cruise-badge"))==null||oe.classList.remove("on"),G(D,z),i.audio.error(),i.audio.noiseBurst(.25,{vol:.5,freq:180,type:"lowpass"}),i.input.rumble(1,450)}function G(D,z=""){const k=M(".banner");k.innerHTML=`<div>${D}</div>${z?`<small>${z}</small>`:""}`,k.classList.remove("show"),k.offsetWidth,k.classList.add("show")}return{enter({character:D,online:z}){t=D,l=!!z&&i.online.connected&&!!i.online.remote;const k=u;u=!1,e=Ln(`
        <div class="screen ride-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Runde</label><b class="lap">–</b></div>
            <div class="hud-box hud-zeit"><label>Zeit</label><b class="time">0:00.0</b></div>
            <div class="hud-box"><label>Bestzeit</label><b class="best">${Un(t.bestLap)}</b></div>
          </div>
          <div class="hud-map">
            <div class="hud-rider">
              <div class="mini-plate"><span>${t.number}</span></div>
              <div><div class="rider-name">${qe(t.name)}</div><div class="rider-sub">Teststrecke · ${ma(i.mode)}</div></div>
            </div>
            <canvas class="minimap"></canvas>
          </div>
          <div class="view-toast"></div>
          <div class="draft-badge">
            <span class="draft-icon">≋</span>
            <div class="draft-text"><b>Windschatten</b><small class="draft-name"></small></div>
            <div class="draft-meter"><i></i></div>
          </div>
          <div class="cruise-badge">${pt("B")} Dauertreten an</div>
          <div class="sprint-bar ready">
            <div class="sprint-fill"></div>
            <i class="sprint-mark" style="left:${He.sprint.abLadung*100}%"></i>
            <div class="sprint-label"><span class="sprint-text">SPRINT</span><span class="sprint-info"></span></div>
          </div>
          <div class="speedo">
            <svg viewBox="0 0 200 200">
              <circle class="speedo-bg" cx="100" cy="100" r="80" pathLength="100"/>
              <circle class="speedo-fill" cx="100" cy="100" r="80" pathLength="100"/>
            </svg>
            <div class="speedo-val"><b>0</b><span>km/h</span></div>
          </div>
          <button class="touch-pause" data-act="pause" aria-label="Pause">❚❚</button>
          <div class="controls-help touch-help">
            <div><b>◀ ▶</b> Links oder rechts halten: lenken</div>
            <div><b>▲</b> Nach oben wischen: losfahren</div>
            <div><b>▲▲</b> Nochmal nach oben: Sprint</div>
            <div><b>▼</b> Nach unten wischen: bremsen</div>
            <div><b>◀▶</b> Beide Seiten halten: landen nach Drops</div>
          </div>
          <div class="controls-help keys-help">
            <div><b>W</b> / <b>↑</b> Treten</div>
            <div><b>T</b> Dauertreten an/aus</div>
            <div><b>S</b> / <b>↓</b> Bremsen</div>
            <div><b>Leertaste</b> Sprint</div>
            <div><b>A</b> <b>D</b> / <b>← →</b> Lenken</div>
            <div><b>Q</b>+<b>E</b> Landen nach Drops</div>
            <div><b>C</b> Ansicht wechseln · <b>K</b> Klingel</div>
            <div><b>Esc</b> Pause</div>
          </div>
          <div class="controls-help pad-help">
            <div>${pt("A")} Treten</div>
            <div>${pt("B")} Dauertreten an/aus</div>
            <div>${pt("Y")} Bremsen</div>
            <div>${pt("X")} Sprint</div>
            <div>${pt("LB")}+${pt("RB")} Landen nach Drops</div>
            <div>${pt("LT")}${pt("RT")} Lenken</div>
            <div><span class="btn btn-stick">L</span> leicht lenken</div>
            <div><span class="btn btn-stick">R</span> Kamera drehen</div>
            <div><span class="btn btn-stick">R</span>drücken: Ansicht wechseln</div>
            <div><span class="btn btn-opt">☰</span> Pause</div>
          </div>
          <div class="banner"></div>
          <div class="drop-hint"></div>
          <div class="countdown"></div>
          <div class="result">
            <div class="pause-box result-box">
              <h2 class="result-title"></h2>
              <div class="result-list"></div>
              <div class="pause-item result-item">Nochmal fahren</div>
              <div class="pause-item result-item">Zurück zum Hauptmenü</div>
            </div>
          </div>
          <div class="pause">
            <div class="pause-box">
              <h2>Pause</h2>
              <div class="pause-item">Weiterfahren</div>
              <div class="pause-item">Zurück zum Hauptmenü</div>
            </div>
          </div>
        </div>`),i.ui.append(e),setTimeout(()=>e==null?void 0:e.querySelectorAll(".controls-help").forEach(F=>F.classList.add("fade")),12e3),e.querySelectorAll(".pause-item:not(.result-item)").forEach((F,ie)=>F.addEventListener("click",()=>{a=ie,A(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((F,ie)=>F.addEventListener("click",()=>{m=ie,B(),i.input.inject("confirm")})),o=new gM(i.world,M(".minimap")),i.bike.setPlate(t.number,t.name),i.bike.applyLook(t),i.bike.setTires(i.mode);const K=i.world.cx?.7:1.5,oe=K-(i.world.cx?1.3:2.2),le=l&&i.online.role==="guest",ye=i.world.poseAt(i.world.length-14,le?oe:K,r);Object.assign(n,{x:ye.x,z:ye.z,heading:ye.heading,speed:0,lean:0,steerVis:0,pitch:0,h:ye.h,lastS:ye.s,lap:0,lapStart:0,cps:new Set,time:0,paused:!1,shake:0,air:!1,vy:0,bothHeld:-9,crash:0,cruise:!1,sprint:"ready",sprintT:0,phase:"countdown",countdown:3,lastCount:4,raceTime:0,place:0,finishTime:null,showResult:!1});const Ve=i.mode;if(f.has(Ve)||f.set(Ve,new El(i,i.mode==="road"?Ap:[])),c=f.get(Ve),l){h==null||h.dispose();const F=i.online.remote.char;h=new El(i,[{...F,remote:!0,power:0,lane:le?K:oe}]),c=h,i.online.listen(P),d=0,k||setTimeout(()=>e&&G(`Online gegen ${F.name}`,"Viel Glück!"),300)}i.rivals=c,i.rideState=n,M(".hud-place").style.display=c.list.length?"":"none",i.bike.setTires(i.mode),c.reset(ye.s),this.placeBike(),g.view=0,g.yawOff=g.pitchOff=0,E(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45)},placeBike(){const D=i.bike.root;D.position.set(n.x,n.h,n.z),D.rotation.set(-n.pitch,n.heading,n.lean),i.focus.set(n.x,n.h,n.z)},update(D){const z=i.input;if(i.fx.uFade.value=We(i.fx.uFade.value,0,3,D),i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,D),x(D),z.touchRide=!n.paused&&!n.showResult,n.paused){z.pressed("up")||z.pressed("down")?(a=1-a,A(),i.audio.nav()):z.pressed("back")||z.pressed("start")?S(!1):z.pressed("confirm")&&(a===0?S(!1):(i.audio.select(),i.go("menu",{selectId:t.id}))),i.bike.update(0,0,0,n.steerVis),E(D);return}if(n.showResult){if(z.pressed("up")||z.pressed("down"))m=1-m,B(),i.audio.nav();else if(z.pressed("confirm")){i.audio.select(),m===0?(l&&(i.online.send({t:"start"}),u=!0),i.go("ride",{character:t,online:l})):i.go("menu",{selectId:t.id});return}}else if(z.pressed("pause")||z.pressed("start")){S(!0);return}if(n.phase==="countdown"){n.countdown-=D;const Ee=Math.ceil(n.countdown);if(Ee!==n.lastCount){n.lastCount=Ee;const O=M(".countdown");O.textContent=Ee>0?Ee:"LOS!",O.classList.toggle("go",Ee<=0),O.classList.remove("show"),O.offsetWidth,O.classList.add("show"),Ee>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}Ee<=0&&(n.phase="race")}else n.raceTime+=D;z.pressed("klingel")&&i.audio.klingel(),z.pressed("cruise")&&(n.cruise=!n.cruise,M(".cruise-badge").classList.toggle("on",n.cruise),n.cruise?i.audio.select():i.audio.back(),i.input.rumble(.25,60)),n.time+=D;const k=i.world,K=n.crash>0,oe=K?0:z.steer;z.l1&&z.r1&&(n.bothHeld=n.time);const le=He.sprint,ye=z.pressed("x")||z.pressed("sprint");if(ye&&n.sprint==="active")n.sprint="charging",n.sprintT=n.sprintT/le.dauer*le.aufladen,i.audio.back();else if(ye&&n.phase==="race"&&(n.sprint==="ready"||n.sprint==="charging"&&n.sprintT/le.aufladen>=le.abLadung)){const Ee=n.sprint==="ready"?1:n.sprintT/le.aufladen;n.sprint="active",n.sprintT=le.dauer*Ee,i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.7,300),G("Sprint!")}n.sprint==="active"?(n.sprintT-=D,n.sprintT<=0&&(n.sprint="charging",n.sprintT=0)):n.sprint==="charging"&&(n.sprintT+=D*(1+(le.windschattenBonus-1)*(n.draft||0)),n.sprintT>=le.aufladen&&(n.sprint="ready",i.audio.nav()));const Ve=n.sprint==="active";i.bike.stand=Ve&&n.phase!=="finished"?1:0;let F=z.brake>.1?0:n.cruise||Ve?1:z.throttle,ie=z.brake;(n.phase==="countdown"||K)&&(F=0),n.phase==="finished"&&(F=0,ie=n.speed>4?.25:0),k.groundAt(n.x,n.z,s);const ee=Math.sin(n.heading),ae=Math.cos(n.heading),Me=k.groundAt(n.x+ee*.6,n.z+ae*.6,r).h,Re=k.groundAt(n.x-ee*.6,n.z-ae*.6,r).h,V=Math.atan2(Me-Re,1.2);n.pitch=We(n.pitch,V,12,D);const Y=n.speed,j=He.rollen[i.mode==="cx"?"cx":"rennrad"],H=s.surface==="road"?j.asphalt:s.surface==="gravel"?j.schotter:j.wiese,C=Ve?He.sprint.kraft:1,de=pp(t==null?void 0:t.groupset).kraft||1,te=Math.min(He.riderPower*de*C/Math.max(Y,2.5),340*C)*F,re=c.draftFor(n.x,n.z);n.draft=We(n.draft||0,re.strength,5,D),re.rival&&(n.draftName=re.rival.name);const se=i.mode==="tt"?He.zeitfahren.luftwiderstand:1,Se=.5*1.2*.36*se*Y*Y*(1-He.windschatten*n.draft),_e=ie*650,I=n.air?0:Math.sin(n.pitch);let w=(te-Se-(n.air?0:H*Ho*yc)-Ho*yc*I)/Ho;w-=Y>.01?_e/Ho:0,n.speed=Math.max(0,Y+w*D),n.speed<.05&&F<.05&&Math.sin(n.pitch)>.02&&(n.speed=0);const W=Math.min(1.5,n.speed*.9+.15)*(1-.55*ot(n.speed/16,0,1));n.heading-=oe*W*D,n.x+=Math.sin(n.heading)*n.speed*D,n.z+=Math.cos(n.heading)*n.speed*D;for(const Ee of c.list){const O=n.x-Ee.x,me=n.z-Ee.z,q=Math.hypot(O,me);q<.9&&q>.001&&(n.x=Ee.x+O/q*.9,n.z=Ee.z+me/q*.9,n.speed*=.98)}if(k.solid)for(const Ee of k.solid){const O=n.x-Ee.x,me=n.z-Ee.z,q=Math.hypot(O,me),he=Ee.r+.5;q<he&&q>.001&&(n.x=Ee.x+O/q*he,n.z=Ee.z+me/q*he,n.speed*=.9)}const Q=Math.hypot(n.x,n.z);Q>830&&(n.x*=830/Q,n.z*=830/Q,n.speed*=.9);const ce=k.groundAt(n.x,n.z,s).h,ne=k.nearest(n.x,n.z);if(!n.air&&k.drops.length&&ne.found&&ne.dist<k.rhArr[ne.i]+1.2&&n.speed>1.5)for(const Ee of k.drops){const O=Ee.s-k.ds-.2;n.lastS<O&&ne.s>=O&&ne.s<Ee.s+3&&(n.air=!0,n.vy=2.2+n.speed*.12,n.pitch=.32,i.audio.whoosh(.9),i.input.rumble(.3,80))}if(n.air?(n.vy-=yc*D,n.h+=n.vy*D,n.h<=ce&&(n.h=ce,n.air=!1,n.time-n.bothHeld<.3?(G("Sauber gelandet!"),i.audio.select(),i.input.rumble(.5,120),n.speed*=.92):U("Sturz!",`Beim Landen ${pt("LB")} + ${pt("RB")} gleichzeitig halten`))):n.h=ce,!n.air&&!K&&k.rocks){for(const Ee of k.rocks)if(Math.hypot(n.x-Ee.x,n.z-Ee.z)<Ee.r+.3){const O=-Math.sign(Ee.lat)*Math.min(.6,k.rhArr[Ee.i]*.5);U("Autsch, ein Felsbrocken!","Fahr um die Steine herum",Ee.s+Ee.r+1.5,O);break}}if(K&&(n.crash-=D,n.speed=0,n.crash<=0)){const Ee=k.poseAt(n.resumeS??(ne.found?ne.s:n.lastS),n.resumeS!=null?n.resumeLat:0,r);n.resumeS=null,n.x=Ee.x,n.z=Ee.z,n.heading=Ee.heading,n.h=k.groundAt(n.x,n.z,s).h}s.surface==="grass"&&n.speed>1?(n.h+=Math.sin(n.time*30)*.01*Math.min(1,n.speed/6),n.shake=1):n.shake=0;const De=ot(Math.atan(n.speed*oe*W/9.81)*.85,-.6,.6);n.lean=We(n.lean,K?1.35:De,K?10:6,D),n.air&&(n.pitch=We(n.pitch,Math.atan2(n.vy,Math.max(n.speed,3))*1.1,5,D)),n.steerVis=We(n.steerVis,oe*(1-ot(n.speed/14,0,.85)),10,D);let be=0;F>.05?(be=Math.max(n.speed/Xt/vM,3*F),i.audio.freewheel(D,0)):i.audio.freewheel(D,Math.min(55,n.speed/(2*Math.PI*Xt)*24)),this.placeBike(),i.bike.update(D,n.speed,be,n.steerVis),l&&(d-=D,d<=0&&(d=1/15,i.online.send({t:"s",x:n.x,z:n.z,h:n.h,heading:n.heading,pitch:n.pitch,lean:n.lean,speed:n.speed,crank:be,steer:n.steerVis,p:T(),f:n.finishTime})));const Ce=n.speed*3.6;i.audio.setWind(ot(n.speed/15,0,1)*(1-.5*n.draft)),c.showDraft(re.rival,re.strength,D),M(".draft-badge").classList.toggle("on",n.draft>.08),n.draft>.08&&(M(".draft-name").textContent=`hinter ${n.draftName} · −${Math.round(He.windschatten*n.draft*100)} % Wind`,M(".draft-meter i").style.width=`${Math.round(n.draft*100)}%`),i.fx.uLines.value=0,E(D),n.shake&&(i.camera.position.y+=(Math.random()-.5)*.02);const ge=k.nearest(n.x,n.z);if(ge.found&&ge.dist<25){const Ee=ge.s,O=k.length;for(const me of Pf)Ee>me*O&&Ee<me*O+40&&n.cps.add(me);if(n.lastS>O-60&&Ee<60){if(n.lap===0)n.lap=1,n.lapStart=n.time,n.cps.clear(),G(`Runde 1 von ${pi}`,"Die Zeit läuft!"),i.audio.lap();else if(n.cps.size===Pf.length){n.lastS=Ee;const me=n.time-n.lapStart,q=t.bestLap==null||me<t.bestLap;if(q&&(t={...Zi().find(Pe=>Pe.id===t.id)||t,bestLap:me},wp(t),M(".best").textContent=Un(me)),n.lap++,n.lapStart=n.time,n.cps.clear(),n.lap>pi&&n.phase==="race")n.place=b(),n.finishTime=n.raceTime,n.phase="finished",n.cruise=!1,M(".cruise-badge").classList.remove("on"),G(c.list.length?n.place===1?"Sieg!":`Platz ${n.place}`:"Ziel!",Un(n.finishTime)),i.audio.success(),i.input.rumble(.8,400),y(n.x,n.h,n.z),i.mode==="tt"&&M(".hud-zeit").classList.add("stoppuhr"),setTimeout(()=>e&&n.phase==="finished"&&N(),2200);else{const he=n.lap===pi&&n.phase==="race";G(q?"Neue Bestzeit!":he?"Letzte Runde!":`Runde ${n.lap} von ${pi}`,Un(me)),i.audio.lap(),i.input.rumble(.5,200)}}}n.lastS=Ee}M(".speedo-val b").textContent=Math.round(Ce);let ue="";if(n.air)ue=`Jetzt ${pt("LB")} + ${pt("RB")}!`;else if(k.drops.length&&ne.found&&!K)for(const Ee of k.drops){const O=Ee.s-ne.s;O>0&&O<30&&(ue=`Drop in ${Math.ceil(O)} m – ${pt("LB")} + ${pt("RB")} zum Landen`)}if(ue!==n.hintShown){n.hintShown=ue;const Ee=M(".drop-hint");Ee.innerHTML=ue,Ee.classList.toggle("show",!!ue),Ee.classList.toggle("now",n.air)}const Te=M(".sprint-bar"),$e=n.sprint==="active"?n.sprintT/le.dauer:n.sprint==="charging"?n.sprintT/le.aufladen:1;M(".sprint-fill").style.width=`${($e*100).toFixed(1)}%`;const we=n.sprint==="charging"&&$e>=le.abLadung;Te.className=`sprint-bar ${n.sprint}${we?" usable":""}`;const Ye=i.control==="keys"?'<span class="btn key-space">Leertaste</span>':pt("X"),je=n.sprint==="active"?`${Math.ceil(n.sprintT)} s`:we?`${Math.round($e*le.dauer)} s ${Ye}`:n.sprint==="charging"?"lädt …":`bereit ${Ye}`;je!==n.sprintInfo&&(n.sprintInfo=je,M(".sprint-info").innerHTML=je),M(".speedo-fill").style.strokeDasharray=`${ot(Ce/70,0,1)*75} 100`,c.update(D,n.phase!=="countdown",{progress:T(),lateral:ge.found?ge.lateral:99},pi*k.length,n.raceTime),M(".place").textContent=n.phase==="countdown"?"–":`${b()}/${c.list.length+1}`,M(".lap").textContent=n.lap?`${Math.min(n.lap,pi)}/${pi}`:"–",M(".time").textContent=n.phase==="finished"?Un(n.finishTime):Un(n.raceTime),o.draw(n.x,n.z,n.heading,n.lap&&n.phase!=="finished"?n.lastS:null,c.list)},exit(){i.input.touchRide=!1,i.bike.stand=0,_(),c.hide(),l&&!u&&(i.online.close(),i.online.listen(null),h==null||h.dispose(),h=null),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0),i.fx.uLines.value=0;const D=i.world.nearest(n.x,n.z);i.npc.s=D.found?D.s:0}}}document.title=He.gameName;const Dp=document.documentElement.style;Dp.setProperty("--gold",He.colors.gold);Dp.setProperty("--accent",He.colors.accent);const If=()=>new Promise(i=>setTimeout(i,30));async function xM(){var p;const i=document.getElementById("ui"),e=document.getElementById("loading");await Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 64px "Cinzel"')]).catch(()=>{}),await If(),await If();const t=new Xx({antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=kf,t.toneMapping=Dl,t.toneMappingExposure=He.exposure,document.getElementById("game").appendChild(t.domElement);const n=new pn(50,window.innerWidth/window.innerHeight,.1,6e3),s=await M1(),r=new Vu(t,"road",s),a=new ah;r.scene.add(a.root);const o=t.getDrawingBufferSize(new fe),c=new _n(o.x,o.y,{type:Hn,samples:4}),l=new $y(t,c),h=new Xy(r.scene,n);l.addPass(h);const u=new Xs(new fe(window.innerWidth/2,window.innerHeight/2),.5,.55,.92);l.addPass(u);const d=new Ed(D1);l.addPass(d),l.addPass(new Yy);const f={renderer:t,camera:n,world:r,bike:a,composer:l,ui:i,input:new P1,audio:new I1,fx:d.uniforms,focus:new L,npc:{s:0,speed:6,lateral:1.5,pedal:!0},mode:"road",online:new Ob,cloneRider:()=>null,worlds:{road:r},useWorld(y){this.worlds[y]||(this.worlds[y]=new Vu(t,y,s,y==="tt"?this.dorf:null));const _=this.worlds[y];_!==this.world&&(this.world.scene.remove(this.bike.root),_.scene.add(this.bike.root),this.world=_,h.scene=_.scene,this.npc.s=_.length*.1,this.npc.lateral=_.cx?.5:1.5)},async prepareWorld(y){y==="tt"&&!this.dorf&&(this.dorf=await w1()),this.useWorld(y)},time:0,scenes:{},current:null,currentName:"",go(y,_){var x;(x=this.current)==null||x.exit(),this.currentName=y,this.current=this.scenes[y],this.current.enter(_||{})}};f.scenes={title:z1(f),transition:H1(f),mode:u1(f),menu:W1(f),creator:mM(f),ride:_M(f),lobby:f1(f),control:d1(f),minigame:j1(f),story:hM(f)},ch(f,Ir()||yp(f),!!Ir()),f.controlChosen=Ir(),window.__game=f;function m(){const y=window.innerWidth,_=window.innerHeight;!y||!_||(t.setSize(y,_),l.setSize(y,_),n.aspect=y/_,n.updateProjectionMatrix(),d.uniforms.uAspect.value=y/_)}window.addEventListener("resize",m),m(),window.addEventListener("keydown",y=>{f.audio.unlock(),y.code==="KeyM"&&f.currentName!=="creator"&&f.audio.toggleMute()}),window.addEventListener("pointerdown",()=>f.audio.unlock()),f.go("title");{const y=(p=document.querySelector('script[type="module"][src*="assets/index-"]'))==null?void 0:p.getAttribute("src"),_=async()=>{var x;try{const M=(x=(await(await fetch(`./index.html?v=${Date.now()}`,{cache:"no-store"})).text()).match(/assets\/index-[^"]+\.js/))==null?void 0:x[0],S=["title","mode","menu","control"].includes(f.currentName);M&&y&&!y.endsWith(M)&&S&&location.reload()}catch{}};setInterval(_,6e4),document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"&&_())}window.innerWidth&&window.innerHeight&&l.render(0),e.classList.add("done"),setTimeout(()=>e.remove(),900);let g=performance.now();function v(y){requestAnimationFrame(v);const _=Math.min(.05,(y-g)/1e3);g=y,f.time+=_,f.input.update(_),f.input.pressed("any")&&(f.audio.unlock(),f.audio.startMusic()),f.current.update(_),f.world.update(_,f.focus,n,f.time),d.uniforms.uTime.value=f.time,window.innerWidth&&window.innerHeight&&l.render(_)}requestAnimationFrame(v)}xM();
