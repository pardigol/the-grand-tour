var yp=i=>{throw TypeError(i)};var Zs=(i,e,t)=>e.has(i)?yp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function bp(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="170",Mp=0,lh=1,Sp=2,vd=1,_d=2,Zn=3,_i=0,Xt=1,Jt=2,ei=0,As=1,Er=2,hh=3,uh=4,Tp=5,Ui=100,wp=101,Ep=102,Ap=103,Cp=104,Rp=200,Pp=201,Lp=202,Ip=203,dc=204,fc=205,Dp=206,Up=207,kp=208,Np=209,Fp=210,Op=211,zp=212,Bp=213,Hp=214,pc=0,mc=1,gc=2,Ds=3,vc=4,_c=5,xc=6,yc=7,Ml=0,Vp=1,Gp=2,vi=0,xd=1,yd=2,bd=3,Sl=4,Wp=5,Md=6,Sd=7,Td=300,Us=301,ks=302,bc=303,Mc=304,ia=306,ni=1e3,Fi=1001,Sc=1002,on=1003,$p=1004,Nr=1005,kn=1006,ha=1007,Oi=1008,ii=1009,wd=1010,Ed=1011,Ar=1012,Tl=1013,Vi=1014,En=1015,On=1016,wl=1017,El=1018,Ns=1020,Ad=35902,Cd=1021,Rd=1022,pn=1023,Pd=1024,Ld=1025,Cs=1026,Fs=1027,Al=1028,Cl=1029,Id=1030,Rl=1031,Pl=1033,Co=33776,Ro=33777,Po=33778,Lo=33779,Tc=35840,wc=35841,Ec=35842,Ac=35843,Cc=36196,Rc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Uc=37811,kc=37812,Nc=37813,Fc=37814,Oc=37815,zc=37816,Bc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,Io=36492,$c=36494,Xc=36495,Dd=36283,qc=36284,jc=36285,Yc=36286,Xp=3200,qp=3201,Ll=0,jp=1,pi="",bt="srgb",Gs="srgb-linear",sa="linear",ct="srgb",Ji=7680,dh=519,Yp=512,Zp=513,Kp=514,Ud=515,Jp=516,Qp=517,em=518,tm=519,Zc=35044,fh="300 es",Qn=2e3,Vo=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const mr=Math.PI/180,Cr=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function nm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function im(i,e,t){return i!==e?(t-i)/(e-i):0}function gr(i,e,t){return(1-t)*i+t*e}function sm(i,e,t,n){return gr(i,e,1-Math.exp(-t*n))}function rm(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function am(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lm(i,e){return i+Math.random()*(e-i)}function hm(i){return i*(.5-Math.random())}function um(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(i){return i*mr}function fm(i){return i*Cr}function pm(i){return(i&i-1)===0&&i!==0}function mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kc={DEG2RAD:mr,RAD2DEG:Cr,generateUUID:zn,clamp:At,euclideanModulo:Il,mapLinear:nm,inverseLerp:im,lerp:gr,damp:sm,pingpong:rm,smoothstep:om,smootherstep:am,randInt:cm,randFloat:lm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:vm,normalize:lt,denormalize:wn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,r,a,o,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],x=s[1],_=s[4],y=s[7],C=s[2],M=s[5],T=s[8];return r[0]=a*v+o*x+c*C,r[3]=a*g+o*_+c*M,r[6]=a*p+o*y+c*T,r[1]=l*v+h*x+u*C,r[4]=l*g+h*_+u*M,r[7]=l*p+h*y+u*T,r[2]=f*v+d*x+m*C,r[5]=f*g+d*_+m*M,r[8]=f*p+d*y+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Ke;function kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _m(){const i=Go("canvas");return i.style.display="block",i}const mh={};function ur(i){i in mh||(mh[i]=!0,console.warn(i))}function xm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ym(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],_h=[.3127,.329],xh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Gs]:{primaries:gh,whitePoint:_h,transfer:sa,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:gh,whitePoint:_h,transfer:ct,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let Qi;class Mm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Go("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Go("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sm=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class Bt extends Ws{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Fi,s=Fi,r=kn,a=Oi,o=pn,c=ii,l=Bt.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=zn(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Td;Bt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(d+1)/2,C=(p+1)/2,M=(h+f)/4,T=(u+v)/4,P=(m+g)/4;return _>y&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fd extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Em extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==m){let g=1-o;const p=c*f+l*d+h*m+u*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),M=Math.atan2(C,p*x);g=Math.sin(g*M)/C,o=Math.sin(o*M)/C}const y=o*x;if(c=c*g+f*y,l=l*g+d*y,h=h*g+m*y,u=u*g+v*y,g===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-o*d,e[t+2]=l*m+h*d+o*f-c*u,e[t+3]=h*m-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new R,bh=new vt;class Xi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Or.subVectors(this.max,Ks),es.subVectors(e.a,Ks),ts.subVectors(e.b,Ks),ns.subVectors(e.c,Ks),oi.subVectors(ts,es),ai.subVectors(ns,ts),bi.subVectors(es,ns);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-bi.z,bi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-bi.y,bi.x,0];return!pa(t,es,ts,ns,Or)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,es,ts,ns,Or))?!1:(zr.crossVectors(oi,ai),t=[zr.x,zr.y,zr.z],pa(t,es,ts,ns,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,Fr=new Xi,es=new R,ts=new R,ns=new R,oi=new R,ai=new R,bi=new R,Ks=new R,Or=new R,zr=new R,Mi=new R;function pa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Am=new Xi,Js=new R,ma=new R;class qi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(ma)),this.expandByPoint(Js.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new R,ga=new R,Br=new R,ci=new R,va=new R,Hr=new R,_a=new R;class Dl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ga.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=ci.dot(this.direction),c=-ci.dot(Br),l=ci.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(Br,f),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){va.subVectors(t,e),Hr.subVectors(n,e),_a.crossVectors(va,Hr);let a=this.direction.dot(_a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const c=o*this.direction.dot(Hr.crossVectors(ci,Hr));if(c<0)return null;const l=o*this.direction.dot(va.cross(ci));if(l<0||c+l>a)return null;const h=-o*ci.dot(_a);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,m,v,g){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,m,v,g)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f+v*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,d=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Rm)}lookAt(e,t,n){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(n,en),li.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(n,en)),li.normalize(),Vr.crossVectors(en,li),s[0]=li.x,s[4]=Vr.x,s[8]=en.x,s[1]=li.y,s[5]=Vr.y,s[9]=en.y,s[2]=li.z,s[6]=Vr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],_=n[7],y=n[11],C=n[15],M=s[0],T=s[4],P=s[8],S=s[12],b=s[1],L=s[5],N=s[9],B=s[13],k=s[2],G=s[6],D=s[10],F=s[14],U=s[3],K=s[7],se=s[11],ne=s[15];return r[0]=a*M+o*b+c*k+l*U,r[4]=a*T+o*L+c*G+l*K,r[8]=a*P+o*N+c*D+l*se,r[12]=a*S+o*B+c*F+l*ne,r[1]=h*M+u*b+f*k+d*U,r[5]=h*T+u*L+f*G+d*K,r[9]=h*P+u*N+f*D+d*se,r[13]=h*S+u*B+f*F+d*ne,r[2]=m*M+v*b+g*k+p*U,r[6]=m*T+v*L+g*G+p*K,r[10]=m*P+v*N+g*D+p*se,r[14]=m*S+v*B+g*F+p*ne,r[3]=x*M+_*b+y*k+C*U,r[7]=x*T+_*L+y*G+C*K,r[11]=x*P+_*N+y*D+C*se,r[15]=x*S+_*B+y*F+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+v*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+g*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=u*g*l-v*f*l+v*c*d-o*g*d-u*c*p+o*f*p,_=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,y=h*v*l-m*u*l+m*o*d-a*v*d-h*o*p+a*u*p,C=m*u*c-h*v*c-m*o*f+a*v*f+h*o*g-a*u*g,M=t*x+n*_+s*y+r*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(v*f*r-u*g*r-v*s*d+n*g*d+u*s*p-n*f*p)*T,e[2]=(o*g*r-v*c*r+v*s*l-n*g*l-o*s*p+n*c*p)*T,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*T,e[4]=_*T,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*T,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*T,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*T,e[8]=y*T,e[9]=(m*u*r-h*v*r-m*n*d+t*v*d+h*n*p-t*u*p)*T,e[10]=(a*v*r-m*o*r+m*n*l-t*v*l-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*T,e[12]=C*T,e[13]=(h*v*s-m*u*s+m*n*f-t*v*f-h*n*g+t*u*g)*T,e[14]=(m*o*s-a*v*s-m*n*c+t*v*c+a*n*g-t*o*g)*T,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,v=a*h,g=a*u,p=o*u,x=c*l,_=c*h,y=c*u,C=n.x,M=n.y,T=n.z;return s[0]=(1-(v+p))*C,s[1]=(d+y)*C,s[2]=(m-_)*C,s[3]=0,s[4]=(d-y)*M,s[5]=(1-(f+p))*M,s[6]=(g+x)*M,s[7]=0,s[8]=(m+_)*T,s[9]=(g-x)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const l=1/r,h=1/a,u=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Qn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,m;if(o===Qn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Vo)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,d=(n+s)*h;let m,v;if(o===Qn)m=(a+r)*u,v=-2*u;else if(o===Vo)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new R,yn=new Ee,Cm=new R(0,0,0),Rm=new R(1,1,1),li=new R,Vr=new R,en=new R,Mh=new Ee,Sh=new vt;class Ot{constructor(e=0,t=0,n=0,s=Ot.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ot.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const Th=new R,ss=new vt,Xn=new Ee,Gr=new R,Qs=new R,Lm=new R,Im=new vt,wh=new R(1,0,0),Eh=new R(0,1,0),Ah=new R(0,0,1),Ch={type:"added"},Dm={type:"removed"},rs={type:"childadded",child:null},xa={type:"childremoved",child:null};class St extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new R,t=new Ot,n=new vt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ke}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qs,Gr,this.up):Xn.lookAt(Gr,Qs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Xn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new R(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new R,qn=new R,ya=new R,jn=new R,os=new R,as=new R,Rh=new R,ba=new R,Ma=new R,Sa=new R,Ta=new Mt,wa=new Mt,Ea=new Mt;class fn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),qn.subVectors(n,t),ya.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(qn),c=bn.dot(ya),l=qn.dot(qn),h=qn.dot(ya),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ta.setScalar(0),wa.setScalar(0),Ea.setScalar(0),Ta.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),qn.subVectors(e,t),bn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),as.subVectors(r,n),ba.subVectors(e,n);const c=os.dot(ba),l=as.dot(ba);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,s);const h=os.dot(Ma),u=as.dot(Ma);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(os,a);Sa.subVectors(e,r);const d=os.dot(Sa),m=as.dot(Sa);if(m>=0&&d<=m)return t.copy(r);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(as,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Rh.subVectors(r,s),o=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Rh,o);const p=1/(g+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(os,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Il(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Aa(a,r,e+1/3),this.g=Aa(a,r,e),this.b=Aa(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(At(Nt.r*255,0,255))*65536+Math.round(At(Nt.g*255,0,255))*256+Math.round(At(Nt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=bt){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Wr);const n=gr(hi.h,Wr.h,t),s=gr(hi.s,Wr.s,t),r=gr(hi.l,Wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ce;ce.NAMES=zd;let Um=0;class An extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=zn(),this.name="",this.blending=As,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ra extends An{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new R,$r=new le;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Bd extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hd extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class We extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let km=0;const cn=new Ee,Ca=new St,cs=new R,tn=new Xi,er=new Xi,Lt=new R;class ut extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Hd:Bd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,er.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,er.max),tn.expandByPoint(Lt)):(tn.expandByPoint(er.min),tn.expandByPoint(er.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(e,l),Lt.add(cs)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,f=new le,d=new le,m=new le,v=new R,g=new R;function p(P,S,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[P].add(v),o[S].add(v),o[b].add(v),c[P].add(g),c[S].add(g),c[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,S=x.length;P<S;++P){const b=x[P],L=b.start,N=b.count;for(let B=L,k=L+N;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new R,y=new R,C=new R,M=new R;function T(P){C.fromBufferAttribute(s,P),M.copy(C);const S=o[P];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(M,S);const L=y.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=x.length;P<S;++P){const b=x[P],L=b.start,N=b.count;for(let B=L,k=L+N;B<k;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Ct(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new Ee,Si=new Dl,Xr=new qi,Lh=new R,qr=new R,jr=new R,Yr=new R,Ra=new R,Zr=new R,Ih=new R,Kr=new R;class oe extends St{constructor(e=new ut,t=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,e),a?Zr.addScaledVector(Ra,h):Zr.addScaledVector(Ra.sub(t),h))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Xr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Xr,Lh)===null||Si.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,C=_;y<C;y+=3){const M=o.getX(y),T=o.getX(y+1),P=o.getX(y+2);s=Jr(this,p,e,n,l,h,u,M,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);s=Jr(this,a,e,n,l,h,u,x,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,C=_;y<C;y+=3){const M=y,T=y+1,P=y+2;s=Jr(this,p,e,n,l,h,u,M,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,_=g+1,y=g+2;s=Jr(this,a,e,n,l,h,u,x,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Nm(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:i}}function Jr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qr),i.getVertexPosition(c,jr),i.getVertexPosition(l,Yr);const h=Nm(i,e,t,n,qr,jr,Yr,Ih);if(h){const u=new R;fn.getBarycoord(Ih,qr,jr,Yr,u),s&&(h.uv=fn.getInterpolatedAttribute(s,o,c,l,u,new le)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,c,l,u,new le)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};fn.getNormal(qr,jr,Yr,f.normal),h.face=f,h.barycoord=u}return h}class tt extends ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function m(v,g,p,x,_,y,C,M,T,P,S){const b=y/T,L=C/P,N=y/2,B=C/2,k=M/2,G=T+1,D=P+1;let F=0,U=0;const K=new R;for(let se=0;se<D;se++){const ne=se*L-B;for(let be=0;be<G;be++){const ke=be*b-N;K[v]=ke*x,K[g]=ne*_,K[p]=k,l.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[p]=M>0?1:-1,h.push(K.x,K.y,K.z),u.push(be/T),u.push(1-se/P),F+=1}}for(let se=0;se<P;se++)for(let ne=0;ne<T;ne++){const be=f+ne+G*se,ke=f+ne+G*(se+1),E=f+(ne+1)+G*(se+1),O=f+(ne+1)+G*se;c.push(be,ke,O),c.push(ke,E,O),U+=6}o.addGroup(d,U,S),d+=U,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Os(i[t]);for(const s in n)e[s]=n[s]}return e}function Fm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const zs={clone:Os,merge:Gt};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends An{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new R,Dh=new le,Uh=new le;class un extends Gd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Uh),t.subVectors(Uh,Dh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class Bm extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(ls,hs,e,t);s.layers=this.layers,this.add(s);const r=new un(ls,hs,e,t);r.layers=this.layers,this.add(r);const a=new un(ls,hs,e,t);a.layers=this.layers,this.add(a);const o=new un(ls,hs,e,t);o.layers=this.layers,this.add(o);const c=new un(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new un(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wd extends Bt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hm extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ei});r.uniforms.tEquirect.value=t;const a=new oe(s,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=kn),new Bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Pa=new R,Vm=new R,Gm=new Ke;class Li{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gm.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new qi,Qr=new R;class Ul{constructor(e=new Li,t=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],v=s[10],g=s[11],p=s[12],x=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,g-d,y-p).normalize(),n[1].setComponents(c+r,f+l,g+d,y+p).normalize(),n[2].setComponents(c+a,f+h,g+m,y+x).normalize(),n[3].setComponents(c-a,f-h,g-m,y-x).normalize(),n[4].setComponents(c-o,f-u,g-v,y-_).normalize(),t===Qn)n[5].setComponents(c+o,f+u,g+v,y+_).normalize();else if(t===Vo)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wm(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class rn extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*f-a;for(let _=0;_<l;_++){const y=_*u-r;m.push(y,-x,0),v.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const _=x+l*p,y=x+l*(p+1),C=x+1+l*(p+1),M=x+1+l*p;d.push(_,y,M),d.push(y,C,M)}this.setIndex(d),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
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
#endif`,G0=`struct PhysicalMaterial {
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
}`,W0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,cv=`#define MATCAP
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
}`,lv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,vv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,bv=`uniform vec3 color;
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
}`,Mv=`uniform float rotation;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:$m,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:jm,alphatest_fragment:Ym,alphatest_pars_fragment:Zm,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:e0,begin_vertex:t0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:l0,color_fragment:h0,color_pars_fragment:u0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:v0,displacementmap_vertex:_0,emissivemap_fragment:x0,emissivemap_pars_fragment:y0,colorspace_fragment:b0,colorspace_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:T0,envmap_pars_fragment:w0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:F0,envmap_vertex:A0,fog_vertex:C0,fog_pars_vertex:R0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:D0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:k0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:z0,lights_phong_fragment:B0,lights_phong_pars_fragment:H0,lights_physical_fragment:V0,lights_physical_pars_fragment:G0,lights_fragment_begin:W0,lights_fragment_maps:$0,lights_fragment_end:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:Z0,map_fragment:K0,map_pars_fragment:J0,map_particle_fragment:Q0,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:cg,normal_fragment_maps:lg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:yg,project_vertex:bg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Pg,skinning_pars_vertex:Lg,skinning_vertex:Ig,skinnormal_vertex:Dg,specularmap_fragment:Ug,specularmap_pars_fragment:kg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:zg,uv_pars_fragment:Bg,uv_pars_vertex:Hg,uv_vertex:Vg,worldpos_vertex:Gg,background_vert:Wg,background_frag:$g,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:jg,cube_frag:Yg,depth_vert:Zg,depth_frag:Kg,distanceRGBA_vert:Jg,distanceRGBA_frag:Qg,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:rv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:cv,meshmatcap_frag:lv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:vv,points_vert:_v,points_frag:xv,shadow_vert:yv,shadow_frag:bv,sprite_vert:Mv,sprite_frag:Sv},pe={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Dn={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ce(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ce(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Dn.physical={uniforms:Gt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const eo={r:0,b:0,g:0},wi=new Ot,Tv=new Ee;function wv(i,e,t,n,s,r,a){const o=new ce(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const y=m(x);y===null?p(o,c):y&&y.isColor&&(p(y,1),_=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new oe(new tt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Os(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(wi)),h.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new oe(new rn(2,2),new zt({name:"BackgroundMaterial",uniforms:Os(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(eo,Vd(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:g}}function Ev(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,L,N,B,k){let G=!1;const D=u(B,N,L);r!==D&&(r=D,l(r.object)),G=d(b,B,N,k),G&&m(b,B,N,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,L,N,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,N){const B=N.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let G=k[L.id];G===void 0&&(G={},k[L.id]=G);let D=G[B];return D===void 0&&(D=f(c()),G[B]=D),D}function f(b){const L=[],N=[],B=[];for(let k=0;k<t;k++)L[k]=0,N[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,L,N,B){const k=r.attributes,G=L.attributes;let D=0;const F=N.getAttributes();for(const U in F)if(F[U].location>=0){const se=k[U];let ne=G[U];if(ne===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),se===void 0||se.attribute!==ne||ne&&se.data!==ne.data)return!0;D++}return r.attributesNum!==D||r.index!==B}function m(b,L,N,B){const k={},G=L.attributes;let D=0;const F=N.getAttributes();for(const U in F)if(F[U].location>=0){let se=G[U];se===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const ne={};ne.attribute=se,se&&se.data&&(ne.data=se.data),k[U]=ne,D++}r.attributes=k,r.attributesNum=D,r.index=B}function v(){const b=r.newAttributes;for(let L=0,N=b.length;L<N;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const N=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;N[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),k[b]!==L&&(i.vertexAttribDivisor(b,L),k[b]=L)}function x(){const b=r.newAttributes,L=r.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==b[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function _(b,L,N,B,k,G,D){D===!0?i.vertexAttribIPointer(b,L,N,k,G):i.vertexAttribPointer(b,L,N,B,k,G)}function y(b,L,N,B){v();const k=B.attributes,G=N.getAttributes(),D=L.defaultAttributeValues;for(const F in G){const U=G[F];if(U.location>=0){let K=k[F];if(K===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const se=K.normalized,ne=K.itemSize,be=e.get(K);if(be===void 0)continue;const ke=be.buffer,E=be.type,O=be.bytesPerElement,W=E===i.INT||E===i.UNSIGNED_INT||K.gpuType===Tl;if(K.isInterleavedBufferAttribute){const H=K.data,Z=H.stride,te=K.offset;if(H.isInstancedInterleavedBuffer){for(let fe=0;fe<U.locationSize;fe++)p(U.location+fe,H.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let fe=0;fe<U.locationSize;fe++)_(U.location+fe,ne/U.locationSize,E,se,Z*O,(te+ne/U.locationSize*fe)*O,W)}else{if(K.isInstancedBufferAttribute){for(let H=0;H<U.locationSize;H++)p(U.location+H,K.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let H=0;H<U.locationSize;H++)g(U.location+H);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let H=0;H<U.locationSize;H++)_(U.location+H,ne/U.locationSize,E,se,ne*O,ne/U.locationSize*H*O,W)}}else if(D!==void 0){const se=D[F];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(U.location,se);break;case 3:i.vertexAttrib3fv(U.location,se);break;case 4:i.vertexAttrib4fv(U.location,se);break;default:i.vertexAttrib1fv(U.location,se)}}}}x()}function C(){P();for(const b in n){const L=n[b];for(const N in L){const B=L[N];for(const k in B)h(B[k].object),delete B[k];delete L[N]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const N in L){const B=L[N];for(const k in B)h(B[k].object),delete B[k];delete L[N]}delete n[b.id]}function T(b){for(const L in n){const N=n[L];if(N[b.id]===void 0)continue;const B=N[b.id];for(const k in B)h(B[k].object),delete B[k];delete N[b.id]}}function P(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Av(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ii&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==En&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:M}}function Rv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Li,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const x=r?0:n,_=x*4;let y=p.clippingState||null;c.value=y,y=h(m,f,_,d);for(let C=0;C!==_;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==v;++_,y+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Pv(i){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=Us:o===Mc&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===Mc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hm(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kl extends Gd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,kh=[.125,.215,.35,.446,.526,.582],ki=20,La=new kl,Nh=new ce;let Ia=null,Da=0,Ua=0,ka=!1;const Ii=(1+Math.sqrt(5))/2,us=1/Ii,Fh=[new R(-Ii,us,0),new R(Ii,us,0),new R(-us,0,Ii),new R(us,0,Ii),new R(0,Ii,-us),new R(0,Ii,us),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,Ua),this._renderer.xr.enabled=ka,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:On,format:pn,colorSpace:Gs,depthBuffer:!1},s=Oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(r)),this._blurMaterial=Iv(r,e,t)}return s}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,s){const o=new un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Nh),h.toneMapping=vi,h.autoClear=!1;const d=new ra({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new oe(new tt,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Nh),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;to(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Us||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;to(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fh[(s-r-1)%Fh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):ki;g>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const p=[];let x=0;for(let T=0;T<ki;++T){const P=T/v,S=Math.exp(-P*P/2);p.push(S),T===0?x+=S:T<g&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const y=this._sizeLods[s],C=3*y*(s>_-Ms?s-_+Ms:0),M=4*(this._cubeSize-y);to(t,C,M,3*y,2*y),c.setRenderTarget(t),c.render(u,La)}}function Lv(i){const e=[],t=[],n=[];let s=i;const r=i-Ms+1+kh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ms?c=kh[a-i+Ms-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,P=M>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(S,v*m*M),_.set(f,g*m*M);const b=[M,M,M,M,M,M];y.set(b,p*m*M)}const C=new ut;C.setAttribute("position",new Ct(x,v)),C.setAttribute("uv",new Ct(_,g)),C.setAttribute("faceIndex",new Ct(y,p)),e.push(C),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oh(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Iv(i,e,t){const n=new Float32Array(ki),s=new R(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function zh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function Dv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===bc||c===Mc,h=c===Us||c===ks;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Jc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Jc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Uv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kv(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,y=x.length;_<y;_+=3){const C=x[_+0],M=x[_+1],T=x[_+2];f.push(C,M,M,T,T,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const C=_+0,M=_+1,T=_+2;f.push(C,M,M,T,T,C)}}else return;const g=new(kd(f)?Hd:Bd)(f,1);g.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Nv(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*v[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ov(i,e,t){const n=new WeakMap,s=new Mt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*M*4*u),P=new Fd(T,C,M,u);P.type=En,P.needsUpdate=!0;const S=y*4;for(let L=0;L<u;L++){const N=p[L],B=x[L],k=_[L],G=C*M*4*L;for(let D=0;D<N.count;D++){const F=D*S;m===!0&&(s.fromBufferAttribute(N,D),T[G+F+0]=s.x,T[G+F+1]=s.y,T[G+F+2]=s.z,T[G+F+3]=0),v===!0&&(s.fromBufferAttribute(B,D),T[G+F+4]=s.x,T[G+F+5]=s.y,T[G+F+6]=s.z,T[G+F+7]=0),g===!0&&(s.fromBufferAttribute(k,D),T[G+F+8]=s.x,T[G+F+9]=s.y,T[G+F+10]=s.z,T[G+F+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new le(C,M)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Xd extends Bt{constructor(e,t,n,s,r,a,o,c,l,h=Cs){if(h!==Cs&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=Vi),n===void 0&&h===Fs&&(n=Ns),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qd=new Bt,Hh=new Xd(1,1),jd=new Fd,Yd=new Em,Zd=new Wd,Vh=[],Gh=[],Wh=new Float32Array(16),$h=new Float32Array(9),Xh=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Pt(t,n)}}function $v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Pt(t,n)}}function Xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Pt(t,n)}}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function t_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=Ud,r=Hh):r=qd,t.setTexture2D(e||r,s)}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yd,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zd,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jd,s)}function r_(i){switch(i){case 5126:return Bv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return $v;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return jv;case 35668:case 35672:return Yv;case 35669:case 35673:return Zv;case 5125:return Kv;case 36294:return Jv;case 36295:return Qv;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u_(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function v_(i,e){i.uniform1uiv(this.addr,e)}function __(i,e){i.uniform2uiv(this.addr,e)}function x_(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||qd,r[a])}function M_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yd,r[a])}function S_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zd,r[a])}function T_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jd,r[a])}function w_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return v_;case 36294:return __;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return T_}}class E_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}}class A_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class C_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function R_(i,e,t){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),a=Na.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qh(t,l===void 0?new E_(o,i,e):new A_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new C_(o),qh(t,u)),t=u}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function jh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P_=37297;let L_=0;function I_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yh=new Ke;function D_(i){nt._getMatrix(Yh,nt.workingColorSpace,i);const e=`mat3( ${Yh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(i.getShaderSource(e),a)}else return s}function U_(i,e){const t=D_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k_(i,e){let t;switch(e){case xd:t="Linear";break;case yd:t="Reinhard";break;case bd:t="Cineon";break;case Sl:t="ACESFilmic";break;case Md:t="AgX";break;case Sd:t="Neutral";break;case Wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new R;function N_(){nt.getLuminanceCoefficients(no);const i=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function O_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function dr(i){return i!==""}function Kh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(B_,V_)}const H_=new Map;function V_(i,e){let t=Je[e];if(t===void 0){const n=H_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(G_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function $_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case ks:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function j_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function Y_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$_(t),l=X_(t),h=q_(t),u=j_(t),f=Y_(t),d=F_(t),m=O_(r),v=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(g=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Je.tonemapping_pars_fragment:"",t.toneMapping!==vi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,U_("linearToOutputTexel",t.outputColorSpace),N_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Qc(a),a=Kh(a,t),a=Jh(a,t),o=Qc(o),o=Kh(o,t),o=Jh(o,t),a=Qh(a),o=Qh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+g+a,y=x+p+o,C=jh(s,s.VERTEX_SHADER,_),M=jh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,C),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),k=s.getShaderInfoLog(M).trim();let G=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,M);else{const F=Zh(s,C,"vertex"),U=Zh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+F+`
`+U)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||k==="")&&(D=!1);D&&(L.diagnostics={runnable:G,programLog:N,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(C),s.deleteShader(M),P=new Do(s,v),S=z_(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,P_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let K_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q_(e),t.set(e,n)),n}}class Q_{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}}function ex(i,e,t,n,s,r,a){const o=new Od,c=new J_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,N,B){const k=N.fog,G=B.geometry,D=S.isMeshStandardMaterial?N.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),U=F&&F.mapping===ia?F.image.height:null,K=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=se!==void 0?se.length:0;let be=0;G.morphAttributes.position!==void 0&&(be=1),G.morphAttributes.normal!==void 0&&(be=2),G.morphAttributes.color!==void 0&&(be=3);let ke,E,O,W;if(K){const at=Dn[K];ke=at.vertexShader,E=at.fragmentShader}else ke=S.vertexShader,E=S.fragmentShader,c.update(S),O=c.getVertexShaderID(S),W=c.getFragmentShaderID(S);const H=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),te=B.isInstancedMesh===!0,fe=B.isBatchedMesh===!0,Oe=!!S.map,ge=!!S.matcap,Xe=!!F,V=!!S.aoMap,Et=!!S.lightMap,He=!!S.bumpMap,Ve=!!S.normalMap,Fe=!!S.displacementMap,ve=!!S.emissiveMap,Ce=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,q=S.clearcoat>0,ee=S.dispersion>0,re=S.iridescence>0,Q=S.sheen>0,Re=S.transmission>0,me=w&&!!S.anisotropyMap,Se=q&&!!S.clearcoatMap,Qe=q&&!!S.clearcoatNormalMap,ae=q&&!!S.clearcoatRoughnessMap,Te=re&&!!S.iridescenceMap,ze=re&&!!S.iridescenceThicknessMap,$e=Q&&!!S.sheenColorMap,Me=Q&&!!S.sheenRoughnessMap,et=!!S.specularMap,he=!!S.specularColorMap,Be=!!S.specularIntensityMap,z=Re&&!!S.transmissionMap,ue=Re&&!!S.thicknessMap,J=!!S.gradientMap,ie=!!S.alphaMap,ye=S.alphaTest>0,_e=!!S.alphaHash,Ye=!!S.extensions;let _t=vi;S.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Ut={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:E,defines:S.defines,customVertexShaderID:O,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:fe,batchingColor:fe&&B._colorsTexture!==null,instancing:te,instancingColor:te&&B.instanceColor!==null,instancingMorph:te&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Gs,alphaToCoverage:!!S.alphaToCoverage,map:Oe,matcap:ge,envMap:Xe,envMapMode:Xe&&F.mapping,envMapCubeUVHeight:U,aoMap:V,lightMap:Et,bumpMap:He,normalMap:Ve,displacementMap:f&&Fe,emissiveMap:ve,normalMapObjectSpace:Ve&&S.normalMapType===jp,normalMapTangentSpace:Ve&&S.normalMapType===Ll,metalnessMap:Ce,roughnessMap:I,anisotropy:w,anisotropyMap:me,clearcoat:q,clearcoatMap:Se,clearcoatNormalMap:Qe,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:Te,iridescenceThicknessMap:ze,sheen:Q,sheenColorMap:$e,sheenRoughnessMap:Me,specularMap:et,specularColorMap:he,specularIntensityMap:Be,transmission:Re,transmissionMap:z,thicknessMap:ue,gradientMap:J,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:_e,combine:S.combine,mapUv:Oe&&v(S.map.channel),aoMapUv:V&&v(S.aoMap.channel),lightMapUv:Et&&v(S.lightMap.channel),bumpMapUv:He&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Fe&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:Ce&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:me&&v(S.anisotropyMap.channel),clearcoatMapUv:Se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:et&&v(S.specularMap.channel),specularColorMapUv:he&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:ie&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ve||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Oe||ie),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Z,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jt,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const b=m[S.type];let L;if(b){const N=Dn[b];L=zs.clone(N.uniforms)}else L=S.uniforms;return L}function C(S,b){let L;for(let N=0,B=h.length;N<B;N++){const k=h[N];if(k.cacheKey===b){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Z_(i,b,S,r),h.push(L)),L}function M(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:P}}function tx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,f,d,m,v,g){const p=a(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,v,g){const p=a(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||nx),n.length>1&&n.sort(f||tu),s.length>1&&s.sort(f||tu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ix(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new nu,i.set(n,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ce};break;case"SpotLight":t={position:new R,direction:new R,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ox=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cx(i){const e=new sx,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Ee,a=new Ee;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,_=0,y=0,C=0,M=0,T=0;l.sort(ax);for(let S=0,b=l.length;S<b;S++){const L=l[S],N=L.color,B=L.intensity,k=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],B);T++}else if(L.isDirectionalLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,U=t.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=D,d++}else if(L.isSpotLight){const D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(N).multiplyScalar(B),D.distance=k,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[v]=D;const F=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,F.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[v]=F.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=G,y++}v++}else if(L.isRectAreaLight){const D=e.get(L);D.color.copy(N).multiplyScalar(B),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=D,g++}else if(L.isPointLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){const F=L.shadow,U=t.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=D,m++}else if(L.isHemisphereLight){const D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(B),D.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,P.directionalLength=d,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=T,n.version=ox++)}function c(l,h){let u=0,f=0,d=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const _=l[p];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function iu(i){const e=new cx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function lx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new iu(i),e.set(s,[o])):r>=a.length?(o=new iu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class hx extends An{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ux extends An{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(i,e,t){let n=new Ul;const s=new le,r=new le,a=new Mt,o=new hx({depthPacking:qp}),c=new ux,l={},h=t.maxTextureSize,u={[_i]:Xt,[Xt]:_i,[Jt]:Jt},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ut;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new oe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let p=this.type;this.render=function(M,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Zn&&this.type===Zn,k=p===Zn&&this.type!==Zn;for(let G=0,D=M.length;G<D;G++){const F=M[G],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const K=U.getFrameExtents();if(s.multiply(K),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,U.mapSize.y=r.y)),U.map===null||B===!0||k===!0){const ne=this.type!==Zn?{minFilter:on,magFilter:on}:{};U.map!==null&&U.map.dispose(),U.map=new mn(s.x,s.y,ne),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const se=U.getViewportCount();for(let ne=0;ne<se;ne++){const be=U.getViewport(ne);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(a),U.updateMatrices(F,ne),n=U.getFrustum(),y(T,P,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===Zn&&x(U,P),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function x(M,T){const P=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,P,d,v,null)}function _(M,T,P,S){let b=null;const L=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=b.uuid,B=T.uuid;let k=l[N];k===void 0&&(k={},l[N]=k);let G=k[B];G===void 0&&(G=b.clone(),k[B]=G,T.addEventListener("dispose",C)),b=G}if(b.visible=T.visible,b.wireframe=T.wireframe,S===Zn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=P}return b}function y(M,T,P,S,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Zn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const B=e.update(M),k=M.material;if(Array.isArray(k)){const G=B.groups;for(let D=0,F=G.length;D<F;D++){const U=G[D],K=k[U.materialIndex];if(K&&K.visible){const se=_(M,K,S,b);M.onBeforeShadow(i,M,T,P,B,se,U),i.renderBufferDirect(P,null,B,se,M,U),M.onAfterShadow(i,M,T,P,B,se,U)}}}else if(k.visible){const G=_(M,k,S,b);M.onBeforeShadow(i,M,T,P,B,G,null),i.renderBufferDirect(P,null,B,G,M,null),M.onAfterShadow(i,M,T,P,B,G,null)}}const N=M.children;for(let B=0,k=N.length;B<k;B++)y(N[B],T,P,S,b)}function C(M){M.target.removeEventListener("dispose",C);for(const P in l){const S=l[P],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const mx={[pc]:mc,[gc]:xc,[vc]:yc,[Ds]:_c,[mc]:pc,[xc]:gc,[yc]:vc,[_c]:Ds};function gx(i,e){function t(){let z=!1;const ue=new Mt;let J=null;const ie=new Mt(0,0,0,0);return{setMask:function(ye){J!==ye&&!z&&(i.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){z=ye},setClear:function(ye,_e,Ye,_t,Ut){Ut===!0&&(ye*=_t,_e*=_t,Ye*=_t),ue.set(ye,_e,Ye,_t),ie.equals(ue)===!1&&(i.clearColor(ye,_e,Ye,_t),ie.copy(ue))},reset:function(){z=!1,J=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,ue=!1,J=null,ie=null,ye=null;return{setReversed:function(_e){if(ue!==_e){const Ye=e.get("EXT_clip_control");ue?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const _t=ye;ye=null,this.setClear(_t)}ue=_e},getReversed:function(){return ue},setTest:function(_e){_e?H(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(_e){J!==_e&&!z&&(i.depthMask(_e),J=_e)},setFunc:function(_e){if(ue&&(_e=mx[_e]),ie!==_e){switch(_e){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=_e}},setLocked:function(_e){z=_e},setClear:function(_e){ye!==_e&&(ue&&(_e=1-_e),i.clearDepth(_e),ye=_e)},reset:function(){z=!1,J=null,ie=null,ye=null,ue=!1}}}function s(){let z=!1,ue=null,J=null,ie=null,ye=null,_e=null,Ye=null,_t=null,Ut=null;return{setTest:function(at){z||(at?H(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(at){ue!==at&&!z&&(i.stencilMask(at),ue=at)},setFunc:function(at,vn,Vn){(J!==at||ie!==vn||ye!==Vn)&&(i.stencilFunc(at,vn,Vn),J=at,ie=vn,ye=Vn)},setOp:function(at,vn,Vn){(_e!==at||Ye!==vn||_t!==Vn)&&(i.stencilOp(at,vn,Vn),_e=at,Ye=vn,_t=Vn)},setLocked:function(at){z=at},setClear:function(at){Ut!==at&&(i.clearStencil(at),Ut=at)},reset:function(){z=!1,ue=null,J=null,ie=null,ye=null,_e=null,Ye=null,_t=null,Ut=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,C=null,M=null,T=new ce(0,0,0),P=0,S=!1,b=null,L=null,N=null,B=null,k=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=F>=2);let K=null,se={};const ne=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ke=new Mt().fromArray(ne),E=new Mt().fromArray(be);function O(z,ue,J,ie){const ye=new Uint8Array(4),_e=i.createTexture();i.bindTexture(z,_e),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<J;Ye++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ue+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return _e}const W={};W[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(i.DEPTH_TEST),a.setFunc(Ds),He(!1),Ve(lh),H(i.CULL_FACE),V(ei);function H(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Z(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function te(z,ue){return u[z]!==ue?(i.bindFramebuffer(z,ue),u[z]=ue,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function fe(z,ue){let J=d,ie=!1;if(z){J=f.get(ue),J===void 0&&(J=[],f.set(ue,J));const ye=z.textures;if(J.length!==ye.length||J[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ye=ye.length;_e<Ye;_e++)J[_e]=i.COLOR_ATTACHMENT0+_e;J.length=ye.length,ie=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ie=!0);ie&&i.drawBuffers(J)}function Oe(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const ge={[Ui]:i.FUNC_ADD,[wp]:i.FUNC_SUBTRACT,[Ep]:i.FUNC_REVERSE_SUBTRACT};ge[Ap]=i.MIN,ge[Cp]=i.MAX;const Xe={[Rp]:i.ZERO,[Pp]:i.ONE,[Lp]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[kp]:i.DST_COLOR,[Dp]:i.DST_ALPHA,[Ip]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Up]:i.ONE_MINUS_DST_ALPHA,[Op]:i.CONSTANT_COLOR,[zp]:i.ONE_MINUS_CONSTANT_COLOR,[Bp]:i.CONSTANT_ALPHA,[Hp]:i.ONE_MINUS_CONSTANT_ALPHA};function V(z,ue,J,ie,ye,_e,Ye,_t,Ut,at){if(z===ei){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(H(i.BLEND),v=!0),z!==Tp){if(z!==g||at!==S){if((p!==Ui||y!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,y=Ui),at)switch(z){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,_=null,C=null,M=null,T.set(0,0,0),P=0,g=z,S=at}return}ye=ye||ue,_e=_e||J,Ye=Ye||ie,(ue!==p||ye!==y)&&(i.blendEquationSeparate(ge[ue],ge[ye]),p=ue,y=ye),(J!==x||ie!==_||_e!==C||Ye!==M)&&(i.blendFuncSeparate(Xe[J],Xe[ie],Xe[_e],Xe[Ye]),x=J,_=ie,C=_e,M=Ye),(_t.equals(T)===!1||Ut!==P)&&(i.blendColor(_t.r,_t.g,_t.b,Ut),T.copy(_t),P=Ut),g=z,S=!1}function Et(z,ue){z.side===Jt?Z(i.CULL_FACE):H(i.CULL_FACE);let J=z.side===Xt;ue&&(J=!J),He(J),z.blending===As&&z.transparent===!1?V(ei):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ie=z.stencilWrite;o.setTest(ie),ie&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function Ve(z){z!==Mp?(H(i.CULL_FACE),z!==L&&(z===lh?i.cullFace(i.BACK):z===Sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),L=z}function Fe(z){z!==N&&(D&&i.lineWidth(z),N=z)}function ve(z,ue,J){z?(H(i.POLYGON_OFFSET_FILL),(B!==ue||k!==J)&&(i.polygonOffset(ue,J),B=ue,k=J)):Z(i.POLYGON_OFFSET_FILL)}function Ce(z){z?H(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function I(z){z===void 0&&(z=i.TEXTURE0+G-1),K!==z&&(i.activeTexture(z),K=z)}function w(z,ue,J){J===void 0&&(K===null?J=i.TEXTURE0+G-1:J=K);let ie=se[J];ie===void 0&&(ie={type:void 0,texture:void 0},se[J]=ie),(ie.type!==z||ie.texture!==ue)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(z,ue||W[z]),ie.type=z,ie.texture=ue)}function q(){const z=se[K];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(z){ke.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function Me(z){E.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),E.copy(z))}function et(z,ue){let J=l.get(ue);J===void 0&&(J=new WeakMap,l.set(ue,J));let ie=J.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(ue,z.name),J.set(z,ie))}function he(z,ue){const ie=l.get(ue).get(z);c.get(ue)!==ie&&(i.uniformBlockBinding(ue,ie,z.__bindingPointIndex),c.set(ue,ie))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,se={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,_=null,y=null,C=null,M=null,T=new ce(0,0,0),P=0,S=!1,b=null,L=null,N=null,B=null,k=null,ke.set(0,0,i.canvas.width,i.canvas.height),E.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:Z,bindFramebuffer:te,drawBuffers:fe,useProgram:Oe,setBlending:V,setMaterial:Et,setFlipSided:He,setCullFace:Ve,setLineWidth:Fe,setPolygonOffset:ve,setScissorTest:Ce,activeTexture:I,bindTexture:w,unbindTexture:q,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:Te,texImage3D:ze,updateUBOMapping:et,uniformBlockBinding:he,texStorage2D:Qe,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:$e,viewport:Me,reset:Be}}function su(i,e,t,n){const s=vx(n);switch(t){case Cd:return i*e;case Pd:return i*e;case Ld:return i*e*2;case Al:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case Id:return i*e*2/s.components*s.byteLength;case Rl:return i*e*2/s.components*s.byteLength;case Rd:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Pl:return i*e*4/s.components*s.byteLength;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(i,16)*Math.max(e,8)/4;case Tc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case Cc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case $c:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dd:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vx(i){switch(i){case ii:case wd:return{byteLength:1,components:1};case Ar:case Ed:case On:return{byteLength:2,components:1};case wl:case El:return{byteLength:2,components:4};case Vi:case Tl:case En:return{byteLength:4,components:1};case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _x(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return d?new OffscreenCanvas(I,w):Go("canvas")}function v(I,w,q){let ee=1;const re=Ce(I);if((re.width>q||re.height>q)&&(ee=q/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(ee*re.width),Re=Math.floor(ee*re.height);u===void 0&&(u=m(Q,Re));const me=w?m(Q,Re):u;return me.width=Q,me.height=Re,me.getContext("2d").drawImage(I,0,0,Q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Re+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,w,q,ee,re=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=w;if(w===i.RED&&(q===i.FLOAT&&(Q=i.R32F),q===i.HALF_FLOAT&&(Q=i.R16F),q===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.R8UI),q===i.UNSIGNED_SHORT&&(Q=i.R16UI),q===i.UNSIGNED_INT&&(Q=i.R32UI),q===i.BYTE&&(Q=i.R8I),q===i.SHORT&&(Q=i.R16I),q===i.INT&&(Q=i.R32I)),w===i.RG&&(q===i.FLOAT&&(Q=i.RG32F),q===i.HALF_FLOAT&&(Q=i.RG16F),q===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RG8UI),q===i.UNSIGNED_SHORT&&(Q=i.RG16UI),q===i.UNSIGNED_INT&&(Q=i.RG32UI),q===i.BYTE&&(Q=i.RG8I),q===i.SHORT&&(Q=i.RG16I),q===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),q===i.UNSIGNED_INT&&(Q=i.RGB32UI),q===i.BYTE&&(Q=i.RGB8I),q===i.SHORT&&(Q=i.RGB16I),q===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),q===i.UNSIGNED_INT&&(Q=i.RGBA32UI),q===i.BYTE&&(Q=i.RGBA8I),q===i.SHORT&&(Q=i.RGBA16I),q===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),w===i.RGBA){const Re=re?sa:nt.getTransfer(ee);q===i.FLOAT&&(Q=i.RGBA32F),q===i.HALF_FLOAT&&(Q=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Q=Re===ct?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(I,w){let q;return I?w===null||w===Vi||w===Ns?q=i.DEPTH24_STENCIL8:w===En?q=i.DEPTH32F_STENCIL8:w===Ar&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===Ns?q=i.DEPTH_COMPONENT24:w===En?q=i.DEPTH_COMPONENT32F:w===Ar&&(q=i.DEPTH_COMPONENT16),q}function C(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function M(I){const w=I.target;w.removeEventListener("dispose",M),P(w),w.isVideoTexture&&h.delete(w)}function T(I){const w=I.target;w.removeEventListener("dispose",T),b(w)}function P(I){const w=n.get(I);if(w.__webglInit===void 0)return;const q=I.source,ee=f.get(q);if(ee){const re=ee[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(I),Object.keys(ee).length===0&&f.delete(q)}n.remove(I)}function S(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const q=I.source,ee=f.get(q);delete ee[w.__cacheKey],a.memory.textures--}function b(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let re=0;re<w.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)i.deleteFramebuffer(w.__webglFramebuffer[ee]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=I.textures;for(let ee=0,re=q.length;ee<re;ee++){const Q=n.get(q[ee]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(q[ee])}n.remove(I)}let L=0;function N(){L=0}function B(){const I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function k(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function G(I,w){const q=n.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(q,I,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function D(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){E(q,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function F(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){E(q,I,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function U(I,w){const q=n.get(I);if(I.version>0&&q.__version!==I.version){O(q,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const K={[ni]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},se={[on]:i.NEAREST,[$p]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},ne={[Yp]:i.NEVER,[tm]:i.ALWAYS,[Zp]:i.LESS,[Ud]:i.LEQUAL,[Kp]:i.EQUAL,[em]:i.GEQUAL,[Jp]:i.GREATER,[Qp]:i.NOTEQUAL};function be(I,w){if(w.type===En&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===ha||w.magFilter===Nr||w.magFilter===Oi||w.minFilter===kn||w.minFilter===ha||w.minFilter===Nr||w.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==Nr&&w.minFilter!==Oi||w.type===En&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ke(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",M));const ee=w.source;let re=f.get(ee);re===void 0&&(re={},f.set(ee,re));const Q=k(w);if(Q!==I.__cacheKey){re[Q]===void 0&&(re[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[Q].usedTimes++;const Re=re[I.__cacheKey];Re!==void 0&&(re[I.__cacheKey].usedTimes--,Re.usedTimes===0&&S(w)),I.__cacheKey=Q,I.__webglTexture=re[Q].texture}return q}function E(I,w,q){let ee=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=i.TEXTURE_3D);const re=ke(I,w),Q=w.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+q);const Re=n.get(Q);if(Q.version!==Re.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const me=nt.getPrimaries(nt.workingColorSpace),Se=w.colorSpace===pi?null:nt.getPrimaries(w.colorSpace),Qe=w.colorSpace===pi||me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ae=v(w.image,!1,s.maxTextureSize);ae=ve(w,ae);const Te=r.convert(w.format,w.colorSpace),ze=r.convert(w.type);let $e=_(w.internalFormat,Te,ze,w.colorSpace,w.isVideoTexture);be(ee,w);let Me;const et=w.mipmaps,he=w.isVideoTexture!==!0,Be=Re.__version===void 0||re===!0,z=Q.dataReady,ue=C(w,ae);if(w.isDepthTexture)$e=y(w.format===Fs,w.type),Be&&(he?t.texStorage2D(i.TEXTURE_2D,1,$e,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,$e,ae.width,ae.height,0,Te,ze,null));else if(w.isDataTexture)if(et.length>0){he&&Be&&t.texStorage2D(i.TEXTURE_2D,ue,$e,et[0].width,et[0].height);for(let J=0,ie=et.length;J<ie;J++)Me=et[J],he?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,Te,ze,Me.data):t.texImage2D(i.TEXTURE_2D,J,$e,Me.width,Me.height,0,Te,ze,Me.data);w.generateMipmaps=!1}else he?(Be&&t.texStorage2D(i.TEXTURE_2D,ue,$e,ae.width,ae.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,ze,ae.data)):t.texImage2D(i.TEXTURE_2D,0,$e,ae.width,ae.height,0,Te,ze,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){he&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,$e,et[0].width,et[0].height,ae.depth);for(let J=0,ie=et.length;J<ie;J++)if(Me=et[J],w.format!==pn)if(Te!==null)if(he){if(z)if(w.layerUpdates.size>0){const ye=su(Me.width,Me.height,w.format,w.type);for(const _e of w.layerUpdates){const Ye=Me.data.subarray(_e*ye/Me.data.BYTES_PER_ELEMENT,(_e+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,_e,Me.width,Me.height,1,Te,Ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,$e,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,ae.depth,Te,ze,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,$e,Me.width,Me.height,ae.depth,0,Te,ze,Me.data)}else{he&&Be&&t.texStorage2D(i.TEXTURE_2D,ue,$e,et[0].width,et[0].height);for(let J=0,ie=et.length;J<ie;J++)Me=et[J],w.format!==pn?Te!==null?he?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,$e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,Te,ze,Me.data):t.texImage2D(i.TEXTURE_2D,J,$e,Me.width,Me.height,0,Te,ze,Me.data)}else if(w.isDataArrayTexture)if(he){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,$e,ae.width,ae.height,ae.depth),z)if(w.layerUpdates.size>0){const J=su(ae.width,ae.height,w.format,w.type);for(const ie of w.layerUpdates){const ye=ae.data.subarray(ie*J/ae.data.BYTES_PER_ELEMENT,(ie+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,Te,ze,ye)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,ze,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,ae.width,ae.height,ae.depth,0,Te,ze,ae.data);else if(w.isData3DTexture)he?(Be&&t.texStorage3D(i.TEXTURE_3D,ue,$e,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,ze,ae.data)):t.texImage3D(i.TEXTURE_3D,0,$e,ae.width,ae.height,ae.depth,0,Te,ze,ae.data);else if(w.isFramebufferTexture){if(Be)if(he)t.texStorage2D(i.TEXTURE_2D,ue,$e,ae.width,ae.height);else{let J=ae.width,ie=ae.height;for(let ye=0;ye<ue;ye++)t.texImage2D(i.TEXTURE_2D,ye,$e,J,ie,0,Te,ze,null),J>>=1,ie>>=1}}else if(et.length>0){if(he&&Be){const J=Ce(et[0]);t.texStorage2D(i.TEXTURE_2D,ue,$e,J.width,J.height)}for(let J=0,ie=et.length;J<ie;J++)Me=et[J],he?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Te,ze,Me):t.texImage2D(i.TEXTURE_2D,J,$e,Te,ze,Me);w.generateMipmaps=!1}else if(he){if(Be){const J=Ce(ae);t.texStorage2D(i.TEXTURE_2D,ue,$e,J.width,J.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,ze,ae)}else t.texImage2D(i.TEXTURE_2D,0,$e,Te,ze,ae);g(w)&&p(ee),Re.__version=Q.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function O(I,w,q){if(w.image.length!==6)return;const ee=ke(I,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);const Q=n.get(re);if(re.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+q);const Re=nt.getPrimaries(nt.workingColorSpace),me=w.colorSpace===pi?null:nt.getPrimaries(w.colorSpace),Se=w.colorSpace===pi||Re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let ie=0;ie<6;ie++)!Qe&&!ae?Te[ie]=v(w.image[ie],!0,s.maxCubemapSize):Te[ie]=ae?w.image[ie].image:w.image[ie],Te[ie]=ve(w,Te[ie]);const ze=Te[0],$e=r.convert(w.format,w.colorSpace),Me=r.convert(w.type),et=_(w.internalFormat,$e,Me,w.colorSpace),he=w.isVideoTexture!==!0,Be=Q.__version===void 0||ee===!0,z=re.dataReady;let ue=C(w,ze);be(i.TEXTURE_CUBE_MAP,w);let J;if(Qe){he&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,et,ze.width,ze.height);for(let ie=0;ie<6;ie++){J=Te[ie].mipmaps;for(let ye=0;ye<J.length;ye++){const _e=J[ye];w.format!==pn?$e!==null?he?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,_e.width,_e.height,$e,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,et,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,_e.width,_e.height,$e,Me,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,et,_e.width,_e.height,0,$e,Me,_e.data)}}}else{if(J=w.mipmaps,he&&Be){J.length>0&&ue++;const ie=Ce(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,et,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){he?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te[ie].width,Te[ie].height,$e,Me,Te[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,Te[ie].width,Te[ie].height,0,$e,Me,Te[ie].data);for(let ye=0;ye<J.length;ye++){const Ye=J[ye].image[ie].image;he?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Ye.width,Ye.height,$e,Me,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,et,Ye.width,Ye.height,0,$e,Me,Ye.data)}}else{he?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,$e,Me,Te[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,$e,Me,Te[ie]);for(let ye=0;ye<J.length;ye++){const _e=J[ye];he?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,$e,Me,_e.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,et,$e,Me,_e.image[ie])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),Q.__version=re.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function W(I,w,q,ee,re,Q){const Re=r.convert(q.format,q.colorSpace),me=r.convert(q.type),Se=_(q.internalFormat,Re,me,q.colorSpace),Qe=n.get(w),ae=n.get(q);if(ae.__renderTarget=w,!Qe.__hasExternalTextures){const Te=Math.max(1,w.width>>Q),ze=Math.max(1,w.height>>Q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,Se,Te,ze,w.depth,0,Re,me,null):t.texImage2D(re,Q,Se,Te,ze,0,Re,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,re,ae.__webglTexture,0,He(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,re,ae.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(I,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const ee=w.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,Q=y(w.stencilBuffer,re),Re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=He(w);Ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,Q,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,I)}else{const ee=w.textures;for(let re=0;re<ee.length;re++){const Q=ee[re],Re=r.convert(Q.format,Q.colorSpace),me=r.convert(Q.type),Se=_(Q.internalFormat,Re,me,Q.colorSpace),Qe=He(w);q&&Ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,w.width,w.height):Ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Se,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const re=ee.__webglTexture,Q=He(w);if(w.depthTexture.format===Cs)Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(w.depthTexture.format===Fs)Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function te(I){const w=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ee}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,I)}else if(q){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=i.createRenderbuffer(),H(w.__webglDepthbuffer[ee],I,!1);else{const re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),H(w.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(I,w,q){const ee=n.get(I);w!==void 0&&W(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&te(I)}function Oe(I){const w=I.texture,q=n.get(I),ee=n.get(w);I.addEventListener("dispose",T);const re=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=w.version,a.memory.textures++),Q){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let Se=0;Se<w.mipmaps.length;Se++)q.__webglFramebuffer[me][Se]=i.createFramebuffer()}else q.__webglFramebuffer[me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)q.__webglFramebuffer[me]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Re)for(let me=0,Se=re.length;me<Se;me++){const Qe=n.get(re[me]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ve(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const Se=re[me];q.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const Qe=r.convert(Se.format,Se.colorSpace),ae=r.convert(Se.type),Te=_(Se.internalFormat,Qe,ae,Se.colorSpace,I.isXRRenderTarget===!0),ze=He(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Te,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,q.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),H(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),be(i.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)W(q.__webglFramebuffer[me][Se],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else W(q.__webglFramebuffer[me],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,Se=re.length;me<Se;me++){const Qe=re[me],ae=n.get(Qe);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),be(i.TEXTURE_2D,Qe),W(q.__webglFramebuffer,I,Qe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),g(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ee.__webglTexture),be(me,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)W(q.__webglFramebuffer[Se],I,w,i.COLOR_ATTACHMENT0,me,Se);else W(q.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,me,0);g(w)&&p(me),t.unbindTexture()}I.depthBuffer&&te(I)}function ge(I){const w=I.textures;for(let q=0,ee=w.length;q<ee;q++){const re=w[q];if(g(re)){const Q=x(I),Re=n.get(re).__webglTexture;t.bindTexture(Q,Re),p(Q),t.unbindTexture()}}}const Xe=[],V=[];function Et(I){if(I.samples>0){if(Ve(I)===!1){const w=I.textures,q=I.width,ee=I.height;let re=i.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(I),me=w.length>1;if(me)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);const Qe=n.get(w[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,q,ee,0,0,q,ee,re,i.NEAREST),c===!0&&(Xe.length=0,V.length=0,Xe.push(i.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Xe.push(Q),V.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);const Qe=n.get(w[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function He(I){return Math.min(s.maxSamples,I.samples)}function Ve(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function ve(I,w){const q=I.colorSpace,ee=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Gs&&q!==pi&&(nt.getTransfer(q)===ct?(ee!==pn||re!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=fe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ve}function xx(i,e){function t(n,s=pi){let r;const a=nt.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return i.BYTE;if(n===Ed)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Cd)return i.ALPHA;if(n===Rd)return i.RGB;if(n===pn)return i.RGBA;if(n===Pd)return i.LUMINANCE;if(n===Ld)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===Id)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===Co||n===Ro||n===Po||n===Lo)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===wc||n===Ec||n===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Rc||n===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Rc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Ic||n===Dc||n===Uc||n===kc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Vc||n===Gc||n===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===$c||n===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dd||n===qc||n===jc||n===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class yx extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ht extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wx extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const v=new Tx,g=t.getContextAttributes();let p=null,x=null;const _=[],y=[],C=new le;let M=null;const T=new un;T.viewport=new Mt;const P=new un;P.viewport=new Mt;const S=[T,P],b=new yx;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let O=_[E];return O===void 0&&(O=new Fa,_[E]=O),O.getTargetRaySpace()},this.getControllerGrip=function(E){let O=_[E];return O===void 0&&(O=new Fa,_[E]=O),O.getGripSpace()},this.getHand=function(E){let O=_[E];return O===void 0&&(O=new Fa,_[E]=O),O.getHandSpace()};function B(E){const O=y.indexOf(E.inputSource);if(O===-1)return;const W=_[O];W!==void 0&&(W.update(E.inputSource,E.frame,l||a),W.dispatchEvent({type:E.type,data:E.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let E=0;E<_.length;E++){const O=y[E];O!==null&&(y[E]=null,_[E].disconnect(O))}L=null,N=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const O={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new mn(d.framebufferWidth,d.framebufferHeight,{format:pn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,W=null,H=null;g.depth&&(H=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=g.stencil?Fs:Cs,W=g.stencil?Ns:Vi);const Z={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new mn(f.textureWidth,f.textureHeight,{format:pn,type:ii,depthTexture:new Xd(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(E){for(let O=0;O<E.removed.length;O++){const W=E.removed[O],H=y.indexOf(W);H>=0&&(y[H]=null,_[H].disconnect(W))}for(let O=0;O<E.added.length;O++){const W=E.added[O];let H=y.indexOf(W);if(H===-1){for(let te=0;te<_.length;te++)if(te>=y.length){y.push(W),H=te;break}else if(y[te]===null){y[te]=W,H=te;break}if(H===-1)break}const Z=_[H];Z&&Z.connect(W)}}const D=new R,F=new R;function U(E,O,W){D.setFromMatrixPosition(O.matrixWorld),F.setFromMatrixPosition(W.matrixWorld);const H=D.distanceTo(F),Z=O.projectionMatrix.elements,te=W.projectionMatrix.elements,fe=Z[14]/(Z[10]-1),Oe=Z[14]/(Z[10]+1),ge=(Z[9]+1)/Z[5],Xe=(Z[9]-1)/Z[5],V=(Z[8]-1)/Z[0],Et=(te[8]+1)/te[0],He=fe*V,Ve=fe*Et,Fe=H/(-V+Et),ve=Fe*-V;if(O.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(ve),E.translateZ(Fe),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),Z[10]===-1)E.projectionMatrix.copy(O.projectionMatrix),E.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Ce=fe+Fe,I=Oe+Fe,w=He-ve,q=Ve+(H-ve),ee=ge*Oe/I*Ce,re=Xe*Oe/I*Ce;E.projectionMatrix.makePerspective(w,q,ee,re,Ce,I),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function K(E,O){O===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(O.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let O=E.near,W=E.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(W=v.depthFar)),b.near=P.near=T.near=O,b.far=P.far=T.far=W,(L!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,N=b.far),T.layers.mask=E.layers.mask|2,P.layers.mask=E.layers.mask|4,b.layers.mask=T.layers.mask|P.layers.mask;const H=E.parent,Z=b.cameras;K(b,H);for(let te=0;te<Z.length;te++)K(Z[te],H);Z.length===2?U(b,T,P):b.projectionMatrix.copy(T.projectionMatrix),se(E,b,H)};function se(E,O,W){W===null?E.matrix.copy(O.matrixWorld):(E.matrix.copy(W.matrixWorld),E.matrix.invert(),E.matrix.multiply(O.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(O.projectionMatrix),E.projectionMatrixInverse.copy(O.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Cr*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(E){c=E,f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ne=null;function be(E,O){if(h=O.getViewerPose(l||a),m=O,h!==null){const W=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let H=!1;W.length!==b.cameras.length&&(b.cameras.length=0,H=!0);for(let te=0;te<W.length;te++){const fe=W[te];let Oe=null;if(d!==null)Oe=d.getViewport(fe);else{const Xe=u.getViewSubImage(f,fe);Oe=Xe.viewport,te===0&&(e.setRenderTargetTextures(x,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(x))}let ge=S[te];ge===void 0&&(ge=new un,ge.layers.enable(te),ge.viewport=new Mt,S[te]=ge),ge.matrix.fromArray(fe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(fe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),te===0&&(b.matrix.copy(ge.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),H===!0&&b.cameras.push(ge)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const te=u.getDepthInformation(W[0]);te&&te.isValid&&te.texture&&v.init(e,te,s.renderState)}}for(let W=0;W<_.length;W++){const H=y[W],Z=_[W];H!==null&&Z!==void 0&&Z.update(H,O,l||a)}ne&&ne(E,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}const ke=new $d;ke.setAnimationLoop(be),this.setAnimationLoop=function(E){ne=E},this.dispose=function(){}}}const Ei=new Ot,Ex=new Ee;function Ax(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,Ei.copy(y),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(Ei)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function l(x,_){let y=s[x.id];y===void 0&&(m(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",g));const C=_.program;n.updateUBOMapping(x,C);const M=e.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function h(x){const _=u();x.__bindingPointIndex=_;const y=i.createBuffer(),C=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=s[x.id],y=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=y.length;M<T;M++){const P=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,b=P.length;S<b;S++){const L=P[S];if(d(L,M,S,C)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let G=0;G<B.length;G++){const D=B[G],F=v(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,N+k,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,y,C){const M=x.value,T=_+"_"+y;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:C[T]=M.clone(),!0;{const P=C[T];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return C[T]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function m(x){const _=x.uniforms;let y=0;const C=16;for(let T=0,P=_.length;T<P;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,L=S.length;b<L;b++){const N=S[b],B=Array.isArray(N.value)?N.value:[N.value];for(let k=0,G=B.length;k<G;k++){const D=B[k],F=v(D),U=y%C,K=U%F.boundary,se=U+K;y+=K,se!==0&&C-se<F.storage&&(y+=C-se),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}const M=y%C;return M>0&&(y+=C-M),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Rx{constructor(e={}){const{canvas:t=_m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=vi,this.toneMappingExposure=1;const y=this;let C=!1,M=0,T=0,P=null,S=-1,b=null;const L=new Mt,N=new Mt;let B=null;const k=new ce(0);let G=0,D=t.width,F=t.height,U=1,K=null,se=null;const ne=new Mt(0,0,D,F),be=new Mt(0,0,D,F);let ke=!1;const E=new Ul;let O=!1,W=!1;const H=new Ee,Z=new Ee,te=new R,fe=new Mt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Xe(){return P===null?U:1}let V=n;function Et(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),V===null){const $="webgl2";if(V=Et($,A),V===null)throw Et($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let He,Ve,Fe,ve,Ce,I,w,q,ee,re,Q,Re,me,Se,Qe,ae,Te,ze,$e,Me,et,he,Be,z;function ue(){He=new Uv(V),He.init(),he=new xx(V,He),Ve=new Cv(V,He,e,he),Fe=new gx(V,He),Ve.reverseDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),ve=new Fv(V),Ce=new tx,I=new _x(V,He,Fe,Ce,Ve,he,ve),w=new Pv(y),q=new Dv(y),ee=new Wm(V),Be=new Ev(V,ee),re=new kv(V,ee,ve,Be),Q=new zv(V,re,ee,ve),$e=new Ov(V,Ve,I),ae=new Rv(Ce),Re=new ex(y,w,q,He,Ve,Be,ae),me=new Ax(y,Ce),Se=new ix,Qe=new lx(He),ze=new wv(y,w,q,Fe,Q,d,c),Te=new px(y,Q,Ve),z=new Cx(V,ve,Ve,Fe),Me=new Av(V,He,ve),et=new Nv(V,He,ve),ve.programs=Re.programs,y.capabilities=Ve,y.extensions=He,y.properties=Ce,y.renderLists=Se,y.shadowMap=Te,y.state=Fe,y.info=ve}ue();const J=new wx(y,V);this.xr=J,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(D,F,!1))},this.getSize=function(A){return A.set(D,F)},this.setSize=function(A,$,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,F=$,t.width=Math.floor(A*U),t.height=Math.floor($*U),j===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(D*U,F*U).floor()},this.setDrawingBufferSize=function(A,$,j){D=A,F=$,U=j,t.width=Math.floor(A*j),t.height=Math.floor($*j),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,$,j,Y){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,$,j,Y),Fe.viewport(L.copy(ne).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,$,j,Y){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,$,j,Y),Fe.scissor(N.copy(be).multiplyScalar(U).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){Fe.setScissorTest(ke=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,$=!0,j=!0){let Y=0;if(A){let X=!1;if(P!==null){const de=P.texture.format;X=de===Pl||de===Rl||de===Cl}if(X){const de=P.texture.type,xe=de===ii||de===Vi||de===Ar||de===Ns||de===wl||de===El,Pe=ze.getClearColor(),Le=ze.getClearAlpha(),je=Pe.r,Ze=Pe.g,Ie=Pe.b;xe?(m[0]=je,m[1]=Ze,m[2]=Ie,m[3]=Le,V.clearBufferuiv(V.COLOR,0,m)):(v[0]=je,v[1]=Ze,v[2]=Ie,v[3]=Le,V.clearBufferiv(V.COLOR,0,v))}else Y|=V.COLOR_BUFFER_BIT}$&&(Y|=V.DEPTH_BUFFER_BIT),j&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),Qe.dispose(),Ce.dispose(),w.dispose(),q.dispose(),Q.dispose(),Be.dispose(),z.dispose(),Re.dispose(),J.dispose(),J.removeEventListener("sessionstart",th),J.removeEventListener("sessionend",nh),yi.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=ve.autoReset,$=Te.enabled,j=Te.autoUpdate,Y=Te.needsUpdate,X=Te.type;ue(),ve.autoReset=A,Te.enabled=$,Te.autoUpdate=j,Te.needsUpdate=Y,Te.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const $=A.target;$.removeEventListener("dispose",Ye),_t($)}function _t(A){Ut(A),Ce.remove(A)}function Ut(A){const $=Ce.get(A).programs;$!==void 0&&($.forEach(function(j){Re.releaseProgram(j)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,j,Y,X,de){$===null&&($=Oe);const xe=X.isMesh&&X.matrixWorld.determinant()<0,Pe=vp(A,$,j,Y,X);Fe.setMaterial(Y,xe);let Le=j.index,je=1;if(Y.wireframe===!0){if(Le=re.getWireframeAttribute(j),Le===void 0)return;je=2}const Ze=j.drawRange,Ie=j.attributes.position;let it=Ze.start*je,pt=(Ze.start+Ze.count)*je;de!==null&&(it=Math.max(it,de.start*je),pt=Math.min(pt,(de.start+de.count)*je)),Le!==null?(it=Math.max(it,0),pt=Math.min(pt,Le.count)):Ie!=null&&(it=Math.max(it,0),pt=Math.min(pt,Ie.count));const mt=pt-it;if(mt<0||mt===1/0)return;Be.setup(X,Y,Pe,j,Le);let jt,rt=Me;if(Le!==null&&(jt=ee.get(Le),rt=et,rt.setIndex(jt)),X.isMesh)Y.wireframe===!0?(Fe.setLineWidth(Y.wireframeLinewidth*Xe()),rt.setMode(V.LINES)):rt.setMode(V.TRIANGLES);else if(X.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),Fe.setLineWidth(Ne*Xe()),X.isLineSegments?rt.setMode(V.LINES):X.isLineLoop?rt.setMode(V.LINE_LOOP):rt.setMode(V.LINE_STRIP)}else X.isPoints?rt.setMode(V.POINTS):X.isSprite&&rt.setMode(V.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ne=X._multiDrawStarts,Gn=X._multiDrawCounts,ot=X._multiDrawCount,_n=Le?ee.get(Le).bytesPerElement:1,Ki=Ce.get(Y).currentProgram.getUniforms();for(let Qt=0;Qt<ot;Qt++)Ki.setValue(V,"_gl_DrawID",Qt),rt.render(Ne[Qt]/_n,Gn[Qt])}else if(X.isInstancedMesh)rt.renderInstances(it,mt,X.count);else if(j.isInstancedBufferGeometry){const Ne=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gn=Math.min(j.instanceCount,Ne);rt.renderInstances(it,mt,Gn)}else rt.render(it,mt)};function at(A,$,j){A.transparent===!0&&A.side===Jt&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,kr(A,$,j),A.side=_i,A.needsUpdate=!0,kr(A,$,j),A.side=Jt):kr(A,$,j)}this.compile=function(A,$,j=null){j===null&&(j=A),p=Qe.get(j),p.init($),_.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==j&&A.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Y=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const de=X.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const Pe=de[xe];at(Pe,j,X),Y.add(Pe)}else at(de,j,X),Y.add(de)}),_.pop(),p=null,Y},this.compileAsync=function(A,$,j=null){const Y=this.compile(A,$,j);return new Promise(X=>{function de(){if(Y.forEach(function(xe){Ce.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){X(A);return}setTimeout(de,10)}He.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let vn=null;function Vn(A){vn&&vn(A)}function th(){yi.stop()}function nh(){yi.start()}const yi=new $d;yi.setAnimationLoop(Vn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){vn=A,J.setAnimationLoop(A),A===null?yi.stop():yi.start()},J.addEventListener("sessionstart",th),J.addEventListener("sessionend",nh),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera($),$=J.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,$,P),p=Qe.get(A,_.length),p.init($),_.push(p),Z.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E.setFromProjectionMatrix(Z),W=this.localClippingEnabled,O=ae.init(this.clippingPlanes,W),g=Se.get(A,x.length),g.init(),x.push(g),J.enabled===!0&&J.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&la(de,$,-1/0,y.sortObjects)}la(A,$,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(K,se),ge=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ge&&ze.addToRenderList(g,A),this.info.render.frame++,O===!0&&ae.beginShadows();const j=p.state.shadowsArray;Te.render(j,A,$),O===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,X=g.transmissive;if(p.setupLights(),$.isArrayCamera){const de=$.cameras;if(X.length>0)for(let xe=0,Pe=de.length;xe<Pe;xe++){const Le=de[xe];sh(Y,X,A,Le)}ge&&ze.render(A);for(let xe=0,Pe=de.length;xe<Pe;xe++){const Le=de[xe];ih(g,A,Le,Le.viewport)}}else X.length>0&&sh(Y,X,A,$),ge&&ze.render(A),ih(g,A,$);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,$),Be.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],O===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function la(A,$,j,Y){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||E.intersectsSprite(A)){Y&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const xe=Q.update(A),Pe=A.material;Pe.visible&&g.push(A,xe,Pe,j,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||E.intersectsObject(A))){const xe=Q.update(A),Pe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),fe.copy(xe.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Pe)){const Le=xe.groups;for(let je=0,Ze=Le.length;je<Ze;je++){const Ie=Le[je],it=Pe[Ie.materialIndex];it&&it.visible&&g.push(A,xe,it,j,fe.z,Ie)}}else Pe.visible&&g.push(A,xe,Pe,j,fe.z,null)}}const de=A.children;for(let xe=0,Pe=de.length;xe<Pe;xe++)la(de[xe],$,j,Y)}function ih(A,$,j,Y){const X=A.opaque,de=A.transmissive,xe=A.transparent;p.setupLightsView(j),O===!0&&ae.setGlobalState(y.clippingPlanes,j),Y&&Fe.viewport(L.copy(Y)),X.length>0&&Ur(X,$,j),de.length>0&&Ur(de,$,j),xe.length>0&&Ur(xe,$,j),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function sh(A,$,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new mn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?On:ii,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=p.state.transmissionRenderTarget[Y.id],xe=Y.viewport||L;de.setSize(xe.z,xe.w);const Pe=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(k),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),ge&&ze.render(j);const Le=y.toneMapping;y.toneMapping=vi;const je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),O===!0&&ae.setGlobalState(y.clippingPlanes,Y),Ur(A,j,Y),I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ie=0,it=$.length;Ie<it;Ie++){const pt=$[Ie],mt=pt.object,jt=pt.geometry,rt=pt.material,Ne=pt.group;if(rt.side===Jt&&mt.layers.test(Y.layers)){const Gn=rt.side;rt.side=Xt,rt.needsUpdate=!0,rh(mt,j,Y,jt,rt,Ne),rt.side=Gn,rt.needsUpdate=!0,Ze=!0}}Ze===!0&&(I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de))}y.setRenderTarget(Pe),y.setClearColor(k,G),je!==void 0&&(Y.viewport=je),y.toneMapping=Le}function Ur(A,$,j){const Y=$.isScene===!0?$.overrideMaterial:null;for(let X=0,de=A.length;X<de;X++){const xe=A[X],Pe=xe.object,Le=xe.geometry,je=Y===null?xe.material:Y,Ze=xe.group;Pe.layers.test(j.layers)&&rh(Pe,$,j,Le,je,Ze)}}function rh(A,$,j,Y,X,de){A.onBeforeRender(y,$,j,Y,X,de),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(y,$,j,Y,A,de),X.transparent===!0&&X.side===Jt&&X.forceSinglePass===!1?(X.side=Xt,X.needsUpdate=!0,y.renderBufferDirect(j,$,Y,X,A,de),X.side=_i,X.needsUpdate=!0,y.renderBufferDirect(j,$,Y,X,A,de),X.side=Jt):y.renderBufferDirect(j,$,Y,X,A,de),A.onAfterRender(y,$,j,Y,X,de)}function kr(A,$,j){$.isScene!==!0&&($=Oe);const Y=Ce.get(A),X=p.state.lights,de=p.state.shadowsArray,xe=X.state.version,Pe=Re.getParameters(A,X.state,de,$,j),Le=Re.getProgramCacheKey(Pe);let je=Y.programs;Y.environment=A.isMeshStandardMaterial?$.environment:null,Y.fog=$.fog,Y.envMap=(A.isMeshStandardMaterial?q:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Ye),je=new Map,Y.programs=je);let Ze=je.get(Le);if(Ze!==void 0){if(Y.currentProgram===Ze&&Y.lightsStateVersion===xe)return ah(A,Pe),Ze}else Pe.uniforms=Re.getUniforms(A),A.onBeforeCompile(Pe,y),Ze=Re.acquireProgram(Pe,Le),je.set(Le,Ze),Y.uniforms=Pe.uniforms;const Ie=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),ah(A,Pe),Y.needsLights=xp(A),Y.lightsStateVersion=xe,Y.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Ze,Y.uniformsList=null,Ze}function oh(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Do.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function ah(A,$){const j=Ce.get(A);j.outputColorSpace=$.outputColorSpace,j.batching=$.batching,j.batchingColor=$.batchingColor,j.instancing=$.instancing,j.instancingColor=$.instancingColor,j.instancingMorph=$.instancingMorph,j.skinning=$.skinning,j.morphTargets=$.morphTargets,j.morphNormals=$.morphNormals,j.morphColors=$.morphColors,j.morphTargetsCount=$.morphTargetsCount,j.numClippingPlanes=$.numClippingPlanes,j.numIntersection=$.numClipIntersection,j.vertexAlphas=$.vertexAlphas,j.vertexTangents=$.vertexTangents,j.toneMapping=$.toneMapping}function vp(A,$,j,Y,X){$.isScene!==!0&&($=Oe),I.resetTextureUnits();const de=$.fog,xe=Y.isMeshStandardMaterial?$.environment:null,Pe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gs,Le=(Y.isMeshStandardMaterial?q:w).get(Y.envMap||xe),je=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color;let mt=vi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=y.toneMapping);const jt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rt=jt!==void 0?jt.length:0,Ne=Ce.get(Y),Gn=p.state.lights;if(O===!0&&(W===!0||A!==b)){const an=A===b&&Y.id===S;ae.setState(Y,A,an)}let ot=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Gn.state.version||Ne.outputColorSpace!==Pe||X.isBatchedMesh&&Ne.batching===!1||!X.isBatchedMesh&&Ne.batching===!0||X.isBatchedMesh&&Ne.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ne.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ne.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ne.instancingMorph===!1&&X.morphTexture!==null||Ne.envMap!==Le||Y.fog===!0&&Ne.fog!==de||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ae.numPlanes||Ne.numIntersection!==ae.numIntersection)||Ne.vertexAlphas!==je||Ne.vertexTangents!==Ze||Ne.morphTargets!==Ie||Ne.morphNormals!==it||Ne.morphColors!==pt||Ne.toneMapping!==mt||Ne.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ne.__version=Y.version);let _n=Ne.currentProgram;ot===!0&&(_n=kr(Y,$,X));let Ki=!1,Qt=!1,js=!1;const gt=_n.getUniforms(),Rn=Ne.uniforms;if(Fe.useProgram(_n.program)&&(Ki=!0,Qt=!0,js=!0),Y.id!==S&&(S=Y.id,Qt=!0),Ki||b!==A){Fe.buffers.depth.getReversed()?(H.copy(A.projectionMatrix),ym(H),bm(H),gt.setValue(V,"projectionMatrix",H)):gt.setValue(V,"projectionMatrix",A.projectionMatrix),gt.setValue(V,"viewMatrix",A.matrixWorldInverse);const si=gt.map.cameraPosition;si!==void 0&&si.setValue(V,te.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&gt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Qt=!0,js=!0)}if(X.isSkinnedMesh){gt.setOptional(V,X,"bindMatrix"),gt.setOptional(V,X,"bindMatrixInverse");const an=X.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),gt.setValue(V,"boneTexture",an.boneTexture,I))}X.isBatchedMesh&&(gt.setOptional(V,X,"batchingTexture"),gt.setValue(V,"batchingTexture",X._matricesTexture,I),gt.setOptional(V,X,"batchingIdTexture"),gt.setValue(V,"batchingIdTexture",X._indirectTexture,I),gt.setOptional(V,X,"batchingColorTexture"),X._colorsTexture!==null&&gt.setValue(V,"batchingColorTexture",X._colorsTexture,I));const Ys=j.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&$e.update(X,j,_n),(Qt||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,gt.setValue(V,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Rn.envMap.value=Le,Rn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&$.environment!==null&&(Rn.envMapIntensity.value=$.environmentIntensity),Qt&&(gt.setValue(V,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&_p(Rn,js),de&&Y.fog===!0&&me.refreshFogUniforms(Rn,de),me.refreshMaterialUniforms(Rn,Y,U,F,p.state.transmissionRenderTarget[A.id]),Do.upload(V,oh(Ne),Rn,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(V,oh(Ne),Rn,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(V,"center",X.center),gt.setValue(V,"modelViewMatrix",X.modelViewMatrix),gt.setValue(V,"normalMatrix",X.normalMatrix),gt.setValue(V,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let si=0,ri=an.length;si<ri;si++){const ch=an[si];z.update(ch,_n),z.bind(ch,_n)}}return _n}function _p(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function xp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,$,j){Ce.get(A.texture).__webglTexture=$,Ce.get(A.depthTexture).__webglTexture=j;const Y=Ce.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const j=Ce.get(A);j.__webglFramebuffer=$,j.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,j=0){P=A,M=$,T=j;let Y=!0,X=null,de=!1,xe=!1;if(A){const Le=Ce.get(A);if(Le.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1;else if(Le.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Le.__hasExternalTextures)I.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&Ce.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(xe=!0);const Ze=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?X=Ze[$][j]:X=Ze[$],de=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?X=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[j]:X=Ze,L.copy(A.viewport),N.copy(A.scissor),B=A.scissorTest}else L.copy(ne).multiplyScalar(U).floor(),N.copy(be).multiplyScalar(U).floor(),B=ke;if(Fe.bindFramebuffer(V.FRAMEBUFFER,X)&&Y&&Fe.drawBuffers(A,X),Fe.viewport(L),Fe.scissor(N),Fe.setScissorTest(B),de){const Le=Ce.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Le.__webglTexture,j)}else if(xe){const Le=Ce.get(A.texture),je=$||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,je)}S=-1},this.readRenderTargetPixels=function(A,$,j,Y,X,de,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){Fe.bindFramebuffer(V.FRAMEBUFFER,Pe);try{const Le=A.texture,je=Le.format,Ze=Le.type;if(!Ve.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-Y&&j>=0&&j<=A.height-X&&V.readPixels($,j,Y,X,he.convert(je),he.convert(Ze),de)}finally{const Le=P!==null?Ce.get(P).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,$,j,Y,X,de,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Le=A.texture,je=Le.format,Ze=Le.type;if(!Ve.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-Y&&j>=0&&j<=A.height-X){Fe.bindFramebuffer(V.FRAMEBUFFER,Pe);const Ie=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ie),V.bufferData(V.PIXEL_PACK_BUFFER,de.byteLength,V.STREAM_READ),V.readPixels($,j,Y,X,he.convert(je),he.convert(Ze),0);const it=P!==null?Ce.get(P).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,it);const pt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xm(V,pt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ie),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,de),V.deleteBuffer(Ie),V.deleteSync(pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,j=0){A.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-j),X=Math.floor(A.image.width*Y),de=Math.floor(A.image.height*Y),xe=$!==null?$.x:0,Pe=$!==null?$.y:0;I.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,xe,Pe,X,de),Fe.unbindTexture()},this.copyTextureToTexture=function(A,$,j=null,Y=null,X=0){A.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],$=arguments[2],X=arguments[3]||0,j=null);let de,xe,Pe,Le,je,Ze,Ie,it,pt;const mt=A.isCompressedTexture?A.mipmaps[X]:A.image;j!==null?(de=j.max.x-j.min.x,xe=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Le=j.min.x,je=j.min.y,Ze=j.isBox3?j.min.z:0):(de=mt.width,xe=mt.height,Pe=mt.depth||1,Le=0,je=0,Ze=0),Y!==null?(Ie=Y.x,it=Y.y,pt=Y.z):(Ie=0,it=0,pt=0);const jt=he.convert($.format),rt=he.convert($.type);let Ne;$.isData3DTexture?(I.setTexture3D($,0),Ne=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(I.setTexture2DArray($,0),Ne=V.TEXTURE_2D_ARRAY):(I.setTexture2D($,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const Gn=V.getParameter(V.UNPACK_ROW_LENGTH),ot=V.getParameter(V.UNPACK_IMAGE_HEIGHT),_n=V.getParameter(V.UNPACK_SKIP_PIXELS),Ki=V.getParameter(V.UNPACK_SKIP_ROWS),Qt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Le),V.pixelStorei(V.UNPACK_SKIP_ROWS,je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const js=A.isDataArrayTexture||A.isData3DTexture,gt=$.isDataArrayTexture||$.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Rn=Ce.get(A),Ys=Ce.get($),an=Ce.get(Rn.__renderTarget),si=Ce.get(Ys.__renderTarget);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,an.__webglFramebuffer),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Pe;ri++)js&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ce.get(A).__webglTexture,X,Ze+ri),A.isDepthTexture?(gt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ce.get($).__webglTexture,X,pt+ri),V.blitFramebuffer(Le,je,de,xe,Ie,it,de,xe,V.DEPTH_BUFFER_BIT,V.NEAREST)):gt?V.copyTexSubImage3D(Ne,X,Ie,it,pt+ri,Le,je,de,xe):V.copyTexSubImage2D(Ne,X,Ie,it,pt+ri,Le,je,de,xe);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else gt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ne,X,Ie,it,pt,de,xe,Pe,jt,rt,mt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,X,Ie,it,pt,de,xe,Pe,jt,mt.data):V.texSubImage3D(Ne,X,Ie,it,pt,de,xe,Pe,jt,rt,mt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,X,Ie,it,de,xe,jt,rt,mt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,X,Ie,it,mt.width,mt.height,jt,mt.data):V.texSubImage2D(V.TEXTURE_2D,X,Ie,it,de,xe,jt,rt,mt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Gn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ot),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_n),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ki),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt),X===0&&$.generateMipmaps&&V.generateMipmap(Ne),Fe.unbindTexture()},this.copyTextureToTexture3D=function(A,$,j=null,Y=null,X=0){return A.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],$=arguments[3],X=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,$,j,Y,X)},this.initRenderTarget=function(A){Ce.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){M=0,T=0,P=null,Fe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ru extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ot,this.environmentIntensity=1,this.environmentRotation=new Ot,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Px{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new R;class $o{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kd extends An{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const tr=new R,fs=new R,ps=new R,ms=new le,nr=new le,Jd=new Ee,io=new R,ir=new R,so=new R,ou=new le,Oa=new le,au=new le;class Lx extends St{constructor(e=new Kd){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Px(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new $o(n,3,0,!1)),ds.setAttribute("uv",new $o(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ro(io.set(-.5,-.5,0),ps,a,fs,s,r),ro(ir.set(.5,-.5,0),ps,a,fs,s,r),ro(so.set(.5,.5,0),ps,a,fs,s,r),ou.set(0,0),Oa.set(1,0),au.set(1,1);let o=e.ray.intersectTriangle(io,ir,so,!1,tr);if(o===null&&(ro(ir.set(-.5,.5,0),ps,a,fs,s,r),Oa.set(0,1),o=e.ray.intersectTriangle(io,so,ir,!1,tr),o===null))return;const c=e.ray.origin.distanceTo(tr);c<e.near||c>e.far||t.push({distance:c,point:tr.clone(),uv:fn.getInterpolation(tr,io,ir,so,ou,Oa,au,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ro(i,e,t,n,s,r){ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*ms.x-s*ms.y,nr.y=s*ms.x+r*ms.y):nr.copy(ms),i.copy(e),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Jd)}class Ix extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qd extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=on,h=on,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=new Ee,Dx=new Ee;class Fl{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dx;cu.multiplyMatrices(o,t[r]),cu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qd(t,e,e,pn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ix),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class el extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Ee,lu=new Ee,oo=[],hu=new Xi,Ux=new Ee,sr=new oe,rr=new qi;class Xo extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),hu.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(hu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),rr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),lu.multiplyMatrices(n,gs),sr.matrixWorld=lu,sr.raycast(e,oo);for(let a=0,o=oo.length;a<o;a++){const c=oo[a];c.instanceId=r,c.object=this,t.push(c)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qd(new Float32Array(s*this.count),s,this.count,Al,En));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uo extends An{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new R,jo=new R,uu=new Ee,or=new Dl,ao=new qi,za=new R,du=new R;class kx extends St{constructor(e=new ut,t=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qo.distanceTo(jo);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;uu.copy(s).invert(),or.copy(e.ray).applyMatrix4(uu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=h.getX(v),x=h.getX(v+1),_=co(this,e,or,c,p,x);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(d),p=co(this,e,or,c,v,g);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=l){const p=co(this,e,or,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=co(this,e,or,c,m-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function co(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),t.distanceSqToSegment(qo,jo,za,du)>n)return;za.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(za);if(!(c<e.near||c>e.far))return{distance:c,point:du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const fu=new R,pu=new R;class mu extends kx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fu.fromBufferAttribute(t,s),pu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fu.distanceTo(pu);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mi extends An{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new Ee,tl=new Dl,lo=new qi,ho=new R;class Ps extends St{constructor(e=new ut,t=new mi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;gu.copy(s).invert(),tl.copy(e.ray).applyMatrix4(gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,v=d;m<v;m++){const g=l.getX(m);ho.fromBufferAttribute(u,g),vu(ho,g,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,v=d;m<v;m++)ho.fromBufferAttribute(u,m),vu(ho,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vu(i,e,t,n,s,r,a){const o=tl.distanceSqToPoint(i);if(o<t){const c=new R;tl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gn extends Bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new le:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],a=[],o=new R,c=new Ee;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(At(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ol extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nx extends Ol{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const uo=new R,Ba=new zl,Ha=new zl,Va=new zl;class Ss extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),l=uo);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ba.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,v,g),Ha.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,v,g),Va.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ha.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Va.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ba.calc(c),Ha.calc(c),Va.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Fx(i,e){const t=1-i;return t*t*e}function Ox(i,e){return 2*(1-i)*i*e}function zx(i,e){return i*i*e}function vr(i,e,t,n){return Fx(i,e)+Ox(i,t)+zx(i,n)}function Bx(i,e){const t=1-i;return t*t*t*e}function Hx(i,e){const t=1-i;return 3*t*t*i*e}function Vx(i,e){return 3*(1-i)*i*i*e}function Gx(i,e){return i*i*i*e}function _r(i,e,t,n,s){return Bx(i,e)+Hx(i,t)+Vx(i,n)+Gx(i,s)}class ef extends Hn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wx extends Hn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y),_r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tf extends Hn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $x extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nf extends Hn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends Hn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y),vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sf extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_u(o,c.x,l.x,h.x,u.x),_u(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:Nx,CatmullRomCurve3:Ss,CubicBezierCurve:ef,CubicBezierCurve3:Wx,EllipseCurve:Ol,LineCurve:tf,LineCurve3:$x,QuadraticBezierCurve:nf,QuadraticBezierCurve3:Bl,SplineCurve:sf});class Xx extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class qx extends Xx{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new tf(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new nf(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new ef(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Ol(e,t,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Dr extends ut{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=At(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,f=new le,d=new R,m=new R,v=new R;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let x=0;x<=t;x++){const _=n+x*h*s,y=Math.sin(_),C=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*C,a.push(u.x,u.y,u.z),f.x=x/t,f.y=M/(e.length-1),o.push(f.x,f.y);const T=c[3*M+0]*y,P=c[3*M+1],S=c[3*M+0]*C;l.push(T,P,S)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,C=y,M=y+e.length,T=y+e.length+1,P=y+1;r.push(C,M,P),r.push(T,P,M)}this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.points,e.segments,e.phiStart,e.phiLength)}}class Gi extends Dr{constructor(e=1,t=1,n=4,s=8){const r=new qx;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Gi(e.radius,e.length,e.capSegments,e.radialSegments)}}class aa extends ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new R,h=new le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(d,2));function x(){const y=new R,C=new R;let M=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const S=[],b=P/r,L=b*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,k=B*c+o,G=Math.sin(k),D=Math.cos(k);C.x=L*G,C.y=-b*n+g,C.z=L*D,u.push(C.x,C.y,C.z),y.set(G,T,D).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-b),S.push(m++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const b=v[S][P],L=v[S+1][P],N=v[S+1][P+1],B=v[S][P+1];(e>0||S!==0)&&(h.push(b,L,B),M+=3),(t>0||S!==r-1)&&(h.push(L,N,B),M+=3)}l.addGroup(p,M,0),p+=M}function _(y){const C=m,M=new le,T=new R;let P=0;const S=y===!0?e:t,b=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const L=m;for(let N=0;N<=s;N++){const k=N/s*c+o,G=Math.cos(k),D=Math.sin(k);T.x=S*D,T.y=g*b,T.z=S*G,u.push(T.x,T.y,T.z),f.push(0,b,0),M.x=G*.5+.5,M.y=D*.5*b+.5,d.push(M.x,M.y),m++}for(let N=0;N<s;N++){const B=C+N,k=L+N;y===!0?h.push(k,k+1,B):h.push(k+1,k,B),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hi extends st{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Hi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new R,y=new R,C=new R;for(let M=0;M<t.length;M+=3)d(t[M+0],_),d(t[M+1],y),d(t[M+2],C),c(_,y,C,x)}function c(x,_,y,C){const M=C+1,T=[];for(let P=0;P<=M;P++){T[P]=[];const S=x.clone().lerp(y,P/M),b=_.clone().lerp(y,P/M),L=M-P;for(let N=0;N<=L;N++)N===0&&P===M?T[P][N]=S:T[P][N]=S.clone().lerp(b,N/L)}for(let P=0;P<M;P++)for(let S=0;S<2*(M-P)-1;S++){const b=Math.floor(S/2);S%2===0?(f(T[P][b+1]),f(T[P+1][b]),f(T[P][b])):(f(T[P][b+1]),f(T[P+1][b+1]),f(T[P+1][b]))}}function l(x){const _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){const x=new R;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const y=g(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;a.push(y,1-C)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){const _=a[x+0],y=a[x+2],C=a[x+4],M=Math.max(_,y,C),T=Math.min(_,y,C);M>.9&&T<.1&&(_<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,_){const y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){const x=new R,_=new R,y=new R,C=new R,M=new le,T=new le,P=new le;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),M.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),C.copy(x).add(_).add(y).divideScalar(3);const L=g(C);v(M,b+0,x,L),v(T,b+2,_,L),v(P,b+4,y,L)}}function v(x,_,y,C){C<0&&x.x===1&&(a[_]=x.x-1),y.x===0&&y.z===0&&(a[_]=C/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.details)}}class Hl extends ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class xr extends ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xr(e.radius,e.detail)}}class Yo extends ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new R,m=new le;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const x=p+g,_=x,y=x+n+1,C=x+n+2,M=x+1;o.push(_,y,M),o.push(y,C,M)}}this.setIndex(o),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zt extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const M=C/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(M+y,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=h[p][x+1],y=h[p][x],C=h[p+1][x],M=h[p+1][x+1];(p!==0||a>0)&&d.push(_,y,M),(p!==n-1||c<Math.PI)&&d.push(y,C,M)}this.setIndex(d),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gi extends ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const v=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const v=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,x=(s+1)*d+m;a.push(v,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zi extends ut{constructor(e=new Bl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,l=new le;let h=new R;const u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(d,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),x(),p()}function g(_){h=e.getPointAt(_/t,h);const y=a.normals[_],C=a.binormals[_];for(let M=0;M<=s;M++){const T=M/s*Math.PI*2,P=Math.sin(T),S=-Math.cos(T);c.x=S*y.x+P*C.x,c.y=S*y.y+P*C.y,c.z=S*y.z+P*C.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){const C=(s+1)*(_-1)+(y-1),M=(s+1)*_+(y-1),T=(s+1)*_+y,P=(s+1)*(_-1)+y;m.push(C,M,P),m.push(M,T,P)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)l.x=_/t,l.y=y/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zi(new nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class jx extends zt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ae extends An{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yx extends An{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zx{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Kx=new Zx;class Vl{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class Jx extends Error{constructor(e,t){super(e),this.response=t}}class Qx extends Vl{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xu.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:s});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Yn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let M=0,T=h.length;M<T;M++){const P=h[M];P.onProgress&&P.onProgress(C)}p.enqueue(y),x()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Jx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{xu.add(e,l);const h=Yn[e];delete Yn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rf extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ey extends rf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new Ee,yu=new R,bu=new R;class ty{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bu),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ny extends ty{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iy extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new ny}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const of={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ry=new kl(-1,1,1,-1,0,1);class oy extends ut{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}}const ay=new oy;class Gl{constructor(e){this._mesh=new oe(ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ry)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class af extends Xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zs.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Su extends Xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class cy extends Xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ly{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new af(of),this.copyPass.material.blending=ei,this.clock=new sy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Su!==void 0&&(a instanceof Su?n=!0:a instanceof cy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hy extends Xs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const uy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bs extends Xs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new mn(r,a,{type:On});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new mn(r,a,{type:On});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=uy;this.highPassUniforms=zs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=of;this.copyUniforms=zs.clone(h.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Er,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new ra,this.fsQuad=new Gl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Bs.BlurDirectionX=new le(1,0);Bs.BlurDirectionY=new le(0,1);const dy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fy extends Xs{constructor(){super();const e=dy;this.uniforms=zs.clone(e.uniforms),this.material=new jx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Gl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Md?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ue={gameName:"The Grand Tour",subtitle:"Ein Rennrad-Abenteuer",startPrompt:"Beliebige Taste drücken, um zu starten",wunschzettel:{briefkasten:"https://grand-tour-wunsch.google-e22.workers.dev"},colors:{gold:"#f5c76b",accent:"#ff7a3d",jersey:"#d62839",bikeFrame:"#14365c"},sunElevation:5,exposure:.62,titleRider:{number:11,name:"PAUL",brand:"canyon"},music:{volume:.45,tempo:78,chords:[["A3","C4","E4"],["F3","A3","C4"],["C3","E3","G3"],["G3","B3","D4"]]},soundVolume:.8,windLautstaerke:.3,zeitfahren:{luftwiderstand:.8},windschatten:.4,riderPower:520,steering:{start:.25,vollNach:1.3,stick:.4},sprint:{dauer:15,aufladen:30,kraft:1.6,abLadung:.75,windschattenBonus:1.5},rollen:{rennrad:{asphalt:.005,schotter:.02,wiese:.06},cx:{asphalt:.008,schotter:.011,wiese:.022}},jahreszeiten:{rennrad:"sommer",cx:"herbst"},raceLaps:3},py="Paulsdorf",wt=2.9,my={House_1:0,House_2:0,House_3:0,House_4:0,Inn:0,Blacksmith:0,Stable:0,Sawmill:0,Mill:0,Bell_Tower:0},Tu=[["House_1",5],["House_2",5],["House_3",3],["House_4",2],["Inn",1],["Blacksmith",1.2],["Stable",.8],["Sawmill",.6]];function gy(i,e){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d");n.fillStyle="#f2c230",n.fillRect(0,0,512,256),n.strokeStyle="#111",n.lineWidth=14,n.strokeRect(14,14,484,228),n.fillStyle="#111",n.font='800 92px "Barlow Condensed", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,120),n.font='600 34px "Barlow Condensed", sans-serif',n.fillText("Landkreis Grand Tour",256,200);const s=new gn(t);s.colorSpace=bt;const r=new Ae({color:"#cfcfcf"}),a=new ht,o=new oe(new tt(1.6,.8,.05),[r,r,r,r,new Ae({map:s,roughness:.5}),r]);o.position.y=2.2;const c=new oe(new st(.04,.04,2.6),new Ae({color:"#bfc3c8",metalness:.8,roughness:.3}));return c.position.y=1.3,a.add(o,c),a}function vy(){return{pole:new st(.07,.1,3.6,6).translate(0,1.8,0),arm:new tt(.08,.08,.7).translate(0,3.5,.3),glas:new Zt(.17,10,8).translate(0,3.25,.6)}}function _y(i,e){let t=2024;const n=()=>((t=t*16807%2147483647)-1)/2147483646,s=new ht;s.name="dorf";const r=i.length,a=i.SH,o={},c=[],l=[],h=new Ae({vertexColors:!0,roughness:.85}),u=new Map,f=(b,L,N,B,k,G=null)=>{const D=new Ee().compose(new R(L,G??i.terrainHeight(L,N)-.05,N),new vt().setFromAxisAngle(new R(0,1,0),B),new R(k,k,k));u.has(b)||u.set(b,[]),u.get(b).push(D)},d=(b,L)=>{const N=e[b].boundingBox;return{w:(N.max.x-N.min.x)*L,d:(N.max.z-N.min.z)*L}},m=(b,L,N)=>i.clearOfPath(b,L,N)&&l.every(B=>Math.hypot(B.x-b,B.z-L)>B.r+N),v=b=>Math.atan2(b*o.tz,-b*o.tx),g=()=>{const b=Tu.reduce((N,[,B])=>N+B,0);let L=n()*b;for(const[N,B]of Tu)if((L-=B)<=0)return N;return"House_1"};let p=0,x=1/0;for(let b=60;b<r-60;b+=10){const L=i.turnBetween(Math.round((b-30)/i.ds),Math.round((b+30)/i.ds));L<x&&Math.abs(b-r*.5)<r*.4&&(x=L,p=b)}const _=1;{i.poseAt(p,_*(a+17),o),m(o.x,o.z,5)&&(f("Bell_Tower",o.x,o.z,v(_),wt*1.15),l.push({x:o.x,z:o.z,r:4.5}),c.push({x:o.x,z:o.z,r:6}));const b=[["Well",0,7,0,wt],["MarketStand_1",-11,6,.3,wt],["MarketStand_2",-6,10.5,-.2,wt],["MarketStand_1",7,10,.5,wt],["MarketStand_2",11,5.5,-.4,wt],["Cart",-14,11,1.2,wt],["Bench_1",-3,3.2,0,wt],["Bench_1",4,3.2,0,wt],["Barrel",9,13,0,wt],["Barrel",9.8,13.4,0,wt],["Crate",-9,13,.4,wt],["Hay",13,12,.2,wt],["Bags",-12,8.5,0,wt],["Bonfire_Lit",2,14,0,wt]];for(const[L,N,B,k,G]of b)i.poseAt(p+N,_*(a+B),o),i.clearOfPath(o.x,o.z,.8)&&(f(L,o.x,o.z,v(_)+k,G),c.push({x:o.x,z:o.z,r:2.5}));if(i.poseAt(p,_*(a+9.5),o),l.push({x:o.x,z:o.z,r:13,flach:!0}),c.push({x:o.x,z:o.z,r:15}),i.roadTex){const L=i.roadTex.clone();L.wrapS=L.wrapT=ni,L.repeat.set(3,2.2),L.needsUpdate=!0;const N=new oe(new aa(15,40),new Ae({map:L,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));N.rotation.x=-Math.PI/2,N.rotation.z=o.heading,N.position.set(o.x,i.terrainHeight(o.x,o.z)+.04,o.z),N.receiveShadow=!0,s.add(N)}}for(const b of[-1,1]){let L=25+n()*8;for(;L<r-20;){const N=g(),B=wt*(.92+n()*.16),{w:k,d:G}=d(N,B),D=b*(a+1.6+G/2+n()*2.2);i.poseAt(L+k/2,D,o);const F=Math.max(k,G)*.5;if(m(o.x,o.z,F*.9)){const U=v(b)+my[N]+(n()-.5)*.18;if(f(N,o.x,o.z,U,B),l.push({x:o.x,z:o.z,r:F*.9}),c.push({x:o.x,z:o.z,r:F+2}),n()<.55){const K=(n()<.5?-1:1)*(k/2+.8);i.poseAt(L+k/2+K,b*(a+1.4+n()*1.2),o);const se=["Barrel","Crate","Hay","Package_1","Bags"][Math.floor(n()*5)];i.clearOfPath(o.x,o.z,.6)&&f(se,o.x,o.z,n()*6,wt)}if(L+=k+1.2+n()*4,n()<.22){const K=9+n()*9;if(n()<.6)for(let se=.8;se<K-.8;se+=2.3)i.poseAt(L+se,b*(a+1.3),o),i.clearOfPath(o.x,o.z,.3)&&f("Fence",o.x,o.z,o.heading+Math.PI/2,wt);L+=K}}else L+=4}}for(const b of[17,31])for(const L of[-1,1]){let N=n()*10;for(;N<r;){const B=g(),k=wt*(.9+n()*.2),{w:G,d:D}=d(B,k);i.poseAt(N,L*(a+b+n()*5),o);const F=Math.max(G,D)*.5;if(n()<(b<20?.75:.5)&&m(o.x,o.z,F)){const U=v(L)+[0,Math.PI/2,-Math.PI/2,.3][Math.floor(n()*4)]+(n()-.5)*.3;f(B,o.x,o.z,U,k),l.push({x:o.x,z:o.z,r:F*.9}),c.push({x:o.x,z:o.z,r:F+2})}N+=G+3+n()*9}}for(const[b,L,N]of[["Mill",.27,30],["Mill",.71,-34]])i.poseAt(r*L,N+Math.sign(N)*a,o),m(o.x,o.z,6)&&(f(b,o.x,o.z,v(Math.sign(N)),wt*1.2),l.push({x:o.x,z:o.z,r:5}),c.push({x:o.x,z:o.z,r:7}));const y=vy(),C=new Ae({color:"#4a3424",roughness:.9}),M=new Ae({color:"#fff1c4",emissive:"#ffbf5a",emissiveIntensity:1.4}),T=[];for(let b=18,L=0;b<r-10;b+=26,L++){const N=L%2?1:-1;i.poseAt(b,N*(a+.7),o),i.clearOfPath(o.x,o.z,.5)&&T.push(new Ee().compose(new R(o.x,i.terrainHeight(o.x,o.z),o.z),new vt().setFromAxisAngle(new R(0,1,0),v(N)),new R(1,1,1)))}for(const[b,L]of[[y.pole,C],[y.arm,C],[y.glas,M]]){const N=new Xo(b,L,T.length);T.forEach((B,k)=>N.setMatrixAt(k,B)),N.castShadow=L===C,s.add(N)}const P=["#d62839","#f6f6f6","#2f7cf6","#f2d14b","#2bb24c"];for(const b of[.08,p/r,.62,.9]){const L={},N={};i.poseAt(r*b,-(a+.7),L),i.poseAt(r*b,a+.7,N);const B=new R(L.x,L.h+4.6,L.z),k=new R(N.x,N.h+4.6,N.z),G=B.clone().lerp(k,.5);G.y-=.8;const D=new Bl(B,G,k);s.add(new oe(new zi(D,16,.015,4),new Ae({color:"#333"})));for(let F=1;F<16;F++){const U=D.getPoint(F/16),K=new oe(new Hi(.18,.45,3),new Ae({color:P[F%P.length],side:Jt}));K.position.copy(U),K.position.y-=.25,K.rotation.x=Math.PI,s.add(K)}}{i.poseAt(r-30,a+1.1,o);const b=gy(py);b.position.set(o.x,i.terrainHeight(o.x,o.z),o.z),b.rotation.y=Math.atan2(-o.tx,-o.tz),s.add(b)}const S=90;for(const[b,L]of u){const N=new Map;for(const B of L){const k=`${Math.floor(B.elements[12]/S)},${Math.floor(B.elements[14]/S)}`;N.has(k)||N.set(k,[]),N.get(k).push(B)}for(const B of N.values()){const k=new Xo(e[b],h,B.length);B.forEach((G,D)=>k.setMatrixAt(D,G)),k.castShadow=!0,k.receiveShadow=!0,k.computeBoundingSphere(),s.add(k)}}return{group:s,footprints:c,platzS:p,solid:l.filter(b=>b.r>0&&!b.flach)}}class Rr extends oe{constructor(){const e=Rr.SkyShader,t=new zt({name:e.name,uniforms:zs.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new tt(1,1,1),t),this.isSky=!0}}Rr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};function Hs(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ut;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=wu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const m=wu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function wu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ct(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const v=h.getComponent(f,m);o.setComponent(f+u,m,v)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function xy(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,_=o.length;x<_;x++){const y=o[x],C=i.attributes[y];c[y]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const M=i.morphAttributes[y];M&&(l[y]||(l[y]=[]),M.forEach((T,P)=>{const S=new T.array.constructor(T.count*T.itemSize);l[y][P]=new T.constructor(S,T.itemSize,T.normalized)}))}const d=e*.5,m=Math.log10(1/e),v=Math.pow(10,m),g=d*v;for(let x=0;x<r;x++){const _=n?n.getX(x):x;let y="";for(let C=0,M=o.length;C<M;C++){const T=o[C],P=i.getAttribute(T),S=P.itemSize;for(let b=0;b<S;b++)y+=`${~~(P[u[b]](_)*v+g)},`}if(y in t)h.push(t[y]);else{for(let C=0,M=o.length;C<M;C++){const T=o[C],P=i.getAttribute(T),S=i.morphAttributes[T],b=P.itemSize,L=c[T],N=l[T];for(let B=0;B<b;B++){const k=u[B],G=f[B];if(L[G](a,P[k](_)),S)for(let D=0,F=S.length;D<F;D++)N[D][G](a,S[D][k](_))}}t[y]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const _=c[x];if(p.setAttribute(x,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),x in l)for(let y=0;y<l[x].length;y++){const C=l[x][y];p.morphAttributes[x][y]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return p.setIndex(h),p}function Kn(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wa(i=1){const e=Kn(i),t=new Uint8Array(256);for(let c=0;c<256;c++)t[c]=c;for(let c=255;c>0;c--){const l=Math.floor(e()*(c+1));[t[c],t[l]]=[t[l],t[c]]}const n=new Uint8Array(512);for(let c=0;c<512;c++)n[c]=t[c&255];const s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],a=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return(c,l)=>{const h=(c+l)*a,u=Math.floor(c+h),f=Math.floor(l+h),d=(u+f)*o,m=c-(u-d),v=l-(f-d),g=m>v?1:0,p=m>v?0:1,x=m-g+o,_=v-p+o,y=m-1+2*o,C=v-1+2*o,M=u&255,T=f&255;let P=0,S=.5-m*m-v*v;if(S>0){const N=n[M+n[T]]&7;S*=S,P+=S*S*(s[N]*m+r[N]*v)}let b=.5-x*x-_*_;if(b>0){const N=n[M+g+n[T+p]]&7;b*=b,P+=b*b*(s[N]*x+r[N]*_)}let L=.5-y*y-C*C;if(L>0){const N=n[M+1+n[T+1]]&7;L*=L,P+=L*L*(s[N]*y+r[N]*C)}return 70*P}}const ft=(i,e,t)=>Math.min(t,Math.max(e,i)),Sn=(i,e,t)=>i+(e-i)*t,It=(i,e,t)=>{const n=ft((t-i)/(e-i),0,1);return n*n*(3-2*n)},Ge=(i,e,t,n)=>Sn(i,e,1-Math.exp(-t*n)),Eu=1800,Au=320,fo=20;function Wt(i,e,t,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new gn(r);return s&&(a.colorSpace=bt),n&&(a.wrapS=a.wrapT=ni,a.repeat.set(n[0],n[1])),a.anisotropy=8,a}function Ts(i,e,t,n,s,r,a,o=1){i.fillStyle=s,i.fillRect(0,0,e,t);for(let c=0;c<a;c++){const l=Math.floor(n()*r);i.fillStyle=`rgba(${l},${l},${l},${.08+n()*.18})`,i.fillRect(n()*e,n()*t,o+n()*o,o+n()*o)}}function yy(i){return Wt(512,1024,(e,t,n)=>{e.fillStyle="#3c3a37",e.fillRect(0,0,t,n);const s=40,r=n/s;for(let o=0;o<s;o++){let c=o%2?-r*.6:0;for(;c<t;){const l=r*(.9+i()*.7),h=105+Math.floor(i()*55),u=Math.floor(i()*12);e.fillStyle=`rgb(${h+u},${h+u-4},${h-8})`;const f=2.2,d=c+f,m=o*r+f,v=l-f*2,g=r-f*2;e.beginPath(),e.roundRect?e.roundRect(d,m,v,g,6):e.rect(d,m,v,g),e.fill(),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(d+2,m+1,v-4,g*.3),e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(d+2,m+g*.72,v-4,g*.25),c+=l}}Ts(e,t,n,i,"rgba(0,0,0,0)",120,6e3,1.2);const a=e.createLinearGradient(0,0,t,0);a.addColorStop(0,"rgba(30,28,24,0.45)"),a.addColorStop(.08,"rgba(30,28,24,0)"),a.addColorStop(.92,"rgba(30,28,24,0)"),a.addColorStop(1,"rgba(30,28,24,0.45)"),e.fillStyle=a,e.fillRect(0,0,t,n)})}function by(i){return Wt(256,1024,(e,t,n)=>{Ts(e,t,n,i,"#6b5136",255,22e3,1.4);for(let r=0;r<900;r++){const a=90+Math.floor(i()*70);e.fillStyle=`rgba(${a},${a-8},${a-20},${.4+i()*.4})`,e.fillRect(i()*t,i()*n,1.5+i()*2.5,1.5+i()*2.5)}e.fillStyle="rgba(35,24,14,0.28)",e.fillRect(t*.28,0,t*.1,n),e.fillRect(t*.62,0,t*.1,n);for(let r=0;r<4;r++)e.fillStyle="rgba(30,24,18,0.55)",e.beginPath(),e.ellipse(t*(.25+i()*.5),i()*n,18+i()*30,30+i()*60,0,0,Math.PI*2),e.fill();for(let r=0;r<7;r++){e.strokeStyle="rgba(70,48,28,0.9)",e.lineWidth=3+i()*4,e.beginPath();const a=i()*n;e.moveTo(0,a),e.bezierCurveTo(t*.3,a+(i()-.5)*40,t*.7,a+(i()-.5)*40,t,a+(i()-.5)*30),e.stroke()}const s=e.createLinearGradient(0,0,t,0);s.addColorStop(0,"rgba(60,70,30,0.6)"),s.addColorStop(.12,"rgba(60,70,30,0)"),s.addColorStop(.88,"rgba(60,70,30,0)"),s.addColorStop(1,"rgba(60,70,30,0.6)"),e.fillStyle=s,e.fillRect(0,0,t,n)})}class Cu{constructor(e,t="road",n=null,s=null){if(this.kind=t,this.cx=t==="cx",this.tt=t==="tt",this.nature=n,this.dorf=s,this.season=(Ue.jahreszeiten||{})[this.cx?"cx":"rennrad"]||(this.cx?"herbst":"sommer"),this.autumn=this.season==="herbst",this.RH=this.cx?1.6:this.tt?3.2:3.6,this.SH=this.cx?2.4:this.tt?4.4:5,this.scene=new ru,this.rand=Kn(1337),this.n1=Wa(11),this.n2=Wa(23),this.n3=Wa(37),this._nr={found:!1,dist:0,i:0,f:0,h:0,s:0,lateral:0},this.focus=new R,this.setupLakes(),this.buildTrack(),this.buildSky(e),this.buildLights(),this.buildTerrain(),this.buildLakes(),this.buildRoad(),this.buildVegetation(),this.buildProps(),this.tt&&this.dorf){const r=_y(this,this.dorf);this.village=r.group,this.solid=r.solid,this.clearAreas(r.footprints),this.scene.add(this.village)}this.buildFinishZone(),this.buildClouds(),this.buildMotes()}fbm(e,t){let n=1,s=1,r=0,a=0;for(let o=0;o<4;o++)r+=n*this.n1(e*s,t*s),a+=n,n*=.5,s*=2.03;return r/a}setupLakes(){this.lakes=this.cx||this.tt?[]:[{x:-40,z:-30,r:120},{x:180,z:140,r:60},{x:-200,z:170,r:60},{x:-560,z:0,r:70}];for(const e of this.lakes){let t=1/0;for(let n=0;n<64;n++){const s=n/64*Math.PI*2,r=this.lakeRadius(e,s)*1.3;t=Math.min(t,this.rawHeight(e.x+Math.cos(s)*r,e.z+Math.sin(s)*r))}e.level=t-.4}}lakeRadius(e,t){return e.r*(1+.22*this.n3(Math.cos(t)*1.2+e.x*.013,Math.sin(t)*1.2+e.z*.013))}lakeAt(e,t,n=0){for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(!(o>s.r*1.6+n)&&o<this.lakeRadius(s,Math.atan2(a,r))*1.3+n)return s}return null}baseHeight(e,t){let n=this.rawHeight(e,t);for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(o>s.r*1.6)continue;const c=this.lakeRadius(s,Math.atan2(a,r))*1.3;if(o>=c)continue;const l=s.level-4.5*(1-o/c*(o/c));n=Sn(l,n,It(c*.58,c,o))}return n}rawHeight(e,t){const n=Math.hypot(e,t);let s=this.fbm(e*.0035,t*.0035)*16+this.n2(e*.02,t*.02)*1.2;this.tt&&(s*=.3);const r=It(660,880,n);if(r>0){const a=1-Math.abs(this.fbm(e*.0032+7,t*.0032-3));s+=r*(35+a*a*120)}return s}villageRoute(){const e=[[-80,-170],[70,-170],[95,-120],[180,-110],[190,-20],[140,10],[150,90],[60,120],[20,175],[-90,160],[-110,90],[-190,70],[-200,-40],[-130,-60],[-120,-130]],t=Kn(77),n=e.map(([c,l])=>new R(c+(t()-.5)*10,0,l+(t()-.5)*10)),s=[],r=n.length;let a=0,o=0;for(let c=0;c<r;c++){const l=n[(c-1+r)%r],h=n[c],u=n[(c+1)%r],f=h.clone().sub(l),d=u.clone().sub(h),m=Math.min(24,f.length()*.4),v=Math.min(24,d.length()*.4),g=h.clone().addScaledVector(f.normalize(),-m),p=h.clone().addScaledVector(d.normalize(),v);for(let _=0;_<=1.0001;_+=1/6){const y=1-_;s.push(new R(y*y*g.x+2*y*_*h.x+_*_*p.x,0,y*y*g.z+2*y*_*h.z+_*_*p.z))}const x=u.distanceTo(h);x>60&&(x>a&&(a=x,o=s.length),s.push(h.clone().lerp(u,.5)))}return[...s.slice(o),...s.slice(0,o)]}buildTrack(){let e=[];this.tt&&(e=this.villageRoute());const t=this.cx?24:16;for(let d=0;d<(this.tt?0:t);d++){const m=d/t*Math.PI*2,v=this.cx?200+45*Math.sin(3*m+.6)+30*Math.sin(5*m+1.9)+16*Math.sin(9*m+.4):360+80*Math.sin(3*m+.6)+45*Math.sin(5*m+1.9)+25*Math.sin(7*m);e.push(new R(Math.cos(m)*v*1.18,0,Math.sin(m)*v*.95))}const n=new Ss(e,!0,"centripetal"),s=this.cx?1600:this.tt?1800:2400,r=n.getSpacedPoints(s);this.N=s,this.length=n.getLength(),this.ds=this.length/s;const a=this.px=new Float32Array(s),o=this.pz=new Float32Array(s),c=this.ph=new Float32Array(s),l=this.tx=new Float32Array(s),h=this.tz=new Float32Array(s);for(let d=0;d<s;d++)a[d]=r[d].x,o[d]=r[d].z;for(let d=0;d<s;d++){const m=(d-1+s)%s,v=(d+1)%s,g=a[v]-a[m],p=o[v]-o[m],x=Math.hypot(g,p);l[d]=g/x,h[d]=p/x}let u=new Float32Array(s);for(let d=0;d<s;d++)u[d]=this.baseHeight(a[d],o[d]);const f=30;for(let d=0;d<3;d++){const m=new Float32Array(s);for(let v=0;v<s;v++){let g=0;for(let p=-f;p<=f;p++)g+=u[(v+p+s)%s];m[v]=g/(2*f+1)}u=m}if(this.drops=[],this.cx){const d=Math.round(45/this.ds),m=Math.round(15/this.ds),v=[];for(let _=Math.round(80/this.ds);_<s-Math.round(80/this.ds);_+=2)v.push({i:_,t:this.turnBetween(_-d,_+m)});v.sort((_,y)=>_.t-y.t);const g=[];for(const _ of v){if(g.length>=5)break;g.every(y=>Math.abs(y-_.i)>s/7)&&g.push(_.i)}g.sort((_,y)=>_-y);const p=[1.1,1.4,1,1.5,1.2];let x=0;g.forEach((_,y)=>{this.drops.push({i:_,s:(_+1)*this.ds,d:p[y],turn:this.turnBetween(_-d,_+m)}),x+=p[y]});for(let _=0;_<s;_++){let y=x*(_/s);for(const C of this.drops)_>C.i&&(y-=C.d);u[_]+=y}}c.set(u),this.rhArr=new Float32Array(s),this.shArr=new Float32Array(s);for(let d=0;d<s;d++){let m=this.RH;if(this.cx){const v=d/s*Math.PI*2;m=1.2+.3*Math.sin(3*v+1)+.2*Math.sin(7*v+2.2),m=Math.min(this.RH,Math.max(.75,m));const g=Math.min(d,s-d)*this.ds;m=Sn(this.RH,m,It(15,50,g))}this.rhArr[d]=m,this.shArr[d]=m+(this.SH-this.RH)}if(this.rocks=[],this.cx){const d=Kn(99);let m=0;for(;this.rocks.length<0&&m++<800;){const v=Math.floor(d()*s),g=v*this.ds;if(Math.min(v,s-v)*this.ds<50||this.drops.some(C=>Math.abs(C.i-v)*this.ds<30)||this.rocks.some(C=>Math.abs(C.i-v)*this.ds<45))continue;const p=this.rhArr[v];if(p<1.05||this.turnBetween(v-Math.round(20/this.ds),v)>.35)continue;const x=.35+d()*.25,y=(d()<.5?-1:1)*(p-x-.1)*(.6+.4*d());this.rocks.push({i:v,s:g,lat:y,r:x})}}this.grid=new Map;for(let d=0;d<s;d++){const m=this.cellKey(Math.floor(a[d]/fo),Math.floor(o[d]/fo));let v=this.grid.get(m);v||this.grid.set(m,v=[]),v.push(d)}}cellKey(e,t){return(e+1e3)*4e3+(t+1e3)}turnBetween(e,t){const n=this.N,s=o=>Math.atan2(this.tx[(o%n+n)%n],this.tz[(o%n+n)%n]),r=s(e);let a=0;for(let o=e;o<=t;o++)a=Math.max(a,Math.abs(Math.atan2(Math.sin(s(o)-r),Math.cos(s(o)-r))));return a}shAt(e){const t=Math.floor((e%this.length+this.length)%this.length/this.ds)%this.N;return this.shArr[t]}nearest(e,t){const n=this._nr,s=Math.floor(e/fo),r=Math.floor(t/fo);let a=1/0,o=-1;for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++){const f=this.grid.get(this.cellKey(s+h,r+u));if(f)for(let d=0;d<f.length;d++){const m=f[d],v=this.px[m]-e,g=this.pz[m]-t,p=v*v+g*g;p<a&&(a=p,o=m)}}if(o<0)return n.found=!1,n.dist=1/0,n;const c=this.N;a=1/0;for(const h of[(o-1+c)%c,o]){const u=(h+1)%c,f=this.px[h],d=this.pz[h],m=this.px[u]-f,v=this.pz[u]-d,g=ft(((e-f)*m+(t-d)*v)/(m*m+v*v),0,1),p=f+m*g,x=d+v*g,_=(e-p)*(e-p)+(t-x)*(t-x);_<a&&(a=_,n.i=h,n.f=g,n.lateral=(e-p)*-this.tz[h]+(t-x)*this.tx[h])}const l=(n.i+1)%c;return n.found=!0,n.dist=Math.sqrt(a),n.h=Sn(this.ph[n.i],this.ph[l],n.f),n.s=(n.i+n.f)*this.ds,n}terrainHeight(e,t){const n=this.nearest(e,t),s=this.baseHeight(e,t);if(!n.found)return s;const r=this.rhArr[n.i],a=It(r+1.2,r+22,n.dist);return Sn(n.h-.15,s,a)}groundAt(e,t,n={}){const s=this.nearest(e,t),r=s.found?this.rhArr[s.i]:this.RH,a=s.found?this.shArr[s.i]:this.SH;return s.found&&s.dist<r+.2?(n.h=s.h+.06,n.surface=this.cx?"gravel":"road"):s.found&&s.dist<a?(n.h=s.h+.03-It(r+.5,a,s.dist)*.12,n.surface=this.cx?"grass":"gravel"):(n.h=this.terrainHeight(e,t),n.surface="grass"),n}poseAt(e,t=0,n={}){const s=this.length;e=(e%s+s)%s;const r=e/this.ds,a=Math.floor(r)%this.N,o=(a+1)%this.N,c=r-Math.floor(r),l=Sn(this.tx[a],this.tx[o],c),h=Sn(this.tz[a],this.tz[o],c),u=Math.hypot(l,h);n.tx=l/u,n.tz=h/u,n.x=Sn(this.px[a],this.px[o],c)-n.tz*t,n.z=Sn(this.pz[a],this.pz[o],c)+n.tx*t,n.h=Sn(this.ph[a],this.ph[o],c)+.06,n.heading=Math.atan2(n.tx,n.tz);const f=this.ph[(a-2+this.N)%this.N],d=this.ph[(a+3)%this.N];return n.pitch=Math.atan2(d-f,this.ds*5),n.s=e,n}buildSky(e){const t=new Rr;t.scale.setScalar(1e4);const n=t.material.uniforms;n.turbidity.value=7,n.rayleigh.value=2.4,n.mieCoefficient.value=.006,n.mieDirectionalG.value=.86;const s=this.poseAt(this.length-100),r=Kc.degToRad(Ue.sunElevation);this.sunDir=new R(-s.tx*Math.cos(r),Math.sin(r),-s.tz*Math.cos(r)).applyAxisAngle(new R(0,1,0),.35).normalize(),n.sunPosition.value.copy(this.sunDir),this.scene.add(t),this.sky=t;const a=new Jc(e),o=new ru,c=new Rr;c.scale.setScalar(50),c.material=t.material,o.add(c),this.scene.environment=a.fromScene(o,.04).texture,this.scene.environmentIntensity=.55,a.dispose(),this.scene.fog=this.cx?new Wo(new ce(this.autumn?"#a8977a":"#9fa88f"),.0042):new Wo(new ce("#c9a58f"),.0013)}buildLights(){const e=new ey("#b9cdf5","#5b4634",this.cx?1.35:.9);this.scene.add(e);const t=Math.atan2(this.sunDir.x,this.sunDir.z),n=Kc.degToRad(17);this.lightDir=new R(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));const s=new iy("#ffc994",3.4);s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=s.shadow.camera;r.left=r.bottom=-32,r.right=r.top=32,r.near=1,r.far=260,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,this.scene.add(s,s.target),this.sun=s}buildTerrain(){const e=new rn(Eu,Eu,Au,Au);e.rotateX(-Math.PI/2);const t=e.attributes.position,n=t.count,s=new Float32Array(n);for(let _=0;_<n;_++){const y=t.getX(_),C=t.getZ(_),M=this.nearest(y,C),T=this.baseHeight(y,C);let P=T;if(M.found){const S=this.rhArr[M.i],b=It(S+1.2,S+22,M.dist);P=Sn(M.h-.15,T,b),s[_]=1-It(this.shArr[M.i],this.shArr[M.i]+5,M.dist)}t.setY(_,P)}e.computeVertexNormals();const r=e.attributes.normal,a=new ce(this.autumn?"#4a4a22":this.cx?"#33501f":"#3f6b25"),o=new ce(this.autumn?"#7a6a2e":this.cx?"#5b6b2c":"#86a33c"),c=new ce(this.autumn?"#9a5a26":this.cx?"#7a5a34":"#b9a457"),l=new ce("#7d756b"),h=new ce("#f4efe9"),u=new ce(this.cx?"#5e4630":"#8d7457"),f=new ce("#cbb98b"),d=new Float32Array(n*3),m=new ce;for(let _=0;_<n;_++){const y=t.getX(_),C=t.getZ(_),M=t.getY(_),T=this.n3(y*.012,C*.012)*.5+.5;m.copy(a).lerp(o,T);const P=It(.25,.8,this.n2(y*.004+50,C*.004));m.lerp(c,P*(this.autumn?.85:.55));const S=1-r.getY(_),b=ft(It(.18,.4,S)+It(50,100,M)*.7,0,1);m.lerp(l,b);const L=It(115,150,M+this.n1(y*.02,C*.02)*12);m.lerp(h,L),m.lerp(u,s[_]*.85);const N=this.lakeAt(y,C,4);N&&m.lerp(f,It(N.level+1.4,N.level-.2,M)),d[_*3]=m.r,d[_*3+1]=m.g,d[_*3+2]=m.b}e.setAttribute("color",new Ct(d,3));const v=Kn(5),g=Wt(256,256,(_,y,C)=>{Ts(_,y,C,v,"#e8e8e8",255,9e3,1);for(let M=0;M<1600;M++)_.fillStyle=`rgba(30,40,10,${.08+v()*.12})`,_.fillRect(v()*y,v()*C,1,2+v()*4)},{repeat:[360,360]}),p=new Ae({vertexColors:!0,map:g,roughness:.95}),x=new oe(e,p);x.receiveShadow=!0,this.scene.add(x)}buildLakes(){const e=new Ae({color:"#2c6a8e",roughness:.05,metalness:.15,transparent:!0,opacity:.9,envMapIntensity:1.5});for(const t of this.lakes){const n=new aa(1,96),s=n.attributes.position;for(let a=1;a<s.count;a++){const o=Math.atan2(s.getY(a),s.getX(a)),c=this.lakeRadius(t,-o)*1.3;s.setXY(a,Math.cos(o)*c,Math.sin(o)*c)}n.rotateX(-Math.PI/2);const r=new oe(n,e);r.position.set(t.x,t.level,t.z),r.receiveShadow=!0,this.scene.add(r)}}buildRoad(){const e=this.N,t=Kn(9),n=this.cx?by(t):this.tt?yy(t):Wt(256,1024,(m,v,g)=>{Ts(m,v,g,t,"#45464a",255,26e3,1.2);for(let p=0;p<18;p++)m.fillStyle=`rgba(20,20,22,${.08+t()*.1})`,m.fillRect(t()*v,t()*g,20+t()*60,30+t()*120);m.fillStyle="rgba(15,15,15,0.18)",m.fillRect(v*.2,0,v*.1,g),m.fillRect(v*.7,0,v*.1,g),m.fillStyle="#eceae2",m.fillRect(v*.035,0,v*.03,g),m.fillRect(v*.935,0,v*.03,g),m.fillRect(v*.49,0,v*.02,g*.5)});n.wrapT=ni,this.roadTex=n;const s=Wt(256,256,(m,v,g)=>{if(this.cx){Ts(m,v,g,t,"#5a4a2c",255,6e3,1.5);for(let p=0;p<700;p++)m.fillStyle=`hsl(${20+t()*30}, ${50+t()*30}%, ${22+t()*25}%)`,m.beginPath(),m.ellipse(t()*v,t()*g,2+t()*4,1+t()*2,t()*3,0,Math.PI*2),m.fill()}else Ts(m,v,g,t,"#8a7a66",255,12e3,1.5)},{repeat:[1,1]});s.wrapS=s.wrapT=ni;const r=[],a=[],o=[],c=[];for(let m=0;m<=e;m++){const v=m%e,g=this.px[v],p=this.pz[v],x=this.ph[v],_=-this.tz[v],y=this.tx[v],C=m*this.ds/12,M=this.rhArr[v];r.push(g-_*M,x+.06,p-y*M,g+_*M,x+.06,p+y*M),a.push(0,C,1,C);const T=this.shArr[v],P=M+.3;o.push(g-_*T,x-.12,p-y*T,g-_*P,x+.035,p-y*P,g+_*P,x+.035,p+y*P,g+_*T,x-.12,p+y*T);const S=m*this.ds/4;c.push(0,S,.4,S,.6,S,1,S)}const l=[],h=[];for(let m=0;m<e;m++){const v=m*2,g=(m+1)*2;l.push(v,v+1,g,v+1,g+1,g);const p=m*4,x=(m+1)*4;for(let _=0;_<3;_++)h.push(p+_,p+_+1,x+_,p+_+1,x+_+1,x+_)}const u=(m,v,g)=>{const p=new ut;return p.setAttribute("position",new We(m,3)),p.setAttribute("uv",new We(v,2)),p.setIndex(g),p.computeVertexNormals(),p},f=new oe(u(r,a,l),new Ae({map:n,roughness:.82,metalness:0,envMapIntensity:.6}));f.receiveShadow=!0;const d=new oe(u(o,c,h),new Ae({map:s,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));d.receiveShadow=!0,this.scene.add(f,d)}instanced(e,t,n,s,{cast:r=!0,receive:a=!0}={}){const o=new Xo(e,t,n.length);return n.forEach((c,l)=>o.setMatrixAt(l,c)),s&&s.forEach((c,l)=>o.setColorAt(l,c)),o.castShadow=r,o.receiveShadow=a,o.instanceMatrix.needsUpdate=!0,this.scene.add(o),o}buildVegetation(){const e=this.rand,t=new vt,n=new R(0,1,0),s=(k,G,D,F,U=F,K=e()*Math.PI*2)=>new Ee().compose(new R(k,G,D),t.setFromAxisAngle(n,K).clone(),new R(F,U,F)),r=Hs([new Hi(1.9,4.2,8).translate(0,3.6,0),new Hi(1.4,3.4,8).translate(0,5.7,0),new Hi(.85,2.4,8).translate(0,7.4,0)]),a=new st(.16,.28,2.4,6).translate(0,1.2,0),o=new xr(2.3,1),c=o.attributes.position;for(let k=0;k<c.count;k++){const G=c.getX(k),D=c.getY(k),F=c.getZ(k),U=1+this.n1(G*1.3+3,F*1.3+D)*.22;c.setXYZ(k,G*U,D*U*.85,F*U)}o.translate(0,4.4,0),o.computeVertexNormals();const l=new st(.2,.32,3.2,6).translate(0,1.6,0),h=new Ae({color:"#ffffff",flatShading:!0,roughness:.9}),u=new Ae({color:"#5a4030",roughness:1}),f=[],d=[],m=[],v=[],g=this.cx?520:860;let p=0;const x=this.cx?8500:this.tt?1300:2600;for(;f.length+m.length<x&&p++<6e4;){const k=(e()*2-1)*g,G=(e()*2-1)*g;if(Math.hypot(k,G)>(this.cx?540:870))continue;const D=this.n3(k*.006+20,G*.006);if(!this.cx&&D<.05&&e()>.08)continue;const F=this.nearest(k,G);if(F.found&&F.dist<(this.cx?this.shArr[F.i]+1.6:this.tt?26:11)||this.lakeAt(k,G,6))continue;const U=this.terrainHeight(k,G);if(U>120)continue;const K=.75+e()*.75;U>45||D>.45||e()<.35?(f.push(s(k,U-.2,G,K,K*(.9+e()*.4))),d.push(new ce().setHSL(.31+e()*.05,.45,.17+e()*.08))):(m.push(s(k,U-.2,G,K)),v.push(new ce().setHSL(.18+e()*.1,.5,.25+e()*.12)))}if(this.nature?this.plantModels(e,f,m,3):(this.instanced(r,h,f,d),this.instanced(a,u,f),this.instanced(o,h,m,v),this.instanced(l,u,m)),this.cx){const k=[],G=[],D=[],F=[],U={};for(const K of[-1,1])for(let se=e()*5;se<this.length;se+=4.5+e()*4.5){const ne=K*(this.shAt(se)+1+e()*2.5);this.poseAt(se,ne,U);const be=this.terrainHeight(U.x,U.z),ke=2.6+e()*1;e()<.75?(k.push(s(U.x,be-.3,U.z,ke,ke*(.95+e()*.25))),G.push(new ce().setHSL(.22+e()*.08,.5,.2+e()*.1))):(D.push(s(U.x,be-.3,U.z,ke*.9,ke*(1+e()*.3))),F.push(new ce().setHSL(.31+e()*.04,.45,.14+e()*.06)))}this.nature?this.plantModels(e,[],[...k,...D],3,!0):(this.instanced(o,h,k,G),this.instanced(l,u,k),this.instanced(r,h,D,F),this.instanced(a,u,D)),this.giantCount=k.length+D.length}const _=[];for(let k=0;k<3;k++){const G=new ut,D=.05;G.setAttribute("position",new We([-D,0,0,D,0,0,.03,.55,0],3));const F=this.autumn?[.22,.18,.07]:[.18,.3,.08],U=this.autumn?[.8,.6,.28]:[.75,.8,.35];G.setAttribute("color",new We([...F,...F,...U],3)),G.rotateZ((e()-.5)*.5),G.rotateY(k/3*Math.PI+e()*.4),G.translate((e()-.5)*.15,0,(e()-.5)*.15),G.computeVertexNormals(),_.push(G)}const y=Hs(_),C=[],M=[],T=[],P=[],S=(this.autumn?["#c2461f","#e07b24","#e9b13a","#8a3b1c","#b5651d"]:["#f2d14b","#ffffff","#e2455b","#9b6bd6","#ff9a3c"]).map(k=>new ce(k)),b={};for(let k=0;k<(this.tt?9e3:22e3);k++){const G=e()*this.length,F=(e()<.5?-1:1)*(this.SH+.3+Math.pow(e(),1.6)*45);if(this.poseAt(G,F,b),this.lakeAt(b.x,b.z,1)||this.tt&&!this.clearOfPath(b.x,b.z,.4))continue;const U=this.terrainHeight(b.x,b.z),K=.7+e()*.9;if(C.push(s(b.x,U-.05,b.z,K,K*(.8+e()*.8))),M.push(new ce().setHSL((this.autumn?.1:.2)+e()*.06,.4,.4+e()*.3)),e()<(this.autumn?.3:.1)){const se=.6+e()*.5;this.autumn?T.push(s(b.x+e()-.5,U+.02,b.z+e()-.5,se*1.6,se*.35)):T.push(s(b.x+e()-.5,U+.28+e()*.1,b.z+e()-.5,se)),P.push(S[Math.floor(e()*S.length)])}}const L=new Ae({vertexColors:!0,side:Jt,roughness:1});this.instanced(y,L,C,M,{cast:!1}),this.instanced(new xr(.07,0),new Ae({color:"#fff",roughness:.7}),T,P,{cast:!1});const N=[];for(let k=0;k<260;k++){const G=(e()*2-1)*800,D=(e()*2-1)*800,F=this.nearest(G,D);if(F.found&&F.dist<7||this.lakeAt(G,D,2))continue;const U=.4+e()*1.8;N.push(new Ee().compose(new R(G,this.terrainHeight(G,D)-U*.3,D),new vt().setFromEuler(new Ot(e()*3,e()*3,e()*3)),new R(U,U*.7,U*(.8+e()*.4))))}this.nature?(this.placeOnGeos(N,this.nature.rocks,e,.9),this.plantUnderwood(e)):this.instanced(new Hl(1,0),new Ae({color:"#8b8580",roughness:.95,flatShading:!0}),N);const B=[];for(let k=0;k<(this.cx||this.tt?0:60);k++){const G=e()*this.length,D=(e()<.5?-1:1)*(18+e()*60);this.poseAt(G,D,b);const F=this.terrainHeight(b.x,b.z);F>30||this.lakeAt(b.x,b.z,3)||B.push(new Ee().compose(new R(b.x,F+.7,b.z),new vt().setFromEuler(new Ot(0,e()*3,Math.PI/2)),new R(1,1,1)))}this.instanced(new st(.75,.75,1.2,16),new Ae({color:"#d2b15e",roughness:1}),B)}clearAreas(e){const t=new Ee,n=new Ee().makeScale(0,0,0);let s=1/0,r=-1/0,a=1/0,o=-1/0;for(const c of e)s=Math.min(s,c.x-c.r),r=Math.max(r,c.x+c.r),a=Math.min(a,c.z-c.r),o=Math.max(o,c.z+c.r);this.scene.traverse(c=>{var h;if(!c.isInstancedMesh)return;let l=!1;for(let u=0;u<c.count;u++){c.getMatrixAt(u,t);const f=t.elements[12],d=t.elements[14];if(!(f<s||f>r||d<a||d>o)){for(const m of e)if((f-m.x)**2+(d-m.z)**2<m.r*m.r){c.setMatrixAt(u,n),l=!0;break}}}l&&(c.instanceMatrix.needsUpdate=!0,(h=c.computeBoundingSphere)==null||h.call(c))})}clearOfPath(e,t,n){const s=this.nearest(e,t);return!s.found||s.dist>=this.shArr[s.i]+n}natureMaterial(){return this._natMat||(this._natMat=new Ae({vertexColors:!0,roughness:.85}))}leafTint(e){if(!this.autumn)return new ce(1,1,1).multiplyScalar(.85+e()*.3);const t=e();return t<.35?new ce(1.5,.7,.5):t<.7?new ce(1.3,1.2,.55):new ce(1,1,1).multiplyScalar(.9+e()*.25)}plantModels(e,t,n,s,r=!1){const a=this.nature.trees[this.season]||this.nature.trees.sommer,o=new Map,c=(h,u,f)=>{const d=u.elements,m=Math.hypot(d[0],d[1],d[2])*s;if(!this.clearOfPath(d[12],d[14],(r?.14:.1)*m+.4))return;o.has(h)||o.set(h,{mats:[],cols:[]});const v=o.get(h);v.mats.push(u.clone().multiply(new Ee().makeScale(s,s,s))),v.cols.push(f)},l=()=>Math.floor(e()*5);for(const h of t){const u=this.autumn&&e()<.25?a.pineAlt:a.pine;c(u[l()],h,new ce(1,1,1).multiplyScalar(.85+e()*.3))}for(const h of n){const u=e(),f=r?u<.85?a.common:a.birch:u<.5?a.common:u<.8?a.birch:a.willow;c(f[l()],h,this.leafTint(e))}for(const[h,u]of o)this.instanced(h,this.natureMaterial(),u.mats,u.cols)}placeOnGeos(e,t,n,s=1,r=null){const a=t.map(()=>({mats:[],cols:[]}));for(const o of e){const c=Math.floor(n()*t.length);a[c].mats.push(s===1?o:o.clone().multiply(new Ee().makeScale(s,s,s))),a[c].cols.push(r?r(n):new ce(1,1,1).multiplyScalar(.85+n()*.3))}a.forEach((o,c)=>o.mats.length&&this.instanced(t[c],this.natureMaterial(),o.mats,o.cols))}plantUnderwood(e){const t={},n=new vt,s=new R(0,1,0),r=(u,f,d,m=d,v=e()*Math.PI*2)=>new Ee().compose(new R(u,this.terrainHeight(u,f)-.05,f),n.setFromAxisAngle(s,v).clone(),new R(d,m,d)),a=[],o=this.cx?2600:this.tt?260:1600;for(let u=0;u<o*2&&a.length<o;u++){const d=(e()<.5?-1:1)*(this.SH+1.4+Math.pow(e(),1.4)*(this.cx?14:55));this.poseAt(e()*this.length,d,t);const m=.8+e()*.8;this.clearOfPath(t.x,t.z,.75*m+.3)&&(this.lakeAt(t.x,t.z,2)||a.push(r(t.x,t.z,m,m*(.8+e()*.4))))}const c=u=>{if(!this.autumn)return new ce(1,1,1).multiplyScalar(.9+u()*.4);const f=u();return f<.35?new ce(2.6,1,.5):f<.7?new ce(2.4,1.6,.5):new ce(1.2,1.1,.8)};this.placeOnGeos(a,this.nature.bushes,e,1,c);const l=[],h=[];for(let u=0;u<(this.cx?260:this.tt?30:160);u++){const f=e()<.5?-1:1;if(this.poseAt(e()*this.length,f*(this.SH+2+e()*(this.cx?12:60)),t),!this.lakeAt(t.x,t.z,2))if(e()<.5){const d=1.1+e()*.7;this.clearOfPath(t.x,t.z,.75*d+.3)&&l.push(r(t.x,t.z,d))}else{const d=1+e()*.4,m=1.35*d;this.clearOfPath(t.x+t.tx*m,t.z+t.tz*m,.6)&&this.clearOfPath(t.x-t.tx*m,t.z-t.tz*m,.6)&&this.clearOfPath(t.x,t.z,.6)&&h.push(r(t.x,t.z,d,d,t.heading+(e()-.5)*.4))}}this.placeOnGeos(l,[this.nature.stump],e),this.placeOnGeos(h,[this.nature.log],e)}buildRocks(e){if(this.nature){const h=Kn(7),u=this.nature.rocks,f=u.map(()=>[]);for(const d of this.rocks){this.poseAt(d.s,d.lat,e),d.x=e.x,d.z=e.z;const m=Math.floor(h()*u.length),v=u[m].boundingBox,g=Math.max(v.max.x-v.min.x,v.max.z-v.min.z)/2,p=d.r/g;f[m].push(new Ee().compose(new R(e.x,this.ph[d.i]-.05,e.z),new vt().setFromAxisAngle(new R(0,1,0),h()*6.28),new R(p,p*1.1,p)))}f.forEach((d,m)=>d.length&&this.instanced(u[m],this.natureMaterial(),d));return}const t=new xr(1,1),n=t.attributes.position,s=[],r=new ce("#5b6b3a"),a=new ce("#8a8580"),o=new ce;for(let h=0;h<n.count;h++){const u=n.getX(h),f=n.getY(h),d=n.getZ(h),m=1+this.n1(u*2.1+5,d*2.1+f*1.7)*.25;n.setXYZ(h,u*m,f*m,d*m),o.copy(a).lerp(r,Math.max(0,f)*.8),s.push(o.r,o.g,o.b)}t.setAttribute("color",new We(s,3)),t.computeVertexNormals();const c=Kn(7),l=this.rocks.map(h=>(this.poseAt(h.s,h.lat,e),h.x=e.x,h.z=e.z,new Ee().compose(new R(e.x,this.ph[h.i]+h.r*.35,e.z),new vt().setFromEuler(new Ot(c()*3,c()*3,c()*3)),new R(h.r,h.r*.8,h.r*1.1))));this.instanced(t,new Ae({vertexColors:!0,roughness:.95,flatShading:!0}),l)}buildDropLogs(e){const t=[];for(const n of this.drops){this.poseAt(n.s-.6,0,e);const s=this.rhArr[n.i]*2+1.6;t.push(new Ee().compose(new R(e.x,this.ph[n.i]+.1,e.z),new vt().setFromEuler(new Ot(0,e.heading,Math.PI/2,"YXZ")),new R(1,s,1)))}this.instanced(new st(.17,.2,1,10),new Ae({color:"#6b4b30",roughness:1}),t)}buildTape(e){const t=[],n=[],r=new vt,a=new R(0,1,0);for(const h of[-1,1]){let u=null;for(let f=0;f<=this.length+.01;f+=5){this.poseAt(f,h*(this.shAt(f)+.4),e);const d=new R(e.x,this.terrainHeight(e.x,e.z),e.z);if(t.push(new Ee().makeTranslation(d.x,d.y+.45,d.z)),u){const m=u.clone().add(new R(0,.82,0)),v=d.clone().add(new R(0,.82,0)),g=m.clone().add(v).multiplyScalar(.5),p=m.distanceTo(v);r.setFromAxisAngle(a,Math.atan2(v.x-m.x,v.z-m.z));const x=new vt().setFromAxisAngle(new R(1,0,0),-Math.atan2(v.y-m.y,Math.hypot(v.x-m.x,v.z-m.z)));n.push(new Ee().compose(g,r.clone().multiply(x),new R(1,1,p)))}u=d}}this.instanced(new st(.03,.035,.9,6),new Ae({color:"#8a6a45",roughness:1}),t);const o=Wt(64,16,(h,u,f)=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#f4f4f0":"#d8232a",h.fillRect(d*u/8,0,u/8,f)},{repeat:[1,1]}),c=new tt(.005,.05,1),l=c.attributes.uv;for(let h=0;h<l.count;h++)l.setX(h,l.getX(h)*5/1.2);this.instanced(c,new Ae({map:o,roughness:.6}),n,null,{cast:!1})}buildProps(){const e={},t=[],n=[];this.cx&&(this.buildTape(e),this.buildDropLogs(e),this.buildRocks(e));for(let f=0;f<(this.cx||this.tt?0:this.length);f+=50)for(const d of[-1,1]){this.poseAt(f,d*(this.SH+.5),e);const m=this.terrainHeight(e.x,e.z);t.push(new Ee().makeTranslation(e.x,m+.5,e.z)),n.push(new Ee().makeTranslation(e.x,m+.92,e.z))}this.instanced(new tt(.12,1,.12),new Ae({color:"#f2f2ee"}),t),this.instanced(new tt(.13,.16,.13),new Ae({color:"#ff7a1a",emissive:"#ff5a00",emissiveIntensity:.6}),n,null,{cast:!1}),this.poseAt(0,0,e);const s=new ht;s.position.set(e.x,e.h,e.z),s.rotation.y=e.heading;const r=new Ae({color:"#1b2233",roughness:.5,metalness:.4}),a=this.SH+.8;for(const f of[-1,1]){const d=new oe(new tt(.5,6.2,.5),r);d.position.set(f*a,3,0),d.castShadow=!0,s.add(d)}const o=Wt(1024,192,(f,d,m)=>{const v=f.createLinearGradient(0,0,d,0);v.addColorStop(0,"#101a33"),v.addColorStop(.5,"#1d2f5c"),v.addColorStop(1,"#101a33"),f.fillStyle=v,f.fillRect(0,0,d,m),f.fillStyle=Ue.colors.gold,f.fillRect(0,8,d,6),f.fillRect(0,m-14,d,6),f.font='800 92px "Barlow Condensed", Arial, sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillText("START  •  ZIEL",d/2,m/2-12),f.font='600 30px "Cinzel", Georgia, serif',f.fillStyle="#ffffff",f.fillText(Ue.gameName.toUpperCase(),d/2,m-40)}),c=new oe(new tt(a*2+.5,1.5,.25),new Ae({map:o,emissive:"#ffffff",emissiveMap:o,emissiveIntensity:.25}));c.position.y=5.6,c.castShadow=!0,s.add(c);const l=Wt(256,32,(f,d,m)=>{for(let v=0;v<16;v++)for(let g=0;g<2;g++)f.fillStyle=(v+g)%2?"#111":"#f4f4f0",f.fillRect(v*16,g*16,16,16)}),h=new oe(new rn(this.rhArr[0]*2,.9),new Ae({map:l,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,s.add(h);const u=new Ae({color:Ue.colors.accent,side:Jt});for(let f=-3;f<=3;f++)if(f!==0)for(const d of[-1,1]){const m=new ht,v=new oe(new st(.03,.03,3.4),r);v.position.y=1.7;const g=new oe(new rn(.7,1.1),u);g.position.set(0,2.7,.35),g.rotation.y=Math.PI/2,m.add(v,g),m.position.set(d*(this.SH+3),0,f*7),s.add(m)}this.scene.add(s)}buildFinishZone(){const e={},t=new ht,n=.075,s=(p,x,_,y=0)=>{const C=[],M=[],T=[],P=Math.max(2,Math.round((x-p)/1));for(let L=0;L<=P;L++){const N=p+(x-p)*L/P;this.poseAt(N,0,e);const B=this.nearest(e.x,e.z),k=(B.found?this.rhArr[B.i]:this.RH)+.25,G=-e.tz,D=e.tx,F=e.h-.06+n+y;if(C.push(e.x-G*k,F,e.z-D*k,e.x+G*k,F,e.z+D*k),M.push(0,L/P,1,L/P),L>0){const U=(L-1)*2;T.push(U,U+1,U+2,U+1,U+3,U+2)}}const S=new ut;S.setAttribute("position",new We(C,3)),S.setAttribute("uv",new We(M,2)),S.setIndex(T),S.computeVertexNormals();const b=new oe(S,_);b.receiveShadow=!0,t.add(b)},r=p=>new Ae({map:p,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),a="#2fa37a",o=Wt(1024,512,(p,x,_)=>{p.fillStyle=a,p.fillRect(0,0,x,_),p.translate(x/2,_/2),p.fillStyle="#e9fff4",p.textAlign="center",p.textBaseline="middle";let y=250;do p.font=`900 ${y}px "Barlow Condensed", Arial, sans-serif`;while(p.measureText("GRAND TOUR").width>x*.86&&(y-=8)>60);p.fillText("GRAND TOUR",0,10)}),c=Wt(64,64,(p,x,_)=>{p.fillStyle="#7fe0bf",p.fillRect(0,0,x,_)}),l=Wt(64,64,(p,x,_)=>{p.fillStyle="#f2f2ee",p.fillRect(0,0,x,_)}),h=this.length;s(h-52,h-45,r(o)),s(h-26,h-19,r(o)),s(h-3.2,h-1.6,r(l)),s(1.2,9,r(c)),s(13,20,r(o));const u=[["#2fa37a","#ffffff","GRAND TOUR"],["#1d2433","#ffffff","PAULSDORF • SEIT 2026"],["#f2f2ee","#1d2433","PEDAL LEGENDS"],["#2fa37a","#ffffff","GRAND TOUR"],["#f4c430","#1d2433","ZIELKAMERA"]].map(([p,x,_])=>new Ae({roughness:.6,map:Wt(512,128,(y,C,M)=>{y.fillStyle=p,y.fillRect(0,0,C,M),y.fillStyle=x;let T=70;do y.font=`800 ${T}px "Barlow Condensed", Arial, sans-serif`;while(y.measureText(_).width>C*.9&&(T-=4)>20);y.textAlign="center",y.textBaseline="middle",y.fillText(_,C/2,M/2+2)})})),f=new Ae({color:"#b9bcc2",metalness:.8,roughness:.35}),d=new tt(2.3,.9,.04),m=new st(.03,.03,2.4,6).rotateZ(Math.PI/2),v=new tt(.06,1.15,.5);let g=0;for(let p=h-75;p<h+25;p+=2.45){for(const x of[-1,1]){this.poseAt(p,0,e);const _=this.nearest(e.x,e.z),y=(_.found?this.shArr[_.i]:this.SH)+.4;if(this.poseAt(p,x*y,e),this.solid&&this.solid.some(S=>Math.hypot(S.x-e.x,S.z-e.z)<S.r+.6))continue;const C=new ht;C.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),C.rotation.y=e.heading+Math.PI/2;const M=new oe(d,u[(g+(x>0?2:0))%u.length]);M.position.y=.62,M.castShadow=!0;const T=new oe(m,f);T.position.y=1.1;const P=new oe(v,f);P.position.set(-1.15,.57,0),C.add(M,T,P),t.add(C)}g++}for(const p of this.cx?[]:[this.SH+4.5,this.SH+7,-(this.SH+4.5)]){if(this.poseAt(6,p,e),this.solid&&this.solid.some(P=>Math.hypot(P.x-e.x,P.z-e.z)<P.r+3)||!this.clearOfPath(e.x,e.z,2.5))continue;const x=new ht;x.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),x.rotation.y=e.heading+(p>0?-Math.PI/2:Math.PI/2);const _=new Ae({color:"#f4d21c",roughness:.5}),y=new oe(new tt(4.2,2.6,2.6),_);y.position.y=1.7,y.castShadow=!0;const C=new oe(new tt(3.4,1,.05),new Ae({color:"#1d2433",roughness:.1,metalness:.6}));C.position.set(0,2.1,1.31);const M=new oe(new rn(2.2,.55),u[4]);M.position.set(0,3.3,1.31);const T=new oe(new tt(4,.4,2.4),new Ae({color:"#555a62"}));T.position.y=.2,x.add(y,C,M,T),t.add(x);break}this.scene.add(t)}buildClouds(){const e=Kn(77),t=Wt(256,128,(n,s,r)=>{for(let a=0;a<40;a++){const o=s*(.15+e()*.7),c=r*(.45+(e()-.5)*.35),l=18+e()*30,h=n.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,"rgba(255,255,255,0.35)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,s,r)}});for(let n=0;n<26;n++){const s=new Kd({map:t,color:new ce().setHSL(.05+e()*.04,.7,.78+e()*.1),fog:!1,depthWrite:!1,transparent:!0,opacity:.55+e()*.35}),r=new Lx(s),a=e()*Math.PI*2,o=1300+e()*1200;r.position.set(Math.cos(a)*o,220+e()*380,Math.sin(a)*o);const c=380+e()*500;r.scale.set(c,c*.4,1),this.scene.add(r)}}buildMotes(){const t=new Float32Array(1050);for(let a=0;a<350*3;a++)t[a]=(Math.random()-.5)*50;const n=new ut;if(n.setAttribute("position",new Ct(t,3)),this.autumn){const a=new Float32Array(1050),o=["#c2461f","#e07b24","#e9b13a","#8a3b1c"].map(l=>new ce(l));for(let l=0;l<350;l++)o[l%o.length].toArray(a,l*3);n.setAttribute("color",new Ct(a,3));const c=Wt(64,64,l=>{l.fillStyle="#fff",l.beginPath(),l.ellipse(32,32,26,13,.6,0,Math.PI*2),l.fill()});this.motes=new Ps(n,new mi({size:.16,map:c,vertexColors:!0,transparent:!0,alphaTest:.4,depthWrite:!1})),this.motes.frustumCulled=!1,this.scene.add(this.motes);return}const s=Wt(64,64,a=>{const o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.3,"rgba(255,230,180,0.6)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),r=new mi({size:.09,map:s,color:new ce(2.2,1.7,1.1),transparent:!0,depthWrite:!1,blending:Er});this.motes=new Ps(n,r),this.motes.frustumCulled=!1,this.scene.add(this.motes)}update(e,t,n,s){this.sun.position.copy(t).addScaledVector(this.lightDir,120),this.sun.target.position.copy(t);const r=this.motes.geometry.attributes.position,a=n.position.x,o=n.position.y,c=n.position.z;for(let l=0;l<r.count;l++){let h=r.getX(l)+Math.sin(s*.5+l)*.15*e+.25*e,u=r.getY(l)+Math.cos(s*.4+l*1.7)*.1*e;this.autumn&&(u-=(.45+l%5*.08)*e,h+=Math.sin(s*1.3+l)*.5*e);let f=r.getZ(l)+.1*e;const d=(m,v)=>m-v>25?m-50:m-v<-25?m+50:m;h=d(h,a),u-o<-2?u+=16:u-o>14&&(u-=16),f=d(f,c),r.setXYZ(l,h,u,f)}r.needsUpdate=!0}}const po=.0105,mo=new R(1,0,0),il=new Ee,Ru=new R,My=new R,Sy=new vt,Ty=new vt,wy=new R,Ey=new R,Ay=new R,Di=new R,Pu=new R,Cy={Hips:"Spine",Spine:"Spine1",Spine1:"Spine2",Spine2:"Neck",Neck:"Head",Head:"HeadTop_End",LeftUpLeg:"LeftLeg",LeftLeg:"LeftFoot",LeftFoot:"LeftToeBase",RightUpLeg:"RightLeg",RightLeg:"RightFoot",RightFoot:"RightToeBase",LeftArm:"LeftForeArm",LeftForeArm:"LeftHand",LeftHand:"LeftHandMiddle1",RightArm:"RightForeArm",RightForeArm:"RightHand",RightHand:"RightHandMiddle1"};function Lu(i,e,t){const n=wy.copy(i).normalize(),s=Ey.copy(e).addScaledVector(n,-e.dot(n));s.lengthSq()<1e-8&&s.set(0,0,1).addScaledVector(n,-n.z),s.normalize();const r=Ay.crossVectors(s,n);return t.setFromRotationMatrix(il.makeBasis(s,n,r))}function Iu(i,e,t,n,s,r){Di.copy(e).sub(i);let a=Di.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),Di.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return Pu.copy(s).addScaledVector(Di,-s.dot(Di)).normalize(),r.copy(i).addScaledVector(Di,o*t).addScaledVector(Pu,c*t)}class Ry{constructor(e){this.scene=e,e.scale.setScalar(po),this.inv=new Ee;const t=r=>r.replace(/^mixamorig\d*/,"").replace(/_\d+$/,"");this.bones={},e.traverse(r=>{r.isBone&&!this.bones[t(r.name)]&&!/_\d+$/.test(r.name)&&(this.bones[t(r.name)]=r)}),this.meshes={},e.traverse(r=>{if(!r.isSkinnedMesh)return;const a=r.skeleton.bones.map(o=>this.bones[t(o.name)]||o);r.bind(new Fl(a,r.skeleton.boneInverses),r.bindMatrix),r.frustumCulled=!1,r.castShadow=!0,r.receiveShadow=!0,this.meshes[r.name.replace(/^Ch\d+_/,"")]=r}),this.meshes.Hair&&(this.meshes.Hair.visible=!1),e.updateMatrixWorld(!0),this.inv.copy(e.matrixWorld).invert(),this.rest=new Map;const n=this.bones;for(const[r,a]of Object.entries(Cy)){const o=n[r],c=n[a];if(!o||!c)continue;const l=this.pos(o,new R),h=this.pos(c,new R).sub(l).normalize(),u=/^Left(Arm|ForeArm|Hand)$/.test(r)?new R(0,-1,0):/^Right(Arm|ForeArm|Hand)$/.test(r)?new R(0,1,0):mo.clone(),f=this.quat(o,new vt),d=Lu(h,u,new vt).invert().multiply(f);this.rest.set(o,{off:d,len:this.pos(c,new R).distanceTo(l)})}const s=r=>{var a;return((a=this.rest.get(n[r]))==null?void 0:a.len)||0};this.thigh=s("LeftUpLeg"),this.shin=s("LeftLeg"),this.upperArm=s("LeftArm"),this.foreArm=s("LeftForeArm"),this.foot=s("LeftFoot"),this.hipsRest=n.Hips.position.clone(),this.hipParentInv=new Ee}pos(e,t){return t.setFromMatrixPosition(il.multiplyMatrices(this.inv,e.matrixWorld))}quat(e,t){return il.multiplyMatrices(this.inv,e.matrixWorld).decompose(Ru,t,My),t}aim(e,t,n=mo){const s=this.bones[e],r=this.rest.get(s);if(!r)return;const a=Lu(t,n,Sy).multiply(r.off),o=this.quat(s.parent,Ty).invert();s.quaternion.copy(o.multiply(a)),s.updateMatrixWorld(!0)}pose({hip:e,pedals:t,angles:n,hands:s,bob:r,aero:a=!1}){const o=1/po,c=this.bones;this.scene.updateMatrixWorld(!0),this.inv.copy(this.scene.matrixWorld).invert();const l=Ru.copy(e);a&&(l.z+=.07),l.multiplyScalar(o),l.y+=r*o,this.hipParentInv.copy(c.Hips.parent.matrixWorld).invert(),c.Hips.position.copy(l.applyMatrix4(this.scene.matrixWorld).applyMatrix4(this.hipParentInv)),c.Hips.updateMatrixWorld(!0);const h=m=>Di.set(0,Math.cos(m),Math.sin(m)),u=a?[.75,1.3,1.45,1.5,1,.45]:[.55,.95,1.1,1.2,.6,.12];this.aim("Hips",h(u[0])),this.aim("Spine",h(u[1])),this.aim("Spine1",h(u[2])),this.aim("Spine2",h(u[3])),this.aim("Neck",h(u[4])),this.aim("Head",h(u[5]));const f=new R;for(const m of[1,-1]){const v=m>0?"Left":"Right",g=m>0?1:0,p=this.pos(c[v+"UpLeg"],new R),x=.5+.06+.22*Math.sin(n[g]),_=new R(0,-Math.sin(x),Math.cos(x)),y=new R().copy(t[g]).multiplyScalar(o);y.y+=2.5;const C=y.clone().addScaledVector(_,-this.foot);Iu(p,C,this.thigh,this.shin,new R(m*.1,.1,1),f);const M=f.clone().sub(p),T=C.clone().sub(f),P=new R().crossVectors(M,T);P.lengthSq()<1e-6&&P.copy(mo),this.aim(v+"UpLeg",M,P),this.aim(v+"Leg",T,P),this.aim(v+"Foot",_,mo)}const d=new R;for(const m of[1,-1]){const v=m>0?"Left":"Right",g=this.pos(c[v+"Arm"],new R),p=new R().copy(s[m>0?1:0]).multiplyScalar(o);Iu(g,p,this.upperArm,this.foreArm,a?new R(0,-1,-.15):new R(m*.15,-.75,-.35),d);const x=d.clone().sub(g),_=p.clone().sub(d),y=new R().crossVectors(x,_);y.lengthSq()<1e-6&&y.set(0,-m,0),this.aim(v+"Arm",x,y),this.aim(v+"ForeArm",_,y),this.aim(v+"Hand",_.normalize().add(new R(0,-.35,0)),y)}}setKit({jersey:e,shorts:t}){if(!this.tinted){this.tinted={};for(const n of["Shirt","Shorts","Socks","Shoes"]){const s=this.meshes[n];if(!s||!s.material.map)continue;const r=s.material.clone();r.map=Py(s),s.material=r,this.tinted[n]=r}this.tinted.Socks&&this.tinted.Socks.color.set("#f4f4f4"),this.tinted.Shoes&&this.tinted.Shoes.color.set("#f2f2f2")}e&&this.tinted.Shirt&&this.tinted.Shirt.color.set(e),t&&this.tinted.Shorts&&this.tinted.Shorts.color.set(t)}attach(e,t){const n=this.bones[e];t.scale.multiplyScalar(1/po),t.position.multiplyScalar(1/po),n.add(t)}}function Py(i){const e=i.material.map,t=e.image,n=t.width,s=t.height,r=document.createElement("canvas");r.width=n,r.height=s;const a=r.getContext("2d");a.drawImage(t,0,0);const o=a.getImageData(0,0,n,s),c=o.data,l=i.geometry.attributes.uv;let h=0,u=0;for(let v=0;v<l.count;v+=7){const g=Math.min(n-1,Math.max(0,Math.floor(l.getX(v)*n))),x=(Math.min(s-1,Math.max(0,Math.floor((e.flipY?1-l.getY(v):l.getY(v))*s)))*n+g)*4;h+=.3*c[x]+.59*c[x+1]+.11*c[x+2],u++}const d=225/Math.max(8,h/Math.max(1,u));for(let v=0;v<c.length;v+=4){const g=Math.min(255,(.3*c[v]+.59*c[v+1]+.11*c[v+2])*d);c[v]=c[v+1]=c[v+2]=g}a.putImageData(o,0,0);const m=new gn(r);return m.colorSpace=e.colorSpace,m.flipY=e.flipY,m.wrapS=e.wrapS,m.wrapT=e.wrapT,m}class Ly{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Iy(e).buffer}}function Iy(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function cf(i){return new Dy(i).unpack()}function lf(i){const e=new Uy,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Dy{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Uy{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Ly,this._textEncoder=new TextEncoder}}let hf=!0,uf=!0;function fr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ji(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Wl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function ky(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(hf=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Ny(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(uf=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Wl(){if(typeof window=="object"){if(hf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function $l(i,e){uf&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Fy(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(fr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(fr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(fr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=fr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Du(i){return Object.prototype.toString.call(i)==="[object Object]"}function df(i){return Du(i)?Object.keys(i).reduce(function(e,t){const n=Du(i[t]),s=n?df(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function sl(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?sl(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{sl(i,i.get(s),t)})}))}function Uu(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&sl(i,o,s)})}),s}const ku=Wl;function ff(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,d){return f?f+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(m=>m.kind==="videoinput");let d=f.find(m=>u.some(v=>m.label.toLowerCase().includes(v)));return!d&&f.length&&u.includes("back")&&(d=f[f.length-1]),d&&(o.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),o.video=n(o.video),ku("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return ku("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function pf(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function mf(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else ji(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function gf(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function vf(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>Uu(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),ji(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>Uu(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function _f(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function xf(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return _f(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(v=>v===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[u.id];if(m)m.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new i.MediaStream([h]);this._streams[u.id]=v,this._reverseStreams[v.id]=u,this.addStream(v)}return this.getSenders().find(v=>v.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],m=l._streams[d.id];u=u.replace(new RegExp(m.id,"g"),d.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],m=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[m=>{const v=r(this,m);f[0].apply(null,[v])},m=>{f[1]&&f[1].apply(null,m)},arguments[2]]):h.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[l]=u[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(v=>h.track===v)&&(f=this._streams[d])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function rl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function yf(i,e){e.version>102||ji(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Nu=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:yf,shimAddTrackRemoveTrack:xf,shimAddTrackRemoveTrackWithNative:_f,shimGetSendersWithDtmf:gf,shimGetUserMedia:ff,shimMediaStream:pf,shimOnTrack:mf,shimPeerConnection:rl,shimSenderReceiverGetStats:vf},Symbol.toStringTag,{value:"Module"}));function bf(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){$l("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Oy(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Mf(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ol(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Sf(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Tf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function wf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),ji(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ef(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){$l("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Af(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Cf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Rf(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Pf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Lf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Fu=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Cf,shimCreateAnswer:Lf,shimCreateOffer:Pf,shimGetDisplayMedia:Oy,shimGetParameters:Rf,shimGetStats:Sf,shimGetUserMedia:bf,shimOnTrack:Mf,shimPeerConnection:ol,shimRTCDataChannel:Af,shimReceiverGetStats:wf,shimRemoveStream:Ef,shimSenderGetStats:Tf},Symbol.toStringTag,{value:"Module"}));function If(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Df(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Uf(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let o=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,h){const u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=o}function kf(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Nf(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function Nf(i){return i&&i.video!==void 0?Object.assign({},i,{video:df(i.video)}):i}function Ff(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?($l("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Of(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function zf(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Bf(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Ou=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Bf,shimCallbacksAPI:Uf,shimConstraints:Nf,shimCreateOfferLegacy:zf,shimGetUserMedia:kf,shimLocalStreamsAPI:If,shimRTCIceServerUrls:Ff,shimRemoteStreamsAPI:Df,shimTrackEventTransceiver:Of},Symbol.toStringTag,{value:"Module"}));function zy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $a={exports:{}},zu;function By(){return zu||(zu=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=e.writeExtmap(a)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(m=>parseInt(m,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),r&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})($a)),$a.exports}var Hf=By();const Ls=zy(Hf),Hy=bp({__proto__:null,default:Ls},[Hf]);function ko(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Ls.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ji(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function al(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ji(i,"icecandidate",e=>{if(e.candidate){const t=Ls.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function No(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=Ls.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=Ls.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Ls.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return a.apply(this,arguments)}}function Fo(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},ji(i,"datachannel",s=>(t(s.channel,s.target),s))}function cl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function ll(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Oo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function zo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Vy=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:ll,shimAddIceCandidateNullOrEmpty:Oo,shimConnectionState:cl,shimMaxMessageSize:No,shimParameterlessSetLocalDescription:zo,shimRTCIceCandidate:ko,shimRTCIceCandidateRelayProtocol:al,shimSendThrowTypeError:Fo},Symbol.toStringTag,{value:"Module"}));function Gy({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Wl,n=Fy(i),s={browserDetails:n,commonShim:Vy,extractVersion:fr,disableLog:ky,disableWarnings:Ny,sdp:Hy};switch(n.browser){case"chrome":if(!Nu||!rl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Nu,Oo(i,n),zo(i),ff(i,n),pf(i),rl(i,n),mf(i,n),xf(i,n),gf(i),vf(i,n),yf(i,n),ko(i),al(i),cl(i),No(i,n),Fo(i,n),ll(i,n);break;case"firefox":if(!Fu||!ol||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Fu,Oo(i,n),zo(i),bf(i,n),ol(i,n),Sf(i,n),Mf(i),Ef(i),Tf(i),wf(i),Af(i),Cf(i,n),Rf(i,n),Pf(i,n),Lf(i,n),ko(i),cl(i),No(i,n),Fo(i,n);break;case"safari":if(!Ou||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Ou,Oo(i,n),zo(i),Ff(i),zf(i),Uf(i),If(i),Df(i),Of(i),kf(i),Bf(i),ko(i),al(i),No(i,n),Fo(i,n),ll(i,n);break;default:t("Unsupported browser!");break}return s}const Bu=Gy({window:typeof window>"u"?void 0:window});function Yi(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Vf{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function Wy(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Xa=Bu.default||Bu,ar=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Xa.browserDetails.browser}getVersion(){return Xa.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Xa.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},$y=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Gf=()=>Math.random().toString(36).slice(2),Hu={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Xy extends Vf{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Hu,this.browser=ar.getBrowser(),this.browserVersion=ar.getVersion(),this.pack=lf,this.unpack=cf,this.supports=(function(){const t={browser:ar.isBrowserSupported(),webRTC:ar.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Hu),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!ar.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=$y,this.randomToken=Gf}}const Kt=new Xy,qy="PeerJS: ";var Vu;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(Vu||(Vu={}));class jy{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[qy,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var we=new jy,Xl={},Yy=Object.prototype.hasOwnProperty,qt="~";function Pr(){}Object.create&&(Pr.prototype=Object.create(null),new Pr().__proto__||(qt=!1));function Zy(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Wf(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Zy(t,n||i,s),a=qt?qt+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function Bo(i,e){--i._eventsCount===0?i._events=new Pr:delete i._events[e]}function Ht(){this._events=new Pr,this._eventsCount=0}Ht.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Yy.call(t,n)&&e.push(qt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Ht.prototype.listeners=function(e){var t=qt?qt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Ht.prototype.listenerCount=function(e){var t=qt?qt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Ht.prototype.emit=function(e,t,n,s,r,a){var o=qt?qt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,d;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c[u].fn.apply(c[u].context,h)}}return!0};Ht.prototype.on=function(e,t,n){return Wf(this,e,t,n,!1)};Ht.prototype.once=function(e,t,n){return Wf(this,e,t,n,!0)};Ht.prototype.removeListener=function(e,t,n,s){var r=qt?qt+e:e;if(!this._events[r])return this;if(!t)return Bo(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&Bo(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Bo(this,r)}return this};Ht.prototype.removeAllListeners=function(e){var t;return e?(t=qt?qt+e:e,this._events[t]&&Bo(this,t)):(this._events=new Pr,this._eventsCount=0),this};Ht.prototype.off=Ht.prototype.removeListener;Ht.prototype.addListener=Ht.prototype.on;Ht.prefixed=qt;Ht.EventEmitter=Ht;Xl=Ht;var Zi={};Yi(Zi,"ConnectionType",()=>Bn);Yi(Zi,"PeerErrorType",()=>xt);Yi(Zi,"BaseConnectionErrorType",()=>Lr);Yi(Zi,"DataConnectionErrorType",()=>Ir);Yi(Zi,"SerializationType",()=>Vs);Yi(Zi,"SocketEventType",()=>Nn);Yi(Zi,"ServerMessageType",()=>Dt);var Bn;(function(i){i.Data="data",i.Media="media"})(Bn||(Bn={}));var xt;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(xt||(xt={}));var Lr;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})(Lr||(Lr={}));var Ir;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(Ir||(Ir={}));var Vs;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(Vs||(Vs={}));var Nn;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})(Nn||(Nn={}));var Dt;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(Dt||(Dt={}));var ql={};ql=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class Ky extends Xl.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ql.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),we.log("Server message received:",r)}catch{we.log("Invalid server message",s.data);return}this.emit(Nn.Message,r)},this._socket.onclose=s=>{this._disconnected||(we.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Nn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),we.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){we.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Dt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Nn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class $f{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Bn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){we.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;we.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(we.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Dt.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":we.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Lr.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":we.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Lr.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":we.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},we.log("Listening for data channel"),e.ondatachannel=a=>{we.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},we.log("Listening for remote stream"),e.ontrack=a=>{we.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===Bn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){we.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);we.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),we.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Bn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Dt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(xt.WebRTC,s),we.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(xt.WebRTC,n),we.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();we.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),we.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Dt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(xt.WebRTC,s),we.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(xt.WebRTC,n),we.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;we.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),we.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(xt.WebRTC,a),we.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){we.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),we.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(xt.WebRTC,t),we.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(we.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return we.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){we.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Xf extends Xl.EventEmitter{emitError(e,t){we.error("Error:",t),this.emit("error",new Jy(`${e}`,t))}}class Jy extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class qf extends Xf{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var vl;const Tr=class Tr extends qf{get type(){return Bn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Tr.ID_PREFIX+Kt.randomToken(),this._negotiator=new $f(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{we.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{we.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){we.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Dt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Dt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:we.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){we.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};vl=new WeakMap,Zs(Tr,vl,Tr.ID_PREFIX="mc_");let Zo=Tr;class Qy{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ql.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){we.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Kt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Kt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw we.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var _l,xl;const Ni=class Ni extends qf{get type(){return Bn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Ni.ID_PREFIX+Gf(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new $f(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{we.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{we.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{we.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Ir.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Dt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Dt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:we.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};_l=new WeakMap,xl=new WeakMap,Zs(Ni,_l,Ni.ID_PREFIX="dc_"),Zs(Ni,xl,Ni.MAX_BUFFERED_AMOUNT=8388608);let Ko=Ni;class jl extends Ko{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Ko.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return we.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class qa extends jl{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Vf,this.serialization=Vs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=cf(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=Wy(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=lf(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);we.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class eb extends jl{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Vs.None}}class tb extends jl{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Kt.chunkedMTU){this.emitError(Ir.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Vs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var yl;const wr=class wr extends Xf{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:eb,json:tb,binary:qa,"binary-utf8":qa,default:qa},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Kt.CLOUD_HOST,port:Kt.CLOUD_PORT,path:"/",key:wr.DEFAULT_KEY,token:Kt.randomToken(),config:Kt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Kt.CLOUD_HOST?this._options.secure=Kt.isSecure():this._options.host==Kt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&we.setLogFunction(this._options.logFunction),we.logLevel=this._options.debug||0,this._api=new Qy(t),this._socket=this._createServerConnection(),!Kt.supports.audioVideo&&!Kt.supports.data){this._delayedAbort(xt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Kt.validateId(n)){this._delayedAbort(xt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(xt.ServerError,s))}_createServerConnection(){const e=new Ky(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Nn.Message,t=>{this._handleMessage(t)}),e.on(Nn.Error,t=>{this._abort(xt.SocketError,t)}),e.on(Nn.Disconnected,()=>{this.disconnected||(this.emitError(xt.Network,"Lost connection to server."),this.disconnect())}),e.on(Nn.Close,()=>{this.disconnected||this._abort(xt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Dt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Dt.Error:this._abort(xt.ServerError,n.msg);break;case Dt.IdTaken:this._abort(xt.UnavailableID,`ID "${this.id}" is taken`);break;case Dt.InvalidKey:this._abort(xt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Dt.Leave:we.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Dt.Expire:this.emitError(xt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Dt.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),we.warn(`Offer received for existing Connection ID:${r}`)),n.type===Bn.Media){const c=new Zo(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Bn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{we.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){we.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):we.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){we.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(xt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){we.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(xt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){we.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Zo(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){we.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){we.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(we.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;we.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)we.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)we.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(xt.ServerError,t))}};yl=new WeakMap,Zs(wr,yl,wr.DEFAULT_KEY="peerjs");let hl=wr;var Gu=hl;const Wu="the-grand-tour-v1-";function $u(i){const e=["name","number","jersey","frame","helmet","shorts","brand","paint","kit","bar","groupset","tires"],t={};for(const n of e)i[n]!=null&&(t[n]=i[n]);return t}class nb{constructor(){this.peer=null,this.conn=null,this.role=null,this.code=null,this.remote=null,this.listener=null,this.status="off"}get connected(){return this.status==="connected"}listen(e){this.listener=e}emit(e){var t;(t=this.listener)==null||t.call(this,e)}host(e,t,n=0){this.close(),this.role="host",this.me={char:$u(e),mode:t},this.code=String(1e3+Math.floor(Math.random()*9e3)),this.status="waiting";const s=this.peer=new Gu(Wu+this.code);s.on("error",r=>{if(r.type==="unavailable-id"&&n<5)return this.host(e,t,n+1);this.fail(r)}),s.on("open",()=>this.emit({t:"code",code:this.code})),s.on("connection",r=>{if(this.conn){r.close();return}this.attach(r)})}join(e,t,n){this.close(),this.role="guest",this.me={char:$u(t),mode:n},this.code=e,this.status="connecting";const s=this.peer=new Gu;s.on("error",r=>this.fail(r)),s.on("open",()=>this.attach(s.connect(Wu+e,{reliable:!0}))),clearTimeout(this.joinTimer),this.joinTimer=setTimeout(()=>{this.status==="connecting"&&this.fail({type:"timeout"})},12e3)}attach(e){this.conn=e,e.on("open",()=>{clearTimeout(this.joinTimer),this.status="connected",e.send({t:"hello",...this.me})}),e.on("data",t=>{if(!(!t||typeof t!="object")){if(t.t==="bye"){this.status="closed",this.emit({t:"closed"});return}t.t==="hello"&&(this.remote={char:t.char,mode:t.mode}),this.emit(t)}}),e.on("close",()=>{this.status==="connected"&&(this.status="closed",this.emit({t:"closed"}))}),e.on("error",t=>this.fail(t))}send(e){var t;this.connected&&((t=this.conn)!=null&&t.open)&&this.conn.send(e)}fail(e){if(this.status==="off")return;this.status="error";const t=(e==null?void 0:e.type)==="peer-unavailable"||(e==null?void 0:e.type)==="timeout"?"Kein Rennen mit diesem Code gefunden.":(e==null?void 0:e.type)==="network"||(e==null?void 0:e.type)==="server-error"||(e==null?void 0:e.type)==="socket-error"?"Keine Verbindung zum Internet-Dienst.":"Die Verbindung hat nicht geklappt.";this.emit({t:"error",why:t})}close(){var t,n,s;clearTimeout(this.joinTimer);const e=this.status;this.status="off";try{e==="connected"&&((t=this.conn)==null||t.send({t:"bye"}))}catch{}(n=this.conn)==null||n.close(),(s=this.peer)==null||s.destroy(),this.conn=null,this.peer=null,this.remote=null}}const Jo=[{id:"canyon",name:"Canyon",land:"Deutschland",font:"800 italic",upper:!0},{id:"rose",name:"Rose",land:"Deutschland",font:"800",upper:!0},{id:"colnago",name:"Colnago",land:"Italien",font:"800",upper:!0,wide:!0},{id:"cervelo",name:"Cervélo",land:"Kanada",font:"700 italic",upper:!1}],yr=[{hex:"#f6f6f6",name:"Weiß"},{hex:"#16161b",name:"Schwarz"},{hex:"#9aa0a6",name:"Grau"},{hex:"#d62839",name:"Rot"},{hex:"#f4a12a",name:"Orange"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2bb24c",name:"Grün"},{hex:"#1fa88f",name:"Türkis"},{hex:"#2f7cf6",name:"Blau"},{hex:"#14365c",name:"Dunkelblau"},{hex:"#8a3ffc",name:"Lila"},{hex:"#ff6fb5",name:"Pink"},{hex:"#d4af37",name:"Gold"}],Yl=yr.map(i=>i.hex==="#2bb24c"?{hex:"#145a32",name:"Dunkelgrün"}:i),ib=yr.map(i=>i.hex==="#f4a12a"?{hex:"#d9731c",name:"Orange"}:i);function sb(i){return Yl.some(e=>e.matte&&e.hex===i)}const jf=[{id:"solid",name:"Einfarbig"},{id:"team",name:"Team-Design"},{id:"rainbow",name:"Weltmeister"}],Qo=[{id:"105",name:"105",maker:"Shimano",crank:"#26272c",ring:"#1b1c20",accent:"#b9bdc4",kraft:1},{id:"ultegra",name:"Ultegra",maker:"Shimano",crank:"#55585f",ring:"#3d4046",accent:"#d5d8dd",kraft:1.02},{id:"duraace",name:"Dura-Ace",maker:"Shimano",crank:"#2e3036",ring:"#a9aeb6",accent:"#e8eaee",kraft:1.05},{id:"rival",name:"Rival AXS",maker:"SRAM",crank:"#141416",ring:"#141416",accent:"#6f747c",kraft:.97},{id:"force",name:"Force AXS",maker:"SRAM",crank:"#3a3d43",ring:"#2a2c31",accent:"#a3a8b0",kraft:1.02},{id:"red",name:"Red AXS",maker:"SRAM",crank:"#101012",ring:"#101012",accent:"#c8102e",kraft:1.05}],rb=[{hex:"#1c1c1c",name:"Schwarz"},{hex:"#b8864e",name:"Braun (Classic)"},{hex:"#f1f1ee",name:"Weiß"},{hex:"#d62839",name:"Rot"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2f7cf6",name:"Blau"},{hex:"#2bb24c",name:"Grün"},{hex:"#ff6fb5",name:"Pink"}];function Yf(i){return Qo.find(e=>e.id===i)||Qo[0]}const dn={groupset:"105",helmet:"#f6f6f6",shorts:"#16161b",brand:"canyon",paint:"solid",kit:"plain"};function Zf(i){return Jo.find(e=>e.id===i)||Jo[0]}function Kf(i){return i.upper?i.name.toUpperCase():i.name.toLowerCase()}function ob(i){const e=parseInt(i.slice(1),16),t=e>>16&255,n=e>>8&255,s=e&255;return .299*t+.587*n+.114*s>150?"#111111":"#ffffff"}const go='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function ab(i,e,t){const n=i.getContext("2d"),s=i.width,r=i.height;n.clearRect(0,0,s,r);const a=s*.06;n.fillStyle="#fbfbf6",n.beginPath(),n.roundRect(s*.02,r*.02,s*.96,r*.96,a),n.fill(),n.lineWidth=s*.008,n.strokeStyle="#c9c9c0",n.stroke(),n.fillStyle="#9a9a92";for(const[m,v]of[[.08,.1],[.92,.1],[.08,.9],[.92,.9]])n.beginPath(),n.arc(s*m,r*v,s*.022,0,Math.PI*2),n.fill();const o=String(e??"");n.fillStyle="#111",n.textAlign="center",n.textBaseline="alphabetic";let c=r*.62;n.font=`800 ${c}px ${go}`;const l=s*.82,h=n.measureText(o).width;h>l&&(c*=l/h,n.font=`800 ${c}px ${go}`),n.fillText(o,s/2,r*.64);const u=String(t??"").toUpperCase();let f=r*.15;n.font=`700 ${f}px ${go}`;const d=n.measureText(u).width;d>s*.8&&(f*=s*.8/d,n.font=`700 ${f}px ${go}`),n.fillStyle="#333",n.fillText(u,s/2,r*.84)}const cb=[{id:"plain",name:"Einfarbig"},{id:"stripes",name:"Streifen"},{id:"rainbow",name:"Weltmeister"}],Zl=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"];function Is(i,e){const t=new ce(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l*e))),"#"+t.getHexString()}function vo(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=new gn(t);return n.colorSpace=bt,n.anisotropy=4,{canvas:t,tex:n}}function Fn(i,e,t,n,s,r){const a=(s-n)/r.length;r.forEach((o,c)=>{const l=s-a*c;i.fillStyle=o,i.fillRect(0,(1-l)*t,e,a*t+.6)})}function lb(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),n.fillStyle=Is(e,.62),n.fillRect(s*.19,0,s*.12,r),n.fillRect(s*.69,0,s*.12,r),t==="stripes"?(Fn(n,s,r,.6,.66,["#ffffff"]),Fn(n,s,r,.53,.56,["#ffffff"])):t==="rainbow"&&Fn(n,s,r,.57,.74,Zl),n.strokeStyle=Is(e,.55),n.lineWidth=3;const a=s*.36,o=s*.28;n.strokeRect(a,r*.8,o,r*.16),n.beginPath(),n.moveTo(a+o/3,r*.8),n.lineTo(a+o/3,r*.96),n.moveTo(a+2*o/3,r*.8),n.lineTo(a+2*o/3,r*.96),n.stroke(),n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=2;for(const c of[.19,.31,.69,.81])n.beginPath(),n.moveTo(s*c,0),n.lineTo(s*c,r),n.stroke();Fn(n,s,r,.95,1,[t==="rainbow"?"#0b6cb5":Is(e,.5)]),n.fillStyle="rgba(20,20,24,0.8)",n.fillRect(0,0,3,r*.62),n.fillRect(s-3,0,3,r*.62),n.fillStyle=t==="rainbow"||Jf(e)?"#1a1a1e":"#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`800 ${Math.round(r*.05)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(Ue.gameName.toUpperCase(),s*.5,r*.13),n.font=`700 ${Math.round(r*.04)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(Ue.gameName.toUpperCase(),s*.09,r*.2),i.tex.needsUpdate=!0}function hb(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),t==="rainbow"?Fn(n,s,r,.76,.96,Zl):t==="stripes"&&Fn(n,s,r,.82,.92,["#ffffff"]),Fn(n,s,r,.96,1,[Is(e,.5)]),i.tex.needsUpdate=!0}function ub(i,e,t,n){const s=i.canvas.getContext("2d"),r=i.canvas.width,a=i.canvas.height;s.fillStyle=t,s.fillRect(0,0,r,a),Fn(s,r,a,0,.74,[e]),n==="rainbow"?Fn(s,r,a,.62,.74,Zl):Fn(s,r,a,.69,.74,[Is(e,Jf(e)?.6:1.8)]),i.tex.needsUpdate=!0}function db(i,e){const t=i.canvas.getContext("2d"),n=i.canvas.width,s=i.canvas.height;t.fillStyle=e,t.fillRect(0,0,n,s),t.fillStyle="rgba(15,15,18,0.85)";const r=9;for(let a=0;a<r;a++){const o=(a+.5)/r*n;t.beginPath(),t.ellipse(o,s*.38,n*.018,s*.14,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(o+n/r/2,s*.72,n*.014,s*.09,0,0,Math.PI*2),t.fill()}t.fillStyle=Is(e,.7),t.fillRect(0,s*.93,n,s*.07),i.tex.needsUpdate=!0}function Jf(i){const e=new ce(i),t={};return e.getHSL(t),t.l>.6}const ea=new R(0,1,0),De=(i,e,t)=>new R(i,e,t),Jn=new R,ul=new R,fb=new R,pb=new R,vs=new R,$t=.34,nn=De(0,.27,-.08),_o=.17;function Ft(i,e,t,n,s=t,r=10){const a=i.distanceTo(e),o=new oe(new st(s,t,a,r),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(ea,Jn.copy(e).sub(i).normalize()),o.castShadow=!0,o}function _s(i,e,t){i.position.copy(e).add(t).multiplyScalar(.5),i.quaternion.setFromUnitVectors(ea,Jn.copy(t).sub(e).normalize())}function Xu(i,e,t,n,s,r){Jn.copy(e).sub(i);let a=Jn.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),Jn.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return ul.copy(s).addScaledVector(Jn,-s.dot(Jn)).normalize(),r.copy(i).addScaledVector(Jn,o*t).addScaledVector(ul,c*t)}let Ai=null;function mb(){if(Ai)return Ai;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=(a,o)=>(a=(a+i)%i,o=(o+i)%i,.25*Math.sin(a*Math.PI/2)*Math.sin(o*Math.PI/4)+.15*Math.sin((a+o)*Math.PI/4)),s=t.createImageData(i,i),r=new R;for(let a=0;a<i;a++)for(let o=0;o<i;o++){r.set(-(n(o+1,a)-n(o-1,a))*2,-(n(o,a+1)-n(o,a-1))*2,1).normalize();const c=(a*i+o)*4;s.data[c]=(r.x*.5+.5)*255,s.data[c+1]=(r.y*.5+.5)*255,s.data[c+2]=(r.z*.5+.5)*255,s.data[c+3]=255}return t.putImageData(s,0,0),Ai=new gn(e),Ai.wrapS=Ai.wrapT=ni,Ai.repeat.set(10,10),Ai}function gb(i){const e=[new tt(.058,.068,.03)];for(let n=0;n<4;n++){const s=new Gi(.0095,.034,2,6);s.rotateX(1.15),s.translate(-.021+n*.014,.046,.02),e.push(s)}const t=new Gi(.0105,.03,2,6);return t.rotateZ(i*.9),t.translate(i*.034,.018,.012),e.push(t),Hs(e)}function xo(i,e,t,n=10){const s=[];for(let a=0;a<=n;a++){const o=a/n;s.push(new le(e(o),-i/2+o*i))}const r=new oe(new Dr(s,14),t);return r.castShadow=!0,r}function qu(i,e,t){const n=new oe(new Gi(e,Math.max(.01,i-2*e),4,10),t);return n.castShadow=!0,n}const ja={};function ju(i="gold"){if(ja[i])return ja[i];const e=i==="team",t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");n.fillStyle="#121214",n.fillRect(0,0,512,512);for(let o=0;o<512;o+=4)n.fillStyle=o%8?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.2)",n.fillRect(o,0,2,512);n.translate(256,256);const s=` ${Ue.gameName.toUpperCase()} `;n.font=e?'800 46px "Barlow Condensed", Arial, sans-serif':'800 30px "Barlow Condensed", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle";const r=e?226:233;for(let o=0;o<2;o++){let c=o*Math.PI;for(const l of s){const h=n.measureText(l).width;c+=h/2/r,n.save(),n.rotate(c),n.translate(0,-r),n.fillStyle=e?"#f2f2ee":Ue.colors.gold,n.fillText(l,0,0),n.restore(),c+=h/2/r}}e||(n.strokeStyle=Ue.colors.accent,n.lineWidth=4,n.beginPath(),n.arc(0,0,214,.3,1.4),n.stroke(),n.beginPath(),n.arc(0,0,214,.3+Math.PI,1.4+Math.PI),n.stroke());const a=new gn(t);return a.colorSpace=bt,a.anisotropy=8,ja[i]=a,a}const Ya={};function Za(i,e=!1,t=7,n=20){const s=`${i}-${e}-${t}-${n}`;if(Ya[s])return Ya[s];const r=128,a=512,o=document.createElement("canvas");o.width=r,o.height=a;const c=o.getContext("2d");e&&(c.translate(0,a),c.scale(1,-1)),c.fillStyle="#000",c.fillRect(0,0,r,a),c.fillStyle="#fff";const l=(1-i)*a;c.fillRect(0,0,r,l);for(let u=0;u<t;u++){const d=26-u*3.2,m=l+u*n;for(let v=0;v<8;v++){if(u>2&&(v+u)%2)continue;const g=(v+u%2*.5)/8*r;c.beginPath(),c.moveTo(g-d/2,m-2),c.lineTo(g+d/2,m-2),c.lineTo(g,m+d*1.1),c.closePath(),c.fill()}}const h=new gn(o);return h.colorSpace=bt,h.anisotropy=8,Ya[s]=h,h}function vb(){const e=new gi(.318,.026,10,144),t=e.attributes.position,n=[],s=new R,r=new R;for(let a=0;a<t.count;a++){s.fromBufferAttribute(t,a);const o=Math.atan2(s.y,s.x);r.set(Math.cos(o)*.318,Math.sin(o)*.318,0);const c=s.clone().sub(r),l=c.dot(r)/(c.length()*.318+1e-6),h=o/(Math.PI*2)*40;l>.2&&h-Math.floor(h)<.5&&s.addScaledVector(c.normalize(),.006),t.setXYZ(a,s.x,s.y,s.z);const u=l>.35?_b:xb;n.push(u.r,u.g,u.b)}return e.setAttribute("color",new We(n,3)),e.computeVertexNormals(),e}const _b=new ce("#1e1a16"),xb=new ce("#c39a5a"),Ka={};function yb(i,e,t,n){const s=`${i}-${e}-${t}-${n}`;if(Ka[s])return Ka[s];const r=document.createElement("canvas");r.width=32,r.height=512;const a=r.getContext("2d");a.fillStyle=i,a.fillRect(0,0,32,512);const o=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"],c=(t-e)/o.length;o.forEach((h,u)=>{const f=n?e+c*(u+1):t-c*u;a.fillStyle=h,a.fillRect(0,(1-f)*512,32,c*512+.5)});const l=new gn(r);return l.colorSpace=bt,Ka[s]=l,l}class Qf{constructor(){this.root=new ht,this.root.rotation.order="YXZ",this.wheelAngle=0,this.crankAngle=0;const e=s=>new Mn({roughness:.68,sheen:.7,sheenRoughness:.45,sheenColor:new ce("#ffffff"),normalMap:mb(),normalScale:new le(.35,.35),...s}),t=this.mats={frame:new Mn({color:Ue.colors.bikeFrame,metalness:.4,roughness:.3,clearcoat:1,clearcoatRoughness:.08}),accent:new Mn({color:Ue.colors.gold,metalness:.7,roughness:.25,clearcoat:1}),black:new Ae({color:"#17171a",roughness:.45,metalness:.3}),alu:new Ae({color:"#b9bcc2",roughness:.25,metalness:1}),tire:new Ae({color:"#1c1c1c",roughness:.9}),cxTire:new Ae({color:"#ffffff",vertexColors:!0,roughness:.95}),tape:new Ae({color:"#f1f1ee",roughness:.7}),crankArm:new Mn({color:"#26272c",metalness:.6,roughness:.3,clearcoat:1}),ring:new Ae({color:"#1b1c20",metalness:.7,roughness:.3}),groupAccent:new Ae({color:"#b9bdc4",metalness:.8,roughness:.25}),jersey:e({}),skin:new Mn({color:"#e2ad8c",roughness:.55,sheen:.35,sheenRoughness:.7,sheenColor:new ce("#ff9f7a")}),shorts:e({color:"#16161b",roughness:.6}),shoe:new Ae({color:"#f4f4f4",roughness:.4}),helmet:new Mn({roughness:.3,clearcoat:1}),glasses:new Mn({color:"#ff8a2a",roughness:.05,metalness:1,envMapIntensity:2.2,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[200,700]}),glassFrame:new Ae({color:"#111114",roughness:.4}),glove:e({color:"#f1f1ee",roughness:.75}),hair:new Ae({color:"#4a3324",roughness:.9}),jerseyPlain:e({}),sole:new Ae({color:"#141416",roughness:.6}),sleeve:e({}),thigh:e({roughness:.6})},n=s=>new Mn({map:s,roughness:.3,metalness:.2,clearcoat:1,clearcoatRoughness:.1});this.teamMats={down:n(Za(.86,!1,4,12)),top:n(Za(.4)),fork:n(Za(.45,!0)),solid:n(null)},this.frameColor=Ue.colors.bikeFrame,this.design="solid",this.buildFrame(t),this.buildWheels(t),this.buildDrivetrain(t),this.buildCockpit(t),this.buildRider(t),this.buildKit(t),this.buildPlates(),this.buildDecals(),this.setBrand(dn.brand),this.update(0,0,0,0)}buildFrame(e){const t=De(0,$t,-.5),n=De(0,.8,-.24),s=De(0,.86,.36),r=De(0,.7,.4),a=this.root;this.tubes={down:Ft(nn,r,.032,e.frame,.027),top:Ft(n,s,.017,e.frame,.016),head:Ft(r,s,.026,e.frame)},this.tubes.down.scale.z=1.9,this.tubes.top.scale.z=1.4,this.tubes.head.scale.z=1.3,a.add(this.tubes.down,this.tubes.top,this.tubes.head),this.tubes.seat=Ft(nn,n,.018,e.frame),a.add(this.tubes.seat);for(const l of[-1,1])a.add(Ft(De(l*.012,nn.y,nn.z),De(l*.06,t.y,t.z),.01,e.frame)),a.add(Ft(De(l*.012,.62,-.19),De(l*.06,t.y,t.z),.009,e.frame));this.stripe=Ft(De(0,.812,-.15),De(0,.845,.2),.0175,e.accent,.0175),a.add(this.stripe),a.add(Ft(n,De(0,.88,-.265),.0135,e.black));const o=new oe(new tt(.03,.045,.02),new Ae({color:"#ff2a2a",emissive:"#ff0000",emissiveIntensity:.8}));o.position.set(0,.83,-.285),a.add(o);const c=new oe(new Gi(.045,.18,4,8),e.black);c.rotation.x=Math.PI/2+.06,c.scale.set(1.2,1,.35),c.position.set(0,.895,-.25),c.castShadow=!0,a.add(c),this.bottle=new oe(new st(.035,.035,.2,12),e.accent),this.bottle.position.copy(nn).lerp(n,.5),this.bottle.position.z+=.06,this.bottle.quaternion.setFromUnitVectors(ea,Jn.copy(n).sub(nn).normalize()),a.add(this.bottle)}makeWheel(e,t){const n=new ht,s=new oe(new gi(.317,.023,14,64),e.tire);s.rotation.y=Math.PI/2,s.castShadow=!0,n.add(s);const r=new oe(vb(),e.cxTire);r.rotation.y=Math.PI/2,r.castShadow=!0,r.visible=!1,n.add(r),(this.roadTires||(this.roadTires=[])).push(s),(this.cxTires||(this.cxTires=[])).push(r);for(let h=0;h<4;h++){const u=new oe(new tt(.03,.02,.008),e.accent),f=h*Math.PI/2;u.position.set(0,Math.sin(f)*.2,Math.cos(f)*.2),u.rotation.x=-f,n.add(u)}for(const h of[-1,1]){const u=new oe(new Yo(.232,.306,56,1),t);u.rotation.y=h*Math.PI/2,u.position.x=h*.012,n.add(u)}for(const h of[.3,.234]){const u=new oe(new gi(h,.006,6,56),e.alu);u.rotation.y=Math.PI/2,n.add(u)}const a=new oe(new st(.306,.306,.024,56,1,!0),e.black);a.rotation.z=Math.PI/2,n.add(a);const o=[];for(let h=0;h<28;h++){const u=h/28*Math.PI*2,f=h%2?1:-1,d=De(f*.03,Math.cos(u)*.025,Math.sin(u)*.025),m=De(f*.006,Math.cos(u)*.234,Math.sin(u)*.234),v=d.distanceTo(m),g=new st(.0022,.0022,v,4);g.applyQuaternion(new vt().setFromUnitVectors(ea,m.clone().sub(d).normalize())),g.translate((d.x+m.x)/2,(d.y+m.y)/2,(d.z+m.z)/2),o.push(g)}n.add(new oe(Hs(o),e.alu));const c=new oe(new st(.022,.022,.1,12),e.alu);c.rotation.z=Math.PI/2,n.add(c);for(const h of[-1,1]){const u=new oe(new st(.034,.034,.008,16),e.alu);u.rotation.z=Math.PI/2,u.position.x=h*.03,n.add(u)}const l=new oe(new st(.004,.004,.03,6),e.alu);return l.position.set(0,.29,0),n.add(l),n}buildWheels(e){const t=this.rimMat=new Ae({map:ju(),roughness:.3,metalness:.3,side:Jt});this.rearWheel=this.makeWheel(e,t),this.rearWheel.position.set(0,$t,-.5),this.root.add(this.rearWheel);const n=new Mn({color:"#1a1b1f",roughness:.35,metalness:.3,clearcoat:1}),s=[De(.001,.04,0),De(.03,.038,0),De(.306,.013,0),De(.306,-.013,0),De(.03,-.038,0),De(.001,-.04,0)].map(a=>new le(a.x,a.y));this.disc=new oe(new Dr(s,56),n),this.disc.rotation.z=Math.PI/2,this.disc.visible=!1,this.rearWheel.add(this.disc),this.steer=new ht,this.steer.position.set(0,0,.45),this.root.add(this.steer),this.frontWheel=this.makeWheel(e,t),this.frontWheel.position.set(0,$t,.05),this.steer.add(this.frontWheel),this.deepRim=new ht;for(const a of[-1,1]){const o=new oe(new Yo(.17,.307,56,1),n);o.rotation.y=a*Math.PI/2,o.position.x=a*.014,this.deepRim.add(o)}this.deepRim.visible=!1,this.frontWheel.add(this.deepRim),this.forkTubes=[-1,1].map(a=>Ft(De(a*.045,.7,-.05),De(a*.05,$t,.05),.014,e.frame,.018)),this.forkCrown=Ft(De(0,.7,-.05),De(0,.72,-.05),.03,e.frame),this.steer.add(...this.forkTubes,this.forkCrown);const r=new oe(new st(.05,.05,.04,16),e.alu);r.rotation.z=Math.PI/2,r.position.set(-.04,$t,-.5),this.root.add(r)}buildDrivetrain(e){this.crank=new ht,this.crank.position.copy(nn),this.root.add(this.crank);const t=new oe(new st(.105,.105,.006,40),e.ring);t.rotation.z=Math.PI/2,t.position.x=-.065,this.crank.add(t);const n=new oe(new st(.06,.06,.012,5),e.crankArm);n.rotation.z=Math.PI/2,n.position.x=-.07,this.crank.add(n);for(const h of[-1,1]){const u=new oe(new tt(.02,_o,.03),e.crankArm);u.position.set(h*-.085,-h*_o/2,0),u.castShadow=!0,this.crank.add(u)}const s=new oe(new st(.02,.02,.19,10),e.black);s.rotation.z=Math.PI/2,this.crank.add(s);const r=new oe(new st(.028,.028,.004,20),e.groupAccent);r.rotation.z=Math.PI/2,r.position.x=-.077,this.crank.add(r);const a=new ht;a.position.set(-.07,$t-.05,-.47);const o=new oe(new tt(.022,.07,.04),e.crankArm);o.rotation.x=.4;const c=new oe(new tt(.008,.035,.02),e.groupAccent);c.position.set(-.013,.005,0),c.rotation.x=.4;const l=new oe(new tt(.01,.09,.03),e.crankArm);l.position.set(.004,-.07,.01),a.add(o,c,l);for(const h of[-.035,-.105]){const u=new oe(new st(.014,.014,.008,12),e.black);u.rotation.z=Math.PI/2,u.position.set(.006,h,.01),a.add(u)}this.root.add(a);for(const h of[.105,-.105])this.root.add(Ft(De(-.065,nn.y+h,nn.z),De(-.04,$t+h*.45,-.5),.004,e.alu));this.pedals=[-1,1].map(h=>{const u=new oe(new tt(.08,.018,.07),e.black);return u.userData.side=h,this.root.add(u),u})}buildCockpit(e){const t=this.steer;t.add(Ft(De(0,.86,-.08),De(0,.9,.03),.016,e.black));const n=this.roadBars=new ht;t.add(n),n.add(Ft(De(-.21,.9,.03),De(.21,.9,.03),.013,e.tape));for(const r of[-1,1]){const a=r*.21,o=[De(a,.9,.03),De(a,.91,.1),De(a,.86,.13),De(a,.79,.09),De(a,.78,0)],c=new Ss(o),l=new oe(new zi(c,16,.013,8),e.tape);l.castShadow=!0,n.add(l);const h=new oe(new tt(.03,.07,.05),e.black);h.position.set(a,.925,.1),h.rotation.x=-.4,n.add(h)}const s=new oe(new Zt(.02,12,8,0,Math.PI*2,0,Math.PI/2),e.accent);s.position.set(.05,.915,.03),n.add(s),this.buildAeroBars(e)}buildAeroBars(e){const t=new Mn({color:"#16171b",roughness:.35,metalness:.3,clearcoat:1,clearcoatRoughness:.15}),n=new Ae({color:"#2a2b30",roughness:.95}),s=t.clone();s.side=Jt;const r=this.ttBars=new ht,a=new oe(new tt(.36,.014,.045),t);a.position.set(0,.885,.035),a.castShadow=!0,r.add(a);for(const o of[-1,1]){const c=o*.19,l=new oe(new zi(new Ss([De(c,.885,.04),De(c+o*.02,.882,.1),De(c+o*.022,.87,.17)]),12,.013,8),t);r.add(l);const h=new oe(new st(.008,.006,.06,8),e.black);h.position.set(c+o*.022,.84,.18),h.rotation.x=.3,r.add(h);const u=o*.095;r.add(Ft(De(u,.89,-.04),De(u,.925,-.04),.012,t));const f=new oe(new st(.042,.042,.12,14,1,!0,-Math.PI/2,Math.PI),s);f.rotation.x=Math.PI/2,f.position.set(u,.972,-.04),r.add(f);const d=new oe(new tt(.07,.012,.11),n);d.position.set(u,.934,-.04),r.add(d);const m=o*.055,v=new oe(new zi(new Ss([De(o*.07,.915,-.07),De(m,.918,.05),De(m,.922,.15),De(m,.94,.2),De(m,.965,.22)]),20,.011,8),t);v.castShadow=!0,r.add(v);const g=new oe(new st(.009,.011,.03,8),e.black);g.position.set(m,.978,.225),g.rotation.x=-.6,r.add(g)}r.add(Ft(De(-.06,.917,0),De(.06,.917,0),.008,t)),r.visible=!1,this.steer.add(r)}buildRider(e){const t=this.rider=new ht;this.root.add(t),this.hip=De(0,.94,-.2),this.shoulder=De(0,1.2,.25);const n=new oe(new Gi(.11,.1,4,10),e.shorts);n.rotation.z=Math.PI/2,n.position.copy(this.hip),n.castShadow=!0,t.add(n),this.torso=new ht;const s=this.hip.distanceTo(this.shoulder)+.04,r=qu(s,.15,e.jersey),a=r.geometry;a.computeBoundingBox();const o=a.boundingBox.min.y,c=a.boundingBox.max.y,l=a.attributes.position;for(let T=0;T<l.count;T++){const P=(l.getY(T)-o)/(c-o),S=1.02+.38*Math.pow(Math.max(0,(P-.25)/.75),1.4);l.setX(T,l.getX(T)*S);let b=l.getZ(T)*(.9-.12*P);b<0?b-=.035*Math.sin(Math.PI*P):P>.55&&(b+=.015*Math.sin(Math.PI*(P-.55)/.45)),l.setZ(T,b)}a.computeVertexNormals(),this.torso.add(r),_s(this.torso,this.hip,this.shoulder),t.add(this.torso),this.head=new ht;const h=new Zt(.1,20,16);h.scale(.95,1.08,1.06);const u=new oe(h,e.skin);u.castShadow=!0,this.head.add(u);const f=new oe(new Zt(.125,18,10,0,Math.PI*2,0,Math.PI/2),e.helmet);f.scale.set(1,.95,1.3),f.position.set(0,.02,-.02),f.rotation.x=-.25,f.castShadow=!0,this.head.add(f);const d=2.3,m=new oe(new gi(.104,.021,6,24,d),e.glasses);m.rotation.set(Math.PI/2,0,0);const v=new ht;v.rotation.y=d/2-Math.PI/2,v.add(m),m.scale.set(1,1,.55),v.position.set(0,.008,.004),this.head.add(v);const g=new oe(new gi(.106,.006,4,24,d+.2),e.glassFrame);g.rotation.set(Math.PI/2,0,0);const p=new ht;p.rotation.y=(d+.2)/2-Math.PI/2,p.add(g),p.position.set(0,.03,.004),this.head.add(p);const x=new oe(new Hi(.014,.035,6),e.skin);x.rotation.x=Math.PI/2,x.position.set(0,-.022,.1),this.head.add(x);for(const T of[-1,1]){const P=new oe(new Zt(.022,8,6),e.skin);P.scale.set(.45,1,.7),P.position.set(T*.098,-.008,-.01),this.head.add(P);const S=new oe(new zi(new Ss([De(T*.1,.03,0),De(T*.085,-.05,.03),De(0,-.098,.045)]),8,.0045,4),e.glassFrame);this.head.add(S)}const _=new oe(new Zt(1,18,12),e.helmet);_.scale.set(.1,.075,.2),_.position.set(0,.035,-.11),_.rotation.x=-.25,_.visible=!1,_.userData.tt=!0,this.head.add(_);const y=new oe(new Zt(.128,18,10,-Math.PI*.32,Math.PI*.64,Math.PI*.42,Math.PI*.2),e.glasses);y.position.set(0,.005,.005),y.visible=!1,y.userData.tt=!0,this.head.add(y);const C=new oe(new Zt(.098,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.3),e.hair);C.position.set(0,-.005,-.012),this.head.add(C);const M=new oe(new tt(.026,.01,.24),e.glassFrame);M.position.set(0,.127,-.03),M.rotation.x=-.18,this.head.add(M),this.head.position.set(0,1.31,.39),this.head.rotation.x=.05,t.add(this.head),t.add(Ft(De(0,1.2,.27),De(0,1.28,.35),.045,e.skin)),this.arms=[-1,1].map(T=>({s:T,upper:xo(.27,P=>.044+.009*Math.sin(Math.PI*Math.min(1,P*1.1)),e.sleeve),lower:xo(.26,P=>.041-.015*P+.006*Math.exp(-(((P-.2)/.2)**2)),e.skin),hand:new oe(gb(T),e.glove),elbow:new oe(new Zt(.041,10,8),e.skin),cap:new oe(new Zt(.054,12,8),e.jerseyPlain)})),this.legs=[-1,1].map(T=>({s:T,thigh:xo(.44,P=>.086-.026*P+.007*Math.sin(Math.PI*P),e.thigh),shin:xo(.43,P=>.044+.02*Math.exp(-(((P-.3)/.17)**2))-.008*P,e.skin),knee:new oe(new Zt(.058,12,8),e.skin),sock:qu(.18,.058,e.shoe),shoe:new oe(new tt(.08,.06,.24),e.shoe)}));for(const T of this.arms)T.hand.castShadow=!0,t.add(T.upper,T.lower,T.hand,T.elbow,T.cap);for(const T of this.legs){T.shoe.castShadow=!0;const P=new oe(new tt(.085,.016,.25),e.sole);P.position.y=-.033,T.shoe.add(P);for(const b of[.05,-.02]){const L=new oe(new tt(.086,.012,.03),e.sole);L.position.set(0,.031,b),T.shoe.add(L)}const S=new oe(new st(.014,.014,.012,10),e.glassFrame);S.position.set(0,.035,-.07),T.shoe.add(S),t.add(T.thigh,T.shin,T.sock,T.shoe,T.knee)}}buildKit(e){this.kitTex={torso:vo(512,512),sleeve:vo(128,128),thigh:vo(128,256),helmet:vo(256,128)},e.jersey.map=this.kitTex.torso.tex,e.sleeve.map=this.kitTex.sleeve.tex,e.thigh.map=this.kitTex.thigh.tex,e.helmet.map=this.kitTex.helmet.tex,this.kitCol={jersey:Ue.colors.jersey,shorts:"#16161b",helmet:"#f6f6f6"},this.kit="plain",this.updateKit()}updateKit(){var n;const e=this.kitCol;lb(this.kitTex.torso,e.jersey,this.kit),this.mats.jerseyPlain.color.set(e.jersey),hb(this.kitTex.sleeve,e.jersey,this.kit),ub(this.kitTex.thigh,e.shorts,"#"+this.mats.skin.color.getHexString(),this.kit),db(this.kitTex.helmet,e.helmet);const t=e.helmet.toLowerCase()==="#d4af37";this.mats.helmet.metalness=t?.85:0,this.mats.helmet.roughness=t?.18:.3,this.mats.helmet.needsUpdate=!0,(n=this.model)==null||n.setKit(e)}useModel(e){const t=new Ry(e);this.model=t,this.root.add(e),this.rider.visible=!1;const n=this.head.clone();for(const s of[...n.children])s.material===this.mats.skin&&n.remove(s);n.position.set(0,.107,.034),n.rotation.set(.12,0,0),n.scale.setScalar(1.12),t.attach("Head",n),this.modelHelmet=n,this.backPlate.removeFromParent(),this.backPlate.position.set(0,.063,-.145),this.backPlate.rotation.set(0,Math.PI,0),t.attach("Spine1",this.backPlate),t.setKit(this.kitCol),this.update(0,0,0,0)}buildPlates(){this.plateCanvas=document.createElement("canvas"),this.plateCanvas.width=512,this.plateCanvas.height=384,this.plateTex=new gn(this.plateCanvas),this.plateTex.colorSpace=bt,this.plateTex.anisotropy=8;const e=new Ae({map:this.plateTex,roughness:.6}),t=new oe(new rn(.3,.225),e);t.position.set(0,.02,-.132),t.rotation.set(0,Math.PI,0),this.torso.add(t),this.backPlate=t;for(const n of[-1,1]){const s=new oe(new rn(.17,.1275),e);s.position.set(n*.016,.8,-.33),s.rotation.y=n*Math.PI/2,this.root.add(s)}this.setPlate(1,"")}buildDecals(){this.decalCanvas=document.createElement("canvas"),this.decalCanvas.width=512,this.decalCanvas.height=128,this.decalTex=new gn(this.decalCanvas),this.decalTex.colorSpace=bt,this.decalTex.anisotropy=8;const e=new Ae({map:this.decalTex,transparent:!0,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-2}),t=De(0,.7,.4),n=t.clone().sub(nn),s=n.length();n.normalize();const r=nn.clone().lerp(t,.5);for(const a of[-1,1]){const o=De(a,0,0),c=a>0?n.clone().negate():n.clone(),l=new R().crossVectors(o,c),h=new oe(new rn(s*.48,s*.48*(128/512)),e);h.quaternion.setFromRotationMatrix(new Ee().makeBasis(c,l,o)),h.position.copy(r).addScaledVector(o,.033),this.root.add(h)}}setBrand(e){const t=Zf(e);this.brand=t.id;const n=this.decalCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height);const r=t.serif?'"Cinzel", Georgia, serif':'"Barlow Condensed", Arial, sans-serif';s.letterSpacing!==void 0&&(s.letterSpacing=t.wide?"6px":"0px"),s.font=`${t.font} 104px ${r}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=ob(this.design==="team"?"#111114":this.frameColor);const a=Kf(t),o=s.measureText(a).width;o>n.width*.95&&(s.font=`${t.font} ${Math.floor(104*n.width*.95/o)}px ${r}`),s.fillText(a,n.width/2,n.height/2+2),this.decalTex.needsUpdate=!0}applyLook(e={}){this.design=e.paint||dn.paint,this.kit=e.kit||"plain",this.barColor=e.bar||null,this.setColors({jersey:e.jersey||Ue.colors.jersey,frame:e.frame||Ue.colors.bikeFrame,helmet:e.helmet||dn.helmet,shorts:e.shorts||dn.shorts}),this.setBrand(e.brand||dn.brand),this.setGroupset(e.groupset||dn.groupset),this.tireColor=e.tires||null,this.applyTireColor()}applyTireColor(){this.mats.tire.color.set(this.aero&&this.tireColor?this.tireColor:"#1c1c1c")}setGroupset(e){const t=Yf(e);this.groupset=t.id,this.mats.crankArm.color.set(t.crank),this.mats.ring.color.set(t.ring),this.mats.groupAccent.color.set(t.accent)}applyPaint(){const e=this.mats,t=this.design==="team",n=this.teamMats,s=sb(this.frameColor),r=l=>{l.roughness=s?.72:.3,l.metalness=s?.05:.3,l.clearcoat=s?0:1};if(t){e.frame.color.set("#111114"),e.frame.roughness=.55,e.frame.metalness=.2,e.frame.clearcoat=.25;for(const l of["down","top","fork","solid"])n[l].color.set(this.frameColor),r(n[l])}else e.frame.color.set(this.frameColor),r(e.frame);const a=this.design==="rainbow",o=(l,h,u)=>new Mn({map:yb("#"+new ce(this.frameColor).getHexString(),l,h,u),roughness:.3,metalness:.2,clearcoat:1});a&&this.rainbowFor!==this.frameColor&&(this.rainbowFor=this.frameColor,this.rainbowMats={seat:o(.5,.82,!1),fork:o(.3,.62,!0)}),this.tubes.seat.material=a?this.rainbowMats.seat:e.frame,this.tubes.down.material=t?n.down:e.frame,this.tubes.top.material=t?n.top:e.frame,this.tubes.head.material=t?n.solid:e.frame;for(const l of this.forkTubes)l.material=t?n.fork:a?this.rainbowMats.fork:e.frame;this.forkCrown.material=t?n.solid:e.frame;const c=t||a;this.stripe.visible=!c,e.accent.color.set(c?"#1b1b1e":Ue.colors.gold),e.tape.color.set(this.barColor||(c?"#1b1b1e":"#f1f1ee")),this.rimMat.map=ju(c?"team":"gold"),this.rimMat.needsUpdate=!0}setTires(e){const t=e==="cx";for(const s of this.roadTires)s.visible=!t;for(const s of this.cxTires)s.visible=t;const n=this.aero=e==="tt";this.ttBars.visible=n,this.roadBars.visible=!n,this.applyTireColor(),this.disc.visible=n,this.deepRim.visible=n;for(const s of[this.head,this.modelHelmet])s==null||s.traverse(r=>r.userData.tt&&(r.visible=n));this.update(0,0,0,0)}setPlate(e,t){this.plateNumber=e,this.plateName=t,ab(this.plateCanvas,e,t),this.plateTex.needsUpdate=!0}setColors({jersey:e,frame:t,helmet:n,shorts:s}={}){e&&(this.kitCol.jersey=e),t&&(this.frameColor=t),this.applyPaint(),n&&(this.kitCol.helmet=n),s&&(this.kitCol.shorts=s,this.mats.shorts.color.set(s)),(e||n||s)&&this.updateKit(),t&&this.brand&&this.setBrand(this.brand)}update(e,t,n,s){this.wheelAngle+=t/$t*e,this.rearWheel.rotation.x=this.wheelAngle,this.frontWheel.rotation.x=this.wheelAngle,this.crankAngle+=n*e,this.crank.rotation.x=this.crankAngle,this.steer.rotation.y=-s*.35;const r=this.crankAngle,a=Math.sin(r*2)*.006*Math.min(1,Math.abs(n)/4);this.rider.position.y=a,this.torso.rotation.y=0;for(const l of this.legs){const h=l.s,u=h>0?r+Math.PI:r,f=this.pedals[h>0?1:0];f.position.set(h*.12,nn.y-_o*Math.cos(u),nn.z-_o*Math.sin(u));const d=fb.copy(f.position);d.y-=a,l.shoe.position.copy(d).add(vs.set(0,.03,.02)),l.shoe.rotation.x=.06+.22*Math.sin(u);const m=pb.copy(d).add(vs.set(0,.075,-.05)),g=ul.copy(this.hip).add(vs.set(h*.09,0,0)).clone(),p=Xu(g,m,.44,.43,vs.set(h*.12,.1,1),new R);_s(l.thigh,g,p),l.knee.position.copy(p);const x=m.clone().sub(p).normalize(),_=p.clone().addScaledVector(x,.43);_s(l.shin,p,_),_s(l.sock,_.clone().addScaledVector(x,-.16),_.clone().addScaledVector(x,.02))}const o=this.steer.rotation.y,c=this._hands||(this._hands=[new R,new R]);for(const l of this.arms){const h=De(l.s*.19,1.19,.23),u=l.s*.21,f=.1+.45,d=this.aero?l.s*.058:u,m=this.aero?.45+.17:f,v=De(d*Math.cos(o)+(m-.45)*Math.sin(o),this.aero?.95:.94,.45-d*Math.sin(o)+(m-.45)*Math.cos(o)),g=Xu(h,v,.27,.26,vs.set(l.s*.05,-.75,-.35),new R);_s(l.upper,h,g),_s(l.lower,g,v),l.hand.position.copy(v),c[l.s>0?1:0].copy(v),l.hand.quaternion.copy(l.lower.quaternion),l.elbow.position.copy(g),l.cap.position.copy(h).add(vs.set(-l.s*.01,-.012,0))}this.model&&this.model.pose({hip:this.hip,pedals:[this.pedals[0].position,this.pedals[1].position],angles:[r,r+Math.PI],hands:c,bob:a,aero:this.aero})}}function Cn(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function dl(i){for(const e of["mousedown","pointerdown","touchstart"])i.addEventListener(e,t=>t.stopPropagation(),{passive:!0})}function qe(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const bb={A:"✕",B:"○",X:"□",Y:"△",LB:"L1",RB:"R1",LT:"L2",RT:"R2"},Mb={A:"Enter",B:"Esc",X:"Entf",Y:"Y",LB:"Bild↓",RB:"Bild↑",LT:"A",RT:"D"},dt=i=>`<span class="btn btn-${i.toLowerCase()}"><i class="glyph-xbox">${i}</i><i class="glyph-ps">${bb[i]??i}</i><i class="glyph-keys">${Mb[i]??i}</i></span>`;function Wi(i){const e={A:"confirm",B:"back",X:"x",Y:"y",LB:"lb",RB:"rb"};return`<footer class="hints">${i.map(([t,n])=>`<span class="hint" ${e[t]?`data-act="${e[t]}"`:""}>${dt(t)}${n}</span>`).join("")}</footer>`}const Pn={};function xi(i,e){const t=i.npc;t.s+=t.speed*e,i.world.poseAt(t.s,t.lateral,Pn);const n=i.bike.root;n.position.set(Pn.x,Pn.h,Pn.z),n.rotation.set(-Pn.pitch,Pn.heading,0);const s=t.speed>.5?t.speed/$t/3.6:0;return i.bike.update(e,t.speed,t.pedal===!1?0:s,0),i.focus.set(Pn.x,Pn.h,Pn.z),Pn}const hn=new R,ws=new R;function Sb(i,e,{dist:t=4.4,height:n=1.75,lag:s=4,fovBase:r=58,speed:a=0,snap:o=!1}={}){const c=i.camera,l=i.bike.root,h=l.rotation.y,u=Math.sin(h),f=Math.cos(h);hn.set(l.position.x-u*t,l.position.y+n,l.position.z-f*t);const d=i.world.terrainHeight(hn.x,hn.z)+.7;hn.y<d&&(hn.y=d),o?c.position.copy(hn):(c.position.x=Ge(c.position.x,hn.x,s,e),c.position.y=Ge(c.position.y,hn.y,s,e),c.position.z=Ge(c.position.z,hn.z,s,e)),ws.set(l.position.x+u*3,l.position.y+1,l.position.z+f*3),c.lookAt(ws);const m=r+Math.min(a,20)*.9;c.fov=o?m:Ge(c.fov,m,3,e),c.updateProjectionMatrix()}const Yu=new R;function qs(i,e,t,n=!1){const s=i.camera,r=t.tz,a=-t.tx,o=i.time,c=4.4;hn.set(t.x+r*c+t.tx*1.2,t.h+1.2+Math.sin(o*.2)*.1,t.z+a*c+t.tz*1.2),n?s.position.copy(hn):s.position.lerp(hn,1-Math.exp(-5*e)),s.fov=40,s.updateProjectionMatrix();const l=Math.tan(Kc.degToRad(s.fov/2))*c*s.aspect;ws.set(t.x,t.h+.85,t.z).sub(s.position),Yu.crossVectors(ws,s.up).normalize(),ws.add(s.position).addScaledVector(Yu,-l*.42),s.lookAt(ws)}function In(i){if(i==null)return"–:––.–";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(1)}`}const Tn=[{id:"road",name:"Rennrad"},{id:"cx",name:"Cycle Cross"},{id:"tt",name:"Zeitfahren"}],ta=i=>(Tn.find(e=>e.id===i)||Tn[0]).name,ep=i=>i==="cx"?"cx":i==="tt"?"tt":"road";function Tb(i){let e,t=0,n=!0,s=!1;function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),Tn[t]&&i.bike.setTires(Tn[t].id),o||(i.audio.nav(),i.input.rumble(.15,30))}async function a(){if(s)return;if(t===Tn.length){i.audio.select(),i.go("story");return}i.mode=Tn[t].id,i.audio.select(),i.input.rumble(.35,80);const o=ep(i.mode);if(i.worlds[o]){i.useWorld(o),i.go("menu");return}s=!0;const c=e.querySelector(".mode-building");c.textContent=o==="tt"?"Das Dorf wird gebaut …":"Der Wald wird gebaut …",c.classList.add("show"),await new Promise(l=>setTimeout(l,60)),await i.prepareWorld(o),s=!1,i.go("menu")}return{enter(o={}){t=o.minigame?Tn.length:Math.max(0,Tn.findIndex(c=>c.id===i.mode)),e=Cn(`
        <div class="screen mode-screen ${o.fromTransition?"intro":""}">
          <div class="mode-head">
            <div class="menu-brand">${qe(Ue.gameName)}</div>
            <div class="menu-heading">Womit fährst du?</div>
          </div>
          <div class="mode-cards">
            ${Tn.map((c,l)=>`
              <div class="mode-card" data-i="${l}">
                <div class="mode-name">${qe(c.name)}</div>
              </div>`).join("")}
              <div class="mode-card mode-card-game" data-i="${Tn.length}">
                <div class="mode-name">🎮 Game</div>
                <div class="control-sub">Das große Rennen</div>
              </div>
          </div>
          ${Wi([["A","Auswählen"],["Y","Steuerung ändern"],["X","Flaschenjagd"],["B","Zurück"]])}
          <div class="mode-building">Der Wald wird gebaut …</div>
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(c=>c.addEventListener("click",()=>{t=Number(c.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=xi(i,o);qs(i,o,c,n),n=!1,i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,o),i.fx.uLines.value=Ge(i.fx.uLines.value,0,6,o),i.fx.uFade.value=Ge(i.fx.uFade.value,0,5,o);const l=i.input;s||((l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<Tn.length?(t++,r()):l.pressed("confirm")?a():l.pressed("x")?(i.audio.select(),i.go("minigame")):l.pressed("y")?(i.audio.select(),i.go("control",{next:"mode"})):l.pressed("back")&&(i.audio.back(),i.go("title")))},exit(){e.remove()}}}function wb(i){let e,t,n,s=0,r=["","","",""],a=0,o="",c=!0,l=!1;const h=()=>i.online;function u(){var _,y;const p=e.querySelector(".lobby-body"),x=(_=h().remote)==null?void 0:_.char;if(n==="choose")p.innerHTML=["Rennen erstellen","Rennen beitreten"].map((C,M)=>`<div class="card lobby-opt ${M===s?"selected":""}" data-i="${M}">
            <div class="card-info"><div class="card-name">${C}</div>
            <div class="card-sub">${M===0?"Du bekommst einen Code für deinen Gegner":"Gib den Code deines Gegners ein"}</div></div>
            <div class="card-go">›</div></div>`).join(""),p.querySelectorAll(".lobby-opt").forEach(C=>C.addEventListener("click",()=>{s=Number(C.dataset.i),m()}));else if(n==="hosting"){const C=h().code;p.innerHTML=`
        <div class="lobby-label">Dein Code</div>
        <div class="lobby-code">${qe(C||"…")}</div>
        <div class="lobby-info">${x?`<b>${qe(x.name)}</b> (Nr. ${qe(x.number)}) ist da!<br>Drück A zum Starten.`:"Sag deinem Gegner diesen Code.<br>Warte, bis er beitritt …"}</div>
        ${x?'<div class="card lobby-start selected"><div class="card-info"><div class="card-name">Rennen starten</div></div><div class="card-go">›</div></div>':'<div class="lobby-wait"></div>'}
        <div class="lobby-mode">Modus: ${qe(ta(i.mode))}</div>`,(y=p.querySelector(".lobby-start"))==null||y.addEventListener("click",v)}else n==="code"?(p.innerHTML=`
        <div class="lobby-label">Code eingeben</div>
        <div class="lobby-digits">${r.map((C,M)=>`<span class="lobby-digit ${M===a?"cursor":""}">${C===""?"·":C}</span>`).join("")}</div>
        <div class="lobby-info">Zahlen tippen – oder mit ↑ ↓ ändern und ← → wechseln.<br>Auf dem iPad: Ziffer antippen zählt hoch. Dann A drücken.</div>
        <div class="card lobby-start selected lobby-join"><div class="card-info"><div class="card-name">Beitreten</div></div><div class="card-go">›</div></div>`,p.querySelectorAll(".lobby-digit").forEach((C,M)=>C.addEventListener("click",()=>{a=M,r[M]=String(((r[M]===""?-1:Number(r[M]))+1)%10),i.audio.nav(),u()})),p.querySelector(".lobby-join").addEventListener("click",m)):n==="connecting"?p.innerHTML=`<div class="lobby-label">Verbinde mit Code ${qe(r.join(""))} …</div><div class="lobby-wait"></div>`:n==="joined"?p.innerHTML=`
        <div class="lobby-label">Verbunden!</div>
        <div class="lobby-info">${x?`Gegner: <b>${qe(x.name)}</b> (Nr. ${qe(x.number)})`:""}<br>Warte, bis dein Gegner das Rennen startet …</div>
        <div class="lobby-wait"></div>
        <div class="lobby-mode">Modus: ${qe(ta(i.mode))}</div>`:n==="error"&&(p.innerHTML=`<div class="lobby-label">Hat nicht geklappt</div><div class="lobby-info">${qe(o)}<br>Drück A, um es nochmal zu versuchen.</div>`)}function f(p){n=p,u()}function d(p){e&&(p.t==="code"?u():p.t==="hello"?(i.audio.success(),i.input.rumble(.5,200),h().role==="guest"&&p.mode&&p.mode!==i.mode&&(i.mode=p.mode,i.prepareWorld(ep(i.mode)),i.bike.setTires(i.mode)),h().role==="guest"?f("joined"):u()):p.t==="start"?(l=!0,i.go("ride",{character:t,online:!0})):p.t==="closed"?(o="Dein Gegner hat das Rennen verlassen.",h().close(),f("error")):p.t==="error"&&(o=p.why,h().close(),f("error"),i.audio.error()))}function m(){if(i.audio.select(),n==="choose")s===0?(h().host(t,i.mode),f("hosting")):(r=["","","",""],a=0,f("code"));else if(n==="hosting")h().remote&&v();else if(n==="code"){if(r.some(p=>p==="")){i.audio.error();return}h().join(r.join(""),t,i.mode),f("connecting")}else n==="error"&&f("choose")}function v(){h().send({t:"start"}),l=!0,i.go("ride",{character:t,online:!0})}function g(){if(i.audio.back(),n==="code"||n==="error"){h().close(),f("choose");return}h().close(),n==="choose"?i.go("menu",{selectId:t.id}):f("choose")}return{enter(p={}){t=p.character,l=!1,o="",e=Cn(`
        <div class="screen menu-screen lobby-screen">
          <div class="menu-panel">
            <div class="menu-brand">${qe(Ue.gameName)}</div>
            <div class="menu-heading">Online gegen einen Freund</div>
            <div class="lobby-me">Du fährst als <b>${qe(t.name)}</b> · Nr. ${qe(t.number)}</div>
            <div class="lobby-body"></div>
          </div>
          ${Wi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),i.ui.append(e),i.online.listen(d),i.online.connected?f(i.online.role==="host"?"hosting":"joined"):(s=0,f("choose")),c=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(p){const x=xi(i,p);qs(i,p,x,c),c=!1,i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,p),i.fx.uFade.value=Ge(i.fx.uFade.value,0,5,p);const _=i.input;if(n==="code"){for(const C of _.chars)/^[0-9]$/.test(C)?(r[a]=C,a=Math.min(3,a+1),i.audio.nav()):C==="\b"&&(r[a]===""&&a>0&&a--,r[a]=""),u();const y=C=>{const M=r[a]===""?C>0?-1:10:Number(r[a]);r[a]=String((M+C+10)%10),i.audio.nav(),u()};_.pressed("up")?y(1):_.pressed("down")?y(-1):_.pressed("left")&&a>0?(a--,u()):_.pressed("right")&&a<3&&(a++,u())}else n==="choose"&&(_.pressed("up")||_.pressed("down"))&&(s=1-s,i.audio.nav(),u());_.pressed("confirm")?m():_.pressed("back")&&g()},exit(){e.remove(),e=null,l||i.online.listen(null)}}}const Bi=[{id:"pad",name:"Controller",icon:"🎮",sub:"Xbox oder PlayStation"},{id:"keys",name:"Tastatur",icon:"⌨️",sub:"Computer oder Laptop"},{id:"touch",name:"iPad",icon:"📱",sub:"mit dem Finger steuern"}],tp="grandtour.steuerung";function br(){try{return localStorage.getItem(tp)}catch{return null}}function Kl(i,e,t=!0){const n=Bi.some(s=>s.id===e)?e:"pad";i.control=n,t&&(i.controlChosen=n),i.input.touchEnabled=n==="touch";for(const s of Bi)document.body.classList.toggle(`control-${s.id}`,s.id===n);if(t)try{localStorage.setItem(tp,n)}catch{}}function np(i){return i.input.pad?"pad":matchMedia("(pointer: coarse)").matches?"touch":"keys"}function Eb(i){let e,t=0,n=!0,s="mode";function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),o||i.audio.nav()}function a(){Kl(i,Bi[t].id),i.audio.select(),i.go(s,{fromTransition:!0})}return{enter(o={}){s=o.next||"mode";const c=br()||np(i);t=Math.max(0,Bi.findIndex(l=>l.id===c)),e=Cn(`
        <div class="screen mode-screen control-screen intro">
          <div class="mode-head">
            <div class="menu-brand">${qe(Ue.gameName)}</div>
            <div class="menu-heading">Womit spielst du?</div>
          </div>
          <div class="mode-cards">
            ${Bi.map((l,h)=>`
              <div class="mode-card" data-i="${h}">
                <div class="control-icon">${l.icon}</div>
                <div class="mode-name">${qe(l.name)}</div>
                <div class="control-sub">${qe(l.sub)}</div>
              </div>`).join("")}
          </div>
          <div class="control-note">Das kannst du später bei „Womit fährst du?“ wieder ändern.</div>
          ${Wi([["A","Auswählen"]])}
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(l=>l.addEventListener("click",()=>{t=Number(l.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=xi(i,o);qs(i,o,c,n),n=!1,i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,o),i.fx.uFade.value=Ge(i.fx.uFade.value,0,5,o),i.fx.uLines.value=Ge(i.fx.uLines.value,0,6,o);const l=i.input;(l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<Bi.length-1?(t++,r()):l.pressed("confirm")&&a()},exit(){e.remove()}}}const Ab=/^[og]\s*(.+)?/,Cb=/^mtllib /,Rb=/^usemtl /,Pb=/^usemap /,Zu=/\s+/,Ku=new R,Ja=new R,Ju=new R,Qu=new R,ln=new R,yo=new ce;function Lb(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Ku.fromArray(s,e),Ja.fromArray(s,t),Ju.fromArray(s,n),ln.subVectors(Ju,Ja),Qu.subVectors(Ku,Ja),ln.cross(Qu),ln.normalize(),r.push(ln.x,ln.y,ln.z),r.push(ln.x,ln.y,ln.z),r.push(ln.x,ln.y,ln.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),o!==void 0&&o!==""){const m=this.normals.length;u=this.parseNormalIndex(o,m),f=this.parseNormalIndex(c,m),d=this.parseNormalIndex(l,m),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(s!==void 0&&s!==""){const m=this.uvs.length;u=this.parseUVIndex(s,m),f=this.parseUVIndex(r,m),d=this.parseUVIndex(a,m),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Ib extends Vl{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new Qx(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Lb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(Zu);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(yo.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),bt),t.colors.push(yo.r,yo.g,yo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=l.slice(1).trim().split(Zu),d=[];for(let v=0,g=f.length;v<g;v++){const p=f[v];if(p.length>0){const x=p.split("/");d.push(x)}}const m=d[0];for(let v=1,g=d.length-1;v<g;v++){const p=d[v],x=d[v+1];t.addFace(m[0],p[0],x[0],m[1],p[1],x[1],m[2],p[2],x[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let f=[];const d=[];if(l.indexOf("/")===-1)f=u;else for(let m=0,v=u.length;m<v;m++){const g=u[m].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(f,d)}else if(h==="p"){const f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=Ab.exec(l))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Rb.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Cb.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Pb.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new ht;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,u=l.materials,f=h.type==="Line",d=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const v=new ut;v.setAttribute("position",new We(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new We(h.normals,3)),h.colors.length>0&&(m=!0,v.setAttribute("color",new We(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new We(h.uvs,2));const g=[];for(let x=0,_=u.length;x<_;x++){const y=u[x],C=y.name+"_"+y.smooth+"_"+m;let M=t.materials[C];if(this.materials!==null){if(M=this.materials.create(y.name),f&&M&&!(M instanceof Uo)){const T=new Uo;An.prototype.copy.call(T,M),T.color.copy(M.color),M=T}else if(d&&M&&!(M instanceof mi)){const T=new mi({size:10,sizeAttenuation:!1});An.prototype.copy.call(T,M),T.color.copy(M.color),T.map=M.map,M=T}}M===void 0&&(f?M=new Uo:d?M=new mi({size:1,sizeAttenuation:!1}):M=new Yx,M.name=y.name,M.flatShading=!y.smooth,M.vertexColors=m,t.materials[C]=M),g.push(M)}let p;if(g.length>1){for(let x=0,_=u.length;x<_;x++){const y=u[x];v.addGroup(y.groupStart,y.groupCount,x)}f?p=new mu(v,g):d?p=new Ps(v,g):p=new oe(v,g)}else f?p=new mu(v,g[0]):d?p=new Ps(v,g[0]):p=new oe(v,g[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){const o=new mi({size:1,sizeAttenuation:!1}),c=new ut;c.setAttribute("position",new We(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new We(t.colors,3)),o.vertexColors=!0);const l=new Ps(c,o);r.add(l)}return r}}const Db="modelle/natur/",Qa={sommer:{common:"CommonTree",birch:"BirchTree",willow:"Willow",pine:"PineTree",pineAlt:"PineTree"},herbst:{common:"CommonTree_Autumn",birch:"BirchTree_Autumn",willow:"Willow_Autumn",pine:"PineTree",pineAlt:"PineTree_Autumn"}};function Ub(i,e=1.6){const t={};let n=null;for(const s of i.split(`
`)){const r=s.trim().split(/\s+/);r[0]==="newmtl"?n=r[1]:r[0]==="Kd"&&n&&(t[n]=new ce(Math.min(1,r[1]*e),Math.min(1,r[2]*e),Math.min(1,r[3]*e)))}return t}async function ip(i,e=Db,t=1.6,n=!0){const[s,r]=await Promise.all([fetch(e+i+".obj").then(_=>_.text()),fetch(e+i+".mtl").then(_=>_.text())]),a=Ub(r,t),o=new Ib().parse(s.replace(/^l .*$/gm,"")),c=[];o.traverse(_=>{var S;if(!_.isMesh)return;let y=_.geometry.index?_.geometry.toNonIndexed():_.geometry.clone();y.applyMatrix4(_.matrixWorld),y.attributes.normal||y.computeVertexNormals();const C=Array.isArray(_.material)?_.material:[_.material],M=y.groups.length?y.groups:[{start:0,count:y.attributes.position.count,materialIndex:0}],T=new Float32Array(y.attributes.position.count*3);for(const b of M){const L=a[(S=C[b.materialIndex])==null?void 0:S.name]||new ce(.5,.5,.5);for(let N=b.start;N<b.start+b.count;N++)T[N*3]=L.r,T[N*3+1]=L.g,T[N*3+2]=L.b}const P=new ut;P.setAttribute("position",y.attributes.position),P.setAttribute("normal",y.attributes.normal),P.setAttribute("color",new Ct(T,3)),c.push(P)});const l=Hs(c);l.computeBoundingBox();const h=l.boundingBox,u=l.attributes.position,f=h.min.y+(h.max.y-h.min.y)*.06;let d=0,m=0,v=0;for(let _=0;_<u.count;_++)u.getY(_)<=f&&(d+=u.getX(_),m+=u.getZ(_),v++);const g=v&&n?d/v:(h.min.x+h.max.x)/2,p=v&&n?m/v:(h.min.z+h.max.z)/2;l.translate(-g,-h.min.y,-p);const x=xy(l,1e-4);return x.computeBoundingBox(),x}const di=(i,e)=>Array.from({length:e},(t,n)=>`${i}_${n+1}`);async function kb(){try{const i=new Set;for(const r of Object.values(Qa))for(const a of Object.values(r))di(a,5).forEach(o=>i.add(o));["Bush_1","Bush_2","BushBerries_1","BushBerries_2","TreeStump_Moss","WoodLog_Moss",...di("Rock_Moss",7)].forEach(r=>i.add(r));const e=[...i],t=await Promise.all(e.map(ip)),n=Object.fromEntries(e.map((r,a)=>[r,t[a]])),s=r=>{const a=Qa[r]||Qa.sommer;return{common:di(a.common,5).map(o=>n[o]),birch:di(a.birch,5).map(o=>n[o]),willow:di(a.willow,5).map(o=>n[o]),pine:di(a.pine,5).map(o=>n[o]),pineAlt:di(a.pineAlt,5).map(o=>n[o])}};return{trees:{sommer:s("sommer"),herbst:s("herbst")},bushes:["Bush_1","Bush_2","BushBerries_1","BushBerries_2"].map(r=>n[r]),rocks:di("Rock_Moss",7).map(r=>n[r]),stump:n.TreeStump_Moss,log:n.WoodLog_Moss}}catch(i){return console.warn("Natur-Modelle konnten nicht geladen werden, nutze einfache Bäume.",i),null}}const Nb=["House_1","House_2","House_3","House_4","Inn","Blacksmith","Stable","Sawmill","Mill","Bell_Tower"],Fb=["Well","MarketStand_1","MarketStand_2","Cart","Barrel","Crate","Fence","Bench_1","Gazebo","Hay","Bags","Package_1","Bonfire_Lit"];async function Ob(){try{const i="modelle/dorf/",e=[...Nb,...Fb],t=await Promise.all(e.map(n=>ip(n,i,1.9,!1)));return Object.fromEntries(e.map((n,s)=>[n,t[s]]))}catch(i){return console.warn("Dorf-Modelle konnten nicht geladen werden.",i),null}}const zb=["up","down","left","right"],Bb={0:"confirm",1:"back",2:"x",3:"y",4:"lb",5:"rb",6:"lt",7:"rt",8:"select",9:"start",11:"view"},Hb={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"confirm",NumpadEnter:"confirm",Escape:"back",Delete:"x",PageUp:"rb",PageDown:"lb"},cr=.14;function Vb(i=""){return/xbox|045e/i.test(i)?!1:/054c|dualsense|dualshock|playstation|wireless controller/i.test(i)}const bo=.55;class Gb{constructor(){this.keys=new Set,this.queue=[],this.charQueue=[],this.frame=new Set,this.chars=[],this.prevButtons=[],this.dirTime={up:0,down:0,left:0,right:0},this.dirRepeat={up:0,down:0,left:0,right:0},this.steer=0,this.steerHold=0,this.steerDir=0,this.lookX=0,this.lookY=0,this.throttle=0,this.brake=0,this.pad=null,this.usingPad=!1,this.touchRide=!1,this.touches=new Map,this.touchPedal=!1,this.touchEnabled=!1,this.setupTouch(),this.layout="xbox",window.addEventListener("keydown",e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Tab","Backspace"].includes(e.key)&&e.preventDefault(),this.usingPad=!1,this.keys.add(e.code),e.repeat||this.queue.push("any");const t=Hb[e.key];t&&this.queue.push(t),e.code==="KeyC"&&this.queue.push("view"),e.code==="KeyT"&&this.queue.push("cruise"),e.code==="KeyK"&&!e.repeat&&this.queue.push("klingel"),(e.code==="Space"&&!e.repeat||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.queue.push("sprint"),e.key==="Escape"&&this.queue.push("pause"),e.key==="Backspace"?this.charQueue.push("\b"):e.key.length===1&&this.charQueue.push(e.key)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousedown",()=>this.queue.push("any")),window.addEventListener("pointerdown",()=>this.queue.push("any")),window.addEventListener("touchstart",()=>this.queue.push("any"),{passive:!0}),window.addEventListener("pointerup",e=>{var n,s;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"[data-act]");t&&this.queue.push(t.dataset.act)})}setupTouch(){const t={passive:!1};window.addEventListener("touchstart",s=>{if(!(!this.touchRide||!this.touchEnabled||s.target.closest("button, .pause-box, .result, .touch-pause"))){s.preventDefault();for(const r of s.changedTouches)this.touches.set(r.identifier,{x0:r.clientX,y0:r.clientY,t0:performance.now(),mode:"steer",side:r.clientX<innerWidth/2?-1:1})}},t),window.addEventListener("touchmove",s=>{if(!(!this.touchRide||!this.touchEnabled)){s.preventDefault();for(const r of s.changedTouches){const a=this.touches.get(r.identifier);if(!a||a.mode!=="steer")continue;const o=r.clientY-a.y0,c=r.clientX-a.x0;Math.abs(o)>45&&Math.abs(o)>Math.abs(c)*1.3&&(o<0?(this.touchPedal&&this.queue.push("sprint"),this.touchPedal=!0,a.mode="up"):(this.touchPedal=!1,a.mode="brake"))}}},t);const n=s=>{for(const r of s.changedTouches)this.touches.delete(r.identifier)};window.addEventListener("touchend",n),window.addEventListener("touchcancel",n)}inject(e){this.queue.push(e),e!=="any"&&this.queue.push("any")}pressed(e){return this.frame.has(e)}holdTime(e){return this.dirTime[e]}rumble(e=.3,t=60){const n=this.pad&&this.pad.vibrationActuator;if(!(!n||!n.playEffect))try{const s=n.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});s&&s.catch&&s.catch(()=>{})}catch{}}update(e){this.frame.clear();for(const k of this.queue)this.frame.add(k);this.queue.length=0,this.chars=this.charQueue,this.charQueue=[];const t=navigator.getGamepads?navigator.getGamepads():[];let n=null;for(const k of t)if(k&&k.connected&&(n=k,k.mapping==="standard"))break;this.pad=n;const s=n&&Vb(n.id)?"ps":"xbox";s!==this.layout&&(this.layout=s,document.body.classList.toggle("pad-ps",s==="ps"));const r={up:!1,down:!1,left:!1,right:!1};let a=0,o=0,c=0,l=0,h=0,u=0;if(n){const k=n.buttons;for(let ne=0;ne<k.length;ne++){const be=!!(k[ne]&&(k[ne].pressed||k[ne].value>.5)),ke=!!this.prevButtons[ne];if(be&&!ke){this.frame.add("any"),this.usingPad=!0;const E=Bb[ne];E&&this.frame.add(E),ne===1&&this.frame.add("cruise")}this.prevButtons[ne]=be}const G=n.axes[0]||0,D=n.axes[1]||0;Math.abs(G)>Math.abs(D)?(r.left=G<-bo,r.right=G>bo):(r.up=D<-bo,r.down=D>bo);const F=ne=>!!(k[ne]&&k[ne].pressed);r.up||(r.up=F(12)),r.down||(r.down=F(13)),r.left||(r.left=F(14)),r.right||(r.right=F(15)),(Math.abs(G)>.3||Math.abs(D)>.3)&&(this.usingPad=!0);const U=ne=>k[ne]?k[ne].value:0;a=U(7)-U(6),o=Math.abs(G)>cr?(G-Math.sign(G)*cr)/(1-cr):0,c=U(0),l=U(3);const K=n.axes[2]||0,se=n.axes[3]||0;h=Math.abs(K)>cr?K:0,u=Math.abs(se)>cr?se:0}for(const k of zb)if(r[k]){if(this.dirTime[k]===0&&this.frame.add(k),this.dirTime[k]+=e,this.dirTime[k]>.35){this.dirRepeat[k]+=e;const G=this.dirTime[k]>1.6?.035:.09;this.dirRepeat[k]>=G&&(this.dirRepeat[k]=0,this.frame.add(k))}}else this.dirTime[k]=0,this.dirRepeat[k]=0;const f=this.keys;let d=0;(f.has("KeyA")||f.has("ArrowLeft"))&&(d-=1),(f.has("KeyD")||f.has("ArrowRight"))&&(d+=1);const m=f.has("KeyW")||f.has("ArrowUp")?1:0,v=f.has("KeyS")||f.has("ArrowDown")?1:0;let g=0,p=!1,x=!1,_=0;if(this.touchRide){for(const k of this.touches.values())k.mode==="steer"?k.side<0?p=!0:x=!0:k.mode==="brake"&&(_=1);g=(x?1:0)-(p?1:0)}else this.touchPedal=!1,this.touches.clear();const y=Math.max(-1,Math.min(1,a+d+g)),C=Math.abs(y)>.05?Math.sign(y):0;C!==0&&C===this.steerDir?this.steerHold+=e:this.steerHold=0,this.steerDir=C;const{start:M,vollNach:T,stick:P=.4}=Ue.steering,S=Math.min(1,this.steerHold/T),b=M+(1-M)*S*S*(3-2*S),L=Math.max(-1,Math.min(1,y*b+o*P)),N=Math.abs(L)>Math.abs(this.steer)?3:7;this.steer+=Math.max(-N*e,Math.min(N*e,L-this.steer)),f.has("KeyJ")&&(h-=1),f.has("KeyL")&&(h+=1),f.has("KeyI")&&(u-=1),f.has("Comma")&&(u+=1),this.lookX=Math.max(-1,Math.min(1,h)),this.lookY=Math.max(-1,Math.min(1,u)),this.throttle=Math.max(c,m,this.touchRide&&this.touchPedal?1:0),this.brake=Math.max(l,v,_);const B=k=>!!(n&&n.buttons[k]&&n.buttons[k].pressed);this.l1=B(4)||f.has("KeyQ")||p&&x,this.r1=B(5)||f.has("KeyE")||p&&x}}const Wb={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function xs(i){const e=/^([A-G])([#b]?)(-?\d)$/.exec(i);if(!e)return 440;const t=Wb[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0)+(parseInt(e[3],10)+1)*12;return 440*Math.pow(2,(t-69)/12)}class $b{constructor(){this.ctx=null,this.fwPhase=0,this.musicStarted=!1,this.muted=!1}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.build()}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}get ok(){return!!this.ctx&&this.ctx.state==="running"}build(){const e=this.ctx,t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,t.connect(e.destination),this.master=e.createGain(),this.master.connect(t),this.sfx=e.createGain(),this.sfx.gain.value=Ue.soundVolume,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=Ue.music.volume,this.musicBus.connect(this.master),this.musicIn=e.createGain(),this.musicIn.connect(this.musicBus);const n=e.createConvolver();n.buffer=this.impulse(3.2);const s=e.createGain();s.gain.value=.55,this.musicIn.connect(n),n.connect(s),s.connect(this.musicBus);const r=e.sampleRate*2;this.noise=e.createBuffer(1,r,e.sampleRate);const a=this.noise.getChannelData(0);for(let c=0;c<r;c++)a[c]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=this.noise,o.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=400,this.windGain=e.createGain(),this.windGain.gain.value=0,o.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),o.start()}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}toggleMute(){this.ctx&&(this.muted=!this.muted,this.master.gain.setTargetAtTime(this.muted?0:1,this.ctx.currentTime,.05))}tone(e,t,{type:n="sine",vol:s=.2,attack:r=.005,slideTo:a=null,when:o=0,dest:c=null}={}){if(!this.ok)return;const l=this.ctx,h=l.currentTime+o,u=l.createOscillator(),f=l.createGain();u.type=n,u.frequency.setValueAtTime(e,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+t),f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(s,h+r),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(f),f.connect(c||this.sfx),u.start(h),u.stop(h+t+.05)}noiseBurst(e,{vol:t=.3,freq:n=3e3,type:s="highpass",q:r=1,when:a=0}={}){if(!this.ok)return;const o=this.ctx,c=o.currentTime+a,l=o.createBufferSource();l.buffer=this.noise;const h=o.createBiquadFilter();h.type=s,h.frequency.value=n,h.Q.value=r;const u=o.createGain();u.gain.setValueAtTime(t,c),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(u),u.connect(this.sfx),l.start(c,Math.random()*1.5),l.stop(c+e+.02)}nav(){this.tone(720,.08,{type:"triangle",vol:.13,slideTo:960})}select(){this.tone(880,.1,{type:"triangle",vol:.16}),this.tone(1320,.16,{type:"triangle",vol:.14,when:.07})}back(){this.tone(620,.14,{type:"triangle",vol:.14,slideTo:360})}error(){this.tone(150,.22,{type:"square",vol:.07})}key(){this.noiseBurst(.03,{vol:.2,freq:2600,type:"bandpass",q:2}),this.tone(1400,.035,{vol:.04})}success(){["C5","E5","G5","C6"].forEach((e,t)=>this.tone(xs(e),.35,{type:"triangle",vol:.13,when:t*.08}))}klingel(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime;for(const n of[0,.17])for(const[s,r]of[[1,.16],[2.4,.07],[3.9,.04]]){const a=e.createOscillator();a.frequency.value=2100*s;const o=e.createGain(),c=t+n;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(r,c+.004),o.gain.exponentialRampToValueAtTime(1e-4,c+.7),a.connect(o),o.connect(this.sfx),a.start(c),a.stop(c+.75)}}lap(){["G5","C6","E6"].forEach((e,t)=>this.tone(xs(e),.4,{type:"square",vol:.05,when:t*.1}))}whoosh(e=1.8){if(!this.ok)return;const t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noise,s.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.Q.value=.9,r.frequency.setValueAtTime(200,n),r.frequency.exponentialRampToValueAtTime(2800,n+e*.7),r.frequency.exponentialRampToValueAtTime(700,n+e);const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.6,n+e*.6),a.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(r),r.connect(a),a.connect(this.sfx),s.start(n),s.stop(n+e+.1)}freewheel(e,t){if(!this.ok||t<=0){this.fwPhase=0;return}this.fwPhase+=t*e;let n=0;for(;this.fwPhase>=1&&n<6;)this.fwPhase-=1,this.noiseBurst(.006,{vol:.32,freq:4500,when:n*(1/Math.max(t,1))}),n++;this.fwPhase>1&&(this.fwPhase=0)}setWind(e){if(!this.ctx)return;const t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime(e*.3*Ue.windLautstaerke,t,.15),this.windFilter.frequency.setTargetAtTime(250+e*1100,t,.2)}setMusicLevel(e){this.ctx&&this.musicBus.gain.setTargetAtTime(Ue.music.volume*e,this.ctx.currentTime,.6)}startMusic(){!this.ok||this.musicStarted||(this.musicStarted=!0,this.step=0,this.nextTime=this.ctx.currentTime+.15,this.timer=setInterval(()=>this.schedule(),50))}schedule(){const e=this.ctx,t=30/Ue.music.tempo,n=Ue.music.chords;for(;this.nextTime<e.currentTime+.3;){const s=this.nextTime,r=Math.floor(this.step/8),a=this.step%8,o=n[r%n.length];if(a===0&&(this.pad(o,t*8.5,s),this.bass(xs(o[0])/2,t*8,s),r%4===0&&this.bell(xs(o[2])*4,s+t*4)),r>=2){const l=xs(o[[0,1,2,1,0,2,1,2][a]])*2;this.pluck(l,s,a%2===0?.07:.045)}this.nextTime+=t,this.step++}}pad(e,t,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,n),r.frequency.linearRampToValueAtTime(1400,n+t*.5),r.frequency.linearRampToValueAtTime(600,n+t);const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.05,n+t*.35),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicIn);for(const o of e)for(const c of[-8,8]){const l=s.createOscillator();l.type="sawtooth",l.frequency.value=xs(o),l.detune.value=c,l.connect(r),l.start(n),l.stop(n+t+.1)}}bass(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.16,n+.3),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicBus),r.start(n),r.stop(n+t+.1)}pluck(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(n,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+.5),r.connect(a),a.connect(this.musicIn),r.start(t),r.stop(t+.6)}bell(e,t){const n=this.ctx;for(const[s,r]of[[1,.04],[2.76,.015]]){const a=n.createOscillator();a.frequency.value=e*s;const o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(r,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+2.5),a.connect(o),o.connect(this.musicIn),a.start(t),a.stop(t+2.6)}}}const Xb={uniforms:{tDiffuse:{value:null},uBlur:{value:0},uLines:{value:0},uTime:{value:0},uVignette:{value:.45},uFade:{value:0},uAspect:{value:1}},vertexShader:`
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
  `},na="grandtour.wuensche";function Un(){try{return JSON.parse(localStorage.getItem(na))||[]}catch{return[]}}function pr(i){try{localStorage.setItem(na,JSON.stringify(i))}catch{}}async function ed(i,e){const t=Ue.wunschzettel.briefkasten;{const n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({von:i||"Paul",text:e})});if(!n.ok)throw new Error("Senden fehlgeschlagen");return(await n.json().catch(()=>({}))).nummer??null}}const Jl=["umgesetzt","uebersprungen"],sp=i=>i.sent&&i.nr!=null&&!Jl.includes(i.status);async function rp(){const i=Ue.wunschzettel.briefkasten,t=Un().filter(sp).map(a=>a.nr);if(!t.length)return[];let n;try{n=await(await fetch(`${i}?nr=${t.join(",")}`,{cache:"no-store"})).json()}catch{return[]}if(!(n!=null&&n.ok))return[];const s=[],r=Un();for(const a of r){const o=a.nr!=null&&n.status[a.nr];o&&(o.status!==a.status&&Jl.includes(o.status)&&(s.push(a),a.seen=!1,a.fertigAm=Date.now()),a.status=o.status,a.info=o.info||"")}return pr(r),s}function qb(){return Un().filter(i=>Jl.includes(i.status)&&i.seen===!1).length}function fl(){return Un().some(sp)}function jb(i){if(!i.sent)return'<div class="wish-item-meta">noch nicht verschickt – wird gleich nachgeholt</div>';if(i.nr==null)return'<div class="wish-item-meta">verschickt ✓</div>';const e=i.status||"angekommen",t={angekommen:1,in_arbeit:2,umgesetzt:3,uebersprungen:3}[e]||1,s=`<div class="wish-track s${t} ${e}">${["Angekommen","Claude arbeitet",e==="uebersprungen"?"Nicht umgesetzt":"Umgesetzt"].map((a,o)=>`<span class="${o<t?"on":""} ${o===t-1?"now":""}"><i></i>${a}</span>`).join("")}</div>`;let r="";if(e==="angekommen")r="📬 Dein Wunsch ist bei Claude angekommen und wartet auf die Bearbeitung.";else if(e==="in_arbeit")r='🛠️ Claude arbeitet gerade daran<span class="wish-dots"></span>';else if(e==="umgesetzt"){const a=i.fertigAm&&Date.now()-i.fertigAm<18e4;r=`✅ Umgesetzt! ${qe(i.info||"")}${a?" <b>In 1–2 Minuten im Spiel – dann die Seite neu laden.</b>":""}`}else r=`💬 ${qe(i.info||"Diesmal nicht umgesetzt.")}`;return`${s}<div class="wish-item-meta wish-now">${r}</div>`}const Yb=[{von:"Paul",text:"ich will einen goldenen helm :-)",am:"2026-11-06T21:05:00Z",status:"umgesetzt",info:"Neue Farbe „Gold“ für Helm, Trikot und Hose."},{von:"Papa (Test)",text:"Wenn man im Ziel ankommt, soll buntes Konfetti fliegen.",am:"2026-11-06T20:57:00Z",status:"umgesetzt",info:"Im Ziel fliegt buntes Konfetti."},{von:"Papa (Test)",text:"Eine Fahrradklingel auf der Taste K.",am:"2026-11-06T14:23:00Z",status:"umgesetzt",info:"Mit K klingelt es beim Fahren."}],td={angekommen:["📬","Angekommen"],in_arbeit:["🛠️","Claude arbeitet daran"],umgesetzt:["✅","Umgesetzt"],uebersprungen:["💬","Nicht umgesetzt"]};async function Zb(){const i=Ue.wunschzettel.briefkasten,t=await(await fetch(`${i}?liste=1`,{cache:"no-store"})).json();if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.fehler)||"Liste nicht da");return[...t.wuensche,...Yb]}const nd=i=>new Date(i).toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});function Kb(i,e){const t=Cn(`
    <div class="wish-overlay">
      <div class="wish-card">
        <button class="wish-close" title="Schließen">✕</button>
        <div class="wish-kicker">${qe(Ue.gameName)}</div>
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
    </div>`),n=g=>t.querySelector(g),s=n(".wish-name"),r=n(".wish-text");try{s.value=localStorage.getItem(na+".name")||""}catch{}function a(){const g=Un();n(".wish-list").innerHTML=g.length?g.slice().reverse().map(p=>`<div class="wish-item ${p.sent?"":"pending"} st-${p.status||"neu"} ${p.seen===!1?"fresh":""}">
              <div class="wish-item-text">${qe(p.text)}</div>
              <div class="wish-item-time">${nd(p.at)}</div>
              ${jb(p)}
            </div>`).join(""):'<div class="wish-empty">Noch keine Wünsche – leg los!</div>'}let o=null;async function c(){clearTimeout(o);const g=n(".wish-all");if(!(g.hidden||!t.isConnected)){g.innerHTML||(g.innerHTML='<div class="wish-empty">Lade alle Wünsche …</div>');try{const p=await Zb(),x=p.filter(_=>_.status==="umgesetzt").length;g.innerHTML=`<div class="wish-all-sum">${p.length} Wünsche · ${x} umgesetzt</div>`+p.map(_=>{const[y,C]=td[_.status]||td.angekommen,M=String(_.von||"Unbekannt").split(/\s+/)[0];return`<div class="wish-item st-${_.status}">
              <div class="wish-all-head"><b>${qe(M)}</b><span>${nd(_.am)}</span></div>
              <div class="wish-item-text">${qe(_.text)}</div>
              <div class="wish-chip st-${_.status}">${y} ${C}</div>
              ${_.info?`<div class="wish-item-meta wish-now">${qe(_.info)}</div>`:""}
            </div>`}).join("")}catch{g.innerHTML='<div class="wish-empty">Die Liste lädt gerade nicht – kein Internet? Versuch es gleich nochmal.</div>'}o=setTimeout(c,15e3)}}t.querySelectorAll(".wish-tab").forEach(g=>g.addEventListener("click",()=>{t.querySelectorAll(".wish-tab").forEach(x=>x.classList.toggle("active",x===g));const p=g.dataset.tab==="alle";n(".wish-list").hidden=p,n(".wish-all").hidden=!p,i.audio.nav(),p&&c()}));async function l(){const g=Un();let p=!1;for(const x of g)if(!x.sent)try{x.nr=await ed(x.from,x.text),x.sent=!0,x.status=x.nr!=null?"angekommen":void 0,p=!0}catch{break}p&&(pr(g),a())}async function h(){const g=r.value.trim(),p=s.value.trim()||"Paul";if(g.length<3){n(".wish-status").textContent="Schreib erst deinen Wunsch auf 🙂",i.audio.error(),r.focus();return}try{localStorage.setItem(na+".name",p)}catch{}const x={text:g,from:p,at:Date.now(),sent:!1},_=Un();_.push(x),pr(_),n(".wish-send").disabled=!0,n(".wish-status").textContent="Wird verschickt …";try{const y=await ed(p,g);x.sent=!0;const C=Un(),M=C.find(T=>T.at===x.at);M&&(M.sent=!0,M.nr=y,y!=null&&(M.status="angekommen")),pr(C),n(".wish-status").textContent=y!=null?"Danke! Dein Wunsch ist bei Claude angekommen. 🎉 Unten siehst du, wie weit er ist.":"Danke! Dein Wunsch ist angekommen. 🎉",d(),i.audio.success(),r.value=""}catch{n(".wish-status").textContent="Gerade kein Internet – der Wunsch ist gemerkt und wird später verschickt.",i.audio.error()}n(".wish-send").disabled=!1,u(),a()}function u(){n(".wish-count").textContent=`${r.value.length} / 400`}let f=null;async function d(){clearTimeout(f);const g=await rp();if(!t.isConnected)return;g.some(x=>x.status==="umgesetzt")&&i.audio.success(),a(),Un().some(x=>x.seen===!1)&&setTimeout(()=>{const x=Un();x.forEach(_=>_.seen===!1&&(_.seen=!0)),pr(x)},4e3),fl()&&(f=setTimeout(d,8e3))}function m(){clearTimeout(f),clearTimeout(o),t.remove(),window.removeEventListener("keydown",v,!0),e==null||e()}function v(g){g.key==="Escape"&&(g.stopPropagation(),m())}return dl(t),t.addEventListener("keydown",g=>g.stopPropagation()),n(".wish-close").addEventListener("click",m),n(".wish-send").addEventListener("click",h),r.addEventListener("input",u),r.addEventListener("keydown",g=>{g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&h()}),window.addEventListener("keydown",v,!0),t.addEventListener("click",g=>{g.target===t&&m()}),document.body.append(t),a(),l().then(d),setTimeout(()=>r.focus(),50),{close:m}}function Jb(i){let e,t=0,n=!1,s=null;function r(){const h=e==null?void 0:e.querySelector(".wish-badge");if(!h)return;const u=qb();h.textContent=u?`✨ ${u===1?"Wunsch erledigt!":`${u} Wünsche erledigt!`}`:fl()?"🛠️ in Arbeit":"",h.classList.toggle("show",!!h.textContent),h.classList.toggle("done",u>0)}async function a(){clearTimeout(s),e&&(!n&&fl()&&(await rp()).length&&i.audio.success(),r(),s=setTimeout(a,2e4))}const o=new R,c=new R;function l(){n||(n=!0,i.audio.select(),Kb(i,()=>{setTimeout(()=>n=!1,250),r()}))}return{enter(){t=0,e=Cn(`
        <div class="screen title-screen">
          <div class="letterbox top"></div><div class="letterbox bottom"></div>
          <div class="title-wrap">
            <div class="title-kicker">${qe(Ue.subtitle)}</div>
            <h1 class="game-title" data-text="${qe(Ue.gameName)}">${qe(Ue.gameName)}</h1>
            <div class="ornament"><span></span><i></i><span></span></div>
            <div class="press-start">${qe(Ue.startPrompt)}</div>
          </div>
          <div class="title-controls" role="group" aria-label="Womit spielst du?">
            <span class="title-controls-label">Ich spiele mit</span>
            ${Bi.map(m=>`<button class="title-control" data-c="${m.id}"><span>${m.icon}</span>${qe(m.name)}</button>`).join("")}
          </div>
          <button class="wish-button">${dt("Y")}<span>🎁 Wunschzettel</span><b class="wish-badge"></b></button>
          <div class="sparkles">${Array.from({length:24},(m,v)=>`<b style="--i:${v};--x:${v*37%100};--d:${3+v%5}s"></b>`).join("")}</div>
        </div>`),i.ui.append(e),i.titleRoot=e;const h=e.querySelector(".wish-button");dl(h),h.addEventListener("click",()=>l());const u=e.querySelector(".title-controls");dl(u);const f=()=>{u.querySelectorAll(".title-control").forEach(m=>m.classList.toggle("active",m.dataset.c===i.controlChosen)),e.querySelector(".press-start").textContent=i.control==="touch"?"Zum Starten antippen":Ue.startPrompt};u.querySelectorAll(".title-control").forEach(m=>m.addEventListener("click",()=>{Kl(i,m.dataset.c),i.controlChosen=m.dataset.c,i.audio.unlock(),i.audio.select(),f()})),f(),a(),i.fx.uFade.value=1,i.fx.uBlur.value=0,i.fx.uLines.value=0,i.npc.s=i.world.length-150,i.npc.speed=6,i.npc.lateral=i.world.cx?.5:1.5,i.npc.pedal=!0;const d=Ue.titleRider;i.bike.setPlate(d.number,d.name),i.bike.applyLook(Ue.titleRider),i.bike.setTires(i.mode),i.audio.setWind(0),i.audio.setMusicLevel(1),i.audio.startMusic()},update(h){t+=h,i.fx.uFade.value=Math.max(0,1-t/2.5);const u=xi(i,h),f=.55+t*.03+Math.sin(t*.05)*.2,d=5-Math.sin(t*.07)*1,m=u.tz,v=-u.tx,g=Math.cos(f)*d,p=Math.sin(f)*d;if(o.set(u.x+u.tx*g+m*p,0,u.z+u.tz*g+v*p),o.y=Math.max(u.h+.9+Math.sin(t*.11)*.35,i.world.terrainHeight(o.x,o.z)+.6),o.x+=Math.sin(t*.7)*.05,o.y+=Math.sin(t*.9+1)*.03,i.camera.position.copy(o),c.set(u.x,u.h+.95,u.z),i.camera.lookAt(c),i.camera.fov=42,i.camera.updateProjectionMatrix(),!n){if(t>.5&&i.input.pressed("y")){l();return}t>.5&&i.input.pressed("any")&&(i.audio.unlock(),i.audio.startMusic(),i.go("transition"))}},exit(){clearTimeout(s);const h=e;setTimeout(()=>h.remove(),700)}}}const ec=2;function Qb(){let n="";for(let a=0;a<42;a++){const o=a/42*Math.PI*2,c=(a+.3)/42*Math.PI*2,l=(a+.55)/42*Math.PI*2,h=(a+.85)/42*Math.PI*2,u=(f,d)=>`${(Math.cos(d)*f).toFixed(2)} ${(Math.sin(d)*f).toFixed(2)}`;n+=`${a===0?"M":"L"}${u(92,o)} L${u(100,c)} L${u(100,l)} L${u(92,h)} `}n+="Z";let s="";for(let a=0;a<5;a++){const o=a/5*360;s+=`<path d="M-9 -18 L-6 -76 Q0 -80 6 -76 L9 -18 Z" transform="rotate(${o})"/>`}let r="";for(let a=0;a<5;a++){const o=a/5*Math.PI*2+Math.PI/5;r+=`<circle cx="${(Math.cos(o)*64).toFixed(1)}" cy="${(Math.sin(o)*64).toFixed(1)}" r="4"/>`}return`
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
  </svg>`}const Ci=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function eM(i){let e=0,t,n,s,r=6;return{enter(){var a;e=0,r=i.npc.speed,t=Cn(`<div class="screen transition-screen"><div class="veil"></div><div class="ring-wrap">${Qb()}</div></div>`),i.ui.append(t),n=t.querySelector(".ring-wrap"),s=t.querySelector(".veil"),(a=i.titleRoot)==null||a.classList.add("leaving"),i.audio.whoosh(ec),i.audio.select(),i.input.rumble(.5,250)},update(a){e+=a;const o=e/ec;i.npc.speed=r+Ci(o*1.2)*22,i.npc.pedal=e>.45,xi(i,a),Sb(i,a,{dist:3.6+o*1.5,height:1.15,lag:3+o*4,fovBase:50,speed:i.npc.speed*1.4,snap:e<=a}),e<.45&&i.audio.freewheel(a,20+e*80),i.audio.setWind(Ci(o*1.4)),i.fx.uBlur.value=Ci(o*1.25),i.fx.uLines.value=Ci((o-.1)*1.6);const c=Ci((e-.85)/.5),l=Ci((e-1.45)/.5),h=e*900+e*e*400;n.style.opacity=String(c*(1-l)),n.style.transform=`translate(-50%, -50%) scale(${.35+c*.65+l*2.4}) rotate(${h}deg)`,s.style.opacity=String(Ci((e-1.25)/.6)),e>=ec&&i.go(br()?"mode":"control",{fromTransition:!0})},exit(){var o;(o=i.titleRoot)==null||o.remove(),i.titleRoot=null,t.classList.add("fade-out");const a=t;setTimeout(()=>a.remove(),500),i.audio.setWind(0),i.npc.speed=4,i.npc.pedal=!0}}}const op="pedal-legends.characters.v1";function $i(){try{const i=JSON.parse(localStorage.getItem(op)||"[]");return Array.isArray(i)?i:[]}catch{return[]}}function Ql(i){try{localStorage.setItem(op,JSON.stringify(i))}catch{}}function tM(i="road"){return{id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()),name:"",number:1,jersey:Ue.colors.jersey,frame:Ue.colors.bikeFrame,helmet:dn.helmet,shorts:dn.shorts,brand:dn.brand,paint:dn.paint,kit:dn.kit,bar:"#f6f6f6",mode:i,bestLap:null,createdAt:Date.now(),version:1}}function nM(i){const e=$i();e.push(i),Ql(e)}function ap(i){Ql($i().map(e=>e.id===i.id?i:e))}function id(i){Ql($i().filter(e=>e.id!==i))}function iM(i){let e,t,n=[],s=0,r=null,a=!0,o=null;function c(){n=$i().filter(x=>(x.mode||"road")===i.mode),s=Math.min(s,n.length);const p=n.map((x,_)=>`
        <div class="card" data-i="${_}">
          <div class="mini-plate"><span>${x.number}</span></div>
          <div class="card-info">
            <div class="card-name">${qe(x.name)}</div>
            <div class="card-sub">Nr. ${x.number} · ${qe(Zf(x.brand).name)}${x.bestLap?` · Bestzeit ${In(x.bestLap)}`:""}</div>
          </div>
          <div class="card-go">›</div>
        </div>`).join("");t.innerHTML=`${p}
      <div class="card card-new" data-i="${n.length}">
        <div class="card-info"><div class="card-name">Neuer Charakter</div>
        <div class="card-sub">${n.length?"Lege einen weiteren Fahrer an":"Lege deinen ersten Fahrer an"}</div></div>
        <div class="plus">+</div>
      </div>`,t.querySelectorAll(".card").forEach(x=>x.addEventListener("click",()=>{const _=Number(x.dataset.i);if(o!==null){if(_===s)return;m()}s=_,l(),f()})),l(!0)}function l(p=!1){t.querySelectorAll(".card").forEach((C,M)=>{C.classList.toggle("selected",M===s),C.classList.toggle("confirm-delete",M===s&&r===s)});const x=t.querySelector(".card.selected");x==null||x.scrollIntoView({block:"nearest",behavior:p?"auto":"smooth"});const _=n[s];_?(i.bike.setPlate(_.number,_.name),i.bike.applyLook(_)):(i.bike.setPlate("?","NEU"),i.bike.applyLook({}));const y=e.querySelector(".hint-delete");y&&(y.style.visibility=_?"visible":"hidden"),p||(i.audio.nav(),i.input.rumble(.15,30))}const h=["Rennen fahren","Online gegen Freund","Fahrer bearbeiten","Löschen"];let u=!1;function f(){i.audio.select(),i.input.rumble(.35,80),s<n.length?d():i.go("creator")}function d(){o=0,u=!1;const p=t.querySelector(".card.selected");p.insertAdjacentHTML("beforeend",`<div class="card-actions">${h.map((x,_)=>`<div class="card-action" data-a="${_}">${x}</div>`).join("")}</div>`),p.querySelectorAll(".card-action").forEach(x=>x.addEventListener("click",_=>{_.stopPropagation(),o=Number(x.dataset.a),g()})),v()}function m(){var p;o=null,(p=t.querySelector(".card-actions"))==null||p.remove()}function v(){t.querySelectorAll(".card-action").forEach((p,x)=>p.classList.toggle("selected",x===o))}function g(){const p=n[s];if(i.audio.select(),o===0)i.go("ride",{character:p});else if(o===1)i.go("lobby",{character:p});else if(o===2)i.go("creator",{edit:p});else if(u)id(p.id),i.audio.back(),i.input.rumble(.6,150),o=null,c();else{u=!0;const x=t.querySelectorAll(".card-action")[3];x&&(x.textContent="Wirklich löschen? Nochmal!",x.classList.add("danger")),i.audio.back()}}return{enter(p={}){if(e=Cn(`
        <div class="screen menu-screen ${p.fromTransition?"intro":""}">
          <div class="menu-panel">
            <div class="menu-brand">${qe(Ue.gameName)}</div>
            <div class="menu-heading">Wähle deinen Fahrer · ${ta(i.mode)}</div>
            <div class="menu-list"></div>
          </div>
          ${Wi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),e.querySelector(".hints").insertAdjacentHTML("beforeend",`<span class="hint hint-delete" data-act="x">${dt("X")}Löschen</span>`),i.ui.append(e),t=e.querySelector(".menu-list"),p.selectId){const x=$i().filter(_=>(_.mode||"road")===i.mode).findIndex(_=>_.id===p.selectId);x>=0&&(s=x)}r=null,o=null,c(),a=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1),i.audio.setWind(.05)},update(p){const x=xi(i,p);qs(i,p,x,a),a=!1,i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,p),i.fx.uLines.value=Ge(i.fx.uLines.value,0,6,p),i.fx.uFade.value=Ge(i.fx.uFade.value,0,5,p);const _=i.input,y=n.length+1;if(o!==null){if(_.pressed("left")||_.pressed("right")||_.pressed("up")||_.pressed("down")){const C=_.pressed("left")||_.pressed("up")?-1:1;o=(o+C+h.length)%h.length,v(),i.audio.nav()}else _.pressed("confirm")?g():_.pressed("back")&&(m(),i.audio.back());return}_.pressed("up")&&s>0?(s--,r=null,l()):_.pressed("down")&&s<y-1?(s++,r=null,l()):_.pressed("confirm")?f():_.pressed("back")?r!==null?(r=null,l(!0),i.audio.back()):(i.audio.back(),i.go("mode")):_.pressed("x")&&s<n.length&&(r===s?(id(n[s].id),r=null,i.audio.back(),i.input.rumble(.6,150),c()):(r=s,i.audio.error(),l(!0)))},exit(){e.remove()}}}const cp="grandtour.minispiel.rekord",Mo=3,sd=3;function sM(){try{return Number(localStorage.getItem(cp))||0}catch{return 0}}function rM(i){try{localStorage.setItem(cp,String(i))}catch{}}function oM(i){let e,t,n,s=0,r=0,a=1,o,c,l,h,u,f,d,m,v,g,p,x,_,y=!0;const C=()=>Math.min(s*.86,460),M=()=>(s-C())/2,T=()=>C()/Mo,P=E=>M()+T()*(E+.5),S=()=>r*.8,b=()=>r*Math.min(1.35,.5+d*.014);function L(){c=1,l=P(1),h=[],u=0,f=sd,d=0,m=0,v=r*.25,g=0,_=0,x=!1}function N(){a=Math.min(2,window.devicePixelRatio||1),s=innerWidth,r=innerHeight,t.width=s*a,t.height=r*a,n.setTransform(a,0,0,a,0,0),c!==void 0&&(l=P(c))}function B(){const E=Math.floor(Math.random()*Mo),O=Math.random()<.35+Math.min(.4,d*.01)?2:1,W=[0,1,2].filter(H=>H!==E).sort(()=>Math.random()-.5);for(let H=0;H<O;H++){const Z=Math.random();h.push({lane:W[H],y:-60,typ:Z<.45?"huetchen":Z<.8?"loch":"schaf",wobble:Math.random()*6})}Math.random()<.75&&h.push({lane:E,y:-60,typ:Math.random()<.1?"gold":"flasche",wobble:0})}function k(E){const O=Math.max(0,Math.min(Mo-1,c+E));O!==c&&(c=O,i.audio.nav())}function G(){L(),o="play",i.audio.select(),F()}function D(){o="over",i.audio.error(),i.input.rumble(.6,300),u>p&&(p=u,x=!0,rM(p),setTimeout(()=>i.audio.success(),350)),F()}function F(){const E=e.querySelector(".mg-hud");E.innerHTML=`
      <div class="mg-score">🍶 ${u}</div>
      <div class="mg-lives">${"❤️".repeat(Math.max(0,f))}${"🤍".repeat(sd-Math.max(0,f))}</div>
      <div class="mg-best">Rekord ${p}</div>`;const O=e.querySelector(".mg-msg");o==="ready"?O.innerHTML=`<div class="mg-title">Flaschenjagd</div>
        <div class="mg-text">Sammle Trinkflaschen 🍶 (goldene zählen 5).<br>Weiche Hütchen, Schlaglöchern und Schafen aus!<br>
        ${i.control==="touch"?"Links oder rechts antippen = Spur wechseln.":"← → = Spur wechseln."}</div>
        <div class="mg-go">${i.control==="touch"?"Antippen zum Starten":"A drücken zum Starten"}</div>`:o==="over"?O.innerHTML=`<div class="mg-title">${x?"Neuer Rekord!":"Sturz!"}</div>
        <div class="mg-text">Du hast <b>${u}</b> ${u===1?"Flasche":"Flaschen"} gesammelt.</div>
        <div class="mg-go">${i.control==="touch"?"Antippen für noch einmal":"A = noch einmal"}</div>`:O.innerHTML="",O.classList.toggle("show",o!=="play")}function U(E){if(!(E.target!==t&&!E.target.closest(".mg-msg"))){if(o!=="play"){G();return}k(E.clientX<s/2?-1:1)}}function K(){const E=M(),O=C();n.clearRect(0,0,s,r),n.fillStyle="rgba(46, 92, 40, 0.88)",n.fillRect(E-46,0,46,r),n.fillRect(E+O,0,46,r),n.fillStyle="#4b4b52",n.fillRect(E,0,O,r),n.fillStyle="#f2f2f2",n.fillRect(E+4,0,5,r),n.fillRect(E+O-9,0,5,r);const W=46,H=m%(W*2);for(let Z=1;Z<Mo;Z++){const te=E+T()*Z-2;for(let fe=-W*2+H;fe<r;fe+=W*2)n.fillRect(te,fe,4,W)}n.fillStyle="rgba(120, 170, 70, 0.9)";for(let Z=-40+m*1%80;Z<r;Z+=80)n.fillRect(E-30,Z,8,14),n.fillRect(E+O+20,Z+40,8,14)}function se(E){const O=P(E.lane),W=T()*.36;if(n.save(),n.translate(O,E.y),E.typ==="flasche"||E.typ==="gold")n.rotate(Math.sin(d*4+E.lane)*.25),n.fillStyle=E.typ==="gold"?"#f5c76b":"#3d8fe0",n.beginPath(),n.roundRect(-W*.32,-W*.55,W*.64,W*1.15,W*.18),n.fill(),n.fillStyle="#fff",n.fillRect(-W*.32,-W*.12,W*.64,W*.18),n.fillStyle="#222",n.fillRect(-W*.13,-W*.75,W*.26,W*.22),E.typ==="gold"&&(n.strokeStyle="rgba(255, 240, 180, 0.9)",n.lineWidth=3,n.beginPath(),n.arc(0,0,W*.95+Math.sin(d*8)*3,0,Math.PI*2),n.stroke());else if(E.typ==="huetchen")n.fillStyle="#ff7a1a",n.beginPath(),n.moveTo(0,-W*.8),n.lineTo(W*.6,W*.6),n.lineTo(-W*.6,W*.6),n.closePath(),n.fill(),n.fillStyle="#fff",n.fillRect(-W*.36,-W*.05,W*.72,W*.2),n.fillStyle="#ff7a1a",n.fillRect(-W*.75,W*.55,W*1.5,W*.18);else if(E.typ==="loch")n.fillStyle="#26262b",n.beginPath(),n.ellipse(0,0,W*.85,W*.5,.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a3a40",n.beginPath(),n.ellipse(-W*.15,-W*.08,W*.45,W*.24,.2,0,Math.PI*2),n.fill();else if(E.typ==="schaf"){n.translate(Math.sin(d*2+E.wobble)*W*.25,0),n.fillStyle="#f4f1ea";for(const[H,Z]of[[-.35,-.2],[.35,-.2],[-.35,.3],[.35,.3],[0,.05],[0,-.4],[0,.5]])n.beginPath(),n.arc(H*W,Z*W,W*.38,0,Math.PI*2),n.fill();n.fillStyle="#2b2b2b",n.beginPath(),n.ellipse(0,-W*.85,W*.24,W*.3,0,0,Math.PI*2),n.fill()}n.restore()}function ne(){var H;if(g>0&&Math.floor(g*12)%2===0)return;const E=T()*.42,O=(P(c)-l)/T(),W=((H=i.bike.kitCol)==null?void 0:H.jersey)||"#d23c3c";n.save(),n.translate(l+Math.sin(_*30)*_*20,S()),n.rotate(-O*.35),n.fillStyle="#111",n.beginPath(),n.roundRect(-E*.09,-E*1.15,E*.18,E*.75,E*.08),n.roundRect(-E*.09,E*.35,E*.18,E*.75,E*.08),n.fill(),n.fillStyle="#ccc",n.fillRect(-E*.5,-E*.72,E,E*.08),n.fillStyle=typeof W=="string"?W:"#d23c3c",n.beginPath(),n.ellipse(0,-E*.05,E*.38,E*.55,0,0,Math.PI*2),n.fill(),n.strokeStyle="#e8b896",n.lineWidth=E*.12,n.lineCap="round",n.beginPath(),n.moveTo(-E*.3,-E*.3),n.lineTo(-E*.42,-E*.7),n.moveTo(E*.3,-E*.3),n.lineTo(E*.42,-E*.7),n.stroke(),n.fillStyle="#f5c76b",n.beginPath(),n.ellipse(0,-E*.5,E*.22,E*.27,0,0,Math.PI*2),n.fill(),n.restore()}function be(){K();for(const E of h)se(E);ne()}function ke(E){d+=E;const O=b();m+=O*E,g=Math.max(0,g-E),_=Math.max(0,_-E*2),l=Ge(l,P(c),14,E),v-=O*E,v<=0&&(B(),v=r*Math.max(.24,.42-d*.003)*(.85+Math.random()*.3));const W=S(),H=T()*.4;let Z=!1;for(const te of h)if(te.y+=O*E,!(te.done||Math.abs(te.y-W)>H||Math.abs(P(te.lane)-l)>T()*.45)){if(te.typ==="flasche"||te.typ==="gold")te.done=!0,u+=te.typ==="gold"?5:1,i.audio.key(),Z=!0;else if(g<=0){if(te.done=!0,f--,g=1.2,_=.5,i.input.rumble(.5,150),Z=!0,f<=0){D();return}i.audio.error()}}h=h.filter(te=>!te.done&&te.y<r+80),Z&&F()}return{enter(){p=sM(),e=Cn(`
        <div class="screen minigame-screen">
          <canvas class="mg-canvas"></canvas>
          <div class="mg-hud"></div>
          <div class="mg-msg"></div>
          ${Wi([["A","Start"],["B","Zurück"]])}
        </div>`),i.ui.append(e),t=e.querySelector("canvas"),n=t.getContext("2d"),N(),addEventListener("resize",N),e.addEventListener("pointerdown",U),L(),o="ready",F(),y=!0,i.npc.speed=6,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(E){const O=xi(i,E);qs(i,E,O,y),y=!1,i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,E),i.fx.uFade.value=Ge(i.fx.uFade.value,0,5,E),i.fx.uLines.value=Ge(i.fx.uLines.value,0,6,E);const W=i.input;if(W.pressed("back")){i.audio.back(),i.go("mode",{minigame:!0});return}o==="play"?(W.pressed("left")?k(-1):W.pressed("right")&&k(1),ke(Math.min(E,.05))):W.pressed("confirm")&&G(),be()},exit(){removeEventListener("resize",N),e.remove(),e=null}}}const lp=[{name:"Mia",number:7,jersey:"#1fa88f",frame:"#f1f1ec",helmet:"#1fa88f",kit:"stripes",brand:"canyon",power:515,lane:-1.6},{name:"Leo",number:21,jersey:"#f4a12a",frame:"#f6f6f6",paint:"team",bar:"#16161b",helmet:"#16161b",brand:"colnago",power:495,lane:.3},{name:"Emma",number:33,jersey:"#8a3ffc",frame:"#d8d8de",helmet:"#8a3ffc",kit:"stripes",brand:"rose",power:470,lane:-.6},{name:"Ben",number:52,jersey:"#2f7cf6",frame:"#b8222c",helmet:"#f6f6f6",brand:"cervelo",power:445,lane:1.4}],tc=78,rd=9.81,Es=8;let Ri=null;function hp(){if(Ri)return Ri;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");return e.strokeStyle="#ffffff",e.lineWidth=14,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(18,40),e.lineTo(64,88),e.lineTo(110,40),e.stroke(),Ri=new gn(i),Ri.wrapS=Ri.wrapT=ni,Ri.repeat.set(1,5),Ri}function aM(){const i=new rn(1.3,Es-.8,1,8),e=i.attributes.position,t=[];for(let r=0;r<e.count;r++){const o=1-(e.getY(r)+(Es-.8)/2)/(Es-.8);t.push(.45*o,.9*o,1*o)}i.setAttribute("color",new We(t,3)),i.rotateX(-Math.PI/2);const n=new ra({map:hp(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Er}),s=new oe(i,n);return s.position.set(0,.07,-.8-(Es-.8)/2),s.renderOrder=2,s.visible=!1,s}const cM=[0,5,5,10],Yt={};class pl{constructor(e,t=lp){this.app=e,this.list=t.map((n,s)=>{var o;const r=new Qf;if(r.setPlate(n.number,n.name),r.applyLook(n),r.root.visible=!1,e.world.scene.add(r.root),n.remote){const c=(o=e.cloneRider)==null?void 0:o.call(e);c&&r.useModel(c),r.setTires(e.mode)}const a=aM();return r.root.add(a),{...n,bike:r,draftZone:a,grid:cM[s],d:0,v:0,lat:n.lane,heading:0,lean:0,finished:null}})}reset(e){this.startS=e;for(const t of this.list)t.d=-t.grid,t.v=0,t.lat=t.lane,t.lean=0,t.finished=null,t.net=null,t.wobble=Math.random()*10,t.bike.root.visible=!0,this.place(t,0,0),t.heading=Yt.heading}draftFor(e,t){let n=0,s=null;for(const r of this.list){if(!r.bike.root.visible||r.v<3)continue;const a=Math.sin(r.heading),o=Math.cos(r.heading),c=e-r.x,l=t-r.z,h=-(c*a+l*o),u=Math.abs(c*o-l*a);if(h<.8||h>Es)continue;const f=.7+h*.05;if(u>f)continue;const d=(1-(h-.8)/(Es-.8))*(1-u/f*.5);d>n&&(n=d,s=r)}return{strength:n,rival:s}}showDraft(e,t,n){hp().offset.y+=n*2.2;for(const s of this.list){const r=s.draftZone.material,a=s===e?.35+.55*t:0;r.opacity=Ge(r.opacity,a,8,n),s.draftZone.visible=r.opacity>.01}}updateRemote(e,t){const n=e.net;if(!n)return;const s=1-Math.exp(-12*t),r=Math.min(.25,(performance.now()-n.at)/1e3),a=n.x+Math.sin(n.heading)*n.speed*r,o=n.z+Math.cos(n.heading)*n.speed*r;(e.x==null||Math.hypot(a-e.x,o-e.z)>15)&&(e.x=a,e.z=o,e.h=n.h),e.x+=(a-e.x)*s,e.z+=(o-e.z)*s,e.h+=(n.h-e.h)*s,e.heading+=Math.atan2(Math.sin(n.heading-e.heading),Math.cos(n.heading-e.heading))*s,e.lean+=(n.lean-e.lean)*s,e.pitch=n.pitch,e.v=n.speed,e.finished=n.f;const c=e.bike.root;c.position.set(e.x,e.h,e.z),c.rotation.set(-e.pitch,e.heading,e.lean),e.bike.update(t,e.v,n.crank,n.steer)}dispose(){for(const e of this.list)e.bike.root.removeFromParent();this.list=[]}hide(){for(const e of this.list)e.bike.root.visible=!1,e.draftZone.material.opacity=0,e.draftZone.visible=!1}progress(e){return e.remote?e.net?e.net.p:-20:e.d-(this.app.world.length-this.startS)}place(e,t,n){if(this.app.world.poseAt(this.startS+e.d,e.lat,Yt),t>0){const a=Math.atan2(Math.sin(Yt.heading-e.heading),Math.cos(Yt.heading-e.heading))/t;e.lean=Ge(e.lean,ft(-Math.atan(e.v*a/9.81),-.5,.5),6,t)}e.heading=Yt.heading;const r=e.bike.root;r.position.set(Yt.x,Yt.h,Yt.z),r.rotation.set(-Yt.pitch,Yt.heading,e.lean),e.bike.update(t,e.v,n,0),e.x=Yt.x,e.z=Yt.z,e.pitch=Yt.pitch,e.h=Yt.h}update(e,t,n,s,r){for(const a of this.list){if(a.remote){this.updateRemote(a,e);continue}let o=0;if(t){o=a.power,o*=1+Math.sin(r*.23+a.wobble)*.05;const g=n.progress-this.progress(a);o*=1+ft(g/300,-.15,.12),a.finished!=null&&(o=120)}const c=a.v,l=Math.min(o/Math.max(c,2.5),340),h=.5*1.2*.36*c*c,u=(l-h-.005*tc*rd-tc*rd*Math.sin(a.pitch||0))/tc;a.v=Math.max(0,c+u*e),t||(a.v=0),a.d+=a.v*e;const f=this.progress(a);let d=a.lane;const m=n.progress-f;m>-2&&m<5&&Math.abs(n.lateral-a.lane)<1.1&&(d=a.lane+(a.lane>n.lateral?1.3:-1.3)),a.lat=Ge(a.lat,ft(d,-3,3),2,e),t&&a.finished==null&&f>=s&&(a.finished=r);const v=a.v>.5?a.v/$t/3.6:0;this.place(a,e,v)}}}const lM=new R(0,1,0),So=new R,nc=new R,ic=new R,ml=new vt,gl=new R,hM=new Ee,od=new Ee,ad=new Ot,uM=new R;function bs(i,e,t,n=t,s=new Ee){ic.subVectors(e,i);const r=ic.length()||.001;return ml.setFromUnitVectors(lM,ic.multiplyScalar(1/r)),gl.set(t,r,n),s.compose(i,ml,gl)}function up(i=7){return new st(1,1,1,i).translate(0,.5,0)}const yt=(i,e,t)=>new R(i,e,t),Mr=yt(0,.3,0),Sr=yt(0,.34,-.41),Ho=yt(0,.34,.58),To=yt(0,.84,-.16),sc=yt(0,.8,.47),rc=yt(0,.64,.52),cd=.17,ys=.46,oc=.46;function dM(){const i=[],e=(t,n,s)=>i.push(up(6).applyMatrix4(bs(t,n,s)));return e(Mr,To,.022),e(To,sc,.02),e(Mr,rc,.026),e(rc,sc,.026),e(rc,Ho,.016),e(Mr,Sr,.014),e(To,Sr,.012),e(To,yt(0,.95,-.2),.014),e(sc,yt(0,.92,.56),.016),e(yt(-.21,.92,.56),yt(.21,.92,.56),.014),e(yt(-.2,.92,.56),yt(-.2,.8,.62),.014),e(yt(.2,.92,.56),yt(.2,.8,.62),.014),i.push(new tt(.12,.04,.26).translate(0,.97,-.2)),Hs(i.map(t=>t.toNonIndexed()))}class fM{constructor(e,t){this.count=t,this.group=new ht,e.add(this.group);const n=(a,o,c,l=!1)=>{const h=new Xo(a,o,c);return h.castShadow=!0,h.frustumCulled=!1,l&&(h.instanceColor=new el(new Float32Array(c*3).fill(1),3)),this.group.add(h),h},s=(a,o=.6)=>new Ae({color:a,roughness:o}),r=up(7);this.frame=n(dM(),s("#ffffff",.4),t,!0),this.wheels=n(new gi(.33,.022,6,22).rotateY(Math.PI/2),s("#141416",.8),t*2),this.torso=n(r,s("#ffffff"),t,!0),this.head=n(new Zt(1,10,8),s("#ffffff",.35),t,!0),this.arms=n(r,s("#ffffff"),t*2,!0),this.thighs=n(r,s("#17171c",.7),t*2),this.shins=n(r,s("#e2b48f",.7),t*2),this.crank=new Float32Array(t).map(()=>Math.random()*Math.PI*2),this.torsoL=bs(yt(0,.98,-.2),yt(0,1.27,.22),.15,.11),this.headL=new Ee().compose(yt(0,1.38,.36),new vt,yt(.115,.115,.13)),this.armL=[bs(yt(.17,1.25,.2),yt(.2,.93,.56),.042),bs(yt(-.17,1.25,.2),yt(-.2,.93,.56),.042)],this.rearL=new Ee().makeTranslation(Sr.x,Sr.y,Sr.z),this.frontL=new Ee().makeTranslation(Ho.x,Ho.y,Ho.z)}setColors(e,{frame:t,jersey:n,helmet:s}){const r=new ce;this.frame.setColorAt(e,r.set(t)),this.torso.setColorAt(e,r.set(n)),this.arms.setColorAt(e*2,r),this.arms.setColorAt(e*2+1,r),this.head.setColorAt(e,r.set(s));for(const a of[this.frame,this.torso,this.arms,this.head])a.instanceColor.needsUpdate=!0}set(e,t,n,s,r,a,o,c,l,h=!0){h&&c>.3&&(this.crank[e]+=c/.34/3.6*l),ad.set(-a,r,o),od.compose(uM.set(t,n,s),ml.setFromEuler(ad),gl.set(1,1,1));const u=(f,d,m)=>f.setMatrixAt(d,hM.multiplyMatrices(od,m));u(this.frame,e,pM),u(this.wheels,e*2,this.rearL),u(this.wheels,e*2+1,this.frontL),u(this.torso,e,this.torsoL),u(this.head,e,this.headL),u(this.arms,e*2,this.armL[0]),u(this.arms,e*2+1,this.armL[1]);for(let f=0;f<2;f++){const d=this.crank[e]+f*Math.PI,m=f?-.09:.09,v=.98,g=-.21,p=Mr.y+Math.cos(d)*cd,x=Mr.z+Math.sin(d)*cd;let _=p-v,y=x-g,C=Math.hypot(_,y);const M=ys+oc-.01;C>M&&(_*=M/C,y*=M/C,C=M);const T=_/C,P=y/C,S=mM((ys*ys+C*C-oc*oc)/(2*ys*C)),b=Math.sqrt(1-S*S);let L=-P,N=T;N<0&&(L=-L,N=-N);const B=v+ys*(S*T+b*L),k=g+ys*(S*P+b*N);So.set(m,v,g),nc.set(m,B,k),u(this.thighs,e*2+f,bs(So,nc,.055,.055,ld)),So.set(m,p,x),u(this.shins,e*2+f,bs(nc,So,.04,.04,ld))}}commit(){for(const e of this.group.children)e.instanceMatrix.needsUpdate=!0}set visible(e){this.group.visible=e}}const ld=new Ee,pM=new Ee;function mM(i){return Math.max(-1,Math.min(1,i))}const wo="Team Blitz",gM=[{name:"Jonas",number:11,jersey:"#ff6a13",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#ff6a13"},{name:"Felix",number:12,jersey:"#ff6a13",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#ff6a13"},{name:"Noah",number:13,jersey:"#ff6a13",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#ff6a13"},{name:"Elias",number:14,jersey:"#ff6a13",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#ff6a13"}],hd=[["#2f7cf6","#f6f6f6","#2f7cf6"],["#1fa88f","#f1f1ec","#f1f1ec"],["#d23c3c","#16161b","#d23c3c"],["#f4d21c","#16161b","#16161b"],["#8a3ffc","#d8d8de","#8a3ffc"],["#f6f6f6","#2f7cf6","#f6f6f6"],["#16161b","#d23c3c","#d23c3c"],["#3bceac","#16161b","#3bceac"]],lr=46,vM=2e3,_M=600,xM=320,ac=11.5,yM=10.8,ud=13.2,bM=17.4,MM=.5,dd=3.6,cc=-1.5,lc=[{name:"Hinten",dist:5.2,height:2.7},{name:"Weit",dist:9,height:3.6},{name:"Von oben",dist:6,height:11}];function SM(i){let e,t,n=null,s=null,r=null,a=null;const o={},c={},l=[];let h=0,u=0,f=0;const d=E=>e.querySelector(E);function m(E,O=""){const W=d(".banner");W.innerHTML=`<div>${E}</div>${O?`<small>${O}</small>`:""}`,W.classList.remove("show"),W.offsetWidth,W.classList.add("show")}function v(E){const O=d(".story-tipp");O.dataset.text!==E&&(O.dataset.text=E,O.innerHTML=E,O.classList.toggle("show",!!E))}const g=()=>i.control==="touch"?"nach oben wischen":i.control==="keys"?"<b>W</b> halten":`${dt("A")} halten`,p=()=>i.control==="touch"?"nochmal nach oben wischen":i.control==="keys"?"<b>Leertaste</b>":dt("X"),x=()=>i.control==="touch"?"links/rechts halten":i.control==="keys"?"<b>A</b> <b>D</b>":dt("LT")+dt("RT");function _(E,O,W){const H=document.createElement("canvas");H.width=E,H.height=O,W(H.getContext("2d"),E,O);const Z=new gn(H);return Z.colorSpace=bt,Z.anisotropy=4,Z}function y(E){const O=new ht,W=i.world;W.poseAt(E,0,c);const H=W.nearest(c.x,c.z),Z=H.found?W.rhArr[H.i]:W.RH,te=new oe(new rn(Z*2,.45),new Ae({color:"#f2f2ee",roughness:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));te.rotation.x=-Math.PI/2,te.receiveShadow=!0;const fe=new ht;fe.position.set(c.x,c.h+.03,c.z),fe.rotation.y=c.heading,fe.add(te),O.add(fe);const Oe=_(1024,192,(He,Ve,Fe)=>{He.fillStyle="#2fa37a",He.fillRect(0,0,Ve,Fe),He.fillStyle="#ffffff",He.font='900 120px "Barlow Condensed", Arial, sans-serif',He.textAlign="center",He.textBaseline="middle",He.fillText("START · GRAND TOUR",Ve/2,Fe/2+6)}),ge=Z*2+1.6,Xe=new oe(new tt(ge,1.2,.3),[new Ae({color:"#2fa37a"}),new Ae({color:"#2fa37a"}),new Ae({color:"#2fa37a"}),new Ae({color:"#2fa37a"}),new Ae({map:Oe}),new Ae({map:Oe})]),V=new ht;V.position.set(c.x,c.h,c.z),V.rotation.y=c.heading,Xe.position.y=4.6,Xe.castShadow=!0,V.add(Xe);const Et=new Ae({color:"#e9e9e4",roughness:.5});for(const He of[-1,1]){const Ve=new oe(new st(.22,.26,5.2,10),Et);Ve.position.set(He*(ge/2-.2),2.6,0),Ve.castShadow=!0,V.add(Ve)}return O.add(V),W.scene.add(O),O}function C(){const E=i.world,O=E.length;o.sZiel=O-2.4,o.sStart=o.sZiel-Math.min(vM,O-400),a!==E&&(n==null||n.dispose(),s&&s.group.removeFromParent(),r==null||r.removeFromParent(),n=new pl(i,gM.map(te=>({...te,power:0,lane:cc}))),s=new fM(E.scene,lr),r=y(o.sStart),a=E),n.reset(0),n.startS=0,s.visible=!0,r.visible=!0;const W=[];for(const te of[-2.6,-1.3,1.3,2.6])W.push({dz:0,lat:te});for(let te=1;W.length<lr+4;te++)for(const fe of[-2.6,-1.3,0,1.3,2.6])(te>2||fe!==0)&&W.push({dz:-1.9*te,lat:fe});const H=[W[4],W[5],W[8],W[9]],Z=W.filter(te=>!H.includes(te));l.length=0;for(let te=0;te<lr;te++){const fe=Z[te],Oe=hd[te%hd.length];s.setColors(te,{jersey:Oe[0],frame:Oe[1],helmet:Oe[2]}),l.push({dz:fe.dz,lat:fe.lat,latOff:0,jit:Math.random()*100,s:o.sStart+fe.dz-70-Math.random()*15,v:0,anfahrt:!0})}o.team=n.list.map((te,fe)=>({r:te,dz:H[fe].dz,lat:H[fe].lat,latT:H[fe].lat,s:o.sStart+H[fe].dz-72-fe*3,v:0,anfahrt:!0,ziel:null})),Object.assign(o,{phase:"anfahrt",t:0,raceTime:0,s:o.sStart-55,v:0,lat:0,lean:0,steerVis:0,cruise:!1,pf:o.sStart,vf:0,cd:5,lastCount:6,idle:0,surge:0,meldung:0,draft:0,sprint:!1,sprintGap:null,sprintT:0,winnerShown:!1,winner:null,meZiel:null,paused:!1,showResult:!1,feldWeg:!1,tippAttacke:0})}const M=()=>o.team[0],T=()=>o.team.reduce((E,O)=>Math.min(E,O.s),1/0);function P(E,O){i.world.poseAt(o.s,o.lat,c);const H=i.bike.root;H.position.set(c.x,c.h,c.z),H.rotation.set(-c.pitch,c.heading,o.lean),i.focus.set(c.x,c.h,c.z),i.bike.update(E,o.v,O,o.steerVis),o.x=c.x,o.z=c.z,o.h=c.h}const S=(E,O=2.5)=>Math.sqrt(Math.max(0,2*O*E));function b(E){const O=i.world,W=o.raceTime;for(let H=0;H<l.length;H++){const Z=l[H];let te;if(Z.anfahrt){const Xe=o.sStart+Z.dz,V=Xe-Z.s;o.phase==="anfahrt"?Z.v=0:Z.v=Math.min(9.5,S(V,2.2),Z.v+4*E),Z.s=Math.min(Xe,Z.s+Z.v*E),V<.05&&(Z.s=Xe,Z.v=0,Z.anfahrt=!1)}else o.phase==="aufstellen"||o.phase==="countdown"?Z.v=0:(te=o.pf+Z.dz+Math.sin(W*.37+Z.jit)*.7,Z.v=Math.max(0,o.vf+ft((te-Z.s)*1.2,-2,2)),o.phase==="auslaufen"&&Z.s>o.sZiel+30&&(Z.v=Math.max(0,Z.v-3)),Z.s+=Z.v*E);let fe=Z.lat+Math.sin(W*.21+Z.jit)*.25;Math.abs(Z.s-o.s)<2.2&&Math.abs(fe-o.lat)<1.1&&(fe=o.lat+(fe>=o.lat?1.15:-1.15));for(const Xe of o.team)Math.abs(Z.s-Xe.s)<2&&Math.abs(fe-Xe.lat)<1&&(fe=Xe.lat+(fe>=Xe.lat?1.1:-1.1));Z.latOff=Ge(Z.latOff,ft(fe,-3,3)-Z.lat,2.5,E),O.poseAt(Z.s,Z.lat+Z.latOff,c);const Oe=i.camera.position,ge=Math.hypot(c.x-Oe.x,c.z-Oe.z)<1.6&&o.phase!=="aufstellen"&&o.phase!=="countdown";s.set(H,c.x,c.h-(ge?5:0),c.z,c.heading,c.pitch,0,Z.v,E,Z.v>.3)}s.commit()}function L(E){const O=M();for(let W=0;W<o.team.length;W++){const H=o.team[W];if(H.anfahrt){const Z=o.sStart+H.dz,te=Z-H.s;o.phase==="anfahrt"?H.v=0:H.v=Math.min(9.5,S(te,2.2),H.v+4*E),H.s=Math.min(Z,H.s+H.v*E),te<.05&&(H.s=Z,H.v=0,H.anfahrt=!1)}else if(o.phase==="aufstellen"||o.phase==="countdown")H.v=0;else if(o.phase==="feld"){const Z=o.pf+H.dz;H.v=Math.max(0,o.vf+ft((Z-H.s)*1.2,-2,2)),H.s+=H.v*E}else{let Z=o.phase==="attacke"&&o.t<7?15.2:ud;if((o.phase==="sprint"||o.phase==="auslaufen")&&(Z=o.sprintT<3.2?Math.min(18.8,ud+o.sprintT*3.2):bM),o.phase==="auslaufen"&&O.s>o.sZiel+5&&(Z=Math.max(4,O.v-1.5*E)),W===0)H.v=Ge(H.v,Z,2,E);else{let fe=o.team[W-1].s-2.3,Oe=Z+3;o.phase==="sprint"||o.phase==="auslaufen"?(H.latT=.3+W*.55,H.v=Ge(H.v,H.s>o.sZiel+5?4:12.6,1.2,E)):(H.latT=cc,H.v=Ge(H.v,Math.min(Oe,Z+ft((fe-H.s)*1.3,-2,4)),3,E))}W===0&&(H.latT=cc),H.s+=H.v*E}H.lat=Ge(H.lat,H.latT,1.5,E),H.ziel==null&&H.s>=o.sZiel&&o.raceTime>0&&(H.ziel=o.raceTime-(H.s-o.sZiel)/Math.max(H.v,1)),H.r.d=H.s,H.r.lat=H.lat,H.r.v=H.v,n.place(H.r,E,H.v>.5?H.v/$t/dd:0)}}function N(){return n.draftFor(o.x,o.z)}function B(){let E=0;for(const O of l)O.s>o.s&&E++;for(const O of o.team)(O.ziel!=null?o.meZiel==null||O.ziel<o.meZiel:O.s>o.s)&&E++;return E+1}function k(){const E=M().ziel,O=[],W=ge=>ge==null?"–":ge-E<.05?In(ge):`+${(ge-E).toFixed(1).replace(".",",")} s`;[...o.team.map(ge=>({name:ge.r.name,number:ge.r.number,color:ge.r.jersey,t:ge.ziel??o.raceTime+(o.sZiel-ge.s)/Math.max(ge.v,5),sub:wo})),{name:t.name,number:t.number,color:t.jersey||"#d23c3c",t:o.meZiel,me:!0}].sort((ge,Xe)=>ge.t-Xe.t).forEach((ge,Xe)=>O.push(`<div class="result-row ${ge.me?"me":""}">
        <b>${Xe+1}.</b><i style="background:${ge.color}"></i><span class="mini-plate"><span>${qe(ge.number)}</span></span>
        <span class="result-name">${qe(ge.name)}${ge.sub?` <small>${qe(ge.sub)}</small>`:""}</span>
        <span class="result-time">${W(ge.t)}</span></div>`));const Z=o.raceTime+(o.sZiel-o.pf)/Math.max(o.vf,8),te=Math.floor((Z-E)/60),fe=Math.round((Z-E)%60);O.push(`<div class="result-row"><b>6.</b><i style="background:#888"></i><span class="result-name">Das Feld · ${lr} Fahrer</span>
      <span class="result-time">+${te}:${String(fe).padStart(2,"0")}</span></div>`),d(".result-list").innerHTML=O.join("");const Oe=o.meZiel-E;d(".result-title").innerHTML=`Platz 2 – nur ${Oe.toFixed(1).replace(".",",")} Sekunden!`,f=0,G(),d(".result").classList.add("show"),o.showResult=!0}function G(){e.querySelectorAll(".result-item").forEach((E,O)=>E.classList.toggle("selected",O===f))}function D(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((E,O)=>E.classList.toggle("selected",O===u))}function F(E){o.paused=E,u=0,d(".pause").classList.toggle("show",E),D(),i.audio.setWind(0),E?i.audio.back():i.audio.select()}function U(E){const O=d(".countdown");O.textContent=E>0?E:"LOS!",O.classList.toggle("go",E<=0),O.classList.remove("show"),O.offsetWidth,O.classList.add("show"),E>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}const K=new R;function se(E){const O=i.world;O.poseAt(o.s+7,1.2,c),K.set(c.x,c.h+2.4,c.z),i.camera.position.lerp(K,1-Math.exp(-2.5*E)),O.poseAt(o.s-9,0,c),i.camera.lookAt(c.x,c.h+.8,c.z),i.camera.fov=Ge(i.camera.fov,55,3,E),i.camera.updateProjectionMatrix()}let ne=null;function be(E,O=!1){const W=lc[h],H=i.bike.root,Z=H.rotation.y;ne=O||ne==null?Z:ne+Math.atan2(Math.sin(Z-ne),Math.cos(Z-ne))*(1-Math.exp(-4*E));const te=Math.sin(ne),fe=Math.cos(ne),Oe=i.camera;K.set(H.position.x-te*W.dist,H.position.y+W.height,H.position.z-fe*W.dist);const ge=i.world.terrainHeight(K.x,K.z)+.7;K.y<ge&&(K.y=ge),O?Oe.position.copy(K):Oe.position.lerp(K,1-Math.exp(-10*E)),Oe.lookAt(H.position.x+te*4,H.position.y+1,H.position.z+fe*4);const Xe=56+Math.min(o.v,20)*.6+(o.sprint&&o.phase==="sprint"?8:0);Oe.fov=O?Xe:Ge(Oe.fov,Xe,3,E),Oe.updateProjectionMatrix()}function ke(E){o.phase=E,o.t=0}return{enter(E={}){i.world.kind!=="road"&&i.worlds.road&&i.useWorld("road"),i.mode="road";const O=$i();t=E.character||O.find(W=>(W.mode||"road")==="road")||O[0]||{id:null,name:"Du",number:1,jersey:"#d23c3c"},i.bike.setPlate(t.number,t.name),i.bike.applyLook(t),i.bike.setTires("road"),e=Cn(`
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
          <div class="cruise-badge">${dt("B")} Dauertreten an</div>
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
        </div>`),i.ui.append(e),e.querySelectorAll(".pause-item:not(.result-item)").forEach((W,H)=>W.addEventListener("click",()=>{u=H,D(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((W,H)=>W.addEventListener("click",()=>{f=H,G(),i.input.inject("confirm")})),C(),h=0,P(0,0),L(0),b(0),ne=null,be(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45),m("Das große Rennen","Fahr zum Start!"),i.story=o},update(E){const O=i.input;if(E=Math.min(E,.05),i.fx.uFade.value=Ge(i.fx.uFade.value,0,3,E),i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,E),i.fx.uLines.value=0,O.touchRide=!o.paused&&!o.showResult,o.paused){O.pressed("up")||O.pressed("down")?(u=1-u,D(),i.audio.nav()):O.pressed("back")||O.pressed("start")?F(!1):O.pressed("confirm")&&(u===0?F(!1):(i.audio.select(),i.go("mode",{minigame:!0})));return}if(o.showResult){if(O.pressed("up")||O.pressed("down"))f=1-f,G(),i.audio.nav();else if(O.pressed("confirm")){i.audio.select(),f===0?i.go("story",{character:t}):i.go("mode",{minigame:!0});return}}else if(O.pressed("pause")||O.pressed("start")){F(!0);return}if(o.t+=E,["feld","attacke","flucht","sprint","auslaufen"].includes(o.phase)&&(o.raceTime+=E),O.pressed("klingel")&&i.audio.klingel(),O.pressed("cruise")&&(o.cruise=!o.cruise,d(".cruise-badge").classList.toggle("on",o.cruise),o.cruise?i.audio.select():i.audio.back()),O.pressed("view")){h=(h+1)%lc.length,i.audio.nav();const ve=d(".view-toast");ve.textContent=`Kamera: ${lc[h].name}`,ve.classList.remove("show"),ve.offsetWidth,ve.classList.add("show")}const W=o.cruise||O.throttle>.1,H=O.pressed("x")||O.pressed("sprint"),Z=["feld","attacke","flucht","sprint"].includes(o.phase);let te=o.v;if(o.phase==="anfahrt"){const ve=o.sStart-o.s;te=Math.min(W?6.5:Math.max(0,o.v-1.5*E),S(ve,2.5)),o.idle=W?0:o.idle+E,v(o.idle>2.5&&o.v<.5?`Zum Losfahren ${g()}`:""),ve<.08&&(o.s=o.sStart,o.v=0,te=0,ke("aufstellen"),v(""),m("Startaufstellung","Die anderen Fahrer kommen …"),d(".story-phase").textContent="Aufstellen")}else if(o.phase==="aufstellen")te=0,o.lat=Ge(o.lat,0,2,E),l.every(Ce=>!Ce.anfahrt)&&o.team.every(Ce=>!Ce.anfahrt)&&o.t>2&&(ke("countdown"),d(".story-phase").textContent="Gleich geht’s los");else if(o.phase==="countdown"){te=0,o.cd-=E;const ve=Math.ceil(o.cd);ve!==o.lastCount&&(o.lastCount=ve,U(ve)),ve<=0&&(ke("feld"),o.cruise=!1,d(".story-phase").textContent="Im Feld",setTimeout(()=>e&&o.phase==="feld"&&v(`Treten: ${g()} · Lenken: ${x()}`),1200),setTimeout(()=>e&&v(""),7e3))}else if(o.phase==="feld"){const ve=Math.min(ac,o.raceTime*2.4);o.vf=ve+ft((o.s-o.pf)*.9,-1.5,3),o.pf+=o.vf*E,H&&(o.surge=2),o.surge=Math.max(0,o.surge-E),te=o.surge>0?ve+5:W?ve+2:ve-2.5,o.s>o.pf+3.5&&(o.s=o.pf+3.5,o.v=Math.min(o.v,o.vf),o.meldung-=E,o.meldung<=0&&(W||o.surge>0)&&(o.meldung=6,m("Kein Ausreißen!","Das Feld lässt dich nicht wegfahren"))),o.s<o.pf-8&&(te=Math.max(te,o.vf+1.2)),o.pf-o.sStart>=_M&&(ke("attacke"),m(`Attacke von ${wo}!`,"Schnell, häng dich in ihren Windschatten!"),i.audio.whoosh(1.4),i.input.rumble(.7,300),d(".story-phase").textContent="Ausreißer!")}else if(o.phase==="attacke"||o.phase==="flucht"||o.phase==="sprint"){o.vf=Ge(o.vf,yM,.6,E),o.pf+=o.vf*E;const ve=M(),Ce=T(),I=Ce>o.s+.5,w=N();if(o.draft=Ge(o.draft,w.rival?w.strength:0,5,E),o.phase!=="sprint")I?o.draft>.2?te=W?ve.v+1.5:ve.v-.3:te=W?ve.v-.6:o.vf:te=Math.min(W?ac+.8:ac,ve.v-1.5),I&&o.s>Ce-2&&(o.s=Ce-2,o.v=Math.min(o.v,o.team[o.team.length-1].v)),I&&o.s<Ce-16&&(te=Math.max(te,ve.v+.6)),I&&o.draft<.2&&o.raceTime>0?(o.tippAttacke+=E,o.tippAttacke>.6&&v(`Lenk hinter die <b style="color:#ff6a13">orangen Trikots</b> (${x()}) und tritt!`)):(o.tippAttacke=0,v(I&&!W?`Weiter treten: ${g()}`:"")),o.phase==="attacke"&&o.t>10&&ke("flucht"),!o.feldWeg&&o.s-o.pf>30&&(o.feldWeg=!0,m("Das Feld kommt nicht mit!",`Nur noch du und ${wo} vorne`),i.audio.success()),ve.s>=o.sZiel-xM&&(ke("sprint"),o.sprintT=0,m("Schlusssprint!",`Jetzt SPRINT: ${p()}`),i.audio.whoosh(1.6),i.input.rumble(.8,300),d(".story-phase").textContent="Sprint!");else{o.sprintT+=E,H&&!o.sprint&&(o.sprint=!0,o.sprintGap=ve.s-o.s,o.sprintRest=Math.max(1,o.sZiel-ve.s),m("Sprint!","Volle Kraft!"),i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.8,400));const q=ve.s-o.s,ee=MM*Math.max(ve.v,10);if(o.sprint){const re=ft((o.sZiel-ve.s)/o.sprintRest,0,1),Q=ee+(Math.max(o.sprintGap,ee)-ee)*re;te=Math.min(19.2,ve.v+ft((q-Q)*1.6,-3,6)),v("")}else te=W?ve.v-2.5:ve.v-4,v(`SPRINT: ${p()}!`);q<ee&&(o.s=ve.s-ee,o.v=Math.min(o.v,ve.v)),ve.ziel!=null&&!o.winnerShown&&(o.winnerShown=!0,m(`${ve.r.name} gewinnt!`,"Ganz knapp vor dir …"))}}else o.phase==="auslaufen"&&(o.vf=Ge(o.vf,6,.4,E),o.pf+=o.vf*E,te=Math.max(0,o.v-1.6*E),o.draft=Ge(o.draft,0,5,E));const fe=te>o.v?1.3:2.2;o.v=Math.max(0,o.v+ft(te-o.v,-fe*6*E,fe*3.5*E)),(o.phase==="aufstellen"||o.phase==="countdown")&&(o.v=0),o.s+=o.v*E,o.phase==="sprint"&&o.meZiel==null&&o.s>=o.sZiel&&(o.meZiel=o.raceTime-(o.s-o.sZiel)/Math.max(o.v,1),ke("auslaufen"),o.cruise=!1,d(".cruise-badge").classList.remove("on"),d(".story-phase").textContent="Ziel",v(""),m("Platz 2!",`Nur ${(o.meZiel-(M().ziel??o.meZiel)).toFixed(1).replace(".",",")} Sekunden hinter ${M().r.name}`),i.audio.success(),i.input.rumble(.8,400),setTimeout(()=>e&&o.phase==="auslaufen"&&k(),3200));const Oe=O.steer,ge=i.world.nearest(o.x??0,o.z??0),Xe=(ge.found?i.world.rhArr[ge.i]:i.world.RH)-.5;o.phase!=="aufstellen"&&o.phase!=="countdown"&&(o.lat=ft(o.lat+Oe*2.4*E*ft(o.v/4,.3,1),-Xe,Xe)),o.lean=Ge(o.lean,Oe*ft(o.v/9,0,1)*.3,6,E),o.steerVis=Ge(o.steerVis,Oe*(1-ft(o.v/14,0,.85))*.5,10,E);for(const ve of o.team)Math.abs(ve.s-o.s)<1&&Math.abs(ve.lat-o.lat)<.8&&(o.lat=ve.lat+(o.lat>=ve.lat?.8:-.8));const V=W||Z&&o.v>1||o.phase==="anfahrt"&&o.v>.3?Math.max(o.v/$t/dd,W?3:0):0;V>0?i.audio.freewheel(E,0):i.audio.freewheel(E,Math.min(55,o.v/(2*Math.PI*$t)*24)),P(E,V),L(E),b(E),n.showDraft(o.draft>.2?n.draftFor(o.x,o.z).rival:null,o.draft,E),o.phase==="aufstellen"||o.phase==="countdown"&&o.cd>1.6?se(E):be(E),i.audio.setWind(ft(o.v/15,0,1)*(1-.5*o.draft));const Et=o.v*3.6;d(".speedo-val b").textContent=Math.round(Et),d(".speedo-fill").style.strokeDasharray=`${ft(Et/70,0,1)*75} 100`,d(".place").textContent=Z||o.phase==="auslaufen"?`${o.meZiel!=null?2:B()}/${lr+5}`:"–";const He=o.sZiel-o.s;d(".story-rest").textContent=Z?He>1e3?`${(He/1e3).toFixed(1).replace(".",",")} km`:`${Math.max(0,Math.round(He))} m`:"–";const Ve=(o.s-o.pf)/Math.max(o.vf,5);d(".story-gap-box").classList.toggle("show",o.feldWeg),d(".story-gap").textContent=`${Math.floor(Ve/60)}:${String(Math.max(0,Math.round(Ve%60))).padStart(2,"0")}`,d(".draft-badge").classList.toggle("on",o.draft>.08),o.draft>.08&&(d(".draft-name").textContent=`hinter ${wo} · −${Math.round(40*o.draft)} % Wind`,d(".draft-meter i").style.width=`${Math.round(o.draft*100)}%`)},exit(){i.input.touchRide=!1,n==null||n.hide(),s&&(s.visible=!1),r&&(r.visible=!1),v(""),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0);const E=i.world.nearest(o.x??0,o.z??0);i.npc.s=E.found?E.s:0}}}const fd=12,TM=[["1","2","3","4","5","6","7","8","9","0"],["Q","W","E","R","T","Z","U","I","O","P"],["A","S","D","F","G","H","J","K","L","Ü"],["Y","X","C","V","B","N","M","Ö","Ä","-"]],wM=[{k:"shift",label:"⇧ Groß/klein",span:3},{k:"space",label:"Leerzeichen",span:4},{k:"del",label:"⌫ Löschen",span:3}];function EM(){const i=TM.map(t=>t.map(n=>({k:n,label:n,span:1}))),e=[];for(const t of wM)for(let n=0;n<t.span;n++)e.push(t);return i.push(e),i}const dp={id:"identity",title:"Name & Startnummer",tab:"Name & Nummer",hints:[["A","Taste drücken"],["X","Buchstabe löschen"],["Y","Leerzeichen"],["B","Abbrechen"]],mount(i,e,t){this.draft=e,this.ctx=t,this.grid=EM(),this.zone="kb",this.r=1,this.c=0,this.upper=!e.name,this.autoLower=!e.name,i.innerHTML=`
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
      </div>`,this.root=i,this.keyEls=[...i.querySelectorAll(".key")],this.keyEls.forEach(n=>n.addEventListener("click",()=>{const s=Number(n.dataset.r),r=this.grid[s].findIndex(a=>a.k===n.dataset.k);this.zone="kb",this.r=s,this.c=r,this.press(this.grid[s][r])})),i.querySelector(".arrow.up").addEventListener("click",()=>this.changeNumber(1)),i.querySelector(".arrow.down").addEventListener("click",()=>this.changeNumber(-1)),i.querySelector(".done-btn").addEventListener("click",()=>t.next()),this.refresh()},get key(){return this.grid[this.r][this.c]},refresh(){const i=this.draft,e=n=>this.root.querySelector(n);e(".name-text").textContent=i.name,e(".name-count").textContent=`${i.name.length}/${fd}`,e(".plate-number").textContent=i.number,e(".plate-name").textContent=i.name||"DEIN NAME",e(".plate-name").classList.toggle("placeholder",!i.name),e(".number-value").textContent=i.number;for(const n of this.root.querySelectorAll(".panel"))n.classList.toggle("active",n.dataset.zone===this.zone);const t=this.key;this.keyEls.forEach(n=>{n.classList.toggle("focus",this.zone==="kb"&&n.dataset.k===t.k&&Number(n.dataset.r)===this.r),n.dataset.k.length===1&&/[A-ZÄÖÜ]/.test(n.dataset.k)&&(n.textContent=this.upper?n.dataset.k:n.dataset.k.toLowerCase())}),e(".done-btn").classList.toggle("focus",this.zone==="done"),this.ctx.preview(i)},typeChar(i){const e=this.draft;if(e.name.length>=fd){this.ctx.audio.error(),this.bump(".name-field");return}e.name+=i,this.autoLower&&this.upper&&/[A-Za-zÄÖÜäöü]/.test(i)&&(this.upper=!1,this.autoLower=!1),this.ctx.audio.key(),this.clearError()},backspace(){const i=this.draft;i.name.length&&(i.name=i.name.slice(0,-1),i.name.length||(this.upper=!0,this.autoLower=!0),this.ctx.audio.key())},press(i){i.k==="shift"?(this.upper=!this.upper,this.autoLower=!1,this.ctx.audio.key()):i.k==="space"?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):i.k==="del"?this.backspace():this.typeChar(this.upper?i.k:i.k.toLowerCase()),this.flashKey(),this.refresh()},flashKey(){const i=this.keyEls.find(e=>e.classList.contains("focus"));i&&(i.classList.remove("pressed"),i.offsetWidth,i.classList.add("pressed"))},bump(i){const e=this.root.querySelector(i);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")},changeNumber(i){const e=this.draft;let t=e.number+i;t>999&&(t=i>1?999:1),t<1&&(t=i<-1?1:999),e.number=t,this.ctx.audio.nav();const n=this.root.querySelector(".number-value");n.classList.remove("tick-up","tick-down"),n.offsetWidth,n.classList.add(i>0?"tick-up":"tick-down"),this.refresh()},move(i,e){const t=this.ctx.audio;if(this.zone==="kb")if(i){const n=this.r+i;if(n<0||n>=this.grid.length)return;this.r=n}else{let n=this.c;const s=this.key;do n+=e;while(n>=0&&n<10&&this.grid[this.r][n]===s);if(n>=10)this.zone="num";else{if(n<0)return;{const r=this.grid[this.r][n];this.c=this.grid[this.r].indexOf(r)}}}else if(this.zone==="num"){if(i)return this.changeNumber(-i*1);e<0?(this.zone="kb",this.c=9,this.c=this.grid[this.r].indexOf(this.grid[this.r][9])):this.zone="done"}else if(this.zone==="done")if(e<0)this.zone="num";else return;t.nav(),this.refresh()},update(i){if(i.pressed("up")&&(this.zone==="num"&&i.holdTime("up")>1.6?this.changeNumber(5):this.move(-1,0)),i.pressed("down")&&(this.zone==="num"&&i.holdTime("down")>1.6?this.changeNumber(-5):this.move(1,0)),i.pressed("left")&&this.move(0,-1),i.pressed("right")&&this.move(0,1),i.pressed("x")&&(this.backspace(),this.refresh()),i.pressed("y")&&this.press({k:"space"}),i.pressed("start")){this.zone="done",this.refresh(),this.ctx.next();return}for(const e of i.chars){if(this.zone==="num"){if(/\d/.test(e)){const t=String(this.draft.number);let n=Number(this.typedDigits?t+e:e);n>999&&(n=Number(e)),this.draft.number=Math.max(1,n),this.typedDigits=!0,this.refresh()}else e==="\b"&&(this.draft.number=Math.max(1,Math.floor(this.draft.number/10)),this.refresh());continue}this.typedDigits=!1,e==="\b"?this.backspace():e===" "?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):/^[\p{L}\d\-]$/u.test(e)&&this.typeChar(e),this.refresh()}i.pressed("confirm")&&(this.zone==="kb"?this.press(this.key):this.zone==="num"?(this.zone="done",this.ctx.audio.nav(),this.refresh()):this.ctx.next())},clearError(){this.root.querySelector(".error-msg").textContent=""},validate(){return this.draft.name=this.draft.name.trim(),this.draft.name?!0:(this.root.querySelector(".error-msg").textContent="Bitte gib zuerst einen Namen ein.",this.bump(".name-field"),this.zone="kb",this.refresh(),!1)},unmount(){}};function eh({id:i,title:e,tab:t,rows:n}){return{id:i,title:e,tab:t,seeBike:!0,hints:[["A","Weiter"],["B","Zurück"]],mount(s,r,a){this.draft=r,this.ctx=a,this.row=0;const o=(c,l,h)=>c.type==="brand"?`<div class="brand-opt" data-o="${h}"><span class="brand-logo ${l.serif?"serif":""} ${l.font.includes("italic")?"italic":""}">${qe(Kf(l))}</span><small>${qe(l.land)}</small></div>`:c.type==="group"?`<div class="brand-opt group-opt" data-o="${h}"><i class="group-dot" style="--c:${l.accent}"></i><span>${qe(l.name)}</span><small>${qe(l.maker)}</small></div>`:c.type==="paint"?`<div class="brand-opt paint-opt" data-o="${h}"><i class="paint-preview ${l.id}"></i><span>${qe(l.name)}</span></div>`:`<div class="swatch ${l.matte?"matte":""}" data-o="${h}" style="--c:${l.hex}"></div>`;s.innerHTML=`
        <div class="choice-panel">
          ${n.map((c,l)=>`
            <div class="choice-row" data-r="${l}">
              <div class="choice-head"><span class="field-label">${qe(c.label)}</span><span class="choice-name"></span></div>
              <div class="choice-opts ${c.type}">${c.options.map((h,u)=>o(c,h,u)).join("")}</div>
            </div>`).join("")}
          <div class="choice-row done-row" data-r="${n.length}">
            <div class="done-btn">${a.isLast(this)?"Fertig":"Weiter"} <span>${a.isLast(this)?"✓":"›"}</span></div>
          </div>
        </div>`,this.root=s,s.querySelectorAll(".choice-row").forEach(c=>{const l=Number(c.dataset.r);c.querySelectorAll("[data-o]").forEach(h=>h.addEventListener("click",()=>{this.row=l,this.select(l,Number(h.dataset.o))}))}),s.querySelector(".done-btn").addEventListener("click",()=>a.next()),this.refresh()},valueOf(s,r){return r.id??r.hex},current(s){const r=n[s];return r.options.findIndex(a=>this.valueOf(r,a)===this.draft[r.key])},select(s,r){const a=n[s];this.draft[a.key]=this.valueOf(a,a.options[r]),this.ctx.audio.nav(),this.ctx.preview(this.draft),this.refresh()},refresh(){var s;this.root.querySelectorAll(".choice-row").forEach(r=>{const a=Number(r.dataset.r);if(r.classList.toggle("active",a===this.row),a>=n.length)return;const o=this.current(a);r.querySelectorAll("[data-o]").forEach(h=>h.classList.toggle("selected",Number(h.dataset.o)===o));const l=n[a].options[o];r.querySelector(".choice-name").textContent=l?l.name:""}),this.root.querySelector(".done-btn").classList.toggle("focus",this.row===n.length),(s=this.root.querySelector(`.choice-row[data-r="${this.row}"]`))==null||s.scrollIntoView({block:"nearest",behavior:"smooth"})},update(s){if(s.pressed("up")&&this.row>0&&(this.row--,this.ctx.audio.nav(),this.refresh()),s.pressed("down")&&this.row<n.length&&(this.row++,this.ctx.audio.nav(),this.refresh()),this.row<n.length&&(s.pressed("left")||s.pressed("right"))){const r=n[this.row].options.length,a=Math.max(0,this.current(this.row));this.select(this.row,(a+(s.pressed("right")?1:-1)+r)%r)}s.pressed("confirm")&&(this.row<n.length?(this.row++,this.ctx.audio.nav(),this.refresh()):this.ctx.next()),s.pressed("start")&&this.ctx.next()},validate(){return!0},unmount(){}}}const fp=eh({id:"looks",title:"Dein Aussehen",tab:"Aussehen",rows:[{key:"helmet",label:"Helm",type:"color",options:yr},{key:"jersey",label:"Trikot",type:"color",options:yr},{key:"kit",label:"Trikot-Muster",type:"paint",options:cb},{key:"shorts",label:"Hose",type:"color",options:yr}]}),pp=eh({id:"bike",title:"Dein Rennrad",tab:"Rennrad",rows:[{key:"brand",label:"Marke",type:"brand",options:Jo},{key:"paint",label:"Lackierung",type:"paint",options:jf},{key:"frame",label:"Rahmenfarbe",type:"color",options:Yl},{key:"bar",label:"Lenkerband",type:"color",options:ib},{key:"groupset",label:"Schaltung",type:"group",options:Qo}]}),AM=eh({id:"ttbike",title:"Dein Zeitfahrrad",tab:"Zeitfahrrad",rows:[{key:"brand",label:"Marke",type:"brand",options:Jo},{key:"paint",label:"Lackierung",type:"paint",options:jf},{key:"frame",label:"Rahmenfarbe",type:"color",options:Yl},{key:"tires",label:"Reifen",type:"color",options:rb},{key:"groupset",label:"Schaltung",type:"group",options:Qo}]});let sn=[dp,fp,pp];function CM(i){let e,t,n=0,s,r=0,a=!0,o=!1;function c(){const u=sn[n];e.querySelector(".step-label").textContent=`${o?"Fahrer bearbeiten":"Neuer Charakter"} · Schritt ${n+1} von ${sn.length}`,e.querySelector(".step-title").textContent=u.title,e.querySelector(".step-tabs").innerHTML=`${dt("LB")}${sn.map((m,v)=>`<span class="step-tab ${v===n?"active":""} ${v<n?"done":""}" data-i="${v}">${qe(m.tab)}</span>`).join('<i class="tab-dot"></i>')}${dt("RB")}`,e.querySelectorAll(".step-tab").forEach(m=>m.addEventListener("click",()=>l(Number(m.dataset.i)))),e.classList.toggle("see-bike",!!u.seeBike);const f=n===0?u.hints:u.hints.map(([m,v])=>[m,m==="B"?"Zurück":v]);e.querySelector(".hints").outerHTML=Wi(f),u.mount(t,s,h),h.preview(s);const d=t.querySelector(".done-btn");d&&n<sn.length-1&&(d.firstChild.textContent="Weiter ")}function l(u){if(u<0||u>=sn.length||u===n||n<0)return;const f=sn[n];if(u>n&&!f.validate()){i.audio.error(),i.input.rumble(.4,120);return}f.unmount(),n=u,i.audio.nav(),i.input.rumble(.15,40),c()}const h={audio:i.audio,preview(u){i.bike.setPlate(u.number,u.name||" "),i.bike.applyLook(u)},isLast(u){return sn.indexOf(u)===sn.length-1},next(){const u=sn[n];if(!u.validate()){i.audio.error(),i.input.rumble(.4,120);return}if(u.unmount(),n<sn.length-1){n++,i.audio.select(),c();return}o?ap(s):nM(s),i.audio.success(),i.input.rumble(.5,200),e.classList.add("saved");const f=s.id;setTimeout(()=>i.currentName==="creator"&&i.go("menu",{selectId:f}),650),n=-1}};return{enter(u={}){o=!!u.edit,s=o?{...dn,...u.edit}:tM(i.mode),sn=[dp,fp,i.mode==="tt"?AM:pp],n=0,r=0,a=!0,e=Cn(`
        <div class="screen creator-screen">
          <header class="creator-head">
            <div class="step-tabs"></div>
            <div class="step-label"></div>
            <h2 class="step-title"></h2>
          </header>
          <div class="step-body"></div>
          ${Wi([])}
          <div class="toast"></div>
        </div>`),t=e.querySelector(".step-body"),i.ui.append(e),c()},update(u){const f=xi(i,u);if(qs(i,u,f,a),a=!1,n<0)return;r=Math.max(0,r-u);const d=i.input;if(d.pressed("rb")||d.pressed("rt")){l(n+1);return}if(d.pressed("lb")||d.pressed("lt")){l(n-1);return}if(i.input.pressed("back")&&n>0){sn[n].unmount(),n--,i.audio.back(),c();return}if(i.input.pressed("back")){if(r>0){i.audio.back(),i.go("menu",o?{selectId:s.id}:{});return}r=2,i.audio.back();const m=e.querySelector(".toast");m.innerHTML=`Nochmal ${dt("B")} drücken, um abzubrechen`,m.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>m.classList.remove("show"),2e3);return}sn[n].update(i.input)},exit(){e.remove()}}}const Eo=110,Pi=140,Ln=210,hr=14;class RM{constructor(e,t){this.world=e,this.canvas=t,this.dpr=Math.min(window.devicePixelRatio||1,2),t.width=t.height=Ln*this.dpr,t.style.width=t.style.height=`${Ln}px`,this.ctx=t.getContext("2d");let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let f=0;f<e.N;f++)n=Math.min(n,e.px[f]),s=Math.max(s,e.px[f]),r=Math.min(r,e.pz[f]),a=Math.max(a,e.pz[f]);n-=Eo,s+=Eo,r-=Eo,a+=Eo,this.scale=(Ln-hr*2)/Math.max(s-n,a-r),this.ox=hr+(Ln-hr*2-(s-n)*this.scale)/2-n*this.scale,this.oz=hr+(Ln-hr*2-(a-r)*this.scale)/2-r*this.scale,this.base=document.createElement("canvas"),this.base.width=this.base.height=t.width;const o=this.base.getContext("2d");o.scale(this.dpr,this.dpr),o.save(),o.beginPath(),o.roundRect(0,0,Ln,Ln,10),o.clip(),o.imageSmoothingEnabled=!0,o.drawImage(this.renderTerrain(),0,0,Ln,Ln),o.restore(),o.lineJoin=o.lineCap="round",this.tracePath(o,0,e.N),o.closePath(),o.strokeStyle="rgba(0,0,0,0.55)",o.lineWidth=8,o.stroke(),o.strokeStyle="rgba(240,234,222,0.85)",o.lineWidth=4,o.stroke();const c=this.mx(e.px[0]),l=this.mz(e.pz[0]),h=-e.tz[0],u=e.tx[0];o.strokeStyle=Ue.colors.gold,o.lineWidth=3,o.lineCap="butt",o.beginPath(),o.moveTo(c-h*8,l-u*8),o.lineTo(c+h*8,l+u*8),o.stroke()}renderTerrain(){const e=this.world,t=document.createElement("canvas");t.width=t.height=Pi;const n=t.getContext("2d"),s=n.createImageData(Pi,Pi),r=Ln/Pi,a=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)],o=(p,x,_)=>[p[0]+(x[0]-p[0])*_,p[1]+(x[1]-p[1])*_,p[2]+(x[2]-p[2])*_],c=a("#5f9140"),l=a("#8db657"),h=a("#bfae63"),u=a("#2e5a2a"),f=a("#8c8279"),d=a("#f4f2ec"),m=a("#d8c896"),v=a("#245f92"),g=a("#5aa0d4");for(let p=0;p<Pi;p++)for(let x=0;x<Pi;x++){const _=((x+.5)*r-this.ox)/this.scale,y=((p+.5)*r-this.oz)/this.scale,C=e.baseHeight(_,y);let M;const T=e.lakeAt(_,y);if(T&&C<T.level)M=o(g,v,It(0,3,T.level-C));else{M=o(c,l,e.n3(_*.006,y*.006)*.35+.5),M=o(M,h,It(.25,.8,e.n2(_*.004+50,y*.004))*.5),C<120&&(M=o(M,u,It(0,.25,e.n3(_*.006+20,y*.006))*.75)),M=o(M,f,It(45,95,C)),M=o(M,d,It(110,140,C)),T&&(M=o(M,m,It(T.level+1.4,T.level,C)));const S=e.baseHeight(_+6,y)-C,b=e.baseHeight(_,y+6)-C,L=ft(1-(S+b)*.07,.55,1.3);M=[M[0]*L,M[1]*L,M[2]*L]}const P=(p*Pi+x)*4;s.data[P]=M[0],s.data[P+1]=M[1],s.data[P+2]=M[2],s.data[P+3]=255}return n.putImageData(s,0,0),t}mx(e){return this.ox+e*this.scale}mz(e){return this.oz+e*this.scale}tracePath(e,t,n){const s=this.world;e.beginPath();for(let r=t;r<=n;r++){const a=r%s.N,o=this.mx(s.px[a]),c=this.mz(s.pz[a]);r===t?e.moveTo(o,c):e.lineTo(o,c)}}draw(e,t,n,s,r=[]){const a=this.ctx;if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width,this.canvas.height),a.drawImage(this.base,0,0),a.scale(this.dpr,this.dpr),a.lineJoin=a.lineCap="round",s!=null&&s>0){const u=Math.min(this.world.N,Math.floor(s/this.world.ds));this.tracePath(a,0,u),a.strokeStyle=Ue.colors.gold,a.lineWidth=4,a.shadowColor=Ue.colors.gold,a.shadowBlur=6,a.stroke(),a.shadowBlur=0}for(const u of r)a.beginPath(),a.arc(this.mx(u.x),this.mz(u.z),4.5,0,Math.PI*2),a.fillStyle=u.jersey,a.strokeStyle="#fff",a.lineWidth=1.5,a.fill(),a.stroke();const o=this.mx(e),c=this.mz(t),l=Math.sin(n),h=Math.cos(n);a.beginPath(),a.moveTo(o+l*10,c+h*10),a.lineTo(o-l*5+h*6,c-h*5-l*6),a.lineTo(o-l*2,c-h*2),a.lineTo(o-l*5-h*6,c-h*5+l*6),a.closePath(),a.fillStyle=Ue.colors.accent,a.strokeStyle="#fff",a.lineWidth=2,a.fill(),a.stroke()}}const Ao=78,hc=9.81,PM=3.6,pd=[.25,.5,.75],fi=Ue.raceLaps,uc=[{name:"Hinten",yaw:0,pitch:.32,dist:4.4},{name:"Seite",yaw:Math.PI/2,pitch:.12,dist:4.6},{name:"Von oben",yaw:0,pitch:1.3,dist:12},{name:"Von vorne",yaw:Math.PI,pitch:.16,dist:4.2}],mp=i=>Math.atan2(Math.sin(i),Math.cos(i)),md=(i,e,t,n)=>i+mp(e-i)*(1-Math.exp(-t*n));function LM(i){let e,t;const n={},s={},r={};let a=0,o,c,l=!1,h=null,u=!1,f=0;const d=new Map;let m=0;const v={view:0,yawOff:0,pitchOff:0,idle:0,yaw:0,pitch:.32,dist:4.4,heading:0};let g=null;const p=["#ff4d6d","#ffd23f","#3bceac","#4daaff","#ff9f1c","#c77dff"];function x(D,F,U){const se=new Float32Array(480),ne=new Float32Array(480),be=new Float32Array(480),ke=new ce;for(let H=0;H<160;H++){se[H*3]=D,se[H*3+1]=F+1.4,se[H*3+2]=U;const Z=Math.random()*Math.PI*2,te=1.5+Math.random()*2.5;be[H*3]=Math.cos(Z)*te,be[H*3+1]=3+Math.random()*3,be[H*3+2]=Math.sin(Z)*te,ke.set(p[H%p.length]),ke.toArray(ne,H*3)}const E=new ut;E.setAttribute("position",new Ct(se,3)),E.setAttribute("color",new Ct(ne,3));const O=new mi({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1}),W=new Ps(E,O);W.frustumCulled=!1,i.world.scene.add(W),g={points:W,vel:be,age:0}}function _(){g&&(i.world.scene.remove(g.points),g.points.geometry.dispose(),g.points.material.dispose(),g=null)}function y(D){if(!g)return;g.age+=D;const F=g.points.geometry.attributes.position;for(let U=0;U<F.count;U++)g.vel[U*3+1]-=2.5*D,F.setXYZ(U,F.getX(U)+g.vel[U*3]*D,F.getY(U)+g.vel[U*3+1]*D,F.getZ(U)+g.vel[U*3+2]*D);F.needsUpdate=!0,g.points.material.opacity=Math.max(0,1-g.age/3),g.age>3.2&&_()}function C(D,F=!1){const U=i.input,K=uc[v.view];U.lookX||U.lookY?(v.idle=0,v.yawOff+=U.lookX*2.6*D,v.pitchOff-=U.lookY*1.5*D):(v.idle+=D,v.idle>1.5&&(v.yawOff=Ge(v.yawOff,0,2,D),v.pitchOff=Ge(v.pitchOff,0,2,D))),v.yawOff=mp(v.yawOff);const se=ft(K.pitch+v.pitchOff,.04,1.45);v.pitchOff=se-K.pitch,F?(v.yaw=K.yaw+v.yawOff,v.pitch=se,v.dist=K.dist,v.heading=n.heading):(v.yaw=md(v.yaw,K.yaw+v.yawOff,6,D),v.pitch=Ge(v.pitch,se,6,D),v.dist=Ge(v.dist,K.dist,4,D),v.heading=md(v.heading,n.heading,5,D));const ne=i.camera,be=v.heading+Math.PI+v.yaw,ke=Math.cos(v.pitch)*v.dist;ne.position.set(n.x+Math.sin(be)*ke,n.h+.9+Math.sin(v.pitch)*v.dist,n.z+Math.cos(be)*ke);const E=i.world.terrainHeight(ne.position.x,ne.position.z)+.6;ne.position.y<E&&(ne.position.y=E);const O=2.5*Math.max(0,Math.cos(v.yaw))*(1-v.pitch/1.5);ne.lookAt(n.x+Math.sin(n.heading)*O,n.h+.9,n.z+Math.cos(n.heading)*O);const W=58+Math.min(n.speed,20)*.9+(n.sprint==="active"?7:0);if(ne.fov=F?W:Ge(ne.fov,W,3,D),ne.updateProjectionMatrix(),U.pressed("view")){v.view=(v.view+1)%uc.length,v.yawOff=0,v.pitchOff=0,i.audio.nav();const H=M(".view-toast");H.textContent=`Kamera: ${uc[v.view].name}`,H.classList.remove("show"),H.offsetWidth,H.classList.add("show")}}function M(D){return e.querySelector(D)}function T(D){n.paused=D,a=0,M(".pause").classList.toggle("show",D),P(),i.audio.setWind(0),D?i.audio.back():i.audio.select()}function P(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((D,F)=>D.classList.toggle("selected",F===a))}function S(){const D=i.world.length;return n.lap===0?n.lastS-D:(n.lap-1)*D+n.lastS}function b(){if(n.place)return n.place;const D=S();let F=0;for(const U of c.list)(U.finished!=null||c.progress(U)>D)&&F++;return F+1}function L(D){if(!e||!l)return;const F=h==null?void 0:h.list[0];D.t==="s"&&F?F.net={...D,at:performance.now()}:D.t==="start"?(u=!0,i.go("ride",{character:t,online:!0})):(D.t==="closed"||D.t==="error")&&(G("Verbindung getrennt","Dein Gegner ist nicht mehr da"),i.audio.error(),l=!1,h==null||h.hide(),i.online.close())}function N(){const D=i.world.length,F=[{name:t.name,number:t.number,color:t.jersey,me:!0,t:n.finishTime,p:S()},...c.list.map(U=>({name:U.name,number:U.number,color:U.jersey,t:U.finished,p:c.progress(U)}))];F.sort((U,K)=>U.t!=null&&K.t!=null?U.t-K.t:U.t!=null?-1:K.t!=null?1:K.p-U.p),M(".result-list").innerHTML=F.map((U,K)=>`<div class="result-row ${U.me?"me":""}">
          <b>${K+1}.</b><i style="background:${U.color}"></i><span class="mini-plate"><span>${U.number}</span></span>
          <span class="result-name">${qe(U.name)}</span>
          <span class="result-time">${U.t!=null?In(U.t):`noch ${Math.max(1,Math.ceil((fi*D-U.p)/1e3*10)/10)} km`}</span>
        </div>`).join(""),M(".result-title").textContent=c.list.length?n.place===1?"Sieg! Du bist Erster!":`Ziel! Du bist ${n.place}.`:`Ziel! ${In(n.finishTime)}`,m=0,B(),M(".result").classList.add("show"),n.showResult=!0}function B(){e.querySelectorAll(".result-item").forEach((D,F)=>D.classList.toggle("selected",F===m))}function k(D,F,U=null,K=0){var se;n.crash=1.8,n.speed=0,n.air=!1,n.cruise=!1,n.resumeS=U,n.resumeLat=K,(se=e.querySelector(".cruise-badge"))==null||se.classList.remove("on"),G(D,F),i.audio.error(),i.audio.noiseBurst(.25,{vol:.5,freq:180,type:"lowpass"}),i.input.rumble(1,450)}function G(D,F=""){const U=M(".banner");U.innerHTML=`<div>${D}</div>${F?`<small>${F}</small>`:""}`,U.classList.remove("show"),U.offsetWidth,U.classList.add("show")}return{enter({character:D,online:F}){t=D,l=!!F&&i.online.connected&&!!i.online.remote;const U=u;u=!1,e=Cn(`
        <div class="screen ride-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Runde</label><b class="lap">–</b></div>
            <div class="hud-box hud-zeit"><label>Zeit</label><b class="time">0:00.0</b></div>
            <div class="hud-box"><label>Bestzeit</label><b class="best">${In(t.bestLap)}</b></div>
          </div>
          <div class="hud-map">
            <div class="hud-rider">
              <div class="mini-plate"><span>${t.number}</span></div>
              <div><div class="rider-name">${qe(t.name)}</div><div class="rider-sub">Teststrecke · ${ta(i.mode)}</div></div>
            </div>
            <canvas class="minimap"></canvas>
          </div>
          <div class="view-toast"></div>
          <div class="draft-badge">
            <span class="draft-icon">≋</span>
            <div class="draft-text"><b>Windschatten</b><small class="draft-name"></small></div>
            <div class="draft-meter"><i></i></div>
          </div>
          <div class="cruise-badge">${dt("B")} Dauertreten an</div>
          <div class="sprint-bar ready">
            <div class="sprint-fill"></div>
            <i class="sprint-mark" style="left:${Ue.sprint.abLadung*100}%"></i>
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
            <div>${dt("A")} Treten</div>
            <div>${dt("B")} Dauertreten an/aus</div>
            <div>${dt("Y")} Bremsen</div>
            <div>${dt("X")} Sprint</div>
            <div>${dt("LB")}+${dt("RB")} Landen nach Drops</div>
            <div>${dt("LT")}${dt("RT")} Lenken</div>
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
        </div>`),i.ui.append(e),setTimeout(()=>e==null?void 0:e.querySelectorAll(".controls-help").forEach(E=>E.classList.add("fade")),12e3),e.querySelectorAll(".pause-item:not(.result-item)").forEach((E,O)=>E.addEventListener("click",()=>{a=O,P(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((E,O)=>E.addEventListener("click",()=>{m=O,B(),i.input.inject("confirm")})),o=new RM(i.world,M(".minimap")),i.bike.setPlate(t.number,t.name),i.bike.applyLook(t),i.bike.setTires(i.mode);const K=i.world.cx?.7:1.5,se=K-(i.world.cx?1.3:2.2),ne=l&&i.online.role==="guest",be=i.world.poseAt(i.world.length-14,ne?se:K,r);Object.assign(n,{x:be.x,z:be.z,heading:be.heading,speed:0,lean:0,steerVis:0,pitch:0,h:be.h,lastS:be.s,lap:0,lapStart:0,cps:new Set,time:0,paused:!1,shake:0,air:!1,vy:0,bothHeld:-9,crash:0,cruise:!1,sprint:"ready",sprintT:0,phase:"countdown",countdown:3,lastCount:4,raceTime:0,place:0,finishTime:null,showResult:!1});const ke=i.mode;if(d.has(ke)||d.set(ke,new pl(i,i.mode==="road"?lp:[])),c=d.get(ke),l){h==null||h.dispose();const E=i.online.remote.char;h=new pl(i,[{...E,remote:!0,power:0,lane:ne?K:se}]),c=h,i.online.listen(L),f=0,U||setTimeout(()=>e&&G(`Online gegen ${E.name}`,"Viel Glück!"),300)}i.rivals=c,i.rideState=n,M(".hud-place").style.display=c.list.length?"":"none",i.bike.setTires(i.mode),c.reset(be.s),this.placeBike(),v.view=0,v.yawOff=v.pitchOff=0,C(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45)},placeBike(){const D=i.bike.root;D.position.set(n.x,n.h,n.z),D.rotation.set(-n.pitch,n.heading,n.lean),i.focus.set(n.x,n.h,n.z)},update(D){const F=i.input;if(i.fx.uFade.value=Ge(i.fx.uFade.value,0,3,D),i.fx.uBlur.value=Ge(i.fx.uBlur.value,0,5,D),y(D),F.touchRide=!n.paused&&!n.showResult,n.paused){F.pressed("up")||F.pressed("down")?(a=1-a,P(),i.audio.nav()):F.pressed("back")||F.pressed("start")?T(!1):F.pressed("confirm")&&(a===0?T(!1):(i.audio.select(),i.go("menu",{selectId:t.id}))),i.bike.update(0,0,0,n.steerVis),C(D);return}if(n.showResult){if(F.pressed("up")||F.pressed("down"))m=1-m,B(),i.audio.nav();else if(F.pressed("confirm")){i.audio.select(),m===0?(l&&(i.online.send({t:"start"}),u=!0),i.go("ride",{character:t,online:l})):i.go("menu",{selectId:t.id});return}}else if(F.pressed("pause")||F.pressed("start")){T(!0);return}if(n.phase==="countdown"){n.countdown-=D;const he=Math.ceil(n.countdown);if(he!==n.lastCount){n.lastCount=he;const Be=M(".countdown");Be.textContent=he>0?he:"LOS!",Be.classList.toggle("go",he<=0),Be.classList.remove("show"),Be.offsetWidth,Be.classList.add("show"),he>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}he<=0&&(n.phase="race")}else n.raceTime+=D;F.pressed("klingel")&&i.audio.klingel(),F.pressed("cruise")&&(n.cruise=!n.cruise,M(".cruise-badge").classList.toggle("on",n.cruise),n.cruise?i.audio.select():i.audio.back(),i.input.rumble(.25,60)),n.time+=D;const U=i.world,K=n.crash>0,se=K?0:F.steer;F.l1&&F.r1&&(n.bothHeld=n.time);const ne=Ue.sprint,be=F.pressed("x")||F.pressed("sprint");if(be&&n.sprint==="active")n.sprint="charging",n.sprintT=n.sprintT/ne.dauer*ne.aufladen,i.audio.back();else if(be&&n.phase==="race"&&(n.sprint==="ready"||n.sprint==="charging"&&n.sprintT/ne.aufladen>=ne.abLadung)){const he=n.sprint==="ready"?1:n.sprintT/ne.aufladen;n.sprint="active",n.sprintT=ne.dauer*he,i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.7,300),G("Sprint!")}n.sprint==="active"?(n.sprintT-=D,n.sprintT<=0&&(n.sprint="charging",n.sprintT=0)):n.sprint==="charging"&&(n.sprintT+=D*(1+(ne.windschattenBonus-1)*(n.draft||0)),n.sprintT>=ne.aufladen&&(n.sprint="ready",i.audio.nav()));const ke=n.sprint==="active";let E=F.brake>.1?0:n.cruise||ke?1:F.throttle,O=F.brake;(n.phase==="countdown"||K)&&(E=0),n.phase==="finished"&&(E=0,O=n.speed>4?.25:0),U.groundAt(n.x,n.z,s);const W=Math.sin(n.heading),H=Math.cos(n.heading),Z=U.groundAt(n.x+W*.6,n.z+H*.6,r).h,te=U.groundAt(n.x-W*.6,n.z-H*.6,r).h,fe=Math.atan2(Z-te,1.2);n.pitch=Ge(n.pitch,fe,12,D);const Oe=n.speed,ge=Ue.rollen[i.mode==="cx"?"cx":"rennrad"],Xe=s.surface==="road"?ge.asphalt:s.surface==="gravel"?ge.schotter:ge.wiese,V=ke?Ue.sprint.kraft:1,Et=Yf(t==null?void 0:t.groupset).kraft||1,He=Math.min(Ue.riderPower*Et*V/Math.max(Oe,2.5),340*V)*E,Ve=c.draftFor(n.x,n.z);n.draft=Ge(n.draft||0,Ve.strength,5,D),Ve.rival&&(n.draftName=Ve.rival.name);const Fe=i.mode==="tt"?Ue.zeitfahren.luftwiderstand:1,ve=.5*1.2*.36*Fe*Oe*Oe*(1-Ue.windschatten*n.draft),Ce=O*650,I=n.air?0:Math.sin(n.pitch);let w=(He-ve-(n.air?0:Xe*Ao*hc)-Ao*hc*I)/Ao;w-=Oe>.01?Ce/Ao:0,n.speed=Math.max(0,Oe+w*D),n.speed<.05&&E<.05&&Math.sin(n.pitch)>.02&&(n.speed=0);const q=Math.min(1.5,n.speed*.9+.15)*(1-.55*ft(n.speed/16,0,1));n.heading-=se*q*D,n.x+=Math.sin(n.heading)*n.speed*D,n.z+=Math.cos(n.heading)*n.speed*D;for(const he of c.list){const Be=n.x-he.x,z=n.z-he.z,ue=Math.hypot(Be,z);ue<.9&&ue>.001&&(n.x=he.x+Be/ue*.9,n.z=he.z+z/ue*.9,n.speed*=.98)}if(U.solid)for(const he of U.solid){const Be=n.x-he.x,z=n.z-he.z,ue=Math.hypot(Be,z),J=he.r+.5;ue<J&&ue>.001&&(n.x=he.x+Be/ue*J,n.z=he.z+z/ue*J,n.speed*=.9)}const ee=Math.hypot(n.x,n.z);ee>830&&(n.x*=830/ee,n.z*=830/ee,n.speed*=.9);const re=U.groundAt(n.x,n.z,s).h,Q=U.nearest(n.x,n.z);if(!n.air&&U.drops.length&&Q.found&&Q.dist<U.rhArr[Q.i]+1.2&&n.speed>1.5)for(const he of U.drops){const Be=he.s-U.ds-.2;n.lastS<Be&&Q.s>=Be&&Q.s<he.s+3&&(n.air=!0,n.vy=2.2+n.speed*.12,n.pitch=.32,i.audio.whoosh(.9),i.input.rumble(.3,80))}if(n.air?(n.vy-=hc*D,n.h+=n.vy*D,n.h<=re&&(n.h=re,n.air=!1,n.time-n.bothHeld<.3?(G("Sauber gelandet!"),i.audio.select(),i.input.rumble(.5,120),n.speed*=.92):k("Sturz!",`Beim Landen ${dt("LB")} + ${dt("RB")} gleichzeitig halten`))):n.h=re,!n.air&&!K&&U.rocks){for(const he of U.rocks)if(Math.hypot(n.x-he.x,n.z-he.z)<he.r+.3){const Be=-Math.sign(he.lat)*Math.min(.6,U.rhArr[he.i]*.5);k("Autsch, ein Felsbrocken!","Fahr um die Steine herum",he.s+he.r+1.5,Be);break}}if(K&&(n.crash-=D,n.speed=0,n.crash<=0)){const he=U.poseAt(n.resumeS??(Q.found?Q.s:n.lastS),n.resumeS!=null?n.resumeLat:0,r);n.resumeS=null,n.x=he.x,n.z=he.z,n.heading=he.heading,n.h=U.groundAt(n.x,n.z,s).h}s.surface==="grass"&&n.speed>1?(n.h+=Math.sin(n.time*30)*.01*Math.min(1,n.speed/6),n.shake=1):n.shake=0,n.lean=Ge(n.lean,K?1.35:se*ft(n.speed/9,0,1)*.42,K?10:6,D),n.air&&(n.pitch=Ge(n.pitch,Math.atan2(n.vy,Math.max(n.speed,3))*1.1,5,D)),n.steerVis=Ge(n.steerVis,se*(1-ft(n.speed/14,0,.85)),10,D);let Re=0;E>.05?(Re=Math.max(n.speed/$t/PM,3*E),i.audio.freewheel(D,0)):i.audio.freewheel(D,Math.min(55,n.speed/(2*Math.PI*$t)*24)),this.placeBike(),i.bike.update(D,n.speed,Re,n.steerVis),l&&(f-=D,f<=0&&(f=1/15,i.online.send({t:"s",x:n.x,z:n.z,h:n.h,heading:n.heading,pitch:n.pitch,lean:n.lean,speed:n.speed,crank:Re,steer:n.steerVis,p:S(),f:n.finishTime})));const me=n.speed*3.6;i.audio.setWind(ft(n.speed/15,0,1)*(1-.5*n.draft)),c.showDraft(Ve.rival,Ve.strength,D),M(".draft-badge").classList.toggle("on",n.draft>.08),n.draft>.08&&(M(".draft-name").textContent=`hinter ${n.draftName} · −${Math.round(Ue.windschatten*n.draft*100)} % Wind`,M(".draft-meter i").style.width=`${Math.round(n.draft*100)}%`),i.fx.uLines.value=0,C(D),n.shake&&(i.camera.position.y+=(Math.random()-.5)*.02);const Qe=U.nearest(n.x,n.z);if(Qe.found&&Qe.dist<25){const he=Qe.s,Be=U.length;for(const z of pd)he>z*Be&&he<z*Be+40&&n.cps.add(z);if(n.lastS>Be-60&&he<60){if(n.lap===0)n.lap=1,n.lapStart=n.time,n.cps.clear(),G(`Runde 1 von ${fi}`,"Die Zeit läuft!"),i.audio.lap();else if(n.cps.size===pd.length){n.lastS=he;const z=n.time-n.lapStart,ue=t.bestLap==null||z<t.bestLap;if(ue&&(t={...$i().find(ie=>ie.id===t.id)||t,bestLap:z},ap(t),M(".best").textContent=In(z)),n.lap++,n.lapStart=n.time,n.cps.clear(),n.lap>fi&&n.phase==="race")n.place=b(),n.finishTime=n.raceTime,n.phase="finished",n.cruise=!1,M(".cruise-badge").classList.remove("on"),G(c.list.length?n.place===1?"Sieg!":`Platz ${n.place}`:"Ziel!",In(n.finishTime)),i.audio.success(),i.input.rumble(.8,400),x(n.x,n.h,n.z),i.mode==="tt"&&M(".hud-zeit").classList.add("stoppuhr"),setTimeout(()=>e&&n.phase==="finished"&&N(),2200);else{const J=n.lap===fi&&n.phase==="race";G(ue?"Neue Bestzeit!":J?"Letzte Runde!":`Runde ${n.lap} von ${fi}`,In(z)),i.audio.lap(),i.input.rumble(.5,200)}}}n.lastS=he}M(".speedo-val b").textContent=Math.round(me);let ae="";if(n.air)ae=`Jetzt ${dt("LB")} + ${dt("RB")}!`;else if(U.drops.length&&Q.found&&!K)for(const he of U.drops){const Be=he.s-Q.s;Be>0&&Be<30&&(ae=`Drop in ${Math.ceil(Be)} m – ${dt("LB")} + ${dt("RB")} zum Landen`)}if(ae!==n.hintShown){n.hintShown=ae;const he=M(".drop-hint");he.innerHTML=ae,he.classList.toggle("show",!!ae),he.classList.toggle("now",n.air)}const Te=M(".sprint-bar"),ze=n.sprint==="active"?n.sprintT/ne.dauer:n.sprint==="charging"?n.sprintT/ne.aufladen:1;M(".sprint-fill").style.width=`${(ze*100).toFixed(1)}%`;const $e=n.sprint==="charging"&&ze>=ne.abLadung;Te.className=`sprint-bar ${n.sprint}${$e?" usable":""}`;const Me=i.control==="keys"?'<span class="btn key-space">Leertaste</span>':dt("X"),et=n.sprint==="active"?`${Math.ceil(n.sprintT)} s`:$e?`${Math.round(ze*ne.dauer)} s ${Me}`:n.sprint==="charging"?"lädt …":`bereit ${Me}`;et!==n.sprintInfo&&(n.sprintInfo=et,M(".sprint-info").innerHTML=et),M(".speedo-fill").style.strokeDasharray=`${ft(me/70,0,1)*75} 100`,c.update(D,n.phase!=="countdown",{progress:S(),lateral:Qe.found?Qe.lateral:99},fi*U.length,n.raceTime),M(".place").textContent=n.phase==="countdown"?"–":`${b()}/${c.list.length+1}`,M(".lap").textContent=n.lap?`${Math.min(n.lap,fi)}/${fi}`:"–",M(".time").textContent=n.phase==="finished"?In(n.finishTime):In(n.raceTime),o.draw(n.x,n.z,n.heading,n.lap&&n.phase!=="finished"?n.lastS:null,c.list)},exit(){i.input.touchRide=!1,_(),c.hide(),l&&!u&&(i.online.close(),i.online.listen(null),h==null||h.dispose(),h=null),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0),i.fx.uLines.value=0;const D=i.world.nearest(n.x,n.z);i.npc.s=D.found?D.s:0}}}document.title=Ue.gameName;const gp=document.documentElement.style;gp.setProperty("--gold",Ue.colors.gold);gp.setProperty("--accent",Ue.colors.accent);const gd=()=>new Promise(i=>setTimeout(i,30));async function IM(){const i=document.getElementById("ui"),e=document.getElementById("loading");await Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 64px "Cinzel"')]).catch(()=>{}),await gd(),await gd();const t=new Rx({antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=_d,t.toneMapping=Sl,t.toneMappingExposure=Ue.exposure,document.getElementById("game").appendChild(t.domElement);const n=new un(50,window.innerWidth/window.innerHeight,.1,6e3),s=await kb(),r=new Cu(t,"road",s),a=new Qf;r.scene.add(a.root);const o=t.getDrawingBufferSize(new le),c=new mn(o.x,o.y,{type:On,samples:4}),l=new ly(t,c),h=new hy(r.scene,n);l.addPass(h);const u=new Bs(new le(window.innerWidth/2,window.innerHeight/2),.5,.55,.92);l.addPass(u);const f=new af(Xb);l.addPass(f),l.addPass(new fy);const d={renderer:t,camera:n,world:r,bike:a,composer:l,ui:i,input:new Gb,audio:new $b,fx:f.uniforms,focus:new R,npc:{s:0,speed:6,lateral:1.5,pedal:!0},mode:"road",online:new nb,cloneRider:()=>null,worlds:{road:r},useWorld(p){this.worlds[p]||(this.worlds[p]=new Cu(t,p,s,p==="tt"?this.dorf:null));const x=this.worlds[p];x!==this.world&&(this.world.scene.remove(this.bike.root),x.scene.add(this.bike.root),this.world=x,h.scene=x.scene,this.npc.s=x.length*.1,this.npc.lateral=x.cx?.5:1.5)},async prepareWorld(p){p==="tt"&&!this.dorf&&(this.dorf=await Ob()),this.useWorld(p)},time:0,scenes:{},current:null,currentName:"",go(p,x){var _;(_=this.current)==null||_.exit(),this.currentName=p,this.current=this.scenes[p],this.current.enter(x||{})}};d.scenes={title:Jb(d),transition:eM(d),mode:Tb(d),menu:iM(d),creator:CM(d),ride:LM(d),lobby:wb(d),control:Eb(d),minigame:oM(d),story:SM(d)},Kl(d,br()||np(d),!!br()),d.controlChosen=br(),window.__game=d;function m(){const p=window.innerWidth,x=window.innerHeight;!p||!x||(t.setSize(p,x),l.setSize(p,x),n.aspect=p/x,n.updateProjectionMatrix(),f.uniforms.uAspect.value=p/x)}window.addEventListener("resize",m),m(),window.addEventListener("keydown",p=>{d.audio.unlock(),p.code==="KeyM"&&d.currentName!=="creator"&&d.audio.toggleMute()}),window.addEventListener("pointerdown",()=>d.audio.unlock()),d.go("title"),window.innerWidth&&window.innerHeight&&l.render(0),e.classList.add("done"),setTimeout(()=>e.remove(),900);let v=performance.now();function g(p){requestAnimationFrame(g);const x=Math.min(.05,(p-v)/1e3);v=p,d.time+=x,d.input.update(x),d.input.pressed("any")&&(d.audio.unlock(),d.audio.startMusic()),d.current.update(x),d.world.update(x,d.focus,n,d.time),f.uniforms.uTime.value=d.time,window.innerWidth&&window.innerHeight&&l.render(x)}requestAnimationFrame(g)}IM();
