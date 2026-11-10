var Kp=i=>{throw TypeError(i)};var sr=(i,e,t)=>e.has(i)?Kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Jp(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="170",Qp=0,Ph=1,em=2,$f=1,Xf=2,Qn=3,bi=0,qt=1,en=2,si=0,Us=1,Fr=2,Lh=3,Ih=4,tm=5,Oi=100,nm=101,im=102,sm=103,rm=104,om=200,am=201,cm=202,lm=203,Lc=204,Ic=205,hm=206,um=207,fm=208,dm=209,pm=210,mm=211,gm=212,vm=213,_m=214,Dc=0,kc=1,Uc=2,Hs=3,Nc=4,Fc=5,Oc=6,zc=7,Gl=0,xm=1,ym=2,yi=0,jf=1,qf=2,Yf=3,Wl=4,bm=5,Zf=6,Kf=7,Jf=300,Vs=301,Gs=302,Bc=303,Hc=304,ya=306,Cn=1e3,_i=1001,Vc=1002,cn=1003,Mm=1004,Jr=1005,zn=1006,Ca=1007,Vi=1008,oi=1009,Qf=1010,ed=1011,Or=1012,$l=1013,Xi=1014,Rn=1015,Vn=1016,Xl=1017,jl=1018,Ws=1020,td=35902,nd=1021,id=1022,vn=1023,sd=1024,rd=1025,Ns=1026,$s=1027,ql=1028,Yl=1029,od=1030,Zl=1031,Kl=1033,Wo=33776,$o=33777,Xo=33778,jo=33779,Gc=35840,Wc=35841,$c=35842,Xc=35843,jc=36196,qc=37492,Yc=37496,Zc=37808,Kc=37809,Jc=37810,Qc=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,cl=37820,ll=37821,qo=36492,hl=36494,ul=36495,ad=36283,fl=36284,dl=36285,pl=36286,Sm=3200,Tm=3201,Jl=0,wm=1,vi="",_t="srgb",Ks="srgb-linear",ba="linear",ut="srgb",is=7680,Dh=519,Em=512,Am=513,Cm=514,cd=515,Rm=516,Pm=517,Lm=518,Im=519,ml=35044,kh="300 es",ni=2e3,sa=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const Tr=Math.PI/180,zr=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Ql(i,e){return(i%e+e)%e}function Dm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function km(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function Um(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function Nm(i,e=1){return e-Math.abs(Ql(i,e*2)-e)}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bm(i,e){return i+Math.random()*(e-i)}function Hm(i){return i*(.5-Math.random())}function Vm(i){i!==void 0&&(Uh=i);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gm(i){return i*Tr}function Wm(i){return i*zr}function $m(i){return(i&i-1)===0&&i!==0}function Xm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gl={DEG2RAD:Tr,RAD2DEG:zr,generateUUID:Pn,clamp:Pt,euclideanModulo:Ql,mapLinear:Dm,inverseLerp:km,lerp:wr,damp:Um,pingpong:Nm,smoothstep:Fm,smootherstep:Om,randInt:zm,randFloat:Bm,randFloatSpread:Hm,seededRandom:Vm,degToRad:Gm,radToDeg:Wm,isPowerOfTwo:$m,ceilPowerOfTwo:Xm,floorPowerOfTwo:jm,setQuaternionFromProperEuler:qm,normalize:ft,denormalize:An};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=s[0],v=s[3],p=s[6],y=s[1],_=s[4],x=s[7],E=s[2],M=s[5],T=s[8];return r[0]=a*g+o*y+c*E,r[3]=a*v+o*_+c*M,r[6]=a*p+o*x+c*T,r[1]=l*g+h*y+u*E,r[4]=l*v+h*_+u*M,r[7]=l*p+h*x+u*T,r[2]=d*g+f*y+m*E,r[5]=d*v+f*_+m*M,r[8]=d*p+f*x+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Qe;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ym(){const i=Br("canvas");return i.style.display="block",i}const Nh={};function yr(i){i in Nh||(Nh[i]=!0,console.warn(i))}function Zm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Km(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fh=[.64,.33,.3,.6,.15,.06],Oh=[.2126,.7152,.0722],zh=[.3127,.329],Bh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Ks]:{primaries:Fh,whitePoint:zh,transfer:ba,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:Oh,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:Fh,whitePoint:zh,transfer:ut,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:Oh,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});let ss;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=Br("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Nt extends Js{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=_i,s=_i,r=zn,a=Vi,o=vn,c=oi,l=Nt.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Pn(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Jf;Nt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],g=c[2],v=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+v)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(f+1)/2,E=(p+1)/2,M=(h+d)/4,T=(u+g)/4,R=(m+v)/4;return _>x&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((v-m)*(v-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(v-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends n0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==m){let v=1-o;const p=c*d+l*f+h*m+u*g,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),M=Math.atan2(E,p*y);v=Math.sin(v*M)/E,o=Math.sin(o*M)/E}const x=o*y;if(c=c*v+d*x,l=l*v+f*x,h=h*v+m*x,u=u*v+g*x,v===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new C,Vh=new xt;class Ki{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),eo.subVectors(this.max,rr),rs.subVectors(e.a,rr),os.subVectors(e.b,rr),as.subVectors(e.c,rr),li.subVectors(os,rs),hi.subVectors(as,os),Ti.subVectors(rs,as);let t=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ti.z,Ti.y,li.z,0,-li.x,hi.z,0,-hi.x,Ti.z,0,-Ti.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ti.y,Ti.x,0];return!Ia(t,rs,os,as,eo)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,rs,os,as,eo))?!1:(to.crossVectors(li,hi),t=[to.x,to.y,to.z],Ia(t,rs,os,as,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,Qr=new Ki,rs=new C,os=new C,as=new C,li=new C,hi=new C,Ti=new C,rr=new C,eo=new C,to=new C,wi=new C;function Ia(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const s0=new Ki,or=new C,Da=new C;class Ji{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Da)),this.expandByPoint(or.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new C,ka=new C,no=new C,ui=new C,Ua=new C,io=new C,Na=new C;class eh{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ka.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=ui.dot(this.direction),c=-ui.dot(no),l=ui.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ka).addScaledVector(no,d),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){Ua.subVectors(t,e),io.subVectors(n,e),Na.crossVectors(Ua,io);let a=this.direction.dot(Na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(io.crossVectors(ui,io));if(c<0)return null;const l=o*this.direction.dot(Ua.cross(ui));if(l<0||c+l>a)return null;const h=-o*ui.dot(Na);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,o0)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),fi.crossVectors(n,nn),fi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),fi.crossVectors(n,nn)),fi.normalize(),so.crossVectors(nn,fi),s[0]=fi.x,s[4]=so.x,s[8]=nn.x,s[1]=fi.y,s[5]=so.y,s[9]=nn.y,s[2]=fi.z,s[6]=so.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],v=n[10],p=n[14],y=n[3],_=n[7],x=n[11],E=n[15],M=s[0],T=s[4],R=s[8],S=s[12],b=s[1],P=s[5],N=s[9],B=s[13],U=s[2],V=s[6],D=s[10],O=s[14],k=s[3],J=s[7],ce=s[11],le=s[15];return r[0]=a*M+o*b+c*U+l*k,r[4]=a*T+o*P+c*V+l*J,r[8]=a*R+o*N+c*D+l*ce,r[12]=a*S+o*B+c*O+l*le,r[1]=h*M+u*b+d*U+f*k,r[5]=h*T+u*P+d*V+f*J,r[9]=h*R+u*N+d*D+f*ce,r[13]=h*S+u*B+d*O+f*le,r[2]=m*M+g*b+v*U+p*k,r[6]=m*T+g*P+v*V+p*J,r[10]=m*R+g*N+v*D+p*ce,r[14]=m*S+g*B+v*O+p*le,r[3]=y*M+_*b+x*U+E*k,r[7]=y*T+_*P+x*V+E*J,r[11]=y*R+_*N+x*D+E*ce,r[15]=y*S+_*B+x*O+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+v*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],v=e[14],p=e[15],y=u*v*l-g*d*l+g*c*f-o*v*f-u*c*p+o*d*p,_=m*d*l-h*v*l-m*c*f+a*v*f+h*c*p-a*d*p,x=h*g*l-m*u*l+m*o*f-a*g*f-h*o*p+a*u*p,E=m*u*c-h*g*c-m*o*d+a*g*d+h*o*v-a*u*v,M=t*y+n*_+s*x+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=y*T,e[1]=(g*d*r-u*v*r-g*s*f+n*v*f+u*s*p-n*d*p)*T,e[2]=(o*v*r-g*c*r+g*s*l-n*v*l-o*s*p+n*c*p)*T,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*T,e[4]=_*T,e[5]=(h*v*r-m*d*r+m*s*f-t*v*f-h*s*p+t*d*p)*T,e[6]=(m*c*r-a*v*r-m*s*l+t*v*l+a*s*p-t*c*p)*T,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*T,e[8]=x*T,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*T,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*g*s-m*u*s+m*n*d-t*g*d-h*n*v+t*u*v)*T,e[14]=(m*o*s-a*g*s-m*n*c+t*g*c+a*n*v-t*o*v)*T,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,g=a*h,v=a*u,p=o*u,y=c*l,_=c*h,x=c*u,E=n.x,M=n.y,T=n.z;return s[0]=(1-(g+p))*E,s[1]=(f+x)*E,s[2]=(m-_)*E,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(v+y)*M,s[7]=0,s[8]=(m+_)*T,s[9]=(v-y)*T,s[10]=(1-(d+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ni){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,m;if(o===ni)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===sa)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h;let m,g;if(o===ni)m=(a+r)*u,g=-2*u;else if(o===sa)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new C,Sn=new Ie,r0=new C(0,0,0),o0=new C(1,1,1),fi=new C,so=new C,nn=new C,Gh=new Ie,Wh=new xt;class Ht{constructor(e=0,t=0,n=0,s=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const $h=new C,ls=new xt,Yn=new Ie,ro=new C,ar=new C,c0=new C,l0=new xt,Xh=new C(1,0,0),jh=new C(0,1,0),qh=new C(0,0,1),Yh={type:"added"},h0={type:"removed"},hs={type:"childadded",child:null},Fa={type:"childremoved",child:null};class wt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new C,t=new Ht,n=new xt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Qe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ar,ro,this.up):Yn.lookAt(ro,ar,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Yn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new C(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new C,Zn=new C,Oa=new C,Kn=new C,us=new C,fs=new C,Zh=new C,za=new C,Ba=new C,Ha=new C,Va=new Tt,Ga=new Tt,Wa=new Tt;class gn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Zn.subVectors(n,t),Oa.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Zn),c=Tn.dot(Oa),l=Zn.dot(Zn),h=Zn.dot(Oa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Zn.subVectors(e,t),Tn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;us.subVectors(s,n),fs.subVectors(r,n),za.subVectors(e,n);const c=us.dot(za),l=fs.dot(za);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,s);const h=us.dot(Ba),u=fs.dot(Ba);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(us,a);Ha.subVectors(e,r);const f=us.dot(Ha),m=fs.dot(Ha);if(m>=0&&f<=m)return t.copy(r);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(fs,o);const v=h*m-f*u;if(v<=0&&u-h>=0&&f-m>=0)return Zh.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Zh,o);const p=1/(v+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},oo={h:0,s:0,l:0};function $a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Ql(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$a(a,r,e+1/3),this.g=$a(a,r,e),this.b=$a(a,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return it.fromWorkingColorSpace(zt.copy(this),e),Math.round(Pt(zt.r*255,0,255))*65536+Math.round(Pt(zt.g*255,0,255))*256+Math.round(Pt(zt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=_t){it.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(oo);const n=wr(di.h,oo.h,t),s=wr(di.s,oo.s,t),r=wr(di.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ve;ve.NAMES=dd;let u0=0;class Ln extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Pn(),this.name="",this.blending=Us,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Ic,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ma extends Ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new C,ao=new fe;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class pd extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let f0=0;const hn=new Ie,Xa=new wt,ds=new C,sn=new Ki,cr=new Ki,Dt=new C;class lt extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?md:pd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(sn.min,cr.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,cr.max),sn.expandByPoint(Dt)):(sn.expandByPoint(cr.min),sn.expandByPoint(cr.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(e,l),Dt.add(ds)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new C,c[R]=new C;const l=new C,h=new C,u=new C,d=new fe,f=new fe,m=new fe,g=new C,v=new C;function p(R,S,b){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),v.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[R].add(g),o[S].add(g),o[b].add(g),c[R].add(v),c[S].add(v),c[b].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const b=y[R],P=b.start,N=b.count;for(let B=P,U=P+N;B<U;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new C,x=new C,E=new C,M=new C;function T(R){E.fromBufferAttribute(s,R),M.copy(E);const S=o[R];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(M,S);const P=x.dot(c[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,S=y.length;R<S;++R){const b=y[R],P=b.start,N=b.count;for(let B=P,U=P+N;B<U;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let g=0,v=c.length;g<v;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new Ie,Ei=new eh,co=new Ji,Jh=new C,lo=new C,ho=new C,uo=new C,ja=new C,fo=new C,Qh=new C,po=new C;class pe extends wt{constructor(e=new lt,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ja.fromBufferAttribute(u,e),a?fo.addScaledVector(ja,h):fo.addScaledVector(ja.sub(t),h))}t.add(fo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(co.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(co,Jh)===null||Ei.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=a[v.materialIndex],y=Math.max(v.start,f.start),_=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let x=y,E=_;x<E;x+=3){const M=o.getX(x),T=o.getX(x+1),R=o.getX(x+2);s=mo(this,p,e,n,l,h,u,M,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const y=o.getX(v),_=o.getX(v+1),x=o.getX(v+2);s=mo(this,a,e,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=a[v.materialIndex],y=Math.max(v.start,f.start),_=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=y,E=_;x<E;x+=3){const M=x,T=x+1,R=x+2;s=mo(this,p,e,n,l,h,u,M,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const y=v,_=v+1,x=v+2;s=mo(this,a,e,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function d0(i,e,t,n,s,r,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bi,o),c===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(po);return l<t.near||l>t.far?null:{distance:l,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,ho),i.getVertexPosition(l,uo);const h=d0(i,e,t,n,lo,ho,uo,Qh);if(h){const u=new C;gn.getBarycoord(Qh,lo,ho,uo,u),s&&(h.uv=gn.getInterpolatedAttribute(s,o,c,l,u,new fe)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,l,u,new fe)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};gn.getNormal(lo,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}class nt extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function m(g,v,p,y,_,x,E,M,T,R,S){const b=x/T,P=E/R,N=x/2,B=E/2,U=M/2,V=T+1,D=R+1;let O=0,k=0;const J=new C;for(let ce=0;ce<D;ce++){const le=ce*P-B;for(let Se=0;Se<V;Se++){const He=Se*b-N;J[g]=He*y,J[v]=le*_,J[p]=U,l.push(J.x,J.y,J.z),J[g]=0,J[v]=0,J[p]=M>0?1:-1,h.push(J.x,J.y,J.z),u.push(Se/T),u.push(1-ce/R),O+=1}}for(let ce=0;ce<R;ce++)for(let le=0;le<T;le++){const Se=d+le+V*ce,He=d+le+V*(ce+1),F=d+(le+1)+V*(ce+1),re=d+(le+1)+V*ce;c.push(Se,He,re),c.push(He,F,re),k+=6}o.addGroup(f,k,S),f+=k,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const s in n)e[s]=n[s]}return e}function p0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const js={clone:Xs,merge:$t};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new C,eu=new fe,tu=new fe;class pn extends vd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class v0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new pn(ps,ms,e,t);r.layers=this.layers,this.add(r);const a=new pn(ps,ms,e,t);a.layers=this.layers,this.add(a);const o=new pn(ps,ms,e,t);o.layers=this.layers,this.add(o);const c=new pn(ps,ms,e,t);c.layers=this.layers,this.add(c);const l=new pn(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _d extends Nt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _0 extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _d(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nt(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:si});r.uniforms.tEquirect.value=t;const a=new pe(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=zn),new v0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const qa=new C,x0=new C,y0=new Qe;class Ui{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qa.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y0.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ji,go=new C;class th{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],g=s[10],v=s[11],p=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,v-f,x-p).normalize(),n[1].setComponents(c+r,d+l,v+f,x+p).normalize(),n[2].setComponents(c+a,d+h,v+m,x+y).normalize(),n[3].setComponents(c-a,d-h,v-m,x-y).normalize(),n[4].setComponents(c-o,d-u,v-g,x-_).normalize(),t===ni)n[5].setComponents(c+o,d+u,v+g,x+_).normalize();else if(t===sa)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function b0(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class an extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],g=[],v=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<l;_++){const x=_*u-r;m.push(x,-y,0),g.push(0,0,1),v.push(_/o),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,x=y+l*(p+1),E=y+1+l*(p+1),M=y+1+l*p;f.push(_,x,M),f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ov=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
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
#endif`,lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Rv=`#define DISTANCE
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
}`,Pv=`#define DISTANCE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`uniform float scale;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Fv=`#define LAMBERT
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
}`,Ov=`#define LAMBERT
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
}`,zv=`#define MATCAP
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
}`,Bv=`#define MATCAP
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
}`,Hv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,$v=`#define STANDARD
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
}`,Xv=`#define STANDARD
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
}`,jv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Yv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Jv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:E0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:L0,begin_vertex:I0,beginnormal_vertex:D0,bsdfs:k0,iridescence_fragment:U0,bumpmap_pars_fragment:N0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:B0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:$0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:j0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:Z0,emissivemap_pars_fragment:K0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:cg,gradientmap_pars_fragment:lg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:vg,lights_phong_pars_fragment:_g,lights_physical_fragment:xg,lights_physical_pars_fragment:yg,lights_fragment_begin:bg,lights_fragment_maps:Mg,lights_fragment_end:Sg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Dg,morphinstance_vertex:kg,morphcolor_vertex:Ug,morphnormal_vertex:Ng,morphtarget_pars_vertex:Fg,morphtarget_vertex:Og,normal_fragment_begin:zg,normal_fragment_maps:Bg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:qg,opaque_fragment:Yg,packing:Zg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:ov,skinbase_vertex:av,skinning_pars_vertex:cv,skinning_vertex:lv,skinnormal_vertex:hv,specularmap_fragment:uv,specularmap_pars_fragment:fv,tonemapping_fragment:dv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:vv,uv_pars_vertex:_v,uv_vertex:xv,worldpos_vertex:yv,background_vert:bv,background_frag:Mv,backgroundCube_vert:Sv,backgroundCube_frag:Tv,cube_vert:wv,cube_frag:Ev,depth_vert:Av,depth_frag:Cv,distanceRGBA_vert:Rv,distanceRGBA_frag:Pv,equirect_vert:Lv,equirect_frag:Iv,linedashed_vert:Dv,linedashed_frag:kv,meshbasic_vert:Uv,meshbasic_frag:Nv,meshlambert_vert:Fv,meshlambert_frag:Ov,meshmatcap_vert:zv,meshmatcap_frag:Bv,meshnormal_vert:Hv,meshnormal_frag:Vv,meshphong_vert:Gv,meshphong_frag:Wv,meshphysical_vert:$v,meshphysical_frag:Xv,meshtoon_vert:jv,meshtoon_frag:qv,points_vert:Yv,points_frag:Zv,shadow_vert:Kv,shadow_frag:Jv,sprite_vert:Qv,sprite_frag:e_},Te={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:$t([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:$t([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:$t([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:$t([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:$t([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:$t([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:$t([Te.common,Te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:$t([Te.lights,Te.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const vo={r:0,b:0,g:0},Ci=new Ht,t_=new Ie;function n_(i,e,t,n,s,r,a){const o=new ve(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function g(y){let _=!1;const x=m(y);x===null?p(o,c):x&&x.isColor&&(p(x,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===ya)?(h===void 0&&(h=new pe(new nt(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Xs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(_.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(Ci)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==ut,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pe(new an(2,2),new Vt({name:"BackgroundMaterial",uniforms:Xs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(vo,gd(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:v}}function i_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,P,N,B,U){let V=!1;const D=u(B,N,P);r!==D&&(r=D,l(r.object)),V=f(b,B,N,U),V&&m(b,B,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(b,P,N,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,N){const B=N.wireframe===!0;let U=n[b.id];U===void 0&&(U={},n[b.id]=U);let V=U[P.id];V===void 0&&(V={},U[P.id]=V);let D=V[B];return D===void 0&&(D=d(c()),V[B]=D),D}function d(b){const P=[],N=[],B=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,N,B){const U=r.attributes,V=P.attributes;let D=0;const O=N.getAttributes();for(const k in O)if(O[k].location>=0){const ce=U[k];let le=V[k];if(le===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),ce===void 0||ce.attribute!==le||le&&ce.data!==le.data)return!0;D++}return r.attributesNum!==D||r.index!==B}function m(b,P,N,B){const U={},V=P.attributes;let D=0;const O=N.getAttributes();for(const k in O)if(O[k].location>=0){let ce=V[k];ce===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const le={};le.attribute=ce,ce&&ce.data&&(le.data=ce.data),U[k]=le,D++}r.attributes=U,r.attributesNum=D,r.index=B}function g(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function v(b){p(b,0)}function p(b,P){const N=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;N[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),U[b]!==P&&(i.vertexAttribDivisor(b,P),U[b]=P)}function y(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==b[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function _(b,P,N,B,U,V,D){D===!0?i.vertexAttribIPointer(b,P,N,U,V):i.vertexAttribPointer(b,P,N,B,U,V)}function x(b,P,N,B){g();const U=B.attributes,V=N.getAttributes(),D=P.defaultAttributeValues;for(const O in V){const k=V[O];if(k.location>=0){let J=U[O];if(J===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),J!==void 0){const ce=J.normalized,le=J.itemSize,Se=e.get(J);if(Se===void 0)continue;const He=Se.buffer,F=Se.type,re=Se.bytesPerElement,ee=F===i.INT||F===i.UNSIGNED_INT||J.gpuType===$l;if(J.isInterleavedBufferAttribute){const oe=J.data,z=oe.stride,q=J.offset;if(oe.isInstancedInterleavedBuffer){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,oe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<k.locationSize;ae++)v(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae,le/k.locationSize,F,ce,z*re,(q+le/k.locationSize*ae)*re,ee)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe,J.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<k.locationSize;oe++)v(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let oe=0;oe<k.locationSize;oe++)_(k.location+oe,le/k.locationSize,F,ce,le*re,le/k.locationSize*oe*re,ee)}}else if(D!==void 0){const ce=D[O];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(k.location,ce);break;case 3:i.vertexAttrib3fv(k.location,ce);break;case 4:i.vertexAttrib4fv(k.location,ce);break;default:i.vertexAttrib1fv(k.location,ce)}}}}y()}function E(){R();for(const b in n){const P=n[b];for(const N in P){const B=P[N];for(const U in B)h(B[U].object),delete B[U];delete P[N]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const B=P[N];for(const U in B)h(B[U].object),delete B[U];delete P[N]}delete n[b.id]}function T(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const B=N[b.id];for(const U in B)h(B[U].object),delete B[U];delete N[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:v,disableUnusedAttributes:y}}function s_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function r_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:E,maxSamples:M}}function o_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ui,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,v=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!v)r?h(null):l();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let E=0;E!==_;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let v=null;if(g!==0){if(v=c.value,m!==!0||v===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<p)&&(v=new Float32Array(p));for(let _=0,x=f;_!==g;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(v,x),v[x+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function a_(i){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=Vs:o===Hc&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bc||o===Hc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nh extends vd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,nu=[.125,.215,.35,.446,.526,.582],zi=20,Ya=new nh,iu=new ve;let Za=null,Ka=0,Ja=0,Qa=!1;const Ni=(1+Math.sqrt(5))/2,gs=1/Ni,su=[new C(-Ni,gs,0),new C(Ni,gs,0),new C(-gs,0,Ni),new C(gs,0,Ni),new C(0,Ni,-gs),new C(0,Ni,gs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ka,Ja),this._renderer.xr.enabled=Qa,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Vn,format:vn,colorSpace:Ks,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=l_(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,s){const o=new pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(iu),h.toneMapping=yi,h.autoClear=!1;const f=new Ma({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new pe(new nt,f);let g=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,g=!0):(f.color.copy(iu),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;_o(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Vs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_o(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=su[(s-r-1)%su.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),g=r/m,v=isFinite(r)?1+Math.floor(h*g):zi;v>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zi}`);const p=[];let y=0;for(let T=0;T<zi;++T){const R=T/g,S=Math.exp(-R*R/2);p.push(S),T===0?y+=S:T<v&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[s],E=3*x*(s>_-Cs?s-_+Cs:0),M=4*(this._cubeSize-x);_o(t,E,M,3*x,2*x),c.setRenderTarget(t),c.render(u,Ya)}}function c_(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Cs?c=nu[a-i+Cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,v=2,p=1,y=new Float32Array(g*m*f),_=new Float32Array(v*m*f),x=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,R=M>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,g*m*M),_.set(d,v*m*M);const b=[M,M,M,M,M,M];x.set(b,p*m*M)}const E=new lt;E.setAttribute("position",new Ct(y,g)),E.setAttribute("uv",new Ct(_,v)),E.setAttribute("faceIndex",new Ct(x,p)),e.push(E),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function l_(i,e,t){const n=new Float32Array(zi),s=new C(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ih(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ou(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function au(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function h_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Bc||c===Hc,h=c===Vs||c===Gs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vl(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new vl(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function u_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f_(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let v=0,p=g.length;v<p;v++)e.remove(g[v])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let v=0,p=g.length;v<p;v++)e.update(g[v],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,x=y.length;_<x;_+=3){const E=y[_+0],M=y[_+1],T=y[_+2];d.push(E,M,M,T,T,E)}}else if(m!==void 0){const y=m.array;g=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const E=_+0,M=_+1,T=_+2;d.push(E,M,M,T,T,E)}}else return;const v=new(ld(d)?md:pd)(d,1);v.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,v)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function d_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];t.update(v,n,1)}function u(d,f,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){const n=new WeakMap,s=new Tt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let E=o.attributes.position.count*x,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*M*4*u),R=new ud(T,E,M,u);R.type=Rn,R.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const N=p[P],B=y[P],U=_[P],V=E*M*4*P;for(let D=0;D<N.count;D++){const O=D*S;m===!0&&(s.fromBufferAttribute(N,D),T[V+O+0]=s.x,T[V+O+1]=s.y,T[V+O+2]=s.z,T[V+O+3]=0),g===!0&&(s.fromBufferAttribute(B,D),T[V+O+4]=s.x,T[V+O+5]=s.y,T[V+O+6]=s.z,T[V+O+7]=0),v===!0&&(s.fromBufferAttribute(U,D),T[V+O+8]=s.x,T[V+O+9]=s.y,T[V+O+10]=s.z,T[V+O+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new fe(E,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function g_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class yd extends Nt{constructor(e,t,n,s,r,a,o,c,l,h=Ns){if(h!==Ns&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=Xi),n===void 0&&h===$s&&(n=Ws),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bd=new Nt,cu=new yd(1,1),Md=new ud,Sd=new i0,Td=new _d,lu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function Qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lu[s];if(r===void 0&&(r=new Float32Array(s),lu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sa(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function v_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function b_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),It(t,n)}}function M_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),It(t,n)}}function S_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),It(t,n)}}function T_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function I_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cu.compareFunction=cd,r=cu):r=bd,t.setTexture2D(e||r,s)}function D_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sd,s)}function k_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Td,s)}function U_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Md,s)}function N_(i){switch(i){case 5126:return v_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return b_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return C_;case 36294:return R_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return U_}}function F_(i,e){i.uniform1fv(this.addr,e)}function O_(i,e){const t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function z_(i,e){const t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function B_(i,e){const t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function H_(i,e){const t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){const t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G_(i,e){const t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W_(i,e){i.uniform1iv(this.addr,e)}function $_(i,e){i.uniform2iv(this.addr,e)}function X_(i,e){i.uniform3iv(this.addr,e)}function j_(i,e){i.uniform4iv(this.addr,e)}function q_(i,e){i.uniform1uiv(this.addr,e)}function Y_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function K_(i,e){i.uniform4uiv(this.addr,e)}function J_(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bd,r[a])}function Q_(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sd,r[a])}function ex(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Td,r[a])}function tx(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Md,r[a])}function nx(i){switch(i){case 5126:return F_;case 35664:return O_;case 35665:return z_;case 35666:return B_;case 35674:return H_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return $_;case 35668:case 35672:return X_;case 35669:case 35673:return j_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}class ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=N_(t.type)}}class sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}}class rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function ox(i,e,t){const n=i.name,s=n.length;for(ec.lastIndex=0;;){const r=ec.exec(n),a=ec.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){pu(t,l===void 0?new ix(o,i,e):new sx(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new rx(o),pu(t,u)),t=u}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ox(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ax=37297;let cx=0;function lx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gu=new Qe;function hx(i){it._getMatrix(gu,it.workingColorSpace,i);const e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case ba:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lx(i.getShaderSource(e),a)}else return s}function ux(i,e){const t=hx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fx(i,e){let t;switch(e){case jf:t="Linear";break;case qf:t="Reinhard";break;case Yf:t="Cineon";break;case Wl:t="ACESFilmic";break;case Zf:t="AgX";break;case Kf:t="Neutral";break;case bm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xo=new C;function dx(){it.getLuminanceCoefficients(xo);const i=xo.x.toFixed(4),e=xo.y.toFixed(4),t=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function mx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function _u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(vx,xx)}const _x=new Map;function xx(i,e){let t=et[e];if(t===void 0){const n=_x.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(yx,bx)}function bx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Mx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case xm:e="ENVMAP_BLENDING_MIX";break;case ym:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ax(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mx(t),l=Sx(t),h=Tx(t),u=wx(t),d=Ex(t),f=px(t),m=mx(r),g=s.createProgram();let v,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(v=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?et.tonemapping_pars_fragment:"",t.toneMapping!==yi?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=_l(a),a=_u(a,t),a=xu(a,t),o=_l(o),o=_u(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+v+a,x=y+p+o,E=mu(s,s.VERTEX_SHADER,_),M=mu(s,s.FRAGMENT_SHADER,x);s.attachShader(g,E),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(M).trim();let V=!0,D=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,M);else{const O=vu(s,E,"vertex"),k=vu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+O+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||U==="")&&(D=!1);D&&(P.diagnostics={runnable:V,programLog:N,vertexShader:{log:B,prefix:v},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(M),R=new Yo(s,g),S=gx(s,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,ax)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=M,this}let Cx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Px(e),t.set(e,n)),n}}class Px{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}}function Lx(i,e,t,n,s,r,a){const o=new fd,c=new Rx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,b,P,N,B){const U=N.fog,V=B.geometry,D=S.isMeshStandardMaterial?N.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),k=O&&O.mapping===ya?O.image.height:null,J=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=ce!==void 0?ce.length:0;let Se=0;V.morphAttributes.position!==void 0&&(Se=1),V.morphAttributes.normal!==void 0&&(Se=2),V.morphAttributes.color!==void 0&&(Se=3);let He,F,re,ee;if(J){const ht=Fn[J];He=ht.vertexShader,F=ht.fragmentShader}else He=S.vertexShader,F=S.fragmentShader,c.update(S),re=c.getVertexShaderID(S),ee=c.getFragmentShaderID(S);const oe=i.getRenderTarget(),z=i.state.buffers.depth.getReversed(),q=B.isInstancedMesh===!0,ae=B.isBatchedMesh===!0,ne=!!S.map,G=!!S.matcap,ie=!!O,I=!!S.aoMap,ue=!!S.lightMap,te=!!S.bumpMap,me=!!S.normalMap,ge=!!S.displacementMap,Ue=!!S.emissiveMap,_e=!!S.metalnessMap,L=!!S.roughnessMap,w=S.anisotropy>0,X=S.clearcoat>0,se=S.dispersion>0,j=S.iridescence>0,K=S.sheen>0,Ee=S.transmission>0,Me=w&&!!S.anisotropyMap,Ae=X&&!!S.clearcoatMap,Ye=X&&!!S.clearcoatNormalMap,de=X&&!!S.clearcoatRoughnessMap,we=j&&!!S.iridescenceMap,Ge=j&&!!S.iridescenceThicknessMap,je=K&&!!S.sheenColorMap,Le=K&&!!S.sheenRoughnessMap,tt=!!S.specularMap,xe=!!S.specularColorMap,Xe=!!S.specularIntensityMap,H=Ee&&!!S.transmissionMap,ye=Ee&&!!S.thicknessMap,Q=!!S.gradientMap,he=!!S.alphaMap,Pe=S.alphaTest>0,Ce=!!S.alphaHash,Ke=!!S.extensions;let bt=yi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(bt=i.toneMapping);const Ft={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:F,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ae,batchingColor:ae&&B._colorsTexture!==null,instancing:q,instancingColor:q&&B.instanceColor!==null,instancingMorph:q&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ks,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:G,envMap:ie,envMapMode:ie&&O.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:ue,bumpMap:te,normalMap:me,displacementMap:d&&ge,emissiveMap:Ue,normalMapObjectSpace:me&&S.normalMapType===wm,normalMapTangentSpace:me&&S.normalMapType===Jl,metalnessMap:_e,roughnessMap:L,anisotropy:w,anisotropyMap:Me,clearcoat:X,clearcoatMap:Ae,clearcoatNormalMap:Ye,clearcoatRoughnessMap:de,dispersion:se,iridescence:j,iridescenceMap:we,iridescenceThicknessMap:Ge,sheen:K,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:tt,specularColorMap:xe,specularIntensityMap:Xe,transmission:Ee,transmissionMap:H,thicknessMap:ye,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Us&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:Ce,combine:S.combine,mapUv:ne&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:ue&&g(S.lightMap.channel),bumpMapUv:te&&g(S.bumpMap.channel),normalMapUv:me&&g(S.normalMap.channel),displacementMapUv:ge&&g(S.displacementMap.channel),emissiveMapUv:Ue&&g(S.emissiveMap.channel),metalnessMapUv:_e&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:Me&&g(S.anisotropyMap.channel),clearcoatMapUv:Ae&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(S.sheenRoughnessMap.channel),specularMapUv:tt&&g(S.specularMap.channel),specularColorMapUv:xe&&g(S.specularColorMap.channel),specularIntensityMapUv:Xe&&g(S.specularIntensityMap.channel),transmissionMapUv:H&&g(S.transmissionMap.channel),thicknessMapUv:ye&&g(S.thicknessMap.channel),alphaMapUv:he&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(ne||he),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:z,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:Ue&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&S.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const b=m[S.type];let P;if(b){const N=Fn[b];P=js.clone(N.uniforms)}else P=S.uniforms;return P}function E(S,b){let P;for(let N=0,B=h.length;N<B;N++){const U=h[N];if(U.cacheKey===b){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Ax(i,b,S,r),h.push(P)),P}function M(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:R}}function Ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Su(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,g,v){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:v},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=v),e++,p}function o(u,d,f,m,g,v){const p=a(u,d,f,m,g,v);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,g,v){const p=a(u,d,f,m,g,v);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Dx),n.length>1&&n.sort(d||Mu),s.length>1&&s.sort(d||Mu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function kx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Su,i.set(n,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ux(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fx=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zx(i){const e=new Ux,t=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Ie,a=new Ie;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,g=0,v=0,p=0,y=0,_=0,x=0,E=0,M=0,T=0;l.sort(Ox);for(let S=0,b=l.length;S<b;S++){const P=l[S],N=P.color,B=P.intensity,U=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],B);T++}else if(P.isDirectionalLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,k=t.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(N).multiplyScalar(B),D.distance=U,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[g]=D;const O=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,O.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=V,x++}g++}else if(P.isRectAreaLight){const D=e.get(P);D.color.copy(N).multiplyScalar(B),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=D,v++}else if(P.isPointLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const O=P.shadow,k=t.get(P);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=D,m++}else if(P.isHemisphereLight){const D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(B),D.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=D,p++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==v||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=v,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,R.directionalLength=f,R.pointLength=m,R.spotLength=g,R.rectAreaLength=v,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=T,n.version=Fx++)}function c(l,h){let u=0,d=0,f=0,m=0,g=0;const v=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),a.identity(),r.copy(_.matrixWorld),r.premultiply(v),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(v),g++}}}return{setup:o,setupView:c,state:n}}function Tu(i){const e=new zx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Bx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Tu(i),e.set(s,[o])):r>=a.length?(o=new Tu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hx extends Ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;function $x(i,e,t){let n=new th;const s=new fe,r=new fe,a=new Tt,o=new Hx({depthPacking:Tm}),c=new Vx,l={},h=t.maxTextureSize,u={[bi]:qt,[qt]:bi,[en]:en},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Gx,fragmentShader:Wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new lt;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pe(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(M,T,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==Qn&&this.type===Qn,U=p===Qn&&this.type!==Qn;for(let V=0,D=M.length;V<D;V++){const O=M[V],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||B===!0||U===!0){const le=this.type!==Qn?{minFilter:cn,magFilter:cn}:{};k.map!==null&&k.map.dispose(),k.map=new _n(s.x,s.y,le),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ce=k.getViewportCount();for(let le=0;le<ce;le++){const Se=k.getViewport(le);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(a),k.updateMatrices(O,le),n=k.getFrustum(),x(T,R,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===Qn&&y(k,R),k.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(S,b,P)};function y(M,T){const R=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,R,f,g,null)}function _(M,T,R,S){let b=null;const P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=b.uuid,B=T.uuid;let U=l[N];U===void 0&&(U={},l[N]=U);let V=U[B];V===void 0&&(V=b.clone(),U[B]=V,T.addEventListener("dispose",E)),b=V}if(b.visible=T.visible,b.wireframe=T.wireframe,S===Qn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=R}return b}function x(M,T,R,S,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Qn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const B=e.update(M),U=M.material;if(Array.isArray(U)){const V=B.groups;for(let D=0,O=V.length;D<O;D++){const k=V[D],J=U[k.materialIndex];if(J&&J.visible){const ce=_(M,J,S,b);M.onBeforeShadow(i,M,T,R,B,ce,k),i.renderBufferDirect(R,null,B,ce,M,k),M.onAfterShadow(i,M,T,R,B,ce,k)}}}else if(U.visible){const V=_(M,U,S,b);M.onBeforeShadow(i,M,T,R,B,V,null),i.renderBufferDirect(R,null,B,V,M,null),M.onAfterShadow(i,M,T,R,B,V,null)}}const N=M.children;for(let B=0,U=N.length;B<U;B++)x(N[B],T,R,S,b)}function E(M){M.target.removeEventListener("dispose",E);for(const R in l){const S=l[R],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Xx={[Dc]:kc,[Uc]:Oc,[Nc]:zc,[Hs]:Fc,[kc]:Dc,[Oc]:Uc,[zc]:Nc,[Fc]:Hs};function jx(i,e){function t(){let H=!1;const ye=new Tt;let Q=null;const he=new Tt(0,0,0,0);return{setMask:function(Pe){Q!==Pe&&!H&&(i.colorMask(Pe,Pe,Pe,Pe),Q=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,Ce,Ke,bt,Ft){Ft===!0&&(Pe*=bt,Ce*=bt,Ke*=bt),ye.set(Pe,Ce,Ke,bt),he.equals(ye)===!1&&(i.clearColor(Pe,Ce,Ke,bt),he.copy(ye))},reset:function(){H=!1,Q=null,he.set(-1,0,0,0)}}}function n(){let H=!1,ye=!1,Q=null,he=null,Pe=null;return{setReversed:function(Ce){if(ye!==Ce){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const bt=Pe;Pe=null,this.setClear(bt)}ye=Ce},getReversed:function(){return ye},setTest:function(Ce){Ce?oe(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(Ce){Q!==Ce&&!H&&(i.depthMask(Ce),Q=Ce)},setFunc:function(Ce){if(ye&&(Ce=Xx[Ce]),he!==Ce){switch(Ce){case Dc:i.depthFunc(i.NEVER);break;case kc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Pe!==Ce&&(ye&&(Ce=1-Ce),i.clearDepth(Ce),Pe=Ce)},reset:function(){H=!1,Q=null,he=null,Pe=null,ye=!1}}}function s(){let H=!1,ye=null,Q=null,he=null,Pe=null,Ce=null,Ke=null,bt=null,Ft=null;return{setTest:function(ht){H||(ht?oe(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!H&&(i.stencilMask(ht),ye=ht)},setFunc:function(ht,yn,$n){(Q!==ht||he!==yn||Pe!==$n)&&(i.stencilFunc(ht,yn,$n),Q=ht,he=yn,Pe=$n)},setOp:function(ht,yn,$n){(Ce!==ht||Ke!==yn||bt!==$n)&&(i.stencilOp(ht,yn,$n),Ce=ht,Ke=yn,bt=$n)},setLocked:function(ht){H=ht},setClear:function(ht){Ft!==ht&&(i.clearStencil(ht),Ft=ht)},reset:function(){H=!1,ye=null,Q=null,he=null,Pe=null,Ce=null,Ke=null,bt=null,Ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,y=null,_=null,x=null,E=null,M=null,T=new ve(0,0,0),R=0,S=!1,b=null,P=null,N=null,B=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=O>=2);let J=null,ce={};const le=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),He=new Tt().fromArray(le),F=new Tt().fromArray(Se);function re(H,ye,Q,he){const Pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(H,Ce),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Q;Ke++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(ye+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ce}const ee={};ee[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Hs),te(!1),me(Ph),oe(i.CULL_FACE),I(si);function oe(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function z(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function q(H,ye){return u[H]!==ye?(i.bindFramebuffer(H,ye),u[H]=ye,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function ae(H,ye){let Q=f,he=!1;if(H){Q=d.get(ye),Q===void 0&&(Q=[],d.set(ye,Q));const Pe=H.textures;if(Q.length!==Pe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Ke=Pe.length;Ce<Ke;Ce++)Q[Ce]=i.COLOR_ATTACHMENT0+Ce;Q.length=Pe.length,he=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,he=!0);he&&i.drawBuffers(Q)}function ne(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const G={[Oi]:i.FUNC_ADD,[nm]:i.FUNC_SUBTRACT,[im]:i.FUNC_REVERSE_SUBTRACT};G[sm]=i.MIN,G[rm]=i.MAX;const ie={[om]:i.ZERO,[am]:i.ONE,[cm]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[pm]:i.SRC_ALPHA_SATURATE,[fm]:i.DST_COLOR,[hm]:i.DST_ALPHA,[lm]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[um]:i.ONE_MINUS_DST_ALPHA,[mm]:i.CONSTANT_COLOR,[gm]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[_m]:i.ONE_MINUS_CONSTANT_ALPHA};function I(H,ye,Q,he,Pe,Ce,Ke,bt,Ft,ht){if(H===si){g===!0&&(z(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),H!==tm){if(H!==v||ht!==S){if((p!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,x=Oi),ht)switch(H){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,_=null,E=null,M=null,T.set(0,0,0),R=0,v=H,S=ht}return}Pe=Pe||ye,Ce=Ce||Q,Ke=Ke||he,(ye!==p||Pe!==x)&&(i.blendEquationSeparate(G[ye],G[Pe]),p=ye,x=Pe),(Q!==y||he!==_||Ce!==E||Ke!==M)&&(i.blendFuncSeparate(ie[Q],ie[he],ie[Ce],ie[Ke]),y=Q,_=he,E=Ce,M=Ke),(bt.equals(T)===!1||Ft!==R)&&(i.blendColor(bt.r,bt.g,bt.b,Ft),T.copy(bt),R=Ft),v=H,S=!1}function ue(H,ye){H.side===en?z(i.CULL_FACE):oe(i.CULL_FACE);let Q=H.side===qt;ye&&(Q=!Q),te(Q),H.blending===Us&&H.transparent===!1?I(si):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const he=H.stencilWrite;o.setTest(he),he&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(H){b!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),b=H)}function me(H){H!==Qp?(oe(i.CULL_FACE),H!==P&&(H===Ph?i.cullFace(i.BACK):H===em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),P=H}function ge(H){H!==N&&(D&&i.lineWidth(H),N=H)}function Ue(H,ye,Q){H?(oe(i.POLYGON_OFFSET_FILL),(B!==ye||U!==Q)&&(i.polygonOffset(ye,Q),B=ye,U=Q)):z(i.POLYGON_OFFSET_FILL)}function _e(H){H?oe(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function L(H){H===void 0&&(H=i.TEXTURE0+V-1),J!==H&&(i.activeTexture(H),J=H)}function w(H,ye,Q){Q===void 0&&(J===null?Q=i.TEXTURE0+V-1:Q=J);let he=ce[Q];he===void 0&&(he={type:void 0,texture:void 0},ce[Q]=he),(he.type!==H||he.texture!==ye)&&(J!==Q&&(i.activeTexture(Q),J=Q),i.bindTexture(H,ye||ee[H]),he.type=H,he.texture=ye)}function X(){const H=ce[J];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(H){He.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),He.copy(H))}function Le(H){F.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),F.copy(H))}function tt(H,ye){let Q=l.get(ye);Q===void 0&&(Q=new WeakMap,l.set(ye,Q));let he=Q.get(H);he===void 0&&(he=i.getUniformBlockIndex(ye,H.name),Q.set(H,he))}function xe(H,ye){const he=l.get(ye).get(H);c.get(ye)!==he&&(i.uniformBlockBinding(ye,he,H.__bindingPointIndex),c.set(ye,he))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,ce={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,y=null,_=null,x=null,E=null,M=null,T=new ve(0,0,0),R=0,S=!1,b=null,P=null,N=null,B=null,U=null,He.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:z,bindFramebuffer:q,drawBuffers:ae,useProgram:ne,setBlending:I,setMaterial:ue,setFlipSided:te,setCullFace:me,setLineWidth:ge,setPolygonOffset:Ue,setScissorTest:_e,activeTexture:L,bindTexture:w,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:j,texImage2D:we,texImage3D:Ge,updateUBOMapping:tt,uniformBlockBinding:xe,texStorage2D:Ye,texStorage3D:de,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ae,scissor:je,viewport:Le,reset:Xe}}function wu(i,e,t,n){const s=qx(n);switch(t){case nd:return i*e;case sd:return i*e;case rd:return i*e*2;case ql:return i*e/s.components*s.byteLength;case Yl:return i*e/s.components*s.byteLength;case od:return i*e*2/s.components*s.byteLength;case Zl:return i*e*2/s.components*s.byteLength;case id:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case Wo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:case Xc:return Math.max(i,16)*Math.max(e,8)/4;case Gc:case $c:return Math.max(i,8)*Math.max(e,8)/2;case jc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qo:case hl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ad:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(i){switch(i){case oi:case Qf:return{byteLength:1,components:1};case Or:case ed:case Vn:return{byteLength:2,components:1};case Xl:case jl:return{byteLength:2,components:4};case Xi:case $l:case Rn:return{byteLength:4,components:1};case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return f?new OffscreenCanvas(L,w):Br("canvas")}function g(L,w,X){let se=1;const j=_e(L);if((j.width>X||j.height>X)&&(se=X/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(se*j.width),Ee=Math.floor(se*j.height);u===void 0&&(u=m(K,Ee));const Me=w?m(K,Ee):u;return Me.width=K,Me.height=Ee,Me.getContext("2d").drawImage(L,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+Ee+")."),Me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function v(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,w,X,se,j=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=w;if(w===i.RED&&(X===i.FLOAT&&(K=i.R32F),X===i.HALF_FLOAT&&(K=i.R16F),X===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.R8UI),X===i.UNSIGNED_SHORT&&(K=i.R16UI),X===i.UNSIGNED_INT&&(K=i.R32UI),X===i.BYTE&&(K=i.R8I),X===i.SHORT&&(K=i.R16I),X===i.INT&&(K=i.R32I)),w===i.RG&&(X===i.FLOAT&&(K=i.RG32F),X===i.HALF_FLOAT&&(K=i.RG16F),X===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RG8UI),X===i.UNSIGNED_SHORT&&(K=i.RG16UI),X===i.UNSIGNED_INT&&(K=i.RG32UI),X===i.BYTE&&(K=i.RG8I),X===i.SHORT&&(K=i.RG16I),X===i.INT&&(K=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGB8UI),X===i.UNSIGNED_SHORT&&(K=i.RGB16UI),X===i.UNSIGNED_INT&&(K=i.RGB32UI),X===i.BYTE&&(K=i.RGB8I),X===i.SHORT&&(K=i.RGB16I),X===i.INT&&(K=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),X===i.UNSIGNED_INT&&(K=i.RGBA32UI),X===i.BYTE&&(K=i.RGBA8I),X===i.SHORT&&(K=i.RGBA16I),X===i.INT&&(K=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),w===i.RGBA){const Ee=j?ba:it.getTransfer(se);X===i.FLOAT&&(K=i.RGBA32F),X===i.HALF_FLOAT&&(K=i.RGBA16F),X===i.UNSIGNED_BYTE&&(K=Ee===ut?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(L,w){let X;return L?w===null||w===Xi||w===Ws?X=i.DEPTH24_STENCIL8:w===Rn?X=i.DEPTH32F_STENCIL8:w===Or&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===Ws?X=i.DEPTH_COMPONENT24:w===Rn?X=i.DEPTH_COMPONENT32F:w===Or&&(X=i.DEPTH_COMPONENT16),X}function E(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function M(L){const w=L.target;w.removeEventListener("dispose",M),R(w),w.isVideoTexture&&h.delete(w)}function T(L){const w=L.target;w.removeEventListener("dispose",T),b(w)}function R(L){const w=n.get(L);if(w.__webglInit===void 0)return;const X=L.source,se=d.get(X);if(se){const j=se[w.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(L),Object.keys(se).length===0&&d.delete(X)}n.remove(L)}function S(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const X=L.source,se=d.get(X);delete se[w.__cacheKey],a.memory.textures--}function b(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let j=0;j<w.__webglFramebuffer[se].length;j++)i.deleteFramebuffer(w.__webglFramebuffer[se][j]);else i.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)i.deleteFramebuffer(w.__webglFramebuffer[se]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=L.textures;for(let se=0,j=X.length;se<j;se++){const K=n.get(X[se]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(X[se])}n.remove(L)}let P=0;function N(){P=0}function B(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function U(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function V(L,w){const X=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(X,L,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function D(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){F(X,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function O(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){F(X,L,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function k(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){re(X,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const J={[Cn]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},ce={[cn]:i.NEAREST,[Mm]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},le={[Em]:i.NEVER,[Im]:i.ALWAYS,[Am]:i.LESS,[cd]:i.LEQUAL,[Cm]:i.EQUAL,[Lm]:i.GEQUAL,[Rm]:i.GREATER,[Pm]:i.NOTEQUAL};function Se(L,w){if(w.type===Rn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Ca||w.magFilter===Jr||w.magFilter===Vi||w.minFilter===zn||w.minFilter===Ca||w.minFilter===Jr||w.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,J[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==Jr&&w.minFilter!==Vi||w.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function He(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",M));const se=w.source;let j=d.get(se);j===void 0&&(j={},d.set(se,j));const K=U(w);if(K!==L.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[K].usedTimes++;const Ee=j[L.__cacheKey];Ee!==void 0&&(j[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(w)),L.__cacheKey=K,L.__webglTexture=j[K].texture}return X}function F(L,w,X){let se=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=i.TEXTURE_3D);const j=He(L,w),K=w.source;t.bindTexture(se,L.__webglTexture,i.TEXTURE0+X);const Ee=n.get(K);if(K.version!==Ee.__version||j===!0){t.activeTexture(i.TEXTURE0+X);const Me=it.getPrimaries(it.workingColorSpace),Ae=w.colorSpace===vi?null:it.getPrimaries(w.colorSpace),Ye=w.colorSpace===vi||Me===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let de=g(w.image,!1,s.maxTextureSize);de=Ue(w,de);const we=r.convert(w.format,w.colorSpace),Ge=r.convert(w.type);let je=_(w.internalFormat,we,Ge,w.colorSpace,w.isVideoTexture);Se(se,w);let Le;const tt=w.mipmaps,xe=w.isVideoTexture!==!0,Xe=Ee.__version===void 0||j===!0,H=K.dataReady,ye=E(w,de);if(w.isDepthTexture)je=x(w.format===$s,w.type),Xe&&(xe?t.texStorage2D(i.TEXTURE_2D,1,je,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,je,de.width,de.height,0,we,Ge,null));else if(w.isDataTexture)if(tt.length>0){xe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ye,je,tt[0].width,tt[0].height);for(let Q=0,he=tt.length;Q<he;Q++)Le=tt[Q],xe?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,we,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,we,Ge,Le.data);w.generateMipmaps=!1}else xe?(Xe&&t.texStorage2D(i.TEXTURE_2D,ye,je,de.width,de.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,we,Ge,de.data)):t.texImage2D(i.TEXTURE_2D,0,je,de.width,de.height,0,we,Ge,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xe&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,je,tt[0].width,tt[0].height,de.depth);for(let Q=0,he=tt.length;Q<he;Q++)if(Le=tt[Q],w.format!==vn)if(we!==null)if(xe){if(H)if(w.layerUpdates.size>0){const Pe=wu(Le.width,Le.height,w.format,w.type);for(const Ce of w.layerUpdates){const Ke=Le.data.subarray(Ce*Pe/Le.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ce,Le.width,Le.height,1,we,Ke)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,de.depth,we,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,je,Le.width,Le.height,de.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,de.depth,we,Ge,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,je,Le.width,Le.height,de.depth,0,we,Ge,Le.data)}else{xe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ye,je,tt[0].width,tt[0].height);for(let Q=0,he=tt.length;Q<he;Q++)Le=tt[Q],w.format!==vn?we!==null?xe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,we,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,we,Ge,Le.data)}else if(w.isDataArrayTexture)if(xe){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,je,de.width,de.height,de.depth),H)if(w.layerUpdates.size>0){const Q=wu(de.width,de.height,w.format,w.type);for(const he of w.layerUpdates){const Pe=de.data.subarray(he*Q/de.data.BYTES_PER_ELEMENT,(he+1)*Q/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,de.width,de.height,1,we,Ge,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Ge,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,de.width,de.height,de.depth,0,we,Ge,de.data);else if(w.isData3DTexture)xe?(Xe&&t.texStorage3D(i.TEXTURE_3D,ye,je,de.width,de.height,de.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Ge,de.data)):t.texImage3D(i.TEXTURE_3D,0,je,de.width,de.height,de.depth,0,we,Ge,de.data);else if(w.isFramebufferTexture){if(Xe)if(xe)t.texStorage2D(i.TEXTURE_2D,ye,je,de.width,de.height);else{let Q=de.width,he=de.height;for(let Pe=0;Pe<ye;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,je,Q,he,0,we,Ge,null),Q>>=1,he>>=1}}else if(tt.length>0){if(xe&&Xe){const Q=_e(tt[0]);t.texStorage2D(i.TEXTURE_2D,ye,je,Q.width,Q.height)}for(let Q=0,he=tt.length;Q<he;Q++)Le=tt[Q],xe?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we,Ge,Le):t.texImage2D(i.TEXTURE_2D,Q,je,we,Ge,Le);w.generateMipmaps=!1}else if(xe){if(Xe){const Q=_e(de);t.texStorage2D(i.TEXTURE_2D,ye,je,Q.width,Q.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ge,de)}else t.texImage2D(i.TEXTURE_2D,0,je,we,Ge,de);v(w)&&p(se),Ee.__version=K.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function re(L,w,X){if(w.image.length!==6)return;const se=He(L,w),j=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const K=n.get(j);if(j.version!==K.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const Ee=it.getPrimaries(it.workingColorSpace),Me=w.colorSpace===vi?null:it.getPrimaries(w.colorSpace),Ae=w.colorSpace===vi||Ee===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!Ye&&!de?we[he]=g(w.image[he],!0,s.maxCubemapSize):we[he]=de?w.image[he].image:w.image[he],we[he]=Ue(w,we[he]);const Ge=we[0],je=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),tt=_(w.internalFormat,je,Le,w.colorSpace),xe=w.isVideoTexture!==!0,Xe=K.__version===void 0||se===!0,H=j.dataReady;let ye=E(w,Ge);Se(i.TEXTURE_CUBE_MAP,w);let Q;if(Ye){xe&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,tt,Ge.width,Ge.height);for(let he=0;he<6;he++){Q=we[he].mipmaps;for(let Pe=0;Pe<Q.length;Pe++){const Ce=Q[Pe];w.format!==vn?je!==null?xe?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ce.width,Ce.height,je,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,tt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ce.width,Ce.height,je,Le,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,tt,Ce.width,Ce.height,0,je,Le,Ce.data)}}}else{if(Q=w.mipmaps,xe&&Xe){Q.length>0&&ye++;const he=_e(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,tt,he.width,he.height)}for(let he=0;he<6;he++)if(de){xe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,je,Le,we[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,we[he].width,we[he].height,0,je,Le,we[he].data);for(let Pe=0;Pe<Q.length;Pe++){const Ke=Q[Pe].image[he].image;xe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Ke.width,Ke.height,je,Le,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,tt,Ke.width,Ke.height,0,je,Le,Ke.data)}}else{xe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,Le,we[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,je,Le,we[he]);for(let Pe=0;Pe<Q.length;Pe++){const Ce=Q[Pe];xe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,je,Le,Ce.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,tt,je,Le,Ce.image[he])}}}v(w)&&p(i.TEXTURE_CUBE_MAP),K.__version=j.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ee(L,w,X,se,j,K){const Ee=r.convert(X.format,X.colorSpace),Me=r.convert(X.type),Ae=_(X.internalFormat,Ee,Me,X.colorSpace),Ye=n.get(w),de=n.get(X);if(de.__renderTarget=w,!Ye.__hasExternalTextures){const we=Math.max(1,w.width>>K),Ge=Math.max(1,w.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Ae,we,Ge,w.depth,0,Ee,Me,null):t.texImage2D(j,K,Ae,we,Ge,0,Ee,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,j,de.__webglTexture,0,te(w)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,j,de.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const se=w.depthTexture,j=se&&se.isDepthTexture?se.type:null,K=x(w.stencilBuffer,j),Ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=te(w);me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,K,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,L)}else{const se=w.textures;for(let j=0;j<se.length;j++){const K=se[j],Ee=r.convert(K.format,K.colorSpace),Me=r.convert(K.type),Ae=_(K.internalFormat,Ee,Me,K.colorSpace),Ye=te(w);X&&me(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ae,w.width,w.height):me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function z(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(w.depthTexture);se.__renderTarget=w,(!se.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const j=se.__webglTexture,K=te(w);if(w.depthTexture.format===Ns)me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(w.depthTexture.format===$s)me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function q(L){const w=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const j=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),w.__depthDisposeCallback=j}w.__boundDepthTexture=se}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");z(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[se],L,!1);else{const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(L,w,X){const se=n.get(L);w!==void 0&&ee(se.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&q(L)}function ne(L){const w=L.texture,X=n.get(L),se=n.get(w);L.addEventListener("dispose",T);const j=L.textures,K=L.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=w.version,a.memory.textures++),K){X.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Me]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)X.__webglFramebuffer[Me][Ae]=i.createFramebuffer()}else X.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)X.__webglFramebuffer[Me]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let Me=0,Ae=j.length;Me<Ae;Me++){const Ye=n.get(j[Me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&me(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Me=0;Me<j.length;Me++){const Ae=j[Me];X.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const Ye=r.convert(Ae.format,Ae.colorSpace),de=r.convert(Ae.type),we=_(Ae.internalFormat,Ye,de,Ae.colorSpace,L.isXRRenderTarget===!0),Ge=te(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,we,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,X.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Se(i.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ee(X.__webglFramebuffer[Me][Ae],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ae);else ee(X.__webglFramebuffer[Me],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);v(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let Me=0,Ae=j.length;Me<Ae;Me++){const Ye=j[Me],de=n.get(Ye);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Se(i.TEXTURE_2D,Ye),ee(X.__webglFramebuffer,L,Ye,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),v(Ye)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),Se(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ee(X.__webglFramebuffer[Ae],L,w,i.COLOR_ATTACHMENT0,Me,Ae);else ee(X.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,Me,0);v(w)&&p(Me),t.unbindTexture()}L.depthBuffer&&q(L)}function G(L){const w=L.textures;for(let X=0,se=w.length;X<se;X++){const j=w[X];if(v(j)){const K=y(L),Ee=n.get(j).__webglTexture;t.bindTexture(K,Ee),p(K),t.unbindTexture()}}}const ie=[],I=[];function ue(L){if(L.samples>0){if(me(L)===!1){const w=L.textures,X=L.width,se=L.height;let j=i.COLOR_BUFFER_BIT;const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(L),Me=w.length>1;if(Me)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const Ye=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,j,i.NEAREST),c===!0&&(ie.length=0,I.length=0,ie.push(i.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ie.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const Ye=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function te(L){return Math.min(s.maxSamples,L.samples)}function me(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(L){const w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Ue(L,w){const X=L.colorSpace,se=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ks&&X!==vi&&(it.getTransfer(X)===ut?(se!==vn||j!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function _e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=ae,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=me}function Zx(i,e){function t(n,s=vi){let r;const a=it.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.BYTE;if(n===ed)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===vn)return i.RGBA;if(n===sd)return i.LUMINANCE;if(n===rd)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===od)return i.RG;if(n===Zl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Wo||n===$o||n===Xo||n===jo)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Wc||n===$c||n===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===qc)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zc||n===Kc||n===Jc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===hl||n===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ad||n===fl||n===dl||n===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Kx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ot extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jx={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),p=this._getHandJoint(l,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`;class ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:Qx,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends Js{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const g=new ty,v=t.getContextAttributes();let p=null,y=null;const _=[],x=[],E=new fe;let M=null;const T=new pn;T.viewport=new Tt;const R=new pn;R.viewport=new Tt;const S=[T,R],b=new Kx;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let re=_[F];return re===void 0&&(re=new tc,_[F]=re),re.getTargetRaySpace()},this.getControllerGrip=function(F){let re=_[F];return re===void 0&&(re=new tc,_[F]=re),re.getGripSpace()},this.getHand=function(F){let re=_[F];return re===void 0&&(re=new tc,_[F]=re),re.getHandSpace()};function B(F){const re=x.indexOf(F.inputSource);if(re===-1)return;const ee=_[re];ee!==void 0&&(ee.update(F.inputSource,F.frame,l||a),ee.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let F=0;F<_.length;F++){const re=x[F];re!==null&&(x[F]=null,_[F].disconnect(re))}P=null,N=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:vn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let re=null,ee=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?$s:Ns,ee=v.stencil?Ws:Xi);const z={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:vn,type:oi,depthTexture:new yd(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(F){for(let re=0;re<F.removed.length;re++){const ee=F.removed[re],oe=x.indexOf(ee);oe>=0&&(x[oe]=null,_[oe].disconnect(ee))}for(let re=0;re<F.added.length;re++){const ee=F.added[re];let oe=x.indexOf(ee);if(oe===-1){for(let q=0;q<_.length;q++)if(q>=x.length){x.push(ee),oe=q;break}else if(x[q]===null){x[q]=ee,oe=q;break}if(oe===-1)break}const z=_[oe];z&&z.connect(ee)}}const D=new C,O=new C;function k(F,re,ee){D.setFromMatrixPosition(re.matrixWorld),O.setFromMatrixPosition(ee.matrixWorld);const oe=D.distanceTo(O),z=re.projectionMatrix.elements,q=ee.projectionMatrix.elements,ae=z[14]/(z[10]-1),ne=z[14]/(z[10]+1),G=(z[9]+1)/z[5],ie=(z[9]-1)/z[5],I=(z[8]-1)/z[0],ue=(q[8]+1)/q[0],te=ae*I,me=ae*ue,ge=oe/(-I+ue),Ue=ge*-I;if(re.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ue),F.translateZ(ge),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),z[10]===-1)F.projectionMatrix.copy(re.projectionMatrix),F.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const _e=ae+ge,L=ne+ge,w=te-Ue,X=me+(oe-Ue),se=G*ne/L*_e,j=ie*ne/L*_e;F.projectionMatrix.makePerspective(w,X,se,j,_e,L),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function J(F,re){re===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(re.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let re=F.near,ee=F.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),b.near=R.near=T.near=re,b.far=R.far=T.far=ee,(P!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),T.layers.mask=F.layers.mask|2,R.layers.mask=F.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;const oe=F.parent,z=b.cameras;J(b,oe);for(let q=0;q<z.length;q++)J(z[q],oe);z.length===2?k(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),ce(F,b,oe)};function ce(F,re,ee){ee===null?F.matrix.copy(re.matrixWorld):(F.matrix.copy(ee.matrixWorld),F.matrix.invert(),F.matrix.multiply(re.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(re.projectionMatrix),F.projectionMatrixInverse.copy(re.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=zr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let le=null;function Se(F,re){if(h=re.getViewerPose(l||a),m=re,h!==null){const ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let q=0;q<ee.length;q++){const ae=ee[q];let ne=null;if(f!==null)ne=f.getViewport(ae);else{const ie=u.getViewSubImage(d,ae);ne=ie.viewport,q===0&&(e.setRenderTargetTextures(y,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(y))}let G=S[q];G===void 0&&(G=new pn,G.layers.enable(q),G.viewport=new Tt,S[q]=G),G.matrix.fromArray(ae.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ae.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(ne.x,ne.y,ne.width,ne.height),q===0&&(b.matrix.copy(G.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(G)}const z=s.enabledFeatures;if(z&&z.includes("depth-sensing")){const q=u.getDepthInformation(ee[0]);q&&q.isValid&&q.texture&&g.init(e,q,s.renderState)}}for(let ee=0;ee<_.length;ee++){const oe=x[ee],z=_[ee];oe!==null&&z!==void 0&&z.update(oe,re,l||a)}le&&le(F,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}const He=new xd;He.setAnimationLoop(Se),this.setAnimationLoop=function(F){le=F},this.dispose=function(){}}}const Ri=new Ht,iy=new Ie;function sy(i,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,gd(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),u(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(r(v,p),m(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),g(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(a(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?c(v,p,y,_):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===qt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===qt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(v.envMap.value=_,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),v.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ri)),v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function a(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,y,_){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*y,v.scale.value=_*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function u(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,y){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const y=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ry(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",v));const E=_.program;n.updateUBOMapping(y,E);const M=e.render.frame;r[y.id]!==M&&(d(y),r[y.id]=M)}function h(y){const _=u();y.__bindingPointIndex=_;const x=i.createBuffer(),E=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=x.length;M<T;M++){const R=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,b=R.length;S<b;S++){const P=R[S];if(f(P,M,S,E)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let V=0;V<B.length;V++){const D=B[V],O=g(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,N+U,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,x,E){const M=y.value,T=_+"_"+x;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{const R=E[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return E[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function m(y){const _=y.uniforms;let x=0;const E=16;for(let T=0,R=_.length;T<R;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,P=S.length;b<P;b++){const N=S[b],B=Array.isArray(N.value)?N.value:[N.value];for(let U=0,V=B.length;U<V;U++){const D=B[U],O=g(D),k=x%E,J=k%O.boundary,ce=k+J;x+=J,ce!==0&&E-ce<O.storage&&(x+=E-ce),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=O.storage}}}const M=x%E;return M>0&&(x+=E-M),y.__size=x,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function v(y){const _=y.target;_.removeEventListener("dispose",v);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class oy{constructor(e={}){const{canvas:t=Ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let E=!1,M=0,T=0,R=null,S=-1,b=null;const P=new Tt,N=new Tt;let B=null;const U=new ve(0);let V=0,D=t.width,O=t.height,k=1,J=null,ce=null;const le=new Tt(0,0,D,O),Se=new Tt(0,0,D,O);let He=!1;const F=new th;let re=!1,ee=!1;const oe=new Ie,z=new Ie,q=new C,ae=new Tt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function ie(){return R===null?k:1}let I=n;function ue(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),I===null){const W="webgl2";if(I=ue(W,A),I===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,me,ge,Ue,_e,L,w,X,se,j,K,Ee,Me,Ae,Ye,de,we,Ge,je,Le,tt,xe,Xe,H;function ye(){te=new u_(I),te.init(),xe=new Zx(I,te),me=new r_(I,te,e,xe),ge=new jx(I,te),me.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),Ue=new p_(I),_e=new Ix,L=new Yx(I,te,ge,_e,me,xe,Ue),w=new a_(x),X=new h_(x),se=new b0(I),Xe=new i_(I,se),j=new f_(I,se,Ue,Xe),K=new g_(I,j,se,Ue),je=new m_(I,me,L),de=new o_(_e),Ee=new Lx(x,w,X,te,me,Xe,de),Me=new sy(x,_e),Ae=new kx,Ye=new Bx(te),Ge=new n_(x,w,X,ge,K,f,c),we=new $x(x,K,me),H=new ry(I,Ue,me,ge),Le=new s_(I,te,Ue),tt=new d_(I,te,Ue),Ue.programs=Ee.programs,x.capabilities=me,x.extensions=te,x.properties=_e,x.renderLists=Ae,x.shadowMap=we,x.state=ge,x.info=Ue}ye();const Q=new ny(x,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(D,O,!1))},this.getSize=function(A){return A.set(D,O)},this.setSize=function(A,W,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,O=W,t.width=Math.floor(A*k),t.height=Math.floor(W*k),Y===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(D*k,O*k).floor()},this.setDrawingBufferSize=function(A,W,Y){D=A,O=W,k=Y,t.width=Math.floor(A*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,W,Y,Z){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,Y,Z),ge.viewport(P.copy(le).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,W,Y,Z){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,W,Y,Z),ge.scissor(N.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){ge.setScissorTest(He=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(A=!0,W=!0,Y=!0){let Z=0;if(A){let $=!1;if(R!==null){const be=R.texture.format;$=be===Kl||be===Zl||be===Yl}if($){const be=R.texture.type,Re=be===oi||be===Xi||be===Or||be===Ws||be===Xl||be===jl,Ne=Ge.getClearColor(),Fe=Ge.getClearAlpha(),Ze=Ne.r,Je=Ne.g,Oe=Ne.b;Re?(m[0]=Ze,m[1]=Je,m[2]=Oe,m[3]=Fe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ze,g[1]=Je,g[2]=Oe,g[3]=Fe,I.clearBufferiv(I.COLOR,0,g))}else Z|=I.COLOR_BUFFER_BIT}W&&(Z|=I.DEPTH_BUFFER_BIT),Y&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ae.dispose(),Ye.dispose(),_e.dispose(),w.dispose(),X.dispose(),K.dispose(),Xe.dispose(),H.dispose(),Ee.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Mh),Q.removeEventListener("sessionend",Sh),Si.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Ue.autoReset,W=we.enabled,Y=we.autoUpdate,Z=we.needsUpdate,$=we.type;ye(),Ue.autoReset=A,we.enabled=W,we.autoUpdate=Y,we.needsUpdate=Z,we.type=$}function Ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ke(A){const W=A.target;W.removeEventListener("dispose",Ke),bt(W)}function bt(A){Ft(A),_e.remove(A)}function Ft(A){const W=_e.get(A).programs;W!==void 0&&(W.forEach(function(Y){Ee.releaseProgram(Y)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Y,Z,$,be){W===null&&(W=ne);const Re=$.isMesh&&$.matrixWorld.determinant()<0,Ne=qp(A,W,Y,Z,$);ge.setMaterial(Z,Re);let Fe=Y.index,Ze=1;if(Z.wireframe===!0){if(Fe=j.getWireframeAttribute(Y),Fe===void 0)return;Ze=2}const Je=Y.drawRange,Oe=Y.attributes.position;let st=Je.start*Ze,mt=(Je.start+Je.count)*Ze;be!==null&&(st=Math.max(st,be.start*Ze),mt=Math.min(mt,(be.start+be.count)*Ze)),Fe!==null?(st=Math.max(st,0),mt=Math.min(mt,Fe.count)):Oe!=null&&(st=Math.max(st,0),mt=Math.min(mt,Oe.count));const gt=mt-st;if(gt<0||gt===1/0)return;Xe.setup($,Z,Ne,Y,Fe);let Zt,at=Le;if(Fe!==null&&(Zt=se.get(Fe),at=tt,at.setIndex(Zt)),$.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*ie()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if($.isLine){let Ve=Z.linewidth;Ve===void 0&&(Ve=1),ge.setLineWidth(Ve*ie()),$.isLineSegments?at.setMode(I.LINES):$.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else $.isPoints?at.setMode(I.POINTS):$.isSprite&&at.setMode(I.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)at.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ve=$._multiDrawStarts,Xn=$._multiDrawCounts,ct=$._multiDrawCount,bn=Fe?se.get(Fe).bytesPerElement:1,ns=_e.get(Z).currentProgram.getUniforms();for(let tn=0;tn<ct;tn++)ns.setValue(I,"_gl_DrawID",tn),at.render(Ve[tn]/bn,Xn[tn])}else if($.isInstancedMesh)at.renderInstances(st,gt,$.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xn=Math.min(Y.instanceCount,Ve);at.renderInstances(st,gt,Xn)}else at.render(st,gt)};function ht(A,W,Y){A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,Kr(A,W,Y),A.side=bi,A.needsUpdate=!0,Kr(A,W,Y),A.side=en):Kr(A,W,Y)}this.compile=function(A,W,Y=null){Y===null&&(Y=A),p=Ye.get(Y),p.init(W),_.push(p),Y.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==Y&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const Z=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const Ne=be[Re];ht(Ne,Y,$),Z.add(Ne)}else ht(be,Y,$),Z.add(be)}),_.pop(),p=null,Z},this.compileAsync=function(A,W,Y=null){const Z=this.compile(A,W,Y);return new Promise($=>{function be(){if(Z.forEach(function(Re){_e.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){$(A);return}setTimeout(be,10)}te.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let yn=null;function $n(A){yn&&yn(A)}function Mh(){Si.stop()}function Sh(){Si.start()}const Si=new xd;Si.setAnimationLoop($n),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){yn=A,Q.setAnimationLoop(A),A===null?Si.stop():Si.start()},Q.addEventListener("sessionstart",Mh),Q.addEventListener("sessionend",Sh),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,R),p=Ye.get(A,_.length),p.init(W),_.push(p),z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(z),ee=this.localClippingEnabled,re=de.init(this.clippingPlanes,ee),v=Ae.get(A,y.length),v.init(),y.push(v),Q.enabled===!0&&Q.isPresenting===!0){const be=x.xr.getDepthSensingMesh();be!==null&&Aa(be,W,-1/0,x.sortObjects)}Aa(A,W,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(J,ce),G=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,G&&Ge.addToRenderList(v,A),this.info.render.frame++,re===!0&&de.beginShadows();const Y=p.state.shadowsArray;we.render(Y,A,W),re===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,$=v.transmissive;if(p.setupLights(),W.isArrayCamera){const be=W.cameras;if($.length>0)for(let Re=0,Ne=be.length;Re<Ne;Re++){const Fe=be[Re];wh(Z,$,A,Fe)}G&&Ge.render(A);for(let Re=0,Ne=be.length;Re<Ne;Re++){const Fe=be[Re];Th(v,A,Fe,Fe.viewport)}}else $.length>0&&wh(Z,$,A,W),G&&Ge.render(A),Th(v,A,W);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,W),Xe.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],re===!0&&de.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function Aa(A,W,Y,Z){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){Z&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);const Re=K.update(A),Ne=A.material;Ne.visible&&v.push(A,Re,Ne,Y,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const Re=K.update(A),Ne=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ae.copy(Re.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(z)),Array.isArray(Ne)){const Fe=Re.groups;for(let Ze=0,Je=Fe.length;Ze<Je;Ze++){const Oe=Fe[Ze],st=Ne[Oe.materialIndex];st&&st.visible&&v.push(A,Re,st,Y,ae.z,Oe)}}else Ne.visible&&v.push(A,Re,Ne,Y,ae.z,null)}}const be=A.children;for(let Re=0,Ne=be.length;Re<Ne;Re++)Aa(be[Re],W,Y,Z)}function Th(A,W,Y,Z){const $=A.opaque,be=A.transmissive,Re=A.transparent;p.setupLightsView(Y),re===!0&&de.setGlobalState(x.clippingPlanes,Y),Z&&ge.viewport(P.copy(Z)),$.length>0&&Zr($,W,Y),be.length>0&&Zr(be,W,Y),Re.length>0&&Zr(Re,W,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function wh(A,W,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new _n(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Vn:oi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const be=p.state.transmissionRenderTarget[Z.id],Re=Z.viewport||P;be.setSize(Re.z,Re.w);const Ne=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(U),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),G&&Ge.render(Y);const Fe=x.toneMapping;x.toneMapping=yi;const Ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),re===!0&&de.setGlobalState(x.clippingPlanes,Z),Zr(A,Y,Z),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Oe=0,st=W.length;Oe<st;Oe++){const mt=W[Oe],gt=mt.object,Zt=mt.geometry,at=mt.material,Ve=mt.group;if(at.side===en&&gt.layers.test(Z.layers)){const Xn=at.side;at.side=qt,at.needsUpdate=!0,Eh(gt,Y,Z,Zt,at,Ve),at.side=Xn,at.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}x.setRenderTarget(Ne),x.setClearColor(U,V),Ze!==void 0&&(Z.viewport=Ze),x.toneMapping=Fe}function Zr(A,W,Y){const Z=W.isScene===!0?W.overrideMaterial:null;for(let $=0,be=A.length;$<be;$++){const Re=A[$],Ne=Re.object,Fe=Re.geometry,Ze=Z===null?Re.material:Z,Je=Re.group;Ne.layers.test(Y.layers)&&Eh(Ne,W,Y,Fe,Ze,Je)}}function Eh(A,W,Y,Z,$,be){A.onBeforeRender(x,W,Y,Z,$,be),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,W,Y,Z,A,be),$.transparent===!0&&$.side===en&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,$,A,be),$.side=bi,$.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,$,A,be),$.side=en):x.renderBufferDirect(Y,W,Z,$,A,be),A.onAfterRender(x,W,Y,Z,$,be)}function Kr(A,W,Y){W.isScene!==!0&&(W=ne);const Z=_e.get(A),$=p.state.lights,be=p.state.shadowsArray,Re=$.state.version,Ne=Ee.getParameters(A,$.state,be,W,Y),Fe=Ee.getProgramCacheKey(Ne);let Ze=Z.programs;Z.environment=A.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(A.isMeshStandardMaterial?X:w).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Ke),Ze=new Map,Z.programs=Ze);let Je=Ze.get(Fe);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Re)return Ch(A,Ne),Je}else Ne.uniforms=Ee.getUniforms(A),A.onBeforeCompile(Ne,x),Je=Ee.acquireProgram(Ne,Fe),Ze.set(Fe,Je),Z.uniforms=Ne.uniforms;const Oe=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=de.uniform),Ch(A,Ne),Z.needsLights=Zp(A),Z.lightsStateVersion=Re,Z.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMap.value=$.state.directionalShadowMap,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotShadowMap.value=$.state.spotShadowMap,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMap.value=$.state.pointShadowMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function Ah(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Yo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ch(A,W){const Y=_e.get(A);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function qp(A,W,Y,Z,$){W.isScene!==!0&&(W=ne),L.resetTextureUnits();const be=W.fog,Re=Z.isMeshStandardMaterial?W.environment:null,Ne=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ks,Fe=(Z.isMeshStandardMaterial?X:w).get(Z.envMap||Re),Ze=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,mt=!!Y.morphAttributes.color;let gt=yi;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Zt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=Zt!==void 0?Zt.length:0,Ve=_e.get(Z),Xn=p.state.lights;if(re===!0&&(ee===!0||A!==b)){const ln=A===b&&Z.id===S;de.setState(Z,A,ln)}let ct=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xn.state.version||Ve.outputColorSpace!==Ne||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isBatchedMesh&&Ve.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ve.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Fe||Z.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==de.numPlanes||Ve.numIntersection!==de.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==Je||Ve.morphTargets!==Oe||Ve.morphNormals!==st||Ve.morphColors!==mt||Ve.toneMapping!==gt||Ve.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Ve.__version=Z.version);let bn=Ve.currentProgram;ct===!0&&(bn=Kr(Z,W,$));let ns=!1,tn=!1,nr=!1;const vt=bn.getUniforms(),Dn=Ve.uniforms;if(ge.useProgram(bn.program)&&(ns=!0,tn=!0,nr=!0),Z.id!==S&&(S=Z.id,tn=!0),ns||b!==A){ge.buffers.depth.getReversed()?(oe.copy(A.projectionMatrix),Km(oe),Jm(oe),vt.setValue(I,"projectionMatrix",oe)):vt.setValue(I,"projectionMatrix",A.projectionMatrix),vt.setValue(I,"viewMatrix",A.matrixWorldInverse);const ai=vt.map.cameraPosition;ai!==void 0&&ai.setValue(I,q.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,tn=!0,nr=!0)}if($.isSkinnedMesh){vt.setOptional(I,$,"bindMatrix"),vt.setOptional(I,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),vt.setValue(I,"boneTexture",ln.boneTexture,L))}$.isBatchedMesh&&(vt.setOptional(I,$,"batchingTexture"),vt.setValue(I,"batchingTexture",$._matricesTexture,L),vt.setOptional(I,$,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",$._indirectTexture,L),vt.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",$._colorsTexture,L));const ir=Y.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&je.update($,Y,bn),(tn||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,vt.setValue(I,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Dn.envMap.value=Fe,Dn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Dn.envMapIntensity.value=W.environmentIntensity),tn&&(vt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Yp(Dn,nr),be&&Z.fog===!0&&Me.refreshFogUniforms(Dn,be),Me.refreshMaterialUniforms(Dn,Z,k,O,p.state.transmissionRenderTarget[A.id]),Yo.upload(I,Ah(Ve),Dn,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Yo.upload(I,Ah(Ve),Dn,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue(I,"center",$.center),vt.setValue(I,"modelViewMatrix",$.modelViewMatrix),vt.setValue(I,"normalMatrix",$.normalMatrix),vt.setValue(I,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ln=Z.uniformsGroups;for(let ai=0,ci=ln.length;ai<ci;ai++){const Rh=ln[ai];H.update(Rh,bn),H.bind(Rh,bn)}}return bn}function Yp(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Zp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,W,Y){_e.get(A.texture).__webglTexture=W,_e.get(A.depthTexture).__webglTexture=Y;const Z=_e.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Y=_e.get(A);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Y=0){R=A,M=W,T=Y;let Z=!0,$=null,be=!1,Re=!1;if(A){const Fe=_e.get(A);if(Fe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(Fe.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Fe.__hasExternalTextures)L.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(Fe.__boundDepthTexture!==Oe){if(Oe!==null&&_e.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);const Je=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?$=Je[W][Y]:$=Je[W],be=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?$=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?$=Je[Y]:$=Je,P.copy(A.viewport),N.copy(A.scissor),B=A.scissorTest}else P.copy(le).multiplyScalar(k).floor(),N.copy(Se).multiplyScalar(k).floor(),B=He;if(ge.bindFramebuffer(I.FRAMEBUFFER,$)&&Z&&ge.drawBuffers(A,$),ge.viewport(P),ge.scissor(N),ge.setScissorTest(B),be){const Fe=_e.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,Y)}else if(Re){const Fe=_e.get(A.texture),Ze=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,Y||0,Ze)}S=-1},this.readRenderTargetPixels=function(A,W,Y,Z,$,be,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ge.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Fe=A.texture,Ze=Fe.format,Je=Fe.type;if(!me.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Z&&Y>=0&&Y<=A.height-$&&I.readPixels(W,Y,Z,$,xe.convert(Ze),xe.convert(Je),be)}finally{const Fe=R!==null?_e.get(R).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,W,Y,Z,$,be,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){const Fe=A.texture,Ze=Fe.format,Je=Fe.type;if(!me.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Z&&Y>=0&&Y<=A.height-$){ge.bindFramebuffer(I.FRAMEBUFFER,Ne);const Oe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.bufferData(I.PIXEL_PACK_BUFFER,be.byteLength,I.STREAM_READ),I.readPixels(W,Y,Z,$,xe.convert(Ze),xe.convert(Je),0);const st=R!==null?_e.get(R).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,st);const mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zm(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,be),I.deleteBuffer(Oe),I.deleteSync(mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Y=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-Y),$=Math.floor(A.image.width*Z),be=Math.floor(A.image.height*Z),Re=W!==null?W.x:0,Ne=W!==null?W.y:0;L.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Re,Ne,$,be),ge.unbindTexture()},this.copyTextureToTexture=function(A,W,Y=null,Z=null,$=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],W=arguments[2],$=arguments[3]||0,Y=null);let be,Re,Ne,Fe,Ze,Je,Oe,st,mt;const gt=A.isCompressedTexture?A.mipmaps[$]:A.image;Y!==null?(be=Y.max.x-Y.min.x,Re=Y.max.y-Y.min.y,Ne=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,Ze=Y.min.y,Je=Y.isBox3?Y.min.z:0):(be=gt.width,Re=gt.height,Ne=gt.depth||1,Fe=0,Ze=0,Je=0),Z!==null?(Oe=Z.x,st=Z.y,mt=Z.z):(Oe=0,st=0,mt=0);const Zt=xe.convert(W.format),at=xe.convert(W.type);let Ve;W.isData3DTexture?(L.setTexture3D(W,0),Ve=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ve=I.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Xn=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=I.getParameter(I.UNPACK_SKIP_PIXELS),ns=I.getParameter(I.UNPACK_SKIP_ROWS),tn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je);const nr=A.isDataArrayTexture||A.isData3DTexture,vt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Dn=_e.get(A),ir=_e.get(W),ln=_e.get(Dn.__renderTarget),ai=_e.get(ir.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ci=0;ci<Ne;ci++)nr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(A).__webglTexture,$,Je+ci),A.isDepthTexture?(vt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(W).__webglTexture,$,mt+ci),I.blitFramebuffer(Fe,Ze,be,Re,Oe,st,be,Re,I.DEPTH_BUFFER_BIT,I.NEAREST)):vt?I.copyTexSubImage3D(Ve,$,Oe,st,mt+ci,Fe,Ze,be,Re):I.copyTexSubImage2D(Ve,$,Oe,st,mt+ci,Fe,Ze,be,Re);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ve,$,Oe,st,mt,be,Re,Ne,Zt,at,gt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,$,Oe,st,mt,be,Re,Ne,Zt,gt.data):I.texSubImage3D(Ve,$,Oe,st,mt,be,Re,Ne,Zt,at,gt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,$,Oe,st,be,Re,Zt,at,gt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,$,Oe,st,gt.width,gt.height,Zt,gt.data):I.texSubImage2D(I.TEXTURE_2D,$,Oe,st,be,Re,Zt,at,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ns),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tn),$===0&&W.generateMipmaps&&I.generateMipmap(Ve),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Y=null,Z=null,$=0){return A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],W=arguments[3],$=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Y,Z,$)},this.initRenderTarget=function(A){_e.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,ge.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class ra{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eu extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new C;class oa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wd extends Ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const lr=new C,_s=new C,xs=new C,ys=new fe,hr=new fe,Ed=new Ie,yo=new C,ur=new C,bo=new C,Au=new fe,nc=new fe,Cu=new fe;class cy extends wt{constructor(e=new wd){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ay(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new oa(n,3,0,!1)),vs.setAttribute("uv",new oa(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Mo(yo.set(-.5,-.5,0),xs,a,_s,s,r),Mo(ur.set(.5,-.5,0),xs,a,_s,s,r),Mo(bo.set(.5,.5,0),xs,a,_s,s,r),Au.set(0,0),nc.set(1,0),Cu.set(1,1);let o=e.ray.intersectTriangle(yo,ur,bo,!1,lr);if(o===null&&(Mo(ur.set(-.5,.5,0),xs,a,_s,s,r),nc.set(0,1),o=e.ray.intersectTriangle(yo,bo,ur,!1,lr),o===null))return;const c=e.ray.origin.distanceTo(lr);c<e.near||c>e.far||t.push({distance:c,point:lr.clone(),uv:gn.getInterpolation(lr,yo,ur,bo,Au,nc,Cu,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mo(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*ys.x-s*ys.y,hr.y=s*ys.x+r*ys.y):hr.copy(ys),i.copy(e),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(Ed)}class ly extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ad extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=cn,h=cn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=new Ie,hy=new Ie;class sh{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:hy;Ru.multiplyMatrices(o,t[r]),Ru.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ad(t,e,e,vn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ly),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class xl extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Ie,Pu=new Ie,So=[],Lu=new Ki,uy=new Ie,fr=new pe,dr=new Ji;class aa extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,uy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Lu.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),dr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Pu.multiplyMatrices(n,bs),fr.matrixWorld=Pu,fr.raycast(e,So);for(let a=0,o=So.length;a<o;a++){const c=So[a];c.instanceId=r,c.object=this,t.push(c)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ad(new Float32Array(s*this.count),s,this.count,ql,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zo extends Ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new C,la=new C,Iu=new Ie,pr=new eh,To=new Ji,ic=new C,Du=new C;class fy extends wt{constructor(e=new lt,t=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ca.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ca.distanceTo(la);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Iu.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Iu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,v=m-1;g<v;g+=l){const p=h.getX(g),y=h.getX(g+1),_=wo(this,e,pr,c,p,y);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(m-1),v=h.getX(f),p=wo(this,e,pr,c,g,v);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,v=m-1;g<v;g+=l){const p=wo(this,e,pr,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=wo(this,e,pr,c,m-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wo(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(ca.fromBufferAttribute(a,s),la.fromBufferAttribute(a,r),t.distanceSqToSegment(ca,la,ic,Du)>n)return;ic.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ic);if(!(c<e.near||c>e.far))return{distance:c,point:Du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ku=new C,Uu=new C;class Nu extends fy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ku.fromBufferAttribute(t,s),Uu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ku.distanceTo(Uu);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xi extends Ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new Ie,yl=new eh,Eo=new Ji,Ao=new C;class Os extends wt{constructor(e=new lt,t=new xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Fu.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Fu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const v=l.getX(m);Ao.fromBufferAttribute(u,v),Ou(Ao,v,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)Ao.fromBufferAttribute(u,m),Ou(Ao,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ou(i,e,t,n,s,r,a){const o=yl.distanceSqToPoint(i);if(o<t){const c=new C;yl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xn extends Nt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,s=[],r=[],a=[],o=new C,c=new Ie;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rh extends Wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dy extends rh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Co=new C,sc=new oh,rc=new oh,oc=new oh;class Rs extends Wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),l=Co);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,v),rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,v),oc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,v)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),oc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sc.calc(c),rc.calc(c),oc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zu(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function py(i,e){const t=1-i;return t*t*e}function my(i,e){return 2*(1-i)*i*e}function gy(i,e){return i*i*e}function Er(i,e,t,n){return py(i,e)+my(i,t)+gy(i,n)}function vy(i,e){const t=1-i;return t*t*t*e}function _y(i,e){const t=1-i;return 3*t*t*i*e}function xy(i,e){return 3*(1-i)*i*i*e}function yy(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return vy(i,e)+_y(i,t)+xy(i,n)+yy(i,s)}class Cd extends Wn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class by extends Wn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y),Ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Wn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class My extends Wn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Wn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,s.x,r.x,a.x),Er(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends Wn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(e,s.x,r.x,a.x),Er(e,s.y,r.y,a.y),Er(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(zu(o,c.x,l.x,h.x,u.x),zu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:dy,CatmullRomCurve3:Rs,CubicBezierCurve:Cd,CubicBezierCurve3:by,EllipseCurve:rh,LineCurve:Rd,LineCurve3:My,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:ah,SplineCurve:Ld});class Sy extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ha[s.type]().fromJSON(s))}return this}}class bl extends Sy{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rd(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pd(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Cd(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ld(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new rh(e,t,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends lt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,d=new fe,f=new C,m=new C,g=new C;let v=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:v=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-v,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:v=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-v,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*s,x=Math.sin(_),E=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*x,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=y/t,d.y=M/(e.length-1),o.push(d.x,d.y);const T=c[3*M+0]*x,R=c[3*M+1],S=c[3*M+0]*E;l.push(T,R,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,E=x,M=x+e.length,T=x+e.length+1,R=x+1;r.push(E,M,R),r.push(T,R,M)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.points,e.segments,e.phiStart,e.phiLength)}}class ji extends qr{constructor(e=1,t=1,n=4,s=8){const r=new bl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ji(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ta extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,h=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rt extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],v=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function y(){const x=new C,E=new C;let M=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const S=[],b=R/r,P=b*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,U=B*c+o,V=Math.sin(U),D=Math.cos(U);E.x=P*V,E.y=-b*n+v,E.z=P*D,u.push(E.x,E.y,E.z),x.set(V,T,D).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-b),S.push(m++)}g.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const b=g[S][R],P=g[S+1][R],N=g[S+1][R+1],B=g[S][R+1];(e>0||S!==0)&&(h.push(b,P,B),M+=3),(t>0||S!==r-1)&&(h.push(P,N,B),M+=3)}l.addGroup(p,M,0),p+=M}function _(x){const E=m,M=new fe,T=new C;let R=0;const S=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,v*b,0),d.push(0,b,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=s;N++){const U=N/s*c+o,V=Math.cos(U),D=Math.sin(U);T.x=S*D,T.y=v*b,T.z=S*V,u.push(T.x,T.y,T.z),d.push(0,b,0),M.x=V*.5+.5,M.y=D*.5*b+.5,f.push(M.x,M.y),m++}for(let N=0;N<s;N++){const B=E+N,U=P+N;x===!0?h.push(U,U+1,B):h.push(U+1,U,B),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends rt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new C,x=new C,E=new C;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],x),f(t[M+2],E),c(_,x,E,y)}function c(y,_,x,E){const M=E+1,T=[];for(let R=0;R<=M;R++){T[R]=[];const S=y.clone().lerp(x,R/M),b=_.clone().lerp(x,R/M),P=M-R;for(let N=0;N<=P;N++)N===0&&R===M?T[R][N]=S:T[R][N]=S.clone().lerp(b,N/P)}for(let R=0;R<M;R++)for(let S=0;S<2*(M-R)-1;S++){const b=Math.floor(S/2);S%2===0?(d(T[R][b+1]),d(T[R+1][b]),d(T[R][b])):(d(T[R][b+1]),d(T[R+1][b+1]),d(T[R+1][b]))}}function l(y){const _=new C;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=v(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(x,1-E)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],E=a[y+4],M=Math.max(_,x,E),T=Math.min(_,x,E);M>.9&&T<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const y=new C,_=new C,x=new C,E=new C,M=new fe,T=new fe,R=new fe;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),M.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),E.copy(y).add(_).add(x).divideScalar(3);const P=v(E);g(M,b+0,y,P),g(T,b+2,_,P),g(R,b+4,x,P)}}function g(y,_,x,E){E<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=E/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.details)}}class ch extends wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class Id extends bl{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new bl().fromJSON(s))}return this}}const Ty={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Dd(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Ry(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Hr(r,a,t,o,c,f,0),a}};function Dd(i,e,t,n,s){let r,a;if(s===By(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Bu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Bu(r,i[r],i[r+1],a);return a&&Ea(a,a.next)&&(Gr(a),a=a.next),a}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||yt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ky(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ey(i,n,s,r):wy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Ay(qi(i),e,t),Hr(i,e,t,n,s,r,2)):a===2&&Cy(i,e,t,n,s,r):Hr(qi(i),e,t,n,s,r,1);break}}}function wy(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ps(s,o,r,c,a,l,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ey(i,e,t,n){const s=i.prev,r=i,a=i.next;if(yt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,g=o>c?o>l?o:l:c>l?c:l,v=h>u?h>d?h:d:u>d?u:d,p=Ml(f,m,e,t,n),y=Ml(g,v,e,t,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==s&&_!==a&&Ps(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==s&&x!==a&&Ps(o,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=v&&_!==s&&_!==a&&Ps(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==s&&x!==a&&Ps(o,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ay(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ea(s,r)&&kd(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gr(n),Gr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function Cy(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fy(a,o)){let c=Ud(a,o);a=qi(a,a.next),c=qi(c,c.next),Hr(a,e,t,n,s,r,0),Hr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ry(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Dd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ny(l));for(s.sort(Py),r=0;r<s.length;r++)t=Ly(s[r],t);return t}function Py(i,e){return i.x-e.x}function Ly(i,e){const t=Iy(i,e);if(!t)return e;const n=Ud(t,i);return qi(n,n.next),qi(t,t.next)}function Iy(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Ps(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Vr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Dy(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Dy(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function ky(i,e,t,n){let s=i;do s.z===0&&(s.z=Ml(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Uy(s)}function Uy(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Ml(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ny(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ps(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Oy(i,e)&&(Vr(i,e)&&Vr(e,i)&&zy(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Ea(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ea(i,e){return i.x===e.x&&i.y===e.y}function kd(i,e,t,n){const s=Po(yt(i,e,t)),r=Po(yt(i,e,n)),a=Po(yt(t,n,i)),o=Po(yt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ro(i,t,e)||r===0&&Ro(i,n,e)||a===0&&Ro(t,i,n)||o===0&&Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Po(i){return i>0?1:i<0?-1:0}function Oy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function zy(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){const t=new Sl(i.i,i.x,i.y),n=new Sl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bu(i,e,t,n){const s=new Sl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function By(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Cr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Cr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Hu(e),Vu(n,e);let a=e.length;t.forEach(Hu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Vu(n,t[c]);const o=Ty.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Hu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class lh extends lt{constructor(e=new Id([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Hy;let _,x=!1,E,M,T,R;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,E=p.computeFrenetFrames(h,!1),M=new C,T=new C,R=new C),d||(v=0,f=0,m=0,g=0);const S=o.extractPoints(l);let b=S.shape;const P=S.holes;if(!Cr.isClockWise(b)){b=b.reverse();for(let G=0,ie=P.length;G<ie;G++){const I=P[G];Cr.isClockWise(I)&&(P[G]=I.reverse())}}const B=Cr.triangulateShape(b,P),U=b;for(let G=0,ie=P.length;G<ie;G++){const I=P[G];b=b.concat(I)}function V(G,ie,I){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(ie,I)}const D=b.length,O=B.length;function k(G,ie,I){let ue,te,me;const ge=G.x-ie.x,Ue=G.y-ie.y,_e=I.x-G.x,L=I.y-G.y,w=ge*ge+Ue*Ue,X=ge*L-Ue*_e;if(Math.abs(X)>Number.EPSILON){const se=Math.sqrt(w),j=Math.sqrt(_e*_e+L*L),K=ie.x-Ue/se,Ee=ie.y+ge/se,Me=I.x-L/j,Ae=I.y+_e/j,Ye=((Me-K)*L-(Ae-Ee)*_e)/(ge*L-Ue*_e);ue=K+ge*Ye-G.x,te=Ee+Ue*Ye-G.y;const de=ue*ue+te*te;if(de<=2)return new fe(ue,te);me=Math.sqrt(de/2)}else{let se=!1;ge>Number.EPSILON?_e>Number.EPSILON&&(se=!0):ge<-Number.EPSILON?_e<-Number.EPSILON&&(se=!0):Math.sign(Ue)===Math.sign(L)&&(se=!0),se?(ue=-Ue,te=ge,me=Math.sqrt(w)):(ue=ge,te=Ue,me=Math.sqrt(w/2))}return new fe(ue/me,te/me)}const J=[];for(let G=0,ie=U.length,I=ie-1,ue=G+1;G<ie;G++,I++,ue++)I===ie&&(I=0),ue===ie&&(ue=0),J[G]=k(U[G],U[I],U[ue]);const ce=[];let le,Se=J.concat();for(let G=0,ie=P.length;G<ie;G++){const I=P[G];le=[];for(let ue=0,te=I.length,me=te-1,ge=ue+1;ue<te;ue++,me++,ge++)me===te&&(me=0),ge===te&&(ge=0),le[ue]=k(I[ue],I[me],I[ge]);ce.push(le),Se=Se.concat(le)}for(let G=0;G<v;G++){const ie=G/v,I=f*Math.cos(ie*Math.PI/2),ue=m*Math.sin(ie*Math.PI/2)+g;for(let te=0,me=U.length;te<me;te++){const ge=V(U[te],J[te],ue);oe(ge.x,ge.y,-I)}for(let te=0,me=P.length;te<me;te++){const ge=P[te];le=ce[te];for(let Ue=0,_e=ge.length;Ue<_e;Ue++){const L=V(ge[Ue],le[Ue],ue);oe(L.x,L.y,-I)}}}const He=m+g;for(let G=0;G<D;G++){const ie=d?V(b[G],Se[G],He):b[G];x?(T.copy(E.normals[0]).multiplyScalar(ie.x),M.copy(E.binormals[0]).multiplyScalar(ie.y),R.copy(_[0]).add(T).add(M),oe(R.x,R.y,R.z)):oe(ie.x,ie.y,0)}for(let G=1;G<=h;G++)for(let ie=0;ie<D;ie++){const I=d?V(b[ie],Se[ie],He):b[ie];x?(T.copy(E.normals[G]).multiplyScalar(I.x),M.copy(E.binormals[G]).multiplyScalar(I.y),R.copy(_[G]).add(T).add(M),oe(R.x,R.y,R.z)):oe(I.x,I.y,u/h*G)}for(let G=v-1;G>=0;G--){const ie=G/v,I=f*Math.cos(ie*Math.PI/2),ue=m*Math.sin(ie*Math.PI/2)+g;for(let te=0,me=U.length;te<me;te++){const ge=V(U[te],J[te],ue);oe(ge.x,ge.y,u+I)}for(let te=0,me=P.length;te<me;te++){const ge=P[te];le=ce[te];for(let Ue=0,_e=ge.length;Ue<_e;Ue++){const L=V(ge[Ue],le[Ue],ue);x?oe(L.x,L.y+_[h-1].y,_[h-1].x+I):oe(L.x,L.y,u+I)}}}F(),re();function F(){const G=s.length/3;if(d){let ie=0,I=D*ie;for(let ue=0;ue<O;ue++){const te=B[ue];z(te[2]+I,te[1]+I,te[0]+I)}ie=h+v*2,I=D*ie;for(let ue=0;ue<O;ue++){const te=B[ue];z(te[0]+I,te[1]+I,te[2]+I)}}else{for(let ie=0;ie<O;ie++){const I=B[ie];z(I[2],I[1],I[0])}for(let ie=0;ie<O;ie++){const I=B[ie];z(I[0]+D*h,I[1]+D*h,I[2]+D*h)}}n.addGroup(G,s.length/3-G,0)}function re(){const G=s.length/3;let ie=0;ee(U,ie),ie+=U.length;for(let I=0,ue=P.length;I<ue;I++){const te=P[I];ee(te,ie),ie+=te.length}n.addGroup(G,s.length/3-G,1)}function ee(G,ie){let I=G.length;for(;--I>=0;){const ue=I;let te=I-1;te<0&&(te=G.length-1);for(let me=0,ge=h+v*2;me<ge;me++){const Ue=D*me,_e=D*(me+1),L=ie+ue+Ue,w=ie+te+Ue,X=ie+te+_e,se=ie+ue+_e;q(L,w,X,se)}}}function oe(G,ie,I){c.push(G),c.push(ie),c.push(I)}function z(G,ie,I){ae(G),ae(ie),ae(I);const ue=s.length/3,te=y.generateTopUV(n,s,ue-3,ue-2,ue-1);ne(te[0]),ne(te[1]),ne(te[2])}function q(G,ie,I,ue){ae(G),ae(ie),ae(ue),ae(ie),ae(I),ae(ue);const te=s.length/3,me=y.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);ne(me[0]),ne(me[1]),ne(me[3]),ne(me[1]),ne(me[2]),ne(me[3])}function ae(G){s.push(c[G*3+0]),s.push(c[G*3+1]),s.push(c[G*3+2])}function ne(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ha[s.type]().fromJSON(s)),new lh(n,e.options)}}const Hy={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],g=e[r*3],v=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-u),new fe(d,1-m),new fe(g,1-p)]:[new fe(o,1-c),new fe(h,1-u),new fe(f,1-m),new fe(v,1-p)]}};function Vy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rr extends wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rr(e.radius,e.detail)}}class ua extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new C,m=new fe;for(let g=0;g<=s;g++){for(let v=0;v<=n;v++){const p=r+v/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<s;g++){const v=g*(n+1);for(let p=0;p<n;p++){const y=p+v,_=y,x=y+n+1,E=y+n+2,M=y+1;o.push(_,x,M),o.push(x,E,M)}}this.setIndex(o),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jt extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],g=[],v=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),v.push(M+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],E=h[p+1][y],M=h[p+1][y+1];(p!==0||a>0)&&f.push(_,x,M),(p!==n-1||c<Math.PI)&&f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const g=m/s*r,v=f/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(g),u.y=(e+t*Math.cos(v))*Math.sin(g),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const g=(s+1)*f+m-1,v=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;a.push(g,v,y),a.push(v,p,y)}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gi extends lt{constructor(e=new ah(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new fe;let h=new C;const u=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function g(){for(let _=0;_<t;_++)v(_);v(r===!1?t:0),y(),p()}function v(_){h=e.getPointAt(_/t,h);const x=a.normals[_],E=a.binormals[_];for(let M=0;M<=s;M++){const T=M/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);c.x=S*x.x+R*E.x,c.y=S*x.y+R*E.y,c.z=S*x.z+R*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){const E=(s+1)*(_-1)+(x-1),M=(s+1)*_+(x-1),T=(s+1)*_+x,R=(s+1)*(_-1)+x;m.push(E,M,R),m.push(M,T,R)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)l.x=_/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gi(new ha[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gy extends Vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class De extends Ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fn extends De{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wy extends Ln{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $y{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Xy=new $y;class Yr{constructor(e){this.manager=e!==void 0?e:Xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class jy extends Error{constructor(e,t){super(e),this.response=t}}class qy extends Yr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:s});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Jn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const v=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let M=0,T=h.length;M<T;M++){const R=h[M];R.onProgress&&R.onProgress(E)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(v)}else throw new jy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{fa.add(e,l);const h=Jn[e];delete Jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yy extends Yr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Br("img");function c(){h(),fa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Gu extends Yr{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,a=new Yy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Nd extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zy extends Nd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ac=new Ie,Wu=new C,$u=new C;class Ky{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jy extends Ky{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qy extends Nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);const Fd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tb=new nh(-1,1,1,-1,0,1);class nb extends lt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const ib=new nb;class hh{constructor(e){this._mesh=new pe(ib,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Od extends er{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ju extends er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class sb extends er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Od(Fd),this.copyPass.material.blending=si,this.clock=new eb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ju!==void 0&&(a instanceof ju?n=!0:a instanceof sb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ob extends er{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ab={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qs extends er{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new _n(r,a,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new _n(r,a,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=ab;this.highPassUniforms=js.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Fd;this.copyUniforms=js.clone(h.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new Ma,this.fsQuad=new hh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qs.BlurDirectionX=new fe(1,0);qs.BlurDirectionY=new fe(0,1);const cb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class lb extends er{constructor(){super();const e=cb;this.uniforms=js.clone(e.uniforms),this.material=new Gy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new hh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Be={gameName:"The Grand Tour",subtitle:"Ein Rennrad-Abenteuer",startPrompt:"Beliebige Taste drücken, um zu starten",wunschzettel:{briefkasten:"https://grand-tour-wunsch.google-e22.workers.dev"},colors:{gold:"#f5c76b",accent:"#ff7a3d",jersey:"#d62839",bikeFrame:"#14365c"},sunElevation:5,exposure:.62,titleRider:{number:11,name:"PAUL",brand:"canyon"},music:{volume:.45,tempo:78,chords:[["A3","C4","E4"],["F3","A3","C4"],["C3","E3","G3"],["G3","B3","D4"]]},soundVolume:.8,windLautstaerke:.3,zeitfahren:{luftwiderstand:.8},windschatten:.4,riderPower:520,steering:{start:.25,vollNach:1.3,stick:.4},sprint:{dauer:15,aufladen:30,kraft:1.6,abLadung:.75,windschattenBonus:1.5},rollen:{rennrad:{asphalt:.005,schotter:.02,wiese:.06},cx:{asphalt:.008,schotter:.011,wiese:.022}},jahreszeiten:{rennrad:"sommer",cx:"herbst"},raceLaps:3},hb="Paulsdorf",At=2.9,ub={House_1:0,House_2:0,House_3:0,House_4:0,Inn:0,Blacksmith:0,Stable:0,Sawmill:0,Mill:0,Bell_Tower:0},qu=[["House_1",5],["House_2",5],["House_3",3],["House_4",2],["Inn",1],["Blacksmith",1.2],["Stable",.8],["Sawmill",.6]];function fb(i,e){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d");n.fillStyle="#f2c230",n.fillRect(0,0,512,256),n.strokeStyle="#111",n.lineWidth=14,n.strokeRect(14,14,484,228),n.fillStyle="#111",n.font='800 92px "Barlow Condensed", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,120),n.font='600 34px "Barlow Condensed", sans-serif',n.fillText("Landkreis Grand Tour",256,200);const s=new xn(t);s.colorSpace=_t;const r=new De({color:"#cfcfcf"}),a=new ot,o=new pe(new nt(1.6,.8,.05),[r,r,r,r,new De({map:s,roughness:.5}),r]);o.position.y=2.2;const c=new pe(new rt(.04,.04,2.6),new De({color:"#bfc3c8",metalness:.8,roughness:.3}));return c.position.y=1.3,a.add(o,c),a}function db(){return{pole:new rt(.07,.1,3.6,6).translate(0,1.8,0),arm:new nt(.08,.08,.7).translate(0,3.5,.3),glas:new Jt(.17,10,8).translate(0,3.25,.6)}}function pb(i,e){let t=2024;const n=()=>((t=t*16807%2147483647)-1)/2147483646,s=new ot;s.name="dorf";const r=i.length,a=i.SH,o={},c=[],l=[],h=new De({vertexColors:!0,roughness:.85}),u=new Map,d=(b,P,N,B,U,V=null)=>{const D=new Ie().compose(new C(P,V??i.terrainHeight(P,N)-.05,N),new xt().setFromAxisAngle(new C(0,1,0),B),new C(U,U,U));u.has(b)||u.set(b,[]),u.get(b).push(D)},f=(b,P)=>{const N=e[b].boundingBox;return{w:(N.max.x-N.min.x)*P,d:(N.max.z-N.min.z)*P}},m=(b,P,N)=>i.clearOfPath(b,P,N)&&l.every(B=>Math.hypot(B.x-b,B.z-P)>B.r+N),g=b=>Math.atan2(b*o.tz,-b*o.tx),v=()=>{const b=qu.reduce((N,[,B])=>N+B,0);let P=n()*b;for(const[N,B]of qu)if((P-=B)<=0)return N;return"House_1"};let p=0,y=1/0;for(let b=60;b<r-60;b+=10){const P=i.turnBetween(Math.round((b-30)/i.ds),Math.round((b+30)/i.ds));P<y&&Math.abs(b-r*.5)<r*.4&&(y=P,p=b)}const _=1;{i.poseAt(p,_*(a+17),o),m(o.x,o.z,5)&&(d("Bell_Tower",o.x,o.z,g(_),At*1.15),l.push({x:o.x,z:o.z,r:4.5}),c.push({x:o.x,z:o.z,r:6}));const b=[["Well",0,7,0,At],["MarketStand_1",-11,6,.3,At],["MarketStand_2",-6,10.5,-.2,At],["MarketStand_1",7,10,.5,At],["MarketStand_2",11,5.5,-.4,At],["Cart",-14,11,1.2,At],["Bench_1",-3,3.2,0,At],["Bench_1",4,3.2,0,At],["Barrel",9,13,0,At],["Barrel",9.8,13.4,0,At],["Crate",-9,13,.4,At],["Hay",13,12,.2,At],["Bags",-12,8.5,0,At],["Bonfire_Lit",2,14,0,At]];for(const[P,N,B,U,V]of b)i.poseAt(p+N,_*(a+B),o),i.clearOfPath(o.x,o.z,.8)&&(d(P,o.x,o.z,g(_)+U,V),c.push({x:o.x,z:o.z,r:2.5}));if(i.poseAt(p,_*(a+9.5),o),l.push({x:o.x,z:o.z,r:13,flach:!0}),c.push({x:o.x,z:o.z,r:15}),i.roadTex){const P=i.roadTex.clone();P.wrapS=P.wrapT=Cn,P.repeat.set(3,2.2),P.needsUpdate=!0;const N=new pe(new Ta(15,40),new De({map:P,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));N.rotation.x=-Math.PI/2,N.rotation.z=o.heading,N.position.set(o.x,i.terrainHeight(o.x,o.z)+.04,o.z),N.receiveShadow=!0,s.add(N)}}for(const b of[-1,1]){let P=25+n()*8;for(;P<r-20;){const N=v(),B=At*(.92+n()*.16),{w:U,d:V}=f(N,B),D=b*(a+1.6+V/2+n()*2.2);i.poseAt(P+U/2,D,o);const O=Math.max(U,V)*.5;if(m(o.x,o.z,O*.9)){const k=g(b)+ub[N]+(n()-.5)*.18;if(d(N,o.x,o.z,k,B),l.push({x:o.x,z:o.z,r:O*.9}),c.push({x:o.x,z:o.z,r:O+2}),n()<.55){const J=(n()<.5?-1:1)*(U/2+.8);i.poseAt(P+U/2+J,b*(a+1.4+n()*1.2),o);const ce=["Barrel","Crate","Hay","Package_1","Bags"][Math.floor(n()*5)];i.clearOfPath(o.x,o.z,.6)&&d(ce,o.x,o.z,n()*6,At)}if(P+=U+1.2+n()*4,n()<.22){const J=9+n()*9;if(n()<.6)for(let ce=.8;ce<J-.8;ce+=2.3)i.poseAt(P+ce,b*(a+1.3),o),i.clearOfPath(o.x,o.z,.3)&&d("Fence",o.x,o.z,o.heading+Math.PI/2,At);P+=J}}else P+=4}}for(const b of[17,31])for(const P of[-1,1]){let N=n()*10;for(;N<r;){const B=v(),U=At*(.9+n()*.2),{w:V,d:D}=f(B,U);i.poseAt(N,P*(a+b+n()*5),o);const O=Math.max(V,D)*.5;if(n()<(b<20?.75:.5)&&m(o.x,o.z,O)){const k=g(P)+[0,Math.PI/2,-Math.PI/2,.3][Math.floor(n()*4)]+(n()-.5)*.3;d(B,o.x,o.z,k,U),l.push({x:o.x,z:o.z,r:O*.9}),c.push({x:o.x,z:o.z,r:O+2})}N+=V+3+n()*9}}for(const[b,P,N]of[["Mill",.27,30],["Mill",.71,-34]])i.poseAt(r*P,N+Math.sign(N)*a,o),m(o.x,o.z,6)&&(d(b,o.x,o.z,g(Math.sign(N)),At*1.2),l.push({x:o.x,z:o.z,r:5}),c.push({x:o.x,z:o.z,r:7}));const x=db(),E=new De({color:"#4a3424",roughness:.9}),M=new De({color:"#fff1c4",emissive:"#ffbf5a",emissiveIntensity:1.4}),T=[];for(let b=18,P=0;b<r-10;b+=26,P++){const N=P%2?1:-1;i.poseAt(b,N*(a+.7),o),i.clearOfPath(o.x,o.z,.5)&&T.push(new Ie().compose(new C(o.x,i.terrainHeight(o.x,o.z),o.z),new xt().setFromAxisAngle(new C(0,1,0),g(N)),new C(1,1,1)))}for(const[b,P]of[[x.pole,E],[x.arm,E],[x.glas,M]]){const N=new aa(b,P,T.length);T.forEach((B,U)=>N.setMatrixAt(U,B)),N.castShadow=P===E,s.add(N)}const R=["#d62839","#f6f6f6","#2f7cf6","#f2d14b","#2bb24c"];for(const b of[.08,p/r,.62,.9]){const P={},N={};i.poseAt(r*b,-(a+.7),P),i.poseAt(r*b,a+.7,N);const B=new C(P.x,P.h+4.6,P.z),U=new C(N.x,N.h+4.6,N.z),V=B.clone().lerp(U,.5);V.y-=.8;const D=new ah(B,V,U);s.add(new pe(new Gi(D,16,.015,4),new De({color:"#333"})));for(let O=1;O<16;O++){const k=D.getPoint(O/16),J=new pe(new $i(.18,.45,3),new De({color:R[O%R.length],side:en}));J.position.copy(k),J.position.y-=.25,J.rotation.x=Math.PI,s.add(J)}}{i.poseAt(r-30,a+1.1,o);const b=fb(hb);b.position.set(o.x,i.terrainHeight(o.x,o.z),o.z),b.rotation.y=Math.atan2(-o.tx,-o.tz),s.add(b)}const S=90;for(const[b,P]of u){const N=new Map;for(const B of P){const U=`${Math.floor(B.elements[12]/S)},${Math.floor(B.elements[14]/S)}`;N.has(U)||N.set(U,[]),N.get(U).push(B)}for(const B of N.values()){const U=new aa(e[b],h,B.length);B.forEach((V,D)=>U.setMatrixAt(D,V)),U.castShadow=!0,U.receiveShadow=!0,U.computeBoundingSphere(),s.add(U)}}return{group:s,footprints:c,platzS:p,solid:l.filter(b=>b.r>0&&!b.flach)}}class Wr extends pe{constructor(){const e=Wr.SkyShader,t=new Vt({name:e.name,uniforms:js.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:qt,depthWrite:!1});super(new nt(1,1,1),t),this.isSky=!0}}Wr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},up:{value:new C(0,1,0)}},vertexShader:`
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

		}`};function Ys(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new lt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Yu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const m=Yu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Yu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ct(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const g=h.getComponent(d,m);o.setComponent(d+u,m,g)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function mb(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,_=o.length;y<_;y++){const x=o[y],E=i.attributes[x];c[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const M=i.morphAttributes[x];M&&(l[x]||(l[x]=[]),M.forEach((T,R)=>{const S=new T.array.constructor(T.count*T.itemSize);l[x][R]=new T.constructor(S,T.itemSize,T.normalized)}))}const f=e*.5,m=Math.log10(1/e),g=Math.pow(10,m),v=f*g;for(let y=0;y<r;y++){const _=n?n.getX(y):y;let x="";for(let E=0,M=o.length;E<M;E++){const T=o[E],R=i.getAttribute(T),S=R.itemSize;for(let b=0;b<S;b++)x+=`${~~(R[u[b]](_)*g+v)},`}if(x in t)h.push(t[x]);else{for(let E=0,M=o.length;E<M;E++){const T=o[E],R=i.getAttribute(T),S=i.morphAttributes[T],b=R.itemSize,P=c[T],N=l[T];for(let B=0;B<b;B++){const U=u[B],V=d[B];if(P[V](a,R[U](_)),S)for(let D=0,O=S.length;D<O;D++)N[D][V](a,S[D][U](_))}}t[x]=a,h.push(a),a++}}const p=i.clone();for(const y in i.attributes){const _=c[y];if(p.setAttribute(y,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),y in l)for(let x=0;x<l[y].length;x++){const E=l[y][x];p.morphAttributes[y][x]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}function ei(i){let e=i|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cc(i=1){const e=ei(i),t=new Uint8Array(256);for(let c=0;c<256;c++)t[c]=c;for(let c=255;c>0;c--){const l=Math.floor(e()*(c+1));[t[c],t[l]]=[t[l],t[c]]}const n=new Uint8Array(512);for(let c=0;c<512;c++)n[c]=t[c&255];const s=[1,-1,1,-1,1,-1,0,0],r=[1,1,-1,-1,0,0,1,-1],a=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return(c,l)=>{const h=(c+l)*a,u=Math.floor(c+h),d=Math.floor(l+h),f=(u+d)*o,m=c-(u-f),g=l-(d-f),v=m>g?1:0,p=m>g?0:1,y=m-v+o,_=g-p+o,x=m-1+2*o,E=g-1+2*o,M=u&255,T=d&255;let R=0,S=.5-m*m-g*g;if(S>0){const N=n[M+n[T]]&7;S*=S,R+=S*S*(s[N]*m+r[N]*g)}let b=.5-y*y-_*_;if(b>0){const N=n[M+v+n[T+p]]&7;b*=b,R+=b*b*(s[N]*y+r[N]*_)}let P=.5-x*x-E*E;if(P>0){const N=n[M+1+n[T+1]]&7;P*=P,R+=P*P*(s[N]*x+r[N]*E)}return 70*R}}const dt=(i,e,t)=>Math.min(t,Math.max(e,i)),wn=(i,e,t)=>i+(e-i)*t,kt=(i,e,t)=>{const n=dt((t-i)/(e-i),0,1);return n*n*(3-2*n)},We=(i,e,t,n)=>wn(i,e,1-Math.exp(-t*n)),Zu=1800,Ku=320,Lo=20;function Xt(i,e,t,{repeat:n=null,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const a=new xn(r);return s&&(a.colorSpace=_t),n&&(a.wrapS=a.wrapT=Cn,a.repeat.set(n[0],n[1])),a.anisotropy=8,a}function Ls(i,e,t,n,s,r,a,o=1){i.fillStyle=s,i.fillRect(0,0,e,t);for(let c=0;c<a;c++){const l=Math.floor(n()*r);i.fillStyle=`rgba(${l},${l},${l},${.08+n()*.18})`,i.fillRect(n()*e,n()*t,o+n()*o,o+n()*o)}}function gb(i){return Xt(512,1024,(e,t,n)=>{e.fillStyle="#3c3a37",e.fillRect(0,0,t,n);const s=40,r=n/s;for(let o=0;o<s;o++){let c=o%2?-r*.6:0;for(;c<t;){const l=r*(.9+i()*.7),h=105+Math.floor(i()*55),u=Math.floor(i()*12);e.fillStyle=`rgb(${h+u},${h+u-4},${h-8})`;const d=2.2,f=c+d,m=o*r+d,g=l-d*2,v=r-d*2;e.beginPath(),e.roundRect?e.roundRect(f,m,g,v,6):e.rect(f,m,g,v),e.fill(),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(f+2,m+1,g-4,v*.3),e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(f+2,m+v*.72,g-4,v*.25),c+=l}}Ls(e,t,n,i,"rgba(0,0,0,0)",120,6e3,1.2);const a=e.createLinearGradient(0,0,t,0);a.addColorStop(0,"rgba(30,28,24,0.45)"),a.addColorStop(.08,"rgba(30,28,24,0)"),a.addColorStop(.92,"rgba(30,28,24,0)"),a.addColorStop(1,"rgba(30,28,24,0.45)"),e.fillStyle=a,e.fillRect(0,0,t,n)})}function vb(i){return Xt(256,1024,(e,t,n)=>{Ls(e,t,n,i,"#6b5136",255,22e3,1.4);for(let r=0;r<900;r++){const a=90+Math.floor(i()*70);e.fillStyle=`rgba(${a},${a-8},${a-20},${.4+i()*.4})`,e.fillRect(i()*t,i()*n,1.5+i()*2.5,1.5+i()*2.5)}e.fillStyle="rgba(35,24,14,0.28)",e.fillRect(t*.28,0,t*.1,n),e.fillRect(t*.62,0,t*.1,n);for(let r=0;r<4;r++)e.fillStyle="rgba(30,24,18,0.55)",e.beginPath(),e.ellipse(t*(.25+i()*.5),i()*n,18+i()*30,30+i()*60,0,0,Math.PI*2),e.fill();for(let r=0;r<7;r++){e.strokeStyle="rgba(70,48,28,0.9)",e.lineWidth=3+i()*4,e.beginPath();const a=i()*n;e.moveTo(0,a),e.bezierCurveTo(t*.3,a+(i()-.5)*40,t*.7,a+(i()-.5)*40,t,a+(i()-.5)*30),e.stroke()}const s=e.createLinearGradient(0,0,t,0);s.addColorStop(0,"rgba(60,70,30,0.6)"),s.addColorStop(.12,"rgba(60,70,30,0)"),s.addColorStop(.88,"rgba(60,70,30,0)"),s.addColorStop(1,"rgba(60,70,30,0.6)"),e.fillStyle=s,e.fillRect(0,0,t,n)})}class Ju{constructor(e,t="road",n=null,s=null){if(this.kind=t,this.cx=t==="cx",this.tt=t==="tt",this.nature=n,this.dorf=s,this.season=(Be.jahreszeiten||{})[this.cx?"cx":"rennrad"]||(this.cx?"herbst":"sommer"),this.autumn=this.season==="herbst",this.RH=this.cx?1.6:this.tt?3.2:3.6,this.SH=this.cx?2.4:this.tt?4.4:5,this.scene=new Eu,this.rand=ei(1337),this.n1=cc(11),this.n2=cc(23),this.n3=cc(37),this._nr={found:!1,dist:0,i:0,f:0,h:0,s:0,lateral:0},this.focus=new C,this.setupLakes(),this.buildTrack(),this.buildSky(e),this.buildLights(),this.buildTerrain(),this.buildLakes(),this.buildRoad(),this.buildVegetation(),this.buildProps(),this.tt&&this.dorf){const r=pb(this,this.dorf);this.village=r.group,this.solid=r.solid,this.clearAreas(r.footprints),this.scene.add(this.village)}this.buildFinishZone(),this.buildClouds(),this.buildMotes()}fbm(e,t){let n=1,s=1,r=0,a=0;for(let o=0;o<4;o++)r+=n*this.n1(e*s,t*s),a+=n,n*=.5,s*=2.03;return r/a}setupLakes(){this.lakes=this.cx||this.tt?[]:[{x:-40,z:-30,r:120},{x:180,z:140,r:60},{x:-200,z:170,r:60},{x:-560,z:0,r:70}];for(const e of this.lakes){let t=1/0;for(let n=0;n<64;n++){const s=n/64*Math.PI*2,r=this.lakeRadius(e,s)*1.3;t=Math.min(t,this.rawHeight(e.x+Math.cos(s)*r,e.z+Math.sin(s)*r))}e.level=t-.4}}lakeRadius(e,t){return e.r*(1+.22*this.n3(Math.cos(t)*1.2+e.x*.013,Math.sin(t)*1.2+e.z*.013))}lakeAt(e,t,n=0){for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(!(o>s.r*1.6+n)&&o<this.lakeRadius(s,Math.atan2(a,r))*1.3+n)return s}return null}baseHeight(e,t){let n=this.rawHeight(e,t);for(const s of this.lakes){const r=e-s.x,a=t-s.z,o=Math.hypot(r,a);if(o>s.r*1.6)continue;const c=this.lakeRadius(s,Math.atan2(a,r))*1.3;if(o>=c)continue;const l=s.level-4.5*(1-o/c*(o/c));n=wn(l,n,kt(c*.58,c,o))}return n}rawHeight(e,t){const n=Math.hypot(e,t);let s=this.fbm(e*.0035,t*.0035)*16+this.n2(e*.02,t*.02)*1.2;this.tt&&(s*=.3);const r=kt(660,880,n);if(r>0){const a=1-Math.abs(this.fbm(e*.0032+7,t*.0032-3));s+=r*(35+a*a*120)}return s}villageRoute(){const e=[[-80,-170],[70,-170],[95,-120],[180,-110],[190,-20],[140,10],[150,90],[60,120],[20,175],[-90,160],[-110,90],[-190,70],[-200,-40],[-130,-60],[-120,-130]],t=ei(77),n=e.map(([c,l])=>new C(c+(t()-.5)*10,0,l+(t()-.5)*10)),s=[],r=n.length;let a=0,o=0;for(let c=0;c<r;c++){const l=n[(c-1+r)%r],h=n[c],u=n[(c+1)%r],d=h.clone().sub(l),f=u.clone().sub(h),m=Math.min(24,d.length()*.4),g=Math.min(24,f.length()*.4),v=h.clone().addScaledVector(d.normalize(),-m),p=h.clone().addScaledVector(f.normalize(),g);for(let _=0;_<=1.0001;_+=1/6){const x=1-_;s.push(new C(x*x*v.x+2*x*_*h.x+_*_*p.x,0,x*x*v.z+2*x*_*h.z+_*_*p.z))}const y=u.distanceTo(h);y>60&&(y>a&&(a=y,o=s.length),s.push(h.clone().lerp(u,.5)))}return[...s.slice(o),...s.slice(0,o)]}buildTrack(){let e=[];this.tt&&(e=this.villageRoute());const t=this.cx?24:16;for(let f=0;f<(this.tt?0:t);f++){const m=f/t*Math.PI*2,g=this.cx?200+45*Math.sin(3*m+.6)+30*Math.sin(5*m+1.9)+16*Math.sin(9*m+.4):360+80*Math.sin(3*m+.6)+45*Math.sin(5*m+1.9)+25*Math.sin(7*m);e.push(new C(Math.cos(m)*g*1.18,0,Math.sin(m)*g*.95))}const n=new Rs(e,!0,"centripetal"),s=this.cx?1600:this.tt?1800:2400,r=n.getSpacedPoints(s);this.N=s,this.length=n.getLength(),this.ds=this.length/s;const a=this.px=new Float32Array(s),o=this.pz=new Float32Array(s),c=this.ph=new Float32Array(s),l=this.tx=new Float32Array(s),h=this.tz=new Float32Array(s);for(let f=0;f<s;f++)a[f]=r[f].x,o[f]=r[f].z;for(let f=0;f<s;f++){const m=(f-1+s)%s,g=(f+1)%s,v=a[g]-a[m],p=o[g]-o[m],y=Math.hypot(v,p);l[f]=v/y,h[f]=p/y}let u=new Float32Array(s);for(let f=0;f<s;f++)u[f]=this.baseHeight(a[f],o[f]);const d=30;for(let f=0;f<3;f++){const m=new Float32Array(s);for(let g=0;g<s;g++){let v=0;for(let p=-d;p<=d;p++)v+=u[(g+p+s)%s];m[g]=v/(2*d+1)}u=m}if(this.drops=[],this.cx){const f=Math.round(45/this.ds),m=Math.round(15/this.ds),g=[];for(let _=Math.round(80/this.ds);_<s-Math.round(80/this.ds);_+=2)g.push({i:_,t:this.turnBetween(_-f,_+m)});g.sort((_,x)=>_.t-x.t);const v=[];for(const _ of g){if(v.length>=5)break;v.every(x=>Math.abs(x-_.i)>s/7)&&v.push(_.i)}v.sort((_,x)=>_-x);const p=[1.1,1.4,1,1.5,1.2];let y=0;v.forEach((_,x)=>{this.drops.push({i:_,s:(_+1)*this.ds,d:p[x],turn:this.turnBetween(_-f,_+m)}),y+=p[x]});for(let _=0;_<s;_++){let x=y*(_/s);for(const E of this.drops)_>E.i&&(x-=E.d);u[_]+=x}}c.set(u),this.rhArr=new Float32Array(s),this.shArr=new Float32Array(s);for(let f=0;f<s;f++){let m=this.RH;if(this.cx){const g=f/s*Math.PI*2;m=1.2+.3*Math.sin(3*g+1)+.2*Math.sin(7*g+2.2),m=Math.min(this.RH,Math.max(.75,m));const v=Math.min(f,s-f)*this.ds;m=wn(this.RH,m,kt(15,50,v))}this.rhArr[f]=m,this.shArr[f]=m+(this.SH-this.RH)}if(this.rocks=[],this.cx){const f=ei(99);let m=0;for(;this.rocks.length<0&&m++<800;){const g=Math.floor(f()*s),v=g*this.ds;if(Math.min(g,s-g)*this.ds<50||this.drops.some(E=>Math.abs(E.i-g)*this.ds<30)||this.rocks.some(E=>Math.abs(E.i-g)*this.ds<45))continue;const p=this.rhArr[g];if(p<1.05||this.turnBetween(g-Math.round(20/this.ds),g)>.35)continue;const y=.35+f()*.25,x=(f()<.5?-1:1)*(p-y-.1)*(.6+.4*f());this.rocks.push({i:g,s:v,lat:x,r:y})}}this.grid=new Map;for(let f=0;f<s;f++){const m=this.cellKey(Math.floor(a[f]/Lo),Math.floor(o[f]/Lo));let g=this.grid.get(m);g||this.grid.set(m,g=[]),g.push(f)}}cellKey(e,t){return(e+1e3)*4e3+(t+1e3)}turnBetween(e,t){const n=this.N,s=o=>Math.atan2(this.tx[(o%n+n)%n],this.tz[(o%n+n)%n]),r=s(e);let a=0;for(let o=e;o<=t;o++)a=Math.max(a,Math.abs(Math.atan2(Math.sin(s(o)-r),Math.cos(s(o)-r))));return a}shAt(e){const t=Math.floor((e%this.length+this.length)%this.length/this.ds)%this.N;return this.shArr[t]}nearest(e,t){const n=this._nr,s=Math.floor(e/Lo),r=Math.floor(t/Lo);let a=1/0,o=-1;for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++){const d=this.grid.get(this.cellKey(s+h,r+u));if(d)for(let f=0;f<d.length;f++){const m=d[f],g=this.px[m]-e,v=this.pz[m]-t,p=g*g+v*v;p<a&&(a=p,o=m)}}if(o<0)return n.found=!1,n.dist=1/0,n;const c=this.N;a=1/0;for(const h of[(o-1+c)%c,o]){const u=(h+1)%c,d=this.px[h],f=this.pz[h],m=this.px[u]-d,g=this.pz[u]-f,v=dt(((e-d)*m+(t-f)*g)/(m*m+g*g),0,1),p=d+m*v,y=f+g*v,_=(e-p)*(e-p)+(t-y)*(t-y);_<a&&(a=_,n.i=h,n.f=v,n.lateral=(e-p)*-this.tz[h]+(t-y)*this.tx[h])}const l=(n.i+1)%c;return n.found=!0,n.dist=Math.sqrt(a),n.h=wn(this.ph[n.i],this.ph[l],n.f),n.s=(n.i+n.f)*this.ds,n}terrainHeight(e,t){const n=this.nearest(e,t),s=this.baseHeight(e,t);if(!n.found)return s;const r=this.rhArr[n.i],a=kt(r+1.2,r+22,n.dist);return wn(n.h-.15,s,a)}groundAt(e,t,n={}){const s=this.nearest(e,t),r=s.found?this.rhArr[s.i]:this.RH,a=s.found?this.shArr[s.i]:this.SH;return s.found&&s.dist<r+.2?(n.h=s.h+.06,n.surface=this.cx?"gravel":"road"):s.found&&s.dist<a?(n.h=s.h+.03-kt(r+.5,a,s.dist)*.12,n.surface=this.cx?"grass":"gravel"):(n.h=this.terrainHeight(e,t),n.surface="grass"),n}poseAt(e,t=0,n={}){const s=this.length;e=(e%s+s)%s;const r=e/this.ds,a=Math.floor(r)%this.N,o=(a+1)%this.N,c=r-Math.floor(r),l=wn(this.tx[a],this.tx[o],c),h=wn(this.tz[a],this.tz[o],c),u=Math.hypot(l,h);n.tx=l/u,n.tz=h/u,n.x=wn(this.px[a],this.px[o],c)-n.tz*t,n.z=wn(this.pz[a],this.pz[o],c)+n.tx*t,n.h=wn(this.ph[a],this.ph[o],c)+.06,n.heading=Math.atan2(n.tx,n.tz);const d=this.ph[(a-2+this.N)%this.N],f=this.ph[(a+3)%this.N];return n.pitch=Math.atan2(f-d,this.ds*5),n.s=e,n}buildSky(e){const t=new Wr;t.scale.setScalar(1e4);const n=t.material.uniforms;n.turbidity.value=7,n.rayleigh.value=2.4,n.mieCoefficient.value=.006,n.mieDirectionalG.value=.86;const s=this.poseAt(this.length-100),r=gl.degToRad(Be.sunElevation);this.sunDir=new C(-s.tx*Math.cos(r),Math.sin(r),-s.tz*Math.cos(r)).applyAxisAngle(new C(0,1,0),.35).normalize(),n.sunPosition.value.copy(this.sunDir),this.scene.add(t),this.sky=t;const a=new vl(e),o=new Eu,c=new Wr;c.scale.setScalar(50),c.material=t.material,o.add(c),this.scene.environment=a.fromScene(o,.04).texture,this.scene.environmentIntensity=.55,a.dispose(),this.scene.fog=this.cx?new ra(new ve(this.autumn?"#a8977a":"#9fa88f"),.0042):new ra(new ve("#c9a58f"),.0013)}buildLights(){const e=new Zy("#b9cdf5","#5b4634",this.cx?1.35:.9);this.scene.add(e);const t=Math.atan2(this.sunDir.x,this.sunDir.z),n=gl.degToRad(17);this.lightDir=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));const s=new Qy("#ffc994",3.4);s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=s.shadow.camera;r.left=r.bottom=-32,r.right=r.top=32,r.near=1,r.far=150,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,this.scene.add(s,s.target),this.sun=s}buildTerrain(){const e=new an(Zu,Zu,Ku,Ku);e.rotateX(-Math.PI/2);const t=e.attributes.position,n=t.count,s=new Float32Array(n);for(let _=0;_<n;_++){const x=t.getX(_),E=t.getZ(_),M=this.nearest(x,E),T=this.baseHeight(x,E);let R=T;if(M.found){const S=this.rhArr[M.i],b=kt(S+1.2,S+22,M.dist);R=wn(M.h-.15,T,b),s[_]=1-kt(this.shArr[M.i],this.shArr[M.i]+5,M.dist)}t.setY(_,R)}e.computeVertexNormals();const r=e.attributes.normal,a=new ve(this.autumn?"#4a4a22":this.cx?"#33501f":"#3f6b25"),o=new ve(this.autumn?"#7a6a2e":this.cx?"#5b6b2c":"#86a33c"),c=new ve(this.autumn?"#9a5a26":this.cx?"#7a5a34":"#b9a457"),l=new ve("#7d756b"),h=new ve("#f4efe9"),u=new ve(this.cx?"#5e4630":"#8d7457"),d=new ve("#cbb98b"),f=new Float32Array(n*3),m=new ve;for(let _=0;_<n;_++){const x=t.getX(_),E=t.getZ(_),M=t.getY(_),T=this.n3(x*.012,E*.012)*.5+.5;m.copy(a).lerp(o,T);const R=kt(.25,.8,this.n2(x*.004+50,E*.004));m.lerp(c,R*(this.autumn?.85:.55));const S=1-r.getY(_),b=dt(kt(.18,.4,S)+kt(50,100,M)*.7,0,1);m.lerp(l,b);const P=kt(115,150,M+this.n1(x*.02,E*.02)*12);m.lerp(h,P),m.lerp(u,s[_]*.85);const N=this.lakeAt(x,E,4);N&&m.lerp(d,kt(N.level+1.4,N.level-.2,M)),f[_*3]=m.r,f[_*3+1]=m.g,f[_*3+2]=m.b}e.setAttribute("color",new Ct(f,3));const g=ei(5),v=Xt(256,256,(_,x,E)=>{Ls(_,x,E,g,"#e8e8e8",255,9e3,1);for(let M=0;M<1600;M++)_.fillStyle=`rgba(30,40,10,${.08+g()*.12})`,_.fillRect(g()*x,g()*E,1,2+g()*4)},{repeat:[360,360]}),p=new De({vertexColors:!0,map:v,roughness:.95}),y=new pe(e,p);y.receiveShadow=!0,this.scene.add(y)}buildLakes(){const e=new De({color:"#2c6a8e",roughness:.05,metalness:.15,transparent:!0,opacity:.9,envMapIntensity:1.5});for(const t of this.lakes){const n=new Ta(1,96),s=n.attributes.position;for(let a=1;a<s.count;a++){const o=Math.atan2(s.getY(a),s.getX(a)),c=this.lakeRadius(t,-o)*1.3;s.setXY(a,Math.cos(o)*c,Math.sin(o)*c)}n.rotateX(-Math.PI/2);const r=new pe(n,e);r.position.set(t.x,t.level,t.z),r.receiveShadow=!0,this.scene.add(r)}}buildRoad(){const e=this.N,t=ei(9),n=this.cx?vb(t):this.tt?gb(t):Xt(256,1024,(m,g,v)=>{Ls(m,g,v,t,"#45464a",255,26e3,1.2);for(let p=0;p<18;p++)m.fillStyle=`rgba(20,20,22,${.08+t()*.1})`,m.fillRect(t()*g,t()*v,20+t()*60,30+t()*120);m.fillStyle="rgba(15,15,15,0.18)",m.fillRect(g*.2,0,g*.1,v),m.fillRect(g*.7,0,g*.1,v),m.fillStyle="#eceae2",m.fillRect(g*.035,0,g*.03,v),m.fillRect(g*.935,0,g*.03,v),m.fillRect(g*.49,0,g*.02,v*.5)});n.wrapT=Cn,this.roadTex=n;const s=Xt(256,256,(m,g,v)=>{if(this.cx){Ls(m,g,v,t,"#5a4a2c",255,6e3,1.5);for(let p=0;p<700;p++)m.fillStyle=`hsl(${20+t()*30}, ${50+t()*30}%, ${22+t()*25}%)`,m.beginPath(),m.ellipse(t()*g,t()*v,2+t()*4,1+t()*2,t()*3,0,Math.PI*2),m.fill()}else Ls(m,g,v,t,"#8a7a66",255,12e3,1.5)},{repeat:[1,1]});s.wrapS=s.wrapT=Cn;const r=[],a=[],o=[],c=[];for(let m=0;m<=e;m++){const g=m%e,v=this.px[g],p=this.pz[g],y=this.ph[g],_=-this.tz[g],x=this.tx[g],E=m*this.ds/12,M=this.rhArr[g];r.push(v-_*M,y+.06,p-x*M,v+_*M,y+.06,p+x*M),a.push(0,E,1,E);const T=this.shArr[g],R=M+.3;o.push(v-_*T,y-.12,p-x*T,v-_*R,y+.035,p-x*R,v+_*R,y+.035,p+x*R,v+_*T,y-.12,p+x*T);const S=m*this.ds/4;c.push(0,S,.4,S,.6,S,1,S)}const l=[],h=[];for(let m=0;m<e;m++){const g=m*2,v=(m+1)*2;l.push(g,g+1,v,g+1,v+1,v);const p=m*4,y=(m+1)*4;for(let _=0;_<3;_++)h.push(p+_,p+_+1,y+_,p+_+1,y+_+1,y+_)}const u=(m,g,v)=>{const p=new lt;return p.setAttribute("position",new $e(m,3)),p.setAttribute("uv",new $e(g,2)),p.setIndex(v),p.computeVertexNormals(),p},d=new pe(u(r,a,l),new De({map:n,roughness:.82,metalness:0,envMapIntensity:.6}));if(d.receiveShadow=!0,!this.cx&&!this.tt){const m=new Gu,g=d.material,v=(p,y)=>(p.wrapS=_i,p.wrapT=Cn,p.anisotropy=8,y&&(p.colorSpace=_t),p.repeat.set(1,12/14),p);m.load("texturen/strasse/farbe.jpg",p=>{g.map=v(p,!0),g.needsUpdate=!0}),m.load("texturen/strasse/normal.jpg",p=>{g.normalMap=v(p,!1),g.normalScale.set(.8,.8),g.needsUpdate=!0}),m.load("texturen/strasse/rauheit.jpg",p=>{g.roughnessMap=v(p,!1),g.roughness=1,g.needsUpdate=!0})}const f=new pe(u(o,c,h),new De({map:s,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));f.receiveShadow=!0,this.scene.add(d,f)}instanced(e,t,n,s,{cast:r=!0,receive:a=!0}={}){const o=(u,d)=>{const f=new aa(e,t,u.length);return u.forEach((m,g)=>f.setMatrixAt(g,m)),d&&d.forEach((m,g)=>f.setColorAt(g,m)),f.castShadow=r,f.receiveShadow=a,f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),this.scene.add(f),f};if(n.length<40)return o(n,s);const c=60,l=new Map;n.forEach((u,d)=>{const f=`${Math.floor(u.elements[12]/c)},${Math.floor(u.elements[14]/c)}`;l.has(f)||l.set(f,{mats:[],cols:[]});const m=l.get(f);m.mats.push(u),s&&m.cols.push(s[d])});let h=null;this.chunks||(this.chunks=[]);for(const u of l.values()){const d=o(u.mats,s?u.cols:null);this.chunks.push(d),h||(h=d)}return h}buildVegetation(){const e=this.rand,t=new xt,n=new C(0,1,0),s=(U,V,D,O,k=O,J=e()*Math.PI*2)=>new Ie().compose(new C(U,V,D),t.setFromAxisAngle(n,J).clone(),new C(O,k,O)),r=Ys([new $i(1.9,4.2,8).translate(0,3.6,0),new $i(1.4,3.4,8).translate(0,5.7,0),new $i(.85,2.4,8).translate(0,7.4,0)]),a=new rt(.16,.28,2.4,6).translate(0,1.2,0),o=new Rr(2.3,1),c=o.attributes.position;for(let U=0;U<c.count;U++){const V=c.getX(U),D=c.getY(U),O=c.getZ(U),k=1+this.n1(V*1.3+3,O*1.3+D)*.22;c.setXYZ(U,V*k,D*k*.85,O*k)}o.translate(0,4.4,0),o.computeVertexNormals();const l=new rt(.2,.32,3.2,6).translate(0,1.6,0),h=new De({color:"#ffffff",flatShading:!0,roughness:.9}),u=new De({color:"#5a4030",roughness:1}),d=[],f=[],m=[],g=[],v=this.cx?520:860;let p=0;const y=this.cx?7e3:this.tt?1300:2600;for(;d.length+m.length<y&&p++<6e4;){const U=(e()*2-1)*v,V=(e()*2-1)*v;if(Math.hypot(U,V)>(this.cx?540:870))continue;const D=this.n3(U*.006+20,V*.006);if(!this.cx&&D<.05&&e()>.08)continue;const O=this.nearest(U,V);if(O.found&&O.dist<(this.cx?this.shArr[O.i]+1.6:this.tt?26:11)||this.lakeAt(U,V,6))continue;const k=this.terrainHeight(U,V);if(k>120)continue;const J=.75+e()*.75;k>45||D>.45||e()<.35?(d.push(s(U,k-.2,V,J,J*(.9+e()*.4))),f.push(new ve().setHSL(.31+e()*.05,.45,.17+e()*.08))):(m.push(s(U,k-.2,V,J)),g.push(new ve().setHSL(.18+e()*.1,.5,.25+e()*.12)))}if(this.nature?this.plantModels(e,d,m,3):(this.instanced(r,h,d,f),this.instanced(a,u,d),this.instanced(o,h,m,g),this.instanced(l,u,m)),this.cx){const U=[],V=[],D=[],O=[],k={};for(const J of[-1,1])for(let ce=e()*5;ce<this.length;ce+=4.5+e()*4.5){const le=J*(this.shAt(ce)+1+e()*2.5);this.poseAt(ce,le,k);const Se=this.terrainHeight(k.x,k.z),He=2.6+e()*1;e()<.75?(U.push(s(k.x,Se-.3,k.z,He,He*(.95+e()*.25))),V.push(new ve().setHSL(.22+e()*.08,.5,.2+e()*.1))):(D.push(s(k.x,Se-.3,k.z,He*.9,He*(1+e()*.3))),O.push(new ve().setHSL(.31+e()*.04,.45,.14+e()*.06)))}this.nature?this.plantModels(e,[],[...U,...D],3,!0):(this.instanced(o,h,U,V),this.instanced(l,u,U),this.instanced(r,h,D,O),this.instanced(a,u,D)),this.giantCount=U.length+D.length}const _=[];for(let U=0;U<3;U++){const V=new lt,D=.05;V.setAttribute("position",new $e([-D,0,0,D,0,0,.03,.55,0],3));const O=this.autumn?[.22,.18,.07]:[.18,.3,.08],k=this.autumn?[.8,.6,.28]:[.75,.8,.35];V.setAttribute("color",new $e([...O,...O,...k],3)),V.rotateZ((e()-.5)*.5),V.rotateY(U/3*Math.PI+e()*.4),V.translate((e()-.5)*.15,0,(e()-.5)*.15),V.computeVertexNormals(),_.push(V)}const x=Ys(_),E=[],M=[],T=[],R=[],S=(this.autumn?["#c2461f","#e07b24","#e9b13a","#8a3b1c","#b5651d"]:["#f2d14b","#ffffff","#e2455b","#9b6bd6","#ff9a3c"]).map(U=>new ve(U)),b={};for(let U=0;U<(this.tt?9e3:22e3);U++){const V=e()*this.length,O=(e()<.5?-1:1)*(this.SH+.3+Math.pow(e(),1.6)*45);if(this.poseAt(V,O,b),this.lakeAt(b.x,b.z,1)||this.tt&&!this.clearOfPath(b.x,b.z,.4))continue;const k=this.terrainHeight(b.x,b.z),J=.7+e()*.9;if(E.push(s(b.x,k-.05,b.z,J,J*(.8+e()*.8))),M.push(new ve().setHSL((this.autumn?.1:.2)+e()*.06,.4,.4+e()*.3)),e()<(this.autumn?.3:.1)){const ce=.6+e()*.5;this.autumn?T.push(s(b.x+e()-.5,k+.02,b.z+e()-.5,ce*1.6,ce*.35)):T.push(s(b.x+e()-.5,k+.28+e()*.1,b.z+e()-.5,ce)),R.push(S[Math.floor(e()*S.length)])}}const P=new De({vertexColors:!0,side:en,roughness:1});this.instanced(x,P,E,M,{cast:!1}),this.instanced(new Rr(.07,0),new De({color:"#fff",roughness:.7}),T,R,{cast:!1});const N=[];for(let U=0;U<260;U++){const V=(e()*2-1)*800,D=(e()*2-1)*800,O=this.nearest(V,D);if(O.found&&O.dist<7||this.lakeAt(V,D,2))continue;const k=.4+e()*1.8;N.push(new Ie().compose(new C(V,this.terrainHeight(V,D)-k*.3,D),new xt().setFromEuler(new Ht(e()*3,e()*3,e()*3)),new C(k,k*.7,k*(.8+e()*.4))))}this.nature?(this.placeOnGeos(N,this.nature.rocks,e,.9),this.plantUnderwood(e)):this.instanced(new ch(1,0),new De({color:"#8b8580",roughness:.95,flatShading:!0}),N);const B=[];for(let U=0;U<(this.cx||this.tt?0:60);U++){const V=e()*this.length,D=(e()<.5?-1:1)*(18+e()*60);this.poseAt(V,D,b);const O=this.terrainHeight(b.x,b.z);O>30||this.lakeAt(b.x,b.z,3)||B.push(new Ie().compose(new C(b.x,O+.7,b.z),new xt().setFromEuler(new Ht(0,e()*3,Math.PI/2)),new C(1,1,1)))}this.instanced(new rt(.75,.75,1.2,16),new De({color:"#d2b15e",roughness:1}),B)}clearAreas(e){const t=new Ie,n=new Ie().makeScale(0,0,0);let s=1/0,r=-1/0,a=1/0,o=-1/0;for(const c of e)s=Math.min(s,c.x-c.r),r=Math.max(r,c.x+c.r),a=Math.min(a,c.z-c.r),o=Math.max(o,c.z+c.r);this.scene.traverse(c=>{var h;if(!c.isInstancedMesh)return;let l=!1;for(let u=0;u<c.count;u++){c.getMatrixAt(u,t);const d=t.elements[12],f=t.elements[14];if(!(d<s||d>r||f<a||f>o)){for(const m of e)if((d-m.x)**2+(f-m.z)**2<m.r*m.r){c.setMatrixAt(u,n),l=!0;break}}}l&&(c.instanceMatrix.needsUpdate=!0,(h=c.computeBoundingSphere)==null||h.call(c))})}clearOfPath(e,t,n){const s=this.nearest(e,t);return!s.found||s.dist>=this.shArr[s.i]+n}natureMaterial(e=0){if(this._natMats||(this._natMats=[]),this._natMats[e])return this._natMats[e];const t=new De({vertexColors:!0,roughness:.85}),n=new Gu().load(`texturen/rinde/${e?"rinde012":"rinde007"}.jpg`);return n.colorSpace=_t,n.wrapS=n.wrapT=Cn,n.anisotropy=4,t.onBeforeCompile=s=>{s.uniforms.barkMap={value:n},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},t.customProgramCacheKey=()=>"rinde"+e,this._natMats[e]=t}leafTint(e){if(!this.autumn)return new ve(1,1,1).multiplyScalar(.85+e()*.3);const t=e();return t<.35?new ve(1.5,.7,.5):t<.7?new ve(1.3,1.2,.55):new ve(1,1,1).multiplyScalar(.9+e()*.25)}plantModels(e,t,n,s,r=!1){const a=this.nature.trees[this.season]||this.nature.trees.sommer,o=new Map,c=(h,u,d)=>{const f=u.elements,m=Math.hypot(f[0],f[1],f[2])*s;if(!this.clearOfPath(f[12],f[14],(r?.14:.1)*m+.4))return;o.has(h)||o.set(h,{mats:[],cols:[]});const g=o.get(h);g.mats.push(u.clone().multiply(new Ie().makeScale(s,s,s))),g.cols.push(d)},l=()=>Math.floor(e()*5);for(const h of t){const u=this.autumn&&e()<.25?a.pineAlt:a.pine;c(u[l()],h,new ve(1,1,1).multiplyScalar(.85+e()*.3))}for(const h of n){const u=e(),d=r?u<.85?a.common:a.birch:u<.5?a.common:u<.8?a.birch:a.willow;c(d[l()],h,this.leafTint(e))}for(const[h,u]of o){const d=[{mats:[],cols:[]},{mats:[],cols:[]}];u.mats.forEach((f,m)=>{const g=d[e()<.5?0:1];g.mats.push(f),g.cols.push(u.cols[m])}),d.forEach((f,m)=>f.mats.length&&this.instanced(h,this.natureMaterial(m),f.mats,f.cols))}}placeOnGeos(e,t,n,s=1,r=null){const a=t.map(()=>({mats:[],cols:[]}));for(const o of e){const c=Math.floor(n()*t.length);a[c].mats.push(s===1?o:o.clone().multiply(new Ie().makeScale(s,s,s))),a[c].cols.push(r?r(n):new ve(1,1,1).multiplyScalar(.85+n()*.3))}a.forEach((o,c)=>o.mats.length&&this.instanced(t[c],this.natureMaterial(),o.mats,o.cols))}plantUnderwood(e){const t={},n=new xt,s=new C(0,1,0),r=(u,d,f,m=f,g=e()*Math.PI*2)=>new Ie().compose(new C(u,this.terrainHeight(u,d)-.05,d),n.setFromAxisAngle(s,g).clone(),new C(f,m,f)),a=[],o=this.cx?2600:this.tt?260:1600;for(let u=0;u<o*2&&a.length<o;u++){const f=(e()<.5?-1:1)*(this.SH+1.4+Math.pow(e(),1.4)*(this.cx?14:55));this.poseAt(e()*this.length,f,t);const m=.8+e()*.8;this.clearOfPath(t.x,t.z,.75*m+.3)&&(this.lakeAt(t.x,t.z,2)||a.push(r(t.x,t.z,m,m*(.8+e()*.4))))}const c=u=>{if(!this.autumn)return new ve(1,1,1).multiplyScalar(.9+u()*.4);const d=u();return d<.35?new ve(2.6,1,.5):d<.7?new ve(2.4,1.6,.5):new ve(1.2,1.1,.8)};this.placeOnGeos(a,this.nature.bushes,e,1,c);const l=[],h=[];for(let u=0;u<(this.cx?260:this.tt?30:160);u++){const d=e()<.5?-1:1;if(this.poseAt(e()*this.length,d*(this.SH+2+e()*(this.cx?12:60)),t),!this.lakeAt(t.x,t.z,2))if(e()<.5){const f=1.1+e()*.7;this.clearOfPath(t.x,t.z,.75*f+.3)&&l.push(r(t.x,t.z,f))}else{const f=1+e()*.4,m=1.35*f;this.clearOfPath(t.x+t.tx*m,t.z+t.tz*m,.6)&&this.clearOfPath(t.x-t.tx*m,t.z-t.tz*m,.6)&&this.clearOfPath(t.x,t.z,.6)&&h.push(r(t.x,t.z,f,f,t.heading+(e()-.5)*.4))}}this.placeOnGeos(l,[this.nature.stump],e),this.placeOnGeos(h,[this.nature.log],e)}buildRocks(e){if(this.nature){const h=ei(7),u=this.nature.rocks,d=u.map(()=>[]);for(const f of this.rocks){this.poseAt(f.s,f.lat,e),f.x=e.x,f.z=e.z;const m=Math.floor(h()*u.length),g=u[m].boundingBox,v=Math.max(g.max.x-g.min.x,g.max.z-g.min.z)/2,p=f.r/v;d[m].push(new Ie().compose(new C(e.x,this.ph[f.i]-.05,e.z),new xt().setFromAxisAngle(new C(0,1,0),h()*6.28),new C(p,p*1.1,p)))}d.forEach((f,m)=>f.length&&this.instanced(u[m],this.natureMaterial(),f));return}const t=new Rr(1,1),n=t.attributes.position,s=[],r=new ve("#5b6b3a"),a=new ve("#8a8580"),o=new ve;for(let h=0;h<n.count;h++){const u=n.getX(h),d=n.getY(h),f=n.getZ(h),m=1+this.n1(u*2.1+5,f*2.1+d*1.7)*.25;n.setXYZ(h,u*m,d*m,f*m),o.copy(a).lerp(r,Math.max(0,d)*.8),s.push(o.r,o.g,o.b)}t.setAttribute("color",new $e(s,3)),t.computeVertexNormals();const c=ei(7),l=this.rocks.map(h=>(this.poseAt(h.s,h.lat,e),h.x=e.x,h.z=e.z,new Ie().compose(new C(e.x,this.ph[h.i]+h.r*.35,e.z),new xt().setFromEuler(new Ht(c()*3,c()*3,c()*3)),new C(h.r,h.r*.8,h.r*1.1))));this.instanced(t,new De({vertexColors:!0,roughness:.95,flatShading:!0}),l)}buildDropLogs(e){const t=[];for(const n of this.drops){this.poseAt(n.s-.6,0,e);const s=this.rhArr[n.i]*2+1.6;t.push(new Ie().compose(new C(e.x,this.ph[n.i]+.1,e.z),new xt().setFromEuler(new Ht(0,e.heading,Math.PI/2,"YXZ")),new C(1,s,1)))}this.instanced(new rt(.17,.2,1,10),new De({color:"#6b4b30",roughness:1}),t)}buildTape(e){const t=[],n=[],r=new xt,a=new C(0,1,0);for(const h of[-1,1]){let u=null;for(let d=0;d<=this.length+.01;d+=5){this.poseAt(d,h*(this.shAt(d)+.4),e);const f=new C(e.x,this.terrainHeight(e.x,e.z),e.z);if(t.push(new Ie().makeTranslation(f.x,f.y+.45,f.z)),u){const m=u.clone().add(new C(0,.82,0)),g=f.clone().add(new C(0,.82,0)),v=m.clone().add(g).multiplyScalar(.5),p=m.distanceTo(g);r.setFromAxisAngle(a,Math.atan2(g.x-m.x,g.z-m.z));const y=new xt().setFromAxisAngle(new C(1,0,0),-Math.atan2(g.y-m.y,Math.hypot(g.x-m.x,g.z-m.z)));n.push(new Ie().compose(v,r.clone().multiply(y),new C(1,1,p)))}u=f}}this.instanced(new rt(.03,.035,.9,6),new De({color:"#8a6a45",roughness:1}),t);const o=Xt(64,16,(h,u,d)=>{for(let f=0;f<8;f++)h.fillStyle=f%2?"#f4f4f0":"#d8232a",h.fillRect(f*u/8,0,u/8,d)},{repeat:[1,1]}),c=new nt(.005,.05,1),l=c.attributes.uv;for(let h=0;h<l.count;h++)l.setX(h,l.getX(h)*5/1.2);this.instanced(c,new De({map:o,roughness:.6}),n,null,{cast:!1})}buildProps(){const e={},t=[],n=[];this.cx&&(this.buildTape(e),this.buildDropLogs(e),this.buildRocks(e));for(let d=0;d<(this.cx||this.tt?0:this.length);d+=50)for(const f of[-1,1]){this.poseAt(d,f*(this.SH+.5),e);const m=this.terrainHeight(e.x,e.z);t.push(new Ie().makeTranslation(e.x,m+.5,e.z)),n.push(new Ie().makeTranslation(e.x,m+.92,e.z))}this.instanced(new nt(.12,1,.12),new De({color:"#f2f2ee"}),t),this.instanced(new nt(.13,.16,.13),new De({color:"#ff7a1a",emissive:"#ff5a00",emissiveIntensity:.6}),n,null,{cast:!1}),this.poseAt(0,0,e);const s=new ot;s.position.set(e.x,e.h,e.z),s.rotation.y=e.heading;const r=new De({color:"#1b2233",roughness:.5,metalness:.4}),a=this.SH+.8;for(const d of[-1,1]){const f=new pe(new nt(.5,6.2,.5),r);f.position.set(d*a,3,0),f.castShadow=!0,s.add(f)}const o=Xt(1024,192,(d,f,m)=>{const g=d.createLinearGradient(0,0,f,0);g.addColorStop(0,"#101a33"),g.addColorStop(.5,"#1d2f5c"),g.addColorStop(1,"#101a33"),d.fillStyle=g,d.fillRect(0,0,f,m),d.fillStyle=Be.colors.gold,d.fillRect(0,8,f,6),d.fillRect(0,m-14,f,6),d.font='800 92px "Barlow Condensed", Arial, sans-serif',d.textAlign="center",d.textBaseline="middle",d.fillText("START  •  ZIEL",f/2,m/2-12),d.font='600 30px "Cinzel", Georgia, serif',d.fillStyle="#ffffff",d.fillText(Be.gameName.toUpperCase(),f/2,m-40)}),c=new pe(new nt(a*2+.5,1.5,.25),new De({map:o,emissive:"#ffffff",emissiveMap:o,emissiveIntensity:.25}));c.position.y=5.6,c.castShadow=!0,s.add(c);const l=Xt(256,32,(d,f,m)=>{for(let g=0;g<16;g++)for(let v=0;v<2;v++)d.fillStyle=(g+v)%2?"#111":"#f4f4f0",d.fillRect(g*16,v*16,16,16)}),h=new pe(new an(this.rhArr[0]*2,.9),new De({map:l,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,s.add(h);const u=new De({color:Be.colors.accent,side:en});for(let d=-3;d<=3;d++)if(d!==0)for(const f of[-1,1]){const m=new ot,g=new pe(new rt(.03,.03,3.4),r);g.position.y=1.7;const v=new pe(new an(.7,1.1),u);v.position.set(0,2.7,.35),v.rotation.y=Math.PI/2,m.add(g,v),m.position.set(f*(this.SH+3),0,d*7),s.add(m)}this.scene.add(s)}buildFinishZone(){const e={},t=new ot,n=.075,s=(p,y,_,x=0)=>{const E=[],M=[],T=[],R=Math.max(2,Math.round((y-p)/1));for(let P=0;P<=R;P++){const N=p+(y-p)*P/R;this.poseAt(N,0,e);const B=this.nearest(e.x,e.z),U=(B.found?this.rhArr[B.i]:this.RH)+.25,V=-e.tz,D=e.tx,O=e.h-.06+n+x;if(E.push(e.x-V*U,O,e.z-D*U,e.x+V*U,O,e.z+D*U),M.push(0,P/R,1,P/R),P>0){const k=(P-1)*2;T.push(k,k+1,k+2,k+1,k+3,k+2)}}const S=new lt;S.setAttribute("position",new $e(E,3)),S.setAttribute("uv",new $e(M,2)),S.setIndex(T),S.computeVertexNormals();const b=new pe(S,_);b.receiveShadow=!0,t.add(b)},r=p=>new De({map:p,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),a="#2fa37a",o=Xt(1024,512,(p,y,_)=>{p.fillStyle=a,p.fillRect(0,0,y,_),p.translate(y/2,_/2),p.fillStyle="#e9fff4",p.textAlign="center",p.textBaseline="middle";let x=250;do p.font=`900 ${x}px "Barlow Condensed", Arial, sans-serif`;while(p.measureText("GRAND TOUR").width>y*.86&&(x-=8)>60);p.fillText("GRAND TOUR",0,10)}),c=Xt(64,64,(p,y,_)=>{p.fillStyle="#7fe0bf",p.fillRect(0,0,y,_)}),l=Xt(64,64,(p,y,_)=>{p.fillStyle="#f2f2ee",p.fillRect(0,0,y,_)}),h=this.length;s(h-52,h-45,r(o)),s(h-26,h-19,r(o)),s(h-3.2,h-1.6,r(l)),s(1.2,9,r(c)),s(13,20,r(o));const u=[["#2fa37a","#ffffff","GRAND TOUR"],["#1d2433","#ffffff","PAULSDORF • SEIT 2026"],["#f2f2ee","#1d2433","PEDAL LEGENDS"],["#2fa37a","#ffffff","GRAND TOUR"],["#f4c430","#1d2433","ZIELKAMERA"]].map(([p,y,_])=>new De({roughness:.6,map:Xt(512,128,(x,E,M)=>{x.fillStyle=p,x.fillRect(0,0,E,M),x.fillStyle=y;let T=70;do x.font=`800 ${T}px "Barlow Condensed", Arial, sans-serif`;while(x.measureText(_).width>E*.9&&(T-=4)>20);x.textAlign="center",x.textBaseline="middle",x.fillText(_,E/2,M/2+2)})})),d=new De({color:"#b9bcc2",metalness:.8,roughness:.35}),f=new nt(2.3,.9,.04),m=new rt(.03,.03,2.4,6).rotateZ(Math.PI/2),g=new nt(.06,1.15,.5);let v=0;for(let p=h-75;p<h+25;p+=2.45){for(const y of[-1,1]){this.poseAt(p,0,e);const _=this.nearest(e.x,e.z),x=(_.found?this.shArr[_.i]:this.SH)+.4;if(this.poseAt(p,y*x,e),this.solid&&this.solid.some(S=>Math.hypot(S.x-e.x,S.z-e.z)<S.r+.6))continue;const E=new ot;E.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),E.rotation.y=e.heading+Math.PI/2;const M=new pe(f,u[(v+(y>0?2:0))%u.length]);M.position.y=.62,M.castShadow=!0;const T=new pe(m,d);T.position.y=1.1;const R=new pe(g,d);R.position.set(-1.15,.57,0),E.add(M,T,R),t.add(E)}v++}for(const p of this.cx?[]:[this.SH+4.5,this.SH+7,-(this.SH+4.5)]){if(this.poseAt(6,p,e),this.solid&&this.solid.some(R=>Math.hypot(R.x-e.x,R.z-e.z)<R.r+3)||!this.clearOfPath(e.x,e.z,2.5))continue;const y=new ot;y.position.set(e.x,this.terrainHeight(e.x,e.z),e.z),y.rotation.y=e.heading+(p>0?-Math.PI/2:Math.PI/2);const _=new De({color:"#f4d21c",roughness:.5}),x=new pe(new nt(4.2,2.6,2.6),_);x.position.y=1.7,x.castShadow=!0;const E=new pe(new nt(3.4,1,.05),new De({color:"#1d2433",roughness:.1,metalness:.6}));E.position.set(0,2.1,1.31);const M=new pe(new an(2.2,.55),u[4]);M.position.set(0,3.3,1.31);const T=new pe(new nt(4,.4,2.4),new De({color:"#555a62"}));T.position.y=.2,y.add(x,E,M,T),t.add(y);break}this.scene.add(t)}buildClouds(){const e=ei(77),t=Xt(256,128,(n,s,r)=>{for(let a=0;a<40;a++){const o=s*(.15+e()*.7),c=r*(.45+(e()-.5)*.35),l=18+e()*30,h=n.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,"rgba(255,255,255,0.35)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,s,r)}});for(let n=0;n<26;n++){const s=new wd({map:t,color:new ve().setHSL(.05+e()*.04,.7,.78+e()*.1),fog:!1,depthWrite:!1,transparent:!0,opacity:.55+e()*.35}),r=new cy(s),a=e()*Math.PI*2,o=1300+e()*1200;r.position.set(Math.cos(a)*o,220+e()*380,Math.sin(a)*o);const c=380+e()*500;r.scale.set(c,c*.4,1),this.scene.add(r)}}buildMotes(){const t=new Float32Array(1050);for(let a=0;a<350*3;a++)t[a]=(Math.random()-.5)*50;const n=new lt;if(n.setAttribute("position",new Ct(t,3)),this.autumn){const a=new Float32Array(1050),o=["#c2461f","#e07b24","#e9b13a","#8a3b1c"].map(l=>new ve(l));for(let l=0;l<350;l++)o[l%o.length].toArray(a,l*3);n.setAttribute("color",new Ct(a,3));const c=Xt(64,64,l=>{l.fillStyle="#fff",l.beginPath(),l.ellipse(32,32,26,13,.6,0,Math.PI*2),l.fill()});this.motes=new Os(n,new xi({size:.16,map:c,vertexColors:!0,transparent:!0,alphaTest:.4,depthWrite:!1})),this.motes.frustumCulled=!1,this.scene.add(this.motes);return}const s=Xt(64,64,a=>{const o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.3,"rgba(255,230,180,0.6)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),r=new xi({size:.09,map:s,color:new ve(2.2,1.7,1.1),transparent:!0,depthWrite:!1,blending:Fr});this.motes=new Os(n,r),this.motes.frustumCulled=!1,this.scene.add(this.motes)}update(e,t,n,s){if(this.chunks&&this.cx){const l=n.position;for(const h of this.chunks){const u=h.boundingSphere;u&&(h.visible=Math.hypot(u.center.x-l.x,u.center.z-l.z)-u.radius<330)}}this.sun.position.copy(t).addScaledVector(this.lightDir,120),this.sun.target.position.copy(t);const r=this.motes.geometry.attributes.position,a=n.position.x,o=n.position.y,c=n.position.z;for(let l=0;l<r.count;l++){let h=r.getX(l)+Math.sin(s*.5+l)*.15*e+.25*e,u=r.getY(l)+Math.cos(s*.4+l*1.7)*.1*e;this.autumn&&(u-=(.45+l%5*.08)*e,h+=Math.sin(s*1.3+l)*.5*e);let d=r.getZ(l)+.1*e;const f=(m,g)=>m-g>25?m-50:m-g<-25?m+50:m;h=f(h,a),u-o<-2?u+=16:u-o>14&&(u-=16),d=f(d,c),r.setXYZ(l,h,u,d)}r.needsUpdate=!0}}const Ms=.0105,mr=new C(1,0,0),Tl=new Ie,Qu=new C,_b=new C,xb=new xt,yb=new xt,bb=new C,Mb=new C,Sb=new C,Fi=new C,ef=new C,Tb={Hips:"Spine",Spine:"Spine1",Spine1:"Spine2",Spine2:"Neck",Neck:"Head",Head:"HeadTop_End",LeftUpLeg:"LeftLeg",LeftLeg:"LeftFoot",LeftFoot:"LeftToeBase",RightUpLeg:"RightLeg",RightLeg:"RightFoot",RightFoot:"RightToeBase",LeftArm:"LeftForeArm",LeftForeArm:"LeftHand",LeftHand:"LeftHandMiddle1",RightArm:"RightForeArm",RightForeArm:"RightHand",RightHand:"RightHandMiddle1"};function tf(i,e,t){const n=bb.copy(i).normalize(),s=Mb.copy(e).addScaledVector(n,-e.dot(n));s.lengthSq()<1e-8&&s.set(0,0,1).addScaledVector(n,-n.z),s.normalize();const r=Sb.crossVectors(s,n);return t.setFromRotationMatrix(Tl.makeBasis(s,n,r))}function nf(i,e,t,n,s,r){Fi.copy(e).sub(i);let a=Fi.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),Fi.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return ef.copy(s).addScaledVector(Fi,-s.dot(Fi)).normalize(),r.copy(i).addScaledVector(Fi,o*t).addScaledVector(ef,c*t)}class wb{constructor(e){this.scene=e,e.scale.setScalar(Ms),this.inv=new Ie;const t=r=>r.replace(/^mixamorig\d*/,"").replace(/_\d+$/,"");this.bones={},e.traverse(r=>{r.isBone&&!this.bones[t(r.name)]&&!/_\d+$/.test(r.name)&&(this.bones[t(r.name)]=r)}),this.meshes={},e.traverse(r=>{if(!r.isSkinnedMesh)return;const a=r.skeleton.bones.map(o=>this.bones[t(o.name)]||o);r.bind(new sh(a,r.skeleton.boneInverses),r.bindMatrix),r.frustumCulled=!1,r.castShadow=!0,r.receiveShadow=!0,this.meshes[r.name.replace(/^Ch\d+_/,"")]=r}),this.meshes.Hair&&(this.meshes.Hair.visible=!1),e.updateMatrixWorld(!0),this.inv.copy(e.matrixWorld).invert(),this.rest=new Map;const n=this.bones;for(const[r,a]of Object.entries(Tb)){const o=n[r],c=n[a];if(!o||!c)continue;const l=this.pos(o,new C),h=this.pos(c,new C).sub(l).normalize(),u=/^Left(Arm|ForeArm|Hand)$/.test(r)?new C(0,-1,0):/^Right(Arm|ForeArm|Hand)$/.test(r)?new C(0,1,0):mr.clone(),d=this.quat(o,new xt),f=tf(h,u,new xt).invert().multiply(d);this.rest.set(o,{off:f,len:this.pos(c,new C).distanceTo(l)})}const s=r=>{var a;return((a=this.rest.get(n[r]))==null?void 0:a.len)||0};this.thigh=s("LeftUpLeg"),this.shin=s("LeftLeg"),this.upperArm=s("LeftArm"),this.foreArm=s("LeftForeArm"),this.foot=s("LeftFoot"),this.hipsRest=n.Hips.position.clone(),this.hipParentInv=new Ie}pos(e,t){return t.setFromMatrixPosition(Tl.multiplyMatrices(this.inv,e.matrixWorld))}quat(e,t){return Tl.multiplyMatrices(this.inv,e.matrixWorld).decompose(Qu,t,_b),t}aim(e,t,n=mr){const s=this.bones[e],r=this.rest.get(s);if(!r)return;const a=tf(t,n,xb).multiply(r.off),o=this.quat(s.parent,yb).invert();s.quaternion.copy(o.multiply(a)),s.updateMatrixWorld(!0)}pose({hip:e,pedals:t,angles:n,hands:s,bob:r,aero:a=!1,stand:o=0}){const c=1/Ms,l=this.bones;this.scene.updateMatrixWorld(!0),this.inv.copy(this.scene.matrixWorld).invert();const h=Qu.copy(e);a&&(h.z+=.07),h.multiplyScalar(c),h.y+=r*c,this.hipParentInv.copy(l.Hips.parent.matrixWorld).invert(),l.Hips.position.copy(h.applyMatrix4(this.scene.matrixWorld).applyMatrix4(this.hipParentInv)),l.Hips.updateMatrixWorld(!0);const u=g=>Fi.set(0,Math.cos(g),Math.sin(g));let d=a?[.75,1.3,1.45,1.5,1,.45]:[.55,.95,1.1,1.2,.6,.12];if(o>0){const g=[.75,1.3,1.45,1.5,.95,.4];d=d.map((v,p)=>v+(g[p]-v)*o)}this.aim("Hips",u(d[0])),this.aim("Spine",u(d[1])),this.aim("Spine1",u(d[2])),this.aim("Spine2",u(d[3])),this.aim("Neck",u(d[4])),this.aim("Head",u(d[5]));const f=new C;for(const g of[1,-1]){const v=g>0?"Left":"Right",p=g>0?1:0,y=this.pos(l[v+"UpLeg"],new C),_=.5+.06+.22*Math.sin(n[p]),x=new C(0,-Math.sin(_),Math.cos(_)),E=new C().copy(t[p]).multiplyScalar(c);E.y+=2.5;const M=E.clone().addScaledVector(x,-this.foot);nf(y,M,this.thigh,this.shin,new C(g*.1,.1,1),f);const T=f.clone().sub(y),R=M.clone().sub(f),S=new C().crossVectors(T,R);S.lengthSq()<1e-6&&S.copy(mr),this.aim(v+"UpLeg",T,S),this.aim(v+"Leg",R,S),this.aim(v+"Foot",x,mr)}const m=new C;for(const g of[1,-1]){const v=g>0?"Left":"Right",p=this.pos(l[v+"Arm"],new C),y=new C().copy(s[g>0?1:0]).multiplyScalar(c);nf(p,y,this.upperArm,this.foreArm,a?new C(0,-1,-.15):new C(g*.15,-.75,-.35),m);const _=m.clone().sub(p),x=y.clone().sub(m),E=new C().crossVectors(_,x);E.lengthSq()<1e-6&&E.set(0,-g,0),this.aim(v+"Arm",_,E),this.aim(v+"ForeArm",x,E),this.aim(v+"Hand",x.normalize().add(new C(0,-.35,0)),E)}}setKit({jersey:e,shorts:t}){if(!this.tinted){this.tinted={};for(const n of["Shirt","Shorts","Socks","Shoes"]){const s=this.meshes[n];if(!s||!s.material.map)continue;const r=s.material.clone();r.map=Eb(s),s.material=r,this.tinted[n]=r}this.tinted.Socks&&this.tinted.Socks.color.set("#f4f4f4"),this.tinted.Shoes&&this.tinted.Shoes.color.set("#f2f2f2")}e&&this.tinted.Shirt&&this.tinted.Shirt.color.set(e),t&&this.tinted.Shorts&&this.tinted.Shorts.color.set(t)}attachShoes(e){this.meshes.Shoes&&(this.meshes.Shoes.visible=!1);const t=this.foot*Ms,n=.42,s=new C(0,-Math.sin(n),-Math.cos(n)),r=new C(0,Math.cos(n),-Math.sin(n)),a=new Ie().makeBasis(mr,s,r);this.shoes=[];for(const o of["LeftFoot","RightFoot"]){const c=this.bones[o],l=this.rest.get(c);if(!c||!l)continue;const h=new ot;h.quaternion.copy(l.off).invert(),h.scale.setScalar(1/Ms);const u=e();u.quaternion.setFromRotationMatrix(a),u.position.set(0,t,0).addScaledVector(s,-.026),h.add(u),c.add(h),this.shoes.push(u)}}attach(e,t){const n=this.bones[e];t.scale.multiplyScalar(1/Ms),t.position.multiplyScalar(1/Ms),n.add(t)}}function Eb(i){const e=i.material.map,t=e.image,n=t.width,s=t.height,r=document.createElement("canvas");r.width=n,r.height=s;const a=r.getContext("2d");a.drawImage(t,0,0);const o=a.getImageData(0,0,n,s),c=o.data,l=i.geometry.attributes.uv;let h=0,u=0;for(let g=0;g<l.count;g+=7){const v=Math.min(n-1,Math.max(0,Math.floor(l.getX(g)*n))),y=(Math.min(s-1,Math.max(0,Math.floor((e.flipY?1-l.getY(g):l.getY(g))*s)))*n+v)*4;h+=.3*c[y]+.59*c[y+1]+.11*c[y+2],u++}const f=225/Math.max(8,h/Math.max(1,u));for(let g=0;g<c.length;g+=4){const v=Math.min(255,(.3*c[g]+.59*c[g+1]+.11*c[g+2])*f);c[g]=c[g+1]=c[g+2]=v}a.putImageData(o,0,0);const m=new xn(r);return m.colorSpace=e.colorSpace,m.flipY=e.flipY,m.wrapS=e.wrapS,m.wrapT=e.wrapT,m}class Ab{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Cb(e).buffer}}function Cb(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function zd(i){return new Rb(i).unpack()}function Bd(i){const e=new Pb,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Rb{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Pb{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Ab,this._textEncoder=new TextEncoder}}let Hd=!0,Vd=!0;function Mr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Qi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){uh("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Lb(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Hd=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Ib(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Vd=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function uh(){if(typeof window=="object"){if(Hd)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function fh(i,e){Vd&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Db(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Mr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Mr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Mr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Mr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function sf(i){return Object.prototype.toString.call(i)==="[object Object]"}function Gd(i){return sf(i)?Object.keys(i).reduce(function(e,t){const n=sf(i[t]),s=n?Gd(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function wl(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?wl(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{wl(i,i.get(s),t)})}))}function rf(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&wl(i,o,s)})}),s}const of=uh;function Wd(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(m=>m.kind==="videoinput");let f=d.find(m=>u.some(g=>m.label.toLowerCase().includes(g)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(o.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=n(o.video),of("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return of("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function $d(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Xd(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Qi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function jd(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function qd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>rf(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Qi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>rf(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Yd(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Zd(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Yd(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(g=>g===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(g=>g.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[u.id];if(m)m.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const g=new i.MediaStream([h]);this._streams[u.id]=g,this._reverseStreams[g.id]=u,this.addStream(g)}return this.getSenders().find(g=>g.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],m=l._streams[f.id];u=u.replace(new RegExp(m.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],m=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),m.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[m=>{const g=r(this,m);d[0].apply(null,[g])},m=>{d[1]&&d[1].apply(null,m)},arguments[2]]):h.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[l]=u[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(g=>h.track===g)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function El(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Kd(i,e){e.version>102||Qi(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const af=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Kd,shimAddTrackRemoveTrack:Zd,shimAddTrackRemoveTrackWithNative:Yd,shimGetSendersWithDtmf:jd,shimGetUserMedia:Wd,shimMediaStream:$d,shimOnTrack:Xd,shimPeerConnection:El,shimSenderReceiverGetStats:qd},Symbol.toStringTag,{value:"Module"}));function Jd(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){fh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function kb(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Qd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Al(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function ep(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function tp(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function np(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Qi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function ip(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){fh("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function sp(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function rp(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function op(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function ap(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function cp(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const cf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:rp,shimCreateAnswer:cp,shimCreateOffer:ap,shimGetDisplayMedia:kb,shimGetParameters:op,shimGetStats:ep,shimGetUserMedia:Jd,shimOnTrack:Qd,shimPeerConnection:Al,shimRTCDataChannel:sp,shimReceiverGetStats:np,shimRemoveStream:ip,shimSenderGetStats:tp},Symbol.toStringTag,{value:"Module"}));function lp(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function hp(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function up(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let o=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,h){const u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=o}function fp(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(dp(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function dp(i){return i&&i.video!==void 0?Object.assign({},i,{video:Gd(i.video)}):i}function pp(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(fh("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function mp(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function gp(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function vp(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const lf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:vp,shimCallbacksAPI:up,shimConstraints:dp,shimCreateOfferLegacy:gp,shimGetUserMedia:fp,shimLocalStreamsAPI:lp,shimRTCIceServerUrls:pp,shimRemoteStreamsAPI:hp,shimTrackEventTransceiver:mp},Symbol.toStringTag,{value:"Module"}));function Ub(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var lc={exports:{}},hf;function Nb(){return hf||(hf=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(lc)),lc.exports}var _p=Nb();const zs=Ub(_p),Fb=Jp({__proto__:null,default:zs},[_p]);function Ko(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=zs.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Qi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Cl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Qi(i,"icecandidate",e=>{if(e.candidate){const t=zs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Jo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=zs.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=zs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=zs.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return a.apply(this,arguments)}}function Qo(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Qi(i,"datachannel",s=>(t(s.channel,s.target),s))}function Rl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Pl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function ea(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function ta(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Ob=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Pl,shimAddIceCandidateNullOrEmpty:ea,shimConnectionState:Rl,shimMaxMessageSize:Jo,shimParameterlessSetLocalDescription:ta,shimRTCIceCandidate:Ko,shimRTCIceCandidateRelayProtocol:Cl,shimSendThrowTypeError:Qo},Symbol.toStringTag,{value:"Module"}));function zb({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=uh,n=Db(i),s={browserDetails:n,commonShim:Ob,extractVersion:Mr,disableLog:Lb,disableWarnings:Ib,sdp:Fb};switch(n.browser){case"chrome":if(!af||!El||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=af,ea(i,n),ta(i),Wd(i,n),$d(i),El(i,n),Xd(i,n),Zd(i,n),jd(i),qd(i,n),Kd(i,n),Ko(i),Cl(i),Rl(i),Jo(i,n),Qo(i,n),Pl(i,n);break;case"firefox":if(!cf||!Al||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=cf,ea(i,n),ta(i),Jd(i,n),Al(i,n),ep(i,n),Qd(i),ip(i),tp(i),np(i),sp(i),rp(i,n),op(i,n),ap(i,n),cp(i,n),Ko(i),Rl(i),Jo(i,n),Qo(i,n);break;case"safari":if(!lf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=lf,ea(i,n),ta(i),pp(i),gp(i),up(i),lp(i),hp(i),mp(i),fp(i),vp(i),Ko(i),Cl(i),Jo(i,n),Qo(i,n),Pl(i,n);break;default:t("Unsupported browser!");break}return s}const uf=zb({window:typeof window>"u"?void 0:window});function es(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class xp{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function Bb(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const hc=uf.default||uf,gr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return hc.browserDetails.browser}getVersion(){return hc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=hc.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Hb=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),yp=()=>Math.random().toString(36).slice(2),ff={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Vb extends xp{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=ff,this.browser=gr.getBrowser(),this.browserVersion=gr.getVersion(),this.pack=Bd,this.unpack=zd,this.supports=(function(){const t={browser:gr.isBrowserSupported(),webRTC:gr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(ff),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!gr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Hb,this.randomToken=yp}}const Qt=new Vb,Gb="PeerJS: ";var df;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(df||(df={}));class Wb{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Gb,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ke=new Wb,dh={},$b=Object.prototype.hasOwnProperty,Yt="~";function $r(){}Object.create&&($r.prototype=Object.create(null),new $r().__proto__||(Yt=!1));function Xb(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function bp(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Xb(t,n||i,s),a=Yt?Yt+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function na(i,e){--i._eventsCount===0?i._events=new $r:delete i._events[e]}function Gt(){this._events=new $r,this._eventsCount=0}Gt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)$b.call(t,n)&&e.push(Yt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Gt.prototype.listeners=function(e){var t=Yt?Yt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Gt.prototype.listenerCount=function(e){var t=Yt?Yt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Gt.prototype.emit=function(e,t,n,s,r,a){var o=Yt?Yt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};Gt.prototype.on=function(e,t,n){return bp(this,e,t,n,!1)};Gt.prototype.once=function(e,t,n){return bp(this,e,t,n,!0)};Gt.prototype.removeListener=function(e,t,n,s){var r=Yt?Yt+e:e;if(!this._events[r])return this;if(!t)return na(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&na(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:na(this,r)}return this};Gt.prototype.removeAllListeners=function(e){var t;return e?(t=Yt?Yt+e:e,this._events[t]&&na(this,t)):(this._events=new $r,this._eventsCount=0),this};Gt.prototype.off=Gt.prototype.removeListener;Gt.prototype.addListener=Gt.prototype.on;Gt.prefixed=Yt;Gt.EventEmitter=Gt;dh=Gt;var ts={};es(ts,"ConnectionType",()=>Gn);es(ts,"PeerErrorType",()=>Mt);es(ts,"BaseConnectionErrorType",()=>Xr);es(ts,"DataConnectionErrorType",()=>jr);es(ts,"SerializationType",()=>Zs);es(ts,"SocketEventType",()=>Bn);es(ts,"ServerMessageType",()=>Ut);var Gn;(function(i){i.Data="data",i.Media="media"})(Gn||(Gn={}));var Mt;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(Mt||(Mt={}));var Xr;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})(Xr||(Xr={}));var jr;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(jr||(jr={}));var Zs;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(Zs||(Zs={}));var Bn;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})(Bn||(Bn={}));var Ut;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(Ut||(Ut={}));var ph={};ph=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class jb extends dh.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ph.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ke.log("Server message received:",r)}catch{ke.log("Invalid server message",s.data);return}this.emit(Bn.Message,r)},this._socket.onclose=s=>{this._disconnected||(ke.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Bn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ke.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ke.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Ut.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Bn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Mp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Gn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ke.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ke.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(ke.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Ut.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ke.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Xr.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ke.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Xr.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ke.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ke.log("Listening for data channel"),e.ondatachannel=a=>{ke.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},ke.log("Listening for remote stream"),e.ontrack=a=>{ke.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===Gn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){ke.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ke.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Gn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Ut.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Mt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Mt.WebRTC,n),ke.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ke.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ke.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Ut.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Mt.WebRTC,s),ke.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Mt.WebRTC,n),ke.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;ke.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ke.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Mt.WebRTC,a),ke.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){ke.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ke.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Mt.WebRTC,t),ke.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ke.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ke.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ke.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Sp extends dh.EventEmitter{emitError(e,t){ke.error("Error:",t),this.emit("error",new qb(`${e}`,t))}}class qb extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Tp extends Sp{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Ol;const Ur=class Ur extends Tp{get type(){return Gn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ur.ID_PREFIX+Qt.randomToken(),this._negotiator=new Mp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ke.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Ut.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Ut.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ke.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ke.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Ol=new WeakMap,sr(Ur,Ol,Ur.ID_PREFIX="mc_");let da=Ur;class Yb{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ph.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ke.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Qt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Qt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ke.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var zl,Bl;const Hi=class Hi extends Tp{get type(){return Gn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Hi.ID_PREFIX+yp(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Mp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ke.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ke.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(jr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Ut.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Ut.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ke.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};zl=new WeakMap,Bl=new WeakMap,sr(Hi,zl,Hi.ID_PREFIX="dc_"),sr(Hi,Bl,Hi.MAX_BUFFERED_AMOUNT=8388608);let pa=Hi;class mh extends pa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>pa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ke.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class uc extends mh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new xp,this.serialization=Zs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=zd(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=Bb(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Bd(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ke.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Zb extends mh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Zs.None}}class Kb extends mh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Qt.chunkedMTU){this.emitError(jr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Zs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Hl;const Nr=class Nr extends Sp{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Zb,json:Kb,binary:uc,"binary-utf8":uc,default:uc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Qt.CLOUD_HOST,port:Qt.CLOUD_PORT,path:"/",key:Nr.DEFAULT_KEY,token:Qt.randomToken(),config:Qt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Qt.CLOUD_HOST?this._options.secure=Qt.isSecure():this._options.host==Qt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ke.setLogFunction(this._options.logFunction),ke.logLevel=this._options.debug||0,this._api=new Yb(t),this._socket=this._createServerConnection(),!Qt.supports.audioVideo&&!Qt.supports.data){this._delayedAbort(Mt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Qt.validateId(n)){this._delayedAbort(Mt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Mt.ServerError,s))}_createServerConnection(){const e=new jb(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Bn.Message,t=>{this._handleMessage(t)}),e.on(Bn.Error,t=>{this._abort(Mt.SocketError,t)}),e.on(Bn.Disconnected,()=>{this.disconnected||(this.emitError(Mt.Network,"Lost connection to server."),this.disconnect())}),e.on(Bn.Close,()=>{this.disconnected||this._abort(Mt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Ut.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Ut.Error:this._abort(Mt.ServerError,n.msg);break;case Ut.IdTaken:this._abort(Mt.UnavailableID,`ID "${this.id}" is taken`);break;case Ut.InvalidKey:this._abort(Mt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Ut.Leave:ke.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Ut.Expire:this.emitError(Mt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Ut.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),ke.warn(`Offer received for existing Connection ID:${r}`)),n.type===Gn.Media){const c=new da(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Gn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{ke.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){ke.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):ke.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Mt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Mt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ke.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new da(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ke.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ke.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ke.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ke.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ke.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ke.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Mt.ServerError,t))}};Hl=new WeakMap,sr(Nr,Hl,Nr.DEFAULT_KEY="peerjs");let Ll=Nr;var pf=Ll;const mf="the-grand-tour-v1-";function gf(i){const e=["name","number","jersey","frame","helmet","shorts","brand","paint","kit","bar","groupset","tires"],t={};for(const n of e)i[n]!=null&&(t[n]=i[n]);return t}class Jb{constructor(){this.peer=null,this.conn=null,this.role=null,this.code=null,this.remote=null,this.listener=null,this.status="off"}get connected(){return this.status==="connected"}listen(e){this.listener=e}emit(e){var t;(t=this.listener)==null||t.call(this,e)}host(e,t,n=0){this.close(),this.role="host",this.me={char:gf(e),mode:t},this.code=String(1e3+Math.floor(Math.random()*9e3)),this.status="waiting";const s=this.peer=new pf(mf+this.code);s.on("error",r=>{if(r.type==="unavailable-id"&&n<5)return this.host(e,t,n+1);this.fail(r)}),s.on("open",()=>this.emit({t:"code",code:this.code})),s.on("connection",r=>{if(this.conn){r.close();return}this.attach(r)})}join(e,t,n){this.close(),this.role="guest",this.me={char:gf(t),mode:n},this.code=e,this.status="connecting";const s=this.peer=new pf;s.on("error",r=>this.fail(r)),s.on("open",()=>this.attach(s.connect(mf+e,{reliable:!0}))),clearTimeout(this.joinTimer),this.joinTimer=setTimeout(()=>{this.status==="connecting"&&this.fail({type:"timeout"})},12e3)}attach(e){this.conn=e,e.on("open",()=>{clearTimeout(this.joinTimer),this.status="connected",e.send({t:"hello",...this.me})}),e.on("data",t=>{if(!(!t||typeof t!="object")){if(t.t==="bye"){this.status="closed",this.emit({t:"closed"});return}t.t==="hello"&&(this.remote={char:t.char,mode:t.mode}),this.emit(t)}}),e.on("close",()=>{this.status==="connected"&&(this.status="closed",this.emit({t:"closed"}))}),e.on("error",t=>this.fail(t))}send(e){var t;this.connected&&((t=this.conn)!=null&&t.open)&&this.conn.send(e)}fail(e){if(this.status==="off")return;this.status="error";const t=(e==null?void 0:e.type)==="peer-unavailable"||(e==null?void 0:e.type)==="timeout"?"Kein Rennen mit diesem Code gefunden.":(e==null?void 0:e.type)==="network"||(e==null?void 0:e.type)==="server-error"||(e==null?void 0:e.type)==="socket-error"?"Keine Verbindung zum Internet-Dienst.":"Die Verbindung hat nicht geklappt.";this.emit({t:"error",why:t})}close(){var t,n,s;clearTimeout(this.joinTimer);const e=this.status;this.status="off";try{e==="connected"&&((t=this.conn)==null||t.send({t:"bye"}))}catch{}(n=this.conn)==null||n.close(),(s=this.peer)==null||s.destroy(),this.conn=null,this.peer=null,this.remote=null}}const Pr=.27,Bi=.185,vf=22,Rt=20;function Is(i){const e=.064+.03*Math.sin(Math.PI*Math.min(1,i*1.35))-.012*Math.max(0,i-.8)/.2,t=i<.2?.1+.008*(i/.2):i<.58?.108-.045*((i-.2)/.38):.063-.033*((i-.58)/.42),n=.012*Math.max(0,(i-.82)/.18)**2+.006*Math.max(0,(.08-i)/.08);return{w:e,h:t,lift:n}}function Qb(){const i=[],e=[],t=(a,o)=>{const{w:c,h:l,lift:h}=Is(a),u=a*Pr-Bi;for(let d=0;d<Rt;d++){const f=d/Rt*Math.PI*2,m=Math.cos(f),g=Math.sin(f),p=Math.sign(m)*Math.abs(m)**.55*(c/2)*o,y=g>0?Math.abs(g)**.8*l*o:g*.004;i.push(p,y+h+.012,u)}},n=[];n.push([0,.35],[.008,.7],[.02,.9]);for(let a=1;a<=vf;a++)n.push([.02+.95*a/vf,1]);n.push([.985,.75],[1,.3]),n.forEach(([a,o])=>t(a,o));for(let a=0;a<n.length-1;a++)for(let o=0;o<Rt;o++){const c=a*Rt+o,l=a*Rt+(o+1)%Rt,h=c+Rt,u=l+Rt;e.push(c,l,h,l,u,h)}const s=(a,o)=>{const c=i.length/3;let l=0,h=0,u=0;for(let d=0;d<Rt;d++)l+=i[(a*Rt+d)*3],h+=i[(a*Rt+d)*3+1],u+=i[(a*Rt+d)*3+2];i.push(l/Rt,h/Rt,u/Rt);for(let d=0;d<Rt;d++){const f=a*Rt+d,m=a*Rt+(d+1)%Rt;o?e.push(c,f,m):e.push(c,m,f)}};s(0,!1),s(n.length-1,!0);const r=new lt;return r.setAttribute("position",new $e(i,3)),r.setIndex(e),r.computeVertexNormals(),r}function e1(){const i=new Id,e=[];for(let n=0;n<=24;n++){const s=n/24;e.push([Is(s).w/2+.003,s*Pr-Bi])}i.moveTo(-e[0][0],e[0][1]);for(const[n,s]of e)i.lineTo(n,s);for(let n=e.length-1;n>=0;n--)i.lineTo(-e[n][0],e[n][1]);const t=new lh(i,{depth:.012,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:2});return t.rotateX(Math.PI/2),t.translate(0,.014,0),t}let Io=null;function t1(){return Io||(Io={upper:Qb(),sole:e1(),dial:new rt(.016,.017,.012,16),dialRing:new ii(.016,.003,6,16),strap:new nt(1,1,1),cleat:new nt(.05,.008,.06),heel:new nt(.03,.006,.022)},Io)}function _f(i){const e=t1(),t=new ot,n=(d,f,m,g,v,p=0,y=0,_=0,x=1,E=1,M=1)=>{const T=new pe(d,f);return T.position.set(m,g,v),T.rotation.set(p,y,_),T.scale.set(x,E,M),T.castShadow=!0,t.add(T),T};n(e.upper,i.upper,0,0,0),n(e.sole,i.sole,0,0,0),n(e.cleat,i.cleat||i.sole,0,.002,0),n(e.heel,i.sole,0,.002,-Bi+.02);const s=0,r=Is((s+Bi)/Pr);n(e.strap,i.accent,0,.012+r.h*.92,s,-.2,0,0,r.w*.98,.008,.035);const a=Is((s+.05+Bi)/Pr);n(e.strap,i.accent,0,.012+a.h*.92,s+.05,-.15,0,0,a.w*.98,.008,.03);const o=Is(.04);n(e.strap,i.sole,0,.012+o.h*.45,-Bi+.006,0,0,0,o.w*.8,o.h*.8,.012);const c=.4,l=Is(c),h=c*Pr-Bi,u=.012+l.h*.98;return n(e.dial,i.dial,.012,u,h,-.35,0,-.25),n(e.dialRing,i.accent,.012,u+.005,h,Math.PI/2-.35,0,-.25),t}function n1(){return{upper:new fn({color:"#f6f6f4",roughness:.28,clearcoat:.8,clearcoatRoughness:.2}),sole:new De({color:"#141416",roughness:.45,metalness:.2}),cleat:new De({color:"#c8352c",roughness:.6}),dial:new De({color:"#1a1a1e",roughness:.3,metalness:.4})}}const ma=[{id:"canyon",name:"Canyon",land:"Deutschland",font:"800 italic",upper:!0},{id:"rose",name:"Rose",land:"Deutschland",font:"800",upper:!0},{id:"colnago",name:"Colnago",land:"Italien",font:"800",upper:!0,wide:!0},{id:"cervelo",name:"Cervélo",land:"Kanada",font:"700 italic",upper:!1}],Lr=[{hex:"#f6f6f6",name:"Weiß"},{hex:"#16161b",name:"Schwarz"},{hex:"#9aa0a6",name:"Grau"},{hex:"#d62839",name:"Rot"},{hex:"#f4a12a",name:"Orange"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2bb24c",name:"Grün"},{hex:"#1fa88f",name:"Türkis"},{hex:"#2f7cf6",name:"Blau"},{hex:"#14365c",name:"Dunkelblau"},{hex:"#8a3ffc",name:"Lila"},{hex:"#ff6fb5",name:"Pink"},{hex:"#d4af37",name:"Gold"}],gh=Lr.map(i=>i.hex==="#2bb24c"?{hex:"#145a32",name:"Dunkelgrün"}:i),i1=Lr.map(i=>i.hex==="#f4a12a"?{hex:"#d9731c",name:"Orange"}:i);function s1(i){return gh.some(e=>e.matte&&e.hex===i)}const wp=[{id:"solid",name:"Einfarbig"},{id:"team",name:"Team-Design"},{id:"rainbow",name:"Weltmeister"}],ga=[{id:"105",name:"105",maker:"Shimano",crank:"#26272c",ring:"#1b1c20",accent:"#b9bdc4",kraft:1},{id:"ultegra",name:"Ultegra",maker:"Shimano",crank:"#55585f",ring:"#3d4046",accent:"#d5d8dd",kraft:1.02},{id:"duraace",name:"Dura-Ace",maker:"Shimano",crank:"#2e3036",ring:"#a9aeb6",accent:"#e8eaee",kraft:1.05},{id:"rival",name:"Rival AXS",maker:"SRAM",crank:"#141416",ring:"#141416",accent:"#6f747c",kraft:.97},{id:"force",name:"Force AXS",maker:"SRAM",crank:"#3a3d43",ring:"#2a2c31",accent:"#a3a8b0",kraft:1.02},{id:"red",name:"Red AXS",maker:"SRAM",crank:"#101012",ring:"#101012",accent:"#c8102e",kraft:1.05}],r1=[{hex:"#1c1c1c",name:"Schwarz"},{hex:"#b8864e",name:"Braun (Classic)"},{hex:"#f1f1ee",name:"Weiß"},{hex:"#d62839",name:"Rot"},{hex:"#f2d14b",name:"Gelb"},{hex:"#2f7cf6",name:"Blau"},{hex:"#2bb24c",name:"Grün"},{hex:"#ff6fb5",name:"Pink"}];function Ep(i){return ga.find(e=>e.id===i)||ga[0]}const mn={groupset:"105",helmet:"#f6f6f6",shorts:"#16161b",brand:"canyon",paint:"solid",kit:"plain"};function Ap(i){return ma.find(e=>e.id===i)||ma[0]}function Cp(i){return i.upper?i.name.toUpperCase():i.name.toLowerCase()}function o1(i){const e=parseInt(i.slice(1),16),t=e>>16&255,n=e>>8&255,s=e&255;return .299*t+.587*n+.114*s>150?"#111111":"#ffffff"}const Do='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function a1(i,e,t){const n=i.getContext("2d"),s=i.width,r=i.height;n.clearRect(0,0,s,r);const a=s*.06;n.fillStyle="#fbfbf6",n.beginPath(),n.roundRect(s*.02,r*.02,s*.96,r*.96,a),n.fill(),n.lineWidth=s*.008,n.strokeStyle="#c9c9c0",n.stroke(),n.fillStyle="#9a9a92";for(const[m,g]of[[.08,.1],[.92,.1],[.08,.9],[.92,.9]])n.beginPath(),n.arc(s*m,r*g,s*.022,0,Math.PI*2),n.fill();const o=String(e??"");n.fillStyle="#111",n.textAlign="center",n.textBaseline="alphabetic";let c=r*.62;n.font=`800 ${c}px ${Do}`;const l=s*.82,h=n.measureText(o).width;h>l&&(c*=l/h,n.font=`800 ${c}px ${Do}`),n.fillText(o,s/2,r*.64);const u=String(t??"").toUpperCase();let d=r*.15;n.font=`700 ${d}px ${Do}`;const f=n.measureText(u).width;f>s*.8&&(d*=s*.8/f,n.font=`700 ${d}px ${Do}`),n.fillStyle="#333",n.fillText(u,s/2,r*.84)}const c1=[{id:"plain",name:"Einfarbig"},{id:"stripes",name:"Streifen"},{id:"rainbow",name:"Weltmeister"}],vh=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"];function Bs(i,e){const t=new ve(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Math.max(0,Math.min(1,n.l*e))),"#"+t.getHexString()}function ko(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=new xn(t);return n.colorSpace=_t,n.anisotropy=4,{canvas:t,tex:n}}function Hn(i,e,t,n,s,r){const a=(s-n)/r.length;r.forEach((o,c)=>{const l=s-a*c;i.fillStyle=o,i.fillRect(0,(1-l)*t,e,a*t+.6)})}function l1(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),n.fillStyle=Bs(e,.62),n.fillRect(s*.19,0,s*.12,r),n.fillRect(s*.69,0,s*.12,r),t==="stripes"?(Hn(n,s,r,.6,.66,["#ffffff"]),Hn(n,s,r,.53,.56,["#ffffff"])):t==="rainbow"&&Hn(n,s,r,.57,.74,vh),n.strokeStyle=Bs(e,.55),n.lineWidth=3;const a=s*.36,o=s*.28;n.strokeRect(a,r*.8,o,r*.16),n.beginPath(),n.moveTo(a+o/3,r*.8),n.lineTo(a+o/3,r*.96),n.moveTo(a+2*o/3,r*.8),n.lineTo(a+2*o/3,r*.96),n.stroke(),n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=2;for(const c of[.19,.31,.69,.81])n.beginPath(),n.moveTo(s*c,0),n.lineTo(s*c,r),n.stroke();Hn(n,s,r,.95,1,[t==="rainbow"?"#0b6cb5":Bs(e,.5)]),n.fillStyle="rgba(20,20,24,0.8)",n.fillRect(0,0,3,r*.62),n.fillRect(s-3,0,3,r*.62),n.fillStyle=t==="rainbow"||Rp(e)?"#1a1a1e":"#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`800 ${Math.round(r*.05)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(Be.gameName.toUpperCase(),s*.5,r*.13),n.font=`700 ${Math.round(r*.04)}px "Barlow Condensed", Arial, sans-serif`,n.fillText(Be.gameName.toUpperCase(),s*.09,r*.2),i.tex.needsUpdate=!0}function h1(i,e,t){const n=i.canvas.getContext("2d"),s=i.canvas.width,r=i.canvas.height;n.fillStyle=e,n.fillRect(0,0,s,r),t==="rainbow"?Hn(n,s,r,.76,.96,vh):t==="stripes"&&Hn(n,s,r,.82,.92,["#ffffff"]),Hn(n,s,r,.96,1,[Bs(e,.5)]),i.tex.needsUpdate=!0}function u1(i,e,t,n){const s=i.canvas.getContext("2d"),r=i.canvas.width,a=i.canvas.height;s.fillStyle=t,s.fillRect(0,0,r,a),Hn(s,r,a,0,.74,[e]),n==="rainbow"?Hn(s,r,a,.62,.74,vh):Hn(s,r,a,.69,.74,[Bs(e,Rp(e)?.6:1.8)]),i.tex.needsUpdate=!0}function f1(i,e){const t=i.canvas.getContext("2d"),n=i.canvas.width,s=i.canvas.height;t.fillStyle=e,t.fillRect(0,0,n,s),t.fillStyle="rgba(15,15,18,0.85)";const r=9;for(let a=0;a<r;a++){const o=(a+.5)/r*n;t.beginPath(),t.ellipse(o,s*.38,n*.018,s*.14,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(o+n/r/2,s*.72,n*.014,s*.09,0,0,Math.PI*2),t.fill()}t.fillStyle=Bs(e,.7),t.fillRect(0,s*.93,n,s*.07),i.tex.needsUpdate=!0}function Rp(i){const e=new ve(i),t={};return e.getHSL(t),t.l>.6}const va=new C(0,1,0),ze=(i,e,t)=>new C(i,e,t),ti=new C,Il=new C,d1=new C,p1=new C,Pi=new C,xf=new C(1,0,0),m1=new C,jt=.34,rn=ze(0,.27,-.08),Uo=.17;function Bt(i,e,t,n,s=t,r=10){const a=i.distanceTo(e),o=new pe(new rt(s,t,a,r),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(va,ti.copy(e).sub(i).normalize()),o.castShadow=!0,o}function Ss(i,e,t){i.position.copy(e).add(t).multiplyScalar(.5),i.quaternion.setFromUnitVectors(va,ti.copy(t).sub(e).normalize())}function yf(i,e,t,n,s,r){ti.copy(e).sub(i);let a=ti.length();a=Math.min(Math.max(a,Math.abs(t-n)+.001),t+n-.001),ti.normalize();const o=(t*t+a*a-n*n)/(2*t*a),c=Math.sqrt(Math.max(0,1-o*o));return Il.copy(s).addScaledVector(ti,-s.dot(ti)).normalize(),r.copy(i).addScaledVector(ti,o*t).addScaledVector(Il,c*t)}let Li=null;function g1(){if(Li)return Li;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=(a,o)=>(a=(a+i)%i,o=(o+i)%i,.25*Math.sin(a*Math.PI/2)*Math.sin(o*Math.PI/4)+.15*Math.sin((a+o)*Math.PI/4)),s=t.createImageData(i,i),r=new C;for(let a=0;a<i;a++)for(let o=0;o<i;o++){r.set(-(n(o+1,a)-n(o-1,a))*2,-(n(o,a+1)-n(o,a-1))*2,1).normalize();const c=(a*i+o)*4;s.data[c]=(r.x*.5+.5)*255,s.data[c+1]=(r.y*.5+.5)*255,s.data[c+2]=(r.z*.5+.5)*255,s.data[c+3]=255}return t.putImageData(s,0,0),Li=new xn(e),Li.wrapS=Li.wrapT=Cn,Li.repeat.set(10,10),Li}function v1(i){const e=[new nt(.058,.068,.03)];for(let n=0;n<4;n++){const s=new ji(.0095,.034,2,6);s.rotateX(1.15),s.translate(-.021+n*.014,.046,.02),e.push(s)}const t=new ji(.0105,.03,2,6);return t.rotateZ(i*.9),t.translate(i*.034,.018,.012),e.push(t),Ys(e)}function No(i,e,t,n=10){const s=[];for(let a=0;a<=n;a++){const o=a/n;s.push(new fe(e(o),-i/2+o*i))}const r=new pe(new qr(s,14),t);return r.castShadow=!0,r}function bf(i,e,t){const n=new pe(new ji(e,Math.max(.01,i-2*e),4,10),t);return n.castShadow=!0,n}const fc={};function Mf(i="gold"){if(fc[i])return fc[i];const e=i==="team",t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");n.fillStyle="#121214",n.fillRect(0,0,512,512);for(let o=0;o<512;o+=4)n.fillStyle=o%8?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.2)",n.fillRect(o,0,2,512);n.translate(256,256);const s=` ${Be.gameName.toUpperCase()} `;n.font=e?'800 46px "Barlow Condensed", Arial, sans-serif':'800 30px "Barlow Condensed", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle";const r=e?226:233;for(let o=0;o<2;o++){let c=o*Math.PI;for(const l of s){const h=n.measureText(l).width;c+=h/2/r,n.save(),n.rotate(c),n.translate(0,-r),n.fillStyle=e?"#f2f2ee":Be.colors.gold,n.fillText(l,0,0),n.restore(),c+=h/2/r}}e||(n.strokeStyle=Be.colors.accent,n.lineWidth=4,n.beginPath(),n.arc(0,0,214,.3,1.4),n.stroke(),n.beginPath(),n.arc(0,0,214,.3+Math.PI,1.4+Math.PI),n.stroke());const a=new xn(t);return a.colorSpace=_t,a.anisotropy=8,fc[i]=a,a}const dc={};function pc(i,e=!1,t=7,n=20){const s=`${i}-${e}-${t}-${n}`;if(dc[s])return dc[s];const r=128,a=512,o=document.createElement("canvas");o.width=r,o.height=a;const c=o.getContext("2d");e&&(c.translate(0,a),c.scale(1,-1)),c.fillStyle="#000",c.fillRect(0,0,r,a),c.fillStyle="#fff";const l=(1-i)*a;c.fillRect(0,0,r,l);for(let u=0;u<t;u++){const f=26-u*3.2,m=l+u*n;for(let g=0;g<8;g++){if(u>2&&(g+u)%2)continue;const v=(g+u%2*.5)/8*r;c.beginPath(),c.moveTo(v-f/2,m-2),c.lineTo(v+f/2,m-2),c.lineTo(v,m+f*1.1),c.closePath(),c.fill()}}const h=new xn(o);return h.colorSpace=_t,h.anisotropy=8,dc[s]=h,h}function _1(){const e=new ii(.318,.026,10,144),t=e.attributes.position,n=[],s=new C,r=new C;for(let a=0;a<t.count;a++){s.fromBufferAttribute(t,a);const o=Math.atan2(s.y,s.x);r.set(Math.cos(o)*.318,Math.sin(o)*.318,0);const c=s.clone().sub(r),l=c.dot(r)/(c.length()*.318+1e-6),h=o/(Math.PI*2)*40;l>.2&&h-Math.floor(h)<.5&&s.addScaledVector(c.normalize(),.006),t.setXYZ(a,s.x,s.y,s.z);const u=l>.35?x1:y1;n.push(u.r,u.g,u.b)}return e.setAttribute("color",new $e(n,3)),e.computeVertexNormals(),e}const x1=new ve("#1e1a16"),y1=new ve("#c39a5a"),mc={};function b1(i,e,t,n){const s=`${i}-${e}-${t}-${n}`;if(mc[s])return mc[s];const r=document.createElement("canvas");r.width=32,r.height=512;const a=r.getContext("2d");a.fillStyle=i,a.fillRect(0,0,32,512);const o=["#0b6cb5","#d81e2c","#111111","#f5c400","#00a14b"],c=(t-e)/o.length;o.forEach((h,u)=>{const d=n?e+c*(u+1):t-c*u;a.fillStyle=h,a.fillRect(0,(1-d)*512,32,c*512+.5)});const l=new xn(r);return l.colorSpace=_t,mc[s]=l,l}class Pp{constructor(){this.root=new ot,this.root.rotation.order="YXZ",this.wheelAngle=0,this.crankAngle=0;const e=s=>new fn({roughness:.68,sheen:.7,sheenRoughness:.45,sheenColor:new ve("#ffffff"),normalMap:g1(),normalScale:new fe(.35,.35),...s}),t=this.mats={frame:new fn({color:Be.colors.bikeFrame,metalness:.4,roughness:.3,clearcoat:1,clearcoatRoughness:.08}),accent:new fn({color:Be.colors.gold,metalness:.7,roughness:.25,clearcoat:1}),black:new De({color:"#17171a",roughness:.45,metalness:.3}),alu:new De({color:"#b9bcc2",roughness:.25,metalness:1}),tire:new De({color:"#1c1c1c",roughness:.9}),cxTire:new De({color:"#ffffff",vertexColors:!0,roughness:.95}),tape:new De({color:"#f1f1ee",roughness:.7}),crankArm:new fn({color:"#26272c",metalness:.6,roughness:.3,clearcoat:1}),ring:new De({color:"#1b1c20",metalness:.7,roughness:.3}),groupAccent:new De({color:"#b9bdc4",metalness:.8,roughness:.25}),jersey:e({}),skin:new fn({color:"#e2ad8c",roughness:.55,sheen:.35,sheenRoughness:.7,sheenColor:new ve("#ff9f7a")}),shorts:e({color:"#16161b",roughness:.6}),shoe:new De({color:"#f4f4f4",roughness:.4}),helmet:new fn({roughness:.3,clearcoat:1}),glasses:new fn({color:"#ff8a2a",roughness:.05,metalness:1,envMapIntensity:2.2,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[200,700]}),glassFrame:new De({color:"#111114",roughness:.4}),glove:e({color:"#f1f1ee",roughness:.75}),hair:new De({color:"#4a3324",roughness:.9}),jerseyPlain:e({}),sole:new De({color:"#141416",roughness:.6}),sleeve:e({}),thigh:e({roughness:.6})},n=s=>new fn({map:s,roughness:.3,metalness:.2,clearcoat:1,clearcoatRoughness:.1});this.teamMats={down:n(pc(.86,!1,4,12)),top:n(pc(.4)),fork:n(pc(.45,!0)),solid:n(null)},this.frameColor=Be.colors.bikeFrame,this.design="solid",this.buildFrame(t),this.buildWheels(t),this.buildDrivetrain(t),this.buildCockpit(t),this.buildRider(t),this.buildKit(t),this.buildPlates(),this.buildDecals(),this.setBrand(mn.brand),this.update(0,0,0,0)}buildFrame(e){const t=ze(0,jt,-.5),n=ze(0,.8,-.24),s=ze(0,.86,.36),r=ze(0,.7,.4),a=this.root;this.tubes={down:Bt(rn,r,.032,e.frame,.027),top:Bt(n,s,.017,e.frame,.016),head:Bt(r,s,.026,e.frame)},this.tubes.down.scale.z=1.9,this.tubes.top.scale.z=1.4,this.tubes.head.scale.z=1.3,a.add(this.tubes.down,this.tubes.top,this.tubes.head),this.tubes.seat=Bt(rn,n,.018,e.frame),a.add(this.tubes.seat);for(const l of[-1,1])a.add(Bt(ze(l*.012,rn.y,rn.z),ze(l*.06,t.y,t.z),.01,e.frame)),a.add(Bt(ze(l*.012,.62,-.19),ze(l*.06,t.y,t.z),.009,e.frame));this.stripe=Bt(ze(0,.812,-.15),ze(0,.845,.2),.0175,e.accent,.0175),a.add(this.stripe),a.add(Bt(n,ze(0,.88,-.265),.0135,e.black));const o=new pe(new nt(.03,.045,.02),new De({color:"#ff2a2a",emissive:"#ff0000",emissiveIntensity:.8}));o.position.set(0,.83,-.285),a.add(o);const c=new pe(new ji(.045,.18,4,8),e.black);c.rotation.x=Math.PI/2+.06,c.scale.set(1.2,1,.35),c.position.set(0,.895,-.25),c.castShadow=!0,a.add(c),this.bottle=new pe(new rt(.035,.035,.2,12),e.accent),this.bottle.position.copy(rn).lerp(n,.5),this.bottle.position.z+=.06,this.bottle.quaternion.setFromUnitVectors(va,ti.copy(n).sub(rn).normalize()),a.add(this.bottle)}makeWheel(e,t){const n=new ot,s=new pe(new ii(.317,.023,14,64),e.tire);s.rotation.y=Math.PI/2,s.castShadow=!0,n.add(s);const r=new pe(_1(),e.cxTire);r.rotation.y=Math.PI/2,r.castShadow=!0,r.visible=!1,n.add(r),(this.roadTires||(this.roadTires=[])).push(s),(this.cxTires||(this.cxTires=[])).push(r);for(let h=0;h<4;h++){const u=new pe(new nt(.03,.02,.008),e.accent),d=h*Math.PI/2;u.position.set(0,Math.sin(d)*.2,Math.cos(d)*.2),u.rotation.x=-d,n.add(u)}for(const h of[-1,1]){const u=new pe(new ua(.232,.306,56,1),t);u.rotation.y=h*Math.PI/2,u.position.x=h*.012,n.add(u)}for(const h of[.3,.234]){const u=new pe(new ii(h,.006,6,56),e.alu);u.rotation.y=Math.PI/2,n.add(u)}const a=new pe(new rt(.306,.306,.024,56,1,!0),e.black);a.rotation.z=Math.PI/2,n.add(a);const o=[];for(let h=0;h<28;h++){const u=h/28*Math.PI*2,d=h%2?1:-1,f=ze(d*.03,Math.cos(u)*.025,Math.sin(u)*.025),m=ze(d*.006,Math.cos(u)*.234,Math.sin(u)*.234),g=f.distanceTo(m),v=new rt(.0022,.0022,g,4);v.applyQuaternion(new xt().setFromUnitVectors(va,m.clone().sub(f).normalize())),v.translate((f.x+m.x)/2,(f.y+m.y)/2,(f.z+m.z)/2),o.push(v)}n.add(new pe(Ys(o),e.alu));const c=new pe(new rt(.022,.022,.1,12),e.alu);c.rotation.z=Math.PI/2,n.add(c);for(const h of[-1,1]){const u=new pe(new rt(.034,.034,.008,16),e.alu);u.rotation.z=Math.PI/2,u.position.x=h*.03,n.add(u)}const l=new pe(new rt(.004,.004,.03,6),e.alu);return l.position.set(0,.29,0),n.add(l),n}buildWheels(e){const t=this.rimMat=new De({map:Mf(),roughness:.3,metalness:.3,side:en});this.rearWheel=this.makeWheel(e,t),this.rearWheel.position.set(0,jt,-.5),this.root.add(this.rearWheel);const n=new fn({color:"#1a1b1f",roughness:.35,metalness:.3,clearcoat:1}),s=[ze(.001,.04,0),ze(.03,.038,0),ze(.306,.013,0),ze(.306,-.013,0),ze(.03,-.038,0),ze(.001,-.04,0)].map(a=>new fe(a.x,a.y));this.disc=new pe(new qr(s,56),n),this.disc.rotation.z=Math.PI/2,this.disc.visible=!1,this.rearWheel.add(this.disc),this.steer=new ot,this.steer.position.set(0,0,.45),this.root.add(this.steer),this.frontWheel=this.makeWheel(e,t),this.frontWheel.position.set(0,jt,.05),this.steer.add(this.frontWheel),this.deepRim=new ot;for(const a of[-1,1]){const o=new pe(new ua(.17,.307,56,1),n);o.rotation.y=a*Math.PI/2,o.position.x=a*.014,this.deepRim.add(o)}this.deepRim.visible=!1,this.frontWheel.add(this.deepRim),this.forkTubes=[-1,1].map(a=>Bt(ze(a*.045,.7,-.05),ze(a*.05,jt,.05),.014,e.frame,.018)),this.forkCrown=Bt(ze(0,.7,-.05),ze(0,.72,-.05),.03,e.frame),this.steer.add(...this.forkTubes,this.forkCrown);const r=new pe(new rt(.05,.05,.04,16),e.alu);r.rotation.z=Math.PI/2,r.position.set(-.04,jt,-.5),this.root.add(r)}buildDrivetrain(e){this.crank=new ot,this.crank.position.copy(rn),this.root.add(this.crank);const t=new pe(new rt(.105,.105,.006,40),e.ring);t.rotation.z=Math.PI/2,t.position.x=-.065,this.crank.add(t);const n=new pe(new rt(.06,.06,.012,5),e.crankArm);n.rotation.z=Math.PI/2,n.position.x=-.07,this.crank.add(n);for(const h of[-1,1]){const u=new pe(new nt(.02,Uo,.03),e.crankArm);u.position.set(h*-.085,-h*Uo/2,0),u.castShadow=!0,this.crank.add(u)}const s=new pe(new rt(.02,.02,.19,10),e.black);s.rotation.z=Math.PI/2,this.crank.add(s);const r=new pe(new rt(.028,.028,.004,20),e.groupAccent);r.rotation.z=Math.PI/2,r.position.x=-.077,this.crank.add(r);const a=new ot;a.position.set(-.07,jt-.05,-.47);const o=new pe(new nt(.022,.07,.04),e.crankArm);o.rotation.x=.4;const c=new pe(new nt(.008,.035,.02),e.groupAccent);c.position.set(-.013,.005,0),c.rotation.x=.4;const l=new pe(new nt(.01,.09,.03),e.crankArm);l.position.set(.004,-.07,.01),a.add(o,c,l);for(const h of[-.035,-.105]){const u=new pe(new rt(.014,.014,.008,12),e.black);u.rotation.z=Math.PI/2,u.position.set(.006,h,.01),a.add(u)}this.root.add(a);for(const h of[.105,-.105])this.root.add(Bt(ze(-.065,rn.y+h,rn.z),ze(-.04,jt+h*.45,-.5),.004,e.alu));this.pedals=[-1,1].map(h=>{const u=new pe(new nt(.08,.018,.07),e.black);return u.userData.side=h,this.root.add(u),u})}buildCockpit(e){const t=this.steer;t.add(Bt(ze(0,.86,-.08),ze(0,.9,.03),.016,e.black));const n=this.roadBars=new ot;t.add(n),n.add(Bt(ze(-.21,.9,.03),ze(.21,.9,.03),.013,e.tape));for(const r of[-1,1]){const a=r*.21,o=[ze(a,.9,.03),ze(a,.91,.1),ze(a,.86,.13),ze(a,.79,.09),ze(a,.78,0)],c=new Rs(o),l=new pe(new Gi(c,16,.013,8),e.tape);l.castShadow=!0,n.add(l);const h=new pe(new nt(.03,.07,.05),e.black);h.position.set(a,.925,.1),h.rotation.x=-.4,n.add(h)}const s=new pe(new Jt(.02,12,8,0,Math.PI*2,0,Math.PI/2),e.accent);s.position.set(.05,.915,.03),n.add(s),this.buildAeroBars(e)}buildAeroBars(e){const t=new fn({color:"#16171b",roughness:.35,metalness:.3,clearcoat:1,clearcoatRoughness:.15}),n=new De({color:"#2a2b30",roughness:.95}),s=t.clone();s.side=en;const r=this.ttBars=new ot,a=new pe(new nt(.36,.014,.045),t);a.position.set(0,.885,.035),a.castShadow=!0,r.add(a);for(const o of[-1,1]){const c=o*.19,l=new pe(new Gi(new Rs([ze(c,.885,.04),ze(c+o*.02,.882,.1),ze(c+o*.022,.87,.17)]),12,.013,8),t);r.add(l);const h=new pe(new rt(.008,.006,.06,8),e.black);h.position.set(c+o*.022,.84,.18),h.rotation.x=.3,r.add(h);const u=o*.095;r.add(Bt(ze(u,.89,-.04),ze(u,.925,-.04),.012,t));const d=new pe(new rt(.042,.042,.12,14,1,!0,-Math.PI/2,Math.PI),s);d.rotation.x=Math.PI/2,d.position.set(u,.972,-.04),r.add(d);const f=new pe(new nt(.07,.012,.11),n);f.position.set(u,.934,-.04),r.add(f);const m=o*.055,g=new pe(new Gi(new Rs([ze(o*.07,.915,-.07),ze(m,.918,.05),ze(m,.922,.15),ze(m,.94,.2),ze(m,.965,.22)]),20,.011,8),t);g.castShadow=!0,r.add(g);const v=new pe(new rt(.009,.011,.03,8),e.black);v.position.set(m,.978,.225),v.rotation.x=-.6,r.add(v)}r.add(Bt(ze(-.06,.917,0),ze(.06,.917,0),.008,t)),r.visible=!1,this.steer.add(r)}buildRider(e){const t=this.rider=new ot;this.root.add(t),this.hip=ze(0,.94,-.2),this.shoulder=ze(0,1.2,.25);const n=new pe(new ji(.11,.1,4,10),e.shorts);n.rotation.z=Math.PI/2,n.position.copy(this.hip),n.castShadow=!0,t.add(n),this.torso=new ot;const s=this.hip.distanceTo(this.shoulder)+.04,r=bf(s,.15,e.jersey),a=r.geometry;a.computeBoundingBox();const o=a.boundingBox.min.y,c=a.boundingBox.max.y,l=a.attributes.position;for(let T=0;T<l.count;T++){const R=(l.getY(T)-o)/(c-o),S=1.02+.38*Math.pow(Math.max(0,(R-.25)/.75),1.4);l.setX(T,l.getX(T)*S);let b=l.getZ(T)*(.9-.12*R);b<0?b-=.035*Math.sin(Math.PI*R):R>.55&&(b+=.015*Math.sin(Math.PI*(R-.55)/.45)),l.setZ(T,b)}a.computeVertexNormals(),this.torso.add(r),Ss(this.torso,this.hip,this.shoulder),t.add(this.torso),this.head=new ot;const h=new Jt(.1,20,16);h.scale(.95,1.08,1.06);const u=new pe(h,e.skin);u.castShadow=!0,this.head.add(u);const d=new pe(new Jt(.125,18,10,0,Math.PI*2,0,Math.PI/2),e.helmet);d.scale.set(1,.95,1.3),d.position.set(0,.02,-.02),d.rotation.x=-.25,d.castShadow=!0,this.head.add(d);const f=2.3,m=new pe(new ii(.104,.021,6,24,f),e.glasses);m.rotation.set(Math.PI/2,0,0);const g=new ot;g.rotation.y=f/2-Math.PI/2,g.add(m),m.scale.set(1,1,.55),g.position.set(0,.008,.004),this.head.add(g);const v=new pe(new ii(.106,.006,4,24,f+.2),e.glassFrame);v.rotation.set(Math.PI/2,0,0);const p=new ot;p.rotation.y=(f+.2)/2-Math.PI/2,p.add(v),p.position.set(0,.03,.004),this.head.add(p);const y=new pe(new $i(.014,.035,6),e.skin);y.rotation.x=Math.PI/2,y.position.set(0,-.022,.1),this.head.add(y);for(const T of[-1,1]){const R=new pe(new Jt(.022,8,6),e.skin);R.scale.set(.45,1,.7),R.position.set(T*.098,-.008,-.01),this.head.add(R);const S=new pe(new Gi(new Rs([ze(T*.1,.03,0),ze(T*.085,-.05,.03),ze(0,-.098,.045)]),8,.0045,4),e.glassFrame);this.head.add(S)}const _=new pe(new Jt(1,18,12),e.helmet);_.scale.set(.1,.075,.2),_.position.set(0,.035,-.11),_.rotation.x=-.25,_.visible=!1,_.userData.tt=!0,this.head.add(_);const x=new pe(new Jt(.128,18,10,-Math.PI*.32,Math.PI*.64,Math.PI*.42,Math.PI*.2),e.glasses);x.position.set(0,.005,.005),x.visible=!1,x.userData.tt=!0,this.head.add(x);const E=new pe(new Jt(.098,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.3),e.hair);E.position.set(0,-.005,-.012),this.head.add(E);const M=new pe(new nt(.026,.01,.24),e.glassFrame);M.position.set(0,.127,-.03),M.rotation.x=-.18,this.head.add(M),this.head.position.set(0,1.31,.39),this.head.rotation.x=.05,t.add(this.head),t.add(Bt(ze(0,1.2,.27),ze(0,1.28,.35),.045,e.skin)),this.arms=[-1,1].map(T=>({s:T,upper:No(.27,R=>.044+.009*Math.sin(Math.PI*Math.min(1,R*1.1)),e.sleeve),lower:No(.26,R=>.041-.015*R+.006*Math.exp(-(((R-.2)/.2)**2)),e.skin),hand:new pe(v1(T),e.glove),elbow:new pe(new Jt(.041,10,8),e.skin),cap:new pe(new Jt(.054,12,8),e.jerseyPlain)})),this.shoeMats={...n1(),accent:e.jerseyPlain},this.legs=[-1,1].map(T=>({s:T,thigh:No(.44,R=>.086-.026*R+.007*Math.sin(Math.PI*R),e.thigh),shin:No(.43,R=>.044+.02*Math.exp(-(((R-.3)/.17)**2))-.008*R,e.skin),knee:new pe(new Jt(.058,12,8),e.skin),sock:bf(.18,.058,e.shoe),shoe:_f(this.shoeMats)}));for(const T of this.arms)T.hand.castShadow=!0,t.add(T.upper,T.lower,T.hand,T.elbow,T.cap);for(const T of this.legs)t.add(T.thigh,T.shin,T.sock,T.shoe,T.knee)}buildKit(e){this.kitTex={torso:ko(512,512),sleeve:ko(128,128),thigh:ko(128,256),helmet:ko(256,128)},e.jersey.map=this.kitTex.torso.tex,e.sleeve.map=this.kitTex.sleeve.tex,e.thigh.map=this.kitTex.thigh.tex,e.helmet.map=this.kitTex.helmet.tex,this.kitCol={jersey:Be.colors.jersey,shorts:"#16161b",helmet:"#f6f6f6"},this.kit="plain",this.updateKit()}updateKit(){var n;const e=this.kitCol;l1(this.kitTex.torso,e.jersey,this.kit),this.mats.jerseyPlain.color.set(e.jersey),h1(this.kitTex.sleeve,e.jersey,this.kit),u1(this.kitTex.thigh,e.shorts,"#"+this.mats.skin.color.getHexString(),this.kit),f1(this.kitTex.helmet,e.helmet);const t=e.helmet.toLowerCase()==="#d4af37";this.mats.helmet.metalness=t?.85:0,this.mats.helmet.roughness=t?.18:.3,this.mats.helmet.needsUpdate=!0,(n=this.model)==null||n.setKit(e)}useModel(e){const t=new wb(e);this.model=t,this.root.add(e),this.rider.visible=!1;const n=this.head.clone();for(const s of[...n.children])s.material===this.mats.skin&&n.remove(s);n.position.set(0,.107,.034),n.rotation.set(.12,0,0),n.scale.setScalar(1.12),t.attach("Head",n),this.modelHelmet=n,this.backPlate.removeFromParent(),this.backPlate.position.set(0,.063,-.145),this.backPlate.rotation.set(0,Math.PI,0),t.attach("Spine1",this.backPlate),t.setKit(this.kitCol),t.attachShoes(()=>_f(this.shoeMats)),this.update(0,0,0,0)}buildPlates(){this.plateCanvas=document.createElement("canvas"),this.plateCanvas.width=512,this.plateCanvas.height=384,this.plateTex=new xn(this.plateCanvas),this.plateTex.colorSpace=_t,this.plateTex.anisotropy=8;const e=new De({map:this.plateTex,roughness:.6}),t=new pe(new an(.3,.225),e);t.position.set(0,.02,-.132),t.rotation.set(0,Math.PI,0),this.torso.add(t),this.backPlate=t;for(const n of[-1,1]){const s=new pe(new an(.17,.1275),e);s.position.set(n*.016,.8,-.33),s.rotation.y=n*Math.PI/2,this.root.add(s)}this.setPlate(1,"")}buildDecals(){this.decalCanvas=document.createElement("canvas"),this.decalCanvas.width=512,this.decalCanvas.height=128,this.decalTex=new xn(this.decalCanvas),this.decalTex.colorSpace=_t,this.decalTex.anisotropy=8;const e=new De({map:this.decalTex,transparent:!0,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-2}),t=ze(0,.7,.4),n=t.clone().sub(rn),s=n.length();n.normalize();const r=rn.clone().lerp(t,.5);for(const a of[-1,1]){const o=ze(a,0,0),c=a>0?n.clone().negate():n.clone(),l=new C().crossVectors(o,c),h=new pe(new an(s*.48,s*.48*(128/512)),e);h.quaternion.setFromRotationMatrix(new Ie().makeBasis(c,l,o)),h.position.copy(r).addScaledVector(o,.033),this.root.add(h)}}setBrand(e){const t=Ap(e);this.brand=t.id;const n=this.decalCanvas,s=n.getContext("2d");s.clearRect(0,0,n.width,n.height);const r=t.serif?'"Cinzel", Georgia, serif':'"Barlow Condensed", Arial, sans-serif';s.letterSpacing!==void 0&&(s.letterSpacing=t.wide?"6px":"0px"),s.font=`${t.font} 104px ${r}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=o1(this.design==="team"?"#111114":this.frameColor);const a=Cp(t),o=s.measureText(a).width;o>n.width*.95&&(s.font=`${t.font} ${Math.floor(104*n.width*.95/o)}px ${r}`),s.fillText(a,n.width/2,n.height/2+2),this.decalTex.needsUpdate=!0}applyLook(e={}){this.design=e.paint||mn.paint,this.kit=e.kit||"plain",this.barColor=e.bar||null,this.setColors({jersey:e.jersey||Be.colors.jersey,frame:e.frame||Be.colors.bikeFrame,helmet:e.helmet||mn.helmet,shorts:e.shorts||mn.shorts}),this.setBrand(e.brand||mn.brand),this.setGroupset(e.groupset||mn.groupset),this.tireColor=e.tires||null,this.applyTireColor()}applyTireColor(){this.mats.tire.color.set(this.aero&&this.tireColor?this.tireColor:"#1c1c1c")}setGroupset(e){const t=Ep(e);this.groupset=t.id,this.mats.crankArm.color.set(t.crank),this.mats.ring.color.set(t.ring),this.mats.groupAccent.color.set(t.accent)}applyPaint(){const e=this.mats,t=this.design==="team",n=this.teamMats,s=s1(this.frameColor),r=l=>{l.roughness=s?.72:.3,l.metalness=s?.05:.3,l.clearcoat=s?0:1};if(t){e.frame.color.set("#111114"),e.frame.roughness=.55,e.frame.metalness=.2,e.frame.clearcoat=.25;for(const l of["down","top","fork","solid"])n[l].color.set(this.frameColor),r(n[l])}else e.frame.color.set(this.frameColor),r(e.frame);const a=this.design==="rainbow",o=(l,h,u)=>new fn({map:b1("#"+new ve(this.frameColor).getHexString(),l,h,u),roughness:.3,metalness:.2,clearcoat:1});a&&this.rainbowFor!==this.frameColor&&(this.rainbowFor=this.frameColor,this.rainbowMats={seat:o(.5,.82,!1),fork:o(.3,.62,!0)}),this.tubes.seat.material=a?this.rainbowMats.seat:e.frame,this.tubes.down.material=t?n.down:e.frame,this.tubes.top.material=t?n.top:e.frame,this.tubes.head.material=t?n.solid:e.frame;for(const l of this.forkTubes)l.material=t?n.fork:a?this.rainbowMats.fork:e.frame;this.forkCrown.material=t?n.solid:e.frame;const c=t||a;this.stripe.visible=!c,e.accent.color.set(c?"#1b1b1e":Be.colors.gold),e.tape.color.set(this.barColor||(c?"#1b1b1e":"#f1f1ee")),this.rimMat.map=Mf(c?"team":"gold"),this.rimMat.needsUpdate=!0}setTires(e){const t=e==="cx";for(const s of this.roadTires)s.visible=!t;for(const s of this.cxTires)s.visible=t;const n=this.aero=e==="tt";this.ttBars.visible=n,this.roadBars.visible=!n,this.applyTireColor(),this.disc.visible=n,this.deepRim.visible=n;for(const s of[this.head,this.modelHelmet])s==null||s.traverse(r=>r.userData.tt&&(r.visible=n));this.update(0,0,0,0)}setPlate(e,t){this.plateNumber=e,this.plateName=t,a1(this.plateCanvas,e,t),this.plateTex.needsUpdate=!0}setColors({jersey:e,frame:t,helmet:n,shorts:s}={}){e&&(this.kitCol.jersey=e),t&&(this.frameColor=t),this.applyPaint(),n&&(this.kitCol.helmet=n),s&&(this.kitCol.shorts=s,this.mats.shorts.color.set(s)),(e||n||s)&&this.updateKit(),t&&this.brand&&this.setBrand(this.brand)}update(e,t,n,s){this.wheelAngle+=t/jt*e,this.rearWheel.rotation.x=this.wheelAngle,this.frontWheel.rotation.x=this.wheelAngle,this.crankAngle+=n*e,this.crank.rotation.x=this.crankAngle,this.steer.rotation.y=-s*.35;const r=this.crankAngle,a=Math.sin(r*2)*.006*Math.min(1,Math.abs(n)/4);this.standK=(this.standK||0)+((this.stand||0)-(this.standK||0))*(1-Math.exp(-6*e));const o=this.aero?0:this.standK,c=.2*o;this.rider.rotation.x=c;const l=m1.copy(this.hip).applyAxisAngle(xf,c);this.rider.position.set(0,a+.06*o,.13*o).add(this.hip).sub(l),this.rider.updateMatrix();const h=(this._toRider||(this._toRider=new Ie)).copy(this.rider.matrix).invert();o>.01&&(this.root.rotation.z+=Math.sin(r)*.11*o),this.torso.rotation.y=0;for(const f of this.legs){const m=f.s,g=m>0?r+Math.PI:r,v=this.pedals[m>0?1:0];v.position.set(m*.12,rn.y-Uo*Math.cos(g),rn.z-Uo*Math.sin(g));const p=d1.copy(v.position).applyMatrix4(h);f.shoe.position.copy(p).add(Pi.set(0,.008,0));const y=.06+.22*Math.sin(g);f.shoe.rotation.x=y;const _=p1.copy(p).add(Pi.set(0,.095,-.12).applyAxisAngle(xf,y)),E=Il.copy(this.hip).add(Pi.set(m*.09,0,0)).clone(),M=yf(E,_,.44,.43,Pi.set(m*.12,.1,1),new C);Ss(f.thigh,E,M),f.knee.position.copy(M);const T=_.clone().sub(M).normalize(),R=M.clone().addScaledVector(T,.43);Ss(f.shin,M,R),Ss(f.sock,R.clone().addScaledVector(T,-.16),R.clone().addScaledVector(T,.02))}const u=this.steer.rotation.y,d=this._hands||(this._hands=[new C,new C]);for(const f of this.arms){const m=ze(f.s*.19,1.19,.23),g=f.s*.21,v=.1+.45,p=this.aero?f.s*.058:g,y=this.aero?.45+.17:v-.03*o,_=ze(p*Math.cos(u)+(y-.45)*Math.sin(u),this.aero?.95:.94-.12*o,.45-p*Math.sin(u)+(y-.45)*Math.cos(u)),x=_.clone();_.applyMatrix4(h);const E=yf(m,_,.27,.26,Pi.set(f.s*.05,-.75,-.35),new C);Ss(f.upper,m,E),Ss(f.lower,E,_),f.hand.position.copy(_),d[f.s>0?1:0].copy(x),f.hand.quaternion.copy(f.lower.quaternion),f.elbow.position.copy(E),f.cap.position.copy(m).add(Pi.set(-f.s*.01,-.012,0))}this.model&&this.model.pose({hip:(this._hipS||(this._hipS=new C)).copy(this.hip).add(Pi.set(0,.06*o,.13*o)),pedals:[this.pedals[0].position,this.pedals[1].position],angles:[r,r+Math.PI],hands:d,bob:a,aero:this.aero,stand:o})}}function In(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Dl(i){for(const e of["mousedown","pointerdown","touchstart"])i.addEventListener(e,t=>t.stopPropagation(),{passive:!0})}function qe(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const M1={A:"✕",B:"○",X:"□",Y:"△",LB:"L1",RB:"R1",LT:"L2",RT:"R2"},S1={A:"Enter",B:"Esc",X:"Entf",Y:"Y",LB:"Bild↓",RB:"Bild↑",LT:"A",RT:"D"},pt=i=>`<span class="btn btn-${i.toLowerCase()}"><i class="glyph-xbox">${i}</i><i class="glyph-ps">${M1[i]??i}</i><i class="glyph-keys">${S1[i]??i}</i></span>`;function Yi(i){const e={A:"confirm",B:"back",X:"x",Y:"y",LB:"lb",RB:"rb"};return`<footer class="hints">${i.map(([t,n])=>`<span class="hint" ${e[t]?`data-act="${e[t]}"`:""}>${pt(t)}${n}</span>`).join("")}</footer>`}const kn={};function Mi(i,e){const t=i.npc;t.s+=t.speed*e,i.world.poseAt(t.s,t.lateral,kn);const n=i.bike.root;n.position.set(kn.x,kn.h,kn.z),n.rotation.set(-kn.pitch,kn.heading,0);const s=t.speed>.5?t.speed/jt/3.6:0;return i.bike.update(e,t.speed,t.pedal===!1?0:s,0),i.focus.set(kn.x,kn.h,kn.z),kn}const dn=new C,Ds=new C;function T1(i,e,{dist:t=4.4,height:n=1.75,lag:s=4,fovBase:r=58,speed:a=0,snap:o=!1}={}){const c=i.camera,l=i.bike.root,h=l.rotation.y,u=Math.sin(h),d=Math.cos(h);dn.set(l.position.x-u*t,l.position.y+n,l.position.z-d*t);const f=i.world.terrainHeight(dn.x,dn.z)+.7;dn.y<f&&(dn.y=f),o?c.position.copy(dn):(c.position.x=We(c.position.x,dn.x,s,e),c.position.y=We(c.position.y,dn.y,s,e),c.position.z=We(c.position.z,dn.z,s,e)),Ds.set(l.position.x+u*3,l.position.y+1,l.position.z+d*3),c.lookAt(Ds);const m=r+Math.min(a,20)*.9;c.fov=o?m:We(c.fov,m,3,e),c.updateProjectionMatrix()}const Sf=new C;function tr(i,e,t,n=!1){const s=i.camera,r=t.tz,a=-t.tx,o=i.time,c=4.4;dn.set(t.x+r*c+t.tx*1.2,t.h+1.2+Math.sin(o*.2)*.1,t.z+a*c+t.tz*1.2),n?s.position.copy(dn):s.position.lerp(dn,1-Math.exp(-5*e)),s.fov=40,s.updateProjectionMatrix();const l=Math.tan(gl.degToRad(s.fov/2))*c*s.aspect;Ds.set(t.x,t.h+.85,t.z).sub(s.position),Sf.crossVectors(Ds,s.up).normalize(),Ds.add(s.position).addScaledVector(Sf,-l*.42),s.lookAt(Ds)}function Nn(i){if(i==null)return"–:––.–";const e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(1)}`}const En=[{id:"road",name:"Rennrad"},{id:"cx",name:"Cycle Cross"},{id:"tt",name:"Zeitfahren"}],_a=i=>(En.find(e=>e.id===i)||En[0]).name,Lp=i=>i==="cx"?"cx":i==="tt"?"tt":"road";function w1(i){let e,t=0,n=!0,s=!1;function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),En[t]&&i.bike.setTires(En[t].id),o||(i.audio.nav(),i.input.rumble(.15,30))}async function a(){if(s)return;if(t===En.length){i.audio.select(),i.go("story");return}i.mode=En[t].id,i.audio.select(),i.input.rumble(.35,80);const o=Lp(i.mode);if(i.worlds[o]){i.useWorld(o),i.go("menu");return}s=!0;const c=e.querySelector(".mode-building");c.textContent=o==="tt"?"Das Dorf wird gebaut …":"Der Wald wird gebaut …",c.classList.add("show"),await new Promise(l=>setTimeout(l,60)),await i.prepareWorld(o),s=!1,i.go("menu")}return{enter(o={}){t=o.minigame?En.length:Math.max(0,En.findIndex(c=>c.id===i.mode)),e=In(`
        <div class="screen mode-screen ${o.fromTransition?"intro":""}">
          <div class="mode-head">
            <div class="menu-brand">${qe(Be.gameName)}</div>
            <div class="menu-heading">Womit fährst du?</div>
          </div>
          <div class="mode-cards">
            ${En.map((c,l)=>`
              <div class="mode-card" data-i="${l}">
                <div class="mode-name">${qe(c.name)}</div>
              </div>`).join("")}
              <div class="mode-card mode-card-game" data-i="${En.length}">
                <div class="mode-name">🎮 Game</div>
                <div class="control-sub">Das große Rennen</div>
              </div>
          </div>
          ${Yi([["A","Auswählen"],["Y","Steuerung ändern"],["X","Flaschenjagd"],["B","Zurück"]])}
          <div class="mode-building">Der Wald wird gebaut …</div>
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(c=>c.addEventListener("click",()=>{t=Number(c.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=Mi(i,o);tr(i,o,c,n),n=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,o),i.fx.uLines.value=We(i.fx.uLines.value,0,6,o),i.fx.uFade.value=We(i.fx.uFade.value,0,5,o);const l=i.input;s||((l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<En.length?(t++,r()):l.pressed("confirm")?a():l.pressed("x")?(i.audio.select(),i.go("minigame")):l.pressed("y")?(i.audio.select(),i.go("control",{next:"mode"})):l.pressed("back")&&(i.audio.back(),i.go("title")))},exit(){e.remove()}}}function E1(i){let e,t,n,s=0,r=["","","",""],a=0,o="",c=!0,l=!1;const h=()=>i.online;function u(){var _,x;const p=e.querySelector(".lobby-body"),y=(_=h().remote)==null?void 0:_.char;if(n==="choose")p.innerHTML=["Rennen erstellen","Rennen beitreten"].map((E,M)=>`<div class="card lobby-opt ${M===s?"selected":""}" data-i="${M}">
            <div class="card-info"><div class="card-name">${E}</div>
            <div class="card-sub">${M===0?"Du bekommst einen Code für deinen Gegner":"Gib den Code deines Gegners ein"}</div></div>
            <div class="card-go">›</div></div>`).join(""),p.querySelectorAll(".lobby-opt").forEach(E=>E.addEventListener("click",()=>{s=Number(E.dataset.i),m()}));else if(n==="hosting"){const E=h().code;p.innerHTML=`
        <div class="lobby-label">Dein Code</div>
        <div class="lobby-code">${qe(E||"…")}</div>
        <div class="lobby-info">${y?`<b>${qe(y.name)}</b> (Nr. ${qe(y.number)}) ist da!<br>Drück A zum Starten.`:"Sag deinem Gegner diesen Code.<br>Warte, bis er beitritt …"}</div>
        ${y?'<div class="card lobby-start selected"><div class="card-info"><div class="card-name">Rennen starten</div></div><div class="card-go">›</div></div>':'<div class="lobby-wait"></div>'}
        <div class="lobby-mode">Modus: ${qe(_a(i.mode))}</div>`,(x=p.querySelector(".lobby-start"))==null||x.addEventListener("click",g)}else n==="code"?(p.innerHTML=`
        <div class="lobby-label">Code eingeben</div>
        <div class="lobby-digits">${r.map((E,M)=>`<span class="lobby-digit ${M===a?"cursor":""}">${E===""?"·":E}</span>`).join("")}</div>
        <div class="lobby-info">Zahlen tippen – oder mit ↑ ↓ ändern und ← → wechseln.<br>Auf dem iPad: Ziffer antippen zählt hoch. Dann A drücken.</div>
        <div class="card lobby-start selected lobby-join"><div class="card-info"><div class="card-name">Beitreten</div></div><div class="card-go">›</div></div>`,p.querySelectorAll(".lobby-digit").forEach((E,M)=>E.addEventListener("click",()=>{a=M,r[M]=String(((r[M]===""?-1:Number(r[M]))+1)%10),i.audio.nav(),u()})),p.querySelector(".lobby-join").addEventListener("click",m)):n==="connecting"?p.innerHTML=`<div class="lobby-label">Verbinde mit Code ${qe(r.join(""))} …</div><div class="lobby-wait"></div>`:n==="joined"?p.innerHTML=`
        <div class="lobby-label">Verbunden!</div>
        <div class="lobby-info">${y?`Gegner: <b>${qe(y.name)}</b> (Nr. ${qe(y.number)})`:""}<br>Warte, bis dein Gegner das Rennen startet …</div>
        <div class="lobby-wait"></div>
        <div class="lobby-mode">Modus: ${qe(_a(i.mode))}</div>`:n==="error"&&(p.innerHTML=`<div class="lobby-label">Hat nicht geklappt</div><div class="lobby-info">${qe(o)}<br>Drück A, um es nochmal zu versuchen.</div>`)}function d(p){n=p,u()}function f(p){e&&(p.t==="code"?u():p.t==="hello"?(i.audio.success(),i.input.rumble(.5,200),h().role==="guest"&&p.mode&&p.mode!==i.mode&&(i.mode=p.mode,i.prepareWorld(Lp(i.mode)),i.bike.setTires(i.mode)),h().role==="guest"?d("joined"):u()):p.t==="start"?(l=!0,i.go("ride",{character:t,online:!0})):p.t==="closed"?(o="Dein Gegner hat das Rennen verlassen.",h().close(),d("error")):p.t==="error"&&(o=p.why,h().close(),d("error"),i.audio.error()))}function m(){if(i.audio.select(),n==="choose")s===0?(h().host(t,i.mode),d("hosting")):(r=["","","",""],a=0,d("code"));else if(n==="hosting")h().remote&&g();else if(n==="code"){if(r.some(p=>p==="")){i.audio.error();return}h().join(r.join(""),t,i.mode),d("connecting")}else n==="error"&&d("choose")}function g(){h().send({t:"start"}),l=!0,i.go("ride",{character:t,online:!0})}function v(){if(i.audio.back(),n==="code"||n==="error"){h().close(),d("choose");return}h().close(),n==="choose"?i.go("menu",{selectId:t.id}):d("choose")}return{enter(p={}){t=p.character,l=!1,o="",e=In(`
        <div class="screen menu-screen lobby-screen">
          <div class="menu-panel">
            <div class="menu-brand">${qe(Be.gameName)}</div>
            <div class="menu-heading">Online gegen einen Freund</div>
            <div class="lobby-me">Du fährst als <b>${qe(t.name)}</b> · Nr. ${qe(t.number)}</div>
            <div class="lobby-body"></div>
          </div>
          ${Yi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),i.ui.append(e),i.online.listen(f),i.online.connected?d(i.online.role==="host"?"hosting":"joined"):(s=0,d("choose")),c=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(p){const y=Mi(i,p);tr(i,p,y,c),c=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,p),i.fx.uFade.value=We(i.fx.uFade.value,0,5,p);const _=i.input;if(n==="code"){for(const E of _.chars)/^[0-9]$/.test(E)?(r[a]=E,a=Math.min(3,a+1),i.audio.nav()):E==="\b"&&(r[a]===""&&a>0&&a--,r[a]=""),u();const x=E=>{const M=r[a]===""?E>0?-1:10:Number(r[a]);r[a]=String((M+E+10)%10),i.audio.nav(),u()};_.pressed("up")?x(1):_.pressed("down")?x(-1):_.pressed("left")&&a>0?(a--,u()):_.pressed("right")&&a<3&&(a++,u())}else n==="choose"&&(_.pressed("up")||_.pressed("down"))&&(s=1-s,i.audio.nav(),u());_.pressed("confirm")?m():_.pressed("back")&&v()},exit(){e.remove(),e=null,l||i.online.listen(null)}}}const Wi=[{id:"pad",name:"Controller",icon:"🎮",sub:"Xbox oder PlayStation"},{id:"keys",name:"Tastatur",icon:"⌨️",sub:"Computer oder Laptop"},{id:"touch",name:"iPad",icon:"📱",sub:"mit dem Finger steuern"}],Ip="grandtour.steuerung";function Ir(){try{return localStorage.getItem(Ip)}catch{return null}}function _h(i,e,t=!0){const n=Wi.some(s=>s.id===e)?e:"pad";i.control=n,t&&(i.controlChosen=n),i.input.touchEnabled=n==="touch";for(const s of Wi)document.body.classList.toggle(`control-${s.id}`,s.id===n);if(t)try{localStorage.setItem(Ip,n)}catch{}}function Dp(i){return i.input.pad?"pad":matchMedia("(pointer: coarse)").matches?"touch":"keys"}function A1(i){let e,t=0,n=!0,s="mode";function r(o=!1){e.querySelectorAll(".mode-card").forEach((c,l)=>c.classList.toggle("selected",l===t)),o||i.audio.nav()}function a(){_h(i,Wi[t].id),i.audio.select(),i.go(s,{fromTransition:!0})}return{enter(o={}){s=o.next||"mode";const c=Ir()||Dp(i);t=Math.max(0,Wi.findIndex(l=>l.id===c)),e=In(`
        <div class="screen mode-screen control-screen intro">
          <div class="mode-head">
            <div class="menu-brand">${qe(Be.gameName)}</div>
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
        </div>`),i.ui.append(e),e.querySelectorAll(".mode-card").forEach(l=>l.addEventListener("click",()=>{t=Number(l.dataset.i),r(!0),a()})),r(!0),n=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(o){const c=Mi(i,o);tr(i,o,c,n),n=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,o),i.fx.uFade.value=We(i.fx.uFade.value,0,5,o),i.fx.uLines.value=We(i.fx.uLines.value,0,6,o);const l=i.input;(l.pressed("left")||l.pressed("up"))&&t>0?(t--,r()):(l.pressed("right")||l.pressed("down"))&&t<Wi.length-1?(t++,r()):l.pressed("confirm")&&a()},exit(){e.remove()}}}const C1=/^[og]\s*(.+)?/,R1=/^mtllib /,P1=/^usemtl /,L1=/^usemap /,Tf=/\s+/,wf=new C,gc=new C,Ef=new C,Af=new C,un=new C,Fo=new ve;function I1(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;wf.fromArray(s,e),gc.fromArray(s,t),Ef.fromArray(s,n),un.subVectors(Ef,gc),Af.subVectors(wf,gc),un.cross(Af),un.normalize(),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){const m=this.normals.length;u=this.parseNormalIndex(o,m),d=this.parseNormalIndex(c,m),f=this.parseNormalIndex(l,m),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){const m=this.uvs.length;u=this.parseUVIndex(s,m),d=this.parseUVIndex(r,m),f=this.parseUVIndex(a,m),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class D1 extends Yr{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new qy(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new I1;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(Tf);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Fo.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),_t),t.colors.push(Fo.r,Fo.g,Fo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=l.slice(1).trim().split(Tf),f=[];for(let g=0,v=d.length;g<v;g++){const p=d[g];if(p.length>0){const y=p.split("/");f.push(y)}}const m=f[0];for(let g=1,v=f.length-1;g<v;g++){const p=f[g],y=f[g+1];t.addFace(m[0],p[0],y[0],m[1],p[1],y[1],m[2],p[2],y[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let d=[];const f=[];if(l.indexOf("/")===-1)d=u;else for(let m=0,g=u.length;m<g;m++){const v=u[m].split("/");v[0]!==""&&d.push(v[0]),v[1]!==""&&f.push(v[1])}t.addLineGeometry(d,f)}else if(h==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=C1.exec(l))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(P1.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(R1.test(l))t.materialLibraries.push(l.substring(7).trim());else if(L1.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new ot;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const g=new lt;g.setAttribute("position",new $e(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new $e(h.normals,3)),h.colors.length>0&&(m=!0,g.setAttribute("color",new $e(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new $e(h.uvs,2));const v=[];for(let y=0,_=u.length;y<_;y++){const x=u[y],E=x.name+"_"+x.smooth+"_"+m;let M=t.materials[E];if(this.materials!==null){if(M=this.materials.create(x.name),d&&M&&!(M instanceof Zo)){const T=new Zo;Ln.prototype.copy.call(T,M),T.color.copy(M.color),M=T}else if(f&&M&&!(M instanceof xi)){const T=new xi({size:10,sizeAttenuation:!1});Ln.prototype.copy.call(T,M),T.color.copy(M.color),T.map=M.map,M=T}}M===void 0&&(d?M=new Zo:f?M=new xi({size:1,sizeAttenuation:!1}):M=new Wy,M.name=x.name,M.flatShading=!x.smooth,M.vertexColors=m,t.materials[E]=M),v.push(M)}let p;if(v.length>1){for(let y=0,_=u.length;y<_;y++){const x=u[y];g.addGroup(x.groupStart,x.groupCount,y)}d?p=new Nu(g,v):f?p=new Os(g,v):p=new pe(g,v)}else d?p=new Nu(g,v[0]):f?p=new Os(g,v[0]):p=new pe(g,v[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){const o=new xi({size:1,sizeAttenuation:!1}),c=new lt;c.setAttribute("position",new $e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new $e(t.colors,3)),o.vertexColors=!0);const l=new Os(c,o);r.add(l)}return r}}const k1="modelle/natur/",vc={sommer:{common:"CommonTree",birch:"BirchTree",willow:"Willow",pine:"PineTree",pineAlt:"PineTree"},herbst:{common:"CommonTree_Autumn",birch:"BirchTree_Autumn",willow:"Willow_Autumn",pine:"PineTree",pineAlt:"PineTree_Autumn"}};function U1(i,e=1.6){const t={};let n=null;for(const s of i.split(`
`)){const r=s.trim().split(/\s+/);r[0]==="newmtl"?n=r[1]:r[0]==="Kd"&&n&&(t[n]=new ve(Math.min(1,r[1]*e),Math.min(1,r[2]*e),Math.min(1,r[3]*e)))}return t}async function kp(i,e=k1,t=1.6,n=!0,s=!0){const[r,a]=await Promise.all([fetch(e+i+".obj").then(x=>x.text()),fetch(e+i+".mtl").then(x=>x.text())]),o=U1(a,t),c=new D1().parse(r.replace(/^l .*$/gm,"")),l=[];c.traverse(x=>{var P;if(!x.isMesh)return;let E=x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone();E.applyMatrix4(x.matrixWorld),E.attributes.normal||E.computeVertexNormals();const M=Array.isArray(x.material)?x.material:[x.material],T=E.groups.length?E.groups:[{start:0,count:E.attributes.position.count,materialIndex:0}],R=new Float32Array(E.attributes.position.count*3),S=new Float32Array(E.attributes.position.count);for(const N of T){const B=(P=M[N.materialIndex])==null?void 0:P.name,U=o[B]||new ve(.5,.5,.5),V=s&&B==="Wood"?1:0;for(let D=N.start;D<N.start+N.count;D++)R[D*3]=U.r,R[D*3+1]=U.g,R[D*3+2]=U.b,S[D]=V}const b=new lt;b.setAttribute("position",E.attributes.position),b.setAttribute("normal",E.attributes.normal),b.setAttribute("color",new Ct(R,3)),b.setAttribute("bark",new Ct(S,1)),l.push(b)});const h=Ys(l);h.computeBoundingBox();const u=h.boundingBox,d=h.attributes.position,f=u.min.y+(u.max.y-u.min.y)*.06;let m=0,g=0,v=0;for(let x=0;x<d.count;x++)d.getY(x)<=f&&(m+=d.getX(x),g+=d.getZ(x),v++);const p=v&&n?m/v:(u.min.x+u.max.x)/2,y=v&&n?g/v:(u.min.z+u.max.z)/2;h.translate(-p,-u.min.y,-y);const _=mb(h,1e-4);return _.computeBoundingBox(),_}const mi=(i,e)=>Array.from({length:e},(t,n)=>`${i}_${n+1}`);async function N1(){try{const i=new Set;for(const r of Object.values(vc))for(const a of Object.values(r))mi(a,5).forEach(o=>i.add(o));["Bush_1","Bush_2","BushBerries_1","BushBerries_2","TreeStump_Moss","WoodLog_Moss",...mi("Rock_Moss",7)].forEach(r=>i.add(r));const e=[...i],t=await Promise.all(e.map(r=>kp(r))),n=Object.fromEntries(e.map((r,a)=>[r,t[a]])),s=r=>{const a=vc[r]||vc.sommer;return{common:mi(a.common,5).map(o=>n[o]),birch:mi(a.birch,5).map(o=>n[o]),willow:mi(a.willow,5).map(o=>n[o]),pine:mi(a.pine,5).map(o=>n[o]),pineAlt:mi(a.pineAlt,5).map(o=>n[o])}};return{trees:{sommer:s("sommer"),herbst:s("herbst")},bushes:["Bush_1","Bush_2","BushBerries_1","BushBerries_2"].map(r=>n[r]),rocks:mi("Rock_Moss",7).map(r=>n[r]),stump:n.TreeStump_Moss,log:n.WoodLog_Moss}}catch(i){return console.warn("Natur-Modelle konnten nicht geladen werden, nutze einfache Bäume.",i),null}}const F1=["House_1","House_2","House_3","House_4","Inn","Blacksmith","Stable","Sawmill","Mill","Bell_Tower"],O1=["Well","MarketStand_1","MarketStand_2","Cart","Barrel","Crate","Fence","Bench_1","Gazebo","Hay","Bags","Package_1","Bonfire_Lit"];async function z1(){try{const i="modelle/dorf/",e=[...F1,...O1],t=await Promise.all(e.map(n=>kp(n,i,1.9,!1,!1)));return Object.fromEntries(e.map((n,s)=>[n,t[s]]))}catch(i){return console.warn("Dorf-Modelle konnten nicht geladen werden.",i),null}}const B1=["up","down","left","right"],H1={0:"confirm",1:"back",2:"x",3:"y",4:"lb",5:"rb",6:"lt",7:"rt",8:"select",9:"start",11:"view"},V1={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"confirm",NumpadEnter:"confirm",Escape:"back",Delete:"x",PageUp:"rb",PageDown:"lb"},vr=.14;function G1(i=""){return/xbox|045e/i.test(i)?!1:/054c|dualsense|dualshock|playstation|wireless controller/i.test(i)}const Oo=.55;class W1{constructor(){this.keys=new Set,this.queue=[],this.charQueue=[],this.frame=new Set,this.chars=[],this.prevButtons=[],this.dirTime={up:0,down:0,left:0,right:0},this.dirRepeat={up:0,down:0,left:0,right:0},this.steer=0,this.steerHold=0,this.steerDir=0,this.lookX=0,this.lookY=0,this.throttle=0,this.brake=0,this.pad=null,this.usingPad=!1,this.touchRide=!1,this.touches=new Map,this.touchPedal=!1,this.touchEnabled=!1,this.setupTouch(),this.layout="xbox",window.addEventListener("keydown",e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Tab","Backspace"].includes(e.key)&&e.preventDefault(),this.usingPad=!1,this.keys.add(e.code),e.repeat||this.queue.push("any");const t=V1[e.key];t&&this.queue.push(t),e.code==="KeyC"&&this.queue.push("view"),e.code==="KeyT"&&this.queue.push("cruise"),e.code==="KeyK"&&!e.repeat&&this.queue.push("klingel"),(e.code==="Space"&&!e.repeat||e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.queue.push("sprint"),e.key==="Escape"&&this.queue.push("pause"),e.key==="Backspace"?this.charQueue.push("\b"):e.key.length===1&&this.charQueue.push(e.key)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousedown",()=>this.queue.push("any")),window.addEventListener("pointerdown",()=>this.queue.push("any")),window.addEventListener("touchstart",()=>this.queue.push("any"),{passive:!0}),window.addEventListener("pointerup",e=>{var n,s;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"[data-act]");t&&this.queue.push(t.dataset.act)})}setupTouch(){const t={passive:!1};window.addEventListener("touchstart",s=>{if(!(!this.touchRide||!this.touchEnabled||s.target.closest("button, .pause-box, .result, .touch-pause"))){s.preventDefault();for(const r of s.changedTouches)this.touches.set(r.identifier,{x0:r.clientX,y0:r.clientY,t0:performance.now(),mode:"steer",side:r.clientX<innerWidth/2?-1:1})}},t),window.addEventListener("touchmove",s=>{if(!(!this.touchRide||!this.touchEnabled)){s.preventDefault();for(const r of s.changedTouches){const a=this.touches.get(r.identifier);if(!a||a.mode!=="steer")continue;const o=r.clientY-a.y0,c=r.clientX-a.x0;Math.abs(o)>45&&Math.abs(o)>Math.abs(c)*1.3&&(o<0?(this.touchPedal&&this.queue.push("sprint"),this.touchPedal=!0,a.mode="up"):(this.touchPedal=!1,a.mode="brake"))}}},t);const n=s=>{for(const r of s.changedTouches)this.touches.delete(r.identifier)};window.addEventListener("touchend",n),window.addEventListener("touchcancel",n)}inject(e){this.queue.push(e),e!=="any"&&this.queue.push("any")}pressed(e){return this.frame.has(e)}holdTime(e){return this.dirTime[e]}rumble(e=.3,t=60){const n=this.pad&&this.pad.vibrationActuator;if(!(!n||!n.playEffect))try{const s=n.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});s&&s.catch&&s.catch(()=>{})}catch{}}update(e){this.frame.clear();for(const U of this.queue)this.frame.add(U);this.queue.length=0,this.chars=this.charQueue,this.charQueue=[];const t=navigator.getGamepads?navigator.getGamepads():[];let n=null;for(const U of t)if(U&&U.connected&&(n=U,U.mapping==="standard"))break;this.pad=n;const s=n&&G1(n.id)?"ps":"xbox";s!==this.layout&&(this.layout=s,document.body.classList.toggle("pad-ps",s==="ps"));const r={up:!1,down:!1,left:!1,right:!1};let a=0,o=0,c=0,l=0,h=0,u=0;if(n){const U=n.buttons;for(let le=0;le<U.length;le++){const Se=!!(U[le]&&(U[le].pressed||U[le].value>.5)),He=!!this.prevButtons[le];if(Se&&!He){this.frame.add("any"),this.usingPad=!0;const F=H1[le];F&&this.frame.add(F),le===1&&this.frame.add("cruise")}this.prevButtons[le]=Se}const V=n.axes[0]||0,D=n.axes[1]||0;Math.abs(V)>Math.abs(D)?(r.left=V<-Oo,r.right=V>Oo):(r.up=D<-Oo,r.down=D>Oo);const O=le=>!!(U[le]&&U[le].pressed);r.up||(r.up=O(12)),r.down||(r.down=O(13)),r.left||(r.left=O(14)),r.right||(r.right=O(15)),(Math.abs(V)>.3||Math.abs(D)>.3)&&(this.usingPad=!0);const k=le=>U[le]?U[le].value:0;a=k(7)-k(6),o=Math.abs(V)>vr?(V-Math.sign(V)*vr)/(1-vr):0,c=k(0),l=k(3);const J=n.axes[2]||0,ce=n.axes[3]||0;h=Math.abs(J)>vr?J:0,u=Math.abs(ce)>vr?ce:0}for(const U of B1)if(r[U]){if(this.dirTime[U]===0&&this.frame.add(U),this.dirTime[U]+=e,this.dirTime[U]>.35){this.dirRepeat[U]+=e;const V=this.dirTime[U]>1.6?.035:.09;this.dirRepeat[U]>=V&&(this.dirRepeat[U]=0,this.frame.add(U))}}else this.dirTime[U]=0,this.dirRepeat[U]=0;const d=this.keys;let f=0;(d.has("KeyA")||d.has("ArrowLeft"))&&(f-=1),(d.has("KeyD")||d.has("ArrowRight"))&&(f+=1);const m=d.has("KeyW")||d.has("ArrowUp")?1:0,g=d.has("KeyS")||d.has("ArrowDown")?1:0;let v=0,p=!1,y=!1,_=0;if(this.touchRide){for(const U of this.touches.values())U.mode==="steer"?U.side<0?p=!0:y=!0:U.mode==="brake"&&(_=1);v=(y?1:0)-(p?1:0)}else this.touchPedal=!1,this.touches.clear();const x=Math.max(-1,Math.min(1,a+f+v)),E=Math.abs(x)>.05?Math.sign(x):0;E!==0&&E===this.steerDir?this.steerHold+=e:this.steerHold=0,this.steerDir=E;const{start:M,vollNach:T,stick:R=.4}=Be.steering,S=Math.min(1,this.steerHold/T),b=M+(1-M)*S*S*(3-2*S),P=Math.max(-1,Math.min(1,x*b+o*R)),N=Math.abs(P)>Math.abs(this.steer)?3:7;this.steer+=Math.max(-N*e,Math.min(N*e,P-this.steer)),d.has("KeyJ")&&(h-=1),d.has("KeyL")&&(h+=1),d.has("KeyI")&&(u-=1),d.has("Comma")&&(u+=1),this.lookX=Math.max(-1,Math.min(1,h)),this.lookY=Math.max(-1,Math.min(1,u)),this.throttle=Math.max(c,m,this.touchRide&&this.touchPedal?1:0),this.brake=Math.max(l,g,_);const B=U=>!!(n&&n.buttons[U]&&n.buttons[U].pressed);this.l1=B(4)||d.has("KeyQ")||p&&y,this.r1=B(5)||d.has("KeyE")||p&&y}}const $1={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Ts(i){const e=/^([A-G])([#b]?)(-?\d)$/.exec(i);if(!e)return 440;const t=$1[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0)+(parseInt(e[3],10)+1)*12;return 440*Math.pow(2,(t-69)/12)}class X1{constructor(){this.ctx=null,this.fwPhase=0,this.musicStarted=!1,this.muted=!1}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.build()}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}get ok(){return!!this.ctx&&this.ctx.state==="running"}build(){const e=this.ctx,t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,t.connect(e.destination),this.master=e.createGain(),this.master.connect(t),this.sfx=e.createGain(),this.sfx.gain.value=Be.soundVolume,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=Be.music.volume,this.musicBus.connect(this.master),this.musicIn=e.createGain(),this.musicIn.connect(this.musicBus);const n=e.createConvolver();n.buffer=this.impulse(3.2);const s=e.createGain();s.gain.value=.55,this.musicIn.connect(n),n.connect(s),s.connect(this.musicBus);const r=e.sampleRate*2;this.noise=e.createBuffer(1,r,e.sampleRate);const a=this.noise.getChannelData(0);for(let c=0;c<r;c++)a[c]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=this.noise,o.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=400,this.windGain=e.createGain(),this.windGain.gain.value=0,o.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),o.start()}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}toggleMute(){this.ctx&&(this.muted=!this.muted,this.master.gain.setTargetAtTime(this.muted?0:1,this.ctx.currentTime,.05))}tone(e,t,{type:n="sine",vol:s=.2,attack:r=.005,slideTo:a=null,when:o=0,dest:c=null}={}){if(!this.ok)return;const l=this.ctx,h=l.currentTime+o,u=l.createOscillator(),d=l.createGain();u.type=n,u.frequency.setValueAtTime(e,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+t),d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+r),d.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(c||this.sfx),u.start(h),u.stop(h+t+.05)}noiseBurst(e,{vol:t=.3,freq:n=3e3,type:s="highpass",q:r=1,when:a=0}={}){if(!this.ok)return;const o=this.ctx,c=o.currentTime+a,l=o.createBufferSource();l.buffer=this.noise;const h=o.createBiquadFilter();h.type=s,h.frequency.value=n,h.Q.value=r;const u=o.createGain();u.gain.setValueAtTime(t,c),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(u),u.connect(this.sfx),l.start(c,Math.random()*1.5),l.stop(c+e+.02)}nav(){this.tone(720,.08,{type:"triangle",vol:.13,slideTo:960})}select(){this.tone(880,.1,{type:"triangle",vol:.16}),this.tone(1320,.16,{type:"triangle",vol:.14,when:.07})}back(){this.tone(620,.14,{type:"triangle",vol:.14,slideTo:360})}error(){this.tone(150,.22,{type:"square",vol:.07})}key(){this.noiseBurst(.03,{vol:.2,freq:2600,type:"bandpass",q:2}),this.tone(1400,.035,{vol:.04})}success(){["C5","E5","G5","C6"].forEach((e,t)=>this.tone(Ts(e),.35,{type:"triangle",vol:.13,when:t*.08}))}klingel(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime;for(const n of[0,.17])for(const[s,r]of[[1,.16],[2.4,.07],[3.9,.04]]){const a=e.createOscillator();a.frequency.value=2100*s;const o=e.createGain(),c=t+n;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(r,c+.004),o.gain.exponentialRampToValueAtTime(1e-4,c+.7),a.connect(o),o.connect(this.sfx),a.start(c),a.stop(c+.75)}}lap(){["G5","C6","E6"].forEach((e,t)=>this.tone(Ts(e),.4,{type:"square",vol:.05,when:t*.1}))}whoosh(e=1.8){if(!this.ok)return;const t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noise,s.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.Q.value=.9,r.frequency.setValueAtTime(200,n),r.frequency.exponentialRampToValueAtTime(2800,n+e*.7),r.frequency.exponentialRampToValueAtTime(700,n+e);const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.6,n+e*.6),a.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(r),r.connect(a),a.connect(this.sfx),s.start(n),s.stop(n+e+.1)}freewheel(e,t){if(!this.ok||t<=0){this.fwPhase=0;return}this.fwPhase+=t*e;let n=0;for(;this.fwPhase>=1&&n<6;)this.fwPhase-=1,this.noiseBurst(.006,{vol:.32,freq:4500,when:n*(1/Math.max(t,1))}),n++;this.fwPhase>1&&(this.fwPhase=0)}setWind(e){if(!this.ctx)return;const t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime(e*.3*Be.windLautstaerke,t,.15),this.windFilter.frequency.setTargetAtTime(250+e*1100,t,.2)}setMusicLevel(e){this.ctx&&this.musicBus.gain.setTargetAtTime(Be.music.volume*e,this.ctx.currentTime,.6)}startMusic(){!this.ok||this.musicStarted||(this.musicStarted=!0,this.step=0,this.nextTime=this.ctx.currentTime+.15,this.timer=setInterval(()=>this.schedule(),50))}schedule(){const e=this.ctx,t=30/Be.music.tempo,n=Be.music.chords;for(;this.nextTime<e.currentTime+.3;){const s=this.nextTime,r=Math.floor(this.step/8),a=this.step%8,o=n[r%n.length];if(a===0&&(this.pad(o,t*8.5,s),this.bass(Ts(o[0])/2,t*8,s),r%4===0&&this.bell(Ts(o[2])*4,s+t*4)),r>=2){const l=Ts(o[[0,1,2,1,0,2,1,2][a]])*2;this.pluck(l,s,a%2===0?.07:.045)}this.nextTime+=t,this.step++}}pad(e,t,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,n),r.frequency.linearRampToValueAtTime(1400,n+t*.5),r.frequency.linearRampToValueAtTime(600,n+t);const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.05,n+t*.35),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicIn);for(const o of e)for(const c of[-8,8]){const l=s.createOscillator();l.type="sawtooth",l.frequency.value=Ts(o),l.detune.value=c,l.connect(r),l.start(n),l.stop(n+t+.1)}}bass(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.16,n+.3),a.gain.linearRampToValueAtTime(1e-4,n+t),r.connect(a),a.connect(this.musicBus),r.start(n),r.stop(n+t+.1)}pluck(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=e;const a=s.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(n,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+.5),r.connect(a),a.connect(this.musicIn),r.start(t),r.stop(t+.6)}bell(e,t){const n=this.ctx;for(const[s,r]of[[1,.04],[2.76,.015]]){const a=n.createOscillator();a.frequency.value=e*s;const o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(r,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+2.5),a.connect(o),o.connect(this.musicIn),a.start(t),a.stop(t+2.6)}}}const j1={uniforms:{tDiffuse:{value:null},uBlur:{value:0},uLines:{value:0},uTime:{value:0},uVignette:{value:.45},uFade:{value:0},uAspect:{value:1}},vertexShader:`
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
  `},xa="grandtour.wuensche";function On(){try{return JSON.parse(localStorage.getItem(xa))||[]}catch{return[]}}function Sr(i){try{localStorage.setItem(xa,JSON.stringify(i))}catch{}}async function Cf(i,e){const t=Be.wunschzettel.briefkasten;{const n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({von:i||"Paul",text:e})});if(!n.ok)throw new Error("Senden fehlgeschlagen");return(await n.json().catch(()=>({}))).nummer??null}}const xh=["umgesetzt","uebersprungen"],Up=i=>i.sent&&i.nr!=null&&!xh.includes(i.status);async function Np(){const i=Be.wunschzettel.briefkasten,t=On().filter(Up).map(a=>a.nr);if(!t.length)return[];let n;try{n=await(await fetch(`${i}?nr=${t.join(",")}`,{cache:"no-store"})).json()}catch{return[]}if(!(n!=null&&n.ok))return[];const s=[],r=On();for(const a of r){const o=a.nr!=null&&n.status[a.nr];o&&(o.status!==a.status&&xh.includes(o.status)&&(s.push(a),a.seen=!1,a.fertigAm=Date.now()),a.status=o.status,a.info=o.info||"")}return Sr(r),s}function q1(){return On().filter(i=>xh.includes(i.status)&&i.seen===!1).length}function kl(){return On().some(Up)}function Y1(i){if(!i.sent)return'<div class="wish-item-meta">noch nicht verschickt – wird gleich nachgeholt</div>';if(i.nr==null)return'<div class="wish-item-meta">verschickt ✓</div>';const e=i.status||"angekommen",t={angekommen:1,in_arbeit:2,umgesetzt:3,uebersprungen:3}[e]||1,s=`<div class="wish-track s${t} ${e}">${["Angekommen","Claude arbeitet",e==="uebersprungen"?"Nicht umgesetzt":"Umgesetzt"].map((a,o)=>`<span class="${o<t?"on":""} ${o===t-1?"now":""}"><i></i>${a}</span>`).join("")}</div>`;let r="";if(e==="angekommen")r="📬 Dein Wunsch ist bei Claude angekommen und wartet auf die Bearbeitung.";else if(e==="in_arbeit")r='🛠️ Claude arbeitet gerade daran<span class="wish-dots"></span>';else if(e==="umgesetzt"){const a=i.fertigAm&&Date.now()-i.fertigAm<18e4;r=`✅ Umgesetzt! ${qe(i.info||"")}${a?" <b>In 1–2 Minuten im Spiel – dann die Seite neu laden.</b>":""}`}else r=`💬 ${qe(i.info||"Diesmal nicht umgesetzt.")}`;return`${s}<div class="wish-item-meta wish-now">${r}</div>`}const Z1=[{von:"Paul",text:"ich will einen goldenen helm :-)",am:"2026-11-06T21:05:00Z",status:"umgesetzt",info:"Neue Farbe „Gold“ für Helm, Trikot und Hose."},{von:"Papa (Test)",text:"Wenn man im Ziel ankommt, soll buntes Konfetti fliegen.",am:"2026-11-06T20:57:00Z",status:"umgesetzt",info:"Im Ziel fliegt buntes Konfetti."},{von:"Papa (Test)",text:"Eine Fahrradklingel auf der Taste K.",am:"2026-11-06T14:23:00Z",status:"umgesetzt",info:"Mit K klingelt es beim Fahren."}],Rf={angekommen:["📬","Angekommen"],in_arbeit:["🛠️","Claude arbeitet daran"],umgesetzt:["✅","Umgesetzt"],uebersprungen:["💬","Nicht umgesetzt"]};async function K1(){const i=Be.wunschzettel.briefkasten,t=await(await fetch(`${i}?liste=1`,{cache:"no-store"})).json();if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.fehler)||"Liste nicht da");return[...t.wuensche,...Z1]}const Pf=i=>new Date(i).toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});function J1(i,e){const t=In(`
    <div class="wish-overlay">
      <div class="wish-card">
        <button class="wish-close" title="Schließen">✕</button>
        <div class="wish-kicker">${qe(Be.gameName)}</div>
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
    </div>`),n=v=>t.querySelector(v),s=n(".wish-name"),r=n(".wish-text");try{s.value=localStorage.getItem(xa+".name")||""}catch{}function a(){const v=On();n(".wish-list").innerHTML=v.length?v.slice().reverse().map(p=>`<div class="wish-item ${p.sent?"":"pending"} st-${p.status||"neu"} ${p.seen===!1?"fresh":""}">
              <div class="wish-item-text">${qe(p.text)}</div>
              <div class="wish-item-time">${Pf(p.at)}</div>
              ${Y1(p)}
            </div>`).join(""):'<div class="wish-empty">Noch keine Wünsche – leg los!</div>'}let o=null;async function c(){clearTimeout(o);const v=n(".wish-all");if(!(v.hidden||!t.isConnected)){v.innerHTML||(v.innerHTML='<div class="wish-empty">Lade alle Wünsche …</div>');try{const p=await K1(),y=p.filter(_=>_.status==="umgesetzt").length;v.innerHTML=`<div class="wish-all-sum">${p.length} Wünsche · ${y} umgesetzt</div>`+p.map(_=>{const[x,E]=Rf[_.status]||Rf.angekommen,M=String(_.von||"Unbekannt").split(/\s+/)[0];return`<div class="wish-item st-${_.status}">
              <div class="wish-all-head"><b>${qe(M)}</b><span>${Pf(_.am)}</span></div>
              <div class="wish-item-text">${qe(_.text)}</div>
              <div class="wish-chip st-${_.status}">${x} ${E}</div>
              ${_.info?`<div class="wish-item-meta wish-now">${qe(_.info)}</div>`:""}
            </div>`}).join("")}catch{v.innerHTML='<div class="wish-empty">Die Liste lädt gerade nicht – kein Internet? Versuch es gleich nochmal.</div>'}o=setTimeout(c,15e3)}}t.querySelectorAll(".wish-tab").forEach(v=>v.addEventListener("click",()=>{t.querySelectorAll(".wish-tab").forEach(y=>y.classList.toggle("active",y===v));const p=v.dataset.tab==="alle";n(".wish-list").hidden=p,n(".wish-all").hidden=!p,i.audio.nav(),p&&c()}));async function l(){const v=On();let p=!1;for(const y of v)if(!y.sent)try{y.nr=await Cf(y.from,y.text),y.sent=!0,y.status=y.nr!=null?"angekommen":void 0,p=!0}catch{break}p&&(Sr(v),a())}async function h(){const v=r.value.trim(),p=s.value.trim()||"Paul";if(v.length<3){n(".wish-status").textContent="Schreib erst deinen Wunsch auf 🙂",i.audio.error(),r.focus();return}try{localStorage.setItem(xa+".name",p)}catch{}const y={text:v,from:p,at:Date.now(),sent:!1},_=On();_.push(y),Sr(_),n(".wish-send").disabled=!0,n(".wish-status").textContent="Wird verschickt …";try{const x=await Cf(p,v);y.sent=!0;const E=On(),M=E.find(T=>T.at===y.at);M&&(M.sent=!0,M.nr=x,x!=null&&(M.status="angekommen")),Sr(E),n(".wish-status").textContent=x!=null?"Danke! Dein Wunsch ist bei Claude angekommen. 🎉 Unten siehst du, wie weit er ist.":"Danke! Dein Wunsch ist angekommen. 🎉",f(),i.audio.success(),r.value=""}catch{n(".wish-status").textContent="Gerade kein Internet – der Wunsch ist gemerkt und wird später verschickt.",i.audio.error()}n(".wish-send").disabled=!1,u(),a()}function u(){n(".wish-count").textContent=`${r.value.length} / 400`}let d=null;async function f(){clearTimeout(d);const v=await Np();if(!t.isConnected)return;v.some(y=>y.status==="umgesetzt")&&i.audio.success(),a(),On().some(y=>y.seen===!1)&&setTimeout(()=>{const y=On();y.forEach(_=>_.seen===!1&&(_.seen=!0)),Sr(y)},4e3),kl()&&(d=setTimeout(f,8e3))}function m(){clearTimeout(d),clearTimeout(o),t.remove(),window.removeEventListener("keydown",g,!0),e==null||e()}function g(v){v.key==="Escape"&&(v.stopPropagation(),m())}return Dl(t),t.addEventListener("keydown",v=>v.stopPropagation()),n(".wish-close").addEventListener("click",m),n(".wish-send").addEventListener("click",h),r.addEventListener("input",u),r.addEventListener("keydown",v=>{v.key==="Enter"&&(v.metaKey||v.ctrlKey)&&h()}),window.addEventListener("keydown",g,!0),t.addEventListener("click",v=>{v.target===t&&m()}),document.body.append(t),a(),l().then(f),setTimeout(()=>r.focus(),50),{close:m}}function Q1(i){let e,t=0,n=!1,s=null;function r(){const h=e==null?void 0:e.querySelector(".wish-badge");if(!h)return;const u=q1();h.textContent=u?`✨ ${u===1?"Wunsch erledigt!":`${u} Wünsche erledigt!`}`:kl()?"🛠️ in Arbeit":"",h.classList.toggle("show",!!h.textContent),h.classList.toggle("done",u>0)}async function a(){clearTimeout(s),e&&(!n&&kl()&&(await Np()).length&&i.audio.success(),r(),s=setTimeout(a,2e4))}const o=new C,c=new C;function l(){n||(n=!0,i.audio.select(),J1(i,()=>{setTimeout(()=>n=!1,250),r()}))}return{enter(){t=0,e=In(`
        <div class="screen title-screen">
          <div class="letterbox top"></div><div class="letterbox bottom"></div>
          <div class="title-wrap">
            <div class="title-kicker">${qe(Be.subtitle)}</div>
            <h1 class="game-title" data-text="${qe(Be.gameName)}">${qe(Be.gameName)}</h1>
            <div class="ornament"><span></span><i></i><span></span></div>
            <div class="press-start">${qe(Be.startPrompt)}</div>
          </div>
          <div class="title-controls" role="group" aria-label="Womit spielst du?">
            <span class="title-controls-label">Ich spiele mit</span>
            ${Wi.map(m=>`<button class="title-control" data-c="${m.id}"><span>${m.icon}</span>${qe(m.name)}</button>`).join("")}
          </div>
          <button class="wish-button">${pt("Y")}<span>🎁 Wunschzettel</span><b class="wish-badge"></b></button>
          <div class="sparkles">${Array.from({length:24},(m,g)=>`<b style="--i:${g};--x:${g*37%100};--d:${3+g%5}s"></b>`).join("")}</div>
        </div>`),i.ui.append(e),i.titleRoot=e;const h=e.querySelector(".wish-button");Dl(h),h.addEventListener("click",()=>l());const u=e.querySelector(".title-controls");Dl(u);const d=()=>{u.querySelectorAll(".title-control").forEach(m=>m.classList.toggle("active",m.dataset.c===i.controlChosen)),e.querySelector(".press-start").textContent=i.control==="touch"?"Zum Starten antippen":Be.startPrompt};u.querySelectorAll(".title-control").forEach(m=>m.addEventListener("click",()=>{_h(i,m.dataset.c),i.controlChosen=m.dataset.c,i.audio.unlock(),i.audio.select(),d()})),d(),a(),i.fx.uFade.value=1,i.fx.uBlur.value=0,i.fx.uLines.value=0,i.npc.s=i.world.length-150,i.npc.speed=6,i.npc.lateral=i.world.cx?.5:1.5,i.npc.pedal=!0;const f=Be.titleRider;i.bike.setPlate(f.number,f.name),i.bike.applyLook(Be.titleRider),i.bike.setTires(i.mode),i.audio.setWind(0),i.audio.setMusicLevel(1),i.audio.startMusic()},update(h){t+=h,i.fx.uFade.value=Math.max(0,1-t/2.5);const u=Mi(i,h),d=.55+t*.03+Math.sin(t*.05)*.2,f=5-Math.sin(t*.07)*1,m=u.tz,g=-u.tx,v=Math.cos(d)*f,p=Math.sin(d)*f;if(o.set(u.x+u.tx*v+m*p,0,u.z+u.tz*v+g*p),o.y=Math.max(u.h+.9+Math.sin(t*.11)*.35,i.world.terrainHeight(o.x,o.z)+.6),o.x+=Math.sin(t*.7)*.05,o.y+=Math.sin(t*.9+1)*.03,i.camera.position.copy(o),c.set(u.x,u.h+.95,u.z),i.camera.lookAt(c),i.camera.fov=42,i.camera.updateProjectionMatrix(),!n){if(t>.5&&i.input.pressed("y")){l();return}t>.5&&i.input.pressed("any")&&(i.audio.unlock(),i.audio.startMusic(),i.go("transition"))}},exit(){clearTimeout(s);const h=e;setTimeout(()=>h.remove(),700)}}}const _c=2;function eM(){let n="";for(let a=0;a<42;a++){const o=a/42*Math.PI*2,c=(a+.3)/42*Math.PI*2,l=(a+.55)/42*Math.PI*2,h=(a+.85)/42*Math.PI*2,u=(d,f)=>`${(Math.cos(f)*d).toFixed(2)} ${(Math.sin(f)*d).toFixed(2)}`;n+=`${a===0?"M":"L"}${u(92,o)} L${u(100,c)} L${u(100,l)} L${u(92,h)} `}n+="Z";let s="";for(let a=0;a<5;a++){const o=a/5*360;s+=`<path d="M-9 -18 L-6 -76 Q0 -80 6 -76 L9 -18 Z" transform="rotate(${o})"/>`}let r="";for(let a=0;a<5;a++){const o=a/5*Math.PI*2+Math.PI/5;r+=`<circle cx="${(Math.cos(o)*64).toFixed(1)}" cy="${(Math.sin(o)*64).toFixed(1)}" r="4"/>`}return`
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
  </svg>`}const Ii=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function tM(i){let e=0,t,n,s,r=6;return{enter(){var a;e=0,r=i.npc.speed,t=In(`<div class="screen transition-screen"><div class="veil"></div><div class="ring-wrap">${eM()}</div></div>`),i.ui.append(t),n=t.querySelector(".ring-wrap"),s=t.querySelector(".veil"),(a=i.titleRoot)==null||a.classList.add("leaving"),i.audio.whoosh(_c),i.audio.select(),i.input.rumble(.5,250)},update(a){e+=a;const o=e/_c;i.npc.speed=r+Ii(o*1.2)*22,i.npc.pedal=e>.45,Mi(i,a),T1(i,a,{dist:3.6+o*1.5,height:1.15,lag:3+o*4,fovBase:50,speed:i.npc.speed*1.4,snap:e<=a}),e<.45&&i.audio.freewheel(a,20+e*80),i.audio.setWind(Ii(o*1.4)),i.fx.uBlur.value=Ii(o*1.25),i.fx.uLines.value=Ii((o-.1)*1.6);const c=Ii((e-.85)/.5),l=Ii((e-1.45)/.5),h=e*900+e*e*400;n.style.opacity=String(c*(1-l)),n.style.transform=`translate(-50%, -50%) scale(${.35+c*.65+l*2.4}) rotate(${h}deg)`,s.style.opacity=String(Ii((e-1.25)/.6)),e>=_c&&i.go(Ir()?"mode":"control",{fromTransition:!0})},exit(){var o;(o=i.titleRoot)==null||o.remove(),i.titleRoot=null,t.classList.add("fade-out");const a=t;setTimeout(()=>a.remove(),500),i.audio.setWind(0),i.npc.speed=4,i.npc.pedal=!0}}}const Fp="pedal-legends.characters.v1";function Zi(){try{const i=JSON.parse(localStorage.getItem(Fp)||"[]");return Array.isArray(i)?i:[]}catch{return[]}}function yh(i){try{localStorage.setItem(Fp,JSON.stringify(i))}catch{}}function nM(i="road"){return{id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()),name:"",number:1,jersey:Be.colors.jersey,frame:Be.colors.bikeFrame,helmet:mn.helmet,shorts:mn.shorts,brand:mn.brand,paint:mn.paint,kit:mn.kit,bar:"#f6f6f6",mode:i,bestLap:null,createdAt:Date.now(),version:1}}function iM(i){const e=Zi();e.push(i),yh(e)}function Op(i){yh(Zi().map(e=>e.id===i.id?i:e))}function Lf(i){yh(Zi().filter(e=>e.id!==i))}function sM(i){let e,t,n=[],s=0,r=null,a=!0,o=null;function c(){n=Zi().filter(y=>(y.mode||"road")===i.mode),s=Math.min(s,n.length);const p=n.map((y,_)=>`
        <div class="card" data-i="${_}">
          <div class="mini-plate"><span>${y.number}</span></div>
          <div class="card-info">
            <div class="card-name">${qe(y.name)}</div>
            <div class="card-sub">Nr. ${y.number} · ${qe(Ap(y.brand).name)}${y.bestLap?` · Bestzeit ${Nn(y.bestLap)}`:""}</div>
          </div>
          <div class="card-go">›</div>
        </div>`).join("");t.innerHTML=`${p}
      <div class="card card-new" data-i="${n.length}">
        <div class="card-info"><div class="card-name">Neuer Charakter</div>
        <div class="card-sub">${n.length?"Lege einen weiteren Fahrer an":"Lege deinen ersten Fahrer an"}</div></div>
        <div class="plus">+</div>
      </div>`,t.querySelectorAll(".card").forEach(y=>y.addEventListener("click",()=>{const _=Number(y.dataset.i);if(o!==null){if(_===s)return;m()}s=_,l(),d()})),l(!0)}function l(p=!1){t.querySelectorAll(".card").forEach((E,M)=>{E.classList.toggle("selected",M===s),E.classList.toggle("confirm-delete",M===s&&r===s)});const y=t.querySelector(".card.selected");y==null||y.scrollIntoView({block:"nearest",behavior:p?"auto":"smooth"});const _=n[s];_?(i.bike.setPlate(_.number,_.name),i.bike.applyLook(_)):(i.bike.setPlate("?","NEU"),i.bike.applyLook({}));const x=e.querySelector(".hint-delete");x&&(x.style.visibility=_?"visible":"hidden"),p||(i.audio.nav(),i.input.rumble(.15,30))}const h=["Rennen fahren","Online gegen Freund","Fahrer bearbeiten","Löschen"];let u=!1;function d(){i.audio.select(),i.input.rumble(.35,80),s<n.length?f():i.go("creator")}function f(){o=0,u=!1;const p=t.querySelector(".card.selected");p.insertAdjacentHTML("beforeend",`<div class="card-actions">${h.map((y,_)=>`<div class="card-action" data-a="${_}">${y}</div>`).join("")}</div>`),p.querySelectorAll(".card-action").forEach(y=>y.addEventListener("click",_=>{_.stopPropagation(),o=Number(y.dataset.a),v()})),g()}function m(){var p;o=null,(p=t.querySelector(".card-actions"))==null||p.remove()}function g(){t.querySelectorAll(".card-action").forEach((p,y)=>p.classList.toggle("selected",y===o))}function v(){const p=n[s];if(i.audio.select(),o===0)i.go("ride",{character:p});else if(o===1)i.go("lobby",{character:p});else if(o===2)i.go("creator",{edit:p});else if(u)Lf(p.id),i.audio.back(),i.input.rumble(.6,150),o=null,c();else{u=!0;const y=t.querySelectorAll(".card-action")[3];y&&(y.textContent="Wirklich löschen? Nochmal!",y.classList.add("danger")),i.audio.back()}}return{enter(p={}){if(e=In(`
        <div class="screen menu-screen ${p.fromTransition?"intro":""}">
          <div class="menu-panel">
            <div class="menu-brand">${qe(Be.gameName)}</div>
            <div class="menu-heading">Wähle deinen Fahrer · ${_a(i.mode)}</div>
            <div class="menu-list"></div>
          </div>
          ${Yi([["A","Auswählen"],["B","Zurück"]])}
        </div>`),e.querySelector(".hints").insertAdjacentHTML("beforeend",`<span class="hint hint-delete" data-act="x">${pt("X")}Löschen</span>`),i.ui.append(e),t=e.querySelector(".menu-list"),p.selectId){const y=Zi().filter(_=>(_.mode||"road")===i.mode).findIndex(_=>_.id===p.selectId);y>=0&&(s=y)}r=null,o=null,c(),a=!0,i.npc.speed=4,i.npc.pedal=!0,i.audio.setMusicLevel(1),i.audio.setWind(.05)},update(p){const y=Mi(i,p);tr(i,p,y,a),a=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,p),i.fx.uLines.value=We(i.fx.uLines.value,0,6,p),i.fx.uFade.value=We(i.fx.uFade.value,0,5,p);const _=i.input,x=n.length+1;if(o!==null){if(_.pressed("left")||_.pressed("right")||_.pressed("up")||_.pressed("down")){const E=_.pressed("left")||_.pressed("up")?-1:1;o=(o+E+h.length)%h.length,g(),i.audio.nav()}else _.pressed("confirm")?v():_.pressed("back")&&(m(),i.audio.back());return}_.pressed("up")&&s>0?(s--,r=null,l()):_.pressed("down")&&s<x-1?(s++,r=null,l()):_.pressed("confirm")?d():_.pressed("back")?r!==null?(r=null,l(!0),i.audio.back()):(i.audio.back(),i.go("mode")):_.pressed("x")&&s<n.length&&(r===s?(Lf(n[s].id),r=null,i.audio.back(),i.input.rumble(.6,150),c()):(r=s,i.audio.error(),l(!0)))},exit(){e.remove()}}}const zp="grandtour.minispiel.rekord",zo=3,If=3;function rM(){try{return Number(localStorage.getItem(zp))||0}catch{return 0}}function oM(i){try{localStorage.setItem(zp,String(i))}catch{}}function aM(i){let e,t,n,s=0,r=0,a=1,o,c,l,h,u,d,f,m,g,v,p,y,_,x=!0;const E=()=>Math.min(s*.86,460),M=()=>(s-E())/2,T=()=>E()/zo,R=F=>M()+T()*(F+.5),S=()=>r*.8,b=()=>r*Math.min(1.35,.5+f*.014);function P(){c=1,l=R(1),h=[],u=0,d=If,f=0,m=0,g=r*.25,v=0,_=0,y=!1}function N(){a=Math.min(2,window.devicePixelRatio||1),s=innerWidth,r=innerHeight,t.width=s*a,t.height=r*a,n.setTransform(a,0,0,a,0,0),c!==void 0&&(l=R(c))}function B(){const F=Math.floor(Math.random()*zo),re=Math.random()<.35+Math.min(.4,f*.01)?2:1,ee=[0,1,2].filter(oe=>oe!==F).sort(()=>Math.random()-.5);for(let oe=0;oe<re;oe++){const z=Math.random();h.push({lane:ee[oe],y:-60,typ:z<.45?"huetchen":z<.8?"loch":"schaf",wobble:Math.random()*6})}Math.random()<.75&&h.push({lane:F,y:-60,typ:Math.random()<.1?"gold":"flasche",wobble:0})}function U(F){const re=Math.max(0,Math.min(zo-1,c+F));re!==c&&(c=re,i.audio.nav())}function V(){P(),o="play",i.audio.select(),O()}function D(){o="over",i.audio.error(),i.input.rumble(.6,300),u>p&&(p=u,y=!0,oM(p),setTimeout(()=>i.audio.success(),350)),O()}function O(){const F=e.querySelector(".mg-hud");F.innerHTML=`
      <div class="mg-score">🍶 ${u}</div>
      <div class="mg-lives">${"❤️".repeat(Math.max(0,d))}${"🤍".repeat(If-Math.max(0,d))}</div>
      <div class="mg-best">Rekord ${p}</div>`;const re=e.querySelector(".mg-msg");o==="ready"?re.innerHTML=`<div class="mg-title">Flaschenjagd</div>
        <div class="mg-text">Sammle Trinkflaschen 🍶 (goldene zählen 5).<br>Weiche Hütchen, Schlaglöchern und Schafen aus!<br>
        ${i.control==="touch"?"Links oder rechts antippen = Spur wechseln.":"← → = Spur wechseln."}</div>
        <div class="mg-go">${i.control==="touch"?"Antippen zum Starten":"A drücken zum Starten"}</div>`:o==="over"?re.innerHTML=`<div class="mg-title">${y?"Neuer Rekord!":"Sturz!"}</div>
        <div class="mg-text">Du hast <b>${u}</b> ${u===1?"Flasche":"Flaschen"} gesammelt.</div>
        <div class="mg-go">${i.control==="touch"?"Antippen für noch einmal":"A = noch einmal"}</div>`:re.innerHTML="",re.classList.toggle("show",o!=="play")}function k(F){if(!(F.target!==t&&!F.target.closest(".mg-msg"))){if(o!=="play"){V();return}U(F.clientX<s/2?-1:1)}}function J(){const F=M(),re=E();n.clearRect(0,0,s,r),n.fillStyle="rgba(46, 92, 40, 0.88)",n.fillRect(F-46,0,46,r),n.fillRect(F+re,0,46,r),n.fillStyle="#4b4b52",n.fillRect(F,0,re,r),n.fillStyle="#f2f2f2",n.fillRect(F+4,0,5,r),n.fillRect(F+re-9,0,5,r);const ee=46,oe=m%(ee*2);for(let z=1;z<zo;z++){const q=F+T()*z-2;for(let ae=-ee*2+oe;ae<r;ae+=ee*2)n.fillRect(q,ae,4,ee)}n.fillStyle="rgba(120, 170, 70, 0.9)";for(let z=-40+m*1%80;z<r;z+=80)n.fillRect(F-30,z,8,14),n.fillRect(F+re+20,z+40,8,14)}function ce(F){const re=R(F.lane),ee=T()*.36;if(n.save(),n.translate(re,F.y),F.typ==="flasche"||F.typ==="gold")n.rotate(Math.sin(f*4+F.lane)*.25),n.fillStyle=F.typ==="gold"?"#f5c76b":"#3d8fe0",n.beginPath(),n.roundRect(-ee*.32,-ee*.55,ee*.64,ee*1.15,ee*.18),n.fill(),n.fillStyle="#fff",n.fillRect(-ee*.32,-ee*.12,ee*.64,ee*.18),n.fillStyle="#222",n.fillRect(-ee*.13,-ee*.75,ee*.26,ee*.22),F.typ==="gold"&&(n.strokeStyle="rgba(255, 240, 180, 0.9)",n.lineWidth=3,n.beginPath(),n.arc(0,0,ee*.95+Math.sin(f*8)*3,0,Math.PI*2),n.stroke());else if(F.typ==="huetchen")n.fillStyle="#ff7a1a",n.beginPath(),n.moveTo(0,-ee*.8),n.lineTo(ee*.6,ee*.6),n.lineTo(-ee*.6,ee*.6),n.closePath(),n.fill(),n.fillStyle="#fff",n.fillRect(-ee*.36,-ee*.05,ee*.72,ee*.2),n.fillStyle="#ff7a1a",n.fillRect(-ee*.75,ee*.55,ee*1.5,ee*.18);else if(F.typ==="loch")n.fillStyle="#26262b",n.beginPath(),n.ellipse(0,0,ee*.85,ee*.5,.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a3a40",n.beginPath(),n.ellipse(-ee*.15,-ee*.08,ee*.45,ee*.24,.2,0,Math.PI*2),n.fill();else if(F.typ==="schaf"){n.translate(Math.sin(f*2+F.wobble)*ee*.25,0),n.fillStyle="#f4f1ea";for(const[oe,z]of[[-.35,-.2],[.35,-.2],[-.35,.3],[.35,.3],[0,.05],[0,-.4],[0,.5]])n.beginPath(),n.arc(oe*ee,z*ee,ee*.38,0,Math.PI*2),n.fill();n.fillStyle="#2b2b2b",n.beginPath(),n.ellipse(0,-ee*.85,ee*.24,ee*.3,0,0,Math.PI*2),n.fill()}n.restore()}function le(){var oe;if(v>0&&Math.floor(v*12)%2===0)return;const F=T()*.42,re=(R(c)-l)/T(),ee=((oe=i.bike.kitCol)==null?void 0:oe.jersey)||"#d23c3c";n.save(),n.translate(l+Math.sin(_*30)*_*20,S()),n.rotate(-re*.35),n.fillStyle="#111",n.beginPath(),n.roundRect(-F*.09,-F*1.15,F*.18,F*.75,F*.08),n.roundRect(-F*.09,F*.35,F*.18,F*.75,F*.08),n.fill(),n.fillStyle="#ccc",n.fillRect(-F*.5,-F*.72,F,F*.08),n.fillStyle=typeof ee=="string"?ee:"#d23c3c",n.beginPath(),n.ellipse(0,-F*.05,F*.38,F*.55,0,0,Math.PI*2),n.fill(),n.strokeStyle="#e8b896",n.lineWidth=F*.12,n.lineCap="round",n.beginPath(),n.moveTo(-F*.3,-F*.3),n.lineTo(-F*.42,-F*.7),n.moveTo(F*.3,-F*.3),n.lineTo(F*.42,-F*.7),n.stroke(),n.fillStyle="#f5c76b",n.beginPath(),n.ellipse(0,-F*.5,F*.22,F*.27,0,0,Math.PI*2),n.fill(),n.restore()}function Se(){J();for(const F of h)ce(F);le()}function He(F){f+=F;const re=b();m+=re*F,v=Math.max(0,v-F),_=Math.max(0,_-F*2),l=We(l,R(c),14,F),g-=re*F,g<=0&&(B(),g=r*Math.max(.24,.42-f*.003)*(.85+Math.random()*.3));const ee=S(),oe=T()*.4;let z=!1;for(const q of h)if(q.y+=re*F,!(q.done||Math.abs(q.y-ee)>oe||Math.abs(R(q.lane)-l)>T()*.45)){if(q.typ==="flasche"||q.typ==="gold")q.done=!0,u+=q.typ==="gold"?5:1,i.audio.key(),z=!0;else if(v<=0){if(q.done=!0,d--,v=1.2,_=.5,i.input.rumble(.5,150),z=!0,d<=0){D();return}i.audio.error()}}h=h.filter(q=>!q.done&&q.y<r+80),z&&O()}return{enter(){p=rM(),e=In(`
        <div class="screen minigame-screen">
          <canvas class="mg-canvas"></canvas>
          <div class="mg-hud"></div>
          <div class="mg-msg"></div>
          ${Yi([["A","Start"],["B","Zurück"]])}
        </div>`),i.ui.append(e),t=e.querySelector("canvas"),n=t.getContext("2d"),N(),addEventListener("resize",N),e.addEventListener("pointerdown",k),P(),o="ready",O(),x=!0,i.npc.speed=6,i.npc.pedal=!0,i.audio.setMusicLevel(1)},update(F){const re=Mi(i,F);tr(i,F,re,x),x=!1,i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,F),i.fx.uFade.value=We(i.fx.uFade.value,0,5,F),i.fx.uLines.value=We(i.fx.uLines.value,0,6,F);const ee=i.input;if(ee.pressed("back")){i.audio.back(),i.go("mode",{minigame:!0});return}o==="play"?(ee.pressed("left")?U(-1):ee.pressed("right")&&U(1),He(Math.min(F,.05))):ee.pressed("confirm")&&V(),Se()},exit(){removeEventListener("resize",N),e.remove(),e=null}}}const Bp=[{name:"Mia",number:7,jersey:"#1fa88f",frame:"#f1f1ec",helmet:"#1fa88f",kit:"stripes",brand:"canyon",power:515,lane:-1.6},{name:"Leo",number:21,jersey:"#f4a12a",frame:"#f6f6f6",paint:"team",bar:"#16161b",helmet:"#16161b",brand:"colnago",power:495,lane:.3},{name:"Emma",number:33,jersey:"#8a3ffc",frame:"#d8d8de",helmet:"#8a3ffc",kit:"stripes",brand:"rose",power:470,lane:-.6},{name:"Ben",number:52,jersey:"#2f7cf6",frame:"#b8222c",helmet:"#f6f6f6",brand:"cervelo",power:445,lane:1.4}],xc=78,Df=9.81,ks=8;let Di=null;function Hp(){if(Di)return Di;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");return e.strokeStyle="#ffffff",e.lineWidth=14,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(18,40),e.lineTo(64,88),e.lineTo(110,40),e.stroke(),Di=new xn(i),Di.wrapS=Di.wrapT=Cn,Di.repeat.set(1,5),Di}function cM(){const i=new an(1.3,ks-.8,1,8),e=i.attributes.position,t=[];for(let r=0;r<e.count;r++){const o=1-(e.getY(r)+(ks-.8)/2)/(ks-.8);t.push(.45*o,.9*o,1*o)}i.setAttribute("color",new $e(t,3)),i.rotateX(-Math.PI/2);const n=new Ma({map:Hp(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Fr}),s=new pe(i,n);return s.position.set(0,.07,-.8-(ks-.8)/2),s.renderOrder=2,s.visible=!1,s}const lM=[0,5,5,10],Kt={};class Ul{constructor(e,t=Bp){this.app=e,this.list=t.map((n,s)=>{var o;const r=new Pp;if(r.setPlate(n.number,n.name),r.applyLook(n),r.root.visible=!1,e.world.scene.add(r.root),n.remote){const c=(o=e.cloneRider)==null?void 0:o.call(e);c&&r.useModel(c),r.setTires(e.mode)}const a=cM();return r.root.add(a),{...n,bike:r,draftZone:a,grid:lM[s],d:0,v:0,lat:n.lane,heading:0,lean:0,finished:null}})}reset(e){this.startS=e;for(const t of this.list)t.d=-t.grid,t.v=0,t.lat=t.lane,t.lean=0,t.finished=null,t.net=null,t.wobble=Math.random()*10,t.bike.root.visible=!0,this.place(t,0,0),t.heading=Kt.heading}draftFor(e,t){let n=0,s=null;for(const r of this.list){if(!r.bike.root.visible||r.v<3)continue;const a=Math.sin(r.heading),o=Math.cos(r.heading),c=e-r.x,l=t-r.z,h=-(c*a+l*o),u=Math.abs(c*o-l*a);if(h<.8||h>ks)continue;const d=.7+h*.05;if(u>d)continue;const f=(1-(h-.8)/(ks-.8))*(1-u/d*.5);f>n&&(n=f,s=r)}return{strength:n,rival:s}}showDraft(e,t,n){Hp().offset.y+=n*2.2;for(const s of this.list){const r=s.draftZone.material,a=s===e?.35+.55*t:0;r.opacity=We(r.opacity,a,8,n),s.draftZone.visible=r.opacity>.01}}updateRemote(e,t){const n=e.net;if(!n)return;const s=1-Math.exp(-12*t),r=Math.min(.25,(performance.now()-n.at)/1e3),a=n.x+Math.sin(n.heading)*n.speed*r,o=n.z+Math.cos(n.heading)*n.speed*r;(e.x==null||Math.hypot(a-e.x,o-e.z)>15)&&(e.x=a,e.z=o,e.h=n.h),e.x+=(a-e.x)*s,e.z+=(o-e.z)*s,e.h+=(n.h-e.h)*s,e.heading+=Math.atan2(Math.sin(n.heading-e.heading),Math.cos(n.heading-e.heading))*s,e.lean+=(n.lean-e.lean)*s,e.pitch=n.pitch,e.v=n.speed,e.finished=n.f;const c=e.bike.root;c.position.set(e.x,e.h,e.z),c.rotation.set(-e.pitch,e.heading,e.lean),e.bike.update(t,e.v,n.crank,n.steer)}dispose(){for(const e of this.list)e.bike.root.removeFromParent();this.list=[]}hide(){for(const e of this.list)e.bike.root.visible=!1,e.draftZone.material.opacity=0,e.draftZone.visible=!1}progress(e){return e.remote?e.net?e.net.p:-20:e.d-(this.app.world.length-this.startS)}place(e,t,n){if(this.app.world.poseAt(this.startS+e.d,e.lat,Kt),t>0){const a=Math.atan2(Math.sin(Kt.heading-e.heading),Math.cos(Kt.heading-e.heading))/t;e.lean=We(e.lean,dt(-Math.atan(e.v*a/9.81),-.5,.5),6,t)}e.heading=Kt.heading;const r=e.bike.root;r.position.set(Kt.x,Kt.h,Kt.z),r.rotation.set(-Kt.pitch,Kt.heading,e.lean),e.bike.update(t,e.v,n,0),e.x=Kt.x,e.z=Kt.z,e.pitch=Kt.pitch,e.h=Kt.h}update(e,t,n,s,r){for(const a of this.list){if(a.remote){this.updateRemote(a,e);continue}let o=0;if(t){o=a.power,o*=1+Math.sin(r*.23+a.wobble)*.05;const v=n.progress-this.progress(a);o*=1+dt(v/300,-.15,.12),a.finished!=null&&(o=120)}const c=a.v,l=Math.min(o/Math.max(c,2.5),340),h=.5*1.2*.36*c*c,u=(l-h-.005*xc*Df-xc*Df*Math.sin(a.pitch||0))/xc;a.v=Math.max(0,c+u*e),t||(a.v=0),a.d+=a.v*e;const d=this.progress(a);let f=a.lane;const m=n.progress-d;m>-2&&m<5&&Math.abs(n.lateral-a.lane)<1.1&&(f=a.lane+(a.lane>n.lateral?1.3:-1.3)),a.lat=We(a.lat,dt(f,-3,3),2,e),t&&a.finished==null&&d>=s&&(a.finished=r);const g=a.v>.5?a.v/jt/3.6:0;this.place(a,e,g)}}}const hM=new C(0,1,0),Bo=new C,yc=new C,bc=new C,Nl=new xt,Fl=new C,uM=new Ie,kf=new Ie,Uf=new Ht,fM=new C;function As(i,e,t,n=t,s=new Ie){bc.subVectors(e,i);const r=bc.length()||.001;return Nl.setFromUnitVectors(hM,bc.multiplyScalar(1/r)),Fl.set(t,r,n),s.compose(i,Nl,Fl)}function Vp(i=7){return new rt(1,1,1,i).translate(0,.5,0)}const St=(i,e,t)=>new C(i,e,t),Dr=St(0,.3,0),kr=St(0,.34,-.41),ia=St(0,.34,.58),Ho=St(0,.84,-.16),Mc=St(0,.8,.47),Sc=St(0,.64,.52),Nf=.17,ws=.46,Tc=.46;function dM(){const i=[],e=(t,n,s)=>i.push(Vp(6).applyMatrix4(As(t,n,s)));return e(Dr,Ho,.022),e(Ho,Mc,.02),e(Dr,Sc,.026),e(Sc,Mc,.026),e(Sc,ia,.016),e(Dr,kr,.014),e(Ho,kr,.012),e(Ho,St(0,.95,-.2),.014),e(Mc,St(0,.92,.56),.016),e(St(-.21,.92,.56),St(.21,.92,.56),.014),e(St(-.2,.92,.56),St(-.2,.8,.62),.014),e(St(.2,.92,.56),St(.2,.8,.62),.014),i.push(new nt(.12,.04,.26).translate(0,.97,-.2)),Ys(i.map(t=>t.toNonIndexed()))}class pM{constructor(e,t){this.count=t,this.group=new ot,e.add(this.group);const n=(a,o,c,l=!1)=>{const h=new aa(a,o,c);return h.castShadow=!0,h.frustumCulled=!1,l&&(h.instanceColor=new xl(new Float32Array(c*3).fill(1),3)),this.group.add(h),h},s=(a,o=.6)=>new De({color:a,roughness:o}),r=Vp(7);this.frame=n(dM(),s("#ffffff",.4),t,!0),this.wheels=n(new ii(.33,.022,6,22).rotateY(Math.PI/2),s("#141416",.8),t*2),this.torso=n(r,s("#ffffff"),t,!0),this.head=n(new Jt(1,10,8),s("#ffffff",.35),t,!0),this.arms=n(r,s("#ffffff"),t*2,!0),this.thighs=n(r,s("#17171c",.7),t*2),this.shins=n(r,s("#e2b48f",.7),t*2),this.crank=new Float32Array(t).map(()=>Math.random()*Math.PI*2),this.torsoL=As(St(0,.98,-.2),St(0,1.27,.22),.15,.11),this.headL=new Ie().compose(St(0,1.38,.36),new xt,St(.115,.115,.13)),this.armL=[As(St(.17,1.25,.2),St(.2,.93,.56),.042),As(St(-.17,1.25,.2),St(-.2,.93,.56),.042)],this.rearL=new Ie().makeTranslation(kr.x,kr.y,kr.z),this.frontL=new Ie().makeTranslation(ia.x,ia.y,ia.z)}setColors(e,{frame:t,jersey:n,helmet:s}){const r=new ve;this.frame.setColorAt(e,r.set(t)),this.torso.setColorAt(e,r.set(n)),this.arms.setColorAt(e*2,r),this.arms.setColorAt(e*2+1,r),this.head.setColorAt(e,r.set(s));for(const a of[this.frame,this.torso,this.arms,this.head])a.instanceColor.needsUpdate=!0}set(e,t,n,s,r,a,o,c,l,h=!0){h&&c>.3&&(this.crank[e]+=c/.34/3.6*l),Uf.set(-a,r,o),kf.compose(fM.set(t,n,s),Nl.setFromEuler(Uf),Fl.set(1,1,1));const u=(d,f,m)=>d.setMatrixAt(f,uM.multiplyMatrices(kf,m));u(this.frame,e,mM),u(this.wheels,e*2,this.rearL),u(this.wheels,e*2+1,this.frontL),u(this.torso,e,this.torsoL),u(this.head,e,this.headL),u(this.arms,e*2,this.armL[0]),u(this.arms,e*2+1,this.armL[1]);for(let d=0;d<2;d++){const f=this.crank[e]+d*Math.PI,m=d?-.09:.09,g=.98,v=-.21,p=Dr.y+Math.cos(f)*Nf,y=Dr.z+Math.sin(f)*Nf;let _=p-g,x=y-v,E=Math.hypot(_,x);const M=ws+Tc-.01;E>M&&(_*=M/E,x*=M/E,E=M);const T=_/E,R=x/E,S=gM((ws*ws+E*E-Tc*Tc)/(2*ws*E)),b=Math.sqrt(1-S*S);let P=-R,N=T;N<0&&(P=-P,N=-N);const B=g+ws*(S*T+b*P),U=v+ws*(S*R+b*N);Bo.set(m,g,v),yc.set(m,B,U),u(this.thighs,e*2+d,As(Bo,yc,.055,.055,Ff)),Bo.set(m,p,y),u(this.shins,e*2+d,As(yc,Bo,.04,.04,Ff))}}commit(){for(const e of this.group.children)e.instanceMatrix.needsUpdate=!0}set visible(e){this.group.visible=e}}const Ff=new Ie,mM=new Ie;function gM(i){return Math.max(-1,Math.min(1,i))}const Es="Team Blitz",vM=[{name:"Jonas",number:11,jersey:"#8e2b36",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#8e2b36"},{name:"Felix",number:12,jersey:"#8e2b36",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#8e2b36"},{name:"Noah",number:13,jersey:"#8e2b36",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#8e2b36"},{name:"Elias",number:14,jersey:"#8e2b36",frame:"#16161b",helmet:"#16161b",kit:"stripes",brand:"cervelo",bar:"#8e2b36"}],Of=[["#2f7cf6","#f6f6f6","#2f7cf6"],["#1fa88f","#f1f1ec","#f1f1ec"],["#d23c3c","#16161b","#d23c3c"],["#f4d21c","#16161b","#16161b"],["#8a3ffc","#d8d8de","#8a3ffc"],["#f6f6f6","#2f7cf6","#f6f6f6"],["#16161b","#d23c3c","#d23c3c"],["#3bceac","#16161b","#3bceac"]],_r=46,wc=2e3,_M=600,xM=320,Ec=11.5,yM=10.8,zf=13.2,bM=17.4,MM=.5,Bf=3.6,Ac=-1.5,Cc=[{name:"Hinten",dist:5.2,height:2.7},{name:"Weit",dist:9,height:3.6},{name:"Von oben",dist:6,height:11}];function SM(i){let e,t,n=null,s=null,r=null,a=null;const o={},c={},l=[];let h=0,u=0,d=0;const f=z=>e.querySelector(z);function m(z,q=""){const ae=f(".banner");ae.innerHTML=`<div>${z}</div>${q?`<small>${q}</small>`:""}`,ae.classList.remove("show"),ae.offsetWidth,ae.classList.add("show")}function g(z){const q=f(".story-tipp");q.dataset.text!==z&&(q.dataset.text=z,q.innerHTML=z,q.classList.toggle("show",!!z))}const v=()=>i.control==="touch"?"nach oben wischen":i.control==="keys"?"<b>W</b> halten":`${pt("A")} halten`,p=()=>i.control==="touch"?"nochmal nach oben wischen":i.control==="keys"?"<b>Leertaste</b>":pt("X"),y=()=>i.control==="touch"?"links/rechts halten":i.control==="keys"?"<b>A</b> <b>D</b>":pt("LT")+pt("RT");function _(z,q,ae){const ne=document.createElement("canvas");ne.width=z,ne.height=q,ae(ne.getContext("2d"),z,q);const G=new xn(ne);return G.colorSpace=_t,G.anisotropy=4,G}function x(z,q,ae,ne,G){i.world.poseAt(z,0,c);const I=_(1024,192,(L,w,X)=>{L.fillStyle=ae,L.fillRect(0,0,w,X),L.fillStyle=ne,L.font='900 120px "Barlow Condensed", Arial, sans-serif',L.textAlign="center",L.textBaseline="middle",L.fillText(G,w/2,X/2+6)}),ue=q*2+1.6,te=new De({color:ae}),me=new De({map:I}),ge=new pe(new nt(ue,1.2,.3),[te,te,te,te,me,me]),Ue=new ot;Ue.position.set(c.x,c.h,c.z),Ue.rotation.y=c.heading,ge.position.y=4.6,ge.castShadow=!0,Ue.add(ge);const _e=new De({color:"#e9e9e4",roughness:.5});for(const L of[-1,1]){const w=new pe(new rt(.22,.26,5.2,10),_e);w.position.set(L*(ue/2-.2),2.6,0),w.castShadow=!0,Ue.add(w)}return Ue}function E(z){const q=new ot,ae=i.world;ae.poseAt(z,0,c);const ne=ae.nearest(c.x,c.z),G=ne.found?ae.rhArr[ne.i]:ae.RH,ie=new pe(new an(G*2,.45),new De({color:"#f2f2ee",roughness:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));ie.rotation.x=-Math.PI/2,ie.receiveShadow=!0;const I=new ot;I.position.set(c.x,c.h+.03,c.z),I.rotation.y=c.heading,I.add(ie),q.add(I),q.add(x(z,G,"#2fa37a","#ffffff","START · GRAND TOUR"));const ue=z+Math.min(wc,i.world.length-400)-1e3;ae.poseAt(ue,0,c);const te=ae.nearest(c.x,c.z);q.add(x(ue,te.found?ae.rhArr[te.i]:ae.RH,"#d8262e","#ffffff","▼  NOCH 1 KM  ▼"));const me=z+Math.min(wc,i.world.length-400);for(const ge of[500,300,200,100]){const Ue=_(256,256,(_e,L,w)=>{_e.fillStyle="#ffffff",_e.fillRect(0,0,L,w),_e.strokeStyle="#d8262e",_e.lineWidth=18,_e.strokeRect(9,9,L-18,w-18),_e.fillStyle="#16161b",_e.font='900 110px "Barlow Condensed", Arial, sans-serif',_e.textAlign="center",_e.textBaseline="middle",_e.fillText(String(ge),L/2,w/2-18),_e.font='800 64px "Barlow Condensed", Arial, sans-serif',_e.fillText("m",L/2,w/2+62)});for(const _e of[-1,1]){ae.poseAt(me-ge,0,c);const L=ae.nearest(c.x,c.z),w=(L.found?ae.shArr[L.i]:ae.SH)+.6;ae.poseAt(me-ge,_e*w,c);const X=new ot;X.position.set(c.x,ae.terrainHeight(c.x,c.z),c.z),X.rotation.y=c.heading+Math.PI;const se=new pe(new nt(.9,.9,.05),[0,0,0,0,1,1].map(K=>K?new De({map:Ue}):new De({color:"#ffffff"})));se.position.y=2,se.castShadow=!0;const j=new pe(new rt(.04,.04,2,6),new De({color:"#b9bcc2",metalness:.7,roughness:.4}));j.position.y=1,X.add(se,j),q.add(X)}}return ae.scene.add(q),q}function M(){const z=i.world,q=z.length;o.sZiel=q-2.4,o.sStart=o.sZiel-Math.min(wc,q-400),a!==z&&(n==null||n.dispose(),s&&s.group.removeFromParent(),r==null||r.removeFromParent(),n=new Ul(i,vM.map(ie=>({...ie,power:0,lane:Ac}))),s=new pM(z.scene,_r),r=E(o.sStart),a=z),n.reset(0),n.startS=0,s.visible=!0,r.visible=!0;const ae=[];for(const ie of[-2.6,-1.3,1.3,2.6])ae.push({dz:0,lat:ie});for(let ie=1;ae.length<_r+4;ie++)for(const I of[-2.6,-1.3,0,1.3,2.6])(ie>2||I!==0)&&ae.push({dz:-1.9*ie,lat:I});const ne=[ae[4],ae[5],ae[8],ae[9]],G=ae.filter(ie=>!ne.includes(ie));l.length=0;for(let ie=0;ie<_r;ie++){const I=G[ie],ue=Of[ie%Of.length];s.setColors(ie,{jersey:ue[0],frame:ue[1],helmet:ue[2]}),l.push({dz:I.dz,lat:I.lat,latOff:0,jit:Math.random()*100,s:o.sStart+I.dz-70-Math.random()*15,v:0,anfahrt:!0})}o.team=n.list.map((ie,I)=>({r:ie,dz:ne[I].dz,lat:ne[I].lat,latT:ne[I].lat,s:o.sStart+ne[I].dz-72-I*3,v:0,anfahrt:!0,ziel:null})),Object.assign(o,{phase:"anfahrt",t:0,raceTime:0,s:o.sStart-55,v:0,lat:0,lean:0,steerVis:0,cruise:!1,pf:o.sStart,vf:0,cd:5,lastCount:6,idle:0,surge:0,meldung:0,draft:0,sprint:!1,sprintGap:null,sprintT:0,winnerShown:!1,winner:null,meZiel:null,paused:!1,showResult:!1,feldWeg:!1,tippAttacke:0,konterT:0,konterDone:!1,konterOk:!1,zurueck:!1,jagdT:0,jagdDone:!1,allesGeben:!1,einKm:!1,foto:!1,fotoNach:null,slow:1,slowZiel:1,schild200:!1,schild100:!1,jubelT:0})}const T=()=>o.team[0],R=()=>o.team.reduce((z,q)=>Math.min(z,q.s),1/0);function S(z,q){i.world.poseAt(o.s,o.lat,c);const ne=i.bike.root;ne.position.set(c.x,c.h,c.z),ne.rotation.set(-c.pitch,c.heading,o.lean),i.focus.set(c.x,c.h,c.z),i.bike.update(z,o.v,q,o.steerVis),o.x=c.x,o.z=c.z,o.h=c.h}const b=(z,q=2.5)=>Math.sqrt(Math.max(0,2*q*z));function P(z){const q=i.world,ae=o.raceTime;for(let ne=0;ne<l.length;ne++){const G=l[ne];let ie;if(G.anfahrt){const me=o.sStart+G.dz,ge=me-G.s;o.phase==="anfahrt"?G.v=0:G.v=Math.min(9.5,b(ge,2.2),G.v+4*z),G.s=Math.min(me,G.s+G.v*z),ge<.05&&(G.s=me,G.v=0,G.anfahrt=!1)}else o.phase==="aufstellen"||o.phase==="countdown"?G.v=0:(ie=o.pf+G.dz+Math.sin(ae*.37+G.jit)*.7,G.v=Math.max(0,o.vf+dt((ie-G.s)*1.2,-2,2)),o.phase==="auslaufen"&&G.s>o.sZiel+30&&(G.v=Math.max(0,G.v-3)),G.s+=G.v*z);let I=G.lat+Math.sin(ae*.21+G.jit)*.25;Math.abs(G.s-o.s)<2.2&&Math.abs(I-o.lat)<1.1&&(I=o.lat+(I>=o.lat?1.15:-1.15));for(const me of o.team)Math.abs(G.s-me.s)<2&&Math.abs(I-me.lat)<1&&(I=me.lat+(I>=me.lat?1.1:-1.1));G.latOff=We(G.latOff,dt(I,-3,3)-G.lat,2.5,z),q.poseAt(G.s,G.lat+G.latOff,c);const ue=i.camera.position,te=Math.hypot(c.x-ue.x,c.z-ue.z)<1.6&&o.phase!=="aufstellen"&&o.phase!=="countdown";s.set(ne,c.x,c.h-(te?5:0),c.z,c.heading,c.pitch,0,G.v,z,G.v>.3)}s.commit()}function N(z){const q=T();for(let ae=0;ae<o.team.length;ae++){const ne=o.team[ae];if(ne.anfahrt){const G=o.sStart+ne.dz,ie=G-ne.s;o.phase==="anfahrt"?ne.v=0:ne.v=Math.min(9.5,b(ie,2.2),ne.v+4*z),ne.s=Math.min(G,ne.s+ne.v*z),ie<.05&&(ne.s=G,ne.v=0,ne.anfahrt=!1)}else if(o.phase==="aufstellen"||o.phase==="countdown")ne.v=0;else if(o.phase==="feld"){const G=o.pf+ne.dz;ne.v=Math.max(0,o.vf+dt((G-ne.s)*1.2,-2,2)),ne.s+=ne.v*z}else{let G=(o.phase==="attacke"&&o.t<7?15.2:zf)+(o.konterT>0?2.8:0)+(o.allesGeben?.9:0);if((o.phase==="sprint"||o.phase==="auslaufen")&&(G=o.sprintT<3.2?Math.min(18.8,zf+o.sprintT*3.2):bM),o.phase==="auslaufen"&&q.s>o.sZiel+5&&(G=Math.max(4,q.v-1.5*z)),ae===0)ne.v=We(ne.v,G,2,z);else{let I=o.team[ae-1].s-2.3,ue=G+3;o.phase==="sprint"||o.phase==="auslaufen"?(ne.latT=.3+ae*.55,ne.v=We(ne.v,ne.s>o.sZiel+5?4:12.6,1.2,z)):(ne.latT=Ac,ne.v=We(ne.v,Math.min(ue,G+dt((I-ne.s)*1.3,-2,4)),3,z))}ae===0&&(ne.latT=Ac),ne.s+=ne.v*z}ne.lat=We(ne.lat,ne.latT,1.5,z),ne.ziel==null&&ne.s>=o.sZiel&&o.raceTime>0&&(ne.ziel=o.raceTime-(ne.s-o.sZiel)/Math.max(ne.v,1)),ne.r.d=ne.s,ne.r.lat=ne.lat,ne.r.v=ne.v,n.place(ne.r,z,ne.v>.5?ne.v/jt/Bf:0)}}function B(){return n.draftFor(o.x,o.z)}function U(){let z=0;for(const q of l)q.s>o.s&&z++;for(const q of o.team)(q.ziel!=null?o.meZiel==null||q.ziel<o.meZiel:q.s>o.s)&&z++;return z+1}function V(){const z=T().ziel,q=[],ae=te=>te==null?"–":te-z<.05?Nn(te):`+${(te-z).toFixed(1).replace(".",",")} s`;[...o.team.map(te=>({name:te.r.name,number:te.r.number,color:te.r.jersey,t:te.ziel??o.raceTime+(o.sZiel-te.s)/Math.max(te.v,5),sub:Es})),{name:t.name,number:t.number,color:t.jersey||"#d23c3c",t:o.meZiel,me:!0}].sort((te,me)=>te.t-me.t).forEach((te,me)=>q.push(`<div class="result-row ${te.me?"me":""}">
        <b>${me+1}.</b><i style="background:${te.color}"></i><span class="mini-plate"><span>${qe(te.number)}</span></span>
        <span class="result-name">${qe(te.name)}${te.sub?` <small>${qe(te.sub)}</small>`:""}</span>
        <span class="result-time">${ae(te.t)}</span></div>`));const G=o.raceTime+(o.sZiel-o.pf)/Math.max(o.vf,8),ie=Math.floor((G-z)/60),I=Math.round((G-z)%60);q.push(`<div class="result-row"><b>6.</b><i style="background:#888"></i><span class="result-name">Das Feld · ${_r} Fahrer</span>
      <span class="result-time">+${ie}:${String(I).padStart(2,"0")}</span></div>`),f(".result-list").innerHTML=q.join("");const ue=o.meZiel-z;f(".result-title").innerHTML=`Platz 2 – nur ${ue.toFixed(1).replace(".",",")} Sekunden!`,d=0,D(),f(".result").classList.add("show"),o.showResult=!0}function D(){e.querySelectorAll(".result-item").forEach((z,q)=>z.classList.toggle("selected",q===d))}function O(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((z,q)=>z.classList.toggle("selected",q===u))}function k(z){o.paused=z,u=0,f(".pause").classList.toggle("show",z),O(),i.audio.setWind(0),z?i.audio.back():i.audio.select()}function J(z){const q=f(".countdown");q.textContent=z>0?z:"LOS!",q.classList.toggle("go",z<=0),q.classList.remove("show"),q.offsetWidth,q.classList.add("show"),z>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}const ce=new C;function le(z){const q=i.world;q.poseAt(o.s+7,1.2,c),ce.set(c.x,c.h+2.4,c.z),i.camera.position.lerp(ce,1-Math.exp(-2.5*z)),q.poseAt(o.s-9,0,c),i.camera.lookAt(c.x,c.h+.8,c.z),i.camera.fov=We(i.camera.fov,55,3,z),i.camera.updateProjectionMatrix()}let Se=null;function He(z,q=!1){const ae=Cc[h],ne=i.bike.root,G=ne.rotation.y;Se=q||Se==null?G:Se+Math.atan2(Math.sin(G-Se),Math.cos(G-Se))*(1-Math.exp(-4*z));const ie=Math.sin(Se),I=Math.cos(Se),ue=i.camera;ce.set(ne.position.x-ie*ae.dist,ne.position.y+ae.height,ne.position.z-I*ae.dist);const te=i.world.terrainHeight(ce.x,ce.z)+.7;ce.y<te&&(ce.y=te),q?ue.position.copy(ce):ue.position.lerp(ce,1-Math.exp(-10*z)),ue.lookAt(ne.position.x+ie*4,ne.position.y+1,ne.position.z+I*4);const me=56+Math.min(o.v,20)*.6+(o.sprint&&o.phase==="sprint"?8:0);ue.fov=q?me:We(ue.fov,me,3,z),ue.updateProjectionMatrix()}const F=new C;function re(z){const q=i.world;q.poseAt(o.sZiel+1,(q.RH||3.6)+3.2,c),F.set(c.x,c.h+1.3,c.z),i.camera.position.lerp(F,1-Math.exp(-6*z));const ae=T().r.bike.root.position,ne=i.bike.root.position;i.camera.lookAt((ae.x+ne.x)/2,(ae.y+ne.y)/2+.8,(ae.z+ne.z)/2),i.camera.fov=We(i.camera.fov,38,4,z),i.camera.updateProjectionMatrix()}function ee(z){for(let q=0;q<z;q++)i.audio.tone(58,.12,{type:"sine",vol:.35,when:q*.75}),i.audio.tone(52,.12,{type:"sine",vol:.28,when:q*.75+.22})}function oe(z){o.phase=z,o.t=0}return{enter(z={}){i.world.kind!=="road"&&i.worlds.road&&i.useWorld("road"),i.mode="road";const q=Zi();t=z.character||q.find(ae=>(ae.mode||"road")==="road")||q[0]||{id:null,name:"Du",number:1,jersey:"#d23c3c"},i.bike.setPlate(t.number,t.name),i.bike.applyLook(t),i.bike.setTires("road"),e=In(`
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
        </div>`),i.ui.append(e),e.querySelectorAll(".pause-item:not(.result-item)").forEach((ae,ne)=>ae.addEventListener("click",()=>{u=ne,O(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((ae,ne)=>ae.addEventListener("click",()=>{d=ne,D(),i.input.inject("confirm")})),M(),h=0,S(0,0),N(0),P(0),Se=null,He(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45),m("Das große Rennen","Fahr zum Start!"),i.story=o},update(z){const q=i.input;if(z=Math.min(z,.05),i.fx.uFade.value=We(i.fx.uFade.value,0,3,z),i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,z),q.touchRide=!o.paused&&!o.showResult,o.paused){q.pressed("up")||q.pressed("down")?(u=1-u,O(),i.audio.nav()):q.pressed("back")||q.pressed("start")?k(!1):q.pressed("confirm")&&(u===0?k(!1):(i.audio.select(),i.go("mode",{minigame:!0})));return}if(o.showResult){if(q.pressed("up")||q.pressed("down"))d=1-d,D(),i.audio.nav();else if(q.pressed("confirm")){i.audio.select(),d===0?i.go("story",{character:t}):i.go("mode",{minigame:!0});return}}else if(q.pressed("pause")||q.pressed("start")){k(!0);return}const ae=z;o.slow=We(o.slow,o.slowZiel,5,ae),o.fotoNach!=null&&(o.fotoNach-=ae,o.fotoNach<=0&&(o.fotoNach=null,o.slowZiel=1,m("Platz 2!",`Nur ${(o.meZiel-(T().ziel??o.meZiel)).toFixed(1).replace(".",",")} Sekunden hinter ${T().r.name}`),i.audio.success(),i.input.rumble(.8,400),setTimeout(()=>e&&o.phase==="auslaufen"&&V(),3e3))),z*=o.slow;const ne=o.phase==="sprint"&&o.sprint||o.konterT>0&&o.konterOk?.55:0;if(i.fx.uLines.value=We(i.fx.uLines.value,ne,4,ae),(o.phase==="sprint"||o.phase==="auslaufen"&&o.t<4)&&(o.jubelT-=ae,o.jubelT<=0)){const j=dt(1-(o.sZiel-o.s)/320,.2,1);o.jubelT=.35,i.audio.noiseBurst(.7,{vol:.05+.12*j,freq:700+Math.random()*500,type:"bandpass",q:.7})}if(o.t+=z,["feld","attacke","flucht","sprint","auslaufen"].includes(o.phase)&&(o.raceTime+=z),q.pressed("klingel")&&i.audio.klingel(),q.pressed("cruise")&&(o.cruise=!o.cruise,f(".cruise-badge").classList.toggle("on",o.cruise),o.cruise?i.audio.select():i.audio.back()),q.pressed("view")){h=(h+1)%Cc.length,i.audio.nav();const j=f(".view-toast");j.textContent=`Kamera: ${Cc[h].name}`,j.classList.remove("show"),j.offsetWidth,j.classList.add("show")}const G=o.cruise||q.throttle>.1,ie=q.pressed("x")||q.pressed("sprint"),I=["feld","attacke","flucht","sprint"].includes(o.phase);let ue=o.v;if(o.phase==="anfahrt"){const j=o.sStart-o.s;ue=Math.min(G?6.5:Math.max(0,o.v-1.5*z),b(j,2.5)),o.idle=G?0:o.idle+z,g(o.idle>2.5&&o.v<.5?`Zum Losfahren ${v()}`:""),j<.08&&(o.s=o.sStart,o.v=0,ue=0,oe("aufstellen"),g(""),m("Startaufstellung","Die anderen Fahrer kommen …"),f(".story-phase").textContent="Aufstellen")}else if(o.phase==="aufstellen")ue=0,o.lat=We(o.lat,0,2,z),l.every(K=>!K.anfahrt)&&o.team.every(K=>!K.anfahrt)&&o.t>2&&(oe("countdown"),f(".story-phase").textContent="Gleich geht’s los");else if(o.phase==="countdown"){ue=0,o.cd-=z;const j=Math.ceil(o.cd);j!==o.lastCount&&(o.lastCount=j,J(j)),j<=0&&(oe("feld"),o.cruise=!1,f(".story-phase").textContent="Im Feld",setTimeout(()=>e&&o.phase==="feld"&&g(`Treten: ${v()} · Lenken: ${y()}`),1200),setTimeout(()=>e&&g(""),7e3))}else if(o.phase==="feld"){const j=Math.min(Ec,o.raceTime*2.4);o.vf=j+dt((o.s-o.pf)*.9,-1.5,3),o.pf+=o.vf*z,ie&&(o.surge=2),o.surge=Math.max(0,o.surge-z),ue=o.surge>0?j+5:G?j+2:j-2.5,o.s>o.pf+3.5&&(o.s=o.pf+3.5,o.v=Math.min(o.v,o.vf),o.meldung-=z,o.meldung<=0&&(G||o.surge>0)&&(o.meldung=6,m("Kein Ausreißen!","Das Feld lässt dich nicht wegfahren"))),o.s<o.pf-8&&(ue=Math.max(ue,o.vf+1.2)),o.pf-o.sStart>=_M&&(oe("attacke"),m(`Attacke von ${Es}!`,"Schnell, häng dich in ihren Windschatten!"),i.audio.whoosh(1.4),i.input.rumble(.7,300),f(".story-phase").textContent="Ausreißer!")}else if(o.phase==="attacke"||o.phase==="flucht"||o.phase==="sprint"){o.vf=We(o.vf,o.jagdT>0?17:yM,.6,z),o.pf+=o.vf*z;const j=T(),K=o.sZiel-j.s,Ee=R(),Me=Ee>o.s+.5,Ae=B();if(o.draft=We(o.draft,Ae.rival?Ae.strength:0,5,z),o.phase!=="sprint")Me?o.draft>.2?ue=G?j.v+1.5:j.v-.3:ue=G?j.v-.6:o.vf:ue=Math.min(G?Ec+.8:Ec,j.v-1.5),Me&&o.s>Ee-2&&(o.s=Ee-2,o.v=Math.min(o.v,o.team[o.team.length-1].v)),Me&&o.s<Ee-16&&(ue=Math.max(ue,j.v+.6)),Me&&o.draft<.2&&o.raceTime>0?(o.tippAttacke+=z,o.tippAttacke>.6&&g(`Lenk hinter die <b style="color:#e0607a">weinroten Trikots</b> (${y()}) und tritt!`)):(o.tippAttacke=0,g(Me&&!G?`Weiter treten: ${v()}`:"")),o.phase==="attacke"&&o.t>10&&oe("flucht"),o.phase==="flucht"&&(!o.konterDone&&K<1080&&(o.konterDone=!0,o.konterT=6,o.konterOk=!1,m(`${Es} verschärft das Tempo!`,`Schnell SPRINT (${p()}), sonst bist du weg!`),i.audio.whoosh(1.3),i.input.rumble(.7,300),ee(3)),o.konterT>0?(o.konterT-=z,ie&&!o.konterOk&&(o.konterOk=!0,m("Stark!","Du bleibst dran!"),i.audio.select(),i.input.rumble(.6,200)),o.konterOk?ue=j.v+1.2:(ue=Math.min(ue,j.v-2.4),g(`SPRINT: ${p()}!`)),o.konterT<=0&&!o.konterOk&&(o.zurueck=!0,m("Eine Lücke!","Kämpf dich zurück – tritt!"))):o.zurueck&&(ue=G?j.v+1.8:j.v-.5,g(`Kämpf dich zurück: ${v()}`),Ee-o.s<3.2&&(o.zurueck=!1,g(""),m("Wieder dran!","Puh, geschafft"),i.audio.success())),o.s<Ee-30&&(ue=Math.max(ue,j.v+.8)),!o.jagdDone&&K<820&&(o.jagdDone=!0,o.jagdT=13,m("Achtung!","Das Feld jagt euch!"),i.audio.tone(330,.4,{type:"sawtooth",vol:.06,slideTo:220}),ee(4)),o.jagdT>0&&(o.jagdT-=z),f(".story-gap-box").classList.toggle("alarm",o.jagdT>0||o.feldWeg&&(o.s-o.pf)/Math.max(o.vf,5)<7),!o.allesGeben&&K<600&&(o.allesGeben=!0,m(`${Es} gibt nochmal alles!`,"Das Feld fällt wieder zurück"),i.audio.whoosh(1)),!o.einKm&&o.sZiel-o.s<1e3&&(o.einKm=!0,m("Noch 1 Kilometer!","Gleich geht der Sprint los …"),i.audio.tone(880,.15,{type:"square",vol:.06}),i.audio.tone(880,.15,{type:"square",vol:.06,when:.2}),ee(5))),!o.feldWeg&&o.s-o.pf>30&&(o.feldWeg=!0,m("Das Feld kommt nicht mit!",`Nur noch du und ${Es} vorne`),i.audio.success()),j.s>=o.sZiel-xM&&(oe("sprint"),o.sprintT=0,m("Schlusssprint!",`Jetzt SPRINT: ${p()}`),i.audio.whoosh(1.6),i.input.rumble(.8,300),f(".story-phase").textContent="Sprint!");else{o.sprintT+=z,ie&&!o.sprint&&(o.sprint=!0,o.sprintGap=j.s-o.s,o.sprintRest=Math.max(1,o.sZiel-j.s),m("Sprint!","Volle Kraft!"),i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.8,400));const Ye=j.s-o.s,de=MM*Math.max(j.v,10);if(o.sprint){const we=dt((o.sZiel-j.s)/o.sprintRest,0,1),Ge=de+(Math.max(o.sprintGap,de)-de)*we;ue=Math.min(19.2,j.v+dt((Ye-Ge)*1.6,-3,6)),g("")}else ue=G?j.v-2.5:j.v-4,g(`SPRINT: ${p()}!`);Ye<de&&(o.s=j.s-de,o.v=Math.min(o.v,j.v));for(const we of[200,100])!o["schild"+we]&&o.sZiel-o.s<we&&(o["schild"+we]=!0,m(`${we} m!`,we===200?"Alles geben!":"Gleich ist es entschieden!"));!o.foto&&j.s>o.sZiel-22&&(o.foto=!0,o.slowZiel=.22,m("Fotofinish!",""),i.audio.whoosh(2.2)),j.ziel!=null&&!o.winnerShown&&(o.winnerShown=!0)}}else o.phase==="auslaufen"&&(o.vf=We(o.vf,6,.4,z),o.pf+=o.vf*z,ue=Math.max(0,o.v-1.6*z),o.draft=We(o.draft,0,5,z));const te=ue>o.v?1.3:2.2;o.v=Math.max(0,o.v+dt(ue-o.v,-te*6*z,te*3.5*z)),(o.phase==="aufstellen"||o.phase==="countdown")&&(o.v=0),o.s+=o.v*z,o.phase==="sprint"&&o.meZiel==null&&o.s>=o.sZiel&&(o.meZiel=o.raceTime-(o.s-o.sZiel)/Math.max(o.v,1),oe("auslaufen"),o.cruise=!1,f(".cruise-badge").classList.remove("on"),f(".story-phase").textContent="Ziel",g(""),o.fotoNach=1.1);const me=q.steer,ge=i.world.nearest(o.x??0,o.z??0),Ue=(ge.found?i.world.rhArr[ge.i]:i.world.RH)-.5;o.phase!=="aufstellen"&&o.phase!=="countdown"&&(o.lat=dt(o.lat+me*2.4*z*dt(o.v/4,.3,1),-Ue,Ue)),o.lean=We(o.lean,me*dt(o.v/9,0,1)*.3,6,z),o.steerVis=We(o.steerVis,me*(1-dt(o.v/14,0,.85))*.5,10,z);for(const j of o.team)Math.abs(j.s-o.s)<1&&Math.abs(j.lat-o.lat)<.8&&(o.lat=j.lat+(o.lat>=j.lat?.8:-.8));const _e=G||I&&o.v>1||o.phase==="anfahrt"&&o.v>.3?Math.max(o.v/jt/Bf,G?3:0):0;_e>0?i.audio.freewheel(z,0):i.audio.freewheel(z,Math.min(55,o.v/(2*Math.PI*jt)*24)),i.bike.stand=o.phase==="sprint"&&o.sprint||o.surge>0?1:0,T().r.bike.stand=o.phase==="sprint"&&o.sprintT>.3?1:0,S(z,_e),N(z),P(z),n.showDraft(o.draft>.2?n.draftFor(o.x,o.z).rival:null,o.draft,z),o.phase==="aufstellen"||o.phase==="countdown"&&o.cd>1.6?le(z):o.foto&&(o.slow<.9||o.fotoNach!=null)?re(ae):He(z),o.phase==="sprint"&&o.sprint&&o.slow>.9&&(i.camera.position.x+=(Math.random()-.5)*.03,i.camera.position.y+=(Math.random()-.5)*.03),i.audio.setWind(dt(o.v/15,0,1)*(1-.5*o.draft));const L=o.v*3.6;f(".speedo-val b").textContent=Math.round(L),f(".speedo-fill").style.strokeDasharray=`${dt(L/70,0,1)*75} 100`,f(".place").textContent=I||o.phase==="auslaufen"?`${o.meZiel!=null?2:U()}/${_r+5}`:"–";const w=o.sZiel-o.s;f(".story-rest").textContent=I?w>1e3?`${(w/1e3).toFixed(1).replace(".",",")} km`:`${Math.max(0,Math.round(w))} m`:"–";const X=(o.s-o.pf)/Math.max(o.vf,5);f(".story-gap-box").classList.toggle("show",o.feldWeg),f(".story-gap").textContent=`${Math.floor(X/60)}:${String(Math.max(0,Math.round(X%60))).padStart(2,"0")}`,f(".draft-badge").classList.toggle("on",o.draft>.08),o.draft>.08&&(f(".draft-name").textContent=`hinter ${Es} · −${Math.round(40*o.draft)} % Wind`,f(".draft-meter i").style.width=`${Math.round(o.draft*100)}%`)},exit(){i.input.touchRide=!1,i.bike.stand=0,n==null||n.hide(),s&&(s.visible=!1),r&&(r.visible=!1),g(""),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0);const z=i.world.nearest(o.x??0,o.z??0);i.npc.s=z.found?z.s:0}}}const Hf=12,TM=[["1","2","3","4","5","6","7","8","9","0"],["Q","W","E","R","T","Z","U","I","O","P"],["A","S","D","F","G","H","J","K","L","Ü"],["Y","X","C","V","B","N","M","Ö","Ä","-"]],wM=[{k:"shift",label:"⇧ Groß/klein",span:3},{k:"space",label:"Leerzeichen",span:4},{k:"del",label:"⌫ Löschen",span:3}];function EM(){const i=TM.map(t=>t.map(n=>({k:n,label:n,span:1}))),e=[];for(const t of wM)for(let n=0;n<t.span;n++)e.push(t);return i.push(e),i}const Gp={id:"identity",title:"Name & Startnummer",tab:"Name & Nummer",hints:[["A","Taste drücken"],["X","Buchstabe löschen"],["Y","Leerzeichen"],["B","Abbrechen"]],mount(i,e,t){this.draft=e,this.ctx=t,this.grid=EM(),this.zone="kb",this.r=1,this.c=0,this.upper=!e.name,this.autoLower=!e.name,i.innerHTML=`
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
      </div>`,this.root=i,this.keyEls=[...i.querySelectorAll(".key")],this.keyEls.forEach(n=>n.addEventListener("click",()=>{const s=Number(n.dataset.r),r=this.grid[s].findIndex(a=>a.k===n.dataset.k);this.zone="kb",this.r=s,this.c=r,this.press(this.grid[s][r])})),i.querySelector(".arrow.up").addEventListener("click",()=>this.changeNumber(1)),i.querySelector(".arrow.down").addEventListener("click",()=>this.changeNumber(-1)),i.querySelector(".done-btn").addEventListener("click",()=>t.next()),this.refresh()},get key(){return this.grid[this.r][this.c]},refresh(){const i=this.draft,e=n=>this.root.querySelector(n);e(".name-text").textContent=i.name,e(".name-count").textContent=`${i.name.length}/${Hf}`,e(".plate-number").textContent=i.number,e(".plate-name").textContent=i.name||"DEIN NAME",e(".plate-name").classList.toggle("placeholder",!i.name),e(".number-value").textContent=i.number;for(const n of this.root.querySelectorAll(".panel"))n.classList.toggle("active",n.dataset.zone===this.zone);const t=this.key;this.keyEls.forEach(n=>{n.classList.toggle("focus",this.zone==="kb"&&n.dataset.k===t.k&&Number(n.dataset.r)===this.r),n.dataset.k.length===1&&/[A-ZÄÖÜ]/.test(n.dataset.k)&&(n.textContent=this.upper?n.dataset.k:n.dataset.k.toLowerCase())}),e(".done-btn").classList.toggle("focus",this.zone==="done"),this.ctx.preview(i)},typeChar(i){const e=this.draft;if(e.name.length>=Hf){this.ctx.audio.error(),this.bump(".name-field");return}e.name+=i,this.autoLower&&this.upper&&/[A-Za-zÄÖÜäöü]/.test(i)&&(this.upper=!1,this.autoLower=!1),this.ctx.audio.key(),this.clearError()},backspace(){const i=this.draft;i.name.length&&(i.name=i.name.slice(0,-1),i.name.length||(this.upper=!0,this.autoLower=!0),this.ctx.audio.key())},press(i){i.k==="shift"?(this.upper=!this.upper,this.autoLower=!1,this.ctx.audio.key()):i.k==="space"?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):i.k==="del"?this.backspace():this.typeChar(this.upper?i.k:i.k.toLowerCase()),this.flashKey(),this.refresh()},flashKey(){const i=this.keyEls.find(e=>e.classList.contains("focus"));i&&(i.classList.remove("pressed"),i.offsetWidth,i.classList.add("pressed"))},bump(i){const e=this.root.querySelector(i);e.classList.remove("shake"),e.offsetWidth,e.classList.add("shake")},changeNumber(i){const e=this.draft;let t=e.number+i;t>999&&(t=i>1?999:1),t<1&&(t=i<-1?1:999),e.number=t,this.ctx.audio.nav();const n=this.root.querySelector(".number-value");n.classList.remove("tick-up","tick-down"),n.offsetWidth,n.classList.add(i>0?"tick-up":"tick-down"),this.refresh()},move(i,e){const t=this.ctx.audio;if(this.zone==="kb")if(i){const n=this.r+i;if(n<0||n>=this.grid.length)return;this.r=n}else{let n=this.c;const s=this.key;do n+=e;while(n>=0&&n<10&&this.grid[this.r][n]===s);if(n>=10)this.zone="num";else{if(n<0)return;{const r=this.grid[this.r][n];this.c=this.grid[this.r].indexOf(r)}}}else if(this.zone==="num"){if(i)return this.changeNumber(-i*1);e<0?(this.zone="kb",this.c=9,this.c=this.grid[this.r].indexOf(this.grid[this.r][9])):this.zone="done"}else if(this.zone==="done")if(e<0)this.zone="num";else return;t.nav(),this.refresh()},update(i){if(i.pressed("up")&&(this.zone==="num"&&i.holdTime("up")>1.6?this.changeNumber(5):this.move(-1,0)),i.pressed("down")&&(this.zone==="num"&&i.holdTime("down")>1.6?this.changeNumber(-5):this.move(1,0)),i.pressed("left")&&this.move(0,-1),i.pressed("right")&&this.move(0,1),i.pressed("x")&&(this.backspace(),this.refresh()),i.pressed("y")&&this.press({k:"space"}),i.pressed("start")){this.zone="done",this.refresh(),this.ctx.next();return}for(const e of i.chars){if(this.zone==="num"){if(/\d/.test(e)){const t=String(this.draft.number);let n=Number(this.typedDigits?t+e:e);n>999&&(n=Number(e)),this.draft.number=Math.max(1,n),this.typedDigits=!0,this.refresh()}else e==="\b"&&(this.draft.number=Math.max(1,Math.floor(this.draft.number/10)),this.refresh());continue}this.typedDigits=!1,e==="\b"?this.backspace():e===" "?this.draft.name.length&&!this.draft.name.endsWith(" ")&&this.typeChar(" "):/^[\p{L}\d\-]$/u.test(e)&&this.typeChar(e),this.refresh()}i.pressed("confirm")&&(this.zone==="kb"?this.press(this.key):this.zone==="num"?(this.zone="done",this.ctx.audio.nav(),this.refresh()):this.ctx.next())},clearError(){this.root.querySelector(".error-msg").textContent=""},validate(){return this.draft.name=this.draft.name.trim(),this.draft.name?!0:(this.root.querySelector(".error-msg").textContent="Bitte gib zuerst einen Namen ein.",this.bump(".name-field"),this.zone="kb",this.refresh(),!1)},unmount(){}};function bh({id:i,title:e,tab:t,rows:n}){return{id:i,title:e,tab:t,seeBike:!0,hints:[["A","Weiter"],["B","Zurück"]],mount(s,r,a){this.draft=r,this.ctx=a,this.row=0;const o=(c,l,h)=>c.type==="brand"?`<div class="brand-opt" data-o="${h}"><span class="brand-logo ${l.serif?"serif":""} ${l.font.includes("italic")?"italic":""}">${qe(Cp(l))}</span><small>${qe(l.land)}</small></div>`:c.type==="group"?`<div class="brand-opt group-opt" data-o="${h}"><i class="group-dot" style="--c:${l.accent}"></i><span>${qe(l.name)}</span><small>${qe(l.maker)}</small></div>`:c.type==="paint"?`<div class="brand-opt paint-opt" data-o="${h}"><i class="paint-preview ${l.id}"></i><span>${qe(l.name)}</span></div>`:`<div class="swatch ${l.matte?"matte":""}" data-o="${h}" style="--c:${l.hex}"></div>`;s.innerHTML=`
        <div class="choice-panel">
          ${n.map((c,l)=>`
            <div class="choice-row" data-r="${l}">
              <div class="choice-head"><span class="field-label">${qe(c.label)}</span><span class="choice-name"></span></div>
              <div class="choice-opts ${c.type}">${c.options.map((h,u)=>o(c,h,u)).join("")}</div>
            </div>`).join("")}
          <div class="choice-row done-row" data-r="${n.length}">
            <div class="done-btn">${a.isLast(this)?"Fertig":"Weiter"} <span>${a.isLast(this)?"✓":"›"}</span></div>
          </div>
        </div>`,this.root=s,s.querySelectorAll(".choice-row").forEach(c=>{const l=Number(c.dataset.r);c.querySelectorAll("[data-o]").forEach(h=>h.addEventListener("click",()=>{this.row=l,this.select(l,Number(h.dataset.o))}))}),s.querySelector(".done-btn").addEventListener("click",()=>a.next()),this.refresh()},valueOf(s,r){return r.id??r.hex},current(s){const r=n[s];return r.options.findIndex(a=>this.valueOf(r,a)===this.draft[r.key])},select(s,r){const a=n[s];this.draft[a.key]=this.valueOf(a,a.options[r]),this.ctx.audio.nav(),this.ctx.preview(this.draft),this.refresh()},refresh(){var s;this.root.querySelectorAll(".choice-row").forEach(r=>{const a=Number(r.dataset.r);if(r.classList.toggle("active",a===this.row),a>=n.length)return;const o=this.current(a);r.querySelectorAll("[data-o]").forEach(h=>h.classList.toggle("selected",Number(h.dataset.o)===o));const l=n[a].options[o];r.querySelector(".choice-name").textContent=l?l.name:""}),this.root.querySelector(".done-btn").classList.toggle("focus",this.row===n.length),(s=this.root.querySelector(`.choice-row[data-r="${this.row}"]`))==null||s.scrollIntoView({block:"nearest",behavior:"smooth"})},update(s){if(s.pressed("up")&&this.row>0&&(this.row--,this.ctx.audio.nav(),this.refresh()),s.pressed("down")&&this.row<n.length&&(this.row++,this.ctx.audio.nav(),this.refresh()),this.row<n.length&&(s.pressed("left")||s.pressed("right"))){const r=n[this.row].options.length,a=Math.max(0,this.current(this.row));this.select(this.row,(a+(s.pressed("right")?1:-1)+r)%r)}s.pressed("confirm")&&(this.row<n.length?(this.row++,this.ctx.audio.nav(),this.refresh()):this.ctx.next()),s.pressed("start")&&this.ctx.next()},validate(){return!0},unmount(){}}}const Wp=bh({id:"looks",title:"Dein Aussehen",tab:"Aussehen",rows:[{key:"helmet",label:"Helm",type:"color",options:Lr},{key:"jersey",label:"Trikot",type:"color",options:Lr},{key:"kit",label:"Trikot-Muster",type:"paint",options:c1},{key:"shorts",label:"Hose",type:"color",options:Lr}]}),$p=bh({id:"bike",title:"Dein Rennrad",tab:"Rennrad",rows:[{key:"brand",label:"Marke",type:"brand",options:ma},{key:"paint",label:"Lackierung",type:"paint",options:wp},{key:"frame",label:"Rahmenfarbe",type:"color",options:gh},{key:"bar",label:"Lenkerband",type:"color",options:i1},{key:"groupset",label:"Schaltung",type:"group",options:ga}]}),AM=bh({id:"ttbike",title:"Dein Zeitfahrrad",tab:"Zeitfahrrad",rows:[{key:"brand",label:"Marke",type:"brand",options:ma},{key:"paint",label:"Lackierung",type:"paint",options:wp},{key:"frame",label:"Rahmenfarbe",type:"color",options:gh},{key:"tires",label:"Reifen",type:"color",options:r1},{key:"groupset",label:"Schaltung",type:"group",options:ga}]});let on=[Gp,Wp,$p];function CM(i){let e,t,n=0,s,r=0,a=!0,o=!1;function c(){const u=on[n];e.querySelector(".step-label").textContent=`${o?"Fahrer bearbeiten":"Neuer Charakter"} · Schritt ${n+1} von ${on.length}`,e.querySelector(".step-title").textContent=u.title,e.querySelector(".step-tabs").innerHTML=`${pt("LB")}${on.map((m,g)=>`<span class="step-tab ${g===n?"active":""} ${g<n?"done":""}" data-i="${g}">${qe(m.tab)}</span>`).join('<i class="tab-dot"></i>')}${pt("RB")}`,e.querySelectorAll(".step-tab").forEach(m=>m.addEventListener("click",()=>l(Number(m.dataset.i)))),e.classList.toggle("see-bike",!!u.seeBike);const d=n===0?u.hints:u.hints.map(([m,g])=>[m,m==="B"?"Zurück":g]);e.querySelector(".hints").outerHTML=Yi(d),u.mount(t,s,h),h.preview(s);const f=t.querySelector(".done-btn");f&&n<on.length-1&&(f.firstChild.textContent="Weiter ")}function l(u){if(u<0||u>=on.length||u===n||n<0)return;const d=on[n];if(u>n&&!d.validate()){i.audio.error(),i.input.rumble(.4,120);return}d.unmount(),n=u,i.audio.nav(),i.input.rumble(.15,40),c()}const h={audio:i.audio,preview(u){i.bike.setPlate(u.number,u.name||" "),i.bike.applyLook(u)},isLast(u){return on.indexOf(u)===on.length-1},next(){const u=on[n];if(!u.validate()){i.audio.error(),i.input.rumble(.4,120);return}if(u.unmount(),n<on.length-1){n++,i.audio.select(),c();return}o?Op(s):iM(s),i.audio.success(),i.input.rumble(.5,200),e.classList.add("saved");const d=s.id;setTimeout(()=>i.currentName==="creator"&&i.go("menu",{selectId:d}),650),n=-1}};return{enter(u={}){o=!!u.edit,s=o?{...mn,...u.edit}:nM(i.mode),on=[Gp,Wp,i.mode==="tt"?AM:$p],n=0,r=0,a=!0,e=In(`
        <div class="screen creator-screen">
          <header class="creator-head">
            <div class="step-tabs"></div>
            <div class="step-label"></div>
            <h2 class="step-title"></h2>
          </header>
          <div class="step-body"></div>
          ${Yi([])}
          <div class="toast"></div>
        </div>`),t=e.querySelector(".step-body"),i.ui.append(e),c()},update(u){const d=Mi(i,u);if(tr(i,u,d,a),a=!1,n<0)return;r=Math.max(0,r-u);const f=i.input;if(f.pressed("rb")||f.pressed("rt")){l(n+1);return}if(f.pressed("lb")||f.pressed("lt")){l(n-1);return}if(i.input.pressed("back")&&n>0){on[n].unmount(),n--,i.audio.back(),c();return}if(i.input.pressed("back")){if(r>0){i.audio.back(),i.go("menu",o?{selectId:s.id}:{});return}r=2,i.audio.back();const m=e.querySelector(".toast");m.innerHTML=`Nochmal ${pt("B")} drücken, um abzubrechen`,m.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>m.classList.remove("show"),2e3);return}on[n].update(i.input)},exit(){e.remove()}}}const Vo=110,ki=140,Un=210,xr=14;class RM{constructor(e,t){this.world=e,this.canvas=t,this.dpr=Math.min(window.devicePixelRatio||1,2),t.width=t.height=Un*this.dpr,t.style.width=t.style.height=`${Un}px`,this.ctx=t.getContext("2d");let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let d=0;d<e.N;d++)n=Math.min(n,e.px[d]),s=Math.max(s,e.px[d]),r=Math.min(r,e.pz[d]),a=Math.max(a,e.pz[d]);n-=Vo,s+=Vo,r-=Vo,a+=Vo,this.scale=(Un-xr*2)/Math.max(s-n,a-r),this.ox=xr+(Un-xr*2-(s-n)*this.scale)/2-n*this.scale,this.oz=xr+(Un-xr*2-(a-r)*this.scale)/2-r*this.scale,this.base=document.createElement("canvas"),this.base.width=this.base.height=t.width;const o=this.base.getContext("2d");o.scale(this.dpr,this.dpr),o.save(),o.beginPath(),o.roundRect(0,0,Un,Un,10),o.clip(),o.imageSmoothingEnabled=!0,o.drawImage(this.renderTerrain(),0,0,Un,Un),o.restore(),o.lineJoin=o.lineCap="round",this.tracePath(o,0,e.N),o.closePath(),o.strokeStyle="rgba(0,0,0,0.55)",o.lineWidth=8,o.stroke(),o.strokeStyle="rgba(240,234,222,0.85)",o.lineWidth=4,o.stroke();const c=this.mx(e.px[0]),l=this.mz(e.pz[0]),h=-e.tz[0],u=e.tx[0];o.strokeStyle=Be.colors.gold,o.lineWidth=3,o.lineCap="butt",o.beginPath(),o.moveTo(c-h*8,l-u*8),o.lineTo(c+h*8,l+u*8),o.stroke()}renderTerrain(){const e=this.world,t=document.createElement("canvas");t.width=t.height=ki;const n=t.getContext("2d"),s=n.createImageData(ki,ki),r=Un/ki,a=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)],o=(p,y,_)=>[p[0]+(y[0]-p[0])*_,p[1]+(y[1]-p[1])*_,p[2]+(y[2]-p[2])*_],c=a("#5f9140"),l=a("#8db657"),h=a("#bfae63"),u=a("#2e5a2a"),d=a("#8c8279"),f=a("#f4f2ec"),m=a("#d8c896"),g=a("#245f92"),v=a("#5aa0d4");for(let p=0;p<ki;p++)for(let y=0;y<ki;y++){const _=((y+.5)*r-this.ox)/this.scale,x=((p+.5)*r-this.oz)/this.scale,E=e.baseHeight(_,x);let M;const T=e.lakeAt(_,x);if(T&&E<T.level)M=o(v,g,kt(0,3,T.level-E));else{M=o(c,l,e.n3(_*.006,x*.006)*.35+.5),M=o(M,h,kt(.25,.8,e.n2(_*.004+50,x*.004))*.5),E<120&&(M=o(M,u,kt(0,.25,e.n3(_*.006+20,x*.006))*.75)),M=o(M,d,kt(45,95,E)),M=o(M,f,kt(110,140,E)),T&&(M=o(M,m,kt(T.level+1.4,T.level,E)));const S=e.baseHeight(_+6,x)-E,b=e.baseHeight(_,x+6)-E,P=dt(1-(S+b)*.07,.55,1.3);M=[M[0]*P,M[1]*P,M[2]*P]}const R=(p*ki+y)*4;s.data[R]=M[0],s.data[R+1]=M[1],s.data[R+2]=M[2],s.data[R+3]=255}return n.putImageData(s,0,0),t}mx(e){return this.ox+e*this.scale}mz(e){return this.oz+e*this.scale}tracePath(e,t,n){const s=this.world;e.beginPath();for(let r=t;r<=n;r++){const a=r%s.N,o=this.mx(s.px[a]),c=this.mz(s.pz[a]);r===t?e.moveTo(o,c):e.lineTo(o,c)}}draw(e,t,n,s,r=[]){const a=this.ctx;if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width,this.canvas.height),a.drawImage(this.base,0,0),a.scale(this.dpr,this.dpr),a.lineJoin=a.lineCap="round",s!=null&&s>0){const u=Math.min(this.world.N,Math.floor(s/this.world.ds));this.tracePath(a,0,u),a.strokeStyle=Be.colors.gold,a.lineWidth=4,a.shadowColor=Be.colors.gold,a.shadowBlur=6,a.stroke(),a.shadowBlur=0}for(const u of r)a.beginPath(),a.arc(this.mx(u.x),this.mz(u.z),4.5,0,Math.PI*2),a.fillStyle=u.jersey,a.strokeStyle="#fff",a.lineWidth=1.5,a.fill(),a.stroke();const o=this.mx(e),c=this.mz(t),l=Math.sin(n),h=Math.cos(n);a.beginPath(),a.moveTo(o+l*10,c+h*10),a.lineTo(o-l*5+h*6,c-h*5-l*6),a.lineTo(o-l*2,c-h*2),a.lineTo(o-l*5-h*6,c-h*5+l*6),a.closePath(),a.fillStyle=Be.colors.accent,a.strokeStyle="#fff",a.lineWidth=2,a.fill(),a.stroke()}}const Go=78,Rc=9.81,PM=3.6,Vf=[.25,.5,.75],gi=Be.raceLaps,Pc=[{name:"Hinten",yaw:0,pitch:.32,dist:4.4},{name:"Seite",yaw:Math.PI/2,pitch:.12,dist:4.6},{name:"Von oben",yaw:0,pitch:1.3,dist:12},{name:"Von vorne",yaw:Math.PI,pitch:.16,dist:4.2}],Xp=i=>Math.atan2(Math.sin(i),Math.cos(i)),Gf=(i,e,t,n)=>i+Xp(e-i)*(1-Math.exp(-t*n));function LM(i){let e,t;const n={},s={},r={};let a=0,o,c,l=!1,h=null,u=!1,d=0;const f=new Map;let m=0;const g={view:0,yawOff:0,pitchOff:0,idle:0,yaw:0,pitch:.32,dist:4.4,heading:0};let v=null;const p=["#ff4d6d","#ffd23f","#3bceac","#4daaff","#ff9f1c","#c77dff"];function y(D,O,k){const ce=new Float32Array(480),le=new Float32Array(480),Se=new Float32Array(480),He=new ve;for(let oe=0;oe<160;oe++){ce[oe*3]=D,ce[oe*3+1]=O+1.4,ce[oe*3+2]=k;const z=Math.random()*Math.PI*2,q=1.5+Math.random()*2.5;Se[oe*3]=Math.cos(z)*q,Se[oe*3+1]=3+Math.random()*3,Se[oe*3+2]=Math.sin(z)*q,He.set(p[oe%p.length]),He.toArray(le,oe*3)}const F=new lt;F.setAttribute("position",new Ct(ce,3)),F.setAttribute("color",new Ct(le,3));const re=new xi({size:.12,vertexColors:!0,transparent:!0,depthWrite:!1}),ee=new Os(F,re);ee.frustumCulled=!1,i.world.scene.add(ee),v={points:ee,vel:Se,age:0}}function _(){v&&(i.world.scene.remove(v.points),v.points.geometry.dispose(),v.points.material.dispose(),v=null)}function x(D){if(!v)return;v.age+=D;const O=v.points.geometry.attributes.position;for(let k=0;k<O.count;k++)v.vel[k*3+1]-=2.5*D,O.setXYZ(k,O.getX(k)+v.vel[k*3]*D,O.getY(k)+v.vel[k*3+1]*D,O.getZ(k)+v.vel[k*3+2]*D);O.needsUpdate=!0,v.points.material.opacity=Math.max(0,1-v.age/3),v.age>3.2&&_()}function E(D,O=!1){const k=i.input,J=Pc[g.view];k.lookX||k.lookY?(g.idle=0,g.yawOff+=k.lookX*2.6*D,g.pitchOff-=k.lookY*1.5*D):(g.idle+=D,g.idle>1.5&&(g.yawOff=We(g.yawOff,0,2,D),g.pitchOff=We(g.pitchOff,0,2,D))),g.yawOff=Xp(g.yawOff);const ce=dt(J.pitch+g.pitchOff,.04,1.45);g.pitchOff=ce-J.pitch,O?(g.yaw=J.yaw+g.yawOff,g.pitch=ce,g.dist=J.dist,g.heading=n.heading):(g.yaw=Gf(g.yaw,J.yaw+g.yawOff,6,D),g.pitch=We(g.pitch,ce,6,D),g.dist=We(g.dist,J.dist,4,D),g.heading=Gf(g.heading,n.heading,5,D));const le=i.camera,Se=g.heading+Math.PI+g.yaw,He=Math.cos(g.pitch)*g.dist;le.position.set(n.x+Math.sin(Se)*He,n.h+.9+Math.sin(g.pitch)*g.dist,n.z+Math.cos(Se)*He);const F=i.world.terrainHeight(le.position.x,le.position.z)+.6;le.position.y<F&&(le.position.y=F);const re=2.5*Math.max(0,Math.cos(g.yaw))*(1-g.pitch/1.5);le.lookAt(n.x+Math.sin(n.heading)*re,n.h+.9,n.z+Math.cos(n.heading)*re);const ee=58+Math.min(n.speed,20)*.9+(n.sprint==="active"?7:0);if(le.fov=O?ee:We(le.fov,ee,3,D),le.updateProjectionMatrix(),k.pressed("view")){g.view=(g.view+1)%Pc.length,g.yawOff=0,g.pitchOff=0,i.audio.nav();const oe=M(".view-toast");oe.textContent=`Kamera: ${Pc[g.view].name}`,oe.classList.remove("show"),oe.offsetWidth,oe.classList.add("show")}}function M(D){return e.querySelector(D)}function T(D){n.paused=D,a=0,M(".pause").classList.toggle("show",D),R(),i.audio.setWind(0),D?i.audio.back():i.audio.select()}function R(){e.querySelectorAll(".pause-item:not(.result-item)").forEach((D,O)=>D.classList.toggle("selected",O===a))}function S(){const D=i.world.length;return n.lap===0?n.lastS-D:(n.lap-1)*D+n.lastS}function b(){if(n.place)return n.place;const D=S();let O=0;for(const k of c.list)(k.finished!=null||c.progress(k)>D)&&O++;return O+1}function P(D){if(!e||!l)return;const O=h==null?void 0:h.list[0];D.t==="s"&&O?O.net={...D,at:performance.now()}:D.t==="start"?(u=!0,i.go("ride",{character:t,online:!0})):(D.t==="closed"||D.t==="error")&&(V("Verbindung getrennt","Dein Gegner ist nicht mehr da"),i.audio.error(),l=!1,h==null||h.hide(),i.online.close())}function N(){const D=i.world.length,O=[{name:t.name,number:t.number,color:t.jersey,me:!0,t:n.finishTime,p:S()},...c.list.map(k=>({name:k.name,number:k.number,color:k.jersey,t:k.finished,p:c.progress(k)}))];O.sort((k,J)=>k.t!=null&&J.t!=null?k.t-J.t:k.t!=null?-1:J.t!=null?1:J.p-k.p),M(".result-list").innerHTML=O.map((k,J)=>`<div class="result-row ${k.me?"me":""}">
          <b>${J+1}.</b><i style="background:${k.color}"></i><span class="mini-plate"><span>${k.number}</span></span>
          <span class="result-name">${qe(k.name)}</span>
          <span class="result-time">${k.t!=null?Nn(k.t):`noch ${Math.max(1,Math.ceil((gi*D-k.p)/1e3*10)/10)} km`}</span>
        </div>`).join(""),M(".result-title").textContent=c.list.length?n.place===1?"Sieg! Du bist Erster!":`Ziel! Du bist ${n.place}.`:`Ziel! ${Nn(n.finishTime)}`,m=0,B(),M(".result").classList.add("show"),n.showResult=!0}function B(){e.querySelectorAll(".result-item").forEach((D,O)=>D.classList.toggle("selected",O===m))}function U(D,O,k=null,J=0){var ce;n.crash=1.8,n.speed=0,n.air=!1,n.cruise=!1,n.resumeS=k,n.resumeLat=J,(ce=e.querySelector(".cruise-badge"))==null||ce.classList.remove("on"),V(D,O),i.audio.error(),i.audio.noiseBurst(.25,{vol:.5,freq:180,type:"lowpass"}),i.input.rumble(1,450)}function V(D,O=""){const k=M(".banner");k.innerHTML=`<div>${D}</div>${O?`<small>${O}</small>`:""}`,k.classList.remove("show"),k.offsetWidth,k.classList.add("show")}return{enter({character:D,online:O}){t=D,l=!!O&&i.online.connected&&!!i.online.remote;const k=u;u=!1,e=In(`
        <div class="screen ride-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Runde</label><b class="lap">–</b></div>
            <div class="hud-box hud-zeit"><label>Zeit</label><b class="time">0:00.0</b></div>
            <div class="hud-box"><label>Bestzeit</label><b class="best">${Nn(t.bestLap)}</b></div>
          </div>
          <div class="hud-map">
            <div class="hud-rider">
              <div class="mini-plate"><span>${t.number}</span></div>
              <div><div class="rider-name">${qe(t.name)}</div><div class="rider-sub">Teststrecke · ${_a(i.mode)}</div></div>
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
            <i class="sprint-mark" style="left:${Be.sprint.abLadung*100}%"></i>
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
        </div>`),i.ui.append(e),setTimeout(()=>e==null?void 0:e.querySelectorAll(".controls-help").forEach(F=>F.classList.add("fade")),12e3),e.querySelectorAll(".pause-item:not(.result-item)").forEach((F,re)=>F.addEventListener("click",()=>{a=re,R(),i.input.inject("confirm")})),e.querySelectorAll(".result-item").forEach((F,re)=>F.addEventListener("click",()=>{m=re,B(),i.input.inject("confirm")})),o=new RM(i.world,M(".minimap")),i.bike.setPlate(t.number,t.name),i.bike.applyLook(t),i.bike.setTires(i.mode);const J=i.world.cx?.7:1.5,ce=J-(i.world.cx?1.3:2.2),le=l&&i.online.role==="guest",Se=i.world.poseAt(i.world.length-14,le?ce:J,r);Object.assign(n,{x:Se.x,z:Se.z,heading:Se.heading,speed:0,lean:0,steerVis:0,pitch:0,h:Se.h,lastS:Se.s,lap:0,lapStart:0,cps:new Set,time:0,paused:!1,shake:0,air:!1,vy:0,bothHeld:-9,crash:0,cruise:!1,sprint:"ready",sprintT:0,phase:"countdown",countdown:3,lastCount:4,raceTime:0,place:0,finishTime:null,showResult:!1});const He=i.mode;if(f.has(He)||f.set(He,new Ul(i,i.mode==="road"?Bp:[])),c=f.get(He),l){h==null||h.dispose();const F=i.online.remote.char;h=new Ul(i,[{...F,remote:!0,power:0,lane:le?J:ce}]),c=h,i.online.listen(P),d=0,k||setTimeout(()=>e&&V(`Online gegen ${F.name}`,"Viel Glück!"),300)}i.rivals=c,i.rideState=n,M(".hud-place").style.display=c.list.length?"":"none",i.bike.setTires(i.mode),c.reset(Se.s),this.placeBike(),g.view=0,g.yawOff=g.pitchOff=0,E(0,!0),i.fx.uFade.value=1,i.audio.setMusicLevel(.45)},placeBike(){const D=i.bike.root;D.position.set(n.x,n.h,n.z),D.rotation.set(-n.pitch,n.heading,n.lean),i.focus.set(n.x,n.h,n.z)},update(D){const O=i.input;if(i.fx.uFade.value=We(i.fx.uFade.value,0,3,D),i.fx.uBlur.value=We(i.fx.uBlur.value,0,5,D),x(D),O.touchRide=!n.paused&&!n.showResult,n.paused){O.pressed("up")||O.pressed("down")?(a=1-a,R(),i.audio.nav()):O.pressed("back")||O.pressed("start")?T(!1):O.pressed("confirm")&&(a===0?T(!1):(i.audio.select(),i.go("menu",{selectId:t.id}))),i.bike.update(0,0,0,n.steerVis),E(D);return}if(n.showResult){if(O.pressed("up")||O.pressed("down"))m=1-m,B(),i.audio.nav();else if(O.pressed("confirm")){i.audio.select(),m===0?(l&&(i.online.send({t:"start"}),u=!0),i.go("ride",{character:t,online:l})):i.go("menu",{selectId:t.id});return}}else if(O.pressed("pause")||O.pressed("start")){T(!0);return}if(n.phase==="countdown"){n.countdown-=D;const xe=Math.ceil(n.countdown);if(xe!==n.lastCount){n.lastCount=xe;const Xe=M(".countdown");Xe.textContent=xe>0?xe:"LOS!",Xe.classList.toggle("go",xe<=0),Xe.classList.remove("show"),Xe.offsetWidth,Xe.classList.add("show"),xe>0?i.audio.tone(520,.25,{type:"square",vol:.08}):(i.audio.tone(1040,.6,{type:"square",vol:.09}),i.input.rumble(.6,250))}xe<=0&&(n.phase="race")}else n.raceTime+=D;O.pressed("klingel")&&i.audio.klingel(),O.pressed("cruise")&&(n.cruise=!n.cruise,M(".cruise-badge").classList.toggle("on",n.cruise),n.cruise?i.audio.select():i.audio.back(),i.input.rumble(.25,60)),n.time+=D;const k=i.world,J=n.crash>0,ce=J?0:O.steer;O.l1&&O.r1&&(n.bothHeld=n.time);const le=Be.sprint,Se=O.pressed("x")||O.pressed("sprint");if(Se&&n.sprint==="active")n.sprint="charging",n.sprintT=n.sprintT/le.dauer*le.aufladen,i.audio.back();else if(Se&&n.phase==="race"&&(n.sprint==="ready"||n.sprint==="charging"&&n.sprintT/le.aufladen>=le.abLadung)){const xe=n.sprint==="ready"?1:n.sprintT/le.aufladen;n.sprint="active",n.sprintT=le.dauer*xe,i.audio.whoosh(1.2),i.audio.select(),i.input.rumble(.7,300),V("Sprint!")}n.sprint==="active"?(n.sprintT-=D,n.sprintT<=0&&(n.sprint="charging",n.sprintT=0)):n.sprint==="charging"&&(n.sprintT+=D*(1+(le.windschattenBonus-1)*(n.draft||0)),n.sprintT>=le.aufladen&&(n.sprint="ready",i.audio.nav()));const He=n.sprint==="active";i.bike.stand=He&&n.phase!=="finished"?1:0;let F=O.brake>.1?0:n.cruise||He?1:O.throttle,re=O.brake;(n.phase==="countdown"||J)&&(F=0),n.phase==="finished"&&(F=0,re=n.speed>4?.25:0),k.groundAt(n.x,n.z,s);const ee=Math.sin(n.heading),oe=Math.cos(n.heading),z=k.groundAt(n.x+ee*.6,n.z+oe*.6,r).h,q=k.groundAt(n.x-ee*.6,n.z-oe*.6,r).h,ae=Math.atan2(z-q,1.2);n.pitch=We(n.pitch,ae,12,D);const ne=n.speed,G=Be.rollen[i.mode==="cx"?"cx":"rennrad"],ie=s.surface==="road"?G.asphalt:s.surface==="gravel"?G.schotter:G.wiese,I=He?Be.sprint.kraft:1,ue=Ep(t==null?void 0:t.groupset).kraft||1,te=Math.min(Be.riderPower*ue*I/Math.max(ne,2.5),340*I)*F,me=c.draftFor(n.x,n.z);n.draft=We(n.draft||0,me.strength,5,D),me.rival&&(n.draftName=me.rival.name);const ge=i.mode==="tt"?Be.zeitfahren.luftwiderstand:1,Ue=.5*1.2*.36*ge*ne*ne*(1-Be.windschatten*n.draft),_e=re*650,L=n.air?0:Math.sin(n.pitch);let w=(te-Ue-(n.air?0:ie*Go*Rc)-Go*Rc*L)/Go;w-=ne>.01?_e/Go:0,n.speed=Math.max(0,ne+w*D),n.speed<.05&&F<.05&&Math.sin(n.pitch)>.02&&(n.speed=0);const X=Math.min(1.5,n.speed*.9+.15)*(1-.55*dt(n.speed/16,0,1));n.heading-=ce*X*D,n.x+=Math.sin(n.heading)*n.speed*D,n.z+=Math.cos(n.heading)*n.speed*D;for(const xe of c.list){const Xe=n.x-xe.x,H=n.z-xe.z,ye=Math.hypot(Xe,H);ye<.9&&ye>.001&&(n.x=xe.x+Xe/ye*.9,n.z=xe.z+H/ye*.9,n.speed*=.98)}if(k.solid)for(const xe of k.solid){const Xe=n.x-xe.x,H=n.z-xe.z,ye=Math.hypot(Xe,H),Q=xe.r+.5;ye<Q&&ye>.001&&(n.x=xe.x+Xe/ye*Q,n.z=xe.z+H/ye*Q,n.speed*=.9)}const se=Math.hypot(n.x,n.z);se>830&&(n.x*=830/se,n.z*=830/se,n.speed*=.9);const j=k.groundAt(n.x,n.z,s).h,K=k.nearest(n.x,n.z);if(!n.air&&k.drops.length&&K.found&&K.dist<k.rhArr[K.i]+1.2&&n.speed>1.5)for(const xe of k.drops){const Xe=xe.s-k.ds-.2;n.lastS<Xe&&K.s>=Xe&&K.s<xe.s+3&&(n.air=!0,n.vy=2.2+n.speed*.12,n.pitch=.32,i.audio.whoosh(.9),i.input.rumble(.3,80))}if(n.air?(n.vy-=Rc*D,n.h+=n.vy*D,n.h<=j&&(n.h=j,n.air=!1,n.time-n.bothHeld<.3?(V("Sauber gelandet!"),i.audio.select(),i.input.rumble(.5,120),n.speed*=.92):U("Sturz!",`Beim Landen ${pt("LB")} + ${pt("RB")} gleichzeitig halten`))):n.h=j,!n.air&&!J&&k.rocks){for(const xe of k.rocks)if(Math.hypot(n.x-xe.x,n.z-xe.z)<xe.r+.3){const Xe=-Math.sign(xe.lat)*Math.min(.6,k.rhArr[xe.i]*.5);U("Autsch, ein Felsbrocken!","Fahr um die Steine herum",xe.s+xe.r+1.5,Xe);break}}if(J&&(n.crash-=D,n.speed=0,n.crash<=0)){const xe=k.poseAt(n.resumeS??(K.found?K.s:n.lastS),n.resumeS!=null?n.resumeLat:0,r);n.resumeS=null,n.x=xe.x,n.z=xe.z,n.heading=xe.heading,n.h=k.groundAt(n.x,n.z,s).h}s.surface==="grass"&&n.speed>1?(n.h+=Math.sin(n.time*30)*.01*Math.min(1,n.speed/6),n.shake=1):n.shake=0,n.lean=We(n.lean,J?1.35:ce*dt(n.speed/9,0,1)*.42,J?10:6,D),n.air&&(n.pitch=We(n.pitch,Math.atan2(n.vy,Math.max(n.speed,3))*1.1,5,D)),n.steerVis=We(n.steerVis,ce*(1-dt(n.speed/14,0,.85)),10,D);let Ee=0;F>.05?(Ee=Math.max(n.speed/jt/PM,3*F),i.audio.freewheel(D,0)):i.audio.freewheel(D,Math.min(55,n.speed/(2*Math.PI*jt)*24)),this.placeBike(),i.bike.update(D,n.speed,Ee,n.steerVis),l&&(d-=D,d<=0&&(d=1/15,i.online.send({t:"s",x:n.x,z:n.z,h:n.h,heading:n.heading,pitch:n.pitch,lean:n.lean,speed:n.speed,crank:Ee,steer:n.steerVis,p:S(),f:n.finishTime})));const Me=n.speed*3.6;i.audio.setWind(dt(n.speed/15,0,1)*(1-.5*n.draft)),c.showDraft(me.rival,me.strength,D),M(".draft-badge").classList.toggle("on",n.draft>.08),n.draft>.08&&(M(".draft-name").textContent=`hinter ${n.draftName} · −${Math.round(Be.windschatten*n.draft*100)} % Wind`,M(".draft-meter i").style.width=`${Math.round(n.draft*100)}%`),i.fx.uLines.value=0,E(D),n.shake&&(i.camera.position.y+=(Math.random()-.5)*.02);const Ye=k.nearest(n.x,n.z);if(Ye.found&&Ye.dist<25){const xe=Ye.s,Xe=k.length;for(const H of Vf)xe>H*Xe&&xe<H*Xe+40&&n.cps.add(H);if(n.lastS>Xe-60&&xe<60){if(n.lap===0)n.lap=1,n.lapStart=n.time,n.cps.clear(),V(`Runde 1 von ${gi}`,"Die Zeit läuft!"),i.audio.lap();else if(n.cps.size===Vf.length){n.lastS=xe;const H=n.time-n.lapStart,ye=t.bestLap==null||H<t.bestLap;if(ye&&(t={...Zi().find(he=>he.id===t.id)||t,bestLap:H},Op(t),M(".best").textContent=Nn(H)),n.lap++,n.lapStart=n.time,n.cps.clear(),n.lap>gi&&n.phase==="race")n.place=b(),n.finishTime=n.raceTime,n.phase="finished",n.cruise=!1,M(".cruise-badge").classList.remove("on"),V(c.list.length?n.place===1?"Sieg!":`Platz ${n.place}`:"Ziel!",Nn(n.finishTime)),i.audio.success(),i.input.rumble(.8,400),y(n.x,n.h,n.z),i.mode==="tt"&&M(".hud-zeit").classList.add("stoppuhr"),setTimeout(()=>e&&n.phase==="finished"&&N(),2200);else{const Q=n.lap===gi&&n.phase==="race";V(ye?"Neue Bestzeit!":Q?"Letzte Runde!":`Runde ${n.lap} von ${gi}`,Nn(H)),i.audio.lap(),i.input.rumble(.5,200)}}}n.lastS=xe}M(".speedo-val b").textContent=Math.round(Me);let de="";if(n.air)de=`Jetzt ${pt("LB")} + ${pt("RB")}!`;else if(k.drops.length&&K.found&&!J)for(const xe of k.drops){const Xe=xe.s-K.s;Xe>0&&Xe<30&&(de=`Drop in ${Math.ceil(Xe)} m – ${pt("LB")} + ${pt("RB")} zum Landen`)}if(de!==n.hintShown){n.hintShown=de;const xe=M(".drop-hint");xe.innerHTML=de,xe.classList.toggle("show",!!de),xe.classList.toggle("now",n.air)}const we=M(".sprint-bar"),Ge=n.sprint==="active"?n.sprintT/le.dauer:n.sprint==="charging"?n.sprintT/le.aufladen:1;M(".sprint-fill").style.width=`${(Ge*100).toFixed(1)}%`;const je=n.sprint==="charging"&&Ge>=le.abLadung;we.className=`sprint-bar ${n.sprint}${je?" usable":""}`;const Le=i.control==="keys"?'<span class="btn key-space">Leertaste</span>':pt("X"),tt=n.sprint==="active"?`${Math.ceil(n.sprintT)} s`:je?`${Math.round(Ge*le.dauer)} s ${Le}`:n.sprint==="charging"?"lädt …":`bereit ${Le}`;tt!==n.sprintInfo&&(n.sprintInfo=tt,M(".sprint-info").innerHTML=tt),M(".speedo-fill").style.strokeDasharray=`${dt(Me/70,0,1)*75} 100`,c.update(D,n.phase!=="countdown",{progress:S(),lateral:Ye.found?Ye.lateral:99},gi*k.length,n.raceTime),M(".place").textContent=n.phase==="countdown"?"–":`${b()}/${c.list.length+1}`,M(".lap").textContent=n.lap?`${Math.min(n.lap,gi)}/${gi}`:"–",M(".time").textContent=n.phase==="finished"?Nn(n.finishTime):Nn(n.raceTime),o.draw(n.x,n.z,n.heading,n.lap&&n.phase!=="finished"?n.lastS:null,c.list)},exit(){i.input.touchRide=!1,i.bike.stand=0,_(),c.hide(),l&&!u&&(i.online.close(),i.online.listen(null),h==null||h.dispose(),h=null),e.remove(),e=null,i.audio.setWind(0),i.audio.freewheel(0,0),i.fx.uLines.value=0;const D=i.world.nearest(n.x,n.z);i.npc.s=D.found?D.s:0}}}document.title=Be.gameName;const jp=document.documentElement.style;jp.setProperty("--gold",Be.colors.gold);jp.setProperty("--accent",Be.colors.accent);const Wf=()=>new Promise(i=>setTimeout(i,30));async function IM(){var p;const i=document.getElementById("ui"),e=document.getElementById("loading");await Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 64px "Cinzel"')]).catch(()=>{}),await Wf(),await Wf();const t=new oy({antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Xf,t.toneMapping=Wl,t.toneMappingExposure=Be.exposure,document.getElementById("game").appendChild(t.domElement);const n=new pn(50,window.innerWidth/window.innerHeight,.1,6e3),s=await N1(),r=new Ju(t,"road",s),a=new Pp;r.scene.add(a.root);const o=t.getDrawingBufferSize(new fe),c=new _n(o.x,o.y,{type:Vn,samples:4}),l=new rb(t,c),h=new ob(r.scene,n);l.addPass(h);const u=new qs(new fe(window.innerWidth/2,window.innerHeight/2),.5,.55,.92);l.addPass(u);const d=new Od(j1);l.addPass(d),l.addPass(new lb);const f={renderer:t,camera:n,world:r,bike:a,composer:l,ui:i,input:new W1,audio:new X1,fx:d.uniforms,focus:new C,npc:{s:0,speed:6,lateral:1.5,pedal:!0},mode:"road",online:new Jb,cloneRider:()=>null,worlds:{road:r},useWorld(y){this.worlds[y]||(this.worlds[y]=new Ju(t,y,s,y==="tt"?this.dorf:null));const _=this.worlds[y];_!==this.world&&(this.world.scene.remove(this.bike.root),_.scene.add(this.bike.root),this.world=_,h.scene=_.scene,this.npc.s=_.length*.1,this.npc.lateral=_.cx?.5:1.5)},async prepareWorld(y){y==="tt"&&!this.dorf&&(this.dorf=await z1()),this.useWorld(y)},time:0,scenes:{},current:null,currentName:"",go(y,_){var x;(x=this.current)==null||x.exit(),this.currentName=y,this.current=this.scenes[y],this.current.enter(_||{})}};f.scenes={title:Q1(f),transition:tM(f),mode:w1(f),menu:sM(f),creator:CM(f),ride:LM(f),lobby:E1(f),control:A1(f),minigame:aM(f),story:SM(f)},_h(f,Ir()||Dp(f),!!Ir()),f.controlChosen=Ir(),window.__game=f;function m(){const y=window.innerWidth,_=window.innerHeight;!y||!_||(t.setSize(y,_),l.setSize(y,_),n.aspect=y/_,n.updateProjectionMatrix(),d.uniforms.uAspect.value=y/_)}window.addEventListener("resize",m),m(),window.addEventListener("keydown",y=>{f.audio.unlock(),y.code==="KeyM"&&f.currentName!=="creator"&&f.audio.toggleMute()}),window.addEventListener("pointerdown",()=>f.audio.unlock()),f.go("title");{const y=(p=document.querySelector('script[type="module"][src*="assets/index-"]'))==null?void 0:p.getAttribute("src"),_=async()=>{var x;try{const M=(x=(await(await fetch(`./index.html?v=${Date.now()}`,{cache:"no-store"})).text()).match(/assets\/index-[^"]+\.js/))==null?void 0:x[0],T=["title","mode","menu","control"].includes(f.currentName);M&&y&&!y.endsWith(M)&&T&&location.reload()}catch{}};setInterval(_,6e4),document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"&&_())}window.innerWidth&&window.innerHeight&&l.render(0),e.classList.add("done"),setTimeout(()=>e.remove(),900);let g=performance.now();function v(y){requestAnimationFrame(v);const _=Math.min(.05,(y-g)/1e3);g=y,f.time+=_,f.input.update(_),f.input.pressed("any")&&(f.audio.unlock(),f.audio.startMusic()),f.current.update(_),f.world.update(_,f.focus,n,f.time),d.uniforms.uTime.value=f.time,window.innerWidth&&window.innerHeight&&l.render(_)}requestAnimationFrame(v)}IM();
