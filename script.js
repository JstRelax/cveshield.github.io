const _0x19ca55=_0x5d73;(function(_0x2a3639,_0x28606b){const _0xdbeaf7=_0x5d73,_0x3ce316=_0x2a3639();while(!![]){try{const _0x363dce=-parseInt(_0xdbeaf7(0x16c))/0x1+-parseInt(_0xdbeaf7(0x17f))/0x2*(parseInt(_0xdbeaf7(0x184))/0x3)+-parseInt(_0xdbeaf7(0x17e))/0x4*(parseInt(_0xdbeaf7(0x1a9))/0x5)+-parseInt(_0xdbeaf7(0x16a))/0x6*(-parseInt(_0xdbeaf7(0x163))/0x7)+-parseInt(_0xdbeaf7(0x1ab))/0x8+parseInt(_0xdbeaf7(0x175))/0x9*(parseInt(_0xdbeaf7(0x189))/0xa)+-parseInt(_0xdbeaf7(0x19d))/0xb*(-parseInt(_0xdbeaf7(0x16e))/0xc);if(_0x363dce===_0x28606b)break;else _0x3ce316['push'](_0x3ce316['shift']());}catch(_0x3993ba){_0x3ce316['push'](_0x3ce316['shift']());}}}(_0x1bde,0x3871f));const apiURL=_0x19ca55(0x180);let scrollPosition=0x0;function _0x5d73(_0x2a549b,_0x444bc0){const _0x1bdead=_0x1bde();return _0x5d73=function(_0x5d73af,_0x59f49a){_0x5d73af=_0x5d73af-0x160;let _0xe676af=_0x1bdead[_0x5d73af];return _0xe676af;},_0x5d73(_0x2a549b,_0x444bc0);}async function fetchCVEData(){const _0x5447b3=_0x19ca55;try{const _0x442be2=await fetch(apiURL,{'headers':{'apikey':_0x5447b3(0x18e),'Authorization':_0x5447b3(0x181)}});if(!_0x442be2['ok'])throw new Error(_0x5447b3(0x18d));const _0x3671df=await _0x442be2[_0x5447b3(0x173)](),_0x3df313=groupByCVE(_0x3671df),_0x137663=Object['values'](_0x3df313)[_0x5447b3(0x1a7)]((_0x179a91,_0x2ebc5c)=>_0x2ebc5c[_0x5447b3(0x1ae)]-_0x179a91[_0x5447b3(0x1ae)]);populateCVEData(_0x137663);}catch(_0x50a0d0){console['error'](_0x5447b3(0x195),_0x50a0d0);}}function groupByCVE(_0x241626){const _0xca367b=_0x19ca55;return _0x241626[_0xca367b(0x191)]((_0x432c94,_0x4c864c)=>{const _0x1024a9=_0xca367b,_0x2c2c5c=_0x4c864c[_0x1024a9(0x174)];return!_0x432c94[_0x2c2c5c]&&(_0x432c94[_0x2c2c5c]={..._0x4c864c,'totalAudience':0x0,'posts':[]}),_0x432c94[_0x2c2c5c]['totalAudience']+=_0x4c864c[_0x1024a9(0x17d)],_0x432c94[_0x2c2c5c][_0x1024a9(0x1ad)]['push']({'author':_0x4c864c[_0x1024a9(0x178)],'username':_0x4c864c['username'],'post':_0x4c864c['post'],'time':new Date(_0x4c864c['created_datetime'])['toLocaleTimeString']([],{'hour':_0x1024a9(0x193),'minute':_0x1024a9(0x193)}),'date':new Date(_0x4c864c[_0x1024a9(0x171)])[_0x1024a9(0x19f)]()}),_0x432c94;},{});}function populateCVEData(_0x126074){const _0x529410=_0x19ca55,_0x316f36=document[_0x529410(0x1a2)](_0x529410(0x183));_0x316f36[_0x529410(0x1a3)]='',_0x126074[_0x529410(0x177)]((_0x51882b,_0x3dfe72)=>{const _0x4570eb=_0x529410,_0x155731=document[_0x4570eb(0x194)](_0x4570eb(0x164));_0x155731['className']='cve-card';const _0x26e8a9=(_0x27df19,_0x4c3263=0xa)=>_0x4570eb(0x161)+_0x27df19/_0x4c3263*0x64+_0x4570eb(0x176)+(_0x27df19>0x7?_0x4570eb(0x199):_0x4570eb(0x168))+_0x4570eb(0x18c),_0x14192d=_0x51882b[_0x4570eb(0x1ad)]['map'](_0x30da6d=>'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tweet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>'+_0x30da6d[_0x4570eb(0x178)]+_0x4570eb(0x167)+_0x30da6d[_0x4570eb(0x17c)]+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>'+_0x30da6d[_0x4570eb(0x18a)]+_0x4570eb(0x162)+_0x30da6d['time']+_0x4570eb(0x169)+_0x30da6d[_0x4570eb(0x165)]+_0x4570eb(0x16b))[_0x4570eb(0x198)]('');_0x155731['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>'+(_0x3dfe72+0x1)+'.\x20'+(_0x51882b[_0x4570eb(0x174)]||_0x4570eb(0x197))+'</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cve-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Vendor:\x20'+(_0x51882b[_0x4570eb(0x19e)]?'<img\x20src=\x22'+_0x51882b[_0x4570eb(0x19e)][0x0][0x1]+'\x22\x20alt=\x22Vendor\x22\x20style=\x22height:\x2020px;\x22>':_0x4570eb(0x160))+_0x4570eb(0x19a)+(_0x51882b[_0x4570eb(0x1a5)]?new Date(_0x51882b[_0x4570eb(0x1a5)])[_0x4570eb(0x19f)]():_0x4570eb(0x192))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Modified:\x20'+(_0x51882b[_0x4570eb(0x16d)]?new Date(_0x51882b[_0x4570eb(0x16d)])['toLocaleDateString']():'N/A')+_0x4570eb(0x1a6)+(_0x51882b[_0x4570eb(0x16f)]||0x0)+'\x20'+_0x26e8a9(_0x51882b['v_score'])+_0x4570eb(0x190)+(_0x51882b[_0x4570eb(0x166)]||0x0)+'\x20'+_0x26e8a9(_0x51882b[_0x4570eb(0x166)])+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>CVSS:\x20'+(_0x51882b[_0x4570eb(0x1a4)]||0x0)+'\x20'+_0x26e8a9(_0x51882b[_0x4570eb(0x1a4)])+_0x4570eb(0x179)+(_0x51882b['description']||_0x4570eb(0x170))+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22social-media\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Total\x20Audience:\x20'+_0x51882b[_0x4570eb(0x1ae)]+_0x4570eb(0x196)+(_0x51882b[_0x4570eb(0x1ac)]||0x0)+_0x4570eb(0x1a1)+(_0x51882b[_0x4570eb(0x17b)]||0x0)+_0x4570eb(0x1aa)+_0x14192d+_0x4570eb(0x18b),_0x316f36[_0x4570eb(0x1a0)](_0x155731);});}function _0x1bde(){const _0x51e502=['getElementById','innerHTML','base_score','published_datetime','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>V-Score:\x20','sort','left','5WEKQyg','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tweets\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>Social\x20Media\x20Posts:</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','2077296PxzixS','post_count','posts','totalAudience','Unknown','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22width:\x20','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tweet-meta\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🕒\x20','1211uNisac','div','date','e_score','</strong>\x20<span>@','#ff5733','\x20-\x20','11760UOCxwS','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','157630iBKyMi','last_modified_datetime','12KuJmWq','v_score','No\x20description\x20available.','created_datetime','translateX(-','json','cve','18uvDYjr','%;\x20background-color:\x20','forEach','author','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cve-description\x22>','scrollWidth','reposts','username','audience','568816tPpehc','28eOlqTo','https://pirqfxayczkszwoyltgs.supabase.co/rest/v1/social_media_top_20_cve_day?select=*','Bearer\x20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpcnFmeGF5Y3prc3p3b3lsdGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwODIxMzksImV4cCI6MTk5NzY1ODEzOX0.6mcYujfaOoulklwDoO39hn2mWSBO4hhZBiNki1l8E0I','px)','cve-cards-container','9891ZgIxPk','addEventListener','max','style','change','1027150KTKHIR','post','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',';\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Failed\x20to\x20fetch\x20data','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpcnFmeGF5Y3prc3p3b3lsdGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwODIxMzksImV4cCI6MTk5NzY1ODEzOX0.6mcYujfaOoulklwDoO39hn2mWSBO4hhZBiNki1l8E0I','transform','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>E-Score:\x20','reduce','N/A','2-digit','createElement','Error\x20fetching\x20CVE\x20data:','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Posts:\x20','Unknown\x20CVE','join','#00d8ff','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Published:\x20','min','ranking','3215773uvDddd','vendor_logo','toLocaleDateString','appendChild','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Reposts:\x20'];_0x1bde=function(){return _0x51e502;};return _0x1bde();}function scrollCarousel(_0x5252f9){const _0x1df1bb=_0x19ca55,_0x30db74=document['getElementById'](_0x1df1bb(0x183)),_0x44db52=0x12c,_0x52fd9=0x4,_0x3d7b6a=_0x44db52*_0x52fd9;_0x5252f9===_0x1df1bb(0x1a8)?scrollPosition=Math[_0x1df1bb(0x186)](scrollPosition-_0x3d7b6a,0x0):scrollPosition=Math[_0x1df1bb(0x19b)](scrollPosition+_0x3d7b6a,_0x30db74[_0x1df1bb(0x17a)]-_0x3d7b6a),_0x30db74[_0x1df1bb(0x187)][_0x1df1bb(0x18f)]=_0x1df1bb(0x172)+scrollPosition+_0x1df1bb(0x182);}document[_0x19ca55(0x1a2)](_0x19ca55(0x19c))[_0x19ca55(0x185)](_0x19ca55(0x188),fetchCVEData),fetchCVEData();