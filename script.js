/* =============================================================================
   نظام توثيق الأداء — جمعية فرقان لتحفيظ القرآن الكريم بالطائف
   Vanilla JS / HTML / CSS — بدون أدوات بناء.
   كل البيانات في قاعدة Supabase (الرابط والمفتاح أسفل). المتصفح يحتفظ بنسخة
   مؤقتة فقط لتسريع الفتح، وتُحدَّث من القاعدة عند كل دخول.
   ============================================================================= */

/* ---- مكتبة رمز QR (qrcode-generator 1.4.4، Kazuhiko Arase، رخصة MIT) — مضمّنة لرابط دخول الجهات ---- */
// Copyright (c) 2009 Kazuhiko Arase
// Licensed under the MIT license:
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1}))},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(t,r){var e=n("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}((function(){return qrcode}));


/* =============================== Design tokens (JS mirror of CSS vars) ===== */
/* Brand palette — keep in sync with the CSS custom properties in style.css */
let ROSE = "#6b2337", ROSE_DARK = "#521a2a";
let INK = "#2E2430", SUBTLE = "#9c8b92",
      BORDER = "#eddde2", GREEN = "#2E8B67", GREEN_BG = "#e7f5ee", GOLD = "#D89A57",
      GOLD_BG = "#fbf0e1", GRAY_BG = "#f3edef", BLUE = "#8B4A73", BLUE_BG = "#f3e9ef",
      DANGER = "#D65B57", DANGER_BG = "#fcebe9";

const ASSOCIATION_LOGO = "data:image/png;base64,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";

/* Option lists ------------------------------------------------------------- */
/* Section accent shades — kept within the brand's burgundy/gold/wine family. */
const PALETTE = [
  { bg: "#f7e9ee", fg: "#C24A6C" }, { bg: "#fbf0e1", fg: "#8a6a35" },
  { bg: "#f3e9ef", fg: "#8B4A73" }, { bg: "#f7ecef", fg: "#9c3a56" },
  { bg: "#f3edef", fg: "#6b5a62" },
];

const DEFAULT_SECTIONS = [
  { id: "basic", label: "البيانات الأساسية" },
  { id: "goals", label: "الأهداف والمستهدفات" },
  { id: "kpi", label: "مؤشرات الأداء" },
  { id: "programs", label: "الأعمال والبرامج" },
  { id: "tools", label: "أدوات القياس" },
  { id: "analysis", label: "تحليل النتائج" },
  { id: "strengths", label: "نقاط القوة" },
  { id: "challenges", label: "الصعوبات والتحديات" },
  { id: "improvement", label: "فرص التحسين" },
  { id: "initiatives", label: "المبادرات والممارسات النوعية" },
  { id: "impact", label: "الأثر وقصص النجاح" },
  { id: "recommendations", label: "التوصيات" },
  { id: "nextplan", label: "خطة الفترة القادمة" },
  { id: "evidence", label: "الشواهد والمرفقات" },
  { id: "review", label: "المراجعة والاعتماد" },
];
// SECTIONS يبدأ بنسخة من القائمة الافتراضية، ثم يُستبدل بالقائمة الفعلية
// المُدارة (إدارة أقسام التقرير) بعد تحميلها من القاعدة أو التخزين المحلي —
// applyReportSectionDefs() هو ما يعيد بناءه.
let SECTIONS = DEFAULT_SECTIONS.map((s) => ({ ...s }));

const PHASES = [
  { id: "phase1", label: "التأسيس", sectionIds: ["basic", "goals", "kpi"] },
  { id: "phase2", label: "التنفيذ", sectionIds: ["programs", "tools", "analysis"] },
  { id: "phase3", label: "التقييم", sectionIds: ["strengths", "challenges", "improvement"] },
  { id: "phase4", label: "الأثر والتميز", sectionIds: ["initiatives", "impact", "recommendations"] },
  { id: "phase5", label: "الإغلاق والاعتماد", sectionIds: ["nextplan", "evidence", "review"] },
];

const PERIOD_TYPES = ["شهري", "ربع سنوي", "فصلي", "نصف سنوي", "سنوي", "تقرير برنامج أو مشروع", "صيفي"];
const PERIOD_TYPES_DEFAULT = PERIOD_TYPES.slice();
// "شهري" و"فصلي" مرتبطتان بحقلَي "الشهر" و"الفصل" (يظهران فقط عند اختيارهما)،
// فتبقيان دائمًا بالقائمة بأسمائهما ولا تُحذفان/تُعاد تسميتهما. الباقي حر بالكامل.
const PERIOD_TYPES_LOCKED = ["شهري", "فصلي"];
// تُعدَّل المصفوفة نفسها "في مكانها" (لا إعادة إسناد) لأن تعريف حقل periodType
// بالبيانات الأساسية يحمل مرجعها مباشرة، فيتحدّث فورًا بكل مكان.
function applyPeriodTypes(list) {
  if (!Array.isArray(list) || !list.length) list = PERIOD_TYPES_DEFAULT.slice();
  let next = Array.isArray(list) ? list.map((x) => String(x == null ? "" : x).trim()).filter(Boolean) : [];
  next = next.filter((x, i) => next.indexOf(x) === i);
  PERIOD_TYPES_LOCKED.forEach((n) => { if (!next.includes(n)) next.push(n); });
  if (!next.length) next = PERIOD_TYPES_DEFAULT.slice();
  PERIOD_TYPES.splice(0, PERIOD_TYPES.length, ...next);
}
function periodOptionsFor(reports) {
  const extra = [];
  (reports || []).forEach((r) => { const v = r && r.sections && r.sections.basic && r.sections.basic.data && r.sections.basic.data.periodType; if (v && !PERIOD_TYPES.includes(v) && !extra.includes(v)) extra.push(v); });
  return PERIOD_TYPES.concat(extra);
}
// السنوات تبدأ من 1448هـ (بداية المنصة) — التقارير القديمة بسنة قبلها تحتفظ بقيمتها
const FIRST_HIJRI_YEAR = 1448;
const HIJRI_YEARS = Array.from({ length: 23 }, (_, i) => `${FIRST_HIJRI_YEAR + i}هـ`);
const MONTHS = ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"];

const STRATEGIC_GOALS_FALLBACK = ["تحسين جودة الاختبارات وموثوقيتها", "رفع كفاءة إجراءات القياس والتقويم", "تعزيز الحوكمة والامتثال في العمليات"];
const OPERATIONAL_GOALS_FALLBACK = ["تطوير أدوات القياس الداخلية", "تحسين زمن إصدار النتائج", "رفع نسبة رضا المستفيدات"];
const GOAL_LEVELS = ["تحقق بالكامل", "تحقق بدرجة مرتفعة", "تحقق جزئيًا", "لم يتحقق", "لم يبدأ", "أجل بقرار"];
const EVIDENCE_TYPES = ["رقم مؤشر", "نتيجة أداة قياس", "رابط شاهد", "سجل رسمي", "تقرير متابعة"];
const GOAL_LEVEL_PERCENTAGE = { "تحقق بالكامل": 100, "تحقق بدرجة مرتفعة": 75, "تحقق جزئيًا": 50, "لم يتحقق": 0, "لم يبدأ": 0, "أجل بقرار": 0 };

function goalLevelMeta(level) {
  if (level === "تحقق بالكامل" || level === "تحقق بدرجة مرتفعة") return { color: GREEN, bg: GREEN_BG };
  if (level === "تحقق جزئيًا") return { color: GOLD, bg: GOLD_BG };
  if (level === "أجل بقرار") return { color: "#7a5a63", bg: "#f2e9ea" };
  if (level === "لم يتحقق") return { color: DANGER, bg: DANGER_BG };
  return { color: SUBTLE, bg: GRAY_BG };
}
function evidenceAnswerPlaceholder(type) {
  if (type === "رقم مؤشر") return "اكتبي اسم المؤشر أو رقمه";
  if (type === "نتيجة أداة قياس") return "اكتبي نتيجة الأداة";
  if (type === "رابط شاهد") return "https://...";
  if (type === "سجل رسمي") return "اسم السجل أو رقمه";
  if (type === "تقرير متابعة") return "اسم تقرير المتابعة أو تاريخه";
  return "اكتبي إجابة الدليل";
}

const INDICATOR_CATEGORIES = ["كفاءة", "فاعلية", "جودة", "إنتاجية", "رضا", "أثر", "التزام", "نمو", "زمن إنجاز", "تكلفة"];
const INDICATOR_DIRECTIONS = ["تصاعدي: الارتفاع أفضل", "تنازلي: الانخفاض أفضل", "ضمن نطاق محدد"];
const INDICATOR_NATURE = ["تراكمي", "غير تراكمي"];
const MEASUREMENT_FREQUENCIES = ["أسبوعي", "شهري", "ربع سنوي", "فصلي", "نصف سنوي", "سنوي"];
const MEASUREMENT_UNITS = ["عدد", "نسبة", "متوسط", "مدة", "درجة", "ريال"];
const CAUSE_TYPES = ["داخلي", "خارجي"];
const NEW_INDICATOR_LABEL = "مؤشر جديد غير موجود في القائمة";

function computeIndicatorStatus(row) {
  const target = Number(row.target), actual = Number(row.actual);
  const hasData = row.target !== "" && row.target != null && row.actual !== "" && row.actual != null && !isNaN(target) && !isNaN(actual);
  if (!hasData) return { key: "noData", emoji: "⚪", label: "لا توجد بيانات", color: SUBTLE, bg: GRAY_BG, ratio: null };
  let ratio;
  if (row.direction && row.direction.startsWith("تنازلي")) ratio = target === 0 ? (actual === 0 ? 1 : 0) : target / actual;
  else if (row.direction && row.direction.startsWith("ضمن نطاق")) ratio = target === 0 ? (actual === 0 ? 1 : 0) : 1 - Math.abs(actual - target) / Math.abs(target);
  else ratio = target === 0 ? (actual >= 0 ? 1 : 0) : actual / target;
  if (ratio >= 1) return { key: "achieved", emoji: "🟢", label: "متحقق", color: GREEN, bg: GREEN_BG, ratio };
  if (ratio >= 0.9) return { key: "close", emoji: "🟡", label: "قريب من المستهدف", color: GOLD, bg: GOLD_BG, ratio };
  if (ratio >= 0.7) return { key: "needsAction", emoji: "🟠", label: "يحتاج تدخلاً", color: "#c9863a", bg: "#fdeee0", ratio };
  return { key: "struggling", emoji: "🔴", label: "متعثر", color: DANGER, bg: DANGER_BG, ratio };
}
// صف مؤشر للعرض في اللوحات: المستهدف من «إدارة مؤشرات الأداء» (وإلا من التقرير نفسه)،
// والنسبة واللون من نفس حساب حالة المؤشر (يراعي الاتجاه التصاعدي/التنازلي).
// المطابقة بالاسم بعد حذف المسافات الزائدة (اسم بمسافة في آخره ما يضيع مستهدفه)
function findIndicatorDef(name) { const n = String(name || "").trim(); return n ? (S.indicatorDefinitions || []).find((x) => String(x.name || "").trim() === n) || null : null; }
function indicatorRowView(row) {
  const def = findIndicatorDef(row.name);
  const r = resolveIndicatorRow(row, def);
  if ((r.target === "" || r.target == null) && row.target !== "" && row.target != null) r.target = row.target;
  const st = computeIndicatorStatus(r);
  const pct = st.ratio == null || !isFinite(st.ratio) ? null : Math.round(st.ratio * 100);
  return { target: r.target !== "" && r.target != null ? r.target : "—", actual: row.actual !== "" && row.actual != null ? row.actual : "—", pct, pctText: pct == null ? "—" : pct + "٪", color: st.color };
}
function computeDeviationAmount(row) {
  const target = Number(row.target), actual = Number(row.actual);
  if (isNaN(target) || isNaN(actual)) return null;
  if (row.direction && row.direction.startsWith("تنازلي")) return actual - target;
  return target - actual;
}
// خط الأساس منفصل عن المتحقق: = المتحقق في آخر تقرير معتمد/مكتمل سابق لنفس الوحدة ونفس المؤشر؛
// وإن لم يوجد فالقيمة اليدوية (row.baseline) وقد تبقى فارغة.
const BASELINE_DONE_STATUSES = ["approved", "completed"];
function indicatorPrevBaseline(unitId, report, name) {
  const n = String(name || "").trim();
  if (!unitId || !n) return null;
  const cur = (report && report.createdAt) || Date.now();
  let best = null;
  ensureUnitReportsLoaded(unitId).forEach((r) => {
    if (!r || r.id === (report && report.id) || !BASELINE_DONE_STATUSES.includes(r.status) || (r.createdAt || 0) >= cur) return;
    const row = (r.sections?.kpi?.data?.indicators || []).find((x) => String(x.name || "").trim() === n && x.actual !== "" && x.actual != null);
    if (row && (!best || (r.createdAt || 0) > (best.report.createdAt || 0))) best = { report: r, value: row.actual };
  });
  return best;
}
function resolveIndicatorRow(row, def) {
  return { ...row, category: def?.category || "", direction: def?.direction || "", nature: def?.nature || "",
    frequency: def?.frequency || "", unit: def?.unit || "", target: def?.target ?? "",
    dataSource: def?.dataSource || "", calculationMethod: def?.calculationMethod || "" };
}
function computeResponseRate(sampleSize, respondentsCount) {
  const s = Number(sampleSize), r = Number(respondentsCount);
  if (!s || isNaN(s) || isNaN(r)) return null;
  return Math.round((r / s) * 100);
}

const REPORTING_TYPES_BASE = ["قسم", "وحدة", "مكتب", "مركز"];
const OFFICE_NAMES_BASE = ["مكتب الداخل", "مكتب الحوية"];
const TERM_OPTIONS_BASE = ["الأول", "الثاني", "الثالث", "صيفي"];
const WORK_TYPES_BASE = ["حلقة قرآنية", "برنامج تعليمي", "برنامج تربوي", "دورة تدريبية", "لقاء", "ورشة عمل", "زيارة إشرافية", "اختبار", "مبادرة", "مشروع", "دراسة", "استبانة", "اجتماع", "خدمة للمستفيدات", "إنتاج دليل أو أداة"];
const DELIVERY_MODES = ["حضوري", "عن بُعد", "مدمج"];
const EXECUTION_STATUSES = ["مكتمل", "مستمر", "متعثر", "مؤجل", "ملغى"];
// "وحدة العدّ" لإحصائية الإنجاز — ماذا يُعدّ في هذا العمل (مثال: زيارة إشرافية ← مركز)
const COUNT_UNITS_BASE = ["مركز", "حلقة", "طالبة", "معلمة", "موظفة", "زيارة", "لقاء", "دورة", "اختبار", "أسرة"];
// حقلا إحصائية الإنجاز بقسم الأعمال والبرامج — يُضافان تلقائيًا حتى لو كانت حقول
// القسم مخصّصة ومحفوظة مسبقًا من صفحة إدارة الحقول (انظري applyFieldSchemaOverrides).
const PROGRAM_ACHIEVEMENT_FIELDS = [
  { id: "countUnit", type: "expandableSelect", label: "وحدة العدّ (ماذا نعدّ؟)", baseOptions: COUNT_UNITS_BASE, customKey: "customCountUnits", otherLabel: "أخرى", placeholder: "مثال: مركز", rowGroup: "achieve", subheadBefore: "إحصائية الإنجاز" },
  { id: "achievedCount", type: "number", label: "العدد المنجز فعليًا", placeholder: "مثال: عدد المراكز التي تمت زيارتها", rowGroup: "achieve" },
];
const STRENGTH_AREAS_BASE = ["القيادة", "التخطيط", "الكادر", "جودة التعليم", "البرامج", "البيئة", "التقنية", "التواصل", "الشراكات", "رضا المستفيدات", "سرعة الإنجاز", "الابتكار", "قياس الأثر"];
const CONTINUITY_OPTIONS = ["مستمرة", "مرتبطة بفترة"];
const EVIDENCE_TYPES_LIST = ["صورة", "كشف حضور", "نتيجة استبانة", "تقرير مالي", "محضر اجتماع", "رابط لوحة مؤشرات", "نموذج من المخرجات", "خطاب", "قصة نجاح", "فيديو موثق وفق السياسة", "ملف آخر"];
const CONFIDENTIALITY_LEVELS = ["متاح في التقرير العام", "متاح للإدارة فقط", "سري ولا يظهر إلا للمخولين"];
const YES_NO_OPTIONS = ["نعم", "لا"];
const CHALLENGE_AREAS_BASE = ["الموظفات", "الإجراءات", "الأنظمة التقنية", "الميزانية", "التجهيزات", "المبنى", "الحضور", "التواصل", "المستفيدات", "البيانات", "الصلاحيات", "التنسيق بين الأقسام", "الشراكات"];
const CHALLENGE_SEVERITY = ["منخفض", "متوسط", "مرتفع", "حرج"];
const CHALLENGE_SCOPE = ["داخل الوحدة", "مشتركة مع وحدة أخرى", "تحتاج تدخل القسم", "تحتاج قرار إدارة التعليم النسائي", "تحتاج قرار الإدارة العليا", "مرتبطة بجهة خارجية"];
const IMPROVEMENT_EASE_OPTIONS = ["سهلة", "متوسطة", "معقدة"];
const IMPROVEMENT_PRIORITY_OPTIONS = ["عاجلة", "عالية", "متوسطة", "منخفضة"];
const INITIATIVE_ENTRY_TYPES = ["مبادرة جديدة", "ممارسة ناجحة", "فكرة قيد الدراسة", "تجربة أولية", "نموذج قابل للتعميم", "تطوير إجراء قائم"];
const INITIATIVE_STAGES = ["فكرة", "تصميم", "تجربة", "تنفيذ", "تقييم", "تطوير", "تعميم", "توقفت"];
const MEASUREMENT_TOOL_TYPES = ["استبانة", "اختبار قبلي وبعدي", "اختبار تحصيلي", "بطاقة ملاحظة", "قائمة تحقق", "مقابلة", "مجموعة تركيز", "تحليل سجلات", "تحليل شكاوى ومقترحات", "قياس رضا", "قياس أثر", "تقييم أداء"];
const TOOL_RESULT_QUALITY = ["كافية لاتخاذ قرار", "مؤشر أولي يحتاج تعزيز", "غير كافية بسبب ضعف الاستجابة", "تحتاج إلى إعادة تطبيق", "تحتاج إلى أداة إضافية"];
const COMPARISON_JUDGMENTS = ["تحسن", "ثابت", "تراجع", "لا توجد بيانات للمقارنة"];
const CHANGE_REASONS = ["تحسن التخطيط", "زيادة الكادر", "تدريب الموظفات", "تطوير الإجراءات", "زيادة المستفيدات", "تغير وقت التنفيذ", "نقص الكادر", "انخفاض الحضور", "ظروف موسمية", "ضعف الموارد"];

const IMPACT_TYPES = ["تعليمي", "تربوي", "سلوكي", "اجتماعي", "مهني", "تقني", "مؤسسي", "مالي", "أثر في الأسرة", "أثر في فئة خاصة"];
const RECOMMENDATION_SOURCES = ["نتيجة مؤشر", "أداة قياس", "صعوبة", "فرصة تحسين", "قصة أثر", "ملاحظة إشرافية", "شكوى متكررة", "تحليل بيانات", "أخرى"];
const RECOMMENDATION_LEVELS = ["تنفذها الوحدة", "تنفذها إدارة القسم", "تحتاج تعاون عدة أقسام", "تحتاج قرار إدارة التعليم", "تحتاج قرار الإدارة العليا"];
const RECOMMENDATION_PRIORITIES = ["عاجلة", "عالية", "متوسطة", "منخفضة"];

/* =============================== محرك الأقسام الديناميكية (تجريبي) =============
 * قسم واحد فقط ("التوصيات") مُشغَّل عليه حاليًا كتجربة أولى، عشان نتأكد إن
 * المحرك العام يعيد إنتاج نفس النموذج المخصص القديم قبل ما نعمّمه على باقي
 * الأقسام. الشكل هنا (fields schema) هو تمامًا الشكل اللي بيُخزَّن لاحقًا في
 * جدول report_sections بالقاعدة (عمود fields_schema) بدل ما يكون كود ثابت.
 * أنواع الحقول المدعومة الآن: text, textarea, number, date, select, radio.
 * (الحقول المحسوبة تلقائيًا، والقوائم القابلة للتوسعة بـ"أخرى"، والحدود
 * الدنيا/القصوى لعدد العناصر — غير مدعومة بعد في هذا المحرك العام). */
const SECTION_FIELD_SCHEMAS = {
  recommendations: {
    arrayKey: "recommendations",
    itemLabel: "التوصية",
    fields: [
      { id: "source", type: "select", label: "مصدر التوصية", required: true, options: RECOMMENDATION_SOURCES, placeholder: "اختاري مصدر التوصية" },
      { id: "level", type: "select", label: "مستوى التوصية", required: true, options: RECOMMENDATION_LEVELS, placeholder: "اختاري مستوى التوصية" },
      { id: "text", type: "textarea", label: "نص التوصية", required: true, placeholder: "نص التوصية بوضوح" },
      { id: "evidenceBasis", type: "textarea", label: "الدليل الذي بنيت عليه" },
      { id: "expectedResult", type: "textarea", label: "النتيجة المتوقعة" },
      { id: "priority", type: "radio", label: "الأولوية", options: RECOMMENDATION_PRIORITIES },
      { id: "responsibleParty", type: "text", label: "الجهة المسؤولة", placeholder: "الجهة المسؤولة عن التنفيذ" },
      { id: "supportingParties", type: "text", label: "الجهات المساندة", placeholder: "الجهات المساندة، إن وجدت" },
      { id: "proposedDuration", type: "text", label: "المدة المقترحة", placeholder: "مثال: شهر واحد" },
      { id: "expectedCost", type: "text", label: "التكلفة المتوقعة", placeholder: "مثال: 2000 ريال أو بدون تكلفة" },
      { id: "indicator", type: "text", label: "مؤشر تحقق التوصية", placeholder: "كيف ستعرفين أن التوصية تحققت؟" },
    ],
  },
  programs: {
    arrayKey: "programs",
    itemLabel: "العمل / البرنامج",
    fields: [
      { id: "workType", type: "expandableSelect", label: "نوع العمل", required: true, baseOptions: WORK_TYPES_BASE, customKey: "customWorkTypes", otherLabel: "أخرى", placeholder: "اختاري نوع العمل" },
      { id: "name", type: "text", label: "اسم العمل", required: true, placeholder: "اسم العمل أو البرنامج", subheadBefore: "بيانات العمل" },
      { id: "goal", type: "textarea", label: "الهدف منه", placeholder: "ما الهدف من هذا العمل؟" },
      { id: "targetGroup", type: "text", label: "الفئة المستهدفة", placeholder: "مثال: طالبات المرحلة المتوسطة" },
      { id: "targetCount", type: "number", label: "العدد المستهدف", placeholder: "0", rowGroup: "target" },
      { id: "actualBeneficiaries", type: "number", label: "عدد المستفيدات الفعلي", placeholder: "0", rowGroup: "target" },
      ...PROGRAM_ACHIEVEMENT_FIELDS,
      { id: "startDate", type: "date", label: "تاريخ البداية", rowGroup: "dates" },
      { id: "endDate", type: "date", label: "تاريخ النهاية", rowGroup: "dates" },
      { id: "location", type: "text", label: "مقر التنفيذ", placeholder: "مكان التنفيذ" },
      { id: "deliveryMode", type: "radio", label: "حضوري / عن بُعد / مدمج", options: DELIVERY_MODES },
      { id: "executingEntity", type: "text", label: "الجهة المنفذة", placeholder: "الجهة المسؤولة عن التنفيذ" },
      { id: "participatingEntities", type: "text", label: "الجهات المشاركة", placeholder: "الجهات المشاركة، إن وجدت" },
      { id: "responsiblePerson", type: "text", label: "المسؤولة عن التنفيذ", placeholder: "اسم المسؤولة" },
      { id: "executionStatus", type: "radio", label: "حالة التنفيذ", options: EXECUTION_STATUSES, subheadBefore: "حالة التنفيذ" },
      { id: "completionPercent", type: "number", label: "نسبة الإنجاز", placeholder: "0", subheadBefore: "مستوى الإنجاز", rowGroup: "completion" },
      { id: "attendeesCount", type: "number", label: "عدد الحاضرات", placeholder: "0", rowGroup: "completion" },
      { id: "attendanceRate", type: "number", label: "نسبة الحضور", placeholder: "0", rowGroup: "rates" },
      { id: "continuationRate", type: "number", label: "نسبة الاستمرار", placeholder: "0", rowGroup: "rates" },
      { id: "approvedCost", type: "number", label: "التكلفة المعتمدة", placeholder: "0", rowGroup: "costs" },
      { id: "actualCost", type: "number", label: "التكلفة الفعلية", placeholder: "0", rowGroup: "costs" },
      { id: "highlightResult", type: "textarea", label: "أبرز نتيجة", required: true, placeholder: "أبرز نتيجة تحققت من هذا العمل" },
    ],
  },
  tools: {
    arrayKey: "tools",
    itemLabel: "أداة القياس",
    fields: [
      { id: "toolType", type: "expandableSelect", label: "نوع الأداة", required: true, baseOptions: MEASUREMENT_TOOL_TYPES, customKey: "customToolTypes", otherLabel: "أخرى", placeholder: "اختاري نوع الأداة" },
      { id: "name", type: "text", label: "اسم الأداة", required: true, placeholder: "اسم أداة القياس", subheadBefore: "بيانات الأداة" },
      { id: "purpose", type: "textarea", label: "الهدف من استخدامها", placeholder: "لماذا استُخدمت هذه الأداة؟" },
      { id: "relatedProgram", type: "text", label: "الجهة أو البرنامج المرتبط بها", placeholder: "مثال: دورة إدارة الوقت" },
      { id: "targetGroup", type: "text", label: "الفئة التي طبقت عليها", placeholder: "مثال: الموظفات" },
      { id: "populationSize", type: "number", label: "حجم المجتمع", placeholder: "0", rowGroup: "sizes" },
      { id: "sampleSize", type: "number", label: "حجم العينة", placeholder: "0", rowGroup: "sizes" },
      { id: "respondentsCount", type: "number", label: "عدد المستجيبات", placeholder: "0" },
      { id: "responseRate", type: "computed", compute: "responseRate", label: "نسبة الاستجابة" },
      { id: "applicationDate", type: "date", label: "تاريخ التطبيق" },
      { id: "toolLink", type: "text", label: "رابط نسخة الأداة", placeholder: "https://..." },
      { id: "resultsLink", type: "text", label: "رابط نتائجها", placeholder: "https://..." },
      { id: "resultQuality", type: "radio", label: "جودة نتائج الأداة", options: TOOL_RESULT_QUALITY, subheadBefore: "جودة نتائج الأداة" },
    ],
  },
  challenges: {
    arrayKey: "challenges",
    itemLabel: "الصعوبة",
    fields: [
      { id: "name", type: "text", label: "اسم الصعوبة", required: true, placeholder: "مثال: نقص الكادر المؤهل" },
      { id: "area", type: "expandableSelect", label: "مجال الصعوبة", required: true, baseOptions: CHALLENGE_AREAS_BASE, customKey: "customChallengeAreas", otherLabel: "أخرى", placeholder: "اختاري مجال الصعوبة" },
      { id: "severity", type: "radio", label: "مستوى الصعوبة", options: CHALLENGE_SEVERITY },
      { id: "scope", type: "select", label: "نطاق الصعوبة", options: CHALLENGE_SCOPE },
      { id: "description", type: "textarea", label: "وصف الصعوبة", required: true, subheadBefore: "بيانات الصعوبة" },
      { id: "rootCause", type: "textarea", label: "سببها الجذري" },
      { id: "performanceImpact", type: "textarea", label: "أثرها في الأداء" },
      { id: "startedWhen", type: "date", label: "متى بدأت؟" },
      { id: "recurred", type: "radio", label: "هل تكررت سابقًا؟", options: YES_NO_OPTIONS },
      { id: "actionTaken", type: "textarea", label: "الإجراء الذي اتخذته الوحدة" },
      { id: "actionResult", type: "textarea", label: "نتيجة الإجراء" },
      { id: "stillOngoing", type: "radio", label: "هل ما زالت قائمة؟", options: YES_NO_OPTIONS },
      { id: "supportNeeded", type: "textarea", label: "الدعم أو القرار المطلوب" },
      { id: "proposedHandler", type: "text", label: "الجهة المقترحة للمعالجة", placeholder: "مثال: قسم شؤون المكاتب" },
      { id: "resolutionTime", type: "text", label: "المدة اللازمة للمعالجة", placeholder: "مثال: أسبوعان" },
    ],
  },
  improvement: {
    arrayKey: "opportunities",
    itemLabel: "فرصة التحسين",
    fields: [
      { id: "name", type: "text", label: "اسم فرصة التحسين", required: true, placeholder: "مثال: تسريع الاستجابة لطلبات المستفيدات" },
      { id: "field", type: "text", label: "المجال الذي يمكن تحسينه", required: true, placeholder: "مثال: سرعة الاستجابة للطلبات" },
      { id: "currentStatus", type: "textarea", label: "الوضع الحالي" },
      { id: "desiredStatus", type: "textarea", label: "الوضع المرغوب" },
      { id: "gap", type: "textarea", label: "الفجوة بينهما" },
      { id: "action", type: "textarea", label: "الإجراء التحسيني" },
      { id: "expectedImpact", type: "textarea", label: "الأثر المتوقع" },
      { id: "ease", type: "radio", label: "سهولة التنفيذ", options: IMPROVEMENT_EASE_OPTIONS },
      { id: "priority", type: "radio", label: "الأولوية", options: IMPROVEMENT_PRIORITY_OPTIONS },
      { id: "responsiblePerson", type: "text", label: "المسؤولة", placeholder: "اسم المسؤولة" },
      { id: "implementationDate", type: "date", label: "تاريخ التنفيذ" },
      { id: "successIndicator", type: "text", label: "مؤشر قياس نجاح التحسين", placeholder: "كيف ستعرفين أن التحسين نجح؟" },
    ],
  },
  initiatives: {
    arrayKey: "initiatives",
    itemLabel: "المبادرة",
    fields: [
      { id: "entryType", type: "select", label: "نوع المدخل", required: true, options: INITIATIVE_ENTRY_TYPES, placeholder: "اختاري نوع المدخل" },
      { id: "name", type: "text", label: "اسم المبادرة", required: true, placeholder: "اسم المبادرة أو الممارسة", subheadBefore: "بيانات المبادرة" },
      { id: "problem", type: "textarea", label: "المشكلة التي تعالجها" },
      { id: "ideaSummary", type: "textarea", label: "الفكرة باختصار" },
      { id: "targetGroup", type: "text", label: "الفئة المستهدفة", placeholder: "مثال: طالبات المستوى الأول" },
      { id: "stage", type: "select", label: "مرحلة المبادرة", options: INITIATIVE_STAGES, placeholder: "اختاري مرحلة المبادرة" },
      { id: "beneficiariesCount", type: "number", label: "عدد المستفيدات", placeholder: "0" },
      { id: "preliminaryResults", type: "textarea", label: "النتائج الأولية" },
      { id: "measuredImpact", type: "textarea", label: "الأثر المقاس" },
      { id: "cost", type: "text", label: "التكلفة", placeholder: "مثال: 3500 ريال أو بدون تكلفة" },
      { id: "sustainability", type: "radio", label: "قابلية الاستمرار", options: YES_NO_OPTIONS },
      { id: "scalability", type: "radio", label: "قابلية التعميم", options: YES_NO_OPTIONS },
      { id: "needs", type: "textarea", label: "الاحتياجات", placeholder: "ما الدعم أو الموارد المطلوبة؟" },
      { id: "fileLink", type: "text", label: "رابط ملف المبادرة", placeholder: "رابط المستند أو العرض التقديمي" },
    ],
  },
  impact: {
    arrayKey: "impactStories",
    itemLabel: "قصة الأثر",
    fields: [
      { id: "impactType", type: "select", label: "نوع الأثر", required: true, options: IMPACT_TYPES, placeholder: "اختاري نوع الأثر" },
      { id: "title", type: "text", label: "عنوان مختصر", required: true, placeholder: "عنوان قصة الأثر", subheadBefore: "بناء قصة الأثر" },
      { id: "beforeSituation", type: "textarea", label: "وصف الوضع قبل التدخل" },
      { id: "intervention", type: "textarea", label: "التدخل أو البرنامج المنفذ" },
      { id: "change", type: "textarea", label: "التغير الذي حدث" },
      { id: "evidence", type: "textarea", label: "الدليل على التغير" },
      { id: "beneficiariesCount", type: "number", label: "عدد المستفيدات", placeholder: "0" },
      { id: "impactDuration", type: "text", label: "مدة ظهور الأثر", placeholder: "مثال: شهرين" },
      { id: "ongoing", type: "radio", label: "هل الأثر مستمر؟", options: YES_NO_OPTIONS },
      { id: "testimonial", type: "textarea", label: "شهادة مستفيدة إن وجدت", placeholder: "اقتباس أو شهادة من مستفيدة" },
      { id: "evidenceLink", type: "text", label: "رابط الشاهد", placeholder: "https://..." },
      { id: "publicConsent", type: "radio", label: "هل يسمح بعرض القصة في التقرير العام؟", options: YES_NO_OPTIONS },
    ],
  },
  strengths: {
    arrayKey: "strengths",
    itemLabel: "نقطة قوة",
    maxItems: 5,
    fields: [
      { id: "name", type: "text", label: "اسم نقطة القوة", required: true, placeholder: "مثال: قيادة داعمة ومتابعة مستمرة" },
      { id: "area", type: "expandableSelect", label: "مجال نقطة القوة", required: true, baseOptions: STRENGTH_AREAS_BASE, customKey: "customStrengthAreas", otherLabel: "أخرى", placeholder: "اختاري مجال نقطة القوة" },
      { id: "description", type: "textarea", label: "وصف نقطة القوة", required: true, placeholder: "اشرحي نقطة القوة", subheadBefore: "بيانات نقطة القوة" },
      { id: "evidence", type: "textarea", label: "الدليل عليها", placeholder: "ما الدليل أو الرقم الذي يثبتها؟" },
      { id: "impact", type: "textarea", label: "أثرها", placeholder: "ما أثر هذه النقطة على العمل أو المستفيدات؟" },
      { id: "continuity", type: "radio", label: "هل هي مستمرة أم مرتبطة بفترة؟", options: CONTINUITY_OPTIONS },
      { id: "maintainHow", type: "textarea", label: "كيف يمكن المحافظة عليها؟", placeholder: "ما الإجراءات اللازمة للحفاظ عليها؟" },
      { id: "transferable", type: "radio", label: "هل يمكن نقلها إلى وحدات أخرى؟", options: YES_NO_OPTIONS },
    ],
  },
  nextplan: {
    arrayKey: "mainTasks",
    itemLabel: "عمل رئيسي",
    itemLabelPlural: "أعمال",
    minItems: 3,
    maxItems: 5,
    hint: "تضيف الوحدة من 3 إلى 5 أعمال رئيسة فقط لخطة الفترة القادمة.",
    fields: [
      { id: "name", type: "text", label: "اسم العمل الرئيسي", required: true, placeholder: "اسم العمل المخطط له في الفترة القادمة" },
      { id: "goal", type: "textarea", label: "الهدف منه" },
      { id: "responsiblePerson", type: "text", label: "المسؤولة عنه", placeholder: "اسم المسؤولة" },
      { id: "expectedDate", type: "date", label: "الموعد المتوقع" },
    ],
  },
  evidence: {
    arrayKey: "evidenceItems",
    itemLabel: "شاهد",
    hint: "لا تُدرج الصور أو الملفات داخل التقرير نفسه — تُحفظ بالمستودع الخاص بها ويُكتفى برابطها هنا.",
    fields: [
      { id: "evidenceType", type: "select", label: "نوع الشاهد", required: true, options: EVIDENCE_TYPES_LIST, placeholder: "اختاري نوع الشاهد" },
      { id: "name", type: "text", label: "اسم الشاهد", required: true, subheadBefore: "بيانات الشاهد" },
      // ملاحظة: الحقل الأصلي كان قائمة منسدلة تُبنى من أقسام الجمعية الحالية (تتغيّر
      // مع الوقت)، وهذا لا يناسب "الحقل المحسوب/الثابت" اللي تديره لوحة إدارة الحقول
      // ذاتيًا — لذا تحوّل هنا لحقل نص حر (اختياري) بنفس المعنى.
      { id: "relatedDepartment", type: "text", label: "القسم المرتبط به (اختياري)", placeholder: "اسم القسم" },
      { id: "fileLink", type: "text", label: "رابط الملف", placeholder: "رابط الملف بالمستودع" },
      { id: "description", type: "textarea", label: "وصف مختصر" },
      { id: "confidentiality", type: "radio", label: "درجة السرية", required: true, options: CONFIDENTIALITY_LEVELS },
    ],
  },
  // "تحليل النتائج" فيها حقول عامة ثابتة (أبرز نتيجة إيجابية/تحتاج تحسين، الخلاصة
  // التحليلية) مختلطة مع قائمة "مقارنات" متكررة — هذا الخليط لا يناسب تحويل القسم
  // كامل للمحرك العام (سيفقد الحقول الثابتة). لذا بقي القسم بكوده اليدوي
  // (analysisSectionHtml)، لكن قائمة المقارنات نفسها صارت تُدار من نفس محرك الحقول
  // الذاتي — معرّف هذا التعريف (analysisComparisons) مختلف عمدًا عن معرّف القسم
  // (analysis) عشان ما يستبدل القسم كامل بالمحرك العام تلقائيًا.
  analysisComparisons: {
    arrayKey: "comparisons",
    itemLabel: "مقارنة",
    sectionLabel: "تحليل النتائج (المقارنات)",
    fields: [
      { id: "topic", type: "text", label: "موضوع المقارنة", placeholder: "مثال: نسبة الحضور" },
      { id: "resultValue", type: "text", label: "نتيجة المقارنة بالرقم أو النسبة", placeholder: "مثال: ارتفعت من 70٪ إلى 85٪" },
      { id: "judgment", type: "select", label: "الحكم", options: COMPARISON_JUDGMENTS },
      { id: "changeReason", type: "expandableSelect", label: "سبب التغير", baseOptions: CHANGE_REASONS, customKey: "customChangeReasons", otherLabel: "سبب آخر", placeholder: "اختاري سبب التغير" },
    ],
  },
  // "مؤشرات الأداء" فيها حقلان مرتبطان بحسابات فعلية (name يربط بتعريف المؤشر
  // المعتمد، actual يغذّي computeIndicatorStatus/الانحراف) — نقلهما للمحرك العام
  // يكسر الحسابات لو أُعيدت تسميتهما أو حُذفا من لوحة الإدارة، فبقيا بكودهما
  // اليدوي. أما حقول "تحليل الانحراف والإجراء التصحيحي" (تظهر فقط لو المؤشر لم
  // يتحقق) فهي نصية بحتة بلا أي حساب عليها، فصارت قابلة للإدارة الذاتية عبر هذا
  // التعريف المدمج (arrayKey يشير لنفس مصفوفة indicators الحقيقية، فليست هذه
  // حالة تعارض معرّف/مصفوفة كباقي الأمثلة أعلاه، لأنها تضيف حقولًا على نفس العنصر
  // بدل ما تشكّل مصفوفة منفصلة).
  kpiDeviation: {
    arrayKey: "indicators",
    itemLabel: "تحليل الانحراف",
    sectionLabel: "مؤشرات الأداء (تحليل الانحراف)",
    fields: [
      { id: "deviationReason", type: "textarea", label: "سبب الانحراف", placeholder: "اشرحي سبب الانحراف عن المستهدف" },
      { id: "causeType", type: "radio", label: "هل السبب داخلي أم خارجي؟", options: CAUSE_TYPES },
      { id: "correctiveAction", type: "textarea", label: "الإجراء التصحيحي", placeholder: "ما الإجراء المتخذ لمعالجة الانحراف" },
      { id: "responsiblePerson", type: "text", label: "المسؤولة عن الإجراء", placeholder: "اسم المسؤولة" },
      { id: "closureDate", type: "date", label: "موعد إغلاق المعالجة" },
      { id: "requiredSupport", type: "textarea", label: "الدعم المطلوب", placeholder: "أي دعم إضافي مطلوب لإغلاق الانحراف" },
    ],
  },
  // "الأهداف والمستهدفات": مصفوفة operationalGoals متداخلة داخل كل هدف. حقل
  // "level" يبقى بكوده اليدوي لأنه يغذّي حساب النسبة (GOAL_LEVEL_PERCENTAGE)
  // وشارة "منجز" التلقائية (goalOverallAchieved) — حذفه أو تغيير قيمه من لوحة
  // الإدارة يكسر هذه الحسابات. أما دليل التحقق (evidenceType/evidenceAnswer)
  // وتفسير المستوى (explanation) فهي حقول توثيقية بحتة بلا أي حساب عليها،
  // فصارت قابلة للإدارة الذاتية. ملاحظة: النص التوضيحي الفعلي لحقل "إجابة الدليل"
  // يتغيّر تلقائيًا حسب نوع الدليل المختار (evidenceAnswerPlaceholder) — هذا
  // السلوك الذكي يبقى مستقلًا عن لوحة الإدارة، فوق أي نص توضيحي تكتبه هنا.
  goalsEvidence: {
    // arrayKey هنا "goals" وليس "operationalGoals" رغم إن الحقول فعليًا متداخلة
    // داخل operationalGoals — لأن data-arr على عنصر DOM (وبالتالي مفتاح
    // CUSTOM_OPTION_FIELD_MAP عند تسجيله من لوحة الإدارة) يتبع المصفوفة
    // الخارجية دائمًا (goals) وليس الداخلية، تمامًا مثل الحقول الأخرى المتداخلة
    // في نفس القسم (level, strategicGoal...).
    arrayKey: "goals",
    itemLabel: "دليل تحقق الهدف",
    sectionLabel: "الأهداف والمستهدفات (دليل التحقق)",
    fields: [
      { id: "evidenceType", type: "expandableSelect", label: "دليل تحقق الهدف", required: true, baseOptions: EVIDENCE_TYPES, customKey: "customEvidenceTypes", otherLabel: "أخرى", placeholder: "اختاري نوع الدليل" },
      { id: "evidenceAnswer", type: "text", label: "إجابة الدليل", required: true, placeholder: "" },
      { id: "explanation", type: "textarea", label: "تفسير مستوى التحقق", placeholder: "اشرحي سبب هذا المستوى من التحقق (٣٠٠ حرف كحد أقصى)" },
    ],
  },
  // "البيانات الأساسية" و"المراجعة النهائية" قسمان بمثيل واحد لكل تقرير (لا قائمة
  // عناصر تُضاف وتُحذف)، فليسا "repeater" مثل بقية الأقسام أعلاه — لذا fixed: true
  // يوجّه renderSectionFields لتجاهل المحرك المتكرر (renderSchemaRepeaterHtml)
  // ويترك الاستدعاء الفعلي لدالة مكتوبة يدويًا صغيرة (basicSectionHtml/
  // reviewSectionHtml) تستخدم renderSchemaFixedHtml داخليًا — لأن كلا القسمين
  // فيهما منطق عرض شرطي/زخرفي (ملاحظات تحقق، صندوق قراءة فقط لاسم الوحدة، شارة
  // حالة التقرير) لا يصلح تعميمه كحقل عادي قابل للحذف من لوحة الإدارة.
  basic: {
    fixed: true,
    // "top" (وليس "basic") — حقول هذا القسم كلها بمستوى القسم مباشرة (بدون
    // مصفوفة عناصر)، وdata-arr الفعلي بالـ DOM لحقول من هذا النوع هو "top"
    // (راجع CUSTOM_OPTION_FIELD_MAP)، فنطابقه هنا عشان أي تعديل حقل expandableSelect
    // من لوحة الإدارة يسجّل مفتاح "أخرى" الصحيح.
    arrayKey: "top",
    itemLabel: "البيانات الأساسية",
    fields: [
      { id: "mainEntity", type: "text", label: "الجهة الرئيسية", required: true, placeholder: "اسم الجهة الرئيسية" },
      { id: "reportingEntityType", type: "expandableSelect", label: "الجهة التي ترفع التقرير", baseOptions: REPORTING_TYPES_BASE, customKey: "customReportingTypes", otherLabel: "أخرى", placeholder: "اختاري (اختياري)" },
      // "اسم الجهة" كان قائمة منسدلة مرتبطة مباشرة بـ"إدارة الأقسام والوحدات"
      // (تتغيّر مع الوقت، وقد تختلف عن الوحدة الحالية) — حُوِّل لحقل نص حر، بنفس
      // منطق التبسيط المطبّق سابقًا على evidenceItems.relatedDepartment؛ تنبيه
      // مطابقة القسم (أسفل صندوق "اسم الوحدة") يبقى يعمل تمامًا لأنه مجرد مقارنة
      // نصية بقيمة هذا الحقل.
      { id: "entityName", type: "text", label: "اسم الجهة (القسم أو المركز)", placeholder: "اسم القسم أو المركز" },
      { id: "officeName", type: "expandableSelect", label: "اسم المكتب", baseOptions: OFFICE_NAMES_BASE, customKey: "customOfficeNames", otherLabel: "أخرى", placeholder: "اختاري اسم المكتب", visibleWhen: { field: "reportingEntityType", equals: "مكتب" } },
      { id: "periodType", type: "select", label: "الفترة التي يغطيها التقرير", options: PERIOD_TYPES, placeholder: "اختاري (اختياري)" },
      { id: "startDate", type: "date", label: "تاريخ البداية", rowGroup: "dates" },
      { id: "endDate", type: "date", label: "تاريخ النهاية", rowGroup: "dates" },
      { id: "hijriYear", type: "select", label: "العام الهجري", options: HIJRI_YEARS, visibleWhen: { field: "periodType", notEmpty: true } },
      { id: "month", type: "select", label: "الشهر", options: MONTHS, visibleWhen: { field: "periodType", equals: "شهري" } },
      { id: "term", type: "expandableSelect", label: "الفصل", baseOptions: TERM_OPTIONS_BASE, customKey: "customTerms", otherLabel: "أخرى", placeholder: "اختاري الفصل", visibleWhen: { field: "periodType", equals: "فصلي" } },
      { id: "preparerName", type: "text", label: "الاسم", required: true, placeholder: "اسم معدة التقرير", subheadBefore: "بيانات معدة التقرير" },
      { id: "preparerTitle", type: "text", label: "المسمى الوظيفي", required: true, placeholder: "المسمى الوظيفي" },
      { id: "managerName", type: "text", label: "اسم الرئيسة المباشرة", required: true, placeholder: "اسم الرئيسة المباشرة" },
    ],
  },
  review: {
    fixed: true,
    itemLabel: "المراجعة النهائية",
    fields: [
      {
        id: "checklist", type: "checklist", label: "قائمة التحقق (تضعها معدة التقرير)",
        options: ["راجعت صحة الأرقام", "تأكدت من عدم تكرار المستفيدات", "أرفقت الأدلة اللازمة", "ربطت التوصيات بالنتائج", "لم أدرج بيانات شخصية غير مصرح بها", "راجعت الصياغة", "اعتمدت مديرة الوحدة البيانات"],
      },
    ],
  },
};

// يرسم حقل واحد حسب نوعه — يستخدم بالضبط نفس دوال الربط العامة (inp/txt/sel/radio)
// اللي تستخدمها كل الأقسام المكتوبة يدويًا، فيشتغل تلقائيًا مع add-item/remove-item
// الحاليين بدون أي تعديل عليهم.
// أنواع "الحقول المحسوبة تلقائيًا" (زي نسبة الاستجابة = عدد المستجيبات ÷ حجم
// العينة) — دالة الحساب نفسها كود ثابت مربوط باسم (f.compute)، فهذا النوع غير
// متاح للإضافة الذاتية من صفحة "إدارة حقول الأقسام" (لا معنى لحقل محسوب بدون
// دالة حساب مكتوبة له)، لكنه يبقى يشتغل عاديًا للحقول المعرّفة بالكود مسبقًا.
const SCHEMA_COMPUTED_FIELDS = {
  responseRate: (item) => {
    const rate = computeResponseRate(item.sampleSize, item.respondentsCount);
    return rate != null ? `${rate}٪` : "تُحسب تلقائيًا بعد إدخال حجم العينة وعدد المستجيبات";
  },
};
// subArrKey/subItemId اختياريان: لو انمررا، الحقل يُربط بعنصر متداخل داخل مصفوفة
// فرعية (مثال: عناصر operationalGoals داخل هدف بقسم "الأهداف والمستهدفات") عبر
// نفس دوال inpSub/txtSub/selSub/radioSub الموجودة أصلًا — بدون أي تغيير على
// سلوك الاستدعاءات القديمة (بدون subArrKey تبقى تعمل تمامًا كما كانت).
// حقل "checklist": قيمته كائن {نص_البند: true/false}، غير مرتبط بأي مصفوفة
// عناصر متكررة (دايمًا حقل ثابت وحيد بمستوى القسم)، لذا لا يستخدم subArrKey/
// inpSub وأخواتها إطلاقًا — نمط عرض/تخزين مختلف تمامًا عن بقية الأنواع.
function checklistFieldHtml(fieldId, options, valueObj) {
  valueObj = valueObj || {};
  const rows = (options || []).map((label) => `
    <button type="button" class="radio-pill ${valueObj[label] ? "active" : ""}" style="width:100%;justify-content:flex-start;margin-bottom:6px;" data-action="toggle-review-checklist" data-field="${esc(fieldId)}" data-key="${esc(label)}">
      ${valueObj[label] ? iconCheck(14, "#fff") : iconCircle(14, SUBTLE)} ${esc(label)}
    </button>`).join("");
  return `<div style="display:flex;flex-direction:column;gap:2px;">${rows}</div>`;
}
function renderSchemaFieldHtml(f, arrKey, itemId, value, customOptionsList, item, subArrKey, subItemId) {
  // checklist يُعرض بعنوان فرعي (subhead) بدل صندوق fieldWrap المعتاد — أقرب
  // بصريًا لقائمة تحقق (مجموعة بنود قابلة للتأشير) لا "حقل واحد له تسمية".
  if (f.type === "checklist") {
    return `<div class="subhead">${esc(f.label)}</div><div style="margin-bottom:18px;">${checklistFieldHtml(f.id, f.options || [], value)}</div>`;
  }
  const inputType = f.type === "number" ? "number" : f.type === "date" ? "date" : "text";
  const html =
    f.type === "computed" ? readonlyBox((SCHEMA_COMPUTED_FIELDS[f.compute] || (() => ""))(item || {})) :
    f.type === "textarea" ? (subArrKey ? txtSub(arrKey, itemId, subArrKey, subItemId, f.id, value, f.placeholder) : txt(arrKey, itemId, f.id, value, f.placeholder)) :
    f.type === "select" ? (() => { const o_ = (f.options || []).includes(value) || !value ? (f.options || []) : [...(f.options || []), value]; return subArrKey ? selSub(arrKey, itemId, subArrKey, subItemId, f.id, value, o_, f.placeholder) : sel(arrKey, itemId, f.id, value, o_, f.placeholder); })() :
    f.type === "radio" ? (subArrKey ? radioSub(arrKey, itemId, subArrKey, subItemId, f.id, value, f.options || []) : radio(arrKey, itemId, f.id, value, f.options || [])) :
    f.type === "expandableSelect" ? expandableSelectHtml(f.id, value, f.baseOptions || [], customOptionsList || [], f.placeholder, f.otherLabel || "أخرى", arrKey, itemId, subArrKey, subItemId) :
    (subArrKey ? inpSub(arrKey, itemId, subArrKey, subItemId, f.id, value, f.placeholder, inputType) : inp(arrKey, itemId, f.id, value, f.placeholder, inputType));
  return fieldWrap(f.label, !!f.required, html);
}
// visibleWhen اختياري: شرط ظهور بسيط يعتمد على قيمة حقل آخر بنفس القسم —
// { field: "<معرّف حقل آخر>", equals: "<قيمة>" } أو { field: "...", notEmpty: true }.
// بيانات وصفية بسيطة (قابلة للتخزين JSON بالقاعدة) وليست دالة، عشان تنجو من
// الحفظ والاسترجاع عبر Supabase بدون فقدان.
function schemaFieldVisible(f, d) {
  if (!f.visibleWhen) return true;
  const val = d[f.visibleWhen.field];
  if (f.visibleWhen.notEmpty) return !!val;
  if (Object.prototype.hasOwnProperty.call(f.visibleWhen, "equals")) return val === f.visibleWhen.equals;
  return true;
}
// نسخة "ثابتة" (غير متكررة) من محرك عرض الحقول — لقسم بمثيل واحد فقط لكل تقرير
// (بيانات ثابتة، لا قائمة عناصر تُضاف/تُحذف)، مثل "البيانات الأساسية" و"المراجعة
// النهائية". تدعم نفس subheadBefore/rowGroup الموجودة بالنسخة المتكررة، بالإضافة
// لـ visibleWhen. الحقول تُربط مباشرة بمستوى القسم (arrKey=null/itemId=null، مثل
// استدعاءات inp(null,null,...) القديمة قبل هذا التعميم).
// opts.decorators: خريطة اختيارية {معرّف_حقل: (قيمة, d) => HTML إضافي يُلحق بعد
// الحقل} — لمنطق عرض خاص (تنبيهات/ملاحظات) لا يُعتبر "حقلًا" بحد ذاته وبالتالي
// غير قابل للحذف أو إعادة التسمية من لوحة الإدارة.
function renderSchemaFixedHtml(schema, d, opts) {
  opts = opts || {};
  const decorators = opts.decorators || {};
  const visibleFields = schema.fields.filter((f) => schemaFieldVisible(f, d));
  let html = "";
  let i = 0;
  while (i < visibleFields.length) {
    const f = visibleFields[i];
    const subhead = f.subheadBefore ? `<div class="subhead">${esc(f.subheadBefore)}</div>` : "";
    const next = visibleFields[i + 1];
    const dec = (id, val) => (decorators[id] ? decorators[id](val, d) : "");
    if (f.rowGroup && next && next.rowGroup === f.rowGroup) {
      html += subhead + `<div class="row-flex">${renderSchemaFieldHtml(f, null, null, d[f.id], f.customKey ? d[f.customKey] : undefined, d)}${renderSchemaFieldHtml(next, null, null, d[next.id], next.customKey ? d[next.customKey] : undefined, d)}</div>`;
      html += dec(f.id, d[f.id]) + dec(next.id, d[next.id]);
      i += 2;
    } else {
      html += subhead + renderSchemaFieldHtml(f, null, null, d[f.id], f.customKey ? d[f.customKey] : undefined, d);
      html += dec(f.id, d[f.id]);
      i += 1;
    }
  }
  return html;
}
// كل عنصر في schema.fields هو دائمًا حقل حقيقي واحد (له id/type/label) — ما فيه
// "حاويات" وهمية، عشان صفحة "إدارة حقول الأقسام" تقدر تعرض وتعدّل كل حقل لحاله.
// شكلين اختياريين للتنسيق البصري بس (لا يغيّران البيانات المخزّنة إطلاقًا):
//  - "subheadBefore": نص يضيف عنوان فرعي <div class="subhead"> فوق الحقل.
//  - "rowGroup": حقلين متتاليين يحملان نفس القيمة يُرسمان جنب بعض (row-flex)،
//    مطابقةً لتنسيق الأقسام المكتوبة يدويًا. لو انكسر التتالي (مثلاً بعد إعادة
//    ترتيب من صفحة الإدارة) يرجع كل حقل يُرسم لحاله بعرض كامل — تجميل فقط.
function renderSchemaFieldsHtml(fields, arrKey, itemId, item, d, subArrKey, subItemId) {
  let html = "";
  let i = 0;
  while (i < fields.length) {
    const f = fields[i];
    const subhead = f.subheadBefore ? `<div class="subhead">${esc(f.subheadBefore)}</div>` : "";
    const next = fields[i + 1];
    if (f.rowGroup && next && next.rowGroup === f.rowGroup) {
      html += subhead + `<div class="row-flex">${renderSchemaFieldHtml(f, arrKey, itemId, item[f.id], f.customKey ? d[f.customKey] : undefined, item, subArrKey, subItemId)}${renderSchemaFieldHtml(next, arrKey, itemId, item[next.id], next.customKey ? d[next.customKey] : undefined, item, subArrKey, subItemId)}</div>`;
      i += 2;
    } else {
      html += subhead + renderSchemaFieldHtml(f, arrKey, itemId, item[f.id], f.customKey ? d[f.customKey] : undefined, item, subArrKey, subItemId);
      i += 1;
    }
  }
  return html;
}
// عنصر واحد بس يبقى "مفتوح" بالمرة داخل قوائم الأقسام المبنية على المحرك العام —
// الافتراضي هو آخر عنصر تمت إضافته (أو المُوسّع صراحة بالضغط على عنوانه)، وبقية
// العناصر تنطوي وتبين عنوانها بس. الطي عرض فقط: لا يمس البيانات المحفوظة إطلاقًا.
function schemaExpandedItemId(arrKey, items) {
  if (!items.length) return null;
  const state = S.ui.expandedRepeatItem || {};
  // hasOwnProperty يميّز بين "لسا ما طوت/فتحت شي يدويًا" (نفتح آخر عنصر تلقائيًا)
  // و"طوت العنصر المفتوح بنفسها" (chosen = null، يعني كل العناصر مطوية الآن).
  if (Object.prototype.hasOwnProperty.call(state, arrKey)) {
    const chosen = state[arrKey];
    return items.some((it) => it.id === chosen) ? chosen : null;
  }
  return items[items.length - 1].id;
}
function renderSchemaRepeaterHtml(schema, d) {
  const items = d[schema.arrayKey] || [];
  const expandedId = schemaExpandedItemId(schema.arrayKey, items);
  const rows = items.map((item, i) => {
    const isOpen = items.length === 1 || item.id === expandedId;
    const head = `<div class="repeat-item-head" style="cursor:pointer;" data-action="toggle-repeat-item" data-arr="${esc(schema.arrayKey)}" data-id="${esc(item.id)}"><span class="repeat-item-title">${esc(schema.itemLabel)} ${i + 1}${isOpen ? "" : ` — ${esc(item[schema.fields.find((f) => f.id)?.id] || "")}`}</span>${removeBtn(schema.arrayKey, item.id)}</div>`;
    if (!isOpen) return `<div class="repeat-item">${head}</div>`;
    return `<div class="repeat-item">${head}${renderSchemaFieldsHtml(schema.fields, schema.arrayKey, item.id, item, d)}</div>`;
  }).join("");
  // hint اختياري أعلى القسم (نفس أسلوب التنبيهات المكتوبة يدويًا بأقسام مثل "الشواهد"
  // و"خطة الفترة القادمة")، وحد أقصى/أدنى اختياري لعدد العناصر (maxItems/minItems).
  const hintHtml = schema.hint ? `<div class="hint" style="background:${GRAY_BG};border-radius:10px;padding:9px 12px;margin-bottom:14px;">${esc(schema.hint)}</div>` : "";
  const atMax = schema.maxItems != null && items.length >= schema.maxItems;
  const addLabel = atMax ? `بلغتِ الحد الأقصى (${schema.maxItems} ${schema.itemLabelPlural || schema.itemLabel})` : `إضافة ${schema.itemLabel}`;
  const belowMin = schema.minItems != null && items.length > 0 && items.length < schema.minItems;
  const minWarningHtml = belowMin ? `<div class="hint bad">أضيفي ${schema.minItems - items.length} ${schema.itemLabelPlural || schema.itemLabel} إضافية على الأقل لاستيفاء الحد الأدنى (${schema.minItems}).</div>` : "";
  return `${hintHtml}${rows}${pillBtn(addLabel, { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: schema.arrayKey }, disabled: atMax })}${minWarningHtml}<div style="margin-top:18px;">${notesFieldHtml(d)}</div>`;
}


/* =============================== Supabase =====================================
   رابط المشروع ومفتاحه. هذان السطران هما ربط الموقع بالقاعدة.
   لو تُركا فارغين يعمل الموقع على المتصفح وحده (للتجربة المحلية فقط). */
const SUPABASE_URL = "https://bamirxxstfmgmscwylkg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_f2BGuOJ4vs02gzMPdaP3rQ_PpcZGl1m";

function dbConnected() { return !!SUPABASE_URL && !!SUPABASE_ANON_KEY; }

async function supabaseRequest(path, options) {
  options = options || {};
  if (!dbConnected()) return { ok: false, error: "لم يتم ربط الموقع بقاعدة البيانات بعد" };
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      method: options.method || "GET",
      headers: Object.assign({
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: options.prefer || "return=representation",
      }, options.headers || {}),
      body: options.body,
    });
    if (!res.ok) {
      let msg = "خطأ من قاعدة البيانات (" + res.status + ")";
      try { const j = await res.json(); msg = j.message || msg; } catch (e) { /* تجاهل */ }
      return { ok: false, error: msg };
    }
    let data = null;
    try { data = await res.json(); } catch (e) { /* استجابة بلا محتوى، عادي لبعض الطلبات */ }
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: "تعذر الاتصال بقاعدة البيانات. تحققي من الاتصال بالإنترنت. [" + ((options.method || "GET") + " " + String(path).split("?")[0] + " — " + (err && err.message ? err.message : "network")) + "]" };
  }
}

// يمسح الجدول كامل ثم يعيد إدخال الصفوف الحالية — نفس أسلوب "استبدال الكل"
// المستخدم بباقي الموقع، أبسط للتفكير فيه من مطابقة الفروقات صفًا بصف.
// نسخة آمنة (إصلاح): كانت تمسح الجدول كامل أولًا ثم تُدخل — فلو فشل الإدخال
// (عمود ناقص بالقاعدة مثلًا) يبقى الجدول فاضي وتضيع كل الصفوف. الآن: نكتب
// الصفوف أولًا (upsert بالـ id)، وفقط لو نجحت نحذف الصفوف اللي لم تعد موجودة.
// لو فشلت الكتابة، ما نمسح أي شي ونُظهر سبب الفشل بشريط أحمر أعلى الصفحة.
function reportSupabaseWriteError(table, msg) {
  try { console.error("Supabase write failed:", table, msg); } catch (e) { /* تجاهل */ }
  try {
    let bar = document.getElementById("sb-write-error");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "sb-write-error";
      bar.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#b42318;color:#fff;padding:10px 14px;font-size:13px;font-weight:700;text-align:center;cursor:pointer;";
      bar.onclick = () => bar.remove();
      document.body.appendChild(bar);
    }
    bar.textContent = "تعذّر حفظ التغيير بقاعدة البيانات (جدول " + table + "): " + msg + " — لم يُحذف شيء. (اضغطي لإغلاق)";
  } catch (e) { /* تجاهل */ }
}
// حفظ غير إتلافي: يضيف ويعدّل الصفوف المرسلة فقط (upsert)، ولا يحذف من القاعدة إلا الصفوف
// التي حُذفت فعلًا من هذا المتصفح (removedIds). فلا تُمحى صفوف لمجرد أن هذا المتصفح لا يعرفها
// (نسخة قديمة / تبويب آخر).
async function supabaseReplaceTable(table, rows, keyCol, removedIds) {
  keyCol = keyCol || "id";
  if (!dbConnected()) return;
  if (rows.length) {
    const up = await supabaseRequest(`${table}?on_conflict=${keyCol}`, { method: "POST", prefer: "resolution=merge-duplicates,return=minimal", body: JSON.stringify(rows) });
    if (!up.ok) { reportSupabaseWriteError(table, up.error); return; }
  }
  const gone = (removedIds || []).filter((x) => x !== undefined && x !== null && x !== "");
  if (gone.length) {
    const ids = gone.map((x) => '"' + String(x).replace(/"/g, "") + '"').join(",");
    const del = await supabaseRequest(`${table}?${keyCol}=in.(${encodeURIComponent(ids)})`, { method: "DELETE", prefer: "return=minimal" });
    if (!del.ok) reportSupabaseWriteError(table, del.error);
  }
}
// حفظ جدول قائمة: يرسل للقاعدة الصفوف اللي تغيّرت فعلًا (مقارنة بآخر نسخة معروفة على هذا الجهاز) والمحذوفة فقط —
// بدل القائمة كاملة. كذا جهاز مفتوح من قبل ما يمسح تعديلات جهاز ثاني على صفوف ما لمسها.
function saveListTable(lsKey, table, list, toRows, keyCol, storeVal) {
  keyCol = keyCol || "id";
  let prevRows = [];
  try { const v = lsGet(lsKey); if (v) prevRows = toRows(JSON.parse(v)); } catch (e) { prevRows = []; }
  const rows = toRows(list);
  const prevBy = new Map(prevRows.map((r) => [String(r[keyCol]), JSON.stringify(r)]));
  const keep = new Set(rows.map((r) => String(r[keyCol])));
  const changed = rows.filter((r) => prevBy.get(String(r[keyCol])) !== JSON.stringify(r));
  const gone = [...prevBy.keys()].filter((k) => !keep.has(k));
  lsSet(lsKey, JSON.stringify(storeVal !== undefined ? storeVal : list));
  if (dbConnected() && (changed.length || gone.length)) queueSupabaseReplaceTable(table, changed, keyCol, gone).catch(() => {});
}

// طابور كتابة لكل جدول: لو صار أكثر من تعديل سريع بعد بعض (مثال: ضغط "نقل لأعلى"
// عدة مرات متتالية بسرعة على حقل)، كل تعديل يبدأ كتابته للقاعدة فقط بعد ما تخلص
// كتابة التعديل اللي قبله تمامًا — بدل ما تتسابق الطلبات وتوصل بترتيب معكوس فتطغى
// نتيجة قديمة على نتيجة أحدث بالغلط. ودالة pendingSupabaseWrite تتيح لأي شاشة
// "تحديث من القاعدة" (refresh*FromDb) أن تنتظر اكتمال آخر كتابة معلّقة لنفس
// الجدول قبل ما تقرأ منه، عشان ما ترجع بنسخة قديمة وتطبّقها فوق تعديل المستخدم
// الأحدث (وهذا بالضبط سبب مشكلة "رجع الترتيب تحت" اللي لاحظتها).
const supabaseWriteQueues = {};
function queueSupabaseReplaceTable(table, rows, keyCol, removedIds) {
  return queueSupabaseTask(table, () => supabaseReplaceTable(table, rows, keyCol, removedIds));
}
let lastDbWriteAt = 0;
function queueSupabaseTask(table, fn) {
  lastDbWriteAt = Date.now();
  const prev = supabaseWriteQueues[table] || Promise.resolve();
  const next = prev.catch(() => {}).then(fn);
  supabaseWriteQueues[table] = next;
  next.catch(() => {});
  return next;
}
function pendingSupabaseWrite(table) {
  return supabaseWriteQueues[table] || Promise.resolve();
}

/* ---- تحويل الأشكال بين JS (camelCase) وأعمدة قاعدة البيانات (snake_case) ---- */
function unitToRow(u) {
  return {
    id: u.id, name: u.name, password: u.password || "", role: u.role || "unit", department_id: u.departmentId || "",
    status: u.status || "active", created_at: u.createdAt || Date.now(), email: u.email || "",
    allowed_pages: u.allowedPages || [], allowed_actions: u.allowedActions || [], report_tabs: u.reportTabs || null,
    // مكتب الإشراف لـ«التقرير الذاتي» (role: self_report) لمكتب
    office_id: u.officeId || "",
    // دور الحساب الأساسي (الإدارية): يحدد صفحات/أزرار الدخول المباشر بدون شخص. عمود base_role_id (نص).
    base_role_id: u.baseRoleId || "",
  };
}
function rowToUnit(r) {
  return {
    id: r.id, name: r.name, password: r.password || "", role: r.role || "unit", departmentId: r.department_id || "",
    status: r.status || "active", createdAt: Number(r.created_at) || 0, email: r.email || "",
    allowedPages: r.allowed_pages || [], allowedActions: r.allowed_actions || [], reportTabs: parseReportTabsCfg(r.report_tabs),
    officeId: r.office_id || "",
    baseRoleId: r.base_role_id || "",
  };
}
function deptToRow(d) { return { id: d.id, name: d.name, password: d.password || "", status: d.status || "active", created_at: d.createdAt || Date.now(), curation: d.curation || { approvedKeys: [] }, email: d.email || "", office_id: d.officeId || "", allowed_pages: d.allowedPages || [], allowed_actions: d.allowedActions || [], report_tabs: d.reportTabs || null, base_role_id: d.baseRoleId || "" }; }
function rowToDept(r) { return { id: r.id, name: r.name, password: r.password || "", status: r.status || "active", createdAt: Number(r.created_at) || 0, curation: r.curation || { approvedKeys: [] }, email: r.email || "", officeId: r.office_id || "", allowedPages: r.allowed_pages || [], allowedActions: r.allowed_actions || [], reportTabs: parseReportTabsCfg(r.report_tabs), baseRoleId: r.base_role_id || "" }; }
function officeToRow(o) { return { id: o.id, name: o.name, password: o.password || "", email: o.email || "", status: o.status || "active", created_at: o.createdAt || Date.now(), curation: o.curation || { approvedKeys: [] }, allowed_pages: o.allowedPages || [], allowed_actions: o.allowedActions || [], report_tabs: o.reportTabs || null, parent_office_id: o.parentOfficeId || "", base_role_id: o.baseRoleId || "" }; }
function rowToOffice(r) { return { id: r.id, name: r.name, password: r.password || "", email: r.email || "", status: r.status || "active", createdAt: Number(r.created_at) || 0, curation: r.curation || { approvedKeys: [] }, allowedPages: r.allowed_pages || [], allowedActions: r.allowed_actions || [], reportTabs: parseReportTabsCfg(r.report_tabs), parentOfficeId: r.parent_office_id || "", baseRoleId: r.base_role_id || "" }; }
// ---- المرحلة 1: الأدوار المركزية (roles) وسجلات الأشخاص (persons) ----
// الأشخاص سجلات تحت جهة (وحدة/مركز) بدون حساب دخول مستقل؛ الدخول يبقى بحساب الجهة
// ثم يُختار الشخص، وبرمز (PIN) اختياري تحدده مديرة النظام لكل دور أو شخص.
function roleToRow(r) {
  return { id: r.id, name: r.name || "", description: r.description || "", pin: r.pin || "", permissions: r.permissions || {}, status: r.status || "active", created_at: r.createdAt || Date.now() };
}
function rowToRole(r) {
  return { id: r.id, name: r.name || "", description: r.description || "", pin: r.pin || "", permissions: (r.permissions && typeof r.permissions === "object") ? r.permissions : {}, status: r.status || "active", createdAt: Number(r.created_at) || 0 };
}
function personToRow(p) {
  return { id: p.id, name: p.name || "", owner_kind: p.ownerKind || "unit", owner_id: p.ownerId || "", role_id: p.roleId || "", pin: p.pin || "", perms_override: p.permsOverride || {}, status: p.status || "active", created_at: p.createdAt || Date.now() };
}
function rowToPerson(r) {
  return { id: r.id, name: r.name || "", ownerKind: r.owner_kind || "unit", ownerId: r.owner_id || "", roleId: r.role_id || "", pin: r.pin || "", permsOverride: (r.perms_override && typeof r.perms_override === "object") ? r.perms_override : {}, status: r.status || "active", createdAt: Number(r.created_at) || 0 };
}

// أزرار صفحة "التقارير" (التبويبات) — مديرة النظام تحدد لكل وحدة/قسم/مكتب/مسمى
// وظيفي أي أزرار تظهر له، وأيها "ينبّه" (يظهر بصفحة التنبيهات بعدد تقاريره
// وينقل لنفس الزر). الشكل المحفوظ: { tabs: [ids], notify: [ids] } أو null (= الأزرار
// الافتراضية القديمة بدون أي تغيير).
const REPORT_TAB_CATALOG = [
  { id: "all", label: "الكل" },
  { id: "draft", label: "مسوداتي" },
  { id: "returned", label: "بحاجة إلى تعديل" },
  { id: "needs_completion", label: "بحاجة إلى استكمال" },
  { id: "custom_pending", label: "قيد المراجعة" },
  { id: "completed", label: "التقارير الكاملة" },
  { id: "approved", label: "معتمد" },
  { id: "archived", label: "أرشيف التقارير" },
];
function parseReportTabsCfg(v) {
  if (!v || typeof v !== "object" || Array.isArray(v)) return null;
  const tabs = Array.isArray(v.tabs) ? v.tabs : [];
  const notify = Array.isArray(v.notify) ? v.notify : [];
  return tabs.length || notify.length ? { tabs, notify } : null;
}
/* ===================== أزرار صفحة التقارير من القاعدة (جدول report_tabs) =====================
   كل زر: id, label, statuses (حالات التقارير التي يعرضها), adminStatuses (حالات إضافية تظهر
   فقط بصفة «الإدارية»), special ("all" كل غير المؤرشف / "archived" المؤرشف), enabled.
   لو الجدول فاضي تُستخدم القائمة المدمجة أدناه كما هي (نفس الأزرار السابقة بالضبط). */
const REPORT_TABS_KEY = "prs:report-tabs";
const REPORT_STATUS_OPTIONS = [
  ["draft", "مسودة"], ["returned", "بحاجة إلى تعديل"], ["needs_completion", "بحاجة إلى استكمال"],
  ["custom_pending", "قيد المراجعة في المسار"], ["completed", "مكتمل"], ["approved", "معتمد"],
];
const REPORT_TABS_DEFAULT = [
  { id: "all", label: "الكل", special: "all", statuses: [], adminStatuses: [], enabled: true },
  { id: "draft", label: "مسوداتي", special: "", statuses: ["draft"], adminStatuses: [], enabled: true },
  { id: "returned", label: "بحاجة إلى تعديل", special: "", statuses: ["returned"], adminStatuses: [], enabled: true },
  { id: "needs_completion", label: "بحاجة إلى استكمال", special: "", statuses: ["needs_completion"], adminStatuses: [], enabled: true },
  { id: "custom_pending", label: "قيد المراجعة", special: "", statuses: ["custom_pending"], adminStatuses: [], enabled: true },
  { id: "completed", label: "التقارير الكاملة", special: "", statuses: ["completed"], adminStatuses: [], enabled: true },
  { id: "approved", label: "معتمد", special: "", statuses: ["approved"], adminStatuses: [], enabled: true },
  { id: "archived", label: "أرشيف التقارير", special: "archived", statuses: [], adminStatuses: [], enabled: true },
];
function reportTabToRow(t, i) { return { id: t.id, label: t.label || "", statuses: t.statuses || [], admin_statuses: t.adminStatuses || [], special: t.special || "", order_index: i, enabled: t.enabled !== false, created_at: t.createdAt || Date.now() }; }
function rowToReportTab(r) { return { id: r.id, label: r.label || "", statuses: Array.isArray(r.statuses) ? r.statuses : [], adminStatuses: Array.isArray(r.admin_statuses) ? r.admin_statuses : [], special: r.special || "", enabled: r.enabled !== false, order: Number(r.order_index) || 0, createdAt: Number(r.created_at) || 0 }; }
// زر «بانتظار مراجعتي»: التقارير التي وصلت لمرحلتي في مسار الاعتماد (يحل محل صفحة «التقارير الواردة لي»).
// يُضاف تلقائيًا للقائمة (دون تخزين) إن لم يكن موجودًا فيها، فلا يحتاج SQL.
const MINE_TAB_ID = "pending_mine";
const MINE_TAB = { id: MINE_TAB_ID, label: "بانتظار مراجعتي", special: "mine", statuses: [], adminStatuses: [], enabled: true };
function reportTabsList() {
  if (!S.reportTabs) S.reportTabs = dataStore.getReportTabs();
  const base = S.reportTabs.length ? S.reportTabs : REPORT_TABS_DEFAULT;
  if (base.some((t) => t.id === MINE_TAB_ID)) return base;
  const i = base.length && base[0].special === "all" ? 1 : 0;
  return [...base.slice(0, i), MINE_TAB, ...base.slice(i)];
}
function reportTabDef(id) { return reportTabsList().find((t) => t.id === id) || null; }
// يُبقي REPORT_TAB_CATALOG وأزرار الصلاحيات (chip:*) متزامنة مع القائمة الحالية (تعديل في المكان)
function syncReportTabCatalog() {
  const list = reportTabsList();
  REPORT_TAB_CATALOG.splice(0, REPORT_TAB_CATALOG.length, ...list.map((t) => ({ id: t.id, label: t.label })));
  if (typeof BUTTON_CATALOG === "undefined") return;
  for (let i = BUTTON_CATALOG.length - 1; i >= 0; i--) if (BUTTON_CATALOG[i].id.indexOf("chip:") === 0) BUTTON_CATALOG.splice(i, 1);
  BUTTON_CATALOG.splice(0, 0, ...list.map((t) => ({ id: "chip:" + t.id, g: "قائمة التقارير", label: "زر «" + t.label + "»", sel: '[data-action="set-unit-reports-filter"][data-filter="' + t.id + '"]' })));
}
function reportMatchesCatalogTab(r, id) {
  const t = reportTabDef(id);
  if (!t) return false;
  if (t.special === "all") return !isReportArchived(r);
  if (t.special === "archived") return isReportArchived(r);
  if (isReportArchived(r)) return false;
  return (t.statuses || []).indexOf(r.status) !== -1 || (t.adminStatuses || []).indexOf(r.status) !== -1;
}
// إعداد الأزرار الفعلي للمستخدمة الحالية: المسمى الوظيفي (مع الفروع) أولًا، ثم
// سجل الحساب نفسه. مديرة النظام بلا مسمى = كامل دائمًا (null). null = القديم.
function effectiveReportTabsConfig() {
  if (S.personNotifyTabs && S.personNotifyTabs.length) return { tabs: [], notify: S.personNotifyTabs };
  if (S.isAdmin || S.isExecutive) return null;
  let ent = null;
  if (S.isDepartmentUser) ent = (S.departments || []).find((d) => d.id === S.currentDepartmentId);
  else if (S.isOfficeUser) ent = (S.offices || []).find((o) => o.id === S.currentOfficeId);
  else ent = (S.units || []).find((u) => u.id === S.currentUnitId);
  return ent ? parseReportTabsCfg(ent.reportTabs) : null;
}
function siteSettingsToRow(s) {
  return {
    id: "main",
    primary_color: s.primary || DEFAULT_SITE_COLORS.primary,
    background: s.background || DEFAULT_SITE_COLORS.background,
    logo_url: s.logo || null,
    logo_size: s.logoSize || DEFAULT_BRANDING.logoSize,
    banner_image_url: s.bannerImage || null,
    banner_title: s.bannerTitle || DEFAULT_BRANDING.bannerTitle,
    banner_sub: s.bannerSub || DEFAULT_BRANDING.bannerSub,
    platform_name: s.platformName || DEFAULT_BRANDING.platformName,
    sidebar_tagline: s.sidebarTagline != null ? s.sidebarTagline : DEFAULT_BRANDING.sidebarTagline,
    sidebar_tagline_image_url: s.sidebarTaglineImage || null,
    font_family: s.fontFamily || DEFAULT_BRANDING.fontFamily,
    theme_json: JSON.stringify(s.theme || {}),
  };
}
function rowToSiteSettings(r) {
  return {
    primary: r.primary_color || DEFAULT_SITE_COLORS.primary,
    background: r.background || DEFAULT_SITE_COLORS.background,
    logo: r.logo_url || null,
    logoSize: Number(r.logo_size) || DEFAULT_BRANDING.logoSize,
    bannerImage: r.banner_image_url || null,
    bannerTitle: r.banner_title || DEFAULT_BRANDING.bannerTitle,
    bannerSub: r.banner_sub || DEFAULT_BRANDING.bannerSub,
    platformName: r.platform_name || DEFAULT_BRANDING.platformName,
    sidebarTagline: r.sidebar_tagline != null ? r.sidebar_tagline : DEFAULT_BRANDING.sidebarTagline,
    sidebarTaglineImage: r.sidebar_tagline_image_url || null,
    fontFamily: r.font_family || DEFAULT_BRANDING.fontFamily,
    theme: (() => { try { return r.theme_json ? JSON.parse(r.theme_json) : {}; } catch (e) { return {}; } })(),
  };
}
// ما يظهر في «لوحة المعلومات» لكل نوع جهة: { [kind]: { hidden: [مفاتيح العناصر المخفية] } }.
// الفارغ = كل شيء ظاهر كما كان. صف واحد (id: "main").
function dashboardConfigToRow(cfg) { return { id: "main", config: cfg || {} }; }
function rowToDashboardConfig(r) { return (r && r.config && typeof r.config === "object") ? r.config : {}; }
function indDefToRow(d) { return { id: d.id, name: d.name, category: d.category || "", direction: d.direction || "", nature: d.nature || "", frequency: d.frequency || "", unit: d.unit || "", target: String(d.target ?? ""), data_source: d.dataSource || "", calculation_method: d.calculationMethod || "" }; }
function rowToIndDef(r) { return { id: r.id, name: r.name, category: r.category || "", direction: r.direction || "", nature: r.nature || "", frequency: r.frequency || "", unit: r.unit || "", target: r.target || "", dataSource: r.data_source || "", calculationMethod: r.calculation_method || "" }; }
function goalToRow(g, kind) { return { id: g.id, name: g.name, kind, parent_id: kind === "operational" ? (g.parentId || null) : null }; }
function rowToGoal(r) { return { id: r.id, name: r.name, parentId: r.parent_id || "" }; }
function sectionDefToRow(s, i) { return { id: s.id, label: s.label, order_index: s.order ?? i, enabled: s.enabled !== false }; }
function rowToSectionDef(r) { return { id: r.id, label: r.label, order: Number(r.order_index) || 0, enabled: r.enabled !== false }; }
// خريطة حقول قسم واحد (section_id -> قائمة تعريفات الحقول) تُخزَّن كصف واحد لكل قسم،
// وقيمة fields نفسها JSON خام (jsonb) بدون أي تحويل شكل — هي نفس بنية SECTION_FIELD_SCHEMAS[id].fields.
function fieldSchemaToRow(sectionId, fields) { return { section_id: sectionId, fields: fields || [], updated_at: Date.now() }; }
function rowToFieldSchemaEntry(r) { return { sectionId: r.section_id, fields: Array.isArray(r.fields) ? r.fields : [] }; }
function reportToRow(unitId, r) { return { id: r.id, unit_id: unitId, label: r.label || "", status: r.status || "draft", report_type: r.reportType || "general", created_at: r.createdAt || Date.now(), updated_at: r.updatedAt || Date.now(), shared: r.shared || {}, sections: r.sections || {}, last_section_id: r.lastSectionId || "", internal_sent_at: r.internalSentAt || null, internal_sent_by: r.internalSentBy || null, internal_review_notes: r.internalReviewNotes || null, internal_returned_at: r.internalReturnedAt || null,
  // مسار الاعتماد: المرحلة الحالية ("ap:<pathId>:<stageId>") + سجل الإرسال والإعادة
  custom_stage_id: r.customStageId || null,
  custom_log: r.customLog || [],
}; }
function rowToReport(r) { return ({ id: r.id, label: r.label || "", status: r.status || "draft", reportType: r.report_type || "general", createdAt: Number(r.created_at) || 0, updatedAt: Number(r.updated_at) || 0, shared: r.shared || {}, sections: r.sections || {}, lastSectionId: r.last_section_id || "", internalSentAt: r.internal_sent_at ? Number(r.internal_sent_at) : null, internalSentBy: r.internal_sent_by || null, internalReviewNotes: r.internal_review_notes || null, internalReturnedAt: r.internal_returned_at ? Number(r.internal_returned_at) : null,
  customStageId: r.custom_stage_id || null,
  customLog: Array.isArray(r.custom_log) ? r.custom_log : [],
}); }

function localLogin(name, password) {
  const hit = (list) => (list || []).find((x) => x.name === name && x.password && x.password === password && x.status !== "disabled");
  const u = hit(dataStore.getUnits());
  if (u) return { id: u.id, name: u.name, role: u.role || "unit", unitId: u.role === "admin" ? null : u.id };
  const d = hit(dataStore.getDepartments());
  if (d) return { id: d.id, name: d.name, role: "department", departmentId: d.id };
  const o = hit(dataStore.getOffices());
  if (o) return { id: o.id, name: o.name, role: "office", officeId: o.id };
  return null;
}
async function supabaseLogin(name, password) {
  const uRes = await supabaseRequest(`units?name=eq.${encodeURIComponent(name)}&password=eq.${encodeURIComponent(password)}&select=*&limit=1`);
  if (!uRes.ok) return { ok: false, error: uRes.error || "تعذر الاتصال بقاعدة البيانات" };
  if (Array.isArray(uRes.data) && uRes.data.length) {
    const m = rowToUnit(uRes.data[0]);
    if (m.status === "disabled") return { ok: false, error: "هذا الحساب معطّل حاليًا" };
    return { ok: true, user: { id: m.id, name: m.name, role: m.role, unitId: m.role === "admin" ? null : m.id } };
  }
  const dRes = await supabaseRequest(`departments?name=eq.${encodeURIComponent(name)}&password=eq.${encodeURIComponent(password)}&select=*&limit=1`);
  if (!dRes.ok) return { ok: false, error: dRes.error || "تعذر الاتصال بقاعدة البيانات" };
  if (Array.isArray(dRes.data) && dRes.data.length && dRes.data[0].password) {
    const m = rowToDept(dRes.data[0]);
    if (m.status === "disabled") return { ok: false, error: "هذا الحساب معطّل حاليًا" };
    return { ok: true, user: { id: m.id, name: m.name, role: "department", departmentId: m.id } };
  }
  const oRes = await supabaseRequest(`offices?name=eq.${encodeURIComponent(name)}&password=eq.${encodeURIComponent(password)}&select=*&limit=1`);
  if (!oRes.ok) return { ok: false, error: oRes.error || "تعذر الاتصال بقاعدة البيانات" };
  if (Array.isArray(oRes.data) && oRes.data.length && oRes.data[0].password) {
    const m = rowToOffice(oRes.data[0]);
    if (m.status === "disabled") return { ok: false, error: "هذا الحساب معطّل حاليًا" };
    return { ok: true, user: { id: m.id, name: m.name, role: "office", officeId: m.id } };
  }
  return { ok: false, error: "اسم الوحدة أو القسم أو المكتب أو كلمة المرور غير صحيحة" };
}

/* =============================== Storage layer ============================= */
const UNITS_KEY = "prs:units", DEPARTMENTS_KEY = "prs:departments", OFFICES_KEY = "prs:offices",
      INDICATOR_DEFINITIONS_KEY = "prs:indicator-definitions", GOALS_DEFINITIONS_KEY = "prs:goals-definitions",
      SITE_SETTINGS_KEY = "prs:site-settings", REPORT_SECTIONS_KEY = "prs:report-sections",
      SECTION_FIELD_SCHEMAS_KEY = "prs:section-field-schemas",
      DASHBOARD_CONFIG_KEY = "prs:dashboard-config", ROLES_KEY = "prs:roles", PERSONS_KEY = "prs:persons", PERM_LOG_KEY = "prs:perm-log", APPROVAL_PATHS_KEY = "prs:approval-paths";
const DEFAULT_SITE_COLORS = { primary: "#6b2337", background: "#F2ECE8" };
// ألوان الموقع الإضافية + ضبط عبارة الشريط الجانبي + ألوان بطاقات تصفّح الهيكل —
// تُحفظ كلها في عمود واحد theme_json بجدول site_settings (نص JSON).
const DEFAULT_THEME = {
  ink: "#2E2430", subtle: "#9c8b92", border: "#eddde2",
  green: "#2E8B67", gold: "#D89A57", danger: "#D65B57", blue: "#8B4A73",
  sidebarBg: "#faf6f4", navActive: "#6b2337", sidebarBgImage: "", sidebarBgVeil: 35, iconColor: "", fieldIconColor: "",
  navColor: "", navSize: 12, sbTitleColor: "", sbTitleSize: 15, bannerTitleColor: "", bannerTitleSize: 27, bannerSubColor: "", bannerSubSize: 13,
  taglineOffset: 0, taglineSize: 13, taglineImgH: 70, taglineColor: "",
  bs: ["#f1d0d9", "#e6c1cf", "#d9b6c9", "#eed3ab", "#dac3cf"],
};
const DEFAULT_THEME_BG = { green: "#e7f5ee", gold: "#fbf0e1", danger: "#fcebe9", blue: "#f3e9ef" };
const THEME_COLOR_FIELDS = [
  { key: "ink", label: "لون النصوص الأساسية" },
  { key: "subtle", label: "لون النصوص الفرعية الباهتة" },
  { key: "border", label: "لون الحدود والخطوط" },
  { key: "sidebarBg", label: "خلفية الشريط الجانبي" },
  { key: "navActive", label: "لون الصفحة المحددة بالشريط الجانبي (مثل «جميع تقارير الوحدة»)" },
  { key: "green", label: "الأخضر (مكتمل / نجاح)" },
  { key: "gold", label: "الذهبي (قيد المراجعة)" },
  { key: "danger", label: "الأحمر (تنبيه / حذف)" },
  { key: "blue", label: "اللون الثانوي (بنفسجي)" },
];
const TEXT_STYLE_FIELDS = [
  { k: "nav", label: "نصوص قائمة الشريط الجانبي", min: 10, max: 18, def: 12 },
  { k: "sbTitle", label: "اسم المنصة بالشريط الجانبي", min: 12, max: 28, def: 15 },
  { k: "bannerTitle", label: "عنوان بانر لوحة المعلومات", min: 18, max: 48, def: 27 },
  { k: "bannerSub", label: "وصف بانر لوحة المعلومات", min: 10, max: 24, def: 13 },
];
function themeOf(settings) { return { ...DEFAULT_THEME, ...((settings && settings.theme) || {}), bs: Object.assign([], DEFAULT_THEME.bs, (settings && settings.theme && settings.theme.bs) || []) }; }
function hexToRgb(h) { h = String(h || "").replace("#", ""); if (h.length === 3) h = h.split("").map((c) => c + c).join(""); const n = parseInt(h, 16); return isNaN(n) || h.length !== 6 ? [255, 255, 255] : [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function mixHex(a, b, t) { const x = hexToRgb(a), y = hexToRgb(b); return "#" + x.map((v, i) => Math.round(v * (1 - t) + y[i] * t).toString(16).padStart(2, "0")).join(""); }
// إعدادات الهوية القابلة للتخصيص من "إعدادات الموقع": الشعار وحجمه، بانر لوحة
// المعلومات (صورة + عنوان + وصف)، اسم المنصة بعنوان الشريط الجانبي، وعبارة/صورة
// الشريط الجانبي قبل زر تسجيل الخروج. null تعني: استخدام الافتراضي المُبرمَج.
const DEFAULT_BRANDING = {
  logo: null,
  logoSize: 30,
  bannerImage: null,
  bannerTitle: "منصة التقارير",
  bannerSub: "نحو تقارير أكثر دقة وتنظيمًا",
  platformName: "منصة التقارير",
  sidebarTagline: "تقارير دقيقة.. لأثر أكبر",
  sidebarTaglineImage: null,
  fontFamily: "IBM Plex Sans Arabic",
};
// قائمة خطوط عربية جاهزة (محمّلة مسبقًا من Google Fonts بملف index.html) —
// تُطبَّق على واجهة الموقع كلها (نصوص، عناوين، أزرار) فيما عدا التقرير المطبوع/PDF
// اللي يبقى بخطه الثابت (Almarai/Amiri) عمدًا لضمان ثبات شكل المستند المطبوع.
const FONT_OPTIONS = [
  { value: "IBM Plex Sans Arabic", label: "IBM Plex Sans Arabic (الافتراضي)" },
  { value: "Cairo", label: "Cairo" },
  { value: "Tajawal", label: "Tajawal" },
  { value: "Almarai", label: "Almarai" },
  { value: "Changa", label: "Changa" },
  { value: "Noto Kufi Arabic", label: "Noto Kufi Arabic" },
  { value: "Reem Kufi", label: "Reem Kufi" },
  { value: "Amiri", label: "Amiri (خط كلاسيكي)" },
];
function siteLogoSrc(s) { return (s && s.logo) || ASSOCIATION_LOGO; }
function siteBannerSrc(s) { return (s && s.bannerImage) || "hero-bg.jpg"; }
function sidebarTaglineBlockHtml(site) {
  const th = themeOf(site);
  return `
    <div class="sidebar-tagline-block" style="position:relative;top:${Number(th.taglineOffset) || 0}px;">
      ${site.sidebarTaglineImage ? `<img src="${esc(site.sidebarTaglineImage)}" class="sidebar-tagline-img" alt="" style="max-height:${Number(th.taglineImgH) || 70}px;" />` : ""}
      ${site.sidebarTagline ? `<div class="sidebar-tagline" style="font-size:${Number(th.taglineSize) || 13}px;${th.taglineColor ? "color:" + esc(th.taglineColor) + ";" : ""}">${esc(site.sidebarTagline)}</div>` : ""}
    </div>`;
}
function currentSiteSettings() { return S.siteSettings || dataStore.getSiteSettings(); }
const reportsKey = (unitId) => `prs:reports:${unitId}`;

function lsGet(key) { const v = localStorage.getItem(key); return v != null ? v : null; }
function lsSet(key, value) { localStorage.setItem(key, value); }
function lsDelete(key) { localStorage.removeItem(key); }

// تربط تلقائيًا الأقسام المعروفة بمكتب إشرافها الصحيح — تُطبَّق فقط على قسم
// ليس له "officeId" محفوظ أصلاً؛ لا تلمس أي قسم مربوط أو مُعدَّل يدويًا من قبل.
function emptyReport() { return { sections: {}, shared: {} }; }

const dataStore = {
  getDepartments() {
    const v = lsGet(DEPARTMENTS_KEY);
    return v ? JSON.parse(v) : [];
  },
  saveDepartments(d) {
    saveListTable(DEPARTMENTS_KEY, "departments", d, (l) => (l || []).map(deptToRow));
  },
  getOffices() { const v = lsGet(OFFICES_KEY); return v ? JSON.parse(v) : []; },
  saveOffices(o) {
    saveListTable(OFFICES_KEY, "offices", o, (l) => (l || []).map(officeToRow));
  },
  getDashboardConfig() { try { const v = lsGet(DASHBOARD_CONFIG_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } },
  saveDashboardConfig(cfg) {
    lsSet(DASHBOARD_CONFIG_KEY, JSON.stringify(cfg));
    if (dbConnected()) supabaseRequest("dashboard_config", { method: "POST", prefer: "return=minimal,resolution=merge-duplicates", body: JSON.stringify(dashboardConfigToRow(cfg)) }).then(dbWriteCheck("dashboard_config")).catch(() => {});
  },
  cacheOfficesLocally(o) { lsSet(OFFICES_KEY, JSON.stringify(o)); },
  getUnits() { const v = lsGet(UNITS_KEY); return v ? JSON.parse(v) : []; },
  saveUnits(u) {
    saveListTable(UNITS_KEY, "units", u, (l) => (l || []).map(unitToRow));
  },
  getIndicatorDefinitions() { const v = lsGet(INDICATOR_DEFINITIONS_KEY); return v ? JSON.parse(v) : []; },
  saveIndicatorDefinitions(d) {
    saveListTable(INDICATOR_DEFINITIONS_KEY, "indicator_definitions", d, (l) => (l || []).map(indDefToRow));
  },
  getSiteSettings() { const v = lsGet(SITE_SETTINGS_KEY); return { ...DEFAULT_SITE_COLORS, ...DEFAULT_BRANDING, ...(v ? JSON.parse(v) : {}) }; },
  saveSiteSettings(s) {
    lsSet(SITE_SETTINGS_KEY, JSON.stringify(s));
    if (dbConnected()) queueSupabaseTask("site_settings", () => supabaseRequest("site_settings", { method: "POST", prefer: "return=minimal,resolution=merge-duplicates", body: JSON.stringify(siteSettingsToRow(s)) }).then(dbWriteCheck("site_settings")));
  },
  cacheIndicatorDefinitionsLocally(d) { lsSet(INDICATOR_DEFINITIONS_KEY, JSON.stringify(d)); },
  cacheUnitsLocally(u) { lsSet(UNITS_KEY, JSON.stringify(u)); },
  cacheDepartmentsLocally(d) { lsSet(DEPARTMENTS_KEY, JSON.stringify(d)); },
  getRoles() { const v = lsGet(ROLES_KEY); return v ? JSON.parse(v) : []; },
  saveRoles(list) {
    saveListTable(ROLES_KEY, "roles", list, (l) => (l || []).map(roleToRow));
  },
  getReportTabs() { const v = lsGet(REPORT_TABS_KEY); return v ? JSON.parse(v) : []; },
  saveReportTabs(list) {
    saveListTable(REPORT_TABS_KEY, "report_tabs", list, (l) => (l || []).map(reportTabToRow));
  },
  getApprovalPaths() { const v = lsGet(APPROVAL_PATHS_KEY); return v ? JSON.parse(v) : []; },
  saveApprovalPaths(list) {
    saveListTable(APPROVAL_PATHS_KEY, "approval_paths", list, (l) => (l || []).map(approvalPathToRow));
  },
  getPermLog() { const v = lsGet(PERM_LOG_KEY); return v ? JSON.parse(v) : []; },
  getPersons() { const v = lsGet(PERSONS_KEY); return v ? JSON.parse(v) : []; },
  savePersons(list) {
    saveListTable(PERSONS_KEY, "persons", list, (l) => (l || []).map(personToRow));
  },
  getGoalsDefinitions() { const v = lsGet(GOALS_DEFINITIONS_KEY); return v ? JSON.parse(v) : { strategic: [], operational: [] }; },
  saveGoalsDefinitions(d) {
    saveListTable(GOALS_DEFINITIONS_KEY, "goals_definitions", d, (o) => ((o && o.strategic) || []).map((g) => goalToRow(g, "strategic")).concat(((o && o.operational) || []).map((g) => goalToRow(g, "operational"))));
  },
  cacheGoalsDefinitionsLocally(d) { lsSet(GOALS_DEFINITIONS_KEY, JSON.stringify(d)); },
  getReportSectionDefs() { const v = lsGet(REPORT_SECTIONS_KEY); return v ? JSON.parse(v) : DEFAULT_SECTIONS.map((s, i) => ({ id: s.id, label: s.label, order: i, enabled: true })); },
  saveReportSectionDefs(list) {
    saveListTable(REPORT_SECTIONS_KEY, "report_sections", list, (l) => (l || []).map(sectionDefToRow));
  },
  cacheReportSectionDefsLocally(list) { lsSet(REPORT_SECTIONS_KEY, JSON.stringify(list)); },
  // خريطة { sectionId: [field, field, ...] } — تخصيصات حقول الأقسام المبنية على
  // المحرك العام (SECTION_FIELD_SCHEMAS). خالية = لا تخصيصات محفوظة بعد، فيستخدم
  // النظام التعريفات الافتراضية المكتوبة بالكود كما هي.
  getSectionFieldSchemas() { const v = lsGet(SECTION_FIELD_SCHEMAS_KEY); return v ? JSON.parse(v) : {}; },
  saveSectionFieldSchemas(map) {
    saveListTable(SECTION_FIELD_SCHEMAS_KEY, "section_field_schemas", map, (o) => Object.keys(o || {}).map((id) => fieldSchemaToRow(id, o[id])), "section_id");
  },
  cacheSectionFieldSchemasLocally(map) { lsSet(SECTION_FIELD_SCHEMAS_KEY, JSON.stringify(map)); },
  // Each unit now holds a LIST of report entries (one per period/submission),
  // each carrying its own status: draft / custom_pending / returned / completed / approved.
  getReports(unitId) {
    const v = lsGet(reportsKey(unitId));
    return v ? JSON.parse(v) : [];
  },
  saveReports(unitId, list) { lsSet(reportsKey(unitId), JSON.stringify(list)); },
  cacheReportsLocally(unitId, list) { lsSet(reportsKey(unitId), JSON.stringify(list)); },
  deleteReports(unitId) {
    lsDelete(reportsKey(unitId));
    if (dbConnected()) supabaseRequest(`reports?unit_id=eq.${encodeURIComponent(unitId)}`, { method: "DELETE", prefer: "return=minimal" }).then(dbWriteCheck("reports")).catch(() => {});
  },
  deleteOneReport(unitId, reportId) {
    const list = ensureUnitReportsLoaded(unitId).filter((r) => r.id !== reportId);
    lsSet(reportsKey(unitId), JSON.stringify(list));
    if (dbConnected()) supabaseRequest(`reports?id=eq.${encodeURIComponent(reportId)}`, { method: "DELETE", prefer: "return=minimal" }).then(dbWriteCheck("reports")).catch(() => {});
    return list;
  },
};

/* ---- Multi-report helpers (operate on S.reports[unitId] = array) ---------- */
function ensureUnitReportsLoaded(unitId) {
  if (!S.reports[unitId]) S.reports[unitId] = dataStore.getReports(unitId);
  return S.reports[unitId];
}
function latestReportForUnit(unitId) {
  const list = ensureUnitReportsLoaded(unitId).slice().sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  return list.length ? list[list.length - 1] : emptyReport();
}
function getReportEntry(unitId, reportId) {
  return ensureUnitReportsLoaded(unitId).find((r) => r.id === reportId);
}
function getCurrentReportEntry() {
  if (!S.currentUnitId) return null;
  return getReportEntry(S.currentUnitId, S.currentReportId) || null;
}
// تحقق فعلي على مستوى البيانات (مو بس إخفاء الأزرار) — تمنع أي محاولة لعرض
// تقرير وحدة/مركز خارج نطاق صلاحية المستخدمة الحالية، حتى لو تلاعبت بالطلب.
function isUnitInUserScope(unitId) {
  if (S.levelScope) return S.levelScope.unitIds.has(unitId);
  if (S.isAdmin || S.isExecutive) return true;
  const unit = S.units.find((u) => u.id === unitId);
  if (!unit) return false;
  if (S.isDepartmentUser) return unit.departmentId === S.currentDepartmentId;
  if (S.isOfficeUser) return officeUnits(S.currentOfficeId).some((u) => u.id === unitId);
  return unit.id === S.currentUnitId;
}
// يرفع بيانات التقرير لقاعدة Supabase (upsert بمفتاح id).
// لكتابات القاعدة المباشرة: أي فشل يظهر بنفس الشريط الأحمر الخاص بباقي الجداول
function dbWriteCheck(table) { return (res) => { if (res && !res.ok) reportSupabaseWriteError(table, res.error); }; }
function pushReportToDb(unitId, entry) {
  if (!dbConnected()) return;
  queueSupabaseTask("reports", () => supabaseRequest("reports?on_conflict=id", { method: "POST", prefer: "return=minimal,resolution=merge-duplicates", body: JSON.stringify(reportToRow(unitId, entry)) })
    .then(dbWriteCheck("reports")));
}
// وضع "الاطلاع فقط" لمديرة النظام (الحساب الأصلي): تشوف كل التقارير والأرشيف
// وتتصفحها، لكن بدون تعديل أو إرسال أو اعتماد أو إعادة أو حذف. حسابات "المسمى
// الوظيفي" والأقسام والوحدات الحقيقية لا تتأثر إطلاقًا.
function adminReportsReadOnly() { return !!(S.isAdmin && !S.__adminAllowWrite); }
const ADMIN_READONLY_BLOCKED = ["open-or-create-report", "create-new-report", "delete-report", "confirm-delete-report", "ap-send", "ap-send-confirm", "ap-advance", "ap-return", "ap-open-edit"];
function saveReportEntry(unitId, updatedEntry) {
  if (adminReportsReadOnly()) return;
  const list = ensureUnitReportsLoaded(unitId).map((r) => (r.id === updatedEntry.id ? updatedEntry : r));
  S.reports[unitId] = list;
  dataStore.saveReports(unitId, list);
  pushReportToDb(unitId, updatedEntry);
}
function createNewReportEntry(unitId) {
  if (adminReportsReadOnly()) return null;
  const list = ensureUnitReportsLoaded(unitId);
  const entry = { id: uid("rep"), label: "تقرير جديد", status: "draft", createdAt: Date.now(), updatedAt: Date.now(), sections: {}, shared: {} };
  S.reports[unitId] = [...list, entry];
  dataStore.saveReports(unitId, S.reports[unitId]);
  pushReportToDb(unitId, entry);
  return entry;
}
function reportStatusMeta(status) {
  if (status === "approved") return { label: "معتمد", color: "#6b3fa0", bg: "#efe6f7" };
  if (status === "completed") return { label: "مكتمل", color: GREEN, bg: GREEN_BG };
  if (status === "needs_completion") return { label: "بحاجة إلى استكمال", color: "#c9863a", bg: "#faf0e3" };
  if (status === "returned") return { label: "بحاجة إلى تعديل", color: DANGER, bg: DANGER_BG };
  if (status === "custom_pending") return { label: "قيد المراجعة", color: GOLD, bg: GOLD_BG };
  return { label: "مسودة", color: BLUE, bg: BLUE_BG };
}
/* ===================== المرحلة 4: ربط «مسارات الاعتماد» (approval_paths) بحركة التقرير =====================
   لا يوجد أي مسار افتراضي: لو ما فيه مسار «مفعّل» يطابق التقرير (الجهة + الفترة + دور الكاتبة)
   يبقى كل شيء كما كان تمامًا. عند الإرسال يُثبَّت المسار على التقرير نفسه عبر
   report.customStageId = "ap:<pathId>:<stageId>" (نفس عمود custom_stage_id وسجل custom_log
   الموجودين أصلًا — لا حاجة لتعديل قاعدة البيانات).
   قواعد المراحل: صاحب المرحلة يقدر دائمًا «يُرسل للتالية»؛ «يعتمد» يغيّر الصياغة وحالة النهاية
   (آخر مرحلة: معتمد، وبدونها: مكتمل)؛ «يعيد للتعديل» يرجّع التقرير لصاحبته بملاحظة؛ «يعدّل» يفتح
   له التقرير للتحرير. مرحلة لا فيها اعتماد ولا إعادة ولا تعديل، وصاحبها هي من يرسل، تُتجاوز تلقائيًا. */
const AP_PREFIX = "ap:";
function apRefOf(key) {
  if (typeof key !== "string" || key.indexOf(AP_PREFIX) !== 0) return null;
  const rest = key.slice(AP_PREFIX.length); const i = rest.indexOf(":");
  return i < 0 ? null : { pathId: rest.slice(0, i), stageId: rest.slice(i + 1) };
}
function apPathById(id) { return approvalPathsList().find((p) => p.id === id) || null; }
// المراحل المعطّلة مؤقتًا (st.disabled) تُتخطّى تلقائيًا بالإرسال والاعتماد — كأنها غير موجودة،
// وترجع تعمل بمجرد تفعيلها من جديد (بدون تعديل المسار أو إرجاعه مسودة).
// مراحل المسار الفعّالة. مع unit: تُتخطّى مرحلة «دور من نفس وحدة التقرير» إن لم يكن في الوحدة أحد بهذا الدور
// authorId (اختياري): كاتبة التقرير — المراحل اللي هي صاحبتها تُتخطّى (ما تراجع تقريرها بنفسها)
function apStageList(path, unit, authorId) { return ((path && path.stages) || []).filter((st) => !st.disabled && (!unit || apStageApplies(st, unit, { pathId: path.id, authorId }))).map((st) => apNamedStage(st, path, unit)); }
// كل المراحل الفعّالة (بدون فلترة على الوحدة) بأسمائها لهذه الوحدة — للبحث عن المرحلة الحالية لتقرير
function apStagesNamed(path, unit) { return ((path && path.stages) || []).filter((st) => !st.disabled).map((st) => apNamedStage(st, path, unit)); }
function apNamedStage(st, path, unit) {
  const out = { ...st, key: AP_PREFIX + path.id + ":" + st.id };
  if (path.id !== AUTO_PATH_ID) return out;
  let pk = st.id;
  if (st.treeName && unit) { const l = apStageTreeLevel(st, unit); if (l) { out.name = l.name; out.levelId = l.id; pk = "lvl:" + l.id; } }
  return Object.assign(out, apPermToStage(apAutoPerm(pk)));
}
// المرحلة في «مسار الإرسال» الفعلي — «للعلم فقط» ما يوقف عندها التقرير
function apFlow(list) { return (list || []).filter((s) => !s.info); }
function apPersonInUnit(p, unit) {
  if (!p || !unit) return false;
  const kind = p.ownerKind === "department" ? "dept" : (p.ownerKind || "unit");
  return [{ kind: "unit", id: unit.id }, ...apOwnerCandidatesForUnit(unit)].some((c) => c.kind === kind && c.id === p.ownerId);
}
// هل تمرّ هذه المرحلة على تقارير هذه الوحدة؟ تُتخطّى إذا:
// - «دور من نفس وحدة التقرير» والوحدة ما فيها أحد بهذا الدور
// - «مديرة قسم الوحدة» والوحدة غير مربوطة بقسم
// - صاحبة المرحلة فعّلت تخطّيها لهذه الوحدة من «الإعدادات» (والمرحلة تسمح بالتخطّي)
// - كاتبة التقرير هي نفسها صاحبة المرحلة
function apStageApplies(st, unit, ctx) {
  if (!st || !unit) return true;
  const a = String(st.approver || "");
  if (a.indexOf(AP_TREE_UP) === 0 && !apStageTreeLevel(st, unit)) return false;
  // المسار التلقائي: مرحلة داخل الوحدة أقل من أو بنفس رتبة كاتبة التقرير تُتخطّى (المساعدة لما تكتب ما تمر على المساعدة)
  if (st.unitRank && ctx && ctx.authorId && apAutoAuthorRank(ctx.authorId) >= st.unitRank) return false;
  if (st.sameUnit && a.indexOf("role:") === 0) {
    const rid = a.slice(5);
    if (!personsList().some((p) => p.status !== "disabled" && p.roleId === rid && apPersonInUnit(p, unit))) return false;
  }
  if (ctx && ctx.pathId && st.allowSkip && apUnitSkipList(unit.id).includes(ctx.pathId + ":" + st.id)) return false;
  if (ctx && ctx.authorId && apStageHeldByPerson(st, unit, ctx.authorId)) return false;
  return true;
}
// معتمد ديناميكي من «الهيكل المرن»: "treeup:<n>" = المستوى رقم n فوق وحدة التقرير، من المستويات
// اللي لها حساب فقط (دخول خاص مفعّل، أو مربوطة بقسم/مكتب). مستويات التنظيم بدون حساب تُتجاوز.
const AP_TREE_UP = "treeup:";
function apTreeUpLabel(n) { return ["", "المستوى الأعلى من الوحدة في الهيكل", "المستوى الثاني فوق الوحدة", "المستوى الثالث فوق الوحدة", "المستوى الرابع فوق الوحدة"][n] || ("المستوى " + n + " فوق الوحدة"); }
function olLevelHasAccount(l) { return !!l && ((l.loginId && l.status !== "disabled") || ((l.linkKind === "dept" || l.linkKind === "office") && l.linkId) || olLevelIsExec(l)); }
// مستوى مربوط بحساب «الإدارة العليا» — يدخل المسار مثل القسم والمكتب، وحسابها نفسه يقوم بالمرحلة
function olLevelIsExec(l) { return !!l && l.linkKind === "unit" && !!l.linkId && (S.units || []).some((u) => u.id === l.linkId && u.role === "executive" && u.status !== "disabled"); }
function apTreeUpLevel(unit, approver, skip) {
  if (!unit) return null;
  const n = Number(String(approver).slice(AP_TREE_UP.length)) || 1;
  let l = olActive().find((x) => x.linkKind === "unit" && x.linkId === unit.id);
  if (!l) return null;
  let found = 0, guard = 0;
  while ((l = olFind(l.parentId)) && guard++ < 50) { if (olLevelHasAccount(l) && !(skip && skip.has(l.id)) && ++found === n) return l; }
  return null;
}
// مستوى الهيكل لمرحلة «فوق الوحدة» — مراحل المسار التلقائي تتخطّى المستويات المتخطّاة (للكل أو لهذه الوحدة)
function apStageTreeLevel(st, unit) { return apTreeUpLevel(unit, st.approver, st.treeName ? apAutoSkipLevels(unit) : null); }

/* ===== المسار التلقائي من الهيكل =====
   مسار واحد (id ثابت) لكل الوحدات: أدوار داخل الوحدة (مساعدة ← رئيسة) ثم كل مستوى له حساب فوق الوحدة
   في الهيكل باسمه. الإعدادات في site_settings.theme.autoPath = { idr, ast, head, skipLevels: [] }.
   تخطّي لوحدة واحدة: entityPrefs("unit:<id>").skip فيها "auto-tree:<stageId>" أو "auto-tree:lvl:<levelId>". */
const AUTO_PATH_ID = "auto-tree";
const AUTO_TREE_MAX = 6;
const AUTO_RANKS = [{ k: "idr", label: "إدارية", rank: 0 }, { k: "ast", label: "مساعدة", rank: 1 }, { k: "head", label: "رئيسة", rank: 2 }];
function autoPathCfg() { const th = ((S.siteSettings || {}).theme) || {}; return th.autoPath || {}; }
function autoPathObj() { return apPathById(AUTO_PATH_ID); }
function apAutoAuthorRank(personId) {
  const p = personsList().find((x) => x.id === personId); if (!p || !p.roleId) return -1;
  const c = autoPathCfg(); const r = AUTO_RANKS.find((x) => c[x.k] && c[x.k] === p.roleId);
  return r ? r.rank : -1;
}
function apAutoSkipLevels(unit) {
  const out = new Set(autoPathCfg().skipLevels || []);
  if (unit) apUnitSkipList(unit.id).forEach((k) => { const pre = AUTO_PATH_ID + ":lvl:"; if (k.indexOf(pre) === 0) out.add(k.slice(pre.length)); });
  return out;
}
function apAutoBuildStages(cfg, old) {
  const keep = (id) => { const o = (old || []).find((x) => x.id === id); return o && o.disabled ? { disabled: true } : {}; };
  const base = { allowSkip: true };
  const st = [];
  [["ast", "مساعدة الوحدة", 1], ["head", "رئيسة الوحدة", 2]].forEach(([k, name, rank]) => { if (cfg[k]) st.push({ id: k, name, approver: "role:" + cfg[k], sameUnit: true, unitRank: rank, ...base, ...keep(k) }); });
  for (let n = 1; n <= AUTO_TREE_MAX; n++) st.push({ id: "t" + n, name: apTreeUpLabel(n), approver: AP_TREE_UP + n, treeName: true, ...base, ...keep("t" + n) });
  return st;
}
// وش تسوي كل مرحلة: لأدوار الوحدة بمفتاح الدور (ast/head) ولمستويات الهيكل بمفتاح "lvl:<id>"
const AUTO_PERM_DEFAULT = { mode: "approve", ret: true, comp: true, edit: false, note: false, back: false, final: false, curate: false, info: false, skip: true };
const AUTO_PERM_OPTS = [
  { k: "ret", label: "تعيد للتعديل", color: "#B23B37", t: "ترجعه لصاحبته «بحاجة إلى تعديل» بملاحظة." },
  { k: "comp", label: "تعيد للاستكمال", color: "#b0601e", t: "ترجعه لصاحبته «بحاجة إلى استكمال» — لو ناقص بيانات." },
  { k: "back", label: "تعيده للمرحلة السابقة", color: "#8a3350", t: "ترجعه للي قبلها في المسار بدل صاحبته." },
  { k: "edit", label: "تعدّل", color: "#C0782E", t: "تفتح التقرير وتعدّل فيه بنفسها قبل ما ترسله." },
  { k: "note", label: "ملاحظة إلزامية", color: "#5b3a73", t: "ما ترسل ولا تعتمد إلا إذا كتبت ملاحظة." },
  { k: "curate", label: "تعتمد أبرز النتائج والتوصيات", color: "#24527a", t: "تختار من التقرير أهم الإنجازات والتوصيات — تطلع أولًا في الملخص والتقرير النهائي." },
  { k: "final", label: "اعتماد نهائي", color: "#2E6B52", t: "لما تعتمد يصير التقرير «معتمد» وينتهي المسار عندها — ما يطلع للي فوقها." },
  { k: "skip", label: "تتخطّاها صاحبتها", color: "#4d5a66", t: "صاحبة المرحلة تقدر تتخطّاها لوحداتها من «الإعدادات»، واللي قبلها تقدر ترسل للي بعدها مباشرة." },
  { k: "info", label: "للعلم فقط", color: "#6f5f66", t: "توصلها نسخة تشوفها — والتقرير ما يوقف عندها." }];
function apAutoPerm(pk) { return { ...AUTO_PERM_DEFAULT, ...((autoPathCfg().perms || {})[pk] || {}) }; }
function apPermToStage(p) {
  return { canApprove: p.mode === "approve", canReturn: !!p.ret, canComplete: !!p.comp, canBack: !!p.back, canEdit: !!p.edit, noteRequired: !!p.note,
    finalApprove: p.mode === "approve" && !!p.final, canCurate: !!p.curate, info: !!p.info, allowSkip: !!p.skip };
}
// مين يكتب: الأدوار المختارة اللي موجودة في الوحدة؛ لو ولا وحدة منها موجودة = أصغر دور موجود
function apAutoWriterRanks(unit) {
  const c = autoPathCfg(), w = c.writers || { idr: true, ast: true, head: true };
  const has = (r) => !!c[r.k] && personsList().some((p) => p.status !== "disabled" && p.roleId === c[r.k] && apPersonInUnit(p, unit));
  const present = AUTO_RANKS.filter(has);
  const chosen = present.filter((r) => w[r.k]);
  return (chosen.length ? chosen : present.slice(0, 1)).map((r) => r.rank);
}
function apAutoAuthorAllowed(unit, personId) {
  if (!personId) return true;
  const r = apAutoAuthorRank(personId);
  return r < 0 || apAutoWriterRanks(unit).includes(r);
}
function apAutoGuessRoles() {
  const rs = rolesList().filter((r) => r.status !== "disabled");
  const f = (re) => (rs.find((r) => re.test(r.name || "")) || {}).id || "";
  return { idr: f(/إداري/), ast: f(/مساعد/), head: f(/رئيس/) };
}
function apAutoSave(patch) {
  const cfg = { ...autoPathCfg(), ...patch };
  saveSiteTheme((th) => ({ autoPath: { ...(th.autoPath || {}), ...patch } }));
  const list = approvalPathsList().slice();
  const i = list.findIndex((p) => p.id === AUTO_PATH_ID);
  const cur = i >= 0 ? list[i] : { id: AUTO_PATH_ID, name: "المسار التلقائي من الهيكل", ownerKind: "all", ownerId: "", periodType: "", authorRoleId: "", status: "draft", createdAt: Date.now() };
  const next = { ...cur, stages: apAutoBuildStages(cfg, cur.stages) };
  if (i >= 0) list[i] = next; else list.push(next);
  S.approvalPaths = list; dataStore.saveApprovalPaths(list);
}
// بعد أي تخطٍّ أو تغيير: التقرير الواقف عند مرحلة ما عادت تمر عليه (متخطّاة / للعلم فقط / ما فيها أحد)
// ينتقل للي بعدها في المسار، ولو ما بعدها شيء ينتهي المسار — ما يبقى تقرير معلّق عند أحد
function apRepairStuck(onlyUnitId) {
  const path = autoPathObj(); if (!path) return;
  const all = path.stages || [];
  const prevAllow = S.__adminAllowWrite; S.__adminAllowWrite = true;
  try {
    (S.units || []).forEach((unit) => {
      if (onlyUnitId && unit.id !== onlyUnitId) return;
      ensureUnitReportsLoaded(unit.id).forEach((report) => {
        const ref = report.status === "custom_pending" && apRefOf(report.customStageId);
        if (!ref || ref.pathId !== path.id) return;
        const idx = all.findIndex((x) => x.id === ref.stageId), raw = all[idx];
        const ctx = { pathId: path.id, authorId: report.internalSentBy };
        if (raw && !raw.disabled && apStageApplies(raw, unit, ctx) && !apNamedStage(raw, path, unit).info) return;
        const nextSt = apFlow(apStageList(path, unit, report.internalSentBy)).find((x) => all.findIndex((y) => y.id === x.id) > idx);
        const log = [...(report.customLog || [])];
        const nm = raw ? raw.name : "مرحلة";
        if (nextSt) {
          log.push(apLogEntry("send", report.customStageId, nextSt.key, "تخطّى «" + nm + "» (ما عادت في مسار هذه الوحدة) إلى " + nextSt.name));
          saveReportEntry(unit.id, { ...report, customStageId: nextSt.key, customLog: log, updatedAt: Date.now() });
        } else {
          log.push(apLogEntry("final", report.customStageId, "final", "انتهى المسار — تخطّى «" + nm + "»"));
          saveReportEntry(unit.id, { ...report, status: "completed", customStageId: null, customLog: log, updatedAt: Date.now() });
        }
      });
    });
  } finally { S.__adminAllowWrite = prevAllow; }
}
// هل الجلسة الحالية هي حساب هذا المستوى؟ (دخول المستوى نفسه، أو حساب القسم/المكتب المربوط به)
function sessionIsLevel(l) {
  if (!l) return false;
  if (S.levelScope) return S.levelScope.levelId === l.id;
  if (S.currentPersonId) return false;
  if (l.linkKind === "dept") return !!S.isDepartmentUser && S.currentDepartmentId === l.linkId;
  if (l.linkKind === "office") return !!S.isOfficeUser && S.currentOfficeId === l.linkId;
  if (olLevelIsExec(l)) return !!S.isExecutive && !!S.currentUser && S.currentUser.id === l.linkId;
  return false;
}
function apStageHeldByPerson(st, unit, personId) {
  if (!personId || !st || String(st.approver || "").indexOf("role:") !== 0) return false;
  const p = personsList().find((x) => x.id === personId);
  return !!p && p.roleId === String(st.approver).slice(5) && (!st.sameUnit || !unit || apPersonInUnit(p, unit));
}
/* إعدادات كل جهة (صفحة «الإعدادات»): تُحفظ في site_settings.theme_json.entityPrefs["unit:<id>"]
   { skip: ["<pathId>:<stageId>"], sectionsOff: { "<نوع الفترة>": ["<sectionId>"] } } */
function entityPrefs(key) { const th = ((S.siteSettings || {}).theme) || {}; return (th.entityPrefs && th.entityPrefs[key]) || {}; }
async function saveEntityPrefs(key, patch) {
  saveSiteTheme((th) => { const all = { ...(th.entityPrefs || {}) }; all[key] = { ...(all[key] || {}), ...patch }; return { entityPrefs: all }; });
}
function apUnitSkipList(unitId) { return entityPrefs("unit:" + unitId).skip || []; }
// المسار المثبَّت على التقرير (من المرحلة الحالية أو من آخر حركة بالسجل)
function reportApPathId(report) {
  if (!report) return null;
  const cur = apRefOf(report.customStageId);
  if (cur) return cur.pathId;
  const log = report.customLog || [];
  for (let i = log.length - 1; i >= 0; i--) {
    const r = apRefOf(log[i].to) || apRefOf(log[i].from);
    if (r) return r.pathId;
  }
  return null;
}
function apOwnerCandidatesForUnit(unit) {
  if (!unit) return [];
  if (unit.role === "self_report") {
    if (unit.departmentId) return [{ kind: "dept", id: unit.departmentId }];
    if (unit.officeId) return [{ kind: "office", id: unit.officeId }];
    return [];
  }
  return [{ kind: "unit", id: unit.id }];
}
function currentPersonObj() { return S.currentPersonId ? (personsList().find((x) => x.id === S.currentPersonId) || null) : null; }
// أنسب مسار مفعّل لهذا التقرير: الأكثر تحديدًا (فترة محددة / دور محدد) يفوز
function matchApprovalPath(unit, report) { return matchingApprovalPaths(unit, report)[0] || null; }
function matchingApprovalPaths(unit, report) {
  if (!unit || unit.role === "admin" || unit.role === "executive") return [];
  const p = autoPathObj();
  if (!p || p.status !== "active" || !apFlow(apStageList(p, unit)).length) return [];
  if (!apAutoAuthorAllowed(unit, S.currentPersonId)) return [];
  return [p];
}
// هل الجلسة الحالية هي صاحبة هذه المرحلة؟ (مديرة النظام للاطلاع فقط فلا تُعدّ صاحبة مرحلة)
// unit (اختياري): وحدة التقرير — لمرحلة «دور من نفس وحدة التقرير»
function userHoldsApStage(stage, unit) {
  if (!stage || !stage.approver || S.isAdmin) return false;
  const s = String(stage.approver); const i = s.indexOf(":");
  const k = s.slice(0, i), id = s.slice(i + 1);
  if (k === "role") {
    if (S.levelScope) return S.levelScope.roleId === id && (!stage.sameUnit || !unit || S.levelScope.unitIds.has(unit.id));
    const p = currentPersonObj();
    if (!p || p.roleId !== id) return false;
    return !stage.sameUnit || !unit || apPersonInUnit(p, unit);
  }
  if (k === "treeup") return unit ? sessionIsLevel(apStageTreeLevel(stage, unit)) : olActive().some((l) => olLevelHasAccount(l) && sessionIsLevel(l));
  return false;
}
function apStageIsPassThrough(st) { return !st.canApprove && !st.canReturn && !st.canEdit; }
function apPendingForMe() {
  const out = [];
  (S.units || []).forEach((u) => {
    if (S.levelScope && !S.levelScope.unitIds.has(u.id)) return;
    ensureUnitReportsLoaded(u.id).forEach((r) => {
      if (r.status !== "custom_pending") return;
      const ref = apRefOf(r.customStageId); if (!ref) return;
      const p = apPathById(ref.pathId); if (!p) return;
      const stages = apFlow(apStageList(p, u, r.internalSentBy));
      const stage = apStagesNamed(p, u).find((s) => s.key === r.customStageId);
      if (stage && userHoldsApStage(stage, u)) out.push({ unit: u, report: r, stage, path: stages, ap: true });
    });
  });
  return out;
}
function userInAnyApStage() {
  if (S.isAdmin) return false;
  return approvalPathsList().some((p) => apStageList(p).some((st) => userHoldsApStage(st)));
}
function canViewReportViaApPath(unitId) {
  if (S.levelScope && !S.levelScope.unitIds.has(unitId)) return false;
  return ensureUnitReportsLoaded(unitId).some((r) => {
    const ref = apRefOf(r.customStageId); if (!ref) return false;
    const p = apPathById(ref.pathId);
    const unit = (S.units || []).find((u) => u.id === unitId);
    return !!p && apStageList(p, unit).some((st) => userHoldsApStage(st, unit));
  }) || apInfoForMe().some((x) => x.unit.id === unitId);
}
// «للعلم فقط»: تقارير عدّت مرحلتي (أو انتهت) — توصلني نسخة للاطلاع بدون ما يوقف التقرير عندي
function apInfoForMe() {
  const p = autoPathObj(); if (!p || S.isAdmin) return [];
  const out = [];
  (S.units || []).forEach((u) => {
    if (S.levelScope && !S.levelScope.unitIds.has(u.id)) return;
    const mine = apStageList(p, u).filter((st) => st.info && userHoldsApStage(st, u));
    if (!mine.length) return;
    const order = (k) => (p.stages || []).findIndex((x) => AP_PREFIX + p.id + ":" + x.id === k);
    ensureUnitReportsLoaded(u.id).forEach((r) => {
      if (reportApPathId(r) !== p.id || !["custom_pending", "approved", "completed"].includes(r.status)) return;
      const cur = r.status === "custom_pending" ? order(r.customStageId) : Infinity;
      const st = mine.find((m) => order(m.key) < cur);
      if (st) out.push({ unit: u, report: r, stage: st });
    });
  });
  return out.sort((a, b) => (b.report.updatedAt || 0) - (a.report.updatedAt || 0));
}
function apLogEntry(kind, from, to, text) { return { at: Date.now(), kind, from, to, text, by: S.currentPersonName || (S.currentUser && S.currentUser.name) || "" }; }
// يرسل التقرير من كاتبته لأول مرحلة فعلية بمسار مطابق؛ يرجع false لو ما فيه مسار
function apSendReport(unitId, entry, pathId, notes) {
  const unit = S.units.find((u) => u.id === unitId);
  const path = matchingApprovalPaths(unit, entry).find((x) => x.id === pathId);
  if (!path) return false;
  const noteTxt = notes ? " — " + notes : "";
  // مراحل الكاتبة نفسها تُتخطّى (apStageList مع authorId)، ومراحل التمرير اللي تملكها الجلسة كذلك
  const stages = apFlow(apStageList(path, unit, S.currentPersonId));
  let i = 0;
  while (i < stages.length && userHoldsApStage(stages[i], unit) && apStageIsPassThrough(stages[i])) i++;
  const log = [...(entry.customLog || [])];
  const cleanSections = {};
  Object.entries(entry.sections || {}).forEach(([k, v]) => { if (v && v.reviewNote) { const { reviewNote, ...rest } = v; cleanSections[k] = rest; } else cleanSections[k] = v; });
  entry = { ...entry, sections: cleanSections };
  if (i >= stages.length) {
    const last = stages[stages.length - 1];
    const status = last && last.canApprove ? "approved" : "completed";
    log.push(apLogEntry("final", "unit", "final", "أُرسل وانتهى المسار (" + path.name + ")" + noteTxt));
    saveReportEntry(unitId, { ...entry, status, customStageId: null, customLog: log, internalSentAt: Date.now(), internalSentBy: S.currentPersonId || null, updatedAt: Date.now() });
  } else {
    log.push(apLogEntry("send", "unit", stages[i].key, "أُرسل إلى " + stages[i].name + " (" + path.name + ")" + noteTxt));
    saveReportEntry(unitId, { ...entry, status: "custom_pending", customStageId: stages[i].key, customLog: log, internalSentAt: Date.now(), internalSentBy: S.currentPersonId || null, updatedAt: Date.now() });
  }
  return true;
}
function apAdvanceOrReturn(unitId, reportId, isReturn, notes, opts) {
  opts = opts || {};
  const entry = getReportEntry(unitId, reportId);
  if (!entry || entry.status !== "custom_pending") return "غير متاح";
  const ref = apRefOf(entry.customStageId); if (!ref) return "غير متاح";
  const path = apPathById(ref.pathId); if (!path) return "المسار محذوف";
  const unit = (S.units || []).find((u) => u.id === unitId);
  const all = apStagesNamed(path, unit);
  const cur = all.find((s) => s.key === entry.customStageId);
  if (!cur || !userHoldsApStage(cur, unit)) return "ليست مرحلتك";
  // المراحل المطبّقة على هذه الوحدة (تُتخطّى مرحلة دورٍ لا يوجد في الوحدة، و«للعلم فقط» ما توقف التقرير)
  const flow = apFlow(apStageList(path, unit, entry.internalSentBy));
  const pos = (st) => all.findIndex((x) => x.key === st.key);
  const before = flow.filter((st) => pos(st) < pos(cur)), after = flow.filter((st) => pos(st) > pos(cur));
  const log = [...(entry.customLog || [])];
  if (isReturn && opts.type === "prev") {
    if (!cur.canBack) return "هذه المرحلة لا تملك الإعادة للمرحلة السابقة";
    if (!notes) return "الرجاء كتابة ملاحظة قبل الإعادة.";
    const prev = before[before.length - 1];
    if (prev) {
      log.push(apLogEntry("back", cur.key, prev.key, "أعادته " + cur.name + " إلى " + prev.name + " — " + notes));
      saveReportEntry(unitId, { ...entry, customStageId: prev.key, customLog: log, updatedAt: Date.now() });
      return "";
    }
    opts = { ...opts, type: "returned" };
  }
  if (isReturn) {
    const type0 = opts.type === "needs_completion" ? "needs_completion" : "returned";
    if (type0 === "returned" && !cur.canReturn) return "هذه المرحلة لا تملك الإعادة للتعديل";
    if (type0 === "needs_completion" && !cur.canComplete) return "هذه المرحلة لا تملك الإعادة للاستكمال";
    const secNotes = Object.entries(opts.sectionNotes || {}).filter(([, t]) => String(t || "").trim());
    if (!notes && !secNotes.length) return "الرجاء كتابة ملاحظات قبل إعادة التقرير.";
    const secLabel = (id) => { const sc = SECTIONS.find((x) => x.id === id); return sc ? sc.label : id; };
    const fullNotes = [notes, ...secNotes.map(([id, t]) => secLabel(id) + ": " + String(t).trim())].filter(Boolean).join(" | ");
    const sections = { ...(entry.sections || {}) };
    secNotes.forEach(([id, t]) => { sections[id] = { ...(sections[id] || { status: "not_started", data: {} }), reviewNote: { text: String(t).trim(), by: cur.name, at: Date.now() } }; });
    const type = type0;
    log.push(apLogEntry("return", cur.key, "unit", "أعادته " + cur.name + (type === "needs_completion" ? " للاستكمال — " : " للتعديل — ") + fullNotes));
    saveReportEntry(unitId, { ...entry, sections, status: type, customStageId: null, customLog: log, internalReviewNotes: fullNotes, internalReturnedAt: Date.now(), updatedAt: Date.now() });
    return "";
  }
  if (cur.noteRequired && !notes) return "هذه المرحلة تلزم كتابة ملاحظة قبل الإرسال.";
  // «ترسل لـ»: الافتراضي اللي بعدها، وتقدر تتجاوز لأعلى لو كل اللي بينهم يُسمح بتخطّيها
  let next = cur.finalApprove ? null : after[0];
  if (next && opts.toKey && opts.toKey !== next.key) {
    const j = after.findIndex((x) => x.key === opts.toKey);
    if (j < 0 || after.slice(0, j).some((x) => !x.allowSkip)) return "ما يمديك ترسله لهذه المرحلة — اللي بينكم لازم يمر عليها.";
    log.push(apLogEntry("skip", cur.key, after[j].key, "تجاوزت " + cur.name + ": " + after.slice(0, j).map((x) => x.name).join("، ")));
    next = after[j];
  }
  if (!next) {
    log.push(apLogEntry("final", cur.key, "final", (cur.canApprove ? "اعتُمد نهائيًا من " : "أنهته ") + cur.name + (notes ? " — " + notes : "")));
    saveReportEntry(unitId, { ...entry, status: cur.canApprove ? "approved" : "completed", customStageId: null, customLog: log, updatedAt: Date.now() });
  } else {
    log.push(apLogEntry("send", cur.key, next.key, (cur.canApprove ? "اعتمدته " : "أرسلته ") + cur.name + " إلى " + next.name + (notes ? " — " + notes : "")));
    saveReportEntry(unitId, { ...entry, status: "custom_pending", customStageId: next.key, customLog: log, updatedAt: Date.now() });
  }
  return "";
}
function apSendPickerHtml(unit, report) {
  const p = matchingApprovalPaths(unit, report)[0];
  const flow = p ? apFlow(apStageList(p, unit, S.currentPersonId)) : [];
  return `
  <div class="card" style="margin-top:16px;border:1.5px solid ${ROSE};">
    <div style="font-size:13px;font-weight:800;margin-bottom:6px;">إرسال التقرير</div>
    ${p ? `<div style="font-size:12px;color:${SUBTLE};margin-bottom:10px;line-height:1.9;">يمر على: ${esc(flow.map((st) => st.name).join(" ← "))}</div>`
      : `<div class="hint bad" style="margin-bottom:10px;">ما فيه مسار لتقارير هذه الوحدة — كلّمي مديرة النظام.</div>`}
    <textarea id="ap-send-notes" class="input" style="width:100%;min-height:56px;margin-bottom:10px;" placeholder="ملاحظات (اختياري)..."></textarea>
    <div style="display:flex;gap:8px;">
      ${p ? pillBtn("تأكيد الإرسال", { icon: iconCheckCircle(14, "#fff"), action: "ap-send-confirm" }) : ""}
      ${pillBtn("إلغاء", { variant: "ghost", action: "ap-send-cancel" })}
    </div>
  </div>`;
}
// قرار صاحبة المرحلة — نفس الشكل في «بانتظار مراجعتي» وتحت التقرير الكامل
function apDecisionHtml(item) {
  const { unit, report, stage, path } = item;
  const key = unit.id + ":" + report.id;
  const idx = path.findIndex((s) => s.key === stage.key);
  const after = path.slice(idx + 1), prev = idx > 0 ? path[idx - 1] : null;
  const canRet = stage.canReturn || stage.canComplete || stage.canBack;
  // «ترسل لـ»: اللي بعدها، وما بعدها لو كل اللي بينهم يُسمح بتخطّيها
  const targets = [];
  if (!stage.finalApprove) for (let j = 0; j < after.length; j++) { targets.push(after[j]); if (!after[j].allowSkip) break; }
  const next = targets[0];
  const advLabel = stage.finalApprove ? "اعتماد نهائي" : stage.canApprove ? (next ? "اعتماد وإرسال" : "اعتماد نهائي") : (next ? "إرسال" : "إنهاء المرحلة");
  const cand = stage.canCurate ? collectCurationCandidatesForUnits([unit]) : null;
  const curated = ((report.shared || {}).curatedKeys) || [];
  const curList = cand ? [["أبرز الإنجازات", cand.achievements], ["نقاط القوة", cand.strengths], ["التوصيات", cand.recommendations], ["التحديات", cand.challenges]]
    .map(([t, items]) => [t, items.filter((it) => String(it.key).split(":")[1] === report.id)]).filter(([, items]) => items.length) : [];
  return `
    ${cand ? `<div style="background:${BLUE_BG};border-radius:12px;padding:10px 12px;margin-bottom:10px;">
      <div style="font-size:12.5px;font-weight:800;margin-bottom:6px;">اعتماد أبرز النتائج والتوصيات — علّمي الأهم (يطلع أولًا في الملخص والتقرير النهائي)</div>
      ${curList.length ? curList.map(([t, items]) => `<div style="font-size:11.5px;font-weight:700;color:${SUBTLE};margin:6px 0 4px;">${t}</div>${items.map((it) => { const on = curated.includes(it.key); return `<button type="button" data-action="ap-curate" data-unit="${esc(unit.id)}" data-report="${esc(report.id)}" data-key="${esc(it.key)}" style="display:flex;gap:8px;align-items:flex-start;width:100%;text-align:right;padding:7px 10px;margin-bottom:4px;border-radius:10px;cursor:pointer;font-family:inherit;font-size:12.5px;color:${INK};border:1px solid ${on ? GREEN : BORDER};background:${on ? GREEN_BG : "#fff"};">${on ? iconCheckCircle(16, GREEN) : iconCircle(16, SUBTLE)}<span>${esc(it.text || "—")}</span></button>`; }).join("")}`).join("") : `<div style="font-size:12px;color:${SUBTLE};">ما فيه إنجازات أو توصيات في هذا التقرير.</div>`}
    </div>` : ""}
    <textarea id="cp-notes-${esc(key)}" class="input" style="width:100%;min-height:56px;margin-bottom:10px;" placeholder="ملاحظات عامة (${stage.noteRequired ? "إلزامية" : "اختياري"}${canRet ? "، وتلزم عند الإعادة إن لم تكتبي ملاحظة على قسم" : ""})...">${esc(apDraftGet(key, "__gen"))}</textarea>
    ${stage.canReturn || stage.canComplete ? `<details style="margin-bottom:10px;"><summary style="font-size:12px;font-weight:700;color:${ROSE};cursor:pointer;">ملاحظات على أقسام محددة (تظهر داخل القسم نفسه عند الإعادة)</summary>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">${reportSections(report, unit.id).map((sc) => `<textarea id="cp-sec-${esc(key)}-${esc(sc.id)}" class="input" style="width:100%;min-height:40px;" placeholder="ملاحظة على: ${esc(sc.label)}">${esc(apDraftGet(key, sc.id))}</textarea>`).join("")}</div></details>` : ""}
    ${targets.length > 1 ? `<div class="field" style="margin-bottom:10px;"><label class="field-label" for="cp-to-${esc(key)}">ترسل لـ</label><select class="input" id="cp-to-${esc(key)}">${targets.map((t, j) => `<option value="${esc(t.key)}">${esc(t.name)}${j ? " (تتجاوز " + esc(targets.slice(0, j).map((x) => x.name).join("، ")) + ")" : ""}</option>`).join("")}</select></div>`
      : next ? `<div class="hint" style="margin-bottom:10px;">يروح بعدك إلى: <b>${esc(next.name)}</b></div>` : ""}
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${pillBtn(advLabel, { icon: iconCheckCircle(14, "#fff"), action: "ap-advance", data: { unitId: unit.id, reportId: report.id } })}
      ${stage.canReturn ? pillBtn("إعادة للتعديل", { variant: "ghost", icon: iconX(14, INK), action: "ap-return", data: { unitId: unit.id, reportId: report.id, rtype: "returned" } }) : ""}
      ${stage.canComplete ? pillBtn("إعادة للاستكمال", { variant: "ghost", icon: iconX(14, INK), action: "ap-return", data: { unitId: unit.id, reportId: report.id, rtype: "needs_completion" } }) : ""}
      ${stage.canBack && prev ? pillBtn("إعادة إلى «" + prev.name + "»", { variant: "ghost", action: "ap-return", data: { unitId: unit.id, reportId: report.id, rtype: "prev" } }) : ""}
    </div>`;
}
function apInboxCardHtml(item) {
  const { unit, report, stage } = item;
  const log = (report.customLog || []).slice(-3);
  return `
  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
      <div style="font-size:13.5px;font-weight:800;">${esc(unit.name)} — ${esc(report.label)}</div>
      ${badgeHtml("مرحلتك: " + stage.name, GOLD, GOLD_BG)}
    </div>
    ${log.length ? `<div style="font-size:11px;color:${SUBTLE};margin-bottom:8px;line-height:1.8;">${log.map((l) => esc(l.text || "")).join("<br>")}</div>` : ""}
    <div style="margin-bottom:10px;display:flex;gap:8px;flex-wrap:wrap;">
      ${pillBtn("عرض التقرير", { variant: "ghost", action: "view-report-pdf", data: { unitId: unit.id, reportId: report.id } })}
      ${stage.canEdit ? pillBtn("فتح للتعديل", { variant: "ghost", action: "ap-open-edit", data: { unitId: unit.id, reportId: report.id } }) : ""}
    </div>
    ${apDecisionHtml(item)}
  </div>`;
}
function apOrCustomStageName(unit, report) {
  const ref = apRefOf(report && report.customStageId);
  if (ref) { const p = apPathById(ref.pathId); const st = p && apStagesNamed(p, unit).find((x) => x.id === ref.stageId); return st ? st.name : "مرحلة"; }
  return "مرحلة";
}
function renderCustomPathInbox() {
  const items = apPendingForMe();
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "بانتظار مراجعتي", subtitle: "تقارير وصلت لمرحلتك — اطّلعي عليها ثم اعتمديها وأرسليها أو أعيديها للتعديل" })}
    ${items.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;border-style:dashed;">لا توجد تقارير بانتظارك حاليًا.</div>` : `
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${items.map((item) => apInboxCardHtml(item)).join("")}
    </div>`}
    ${(() => { const info = apInfoForMe(); return info.length ? `<div style="font-size:14px;font-weight:800;margin:20px 0 10px;">وصلتك للعلم (${info.length})</div>
      <div style="display:flex;flex-direction:column;gap:8px;">${info.slice(0, 40).map((x) => `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
        <div><div style="font-size:13px;font-weight:800;">${esc(x.unit.name)} — ${esc(x.report.label)}</div><div style="font-size:11.5px;color:${SUBTLE};">${esc(((REPORT_STATUS_OPTIONS.find((o) => o[0] === x.report.status) || [])[1]) || "")}${x.report.status === "custom_pending" ? " — عند " + esc(apOrCustomStageName(x.unit, x.report)) : ""}</div></div>
        ${pillBtn("عرض التقرير", { variant: "ghost", action: "view-report-pdf", data: { unitId: x.unit.id, reportId: x.report.id } })}</div>`).join("")}</div>` : ""; })()}
  </div></div>`;
}

/* ===================== صفحة تتبع "مسار الاعتماد" التفاعلية =====================
   تبني، لكل تقرير، مراحل مسار اعتماده من «مسارات الاعتماد» وتحدد حالة كل مرحلة
   (تمّت / جارية / أعادت التقرير / بالانتظار) من سجل التقرير (customLog). */
function approvalPathDateStr(ts) {
  return ts ? new Date(ts).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long", day: "numeric" }) : "";
}
function computeApprovalPathState(unit, entry) {
  let apId = reportApPathId(entry);
  if (!apId && entry.status === "draft") { const m = matchApprovalPath(unit, entry); apId = m ? m.id : null; }
  const apPath = apId ? apPathById(apId) : null;
  if (apPath) {
    const log = entry.customLog || [];
    return apFlow(apStageList(apPath, unit, entry.status === "draft" ? S.currentPersonId : entry.internalSentBy)).map((st) => {
      const acted = log.filter((l) => l.from === st.key);
      const last = acted[acted.length - 1];
      let state = "pending";
      if (entry.status === "custom_pending" && entry.customStageId === st.key) state = "current";
      else if (last) state = (last.kind === "return" || last.kind === "back") ? "returned" : "done";
      return { key: st.key, label: st.name, state, dateStr: last ? approvalPathDateStr(last.at) : "", note: last ? (last.text || "") : "" };
    });
  }
  return []; // لا يوجد مسار اعتماد مطابق لهذه الوحدة بعد
}
function approvalPathStageVisual(state) {
  if (state === "done") return { circleBg: GREEN, circleFg: "#fff", lineColor: GREEN, textColor: INK, icon: iconCheck(13, "#fff") };
  if (state === "current") return { circleBg: GOLD, circleFg: "#fff", lineColor: BORDER, textColor: INK, icon: `<div style="width:8px;height:8px;border-radius:999px;background:#fff;"></div>` };
  if (state === "returned") return { circleBg: DANGER, circleFg: "#fff", lineColor: BORDER, textColor: INK, icon: iconX(11, "#fff") };
  return { circleBg: "#fff", circleFg: SUBTLE, lineColor: BORDER, textColor: SUBTLE, icon: "" };
}
function renderApprovalPathTracking() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit) return `<div class="page-wrap">تعذر إيجاد الوحدة.</div>`;
  const entry = getCurrentReportEntry();
  if (!entry) return `<div class="page-wrap">تعذر إيجاد هذا التقرير.</div>`;
  const meta = reportStatusMeta(entry.status);
  const stages = computeApprovalPathState(unit, entry);
  const isTerminal = entry.status === "approved";

  const stepsHtml = !stages.length ? `<div class="hint">لا يوجد مسار اعتماد مفعّل لهذه الجهة بعد — يُضبط من «المستخدمون ← المسارات».</div>` : stages.map((s, i) => {
    const v = approvalPathStageVisual(s.state);
    const isLast = i === stages.length - 1;
    return `
    <div style="display:flex;gap:14px;">
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="width:30px;height:30px;border-radius:999px;background:${v.circleBg};border:1.5px solid ${s.state === "pending" ? BORDER : v.circleBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${v.icon}</div>
        ${!isLast ? `<div style="width:2px;flex:1;min-height:34px;background:${v.lineColor};margin:2px 0;"></div>` : ""}
      </div>
      <div style="padding-bottom:${isLast ? "0" : "28px"};flex:1;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-size:13.5px;font-weight:800;color:${v.textColor}">${esc(s.label)}</span>
          ${s.state === "current" ? badgeHtml("جارية الآن", GOLD, GOLD_BG) : ""}
          ${s.state === "returned" ? badgeHtml("أعادت التقرير", DANGER, DANGER_BG) : ""}
        </div>
        ${s.dateStr ? `<div style="font-size:11px;color:${SUBTLE};margin-top:3px;">${esc(s.dateStr)}</div>` : ""}
        ${s.note ? `<div style="font-size:12px;color:${s.state === "returned" ? DANGER : INK};margin-top:4px;line-height:1.6;">${esc(s.note)}</div>` : ""}
      </div>
    </div>`;
  }).join("");

  return `
  <div class="page-wrap" style="max-width:640px;">
    ${topBarHtml({ title: "مسار الاعتماد", subtitle: `${unit.name} — ${esc(entry.label)}`, backAction: "nav-back-to-report",
      right: badgeHtml(meta.label, meta.color, meta.bg) })}
    <div class="card card-lg">
      <div style="font-size:12.5px;color:${SUBTLE};margin-bottom:20px;">
        ${isTerminal ? "اكتمل هذا التقرير مسار اعتماده بالكامل." : "خطوات مسار اعتماد هذا التقرير حسب إعداد الوحدة الحالي — كل مرحلة توضّح حالتها وتاريخها."}
      </div>
      ${stepsHtml}
    </div>
  </div>`;
}

const REPORT_TYPES = [
  { id: "general", label: "عام", icon: "document" },
  { id: "volunteer", label: "تطوع", icon: "heart" },
  { id: "supervision", label: "إشراف تربوي", icon: "book" },
  { id: "training", label: "تدريب", icon: "graduationCap" },
];
function reportTypeMeta(typeId) {
  return REPORT_TYPES.find((t) => t.id === typeId) || REPORT_TYPES[0];
}

/* =============================== Helpers ==================================== */
// أقسام هذا التقرير: كل وحدة تختار من «الإعدادات» الأقسام اللي تطلع لكل نوع فترة
// (entityPrefs["unit:<id>"].sectionsOff[نوع الفترة]). «البيانات الأساسية» دائمًا (فيها اختيار الفترة).
// قبل اختيار الفترة تظهر كل الأقسام.
const SECTIONS_ALWAYS = ["basic"];
function reportPeriodType(report) { return (report && report.shared && report.shared.periodType) || (report && report.sections && report.sections.basic && report.sections.basic.data && report.sections.basic.data.periodType) || ""; }
function reportUnitIdOf(report) {
  if (!report || !report.id) return null;
  return Object.keys(S.reports || {}).find((uid) => (S.reports[uid] || []).some((r) => r.id === report.id)) || null;
}
function unitSectionsOff(unitId, periodType) { return (((entityPrefs("unit:" + unitId).sectionsOff) || {})[periodType]) || []; }
function reportSections(report, unitId) {
  const u = unitId || reportUnitIdOf(report), pt = reportPeriodType(report);
  const off = u && pt ? unitSectionsOff(u, pt) : [];
  return off.length ? SECTIONS.filter((sc) => SECTIONS_ALWAYS.includes(sc.id) || !off.includes(sc.id)) : SECTIONS;
}
function activeReportSections() { return reportSections(getReportEntry(S.currentUnitId, S.currentReportId), S.currentUnitId); }
function computeProgress(report, unitId) {
  const list = reportSections(report, unitId);
  const total = list.length;
  const completed = list.filter((s) => report?.sections?.[s.id]?.status === "completed").length;
  const drafted = list.filter((s) => report?.sections?.[s.id]?.status === "draft").length;
  return { completed, drafted, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}
function statusMeta(status) {
  if (status === "completed") return { label: "مكتمل", color: GREEN, bg: GREEN_BG };
  if (status === "draft") return { label: "مسودة", color: GOLD, bg: GOLD_BG };
  return { label: "لم يبدأ", color: SUBTLE, bg: GRAY_BG };
}
function sectionStatus(report, sectionId) { return report?.sections?.[sectionId]?.status || "not_started"; }
function esc(v) {
  if (v == null) return "";
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function uid(prefix) { return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`; }

/* =============================== Global state ================================ */
const S = {
  currentUser: null,
  units: [],
  departments: [],
  offices: [],
  indicatorDefinitions: [],
  goalsDefinitions: { strategic: [], operational: [] },
  reportSectionDefs: DEFAULT_SECTIONS.map((s, i) => ({ id: s.id, label: s.label, order: i, enabled: true })),
  reports: {},
  view: "login",
  currentUnitId: null,
  currentReportId: null,
  currentDepartmentId: null,
  isAdmin: false,
  isDepartmentUser: false,
  isExecutive: false,
  isOfficeUser: false,
  currentOfficeId: null,
  cameFromAllReports: false,
  adminPreviewOrigin: null,
  // صلاحيات الجلسة الحالية من أدوارها: الصفحات والإجراءات المسموحة (null = بلا قيد)
  allowedPages: null,
  allowedActions: null,
  sidebarOpen: true,
  mobileSidebarOpen: false,
  // report editor state
  openPhaseId: null,
  activeSectionId: null,
  phaseCollapsed: false,
  mobilePhaseOpen: false,
  sectionDraft: null,        // working copy of the current section's data
  sectionCompleted: false,
  sectionSaveStatus: "",
  sectionSaveError: "",
  // ephemeral UI state per page (keyed loosely, reset on navigation)
  ui: {},
};

function isMobileViewport() { return window.innerWidth < 860; }

/* =============================== Render dispatcher =========================== */
const appEl = document.getElementById("app");

// صفحات قديمة دُمجت في غيرها: أي وصول لها (صلاحية دور قديمة مثلًا) يفتح الصفحة الجديدة
const RETIRED_VIEWS = { "admin-reports": "browse-structure", "office-curation": "department-curation" };
function render() {
  syncReportTabCatalog();
  syncCustomReportPages();
  if (RETIRED_VIEWS[S.view]) S.view = RETIRED_VIEWS[S.view];
  let html = "";
  // صفحة رئيسية غير ممنوحة بالدور: ننقل لأول صفحة مسموحة (لكل الحسابات اللي صفحاتها من الأدوار).
  // مستثنى: محرر التقرير المفتوح من داخل صفحة، وصندوق "بانتظار مراجعتي" لمن هو مرحلة بمسار.
  if (S.currentUser && S.allowedPages && SIDEBAR_PAGE_VIEW_IDS().includes(S.view) && !pageAllowedForView(S.view)
      && S.view !== "unit-report" && !(S.view === "custom-path-inbox" && !S.isAdmin && userInAnyApStage())) {
    const pref = S.isAdmin && pageAllowedForView("units-manage") && !pageAllowedForView("dashboard") ? SIDEBAR_PAGES.find((p) => p.id === "units-manage") : null;
    const first = pref || SIDEBAR_PAGES.find((p) => pageAllowedForView(p.id));
    S.view = first ? (first.id === "dashboard" && S.isExecutive ? "executive-dashboard" : first.id) : "no-pages";
    if (first && first.group === "unit-home" && typeof ensureUnitContextForNav === "function") ensureUnitContextForNav(first.id);
  }
  if (S.view === "login" || !S.currentUser) {
    html = renderLogin();
  } else if (S.view === "no-pages" || (!S.isAdmin && !S.isExecutive && !S.allowedPages && S.view !== "unit-role-select" && !(userInAnyApStage() && ["custom-path-inbox", "full-report", "unit-report"].includes(S.view)))) {
    html = shellWrap(`<div class="page-wrap"><div class="page-inner narrow"><div class="card" style="text-align:center;color:${SUBTLE};padding:44px 20px;">
      <div style="font-size:15px;font-weight:800;color:${INK};margin-bottom:8px;">لم تُحدَّد صلاحيات لهذا الحساب بعد</div>
      <div style="font-size:12.5px;">تواصلي مع مديرة النظام لتفعيل الصفحات المناسبة لك.</div></div></div></div>`);
  } else if (S.view === "dashboard") {
    html = shellWrap(renderDashboard());
  } else if (S.view === "site-settings") {
    html = shellWrap(renderSiteSettings());
  } else if (S.view === "browse-structure") {
    html = shellWrap(renderBrowseStructure());
  } else if (S.view === "departments-list") {
    html = shellWrap(renderDepartmentsPage());
  } else if (S.view === "org-levels" || S.view === "units-manage" || S.view === "org-chart") {
    // صفحة "المستخدمون" الموحّدة (الهيكل + الحسابات + الأشخاص + الأدوار + المسارات)
    html = shellWrap(renderOrgLevelsPage());
  } else if (S.view === "department-curation") {
    html = shellWrap(renderCurationUnified());
  } else if (S.view === "executive-dashboard") {
    html = shellWrap(renderExecutiveDashboard());
  } else if (S.view === "executive-summary") {
    html = shellWrap(renderExecutiveSummary());
  } else if (S.view === "executive-final-report") {
    html = shellWrap(renderExecutiveFinalReport());
  } else if (S.view === "reports-manage") {
    html = shellWrap(renderReportsManage());
  } else if ((S.view || "").indexOf("crpt-") === 0) {
    html = shellWrap(renderCustomReport(S.view.slice(5)));
  } else if (S.view === "all-reports") {
    html = shellWrap(renderAllReports());
  } else if (S.view === "indicators-manage") {
    html = shellWrap(renderIndicatorsManage());
  } else if (S.view === "goals-manage") {
    html = shellWrap(renderGoalsManage());
  } else if (S.view === "sections-manage") {
    html = shellWrap(renderSectionsManage());
  } else if (S.view === "field-schemas-manage") {
    html = shellWrap(renderFieldSchemasManage());
  } else if (S.view === "unit-dashboard") {
    html = shellWrap(renderUnitDashboard());
  } else if (S.view === "unit-settings") {
    html = shellWrap(renderUnitSettings());
  } else if (S.view === "unit-reports") {
    html = shellWrap(renderUnitReportsHub());
  } else if (S.view === "unit-report" && adminReportsReadOnly()) {
    if (S.currentReportId) { S.view = "full-report"; S.cameFromAllReports = true; html = shellWrap(renderFullReport()); }
    else { S.view = "unit-reports"; html = shellWrap(renderUnitReportsHub()); }
  } else if (S.view === "unit-report") {
    html = shellWrap(renderUnitReport());
  } else if (S.view === "unit-notifications") {
    html = shellWrap(renderUnitNotifications());
  } else if (S.view === "unit-all-reports") {
    html = shellWrap(renderUnitAllReportsPage());
  } else if (S.view === "full-report") {
    html = shellWrap(renderFullReport());
  } else if (S.view === "report-preview") {
    html = shellWrap(renderReportPreview());
  } else if (S.view === "custom-path-inbox") {
    html = shellWrap(renderCustomPathInbox());
  } else if (S.view === "approval-path-tracking") {
    html = shellWrap(renderApprovalPathTracking());
  } else if (S.view === "office-dashboard") {
    html = shellWrap(renderOfficeDashboard());
  } else if (S.view === "office-archive") {
    html = shellWrap(renderOfficeArchive());
  } else if (S.view === "office-summary") {
    html = shellWrap(renderOfficeSummary());
  } else if (S.view === "unit-role-select") {
    html = renderUnitRoleSelect();
  } else if (S.view === "report-tabs-manage") {
    html = shellWrap(renderReportTabsManage());
  } else {
    html = renderLogin();
  }
  // نحافظ على مكان تمرير الشريط الجانبي: إعادة الرسم كانت ترجعه لأول القائمة بعد كل ضغطة.
  const sbOld = appEl.querySelector(".sidebar");
  const sbTop = sbOld ? sbOld.scrollTop : 0;
  appEl.innerHTML = html;
  afterRender();
  if (sbTop) { const sbNew = appEl.querySelector(".sidebar"); if (sbNew) sbNew.scrollTop = sbTop; }
}

/* App shell: persistent sidebar wrapper used by every logged-in page ---------- */
function shellWrap(innerHtml) {
  const mobile = isMobileViewport();
  const sidebarOpen = mobile ? S.mobileSidebarOpen : S.sidebarOpen;
  return `
    <div class="app-shell">
      ${sidebarOpen ? renderMainSidebar(mobile) : ""}
      <div class="app-main">
        ${!sidebarOpen ? `<div class="open-sidebar-wrap"><button class="mobile-menu-toggle" data-action="open-sidebar" title="فتح القائمة">${iconMenu(INK)}</button></div>` : ""}
        ${innerHtml}
      </div>
    </div>
  `;
}

const SIDEBAR_PAGES = [
  { id: "dashboard", label: "لوحة المعلومات", group: "الرئيسية", icon: "home" },
  { id: "admin-reports", label: "الأقسام والوحدات", group: "الرئيسية", icon: "building" },
  { id: "custom-path-inbox", label: "بانتظار مراجعتي", group: "الرئيسية", icon: "document" },
  { id: "site-settings", label: "إعدادات الموقع", group: "الرئيسية", icon: "gauge" },
  { id: "all-reports", label: "جميع التقارير", group: "standalone", icon: "document" },
  { id: "indicators-manage", label: "إدارة مؤشرات الأداء", group: "إدارة التقارير", icon: "gauge" },
  { id: "goals-manage", label: "إدارة الأهداف والمستهدفات", group: "إدارة التقارير", icon: "target" },
  { id: "sections-manage", label: "إدارة أقسام التقرير", group: "إدارة التقارير", icon: "layers" },
  { id: "report-tabs-manage", label: "إدارة أزرار التقارير", group: "إدارة التقارير", icon: "layers" },
  { id: "field-schemas-manage", label: "إدارة حقول الأقسام", group: "إدارة التقارير", icon: "layers" },
  { id: "reports-manage", label: "تنسيق وإنشاء التقارير", group: "إدارة التقارير", icon: "printer" },
  { id: "units-manage", label: "المستخدمون", group: "standalone", icon: "building" },
  { id: "departments-list", label: "الأقسام", group: "الهيكل التنظيمي", icon: "building" },
  { id: "browse-structure", label: "تصفّح الهيكل", group: "standalone", icon: "layers" },
  // صفحة مستقلة قائمة بذاتها (نفس نمط "office-curation" للمكتب) — بدل ما تكون
  // قسمًا مدمجًا داخل صفحة أخرى، حسب طلب نجود الصريح.
  { id: "department-curation", label: "اعتماد أبرز النتائج والتوصيات", group: "الرئيسية", icon: "target" },
  // رابط ثابت لمديرة النظام فقط: بوّابة دخول لصفحات "unit-home" (نفس أفكار
  // "قسمي")، يختار أول وحدة/مركز نشط تلقائيًا ثم يحوّل فعليًا لعرض "تقارير"
  // (راجع case "nav-to" ومعالجته الخاصة لـ"unit-overview").
  { id: "executive-dashboard", label: "لوحة المعلومات", group: "الإدارة العليا", icon: "home" },
  { id: "executive-summary", label: "الملخص التنفيذي", group: "standalone", icon: "document" },
  { id: "executive-final-report", label: "التقرير الإداري النهائي", group: "standalone", icon: "layers" },
  { id: "office-dashboard", label: "لوحة المعلومات", group: "مكتب الإشراف", icon: "home" },
  { id: "office-archive", label: "الأرشفة", group: "standalone", icon: "layers" },
  { id: "office-summary", label: "ملخص الوحدات", group: "standalone", icon: "document" },
  { id: "office-curation", label: "اعتماد أبرز النتائج والتوصيات", group: "مكتب الإشراف", icon: "target" },
  { id: "unit-dashboard", label: "لوحة المعلومات", group: "unit-home", scope: "unit", icon: "home" },
  { id: "unit-reports", label: "تقارير", group: "unit-home", scope: "unit", icon: "document" },
  { id: "unit-report", label: "إنشاء تقرير", group: "unit-home", icon: "pencil" },
  { id: "unit-settings", label: "الإعدادات", group: "unit-home", scope: "unit", icon: "gauge" },
  // صفحات كانت بالأشرطة الثابتة القديمة (رئيسة/إدارية) فقط — صارت تُمنح بالصلاحيات.
  // لا تظهر لمديرة النظام/القسم/المكتب (تُستثنى أدناه) ولا تتغير أشرطتهم الحالية.
  { id: "unit-notifications", label: "التنبيهات", group: "unit-extra", scope: "unit", icon: "bell" },
  { id: "unit-all-reports", label: "جميع تقارير الوحدة", group: "unit-extra", scope: "unit", icon: "layers" },
];
// صفحات "unit-home" الأربع (لوحة الوحدة/تقارير/إنشاء تقرير/الإعدادات) كانت
// مجموعة واحدة قابلة للطي ("unit-home")، فأصبحت الآن أربعة روابط رئيسية
// مستقلة بالشريط الجانبي — بلا طي وبلا اشتراط مسبق بوحدة/قسم محدّد، تمامًا
// بنفس أسلوب "جميع التقارير" — حسب طلب نجود الصريح.
const SIDEBAR_GROUPS = ["الرئيسية", "إدارة التقارير", "__standalone__all-reports", "__standalone__units-manage", "__standalone__browse-structure", "__standalone__office-archive", "__standalone__office-summary", "__standalone__executive-summary", "__standalone__executive-final-report", "التقارير المجمّعة", "الإدارة العليا", "مكتب الإشراف", "الهيكل التنظيمي", "__standalone__unit-dashboard", "__standalone__unit-reports", "__standalone__unit-report", "__standalone__unit-settings", "__standalone__unit-notifications", "__standalone__unit-all-reports"];
const SIDEBAR_GROUP_LABELS = { "unit-home": "الرئيسية" };

// كتالوج "إجراءات" التقرير — يُستخدم لصلاحيات الأزرار في الأدوار. كل id هنا
// يطابق حرفيًا قيمة data-action المستخدمة بالفعل بالأزرار/بمُعالج النقر —
// نفس المفتاح يُستخدم للتحقق بالطرفين (إخفاء الزر + رفض الإجراء بالمُعالج).
const ACTION_CATALOG = [
  { id: "delete-report", label: "حذف تقرير (مسودة)" },
  { id: "section-save-draft", label: "حفظ القسم كمسودة أثناء التعبئة" },
  { id: "toggle-section-completed", label: "تحديد القسم كمكتمل (أو الرجوع لمسودة)" },
  { id: "open-or-create-report", label: "إنشاء تقرير جديد" },
];
// ---- التحكم بالأزرار (المرحلة 2ب): قائمة الأزرار القابلة للمنح/المنع، بحسب اختيار مديرة النظام ----
// الصلاحية = قائمة معرّفات أزرار مسموحة (roles.permissions.buttons / persons.perms_override.buttons).
// فاضية = كل الأزرار تظهر كما هي. غير الفاضية = يظهر فقط ما فيها من الأزرار المذكورة هنا.
const BUTTON_CATALOG = [
  { id: "chip:all", g: "قائمة التقارير", label: "زر «الكل»", sel: '[data-action="set-unit-reports-filter"][data-filter="all"]' },
  { id: "chip:draft", g: "قائمة التقارير", label: "زر «مسوداتي»", sel: '[data-action="set-unit-reports-filter"][data-filter="draft"]' },
  { id: "chip:returned", g: "قائمة التقارير", label: "زر «بحاجة إلى تعديل»", sel: '[data-action="set-unit-reports-filter"][data-filter="returned"]' },
  { id: "chip:needs_completion", g: "قائمة التقارير", label: "زر «بحاجة إلى استكمال»", sel: '[data-action="set-unit-reports-filter"][data-filter="needs_completion"]' },
  { id: "chip:custom_pending", g: "قائمة التقارير", label: "زر «قيد المراجعة»", sel: '[data-action="set-unit-reports-filter"][data-filter="custom_pending"]' },
  { id: "chip:completed", g: "قائمة التقارير", label: "زر «التقارير الكاملة»", sel: '[data-action="set-unit-reports-filter"][data-filter="completed"]' },
  { id: "chip:approved", g: "قائمة التقارير", label: "زر «معتمد»", sel: '[data-action="set-unit-reports-filter"][data-filter="approved"]' },
  { id: "chip:archived", g: "قائمة التقارير", label: "زر «أرشيف التقارير»", sel: '[data-action="set-unit-reports-filter"][data-filter="archived"]' },
  { id: "open-or-create-report", g: "بطاقة التقرير", label: "إنشاء تقرير (يكمل آخر مفتوح أو ينشئ جديدًا)", sel: '[data-action="open-or-create-report"]' },
  { id: "create-new-report", g: "بطاقة التقرير", label: "تقرير جديد (إضافي حتى مع وجود مسودة)", sel: '[data-action="create-new-report"]' },
  { id: "card-preview", g: "بطاقة التقرير", label: "معاينة التقرير", sel: '[data-btn="card-preview"]' },
  { id: "card-view", g: "بطاقة التقرير", label: "عرض التقرير", sel: '[data-btn="card-view"]' },
  { id: "card-download", g: "بطاقة التقرير", label: "تنزيل PDF / طباعة", sel: '[data-btn="card-download"],[data-action="print-page"]' },
  { id: "card-reedit", g: "بطاقة التقرير", label: "إعادة التعديل", sel: '[data-btn="card-reedit"]' },
  { id: "delete-report", g: "بطاقة التقرير", label: "حذف تقرير (مسودة)", sel: '[data-action="confirm-delete-report"],[data-action="delete-report"]' },
  { id: "toggle-report-notes", g: "بطاقة التقرير", label: "عرض ملاحظات التقرير", sel: '[data-action="toggle-report-notes"]' },
  { id: "section-save-draft", g: "داخل التقرير", label: "حفظ القسم كمسودة", sel: '[data-action="section-save-draft"]' },
  { id: "toggle-section-completed", g: "داخل التقرير", label: "تحديد القسم كمكتمل", sel: '[data-action="toggle-section-completed"]' },
  { id: "send-report", g: "إرسال التقرير", label: "إرسال التقرير (من مسارات الاعتماد)", sel: '[data-action="ap-send"],[data-action="ap-send-confirm"]' },
  { id: "ap-advance", g: "المراجعة والاعتماد", label: "اعتماد / إرسال للمرحلة التالية (مسار الاعتماد)", sel: '[data-action="ap-advance"]' },
  { id: "ap-return", g: "المراجعة والاعتماد", label: "إعادة التقرير للتعديل (مسار الاعتماد)", sel: '[data-action="ap-return"]' },
];
// أزرار المسار الجديد ترث صلاحية الأزرار القديمة المقابلة لها: من كانت مختارة عندها لا يختفي عنها شيء.
const BUTTON_ALIASES = {
  "create-new-report": ["open-or-create-report"],
};
// أزرار أساسية تظهر تلقائيًا لكل دور عنده صفحة «إنشاء تقرير» بلا حاجة لتأشيرها.
const CORE_REPORT_BUTTONS = ["section-save-draft", "toggle-section-completed", "card-preview", "card-view", "card-download", "delete-report"];
function coreReportButtonOpen(id) {
  return CORE_REPORT_BUTTONS.includes(id) && Array.isArray(S.allowedPages) && S.allowedPages.includes("unit-report");
}
function buttonAllowed(id) {
  if (!S.allowedButtons) return true;
  if (coreReportButtonOpen(id)) return true;
  if (id === "chip:" + MINE_TAB_ID && userInAnyApStage()) return true;
  if (S.allowedButtons.includes(id)) return true;
  return (BUTTON_ALIASES[id] || []).some((a) => S.allowedButtons.includes(a));
}
function buttonBlockedEl(el) {
  if (!S.allowedButtons) return false;
  return BUTTON_CATALOG.some((b) => !buttonAllowed(b.id) && el.matches(b.sel));
}
function applyButtonPermissions() {
  if (!S.allowedButtons) return;
  BUTTON_CATALOG.forEach((b) => {
    if (buttonAllowed(b.id)) return;
    document.querySelectorAll(b.sel).forEach((el) => el.style.setProperty("display", "none", "important"));
  });
}
// true = مسموح بهذا الإجراء. null/undefined بـ S.allowedActions يعني
// حساب بلا قيود إجراءات — يعمل بكل شي مسموح له أصلًا بالأدوار.
function actionAllowed(actionId) {
  if (S.allowedButtons && BUTTON_CATALOG.some((b) => b.id === actionId) && !buttonAllowed(actionId)) return false;
  if (coreReportButtonOpen(actionId)) return true;
  if (!S.allowedActions) return true;
  // «تقرير جديد» يرث صلاحية «إنشاء تقرير» القديمة
  return S.allowedActions.includes(actionId === "create-new-report" ? "open-or-create-report" : actionId);
}
function sidebarNavIcon(key, size, color) {
  const map = { home: iconHome, document: iconDocument, building: iconBuilding, gauge: iconGauge, target: iconTarget, pencil: iconPencil, layers: iconLayers, printer: iconPrinter, plus: iconPlus, bell: iconBell, key: iconKey };
  const fn = map[key] || iconDocument;
  return key === "building" || key === "gauge" ? fn(color, size) : fn(size, color);
}

// "لوحة المعلومات" صفحة واحدة تتكيّف تلقائيًا مع نطاق الحساب (وحدة/قسم/مكتب/إدارة
// عليا/مديرة النظام). المعرّفات القديمة تُعتبر نفس الصفحة: تُدمج بـ"dashboard".
const MERGED_PAGE_MAP = { "unit-dashboard": "dashboard", "office-dashboard": "dashboard", "executive-dashboard": "dashboard", "office-curation": "department-curation", "unit-overview": "dashboard", "department-overview": "dashboard", "admin-reports": "browse-structure" };
const MERGED_DASHBOARD_IDS = Object.keys(MERGED_PAGE_MAP);
function SIDEBAR_PAGE_VIEW_IDS() { return [...SIDEBAR_PAGES.map((p) => p.id), ...MERGED_DASHBOARD_IDS, "org-levels", "org-chart"]; }
// "اعتماد أبرز النتائج والتوصيات" كذلك صفحة واحدة: القسم يشوف نتائج قسمه، والمكتب
// نتائج وحداته، ومديرة النظام تبدّل بين قسم/مكتب من أعلى الصفحة.
function normalizeDashboardPages(arr) {
  if (!Array.isArray(arr)) return arr;
  const out = [];
  arr.forEach((id) => { const t = MERGED_PAGE_MAP[id] || id; if (out.indexOf(t) === -1) out.push(t); });
  const i = out.indexOf("dashboard");
  if (i > 0) { out.splice(i, 1); out.unshift("dashboard"); }
  return out;
}
function sidebarPageActive(p) {
  return S.view === p.id || MERGED_PAGE_MAP[S.view] === p.id;
}
function inboxViaReportsHub(visibleIds) {
  if (S.isAdmin || S.isDepartmentUser || S.isOfficeUser || !S.currentUnitId) return false;
  const ids = visibleIds || new Set(computeVisibleSidebarPagesRaw().map((p) => MERGED_PAGE_MAP[p.id] || p.id));
  return ids.has("unit-reports");
}
function computeVisibleSidebarPages() {
  const raw = computeVisibleSidebarPagesRaw();
  const ids = new Set(raw.map((p) => MERGED_PAGE_MAP[p.id] || p.id));
  // «بانتظار مراجعتي» صار زرًّا داخل صفحة التقارير؛ لا يبقى رابطًا مستقلًّا إلا لمن لا يملك صفحة التقارير (حساب قسم/مكتب مثلًا).
  if (inboxViaReportsHub(ids)) ids.delete("custom-path-inbox");
  return SIDEBAR_PAGES.filter((p) => ids.has(p.id) && !(p.id === "unit-report" && adminReportsReadOnly()));
}
function computeVisibleSidebarPagesRaw() {
  // مجموعة "unit-home" (تُعرض الآن كروابط رئيسية مستقلة بالشريط الجانبي —
  // زي "جميع التقارير" تمامًا، بلا طي وبلا اشتراط مسبق بوحدة/قسم محدّد، حسب
  // طلب نجود الصريح) خاصة بعمل الوحدة نفسها، مو إدارة الموقع.
  // الحساب له قائمة صفحات من أدواره — تُعرض كما هي.
  if (S.allowedPages) {
    // صفحات "unit-home" (لوحة الوحدة/تقارير/إنشاء تقرير/الإعدادات) تظهر هنا
    // دائمًا طالما ممنوحة صراحة لهذا الحساب — بدون اشتراط إضافي بكون الصفحة
    // الحالية داخل وحدة أصلًا. سابقًا كان الشرط الإضافي يُخفيها كلما كانت أول
    // صفحة مسموحة (حسب ترتيبها بـ SIDEBAR_PAGES) صفحة غير "unit-home" (مثل
    // "جميع التقارير") — فتختفي بقية الصفحات الممنوحة فعليًا من الشريط الجانبي
    // بالكامل. الدخول إليها بنفسه يتكفّل الآن بضبط الوحدة المناسبة تلقائيًا
    // (راجع ensureUnitContextForNav) بدل الاعتماد على وجودها مسبقًا.
    return SIDEBAR_PAGES.filter((p) => (S.allowedPages.includes(p.id) || (p.id === "custom-path-inbox" && !S.isAdmin && userInAnyApStage())));
  }
  // قرار نجود: أي حساب (غير مديرة النظام والإدارة العليا) ما حُددت له صفحات = ما يظهر له شيء.
  if (!S.isAdmin && !S.isExecutive) return userInAnyApStage() ? SIDEBAR_PAGES.filter((p) => p.id === "custom-path-inbox") : [];
  if (S.isAdmin) {
    // مديرة النظام تشوف كل صفحات الموقع بلا استثناء — بما فيها "قسمي" وصفحات
    // "مكتب الإشراف" الأربع، رغم إنها أصلًا مرتبطة بـ currentDepartmentId/
    // currentOfficeId (قيمة واحدة فقط). عند الدخول لهذي الصفحات من الشريط
    // الجانبي مباشرة (بدل المرور بـ"الأقسام"/"مكاتب الإشراف")، تُفعَّل تلقائيًا
    // لأول قسم/مكتب نشط، وتظهر بداخل الصفحة نفسها قائمة تبديل تسمح لمديرة
    // النظام تختار أي قسم أو مكتب تبي تشوفه وتضبطه (راجع adminScopeSwitcherHtml).
    // صفحات "unit-home" ظاهرة دائمًا الآن (بلا شرط UNIT_SCOPED_VIEWS) — نفس
    // طلب نجود الصريح: تكون رئيسية بالشريط الجانبي زي "جميع التقارير"، بلا أي
    // اشتراط مسبق بوحدة/قسم محدّد (ensureUnitContextForNav يتكفّل بضبط الوحدة
    // تلقائيًا عند الدخول المباشر — راجع case "nav-to").
    // "تصفّح الهيكل" يحل محل الصفحات الأربع (مكاتب الإشراف/الأقسام/الوحدات/المراكز) بالشريط — الصفحات نفسها باقية.
    return SIDEBAR_PAGES.filter((p) => ADMIN_FIXED_PAGES.includes(p.id));
  } else if (S.isExecutive) {
    return userInAnyApStage() ? SIDEBAR_PAGES.filter((p) => p.id === "custom-path-inbox") : [];
  }
  // لا توجد قوائم صفحات افتراضية ثابتة لأي حساب: الصفحات تأتي من الدور فقط (قرار نجود).
  return [];
}

// عدد التنبيهات: محسوب مباشرة من حالة التقارير — بدون أي تخزين إضافي.
// مديرة القسم/النظام: عدد التقارير بانتظار مراجعتها. الوحدة/المركز: عدد
// تقاريرها المحتاجة إجراء منها (بحاجة لتعديل أو استكمال).
function computeNotificationCountBase() {
  const cfgC = effectiveReportTabsConfig();
  if (cfgC && cfgC.notify.length && S.currentUnitId) {
    const lst = ensureUnitReportsLoaded(S.currentUnitId);
    return lst.filter((r) => cfgC.notify.some((id) => reportMatchesCatalogTab(r, id))).length;
  }
  if (S.isDepartmentUser || S.isAdmin) return 0; // ما ينتظرهم يُحسب من مسارات الاعتماد (apPendingForMe)
  if (!S.isExecutive && S.currentUnitId) {
    return ensureUnitReportsLoaded(S.currentUnitId).filter((r) => r.status === "returned" || r.status === "needs_completion").length;
  }
  return 0;
}
function computeNotificationCount() { return computeNotificationCountBase() + apPendingForMe().length; }
function apNotifCardsHtml() {
  const n = apPendingForMe().length;
  if (!n) return "";
  const viaHub = inboxViaReportsHub();
  return `<button class="card" ${viaHub ? `data-action="goto-report-tab" data-filter="${MINE_TAB_ID}"` : `data-action="nav-to" data-view="custom-path-inbox"`} style="display:flex;align-items:center;gap:12px;width:100%;text-align:right;cursor:pointer;margin-bottom:10px;border:1.5px solid ${ROSE};">
    <div style="width:38px;height:38px;border-radius:11px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconBell(17, ROSE)}</div>
    <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:700;">${n} تقرير بانتظار مرحلتك في مسار الاعتماد</div></div>
    ${iconChevronLeft(14, SUBTLE)}
  </button>`;
}
function renderMainSidebar(mobile) {
  const visible = computeVisibleSidebarPages();
  const notifCount = computeNotificationCount();
  const groupsHtml = SIDEBAR_GROUPS.map((g) => {
    if (g.indexOf("__standalone__") === 0) {
      // عنصر قائم بذاته بالشريط الجانبي (بدون تفرعات وبدون عنوان مجموعة قابل للطي) —
      // نفس بيانات وصلاحيات العنصر الأصلي في SIDEBAR_PAGES، فقط تغيّر مكان عرضه.
      const soloId = g.slice("__standalone__".length);
      const page = visible.find((p) => p.id === soloId);
      if (!page) return "";
      // "إنشاء تقرير" (unit-report) حالة خاصة: تعمل بزر إجراء (open-or-create-report)
      // لا بتنقّل عادي مباشر — تكمل آخر تقرير مفتوح أو تنشئ واحدًا جديدًا فورًا،
      // نفس سلوكها السابق تمامًا داخل مجموعة "unit-home" القديمة.
      const isCreateEntry = page.id === "unit-report";
      if (isCreateEntry && !actionAllowed("open-or-create-report")) return "";
      const active = sidebarPageActive(page);
      const iconColor = active ? ROSE : INK;
      return `
        <div class="nav-group open">
          <div class="nav-list" style="padding-right:0;width:100%;">
            <button class="nav-item ${active ? "active" : ""}" data-action="${isCreateEntry ? "open-or-create-report" : "nav-to"}" ${isCreateEntry ? "" : `data-view="${page.id}"`}>${sidebarNavIcon(page.icon, 15, iconColor)}<span>${esc(page.label)}</span>${page.id === "unit-notifications" && notifCount > 0 ? `<span style="margin-inline-start:auto;background:#d65b57;color:#fff;font-size:10px;font-weight:800;min-width:18px;height:18px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;">${notifCount > 9 ? "9+" : notifCount}</span>` : ""}</button>
          </div>
        </div>`;
    }
    const items = visible.filter((p) => p.group === g);
    if (!items.length) return "";
    // أكورديون: يفيد فقط لما القائمة كاملة تكون طويلة (عدة مجموعات بعناصر كثيرة،
    // زي مديرة النظام). لو كل قائمة المستخدمة قصيرة أصلًا (وحدة، مركز، قسم، إدارة
    // عليا)، نخلي كل المجموعات مفتوحة دائمًا بدون طي، لأن الطي هنا يزيد خطوة بلا فائدة.
    // مديرة النظام تحديدًا: كل المجموعات مفتوحة افتراضيًا (كل الصفحات ظاهرة مباشرة
    // بدون ما تحتاج تضغط كل عنوان مجموعة لتوسيعها) — تقدر طبعًا تطوي أي مجموعة
    // يدويًا لو حبت، وهذا الطي اليدوي (manualState) يبقى له الأولوية دائمًا.
    const shortSidebar = visible.length <= 6;
    const containsActive = items.some((p) => p.id === S.view);
    const manualState = (S.ui.sidebarGroupState || {})[g];
    const isOpen = manualState !== undefined ? manualState : (shortSidebar || containsActive || S.isAdmin);
    return `
      <div class="nav-group ${isOpen ? "open" : ""}">
        <button class="nav-group-label" data-action="toggle-sidebar-group" data-group="${esc(g)}" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:none;cursor:pointer;padding:4px 12px 8px;">
          <span style="display:flex;align-items:center;gap:6px;">${sidebarNavIcon(items[0].icon, 13, SUBTLE)}${esc(SIDEBAR_GROUP_LABELS[g] || g)}</span>
          <span style="display:inline-flex;transition:transform 0.15s;transform:rotate(${isOpen ? "0" : "-90"}deg);">${iconChevronDown(11, SUBTLE)}</span>
        </button>
        ${isOpen ? `<div class="nav-list">
          ${items.map((p) => {
            const isCreateEntry = p.id === "unit-report";
            if (isCreateEntry && !actionAllowed("open-or-create-report")) return "";
            const disabled = (p.scope === "unit" && !S.currentUnitId) || (p.scope === "unitreport" && !(S.currentUnitId && S.currentReportId));
            const active = sidebarPageActive(p);
            const iconColor = disabled ? "#cfc3c8" : active ? ROSE : INK;
            return `<button class="nav-item ${active ? "active" : ""}" ${disabled ? "disabled" : ""} data-action="${isCreateEntry ? "open-or-create-report" : "nav-to"}" ${isCreateEntry ? "" : `data-view="${p.id}"`}>${sidebarNavIcon(p.icon, 15, iconColor)}<span>${esc(p.label)}</span>${p.id === "unit-notifications" && notifCount > 0 ? `<span style="margin-inline-start:auto;background:#d65b57;color:#fff;font-size:10px;font-weight:800;min-width:18px;height:18px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;">${notifCount > 9 ? "9+" : notifCount}</span>` : ""}</button>`;
          }).join("")}
        </div>` : ""}
      </div>`;
  }).join("");

  // لو دخل شخص (من شاشة «كيف تريدين الدخول؟») نعرض اسمه ودوره، واسم الحساب (الوحدة/القسم/المكتب) سطرًا صغيرًا تحته.
  const sbPerson = S.currentPersonId ? personsList().find((p) => p.id === S.currentPersonId) : null;
  const sbPersonRole = sbPerson ? rolesList().find((r) => r.id === sbPerson.roleId) : null;
  const sbName = sbPerson ? sbPerson.name : (S.currentUser ? S.currentUser.name : "");
  const initial = (sbName ? String(sbName).trim()[0] : "؟");
  const roleLabel = S.isAdmin ? "مديرة النظام" : S.isDepartmentUser ? "مديرة قسم" : S.isExecutive ? (S.levelScope ? (S.levelScope.type || "مستوى") : "الإدارة العليا") : S.isOfficeUser ? "مكتب إشراف" : S.currentUnitEntryMode === "head" ? "رئيسة الوحدة" : S.currentUnitEntryMode === "extra" ? (((S.units.find((u) => u.id === S.currentUnitId) || {}).extraReviewerTitle) || "مراجعة إضافية") : "مسؤولة الوحدة";
  const site = currentSiteSettings();
  const taglineHtml = S.isAdmin ? "" : sidebarTaglineBlockHtml(site);

  const inner = `
    <div class="sidebar-head">
      <div class="sidebar-head-icons-row">
        <div class="icon-badge">${iconGauge(ROSE)}</div>
        <div style="display:flex;gap:6px;">
          <button class="sidebar-bell" title="الإشعارات">${iconBell(15, INK)}${notifCount > 0 ? `<span class="notif-badge">${notifCount > 9 ? "9+" : notifCount}</span>` : ""}</button>
          <button class="icon-btn" data-action="${mobile ? "close-mobile-sidebar" : "close-sidebar"}" title="إغلاق القائمة">${iconX(14, INK)}</button>
        </div>
      </div>
      <img src="${esc(siteLogoSrc(site))}" class="sidebar-logo" style="width:${Number(site.logoSize) || 30}px;height:${Number(site.logoSize) || 30}px;" alt="جمعية فرقان" />
      <div class="prs-title sidebar-title">${esc(site.platformName || "منصة التقارير")}</div>
    </div>
    <div class="sidebar-user-block">
      <div class="sidebar-user-avatar">${esc(initial)}</div>
      <div style="min-width:0;">
        <div class="sidebar-user-name">${esc(sbName)}</div>
        <div class="sidebar-role-badge">${esc(sbPerson && sbPersonRole ? sbPersonRole.name : (S.currentEntryRoleName || roleLabel))}</div>
        ${sbPerson && S.currentUser && S.currentUser.name ? `<div style="font-size:10.5px;color:${SUBTLE};margin-top:3px;">${esc(S.currentUser.name)}</div>` : ""}
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;">${groupsHtml}</div>
    <div class="sidebar-spacer"></div>
    <div class="sidebar-sep"></div>
    ${taglineHtml}
    <button class="logout-btn" data-action="logout">${iconLogout(16, ROSE)} تسجيل الخروج</button>
  `;

  if (!mobile) return `<div class="sidebar">${inner}</div>`;
  return `
    <div class="mobile-backdrop" data-action="close-mobile-sidebar"></div>
    <div class="sidebar-mobile-panel"><div class="sidebar" style="margin:0;border-radius:0;height:100vh;max-height:100vh;">${inner}</div></div>
  `;
}

/* =============================== Minimal inline icon set ===================== */
let ICON_OVERRIDE = "";
function svgIcon(paths, size, color, strokeWidth) {
  size = size || 16; color = color || "currentColor";
  if (ICON_OVERRIDE && (color === INK || color === SUBTLE || color === ROSE || color === ROSE_DARK)) color = ICON_OVERRIDE; strokeWidth = strokeWidth || 1.9;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;display:inline-block;vertical-align:middle">${paths}</svg>`;
}
const iconMenu = (c) => svgIcon(`<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>`, 17, c);
const iconX = (s, c) => svgIcon(`<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>`, s || 14, c || SUBTLE);
const iconLogout = (s, c) => svgIcon(`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`, s || 16, c || DANGER);
const iconGauge = (c, s) => svgIcon(`<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M12 2a10 10 0 0 0-8.66 15L6 15"/><path d="M12 12l4-4"/>`, s || 14, c || GOLD);
const iconBuilding = (c, s) => svgIcon(`<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="9" y1="15" x2="9" y2="15"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="15" y1="15" x2="15" y2="15"/>`, s || 16, c || ROSE);
const iconPlus = (s, c) => svgIcon(`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`, s || 15, c);
const iconHeart = (s, c) => svgIcon(`<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>`, s || 15, c);
const iconBook = (s, c) => svgIcon(`<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`, s || 15, c);
const iconGraduationCap = (s, c) => svgIcon(`<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>`, s || 15, c);
const iconArchive = (s, c) => svgIcon(`<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" y1="13" x2="14" y2="13"/>`, s || 15, c);
const iconTrash = (s, c) => svgIcon(`<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>`, s || 14, c || DANGER);
const iconPencil = (s, c) => svgIcon(`<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>`, s || 14, c || INK);
const iconPower = (s, c) => svgIcon(`<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>`, s || 14, c);
const iconChevronLeft = (s, c) => svgIcon(`<polyline points="15 18 9 12 15 6"/>`, s || 14, c || SUBTLE);
const iconChevronRight = (s, c) => svgIcon(`<polyline points="9 18 15 12 9 6"/>`, s || 14, c || SUBTLE);
const iconChevronDown = (s, c) => svgIcon(`<polyline points="6 9 12 15 18 9"/>`, s || 14, c);
const iconChevronUp = (s, c) => svgIcon(`<polyline points="18 15 12 9 6 15"/>`, s || 14, c);
const iconArrowRight = (s, c) => svgIcon(`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`, s || 17, c || INK);
const iconCheck = (s, c) => svgIcon(`<polyline points="20 6 9 17 4 12"/>`, s || 16, c);
const iconCheckCircle = (s, c) => svgIcon(`<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`, s || 14, c);
const iconCircle = (s, c) => svgIcon(`<circle cx="12" cy="12" r="9"/>`, s || 14, c);
const iconEye = (s, c) => svgIcon(`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`, s || 16, c || SUBTLE);
const iconEyeOff = (s, c) => svgIcon(`<path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 4.22-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`, s || 16, c || SUBTLE);
const iconUser = (s, c) => svgIcon(`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`, s || 16, c || SUBTLE);
const iconLogin = (s, c) => svgIcon(`<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>`, s || 17, c);
const iconSave = (s, c) => svgIcon(`<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`, s || 15, c);
const iconPrinter = (s, c) => svgIcon(`<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>`, s || 15, c);
const iconLayers = (s, c) => svgIcon(`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`, s || 16, c || ROSE);
const iconSparkles = (s, c) => svgIcon(`<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>`, s || 15, c);
const iconBell = (s, c) => svgIcon(`<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`, s || 16, c || SUBTLE);
const iconSearch = (s, c) => svgIcon(`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`, s || 16, c || SUBTLE);
const iconDocument = (s, c) => svgIcon(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>`, s || 15, c);
const iconCalendarSmall = (s, c) => svgIcon(`<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`, s || 18, c);
const iconDownload = (s, c) => svgIcon(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`, s || 15, c);
const iconHome = (s, c) => svgIcon(`<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/>`, s || 15, c);
const iconTarget = (s, c) => svgIcon(`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`, s || 15, c);
const iconKey = (s, c) => svgIcon(`<circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5 18 5"/><path d="M18 8 20.5 5.5"/>`, s || 14, c);

function fieldWrap(label, requiredOrHtml, maybeHtml) {
  let required = false, inner;
  if (typeof maybeHtml === "undefined") { inner = requiredOrHtml; } else { required = !!requiredOrHtml; inner = maybeHtml; }
  return `<div class="field"><label class="field-label">${esc(label)} ${required ? '<span class="req-star">*</span>' : ""}</label>${inner}</div>`;
}
function pillBtn(label, opts) {
  opts = opts || {};
  const variant = opts.variant || "primary";
  const cls = { primary: "pill-primary", ghost: "pill-ghost", soft: "pill-soft", danger: "pill-danger" }[variant];
  const icon = opts.icon || "";
  // camelCase data keys must become kebab-case in the HTML attribute, or the
  // browser's HTML parser lowercases them and el.dataset.theCamelKey breaks.
  const attrs = Object.entries(opts.data || {}).map(([k, v]) => `data-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}="${esc(v)}"`).join(" ");
  return `<button type="${opts.type || "button"}" class="pill-btn ${cls}" ${opts.disabled ? "disabled" : ""} data-action="${esc(opts.action || "")}" ${attrs}>${icon}${esc(label)}</button>`;
}
function topBarHtml({ title, subtitle, backAction, backData, right, icon }) {
  const backAttrs = backData ? Object.entries(backData).map(([k, v]) => `data-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}="${esc(v)}"`).join(" ") : "";
  return `
    <div class="topbar">
      <div class="topbar-left">
        ${backAction ? `<button class="back-btn" data-action="${backAction}" ${backAttrs}>${iconArrowRight()}</button>` : ""}
        <div>
          <div class="prs-title topbar-title"${icon ? ` style="display:flex;align-items:center;gap:10px;"` : ""}>${icon ? `<span style="width:34px;height:34px;border-radius:10px;background:${DANGER_BG};display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">${icon}</span>` : ""}${esc(title)}</div>
          ${subtitle ? `<div class="topbar-subtitle">${esc(subtitle)}</div>` : ""}
        </div>
      </div>
      ${right ? `<div class="topbar-right">${right}</div>` : ""}
    </div>`;
}
function progressBarHtml(percent, color) {
  return `<div class="progress-bar"><div class="progress-bar-fill" style="width:${percent}%;background:${color || ROSE}"></div></div>`;
}
function badgeHtml(label, color, bg) {
  return `<span class="badge" style="color:${color};background:${bg}">${esc(label)}</span>`;
}

/* =============================== Login ======================================= */
function rolesList() { return S.roles || (S.roles = dataStore.getRoles()); }
function personsList() { return S.persons || (S.persons = dataStore.getPersons()); }
// أدوار الدخول المباشر للجهة: تُخزَّن في نفس عمود base_role_id كمعرّفات مفصولة بفاصلة
// ("r1,r2"). معرّف واحد = السلوك القديم تمامًا؛ اثنان فأكثر = تظهر بطاقة لكل دور في شاشة
// «كيف تريدين الدخول؟» ويدخل كل دور بصفحاته هو فقط (بلا جمع صلاحيات).
function baseRoleIdsRaw(e) { return e && e.baseRoleId ? String(e.baseRoleId).split(",").map((x) => x.trim()).filter(Boolean) : []; }
function baseRoleIdsOf(e) { const roles = rolesList(); return baseRoleIdsRaw(e).filter((id) => roles.some((r) => r.id === id && r.status !== "disabled")); }
function baseRoleChoiceCardsHtml(ids) {
  return ids.map((id) => {
    const r = rolesList().find((x) => x.id === id);
    if (!r) return "";
    return `<button type="button" class="card" data-action="choose-base-role" data-role="${esc(r.id)}" style="display:flex;align-items:center;gap:12px;text-align:right;cursor:pointer;border:1px solid ${BORDER};background:#fff;width:100%;">
            <div style="width:42px;height:42px;border-radius:12px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconUser(19, ROSE)}</div>
            <div><div style="font-size:14px;font-weight:800;">${esc(r.name)}</div><div style="font-size:11px;color:${SUBTLE};margin-top:2px;">${esc(structSimpleRoleCountsText(r))}</div></div>
          </button>`;
  }).join("");
}
function ownerActivePersons(kind, id) {
  if (!id) return [];
  const roles = rolesList();
  return personsList().filter((p) => p.status !== "disabled" && (p.ownerKind || "unit") === kind && p.ownerId === id && roles.some((r) => r.id === p.roleId && r.status !== "disabled"));
}
function unitActivePersons(unitId) { return ownerActivePersons("unit", unitId); }
function personCardsHtml(list) {
  return list.map((p) => {
    const role = rolesList().find((r) => r.id === p.roleId);
    const asking = S.ui.pinPersonId === p.id;
    return `
          <div class="card" style="border:1px solid ${asking ? ROSE : BORDER};background:#fff;width:100%;">
            <button type="button" data-action="choose-person" data-id="${esc(p.id)}" style="display:flex;align-items:center;gap:12px;text-align:right;cursor:pointer;background:none;border:none;width:100%;padding:0;font-family:inherit;">
              <div style="width:42px;height:42px;border-radius:12px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconUser(19, ROSE)}</div>
              <div>
                <div style="font-size:14px;font-weight:800;">${esc(p.name)}</div>
                <div style="font-size:11px;color:${SUBTLE};margin-top:2px;">${esc(role ? role.name : "")}${personEffectivePin(p) ? " • برمز" : ""}</div>
              </div>
            </button>
            ${asking ? `<div style="display:flex;gap:6px;margin-top:10px;align-items:center;">
              <input class="input" id="person-pin-input" type="password" inputmode="numeric" autocomplete="off" placeholder="الرمز (PIN)" style="flex:1;" />
              ${pillBtn("دخول", { action: "confirm-person-pin", data: { id: p.id } })}
              ${pillBtn("إلغاء", { variant: "ghost", action: "cancel-person-pin" })}
            </div>${S.ui.pinError ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-top:6px;">${esc(S.ui.pinError)}</div>` : ""}` : ""}
          </div>`;
  }).join("");
}
function entityLoginSelectHtml() {
  const pe = S.pendingEntityLogin;
  const ent = pe.kind === "department" ? (S.departments || []).find((d) => d.id === pe.id) : (S.offices || []).find((o) => o.id === pe.id);
  return `
  <div class="login-wrap">
    <div class="login-box" style="max-width:440px;">
      <div class="login-card">
        <div style="text-align:center;margin-bottom:22px;">
          <img class="login-logo" src="${esc(siteLogoSrc(currentSiteSettings()))}" alt="جمعية فرقان" />
          <div class="prs-title" style="font-size:19px;font-weight:900;color:#000">كيف تريدين الدخول؟</div>
          ${ent ? `<div style="font-size:11.5px;color:${SUBTLE};margin-top:4px;">${esc(ent.name)}</div>` : ""}
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${ownerActivePersons(pe.kind, pe.id).length ? "" : baseRoleIdsOf(ent).length >= 2 ? baseRoleChoiceCardsHtml(baseRoleIdsOf(ent)) : `<button type="button" class="card" data-action="choose-entity-account" style="display:flex;align-items:center;gap:12px;text-align:right;cursor:pointer;border:1px solid ${BORDER};background:#fff;width:100%;">
            <div style="width:42px;height:42px;border-radius:12px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconUser(19, ROSE)}</div>
            <div><div style="font-size:14px;font-weight:800;">${pe.kind === "department" ? "مديرة القسم" : "مكتب الإشراف"}</div><div style="font-size:11px;color:${SUBTLE};margin-top:2px;">الدخول بحساب ${pe.kind === "department" ? "القسم" : "المكتب"} مباشرة</div></div>
          </button>`}
          ${personCardsHtml(ownerActivePersons(pe.kind, pe.id))}
        </div>
      </div>
      <button type="button" data-action="logout" style="display:block;margin:16px auto 0;background:none;border:none;color:${SUBTLE};font-size:11.5px;cursor:pointer;text-decoration:underline;">ليست أنتِ؟ تسجيل الخروج</button>
    </div>
  </div>`;
}
function personEffectivePin(p) {
  const r = rolesList().find((x) => x.id === p.roleId);
  return String(p.pin || (r && r.pin) || "").trim();
}
function applyPersonPerms(p) {
  const eff = personEffectivePerms(p);
  // دور بلا صفحات = لا صفحات (لا يرث صفحات حساب الجهة) — قرار نجود: الفارغ لا يعني الوراثة.
  S.allowedPages = eff.pages.length ? normalizeDashboardPages(eff.pages) : [];
  if (eff.actions.length) S.allowedActions = [...eff.actions];
  const bs = eff.buttons || [];
  const chips = bs.filter((b) => b.indexOf("notify:") !== 0);
  S.allowedButtons = chips.length ? [...chips] : null;
  // «ينبّه» = إدخال بصيغة notify:chip:<tab> داخل نفس قائمة الأزرار (بدون تغيير بنية الصلاحيات)
  S.personNotifyTabs = bs.filter((b) => b.indexOf("notify:chip:") === 0).map((b) => b.slice("notify:chip:".length));
}
function enterEntityAsPerson(p, role) {
  const pe = S.pendingEntityLogin;
  S.currentPersonId = p ? p.id : null;
  S.currentPersonName = p ? p.name : "";
  S.currentEntryRoleName = !p && role ? role.name : "";
  if (p) applyPersonPerms(p);
  else if (role) applyPersonPerms({ roleId: role.id, permsOverride: null });
  S.view = pe.view;
  S.pendingEntityLogin = null;
  S.ui.pinPersonId = null; S.ui.pinError = "";
  if (S.allowedPages && S.allowedPages.length && !S.allowedPages.includes(S.view)) {
    const t = SIDEBAR_PAGES.find((x) => S.allowedPages.includes(x.id));
    if (t) S.view = t.id;
  }
  render();
}
function enterUnitAsPerson(p) {
  if (S.pendingEntityLogin) return enterEntityAsPerson(p);
  const role = rolesList().find((r) => r.id === p.roleId);
  const unitId = S.pendingUnitLoginId;
  S.currentUnitEntryMode = "admin";
  S.currentPersonId = p.id;
  S.currentPersonName = p.name;
  // صلاحيات الشخص (الدور + الاستثناء): لو محددة تحل محل صلاحيات حساب الجهة، وإلا يبقى الإرث كما هو
  applyPersonPerms(p);
  S.reports[unitId] = dataStore.getReports(unitId);
  S.currentUnitId = unitId;
  S.currentReportId = null;
  S.pendingUnitLoginId = null;
  S.ui.pinPersonId = null; S.ui.pinError = "";
  S.view = "unit-dashboard";
  render();
  if (dbConnected()) { refreshReportsFromDb(unitId).then(() => { if (S.currentUser) render(); }); }
}
function renderUnitRoleSelect() {
  if (S.pendingEntityLogin) return entityLoginSelectHtml();
  const unit = (S.units || []).find((u) => u.id === S.pendingUnitLoginId);
  return `
  <div class="login-wrap">
    <div class="login-box" style="max-width:440px;">
      <div class="login-card">
        <div style="text-align:center;margin-bottom:22px;">
          <img class="login-logo" src="${esc(siteLogoSrc(currentSiteSettings()))}" alt="جمعية فرقان" />
          <div class="prs-title" style="font-size:19px;font-weight:900;color:#000">كيف تريدين الدخول؟</div>
          ${unit ? `<div style="font-size:11.5px;color:${SUBTLE};margin-top:4px;">${esc(unit.name)}</div>` : ""}
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${unitActivePersons(S.pendingUnitLoginId).length ? "" : baseRoleIdsOf(unit).length >= 2 ? baseRoleChoiceCardsHtml(baseRoleIdsOf(unit)) : ""}
          ${personCardsHtml(unitActivePersons(S.pendingUnitLoginId))}
        </div>
      </div>
      <button type="button" data-action="logout" style="display:block;margin:16px auto 0;background:none;border:none;color:${SUBTLE};font-size:11.5px;cursor:pointer;text-decoration:underline;">ليست أنتِ؟ تسجيل الخروج</button>
    </div>
  </div>`;
}


function renderLogin() {
  const err = S.ui.loginError || "";
  const showPw = !!S.ui.loginShowPw;
  const busy = !!S.ui.loginBusy;
  const en = currentEntry();
  if (!en && !S.ui.portalSkip && portalActive()) return renderPortalPage();
  if (en && !S.ui.loginUsernameVal) S.ui.loginUsernameVal = en.username;
  return `
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-card">
        ${en ? entryLoginHeaderHtml(en) : `<div style="text-align:center;margin-bottom:26px;">
          <img class="login-logo" src="${esc(siteLogoSrc(currentSiteSettings()))}" alt="جمعية فرقان" />
          <div class="prs-title" style="font-size:21px;font-weight:900;color:#000">نظام توثيق الأداء</div>
          <div style="font-size:11.5px;color:${SUBTLE};margin-top:4px;">جمعية فرقان لتحفيظ القرآن الكريم بالطائف</div>
        </div>`}
        <form id="login-form">
          ${fieldWrap("اسم المستخدم", true, `
            <div class="input-icon-wrap">
              <span class="input-icon-right">${iconUser()}</span>
              <input class="input" style="padding-right:38px" id="login-username" placeholder="اسم المستخدم" value="${esc(S.ui.loginUsernameVal || "")}" required />
            </div>`)}
          ${fieldWrap("كلمة السر", true, `
            <div class="input-icon-wrap">
              <input class="input" style="padding-left:38px" id="login-password" type="${showPw ? "text" : "password"}" placeholder="كلمة السر" value="${esc(S.ui.loginPasswordVal || "")}" required />
              <button type="button" class="input-icon-left-btn" data-action="toggle-login-pw">${showPw ? iconEyeOff() : iconEye()}</button>
            </div>`)}
          ${err ? `<div class="error-box">${esc(err)}</div>` : ""}
          <button type="submit" class="submit-btn" ${busy ? "disabled" : ""}>${iconLogin(17, "#fff")} ${busy ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}</button>
        </form>
        ${en ? `<button type="button" data-action="entry-clear" style="display:block;margin:14px auto 0;background:none;border:none;color:${SUBTLE};font-size:11.5px;cursor:pointer;text-decoration:underline;font-family:inherit;">${portalEnabled() ? "رجوع" : "الدخول بحساب آخر"}</button>` : ""}
        ${!en && S.ui.portalSkip && portalEnabled() ? `<button type="button" data-action="portal-return" style="display:block;margin:14px auto 0;background:none;border:none;color:${SUBTLE};font-size:11.5px;cursor:pointer;text-decoration:underline;font-family:inherit;">رجوع لبوابة الدخول</button>` : ""}
      </div>
      ${dbConnected()
        ? `<div class="login-hint" style="color:${GREEN}">مربوط بقاعدة البيانات ✓ — سجّلي بالاسم وكلمة المرور المسجّلة بها</div>`
        : `<div class="login-hint">غير مربوط بقاعدة البيانات</div>`}
    </div>
  </div>`;
}

async function handleLoginSubmit() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  if (dbConnected()) {
    S.ui.loginBusy = true; render();
    const result = await supabaseLogin(username, password);
    if (result.ok) {
      await refreshUnitsAndDepartmentsFromDb();
      if (result.user && (result.user.role === "department" || result.user.role === "office")) {
        try { await refreshRolesPersonsFromDb(); } catch (e) { /* نكمل بالنسخة المحلية */ }
      }
      try { await refreshReportTabsFromDb(); } catch (e) { /* نكمل بالنسخة المحلية */ }
      try { await refreshOrgLevelsFromDb(); } catch (e) { /* نكمل بالنسخة المحلية */ }
      if (result.user && result.user.role !== "admin" && result.user.unitId) {
        // نحتاج الأشخاص قبل شاشة "كيف تريدين الدخول؟"
        try { await refreshRolesPersonsFromDb(); } catch (e) { /* نكمل بالنسخة المحلية */ }
      }
      S.ui.loginBusy = false;
      S.ui.loginError = "";
      doLogin(result.user);
      return;
    }
    S.ui.loginBusy = false;
    // حساب "مستوى" من الهيكل المرن (org_levels)
    const lvRes = await supabaseRequest(`org_levels?login_id=eq.${encodeURIComponent(username)}&password=eq.${encodeURIComponent(password)}&status=eq.active&select=*&limit=1`);
    if (lvRes.ok && Array.isArray(lvRes.data) && lvRes.data.length) {
      S.ui.loginBusy = true; render();
      try { await refreshUnitsAndDepartmentsFromDb(); await refreshOrgLevelsFromDb(); await refreshRolesPersonsFromDb(); await refreshApprovalPathsFromDb(); } catch (e) { /* نكمل بالنسخة المحلية */ }
      S.ui.loginBusy = false; S.ui.loginError = "";
      const lv = olFind(lvRes.data[0].id) || rowToOrgLevel(lvRes.data[0]);
      doLoginLevel(lv);
      return;
    }
    S.ui.loginError = result.error || "تعذر تسجيل الدخول";
    render();
    return;
  }

  // بدون قاعدة بيانات (للتجربة المحلية فقط): نفس مطابقة القاعدة لكن على النسخة المحلية
  const local = localLogin(username, password);
  if (local) { S.ui.loginError = ""; doLogin(local); return; }
  const lvLocal = findLevelLogin(username, password);
  if (lvLocal) { S.ui.loginError = ""; doLoginLevel(lvLocal); return; }
  S.ui.loginError = "اسم المستخدم أو كلمة السر غير صحيحة"; render();
}

async function refreshUnitsAndDepartmentsFromDb() {
  if (!dbConnected()) return;
  await Promise.all([pendingSupabaseWrite("units"), pendingSupabaseWrite("departments"), pendingSupabaseWrite("offices")]);
  const [unitsRes, deptRes, officesRes] = await Promise.all([
    supabaseRequest("units?select=*"),
    supabaseRequest("departments?select=*"),
    supabaseRequest("offices?select=*"),
    refreshReportSectionsFromDb(),
    // تعريفات المؤشرات والأهداف وحقول الأقسام تُحمَّل لكل الحسابات (التعبئة واللوحات تعتمد عليها)
    refreshIndicatorDefinitionsFromDb().catch(() => {}),
    refreshGoalsDefinitionsFromDb().catch(() => {}),
    refreshSectionFieldSchemasFromDb().catch(() => {}),
  ]);
  if (unitsRes.ok && Array.isArray(unitsRes.data)) {
    S.units = unitsRes.data.map(rowToUnit);
    dataStore.cacheUnitsLocally(S.units);
    syncUnitDeptsFromTree();
  }
  if (deptRes.ok && Array.isArray(deptRes.data)) {
    S.departments = deptRes.data.map(rowToDept);
    dataStore.cacheDepartmentsLocally(S.departments);
  }
  if (officesRes.ok && Array.isArray(officesRes.data)) {
    S.offices = officesRes.data.map(rowToOffice);
    dataStore.cacheOfficesLocally(S.offices);
  }
}

async function refreshIndicatorDefinitionsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("indicator_definitions");
  const res = await supabaseRequest("indicator_definitions?select=*");
  if (res.ok && Array.isArray(res.data)) {
    S.indicatorDefinitions = res.data.map(rowToIndDef);
    dataStore.cacheIndicatorDefinitionsLocally(S.indicatorDefinitions);
  }
}

async function refreshGoalsDefinitionsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("goals_definitions");
  const res = await supabaseRequest("goals_definitions?select=*");
  if (res.ok && Array.isArray(res.data)) {
    S.goalsDefinitions = {
      strategic: res.data.filter((r) => r.kind === "strategic").map(rowToGoal),
      operational: res.data.filter((r) => r.kind === "operational").map(rowToGoal),
    };
    dataStore.cacheGoalsDefinitionsLocally(S.goalsDefinitions);
  }
}

async function refreshRolesPersonsFromDb() {
  if (!dbConnected()) return;
  await Promise.all([pendingSupabaseWrite("roles"), pendingSupabaseWrite("persons")]);
  const [r1, r2] = await Promise.all([supabaseRequest("roles?select=*"), supabaseRequest("persons?select=*")]);
  if (r1.ok && Array.isArray(r1.data)) { S.roles = r1.data.map(rowToRole); lsSet(ROLES_KEY, JSON.stringify(S.roles)); }
  if (r2.ok && Array.isArray(r2.data)) { S.persons = r2.data.map(rowToPerson); lsSet(PERSONS_KEY, JSON.stringify(S.persons)); }
}

// يبني متغيّر SECTIONS الفعلي (المستخدم في كل مكان بالتطبيق) من قائمة التعريفات
// الكاملة: يستبعد الأقسام المعطّلة ويرتّب الباقي حسب order.
function applyReportSectionDefs(list) {
  const defs = Array.isArray(list) && list.length ? list : DEFAULT_SECTIONS.map((s, i) => ({ id: s.id, label: s.label, order: i, enabled: true }));
  S.reportSectionDefs = defs;
  SECTIONS = defs.filter((s) => s.enabled !== false).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map((s) => ({ id: s.id, label: s.label }));
  if (!SECTIONS.length) SECTIONS = DEFAULT_SECTIONS.map((s) => ({ ...s })); // شبكة أمان: لا يبقى النظام بلا أقسام أبدًا
}

async function refreshReportSectionsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("report_sections");
  const res = await supabaseRequest("report_sections?select=*");
  if (res.ok && Array.isArray(res.data)) {
    if (res.data.length) {
      const defs = res.data.map(rowToSectionDef);
      applyReportSectionDefs(defs);
      dataStore.cacheReportSectionDefsLocally(defs);
    } else {
      // الجدول موجود لكنه فارغ (أول مرة) — نزرعه بالقائمة الافتراضية مرة واحدة.
      const seed = DEFAULT_SECTIONS.map((s, i) => ({ id: s.id, label: s.label, order: i, enabled: true }));
      applyReportSectionDefs(seed);
      dataStore.saveReportSectionDefs(seed);
    }
  }
}

// يحدّث SECTION_FIELD_SCHEMAS[sectionId] فورًا (يُستخدم من صفحة إدارة الحقول نفسها
// وأيضًا عند تحميل تخصيصات محفوظة) ويسجّل أي حقل "قائمة قابلة للتوسعة" جديد في
// CUSTOM_OPTION_FIELD_MAP عشان يشتغل زر "أخرى" فيه تلقائيًا بدون كود إضافي.
function setSectionFieldsLive(sectionId, fields) {
  const existing = SECTION_FIELD_SCHEMAS[sectionId];
  const itemLabel = (existing && existing.itemLabel) || (SECTIONS.find((s) => s.id === sectionId) || {}).label || sectionId;
  // نحافظ على arrayKey الأصلي (اسم الحقل اللي تُخزَّن فيه البيانات فعليًا، مثال: قسم
  // "improvement" يخزّن بياناته تحت d.opportunities) — بعض الأقسام معرّفها arrayKey
  // مختلف عن sectionId، وأي كتابة فوقه بالغلط بـ sectionId تفصل الحقول عن بياناتها
  // المحفوظة فعليًا (تظهر فارغة). نستخدم sectionId فقط لو ما فيه تعريف افتراضي أصلاً.
  const arrayKey = (existing && existing.arrayKey) || sectionId;
  // نحافظ على كل تعريفات القسم الإضافية (hint/minItems/maxItems/itemLabelPlural/
  // sectionLabel...) بنشرها من التعريف الحالي أولًا — بدل ما تُفقد بمجرد تعديل حقل
  // واحد من لوحة الإدارة (كانت هذي مشكلة حقيقية بأقسام فيها حد أقصى/أدنى أو نص تنبيهي).
  SECTION_FIELD_SCHEMAS[sectionId] = { ...(existing || {}), arrayKey, itemLabel, fields };
  fields.forEach((f) => {
    // المفتاح لازم يكون arrayKey (نفس المفتاح اللي يبحث فيه dispatch الحقيقي عند
    // إضافة قيمة "أخرى" مخصصة: data-arr بالنموذج هو arrayKey دايمًا، وليس sectionId).
    if (f.type === "expandableSelect" && f.customKey) CUSTOM_OPTION_FIELD_MAP[`${arrayKey}|${f.id}`] = f.customKey;
  });
}
// يطبّق تخصيصات حقول محفوظة (من القاعدة أو من التخزين المحلي) فوق SECTION_FIELD_SCHEMAS
// الافتراضي المكتوب بالكود — قسم بدون تخصيص محفوظ (أو بتخصيص فارغ لم يُحفظ فعليًا
// بعد) يبقى بتعريفه الافتراضي كما هو تمامًا.
function applyFieldSchemaOverrides(map) {
  Object.keys(map || {}).forEach((sectionId) => {
    let fields = map[sectionId];
    if (!Array.isArray(fields) || !fields.length) return;
    if (sectionId === "programs") {
      const missing = PROGRAM_ACHIEVEMENT_FIELDS.filter((nf) => !fields.some((f) => f.id === nf.id));
      if (missing.length) {
        const at = fields.findIndex((f) => f.id === "actualBeneficiaries");
        fields = at === -1 ? [...fields, ...missing] : [...fields.slice(0, at + 1), ...missing, ...fields.slice(at + 1)];
      }
    }
    setSectionFieldsLive(sectionId, fields);
  });
}

async function refreshSectionFieldSchemasFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("section_field_schemas");
  const res = await supabaseRequest("section_field_schemas?select=*");
  if (res.ok && Array.isArray(res.data) && res.data.length) {
    const map = {};
    res.data.map(rowToFieldSchemaEntry).forEach((e) => { map[e.sectionId] = e.fields; });
    applyFieldSchemaOverrides(map);
    dataStore.cacheSectionFieldSchemasLocally(map);
  }
}

async function refreshSiteSettingsFromDb() {
  if (!dbConnected()) return;
  const res = await supabaseRequest("site_settings?id=eq.main&select=*");
  if (res.ok && Array.isArray(res.data) && res.data.length) {
    S.siteSettings = rowToSiteSettings(res.data[0]);
    lsSet(SITE_SETTINGS_KEY, JSON.stringify(S.siteSettings));
    applySiteColors(S.siteSettings);
  }
}

async function refreshDashboardConfigFromDb() {
  if (!dbConnected()) return;
  const res = await supabaseRequest("dashboard_config?id=eq.main&select=*");
  if (res.ok && Array.isArray(res.data) && res.data.length) {
    S.dashboardConfig = rowToDashboardConfig(res.data[0]);
    lsSet(DASHBOARD_CONFIG_KEY, JSON.stringify(S.dashboardConfig));
  }
}


async function refreshReportsFromDb(unitId) {
  if (!dbConnected()) return;
  const res = await supabaseRequest(`reports?unit_id=eq.${encodeURIComponent(unitId)}&select=*`);
  if (res.ok && Array.isArray(res.data)) {
    S.reports[unitId] = res.data.map(rowToReport);
    dataStore.cacheReportsLocally(unitId, S.reports[unitId]);
  }
}


// صلاحيات الحساب الأساسي (وحدة/مركز/قسم/مكتب): من دوره، أو من حقلي
// allowedPages/allowedActions المحفوظين على سجله إن لم يكن له دور.
// ===== بدون صفحات افتراضية لمديرة النظام والإدارة العليا (قرار نجود) =====
// كل حساب يأخذ صفحاته وأزراره من أدواره (اتحاد كل الأدوار المختارة له).
// مديرة النظام لها دائمًا "المستخدمون" و"إعدادات الموقع" فقط، حتى لا يُقفل النظام.
const ADMIN_FIXED_PAGES = ["units-manage", "site-settings", "reports-manage"];
function accountRolesPerms(entity) {
  const out = { pages: [], actions: [], buttons: [], count: 0 };
  baseRoleIdsOf(entity).forEach((id) => {
    const role = rolesList().find((r) => r.id === id); if (!role) return;
    const p = rolePermsOf(role); out.count++;
    p.pages.forEach((x) => { if (!out.pages.includes(x)) out.pages.push(x); });
    p.actions.forEach((x) => { if (!out.actions.includes(x)) out.actions.push(x); });
    p.buttons.forEach((x) => { if (!out.buttons.includes(x)) out.buttons.push(x); });
  });
  return out;
}
function applyAdminOrExecRoles(entity, isAdminAccount) {
  const rp = accountRolesPerms(entity);
  let pages = rp.pages;
  if (!rp.count && !isAdminAccount && entity && Array.isArray(entity.allowedPages) && entity.allowedPages.length) pages = entity.allowedPages; // صفحات محفوظة سابقًا على الحساب نفسه
  pages = normalizeDashboardPages(pages);
  if (isAdminAccount) ADMIN_FIXED_PAGES.forEach((x) => { if (!pages.includes(x)) pages.push(x); });
  S.allowedPages = pages;
  if (!isAdminAccount && rp.actions.length) S.allowedActions = rp.actions;
  const chips = rp.buttons.filter((b) => b.indexOf("notify:") !== 0);
  if (!isAdminAccount && chips.length) S.allowedButtons = chips;
}
function pageAllowedForView(view) {
  const list = S.allowedPages || [];
  const alias = view === "org-levels" || view === "org-chart" ? "units-manage" : (MERGED_PAGE_MAP[view] || view);
  return list.includes(view) || list.includes(alias);
}
function canManageUsers() { return !!S.currentUser && (S.isAdmin || pageAllowedForView("units-manage")); }
function applyScopedAccountPermissions(entity) {
  if (!entity) return;
  // دور الحساب الأساسي (يُضبط من «المستخدمون ← الهيكل ← البيانات والحساب») له الأولوية على حقول الصفحات القديمة.
  const baseIds = baseRoleIdsOf(entity);
  if (baseIds.length >= 2) return; // أكثر من دور: يُطبَّق دور واحد فقط بعد أن تختاره من شاشة «كيف تريدين الدخول؟»
  if (baseIds.length === 1) { applyPersonPerms({ roleId: baseIds[0], permsOverride: null }); return; }
  if (S.allowedPages === null && entity.allowedPages && entity.allowedPages.length) {
    S.allowedPages = normalizeDashboardPages(entity.allowedPages);
  }
  if (S.allowedActions === null && entity.allowedActions && entity.allowedActions.length) {
    S.allowedActions = entity.allowedActions;
  }
}

function doLogin(user) {
  S.currentPersonId = null; S.currentPersonName = ""; S.currentEntryRoleName = "";
  S.currentUser = user;
  S.cameFromAllReports = false;
  S.adminPreviewOrigin = null;
  S.ui.loginUsernameVal = ""; S.ui.loginPasswordVal = "";
  S.isAdmin = user.role === "admin";
  S.isDepartmentUser = user.role === "department";
  S.isExecutive = user.role === "executive";
  S.isOfficeUser = user.role === "office";
  S.units = dataStore.getUnits();
  S.departments = dataStore.getDepartments();
  S.offices = dataStore.getOffices();
  // حساب مستوى من الهيكل المرن: اطّلاع كالإدارة العليا لكن على وحدات ما تحته فقط
  S.levelScope = user.levelId ? { levelId: user.levelId, type: user.levelType || "", unitIds: olScopeUnitIds(user.levelId) } : null;
  S.indicatorDefinitions = dataStore.getIndicatorDefinitions();
  S.goalsDefinitions = dataStore.getGoalsDefinitions();
  applyReportSectionDefs(dataStore.getReportSectionDefs());
  applyFieldSchemaOverrides(dataStore.getSectionFieldSchemas());
  S.sidebarOpen = !isMobileViewport();
  if (S.isAdmin) {
    const reports = {};
    S.units.forEach((u) => { reports[u.id] = dataStore.getReports(u.id); });
    S.reports = reports;
    const adminEnt = S.units.find((u) => u.id === user.id) || S.units.find((u) => u.role === "admin" && u.name === user.name);
    applyAdminOrExecRoles(adminEnt, true);
    S.view = S.allowedPages && S.allowedPages.includes("dashboard") ? "dashboard" : "units-manage";
  } else if (S.isDepartmentUser) {
    S.currentDepartmentId = user.departmentId;
    applyScopedAccountPermissions(S.departments.find((d) => d.id === S.currentDepartmentId));
    const reports = {};
    S.units.filter((u) => u.departmentId === S.currentDepartmentId).forEach((u) => { reports[u.id] = dataStore.getReports(u.id); });
    S.reports = reports;
    // الصفحة الافتراضية صارت "لوحة المعلومات" الموحدة بدل "قسمي" القديمة —
    // "قسمي" تبقى متاحة بالشريط الجانبي بجانبها (بدون حذف) لحد ما نتأكد إن
    // الجديدة تغطي كل شيء.
    S.view = "dashboard";
  } else if (S.isExecutive) {
    // اطلاع إشرافي شامل فقط — بدون أي دخول لنموذج كتابة التقارير أو تعديلها.
    // (حساب الإدارة العليا خارج نطاق نظام الصلاحيات المخصّصة هذا عمدًا)
    const reports = {};
    S.units.forEach((u) => { reports[u.id] = dataStore.getReports(u.id); });
    S.reports = reports;
    S.view = "executive-dashboard";
    // بدون صفحات افتراضية: صفحاتها من أدوارها فقط (حساب مستوى من الهيكل المرن تُضبط صفحاته بعدها).
    applyAdminOrExecRoles(user.levelId ? null : (S.units.find((u) => u.id === user.unitId) || S.units.find((u) => u.role === "executive" && u.name === user.name)), false);
    if (S.allowedPages && !S.allowedPages.includes("dashboard")) S.view = S.allowedPages[0] || "executive-dashboard";
  } else if (S.isOfficeUser) {
    // اطلاع مكتب الإشراف: لوحة معلومات + أرشفة + تقارير + ملخص + اعتماد أبرز
    // النتائج، كلها مقتصرة على وحدات أقسامه التابعة فقط — بدون أي دخول لتقارير
    // الوحدات أو تعديلها.
    S.currentOfficeId = user.officeId || "";
    applyScopedAccountPermissions(S.offices.find((o) => o.id === S.currentOfficeId));
    S.ui.departmentsPageSelectedId = null;
    S.view = "office-dashboard";
  } else if (!unitActivePersons(user.unitId).length && baseRoleIdsOf(S.units.find((u) => u.id === user.unitId)).length < 2) {
    // جهة بلا أشخاص ولا أدوار متعددة — تدخل مباشرة بدون شاشة اختيار.
    const unitId = user.unitId;
    applyScopedAccountPermissions(S.units.find((u) => u.id === unitId));
    S.reports[unitId] = dataStore.getReports(unitId);
    S.currentUnitId = unitId;
    S.currentReportId = null;
    S.view = "unit-dashboard";
  } else {
    applyScopedAccountPermissions(S.units.find((u) => u.id === user.unitId));
    // للجهة أشخاص (إدارية، رئيسة…) أو أكثر من دور: تختار من تدخل باسمها.
    S.pendingUnitLoginId = user.unitId;
    S.currentUnitEntryMode = null;
    S.view = "unit-role-select";
  }
  if (S.isDepartmentUser || S.isOfficeUser) {
    const pk = S.isDepartmentUser ? "department" : "office";
    const pid = S.isDepartmentUser ? S.currentDepartmentId : S.currentOfficeId;
    const pEnt = S.isDepartmentUser ? S.departments.find((d) => d.id === pid) : S.offices.find((o) => o.id === pid);
    if (ownerActivePersons(pk, pid).length || baseRoleIdsOf(pEnt).length >= 2) { S.pendingEntityLogin = { kind: pk, id: pid, view: S.view }; S.view = "unit-role-select"; }
  }
  render();
  if (dbConnected()) {
    if (S.isAdmin || S.isExecutive) {
      Promise.all(scopeUnitsFilter(S.units).map((u) => refreshReportsFromDb(u.id))).then(() => { if (S.currentUser) render(); });
    } else if (S.isDepartmentUser) {
      Promise.all(S.units.filter((u) => u.departmentId === S.currentDepartmentId).map((u) => refreshReportsFromDb(u.id))).then(() => { if (S.currentUser) render(); });
    } else if (S.isOfficeUser) {
      Promise.all(officeUnits(S.currentOfficeId).map((u) => refreshReportsFromDb(u.id))).then(() => { if (S.currentUser) render(); });
    } else if (S.currentUnitId) {
      refreshReportsFromDb(S.currentUnitId).then(() => { if (S.currentUser) render(); });
    }
  }
}

function doLogout() {
  S.levelScope = null;
  S.entryLink = parseEntryParam(); S.ui.portalType = ""; S.ui.portalSkip = false; S.ui.portalFromType = "";
  S.currentUser = null; S.currentPersonId = null; S.currentPersonName = ""; S.currentEntryRoleName = ""; S.currentUnitId = null; S.currentDepartmentId = null; S.currentOfficeId = null; S.isAdmin = false; S.isDepartmentUser = false; S.isExecutive = false; S.isOfficeUser = false; S.cameFromAllReports = false; S.adminPreviewOrigin = null; S.pendingUnitLoginId = null; S.pendingEntityLogin = null; S.currentUnitEntryMode = null; S.allowedPages = null; S.allowedActions = null; S.allowedButtons = null; S.personNotifyTabs = null; S.view = "login"; S.ui = {};
  render();
}

/* =============================== Dashboard (admin) =========================== */
/* =============================== Inline SVG charts (no libraries needed) ===== */
// قائمة تقدّم بأشرطة أفقية: كل وحدة بسطر واحد (اسمها كاملًا + شريط + نسبة) — الشريط
// الرمادي (المسار) يظهر حتى لو النسبة صفر، فلا تبدو القائمة فارغة، وتُرتَّب من
// الأعلى إنجازًا للأقل.
function progressListHtml(items) {
  const rows = items.slice().sort((a, b) => b.value - a.value).map((it) => {
    const v = Math.max(0, Math.min(100, Number(it.value) || 0));
    return `<div style="display:flex;align-items:center;gap:12px;">
      <div style="flex:0 0 38%;min-width:110px;font-size:12.5px;font-weight:700;color:${INK};line-height:1.4;">${esc(it.label)}</div>
      <div style="flex:1;height:12px;border-radius:999px;background:${GRAY_BG};overflow:hidden;"><div style="width:${v}%;height:100%;border-radius:999px;background:linear-gradient(90deg,${mixHex(ROSE, "#ffffff", 0.35)},${ROSE});"></div></div>
      <div style="flex:0 0 44px;text-align:left;font-size:12px;font-weight:800;color:${v ? ROSE : SUBTLE};">${v}٪</div>
    </div>`;
  }).join("");
  return `<div style="display:flex;flex-direction:column;gap:12px;max-height:420px;overflow-y:auto;padding:2px 2px 2px 6px;">${rows}</div>`;
}
function svgBarChart(items, opts) {
  // items: [{label, value}], value in 0..100 (percent)
  opts = opts || {};
  const w = opts.width || 640, h = opts.height || 220;
  const padTop = 14, padBottom = 34, padRight = 34, padLeft = 6;
  const chartW = w - padRight - padLeft, chartH = h - padTop - padBottom;
  const n = items.length || 1;
  const barGap = 14;
  const barW = Math.max(10, (chartW - barGap * (n - 1)) / n);
  // opts.max/opts.suffix: لقيم ليست نسبًا (أعداد) — الافتراضي نسب 0..100 بعلامة ٪
  const max = opts.max || 100, sfx = opts.suffix == null ? "٪" : opts.suffix;
  const gridLines = [0, 25, 50, 75, 100];
  const yFor = (v) => padTop + chartH - (v / 100) * chartH;

  const grid = gridLines.map((g) => `
    <line x1="${padLeft}" y1="${yFor(g)}" x2="${w - padRight}" y2="${yFor(g)}" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3" />
    <text x="${w - padRight + 6}" y="${yFor(g) + 3}" font-size="9" fill="${SUBTLE}">${max === 100 ? g : Math.round((g / 100) * max)}</text>`).join("");

  const bars = items.map((it, i) => {
    const x = padLeft + i * (barW + barGap);
    const barH = (Math.max(0, Math.min(max, it.value)) / max) * chartH;
    const y = padTop + chartH - barH;
    const color = it.color || ROSE;
    const label = it.label.length > 10 ? it.label.slice(0, 10) + "…" : it.label;
    return `
      <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" rx="4" fill="${color}">
        <title>${esc(it.label)}: ${it.value}${sfx}</title>
      </rect>
      <text x="${(x + barW / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" font-size="10.5" font-weight="800" fill="${INK}" text-anchor="middle">${it.value}${sfx}</text>
      <text x="${(x + barW / 2).toFixed(1)}" y="${h - padBottom + 15}" font-size="9.5" fill="${SUBTLE}" text-anchor="middle">${esc(label)}</text>`;
  }).join("");

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:100%;">${grid}${bars}</svg>`;
}

function svgPieChart(slices, opts) {
  // slices: [{label, value, color}]
  opts = opts || {};
  const size = opts.size || 160, r = size / 2 - 4, cx = size / 2, cy = size / 2;
  const total = slices.reduce((s, x) => s + x.value, 0);
  if (!total) return `<div style="font-size:12px;color:${SUBTLE};text-align:center;padding:20px 0;">لا توجد بيانات كافية للرسم</div>`;
  let angle = -Math.PI / 2;
  const paths = slices.filter((s) => s.value > 0).map((s) => {
    const frac = s.value / total;
    const start = angle;
    const end = angle + frac * Math.PI * 2;
    angle = end;
    const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end);
    const largeArc = frac > 0.5 ? 1 : 0;
    if (frac >= 0.999) {
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${s.color}"><title>${esc(s.label)}: ${s.value}</title></circle>`;
    }
    return `<path d="M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${largeArc} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z" fill="${s.color}"><title>${esc(s.label)}: ${s.value}</title></path>`;
  }).join("");
  const hole = r * 0.55;
  const legend = slices.map((s) => `
    <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:${INK}">
      <span style="width:9px;height:9px;border-radius:3px;background:${s.color};flex-shrink:0;"></span>
      <span>${esc(s.label)}</span><span style="color:${SUBTLE};margin-right:auto;">${s.value}</span>
    </div>`).join("");
  return `
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" style="flex-shrink:0;">
        ${paths}
        <circle cx="${cx}" cy="${cy}" r="${hole}" fill="#fff" />
        <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="14" font-weight="800" fill="${INK}">${total}</text>
      </svg>
      <div style="display:flex;flex-direction:column;gap:6px;min-width:120px;">${legend}</div>
    </div>`;
}

function statIconCardHtml(label, value, iconHtml, iconBg) {
  return `<div class="stat-card stat-icon-card">
    <div>
      <div class="value">${esc(value)}</div>
      <div class="label">${esc(label)}</div>
    </div>
    <div class="stat-icon-circle" style="background:${iconBg}">${iconHtml}</div>
  </div>`;
}

/* ---- إعدادات ما يظهر في لوحة المعلومات (حسب نوع الجهة) ---- */
const DASH_KINDS = [
  { id: "admin", label: "مديرة النظام" }, { id: "executive", label: "الإدارة العليا" },
  { id: "office", label: "المكتب" }, { id: "dept", label: "القسم" }, { id: "unit", label: "الوحدة" },
];
// اللوحة العامة (مديرة النظام / المكتب / القسم / الوحدة)
const DASH_STD_BLOCKS = [
  { key: "banner", label: "البانر والبحث" }, { key: "stats", label: "بطاقات الأرقام الأربع" },
  { key: "recent", label: "أحدث التقارير" }, { key: "totalPie", label: "رسم إجمالي التقارير" },
  { key: "bars", label: "نسبة الإنجاز حسب الوحدة", not: ["unit"] },
  { key: "indPie", label: "توزيع حالات المؤشرات" }, { key: "goalPie", label: "توزيع مستويات تحقق الأهداف" },
  { key: "indicators", label: "جدول مؤشرات الأداء" }, { key: "goals", label: "جدول الأهداف التشغيلية" },
  { key: "achieve", label: "إحصائية الإنجاز" }, { key: "yearCompare", label: "مقارنة آخر 3 سنوات (المستهدف والمتحقق)" },
  { key: "programs", label: "جدول الأعمال والبرامج" },
  { key: "periodFilter", label: "فلتر نوع الفترة والسنة" },
  { key: "trend", label: "رسم تطور التحقق فترة بعد فترة" },
  { key: "unitsCmp", label: "مقارنة الوحدات", not: ["unit"] },
  { key: "indMatrix", label: "جدول المؤشرات عبر الفترات" },
  { key: "goalMatrix", label: "جدول الأهداف عبر الفترات" },
  { key: "followUp", label: "يحتاج متابعة" },
  { key: "highlights", label: "أبرز ما يُعرض" },
];
const DASH_STD_KINDS = ["office", "dept", "unit"];
// لوحة مديرة النظام: متابعة تشغيل الموقع فقط
const DASH_ADMIN_BLOCKS = [
  { key: "banner", label: "البانر والبحث" }, { key: "periodFilter", label: "فلتر نوع الفترة (لـ«ما رفعت تقرير الفترة الحالية»)" },
  { key: "opsCounts", label: "أعداد التقارير حسب الحالة" }, { key: "opsStuck", label: "تقارير واقفة في المسار" },
  { key: "opsMissing", label: "ما رفعت تقرير الفترة الحالية" }, { key: "opsReturned", label: "تقارير معادة ما انعدّلت" },
  { key: "opsSetup", label: "جهات ناقصة الإعداد" }, { key: "opsActivity", label: "آخر الحركات" },
];
// لوحة الإشراف (الإدارة العليا، وصفحة لوحة المكتب القديمة)
const DASH_EX_BLOCKS = [
  { key: "exStats", label: "بطاقات الأرقام الأربع" }, { key: "exCompletion", label: "نسبة إنجاز التقارير إجمالًا" },
  { key: "exDeptPerf", label: "ملخص أداء الأقسام" }, { key: "exStatus", label: "توزيع حالات التقارير" },
  { key: "exUnitPerf", label: "نسبة الإنجاز حسب الوحدة" }, { key: "exPeriod", label: "مقارنة عدد التقارير حسب الفترة" },
  { key: "achieve", label: "إحصائية الإنجاز" }, { key: "yearCompare", label: "مقارنة آخر 3 سنوات (المستهدف والمتحقق)" },
  { key: "programs", label: "جدول الأعمال والبرامج" },
  { key: "periodFilter", label: "فلتر نوع الفترة والسنة" },
  { key: "exKpis", label: "بطاقات الأرقام مع خط التطور" },
  { key: "exHeat", label: "خريطة الأداء" },
  { key: "exCompare", label: "مقارنة المكاتب/الأقسام/الوحدات" },
  { key: "trend", label: "رسم تطور التحقق فترة بعد فترة" },
  { key: "exStrategic", label: "أهداف الخطة الاستراتيجية" },
  { key: "exStacks", label: "حالات المؤشرات لكل مكتب/قسم" },
  { key: "exBenef", label: "المستفيدون حسب نوع العمل" },
  { key: "exChal", label: "الصعوبات القائمة حسب المستوى" },
  { key: "exSubm", label: "رفع التقارير واعتمادها" },
  { key: "exTopBottom", label: "أفضل 5 وأضعف 5 وحدات" },
  { key: "followUp", label: "يحتاج متابعة" },
  { key: "highlights", label: "أبرز ما يُعرض" },
];
const DASH_EX_KINDS = ["executive", "office"];
function dashConfig() { return S.dashboardConfig || (S.dashboardConfig = dataStore.getDashboardConfig()); }
function dashHidden(kind, key) { const c = dashConfig()[kind]; return !!(c && Array.isArray(c.hidden) && c.hidden.indexOf(key) !== -1); }
function dashBlock(kind, key, html) { return dashHidden(kind, key) ? "" : html; }
function dashRecentGrid(kind, recentHtml, totalHtml) {
  const a = dashBlock(kind, "recent", recentHtml), b = dashBlock(kind, "totalPie", totalHtml);
  if (!a && !b) return "";
  return `<div style="display:grid;grid-template-columns:${a && b ? "2fr 1fr" : "1fr"};gap:14px;margin-bottom:18px;" class="dash-recent-grid">${a}${b}</div>`;
}
function dashExGrid(kind, deptHtml, statusHtml) {
  const a = dashBlock(kind, "exDeptPerf", deptHtml), b = dashBlock(kind, "exStatus", statusHtml);
  if (!a && !b) return "";
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-bottom:18px;">${a}${b}</div>`;
}
function dashPieGrid(kind, indHtml, goalHtml) {
  const a = dashBlock(kind, "indPie", indHtml), b = dashBlock(kind, "goalPie", goalHtml);
  if (!a && !b) return "";
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-bottom:18px;">${a}${b}</div>`;
}

/* =============================== لوحات المعلومات: التقارير عبر الفترات ===============================
   كل اللوحات تقرأ «التقارير اللي فيها بيانات» حسب نوع الفترة (فصلي افتراضيًا) والسنة المختارتين.
   لكل وحدة ولكل فترة (مثلًا الفصل الأول 1448) تقرير واحد: المعتمد أولًا، ثم المكتمل، ثم الأحدث. */
function reportHasContent(r) { return !!r && SECTIONS.some((sc) => sc.id !== "basic" && sectionHasData(r, sc.id)); }
function reportTermInfo(r) {
  const b = (r.sections && r.sections.basic && r.sections.basic.data) || {};
  const pt = reportPeriodType(r), y = reportHijriYearNum(r) || 0;
  const sub = pt === "شهري" ? (b.month || "") : pt === "فصلي" ? (b.term || "") : "";
  const so = pt === "شهري" ? MONTHS.indexOf(sub) : TERM_OPTIONS_BASE.indexOf(sub);
  return { key: pt + "|" + y + "|" + sub, year: y, label: [sub, y ? y + "هـ" : ""].filter(Boolean).join(" ") || "بدون فترة", ord: y * 100 + (so < 0 ? 50 : so) };
}
const DASH_REPORT_RANK = { approved: 3, completed: 2 };
function dashRank(r) { return DASH_REPORT_RANK[r.status] || 1; }
// نوع الفترة الافتراضي: الأكثر استخدامًا في تقارير النطاق (وإلا فصلي)
function dashPeriodFor(units) {
  if (S.ui.dashPeriod) return S.ui.dashPeriod;
  const n = {};
  units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => { if (reportHasContent(r)) { const p = reportPeriodType(r); if (p) n[p] = (n[p] || 0) + 1; } }));
  const best = Object.keys(n).sort((a, b) => n[b] - n[a])[0];
  return n["فصلي"] && n["فصلي"] >= (n[best] || 0) ? "فصلي" : best || "فصلي";
}
function dashSeries(units) {
  const pt = dashPeriodFor(units), yr = S.ui.dashYear || "all";
  const cols = new Map(), byUnit = {};
  units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => {
    if (!reportHasContent(r) || reportPeriodType(r) !== pt) return;
    const t = reportTermInfo(r);
    if (yr !== "all" && String(t.year) !== yr) return;
    cols.set(t.key, t);
    const m = byUnit[u.id] || (byUnit[u.id] = {});
    const cur = m[t.key];
    if (!cur || dashRank(r) > dashRank(cur) || (dashRank(r) === dashRank(cur) && (r.createdAt || 0) > (cur.createdAt || 0))) m[t.key] = r;
  }));
  return { period: pt, year: yr, units, cols: [...cols.values()].sort((a, b) => a.ord - b.ord), byUnit };
}
function dashUnitLatest(series, unitId) {
  const m = series.byUnit[unitId] || {};
  for (let i = series.cols.length - 1; i >= 0; i--) if (m[series.cols[i].key]) return { report: m[series.cols[i].key], col: series.cols[i] };
  return null;
}
// كل التقارير المختارة، أو آخر تقرير لكل وحدة
function dashReports(series, lastOnly) {
  const out = [];
  series.units.forEach((u) => {
    if (lastOnly) { const l = dashUnitLatest(series, u.id); if (l) out.push({ unit: u, report: l.report, col: l.col }); return; }
    series.cols.forEach((c) => { const r = (series.byUnit[u.id] || {})[c.key]; if (r) out.push({ unit: u, report: r, col: c }); });
  });
  return out;
}
function dashIndRows(report) { return (report.sections?.kpi?.data?.indicators || []).filter((r) => r && r.name && String(r.name).trim()); }
function dashIndPct(row) { const st = computeIndicatorStatus(resolveIndicatorRow(row, findIndicatorDef(row.name))); return st.ratio == null || !isFinite(st.ratio) ? null : Math.max(0, Math.round(st.ratio * 100)); }
function dashOpGoals(report) { const out = []; (report.sections?.goals?.data?.goals || []).forEach((g) => (g.operationalGoals || []).forEach((og) => { if (og && og.name) out.push({ ...og, strategicGoal: g.strategicGoal || "" }); })); return out; }
function dashAvg(a) { const v = a.filter((x) => x != null && !isNaN(x)); return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null; }
function dashReportIndAvg(r) { return dashAvg(dashIndRows(r).map((x) => { const p = dashIndPct(x); return p == null ? null : Math.min(100, p); })); }
function dashReportGoalAvg(r) { return dashAvg(dashOpGoals(r).map((g) => numOrNull(g.percentage))); }
function dashPctCell(p) { return p == null ? `<span style="color:${SUBTLE}">—</span>` : `<b style="color:${pctColor(p)}">${p}٪</b>`; }
function dashTrend(vals) {
  const v = vals.filter((x) => x != null);
  if (v.length < 2) return `<span style="color:${SUBTLE}">—</span>`;
  const a = v[v.length - 2], b = v[v.length - 1];
  return b > a ? `<b style="color:${GREEN};white-space:nowrap">▲ تحسن</b>` : b < a ? `<b style="color:${DANGER};white-space:nowrap">▼ تراجع</b>` : `<b style="color:${SUBTLE}">= ثابت</b>`;
}
function dashCard(title, sub, body, extra) {
  return `<div class="card" style="margin-bottom:18px;${extra || ""}"><div class="prs-title" style="font-size:14px;font-weight:800;">${esc(title)}</div>${sub ? `<div class="hint" style="margin:2px 0 12px;">${esc(sub)}</div>` : `<div style="height:10px"></div>`}${body}</div>`;
}

/* ---- فلاتر اللوحة ---- */
function dashFiltersHtml(kind, series) {
  if (dashHidden(kind, "periodFilter")) return "";
  const years = [...new Set(series.units.flatMap((u) => ensureUnitReportsLoaded(u.id).filter(reportHasContent).map((r) => reportHijriYearNum(r)).filter(Boolean)))].sort();
  const pill = (label, on, action, v) => `<button type="button" class="pill-btn ${on ? "pill-primary" : "pill-ghost"}" data-action="${action}" data-v="${esc(v)}">${esc(label)}</button>`;
  // عدد التقارير اللي فيها بيانات لكل نوع فترة — يوضح وين البيانات
  const per = {};
  series.units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => { if (reportHasContent(r)) { const p = reportPeriodType(r); if (p) per[p] = (per[p] || 0) + 1; } }));
  return `<div class="card" style="margin-bottom:18px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;"><span style="font-size:12.5px;font-weight:800;">نوع الفترة</span>${PERIOD_TYPES.map((p) => pill(p + (per[p] ? ` (${per[p]})` : ""), series.period === p, "dash-period", p)).join("")}</div>
    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;"><span style="font-size:12.5px;font-weight:800;">السنة</span>${pill("كل السنوات", series.year === "all", "dash-year", "all")}${years.map((y) => pill(hijriYearLabel(y), series.year === String(y), "dash-year", String(y))).join("")}</div>
    <div class="hint" style="margin:0;">${series.cols.length} ${series.cols.length === 1 ? "فترة" : "فترات"} · التقارير الفاضية لا تُحسب</div>
  </div>`;
}

/* ---- رسم خطي: تطور المؤشرات والأهداف ---- */
function dashLineSvg(labels, a, b) {
  const w = 1000, h = 230, n = labels.length;
  const xs = labels.map((_, k) => (n === 1 ? w / 2 : 70 + k * ((w - 140) / (n - 1))));
  const y = (p) => 175 - Math.min(100, p) * 1.5;
  const path = (arr) => arr.map((p, k) => (p == null ? null : [xs[k], y(p)])).filter(Boolean).map((pt, k) => (k ? "L" : "M") + pt[0].toFixed(0) + " " + pt[1].toFixed(0)).join(" ");
  const dots = (arr, c) => arr.map((p, k) => (p == null ? "" : `<circle cx="${xs[k].toFixed(0)}" cy="${y(p).toFixed(0)}" r="5" fill="${c}"><title>${p}٪</title></circle>`)).join("");
  const grid = [0, 50, 100].map((g) => `<line x1="40" y1="${y(g)}" x2="${w - 30}" y2="${y(g)}" stroke="${BORDER}" stroke-dasharray="3,3"/><text x="8" y="${y(g) + 4}" font-size="12" fill="${SUBTLE}" direction="ltr">${g}%</text>`).join("");
  const lbl = labels.map((l, k) => `<text x="${xs[k].toFixed(0)}" y="${h - 12}" font-size="12.5" fill="${INK}" text-anchor="middle">${esc(l)}</text>`).join("");
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="height:auto;display:block;" role="img" aria-label="تطور متوسط التحقق">${grid}<path d="${path(a)}" fill="none" stroke="${ROSE}" stroke-width="3" stroke-linejoin="round"/><path d="${path(b)}" fill="none" stroke="${GOLD}" stroke-width="3" stroke-dasharray="7 5" stroke-linejoin="round"/>${dots(a, ROSE)}${dots(b, GOLD)}${lbl}</svg>
  <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:11.5px;margin-top:4px;"><span style="display:flex;align-items:center;gap:6px;"><span style="width:14px;height:3px;background:${ROSE}"></span>متوسط تحقق المؤشرات</span><span style="display:flex;align-items:center;gap:6px;"><span style="width:14px;height:3px;background:${GOLD}"></span>متوسط تحقق الأهداف التشغيلية</span></div>`;
}
function dashTrendHtml(kind, series, title) {
  if (dashHidden(kind, "trend")) return "";
  if (!series.cols.length) return dashCard(title || "تطور التحقق فترة بعد فترة", "", emptyHint("لا توجد تقارير فيها بيانات لهذه الفترة."));
  const per = series.cols.map((c) => {
    const rs = series.units.map((u) => (series.byUnit[u.id] || {})[c.key]).filter(Boolean);
    return [dashAvg(rs.map(dashReportIndAvg)), dashAvg(rs.map(dashReportGoalAvg))];
  });
  return dashCard(title || "تطور التحقق فترة بعد فترة", "", dashLineSvg(series.cols.map((c) => c.label), per.map((x) => x[0]), per.map((x) => x[1])));
}

/* ---- جدولا المؤشرات والأهداف عبر الفترات ---- */
function dashIndMatrixHtml(kind, series) {
  if (dashHidden(kind, "indMatrix")) return "";
  const single = series.units.length === 1, rows = {};
  series.cols.forEach((c, ci) => series.units.forEach((u) => {
    const r = (series.byUnit[u.id] || {})[c.key]; if (!r) return;
    dashIndRows(r).forEach((x) => {
      const name = String(x.name).trim();
      const row = rows[name] || (rows[name] = { name, cells: series.cols.map(() => []) });
      row.cells[ci].push({ actual: x.actual, pct: dashIndPct(x) });
    });
  }));
  const list = Object.values(rows).sort((a, b) => a.name.localeCompare(b.name, "ar"));
  if (!list.length) return dashCard("مؤشرات الأداء عبر الفترات", "", emptyHint("لا توجد مؤشرات مُدخلة في التقارير المختارة."));
  const body = list.map((row) => {
    const def = findIndicatorDef(row.name);
    const pcts = row.cells.map((c) => dashAvg(c.map((x) => (x.pct == null ? null : Math.min(100, x.pct)))));
    return `<tr><td style="font-weight:700">${esc(row.name)}</td><td style="text-align:center">${def && def.target !== "" && def.target != null ? esc(def.target) : "—"}</td>${row.cells.map((c, i) => `<td style="text-align:center">${c.length ? (single ? `<div>${esc(c[0].actual !== "" && c[0].actual != null ? c[0].actual : "—")}</div>` : `<div style="font-size:10.5px;color:${SUBTLE}">${c.length} ${c.length === 1 ? "وحدة" : "وحدات"}</div>`) + dashPctCell(pcts[i]) : `<span style="color:${SUBTLE}">—</span>`}</td>`).join("")}<td style="text-align:center">${dashTrend(pcts)}</td></tr>`;
  }).join("");
  return dashCard("مؤشرات الأداء عبر الفترات", single ? "المتحقق ونسبة التحقق في كل فترة · الاتجاه بين آخر فترتين" : "متوسط نسبة تحقق الوحدات في كل فترة · الاتجاه بين آخر فترتين",
    `<div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:640px;"><thead><tr style="background:${GOLD_BG}"><th>المؤشر</th><th style="text-align:center">المستهدف</th>${series.cols.map((c) => `<th style="text-align:center;white-space:nowrap">${esc(c.label)}</th>`).join("")}<th style="text-align:center">الاتجاه</th></tr></thead><tbody>${body}</tbody></table></div>`);
}
function dashGoalMatrixHtml(kind, series) {
  if (dashHidden(kind, "goalMatrix")) return "";
  const rows = {};
  series.cols.forEach((c, ci) => series.units.forEach((u) => {
    const r = (series.byUnit[u.id] || {})[c.key]; if (!r) return;
    dashOpGoals(r).forEach((g) => {
      const k = g.name + "|" + g.strategicGoal;
      const row = rows[k] || (rows[k] = { name: g.name, parent: g.strategicGoal, cells: series.cols.map(() => []) });
      row.cells[ci].push(numOrNull(g.percentage));
    });
  }));
  const list = Object.values(rows);
  if (!list.length) return dashCard("الأهداف التشغيلية عبر الفترات", "", emptyHint("لا توجد أهداف مُدخلة في التقارير المختارة."));
  const body = list.map((row) => {
    const pcts = row.cells.map((c) => dashAvg(c));
    return `<tr><td style="font-weight:700">${esc(row.name)}</td><td style="color:${SUBTLE}">${esc(row.parent || "—")}</td>${pcts.map((p) => `<td style="text-align:center">${dashPctCell(p)}</td>`).join("")}<td style="text-align:center">${dashTrend(pcts)}</td></tr>`;
  }).join("");
  return dashCard("الأهداف التشغيلية عبر الفترات", "", `<div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:640px;"><thead><tr style="background:${GREEN_BG}"><th style="color:${ROSE}">الهدف التشغيلي</th><th style="color:${ROSE}">الهدف الاستراتيجي</th>${series.cols.map((c) => `<th style="text-align:center;color:${ROSE};white-space:nowrap">${esc(c.label)}</th>`).join("")}<th style="text-align:center;color:${ROSE}">الاتجاه</th></tr></thead><tbody>${body}</tbody></table></div>`);
}

/* ---- الرسمان الدائريان: كل التقارير المختارة أو آخر فترة ---- */
function dashPieScopeHtml() {
  const last = S.ui.dashPieScope === "last";
  return `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">${[["all", "كل التقارير المختارة"], ["last", "آخر فترة"]].map(([v, l]) => `<button type="button" class="pill-btn ${(v === "last") === last ? "pill-primary" : "pill-ghost"}" style="padding:4px 12px;font-size:11.5px;" data-action="dash-pie-scope" data-v="${v}">${l}</button>`).join("")}</div>`;
}
function dashPieData(series) {
  const items = dashReports(series, S.ui.dashPieScope === "last");
  const ind = [], goals = [];
  items.forEach(({ unit, report }) => { dashIndRows(report).forEach((x) => ind.push({ ...x, unitName: unit.name })); dashOpGoals(report).forEach((g) => goals.push({ ...g, unitName: unit.name })); });
  return { ind, goals };
}

/* ---- يحتاج متابعة / أبرز ما يُعرض ---- */
const DASH_HIGH_SEVERITY = ["مرتفع", "حرج"], DASH_HIGH_PRIORITY = ["عاجلة", "عالية"];
function dashFollowUpHtml(kind, series) {
  if (dashHidden(kind, "followUp")) return "";
  const multi = series.units.length > 1, rows = [];
  series.units.forEach((u) => {
    const l = dashUnitLatest(series, u.id); if (!l) return;
    const where = (multi ? u.name + " · " : "") + l.col.label;
    (l.report.sections?.challenges?.data?.challenges || []).forEach((c) => { if (c && c.name && c.stillOngoing !== "لا" && DASH_HIGH_SEVERITY.includes(c.severity)) rows.push({ text: c.name, kind: "صعوبة قائمة", level: c.severity, hi: c.severity === "حرج", where }); });
    (l.report.sections?.improvement?.data?.opportunities || []).forEach((o) => { if (o && o.name && DASH_HIGH_PRIORITY.includes(o.priority)) rows.push({ text: o.name, kind: "فرصة تحسين", level: o.priority, hi: o.priority === "عاجلة", where }); });
  });
  rows.sort((a, b) => b.hi - a.hi);
  return dashCard("يحتاج متابعة", "الصعوبات القائمة (مرتفع/حرج) وفرص التحسين (عاجلة/عالية) من آخر تقرير لكل وحدة",
    rows.length ? `<div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GOLD_BG}"><th>البند</th><th style="text-align:center">النوع</th><th style="text-align:center">المستوى</th><th>${multi ? "الوحدة · الفترة" : "الفترة"}</th></tr></thead><tbody>${rows.slice(0, 12).map((r) => `<tr><td style="font-weight:700">${esc(r.text)}</td><td style="text-align:center;color:${SUBTLE}">${r.kind}</td><td style="text-align:center">${badgeHtml(r.level, r.hi ? DANGER : "#7a4d16", r.hi ? DANGER_BG : GOLD_BG)}</td><td style="color:${SUBTLE};white-space:nowrap">${esc(r.where)}</td></tr>`).join("")}</tbody></table></div>` : emptyHint("لا يوجد ما يحتاج متابعة عاجلة."));
}
function dashHighlightsHtml(kind, series) {
  if (dashHidden(kind, "highlights")) return "";
  const multi = series.units.length > 1, out = [];
  dashReports(series, false).filter((x) => x.report.status === "approved" || x.report.status === "completed").forEach(({ unit, report, col }) => {
    const where = (multi ? unit.name + " · " : "") + col.label, s = report.sections || {};
    const add = (tag, text, key) => { if (String(text || "").trim()) out.push({ tag, text: String(text).trim(), where, cur: key ? isItemCurated(unit, key) : false, at: report.createdAt || 0 }); };
    add("نتيجة", s.analysis?.data?.positiveResult);
    (s.initiatives?.data?.initiatives || []).forEach((x) => add("مبادرة", x && x.name));
    (s.impact?.data?.impactStories || []).forEach((x) => add("قصة نجاح", x && x.title));
    (s.recommendations?.data?.recommendations || []).forEach((x) => add("توصية", x && x.text, x && curationKey("recommendation", report.id, x.id)));
  });
  out.sort((a, b) => (b.cur - a.cur) || (b.at - a.at));
  const seen = new Set();
  const uniq = out.filter((h) => { const k = h.tag + "|" + h.text + "|" + (multi ? h.where.split(" · ")[0] : ""); if (seen.has(k)) return false; seen.add(k); return true; });
  const tagColor = { "نتيجة": [GREEN, GREEN_BG], "مبادرة": [ROSE, DANGER_BG], "قصة نجاح": ["#7a4d16", GOLD_BG], "توصية": [BLUE, BLUE_BG] };
  return dashCard("أبرز ما يُعرض", "من التقارير المعتمدة والمكتملة فقط · المعتمد من القسم أو المكتب أولًا",
    uniq.length ? uniq.slice(0, 8).map((h) => `<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-top:1px solid ${BORDER};">${badgeHtml(h.tag, tagColor[h.tag][0], tagColor[h.tag][1])}<div style="flex:1;min-width:0;"><div style="font-size:12.5px;line-height:1.7;">${esc(h.text)}</div><div style="font-size:11px;color:${SUBTLE};">${esc(h.where)}${h.cur ? " · معتمد" : ""}</div></div></div>`).join("") : emptyHint("لا توجد تقارير معتمدة في الفترة المختارة بعد."));
}

/* ---- مقارنة الوحدات (القسم/المكتب/المستوى) ---- */
function dashUnitStats(series, u) {
  const l = dashUnitLatest(series, u.id), r = l && l.report;
  const progs = r ? (r.sections?.programs?.data?.programs || []).filter((p) => p && p.name) : [];
  const done = progs.filter((p) => p.executionStatus === "مكتمل").length;
  const openCh = r ? (r.sections?.challenges?.data?.challenges || []).filter((c) => c && c.name && c.stillOngoing !== "لا").length : 0;
  return { unit: u, latest: l, ind: r ? dashReportIndAvg(r) : null, goal: r ? dashReportGoalAvg(r) : null, works: progs.length ? Math.round(done / progs.length * 100) : null, openCh };
}
function dashUnitsCmpHtml(kind, series) {
  if (dashHidden(kind, "unitsCmp") || series.units.length < 2) return "";
  const rows = series.units.map((u) => dashUnitStats(series, u)).sort((a, b) => (a.ind == null ? 999 : a.ind) - (b.ind == null ? 999 : b.ind));
  return dashCard("مقارنة الوحدات", "آخر تقرير لكل وحدة في الفترة المختارة · مرتّبة من الأقل تحققًا",
    `<div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:620px;"><thead><tr style="background:${GRAY_BG}"><th>الوحدة</th><th style="text-align:center">الفترة</th><th style="text-align:center">تحقق المؤشرات</th><th style="text-align:center">تحقق الأهداف</th><th style="text-align:center">إنجاز الأعمال</th><th style="text-align:center">صعوبات قائمة</th><th style="text-align:center">حالة التقرير</th></tr></thead><tbody>${rows.map((x) => {
      const m = x.latest ? reportStatusMeta(x.latest.report.status) : null;
      return `<tr><td style="font-weight:700">${esc(x.unit.name)}</td><td style="text-align:center;color:${SUBTLE};white-space:nowrap">${x.latest ? esc(x.latest.col.label) : "—"}</td><td style="text-align:center">${dashPctCell(x.ind)}</td><td style="text-align:center">${dashPctCell(x.goal)}</td><td style="text-align:center">${x.works == null ? "—" : x.works + "٪"}</td><td style="text-align:center">${x.latest ? x.openCh : "—"}</td><td style="text-align:center">${m ? badgeHtml(m.label, m.color, m.bg) : `<span style="color:${SUBTLE}">لم يرفع</span>`}</td></tr>`;
    }).join("")}</tbody></table></div>`);
}
// الأجزاء المشتركة الجديدة بالترتيب (لوحة الوحدة/القسم/المكتب)
function dashPeriodBlocksHtml(kind, series) {
  return dashTrendHtml(kind, series) + dashUnitsCmpHtml(kind, series) + dashIndMatrixHtml(kind, series) + dashGoalMatrixHtml(kind, series)
    + `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:14px;">${dashFollowUpHtml(kind, series)}${dashHighlightsHtml(kind, series)}</div>`;
}

/* =============================== لوحة الإدارة العليا: رسومات + تفصيل بالضغط ===============================
   S.ui.exDrill = { office, dept } — الجمعية ← مكتب ← قسم. */
// التفصيل يمشي على «الهيكل المرن»: الجمعية ← مستوى ← مستوى… (مكتب، مساعدة، قسم…) ← الوحدات.
// S.ui.exDrill.path = معرّفات المستويات من الأعلى. وحدة غير موجودة في الهيكل تظهر تحت «خارج الهيكل».
function exScope(units) {
  const path = ((S.ui.exDrill && S.ui.exDrill.path) || []).filter((id) => olFind(id));
  const cur = path.length ? olFind(path[path.length - 1]) : null;
  const under = (id) => { const ids = olScopeUnitIds(id); return units.filter((u) => ids.has(u.id)); };
  const scopeUnits = cur ? under(cur.id) : units;
  const kids = olChildren(cur ? cur.id : "").map((l) => ({ name: l.name, type: l.type || "", levelId: l.id, list: under(l.id), leaf: l.linkKind === "unit" && !olChildren(l.id).length })).filter((c) => c.list.length);
  const covered = new Set(kids.flatMap((k) => k.list.map((u) => u.id)));
  const rest = scopeUnits.filter((u) => !covered.has(u.id));
  const children = kids.slice();
  if (rest.length) { if (cur) rest.forEach((u) => children.push({ name: u.name, levelId: null, list: [u], leaf: true })); else children.push({ name: "خارج الهيكل", levelId: null, list: rest, leaf: true }); }
  const types = [...new Set(kids.map((k) => k.type).filter(Boolean))];
  const PLURAL = { "وحدة": "الوحدات", "مركز": "المراكز", "قسم": "الأقسام", "مكتب": "المكاتب", "مساعدة": "المساعدات", "مديرة": "المديرات" };
  const label = !kids.length ? ["الوحدات", "وحدة"] : types.length === 1 ? [PLURAL[types[0]] || types[0], types[0]] : ["المستويات", "مستوى"];
  return { path, cur, scopeUnits, children, label };
}
function exDrillBtn(path, text, style) { return `<button type="button" data-action="ex-drill" data-path="${esc(path.join(","))}" style="background:none;border:none;cursor:pointer;font-family:inherit;${style}">${text}</button>`; }
function exUnitParent(u) { const l = olActive().find((x) => x.linkKind === "unit" && x.linkId === u.id); const p = l && olFind(l.parentId); if (p) return p.name; const d = (S.departments || []).find((x) => x.id === u.departmentId); return d ? d.name : ""; }
function exBlocksHtml(kind, units) {
  const sc = exScope(units);
  const series = dashSeries(sc.scopeUnits);
  const latestPct = (u, f) => { const l = dashUnitLatest(series, u.id); return l ? f(l.report) : null; };
  const crumbs = [exDrillBtn([], "الجمعية", `padding:6px 2px;font-size:13px;color:${sc.path.length ? ROSE : INK};font-weight:${sc.path.length ? 600 : 800};`)]
    .concat(sc.path.map((id, k) => exDrillBtn(sc.path.slice(0, k + 1), esc(olFind(id).name), `padding:6px 2px;font-size:13px;color:${k < sc.path.length - 1 ? ROSE : INK};font-weight:${k < sc.path.length - 1 ? 600 : 800};`)));
  const childLabel = sc.label;
  let html = `<nav aria-label="مسار التفصيل" class="card" style="margin-bottom:18px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;padding:10px 16px;"><span style="font-size:12px;color:${SUBTLE};">تعرضين:</span>${crumbs.join(`<span style="color:${SUBTLE}">←</span>`)}<span class="hint" style="margin:0 8px 0 0;">التفصيل حسب الهيكل المرن — اضغطي على أي اسم</span></nav>`;
  html += dashFiltersHtml(kind, series);

  // بطاقات بخط تطور
  if (!dashHidden(kind, "exKpis")) {
    const perCol = series.cols.map((c) => { const rs = series.units.map((u) => (series.byUnit[u.id] || {})[c.key]).filter(Boolean); return { ind: dashAvg(rs.map(dashReportIndAvg)), goal: dashAvg(rs.map(dashReportGoalAvg)), n: rs.length }; });
    const spark = (arr, color) => { const v = arr.map((x) => (x == null ? null : x)); const pts = v.map((p, k) => (p == null ? null : [v.length === 1 ? 100 : 6 + k * (188 / (v.length - 1)), 36 - Math.min(100, p) * 0.32])).filter(Boolean); return pts.length ? `<svg viewBox="0 0 200 40" width="100%" height="40" aria-hidden="true"><path d="${pts.map((p, k) => (k ? "L" : "M") + p[0].toFixed(0) + " " + p[1].toFixed(0)).join(" ")}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/></svg>` : ""; };
    const delta = (arr) => { const v = arr.filter((x) => x != null); if (v.length < 2) return ""; const d = v[v.length - 1] - v[v.length - 2]; return `<span style="font-size:12px;font-weight:800;color:${d >= 0 ? GREEN : DANGER}">${d >= 0 ? "▲" : "▼"} ${Math.abs(d)}٪</span>`; };
    const lastV = (arr) => { const v = arr.filter((x) => x != null); return v.length ? v[v.length - 1] : null; };
    const progs = collectProgramsForUnits(series.units, series.year === "all" ? null : Number(series.year));
    const done = progs.filter((x) => x.p.executionStatus === "مكتمل").length;
    const ben = progs.reduce((s, x) => s + (numOrNull(x.p.actualBeneficiaries) || 0), 0);
    const lastCol = series.cols[series.cols.length - 1];
    const appr = lastCol ? series.units.filter((u) => { const r = (series.byUnit[u.id] || {})[lastCol.key]; return r && r.status === "approved"; }).length : 0;
    const card = (label, value, color, sub, sp) => `<div class="card" style="padding:14px 16px 8px;"><div style="font-size:12px;color:${SUBTLE};">${label}</div><div style="display:flex;align-items:baseline;gap:8px;margin-top:2px;"><span style="font-size:26px;font-weight:900;color:${color};">${value}</span>${sub}</div>${sp || ""}</div>`;
    const indA = perCol.map((x) => x.ind), goalA = perCol.map((x) => x.goal);
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:12px;margin-bottom:18px;">
      ${card("متوسط تحقق المؤشرات", lastV(indA) == null ? "—" : lastV(indA) + "٪", ROSE, delta(indA), spark(indA, ROSE))}
      ${card("متوسط تحقق الأهداف", lastV(goalA) == null ? "—" : lastV(goalA) + "٪", "#a5581a", delta(goalA), spark(goalA, "#a5581a"))}
      ${card("إنجاز الأعمال والبرامج", progs.length ? Math.round(done / progs.length * 100) + "٪" : "—", BLUE, `<span style="font-size:11.5px;color:${SUBTLE}">${done} من ${progs.length}</span>`)}
      ${card("المستفيدون", fmtNum(ben), "#8B4A73", "")}
      ${card("تقارير معتمدة (آخر فترة)", series.units.length ? Math.round(appr / series.units.length * 100) + "٪" : "—", GREEN, `<span style="font-size:11.5px;color:${SUBTLE}">${appr} من ${series.units.length}</span>`)}
    </div>`;
  }
  // خريطة الأداء: أبناء المستوى الحالي، وتحت كل واحد أبناؤه ومربعات وحداته
  if (!dashHidden(kind, "exHeat")) {
    const tileBg = (p) => (p == null ? "#cfc6ca" : pctColor(p));
    const tiles = (list) => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(74px,100%),1fr));gap:6px;margin-top:6px;">${list.map((u) => { const p = latestPct(u, dashReportIndAvg); return `<div title="${esc(u.name)}" style="border-radius:8px;padding:6px;color:#fff;text-align:center;min-height:50px;display:flex;flex-direction:column;justify-content:center;background:${tileBg(p)};"><div style="font-size:10.5px;line-height:1.4;">${esc(u.name)}</div><div style="font-size:14px;font-weight:800;">${p == null ? "—" : p + "٪"}</div></div>`; }).join("")}</div>`;
    const pctOf = (list) => { const p = dashAvg(list.map((u) => latestPct(u, dashReportIndAvg))); return p == null ? "—" : p + "٪"; };
    const box = sc.children.map((c) => {
      const head = c.leaf || !c.levelId ? `<div style="padding:4px 2px;font-size:13.5px;font-weight:800;color:${INK};">${esc(c.name)} · ${pctOf(c.list)}</div>` : exDrillBtn(sc.path.concat(c.levelId), `${esc(c.name)} · ${pctOf(c.list)}`, `padding:4px 2px;font-size:13.5px;font-weight:800;color:${ROSE};text-align:right;`);
      const subs = c.levelId && !c.leaf ? olChildren(c.levelId).map((l) => ({ l, list: c.list.filter((u) => olScopeUnitIds(l.id).has(u.id)) })).filter((x) => x.list.length) : [];
      const coveredSub = new Set(subs.flatMap((x) => x.list.map((u) => u.id)));
      const loose = c.list.filter((u) => !coveredSub.has(u.id));
      const inner = subs.filter((x) => !(x.l.linkKind === "unit" && !olChildren(x.l.id).length)).map((x) => `<div style="flex:1 1 160px;min-width:0;background:#faf6f4;border-radius:10px;padding:8px;">${exDrillBtn(sc.path.concat(c.levelId, x.l.id), `${esc(x.l.name)} · ${pctOf(x.list)}`, `padding:2px;font-size:12px;font-weight:800;color:${INK};text-align:right;`)}${tiles(x.list)}</div>`).join("");
      const unitSubs = subs.filter((x) => x.l.linkKind === "unit" && !olChildren(x.l.id).length).flatMap((x) => x.list);
      const direct = loose.concat(unitSubs);
      return `<div style="flex:1 1 360px;min-width:0;border:1px solid ${BORDER};border-radius:14px;padding:10px;">${head}${inner ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">${inner}</div>` : ""}${direct.length ? tiles(direct) : ""}</div>`;
    }).join("");
    const legend = [[GREEN, "100٪+"], [GOLD, "90–99"], ["#c9863a", "70–89"], [DANGER, "أقل من 70"], ["#cfc6ca", "بلا بيانات"]].map(([c, l]) => `<span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:${c}"></span>${l}</span>`).join("");
    html += dashCard("خريطة الأداء", "كل مربع وحدة ملوّنة بنسبة تحقق مؤشراتها في آخر تقرير · اضغطي على أي اسم للتفصيل",
      `<div style="display:flex;gap:10px;font-size:11.5px;flex-wrap:wrap;margin-bottom:10px;">${legend}</div><div style="display:flex;gap:12px;flex-wrap:wrap;">${box || emptyHint("لا توجد وحدات.")}</div>`);
  }
  // مقارنة الأبناء + التطور
  const childStats = sc.children.map((c) => ({ ...c,
    ind: dashAvg(c.list.map((u) => latestPct(u, dashReportIndAvg))), goal: dashAvg(c.list.map((u) => latestPct(u, dashReportGoalAvg))) }));
  const cmp = dashHidden(kind, "exCompare") ? "" : dashCard("مقارنة " + childLabel[0], "آخر تقرير لكل وحدة · مرتّبة من الأضعف · اضغطي على الاسم للتفصيل",
    `<div style="display:flex;gap:14px;font-size:11.5px;margin-bottom:8px;"><span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:${ROSE}"></span>تحقق المؤشرات</span><span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#D9A066"></span>تحقق الأهداف</span></div>` +
    childStats.slice().sort((a, b) => (a.ind == null ? 999 : a.ind) - (b.ind == null ? 999 : b.ind)).map((c) => {
      const bar = (p, col) => `<div style="display:flex;align-items:center;gap:6px;"><div style="flex:1;height:10px;background:${GRAY_BG};border-radius:6px;"><div style="height:10px;border-radius:6px;background:${col};width:${p == null ? 0 : Math.min(100, p)}%"></div></div><span style="font-size:11.5px;width:38px;font-weight:800;">${p == null ? "—" : p + "٪"}</span></div>`;
      const nameEl = c.leaf || !c.levelId ? `<span style="width:150px;flex-shrink:0;font-size:12.5px;font-weight:700;">${esc(c.name)}</span>` : exDrillBtn(sc.path.concat(c.levelId), esc(c.name), `width:150px;flex-shrink:0;text-align:right;padding:4px 0;min-height:36px;font-size:12.5px;font-weight:700;color:${ROSE};`);
      return `<div style="display:flex;align-items:center;gap:10px;padding:5px 0;">${nameEl}<div style="flex:1;display:flex;flex-direction:column;gap:4px;">${bar(c.ind, ROSE)}${bar(c.goal, "#D9A066")}</div></div>`;
    }).join(""));
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:14px;">${cmp}${dashTrendHtml(kind, series, "التطور فترة بعد فترة — " + (sc.cur ? sc.cur.name : "الجمعية"))}</div>`;
  // أهداف الخطة الاستراتيجية + حالات المؤشرات
  const latestReports = dashReports(series, true);
  let strat = "";
  if (!dashHidden(kind, "exStrategic")) {
    const m = {};
    latestReports.forEach(({ report }) => dashOpGoals(report).forEach((g) => { const k = g.strategicGoal || "بدون هدف استراتيجي"; (m[k] = m[k] || []).push(numOrNull(g.percentage)); }));
    const list = Object.entries(m).map(([k, v]) => [k, dashAvg(v)]).sort((a, b) => (b[1] || 0) - (a[1] || 0));
    strat = dashCard("أهداف الخطة الاستراتيجية", "متوسط تحقق الأهداف التشغيلية التابعة لكل هدف", list.length ? list.map(([k, p]) => `<div style="padding:6px 0;"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span style="font-weight:700">${esc(k)}</span>${dashPctCell(p)}</div><div style="height:12px;background:${GRAY_BG};border-radius:6px;"><div style="height:12px;border-radius:6px;width:${Math.min(100, p || 0)}%;background:${pctColor(p)}"></div></div></div>`).join("") : emptyHint("لا توجد أهداف مُدخلة."));
  }
  let stacks = "";
  if (!dashHidden(kind, "exStacks")) {
    const cols = [["achieved", "متحقق", GREEN], ["close", "قريب", GOLD], ["needsAction", "يحتاج تدخلًا", "#c9863a"], ["struggling", "متعثر", DANGER]];
    const rows = childStats.map((c) => {
      const k = { achieved: 0, close: 0, needsAction: 0, struggling: 0 };
      c.list.forEach((x) => { const l = dashUnitLatest(series, x.id); if (l) dashIndRows(l.report).forEach((row) => { const st = computeIndicatorStatus(resolveIndicatorRow(row, findIndicatorDef(row.name))); if (k[st.key] != null) k[st.key]++; }); });
      const tot = cols.reduce((s, [key]) => s + k[key], 0);
      return `<div style="display:flex;align-items:center;gap:10px;padding:5px 0;"><span style="width:140px;flex-shrink:0;font-size:12px;">${esc(c.name)}</span>${tot ? `<div style="flex:1;display:flex;height:18px;border-radius:6px;overflow:hidden;">${cols.map(([key, l, col]) => (k[key] ? `<div title="${l}: ${k[key]}" style="width:${(k[key] / tot * 100).toFixed(1)}%;background:${col}"></div>` : "")).join("")}</div><b style="font-size:11.5px;width:26px;">${tot}</b>` : `<span class="hint" style="margin:0">لا مؤشرات</span>`}</div>`;
    }).join("");
    stacks = dashCard("حالات المؤشرات لكل " + childLabel[1], "", `<div style="display:flex;gap:10px;font-size:11.5px;flex-wrap:wrap;margin-bottom:8px;">${cols.map(([, l, c]) => `<span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:${c}"></span>${l}</span>`).join("")}</div>${rows}`);
  }
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:14px;">${strat}${stacks}</div>`;
  // المستفيدون / التحديات / رفع التقارير
  let benH = "", chH = "", subH = "";
  if (!dashHidden(kind, "exBenef")) {
    const progs = collectProgramsForUnits(series.units, series.year === "all" ? null : Number(series.year));
    const m = {}; progs.forEach(({ p }) => { const k = p.workType || "غير محدد"; m[k] = (m[k] || 0) + (numOrNull(p.actualBeneficiaries) || 0); });
    const list = Object.entries(m).filter((x) => x[1] > 0).sort((a, b) => b[1] - a[1]).slice(0, 7);
    const max = Math.max(1, ...list.map((x) => x[1]));
    benH = dashCard("المستفيدون حسب نوع العمل", "", list.length ? `<div style="display:flex;align-items:flex-end;gap:10px;height:190px;padding-top:10px;">${list.map(([k, v]) => `<div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:4px;"><b style="font-size:11.5px;">${fmtNum(v)}</b><div style="width:100%;max-width:48px;height:${Math.max(4, Math.round(v / max * 130))}px;background:#8B4A73;border-radius:6px 6px 0 0;"></div><span style="font-size:10.5px;color:${SUBTLE};text-align:center;line-height:1.3;">${esc(k)}</span></div>`).join("")}</div>` : emptyHint("لا توجد أعداد مستفيدين مُدخلة."));
  }
  if (!dashHidden(kind, "exChal")) {
    const sev = [["حرج", DANGER], ["مرتفع", "#c9863a"], ["متوسط", "#E8C7A0"], ["منخفض", "#efe3d6"]];
    const rows = childStats.map((c) => {
      const k = {}; sev.forEach(([s]) => (k[s] = 0));
      c.list.forEach((x) => { const l = dashUnitLatest(series, x.id); if (l) (l.report.sections?.challenges?.data?.challenges || []).forEach((ch) => { if (ch && ch.name && ch.stillOngoing !== "لا" && k[ch.severity] != null) k[ch.severity]++; }); });
      const tot = sev.reduce((s, [x]) => s + k[x], 0);
      return `<div style="display:flex;align-items:center;gap:10px;padding:5px 0;"><span style="width:140px;flex-shrink:0;font-size:12px;">${esc(c.name)}</span><div style="flex:1;display:flex;gap:2px;height:18px;">${sev.map(([s, col]) => (k[s] ? `<div title="${s}: ${k[s]}" style="width:${k[s] * 22}px;border-radius:4px;background:${col}"></div>` : "")).join("")}</div><b style="font-size:12px;width:22px;">${tot}</b></div>`;
    }).join("");
    chH = dashCard("الصعوبات القائمة حسب المستوى", "", `<div style="display:flex;gap:10px;font-size:11.5px;flex-wrap:wrap;margin-bottom:8px;">${sev.map(([s, c]) => `<span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:${c}"></span>${s}</span>`).join("")}</div>${rows}`);
  }
  if (!dashHidden(kind, "exSubm")) {
    const lastCol = series.cols[series.cols.length - 1];
    subH = dashCard("رفع التقارير واعتمادها", lastCol ? "آخر فترة: " + lastCol.label : "", lastCol ? childStats.map((c) => {
      let a = 0, s = 0; c.list.forEach((x) => { const r = (series.byUnit[x.id] || {})[lastCol.key]; if (r) { if (r.status === "approved") a++; else s++; } });
      const t = c.list.length;
      return `<div style="padding:6px 0;"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;gap:8px;"><span style="font-weight:700">${esc(c.name)}</span><span style="color:${SUBTLE};font-size:11.5px;">${a} معتمد · ${s} مرفوع · ${t - a - s} لم يرفع</span></div><div style="display:flex;height:12px;background:${GRAY_BG};border-radius:6px;overflow:hidden;"><div style="width:${a / t * 100}%;background:${GREEN}"></div><div style="width:${s / t * 100}%;background:#9CC9B0"></div></div></div>`;
    }).join("") + `<div style="display:flex;gap:12px;font-size:11.5px;margin-top:8px;"><span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:${GREEN}"></span>معتمد</span><span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#9CC9B0"></span>مرفوع ولم يُعتمد</span></div>` : emptyHint("لا توجد تقارير في الفترة المختارة."));
  }
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:14px;">${benH}${chH}${subH}</div>`;
  // أفضل وأضعف 5
  if (!dashHidden(kind, "exTopBottom")) {
    const ranked = sc.scopeUnits.map((u) => ({ u, p: latestPct(u, dashReportIndAvg) })).filter((r) => r.p != null).sort((a, b) => b.p - a.p);
    const list = (arr, col) => arr.map((r, i) => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid ${BORDER};font-size:12.5px;gap:8px;"><span><b>${i + 1}.</b> ${esc(r.u.name)} <span style="color:${SUBTLE}">· ${esc(exUnitParent(r.u))}</span></span><b style="color:${col}">${r.p}٪</b></div>`).join("") || emptyHint("لا توجد بيانات.");
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:14px;">${dashCard("أفضل 5 وحدات", "تحقق المؤشرات في آخر تقرير", list(ranked.slice(0, 5), GREEN))}${dashCard("أضعف 5 وحدات", "تحقق المؤشرات في آخر تقرير", list(ranked.slice().reverse().slice(0, 5), DANGER))}</div>`;
  }
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:14px;">${dashFollowUpHtml(kind, series)}${dashHighlightsHtml(kind, series)}</div>`;
  return html;
}

/* =============================== لوحة مديرة النظام: متابعة التشغيل =============================== */
const OPS_STUCK_DAYS = 5;
function opsDays(ts) { return ts ? Math.floor((Date.now() - ts) / 86400000) : 0; }
function opsBlocksHtml(kind, units) {
  const flat = [];
  units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => flat.push({ unit: u, report: r })));
  let html = "";
  if (!dashHidden(kind, "opsCounts")) {
    const c = (st) => flat.filter((x) => st.includes(x.report.status)).length;
    const tiles = [["مسودة", c(["draft"]), BLUE], ["في المسار", c(["custom_pending"]), GOLD], ["معاد", c(["returned", "needs_completion"]), DANGER], ["مكتمل", c(["completed"]), "#5FA67F"], ["معتمد", c(["approved"]), GREEN]];
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(150px,100%),1fr));gap:12px;margin-bottom:18px;">${tiles.map(([l, n, col]) => `<div class="card" style="padding:14px 16px;border-top:4px solid ${col};"><div style="font-size:12px;color:${SUBTLE};">${l}</div><div style="font-size:26px;font-weight:900;margin-top:2px;">${n}</div></div>`).join("")}</div>`;
  }
  let stuckH = "", missingH = "", returnedH = "", setupH = "", actH = "";
  if (!dashHidden(kind, "opsStuck")) {
    const rows = flat.filter((x) => x.report.status === "custom_pending").map((x) => {
      const log = x.report.customLog || []; const last = log[log.length - 1];
      const ref = apRefOf(x.report.customStageId); const p = ref && apPathById(ref.pathId); const st = p && apStagesNamed(p, x.unit).find((s) => s.id === ref.stageId);
      const lvl = st && String(st.approver || "").indexOf(AP_TREE_UP) === 0 ? apStageTreeLevel(st, x.unit) : null;
      return { ...x, days: opsDays(last ? last.at : x.report.updatedAt), stage: st ? st.name : "—", who: lvl ? lvl.name : st ? apApproverLabel(st.approver) : "—" };
    }).filter((x) => x.days >= OPS_STUCK_DAYS).sort((a, b) => b.days - a.days);
    stuckH = dashCard("تقارير واقفة في المسار", `أكثر من ${OPS_STUCK_DAYS} أيام في نفس المرحلة`, rows.length ? `<div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GRAY_BG}"><th>الوحدة</th><th>التقرير</th><th>المرحلة</th><th>صاحب المرحلة</th><th style="text-align:center">منذ</th></tr></thead><tbody>${rows.map((x) => `<tr><td style="font-weight:700">${esc(x.unit.name)}</td><td>${esc(x.report.label || "")}</td><td>${esc(x.stage)}</td><td style="color:${SUBTLE}">${esc(x.who)}</td><td style="text-align:center;font-weight:800;color:${x.days >= 10 ? DANGER : "#c9863a"}">${x.days} يوم</td></tr>`).join("")}</tbody></table></div>` : emptyHint("لا توجد تقارير واقفة."));
  }
  if (!dashHidden(kind, "opsMissing")) {
    const series = dashSeries(units);
    const lastCol = series.cols[series.cols.length - 1];
    const miss = lastCol ? units.filter((u) => !(series.byUnit[u.id] || {})[lastCol.key]) : [];
    missingH = dashCard("ما رفعت تقرير الفترة الحالية", lastCol ? `«${series.period}» · ${lastCol.label}` : "", lastCol ? (miss.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px;">${miss.map((u) => badgeHtml(u.name, "#7a4d16", GOLD_BG)).join("")}</div>` : emptyHint("كل الوحدات رفعت تقريرها.")) : emptyHint("لا توجد تقارير بعد."));
  }
  if (!dashHidden(kind, "opsReturned")) {
    const rows = flat.filter((x) => (x.report.status === "returned" || x.report.status === "needs_completion") && x.report.internalReturnedAt && (x.report.updatedAt || 0) - x.report.internalReturnedAt < 60000)
      .map((x) => ({ ...x, days: opsDays(x.report.internalReturnedAt) })).sort((a, b) => b.days - a.days);
    returnedH = dashCard("تقارير معادة ما انعدّلت", "", rows.length ? rows.map((x) => `<div style="display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid ${BORDER};font-size:12.5px;flex-wrap:wrap;"><span><b>${esc(x.unit.name)}</b> — ${esc(x.report.label || "")} · ${esc(reportStatusMeta(x.report.status).label)}</span><span style="color:${DANGER};font-weight:700">منذ ${x.days} يوم</span></div>`).join("") : emptyHint("لا توجد تقارير معادة متروكة."));
  }
  if (!dashHidden(kind, "opsSetup")) {
    const issues = [];
    units.forEach((u) => {
      if (!baseRoleIdsOf(u).length && !unitActivePersons(u.id).length) issues.push([u.name, "بدون دور ولا أشخاص — يطلع لها «لم تُحدَّد صلاحيات»", "إعطاء دور"]);
      if (!u.departmentId) issues.push([u.name, "غير مربوطة بقسم", "ربطها في الهيكل"]);
      const ap = autoPathObj();
      if (!ap || ap.status !== "active") issues.push([u.name, "المسار التلقائي موقف", "تفعيله"]);
      else if (!apFlow(apStageList(ap, u)).length) issues.push([u.name, "ما لها مسار — مو موجودة في الهيكل أو ما فوقها أحد له دخول", "ربطها في الهيكل"]);
    });
    const byUnit = new Map();
    issues.forEach(([n, i]) => { if (!byUnit.has(n)) byUnit.set(n, []); byUnit.get(n).push(i); });
    const rowsU = [...byUnit.entries()];
    setupH = dashCard("جهات ناقصة الإعداد", "تمنع الدخول أو الإرسال أو تتخطّى مراحل", rowsU.length ? rowsU.slice(0, 12).map(([n, list]) => `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-top:1px solid ${BORDER};"><div style="min-width:0;"><div style="font-size:13px;font-weight:700;">${esc(n)}</div>${list.map((i) => `<div style="font-size:11.5px;color:${SUBTLE};line-height:1.7;">• ${esc(i)}</div>`).join("")}</div>${pillBtn("ضبط", { variant: "ghost", action: "nav-to", data: { view: "units-manage" } })}</div>`).join("") + (rowsU.length > 12 ? `<div class="hint">و${rowsU.length - 12} جهات غيرها.</div>` : "") : emptyHint("كل الجهات مضبوطة."));
  }
  if (!dashHidden(kind, "opsActivity")) {
    const log = [];
    flat.forEach((x) => (x.report.customLog || []).forEach((l) => log.push({ ...l, unit: x.unit })));
    log.sort((a, b) => (b.at || 0) - (a.at || 0));
    const col = { send: GOLD, final: GREEN, return: DANGER };
    actH = dashCard("آخر الحركات", "", log.length ? log.slice(0, 8).map((l) => `<div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-top:1px solid ${BORDER};"><span style="width:10px;height:10px;border-radius:50%;margin-top:5px;flex-shrink:0;background:${col[l.kind] || ROSE}"></span><div style="flex:1;min-width:0;"><div style="font-size:12.5px;line-height:1.7;"><b>${esc(l.unit.name)}</b> — ${esc(l.text || "")}</div><div style="font-size:11px;color:${SUBTLE};">${esc(l.by || "")}${l.by ? " · " : ""}${l.at ? new Date(l.at).toLocaleString("ar-SA-u-ca-islamic", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) : ""}</div></div></div>`).join("") : emptyHint("لا توجد حركات بعد."));
  }
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:14px;align-items:start;"><div>${stuckH}${missingH}${returnedH}</div><div>${setupH}${actH}</div></div>`;
  return html;
}

function renderDashboard() {
  // "لوحة المعلومات" صارت صفحة واحدة ذكية — تبقى بنفس شكلها الكامل المعتاد
  // (البانر + بطاقات الإحصاءات + الرسوم البيانية + جداول المؤشرات/الأهداف)
  // دائمًا، لكن البيانات المعروضة تُقتصر تلقائيًا حسب نطاق الحساب (قسم/مكتب
  // إشراف/وحدة)، بدل عرض كل وحدات النظام. دون أي تغيير على مديرة النظام
  // (تشوف كل شيء كما كان تمامًا) ولا على "الإدارة العليا" (خارج نطاق هذا
  // التبديل عمدًا). الأزرار الفعلية (كاتخاذ قرار مراجعة القسم) تظهر ضمن نفس
  // الصفحة فقط لو الحساب عنده صلاحية الإجراء المطابق (actionAllowed)
  // — مستقل تمامًا عن اسم الصفحة. هذا فقط لحساب نطاق "لوحة المعلومات"
  // الموحّدة؛ الصفحات المخصّصة الأصلية (قسمي/مكتب الإشراف/لوحة معلومات
  // الوحدة) تبقى موجودة تمامًا بدون أي حذف أو تغيير.
  if (S.isExecutive) return renderExecutiveDashboard();
  const adminDeptPreview = S.isAdmin && S.ui.previewDeptId && (S.departments || []).some((d) => d.id === S.ui.previewDeptId);
  if ((S.isDepartmentUser && S.currentDepartmentId) || adminDeptPreview) {
    const dept = S.departments.find((d) => d.id === (adminDeptPreview ? S.ui.previewDeptId : S.currentDepartmentId));
    if (!dept) return `<div class="page-wrap"><div class="page-inner"><div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا يوجد قسم مرتبط بهذا الحساب.</div></div></div>`;
    // "وحدة" تقرير القسم الذاتي (role: self_report) لا تُحتسب ضمن وحدات
    // القسم التابعة هنا (ما تظهر ببطاقات الإحصاءات/الرسوم، ولا يُطلب من
    // القسم مراجعة تقريرها الخاص) — تقريرها يظهر فقط عبر "جميع التقارير"
    // لمن هو أعلى من القسم (مكتب الإشراف/الإدارة العليا/مديرة النظام).
    const units = S.units.filter((u) => u.departmentId === dept.id && u.status === "active" && u.role !== "self_report");
    return renderDashboardBody(units, {
      kind: "dept",
      title: dept.name,
      subtitle: `مرحبًا — نظرة شاملة على ${units.length} وحدة تابعة لهذا القسم`,
      topBarRight: adminDeptPreview && S.adminPreviewOrigin
        ? pillBtn("رجوع", { variant: "ghost", icon: iconChevronRight(15, INK), action: "nav-to", data: { view: S.adminPreviewOrigin } })
        : pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }),
    });
  }
  if (S.isOfficeUser && S.currentOfficeId) {
    const office = currentOffice();
    if (!office) return renderOfficeDashboard();
    // نفس استثناء "وحدة" تقرير القسم/المكتب الذاتي من بطاقات إحصاءات المكتب —
    // تظهر فقط ضمن "جميع التقارير" لمن أعلى من المكتب.
    const units = officeUnits(office.id).filter((u) => u.role !== "self_report");
    return renderDashboardBody(units, {
      kind: "office",
      title: office.name,
      subtitle: `نظرة شاملة على ${units.length} وحدة تابعة لهذا المكتب`,
      topBarRight: pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }),
    });
  }
  if (!S.isAdmin && !S.isExecutive && !S.isDepartmentUser && !S.isOfficeUser && !S.currentUnitId) ensureUnitContextForNav("unit-dashboard");
  if (!S.isAdmin && !S.isExecutive && !S.isDepartmentUser && !S.isOfficeUser && S.currentUnitId) {
    // حساب بنطاق وحدة: نفس بالضبط "لوحة معلومات الوحدة" الحقيقية (renderUnitDashboard)
    // — هي أصلًا مصمَّمة بنفس روح لوحة المعلومات (بانر + بطاقات إحصاءات + رسوم
    // بيانية) لكن بمقاييس خاصة بوحدة واحدة (تقارير هذي الوحدة فقط)، فلا داعي
    // لإعادة بنائها بشكل عام كالقسم/المكتب.
    return renderUnitDashboard();
  }
  // الحالة الافتراضية (مديرة النظام، أو أي حساب بلا نطاق محدّد، أو الإدارة
  // العليا إن وصلت هنا) — نفس السلوك الكامل غير المُقيَّد تمامًا كما كان،
  // باستثناء "وحدات" التقارير الذاتية (self_report) حتى يبقى "عدد الوحدات"
  // صحيحًا ولا تُحتسب هذي التقارير كوحدات فعلية.
  return renderDashboardBody(S.units.filter((u) => u.status === "active" && u.role !== "self_report" && u.role !== "admin" && u.role !== "executive"), {});
}

// جسم "لوحة المعلومات" الكامل (البانر + بطاقات الإحصاءات + الرسوم البيانية +
// جداول المؤشرات/الأهداف) — مُعمَّم ليأخذ أي قائمة وحدات، كي يُعاد استخدامه
// بالضبط بنفس الشكل لكل نطاق (مديرة النظام: كل الوحدات، أو قسم/مكتب/وحدة
// محدّدة)، بدل تكرار نفس الكود. opts: { title, subtitle, topBarRight, extraTop }.
function renderDashboardBody(activeUnits, opts) {
  opts = opts || {};
  const dkind = opts.kind || "admin";
  let totalCompleted = 0, totalSections = 0;
  const allIndicators = [], allGoals = [];
  const allReportsFlat = [];
  const series = dashSeries(activeUnits);
  activeUnits.forEach((u) => {
    const dept = S.departments.find((d) => d.id === u.departmentId);
    ensureUnitReportsLoaded(u.id).forEach((r) => allReportsFlat.push({ unit: u, dept, report: r }));
    const p = computeProgress(latestReportForUnit(u.id));
    totalCompleted += p.completed; totalSections += p.total;
  });
  // جدولا «كل الوحدات»: آخر تقرير فيه بيانات لكل وحدة في الفترة المختارة
  dashReports(series, true).forEach(({ unit, report }) => {
    dashIndRows(report).forEach((ind) => allIndicators.push({ ...ind, unitName: unit.name }));
    dashOpGoals(report).forEach((og) => allGoals.push({ ...og, unitName: unit.name }));
  });
  const pie = dashPieData(series);
  const overallPct = totalSections ? Math.round((totalCompleted / totalSections) * 100) : 0;
  const avgGoalPct = allGoals.length ? Math.round(allGoals.reduce((s, g) => s + (Number(g.percentage) || 0), 0) / allGoals.length) : 0;
  const unitBarData = activeUnits.map((u) => ({ label: u.name, value: computeProgress(latestReportForUnit(u.id)).percent, color: ROSE }));
  const barsHtml = unitBarData.length === 0
    ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد وحدات بعد.</div>`
    : progressListHtml(unitBarData);

  // Reports-wide counts (for the weekly stat and the "إجمالي التقارير" donut)
  const nowTs = Date.now(), weekMs = 7 * 24 * 60 * 60 * 1000;
  const reportsThisWeek = allReportsFlat.filter((x) => nowTs - x.report.createdAt <= weekMs).length;
  const completedReportsCount = allReportsFlat.filter((x) => x.report.status === "completed" || x.report.status === "approved").length;
  const underReviewReportsCount = allReportsFlat.filter((x) => x.report.status === "custom_pending").length;
  const draftReportsCount = allReportsFlat.filter((x) => x.report.status === "draft").length;
  const returnedReportsCount = allReportsFlat.filter((x) => x.report.status === "returned").length;
  const totalReportsPieHtml = svgPieChart([
    { label: "مكتمل ومعتمد", value: completedReportsCount, color: GREEN },
    { label: "قيد المراجعة", value: underReviewReportsCount, color: GOLD },
    { label: "مسودة", value: draftReportsCount, color: BLUE },
    { label: "إعادة للتعديل", value: returnedReportsCount, color: DANGER },
  ], { size: 132 });

  // Indicator status distribution (pie)
  const statusCounts = { achieved: 0, close: 0, needsAction: 0, struggling: 0, noData: 0 };
  pie.ind.forEach((ind) => {
    const def = findIndicatorDef(ind.name);
    const st = computeIndicatorStatus(resolveIndicatorRow(ind, def));
    statusCounts[st.key] = (statusCounts[st.key] || 0) + 1;
  });
  const indicatorPieHtml = dashPieScopeHtml() + svgPieChart([
    { label: "متحقق 🟢", value: statusCounts.achieved, color: GREEN },
    { label: "قريب من المستهدف 🟡", value: statusCounts.close, color: GOLD },
    { label: "يحتاج تدخلاً 🟠", value: statusCounts.needsAction, color: "#c9863a" },
    { label: "متعثر 🔴", value: statusCounts.struggling, color: DANGER },
    { label: "بلا بيانات ⚪", value: statusCounts.noData, color: SUBTLE },
  ]);

  // Goal level distribution (pie)
  const goalLevelCounts = {};
  pie.goals.forEach((g) => { if (g.level) goalLevelCounts[g.level] = (goalLevelCounts[g.level] || 0) + 1; });
  const goalPieHtml = dashPieScopeHtml() + svgPieChart(GOAL_LEVELS.map((lvl) => ({ label: lvl, value: goalLevelCounts[lvl] || 0, color: goalLevelMeta(lvl).color })));

  const indicatorsRows = allIndicators.map((ind) => {
    const v = indicatorRowView(ind);
    return `<tr><td style="color:${SUBTLE}">${esc(ind.unitName)}</td><td style="font-weight:600">${esc(ind.name)}</td><td style="text-align:center">${esc(v.target)}</td><td style="text-align:center">${esc(v.actual)}</td><td style="text-align:center;font-weight:800;color:${v.color}">${v.pctText}</td></tr>`;
  }).join("");

  const goalsRows = allGoals.map((g) => {
    const meta = goalLevelMeta(g.level);
    return `<tr><td style="color:${SUBTLE}">${esc(g.unitName)}</td><td style="font-weight:600">${esc(g.name)}</td><td style="text-align:center">${g.level ? badgeHtml(g.level, meta.color, meta.bg) : "—"}</td><td style="text-align:center;font-weight:800;color:${meta.color}">${g.percentage !== "" ? g.percentage + "٪" : "—"}</td></tr>`;
  }).join("");

  // "أحدث التقارير" — most recently created reports across every unit
  const recent = [...allReportsFlat].sort((a, b) => b.report.createdAt - a.report.createdAt).slice(0, 6);
  const recentRows = recent.map(({ unit, dept, report }) => {
    const meta = reportStatusMeta(report.status);
    const dateStr = new Date(report.createdAt).toLocaleDateString("ar-SA-u-ca-gregory", { year: "numeric", month: "2-digit", day: "2-digit" });
    const searchKey = `${unit.name} ${dept ? dept.name : ""} ${report.label}`.toLowerCase();
    return `<tr data-search="${esc(searchKey)}">
      <td>${badgeHtml(meta.label, meta.color, meta.bg)}</td>
      <td style="color:${SUBTLE}">${esc(dateStr)}</td>
      <td>${esc(dept ? dept.name : "—")}</td>
      <td style="font-weight:700;cursor:pointer;" data-action="open-report" data-unit-id="${esc(unit.id)}" data-report-id="${esc(report.id)}">${esc(report.label)} — ${esc(unit.name)}</td>
    </tr>`;
  }).join("");

  const site = currentSiteSettings();
  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: opts.title || "لوحة المعلومات", subtitle: opts.subtitle || `مرحبًا ${esc(S.currentUser.name)} — نظرة شاملة على كل الوحدات`, right: opts.topBarRight })}
    ${opts.extraTop || ""}

    ${dashBlock(dkind, "banner", `<div class="hero-banner">
      <img class="hero-banner-bg" src="${esc(siteBannerSrc(site))}" alt="" />
      <div class="hero-banner-text">
        <div class="hero-banner-eyebrow">مرحبًا بك في</div>
        <div class="prs-title hero-banner-title">${esc(site.bannerTitle || "منصة التقارير")}</div>
        <div class="hero-banner-sub">${esc(site.bannerSub || "نحو تقارير أكثر دقة وتنظيمًا")}</div>
      </div>
      <div class="search-bar">
        ${iconSearch(16, SUBTLE)}
        <input id="dashboard-search" class="search-input" placeholder="ابحث عن تقرير، قسم أو موظف..." />
      </div>
    </div>`)}
    ${dashFiltersHtml(dkind, series)}
    ${dkind === "admin" ? opsBlocksHtml(dkind, activeUnits) : ""}
    ${dkind === "admin" ? "" : `

    ${dashBlock(dkind, "stats", `<div class="stat-grid">
      ${statIconCardHtml("تقارير هذا الأسبوع", reportsThisWeek, iconCalendarSmall(18, ROSE), GREEN_BG)}
      ${statIconCardHtml("مكتمل أو معتمد", completedReportsCount, iconCheckCircle(18, GREEN), GREEN_BG)}
      ${statIconCardHtml("تقرير قيد المراجعة", underReviewReportsCount, iconDocument(18, GOLD), GOLD_BG)}
      ${statIconCardHtml("عدد الوحدات", activeUnits.length, iconBuilding(ROSE, 18), BLUE_BG)}
    </div>`)}
    ${dashHidden(dkind, "achieve") ? "" : achievementCardHtml(activeUnits)}
    ${dashHidden(dkind, "yearCompare") ? "" : yearCompareCardHtml(activeUnits)}

    ${dashRecentGrid(dkind, `
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <div class="prs-title" style="font-size:14px;font-weight:800;">أحدث التقارير</div>
          <button data-action="nav-to" data-view="all-reports" style="background:none;border:none;cursor:pointer;color:${ROSE};font-size:11.5px;font-weight:700;display:flex;align-items:center;gap:4px;">${iconChevronLeft(13, ROSE)} عرض الكل</button>
        </div>
        ${recent.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد تقارير بعد.</div>` :
          `<div class="table-wrap"><table class="prs-table" id="recent-reports-table"><thead><tr style="background:${GRAY_BG}">
            <th>الحالة</th><th>تاريخ الإعداد</th><th>القسم</th><th>اسم التقرير</th>
          </tr></thead><tbody>${recentRows}</tbody></table></div>`}
      </div>`, `
      <div class="card">
        <div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">إجمالي التقارير</div>
        ${totalReportsPieHtml}
      </div>`)}

    ${dashBlock(dkind, "bars", `<div class="card" style="margin-bottom:18px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:12px;">نسبة الإنجاز حسب الوحدة</div>
      ${barsHtml}
    </div>`)}
    ${dashPieGrid(dkind, `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">توزيع حالات المؤشرات</div>${indicatorPieHtml}</div>`, `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">توزيع مستويات تحقق الأهداف</div>${goalPieHtml}</div>`)}
    ${dashBlock(dkind, "indicators", `<div class="card" style="margin-bottom:18px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:12px;">مؤشرات الأداء — كل الوحدات</div>
      ${allIndicators.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد مؤشرات مُدخلة بعد.</div>` : `
      <div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GOLD_BG}">
        <th style="color:#8a6a35">الوحدة</th><th style="color:#8a6a35">المؤشر</th><th style="text-align:center;color:#8a6a35">المستهدف</th><th style="text-align:center;color:#8a6a35">المتحقق</th><th style="text-align:center;color:#8a6a35">النسبة</th>
      </tr></thead><tbody>${indicatorsRows}</tbody></table></div>`}
    </div>`)}
    ${dashBlock(dkind, "goals", `<div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div class="prs-title" style="font-size:14px;font-weight:800;">الأهداف التشغيلية — كل الوحدات</div>
        <span style="font-size:11px;color:${SUBTLE}">متوسط النسبة: ${avgGoalPct}٪</span>
      </div>
      ${allGoals.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد أهداف مُدخلة بعد.</div>` : `
      <div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GREEN_BG}">
        <th style="color:${ROSE}">الوحدة</th><th style="color:${ROSE}">الهدف التشغيلي</th><th style="text-align:center;color:${ROSE}">المستوى</th><th style="text-align:center;color:${ROSE};width:70px">النسبة</th>
      </tr></thead><tbody>${goalsRows}</tbody></table></div>`}
    </div>`)}
    <div style="margin-top:18px;">${dashPeriodBlocksHtml(dkind, series)}</div>
    ${dashHidden(dkind, "programs") ? "" : `<div style="margin-top:18px;">${programsCardHtml(activeUnits)}</div>`}
    `}
    ${opts.extraBottom || ""}
  </div></div>`;
}

/* =============================== Units overview (admin) ====================== */
/* =============================== Unit dashboard (لوحة معلومات الوحدة) ========= */
function unitNotFoundPageHtml() {
  return `<div class="page-wrap"><div class="page-inner">${adminUnitSwitcherHtml()}<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">${(S.units || []).some((u) => u.role === "unit" || u.role === "center") ? "اختاري وحدة أو مركزًا من القائمة أعلاه." : "لا توجد وحدات أو مراكز بعد."}</div></div></div>`;
}
function renderUnitDashboard() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit && S.isAdmin) return unitNotFoundPageHtml();
  const dept = S.departments.find((d) => d.id === unit?.departmentId);
  const reports = ensureUnitReportsLoaded(S.currentUnitId);
  // المؤشرات والأهداف من آخر تقرير فيه بيانات في الفترة المختارة (المعتمد أولًا)
  const series = dashSeries(unit ? [unit] : []);
  const latest = unit ? dashUnitLatest(series, unit.id) : null;
  const allIndicators = latest ? dashIndRows(latest.report) : [];
  const allGoals = latest ? dashOpGoals(latest.report) : [];
  const pie = dashPieData(series);
  const avgGoalPct = allGoals.length ? Math.round(allGoals.reduce((s, g) => s + (Number(g.percentage) || 0), 0) / allGoals.length) : 0;

  const nowTs = Date.now(), weekMs = 7 * 24 * 60 * 60 * 1000;
  const reportsThisWeek = reports.filter((r) => nowTs - r.createdAt <= weekMs).length;
  const completedReportsCount = reports.filter((r) => r.status === "completed" || r.status === "approved").length;
  const underReviewReportsCount = reports.filter((r) => r.status === "custom_pending").length;
  const draftReportsCount = reports.filter((r) => r.status === "draft").length;
  const returnedReportsCount = reports.filter((r) => r.status === "returned").length;
  const totalReportsPieHtml = svgPieChart([
    { label: "مكتمل ومعتمد", value: completedReportsCount, color: GREEN },
    { label: "قيد المراجعة", value: underReviewReportsCount, color: GOLD },
    { label: "مسودة", value: draftReportsCount, color: BLUE },
    { label: "إعادة للتعديل", value: returnedReportsCount, color: DANGER },
  ], { size: 132 });

  const statusCounts = { achieved: 0, close: 0, needsAction: 0, struggling: 0, noData: 0 };
  pie.ind.forEach((ind) => {
    const def = findIndicatorDef(ind.name);
    const st = computeIndicatorStatus(resolveIndicatorRow(ind, def));
    statusCounts[st.key] = (statusCounts[st.key] || 0) + 1;
  });
  const indicatorPieHtml = dashPieScopeHtml() + svgPieChart([
    { label: "متحقق 🟢", value: statusCounts.achieved, color: GREEN },
    { label: "قريب من المستهدف 🟡", value: statusCounts.close, color: GOLD },
    { label: "يحتاج تدخلاً 🟠", value: statusCounts.needsAction, color: "#c9863a" },
    { label: "متعثر 🔴", value: statusCounts.struggling, color: DANGER },
    { label: "بلا بيانات ⚪", value: statusCounts.noData, color: SUBTLE },
  ]);

  const goalLevelCounts = {};
  pie.goals.forEach((g) => { if (g.level) goalLevelCounts[g.level] = (goalLevelCounts[g.level] || 0) + 1; });
  const goalPieHtml = dashPieScopeHtml() + svgPieChart(GOAL_LEVELS.map((lvl) => ({ label: lvl, value: goalLevelCounts[lvl] || 0, color: goalLevelMeta(lvl).color })));

  const indicatorsRows = allIndicators.map((ind) => {
    const v = indicatorRowView(ind);
    return `<tr><td style="font-weight:600">${esc(ind.name)}</td><td style="text-align:center">${esc(v.target)}</td><td style="text-align:center">${esc(v.actual)}</td><td style="text-align:center;font-weight:800;color:${v.color}">${v.pctText}</td></tr>`;
  }).join("");

  const goalsRows = allGoals.map((g) => {
    const meta = goalLevelMeta(g.level);
    return `<tr><td style="font-weight:600">${esc(g.name)}</td><td style="text-align:center">${g.level ? badgeHtml(g.level, meta.color, meta.bg) : "—"}</td><td style="text-align:center;font-weight:800;color:${meta.color}">${g.percentage !== "" ? g.percentage + "٪" : "—"}</td></tr>`;
  }).join("");

  const recent = [...reports].sort((a, b) => b.createdAt - a.createdAt).slice(0, 6);
  const recentRows = recent.map((r) => {
    const meta = reportStatusMeta(r.status);
    const dateStr = new Date(r.createdAt).toLocaleDateString("ar-SA-u-ca-gregory", { year: "numeric", month: "2-digit", day: "2-digit" });
    return `<tr data-search="${esc((r.label || "").toLowerCase())}">
      <td>${badgeHtml(meta.label, meta.color, meta.bg)}</td>
      <td style="color:${SUBTLE}">${esc(dateStr)}</td>
      <td style="font-weight:700;cursor:pointer;" data-action="open-report" data-unit-id="${esc(unit.id)}" data-report-id="${esc(r.id)}">${esc(r.label)}</td>
    </tr>`;
  }).join("");

  const site = currentSiteSettings();
  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "لوحة المعلومات", subtitle: `مرحبًا ${esc(S.currentUser.name)} — نظرة عامة على تقارير ${esc(unit.name)}` })}
    ${scopedUnitSwitcherHtml()}

    ${dashBlock("unit", "banner", `<div class="hero-banner">
      <img class="hero-banner-bg" src="${esc(siteBannerSrc(site))}" alt="" />
      <div class="hero-banner-text">
        <div class="hero-banner-eyebrow">مرحبًا بك في</div>
        <div class="prs-title hero-banner-title">${esc(site.bannerTitle || "منصة التقارير")}</div>
        <div class="hero-banner-sub">${esc(site.bannerSub || "نحو تقارير أكثر دقة وتنظيمًا")}</div>
      </div>
      <div class="search-bar">
        ${iconSearch(16, SUBTLE)}
        <input id="dashboard-search" class="search-input" placeholder="ابحثي عن تقرير..." />
      </div>
    </div>`)}
    ${dashFiltersHtml("unit", series)}

    ${dashBlock("unit", "stats", `<div class="stat-grid">
      ${statIconCardHtml("تقارير هذا الأسبوع", reportsThisWeek, iconCalendarSmall(18, ROSE), GREEN_BG)}
      ${statIconCardHtml("مكتمل أو معتمد", completedReportsCount, iconCheckCircle(18, GREEN), GREEN_BG)}
      ${statIconCardHtml("تقرير قيد المراجعة", underReviewReportsCount, iconDocument(18, GOLD), GOLD_BG)}
      ${statIconCardHtml("إجمالي التقارير", reports.length, iconBuilding(ROSE, 18), BLUE_BG)}
    </div>`)}

    ${dashRecentGrid("unit", `
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <div class="prs-title" style="font-size:14px;font-weight:800;">أحدث التقارير</div>
          <button data-action="nav-to" data-view="unit-reports" style="background:none;border:none;cursor:pointer;color:${ROSE};font-size:11.5px;font-weight:700;display:flex;align-items:center;gap:4px;">${iconChevronLeft(13, ROSE)} عرض الكل</button>
        </div>
        ${recent.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد تقارير بعد.</div>` :
          `<div class="table-wrap"><table class="prs-table" id="recent-reports-table"><thead><tr style="background:${GRAY_BG}">
            <th>الحالة</th><th>تاريخ الإعداد</th><th>اسم التقرير</th>
          </tr></thead><tbody>${recentRows}</tbody></table></div>`}
      </div>`, `
      <div class="card">
        <div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">إجمالي التقارير</div>
        ${totalReportsPieHtml}
      </div>`)}

    ${dashPieGrid("unit", `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">توزيع حالات المؤشرات</div>${indicatorPieHtml}</div>`, `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">توزيع مستويات تحقق الأهداف</div>${goalPieHtml}</div>`)}
    ${dashBlock("unit", "indicators", `<div class="card" style="margin-bottom:18px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:12px;">مؤشرات الأداء${latest ? ` <span style="font-size:11.5px;color:${SUBTLE};font-weight:600;">— ${esc(latest.col.label)}</span>` : ""}</div>
      ${allIndicators.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد مؤشرات مُدخلة بعد.</div>` : `
      <div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GOLD_BG}">
        <th style="color:#8a6a35">المؤشر</th><th style="text-align:center;color:#8a6a35">المستهدف</th><th style="text-align:center;color:#8a6a35">المتحقق</th><th style="text-align:center;color:#8a6a35">النسبة</th>
      </tr></thead><tbody>${indicatorsRows}</tbody></table></div>`}
    </div>`)}
    ${dashBlock("unit", "goals", `<div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div class="prs-title" style="font-size:14px;font-weight:800;">الأهداف التشغيلية${latest ? ` <span style="font-size:11.5px;color:${SUBTLE};font-weight:600;">— ${esc(latest.col.label)}</span>` : ""}</div>
        <span style="font-size:11px;color:${SUBTLE}">متوسط النسبة: ${avgGoalPct}٪</span>
      </div>
      ${allGoals.length === 0 ? `<div style="font-size:12.5px;color:${SUBTLE}">لا توجد أهداف مُدخلة بعد.</div>` : `
      <div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GREEN_BG}">
        <th style="color:${ROSE}">الهدف التشغيلي</th><th style="text-align:center;color:${ROSE}">المستوى</th><th style="text-align:center;color:${ROSE};width:70px">النسبة</th>
      </tr></thead><tbody>${goalsRows}</tbody></table></div>`}
    </div>`)}
    ${unit ? `<div style="margin-top:18px;">${dashPeriodBlocksHtml("unit", series)}</div>` : ""}
    ${unit ? `<div style="margin-top:18px;">
      ${dashHidden("unit", "achieve") ? "" : achievementCardHtml([unit])}
      ${dashHidden("unit", "yearCompare") ? "" : yearCompareCardHtml([unit])}
      ${dashHidden("unit", "programs") ? "" : programsCardHtml([unit])}
    </div>` : ""}
  </div></div>`;
}

/* =============================== Unit settings ================================ */
function usLevelUnitSwitcherHtml() {
  const list = (S.units || []).filter((u) => u.status === "active" && S.levelScope.unitIds.has(u.id));
  if (list.length < 2) return "";
  return `<div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
    <span style="font-size:11.5px;font-weight:700;color:${SUBTLE};white-space:nowrap;">اختيار الوحدة:</span>
    <select class="input" style="flex:1;min-width:200px;" data-action="scoped-switch-unit"><option value="">— اختاري —</option>${list.map((u) => `<option value="${esc(u.id)}" ${S.currentUnitId === u.id ? "selected" : ""}>${esc(u.name)}</option>`).join("")}</select>
  </div>`;
}
function renderUnitSettings() {
  const unit = (S.units || []).find((u) => u.id === S.currentUnitId);
  const body = !unit ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">اختاري الوحدة أولًا.</div>` : `${usSectionsCardHtml(unit)}${usSkipCardHtml(unit)}`;
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "الإعدادات", subtitle: unit ? unit.name : "" })}
    ${S.levelScope ? usLevelUnitSwitcherHtml() : scopedUnitSwitcherHtml()}
    ${S.ui.usMsg ? `<div class="hint good" style="font-weight:700;margin-bottom:10px;">${esc(S.ui.usMsg)}</div>` : ""}
    ${body}
  </div></div>`;
}
function usSectionsCardHtml(unit) {
  const pt = PERIOD_TYPES.includes(S.ui.usPeriod) ? S.ui.usPeriod : PERIOD_TYPES[0];
  const off = unitSectionsOff(unit.id, pt);
  const shown = SECTIONS.filter((sc) => SECTIONS_ALWAYS.includes(sc.id) || !off.includes(sc.id)).length;
  return `<div class="card" style="margin-bottom:14px;">
    <div style="font-size:14px;font-weight:800;margin-bottom:4px;">أقسام التقرير حسب نوع الفترة</div>
    <div class="hint" style="margin-bottom:10px;">اختاري الفترة، ثم حددي الأقسام اللي تطلع في تقاريرها. القسم المطفي ما يطلع عند التعبئة ولا في التقرير الكامل. تقارير الفترات الثانية ما تتأثر.</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${PERIOD_TYPES.map((x) => {
      const n = unitSectionsOff(unit.id, x).filter((id) => !SECTIONS_ALWAYS.includes(id) && SECTIONS.some((sc) => sc.id === id)).length;
      return pillBtn(x + (n ? " (" + n + " مخفي)" : ""), { variant: x === pt ? "primary" : "ghost", action: "us-period", data: { pt: x } });
    }).join("")}</div>
    <div style="font-size:12px;color:${SUBTLE};margin-bottom:8px;">تقرير «${esc(pt)}»: ${shown} من ${SECTIONS.length} أقسام</div>
    <div style="display:flex;flex-direction:column;gap:6px;">${SECTIONS.map((sc) => {
      const locked = SECTIONS_ALWAYS.includes(sc.id), on = locked || !off.includes(sc.id);
      return `<button type="button" data-action="us-sec-toggle" data-sid="${esc(sc.id)}" data-pt="${esc(pt)}" ${locked ? "disabled" : ""} style="display:flex;align-items:center;gap:10px;min-height:44px;padding:8px 12px;border-radius:12px;border:1px solid ${on ? ROSE : BORDER};background:${on ? "#fff" : GRAY_BG};cursor:${locked ? "default" : "pointer"};font-family:inherit;text-align:start;">
        <span style="width:20px;height:20px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:${on ? ROSE : "#fff"};border:1.5px solid ${on ? ROSE : BORDER};">${on ? iconCheck(12, "#fff") : ""}</span>
        <span style="flex:1;font-size:13px;font-weight:700;color:${on ? INK : SUBTLE};${on ? "" : "text-decoration:line-through;"}">${esc(sc.label)}</span>
        ${locked ? `<span style="font-size:10.5px;color:${SUBTLE};">دائمًا (فيه اختيار الفترة)</span>` : ""}
      </button>`;
    }).join("")}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px;">${pillBtn("تطبيق هذا الاختيار على كل الفترات", { variant: "soft", action: "us-sec-copy-all", data: { pt } })}${off.length ? pillBtn("إظهار كل الأقسام لهذه الفترة", { variant: "ghost", action: "us-sec-reset", data: { pt } }) : ""}</div>
  </div>`;
}
function usSkipCardHtml(unit) {
  return `<div class="card" style="margin-bottom:14px;">
    <div style="font-size:14px;font-weight:800;margin-bottom:4px;">مسار تقارير الوحدة</div>
    <div class="hint" style="margin-bottom:10px;">يطلع لحاله من الهيكل. لو أنتِ صاحبة مرحلة ومسموح بتخطّيها، تقدرين تتخطّينها لهذه الوحدة (أو لكل وحداتك) — ويروح التقرير للي بعدها مباشرة.</div>
    ${apAutoPathListHtml(unit, true)}
  </div>`;
}

/* =============================== Units overview (admin) ====================== */

// صفحة "الأقسام" الموحّدة: مديرة النظام تشوف كل الأقسام، ومكتب الإشراف يشوف فقط
// الأقسام المرتبطة به (عبر officeId) — بنفس العلاقة الموجودة فعليًا، بدون أي
// بيانات مكررة. الضغط على قسم يعرض الوحدات التابعة له فقط (اطلاع، بدون تقارير).
function renderDepartmentsPage() {
  const scopedDepartments = S.isOfficeUser ? S.departments.filter((d) => officeScopeIds(S.currentOfficeId).includes(d.officeId)) : S.departments;
  const selectedDept = S.ui.departmentsPageSelectedId ? scopedDepartments.find((d) => d.id === S.ui.departmentsPageSelectedId) : null;

  if (selectedDept) {
    const units = S.units.filter((u) => u.departmentId === selectedDept.id);
    return `
    <div class="page-wrap"><div class="page-inner">
      ${topBarHtml({ title: selectedDept.name, subtitle: "الوحدات التابعة للقسم", backAction: "departments-page-back",
        right: S.isOfficeUser ? pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) : undefined })}
      ${units.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد وحدات في هذا القسم بعد.</div>` :
        `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px;">${units.map((u) => `
          <div class="card">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:34px;height:34px;border-radius:10px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconBuilding(ROSE, 16)}</div>
              <div style="font-size:13.5px;font-weight:700;">${esc(u.name)} ${u.role === "center" ? `<span style="font-size:9.5px;font-weight:700;color:${GOLD};background:${GOLD_BG};padding:1px 6px;border-radius:999px;">مركز</span>` : ""}</div>
            </div>
          </div>`).join("")}</div>`}
    </div></div>`;
  }

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "الأقسام", subtitle: `${scopedDepartments.length} — اضغطي على قسم لعرض الوحدات التابعة له`,
      right: S.isOfficeUser ? pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) : undefined })}
    ${scopedDepartments.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد أقسام${S.isOfficeUser ? " مرتبطة بهذا المكتب بعد" : ""}.</div>` :
      `<div style="display:flex;flex-direction:column;gap:8px;">${scopedDepartments.map((d) => `
        <button class="card" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:1px solid ${BORDER};cursor:pointer;text-align:right;opacity:${d.status === "active" ? 1 : 0.6}" data-action="departments-page-open" data-id="${esc(d.id)}">
          <span style="font-size:13.5px;font-weight:700;">${esc(d.name)}${d.status !== "active" ? ` <span style="font-size:10.5px;color:${SUBTLE};font-weight:600;">(معطّل)</span>` : ""}</span>
          <span style="font-size:11px;color:${SUBTLE};display:flex;align-items:center;gap:6px;">${S.units.filter((u) => u.departmentId === d.id).length} وحدة/مركز ${iconChevronLeft(14, SUBTLE)}</span>
        </button>`).join("")}</div>`}
  </div></div>`;
}

// صفحة اختيار مبسّطة لمديرة النظام — تفتح نفس واجهة "قسمي" أو "تقاريري" الحقيقية
// حسب النوع، بدون أي صفحة مكررة، وبصلاحية اطلاع فقط.

/* ===================== تصفّح الهيكل (browse-structure) =====================
   صفحة اطلاع بشكل مجلدات: المكتب ← (مكاتب فرعية + أقسام) ← وحدات ← تقارير الوحدة.
   تقرأ الهيكل الحي (S.offices/S.departments/S.units) كل مرة تُرسم فيها — بلا أي
   نسخة خاصة، فأي تعديل بالهيكل يظهر فورًا. بدون أي كتابة على البيانات. */
const BS_COLORS = [
  { bg: "linear-gradient(135deg,#fcf0f3,#f5dbe2)", tab: "#f1d0d9" },
  { bg: "linear-gradient(135deg,#faeaf0,#edcdd9)", tab: "#e6c1cf" },
  { bg: "linear-gradient(135deg,#f7e8ef,#e2c3d3)", tab: "#d9b6c9" },
  { bg: "linear-gradient(135deg,#fcf2e5,#f4dfc1)", tab: "#eed3ab" },
  { bg: "linear-gradient(135deg,#f5edf0,#e4d0d9)", tab: "#dac3cf" },
];
const BS_PENDING = ["custom_pending"];
function bsData() {
  const allOffices = S.offices || [];
  const noSelf = (u) => u.role !== "self_report" && u.role !== "admin" && u.role !== "executive" && u.status === "active";
  let offices, depts, units, execs = [];
  if (S.isAdmin || S.isExecutive || (!S.isDepartmentUser && !S.isOfficeUser && !S.currentUnitId)) {
    offices = allOffices.filter((o) => o.status !== "disabled");
    execs = S.units.filter((u) => u.role === "executive" && u.status === "active");
    depts = S.departments.filter((d) => d.status === "active");
    units = S.units.filter(noSelf);
  } else if (S.isOfficeUser && S.currentOfficeId) {
    const ids = officeScopeIds(S.currentOfficeId);
    offices = allOffices.filter((o) => ids.includes(o.id));
    depts = S.departments.filter((d) => d.status === "active" && ids.includes(d.officeId));
    units = officeUnits(S.currentOfficeId).filter(noSelf);
  } else {
    const sc = scopedAccessUnitsAndDepts();
    offices = []; depts = sc.depts; units = sc.units.filter(noSelf);
  }
  return { offices, depts, units, execs };
}
function bsOfficeScope(D, officeId) {
  const ids = officeScopeIds(officeId);
  const depts = D.depts.filter((d) => ids.includes(d.officeId));
  const dIds = depts.map((d) => d.id);
  const units = D.units.filter((u) => dIds.includes(u.departmentId) || ids.includes(u.officeId));
  return { depts, units };
}
function bsNodeScope(D, node) {
  if (!node) return { depts: D.depts, units: D.units };
  if (node.k === "exec") {
    const offs = D.offices.filter((o) => o.parentOfficeId === node.id);
    const depts = [], units = [];
    offs.forEach((o) => { const sc = bsOfficeScope(D, o.id); sc.depts.forEach((d) => { if (!depts.includes(d)) depts.push(d); }); sc.units.forEach((u) => { if (!units.includes(u)) units.push(u); }); });
    return { depts, units };
  }
  if (node.k === "office") return bsOfficeScope(D, node.id);
  if (node.k === "alldepts") return node.id ? bsOfficeScope(D, node.id) : { depts: D.depts, units: D.units };
  if (node.k === "dept") return { depts: D.depts.filter((d) => d.id === node.id), units: D.units.filter((u) => u.departmentId === node.id) };
  if (node.k === "unit") return { depts: [], units: D.units.filter((u) => u.id === node.id) };
  return { depts: D.depts, units: D.units };
}
function bsCounts(sc) {
  let reports = 0, pending = 0;
  sc.units.forEach((u) => { const rs = ensureUnitReportsLoaded(u.id); reports += rs.length; pending += rs.filter((r) => BS_PENDING.includes(r.status)).length; });
  return { depts: sc.depts.length, units: sc.units.length, reports, pending };
}
function bsPalette() {
  const th = themeOf(S.siteSettings || dataStore.getSiteSettings());
  return BS_COLORS.map((d, i) => th.bs[i] === DEFAULT_THEME.bs[i] ? d : { tab: th.bs[i], bg: `linear-gradient(135deg,${mixHex(th.bs[i], "#ffffff", 0.6)},${mixHex(th.bs[i], "#ffffff", 0.15)})` });
}
function bsFolderHtml(o) {
  const PAL = bsPalette();
  const c = PAL[(o.i || 0) % PAL.length];
  const data = Object.entries(o.data || {}).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ");
  const chips = (o.chips || []).map((t) => `<span style="font-size:10.5px;font-weight:700;color:${INK};background:rgba(255,255,255,0.7);padding:3px 9px;border-radius:999px;">${esc(t)}</span>`).join("");
  return `<button type="button" class="bs-folder" data-search="${esc(o.title)}" data-action="${o.action}" ${data} style="position:relative;display:block;text-align:right;border:none;background:none;padding:16px 0 0;cursor:pointer;font-family:inherit;width:100%;">
    ${o.dashed ? "" : `<span style="position:absolute;top:2px;right:20px;width:86px;height:20px;border-radius:12px 12px 0 0;background:${c.tab};"></span>`}
    <span style="display:flex;flex-direction:column;gap:6px;min-height:118px;border-radius:20px;padding:16px 16px 14px;${o.dashed ? `border:2px dashed ${BORDER};background:transparent;` : `background:${c.bg};box-shadow:0 8px 20px rgba(80,40,60,0.07);`}">
      <span style="font-size:15px;font-weight:800;color:${INK};line-height:1.4;">${esc(o.title)}</span>
      ${o.sub ? `<span style="font-size:11px;color:${SUBTLE};">${esc(o.sub)}</span>` : ""}
      <span style="display:flex;gap:6px;flex-wrap:wrap;margin-top:auto;">${chips}</span>
    </span>
  </button>`;
}
function bsStatTile(label, value, i) {
  const PAL = bsPalette();
  const c = PAL[i % PAL.length];
  return `<div style="background:${c.bg};border-radius:16px;padding:12px 16px;min-width:110px;flex:1;"><div style="font-size:22px;font-weight:900;color:${INK};">${value}</div><div style="font-size:11px;color:${SUBTLE};font-weight:700;">${esc(label)}</div></div>`;
}
function renderBrowseStructure() {
  const D = bsData();
  const officeIds = new Set(D.offices.map((o) => o.id)), execIds = new Set(D.execs.map((e) => e.id));
  // تنقية المسار من أي عنصر انحذف من الهيكل
  const exists = (n) => n.k === "exec" ? execIds.has(n.id) : n.k === "office" ? officeIds.has(n.id) : n.k === "dept" ? D.depts.some((d) => d.id === n.id) : n.k === "unit" ? D.units.some((u) => u.id === n.id) : n.k === "alldepts" ? (!n.id || officeIds.has(n.id)) : false;
  let path = (S.ui.bsPath || []).slice(); const valid = [];
  for (const n of path) { if (!exists(n)) break; valid.push(n); }
  S.ui.bsPath = path = valid;
  const node = path.length ? path[path.length - 1] : null;
  const nameOf = (n) => n.k === "exec" ? (D.execs.find((e) => e.id === n.id) || {}).name : n.k === "office" ? (D.offices.find((o) => o.id === n.id) || {}).name : n.k === "dept" ? (D.depts.find((d) => d.id === n.id) || {}).name : n.k === "unit" ? (D.units.find((u) => u.id === n.id) || {}).name : (n.id ? "كل أقسام " + ((D.offices.find((o) => o.id === n.id) || {}).name || "") : "كل الأقسام");

  const crumbs = [`<button type="button" class="pill-btn ${path.length ? "pill-ghost" : "pill-primary"}" data-action="bs-up" data-index="-1">${iconLayers(13, path.length ? ROSE : "#fff")} الهيكل</button>`]
    .concat(path.map((n, i) => `<span style="color:${SUBTLE};">‹</span><button type="button" class="pill-btn ${i === path.length - 1 ? "pill-primary" : "pill-ghost"}" data-action="bs-up" data-index="${i}">${esc(nameOf(n))}</button>`)).join("");

  const deptFolder = (d, i) => { const sc = bsNodeScope(D, { k: "dept", id: d.id }); const c = bsCounts(sc); return bsFolderHtml({ i, title: d.name, sub: (D.offices.find((o) => o.id === d.officeId) || {}).name || "", chips: [c.units + " وحدة/مركز", c.reports + " تقرير"], action: "bs-open", data: { kind: "dept", id: d.id } }); };
  const unitFolder = (u, i) => { const rs = ensureUnitReportsLoaded(u.id); const pend = rs.filter((r) => BS_PENDING.includes(r.status)).length; return bsFolderHtml({ i, title: u.name, sub: u.role === "center" ? "مركز" : "وحدة", chips: [rs.length + " تقرير"].concat(pend ? [pend + " بانتظار المراجعة"] : []), action: "bs-open", data: { kind: "unit", id: u.id } }); };
  const officeFolder = (o, i) => { const sc = bsOfficeScope(D, o.id); const c = bsCounts(sc); const subs = D.offices.filter((x) => x.parentOfficeId === o.id).length; return bsFolderHtml({ i, title: o.name, sub: subs ? subs + " مكتب فرعي" : "مكتب إشراف", chips: [c.depts + " قسم", c.units + " وحدة", c.reports + " تقرير"], action: "bs-open", data: { kind: "office", id: o.id } }); };
  const allDeptsCard = (officeId, n) => bsFolderHtml({ i: 5, dashed: true, title: officeId ? "كل الأقسام" : "كل الأقسام", sub: "عرض كل الأقسام التابعة دفعة واحدة", chips: [n + " قسم"], action: "bs-open", data: { kind: "alldepts", id: officeId || "" } });

  let body = "", title = "تصفّح الهيكل", subtitle = "اختاري جهة للنزول لما تحتها";
  const sc = bsNodeScope(D, node); const cnt = bsCounts(sc);
  let folders = [];
  if (!node) {
    const rootOffices = D.offices.filter((o) => !o.parentOfficeId || (!officeIds.has(o.parentOfficeId) && !execIds.has(o.parentOfficeId)));
    D.execs.forEach((e) => { const s2 = bsNodeScope(D, { k: "exec", id: e.id }); const c2 = bsCounts(s2); folders.push((i) => bsFolderHtml({ i, title: e.name, sub: "إدارة عليا", chips: [c2.units + " وحدة", c2.reports + " تقرير"], action: "bs-open", data: { kind: "exec", id: e.id } })); });
    rootOffices.forEach((o) => folders.push((i) => officeFolder(o, i)));
    if (!D.offices.length) D.depts.forEach((d) => folders.push((i) => deptFolder(d, i)));
    else if (D.depts.length) folders.push(() => allDeptsCard("", D.depts.length));
    if (!D.offices.length) D.units.filter((u) => !D.depts.some((d) => d.id === u.departmentId)).forEach((u) => folders.push((i) => unitFolder(u, i)));
  } else if (node.k === "exec") {
    title = nameOf(node); subtitle = "المكاتب التابعة للإدارة العليا";
    D.offices.filter((o) => o.parentOfficeId === node.id).forEach((o) => folders.push((i) => officeFolder(o, i)));
  } else if (node.k === "office") {
    title = nameOf(node); subtitle = "المكاتب الفرعية والأقسام";
    D.offices.filter((o) => o.parentOfficeId === node.id).forEach((o) => folders.push((i) => officeFolder(o, i)));
    D.depts.filter((d) => d.officeId === node.id).forEach((d) => folders.push((i) => deptFolder(d, i)));
    if (sc.depts.length) folders.push(() => allDeptsCard(node.id, sc.depts.length));
  } else if (node.k === "alldepts") {
    title = nameOf(node); subtitle = "كل الأقسام بما فيها التابعة للمكاتب الفرعية";
    sc.depts.forEach((d) => folders.push((i) => deptFolder(d, i)));
    if (!node.id) D.units.filter((u) => !D.depts.some((d) => d.id === u.departmentId)).forEach((u) => folders.push((i) => unitFolder(u, i)));
  } else if (node.k === "dept") {
    title = nameOf(node); subtitle = "الوحدات والمراكز التابعة للقسم";
    sc.units.forEach((u) => folders.push((i) => unitFolder(u, i)));
  }
  if (node && node.k === "unit") {
    const unit = D.units.find((u) => u.id === node.id);
    title = unit.name; subtitle = unit.role === "center" ? "مركز — قائمة التقارير" : "وحدة — قائمة التقارير";
    const rows = ensureUnitReportsLoaded(unit.id).slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).map((r) => {
      const meta = reportStatusMeta(r.status);
      const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long", day: "numeric" }) : "";
      return [esc(r.label || "تقرير"), badgeHtml(meta.label, meta.color, meta.bg), esc(dateStr),
        `<button class="pill-btn pill-ghost" style="padding:5px 10px;" data-action="view-report-pdf" data-unit-id="${esc(unit.id)}" data-report-id="${esc(r.id)}">${iconDocument(13, ROSE)} عرض PDF</button>`];
    });
    body = `${S.isAdmin ? `<div style="margin-bottom:12px;">${pillBtn("فتح واجهة الوحدة", { variant: "ghost", icon: iconBuilding(ROSE, 14), action: "bs-open-unit-ui", data: { id: unit.id } })}</div>` : ""}
      ${rows.length ? reportTable(["التقرير", "الحالة", "تاريخ الإنشاء", ""], rows) : `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تقارير لهذي الوحدة بعد.</div>`}`;
  } else {
    body = folders.length === 0
      ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;border-style:dashed;">لا يوجد شيء هنا بعد.</div>`
      : `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;" id="bs-grid">${folders.map((f, i) => f(i)).join("")}</div>`;
  }
  const uiBtns = (S.isAdmin && node && node.k === "dept") ? pillBtn("فتح واجهة القسم", { variant: "ghost", icon: iconBuilding(ROSE, 14), action: "bs-open-dept-ui", data: { id: node.id } })
    : (S.isAdmin && node && node.k === "office") ? pillBtn("ملخص المكتب", { variant: "ghost", icon: iconDocument(14, ROSE), action: "bs-open-office-ui", data: { id: node.id, view: "office-summary" } }) + pillBtn("أرشيف المكتب", { variant: "ghost", icon: iconLayers(14, ROSE), action: "bs-open-office-ui", data: { id: node.id, view: "office-archive" } })
    : "";
  const tiles = (node && node.k === "unit") ? "" : `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;">${bsStatTile("الأقسام", cnt.depts, 0)}${bsStatTile("الوحدات والمراكز", cnt.units, 1)}${bsStatTile("التقارير", cnt.reports, 2)}${bsStatTile("بانتظار المراجعة", cnt.pending, 3)}</div>`;
  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title, subtitle, icon: iconLayers(18, ROSE), backAction: path.length ? "bs-up" : "", backData: path.length ? { index: path.length - 2 } : undefined })}
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:16px;">${crumbs}</div>
    ${uiBtns ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">${uiBtns}</div>` : ""}
    ${tiles}
    ${(!node || node.k !== "unit") && folders.length > 6 ? `<div style="margin-bottom:14px;"><input class="input" id="bs-search" placeholder="ابحثي بالاسم..." style="width:100%;max-width:320px;" /></div>` : ""}
    ${body}
  </div></div>`;
}

/* =============================== مخطط الهيكل التنظيمي (تخطيط حر، admin) ======
   شجرة مسميات وظيفية حرة تبنيها مديرة النظام بنفسها: عنصر جذر، وتحت كل عنصر
   "إضافة تفرع" بلا حد للعمق. لا علاقة لها بحسابات تسجيل الدخول (الوحدة/القسم/
   المكتب) ولا بمسار اعتماد التقارير — أداة تخطيط وتصوّر بصري فقط، منفصلة تمامًا
   عن الصفحات الأربع (مكاتب الإشراف/الأقسام/الوحدات/المراكز) اللي تبقى كما هي. */

/* =============================== الهيكل المرن (org_levels) ====================
   شجرة مستويات بلا حد للعمق فوق النظام الحالي — لا تمس جداول الوحدات/الأقسام/
   المكاتب ولا حساباتها ولا تقاريرها:
   - كل مستوى: اسم + نوع (تكتبه مديرة النظام، والأنواع نفسها قائمة قابلة للتعديل)
     + أب (parent_id) + ربط اختياري بجهة موجودة (وحدة/قسم/مكتب) + دخول اختياري.
   - من تدخل بحساب مستوى ترى (اطّلاع فقط، بنفس صفحات الإدارة العليا) كل الوحدات
     تحت هذا المستوى مهما كان العمق: الوحدة المربوطة، ووحدات القسم المربوط، ووحدات
     المكتب المربوط.
   - البيانات بجدول org_levels المستقل؛ أنواع المستويات ضمن theme بإعدادات الموقع. */
const ORG_LEVELS_KEY = "prs:org-levels";
const DEFAULT_LEVEL_TYPES = ["مساعدة", "قسم", "مكتب", "مديرة", "مجلس", "وحدة", "مركز"];
const LEVEL_TYPE_PALETTE = [["#6b2337", "#f6e6eb"], ["#7a4d16", "#fbf0e1"], ["#24527a", "#e6eff7"], ["#5b3a73", "#efe7f5"], ["#2E6B52", "#e7f5ee"], ["#4d5a66", "#eaeef2"], ["#8a3350", "#fbeaf0"], ["#6b5a12", "#f7f1d9"]];
const OL_NEW_KINDS = [{ id: "unit", label: "وحدة" }, { id: "center", label: "مركز" }, { id: "dept", label: "قسم" }, { id: "office", label: "مكتب" }, { id: "exec", label: "إدارة عليا" }];

function orgLevelToRow(l) {
  return { id: l.id, name: l.name || "", level_type: l.type || "", parent_id: l.parentId || "", link_kind: l.linkKind || "", link_id: l.linkId || "",
    login_id: l.loginId || "", password: l.password || "", role_id: l.roleId || "", status: l.status || "active", order_index: Number(l.order) || 0, created_at: l.createdAt || Date.now() };
}
function rowToOrgLevel(r) {
  return { id: r.id, name: r.name || "", type: r.level_type || "", parentId: r.parent_id || "", linkKind: r.link_kind || "", linkId: r.link_id || "",
    loginId: r.login_id || "", password: r.password || "", roleId: r.role_id || "", status: r.status || "active", order: Number(r.order_index) || 0, createdAt: Number(r.created_at) || 0 };
}
function getOrgLevelsLocal() { try { const v = lsGet(ORG_LEVELS_KEY); return v ? JSON.parse(v) : []; } catch (e) { return []; } }
function currentOrgLevels() { return S.orgLevels || (S.orgLevels = getOrgLevelsLocal()); }
function saveOrgLevels(list) {
  S.orgLevels = list;
  saveListTable(ORG_LEVELS_KEY, "org_levels", list, (l) => (l || []).map(orgLevelToRow));
  syncUnitDeptsFromTree();
}
// الهيكل المرن هو المرجع: وحدة موضوعة تحت مستوى مربوط بقسم يصير قسمها هذا القسم تلقائيًا
// (ويتحدّث لو نُقلت). الوحدة اللي ما فوقها قسم في الهيكل تبقى على اختيارها اليدوي.
// الحفظ في القاعدة من حساب يدير المستخدمين فقط؛ البقية تُضبط عندهم في الذاكرة.
function olUnitDeptFromTree(level) {
  let p = olFind(level.parentId), guard = 0;
  while (p && p.linkKind !== "dept" && guard++ < 50) p = olFind(p.parentId);
  return p && p.linkKind === "dept" && (S.departments || []).some((d) => d.id === p.linkId) ? p.linkId : null;
}
function syncUnitDeptsFromTree() {
  if (!Array.isArray(S.units)) return;
  let changed = false;
  olActive().filter((l) => l.linkKind === "unit" && l.linkId).forEach((l) => {
    const u = S.units.find((x) => x.id === l.linkId);
    const dep = u && olUnitDeptFromTree(l);
    if (dep && u.departmentId !== dep) { u.departmentId = dep; changed = true; }
  });
  if (changed && canManageUsers()) dataStore.saveUnits(S.units);
}
async function refreshOrgLevelsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("org_levels");
  const res = await supabaseRequest("org_levels?select=*");
  if (res.ok && Array.isArray(res.data)) {
    S.orgLevels = res.data.map(rowToOrgLevel);
    lsSet(ORG_LEVELS_KEY, JSON.stringify(S.orgLevels));
    syncUnitDeptsFromTree();
  }
}
function levelTypesList() {
  const th = ((S.siteSettings || {}).theme) || {};
  return Array.isArray(th.levelTypes) ? th.levelTypes.slice() : DEFAULT_LEVEL_TYPES.slice();
}
// patch: كائن، أو دالة (theme) => كائن. الدالة تُطبَّق محليًا فورًا، ثم على آخر نسخة في القاعدة وقت الكتابة —
// فتعديل جهاز ما يمسح تعديل جهاز ثاني على مفاتيح ثانية (أو على عناصر ثانية داخل نفس المفتاح).
function saveSiteTheme(patch) {
  const mk = (th) => (typeof patch === "function" ? patch(th || {}) : patch);
  S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
  S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), ...mk(S.siteSettings.theme) } };
  lsSet(SITE_SETTINGS_KEY, JSON.stringify(S.siteSettings));
  if (!dbConnected()) return;
  queueSupabaseTask("site_settings", async () => {
    const res = await supabaseRequest("site_settings?id=eq.main&select=*");
    const base = res.ok && Array.isArray(res.data) && res.data.length ? rowToSiteSettings(res.data[0]) : S.siteSettings;
    const merged = { ...base, theme: { ...(base.theme || {}), ...mk(base.theme) } };
    const up = await supabaseRequest("site_settings", { method: "POST", prefer: "return=minimal,resolution=merge-duplicates", body: JSON.stringify(siteSettingsToRow(merged)) });
    if (!up.ok) { reportSupabaseWriteError("site_settings", up.error); return; }
    S.siteSettings = { ...S.siteSettings, theme: merged.theme };
    lsSet(SITE_SETTINGS_KEY, JSON.stringify(S.siteSettings));
  });
}
function levelTypeChipHtml(type) {
  if (!type) return `<span style="font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;white-space:nowrap;color:#5c4f55;background:${GRAY_BG};">بدون نوع</span>`;
  const types = levelTypesList();
  let i = types.indexOf(type);
  if (i === -1) { i = 0; for (let k = 0; k < type.length; k++) i = (i + type.charCodeAt(k)) % LEVEL_TYPE_PALETTE.length; }
  const c = LEVEL_TYPE_PALETTE[i % LEVEL_TYPE_PALETTE.length];
  return `<span style="font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;white-space:nowrap;color:${c[0]};background:${c[1]};">${esc(type)}</span>`;
}
function olActive() { return currentOrgLevels().filter((l) => l.status !== "deleted"); }
function olChildren(parentId) {
  return olActive().filter((l) => (l.parentId || "") === (parentId || "")).sort((a, b) => (a.order - b.order) || (a.createdAt - b.createdAt));
}
function olFind(id) { return olActive().find((l) => l.id === id) || null; }
function olDescendantIds(id) {
  const out = [];
  const walk = (pid) => olChildren(pid).forEach((c) => { out.push(c.id); walk(c.id); });
  walk(id);
  return out;
}
function olPath(id) {
  const path = []; let cur = olFind(id); const seen = new Set();
  while (cur && !seen.has(cur.id)) { seen.add(cur.id); path.unshift(cur); cur = cur.parentId ? olFind(cur.parentId) : null; }
  return path;
}
function olLinkedEntity(l) {
  if (!l || !l.linkKind || !l.linkId) return null;
  if (l.linkKind === "office") { const o = (S.offices || []).find((x) => x.id === l.linkId); return o ? { name: o.name, kind: "مكتب" } : { name: "(جهة محذوفة)", kind: "مكتب" }; }
  if (l.linkKind === "dept") { const d = (S.departments || []).find((x) => x.id === l.linkId); return d ? { name: d.name, kind: "قسم" } : { name: "(جهة محذوفة)", kind: "قسم" }; }
  const u = (S.units || []).find((x) => x.id === l.linkId); return u ? { name: u.name, kind: u.role === "center" ? "مركز" : u.role === "executive" ? "إدارة عليا" : "وحدة" } : { name: "(جهة محذوفة)", kind: "وحدة" };
}
// نوع الجهة المربوطة بلغة صفحات الحسابات (unit / dept / office / exec) + الجهة نفسها
function olEntityRef(l) {
  if (!l || !l.linkKind || !l.linkId) return null;
  if (l.linkKind === "unit") { const u = (S.units || []).find((x) => x.id === l.linkId); return u ? { type: u.role === "executive" ? "exec" : "unit", e: u } : null; }
  const e = treeEntity(l.linkKind, l.linkId);
  return e ? { type: l.linkKind, e } : null;
}
// يحدّث "يتبع" في حساب الجهة نفسه حسب أقرب جهة فوقها بالشجرة (وحدة ← قسم، قسم ← مكتب،
// مكتب ← مكتب/إدارة عليا) — حتى تبقى صلاحيات الأقسام والمكاتب متوافقة مع الشجرة.
// لا يمسح ربطًا موجودًا لو ما فيه جهة مناسبة فوقها.
function olSyncEntityParent(levelId) {
  const ref = olEntityRef(olFind(levelId)); if (!ref) return;
  const ups = olPath(levelId).slice(0, -1).reverse().map(olEntityRef).filter(Boolean);
  if (ref.type === "unit") { const d = ups.find((x) => x.type === "dept"); if (d && ref.e.departmentId !== d.e.id) treeSetEntity("unit", ref.e.id, { departmentId: d.e.id }); }
  else if (ref.type === "dept") { const o = ups.find((x) => x.type === "office"); if (o && ref.e.officeId !== o.e.id) treeSetEntity("dept", ref.e.id, { officeId: o.e.id }); }
  else if (ref.type === "office") { const o = ups.find((x) => x.type === "office" || x.type === "exec"); if (o && ref.e.parentOfficeId !== o.e.id) treeSetEntity("office", ref.e.id, { parentOfficeId: o.e.id }); }
}
function olSyncSubtree(levelId) { [levelId, ...olDescendantIds(levelId)].forEach(olSyncEntityParent); }
// الصفحات اللي تشتغل لحساب مستوى (يرى عدة وحدات) — أي صفحة أخرى بالدور تُتجاهل له.
const LEVEL_COMPATIBLE_PAGES = ["dashboard", "executive-dashboard", "custom-path-inbox", "all-reports", "executive-summary", "executive-final-report"];
function levelRoleSummary(roleId) {
  if (!roleId) return null;
  const role = rolesList().find((r) => r.id === roleId);
  if (!role) return { name: "(دور محذوف)", pages: [] };
  const pages = normalizeDashboardPages(rolePermsOf(role).pages).filter((p) => LEVEL_COMPATIBLE_PAGES.includes(p));
  return { name: role.name, pages };
}
// كل الوحدات (النشطة، الحقيقية) تحت مستوى معيّن — يشمل المستوى نفسه وكل ما تحته.
function olScopeUnitIds(levelId) {
  const ids = new Set();
  const isReal = (u) => u && u.status === "active" && u.role !== "admin" && u.role !== "executive";
  [levelId, ...olDescendantIds(levelId)].forEach((id) => {
    const l = olFind(id);
    if (!l || !l.linkKind || !l.linkId) return;
    if (l.linkKind === "unit") { const u = (S.units || []).find((x) => x.id === l.linkId); if (isReal(u)) ids.add(u.id); }
    else if (l.linkKind === "dept") (S.units || []).filter((u) => u.departmentId === l.linkId && isReal(u)).forEach((u) => ids.add(u.id));
    else if (l.linkKind === "office") officeUnitsBase(l.linkId).filter(isReal).forEach((u) => ids.add(u.id));
  });
  return ids;
}
// نطاق حساب المستوى الحالي (null لكل الحسابات الأخرى = بلا أي تغيير)
function scopeUnitsFilter(list) { return S.levelScope ? (list || []).filter((u) => S.levelScope.unitIds.has(u.id)) : list; }
function scopeDeptsFilter(list) {
  if (!S.levelScope) return list;
  const d = new Set((S.units || []).filter((u) => S.levelScope.unitIds.has(u.id)).map((u) => u.departmentId));
  return (list || []).filter((x) => d.has(x.id));
}

/* ---- الصفحة ---- */
function olUi() { return S.ui.ol || (S.ui.ol = { selected: null, collapsed: {}, form: null, confirmDelete: null, typeEdit: null, typeDelete: null, msg: "" }); }
function olRowHtml(l, depth) {
  const ui = olUi();
  const kids = olChildren(l.id);
  const open = !ui.collapsed[l.id];
  const sel = ui.selected === l.id;
  const linked = olLinkedEntity(l);
  const desc = olDescendantIds(l.id).length;
  return `<div style="display:flex;align-items:center;gap:4px;border-radius:10px;padding:2px 4px;padding-right:${4 + depth * 24}px;background:${sel ? "#f6e6eb" : "transparent"};box-shadow:${sel ? `inset -3px 0 0 ${ROSE}` : "none"};">
      ${kids.length ? `<button type="button" class="icon-btn" style="width:30px;height:30px;background:transparent;" data-action="ol-toggle" data-id="${esc(l.id)}" aria-label="فتح أو إغلاق ما تحته"><span style="display:inline-flex;transition:transform .15s;transform:rotate(${open ? 0 : 90}deg);">${iconChevronDown(13, SUBTLE)}</span></button>` : `<span style="width:30px;flex-shrink:0;text-align:center;color:#d6c3ca;">•</span>`}
      <button type="button" data-action="ol-select" data-id="${esc(l.id)}" style="flex:1;min-width:0;min-height:40px;display:flex;align-items:center;gap:8px;border:none;background:transparent;text-align:right;cursor:pointer;padding:0 4px;font-family:inherit;color:${INK};">
        ${levelTypeChipHtml(l.type)}
        <span style="font-size:13px;font-weight:${kids.length || depth < 1 ? 800 : 600};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(l.name)}</span>
        ${linked ? `<span style="font-size:10px;font-weight:700;color:#2E7A5C;background:${GREEN_BG};padding:2px 8px;border-radius:999px;white-space:nowrap;">${esc(linked.kind)} موجود</span>` : ""}
        ${l.loginId ? (l.status === "disabled" ? `<span style="font-size:10px;font-weight:700;color:${DANGER};background:${DANGER_BG};padding:2px 8px;border-radius:999px;white-space:nowrap;">الدخول معطّل</span>` : `<span title="له حساب دخول" style="display:inline-flex;">${iconKey(13, SUBTLE)}</span>`) : ""}
        <span style="margin-right:auto;font-size:11px;color:#7a6870;white-space:nowrap;">${desc ? desc + " تحته" : ""}</span>
      </button>
    </div>
    ${kids.length && open ? kids.map((c) => olRowHtml(c, depth + 1)).join("") : ""}`;
}
function olParentOptionsHtml(selectedId, excludeId) {
  const banned = excludeId ? new Set([excludeId, ...olDescendantIds(excludeId)]) : new Set();
  const opts = [];
  const walk = (pid, depth) => olChildren(pid).forEach((l) => { if (banned.has(l.id)) return; opts.push(`<option value="${esc(l.id)}" ${l.id === selectedId ? "selected" : ""}>${"— ".repeat(depth)}${esc(l.name)}${l.type ? " (" + esc(l.type) + ")" : ""}</option>`); walk(l.id, depth + 1); });
  walk("", 0);
  return `<option value="" ${!selectedId ? "selected" : ""}>— أعلى الهيكل (بدون أب)</option>${opts.join("")}`;
}
// كل الجهات من النوع المختار — المعطّلة يُكتب بجانبها «معطّل»، والمربوطة بمستوى آخر يُكتب اسمه (الحفظ ينقل الربط)
function olLinkEntityOptions(kind, selfLevelId, curLinkId) {
  const taken = new Map(olActive().filter((l) => l.id !== selfLevelId && l.linkKind === kind && l.linkId).map((l) => [l.linkId, l.name]));
  const off = (e) => (e.status === "disabled" ? { ...e, name: e.name + " (معطّل)" } : e);
  let list = [];
  if (kind === "office") list = (S.offices || []).map(off);
  else if (kind === "dept") list = (S.departments || []).map(off);
  else if (kind === "unit") list = (S.units || []).filter((u) => u.role !== "admin" && u.role !== "self_report").map((u) => off(u.role === "executive" ? { ...u, name: u.name + " (إدارة عليا)" } : u.role === "center" ? { ...u, name: u.name + " (مركز)" } : u));
  return list.map((e) => (taken.has(e.id) && e.id !== curLinkId ? { ...e, name: e.name + " — مربوطة بـ «" + taken.get(e.id) + "» (سيُنقل الربط)" } : e));
}
// «وش هذا المربع؟» — ثلاث بطاقات بدل خانات الربط والدخول
const OL_CARDS = [
  { id: "acc", title: "يكتب تقارير أو له حساب", sub: "وحدة، مركز، قسم، مكتب", color: "#2E6B52", bg: "#eef8f2" },
  { id: "mgr", title: "مسؤولة تشوف وتعتمد", sub: "مثل المساعدة ومديرة الشؤون", color: "#4b3d7a", bg: "#f3f0fa" },
  { id: "org", title: "للتنظيم فقط", sub: "مثل السكرتارية والمجالس", color: "#6f5f66", bg: "#f6f0f2" }];
const OL_ENT_GROUPS = [{ kind: "office", label: "مكاتب" }, { kind: "dept", label: "أقسام" }, { kind: "unit", label: "وحدات ومراكز وإدارة عليا" }];
function olFormCard(f) { return f.card || (f.linkKind ? "acc" : f.loginId ? "mgr" : "org"); }
function olEntityTypeLabel(kind, id) {
  if (kind === "office") return "مكتب";
  if (kind === "dept") return "قسم";
  const u = (S.units || []).find((x) => x.id === id);
  return u && u.role === "center" ? "مركز" : u && u.role === "executive" ? "إدارة عليا" : "وحدة";
}
// النوع يتعبّى لحاله حسب البطاقة/الحساب — إلا لو المستخدمة اختارته بنفسها
function olAutoType(f) {
  if (f.typeNewMode || (f.type && !f.typeAuto)) return;
  const card = olFormCard(f);
  const t = card === "acc" && f.linkKind && f.linkKind !== "new" && f.linkId ? olEntityTypeLabel(f.linkKind, f.linkId)
    : card === "acc" && f.linkKind === "new" ? ({ unit: "وحدة", center: "مركز", dept: "قسم", office: "مكتب", exec: "إدارة عليا" }[f.newKind || "unit"])
    : card === "mgr" ? "مديرة" : "";
  if (t) { f.type = t; f.typeAuto = true; }
}
function olFormHtml() {
  const ui = olUi(); const f = ui.form;
  const types = levelTypesList();
  const card = olFormCard(f);
  const usedBy = (f.linkKind && f.linkId) ? olActive().find((l) => l.id !== f.id && l.linkKind === f.linkKind && l.linkId === f.linkId) : null;
  return `<div class="card card-lg">
    <div class="prs-title" style="font-size:15px;font-weight:800;margin-bottom:14px;">${f.mode === "edit" ? "تعديل مستوى" : "إضافة مستوى"}</div>
    ${ui.formError ? `<div class="error-box">${esc(ui.formError)}</div>` : ""}
    <div class="field"><label class="field-label" for="ol-f-name">الاسم <span class="req-star">*</span></label><input class="input" id="ol-f-name" value="${esc(f.name || "")}" placeholder="مثال: مديرة الشؤون التعليمية" /></div>
    <div class="field"><label class="field-label" for="ol-f-parent">يتبع</label><select class="input" id="ol-f-parent">${olParentOptionsHtml(f.parentId, f.mode === "edit" ? f.id : null)}</select></div>
    <div class="field-label" style="margin-bottom:8px;">وش هذا المربع؟</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">${OL_CARDS.map((c) => { const on = card === c.id; return `<button type="button" data-action="ol-form-card" data-card="${c.id}" style="flex:1 1 150px;text-align:right;padding:12px;border-radius:14px;cursor:pointer;font-family:inherit;color:${INK};border:2px solid ${on ? c.color : BORDER};background:${on ? c.bg : "#fff"};"><div style="font-size:13.5px;font-weight:800;">${on ? "✓ " : ""}${esc(c.title)}</div><div style="font-size:11.5px;color:#6f5f66;margin-top:4px;line-height:1.7;">${esc(c.sub)}</div></button>`; }).join("")}</div>
    ${card === "acc" ? `<div style="background:#f3faf6;border-radius:14px;padding:12px;margin-bottom:12px;display:flex;flex-direction:column;gap:8px;">
      <label class="field-label" for="ol-f-ent" style="margin:0;">اختاري حسابه</label>
      <select class="input" id="ol-f-ent" data-action="ol-form-refresh"><option value="">اختاري…</option>
        ${OL_ENT_GROUPS.map((g) => { const list = olLinkEntityOptions(g.kind, f.id, f.linkId).filter(g.only || (() => true)); return list.length ? `<optgroup label="${esc(g.label)}">${list.map((e) => `<option value="${g.kind}:${esc(e.id)}" ${f.linkKind === g.kind && f.linkId === e.id ? "selected" : ""}>${esc(e.name)}</option>`).join("")}</optgroup>` : ""; }).join("")}
        <option value="new" ${f.linkKind === "new" ? "selected" : ""}>＋ ما له حساب — أنشئ حساب جديد</option>
      </select>
      ${f.linkKind === "new" ? `<select class="input" id="ol-f-new-kind" aria-label="نوع الحساب">${OL_NEW_KINDS.map((k) => `<option value="${k.id}" ${(f.newKind || "unit") === k.id ? "selected" : ""}>حساب ${esc(k.label)}</option>`).join("")}</select>
        <div class="row-flex"><input class="input" id="ol-f-acc-pass" value="${esc(f.accPass || "")}" placeholder="كلمة سر الحساب" autocomplete="off" /><input class="input" id="ol-f-acc-email" type="email" value="${esc(f.accEmail || "")}" placeholder="الإيميل (اختياري)" /></div>
        <div class="hint" style="margin:0;">اسم الدخول = اسم المستوى أعلاه.</div>`
        : `<div class="hint" style="margin:0;">الحساب يبقى بتقاريره كما هو — الربط يحطه في مكانه بالشجرة فقط.</div>`}
      ${usedBy ? `<div class="hint bad" style="margin:0;">هذا الحساب مربوط أصلًا بـ "${esc(usedBy.name)}" — الحفظ ينقل الربط إلى هنا.</div>` : ""}
    </div>` : card === "mgr" ? `<div style="background:#f3f0fa;border-radius:14px;padding:12px;margin-bottom:12px;">
      <div class="row-flex">
        <div class="field"><label class="field-label" for="ol-f-login">اسم المستخدم</label><input class="input" id="ol-f-login" value="${esc(f.loginId || "")}" autocomplete="off" /></div>
        <div class="field"><label class="field-label" for="ol-f-pass">كلمة السر</label><input class="input" id="ol-f-pass" value="${esc(f.password || "")}" autocomplete="off" /></div>
      </div>
      <div class="field" style="margin-bottom:0;"><label class="field-label" for="ol-f-role">الصلاحيات</label>
      <select class="input" id="ol-f-role" data-action="ol-form-refresh">
        <option value="" ${!f.roleId ? "selected" : ""}>بدون دور — لا يرى أي صفحة</option>
        ${rolesList().filter((r) => r.status !== "disabled").map((r) => `<option value="${esc(r.id)}" ${f.roleId === r.id ? "selected" : ""}>حسب دور: ${esc(r.name)}</option>`).join("")}
      </select>
      ${(() => { const rs = levelRoleSummary(f.roleId); if (!rs) return `<div class="hint">لا توجد صفحات افتراضية — اختاري دورًا يحدد الصفحات (مثل لوحة المعلومات، جميع التقارير، الملخص، التقرير النهائي) وتظهر على وحدات ما تحته فقط.</div>`;
        const lbl = (id) => ((SIDEBAR_PAGES.find((x) => x.id === id) || {}).label || id);
        return `<div class="hint">الصفحات: ${rs.pages.length ? rs.pages.map((x) => esc(lbl(x))).join("، ") : "لا توجد صفحات مناسبة لحساب مستوى بهذا الدور — لن يرى شيئًا"}.<br>الاعتماد / الإعادة / التعديل: هذا المستوى يطلع في المسار التلقائي لكل الوحدات اللي تحته في الهيكل — وش يسوي تحددينه من «كل المسارات».<br>تعديل صفحات وأزرار الدور نفسه من زر «الأدوار والصلاحيات» أعلى الصفحة.</div>`; })()}
    </div>
      <div class="hint" style="margin:0;">تشوف وتعتمد تقارير الوحدات اللي تحتها في الهيكل فقط — وتطلع في مسارهم تلقائيًا.</div>
    </div>` : `<div style="background:${GRAY_BG};border-radius:14px;padding:12px;margin-bottom:12px;font-size:12.5px;color:#4b3d44;">ما يحتاج شي ثاني — اضغطي «حفظ». التقارير ما تمر عليه.</div>`}
    <div class="field"><label class="field-label" for="ol-f-type">النوع <span style="font-weight:500;color:#6f5f66;font-size:11.5px;">(يتعبّى لحاله — تقدرين تغيرينه)</span></label>
      <select class="input" id="ol-f-type" data-action="ol-form-refresh">
        <option value="" ${!f.typeNewMode && !f.type ? "selected" : ""}>بدون نوع</option>
        ${types.map((t) => `<option value="${esc(t)}" ${!f.typeNewMode && f.type === t ? "selected" : ""}>${esc(t)}</option>`).join("")}
        <option value="__new" ${f.typeNewMode ? "selected" : ""}>+ نوع جديد…</option>
      </select>
      ${f.typeNewMode ? `<input class="input" id="ol-f-type-new" style="margin-top:8px;" value="${esc(f.typeNew || "")}" placeholder="اكتبي النوع الجديد (يُضاف لقائمة الأنواع)" />` : ""}
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${pillBtn("حفظ", { icon: iconCheck(14, "#fff"), action: "ol-save" })}
      ${pillBtn("إلغاء", { variant: "ghost", action: "ol-cancel-form" })}
    </div>
  </div>`;
}
function olDetailsHtml(l) {
  const ui = olUi();
  const path = olPath(l.id);
  const parent = path.length > 1 ? path[path.length - 2].name : "— (أعلى الهيكل)";
  const linked = olLinkedEntity(l);
  const kids = olChildren(l.id);
  const desc = olDescendantIds(l.id).length;
  const unitCount = olScopeUnitIds(l.id).size;
  const confirm = ui.confirmDelete === l.id;
  const box = (v, label) => `<div style="background:#f6f0f2;border-radius:12px;padding:10px;text-align:center;"><div style="font-size:20px;font-weight:900;color:${ROSE};">${v}</div><div style="font-size:11px;color:#6f5f66;">${label}</div></div>`;
  const kv = (k, v) => `<div style="display:flex;justify-content:space-between;gap:10px;font-size:12.5px;"><span style="color:#6f5f66;">${k}</span><span style="font-weight:700;text-align:left;">${v}</span></div>`;
  return `<div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;">${box(kids.length, "تحته مباشرة")}${box(desc, "كل ما تحته")}${box(unitCount, "وحدة تصلها تقاريرها")}</div>
    <div style="border-top:1px solid ${BORDER};padding-top:10px;display:flex;flex-direction:column;gap:8px;">
      ${kv("يتبع", esc(parent))}
      ${kv("مربوط بـ", linked ? `${esc(linked.kind)}: ${esc(linked.name)}` : "مستوى جديد — بدون جهة سابقة")}
      ${kv("دخول خاص", l.loginId ? `اسم المستخدم: ${esc(l.loginId)}${l.status === "disabled" ? ` <span style="color:${DANGER};">(معطّل)</span>` : ""}` : "لا يوجد")}
      ${l.loginId ? kv("الصلاحيات", (() => { const rs = levelRoleSummary(l.roleId); return rs ? `حسب دور: ${esc(rs.name)}` : "بدون دور — لا يرى شيئًا"; })()) : ""}
    </div>
    ${confirm ? `<div style="background:${DANGER_BG};border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:12.5px;font-weight:800;color:${DANGER};">حذف "${esc(l.name)}"؟</div>
        <div style="font-size:11.5px;color:#5c4f55;line-height:1.8;">يُحذف من الشجرة فقط${linked ? ` — ${esc(linked.kind)} "${esc(linked.name)}" يبقى بحسابه وتقاريره` : ""}.</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${kids.length ? pillBtn("حذف ونقل ما تحته للأعلى", { variant: "danger", action: "ol-delete", data: { id: l.id, mode: "lift" } }) + pillBtn(`حذف مع كل ما تحته (${desc})`, { variant: "danger", action: "ol-delete", data: { id: l.id, mode: "all" } }) : pillBtn("حذف", { variant: "danger", action: "ol-delete", data: { id: l.id, mode: "all" } })}
          ${pillBtn("تراجع", { variant: "ghost", action: "ol-cancel-delete" })}
        </div>
      </div>` : `<div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${pillBtn("مستوى تحته", { icon: iconPlus(14, "#fff"), action: "ol-start-add", data: { parent: l.id } })}
        ${pillBtn("تعديل / نقل", { variant: "ghost", icon: iconPencil(13, INK), action: "ol-start-edit", data: { id: l.id } })}
        ${pillBtn("↑", { variant: "ghost", action: "ol-move-order", data: { id: l.id, dir: "-1" } })}
        ${pillBtn("↓", { variant: "ghost", action: "ol-move-order", data: { id: l.id, dir: "1" } })}
        ${l.loginId ? pillBtn(l.status === "disabled" ? "تفعيل الدخول" : "تعطيل الدخول", { variant: l.status === "disabled" ? "soft" : "ghost", icon: iconPower(13, l.status === "disabled" ? GREEN : INK), action: "ol-toggle-login", data: { id: l.id } }) : ""}
        ${pillBtn("حذف", { variant: "danger", icon: iconTrash(13, DANGER), action: "ol-confirm-delete", data: { id: l.id } })}
      </div>`}
  </div>`;
}
// تبويب "البيانات والحساب": حساب الجهة المربوطة (الاسم/الإيميل/كلمة السر/التفعيل/الحذف) + الدخول المباشر
function olAccountHtml(l) {
  const ref = olEntityRef(l);
  if (!ref) return `<div style="border-top:1px solid ${BORDER};padding-top:12px;font-size:12px;color:#6f5f66;line-height:1.9;">${l.linkKind ? "الجهة المربوطة حُذفت — اربطيه بجهة أخرى أو أنشئي حسابًا من «تعديل / نقل»." : "هذا المستوى بدون حساب جهة. لإنشاء حساب له (وحدة/قسم/مكتب…): «تعديل / نقل» ← «+ إنشاء حساب جديد»."}</div>`;
  const { type, e } = ref;
  const key = type + ":" + e.id;
  const on = e.status !== "disabled";
  const confirming = S.ui.treeConfirmDel && S.ui.treeConfirmDel.type === type && S.ui.treeConfirmDel.id === e.id;
  const reportsN = type === "unit" || type === "exec" ? ensureUnitReportsLoaded(e.id).length : 0;
  return `<div style="border-top:1px solid ${BORDER};padding-top:12px;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;"><span style="font-size:13.5px;font-weight:800;">حساب الجهة</span>${structPanelTagHtml(type === "exec" ? "exec" : type, e)}
      <span style="font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;color:${on ? "#2E7A5C" : DANGER};background:${on ? GREEN_BG : DANGER_BG};">${on ? "مفعّل" : "معطّل"}</span></div>
    <div style="font-size:12.5px;line-height:1.9;"><span style="color:#6f5f66;">اسم الدخول:</span> <b>${esc(e.name)}</b>${e.email ? `<br><span style="color:#6f5f66;">الإيميل:</span> ${esc(e.email)}` : ""}</div>
    ${treeEditFormHtml(type, e.id)}
    ${confirming ? `<div style="background:${DANGER_BG};border-radius:12px;padding:10px 12px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:12px;font-weight:800;color:${DANGER};">حذف حساب "${esc(e.name)}" نهائيًا${reportsN ? ` مع تقاريره (${reportsN})` : ""}؟ لا يمكن التراجع.</span>
        ${pillBtn("حذف نهائي", { variant: "danger", action: "tree-delete", data: { type, id: e.id } })}${pillBtn("تراجع", { variant: "ghost", action: "tree-cancel-delete" })}</div>`
      : `<div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${pillBtn("تعديل الحساب", { variant: "ghost", icon: iconPencil(13, INK), action: "tree-edit-start", data: { type, id: e.id } })}
        ${pillBtn(on ? "تعطيل الحساب" : "تفعيل الحساب", { variant: on ? "ghost" : "soft", icon: iconPower(13, on ? INK : GREEN), action: "ol-entity-status", data: { type, id: e.id } })}
        ${STRUCT_OWNER_KIND[type] ? pillBtn("نسخ الإعداد من جهة أخرى", { variant: "ghost", action: "struct-copy-open", data: { key } }) : ""}
        ${pillBtn("حذف الحساب", { variant: "danger", icon: iconTrash(13, DANGER), action: "tree-confirm-delete", data: { type, id: e.id } })}
      </div>`}
    ${STRUCT_OWNER_KIND[type] ? structSimpleCopyHtml(type, e, key) : ""}
    ${STRUCT_OWNER_KIND[type] ? `<div style="font-size:13px;font-weight:800;margin-top:4px;">أنواع الدخول المباشر لهذه الجهة</div>${structSimpleRoleCardsHtml(type, e)}` : ""}
    ${type === "exec" ? `<div style="font-size:13px;font-weight:800;margin-top:4px;">صفحات هذا الحساب (من أدواره — بدون افتراضي)</div>${structSimpleRoleCardsHtml("unit", e)}${accountRolesPerms(e).count ? "" : `<div class="hint bad" style="margin:0;">بدون دور: هذا الحساب لا يرى أي صفحة.</div>`}` : ""}
  </div>`;
}
const OL_TABS = [{ id: "info", label: "البيانات والحساب" }, { id: "people", label: "الأشخاص" }, { id: "paths", label: "المسارات" }, { id: "link", label: "رابط الدخول" }];
function olSidePanelHtml(l) {
  const ui = olUi();
  const tab = OL_TABS.some((t) => t.id === ui.tab) ? ui.tab : "info";
  const ref = olEntityRef(l);
  const linked = olLinkedEntity(l);
  const path = olPath(l.id);
  const needEntity = (what) => `<div style="font-size:12.5px;color:#6f5f66;line-height:2;padding:6px 2px;">${what} تكون للجهات اللي لها حساب (وحدة، قسم، مكتب). هذا المستوى ${ref && ref.type === "exec" ? "حساب إدارة عليا" : "بدون حساب جهة"}.<br>${ref ? "" : "لإنشاء حساب له: تبويب «البيانات والحساب» ← «تعديل / نقل» ← «+ إنشاء حساب جديد»."}</div>`;
  let body = "";
  if (tab === "info") body = olDetailsHtml(l) + olAccountHtml(l);
  else if (tab === "people") body = ref && STRUCT_OWNER_KIND[ref.type]
    ? `${S.ui.structPersonAdd === ref.type + ":" + ref.e.id ? "" : `<div style="margin-bottom:10px;">${pillBtn("إضافة شخص", { icon: iconPlus(14, "#fff"), action: "struct-person-add-open", data: { key: ref.type + ":" + ref.e.id } })}</div>`}${structSimplePeopleHtml(ref.type, ref.e, ref.type + ":" + ref.e.id)}`
    : needEntity("الأشخاص");
  else if (tab === "paths") body = ref && STRUCT_OWNER_KIND[ref.type] ? structPanelPathTabHtml(ref.type, ref.e) : needEntity("مسارات الاعتماد");
  else body = `${l.loginId ? entryLinkPanelHtml("level", l.id, "رابط دخول هذا المستوى") : ""}${linked && l.linkKind && l.linkId && linked.name !== "(جهة محذوفة)" ? entryLinkPanelHtml(l.linkKind, l.linkId, `رابط دخول ${linked.kind}: ${linked.name}`) : ""}${!l.loginId && !(linked && linked.name !== "(جهة محذوفة)") ? `<div style="font-size:12.5px;color:#6f5f66;">لا يوجد دخول لهذا المستوى بعد — أضيفي له حساب جهة أو دخولًا خاصًا من «تعديل / نقل».</div>` : ""}`;
  return `<div class="card card-lg" style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:flex;align-items:center;gap:10px;">
      ${entryIconHtml(l.loginId ? entryKey("level", l.id) : (l.linkKind && l.linkId ? entryKey(l.linkKind, l.linkId) : "level:" + l.id), 44)}
      <div style="min-width:0;"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">${levelTypeChipHtml(l.type)}<span style="font-size:17px;font-weight:900;line-height:1.5;">${esc(l.name)}</span></div>
      <div style="font-size:11.5px;color:#6f5f66;line-height:1.8;">${path.map((p) => esc(p.name)).join("  ›  ")}</div></div>
    </div>
    <div role="tablist" style="display:flex;gap:4px;background:${GRAY_BG};padding:4px;border-radius:12px;flex-wrap:wrap;">
      ${OL_TABS.map((t) => `<button type="button" role="tab" data-action="ol-tab" data-tab="${t.id}" style="flex:1;min-width:80px;min-height:38px;border:none;border-radius:9px;font-family:inherit;font-size:12.5px;cursor:pointer;font-weight:${tab === t.id ? 800 : 600};background:${tab === t.id ? "#fff" : "transparent"};color:${tab === t.id ? ROSE : "#5c4f55"};box-shadow:${tab === t.id ? "0 1px 3px rgba(107,35,55,.12)" : "none"};">${t.label}</button>`).join("")}
    </div>
    ${body}
  </div>`;
}
// الجهات اللي ما دخلت الشجرة بعد + حسابات مديرة النظام
// جهة لها حساب وليست في الشجرة: إضافة للشجرة، تعطيل/تفعيل الحساب، حذف
function olEntityRecord(x) {
  return x.linkKind === "office" ? (S.offices || []).find((o) => o.id === x.id) : x.linkKind === "dept" ? (S.departments || []).find((d) => d.id === x.id) : (S.units || []).find((u) => u.id === x.id);
}
function olUnlinkedChipHtml(x) {
  const rec = olEntityRecord(x) || {};
  const off = rec.status === "disabled";
  const key = x.linkKind + ":" + x.id;
  const toggleAction = x.linkKind === "office" ? "toggle-office" : x.linkKind === "dept" ? "toggle-department" : "toggle-unit";
  const small = `display:inline-flex;align-items:center;justify-content:center;min-width:36px;height:36px;border:none;border-inline-start:1px solid ${BORDER};background:transparent;cursor:pointer;font-family:inherit;font-size:11.5px;color:${INK};padding:0 10px;`;
  return `<span style="display:inline-flex;align-items:center;border:1px solid ${S.ui.olUnlinkedDel === key ? DANGER : BORDER};border-radius:999px;background:${off ? GRAY_BG : "#fff"};overflow:hidden;">
    <button type="button" data-action="ol-add-entity" data-key="${esc(key)}" title="إضافة للشجرة" style="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:none;background:transparent;font-family:inherit;font-size:12px;cursor:pointer;color:${INK};"><span style="color:#6f5f66;">${esc(x.kind)}</span><b style="${off ? "opacity:.6;" : ""}">${esc(x.name)}</b>${off ? `<span style="font-size:10.5px;color:#7a4d16;">(معطّل)</span>` : ""}${iconPlus(12, ROSE)}</button>
    <button type="button" data-action="${toggleAction}" data-id="${esc(x.id)}" style="${small}" title="${off ? "تفعيل الحساب" : "تعطيل الحساب"}">${off ? "تفعيل" : "تعطيل"}</button>
    <button type="button" data-action="ol-unlinked-del-ask" data-key="${esc(key)}" style="${small}color:${DANGER};" title="حذف الحساب" aria-label="حذف ${esc(x.name)}">${iconTrash(13, DANGER)}</button>
  </span>`;
}
function olUnlinkedDeleteHtml(list) {
  const key = S.ui.olUnlinkedDel;
  const x = key && list.find((e) => e.linkKind + ":" + e.id === key);
  if (!x) return "";
  const type = x.linkKind === "office" ? "office" : x.linkKind === "dept" ? "dept" : "unit";
  const reports = type === "unit" ? ensureUnitReportsLoaded(x.id).length : 0;
  const under = type === "dept" ? (S.units || []).filter((u) => u.departmentId === x.id).length : type === "office" ? (S.departments || []).filter((d) => d.officeId === x.id).length : 0;
  const step2 = S.ui.olUnlinkedDelStep === 2;
  const msg = type === "unit"
    ? (reports ? `⚠️ هذا الحساب له <b>${reports}</b> تقرير، و<b>حذفه يحذف تقاريره من القاعدة نهائيًا</b>. إذا تبين تحتفظين بها، استخدمي «تعطيل» بدل الحذف.` : "ما له تقارير. يُحذف الحساب نهائيًا.")
    : `ما تُحذف أي تقارير.${under ? ` ${under} ${type === "dept" ? "وحدة تتبعه تصير" : "قسم يتبعه يصير"} بدون ${type === "dept" ? "قسم" : "مكتب"}.` : ""}`;
  const needTwo = type === "unit" && reports > 0;
  return `<div style="margin-top:12px;border:1.5px solid ${DANGER};border-radius:14px;padding:12px 14px;background:#fff;display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:13px;font-weight:800;">حذف حساب «${esc(x.name)}» (${esc(x.kind)})؟</div>
    <div style="font-size:12px;line-height:1.9;color:#5c4f55;">${msg}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      ${needTwo && !step2 ? pillBtn("متابعة الحذف", { variant: "danger", action: "ol-unlinked-del-next" }) : pillBtn(needTwo ? `تأكيد نهائي — حذف الحساب و${reports} تقرير` : "نعم، احذفي الحساب", { variant: "danger", action: "tree-delete", data: { type, id: x.id } })}
      ${pillBtn("إلغاء", { variant: "ghost", action: "ol-unlinked-del-cancel" })}
    </div>
  </div>`;
}
// ===== إدخال شجرة من نص =====
// كل سطر = مستوى، وعدد «-» في بدايته = عمقه. اختياري: «الاسم = اسم الجهة | النوع».
// يُربط تلقائيًا بالجهة اللي لها نفس الاسم (أو الاسم بدون «مديرة»)، ويُعاد استخدام المستوى الموجود
// بنفس الاسم بدل ما يتكرر. ما يحذف أي مستوى ولا حساب — المستويات اللي ما ذُكرت تبقى كما هي.
function olNorm(x) { return String(x || "").replace(/\s+/g, " ").trim(); }
function olStripTitle(x) { return olNorm(x).replace(/^(مديرة|مدير|مديرية)\s+/, ""); }
function olEntityByName(name) {
  const n = olNorm(name); if (!n) return null;
  const o = (S.offices || []).find((x) => olNorm(x.name) === n); if (o) return { linkKind: "office", id: o.id, name: o.name, kind: "مكتب" };
  const d = (S.departments || []).find((x) => olNorm(x.name) === n); if (d) return { linkKind: "dept", id: d.id, name: d.name, kind: "قسم" };
  const u = (S.units || []).find((x) => x.role !== "admin" && x.role !== "self_report" && olNorm(x.name) === n);
  if (u) return { linkKind: "unit", id: u.id, name: u.name, kind: u.role === "center" ? "مركز" : u.role === "executive" ? "إدارة عليا" : "وحدة" };
  return null;
}
function olParsePasteTree(text) {
  const lines = []; let prev = -1;
  String(text || "").split(/\r?\n/).forEach((raw) => {
    const m = raw.match(/^[\s\-]*/); const lead = m ? m[0] : "";
    let body = raw.slice(lead.length).trim(); if (!body) return;
    let depth = (lead.match(/-/g) || []).length;
    if (depth > prev + 1) depth = prev + 1;
    prev = depth;
    let type = "", ent = "";
    const bar = body.indexOf("|"); if (bar !== -1) { type = olNorm(body.slice(bar + 1)); body = body.slice(0, bar); }
    const eq = body.indexOf("="); if (eq !== -1) { ent = olNorm(body.slice(eq + 1)); body = body.slice(0, eq); }
    const name = olNorm(body); if (name) lines.push({ name, type, ent, depth });
  });
  return lines;
}
// يرجع خطة التطبيق بدون ما يغيّر شي (للمعاينة)
function olPastePlan(text) {
  const lines = olParsePasteTree(text);
  const levels = olActive();
  const claimedLv = new Set(), claimedEnt = new Set();
  const plan = lines.map((ln) => {
    let e = ln.ent ? olEntityByName(ln.ent) : null;
    if (!e && !ln.ent) e = olEntityByName(ln.name) || olEntityByName(olStripTitle(ln.name));
    let warn = ln.ent && !e ? `ما لقيت جهة باسم «${ln.ent}» — يصير تنظيم فقط` : "";
    if (e && claimedEnt.has(e.linkKind + ":" + e.id)) { warn = `«${e.name}» مربوطة بسطر قبله — هذا يصير تنظيم فقط`; e = null; }
    if (e) claimedEnt.add(e.linkKind + ":" + e.id);
    const names = [ln.name, olStripTitle(ln.name), ln.ent].filter(Boolean).map(olNorm);
    let lv = levels.find((l) => !claimedLv.has(l.id) && names.includes(olNorm(l.name)));
    if (!lv && e) lv = levels.find((l) => !claimedLv.has(l.id) && l.linkKind === e.linkKind && l.linkId === e.id);
    if (lv) claimedLv.add(lv.id);
    return { ...ln, entity: e, level: lv || null, warn };
  });
  const untouched = levels.filter((l) => !claimedLv.has(l.id));
  return { plan, untouched };
}
function olApplyPaste(text) {
  const { plan } = olPastePlan(text);
  if (!plan.length) return null;
  let list = currentOrgLevels().slice();
  const types = levelTypesList();
  const stack = []; const order = {}; let added = 0, updated = 0;
  plan.forEach((p, i) => {
    const parentId = p.depth > 0 ? (stack[p.depth - 1] || "") : "";
    const sib = parentId || ""; order[sib] = (order[sib] || 0);
    const linkKind = p.entity ? p.entity.linkKind : (p.level ? p.level.linkKind || "" : "");
    const linkId = p.entity ? p.entity.id : (p.level ? p.level.linkId || "" : "");
    if (p.type && !types.includes(p.type)) types.push(p.type);
    let id;
    if (p.level) {
      id = p.level.id;
      list = list.map((l) => l.id === id ? { ...l, name: p.name, type: p.type || l.type || "", parentId, linkKind, linkId, order: order[sib] } : l);
      updated++;
    } else {
      id = uid("lvl");
      list.push({ id, name: p.name, type: p.type || "", parentId, linkKind, linkId, loginId: "", password: "", roleId: "", status: "active", order: order[sib], createdAt: Date.now() + i });
      added++;
    }
    order[sib]++;
    // جهة واحدة = مستوى واحد: ننقل الربط من أي مستوى آخر
    if (linkKind && linkId) list = list.map((l) => (l.id !== id && l.linkKind === linkKind && l.linkId === linkId) ? { ...l, linkKind: "", linkId: "" } : l);
    stack[p.depth] = id; stack.length = p.depth + 1;
  });
  if (types.length !== levelTypesList().length) saveSiteTheme({ levelTypes: types });
  saveOrgLevels(list);
  olChildren("").forEach((r) => olSyncSubtree(r.id));
  return { added, updated };
}
function olPasteCardHtml() {
  const ui = olUi();
  if (!ui.pasteOpen) return `<div class="card" style="margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
      <div><div style="font-size:14px;font-weight:800;">إدخال شجرة من نص</div><div style="font-size:11.5px;color:#6f5f66;margin-top:3px;">تلصقين الهيكل كامل مرة وحدة بدل ما تضيفين مستوى مستوى — وبعدها تعدّلين وتحذفين عادي.</div></div>
      ${pillBtn("فتح", { variant: "soft", icon: iconLayers(13, GREEN), action: "ol-paste-open" })}</div>`;
  const pv = ui.pastePreview;
  const row = (p) => {
    const st = p.entity ? `<span style="color:${GREEN};">يُربط بـ ${esc(p.entity.kind)} «${esc(p.entity.name)}»</span>`
      : p.level && p.level.linkKind ? `<span style="color:${GREEN};">يبقى على ربطه الحالي</span>` : `<span style="color:#6f5f66;">تنظيم فقط (بدون حساب)</span>`;
    const lv = p.level ? `<span style="color:#7a4d16;">مستوى موجود «${esc(p.level.name)}» — يُحدَّث</span>` : `<span style="color:#24527a;">جديد</span>`;
    return `<div style="border-top:1px solid ${BORDER};padding:7px 0;padding-right:${p.depth * 18}px;font-size:12.5px;line-height:1.8;">
      <b>${esc(p.name)}</b>${p.type ? ` ${levelTypeChipHtml(p.type)}` : ""}<div style="font-size:11.5px;">${lv} · ${st}</div>${p.warn ? `<div style="font-size:11.5px;color:${DANGER};">${esc(p.warn)}</div>` : ""}</div>`;
  };
  return `<div class="card card-lg" style="margin-top:14px;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
      <div style="font-size:14px;font-weight:800;">إدخال شجرة من نص</div>${pillBtn("إغلاق", { variant: "ghost", action: "ol-paste-close" })}</div>
    <div style="font-size:12px;color:#6f5f66;line-height:2;background:${GRAY_BG};border-radius:12px;padding:10px 12px;">
      • كل سطر مستوى، وعدد <b>-</b> في أوله = تحت مين (بدون - = أعلى الهيكل، - = تحته، -- = تحت اللي تحته…).<br>
      • النوع بعد <b>|</b> مثل: <code>- مديرة قسم الموارد البشرية | قسم</code><br>
      • يُربط تلقائيًا بالحساب اللي له نفس الاسم (أو نفس الاسم بدون «مديرة»). لو اسم الحساب مختلف اكتبيه بعد <b>=</b> مثل: <code>--- وحدة الاختبارات — الداخل = وحدة الاختبارات</code><br>
      • المستوى الموجود بنفس الاسم يُحدَّث مكانه بدل ما يتكرر. <b>ما ينحذف أي مستوى ولا حساب ولا تقرير.</b></div>
    <textarea class="input" id="ol-paste" rows="12" style="font-family:inherit;line-height:1.9;min-height:220px;" placeholder="مساعدة مدير إدارة التعليم النسائي | مساعدة&#10;- مديرة قسم الموارد البشرية | قسم&#10;-- وحدة التوظيف | وحدة">${esc(ui.pasteText || "")}</textarea>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">${pillBtn("معاينة", { action: "ol-paste-preview" })}${pv && pv.plan.length ? pillBtn(`تطبيق (${pv.plan.length} مستوى)`, { variant: "soft", icon: iconLayers(13, GREEN), action: "ol-paste-apply" }) : ""}</div>
    ${pv ? (pv.plan.length ? `<div>
      <div style="font-size:12.5px;font-weight:800;margin-bottom:4px;">المعاينة — ${pv.plan.filter((p) => !p.level).length} جديد، ${pv.plan.filter((p) => p.level).length} موجود يُحدَّث، ${pv.plan.filter((p) => p.entity).length} مربوط بحساب</div>
      ${pv.plan.map(row).join("")}
      ${pv.untouched.length ? `<div style="font-size:12px;color:#7a4d16;background:#fbf0e1;border-radius:10px;padding:8px 12px;margin-top:8px;line-height:1.9;">مستويات موجودة ما ذُكرت في النص — تبقى كما هي، احذفيها بنفسك لو ما تحتاجينها: ${pv.untouched.map((l) => "«" + esc(l.name) + "»").join("، ")}</div>` : ""}
    </div>` : `<div class="hint bad">النص فاضي.</div>`) : ""}
  </div>`;
}
function olUnlinkedCardHtml() {
  const ui = olUi();
  const list = olUnlinkedEntities();
  const admins = (S.units || []).filter((u) => u.role === "admin");
  const adminRows = admins.map((u) => `<div style="border-top:1px solid ${BORDER};padding:10px 0;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">${structPanelTagHtml("admin", u)}<b style="font-size:13px;flex:1;">${esc(u.name)}</b>${S.ui.treeEditFor && S.ui.treeEditFor.id === u.id ? "" : pillBtn("تعديل", { variant: "ghost", icon: iconPencil(12, INK), action: "tree-edit-start", data: { type: "admin", id: u.id } })}</div>
      ${treeEditFormHtml("admin", u.id)}
      <div style="font-size:12px;color:#6f5f66;">ثابت دائمًا: «المستخدمون» و«إعدادات الموقع». أي صفحة أخرى (لوحة المعلومات، التقارير، الملخص…) من الأدوار المختارة هنا:</div>
      ${structSimpleRoleCardsHtml("unit", u)}</div>`).join("");
  return `${list.length ? `<div class="card card-lg" style="margin-top:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <div><div style="font-size:14px;font-weight:800;">جهات لها حساب وغير موجودة في الشجرة (${list.length})</div>
        <div style="font-size:11.5px;color:#6f5f66;margin-top:3px;">تعمل حساباتها عادي، لكن إدارتها من هنا تحتاج إضافتها للشجرة.</div></div>
        ${ui.importEntitiesConfirm ? `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;"><span style="font-size:12px;font-weight:700;">إضافة الكل بنفس ترتيبها الحالي (مكتب ← قسم ← وحدة)؟</span>${pillBtn("إضافة", { action: "ol-import-entities" })}${pillBtn("تراجع", { variant: "ghost", action: "ol-import-entities-cancel" })}</span>`
          : pillBtn("إضافة الكل للشجرة تلقائيًا", { variant: "soft", icon: iconLayers(13, GREEN), action: "ol-import-entities-ask" })}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">${list.map((x) => olUnlinkedChipHtml(x)).join("")}</div>
      ${olUnlinkedDeleteHtml(list)}
    </div>` : ""}
    ${S.isAdmin && admins.length ? `<div class="card card-lg" style="margin-top:14px;"><div style="font-size:14px;font-weight:800;margin-bottom:6px;">حسابات مديرة النظام</div>${adminRows}</div>` : ""}
    ${S.isAdmin ? `<div class="card card-lg" style="margin-top:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:14px;font-weight:800;">أدوار جاهزة (اختياري)</div>
      <div style="font-size:12px;color:#6f5f66;line-height:1.9;">لا توجد صفحات افتراضية لأي حساب. لو تبين ترجعين لمديرة النظام أو الإدارة العليا صفحاتها السابقة بضغطة، هذي الأزرار تنشئ دورًا بنفس الصفحات السابقة وتعيّنه لكل حسابات هذا النوع — وبعدها تعدّلين الدور كما تبين.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">${pillBtn("دور «مديرة النظام» بصفحاتها السابقة", { variant: "ghost", action: "ol-preset-role", data: { kind: "admin" } })}${pillBtn("دور «الإدارة العليا» بصفحاتها السابقة", { variant: "ghost", action: "ol-preset-role", data: { kind: "exec" } })}</div>
    </div>` : ""}`;
}
function olTypesBarHtml() {
  const ui = olUi();
  const types = levelTypesList();
  const used = (t) => olActive().filter((l) => l.type === t).length;
  const chips = types.map((t, i) => {
    if (ui.typeEdit === t) return `<span style="display:inline-flex;gap:4px;align-items:center;"><input class="input" id="ol-type-edit" value="${esc(t)}" style="width:130px;padding:6px 8px;font-size:12px;" />${pillBtn("حفظ", { action: "ol-type-save", data: { old: t } })}${pillBtn("إلغاء", { variant: "ghost", action: "ol-type-cancel" })}</span>`;
    if (ui.typeDelete === t) {
      const n = used(t);
      return `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;background:${DANGER_BG};padding:6px 8px;border-radius:12px;">
        <span style="font-size:12px;font-weight:700;color:${DANGER};">حذف نوع "${esc(t)}"${n ? ` — مستخدم في ${n} مستوى، اختاري بديلًا:` : "؟"}</span>
        ${n ? `<select class="input" id="ol-type-replace" style="width:auto;padding:5px 8px;font-size:12px;"><option value="">بدون نوع</option>${types.filter((x) => x !== t).map((x) => `<option value="${esc(x)}">${esc(x)}</option>`).join("")}</select>` : ""}
        ${pillBtn("حذف", { variant: "danger", action: "ol-type-delete", data: { old: t } })}${pillBtn("تراجع", { variant: "ghost", action: "ol-type-cancel" })}
      </span>`;
    }
    return `<span style="display:inline-flex;align-items:center;gap:2px;">${levelTypeChipHtml(t)}
      <button type="button" class="icon-btn" style="width:24px;height:24px;background:transparent;" data-action="ol-type-start-edit" data-old="${esc(t)}" aria-label="تعديل النوع">${iconPencil(11, SUBTLE)}</button>
      <button type="button" class="icon-btn" style="width:24px;height:24px;background:transparent;" data-action="ol-type-start-delete" data-old="${esc(t)}" aria-label="حذف النوع">${iconX(11, SUBTLE)}</button></span>`;
  }).join("");
  return `<div class="card" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
    <span style="font-size:13px;font-weight:800;">أنواع المستويات</span>
    <div style="display:flex;gap:8px;flex-wrap:wrap;flex:1;align-items:center;">${chips || `<span class="hint" style="margin:0;">لا توجد أنواع — أضيفي أول نوع.</span>`}</div>
    <span style="display:inline-flex;gap:6px;align-items:center;"><input class="input" id="ol-type-new" placeholder="نوع جديد…" style="width:130px;padding:6px 8px;font-size:12px;" />${pillBtn("إضافة", { variant: "ghost", icon: iconPlus(13, INK), action: "ol-type-add" })}</span>
  </div>`;
}
function renderOrgLevelsPage() {
  if (!canManageUsers()) return `<div class="page-wrap"><div class="page-inner"><div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">هذه الصفحة غير ممنوحة لهذا الحساب.</div></div></div>`;
  const ui = olUi();
  const roots = olChildren("");
  if (ui.selected && !olFind(ui.selected)) ui.selected = null;
  const sel = ui.selected ? olFind(ui.selected) : null;
  const side = ui.form ? olFormHtml() : sel ? olSidePanelHtml(sel)
    : `<div class="card card-lg" style="color:${SUBTLE};font-size:12.5px;line-height:2;">اختاري مستوى من الشجرة لعرض تفاصيله، أو اضغطي "إضافة مستوى".<br>• الجهات الموجودة (مكاتب/أقسام/وحدات) تبقى بحساباتها وتقاريرها كما هي — تُربط بالشجرة فقط.<br>• كل مستوى له حساب دخول يرى ما تحته فقط.</div>`;
  return `
  <div class="page-wrap"><div class="page-inner" style="max-width:1180px;">
    ${topBarHtml({ title: "المستخدمون", subtitle: "كل شيء في مكان واحد: الهيكل، الجهات وحساباتها، الأشخاص، الأدوار، والمسارات", icon: iconUser(18, ROSE), backAction: "nav-back-admin" })}
    ${olSectionBarHtml()}
    ${ui.section === "roles" ? renderRolesManage() : ui.section === "paths" ? renderApprovalPathsSetup() : ui.section === "people" ? structSimplePeopleViewHtml() : `
    ${ui.msg ? `<div class="card" style="background:${GREEN_BG};color:${GREEN};font-size:12.5px;font-weight:700;margin-bottom:14px;display:flex;justify-content:space-between;gap:10px;align-items:center;"><span>${esc(ui.msg)}</span><button type="button" class="icon-btn" style="background:transparent;" data-action="ol-clear-msg" aria-label="إغلاق">${iconX(13, GREEN)}</button></div>` : ""}
    ${olTypesBarHtml()}
    <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;">
      <div class="card card-lg" style="flex:999 1 520px;min-width:0;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
          <div><div class="prs-title" style="font-size:15px;font-weight:800;display:flex;align-items:center;gap:8px;">${iconLayers(17, ROSE)} الهيكل المرن</div>
          <div style="font-size:11.5px;color:#6f5f66;margin-top:3px;">مستويات بلا حد — اضغطي أي مستوى لعرض تفاصيله</div></div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${roots.length ? pillBtn("فتح الكل", { variant: "ghost", action: "ol-expand-all" }) : ""}
            ${pillBtn("إضافة مستوى", { icon: iconPlus(14, "#fff"), action: "ol-start-add", data: { parent: "" } })}
          </div>
        </div>
        ${roots.length ? `<div style="display:flex;flex-direction:column;gap:2px;">${roots.map((r) => olRowHtml(r, 0)).join("")}</div>`
          : `<div style="text-align:center;color:${SUBTLE};padding:30px 10px;font-size:13px;line-height:2;">الشجرة فاضية — ابدئي بـ"إضافة مستوى".</div>`}
        <div style="border-top:1px solid ${BORDER};margin-top:14px;padding-top:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
          ${pillBtn(portalEnabled() ? `بوابة الدخول: مفعّلة (${portalEntries().length}) — إيقاف` : "تفعيل بوابة الدخول", { variant: portalEnabled() ? "ghost" : "soft", icon: iconHome(13, portalEnabled() ? INK : GREEN), action: "ol-toggle-portal" })}
        </div>
      </div>
      <div style="flex:1 1 340px;min-width:0;display:flex;flex-direction:column;gap:14px;">${side}</div>
    </div>
    ${olPasteCardHtml()}
    ${olUnlinkedCardHtml()}`}
  </div></div>`;
}
function olSectionBarHtml() {
  const cur = olUi().section || "";
  const b = (id, label) => `<button type="button" data-action="ol-section" data-section="${id}" style="min-height:42px;padding:0 16px;border-radius:12px;font-family:inherit;font-size:13px;cursor:pointer;font-weight:${cur === id ? 800 : 600};border:1px solid ${cur === id ? ROSE : BORDER};background:${cur === id ? "#fbf3f5" : "#fff"};color:${cur === id ? ROSE : INK};">${label}</button>`;
  return `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">${b("", "الهيكل")}${b("people", "كل الأشخاص")}${b("roles", "الأدوار والصلاحيات")}${b("paths", "كل المسارات")}</div>`;
}
function olReadForm() {
  const ui = olUi(); const f = ui.form; if (!f) return;
  const g = (id) => { const el = document.getElementById(id); return el ? el.value : null; };
  if (g("ol-f-name") !== null) f.name = g("ol-f-name");
  const tSel = g("ol-f-type");
  if (tSel !== null) {
    if (tSel === "__new") { f.typeNewMode = true; const tn = g("ol-f-type-new"); if (tn !== null) f.typeNew = tn; }
    else { if (tSel !== (f.type || "")) f.typeAuto = false; f.typeNewMode = false; f.type = tSel; }
  }
  if (g("ol-f-parent") !== null) f.parentId = g("ol-f-parent");
  const ent = g("ol-f-ent");
  if (ent !== null) { if (ent === "new") { f.linkKind = "new"; f.linkId = ""; } else if (!ent) { f.linkKind = ""; f.linkId = ""; } else { const i = ent.indexOf(":"); f.linkKind = ent.slice(0, i); f.linkId = ent.slice(i + 1); } }
  if (g("ol-f-new-kind") !== null) f.newKind = g("ol-f-new-kind");
  if (g("ol-f-acc-pass") !== null) f.accPass = g("ol-f-acc-pass");
  if (g("ol-f-acc-email") !== null) f.accEmail = g("ol-f-acc-email");
  if (g("ol-f-login") !== null) f.loginId = g("ol-f-login");
  if (g("ol-f-pass") !== null) f.password = g("ol-f-pass");
  if (g("ol-f-role") !== null) f.roleId = g("ol-f-role");
  olAutoType(f);
}
// ينشئ حساب جهة جديد (بنفس بنية الحسابات الموجودة) ويرجع نوع الربط ومعرّفه
function olCreateEntity(kind, name, password, email) {
  const base = { name, password, email, status: "active", createdAt: Date.now(), allowedPages: [], allowedActions: [] };
  if (kind === "dept") { const id = uid("dept"); S.departments = [...S.departments, { ...base, id, officeId: "" }]; dataStore.saveDepartments(S.departments); return { linkKind: "dept", id }; }
  if (kind === "office") { const id = uid("office"); S.offices = [...(S.offices || []), { ...base, id, parentOfficeId: "" }]; dataStore.saveOffices(S.offices); return { linkKind: "office", id }; }
  const role = kind === "exec" ? "executive" : kind === "center" ? "center" : "unit";
  const id = uid(kind === "exec" ? "exec" : "unit");
  S.units = [...S.units, { ...base, id, role, departmentId: "" }]; dataStore.saveUnits(S.units);
  return { linkKind: "unit", id };
}
// كل الجهات الموجودة غير المربوطة بالشجرة (بدون مديرة النظام وتقارير الجهات الذاتية)
function olUnlinkedEntities() {
  const linked = new Set(olActive().filter((l) => l.linkKind && l.linkId).map((l) => l.linkKind + ":" + l.linkId));
  const out = [];
  (S.units || []).filter((u) => u.role === "executive").forEach((u) => { if (!linked.has("unit:" + u.id)) out.push({ linkKind: "unit", id: u.id, name: u.name, kind: "إدارة عليا" }); });
  (S.offices || []).forEach((o) => { if (!linked.has("office:" + o.id)) out.push({ linkKind: "office", id: o.id, name: o.name, kind: "مكتب" }); });
  (S.departments || []).forEach((d) => { if (!linked.has("dept:" + d.id)) out.push({ linkKind: "dept", id: d.id, name: d.name, kind: "قسم" }); });
  (S.units || []).filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report").forEach((u) => { if (!linked.has("unit:" + u.id)) out.push({ linkKind: "unit", id: u.id, name: u.name, kind: u.role === "center" ? "مركز" : "وحدة" }); });
  return out;
}
// يضيف الجهات غير المربوطة للشجرة بنفس ترتيبها الحالي: إدارة عليا ← مكاتب ← أقسام ← وحدات.
// كل جهة تُوضع تحت مستوى الجهة اللي تتبعها لو موجودة بالشجرة، وإلا بأعلى الهيكل.
function olImportEntities(onlyKey) {
  const list = currentOrgLevels().slice();
  const levelOf = (kind, id) => list.find((l) => l.status !== "deleted" && l.linkKind === kind && l.linkId === id);
  const types = levelTypesList();
  const ensureType = (t) => { if (!types.includes(t)) types.push(t); return t; };
  let n = 0;
  const add = (kind, id, name, type, parentId) => {
    if (levelOf(kind, id)) return;
    list.push({ id: uid("lvl"), name, type: ensureType(type), parentId: parentId || "", linkKind: kind, linkId: id, loginId: "", password: "", roleId: "", status: "active", order: list.filter((x) => (x.parentId || "") === (parentId || "")).length, createdAt: Date.now() + n });
    n++;
  };
  const want = (kind, id) => !onlyKey || onlyKey === kind + ":" + id;
  (S.units || []).filter((u) => u.role === "executive").forEach((u) => { if (want("unit", u.id)) add("unit", u.id, u.name, "إدارة عليا", ""); });
  const offices = (S.offices || []).slice();
  let guard = 0;
  while (offices.length && guard++ < 50) {
    for (let i = 0; i < offices.length; i++) {
      const o = offices[i];
      const pOff = (S.offices || []).find((x) => x.id === o.parentOfficeId);
      const pExec = (S.units || []).find((x) => x.id === o.parentOfficeId && x.role === "executive");
      if (pOff && offices.includes(pOff) && !onlyKey) continue; // ننتظر الأب أولًا
      const parent = pOff ? levelOf("office", pOff.id) : pExec ? levelOf("unit", pExec.id) : null;
      if (want("office", o.id)) add("office", o.id, o.name, "مكتب", parent ? parent.id : "");
      offices.splice(i, 1); i--;
    }
  }
  (S.departments || []).forEach((d) => { const p = levelOf("office", d.officeId); if (want("dept", d.id)) add("dept", d.id, d.name, "قسم", p ? p.id : ""); });
  (S.units || []).filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report").forEach((u) => { const p = levelOf("dept", u.departmentId); if (want("unit", u.id)) add("unit", u.id, u.name, u.role === "center" ? "مركز" : "وحدة", p ? p.id : ""); });
  if (types.length !== levelTypesList().length) saveSiteTheme({ levelTypes: types });
  saveOrgLevels(list);
  return n;
}
// حذف حساب جهة نهائيًا (نفس منطق الحذف السابق) — يُستخدم من صفحة المستخدمين الموحّدة
function treeDeleteEntity(type, id) {
  if (type === "office") {
    S.offices = (S.offices || []).filter((o) => o.id !== id).map((o) => o.parentOfficeId === id ? { ...o, parentOfficeId: "" } : o);
    S.departments = S.departments.map((d) => d.officeId === id ? { ...d, officeId: "" } : d);
    dataStore.saveOffices(S.offices); dataStore.saveDepartments(S.departments);
  } else if (type === "dept") {
    S.departments = S.departments.filter((d) => d.id !== id);
    S.units = S.units.map((u) => u.departmentId === id ? { ...u, departmentId: "" } : u);
    dataStore.saveDepartments(S.departments); dataStore.saveUnits(S.units);
  } else {
    S.units = S.units.filter((u) => u.id !== id); delete S.reports[id];
    dataStore.saveUnits(S.units); dataStore.deleteReports(id);
  }
}
function handleOrgLevelsAction(action, ds) {
  if (!action || action.indexOf("ol-") !== 0) return false;
  const ui = olUi();
  const levels = () => currentOrgLevels().slice();
  switch (action) {
    case "ol-select": ui.selected = ds.id; ui.form = null; ui.confirmDelete = null; S.ui.treeEditFor = null; S.ui.treeConfirmDel = null; break;
    case "ol-tab": ui.tab = ds.tab; break;
    case "ol-section": ui.section = ds.section || ""; break;
    case "ol-entity-status": { const e = treeEntity(ds.type === "exec" ? "unit" : ds.type, ds.id); if (e) treeSetEntity(ds.type === "exec" ? "unit" : ds.type, ds.id, { status: e.status === "disabled" ? "active" : "disabled" }); break; }
    case "ol-import-entities-ask": ui.importEntitiesConfirm = true; break;
    case "ol-preset-role": {
      if (!S.isAdmin) break;
      const isA = ds.kind === "admin";
      const pages = isA
        ? SIDEBAR_PAGES.filter((p) => p.group !== "unit-extra" && !["departments-list", "admin-reports"].includes(p.id)).map((p) => p.id)
        : SIDEBAR_PAGES.filter((p) => p.group === "الإدارة العليا" || ["executive-summary", "executive-final-report", "all-reports"].includes(p.id)).map((p) => p.id);
      const name = isA ? "مديرة النظام — كل الصفحات" : "الإدارة العليا — الاطّلاع الشامل";
      let role = rolesList().find((r) => r.name === name);
      if (!role) { role = { id: uid("role"), name, pin: "", description: "دور جاهز بنفس الصفحات السابقة", permissions: { pages, actions: [], buttons: [] }, status: "active", createdAt: Date.now() }; S.roles = [...rolesList(), role]; dataStore.saveRoles(S.roles); }
      const targets = S.units.filter((u) => u.role === (isA ? "admin" : "executive"));
      S.units = S.units.map((u) => targets.some((t) => t.id === u.id) ? { ...u, baseRoleId: [...new Set([...baseRoleIdsRaw(u), role.id])].join(",") } : u);
      dataStore.saveUnits(S.units);
      ui.msg = `أُنشئ دور «${name}» وعُيّن لـ ${targets.length} حساب — يُطبَّق عند الدخول القادم. عدّليه من «الأدوار والصلاحيات».`;
      break;
    }
    case "ol-import-entities-cancel": ui.importEntitiesConfirm = false; break;
    case "ol-import-entities": { const n = olImportEntities(); ui.importEntitiesConfirm = false; ui.msg = n ? `أُضيفت ${n} جهة للشجرة بنفس ترتيبها — الحسابات والتقارير كما هي.` : "لا توجد جهات جديدة للإضافة."; break; }
    case "ol-add-entity": { const n = olImportEntities(ds.key); const [k, ...r] = String(ds.key).split(":"); const lv = olActive().find((l) => l.linkKind === k && l.linkId === r.join(":")); if (lv) { ui.selected = lv.id; ui.tab = "info"; } ui.msg = n ? "أُضيفت للشجرة — انقليها لمكانها الصحيح من «تعديل / نقل» إن لزم." : ""; break; }
    case "ol-toggle": ui.collapsed = { ...ui.collapsed, [ds.id]: !ui.collapsed[ds.id] }; break;
    case "ol-expand-all": ui.collapsed = {}; break;
    case "ol-clear-msg": ui.msg = ""; break;
    case "ol-paste-open": ui.pasteOpen = true; break;
    case "ol-paste-close": ui.pasteOpen = false; ui.pastePreview = null; break;
    case "ol-paste-preview": { const el = document.getElementById("ol-paste"); ui.pasteText = el ? el.value : ui.pasteText || ""; ui.pastePreview = olPastePlan(ui.pasteText); break; }
    case "ol-paste-apply": {
      const el = document.getElementById("ol-paste"); if (el) ui.pasteText = el.value;
      const r = olApplyPaste(ui.pasteText || "");
      if (r) { ui.msg = `تم إدخال الشجرة: ${r.added} مستوى جديد، ${r.updated} مستوى موجود تحدّث. تقدرين تعدّلين أو تحذفين أي مستوى عادي.`; ui.pasteOpen = false; ui.pastePreview = null; ui.pasteText = ""; ui.collapsed = {}; }
      break;
    }
    case "ol-start-add": ui.form = { mode: "add", name: "", type: "", parentId: ds.parent || "", linkKind: "", linkId: "", loginId: "", password: "", roleId: "" }; ui.formError = ""; ui.confirmDelete = null; break;
    case "ol-start-edit": { const l = olFind(ds.id); if (!l) break; const custom = !!(l.type && !levelTypesList().includes(l.type)); ui.form = { mode: "edit", id: l.id, name: l.name, type: custom ? "" : l.type, typeNewMode: custom, typeNew: custom ? l.type : "", parentId: l.parentId, linkKind: l.linkKind, linkId: l.linkId, loginId: l.loginId, password: l.password, roleId: l.roleId || "" }; ui.formError = ""; break; }
    case "ol-cancel-form": ui.form = null; ui.formError = ""; break;
    case "ol-form-card": { olReadForm(); const f = ui.form; if (!f) break; f.card = ds.card; if (ds.card !== "acc") { f.linkKind = ""; f.linkId = ""; } olAutoType(f); ui.formError = ""; break; }
    case "ol-save": {
      olReadForm();
      const f = ui.form; if (!f) break;
      const name = String(f.name || "").trim();
      let type = f.typeNewMode ? String(f.typeNew || "").trim() : String(f.type || "").trim();
      const card = olFormCard(f);
      if (card !== "acc") { f.linkKind = ""; f.linkId = ""; }
      if (card !== "mgr") { f.loginId = ""; f.password = ""; f.roleId = ""; }
      const loginId = String(f.loginId || "").trim(), password = String(f.password || "").trim();
      if (!name) { ui.formError = "اكتبي اسم المستوى."; break; }
      if (card === "acc" && !f.linkKind) { ui.formError = "اختاري حسابه من القائمة، أو «أنشئ حساب جديد»."; break; }
      if (card === "mgr" && !loginId) { ui.formError = "اكتبي اسم المستخدم وكلمة السر لدخولها."; break; }
      if (f.linkKind === "new") {
        const taken = [...(S.units || []), ...(S.departments || []), ...(S.offices || [])].some((x) => String(x.name || "").trim() === name);
        if (taken) { ui.formError = "يوجد حساب بنفس الاسم — الاسم هو اسم الدخول فلازم يكون مختلفًا."; break; }
        const created = olCreateEntity(f.newKind || "unit", name, String(f.accPass || "").trim(), String(f.accEmail || "").trim());
        f.linkKind = created.linkKind; f.linkId = created.id;
      }
      if (loginId && !password) { ui.formError = "اكتبي كلمة سر لحساب الدخول."; break; }
      if (loginId && olActive().some((l) => l.id !== f.id && (l.loginId || "").trim() === loginId)) { ui.formError = "اسم المستخدم مستخدم لمستوى آخر — اختاري اسمًا مختلفًا."; break; }
      if (type && !levelTypesList().includes(type)) saveSiteTheme({ levelTypes: [...levelTypesList(), type] });
      let list = levels();
      // جهة موجودة تُربط بمستوى واحد فقط — ننقل الربط لو كانت مربوطة بغيره
      if (f.linkKind && f.linkId) list = list.map((l) => (l.id !== f.id && l.linkKind === f.linkKind && l.linkId === f.linkId) ? { ...l, linkKind: "", linkId: "" } : l);
      if (f.mode === "edit") {
        list = list.map((l) => l.id === f.id ? { ...l, name, type, parentId: f.parentId || "", linkKind: f.linkKind || "", linkId: f.linkKind ? f.linkId : "", loginId, password: loginId ? password : "", roleId: f.roleId || "" } : l);
        ui.selected = f.id;
      } else {
        const id = uid("lvl");
        list.push({ id, name, type, parentId: f.parentId || "", linkKind: f.linkKind || "", linkId: f.linkKind ? f.linkId : "", loginId, password: loginId ? password : "", roleId: f.roleId || "", status: "active", order: olChildren(f.parentId || "").length, createdAt: Date.now() });
        ui.selected = id;
        if (f.parentId) ui.collapsed = { ...ui.collapsed, [f.parentId]: false };
      }
      saveOrgLevels(list);
      olSyncSubtree(ui.selected);
      ui.form = null; ui.formError = "";
      break;
    }
    case "ol-toggle-login": saveOrgLevels(levels().map((l) => (l.id === ds.id ? { ...l, status: l.status === "disabled" ? "active" : "disabled" } : l))); break;
    case "ol-confirm-delete": ui.confirmDelete = ds.id; break;
    case "ol-cancel-delete": ui.confirmDelete = null; break;
    case "ol-delete": {
      const l = olFind(ds.id); if (!l) break;
      let list = levels();
      if (ds.mode === "lift") {
        list = list.filter((x) => x.id !== l.id).map((x) => x.parentId === l.id ? { ...x, parentId: l.parentId || "" } : x);
      } else {
        const gone = new Set([l.id, ...olDescendantIds(l.id)]);
        list = list.filter((x) => !gone.has(x.id));
      }
      saveOrgLevels(list);
      ui.confirmDelete = null; ui.selected = l.parentId || null;
      break;
    }
    case "ol-move-order": {
      const l = olFind(ds.id); if (!l) break;
      const sibs = olChildren(l.parentId);
      const i = sibs.findIndex((x) => x.id === l.id), j = i + Number(ds.dir);
      if (j < 0 || j >= sibs.length) break;
      const ordered = sibs.slice(); const t = ordered[i]; ordered[i] = ordered[j]; ordered[j] = t;
      const pos = {}; ordered.forEach((x, k) => { pos[x.id] = k; });
      saveOrgLevels(levels().map((x) => (x.id in pos ? { ...x, order: pos[x.id] } : x)));
      break;
    }
    case "ol-type-add": {
      const el = document.getElementById("ol-type-new");
      const v = (el && el.value || "").trim();
      if (!v) break;
      if (!levelTypesList().includes(v)) saveSiteTheme({ levelTypes: [...levelTypesList(), v] });
      break;
    }
    case "ol-type-start-edit": ui.typeEdit = ds.old; ui.typeDelete = null; break;
    case "ol-type-start-delete": ui.typeDelete = ds.old; ui.typeEdit = null; break;
    case "ol-type-cancel": ui.typeEdit = null; ui.typeDelete = null; break;
    case "ol-type-save": {
      const el = document.getElementById("ol-type-edit");
      const v = (el && el.value || "").trim(), old = ds.old;
      if (!v || v === old) { ui.typeEdit = null; break; }
      const types = levelTypesList();
      saveSiteTheme({ levelTypes: types.includes(v) ? types.filter((t) => t !== old) : types.map((t) => (t === old ? v : t)) });
      saveOrgLevels(levels().map((l) => (l.type === old ? { ...l, type: v } : l)));
      ui.typeEdit = null;
      break;
    }
    case "ol-type-delete": {
      const old = ds.old;
      const el = document.getElementById("ol-type-replace");
      const rep = el ? el.value : "";
      saveSiteTheme({ levelTypes: levelTypesList().filter((t) => t !== old) });
      if (olActive().some((l) => l.type === old)) saveOrgLevels(levels().map((l) => (l.type === old ? { ...l, type: rep } : l)));
      ui.typeDelete = null;
      break;
    }
    case "ol-toggle-portal": saveSiteTheme({ portalEnabled: !portalEnabled() }); ui.msg = portalEnabled() ? `بوابة الدخول مفعّلة — تظهر ${portalEntries().length} ${portalEntries().length > 2 && portalEntries().length < 11 ? "جهات" : "جهة"} مجمّعة حسب أنواع المستويات (الجهات اللي لها دخول، وروابطها غير معطّلة).` : "بوابة الدخول موقوفة — صفحة الدخول العادية فقط."; break;
    default: return false;
  }
  render();
  return true;
}
// دخول بحساب مستوى: اطّلاع بنفس صفحات الإدارة العليا، مقيّد بوحدات ما تحته فقط.
function findLevelLogin(loginId, password) {
  return olActive().find((l) => l.status !== "disabled" && l.loginId && l.loginId.trim() === loginId && l.password === password) || null;
}
function doLoginLevel(level) {
  doLogin({ id: level.id, name: level.name, role: "executive", levelId: level.id, levelType: level.type || "" });
  const role = level.roleId ? rolesList().find((r) => r.id === level.roleId) : null;
  if (!role || !S.levelScope) return;
  S.levelScope.roleId = role.id;
  S.currentEntryRoleName = role.name;
  applyPersonPerms({ roleId: role.id, permsOverride: null });
  const pages = (S.allowedPages || []).filter((p) => LEVEL_COMPATIBLE_PAGES.includes(p));
  S.allowedPages = pages; // بدون صفحات مناسبة = لا يرى شيئًا (لا يوجد افتراضي)
  if (S.allowedPages && !S.allowedPages.includes(S.view) && !(S.view === "executive-dashboard" && S.allowedPages.includes("dashboard"))) {
    S.view = S.allowedPages[0] === "dashboard" ? "executive-dashboard" : S.allowedPages[0];
  }
  render();
}

/* =============================== رابط دخول وأيقونة لكل جهة ==================
   لكل مستوى بالهيكل المرن له دخول، ولكل جهة موجودة مربوطة بالشجرة (وحدة/قسم/مكتب)،
   رابط خاص: index.html?e=<نوع>:<معرّف>. يفتح صفحة الدخول بأيقونة الجهة واسمها،
   واسم المستخدم مكتوب مسبقًا. عند "إضافة إلى الشاشة الرئيسية" من الآيباد/الجوال يظهر
   باسم الجهة وأيقونتها. الأيقونات تُحفظ بإعدادات الموقع (theme.entityIcons) — بدون SQL. */
const ENTRY_ICON_SET = {
  building: (s, c) => iconBuilding(c, s), book: iconBook, cap: iconGraduationCap, heart: iconHeart, target: iconTarget,
  layers: iconLayers, user: iconUser, home: iconHome, sparkles: iconSparkles, document: iconDocument, archive: iconArchive, calendar: iconCalendarSmall,
};
const ENTRY_ICON_COLORS = ["#6b2337", "#8B4A73", "#24527a", "#2E6B52", "#7a4d16", "#4d5a66", "#b4532a", "#5b3a73"];
function entryKey(kind, id) { return kind + ":" + id; }
function entryIconOf(key) {
  const m = ((((S.siteSettings || {}).theme) || {}).entityIcons || {})[key] || {};
  return { icon: ENTRY_ICON_SET[m.icon] ? m.icon : "building", color: ENTRY_ICON_COLORS.includes(m.color) ? m.color : ENTRY_ICON_COLORS[0], linkOff: !!m.linkOff };
}
function entryIconHtml(key, size) {
  const ic = entryIconOf(key);
  const box = size || 72;
  return `<div style="width:${box}px;height:${box}px;border-radius:${Math.round(box * 0.26)}px;background:${ic.color};display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 8px 20px rgba(46,36,42,.18);">${ENTRY_ICON_SET[ic.icon](Math.round(box * 0.5), "#fff")}</div>`;
}
// اسم الجهة واسم المستخدم المناسب لها — null لو الرابط لا يطابق شيئًا
function entryInfo(kind, id) {
  if (kind === "level") { const l = olFind(id); return l && l.loginId ? { name: l.name, username: l.loginId, sub: l.type || "" } : null; }
  if (kind === "unit") { const u = (S.units || []).find((x) => x.id === id); return u ? { name: u.name, username: u.name, sub: u.role === "center" ? "مركز" : u.role === "executive" ? "إدارة عليا" : "وحدة" } : null; }
  if (kind === "dept") { const d = (S.departments || []).find((x) => x.id === id); return d ? { name: d.name, username: d.name, sub: "قسم" } : null; }
  if (kind === "office") { const o = (S.offices || []).find((x) => x.id === id); return o ? { name: o.name, username: o.name, sub: "مكتب إشراف" } : null; }
  return null;
}
function entryLinkUrl(kind, id) {
  let base = "";
  try { base = location.origin && location.origin !== "null" ? location.origin + location.pathname : location.href.split("?")[0]; } catch (e) { base = ""; }
  return base + "?e=" + encodeURIComponent(entryKey(kind, id));
}
function parseEntryParam() {
  try {
    const v = new URLSearchParams(location.search).get("e");
    if (!v) return null;
    const i = v.indexOf(":");
    if (i < 1) return null;
    const kind = v.slice(0, i), id = v.slice(i + 1);
    return ["level", "unit", "dept", "office"].includes(kind) && id ? { kind, id } : null;
  } catch (e) { return null; }
}
function currentEntry() {
  if (!S.entryLink) return null;
  // رابط معطّل = صفحة الدخول العادية تمامًا (بدون أيقونة الجهة ولا اسم مستخدم مكتوب مسبقًا)
  if (entryIconOf(entryKey(S.entryLink.kind, S.entryLink.id)).linkOff) return null;
  const info = entryInfo(S.entryLink.kind, S.entryLink.id);
  return info ? { ...S.entryLink, ...info, key: entryKey(S.entryLink.kind, S.entryLink.id) } : null;
}
// أيقونة الشاشة الرئيسية (apple-touch-icon) + اسمها، تُرسم من أيقونة الجهة نفسها
function applyEntryHomeScreen() {
  const en = currentEntry();
  if (!en) return;
  try {
    document.title = en.name;
    const setMeta = (name, content) => { let m = document.querySelector(`meta[name="${name}"]`); if (!m) { m = document.createElement("meta"); m.setAttribute("name", name); document.head.appendChild(m); } m.setAttribute("content", content); };
    setMeta("apple-mobile-web-app-title", en.name);
    setMeta("apple-mobile-web-app-capable", "yes");
    const ic = entryIconOf(en.key);
    const svg = ENTRY_ICON_SET[ic.icon](96, "#ffffff");
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas"); c.width = 180; c.height = 180;
      const g = c.getContext("2d");
      g.fillStyle = ic.color; g.fillRect(0, 0, 180, 180);
      g.drawImage(img, 42, 42, 96, 96);
      const url = c.toDataURL("image/png");
      ["apple-touch-icon", "icon"].forEach((rel) => { let l = document.querySelector(`link[rel="${rel}"]`); if (!l) { l = document.createElement("link"); l.setAttribute("rel", rel); document.head.appendChild(l); } l.setAttribute("href", url); });
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '));
  } catch (e) { /* الأيقونة تحسين فقط */ }
}
function entryLoginHeaderHtml(en) {
  return `<div style="text-align:center;margin-bottom:24px;display:flex;flex-direction:column;align-items:center;gap:12px;">
    ${entryIconHtml(en.key, 76)}
    <div>
      <div class="prs-title" style="font-size:20px;font-weight:900;color:#000;line-height:1.5;">${esc(en.name)}</div>
      <div style="font-size:11.5px;color:${SUBTLE};margin-top:2px;">${esc(en.sub ? en.sub + " — " : "")}${esc(currentSiteSettings().platformName || "منصة التقارير")}</div>
    </div>
  </div>`;
}
// قسم "رابط الدخول" داخل تفاصيل المستوى بالهيكل المرن
function entryLinkPanelHtml(kind, id, title) {
  const key = entryKey(kind, id);
  const ic = entryIconOf(key);
  const url = entryLinkUrl(kind, id);
  const showQr = (S.ui.entryQrKey || "") === key;
  let qr = "";
  if (showQr) {
    try { const q = qrcode(0, "M"); q.addData(url); q.make(); qr = q.createSvgTag({ cellSize: 5, margin: 2, scalable: true }); } catch (e) { qr = `<div class="hint bad">تعذر إنشاء رمز QR.</div>`; }
  }
  return `<div style="border-top:1px solid ${BORDER};padding-top:12px;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">${entryIconHtml(key, 40)}<div style="font-size:13px;font-weight:800;">${esc(title)}</div>
      ${ic.linkOff ? `<span style="font-size:10.5px;font-weight:700;color:${DANGER};background:${DANGER_BG};padding:3px 9px;border-radius:999px;">الرابط معطّل</span>` : `<span style="font-size:10.5px;font-weight:700;color:#2E7A5C;background:${GREEN_BG};padding:3px 9px;border-radius:999px;">الرابط يعمل</span>`}
      <span style="margin-right:auto;">${pillBtn(ic.linkOff ? "تفعيل الرابط" : "تعطيل الرابط", { variant: ic.linkOff ? "soft" : "ghost", icon: iconPower(13, ic.linkOff ? GREEN : INK), action: "entry-link-toggle", data: { key } })}</span></div>
    ${ic.linkOff ? `<div class="hint" style="margin:0;">الرابط معطّل: من يفتحه تظهر له صفحة الدخول العادية (بدون أيقونة الجهة ولا اسم المستخدم)، والجهة تقدر تدخل منها عادي.</div>` : ""}
    <div style="display:flex;gap:6px;flex-wrap:wrap;">${Object.keys(ENTRY_ICON_SET).map((name) => `<button type="button" data-action="entry-icon" data-key="${esc(key)}" data-icon="${name}" aria-label="أيقونة" style="width:36px;height:36px;border-radius:10px;border:${ic.icon === name ? `2px solid ${ROSE}` : `1px solid ${BORDER}`};background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;">${ENTRY_ICON_SET[name](17, ic.icon === name ? ROSE : INK)}</button>`).join("")}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">${ENTRY_ICON_COLORS.map((c) => `<button type="button" data-action="entry-color" data-key="${esc(key)}" data-color="${c}" aria-label="لون" style="width:28px;height:28px;border-radius:50%;background:${c};border:${ic.color === c ? `3px solid ${INK}` : "2px solid #fff"};box-shadow:0 0 0 1px ${BORDER};cursor:pointer;"></button>`).join("")}</div>
    <div style="display:flex;gap:6px;align-items:center;">
      <input class="input" readonly value="${esc(url)}" id="entry-url-${esc(key)}" style="direction:ltr;text-align:left;font-size:11px;flex:1;min-width:0;" />
      ${pillBtn(S.ui.entryCopied === key ? "تم النسخ ✓" : "نسخ", { variant: "ghost", action: "entry-copy", data: { key } })}
      ${pillBtn(showQr ? "إخفاء QR" : "QR", { variant: "ghost", action: "entry-qr", data: { key } })}
    </div>
    ${showQr ? `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;"><div style="width:180px;height:180px;background:#fff;padding:6px;border:1px solid ${BORDER};border-radius:12px;">${qr}</div><div class="hint" style="margin:0;text-align:center;">صوّريه أو اطبعيه — يفتح صفحة دخول هذه الجهة مباشرة.</div></div>` : ""}
    <div class="hint" style="margin:0;">من الآيباد أو الجوال: افتحي الرابط ثم "مشاركة ← إضافة إلى الشاشة الرئيسية" ليظهر كتطبيق باسم الجهة وأيقونتها.</div>
  </div>`;
}
function handleEntryAction(action, ds) {
  if (action === "entry-icon" || action === "entry-color") {
    const v = { ...entryIconOf(ds.key), ...(action === "entry-icon" ? { icon: ds.icon } : { color: ds.color }) };
    saveSiteTheme((th) => ({ entityIcons: { ...(th.entityIcons || {}), [ds.key]: v } }));
    render(); return true;
  }
  if (action === "entry-link-toggle") {
    const cur = entryIconOf(ds.key);
    const v = { icon: cur.icon, color: cur.color, linkOff: !cur.linkOff };
    saveSiteTheme((th) => ({ entityIcons: { ...(th.entityIcons || {}), [ds.key]: v } }));
    render(); return true;
  }
  if (action === "entry-qr") { S.ui.entryQrKey = S.ui.entryQrKey === ds.key ? "" : ds.key; render(); return true; }
  if (action === "entry-copy") {
    const el = document.getElementById("entry-url-" + ds.key);
    const val = el ? el.value : "";
    const done = () => { S.ui.entryCopied = ds.key; render(); setTimeout(() => { if (S.ui.entryCopied === ds.key) { S.ui.entryCopied = ""; render(); } }, 1800); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(val).then(done, () => { if (el) { el.select(); document.execCommand("copy"); } done(); });
      else { if (el) { el.select(); document.execCommand("copy"); } done(); }
    } catch (e) { done(); }
    return true;
  }
  if (action === "entry-clear") {
    S.entryLink = null;
    S.ui.portalType = S.ui.portalFromType || ""; S.ui.portalFromType = "";
    try { history.replaceState(null, "", location.pathname); } catch (e) { /* ignore */ }
    S.ui.loginUsernameVal = ""; render(); return true;
  }
  return false;
}

/* ---- مسار الاعتماد من الهيكل المرن ---- */

/* =============================== بوابة الدخول (اختيارية) ======================
   صفحة أولى بدل نموذج الدخول: أنواع الجهات (من أنواع الهيكل المرن) ← جهات النوع
   ← صفحة دخول الجهة باسم مستخدم مكتوب مسبقًا. تُشغَّل وتُطفأ من "الهيكل المرن"
   (theme.portalEnabled). الجهات المعروضة: كل مستوى له دخول مفعّل، وإلا الجهة
   الموجودة المربوطة به — وأي رابط معطّل لا تظهر بطاقته. الدخول نفسه يمر بنفس
   مسار الدخول المعتاد تمامًا (نفس الحساب والأدوار والمسارات). */
function portalEnabled() { return !!((((S.siteSettings || {}).theme) || {}).portalEnabled); }
function portalEntries() {
  const out = [];
  olActive().forEach((l) => {
    let kind = "", id = "";
    if (l.loginId && l.status !== "disabled") { kind = "level"; id = l.id; }
    else if (l.linkKind && l.linkId) { kind = l.linkKind; id = l.linkId; }
    if (!kind) return;
    const key = entryKey(kind, id);
    if (entryIconOf(key).linkOff) return;
    const info = entryInfo(kind, id);
    if (!info) return;
    if (out.some((x) => x.key === key)) return;
    out.push({ kind, id, key, name: info.name, type: l.type || "أخرى" });
  });
  return out;
}
function portalGroups() {
  const entries = portalEntries();
  const order = levelTypesList();
  const map = {};
  entries.forEach((e) => { (map[e.type] = map[e.type] || []).push(e); });
  return Object.keys(map).sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  }).map((t) => ({ type: t, items: map[t] }));
}
function portalActive() { return portalEnabled() && !S.currentUser && portalEntries().length > 0; }
function renderPortalPage() {
  const groups = portalGroups();
  const sel = S.ui.portalType ? groups.find((g) => g.type === S.ui.portalType) : null;
  const site = currentSiteSettings();
  const card = (inner, action, data, minH) => `<button type="button" data-action="${action}" ${Object.entries(data).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ")} style="flex:0 1 230px;min-width:150px;min-height:${minH}px;border:1px solid #fff;border-radius:20px;background:#fff;box-shadow:0 1px 2px rgba(107,35,55,.05),0 8px 22px rgba(107,35,55,.07);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:18px 14px;cursor:pointer;color:${INK};font-family:inherit;">${inner}</button>`;
  // أيقونة النوع = أيقونة أول جهة فيه (بلونها)
  const typeCards = groups.map((g) => card(`${entryIconHtml(g.items[0].key, 58)}<span style="font-size:16px;font-weight:800;">${esc(g.type)}</span><span style="font-size:12px;color:#6f5f66;margin-top:-6px;">${g.items.length === 1 ? "جهة واحدة" : g.items.length === 2 ? "جهتان" : g.items.length + (g.items.length < 11 ? " جهات" : " جهة")}</span>`, "portal-type", { type: g.type }, 160)).join("");
  const itemCards = sel ? sel.items.map((e) => card(`${entryIconHtml(e.key, 46)}<span style="font-size:14.5px;font-weight:800;line-height:1.5;">${esc(e.name)}</span>`, "portal-pick", { kind: e.kind, id: e.id }, 120)).join("") : "";
  return `
  <div class="login-wrap" style="align-items:flex-start;">
    <div style="width:100%;max-width:1040px;margin:0 auto;padding:28px 4px;display:flex;flex-direction:column;gap:24px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
        <img class="login-logo" src="${esc(siteLogoSrc(site))}" alt="جمعية فرقان" style="margin-bottom:4px;" />
        <div class="prs-title" style="font-size:24px;font-weight:900;color:#000;">${esc(site.platformName || "منصة التقارير")}</div>
        <div style="font-size:13px;color:#6f5f66;">${sel ? "اختاري جهتك" : "جمعية فرقان لتحفيظ القرآن الكريم بالطائف — اختاري نوع جهتك"}</div>
      </div>
      ${sel ? `<div style="display:flex;gap:8px;justify-content:center;align-items:center;font-size:13px;flex-wrap:wrap;">
        <button type="button" data-action="portal-back" style="min-height:40px;padding:0 14px;border-radius:999px;border:1px solid ${BORDER};background:#fff;color:${ROSE};font-weight:800;cursor:pointer;font-family:inherit;">كل الأنواع</button>
        <span style="color:#9c8b92;">‹</span><b>${esc(sel.type)}</b></div>` : ""}
      <div class="portal-grid" style="display:flex;flex-wrap:wrap;justify-content:center;gap:${sel ? 14 : 16}px;">${sel ? itemCards : typeCards}</div>
      <div style="text-align:center;"><button type="button" data-action="portal-skip" style="min-height:44px;padding:0 18px;border:none;background:transparent;color:#6f5f66;font-size:13px;text-decoration:underline;cursor:pointer;font-family:inherit;">ليس لك بطاقة؟ الدخول العادي</button></div>
    </div>
  </div>`;
}
function handlePortalAction(action, ds) {
  switch (action) {
    case "portal-type": {
      const g = portalGroups().find((x) => x.type === ds.type);
      if (g && g.items.length === 1) { S.entryLink = { kind: g.items[0].kind, id: g.items[0].id }; S.ui.portalType = ""; S.ui.portalFromType = ds.type; }
      else S.ui.portalType = ds.type;
      S.ui.loginUsernameVal = ""; S.ui.loginError = "";
      break;
    }
    case "portal-pick": S.ui.portalFromType = S.ui.portalType; S.entryLink = { kind: ds.kind, id: ds.id }; S.ui.loginUsernameVal = ""; S.ui.loginError = ""; break;
    case "portal-back": S.ui.portalType = ""; break;
    case "portal-skip": S.ui.portalSkip = true; S.entryLink = null; S.ui.loginUsernameVal = ""; break;
    case "portal-return": S.ui.portalSkip = false; S.entryLink = null; S.ui.loginUsernameVal = ""; S.ui.loginError = ""; break;
    default: return false;
  }
  render();
  return true;
}
// تحميل أسماء الجهات والهيكل قبل الدخول (لعرض البوابة)
function portalPreload() {
  // مع قاعدة البيانات: نقرأ النسخة المحفوظة محليًا فقط (بدون زرع بيانات تجريبية أو أي كتابة)،
  // ثم تُحدَّث من القاعدة بالخلفية. بدون قاعدة: نفس مصدر البيانات المحلي المعتاد.
  const cached = (k) => { try { const v = lsGet(k); return v ? JSON.parse(v) : []; } catch (e) { return []; } };
  if (dbConnected()) {
    if (!(S.units && S.units.length)) S.units = cached(UNITS_KEY);
    if (!(S.departments && S.departments.length)) S.departments = cached(DEPARTMENTS_KEY);
    if (!(S.offices && S.offices.length)) S.offices = cached(OFFICES_KEY);
  } else {
    S.units = S.units && S.units.length ? S.units : dataStore.getUnits();
    S.departments = S.departments && S.departments.length ? S.departments : dataStore.getDepartments();
    S.offices = S.offices && S.offices.length ? S.offices : dataStore.getOffices();
  }
}

/* =============================== Site settings (admin) ======================= */
function dashSettingsCardHtml() {
  const group = (title, blocks, kindIds) => {
    const kinds = DASH_KINDS.filter((k) => kindIds.indexOf(k.id) !== -1);
    const cell = (k, b) => {
      if (b.not && b.not.indexOf(k.id) !== -1) return `<td style="text-align:center;color:${SUBTLE};">—</td>`;
      const shown = !dashHidden(k.id, b.key);
      return `<td style="text-align:center;"><button type="button" data-action="dash-toggle" data-kind="${esc(k.id)}" data-key="${esc(b.key)}" title="${shown ? "ظاهر — اضغطي للإخفاء" : "مخفي — اضغطي للإظهار"}" style="width:34px;height:30px;border-radius:9px;cursor:pointer;font-size:15px;font-weight:800;border:1px solid ${shown ? GREEN : BORDER};background:${shown ? GREEN_BG : "#fff"};color:${shown ? GREEN : DANGER};">${shown ? "✓" : "✗"}</button></td>`;
    };
    return `<div style="margin-bottom:18px;">
      <div style="font-size:13px;font-weight:800;margin-bottom:8px;">${esc(title)}</div>
      <div class="table-wrap"><table class="prs-table"><thead><tr style="background:${GRAY_BG}"><th>العنصر</th>${kinds.map((k) => `<th style="text-align:center;">${esc(k.label)}</th>`).join("")}</tr></thead>
      <tbody>${blocks.map((b) => `<tr><td style="font-weight:600;">${esc(b.label)}</td>${kinds.map((k) => cell(k, b)).join("")}</tr>`).join("")}</tbody></table></div>
    </div>`;
  };
  const anyHidden = DASH_KINDS.some((k) => (dashConfig()[k.id] && (dashConfig()[k.id].hidden || []).length));
  return `<div class="card" style="max-width:760px;margin-bottom:16px;">
    <div class="subhead" style="margin-top:0;">ما يظهر في لوحة المعلومات</div>
    <div class="hint" style="margin-bottom:14px;">✓ يظهر · ✗ مخفي. الاختيار لنوع الجهة كله (كل الأقسام ترى الشكل نفسه). يُحفظ فورًا. الأصل أن كل شيء ظاهر.</div>
    ${group("لوحة مديرة النظام (متابعة التشغيل)", DASH_ADMIN_BLOCKS, ["admin"])}
    ${group("لوحة الوحدة والقسم والمكتب", DASH_STD_BLOCKS, DASH_STD_KINDS)}
    ${group("لوحة الإشراف (الإدارة العليا، وصفحة لوحة المكتب القديمة)", DASH_EX_BLOCKS, DASH_EX_KINDS)}
    <div>${pillBtn("إظهار كل العناصر للجميع", { variant: "ghost", icon: iconX(14, INK), action: "dash-reset", disabled: !anyHidden })}</div>
  </div>`;
}
/* =============================== إدارة التقارير ===============================
   تنسيق كامل لكل تقرير (الصفحة، الكليشة، الغلاف، الفصول، الرسوم، الجداول، الخطوط)
   + إنشاء تقارير مجمّعة جديدة. كل الإعدادات في site_settings.theme_json.reportTemplates
   = { final, unit, custom: [...] }. صفحة الإدارة تعرض المعاينة على بيانات وهمية فقط —
   لا تقرأ أي تقرير حقيقي. */
const REPORT_FONTS = ["Almarai", "IBM Plex Sans Arabic", "Cairo", "Tajawal", "Changa", "Noto Kufi Arabic", "Reem Kufi", "Amiri"];
const RPT_SIZES = { A4: [210, 297], A3: [297, 420], Letter: [216, 279] };
// أعلى، أسفل، يمين، يسار (مم)
const RPT_MARGINS = { narrow: [10, 12, 10, 10], normal: [18, 18, 15, 15], wide: [26, 26, 22, 22] };
const RPT_COMMON_DEFAULTS = {
  size: "A4", orient: "portrait", margin: "normal", mt: 18, mb: 18, mr: 15, ml: 15,
  paper: "#FFFDF9", bgImage: "", watermark: false, frame: false, spine: false,
  showHead: false, headRight: "", headLogo: true, headCenter: "", headLeft: "", showFoot: false, footText: "", pageNum: "none",
  order: [], hidden: {}, titles: {}, hiddenCols: {}, limit: 10, perPage: 0, showEmpty: false,
  charts: {}, thAlign: "right", tdAlign: "right", numCenter: false,
  thBg: "#f4ece4", thColor: "", tableBorders: "rows", zebra: false, tableFs: 12,
  fontBody: "Almarai", fontTitle: "Amiri", fontHeading: "Cairo", mainColor: "#6b2337", chapterBg: "#f3e8dd",
  showCover: true, showCoverMeta: true, assocName: "جمعية فرقان لتحفيظ القرآن الكريم بالطائف", coverTitle: "", coverSub: "", preparedBy: "",
};
const RPT_FINAL_DEFAULTS = { ...RPT_COMMON_DEFAULTS, coverTitle: "التقرير الإداري النهائي", coverSub: "تقرير منتقى — أبرز ما يستحق قرار الإدارة، لا كل البيانات", preparedBy: "الإدارة العليا" };
const RPT_UNIT_DEFAULTS = { ...RPT_COMMON_DEFAULTS, fontTitle: "Cairo", pageNum: "paren", spine: true, perPage: 2 };
const RPT_CUSTOM_DEFAULTS = { ...RPT_COMMON_DEFAULTS, name: "", scopeLevelId: "", periodKind: "all", year: "", coverSub: "", preparedBy: "" };
const RPT_NUM_KEYS = ["mt", "mb", "mr", "ml", "limit", "tableFs", "year", "perPage"];
// خانات الاعتماد (المسمى + الاسم). {المعدة} و{الرئيسة} تُستبدل من بيانات التقرير، و{الإعداد} من حقل «إعداد» بالغلاف
const RPT_UNIT_APPROVAL = [{ role: "المسؤولة عن التقرير", name: "{المعدة}" }, { role: "المراجعة", name: "{الرئيسة}" }, { role: "الاعتماد", name: "" }];
const RPT_AGG_APPROVAL = [{ role: "إعداد", name: "{الإعداد}" }, { role: "المراجعة", name: "" }, { role: "الاعتماد", name: "" }];
function rptApprovalGridHtml(boxes, tokens) {
  const fill = (t) => Object.keys(tokens).reduce((a, k) => a.split(k).join(tokens[k] || ""), String(t || ""));
  const list = (boxes && boxes.length ? boxes : RPT_AGG_APPROVAL).slice(0, 6);
  return `<div class="rpt-approval-grid" style="grid-template-columns:repeat(${list.length},1fr);">${list.map((b) => `<div class="rpt-approval-box"><div class="rpt-approval-role">${esc(b.role || " ")}</div><div class="rpt-approval-line">${esc(fill(b.name).trim()) || "&nbsp;"}</div></div>`).join("")}</div>`;
}
// فصول التقرير المجمّع (التقرير الإداري النهائي + أي تقرير جديد)
const AGG_CHAPTERS = [
  { key: "summary", title: "ملخص الإدارة", icon: "sparkles" },
  { key: "perf", title: "مستوى أداء الأقسام والوحدات", icon: "building" },
  { key: "indicators", title: "المؤشرات والأرقام", icon: "gauge" },
  { key: "yearCompare", title: "مقارنة آخر 3 سنوات — المستهدف والمتحقق", icon: "gauge" },
  { key: "programs", title: "الأعمال والبرامج وإحصائية الإنجاز", icon: "layers" },
  { key: "achievements", title: "أعلى الإنجازات ذات الأثر", icon: "sparkles" },
  { key: "strengths", title: "نقاط القوة المشتركة", icon: "check" },
  { key: "challenges", title: "الصعوبات المتكررة والخطيرة", icon: "bell" },
  { key: "recs", title: "التوصيات التي تحتاج قرار الإدارة", icon: "pencil" },
  { key: "initiatives", title: "المبادرات القابلة للتعميم", icon: "layers" },
  { key: "nextTasks", title: "أولويات الفترة القادمة", icon: "calendar" },
  { key: "closing", title: "الخاتمة والاعتماد", icon: "check" },
];
// فصول "عرض التقرير كاملًا" (تقرير الوحدة) = أقسام التعبئة نفسها (إدارة أقسام التقرير) بنفس الأسماء والترتيب،
// + «ملخص التقرير» أولًا و«الإغلاق والاعتماد» آخرًا. أي قسم جديد يظهر تلقائيًا.
const UNIT_SECTION_ICONS = { basic: "document", goals: "target", kpi: "gauge", programs: "layers", tools: "layers", analysis: "check", strengths: "check", challenges: "bell", improvement: "pencil", initiatives: "sparkles", impact: "sparkles", recommendations: "pencil", nextplan: "calendar", evidence: "save", review: "check" };
function unitChapterDefs(report, unitId) {
  return [
    { key: "summary", title: "ملخص التقرير", icon: "sparkles", special: "summary" },
    ...(report ? reportSections(report, unitId) : SECTIONS).map((sc) => ({ key: sc.id, title: sc.label, icon: UNIT_SECTION_ICONS[sc.id] || "document", sections: [sc.id] })),
    { key: "approval", title: "الإغلاق والاعتماد", icon: "check", special: "approval" },
  ];
}
// الرسوم البيانية في كل تقرير — لكل رسم إعداده (النوع، الألوان، الحجم).
// dist = توزيع فئات (دائري/أعمدة)، series = قيمة لكل عنصر بنسبة مئوية (أعمدة/خطي)
const RPT_CHARTS = {
  unit: [
    { id: "u-indStatus", title: "توزيع حالات المؤشرات", where: "ملخص التقرير", kind: "dist", native: "donut", cats: () => ["متحقق", "قريب من المستهدف", "يحتاج تدخلاً", "متعثر", "بلا بيانات"] },
    { id: "u-goalLevels", title: "توزيع مستويات تحقق الأهداف", where: "ملخص التقرير", kind: "dist", native: "donut", cats: () => GOAL_LEVELS.slice() },
    { id: "u-kpi", title: "نسبة إنجاز كل مؤشر", where: "مؤشرات الأداء", kind: "series", native: "bars" },
    { id: "u-programs", title: "حالة تنفيذ الأعمال", where: "الأعمال والبرامج", kind: "dist", native: "donut", cats: () => [...(((SECTION_FIELD_SCHEMAS.programs || {}).fields || []).find((f) => f.id === "executionStatus") || { options: [] }).options || [], "غير محدد"] },
    { id: "u-challenges", title: "مستويات الصعوبات", where: "الصعوبات والتحديات", kind: "dist", native: "donut", cats: () => ["حرج", "مرتفع", "متوسط", "منخفض", "غير محدد"] },
    { id: "u-recs", title: "أولويات التوصيات", where: "التوصيات", kind: "dist", native: "bars", cats: () => ["عاجلة", "عالية", "متوسطة", "منخفضة", "غير محدد"] },
  ],
  agg: [
    { id: "a-status", title: "حالة التقارير", where: "ملخص الإدارة", kind: "dist", native: "donut", cats: () => ["مكتمل", "قيد الإعداد"] },
    { id: "a-deptPerf", title: "متوسط أداء الأقسام", where: "مستوى أداء الأقسام والوحدات", kind: "series", native: "bars" },
  ],
};
function rptChartDef(id) {
  const fixed = [...RPT_CHARTS.unit, ...RPT_CHARTS.agg].find((c) => c.id === id);
  if (fixed) return fixed;
  const cc = ((RPT_CTX && RPT_CTX.customCharts) || []).find((c) => c.id === id);
  return cc ? rptCustomChartDef(cc) : { id, kind: "series", native: "bars" };
}

/* ---- عناصر تُضاف من «إدارة التقارير» بدل أن تكون ثابتة بالكود: رسوم، فصول، خطوط، أحجام صفحات ---- */
const RPT_OPTION_TYPES = ["select", "radio", "expandableSelect", "checklist"];
function rptSectionFields(sid) { const sc = SECTION_FIELD_SCHEMAS[sid]; return sc ? (sc.fields || []).filter((f) => f && f.id) : []; }
function rptSectionsWithFields() { return SECTIONS.filter((sc) => rptSectionFields(sc.id).length); }
// عناصر قسم في تقرير (كل صف/عنصر مُدخل) — القسم الثابت = عنصر واحد
function rptSectionItems(report, sid) {
  const sc = SECTION_FIELD_SCHEMAS[sid];
  const d = report && report.sections && report.sections[sid] && report.sections[sid].data;
  if (!d || !sc) return [];
  if (sc.fixed) return rptHasValue(d) ? [d] : [];
  const arr = d[sc.arrayKey || sid];
  return Array.isArray(arr) ? arr.filter(rptHasValue) : [];
}
function rptChartFieldKind(f) { return f && RPT_OPTION_TYPES.includes(f.type) ? "dist" : f && f.type === "number" ? "series" : ""; }
function rptChartableFields(sid) { return rptSectionFields(sid).filter((f) => rptChartFieldKind(f)); }
function rptCustomChartDef(cc) {
  const f = rptSectionFields(cc.section).find((x) => x.id === cc.field);
  const kind = rptChartFieldKind(f) || "dist";
  return { id: cc.id, title: cc.title || (f ? f.label : "رسم"), kind, native: kind === "dist" ? "donut" : "bars", raw: kind === "series",
    cats: () => (kind === "dist" ? [...((f && f.options) || []), "غير محدد"] : ["__all"]) };
}
// بيانات رسم مضاف: توزيع قيم حقل اختيارات، أو قيمة حقل رقمي لكل عنصر (تقرير وحدة) / مجموعها لكل وحدة (تقرير مجمّع)
function rptCustomChartItems(cc, entries, perUnit) {
  const f = rptSectionFields(cc.section).find((x) => x.id === cc.field);
  if (!f) return [];
  const kind = rptChartFieldKind(f);
  const shades = ["#6b2337", "#8a3350", "#c26b85", "#d8c4a8", "#a8a29a", "#7a4d16", "#24527a", "#2E6B52"];
  if (kind === "dist") {
    const counts = {};
    entries.forEach((e) => rptSectionItems(e.report, cc.section).forEach((it) => {
      const v = it[f.id];
      if (v && typeof v === "object" && !Array.isArray(v)) Object.keys(v).filter((k) => v[k]).forEach((k) => { counts[k] = (counts[k] || 0) + 1; });
      else { const k = schemaFieldText(v) || "غير محدد"; counts[k] = (counts[k] || 0) + 1; }
    }));
    return Object.keys(counts).map((k, i) => ({ label: k, value: counts[k], color: shades[i % shades.length] }));
  }
  const labelField = rptSectionFields(cc.section).find((x) => x.type === "text" || x.type === "select" || x.type === "radio");
  if (perUnit) {
    return entries.map((e) => ({ label: e.unit.name, value: rptSectionItems(e.report, cc.section).reduce((a, it) => a + (Number(it[f.id]) || 0), 0), color: "var(--rpt-burgundy)" }))
      .reduce((acc, x) => { const ex = acc.find((y) => y.label === x.label); if (ex) ex.value += x.value; else acc.push(x); return acc; }, []).filter((x) => x.value);
  }
  return entries.flatMap((e) => rptSectionItems(e.report, cc.section)).filter((it) => it[f.id] !== "" && it[f.id] != null && !isNaN(Number(it[f.id])))
    .map((it, i) => ({ label: (labelField && schemaFieldText(it[labelField.id])) || arabicDigits(i + 1), value: Number(it[f.id]), color: "var(--rpt-burgundy)" }));
}
// الرسوم المضافة لفصل معيّن
function rptCustomChartsFor(s, chapterKey, entries, perUnit) {
  return (s.customCharts || []).filter((cc) => cc.chapter === chapterKey).map((cc) => {
    const items = rptCustomChartItems(cc, entries, perUnit);
    const ch = rptChart(cc.id, items, { size: 140, height: 170 });
    return ch ? `<div class="rpt-subheading">${esc(rptCustomChartDef(cc).title)}</div>${ch}` : "";
  }).join("");
}
// فصل مضاف في التقرير المجمّع: جدول من حقول قسم عبر كل الوحدات
function aggCustomChapterRows(ch, data) {
  const rows = [];
  (data.flat || []).forEach((x) => rptSectionItems(x.report, ch.section).forEach((it) => rows.push({ unit: x.unit.name, t: x.report.createdAt || 0, it })));
  const f = rptSectionFields(ch.section).find((x) => x.id === ch.sortField);
  if (ch.sort === "oldest") rows.sort((a, b) => a.t - b.t);
  else if (ch.sort === "field" && f) rows.sort((a, b) => { const x = a.it[f.id], y = b.it[f.id]; const nx = Number(x), ny = Number(y); return !isNaN(nx) && !isNaN(ny) ? ny - nx : String(schemaFieldText(x)).localeCompare(String(schemaFieldText(y)), "ar"); });
  else rows.sort((a, b) => b.t - a.t);
  return rows.slice(0, Math.max(1, Number(ch.limit) || 10));
}
function aggCustomChapterBody(ch, data) {
  const all = rptSectionFields(ch.section);
  const fields = (ch.fields && ch.fields.length ? all.filter((f) => ch.fields.includes(f.id)) : all.slice(0, 4));
  const rows = aggCustomChapterRows(ch, data);
  if (!rows.length || !fields.length) return emptyHint("لا توجد بيانات مُدخلة بعد.");
  return reportTable(["الوحدة", ...fields.map((f) => f.label || f.id)], rows.map((r) => [esc(r.unit), ...fields.map((f) => esc(schemaFieldText(r.it[f.id]) || "—"))]));
}
function aggChapterDefs(s) {
  return [...AGG_CHAPTERS, ...(s.customChapters || []).map((ch) => ({ key: ch.id, title: ch.title || "فصل جديد", icon: "layers", custom: ch }))];
}
// الخطوط وأحجام الصفحات المضافة (عامة لكل التقارير)
function reportFontsAll() { return [...REPORT_FONTS, ...rptStore().fonts.filter((f) => !REPORT_FONTS.includes(f))]; }
const RPT_FONT_NAME_RE = /^[A-Za-z0-9 ]{2,40}$/;
function ensureReportFontsLoaded() {
  rptStore().fonts.forEach((f) => {
    if (!RPT_FONT_NAME_RE.test(f) || REPORT_FONTS.includes(f)) return;
    const id = "rptfont-" + f.replace(/ /g, "-");
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(f).replace(/%20/g, "+") + "&display=swap";
    document.head.appendChild(l);
  });
}
function rptSizeList() { return [...Object.keys(RPT_SIZES).map((k) => ({ id: k, name: k, w: RPT_SIZES[k][0], h: RPT_SIZES[k][1], base: true })), ...rptStore().sizes]; }
function rptSizeOf(id) { return rptSizeList().find((x) => x.id === id) || null; }
function rptSaveGlobal(patch) {
  const st = rptStore();
  saveSiteTheme({ reportTemplates: { final: st.final, unit: st.unit, custom: st.custom, fonts: st.fonts, sizes: st.sizes, ...patch } });
}
function rptIcon(key) {
  const m = { sparkles: iconSparkles, building: iconBuilding2, gauge: iconGauge2, layers: iconLayers, check: iconCheckCircle, bell: iconBell, pencil: iconPencil, calendar: iconCalendarSmall, document: iconDocument, target: iconTarget, save: iconSave };
  return m[key] || iconDocument;
}
function rptStore() {
  const th = ((S.siteSettings || {}).theme) || {};
  const t = th.reportTemplates || {};
  return { final: t.final || null, unit: t.unit || null, custom: Array.isArray(t.custom) ? t.custom : [],
    fonts: Array.isArray(t.fonts) ? t.fonts.filter((f) => RPT_FONT_NAME_RE.test(f)) : [],
    sizes: Array.isArray(t.sizes) ? t.sizes.filter((z) => z && z.id && Number(z.w) >= 50 && Number(z.h) >= 50) : [] };
}
function rptNormalize(s) {
  ["hidden", "titles", "hiddenCols", "colsShow"].forEach((k) => { if (!s[k] || typeof s[k] !== "object" || Array.isArray(s[k])) s[k] = {}; });
  if (!Array.isArray(s.order)) s.order = [];
  if (!s.charts || typeof s.charts !== "object" || Array.isArray(s.charts)) s.charts = {};
  if (s.breakEach) { s.perPage = 1; delete s.breakEach; } // إعداد قديم: «كل فصل بصفحة»
  s.perPage = Math.max(0, Math.min(6, Number(s.perPage) || 0));
  RPT_NUM_KEYS.forEach((k) => { if (k !== "year" && k !== "perPage") s[k] = Number(s[k]) || RPT_COMMON_DEFAULTS[k]; });
  if (!rptSizeOf(s.size)) s.size = "A4";
  ["customCharts", "customChapters"].forEach((k) => { if (!Array.isArray(s[k])) s[k] = []; });
  if (!Array.isArray(s.approvalBoxes) || !s.approvalBoxes.length) s.approvalBoxes = (s.__unit ? RPT_UNIT_APPROVAL : RPT_AGG_APPROVAL).map((x) => ({ ...x }));
  return s;
}
// إعدادات تقرير: "final" | "unit" | معرّف تقرير مجمّع جديد
function rptSettings(id) {
  const st = rptStore();
  if (id === "final") {
    const legacy = ((((S.siteSettings || {}).theme) || {}).reportStyle) || {}; // إعدادات الشكل القديمة من إعدادات الموقع
    return rptNormalize({ ...RPT_FINAL_DEFAULTS, ...legacy, ...(st.final || {}) });
  }
  if (id === "unit") { const u = rptNormalize({ ...RPT_UNIT_DEFAULTS, __unit: true, ...(st.unit || {}) }); delete u.__unit; return u; }
  const c = st.custom.find((x) => x.id === id);
  return c ? rptNormalize({ ...RPT_CUSTOM_DEFAULTS, coverTitle: c.name || "", ...c }) : null;
}
function rptSave(id, settings) {
  const st = rptStore();
  const out = { final: st.final, unit: st.unit, custom: st.custom.slice(), fonts: st.fonts, sizes: st.sizes };
  if (id === "final" || id === "unit") out[id] = settings;
  else {
    const i = out.custom.findIndex((x) => x.id === id);
    if (i >= 0) out.custom[i] = { ...settings, id }; else out.custom.push({ ...settings, id });
  }
  saveSiteTheme({ reportTemplates: out });
  syncCustomReportPages();
}
function rptDeleteCustom(id) {
  const st = rptStore();
  saveSiteTheme({ reportTemplates: { final: st.final, unit: st.unit, custom: st.custom.filter((x) => x.id !== id), fonts: st.fonts, sizes: st.sizes } });
  syncCustomReportPages();
}
// كل تقرير مجمّع جديد = صفحة تُمنح بالدور (تظهر تحت «التقارير المجمّعة»)
function syncCustomReportPages() {
  for (let i = SIDEBAR_PAGES.length - 1; i >= 0; i--) if (SIDEBAR_PAGES[i].id.indexOf("crpt-") === 0) SIDEBAR_PAGES.splice(i, 1);
  rptStore().custom.forEach((c) => SIDEBAR_PAGES.push({ id: "crpt-" + c.id, label: c.name || "تقرير مجمّع", group: "التقارير المجمّعة", icon: "layers" }));
}
function rptOrdered(defs, s) {
  const keys = defs.map((d) => d.key);
  const ord = (s.order || []).filter((k) => keys.includes(k));
  keys.forEach((k) => { if (!ord.includes(k)) ord.push(k); });
  return ord.map((k) => defs.find((d) => d.key === k));
}
function rptChapterTitle(def, s) { return ((s.titles || {})[def.key] || "").trim() || def.title; }
function rptPageDims(s) { const z = rptSizeOf(s.size) || rptSizeOf("A4"); const d = [Number(z.w), Number(z.h)]; return s.orient === "landscape" ? [d[1], d[0]] : d; }
function rptMargins(s) {
  if (s.margin === "custom") return [s.mt, s.mb, s.mr, s.ml].map((n) => Math.max(0, Math.min(50, Number(n) || 0)));
  return RPT_MARGINS[s.margin] || RPT_MARGINS.normal;
}
const rptCssSafe = (v) => String(v == null ? "" : v).replace(/[;"<>{}()\\]/g, "");
const RPT_DATA_IMG_RE = /^data:image\/[a-z+.-]+;base64,[A-Za-z0-9+/=]+$/;
// يغلّف مستند التقرير بمتغيرات التنسيق (تُطبَّق على هذا التقرير فقط)
function rptWrap(s, inner, isPreview) {
  const [w, h] = rptPageDims(s);
  const [t, b, r, l] = rptMargins(s);
  const main = /^#[0-9a-fA-F]{6}$/.test(s.mainColor) ? s.mainColor : "#6b2337";
  let vars = `--rpt-burgundy:${main};--rpt-burgundy-dark:${mixHex(main, "#000000", 0.25)};--rpt-paper:${rptCssSafe(s.paper)};--rpt-chapter-bg:${rptCssSafe(s.chapterBg)};` +
    `--rpt-font-body:'${rptCssSafe(s.fontBody)}';--rpt-font-title:'${rptCssSafe(s.fontTitle)}';--rpt-font-heading:'${rptCssSafe(s.fontHeading)}';` +
    `--rpt-page-w:${w}mm;--rpt-page-h:${h}mm;--rpt-mt:${t}mm;--rpt-mb:${b}mm;--rpt-mr:${r}mm;--rpt-ml:${l}mm;` +
    `--rpt-th-align:${["right", "center", "left"].includes(s.thAlign) ? s.thAlign : "right"};--rpt-td-align:${["right", "center", "left"].includes(s.tdAlign) ? s.tdAlign : "right"};` +
    `--rpt-th-bg:${rptCssSafe(s.thBg)};--rpt-th-color:${rptCssSafe(s.thColor || main)};--rpt-table-fs:${Math.max(9, Math.min(16, Number(s.tableFs) || 12))}px;`;
  if (s.bgImage && RPT_DATA_IMG_RE.test(s.bgImage)) vars += `--rpt-bg-img:url("${s.bgImage}");`;
  const cls = ["rpt-wrap", s.zebra ? "rpt-zebra" : "", s.tableBorders === "grid" ? "rpt-tgrid" : s.tableBorders === "none" ? "rpt-tnone" : "", s.frame ? "rpt-frame" : "", vars.indexOf("--rpt-bg-img") !== -1 ? "rpt-bgimg" : ""].filter(Boolean).join(" ");
  ensureReportFontsLoaded();
  const pageCss = isPreview ? "" : `<style>@page{size:${w}mm ${h}mm;margin:0}</style>`;
  return `${pageCss}<div class="${cls}" style="${vars}">${inner}</div>`;
}
function rptPageNumText(s, n, total) {
  if (s.pageNum === "paren") return `(${arabicDigits(n)})`;
  if (s.pageNum === "num") return arabicDigits(n);
  if (s.pageNum === "of") return `${arabicDigits(n)} من ${arabicDigits(total)}`;
  return "";
}
// صفحة واحدة من التقرير مع الكليشة (رأس) والتذييل ورقم الصفحة والعلامة المائية
function rptPageHtml(s, inner, n, total) {
  const head = s.showHead ? `<div class="rpt-runhead"><span>${esc(s.headRight)}</span><span class="rpt-runhead-c">${s.headLogo ? `<img src="${ASSOCIATION_LOGO}" alt="" />` : ""}${s.headCenter ? `<b>${esc(s.headCenter)}</b>` : ""}</span><span>${esc(s.headLeft)}</span></div>` : "";
  const num = rptPageNumText(s, n, total);
  const foot = (s.showFoot && s.footText) || num ? `<div class="rpt-runfoot"><span>${s.showFoot ? esc(s.footText) : ""}</span><span class="rpt-runfoot-num">${num}</span><span></span></div>` : "";
  return `<section class="a4-page${s.spine ? " has-spine" : ""}">${s.spine ? `<div class="rpt-spine"></div>` : ""}${s.watermark ? `<div class="rpt-wm" style="background-image:url('${ASSOCIATION_LOGO}')"></div>` : ""}${head}${inner}${foot}</section>`;
}

/* ---- سياق الرسم: نوع الرسوم وألوانها وحجمها والأعمدة المخفية — يقرؤه svgBarChart/svgPieChart/reportTable ---- */
let RPT_CTX = null;
function rptWithCtx(ctx, fn) { const prev = RPT_CTX; RPT_CTX = ctx; try { return fn(); } finally { RPT_CTX = prev; } }
function rptChartCtx(s) {
  // s.chartType/chartColors/chartSize = إعدادات عامة قديمة (قبل إعداد كل رسم) — تبقى قيمة افتراضية لما لم يُضبط
  return { charts: s.charts || {}, legacy: { type: s.chartType === "hide" ? "hide" : "auto", colors: s.chartColors === "main" ? "main" : "status", size: s.chartSize || "md" }, main: s.mainColor,
    numCenter: !!s.numCenter, customCharts: s.customCharts || [] };
}
function rptChartCfg(id) {
  const ctx = RPT_CTX || {};
  const lg = ctx.legacy || { type: "auto", colors: "status", size: "md" };
  const c = (ctx.charts && ctx.charts[id]) || {};
  return { type: c.type || lg.type, colors: c.colors || lg.colors, size: c.size || lg.size, custom: c.custom || {} };
}
// يرسم رسمًا بيانيًا حسب إعداده في «إدارة التقارير». items: [{label, value, color}]
// dist: القيم أعداد لكل فئة. series: القيم نسب 0..100. wrapDonut: تنسيق حاوية الدائري.
function rptChart(id, items, opts) {
  opts = opts || {};
  const def = rptChartDef(id);
  const cfg = rptChartCfg(id);
  let type = cfg.type === "auto" || !cfg.type ? def.native : cfg.type;
  if (def.kind === "dist" && type === "line") type = "bars";
  if (def.kind === "series" && type === "donut") type = "bars";
  if (type === "hide" || !items.length) return "";
  const main = (RPT_CTX && RPT_CTX.main) || "#6b2337";
  if (cfg.colors === "main") { const sh = rptMonoShades(main, items.length); items = items.map((it, i) => ({ ...it, color: sh[i] })); }
  else if (cfg.colors === "custom") items = items.map((it) => ({ ...it, color: cfg.custom[it.label] || cfg.custom.__all || it.color }));
  const scale = { sm: 0.75, md: 1, lg: 1.3 }[cfg.size] || 1;
  if (def.kind === "dist") {
    if (type === "bars") {
      const tot = items.reduce((a, x) => a + (Number(x.value) || 0), 0);
      if (!tot) return "";
      return `<div style="margin-bottom:14px;">${svgBarChart(items.map((x) => ({ label: x.label, value: Math.round(((Number(x.value) || 0) / tot) * 100), color: x.color })), { height: Math.round((opts.height || 150) * scale) })}</div>`;
    }
    return `<div style="${opts.wrapDonut || "margin:0 auto 14px;"}">${svgPieChart(items, { size: Math.round((opts.size || 140) * scale) })}</div>`;
  }
  const h = Math.round((opts.height || 180) * scale);
  const o = def.raw ? { height: h, max: Math.max(1, ...items.map((x) => Number(x.value) || 0)), suffix: "" } : { height: h };
  return `<div style="margin-bottom:14px;">${type === "line" ? svgLineChart(items, o) : svgBarChart(items, o)}</div>`;
}
function svgLineChart(items, opts) {
  opts = opts || {};
  const w = 640, h = opts.height || 200, padTop = 18, padBottom = 34, padX = 30;
  const chartH = h - padTop - padBottom, n = items.length;
  const xFor = (i) => (n === 1 ? w / 2 : padX + (i * (w - padX * 2)) / (n - 1));
  const max = opts.max || 100, sfx = opts.suffix == null ? "٪" : opts.suffix;
  const yFor = (v) => padTop + chartH - (Math.max(0, Math.min(max, v)) / max) * chartH;
  const color = (items[0] && items[0].color) || "var(--rpt-burgundy)";
  const grid = [0, 50, 100].map((g) => `<line x1="${padX}" y1="${yFor(g)}" x2="${w - padX}" y2="${yFor(g)}" stroke="${BORDER}" stroke-dasharray="3,3" />`).join("");
  const pts = items.map((it, i) => `${xFor(i).toFixed(1)},${yFor(it.value).toFixed(1)}`).join(" ");
  const dots = items.map((it, i) => {
    const label = it.label.length > 12 ? it.label.slice(0, 12) + "…" : it.label;
    return `<circle cx="${xFor(i).toFixed(1)}" cy="${yFor(it.value).toFixed(1)}" r="4.5" fill="${it.color || color}"><title>${esc(it.label)}: ${it.value}${sfx}</title></circle>
      <text x="${xFor(i).toFixed(1)}" y="${(yFor(it.value) - 9).toFixed(1)}" font-size="10.5" font-weight="800" fill="${INK}" text-anchor="middle">${it.value}${sfx}</text>
      <text x="${xFor(i).toFixed(1)}" y="${h - padBottom + 16}" font-size="9.5" fill="${SUBTLE}" text-anchor="middle">${esc(label)}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:100%;">${grid}<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />${dots}</svg>`;
}
function rptMonoShades(main, n) { const steps = [0, 0.3, 0.5, 0.65, 0.78, 0.86]; return Array.from({ length: n }, (_, i) => mixHex(main, "#ffffff", steps[i % steps.length])); }

/* ---- التقرير المجمّع: البيانات ---- */
function aggReportYear(s) {
  if (s.periodKind === "current") return hijriYearFromTs(Date.now());
  if (s.periodKind === "year") return Number(s.year) || null;
  return null;
}
function aggReportData(s) {
  let units = scopeUnitsFilter(S.units.filter((u) => u.status === "active"));
  const scoped = !!(s.scopeLevelId && olFind(s.scopeLevelId));
  if (scoped) { const ids = olScopeUnitIds(s.scopeLevelId); units = units.filter((u) => ids.has(u.id)); }
  const year = aggReportYear(s);
  let flat = collectReportsFlatForUnits(units);
  if (year) flat = flat.filter((x) => reportHijriYearNum(x.report) === year);
  let depts = scopeDeptsFilter(S.departments.filter((d) => d.status === "active"));
  if (scoped) depts = depts.filter((d) => units.some((u) => u.departmentId === d.id));
  const latest = (uid) => {
    if (!year) return latestReportForUnit(uid);
    const l = flat.filter((x) => x.unit.id === uid);
    return l.length ? l[l.length - 1].report : emptyReport();
  };
  const finalUnits = units.filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report");
  const lim = Math.max(1, Number(s.limit) || 10);
  const curated = (x, kind, id) => isItemCurated(x.unit, curationKey(kind, x.report.id, id));
  const sortCurated = (arr) => [...arr].sort((a, b) => (b.curated ? 1 : 0) - (a.curated ? 1 : 0));
  const total = flat.length;
  const completed = flat.filter((x) => x.report.status === "completed").length;
  const dates = flat.map((x) => x.report.sections?.basic?.data).filter(Boolean);
  const startDates = dates.map((d) => d.startDate).filter(Boolean).sort();
  const endDates = dates.map((d) => d.endDate).filter(Boolean).sort();
  const indicators = [];
  flat.forEach((x) => (x.report.sections?.kpi?.data?.indicators || []).filter((r) => r.name).forEach((row) => indicators.push({ ...row, unitName: x.unit.name })));
  const achievements = [];
  flat.forEach((x) => (x.report.sections?.programs?.data?.programs || []).filter((p) => p.highlightResult).forEach((p) => achievements.push({ unitName: x.unit.name, name: p.name, highlightResult: p.highlightResult, curated: curated(x, "achievement", p.id) })));
  const strengths = [];
  flat.forEach((x) => (x.report.sections?.strengths?.data?.strengths || []).forEach((it) => strengths.push({ unitName: x.unit.name, name: it.name, area: it.area, curated: curated(x, "strength", it.id) })));
  const severityRank = { "حرج": 3, "مرتفع": 2, "متوسط": 1, "منخفض": 0 };
  const challenges = [];
  flat.forEach((x) => (x.report.sections?.challenges?.data?.challenges || []).forEach((c) => challenges.push({ ...c, unitName: x.unit.name, curated: curated(x, "challenge", c.id) })));
  const priorityRank = { "عاجلة": 3, "عالية": 2, "متوسطة": 1, "منخفضة": 0 };
  const recs = [];
  flat.forEach((x) => (x.report.sections?.recommendations?.data?.recommendations || []).forEach((r) => recs.push({ ...r, unitName: x.unit.name, curated: curated(x, "recommendation", r.id) })));
  const initiatives = [];
  flat.forEach((x) => (x.report.sections?.initiatives?.data?.initiatives || []).forEach((it) => initiatives.push({ ...it, unitName: x.unit.name })));
  const nextTasks = [];
  flat.forEach((x) => (x.report.sections?.nextplan?.data?.mainTasks || []).forEach((t) => nextTasks.push({ ...t, unitName: x.unit.name })));
  const deptPerf = depts.map((dept) => {
    const du = units.filter((u) => u.departmentId === dept.id);
    const pcts = du.map((u) => computeProgress(latest(u.id)).percent);
    return { name: dept.name, count: du.length, avg: pcts.length ? Math.round(pcts.reduce((a, v) => a + v, 0) / pcts.length) : 0 };
  });
  return {
    flat,
    total, completed, completionPct: total ? Math.round((completed / total) * 100) : 0,
    deptCount: depts.length, unitCount: units.length,
    periodText: startDates.length ? `${startDates[0]} — ${endDates[endDates.length - 1] || "—"}` : "",
    yearText: year ? hijriYearLabel(year) : "",
    deptPerf,
    unitRows: units.map((u) => { const dept = S.departments.find((d) => d.id === u.departmentId); return [esc(u.name), esc(dept ? dept.name : "—"), computeProgress(latest(u.id)).percent + "٪"]; }),
    indicators: indicators.slice(0, lim * 2),
    achievements: sortCurated(achievements).slice(0, lim),
    strengths: sortCurated(strengths).slice(0, lim),
    challenges: [...challenges].sort((a, b) => (b.curated ? 1 : 0) - (a.curated ? 1 : 0) || (severityRank[b.severity] || 0) - (severityRank[a.severity] || 0)).slice(0, lim),
    recs: [...recs].sort((a, b) => (b.curated ? 1 : 0) - (a.curated ? 1 : 0) || (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0)).slice(0, lim),
    initiatives: initiatives.filter((it) => it.scalability).slice(0, lim),
    nextTasks: nextTasks.slice(0, lim * 2),
    yearCompareHtml: () => yearCompareReportChapterBody(finalUnits),
    programsHtml: () => programsReportChapterBody(finalUnits, year),
    hasYearCompare: () => { const yc = yearlyComparisonData(finalUnits); return !!(yc.indicators.length || yc.goals.length); },
    hasPrograms: () => collectProgramsForUnits(finalUnits, year).length > 0,
  };
}
// بيانات وهمية للمعاينة في صفحة إدارة التقارير (لا علاقة لها بأي تقرير حقيقي)
function aggFakeData(s) {
  const lim = Math.max(1, Number(s.limit) || 10);
  const U = ["وحدة نموذجية أ", "وحدة نموذجية ب", "مركز نموذجي ج", "وحدة نموذجية د"];
  const rows = (n, f) => Array.from({ length: n }, (_, i) => f(i, U[i % U.length]));
  const sev = ["حرج", "مرتفع", "متوسط", "منخفض"], pr = ["عاجلة", "عالية", "متوسطة", "منخفضة"];
  return {
    total: 24, completed: 18, completionPct: 75, deptCount: 3, unitCount: 8, periodText: "١٤٤٨/٠١/٠١ — ١٤٤٨/٠٦/٣٠", yearText: "",
    deptPerf: [{ name: "قسم نموذجي ١", count: 3, avg: 82 }, { name: "قسم نموذجي ٢", count: 3, avg: 67 }, { name: "قسم نموذجي ٣", count: 2, avg: 74 }],
    unitRows: rows(5, (i, u) => [u, "قسم نموذجي " + arabicDigits((i % 3) + 1), (90 - i * 7) + "٪"]),
    indicators: rows(Math.min(lim * 2, 8), (i, u) => ({ unitName: u, name: "مؤشر نموذجي " + arabicDigits(i + 1), actual: String(70 + i * 3) })),
    achievements: rows(Math.min(lim, 12), (i, u) => ({ unitName: u, name: "عمل نموذجي " + arabicDigits(i + 1), highlightResult: "نتيجة نموذجية ذات أثر", curated: i < 2 })),
    strengths: rows(Math.min(lim, 12), (i, u) => ({ unitName: u, name: "نقطة قوة " + arabicDigits(i + 1), area: "مجال نموذجي", curated: i < 1 })),
    challenges: rows(Math.min(lim, 12), (i, u) => ({ unitName: u, name: "صعوبة نموذجية " + arabicDigits(i + 1), severity: sev[i % 4], curated: false })),
    recs: rows(Math.min(lim, 12), (i, u) => ({ unitName: u, text: "توصية نموذجية " + arabicDigits(i + 1), priority: pr[i % 4], curated: i < 1 })),
    initiatives: rows(Math.min(lim, 6), (i, u) => ({ unitName: u, name: "مبادرة نموذجية " + arabicDigits(i + 1), scalability: "قابلة للتعميم" })),
    nextTasks: rows(Math.min(lim * 2, 6), (i, u) => ({ unitName: u, name: "عمل قادم " + arabicDigits(i + 1), expectedDate: "١٤٤٨/٠٩/٠١" })),
    yearCompareHtml: () => reportTable(["البند", "1448هـ", "1449هـ", "1450هـ"], [["متوسط تحقق المؤشرات", "71٪", "78٪", "84٪"], ["متوسط تحقق الأهداف التشغيلية", "65٪", "72٪", "80٪"], ["عدد الوحدات المُبلِّغة", 6, 7, 8]]),
    hasYearCompare: () => true, hasPrograms: () => true,
    flat: U.slice(0, 3).map((name, i) => ({ unit: { id: "fake-" + i, name }, report: { ...rptFakeUnitReport(), createdAt: i } })),
    programsHtml: () => `<div class="rpt-subheading">إحصائية الإنجاز</div>` + reportTable(["نوع العمل", "عدد الأعمال", "المكتمل", "وحدة العدّ", "المستهدف", "المنجز", "النسبة"], [["زيارة إشرافية", 12, 10, "مركز", 45, 39, "87٪"], ["برنامج تدريبي", 6, 5, "برنامج", 8, 6, "75٪"]]),
  };
}
// هل للفصل بيانات؟ (الفصول الفارغة لا تظهر إلا بخيار «إظهار الأقسام الفارغة»)
function aggChapterHasData(key, data) {
  const m = { perf: data.deptPerf.length || data.unitRows.length, indicators: data.indicators.length, yearCompare: data.hasYearCompare(), programs: data.hasPrograms(),
    achievements: data.achievements.length, strengths: data.strengths.length, challenges: data.challenges.length, recs: data.recs.length, initiatives: data.initiatives.length, nextTasks: data.nextTasks.length };
  return key in m ? !!m[key] : true;
}
function aggChapterBody(key, data, s) {
  if (key === "summary") {
    return `<div class="stat-grid" style="margin-bottom:14px;">
        ${statIconCardHtml("إجمالي التقارير", data.total, iconDocument(18, "var(--rpt-burgundy)"), "#f4ece4")}
        ${statIconCardHtml("نسبة الإنجاز", data.completionPct + "٪", iconGauge("var(--rpt-burgundy)", 18), "#f4ece4")}
        ${statIconCardHtml("عدد الأقسام", data.deptCount, iconBuilding("var(--rpt-burgundy)", 18), "#f4ece4")}
        ${statIconCardHtml("عدد الوحدات", data.unitCount, iconLayers(18, "var(--rpt-burgundy)"), "#f4ece4")}
      </div>
      ${data.total ? rptChart("a-status", [{ label: "مكتمل", value: data.completed, color: GREEN }, { label: "قيد الإعداد", value: data.total - data.completed, color: GOLD }], { size: 130, wrapDonut: "max-width:320px;margin:0 auto 12px;" }) : ""}
`;
  }
  if (key === "perf") {
    const chart = rptChart("a-deptPerf", data.deptPerf.map((d) => ({ label: d.name, value: d.avg, color: "var(--rpt-burgundy)" })), { height: 170 });
    return chart + reportTable(["القسم", "عدد الوحدات", "متوسط الإنجاز"], data.deptPerf.map((d) => [esc(d.name), d.count, d.avg + "٪"])) + reportTable(["الوحدة", "القسم", "نسبة الإنجاز"], data.unitRows);
  }
  if (key === "indicators") return data.indicators.length ? reportTable(["الوحدة", "المؤشر", "المتحقق"], data.indicators.map((r) => [esc(r.unitName), esc(r.name), esc(r.actual || "—")])) : emptyHint("لا توجد مؤشرات مُدخلة بعد.");
  if (key === "yearCompare") return data.yearCompareHtml();
  if (key === "programs") return data.programsHtml();
  if (key === "achievements") return data.achievements.length ? reportTable(["الوحدة", "العمل", "الأثر"], data.achievements.map((a) => [esc(a.unitName), esc(a.name || "—"), esc(a.highlightResult)])) : emptyHint("لا توجد إنجازات بارزة مُدخلة بعد.");
  if (key === "strengths") return data.strengths.length ? reportTable(["الوحدة", "نقطة القوة", "المجال"], data.strengths.map((x) => [esc(x.unitName), esc(x.name || "—"), esc(x.area || "—")])) : emptyHint("لا توجد نقاط قوة مُدخلة بعد.");
  if (key === "challenges") return data.challenges.length ? reportTable(["الوحدة", "الصعوبة", "المستوى"], data.challenges.map((c) => { const sm = challengeSeverityMeta(c.severity); return [esc(c.unitName), esc(c.name || "—"), c.severity ? badgeHtml(c.severity, sm.color, sm.bg) : "—"]; })) : emptyHint("لا توجد تحديات مُدخلة بعد.");
  if (key === "recs") return data.recs.length ? reportTable(["الوحدة", "التوصية", "الأولوية"], data.recs.map((r) => { const pm = improvementPriorityMeta(r.priority); return [esc(r.unitName), esc(r.text || "—"), r.priority ? badgeHtml(r.priority, pm.color, pm.bg) : "—"]; })) : emptyHint("لا توجد توصيات مُدخلة بعد.");
  if (key === "initiatives") return data.initiatives.length ? reportTable(["الوحدة", "اسم المبادرة", "قابلية التعميم"], data.initiatives.map((it) => [esc(it.unitName), esc(it.name || "—"), esc(it.scalability || "—")])) : emptyHint("لا توجد مبادرات قابلة للتعميم مُدخلة بعد.");
  if (key === "nextTasks") return data.nextTasks.length ? reportTable(["الوحدة", "العمل الرئيسي القادم", "الموعد المتوقع"], data.nextTasks.map((t) => [esc(t.unitName), esc(t.name || "—"), esc(t.expectedDate || "—")])) : emptyHint("لم تُضف أولويات للفترة القادمة بعد.");
  if (key === "closing") return rptApprovalGridHtml(s.approvalBoxes, { "{الإعداد}": s.preparedBy });
  return "";
}
// مستند التقرير المجمّع كاملًا (غلاف + فصول) حسب التنسيق
function aggReportDocHtml(s, data) {
  return rptWithCtx({ ...rptChartCtx(s), hiddenCols: s.hiddenCols }, () => {
    const chapters = rptOrdered(aggChapterDefs(s), s).filter((c) => !s.hidden[c.key] && (s.showEmpty || (c.custom ? aggCustomChapterRows(c.custom, data).length : aggChapterHasData(c.key, data))));
    const pages = [];
    const per = Number(s.perPage) || 0;
    chapters.forEach((c, i) => {
      if (!pages.length || (per && i % per === 0)) pages.push("");
      RPT_CTX.section = c.key;
      const extra = rptCustomChartsFor(s, c.key, data.flat || [], true);
      pages[pages.length - 1] += execChapterHtml(i + 1, rptIcon(c.icon), rptChapterTitle(c, s), extra + (c.custom ? aggCustomChapterBody(c.custom, data) : aggChapterBody(c.key, data, s)));
      RPT_CTX.section = null;
    });
    const hasCover = !!s.showCover;
    const total = pages.length + (hasCover ? 1 : 0);
    const cover = hasCover ? `
    <section class="a4-page rpt-cover">
      ${s.watermark ? `<div class="rpt-wm" style="background-image:url('${ASSOCIATION_LOGO}')"></div>` : ""}
      <div class="rpt-cover-inner">
        <img src="${ASSOCIATION_LOGO}" class="rpt-cover-logo" alt="شعار الجمعية" />
        <div class="rpt-cover-assoc">${esc(s.assocName)}</div>
        ${s.preparedBy ? `<div class="rpt-cover-unit">${esc(s.preparedBy)}</div>` : ""}
        <div class="rpt-cover-divider"></div>
        <h1 class="rpt-cover-title">${esc(s.coverTitle || s.name || "تقرير")}</h1>
        ${s.coverSub ? `<div class="rpt-cover-sub">${esc(s.coverSub)}</div>` : ""}
        ${s.showCoverMeta ? `<div class="rpt-cover-meta">
          <div><span>عدد الأقسام:</span> ${data.deptCount}</div>
          <div><span>عدد الوحدات:</span> ${data.unitCount}</div>
          <div><span>عدد التقارير:</span> ${data.total}</div>
          ${data.yearText ? `<div><span>السنة:</span> ${esc(data.yearText)}</div>` : ""}
          ${data.periodText ? `<div><span>الفترة:</span> ${esc(data.periodText)}</div>` : ""}
        </div>` : ""}
        ${s.preparedBy ? `<div class="rpt-cover-prepared"><div>إعداد: ${esc(s.preparedBy)}</div></div>` : ""}
      </div>
      ${rptPageNumText(s, 1, total) ? `<div class="rpt-runfoot"><span></span><span class="rpt-runfoot-num">${rptPageNumText(s, 1, total)}</span><span></span></div>` : ""}
    </section>` : "";
    return cover + pages.map((p, i) => rptPageHtml(s, p, i + 1 + (hasCover ? 1 : 0), total)).join("");
  });
}
function rptPrintTopBar(title, subtitle) {
  return `<div class="no-print">${topBarHtml({ title, subtitle, right: pillBtn("تحميل / طباعة", { icon: iconDownload(15, "#fff"), action: "print-page" }) })}</div>`;
}
function renderCustomReport(id) {
  const s = rptSettings(id);
  if (!s) return `<div class="page-wrap"><div class="page-inner">${topBarHtml({ title: "تقرير غير موجود" })}${emptyHint("هذا التقرير حُذف من «إدارة التقارير».")}</div></div>`;
  const data = aggReportData(s);
  return `<div class="page-wrap"><div class="page-inner report">
    ${rptPrintTopBar(s.name || "تقرير مجمّع", `${data.total} تقرير عبر ${data.unitCount} وحدة${data.yearText ? " — " + data.yearText : ""}`)}
    ${rptWrap(s, aggReportDocHtml(s, data))}
  </div></div>`;
}

/* ---- تقرير وحدة نموذجي للمعاينة (بيانات وهمية) ---- */
function rptFakeUnitReport() {
  const rep = rptFakeUnitReportBase();
  // نكمّل أي حقل ناقص في العناصر النموذجية (حتى تظهر معاينة الرسوم والفصول المضافة من أي حقل)
  Object.keys(rep.sections).forEach((sid) => {
    const sc = SECTION_FIELD_SCHEMAS[sid];
    const d = rep.sections[sid] && rep.sections[sid].data;
    if (!sc || sc.fixed || !d) return;
    const arr = d[sc.arrayKey || sid];
    if (!Array.isArray(arr)) return;
    arr.forEach((it, i) => (sc.fields || []).forEach((f) => { if (f && f.id && !rptHasValue(it[f.id])) it[f.id] = rptFakeFieldValue(f, i); }));
  });
  return rep;
}
function rptFakeFieldValue(f, i) {
  if (f.type === "number") return String(10 + i * 5);
  if (f.type === "date") return "١٤٤٨/٠٣/٠١";
  if (f.type === "checklist") { const o = {}; (f.options || []).slice(0, 2).forEach((x) => { o[x] = true; }); return o; }
  if (f.options && f.options.length) return f.options[i % f.options.length];
  return (f.label || "حقل") + " — نموذج";
}
function rptFakeUnitReportBase() {
  const st = (data) => ({ status: "completed", data });
  const defs = (S.indicatorDefinitions || []).filter((d) => d && d.name).slice(0, 3);
  const inds = defs.length ? defs.map((d, i) => ({ name: d.name, actual: String(Math.round((Number(d.target) || 100) * [0.95, 0.8, 0.5][i])) })) : [{ name: "مؤشر نموذجي ١", actual: "92" }, { name: "مؤشر نموذجي ٢", actual: "75" }];
  return {
    id: "preview", label: "التقرير الدوري للأداء — نموذج", status: "completed", createdAt: Date.now(), shared: {},
    sections: {
      basic: st({ mainEntity: "إدارة التعليم النسائي", entityName: "وحدة نموذجية", periodType: "ربع سنوي", startDate: "١٤٤٨/٠١/٠١", endDate: "١٤٤٨/٠٣/٣٠", hijriYear: "1448", preparerName: "اسم المعدّة", preparerTitle: "إدارية", managerName: "اسم الرئيسة" }),
      goals: st({ goals: [{ strategicGoal: "هدف استراتيجي نموذجي", operationalGoals: [{ id: "g1", name: "هدف تشغيلي أول", level: GOAL_LEVELS[0], percentage: 100 }, { id: "g2", name: "هدف تشغيلي ثانٍ", level: GOAL_LEVELS[2], percentage: 60 }] }] }),
      kpi: st({ indicators: inds }),
      programs: st({ programs: [{ id: "p1", name: "عمل نموذجي أول", workType: "زيارة إشرافية", targetGroup: "المراكز", targetCount: "45", actualBeneficiaries: "120", achievedCount: 39, countUnit: "مركز", executionStatus: "مكتمل", highlightResult: "نتيجة نموذجية بارزة" }, { id: "p2", name: "عمل نموذجي ثانٍ", workType: "برنامج", targetGroup: "المعلمات", targetCount: "30", actualBeneficiaries: "28", executionStatus: "قيد التنفيذ" }] }),
      tools: st({ tools: [{ name: "استبانة رضا", toolType: "استبانة", sampleSize: "100", respondentsCount: "80", resultQuality: "عالية" }] }),
      analysis: st({ positiveResult: "نص نموذجي لأبرز نتيجة إيجابية.", improvementResult: "نص نموذجي لنتيجة تحتاج تحسين.", comparisons: [{ topic: "موضوع المقارنة", resultValue: "85٪", judgment: "تحسن", changeReason: "سبب نموذجي" }], summary: "خلاصة تحليلية نموذجية." }),
      strengths: st({ strengths: [{ name: "نقطة قوة ١", area: "الإدارة", continuity: "مستمرة", transferable: "نعم" }, { name: "نقطة قوة ٢", area: "التعليم", continuity: "مستمرة", transferable: "لا" }] }),
      challenges: st({ challenges: [{ name: "صعوبة نموذجية", area: "الموارد", severity: "متوسط", scope: "الوحدة", stillOngoing: "نعم" }, { name: "صعوبة ثانية", area: "التقنية", severity: "مرتفع", scope: "القسم", stillOngoing: "لا" }] }),
      improvement: st({ opportunities: [{ name: "فرصة تحسين نموذجية", field: "العمليات", priority: "عالية", ease: "سهلة", responsiblePerson: "المسؤولة" }] }),
      initiatives: st({ initiatives: [{ name: "مبادرة نموذجية", entryType: "مبادرة", stage: "منفذة", beneficiariesCount: "50" }] }),
      impact: st({ impactStories: [{ title: "قصة أثر نموذجية", impactType: "تعليمي", beneficiariesCount: "30", ongoing: "نعم" }] }),
      recommendations: st({ recommendations: [{ text: "توصية نموذجية أولى", source: "الوحدة", level: "القسم", priority: "عالية", responsibleParty: "القسم" }, { text: "توصية نموذجية ثانية", source: "الوحدة", level: "الإدارة", priority: "متوسطة", responsibleParty: "الإدارة" }] }),
      nextplan: st({ mainTasks: [{ name: "عمل رئيسي قادم", goal: "الهدف", responsiblePerson: "المسؤولة", expectedDate: "١٤٤٨/٠٦/٠١" }] }),
      evidence: st({ evidenceItems: [{ name: "شاهد نموذجي", evidenceType: "صورة", relatedDepartment: "الوحدة", fileLink: "—", confidentiality: "عام" }] }),
      review: st({ checklist: {}, content: "خلاصة نهائية نموذجية." }),
      ...rptFakeCustomSections(),
    },
  };
}
// بيانات نموذجية لأي قسم أُضيف من «إدارة أقسام التقرير» (حسب حقوله)
function rptFakeCustomSections() {
  const out = {};
  const sample = rptFakeFieldValue;
  SECTIONS.forEach((sc) => {
    if (DEFAULT_SECTIONS.some((x) => x.id === sc.id)) return;
    const schema = SECTION_FIELD_SCHEMAS[sc.id];
    if (!schema) { out[sc.id] = { status: "completed", data: { content: "نص نموذجي لهذا القسم." } }; return; }
    const fields = (schema.fields || []).filter((f) => f && f.id);
    const item = (i) => { const o = { id: "fx" + i }; fields.forEach((f) => { o[f.id] = sample(f, i); }); return o; };
    out[sc.id] = { status: "completed", data: schema.fixed ? item(0) : { [schema.arrayKey || sc.id]: [item(0), item(1)] } };
  });
  return out;
}
const RPT_FAKE_UNIT = { id: "preview-unit", name: "وحدة نموذجية", departmentId: "", status: "active" };
// أعمدة كل قسم (تُستخرج من رسم التقرير النموذجي نفسه، فتبقى مطابقة دائمًا لما يظهر فعلًا)
function rptUnitColumns() {
  const cap = {};
  fullReportOrPreviewBody(RPT_FAKE_UNIT, rptFakeUnitReport(), null, { settings: { ...rptSettings("unit"), hidden: {}, hiddenCols: {} }, capture: cap });
  return cap;
}

/* ---- صفحة «تنسيق وإنشاء التقارير» ---- */
function rmCanEdit() { return !!S.currentUser && (S.isAdmin || pageAllowedForView("reports-manage")); }
function rmState() {
  const st = S.ui.rm = S.ui.rm || { sel: "final", tab: "page" };
  if (st.sel !== "final" && st.sel !== "unit" && !rptStore().custom.some((c) => c.id === st.sel)) { st.sel = "final"; st.draft = null; }
  if (!st.draft || st.draftFor !== st.sel) { st.draft = rptSettings(st.sel); st.draftFor = st.sel; }
  return st;
}
function rmDirty(st) { return JSON.stringify(st.draft) !== JSON.stringify(rptSettings(st.sel)); }
function rmSetField(key, value) {
  const st = rmState(), d = st.draft;
  if (key.indexOf("chart|") === 0 || key.indexOf("chartc|") === 0) {
    const [kind, id, prop] = key.split("|");
    const cur = { ...((d.charts || {})[id] || {}) };
    if (kind === "chart") cur[prop] = value;
    else cur.custom = { ...(cur.custom || {}), [prop]: /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#6b2337" };
    d.charts = { ...(d.charts || {}), [id]: cur };
    return;
  }
  if (key.indexOf("ab|") === 0) {
    const [, i, prop] = key.split("|");
    d.approvalBoxes = (d.approvalBoxes || []).map((b, j) => (String(j) === i ? { ...b, [prop]: String(value).slice(0, 80) } : b));
    return;
  }
  if (key.indexOf("cc|") === 0 || key.indexOf("ch|") === 0) {
    const [kind, id, prop] = key.split("|");
    const listKey = kind === "cc" ? "customCharts" : "customChapters";
    d[listKey] = (d[listKey] || []).map((x) => {
      if (x.id !== id) return x;
      const y = { ...x, [prop]: prop === "limit" ? Math.max(1, Math.min(200, Number(value) || 10)) : String(value).slice(0, 120) };
      if (prop === "section") {
        const sc = SECTIONS.find((z) => z.id === value);
        if (kind === "cc") { y.field = (rptChartableFields(value)[0] || {}).id || ""; if (!x.title) y.title = ""; }
        else { y.fields = []; y.sortField = ""; if (!x.title || x.title === ((SECTIONS.find((z) => z.id === x.section) || {}).label)) y.title = sc ? sc.label : y.title; }
      }
      return y;
    });
    return;
  }
  if (key.indexOf("title:") === 0) { d.titles = { ...d.titles, [key.slice(6)]: String(value).slice(0, 120) }; return; }
  if (key === "name") {
    const nv = String(value).trim().slice(0, 80) || "تقرير مجمّع";
    if (!d.coverTitle || d.coverTitle === d.name) d.coverTitle = nv; // عنوان الغلاف يتبع الاسم ما لم يُغيَّر يدويًا
    d.name = nv; return;
  }
  if (RPT_NUM_KEYS.includes(key)) { d[key] = value === "" ? "" : Number(value); return; }
  d[key] = typeof value === "string" ? value.slice(0, 300) : value;
}
function rmFieldHtml(label, control, hint) {
  return `<div class="rm-field"><div class="rm-label">${esc(label)}</div>${control}${hint ? `<div class="rm-hint">${esc(hint)}</div>` : ""}</div>`;
}
function rmPills(key, cur, opts) {
  return `<div class="rm-pills">${opts.map(([v, l]) => `<button type="button" class="rm-pill${String(cur) === String(v) ? " on" : ""}" data-action="rm-set" data-key="${esc(key)}" data-value="${esc(v)}" aria-pressed="${String(cur) === String(v)}">${esc(l)}</button>`).join("")}</div>`;
}
function rmToggle(key, label, on) {
  return `<button type="button" class="rm-pill${on ? " on" : ""}" data-action="rm-toggle" data-key="${esc(key)}" aria-pressed="${!!on}">${on ? "✓ " : ""}${esc(label)}</button>`;
}
function rmText(key, val, ph) { return `<input type="text" class="input" data-rm="${esc(key)}" value="${esc(val || "")}" placeholder="${esc(ph || "")}" style="width:100%;" />`; }
function rmColor(key, val) { return `<input type="color" data-rm="${esc(key)}" value="${esc(/^#[0-9a-fA-F]{6}$/.test(val) ? val : "#6b2337")}" class="rm-color" />`; }
function rmFont(key, val) { return `<select class="input" data-rm="${esc(key)}" style="width:100%;">${reportFontsAll().map((f) => `<option value="${esc(f)}" ${val === f ? "selected" : ""} style="font-family:'${esc(f)}'">${esc(f)}</option>`).join("")}</select>`; }
function rmNum(key, val, min, max) { return `<input type="number" class="input" data-rm="${esc(key)}" value="${esc(val)}" min="${min}" max="${max}" inputmode="numeric" style="width:84px;" />`; }
function rmRolesHtml(pageId, label) {
  const roles = rolesList();
  const can = canManageUsers();
  const has = (r) => rolePermsOf(r).pages.includes(pageId);
  if (!roles.length) return `<div class="rm-hint">لا توجد أدوار بعد — أنشئيها من «المستخدمون ← الأدوار والصلاحيات».</div>`;
  return `<div class="rm-hint" style="margin-bottom:8px;">يظهر «${esc(label)}» لكل حساب دوره مفعّل هنا${can ? " — اضغطي على الدور للتفعيل أو الإلغاء" : ""}.</div>
    <div class="rm-pills">${roles.map((r) => can
      ? `<button type="button" class="rm-pill${has(r) ? " on" : ""}" data-action="rm-role" data-role="${esc(r.id)}" data-page="${esc(pageId)}" aria-pressed="${has(r)}">${has(r) ? "✓ " : ""}${esc(r.name)}</button>`
      : `<span class="rm-pill${has(r) ? " on" : ""}">${esc(r.name)}</span>`).join("")}</div>`;
}
function rmChartCardHtml(def, d, headHtml) {
  const c = d.charts[def.id] || {};
  const rawType = c.type || (d.chartType === "hide" ? "hide" : "auto");
  const type = rawType === "auto" ? def.native : rawType;
  const colors = c.colors || (d.chartColors === "main" ? "main" : "status");
  const size = c.size || d.chartSize || "md";
  const k = (prop) => `chart|${def.id}|${prop}`;
  const typeOpts = def.kind === "dist" ? [["donut", "دائري"], ["bars", "أعمدة"], ["hide", "إخفاء"]] : [["bars", "أعمدة"], ["line", "خطي"], ["hide", "إخفاء"]];
  let custom = "";
  if (type !== "hide" && colors === "custom") {
    const cats = def.kind === "dist" ? def.cats() : ["__all"];
    const sh = rptMonoShades(d.mainColor, cats.length);
    custom = `<div class="rm-row">${cats.map((cat, i) => `<label class="rm-mini">${esc(cat === "__all" ? "لون الرسم" : cat)}${rmColor(`chartc|${def.id}|${cat}`, (c.custom || {})[cat] || sh[i])}</label>`).join("")}</div>`;
  }
  return `<div class="rm-chapter">
    ${headHtml}
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
      ${rmPills(k("type"), type, typeOpts)}
      ${type === "hide" ? "" : rmPills(k("colors"), colors, [["status", "ألوان الحالة"], ["main", "درجات اللون الرئيسي"], ["custom", "ألوان أختارها"]]) + custom + rmPills(k("size"), size, [["sm", "صغير"], ["md", "عادي"], ["lg", "كبير"]])}
    </div>
  </div>`;
}
function rmCustomChapterEditor(ch) {
  const secs = rptSectionsWithFields();
  const fields = rptSectionFields(ch.section);
  const on = (f, i) => (ch.fields && ch.fields.length ? ch.fields.includes(f.id) : i < 4);
  return `<div style="display:flex;flex-direction:column;gap:10px;margin-top:10px;">
    ${rmFieldHtml("القسم", `<select class="input" data-rm="ch|${esc(ch.id)}|section" style="width:100%;">${secs.map((sc) => `<option value="${esc(sc.id)}" ${sc.id === ch.section ? "selected" : ""}>${esc(sc.label)}</option>`).join("")}</select>`, "يجمع عناصر هذا القسم من تقارير كل الوحدات في النطاق، مع عمود «الوحدة».")}
    ${rmFieldHtml("الأعمدة", `<div class="rm-pills">${fields.map((f, i) => `<button type="button" class="rm-pill rm-pill-sm${on(f, i) ? " on" : ""}" data-action="rm-ch-field" data-id="${esc(ch.id)}" data-field="${esc(f.id)}" aria-pressed="${on(f, i)}">${on(f, i) ? "✓ " : ""}${esc(f.label || f.id)}</button>`).join("")}</div>`)}
    ${rmFieldHtml("الترتيب", rmPills(`ch|${ch.id}|sort`, ch.sort || "recent", [["recent", "الأحدث أولًا"], ["oldest", "الأقدم أولًا"], ["field", "حسب حقل"]]) +
      (ch.sort === "field" ? `<select class="input" data-rm="ch|${esc(ch.id)}|sortField" style="width:100%;margin-top:6px;">${fields.map((f) => `<option value="${esc(f.id)}" ${f.id === ch.sortField ? "selected" : ""}>${esc(f.label || f.id)} (الأعلى أولًا)</option>`).join("")}</select>` : ""))}
    ${rmFieldHtml("أقصى عدد صفوف", rmNum(`ch|${ch.id}|limit`, ch.limit || 10, 1, 200))}
    <div><button type="button" class="rm-link" data-action="rm-ch-del" data-id="${esc(ch.id)}">✕ حذف هذا الفصل</button></div>
  </div>`;
}
function rmTabsFor(sel) {
  return [["page", "الصفحة"], ["head", "الكليشة"], ["cover", "الغلاف والاعتماد"], ["chapters", "الفصول"], ["visuals", "الرسوم والجداول"], ["fonts", "الخطوط والألوان"], ["access", sel === "final" || sel === "unit" ? "من يشوفه" : "النطاق ومن يشوفه"]];
}
function rmPanelHtml(st) {
  const d = st.draft, sel = st.sel, tab = st.tab;
  const isUnit = sel === "unit";
  if (tab === "page") {
    const sizes = rptSizeList();
    return rmFieldHtml("حجم الصفحة", rmPills("size", d.size, sizes.map((z) => [z.id, z.base ? z.name : `${z.name} (${z.w}×${z.h})`])) +
        (sizes.some((z) => !z.base) ? `<div class="rm-row" style="margin-top:6px;">${sizes.filter((z) => !z.base).map((z) => `<button type="button" class="rm-link" style="padding:4px 2px;" data-action="rm-size-del" data-id="${esc(z.id)}">✕ حذف «${esc(z.name)}»</button>`).join("")}</div>` : "") +
        `<div class="rm-row" style="margin-top:8px;"><input type="text" class="input" id="rm-size-name" placeholder="اسم الحجم الجديد" style="width:150px;" /><label class="rm-mini">العرض<input type="number" class="input" id="rm-size-w" min="50" max="1000" inputmode="numeric" style="width:76px;" /></label><label class="rm-mini">الطول<input type="number" class="input" id="rm-size-h" min="50" max="1000" inputmode="numeric" style="width:76px;" /></label><span class="rm-hint">مم</span>${pillBtn("إضافة حجم", { variant: "ghost", icon: iconPlus(14, INK), action: "rm-size-add" })}</div>`,
        "الأحجام المضافة متاحة لكل التقارير.") +
      rmFieldHtml("الاتجاه", rmPills("orient", d.orient, [["portrait", "طولي"], ["landscape", "عرضي"]])) +
      rmFieldHtml("الهوامش", rmPills("margin", d.margin, [["narrow", "ضيقة"], ["normal", "عادية"], ["wide", "واسعة"], ["custom", "بالمليمتر"]]) +
        (d.margin === "custom" ? `<div class="rm-row">${[["mt", "أعلى"], ["mb", "أسفل"], ["mr", "يمين"], ["ml", "يسار"]].map(([k, l]) => `<label class="rm-mini">${l}${rmNum(k, d[k], 0, 50)}</label>`).join("")}</div>` : "")) +
      rmFieldHtml("لون الورقة", rmColor("paper", d.paper)) +
      rmFieldHtml("صورة خلفية للصفحات", `<div class="rm-row">
        <label class="pill-btn pill-ghost" style="margin:0;">${iconPlus(14, INK)} اختيار صورة<input type="file" accept="image/*" id="rm-bg-file" style="display:none;" /></label>
        ${d.bgImage ? `<img src="${esc(d.bgImage)}" alt="الخلفية" style="width:44px;height:58px;object-fit:cover;border-radius:6px;border:1px solid ${BORDER};" />${pillBtn("إزالة", { variant: "ghost", icon: iconX(14, INK), action: "rm-bg-remove" })}` : ""}
      </div>`, "أقل من 800 كيلوبايت. تُغطي الصفحة كاملة خلف النص.") +
      rmFieldHtml("زخارف الصفحة", `<div class="rm-pills">${rmToggle("watermark", "علامة مائية (الشعار)", d.watermark)}${rmToggle("frame", "إطار حول الصفحة", d.frame)}${rmToggle("spine", "شريط ملوّن جانبي", d.spine)}</div>`);
  }
  if (tab === "head") {
    return rmFieldHtml("رأس الصفحة (الكليشة)", rmToggle("showHead", d.showHead ? "ظاهرة في كل صفحة" : "مخفية", d.showHead)) +
      (d.showHead ? `<div class="rm-grid3">
        ${rmFieldHtml("يمين الرأس", rmText("headRight", d.headRight, "مثال: اسم الجمعية"))}
        ${rmFieldHtml("وسط الرأس", rmText("headCenter", d.headCenter, "نص اختياري"))}
        ${rmFieldHtml("يسار الرأس", rmText("headLeft", d.headLeft, "مثال: اسم الإدارة"))}
      </div>${rmFieldHtml("", rmToggle("headLogo", "الشعار في وسط الرأس", d.headLogo))}` : "") +
      rmFieldHtml("نص التذييل", `<div class="rm-row">${rmToggle("showFoot", d.showFoot ? "ظاهر" : "مخفي", d.showFoot)}</div>${d.showFoot ? `<div style="margin-top:8px;">${rmText("footText", d.footText, "مثال: سري — للاستخدام الداخلي")}</div>` : ""}`) +
      rmFieldHtml("ترقيم الصفحات", rmPills("pageNum", d.pageNum, [["none", "بدون"], ["paren", "(٢)"], ["num", "٢"], ["of", "٢ من ٨"]]));
  }
  if (tab === "cover") {
    const boxes = d.approvalBoxes || [];
    const abHtml = `<div class="rm-sep"></div>` + rmFieldHtml(isUnit ? "خانات الاعتماد (في «الإغلاق والاعتماد»)" : "خانات الاعتماد (في «الخاتمة والاعتماد»)",
      boxes.map((b, i) => `<div class="rm-row" style="flex-wrap:nowrap;">
        <input type="text" class="input" data-rm="ab|${i}|role" value="${esc(b.role || "")}" placeholder="المسمى" aria-label="المسمى" style="flex:1;min-width:0;" />
        <input type="text" class="input" data-rm="ab|${i}|name" value="${esc(b.name || "")}" placeholder="الاسم (اختياري)" aria-label="الاسم" style="flex:1;min-width:0;" />
        <button type="button" class="rm-arrow" style="height:40px;" data-action="rm-ab-del" data-i="${i}" aria-label="حذف الخانة" ${boxes.length <= 1 ? "disabled" : ""}>✕</button>
      </div>`).join("") + (boxes.length < 6 ? `<button type="button" class="rm-link" data-action="rm-ab-add">+ خانة اعتماد</button>` : ""),
      isUnit ? "{المعدة} = معدّة التقرير، {الرئيسة} = الرئيسة المباشرة — تُكتبان تلقائيًا من التقرير." : "{الإعداد} = ما كتبتِه في خانة «إعداد».");
    if (isUnit) {
      return rmFieldHtml("صفحة الغلاف", rmToggle("showCover", d.showCover ? "ظاهرة" : "مخفية", d.showCover)) +
        (d.showCover ? rmFieldHtml("عنوان الغلاف", rmText("coverTitle", d.coverTitle, "فارغ = اسم التقرير نفسه"), "اسم الوحدة والفترة ومعدّة التقرير تُكتب تلقائيًا من التقرير.") : "") + abHtml;
    }
    return rmFieldHtml("صفحة الغلاف", rmToggle("showCover", d.showCover ? "ظاهرة" : "مخفية", d.showCover)) +
      (d.showCover ? rmFieldHtml("اسم الجهة", rmText("assocName", d.assocName)) +
        rmFieldHtml("عنوان التقرير", rmText("coverTitle", d.coverTitle)) +
        rmFieldHtml("العنوان الفرعي", rmText("coverSub", d.coverSub)) +
        rmFieldHtml("إعداد", rmText("preparedBy", d.preparedBy), "يظهر أيضًا في خانة «إعداد» بفصل الخاتمة.") +
        rmFieldHtml("", rmToggle("showCoverMeta", "مربع الأرقام (الأقسام، الوحدات، التقارير، الفترة)", d.showCoverMeta)) : "") + abHtml;
  }
  if (tab === "chapters") {
    const defs = isUnit ? unitChapterDefs() : aggChapterDefs(d);
    const list = rptOrdered(defs, d);
    const cols = isUnit && st.openCols ? (st.colsCache || (st.colsCache = rptUnitColumns())) : null;
    const rows = list.map((c, i) => {
      const hid = !!d.hidden[c.key];
      const open = isUnit && st.openCols === c.key;
      const colsHtml = open ? (c.sections || []).map((sid) => {
        const sc = SECTIONS.find((x) => x.id === sid);
        const heads = rptSectionColumns(sid, d, cols);
        return `<div style="margin-top:8px;"><div class="rm-hint" style="font-weight:800;">${esc(sc ? sc.label : sid)}${rptSchemaFor(sid) && sid !== "review" ? " — من «إدارة حقول الأقسام»" : ""}</div>${heads.length ? `<div class="rm-pills">${heads.map((h) => `<button type="button" class="rm-pill rm-pill-sm${h.on ? " on" : ""}" data-action="rm-col" data-sec="${esc(sid)}" data-col="${esc(h.label)}" data-def="${h.def ? 1 : 0}" aria-pressed="${h.on}">${h.on ? "✓ " : ""}${esc(h.label)}</button>`).join("")}</div>` : `<div class="rm-hint">لا يحتوي جدولًا.</div>`}</div>`;
      }).join("") : "";
      return `<div class="rm-chapter${hid ? " off" : ""}">
        <div class="rm-row" style="flex-wrap:nowrap;">
          <div style="display:flex;flex-direction:column;gap:2px;">
            <button type="button" class="rm-arrow" data-action="rm-move" data-key="${esc(c.key)}" data-dir="-1" ${i === 0 ? "disabled" : ""} aria-label="تحريك للأعلى">▲</button>
            <button type="button" class="rm-arrow" data-action="rm-move" data-key="${esc(c.key)}" data-dir="1" ${i === list.length - 1 ? "disabled" : ""} aria-label="تحريك للأسفل">▼</button>
          </div>
          <input type="text" class="input" data-rm="title:${esc(c.key)}" value="${esc((d.titles || {})[c.key] || "")}" placeholder="${esc(c.title)}" style="flex:1;min-width:0;" aria-label="اسم الفصل" />
          <button type="button" class="rm-pill${hid ? "" : " on"}" data-action="rm-hide" data-key="${esc(c.key)}" aria-pressed="${!hid}">${hid ? "مخفي" : "ظاهر"}</button>
        </div>
        ${isUnit && c.sections ? `<button type="button" class="rm-link" data-action="rm-cols" data-key="${esc(c.key)}">${open ? "إخفاء الأعمدة ▴" : "الأعمدة الظاهرة في جداوله ▾"}</button>${colsHtml}` : ""}
        ${c.custom ? `<button type="button" class="rm-link" data-action="rm-cols" data-key="${esc(c.key)}">${st.openCols === c.key ? "إغلاق الإعداد ▴" : "إعداد الفصل (القسم والحقول) ▾"}</button>${st.openCols === c.key ? rmCustomChapterEditor(c.custom) : ""}` : ""}
      </div>`;
    }).join("");
    return `<div class="rm-hint" style="margin-bottom:10px;">${isUnit ? "الفصول هنا هي أقسام التعبئة نفسها (من «إدارة أقسام التقرير») بنفس أسمائها وترتيبها — أي قسم جديد يظهر هنا تلقائيًا. " : ""}▲▼ للترتيب · اكتبي اسمًا جديدًا للفصل (فارغ = الاسم الأصلي) · «ظاهر/مخفي» للإظهار.${isUnit ? " الإخفاء لا يمس بيانات التقرير، والمراجِعة في مسار الاعتماد ترى كل الأقسام دائمًا." : ""}</div>
      ${rows}
      ${isUnit ? "" : `<button type="button" class="rm-new" style="width:100%;margin-top:4px;" data-action="rm-ch-add">${iconPlus(14, ROSE)} فصل جديد (جدول من قسم تختارينه)</button>`}
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:12px;">
        ${rmFieldHtml("", rmToggle("showEmpty", d.showEmpty ? "الأقسام الفارغة تظهر (مكتوب تحتها «لا توجد بيانات»)" : "الأقسام الفارغة لا تظهر", d.showEmpty))}
        ${rmFieldHtml("عدد الفصول في كل صفحة", rmPills("perPage", d.perPage, [["1", "فصل واحد"], ["2", "فصلان"], ["3", "٣ فصول"], ["0", "متتابعة بلا فواصل"]]), isUnit ? "«ملخص التقرير» دائمًا بصفحة مستقلة." : "")}
      </div>
      ${isUnit ? "" : rmFieldHtml("أقصى عدد عناصر في كل جدول", rmNum("limit", d.limit, 1, 100), "المؤشرات وأولويات الفترة القادمة: ضعف هذا العدد.")}`;
  }
  if (tab === "visuals") {
    const charts = isUnit ? RPT_CHARTS.unit : RPT_CHARTS.agg;
    const chartsHtml = charts.map((def) => rmChartCardHtml(def, d, `<div style="font-size:13px;font-weight:800;">${esc(def.title)} <span class="rm-hint" style="font-weight:600;">— في «${esc(def.where)}»</span></div>`)).join("");
    const chapterOpts = (isUnit ? unitChapterDefs() : aggChapterDefs(d)).map((c) => [c.key, rptChapterTitle(c, d)]);
    const secs = rptSectionsWithFields().filter((sc) => rptChartableFields(sc.id).length);
    const sel = (key, cur, opts) => `<select class="input" data-rm="${esc(key)}" style="width:100%;">${opts.map(([v, l]) => `<option value="${esc(v)}" ${String(cur) === String(v) ? "selected" : ""}>${esc(l)}</option>`).join("")}</select>`;
    const customHtml = (d.customCharts || []).map((cc) => {
      const fields = rptChartableFields(cc.section);
      const head = `<div class="rm-grid3">
        ${rmFieldHtml("عنوان الرسم", rmText(`cc|${cc.id}|title`, cc.title, "مثال: حالة الزيارات"))}
        ${rmFieldHtml("من قسم", sel(`cc|${cc.id}|section`, cc.section, secs.map((sc) => [sc.id, sc.label])))}
        ${rmFieldHtml("الحقل", sel(`cc|${cc.id}|field`, cc.field, fields.map((f) => [f.id, `${f.label} — ${rptChartFieldKind(f) === "dist" ? "توزيع" : "أرقام"}`])))}
      </div>
      <div class="rm-row" style="margin-top:8px;"><div style="flex:1;min-width:180px;">${rmFieldHtml("مكانه في التقرير", sel(`cc|${cc.id}|chapter`, cc.chapter, chapterOpts))}</div>
        <button type="button" class="rm-link" data-action="rm-cc-del" data-id="${esc(cc.id)}">✕ حذف الرسم</button></div>`;
      return rmChartCardHtml(rptCustomChartDef(cc), d, head);
    }).join("");
    const chartsAll = chartsHtml + (customHtml ? `<div class="rm-label" style="margin-top:6px;">رسوم مضافة</div>${customHtml}` : "") +
      (secs.length ? `<button type="button" class="rm-new" style="width:100%;" data-action="rm-cc-add">${iconPlus(14, ROSE)} رسم جديد (من حقل في أي قسم)</button>` : "") +
      `<div class="rm-hint">حقل اختيارات (مثل الحالة) = رسم توزيع. حقل رقم (مثل العدد) = رسم أرقام${isUnit ? " لكل عنصر" : " مجموعة لكل وحدة"}.</div>`;
    return `<div class="rm-label">الرسوم البيانية — لكل رسم إعداده</div><div class="rm-hint">تظهر لكل رسم الأنواع المناسبة لبياناته فقط (التوزيع: دائري/أعمدة، والأرقام والنسب: أعمدة/خطي).</div>${chartsAll}` +
      `<div class="rm-sep"></div>` +
      rmFieldHtml("محاذاة رأس الجدول", rmPills("thAlign", d.thAlign, [["right", "يمين"], ["center", "وسط"], ["left", "يسار"]])) +
      rmFieldHtml("محاذاة الكلام داخل الجدول", rmPills("tdAlign", d.tdAlign, [["right", "يمين"], ["center", "وسط"], ["left", "يسار"]])) +
      rmFieldHtml("", rmToggle("numCenter", "توسيط الأرقام والنسب تلقائيًا", d.numCenter)) +
      rmFieldHtml("ألوان رأس الجدول", `<div class="rm-row"><label class="rm-mini">الخلفية${rmColor("thBg", d.thBg)}</label><label class="rm-mini">النص${rmColor("thColor", d.thColor || d.mainColor)}</label></div>`) +
      rmFieldHtml("حدود الخلايا", rmPills("tableBorders", d.tableBorders, [["rows", "خطوط بين الصفوف"], ["grid", "شبكة كاملة"], ["none", "بدون"]])) +
      rmFieldHtml("", rmToggle("zebra", "تلوين الصفوف بالتناوب", d.zebra)) +
      rmFieldHtml("حجم خط الجداول", rmPills("tableFs", d.tableFs, [["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"]]));
  }
  if (tab === "fonts") {
    const extra = rptStore().fonts;
    const fontsMgr = rmFieldHtml("خطوط مضافة (من Google Fonts)", `${extra.length ? `<div class="rm-pills" style="margin-bottom:8px;">${extra.map((f) => `<span class="rm-pill" style="font-family:'${esc(f)}'">${esc(f)}<button type="button" class="rm-link" style="padding:0 6px 0 0;" data-action="rm-font-del" data-name="${esc(f)}" aria-label="حذف الخط">✕</button></span>`).join("")}</div>` : ""}
      <div class="rm-row"><input type="text" class="input" id="rm-font-new" placeholder="اسم الخط بالإنجليزي، مثل: Lalezar" style="width:230px;" dir="ltr" />${pillBtn("إضافة خط", { variant: "ghost", icon: iconPlus(14, INK), action: "rm-font-add" })}</div>`,
      "اكتبي الاسم كما في موقع fonts.google.com بالضبط. يُضاف لقوائم الخطوط في كل التقارير.");
    return `<div class="rm-grid3">${rmFieldHtml("خط النصوص", rmFont("fontBody", d.fontBody))}${rmFieldHtml("خط عنوان الغلاف", rmFont("fontTitle", d.fontTitle))}${rmFieldHtml("خط عناوين الفصول", rmFont("fontHeading", d.fontHeading))}</div>` +
      rmFieldHtml("اللون الرئيسي", `<div class="rm-row">${["#6b2337", "#24527a", "#2E6B52", "#7a4d16", "#5b3a73"].map((c) => `<button type="button" class="rm-swatch${d.mainColor === c ? " on" : ""}" data-action="rm-set" data-key="mainColor" data-value="${c}" style="background:${c};" aria-label="لون ${c}"></button>`).join("")}${rmColor("mainColor", d.mainColor)}</div>`) +
      rmFieldHtml("خلفية عناوين الفصول", rmColor("chapterBg", d.chapterBg)) + `<div class="rm-sep"></div>` + fontsMgr;
  }
  if (tab === "access") {
    if (sel === "unit") return `<div class="rm-hint" style="font-size:12.5px;line-height:1.9;">«عرض التقرير كاملًا» يظهر بنفس صلاحيات التقارير الحالية (صاحبة التقرير، القسم، المكتب، مراحل مسار الاعتماد…). هنا يتغيّر الشكل فقط، لكل تقارير الوحدات.</div>`;
    if (sel === "final") return rmRolesHtml("executive-final-report", "التقرير الإداري النهائي");
    const levels = olActive();
    const depth = (l) => { let n = 0, p = l; while (p && p.parentId && n < 12) { p = olFind(p.parentId); n++; } return n; };
    const ordered = [];
    const walk = (pid) => olChildren(pid).forEach((c) => { ordered.push(c); walk(c.id); });
    walk("");
    const yNow = hijriYearFromTs(Date.now());
    return rmFieldHtml("اسم التقرير", rmText("name", d.name), "يظهر بهذا الاسم في القائمة الجانبية وفي قائمة الصفحات عند تعديل الأدوار.") +
      rmFieldHtml("النطاق", `<select class="input" data-rm="scopeLevelId" style="width:100%;"><option value="">كل الجمعية</option>${ordered.map((l) => `<option value="${esc(l.id)}" ${d.scopeLevelId === l.id ? "selected" : ""}>${"— ".repeat(depth(l))}${esc(l.name)}${l.levelType ? " (" + esc(l.levelType) + ")" : ""}</option>`).join("")}</select>`, levels.length ? "مستوى من الهيكل المرن + كل ما تحته. ومن يملك نطاقًا أضيق يرى ما في نطاقه فقط." : "أضيفي مستويات في «المستخدمون ← الهيكل» لتحديد نطاق أضيق.") +
      rmFieldHtml("الفترة", rmPills("periodKind", d.periodKind, [["all", "كل التقارير"], ["current", "السنة الهجرية الحالية"], ["year", "سنة محددة"]]) + (d.periodKind === "year" ? `<div class="rm-row" style="margin-top:8px;">${rmNum("year", d.year || yNow, FIRST_HIJRI_YEAR, 1500)}<span class="rm-hint">هـ</span></div>` : "")) +
      `<div class="rm-sep"></div>` + rmRolesHtml("crpt-" + sel, d.name) +
      `<div class="rm-sep"></div>` + (st.confirmDel ? `<div class="hint" style="color:${DANGER};margin-bottom:8px;">حذف «${esc(d.name)}»؟ يُحذف التنسيق والصفحة فقط — لا تُحذف أي تقارير أو بيانات.</div><div class="rm-row">${pillBtn("نعم، احذفيه", { variant: "danger", action: "rm-delete" })}${pillBtn("إلغاء", { variant: "ghost", action: "rm-delete-cancel" })}</div>` : pillBtn("حذف هذا التقرير", { variant: "ghost", icon: iconX(14, DANGER), action: "rm-delete-ask" }));
  }
  return "";
}
function renderReportsManage() {
  const st = rmState();
  const d = st.draft;
  const custom = rptStore().custom;
  const items = [
    { id: "final", name: "التقرير الإداري النهائي", kind: "تقرير مجمّع" },
    ...custom.map((c) => ({ id: c.id, name: c.name || "تقرير مجمّع", kind: "تقرير مجمّع جديد" })),
    { id: "unit", name: "عرض التقرير كاملًا", kind: "تقرير الوحدة (العرض والطباعة وPDF)" },
  ];
  const dirty = rmDirty(st);
  const tabs = rmTabsFor(st.sel);
  if (!tabs.some((t) => t[0] === st.tab)) st.tab = "page";
  const [w] = rptPageDims(d);
  const zoom = Math.min(0.6, 430 / (w * 3.78)).toFixed(3);
  const doc = st.sel === "unit"
    ? fullReportOrPreviewBody(RPT_FAKE_UNIT, rptFakeUnitReport(), null, { settings: d })
    : aggReportDocHtml(d, aggFakeData(d));
  const selName = (items.find((x) => x.id === st.sel) || {}).name || "";
  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "تنسيق وإنشاء التقارير", subtitle: "شكل كل تقرير وإنشاء تقارير مجمّعة جديدة — المعاينة ببيانات وهمية، بدون الاطلاع على أي تقرير حقيقي" })}
    <div class="rm-layout">
      <div class="rm-list">
        <div class="rm-label" style="padding:0 4px;">التقارير</div>
        ${items.map((it) => `<button type="button" class="rm-item${st.sel === it.id ? " on" : ""}" data-action="rm-select" data-id="${esc(it.id)}"><span class="rm-item-name">${esc(it.name)}</span><span class="rm-item-kind">${esc(it.kind)}</span></button>`).join("")}
        <button type="button" class="rm-new" data-action="rm-new">${iconPlus(14, ROSE)} تقرير مجمّع جديد</button>
      </div>
      <div class="rm-panel card">
        <div class="rm-panel-head">
          <div style="font-size:15px;font-weight:800;">${esc(selName)}</div>
          <div class="rm-row">
            ${dirty ? `<span class="rm-dirty">تغييرات غير محفوظة</span>` : st.saved ? `<span class="rm-saved">تم الحفظ ✓</span>` : ""}
            ${pillBtn("استعادة الافتراضي", { variant: "ghost", icon: iconX(14, INK), action: "rm-reset" })}
            ${pillBtn("حفظ التنسيق", { icon: iconCheckCircle(15, "#fff"), action: "rm-save", disabled: !dirty })}
          </div>
        </div>
        <div class="rm-tabs" role="tablist">${tabs.map(([k, l]) => `<button type="button" role="tab" aria-selected="${st.tab === k}" class="rm-tab${st.tab === k ? " on" : ""}" data-action="rm-tab" data-tab="${k}">${esc(l)}</button>`).join("")}</div>
        <div class="rm-body">${rmPanelHtml(st)}</div>
      </div>
      <div class="rm-preview">
        <div class="rm-row" style="justify-content:space-between;margin-bottom:8px;"><span class="rm-label" style="margin:0;">معاينة حية</span><span class="rm-badge">بيانات وهمية — لا تُعرض تقارير حقيقية</span></div>
        <div class="rm-preview-scroll"><div style="zoom:${zoom};">${rptWrap(d, doc, true)}</div></div>
      </div>
    </div>
  </div></div>`;
}
function handleReportsManageAction(action, ds) {
  const st = rmState();
  const d = st.draft;
  st.saved = false;
  switch (action) {
    case "rm-select": st.sel = ds.id; st.draft = null; st.confirmDel = false; st.openCols = null; break;
    case "rm-tab": st.tab = ds.tab; break;
    case "rm-set": rmSetField(ds.key, ds.value); break;
    case "rm-toggle": d[ds.key] = !d[ds.key]; break;
    case "rm-hide": d.hidden = { ...d.hidden, [ds.key]: !d.hidden[ds.key] }; break;
    case "rm-move": {
      const defs = st.sel === "unit" ? unitChapterDefs() : aggChapterDefs(d);
      const ord = rptOrdered(defs, d).map((c) => c.key);
      const i = ord.indexOf(ds.key), j = i + Number(ds.dir);
      if (i < 0 || j < 0 || j >= ord.length) break;
      [ord[i], ord[j]] = [ord[j], ord[i]];
      d.order = ord; break;
    }
    case "rm-cols": st.openCols = st.openCols === ds.key ? null : ds.key; break;
    case "rm-col": {
      const cols = rptSectionColumns(ds.sec, d, st.colsCache || (st.colsCache = rptUnitColumns()));
      const col = cols.find((c) => c.label === ds.col);
      if (!col) break;
      if (col.on && cols.filter((c) => c.on).length <= 1) { alert("لازم يبقى عمود واحد على الأقل."); break; }
      const hid = (d.hiddenCols[ds.sec] || []).filter((x) => x !== ds.col);
      const show = (d.colsShow[ds.sec] || []).filter((x) => x !== ds.col);
      if (col.on) { if (col.def) hid.push(ds.col); } // إخفاء
      else if (!col.def) show.push(ds.col); // إظهار حقل مخفي افتراضيًا
      d.hiddenCols = { ...d.hiddenCols, [ds.sec]: hid };
      d.colsShow = { ...d.colsShow, [ds.sec]: show };
      break;
    }
    case "rm-bg-remove": d.bgImage = ""; break;
    case "rm-ab-add": d.approvalBoxes = [...(d.approvalBoxes || []), { role: "", name: "" }].slice(0, 6); break;
    case "rm-ab-del": d.approvalBoxes = (d.approvalBoxes || []).filter((_, j) => String(j) !== ds.i); if (!d.approvalBoxes.length) d.approvalBoxes = [{ role: "الاعتماد", name: "" }]; break;
    case "rm-cc-add": {
      const sc = rptSectionsWithFields().find((x) => rptChartableFields(x.id).length);
      if (!sc) break;
      const id = "cc-" + Date.now().toString(36);
      const ch = st.sel === "unit" ? sc.id : "summary";
      d.customCharts = [...(d.customCharts || []), { id, title: "", section: sc.id, field: rptChartableFields(sc.id)[0].id, chapter: ch }];
      break;
    }
    case "rm-cc-del": {
      d.customCharts = (d.customCharts || []).filter((x) => x.id !== ds.id);
      const ch = { ...(d.charts || {}) }; delete ch[ds.id]; d.charts = ch; break;
    }
    case "rm-ch-add": {
      const sc = rptSectionsWithFields()[0];
      if (!sc) break;
      const id = "cch-" + Date.now().toString(36);
      d.customChapters = [...(d.customChapters || []), { id, title: sc.label, section: sc.id, fields: [], sort: "recent", sortField: "", limit: 10 }];
      st.openCols = id; break;
    }
    case "rm-ch-del": {
      d.customChapters = (d.customChapters || []).filter((x) => x.id !== ds.id);
      d.customCharts = (d.customCharts || []).map((x) => (x.chapter === ds.id ? { ...x, chapter: "summary" } : x));
      st.openCols = null; break;
    }
    case "rm-ch-field": {
      d.customChapters = (d.customChapters || []).map((x) => {
        if (x.id !== ds.id) return x;
        const all = rptSectionFields(x.section);
        let cur = x.fields && x.fields.length ? x.fields.slice() : all.slice(0, 4).map((f) => f.id);
        if (cur.includes(ds.field)) { if (cur.length > 1) cur = cur.filter((f) => f !== ds.field); }
        else cur = all.map((f) => f.id).filter((f) => cur.includes(f) || f === ds.field);
        return { ...x, fields: cur };
      });
      break;
    }
    case "rm-font-add": {
      const v = ((document.getElementById("rm-font-new") || {}).value || "").trim().replace(/\s+/g, " ");
      if (!RPT_FONT_NAME_RE.test(v)) { alert("اكتبي اسم الخط بالحروف الإنجليزية كما في Google Fonts (مثل: Lalezar)."); break; }
      const fonts = rptStore().fonts;
      if (!fonts.includes(v) && !REPORT_FONTS.includes(v)) rptSaveGlobal({ fonts: [...fonts, v] });
      break;
    }
    case "rm-font-del": rptSaveGlobal({ fonts: rptStore().fonts.filter((f) => f !== ds.name) }); break;
    case "rm-size-add": {
      const g = (id) => ((document.getElementById(id) || {}).value || "").trim();
      const name = g("rm-size-name").slice(0, 30), w = Number(g("rm-size-w")), h = Number(g("rm-size-h"));
      if (!name || !(w >= 50 && w <= 1000 && h >= 50 && h <= 1000)) { alert("اكتبي اسمًا للحجم، والعرض والطول بالمليمتر بين 50 و1000."); break; }
      rptSaveGlobal({ sizes: [...rptStore().sizes, { id: "sz-" + Date.now().toString(36), name, w, h }] });
      break;
    }
    case "rm-size-del": rptSaveGlobal({ sizes: rptStore().sizes.filter((z) => z.id !== ds.id) }); if (d.size === ds.id) d.size = "A4"; break;
    case "rm-save": rptSave(st.sel, JSON.parse(JSON.stringify(d))); st.draft = null; st.saved = true; break;
    case "rm-reset": {
      const base = st.sel === "final" ? RPT_FINAL_DEFAULTS : st.sel === "unit" ? RPT_UNIT_DEFAULTS : { ...RPT_CUSTOM_DEFAULTS, coverTitle: d.name };
      const keep = st.sel === "final" || st.sel === "unit" ? {} : { id: d.id, name: d.name, scopeLevelId: d.scopeLevelId, periodKind: d.periodKind, year: d.year };
      st.draft = rptNormalize(JSON.parse(JSON.stringify({ ...base, ...keep }))); break;
    }
    case "rm-new": {
      const n = rptStore().custom.length + 1;
      const id = uid("rep").replace(/[^a-zA-Z0-9-]/g, "");
      const name = "تقرير مجمّع " + arabicDigits(n);
      rptSave(id, { ...RPT_CUSTOM_DEFAULTS, name, coverTitle: name, order: AGG_CHAPTERS.map((c) => c.key) });
      st.sel = id; st.draft = null; st.tab = "access"; st.confirmDel = false; break;
    }
    case "rm-delete-ask": st.confirmDel = true; break;
    case "rm-delete-cancel": st.confirmDel = false; break;
    case "rm-delete": rptDeleteCustom(st.sel); st.sel = "final"; st.draft = null; st.confirmDel = false; st.tab = "page"; break;
    case "rm-role": {
      if (!canManageUsers()) break;
      const role = rolesList().find((r) => r.id === ds.role);
      if (!role) break;
      const p = rolePermsOf(role);
      const pages = p.pages.includes(ds.page) ? p.pages.filter((x) => x !== ds.page) : [...p.pages, ds.page];
      S.roles = rolesList().map((r) => (r.id === role.id ? { ...r, permissions: { ...(r.permissions || {}), pages } } : r));
      dataStore.saveRoles(S.roles);
      break;
    }
    default: return false;
  }
  render();
  return true;
}

function renderSiteSettings() {
  const current = S.siteSettings || dataStore.getSiteSettings();
  const theme = themeOf(current);
  const isColorDefault = current.primary === DEFAULT_SITE_COLORS.primary && current.background === DEFAULT_SITE_COLORS.background;
  const isBrandingDefault = !current.logo && (Number(current.logoSize) || DEFAULT_BRANDING.logoSize) === DEFAULT_BRANDING.logoSize && !current.bannerImage &&
    (current.bannerTitle || DEFAULT_BRANDING.bannerTitle) === DEFAULT_BRANDING.bannerTitle && (current.bannerSub || DEFAULT_BRANDING.bannerSub) === DEFAULT_BRANDING.bannerSub &&
    (current.platformName || DEFAULT_BRANDING.platformName) === DEFAULT_BRANDING.platformName && (current.sidebarTagline || "") === DEFAULT_BRANDING.sidebarTagline && !current.sidebarTaglineImage &&
    (current.fontFamily || DEFAULT_BRANDING.fontFamily) === DEFAULT_BRANDING.fontFamily;
  const fieldLabel = (t) => `<div style="font-size:13px;font-weight:800;margin-bottom:8px;">${esc(t)}</div>`;
  const textInput = (id, val, placeholder) => `<input type="text" id="${id}" class="input" value="${esc(val || "")}" placeholder="${esc(placeholder || "")}" style="width:100%;" />`;
  const imgPreviewBlock = (src, alt, previewStyle, fileInputId, removeAction, showRemove) => `
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      ${src
        ? `<img id="${fileInputId === "site-logo-file" ? "site-logo-preview" : ""}" src="${esc(src)}" alt="${esc(alt)}" style="${previewStyle}background:#fff;border:1px solid ${BORDER};border-radius:8px;object-fit:contain;" />`
        : `<div style="${previewStyle}background:${GRAY_BG};border:1px dashed ${BORDER};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10.5px;color:${SUBTLE};text-align:center;">بدون صورة</div>`}
      <label class="pill-btn pill-ghost" style="margin:0;">
        ${iconCheckCircle(14, INK)} اختيار صورة
        <input type="file" accept="image/*" id="${fileInputId}" style="display:none;" />
      </label>
      ${showRemove ? pillBtn("إزالة", { variant: "ghost", icon: iconX(14, INK), action: removeAction }) : ""}
    </div>`;

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "إعدادات الموقع", subtitle: "تخصيص هوية الموقع — الألوان، الشعار، البانر، والعبارات. التغيير يظهر فورًا هنا، ولازم الضغط على \"حفظ\" ليصير دائمًا" })}

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">الألوان</div>
      <div style="margin-bottom:20px;">
        ${fieldLabel("اللون الأساسي (الأزرار، العناوين، التحديد)")}
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="color" id="site-primary-color" value="${esc(current.primary)}" style="width:52px;height:40px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
          <span style="font-size:12.5px;color:${SUBTLE};font-family:monospace;">${esc(current.primary)}</span>
        </div>
      </div>
      <div style="margin-bottom:16px;">
        ${fieldLabel("لون خلفية الموقع")}
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="color" id="site-bg-color" value="${esc(current.background)}" style="width:52px;height:40px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
          <span style="font-size:12.5px;color:${SUBTLE};font-family:monospace;">${esc(current.background)}</span>
        </div>
      </div>
      <div>${pillBtn("استعادة الألوان الافتراضية", { variant: "ghost", icon: iconX(14, INK), action: "restore-site-settings-defaults", disabled: isColorDefault })}</div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">ألوان متقدمة (كل ألوان الموقع)</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:16px;">
        ${THEME_COLOR_FIELDS.map((f) => `<div>${fieldLabel(f.label)}<div style="display:flex;align-items:center;gap:10px;">
          <input type="color" id="site-x-${f.key}" value="${esc(theme[f.key])}" style="width:46px;height:36px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
          <span id="site-x-${f.key}-hex" style="font-size:12px;color:${SUBTLE};font-family:monospace;">${esc(theme[f.key])}</span></div></div>`).join("")}
      </div>
      <div class="subhead">ألوان بطاقات تصفّح الهيكل</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
        ${theme.bs.map((c, i) => `<div style="text-align:center;"><input type="color" id="site-bs-${i}" value="${esc(c)}" style="width:52px;height:40px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" /><div style="font-size:10.5px;color:${SUBTLE};margin-top:4px;">اللون ${i + 1}</div></div>`).join("")}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${pillBtn("استعادة الألوان المتقدمة الافتراضية", { variant: "ghost", icon: iconX(14, INK), action: "restore-theme-defaults" })}
      </div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">خيارات «الفترة التي يغطيها التقرير»</div>
      <div class="hint" style="margin-bottom:12px;">تظهر في البيانات الأساسية للتقرير وفي فلتر الفترة. «شهري» و«فصلي» مثبّتتان لأنهما تفتحان حقل الشهر وحقل الفصل. التقارير القديمة تحتفظ بقيمتها حتى لو حذفتِ الخيار أو غيّرتِ اسمه.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
        ${PERIOD_TYPES.map((pt, i) => { const locked = PERIOD_TYPES_LOCKED.includes(pt); return `<div style="display:flex;align-items:center;gap:6px;">
          <input type="text" class="input" id="site-pt-${i}" value="${esc(pt)}" ${locked ? "disabled" : ""} style="flex:1;" />
          ${locked ? `<span style="font-size:10.5px;color:${SUBTLE};min-width:56px;text-align:center;">مثبّت</span>` : `<span style="min-width:56px;"></span>`}
          <button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="move-period-type" data-idx="${i}" data-dir="up" ${i === 0 ? "disabled" : ""}>${iconChevronUp(12, INK)}</button>
          <button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="move-period-type" data-idx="${i}" data-dir="down" ${i === PERIOD_TYPES.length - 1 ? "disabled" : ""}>${iconChevronDown(12, INK)}</button>
          ${locked ? `<span style="width:30px;"></span>` : `<button class="icon-btn" style="width:30px;height:30px;background:${DANGER_BG}" data-action="remove-period-type" data-idx="${i}">${iconTrash(13, DANGER)}</button>`}
        </div>`; }).join("")}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <input type="text" class="input" id="site-pt-new" placeholder="خيار جديد، مثال: تقرير ملتقى" style="flex:1;min-width:180px;" />
        ${pillBtn("إضافة", { icon: iconPlus(14, "#fff"), action: "add-period-type" })}
        ${pillBtn("استعادة الافتراضي", { variant: "ghost", icon: iconX(14, INK), action: "restore-period-types" })}
      </div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">ألوان الأيقونات</div>
      ${[["iconColor", "لون كل أيقونات الموقع (القوائم، الأزرار، البطاقات)", current.primary], ["fieldIconColor", "لون أيقونات إدارة حقول الأقسام (تتجاوز اللون العام)", theme.iconColor || current.primary]].map(([k, lb, def]) => `<div style="margin-bottom:14px;">${fieldLabel(lb)}
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;"><input type="color" id="site-x-${k}" value="${esc(theme[k] || def)}" style="width:46px;height:36px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
        ${theme[k] ? pillBtn("اللون الأصلي", { variant: "ghost", icon: iconX(14, INK), action: "reset-theme-key", data: { key: k } }) : `<span style="font-size:11.5px;color:${SUBTLE};">(الافتراضي)</span>`}</div></div>`).join("")}
      <div class="hint">ولكل حقل لونه الخاص من نافذة تعديل الحقل بإدارة حقول الأقسام. الأيقونات الحمراء/الخضراء/البيضاء ذات المعنى (حذف، نجاح، على الزر) تبقى كما هي.</div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">النصوص: الألوان والأحجام</div>
      ${TEXT_STYLE_FIELDS.map((f) => `<div style="margin-bottom:16px;">${fieldLabel(f.label)}
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <input type="color" id="site-ts-${f.k}-color" value="${esc(theme[f.k + "Color"] || (f.k === "nav" ? theme.ink : f.k === "bannerSub" ? "#000000" : current.primary))}" style="width:46px;height:36px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
          <input type="range" id="site-ts-${f.k}-size" min="${f.min}" max="${f.max}" step="1" value="${Number(theme[f.k + "Size"]) || f.def}" style="flex:1;min-width:120px;" />
          <span id="site-ts-${f.k}-size-label" style="font-size:12px;color:${SUBTLE};font-family:monospace;min-width:44px;">${Number(theme[f.k + "Size"]) || f.def}px</span>
          ${theme[f.k + "Color"] ? pillBtn("اللون الأصلي", { variant: "ghost", icon: iconX(14, INK), action: "reset-text-color", data: { key: f.k } }) : ""}
        </div></div>`).join("")}
      <div class="hint">لون ونص عبارة الشريط الجانبي وحجمها في بطاقة «الشريط الجانبي» أدناه.</div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">الخط</div>
      <div>
        ${fieldLabel("خط الموقع (يشمل النصوص والعناوين والأزرار بكل الصفحات — عدا التقرير المطبوع نفسه)")}
        <select class="input" id="site-font-family" style="width:100%;margin-bottom:10px;">
          ${FONT_OPTIONS.map((f) => `<option value="${esc(f.value)}" style="font-family:'${esc(f.value)}';" ${(current.fontFamily || DEFAULT_BRANDING.fontFamily) === f.value ? "selected" : ""}>${esc(f.label)}</option>`).join("")}
        </select>
        <div style="border:1px solid ${BORDER};border-radius:10px;padding:14px 16px;background:${GRAY_BG};font-family:'${esc(current.fontFamily || DEFAULT_BRANDING.fontFamily)}';">
          <div style="font-size:16px;font-weight:800;margin-bottom:4px;">هذا مثال على شكل الخط المختار</div>
          <div style="font-size:12.5px;color:${SUBTLE};">تقرير الأداء الدوري — وحدة الاختبارات — جمعية فرقان</div>
        </div>
      </div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">الشعار</div>
      <div style="margin-bottom:20px;">
        ${fieldLabel("صورة الشعار (يظهر بالشريط الجانبي وصفحة الدخول)")}
        ${imgPreviewBlock(siteLogoSrc(current), "الشعار", `width:${Number(current.logoSize) || DEFAULT_BRANDING.logoSize}px;height:${Number(current.logoSize) || DEFAULT_BRANDING.logoSize}px;`, "site-logo-file", "remove-site-logo", !!current.logo)}
      </div>
      <div>
        ${fieldLabel("حجم الشعار")}
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="range" id="site-logo-size" min="20" max="72" step="2" value="${Number(current.logoSize) || DEFAULT_BRANDING.logoSize}" style="flex:1;" />
          <span id="site-logo-size-label" style="font-size:12.5px;color:${SUBTLE};font-family:monospace;min-width:40px;">${Number(current.logoSize) || DEFAULT_BRANDING.logoSize}px</span>
        </div>
      </div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">بانر لوحة المعلومات</div>
      <div style="margin-bottom:20px;">
        ${fieldLabel("صورة البانر")}
        ${imgPreviewBlock(siteBannerSrc(current), "البانر", `width:120px;height:60px;`, "site-banner-file", "remove-site-banner", !!current.bannerImage)}
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("عنوان البانر")}
        ${textInput("site-banner-title", current.bannerTitle, DEFAULT_BRANDING.bannerTitle)}
      </div>
      <div>
        ${fieldLabel("وصف البانر")}
        ${textInput("site-banner-sub", current.bannerSub, DEFAULT_BRANDING.bannerSub)}
      </div>
    </div>

    <div class="card" style="max-width:560px;margin-bottom:16px;">
      <div class="subhead" style="margin-top:0;">الشريط الجانبي</div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("اسم المنصة (يظهر بعنوان الشريط الجانبي)")}
        ${textInput("site-platform-name", current.platformName, DEFAULT_BRANDING.platformName)}
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("العبارة أسفل الشريط الجانبي (قبل تسجيل الخروج)")}
        ${textInput("site-sidebar-tagline", current.sidebarTagline, DEFAULT_BRANDING.sidebarTagline)}
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("خلفية الشريط الجانبي: لون (من «ألوان متقدمة») أو صورة")}
        ${imgPreviewBlock(theme.sidebarBgImage || "", "خلفية الشريط الجانبي", `width:70px;height:100px;`, "site-sidebar-bg-file", "remove-sidebar-bg-image", !!theme.sidebarBgImage)}
        <div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
          <span style="font-size:11.5px;color:${SUBTLE};white-space:nowrap;">تفتيح الصورة (لوضوح النص)</span>
          <input type="range" id="site-sidebar-bg-veil" min="0" max="90" step="5" value="${Number(theme.sidebarBgVeil) || 0}" style="flex:1;" />
          <span id="site-sidebar-bg-veil-label" style="font-size:12px;color:${SUBTLE};font-family:monospace;min-width:44px;">${Number(theme.sidebarBgVeil) || 0}%</span></div>
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("موضع العبارة: رفع / تنزيل")}
        <div style="display:flex;align-items:center;gap:12px;"><span style="font-size:11px;color:${SUBTLE};">أعلى</span>
          <input type="range" id="site-tagline-offset" min="-80" max="80" step="2" value="${Number(theme.taglineOffset) || 0}" style="flex:1;" />
          <span style="font-size:11px;color:${SUBTLE};">أسفل</span>
          <span id="site-tagline-offset-label" style="font-size:12px;color:${SUBTLE};font-family:monospace;min-width:44px;">${Number(theme.taglineOffset) || 0}px</span></div>
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("حجم خط العبارة")}
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="range" id="site-tagline-size" min="10" max="26" step="1" value="${Number(theme.taglineSize) || 13}" style="flex:1;" />
          <span id="site-tagline-size-label" style="font-size:12px;color:${SUBTLE};font-family:monospace;min-width:44px;">${Number(theme.taglineSize) || 13}px</span></div>
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("ارتفاع صورة العبارة")}
        <div style="display:flex;align-items:center;gap:12px;">
          <input type="range" id="site-tagline-imgh" min="30" max="180" step="5" value="${Number(theme.taglineImgH) || 70}" style="flex:1;" />
          <span id="site-tagline-imgh-label" style="font-size:12px;color:${SUBTLE};font-family:monospace;min-width:44px;">${Number(theme.taglineImgH) || 70}px</span></div>
      </div>
      <div style="margin-bottom:16px;">
        ${fieldLabel("لون العبارة (اتركيه كما هو لاستخدام اللون الأساسي)")}
        <div style="display:flex;align-items:center;gap:10px;">
          <input type="color" id="site-tagline-color" value="${esc(theme.taglineColor || current.primary)}" style="width:46px;height:36px;border:1px solid ${BORDER};border-radius:8px;cursor:pointer;padding:2px;" />
          ${theme.taglineColor ? pillBtn("استخدام اللون الأساسي", { variant: "ghost", icon: iconX(14, INK), action: "reset-tagline-color" }) : ""}
        </div>
      </div>
      <div style="margin-bottom:14px;">
        ${fieldLabel("معاينة (كما تظهر لباقي الحسابات)")}
        <div id="site-tagline-preview" style="border:1px dashed ${BORDER};border-radius:12px;padding:18px 10px;background:${theme.sidebarBg};min-height:150px;overflow:hidden;">${sidebarTaglineBlockHtml(current)}</div>
      </div>
      <div>
        ${fieldLabel("صورة اختيارية أسفل الشريط الجانبي (قبل تسجيل الخروج)")}
        ${imgPreviewBlock(current.sidebarTaglineImage || "", "عبارة الشريط الجانبي", `width:90px;height:60px;`, "site-tagline-image-file", "remove-site-tagline-image", !!current.sidebarTaglineImage)}
      </div>
    </div>


    ${dashSettingsCardHtml()}

    <div class="card" style="max-width:560px;">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${pillBtn("حفظ", { icon: iconCheckCircle(15, "#fff"), action: "save-site-settings" })}
        ${pillBtn("استعادة إعدادات الهوية الافتراضية", { variant: "ghost", icon: iconX(14, INK), action: "restore-site-branding-defaults", disabled: isBrandingDefault })}
      </div>
      ${S.ui.siteSettingsFileError ? `<div class="error-box" style="margin-top:10px;">${esc(S.ui.siteSettingsFileError)}</div>` : ""}
      ${S.ui.siteSettingsSaved ? `<div class="hint" style="color:${GREEN};margin-top:10px;">تم الحفظ ✓ — التغيير صار دائمًا لكل زوار الموقع.</div>` : ""}
    </div>
  </div></div>`;
}

/* =============================== Department overview (department-level login) = */
// قائمة تبديل تظهر فقط لمديرة النظام بصفحتي "قسمي" ومكتب الإشراف — تتيح لها
// اختيار أي قسم/مكتب تبي تطّلع عليه وتضبطه، بدل الاقتصار على قيمة واحدة ثابتة.
function adminScopeSwitcherHtml(kind) {
  if (!S.isAdmin) return "";
  const list = kind === "department" ? (S.departments || []) : (S.offices || []);
  const current = kind === "department" ? S.currentDepartmentId : S.currentOfficeId;
  const action = kind === "department" ? "admin-switch-department" : "admin-switch-office";
  const label = kind === "department" ? "عرض وضبط أي قسم:" : "عرض وضبط أي مكتب إشراف:";
  if (!list.length) return "";
  return `
  <div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
    <span style="font-size:11.5px;font-weight:700;color:${SUBTLE};white-space:nowrap;">${label}</span>
    <select class="input" style="flex:1;min-width:200px;" data-action="${action}">
      ${list.map((x) => `<option value="${esc(x.id)}" ${current === x.id ? "selected" : ""}>${esc(x.name)}${x.status !== "active" ? " (معطّل)" : ""}</option>`).join("")}
    </select>
  </div>`;
}
// نفس فكرة adminScopeSwitcherHtml، لكن للوحدات/المراكز: قائمة تبديل لمديرة النظام فقط.
function adminUnitSwitcherHtml() {
  if (!S.isAdmin) return "";
  const list = (S.units || []).filter((u) => u.role === "unit" || u.role === "center");
  if (!list.length) return "";
  const current = S.currentUnitId;
  const curUnit = (S.units || []).find((u) => u.id === current);
  return `
  <div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
    <span style="font-size:11.5px;font-weight:700;color:${SUBTLE};white-space:nowrap;">عرض وضبط أي وحدة:</span>
    <select class="input" style="flex:1;min-width:200px;" data-action="admin-switch-unit">
      ${list.map((u) => `<option value="${esc(u.id)}" ${current === u.id ? "selected" : ""}>${esc(u.name)}${u.role === "center" ? " (مركز)" : ""}${u.status !== "active" ? " (معطّلة)" : ""}</option>`).join("")}
    </select>
  </div>`;
}
// قائمة تبديل الوحدة بصفحات "unit-home" (لوحة معلومات الوحدة/تقارير/إنشاء
// تقرير) — تعمل لثلاث حالات: مديرة النظام (كل الوحدات، نفس adminUnitSwitcherHtml
// القديمة بكامل خياراتها)، وحساب نطاقه قسم أو مكتب إشراف (وحدات نطاقه فقط،
// بدون مفتاح منظور "رئيسة الوحدة" الخاص بمديرة النظام). حساب الوحدة نفسها لا
// يحتاج قائمة تبديل أصلًا (عنده وحدة واحدة فقط).
function scopedUnitSwitcherHtml() {
  if (S.isAdmin) return adminUnitSwitcherHtml();
  if (S.isDepartmentUser || S.isOfficeUser) {
    const kind = S.isDepartmentUser ? "department" : "office";
    const scopeId = S.isDepartmentUser ? S.currentDepartmentId : S.currentOfficeId;
    const realUnits = (S.isDepartmentUser
      ? S.units.filter((u) => u.departmentId === scopeId && u.status === "active")
      : officeUnits(scopeId)).filter((u) => u.role !== "self_report");
    // أول خيار دائمًا: تقرير القسم/المكتب نفسه (ذاتي) — يُنشأ تلقائيًا عند
    // الحاجة؛ هذا هو ما يتيح للقسم/المكتب نفسه إنشاء تقريره الخاص، منفصلاً
    // عن تقارير وحداته التابعة، تمامًا بنفس فكرة لوحة المعلومات.
    const selfUnit = ensureSelfReportUnit(kind, scopeId);
    const list = selfUnit ? [selfUnit, ...realUnits] : realUnits;
    if (list.length < 2) return "";
    const current = S.currentUnitId;
    return `
    <div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <span style="font-size:11.5px;font-weight:700;color:${SUBTLE};white-space:nowrap;">اختيار الوحدة:</span>
      <select class="input" style="flex:1;min-width:200px;" data-action="scoped-switch-unit">
        ${list.map((u) => `<option value="${esc(u.id)}" ${current === u.id ? "selected" : ""}>${u.role === "self_report" ? "📁 " : ""}${esc(u.name)}</option>`).join("")}
      </select>
    </div>`;
  }
  return "";
}
// صفحة مستقلة قائمة بذاتها لـ"اعتماد أبرز النتائج والتوصيات" — نفس القسم
// بالضبط (deptCurationSectionHtml، بدون أي تكرار بالكود)، بنفس نمط صفحة
// "office-curation" المستقلة أصلًا للمكتب. "قسمي" تبقى تعرض نفس القسم أيضًا
// بدون أي حذف، لحد ما تتأكد نجود من الصفحة الجديدة وتقرر حذف القديمة بنفسها.
// الجهات التي يقدر الحساب الحالي يعتمد لها — تتكيّف مع نطاق الحساب (نفس فكرة
// "لوحة المعلومات"): مديرة النظام/الإدارة العليا = كل المكاتب والأقسام، المكتب =
// مكتبه وأقسامه، القسم = قسمه، الوحدة = قسم وحدتها.
function curationTargets() {
  const depts = (S.departments || []).filter((d) => d.status !== "inactive");
  const offices = (S.offices || []).filter((o) => o.status !== "inactive");
  const T = [];
  const addO = (o) => T.push({ key: "o:" + o.id, kind: "office", id: o.id, label: "مكتب — " + o.name });
  const addD = (d) => T.push({ key: "d:" + d.id, kind: "dept", id: d.id, label: "قسم — " + d.name });
  if (S.isAdmin || S.isExecutive) { offices.forEach(addO); depts.forEach(addD); return T; }
  if (S.currentOfficeId) {
    const o = offices.find((x) => x.id === S.currentOfficeId);
    if (o) addO(o);
    const ids = officeScopeIds(S.currentOfficeId);
    depts.filter((d) => ids.includes(d.officeId)).forEach(addD);
    return T;
  }
  let deptId = S.currentDepartmentId;
  if (!deptId && S.currentUnitId) { const u = (S.units || []).find((x) => x.id === S.currentUnitId); deptId = u && u.departmentId; }
  if (deptId) { const d = depts.find((x) => x.id === deptId); if (d) addD(d); return T; }
  offices.forEach(addO); depts.forEach(addD);
  return T;
}
function renderCurationUnified() {
  const targets = curationTargets();
  const cur = targets.find((t) => t.key === S.ui.curationTarget) || targets[0];
  const sw = targets.length > 1 ? `<div class="card" style="margin-top:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="font-size:12.5px;font-weight:800;color:${ROSE};">اعتماد لـ:</div>
      <select class="input" style="flex:1;min-width:200px;" data-action="curation-target">
        ${targets.map((t) => `<option value="${esc(t.key)}" ${cur && cur.key === t.key ? "selected" : ""}>${esc(t.label)}</option>`).join("")}
      </select>
    </div>` : "";
  let body;
  if (!cur) body = `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد مكاتب أو أقسام بعد.</div>`;
  else if (cur.kind === "office") {
    const o = (S.offices || []).find((x) => x.id === cur.id);
    body = curationSectionHtml(officeUnits(o.id), (key) => isOfficeCurated(o, key), "toggle-office-curation", { office: o.id }, "اعتماد المكتب — " + o.name);
  } else {
    const d = S.departments.find((x) => x.id === cur.id);
    body = deptCurationSectionHtml(d, "اعتماد القسم — " + d.name);
  }
  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "اعتماد أبرز النتائج والتوصيات", subtitle: cur ? cur.label : "",
      right: pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) })}
    ${sw}
    ${body}
  </div></div>`;
}

/* ---- اعتماد القسم لأبرز النتائج: تُستخدم لاحقًا لترتيب أولوية العناصر
   بالملخص التنفيذي والتقرير الإداري النهائي — تُخزَّن كجزء من بيانات القسم
   نفسها، بدون أي جدول أو تبويب جديد بقاعدة البيانات. ---- */
function curationKey(kind, reportId, itemId) { return `${kind}:${reportId}:${itemId}`; }
function isDeptCurated(dept, key) { return !!(dept.curation && dept.curation.approvedKeys && dept.curation.approvedKeys.includes(key)); }
function isOfficeCurated(office, key) { return !!(office.curation && office.curation.approvedKeys && office.curation.approvedKeys.includes(key)); }
// عنصر اعتمدته مديرة القسم يظهر أولًا في الملخص التنفيذي/التقرير النهائي (بدون علامة)
// أو مكتب الإشراف (أيهما اعتمده) — طبقتا إشراف مستقلتان، كل وحدة يمر اعتمادها
// عبر الاثنتين إن وُجدتا.
function isItemCurated(unit, key) {
  const rid = String(key).split(":")[1];
  const rep = rid && ensureUnitReportsLoaded(unit.id).find((r) => r.id === rid);
  if (rep && ((rep.shared || {}).curatedKeys || []).includes(key)) return true;
  const dept = S.departments.find((d) => d.id === unit.departmentId);
  if (dept && isDeptCurated(dept, key)) return true;
  const office = dept ? (S.offices || []).find((o) => o.id === dept.officeId) : null;
  return office ? isOfficeCurated(office, key) : false;
}
function toggleDeptCuration(dept, key) {
  const current = (dept.curation && dept.curation.approvedKeys) || [];
  const next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
  S.departments = S.departments.map((d) => d.id === dept.id ? { ...d, curation: { approvedKeys: next } } : d);
  dataStore.saveDepartments(S.departments);
}
// نسخة عامة تأخذ أي قائمة وحدات — تُستخدم لكل من القسم (وحداته) ومكتب الإشراف
// (وحدات كل أقسامه التابعة، عبر officeUnits).
function collectCurationCandidatesForUnits(units) {
  const achievements = [], recommendations = [], challenges = [], strengths = [];
  units.forEach((u) => {
    ensureUnitReportsLoaded(u.id).forEach((r) => {
      (r.sections?.programs?.data?.programs || []).filter((p) => p.highlightResult).forEach((p) => {
        achievements.push({ key: curationKey("achievement", r.id, p.id), unitName: u.name, text: `${p.name || "عمل"}: ${p.highlightResult}` });
      });
      (r.sections?.recommendations?.data?.recommendations || []).forEach((rec) => {
        recommendations.push({ key: curationKey("recommendation", r.id, rec.id), unitName: u.name, text: rec.text });
      });
      (r.sections?.challenges?.data?.challenges || []).forEach((c) => {
        challenges.push({ key: curationKey("challenge", r.id, c.id), unitName: u.name, text: c.name, severity: c.severity });
      });
      (r.sections?.strengths?.data?.strengths || []).forEach((s) => {
        strengths.push({ key: curationKey("strength", r.id, s.id), unitName: u.name, text: s.name });
      });
    });
  });
  return { achievements, recommendations, challenges, strengths };
}
// عرض عام لقسم "اعتماد أبرز النتائج والتوصيات" — يُستخدم لكل من مديرة القسم
// ومكتب الإشراف، بفرق فقط في: مصدر العناصر المرشّحة (units)، ودالتي isCurated/
// toggleAction + بيانات الإجراء (data-*) اللي يحتاجها كل زر.
function curationSectionHtml(units, isCuratedFn, toggleAction, toggleData, blockTitle) {
  const { achievements, recommendations, challenges, strengths } = collectCurationCandidatesForUnits(units);
  const dataAttrs = Object.entries(toggleData || {}).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ");
  const renderList = (items, emptyMsg) => items.length === 0 ? emptyHint(emptyMsg) : items.map((it) => `
    <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;border-radius:8px;background:${isCuratedFn(it.key) ? GREEN_BG : "#fff"};border:1px solid ${isCuratedFn(it.key) ? GREEN : BORDER};margin-bottom:6px;">
      <button type="button" data-action="${esc(toggleAction)}" data-key="${esc(it.key)}" ${dataAttrs} style="flex-shrink:0;background:none;border:none;cursor:pointer;padding:2px;">
        ${isCuratedFn(it.key) ? iconCheckCircle(18, GREEN) : iconCircle(18, SUBTLE)}
      </button>
      <div style="flex:1;font-size:12.5px;"><b>${esc(it.unitName)}</b> — ${esc(it.text || "—")}</div>
    </div>`).join("");
  return `
    <div class="card" style="margin-top:18px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:6px;">${blockTitle ? esc(blockTitle) : "اعتماد أبرز النتائج والتوصيات"}</div>
      <div class="hint" style="margin-bottom:12px;">علّمي أهم ما يستحق الوصول للإدارة العليا — العناصر المعتمدة تظهر أولاً بالملخص التنفيذي والتقرير الإداري النهائي.</div>
      <div class="subhead">أبرز الإنجازات</div>${renderList(achievements, "لا توجد إنجازات بارزة مُدخلة بعد.")}
      <div class="subhead">نقاط القوة</div>${renderList(strengths, "لا توجد نقاط قوة مُدخلة بعد.")}
      <div class="subhead">التوصيات</div>${renderList(recommendations, "لا توجد توصيات مُدخلة بعد.")}
      <div class="subhead">التحديات</div>${renderList(challenges, "لا توجد تحديات مُدخلة بعد.")}
    </div>`;
}
function deptCurationSectionHtml(dept, blockTitle) {
  const deptUnits = S.units.filter((u) => u.departmentId === dept.id && u.status === "active");
  return curationSectionHtml(deptUnits, (key) => isDeptCurated(dept, key), "toggle-dept-curation", blockTitle ? { dept: dept.id } : {}, blockTitle);
}
function toggleOfficeCuration(office, key) {
  const current = (office.curation && office.curation.approvedKeys) || [];
  const next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
  S.offices = (S.offices || []).map((o) => o.id === office.id ? { ...o, curation: { approvedKeys: next } } : o);
  dataStore.saveOffices(S.offices);
}

/* =============================== صفحات مكتب الإشراف (لوحة المعلومات، الأرشفة،
   الملخص، الاعتماد) — كل صفحة مقتصرة على وحدات أقسام هذا المكتب فقط، عبر
   officeUnits(officeId). صفحة "التقارير" لا تحتاج دالة خاصة: تُستخدم renderAllReports
   نفسها (مُعمَّمة أعلاه لتشمل فرع S.isOfficeUser). ============================= */
// المكتب الأب يرى كل ما تحت المكاتب التابعة له (مكتب ← مكاتب فرعية ← أقسام ← وحدات).
function officeScopeIds(officeId) {
  const out = [officeId]; const seen = new Set(out);
  for (let i = 0; i < out.length; i++) {
    (S.offices || []).forEach((o) => { if (o.parentOfficeId === out[i] && !seen.has(o.id)) { seen.add(o.id); out.push(o.id); } });
  }
  return out;
}
function currentOffice() { return (S.offices || []).find((o) => o.id === S.currentOfficeId) || null; }

function officeNotFoundPageHtml() {
  return `<div class="page-wrap"><div class="page-inner">${adminScopeSwitcherHtml("office")}<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">${(S.offices || []).length ? "اختاري مكتب إشراف من القائمة أعلاه." : "لا توجد مكاتب إشراف بعد."}</div></div></div>`;
}
function renderOfficeDashboard() {
  const office = currentOffice();
  if (!office) return officeNotFoundPageHtml();
  const units = officeUnits(office.id);
  const depts = S.departments.filter((d) => officeScopeIds(office.id).includes(d.officeId) && d.status === "active");
  return renderExecutiveDashboard(units, depts, { kind: "office", subtitle: `نظرة إشرافية شاملة على وحدات ${office.name}`, extraTop: adminScopeSwitcherHtml("office") });
}

// وحدات/أقسام النطاق الفعلي للحساب الحالي (نفس منطق "لوحة المعلومات") — تُستخدم
// لصفحتي "الأرشفة" و"ملخص الوحدات" كي تظهرا لأي حساب تمنحينه إياهما بنفس نطاقه.
// مديرة النظام وحساب مكتب الإشراف يبقيان على سلوكهما الأصلي (بدون تغيير).
function scopedAccessUnitsAndDepts() {
  let units;
  if (S.isDepartmentUser && S.currentDepartmentId) units = S.units.filter((u) => u.departmentId === S.currentDepartmentId);
  else if (!S.isAdmin && !S.isExecutive && !S.isOfficeUser && S.currentUnitId) units = S.units.filter((u) => u.id === S.currentUnitId);
  else units = S.units;
  units = units.filter((u) => u.status === "active" && u.role !== "self_report" && u.role !== "admin" && u.role !== "executive");
  const depts = S.departments.filter((d) => d.status === "active" && units.some((u) => u.departmentId === d.id));
  return { units, depts };
}
function usesOfficeScope() { return S.isAdmin || S.isOfficeUser; }
function renderOfficeSummary() {
  if (!usesOfficeScope()) {
    const sc = scopedAccessUnitsAndDepts();
    return renderExecutiveSummary(sc.units, sc.depts, { title: "ملخص الوحدات", showAiSummary: false });
  }
  const office = currentOffice();
  if (!office) return officeNotFoundPageHtml();
  const units = officeUnits(office.id);
  const depts = S.departments.filter((d) => officeScopeIds(office.id).includes(d.officeId) && d.status === "active");
  return renderExecutiveSummary(units, depts, { title: `ملخص ${office.name}`, showAiSummary: false, extraTop: adminScopeSwitcherHtml("office") });
}


// أرشيف التقارير: تلقائي بالكامل من بيانات التقرير نفسه (السنة الهجرية ونوع
// الفترة بقسم "البيانات الأساسية") — بدون أي مجلدات تُنشأ أو تُحذف يدويًا، حسب
// طلب نجود صراحة. البنية: سنة هجرية ← نوع الفترة ← قائمة التقارير.
function officeArchiveTree(units) {
  const flat = collectReportsFlatForUnits(units);
  const tree = {};
  flat.forEach((x) => {
    const basic = x.report.sections?.basic?.data || {};
    const year = basic.hijriYear || "بدون سنة محددة";
    const period = basic.periodType || "بدون نوع فترة";
    if (!tree[year]) tree[year] = {};
    if (!tree[year][period]) tree[year][period] = [];
    tree[year][period].push(x);
  });
  return tree;
}
// أيقونة مجلد ملوّنة (تدرّج) بنمط مدير الملفات — gid لازم يكون فريدًا بكل بطاقة.
const ARC_FOLDER_COLORS = [["#9fb0ff", "#6174f3"], ["#e8b4f7", "#c77be8"], ["#86e8c4", "#3cc79a"], ["#fbb27a", "#ec7a30"]];
function archiveFolderSvg(idx) {
  const c = ARC_FOLDER_COLORS[idx % ARC_FOLDER_COLORS.length];
  const g = "arcf" + idx;
  return `<svg width="64" height="52" viewBox="0 0 64 52" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs>
    <path d="M4 8a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v6H4z" fill="${c[1]}" opacity=".55"/>
    <rect x="4" y="14" width="56" height="34" rx="5" fill="url(#${g})"/></svg>`;
}
function archiveFileSvg(color) {
  return `<svg width="46" height="58" viewBox="0 0 46 58" aria-hidden="true"><path d="M5 2h26l11 11v39a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" fill="#fff" stroke="#e4d9d6" stroke-width="1.5"/><path d="M31 2v9a2 2 0 0 0 2 2h9" fill="#f3ecea" stroke="#e4d9d6" stroke-width="1.5"/><rect x="9" y="26" width="28" height="3" rx="1.5" fill="#e4d9d6"/><rect x="9" y="33" width="22" height="3" rx="1.5" fill="#e4d9d6"/><rect x="9" y="40" width="26" height="3" rx="1.5" fill="#e4d9d6"/><circle cx="15" cy="19" r="4.5" fill="${color}"/></svg>`;
}
function renderOfficeArchive() {
  const office = usesOfficeScope() ? currentOffice() : { id: "", name: "نطاق حسابك" };
  if (usesOfficeScope() && !currentOffice()) return officeNotFoundPageHtml();
  const units = usesOfficeScope() ? officeUnits(office.id) : scopedAccessUnitsAndDepts().units;
  const tree = officeArchiveTree(units);
  const years = Object.keys(tree).sort((a, b) => b.localeCompare(a, "ar"));
  const selectedYear = S.ui.officeArchiveYear && tree[S.ui.officeArchiveYear] ? S.ui.officeArchiveYear : null;
  const selectedPeriod = selectedYear && S.ui.officeArchivePeriod && tree[selectedYear][S.ui.officeArchivePeriod] ? S.ui.officeArchivePeriod : null;

  const crumbs = [`<button class="pill-btn pill-ghost" data-action="office-archive-nav" data-year="" data-period="">${iconLayers(13, ROSE)} الأرشيف</button>`];
  if (selectedYear) crumbs.push(`<span style="color:${SUBTLE};">/</span><button class="pill-btn pill-ghost" data-action="office-archive-nav" data-year="${esc(selectedYear)}" data-period="">${esc(selectedYear)}</button>`);
  if (selectedPeriod) crumbs.push(`<span style="color:${SUBTLE};">/</span><span class="pill-btn pill-primary" style="cursor:default;">${esc(selectedPeriod)}</span>`);

  // المجلدات = المستوى التالي (سنوات ← أنواع فترات)، والملفات = تقارير المستوى الحالي.
  let folders = [], items = [];
  if (!selectedYear) {
    folders = years.map((y) => ({ name: y, count: Object.values(tree[y]).reduce((n, arr) => n + arr.length, 0), year: y, period: "" }));
    years.forEach((y) => Object.values(tree[y]).forEach((arr) => { items = items.concat(arr); }));
  } else if (!selectedPeriod) {
    folders = Object.keys(tree[selectedYear]).map((p) => ({ name: p, count: tree[selectedYear][p].length, year: selectedYear, period: p }));
    Object.values(tree[selectedYear]).forEach((arr) => { items = items.concat(arr); });
  } else {
    items = tree[selectedYear][selectedPeriod].slice();
  }
  items.sort((x, y) => (y.report.createdAt || 0) - (x.report.createdAt || 0));

  const foldersHtml = folders.length ? `<div class="arc-folders">${folders.map((f, i) => `
    <button type="button" class="arc-folder" data-action="office-archive-nav" data-year="${esc(f.year)}" data-period="${esc(f.period)}">
      ${archiveFolderSvg(i)}
      <div class="arc-folder-name">${esc(f.name)}</div>
      <div class="arc-folder-meta"><b>${f.count}</b> تقرير</div>
    </button>`).join("")}</div>` : "";

  const filesHtml = items.length === 0
    ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تقارير مؤرشفة بعد.</div>`
    : `<div class="arc-files" id="archive-grid">${items.map(({ unit, report }) => {
        const meta = reportStatusMeta(report.status);
        const dateStr = new Date(report.createdAt).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "short", day: "numeric" });
        const title = report.label || "تقرير";
        return `<button type="button" class="arc-file" data-search="${esc((title + " " + unit.name + " " + meta.label).toLowerCase())}" data-action="view-report-pdf" data-unit-id="${esc(unit.id)}" data-report-id="${esc(report.id)}" title="عرض PDF">
          ${archiveFileSvg(meta.color)}
          <div class="arc-file-name">${esc(title)}</div>
          <div class="arc-file-unit">${esc(unit.name)}</div>
          <div class="arc-file-foot"><span>${esc(dateStr)}</span><span class="arc-dot" style="background:${meta.color};" title="${esc(meta.label)}"></span></div>
        </button>`;
      }).join("")}</div>`;

  // العمود الجانبي: إحصاءات المستوى الحالي (إجمالي + توزيع الحالات).
  const total = items.length;
  const byStatus = {};
  items.forEach(({ report }) => { const m = reportStatusMeta(report.status); (byStatus[m.label] = byStatus[m.label] || { m, n: 0 }).n++; });
  const approved = (byStatus["معتمد"] || { n: 0 }).n;
  const pct = total ? Math.round((approved / total) * 100) : 0;
  const chips = Object.values(byStatus).sort((x, y) => y.n - x.n).map(({ m, n }) => `
    <div class="arc-chip" style="background:${m.bg};color:${m.color};"><span class="arc-chip-dot" style="background:${m.color};"></span><span style="flex:1;">${esc(m.label)}</span><b>${n}</b></div>`).join("");
  const side = `<div class="arc-side">
    <div class="arc-card">
      <div class="arc-card-label">إجمالي التقارير</div>
      <div class="arc-big"><b>${total}</b> <span>تقرير${folders.length ? " · " + folders.length + " مجلد" : ""}</span></div>
      <div class="arc-bar"><i style="width:${pct}%;"></i></div>
      <div class="arc-card-label" style="margin:6px 0 0;">${approved} معتمد (${pct}٪)</div>
    </div>
    ${chips ? `<div class="arc-card arc-chips">${chips}</div>` : ""}
    <div class="arc-card arc-tip">${iconDocument(26, ROSE)}<div>اضغطي على أي تقرير لعرضه بصيغة PDF، أو على أي مجلد لفتحه.</div></div>
  </div>`;

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "أرشيف التقارير", subtitle: `منظَّم تلقائيًا حسب السنة الهجرية ونوع الفترة — ${office.name}`,
      right: pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) })}
    ${usesOfficeScope() ? adminScopeSwitcherHtml("office") : ""}
    <div class="arc-search"><input id="archive-search" class="input" placeholder="ابحثي باسم التقرير أو الوحدة أو الحالة..." /></div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:14px;">${crumbs.join("")}</div>
    <div class="arc-layout">
      <div class="arc-main">${foldersHtml}${folders.length && items.length ? `<div class="arc-section-title">${selectedYear ? "تقارير " + esc(selectedPeriod || selectedYear) : "أحدث التقارير"}</div>` : ""}${filesHtml}</div>
      ${side}
    </div>
  </div></div>`;
}

/* =============================== Executive (الإدارة العليا) — اطّلاع إشرافي شامل فقط،
   بدون أي دخول لنموذج كتابة أو تعديل تقارير الوحدات. ============================= */
// نسخة عامة تأخذ أي قائمة وحدات (كل الوحدات للإدارة العليا، أو وحدات مكتب إشراف
// معيّن فقط) — تُستخدم من collectAllReportsFlat ومن صفحات مكتب الإشراف الجديدة.
function collectReportsFlatForUnits(units) {
  const flat = [];
  units.forEach((u) => {
    const dept = S.departments.find((d) => d.id === u.departmentId);
    ensureUnitReportsLoaded(u.id).forEach((r) => flat.push({ unit: u, dept, report: r }));
  });
  return flat;
}
function collectAllReportsFlat() {
  return collectReportsFlatForUnits(scopeUnitsFilter(S.units.filter((u) => u.status === "active")));
}
// كل الوحدات (النشطة) التابعة لمكتب إشراف معيّن — عبر office.id <- department.officeId
// <- department.id <- unit.departmentId، بنفس العلاقة المستخدمة أصلاً بصفحة "الأقسام"
// الخاصة بمكتب الإشراف (renderDepartmentsPage).
// وحدات المكتب = وحداته عبر أقسامه (كما كانت) + كل ما تحته بالهيكل المرن لو المكتب مربوط بالشجرة.
function officeUnits(officeId) {
  const base = officeUnitsBase(officeId);
  const scope = officeScopeIds(officeId);
  const extra = new Set();
  olActive().filter((l) => l.linkKind === "office" && scope.includes(l.linkId)).forEach((l) => olScopeUnitIds(l.id).forEach((id) => extra.add(id)));
  if (!extra.size) return base;
  const have = new Set(base.map((u) => u.id));
  return base.concat(S.units.filter((u) => extra.has(u.id) && !have.has(u.id)));
}
function officeUnitsBase(officeId) {
  const deptIds = S.departments.filter((d) => officeScopeIds(officeId).includes(d.officeId)).map((d) => d.id);
  // تشمل أيضًا "وحدة" تقرير المكتب الذاتي نفسه (role: self_report, officeId
  // مباشرة بلا قسم) — بهذا تظهر تلقائيًا بـ"جميع التقارير" لأي حساب أعلى من
  // المكتب (مديرة النظام/الإدارة العليا) دون أي تعديل إضافي بتلك الصفحات.
  return S.units.filter((u) => (deptIds.includes(u.departmentId) || officeScopeIds(officeId).includes(u.officeId)) && u.status === "active");
}
// "وحدة" افتراضية (role: self_report) تمثّل تقرير القسم أو المكتب نفسه —
// يُنشأ تلقائيًا أول مرة تُطلب، وتُستخدم لتخزين/عرض هذا التقرير بنفس محرك
// التقارير الكامل المُختبر (بدون أي محرّك جديد)، لكنها لا تُحتسب كـ"وحدة"
// فعلية في أي عداد/رسم بياني (role !== "self_report" بكل تلك المواضع) ولا
// تظهر لأي وحدة تابعة (أدنى بالمخطط) — فقط لصاحب القسم/المكتب نفسه ولمن
// أعلى منه (المكتب/الإدارة العليا/مديرة النظام) عبر "جميع التقارير".
// kind: "department" | "office"
function ensureSelfReportUnit(kind, scopeId) {
  if (!scopeId) return null;
  const field = kind === "office" ? "officeId" : "departmentId";
  let u = S.units.find((x) => x.role === "self_report" && x[field] === scopeId && (kind === "office" ? !x.departmentId : true));
  if (u) return u;
  const owner = kind === "office" ? (S.offices || []).find((o) => o.id === scopeId) : S.departments.find((d) => d.id === scopeId);
  u = {
    id: uid("unit"), name: owner ? `تقرير ${owner.name} (ذاتي)` : "تقرير ذاتي",
    role: "self_report", status: "active", createdAt: Date.now(),
    ...(kind === "office" ? { officeId: scopeId } : { departmentId: scopeId }),
  };
  S.units = [...S.units, u];
  dataStore.saveUnits(S.units);
  return u;
}
// تضمن وجود وحدة صالحة (S.currentUnitId) قبل الدخول فعليًا لأي صفحة من مجموعة
// "unit-home" (لوحة الوحدة/تقارير/إنشاء تقرير/الإعدادات) — صارت هذه الصفحات
// روابط رئيسية ظاهرة دومًا بالشريط الجانبي لكل أنواع الحسابات (مديرة النظام/
// القسم/المكتب/المستوى)، بلا اشتراط مسبق بوحدة محدّدة (طلب نجود
// الصريح)، فقد تُدخَل مباشرة بدون المرور بالاختيار التلقائي للوحدة الذي كان
// يحصل فقط عند أول تسجيل دخول أو عبر صفحات أخرى (قسمي/وحدتي/مكتب الإشراف).
// تُستدعى من معالج "nav-to" ومن "open-or-create-report". لا تفعل شيئًا لو
// الوحدة الحالية صالحة أصلًا، فلا تغيّر شيئًا لحساب عادي (وحدة واحدة) أو لمن
// مرّ بالفعل بهذا الاختيار.
function ensureUnitContextForNav(navView) {
  const targetPage = SIDEBAR_PAGES.find((p) => p.id === navView);
  if (!targetPage || targetPage.group !== "unit-home") return;
  // ملاحظة مهمة: "role" قد تكون غير محددة أصلًا بوحدات البذرة القديمة
  // (undefined)، وتُعامَل بكل مكان آخر بالكود كـ"unit" افتراضيًا (راجع
  // unitToRow: `u.role || "unit"`) — نطبّق نفس التطبيع هنا، وإلا تُستثنى هذي
  // الوحدات خطأً فتُستبدل الوحدة الصحيحة الحالية بوحدة أخرى بالغلط.
  const effRole = (u) => u.role || "unit";
  const alreadyValid = (S.units || []).some((u) => u.id === S.currentUnitId && (effRole(u) === "unit" || effRole(u) === "center" || effRole(u) === "self_report"));
  if (alreadyValid) return;
  // حساب نطاقه قسم أو مكتب إشراف (يشرف على عدة وحدات تابعة): الافتراضي
  // دائمًا تقريره الذاتي هو (تقرير القسم/المكتب نفسه)، مو أي وحدة تابعة
  // حقيقية — حتى ما ينفتح/يُعدَّل تقرير وحدة تابعة بالغلط بمجرد الدخول بلا
  // اختيار صريح (نفس ملاحظة نجود: "ابي اقدر أضيف إذا احتاج إنشاء تقرير").
  // تبقى كل الوحدات التابعة متاحة بوضوح من قائمة "اختيار الوحدة" (📁 يميّز
  // الذاتي عنها) لو احتاجت فعلًا تنشئ/تعدّل تقرير وحدة معيّنة بنفسها.
  if (S.currentDepartmentId) {
    const selfUnit = ensureSelfReportUnit("department", S.currentDepartmentId);
    if (selfUnit) { S.currentUnitId = selfUnit.id; return; }
  } else if (S.currentOfficeId) {
    const selfUnit = ensureSelfReportUnit("office", S.currentOfficeId);
    if (selfUnit) { S.currentUnitId = selfUnit.id; return; }
  }
  // مديرة النظام (أو أي حالة بلا قسم/مكتب/مسمى محدّد): تختار أول وحدة فعلية
  // نشطة من كل الوحدات — نفس سلوك "وحدتي" القديم تمامًا، بلا تغيير هنا.
  const scopedUnits = (S.units || []).filter((u) => effRole(u) === "unit" || effRole(u) === "center");
  const activeUnit = scopedUnits.find((u) => u.status === "active") || scopedUnits[0];
  if (activeUnit) S.currentUnitId = activeUnit.id;
}
// "متأخر" هنا يعني: تقرير لم يُعتمد بعد (مسودة أو قيد المراجعة) ومضى على إنشائه
// أكثر من 14 يومًا — تقدير عملي بما إن النظام لا يحتفظ بموعد استحقاق صريح لكل تقرير.
function isReportOverdue(report) {
  if (report.status === "completed") return false;
  const ageMs = Date.now() - (report.createdAt || Date.now());
  return ageMs > 14 * 24 * 60 * 60 * 1000;
}
function hijriMonthLabel(ts) {
  try { return new Date(ts).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long" }); }
  catch (e) { return "—"; }
}

/* =============================== مقارنة آخر 3 سنوات + الأعمال والبرامج + إحصائية الإنجاز ==
   ثلاث كتل تُعرض في "لوحة المعلومات" (مديرة النظام/المكتب/القسم/الوحدة) وفي لوحة
   الإدارة العليا، ويمكن إخفاء أي منها من إعدادات لوحة المعلومات كباقي الكتل:
   - yearCompare : مقارنة المستهدف بالمتحقق للمؤشرات، ونسب تحقق الأهداف، لآخر 3 سنوات هجرية.
   - achieve     : إحصائية أعداد الإنجاز (مثال: عدد المراكز التي تمت زيارتها) حسب نوع العمل.
   - programs    : قائمة الأعمال والبرامج المنفذة بكل تفاصيلها الأساسية.
   السنة تُؤخذ من "العام الهجري" المختار بالبيانات الأساسية للتقرير، وإن لم يُختر
   فمن تاريخ إنشاء التقرير. لا جداول ولا أعمدة جديدة بقاعدة البيانات. */
function hijriYearFromTs(ts) {
  const d = new Date(ts || Date.now());
  try {
    const s = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { year: "numeric" }).format(d);
    const n = parseInt(s, 10);
    if (n > 1300 && n < 1700) return n;
  } catch (e) { /* fallback below */ }
  const start = new Date(d.getFullYear(), 0, 1).getTime();
  const frac = d.getFullYear() + (d.getTime() - start) / (365.25 * 864e5);
  return Math.floor((frac - 621.5774) * 1.030684);
}
function reportHijriYearNum(r) {
  if (!r) return null;
  const raw = (r.sections && r.sections.basic && r.sections.basic.data && r.sections.basic.data.hijriYear) || (r.shared && r.shared.hijriYear) || "";
  const m = String(raw).replace(/[٠-٩]/g, (c) => String("٠١٢٣٤٥٦٧٨٩".indexOf(c))).match(/\d{4}/);
  if (m) return Number(m[0]);
  return r.createdAt ? hijriYearFromTs(r.createdAt) : null;
}
function hijriYearLabel(n) { return `${n}هـ`; }
function lastThreeHijriYears() { const c = hijriYearFromTs(Date.now()); return [c - 2, c - 1, c].filter((y) => y >= FIRST_HIJRI_YEAR); }
function numOrNull(v) { if (v === "" || v == null) return null; const n = Number(v); return isNaN(n) ? null : n; }
function fmtNum(n) { if (n == null) return "—"; const r = Math.round(n * 10) / 10; return r.toLocaleString("en-US"); }

// آخر تقرير لكل وحدة داخل كل سنة (يمثّل وضع الوحدة بنهاية تلك السنة).
function latestReportsPerUnitByYear(units, years) {
  const out = {}; years.forEach((y) => { out[y] = []; });
  units.forEach((u) => {
    const best = {};
    ensureUnitReportsLoaded(u.id).forEach((r) => {
      const y = reportHijriYearNum(r);
      if (!(y in out) || !reportHasContent(r)) return; // التقارير الفاضية لا تُحسب
      if (!best[y] || (r.createdAt || 0) >= (best[y].createdAt || 0)) best[y] = r;
    });
    Object.keys(best).forEach((y) => out[y].push({ unit: u, report: best[y] }));
  });
  return out;
}

function yearlyComparisonData(units) {
  const years = lastThreeHijriYears();
  const byYear = latestReportsPerUnitByYear(units, years);
  const indMap = {}; // name -> { def, years: { y: { actuals: [], ratios: [] } } }
  const goalMap = {}; // strategic goal -> { y: [pct] }
  const summary = {}; // y -> { indRatios: [], goalPcts: [], reports: n }
  years.forEach((y) => {
    summary[y] = { indRatios: [], goalPcts: [], reports: byYear[y].length };
    byYear[y].forEach(({ report }) => {
      (report.sections?.kpi?.data?.indicators || []).forEach((row) => {
        const name = (row.name || "").trim();
        if (!name) return;
        const def = findIndicatorDef(name);
        const resolved = resolveIndicatorRow(row, def);
        const actual = numOrNull(row.actual);
        if (actual == null) return;
        // المستهدف من تعريف المؤشر، وإن لم يوجد فمن المستهدف المكتوب بالتقرير نفسه
        const tgt = numOrNull(resolved.target) != null ? numOrNull(resolved.target) : numOrNull(row.target);
        if (tgt != null) resolved.target = tgt;
        const e = indMap[name] || (indMap[name] = { def, years: {} });
        const ye = e.years[y] || (e.years[y] = { actuals: [], targets: [], ratios: [] });
        ye.actuals.push(actual);
        if (tgt != null) ye.targets.push(tgt);
        const st = computeIndicatorStatus(resolved);
        if (st.ratio != null && isFinite(st.ratio)) { ye.ratios.push(st.ratio); summary[y].indRatios.push(Math.min(1, Math.max(0, st.ratio))); }
      });
      (report.sections?.goals?.data?.goals || []).forEach((g) => {
        const sg = (g.strategicGoal || "").trim() || "بدون هدف استراتيجي";
        (g.operationalGoals || []).forEach((og) => {
          const pct = numOrNull(og.percentage);
          if (pct == null) return;
          const gm = goalMap[sg] || (goalMap[sg] = {});
          (gm[y] || (gm[y] = [])).push(pct);
          summary[y].goalPcts.push(pct);
        });
      });
    });
  });
  const avg = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : null);
  const indicators = Object.keys(indMap).map((name) => {
    const { def, years: ys } = indMap[name];
    const isCount = def && def.unit === "عدد";
    const cells = years.map((y) => {
      const ye = ys[y];
      if (!ye || !ye.actuals.length) return null;
      const n = ye.actuals.length;
      const actual = isCount ? ye.actuals.reduce((s, v) => s + v, 0) : avg(ye.actuals);
      const target = !ye.targets.length ? null : (isCount ? ye.targets.reduce((s, v) => s + v, 0) : avg(ye.targets));
      const ratio = avg(ye.ratios);
      return { actual, target, pct: ratio == null ? null : Math.round(ratio * 100), units: n };
    });
    return { name, unit: def ? def.unit : "", cells };
  }).sort((a, b) => a.name.localeCompare(b.name, "ar"));
  const goals = Object.keys(goalMap).map((sg) => ({ name: sg, cells: years.map((y) => { const a = avg(goalMap[sg][y] || []); return a == null ? null : Math.round(a); }) }));
  const sum = years.map((y) => ({
    year: y,
    indPct: summary[y].indRatios.length ? Math.round(avg(summary[y].indRatios) * 100) : null,
    goalPct: summary[y].goalPcts.length ? Math.round(avg(summary[y].goalPcts)) : null,
    reports: summary[y].reports,
  }));
  return { years, indicators, goals, summary: sum };
}

function trendHtml(prev, cur) {
  if (prev == null || cur == null) return `<span style="color:${SUBTLE}">—</span>`;
  if (cur > prev) return `<span style="color:${GREEN};font-weight:800;" title="تحسن">▲ ${cur - prev}٪</span>`;
  if (cur < prev) return `<span style="color:${DANGER};font-weight:800;" title="تراجع">▼ ${prev - cur}٪</span>`;
  return `<span style="color:${SUBTLE};font-weight:800;" title="ثابت">= ثابت</span>`;
}
// آخر سنتين فيهما بيانات (للاتجاه)
function lastTwoWithData(cells, pick) {
  const vals = cells.map((c) => (c == null ? null : (pick ? pick(c) : c))).filter((v) => v != null);
  return vals.length >= 2 ? [vals[vals.length - 2], vals[vals.length - 1]] : [null, null];
}
function pctColor(p) { return p == null ? SUBTLE : p >= 100 ? GREEN : p >= 90 ? GOLD : p >= 70 ? "#c9863a" : DANGER; }

// رسم أعمدة مجمّعة: لكل سنة عمودان (المؤشرات / الأهداف). الأقدم يمينًا كقراءة عربية.
function svgYearGroupedBars(summary) {
  const w = 640, h = 220, padTop = 22, padBottom = 34, padSide = 34;
  const chartH = h - padTop - padBottom, chartW = w - padSide * 2;
  const n = summary.length, groupW = chartW / n, barW = Math.min(46, groupW / 3.2);
  const yFor = (v) => padTop + chartH - (Math.max(0, Math.min(100, v)) / 100) * chartH;
  const grid = [0, 25, 50, 75, 100].map((g) => `<line x1="${padSide}" y1="${yFor(g)}" x2="${w - padSide}" y2="${yFor(g)}" stroke="${BORDER}" stroke-dasharray="3,3" /><text x="${w - padSide + 6}" y="${yFor(g) + 3}" font-size="9" fill="${SUBTLE}">${g}</text>`).join("");
  const series = [{ key: "indPct", color: ROSE }, { key: "goalPct", color: GOLD }];
  const bars = summary.map((s, i) => {
    const cx = w - padSide - groupW * (i + 0.5);
    const parts = series.map((se, j) => {
      const v = s[se.key];
      const x = cx - barW - 3 + j * (barW + 6);
      if (v == null) return `<text x="${(x + barW / 2).toFixed(1)}" y="${(padTop + chartH - 6).toFixed(1)}" font-size="9.5" fill="${SUBTLE}" text-anchor="middle">لا بيانات</text>`;
      const y = yFor(v);
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${(padTop + chartH - y).toFixed(1)}" rx="4" fill="${se.color}"><title>${v}٪</title></rect><text x="${(x + barW / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" font-size="10.5" font-weight="800" fill="${INK}" text-anchor="middle">${v}٪</text>`;
    }).join("");
    return parts + `<text x="${cx.toFixed(1)}" y="${h - padBottom + 17}" font-size="11.5" font-weight="800" fill="${INK}" text-anchor="middle">${hijriYearLabel(s.year)}</text>`;
  }).join("");
  const legend = `<div style="display:flex;gap:16px;flex-wrap:wrap;font-size:11.5px;margin-top:4px;">
    <span style="display:flex;align-items:center;gap:6px;"><span style="width:10px;height:10px;border-radius:3px;background:${ROSE}"></span>متوسط تحقق المؤشرات (المتحقق ÷ المستهدف)</span>
    <span style="display:flex;align-items:center;gap:6px;"><span style="width:10px;height:10px;border-radius:3px;background:${GOLD}"></span>متوسط تحقق الأهداف التشغيلية</span></div>`;
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:100%;height:auto;">${grid}${bars}</svg>${legend}`;
}

function yearCompareCardHtml(units) {
  const data = yearlyComparisonData(units);
  const yrs = data.years;
  const hasAny = data.indicators.length || data.goals.length;
  const yearHead = (span) => yrs.map((y) => `<th colspan="${span}" style="text-align:center;border-right:1px solid ${BORDER};">${hijriYearLabel(y)}</th>`).join("");
  const indTable = data.indicators.length ? `
    <div class="subhead">المؤشرات — المستهدف مقابل المتحقق</div>
    <div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:640px;"><thead>
      <tr style="background:${GOLD_BG}"><th rowspan="2" style="color:#8a6a35">المؤشر</th>${yearHead(3)}<th rowspan="2" style="text-align:center;color:#8a6a35">الاتجاه</th></tr>
      <tr style="background:${GOLD_BG}">${yrs.map(() => `<th style="text-align:center;font-weight:700;color:#8a6a35;border-right:1px solid ${BORDER};">المستهدف</th><th style="text-align:center;font-weight:700;color:#8a6a35">المتحقق</th><th style="text-align:center;font-weight:700;color:#8a6a35">النسبة</th>`).join("")}</tr>
    </thead><tbody>${data.indicators.map((ind) => {
      const [p, c] = lastTwoWithData(ind.cells, (x) => x.pct);
      return `<tr><td style="font-weight:700">${esc(ind.name)}${ind.unit ? `<div style="font-size:10px;color:${SUBTLE};font-weight:400">${esc(ind.unit)}</div>` : ""}</td>${ind.cells.map((cell) => cell
        ? `<td style="text-align:center;border-right:1px solid ${BORDER};">${fmtNum(cell.target)}</td><td style="text-align:center">${fmtNum(cell.actual)}</td><td style="text-align:center;font-weight:800;color:${pctColor(cell.pct)}">${cell.pct == null ? "—" : cell.pct + "٪"}</td>`
        : `<td colspan="3" style="text-align:center;color:${SUBTLE};border-right:1px solid ${BORDER};">لا بيانات</td>`).join("")}<td style="text-align:center">${trendHtml(p, c)}</td></tr>`;
    }).join("")}</tbody></table></div>` : "";
  const goalTable = data.goals.length ? `
    <div class="subhead">الأهداف — متوسط نسبة التحقق</div>
    <div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:480px;"><thead>
      <tr style="background:${GREEN_BG}"><th style="color:${ROSE}">الهدف الاستراتيجي</th>${yearHead(1)}<th style="text-align:center;color:${ROSE}">الاتجاه</th></tr>
    </thead><tbody>${data.goals.map((g) => {
      const [p, c] = lastTwoWithData(g.cells);
      return `<tr><td style="font-weight:700">${esc(g.name)}</td>${g.cells.map((v) => `<td style="text-align:center;font-weight:800;color:${v == null ? SUBTLE : pctColor(v)};border-right:1px solid ${BORDER};">${v == null ? "—" : v + "٪"}</td>`).join("")}<td style="text-align:center">${trendHtml(p, c)}</td></tr>`;
    }).join("")}</tbody></table></div>` : "";
  return `<div class="card" style="margin-bottom:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:6px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;">مقارنة آخر 3 سنوات — المستهدف والمتحقق</div>
      <span style="font-size:11px;color:${SUBTLE}">${yrs.map(hijriYearLabel).join(" · ")}</span>
    </div>
    <div class="hint" style="margin:0 0 10px;">تُحسب كل سنة من آخر تقرير لكل وحدة في تلك السنة (حسب "العام الهجري" في البيانات الأساسية).</div>
    ${hasAny ? svgYearGroupedBars(data.summary) + indTable + goalTable : emptyHint("لا توجد مؤشرات أو أهداف مُدخلة في تقارير آخر 3 سنوات بعد.")}
  </div>`;
}

/* ---- الأعمال والبرامج + إحصائية الإنجاز ---- */
// كل الأعمال والبرامج في تقارير الوحدات — بدون تكرار نفس العمل لو تكرر في
// أكثر من تقرير (يُعتمد آخر إصدار له: نفس الوحدة + الاسم + النوع + تاريخ البداية).
function collectProgramsForUnits(units, yearFilter) {
  const map = new Map();
  units.forEach((u) => {
    const dept = S.departments.find((d) => d.id === u.departmentId);
    ensureUnitReportsLoaded(u.id).slice().sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)).forEach((r) => {
      const y = reportHijriYearNum(r);
      if (yearFilter && y !== yearFilter) return;
      (r.sections?.programs?.data?.programs || []).forEach((p) => {
        if (!p || !String(p.name || "").trim()) return;
        const key = [u.id, String(p.name).trim(), p.workType || "", p.startDate || ""].join("|");
        map.delete(key);
        map.set(key, { unit: u, dept, report: r, year: y, p });
      });
    });
  });
  return [...map.values()];
}
function programAchievedValue(p) {
  const a = numOrNull(p.achievedCount);
  return a != null ? a : numOrNull(p.actualBeneficiaries);
}
function programCountUnit(p) {
  const cu = String(p.countUnit || "").trim();
  if (cu) return cu;
  return numOrNull(p.achievedCount) != null ? "" : "مستفيدة";
}
function achievementStats(progs) {
  const groups = {};
  progs.forEach(({ p }) => {
    const wt = p.workType || "غير محدد", cu = programCountUnit(p);
    const key = wt + "|" + cu;
    const g = groups[key] || (groups[key] = { workType: wt, countUnit: cu, works: 0, target: 0, achieved: 0, hasTarget: false, hasAchieved: false, completed: 0 });
    g.works++;
    const t = numOrNull(p.targetCount); if (t != null) { g.target += t; g.hasTarget = true; }
    const a = programAchievedValue(p); if (a != null) { g.achieved += a; g.hasAchieved = true; }
    if (p.executionStatus === "مكتمل") g.completed++;
  });
  return Object.values(groups).sort((a, b) => b.works - a.works || b.achieved - a.achieved);
}
function programsYearOptions(units) {
  const set = new Set(lastThreeHijriYears());
  units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => { if ((r.sections?.programs?.data?.programs || []).length) { const y = reportHijriYearNum(r); if (y) set.add(y); } }));
  return [...set].sort((a, b) => b - a);
}
// السنة المختارة لكتلتي البرامج والإحصائية: "all" = كل السنوات؛ افتراضيًا أحدث سنة
// فيها أعمال مُدخلة فعلًا (وإن لم توجد أي أعمال: السنة الهجرية الحالية).
function latestProgramsYear(units) {
  let best = null;
  units.forEach((u) => ensureUnitReportsLoaded(u.id).forEach((r) => {
    if (!(r.sections?.programs?.data?.programs || []).some((p) => p && String(p.name || "").trim())) return;
    const y = reportHijriYearNum(r);
    if (y && (best == null || y > best)) best = y;
  }));
  return best;
}
function dashProgramsYear(units) {
  const v = S.ui.dashProgYear;
  if (v === "all") return null;
  if (v) return Number(v);
  return latestProgramsYear(units || []) || hijriYearFromTs(Date.now());
}
function dashYearSelectHtml(units) {
  const cur = S.ui.dashProgYear || String(dashProgramsYear(units));
  const opts = programsYearOptions(units);
  return `<select class="input" data-action="dash-prog-year" style="width:auto;padding:6px 10px;font-size:12px;">
    <option value="all" ${cur === "all" ? "selected" : ""}>كل السنوات</option>
    ${opts.map((y) => `<option value="${y}" ${String(y) === cur ? "selected" : ""}>${hijriYearLabel(y)}</option>`).join("")}
  </select>`;
}

function achievementCardHtml(units) {
  const year = dashProgramsYear(units);
  const progs = collectProgramsForUnits(units, year);
  const stats = achievementStats(progs);
  const completed = progs.filter((x) => x.p.executionStatus === "مكتمل").length;
  const beneficiaries = progs.reduce((s, x) => s + (numOrNull(x.p.actualBeneficiaries) || 0), 0);
  // بطاقات بارزة: كل نوع عمل له "وحدة عدّ" محددة (مثال: زيارة إشرافية — مركز)
  const highlight = stats.filter((g) => g.hasAchieved && g.countUnit && g.countUnit !== "مستفيدة").slice(0, 4);
  const tile = (value, label, sub) => `<div class="stat-card"><div class="value" style="color:${ROSE}">${esc(value)}</div><div class="label" style="font-weight:700;color:${INK}">${esc(label)}</div>${sub ? `<div class="label">${esc(sub)}</div>` : ""}</div>`;
  const rows = stats.map((g) => {
    const pct = g.hasTarget && g.target > 0 && g.hasAchieved ? Math.round((g.achieved / g.target) * 100) : null;
    return `<tr>
      <td style="font-weight:700">${esc(g.workType)}</td>
      <td style="text-align:center">${g.works}</td>
      <td style="text-align:center">${g.completed}</td>
      <td style="text-align:center;color:${SUBTLE}">${esc(g.countUnit || "—")}</td>
      <td style="text-align:center">${g.hasTarget ? fmtNum(g.target) : "—"}</td>
      <td style="text-align:center;font-weight:800">${g.hasAchieved ? fmtNum(g.achieved) : "—"}</td>
      <td style="min-width:120px">${pct == null ? `<span style="color:${SUBTLE}">—</span>` : `<div style="display:flex;align-items:center;gap:6px;"><div style="flex:1">${progressBarHtml(Math.min(100, pct), pctColor(pct))}</div><b style="color:${pctColor(pct)};font-size:11.5px">${pct}٪</b></div>`}</td>
    </tr>`;
  }).join("");
  return `<div class="card" style="margin-bottom:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;">إحصائية الإنجاز</div>
      ${dashYearSelectHtml(units)}
    </div>
    ${progs.length === 0 ? emptyHint(year ? `لا توجد أعمال مُدخلة لعام ${hijriYearLabel(year)}.` : "لا توجد أعمال مُدخلة بعد.") : `
    <div class="stat-grid">
      ${tile(progs.length, "عمل وبرنامج منفذ", "")}
      ${tile(completed, "عمل مكتمل", progs.length ? `${Math.round((completed / progs.length) * 100)}٪ من الأعمال` : "")}
      ${tile(fmtNum(beneficiaries), "إجمالي المستفيدات", "")}
      ${highlight.map((g) => tile(fmtNum(g.achieved) + " " + g.countUnit, g.workType, g.hasTarget ? `من ${fmtNum(g.target)} مستهدف` : "")).join("")}
    </div>
    <div class="table-wrap" style="overflow-x:auto;"><table class="prs-table" style="min-width:600px;"><thead><tr style="background:${GRAY_BG}">
      <th>نوع العمل</th><th style="text-align:center">عدد الأعمال</th><th style="text-align:center">المكتمل</th><th style="text-align:center">وحدة العدّ</th><th style="text-align:center">المستهدف</th><th style="text-align:center">المنجز</th><th>نسبة الإنجاز</th>
    </tr></thead><tbody>${rows}</tbody></table></div>
    <div class="hint">"المنجز" = حقل "العدد المنجز" في قسم الأعمال والبرامج (مثال: عدد المراكز التي تمت زيارتها)، وإن كان فارغًا يُحتسب "عدد المستفيدات الفعلي".</div>`}
  </div>`;
}

function programsCardHtml(units) {
  const year = dashProgramsYear(units);
  const progs = collectProgramsForUnits(units, year).sort((a, b) => (b.report.createdAt || 0) - (a.report.createdAt || 0));
  const statusColor = { "مكتمل": [GREEN, GREEN_BG], "مستمر": [BLUE, BLUE_BG], "متعثر": [DANGER, DANGER_BG], "مؤجل": [GOLD, GOLD_BG], "ملغى": [SUBTLE, GRAY_BG] };
  const rows = progs.map(({ unit, report, p }) => {
    const sc = statusColor[p.executionStatus] || [SUBTLE, GRAY_BG];
    const a = programAchievedValue(p), t = numOrNull(p.targetCount);
    const cu = programCountUnit(p);
    const searchKey = `${unit.name} ${p.name || ""} ${p.workType || ""} ${p.executionStatus || ""}`.toLowerCase();
    return `<tr data-search="${esc(searchKey)}">
      <td style="color:${SUBTLE}">${esc(unit.name)}</td>
      <td style="font-weight:700;cursor:pointer;color:${INK}" data-action="view-report-pdf" data-unit-id="${esc(unit.id)}" data-report-id="${esc(report.id)}" title="عرض التقرير">${esc(p.name)}</td>
      <td>${esc(p.workType || "—")}</td>
      <td style="text-align:center">${p.executionStatus ? badgeHtml(p.executionStatus, sc[0], sc[1]) : "—"}</td>
      <td style="text-align:center">${t == null ? "—" : fmtNum(t)}</td>
      <td style="text-align:center;font-weight:800">${a == null ? "—" : fmtNum(a) + (cu ? ` <span style="font-weight:400;color:${SUBTLE};font-size:10.5px">${esc(cu)}</span>` : "")}</td>
      <td style="text-align:center">${p.completionPercent !== "" && p.completionPercent != null ? esc(p.completionPercent) + "٪" : "—"}</td>
      <td style="font-size:11.5px;line-height:1.7;min-width:180px">${esc(p.highlightResult || "—")}</td>
    </tr>`;
  }).join("");
  return `<div class="card" style="margin-bottom:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;">الأعمال والبرامج المنفذة <span style="font-size:12px;color:${SUBTLE};font-weight:700">(${progs.length})</span></div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <input class="input" data-action="filter-programs-table" placeholder="بحث في البرامج..." style="width:170px;padding:6px 10px;font-size:12px;" />
        ${dashYearSelectHtml(units)}
      </div>
    </div>
    ${progs.length === 0 ? emptyHint(year ? `لا توجد أعمال مُدخلة لعام ${hijriYearLabel(year)}.` : "لا توجد أعمال مُدخلة بعد.") : `
    <div class="table-wrap" style="overflow-x:auto;max-height:520px;overflow-y:auto;"><table class="prs-table programs-table" style="min-width:820px;"><thead><tr style="background:${BLUE_BG}">
      <th>الوحدة</th><th>اسم العمل</th><th>النوع</th><th style="text-align:center">الحالة</th><th style="text-align:center">المستهدف</th><th style="text-align:center">المنجز</th><th style="text-align:center">الإنجاز</th><th>أبرز نتيجة</th>
    </tr></thead><tbody>${rows}</tbody></table></div>`}
  </div>`;
}

// نسخة التقرير الإداري النهائي (طباعة) — بدون أزرار تفاعلية
function programsReportChapterBody(units, year) {
  const progs = collectProgramsForUnits(units, year || null);
  if (!progs.length) return emptyHint("لا توجد أعمال وبرامج مُدخلة بعد.");
  const stats = achievementStats(progs);
  const statsTable = reportTable(["نوع العمل", "عدد الأعمال", "المكتمل", "وحدة العدّ", "المستهدف", "المنجز", "النسبة"], stats.map((g) => {
    const pct = g.hasTarget && g.target > 0 && g.hasAchieved ? Math.round((g.achieved / g.target) * 100) + "٪" : "—";
    return [esc(g.workType), g.works, g.completed, esc(g.countUnit || "—"), g.hasTarget ? fmtNum(g.target) : "—", g.hasAchieved ? fmtNum(g.achieved) : "—", pct];
  }));
  const listTable = reportTable(["الوحدة", "العمل", "النوع", "الحالة", "المنجز", "أبرز نتيجة"], progs.map(({ unit, p }) => {
    const a = programAchievedValue(p), cu = programCountUnit(p);
    return [esc(unit.name), esc(p.name), esc(p.workType || "—"), esc(p.executionStatus || "—"), a == null ? "—" : esc(fmtNum(a) + (cu ? " " + cu : "")), esc(p.highlightResult || "—")];
  }));
  return `<div class="rpt-subheading">إحصائية الإنجاز</div>${statsTable}<div class="rpt-subheading">قائمة الأعمال والبرامج (${progs.length})</div>${listTable}`;
}
function yearCompareReportChapterBody(units) {
  const data = yearlyComparisonData(units);
  if (!data.indicators.length && !data.goals.length) return emptyHint("لا توجد بيانات مؤشرات أو أهداف في آخر 3 سنوات.");
  const yl = data.years.map(hijriYearLabel);
  const sumTable = reportTable(["البند", ...yl], [
    ["متوسط تحقق المؤشرات", ...data.summary.map((s) => (s.indPct == null ? "—" : s.indPct + "٪"))],
    ["متوسط تحقق الأهداف التشغيلية", ...data.summary.map((s) => (s.goalPct == null ? "—" : s.goalPct + "٪"))],
    ["عدد الوحدات المُبلِّغة", ...data.summary.map((s) => s.reports)],
  ]);
  const indTable = data.indicators.length ? reportTable(["المؤشر", ...yl.map((y) => `${y} (مستهدف / متحقق)`)], data.indicators.map((ind) => [esc(ind.name), ...ind.cells.map((c) => (c ? `${fmtNum(c.target)} / ${fmtNum(c.actual)}${c.pct == null ? "" : ` <b>(${c.pct}٪)</b>`}` : "—"))])) : "";
  const goalTable = data.goals.length ? reportTable(["الهدف الاستراتيجي", ...yl], data.goals.map((g) => [esc(g.name), ...g.cells.map((v) => (v == null ? "—" : v + "٪"))])) : "";
  return sumTable + indTable + goalTable;
}

// معمّمة الآن لتأخذ (وحدات، أقسام) اختياريًا — تُستخدم من الإدارة العليا (كل
// شي) ومن لوحة معلومات مكتب الإشراف (وحدات/أقسام مكتبه فقط) بنفس الدالة تمامًا.
function renderExecutiveDashboard(scopeUnits, scopeDepartments, opts) {
  opts = opts || {};
  const xk = opts.kind || "executive";
  const units = scopeUnits || scopeUnitsFilter(S.units.filter((u) => u.status === "active" && u.role !== "admin" && u.role !== "executive" && u.role !== "self_report"));
  // حساب مستوى من الهيكل المرن: لوحة بنفس شكل لوحة القسم، مقتصرة على ما تحته
  if (S.levelScope && !scopeUnits) {
    const lv = olFind(S.levelScope.levelId);
    return renderDashboardBody(units, { kind: "dept", title: lv ? lv.name : "لوحة المعلومات", subtitle: `نظرة على ${units.length} وحدة تحت هذا المستوى` });
  }
  const activeDepartments = scopeDepartments || scopeDeptsFilter(S.departments.filter((d) => d.status === "active"));
  const flat = scopeUnits ? collectReportsFlatForUnits(units) : collectAllReportsFlat();
  const total = flat.length;
  const completed = flat.filter((x) => x.report.status === "completed").length;
  const inProgress = flat.filter((x) => x.report.status === "draft" || x.report.status === "custom_pending" || x.report.status === "returned").length;
  const overdue = flat.filter((x) => isReportOverdue(x.report)).length;
  const completionPct = total ? Math.round((completed / total) * 100) : 0;

  const deptPerf = activeDepartments.map((dept) => {
    const deptUnits = units.filter((u) => u.departmentId === dept.id);
    const pcts = deptUnits.map((u) => computeProgress(latestReportForUnit(u.id)).percent);
    const avg = pcts.length ? Math.round(pcts.reduce((s, v) => s + v, 0) / pcts.length) : 0;
    return { label: dept.name, value: avg, color: "var(--rpt-burgundy)" };
  });
  const unitPerf = units.map((u) => ({ label: u.name, value: computeProgress(latestReportForUnit(u.id)).percent, color: ROSE }));

  const statusPie = svgPieChart([
    { label: "مكتمل", value: completed, color: GREEN },
    { label: "قيد الإعداد", value: inProgress, color: GOLD },
  ], { size: 140 });

  // مقارنة عدد التقارير المُنشأة حسب الشهر الهجري، عند توفر أكثر من فترة واحدة.
  const monthCounts = {};
  flat.forEach((x) => { const m = hijriMonthLabel(x.report.createdAt); monthCounts[m] = (monthCounts[m] || 0) + 1; });
  const monthKeys = Object.keys(monthCounts);
  const periodChart = monthKeys.length > 1
    ? svgBarChart(monthKeys.map((m) => ({ label: m, value: Math.round((monthCounts[m] / total) * 100), color: "var(--rpt-burgundy)" })), { height: 170 })
    : `<div class="hint">تحتاجين تقارير من أكثر من فترة واحدة لعرض مقارنة زمنية.</div>`;

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "لوحة المعلومات", subtitle: opts.subtitle || (S.levelScope ? `نظرة على ${units.length} وحدة تحت هذا المستوى` : "نظرة إشرافية شاملة على كل الأقسام والوحدات"),
      right: pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) })}
    ${opts.extraTop || ""}
    ${xk === "executive" ? exBlocksHtml(xk, units) : ""}
    ${dashBlock(xk, "exStats", `<div class="stat-grid" style="margin-bottom:18px;">
      ${statIconCardHtml("إجمالي التقارير", total, iconDocument(18, ROSE), DANGER_BG)}
      ${statIconCardHtml("تقارير مكتملة", completed, iconCheckCircle(18, GREEN), GREEN_BG)}
      ${statIconCardHtml("قيد الإعداد", inProgress, iconGauge(GOLD, 18), GOLD_BG)}
      ${statIconCardHtml("تقارير متأخرة", overdue, iconBell(18, DANGER), DANGER_BG)}
    </div>`)}
    ${dashBlock(xk, "exCompletion", `<div class="card" style="margin-bottom:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div class="prs-title" style="font-size:14px;font-weight:800;">نسبة إنجاز التقارير إجمالاً</div>
        <span style="font-size:16px;font-weight:900;color:${ROSE}">${completionPct}٪</span>
      </div>
      ${progressBarHtml(completionPct, ROSE)}
    </div>`)}
    ${dashHidden(xk, "programs") ? "" : programsCardHtml(units)}
    ${dashHidden(xk, "achieve") ? "" : achievementCardHtml(units)}
    ${dashHidden(xk, "yearCompare") ? "" : yearCompareCardHtml(units)}
    ${dashExGrid(xk, `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">ملخص أداء الأقسام</div>
        ${deptPerf.length ? svgBarChart(deptPerf, { height: 180 }) : emptyHint("لا توجد أقسام نشطة بعد.")}</div>`, `<div class="card"><div class="prs-title" style="font-size:13.5px;font-weight:800;margin-bottom:12px;">توزيع حالات التقارير</div>${total ? statusPie : emptyHint("لا توجد تقارير بعد.")}</div>`)}
    ${dashBlock(xk, "exUnitPerf", `<div class="card" style="margin-bottom:18px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:12px;">نسبة الإنجاز حسب الوحدة</div>
      ${unitPerf.length ? progressListHtml(unitPerf) : emptyHint("لا توجد وحدات نشطة بعد.")}
    </div>`)}
    ${dashBlock(xk, "exPeriod", `<div class="card">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:12px;">مقارنة عدد التقارير حسب الفترة</div>
      ${periodChart}
    </div>`)}
  </div></div>`;
}

function aiSummaryCardHtml() {
  if (S.ui.aiSummaryBusy) {
    return `<div class="card" style="margin-bottom:16px;text-align:center;color:${SUBTLE};">جارٍ توليد الملخص التنفيذي…</div>`;
  }
  if (S.ui.aiSummaryText) {
    return `<div class="card" style="margin-bottom:16px;background:${GOLD_BG};">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:8px;">✨ الملخص التنفيذي (بالذكاء الاصطناعي)</div>
      <div style="font-size:13px;line-height:2;white-space:pre-wrap;">${esc(S.ui.aiSummaryText)}</div>
      ${pillBtn("توليد من جديد", { variant: "ghost", action: "generate-ai-summary" })}
    </div>`;
  }
  return `<div class="card" style="margin-bottom:16px;">
    ${S.ui.aiSummaryError ? `<div class="hint bad" style="margin-bottom:10px;">${esc(S.ui.aiSummaryError)}</div>` : ""}
    ${pillBtn("توليد الملخص التنفيذي بالذكاء الاصطناعي ✨", { action: "generate-ai-summary" })}
  </div>`;
}
async function generateAiSummaryAsync() {
  const flat = collectAllReportsFlat();
  const data = {
    totalReports: flat.length,
    completedReports: flat.filter((x) => x.report.status === "completed").length,
    achievements: [], challenges: [], recommendations: [],
  };
  flat.forEach((x) => {
    (x.report.sections?.programs?.data?.programs || []).filter((p) => p.highlightResult).forEach((p) => data.achievements.push({ unit: x.unit.name, result: p.highlightResult }));
    (x.report.sections?.challenges?.data?.challenges || []).forEach((c) => data.challenges.push({ unit: x.unit.name, name: c.name, severity: c.severity }));
    (x.report.sections?.recommendations?.data?.recommendations || []).forEach((r) => data.recommendations.push({ unit: x.unit.name, text: r.text, priority: r.priority }));
  });
  const res = await fetch(`${SUPABASE_URL}/functions/v1/generate-executive-summary`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${SUPABASE_ANON_KEY}`, apikey: SUPABASE_ANON_KEY },
    body: JSON.stringify({ data }),
  }).then((r) => r.json()).catch(() => null);
  S.ui.aiSummaryBusy = false;
  if (!res) {
    S.ui.aiSummaryError = "لم يتم تفعيل ميزة الذكاء الاصطناعي بعد. لتفعيلها، يلزم نشر Edge Function على Supabase (راجعي ملف الإعداد المرفق).";
  } else if (res.ok) {
    S.ui.aiSummaryText = res.summary; S.ui.aiSummaryError = "";
  } else {
    S.ui.aiSummaryError = res.error || "تعذر توليد الملخص.";
  }
  render();
}

// معمّمة بنفس أسلوب renderExecutiveDashboard أعلاه — وحدات/أقسام اختيارية
// لدعم نسخة مكتب الإشراف المقتصرة على وحداته فقط.
function renderExecutiveSummary(scopeUnits, scopeDepartments, opts) {
  opts = opts || {};
  const activeDepartments = scopeDepartments || scopeDeptsFilter(S.departments.filter((d) => d.status === "active"));
  const flat = scopeUnits ? collectReportsFlatForUnits(scopeUnits) : collectAllReportsFlat();
  const sortCurated = (arr) => [...arr].sort((a, b) => (b.curated ? 1 : 0) - (a.curated ? 1 : 0));
  const achievementsAll = [];
  flat.forEach((x) => (x.report.sections?.programs?.data?.programs || []).filter((p) => p.highlightResult).forEach((p) => {
    achievementsAll.push({ name: p.name, highlightResult: p.highlightResult, unitName: x.unit.name, curated: isItemCurated(x.unit, curationKey("achievement", x.report.id, p.id)) });
  }));
  const achievements = sortCurated(achievementsAll).slice(0, 6);
  const positiveResults = flat.filter((x) => x.report.sections?.analysis?.data?.positiveResult).slice(0, 6);
  const allIndicators = [];
  flat.forEach((x) => (x.report.sections?.kpi?.data?.indicators || []).filter((r) => r.name).forEach((row) => allIndicators.push({ ...row, unitName: x.unit.name })));
  const indicatorStatusCounts = { achieved: 0, close: 0, needsAction: 0, struggling: 0, noData: 0 };
  allIndicators.forEach((row) => {
    const def = findIndicatorDef(row.name);
    const st = computeIndicatorStatus(resolveIndicatorRow(row, def));
    indicatorStatusCounts[st.key]++;
  });
  const allGoals = [];
  flat.forEach((x) => (x.report.sections?.goals?.data?.goals || []).forEach((g) => (g.operationalGoals || []).forEach((og) => allGoals.push(og))));
  const goalLevelCounts = {};
  allGoals.forEach((g) => { if (g.level) goalLevelCounts[g.level] = (goalLevelCounts[g.level] || 0) + 1; });
  const allChallengesAll = [];
  flat.forEach((x) => (x.report.sections?.challenges?.data?.challenges || []).forEach((c) => allChallengesAll.push({ ...c, unitName: x.unit.name, curated: isItemCurated(x.unit, curationKey("challenge", x.report.id, c.id)) })));
  const allChallenges = sortCurated(allChallengesAll);
  const allRecommendationsAll = [];
  flat.forEach((x) => (x.report.sections?.recommendations?.data?.recommendations || []).forEach((r) => allRecommendationsAll.push({ ...r, unitName: x.unit.name, curated: isItemCurated(x.unit, curationKey("recommendation", x.report.id, r.id)) })));
  const allRecommendations = sortCurated(allRecommendationsAll);
  const notesSummaries = flat.filter((x) => x.report.sections?.analysis?.data?.summary).map((x) => ({ unitName: x.unit.name, summary: x.report.sections.analysis.data.summary }));

  const dates = flat.map((x) => x.report.sections?.basic?.data).filter(Boolean);
  const startDates = dates.map((d) => d.startDate).filter(Boolean).sort();
  const endDates = dates.map((d) => d.endDate).filter(Boolean).sort();
  const periodRange = startDates.length && endDates.length ? `${esc(startDates[0])} — ${esc(endDates[endDates.length - 1])}` : "لم تُحدَّد فترات بعد";

  const scopeUnitsList = scopeUnits || S.units.filter((u) => u.status === "active");
  const deptRows = activeDepartments.map((dept) => {
    const deptUnits = scopeUnitsList.filter((u) => u.departmentId === dept.id);
    const pcts = deptUnits.map((u) => computeProgress(latestReportForUnit(u.id)).percent);
    const avg = pcts.length ? Math.round(pcts.reduce((s, v) => s + v, 0) / pcts.length) : 0;
    return [esc(dept.name), deptUnits.length, avg + "٪"];
  });

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: opts.title || "الملخص التنفيذي", subtitle: `الفترة: ${periodRange}`,
      right: pillBtn("خروج", { variant: "danger", icon: iconLogout(15, DANGER), action: "logout" }) })}
    ${opts.extraTop || ""}

    ${opts.showAiSummary === false ? "" : aiSummaryCardHtml()}

    <div class="card" style="margin-bottom:16px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:10px;">أهم النتائج والإنجازات</div>
      ${achievements.length === 0 ? emptyHint("لا توجد نتائج بارزة مُدخلة بعد.") :
        achievements.map((p) => `<div class="hint good" style="margin-bottom:6px;">${iconCheckCircle(13, GREEN)} ${esc(p.name || "عمل")}: ${esc(p.highlightResult)}</div>`).join("")}
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:16px;">
      <div class="card"><div class="prs-title" style="font-size:13px;font-weight:800;margin-bottom:10px;">أبرز المؤشرات</div>
        ${allIndicators.length ? svgPieChart([
          { label: "متحقق", value: indicatorStatusCounts.achieved, color: GREEN },
          { label: "قريب", value: indicatorStatusCounts.close, color: GOLD },
          { label: "يحتاج تدخلاً", value: indicatorStatusCounts.needsAction, color: "#c9863a" },
          { label: "متعثر", value: indicatorStatusCounts.struggling, color: DANGER },
        ], { size: 130 }) : emptyHint("لا توجد مؤشرات بعد.")}</div>
      <div class="card"><div class="prs-title" style="font-size:13px;font-weight:800;margin-bottom:10px;">مستوى تحقق الأهداف</div>
        ${allGoals.length ? svgPieChart(GOAL_LEVELS.map((lvl) => ({ label: lvl, value: goalLevelCounts[lvl] || 0, color: goalLevelMeta(lvl).color })), { size: 130 }) : emptyHint("لا توجد أهداف بعد.")}</div>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:10px;">أبرز التحديات</div>
      ${allChallenges.length === 0 ? emptyHint("لا توجد تحديات مُدخلة بعد.") :
        reportTable(["اسم الصعوبة", "الوحدة", "المستوى"], allChallenges.slice(0, 8).map((c) => { const sm = challengeSeverityMeta(c.severity); return [esc(c.name || "—"), esc(c.unitName), c.severity ? badgeHtml(c.severity, sm.color, sm.bg) : "—"]; }))}
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:10px;">التوصيات</div>
      ${allRecommendations.length === 0 ? emptyHint("لا توجد توصيات مُدخلة بعد.") :
        reportTable(["نص التوصية", "الوحدة", "الأولوية"], allRecommendations.slice(0, 8).map((r) => { const pm = improvementPriorityMeta(r.priority); return [esc(r.text || "—"), esc(r.unitName), r.priority ? badgeHtml(r.priority, pm.color, pm.bg) : "—"]; }))}
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:10px;">أهم الملاحظات</div>
      ${notesSummaries.length === 0 ? emptyHint("لا توجد ملاحظات تحليلية مُدخلة بعد.") :
        notesSummaries.slice(0, 5).map((n) => textBlock(n.unitName, n.summary)).join("")}
    </div>

    <div class="card">
      <div class="prs-title" style="font-size:14px;font-weight:800;margin-bottom:10px;">ملخص الأقسام والوحدات</div>
      ${deptRows.length ? reportTable(["القسم", "عدد الوحدات", "متوسط الإنجاز"], deptRows) : emptyHint("لا توجد أقسام نشطة بعد.")}
    </div>
  </div></div>`;
}

/* ---- التقرير الإداري النهائي: يجمع كل الأقسام والوحدات في مستند رسمي واحد ---- */
const iconGauge2 = (s, c) => iconGauge(c, s); // iconGauge أصلاً (لون، حجم) — هذا يعكسها لتطابق (حجم، لون) المستخدمة هنا
const iconBuilding2 = (s, c) => iconBuilding(c, s);
function execChapterHtml(num, iconFn, title, bodyHtml) {
  return `
    <section class="rpt-chapter prs-avoid-break">
      <div class="rpt-chapter-head">
        <div class="rpt-chapter-icon">${iconFn(16, "#fff")}</div>
        <h2 class="rpt-chapter-title">${esc(title)}</h2>
      </div>
      <div class="rpt-chapter-body">${bodyHtml}</div>
    </section>`;
}
function renderExecutiveFinalReport() {
  const s = rptSettings("final");
  const data = aggReportData(s);
  return `
  <div class="page-wrap"><div class="page-inner report">
    ${rptPrintTopBar("التقرير الإداري النهائي", `${data.total} تقرير عبر ${data.unitCount} وحدة`)}
    ${rptWrap(s, aggReportDocHtml(s, data))}
  </div></div>`;
}

/* =============================== All reports (flat, across every unit) ======== */
function renderAllReports() {
  const filter = S.ui.allReportsFilter || "all";
  const deptFilter = S.ui.allReportsDept || "";
  const unitFilter = S.ui.allReportsUnit || "";
  const dateFrom = S.ui.allReportsDateFrom || "";
  const dateTo = S.ui.allReportsDateTo || "";

  let scopeUnits;
  if (S.isAdmin || S.isExecutive) {
    scopeUnits = scopeUnitsFilter(S.units.filter((u) => u.status === "active" && u.role !== "admin" && u.role !== "executive"));
  } else if (S.isDepartmentUser) {
    scopeUnits = S.units.filter((u) => u.status === "active" && u.departmentId === S.currentDepartmentId);
  } else if (S.isOfficeUser) {
    scopeUnits = officeUnits(S.currentOfficeId);
  } else {
    scopeUnits = S.units.filter((u) => u.id === S.currentUnitId);
  }

  const rows = [];
  scopeUnits.forEach((u) => {
    const dept = S.departments.find((d) => d.id === u.departmentId);
    ensureUnitReportsLoaded(u.id).forEach((r) => rows.push({ unit: u, dept, report: r }));
  });
  rows.sort((a, b) => b.report.createdAt - a.report.createdAt);

  const canSeeMultipleEntities = S.isAdmin || S.isExecutive || S.isDepartmentUser || S.isOfficeUser;
  const tabs = [
    { id: "all", label: "الكل" },
    { id: "completed", label: "مكتمل" },
    { id: "custom_pending", label: "قيد المراجعة" },
    { id: "returned", label: "إعادة للتعديل" },
  ];

  let filtered = filter === "all" ? rows : rows.filter((x) => x.report.status === filter);
  if (deptFilter) filtered = filtered.filter((x) => x.dept && x.dept.id === deptFilter);
  if (unitFilter) filtered = filtered.filter((x) => x.unit.id === unitFilter);
  if (dateFrom) filtered = filtered.filter((x) => x.report.createdAt >= new Date(dateFrom).getTime());
  if (dateTo) filtered = filtered.filter((x) => x.report.createdAt <= new Date(dateTo).getTime() + 86400000);

  const tableRowsHtml = filtered.map(({ unit, dept, report }) => {
    const meta = reportStatusMeta(report.status);
    const progress = computeProgress(report);
    const dateStr = new Date(report.createdAt).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long", day: "numeric" });
    const searchKey = `${unit.name} ${dept ? dept.name : ""} ${report.label || ""}`.toLowerCase();
    return `<tr data-search="${esc(searchKey)}">
      <td>${esc(unit.name)}${unit.role === "center" ? ` <span style="font-size:9px;color:${GOLD};">(مركز)</span>` : ""}</td>
      <td>${esc(dept ? dept.name : "—")}</td>
      <td>${esc(report.label || "تقرير")}</td>
      <td>${badgeHtml(meta.label, meta.color, meta.bg)}</td>
      <td>${progress.percent}٪</td>
      <td>${esc(dateStr)}</td>
      <td><button class="pill-btn pill-ghost" style="padding:5px 10px;" data-action="view-report-pdf" data-unit-id="${esc(unit.id)}" data-report-id="${esc(report.id)}">${iconDocument(13, ROSE)} عرض PDF</button></td>
    </tr>`;
  }).join("");

  const scopeDeptOptions = S.isAdmin || S.isExecutive ? scopeDeptsFilter(S.departments.filter((d) => d.status === "active"))
    : S.isOfficeUser ? S.departments.filter((d) => d.status === "active" && officeScopeIds(S.currentOfficeId).includes(d.officeId))
    : [];
  const scopeUnitOptions = canSeeMultipleEntities ? scopeUnits : [];

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "جميع التقارير", subtitle: `${rows.length} تقرير ضمن صلاحيتك` })}
    ${canSeeMultipleEntities ? `
    <div class="card" style="margin-bottom:14px;">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <input class="input" id="all-reports-search" style="flex:2;min-width:180px;" placeholder="بحث باسم التقرير أو الوحدة أو القسم" />
        ${scopeDeptOptions.length ? `<select class="input" style="flex:1;min-width:140px;" data-action="filter-all-reports-dept"><option value="">كل الأقسام</option>${scopeDeptOptions.map((d) => `<option value="${esc(d.id)}" ${deptFilter === d.id ? "selected" : ""}>${esc(d.name)}</option>`).join("")}</select>` : ""}
        ${scopeUnitOptions.length > 1 ? `<select class="input" style="flex:1;min-width:140px;" data-action="filter-all-reports-unit"><option value="">كل الوحدات/المراكز</option>${scopeUnitOptions.map((u) => `<option value="${esc(u.id)}" ${unitFilter === u.id ? "selected" : ""}>${esc(u.name)}${u.role === "center" ? " (مركز)" : ""}</option>`).join("")}</select>` : ""}
        <input class="input" type="date" style="flex:1;min-width:130px;" value="${esc(dateFrom)}" data-action="filter-all-reports-date-from" title="من تاريخ" />
        <input class="input" type="date" style="flex:1;min-width:130px;" value="${esc(dateTo)}" data-action="filter-all-reports-date-to" title="إلى تاريخ" />
      </div>
    </div>` : ""}
    <div style="display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap;">
      ${tabs.map((t) => `<button class="pill-btn ${filter === t.id ? "pill-primary" : "pill-ghost"}" data-action="set-all-reports-filter" data-filter="${t.id}">${esc(t.label)} (${t.id === "all" ? rows.length : rows.filter((x) => x.report.status === t.id).length})</button>`).join("")}
    </div>
    ${filtered.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تقارير مطابقة.</div>` :
      `<div class="table-wrap" style="margin-bottom:10px;"><table class="prs-table" id="all-reports-table">
        <thead><tr style="background:${GRAY_BG}"><th>الوحدة</th><th>القسم</th><th>التقرير</th><th>الحالة</th><th>الإنجاز</th><th>تاريخ الإنشاء</th><th></th></tr></thead>
        <tbody>${tableRowsHtml}</tbody>
      </table></div>`}
  </div></div>`;
}

/* =============================== Unit reports hub: "منصة توثيق الأداء" ======== */
function isReportArchived(report) {
  const endDate = report.sections?.basic?.data?.endDate;
  if (!endDate) return false;
  const end = new Date(endDate).getTime();
  return !isNaN(end) && end < Date.now();
}
function reportCardHtml(unit, entry) {
  const meta = reportStatusMeta(entry.status);
  const typeMeta = reportTypeMeta(entry.reportType);
  const progress = computeProgress(entry);
  const dateStr = new Date(entry.createdAt).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long", day: "numeric" });
  const confirming = S.ui.confirmDeleteReportId === entry.id;
  const showNotes = S.ui.showReportNotesId === entry.id;
  // ملاحظات الإعادة (من مرحلة في مسار الاعتماد)
  const managerNotes = (entry.status === "returned" || entry.status === "needs_completion") ? (entry.internalReviewNotes || entry.sections?.review?.data?.managerNotesText || "") : "";
  const showManagerNotesToUnit = !!managerNotes;

  let actionsHtml;
  if (confirming) {
    actionsHtml = `
      <div class="hint bad" style="margin-bottom:8px;">حذف هذا التقرير نهائي ولا يمكن التراجع عنه.</div>
      <div style="display:flex;gap:6px;">
        ${pillBtn("تأكيد الحذف", { variant: "danger", icon: iconTrash(14, "#fff"), action: "delete-report", data: { unitId: unit.id, reportId: entry.id } })}
        ${pillBtn("إلغاء", { variant: "ghost", action: "cancel-delete-report" })}
      </div>`;
  } else if (entry.status === "draft") {
    actionsHtml = `<div style="display:flex;gap:6px;">
      ${actionAllowed("delete-report") ? `<button class="icon-btn" style="border:1px solid ${BORDER}" data-action="confirm-delete-report" data-id="${entry.id}" title="حذف التقرير">${iconTrash(14, DANGER)}</button>` : ""}
      ${pillBtn("معاينة", { variant: "ghost", icon: iconEye(14, INK), action: "open-report", data: { unitId: unit.id, reportId: entry.id, btn: "card-preview" } })}
      ${pillBtn("تعديل", { icon: iconPencil(14, "#fff"), action: "open-report", data: { unitId: unit.id, reportId: entry.id } })}
    </div>`;
  } else if (entry.status === "returned" || entry.status === "needs_completion") {
    actionsHtml = `<div style="display:flex;flex-direction:column;gap:6px;">
      ${showManagerNotesToUnit ? `<button class="pill-btn pill-ghost" data-action="toggle-report-notes" data-id="${entry.id}" style="width:100%;">${iconEye(14, INK)} ${showNotes ? "إخفاء الملاحظات" : "عرض الملاحظات"}</button>` : ""}
      ${showManagerNotesToUnit && showNotes ? `<div class="hint" style="text-align:right;">${esc(managerNotes)}</div>` : ""}
      ${pillBtn(entry.status === "returned" ? "إعادة التعديل" : "استكمال التقرير", { icon: iconPencil(14, "#fff"), action: "open-report", data: { unitId: unit.id, reportId: entry.id, btn: "card-reedit" } })}
    </div>`;
  } else {
    // مكتمل أو معتمد
    actionsHtml = `<div style="display:flex;gap:6px;flex-wrap:wrap;">
      ${pillBtn("عرض", { variant: "ghost", icon: iconChevronLeft(14, ROSE), action: "view-report-pdf", data: { unitId: unit.id, reportId: entry.id, btn: "card-view" } })}
      ${pillBtn("تنزيل PDF", { variant: "ghost", icon: iconDownload(14, INK), action: "view-report-pdf", data: { unitId: unit.id, reportId: entry.id, btn: "card-download" } })}
    </div>`;
  }

  return `
  <div class="card prs-card">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="width:30px;height:30px;border-radius:9px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconDocument(14, ROSE)}</div>
        <div><div style="font-size:14px;font-weight:800;">${esc(entry.label || "تقرير")}</div><div style="font-size:10.5px;color:${SUBTLE};margin-top:2px;">${esc(dateStr)}</div></div>
      </div>
      ${badgeHtml(meta.label, meta.color, meta.bg)}
    </div>
    <div style="margin-bottom:10px;">${progressBarHtml(progress.percent, meta.color)}<div style="font-size:10.5px;color:${SUBTLE};margin-top:4px;">${progress.completed} من ${progress.total} أقسام مكتملة</div></div>
    ${actionsHtml}
  </div>`;
}

function renderUnitReportsHub() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit) return S.isAdmin ? unitNotFoundPageHtml() : `<div class="page-wrap">تعذر إيجاد الوحدة.</div>`;
  const dept = S.departments.find((d) => d.id === unit.departmentId);
  const list = ensureUnitReportsLoaded(unit.id);
  let filter = S.ui.unitReportsFilter || "all";
  const typeFilter = S.ui.unitReportsTypeFilter || "";
  const yearFilter = S.ui.unitReportsYearFilter || "";

  // الأزرار وحالاتها من القاعدة (report_tabs) — تُدار من «إدارة أزرار التقارير».
  const reportMatchesTab = (r, id) => {
    const t = reportTabDef(id);
    if (!t) return false;
    return (t.statuses || []).indexOf(r.status) !== -1 || (t.adminStatuses || []).indexOf(r.status) !== -1;
  };
  const tabSpecial = (id) => { const t = reportTabDef(id); return t ? t.special : ""; };

  const tabs = reportTabsList().filter((t) => t.enabled !== false).map((t) => ({ id: t.id, label: t.label }));
  // أزرار محددة من مديرة النظام لهذا الحساب/المسمى (إن وُجدت) تحل محل الأزرار الافتراضية.
  const tabsCfg = effectiveReportTabsConfig();
  // «بانتظار مراجعتي» يظهر تلقائيًا لمن هو في مرحلة بمسار اعتماد (أو إن اختارته مديرة النظام صراحة).
  if (!userInAnyApStage()) { const mi = tabs.findIndex((t) => t.id === MINE_TAB_ID); if (mi >= 0) tabs.splice(mi, 1); }
  if (tabsCfg && tabsCfg.tabs.length) {
    const chosen = reportTabsList().filter((t) => t.enabled !== false && tabsCfg.tabs.includes(t.id)).map((t) => ({ id: t.id, label: t.label }));
    tabs.length = 0; chosen.forEach((t) => tabs.push(t));
  }
  if (!tabs.some((t) => t.id === filter)) filter = tabs.length ? tabs[0].id : "all";
  const countFor = (id) => {
    if (tabSpecial(id) === "mine") return apPendingForMe().length;
    if (tabSpecial(id) === "all") return list.filter((r) => !isReportArchived(r)).length;
    if (tabSpecial(id) === "archived") return list.filter((r) => isReportArchived(r)).length;
    return list.filter((r) => reportMatchesTab(r, id) && !isReportArchived(r)).length;
  };

  const mineMode = tabSpecial(filter) === "mine";
  let filtered = mineMode ? [] : tabSpecial(filter) === "all" ? list.filter((r) => !isReportArchived(r))
    : tabSpecial(filter) === "archived" ? list.filter((r) => isReportArchived(r))
    : list.filter((r) => reportMatchesTab(r, filter) && !isReportArchived(r));
  if (typeFilter) filtered = filtered.filter((r) => (r.sections?.basic?.data?.periodType || "") === typeFilter);
  if (yearFilter) filtered = filtered.filter((r) => (r.sections?.basic?.data?.hijriYear || "") === yearFilter);
  const sorted = [...filtered].sort((a, b) => b.createdAt - a.createdAt);

  const yearOptions = [...new Set(list.map((r) => r.sections?.basic?.data?.hijriYear).filter(Boolean))];

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "نظام توثيق الأداء", subtitle: dept ? `${unit.name} — ${dept.name}` : unit.name,
      backAction: S.isAdmin && S.adminPreviewOrigin ? "nav-to" : S.isAdmin ? "nav-back-admin" : S.isDepartmentUser ? "nav-back-department" : "",
      backData: S.isAdmin && S.adminPreviewOrigin ? { view: S.adminPreviewOrigin } : undefined,
      // زر "إنشاء تقرير" هنا بالصفحة نفسها، مو بالشريط الجانبي فقط — يحتاج
      // فقط صلاحية الإجراء (open-or-create-report)، بدون اشتراط وجود صفحة
      // "إنشاء تقرير" ضمن allowedPages أيضًا. هذا يمنع طريق مسدود حقيقي: حساب
      // وصل لهذي الصفحة من مكان آخر (مثال: بطاقة الوحدة بصفحة "قسمي") لكن
      // زر الشريط الجانبي نفسه غير ظاهر له لأن صفحة "إنشاء تقرير" تحديدًا لم
      // تُمنح له ضمن قائمة الصفحات — فتظل الصفحة تَعِد بالزر "من الشريط
      // الجانبي" بينما هو غير موجود أصلًا.
      right: (actionAllowed("open-or-create-report") && !adminReportsReadOnly() && !computeVisibleSidebarPages().some((p) => p.id === "unit-report") ? pillBtn("إنشاء تقرير", { icon: iconPencil(14, "#fff"), action: "open-or-create-report" }) : "")
        + (actionAllowed("create-new-report") && !adminReportsReadOnly() ? pillBtn("تقرير جديد", { variant: "ghost", icon: iconPlus(14, INK), action: "create-new-report" }) : "") })}
    ${scopedUnitSwitcherHtml()}

    <div class="hero-banner">
      <img class="hero-banner-bg" src="hero-bg.jpg" alt="" />
      <div class="hero-banner-text">
        <div class="hero-banner-eyebrow">إدارة تقاريرك بسهولة وتنظيم</div>
        <div class="prs-title hero-banner-title">التقارير</div>
        <div class="hero-banner-sub">معًا نحو أثر أعظم..</div>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      ${tabs.map((t) => `<button class="pill-btn ${filter === t.id ? "pill-primary" : "pill-ghost"}" data-action="set-unit-reports-filter" data-filter="${t.id}">${esc(t.label)} (${countFor(t.id)})</button>`).join("")}
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <input id="unit-reports-search" class="input" style="flex:2;min-width:180px;" placeholder="ابحثي باسم التقرير..." />
        <select class="input" style="flex:1;min-width:120px;" data-action="filter-unit-reports-type"><option value="">الفترة: الكل</option>${periodOptionsFor(list).map((p) => `<option value="${esc(p)}" ${typeFilter === p ? "selected" : ""}>${esc(p)}</option>`).join("")}</select>
        <select class="input" style="flex:1;min-width:110px;" data-action="filter-unit-reports-year"><option value="">السنة: الكل</option>${yearOptions.map((y) => `<option value="${esc(y)}" ${yearFilter === y ? "selected" : ""}>${esc(y)}</option>`).join("")}</select>
      </div>
    </div>
    <div style="font-size:12px;color:${SUBTLE};margin-bottom:10px;">عدد التقارير: ${sorted.length}</div>

    ${mineMode ? (apPendingForMe().length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;border-style:dashed;">لا توجد تقارير بانتظارك حاليًا.</div>` : `<div style="display:flex;flex-direction:column;gap:12px;">${apPendingForMe().map((item) => apInboxCardHtml(item)).join("")}</div>`) : sorted.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تقارير مطابقة${filter === "all" ? " — ابدئي بإنشاء تقرير جديد من الشريط الجانبي." : "."}</div>` :
      `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px;" id="unit-reports-grid">${sorted.map((entry) => `<div data-search="${esc((entry.label || "").toLowerCase())}">${reportCardHtml(unit, entry)}</div>`).join("")}</div>`}
  </div></div>`;
}

/* =============================== Departments / units management ============== */


/* ---------- شجرة الهيكل (مكتب ← قسم ← وحدة):
   طيّ، إضافة (تابع/أب)، تعديل (الاسم + الإيميل + الرقم السري)، حذف، نقل ---------- */
function treeEntity(type, id) {
  const list = type === "office" ? (S.offices || []) : type === "dept" ? S.departments : S.units; // "exec" و"unit" كلاهما بجدول units
  return list.find((x) => x.id === id) || null;
}
function treeSetEntity(type, id, patch) {
  if (type === "office") { S.offices = (S.offices || []).map((x) => x.id === id ? { ...x, ...patch } : x); dataStore.saveOffices(S.offices); }
  else if (type === "dept") { S.departments = S.departments.map((x) => x.id === id ? { ...x, ...patch } : x); dataStore.saveDepartments(S.departments); }
  else { S.units = S.units.map((x) => x.id === id ? { ...x, ...patch } : x); dataStore.saveUnits(S.units); }
}
function treeEditFormHtml(type, id) {
  const f = S.ui.treeEditFor;
  if (!f || f.type !== type || f.id !== id) return "";
  const e = treeEntity(type, id); if (!e) return "";
  return `<div class="card" style="margin:6px 0;background:${GRAY_BG};">
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <input class="input" id="tree-edit-name" style="flex:2;min-width:140px;" placeholder="المسمى الوظيفي" value="${esc(e.name)}" />
      <input class="input" id="tree-edit-email" style="flex:1;min-width:140px;" type="email" placeholder="الإيميل" value="${esc(e.email || "")}" />
      <input class="input" id="tree-edit-password" style="flex:1;min-width:110px;" placeholder="رقم سري جديد (فارغ = بدون تغيير)" />
      ${pillBtn("حفظ", { action: "tree-edit-save", data: { type, id } })}
      ${pillBtn("إلغاء", { variant: "ghost", action: "tree-edit-cancel" })}
    </div>
  </div>`;
}
const STRUCT_OWNER_KIND = { unit: "unit", dept: "department", office: "office" };
// ===== أجزاء مشتركة لصفحة "المستخدمون" (حسابات الجهات، الأشخاص، المسارات) =====
// لا بيانات جديدة ولا أعمدة: تستخدم نفس الأشخاص والأدوار والمسارات ونفس الإجراءات الموجودة.
const STRUCT_PANEL_TAGS = {
  admin: { label: "مديرة نظام", bg: "#f3e9ef", fg: "#6b2337" },
  exec: { label: "إدارة عليا", bg: "#f3e9ef", fg: "#6b2337" },
  office: { label: "مكتب", bg: "#f3e9ef", fg: "#6b2337" },
  dept: { label: "قسم", bg: "#fbf0e1", fg: "#9a6420" },
  unit: { label: "وحدة", bg: "#e8f0ea", fg: "#2f6b45" },
  center: { label: "مركز", bg: "#e8f0ea", fg: "#2f6b45" },
};
function structPanelTagHtml(type, e) {
  const t = STRUCT_PANEL_TAGS[type === "unit" && e && e.role === "center" ? "center" : type] || STRUCT_PANEL_TAGS.unit;
  return `<span style="font-size:11px;font-weight:800;padding:2px 9px;border-radius:999px;background:${t.bg};color:${t.fg};white-space:nowrap;">${t.label}</span>`;
}
// مسار الوحدة التلقائي كقائمة مختصرة (للاطلاع) — مع أزرار تخطّي صاحبة المرحلة في «الإعدادات»
function apAutoPathListHtml(unit, withSkip) {
  const path = autoPathObj();
  if (!path || path.status !== "active") return `<div style="font-size:12px;color:${SUBTLE};">المسار التلقائي موقف — تفعّله مديرة النظام من «كل المسارات».</div>`;
  const pv = apAutoPreview(unit); if (!pv) return "";
  let n = 0;
  const rows = pv.rows.filter((r) => r.what !== "none" || r.state === "on").map((r) => {
    const off = r.state !== "on", pm = r.pk ? apAutoPerm(r.pk) : null, info = !off && pm && pm.info;
    if (!off && !info) n++;
    const lvl = r.what === "lvl" ? olFind(r.id) : null;
    const raw = r.what === "stage" ? (path.stages || []).find((x) => x.id === r.id) : null;
    const mine = withSkip && pm && pm.skip && r.state !== "all" && r.state !== "auto" && (lvl ? sessionIsLevel(lvl) : raw ? userHoldsApStage(apNamedStage(raw, path, unit), unit) : false);
    const key = AUTO_PATH_ID + ":" + (r.what === "lvl" ? "lvl:" + r.id : r.id);
    const many = mine && lvl ? (S.units || []).filter((u) => u.status === "active" && olScopeUnitIds(lvl.id).has(u.id)).length : 0;
    return `<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:8px 10px;border-radius:12px;border:1px ${off ? "dashed #d9c9cf" : "solid " + BORDER};background:${off ? "#faf6f7" : "#fff"};">
      <span style="width:24px;height:24px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:800;background:${off ? "#f1ecee" : "#f3e6ea"};color:${off ? "#a99" : ROSE};">${off ? "–" : info ? "ⓘ" : n}</span>
      <div style="flex:1 1 180px;min-width:0;"><div style="font-size:12.5px;font-weight:800;${off ? "color:#a3949a;text-decoration:line-through;" : ""}">${esc(r.name)}</div>${r.why ? `<div style="font-size:11px;color:${SUBTLE};">${esc(r.why)}</div>` : ""}</div>
      ${mine ? `<div style="display:flex;gap:6px;flex-wrap:wrap;">${pillBtn(r.state === "unit" ? "إرجاع مرحلتي" : "تخطّي مرحلتي لهذه الوحدة", { variant: r.state === "unit" ? "ghost" : "primary", action: "us-skip-toggle", data: { key, on: r.state === "unit" ? "0" : "1" } })}
        ${many > 1 ? pillBtn((r.state === "unit" ? "إرجاعها" : "تخطّيها") + " لكل وحداتي (" + many + ")", { variant: "soft", action: "us-skip-toggle", data: { key, on: r.state === "unit" ? "0" : "1", all: lvl.id } }) : ""}</div>` : ""}
    </div>`;
  }).join("");
  return `<div style="display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:12px;background:${ROSE};color:#fff;margin-bottom:6px;font-size:12.5px;"><span>✎</span><span>يكتب: <b>${esc(pv.writer)}</b></span></div>
    <div style="display:flex;flex-direction:column;gap:6px;">${rows}</div>`;
}
function structPanelPathTabHtml(type, e) {
  if (type === "unit") return `${apAutoPathListHtml(e, false)}<div class="hint" style="margin-top:10px;">المسار يطلع لحاله من الهيكل — التغيير من «كل المسارات».</div>`;
  const lvl = olActive().find((l) => l.linkKind === type && l.linkId === e.id);
  const n = lvl ? (S.units || []).filter((u) => u.status === "active" && olScopeUnitIds(lvl.id).has(u.id)).length : 0;
  return `<div style="font-size:12.5px;line-height:2;">${lvl ? `«${esc(e.name)}» يطلع في مسار <b>${n}</b> وحدة تحته في الهيكل. وش يسوي فيها تحددينه من «كل المسارات».` : `«${esc(e.name)}» مو موجود في الهيكل — حطيه في مكانه عشان يطلع في مسار الوحدات اللي تحته.`}</div>`;
}
// ===== العرض المبسّط: أسئلة بسيطة (الأشخاص ← ماذا يرون ← المسار) + نسخ الإعداد + بطاقة الشخص =====
// إضافة فقط: العرض السابق (ذو التبويبات) والشجرة القديمة يبقيان ويُفتحان من الأزرار أعلى الصفحة.
function structSimpleRoleCountsText(role) {
  const p = rolePermsOf(role);
  const b = p.buttons.length ? p.buttons : p.actions.filter((a) => BUTTON_CATALOG.some((x) => x.id === a));
  if (!p.pages.length) return "⚠ بلا صفحات — لا يرى شيئًا";
  return `${p.pages.length} صفحات · ${b.length} أزرار`;
}
function structSimplePeopleHtml(type, e, key) {
  const kind = STRUCT_OWNER_KIND[type];
  const ui = S.ui;
  const roles = rolesList();
  const list = personsList().filter((p) => (p.ownerKind || "unit") === kind && p.ownerId === e.id);
  const roleSel = (p) => `<select class="input" data-action="struct-person-role" data-id="${esc(p.id)}" style="width:150px;padding:6px 8px;font-size:12.5px;">
    <option value="">— بلا دور —</option>${roles.map((r) => `<option value="${esc(r.id)}" ${p.roleId === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}</select>`;
  const rows = list.map((p) => {
    const on = p.status !== "disabled";
    const menu = ui.structPersonMenu === p.id;
    const hasOv = p.permsOverride && (Array.isArray(p.permsOverride.pages) || Array.isArray(p.permsOverride.actions));
    const perm = ui.personPermEditId === p.id ? personPermsEditorHtml(p) : "";
    if (ui.personEditId === p.id) {
      return perm + `<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px;">
        <input class="input" id="sp-ename-${esc(p.id)}" value="${esc(p.name)}" style="flex:1;min-width:120px;" />
        <select class="input" id="sp-erole-${esc(p.id)}" style="width:150px;"><option value="">— الدور —</option>${roles.map((r) => `<option value="${esc(r.id)}" ${p.roleId === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}</select>
        <input class="input" id="sp-epin-${esc(p.id)}" inputmode="numeric" placeholder="رمز (اختياري)" value="${esc(p.pin)}" style="width:120px;" />
        ${pillBtn("حفظ", { action: "struct-person-save", data: { id: p.id } })}${pillBtn("إلغاء", { variant: "ghost", action: "person-cancel" })}</div>`;
    }
    return perm + `<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:9px 12px;margin-bottom:6px;background:${GRAY_BG};border:1px solid ${BORDER};border-radius:14px;opacity:${on ? 1 : 0.6};">
      <span style="width:32px;height:32px;border-radius:50%;background:${ROSE};color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;">${esc((p.name || "؟").charAt(0))}</span>
      <div style="flex:1;min-width:110px;font-size:13.5px;font-weight:700;">${esc(p.name)}<div style="font-size:10.5px;color:${SUBTLE};font-weight:500;">${personEffectivePin(p) ? "برمز" : "بلا رمز"}${hasOv ? " • استثناء خاص" : ""}${on ? "" : " • معطّل"}</div></div>
      ${roleSel(p)}
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="struct-person-menu" data-id="${esc(p.id)}" title="المزيد">⋯</button>
      ${menu ? `<div style="flex-basis:100%;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;">${ui.personConfirmDeleteId === p.id
        ? `${pillBtn("تأكيد الحذف", { variant: "danger", action: "person-delete", data: { id: p.id } })}${pillBtn("تراجع", { variant: "ghost", action: "person-delete-cancel" })}`
        : `${pillBtn("تعديل", { variant: "ghost", action: "person-edit", data: { id: p.id } })}${pillBtn("استثناء الصلاحيات", { variant: "ghost", action: "person-perm-edit", data: { id: p.id } })}${pillBtn(on ? "تعطيل" : "تفعيل", { variant: "ghost", action: "person-toggle", data: { id: p.id } })}${pillBtn("حذف", { variant: "danger", action: "person-delete-ask", data: { id: p.id } })}`}</div>` : ""}
    </div>`;
  }).join("");
  const err = ui.structPersonError && ui.structPersonError.key === key ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-top:6px;">${esc(ui.structPersonError.msg)}</div>` : "";
  const adding = ui.structPersonAdd === key;
  return `${rows || `<div style="font-size:12px;color:${SUBTLE};padding:4px 2px 8px;">لا يوجد أشخاص بعد.</div>`}
    ${adding ? `<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px;">
      <input class="input" id="sp-name-${esc(key)}" placeholder="اسم الشخص" style="flex:1;min-width:120px;" />
      <select class="input" id="sp-role-${esc(key)}" style="width:150px;"><option value="">— الدور —</option>${roles.map((r) => `<option value="${esc(r.id)}">${esc(r.name)}</option>`).join("")}</select>
      <input class="input" id="sp-pin-${esc(key)}" inputmode="numeric" placeholder="رمز (اختياري)" style="width:120px;" />
      ${pillBtn("إضافة", { icon: iconPlus(14, "#fff"), action: "struct-person-add", data: { kind, id: e.id, key } })}${pillBtn("إلغاء", { variant: "ghost", action: "struct-person-add-cancel" })}
    </div>${err}` : ""}
    ${roles.length ? "" : `<div style="font-size:11px;color:${SUBTLE};margin-top:6px;">أنشئي دورًا أولًا من زر «الأدوار والصلاحيات» أعلى الصفحة.</div>`}`;
}
function structSimpleRoleCardsHtml(type, e) {
  const kind = STRUCT_OWNER_KIND[type];
  const roles = rolesList();
  const card = (r) => {
    const on = baseRoleIdsRaw(e).includes(r.id);
    return `<button type="button" data-action="struct-set-base-role" data-kind="${esc(kind)}" data-id="${esc(e.id)}" data-role="${esc(r.id)}" style="text-align:right;font-family:inherit;cursor:pointer;padding:12px 14px;border-radius:14px;border:${on ? `2px solid ${ROSE}` : `1px solid ${BORDER}`};background:${on ? "#f3e9ef" : GRAY_BG};display:flex;flex-direction:column;gap:3px;">
      <span style="display:flex;align-items:center;gap:8px;"><span style="width:18px;height:18px;border-radius:50%;${on ? `background:${ROSE};` : "border:1.5px solid #cdb9c1;"}display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;">${on ? "✓" : ""}</span><b style="font-size:14px;color:${INK};">${esc(r.name)}</b></span>
      <span style="font-size:11.5px;color:${SUBTLE};">${structSimpleRoleCountsText(r)}</span></button>`;
  };
  const none = `<button type="button" data-action="struct-set-base-role" data-kind="${esc(kind)}" data-id="${esc(e.id)}" data-role="" style="text-align:right;font-family:inherit;cursor:pointer;padding:12px 14px;border-radius:14px;border:${!baseRoleIdsRaw(e).length ? `2px solid ${ROSE}` : `1px dashed #d9c6cd`};background:${!baseRoleIdsRaw(e).length ? "#f3e9ef" : "#fff"};"><b style="font-size:14px;color:${INK};">بلا دور</b><div style="font-size:11.5px;color:${SUBTLE};margin-top:3px;">لا صفحات عند الدخول المباشر</div></button>`;
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;">${roles.map(card).join("")}${none}</div>
    <div style="font-size:11.5px;color:${SUBTLE};margin-top:8px;">لتغيير صفحات الدور أو أزراره نفسه: زر «الأدوار والصلاحيات» أعلى الصفحة. هنا تختارين فقط.</div>`;
}
function structSimpleCopyHtml(type, e, key) {
  const c = S.ui.structCopy;
  if (!c || c.key !== key) return "";
  const lists = type === "office" ? (S.offices || []) : type === "dept" ? S.departments : S.units.filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report");
  const src = lists.filter((x) => x.id !== e.id);
  const from = c.from ? lists.find((x) => x.id === c.from) : null;
  return `<div class="card" style="background:${GRAY_BG};margin-bottom:12px;">
    <div style="font-size:12.5px;font-weight:800;margin-bottom:8px;">نسخ الإعداد إلى «${esc(e.name)}»</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
      <select class="input" data-action="struct-copy-from" style="width:230px;"><option value="">— من أي جهة؟ —</option>${src.map((x) => `<option value="${esc(x.id)}" ${c.from === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
      ${from ? pillBtn("نسخ", { action: "struct-copy-confirm", data: { key } }) : ""}${pillBtn("إلغاء", { variant: "ghost", action: "struct-copy-cancel" })}
    </div>
    ${from ? `<div style="font-size:11.5px;color:${SUBTLE};margin-top:8px;">سيُنسخ: الدور الأساسي${from.baseRoleId ? "" : " (بلا دور)"}. لا تُنسخ أسماء الأشخاص، ولا يُحذف شيء من هذه الجهة. إن كان لها دور حاليًا فسيُستبدل.</div>` : ""}
  </div>`;
}
function structSimplePeopleViewHtml() {
  const roles = rolesList();
  const filt = S.ui.structPeopleFilter || "all";
  let list = personsList();
  if (filt === "none") list = list.filter((p) => !roles.some((r) => r.id === p.roleId));
  else if (filt !== "all") list = list.filter((p) => p.roleId === filt);
  const ownerOf = (p) => {
    const k = p.ownerKind === "department" ? "dept" : (p.ownerKind || "unit");
    const ent = treeEntity(k, p.ownerId);
    return { key: k + ":" + p.ownerId, name: ent ? ent.name : "(جهة محذوفة)", type: k, ent };
  };
  const chip = (id, label) => `<button type="button" data-action="struct-people-filter" data-f="${esc(id)}" style="font-family:inherit;cursor:pointer;padding:7px 14px;border-radius:999px;font-size:12.5px;font-weight:700;border:1px solid ${BORDER};background:${filt === id ? ROSE : "#fff"};color:${filt === id ? "#fff" : INK};">${label}</button>`;
  const cards = list.map((p) => {
    const o = ownerOf(p);
    const r = roles.find((x) => x.id === p.roleId);
    const ap = autoPathObj();
    const act = o.type === "unit" && o.ent && ap && ap.status === "active" && apFlow(apStageList(ap, o.ent)).length;
    const on = p.status !== "disabled";
    return `<div class="card" style="padding:14px 16px;${r ? "" : "border:1.5px dashed #e3c9a1;"}opacity:${on ? 1 : 0.6};">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <span style="width:40px;height:40px;border-radius:50%;background:${ROSE};color:#fff;font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center;">${esc((p.name || "؟").charAt(0))}</span>
        <div style="flex:1;min-width:0;"><div style="font-size:14.5px;font-weight:800;">${esc(p.name)}</div>
          <button type="button" data-action="struct-open-entity" data-key="${esc(o.key)}" style="font-family:inherit;cursor:pointer;background:none;border:none;padding:0;font-size:12px;color:${ROSE};font-weight:700;">${esc(o.name)} ›</button></div></div>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;">
        <div style="padding:9px 11px;background:${GRAY_BG};border:1px solid ${BORDER};border-radius:12px;"><div style="font-size:11px;color:${SUBTLE};">الدور</div>
          <select class="input" data-action="struct-person-role" data-id="${esc(p.id)}" style="margin-top:4px;padding:5px 8px;font-size:12.5px;"><option value="">— بلا دور —</option>${roles.map((x) => `<option value="${esc(x.id)}" ${p.roleId === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
          <div style="font-size:11px;color:${SUBTLE};margin-top:3px;">${r ? structSimpleRoleCountsText(r) : ""}</div></div>
        <div style="padding:9px 11px;background:${act ? GRAY_BG : "#fdf7ec"};border:1px ${act ? "solid" : "dashed"} ${act ? BORDER : "#e3c9a1"};border-radius:12px;"><div style="font-size:11px;color:${SUBTLE};">مسار تقاريرها</div>
          <div style="font-size:13px;font-weight:800;margin-top:4px;">${act ? "تلقائي من الهيكل" : "ما لها مسار"}</div>
          <div style="font-size:11px;color:${act ? GREEN : "#9a6420"};margin-top:3px;font-weight:700;">${act ? "● " + apFlow(apStageList(ap, o.ent)).length + " مراحل" : "حطي الجهة في الهيكل"}</div></div>
      </div>
      ${!r ? `<div style="margin-top:8px;font-size:12px;color:#9a6420;font-weight:700;">⚠ بلا دور، فلا يرى أي صفحة. اختاري له دورًا.</div>` : ""}
      <div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end;">${S.ui.personConfirmDeleteId === p.id
        ? `<span style="font-size:12px;color:${DANGER};font-weight:700;">حذف «${esc(p.name)}» نهائيًا؟</span>${pillBtn("تأكيد الحذف", { variant: "danger", action: "person-delete", data: { id: p.id } })}${pillBtn("تراجع", { variant: "ghost", action: "person-delete-cancel" })}`
        : pillBtn("حذف الشخص", { variant: "danger", action: "person-delete-ask", data: { id: p.id } })}</div>
    </div>`;
  }).join("");
  return `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${chip("all", "الكل")}${roles.map((r) => chip(r.id, esc(r.name))).join("")}${chip("none", "بلا دور ⚠")}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;">${cards || `<div class="card" style="text-align:center;color:${SUBTLE};padding:30px;border-style:dashed;grid-column:1/-1;">لا يوجد أشخاص بهذا الفلتر.</div>`}</div>
    <div style="font-size:11.5px;color:${SUBTLE};margin-top:10px;">لإضافة شخص جديد: «الهيكل»، ثم اختاري الجهة ← تبويب «الأشخاص».</div>`;
}



/* =============================== قوائم الصلاحيات (الأدوار) ================== */
// صفّ عنصر واحد (checkbox) داخل قائمة منسدلة لصلاحيات الصفحات/الإجراءات —
// يحافظ على نفس data-action/data-id المستخدمين أصلًا في التبديل، فقط يغيّر الشكل.
function permCheckboxRowHtml(action, id, label, checked) {
  return `<label style="display:flex;align-items:center;gap:8px;font-size:12px;padding:5px 4px;border-radius:6px;cursor:pointer;">
    <input type="checkbox" style="width:15px;height:15px;cursor:pointer;flex-shrink:0;" ${checked ? "checked" : ""} data-action="${esc(action)}" data-id="${esc(id)}" />
    <span>${esc(label)}</span>
  </label>`;
}
// الإطار العام للقائمة المنسدلة القابلة للتعدد: زر ملخّص (كم محدد من الإجمالي)
// يفتح/يقفل لوحة فيها "تحديد الكل"/"إلغاء الكل" + القائمة الفعلية. الفتح/الإغلاق
// يُدار بـ S.ui.permDropdownOpen[action] — حالة عرض بحتة، ما تمسّ بيانات الصلاحيات.
function permDropdownChecklistHtml({ action, selected, total, emptyLabel, renderList }) {
  const isOpen = !!(S.ui.permDropdownOpen && S.ui.permDropdownOpen[action]);
  const count = selected.length;
  const summary = count === 0 ? `بدون قيد (كل ${emptyLabel})` : count === total ? `كل ${emptyLabel} (${count})` : `${count} من ${total} ${emptyLabel} محددة`;
  return `
    <div style="position:relative;">
      <button type="button" class="input" style="display:flex;align-items:center;justify-content:space-between;width:100%;cursor:pointer;text-align:right;" data-action="toggle-perm-dropdown" data-key="${esc(action)}">
        <span style="font-size:12px;color:${count ? INK : SUBTLE};">${esc(summary)}</span>
        <span style="display:inline-flex;transition:transform 0.15s;transform:rotate(${isOpen ? "180" : "0"}deg);">${iconChevronDown(14, SUBTLE)}</span>
      </button>
      ${isOpen ? `
        <div style="border:1px solid ${BORDER};border-radius:10px;margin-top:6px;padding:10px;max-height:280px;overflow:auto;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,0.08);">
          <div style="display:flex;gap:6px;margin-bottom:10px;">
            ${pillBtn("تحديد الكل", { variant: "soft", action: "select-all-perm", data: { key: action, mode: "all" } })}
            ${pillBtn("إلغاء الكل", { variant: "ghost", action: "select-all-perm", data: { key: action, mode: "none" } })}
          </div>
          ${renderList()}
        </div>` : ""}
    </div>`;
}
// صفحات إدارية حسّاسة — تتحكم بإعدادات الموقع أو الحسابات والصلاحيات أو الهيكل.
// منحها لدور عادي يعطيه قدرة أعلى بكثير من المقصود — فتُعرض
// بقسم منفصل محذّر بصريًا بدل ما تكون مختلطة بصفحات المحتوى العادية.
const SENSITIVE_PAGE_IDS = [
  "site-settings",
  "admin-reports", "indicators-manage", "goals-manage", "sections-manage",
  "field-schemas-manage", "departments-list", "units-manage", "reports-manage",
];
// أسماء عرض مخصّصة لمجموعات الصفحات بقائمة الصلاحيات — فقط
// حيث اسم المجموعة الأصلي (المستخدم بالشريط الجانبي الحقيقي) غير واضح هنا.
const PAGE_GROUP_LABELS = { "unit-home": "صفحات التقارير (لوحة المعلومات/تقارير/إنشاء تقرير/الإعدادات)", "unit-extra": "صفحات الوحدة (التنبيهات/جميع تقارير الوحدة)" };
function pagesChecklistHtml(selected, action) {
  selected = normalizeDashboardPages(selected || []);
  const groups = [];
  const sensitivePages = [];
  SIDEBAR_PAGES.forEach((p) => {
    if (MERGED_DASHBOARD_IDS.indexOf(p.id) !== -1) return;
    if (SENSITIVE_PAGE_IDS.includes(p.id)) { sensitivePages.push(p); return; }
    let g = groups.find((x) => x.name === p.group);
    if (!g) { g = { name: p.group, pages: [] }; groups.push(g); }
    g.pages.push(p);
  });
  const total = groups.reduce((sum, g) => sum + g.pages.length, 0) + sensitivePages.length;
  return permDropdownChecklistHtml({
    action, selected, total, emptyLabel: "صفحات",
    renderList: () => `
      <div style="font-size:10.5px;font-weight:800;color:${ROSE};margin-bottom:6px;">صفحات عامة (آمنة لأي حساب)</div>
      ${groups.map((g) => `
        <div style="margin-bottom:10px;">
          <div style="font-size:10.5px;font-weight:800;color:${SUBTLE};margin-bottom:6px;">${esc(PAGE_GROUP_LABELS[g.name] || (g.name === "standalone" ? "أخرى" : g.name))}</div>
          <div style="display:flex;flex-direction:column;gap:2px;">
            ${g.pages.map((p) => permCheckboxRowHtml(action, p.id, p.label, selected.includes(p.id))).join("")}
          </div>
        </div>`).join("")}
      ${sensitivePages.length ? `
      <div style="margin-top:6px;padding-top:10px;border-top:1.5px dashed ${DANGER};">
        <div style="font-size:10.5px;font-weight:800;color:${DANGER};margin-bottom:2px;">⚠️ صفحات إدارية حسّاسة</div>
        <div style="font-size:10px;color:${SUBTLE};margin-bottom:6px;">تتحكم بإعدادات الموقع أو الحسابات أو الهيكل التنظيمي نفسه — امنحيها بحذر شديد، وفقط لمن تثقين بها فعلًا.</div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          ${sensitivePages.map((p) => permCheckboxRowHtml(action, p.id, p.label, selected.includes(p.id))).join("")}
        </div>
      </div>` : ""}
    `,
  });
}
// يرجع المصفوفة الحية (نفس المرجع المستخدم أصلًا بكل حالة toggle-*) بالاعتماد
// على اسم الـ action — يخدم "تحديد الكل"/"إلغاء الكل" بدون تكرار منطق الحفظ.
function permDropdownTargetArray(key) {
  if (key === "toggle-role-perm-page") { const f = rolePermFormState(); return f.pages; }
  if (key === "toggle-role-perm-button") { const f = rolePermFormState(); return f.buttons; }
  return [];
}


// شريط تبويبات موحّد يربط الصفحات الأربع اللي صارت مدمجة منطقيًا بناءً على
// طلب نجود الصريح ("ما اقدر ادمجها مع بعض؟") — كل صفحة باقية بمنطقها ودالتها
// الأصلية بدون أي تغيير، بس صار التنقل بينها بتبويبات بدل روابط منفصلة
// بالقائمة الجانبية. "مخطط الهيكل التنظيمي" تبقى مستقلة تمامًا (قرارها
// الصريح: أداة تخطيط حرة بدون حسابات دخول، غير هذي الأربعة).
// ثلاثة تبويبات واضحة: الهيكل (من يوجد بالنظام) — الأشخاص (حسابات بمسميات) — الصلاحيات
// (ماذا يرى كل حساب، ومعها القوالب الجاهزة كتبويب فرعي).

function permButtonsChecklistHtml(allSelected, action) {
  const selectedAll = allSelected || [];
  const selected = selectedAll.filter((x) => String(x).indexOf("notify:") !== 0);
  const groups = [];
  const shownCatalog = BUTTON_CATALOG.filter((b) => !CORE_REPORT_BUTTONS.includes(b.id));
  shownCatalog.forEach((b) => { let g = groups.find((x) => x.name === b.g); if (!g) { g = { name: b.g, items: [] }; groups.push(g); } g.items.push(b); });
  return permDropdownChecklistHtml({
    action, selected, total: shownCatalog.length, emptyLabel: "الأزرار",
    renderList: () => groups.map((g) => `<div style="margin-bottom:8px;"><div style="font-size:10.5px;font-weight:800;color:${ROSE};margin-bottom:4px;">${esc(g.name)}</div>${g.items.map((b) => permCheckboxRowHtml(action, b.id, b.label, selected.includes(b.id)) + (b.id.indexOf("chip:") === 0 ? `<div style="padding-inline-start:22px;">${permCheckboxRowHtml(action, "notify:" + b.id, "↳ ينبّه بعدد تقارير هذا الزر (في التنبيهات)", selectedAll.includes("notify:" + b.id))}</div>` : "")).join("")}</div>`).join(""),
  });
}
// الصلاحيات تنحفظ أول ما تتعلّم — والمحرّر يبقى مفتوح
function permAutoSave() {
  const f = S.ui.rolePermForm; if (!f) return;
  const perms = { pages: [...f.pages], actions: [], buttons: [...f.buttons] };
  if (S.ui.rolePermEditId) { S.roles = rolesList().map((x) => x.id === S.ui.rolePermEditId ? { ...x, permissions: perms } : x); dataStore.saveRoles(S.roles); S.ui.permDirty = true; }
  else if (S.ui.personPermEditId) { S.persons = personsList().map((x) => x.id === S.ui.personPermEditId ? { ...x, permsOverride: perms } : x); dataStore.savePersons(S.persons); S.ui.permDirty = true; }
}
function rolePermFormState() {
  return S.ui.rolePermForm || (S.ui.rolePermForm = { pages: [], actions: [], buttons: [] });
}
function rolePermsOf(role) {
  const p = (role && role.permissions) || {};
  return { pages: Array.isArray(p.pages) ? p.pages : [], actions: Array.isArray(p.actions) ? p.actions : [], buttons: Array.isArray(p.buttons) ? p.buttons : [] };
}
function personEffectivePerms(person) {
  const role = rolesList().find((r) => r.id === person.roleId);
  const base = rolePermsOf(role);
  const o = person.permsOverride || {};
  return {
    pages: Array.isArray(o.pages) ? o.pages : base.pages,
    actions: Array.isArray(o.actions) ? o.actions : base.actions,
    buttons: Array.isArray(o.buttons) ? o.buttons : base.buttons,
  };
}
function approvalPathToRow(a) {
  return { id: a.id, name: a.name || "", owner_kind: a.ownerKind || "", owner_id: a.ownerId || "", period_type: a.periodType || "", author_role_id: a.authorRoleId || "", stages: a.stages || [], status: a.status || "draft", created_at: a.createdAt || Date.now(), activated_at: a.activatedAt || null };
}
function rowToApprovalPath(r) {
  return { id: r.id, name: r.name || "", ownerKind: r.owner_kind || "", ownerId: r.owner_id || "", periodType: r.period_type || "", authorRoleId: r.author_role_id || "", stages: Array.isArray(r.stages) ? r.stages : [], status: r.status || "draft", createdAt: Number(r.created_at) || 0, activatedAt: r.activated_at ? Number(r.activated_at) : null };
}
function permLogToRow(e) { return { id: e.id, at: e.at, by_name: e.by || "", target_kind: e.targetKind || "", target_id: e.targetId || "", target_name: e.targetName || "", summary: e.summary || "" }; }
function rowToPermLog(r) { return { id: r.id, at: Number(r.at) || 0, by: r.by_name || "", targetKind: r.target_kind || "", targetId: r.target_id || "", targetName: r.target_name || "", summary: r.summary || "" }; }
function addPermLog(targetKind, targetId, targetName, summary) {
  const e = { id: uid("plog"), at: Date.now(), by: (S.currentUser && S.currentUser.name) || "", targetKind, targetId, targetName, summary };
  S.permLog = [e, ...(S.permLog || dataStore.getPermLog())].slice(0, 200);
  lsSet(PERM_LOG_KEY, JSON.stringify(S.permLog));
  if (dbConnected()) supabaseRequest("permission_log", { method: "POST", prefer: "return=minimal", body: JSON.stringify(permLogToRow(e)) }).then(dbWriteCheck("permission_log")).catch(() => {});
}
async function refreshReportTabsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("report_tabs");
  const res = await supabaseRequest("report_tabs?select=*");
  if (res.ok && Array.isArray(res.data)) { S.reportTabs = res.data.map(rowToReportTab).sort((a, b) => a.order - b.order); lsSet(REPORT_TABS_KEY, JSON.stringify(S.reportTabs)); syncReportTabCatalog(); }
}
async function refreshApprovalPathsFromDb() {
  if (!dbConnected()) return;
  await pendingSupabaseWrite("approval_paths");
  const res = await supabaseRequest("approval_paths?select=*");
  if (res.ok && Array.isArray(res.data)) { S.approvalPaths = res.data.map(rowToApprovalPath); lsSet(APPROVAL_PATHS_KEY, JSON.stringify(S.approvalPaths)); }
}
async function refreshPermLogFromDb() {
  if (!dbConnected()) return;
  const res = await supabaseRequest("permission_log?select=*&order=at.desc&limit=100");
  if (res.ok && Array.isArray(res.data)) { S.permLog = res.data.map(rowToPermLog); lsSet(PERM_LOG_KEY, JSON.stringify(S.permLog)); }
}
function permSummaryText(p) { return `${(p.pages || []).length} صفحة، ${(p.buttons || p.actions || []).length} زر`; }
function rolePermsEditorHtml(role) {
  const f = rolePermFormState();
  return `<div class="card" style="background:${GRAY_BG};margin:0 0 10px;">
    <div style="font-size:12.5px;font-weight:800;margin-bottom:4px;">صلاحيات الدور: ${esc(role.name)}</div>
    <div class="hint" style="margin-bottom:8px;">الصفحات = صلاحية العرض. إذا تُركت فارغة فلن يرى هذا الدور أي صفحة.</div>
    <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin-bottom:4px;">الصفحات (عرض)</div>
    ${pagesChecklistHtml(f.pages, "toggle-role-perm-page")}
    <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin:10px 0 4px;">أزرار الصفحات (التقارير والإرسال والمراجعة والاعتماد)</div>
    ${permButtonsChecklistHtml(f.buttons, "toggle-role-perm-button")}
    <div style="display:flex;gap:6px;margin-top:10px;">${pillBtn("تم", { icon: iconCheck(14, "#fff"), action: "role-perm-cancel" })}<span class="hint" style="margin:0;align-self:center;">كل تعليم ينحفظ على طول</span></div>
  </div>`;
}
function personPermsEditorHtml(person) {
  const f = rolePermFormState();
  const role = rolesList().find((r) => r.id === person.roleId);
  return `<div class="card" style="background:${GRAY_BG};margin:0 0 10px;">
    <div style="font-size:12.5px;font-weight:800;margin-bottom:4px;">استثناء خاص: ${esc(person.name)}</div>
    <div class="hint" style="margin-bottom:8px;">يُطبَّق بدل صلاحيات الدور (${esc(role ? role.name : "")}) لهذا الشخص فقط. «إلغاء الاستثناء» يعيده لصلاحيات دوره.</div>
    <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin-bottom:4px;">الصفحات (عرض)</div>
    ${pagesChecklistHtml(f.pages, "toggle-role-perm-page")}
    <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin:10px 0 4px;">أزرار الصفحات</div>
    ${permButtonsChecklistHtml(f.buttons, "toggle-role-perm-button")}
    <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">${pillBtn("تم", { icon: iconCheck(14, "#fff"), action: "role-perm-cancel" })}${pillBtn("إلغاء الاستثناء (العودة للدور)", { variant: "soft", action: "person-perm-clear", data: { id: person.id } })}${pillBtn("إغلاق", { variant: "ghost", action: "role-perm-cancel" })}</div>
  </div>`;
}
function rolesBulkCardHtml() {
  const b = S.ui.rolesBulk;
  if (!b) {
    return `<div class="card" style="margin-bottom:14px;">
      <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:4px;">تطبيق صلاحيات على كل الأدوار</div>
      <div class="hint" style="margin-bottom:10px;">حددي الصلاحيات مرة واحدة وتُطبَّق على كل الأدوار (${rolesList().length}). بعدها تعدّلين أي دور على حدة.</div>
      ${pillBtn("بدء", { variant: "ghost", action: "roles-bulk-start" })}
    </div>`;
  }
  const f = rolePermFormState();
  return `<div class="card" style="margin-bottom:14px;border:1.5px solid ${ROSE};">
    <div style="font-size:13px;font-weight:800;margin-bottom:6px;">تطبيق على كل الأدوار (${rolesList().length})</div>
    <div class="hint" style="margin-bottom:10px;">سيستبدل صلاحيات كل الأدوار الحالية بما تحددينه هنا. الاستثناءات الفردية للأشخاص لا تتأثر.</div>
    <div style="margin-bottom:8px;">${pillBtn("تعبئة بالصفحات الافتراضية السابقة (وحدة)", { variant: "soft", action: "roles-bulk-preset" })}</div>
    ${pagesChecklistHtml(f.pages, "toggle-role-perm-page")}
    <div style="margin:10px 0 4px;"></div>
    ${permButtonsChecklistHtml(f.buttons, "toggle-role-perm-button")}
    <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;align-items:center;">
      ${b.confirm ? `<span style="font-size:12px;font-weight:700;color:${DANGER};">متأكدة؟ سيُستبدل ${rolesList().length} دور.</span>${pillBtn("نعم، طبّقي", { action: "roles-bulk-apply" })}` : pillBtn("تطبيق على الكل", { action: "roles-bulk-confirm" })}
      ${pillBtn("إلغاء", { variant: "ghost", action: "roles-bulk-cancel" })}
    </div>
  </div>`;
}
function permLogCardHtml() {
  const log = (S.permLog || dataStore.getPermLog()).slice(0, 30);
  return `<div class="card" style="margin-top:18px;">
    <div style="font-size:15px;font-weight:800;margin-bottom:8px;">سجل التغييرات</div>
    ${log.length ? log.map((e) => `<div style="font-size:11.5px;padding:6px 0;border-top:1px solid ${BORDER};"><b>${esc(e.targetName)}</b> — ${esc(e.summary)}<div style="color:${SUBTLE};font-size:10.5px;margin-top:2px;">${esc(e.by || "")} • ${esc(new Date(e.at).toLocaleString("ar-SA"))}</div></div>`).join("") : `<div style="font-size:12px;color:${SUBTLE};">لا توجد تغييرات مسجّلة بعد.</div>`}
  </div>`;
}
// ---- المرحلة 3: صفحة «إعداد مسارات الاعتماد» (لمديرة النظام فقط) ----
// المسارات هنا إعدادات فقط: لا تؤثر على دورة التقرير الحالية ولا تعمل إلا بعد «تفعيل»
// صريح منها، ولا يوجد أي مسار افتراضي. 
function approvalPathsList() { return S.approvalPaths || (S.approvalPaths = dataStore.getApprovalPaths()); }
function apApproverLabel(v) {
  if (!v) return "—";
  if (v.indexOf("role:") === 0) { const r = rolesList().find((x) => x.id === v.slice(5)); return r ? "دور: " + r.name : "(دور محذوف)"; }
  if (v.indexOf(AP_TREE_UP) === 0) return apTreeUpLabel(Number(v.slice(AP_TREE_UP.length)) || 1);
  return "—";
}
// ===== بطاقة «المسار التلقائي من الهيكل» في «كل المسارات» =====
function apAutoPreview(unit) {
  const path = autoPathObj(), cfg = autoPathCfg();
  if (!path || !unit) return null;
  const holders = (rid) => rid ? personsList().filter((p) => p.status !== "disabled" && p.roleId === rid && apPersonInUnit(p, unit)) : [];
  const wr = apAutoWriterRanks(unit);
  const writerRank = wr.length ? Math.min(...wr) : -1;
  const writer = wr.length ? AUTO_RANKS.filter((r) => wr.includes(r.rank)).map((r) => r.label + " (" + holders(cfg[r.k]).map((p) => p.name).join("، ") + ")").join(" أو ") : "حساب الوحدة نفسه (ما فيه أشخاص بأدوار الوحدة)";
  const uSkip = apUnitSkipList(unit.id);
  const rows = [];
  (path.stages || []).filter((st) => st.unitRank).forEach((st) => {
    const h = holders(String(st.approver).slice(5));
    const r = { what: "stage", id: st.id, pk: st.id, name: st.name, sub: "داخل الوحدة — " + (h.length ? h.map((p) => p.name).join("، ") : "ما فيه أحد بهذا الدور") };
    if (st.disabled) { r.state = "all"; r.why = "متخطّاة لكل الوحدات"; }
    else if (!h.length) { r.state = "auto"; r.why = "تُتخطّى تلقائيًا — ما فيه أحد"; }
    else if (st.unitRank <= writerRank) { r.state = "auto"; r.why = st.unitRank === writerRank ? "تُتخطّى — هي اللي تكتب التقرير" : "تُتخطّى — أقل من اللي تكتب"; }
    else if (wr.includes(st.unitRank)) { r.state = "on"; r.why = "لو هي اللي كتبت التقرير ما يمر عليها"; r.whyOk = true; }
    else if (uSkip.includes(AUTO_PATH_ID + ":" + st.id)) { r.state = "unit"; r.why = "متخطّاة لهذه الوحدة"; }
    else if (!r.state) r.state = "on";
    rows.push(r);
  });
  let l = olActive().find((x) => x.linkKind === "unit" && x.linkId === unit.id);
  const glob = new Set(cfg.skipLevels || []);
  let n = 0, guard = 0;
  if (!l) rows.push({ what: "none", name: "الوحدة مو موجودة في الهيكل", sub: "حطيها في مكانها بالهيكل عشان يطلع لها اللي فوقها", state: "auto", why: "" });
  while (l && (l = olFind(l.parentId)) && guard++ < 50 && n < AUTO_TREE_MAX) {
    const acc = olLevelHasAccount(l);
    const lk = olLinkedEntity(l);
    const r = { what: "lvl", id: l.id, pk: "lvl:" + l.id, name: l.name, sub: "في الهيكل — " + (l.loginId ? "دخول خاص" : lk ? "حساب " + lk.kind + ": " + lk.name : "تنظيم فقط") };
    if (!acc) { r.state = "auto"; r.why = "ما له دخول — ما يمر عليه"; r.what = "none"; }
    else { n++; if (glob.has(l.id)) { r.state = "all"; r.why = "متخطّى لكل وحداته"; } else if (uSkip.includes(AUTO_PATH_ID + ":lvl:" + l.id)) { r.state = "unit"; r.why = "متخطّى لهذه الوحدة"; } else r.state = "on"; }
    rows.push(r);
  }
  return { writer, rows };
}
function apAutoCardHtml() {
  const path = autoPathObj(), cfg = autoPathCfg();
  const active = !!path && path.status === "active";
  const roles = rolesList().filter((r) => r.status !== "disabled");
  const guess = apAutoGuessRoles();
  const roleSel = (k, label) => { const cur = path ? (cfg[k] || "") : (cfg[k] || guess[k]); return `<div class="field" style="flex:1 1 160px;margin:0;"><label class="field-label" for="ap-auto-${k}">${label}</label><select class="input" id="ap-auto-${k}"><option value="">— ما فيه —</option>${roles.map((r) => `<option value="${esc(r.id)}" ${cur === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}</select></div>`; };
  const units = (S.units || []).filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report");
  const uid0 = S.ui.apAutoUnit && units.some((u) => u.id === S.ui.apAutoUnit) ? S.ui.apAutoUnit : (units[0] || {}).id;
  const unit = units.find((u) => u.id === uid0);
  const pv = path ? apAutoPreview(unit) : null;
  let num = 0;
  const btn = (r, scope, label, on) => `<button type="button" class="pill-btn pill-ghost" style="padding:4px 10px;font-size:11px;${on ? `color:${GREEN};border-color:${GREEN};` : `color:${DANGER};`}" data-action="ap-auto-skip" data-what="${r.what}" data-id="${esc(r.id)}" data-scope="${scope}" data-unit="${esc(uid0 || "")}" data-on="${on ? 0 : 1}">${label}</button>`;
  const permChips = (r) => {
    const pm = apAutoPerm(r.pk);
    const chip = (on, color, label, data) => `<button type="button" data-action="ap-auto-perm" data-pk="${esc(r.pk)}" ${data} style="min-height:34px;padding:0 10px;border-radius:999px;font-size:11.5px;cursor:pointer;font-family:inherit;font-weight:${on ? 800 : 500};border:1px solid ${on ? color : BORDER};background:${on ? color : "#fff"};color:${on ? "#fff" : INK};">${on ? "✓ " : ""}${esc(label)}</button>`;
    return `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;width:100%;">
      ${chip(pm.mode === "send", "#8B4A73", "تراجع وترسل", `data-opt="mode" data-val="send"`)}${chip(pm.mode === "approve", GREEN, "تعتمد", `data-opt="mode" data-val="approve"`)}
      ${AUTO_PERM_OPTS.filter((o) => o.k !== "final" || pm.mode === "approve").map((o) => chip(!!pm[o.k], o.color, o.label, `data-opt="${o.k}"`)).join("")}</div>`;
  };
  const rowHtml = (r) => {
    const off = r.state !== "on";
    const info = !off && r.pk && apAutoPerm(r.pk).info;
    if (!off && !info) num++;
    const acts = r.what === "none" || r.state === "auto" ? "" : r.state === "on"
      ? `${btn(r, "unit", "تخطّي لهذه الوحدة", false)}${btn(r, "all", r.what === "lvl" ? "تخطّي لكل وحداته" : "تخطّي لكل الوحدات", false)}`
      : btn(r, r.state, "رجّعيها", true);
    return `<div style="display:flex;gap:10px;align-items:center;padding:9px 10px;border-radius:12px;margin-bottom:6px;border:1px ${off ? "dashed #d9c9cf" : "solid " + BORDER};background:${off ? "#faf6f7" : "#fff"};flex-wrap:wrap;">
      <span style="width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;background:${off ? "#f1ecee" : "#f3e6ea"};color:${off ? "#a99" : ROSE};">${off ? "–" : info ? "ⓘ" : num}</span>
      <div style="flex:1 1 200px;min-width:0;"><div style="font-size:13px;font-weight:800;${off ? "color:#a3949a;text-decoration:line-through;" : ""}">${esc(r.name)}${info ? ` ${badgeHtml("للعلم فقط", SUBTLE, GRAY_BG)}` : ""}</div><div style="font-size:11px;color:${SUBTLE};">${esc(r.sub)}</div>${r.why ? `<div style="font-size:11px;font-weight:700;color:${r.whyOk ? SUBTLE : r.state === "auto" ? "#7a4d16" : DANGER};">${esc(r.why)}</div>` : ""}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${acts}</div>
      ${r.state === "on" && r.pk ? permChips(r) : ""}</div>`;
  };
  return `<div class="card card-lg" style="margin-bottom:14px;border:1.5px solid ${active ? GREEN : BORDER};">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap;">
      <div><div style="font-size:15px;font-weight:800;">المسار التلقائي من الهيكل ${badgeHtml(active ? "مفعّل" : path ? "موقف" : "غير مفعّل", active ? GREEN : SUBTLE, active ? GREEN_BG : GRAY_BG)}</div>
      <div style="font-size:12px;color:#6f5f66;margin-top:4px;line-height:1.9;">كل وحدة يطلع لها مسارها لحاله: أدوار الوحدة (مساعدة ← رئيسة) ثم كل مستوى له دخول فوقها في الهيكل باسمه.<br>اللي تكتب = أصغر دور موجود بالوحدة. المرحلة اللي ما فيها أحد تُتخطّى لحالها. المسار الخاص بجهة معيّنة (لو سويتيه) يتقدّم عليه.</div></div>
      ${pillBtn(active ? "إيقاف" : "تفعيل", { variant: active ? "ghost" : "primary", action: "ap-auto-toggle" })}
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:12px;background:${GRAY_BG};border-radius:12px;padding:10px 12px;">
      ${roleSel("idr", "دور الإدارية")}${roleSel("ast", "دور المساعدة")}${roleSel("head", "دور الرئيسة")}
      ${pillBtn("حفظ الأدوار", { variant: "soft", action: "ap-auto-roles-save" })}
    </div>
    ${path ? `<div style="margin-top:14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"><span style="font-size:13px;font-weight:800;">مين يكتب التقرير؟</span>
      ${AUTO_RANKS.map((r) => { const w = cfg.writers || { idr: true, ast: true, head: true }; const on = w[r.k] !== false; return `<button type="button" data-action="ap-auto-writer" data-k="${r.k}" style="min-height:38px;padding:0 14px;border-radius:999px;font-size:12.5px;cursor:pointer;font-family:inherit;font-weight:${on ? 800 : 500};border:1px solid ${on ? ROSE : BORDER};background:${on ? ROSE : "#fff"};color:${on ? "#fff" : INK};">${on ? "✓ " : "＋ "}${r.label}</button>`; }).join("")}
      <span style="font-size:11.5px;color:${SUBTLE};">اللي تكتب ما يمر التقرير عليها ولا على اللي أقل منها. لو ولا وحدة منهن موجودة بالوحدة يكتب أصغر دور موجود.</span></div>
    <details style="margin-top:10px;"><summary style="font-size:12.5px;font-weight:800;color:${ROSE};cursor:pointer;">وش معنى كل خيار؟</summary>
      <div style="display:flex;flex-direction:column;gap:4px;margin-top:8px;font-size:12px;line-height:1.8;"><div><b>تراجع وترسل:</b> تشوفه وترسله للي بعدها بدون اعتماد.</div><div><b>تعتمد:</b> تعتمد وترسل — ولو هي آخر مرحلة يصير «معتمد».</div>${AUTO_PERM_OPTS.map((o) => `<div><b>${esc(o.label)}:</b> ${esc(o.t)}</div>`).join("")}</div></details>
    <div style="margin-top:14px;">
      <div style="font-size:11.5px;color:${SUBTLE};margin-bottom:6px;">الخيارات تحت كل مرحلة تنطبق عليها في كل الوحدات (دور الوحدة لكل الوحدات، والمستوى لكل وحداته).</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;"><span style="font-size:13px;font-weight:800;">شوفي مسار وحدة:</span>
        <select class="input" style="width:auto;flex:1 1 220px;" data-action="ap-auto-unit">${units.map((u) => `<option value="${esc(u.id)}" ${u.id === uid0 ? "selected" : ""}>${esc(u.name)}</option>`).join("")}</select></div>
      ${pv ? `<div style="display:flex;gap:10px;align-items:center;padding:10px 12px;border-radius:12px;background:${ROSE};color:#fff;margin-bottom:8px;"><span>✎</span><div><div style="font-size:11px;opacity:.85;">يكتب التقرير</div><div style="font-size:13.5px;font-weight:800;">${esc(pv.writer)}</div></div></div>
        ${pv.rows.map(rowHtml).join("")}
        <div style="padding:9px 12px;border-radius:12px;background:${GREEN_BG};color:${GREEN};font-size:13px;font-weight:800;">✓ معتمد — بعد آخر مرحلة</div>` : `<div class="hint">ما فيه وحدات.</div>`}
    </div>` : `<div class="hint" style="margin-top:10px;">اختاري الأدوار ثم اضغطي «تفعيل».</div>`}
  </div>`;
}
function renderApprovalPathsSetup() {
  return apAutoCardHtml();
}
function renderRolesManage() {
  const ui = S.ui;
  const roles = rolesList(), persons = personsList();
  const editRole = ui.roleEditId ? roles.find((r) => r.id === ui.roleEditId) : null;
  const editPerson = ui.personEditId ? persons.find((p) => p.id === ui.personEditId) : null;
  const units = S.units || [];
  // نفس قائمة الهيكل: وحدات ومراكز حقيقية فقط (بدون مديرة النظام/الإدارة العليا/تقارير ذاتية)
  const realUnits = units.filter((u) => u.role !== "admin" && u.role !== "executive" && u.role !== "self_report");
  const unitName = (id) => { const u = units.find((x) => x.id === id); return u ? u.name : "(جهة محذوفة)"; };
  const roleForm = (ui.roleShowAdd || editRole) ? `<div class="card" style="background:${GRAY_BG};margin-bottom:12px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;">
        <input class="input" id="role-name" placeholder="اسم الدور (مثال: رئيسة الوحدة)" value="${esc(editRole ? editRole.name : "")}" />
        <input class="input" id="role-pin" inputmode="numeric" placeholder="رمز PIN (اختياري)" value="${esc(editRole ? editRole.pin : "")}" />
        <input class="input" id="role-desc" placeholder="وصف (اختياري)" value="${esc(editRole ? editRole.description : "")}" />
      </div>
      ${ui.roleError ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-top:8px;">${esc(ui.roleError)}</div>` : ""}
      <div style="display:flex;gap:6px;margin-top:10px;">${pillBtn(editRole ? "حفظ" : "إضافة", { action: "role-save" })}${pillBtn("إلغاء", { variant: "ghost", action: "role-cancel" })}</div>
    </div>` : (ui.roleError ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-bottom:8px;">${esc(ui.roleError)}</div>` : "");
  const roleRows = roles.map((r) => (ui.rolePermEditId === r.id ? rolePermsEditorHtml(r) : "") + `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;">
      <div><div style="font-size:13.5px;font-weight:800;">${esc(r.name)}</div>
      <div style="font-size:11px;color:${SUBTLE};margin-top:2px;">${r.pin ? "برمز" : "بدون رمز"}${r.description ? " • " + esc(r.description) : ""} • ${persons.filter((p) => p.roleId === r.id).length} شخص • الصلاحيات: ${rolePermsOf(r).pages.length || rolePermsOf(r).actions.length || rolePermsOf(r).buttons.length ? esc(permSummaryText(rolePermsOf(r))) : "ترث صلاحيات الجهة"}</div></div>
      <div style="display:flex;gap:6px;align-items:center;">${ui.roleConfirmDeleteId === r.id
        ? `${pillBtn("تأكيد الحذف", { variant: "danger", action: "role-delete", data: { id: r.id } })}${pillBtn("تراجع", { variant: "ghost", action: "role-delete-cancel" })}`
        : `<button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="role-perm-edit" data-id="${esc(r.id)}" title="الصلاحيات">${iconKey(13, INK)}</button>
           <button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="role-edit" data-id="${esc(r.id)}" title="تعديل">${iconPencil(13, INK)}</button>
           <button class="icon-btn" style="width:30px;height:30px;background:${DANGER_BG}" data-action="role-delete-ask" data-id="${esc(r.id)}" title="حذف">${iconTrash(13, DANGER)}</button>`}</div>
    </div>`).join("") || `<div style="font-size:12px;color:${SUBTLE};padding:8px 2px;">لا توجد أدوار بعد.</div>`;
  const personForm = (ui.personShowAdd || editPerson) ? `<div class="card" style="background:${GRAY_BG};margin-bottom:12px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;">
        <input class="input" id="person-name" placeholder="اسم الشخص" value="${esc(editPerson ? editPerson.name : "")}" />
        <select class="input" id="person-owner"><option value="">— الجهة (وحدة/مركز) —</option>${[["وحدات", realUnits.filter((u) => u.role !== "center")], ["مراكز", realUnits.filter((u) => u.role === "center")]].filter((g) => g[1].length).map((g) => `<optgroup label="${g[0]}">${g[1].map((u) => `<option value="${esc(u.id)}" ${editPerson && editPerson.ownerId === u.id ? "selected" : ""}>${esc(u.name)}</option>`).join("")}</optgroup>`).join("")}</select>
        <select class="input" id="person-role"><option value="">— الدور —</option>${roles.map((r) => `<option value="${esc(r.id)}" ${editPerson && editPerson.roleId === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}</select>
        <input class="input" id="person-pin" inputmode="numeric" placeholder="رمز خاص بالشخص (اختياري)" value="${esc(editPerson ? editPerson.pin : "")}" />
      </div>
      ${ui.personError ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-top:8px;">${esc(ui.personError)}</div>` : ""}
      <div style="display:flex;gap:6px;margin-top:10px;">${pillBtn(editPerson ? "حفظ" : "إضافة", { action: "person-save" })}${pillBtn("إلغاء", { variant: "ghost", action: "person-cancel" })}</div>
    </div>` : "";
  const personRows = persons.map((p) => {
    const r = roles.find((x) => x.id === p.roleId);
    const on = p.status !== "disabled";
    return (ui.personPermEditId === p.id ? personPermsEditorHtml(p) : "") + `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;opacity:${on ? 1 : 0.6};">
      <div><div style="font-size:13.5px;font-weight:800;">${esc(p.name)}</div>
      <div style="font-size:11px;color:${SUBTLE};margin-top:2px;">${esc(unitName(p.ownerId))} • ${esc(r ? r.name : "(بلا دور)")}${personEffectivePin(p) ? " • برمز" : " • بدون رمز"}${(p.permsOverride && (Array.isArray(p.permsOverride.pages) || Array.isArray(p.permsOverride.actions))) ? " • باستثناء خاص" : ""}${on ? "" : " • معطّل"}</div></div>
      <div style="display:flex;gap:6px;align-items:center;">${ui.personConfirmDeleteId === p.id
        ? `${pillBtn("تأكيد الحذف", { variant: "danger", action: "person-delete", data: { id: p.id } })}${pillBtn("تراجع", { variant: "ghost", action: "person-delete-cancel" })}`
        : `<button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="person-perm-edit" data-id="${esc(p.id)}" title="استثناء الصلاحيات">${iconKey(13, INK)}</button>
           <button class="icon-btn" style="width:30px;height:30px;border:1px solid ${BORDER}" data-action="person-edit" data-id="${esc(p.id)}" title="تعديل">${iconPencil(13, INK)}</button>
           <button class="icon-btn" style="width:30px;height:30px;background:${on ? DANGER_BG : GREEN_BG}" data-action="person-toggle" data-id="${esc(p.id)}" title="${on ? "تعطيل" : "تفعيل"}">${iconPower(13, on ? DANGER : GREEN)}</button>
           <button class="icon-btn" style="width:30px;height:30px;background:${DANGER_BG}" data-action="person-delete-ask" data-id="${esc(p.id)}" title="حذف">${iconTrash(13, DANGER)}</button>`}</div>
    </div>`;
  }).join("") || `<div style="font-size:12px;color:${SUBTLE};padding:8px 2px;">لا يوجد أشخاص بعد.</div>`;
  return `
    ${rolesBulkCardHtml()}
    <div class="card" style="margin-bottom:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px;">
        <div style="font-size:15px;font-weight:800;">الأدوار</div>${pillBtn("إضافة دور", { icon: iconPlus(15, "#fff"), action: "role-show-add" })}
      </div>
      <div style="font-size:11px;color:${SUBTLE};margin-bottom:12px;">الدور يحدد واجهة الدخول، والرمز (PIN) اختياري تحددينه أنتِ لكل دور أو لكل شخص (رمز الشخص يغلب رمز الدور).</div>
      ${roleForm}${roleRows}
    </div>
    <div class="card" style="background:${BLUE_BG};border:1px solid #cfe0f5;">
      <div style="font-size:12px;color:#3a5a85;">الأشخاص يُدارون من «الهيكل»: اختاري الجهة ← تبويب «الأشخاص». (${personsList().length} شخص مسجّل حاليًا)</div>
    </div>
    ${permLogCardHtml()}
  `;
}

// الصفحات التي كانت تظهر بالأشرطة الثابتة القديمة — تعبئة جاهزة (تقدرين تعدّلينها)
const BULK_PERM_PRESETS = {
  unit: ["dashboard", "unit-report", "unit-reports", "unit-notifications", "unit-all-reports"],
  center: ["dashboard", "unit-report", "unit-reports", "unit-notifications"],
  department: ["dashboard", "department-curation", "all-reports", "unit-report", "unit-reports", "unit-settings"],
  office: ["dashboard", "office-archive", "all-reports", "office-summary", "department-curation", "departments-list"],
};
/* =============================== Indicators management ======================= */
function indicatorDefFieldsHtml(stateKey, values) {
  values = values || {};
  const opt = (list, field) => list.map((o) => `<option value="${esc(o)}" ${o === values[field] ? "selected" : ""}>${esc(o)}</option>`).join("");
  return `
    ${fieldWrap("اسم المؤشر", true, `<input class="input" data-newind="${esc(stateKey)}" data-newind-field="name" value="${esc(values.name || "")}" placeholder="مثال: نسبة إنجاز الاختبارات" />`)}
    ${fieldWrap("تصنيف المؤشر", `<select class="input" data-newind="${esc(stateKey)}" data-newind-field="category"><option value="">اختاري</option>${opt(INDICATOR_CATEGORIES, "category")}</select>`)}
    ${fieldWrap("اتجاه المؤشر", `<select class="input" data-newind="${esc(stateKey)}" data-newind-field="direction"><option value="">اختاري</option>${opt(INDICATOR_DIRECTIONS, "direction")}</select>`)}
    ${fieldWrap("طبيعة المؤشر", `<div class="radio-group">${INDICATOR_NATURE.map((o) => `<button type="button" class="radio-pill ${o === values.nature ? "active" : ""}" data-action="set-newind-radio" data-newind="${esc(stateKey)}" data-newind-field="nature" data-value="${esc(o)}">${esc(o)}</button>`).join("")}</div>`)}
    ${fieldWrap("دورية القياس", `<select class="input" data-newind="${esc(stateKey)}" data-newind-field="frequency"><option value="">اختاري</option>${opt(MEASUREMENT_FREQUENCIES, "frequency")}</select>`)}
    ${fieldWrap("وحدة القياس", `<select class="input" data-newind="${esc(stateKey)}" data-newind-field="unit"><option value="">اختاري</option>${opt(MEASUREMENT_UNITS, "unit")}</select>`)}
    ${fieldWrap("المستهدف", true, `<input class="input" type="number" data-newind="${esc(stateKey)}" data-newind-field="target" value="${esc(values.target ?? "")}" placeholder="0" />`)}
    ${fieldWrap("مصدر البيانات", `<input class="input" data-newind="${esc(stateKey)}" data-newind-field="dataSource" value="${esc(values.dataSource || "")}" placeholder="مثال: نظام الاختبارات الإلكتروني" />`)}
    ${fieldWrap("طريقة الحساب", `<textarea class="input" data-newind="${esc(stateKey)}" data-newind-field="calculationMethod" style="min-height:60px">${esc(values.calculationMethod || "")}</textarea>`)}
  `;
}
function indicatorFormState(stateKey) { return S.ui[`newIndicatorForm_${stateKey}`] || (S.ui[`newIndicatorForm_${stateKey}`] = {}); }
function readIndicatorDefForm(stateKey) {
  const form = S.ui[`newIndicatorForm_${stateKey}`] || {};
  return {
    name: form.name || "", category: form.category || "", direction: form.direction || "", nature: form.nature || "",
    frequency: form.frequency || "", unit: form.unit || "", target: form.target ?? "", dataSource: form.dataSource || "", calculationMethod: form.calculationMethod || "",
  };
}

function renderIndicatorsManage() {
  const ui = S.ui;
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "إدارة مؤشرات الأداء", subtitle: "عرّفي بيانات المؤشر مرة واحدة — لن تحتاج إعادة كتابتها داخل التقارير", backAction: "nav-back-admin" })}

    <div class="card" style="margin-bottom:22px;">
      <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:12px;">إضافة مؤشر جديد</div>
      ${indicatorDefFieldsHtml("new-ind", indicatorFormState("new-ind"))}
      ${pillBtn("إضافة مؤشر", { icon: iconPlus(15, "#fff"), action: "add-indicator-def" })}
    </div>

    <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:10px;">المؤشرات المعتمدة (${S.indicatorDefinitions.length})</div>
    ${S.indicatorDefinitions.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px 20px;border-style:dashed;">لا توجد مؤشرات معتمدة بعد — أضيفي أول مؤشر من الأعلى، أو أضيفيها لاحقًا من داخل نموذج التقرير.</div>` :
      `<div style="display:flex;flex-direction:column;gap:8px;">${S.indicatorDefinitions.map((def) => indicatorDefRowHtml(def)).join("")}</div>`}
  </div></div>`;
}

function indicatorDefRowHtml(def) {
  const editing = S.ui.editingIndicatorId === def.id;
  const confirming = S.ui.confirmDeleteIndicatorId === def.id;
  if (confirming) {
    return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
      <span style="font-size:12px;font-weight:700;">حذف "${esc(def.name)}" نهائيًا؟</span>
      <div style="display:flex;gap:6px;">${pillBtn("حذف", { variant: "danger", action: "delete-indicator-def", data: { id: def.id } })}${pillBtn("تراجع", { variant: "ghost", action: "cancel-confirm-indicator" })}</div>
    </div>`;
  }
  if (editing) {
    return `<div class="card">${indicatorDefFieldsHtml("edit-ind", indicatorFormState("edit-ind"))}
      <div style="display:flex;gap:6px;">${pillBtn("حفظ", { action: "save-indicator-edit", data: { id: def.id } })}${pillBtn("إلغاء", { variant: "ghost", action: "cancel-indicator-edit" })}</div>
    </div>`;
  }
  const details = [def.category, def.direction, def.frequency, def.unit].filter(Boolean).join(" · ") || "بدون تفاصيل إضافية";
  const targetTxt = def.target !== "" && def.target != null ? ` · المستهدف: ${def.target}` : "";
  return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
    <div style="display:flex;align-items:center;gap:10px;min-width:0;">
      <div style="width:34px;height:34px;border-radius:10px;background:${GOLD_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconGauge(GOLD, 16)}</div>
      <div style="min-width:0;"><div style="font-size:13.5px;font-weight:700;">${esc(def.name)}</div><div style="font-size:10.5px;color:${SUBTLE};margin-top:2px;">${esc(details + targetTxt)}</div></div>
    </div>
    <div style="display:flex;gap:6px;flex-shrink:0;">
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="start-indicator-edit" data-id="${esc(def.id)}" title="تعديل">${iconPencil(14, INK)}</button>
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="confirm-delete-indicator" data-id="${esc(def.id)}" title="حذف">${iconTrash(14, DANGER)}</button>
    </div>
  </div>`;
}

/* =============================== Goals management ============================= */
function goalParentOptionsHtml(cur) {
  return `<option value="">— يتبع للهدف الاستراتيجي —</option>${(S.goalsDefinitions.strategic || []).map((x) => `<option value="${esc(x.id)}" ${cur === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}`;
}
// الأهداف التشغيلية مجمّعة تحت أهدافها الاستراتيجية؛ غير المربوطة آخرًا (تظهر عند التعبئة تحت كل الأهداف)
function goalsGroupedHtml(strategic, operational) {
  const valid = new Set(strategic.map((x) => x.id));
  const groups = strategic.map((sg) => [sg.name, operational.filter((o) => o.parentId === sg.id)]).filter(([, l]) => l.length);
  const loose = operational.filter((o) => !o.parentId || !valid.has(o.parentId));
  if (loose.length) groups.push(["غير مربوطة بهدف استراتيجي (تظهر تحت كل الأهداف)", loose]);
  return groups.map(([title, list]) => `<div>
    <div style="font-size:12px;font-weight:800;color:${INK};margin-bottom:6px;">${esc(title)}</div>
    <div style="display:flex;flex-direction:column;gap:8px;padding-inline-start:12px;border-inline-start:2px solid ${BORDER};">${list.map((g) => goalsListRowHtml("Operational", g)).join("")}</div>
  </div>`).join("");
}
function goalsListRowHtml(kind, g) {
  const editing = S.ui[`editing${kind}Id`] === g.id;
  const confirming = S.ui[`confirm${kind}DeleteId`] === g.id;
  if (confirming) {
    return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
      <span style="font-size:12px;font-weight:700;">حذف "${esc(g.name)}" نهائيًا؟</span>
      <div style="display:flex;gap:6px;">${pillBtn("حذف", { variant: "danger", action: `delete-${kind}-goal`, data: { id: g.id } })}${pillBtn("تراجع", { variant: "ghost", action: `cancel-confirm-${kind}-goal` })}</div>
    </div>`;
  }
  if (editing) {
    return `<div class="card" style="display:flex;gap:6px;">
      <input class="input" id="edit-${kind}-goal-name" style="flex:1;" value="${esc(S.ui[`edit${kind}Value`] || "")}" />
      <button data-action="save-${kind}-goal-edit" data-id="${esc(g.id)}" style="background:${GREEN_BG};border:none;border-radius:8px;padding:0 10px;cursor:pointer;">${iconCheck(16, GREEN)}</button>
      <button data-action="cancel-${kind}-goal-edit" style="background:${DANGER_BG};border:none;border-radius:8px;padding:0 10px;cursor:pointer;">${iconX(16, DANGER)}</button>
    </div>`;
  }
  return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
    <div style="font-size:13.5px;font-weight:700;flex:1;min-width:160px;">${esc(g.name)}</div>
    ${kind === "Operational" ? `<select class="input" data-action="goal-parent-set" data-id="${esc(g.id)}" style="width:auto;min-width:170px;max-width:260px;padding:6px 10px;font-size:12px;">${goalParentOptionsHtml(g.parentId || "")}</select>` : ""}
    <div style="display:flex;gap:6px;">
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="start-${kind}-goal-edit" data-id="${esc(g.id)}" data-name="${esc(g.name)}" title="تعديل">${iconPencil(14, INK)}</button>
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="confirm-delete-${kind}-goal" data-id="${esc(g.id)}" title="حذف">${iconTrash(14, DANGER)}</button>
    </div>
  </div>`;
}

function renderGoalsManage() {
  const strategic = S.goalsDefinitions.strategic || [], operational = S.goalsDefinitions.operational || [];
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "إدارة الأهداف والمستهدفات", subtitle: "عرّفي الأهداف الاستراتيجية والتشغيلية المعتمدة", backAction: "nav-back-admin" })}

    <div class="card" style="margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <div style="flex:1;min-width:220px;">
        <div style="font-size:13px;font-weight:800;">إضافة أهداف من صفحة تعبئة التقرير</div>
        <div class="hint" style="margin:2px 0 0;">${goalAddFromReportOn() ? "مفعّلة: الموظفة تقدر تضيف هدفًا غير موجود وهي تعبّي «الأهداف والمستهدفات»، ويُضاف هنا للقائمة العامة." : "متوقفة: الأهداف تُضاف من هذه الصفحة فقط."}</div>
      </div>
      ${pillBtn(goalAddFromReportOn() ? "إيقاف" : "تفعيل", { variant: goalAddFromReportOn() ? "ghost" : "primary", action: "goal-add-toggle" })}
    </div>

    <div style="font-size:13px;font-weight:800;color:${ROSE};margin:6px 0 10px;">الأهداف الاستراتيجية</div>
    <div class="card" style="margin-bottom:14px;"><div style="display:flex;gap:8px;">
      <input class="input" id="new-strategic-goal" style="flex:1;" placeholder="نص الهدف الاستراتيجي" />
      ${pillBtn("إضافة", { icon: iconPlus(15, "#fff"), action: "add-strategic-goal" })}
    </div></div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
      ${strategic.length === 0 ? `<div style="font-size:12px;color:${SUBTLE}">لا توجد أهداف استراتيجية بعد.</div>` : strategic.map((g) => goalsListRowHtml("Strategic", g)).join("")}
    </div>

    <div style="font-size:13px;font-weight:800;color:${ROSE};margin:6px 0 10px;">الأهداف التشغيلية</div>
    <div class="card" style="margin-bottom:14px;"><div style="display:flex;gap:8px;flex-wrap:wrap;">
      <input class="input" id="new-operational-goal" style="flex:2;min-width:200px;" placeholder="نص الهدف التشغيلي" />
      <select class="input" id="new-operational-parent" style="flex:1;min-width:180px;">${goalParentOptionsHtml(S.ui.newOpParent || "")}</select>
      ${pillBtn("إضافة", { icon: iconPlus(15, "#fff"), action: "add-operational-goal" })}
    </div></div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${operational.length === 0 ? `<div style="font-size:12px;color:${SUBTLE}">لا توجد أهداف تشغيلية بعد.</div>` : goalsGroupedHtml(strategic, operational)}
    </div>
  </div></div>`;
}

/* =============================== Report sections management =================== */
function sortedSectionDefs() {
  return (S.reportSectionDefs || []).slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
function sectionDefRowHtml(def, index, total) {
  const editing = S.ui.editingSectionId === def.id;
  const enabled = def.enabled !== false;
  const isCustom = !DEFAULT_SECTIONS.some((s) => s.id === def.id);
  if (editing) {
    return `<div class="card" style="display:flex;gap:6px;">
      <input class="input" id="edit-section-name" style="flex:1;" value="${esc(S.ui.editSectionValue || "")}" />
      <button data-action="save-section-edit" data-id="${esc(def.id)}" style="background:${GREEN_BG};border:none;border-radius:8px;padding:0 10px;cursor:pointer;">${iconCheck(16, GREEN)}</button>
      <button data-action="cancel-section-edit" style="background:${DANGER_BG};border:none;border-radius:8px;padding:0 10px;cursor:pointer;">${iconX(16, DANGER)}</button>
    </div>`;
  }
  if (S.ui.secDelAsk === def.id) {
    const used = (S.units || []).reduce((n, u) => n + ensureUnitReportsLoaded(u.id).filter((r) => sectionHasData(r, def.id)).length, 0);
    return `<div class="card" style="border:1.5px solid ${DANGER};display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;font-weight:800;">حذف قسم «${esc(def.label)}»؟</div>
      <div style="font-size:12px;color:#6f5f66;line-height:1.8;">${used ? `فيه <b>${used}</b> تقرير كُتب فيه هذا القسم — ما يُحذف شيء من التقارير، لكن ما يظهر هذا القسم فيها بعد الحذف.` : "ما فيه تقارير كُتب فيها هذا القسم."} يُحذف معه تعريف حقوله.</div>
      <div style="display:flex;gap:6px;">${pillBtn("نعم، احذفيه", { variant: "danger", action: "delete-report-section", data: { id: def.id } })}${pillBtn("إلغاء", { variant: "ghost", action: "delete-report-section-cancel" })}</div>
    </div>`;
  }
  return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;${enabled ? "" : "opacity:.55;"}">
    <div style="display:flex;align-items:center;gap:10px;min-width:0;">
      <div style="width:34px;height:34px;border-radius:10px;background:${GOLD_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconLayers(16, GOLD)}</div>
      <div style="min-width:0;">
        <div style="font-size:13.5px;font-weight:700;">${esc(def.label)}${!enabled ? ` <span style="font-size:10px;color:${SUBTLE};font-weight:600;">(معطّل)</span>` : ""}</div>
        <div style="font-size:10.5px;color:${SUBTLE};margin-top:2px;">${isCustom ? "قسم مضاف — يستخدم حقل نصي عام حتى يُصمَّم له نموذج خاص" : "قسم أساسي بنموذج مخصص"}</div>
      </div>
    </div>
    <div style="display:flex;gap:6px;flex-shrink:0;">
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="move-report-section" data-id="${esc(def.id)}" data-dir="up" ${index === 0 ? "disabled" : ""} title="نقل لأعلى">${iconChevronUp(14, INK)}</button>
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="move-report-section" data-id="${esc(def.id)}" data-dir="down" ${index === total - 1 ? "disabled" : ""} title="نقل لأسفل">${iconChevronDown(14, INK)}</button>
      <button class="icon-btn" style="width:32px;height:32px;border:1px solid ${BORDER}" data-action="start-section-edit" data-id="${esc(def.id)}" data-name="${esc(def.label)}" title="تعديل الاسم">${iconPencil(14, INK)}</button>
      ${isCustom ? `<button class="icon-btn" style="width:32px;height:32px;background:${DANGER_BG}" data-action="delete-report-section-ask" data-id="${esc(def.id)}" title="حذف القسم" aria-label="حذف القسم">${iconTrash(14, DANGER)}</button>` : ""}
      <button class="icon-btn" style="width:32px;height:32px;background:${enabled ? DANGER_BG : GREEN_BG}" data-action="toggle-report-section" data-id="${esc(def.id)}" title="${enabled ? "تعطيل" : "تفعيل"}">${iconPower(14, enabled ? DANGER : GREEN)}</button>
    </div>
  </div>`;
}
// ---- إدارة أزرار صفحة التقارير (تُحفظ بجدول report_tabs) ----
function rtMaterialize() { return reportTabsList().map((t) => ({ ...t, statuses: [...(t.statuses || [])], adminStatuses: [...(t.adminStatuses || [])] })); }
function rtSave(list) {
  S.reportTabs = list;
  dataStore.saveReportTabs(list);
  syncReportTabCatalog();
}
function rtStatusLabel(id) { const o = REPORT_STATUS_OPTIONS.find((x) => x[0] === id); return o ? o[1] : id; }
function rtCapture() {
  const d = S.ui.rtEdit && S.ui.rtEdit.draft; if (!d) return;
  const el = document.getElementById("rt-label"); if (el) d.label = el.value;
  const en = document.getElementById("rt-enabled"); if (en) d.enabled = !!en.checked;
}
function rtEditorHtml() {
  const ed = S.ui.rtEdit; if (!ed) return "";
  const d = ed.draft;
  return `
  <div class="card" style="margin-bottom:18px;border:1.5px solid ${ROSE};">
    <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:12px;">${ed.id ? "تعديل الزر" : "زر جديد"}</div>
    <div style="font-size:12px;font-weight:800;margin-bottom:6px;">اسم الزر</div>
    <input class="input" id="rt-label" value="${esc(d.label)}" placeholder="مثال: قيد المراجعة" style="margin-bottom:12px;" />
    ${d.special ? `<div class="hint" style="margin-bottom:12px;">${d.special === "all" ? "هذا الزر يعرض كل التقارير غير المؤرشفة" : "هذا الزر يعرض التقارير المؤرشفة"} — تقدرين تغيّرين اسمه فقط.</div>` : `
    <div style="font-size:12px;font-weight:800;margin-bottom:6px;">يعرض التقارير التي حالتها</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:4px;margin-bottom:12px;">
      ${REPORT_STATUS_OPTIONS.map(([id, lb]) => permCheckboxRowHtml("rt-toggle-status", id, lb, (d.statuses || []).includes(id))).join("")}
    </div>`}
    <label style="display:flex;align-items:center;gap:8px;font-size:12px;margin-bottom:12px;cursor:pointer;"><input type="checkbox" id="rt-enabled" ${d.enabled !== false ? "checked" : ""} /> الزر ظاهر في صفحة التقارير</label>
    ${S.ui.rtError ? `<div class="error-box" style="margin-bottom:10px;">${esc(S.ui.rtError)}</div>` : ""}
    <div style="display:flex;gap:8px;">${pillBtn("حفظ", { icon: iconCheckCircle(14, "#fff"), action: "rt-save" })}${pillBtn("إلغاء", { variant: "ghost", action: "rt-cancel" })}</div>
  </div>`;
}
function renderReportTabsManage() {
  const list = reportTabsList();
  const fromDb = (S.reportTabs || []).length > 0;
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "إدارة أزرار التقارير", subtitle: "الأزرار اللي تظهر في صفحة التقارير: أضيفي، عدّلي، رتّبي، أو احذفي", backAction: "nav-back-admin" })}
    <div class="card" style="background:${BLUE_BG};border:1px solid #cfe0f5;margin-bottom:18px;"><div style="font-size:11.5px;color:#3a5a85;line-height:1.8;">
      كل زر يعرض التقارير حسب حالتها. ${fromDb ? "الأزرار محفوظة في قاعدة البيانات." : "الأزرار الآن هي القائمة الافتراضية؛ أول تعديل أو إضافة تحفظها في قاعدة البيانات."}
      الزر الجديد يظهر تلقائيًا في صلاحيات الأدوار والأشخاص (مع خيار «ينبّه»). «تعطيل» يخفيه عن الجميع بدون حذف.
    </div></div>
    ${S.ui.rtMsg ? `<div class="hint" style="margin-bottom:12px;">${esc(S.ui.rtMsg)}</div>` : ""}
    ${rtEditorHtml()}
    ${S.ui.rtEdit ? "" : `<div style="margin-bottom:14px;">${pillBtn("زر جديد", { icon: iconPlus(15, "#fff"), action: "rt-new" })}</div>`}
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${list.map((t, i) => `
      <div class="card" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;${t.enabled === false ? "opacity:0.55;" : ""}">
        <div style="flex:1;min-width:180px;">
          <div style="font-size:13px;font-weight:800;">${esc(t.label)}${t.enabled === false ? ` <span style="font-size:10.5px;color:${DANGER};">(معطّل)</span>` : ""}</div>
          <div style="font-size:10.5px;color:${SUBTLE};margin-top:3px;line-height:1.7;">${t.special === "all" ? "كل التقارير غير المؤرشفة" : t.special === "archived" ? "التقارير المؤرشفة" : (t.statuses || []).map(rtStatusLabel).join("، ") || "لا حالات"}${(t.adminStatuses || []).length ? " + (للإدارية): " + t.adminStatuses.map(rtStatusLabel).join("، ") : ""}</div>
        </div>
        <button class="icon-btn" style="border:1px solid ${BORDER}" data-action="rt-move" data-idx="${i}" data-dir="up" ${i === 0 ? "disabled" : ""}><span style="display:inline-flex;transform:rotate(180deg);">${iconChevronDown(12, INK)}</span></button>
        <button class="icon-btn" style="border:1px solid ${BORDER}" data-action="rt-move" data-idx="${i}" data-dir="down" ${i === list.length - 1 ? "disabled" : ""}>${iconChevronDown(12, INK)}</button>
        ${pillBtn("تعديل", { variant: "ghost", action: "rt-edit", data: { id: t.id } })}
        ${pillBtn(t.enabled === false ? "تفعيل" : "تعطيل", { variant: "ghost", action: "rt-toggle-enabled", data: { id: t.id } })}
        ${S.ui.rtDeleteId === t.id
          ? `${pillBtn("تأكيد الحذف", { variant: "ghost", action: "rt-delete", data: { id: t.id } })}${pillBtn("لا", { variant: "ghost", action: "rt-delete-cancel" })}`
          : pillBtn("حذف", { variant: "ghost", icon: iconX(13, DANGER), action: "rt-delete-ask", data: { id: t.id } })}
      </div>`).join("")}
    </div>
  </div></div>`;
}
function renderSectionsManage() {
  const defs = sortedSectionDefs();
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "إدارة أقسام التقرير", subtitle: "تحكّمي بأقسام نموذج التقرير: الترتيب، الأسماء، وتفعيلها أو تعطيلها", backAction: "nav-back-admin" })}

    <div class="card" style="background:${BLUE_BG};border:1px solid #cfe0f5;margin-bottom:18px;">
      <div style="font-size:11.5px;color:#3a5a85;line-height:1.7;">
        الأقسام الأساسية (البيانات الأساسية، الأهداف، مؤشرات الأداء...) لها نماذج مصمّمة خصيصًا لها ولا يمكن حذفها — فقط إعادة ترتيبها أو تعطيلها مؤقتًا.
        أي قسم جديد تضيفينه هنا سيظهر مباشرة في نموذج التقرير بحقل نصي عام، إلى أن يُصمَّم له شكل خاص لاحقًا.
      </div>
    </div>

    <div class="card" style="margin-bottom:22px;">
      <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:12px;">إضافة قسم جديد</div>
      <div style="display:flex;gap:8px;">
        <input class="input" id="new-report-section-name" style="flex:1;" placeholder="اسم القسم الجديد" />
        ${pillBtn("إضافة", { icon: iconPlus(15, "#fff"), action: "add-report-section" })}
      </div>
    </div>

    <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:10px;">الأقسام (${defs.length})</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${defs.map((d, i) => sectionDefRowHtml(d, i, defs.length)).join("")}
    </div>
  </div></div>`;
}

/* =============================== Section field-schema management (الخطوة ٢) ====
   إدارة حقول الأقسام المبنية على المحرك العام (SECTION_FIELD_SCHEMAS) — إضافة/
   تعديل/حذف/ترتيب حقول أي قسم منها بدون الحاجة لتعديل الكود. التخصيصات المحفوظة
   تُطبَّق فوق التعريفات الافتراضية عبر applyFieldSchemaOverrides (قسم بلا تخصيص
   محفوظ يبقى بتعريفه الافتراضي كما هو). */
const SCHEMA_FIELD_TYPE_LABELS = {
  text: "نص قصير",
  textarea: "نص طويل",
  number: "رقم",
  date: "تاريخ",
  select: "قائمة اختيار (خيار واحد)",
  radio: "أزرار اختيار",
  expandableSelect: "قائمة قابلة للتوسعة (مع خيار أخرى)",
  checklist: "قائمة تحقق (عناصر بعلامة صح)",
  computed: "محسوب تلقائيًا (بكود خاص، غير قابل للإضافة هنا)",
};
// الأنواع اللي تقدر مديرة النظام تختارها بنفسها وقت إضافة/تعديل حقل من صفحة
// الإدارة — "computed" يبقى يُعرض في القائمة (فوق) لو موجود بحقل قديم، لكنه
// مستبعد من هذه القائمة لأنه يحتاج دالة حساب مكتوبة بالكود، مو شي عام.
const SCHEMA_FIELD_TYPES_SELECTABLE = ["text", "textarea", "number", "date", "select", "radio", "expandableSelect", "checklist"];
// حقول "checklist" تخزّن قيمتها ككائن {نص_البند: true/false} — نص كل بند هو
// مفتاحه بالتخزين مباشرة (بدون مفتاح إنجليزي منفصل)، تمامًا بنفس أسلوب حقول
// select/radio/expandableSelect اللي تُخزَّن بنص الخيار نفسه؛ لذا تعديل نص بند
// موجود من لوحة الإدارة يفصله عن أي حالة "تم/لم يتم" محفوظة له سابقًا بنفس
// الطريقة اللي يفصل فيها تعديل نص خيار عادي عن قيمة محفوظة سابقًا تطابقه.
const SCHEMA_FIELD_TYPES_WITH_OPTIONS = ["select", "radio", "expandableSelect", "checklist"];

function fieldSchemaManagedSections() {
  // الأقسام المضافة من «إدارة أقسام التقرير» تظهر هنا أيضًا لتُضاف لها حقولها
  const custom = SECTIONS.filter((sc) => !DEFAULT_SECTIONS.some((x) => x.id === sc.id) && !SECTION_FIELD_SCHEMAS[sc.id]).map((sc) => ({ id: sc.id, label: sc.label + " (قسم مضاف)" }));
  return custom.concat(Object.keys(SECTION_FIELD_SCHEMAS).map((id) => {
    const schema = SECTION_FIELD_SCHEMAS[id] || {};
    const sectionDef = SECTIONS.find((s) => s.id === id);
    // sectionLabel تسمية صريحة اختيارية — تُستخدم لأي تعريف حقول مضمّن داخل قسم
    // مكتوب يدويًا (id غير مطابق لأي قسم فعلي، مثال: "analysisComparisons")، عشان
    // يبين بتبويب واضح بلوحة "إدارة حقول الأقسام" بدل معرّف تقني.
    return { id, label: schema.sectionLabel || (sectionDef && sectionDef.label) || schema.itemLabel || id };
  }));
}

function fieldEditFormHtml(draft, isNew) {
  const type = draft.type || "text";
  const showOptions = SCHEMA_FIELD_TYPES_WITH_OPTIONS.includes(type);
  const optionsText = draft.optionsText != null ? draft.optionsText : (draft.options || draft.baseOptions || []).join("\n");
  return `<div class="card" style="margin-bottom:14px;border:1px solid ${ROSE};">
    <div style="font-size:12.5px;font-weight:800;color:${ROSE};margin-bottom:12px;">${isNew ? "إضافة حقل جديد" : "تعديل الحقل"}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${fieldWrap("اسم الحقل (يظهر للمستخدمة)", true, `<input class="input" id="field-draft-label" value="${esc(draft.label || "")}" placeholder="مثال: اسم التوصية" />`)}
      ${fieldWrap("نوع الحقل", true, `<select class="input" data-action="set-field-draft" data-key="type" data-rerender="1">${SCHEMA_FIELD_TYPES_SELECTABLE.map((t) => `<option value="${t}" ${t === type ? "selected" : ""}>${esc(SCHEMA_FIELD_TYPE_LABELS[t])}</option>`).join("")}</select>`)}
      ${showOptions ? fieldWrap("الخيارات (كل خيار بسطر)", true, `<textarea class="input" id="field-draft-options" style="min-height:90px">${esc(optionsText)}</textarea>`) : ""}
      ${type === "expandableSelect" ? fieldWrap('نص خيار "إضافة قيمة جديدة"', false, `<input class="input" id="field-draft-other-label" value="${esc(draft.otherLabel || "أخرى")}" placeholder="أخرى" />`) : ""}
      ${fieldWrap("أيقونة الحقل", false, `<div style="display:flex;flex-wrap:wrap;gap:8px;">${FIELD_ICON_CHOICES.map((k, n) => { const sel = (draft.icon || FIELD_TYPE_DEFAULT_ICON[type]) === k; return `<button type="button" data-action="set-field-draft-icon" data-icon="${k}" title="${k}" style="padding:3px;border-radius:14px;cursor:pointer;background:#fff;border:2px solid ${sel ? ROSE : "transparent"};">${fieldIconTileHtml(k, 30, n, draft)}</button>`; }).join("")}</div>`)}
      ${fieldWrap("ألوان أيقونة هذا الحقل (اختياري)", false, `<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
        <label style="display:flex;align-items:center;gap:8px;font-size:12px;">لون الأيقونة <input type="color" id="field-draft-iconcolor" value="${esc(draft.iconColor || ROSE)}" style="width:42px;height:34px;border:1px solid ${BORDER};border-radius:8px;padding:2px;cursor:pointer;" /></label>
        <label style="display:flex;align-items:center;gap:8px;font-size:12px;">لون الخلفية <input type="color" id="field-draft-iconbg" value="${esc(draft.iconBg || "#f1d0d9")}" style="width:42px;height:34px;border:1px solid ${BORDER};border-radius:8px;padding:2px;cursor:pointer;" /></label>
        ${(draft.iconColor || draft.iconBg) ? `<button type="button" class="pill-btn pill-ghost" data-action="reset-field-draft-colors">الألوان الافتراضية</button>` : ""}
      </div>`)}
      ${fieldWrap("نص توضيحي داخل الحقل (اختياري)", false, `<input class="input" id="field-draft-placeholder" value="${esc(draft.placeholder || "")}" placeholder="مثال: اكتبي هنا..." />`)}
      <button type="button" class="pill-btn ${draft.required ? "pill-primary" : "pill-ghost"}" data-action="toggle-field-draft-required" style="align-self:flex-start;">${draft.required ? "✓ حقل إلزامي" : "حقل اختياري — اضغطي لجعله إلزاميًا"}</button>
      <div style="display:flex;gap:8px;margin-top:4px;">
        ${pillBtn("حفظ الحقل", { icon: iconCheck(15, "#fff"), action: "save-schema-field" })}
        ${pillBtn("إلغاء", { variant: "ghost", action: "cancel-field-edit" })}
      </div>
    </div>
  </div>`;
}

const FIELD_SVG = {
  text: `<path d="M4 7V5h16v2"/><path d="M12 5v14"/><path d="M9 19h6"/>`,
  textarea: `<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="4" y1="16" x2="14" y2="16"/>`,
  number: `<line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="15" x2="19" y2="15"/><line x1="10" y1="4" x2="8" y2="20"/><line x1="16" y1="4" x2="14" y2="20"/>`,
  date: `<rect x="3" y="5" width="18" height="16" rx="3"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>`,
  select: `<rect x="3" y="5" width="18" height="14" rx="3"/><polyline points="9 11 12 14 15 11"/>`,
  radio: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>`,
  checklist: `<polyline points="4 6 6 8 9 4"/><polyline points="4 13 6 15 9 11"/><line x1="13" y1="6" x2="20" y2="6"/><line x1="13" y1="13" x2="20" y2="13"/><line x1="4" y1="19" x2="20" y2="19"/>`,
  expandableSelect: `<rect x="3" y="3" width="18" height="18" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,
  computed: `<rect x="5" y="3" width="14" height="18" rx="3"/><line x1="8.5" y1="8" x2="15.5" y2="8"/><line x1="9" y1="13" x2="9" y2="13"/><line x1="12" y1="13" x2="12" y2="13"/><line x1="15" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="9" y2="17"/><line x1="12" y1="17" x2="12" y2="17"/><line x1="15" y1="17" x2="15" y2="17"/>`,
  star: `<polygon points="12 3 14.8 9 21 9.8 16.5 14.2 17.6 20.5 12 17.4 6.4 20.5 7.5 14.2 3 9.8 9.2 9"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>`,
  chart: `<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="5"/><line x1="18" y1="20" x2="18" y2="9"/>`,
  trend: `<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>`,
  bulb: `<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>`,
  trophy: `<path d="M8 4h8v6a4 4 0 0 1-8 0V4z"/><path d="M8 6H4v2a4 4 0 0 0 4 4"/><path d="M16 6h4v2a4 4 0 0 1-4 4"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="8" y1="20" x2="16" y2="20"/>`,
  users: `<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M19 14.5a5 5 0 0 1 2.5 4.5v1"/>`,
  building: `<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="9" y1="8" x2="9.01" y2="8"/><line x1="15" y1="8" x2="15.01" y2="8"/><line x1="9" y1="12" x2="9.01" y2="12"/><line x1="15" y1="12" x2="15.01" y2="12"/><path d="M10 21v-4h4v4"/>`,
  pin: `<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>`,
  clip: `<path d="M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9.5 17.3a1.7 1.7 0 0 1-2.4-2.4L15 7"/>`,
  bell: `<path d="M18 9a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,
  check: `<circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/>`,
  alert: `<path d="M12 3L2.5 20h19L12 3z"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  chat: `<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/>`,
  flag: `<path d="M5 21V4"/><path d="M5 4h12l-2 4 2 4H5"/>`,
  heart: `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
};
const FIELD_TYPE_DEFAULT_ICON = { text: "text", textarea: "textarea", number: "number", date: "date", select: "select", radio: "radio", checklist: "checklist", expandableSelect: "expandableSelect", computed: "computed" };
const FIELD_ICON_CHOICES = Object.keys(FIELD_SVG).filter((k) => !["computed"].includes(k));
function fieldIconKeyOf(field) { return field.icon || FIELD_TYPE_DEFAULT_ICON[field.type] || "text"; }
// بلاطة أيقونة ملوّنة بألوان الموقع (تتبع ألوان بطاقات تصفّح الهيكل المختارة من إعدادات الموقع)
function fieldIconTileHtml(key, size, colorIdx, custom) {
  const PAL = bsPalette();
  const idx = typeof colorIdx === "number" ? colorIdx : Math.max(0, Object.keys(FIELD_SVG).indexOf(key));
  const c = PAL[idx % PAL.length];
  const svg = FIELD_SVG[key];
  const th_ = themeOf(S.siteSettings || dataStore.getSiteSettings());
  const stroke = (custom && custom.iconColor) || th_.fieldIconColor || th_.iconColor || ROSE;
  const bgCss = custom && custom.iconBg ? `linear-gradient(135deg,${mixHex(custom.iconBg, "#ffffff", 0.55)},${mixHex(custom.iconBg, "#ffffff", 0.1)})` : c.bg;
  const inner = svg ? `<svg width="${Math.round(size * 0.5)}" height="${Math.round(size * 0.5)}" viewBox="0 0 24 24" fill="none" stroke="${esc(stroke)}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block">${svg}</svg>` : `<span style="font-size:${Math.round(size * 0.5)}px;line-height:1;">${esc(key)}</span>`;
  return `<span style="width:${size}px;height:${size}px;border-radius:${Math.round(size * 0.32)}px;background:${bgCss};display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 10px rgba(80,40,60,0.10);">${inner}</span>`;
}
function fieldSchemaRowHtml(field, index, total, sectionId) {
  const typeLabel = SCHEMA_FIELD_TYPE_LABELS[field.type] || field.type;
  const isComputed = field.type === "computed";
  const btn = "width:30px;height:30px;border:1px solid " + BORDER;
  return `<div class="card prs-card" style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-radius:18px;${isComputed ? "opacity:.85;" : ""}">
    <div style="display:flex;align-items:center;gap:12px;min-width:0;">
      ${fieldIconTileHtml(fieldIconKeyOf(field), 34, undefined, field)}
      <div style="min-width:0;">
        <div style="font-size:13.5px;font-weight:800;">${esc(field.label)}${field.required ? ` <span style="color:${ROSE};">*</span>` : ""}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:5px;">
          <span style="font-size:10.5px;font-weight:700;color:${INK};background:${GRAY_BG};padding:2px 9px;border-radius:999px;">${esc(typeLabel)}</span>
          <span style="font-size:10.5px;font-weight:700;color:${isComputed ? BLUE : GREEN};background:${isComputed ? BLUE_BG : GREEN_BG};padding:2px 9px;border-radius:999px;">${isComputed ? "محسوبة تلقائيًا" : "إدخال يدوي"}</span>
          ${field.required ? `<span style="font-size:10.5px;font-weight:700;color:${DANGER};background:${DANGER_BG};padding:2px 9px;border-radius:999px;">إلزامي</span>` : ""}
        </div>
      </div>
    </div>
    <div style="display:flex;gap:5px;flex-shrink:0;align-items:center;">
      <span style="display:inline-flex;flex-direction:column;gap:2px;">
        <button class="icon-btn" style="width:22px;height:15px;border:1px solid ${BORDER}" data-action="move-schema-field" data-section="${esc(sectionId)}" data-id="${esc(field.id)}" data-dir="up" ${index === 0 ? "disabled" : ""} title="نقل لأعلى">${iconChevronUp(10, INK)}</button>
        <button class="icon-btn" style="width:22px;height:15px;border:1px solid ${BORDER}" data-action="move-schema-field" data-section="${esc(sectionId)}" data-id="${esc(field.id)}" data-dir="down" ${index === total - 1 ? "disabled" : ""} title="نقل لأسفل">${iconChevronDown(10, INK)}</button>
      </span>
      ${isComputed ? "" : `<button class="icon-btn" style="${btn}" data-action="start-edit-field" data-section="${esc(sectionId)}" data-id="${esc(field.id)}" title="تعديل">${iconPencil(13, INK)}</button>
      <button class="icon-btn" style="width:30px;height:30px;background:${DANGER_BG}" data-action="remove-schema-field" data-section="${esc(sectionId)}" data-id="${esc(field.id)}" title="حذف">${iconTrash(13, DANGER)}</button>`}
    </div>
  </div>`;
}

function renderFieldSchemasManage() {
  const sections = fieldSchemaManagedSections();
  if (!sections.length) {
    return `<div class="page-wrap"><div class="page-inner narrow">
      ${topBarHtml({ title: "إدارة حقول الأقسام", subtitle: "تحكّمي بحقول الأقسام المبنية على المحرك العام", backAction: "nav-back-admin" })}
      <div class="card">لا توجد أقسام قابلة لإدارة الحقول حاليًا.</div>
    </div></div>`;
  }
  const activeSectionId = (S.ui.fieldSchemaSection && sections.some((s) => s.id === S.ui.fieldSchemaSection)) ? S.ui.fieldSchemaSection : sections[0].id;
  const schema = SECTION_FIELD_SCHEMAS[activeSectionId];
  const fields = (schema && schema.fields) || [];
  const editingId = S.ui.editingFieldId;
  const draft = S.ui.fieldEditDraft || {};

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "إدارة حقول الأقسام", subtitle: "أضف أو عدّل أي من حقول الأقسام التالية، مع إمكانية تحديد الترتيب.", icon: iconPencil(18, ROSE), backAction: "nav-back-admin" })}

    <div style="display:flex;gap:14px;overflow-x:auto;padding:16px 8px 22px;margin-bottom:6px;">
      ${editingId === "__new__" ? "" : `<button type="button" data-action="start-add-field" data-section="${esc(activeSectionId)}" style="flex-shrink:0;width:110px;min-height:150px;border-radius:22px;border:2px dashed ${BORDER};background:transparent;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:${SUBTLE};font-size:11.5px;font-weight:700;">${iconPlus(22, SUBTLE)}إضافة حقل</button>`}
      ${sections.map((sec, n) => { const PAL = bsPalette(); const c = PAL[n % PAL.length]; const on = sec.id === activeSectionId; return `<button type="button" data-action="select-field-schema-section" data-section="${esc(sec.id)}" style="flex-shrink:0;width:170px;min-height:150px;border-radius:22px;border:none;cursor:pointer;text-align:right;padding:16px;display:flex;flex-direction:column;justify-content:space-between;background:${c.bg};box-shadow:${on ? "0 14px 26px rgba(80,40,60,0.20)" : "0 6px 14px rgba(80,40,60,0.08)"};outline:${on ? "3px solid " + ROSE : "none"};outline-offset:2px;transform:${on ? "translateY(-4px)" : "none"};transition:transform .15s ease, box-shadow .15s ease;font-family:inherit;">
        ${fieldIconTileHtml(["text", "target", "chart", "users", "bulb", "trophy"][n % 6], 32, n)}
        <span style="font-size:14.5px;font-weight:800;color:${INK};line-height:1.4;">${esc(sec.label)}</span></button>`; }).join("")}
    </div>

    ${editingId === "__new__" ? fieldEditFormHtml(draft, true) : ""}

    <div style="font-size:15px;font-weight:800;margin-bottom:12px;display:flex;align-items:center;gap:8px;">${iconLayers(18, ROSE)} حقول (${esc((sections.find((s) => s.id === activeSectionId) || {}).label || activeSectionId)})</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;margin-bottom:16px;">
      ${fields.map((f, i) => editingId === f.id ? fieldEditFormHtml(draft, false) : fieldSchemaRowHtml(f, i, fields.length, activeSectionId)).join("") || `<div class="card" style="color:${SUBTLE};font-size:12.5px;">لا توجد حقول بعد.</div>`}
    </div>

    ${editingId === "__new__" ? "" : pillBtn("إضافة حقل جديد", { variant: "ghost", icon: iconPlus(15, ROSE), action: "start-add-field", data: { section: activeSectionId } })}
  </div></div>`;
}

/* =============================== Generic data-binding helpers ================ */
// Every editable field in the report editor carries data-field (top level)
// or data-arr/data-id/data-field (item inside a repeatable array), optionally
// data-subarr/data-subid for a nested array (used only by الأهداف).
function bindAttrs(arr, id, field, subarr, subid) {
  let s = `data-field="${esc(field)}"`;
  if (arr) s += ` data-arr="${esc(arr)}" data-id="${esc(id)}"`;
  if (subarr) s += ` data-subarr="${esc(subarr)}" data-subid="${esc(subid)}"`;
  return s;
}
function inp(arr, id, field, value, placeholder, type) {
  return `<input class="input" type="${type || "text"}" ${bindAttrs(arr, id, field)} value="${esc(value ?? "")}" placeholder="${esc(placeholder || "")}" />`;
}
function inpSub(arr, id, subarr, subid, field, value, placeholder, type) {
  return `<input class="input" type="${type || "text"}" ${bindAttrs(arr, id, field, subarr, subid)} value="${esc(value ?? "")}" placeholder="${esc(placeholder || "")}" />`;
}
function txt(arr, id, field, value, placeholder, minH) {
  return `<textarea class="input" style="min-height:${minH || 60}px" ${bindAttrs(arr, id, field)} placeholder="${esc(placeholder || "")}">${esc(value ?? "")}</textarea>`;
}
function txtSub(arr, id, subarr, subid, field, value, placeholder, minH) {
  return `<textarea class="input" style="min-height:${minH || 60}px" ${bindAttrs(arr, id, field, subarr, subid)} placeholder="${esc(placeholder || "")}">${esc(value ?? "")}</textarea>`;
}
function sel(arr, id, field, value, options, placeholder) {
  const opts = options.map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${esc(o)}</option>`).join("");
  return `<select class="input" ${bindAttrs(arr, id, field)} data-rerender="1"><option value="">${esc(placeholder || "اختاري")}</option>${opts}</select>`;
}
function selSub(arr, id, subarr, subid, field, value, options, placeholder) {
  const opts = options.map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${esc(o)}</option>`).join("");
  return `<select class="input" ${bindAttrs(arr, id, field, subarr, subid)} data-rerender="1"><option value="">${esc(placeholder || "اختاري")}</option>${opts}</select>`;
}
function radio(arr, id, field, value, options) {
  return `<div class="radio-group">${options.map((o) =>
    `<button type="button" class="radio-pill ${o === value ? "active" : ""}" data-action="set-item-radio" ${bindAttrs(arr, id, field)} data-value="${esc(o)}">${esc(o)}</button>`
  ).join("")}</div>`;
}
function radioSub(arr, id, subarr, subid, field, value, options) {
  return `<div class="radio-group">${options.map((o) =>
    `<button type="button" class="radio-pill ${o === value ? "active" : ""}" data-action="set-item-radio" ${bindAttrs(arr, id, field, subarr, subid)} data-value="${esc(o)}">${esc(o)}</button>`
  ).join("")}</div>`;
}
function readonlyBox(text) { return `<div class="readonly-box">${esc(text)}</div>`; }
function removeBtn(arr, id) { return `<button type="button" class="icon-remove" data-action="remove-item" data-arr="${esc(arr)}" data-id="${esc(id)}">${iconX(12, DANGER)}</button>`; }

function getItemList(arr) { return S.sectionDraft[arr] || (S.sectionDraft[arr] = []); }
function findById(list, id) { return list.find((x) => x.id === id); }

function setFieldFromEl(el) {
  const ds = el.dataset;
  if (!ds.field) return;
  const value = el.value;
  if (ds.arr) {
    const list = getItemList(ds.arr);
    const item = findById(list, ds.id);
    if (!item) return;
    if (ds.subarr) {
      const sublist = item[ds.subarr] || (item[ds.subarr] = []);
      const subitem = findById(sublist, ds.subid);
      if (!subitem) return;
      subitem[ds.field] = value;
    } else {
      item[ds.field] = value;
    }
  } else {
    S.sectionDraft[ds.field] = value;
  }
}
function expandableSelectHtml(name, value, baseOptions, customOptions, placeholder, otherLabel, arr, id, subarr, subid) {
  otherLabel = otherLabel || "أخرى";
  const options = [...baseOptions, ...customOptions, otherLabel];
  const isOther = value === otherLabel;
  const selectHtmlStr = `<select class="input" ${bindAttrs(arr, id, name, subarr, subid)} data-rerender="1"><option value="">${esc(placeholder || "اختاري")}</option>${options.map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
  const otherKey = `${arr || "top"}:${id || "-"}:${subarr || "-"}:${subid || "-"}:${name}`;
  const otherVal = (S.ui.expandableOtherText && S.ui.expandableOtherText[otherKey]) || "";
  const otherRow = isOther ? `
    <div style="display:flex;gap:8px;margin-top:8px;">
      <input class="input" style="flex:1;" data-expandable-other="${esc(otherKey)}" value="${esc(otherVal)}" placeholder="اكتبي القيمة الجديدة" />
      <button type="button" class="pill-btn pill-primary" data-action="add-expandable-option" data-key="${esc(otherKey)}" data-arr="${esc(arr || "")}" data-id="${esc(id || "")}" data-subarr="${esc(subarr || "")}" data-subid="${esc(subid || "")}" data-field="${esc(name)}">إضافة</button>
    </div>` : "";
  return selectHtmlStr + otherRow;
}
function multiSelectDropdownHtml(fieldKey, options, values, placeholder) {
  const open = S.ui.openMultiDropdown === fieldKey;
  const chips = values.map((v) => `<span class="multi-chip">${esc(v)}<button type="button" data-action="multi-toggle" data-key="${esc(fieldKey)}" data-value="${esc(v)}" style="background:none;border:none;cursor:pointer;color:${ROSE};padding:0;">${iconX(10, ROSE)}</button></span>`).join(" ");
  return `
    <div>
      <button type="button" class="input" style="text-align:right;cursor:pointer;" data-action="toggle-multi-dropdown" data-key="${esc(fieldKey)}">${values.length ? "" : esc(placeholder || "اختاري")}</button>
      ${chips ? `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">${chips}</div>` : ""}
      ${open ? `<div class="multi-dropdown-panel">${options.map((o) => `
        <div class="multi-dropdown-item" data-action="multi-toggle" data-key="${esc(fieldKey)}" data-value="${esc(o)}">
          <input type="checkbox" ${values.includes(o) ? "checked" : ""} style="pointer-events:none;" /> ${esc(o)}
        </div>`).join("")}</div>` : ""}
    </div>`;
}

/* =============================== Report layout: phases sidebar =============== */
function phaseSidebarHtml(report) {
  const collapsed = S.phaseCollapsed;
  const rows = reportSections(report, S.currentUnitId).map((section, i) => {
    const status = sectionStatus(report, section.id);
    const meta = statusMeta(status);
    const isActive = S.activeSectionId === section.id;
    const isDone = status === "completed";
    if (collapsed) {
      return `<button class="phase-row-btn" style="width:40px;height:40px;border-radius:11px;background:${isActive ? ROSE : isDone ? GREEN_BG : "#fff"};justify-content:center;margin:0 auto;" data-action="select-section" data-section="${section.id}" title="${esc(section.label)}">${isDone && !isActive ? iconCheck(15, GREEN) : iconDocument(15, isActive ? "#fff" : SUBTLE)}</button>`;
    }
    return `<button class="phase-section-btn ${isActive ? "active" : ""}" style="padding:9px 8px;" data-action="select-section" data-section="${section.id}">
      ${isDone ? iconCheckCircle(13, isActive ? "#fff" : GREEN) : iconDocument(13, isActive ? "#fff" : SUBTLE)}
      <span class="dot" style="background:${isActive ? "#fff" : meta.color}"></span>
      <span class="sec-label" style="flex:1;font-size:12px;font-weight:${isActive ? 700 : 500};color:${isActive ? "#fff" : INK};text-align:right;">${i + 1}. ${esc(section.label)}</span>
      ${REVIEW_NOTE_STATUSES.includes(report.status) && report.sections && report.sections[section.id] && report.sections[section.id].reviewNote ? `<span style="font-size:9.5px;font-weight:800;background:${DANGER_BG};color:${DANGER};border-radius:999px;padding:1px 7px;">ملاحظة</span>` : ""}
    </button>`;
  }).join("");

  return `
    <div class="phase-sidebar ${collapsed ? "collapsed" : ""} ${S.mobilePhaseOpen ? "mobile-open" : ""}">
      <div style="display:flex;align-items:center;justify-content:${collapsed ? "center" : "space-between"};margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid ${BORDER};">
        ${!collapsed ? `<span style="font-size:11.5px;font-weight:800;color:${INK}">أقسام التقرير</span>` : ""}
        <button class="icon-btn" style="border:1px solid ${BORDER}" data-action="toggle-phase-collapse">${collapsed ? iconChevronRight(13) : iconChevronLeft(13)}</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:${collapsed ? 8 : 2}px;">${rows}</div>
    </div>`;
}

/* =============================== Unit report page ============================= */
const REVIEW_NOTE_STATUSES = ["returned", "needs_completion"];
// بعد الإرسال: الكاتبة تعاين فقط ولا تعدّل. يرجع نص السبب لو التقرير مقفل على الجلسة الحالية، وإلا "".
function reportLockReason(entry, unit) {
  if (!entry) return "";
  const writerSide = (unit && unit.role === "self_report") || !(S.isDepartmentUser || S.isOfficeUser || S.isExecutive || S.isAdmin);
  if (entry.status === "custom_pending") {
    const ref = apRefOf(entry.customStageId);
    if (ref) {
      const p = apPathById(ref.pathId);
      const st = p && apStagesNamed(p, unit).find((x) => x.key === entry.customStageId);
      if (st && st.canEdit && userHoldsApStage(st, unit)) return "";
      return "بانتظار مرحلة «" + (st ? st.name : "المسار") + "»";
    }
    return "";
  }
  if (!writerSide) return "";
  if (entry.status === "completed") return "مكتمل — بانتظار الاعتماد";
  if (entry.status === "approved") return "معتمد";
  return "";
}
function reportPreviewOnlyHtml(reason) {
  return `
  <div class="card card-lg" style="text-align:center;padding:40px 20px;">
    <div style="width:56px;height:56px;border-radius:16px;background:${GOLD_BG};display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">${iconEye(26, GOLD)}</div>
    <div style="font-size:15px;font-weight:800;margin-bottom:6px;">${esc(reason)}</div>
    <div style="font-size:12px;color:${SUBTLE};max-width:380px;margin:0 auto 16px;">أُرسل هذا التقرير، ولا يمكن تعديله الآن — المعاينة فقط.</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
      ${pillBtn("عرض كامل", { variant: "ghost", icon: iconLayers(15, INK), action: "nav-to", data: { view: "full-report" } })}
      ${pillBtn("معاينة الطباعة", { variant: "ghost", icon: iconPrinter(15, INK), action: "nav-to", data: { view: "report-preview" } })}
    </div>
  </div>`;
}
function renderConfiguredNotifications(unit, cfg) {
  const list = ensureUnitReportsLoaded(unit.id);
  const rows = cfg.notify.map((id) => ({ tab: reportTabDef(id), n: list.filter((r) => reportMatchesCatalogTab(r, id)).length })).filter((x) => x.tab && x.n > 0);
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "التنبيهات", subtitle: "حسب الأزرار المحددة لحسابك", backAction: "nav-to", backData: { view: "unit-dashboard" } })}
    ${apNotifCardsHtml()}${rows.length === 0 && !apPendingForMe().length ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تنبيهات حاليًا.</div>` :
      `<div style="display:flex;flex-direction:column;gap:10px;">${rows.map(({ tab, n }) => `
        <button class="card" data-action="goto-report-tab" data-filter="${tab.id}" style="display:flex;align-items:center;gap:12px;width:100%;text-align:right;cursor:pointer;">
          <div style="width:38px;height:38px;border-radius:11px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconBell(17, ROSE)}</div>
          <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:700;">${n} تقرير — ${esc(tab.label)}</div></div>
          ${iconChevronLeft(14, SUBTLE)}
        </button>`).join("")}</div>`}
  </div></div>`;
}
function renderUnitNotifications() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit) {
    // حساب قسم/مكتب (أو أي جلسة بلا وحدة محددة): نعرض ما ينتظر مرحلتها بمسارات الاعتماد بدل رسالة خطأ.
    const apHtml = apNotifCardsHtml();
    return `<div class="page-wrap"><div class="page-inner narrow">
      ${topBarHtml({ title: "التنبيهات", subtitle: "التقارير بانتظارك", backAction: "nav-to", backData: { view: "dashboard" } })}
      ${apHtml || `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تنبيهات حاليًا.</div>`}
    </div></div>`;
  }
  const cfgN = effectiveReportTabsConfig();
  if (cfgN && cfgN.notify.length) return renderConfiguredNotifications(unit, cfgN);
  // التقارير المعادة للكاتبة (بحاجة إلى تعديل / استكمال)
  const items = ensureUnitReportsLoaded(unit.id).filter((r) => r.status === "returned" || r.status === "needs_completion")
    .slice().sort((a, b) => (b.internalReturnedAt || 0) - (a.internalReturnedAt || 0));
  return `
  <div class="page-wrap"><div class="page-inner narrow">
    ${topBarHtml({ title: "التنبيهات", subtitle: "تنبيهات هذه الوحدة فقط", backAction: "nav-to", backData: { view: "unit-dashboard" } })}
    ${apNotifCardsHtml()}${items.length === 0 && !apPendingForMe().length ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تنبيهات حاليًا.</div>` :
      `<div style="display:flex;flex-direction:column;gap:10px;">${items.map((r) => {
        const dateVal = r.internalReturnedAt;
        const dateStr = dateVal ? new Date(dateVal).toLocaleDateString("ar-SA-u-ca-islamic", { year: "numeric", month: "long", day: "numeric" }) : "";
        const verb = r.status === "returned" ? "معاد للتعديل" : "معاد للاستكمال";
        return `
        <button class="card" data-action="open-report" data-unit-id="${esc(unit.id)}" data-report-id="${esc(r.id)}" style="display:flex;align-items:center;gap:12px;width:100%;text-align:right;cursor:pointer;border:1px solid ${BORDER};background:#fff;">
          <div style="width:38px;height:38px;border-radius:11px;background:${DANGER_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconBell(17, ROSE)}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:700;">تقرير ${esc(unit.name)} ${verb}</div>
            ${dateStr ? `<div style="font-size:10.5px;color:${SUBTLE};margin-top:2px;">${esc(dateStr)}</div>` : ""}
          </div>
          ${iconChevronLeft(14, SUBTLE)}
        </button>`;
      }).join("")}</div>`}
  </div></div>`;
}

// "جميع التقارير" — أرشيف كل تقارير هذي الوحدة (وليس تقارير النظام)، مع تصفية
// حسب السنة/الفترة/نوع التقرير/الحالة. مختلفة عن "التقارير" التي تتابع دورة
// العمل والحالات عبر تبويبات. تُستخدَم نفس بطاقة reportCardHtml الموجودة أصلًا
// فتعرض تلقائيًا كل الأزرار والحالات الصحيحة لكل تقرير بدون أي تكرار للمنطق.
const UNIT_ALL_REPORTS_STATUS_OPTIONS = [
  { id: "draft", label: "مسودة" },
  { id: "returned", label: "بحاجة إلى تعديل" },
  { id: "needs_completion", label: "بحاجة إلى استكمال" },
  { id: "custom_pending", label: "قيد المراجعة" },
  { id: "completed", label: "مكتمل" },
  { id: "approved", label: "معتمد" },
];
function renderUnitAllReportsPage() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit) return `<div class="page-wrap">تعذر إيجاد الوحدة.</div>`;
  const dept = S.departments.find((d) => d.id === unit.departmentId);
  const list = ensureUnitReportsLoaded(unit.id);
  const yearFilter = S.ui.unitAllReportsYearFilter || "";
  const periodFilter = S.ui.unitAllReportsPeriodFilter || "";
  const statusFilter = S.ui.unitAllReportsStatusFilter || "";

  let filtered = list.slice();
  if (yearFilter) filtered = filtered.filter((r) => (r.sections?.basic?.data?.hijriYear || "") === yearFilter);
  if (periodFilter) filtered = filtered.filter((r) => (r.sections?.basic?.data?.periodType || "") === periodFilter);
  if (statusFilter) filtered = filtered.filter((r) => r.status === statusFilter);
  const sorted = filtered.sort((a, b) => b.createdAt - a.createdAt);
  const yearOptions = [...new Set(list.map((r) => r.sections?.basic?.data?.hijriYear).filter(Boolean))];

  return `
  <div class="page-wrap"><div class="page-inner">
    ${topBarHtml({ title: "جميع التقارير", subtitle: dept ? `${unit.name} — ${dept.name}` : unit.name, backAction: "nav-to", backData: { view: "unit-dashboard" } })}
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <select class="input" style="flex:1;min-width:110px;" data-action="filter-unit-all-reports-year"><option value="">السنة: الكل</option>${yearOptions.map((y) => `<option value="${esc(y)}" ${yearFilter === y ? "selected" : ""}>${esc(y)}</option>`).join("")}</select>
        <select class="input" style="flex:1;min-width:130px;" data-action="filter-unit-all-reports-period"><option value="">الفترة: الكل</option>${periodOptionsFor(list).map((p) => `<option value="${esc(p)}" ${periodFilter === p ? "selected" : ""}>${esc(p)}</option>`).join("")}</select>
        <select class="input" style="flex:1;min-width:150px;" data-action="filter-unit-all-reports-status"><option value="">الحالة: الكل</option>${UNIT_ALL_REPORTS_STATUS_OPTIONS.map((s) => `<option value="${esc(s.id)}" ${statusFilter === s.id ? "selected" : ""}>${esc(s.label)}</option>`).join("")}</select>
      </div>
    </div>
    <div style="font-size:12px;color:${SUBTLE};margin-bottom:10px;">عدد التقارير: ${sorted.length}</div>
    ${sorted.length === 0 ? `<div class="card" style="text-align:center;color:${SUBTLE};padding:36px;">لا توجد تقارير مطابقة.</div>` :
      `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px;">${sorted.map((entry) => reportCardHtml(unit, entry)).join("")}</div>`}
  </div></div>`;
}

function renderUnitReport() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  if (!unit) return `<div class="page-wrap">تعذر إيجاد الوحدة.</div>`;
  const entry = getCurrentReportEntry();
  if (!entry) return `<div class="page-wrap">تعذر إيجاد هذا التقرير — ارجعي إلى "تقاريري" واختاري تقريرًا.</div>`;
  const progress = computeProgress(entry, unit.id);
  const meta = reportStatusMeta(entry.status);
  const secList = reportSections(entry, unit.id);

  // No more phase-overview landing screen: entering a report always opens a
  // section directly — default to the first one if none is active yet.
  if (!S.activeSectionId || !secList.some((s) => s.id === S.activeSectionId)) {
    const resumeId = entry.lastSectionId && secList.some((s) => s.id === entry.lastSectionId) ? entry.lastSectionId : secList[0].id;
    loadSectionIntoDraft(resumeId);
  }
  const lockReason = reportLockReason(entry, unit);
  const mainContent = lockReason ? reportPreviewOnlyHtml(lockReason) : sectionEditorHtml(unit, entry);

  return `
  <div class="report-layout">
    <div class="report-main">
      ${topBarHtml({ title: `${unit.name} — ${esc(entry.label)}`, subtitle: `${progress.completed} من ${progress.total} أقسام مكتملة`, backAction: "nav-back-from-report",
        right: badgeHtml(meta.label, meta.color, meta.bg) +
               pillBtn("مسار الاعتماد", { variant: "ghost", icon: iconTarget(15, INK), action: "nav-to", data: { view: "approval-path-tracking" } }) +
               pillBtn("عرض كامل", { variant: "ghost", icon: iconLayers(15, INK), action: "nav-to", data: { view: "full-report" } }) +
               pillBtn("معاينة الطباعة", { variant: "ghost", icon: iconPrinter(15, INK), action: "nav-to", data: { view: "report-preview" } }) +
               `<button class="mobile-menu-toggle no-print" data-action="open-mobile-phase-sidebar" title="مراحل التقرير" style="display:none">${iconLayers(17, INK)}</button>` })}
      ${mainContent}
    </div>
    ${S.mobilePhaseOpen ? `<div class="mobile-backdrop" data-action="close-mobile-phase-sidebar"></div>` : ""}
    ${phaseSidebarHtml(entry)}
  </div>`;
}


/* =============================== Section editor container ==================== */
function loadSectionIntoDraft(sectionId) {
  const entry = getCurrentReportEntry();
  if (!entry) return;
  const saved = entry.sections?.[sectionId] || { status: "not_started", data: {} };
  S.activeSectionId = sectionId;
  S.sectionDraft = JSON.parse(JSON.stringify(saved.data || {}));
  S.sectionCompleted = saved.status === "completed";
  S.sectionSaveStatus = ""; S.sectionSaveError = "";
  S.ui.openMultiDropdown = null;
  // تذكّر آخر قسم فُتح محليًا، لتفتح عليه تلقائيًا المرة القادمة — يُرفَع لقاعدة
  // البيانات مع أقرب عملية حفظ فعلية للتقرير (بدون طلب شبكة إضافي هنا).
  if (entry.lastSectionId !== sectionId && S.currentUnitId) {
    const list = ensureUnitReportsLoaded(S.currentUnitId).map((r) => (r.id === entry.id ? { ...r, lastSectionId: sectionId } : r));
    dataStore.saveReports(S.currentUnitId, list);
    S.reports[S.currentUnitId] = list;
  }
}
function openSection(sectionId) {
  loadSectionIntoDraft(sectionId);
  render();
}
// عند فتح تقرير معاد (للتعديل/الاستكمال): افتح مباشرة أول قسم عليه ملاحظة مراجِعة، بدل الوقوف على صفحة التقرير العامة.
function jumpToFirstNotedSection(entry) {
  try {
    if (!entry || !REVIEW_NOTE_STATUSES.includes(entry.status)) return;
    const sec = SECTIONS.find((sc) => entry.sections && entry.sections[sc.id] && entry.sections[sc.id].reviewNote);
    if (!sec) return;
    const ph = PHASES.find((p) => (p.sectionIds || []).includes(sec.id));
    if (ph) S.openPhaseId = ph.id;
    loadSectionIntoDraft(sec.id);
  } catch (e) { /* لا تعطّل الفتح العادي */ }
}

function validateGoalsData(data) {
  const goals = data.goals || [];
  for (const g of goals) {
    for (const og of g.operationalGoals || []) {
      if (og.evidenceType && !(og.evidenceAnswer && og.evidenceAnswer.trim())) {
        return { valid: false, message: `أدخلي إجابة دليل التحقق لهدف "${og.name}" قبل الحفظ` };
      }
    }
  }
  return { valid: true };
}


function persistSection(sectionId, data, status) {
  const unitId = S.currentUnitId;
  const current = getCurrentReportEntry();
  if (!current) {
    // دفاعيًا: بدل ما يفشل الحفظ بصمت (يبدو للمستخدمة إن الزر ما يستجيب)، نبيّن خطأ واضح.
    S.sectionSaveError = "تعذّر حفظ هذا القسم — التقرير الحالي غير موجود. أعيدي فتح التقرير من صفحة التقارير.";
    return;
  }
  if (reportLockReason(current, S.units.find((u) => u.id === unitId))) {
    S.sectionSaveError = "التقرير مُرسل — المعاينة فقط ولا يمكن حفظ تعديلات عليه.";
    return;
  }
  const prevNote = current.sections && current.sections[sectionId] && current.sections[sectionId].reviewNote;
  const updatedSections = { ...current.sections, [sectionId]: { status, data, updatedAt: Date.now(), ...(prevNote ? { reviewNote: prevNote } : {}) } };
  let updatedShared = current.shared || {};
  let updatedLabel = current.label;
  if (sectionId === "basic") {
    updatedShared = { ...updatedShared, reportingEntityType: data.reportingEntityType || "", entityName: data.entityName || "",
      periodType: data.periodType || "", hijriYear: data.hijriYear || "", month: data.month || "", term: data.term || "",
      preparerName: data.preparerName || "", preparerTitle: data.preparerTitle || "", managerName: data.managerName || "" };
    // تسمية التقرير تلقائيًا حسب نوع الفترة، بدل "تقرير 1، 2" العام — فقط
    // إذا كان الاسم لسا افتراضيًا (ما بدّلته الموظفة يدويًا).
    if (data.periodType && (current.label === "تقرير جديد" || /^تقرير \d+$/.test(current.label || ""))) {
      updatedLabel = `تقرير ${data.periodType}`;
    }
  }
  const updatedEntry = { ...current, label: updatedLabel, sections: updatedSections, shared: updatedShared, updatedAt: Date.now(), lastSectionId: sectionId };
  // saveReportEntry يرفع التقرير كامل (بكل أقسامه) لـ Supabase دفعة وحدة.
  saveReportEntry(unitId, updatedEntry);
}

function sectionEditorHtml(unit, report) {
  const secList = reportSections(report, unit.id);
  const sectionIndex = secList.findIndex((s) => s.id === S.activeSectionId);
  const section = secList[sectionIndex];
  const color = PALETTE[sectionIndex % PALETTE.length];
  const d = S.sectionDraft || {};
  const shared = report.shared || {};

  const sharedBar = (section.id !== "basic" && (shared.periodType || shared.preparerName)) ? `
    <div style="display:flex;flex-wrap:wrap;gap:8px;background:#fdfbfa;border:1px solid ${BORDER};border-radius:12px;padding:10px 12px;margin-bottom:18px;font-size:11.5px;color:${SUBTLE}">
      ${shared.periodType ? `<span>الفترة: <strong style="color:${INK}">${esc(shared.periodType)}</strong></span>` : ""}
      ${shared.hijriYear ? `<span>· العام: <strong style="color:${INK}">${esc(shared.hijriYear)}</strong></span>` : ""}
      ${shared.preparerName ? `<span>· أعدّته: <strong style="color:${INK}">${esc(shared.preparerName)}</strong></span>` : ""}
    </div>` : "";

  const fieldsHtml = renderSectionFields(section, d, unit, report);

  return `
  <div class="card card-lg">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
      <button data-action="close-section" style="display:flex;align-items:center;gap:5px;background:none;border:none;color:${ROSE};font-size:12px;font-weight:700;cursor:pointer;padding:0;">${iconArrowRight(14, ROSE)} رجوع إلى تقاريري</button>
      <span style="font-size:11px;color:${SUBTLE}">القسم ${sectionIndex + 1} من ${secList.length}</span>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin:14px 0 18px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:42px;height:42px;border-radius:12px;background:${color.bg};display:flex;align-items:center;justify-content:center;">${iconLayers(20, color.fg)}</div>
        <div class="prs-title" style="font-size:17px;font-weight:800;">${esc(section.label)}</div>
      </div>
      ${actionAllowed("toggle-section-completed") ? `<button data-action="toggle-section-completed" style="display:flex;align-items:center;gap:6px;background:${S.sectionCompleted ? GREEN_BG : "#fff"};border:1px solid ${S.sectionCompleted ? GREEN : BORDER};border-radius:999px;padding:6px 12px;cursor:pointer;font-size:11.5px;font-weight:700;color:${S.sectionCompleted ? GREEN : SUBTLE}">
        ${S.sectionCompleted ? iconCheckCircle(14, GREEN) : iconCircle(14, SUBTLE)} ${S.sectionCompleted ? "مكتمل" : "تحديد كمكتمل"}
      </button>` : ""}
    </div>
    ${(() => { const rn = report.sections && report.sections[section.id] && report.sections[section.id].reviewNote; return rn && REVIEW_NOTE_STATUSES.includes(report.status) ? `<div class="hint bad" style="margin-bottom:14px;text-align:right;line-height:1.9;"><strong>ملاحظة على هذا القسم${rn.by ? " من " + esc(rn.by) : ""}:</strong> ${esc(rn.text)}</div>` : ""; })()}
    ${sharedBar}
    ${fieldsHtml}
    ${S.sectionSaveError ? `<div class="error-box" style="margin-top:16px;">${esc(S.sectionSaveError)}</div>` : ""}
    ${S.ui.showApSendPicker ? apSendPickerHtml(unit, report) : ""}
    <div class="section-editor-nav">
      ${pillBtn("السابق", { variant: "ghost", action: "section-prev", disabled: sectionIndex <= 0 })}
      <div style="flex:1;">${actionAllowed("section-save-draft") ? pillBtn(S.sectionSaveStatus || "حفظ كمسودة", { variant: "soft", icon: iconSave(15, GREEN), action: "section-save-draft" }) : ""}</div>
      ${sectionIndex >= secList.length - 1
        ? (report.status === "draft" || report.status === "returned" || report.status === "needs_completion"
            ? (matchApprovalPath(unit, report)
                ? pillBtn("إرسال للمراجعة", { icon: iconCheckCircle(15, "#fff"), action: "ap-send" })
                : pillBtn("لا يوجد مسار اعتماد مفعّل لهذه الجهة", { variant: "soft", icon: iconCheckCircle(15, SUBTLE), disabled: true }))
            : report.status === "custom_pending"
            ? pillBtn("بانتظار: " + apOrCustomStageName(unit, report), { variant: "soft", icon: iconCheckCircle(15, GOLD), disabled: true })
            : report.status === "completed"
            ? pillBtn("مكتمل — بانتظار الاعتماد", { variant: "soft", icon: iconCheckCircle(15, GREEN), disabled: true })
            : pillBtn("معتمد ✓", { variant: "soft", icon: iconCheckCircle(15, "#6b3fa0"), disabled: true }))
        : `<button class="next-btn" data-action="section-next">التالي ${iconChevronLeft(15, "#fff")}</button>`}
    </div>
  </div>`;
}

function notesFieldHtml(d) {
  return fieldWrap("ملاحظات (اختياري)", txt(null, null, "notes", d.notes, "أي ملاحظات إضافية", 80));
}

/* =============================== Section field renderers ====================== */
function renderSectionFields(section, d, unit, report) {
  // المحرك العام يتولى أي قسم له fields schema مُعرَّف بنمط "متكرر" (قائمة عناصر
  // تُضاف وتُحذف) — قبل الوصول لسويتش الأقسام المكتوبة يدويًا بالأسفل. الأقسام
  // ذات fixed: true (بيانات ثابتة بمثيل واحد، مثل "البيانات الأساسية" و"المراجعة
  // النهائية") تُستثنى من هذا التحويل التلقائي وتمر عبر السويتش كالمعتاد، لأن
  // دالتها اليدوية (basicSectionHtml/reviewSectionHtml) هي اللي تستخدم الحقول
  // الآن عبر renderSchemaFixedHtml، مع الحفاظ على منطق عرض/زخرفة خاص بها.
  const schema = SECTION_FIELD_SCHEMAS[section.id];
  if (schema && !schema.fixed && (schema.fields || []).length) return renderSchemaRepeaterHtml(schema, d);
  switch (section.id) {
    case "basic": return basicSectionHtml(d, unit);
    case "kpi": return kpiSectionHtml(d, report);
    case "goals": return goalsSectionHtml(d);
    case "programs": return programsSectionHtml(d);
    case "tools": return toolsSectionHtml(d);
    case "analysis": return analysisSectionHtml(d);
    case "strengths": return strengthsSectionHtml(d);
    case "challenges": return challengesSectionHtml(d);
    case "improvement": return improvementSectionHtml(d);
    case "initiatives": return initiativesSectionHtml(d);
    case "impact": return impactSectionHtml(d);
    case "recommendations": return recommendationsSectionHtml(d);
    case "nextplan": return nextplanSectionHtml(d);
    case "evidence": return evidenceSectionHtml(d);
    case "review": return reviewSectionHtml(d, report);
    default: return genericSectionHtml(section, d);
  }
}

function genericSectionHtml(section, d) {
  return `
    ${fieldWrap(`محتوى ${section.label}`, txt(null, null, "content", d.content, `اكتبي محتوى قسم "${section.label}" هنا...`, 160))}
    ${notesFieldHtml(d)}`;
}

/* ---- البيانات الأساسية ---- */
// القسم كامل صار على محرك الحقول العام (SECTION_FIELD_SCHEMAS.basic، fixed: true)
// — الحقول قابلة للإدارة الذاتية بالكامل (تسمية/نوع/خيارات/ترتيب/حذف) من لوحة
// "إدارة حقول الأقسام". الشيء الوحيد اللي بقي بكود ثابت هو صندوق "اسم الوحدة"
// (قراءة فقط، قيمته من سجل الوحدة نفسها وليست إدخالًا من المستخدمة) وملاحظات
// المطابقة المرفقة به — هذي زخرفة عرض مبنية على قيمة الحقول، مو حقلًا بحد ذاته.
function basicSectionHtml(d, unit) {
  const activeDepartments = S.departments.filter((x) => x.status === "active");
  const matchedOfficeUnit = S.units.find((u) => u.name === d.officeName);
  const matchedOfficeDept = matchedOfficeUnit ? activeDepartments.find((x) => x.id === matchedOfficeUnit.departmentId) : null;
  const currentUnitRecord = S.units.find((u) => u.name === unit.name);
  const currentUnitDept = currentUnitRecord ? activeDepartments.find((x) => x.id === currentUnitRecord.departmentId) : null;

  let noteHtml = "";
  if (d.entityName) {
    if (currentUnitDept?.name === d.entityName) noteHtml = `<div class="hint good">✓ هذه الوحدة تابعة لـ ${esc(d.entityName)}</div>`;
    else if (currentUnitDept) noteHtml = `<div class="hint bad">⚠ هذه الوحدة تابعة فعليًا لـ ${esc(currentUnitDept.name)}، وليس لـ ${esc(d.entityName)}</div>`;
    else noteHtml = `<div class="hint bad">⚠ هذه الوحدة غير مرتبطة بأي قسم في إدارة الأقسام والوحدات حاليًا</div>`;
  }
  const officeNameDecorator = (value) => {
    if (!value) return "";
    return `<div class="hint">القسم أو المركز التابع له: <strong style="color:${matchedOfficeDept ? INK : SUBTLE}">${matchedOfficeDept ? esc(matchedOfficeDept.name) : "لم يُسجَّل هذا المكتب بعد ضمن إدارة الأقسام والوحدات"}</strong></div>`;
  };

  const schema = SECTION_FIELD_SCHEMAS.basic;
  // "اسم الوحدة" (صندوق قراءة فقط) يظهر بموضعه الأصلي بين "officeName" و"periodType"
  // — نقسم قائمة الحقول لمجموعتين حول هذا الموضع الثابت بدل تعميمه كحقل.
  const beforeUnitIds = ["mainEntity", "reportingEntityType", "entityName", "officeName"];
  const fieldsBefore = schema.fields.filter((f) => beforeUnitIds.includes(f.id));
  const fieldsAfter = schema.fields.filter((f) => !beforeUnitIds.includes(f.id));
  const dd = { ...d, mainEntity: d.mainEntity !== undefined ? d.mainEntity : "إدارة التعليم النسائي" };

  return `
    ${renderSchemaFixedHtml({ fields: fieldsBefore }, dd, { decorators: { officeName: officeNameDecorator } })}
    ${fieldWrap("اسم الوحدة", readonlyBox(unit.name) + noteHtml)}
    ${renderSchemaFixedHtml({ fields: fieldsAfter }, dd)}
  `;
}

/* ---- مؤشرات الأداء ---- */
function indicatorCardHtml(row, index, def, report, isOpen, d) {
  const approvedNames = S.indicatorDefinitions.map((x) => x.name);
  const nameSelector = fieldWrap("اسم المؤشر", true, sel("indicators", row.id, "name", row.name, [...approvedNames, NEW_INDICATOR_LABEL], approvedNames.length ? "اختاري من مؤشرات الوحدة المعتمدة" : "لا توجد مؤشرات معتمدة بعد"));
  const isNewFlow = row.name === NEW_INDICATOR_LABEL;
  const newForm = isNewFlow ? newIndicatorInlineFormHtml(row.id) : "";

  if (!def) {
    return `<div class="indicator-card empty">
      <div class="repeat-item-head"><span class="repeat-item-title">المؤشر ${index + 1}</span>${removeBtn("indicators", row.id)}</div>
      ${nameSelector}${newForm}
    </div>`;
  }

  // نفس أسلوب الطيّ التلقائي المستخدم بباقي الأقسام: لما تكون مطويّة، نبيّن سطر
  // خفيف فقط — اسم المؤشر وشارة حالته (متحقق/قريب/يحتاج تدخل...) — وتقدرين
  // تفتحينها بالضغط عليها. الشارة نفسها موجودة أصلًا داخل البطاقة المفتوحة،
  // فهذا فقط يسمح بمراجعتها بسرعة بدون فتح كل مؤشر.
  if (isOpen === false) {
    const status = computeIndicatorStatus(resolveIndicatorRow(row, def));
    return `<div class="indicator-card">
      <div class="repeat-item-head" style="cursor:pointer;margin-bottom:0;" data-action="toggle-repeat-item" data-arr="indicators" data-id="${esc(row.id)}">
        <span class="repeat-item-title">${esc(row.name)}</span>
        <span style="display:flex;align-items:center;gap:8px;">
          <span style="display:inline-flex;align-items:center;gap:4px;background:${status.bg};color:${status.color};border-radius:999px;padding:3px 10px;font-size:11px;font-weight:800;">${status.emoji} ${esc(status.label)}</span>
          ${removeBtn("indicators", row.id)}
        </span>
      </div>
    </div>`;
  }

  const resolved = resolveIndicatorRow(row, def);
  const prevBase = indicatorPrevBaseline(S.currentUnitId, report, row.name);
  const baseline = prevBase ? prevBase.value : (row.baseline !== "" && row.baseline != null ? row.baseline : null);
  const status = computeIndicatorStatus(resolved);
  const deviation = computeDeviationAmount(resolved);
  const needsDeviation = status.key !== "achieved" && status.key !== "noData";
  const showDetails = S.ui.indicatorDetailsOpen && S.ui.indicatorDetailsOpen[row.id];
  const isEditing = S.ui.indicatorEditingOpen ? !!S.ui.indicatorEditingOpen[row.id] : !row.name;

  return `<div class="indicator-card">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:12px;cursor:pointer;" data-action="toggle-repeat-item" data-arr="indicators" data-id="${esc(row.id)}">
      <div style="flex:1;min-width:0;">
        <div style="font-size:15px;font-weight:800;margin-bottom:7px;">${esc(row.name)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${def.category ? badgeHtml(def.category, ROSE, DANGER_BG) : ""}
          ${def.direction ? badgeHtml(def.direction, BLUE, BLUE_BG) : ""}
          ${def.frequency ? badgeHtml(def.frequency, "#8a6a2f", GOLD_BG) : ""}
        </div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <div class="num-box"><div class="num-label">خط الأساس</div><div class="num-value">${baseline != null ? esc(baseline) : "—"}</div></div>
      <div class="num-box highlight"><div class="num-label">المستهدف</div><div class="num-value">${def.target !== "" && def.target != null ? esc(def.target) : "—"}</div></div>
      <div class="num-box"><div class="num-label">المتحقق</div><div class="num-value">${row.actual !== "" && row.actual != null ? esc(row.actual) : "—"}</div></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:8px;background:${status.bg};border-radius:999px;padding:6px 14px;">
        <span style="font-size:15px;">${status.emoji}</span><span style="font-size:12.5px;font-weight:800;color:${status.color}">${status.label}</span>
      </div>
      ${needsDeviation && deviation != null ? `<span style="font-size:11.5px;color:${SUBTLE}">الانحراف: <strong style="color:${status.color}">${esc(deviation)}</strong></span>` : ""}
    </div>
    <div style="display:flex;gap:8px;padding-top:12px;border-top:1px solid ${BORDER};flex-wrap:wrap;">
      ${pillBtn(showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل", { variant: "ghost", action: "toggle-indicator-details", data: { id: row.id } })}
      ${pillBtn("تعديل", { variant: "ghost", action: "toggle-indicator-editing", data: { id: row.id } })}
      ${pillBtn("حذف", { variant: "danger", action: "remove-item", data: { arr: "indicators", id: row.id } })}
    </div>
    ${isEditing ? `<div style="margin-top:14px;padding-top:14px;border-top:1px dashed ${BORDER}">
      ${nameSelector}${newForm}
      ${row.name ? fieldWrap("خط الأساس", false, prevBase
        ? `<div class="readonly-box">${esc(prevBase.value)}</div><div class="hint">من المتحقق في تقرير «${esc(prevBase.report.label || "سابق")}» المعتمد للوحدة.</div>`
        : inp("indicators", row.id, "baseline", row.baseline, "اختياري — اتركيه فارغًا إذا ما فيه قيمة سابقة", "number")) : ""}
      ${fieldWrap("المتحقق", true, inp("indicators", row.id, "actual", row.actual, "0", "number") + `<div style="font-size:10px;color:#c9863a;margin-top:4px;">🔧 لا يوجد مصدر بيانات مربوط — يحتاج إدخالًا يدويًا</div>`)}
    </div>` : ""}
    ${showDetails ? `<div style="margin-top:14px;padding-top:14px;border-top:1px dashed ${BORDER}">
      <div style="background:${GRAY_BG};border-radius:10px;padding:10px 12px;margin-bottom:12px;display:flex;flex-wrap:wrap;gap:6px;font-size:11px;color:#5c4a3f;">
        ${def.nature ? `<span>الطبيعة: <strong>${esc(def.nature)}</strong></span>` : ""}
        ${def.unit ? `<span>· الوحدة: <strong>${esc(def.unit)}</strong></span>` : ""}
        ${def.dataSource ? `<span>· مصدر البيانات: <strong>${esc(def.dataSource)}</strong></span>` : ""}
      </div>
      ${def.calculationMethod ? `<div style="font-size:11px;color:${SUBTLE};margin-bottom:14px;">طريقة الحساب: ${esc(def.calculationMethod)}</div>` : ""}
      ${needsDeviation ? `
        <div style="font-size:11.5px;font-weight:800;color:${DANGER};margin:0 0 10px;padding-bottom:6px;border-bottom:1px solid ${BORDER}">تحليل الانحراف والإجراء التصحيحي</div>
        ${fieldWrap("مقدار الانحراف", readonlyBox(deviation != null ? deviation : "—"))}
        ${renderSchemaFieldsHtml(SECTION_FIELD_SCHEMAS.kpiDeviation.fields, "indicators", row.id, row, d || S.sectionDraft || {})}
      ` : ""}
    </div>` : ""}
  </div>`;
}
function newIndicatorInlineFormHtml(rowId) {
  const key = `newIndicatorForm_${rowId}`;
  const f = S.ui[key] || (S.ui[key] = { name: "", category: "", direction: "", nature: "", frequency: "", unit: "", target: "", dataSource: "", calculationMethod: "" });
  return `<div style="border:1px dashed ${ROSE};border-radius:12px;padding:14px;margin-top:10px;margin-bottom:14px;background:#fdfbfa;">
    <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin-bottom:10px;">تعريف مؤشر جديد (مرة واحدة فقط)</div>
    ${fieldWrap("اسم المؤشر", true, `<input class="input" data-newind="${esc(rowId)}" data-newind-field="name" value="${esc(f.name)}" placeholder="مثال: نسبة إنجاز الاختبارات" />`)}
    ${fieldWrap("تصنيف المؤشر", `<select class="input" data-newind="${esc(rowId)}" data-newind-field="category" data-rerender="1"><option value="">اختاري</option>${INDICATOR_CATEGORIES.map((o) => `<option ${o === f.category ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`)}
    ${fieldWrap("اتجاه المؤشر", `<select class="input" data-newind="${esc(rowId)}" data-newind-field="direction" data-rerender="1"><option value="">اختاري</option>${INDICATOR_DIRECTIONS.map((o) => `<option ${o === f.direction ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`)}
    ${fieldWrap("طبيعة المؤشر", `<div class="radio-group">${INDICATOR_NATURE.map((o) => `<button type="button" class="radio-pill ${o === f.nature ? "active" : ""}" data-action="set-newind-radio" data-newind="${esc(rowId)}" data-newind-field="nature" data-value="${esc(o)}">${esc(o)}</button>`).join("")}</div>`)}
    ${fieldWrap("دورية القياس", `<select class="input" data-newind="${esc(rowId)}" data-newind-field="frequency" data-rerender="1"><option value="">اختاري</option>${MEASUREMENT_FREQUENCIES.map((o) => `<option ${o === f.frequency ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`)}
    ${fieldWrap("وحدة القياس", `<select class="input" data-newind="${esc(rowId)}" data-newind-field="unit" data-rerender="1"><option value="">اختاري</option>${MEASUREMENT_UNITS.map((o) => `<option ${o === f.unit ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`)}
    ${fieldWrap("المستهدف", true, `<input class="input" type="number" data-newind="${esc(rowId)}" data-newind-field="target" value="${esc(f.target)}" placeholder="0" />`)}
    ${fieldWrap("مصدر البيانات", `<input class="input" data-newind="${esc(rowId)}" data-newind-field="dataSource" value="${esc(f.dataSource)}" placeholder="مثال: نظام الاختبارات الإلكتروني" />`)}
    ${fieldWrap("طريقة الحساب", `<textarea class="input" style="min-height:60px" data-newind="${esc(rowId)}" data-newind-field="calculationMethod">${esc(f.calculationMethod)}</textarea>`)}
    <div style="display:flex;gap:8px;">
      ${pillBtn("حفظ وإضافة", { action: "submit-new-indicator", data: { id: rowId } })}
      ${pillBtn("إلغاء", { variant: "ghost", action: "cancel-new-indicator", data: { id: rowId } })}
    </div>
  </div>`;
}
function kpiSectionHtml(d, report) {
  const indicators = d.indicators || [];
  // نفس الطيّ التلقائي: مؤشر واحد يبقى مفتوح دائمًا، وأي مؤشر بلا اسم بعد (لسا ما
  // اختير) يبقى مفتوح إجباريًا بغض النظر عن حالة الطيّ (ما فيه شيء يُطوى له أصلًا).
  const expandedId = schemaExpandedItemId("indicators", indicators);
  const rows = indicators.map((row, i) => {
    const def = findIndicatorDef(row.name);
    const isOpen = indicators.length === 1 || !row.name || row.id === expandedId;
    return indicatorCardHtml(row, i, def, report, isOpen, d);
  }).join("");
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <span style="font-size:13px;font-weight:800;">مؤشرات الأداء (${indicators.length})</span>
      ${pillBtn("إضافة مؤشر", { icon: iconPlus(15, "#fff"), action: "add-indicator" })}
    </div>
    ${rows}
    ${notesFieldHtml(d)}`;
}

/* ---- الأهداف والمستهدفات ---- */
// هل الهدف محقق بالكامل؟ (كل أهدافه التشغيلية بمستوى "تحقق بالكامل") — نستخدمها
// لعرض شارة "منجز" تلقائية على بطاقة الهدف، بدون ما تحتاج نجود تعليمها يدويًا.
function goalOverallAchieved(g) {
  const ogs = g.operationalGoals || [];
  return ogs.length > 0 && ogs.every((og) => og.level === "تحقق بالكامل");
}
function goalsSectionHtml(d) {
  const goals = d.goals || [];
  const strategicOptions = (S.goalsDefinitions.strategic && S.goalsDefinitions.strategic.length ? S.goalsDefinitions.strategic.map((g) => g.name) : STRATEGIC_GOALS_FALLBACK);
  const operationalAll = (S.goalsDefinitions.operational && S.goalsDefinitions.operational.length ? null : OPERATIONAL_GOALS_FALLBACK);
  // نفس أسلوب الطيّ التلقائي المستخدم بالأقسام الأخرى (البرامج والتوصيات...):
  // بعد إضافة هدف جديد تنطوي الأهداف السابقة تلقائيًا وتبيّن عنوانها فقط، وتقدرين
  // ترجعين لأي واحد وتفتحينه للتعديل بالضغط عليه.
  const expandedId = schemaExpandedItemId("goals", goals);
  const evSchema = SECTION_FIELD_SCHEMAS.goalsEvidence;
  const evidenceTypeField = evSchema.fields.find((f) => f.id === "evidenceType");
  const evidenceAnswerField = evSchema.fields.find((f) => f.id === "evidenceAnswer");
  const explanationField = evSchema.fields.find((f) => f.id === "explanation");

  const goalsHtml = goals.map((g, i) => {
    const isOpen = goals.length === 1 || g.id === expandedId;
    const achieved = goalOverallAchieved(g);
    const achievedBadge = achieved ? `<span style="display:inline-flex;align-items:center;gap:4px;background:${GREEN_BG};color:${GREEN};border-radius:999px;padding:3px 10px;font-size:11px;font-weight:800;margin-inline-start:8px;">✅ منجز</span>` : "";
    const head = `<div class="repeat-item-head" style="cursor:pointer;" data-action="toggle-repeat-item" data-arr="goals" data-id="${esc(g.id)}"><span class="repeat-item-title">الهدف ${i + 1}${isOpen ? "" : ` — ${esc(g.strategicGoal || "")}`}</span>${achievedBadge}${removeBtn("goals", g.id)}</div>`;
    if (!isOpen) return `<div class="repeat-item">${head}</div>`;
    const ogHtml = (g.operationalGoals || []).map((og) => `
      <div class="og-block">
        <div style="font-size:12.5px;font-weight:800;margin-bottom:10px;">${esc(og.name)}</div>
        ${fieldWrap("مستوى تحقق الهدف", true, selSub("goals", g.id, "operationalGoals", og.id, "level", og.level, GOAL_LEVELS, "اختاري مستوى التحقق"))}
        ${fieldWrap("نسبة تحقق الهدف", og.level ? `<div style="display:flex;align-items:center;gap:10px;"><div style="flex:1;">${progressBarHtml(og.percentage || 0, goalLevelMeta(og.level).color)}</div><span style="font-size:13px;font-weight:800;color:${goalLevelMeta(og.level).color};min-width:34px;text-align:left;">${og.percentage}٪</span></div>` : `<div class="hint">تُحسب تلقائيًا بعد اختيار مستوى التحقق</div>`)}
        ${renderSchemaFieldHtml(evidenceTypeField, "goals", g.id, og.evidenceType || "", d.customEvidenceTypes || [], og, "operationalGoals", og.id)}
        ${og.evidenceType ? renderSchemaFieldHtml({ ...evidenceAnswerField, placeholder: evidenceAnswerPlaceholder(og.evidenceType) }, "goals", g.id, og.evidenceAnswer, undefined, og, "operationalGoals", og.id) : ""}
        ${renderSchemaFieldHtml(explanationField, "goals", g.id, og.explanation, undefined, og, "operationalGoals", og.id) + `<div class="char-count">${(og.explanation || "").length} / 300</div>`}
      </div>`).join("");
    return `<div class="repeat-item">
      ${head}
      ${fieldWrap("الهدف المرتبط بالخطة الاستراتيجية", true, sel("goals", g.id, "strategicGoal", g.strategicGoal, strategicOptions, "اختاري الهدف الاستراتيجي") + goalAddInlineHtml(g.id, "strategic"))}
      ${fieldWrap("الهدف التشغيلي للوحدة", true, multiSelectDropdownHtml(`goal-og-${g.id}`, operationalAll || operationalGoalsFor(g.strategicGoal), (g.operationalGoals || []).map((og) => og.name), "اختاري هدفًا أو أكثر") + goalAddInlineHtml(g.id, "operational"))}
      ${ogHtml}
    </div>`;
  }).join("");

  return `
    ${goalsHtml}
    ${pillBtn("إضافة هدف", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-goal" })}
    ${notesFieldHtml(d)}`;
}

// الأهداف التشغيلية التابعة للهدف الاستراتيجي المختار (+ غير المربوطة بأي هدف).
// قبل اختيار الهدف الاستراتيجي تظهر كلها.
function strategicGoalIdByName(name) { const g = (S.goalsDefinitions.strategic || []).find((x) => x.name === name); return g ? g.id : ""; }
function operationalGoalsFor(strategicName) {
  const sid = strategicGoalIdByName(strategicName);
  const valid = new Set((S.goalsDefinitions.strategic || []).map((x) => x.id));
  return (S.goalsDefinitions.operational || []).filter((o) => !sid || !o.parentId || !valid.has(o.parentId) || o.parentId === sid).map((o) => o.name);
}
// «＋ هدف غير موجود في القائمة»: يضيف الهدف للقائمة العامة (إدارة الأهداف) ويختاره مباشرة.
// مديرة النظام تقدر توقفه من «إدارة الأهداف والمستهدفات».
function goalAddFromReportOn() { const th = ((S.siteSettings || {}).theme) || {}; return th.goalAddFromReport !== false; }
function goalAddInlineHtml(goalId, kind) {
  if (!goalAddFromReportOn()) return "";
  const key = goalId + ":" + kind;
  const label = kind === "strategic" ? "هدف استراتيجي" : "هدف تشغيلي";
  if (S.ui.goalAddOpen !== key) return `<button type="button" data-action="goal-add-open" data-key="${esc(key)}" style="background:none;border:none;cursor:pointer;color:${ROSE};font-size:12px;font-weight:700;padding:6px 0 0;font-family:inherit;">＋ ${label} غير موجود في القائمة</button>`;
  return `<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
    <input class="input" id="goal-add-input" style="flex:1;min-width:200px;" placeholder="اكتبي نص ${label} الجديد" />
    ${pillBtn("إضافة", { icon: iconPlus(14, "#fff"), action: "goal-add-save", data: { gid: goalId, kind } })}
    ${pillBtn("إلغاء", { variant: "ghost", action: "goal-add-cancel" })}
  </div>
  ${S.ui.goalAddErr ? `<div style="color:${DANGER};font-size:11.5px;font-weight:700;margin-top:4px;">${esc(S.ui.goalAddErr)}</div>` : `<div style="font-size:11px;color:${SUBTLE};margin-top:4px;">يُضاف للقائمة العامة ويظهر لكل الوحدات.</div>`}`;
}

/* ---- الأعمال والبرامج ---- */
function programsSectionHtml(d) {
  const programs = d.programs || [];
  const customWorkTypes = d.customWorkTypes || [];
  const rows = programs.map((p, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">العمل / البرنامج ${i + 1}</span>${removeBtn("programs", p.id)}</div>
      ${fieldWrap("نوع العمل", true, expandableSelectHtml("workType", p.workType, WORK_TYPES_BASE, customWorkTypes, "اختاري نوع العمل", "أخرى", "programs", p.id))}
      <div class="subhead">بيانات العمل</div>
      ${fieldWrap("اسم العمل", true, inp("programs", p.id, "name", p.name, "اسم العمل أو البرنامج"))}
      ${fieldWrap("الهدف منه", txt("programs", p.id, "goal", p.goal, "ما الهدف من هذا العمل؟"))}
      ${fieldWrap("الفئة المستهدفة", inp("programs", p.id, "targetGroup", p.targetGroup, "مثال: طالبات المرحلة المتوسطة"))}
      <div class="row-flex">
        ${fieldWrap("العدد المستهدف", inp("programs", p.id, "targetCount", p.targetCount, "0", "number"))}
        ${fieldWrap("عدد المستفيدات الفعلي", inp("programs", p.id, "actualBeneficiaries", p.actualBeneficiaries, "0", "number"))}
      </div>
      <div class="row-flex">
        ${fieldWrap("تاريخ البداية", inp("programs", p.id, "startDate", p.startDate, "", "date"))}
        ${fieldWrap("تاريخ النهاية", inp("programs", p.id, "endDate", p.endDate, "", "date"))}
      </div>
      ${fieldWrap("مقر التنفيذ", inp("programs", p.id, "location", p.location, "مكان التنفيذ"))}
      ${fieldWrap("حضوري / عن بُعد / مدمج", radio("programs", p.id, "deliveryMode", p.deliveryMode, DELIVERY_MODES))}
      ${fieldWrap("الجهة المنفذة", inp("programs", p.id, "executingEntity", p.executingEntity, "الجهة المسؤولة عن التنفيذ"))}
      ${fieldWrap("الجهات المشاركة", inp("programs", p.id, "participatingEntities", p.participatingEntities, "الجهات المشاركة، إن وجدت"))}
      ${fieldWrap("المسؤولة عن التنفيذ", inp("programs", p.id, "responsiblePerson", p.responsiblePerson, "اسم المسؤولة"))}
      <div class="subhead">حالة التنفيذ</div>
      ${fieldWrap("حالة التنفيذ", radio("programs", p.id, "executionStatus", p.executionStatus, EXECUTION_STATUSES))}
      <div class="subhead">مستوى الإنجاز</div>
      <div class="row-flex">
        ${fieldWrap("نسبة الإنجاز", inp("programs", p.id, "completionPercent", p.completionPercent, "0", "number"))}
        ${fieldWrap("عدد الحاضرات", inp("programs", p.id, "attendeesCount", p.attendeesCount, "0", "number"))}
      </div>
      <div class="row-flex">
        ${fieldWrap("نسبة الحضور", inp("programs", p.id, "attendanceRate", p.attendanceRate, "0", "number"))}
        ${fieldWrap("نسبة الاستمرار", inp("programs", p.id, "continuationRate", p.continuationRate, "0", "number"))}
      </div>
      <div class="row-flex">
        ${fieldWrap("التكلفة المعتمدة", inp("programs", p.id, "approvedCost", p.approvedCost, "0", "number"))}
        ${fieldWrap("التكلفة الفعلية", inp("programs", p.id, "actualCost", p.actualCost, "0", "number"))}
      </div>
      ${fieldWrap("أبرز نتيجة", true, txt("programs", p.id, "highlightResult", p.highlightResult, "أبرز نتيجة تحققت من هذا العمل"))}
    </div>`).join("");
  return `${rows}${pillBtn("إضافة برنامج أو عمل", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "programs" } })}<div style="margin-top:18px;">${notesFieldHtml(d)}</div>`;
}

/* ---- أدوات القياس ---- */
function toolsSectionHtml(d) {
  const tools = d.tools || [];
  const customToolTypes = d.customToolTypes || [];
  const rows = tools.map((t, i) => {
    const responseRate = computeResponseRate(t.sampleSize, t.respondentsCount);
    return `<div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">أداة القياس ${i + 1}</span>${removeBtn("tools", t.id)}</div>
      ${fieldWrap("نوع الأداة", true, expandableSelectHtml("toolType", t.toolType, MEASUREMENT_TOOL_TYPES, customToolTypes, "اختاري نوع الأداة", "أخرى", "tools", t.id))}
      <div class="subhead">بيانات الأداة</div>
      ${fieldWrap("اسم الأداة", true, inp("tools", t.id, "name", t.name, "اسم أداة القياس"))}
      ${fieldWrap("الهدف من استخدامها", txt("tools", t.id, "purpose", t.purpose, "لماذا استُخدمت هذه الأداة؟"))}
      ${fieldWrap("الجهة أو البرنامج المرتبط بها", inp("tools", t.id, "relatedProgram", t.relatedProgram, "مثال: دورة إدارة الوقت"))}
      ${fieldWrap("الفئة التي طبقت عليها", inp("tools", t.id, "targetGroup", t.targetGroup, "مثال: الموظفات"))}
      <div class="row-flex">
        ${fieldWrap("حجم المجتمع", inp("tools", t.id, "populationSize", t.populationSize, "0", "number"))}
        ${fieldWrap("حجم العينة", inp("tools", t.id, "sampleSize", t.sampleSize, "0", "number"))}
      </div>
      ${fieldWrap("عدد المستجيبات", inp("tools", t.id, "respondentsCount", t.respondentsCount, "0", "number"))}
      ${fieldWrap("نسبة الاستجابة", readonlyBox(responseRate != null ? `${responseRate}٪` : "تُحسب تلقائيًا بعد إدخال حجم العينة وعدد المستجيبات"))}
      ${fieldWrap("تاريخ التطبيق", inp("tools", t.id, "applicationDate", t.applicationDate, "", "date"))}
      ${fieldWrap("رابط نسخة الأداة", inp("tools", t.id, "toolLink", t.toolLink, "https://..."))}
      ${fieldWrap("رابط نتائجها", inp("tools", t.id, "resultsLink", t.resultsLink, "https://..."))}
      <div class="subhead">جودة نتائج الأداة</div>
      ${fieldWrap("جودة نتائج الأداة", radio("tools", t.id, "resultQuality", t.resultQuality, TOOL_RESULT_QUALITY))}
    </div>`;
  }).join("");
  return `${rows}${pillBtn("إضافة أداة قياس", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "tools" } })}<div style="margin-top:18px;">${notesFieldHtml(d)}</div>`;
}

/* ---- تحليل النتائج ---- */
function analysisSectionHtml(d) {
  const comparisons = d.comparisons || [];
  // حقول المقارنة نفسها صارت مُدارة من محرك الحقول العام (SECTION_FIELD_SCHEMAS.
  // analysisComparisons)، فتقدرين تضيفين/تعدّلين/ترتّبين حقولها من "إدارة حقول
  // الأقسام" رغم إن باقي القسم (النتيجة الإيجابية/التحسين/الخلاصة) يبقى ثابتًا
  // بالكود كما هو (حقول فردية، مو قائمة متكررة، فما تحتاج إدارة ذاتية).
  const comparisonsSchema = SECTION_FIELD_SCHEMAS.analysisComparisons;
  const expandedId = schemaExpandedItemId("comparisons", comparisons);
  const rows = comparisons.map((c, i) => {
    const isOpen = comparisons.length === 1 || c.id === expandedId;
    const head = `<div class="repeat-item-head" style="cursor:pointer;" data-action="toggle-repeat-item" data-arr="comparisons" data-id="${esc(c.id)}"><span class="repeat-item-title">مقارنة ${i + 1}${isOpen ? "" : ` — ${esc(c.topic || "")}`}</span>${removeBtn("comparisons", c.id)}</div>`;
    if (!isOpen) return `<div class="repeat-item">${head}</div>`;
    return `<div class="repeat-item">${head}${renderSchemaFieldsHtml(comparisonsSchema.fields, "comparisons", c.id, c, d)}</div>`;
  }).join("");
  return `
    <div class="hint" style="background:${GRAY_BG};border-radius:10px;padding:9px 12px;margin-bottom:18px;">يظهر هذا القسم بعد إدخال المؤشرات وأدوات القياس.</div>
    <div class="subhead" style="color:${GREEN}">أبرز نتيجة إيجابية</div>
    ${fieldWrap("ما النتيجة؟", inp(null, null, "positiveResult", d.positiveResult))}
    ${fieldWrap("ما الرقم أو الدليل الذي يثبتها؟", inp(null, null, "positiveEvidence", d.positiveEvidence))}
    ${fieldWrap("ما تفسيرها؟", txt(null, null, "positiveInterpretation", d.positiveInterpretation))}
    ${fieldWrap("ما أثرها في المستفيدات أو العمل؟", txt(null, null, "positiveImpact", d.positiveImpact))}
    <div class="subhead" style="color:${DANGER}">أبرز نتيجة تحتاج إلى تحسين</div>
    ${fieldWrap("ما النتيجة؟", inp(null, null, "improvementResult", d.improvementResult))}
    ${fieldWrap("ما حجم الفجوة؟", inp(null, null, "improvementGapSize", d.improvementGapSize))}
    ${fieldWrap("أين ظهر القصور؟", inp(null, null, "improvementWeaknessLocation", d.improvementWeaknessLocation))}
    ${fieldWrap("ما الأسباب المحتملة؟", txt(null, null, "improvementCauses", d.improvementCauses))}
    ${fieldWrap("ما الإجراء المقترح؟", txt(null, null, "improvementAction", d.improvementAction))}
    <div class="subhead">المقارنة بالفترة السابقة</div>
    ${rows}
    ${pillBtn("إضافة مقارنة", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "comparisons" } })}
    <div style="margin-top:22px;">${fieldWrap("الخلاصة التحليلية", txt(null, null, "summary", d.summary, "خلاصة تحليلية لا تزيد على 500 حرف", 90) + `<div class="char-count">${(d.summary || "").length} / 500</div>`)}</div>
    <div style="margin-top:18px;">${notesFieldHtml(d)}</div>`;
}

/* ---- نقاط القوة ---- */
function strengthsSectionHtml(d) {
  const items = d.strengths || [];
  const customAreas = d.customStrengthAreas || [];
  const MAX = 5;
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">نقطة القوة ${i + 1}</span>${removeBtn("strengths", item.id)}</div>
      ${fieldWrap("اسم نقطة القوة", true, inp("strengths", item.id, "name", item.name, "مثال: قيادة داعمة ومتابعة مستمرة"))}
      ${fieldWrap("مجال نقطة القوة", true, expandableSelectHtml("area", item.area, STRENGTH_AREAS_BASE, customAreas, "اختاري مجال نقطة القوة", "أخرى", "strengths", item.id))}
      <div class="subhead">بيانات نقطة القوة</div>
      ${fieldWrap("وصف نقطة القوة", true, txt("strengths", item.id, "description", item.description, "اشرحي نقطة القوة"))}
      ${fieldWrap("الدليل عليها", txt("strengths", item.id, "evidence", item.evidence, "ما الدليل أو الرقم الذي يثبتها؟"))}
      ${fieldWrap("أثرها", txt("strengths", item.id, "impact", item.impact, "ما أثر هذه النقطة على العمل أو المستفيدات؟"))}
      ${fieldWrap("هل هي مستمرة أم مرتبطة بفترة؟", radio("strengths", item.id, "continuity", item.continuity, CONTINUITY_OPTIONS))}
      ${fieldWrap("كيف يمكن المحافظة عليها؟", txt("strengths", item.id, "maintainHow", item.maintainHow, "ما الإجراءات اللازمة للحفاظ عليها؟"))}
      ${fieldWrap("هل يمكن نقلها إلى وحدات أخرى؟", radio("strengths", item.id, "transferable", item.transferable, YES_NO_OPTIONS))}
    </div>`).join("");
  return `
    ${pillBtn(items.length >= MAX ? "بلغتِ الحد الأقصى (5 نقاط)" : "إضافة نقطة قوة", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-strength", disabled: items.length >= MAX })}
    <div style="margin:14px 0;">${rows}</div>
    ${notesFieldHtml(d)}`;
}

/* ---- الصعوبات والتحديات ---- */
function challengesSectionHtml(d) {
  const items = d.challenges || [];
  const customAreas = d.customChallengeAreas || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">الصعوبة ${i + 1}</span>${removeBtn("challenges", item.id)}</div>
      ${fieldWrap("اسم الصعوبة", true, inp("challenges", item.id, "name", item.name, "مثال: نقص الكادر المؤهل"))}
      ${fieldWrap("مجال الصعوبة", true, expandableSelectHtml("area", item.area, CHALLENGE_AREAS_BASE, customAreas, "اختاري مجال الصعوبة", "أخرى", "challenges", item.id))}
      ${fieldWrap("مستوى الصعوبة", radio("challenges", item.id, "severity", item.severity, CHALLENGE_SEVERITY))}
      ${fieldWrap("نطاق الصعوبة", sel("challenges", item.id, "scope", item.scope, CHALLENGE_SCOPE))}
      <div class="subhead">بيانات الصعوبة</div>
      ${fieldWrap("وصف الصعوبة", true, txt("challenges", item.id, "description", item.description))}
      ${fieldWrap("سببها الجذري", txt("challenges", item.id, "rootCause", item.rootCause))}
      ${fieldWrap("أثرها في الأداء", txt("challenges", item.id, "performanceImpact", item.performanceImpact))}
      ${fieldWrap("متى بدأت؟", inp("challenges", item.id, "startedWhen", item.startedWhen, "", "date"))}
      ${fieldWrap("هل تكررت سابقًا؟", radio("challenges", item.id, "recurred", item.recurred, YES_NO_OPTIONS))}
      ${fieldWrap("الإجراء الذي اتخذته الوحدة", txt("challenges", item.id, "actionTaken", item.actionTaken))}
      ${fieldWrap("نتيجة الإجراء", txt("challenges", item.id, "actionResult", item.actionResult))}
      ${fieldWrap("هل ما زالت قائمة؟", radio("challenges", item.id, "stillOngoing", item.stillOngoing, YES_NO_OPTIONS))}
      ${fieldWrap("الدعم أو القرار المطلوب", txt("challenges", item.id, "supportNeeded", item.supportNeeded))}
      ${fieldWrap("الجهة المقترحة للمعالجة", inp("challenges", item.id, "proposedHandler", item.proposedHandler, "مثال: قسم شؤون المكاتب"))}
      ${fieldWrap("المدة اللازمة للمعالجة", inp("challenges", item.id, "resolutionTime", item.resolutionTime, "مثال: أسبوعان"))}
    </div>`).join("");
  return `${pillBtn("إضافة صعوبة", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "challenges" } })}<div style="margin:14px 0;">${rows}</div>${notesFieldHtml(d)}`;
}

/* ---- فرص التحسين ---- */
function improvementSectionHtml(d) {
  const items = d.opportunities || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">فرصة التحسين ${i + 1}</span>${removeBtn("opportunities", item.id)}</div>
      ${fieldWrap("اسم فرصة التحسين", true, inp("opportunities", item.id, "name", item.name, "مثال: تسريع الاستجابة لطلبات المستفيدات"))}
      ${fieldWrap("المجال الذي يمكن تحسينه", true, inp("opportunities", item.id, "field", item.field, "مثال: سرعة الاستجابة للطلبات"))}
      ${fieldWrap("الوضع الحالي", txt("opportunities", item.id, "currentStatus", item.currentStatus))}
      ${fieldWrap("الوضع المرغوب", txt("opportunities", item.id, "desiredStatus", item.desiredStatus))}
      ${fieldWrap("الفجوة بينهما", txt("opportunities", item.id, "gap", item.gap))}
      ${fieldWrap("الإجراء التحسيني", txt("opportunities", item.id, "action", item.action))}
      ${fieldWrap("الأثر المتوقع", txt("opportunities", item.id, "expectedImpact", item.expectedImpact))}
      ${fieldWrap("سهولة التنفيذ", radio("opportunities", item.id, "ease", item.ease, IMPROVEMENT_EASE_OPTIONS))}
      ${fieldWrap("الأولوية", radio("opportunities", item.id, "priority", item.priority, IMPROVEMENT_PRIORITY_OPTIONS))}
      ${fieldWrap("المسؤولة", inp("opportunities", item.id, "responsiblePerson", item.responsiblePerson, "اسم المسؤولة"))}
      ${fieldWrap("تاريخ التنفيذ", inp("opportunities", item.id, "implementationDate", item.implementationDate, "", "date"))}
      ${fieldWrap("مؤشر قياس نجاح التحسين", inp("opportunities", item.id, "successIndicator", item.successIndicator, "كيف ستعرفين أن التحسين نجح؟"))}
    </div>`).join("");
  return `${pillBtn("إضافة فرصة تحسين", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "opportunities" } })}<div style="margin:14px 0;">${rows}</div>${notesFieldHtml(d)}`;
}

/* ---- المبادرات والممارسات النوعية ---- */
function initiativesSectionHtml(d) {
  const items = d.initiatives || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">المبادرة ${i + 1}</span>${removeBtn("initiatives", item.id)}</div>
      ${fieldWrap("نوع المدخل", true, sel("initiatives", item.id, "entryType", item.entryType, INITIATIVE_ENTRY_TYPES, "اختاري نوع المدخل"))}
      <div class="subhead">بيانات المبادرة</div>
      ${fieldWrap("اسم المبادرة", true, inp("initiatives", item.id, "name", item.name, "اسم المبادرة أو الممارسة"))}
      ${fieldWrap("المشكلة التي تعالجها", txt("initiatives", item.id, "problem", item.problem))}
      ${fieldWrap("الفكرة باختصار", txt("initiatives", item.id, "ideaSummary", item.ideaSummary))}
      ${fieldWrap("الفئة المستهدفة", inp("initiatives", item.id, "targetGroup", item.targetGroup, "مثال: طالبات المستوى الأول"))}
      ${fieldWrap("مرحلة المبادرة", sel("initiatives", item.id, "stage", item.stage, INITIATIVE_STAGES, "اختاري مرحلة المبادرة"))}
      ${fieldWrap("عدد المستفيدات", inp("initiatives", item.id, "beneficiariesCount", item.beneficiariesCount, "0", "number"))}
      ${fieldWrap("النتائج الأولية", txt("initiatives", item.id, "preliminaryResults", item.preliminaryResults))}
      ${fieldWrap("الأثر المقاس", txt("initiatives", item.id, "measuredImpact", item.measuredImpact))}
      ${fieldWrap("التكلفة", inp("initiatives", item.id, "cost", item.cost, "مثال: 3500 ريال أو بدون تكلفة"))}
      ${fieldWrap("قابلية الاستمرار", radio("initiatives", item.id, "sustainability", item.sustainability, YES_NO_OPTIONS))}
      ${fieldWrap("قابلية التعميم", radio("initiatives", item.id, "scalability", item.scalability, YES_NO_OPTIONS))}
      ${fieldWrap("الاحتياجات", txt("initiatives", item.id, "needs", item.needs, "ما الدعم أو الموارد المطلوبة؟"))}
      ${fieldWrap("رابط ملف المبادرة", inp("initiatives", item.id, "fileLink", item.fileLink, "رابط المستند أو العرض التقديمي"))}
    </div>`).join("");
  return `${pillBtn("إضافة مبادرة", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "initiatives" } })}<div style="margin:14px 0;">${rows}</div>${notesFieldHtml(d)}`;
}

/* ---- الأثر وقصص النجاح ---- */
function impactSectionHtml(d) {
  const items = d.impactStories || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">قصة الأثر ${i + 1}</span>${removeBtn("impactStories", item.id)}</div>
      ${fieldWrap("نوع الأثر", true, sel("impactStories", item.id, "impactType", item.impactType, IMPACT_TYPES, "اختاري نوع الأثر"))}
      <div class="subhead">بناء قصة الأثر</div>
      ${fieldWrap("عنوان مختصر", true, inp("impactStories", item.id, "title", item.title, "عنوان قصة الأثر"))}
      ${fieldWrap("وصف الوضع قبل التدخل", txt("impactStories", item.id, "beforeSituation", item.beforeSituation))}
      ${fieldWrap("التدخل أو البرنامج المنفذ", txt("impactStories", item.id, "intervention", item.intervention))}
      ${fieldWrap("التغير الذي حدث", txt("impactStories", item.id, "change", item.change))}
      ${fieldWrap("الدليل على التغير", txt("impactStories", item.id, "evidence", item.evidence))}
      ${fieldWrap("عدد المستفيدات", inp("impactStories", item.id, "beneficiariesCount", item.beneficiariesCount, "0", "number"))}
      ${fieldWrap("مدة ظهور الأثر", inp("impactStories", item.id, "impactDuration", item.impactDuration, "مثال: شهرين"))}
      ${fieldWrap("هل الأثر مستمر؟", radio("impactStories", item.id, "ongoing", item.ongoing, YES_NO_OPTIONS))}
      ${fieldWrap("شهادة مستفيدة إن وجدت", txt("impactStories", item.id, "testimonial", item.testimonial, "اقتباس أو شهادة من مستفيدة"))}
      ${fieldWrap("رابط الشاهد", inp("impactStories", item.id, "evidenceLink", item.evidenceLink, "https://..."))}
      ${fieldWrap("هل يسمح بعرض القصة في التقرير العام؟", radio("impactStories", item.id, "publicConsent", item.publicConsent, YES_NO_OPTIONS))}
    </div>`).join("");
  return `${pillBtn("إضافة قصة أثر", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "impactStories" } })}<div style="margin:14px 0;">${rows}</div>${notesFieldHtml(d)}`;
}

/* ---- التوصيات ---- */
function recommendationsSectionHtml(d) {
  const items = d.recommendations || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">التوصية ${i + 1}</span>${removeBtn("recommendations", item.id)}</div>
      ${fieldWrap("مصدر التوصية", true, sel("recommendations", item.id, "source", item.source, RECOMMENDATION_SOURCES, "اختاري مصدر التوصية"))}
      ${fieldWrap("مستوى التوصية", true, sel("recommendations", item.id, "level", item.level, RECOMMENDATION_LEVELS, "اختاري مستوى التوصية"))}
      <div class="subhead">بيانات التوصية</div>
      ${fieldWrap("نص التوصية", true, txt("recommendations", item.id, "text", item.text, "نص التوصية بوضوح"))}
      ${fieldWrap("الدليل الذي بنيت عليه", txt("recommendations", item.id, "evidenceBasis", item.evidenceBasis))}
      ${fieldWrap("النتيجة المتوقعة", txt("recommendations", item.id, "expectedResult", item.expectedResult))}
      ${fieldWrap("الأولوية", radio("recommendations", item.id, "priority", item.priority, RECOMMENDATION_PRIORITIES))}
      ${fieldWrap("الجهة المسؤولة", inp("recommendations", item.id, "responsibleParty", item.responsibleParty, "الجهة المسؤولة عن التنفيذ"))}
      ${fieldWrap("الجهات المساندة", inp("recommendations", item.id, "supportingParties", item.supportingParties, "الجهات المساندة، إن وجدت"))}
      ${fieldWrap("المدة المقترحة", inp("recommendations", item.id, "proposedDuration", item.proposedDuration, "مثال: شهر واحد"))}
      ${fieldWrap("التكلفة المتوقعة", inp("recommendations", item.id, "expectedCost", item.expectedCost, "مثال: 2000 ريال أو بدون تكلفة"))}
      ${fieldWrap("مؤشر تحقق التوصية", inp("recommendations", item.id, "indicator", item.indicator, "كيف ستعرفين أن التوصية تحققت؟"))}
    </div>`).join("");
  return `${pillBtn("إضافة توصية", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "recommendations" } })}<div style="margin:14px 0;">${rows}</div>${notesFieldHtml(d)}`;
}

/* ---- خطة الفترة القادمة ---- */
function nextplanSectionHtml(d) {
  const items = d.mainTasks || [];
  const MIN = 3, MAX = 5;
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">العمل الرئيسي ${i + 1}</span>${removeBtn("mainTasks", item.id)}</div>
      ${fieldWrap("اسم العمل الرئيسي", true, inp("mainTasks", item.id, "name", item.name, "اسم العمل المخطط له في الفترة القادمة"))}
      ${fieldWrap("الهدف منه", txt("mainTasks", item.id, "goal", item.goal))}
      ${fieldWrap("المسؤولة عنه", inp("mainTasks", item.id, "responsiblePerson", item.responsiblePerson, "اسم المسؤولة"))}
      ${fieldWrap("الموعد المتوقع", inp("mainTasks", item.id, "expectedDate", item.expectedDate, "", "date"))}
    </div>`).join("");
  return `
    <div class="hint" style="background:${GRAY_BG};border-radius:10px;padding:9px 12px;margin-bottom:14px;">تضيف الوحدة من ${MIN} إلى ${MAX} أعمال رئيسة فقط لخطة الفترة القادمة.</div>
    ${pillBtn(items.length >= MAX ? `بلغتِ الحد الأقصى (${MAX} أعمال)` : "إضافة عمل رئيسي", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "mainTasks" }, disabled: items.length >= MAX })}
    <div style="margin:14px 0;">${rows}</div>
    ${items.length > 0 && items.length < MIN ? `<div class="hint bad">أضيفي ${MIN - items.length} عمل/أعمال إضافية على الأقل لاستيفاء الحد الأدنى (${MIN}).</div>` : ""}
    ${notesFieldHtml(d)}`;
}

/* ---- الشواهد والمرفقات ---- */
function evidenceSectionHtml(d) {
  const items = d.evidenceItems || [];
  const rows = items.map((item, i) => `
    <div class="repeat-item">
      <div class="repeat-item-head"><span class="repeat-item-title">الشاهد ${i + 1}</span>${removeBtn("evidenceItems", item.id)}</div>
      ${fieldWrap("نوع الشاهد", true, sel("evidenceItems", item.id, "evidenceType", item.evidenceType, EVIDENCE_TYPES_LIST, "اختاري نوع الشاهد"))}
      <div class="subhead">بيانات الشاهد</div>
      ${fieldWrap("اسم الشاهد", true, inp("evidenceItems", item.id, "name", item.name, "اسم الشاهد"))}
      ${fieldWrap("القسم المرتبط به", sel("evidenceItems", item.id, "relatedDepartment", item.relatedDepartment, S.departments.filter((x) => x.status === "active").map((x) => x.name), "اختاري القسم (اختياري)"))}
      ${fieldWrap("رابط الملف", inp("evidenceItems", item.id, "fileLink", item.fileLink, "رابط الملف بالمستودع"))}
      ${fieldWrap("وصف مختصر", txt("evidenceItems", item.id, "description", item.description))}
      ${fieldWrap("درجة السرية", true, radio("evidenceItems", item.id, "confidentiality", item.confidentiality, CONFIDENTIALITY_LEVELS))}
    </div>`).join("");
  return `
    <div class="hint" style="background:${GRAY_BG};border-radius:10px;padding:9px 12px;margin-bottom:14px;">لا تُدرج الصور أو الملفات داخل التقرير نفسه — تُحفظ بالمستودع الخاص بها ويُكتفى برابطها هنا.</div>
    ${pillBtn("إضافة شاهد", { variant: "ghost", icon: iconPlus(15, ROSE), action: "add-item", data: { arr: "evidenceItems" } })}
    <div style="margin:14px 0;">${rows}</div>
    ${notesFieldHtml(d)}`;
}

/* ---- الإقرار والمراجعة ---- */
// القسم صار على محرك الحقول العام (SECTION_FIELD_SCHEMAS.review، fixed: true) —
// بنود قائمة التحقق نفسها قابلة للإدارة الذاتية (إضافة/حذف/تعديل نص/ترتيب) من
// لوحة "إدارة حقول الأقسام". "حالة الإرسال الحالية" تبقى بكود ثابت لأنها مُشتقة
// من report.status (حالة النظام) وليست بيانات يُدخلها المستخدم داخل d.
function reviewSectionHtml(d, report) {
  const meta = reportStatusMeta(report.status);
  return `
    ${renderSchemaFixedHtml(SECTION_FIELD_SCHEMAS.review, d)}
    <div class="subhead">حالة الإرسال الحالية</div>
    ${fieldWrap("الحالة", badgeHtml(meta.label, meta.color, meta.bg) + `<div class="hint">تُغيَّر الحالة من الأزرار أسفل الصفحة (حفظ كمسودة / إرسال للمراجعة / إعادة للتعديل / اعتماد نهائي).</div>`)}

    ${notesFieldHtml(d)}`;
}

/* =============================== Empty-item factories ========================= */
const EMPTY_ITEM_FACTORY = {
  programs: () => ({ id: uid("prog"), workType: "", name: "", goal: "", targetGroup: "", targetCount: "", actualBeneficiaries: "", countUnit: "", achievedCount: "", startDate: "", endDate: "", location: "", deliveryMode: "", executingEntity: "", participatingEntities: "", responsiblePerson: "", executionStatus: "", completionPercent: "", attendeesCount: "", attendanceRate: "", continuationRate: "", approvedCost: "", actualCost: "", highlightResult: "" }),
  tools: () => ({ id: uid("tool"), toolType: "", name: "", purpose: "", relatedProgram: "", targetGroup: "", populationSize: "", sampleSize: "", respondentsCount: "", applicationDate: "", toolLink: "", resultsLink: "", resultQuality: "" }),
  comparisons: () => ({ id: uid("cmp"), topic: "", resultValue: "", judgment: "", changeReason: "" }),
  challenges: () => ({ id: uid("chl"), name: "", area: "", severity: "", scope: "", description: "", rootCause: "", performanceImpact: "", startedWhen: "", recurred: "", actionTaken: "", actionResult: "", stillOngoing: "", supportNeeded: "", proposedHandler: "", resolutionTime: "" }),
  opportunities: () => ({ id: uid("imp"), name: "", field: "", currentStatus: "", desiredStatus: "", gap: "", action: "", expectedImpact: "", ease: "", priority: "", responsiblePerson: "", implementationDate: "", successIndicator: "" }),
  initiatives: () => ({ id: uid("init"), entryType: "", name: "", problem: "", ideaSummary: "", targetGroup: "", stage: "", beneficiariesCount: "", preliminaryResults: "", measuredImpact: "", cost: "", sustainability: "", scalability: "", needs: "", fileLink: "" }),
  strengths: () => ({ id: uid("str"), name: "", area: "", description: "", evidence: "", impact: "", continuity: "", maintainHow: "", transferable: "" }),
  indicators: () => ({ id: uid("kpi"), name: "", actual: "", deviationReason: "", causeType: "", correctiveAction: "", responsiblePerson: "", closureDate: "", requiredSupport: "" }),
  goals: () => ({ id: uid("goal"), strategicGoal: "", operationalGoals: [] }),
  impactStories: () => ({ id: uid("imp2"), impactType: "", title: "", beforeSituation: "", intervention: "", change: "", evidence: "", beneficiariesCount: "", impactDuration: "", ongoing: "", testimonial: "", evidenceLink: "", publicConsent: "" }),
  recommendations: () => ({ id: uid("rec"), source: "", level: "", text: "", evidenceBasis: "", expectedResult: "", priority: "", responsibleParty: "", supportingParties: "", proposedDuration: "", expectedCost: "", indicator: "" }),
  mainTasks: () => ({ id: uid("task"), name: "", goal: "", responsiblePerson: "", expectedDate: "" }),
  evidenceItems: () => ({ id: uid("evd"), evidenceType: "", name: "", relatedDepartment: "", fileLink: "", description: "", confidentiality: "" }),
};

// Maps a field (scoped by its repeatable array, or "top" for top-level fields)
// to the top-level custom-options array it should append newly typed values to.
const CUSTOM_OPTION_FIELD_MAP = {
  "top|reportingEntityType": "customReportingTypes",
  "top|officeName": "customOfficeNames",
  "top|term": "customTerms",
  "programs|workType": "customWorkTypes",
  "programs|countUnit": "customCountUnits",
  "tools|toolType": "customToolTypes",
  "strengths|area": "customStrengthAreas",
  "challenges|area": "customChallengeAreas",
  "comparisons|changeReason": "customChangeReasons",
  "goals|evidenceType": "customEvidenceTypes",
};

/* =============================== Full report + preview (read view) ============ */
function kv(label, value) {
  if (value === undefined || value === null || value === "") return "";
  return `<span>${esc(label)}: <b>${esc(value)}</b></span>`;
}
function kvBlock(pairs) {
  const html = pairs.filter(Boolean).join("");
  return html ? `<div class="doc-kv">${html}</div>` : "";
}
function textBlock(label, value) {
  if (!value) return "";
  return `<div style="margin-bottom:8px;"><div style="font-size:11px;color:${SUBTLE};font-weight:700;">${esc(label)}</div><div style="font-size:12.5px;">${esc(value)}</div></div>`;
}
function reportTable(headers, rows) {
  if (!rows.length) return "";
  if (RPT_CTX && RPT_CTX.section) {
    if (RPT_CTX.capture) { const c = RPT_CTX.capture[RPT_CTX.section] = RPT_CTX.capture[RPT_CTX.section] || []; headers.forEach((h) => { if (h && !c.includes(h)) c.push(h); }); }
    const hid = RPT_CTX.hiddenCols && RPT_CTX.hiddenCols[RPT_CTX.section];
    if (hid && hid.length) {
      const keep = headers.map((h, i) => (hid.includes(h) ? -1 : i)).filter((i) => i >= 0);
      if (keep.length && keep.length < headers.length) { headers = keep.map((i) => headers[i]); rows = rows.map((r) => keep.map((i) => r[i])); }
    }
  }
  return `<div class="table-wrap" style="margin-bottom:10px;"><table class="prs-table">
    <thead><tr style="background:${GRAY_BG}">${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td${RPT_CTX && RPT_CTX.numCenter && rptIsNumCell(c) ? ' style="text-align:center"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}
// خلية رقمية (عدد/نسبة/كسر) — لخيار «توسيط الأرقام تلقائيًا»
function rptIsNumCell(c) { const t = String(c == null ? "" : c).replace(/<[^>]*>/g, "").trim(); return /[0-9٠-٩]/.test(t) && /^[\s0-9٠-٩.,٫٪%\/+\-—()]+$/.test(t); }
function emptyHint(label) { return `<div class="hint">${esc(label)}</div>`; }

// عرض عام لأي قسم أُضيف من «إدارة أقسام التقرير» (حقوله من «إدارة حقول الأقسام»)
function schemaFieldText(v) {
  if (v == null || v === "") return "";
  if (Array.isArray(v)) return v.filter((x) => x != null && x !== "").join("، ");
  if (typeof v === "object") return Object.keys(v).filter((k) => v[k]).join("، ");
  return String(v);
}
/* ---- جداول «عرض التقرير كاملًا» تُبنى من حقول «إدارة حقول الأقسام» ----
   كل حقل = عمود (النصوص الطويلة تُكتب تحت الجدول). أي حقل تضيفه مديرة النظام يظهر تلقائيًا،
   وحقول الكود الأصلية التي لم تكن في الجدول سابقًا مخفية افتراضيًا (تُظهر من «تنسيق وإنشاء التقارير»). */
const RPT_LEGACY_COLS = {
  recommendations: ["text", "source", "level", "priority", "responsibleParty"],
  programs: ["name", "workType", "targetGroup", "targetCount", "actualBeneficiaries", "achievedCount", "executionStatus", "highlightResult"],
  tools: ["name", "toolType", "sampleSize", "respondentsCount", "responseRate", "resultQuality"],
  challenges: ["name", "area", "severity", "scope", "stillOngoing"],
  improvement: ["name", "field", "priority", "ease", "responsiblePerson"],
  initiatives: ["name", "entryType", "stage", "beneficiariesCount"],
  impact: ["title", "impactType", "beneficiariesCount", "ongoing"],
  strengths: ["name", "area", "continuity", "transferable", "description"],
  evidence: ["name", "evidenceType", "relatedDepartment", "fileLink", "confidentiality"],
  analysis: ["topic", "resultValue", "judgment", "changeReason"],
};
const RPT_LEGACY_BLOCKS = { programs: ["highlightResult"], strengths: ["description"] };
// حقول الكود الأصلية لكل قسم (قبل أي تعديل من «إدارة حقول الأقسام»)
const RPT_CODE_FIELD_IDS = Object.keys(SECTION_FIELD_SCHEMAS).reduce((m, k) => { m[k] = (SECTION_FIELD_SCHEMAS[k].fields || []).map((f) => f.id); return m; }, {});
function rptSchemaFor(sid) { return sid === "analysis" ? SECTION_FIELD_SCHEMAS.analysisComparisons : SECTION_FIELD_SCHEMAS[sid]; }
function rptSchemaKey(sid) { return sid === "analysis" ? "analysisComparisons" : sid; }
function rptFieldDefaultOn(sid, f) {
  const legacy = RPT_LEGACY_COLS[sid];
  if (!legacy) return true; // قسم مضاف أو بلا جدول سابق: كل الحقول ظاهرة
  if (!(RPT_CODE_FIELD_IDS[rptSchemaKey(sid)] || []).includes(f.id)) return true; // حقل أضافته مديرة النظام
  return legacy.includes(f.id);
}
// ظهور الحقل حسب إعداد التنسيق (hidden = مخفي، show = إظهار حقل مخفي افتراضيًا). الاسم = مفتاح العمود.
function rptFieldVisibleIn(sid, f, hiddenCols, colsShow) {
  const lbl = f.label || f.id;
  if (((colsShow || {})[sid] || []).includes(lbl)) return true;
  return rptFieldDefaultOn(sid, f) && !(((hiddenCols || {})[sid] || []).includes(lbl));
}
function rptVisibleFields(sid) {
  const sc = rptSchemaFor(sid);
  const fields = sc ? (sc.fields || []).filter((f) => f && f.id) : [];
  const ctx = RPT_CTX || {};
  return fields.filter((f) => rptFieldVisibleIn(sid, f, ctx.hiddenCols, ctx.colsShow));
}
function rptFieldCellHtml(sid, f, it) {
  let v = it[f.id];
  if (f.type === "computed" && f.id === "responseRate") { const r = computeResponseRate(it.sampleSize, it.respondentsCount); return r != null ? r + "٪" : "—"; }
  const t = schemaFieldText(v);
  if (!t) return "—";
  if (f.id === "severity") { const m = challengeSeverityMeta(t); return badgeHtml(t, m.color, m.bg); }
  if (f.id === "priority") { const m = improvementPriorityMeta(t); return badgeHtml(t, m.color, m.bg); }
  if (f.id === "judgment") { const m = comparisonJudgmentMeta(t); return badgeHtml(t, m.color, m.bg); }
  if (f.id === "achievedCount" && it.countUnit) return esc(t + " " + schemaFieldText(it.countUnit));
  return esc(t);
}
// جدول عام لعناصر قسم + النصوص الطويلة تحته
function rptSchemaItemsHtml(sid, items, emptyText) {
  items = (items || []).filter(rptHasValue);
  if (!items.length) return emptyHint(emptyText || "لم يُدخل محتوى بعد.");
  const fields = rptVisibleFields(sid);
  // النص الطويل يُكتب تحت الجدول، إلا ما كان عمودًا أصلًا في الجدول القديم (مثل «نص التوصية»)
  const asCol = (f) => f.type !== "textarea" || ((RPT_LEGACY_COLS[sid] || []).includes(f.id) && !(RPT_LEGACY_BLOCKS[sid] || []).includes(f.id));
  const short = fields.filter(asCol);
  const long = fields.filter((f) => !asCol(f));
  const titleOf = (it, i) => schemaFieldText(it.name) || schemaFieldText(it.title) || schemaFieldText(it[(short[0] || {}).id]) || arabicDigits(i + 1);
  let html = short.length ? reportTable(short.map((f) => f.label || f.id), items.map((it) => short.map((f) => rptFieldCellHtml(sid, f, it)))) : "";
  items.forEach((it, i) => long.forEach((f) => { const t = schemaFieldText(it[f.id]); if (t) html += textBlock(`${f.label || f.id}${items.length > 1 || !short.length ? " — " + titleOf(it, i) : ""}`, t); }));
  return html;
}
// قسم بحقول ثابتة (عنصر واحد)
function rptSchemaFixedHtml(sid, d) {
  const fields = rptVisibleFields(sid).filter((f) => schemaFieldText(d[f.id]));
  return fields.length ? reportTable(["البند", "القيمة"], fields.map((f) => [esc(f.label || f.id), rptFieldCellHtml(sid, f, d)])) : emptyHint("لم يُدخل محتوى بعد.");
}
function rptSectionItemsOf(sid, d) { const sc = rptSchemaFor(sid); return sc ? d[sc.arrayKey || sid] || [] : []; }
// أعمدة قسم لصفحة التنسيق: [{label, on, def}] — من الحقول (أو من الجداول المرسومة للأقسام الخاصة)
function rptSectionColumns(sid, s, captured) {
  const sc = rptSchemaFor(sid);
  if (sc && !(sid === "review")) {
    return (sc.fields || []).filter((f) => f && f.id).map((f) => ({ label: f.label || f.id, def: rptFieldDefaultOn(sid, f), on: rptFieldVisibleIn(sid, f, s.hiddenCols, s.colsShow) }));
  }
  return ((captured || {})[sid] || []).map((h) => ({ label: h, def: true, on: !((s.hiddenCols[sid] || []).includes(h)) }));
}
function sectionBodyOnly(section, saved, report) {
  const d = (saved && saved.data) || {};
  let body = "";

  if (section.id === "basic") {
    const factGrid = (items) => {
      const filtered = items.filter((it) => it.value);
      if (!filtered.length) return "";
      return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-bottom:12px;">${filtered.map((it) => `
        <div style="display:flex;align-items:center;gap:8px;background:#f7f0e9;border-radius:8px;padding:8px 10px;">
          <div style="width:26px;height:26px;border-radius:50%;background:#f4ece4;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${it.icon(13, "var(--rpt-burgundy)")}</div>
          <div><div style="font-size:9.5px;color:var(--rpt-gray);">${esc(it.label)}</div><div style="font-size:11.5px;font-weight:700;color:var(--rpt-ink);">${esc(it.value)}</div></div>
        </div>`).join("")}</div>`;
    };
    const icon = (f) => (f.type === "date" || /date|year|month|term|period/i.test(f.id) ? iconCalendarSmall : /prepar|manager|name$/i.test(f.id) ? iconPencil : iconBuilding2);
    body = factGrid(rptVisibleFields("basic").map((f) => ({ icon: icon(f), label: f.label || f.id, value: schemaFieldText(d[f.id]) })));
    if (!body) body = emptyHint("لم تُدخل البيانات الأساسية بعد.");

  } else if (section.id === "kpi") {
    const rows = (d.indicators || []).filter((r) => r.name);
    if (!rows.length) { body = emptyHint("لا توجد مؤشرات مُدخلة."); }
    else {
      const barData = rows.map((row) => {
        const def = findIndicatorDef(row.name);
        const resolved = resolveIndicatorRow(row, def);
        const status = def ? computeIndicatorStatus(resolved) : { emoji: "⚪", label: "—", color: SUBTLE, ratio: null };
        return { label: row.name, value: Math.round(Math.min(1, Math.max(0, status.ratio || 0)) * 100), color: status.color, row, def, status };
      });
      body = rptChart("u-kpi", barData, { height: 190 }) +
        reportTable(["المؤشر", "المستهدف", "المتحقق", "الحالة"], barData.map((b) => [
          esc(b.row.name),
          esc(b.def && b.def.target !== "" ? b.def.target : "—"),
          esc(b.row.actual !== "" ? b.row.actual : "—"),
          `<span style="color:${b.status.color};font-weight:800;">${b.status.emoji} ${esc(b.status.label)}</span>`,
        ]));
    }

  } else if (section.id === "goals") {
    const flat = [];
    (d.goals || []).forEach((g) => (g.operationalGoals || []).forEach((og) => flat.push({ ...og, strategicGoal: g.strategicGoal })));
    if (!flat.length) { body = emptyHint("لا توجد أهداف مُدخلة."); }
    else {
      body = reportTable(["الهدف الاستراتيجي", "الهدف التشغيلي", "المستوى", "النسبة"], flat.map((og) => {
        const gm = goalLevelMeta(og.level);
        const bar = og.percentage !== "" ? `<div style="display:flex;align-items:center;gap:6px;"><div style="width:70px;">${progressBarHtml(og.percentage || 0, gm.color)}</div><b style="color:${gm.color}">${og.percentage}٪</b></div>` : "—";
        return [esc(og.strategicGoal), esc(og.name), og.level ? badgeHtml(og.level, gm.color, gm.bg) : "—", bar];
      }));
    }

  } else if (section.id === "programs") {
    const rows = d.programs || [];
    if (rows.length) {
      const statusCounts = {};
      rows.forEach((p) => { const k = p.executionStatus || "غير محدد"; statusCounts[k] = (statusCounts[k] || 0) + 1; });
      const shades = ["#6b2337", "#8a3350", "#c26b85", "#d8c4a8", "#a8a29a"];
      const donutData = Object.keys(statusCounts).map((k, i) => ({ label: k, value: statusCounts[k], color: shades[i % shades.length] }));
      body = rptChart("u-programs", donutData, { size: 150, wrapDonut: "max-width:220px;margin:0 auto 14px;" });
      body += rptSchemaItemsHtml("programs", rows);
    } else { body = emptyHint("لا توجد أعمال مُدخلة."); }

  } else if (section.id === "tools") {
    body = rptSchemaItemsHtml("tools", d.tools, "لا توجد أدوات مُدخلة.");

  } else if (section.id === "analysis") {
    body = textBlock("أبرز نتيجة إيجابية", d.positiveResult) + textBlock("تفسيرها", d.positiveInterpretation) +
      textBlock("أبرز نتيجة تحتاج تحسين", d.improvementResult) + textBlock("الإجراء المقترح", d.improvementAction);
    if ((d.comparisons || []).filter(rptHasValue).length) body += rptSchemaItemsHtml("analysis", d.comparisons);
    body += textBlock("الخلاصة التحليلية", d.summary);

  } else if (section.id === "strengths") {
    const rows = d.strengths || [];
    if (rows.length) {
      const cards = rows.slice(0, 4).map((s) => `
        <div style="flex:1;min-width:110px;text-align:center;padding:10px 6px;background:#f7f0e9;border-radius:10px;">
          <div style="width:34px;height:34px;border-radius:50%;background:#f4ece4;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;">${iconCheckCircle(16, "var(--rpt-burgundy)")}</div>
          <div style="font-size:11px;font-weight:700;color:var(--rpt-burgundy);">${esc(s.name || "—")}</div>
        </div>`).join("");
      body = `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">${cards}</div>`;
      body += rptSchemaItemsHtml("strengths", rows);
    } else { body = emptyHint("لا توجد نقاط قوة مُدخلة."); }

  } else if (section.id === "challenges") {
    const rows = d.challenges || [];
    if (rows.length) {
      const sevCounts = {};
      rows.forEach((c) => { const k = c.severity || "غير محدد"; sevCounts[k] = (sevCounts[k] || 0) + 1; });
      const sevShades = { "حرج": DANGER, "مرتفع": "#c9863a", "متوسط": GOLD, "منخفض": GREEN };
      const donutData = Object.keys(sevCounts).map((k) => ({ label: k, value: sevCounts[k], color: sevShades[k] || SUBTLE }));
      body = rows.length > 1 ? rptChart("u-challenges", donutData, { size: 140, wrapDonut: "max-width:200px;margin:0 auto 14px;" }) : "";
      body += rptSchemaItemsHtml("challenges", rows);
    } else { body = emptyHint("لا توجد صعوبات مُدخلة."); }

  } else if (section.id === "improvement") {
    body = rptSchemaItemsHtml("improvement", d.opportunities, "لا توجد فرص تحسين مُدخلة.");

  } else if (section.id === "initiatives") {
    body = rptSchemaItemsHtml("initiatives", d.initiatives, "لا توجد مبادرات مُدخلة.");

  } else if (section.id === "impact") {
    const rows = d.impactStories || [];
    if (rows.length) {
      const cards = rows.slice(0, 4).map((it) => `
        <div style="flex:1;min-width:120px;text-align:center;padding:10px 8px;background:#f7f0e9;border-radius:10px;">
          <div style="width:34px;height:34px;border-radius:50%;background:#f4ece4;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;">${iconSparkles(16, "var(--rpt-burgundy)")}</div>
          <div style="font-size:11px;font-weight:700;color:var(--rpt-burgundy);">${esc(it.title || "—")}</div>
          <div style="font-size:9.5px;color:var(--rpt-gray);margin-top:2px;">${esc(it.beneficiariesCount || "—")} مستفيدة</div>
        </div>`).join("");
      body = `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">${cards}</div>`;
      body += rptSchemaItemsHtml("impact", rows);
    } else { body = emptyHint("لا توجد قصص أثر مُدخلة."); }

  } else if (section.id === "recommendations") {
    const rows = d.recommendations || [];
    if (rows.length) {
      const prCounts = {};
      rows.forEach((it) => { const k = it.priority || "غير محدد"; prCounts[k] = (prCounts[k] || 0) + 1; });
      const prShades = { "عاجلة": DANGER, "عالية": "#c9863a", "متوسطة": GOLD, "منخفضة": GREEN };
      const prData = Object.keys(prCounts).map((k) => ({ label: k, value: prCounts[k], color: prShades[k] || SUBTLE }));
      body = rows.length > 1 ? rptChart("u-recs", prData, { height: 130 }) : "";
      body += rptSchemaItemsHtml("recommendations", rows);
    } else { body = emptyHint("لا توجد توصيات مُدخلة."); }

  } else if (section.id === "nextplan") {
    const rows = (d.mainTasks || []).filter(rptHasValue);
    if (rows.length) {
      const fields = rptVisibleFields("nextplan");
      const head = fields.find((f) => f.id === "name") || fields[0];
      const rest = fields.filter((f) => f !== head);
      body = rows.map((it, i) => `
        <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--rpt-burgundy);color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${arabicDigits(i + 1)}</div>
          <div style="flex:1;border-bottom:1px solid var(--rpt-line);padding-bottom:8px;">
            <div style="font-size:12px;font-weight:700;color:var(--rpt-ink);">${esc((head && schemaFieldText(it[head.id])) || "—")}</div>
            ${rest.length ? `<div style="font-size:10.5px;color:var(--rpt-gray);margin-top:2px;">${rest.map((f) => esc(schemaFieldText(it[f.id]) || "—")).join(" — ")}</div>` : ""}
          </div>
        </div>`).join("");
    } else { body = emptyHint("لم تُضف أعمال رئيسة بعد."); }

  } else if (section.id === "evidence") {
    body = rptSchemaItemsHtml("evidence", d.evidenceItems, "لا توجد شواهد مُدخلة بعد.");

  } else if (section.id === "review") {
    const checklist = d.checklist || {};
    // قائمة البنود تُقرأ من تعريف الحقل نفسه (SECTION_FIELD_SCHEMAS.review) بدل
    // الثابت القديم REVIEW_CHECKLIST_ITEMS — عشان لو عدّلت نجود بنود القائمة من
    // لوحة الإدارة، تنعكس هنا بنفس اللحظة. كل بند يُخزَّن بنص عنوانه مباشرة
    // (بدون مفتاح إنجليزي منفصل) — بنفس أسلوب كل حقول select/radio الأخرى بهذا
    // المحرك، اللي تُخزَّن بنص الخيار نفسه.
    const checklistItems = (SECTION_FIELD_SCHEMAS.review.fields.find((f) => f.id === "checklist") || {}).options || [];
    const doneCount = checklistItems.filter((label) => checklist[label]).length;
    body = kvBlock([kv("قائمة التحقق", `${doneCount} من ${checklistItems.length}`)]);
    body += reportTable(["بند التحقق", "الحالة"], checklistItems.map((label) => [esc(label), checklist[label] ? `<span style="color:${GREEN};font-weight:800;">✓ تم</span>` : `<span style="color:${SUBTLE};">لم يتم</span>`]));
    if (d.managerDecision) body += kvBlock([kv("قرار المراجعة", d.managerDecision)]);
    if (d.managerNotesText) body += textBlock("ملاحظات المديرة المباشرة", d.managerNotesText);

  } else if (SECTION_FIELD_SCHEMAS[section.id] && (SECTION_FIELD_SCHEMAS[section.id].fields || []).length) {
    // قسم مضاف له حقول من «إدارة حقول الأقسام»
    const sc = SECTION_FIELD_SCHEMAS[section.id];
    body = sc.fixed ? rptSchemaFixedHtml(section.id, d) : rptSchemaItemsHtml(section.id, rptSectionItemsOf(section.id, d));
    if (d.content) body = textBlock("المحتوى", d.content) + body.replace(/<div class="hint">لم يُدخل محتوى بعد.<\/div>/, "");
  } else {
    body = textBlock("المحتوى", d.content) || emptyHint("لم يُدخل محتوى بعد.");
  }
  if (d.notes) body += textBlock("ملاحظات", d.notes);
  return body;
}
function comparisonJudgmentMeta(judgment) {
  if (judgment === "تحسن") return { color: GREEN, bg: GREEN_BG };
  if (judgment === "ثابت") return { color: BLUE, bg: BLUE_BG };
  if (judgment === "تراجع") return { color: DANGER, bg: DANGER_BG };
  return { color: SUBTLE, bg: GRAY_BG };
}
function challengeSeverityMeta(level) {
  if (level === "منخفض") return { color: GREEN, bg: GREEN_BG };
  if (level === "متوسط") return { color: GOLD, bg: GOLD_BG };
  if (level === "مرتفع") return { color: DANGER, bg: DANGER_BG };
  if (level === "حرج") return { color: "#7a3d34", bg: DANGER_BG };
  return { color: SUBTLE, bg: GRAY_BG };
}
function improvementPriorityMeta(priority) {
  if (priority === "عاجلة") return { color: "#7a3d34", bg: DANGER_BG };
  if (priority === "عالية") return { color: DANGER, bg: DANGER_BG };
  if (priority === "متوسطة") return { color: GOLD, bg: GOLD_BG };
  if (priority === "منخفضة") return { color: GREEN, bg: GREEN_BG };
  return { color: SUBTLE, bg: GRAY_BG };
}

function reportSummaryHtml(report, title) {
  const progress = computeProgress(report);
  const indicators = (report.sections?.kpi?.data?.indicators || []).filter((r) => r.name);
  const statusCounts = { achieved: 0, close: 0, needsAction: 0, struggling: 0, noData: 0 };
  indicators.forEach((row) => {
    const def = findIndicatorDef(row.name);
    const st = computeIndicatorStatus(resolveIndicatorRow(row, def));
    statusCounts[st.key] = (statusCounts[st.key] || 0) + 1;
  });
  const goalsFlat = [];
  (report.sections?.goals?.data?.goals || []).forEach((g) => (g.operationalGoals || []).forEach((og) => goalsFlat.push(og)));
  const goalLevelCounts = {};
  goalsFlat.forEach((g) => { if (g.level) goalLevelCounts[g.level] = (goalLevelCounts[g.level] || 0) + 1; });
  const avgGoalPct = goalsFlat.length ? Math.round(goalsFlat.reduce((s, g) => s + (Number(g.percentage) || 0), 0) / goalsFlat.length) : 0;

  const RPT_SHADES = ["#4d1827", "#8a3350", "#c26b85", "#d8c4a8", "#a8a29a"];
  const indicatorPie = indicators.length ? rptChart("u-indStatus", [
    { label: "متحقق", value: statusCounts.achieved, color: RPT_SHADES[0] },
    { label: "قريب من المستهدف", value: statusCounts.close, color: RPT_SHADES[1] },
    { label: "يحتاج تدخلاً", value: statusCounts.needsAction, color: RPT_SHADES[2] },
    { label: "متعثر", value: statusCounts.struggling, color: RPT_SHADES[3] },
    { label: "بلا بيانات", value: statusCounts.noData, color: RPT_SHADES[4] },
  ], { size: 120, wrapDonut: "" }) : emptyHint("لا توجد مؤشرات بعد.");

  const goalPie = goalsFlat.length ? rptChart("u-goalLevels", GOAL_LEVELS.map((lvl, i) => ({ label: lvl, value: goalLevelCounts[lvl] || 0, color: RPT_SHADES[i % RPT_SHADES.length] })), { size: 120, wrapDonut: "" }) : emptyHint("لا توجد أهداف بعد.");

  return `
    <div class="rpt-chapter-head">
      <div class="rpt-chapter-icon">${iconSparkles(18, "#fff")}</div>
      <h2 class="rpt-chapter-title">${esc(title || "ملخص التقرير")}</h2>
    </div>
    <div class="stat-grid" style="margin-bottom:16px;">
      ${statIconCardHtml("نسبة إنجاز التقرير", progress.percent + "٪", iconGauge("var(--rpt-burgundy)", 18), "#f4ece4")}
      ${statIconCardHtml("عدد المؤشرات", indicators.length, iconDocument(18, "var(--rpt-burgundy)"), "#f4ece4")}
      ${statIconCardHtml("عدد الأهداف التشغيلية", goalsFlat.length, iconLayers(18, "var(--rpt-burgundy)"), "#f4ece4")}
      ${statIconCardHtml("متوسط نسبة تحقق الأهداف", avgGoalPct + "٪", iconCheckCircle(18, "var(--rpt-burgundy)"), "#f4ece4")}
    </div>
    ${indicatorPie || goalPie ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">
      ${indicatorPie ? `<div><div class="rpt-subheading" style="margin-top:0;">توزيع حالات المؤشرات</div>${indicatorPie}</div>` : ""}
      ${goalPie ? `<div><div class="rpt-subheading" style="margin-top:0;">توزيع مستويات تحقق الأهداف</div>${goalPie}</div>` : ""}
    </div>` : ""}`;
}

/* يجمع أكثر من قسم تحت عنوان فصل واحد رسمي — إذا كان الفصل يحوي أكثر من قسم،
   يضيف عنوانًا فرعيًا لكل قسم داخله بدون تكرار شارة الحالة (لا نفقد أي معلومة،
   فقط ننظمها ضمن هيكل التقرير الرسمي المطلوب). */
function reportChapterHtml(iconFn, title, sectionIds, report, extraTop) {
  const sections = sectionIds.map((sid) => SECTIONS.find((x) => x.id === sid)).filter(Boolean);
  const showSubheadings = sections.length > 1;
  const parts = sections.map((section) => {
    if (RPT_CTX) RPT_CTX.section = section.id; // للأعمدة المخفية/المعروضة لكل قسم
    const body = sectionBodyOnly(section, report.sections?.[section.id], report);
    if (RPT_CTX) RPT_CTX.section = null;
    return `${showSubheadings ? `<div class="rpt-subheading">${esc(section.label)}</div>` : ""}${body}`;
  }).join("");
  return `
    <section class="rpt-chapter prs-avoid-break">
      <div class="rpt-chapter-head">
        <div class="rpt-chapter-icon">${iconFn(16, "#fff")}</div>
        <h2 class="rpt-chapter-title">${esc(title)}</h2>
      </div>
      <div class="rpt-chapter-body">${extraTop || ""}${parts}</div>
    </section>`;
}
function arabicDigits(n) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(n).split("").map((d) => map[+d] ?? d).join("");
}


// شعار ثانوي اختياري (زي "رؤية 2030" بالنموذج المرجعي) — فاضي افتراضيًا،
// إذا حبيتِ إضافة شارة/حملة معيّنة بزاوية الغلاف، عطيني رابط الصورة وأحطه هنا.
const RPT_COVER_BADGE_LOGO = "";

function reportCoverPageHtml(unit, report, dept, s, totalPages) {
  const d = report.sections?.basic?.data || {};
  const yearLabel = d.hijriYear || hijriYearLabel(hijriYearFromTs(report.createdAt || Date.now()));
  const num = rptPageNumText(s, 1, totalPages);
  return `
  <section class="a4-page rpt-cover-v4">
    ${s.watermark ? `<div class="rpt-wm" style="background-image:url('${ASSOCIATION_LOGO}')"></div>` : ""}
    <img src="${ASSOCIATION_LOGO}" class="rpt-cover-v4-logo" alt="شعار الجمعية" />
    <div class="rpt-cover-v4-text">
      <h1 class="rpt-cover-v4-title">${esc((s.coverTitle || "").trim() || report.label || "التقرير الدوري للأداء")}</h1>
      <div class="rpt-cover-v4-sub">${esc(yearLabel)}${d.startDate ? ` (${esc(d.startDate)} – ${esc(d.endDate || "—")})` : ""}</div>
      <div class="rpt-cover-v4-unit">${dept ? esc(dept.name) + " — " : ""}${esc(unit.name)}</div>
    </div>
    ${RPT_COVER_BADGE_LOGO ? `<img src="${RPT_COVER_BADGE_LOGO}" class="rpt-cover-v4-badge-logo" alt="شارة" />` : ""}
    <div class="rpt-cover-v4-prepared">
      <div>إعداد: ${esc(d.preparerName || "—")} ${d.preparerTitle ? "— " + esc(d.preparerTitle) : ""}</div>
      <div>الرئيسة المباشرة: ${esc(d.managerName || "—")}</div>
    </div>
    ${num ? `<div class="rpt-runfoot"><span></span><span class="rpt-runfoot-num">${num}</span><span></span></div>` : ""}
  </section>`;
}

function reportApprovalHtml(report, title, boxes, extra) {
  const d = report.sections?.basic?.data || {};
  return `
    <section class="rpt-chapter prs-avoid-break">
      <div class="rpt-chapter-head">
        <div class="rpt-chapter-icon">${iconCheckCircle(16, "#fff")}</div>
        <h2 class="rpt-chapter-title">${esc(title || "الإغلاق والاعتماد")}</h2>
      </div>
      <div class="rpt-chapter-body">
        ${textBlock("الخلاصة النهائية", (report.sections?.review?.data || {}).content)}
        ${rptApprovalGridHtml(boxes || RPT_UNIT_APPROVAL, { "{المعدة}": d.preparerName || "—", "{الرئيسة}": d.managerName || "—" })}
        ${extra || ""}
      </div>
    </section>`;
}

/* هيكل التقرير الرسمي (الافتراضي): غلاف ← ملخص ← بيانات التقرير ← الأهداف والمؤشرات ←
   مرحلة التنفيذ ← مرحلة التقييم ← الأثر والتميز ← التحديات ← التوصيات ← الإغلاق والاعتماد ←
   خطة الفترة القادمة ← الأدلة والمرفقات. الترتيب والإخفاء والأسماء والأعمدة من «إدارة التقارير»
   (unitChapterDefs = أقسام التعبئة نفسها). في وضع المراجعة (afterPage) تظهر كل الفصول والأعمدة دائمًا. */
function fullReportOrPreviewBody(unit, report, afterPage, opts) {
  opts = opts || {};
  const s = opts.settings || rptSettings("unit");
  const review = !!afterPage;
  const dept = S.departments.find((x) => x.id === unit.departmentId);
  const chapters = rptOrdered(unitChapterDefs(opts.capture ? null : report, unit.id), s).filter((c) => review || (!s.hidden[c.key] &&
    (s.showEmpty || opts.capture || c.special || c.sections.some((sid) => sectionHasData(report, sid)))));
  return rptWithCtx({ ...rptChartCtx(s), hiddenCols: review ? null : s.hiddenCols, colsShow: s.colsShow, capture: opts.capture || null }, () => {
    // «ملخص التقرير» بصفحة مستقلة، ثم الأقسام (عدد محدد بكل صفحة، 0 = متتابعة)، و«الإغلاق والاعتماد» مع آخر صفحة
    const per = Number(s.perPage) || 0;
    const pages = [];
    let inPage = 0;
    chapters.forEach((c) => {
      const title = rptChapterTitle(c, s);
      const newPage = !pages.length || c.special === "summary" || (pages[pages.length - 1].summary) || (per && inPage >= per && c.special !== "approval");
      if (newPage) { pages.push({ html: "", ids: [], summary: c.special === "summary" }); inPage = 0; }
      const pg = pages[pages.length - 1];
      const extra = rptCustomChartsFor(s, c.key, [{ unit, report }], false); // رسوم مضافة لهذا الفصل
      if (c.special === "summary") pg.html += reportSummaryHtml(report, title) + extra;
      else if (c.special === "approval") pg.html += reportApprovalHtml(report, title, s.approvalBoxes, extra);
      else { pg.html += reportChapterHtml(rptIcon(c.icon), title, c.sections, report, extra); pg.ids.push(...c.sections); inPage++; }
    });
    const hasCover = !!s.showCover;
    const total = pages.length + (hasCover ? 1 : 0);
    return (hasCover ? reportCoverPageHtml(unit, report, dept, s, total) : "") +
      pages.map((p, i) => rptPageHtml(s, p.html, i + 1 + (hasCover ? 1 : 0), total) + (afterPage ? afterPage(i, p.ids) : "")).join("");
  });
}
// هل في القسم بيانات مُدخلة فعلًا؟ (المعرّفات والتواريخ التقنية لا تُحسب)
const RPT_IGNORE_KEYS = ["id", "_id", "uid", "createdAt", "updatedAt", "status", "reviewNote"];
function rptHasValue(v) {
  if (v == null) return false;
  if (typeof v === "string") return v.trim() !== "";
  if (typeof v === "number") return isFinite(v);
  if (typeof v === "boolean") return v;
  if (Array.isArray(v)) return v.some(rptHasValue);
  if (typeof v === "object") return Object.keys(v).some((k) => !RPT_IGNORE_KEYS.includes(k) && rptHasValue(v[k]));
  return false;
}
function sectionHasData(report, sid) {
  const d = report && report.sections && report.sections[sid] && report.sections[sid].data;
  if (!d) return false;
  if (sid === "kpi") return (d.indicators || []).some((r) => r && r.name && rptHasValue(r.actual)) || rptHasValue(d.notes);
  return rptHasValue(d);
}

// ===== مراجعة داخل صفحات التقرير: المراجِعة (صاحبة المرحلة) تكتب ملاحظة تحت كل صفحة أثناء القراءة =====
function apReviewItemFor(unitId, reportId) {
  try { return apPendingForMe().find((it) => it.unit.id === unitId && it.report.id === reportId) || null; } catch (e) { return null; }
}
function apDraftGet(key, k) { const d = S.ui.apDraft && S.ui.apDraft[key]; return (d && d[k]) || ""; }
function apDraftSet(key, k, v) { S.ui.apDraft = S.ui.apDraft || {}; (S.ui.apDraft[key] = S.ui.apDraft[key] || {})[k] = v; }
function apReviewAfterPageHtml(item) {
  const key = item.unit.id + ":" + item.report.id;
  return (i, pageIds) => {
    const ids = (pageIds || []).filter((id) => SECTIONS.some((sc) => sc.id === id));
    if (!ids.length) return "";
    return `<div class="no-print" style="margin:-6px 0 18px;padding:12px 14px;border:1.5px dashed ${ROSE};border-radius:14px;background:#fff;">
      <div style="font-size:11.5px;font-weight:800;color:${ROSE};margin-bottom:8px;">ملاحظاتك على هذه الصفحة (تظهر داخل القسم نفسه عند الإعادة)</div>
      <div style="display:flex;flex-direction:column;gap:6px;">${ids.map((id) => { const sc = SECTIONS.find((x) => x.id === id); return `<textarea id="cp-sec-${esc(key)}-${esc(id)}" class="input" style="width:100%;min-height:44px;" placeholder="ملاحظة على: ${esc(sc.label)}">${esc(apDraftGet(key, id))}</textarea>`; }).join("")}</div>
    </div>`;
  };
}
function apReviewPanelHtml(item) {
  return `<div class="card no-print" style="margin-top:16px;border:1.5px solid ${ROSE};">
    <div style="font-size:13.5px;font-weight:800;margin-bottom:4px;">قرارك على التقرير — مرحلتك: ${esc(item.stage.name)}</div>
    <div class="hint" style="margin-bottom:10px;">ملاحظاتك على الصفحات مكتوبة تحت كل صفحة أعلاه، وتُرسل كلها مع قرارك.</div>
    ${apDecisionHtml(item)}
  </div>`;
}

function renderFullReport() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  const report = getCurrentReportEntry();
  if (!report) return `<div class="page-wrap">تعذر إيجاد هذا التقرير.</div>`;
  const progress = computeProgress(report);
  const readOnlyVisit = !!S.cameFromAllReports;
  const rvItem = apReviewItemFor(unit.id, report.id);
  return `
  <div class="page-wrap"><div class="page-inner report">
    ${topBarHtml({ title: "عرض التقرير كاملاً", subtitle: `${unit.name} — ${esc(report.label)} — ${progress.completed} من ${progress.total} أقسام مكتملة`,
      backAction: rvItem ? "nav-to" : (readOnlyVisit ? "nav-to" : "nav-to-unit-report"), backData: rvItem ? { view: "custom-path-inbox" } : (readOnlyVisit ? { view: "all-reports" } : undefined),
      right: pillBtn("معاينة الطباعة", { variant: "ghost", icon: iconPrinter(15, INK), action: "nav-to", data: { view: "report-preview" } }) })}
    ${rptWrap(rptSettings("unit"), fullReportOrPreviewBody(unit, report, rvItem ? apReviewAfterPageHtml(rvItem) : null))}
    ${rvItem ? apReviewPanelHtml(rvItem) : ""}
    ${readOnlyVisit ? "" : `<div class="hint" style="margin-top:12px;">للتعديل على أي قسم، ارجعي إلى "مسودة التقرير" واختاري القسم من قائمة المراحل.</div>`}
  </div></div>`;
}

function renderReportPreview() {
  const unit = S.units.find((u) => u.id === S.currentUnitId);
  const report = getCurrentReportEntry();
  if (!report) return `<div class="page-wrap">تعذر إيجاد هذا التقرير.</div>`;
  const readOnlyVisit = !!S.cameFromAllReports;
  return `
  <div class="page-wrap"><div class="page-inner report">
    <div class="no-print">${topBarHtml({ title: "معاينة التقرير",
      backAction: readOnlyVisit ? "nav-to" : "nav-to-unit-report", backData: readOnlyVisit ? { view: "all-reports" } : undefined,
      right: `<div style="display:flex;gap:8px;">${pillBtn("تنزيل PDF", { icon: iconDownload(15, "#fff"), action: "print-page" })}${pillBtn("طباعة", { variant: "ghost", icon: iconPrinter(15, INK), action: "print-page" })}</div>` })}</div>
    ${rptWrap(rptSettings("unit"), fullReportOrPreviewBody(unit, report))}
  </div></div>`;
}

/* =============================== Live-computed field patches (no full render) = */
/* =============================== Live-computed field patches (no full render) = */
function liveUpdateComputed(el) {
  const field = el.dataset.field;
  if (field === "summary" || field === "explanation") {
    const wrap = el.closest(".field");
    const box = wrap && wrap.querySelector(".char-count");
    if (box) box.textContent = `${el.value.length} / ${field === "summary" ? 500 : 300}`;
  } else if (field === "sampleSize" || field === "respondentsCount") {
    const item = el.closest(".repeat-item");
    if (!item) return;
    const sampleEl = item.querySelector('[data-field="sampleSize"]');
    const respEl = item.querySelector('[data-field="respondentsCount"]');
    const rate = computeResponseRate(sampleEl ? sampleEl.value : "", respEl ? respEl.value : "");
    const box = item.querySelector(".readonly-box");
    if (box) box.textContent = rate != null ? `${rate}٪` : "تُحسب تلقائيًا بعد إدخال حجم العينة وعدد المستجيبات";
  }
}

/* =============================== Input / change delegation ==================== */
function attachFormListeners() {
  appEl.addEventListener("input", (e) => {
    const el = e.target;
    if (el.id && (el.id.indexOf("cp-sec-") === 0 || el.id.indexOf("cp-notes-") === 0)) {
      // حفظ مسودة ملاحظات المراجِعة محليًا (تبقى عند التنقل بين الوارد وعرض التقرير)
      const m = el.id.indexOf("cp-sec-") === 0 ? el.id.slice(7) : el.id.slice(9);
      if (el.id.indexOf("cp-sec-") === 0) { const sc = SECTIONS.find((x) => m.endsWith("-" + x.id)); if (sc) apDraftSet(m.slice(0, m.length - sc.id.length - 1), sc.id, el.value); }
      else apDraftSet(m, "__gen", el.value);
    }
    if (el.dataset && el.dataset.action === "filter-programs-table") {
      const q = el.value.trim().toLowerCase();
      const card = el.closest(".card") || document;
      card.querySelectorAll(".programs-table tbody tr").forEach((row) => { row.style.display = !q || (row.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "dashboard-search") {
      const q = el.value.trim().toLowerCase();
      const rows = document.querySelectorAll("#recent-reports-table tbody tr");
      rows.forEach((row) => { row.style.display = !q || (row.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "bs-search") {
      const q = el.value.trim().toLowerCase();
      document.querySelectorAll("#bs-grid .bs-folder").forEach((c) => { c.style.display = !q || (c.dataset.search || "").toLowerCase().includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "pu-list-search") {
      const q = el.value.trim().toLowerCase();
      document.querySelectorAll("#pu-list-table tbody tr").forEach((row) => { row.style.display = !q || (row.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "pu-perm-search") {
      const q = el.value.trim().toLowerCase();
      const rows = document.querySelectorAll("#pu-perm-list > [data-search]");
      let visibleCount = 0;
      rows.forEach((row) => {
        const match = !q || (row.dataset.search || "").includes(q);
        row.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      const hint = document.getElementById("pu-perm-empty-hint");
      if (hint) hint.style.display = visibleCount === 0 ? "" : "none";
      return;
    }
    if (el.id === "all-reports-search") {
      const q = el.value.trim().toLowerCase();
      const rows = document.querySelectorAll("#all-reports-table tbody tr");
      rows.forEach((row) => { row.style.display = !q || (row.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "archive-search") {
      const q = el.value.trim().toLowerCase();
      document.querySelectorAll("#archive-grid > [data-search]").forEach((card) => { card.style.display = !q || (card.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "unit-reports-search") {
      const q = el.value.trim().toLowerCase();
      const cards = document.querySelectorAll("#unit-reports-grid > [data-search]");
      cards.forEach((card) => { card.style.display = !q || (card.dataset.search || "").includes(q) ? "" : "none"; });
      return;
    }
    if (el.id === "login-username") { S.ui.loginUsernameVal = el.value; return; }
    if (el.id === "site-primary-color" || el.id === "site-bg-color") {
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, [el.id === "site-primary-color" ? "primary" : "background"]: el.value };
      S.ui.siteSettingsSaved = false;
      applySiteColors(S.siteSettings);
      render();
      return;
    }
    if (el.id && el.id.indexOf("site-x-") === 0 && el.id.slice(-4) !== "-hex") {
      const key = el.id.slice(7);
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), [key]: el.value } };
      S.ui.siteSettingsSaved = false; applySiteColors(S.siteSettings);
      const hx = document.getElementById(el.id + "-hex"); if (hx) hx.textContent = el.value;
      return;
    }
    if (el.id && /^site-bs-[0-4]$/.test(el.id)) {
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      const bs = themeOf(S.siteSettings).bs.slice(); bs[Number(el.id.slice(-1))] = el.value;
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), bs } };
      S.ui.siteSettingsSaved = false;
      return;
    }
    if (el.id && /^site-ts-(nav|sbTitle|bannerTitle|bannerSub)-(color|size)$/.test(el.id)) {
      const m = el.id.match(/^site-ts-(\w+)-(color|size)$/);
      const key = m[1] + (m[2] === "color" ? "Color" : "Size");
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), [key]: m[2] === "size" ? Number(el.value) : el.value } };
      S.ui.siteSettingsSaved = false; applySiteColors(S.siteSettings);
      if (m[2] === "size") { const lb = document.getElementById(el.id + "-label"); if (lb) lb.textContent = el.value + "px"; }
      return;
    }
    if (el.id && /^site-pt-\d+$/.test(el.id)) {
      const i = Number(el.id.slice(8));
      const list = PERIOD_TYPES.slice();
      if (PERIOD_TYPES_LOCKED.includes(list[i])) return;
      list[i] = el.value;
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), periodTypes: list } };
      S.ui.siteSettingsSaved = false;
      return;
    }
    if (el.id === "field-draft-iconcolor" || el.id === "field-draft-iconbg") {
      S.ui.fieldEditDraft = S.ui.fieldEditDraft || {};
      S.ui.fieldEditDraft[el.id === "field-draft-iconcolor" ? "iconColor" : "iconBg"] = el.value;
      return;
    }
    if (el.id === "site-sidebar-bg-veil") {
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), sidebarBgVeil: Number(el.value) } };
      S.ui.siteSettingsSaved = false; applySiteColors(S.siteSettings);
      const lb = document.getElementById("site-sidebar-bg-veil-label"); if (lb) lb.textContent = el.value + "%";
      return;
    }
    if (el.id === "site-tagline-offset" || el.id === "site-tagline-size" || el.id === "site-tagline-imgh" || el.id === "site-tagline-color") {
      const key = { "site-tagline-offset": "taglineOffset", "site-tagline-size": "taglineSize", "site-tagline-imgh": "taglineImgH", "site-tagline-color": "taglineColor" }[el.id];
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      const val = el.id === "site-tagline-color" ? el.value : Number(el.value);
      S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), [key]: val } };
      S.ui.siteSettingsSaved = false;
      const lb = document.getElementById(el.id + "-label"); if (lb) lb.textContent = val + "px";
      const pv = document.getElementById("site-tagline-preview"); if (pv) pv.innerHTML = sidebarTaglineBlockHtml(S.siteSettings);
      return;
    }
    if (el.id === "site-logo-size") {
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, logoSize: Number(el.value) || DEFAULT_BRANDING.logoSize };
      S.ui.siteSettingsSaved = false;
      const preview = document.getElementById("site-logo-preview");
      if (preview) { preview.style.width = `${S.siteSettings.logoSize}px`; preview.style.height = `${S.siteSettings.logoSize}px`; }
      const sizeLabel = document.getElementById("site-logo-size-label");
      if (sizeLabel) sizeLabel.textContent = `${S.siteSettings.logoSize}px`;
      return;
    }
    if (el.id === "site-platform-name" || el.id === "site-banner-title" || el.id === "site-banner-sub" || el.id === "site-sidebar-tagline") {
      const fieldMap = { "site-platform-name": "platformName", "site-banner-title": "bannerTitle", "site-banner-sub": "bannerSub", "site-sidebar-tagline": "sidebarTagline" };
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, [fieldMap[el.id]]: el.value };
      S.ui.siteSettingsSaved = false;
      return;
    }
    if (el.id === "login-password") { S.ui.loginPasswordVal = el.value; return; }
    if (el.id === "head-return-notes") { S.ui.headReturnNotesVal = el.value; return; }
    if (el.dataset && el.dataset.field && el.tagName !== "SELECT") {
      setFieldFromEl(el);
      liveUpdateComputed(el);
    } else if (el.dataset && el.dataset.newind) {
      const key = `newIndicatorForm_${el.dataset.newind}`;
      (S.ui[key] = S.ui[key] || {})[el.dataset.newindField] = el.value;
    } else if (el.dataset && el.dataset.expandableOther) {
      (S.ui.expandableOtherText = S.ui.expandableOtherText || {})[el.dataset.expandableOther] = el.value;
    }
  });

  appEl.addEventListener("change", (e) => {
    const el = e.target;
    // إدارة التقارير: حقول التنسيق (نص/لون/خط/رقم) + صورة الخلفية
    if (el.dataset && el.dataset.rm && rmCanEdit()) { rmSetField(el.dataset.rm, el.value); S.ui.rm.saved = false; render(); return; }
    if (el.id === "rm-bg-file" && rmCanEdit()) {
      const file = el.files && el.files[0];
      if (!file) return;
      if (file.size > 800 * 1024) { alert("حجم الصورة كبير — اختاري صورة أصغر من 800 كيلوبايت."); return; }
      const reader = new FileReader();
      reader.onload = () => { const st = rmState(); if (RPT_DATA_IMG_RE.test(String(reader.result))) st.draft.bgImage = reader.result; render(); };
      reader.readAsDataURL(file);
      return;
    }
    if (el.id === "site-logo-file" || el.id === "site-banner-file" || el.id === "site-tagline-image-file" || el.id === "site-sidebar-bg-file") {
      const file = el.files && el.files[0];
      if (!file) return;
      if (file.size > 1.5 * 1024 * 1024) {
        S.ui.siteSettingsFileError = "حجم الصورة كبير — الرجاء اختيار صورة أصغر من 1.5 ميغابايت.";
        render();
        return;
      }
      const fieldMap = { "site-logo-file": "logo", "site-banner-file": "bannerImage", "site-tagline-image-file": "sidebarTaglineImage" };
      const reader = new FileReader();
      reader.onload = () => {
        S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
        if (el.id === "site-sidebar-bg-file") {
          S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), sidebarBgImage: reader.result } };
          applySiteColors(S.siteSettings);
        } else
        S.siteSettings = { ...S.siteSettings, [fieldMap[el.id]]: reader.result };
        S.ui.siteSettingsSaved = false;
        S.ui.siteSettingsFileError = null;
        render();
      };
      reader.readAsDataURL(file);
      return;
    }
    if (el.dataset && el.dataset.action === "ol-form-refresh") { olReadForm(); render(); return; }
    if (el.dataset && el.dataset.action === "ap-auto-unit") { S.ui.apAutoUnit = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "dash-prog-year") { S.ui.dashProgYear = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-all-reports-dept") { S.ui.allReportsDept = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-reports-type") { S.ui.unitReportsTypeFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-reports-year") { S.ui.unitReportsYearFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-all-reports-year") { S.ui.unitAllReportsYearFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-all-reports-period") { S.ui.unitAllReportsPeriodFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-all-reports-type") { S.ui.unitAllReportsTypeFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-unit-all-reports-status") { S.ui.unitAllReportsStatusFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "set-field-draft") {
      S.ui.fieldEditDraft = S.ui.fieldEditDraft || {};
      // تغيير نوع الحقل يحتاج إعادة رسم كاملة (عشان يبين/يخفي صندوق الخيارات)،
      // فنحفظ أول أي قيم مكتوبة حاليًا في النموذج عشان ما تضيع بإعادة الرسم هذي.
      const labelEl = document.getElementById("field-draft-label");
      const optionsEl = document.getElementById("field-draft-options");
      const placeholderEl = document.getElementById("field-draft-placeholder");
      const otherLabelEl = document.getElementById("field-draft-other-label");
      if (labelEl) S.ui.fieldEditDraft.label = labelEl.value;
      if (optionsEl) S.ui.fieldEditDraft.optionsText = optionsEl.value;
      if (placeholderEl) S.ui.fieldEditDraft.placeholder = placeholderEl.value;
      if (otherLabelEl) S.ui.fieldEditDraft.otherLabel = otherLabelEl.value;
      S.ui.fieldEditDraft[el.dataset.key] = el.value;
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "filter-unit-reports-period") { S.ui.unitReportsPeriodFilter = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "goal-parent-set") {
      S.goalsDefinitions = { ...S.goalsDefinitions, operational: (S.goalsDefinitions.operational || []).map((g) => g.id === el.dataset.id ? { ...g, parentId: el.value } : g) };
      dataStore.saveGoalsDefinitions(S.goalsDefinitions); render(); return;
    }
    if (el.dataset && el.dataset.action === "filter-all-reports-unit") { S.ui.allReportsUnit = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-all-reports-date-from") { S.ui.allReportsDateFrom = el.value; render(); return; }
    if (el.dataset && el.dataset.action === "filter-all-reports-date-to") { S.ui.allReportsDateTo = el.value; render(); return; }
    if (el.tagName === "SELECT" && el.dataset && el.dataset.field) {
      setFieldFromEl(el);
      if (el.dataset.field === "level" && el.dataset.subarr === "operationalGoals") {
        const list = getItemList(el.dataset.arr);
        const item = findById(list, el.dataset.id);
        const sub = item && findById(item[el.dataset.subarr] || [], el.dataset.subid);
        if (sub) sub.percentage = GOAL_LEVEL_PERCENTAGE[el.value] ?? "";
      }
      if (el.dataset.field === "strategicGoal" && el.dataset.arr === "goals" && (S.goalsDefinitions.operational || []).length) {
        const item = findById(getItemList("goals"), el.dataset.id);
        const allowed = operationalGoalsFor(el.value);
        if (item) item.operationalGoals = (item.operationalGoals || []).filter((og) => allowed.includes(og.name));
      }
      if (el.dataset.field === "evidenceType" && el.dataset.subarr === "operationalGoals") {
        const list = getItemList(el.dataset.arr);
        const item = findById(list, el.dataset.id);
        const sub = item && findById(item[el.dataset.subarr] || [], el.dataset.subid);
        if (sub) sub.evidenceAnswer = "";
      }
      render();
      return;
    }
    if (el.dataset && el.dataset.newind) {
      const key = `newIndicatorForm_${el.dataset.newind}`;
      (S.ui[key] = S.ui[key] || {})[el.dataset.newindField] = el.value;
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "assign-unit-dept") {
      const u = S.units.find((x) => x.id === el.dataset.id);
      if (u) { u.departmentId = el.value; dataStore.saveUnits(S.units); }
      render();
      return;
    }
    // قائمة تبديل القسم/المكتب — تظهر فقط لمديرة النظام بصفحتي "قسمي" ومكتب
    // الإشراف، تتيح لها الاطّلاع والضبط لأي قسم أو مكتب تختاره بدون أي تنقّل.
    if (el.dataset && el.dataset.action === "admin-switch-department") {
      S.currentDepartmentId = el.value; S.adminPreviewOrigin = null; render();
      return;
    }
    if (el.dataset && el.dataset.action === "admin-switch-office") {
      S.currentOfficeId = el.value; S.adminPreviewOrigin = null; render();
      return;
    }
    // قائمة تبديل الوحدة/المركز — تظهر فقط لمديرة النظام بصفحات "وحدتي"
    // (unit-home)، تتيح لها معاينة وضبط أي وحدة أو مركز تختاره.
    if (el.dataset && el.dataset.action === "admin-switch-unit") {
      S.currentUnitId = el.value; S.adminPreviewOrigin = null; S.currentReportId = null; S.view = "unit-reports";
      ensureUnitReportsLoaded(S.currentUnitId);
      render();
      return;
    }
    // نفس فكرة admin-switch-unit، لكن لحساب نطاقه قسم أو مكتب إشراف — يتحقق
    // فعليًا إن الوحدة المختارة ضمن نطاقه (isUnitInUserScope) قبل تبديلها.
    if (el.dataset && el.dataset.action === "curation-target") {
      S.ui.curationTarget = el.value;
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "scoped-switch-unit") {
      if (isUnitInUserScope(el.value)) {
        S.currentUnitId = el.value; S.currentReportId = null; if (S.view !== "unit-settings") S.view = "unit-reports";
        ensureUnitReportsLoaded(S.currentUnitId);
      }
      render();
      return;
    }
    if (el.id === "site-font-family") {
      S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
      S.siteSettings = { ...S.siteSettings, fontFamily: el.value };
      S.ui.siteSettingsSaved = false;
      applySiteColors(S.siteSettings);
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "set-base-role") {
      const rid = el.value || "";
      if (el.dataset.kind === "department") { S.departments = S.departments.map((d) => d.id === el.dataset.id ? { ...d, baseRoleId: rid } : d); dataStore.saveDepartments(S.departments); }
      else if (el.dataset.kind === "office") { S.offices = S.offices.map((o) => o.id === el.dataset.id ? { ...o, baseRoleId: rid } : o); dataStore.saveOffices(S.offices); }
      else { S.units = S.units.map((u) => u.id === el.dataset.id ? { ...u, baseRoleId: rid } : u); dataStore.saveUnits(S.units); }
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "struct-person-role") {
      S.persons = personsList().map((p) => p.id === el.dataset.id ? { ...p, roleId: el.value || "" } : p);
      dataStore.savePersons(S.persons); render(); return;
    }
    if (el.dataset && el.dataset.action === "struct-copy-from") {
      if (S.ui.structCopy) S.ui.structCopy.from = el.value || ""; render(); return;
    }
    if (el.dataset && el.dataset.action === "hub-nav-select") {
      const b = document.createElement("button"); b.dataset.action = "nav-to"; b.dataset.view = el.value;
      b.style.display = "none"; appEl.appendChild(b); b.click(); if (b.parentNode) b.parentNode.removeChild(b);
      return;
    }
    if (el.dataset && el.dataset.action === "assign-office-parent") {
      const o = (S.offices || []).find((x) => x.id === el.dataset.id);
      if (o && officeScopeIds(o.id).indexOf(el.value) === -1) { o.parentOfficeId = el.value; dataStore.saveOffices(S.offices); }
      render();
      return;
    }
    if (el.dataset && el.dataset.action === "assign-dept-office") {
      const d = S.departments.find((x) => x.id === el.dataset.id);
      if (d) { d.officeId = el.value; dataStore.saveDepartments(S.departments); }
      render();
      return;
    }
  });

  document.body.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "login-form") { e.preventDefault(); handleLoginSubmit(); }
  });

  window.addEventListener("resize", () => {
    clearTimeout(window.__prsResizeT);
    window.__prsResizeT = setTimeout(() => { if (S.currentUser) render(); }, 150);
  });
}

/* =============================== Click delegation (all data-action) =========== */
function attachClickListener() {
  appEl.addEventListener("click", (e) => {
    // Custom radio pills (both generic set-radio and item-bound set-item-radio)
    const radioBtn = e.target.closest('[data-action="set-item-radio"]');
    if (radioBtn) {
      const ds = radioBtn.dataset;
      const fakeEl = { dataset: ds, value: ds.value };
      setFieldFromEl(fakeEl);
      render();
      return;
    }
    const newindRadio = e.target.closest('[data-action="set-newind-radio"]');
    if (newindRadio) {
      const ds = newindRadio.dataset;
      const key = `newIndicatorForm_${ds.newind}`;
      (S.ui[key] = S.ui[key] || {})[ds.newindField] = ds.value;
      render();
      return;
    }

    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const ds = btn.dataset;
    if (buttonBlockedEl(btn)) return;
    if (adminReportsReadOnly() && ADMIN_READONLY_BLOCKED.includes(action)) { alert("حساب مديرة النظام للاطلاع فقط — لا يمكن تعديل التقارير أو اعتمادها من هنا."); return; }
    if (!S.currentUser && action.indexOf("portal-") === 0 && handlePortalAction(action, ds)) return;
    if ((action === "entry-clear" || (canManageUsers() && action.indexOf("entry-") === 0)) && handleEntryAction(action, ds)) return;
    if (canManageUsers() && action !== "ol-form-refresh" && handleOrgLevelsAction(action, ds)) return;
    if (action.indexOf("rm-") === 0 && rmCanEdit() && handleReportsManageAction(action, ds)) return;

    try {
    switch (action) {
      /* ---------- navigation & shell ---------- */
      case "nav-to": {
        // "وحدتي" رابط ثابت لمديرة النظام فقط (بوّابة دخول) — لا يقابله عرض فعلي
        // باسمه، فنحوّله هنا فعليًا لعرض "تقارير" الوحدة (نفس مسار open-unit-preview)
        // بعد التأكد من اختيار وحدة/مركز صالح ووضع دخول افتراضي (الإدارية).
        let navView = ds.view;
        S.ui.previewDeptId = null;
        S.view = navView; if (navView !== "unit-report") S.activeSectionId = null; if (isMobileViewport()) S.mobileSidebarOpen = false;
        // مديرة النظام تدخل "قسمي"/صفحات مكتب الإشراف مباشرة من الشريط الجانبي —
        // بما إنهم أصلًا مرتبطين بقسم/مكتب واحد، نفعّلهم تلقائيًا لأول قسم أو مكتب
        // نشط لو ما كان فيه قيمة محفوظة أصلًا (أو كانت محفوظة أصبحت غير موجودة).
        if (S.isAdmin && (navView === "department-curation") && !(S.departments || []).some((d) => d.id === S.currentDepartmentId)) {
          const firstDept = (S.departments || []).find((d) => d.status === "active") || (S.departments || [])[0];
          S.currentDepartmentId = firstDept ? firstDept.id : null;
        }
        if (S.isAdmin && ["office-dashboard", "office-archive", "office-summary", "office-curation"].includes(navView) && !(S.offices || []).some((o) => o.id === S.currentOfficeId)) {
          const firstOffice = (S.offices || []).find((o) => o.status === "active") || (S.offices || [])[0];
          S.currentOfficeId = firstOffice ? firstOffice.id : null;
        }
        // نلغي أي طيّ يدوي للمجموعة اللي تحتوي الصفحة الجديدة، عشان تفتح تلقائيًا وتبيّن أين نحن.
        const targetPage = SIDEBAR_PAGES.find((p) => p.id === navView);
        if (targetPage && S.ui.sidebarGroupState) delete S.ui.sidebarGroupState[targetPage.group];
        // أي حساب (مديرة نظام/قسم/مكتب/مستوى) قد يدخل صفحة من مجموعة
        // "unit-home" (تقارير/إنشاء تقرير/الإعدادات) مباشرة من الشريط الجانبي
        // الآن — بما إنها صارت روابط رئيسية ظاهرة دومًا، بلا اشتراط مسبق بوحدة
        // محدّدة (طلب نجود الصريح). نتأكد هنا من وجود وحدة صالحة قبل الدخول،
        // بدل أن تبقى الصفحة فارغة/معطّلة.
        ensureUnitContextForNav(navView);
        if (navView === "custom-path-inbox" && dbConnected()) {
          Promise.all((S.units || []).filter((u) => u.role !== "admin" && u.role !== "executive").map((u) => refreshReportsFromDb(u.id))).then(() => { if (S.currentUser && S.view === "custom-path-inbox") render(); });
        }
        if (navView === "report-tabs-manage") {
          S.reportTabs = dataStore.getReportTabs(); S.ui.rtEdit = null; S.ui.rtMsg = ""; S.ui.rtDeleteId = null;
          if (dbConnected()) refreshReportTabsFromDb().then(() => { if (S.view === "report-tabs-manage") render(); });
        }
        if (navView === "org-levels" || navView === "org-chart") navView = "units-manage";
        if (navView === "units-manage") { S.roles = dataStore.getRoles(); S.approvalPaths = dataStore.getApprovalPaths(); if (dbConnected()) Promise.all([refreshOrgLevelsFromDb(), refreshRolesPersonsFromDb(), refreshApprovalPathsFromDb(), refreshPermLogFromDb()]).then(() => { if (S.view === "org-levels" || S.view === "units-manage") render(); }).catch(() => {}); }
        if (navView === "units-manage") { S.persons = dataStore.getPersons(); S.ui.rolePermEditId = null; }
        render();
        if (dbConnected()) {
          if (navView === "admin-reports" || navView === "units-manage" || navView === "dashboard") {
            refreshUnitsAndDepartmentsFromDb().then(() => { if (S.view === navView) render(); });
          } else if (navView === "indicators-manage") {
            refreshIndicatorDefinitionsFromDb().then(() => { if (S.view === navView) render(); });
          } else if (navView === "goals-manage") {
            refreshGoalsDefinitionsFromDb().then(() => { if (S.view === navView) render(); });
          } else if (navView === "sections-manage") {
            refreshReportSectionsFromDb().then(() => { if (S.view === navView) render(); });
          } else if (navView === "field-schemas-manage") {
            refreshSectionFieldSchemasFromDb().then(() => { if (S.view === navView) render(); });
          } else if (navView === "unit-reports" && S.currentUnitId) {
            refreshReportsFromDb(S.currentUnitId).then(() => { if (S.view === navView) render(); });
          }
        }
        break;
      }
      case "nav-back-admin": S.view = "browse-structure"; render(); break;
      case "dash-toggle": {
        if (!S.isAdmin) break;
        const kind = ds.kind, key = ds.key;
        if (!DASH_KINDS.some((k) => k.id === kind) || !key) break;
        const cfg = JSON.parse(JSON.stringify(dashConfig()));
        const cur = (cfg[kind] && Array.isArray(cfg[kind].hidden)) ? cfg[kind].hidden.slice() : [];
        const i = cur.indexOf(key);
        const nowHidden = i === -1;
        if (nowHidden) cur.push(key); else cur.splice(i, 1);
        cfg[kind] = { ...(cfg[kind] || {}), hidden: cur };
        S.dashboardConfig = cfg;
        dataStore.saveDashboardConfig(cfg);
        const blk = DASH_STD_BLOCKS.concat(DASH_EX_BLOCKS).find((b) => b.key === key);
        const kl = (DASH_KINDS.find((k) => k.id === kind) || {}).label || kind;
        addPermLog("dashboard", kind, kl, (nowHidden ? "إخفاء «" : "إظهار «") + (blk ? blk.label : key) + "» من لوحة المعلومات");
        render();
        break;
      }
      case "dash-reset": {
        if (!S.isAdmin) break;
        S.dashboardConfig = {};
        dataStore.saveDashboardConfig({});
        addPermLog("dashboard", "all", "كل الجهات", "إظهار كل عناصر لوحة المعلومات");
        render();
        break;
      }
      case "save-site-settings": {
        const settings = S.siteSettings || dataStore.getSiteSettings();
        dataStore.saveSiteSettings(settings);
        S.ui.siteSettingsSaved = true;
        render();
        break;
      }
      case "restore-site-settings-defaults": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), ...DEFAULT_SITE_COLORS };
        applySiteColors(S.siteSettings);
        dataStore.saveSiteSettings(S.siteSettings);
        S.ui.siteSettingsSaved = true;
        render();
        break;
      }
      case "restore-theme-defaults": {
        // نرجّع الألوان فقط — ونحفظ إعدادات غير الألوان المخزّنة بنفس المكان (الفترات، أنواع المستويات،
        // أيقونات الجهات وروابطها، بوابة الدخول، شكل التقرير النهائي)
        const th0 = ((S.siteSettings || dataStore.getSiteSettings()).theme) || {};
        const keep = {}; ["periodTypes", "levelTypes", "entityIcons", "portalEnabled", "reportStyle", "reportTemplates"].forEach((k) => { if (k in th0) keep[k] = th0[k]; });
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), theme: keep };
        applySiteColors(S.siteSettings);
        dataStore.saveSiteSettings(S.siteSettings);
        S.ui.siteSettingsSaved = true;
        render();
        break;
      }
      case "add-period-type": case "remove-period-type": case "move-period-type": case "restore-period-types": {
        S.siteSettings = S.siteSettings || dataStore.getSiteSettings();
        // نلتقط أي تسمية معدّلة لم تُحفظ بعد، من الحقول الظاهرة
        let list = PERIOD_TYPES.map((pt, i) => { const inp_ = document.getElementById("site-pt-" + i); return inp_ && !inp_.disabled ? inp_.value : pt; });
        if (action === "add-period-type") {
          const nv = ((document.getElementById("site-pt-new") || {}).value || "").trim();
          if (!nv || list.map((x) => x.trim()).includes(nv)) { if (nv) S.ui.periodTypeDupMsg = true; break; }
          list.push(nv);
        } else if (action === "remove-period-type") {
          const idx = Number(ds.idx); if (PERIOD_TYPES_LOCKED.includes(list[idx])) break; list.splice(idx, 1);
        } else if (action === "move-period-type") {
          const idx = Number(ds.idx), to = ds.dir === "up" ? idx - 1 : idx + 1;
          if (to < 0 || to >= list.length) break; [list[idx], list[to]] = [list[to], list[idx]];
        } else list = PERIOD_TYPES_DEFAULT.slice();
        S.siteSettings = { ...S.siteSettings, theme: { ...(S.siteSettings.theme || {}), periodTypes: list } };
        applySiteColors(S.siteSettings);
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "reset-theme-key": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), theme: { ...((S.siteSettings || {}).theme || {}), [ds.key]: "" } };
        applySiteColors(S.siteSettings);
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "reset-text-color": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), theme: { ...((S.siteSettings || {}).theme || {}), [ds.key + "Color"]: "" } };
        applySiteColors(S.siteSettings);
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "remove-sidebar-bg-image": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), theme: { ...((S.siteSettings || {}).theme || {}), sidebarBgImage: "" } };
        applySiteColors(S.siteSettings);
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "reset-tagline-color": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), theme: { ...((S.siteSettings || {}).theme || {}), taglineColor: "" } };
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "restore-site-branding-defaults": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), ...DEFAULT_BRANDING };
        dataStore.saveSiteSettings(S.siteSettings);
        applySiteColors(S.siteSettings);
        S.ui.siteSettingsSaved = true;
        render();
        break;
      }
      case "remove-site-logo": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), logo: null };
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "remove-site-banner": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), bannerImage: null };
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "remove-site-tagline-image": {
        S.siteSettings = { ...(S.siteSettings || dataStore.getSiteSettings()), sidebarTaglineImage: null };
        S.ui.siteSettingsSaved = false;
        render();
        break;
      }
      case "nav-back-department": S.view = "dashboard"; render(); break;
      case "nav-back-from-report": S.view = "unit-reports"; S.activeSectionId = null; render(); break;
      case "nav-back-to-report": S.view = "unit-report"; render(); break;
      case "nav-to-unit-report": S.view = "unit-report"; render(); break;
      case "open-sidebar": if (isMobileViewport()) S.mobileSidebarOpen = true; else S.sidebarOpen = true; render(); break;
      case "close-sidebar": S.sidebarOpen = false; render(); break;
      case "close-mobile-sidebar": S.mobileSidebarOpen = false; render(); break;
      case "toggle-sidebar-group": {
        S.ui.sidebarGroupState = S.ui.sidebarGroupState || {};
        const g = ds.group;
        const visible = computeVisibleSidebarPages();
        const items = visible.filter((p) => p.group === g);
        const containsActive = items.some((p) => p.id === S.view);
        const shortSidebar = visible.length <= 6;
        const current = S.ui.sidebarGroupState[g] !== undefined ? S.ui.sidebarGroupState[g] : (shortSidebar || containsActive);
        S.ui.sidebarGroupState[g] = !current;
        render();
        break;
      }
      case "set-all-reports-filter": S.ui.allReportsFilter = ds.filter; render(); break;
      case "logout": doLogout(); break;
      case "toggle-role-perm-page": { const a = rolePermFormState().pages; const i = a.indexOf(ds.id); if (i >= 0) a.splice(i, 1); else a.push(ds.id); permAutoSave(); render(); break; }
      case "toggle-role-perm-button": { const a = rolePermFormState().buttons; const i = a.indexOf(ds.id); if (i >= 0) a.splice(i, 1); else a.push(ds.id);
        if (i < 0 && ds.id.indexOf("notify:") === 0) { const chip = ds.id.slice("notify:".length); if (a.some((x) => x.indexOf("notify:") !== 0) && !a.includes(chip)) a.push(chip); }
        permAutoSave(); render(); break; }
      case "role-perm-edit": {
        const r = rolesList().find((x) => x.id === ds.id); if (!r) break;
        const p = rolePermsOf(r);
        S.ui.rolePermForm = { pages: [...p.pages], actions: [], buttons: [...(p.buttons.length ? p.buttons : p.actions.filter((a) => BUTTON_CATALOG.some((b) => b.id === a)))] };
        S.ui.rolePermEditId = r.id; S.ui.personPermEditId = null; S.ui.rolesBulk = null; render(); break;
      }
      case "role-perm-cancel": {
        if (S.ui.permDirty) {
          const f = rolePermFormState();
          const r = S.ui.rolePermEditId && rolesList().find((x) => x.id === S.ui.rolePermEditId);
          const p = S.ui.personPermEditId && personsList().find((x) => x.id === S.ui.personPermEditId);
          if (r) addPermLog("role", r.id, r.name, `تعديل صلاحيات الدور: ${permSummaryText(f)}`);
          if (p) addPermLog("person", p.id, p.name, `استثناء خاص: ${permSummaryText(f)}`);
        }
        S.ui.rolePermEditId = null; S.ui.personPermEditId = null; S.ui.rolePermForm = null; S.ui.permDirty = false; render(); break;
      }
      case "person-perm-edit": {
        const p = personsList().find((x) => x.id === ds.id); if (!p) break;
        const e = personEffectivePerms(p);
        S.ui.rolePermForm = { pages: [...e.pages], actions: [], buttons: [...(e.buttons.length ? e.buttons : e.actions.filter((a) => BUTTON_CATALOG.some((b) => b.id === a)))] };
        S.ui.personPermEditId = p.id; S.ui.rolePermEditId = null; S.ui.rolesBulk = null; render(); break;
      }
      case "person-perm-clear": {
        const p = personsList().find((x) => x.id === ds.id); if (!p) break;
        S.persons = personsList().map((x) => x.id === p.id ? { ...x, permsOverride: {} } : x);
        dataStore.savePersons(S.persons);
        addPermLog("person", p.id, p.name, "إلغاء الاستثناء (عاد لصلاحيات الدور)");
        S.ui.personPermEditId = null; S.ui.rolePermForm = null; S.ui.permDirty = false; render(); break;
      }
      case "roles-bulk-start": S.ui.rolesBulk = { confirm: false }; S.ui.rolePermForm = { pages: [], actions: [], buttons: [] }; S.ui.rolePermEditId = null; S.ui.personPermEditId = null; render(); break;
      case "roles-bulk-preset": rolePermFormState().pages = [...BULK_PERM_PRESETS.unit]; render(); break;
      case "roles-bulk-confirm": if (S.ui.rolesBulk) S.ui.rolesBulk.confirm = true; render(); break;
      case "roles-bulk-cancel": S.ui.rolesBulk = null; S.ui.rolePermForm = null; render(); break;
      case "roles-bulk-apply": {
        const f = rolePermFormState();
        S.roles = rolesList().map((x) => ({ ...x, permissions: { pages: [...f.pages], actions: [], buttons: [...f.buttons] } }));
        dataStore.saveRoles(S.roles);
        addPermLog("role", "*", "كل الأدوار", `تطبيق على الكل (${S.roles.length}): ${permSummaryText(f)}`);
        S.ui.rolesBulk = null; S.ui.rolePermForm = null; render(); break;
      }
      case "struct-person-add": {
        const g = (id) => { const el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
        const name = g("sp-name-" + ds.key), roleId = g("sp-role-" + ds.key), pin = g("sp-pin-" + ds.key);
        if (!name || !roleId) { S.ui.structPersonError = { key: ds.key, msg: "اكتبي الاسم واختاري الدور" }; render(); break; }
        S.persons = [...personsList(), { id: uid("person"), name, ownerKind: ds.kind, ownerId: ds.id, roleId, pin, permsOverride: {}, status: "active", createdAt: Date.now() }];
        dataStore.savePersons(S.persons);
        S.ui.structPersonError = null; render(); break;
      }
      case "struct-person-save": {
        const g = (id) => { const el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
        const name = g("sp-ename-" + ds.id), roleId = g("sp-erole-" + ds.id), pin = g("sp-epin-" + ds.id);
        if (!name || !roleId) break;
        S.persons = personsList().map((p) => p.id === ds.id ? { ...p, name, roleId, pin } : p);
        dataStore.savePersons(S.persons);
        S.ui.personEditId = null; render(); break;
      }
      case "dash-period": S.ui.dashPeriod = ds.v; render(); break;
      case "dash-year": S.ui.dashYear = ds.v; render(); break;
      case "dash-pie-scope": S.ui.dashPieScope = ds.v; render(); break;
      case "ex-drill": S.ui.exDrill = { path: ds.path ? ds.path.split(",") : [] }; render(); break;
      case "us-period": S.ui.usPeriod = ds.pt; S.ui.usMsg = ""; render(); break;
      case "us-sec-toggle": case "us-sec-copy-all": case "us-sec-reset": {
        const unit = (S.units || []).find((u) => u.id === S.currentUnitId); if (!unit) break;
        const all = { ...(entityPrefs("unit:" + unit.id).sectionsOff || {}) };
        const cur = (all[ds.pt] || []).slice();
        if (action === "us-sec-toggle") { const i = cur.indexOf(ds.sid); if (i >= 0) cur.splice(i, 1); else cur.push(ds.sid); all[ds.pt] = cur; S.ui.usMsg = ""; }
        else if (action === "us-sec-reset") { delete all[ds.pt]; S.ui.usMsg = "تظهر كل الأقسام في تقارير «" + ds.pt + "»."; }
        else { PERIOD_TYPES.forEach((x) => { if (cur.length) all[x] = cur.slice(); else delete all[x]; }); S.ui.usMsg = "طُبّق اختيار «" + ds.pt + "» على كل الفترات."; }
        saveEntityPrefs("unit:" + unit.id, { sectionsOff: all }).then(render);
        render(); break;
      }
      case "us-skip-toggle": {
        const unit = (S.units || []).find((u) => u.id === S.currentUnitId); if (!unit || !ds.key) break;
        const lvl = ds.all ? olFind(ds.all) : null;
        const targets = lvl ? (S.units || []).filter((u) => u.status === "active" && olScopeUnitIds(lvl.id).has(u.id)) : [unit];
        const turnOn = ds.on === "1";
        (async () => {
          for (const u of targets) {
            const cur = apUnitSkipList(u.id).filter((x) => x !== ds.key);
            await saveEntityPrefs("unit:" + u.id, { skip: turnOn ? [...cur, ds.key] : cur });
            if (turnOn) apRepairStuck(u.id);
          }
          addPermLog("unit-settings", targets.length > 1 ? "multi" : unit.id, targets.length > 1 ? targets.length + " وحدات" : unit.name, turnOn ? "تخطّي مرحلة في المسار" : "إرجاع مرحلة في المسار");
          S.ui.usMsg = (turnOn ? "تم التخطّي " : "رجعت المرحلة ") + (targets.length > 1 ? "لـ " + targets.length + " وحدات." : "لهذه الوحدة.");
          render();
        })();
        break;
      }
      case "ap-auto-roles-save":
      case "ap-auto-toggle": {
        const g = (k) => { const el = document.getElementById("ap-auto-" + k); return el ? el.value : (autoPathCfg()[k] || ""); };
        apAutoSave({ idr: g("idr"), ast: g("ast"), head: g("head") });
        apRepairStuck();
        if (action === "ap-auto-toggle") {
          const was = (autoPathObj() || {}).status === "active";
          S.approvalPaths = approvalPathsList().map((x) => x.id === AUTO_PATH_ID ? { ...x, status: was ? "draft" : "active", activatedAt: was ? null : Date.now() } : x);
          dataStore.saveApprovalPaths(S.approvalPaths);
          addPermLog("approval-path", AUTO_PATH_ID, "المسار التلقائي من الهيكل", was ? "إيقاف المسار" : "تفعيل المسار");
        }
        render(); break;
      }
      case "ap-auto-writer": {
        const turnOn = (autoPathCfg().writers || {})[ds.k] === false;
        saveSiteTheme((th) => { const a = th.autoPath || {}; return { autoPath: { ...a, writers: { idr: true, ast: true, head: true, ...(a.writers || {}), [ds.k]: turnOn } } }; });
        render(); break;
      }
      case "ap-auto-perm": {
        const pm = apAutoPerm(ds.pk);
        const ch = ds.opt === "mode" ? { mode: ds.val, ...(ds.val !== "approve" ? { final: false } : {}) } : { [ds.opt]: !pm[ds.opt] };
        saveSiteTheme((th) => { const a = th.autoPath || {}, ps = a.perms || {}; return { autoPath: { ...a, perms: { ...ps, [ds.pk]: { ...(ps[ds.pk] || {}), ...ch } } } }; });
        addPermLog("approval-path", AUTO_PATH_ID, "المسار التلقائي من الهيكل", "تغيير خيارات مرحلة");
        if (ds.opt === "info") apRepairStuck();
        render(); break;
      }
      case "ap-auto-skip": {
        const path = autoPathObj(); if (!path) break;
        const on = ds.on === "1", unitId = ds.unit;
        if (ds.scope === "unit" && unitId) {
          const key = AUTO_PATH_ID + ":" + (ds.what === "lvl" ? "lvl:" + ds.id : ds.id);
          const cur = apUnitSkipList(unitId).filter((k) => k !== key);
          saveEntityPrefs("unit:" + unitId, { skip: on ? [...cur, key] : cur }).then(() => {
            if (on) apRepairStuck(unitId);
            render();
          });
          break;
        }
        if (ds.what === "lvl") {
          saveSiteTheme((th) => { const a = th.autoPath || {}, cur = (a.skipLevels || []).filter((x) => x !== ds.id); return { autoPath: { ...a, skipLevels: on ? [...cur, ds.id] : cur } }; });
        } else {
          S.approvalPaths = approvalPathsList().map((x) => x.id === AUTO_PATH_ID ? { ...x, stages: (x.stages || []).map((st) => st.id === ds.id ? { ...st, disabled: on } : st) } : x);
          dataStore.saveApprovalPaths(S.approvalPaths);
        }
        if (on) apRepairStuck();
        render(); break;
      }
      case "choose-entity-account": if (S.pendingEntityLogin) enterEntityAsPerson(null); break;
      case "choose-base-role": {
        const role = rolesList().find((r) => r.id === ds.role);
        if (!role) break;
        if (S.pendingEntityLogin) { enterEntityAsPerson(null, role); break; }
        const unitId = S.pendingUnitLoginId;
        if (!unitId) break;
        S.currentUnitEntryMode = "admin";
        S.currentPersonId = null; S.currentPersonName = ""; S.currentEntryRoleName = role.name;
        applyPersonPerms({ roleId: role.id, permsOverride: null });
        S.reports[unitId] = dataStore.getReports(unitId);
        S.currentUnitId = unitId;
        S.currentReportId = null;
        S.pendingUnitLoginId = null;
        S.view = "unit-dashboard";
        if (S.allowedPages && S.allowedPages.length && !S.allowedPages.includes(S.view)) {
          const t = SIDEBAR_PAGES.find((x) => S.allowedPages.includes(x.id));
          if (t) S.view = t.id;
        }
        render();
        if (dbConnected()) { refreshReportsFromDb(unitId).then(() => { if (S.currentUser) render(); }); }
        break;
      }
      case "choose-person": {
        const p = personsList().find((x) => x.id === ds.id);
        if (!p) break;
        if (personEffectivePin(p)) { S.ui.pinPersonId = p.id; S.ui.pinError = ""; render(); break; }
        enterUnitAsPerson(p);
        break;
      }
      case "confirm-person-pin": {
        const p = personsList().find((x) => x.id === ds.id);
        const el = document.getElementById("person-pin-input");
        if (!p) break;
        if (String(el ? el.value : "").trim() !== personEffectivePin(p)) { S.ui.pinError = "الرمز غير صحيح"; render(); break; }
        enterUnitAsPerson(p);
        break;
      }
      case "cancel-person-pin": S.ui.pinPersonId = null; S.ui.pinError = ""; render(); break;
      case "role-save": {
        const g = (id) => { const el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
        const name = g("role-name");
        if (!name) { S.ui.roleError = "اكتبي اسم الدور"; render(); break; }
        const list = rolesList();
        const dup = list.find((r) => r.name === name && r.id !== S.ui.roleEditId);
        if (dup) { S.ui.roleError = "يوجد دور بنفس الاسم"; render(); break; }
        const mode = "admin"; // «نوع الدخول» القديم (رئيسة/مراجعة إضافية) أُلغي مع المسار الثابت
        const pin = g("role-pin");
        if (S.ui.roleEditId) {
          S.roles = list.map((r) => r.id === S.ui.roleEditId ? { ...r, name, mode, pin, description: g("role-desc") } : r);
        } else {
          S.roles = [...list, { id: uid("role"), name, mode, pin, description: g("role-desc"), permissions: {}, status: "active", createdAt: Date.now() }];
        }
        dataStore.saveRoles(S.roles);
        S.ui.roleEditId = null; S.ui.roleError = ""; S.ui.roleShowAdd = false;
        render(); break;
      }
      case "role-show-add": S.ui.roleShowAdd = true; S.ui.roleEditId = null; S.ui.roleError = ""; render(); break;
      case "role-edit": S.ui.roleEditId = ds.id; S.ui.roleShowAdd = true; S.ui.roleError = ""; render(); break;
      case "role-cancel": S.ui.roleEditId = null; S.ui.roleShowAdd = false; S.ui.roleError = ""; render(); break;
      case "role-delete-ask": S.ui.roleConfirmDeleteId = ds.id; render(); break;
      case "role-delete-cancel": S.ui.roleConfirmDeleteId = null; render(); break;
      case "role-delete": {
        if (personsList().some((p) => p.roleId === ds.id)) { S.ui.roleError = "لا يمكن حذف دور مرتبط بأشخاص — غيّري دورهم أولًا"; S.ui.roleConfirmDeleteId = null; render(); break; }
        S.roles = rolesList().filter((r) => r.id !== ds.id);
        dataStore.saveRoles(S.roles);
        S.ui.roleConfirmDeleteId = null; render(); break;
      }
      case "person-save": {
        const g = (id) => { const el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
        const name = g("person-name"), ownerId = g("person-owner"), roleId = g("person-role"), pin = g("person-pin");
        if (!name || !ownerId || !roleId) { S.ui.personError = "الاسم والجهة والدور مطلوبة"; render(); break; }
        const list = personsList();
        if (S.ui.personEditId) {
          S.persons = list.map((p) => p.id === S.ui.personEditId ? { ...p, name, ownerId, roleId, pin } : p);
        } else {
          S.persons = [...list, { id: uid("person"), name, ownerKind: "unit", ownerId, roleId, pin, permsOverride: {}, status: "active", createdAt: Date.now() }];
        }
        dataStore.savePersons(S.persons);
        S.ui.personEditId = null; S.ui.personError = ""; S.ui.personShowAdd = false;
        render(); break;
      }
      case "person-edit": S.ui.personEditId = ds.id; S.ui.personShowAdd = true; S.ui.personError = ""; render(); break;
      case "person-cancel": S.ui.personEditId = null; S.ui.personShowAdd = false; S.ui.personError = ""; render(); break;
      case "person-toggle": {
        S.persons = personsList().map((p) => p.id === ds.id ? { ...p, status: p.status === "disabled" ? "active" : "disabled" } : p);
        dataStore.savePersons(S.persons); render(); break;
      }
      case "person-delete-ask": S.ui.personConfirmDeleteId = ds.id; render(); break;
      case "person-delete-cancel": S.ui.personConfirmDeleteId = null; render(); break;
      case "person-delete": {
        S.persons = personsList().filter((p) => p.id !== ds.id);
        dataStore.savePersons(S.persons);
        S.ui.personConfirmDeleteId = null; render(); break;
      }
      case "departments-page-open": S.ui.departmentsPageSelectedId = ds.id; render(); break;
      case "departments-page-back": S.ui.departmentsPageSelectedId = null; render(); break;
      case "confirm-delete-report": S.ui.confirmDeleteReportId = ds.id; render(); break;
      case "cancel-delete-report": S.ui.confirmDeleteReportId = null; render(); break;
      case "toggle-report-notes": S.ui.showReportNotesId = S.ui.showReportNotesId === ds.id ? null : ds.id; render(); break;
      case "delete-report": {
        if (!actionAllowed("delete-report")) break;
        const unitId = ds.unitId, reportId = ds.reportId;
        S.reports[unitId] = dataStore.deleteOneReport(unitId, reportId);
        S.ui.confirmDeleteReportId = null;
        render();
        break;
      }
      case "print-page": window.print(); break;

      /* ---------- units overview ---------- */
      case "bs-open": {
        const cur = S.ui.bsPath || [];
        S.ui.bsPath = cur.concat([{ k: ds.kind, id: ds.id || "" }]);
        render();
        break;
      }
      case "bs-up": {
        const idx = Number(ds.index);
        if (idx < 0) S.ui.bsPath = [];
        else S.ui.bsPath = (S.ui.bsPath || []).slice(0, idx + 1);
        render();
        break;
      }
      case "bs-open-dept-ui": {
        S.adminPreviewOrigin = "browse-structure";
        S.currentDepartmentId = ds.id;
        S.ui.previewDeptId = ds.id;
        S.view = "dashboard";
        render();
        break;
      }
      case "bs-open-office-ui": {
        S.adminPreviewOrigin = "browse-structure";
        S.currentOfficeId = ds.id;
        S.view = ds.view === "office-archive" ? "office-archive" : "office-summary";
        render();
        break;
      }
      case "bs-open-unit-ui": {
        const unit = S.units.find((u) => u.id === ds.id);
        if (!unit) break;
        S.adminPreviewOrigin = "browse-structure";
        ensureUnitReportsLoaded(unit.id);
        S.currentUnitId = unit.id; S.currentReportId = null; S.view = "unit-reports"; S.openPhaseId = null; S.activeSectionId = null;
        S.currentUnitEntryMode = "admin";
        render();
        break;
      }
      case "set-unit-reports-filter": S.ui.unitReportsFilter = ds.filter; render(); break;
      case "open-or-create-report": {
        if (!actionAllowed("open-or-create-report")) break;
        // زر "إنشاء تقرير" صار رابطًا رئيسيًا بالشريط الجانبي يُضغط مباشرة بلا
        // اشتراط مسبق بوحدة محدّدة (نفس مبدأ "نav-to" أعلاه) — نتأكد هنا من
        // وجود وحدة صالحة أولًا، بدل الدخول بوحدة غير موجودة (رسالة "تعذر إيجاد
        // الوحدة").
        ensureUnitContextForNav("unit-report");
        // حساب نطاقه قسم أو مكتب إشراف له أكثر من وحدة — نوجّهه أولًا لصفحة
        // "تقارير" (نفس renderUnitReportsHub) ليختار/يتأكد من الوحدة عبر
        // قائمة التبديل (scopedUnitSwitcherHtml) قبل إنشاء التقرير، بدل إنشاء
        // تقرير فورًا لوحدة قد لا تكون مقصودة. حساب الوحدة نفسها (وحدة واحدة
        // فقط) يبقى بسلوكه الأصلي: إنشاء/استكمال فوري بلا أي اختيار وسيط.
        if ((S.isDepartmentUser || S.isOfficeUser) && S.view !== "unit-reports") {
          S.view = "unit-reports"; render();
          break;
        }
        // إنشاء تقرير: تكمل آخر تقرير لسا شغّالة عليه (مسودة/بحاجة لتعديل أو استكمال)،
        // أو تنشئ تقرير جديد فورًا بدون أي اختيار وسيط.
        const list = ensureUnitReportsLoaded(S.currentUnitId);
        const openStatuses = ["draft", "returned", "needs_completion"];
        const inProgress = [...list].reverse().find((r) => openStatuses.includes(r.status));
        const entry = inProgress || createNewReportEntry(S.currentUnitId);
        S.currentReportId = entry.id; S.view = "unit-report"; S.openPhaseId = null; S.activeSectionId = null;
        jumpToFirstNotedSection(entry);
        render();
        break;
      }
      case "open-report": {
        if (!isUnitInUserScope(ds.unitId)) break;
        S.currentUnitId = ds.unitId; S.currentReportId = ds.reportId; S.view = adminReportsReadOnly() ? "full-report" : "unit-report"; S.openPhaseId = null; S.activeSectionId = null;
        S.cameFromAllReports = adminReportsReadOnly();
        if (S.view === "unit-report") jumpToFirstNotedSection(getReportEntry(ds.unitId, ds.reportId));
        render();
        break;
      }
      case "view-report-pdf": {
        // عرض للقراءة فقط — بعد تحقق فعلي من الصلاحية على مستوى البيانات
        if (!isUnitInUserScope(ds.unitId) && !canViewReportViaApPath(ds.unitId)) break;
        S.currentUnitId = ds.unitId; S.currentReportId = ds.reportId; S.view = "full-report";
        S.cameFromAllReports = true;
        render();
        break;
      }
      case "goto-report-tab": {
        S.ui.unitReportsFilter = ds.filter; S.view = "unit-reports";
        if (isMobileViewport()) S.mobileSidebarOpen = false;
        render();
        break;
      }
      case "create-new-report": {
        if (!actionAllowed("create-new-report")) break;
        if (!S.currentUnitId) break;
        const entry = createNewReportEntry(S.currentUnitId);
        if (!entry) break;
        S.currentReportId = entry.id; S.view = "unit-report"; S.openPhaseId = null; S.activeSectionId = null;
        render();
        break;
      }
      case "ap-send": { S.ui.showApSendPicker = true; render(); break; }
      case "ap-send-cancel": { S.ui.showApSendPicker = false; render(); break; }
      case "ap-send-confirm": {
        const entry = getCurrentReportEntry();
        if (!entry) break;
        const p0 = matchingApprovalPaths((S.units || []).find((u) => u.id === S.currentUnitId), entry)[0];
        const pathId = p0 ? p0.id : "";
        if (!pathId) break;
        const notes = ((document.getElementById("ap-send-notes") || {}).value || "").trim();
        if (!apSendReport(S.currentUnitId, entry, pathId, notes)) break;
        S.ui.showApSendPicker = false;
        render();
        break;
      }
      case "ap-advance":
      case "ap-return": {
        const isReturn = ds.action === "ap-return";
        const key = ds.unitId + ":" + ds.reportId;
        const notes = ((document.getElementById("cp-notes-" + key) || {}).value || "").trim();
        const secNotes = {};
        SECTIONS.forEach((sc) => { const el = document.getElementById("cp-sec-" + key + "-" + sc.id); if (el && el.value.trim()) secNotes[sc.id] = el.value.trim(); });
        const toEl = document.getElementById("cp-to-" + key);
        const err = apAdvanceOrReturn(ds.unitId, ds.reportId, isReturn, notes, { sectionNotes: secNotes, type: ds.rtype || "returned", toKey: toEl ? toEl.value : "" });
        if (err) { alert(err); break; }
        if (S.ui.apDraft) delete S.ui.apDraft[key];
        if (S.view === "full-report") S.view = "custom-path-inbox";
        render();
        break;
      }
      case "ap-curate": {
        const entry = getReportEntry(ds.unit, ds.report); if (!entry) break;
        const it = apReviewItemFor(ds.unit, ds.report); if (!it || !it.stage.canCurate) break;
        const cur = ((entry.shared || {}).curatedKeys) || [];
        saveReportEntry(ds.unit, { ...entry, shared: { ...(entry.shared || {}), curatedKeys: cur.includes(ds.key) ? cur.filter((k) => k !== ds.key) : [...cur, ds.key] } });
        render(); break;
      }
      case "ap-open-edit": {
        const entry = getReportEntry(ds.unitId, ds.reportId);
        const ref = entry && apRefOf(entry.customStageId);
        const path = ref && apPathById(ref.pathId);
        const st = path && apStagesNamed(path, (S.units || []).find((u) => u.id === ds.unitId)).find((x) => x.key === entry.customStageId);
        if (!st || !st.canEdit || !userHoldsApStage(st, (S.units || []).find((u) => u.id === ds.unitId))) break;
        S.currentUnitId = ds.unitId; S.currentReportId = ds.reportId; S.view = "unit-report"; S.openPhaseId = null; S.activeSectionId = null;
        render();
        break;
      }
      case "rt-new": S.ui.rtEdit = { id: null, draft: { label: "", statuses: [], adminStatuses: [], special: "", enabled: true } }; S.ui.rtError = ""; S.ui.rtMsg = ""; render(); break;
      case "rt-edit": { const t = reportTabsList().find((x) => x.id === ds.id); if (!t) break; S.ui.rtEdit = { id: t.id, draft: { ...t, statuses: [...(t.statuses || [])], adminStatuses: [...(t.adminStatuses || [])] } }; S.ui.rtError = ""; S.ui.rtMsg = ""; render(); break; }
      case "rt-cancel": S.ui.rtEdit = null; S.ui.rtError = ""; render(); break;
      case "rt-toggle-status": { rtCapture(); const d = S.ui.rtEdit && S.ui.rtEdit.draft; if (!d) break; const i = d.statuses.indexOf(ds.id); if (i >= 0) d.statuses.splice(i, 1); else d.statuses.push(ds.id); render(); break; }
      case "rt-save": {
        rtCapture();
        const ed = S.ui.rtEdit; if (!ed) break;
        const d = ed.draft;
        if (!String(d.label || "").trim()) { S.ui.rtError = "اكتبي اسم الزر"; render(); break; }
        if (!d.special && !(d.statuses || []).length) { S.ui.rtError = "اختاري حالة واحدة على الأقل يعرضها الزر"; render(); break; }
        const list = rtMaterialize();
        const clean = { ...d, label: d.label.trim() };
        if (ed.id) { const i = list.findIndex((x) => x.id === ed.id); if (i >= 0) list[i] = { ...list[i], ...clean }; }
        else list.push({ ...clean, id: "tab_" + uid("t").replace(/[^a-zA-Z0-9_]/g, ""), createdAt: Date.now() });
        rtSave(list);
        addPermLog("report-tab", ed.id || "new", clean.label, ed.id ? "تعديل زر في صفحة التقارير" : "إضافة زر في صفحة التقارير");
        S.ui.rtEdit = null; S.ui.rtError = ""; S.ui.rtMsg = "تم الحفظ"; render(); break;
      }
      case "rt-move": { const list = rtMaterialize(); const i = Number(ds.idx), j = ds.dir === "up" ? i - 1 : i + 1; if (j < 0 || j >= list.length) break; [list[i], list[j]] = [list[j], list[i]]; rtSave(list); S.ui.rtMsg = ""; render(); break; }
      case "rt-toggle-enabled": { const list = rtMaterialize(); const t = list.find((x) => x.id === ds.id); if (!t) break; t.enabled = t.enabled === false; rtSave(list); addPermLog("report-tab", t.id, t.label, t.enabled ? "تفعيل زر" : "تعطيل زر"); S.ui.rtMsg = ""; render(); break; }
      case "rt-delete-ask": S.ui.rtDeleteId = ds.id; render(); break;
      case "rt-delete-cancel": S.ui.rtDeleteId = null; render(); break;
      case "rt-delete": { const list = rtMaterialize(); const t = list.find((x) => x.id === ds.id); rtSave(list.filter((x) => x.id !== ds.id)); if (t) addPermLog("report-tab", t.id, t.label, "حذف زر من صفحة التقارير"); S.ui.rtDeleteId = null; S.ui.rtMsg = list.length <= 1 ? "حذفتِ كل الأزرار، فرجعت القائمة الافتراضية" : "تم الحذف"; render(); break; }
      case "toggle-review-checklist": {
        // ds.field اختياري (يدعم أي حقل نوعه "checklist" مستقبلًا) — بدونه يفترض
        // "checklist" افتراضيًا، نفس الاسم القديم قبل التعميم لحقل schema عام.
        const fieldId = ds.field || "checklist";
        const key = ds.key;
        const current = S.sectionDraft[fieldId] || {};
        S.sectionDraft[fieldId] = { ...current, [key]: !current[key] };
        render();
        break;
      }
      case "toggle-dept-curation": {
        const dept = S.departments.find((d) => d.id === (ds.dept || S.currentDepartmentId));
        if (dept) toggleDeptCuration(dept, ds.key);
        render();
        break;
      }
      case "toggle-office-curation": {
        const office = (S.offices || []).find((o) => o.id === (ds.office || S.currentOfficeId));
        if (office) toggleOfficeCuration(office, ds.key);
        render();
        break;
      }
      case "office-archive-nav": {
        S.ui.officeArchiveYear = ds.year || null;
        S.ui.officeArchivePeriod = ds.period || null;
        render();
        break;
      }
      case "generate-ai-summary": {
        if (!dbConnected()) {
          S.ui.aiSummaryError = "هذي الميزة تحتاج ربط الموقع بقاعدة البيانات أولاً.";
          render();
          break;
        }
        S.ui.aiSummaryBusy = true; S.ui.aiSummaryError = ""; S.ui.aiSummaryText = "";
        render();
        generateAiSummaryAsync();
        break;
      }

      /* ---------- departments management ---------- */
      /* ---------- نقطة الإضافة الموحدة (إدارة عليا/مديرة نظام/مكتب/قسم/وحدة/مركز) ---------- */
      case "struct-set-base-role": {
        // اختيار متعدد: الضغط على دور يضيفه/يزيله من القائمة، و«بلا دور» تفرّغها.
        const holder0 = ds.kind === "department" ? (S.departments || []).find((d) => d.id === ds.id) : ds.kind === "office" ? (S.offices || []).find((o) => o.id === ds.id) : (S.units || []).find((u) => u.id === ds.id);
        let rid = "";
        if (ds.role) {
          const cur = baseRoleIdsRaw(holder0);
          const i = cur.indexOf(ds.role);
          if (i === -1) cur.push(ds.role); else cur.splice(i, 1);
          rid = cur.join(",");
        }
        if (ds.kind === "department") { S.departments = S.departments.map((d) => d.id === ds.id ? { ...d, baseRoleId: rid } : d); dataStore.saveDepartments(S.departments); }
        else if (ds.kind === "office") { S.offices = S.offices.map((o) => o.id === ds.id ? { ...o, baseRoleId: rid } : o); dataStore.saveOffices(S.offices); }
        else { S.units = S.units.map((u) => u.id === ds.id ? { ...u, baseRoleId: rid } : u); dataStore.saveUnits(S.units); }
        render(); break;
      }
      case "struct-person-menu": S.ui.structPersonMenu = S.ui.structPersonMenu === ds.id ? null : ds.id; S.ui.personConfirmDeleteId = null; render(); break;
      case "struct-person-add-open": S.ui.structPersonAdd = ds.key; S.ui.structPersonError = null; render(); break;
      case "struct-person-add-cancel": S.ui.structPersonAdd = null; S.ui.structPersonError = null; render(); break;
      case "struct-people-filter": S.ui.structPeopleFilter = ds.f; render(); break;
      case "struct-open-entity": {
        // من "كل الأشخاص": يفتح جهة الشخص في الهيكل (تبويب الأشخاص)، ويضيفها للشجرة لو ما كانت فيها
        const [k0, ...r0] = String(ds.key).split(":"); const k = k0 === "exec" ? "unit" : k0; const id = r0.join(":");
        let lv = olActive().find((l) => l.linkKind === k && l.linkId === id);
        if (!lv) { olImportEntities(k + ":" + id); lv = olActive().find((l) => l.linkKind === k && l.linkId === id); }
        const ui = olUi(); ui.section = ""; ui.tab = "people"; if (lv) ui.selected = lv.id;
        render(); break;
      }
      case "struct-copy-open": S.ui.structCopy = { key: ds.key, from: "" }; render(); break;
      case "struct-copy-cancel": S.ui.structCopy = null; render(); break;
      case "struct-copy-confirm": {
        const c = S.ui.structCopy; if (!c || !c.from) break;
        const [type, ...rest] = String(ds.key).split(":"); const toId = rest.join(":");
        const from = treeEntity(type, c.from); if (!from) break;
        const kind = STRUCT_OWNER_KIND[type];
        const patch = { baseRoleId: from.baseRoleId || "" };
        if (kind === "department") { S.departments = S.departments.map((d) => d.id === toId ? { ...d, ...patch } : d); dataStore.saveDepartments(S.departments); }
        else if (kind === "office") { S.offices = S.offices.map((o) => o.id === toId ? { ...o, ...patch } : o); dataStore.saveOffices(S.offices); }
        else { S.units = S.units.map((u) => u.id === toId ? { ...u, ...patch } : u); dataStore.saveUnits(S.units); }
        addPermLog("copy-config", toId, (treeEntity(type, toId) || {}).name || "", `نسخ إعداد من «${from.name}»: الدور الأساسي`);
        S.ui.structCopy = null; render(); break;
      }
      case "tree-edit-start": S.ui.treeEditFor = { type: ds.type, id: ds.id }; render(); break;
      case "tree-edit-cancel": S.ui.treeEditFor = null; render(); break;
      case "tree-edit-save": {
        const nm = (document.getElementById("tree-edit-name").value || "").trim();
        const em = (document.getElementById("tree-edit-email").value || "").trim();
        const pw = (document.getElementById("tree-edit-password").value || "").trim();
        if (!nm) break;
        const patch = { name: nm, email: em }; if (pw) patch.password = pw;
        treeSetEntity(ds.type, ds.id, patch);
        S.ui.treeEditFor = null; render();
        break;
      }
      case "tree-confirm-delete": S.ui.treeConfirmDel = { type: ds.type, id: ds.id }; render(); break;
      case "tree-cancel-delete": S.ui.treeConfirmDel = null; render(); break;
      case "tree-delete": {
        treeDeleteEntity(ds.type, ds.id);
        // المستوى المربوط بالجهة المحذوفة يبقى بالشجرة لكن بدون ربط
        if (currentOrgLevels().some((l) => l.linkId === ds.id)) saveOrgLevels(currentOrgLevels().map((l) => (l.linkId === ds.id ? { ...l, linkKind: "", linkId: "" } : l)));
        S.ui.treeConfirmDel = null; S.ui.olUnlinkedDel = null; S.ui.olUnlinkedDelStep = null; render();
        break;
      }
      case "ol-unlinked-del-ask": S.ui.olUnlinkedDel = ds.key; S.ui.olUnlinkedDelStep = 1; render(); break;
      case "ol-unlinked-del-next": S.ui.olUnlinkedDelStep = 2; render(); break;
      case "ol-unlinked-del-cancel": S.ui.olUnlinkedDel = null; S.ui.olUnlinkedDelStep = null; render(); break;
      case "toggle-department": {
        S.departments = S.departments.map((d) => d.id === ds.id ? { ...d, status: d.status === "active" ? "disabled" : "active" } : d);
        dataStore.saveDepartments(S.departments); render();
        break;
      }

      /* ---------- supervision offices management ---------- */
      case "toggle-office": {
        S.offices = (S.offices || []).map((o) => o.id === ds.id ? { ...o, status: o.status === "active" ? "disabled" : "active" } : o);
        dataStore.saveOffices(S.offices); render();
        break;
      }
      /* ---------- units management ---------- */
      case "toggle-unit": {
        S.units = S.units.map((u) => u.id === ds.id ? { ...u, status: u.status === "active" ? "disabled" : "active" } : u);
        dataStore.saveUnits(S.units); render();
        break;
      }

      // فتح/قفل القائمة المنسدلة لصلاحيات الصفحات/الإجراءات — حالة عرض بحتة.
      case "toggle-perm-dropdown": {
        S.ui.permDropdownOpen = S.ui.permDropdownOpen || {};
        S.ui.permDropdownOpen[ds.key] = !S.ui.permDropdownOpen[ds.key];
        render();
        break;
      }
      // "تحديد الكل" / "إلغاء الكل" داخل أي قائمة منسدلة صلاحيات (صفحات أو إجراءات)
      case "select-all-perm": {
        const arr = permDropdownTargetArray(ds.key);
        const isPage = ds.key.indexOf("page") !== -1;
        const allIds = ds.key.indexOf("button") !== -1 ? BUTTON_CATALOG.map((b) => b.id) : isPage ? SIDEBAR_PAGES.filter((p) => p.group !== "unit-home" && MERGED_DASHBOARD_IDS.indexOf(p.id) === -1).map((p) => p.id) : ACTION_CATALOG.map((a) => a.id);
        if (ds.mode === "all") {
          allIds.forEach((id) => { if (arr.indexOf(id) < 0) arr.push(id); });
        } else {
          arr.length = 0;
        }
        permAutoSave(); render();
        break;
      }
      /* ---------- indicators management ---------- */
      case "add-indicator-def": {
        const form = readIndicatorDefForm("new-ind");
        if (!form.name.trim()) break;
        S.indicatorDefinitions = [...S.indicatorDefinitions, { id: uid("ind"), ...form, name: form.name.trim() }];
        dataStore.saveIndicatorDefinitions(S.indicatorDefinitions);
        S.ui["newIndicatorForm_new-ind"] = {};
        render();
        break;
      }
      case "start-indicator-edit": {
        S.ui.editingIndicatorId = ds.id;
        const def = S.indicatorDefinitions.find((d) => d.id === ds.id);
        S.ui["newIndicatorForm_edit-ind"] = def ? { ...def } : {};
        render();
        break;
      }
      case "cancel-indicator-edit": S.ui.editingIndicatorId = null; S.ui["newIndicatorForm_edit-ind"] = {}; render(); break;
      case "save-indicator-edit": {
        const form = readIndicatorDefForm("edit-ind");
        if (!form.name.trim()) break;
        S.indicatorDefinitions = S.indicatorDefinitions.map((d) => d.id === ds.id ? { ...d, ...form, name: form.name.trim() } : d);
        dataStore.saveIndicatorDefinitions(S.indicatorDefinitions);
        S.ui.editingIndicatorId = null; S.ui["newIndicatorForm_edit-ind"] = {}; render();
        break;
      }
      case "confirm-delete-indicator": S.ui.confirmDeleteIndicatorId = ds.id; render(); break;
      case "cancel-confirm-indicator": S.ui.confirmDeleteIndicatorId = null; render(); break;
      case "delete-indicator-def": {
        S.indicatorDefinitions = S.indicatorDefinitions.filter((d) => d.id !== ds.id);
        dataStore.saveIndicatorDefinitions(S.indicatorDefinitions);
        S.ui.confirmDeleteIndicatorId = null; render();
        break;
      }

      /* ---------- goals management (strategic/operational share the same actions via prefix) ---------- */
      case "add-strategic-goal": case "add-operational-goal": {
        const kind = action === "add-strategic-goal" ? "strategic" : "operational";
        const inputEl = document.getElementById(`new-${kind}-goal`);
        const name = (inputEl.value || "").trim();
        if (!name) break;
        const list = S.goalsDefinitions[kind] || [];
        if (!list.some((g) => g.name === name)) {
          const ng = { id: uid(kind[0] + "g"), name };
          if (kind === "operational") { const pe = document.getElementById("new-operational-parent"); ng.parentId = (pe && pe.value) || ""; S.ui.newOpParent = ng.parentId; }
          S.goalsDefinitions = { ...S.goalsDefinitions, [kind]: [...list, ng] };
          dataStore.saveGoalsDefinitions(S.goalsDefinitions);
        }
        render();
        break;
      }
      case "goal-add-toggle": saveSiteTheme({ goalAddFromReport: !goalAddFromReportOn() }); render(); break;
      case "goal-add-open": S.ui.goalAddOpen = ds.key; S.ui.goalAddErr = ""; render(); setTimeout(() => { const el = document.getElementById("goal-add-input"); if (el) el.focus(); }, 30); break;
      case "goal-add-cancel": S.ui.goalAddOpen = null; S.ui.goalAddErr = ""; render(); break;
      case "goal-add-save": {
        const el = document.getElementById("goal-add-input");
        const name = String((el && el.value) || "").trim().replace(/\s+/g, " ");
        if (!name) { S.ui.goalAddErr = "اكتبي نص الهدف"; render(); break; }
        if (!goalAddFromReportOn()) break;
        const kind = ds.kind === "strategic" ? "strategic" : "operational", gid = ds.gid;
        const goalItem = findById(getItemList("goals"), gid);
        const parentName = kind === "operational" ? ((goalItem && goalItem.strategicGoal) || "") : "";
        if (kind === "operational" && !parentName) { S.ui.goalAddErr = "اختاري الهدف الاستراتيجي أولًا، عشان يرتبط الهدف التشغيلي به"; render(); break; }
        // نجيب آخر قائمة من القاعدة قبل الإضافة عشان ما نرجّع تعديلات مديرة النظام
        refreshGoalsDefinitionsFromDb().catch(() => {}).then(() => {
          const list = S.goalsDefinitions[kind] || [];
          const found = list.find((g) => g.name.trim() === name);
          if (!found) {
            const ng = { id: uid(kind[0] + "g"), name };
            if (kind === "operational") ng.parentId = strategicGoalIdByName(parentName);
            S.goalsDefinitions = { ...S.goalsDefinitions, [kind]: [...list, ng] };
            dataStore.saveGoalsDefinitions(S.goalsDefinitions);
          }
          const goal = findById(getItemList("goals"), gid);
          if (goal) {
            if (kind === "strategic") goal.strategicGoal = name;
            else if (!(goal.operationalGoals || []).some((og) => og.name === name)) goal.operationalGoals = [...(goal.operationalGoals || []), { id: uid("og"), name, level: "", percentage: "", evidenceType: "", evidenceAnswer: "", explanation: "" }];
          }
          S.ui.goalAddOpen = null; S.ui.goalAddErr = ""; render();
        });
        break;
      }
      case "add-report-section": {
        const inputEl = document.getElementById("new-report-section-name");
        const label = (inputEl.value || "").trim();
        if (!label) break;
        const list = sortedSectionDefs();
        const nextOrder = list.length ? Math.max(...list.map((s) => s.order ?? 0)) + 1 : 0;
        const newDef = { id: uid("sec"), label, order: nextOrder, enabled: true };
        const updated = [...list, newDef];
        applyReportSectionDefs(updated);
        dataStore.saveReportSectionDefs(updated);
        inputEl.value = "";
        render();
        break;
      }
      case "start-section-edit": { S.ui.editingSectionId = ds.id; S.ui.editSectionValue = ds.name; render(); break; }
      case "cancel-section-edit": { S.ui.editingSectionId = null; render(); break; }
      case "save-section-edit": {
        const val = document.getElementById("edit-section-name").value.trim();
        if (val) {
          const updated = sortedSectionDefs().map((s) => s.id === ds.id ? { ...s, label: val } : s);
          applyReportSectionDefs(updated);
          dataStore.saveReportSectionDefs(updated);
        }
        S.ui.editingSectionId = null; render(); break;
      }
      case "delete-report-section-ask": S.ui.secDelAsk = ds.id; render(); break;
      case "delete-report-section-cancel": S.ui.secDelAsk = null; render(); break;
      case "delete-report-section": {
        if (DEFAULT_SECTIONS.some((x) => x.id === ds.id)) break; // الأقسام الأساسية لا تُحذف
        const updated = sortedSectionDefs().filter((x) => x.id !== ds.id);
        applyReportSectionDefs(updated);
        dataStore.saveReportSectionDefs(updated);
        if (SECTION_FIELD_SCHEMAS[ds.id]) {
          delete SECTION_FIELD_SCHEMAS[ds.id];
          const map = { ...dataStore.getSectionFieldSchemas() }; delete map[ds.id];
          dataStore.saveSectionFieldSchemas(map);
        }
        S.ui.secDelAsk = null; render(); break;
      }
      case "toggle-report-section": {
        const updated = sortedSectionDefs().map((s) => s.id === ds.id ? { ...s, enabled: s.enabled === false } : s);
        applyReportSectionDefs(updated);
        dataStore.saveReportSectionDefs(updated);
        render(); break;
      }
      case "move-report-section": {
        const list = sortedSectionDefs();
        const i = list.findIndex((s) => s.id === ds.id);
        const j = ds.dir === "up" ? i - 1 : i + 1;
        if (i < 0 || j < 0 || j >= list.length) break;
        const oi = list[i].order ?? i, oj = list[j].order ?? j;
        list[i] = { ...list[i], order: oj }; list[j] = { ...list[j], order: oi };
        applyReportSectionDefs(list);
        dataStore.saveReportSectionDefs(list);
        render(); break;
      }

      /* ---- section field-schema management (الخطوة ٢) ---- */
      case "select-field-schema-section": {
        S.ui.fieldSchemaSection = ds.section;
        S.ui.editingFieldId = null; S.ui.fieldEditDraft = null;
        render(); break;
      }
      case "start-add-field": {
        S.ui.fieldSchemaSection = ds.section;
        S.ui.editingFieldId = "__new__";
        S.ui.fieldEditDraft = { type: "text", label: "", required: false, placeholder: "", optionsText: "", otherLabel: "أخرى" };
        render(); break;
      }
      case "start-edit-field": {
        const schema = SECTION_FIELD_SCHEMAS[ds.section];
        const field = schema && schema.fields.find((f) => f.id === ds.id);
        if (!field || field.type === "computed") break;
        S.ui.fieldSchemaSection = ds.section;
        S.ui.editingFieldId = field.id;
        S.ui.fieldEditDraft = { ...field, optionsText: (field.options || field.baseOptions || []).join("\n") };
        render(); break;
      }
      case "reset-field-draft-colors": {
        S.ui.fieldEditDraft = S.ui.fieldEditDraft || {};
        const g2_ = (id) => document.getElementById(id);
        if (g2_("field-draft-label")) S.ui.fieldEditDraft.label = g2_("field-draft-label").value;
        if (g2_("field-draft-options")) S.ui.fieldEditDraft.optionsText = g2_("field-draft-options").value;
        if (g2_("field-draft-placeholder")) S.ui.fieldEditDraft.placeholder = g2_("field-draft-placeholder").value;
        S.ui.fieldEditDraft.iconColor = ""; S.ui.fieldEditDraft.iconBg = "";
        render(); break;
      }
      case "set-field-draft-icon": {
        S.ui.fieldEditDraft = S.ui.fieldEditDraft || {};
        const d_ = S.ui.fieldEditDraft;
        const g_ = (id) => document.getElementById(id);
        if (g_("field-draft-label")) d_.label = g_("field-draft-label").value;
        if (g_("field-draft-options")) d_.optionsText = g_("field-draft-options").value;
        if (g_("field-draft-placeholder")) d_.placeholder = g_("field-draft-placeholder").value;
        if (g_("field-draft-other-label")) d_.otherLabel = g_("field-draft-other-label").value;
        d_.icon = ds.icon;
        render(); break;
      }
      case "cancel-field-edit": { S.ui.editingFieldId = null; S.ui.fieldEditDraft = null; render(); break; }
      case "toggle-field-draft-required": {
        S.ui.fieldEditDraft = S.ui.fieldEditDraft || {};
        S.ui.fieldEditDraft.required = !S.ui.fieldEditDraft.required;
        render(); break;
      }
      case "save-schema-field": {
        const sectionId = S.ui.fieldSchemaSection || (fieldSchemaManagedSections()[0] || {}).id;
        // قسم مضاف بلا حقول بعد: ننشئ تعريفه (قائمة عناصر بنفس معرّف القسم)
        if (!SECTION_FIELD_SCHEMAS[sectionId] && SECTIONS.some((x) => x.id === sectionId)) setSectionFieldsLive(sectionId, []);
        const schema = SECTION_FIELD_SCHEMAS[sectionId];
        if (!schema) break;
        const draft = S.ui.fieldEditDraft || {};
        const labelEl = document.getElementById("field-draft-label");
        const label = (labelEl && labelEl.value || "").trim();
        if (!label) break;
        const type = draft.type || "text";
        const optionsEl = document.getElementById("field-draft-options");
        const optionsList = optionsEl ? optionsEl.value.split("\n").map((s) => s.trim()).filter(Boolean) : [];
        const placeholderEl = document.getElementById("field-draft-placeholder");
        const placeholder = (placeholderEl && placeholderEl.value || "").trim();
        const otherLabelEl = document.getElementById("field-draft-other-label");
        const isNew = S.ui.editingFieldId === "__new__";
        const fieldId = isNew ? uid("fld") : S.ui.editingFieldId;
        const newField = { id: fieldId, type, label, required: !!draft.required, placeholder };
        if (draft.icon && FIELD_SVG[draft.icon]) newField.icon = draft.icon;
        if (draft.iconColor) newField.iconColor = draft.iconColor;
        if (draft.iconBg) newField.iconBg = draft.iconBg;
        if (type === "select" || type === "radio" || type === "checklist") newField.options = optionsList;
        if (type === "expandableSelect") {
          newField.baseOptions = optionsList;
          newField.otherLabel = (otherLabelEl && otherLabelEl.value.trim()) || "أخرى";
          newField.customKey = draft.customKey || `custom_${fieldId}`;
        }
        // تنسيق بصري (عنوان فرعي/محاذاة صف) أو شرط ظهور شرطي موجود على الحقل
        // الأصلي وقت التعديل — ما فيه واجهة لتعديلها حاليًا، فنحافظ عليها كما هي
        // بدل ما تضيع بصمت (نفس الخطأ اللي أُصلح سابقًا لـ hint/minItems/maxItems).
        if (!isNew && draft.subheadBefore) newField.subheadBefore = draft.subheadBefore;
        if (!isNew && draft.rowGroup) newField.rowGroup = draft.rowGroup;
        if (!isNew && draft.visibleWhen) newField.visibleWhen = draft.visibleWhen;
        const fields = isNew ? [...schema.fields, newField] : schema.fields.map((f) => f.id === fieldId ? newField : f);
        setSectionFieldsLive(sectionId, fields);
        dataStore.saveSectionFieldSchemas({ ...dataStore.getSectionFieldSchemas(), [sectionId]: fields });
        S.ui.editingFieldId = null; S.ui.fieldEditDraft = null;
        render(); break;
      }
      case "remove-schema-field": {
        const sectionId = ds.section;
        const schema = SECTION_FIELD_SCHEMAS[sectionId];
        if (!schema) break;
        const fields = schema.fields.filter((f) => f.id !== ds.id);
        setSectionFieldsLive(sectionId, fields);
        dataStore.saveSectionFieldSchemas({ ...dataStore.getSectionFieldSchemas(), [sectionId]: fields });
        render(); break;
      }
      case "move-schema-field": {
        const sectionId = ds.section;
        const schema = SECTION_FIELD_SCHEMAS[sectionId];
        if (!schema) break;
        const fields = schema.fields.slice();
        const i = fields.findIndex((f) => f.id === ds.id);
        const j = ds.dir === "up" ? i - 1 : i + 1;
        if (i < 0 || j < 0 || j >= fields.length) break;
        const tmp = fields[i]; fields[i] = fields[j]; fields[j] = tmp;
        setSectionFieldsLive(sectionId, fields);
        dataStore.saveSectionFieldSchemas({ ...dataStore.getSectionFieldSchemas(), [sectionId]: fields });
        render(); break;
      }
      default: handleDynamicGoalAction(action, ds) || handleReportEditorAction(action, ds, e) ;
    }
    } catch (err) {
      // شبكة أمان: بدل ما يبقى الزر "ميت" بصمت لو صار خطأ غير متوقع، نبيّنه ونحاول نكمل العرض.
      console.error("Action failed:", action, err);
      S.sectionSaveError = S.activeSectionId ? "صار خطأ غير متوقع أثناء الحفظ. حاولي مرة ثانية، ولو تكررت المشكلة تواصلي مع الدعم الفني." : "";
      try { render(); } catch (e2) { console.error("Render also failed:", e2); }
    }
  });
}

function handleDynamicGoalAction(action, ds) {
  const m = action.match(/^(start|save|cancel|confirm-delete|delete|cancel-confirm)-(Strategic|Operational)-goal(-edit)?$/);
  if (!m) return false;
  const op = m[1], kindLabel = m[2];
  const kind = kindLabel === "Strategic" ? "strategic" : "operational";
  const listKey = kind;
  if (op === "start") { S.ui[`editing${kindLabel}Id`] = ds.id; S.ui[`edit${kindLabel}Value`] = ds.name; render(); return true; }
  if (op === "cancel") { S.ui[`editing${kindLabel}Id`] = null; render(); return true; }
  if (op === "save") {
    const val = document.getElementById(`edit-${kind}-goal-name`).value.trim();
    if (val) {
      S.goalsDefinitions = { ...S.goalsDefinitions, [listKey]: (S.goalsDefinitions[listKey] || []).map((g) => g.id === ds.id ? { ...g, name: val } : g) };
      dataStore.saveGoalsDefinitions(S.goalsDefinitions);
    }
    S.ui[`editing${kindLabel}Id`] = null; render(); return true;
  }
  if (op === "confirm-delete") { S.ui[`confirm${kindLabel}DeleteId`] = ds.id; render(); return true; }
  if (op === "cancel-confirm") { S.ui[`confirm${kindLabel}DeleteId`] = null; render(); return true; }
  if (op === "delete") {
    S.goalsDefinitions = { ...S.goalsDefinitions, [listKey]: (S.goalsDefinitions[listKey] || []).filter((g) => g.id !== ds.id) };
    dataStore.saveGoalsDefinitions(S.goalsDefinitions);
    S.ui[`confirm${kindLabel}DeleteId`] = null; render(); return true;
  }
  return false;
}

/* =============================== Report editor + misc action handlers ========= */
function handleReportEditorAction(action, ds) {
  switch (action) {
    case "toggle-login-pw": S.ui.loginShowPw = !S.ui.loginShowPw; render(); return true;

    case "toggle-phase-collapse": S.phaseCollapsed = !S.phaseCollapsed; render(); return true;
    case "open-mobile-phase-sidebar": S.mobilePhaseOpen = true; render(); return true;
    case "close-mobile-phase-sidebar": S.mobilePhaseOpen = false; render(); return true;
    case "select-section": openSection(ds.section); return true;
    case "close-section": {
      // Autosave current progress as a draft (without changing completed flag), then
      // go back to this unit's report list ("تقاريري") — there's no phase-overview
      // screen to return to anymore.
      if (S.activeSectionId) persistSection(S.activeSectionId, S.sectionDraft, S.sectionCompleted ? "completed" : "draft");
      S.activeSectionId = null; S.sectionDraft = null;
      S.view = "unit-reports";
      render();
      return true;
    }
    case "toggle-section-completed": {
      if (!actionAllowed("toggle-section-completed")) return true;
      const next = !S.sectionCompleted;
      if (trySaveSectionWithStatus(next ? "completed" : "draft")) S.sectionCompleted = next;
      render();
      return true;
    }
    case "section-save-draft": {
      if (!actionAllowed("section-save-draft")) return true;
      if (trySaveSectionWithStatus(S.sectionCompleted ? "completed" : "draft")) {
        S.sectionSaveStatus = "تم الحفظ ✓";
        render();
        setTimeout(() => { S.sectionSaveStatus = ""; if (S.activeSectionId) render(); }, 1500);
      } else render();
      return true;
    }
    case "section-prev": {
      if (!trySaveSectionWithStatus(S.sectionCompleted ? "completed" : "draft")) { render(); return true; }
      const list = activeReportSections(), idx = list.findIndex((s) => s.id === S.activeSectionId);
      if (idx > 0) openSection(list[idx - 1].id);
      return true;
    }
    case "section-next": {
      if (!trySaveSectionWithStatus(S.sectionCompleted ? "completed" : "draft")) { render(); return true; }
      const list = activeReportSections(), idx = list.findIndex((s) => s.id === S.activeSectionId);
      if (idx < list.length - 1) openSection(list[idx + 1].id);
      return true;
    }

    /* ---- repeatable items ---- */
    case "add-item": {
      const factory = EMPTY_ITEM_FACTORY[ds.arr];
      if (factory) {
        // في الأقسام المبنية على المحرك العام (SECTION_FIELD_SCHEMAS)، نطوي العناصر
        // السابقة تلقائيًا ونخلي العنصر الجديد بس هو المفتوح. نبحث عن التعريف بمطابقة
        // arrayKey مباشرة (لا عبر S.activeSectionId ولا معرّف القسم)، لأن بعض الأقسام
        // اسم مصفوفتها مختلف عن معرّف القسم نفسه (مثال: "improvement" ← d.opportunities)،
        // وبعض المصفوفات (مثل "comparisons") مُدارة ذاتيًا من داخل قسم مكتوب يدويًا
        // (analysis) وليست القسم كامل، فما تكون مفتاحها بالتعريف مطابقًا لأي معرّف قسم.
        const schema = Object.values(SECTION_FIELD_SCHEMAS).find((s) => s.arrayKey === ds.arr) || null;
        const list = getItemList(ds.arr);
        // شبكة أمان: تمنع تجاوز الحد الأقصى (maxItems) حتى لو انضغط الزر بالغلط وهو
        // معطّل بالواجهة (مثال: قسم "نقاط القوة" بحد أقصى 5).
        if (!schema || schema.maxItems == null || list.length < schema.maxItems) {
          const item = factory();
          list.push(item);
          if (schema) {
            S.ui.expandedRepeatItem = S.ui.expandedRepeatItem || {};
            S.ui.expandedRepeatItem[ds.arr] = item.id;
          }
        }
      }
      render();
      return true;
    }
    case "toggle-repeat-item": {
      S.ui.expandedRepeatItem = S.ui.expandedRepeatItem || {};
      const current = S.ui.expandedRepeatItem[ds.arr];
      S.ui.expandedRepeatItem[ds.arr] = current === ds.id ? null : ds.id;
      render();
      return true;
    }
    case "remove-item": {
      const list = S.sectionDraft[ds.arr];
      if (list) S.sectionDraft[ds.arr] = list.filter((x) => x.id !== ds.id);
      render();
      return true;
    }
    case "add-strength": {
      const list = getItemList("strengths");
      if (list.length < 5) list.push(EMPTY_ITEM_FACTORY.strengths());
      render();
      return true;
    }
    case "add-goal": {
      const g = EMPTY_ITEM_FACTORY.goals();
      getItemList("goals").push(g);
      S.ui.expandedRepeatItem = S.ui.expandedRepeatItem || {};
      S.ui.expandedRepeatItem.goals = g.id;
      render(); return true;
    }
    case "add-indicator": {
      const ind = EMPTY_ITEM_FACTORY.indicators();
      getItemList("indicators").push(ind);
      S.ui.expandedRepeatItem = S.ui.expandedRepeatItem || {};
      S.ui.expandedRepeatItem.indicators = ind.id;
      render(); return true;
    }

    /* ---- indicator card toggles ---- */
    case "toggle-indicator-details": {
      S.ui.indicatorDetailsOpen = S.ui.indicatorDetailsOpen || {};
      S.ui.indicatorDetailsOpen[ds.id] = !S.ui.indicatorDetailsOpen[ds.id];
      render(); return true;
    }
    case "toggle-indicator-editing": {
      S.ui.indicatorEditingOpen = S.ui.indicatorEditingOpen || {};
      S.ui.indicatorEditingOpen[ds.id] = !S.ui.indicatorEditingOpen[ds.id];
      render(); return true;
    }
    case "submit-new-indicator": {
      const key = `newIndicatorForm_${ds.id}`;
      const form = S.ui[key] || {};
      if (!(form.name && form.name.trim() && form.target !== "" && form.target !== undefined)) { render(); return true; }
      const name = form.name.trim();
      if (!S.indicatorDefinitions.some((d) => d.name === name)) {
        S.indicatorDefinitions = [...S.indicatorDefinitions, { id: uid("ind"), name, category: "", direction: "", unit: "", ...form }];
        dataStore.saveIndicatorDefinitions(S.indicatorDefinitions);
      }
      const list = getItemList("indicators");
      const item = findById(list, ds.id);
      if (item) item.name = name;
      delete S.ui[key];
      render(); return true;
    }
    case "cancel-new-indicator": {
      const list = getItemList("indicators");
      const item = findById(list, ds.id);
      if (item) item.name = "";
      delete S.ui[`newIndicatorForm_${ds.id}`];
      render(); return true;
    }

    /* ---- expandable "other" select ---- */
    case "add-expandable-option": {
      const otherKey = ds.key;
      const val = ((S.ui.expandableOtherText && S.ui.expandableOtherText[otherKey]) || "").trim();
      if (!val) { render(); return true; }
      const arr = ds.arr || null, id = ds.id || null, subarr = ds.subarr || null, subid = ds.subid || null, field = ds.field;
      const mapKey = `${arr || "top"}|${field}`;
      const customArrKey = CUSTOM_OPTION_FIELD_MAP[mapKey];
      if (customArrKey) {
        const existing = S.sectionDraft[customArrKey] || [];
        if (!existing.includes(val)) S.sectionDraft[customArrKey] = [...existing, val];
      }
      // set the value itself using the same addressing scheme as any bound field
      setFieldFromEl({ dataset: { arr, id, field, subarr, subid }, value: val });
      if (S.ui.expandableOtherText) delete S.ui.expandableOtherText[otherKey];
      render(); return true;
    }

    /* ---- multi-select dropdown (goals -> operational goals) ---- */
    case "toggle-multi-dropdown": S.ui.openMultiDropdown = S.ui.openMultiDropdown === ds.key ? null : ds.key; render(); return true;
    case "multi-toggle": {
      // key format: goal-og-<goalId>
      const m = ds.key.match(/^goal-og-(.+)$/);
      if (!m) return true;
      const goalId = m[1];
      const list = getItemList("goals");
      const goal = findById(list, goalId);
      if (!goal) return true;
      const existing = goal.operationalGoals || [];
      const has = existing.some((og) => og.name === ds.value);
      if (has) {
        goal.operationalGoals = existing.filter((og) => og.name !== ds.value);
      } else {
        goal.operationalGoals = [...existing, { id: uid("og"), name: ds.value, level: "", percentage: "", evidenceType: "", evidenceAnswer: "", explanation: "" }];
      }
      render(); return true;
    }
  }
  return false;
}

function trySaveSectionWithStatus(status) {
  if (S.activeSectionId === "goals") {
    const result = validateGoalsData(S.sectionDraft);
    if (!result.valid) { S.sectionSaveError = result.message; return false; }
  }
  S.sectionSaveError = "";
  persistSection(S.activeSectionId, S.sectionDraft, status);
  if (S.sectionSaveError) return false;
  return true;
}

/* =============================== After-render hook + bootstrap ================ */
function applySiteColors(settings) {
  ROSE = settings.primary;
  ROSE_DARK = settings.primary;
  const root = document.documentElement;
  root.style.setProperty("--rose", settings.primary);
  root.style.setProperty("--rose-dark", settings.primary);
  root.style.setProperty("--blush-bg", settings.background);
  const th = themeOf(settings);
  INK = th.ink; SUBTLE = th.subtle; BORDER = th.border; GREEN = th.green; GOLD = th.gold; DANGER = th.danger; BLUE = th.blue;
  GREEN_BG = th.green === DEFAULT_THEME.green ? DEFAULT_THEME_BG.green : mixHex(th.green, "#ffffff", 0.88);
  GOLD_BG = th.gold === DEFAULT_THEME.gold ? DEFAULT_THEME_BG.gold : mixHex(th.gold, "#ffffff", 0.88);
  DANGER_BG = th.danger === DEFAULT_THEME.danger ? DEFAULT_THEME_BG.danger : mixHex(th.danger, "#ffffff", 0.88);
  BLUE_BG = th.blue === DEFAULT_THEME.blue ? DEFAULT_THEME_BG.blue : mixHex(th.blue, "#ffffff", 0.88);
  [["--ink", INK], ["--subtle", SUBTLE], ["--border", BORDER], ["--green", GREEN], ["--green-bg", GREEN_BG], ["--gold", GOLD], ["--gold-bg", GOLD_BG],
   ["--danger", DANGER], ["--danger-bg", DANGER_BG], ["--blue", BLUE], ["--blue-bg", BLUE_BG], ["--sidebar-bg", th.sidebarBg], ["--nav-active-bg", th.navActive === "#6b2337" ? "linear-gradient(135deg, #8B4A73, #6b2337)" : `linear-gradient(135deg, ${mixHex(th.navActive, "#ffffff", 0.25)}, ${th.navActive})`]]
    .forEach(([k, v]) => root.style.setProperty(k, v));
  TEXT_STYLE_FIELDS.forEach((f) => {
    const cssName = { nav: "--nav", sbTitle: "--sb-title", bannerTitle: "--banner-title", bannerSub: "--banner-sub" }[f.k];
    if (th[f.k + "Color"]) root.style.setProperty(cssName + "-color", th[f.k + "Color"]); else root.style.removeProperty(cssName + "-color");
    root.style.setProperty(cssName + "-size", (Number(th[f.k + "Size"]) || f.def) + "px");
  });
  ICON_OVERRIDE = th.iconColor || "";
  applyPeriodTypes(th.periodTypes);
  const veil = Math.max(0, Math.min(90, Number(th.sidebarBgVeil) || 0)) / 100;
  root.style.setProperty("--sidebar-bg-image", th.sidebarBgImage ? `linear-gradient(rgba(255,255,255,${veil}),rgba(255,255,255,${veil})), url("${String(th.sidebarBgImage).replace(/"/g, "")}")` : "none");
  const font = settings.fontFamily || DEFAULT_BRANDING.fontFamily;
  root.style.setProperty("--font-main", `'${font}'`);
  root.style.setProperty("--font-heading", `'${font}'`);
}
function afterRender() {
  applyButtonPermissions();
  const loginUserEl = document.getElementById("login-username");
  if (loginUserEl) loginUserEl.focus();
}

/* ===== التحديث الحي: أي جهاز فاتح الموقع يجيب آخر التعديلات كل ٢٠ ثانية (ولما يرجع للتبويب) =====
   ويطبّق الصلاحيات الجديدة بدون خروج. ما يرسم الصفحة من جديد وأحد يكتب في خانة — ينتظر لين يطلع منها. */
const LIVE_SYNC_MS = 20000;
let liveSyncBusy = false;
function liveSig() {
  const reps = Object.keys(S.reports || {}).map((k) => (S.reports[k] || []).map((r) => r.id + r.status + (r.updatedAt || 0) + (r.customStageId || "")).join()).join("|");
  return JSON.stringify([S.units, S.departments, S.offices, S.roles, S.persons, S.orgLevels, S.approvalPaths, (S.siteSettings || {}).theme, S.indicatorDefinitions, S.goalsDefinitions]) + reps;
}
async function liveSyncReports() {
  await pendingSupabaseWrite("reports");
  const res = await supabaseRequest("reports?select=*");
  if (!res.ok || !Array.isArray(res.data)) return;
  const by = {};
  res.data.forEach((row) => { (by[row.unit_id] = by[row.unit_id] || []).push(rowToReport(row)); });
  const editing = S.view === "unit-report" ? S.currentReportId : null;
  Object.keys(S.reports || {}).forEach((uid0) => {
    const local = new Map((S.reports[uid0] || []).map((r) => [r.id, r]));
    // النسخة الأحدث تفوز؛ والتقرير المفتوح للتعبئة على هذا الجهاز يبقى كما هو
    const merged = (by[uid0] || []).map((r) => { const l = local.get(r.id); return l && (l.id === editing || (l.updatedAt || 0) > (r.updatedAt || 0)) ? l : r; });
    (S.reports[uid0] || []).forEach((l) => { if (!merged.some((m) => m.id === l.id) && (l.id === editing || Date.now() - (l.createdAt || 0) < 60000)) merged.push(l); });
    S.reports[uid0] = merged;
    dataStore.cacheReportsLocally(uid0, merged);
  });
}
function applySessionPermsLive() {
  if (!S.currentUser) return;
  if (S.currentPersonId) { const p = personsList().find((x) => x.id === S.currentPersonId); if (p) { S.allowedActions = null; S.allowedButtons = null; applyPersonPerms(p); } return; }
  if (S.levelScope) {
    const l = olFind(S.levelScope.levelId); if (!l) return;
    S.levelScope.unitIds = olScopeUnitIds(l.id);
    const role = l.roleId ? rolesList().find((r) => r.id === l.roleId) : null;
    S.allowedActions = null; S.allowedButtons = null;
    if (role) { S.levelScope.roleId = role.id; applyPersonPerms({ roleId: role.id, permsOverride: null }); S.allowedPages = (S.allowedPages || []).filter((x) => LEVEL_COMPATIBLE_PAGES.includes(x)); }
    else S.allowedPages = [];
    return;
  }
  if (S.isAdmin || S.isExecutive) {
    const u = S.currentUser;
    const ent = S.units.find((x) => x.id === u.id || x.id === u.unitId) || S.units.find((x) => x.role === (S.isAdmin ? "admin" : "executive") && x.name === u.name);
    S.allowedActions = null; S.allowedButtons = null;
    applyAdminOrExecRoles(ent, S.isAdmin);
    return;
  }
  const ent = S.isDepartmentUser ? S.departments.find((d) => d.id === S.currentDepartmentId) : S.isOfficeUser ? (S.offices || []).find((o) => o.id === S.currentOfficeId) : S.units.find((x) => x.id === S.currentUser.id);
  const ids = baseRoleIdsOf(ent || {});
  if (ids.length === 1) { S.allowedActions = null; S.allowedButtons = null; applyPersonPerms({ roleId: ids[0], permsOverride: null }); }
}
function liveTyping() {
  const a = document.activeElement;
  return !!a && (a.tagName === "TEXTAREA" || a.tagName === "SELECT" || (a.tagName === "INPUT" && !["button", "checkbox", "radio", "submit"].includes(a.type)));
}
async function liveSync() {
  if (liveSyncBusy || !dbConnected() || !S.currentUser || document.hidden) return;
  // تعديل قبل لحظات: ننتظر لين توصل كتابته للقاعدة، عشان ما نرجّع نسخة أقدم منه
  if (Date.now() - lastDbWriteAt < 5000) { setTimeout(liveSync, 5000); return; }
  liveSyncBusy = true;
  const started = Date.now();
  try {
    const before = liveSig();
    await Promise.all([refreshUnitsAndDepartmentsFromDb(), refreshOrgLevelsFromDb(), refreshRolesPersonsFromDb(), refreshApprovalPathsFromDb(),
      pendingSupabaseWrite("site_settings").then(refreshSiteSettingsFromDb), liveSyncReports()].map((x) => Promise.resolve(x).catch(() => {})));
    if (lastDbWriteAt >= started) { setTimeout(liveSync, 5000); return; }
    if (liveSig() === before) return;
    applySessionPermsLive();
    if (liveTyping()) S.ui.livePending = true; else render();
  } finally { liveSyncBusy = false; }
}
function startLiveSync() {
  setInterval(liveSync, LIVE_SYNC_MS);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) liveSync(); });
  window.addEventListener("focus", () => liveSync());
  document.addEventListener("focusout", () => setTimeout(() => { if (S.ui && S.ui.livePending && !liveTyping()) { S.ui.livePending = false; render(); } }, 200));
}
function boot() {
  S.siteSettings = dataStore.getSiteSettings();
  applySiteColors(S.siteSettings);
  attachFormListeners();
  attachClickListener();
  // رابط دخول خاص بجهة (?e=نوع:معرّف) — نحمّل أسماء الجهات قبل الدخول لعرض اسمها وأيقونتها
  S.entryLink = parseEntryParam();
  portalPreload();
  if (S.entryLink) applyEntryHomeScreen();
  render();
  if (dbConnected()) refreshSiteSettingsFromDb().then(() => {
    applyEntryHomeScreen(); render();
    // رابط جهة أو بوابة دخول مفعّلة: نحدّث أسماء الجهات والهيكل من القاعدة قبل الدخول
    if (S.entryLink || portalEnabled()) Promise.all([refreshUnitsAndDepartmentsFromDb(), refreshOrgLevelsFromDb()]).then(() => { applyEntryHomeScreen(); if (!S.currentUser) render(); }).catch(() => {});
  });
  if (dbConnected()) refreshDashboardConfigFromDb().then(() => render()).catch(() => {});
  if (dbConnected()) refreshOrgLevelsFromDb().then(() => { if (S.view === "org-levels" || S.view === "units-manage") render(); }).catch(() => {});
  if (dbConnected()) startLiveSync();
}

document.addEventListener("DOMContentLoaded", boot);
