// Define User type
export interface User {
  id: number;
  name: string;
  email: string;
  branch: string;
  role: string;
}

// Define Branch type
export interface Branch {
  id: number;
  branchName: string;
  location: string;
  address: string;
  contactNumber: string;
  email: string;
}

// Define Device type
export interface Device {
  serial: string;
  mac: string;
  branch: string;
  accessPointMac: string;
  battery: number; // Percentage (0-100)
}


// Constant array of mock user data
export const users: User[] = [{
    "id": 916509,
    "name": "Elisha Hatherley",
    "email": "ehatherley0@weibo.com",
    "branch": "Izio",
    "role": "Ms"
  }, {
    "id": 579002,
    "name": "Malorie Powlett",
    "email": "mpowlett1@answers.com",
    "branch": "Quinu",
    "role": "Mrs"
  }, {
    "id": 962505,
    "name": "Stephen Halversen",
    "email": "shalversen2@unicef.org",
    "branch": "Brainbox",
    "role": "Ms"
  }, {
    "id": 326473,
    "name": "Ketty Ortiger",
    "email": "kortiger3@zdnet.com",
    "branch": "Cogilith",
    "role": "Rev"
  }, {
    "id": 659615,
    "name": "Lira Weeks",
    "email": "lweeks4@yandex.ru",
    "branch": "Tagtune",
    "role": "Honorable"
  }, {
    "id": 288814,
    "name": "Dwight Kempstone",
    "email": "dkempstone5@imgur.com",
    "branch": "Gevee",
    "role": "Mr"
  }, {
    "id": 226333,
    "name": "Monty Cruikshank",
    "email": "mcruikshank6@newsvine.com",
    "branch": "Jabbersphere",
    "role": "Mrs"
  }, {
    "id": 746046,
    "name": "Marlyn Nehlsen",
    "email": "mnehlsen7@walmart.com",
    "branch": "Tagchat",
    "role": "Rev"
  }, {
    "id": 699581,
    "name": "Rudolf Marquese",
    "email": "rmarquese8@multiply.com",
    "branch": "Yadel",
    "role": "Rev"
  }, {
    "id": 519520,
    "name": "Felic Colleton",
    "email": "fcolleton9@com.com",
    "branch": "Fliptune",
    "role": "Dr"
  }, {
    "id": 839843,
    "name": "Erie Elcomb",
    "email": "eelcomba@zimbio.com",
    "branch": "Vinte",
    "role": "Honorable"
  }, {
    "id": 917198,
    "name": "Caril McKellen",
    "email": "cmckellenb@hc360.com",
    "branch": "Riffpedia",
    "role": "Dr"
  }, {
    "id": 672910,
    "name": "Miquela Opdenorth",
    "email": "mopdenorthc@google.es",
    "branch": "Linkbuzz",
    "role": "Rev"
  }, {
    "id": 399099,
    "name": "Kendre Todarello",
    "email": "ktodarellod@hao123.com",
    "branch": "Agimba",
    "role": "Ms"
  }, {
    "id": 948606,
    "name": "Victor Olney",
    "email": "volneye@arstechnica.com",
    "branch": "Oodoo",
    "role": "Ms"
  }, {
    "id": 463719,
    "name": "Livvie Ferraraccio",
    "email": "lferraracciof@cyberchimps.com",
    "branch": "Topicstorm",
    "role": "Mrs"
  }, {
    "id": 303098,
    "name": "Urbano Itzchaki",
    "email": "uitzchakig@discuz.net",
    "branch": "Twitterbridge",
    "role": "Honorable"
  }, {
    "id": 867562,
    "name": "Ed Bertrand",
    "email": "ebertrandh@epa.gov",
    "branch": "Jabbersphere",
    "role": "Ms"
  }, {
    "id": 813792,
    "name": "Benjamen Ulster",
    "email": "bulsteri@g.co",
    "branch": "Thoughtbeat",
    "role": "Mrs"
  }, {
    "id": 493261,
    "name": "Lewiss Cobbing",
    "email": "lcobbingj@un.org",
    "branch": "Nlounge",
    "role": "Ms"
  }, {
    "id": 257701,
    "name": "Gerrilee Kerbey",
    "email": "gkerbeyk@buzzfeed.com",
    "branch": "Bubbletube",
    "role": "Mrs"
  }, {
    "id": 475179,
    "name": "Donica Kerwood",
    "email": "dkerwoodl@si.edu",
    "branch": "Browsetype",
    "role": "Dr"
  }, {
    "id": 551431,
    "name": "Mead Hague",
    "email": "mhaguem@macromedia.com",
    "branch": "Jetwire",
    "role": "Mr"
  }, {
    "id": 149362,
    "name": "Merle Cromly",
    "email": "mcromlyn@macromedia.com",
    "branch": "Trudoo",
    "role": "Mr"
  }, {
    "id": 761172,
    "name": "Suzie Mumbey",
    "email": "smumbeyo@google.com.hk",
    "branch": "Livefish",
    "role": "Dr"
  }, {
    "id": 947164,
    "name": "Rowe Robberecht",
    "email": "rrobberechtp@chicagotribune.com",
    "branch": "Skinder",
    "role": "Honorable"
  }, {
    "id": 313447,
    "name": "Alia O'Hannay",
    "email": "aohannayq@japanpost.jp",
    "branch": "Browsetype",
    "role": "Rev"
  }, {
    "id": 349912,
    "name": "Sibyl Fredi",
    "email": "sfredir@miitbeian.gov.cn",
    "branch": "Thoughtblab",
    "role": "Mrs"
  }, {
    "id": 876230,
    "name": "Desdemona Marchington",
    "email": "dmarchingtons@yellowpages.com",
    "branch": "Yabox",
    "role": "Mrs"
  }, {
    "id": 195811,
    "name": "Chaddy Haddock",
    "email": "chaddockt@jigsy.com",
    "branch": "Youspan",
    "role": "Mr"
  }, {
    "id": 397889,
    "name": "Jenica Knowller",
    "email": "jknowlleru@csmonitor.com",
    "branch": "Thoughtbridge",
    "role": "Ms"
  }, {
    "id": 805303,
    "name": "Nico Kreuzer",
    "email": "nkreuzerv@dmoz.org",
    "branch": "Edgeblab",
    "role": "Ms"
  }, {
    "id": 630894,
    "name": "Lark Reddin",
    "email": "lreddinw@e-recht24.de",
    "branch": "Babblestorm",
    "role": "Rev"
  }, {
    "id": 343419,
    "name": "Elton Dillow",
    "email": "edillowx@homestead.com",
    "branch": "Kaymbo",
    "role": "Dr"
  }, {
    "id": 438414,
    "name": "Jasmine Legion",
    "email": "jlegiony@twitter.com",
    "branch": "Myworks",
    "role": "Mrs"
  }, {
    "id": 342795,
    "name": "Kienan Garretson",
    "email": "kgarretsonz@ustream.tv",
    "branch": "Thoughtworks",
    "role": "Mr"
  }, {
    "id": 917350,
    "name": "Town Beynkn",
    "email": "tbeynkn10@liveinternet.ru",
    "branch": "Avamba",
    "role": "Mrs"
  }, {
    "id": 499870,
    "name": "Aeriela Goodwill",
    "email": "agoodwill11@stanford.edu",
    "branch": "Eamia",
    "role": "Rev"
  }, {
    "id": 745669,
    "name": "Heywood Roscam",
    "email": "hroscam12@lulu.com",
    "branch": "Blogtags",
    "role": "Mrs"
  }, {
    "id": 494195,
    "name": "Evyn Arrighini",
    "email": "earrighini13@goo.gl",
    "branch": "Skynoodle",
    "role": "Rev"
  }, {
    "id": 328230,
    "name": "Letty Waine",
    "email": "lwaine14@diigo.com",
    "branch": "Buzzdog",
    "role": "Ms"
  }, {
    "id": 963663,
    "name": "Misti Bentson",
    "email": "mbentson15@redcross.org",
    "branch": "Avamm",
    "role": "Rev"
  }, {
    "id": 878511,
    "name": "Sayres Pirkis",
    "email": "spirkis16@mail.ru",
    "branch": "Kanoodle",
    "role": "Honorable"
  }, {
    "id": 990518,
    "name": "Lil Huffey",
    "email": "lhuffey17@jigsy.com",
    "branch": "Realpoint",
    "role": "Honorable"
  }, {
    "id": 387386,
    "name": "Rey Brocking",
    "email": "rbrocking18@discovery.com",
    "branch": "Jabbersphere",
    "role": "Dr"
  }, {
    "id": 64939,
    "name": "Philis Hotchkin",
    "email": "photchkin19@edublogs.org",
    "branch": "Devcast",
    "role": "Ms"
  }, {
    "id": 829432,
    "name": "Raviv Allen",
    "email": "rallen1a@cdbaby.com",
    "branch": "Kazio",
    "role": "Ms"
  }, {
    "id": 169140,
    "name": "Stephani Shrieve",
    "email": "sshrieve1b@photobucket.com",
    "branch": "Wordtune",
    "role": "Dr"
  }, {
    "id": 177911,
    "name": "Kristien Mabon",
    "email": "kmabon1c@naver.com",
    "branch": "Mynte",
    "role": "Mrs"
  }, {
    "id": 971002,
    "name": "Ravid Verralls",
    "email": "rverralls1d@xrea.com",
    "branch": "Agivu",
    "role": "Honorable"
  }, {
    "id": 843851,
    "name": "Chastity Sweeten",
    "email": "csweeten1e@mail.ru",
    "branch": "Cogibox",
    "role": "Mr"
  }, {
    "id": 380413,
    "name": "Bartlett De Minico",
    "email": "bde1f@mapy.cz",
    "branch": "Skinder",
    "role": "Ms"
  }, {
    "id": 59508,
    "name": "Ray Glencross",
    "email": "rglencross1g@google.es",
    "branch": "Thoughtstorm",
    "role": "Honorable"
  }, {
    "id": 136796,
    "name": "Willy Peatheyjohns",
    "email": "wpeatheyjohns1h@cornell.edu",
    "branch": "Skyndu",
    "role": "Mr"
  }, {
    "id": 470154,
    "name": "Anselm Bakhrushin",
    "email": "abakhrushin1i@buzzfeed.com",
    "branch": "Realbuzz",
    "role": "Mrs"
  }, {
    "id": 354424,
    "name": "Ashley Di Frisco",
    "email": "adi1j@infoseek.co.jp",
    "branch": "Yacero",
    "role": "Dr"
  }, {
    "id": 519126,
    "name": "Helli MacCumiskey",
    "email": "hmaccumiskey1k@google.it",
    "branch": "Twimm",
    "role": "Dr"
  }, {
    "id": 811081,
    "name": "Devinne Alldre",
    "email": "dalldre1l@ebay.com",
    "branch": "Flashpoint",
    "role": "Dr"
  }, {
    "id": 883311,
    "name": "Lavina Tredgold",
    "email": "ltredgold1m@slate.com",
    "branch": "Photolist",
    "role": "Dr"
  }, {
    "id": 713937,
    "name": "Paola Wynn",
    "email": "pwynn1n@dailymail.co.uk",
    "branch": "Talane",
    "role": "Ms"
  }, {
    "id": 53434,
    "name": "Colman Crombie",
    "email": "ccrombie1o@soup.io",
    "branch": "Realbridge",
    "role": "Dr"
  }, {
    "id": 650859,
    "name": "Maressa Crosse",
    "email": "mcrosse1p@tamu.edu",
    "branch": "Katz",
    "role": "Rev"
  }, {
    "id": 538156,
    "name": "Melva Yakebovich",
    "email": "myakebovich1q@wunderground.com",
    "branch": "Dynabox",
    "role": "Honorable"
  }, {
    "id": 955605,
    "name": "Shaw Olenin",
    "email": "solenin1r@fema.gov",
    "branch": "Pixoboo",
    "role": "Mr"
  }, {
    "id": 791086,
    "name": "Emmit Standbrooke",
    "email": "estandbrooke1s@diigo.com",
    "branch": "Browsebug",
    "role": "Mr"
  }, {
    "id": 469549,
    "name": "Erroll Poplee",
    "email": "epoplee1t@jigsy.com",
    "branch": "Rhybox",
    "role": "Dr"
  }, {
    "id": 983563,
    "name": "Haslett Iley",
    "email": "hiley1u@virginia.edu",
    "branch": "Twitterlist",
    "role": "Rev"
  }, {
    "id": 451148,
    "name": "Ruben Purver",
    "email": "rpurver1v@ehow.com",
    "branch": "Avamm",
    "role": "Honorable"
  }, {
    "id": 250716,
    "name": "Kennedy Oldfield",
    "email": "koldfield1w@mozilla.org",
    "branch": "Twitterwire",
    "role": "Honorable"
  }, {
    "id": 349371,
    "name": "Conni Leward",
    "email": "cleward1x@homestead.com",
    "branch": "LiveZ",
    "role": "Rev"
  }, {
    "id": 585218,
    "name": "Neill Cantua",
    "email": "ncantua1y@posterous.com",
    "branch": "Jatri",
    "role": "Dr"
  }, {
    "id": 651610,
    "name": "Boyd Dutchburn",
    "email": "bdutchburn1z@tinyurl.com",
    "branch": "Realblab",
    "role": "Ms"
  }, {
    "id": 380243,
    "name": "Eugenius Bernardinelli",
    "email": "ebernardinelli20@is.gd",
    "branch": "Roombo",
    "role": "Dr"
  }, {
    "id": 477744,
    "name": "Van Tollerfield",
    "email": "vtollerfield21@yellowpages.com",
    "branch": "Quire",
    "role": "Honorable"
  }, {
    "id": 442120,
    "name": "Melicent Malyj",
    "email": "mmalyj22@nba.com",
    "branch": "Twimbo",
    "role": "Rev"
  }, {
    "id": 9388,
    "name": "Bettye Brampton",
    "email": "bbrampton23@ycombinator.com",
    "branch": "Jaxbean",
    "role": "Honorable"
  }, {
    "id": 634610,
    "name": "Godart Handlin",
    "email": "ghandlin24@accuweather.com",
    "branch": "Buzzshare",
    "role": "Dr"
  }, {
    "id": 556767,
    "name": "Pammie Coche",
    "email": "pcoche25@ameblo.jp",
    "branch": "Edgewire",
    "role": "Mr"
  }, {
    "id": 601352,
    "name": "Brod Abrahams",
    "email": "babrahams26@51.la",
    "branch": "Yodel",
    "role": "Rev"
  }, {
    "id": 378348,
    "name": "Bruis Penketh",
    "email": "bpenketh27@naver.com",
    "branch": "Wordify",
    "role": "Rev"
  }, {
    "id": 918258,
    "name": "Way Castiblanco",
    "email": "wcastiblanco28@edublogs.org",
    "branch": "Babbleset",
    "role": "Honorable"
  }, {
    "id": 912649,
    "name": "Inge Scothron",
    "email": "iscothron29@geocities.com",
    "branch": "Chatterbridge",
    "role": "Mrs"
  }, {
    "id": 739170,
    "name": "Moore Sarah",
    "email": "msarah2a@shop-pro.jp",
    "branch": "Fivebridge",
    "role": "Dr"
  }, {
    "id": 271258,
    "name": "Barde Biscomb",
    "email": "bbiscomb2b@tripadvisor.com",
    "branch": "Skipfire",
    "role": "Dr"
  }, {
    "id": 345687,
    "name": "Kiel Agott",
    "email": "kagott2c@aol.com",
    "branch": "Zoomlounge",
    "role": "Mr"
  }, {
    "id": 383949,
    "name": "Mariellen Churchley",
    "email": "mchurchley2d@kickstarter.com",
    "branch": "Skinder",
    "role": "Dr"
  }, {
    "id": 77938,
    "name": "Andrew Porte",
    "email": "aporte2e@example.com",
    "branch": "Photofeed",
    "role": "Dr"
  }, {
    "id": 120885,
    "name": "Asher Creffield",
    "email": "acreffield2f@tamu.edu",
    "branch": "Npath",
    "role": "Ms"
  }, {
    "id": 158035,
    "name": "Page Sweatman",
    "email": "psweatman2g@google.ca",
    "branch": "Skimia",
    "role": "Rev"
  }, {
    "id": 910474,
    "name": "Felice Foulgham",
    "email": "ffoulgham2h@bigcartel.com",
    "branch": "Yabox",
    "role": "Ms"
  }, {
    "id": 311833,
    "name": "Constantine Ivanisov",
    "email": "civanisov2i@ning.com",
    "branch": "Eabox",
    "role": "Ms"
  }, {
    "id": 71369,
    "name": "Brandy Sisse",
    "email": "bsisse2j@t.co",
    "branch": "Buzzbean",
    "role": "Ms"
  }, {
    "id": 834008,
    "name": "Iain Northridge",
    "email": "inorthridge2k@salon.com",
    "branch": "Quimm",
    "role": "Honorable"
  }, {
    "id": 957396,
    "name": "Nate Rozycki",
    "email": "nrozycki2l@csmonitor.com",
    "branch": "Zoomzone",
    "role": "Mr"
  }, {
    "id": 295076,
    "name": "Sheffy Atack",
    "email": "satack2m@php.net",
    "branch": "Tekfly",
    "role": "Mrs"
  }, {
    "id": 600016,
    "name": "Sibylle Chilcotte",
    "email": "schilcotte2n@cpanel.net",
    "branch": "Zoomlounge",
    "role": "Ms"
  }, {
    "id": 873117,
    "name": "Doloritas Duncan",
    "email": "dduncan2o@nytimes.com",
    "branch": "Plajo",
    "role": "Honorable"
  }, {
    "id": 931070,
    "name": "Raphaela Willcox",
    "email": "rwillcox2p@istockphoto.com",
    "branch": "Eabox",
    "role": "Honorable"
  }, {
    "id": 339253,
    "name": "Anne Eunson",
    "email": "aeunson2q@wisc.edu",
    "branch": "Mymm",
    "role": "Ms"
  }, {
    "id": 462280,
    "name": "Skip Vaughten",
    "email": "svaughten2r@paginegialle.it",
    "branch": "Photojam",
    "role": "Rev"
  }]
  ;

export const branches: Branch[] = [
  {
    id: 1,
    branchName: "Main Branch",
    location: "New York",
    address: "123 Main St, New York, NY 10001",
    contactNumber: "555-1234",
    email: "main.branch@example.com",
  },
  {
    id: 2,
    branchName: "Westside Branch",
    location: "Los Angeles",
    address: "456 Sunset Blvd, Los Angeles, CA 90001",
    contactNumber: "555-5678",
    email: "westside.branch@example.com",
  },
  {
    id: 3,
    branchName: "Eastside Branch",
    location: "Chicago",
    address: "789 Lake Shore Dr, Chicago, IL 60601",
    contactNumber: "555-8765",
    email: "eastside.branch@example.com",
  },
  {
    id: 4,
    branchName: "North Branch",
    location: "Seattle",
    address: "101 Pine St, Seattle, WA 98101",
    contactNumber: "555-4321",
    email: "north.branch@example.com",
  },
  {
    id: 5,
    branchName: "South Branch",
    location: "Miami",
    address: "202 Ocean Dr, Miami, FL 33101",
    contactNumber: "555-1357",
    email: "south.branch@example.com",
  },
  {
    id: 6,
    branchName: "Central Branch",
    location: "Dallas",
    address: "303 Elm St, Dallas, TX 75201",
    contactNumber: "555-2468",
    email: "central.branch@example.com",
  },
];

export const devices: Device[] = [{
    "serial": "SN77889",
    "mac": "EC-91-6C-7C-EE-31",
    "branch": "Branch A",
    "accessPointMac": "A1-43-93-FB-BE-BF",
    "battery": 38
  }, {
    "serial": "SN44556",
    "mac": "12-BB-38-EB-D7-05",
    "branch": "Branch B",
    "accessPointMac": "5A-65-7C-C0-6E-D7",
    "battery": 44
  }, {
    "serial": "SN11223",
    "mac": "F6-45-1E-3D-C5-67",
    "branch": "Branch D",
    "accessPointMac": "9F-D0-C0-23-8B-25",
    "battery": 63
  }, {
    "serial": "SN11223",
    "mac": "A1-B9-F9-D2-D6-17",
    "branch": "Branch C",
    "accessPointMac": "2C-1F-5C-01-5D-C9",
    "battery": 95
  }, {
    "serial": "SN77889",
    "mac": "39-D5-45-0F-58-72",
    "branch": "Branch C",
    "accessPointMac": "C5-25-DE-5C-3A-BA",
    "battery": 63
  }, {
    "serial": "SN44556",
    "mac": "3A-01-B8-03-65-7E",
    "branch": "Branch D",
    "accessPointMac": "D3-2F-EF-5E-26-4D",
    "battery": 68
  }, {
    "serial": "SN67890",
    "mac": "C3-3C-2F-A3-FC-FD",
    "branch": "Branch B",
    "accessPointMac": "0A-AB-F6-59-01-FF",
    "battery": 56
  }, {
    "serial": "SN67890",
    "mac": "83-FE-A9-BF-16-5A",
    "branch": "Branch C",
    "accessPointMac": "EE-7B-B7-CF-83-3F",
    "battery": 27
  }, {
    "serial": "SN67890",
    "mac": "15-D0-74-F0-B8-1C",
    "branch": "Branch D",
    "accessPointMac": "C6-F2-D1-C4-6F-2C",
    "battery": 25
  }, {
    "serial": "SN12345",
    "mac": "32-8D-E3-D8-E9-7C",
    "branch": "Branch B",
    "accessPointMac": "B6-D4-36-D6-44-16",
    "battery": 72
  }, {
    "serial": "SN11223",
    "mac": "41-9A-07-F5-B3-E0",
    "branch": "Branch B",
    "accessPointMac": "6D-D5-9D-E4-B2-F8",
    "battery": 85
  }, {
    "serial": "SN67890",
    "mac": "79-7B-5D-71-87-2C",
    "branch": "Branch D",
    "accessPointMac": "71-AE-DA-8D-85-8F",
    "battery": 27
  }, {
    "serial": "SN11223",
    "mac": "A4-31-41-1A-FD-01",
    "branch": "Branch C",
    "accessPointMac": "1A-E2-B2-C6-75-3E",
    "battery": 84
  }, {
    "serial": "SN67890",
    "mac": "AC-23-2D-2E-2C-54",
    "branch": "Branch D",
    "accessPointMac": "CA-BD-2B-F9-89-91",
    "battery": 48
  }, {
    "serial": "SN67890",
    "mac": "42-D0-1B-86-7F-84",
    "branch": "Branch C",
    "accessPointMac": "36-AC-19-54-A4-78",
    "battery": 20
  }, {
    "serial": "SN11223",
    "mac": "00-7E-23-55-F0-EB",
    "branch": "Branch B",
    "accessPointMac": "0A-62-FF-85-2B-13",
    "battery": 37
  }, {
    "serial": "SN11223",
    "mac": "56-E0-3D-A2-CF-BE",
    "branch": "Branch D",
    "accessPointMac": "64-B4-F5-65-85-20",
    "battery": 59
  }, {
    "serial": "SN11223",
    "mac": "AA-83-FB-0A-1F-07",
    "branch": "Branch B",
    "accessPointMac": "B7-F2-F7-1A-97-D2",
    "battery": 86
  }, {
    "serial": "SN77889",
    "mac": "6B-C8-A3-24-12-44",
    "branch": "Branch D",
    "accessPointMac": "91-F1-EF-B3-BC-7B",
    "battery": 34
  }, {
    "serial": "SN77889",
    "mac": "2A-B3-EF-78-1B-C0",
    "branch": "Branch B",
    "accessPointMac": "A7-08-86-AC-C3-6F",
    "battery": 65
  }, {
    "serial": "SN44556",
    "mac": "00-B1-36-05-39-AB",
    "branch": "Branch B",
    "accessPointMac": "1A-51-41-F1-0F-E7",
    "battery": 87
  }, {
    "serial": "SN67890",
    "mac": "65-B3-52-80-1E-2D",
    "branch": "Branch B",
    "accessPointMac": "97-5F-64-4F-3D-D6",
    "battery": 30
  }, {
    "serial": "SN11223",
    "mac": "AD-F3-C9-17-8C-16",
    "branch": "Branch B",
    "accessPointMac": "3B-13-BC-0C-34-BC",
    "battery": 74
  }, {
    "serial": "SN77889",
    "mac": "20-7A-EB-4F-94-8B",
    "branch": "Branch C",
    "accessPointMac": "D7-F8-94-C7-55-6B",
    "battery": 62
  }, {
    "serial": "SN77889",
    "mac": "AD-01-FA-2D-BA-E8",
    "branch": "Branch D",
    "accessPointMac": "CF-D1-93-0B-59-7A",
    "battery": 44
  }, {
    "serial": "SN77889",
    "mac": "C6-93-D0-F1-2C-07",
    "branch": "Branch A",
    "accessPointMac": "86-54-EE-E9-53-5C",
    "battery": 76
  }, {
    "serial": "SN44556",
    "mac": "6E-4C-6A-67-C1-A0",
    "branch": "Branch B",
    "accessPointMac": "F5-D7-5A-FA-1B-07",
    "battery": 22
  }, {
    "serial": "SN44556",
    "mac": "8C-EF-A9-8F-0F-2A",
    "branch": "Branch D",
    "accessPointMac": "11-4F-A5-6F-E4-9F",
    "battery": 91
  }, {
    "serial": "SN67890",
    "mac": "C9-96-E2-CB-FC-BD",
    "branch": "Branch B",
    "accessPointMac": "9F-F1-00-B1-4F-E8",
    "battery": 83
  }, {
    "serial": "SN12345",
    "mac": "1A-DA-D7-D0-F9-EA",
    "branch": "Branch D",
    "accessPointMac": "1C-92-EF-69-18-25",
    "battery": 30
  }, {
    "serial": "SN67890",
    "mac": "A9-9F-30-94-62-98",
    "branch": "Branch A",
    "accessPointMac": "E0-3E-00-D3-26-84",
    "battery": 42
  }, {
    "serial": "SN67890",
    "mac": "08-A0-9A-C3-3E-42",
    "branch": "Branch C",
    "accessPointMac": "B1-B9-32-A0-C7-C1",
    "battery": 11
  }, {
    "serial": "SN11223",
    "mac": "C3-89-40-99-F2-51",
    "branch": "Branch B",
    "accessPointMac": "06-2C-80-04-83-18",
    "battery": 84
  }, {
    "serial": "SN44556",
    "mac": "B0-B9-B3-55-F0-39",
    "branch": "Branch D",
    "accessPointMac": "A6-F6-2A-0F-BB-DF",
    "battery": 93
  }, {
    "serial": "SN11223",
    "mac": "4F-7C-70-86-42-91",
    "branch": "Branch B",
    "accessPointMac": "00-0E-43-10-58-9C",
    "battery": 97
  }, {
    "serial": "SN77889",
    "mac": "2E-22-4C-66-61-2E",
    "branch": "Branch D",
    "accessPointMac": "5B-26-09-84-82-26",
    "battery": 2
  }, {
    "serial": "SN67890",
    "mac": "FC-5F-62-36-ED-A8",
    "branch": "Branch B",
    "accessPointMac": "CA-53-2A-2A-B7-EF",
    "battery": 40
  }, {
    "serial": "SN12345",
    "mac": "9C-37-DD-7A-F3-EC",
    "branch": "Branch D",
    "accessPointMac": "CD-0D-51-AF-2F-8C",
    "battery": 99
  }, {
    "serial": "SN77889",
    "mac": "F5-2E-98-09-1B-A2",
    "branch": "Branch A",
    "accessPointMac": "FF-C2-AD-1E-D9-C8",
    "battery": 66
  }, {
    "serial": "SN44556",
    "mac": "5A-27-CF-47-06-6D",
    "branch": "Branch A",
    "accessPointMac": "6A-06-0C-46-F5-33",
    "battery": 63
  }, {
    "serial": "SN67890",
    "mac": "9E-6C-27-E3-DC-35",
    "branch": "Branch A",
    "accessPointMac": "A2-30-36-55-59-FD",
    "battery": 50
  }, {
    "serial": "SN44556",
    "mac": "BB-35-29-9F-7D-25",
    "branch": "Branch B",
    "accessPointMac": "EC-9F-74-B6-E7-EC",
    "battery": 43
  }, {
    "serial": "SN44556",
    "mac": "FB-E3-B5-11-86-8D",
    "branch": "Branch A",
    "accessPointMac": "83-6E-55-17-34-65",
    "battery": 14
  }, {
    "serial": "SN12345",
    "mac": "34-FC-1E-8F-FD-C4",
    "branch": "Branch A",
    "accessPointMac": "91-AB-C4-7E-C7-6D",
    "battery": 75
  }, {
    "serial": "SN11223",
    "mac": "CF-88-52-37-8D-58",
    "branch": "Branch D",
    "accessPointMac": "8F-D2-A9-21-F1-01",
    "battery": 25
  }, {
    "serial": "SN12345",
    "mac": "44-27-ED-0D-DC-42",
    "branch": "Branch D",
    "accessPointMac": "0D-27-B8-04-3D-92",
    "battery": 0
  }, {
    "serial": "SN67890",
    "mac": "49-8D-B6-E4-59-8F",
    "branch": "Branch C",
    "accessPointMac": "A3-56-E7-92-CF-50",
    "battery": 97
  }, {
    "serial": "SN11223",
    "mac": "34-9E-5A-E8-A1-87",
    "branch": "Branch C",
    "accessPointMac": "11-5A-62-9B-85-BC",
    "battery": 36
  }, {
    "serial": "SN11223",
    "mac": "27-CE-59-37-6D-5A",
    "branch": "Branch A",
    "accessPointMac": "05-C8-C9-A7-C3-6D",
    "battery": 48
  }, {
    "serial": "SN11223",
    "mac": "B7-5A-73-A6-15-9D",
    "branch": "Branch B",
    "accessPointMac": "C0-AB-04-69-1E-95",
    "battery": 68
  }, {
    "serial": "SN67890",
    "mac": "E7-FF-18-D2-ED-AB",
    "branch": "Branch C",
    "accessPointMac": "F8-D8-57-BA-D0-83",
    "battery": 96
  }, {
    "serial": "SN11223",
    "mac": "36-64-B5-E8-EC-4F",
    "branch": "Branch A",
    "accessPointMac": "9F-9F-12-19-9E-E8",
    "battery": 36
  }, {
    "serial": "SN11223",
    "mac": "A3-D7-F4-81-51-3A",
    "branch": "Branch D",
    "accessPointMac": "75-83-BA-17-9D-97",
    "battery": 21
  }, {
    "serial": "SN67890",
    "mac": "CC-62-C6-46-CF-F6",
    "branch": "Branch B",
    "accessPointMac": "F4-F1-60-7D-07-9F",
    "battery": 0
  }, {
    "serial": "SN11223",
    "mac": "9C-7A-9B-C1-5D-4D",
    "branch": "Branch C",
    "accessPointMac": "8E-04-44-AB-7E-7D",
    "battery": 33
  }, {
    "serial": "SN44556",
    "mac": "12-97-A4-E8-90-1D",
    "branch": "Branch D",
    "accessPointMac": "2C-94-AB-C1-A8-7C",
    "battery": 55
  }, {
    "serial": "SN11223",
    "mac": "F6-AE-62-73-3B-AA",
    "branch": "Branch A",
    "accessPointMac": "F1-F3-D1-13-7D-F0",
    "battery": 81
  }, {
    "serial": "SN67890",
    "mac": "15-67-22-04-A3-49",
    "branch": "Branch A",
    "accessPointMac": "6E-5B-59-9F-63-76",
    "battery": 82
  }, {
    "serial": "SN67890",
    "mac": "59-B0-25-2A-D4-9D",
    "branch": "Branch A",
    "accessPointMac": "0D-FC-33-0C-CD-22",
    "battery": 30
  }, {
    "serial": "SN67890",
    "mac": "C8-B2-25-B1-9F-A6",
    "branch": "Branch D",
    "accessPointMac": "FE-9A-AE-5F-AB-AD",
    "battery": 98
  }, {
    "serial": "SN11223",
    "mac": "7C-F4-45-F8-67-F9",
    "branch": "Branch C",
    "accessPointMac": "ED-78-72-22-EF-33",
    "battery": 27
  }, {
    "serial": "SN12345",
    "mac": "07-6B-66-88-05-89",
    "branch": "Branch A",
    "accessPointMac": "1B-B9-6E-49-6B-AB",
    "battery": 93
  }, {
    "serial": "SN67890",
    "mac": "D2-7C-F1-0E-51-6D",
    "branch": "Branch D",
    "accessPointMac": "55-7D-E3-26-F3-29",
    "battery": 16
  }, {
    "serial": "SN44556",
    "mac": "50-C8-62-89-A8-D4",
    "branch": "Branch A",
    "accessPointMac": "CF-92-EC-97-68-D8",
    "battery": 53
  }, {
    "serial": "SN77889",
    "mac": "22-A1-C1-49-D0-4A",
    "branch": "Branch A",
    "accessPointMac": "B7-9E-5D-81-C4-46",
    "battery": 97
  }, {
    "serial": "SN11223",
    "mac": "1A-DF-F4-14-70-70",
    "branch": "Branch A",
    "accessPointMac": "F8-F1-24-86-56-D9",
    "battery": 46
  }, {
    "serial": "SN44556",
    "mac": "7D-2E-44-51-FE-A4",
    "branch": "Branch C",
    "accessPointMac": "73-87-76-FD-64-12",
    "battery": 63
  }, {
    "serial": "SN12345",
    "mac": "17-2C-9D-9D-60-BF",
    "branch": "Branch A",
    "accessPointMac": "86-33-19-AB-7C-6D",
    "battery": 99
  }, {
    "serial": "SN44556",
    "mac": "15-53-02-46-33-50",
    "branch": "Branch A",
    "accessPointMac": "7C-C9-6D-29-EB-8F",
    "battery": 40
  }, {
    "serial": "SN67890",
    "mac": "13-5A-64-57-00-A5",
    "branch": "Branch A",
    "accessPointMac": "1E-DE-0F-49-CD-9B",
    "battery": 29
  }, {
    "serial": "SN12345",
    "mac": "64-8B-4A-64-EE-9E",
    "branch": "Branch D",
    "accessPointMac": "72-BE-4A-C6-67-D5",
    "battery": 82
  }, {
    "serial": "SN11223",
    "mac": "D4-97-90-21-E3-D9",
    "branch": "Branch B",
    "accessPointMac": "4F-D9-71-68-8B-64",
    "battery": 79
  }, {
    "serial": "SN12345",
    "mac": "98-32-09-E6-82-4E",
    "branch": "Branch D",
    "accessPointMac": "09-BA-19-56-7B-2E",
    "battery": 30
  }, {
    "serial": "SN67890",
    "mac": "B5-4D-4C-2D-D9-93",
    "branch": "Branch D",
    "accessPointMac": "16-6B-98-EE-EC-3D",
    "battery": 69
  }, {
    "serial": "SN77889",
    "mac": "45-8F-35-5B-64-62",
    "branch": "Branch A",
    "accessPointMac": "AE-F8-67-A3-6D-E2",
    "battery": 19
  }, {
    "serial": "SN12345",
    "mac": "B6-E5-3F-99-AA-2D",
    "branch": "Branch D",
    "accessPointMac": "A6-DE-95-76-B2-5A",
    "battery": 20
  }, {
    "serial": "SN12345",
    "mac": "61-6F-AD-0B-1F-EB",
    "branch": "Branch B",
    "accessPointMac": "DD-07-E2-89-E7-34",
    "battery": 15
  }, {
    "serial": "SN44556",
    "mac": "DD-74-9E-02-1A-DE",
    "branch": "Branch B",
    "accessPointMac": "3F-54-E8-2A-93-72",
    "battery": 98
  }, {
    "serial": "SN12345",
    "mac": "CF-E7-EC-28-27-3E",
    "branch": "Branch A",
    "accessPointMac": "2B-6F-A3-7D-72-43",
    "battery": 28
  }, {
    "serial": "SN44556",
    "mac": "34-D7-8A-9C-5E-D6",
    "branch": "Branch C",
    "accessPointMac": "43-B7-55-39-E7-13",
    "battery": 2
  }, {
    "serial": "SN77889",
    "mac": "FF-CC-BA-EB-87-74",
    "branch": "Branch B",
    "accessPointMac": "31-26-3E-06-C3-23",
    "battery": 87
  }, {
    "serial": "SN67890",
    "mac": "28-7A-E9-51-94-9E",
    "branch": "Branch C",
    "accessPointMac": "D1-A5-59-A1-AF-68",
    "battery": 77
  }, {
    "serial": "SN12345",
    "mac": "84-34-0D-78-1B-F9",
    "branch": "Branch B",
    "accessPointMac": "99-10-38-E1-12-F8",
    "battery": 58
  }, {
    "serial": "SN12345",
    "mac": "BB-EE-9A-1B-8C-9F",
    "branch": "Branch A",
    "accessPointMac": "E4-45-3B-7E-B1-4E",
    "battery": 76
  }, {
    "serial": "SN67890",
    "mac": "5C-79-E4-FB-5C-C4",
    "branch": "Branch D",
    "accessPointMac": "56-AD-D3-C6-5F-C3",
    "battery": 62
  }, {
    "serial": "SN67890",
    "mac": "55-33-32-34-C9-D8",
    "branch": "Branch A",
    "accessPointMac": "2A-3B-A3-74-EB-A9",
    "battery": 82
  }, {
    "serial": "SN44556",
    "mac": "1C-38-13-93-68-65",
    "branch": "Branch D",
    "accessPointMac": "3C-A5-EA-3B-92-CA",
    "battery": 24
  }, {
    "serial": "SN44556",
    "mac": "3B-8A-68-D2-86-D9",
    "branch": "Branch A",
    "accessPointMac": "4D-D5-BE-BF-26-44",
    "battery": 55
  }, {
    "serial": "SN12345",
    "mac": "C5-60-83-33-60-75",
    "branch": "Branch D",
    "accessPointMac": "8E-F6-3B-61-45-AA",
    "battery": 66
  }, {
    "serial": "SN11223",
    "mac": "FD-22-E7-26-69-FC",
    "branch": "Branch C",
    "accessPointMac": "6D-AB-51-3C-28-AC",
    "battery": 51
  }, {
    "serial": "SN12345",
    "mac": "5C-7C-F8-48-DE-EF",
    "branch": "Branch C",
    "accessPointMac": "A3-10-9C-21-46-77",
    "battery": 35
  }, {
    "serial": "SN77889",
    "mac": "A7-35-66-0A-D4-CC",
    "branch": "Branch B",
    "accessPointMac": "62-3F-D1-93-D2-22",
    "battery": 83
  }, {
    "serial": "SN77889",
    "mac": "80-6C-24-22-67-70",
    "branch": "Branch A",
    "accessPointMac": "D0-F4-5C-91-4C-B9",
    "battery": 64
  }, {
    "serial": "SN67890",
    "mac": "8C-A1-1A-66-C0-43",
    "branch": "Branch C",
    "accessPointMac": "E4-B6-35-BC-00-C5",
    "battery": 98
  }, {
    "serial": "SN77889",
    "mac": "5A-98-DB-70-F8-81",
    "branch": "Branch A",
    "accessPointMac": "84-F4-2A-E7-65-D6",
    "battery": 4
  }, {
    "serial": "SN67890",
    "mac": "AB-2D-00-AB-F0-17",
    "branch": "Branch B",
    "accessPointMac": "F3-6F-2B-BB-BF-48",
    "battery": 20
  }, {
    "serial": "SN67890",
    "mac": "C7-96-F8-B7-D0-8E",
    "branch": "Branch C",
    "accessPointMac": "28-47-9E-48-C7-F9",
    "battery": 48
  }, {
    "serial": "SN44556",
    "mac": "CF-77-1A-CD-9D-14",
    "branch": "Branch A",
    "accessPointMac": "4F-94-2B-48-3A-0B",
    "battery": 35
  }, {
    "serial": "SN44556",
    "mac": "7B-9D-24-2F-77-27",
    "branch": "Branch A",
    "accessPointMac": "DD-7C-3B-3E-0E-98",
    "battery": 13
  }, {
    "serial": "SN12345",
    "mac": "06-80-D5-56-F1-97",
    "branch": "Branch D",
    "accessPointMac": "6A-C3-23-10-7B-2F",
    "battery": 94
  }];
  