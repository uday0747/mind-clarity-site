export default async ({project, text, rect, frame, media, icon, path}) => {
  const p = await project({dir:"/home/user/mindclarity/project",size:"1080x1920",fps:24,background:"#F5F0E5"});
  const voice = await p.add("/home/user/mindclarity/narration-normalized.wav");
  const pond = await p.add("/home/user/mindclarity/pond.webp");
  p.cut(voice,{at:0,from:0,dur:54.099563});
  const C={ink:"#183B34",paper:"#F5F0E5",gold:"#AF8543",muted:"#64776B",pale:"#E2E8DD",white:"#FFFCF4"};
  const T=(s,x,y,w,h,size=56,color=C.ink,font="DM Sans",weight=400)=>text(s,{x,y,width:w,height:h,fontFamily:font,fontSize:size,fontWeight:weight,color,lineHeight:1.18});
  const R=(x,y,w,h,fill=C.white,radius=24)=>rect({x,y,width:w,height:h,fill,radius});
  const entrance={enter:{from:{y:20,opacity:0},duration:.5},exit:{to:{opacity:0},duration:.22,anchor:"end"}};
  const scene=(name,at,end,children)=>p.compose(frame({width:1080,height:1920,layout:"none",motion:entrance},children),{name,at,dur:end-at});
  const header=(label="A MOMENT OF CLARITY")=>[
    T("MIND CLARITY",100,130,700,50,29,C.ink,"DM Sans",700),
    R(100,215,64,3,C.gold,0),
    T(label,100,252,820,55,23,C.muted,"DM Sans",700)
  ];
  const person=(x,y)=>[
    R(x,y,170,220,C.pale,85),
    icon("user-round",{x:x+35,y:y+25,size:100,color:C.ink,strokeWidth:1.2}),
    R(x+71,y+147,28,28,C.gold,14)
  ];
  const picture=(y=555,h=660)=>frame({x:100,y,width:820,height:h,layout:"none",clip:true,radius:32},[
    media({file:pond,x:0,y:0,width:820,height:h,fit:"cover",animate:[{property:"scale",from:1,to:1.035,duration:3.5,easing:"linear"}]})
  ]);
  scene("Missed promise",0,5.2,[
    ...header("01 / A MISSED PROMISE"),
    T("One missed call.",100,355,800,180,80,C.ink,"Playfair Display"),
    R(125,655,700,420,C.white,32),
    icon("calendar-clock",{x:185,y:715,size:180,color:C.muted,strokeWidth:1.2}),
    icon("phone-missed",{x:185,y:940,size:90,color:C.gold,strokeWidth:1.5}),
    T("CALL TODAY",410,700,340,60,31,C.muted,"DM Sans",700),
    T("A promise\nleft unmet.",410,790,340,170,44),
    T("THE THOUGHT THAT FOLLOWS",100,1170,820,45,23,C.muted,"DM Sans",700),
    T("“I am a failure.”",100,1240,840,100,66,C.ink,"Playfair Display")
  ]);
  scene("Attribution",5.2,9.6,[
    ...header("A SPIRITUAL UNDERSTANDING"),
    T("A different way\nto see the moment.",100,360,840,240,70,C.ink,"Playfair Display"),
    picture(690,620),
    T("From Uday Kumar’s Mind Clarity",100,1340,820,70,30)
  ]);
  scene("Creator and experience",9.6,16.1,[
    ...header("THE CREATOR & THE GAME"),
    T("We are\nthe Creator.",100,370,820,250,88,C.ink,"Playfair Display"),
    T("A game of experiences",100,730,820,70,38,C.muted),
    path({x:140,y:890,width:680,height:330,d:"M 0 250 L 160 250 L 160 130 L 360 130 L 360 30 L 680 30",stroke:{color:C.gold,width:5,cap:"round"}}),
    ...person(120,1070),
    ...person(650,815),
    R(455,967,28,28,C.gold,14),
    T("We created it. We entered it.",100,1360,830,85,37)
  ]);
  scene("Within the design",16.1,22.2,[
    ...header("LIFE FROM WITHIN"),
    T("Inside the game.",100,380,830,150,77,C.ink,"Playfair Display"),
    rect({x:145,y:690,width:710,height:530,fill:C.white,radius:36,strokeColor:C.gold,strokeWidth:3}),
    ...person(415,830),
    T("THE DESIGN",195,740,550,50,26,C.muted,"DM Sans",700),
    T("Not changed from inside",100,1320,830,130,42)
  ]);
  scene("Shared source",22.2,26.6,[
    ...header("SHARED IDENTITY"),
    T("One shared source.\nEvery life.",100,370,850,260,75,C.ink,"Playfair Display"),
    path({x:310,y:1025,width:420,height:10,d:"M 0 0 L 420 0",stroke:{color:C.gold,width:4,cap:"round"}}),
    ...person(210,865),...person(650,865),
    T("Creator",100,1260,830,90,51,C.ink,"Playfair Display")
  ]);
  scene("Experience not whole identity",26.6,32.3,[
    ...header("THE ROLE IS NOT THE WHOLE"),
    T("A mistake happened.",100,355,850,160,72,C.ink,"Playfair Display"),
    R(140,675,710,580,C.pale,38),
    icon("user-round",{x:370,y:735,size:250,color:C.ink,strokeWidth:1}),
    R(495,1000,290,150,C.white,24),
    icon("phone-missed",{x:530,y:1030,size:82,color:C.gold,strokeWidth:1.5}),
    T("MISSED",635,1050,160,50,22,C.muted,"DM Sans",700),
    T("It is not all of who you are.",100,1350,820,120,42)
  ]);
  scene("Cannot undo",32.3,34.7,[
    ...header("THE SCENE HAS HAPPENED"),
    T("You cannot\nundo that scene.",100,380,850,300,75,C.ink,"Playfair Display"),
    icon("calendar-clock",{x:330,y:845,size:310,color:C.muted,strokeWidth:1}),
    T("What has happened",100,1350,820,90,38,C.muted)
  ]);
  scene("Care within experience",34.7,40.3,[
    ...header("PARTICIPATION CONTINUES"),
    T("Care is still\npart of the game.",100,360,850,260,76,C.ink,"Playfair Display"),
    R(130,770,720,190,C.white,30),
    T("“I’m sorry I missed our call.”",175,825,640,100,39),
    R(130,1010,720,240,C.pale,30),
    icon("calendar-plus",{x:175,y:1070,size:110,color:C.ink,strokeWidth:1.3}),
    T("Make a new\narrangement.",335,1070,450,150,42),
    T("An apology. A practical response.",100,1360,830,100,34,C.muted)
  ]);
  scene("Care for the other",40.3,45.9,[
    ...header("THE SAME CREATOR"),
    T("Care for the\nperson affected.",100,370,850,270,78,C.ink,"Playfair Display"),
    path({x:300,y:1030,width:430,height:5,d:"M 0 0 L 430 0",stroke:{color:C.gold,width:4,cap:"round"}}),
    ...person(200,860),...person(650,860),
    T("Shared identity. Real care.",100,1320,850,150,45,C.ink,"Playfair Display")
  ]);
  scene("Reflection",45.9,50.14,[
    ...header("A QUESTION TO SIT WITH"),
    T("Acknowledge\nthe mistake.",100,385,840,290,85,C.ink,"Playfair Display"),
    R(100,780,80,3,C.gold,0),
    T("Must it become\nyour whole identity?",100,885,840,330,69,C.ink,"Playfair Display")
  ]);
  scene("Quiet invitation",50.14,54.125,[
    ...header("PAUSE • REMEMBER • NOTICE"),
    T("Notice honestly.",100,355,850,170,77,C.ink,"Playfair Display"),
    picture(595,655),
    T("Explore freely",100,1330,830,65,31,C.muted),
    T("mindclarity.co.in",100,1410,830,90,48,C.ink,"DM Sans",700)
  ]);
  // A calm, uninterrupted lower field leaves space for speech captions.
  p.compose(rect({x:0,y:1530,width:1080,height:390,fill:"#183B34"}),{at:0,dur:54.125,name:"Caption field"});
  p.compose(text("Uday Kumar’s spiritual reflections",{x:100,y:1830,width:820,height:42,fontFamily:"DM Sans",fontSize:22,color:"#B8C8B9"}),{at:0,dur:54.125,name:"Attribution footer"});
  for (const t of [1,7,11,19,24,29,36,43,47,52]) await p.frame(t,"renders/preview-"+t+".png");
  if(process.env.RENDER_VIDEO === "1") await p.render("renders/clean.mp4",{depth:8,bitrate:6000000,shards:4,concurrency:2});
};
