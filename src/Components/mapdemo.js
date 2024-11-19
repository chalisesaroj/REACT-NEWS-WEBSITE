import React,{useState,useEffect} from "react";
import "./News.css";
function MapDemo(){
    const[title,setTitle]=useState("");
    useEffect(()=>{
document.title="Saroj News";
    },[])
const responsejson={
    "status": "ok",
    "totalResults": 5824,
    "articles": [
    {
    "source": {
    "id": null,
    "name": "Page Six"
    },
    "author": "Bernie Zilio",
    "title": "Fans react after single Kim Kardashian hangs out with $30K Tesla robot: ‘Low-maintenance boyfriend’",
    "description": "The billionaire reality star-turned-mogul took to both X and her Instagram Story to share a video of her interacting with a Tesla Optimus Robot.",
    "url": "https://pagesix.com/2024/11/18/celebrity-news/fans-react-after-single-kim-kardashian-hangs-out-with-tesla-robot/",
    "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/11/93914463.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2024-11-19T01:54:56Z",
    "content": "Kim Kardashian seems to have picked up a “low-maintenance boyfriend” with a hefty price tag.\r\nThe billionaire reality star-turned-mogul took to both X and her Instagram Story on Monday to share a vid… [+3524 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Trump taps ex-lawmaker and Fox Business host for transportation secretary",
    "description": "US president-elect says former Wisconsin Congressman Sean Duffy will usher in a 'golden age of travel'.",
    "url": "https://www.aljazeera.com/economy/2024/11/19/trump-taps-ex-lawmaker-and-fox-business-host-for-transportation-secretary",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24323829416285-1731976216.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-19T01:53:44Z",
    "content": "United States President-elect Donald Trump has named a former congressman-turned-Fox Business host as his pick for transportation secretary.\r\nIn a statement announcing the nomination on Monday, Trump… [+2189 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Trump picks Sean Duffy, TV host and former lawmaker, for transportation",
    "description": "President-elect Donald Trump says former Wisconsin Rep. Sean Duffy is his choice for transportation secretary as he continues to roll out picks for his Cabinet.",
    "url": "https://www.cbsnews.com/news/sean-duffy-trump-transportation-secretary/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/11/19/e8f2bdd5-2e3a-4ef4-b9cf-183e18311b11/thumbnail/1200x630g2/964c22c6125a44b6dd7b1d7ab12c6749/ap24323829416285.jpg?v=6125856b135c6847bbc622c9704e0334",
    "publishedAt": "2024-11-19T01:49:42Z",
    "content": "President-elect Donald Trump said Monday he is naming former Wisconsin Rep. Sean Duffy as his nominee for transportation secretary, as he continues to roll out picks for his Cabinet.\r\nDuffy is a form… [+4926 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "CNBC Daily Open: Tesla makes up for Nvidia’s dip",
    "description": "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what you see? You can subscribe here.\nIndividual stocks sway indexe…",
    "url": "https://biztoc.com/x/3d3df8a5f1213f1d",
    "urlToImage": "https://biztoc.com/cdn/3d3df8a5f1213f1d_s.webp",
    "publishedAt": "2024-11-19T01:41:33Z",
    "content": "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+145 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "VOA News"
    },
    "author": "webdesk@voanews.com (Rob Garver)",
    "title": "‘Department of Government Efficiency’ faces a daunting task",
    "description": "When President-elect Donald Trump takes office for the second time in January, two of his highest-profile supporters will be handed the keys to a new operation designed to slash government spending and improve its performance.\n\n\nThe Department of Government E…",
    "url": "https://www.voanews.com/a/department-of-government-efficiency-faces-a-daunting-task/7868816.html",
    "urlToImage": "https://gdb.voanews.com/E6E03977-D237-4060-865B-B1DE2686E49E.jpg",
    "publishedAt": "2024-11-19T01:40:36Z",
    "content": "When President-elect Donald Trump takes office for the second time in January, two of his highest-profile supporters will be handed the keys to a new operation designed to slash government spending a… [+5732 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "CNBC Daily Open: Tesla makes up for Nvidia’s dip",
    "description": "Tesla helped the S&P achieve its first winning day in three and the Nasdaq break its four-day losing streak, despite Nvidia dropping 1.3%.",
    "url": "https://www.cnbc.com/2024/11/19/cnbc-daily-open-tesla-makes-up-for-nvidias-dip-.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108063483-1731626915356-gettyimages-2184830349-bb1_5651_dcx6e5me.jpeg?v=1731627073&w=1920&h=1080",
    "publishedAt": "2024-11-19T01:36:23Z",
    "content": "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+3358 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Journal"
    },
    "author": "AFP",
    "title": "Can the Trump-Musk ‘bromance’ last?",
    "description": "The world’s richest man, Elon Musk, has been an ever-present sidekick for President-elect Donald Trump since the US election at the start of the month. “I can’t get him out of here,” Trump joked about Musk at his Mar-a-Lago resort in Florida last Thursday. “I…",
    "url": "https://www.digitaljournal.com/world/can-the-trump-musk-bromance-last/article",
    "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/11/f245cd02b604638f05f0ecde1240c9fd716d91df.jpg",
    "publishedAt": "2024-11-19T01:27:21Z",
    "content": "Trump and Musk watched a UFC bout in New York together at the weekend - Copyright KCNA VIA KNS/AFP STR\r\nThe world’s richest man, Elon Musk, has been an ever-present sidekick for President-elect Donal… [+4511 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "2024-11-19T01:27:12Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Ibtimes.com.au"
    },
    "author": "Adam PLOWRIGHT and Alex PIGMAN",
    "title": "Can The Trump-Musk 'Bromance' Last?",
    "description": "The world's richest man, Elon Musk, has been an ever-present sidekick for President-elect Donald Trump since the US election at the start of the month.",
    "url": "https://www.ibtimes.com.au/can-trump-musk-bromance-last-1853581",
    "urlToImage": "https://d.ibtimes.com.au/en/full/1865836/trump-musk-watched-ufc-bout-new-york-together-weekend.jpg",
    "publishedAt": "2024-11-19T01:18:28Z",
    "content": "The world's richest man, Elon Musk, has been an ever-present sidekick for President-elect Donald Trump since the US election at the start of the month.\r\n\"I can't get him out of here,\" Trump joked abo… [+4283 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "daily mail",
    "title": "Elon Musk blasts 'mole' in dinner blow-up over Cabinet at Mar-a-Lago as Trump's golden boy is targeted",
    "description": "For a while, Donald Trump's transition kept up a record-setting pace with top Cabinet picks being named against a backdrop of calm consensus. But the knives are now out, with advisers leaking against each other to the press amid the scramble to parachute alli…",
    "url": "https://freerepublic.com/focus/f-chat/4279328/posts",
    "urlToImage": null,
    "publishedAt": "2024-11-19T01:17:20Z",
    "content": "Skip to comments.\r\nElon Musk blasts 'mole' in dinner blow-up over Cabinet at Mar-a-Lago as Trump's golden boy is targeteddaily mail ^\r\n | 11/18/2024\r\n | ROB CRILLY, CHIEF U.S. POLITICAL CORRESPONDENT… [+4483 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DW (English)"
    },
    "author": "Deutsche Welle",
    "title": "Germany: Police remove Tesla protesters from forest camp",
    "description": "Authorities say those protesting the US carmaker's expansion plans will be allowed to return after the area is combed for WWII bombs. Environmentalists have fought expansion for months and call authorities dishonest. On Monday, police in Grünheide, Germany, b…",
    "url": "https://www.dw.com/en/germany-police-remove-tesla-protesters-from-forest-camp/a-70815588",
    "urlToImage": "https://static.dw.com/image/70815569_6.jpg",
    "publishedAt": "2024-11-19T01:17:00Z",
    "content": "On Monday, police in Grünheide, Germany, began the task of removing environmental activists from a forest encampment near the site of Tesla's new gigafactory outside Berlin.\r\nProtesters are against f… [+2130 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Bloomberg",
    "title": "Asian stocks rise, following gain in US equities",
    "description": "Benchmark indexes advanced in Japan, South Korea and Australia, while futures climbed in Hong Kong. The Nasdaq 100 outperformed Monday after its longest rout since January, with Tesla Inc. rising 5.6% on a news report Trump’s transition team have told adviser…",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/asian-stocks-rise-following-gain-in-us-equities/articleshow/115432499.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-115432482,width-1200,height-630,imgsize-86136,overlay-etmarkets/articleshow.jpg",
    "publishedAt": "2024-11-19T01:11:40Z",
    "content": "Asian equities gained, following Wall Street stocks higher, after Treasuries halted a selloff that had pushed 10-year yields as high as 4.5%. Traders are closely watching any news around President-el… [+2882 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newser"
    },
    "author": "Bob Cronin",
    "title": "Transportation Job Goes to Co-Host on Fox Business",
    "description": "President-elect Trump has returned to television for his latest Cabinet selection, picking Sean Duffy to run the Department of Transportation. Duffy was a Republican member of Congress from 2011 to 2019, representing a Wisconsin district, CNN reports. \"Sean w…",
    "url": "https://www.newser.com/story/359707/trump-picks-sean-duffy-for-transportation.html",
    "urlToImage": "https://img1-azrcdn.newser.com/image/1573474-12-20241118192947.jpeg",
    "publishedAt": "2024-11-19T01:00:00Z",
    "content": "President-elect Trump has returned to television for his latest Cabinet selection, picking Sean Duffy to run the Department of Transportation. Duffy was a Republican member of Congress from 2011 to 2… [+1501 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "Jim Cramer says 'nothing truly dulls the case' for owning Tesla stock",
    "description": "CNBC's Jim Cramer made the case for owning stock of Tesla.",
    "url": "https://www.cnbc.com/2024/11/18/jim-cramer-says-nothing-truly-dulls-the-case-for-owning-tesla-stock.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108034760-1726508931587-gettyimages-2172427353-dsc_0966_6y0pttyw.jpeg?v=1731957101&w=1920&h=1080",
    "publishedAt": "2024-11-19T00:58:41Z",
    "content": "CNBC's Jim Cramer made the case for owning Tesla stock, saying it's worthwhile not because President-elect Donald Trump reportedly wants to relax U.S. self-driving rules, but because of CEO Elon Musk… [+2025 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "‘The Golden Path Is Within Reach,’ Says Daniel Ives About Tesla Stock - TipRanks",
    "description": "‘The Golden Path Is Within Reach,’ Says Daniel Ives About Tesla StockTipRanks Tesla stock pops after report Trump wants to relax U.S. self-driving rulesCNBC For Tesla Stock, Trump Giveth and Trump Taketh AwayBarron's Trump Is Reportedly Planning to Relax Rule…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175497863",
    "urlToImage": null,
    "publishedAt": "2024-11-19T00:52:39Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "Digital Journal"
    },
    "author": "Jon Stojan",
    "title": "Innovation and government support in the US: opportunities for businesses of all sizes",
    "description": "From grants and tax incentives to a wide range of resources, the government delivers more than promises—it provides tangible assistance to transform big ideas into reality. \nGovernment support serves as a crucial springboard for businesses striving for long-t…",
    "url": "https://www.digitaljournal.com/business/innovation-and-government-support-in-the-us-opportunities-for-businesses-of-all-sizes/article",
    "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/11/Use-this-Canva-template-to-resize-images-23.png",
    "publishedAt": "2024-11-19T00:45:56Z",
    "content": "Photo courtesy of Marvin Meyer on Unsplash\r\nOpinions expressed by Digital Journal contributors are their own\r\nIn an age when innovation shapes every industry, the US government offers solid partnersh… [+7214 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "washingtonpost.com",
    "title": "Trump picks former congressman Sean Duffy to lead Transportation Dept",
    "description": "The transportation secretary will be a key player in the relationship between the government and Elon Musk, CEO of SpaceX and Tesla.",
    "url": "https://biztoc.com/x/92ecc8cf2d3d34dd",
    "urlToImage": "https://biztoc.com/cdn/807/og.png",
    "publishedAt": "2024-11-19T00:13:25Z",
    "content": "The transportation secretary will be a key player in the relationship between the government and Elon Musk, CEO of SpaceX and Tesla.\r\nThis story appeared on washingtonpost.com, 2024-11-18 23:57:48."
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "thedailyupside.com",
    "title": "Tesla Rides Higher on Self-Driving Regulation Report",
    "description": "Tesla Rides Higher on Self-Driving Regulation Report\nThe Trump White House may usher in a big loosening of the rules around cars that can operate without human drivers.\nSign up for smart news, insights, and analysis on the biggest financial stories of the day…",
    "url": "https://biztoc.com/x/414c72fcc0c4a017",
    "urlToImage": "https://biztoc.com/cdn/807/og.png",
    "publishedAt": "2024-11-19T00:13:05Z",
    "content": "Tesla Rides Higher on Self-Driving Regulation ReportThe Trump White House may usher in a big loosening of the rules around cars that can operate without human drivers.Sign up for smart news, insights… [+149 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Decrypt"
    },
    "author": "Liz Napolitano",
    "title": "Trump's Pro-Crypto Picks, Here's Who's Holding Bitcoin",
    "description": "These are the proposed members of Trump’s cabinet and inner circle who support crypto and have previously had a stake in it.",
    "url": "https://decrypt.co/292228/trumps-pro-crypto-picks-heres-whos-holding-bitcoin",
    "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/06/Donald-Trump_shutterstock_2429741207-gID_7.jpg",
    "publishedAt": "2024-11-19T00:10:53Z",
    "content": "President-elect Donald Trumps incoming administration includes a mix of GOP politicians, lawyers, and business leaders.\r\nWhile many of his picks still require Senate approval, several stand out for a… [+5660 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Benzinga"
    },
    "author": "Upwallstreet",
    "title": "Short Squeezes With Big Promises",
    "description": "Short squeezes have been making and breaking investors for a century. One of the greatest short squeezes in history started on a SubReddit, where hundreds of thousands of retail investors drove the price of GameStop (NYSE: GME) shares up to an all-time high.",
    "url": "https://www.benzinga.com/markets/penny-stocks/24/11/42050023/short-squeezes-with-big-promises",
    "urlToImage": "https://cdn.benzinga.com/files/market-share-competitor-excellent-growing-with-stocks.jpg?width=1200&height=800&fit=crop",
    "publishedAt": "2024-11-19T00:02:00Z",
    "content": "Short squeezes have been making and breaking investors for a century. One of the greatest short squeezes in history started on a SubReddit, where hundreds of thousands of retail investors drove the p… [+4613 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ifixit.com"
    },
    "author": "Charlie Sorrel",
    "title": "Why Your Laptop Batteries Are Still So Tiny",
    "description": "No matter how fast powerful laptops get, and no matter how ridiculously big and beefy a portable gaming rig might be, their batteries will never be any bigger than they…",
    "url": "https://www.ifixit.com/News/105560/why-your-laptop-batteries-are-still-so-tiny",
    "urlToImage": "https://valkyrie.cdn.ifixit.com/media/2020/04/02134817/macbook_battery_video_3x2.jpg",
    "publishedAt": "2024-11-19T00:00:32Z",
    "content": "No matter how fast powerful laptops get, and no matter how ridiculously big and beefy a portable gaming rig might be, their batteries will never be any bigger than they are today. Why? You can thank … [+7542 chars]"
    },
    {
    "source": {
    "id": "financial-post",
    "name": "Financial Post"
    },
    "author": "GlobeNewswire",
    "title": "Purpose Investments Inc. Announces November 2024 Distributions",
    "description": "TORONTO, Nov. 18, 2024 (GLOBE NEWSWIRE) — Purpose Investments Inc. (“Purpose”) is pleased to announce distributions for the month of November 2024 for its open-end exchange-traded funds and closed-end funds (“the Funds”). The ex-distribution date for all Open…",
    "url": "https://financialpost.com/globe-newswire/purpose-investments-inc-announces-november-2024-distributions",
    "urlToImage": null,
    "publishedAt": "2024-11-18T23:56:53Z",
    "content": "Author of the article:\r\nArticle content\r\nTORONTO, Nov. 18, 2024 (GLOBE NEWSWIRE) Purpose Investments Inc. (Purpose) is pleased to announce distributions for the month of November 2024 for its open-en… [+12610 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Purpose Investments Inc.",
    "title": "Purpose Investments Inc. Announces November 2024 Distributions",
    "description": "TORONTO, Nov. 18, 2024 (GLOBE NEWSWIRE) -- Purpose Investments Inc. (“Purpose”) is pleased to announce distributions for the month of November 2024 for its open-end exchange-traded funds and closed-end funds (“the Funds”).",
    "url": "https://www.globenewswire.com/news-release/2024/11/18/2983212/0/en/Purpose-Investments-Inc-Announces-November-2024-Distributions.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/a28192cb-6294-4424-8c24-646fee2c81cd",
    "publishedAt": "2024-11-18T23:56:00Z",
    "content": "TORONTO, Nov. 18, 2024 (GLOBE NEWSWIRE) -- Purpose Investments Inc. (Purpose) is pleased to announce distributions for the month of November 2024 for its open-end exchange-traded funds and closed-end… [+10138 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Joel Rose",
    "title": "Trump taps Sean Duffy, Fox host and former Congressman, for Transportation Secretary",
    "description": "President-elect Trump has picked Sean Duffy, a Fox Business host and former Republican Congressman from Wisconsin, to head the Department of Transportation.",
    "url": "https://www.npr.org/2024/11/18/nx-s1-5188388/dot-transportation-secretary-sean-duffy-trump",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4199x2362+391+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F67%2F18%2F0da5f4f04d8c87429bc793562c5d%2Fgettyimages-1052999718.jpg",
    "publishedAt": "2024-11-18T23:55:06Z",
    "content": "WASHINGTON President-elect Trump has chosen Sean Duffy, a Fox News contributor and former GOP Congressman, to head the Department of Transportation\r\n.\r\nIn announcing the pick, Trump praised Duffy as … [+3134 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Umar Shakir",
    "title": "Tesla’s first 500kW V4 Superchargers are coming next year",
    "description": "Tesla will launch V4 Supercharger cabinets with 1000V charging support in 2025, so Cybertrucks and other compatible EVs can charge up at rates of up to 500kW.",
    "url": "https://www.theverge.com/2024/11/18/24300040/tesla-500kw-v4-supercharger-cabinets-first-2025",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/1E7FRnBNVcrYCz9ujYUfXRJSGkQ=/0x0:4303x2869/1200x628/filters:focal(2152x1435:2153x1436)/cdn.vox-cdn.com/uploads/chorus_asset/file/25740556/Screenshot_2024_11_18_at_6.20.47_PM.jpeg",
    "publishedAt": "2024-11-18T23:54:04Z",
    "content": "Teslas first 500kW V4 Superchargers are coming next year\r\nTeslas first 500kW V4 Superchargers are coming next year\r\n / The new V4 cabinets with updated electronics are coming, which include 1.2MW cha… [+1358 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Trump Admin Reportedly Wants to Unleash Driverless Cars on America - Gizmodo",
    "description": "Trump Admin Reportedly Wants to Unleash Driverless Cars on AmericaGizmodo Tesla stock pops after report Trump wants to relax U.S. self-driving rulesCNBC Trump Is Reportedly Planning to Relax Rules for Self-Driving CarsCar and Driver For Tesla Stock, Trump Giv…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175497523",
    "urlToImage": null,
    "publishedAt": "2024-11-18T23:53:06Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "The Daily Caller"
    },
    "author": "Leena Nasir",
    "title": "Kim Kardashian’s Self-Indulgence Shines Through In Her New Ridiculous Purchase",
    "description": "Kim Kardashian reminded the world just how selfish and tone deaf she can be by getting a Tesla robot to be her new bestie.",
    "url": "https://dailycaller.com/2024/11/18/kim-kardashian-self-indulgent-tone-deaf-tesla-robot-friendship/",
    "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2024/11/GettyImages-1960865197-e1731973090337.jpg",
    "publishedAt": "2024-11-18T23:51:09Z",
    "content": "Readers,\r\nInstead of sucking up to the political and corporate powers that dominate America, The Daily Caller is fighting for you our readers. We humbly ask you to consider joining us in this fight.\r… [+3565 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": null,
    "title": "Kim Kardashian Shows Off Massive Diamond Rings With New Tesla Robot",
    "description": "Kim Kardashian is keeping up with the finer things.\nCase in point: Her recent encounter with the latest version of Tesla's Optimus robot. The Kardashians star not only got a private meeting with...",
    "url": "https://www.eonline.com/news/1410121/kim-kardashian-shows-off-massive-diamond-rings-alongside-her-new-tesla-humanoid-robot",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2024623/cr_1200x1200-240723120558-323105539_140891051850220_6186054879475247571_n.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2024-11-18T23:51:04Z",
    "content": "Kim Kardashian is keeping up with the finer things.\r\nCase in point: Her recent encounter with the latest version of Tesla's Optimus robot. The Kardashians star not only got a private meeting with the… [+691 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNA"
    },
    "author": null,
    "title": "Trump may be planning to attend SpaceX launch in Texas",
    "description": "WEST PALM BEACH, Florida : President-elect Donald Trump may be planning to attend a SpaceX rocket launch in person in Texas on Tuesday, another sign of his close ties with the company's billionaire founder and CEO Elon Musk.The Federal Aviation Administration…",
    "url": "https://www.channelnewsasia.com/business/trump-may-be-planning-attend-spacex-launch-texas-4755736",
    "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--YKHCUkXM--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2024-11-19t000042z_3_lynxmpekah0vc_rtroptp_3_usa-trump-space.jpg?itok=tyKKb5F0",
    "publishedAt": "2024-11-18T23:46:11Z",
    "content": "WEST PALM BEACH, Florida : President-elect Donald Trump may be planning to attend a SpaceX rocket launch in person in Texas on Tuesday, another sign of his close ties with the company's billionaire f… [+1589 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Steve Holland and Joey Roulette",
    "title": "Trump may be planning to attend SpaceX launch in Texas",
    "description": "President-elect Donald Trump may be planning to attend a SpaceX rocket launch in person in Texas on Tuesday, another sign of his close ties with the...",
    "url": "https://www.yahoo.com/news/trump-may-planning-attend-spacex-234611182.html",
    "urlToImage": "https://media.zenfs.com/en/reuters.com/511396d2ed6f32dd32cb6445ba1c9a4a",
    "publishedAt": "2024-11-18T23:46:11Z",
    "content": "By Steve Holland and Joey Roulette\r\nWEST PALM BEACH, Florida (Reuters) - President-elect Donald Trump may be planning to attend a SpaceX rocket launch in person in Texas on Tuesday, another sign of h… [+1710 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "US Stocks Rebound, Tesla Rallies, Bitcoin Soars Above $92,000: What's Driving Markets Monday?",
    "description": "Risk sentiment edged higher on Monday, rebounding after two consecutive losing sessions and the worst week for the U.S. stock market since early September, as pressures from dollar and Treasury yields faded.\nAll 11 sectors of the S&P 500 traded in positive te…",
    "url": "https://biztoc.com/x/3e6e5a80cbadc2de",
    "urlToImage": "https://biztoc.com/cdn/3e6e5a80cbadc2de_s.webp",
    "publishedAt": "2024-11-18T23:39:51Z",
    "content": "Risk sentiment edged higher on Monday, rebounding after two consecutive losing sessions and the worst week for the U.S. stock market since early September, as pressures from dollar and Treasury yield… [+150 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "For Tesla Stock, Trump Giveth and Trump Taketh Away - Barron's",
    "description": "For Tesla Stock, Trump Giveth and Trump Taketh AwayBarron's Tesla stock pops after report Trump wants to relax U.S. self-driving rulesCNBC Trump Is Reportedly Planning to Relax Rules for Self-Driving CarsCar and Driver Tesla Stock Rises 6%: What We Know About…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175497417",
    "urlToImage": null,
    "publishedAt": "2024-11-18T23:32:43Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "Thegatewaypundit.com"
    },
    "author": "Jim Hoft",
    "title": "REPORT: Elon Musk and Trump Legal Adviser Epshteyn Have Major Blowup at Mar-a-Lago During Dinner – Included Accusations of Leaking Details to the Press",
    "description": "The Gateway Pundit has reported several times now on Trump Transition Team insiders leaking information to the press – particularly on Attorney General nominee Matt Gaetz and Defense Secretary nominee Pete Hegseth.\nThe post REPORT: Elon Musk and Trump Legal A…",
    "url": "https://www.thegatewaypundit.com/2024/11/report-elon-musk-trump-legal-adviser-epshteyn-have/",
    "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/2024/08/trump-elon-x-.jpg",
    "publishedAt": "2024-11-18T23:30:20Z",
    "content": "Elon Musk tells Trump civilization is at risk. And that is why he supports him.\r\nThe Gateway Pundit has reported several times now on Trump Transition Team insiders leaking information to the press –… [+2631 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "Kim Kardashian posts video testing Tesla Optimus AI robot and Cybercab: ‘There’s no driver?’",
    "description": "Kardashian posted a video playing rock-paper-scissors with Optimus, a human-sized AI robot that Musk has promised “can babysit your kids” or help around the house. Read More",
    "url": "https://biztoc.com/x/57e46f9ac98ceb41",
    "urlToImage": "https://biztoc.com/cdn/57e46f9ac98ceb41_s.webp",
    "publishedAt": "2024-11-18T23:29:03Z",
    "content": "Kardashian posted a video playing rock-paper-scissors with Optimus, a human-sized AI robot that Musk has promised can babysit your kids or help around the house. Read More\r\nThis story appeared on for… [+29 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "thestreet.com",
    "title": "Trump's Tesla loophole can spark a new wave of robotaxi backlash",
    "description": "Lighting firecrackers are one of the unique cultural keystones that signify the celebration of the Lunar New Year, but during celebrations around the holiday earlier this year in one of the United States' oldest Chinatowns, things got ugly for something not c…",
    "url": "https://biztoc.com/x/6042f306872934e4",
    "urlToImage": "https://biztoc.com/cdn/6042f306872934e4_s.webp",
    "publishedAt": "2024-11-18T23:17:30Z",
    "content": "Lighting firecrackers are one of the unique cultural keystones that signify the celebration of the Lunar New Year, but during celebrations around the holiday earlier this year in one of the United St… [+146 chars]"
    },
    {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Brooke Seipel",
    "title": "Kim Kardashian posts video testing Tesla Optimus AI robot and Cybercab: ‘There’s no driver?’",
    "description": "Kardashian posted a video playing rock-paper-scissors with Optimus, a human-sized AI robot that Musk has promised “can babysit your kids” or help around the house.",
    "url": "https://fortune.com/2024/11/18/kim-kardashian-video-elon-musk-tesla-optimus-cybercab-robotaxi/",
    "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/11/GettyImages-2152918299-e1731970416523.jpg?resize=1200,600",
    "publishedAt": "2024-11-18T23:17:17Z",
    "content": "In a series of videos posted to her Instagram Story Monday, the reality TV star and entrepreneur gave fans a peek at the new Tesla Cybercab and Optimus AI robot recently unveiled by founder Elon Musk… [+1990 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Jane LaCroix",
    "title": "Kim Kardashian Shares Wild Video of $30K Robot From Elon Musk's Company",
    "description": "The reality star gave fans a sneak peak at one of Tesla's newest creations.",
    "url": "https://www.newsweek.com/entertainment/celebrity-news/kim-kardashian-shares-new-tesla-optimus-robot-1987900",
    "urlToImage": "https://d.newsweek.com/en/full/2524118/kim-kardashian.jpg",
    "publishedAt": "2024-11-18T23:12:06Z",
    "content": "Entertainment gossip and news from Newsweek's network of contributors\r\nKim Kardashian just introduced her fans to an exciting \"new friend.\"\r\nIn a video shared to her Instagram Story on Monday, Novemb… [+2782 chars]"
    },
    {
    "source": {
    "id": "financial-post",
    "name": "Financial Post"
    },
    "author": "Bloomberg News",
    "title": "Asian Stocks Set to Track US Higher as Bonds Gain: Markets Wrap",
    "description": "Asian equities are poised to track Wall Street stocks higher as Treasuries halted a selloff that drove 10-year yields near 4.5%. Traders were also closely watching news around President-elect Donald Trump’s administration.",
    "url": "https://financialpost.com/pmn/business-pmn/asian-stocks-set-to-track-us-higher-as-bonds-gain-markets-wrap",
    "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/11/chinese-stocks-have-stayed-range-bound-in-recent-weeks.jpg",
    "publishedAt": "2024-11-18T23:11:36Z",
    "content": "Asian equities are poised to track Wall Street stocks higher as Treasuries halted a selloff that drove 10-year yields near 4.5%. Traders were also closely watching news around President-elect Donald … [+9308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Denver Post"
    },
    "author": "The Associated Press",
    "title": "Trump says he is naming former Wisconsin Rep. Sean Duffy to be transportation secretary",
    "description": "By ZEKE MILLER, MICHELLE L. PRICE and DARLENE SUPERVILLE WEST PALM BEACH, Fla. (AP) — President-elect Donald Trump said Monday he is naming former Wisconsin Rep. Sean Duffy as his nominee to be transportation secretary, as he continues to roll out picks for h…",
    "url": "https://www.denverpost.com/2024/11/18/trump-says-he-is-naming-former-wisconsin-rep-sean-duffy-to-be-transportation-secretary/",
    "urlToImage": "https://www.denverpost.com/wp-content/uploads/2024/11/Trump_Transition_16285.jpg?w=1024&h=679",
    "publishedAt": "2024-11-18T23:08:24Z",
    "content": "By ZEKE MILLER, MICHELLE L. PRICE and DARLENE SUPERVILLE\r\nWEST PALM BEACH, Fla. (AP) — President-elect Donald Trump said Monday he is naming former Wisconsin Rep. Sean Duffy as his nominee for transp… [+5133 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "scmp.com",
    "title": "Tesla is the poster child for foreign success in China. Can it sustain the goodwill?",
    "description": "Communist Party mouthpiece People’s Daily praised Tesla for sparking an EV boom, but Musk’s role in a new Trump administration could complicate matters.",
    "url": "https://biztoc.com/x/e56af37c3db28fe9",
    "urlToImage": "https://biztoc.com/cdn/e56af37c3db28fe9_s.webp",
    "publishedAt": "2024-11-18T23:06:30Z",
    "content": "Communist Party mouthpiece Peoples Daily praised Tesla for sparking an EV boom, but Musks role in a new Trump administration could complicate matters.\r\nThis story appeared on scmp.com, 2024-11-18 23:… [+5 chars]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Hannah Knudsen, Hannah Knudsen",
    "title": "DOGE Shares Obscene Examples of Government Waste: Nearly $1 Million to See if Cocaine Makes Japanese Quail More Sexually Promiscuous",
    "description": "The soon-to-be-formed Department of Government Efficiency (DOGE), led by X owner and Tesla CEO Elon Must and entrepreneur and former presidential candidate Vivek Ramaswamy, shared some examples of obscene government waste on Monday so Americans can have some …",
    "url": "https://www.breitbart.com/politics/2024/11/18/doge-shares-obscene-examples-of-government-waste-nearly-1-million-to-see-if-cocaine-makes-japanese-quail-more-sexually-promiscuous/",
    "urlToImage": "https://media.breitbart.com/media/2024/11/Japanese-quail-cocaine-640x335.jpg",
    "publishedAt": "2024-11-18T23:02:59Z",
    "content": "The soon-to-be-formed Department of Government Efficiency (DOGE), led by X owner and Tesla CEO Elon Musk and entrepreneur and former presidential candidate Vivek Ramaswamy, shared some examples of ob… [+3297 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "siliconvalley.com",
    "title": "Sixth Tesla Cybertruck recall hits more than 2,000 owners, who must bring vehicles in for fix",
    "description": "Owners of certain Tesla Cybertrucks will have to visit the repair shop after Tesla issued a recall affecting 2,400 of the electric vehicles over possible sudden loss of power to the wheels.\nAt issue is a transistor in some trucks built between Nov. 6, 2023 an…",
    "url": "https://biztoc.com/x/e0e7a00bc09337f5",
    "urlToImage": "https://biztoc.com/cdn/e0e7a00bc09337f5_s.webp",
    "publishedAt": "2024-11-18T22:55:40Z",
    "content": "Owners of certain Tesla Cybertrucks will have to visit the repair shop after Tesla issued a recall affecting 2,400 of the electric vehicles over possible sudden loss of power to the wheels.At issue i… [+147 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The-express.com"
    },
    "author": null,
    "title": "STUDY: TESLA has highest fatal crash rate...",
    "description": "STUDY: TESLA has highest fatal crash rate...\r\n\n \n \n \n (Second column, 7th story, link)",
    "url": "https://www.the-express.com/news/155039",
    "urlToImage": null,
    "publishedAt": "2024-11-18T22:49:36Z",
    "content": "Oops. Our website is temporarily unavailable in your location. We are working hard to get it back online."
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Stock market today: Tesla powers tech rally as Nasdaq snaps 5-day skid",
    "description": "US stocks ended Monday mostly higher, led by a surge in Tesla on the potential for easing autonomous vehicle rules.\nThe Nasdaq 100 rebounded after a more than 3% drop last week, which was partly influenced by the Fed's interest-rate outlook.\nInvestors are eye…",
    "url": "https://biztoc.com/x/47f07f0297cd9291",
    "urlToImage": "https://biztoc.com/cdn/47f07f0297cd9291_s.webp",
    "publishedAt": "2024-11-18T22:44:43Z",
    "content": "US stocks ended Monday mostly higher, led by a surge in Tesla on the potential for easing autonomous vehicle rules.The Nasdaq 100 rebounded after a more than 3% drop last week, which was partly influ… [+145 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Cut"
    },
    "author": "Olivia Craighead",
    "title": "Meanwhile, Kim Kardashian Is Hanging Out With a Tesla Robot",
    "description": "Kim Kardashian, unlike everyone else, is not scared of Tesla’s humanoid Optimus robot. Instead, she’s embracing Elon Musk’s new favorite toy as a ‘friend.’",
    "url": "http://www.thecut.com/article/kim-kardashian-tesla-optimus-robot.html",
    "urlToImage": "https://pyxis.nymag.com/v1/imgs/ae2/b99/fdcf79d9e601d7100f6ef6a55288f8322a-kim-k-tesla-robot.1x.rsocial.w1200.jpg",
    "publishedAt": "2024-11-18T22:33:36Z",
    "content": "Broadly, it seems like people from all walks of life are trying to distance themselves from Elon Musk. Hes already getting on Donald Trumps nerves, users are abandoning X in favor of Bluesky, and jus… [+1609 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "IPWatchdog.com"
    },
    "author": "Peter Harter",
    "title": "The New ‘China Syndrome’: Favors for CATL Can Be Stopped by President Trump",
    "description": "China is more relevant than ever before and should drive much of what Trump 2.0 does on patents and critical technologies such as EVs, batteries and communications, all crucial to America’s economic and national security. This op-ed follows up on my coverage …",
    "url": "https://ipwatchdog.com/2024/11/18/new-china-syndrome-favors-catl-can-stopped-president-trump/id=183332/",
    "urlToImage": "https://ipwatchdog.com/wp-content/uploads/2023/07/opinion11-21.jpg",
    "publishedAt": "2024-11-18T22:15:45Z",
    "content": "Support IPWatchdog with an individual sponsorship: Click here\r\n“The strange tale of CATLs attempts to patent nature and its absent data marks a crisis unfolding, not unlike the nuclear meltdown depic… [+10385 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WebProNews"
    },
    "author": "Matt Milano",
    "title": "US Market About to Be Flooded With Affordable EVs",
    "description": "J.D. Power says the US EV market is about to be flooded with affordable vehicles in 2026 as leases expire and uncertainty grows about battery health and tax credits.",
    "url": "https://www.webpronews.com/us-market-about-to-be-flooded-with-affordable-evs/",
    "urlToImage": "https://www.webpronews.com/wp-content/uploads/2024/11/Electric-Vehicles.webp",
    "publishedAt": "2024-11-18T22:11:22Z",
    "content": "J.D. Power says the US EV market is about to be flooded with affordable vehicles in 2026 as leases expire and uncertainty grows about battery health and tax credits.\r\nLeasing plays an important role … [+3434 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Lucas Ropek",
    "title": "Trump Admin Reportedly Wants to Unleash Driverless Cars on America",
    "description": "The new Trump administration wants to clear the way for autonomous travel, safety standards be damned.",
    "url": "https://gizmodo.com/trump-reportedly-wants-to-unleash-driverless-cars-on-america-2000525955",
    "urlToImage": "https://gizmodo.com/app/uploads/2024/11/Donald-Trump-and-Elon-Musk-at-a-UFC-fight.jpg",
    "publishedAt": "2024-11-18T22:10:57Z",
    "content": "New reporting claims President-elect Donald Trump is paving the way for broader deployment of autonomous vehicles on America’s roadways, a development that could benefit his fellow billionaire, campa… [+3811 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "The Feed",
    "title": "Brazil's first lady uses explicit words to insult Elon Musk in sweary speech; Tesla CEO responded quickly, here's what he said",
    "description": "Elon Musk is now the center of discussion across the world, and Brazil's first lady has joined in the latest ranting phase against the Tesla CEO. Musk was although, quick to response to Janja Lula da Silva's comments, which is now making headlines across the …",
    "url": "https://economictimes.indiatimes.com/news/international/us/brazils-first-lady-uses-explicit-words-to-insult-elon-musk-in-sweary-speech-tesla-ceo-responded-quickly-heres-what-he-said/articleshow/115429079.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-115429077,width-1200,height-630,imgsize-1571216,overlay-economictimes/articleshow.jpg",
    "publishedAt": "2024-11-18T22:08:46Z",
    "content": "Artificial Intelligence(AI)\r\nAI and Analytics based Business Strategy\r\nBy - Tanusree De, Managing Director- Accenture Technology Lead, Trustworthy AI Center of Excellence: ATCI\r\nView Program"
    },
    {
    "source": {
    "id": null,
    "name": "Slate Magazine"
    },
    "author": "Dahlia Lithwick",
    "title": "The Rise of the Free Speech Bro",
    "description": "Beware men bearing free speech as a loaded weapon.",
    "url": "https://slate.com/news-and-politics/2024/11/elon-musk-donald-trump-free-speech-bro.html",
    "urlToImage": "https://compote.slate.com/images/13ae63c5-5984-4183-979e-a895977c1701.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
    "publishedAt": "2024-11-18T22:01:13Z",
    "content": "As President-elect Donald Trumps Cabinet takes shape, Trump has shown a preference for a very clear type: the free speech bro. The most powerful among them is of course Elon Musk, whose running of th… [+8805 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "2024-11-18T22:00:40Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Fred Lambert",
    "title": "Elon Musk hints at Tesla making bigger electric cars, but don’t hold your breath",
    "description": "Elon Musk is hinting at Tesla making bigger electric cars, but you shouldn’t hold your breath as it’s not the first time he said that.\n\n\n\n more…",
    "url": "http://electrek.co/2024/11/18/elon-musk-tesla-making-bigger-electric-cars/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/05/Tesla-Model-X-electric-van.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-11-18T21:59:48Z",
    "content": "Elon Musk is hinting at Tesla making bigger electric cars, but you shouldn’t hold your breath as it’s not the first time he said that.\r\nIn the last few hours, Musk responded to two fans on X, asking … [+2114 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Tesla Stock Rises 6%: What We Know About Trump’s Impact On Musk’s EV Giant - Forbes",
    "description": "Tesla Stock Rises 6%: What We Know About Trump’s Impact On Musk’s EV GiantForbes Tesla stock pops after report Trump wants to relax U.S. self-driving rulesCNBC Trump Team Is Seeking to Ease US Rules for Self-Driving CarsBloomberg For Tesla Stock, Trump Giveth…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175496621",
    "urlToImage": null,
    "publishedAt": "2024-11-18T21:52:46Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Alison Durkee, Forbes Staff, \n Alison Durkee, Forbes Staff\n https://www.forbes.com/sites/alisondurkee/",
    "title": "How Elon Musk Could Benefit From Trump’s FCC Nominee Brendan Carr",
    "description": "Carr also authored a chapter in the controversial Project 2025 agenda.",
    "url": "https://www.forbes.com/sites/alisondurkee/2024/11/18/how-elon-musk-could-benefit-from-trumps-fcc-nominee-brendan-carr/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/673bb460503f100a44739f7c/0x0.jpg?format=jpg&crop=1541,867,x0,y0,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-11-18T21:45:20Z",
    "content": "President-elect Donald Trump has nominated Brendan Carr to lead the Federal Communications Commission in his second administration, elevating the Republican official who has been outspoken about his … [+6458 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Rolling Stone"
    },
    "author": "Miles Klee",
    "title": "Elon Musk Reportedly Had a ‘Massive Blowup’ With a Trump Adviser",
    "description": "Donald Trump megadonor Elon Musk is reportedly annoying the president-elect's advisers, leading to \"massive blowup\" at a Mar-a-Lago dinner.",
    "url": "http://www.rollingstone.com/politics/politics-news/elon-musk-massive-blowup-trump-adviser-report-1235170809/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/11/musk-trump-team.jpg?crop=0px%2C39px%2C1800px%2C1014px&resize=1600%2C900",
    "publishedAt": "2024-11-18T21:42:37Z",
    "content": "Since Donald Trump‘s election win two weeks ago, megadonor Elon Musk has stuck close to the president-elect, whether sharing an airborne McDonald’s meal, taking in an Ultimate Fighting Championship e… [+4038 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bringatrailer.com"
    },
    "author": "bringatrailer",
    "title": "Ex-Eddie Vedder 2018 Tesla Model S 100D",
    "description": "This 2018 Tesla Model S 100D was previously owned by Eddie Vedder, frontman of the rock band Pearl Jam, and it now has 8k miles. Outfitted with a matte black vinyl wrap, the car is powered by dual three-phase AC induction motors that drive all four wheels thr…",
    "url": "https://bringatrailer.com/listing/2018-tesla-model-s-8/",
    "urlToImage": "https://bringatrailer.com/wp-content/uploads/2024/10/2018_tesla_model-s_20241031_143258-40716.jpg",
    "publishedAt": "2024-11-18T21:27:56Z",
    "content": "This 2018 Tesla Model S 100D was previously owned by Eddie Vedder, frontman of the rock band Pearl Jam, and it now has 8k miles. Outfitted with a matte black vinyl wrap, the car is powered by dual th… [+1773 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Japan Today"
    },
    "author": null,
    "title": "Biden pledges record $4 billion to World Bank fund for poorest countries",
    "description": "U.S. President Joe Biden pledged a $4 billion U.S. contribution to the World Bank's International Development Association fund for the world's poorest countries, two sources with knowledge of the commitment said on Monday. Biden announced the U.S. pledge duri…",
    "url": "https://japantoday.com/category/world/biden-pledges-record-4-billion-to-world-bank-fund-for-poorest-countries3",
    "urlToImage": null,
    "publishedAt": "2024-11-18T21:23:46Z",
    "content": "U.S. President Joe Biden pledged a $4 billion U.S. contribution to the World Bank's International Development Association fund for the world's poorest countries, two sources with knowledge of the com… [+2227 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Brad Adgate, Contributor, \n Brad Adgate, Contributor\n https://www.forbes.com/sites/bradadgate/",
    "title": "Post Election, X Rival Bluesky Is Adding Millions Of Users",
    "description": "Bluesky which was developed by Twitter in 2019 has become one of the fastest growing apps as users become disenchanted with X in the aftermath of the election.",
    "url": "https://www.forbes.com/sites/bradadgate/2024/11/18/post-election-x-rival-bluesky-is-adding-millions-of-users/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/673ba9a216994b8ce9a612d9/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-11-18T21:21:12Z",
    "content": "In this photo illustration, the Bluesky logo is displayed on a cell phone and computer monitor on ... [+] November 14, 2024 in Pasadena, California. This month the social media network Bluesky, has b… [+6557 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Tesla Stock Jumps on Trump Team Plan to Ease Self-Driving Car Rules - Investopedia",
    "description": "Tesla Stock Jumps on Trump Team Plan to Ease Self-Driving Car RulesInvestopedia Tesla stock pops after report Trump wants to relax U.S. self-driving rulesCNBC Trump Team Is Seeking to Ease US Rules for Self-Driving CarsBloomberg For Tesla Stock, Trump Giveth …",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175496345",
    "urlToImage": null,
    "publishedAt": "2024-11-18T21:13:28Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Wall St mixed as investors await Nvidia earnings; Tesla jumps - Reuters",
    "description": "Wall St mixed as investors await Nvidia earnings; Tesla jumpsReuters Stock market today: S&P 500, Nasdaq climb as Tesla shinesYahoo Finance Stocks making the biggest moves premarket: Tesla, Nvidia, Robinhood, Liberty Energy and moreCNBC Nvidia, Super Micro, T…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=175496343",
    "urlToImage": null,
    "publishedAt": "2024-11-18T21:13:18Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "mfox@businessinsider.com (Matthew Fox)",
    "title": "Stock market today: Tesla powers tech rally as Nasdaq snaps 5-day skid",
    "description": "Top of mind for investors this week include Nvidia's third-quarter earnings report and a slew of economic data.",
    "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-tesla-powers-tech-nasdaq-ends-losing-streak-2024-11",
    "urlToImage": "https://i.insider.com/673ba619ede4eeae3928417e?width=1200&format=jpeg",
    "publishedAt": "2024-11-18T21:13:17Z",
    "content": "US stocks traded mostly higher on Monday, partly driven by a surge in Tesla.\r\nTesla stock jumped as much as 9% after a report said the incoming Trump administration was planning to ease regulations o… [+1426 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Kim Kardashian Introduces Fans to Her New Tesla Optimus Robot 'Friend'",
    "description": "Kim Kardashian has turned to technology for companionship ... the reality TV star has gotten her hands on her very own Tesla robot. Check it out ... the SKIMS founder posted on X her interaction with her brand-new Optimus \"personal assistant\"…",
    "url": "https://www.tmz.com/2024/11/18/kim-kardashian-shows-off-new-tesla-optimus-robot/",
    "urlToImage": "https://imagez.tmz.com/image/d7/16by9/2024/11/18/d7fcaa11eaa34b42916c9c8d4869b4b7_xl.jpg",
    "publishedAt": "2024-11-18T21:12:35Z",
    "content": "Kim Kardashian has turned to technology for companionship ... the reality TV star has gotten her hands on her very own Tesla robot.\r\nCheck it out ... the SKIMS founder posted on X her interaction wit… [+1618 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Root"
    },
    "author": "Candace McDuffie",
    "title": "Trump May Give Reparations To White People, Black People Consider Leaving X After Elon Musk Joins Trump's Cabinet, Ways Black People Can Find Unity During Current Political Climate, Red States Want To Change Their Vote And More Post-Election Stories",
    "description": "President-Elect Donald Trump’s upcoming second administration has folks on edge wondering what he will implement next. According to a resurfaced video, it sounds like Trump is planning to bring reparations to the U.S. federally — but it’s far from what we con…",
    "url": "https://www.theroot.com/trump-may-give-reparations-to-white-people-black-peopl-1851702240",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a353d78e7307fc32b09c3f084c522e96.jpg",
    "publishedAt": "2024-11-18T21:08:38Z",
    "content": "On Tuesday, President-elect Donald Trump announced that Tesla CEO and X owner Elon Musk would co-lead the unofficial Department of Government Efficiency with Vivek Ramaswamy. Musk purchased X back in… [+100 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "2024-11-18T20:51:59Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Warner Todd Huston, Warner Todd Huston",
    "title": "UFC's Jim Miller Wants 'Justice for Peanut' the Squirrel, Rooting for DOGE to 'Clean Up' Govt Spending",
    "description": "UFC star Jim Miller is rooting for Musk and Ramaswamy to aim DOGE at government waste, but he also wants justice for Peanut the squirrel.\nThe post UFC’s Jim Miller Wants ‘Justice for Peanut’ the Squirrel, Rooting for DOGE to ‘Clean Up’ Govt Spending appeared …",
    "url": "https://www.breitbart.com/sports/2024/11/18/ufcs-jim-miller-wants-justice-for-peanut-the-squirrel-rooting-for-doge-to-clean-up-govt-spending/",
    "urlToImage": "https://media.breitbart.com/media/2024/11/Sarah-Stier_Getty-Images-640x335.jpg",
    "publishedAt": "2024-11-18T20:46:47Z",
    "content": "UFC star Jim Miller says he is rooting for Elon Musk and Vivek Ramaswamy to aim their DOGE efforts at government waste, but he also wants “justice” for Peanut, the squirrel.\r\nMiller — who leads the U… [+1630 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Kylie Robison",
    "title": "Inside Elon Musk’s messy breakup with OpenAI",
    "description": "Elon Musk’s lawsuit against OpenAI reveals the startup’s turbulent origins and internal power struggles.",
    "url": "https://www.theverge.com/2024/11/18/24299787/elon-musk-openai-lawsuit-sam-altman-xai-google-deepmind",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/mZ3GKmElWQ4w3UDqSJwMGCyBNJU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25739950/247386_Elon_Musk_Open_AI_CVirginia.jpg",
    "publishedAt": "2024-11-18T20:43:07Z",
    "content": "Image: Cath Virginia / The Verge, Getty Images\r\n\n \n\n\n Emails in Musk’s lawsuit against OpenAI expose the startup’s rocky origins. As OpenAI was ironing out a new deal with Microsoft in 2016 — one tha… [+13685 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "Recently disclosed VMware vCenter Server bugs are actively exploited in attacks",
    "description": "Threat actors are actively exploiting two VMware vCenter Server vulnerabilities tracked as CVE-2024-38812 and CVE-2024-38813, Broadcom warns. Broadcom warns that the two VMware vCenter Server vulnerabilities CVE-2024-38812 and CVE-2024-38813 are actively expl…",
    "url": "https://securityaffairs.com/171147/security/vmware-vcenter-server-bugs-actively-exploited.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2021/04/vmware-logo.png",
    "publishedAt": "2024-11-18T20:42:17Z",
    "content": "Recently disclosed VMware vCenter Server bugs are actively exploited in attacks\r\n | Foreign adversary hacked email communications of the Library of Congress says\r\n | T-Mobile is one of the victims of… [+117308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Peter Johnson",
    "title": "Lucid (LCID) has no plans to launch a $20,000 EV, but it could help create one",
    "description": "That $20,000 luxury Lucid EV you’ve been waiting for will likely never hit the market. CEO Peter Rawlinson said Lucid (LCID) has no plans to launch a $20K vehicle. However, it could play a role in bringing cheaper EVs to market.\n\n\n\n more…",
    "url": "http://electrek.co/2024/11/18/lucid-lcid-will-not-launch-20k-ev-but-could-help-build-one/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/11/Lucid-20K-EV-2.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-11-18T20:38:11Z",
    "content": "That $20,000 luxury Lucid EV you’ve been waiting for will likely never hit the market. CEO Peter Rawlinson said Lucid (LCID) has no plans to launch a $20K vehicle. However, it could play a role in br… [+4482 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "The S&P 500 Turns Higher. Super Micro and Tesla Are Leading the Charge",
    "description": "Updated 4 hours ago\nThe S&P 500 Turns Higher. Super Micro and Tesla Are Leading the Charge.\nThe S&P 500 turned higher on Monday as the index looked to shake off its worst weekly performance since September.\nThe market benchmark was up 0.4% with roughly 300 of…",
    "url": "https://biztoc.com/x/7403857eb7ac8068",
    "urlToImage": "https://biztoc.com/cdn/807/og.png",
    "publishedAt": "2024-11-18T20:20:43Z",
    "content": "Updated 4 hours agoThe S&amp;P 500 Turns Higher. Super Micro and Tesla Are Leading the Charge.The S&amp;P 500 turned higher on Monday as the index looked to shake off its worst weekly performance sin… [+155 chars]"
    },
    {
    "source": {
    "id": "abc-news-au",
    "name": "ABC News (AU)"
    },
    "author": "Rhiana Whitson",
    "title": "Live: ASX set to rise, Tesla rallies on Wall Street after Trump talk boosts Nasdaq",
    "description": "The Australian share market is set to rise on Tuesday, after Wall Street climbs as Tesla shares rally. Follow the day's events and insights from our business reporters on the ABC News live markets blog.",
    "url": "https://www.abc.net.au/news/2024-11-19/asx-markets-business-live-news-date-year/104617148",
    "urlToImage": "https://live-production.wcms.abc-cdn.net.au/a10a96b8fb841e8baf05fd853e8b2c09?impolicy=wcms_watermark_news&cropH=1686&cropW=2997&xPos=0&yPos=0&width=862&height=485&imformat=generic",
    "publishedAt": "2024-11-18T20:12:23Z",
    "content": "What's been happening on Wall Street overnight?\r\nElon Musk's Tesla continues to be a focus, up about 5%. This time the stock jumped on the prospect of favourable policy changes from the incoming Trum… [+339 chars]"
    },
    {
    "source": {
    "id": "abc-news-au",
    "name": "ABC News (AU)"
    },
    "author": "Rhiana Whitson and Gareth Hutchens",
    "title": "Live: ASX rises, Woolworths faces supermarket probe",
    "description": "The Australian share market has opened higher on Tuesday. Woolworths faces another grilling at the ACCC's supermarkets inquiry. Tesla shares rallied on Wall Street. Follow the day's events and insights from our business reporters on the ABC News live markets …",
    "url": "https://www.abc.net.au/news/2024-11-19/asx-markets-business-live-news-19-nov2024/104617148",
    "urlToImage": "https://live-production.wcms.abc-cdn.net.au/a10a96b8fb841e8baf05fd853e8b2c09?impolicy=wcms_watermark_news&cropH=1686&cropW=2997&xPos=0&yPos=0&width=862&height=485&imformat=generic",
    "publishedAt": "2024-11-18T20:12:23Z",
    "content": "The minutes of the Reserve Bank Board's recent meeting have just been released.Our colleague, Senior Business Correspondent Peter Ryan, has sent across this summary to the blog:Major changes in US ec… [+2730 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "ARTnews",
    "title": "Billionaire Collector Kenneth Griffin Donated $100 M. for 2024 Election, Fifth-Most for Individual Donors",
    "description": "Billionaire art collector Kenneth C. Griffin is among the top donors to outside spending groups for the 2024 election, which resulted in former President Donald Trump winning a second term. The founder and CEO of the investment firm Citadel donated $100 milli…",
    "url": "https://freerepublic.com/focus/f-news/4279266/posts",
    "urlToImage": null,
    "publishedAt": "2024-11-18T20:01:59Z",
    "content": "Skip to comments.\r\nBillionaire Collector Kenneth Griffin Donated $100 M. for 2024 Election, Fifth-Most for Individual DonorsARTnews ^\r\n | 11/15\r\n | Karen K. Ho\r\nPosted on 11/18/2024 12:01:59 PM PST b… [+5441 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Sophie Hessekiel",
    "title": "All About Elon Musk's 12 Children — And Why He Has So Many",
    "description": "The CEO has a dozen children from multiple partners.",
    "url": "https://www.newsweek.com/entertainment/celebrity-news/elon-musks-12-children-why-he-has-so-many-1987776",
    "urlToImage": "https://d.newsweek.com/en/full/2523948/elon-musk.jpg",
    "publishedAt": "2024-11-18T19:59:09Z",
    "content": "Entertainment gossip and news from Newsweek's network of contributors\r\nTesla and X (formerly known as Twitter) CEO Elon Musk has lent his voice to a wide variety of issues over the years, most recent… [+3935 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "foxbusiness.com",
    "title": "Tesla stock jumps on report Trump plans to ease regulations around self-driving cars",
    "description": "Tesla shares surged more than 8% on Monday morning before tapering off in the early afternoon following a report over the weekend that President-elect Trump's transition team is looking to ease the regulations surrounding self-driving vehicles.\nThe report fro…",
    "url": "https://biztoc.com/x/b41d51b6a5e377be",
    "urlToImage": "https://biztoc.com/cdn/b41d51b6a5e377be_s.webp",
    "publishedAt": "2024-11-18T19:58:52Z",
    "content": "Tesla shares surged more than 8% on Monday morning before tapering off in the early afternoon following a report over the weekend that President-elect Trump's transition team is looking to ease the r… [+143 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Finovate.com"
    },
    "author": "Julie Muhn (@julieschicktanz)",
    "title": "Revolut Earns U.K. Trading License from the FCA",
    "description": "Global challenger bank Revolut announced today that the U.K. Financial Conduct Authority (FCA) has granted it a license to offer trading services on U.K. and E.U.-listed stocks and ETFs. Revolut, which cemented its reputation as Europe’s most valuable fintech…",
    "url": "https://finovate.com/revolut-earns-u-k-trading-license-from-the-fca/",
    "urlToImage": "https://finovate.com/wp-content/uploads/2024/11/pexels-energepic-com-27411-159888-scaled.jpg",
    "publishedAt": "2024-11-18T19:50:54Z",
    "content": "<ul><li>Revolut has received FCA approval to offer U.K. and E.U.-listed stock and ETF trading.</li><li>The new service is expected to roll out in 2025 for its nine million U.K. customers.</li><li>Rev… [+2291 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "A Must See Chart For Prudent Investors, Trump To Help Tesla Dominate, Nvidia Heat Problem",
    "description": "To gain an edge, this is what you need to know today.\nThe Trump Trade\nPlease click here for an enlarged chart comparing SPDR S&P Biotech ETF (NYSE:XBI) to Dogecoin to United States Dollar (CRYPTO: DOGE).\nNote the following:\nThe chart shows that biotech XBI ha…",
    "url": "https://biztoc.com/x/8dfa57577f299fe5",
    "urlToImage": "https://biztoc.com/cdn/8dfa57577f299fe5_s.webp",
    "publishedAt": "2024-11-18T19:36:27Z",
    "content": "To gain an edge, this is what you need to know today.The Trump TradePlease click here for an enlarged chart comparing SPDR S&amp;P Biotech ETF (NYSE:XBI) to Dogecoin to United States Dollar (CRYPTO: … [+144 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "jalopnik.com",
    "title": "Trump Does Tesla A Favor, Plans To Make It Easier For Self-Driving Cars To Hit The Road",
    "description": "Good morning! It’s Monday, November 18, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories you need to know.\nPresident-elect Donald Trump is apparently going to…",
    "url": "https://biztoc.com/x/d431eb4337cdc9f5",
    "urlToImage": "https://biztoc.com/cdn/d431eb4337cdc9f5_s.webp",
    "publishedAt": "2024-11-18T19:36:17Z",
    "content": "Good morning! Its Monday, November 18, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories you need t… [+150 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "DJ Hed Campaigns for Snoop Dogg Trump Cabinet Position After Elon Musk Pick",
    "description": "DJ Hed is leery of incoming President Donald Trump's experimental cabinet picks, but says if that's the route they're going, Snoop Dogg should be qualified for something after the year he's had ... Ambassador of Cool, maybe??? TMZ Hip Hop chatted…\n Permalink",
    "url": "https://www.tmz.com/2024/11/18/dj-hed-snoop-dogg-donald-trump-cabinet-elon-musk/",
    "urlToImage": "https://imagez.tmz.com/image/1b/16by9/2024/11/16/1b4cb4760f9e4c14a808d0be3e91f2c0_xl.jpg",
    "publishedAt": "2024-11-18T19:31:27Z",
    "content": "DJ Hed is leery of incoming President Donald Trump's experimental cabinet picks, but says if that's the route they're going, Snoop Dogg should be qualified for something after the year he's had ... A… [+979 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Dan Gooding",
    "title": "Who is Kash Patel? Donald Trump's Potential Pick for FBI Director",
    "description": "Patel, 44, has promised to remove those disloyal to Trump while pushing ideas around the \"deep state.\"",
    "url": "https://www.newsweek.com/kash-patel-donald-trump-cabinet-fbi-director-1987688",
    "urlToImage": "https://d.newsweek.com/en/full/2523840/kash-patel.jpg",
    "publishedAt": "2024-11-18T19:31:04Z",
    "content": "Kash Patel, a close ally of President-elect Donald Trump, is reportedly being considered as the next director of the FBI, after spending time as an adviser during the first Trump administration.\r\nA f… [+4312 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Fred Lambert",
    "title": "Tesla slashes Model Y lease price as it attempts record deliveries",
    "description": "Tesla has slashed the base monthly Model Y lease price – the latest of a series of incentives to help the automaker attempt to deliver a record number of vehicles this quarter.\n\n\n\n more…",
    "url": "http://electrek.co/2024/11/18/tesla-slashes-model-y-lease-price-as-it-attempts-record-deliveries/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/11/Screenshot-2024-11-18-at-2.06.48 PM-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-11-18T19:19:45Z",
    "content": "Tesla has slashed the base monthly Model Y lease price the latest of a series of incentives to help the automaker attempt to deliver a record number of vehicles this quarter.\r\nLast month, Tesla said … [+2016 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Designtaxi.com"
    },
    "author": "Garth Gator",
    "title": "Tesla Website Crashes Following Arrival Of Optimus Humanoid Robot Action Figures",
    "description": "It looks like Tesla is taking its robots from the factory floor and shrinking them for your shelf. Elon Musk's automaker recently released the Tesla Bot Action Figure, a collectible version of its Optimus humanoid robot. Standing at a modest 7.16 inches tall,…",
    "url": "https://community.designtaxi.com/topic/6300-tesla-website-crashes-following-arrival-of-optimus-humanoid-robot-action-figures-with-cyberhammers/",
    "urlToImage": "https://media.invisioncic.com/y329496/monthly_2024_11/Tesla-Optimus-Action-Figures-AI-Robot-1.jpg.846b1004d330031ffebfd4a3d29f65b6.jpg",
    "publishedAt": "2024-11-18T19:12:49Z",
    "content": "It looks like Tesla is taking its robots from the factory floor and shrinking them for your shelf. Elon Musk's automaker recently released the Tesla Bot Action Figure, a collectible version of its Op… [+1013 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Checkyourfact.com"
    },
    "author": "Anna Mock",
    "title": "FACT CHECK: No, Elon Musk Did Not Announce A Water-Powered Car Engine",
    "description": "A post claims Tesla CEO Elon Musk announced the creation of a water-powered car engine.",
    "url": "https://checkyourfact.com/2024/11/18/fact-check-elon-musk-announce-water-powered-car-engine/",
    "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2024/11/GettyImages-1239417462-scaled-e1731694379535.jpg",
    "publishedAt": "2024-11-18T19:09:07Z",
    "content": "A post shared on Facebook claims Tesla CEO Elon Musk announced the creation of a water-powered car engine.  \r\nVerdict: False\r\nThere is no evidence Musk has announced such a creation.\r\nFact Check: \r\nT… [+1415 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tom's Hardware UK"
    },
    "author": "Anton Shilov",
    "title": "Elon Musk's xAI reportedly shifts $6 billion AI server order from troubled Supermicro to its rivals",
    "description": "Dell, Inventec, and Wistron land new orders from xAI as Supermicro faces significant financial challenges.",
    "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/elon-musks-xai-reportedly-shifts-usd6-billion-ai-server-order-from-troubled-supermicro-to-its-rivals",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/gUqt6Pv38QcosVvtwQiL58-1200-80.jpg",
    "publishedAt": "2024-11-18T19:08:11Z",
    "content": "xAI, Elon Musk’s AI startup, has shifted all AI server orders from troubled Supermicro to Dell, reports UDN.com. Dell, already among the largest makers of servers, benefits from this decision, just l… [+2676 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "Investing.com",
    "title": "Tesla and AMD Lead as Market Cap Stock Movers on Monday",
    "description": "Tesla and AMD Lead as Market Cap Stock Movers on Monday",
    "url": "https://www.investing.com/news/stock-market-news/tesla-and-amd-lead-as-market-cap-stock-movers-on-monday-93CH-3728699",
    "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEK920OU_L.jpg",
    "publishedAt": "2024-11-18T19:02:19Z",
    "content": "Monday's market has seen notable fluctuations with stocks like Tesla Motors (NASDAQ:TSLA) and Advanced Micro Devices (NASDAQ:AMD) experiencing significant gains, while Uber Technologies Inc (NYSE:UBE… [+3457 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Reinette LeJeune",
    "title": "UGREEN PowerRoam LiFePO4 stations hit new lows from $269, Save up to $1,099 on Vvolt extra battery e-bike promo, Segway, more",
    "description": "Starting off this week’s Green Deals is a cascade of new Black Friday low prices on UGREEN’s three PowerRoam Portable Power Stations starting from $269, with discounts on solar panels and bundle options too. We’ve also got two Black Friday EV sales, with the …",
    "url": "http://electrek.co/2024/11/18/ugreen-power-stations-vvolt-e-bike-promos-segway-more/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/11/UGREEN-PowerRoam-600-Portable-Power-Station.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-11-18T19:02:15Z",
    "content": "Starting off this week’s Green Deals is a cascade of new Black Friday low prices on UGREEN’s three PowerRoam Portable Power Stations starting from $269, with discounts on solar panels and bundle opti… [+8547 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "redmondpie.com"
    },
    "author": "Oliver Haslam",
    "title": "Tesla’s Year-End Deal Includes 3 Free Months Of Supercharging And Full Self-Driving",
    "description": "Tesla's year-end deal includes 3 free months of Supercharging and Full Self-Driving. Here are all the details on this.\nThe post Tesla’s Year-End Deal Includes 3 Free Months Of Supercharging And Full Self-Driving first appeared on Redmond Pie.",
    "url": "https://www.redmondpie.com/teslas-year-end-deal-includes-3-free-months-of-supercharging-and-full-self-driving/",
    "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2024/07/tesla-group.jpg",
    "publishedAt": "2024-11-18T19:01:09Z",
    "content": "As we get closer to the end of the year Tesla has announced that it is offering some freebies to help push people towards buying its electronic vehicles.\r\nThe free offerings include three months of f… [+1436 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Planetizen.com"
    },
    "author": "Diana Ionescu",
    "title": "Opinion: Ending the EV Tax Credit Would Be “Major Setback” for US Automakers",
    "description": "Opinion: Ending the EV Tax Credit Would Be “Major Setback” for US Automakers\nDiana Ionescu\nMon, 11/18/2024 - 11:00\n\n\n \n Primary Image\r\n\n \n\n\n\r\n\n \n\n\n \n Primary Image Caption\r\n\n U.S automakers such as Ford and GM are investing heavily in producing electric vehic…",
    "url": "https://www.planetizen.com/news/2024/11/132717-opinion-ending-ev-tax-credit-would-be-major-setback-us-automakers",
    "urlToImage": "https://www.planetizen.com/files/images/AdobeStock_628684726_Editorial_Use_Only.jpeg",
    "publishedAt": "2024-11-18T19:00:00Z",
    "content": "In a Forbes article, Andrew Leahey explains why eliminating the federal electric vehicle tax credit would be a huge mistake and a major setback for the American automotive industry.\r\nAccording to Lea… [+1136 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WebProNews"
    },
    "author": "Rich Ord",
    "title": "Tesla Full Self Driving Continues to Improve Exponentially",
    "description": "With version 12.5.2.1 already deployed to 50,000 vehicles, Ong explained that Tesla's responsiveness to user feedback has made their software continually better. \"The progress is really good, and it's interesting to see how quickly they’ve addressed things li…",
    "url": "https://www.webpronews.com/tesla-full-self-driving-continues-to-improve-exponentially/",
    "urlToImage": "https://www.webpronews.com/wp-content/uploads/2024/11/Telsa-FSD-Live.jpeg",
    "publishedAt": "2024-11-18T18:58:51Z",
    "content": "Tesla’s Full Self-Driving (FSD) software has been a subject of immense curiosity, excitement, and sometimes skepticism. Yet, the progress Tesla has made in developing and refining FSD is nothing shor… [+8099 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Tesla stock jumps on report Trump could ease self-driving regulations",
    "description": "In This Article:\nTesla (TSLA) stock is jumping on Monday as more news rolls in indicating that CEO Elon Musk’s bet on President-elect Donald Trump is paying off.\nBloomberg News reported Trump’s transition team has told advisers it plans to make a “federal fra…",
    "url": "https://biztoc.com/x/ccadd11eff3cdd71",
    "urlToImage": "https://biztoc.com/cdn/807/og.png",
    "publishedAt": "2024-11-18T18:52:00Z",
    "content": "In This Article:Tesla (TSLA) stock is jumping on Monday as more news rolls in indicating that CEO Elon Musks bet on President-elect Donald Trump is paying off.Bloomberg News reported Trumps transitio… [+153 chars]"
    },
    {
    "source": {
    "id": "the-irish-times",
    "name": "The Irish Times"
    },
    "author": "Fiona Keeley",
    "title": "Global shares edge higher in choppy trading",
    "description": "Quiet day on Dublin market as banks nudge upwards",
    "url": "https://www.irishtimes.com/business/2024/11/18/global-shares-edge-higher-in-choppy-trading/",
    "urlToImage": "https://www.irishtimes.com/resizer/v2/Q4JTCEQ6KBXSBR54Q4UTJJAJYM.jpg?smart=true&auth=761413644d448d50e26ecac92634734a96af4c506762b1dcfe18c6601cff1f2c&width=1200&height=630",
    "publishedAt": "2024-11-18T18:48:46Z",
    "content": "Global shares edged higher in choppy trading on Monday while the US dollar fell but still traded near one-year highs as markets pared expectations of future interest-rate cuts by the Federal Reserve.… [+4236 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Tesla stock jumps on report Trump could ease self-driving regulations",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_9f502143-6483-4bcb-a49b-35e7250fb4b4",
    "urlToImage": null,
    "publishedAt": "2024-11-18T18:38:53Z",
    "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Monica Sager",
    "title": "Who Is Trump Adviser Boris Epshteyn, and Why Is He Clashing With Elon Musk?",
    "description": "Two of President-elect Donald Trump's advisers have allegedly been fighting over who the Republican should nominate to his administration.",
    "url": "https://www.newsweek.com/boris-epshteyn-elon-musk-donald-trump-1987669",
    "urlToImage": "https://d.newsweek.com/en/full/2523803/elon-musk-boris-epshteyn.png",
    "publishedAt": "2024-11-18T18:37:52Z",
    "content": "President-elect Donald Trump's longtime lawyer Boris Epshteyn has allegedly been fighting with his newer ally billionaire Elon Musk.\r\nThe tension allegedly surfaced between Epshteyn and Musk over Cab… [+5803 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Victor Tangermann",
    "title": "Trump Reportedly Planning to Let Self-Driving Cars Loose",
    "description": "President-elect Donald Trump's incoming administration is expected to widen the rules governing self-driving cars, news that has sent Tesla's stock soaring by almost seven percent on Monday. Loosening regulations surrounding the rules of driverless vehicles c…",
    "url": "https://futurism.com/the-byte/trump-planning-self-driving-cars-loose",
    "urlToImage": "https://wordpress-assets.futurism.com/2024/11/trump-planning-self-driving-cars-loose.jpg",
    "publishedAt": "2024-11-18T18:28:38Z",
    "content": "Now that Trump is in the White House, Musk could fast-track the Cybercab.\r\nGreen Light\r\nPresident-elect Donald Trump's incoming administration is expected to attempt to widen the rules governing self… [+2188 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PEOPLE"
    },
    "author": "David Chiu",
    "title": "Dad Breaks Window to Save 7 Infants in NICU Hospital Fire, but Wasn’t Able to Rescue His Twin Daughters",
    "description": "The Nov. 15 fire at Maharani Laxmi Bai Medical College in India killed 10 newborns",
    "url": "https://people.com/father-saved-7-infants-but-lost-his-twin-daughters-in-hospital-fire-8747107",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/t0z5c6.d2coF.IW1yq6qvg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/people_218/4da4b5783bc56c79485a4c9ae05259f9",
    "publishedAt": "2024-11-18T18:25:22Z",
    "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nT… [+4689 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "forbes.com",
    "title": "Tesla Stock Rises 8%: What We Know About Trump’s Impact On Musk’s EV Giant",
    "description": "Topline\nTesla stock jumped Monday following a report indicating President-elect Donald Trump will fast track regulations about self-driving cars, sending a positive signal on how Trump will oversee the electric vehicle giant helmed by the world’s richest man,…",
    "url": "https://biztoc.com/x/8b46afdd5a498a00",
    "urlToImage": "https://biztoc.com/cdn/8b46afdd5a498a00_s.webp",
    "publishedAt": "2024-11-18T18:18:44Z",
    "content": "ToplineTesla stock jumped Monday following a report indicating President-elect Donald Trump will fast track regulations about self-driving cars, sending a positive signal on how Trump will oversee th… [+148 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newsbreak.com"
    },
    "author": "David Lawder",
    "title": "Biden pledges record $4 billion to World Bank fund for poorest countries",
    "description": "WASHINGTON (Reuters) - U.S. President Joe Biden pledged a $4 billion U.S. contribution to the World Bank's International Development Association fund for the world's poorest countries, two sources with knowledge of the commitment said on Monday.",
    "url": "https://www.newsbreak.com/share/3679413866086-biden-pledges-record-4-billion-to-world-bank-fund-for-poorest-countries?s=a2&amp;share_destination_id=MjkzMDA0MzcwLTE3MzE5NTM2NDYyNjE%3D&amp;pd=0JpPowzo&amp;hl=en_US&amp;send_time=1731953646&amp;actBtn=bottomBar&amp;_f=app_share&amp;trans_data=%7B%22platform%22%3A1%2C%22cv%22%3A%2224.45.0%22%2C%22languages%22%3A%22en%22%7D&amp;sep=ns_foryou_model_exp_24q4-v3%2Cns_pushv1-v9%2Cns_foryou_blend_exp_24q4-v7%2Cns_foryou_rank_exp_24q4-v6%2Cns_foryou_recall_exp_24q4-v9%2Cns_local_strategy_24q4_exp-v18",
    "urlToImage": "https://img.particlenews.com/img/id/3XgLnd_0wrSg46n00?type=thumbnail_1600x1200",
    "publishedAt": "2024-11-18T18:14:32Z",
    "content": "By David Lawder and Andrea Shalal \r\n WASHINGTON (Reuters) - U.S. President Joe Biden pledged a $4 billion U.S. contribution to the World Bank's International Development Association fund for the worl… [+2571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Boston Herald"
    },
    "author": "Tribune News Service",
    "title": "Trump team is seeking to ease US Rules for self-driving cars",
    "description": "Current federal rules pose significant roadblocks for companies looking to launch vehicles without steering wheels or pedals in large quantities, which Tesla intends to do.",
    "url": "https://www.bostonherald.com/2024/11/18/rules-self-driving-cars/",
    "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2024/11/BIZ-AUTO-TRUMP-AUTONOMOUS-RULES-SJ.jpg?w=1024&h=682",
    "publishedAt": "2024-11-18T18:01:12Z",
    "content": "David Welch and Allyson Versprille | (TNS) Bloomberg News\r\nMembers of President-elect Donald Trump’s transition team have told advisers they plan to make a federal framework for self-driving vehicles… [+5440 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times"
    },
    "author": "Bruce Golding",
    "title": "Trump Administration Could Ease Rules For Self-Driving Cars: Report",
    "description": "The move could benefit billionaire Tesla CEO Elon Musk, who was recently picked to help \"dismantle\" the federal bureaucracy and \"slash excess regulations.\"",
    "url": "https://www.ibtimes.com/self-driving-cars-rules-trump-administration-3751596",
    "urlToImage": "https://d.ibtimes.com/en/full/4562729/self-driving-taxi.jpg",
    "publishedAt": "2024-11-18T17:55:45Z",
    "content": "President-elect Donald Trump's transition team reportedly plans to make federal approval of self-driving cars a priority for his nominee to lead the Transportation Department — a move that could bene… [+2091 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "G20: Joe Biden pledges record $4 billion to World Bank fund for poorest countries",
    "description": "President Biden pledged a record $4 billion to the World Bank's fund for the poorest countries, exceeding the previous U.S. contribution. The pledge, announced at the G20 summit, comes as the World Bank seeks a record replenishment for its International Devel…",
    "url": "https://economictimes.indiatimes.com/news/international/world-news/g20-joe-biden-pledges-record-4-billion-to-world-bank-fund-for-poorest-countries/articleshow/115426066.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-115426094,width-1200,height-630,imgsize-96796,overlay-economictimes/articleshow.jpg",
    "publishedAt": "2024-11-18T17:54:33Z",
    "content": "U.S. President Joe Biden pledged a $4 billion U.S. contribution to the World Bank's International Development Association fund for the world's poorest countries, two sources with knowledge of the com… [+2257 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Bloomberg",
    "title": "Trump to push self-driving vehicles in boost to Tesla",
    "description": "President-elect Donald Trump's transition team is prioritizing a federal framework for fully self-driving vehicles. This move would benefit Tesla CEO Elon Musk, as Tesla heavily invests in self-driving technology. While the Transportation Department can adjus…",
    "url": "https://economictimes.indiatimes.com/news/international/business/trump-to-push-self-driving-vehicles-in-boost-to-tesla/articleshow/115425975.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-115425986,width-1200,height-630,imgsize-92562,overlay-economictimes/articleshow.jpg",
    "publishedAt": "2024-11-18T17:49:50Z",
    "content": "Marketing\r\nFuture of Marketing &amp; Branding Masterclass\r\nBy - Dr. David Aaker, Professor Emeritus at the Haas School of Business, UC Berkeley, Author | Speaker | Thought Leader | Branding Consultan… [+14 chars]"
    }
    ]
    }
   
      
return(
    <div className="news-container">
    <div className="news-grid">
    {responsejson.articles.map((article,index)=>{
     return <div className="news-card">
<div className="news-content">
<h2 className="news-headline">{article.title}</h2>
        <img src={article.urlToImage || "https://via.placeholder.com/150"} className="news-image"/>
        <p className="news-content">{article.description||"some error"}</p> 
        Author:<strong>{article.author||"unknown"}</strong>
        <br></br>
        <a href={article.url}><strong>Read more</strong></a>
</div>
        </div>
    })}
    </div>
    </div>
)}
export default MapDemo;