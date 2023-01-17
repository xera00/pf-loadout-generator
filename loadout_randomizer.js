//primary gun list
var primary = Array("ak12", "an-94", "as val", "scar-l", 
"aug a1", "m16a4", "g36", "m16a3", "type 20", "aug a2", "k2", 
"famas f1", "ak47", "aug a3", "l85a2", "hk416", "ak74", "akm", 
"ak103", "tar-21", "type 88", "m231", "c7a2", "stg-44", "g11k2", 
"m14", "beowulf ecr", "scar-h", "ak12br", "g3a3", "ag-3", "hk417", "henry 45-70", 
"fal 50.00", "m4a1", "g36k", "m4", "l22", "scar pdw", "aku12", "groza-1", "ots-126", "ak12c", 
"honey badger", "k1a", "sr-3m", "groza-4", "mc51", "fal 50.63 para", "1858 carbine", 
"ak105", "jury", "kac srr", "gyrojet carbine", "c8a2", "x95r", "hk51b", "can cannon", "ksg 12", 
"model 870", "dbv12", "ks-23m", "saiga-12", "stevens db", "e gun", "aa-12", "spas-12", 
"dt11 pro", "usas-12", "mp5k", "ump45", "g36c", "mp7", "mac10", "p90", "mp5", "colt smg 633", "l2a3", 
"mp5sd", "mp10", "m3a1", "mp5/10", "uzi", "aug a3 para xs", "k7", "aks74u", "ppsh-41", 
"fal para shorty", "kriss vector", "pp-19 bizon", "mp40", "x95 smg", "tommy gun", "rama 1130", "mk11", 
"sks", "sl-8", "vss vintorez", "msg90", "m21", "beowulf tcr", "sa58 spr", "scar ssr", "colt lmg", 
"m60", "aug hbar", "mg36", "rpk12", "l86 lsw", "rpk", "hk21e", "hamr iar", "rpk74", "mg3kws", 
"intervention", "model 700", "dragunov svu", "aws", "bfg 50", "awm", "trg-42", "mosin nagant", 
"dragunov svds", "m1903", "k14", "hecate ii", "ft300", "m107", "steyr scout", "wa2000", "ntw-20", "m16a1", "colt mars");

//secondary gun list
var secondary = Array("boxy buster", "m9", "g17", "m1911a1", 
"desert eagle l5", "g21", "g23", "m45a1", "g40", "g50", "kg-99", "five seven", "zip 22", "gi m1", 
"hardballer", "izhevsk pb", "makarov pm", "gb-22", "desert eagle xix", "automag iii", "gyrojet mark i", 
"gsp", "grizzly", "m2011", "alien", "af2011-a1", "g18c", "93r", "pp-2000", "tec-9", "micro uzi", 
"skorpion vz.61", "asmi", "mp1911", "arm pistol", "mp412 rex", "mateba 6", 
"1858 new army", "redhawk 44", "judge", "executioner", "super shorty", "sfg 50", "m79 thumper", "advanced coilgun", 
"sawed off", "saiga-12u", "obrez", "sass 308");

//grenade list
var grenade = Array("m67 frag", "mk 2 frag", "m24 stick", "m26 frag", 
"m560 mini", "v40 mini", "roly hg", "dynamite", "dynamite-3", "rgd-5 he", 
"semtex", "pb grenade", "bundle charge", "t-13 impact", "rgn udzs", "rgo udzs");

//melee list
var melee = Array("knife", "mek'leth", "cleaver", 
"karambit", "tactical spatula", "hunting knife", "tanzanite blade", 
"krampus kukri", "tanto", "nata hatchet", "gospell blade", "war fan", "trench knife", 
"entrencher", "ritual sickle", "kama", "key", "machete", "ice pick", "tomahawk", 
"pocket knife", "havoc blade", "cutter", "jason", "bridal brandisher", "balisong", 
"darkheart", "streiter", "kommando", "linked sword", "classic knife", "icicle", 
"hrunting", "jkey", "hattori", "chosen one", "nordic war axe", "reaper", "zero cutter", 
"world buster", "noobslayer", "zircon trident", "icemourne", "naginata", "training bayonet", 
"longsword", "fire axe", "zweihander", "asp baton", "stick grenade", "crowbar", "mjolnir", "keyboard", 
"maglite club", "tanzanite pick", "candy cane", "toy gun", "flame of olympia", "pacific fm", "bare fists", 
"fumelee", "bloxy", "holiday tea", "trench mace", "clonker", "nightstick", "stun gun", "uchiwa", "fixer", 
"brass knuckle", "cricket bat", "frying pan", "arm cannon", "starlis funpost", "slay bells", "sleigh bells", 
"the countdown", "slege hammer", "hockey stick", "zircon slamsickle", "warhammer", "sweeper", "baseball bat", 
"paddle", "cursed shinai", "banjo", "stylis brush", "kanabo", "stopper", "the axe", "void staff", "morning star", "present", "crane");

//ak12 attachments
var ak12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ak12barrels = Array("carbine barrel", "bars barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ak12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var ak12ammos = Array("armor piercing", "5.56x45mm", "hollow point", "tracerless", "super armor p.");

//an94 attachments
var an94optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var an94barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var an94underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var an94others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var an94ammos = Array("armor piercing", "7.62x39mm", "hollow point", "tracerless", "super armor p.");

//as val attachments 
var asvaloptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var asvalbarrels = Array("suppressor..?", "none");

var asvalunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var asvalothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var asvalammos = Array("armor piercing", "hollow point", "tracerless", "extended mag");

//scar l attachments
var scarloptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pm ii");

var scarlbarrels = Array("carbine barrel", "squad barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var scarlunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var scarlothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock");

var scarlammos = Array(".223 rem", "9x19mm", "armor piercing", "hollow point", "tracerless");

//aug a1 attachments
var auga1optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var auga1barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var auga1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "folded grip");

var auga1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var auga1ammos = Array(".223 rem", "9x19mm", "armor piercing", "hollow point", "tracerless");

//m16a4 attachments
var m16a4optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m16a4barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m16a4underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m16a4others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "collapsible stock");

var m16a4ammos = Array(".223 rem", "7.62x39mm", "armor piercing", "hollow point", "tracerless", ".25-45 sharps");

//g36 attachments 
var g36optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "hensoldt dual optic");

var g36barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var g36underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var g36others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var g36ammos = Array(".223 rem", ".300 blk.", "armor piercing", "hollow point", "tracerless");

//m16a3 attachments
var m16a3optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m16a3barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m16a3underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m16a3others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "collapsible stock");

var m16a3ammos = Array(".223 rem", "7.62x39mm", "armor piercing", "hollow point", "tracerless", ".25-45 sharps");

//type 20 attachments
var type20optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pm ii", "remove irons");

var type20barrels = Array("carbine barrel", "squad barrel", "integral suppressor", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var type20underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var type20others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "extend stock");

var type20ammos = Array(".223 rem", "extended magazine", "60rd drum", "armor piercing", "hollow point", "tracerless");

//aug a2 attachments
var auga2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var auga2barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var auga2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "folded grip");

var auga2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var auga2ammos = Array(".223 rem", "armor piercing", "hollow point", "tracerless", "7.62x39mm");

//k2 attachments
var k2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var k2barrels = Array("carbine barrel", "squad barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var k2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var k2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var k2ammos = Array(".223 rem", "armor piercing", "hollow point", "tracerless", "7.62x39mm");

//famas f1 attachments
var famasf1optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var famasf1barrels = Array("carbine barrel", "squad barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var famasf1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var famasf1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "g2 conv.");

var famasf1ammos = Array(".223 rem", "armor piercing", "hollow point", "tracerless");

//ak47 attachments
var ak47optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ak47barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak47underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ak47others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "collapsible stock", "remove stock", "retract stock");

var ak47ammos = Array("armor piercing", "hollow point", "tracerless");

//aug a3 attachments
var auga3optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var auga3barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var auga3underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "folded grip");

var auga3others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var auga3ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 blk");

//l85a2 attachments
var l85a2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var l85a2barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var l85a2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var l85a2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var l85a2ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem");

//hk416 attachments
var hk416optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var hk416barrels = Array("carbine barrel", "squad barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var hk416underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hk416others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var hk416ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 blk");

//ak74 attachments
var ak74optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ak74barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak74underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var ak74others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "collaspible stock");

var ak74ammos = Array("armor piercing", "hollow point", "tracerless", "super armor p");

//akm attachments
var akmoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var akmbarrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var akmunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var akmothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "collaspible stock");

var akmammos = Array("armor piercing", "hollow point", "tracerless", ".366 shot", ".366 sp", "banana");

//ak103 attachments
var ak103optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ak103barrels = Array("carbine barrel", "squad barrel", "bars barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak103underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var ak103others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock");

var ak103ammos = Array("armor piercing", "hollow point", "tracerless", "5.56x45mm");

//tar 21 attachments
var tar21optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var tar21barrels = Array("ctar barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var tar21underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var tar21others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var tar21ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "duplex");

//type 88 attachments
var type88optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var type88barrels = Array("carbine barrel", "squad barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var type88underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var type88others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var type88ammos = Array("armor piercing", "hollow point", "tracerless", "30rd mag", "7.62x39mm", "super armor p");

//m231 attachments
var m231optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m231barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m231underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m231others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "wire stock");

var m231ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "m855");

//c7a2 attachments
var c7a2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var c7a2barrels = Array("carbine barrel", "flash hider", "compensator", "muzzle brake", "t-brake", 
                        "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", 
                        "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "lsw barrel");

var c7a2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var c7a2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var c7a2ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "7.62x39mm", ".20 tact");

//stg 44 attachments
var stg44optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var stg44barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var stg44underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var stg44others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var stg44ammos = Array("armor piercing", "hollow point", "tracerless", "5.56x45mm");

//g11k2 attachments
var g11k2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var g11k2barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var g11k2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var g11k2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var g11k2ammos = Array("armor piercing", "hollow point", "tracerless");

//m14 attachments
var m14optics = Array("carry handle sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "malcolm 6x scope");

var m14barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m14underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var m14others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var m14ammos = Array("armor piercing", "hollow point", "tracerless", "6.5mm", "silent");

//beowulf ecr attachments
var beowulfecroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var beowulfecrbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var beowulfecrunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var beowulfecrothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "collaspible stock");

var beowulfecrammos = Array("armor piercing", "hollow point", "tracerless", "5.56x45mm", ".458 socom", ".410 bore");

//scar h attachments
var scarhoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "pm ii");

var scarhbarrels = Array("flash hider", "carbine barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var scarhunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var scarhothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock");

var scarhammos = Array("armor piercing", "hollow point", "tracerless", "silent", "7.62x39mm");

//ak12br attachments
var ak12broptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ak12brbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak12brunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ak12brothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var ak12brammos = Array("armor piercing", "hollow point", "tracerless", "12.7x55mm", "7.62x39mm");

//g3a3 attachments
var g3a3optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var g3a3barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var g3a3underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var g3a3others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", 
                       "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "wood furniture");

var g3a3ammos = Array("armor piercing", "hollow point", "tracerless", "silent", ".45 acp");

//ag3 attachments
var ag3optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ag3barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ag3underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ag3others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
                      "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var ag3ammos = Array("armor piercing", "hollow point", "tracerless", "silent");

//hk417 attachments
var hk417optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var hk417barrels = Array("flash hider", "short barrel", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var hk417underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hk417others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var hk417ammos = Array("armor piercing", "hollow point", "tracerless", "silent");

//henry 45 70 attachments
var henry4570optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "malcolm 6x scope");

var henry4570barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler");

var henry4570underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var henry4570others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var henry4570ammos = Array("tracerless", "plus p", ".410 bore", "30-30", ".357 magnum");

//fal 50 attachments
var fal50optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var fal50barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var fal50underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var fal50others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var fal50ammos = Array("armor piercing", "silent", ".45 acp", "hollow point", "tracerless", "5.56x45mm");

//m4a1 attachments
var m4a1optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var m4a1barrels = Array("flash hider", "carbine barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m4a1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m4a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var m4a1ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "7.62x39mm", ".25-45 sharps");

//g36k attachments
var g36koptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "hensoldt dual optic");

var g36kbarrels = Array("flash hider", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var g36kunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var g36kothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var g36kammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 blk");

//m4 attachments
var m4optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var m4barrels = Array("flash hider", "carbine barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m4underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m4others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var m4ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "7.62x39mm", ".25-45 sharps");

//l22 attachments
var l22optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var l22barrels = Array("flash hider", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var l22underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var l22others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var l22ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem");

//scar pdw attachments
var scarpdwoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pm ii", "pso-1 scope", "pso-1m2 scope");

var scarpdwbarrels = Array("flash hider", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var scarpdwunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var scarpdwothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var scarpdwammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "9x19mm", "7.62x51mm");

//aku12 attachments
var aku12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var aku12barrels = Array("flash hider", "squad barrel", "carbine barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var aku12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var aku12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var aku12ammos = Array("armor piercing", "hollow point", "tracerless", "9x19mm", "super armor p");

//groza 1 attachments
var groza1optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var groza1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var groza1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var groza1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var groza1ammos = Array("armor piercing", "hollow point", "tracerless", "5.56x45mm", "5.45x39mm");

//ots 126 attachments
var ots126optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ots126barrels = Array("flash hider", "short barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ots126underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ots126others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "collapsible stock", "retract stock", "magazine stock");

var ots126ammos = Array("hollow point", "tracerless", "super armor p");

//ak12c attachments
var ak12coptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ak12cbarrels = Array("flash hider", "carbine barrel", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var ak12cunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ak12cothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var ak12cammos = Array("hollow point", "tracerless", "armor piercing", "9x39mm");

//honey badger attachments
var honeybadgeroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var honeybadgerbarrels = Array("flash hider", "squad barrel", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "remove suppressor");

var honeybadgerunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var honeybadgerothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "full stock");

var honeybadgerammos = Array("hollow point", "tracerless", "armor piercing");

//k1a attachments
var k1aoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var k1abarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var k1aunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var k1aothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var k1aammos = Array("hollow point", "tracerless", "armor piercing", ".223 rem", "7.62x39mm");

//sr3m attachments
var sr3moptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var sr3mbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "vikhr suppressor");

var sr3munderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var sr3mothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var sr3mammos = Array("hollow point", "tracerless", "armor piercing", "extended magazine");

//groza 4 attachments
var groza4optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var groza4barrels = Array("none");

var groza4underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var groza4others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var groza4ammos = Array("hollow point", "tracerless", "armor piercing");

//mc51 attachments
var mc51optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mc51barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "integral suppressor");

var mc51underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mc51others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extend stock");

var mc51ammos = Array("hollow point", "tracerless", "armor piercing", "silent");

//fal 50 63 para attachments
var fal5063paraoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var fal5063parabarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var fal5063paraunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var fal5063paraothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "full stock", "retract stock");

var fal5063paraammos = Array("hollow point", "tracerless", "armor piercing", "silent", ".45 acp", "5.56x45mm");

//1858 carbine attachments
var carbine1858optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "malcolm 6x scope", "leupold m8-2x", "leupold m8-6x");

var carbine1858barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
                               "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", 
                               "long barrel", "short barrel");

var carbine1858underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var carbine1858others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", 
                              "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", 
                              "canted acog sight", "canted animu sight", "canted furro sight");

var carbine1858ammos = Array("tracerless", "snake shot", ".36 caliber");

//ak105 attachments
var ak105optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ak105barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel", "squad barrel", "bars barrel");

var ak105underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ak105others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock");

var ak105ammos = Array("tracerless", "armor piercing", "hollow point", "super armor p", "5.56x45mm");

//jury attachments
var juryoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "malcolm 6x scope", "leupold m8-2x", "leupold m8-6x");

var jurybarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster");

var juryunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var juryothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "speedloader");

var juryammos = Array("tracerless", ".410 bore", "flechette", "birdshot", "rubber pellets", "exotic slugs");

//kac srr attachments
var kacsrroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "malcolm 6x scope", "leupold m8-2x", "leupold m8-6x");

var kacsrrbarrels = Array("none");

var kacsrrunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var kacsrrothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "speedloader");

var kacsrrammos = Array("tracerless", "none");

//gyrojet carbine attachments
var gyrojetcarbineoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var gyrojetcarbinebarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var gyrojetcarbineunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var gyrojetcarbineothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "full-auto conv");

var gyrojetcarbineammos = Array("12mm rockets", "none");

//c8a2 attachments
var c8a2optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var c8a2barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel");

var c8a2underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var c8a2others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "full stock", "remove stock", "retract stock");

var c8a2ammos = Array("tracerless", "armor piercing", "7.62x39mm", "hollow point", ".20 tact");

//x95r attachments
var x95roptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var x95rbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var x95runderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var x95rothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var x95rammos = Array("tracerless", "armor piercing", "hollow point", "5.56x45mm", ".300 blk", "super armor p");

//hk51b attachments
var hk51boptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var hk51bbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "short barrel", "squad barrel");

var hk51bunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hk51bothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extend stock", "full stock");

var hk51bammos = Array("tracerless", "armor piercing", "hollow point", "silent");

//can cannon attachments
var cancannonoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "pm ii", "sagittarius 40x");

var cancannonbarrels = Array("heavy can", "golf ball", "cannon ball", "tennis balls", "bloxy cola");

var cancannonunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var cancannonothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit");

var cancannonammos = Array(".223 blanks", "7.62x39 blanks", ".50 beowulf blanks");

//ksg 12 attachments
var ksg12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ksg12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "ksg 25 barrel", "improved choke", "duckbill choke", "paradox choke");

var ksg12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ksg12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var ksg12ammos = Array("flechette", "birdshot", "rubber pellets", "slugs", "minislugs", "minishells");

//model 870 attachments
var model870optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var model870barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "improved choke", "duckbill choke", "diverter", "full choke");

var model870underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var model870others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var model870ammos = Array("flechette", "birdshot", "rubber pellets", "slugs", "extended tube", "minishells", "minislugs");

//dbv12 attachments
var dbv12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var dbv12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "improved choke", "duckbill choke", "paradox choke");

var dbv12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var dbv12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var dbv12ammos = Array("flechette", "birdshot", "rubber pellets", "slugs", ".30-06", ".410 bore");

//ks23 attachments
var ks23moptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ks23mbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "sporting barrel", "paradox choke");

var ks23munderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ks23mothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "full stock");

var ks23mammos = Array("harpoon", "4 gauge", "shrapnel-25", "volna-r", "barrikada");

//saiga 12 attachments
var saiga12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var saiga12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", 
                           "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", 
                           "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "lengthened barrel", "shortened barrel", 
                           "paradox choke", "cut down barrel", "improved choke", "duckbill choke", "modified choke");

var saiga12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var saiga12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock");

var saiga12ammos = Array("flechette", ".223 rem", "birdshot", "9x19mm", "rubber pellets", "7.62x39mm", "slugs", "full-auto conv", ".308 win", "9.6x53mm", ".50 bmg");

//stevens db attachments
var stevensdboptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var stevensdbbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "full choke", "duckbill choke", "modified choke", "paradox choke", "diverter");

var stevensdbunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var stevensdbothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var stevensdbammos = Array("flechette", "birdshot", "rubber pellets", "slugs");

//e gun attachments
var egunoptics = Array("z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "kousaku oled sight", "c79", "pk-a", "m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt z24", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "vcog 8x scope", "susat scope", "oeg", "plague insight");

var egunbarrels = Array("none");

var egununderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var egunothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "crowd control setup", "home defense setup");

var egunammos = Array("heavy discs", "light discs", "pennies");

//aa12 attachments
var aa12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var aa12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "sporting barrel", "improved choke", "duckbill choke", "paradox choke");

var aa12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var aa12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "semi-auto conv");

var aa12ammos = Array("flechette", "birdshot", "rubber pellets", "slugs", "20rd drum");

//spas 12 attachments
var spas12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "extended stock", "remove stock", "full stock");

var spas12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "improved choke", "duckbill choke", "modified choke");

var spas12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var spas12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "pump action");

var spas12ammos = Array("flechette", "birdshot", "rubber pellets", "slugs", "minislugs", "minishells");

//dt11 attachments
var dt11prooptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "olympain target sight", "siege sight");

var dt11probarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "improved choke", "duckbill choke", "modified choke", "full choke", "combat barrel", "cut down barrel", "diverter", "paradox choke");

var dt11prounderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var dt11proothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "olympian stock", "sporting stock");

var dt11proammos = Array("flechette", "birdshot", "rubber pellets", "slugs", "#000 buckshot", "3½ shell", "bolo round");

//usas 12 attachments
var usas12optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var usas12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "improved choke", "modified choke", "paradox choke");

var usas12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var usas12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "semi-auto conv");

var usas12ammos = Array("flechette", "birdshot", "rubber pellets", "slugs");

//mp5k attachments
var mp5koptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp5kbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "long barrel", "osprey supppresor");

var mp5kunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp5kothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "mp5k stock", "burst grouping");

var mp5kammos = Array("armor piercing", "plus p", "10mm auto", "hollow point", "tracerless");

//ump45 attachments
var ump45optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var ump45barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "long barrel", "osprey supppresor");

var ump45underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ump45others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var ump45ammos = Array("armor piercing", "plus p", "hollow point", "tracerless", ".45 super", ".40 s&w");

//g36c attachments
var g36coptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "hensoldt dual optic");

var g36cbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "squad barrel");

var g36cunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var g36cothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var g36cammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 blk");

//mp7 attachments
var mp7optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp7barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor");

var mp7underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp7others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "extended magazine");

var mp7ammos = Array("armor piercing", "hollow point", "tracerless");

//mac10 attachments
var mac10optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mac10barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "sionics suppressor", "long barrel", "carbine barrel");

var mac10underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mac10others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extend stock", "full stock");

var mac10ammos = Array("armor piercing", "hollow point", "tracerless", ".45 super", "9x19mm", "plus p");

//p90 attachments
var p90optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var p90barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var p90underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var p90others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "30rd mag");

var p90ammos = Array("armor piercing", "hollow point", "tracerless");

//mp5 attachments
var mp5optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp5barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var mp5underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp5others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "burst grouping");

var mp5ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//colt smg attachments
var coltsmg633optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var coltsmg633barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var coltsmg633underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var coltsmg633others = Array("flashlight", "red laser", "green laser", "blue laser", 
                             "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", 
                             "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock", "burst grouping");

var coltsmg633ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//l2a3 attachments
var l2a3optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var l2a3barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel", "short barrel");

var l2a3underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var l2a3others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock");

var l2a3ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".45 acp");

//mp5sd attachments
var mp5sdoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp5sdbarrels = Array("long barrel", "none");

var mp5sdunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp5sdothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "burst grouping");

var mp5sdammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//mp10 attachments
var mp10optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp10barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var mp10underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp10others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "flashlight off");

var mp10ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//m3a1 attachments
var m3a1optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var m3a1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor");

var m3a1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m3a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var m3a1ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".45 super", "type 37 conv");

//mp5/10 attachments
var mp510optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp510barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var mp510underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp510others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "burst grouping");

var mp510ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".40 s&w");

//uzi attachments
var uzioptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var uzibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var uziunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var uziothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extend stock", "full stock");

var uziammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".41 ae", ".22 lr");

//aug a3 para xs attachments
var auga3paraxsoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var auga3paraxsbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var auga3paraxsunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var auga3paraxsothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var auga3paraxsammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".40 s&w");

//k7 attachments
var k7optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var k7barrels = Array("none");

var k7underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var k7others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var k7ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "5.56x45mm");

//aks74u attachments
var aks74uoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var aks74ubarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "squad barrel");

var aks74uunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var aks74uothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "full stock");

var aks74uammos = Array("armor piercing", "hollow point", "tracerless", "9x19mm", "7.62x39mm", "super armor p");

//ppsh41 attachments
var ppsh41optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var ppsh41barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey supppressor", "long barrel", "obrez barrel");

var ppsh41underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "35rd box mag");

var ppsh41others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var ppsh41ammos = Array("armor piercing", "hollow point", "tracerless");

//fal para shorty attachments
var falparashortyoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var falparashortybarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter");

var falparashortyunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var falparashortyothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extend stock", "full stock");

var falparashortyammos = Array("armor piercing", "hollow point", "tracerless", "5.56x45mm", ".45 acp", "silent");

//vector attachments
var krissvectoroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var krissvectorbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var krissvectorunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var krissvectorothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock");

var krissvectorammos = Array("armor piercing", "hollow point", "tracerless", ".45 super", "plus p", "9x19mm", ".357 sig", ".22 lr");

//pp bizon attachments
var pp19bizonoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var pp19bizonbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor");

var pp19bizonunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var pp19bizonothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "full stock");

var pp19bizonammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "9x18mm", "7.62x25mm");

//mp40 attachments
var mp40optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mp40barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor");

var mp40underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mp40others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var mp40ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//x95 smg attachments
var x95smgoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var x95smgbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor");

var x95smgunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var x95smgothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var x95smgammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "triplex", "5.56x30mm minsas");

//tommy gun attachments
var tommygunoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "lyman sight");

var tommygunbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "squad barrel");

var tommygununderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var tommygunothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "30rd mag", "50rd drum", "m1919 conv", "remove stock");

var tommygunammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".45 super", "10mm auto");

//rama attachments
var rama1130optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "ta11 acog", "ta01 acog", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var rama1130barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "osprey suppressor", "long barrel");

var rama1130underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var rama1130others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var rama1130ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".380 acp");

//mk11 attachments
var mk11optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var mk11barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "assault barrel");

var mk11underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mk11others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "collapsible stock", "retract stock");

var mk11ammos = Array("armor piercing", "hollow point", "tracerless", "silent", ".500 phantom", "depleted uranium");

//sks attachments
var sksoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var sksbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "assault barrel");

var sksunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var sksothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "full stock");

var sksammos = Array("armor piercing", "hollow point", "tracerless", ".366 shot", ".366 tkm polymer slug");

//sl8 attachments
var sl8optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "hensoldt dual optic");

var sl8barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter", "marksman barrel");

var sl8underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var sl8others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var sl8ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 whisper");

//vss attachments
var vssvintorezoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var vssvintorezbarrels = Array("suppressor..?", "none");

var vssvintorezunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var vssvintorezothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "collapsible stock", "retract stock");

var vssvintorezammos = Array("armor piercing", "hollow point", "tracerless", "7.62x39mm");

//msg90 attachments
var msg90optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var msg90barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "muffler", "suppressor", "r2 suppresor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "oil filter");

var msg90underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var msg90others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var msg90ammos = Array("armor piercing", "hollow point", "tracerless", "silent", ".308 win");

//m21 attachments
var m21optics = Array("carry handle sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "malcolm 6x scope");

var m21barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m21underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var m21others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var m21ammos = Array("armor piercing", "hollow point", "tracerless", "6.5mm", "silent");

//beowulf tcr attachments
var beowulftcroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var beowulftcrbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel", "squad barrel");

var beowulftcrunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var beowulftcrothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", 
                             "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", 
                             "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock", "binary trigger");

var beowulftcrammos = Array("armor piercing", "hollow point", "tracerless", ".458 socom", "5.56x45mm");

//sa58 spr attachments
var sa58sproptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var sa58sprbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var sa58sprunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var sa58sprothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var sa58sprammos = Array("armor piercing", "hollow point", "tracerless", ".45 acp", "5.56x45mm", "silent");

//scar ssr attachments
var scarssroptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "malcolm 6x scope", "pm ii");

var scarssrbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "short barrel");

var scarssrunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var scarssrothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock");

var scarssrammos = Array("armor piercing", "hollow point", "tracerless", "silent", "6.5mm");

//colt lmg attachments
var coltlmgoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var coltlmgbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel");

var coltlmgunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var coltlmgothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock", "remove stock", "collapsible stock");

var coltlmgammos = Array("armor piercing", "hollow point", "tracerless", ".20 tactical", ".223 rem", "7.62x39mm");

//m60 attachments
var m60optics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", "steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", "kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "anti-aircraft irons");

var m60barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m60underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m60others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var m60ammos = Array("armor piercing", "hollow point", "tracerless", "silent");

//aug hbar attachments
var aughbaroptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var aughbarbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var aughbarunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var aughbarothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "closed bolt conv");

var aughbarammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".22 lr");

//mg36 attachments
var mg36optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "hensoldt dual optic");

var mg36barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var mg36underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var mg36others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var mg36ammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", ".300 blk");

//rpk12 attachments
var rpk12optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var rpk12barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel");

var rpk12underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var rpk12others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "retract stock");

var rpk12ammos = Array("armor piercing", "hollow point", "tracerless", "super armor p", "7.62x39mm");

//l86 lsw attachments
var l86lswoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight");

var l86lswbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel");

var l86lswunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var l86lswothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var l86lswammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem");

//rpk attachments
var rpkoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var rpkbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var rpkunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var rpkothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var rpkammos = Array("armor piercing", "hollow point", "tracerless");

//hk21e attachments
var hk21eoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var hk21ebarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var hk21eunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hk21eothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var hk21eammos = Array("armor piercing", "hollow point", "tracerless", "silent");

//hamr iar attachments
var hamriaroptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var hamriarbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "carbine barrel", "squad barrel");

var hamriarunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hamriarothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock");

var hamriarammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem", "30rd stanag");

//rpk74 attachments
var rpk74optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var rpk74barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var rpk74underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var rpk74others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var rpk74ammos = Array("armor piercing", "hollow point", "tracerless", "super armor p");

//mg3kws attachments
var mg3kwsoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "anti-aircraft irons");

var mg3kwsbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var mg3kwsunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mg3kwsothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "heavy bolt", "retract stock", "full stock");

var mg3kwsammos = Array("armor piercing", "hollow point", "tracerless", "silent", "depleted uranium");

//intervention attachments
var interventionoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var interventionbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "cqb barrel");

var interventionunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var interventionothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var interventionammos = Array("tracerless", ".375 cheytac");

//model 700 attachments
var model700optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var model700barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel", "light barrel");

var model700underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var model700others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit", "extended magazine");

var model700ammos = Array("tracerless", "silent", ".32 acp");

//dragunov svu attachments
var dragunovsvuoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var dragunovsvubarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var dragunovsvuunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var dragunovsvuothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "svu-a conv");

var dragunovsvuammos = Array("tracerless", "9.6x53mm");

//aws attachments
var awsoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var awsbarrels = Array("none");

var awsunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var awsothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit");

var awsammos = Array("tracerless", "silent");

//bfg 50 attachments
var bfg50optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var bfg50barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel", "light barrel", "carbine barrel");

var bfg50underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var bfg50others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var bfg50ammos = Array("tracerless", ".416 barrett", "m903 slap", ".17 incinerator", "rat shot");

//awm attachments
var awmoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var awmbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var awmunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var awmothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit");

var awmammos = Array("tracerless", ".338 norma", ".308 win");

//trg-42 attachments
var trg42optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var trg42barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel", "light barrel");

var trg42underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var trg42others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit", "remove stock");

var trg42ammos = Array("tracerless", ".338 norma", "trg-22 kit", "trg-s kit");

//mosin nagant attachments
var mosinnagantoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var mosinnagantbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel");

var mosinnagantunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var mosinnagantothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit", "remove stock");

var mosinnagantammos = Array("tracerless", "extended magazine", ".410 bore", "8x50mmr");

//dragunov svds attachments
var dragunovsvdsoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var dragunovsvdsbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel");

var dragunovsvdsunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var dragunovsvdsothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var dragunovsvdsammos = Array("tracerless", "9.6x53mm", "10/3.5mm");

//m1903 attachments
var m1903optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var m1903barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel", "air service barrel", "maxim silencer");

var m1903underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "romanian grip");

var m1903others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var m1903ammos = Array("tracerless", "armor piercing", "pedersen device", "air service mag");

//k14 attachments
var k14optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var k14barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel");

var k14underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var k14others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var k14ammos = Array("tracerless", "silent", ".308 winchester");

//hecate ii attachments
var hecateiioptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var hecateiibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel", "heavy barrel", "cqb barrel");

var hecateiiunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var hecateiiothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var hecateiiammos = Array("tracerless", ".416 barrett", "m1903 slap", "rat shot", ".17 incinerator");

//ft300 attachments
var ft300optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none", "olympian target sight");

var ft300barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "light barrel", "heavy barrel");

var ft300underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip", "olympic forgrip");

var ft300others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock", "marksman kit");

var ft300ammos = Array("tracerless", "6xc", ".22 lr", "7.5x55mm", ".308 win");

//m107 attachments
var m107optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var m107barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "cqb barrel");

var m107underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m107others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "extended magazine");

var m107ammos = Array("tracerless", ".416 barrett", "m903 slap", "rat shot", ".17 incinerator");

//steyr scout attachments
var steyrscoutoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var steyrscoutbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel", "light barrel");

var steyrscoutunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var steyrscoutothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit");

var steyrscoutammos = Array("tracerless", "5.56x45mm", ".376 steyr", "silent");

//wa2000 attachments
var wa2000optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var wa2000barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var wa2000underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var wa2000others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight");

var wa2000ammos = Array("tracerless", ".300 winmag", "7.5x55mm");

//ntw-20 attachments
var ntw20optics = Array("z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", 
"klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var ntw20barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"heavy barrel", "obrez barrel");

var ntw20underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var ntw20others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "marksman kit");

var ntw20ammos = Array("tracerless", "20x110mm", "14.5mm");

//end of primaries attachments

//boxy buster attachments
var boxybusteroptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog",
"swarovski scope", "ta11 acog", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "sagittarius 40x", "pm ii");

var boxybusterbarrels = Array("none");

var boxybusterothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var boxybusterammos = Array("elite darts", "none");

//m9 attachments
var m9optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m9barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var m9others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "extended magazine", "raffica stock");

var m9ammos = Array("armor piercing", "plus p", "hollow point", "tracerless");

//g17 attachments
var g17optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g17barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var g17others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock");

var g17ammos = Array("armor piercing", "plus p", "hollow point", "tracerless", "33rd mag");

//m1911a1 attachments
var m1911a1optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m1911a1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var m1911a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock", "engravings");

var m1911a1ammos = Array("armor piercing", "plus p", "hollow point", "tracerless", ".45 super", "ratshot", "dart");

//desert eagle l5 attachments
var deserteaglel5optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x");

var deserteaglel5barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "extended barrel");

var deserteaglel5others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var deserteaglel5ammos = Array("armor piercing", "hollow point", "tracerless", ".44 special", ".357 magnum");

//g21 attachments
var g21optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g21barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var g21others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock");

var g21ammos = Array("armor piercing", "hollow point", "tracerless", ".45 super", "26rd mag", "plus p");

//g23 attachments
var g23optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g23barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var g23others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock");

var g23ammos = Array("armor piercing", "hollow point", "tracerless", "22rd mag");

//m45a1 attachments
var m45a1optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var m45a1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var m45a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock", "extended magazine");

var m45a1ammos = Array("armor piercing", "hollow point", "tracerless", ".45 super", "plus p", "dart");

//g40 attachments
var g40optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g40barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "short barrel", "osprey suppressor");

var g40others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock");

var g40ammos = Array("armor piercing", "hollow point", "tracerless", "30rd mag", "plus p");

//kg-99 attachments
var kg99optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var kg99barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var kg99others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "full stock");

var kg99ammos = Array("armor piercing", "hollow point", "tracerless", "extended magazine", "plus p");

//g50 attachments
var g50optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g50barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel", "osprey suppressor");

var g50others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock", "g switch");

var g50ammos = Array("armor piercing", "hollow point", "tracerless");

//five seven attachments
var fivesevenoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var fivesevenbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var fivesevenothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "extended magazine");

var fivesevenammos = Array("armor piercing", "hollow point", "tracerless");

//zip 22 attachments
var zip22optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope", "pm ii", "sagittarius 40x");

var zip22barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var zip22others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "pro mag");

var zip22ammos = Array("armor piercing", "hollow point", "tracerless", "rat shot");

//gi m1 attachments
var gim1optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var gim1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "heavy barrel");

var gim1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock");

var gim1ammos = Array("armor piercing", "hollow point", "tracerless");

//hardballer attachments
var hardballeroptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var hardballerbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "short barrel");

var hardballerothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock");

var hardballerammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//izhevsk pb attachments
var izhevskpboptics = Array("full ring sight", "half ring sight",
"delta sight", "mini sight", "plague insight");

var izhevskpbbarrels = Array("none");

var izhevskpbothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "extended magazine", "12rd magazine");

var izhevskpbammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//makarov attachments
var makarovpmoptics = Array("full ring sight", "half ring sight",
"delta sight", "mini sight", "plague insight");

var makarovpmbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "long barrel");

var makarovpmothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "extended magazine", "12rd magazine");

var makarovpmammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//gb-22 attachments
var gb22optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var gb22barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "cut down barrel", "sporting barrel");

var gb22others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var gb22ammos = Array("armor piercing", "hollow point", "tracerless", "10mm auto", "minishells", ".50 ae");

//deagle xix attachments
var deserteaglexixoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "leupold m8-6x");

var deserteaglexixbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "extended barrel", "police barrel");

var deserteaglexixothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "police stock");

var deserteaglexixammos = Array("armor piercing", "hollow point", "tracerless", ".357 magnum");

//automag iii attachments
var automagiiioptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var automagiiibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var automagiiiothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var automagiiiammos = Array("armor piercing", "hollow point", "tracerless", ".45 winmag", ".50 ae");

//gyrojet pistol
var gyrojetmarkioptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var gyrojetmarkibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "short barrel", "long barrel");

var gyrojetmarkiothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "full-auto conv");

var gyrojetmarkiammos = Array("12mm rockets", "none");

//gsp attachments
var gspoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "maglite", 
"amt-terminator", "plague insight");

var gspbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "target weight");

var gspothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var gspammos = Array("armor piercing", "hollow point", "tracerless", ".32 s&w", "gsp rat shot");

//grizzly attachments
var grizzlyoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var grizzlybarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "heavy barrel");

var grizzlyothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var grizzlyammos = Array("armor piercing", "hollow point", "tracerless");

//m2011 attachments
var m2011optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "olympian target sight");

var m2011barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "osprey suppressor");

var m2011others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock");

var m2011ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//alien attachments
var alienoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "olympian target sight");

var alienbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var alienothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var alienammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//af2011-a1 attachments
var af2011a1optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var af2011a1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var af2011a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "shoulder stock");

var af2011a1ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".45 super", "double dart");

//g18c attachments
var g18coptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var g18cbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "long barrel");

var g18cothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "g stock", "folded stock");

var g18cammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "33rd mag");

//93r attachments
var r95optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var r95barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var r95others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "raffica stock");

var r95ammos = Array("armor piercing", "hollow point", "tracerless", "plus p");

//pp 2000 attachments
var pp2000optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight");

var pp2000barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var pp2000others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "retract stock", "magazine stock");

var pp2000ammos = Array("armor piercing", "hollow point", "tracerless", "super armor p");

//tec-9 attachments
var tec9optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var tec9barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "short barrel", "long barrel");

var tec9others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "full stock");

var tec9ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "extended magazine");

//micro uzi attachments
var microuzioptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight");

var microuzibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var microuziothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "full stock");

var microuziammos = Array("armor piercing", "hollow point", "tracerless", "plus p", ".45 acp", "strike-3");

//skorpion attachments
var skorpionvz61optics = Array("z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "ta01 acog", "maglite", "amt-terminator", "plague insight");

var skorpionvz61barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "long barrel");

var skorpionvz61others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "full stock", "extended stock", "remove limiter");

var skorpionvz61ammos = Array("armor piercing", "hollow point", "tracerless", "plus p", "rubber pellets", "9x18mm", "rat shot");

//asmi attachments
var asmioptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "vcog 8x scope");

var asmibarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor");

var asmiothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "vertical grip", "angled grip", "potato grip", "skeleton grip", "folding grip", 
"stubby grip", "sideways grip", "remove stock", "retract stock");

var asmiammos = Array("tracerless", "armor piercing", "plus p", "hollow point");

//mp1911 attachments
var mp1911optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var mp1911barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "short barrel", "osprey suppressor");

var mp1911others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "remove stock");

var mp1911ammos = Array("armor piercing", "plus p", "hollow point", "tracerless", ".45 super", "9x19mm");

//arm pistol attachments
var armpistoloptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var armpistolbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var armpistolothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "extended magazine");

var armpistolammos = Array("armor piercing", "hollow point", "tracerless", ".223 rem");

//mp412 rex attachments
var mp412rexoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "pso-1 scope", "pso-1m2 scope");

var mp412rexbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", 
"snubnose", "cowboy barrel");

var mp412rexothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "speed loader", "ballistics tracker");

var mp412rexammos = Array("armor piercing", "hollow point", "tracerless", ".38 special");

//mateba 6 attachments
var mateba6optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "leupold m8-6x", "pu-1 scope");

var mateba6barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", 
"snubnose", "cowboy barrel");

var mateba6others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "speed loader", "ballistics tracker");

var mateba6ammos = Array("armor piercing", "hollow point", "tracerless", ".44 special");

//1858 new army
var newarmy1858optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x");

var newarmy1858barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", 
"snubnose", "long barrel");

var newarmy1858others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker");

var newarmy1858ammos = Array("armor piercing", "hollow point", "tracerless", ".36 caliber", "snake shot");

//redhawk 44 attachments
var redhawk44optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "leupold m8-6x");

var redhawk44barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", 
"snubnose", "cowboy barrel");

var redhawk44others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "kac stock", "speedloader");

var redhawk44ammos = Array("armor piercing", "hollow point", "tracerless", ".44 special", "45 long colt");

//judge attachments
var judgeoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "leupold m8-6x");

var judgebarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", "taurus barrel");

var judgeothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "tarus stock", "speedloader");

var judgeammos = Array("flechette", "birdshot", "rubber pellets", "slugs");

//executioner attachments
var executioneroptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "leupold m8-2x", "leupold m8-6x");

var executionerbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", 
"halbek device", "loudener", "muzzle booster", "taurus barrel");

var executionerothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "tarus stock", "speedloader");

var executionerammos = Array("armor piercing", "hollow point", "tracerless");

//super shorty attachments
var supershortyoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var supershortybarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "full choke", 
"improved choke", "duckbill choke", "modified choke", "paradox choke", "diverter");

var supershortyothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "traditional pump");

var supershortyammos = Array("flechette", "birdshot", "extended tube", "rubber pellets", "slugs", "minishells", "minislugs");

//sfg 50 attachments
var sfg50optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var sfg50barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var sfg50others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "remove stock");

var sfg50ammos = Array("tracerless", ".416 barrett", "m903 slap", "rat shot", ".17 incinerator");

//thumper attachments
var m79thumperoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope");

var m79thumperbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", "cut down barrel");

var m79thumperothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "remove stock");

var m79thumperammos = Array("tracerless", "sponge", "410 beehive", "armor piercing", "buckshot", "cts sting ball", "hollow point", "flechette", "exotic slugs");

//advanced coilgun attachments
var advancedcoilgunoptics = Array("z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", "pilad 3", 
"kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "microdot srs", "okp-7", "uh-1 sight", 
"ddhb reflex", "kousaku oled sight", "c79", "pk-a", "m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", 
"hensoldt z24", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "vcog 8x scope", "susat scope", "oeg", "plague insight", "handmade sight");

var advancedcoilgunbarrels = Array("none");

var advancedcoilgunothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", 
"tri laser", "ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", 
"canted animu sight", "canted furro sight", "crowd control setup", "home defense setup");

var advancedcoilgunammos = Array("heavy discs", "light discs", "pennies");

//sawed off attachments
var sawedoffoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", 
"steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", 
"kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", 
"iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", 
"eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", 
"microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", 
"uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", 
"ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", "reflector scope", 
"vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", 
"👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var sawedoffbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", 
"loudener", "muzzle booster", "muffler", "full choke", "duckbill choke", "modified choke", "paradox choke", "diverter");

var sawedoffothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", 
"ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "boom stock");

var sawedoffammos = Array("flechette", "birdshot", "rubber pellets", "slugs");

//saiga12u attachments
var saiga12uoptics = Array("h&k sight", "full ring sight", "half ring sight", "backup sight", 
"steyr sight", "double open sight", "izhmash sight", "super slim sight", "diopter sight", "buis sight", 
"kel-tec sight", "kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", "herstal sight", "bundeswehr sight", 
"iwi sight", "carry handle sight", "quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", "z-point", 
"eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", "comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", 
"microdot mini", "pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", "microdot srs", "okp-7", 
"uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", "m145", "malcolm 3x scope", "ta44 acog", "acog scope", 
"vcog 6x scope", "ta33 acog", "hensoldt 3x sight", "hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", "amt-terminator", "handmade sight", "plague insight", 
"animu sight", "furro sight", "👌👍", "anti sight", "pso-1 scope", "pso-1m2 scope");

var saiga12ubarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", 
"muzzle booster", "suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", 
"paradox choke", "improved choke", "duckbill choke", "modified choke");

var saiga12uothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", 
"ballistics tracker", "canted iron sight", "canted delta sight", "canted acog sight", "canted animu sight", 
"canted furro sight", "full stock");

var saiga12uammos = Array("flechette", ".223 rem", "birdshot", "9x19mm", "rubber pellets", "7.62x39mm", "slugs", "full-auto conv", ".308 win", "9.6x53mm", ".50 bmg");

//obrez attachments
var obrezoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "malcolm 3x scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "hensoldt 3x sight", 
"hensoldt z24", "swarovski scope", "ta11 acog", "pu-1 scope", "ff 3x nv", "ta01 acog", "electra 5x", 
"reflector scope", "vcog 8x scope", "susat scope", "global offensive scope", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", 
"anti sight", "pso-1 scope", "pso-1m2 scope", "leupold m8-2x", "klassik lm", "leupold m8-6x", "hi-power 8-32", "kom 10x42", "sidewinder ed", "leupold mark 4", "pm ii"
, "sagittarius 40x", "nxs 8-32", "none");

var obrezbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "long barrel", "front post");

var obrezothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", 
"canted delta sight", "canted acog sight", "canted animu sight", "canted furro sight", "marksman kit", "obrez stock");

var obrezammos = Array("tracerless", "extended magazine", ".410 bore", "8x50mmr");

//sass 308 attachments
var sass308optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "bundeswehr sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "oeg", "maglite", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight");

var sass308barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster",
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "osprey suppressor", "light barrel");

var sass308others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser");

var sass308ammos = Array("armor piercing", "hollow point", "tracerless", "silent", ".358 win");

//m16a1 attachments
var m16a1optics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "iwi sight", "carry handle sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "colt retro scope", "c79", "pk-a", 
"m145", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "hensoldt z24", "swarovski scope", 
"oeg", "maglite", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "electra 5x", "reflector scope", "vcog 8x scope", "sustat scope", "global offensive", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "maglite");

var m16a1barrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter");

var m16a1underbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var m16a1others = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight"
, "canted acog scope", "canted animu sight", "canted furro sight");

var m16a1ammos = Array("armor piercing", "hollow point", "tracerless", "m855", ".223 rem");

//colt mars attachments
var coltmarsoptics = Array("h&k sight", "full ring sight", "half ring sight", 
"backup sight", "steyr sight", "double open sight", "izhmash sight", 
"super slim sight", "diopter sight", "buis sight", "kel-tec sight", 
"kalashnikov sight", "kac sight", "1200m sight", "h&k export sight", 
"herstal sight", "iwi sight", 
"quick-release sight", "mbus sight", "aac flip up sight", "daul aperture sight", 
"z-point", "eotech xp52", "delta sight", "mars", "eotech 552", "mini sight", 
"comp aimpoint", "pka-s", "reflex sight", "kobra sight", "coyote sight", "microdot mini", 
"pilad 3", "kobra ekp sight", "acro p-1 sight", "barska electro", "eotech m40", "kousaku sight", 
"microdot srs", "okp-7", "uh-1 sight", "ddhb reflex", "dcl 120", "kousaku oled sight", "c79", "pk-a", 
"m145", "pso-1 scope", "ta44 acog", "acog scope", "vcog 6x scope", "ta33 acog", "ta11 acog", "hensoldt 3x scope", "ta01 acog", "hensoldt z24", "swarovski scope", 
"oeg", "maglite", "pu-1 scope", "ff 3x nv", "pso-1m2 scope", "electra 5x", "reflector scope", "vcog 8x scope", "sustat scope", "global offensive", 
"amt-terminator", "handmade sight", "plague insight", "animu sight", "furro sight", "👌👍", "anti sight", "maglite", "oeg");

var coltmarsbarrels = Array("flash hider", "compensator", "muzzle brake", "t-brake", "x-ring", "halbek device", "loudener", "muzzle booster", 
"suppressor", "r2 suppressor", "ars suppressor", "pbs-1 suppressor", "pbs-4 suppressor", "muffler", "oil filter", "squad barrel");

var coltmarsunderbarrels = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "vertical grip", 
"angled grip", "potato grip", "skeleton grip", 
"folding grip", "stubby grip", "pistol grip", "sideways grip", "hera cqr grip", "chainsaw grip");

var coltmarsothers = Array("flashlight", "red laser", "green laser", "blue laser", "yellow laser", "tri laser", "ballistics tracker", "canted iron sight", "canted delta sight"
, "canted acog scope", "canted animu sight", "canted furro sight", "remove stock", "retract stock", "full stock");

var coltmarsammos = Array("armor piercing", "hollow point", "tracerless", "9x30mm mars");

function generateloadout()
{
    //randomly select guns
    var primary_gun_selection = primary[Math.floor(Math.random()*primary.length)];
    //document.getElementById("temp2").innerHTML = "gun currently selected " + primary_gun_selection;
    var secondary_gun_selection = secondary[Math.floor(Math.random()*secondary.length)];

    //randomly select grenade and melee
    var grenade_selection = grenade[Math.floor(Math.random()*grenade.length)];
    var melee_selection = melee[Math.floor(Math.random()*melee.length)];

    //nested if statement to allow for loadout randomization to be correct per gun (primaries only)
    if (primary_gun_selection == "ak12")
    {
      //select random attachments based on specified list - primaries 
      var ak12_optic_sel = ak12optics[Math.floor(Math.random()*ak12optics.length)];
      var ak12_barrel_sel = ak12barrels[Math.floor(Math.random()*ak12barrels.length)];
      var ak12_underbarrel_sel =          ak12underbarrels[Math.floor(Math.random()*ak12underbarrels.length)];
      var ak12_other_sel = ak12others[Math.floor(Math.random()*ak12others.length)];
      var ak12_ammo_sel = ak12ammos[Math.floor(Math.random()*ak12ammos.length)];

      //display on webpage
      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak12_ammo_sel;
    }
    else if (primary_gun_selection == "an-94")
    {
      var an94_optic_sel = an94optics[Math.floor(Math.random()*an94optics.length)];
      var an94_barrel_sel = an94barrels[Math.floor(Math.random()*an94barrels.length)];
      var an94_underbarrel_sel =          an94underbarrels[Math.floor(Math.random()*an94underbarrels.length)];
      var an94_other_sel = an94others[Math.floor(Math.random()*an94others.length)];
      var an94_ammo_sel = an94ammos[Math.floor(Math.random()*an94ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + an94_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + an94_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + an94_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + an94_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + an94_ammo_sel;
    }
    else if (primary_gun_selection == "m16a1")
    {
      var m16a1_optic_sel = m16a1optics[Math.floor(Math.random()*m16a1optics.length)];
      var m16a1_barrel_sel = m16a1barrels[Math.floor(Math.random()*m16a1barrels.length)];
      var m16a1_underbarrel_sel = m16a1underbarrels[Math.floor(Math.random()*m16a1underbarrels.length)];
      var m16a1_other_sel = m16a1others[Math.floor(Math.random()*m16a1others.length)];
      var m16a1_ammo_sel = m16a1ammos[Math.floor(Math.random()*m16a1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m16a1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m16a1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m16a1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m16a1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m16a1_ammo_sel;
    }
    else if (primary_gun_selection == "colt mars")
    {
      var coltmars_optic_sel = coltmarsoptics[Math.floor(Math.random()*coltmarsoptics.length)];
      var coltmars_barrel_sel = coltmarsbarrels[Math.floor(Math.random()*coltmarsbarrels.length)];
      var coltmars_underbarrel_sel = coltmarsunderbarrels[Math.floor(Math.random()*coltmarsunderbarrels.length)];
      var coltmars_other_sel = coltmarsothers[Math.floor(Math.random()*coltmarsothers.length)];
      var coltmars_ammo_sel = coltmarsammos[Math.floor(Math.random()*coltmarsammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + coltmars_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + coltmars_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + coltmars_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + coltmars_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + coltmars_ammo_sel;
    }
    else if (primary_gun_selection == "as val")
    {
      var asval_optic_sel = asvaloptics[Math.floor(Math.random()*asvaloptics.length)];
      var asval_barrel_sel = asvalbarrels[Math.floor(Math.random()*asvalbarrels.length)];
      var asval_underbarrel_sel =          asvalunderbarrels[Math.floor(Math.random()*asvalunderbarrels.length)];
      var asval_other_sel = asvalothers[Math.floor(Math.random()*asvalothers.length)];
      var asval_ammo_sel = asvalammos[Math.floor(Math.random()*asvalammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + asval_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + asval_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + asval_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + asval_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + asval_ammo_sel;
    }
    else if (primary_gun_selection == "scar-l")
    {
      var scarl_optic_sel = scarloptics[Math.floor(Math.random()*scarloptics.length)];
      var scarl_barrel_sel = scarlbarrels[Math.floor(Math.random()*scarlbarrels.length)];
      var scarl_underbarrel_sel =          scarlunderbarrels[Math.floor(Math.random()*scarlunderbarrels.length)];
      var scarl_other_sel = scarlothers[Math.floor(Math.random()*scarlothers.length)];
      var scarl_ammo_sel = scarlammos[Math.floor(Math.random()*scarlammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + scarl_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + scarl_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + scarl_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + scarl_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + scarl_ammo_sel;
    }
    else if (primary_gun_selection == "aug a1")
    {
      var auga1_optic_sel = auga1optics[Math.floor(Math.random()*auga1optics.length)];
      var auga1_barrel_sel = auga1barrels[Math.floor(Math.random()*auga1barrels.length)];
      var auga1_underbarrel_sel =          auga1underbarrels[Math.floor(Math.random()*auga1underbarrels.length)];
      var auga1_other_sel = auga1others[Math.floor(Math.random()*auga1others.length)];
      var auga1_ammo_sel = auga1ammos[Math.floor(Math.random()*auga1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + auga1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + auga1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + auga1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + auga1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + auga1_ammo_sel;
    }
    else if (primary_gun_selection == "m16a4")
    {
      var m16a4_optic_sel = m16a4optics[Math.floor(Math.random()*m16a4optics.length)];
      var m16a4_barrel_sel = m16a4barrels[Math.floor(Math.random()*m16a4barrels.length)];
      var m16a4_underbarrel_sel =          m16a4underbarrels[Math.floor(Math.random()*m16a4underbarrels.length)];
      var m16a4_other_sel = m16a4others[Math.floor(Math.random()*m16a4others.length)];
      var m16a4_ammo_sel = m16a4ammos[Math.floor(Math.random()*m16a4ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m16a4_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m16a4_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m16a4_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m16a4_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m16a4_ammo_sel;
    }
    else if (primary_gun_selection == "g36")
    {
      var g36_optic_sel = g36optics[Math.floor(Math.random()*g36optics.length)];
      var g36_barrel_sel = g36barrels[Math.floor(Math.random()*g36barrels.length)];
      var g36_underbarrel_sel =          g36underbarrels[Math.floor(Math.random()*g36underbarrels.length)];
      var g36_other_sel = g36others[Math.floor(Math.random()*g36others.length)];
      var g36_ammo_sel = g36ammos[Math.floor(Math.random()*g36ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + g36_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + g36_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + g36_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + g36_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + g36_ammo_sel;
    }
    else if (primary_gun_selection == "m16a3")
    {
      var m16a3_optic_sel = m16a3optics[Math.floor(Math.random()*m16a3optics.length)];
      var m16a3_barrel_sel = m16a3barrels[Math.floor(Math.random()*m16a3barrels.length)];
      var m16a3_underbarrel_sel =          m16a3underbarrels[Math.floor(Math.random()*m16a3underbarrels.length)];
      var m16a3_other_sel = m16a3others[Math.floor(Math.random()*m16a3others.length)];
      var m16a3_ammo_sel = m16a3ammos[Math.floor(Math.random()*m16a3ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m16a3_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m16a3_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m16a3_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m16a3_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m16a3_ammo_sel;
    }
    else if (primary_gun_selection == "type 20")
    {
      var type20_optic_sel = type20optics[Math.floor(Math.random()*type20optics.length)];
      var type20_barrel_sel = type20barrels[Math.floor(Math.random()*type20barrels.length)];
      var type20_underbarrel_sel =          type20underbarrels[Math.floor(Math.random()*type20underbarrels.length)];
      var type20_other_sel = type20others[Math.floor(Math.random()*type20others.length)];
      var type20_ammo_sel = type20ammos[Math.floor(Math.random()*type20ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + type20_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + type20_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + type20_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + type20_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + type20_ammo_sel;
    }
    else if (primary_gun_selection == "aug a2")
    {
      var auga2_optic_sel = auga2optics[Math.floor(Math.random()*auga2optics.length)];
      var auga2_barrel_sel = auga2barrels[Math.floor(Math.random()*auga2barrels.length)];
      var auga2_underbarrel_sel =          auga2underbarrels[Math.floor(Math.random()*auga2underbarrels.length)];
      var auga2_other_sel = auga2others[Math.floor(Math.random()*auga2others.length)];
      var auga2_ammo_sel = auga2ammos[Math.floor(Math.random()*auga2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + auga2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + auga2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + auga2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + auga2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + auga2_ammo_sel;
    }
    else if (primary_gun_selection == "k2")
    {
      var k2_optic_sel = k2optics[Math.floor(Math.random()*k2optics.length)];
      var k2_barrel_sel = k2barrels[Math.floor(Math.random()*k2barrels.length)];
      var k2_underbarrel_sel =          k2underbarrels[Math.floor(Math.random()*k2underbarrels.length)];
      var k2_other_sel = k2others[Math.floor(Math.random()*k2others.length)];
      var k2_ammo_sel = k2ammos[Math.floor(Math.random()*k2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + k2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + k2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + k2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + k2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + k2_ammo_sel;
    }
    else if (primary_gun_selection == "famas f1")
    {
      var famasf1_optic_sel = famasf1optics[Math.floor(Math.random()*famasf1optics.length)];
      var famasf1_barrel_sel = famasf1barrels[Math.floor(Math.random()*famasf1barrels.length)];
      var famasf1_underbarrel_sel =          famasf1underbarrels[Math.floor(Math.random()*famasf1underbarrels.length)];
      var famasf1_other_sel = famasf1others[Math.floor(Math.random()*famasf1others.length)];
      var famasf1_ammo_sel = famasf1ammos[Math.floor(Math.random()*famasf1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + famasf1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + famasf1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + famasf1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + famasf1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + famasf1_ammo_sel;
    }
    else if (primary_gun_selection == "ak47")
    {
      var ak47_optic_sel = ak47optics[Math.floor(Math.random()*ak47optics.length)];
      var ak47_barrel_sel = ak47barrels[Math.floor(Math.random()*ak47barrels.length)];
      var ak47_underbarrel_sel =          ak47underbarrels[Math.floor(Math.random()*ak47underbarrels.length)];
      var ak47_other_sel = ak47others[Math.floor(Math.random()*ak47others.length)];
      var ak47_ammo_sel = ak47ammos[Math.floor(Math.random()*ak47ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak47_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak47_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak47_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak47_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak47_ammo_sel;
    }
    else if (primary_gun_selection == "aug a3")
    {
      var auga3_optic_sel = auga3optics[Math.floor(Math.random()*auga3optics.length)];
      var auga3_barrel_sel = auga3barrels[Math.floor(Math.random()*auga3barrels.length)];
      var auga3_underbarrel_sel =          auga3underbarrels[Math.floor(Math.random()*auga3underbarrels.length)];
      var auga3_other_sel = auga3others[Math.floor(Math.random()*auga3others.length)];
      var auga3_ammo_sel = auga3ammos[Math.floor(Math.random()*auga3ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + auga3_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + auga3_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + auga3_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + auga3_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + auga3_ammo_sel;
    }
    else if (primary_gun_selection == "l85a2")
    {
      var l85a2_optic_sel = l85a2optics[Math.floor(Math.random()*l85a2optics.length)];
      var l85a2_barrel_sel = l85a2barrels[Math.floor(Math.random()*l85a2barrels.length)];
      var l85a2_underbarrel_sel =          l85a2underbarrels[Math.floor(Math.random()*l85a2underbarrels.length)];
      var l85a2_other_sel = l85a2others[Math.floor(Math.random()*l85a2others.length)];
      var l85a2_ammo_sel = l85a2ammos[Math.floor(Math.random()*l85a2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + l85a2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + l85a2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + l85a2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + l85a2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + l85a2_ammo_sel;
    }
    else if (primary_gun_selection == "hk416")
    {
      var hk416_optic_sel = hk416optics[Math.floor(Math.random()*hk416optics.length)];
      var hk416_barrel_sel = hk416barrels[Math.floor(Math.random()*hk416barrels.length)];
      var hk416_underbarrel_sel =          hk416underbarrels[Math.floor(Math.random()*hk416underbarrels.length)];
      var hk416_other_sel = hk416others[Math.floor(Math.random()*hk416others.length)];
      var hk416_ammo_sel = hk416ammos[Math.floor(Math.random()*hk416ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hk416_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hk416_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hk416_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hk416_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hk416_ammo_sel;
    }
    else if (primary_gun_selection == "ak74")
    {
      var ak74_optic_sel = ak74optics[Math.floor(Math.random()*ak74optics.length)];
      var ak74_barrel_sel = ak74barrels[Math.floor(Math.random()*ak74barrels.length)];
      var ak74_underbarrel_sel =          ak74underbarrels[Math.floor(Math.random()*ak74underbarrels.length)];
      var ak74_other_sel = ak74others[Math.floor(Math.random()*ak74others.length)];
      var ak74_ammo_sel = ak74ammos[Math.floor(Math.random()*ak74ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak74_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak74_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak74_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak74_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak74_ammo_sel;
    }
    else if (primary_gun_selection == "akm")
    {
      var akm_optic_sel = akmoptics[Math.floor(Math.random()*akmoptics.length)];
      var akm_barrel_sel = akmbarrels[Math.floor(Math.random()*akmbarrels.length)];
      var akm_underbarrel_sel =          akmunderbarrels[Math.floor(Math.random()*akmunderbarrels.length)];
      var akm_other_sel = akmothers[Math.floor(Math.random()*akmothers.length)];
      var akm_ammo_sel = akmammos[Math.floor(Math.random()*akmammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + akm_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + akm_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + akm_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + akm_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + akm_ammo_sel;
    }
    else if (primary_gun_selection == "ak103")
    {
      var ak103_optic_sel = ak103optics[Math.floor(Math.random()*ak103optics.length)];
      var ak103_barrel_sel = ak103barrels[Math.floor(Math.random()*ak103barrels.length)];
      var ak103_underbarrel_sel =          ak103underbarrels[Math.floor(Math.random()*ak103underbarrels.length)];
      var ak103_other_sel = ak103others[Math.floor(Math.random()*ak103others.length)];
      var ak103_ammo_sel = ak103ammos[Math.floor(Math.random()*ak103ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak103_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak103_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak103_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak103_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak103_ammo_sel;
    }
    else if (primary_gun_selection == "tar-21")
    {
      var tar21_optic_sel = tar21optics[Math.floor(Math.random()*tar21optics.length)];
      var tar21_barrel_sel = tar21barrels[Math.floor(Math.random()*tar21barrels.length)];
      var tar21_underbarrel_sel =          tar21underbarrels[Math.floor(Math.random()*tar21underbarrels.length)];
      var tar21_other_sel = tar21others[Math.floor(Math.random()*tar21others.length)];
      var tar21_ammo_sel = tar21ammos[Math.floor(Math.random()*tar21ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + tar21_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + tar21_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + tar21_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + tar21_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + tar21_ammo_sel;
    }
    else if (primary_gun_selection == "type 88")
    {
      var type88_optic_sel = type88optics[Math.floor(Math.random()*type88optics.length)];
      var type88_barrel_sel = type88barrels[Math.floor(Math.random()*type88barrels.length)];
      var type88_underbarrel_sel =          type88underbarrels[Math.floor(Math.random()*type88underbarrels.length)];
      var type88_other_sel = type88others[Math.floor(Math.random()*type88others.length)];
      var type88_ammo_sel = type88ammos[Math.floor(Math.random()*type88ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + type88_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + type88_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + type88_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + type88_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + type88_ammo_sel;
    }
    else if (primary_gun_selection == "m231")
    {
      var m231_optic_sel = m231optics[Math.floor(Math.random()*m231optics.length)];
      var m231_barrel_sel = m231barrels[Math.floor(Math.random()*m231barrels.length)];
      var m231_underbarrel_sel =          m231underbarrels[Math.floor(Math.random()*m231underbarrels.length)];
      var m231_other_sel = m231others[Math.floor(Math.random()*m231others.length)];
      var m231_ammo_sel = m231ammos[Math.floor(Math.random()*m231ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m231_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m231_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m231_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m231_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m231_ammo_sel;
    }
    else if (primary_gun_selection == "c7a2")
    {
      var c7a2_optic_sel = c7a2optics[Math.floor(Math.random()*c7a2optics.length)];
      var c7a2_barrel_sel = c7a2barrels[Math.floor(Math.random()*c7a2barrels.length)];
      var c7a2_underbarrel_sel =          c7a2underbarrels[Math.floor(Math.random()*c7a2underbarrels.length)];
      var c7a2_other_sel = c7a2others[Math.floor(Math.random()*c7a2others.length)];
      var c7a2_ammo_sel = c7a2ammos[Math.floor(Math.random()*c7a2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + c7a2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + c7a2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + c7a2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + c7a2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + c7a2_ammo_sel;
    }
    else if (primary_gun_selection == "stg-44")
    {
      var stg44_optic_sel = stg44optics[Math.floor(Math.random()*stg44optics.length)];
      var stg44_barrel_sel = stg44barrels[Math.floor(Math.random()*stg44barrels.length)];
      var stg44_underbarrel_sel =          stg44underbarrels[Math.floor(Math.random()*stg44underbarrels.length)];
      var stg44_other_sel = stg44others[Math.floor(Math.random()*stg44others.length)];
      var stg44_ammo_sel = stg44ammos[Math.floor(Math.random()*stg44ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + stg44_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + stg44_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + stg44_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + stg44_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + stg44_ammo_sel;
    }
    else if (primary_gun_selection == "g11k2")
    {
      var g11k2_optic_sel = g11k2optics[Math.floor(Math.random()*g11k2optics.length)];
      var g11k2_barrel_sel = g11k2barrels[Math.floor(Math.random()*g11k2barrels.length)];
      var g11k2_underbarrel_sel =          g11k2underbarrels[Math.floor(Math.random()*g11k2underbarrels.length)];
      var g11k2_other_sel = g11k2others[Math.floor(Math.random()*g11k2others.length)];
      var g11k2_ammo_sel = g11k2ammos[Math.floor(Math.random()*g11k2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + g11k2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + g11k2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + g11k2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + g11k2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + g11k2_ammo_sel;
    }
    else if (primary_gun_selection == "m14")
    {
      var m14_optic_sel = m14optics[Math.floor(Math.random()*m14optics.length)];
      var m14_barrel_sel = m14barrels[Math.floor(Math.random()*m14barrels.length)];
      var m14_underbarrel_sel =          m14underbarrels[Math.floor(Math.random()*m14underbarrels.length)];
      var m14_other_sel = m14others[Math.floor(Math.random()*m14others.length)];
      var m14_ammo_sel = m14ammos[Math.floor(Math.random()*m14ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m14_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m14_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m14_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m14_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m14_ammo_sel;
    }
    else if (primary_gun_selection == "beowulf ecr")
    {
      var beowulfecr_optic_sel = beowulfecroptics[Math.floor(Math.random()*beowulfecroptics.length)];
      var beowulfecr_barrel_sel = beowulfecrbarrels[Math.floor(Math.random()*beowulfecrbarrels.length)];
      var beowulfecr_underbarrel_sel =          beowulfecrunderbarrels[Math.floor(Math.random()*beowulfecrunderbarrels.length)];
      var beowulfecr_other_sel = beowulfecrothers[Math.floor(Math.random()*beowulfecrothers.length)];
      var beowulfecr_ammo_sel = beowulfecrammos[Math.floor(Math.random()*beowulfecrammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + beowulfecr_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + beowulfecr_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + beowulfecr_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + beowulfecr_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + beowulfecr_ammo_sel;
    }
    else if (primary_gun_selection == "scar-h")
    {
      var scarh_optic_sel = scarhoptics[Math.floor(Math.random()*scarhoptics.length)];
      var scarh_barrel_sel = scarhbarrels[Math.floor(Math.random()*scarhbarrels.length)];
      var scarh_underbarrel_sel =          scarhunderbarrels[Math.floor(Math.random()*scarhunderbarrels.length)];
      var scarh_other_sel = scarhothers[Math.floor(Math.random()*scarhothers.length)];
      var scarh_ammo_sel = scarhammos[Math.floor(Math.random()*scarhammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + scarh_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + scarh_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + scarh_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + scarh_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + scarh_ammo_sel;
    }
    else if (primary_gun_selection == "ak12br")
    {
      var ak12br_optic_sel = ak12broptics[Math.floor(Math.random()*ak12broptics.length)];
      var ak12br_barrel_sel = ak12brbarrels[Math.floor(Math.random()*ak12brbarrels.length)];
      var ak12br_underbarrel_sel =          ak12brunderbarrels[Math.floor(Math.random()*ak12brunderbarrels.length)];
      var ak12br_other_sel = ak12brothers[Math.floor(Math.random()*ak12brothers.length)];
      var ak12br_ammo_sel = ak12brammos[Math.floor(Math.random()*ak12brammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak12br_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak12br_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak12br_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak12br_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak12br_ammo_sel;
    }
    else if (primary_gun_selection == "g3a3")
    {
      var g3a3_optic_sel = g3a3optics[Math.floor(Math.random()*g3a3optics.length)];
      var g3a3_barrel_sel = g3a3barrels[Math.floor(Math.random()*g3a3barrels.length)];
      var g3a3_underbarrel_sel = g3a3underbarrels[Math.floor(Math.random()*g3a3underbarrels.length)];
      var g3a3_other_sel = g3a3others[Math.floor(Math.random()*g3a3others.length)];
      var g3a3_ammo_sel = g3a3ammos[Math.floor(Math.random()*g3a3ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + g3a3_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + g3a3_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + g3a3_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + g3a3_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + g3a3_ammo_sel;
    }
    else if (primary_gun_selection == "ag-3")
    {
      var ag3_optic_sel = ag3optics[Math.floor(Math.random()*ag3optics.length)];
      var ag3_barrel_sel = ag3barrels[Math.floor(Math.random()*ag3barrels.length)];
      var ag3_underbarrel_sel =          ag3underbarrels[Math.floor(Math.random()*ag3underbarrels.length)];
      var ag3_other_sel = ag3others[Math.floor(Math.random()*ag3others.length)];
      var ag3_ammo_sel = ag3ammos[Math.floor(Math.random()*ag3ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ag3_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ag3_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ag3_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ag3_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ag3_ammo_sel;
    }
    else if (primary_gun_selection == "hk417")
    {
      var hk417_optic_sel = hk417optics[Math.floor(Math.random()*hk417optics.length)];
      var hk417_barrel_sel = hk417barrels[Math.floor(Math.random()*hk417barrels.length)];
      var hk417_underbarrel_sel =          hk417underbarrels[Math.floor(Math.random()*hk417underbarrels.length)];
      var hk417_other_sel = hk417others[Math.floor(Math.random()*hk417others.length)];
      var hk417_ammo_sel = hk417ammos[Math.floor(Math.random()*hk417ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hk417_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hk417_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hk417_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hk417_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hk417_ammo_sel;
    }
    else if (primary_gun_selection == "henry 45-70")
    {
      var henry4570_optic_sel = henry4570optics[Math.floor(Math.random()*henry4570optics.length)];
      var henry4570_barrel_sel = henry4570barrels[Math.floor(Math.random()*henry4570barrels.length)];
      var henry4570_underbarrel_sel =          henry4570underbarrels[Math.floor(Math.random()*henry4570underbarrels.length)];
      var henry4570_other_sel = henry4570others[Math.floor(Math.random()*henry4570others.length)];
      var henry4570_ammo_sel = henry4570ammos[Math.floor(Math.random()*henry4570ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + henry4570_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + henry4570_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + henry4570_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + henry4570_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + henry4570_ammo_sel;
    }
    else if (primary_gun_selection == "fal 50.00")
    {
      var fal50_optic_sel = fal50optics[Math.floor(Math.random()*fal50optics.length)];
      var fal50_barrel_sel = fal50barrels[Math.floor(Math.random()*fal50barrels.length)];
      var fal50_underbarrel_sel = fal50underbarrels[Math.floor(Math.random()*fal50underbarrels.length)];
      var fal50_other_sel = fal50others[Math.floor(Math.random()*fal50others.length)];
      var fal50_ammo_sel = fal50ammos[Math.floor(Math.random()*fal50ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + fal50_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + fal50_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + fal50_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + fal50_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + fal50_ammo_sel;
    }
    else if (primary_gun_selection == "m4a1")
    {
      var m4a1_optic_sel = m4a1optics[Math.floor(Math.random()*m4a1optics.length)];
      var m4a1_barrel_sel = m4a1barrels[Math.floor(Math.random()*m4a1barrels.length)];
      var m4a1_underbarrel_sel =          m4a1underbarrels[Math.floor(Math.random()*m4a1underbarrels.length)];
      var m4a1_other_sel = m4a1others[Math.floor(Math.random()*m4a1others.length)];
      var m4a1_ammo_sel = m4a1ammos[Math.floor(Math.random()*m4a1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m4a1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m4a1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m4a1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m4a1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m4a1_ammo_sel;
    }
    else if (primary_gun_selection == "g36k")
    {
      var g36k_optic_sel = g36koptics[Math.floor(Math.random()*g36koptics.length)];
      var g36k_barrel_sel = g36kbarrels[Math.floor(Math.random()*g36kbarrels.length)];
      var g36k_underbarrel_sel =          g36kunderbarrels[Math.floor(Math.random()*g36kunderbarrels.length)];
      var g36k_other_sel = g36kothers[Math.floor(Math.random()*g36kothers.length)];
      var g36k_ammo_sel = g36kammos[Math.floor(Math.random()*g36kammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + g36k_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + g36k_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + g36k_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + g36k_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + g36k_ammo_sel;
    }
    else if (primary_gun_selection == "m4")
    {
      var m4_optic_sel = m4optics[Math.floor(Math.random()*m4optics.length)];
      var m4_barrel_sel = m4barrels[Math.floor(Math.random()*m4barrels.length)];
      var m4_underbarrel_sel =          m4underbarrels[Math.floor(Math.random()*m4underbarrels.length)];
      var m4_other_sel = m4others[Math.floor(Math.random()*m4others.length)];
      var m4_ammo_sel = m4ammos[Math.floor(Math.random()*m4ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m4_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m4_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m4_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m4_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m4_ammo_sel;
    }
    else if (primary_gun_selection == "l22")
    {
      var l22_optic_sel = l22optics[Math.floor(Math.random()*l22optics.length)];
      var l22_barrel_sel = l22barrels[Math.floor(Math.random()*l22barrels.length)];
      var l22_underbarrel_sel =          l22underbarrels[Math.floor(Math.random()*l22underbarrels.length)];
      var l22_other_sel = l22others[Math.floor(Math.random()*l22others.length)];
      var l22_ammo_sel = l22ammos[Math.floor(Math.random()*l22ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + l22_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + l22_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + l22_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + l22_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + l22_ammo_sel;
    }
    else if (primary_gun_selection == "scar pdw")
    {
      var scarpdw_optic_sel = scarpdwoptics[Math.floor(Math.random()*scarpdwoptics.length)];
      var scarpdw_barrel_sel = scarpdwbarrels[Math.floor(Math.random()*scarpdwbarrels.length)];
      var scarpdw_underbarrel_sel =          scarpdwunderbarrels[Math.floor(Math.random()*scarpdwunderbarrels.length)];
      var scarpdw_other_sel = scarpdwothers[Math.floor(Math.random()*scarpdwothers.length)];
      var scarpdw_ammo_sel = scarpdwammos[Math.floor(Math.random()*scarpdwammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + scarpdw_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + scarpdw_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + scarpdw_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + scarpdw_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + scarpdw_ammo_sel;
    }
    else if (primary_gun_selection == "aku12")
    {
      var aku12_optic_sel = aku12optics[Math.floor(Math.random()*aku12optics.length)];
      var aku12_barrel_sel = aku12barrels[Math.floor(Math.random()*aku12barrels.length)];
      var aku12_underbarrel_sel =          aku12underbarrels[Math.floor(Math.random()*aku12underbarrels.length)];
      var aku12_other_sel = aku12others[Math.floor(Math.random()*aku12others.length)];
      var aku12_ammo_sel = aku12ammos[Math.floor(Math.random()*aku12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + aku12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + aku12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + aku12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + aku12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + aku12_ammo_sel;
    }
    else if (primary_gun_selection == "groza-1")
    {
      var groza1_optic_sel = groza1optics[Math.floor(Math.random()*groza1optics.length)];
      var groza1_barrel_sel = groza1barrels[Math.floor(Math.random()*groza1barrels.length)];
      var groza1_underbarrel_sel =          groza1underbarrels[Math.floor(Math.random()*groza1underbarrels.length)];
      var groza1_other_sel = groza1others[Math.floor(Math.random()*groza1others.length)];
      var groza1_ammo_sel = groza1ammos[Math.floor(Math.random()*groza1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + groza1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + groza1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + groza1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + groza1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + groza1_ammo_sel;
    }
    else if (primary_gun_selection == "ots-126")
    {
      var ots126_optic_sel = ots126optics[Math.floor(Math.random()*ots126optics.length)];
      var ots126_barrel_sel = ots126barrels[Math.floor(Math.random()*ots126barrels.length)];
      var ots126_underbarrel_sel =          ots126underbarrels[Math.floor(Math.random()*ots126underbarrels.length)];
      var ots126_other_sel = ots126others[Math.floor(Math.random()*ots126others.length)];
      var ots126_ammo_sel = ots126ammos[Math.floor(Math.random()*ots126ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ots126_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ots126_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ots126_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ots126_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ots126_ammo_sel;
    }
    else if (primary_gun_selection == "ak12c")
    {
      var ak12c_optic_sel = ak12coptics[Math.floor(Math.random()*ak12coptics.length)];
      var ak12c_barrel_sel = ak12cbarrels[Math.floor(Math.random()*ak12cbarrels.length)];
      var ak12c_underbarrel_sel =          ak12cunderbarrels[Math.floor(Math.random()*ak12cunderbarrels.length)];
      var ak12c_other_sel = ak12cothers[Math.floor(Math.random()*ak12cothers.length)];
      var ak12c_ammo_sel = ak12cammos[Math.floor(Math.random()*ak12cammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak12c_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak12c_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak12c_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak12c_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak12c_ammo_sel;
    }
    else if (primary_gun_selection == "honey badger")
    {
      var honeybadger_optic_sel = honeybadgeroptics[Math.floor(Math.random()*honeybadgeroptics.length)];
      var honeybadger_barrel_sel = honeybadgerbarrels[Math.floor(Math.random()*honeybadgerbarrels.length)];
      var honeybadger_underbarrel_sel =          honeybadgerunderbarrels[Math.floor(Math.random()*honeybadgerunderbarrels.length)];
      var honeybadger_other_sel = honeybadgerothers[Math.floor(Math.random()*honeybadgerothers.length)];
      var honeybadger_ammo_sel = honeybadgerammos[Math.floor(Math.random()*honeybadgerammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + honeybadger_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + honeybadger_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + honeybadger_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + honeybadger_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + honeybadger_ammo_sel;
    }
    else if (primary_gun_selection == "k1a")
    {
      var k1a_optic_sel = k1aoptics[Math.floor(Math.random()*k1aoptics.length)];
      var k1a_barrel_sel = k1abarrels[Math.floor(Math.random()*k1abarrels.length)];
      var k1a_underbarrel_sel =          k1aunderbarrels[Math.floor(Math.random()*k1aunderbarrels.length)];
      var k1a_other_sel = k1aothers[Math.floor(Math.random()*k1aothers.length)];
      var k1a_ammo_sel = k1aammos[Math.floor(Math.random()*k1aammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + k1a_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + k1a_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + k1a_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + k1a_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + k1a_ammo_sel;
    }
    else if (primary_gun_selection == "sr-3m")
    {
      var sr3m_optic_sel = sr3moptics[Math.floor(Math.random()*sr3moptics.length)];
      var sr3m_barrel_sel = sr3mbarrels[Math.floor(Math.random()*sr3mbarrels.length)];
      var sr3m_underbarrel_sel =          sr3munderbarrels[Math.floor(Math.random()*sr3munderbarrels.length)];
      var sr3m_other_sel = sr3mothers[Math.floor(Math.random()*sr3mothers.length)];
      var sr3m_ammo_sel = sr3mammos[Math.floor(Math.random()*sr3mammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + sr3m_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + sr3m_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + sr3m_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + sr3m_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + sr3m_ammo_sel;
    }
    else if (primary_gun_selection == "groza-4")
    {
      var groza4_optic_sel = groza4optics[Math.floor(Math.random()*groza4optics.length)];
      var groza4_barrel_sel = groza4barrels[Math.floor(Math.random()*groza4barrels.length)];
      var groza4_underbarrel_sel =          groza4underbarrels[Math.floor(Math.random()*groza4underbarrels.length)];
      var groza4_other_sel = groza4others[Math.floor(Math.random()*groza4others.length)];
      var groza4_ammo_sel = groza4ammos[Math.floor(Math.random()*groza4ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + groza4_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + groza4_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + groza4_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + groza4_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + groza4_ammo_sel;
    }
    else if (primary_gun_selection == "mc51")
    {
      var mc51_optic_sel = mc51optics[Math.floor(Math.random()*mc51optics.length)];
      var mc51_barrel_sel = mc51barrels[Math.floor(Math.random()*mc51barrels.length)];
      var mc51_underbarrel_sel =          mc51underbarrels[Math.floor(Math.random()*mc51underbarrels.length)];
      var mc51_other_sel = mc51others[Math.floor(Math.random()*mc51others.length)];
      var mc51_ammo_sel = mc51ammos[Math.floor(Math.random()*mc51ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mc51_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mc51_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mc51_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mc51_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mc51_ammo_sel;
    }
    else if (primary_gun_selection == "fal 50.63 para")
    {
      var fal5063para_optic_sel = fal5063paraoptics[Math.floor(Math.random()*fal5063paraoptics.length)];
      var fal5063para_barrel_sel = fal5063parabarrels[Math.floor(Math.random()*fal5063parabarrels.length)];
      var fal5063para_underbarrel_sel =          fal5063paraunderbarrels[Math.floor(Math.random()*fal5063paraunderbarrels.length)];
      var fal5063para_other_sel = fal5063paraothers[Math.floor(Math.random()*fal5063paraothers.length)];
      var fal5063para_ammo_sel = fal5063paraammos[Math.floor(Math.random()*fal5063paraammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + fal5063para_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + fal5063para_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + fal5063para_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + fal5063para_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + fal5063para_ammo_sel;
    }
    else if (primary_gun_selection == "1858 carbine")
    {
      var carbine1858_optic_sel = carbine1858optics[Math.floor(Math.random()*carbine1858optics.length)];
      var carbine1858_barrel_sel = carbine1858barrels[Math.floor(Math.random()*carbine1858barrels.length)];
      var carbine1858_underbarrel_sel =          carbine1858underbarrels[Math.floor(Math.random()*carbine1858underbarrels.length)];
      var carbine1858_others_sel = carbine1858others[Math.floor(Math.random()*carbine1858underbarrels.length)];
      var carbine1858_ammo_sel = carbine1858ammos[Math.floor(Math.random()*carbine1858ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + carbine1858_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + carbine1858_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + carbine1858_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + carbine1858_others_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + carbine1858_ammo_sel;
    }
    else if (primary_gun_selection == "ak105")
    {
      var ak105_optic_sel = ak105optics[Math.floor(Math.random()*ak105optics.length)];
      var ak105_barrel_sel = ak105barrels[Math.floor(Math.random()*ak105barrels.length)];
      var ak105_underbarrel_sel =          ak105underbarrels[Math.floor(Math.random()*ak105underbarrels.length)];
      var ak105_other_sel = ak105others[Math.floor(Math.random()*ak105others.length)];
      var ak105_ammo_sel = ak105ammos[Math.floor(Math.random()*ak105ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ak105_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ak105_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ak105_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ak105_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ak105_ammo_sel;
    }
    else if (primary_gun_selection == "jury")
    {
      var jury_optic_sel = juryoptics[Math.floor(Math.random()*juryoptics.length)];
      var jury_barrel_sel = jurybarrels[Math.floor(Math.random()*jurybarrels.length)];
      var jury_underbarrel_sel =          juryunderbarrels[Math.floor(Math.random()*juryunderbarrels.length)];
      var jury_other_sel = juryothers[Math.floor(Math.random()*juryothers.length)];
      var jury_ammo_sel = juryammos[Math.floor(Math.random()*juryammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + jury_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + jury_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + jury_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + jury_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + jury_ammo_sel;
    }
    else if (primary_gun_selection == "kac srr")
    {
      var kacsrr_optic_sel = kacsrroptics[Math.floor(Math.random()*kacsrroptics.length)];
      var kacsrr_barrel_sel = kacsrrbarrels[Math.floor(Math.random()*kacsrrbarrels.length)];
      var kacsrr_underbarrel_sel =          kacsrrunderbarrels[Math.floor(Math.random()*kacsrrunderbarrels.length)];
      var kacsrr_other_sel = kacsrrothers[Math.floor(Math.random()*kacsrrothers.length)];
      var kacsrr_ammo_sel = kacsrrammos[Math.floor(Math.random()*kacsrrammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + kacsrr_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + kacsrr_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + kacsrr_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + kacsrr_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + kacsrr_ammo_sel;
    }
    else if (primary_gun_selection == "gyrojet carbine")
    {
      var gyrojetcarbine_optic_sel = gyrojetcarbineoptics[Math.floor(Math.random()*gyrojetcarbineoptics.length)];
      var gyrojetcarbine_barrel_sel = gyrojetcarbinebarrels[Math.floor(Math.random()*gyrojetcarbinebarrels.length)];
      var gyrojetcarbine_underbarrel_sel =          gyrojetcarbineunderbarrels[Math.floor(Math.random()*gyrojetcarbineunderbarrels.length)];
      var gyrojetcarbine_other_sel = gyrojetcarbineothers[Math.floor(Math.random()*gyrojetcarbineothers.length)];
      var gyrojetcarbine_ammo_sel = gyrojetcarbineammos[Math.floor(Math.random()*gyrojetcarbineammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + gyrojetcarbine_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + gyrojetcarbine_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + gyrojetcarbine_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + gyrojetcarbine_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + gyrojetcarbine_ammo_sel;
    }
    else if (primary_gun_selection == "c8a2")
    {
      var c8a2_optic_sel = c8a2optics[Math.floor(Math.random()*c8a2optics.length)];
      var c8a2_barrel_sel = c8a2barrels[Math.floor(Math.random()*c8a2barrels.length)];
      var c8a2_underbarrel_sel =          c8a2underbarrels[Math.floor(Math.random()*c8a2underbarrels.length)];
      var c8a2_other_sel = c8a2others[Math.floor(Math.random()*c8a2others.length)];
      var c8a2_ammo_sel = c8a2ammos[Math.floor(Math.random()*c8a2ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + c8a2_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + c8a2_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + c8a2_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + c8a2_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + c8a2_ammo_sel;
    }
    else if (primary_gun_selection == "x95r")
    {
      var x95r_optic_sel = x95roptics[Math.floor(Math.random()*x95roptics.length)];
      var x95r_barrel_sel = x95rbarrels[Math.floor(Math.random()*x95rbarrels.length)];
      var x95r_underbarrel_sel =          x95runderbarrels[Math.floor(Math.random()*x95runderbarrels.length)];
      var x95r_other_sel = x95rothers[Math.floor(Math.random()*x95rothers.length)];
      var x95r_ammo_sel = x95rammos[Math.floor(Math.random()*x95rammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + x95r_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + x95r_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + x95r_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + x95r_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + x95r_ammo_sel;
    }
    else if (primary_gun_selection == "hk51b")
    {
      var hk51b_optic_sel = hk51boptics[Math.floor(Math.random()*hk51boptics.length)];
      var hk51b_barrel_sel = hk51bbarrels[Math.floor(Math.random()*hk51bbarrels.length)];
      var hk51b_underbarrel_sel =          hk51bunderbarrels[Math.floor(Math.random()*hk51bunderbarrels.length)];
      var hk51b_other_sel = hk51bothers[Math.floor(Math.random()*hk51bothers.length)];
      var hk51b_ammo_sel = hk51bammos[Math.floor(Math.random()*hk51bammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hk51b_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hk51b_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hk51b_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hk51b_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hk51b_ammo_sel;
    }
    else if (primary_gun_selection == "can cannon")
    {
      var cancannon_optic_sel = cancannonoptics[Math.floor(Math.random()*cancannonoptics.length)];
      var cancannon_barrel_sel = cancannonbarrels[Math.floor(Math.random()*cancannonbarrels.length)];
      var cancannon_underbarrel_sel =          cancannonunderbarrels[Math.floor(Math.random()*cancannonunderbarrels.length)];
      var cancannon_other_sel = cancannonothers[Math.floor(Math.random()*cancannonothers.length)];
      var cancannon_ammo_sel = cancannonammos[Math.floor(Math.random()*cancannonammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + cancannon_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + cancannon_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + cancannon_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + cancannon_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + cancannon_ammo_sel;
    }
    else if (primary_gun_selection == "ksg 12")
    {
      var ksg12_optic_sel = ksg12optics[Math.floor(Math.random()*ksg12optics.length)];
      var ksg12_barrel_sel = ksg12barrels[Math.floor(Math.random()*ksg12barrels.length)];
      var ksg12_underbarrel_sel =          ksg12underbarrels[Math.floor(Math.random()*ksg12underbarrels.length)];
      var ksg12_other_sel = ksg12others[Math.floor(Math.random()*ksg12others.length)];
      var ksg12_ammo_sel = ksg12ammos[Math.floor(Math.random()*ksg12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ksg12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ksg12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ksg12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ksg12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ksg12_ammo_sel;
    }
    else if (primary_gun_selection == "model 870")
    {
      var model870_optic_sel = model870optics[Math.floor(Math.random()*model870optics.length)];
      var model870_barrel_sel = model870barrels[Math.floor(Math.random()*model870barrels.length)];
      var model870_underbarrel_sel =          model870underbarrels[Math.floor(Math.random()*model870underbarrels.length)];
      var model870_other_sel = model870others[Math.floor(Math.random()*model870others.length)];
      var model870_ammo_sel = model870ammos[Math.floor(Math.random()*model870ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + model870_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + model870_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + model870_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + model870_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + model870_ammo_sel;
    }
    else if (primary_gun_selection == "dbv12")
    {
      var dbv12_optic_sel = dbv12optics[Math.floor(Math.random()*dbv12optics.length)];
      var dbv12_barrel_sel = dbv12barrels[Math.floor(Math.random()*dbv12barrels.length)];
      var dbv12_underbarrel_sel =          dbv12underbarrels[Math.floor(Math.random()*dbv12underbarrels.length)];
      var dbv12_other_sel = dbv12others[Math.floor(Math.random()*dbv12others.length)];
      var dbv12_ammo_sel = dbv12ammos[Math.floor(Math.random()*dbv12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + dbv12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + dbv12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + dbv12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + dbv12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + dbv12_ammo_sel;
    }
    else if (primary_gun_selection == "ks-23m")
    {
      var ks23m_optic_sel = ks23moptics[Math.floor(Math.random()*ks23moptics.length)];
      var ks23m_barrel_sel = ks23mbarrels[Math.floor(Math.random()*ks23mbarrels.length)];
      var ks23m_underbarrel_sel =          ks23munderbarrels[Math.floor(Math.random()*ks23munderbarrels.length)];
      var ks23m_other_sel = ks23mothers[Math.floor(Math.random()*ks23mothers.length)];
      var ks23m_ammo_sel = ks23mammos[Math.floor(Math.random()*ks23mammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ks23m_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ks23m_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ks23m_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ks23m_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ks23m_ammo_sel;
    }
    else if (primary_gun_selection == "saiga-12")
    {
      var saiga12_optic_sel = saiga12optics[Math.floor(Math.random()*saiga12optics.length)];
      var saiga12_barrel_sel = saiga12barrels[Math.floor(Math.random()*saiga12barrels.length)];
      var saiga12_underbarrel_sel =          saiga12underbarrels[Math.floor(Math.random()*saiga12underbarrels.length)];
      var saiga12_other_sel = saiga12others[Math.floor(Math.random()*saiga12others.length)];
      var saiga12_ammo_sel = saiga12ammos[Math.floor(Math.random()*saiga12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + saiga12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + saiga12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + saiga12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + saiga12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + saiga12_ammo_sel;
    }
    else if (primary_gun_selection == "stevens db")
    {
      var stevensdb_optic_sel = stevensdboptics[Math.floor(Math.random()*stevensdboptics.length)];
      var stevensdb_barrel_sel = stevensdbbarrels[Math.floor(Math.random()*stevensdbbarrels.length)];
      var stevensdb_underbarrel_sel =          stevensdbunderbarrels[Math.floor(Math.random()*stevensdbunderbarrels.length)];
      var stevensdb_other_sel = stevensdbothers[Math.floor(Math.random()*stevensdbothers.length)];
      var stevensdb_ammo_sel = stevensdbammos[Math.floor(Math.random()*stevensdbammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + stevensdb_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + stevensdb_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + stevensdb_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + stevensdb_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + stevensdb_ammo_sel;
    }
    else if (primary_gun_selection == "e gun")
    {
      var egun_optic_sel = egunoptics[Math.floor(Math.random()*egunoptics.length)];
      var egun_barrel_sel = egunbarrels[Math.floor(Math.random()*egunbarrels.length)];
      var egun_underbarrel_sel =          egununderbarrels[Math.floor(Math.random()*egununderbarrels.length)];
      var egun_other_sel = egunothers[Math.floor(Math.random()*egunothers.length)];
      var egun_ammo_sel = egunammos[Math.floor(Math.random()*egunammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + egun_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + egun_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + egun_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + egun_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + egun_ammo_sel;
    }
    else if (primary_gun_selection == "aa-12")
    {
      var aa12_optic_sel = aa12optics[Math.floor(Math.random()*aa12optics.length)];
      var aa12_barrel_sel = aa12barrels[Math.floor(Math.random()*aa12barrels.length)];
      var aa12_underbarrel_sel =          aa12underbarrels[Math.floor(Math.random()*aa12underbarrels.length)];
      var aa12_other_sel = aa12others[Math.floor(Math.random()*aa12others.length)];
      var aa12_ammo_sel = aa12ammos[Math.floor(Math.random()*aa12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + aa12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + aa12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + aa12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + aa12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + aa12_ammo_sel;
    }
    else if (primary_gun_selection == "spas-12")
    {
      var spas12_optic_sel = spas12optics[Math.floor(Math.random()*spas12optics.length)];
      var spas12_barrel_sel = spas12barrels[Math.floor(Math.random()*spas12barrels.length)];
      var spas12_underbarrel_sel =          spas12underbarrels[Math.floor(Math.random()*spas12underbarrels.length)];
      var spas12_other_sel = spas12others[Math.floor(Math.random()*spas12others.length)];
      var spas12_ammo_sel = spas12ammos[Math.floor(Math.random()*spas12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + spas12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + spas12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + spas12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + spas12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + spas12_ammo_sel;
    }
    else if (primary_gun_selection == "dt11 pro")
    {
      var dt11pro_optic_sel = dt11prooptics[Math.floor(Math.random()*dt11prooptics.length)];
      var dt11pro_barrel_sel = dt11probarrels[Math.floor(Math.random()*dt11probarrels.length)];
      var dt11pro_underbarrel_sel = dt11prounderbarrels[Math.floor(Math.random()*dt11prounderbarrels.length)];
      var dt11pro_other_sel = dt11proothers[Math.floor(Math.random()*dt11proothers.length)];
      var dt11pro_ammo_sel = dt11proammos[Math.floor(Math.random()*dt11proammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + dt11pro_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + dt11pro_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + dt11pro_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + dt11pro_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + dt11pro_ammo_sel;
    }
    else if (primary_gun_selection == "usas-12")
    {
      var usas12_optic_sel = usas12optics[Math.floor(Math.random()*usas12optics.length)];
      var usas12_barrel_sel = usas12barrels[Math.floor(Math.random()*usas12barrels.length)];
      var usas12_underbarrel_sel =          usas12underbarrels[Math.floor(Math.random()*usas12underbarrels.length)];
      var usas12_other_sel = usas12others[Math.floor(Math.random()*usas12others.length)];
      var usas12_ammo_sel = usas12ammos[Math.floor(Math.random()*usas12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + usas12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + usas12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + usas12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + usas12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + usas12_ammo_sel;
    }
    else if (primary_gun_selection == "mp5k")
    {
      var mp5k_optic_sel = mp5koptics[Math.floor(Math.random()*mp5koptics.length)];
      var mp5k_barrel_sel = mp5kbarrels[Math.floor(Math.random()*mp5kbarrels.length)];
      var mp5k_underbarrel_sel = mp5kunderbarrels[Math.floor(Math.random()*mp5kunderbarrels.length)];
      var mp5k_other_sel = mp5kothers[Math.floor(Math.random()*mp5kothers.length)];
      var mp5k_ammo_sel = mp5kammos[Math.floor(Math.random()*mp5kammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp5k_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp5k_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp5k_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp5k_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp5k_ammo_sel;
    }
    else if (primary_gun_selection == "ump45")
    {
      var ump45_optic_sel = ump45optics[Math.floor(Math.random()*ump45optics.length)];
      var ump45_barrel_sel = ump45barrels[Math.floor(Math.random()*ump45barrels.length)];
      var ump45_underbarrel_sel = ump45underbarrels[Math.floor(Math.random()*ump45underbarrels.length)];
      var ump45_other_sel = ump45others[Math.floor(Math.random()*ump45others.length)];
      var ump45_ammo_sel = ump45ammos[Math.floor(Math.random()*ump45ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ump45_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ump45_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ump45_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ump45_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ump45_ammo_sel;
    }
    else if (primary_gun_selection == "g36c")
    {
      var g36c_optic_sel = g36coptics[Math.floor(Math.random()*g36coptics.length)];
      var g36c_barrel_sel = g36cbarrels[Math.floor(Math.random()*g36cbarrels.length)];
      var g36c_underbarrel_sel = g36cunderbarrels[Math.floor(Math.random()*g36cunderbarrels.length)];
      var g36c_other_sel = g36cothers[Math.floor(Math.random()*g36cothers.length)];
      var g36c_ammo_sel = g36cammos[Math.floor(Math.random()*g36cammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + g36c_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + g36c_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + g36c_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + g36c_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + g36c_ammo_sel;
    }
    else if (primary_gun_selection == "mp7")
    {
      var mp7_optic_sel = mp7optics[Math.floor(Math.random()*mp7optics.length)];
      var mp7_barrel_sel = mp7barrels[Math.floor(Math.random()*mp7barrels.length)];
      var mp7_underbarrel_sel = mp7underbarrels[Math.floor(Math.random()*mp7underbarrels.length)];
      var mp7_other_sel = mp7others[Math.floor(Math.random()*mp7others.length)];
      var mp7_ammo_sel = mp7ammos[Math.floor(Math.random()*mp7ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp7_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp7_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp7_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp7_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp7_ammo_sel;
    }
    else if (primary_gun_selection == "mac10")
    {
      var mac10_optic_sel = mac10optics[Math.floor(Math.random()*mac10optics.length)];
      var mac10_barrel_sel = mac10barrels[Math.floor(Math.random()*mac10barrels.length)];
      var mac10_underbarrel_sel = mac10underbarrels[Math.floor(Math.random()*mac10underbarrels.length)];
      var mac10_other_sel = mac10others[Math.floor(Math.random()*mac10others.length)];
      var mac10_ammo_sel = mac10ammos[Math.floor(Math.random()*mac10ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mac10_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mac10_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mac10_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mac10_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mac10_ammo_sel;
    }
    else if (primary_gun_selection == "p90")
    {
      var p90_optic_sel = p90optics[Math.floor(Math.random()*p90optics.length)];
      var p90_barrel_sel = p90barrels[Math.floor(Math.random()*p90barrels.length)];
      var p90_underbarrel_sel = p90underbarrels[Math.floor(Math.random()*p90underbarrels.length)];
      var p90_other_sel = p90others[Math.floor(Math.random()*p90others.length)];
      var p90_ammo_sel = p90ammos[Math.floor(Math.random()*p90ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + p90_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + p90_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + p90_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + p90_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + p90_ammo_sel;
    }
    else if (primary_gun_selection == "mp5")
    {
      var mp5_optic_sel = mp5optics[Math.floor(Math.random()*mp5optics.length)];
      var mp5_barrel_sel = mp5barrels[Math.floor(Math.random()*mp5barrels.length)];
      var mp5_underbarrel_sel = mp5underbarrels[Math.floor(Math.random()*mp5underbarrels.length)];
      var mp5_other_sel = mp5others[Math.floor(Math.random()*mp5others.length)];
      var mp5_ammo_sel = mp5ammos[Math.floor(Math.random()*mp5ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp5_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp5_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp5_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp5_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp5_ammo_sel;
    }
    else if (primary_gun_selection == "colt smg 633")
    {
      var coltsmg633_optic_sel = coltsmg633optics[Math.floor(Math.random()*coltsmg633optics.length)];
      var coltsmg633_barrel_sel = coltsmg633barrels[Math.floor(Math.random()*coltsmg633barrels.length)];
      var coltsmg633_underbarrel_sel = coltsmg633underbarrels[Math.floor(Math.random()*coltsmg633underbarrels.length)];
      var coltsmg633_other_sel = coltsmg633others[Math.floor(Math.random()*coltsmg633others.length)];
      var coltsmg633_ammo_sel = coltsmg633ammos[Math.floor(Math.random()*coltsmg633ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + coltsmg633_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + coltsmg633_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + coltsmg633_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + coltsmg633_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + coltsmg633_ammo_sel;
    }
    else if (primary_gun_selection == "l2a3")
    {
      var l2a3_optic_sel = l2a3optics[Math.floor(Math.random()*l2a3optics.length)];
      var l2a3_barrel_sel = l2a3barrels[Math.floor(Math.random()*l2a3barrels.length)];
      var l2a3_underbarrel_sel = l2a3underbarrels[Math.floor(Math.random()*l2a3underbarrels.length)];
      var l2a3_other_sel = l2a3others[Math.floor(Math.random()*l2a3others.length)];
      var l2a3_ammo_sel = l2a3ammos[Math.floor(Math.random()*l2a3ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + l2a3_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + l2a3_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + l2a3_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + l2a3_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + l2a3_ammo_sel;
    }
    else if (primary_gun_selection == "mp5sd")
    {
      var mp5sd_optic_sel = mp5sdoptics[Math.floor(Math.random()*mp5sdoptics.length)];
      var mp5sd_barrel_sel = mp5sdbarrels[Math.floor(Math.random()*mp5sdbarrels.length)];
      var mp5sd_underbarrel_sel = mp5sdunderbarrels[Math.floor(Math.random()*mp5sdunderbarrels.length)];
      var mp5sd_other_sel = mp5sdothers[Math.floor(Math.random()*mp5sdothers.length)];
      var mp5sd_ammo_sel = mp5sdammos[Math.floor(Math.random()*mp5sdammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp5sd_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp5sd_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp5sd_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp5sd_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp5sd_ammo_sel;
    }
    else if (primary_gun_selection == "mp10")
    {
      var mp10_optic_sel = mp10optics[Math.floor(Math.random()*mp10optics.length)];
      var mp10_barrel_sel = mp10barrels[Math.floor(Math.random()*mp10barrels.length)];
      var mp10_underbarrel_sel = mp10underbarrels[Math.floor(Math.random()*mp10underbarrels.length)];
      var mp10_other_sel = mp10others[Math.floor(Math.random()*mp10others.length)];
      var mp10_ammo_sel = mp10ammos[Math.floor(Math.random()*mp10ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp10_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp10_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp10_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp10_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp10_ammo_sel;
    }
    else if (primary_gun_selection == "m3a1")
    {
      var m3a1_optic_sel = m3a1optics[Math.floor(Math.random()*m3a1optics.length)];
      var m3a1_barrel_sel = m3a1barrels[Math.floor(Math.random()*m3a1barrels.length)];
      var m3a1_underbarrel_sel = m3a1underbarrels[Math.floor(Math.random()*m3a1underbarrels.length)];
      var m3a1_other_sel = m3a1others[Math.floor(Math.random()*m3a1others.length)];
      var m3a1_ammo_sel = m3a1ammos[Math.floor(Math.random()*m3a1ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m3a1_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m3a1_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m3a1_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m3a1_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m3a1_ammo_sel;
    }
    else if (primary_gun_selection == "mp5/10")
    {
      var mp510_optic_sel = mp510optics[Math.floor(Math.random()*mp510optics.length)];
      var mp510_barrel_sel = mp510barrels[Math.floor(Math.random()*mp510barrels.length)];
      var mp510_underbarrel_sel = mp510underbarrels[Math.floor(Math.random()*mp510underbarrels.length)];
      var mp510_other_sel = mp510others[Math.floor(Math.random()*mp510others.length)];
      var mp510_ammo_sel = mp510ammos[Math.floor(Math.random()*mp510ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp510_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp510_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp510_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp510_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp510_ammo_sel;
    }
    else if (primary_gun_selection == "uzi")
    {
      var uzi_optic_sel = uzioptics[Math.floor(Math.random()*uzioptics.length)];
      var uzi_barrel_sel = uzibarrels[Math.floor(Math.random()*uzibarrels.length)];
      var uzi_underbarrel_sel = uziunderbarrels[Math.floor(Math.random()*uziunderbarrels.length)];
      var uzi_other_sel = uziothers[Math.floor(Math.random()*uziothers.length)];
      var uzi_ammo_sel = uziammos[Math.floor(Math.random()*uziammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + uzi_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + uzi_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + uzi_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + uzi_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + uzi_ammo_sel;
    }
    else if (primary_gun_selection == "aug a3 para xs")
    {
      var auga3paraxs_optic_sel = auga3paraxsoptics[Math.floor(Math.random()*auga3paraxsoptics.length)];
      var auga3paraxs_barrel_sel = auga3paraxsbarrels[Math.floor(Math.random()*auga3paraxsbarrels.length)];
      var auga3paraxs_underbarrel_sel = auga3paraunderbarrels[Math.floor(Math.random()*auga3paraxsunderbarrels.length)];
      var auga3paraxs_other_sel = auga3paraxsothers[Math.floor(Math.random()*auga3paraxsothers.length)];
      var auga3paraxs_ammo_sel = auga3paraxsammos[Math.floor(Math.random()*auga3paraxsammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + auga3paraxs_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + auga3paraxs_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + auga3paraxs_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + auga3paraxs_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + auga3paraxs_ammo_sel;
    }
    else if (primary_gun_selection == "k7")
    {
      var k7_optic_sel = k7optics[Math.floor(Math.random()*k7optics.length)];
      var k7_barrel_sel = k7barrels[Math.floor(Math.random()*k7barrels.length)];
      var k7_underbarrel_sel = k7underbarrels[Math.floor(Math.random()*k7underbarrels.length)];
      var k7_other_sel = k7others[Math.floor(Math.random()*k7others.length)];
      var k7_ammo_sel = k7ammos[Math.floor(Math.random()*k7ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + k7_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + k7_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + k7_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + k7_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + k7_ammo_sel;
    }
    else if (primary_gun_selection == "aks74u")
    {
      var aks74u_optic_sel = aks74uoptics[Math.floor(Math.random()*aks74uoptics.length)];
      var aks74u_barrel_sel = aks74ubarrels[Math.floor(Math.random()*aks74ubarrels.length)];
      var aks74u_underbarrel_sel = aks74uunderbarrels[Math.floor(Math.random()*aks74uunderbarrels.length)];
      var aks74u_other_sel = aks74uothers[Math.floor(Math.random()*aks74uothers.length)];
      var aks74u_ammo_sel = aks74uammos[Math.floor(Math.random()*aks74uammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + aks74u_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + aks74u_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + aks74u_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + aks74u_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + aks74u_ammo_sel;
    }
    else if (primary_gun_selection == "ppsh-41")
    {
      var ppsh41_optic_sel = ppsh41optics[Math.floor(Math.random()*ppsh41optics.length)];
      var ppsh41_barrel_sel = ppsh41barrels[Math.floor(Math.random()*ppsh41barrels.length)];
      var ppsh41_underbarrel_sel = ppsh41underbarrels[Math.floor(Math.random()*ppsh41underbarrels.length)];
      var ppsh41_other_sel = ppsh41others[Math.floor(Math.random()*ppsh41others.length)];
      var ppsh41_ammo_sel = ppsh41ammos[Math.floor(Math.random()*ppsh41ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ppsh41_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ppsh41_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ppsh41_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ppsh41_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ppsh41_ammo_sel;
    }
    else if (primary_gun_selection == "fal para shorty")
    {
      var falparashorty_optic_sel = falparashortyoptics[Math.floor(Math.random()*falparashortyoptics.length)];
      var falparashorty_barrel_sel = falparashortybarrels[Math.floor(Math.random()*falparashortybarrels.length)];
      var falparashorty_underbarrel_sel = falparashortyunderbarrels[Math.floor(Math.random()*falparashortyunderbarrels.length)];
      var falparashorty_other_sel = falparashortyothers[Math.floor(Math.random()*falparashortyothers.length)];
      var falparashorty_ammo_sel = falparashortyammos[Math.floor(Math.random()*falparashortyammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + falparashorty_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + falparashorty_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + falparashorty_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + falparashorty_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + falparashorty_ammo_sel;
    }
    else if (primary_gun_selection == "kriss vector")
    {
      var krissvector_optic_sel = krissvectoroptics[Math.floor(Math.random()*krissvectoroptics.length)];
      var krissvector_barrel_sel = krissvectorbarrels[Math.floor(Math.random()*krissvectorbarrels.length)];
      var krissvector_underbarrel_sel = krissvectorunderbarrels[Math.floor(Math.random()*krissvectorunderbarrels.length)];
      var krissvector_other_sel = krissvectorothers[Math.floor(Math.random()*krissvectorothers.length)];
      var krissvector_ammo_sel = krissvectorammos[Math.floor(Math.random()*krissvectorammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + krissvector_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + krissvector_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + krissvector_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + krissvector_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + krissvector_ammo_sel;
    }
    else if (primary_gun_selection == "pp-19 bizon")
    {
      var pp19bizon_optic_sel = pp19bizonoptics[Math.floor(Math.random()*pp19bizonoptics.length)];
      var pp19bizon_barrel_sel = pp19bizonbarrels[Math.floor(Math.random()*pp19bizonbarrels.length)];
      var pp19bizon_underbarrel_sel = pp19bizonunderbarrels[Math.floor(Math.random()*pp19bizonunderbarrels.length)];
      var pp19bizon_other_sel = pp19bizonothers[Math.floor(Math.random()*pp19bizonothers.length)];
      var pp19bizon_ammo_sel = pp19bizonammos[Math.floor(Math.random()*pp19bizonammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + pp19bizon_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + pp19bizon_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + pp19bizon_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + pp19bizon_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + pp19bizon_ammo_sel;
    }
    else if (primary_gun_selection == "mp40")
    {
      var mp40_optic_sel = mp40optics[Math.floor(Math.random()*mp40optics.length)];
      var mp40_barrel_sel = mp40barrels[Math.floor(Math.random()*mp40barrels.length)];
      var mp40_underbarrel_sel = mp40underbarrels[Math.floor(Math.random()*mp40underbarrels.length)];
      var mp40_other_sel = mp40others[Math.floor(Math.random()*mp40others.length)];
      var mp40_ammo_sel = mp40ammos[Math.floor(Math.random()*mp40ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mp40_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mp40_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mp40_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mp40_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mp40_ammo_sel;
    }
    else if (primary_gun_selection == "x95 smg")
    {
      var x95smg_optic_sel = x95smgoptics[Math.floor(Math.random()*x95smgoptics.length)];
      var x95smg_barrel_sel = x95smgbarrels[Math.floor(Math.random()*x95smgbarrels.length)];
      var x95smg_underbarrel_sel = x95smgunderbarrels[Math.floor(Math.random()*x95smgunderbarrels.length)];
      var x95smg_other_sel = x95smgothers[Math.floor(Math.random()*x95smgothers.length)];
      var x95smg_ammo_sel = x95smgammos[Math.floor(Math.random()*x95smgammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + x95smg_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + x95smg_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + x95smg_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + x95smg_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + x95smg_ammo_sel;
    }
    else if (primary_gun_selection == "tommy gun")
    {
      var tommygun_optic_sel = tommygunoptics[Math.floor(Math.random()*tommygunoptics.length)];
      var tommygun_barrel_sel = tommygunbarrels[Math.floor(Math.random()*tommygunbarrels.length)];
      var tommygun_underbarrel_sel = tommygununderbarrels[Math.floor(Math.random()*tommygununderbarrels.length)];
      var tommygun_other_sel = tommygunothers[Math.floor(Math.random()*tommygunothers.length)];
      var tommygun_ammo_sel = tommygunammos[Math.floor(Math.random()*tommygunammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + tommygun_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + tommygun_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + tommygun_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + tommygun_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + tommygun_ammo_sel;
    }
    else if (primary_gun_selection == "rama 1130")
    {
      var rama1130_optic_sel = rama1130optics[Math.floor(Math.random()*rama1130optics.length)];
      var rama1130_barrel_sel = rama1130barrels[Math.floor(Math.random()*rama1130barrels.length)];
      var rama1130_underbarrel_sel = rama1130underbarrels[Math.floor(Math.random()*rama1130underbarrels.length)];
      var rama1130_other_sel = rama1130others[Math.floor(Math.random()*rama1130others.length)];
      var rama1130_ammo_sel = rama1130ammos[Math.floor(Math.random()*rama1130ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + rama1130_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + rama1130_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + rama1130_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + rama1130_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + rama1130_ammo_sel;
    }
    else if (primary_gun_selection == "mk11")
    {
      var mk11_optic_sel = mk11optics[Math.floor(Math.random()*mk11optics.length)];
      var mk11_barrel_sel = mk11barrels[Math.floor(Math.random()*mk11barrels.length)];
      var mk11_underbarrel_sel = mk11underbarrels[Math.floor(Math.random()*mk11underbarrels.length)];
      var mk11_other_sel = mk11others[Math.floor(Math.random()*mk11others.length)];
      var mk11_ammo_sel = mk11ammos[Math.floor(Math.random()*mk11ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mk11_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mk11_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mk11_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mk11_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mk11_ammo_sel;
    }
    else if (primary_gun_selection == "sks")
    {
      var sks_optic_sel = sksoptics[Math.floor(Math.random()*sksoptics.length)];
      var sks_barrel_sel = sksbarrels[Math.floor(Math.random()*sksbarrels.length)];
      var sks_underbarrel_sel = sksunderbarrels[Math.floor(Math.random()*sksunderbarrels.length)];
      var sks_other_sel = sksothers[Math.floor(Math.random()*sksothers.length)];
      var sks_ammo_sel = sksammos[Math.floor(Math.random()*sksammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + sks_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + sks_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + sks_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + sks_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + sks_ammo_sel;
    }
    else if (primary_gun_selection == "sl-8")
    {
      var sl8_optic_sel = sl8optics[Math.floor(Math.random()*sl8optics.length)];
      var sl8_barrel_sel = sl8barrels[Math.floor(Math.random()*sl8barrels.length)];
      var sl8_underbarrel_sel = sl8underbarrels[Math.floor(Math.random()*sl8underbarrels.length)];
      var sl8_other_sel = sl8others[Math.floor(Math.random()*sl8others.length)];
      var sl8_ammo_sel = sl8ammos[Math.floor(Math.random()*sl8ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + sl8_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + sl8_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + sl8_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + sl8_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + sl8_ammo_sel;
    }
    else if (primary_gun_selection == "vss vintorez")
    {
      var vssvintorez_optic_sel = vssvintorezoptics[Math.floor(Math.random()*vssvintorezoptics.length)];
      var vssvintorez_barrel_sel = vssvintorezbarrels[Math.floor(Math.random()*vssvintorezbarrels.length)];
      var vssvintorez_underbarrel_sel = vssvintorezunderbarrels[Math.floor(Math.random()*vssvintorezunderbarrels.length)];
      var vssvintorez_other_sel = vssvintorezothers[Math.floor(Math.random()*vssvintorezothers.length)];
      var vssvintorez_ammo_sel = vssvintorezammos[Math.floor(Math.random()*vssvintorezammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + vssvintorez_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + vssvintorez_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + vssvintorez_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + vssvintorez_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + vssvintorez_ammo_sel;
    }
    else if (primary_gun_selection == "msg90")
    {
      var msg90_optic_sel = msg90optics[Math.floor(Math.random()*msg90optics.length)];
      var msg90_barrel_sel = msg90barrels[Math.floor(Math.random()*msg90barrels.length)];
      var msg90_underbarrel_sel = msg90underbarrels[Math.floor(Math.random()*msg90underbarrels.length)];
      var msg90_other_sel = msg90others[Math.floor(Math.random()*msg90others.length)];
      var msg90_ammo_sel = msg90ammos[Math.floor(Math.random()*msg90ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + msg90_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + msg90_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + msg90_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + msg90_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + msg90_ammo_sel;
    }
    else if (primary_gun_selection == "m21")
    {
      var m21_optic_sel = m21optics[Math.floor(Math.random()*m21optics.length)];
      var m21_barrel_sel = m21barrels[Math.floor(Math.random()*m21barrels.length)];
      var m21_underbarrel_sel = m21underbarrels[Math.floor(Math.random()*m21underbarrels.length)];
      var m21_other_sel = m21others[Math.floor(Math.random()*m21others.length)];
      var m21_ammo_sel = m21ammos[Math.floor(Math.random()*m21ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m21_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m21_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m21_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m21_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m21_ammo_sel;
    }
    else if (primary_gun_selection == "beowulf tcr")
    {
      var beowulftcr_optic_sel = beowulftcroptics[Math.floor(Math.random()*beowulftcroptics.length)];
      var beowulftcr_barrel_sel = beowulftcrbarrels[Math.floor(Math.random()*beowulftcrbarrels.length)];
      var beowulftcr_underbarrel_sel = beowulftcrunderbarrels[Math.floor(Math.random()*beowulftcrunderbarrels.length)];
      var beowulftcr_other_sel = beowulftcrothers[Math.floor(Math.random()*beowulftcrothers.length)];
      var beowulftcr_ammo_sel = beowulftcrammos[Math.floor(Math.random()*beowulftcrammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + beowulftcr_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + beowulftcr_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + beowulftcr_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + beowulftcr_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + beowulftcr_ammo_sel;
    }
    else if (primary_gun_selection == "sa58 spr")
    {
      var sa58spr_optic_sel = sa58sproptics[Math.floor(Math.random()*sa58sproptics.length)];
      var sa58spr_barrel_sel = sa58sprbarrels[Math.floor(Math.random()*sa58sprbarrels.length)];
      var sa58spr_underbarrel_sel = sa58sprunderbarrels[Math.floor(Math.random()*sa58sprunderbarrels.length)];
      var sa58spr_other_sel = sa58sprothers[Math.floor(Math.random()*sa58sprothers.length)];
      var sa58spr_ammo_sel = sa58sprammos[Math.floor(Math.random()*sa58sprammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + sa58spr_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + sa58spr_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + sa58spr_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + sa58spr_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + sa58spr_ammo_sel;
    }
    else if (primary_gun_selection == "scar ssr")
    {
      var scarssr_optic_sel = scarssroptics[Math.floor(Math.random()*scarssroptics.length)];
      var scarssr_barrel_sel = scarssrbarrels[Math.floor(Math.random()*scarssrbarrels.length)];
      var scarssr_underbarrel_sel = scarssrunderbarrels[Math.floor(Math.random()*scarssrunderbarrels.length)];
      var scarssr_other_sel = scarssrothers[Math.floor(Math.random()*scarssrothers.length)];
      var scarssr_ammo_sel = scarssrammos[Math.floor(Math.random()*scarssrammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + scarssr_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + scarssr_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + scarssr_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + scarssr_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + scarssr_ammo_sel;
    }
    else if (primary_gun_selection == "colt lmg")
    {
      var coltlmg_optic_sel = coltlmgoptics[Math.floor(Math.random()*coltlmgoptics.length)];
      var coltlmg_barrel_sel = coltlmgbarrels[Math.floor(Math.random()*coltlmgbarrels.length)];
      var coltlmg_underbarrel_sel = coltlmgunderbarrels[Math.floor(Math.random()*coltlmgunderbarrels.length)];
      var coltlmg_other_sel = coltlmgothers[Math.floor(Math.random()*coltlmgothers.length)];
      var coltlmg_ammo_sel = coltlmgammos[Math.floor(Math.random()*coltlmgammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + coltlmg_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + coltlmg_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + coltlmg_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + coltlmg_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + coltlmg_ammo_sel;
    }
    else if (primary_gun_selection == "m60")
    {
      var m60_optic_sel = m60optics[Math.floor(Math.random()*m60optics.length)];
      var m60_barrel_sel = m60barrels[Math.floor(Math.random()*m60barrels.length)];
      var m60_underbarrel_sel = m60underbarrels[Math.floor(Math.random()*m60underbarrels.length)];
      var m60_other_sel = m60others[Math.floor(Math.random()*m60others.length)];
      var m60_ammo_sel = m60ammos[Math.floor(Math.random()*m60ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m60_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m60_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m60_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m60_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m60_ammo_sel;
    }
    else if (primary_gun_selection == "aug hbar")
    {
      var aughbar_optic_sel = aughbaroptics[Math.floor(Math.random()*aughbaroptics.length)];
      var aughbar_barrel_sel = aughbarbarrels[Math.floor(Math.random()*aughbarbarrels.length)];
      var aughbar_underbarrel_sel = aughbarunderbarrels[Math.floor(Math.random()*aughbarunderbarrels.length)];
      var aughbar_other_sel = aughbarothers[Math.floor(Math.random()*aughbarothers.length)];
      var aughbar_ammo_sel = aughbarammos[Math.floor(Math.random()*aughbarammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + aughbar_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + aughbar_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + aughbar_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + aughbar_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + aughbar_ammo_sel;
    }
    else if (primary_gun_selection == "mg36")
    {
      var mg36_optic_sel = mg36optics[Math.floor(Math.random()*mg36optics.length)];
      var mg36_barrel_sel = mg36barrels[Math.floor(Math.random()*mg36barrels.length)];
      var mg36_underbarrel_sel = mg36underbarrels[Math.floor(Math.random()*mg36underbarrels.length)];
      var mg36_other_sel = mg36others[Math.floor(Math.random()*mg36others.length)];
      var mg36_ammo_sel = mg36ammos[Math.floor(Math.random()*mg36ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mg36_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mg36_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mg36_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mg36_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mg36_ammo_sel;
    }
    else if (primary_gun_selection == "rpk12")
    {
      var rpk12_optic_sel = rpk12optics[Math.floor(Math.random()*rpk12optics.length)];
      var rpk12_barrel_sel = rpk12barrels[Math.floor(Math.random()*rpk12barrels.length)];
      var rpk12_underbarrel_sel = rpk12underbarrels[Math.floor(Math.random()*rpk12underbarrels.length)];
      var rpk12_other_sel = rpk12others[Math.floor(Math.random()*rpk12others.length)];
      var rpk12_ammo_sel = rpk12ammos[Math.floor(Math.random()*rpk12ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + rpk12_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + rpk12_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + rpk12_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + rpk12_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + rpk12_ammo_sel;
    }
    else if (primary_gun_selection == "l86 lsw")
    {
      var l86lsw_optic_sel = l86lswoptics[Math.floor(Math.random()*l86lswoptics.length)];
      var l86lsw_barrel_sel = l86lswbarrels[Math.floor(Math.random()*l86lswbarrels.length)];
      var l86lsw_underbarrel_sel = l86lswunderbarrels[Math.floor(Math.random()*l86lswunderbarrels.length)];
      var l86lsw_other_sel = l86lswothers[Math.floor(Math.random()*l86lswothers.length)];
      var l86lsw_ammo_sel = l86lswammos[Math.floor(Math.random()*l86lswammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + l86lsw_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + l86lsw_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + l86lsw_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + l86lsw_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + l86lsw_ammo_sel;
    }
    else if (primary_gun_selection == "rpk")
    {
      var rpk_optic_sel = rpkoptics[Math.floor(Math.random()*rpkoptics.length)];
      var rpk_barrel_sel = rpkbarrels[Math.floor(Math.random()*rpkbarrels.length)];
      var rpk_underbarrel_sel = rpkunderbarrels[Math.floor(Math.random()*rpkunderbarrels.length)];
      var rpk_other_sel = rpkothers[Math.floor(Math.random()*rpkothers.length)];
      var rpk_ammo_sel = rpkammos[Math.floor(Math.random()*rpkammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + rpk_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + rpk_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + rpk_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + rpk_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + rpk_ammo_sel;
    }
    else if (primary_gun_selection == "hk21e")
    {
      var hk21e_optic_sel = hk21eoptics[Math.floor(Math.random()*hk21eoptics.length)];
      var hk21e_barrel_sel = hk21ebarrels[Math.floor(Math.random()*hk21ebarrels.length)];
      var hk21e_underbarrel_sel = hk21eunderbarrels[Math.floor(Math.random()*hk21eunderbarrels.length)];
      var hk21e_other_sel = hk21eothers[Math.floor(Math.random()*hk21eothers.length)];
      var hk21e_ammo_sel = hk21eammos[Math.floor(Math.random()*hk21eammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hk21e_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hk21e_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hk21e_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hk21e_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hk21e_ammo_sel;
    }
    else if (primary_gun_selection == "hamr iar")
    {
      var hamriar_optic_sel = hamriaroptics[Math.floor(Math.random()*hamriaroptics.length)];
      var hamriar_barrel_sel = hamriarbarrels[Math.floor(Math.random()*hamriarbarrels.length)];
      var hamriar_underbarrel_sel = hamriarunderbarrels[Math.floor(Math.random()*hamriarunderbarrels.length)];
      var hamriar_other_sel = hamriarothers[Math.floor(Math.random()*hamriarothers.length)];
      var hamriar_ammo_sel = hamriarammos[Math.floor(Math.random()*hamriarammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hamriar_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hamriar_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hamriar_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hamriar_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hamriar_ammo_sel;
    }
    else if (primary_gun_selection == "rpk74")
    {
      var rpk74_optic_sel = rpk74optics[Math.floor(Math.random()*rpk74optics.length)];
      var rpk74_barrel_sel = rpk74barrels[Math.floor(Math.random()*rpk74barrels.length)];
      var rpk74_underbarrel_sel = rpk74underbarrels[Math.floor(Math.random()*rpk74underbarrels.length)];
      var rpk74_other_sel = rpk74others[Math.floor(Math.random()*rpk74others.length)];
      var rpk74_ammo_sel = rpk74ammos[Math.floor(Math.random()*rpk74ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + rpk74_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + rpk74_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + rpk74_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + rpk74_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + rpk74_ammo_sel;
    }
    else if (primary_gun_selection == "mg3kws")
    {
      var mg3kws_optic_sel = mg3kwsoptics[Math.floor(Math.random()*mg3kwsoptics.length)];
      var mg3kws_barrel_sel = mg3kwsbarrels[Math.floor(Math.random()*mg3kwsbarrels.length)];
      var mg3kws_underbarrel_sel = mg3kwsunderbarrels[Math.floor(Math.random()*mg3kwsunderbarrels.length)];
      var mg3kws_other_sel = mg3kwsothers[Math.floor(Math.random()*mg3kwsothers.length)];
      var mg3kws_ammo_sel = mg3kwsammos[Math.floor(Math.random()*mg3kwsammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mg3kws_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mg3kws_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mg3kws_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mg3kws_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mg3kws_ammo_sel;
    }
    else if (primary_gun_selection == "intervention")
    {
      var intervention_optic_sel = interventionoptics[Math.floor(Math.random()*interventionoptics.length)];
      var intervention_barrel_sel = interventionbarrels[Math.floor(Math.random()*interventionbarrels.length)];
      var intervention_underbarrel_sel = interventionunderbarrels[Math.floor(Math.random()*interventionunderbarrels.length)];
      var intervention_other_sel = interventionothers[Math.floor(Math.random()*interventionothers.length)];
      var intervention_ammo_sel = interventionammos[Math.floor(Math.random()*interventionammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + intervention_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + intervention_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + intervention_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + intervention_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + intervention_ammo_sel;
    }
    else if (primary_gun_selection == "model 700")
    {
      var model700_optic_sel = model700optics[Math.floor(Math.random()*model700optics.length)];
      var model700_barrel_sel = model700barrels[Math.floor(Math.random()*model700barrels.length)];
      var model700_underbarrel_sel = model700underbarrels[Math.floor(Math.random()*model700underbarrels.length)];
      var model700_other_sel = model700others[Math.floor(Math.random()*model700others.length)];
      var model700_ammo_sel = model700ammos[Math.floor(Math.random()*model700ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + model700_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + model700_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + model700_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + model700_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + model700_ammo_sel;
    }
    else if (primary_gun_selection == "dragunov svu")
    {
      var dragunovsvu_optic_sel = dragunovsvuoptics[Math.floor(Math.random()*dragunovsvuoptics.length)];
      var dragunovsvu_barrel_sel = dragunovsvubarrels[Math.floor(Math.random()*dragunovsvubarrels.length)];
      var dragunovsvu_underbarrel_sel = dragunovsvuunderbarrels[Math.floor(Math.random()*dragunovsvuunderbarrels.length)];
      var dragunovsvu_other_sel = dragunovsvuothers[Math.floor(Math.random()*dragunovsvuothers.length)];
      var dragunovsvu_ammo_sel = dragunovsvuammos[Math.floor(Math.random()*dragunovsvuammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + dragunovsvu_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + dragunovsvu_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + dragunovsvu_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + dragunovsvu_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + dragunovsvu_ammo_sel;
    }
    else if (primary_gun_selection == "aws")
    {
      var aws_optic_sel = awsoptics[Math.floor(Math.random()*awsoptics.length)];
      var aws_barrel_sel = awsbarrels[Math.floor(Math.random()*awsbarrels.length)];
      var aws_underbarrel_sel = awsunderbarrels[Math.floor(Math.random()*awsunderbarrels.length)];
      var aws_other_sel = awsothers[Math.floor(Math.random()*awsothers.length)];
      var aws_ammo_sel = awsammos[Math.floor(Math.random()*awsammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + aws_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + aws_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + aws_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + aws_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + aws_ammo_sel;
    }
    else if (primary_gun_selection == "bfg 50")
    {
      var bfg50_optic_sel = bfg50optics[Math.floor(Math.random()*bfg50optics.length)];
      var bfg50_barrel_sel = bfg50barrels[Math.floor(Math.random()*bfg50barrels.length)];
      var bfg50_underbarrel_sel = bfg50underbarrels[Math.floor(Math.random()*bfg50underbarrels.length)];
      var bfg50_other_sel = bfg50others[Math.floor(Math.random()*bfg50others.length)];
      var bfg50_ammo_sel = bfg50ammos[Math.floor(Math.random()*bfg50ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + bfg50_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + bfg50_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + bfg50_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + bfg50_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + bfg50_ammo_sel;
    }
    else if (primary_gun_selection == "awm")
    {
      var awm_optic_sel = awmoptics[Math.floor(Math.random()*awmoptics.length)];
      var awm_barrel_sel = awmbarrels[Math.floor(Math.random()*awmbarrels.length)];
      var awm_underbarrel_sel = awmunderbarrels[Math.floor(Math.random()*awmunderbarrels.length)];
      var awm_other_sel = awmothers[Math.floor(Math.random()*awmothers.length)];
      var awm_ammo_sel = awmammos[Math.floor(Math.random()*awmammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + awm_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + awm_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + awm_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + awm_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + awm_ammo_sel;
    }
    else if (primary_gun_selection == "trg-42")
    {
      var trg42_optic_sel = trg42optics[Math.floor(Math.random()*trg42optics.length)];
      var trg42_barrel_sel = trg42barrels[Math.floor(Math.random()*trg42barrels.length)];
      var trg42_underbarrel_sel = trg42underbarrels[Math.floor(Math.random()*trg42underbarrels.length)];
      var trg42_other_sel = trg42others[Math.floor(Math.random()*trg42others.length)];
      var trg42_ammo_sel = trg42ammos[Math.floor(Math.random()*trg42ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + trg42_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + trg42_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + trg42_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + trg42_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + trg42_ammo_sel;
    }
    else if (primary_gun_selection == "mosin nagant")
    {
      var mosinnagant_optic_sel = mosinnagantoptics[Math.floor(Math.random()*mosinnagantoptics.length)];
      var mosinnagant_barrel_sel = mosinnagantbarrels[Math.floor(Math.random()*mosinnagantbarrels.length)];
      var mosinnagant_underbarrel_sel = mosinnagantunderbarrels[Math.floor(Math.random()*mosinnagantunderbarrels.length)];
      var mosinnagant_other_sel = mosinnagantothers[Math.floor(Math.random()*mosinnagantothers.length)];
      var mosinnagant_ammo_sel = mosinnagantammos[Math.floor(Math.random()*mosinnagantammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + mosinnagant_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + mosinnagant_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + mosinnagant_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + mosinnagant_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + mosinnagant_ammo_sel;
    }
    else if (primary_gun_selection == "dragunov svds")
    {
      var dragunovsvds_optic_sel = dragunovsvdsoptics[Math.floor(Math.random()*dragunovsvdsoptics.length)];
      var dragunovsvds_barrel_sel = dragunovsvdsbarrels[Math.floor(Math.random()*dragunovsvdsbarrels.length)];
      var dragunovsvds_underbarrel_sel = dragunovsvdsunderbarrels[Math.floor(Math.random()*dragunovsvdsunderbarrels.length)];
      var dragunovsvds_other_sel = dragunovsvdsothers[Math.floor(Math.random()*dragunovsvdsothers.length)];
      var dragunovsvds_ammo_sel = dragunovsvdsammos[Math.floor(Math.random()*dragunovsvdsammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + dragunovsvds_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + dragunovsvds_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + dragunovsvds_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + dragunovsvds_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + dragunovsvds_ammo_sel;
    }
    else if (primary_gun_selection == "m1903")
    {
      var m1903_optic_sel = m1903optics[Math.floor(Math.random()*m1903optics.length)];
      var m1903_barrel_sel = m1903barrels[Math.floor(Math.random()*m1903barrels.length)];
      var m1903_underbarrel_sel = m1903underbarrels[Math.floor(Math.random()*m1903underbarrels.length)];
      var m1903_other_sel = m1903others[Math.floor(Math.random()*m1903others.length)];
      var m1903_ammo_sel = m1903ammos[Math.floor(Math.random()*m1903ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m1903_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m1903_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m1903_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m1903_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m1903_ammo_sel;
    }
    else if (primary_gun_selection == "k14")
    {
      var k14_optic_sel = k14optics[Math.floor(Math.random()*k14optics.length)];
      var k14_barrel_sel = k14barrels[Math.floor(Math.random()*k14barrels.length)];
      var k14_underbarrel_sel = k14underbarrels[Math.floor(Math.random()*k14underbarrels.length)];
      var k14_other_sel = k14others[Math.floor(Math.random()*k14others.length)];
      var k14_ammo_sel = k14ammos[Math.floor(Math.random()*k14ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + k14_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + k14_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + k14_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + k14_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + k14_ammo_sel;
    }
    else if (primary_gun_selection == "hecate ii")
    {
      var hecateii_optic_sel = hecateiioptics[Math.floor(Math.random()*hecateiioptics.length)];
      var hecateii_barrel_sel = hecateiibarrels[Math.floor(Math.random()*hecateiibarrels.length)];
      var hecateii_underbarrel_sel = hecateiiunderbarrels[Math.floor(Math.random()*hecateiiunderbarrels.length)];
      var hecateii_other_sel = hecateiiothers[Math.floor(Math.random()*hecateiiothers.length)];
      var hecateii_ammo_sel = hecateiiammos[Math.floor(Math.random()*hecateiiammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + hecateii_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + hecateii_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + hecateii_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + hecateii_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + hecateii_ammo_sel;
    }
    else if (primary_gun_selection == "ft300")
    {
      var ft300_optic_sel = ft300optics[Math.floor(Math.random()*ft300optics.length)];
      var ft300_barrel_sel = ft300barrels[Math.floor(Math.random()*ft300barrels.length)];
      var ft300_underbarrel_sel = ft300underbarrels[Math.floor(Math.random()*ft300underbarrels.length)];
      var ft300_other_sel = ft300others[Math.floor(Math.random()*ft300others.length)];
      var ft300_ammo_sel = ft300ammos[Math.floor(Math.random()*ft300ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ft300_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ft300_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ft300_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ft300_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ft300_ammo_sel;
    }
    else if (primary_gun_selection == "m107")
    {
      var m107_optic_sel = m107optics[Math.floor(Math.random()*m107optics.length)];
      var m107_barrel_sel = m107barrels[Math.floor(Math.random()*m107barrels.length)];
      var m107_underbarrel_sel = m107underbarrels[Math.floor(Math.random()*m107underbarrels.length)];
      var m107_other_sel = m107others[Math.floor(Math.random()*m107others.length)];
      var m107_ammo_sel = m107ammos[Math.floor(Math.random()*m107ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + m107_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + m107_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + m107_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + m107_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + m107_ammo_sel;
    }
    else if (primary_gun_selection == "steyr scout")
    {
      var steyrscout_optic_sel = steyrscoutoptics[Math.floor(Math.random()*steyrscoutoptics.length)];
      var steyrscout_barrel_sel = steyrscoutbarrels[Math.floor(Math.random()*steyrscoutbarrels.length)];
      var steyrscout_underbarrel_sel = steyrscoutunderbarrels[Math.floor(Math.random()*steyrscoutunderbarrels.length)];
      var steyrscout_other_sel = steyrscoutothers[Math.floor(Math.random()*steyrscoutothers.length)];
      var steyrscout_ammo_sel = steyrscoutammos[Math.floor(Math.random()*steyrscoutammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + steyrscout_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + steyrscout_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + steyrscout_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + steyrscout_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + steyrscout_ammo_sel;
    }
    else if (primary_gun_selection == "wa2000")
    {
      var wa2000_optic_sel = wa2000optics[Math.floor(Math.random()*wa2000optics.length)];
      var wa2000_barrel_sel = wa2000barrels[Math.floor(Math.random()*wa2000barrels.length)];
      var wa2000_underbarrel_sel = wa2000underbarrels[Math.floor(Math.random()*wa2000underbarrels.length)];
      var wa2000_other_sel = wa2000others[Math.floor(Math.random()*wa2000others.length)];
      var wa2000_ammo_sel = wa2000ammos[Math.floor(Math.random()*wa2000ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + wa2000_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + wa2000_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + wa2000_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + wa2000_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + wa2000_ammo_sel;
    }
    else if (primary_gun_selection == "ntw-20")
    {
      var ntw20_optic_sel = ntw20optics[Math.floor(Math.random()*ntw20optics.length)];
      var ntw20_barrel_sel = ntw20barrels[Math.floor(Math.random()*ntw20barrels.length)];
      var ntw20_underbarrel_sel = ntw20underbarrels[Math.floor(Math.random()*ntw20underbarrels.length)];
      var ntw20_other_sel = ntw20others[Math.floor(Math.random()*ntw20others.length)];
      var ntw20_ammo_sel = ntw20ammos[Math.floor(Math.random()*ntw20ammos.length)];

      document.getElementById("weapon1").innerHTML = "primary: " + primary_gun_selection;
      document.getElementById("optic1").innerHTML = "optic: " + ntw20_optic_sel;
      document.getElementById("barrel1").innerHTML = "barrel: " + ntw20_barrel_sel;
      document.getElementById("underbarrel1").innerHTML = "underbarrel: " + ntw20_underbarrel_sel;
      document.getElementById("other1").innerHTML = "other: " + ntw20_other_sel;
      document.getElementById("ammo1").innerHTML = "ammo: " + ntw20_ammo_sel;
    }
    else
    {
      //just in case if something breaks
      document.getElementById("temp").innerHTML = "gun that is broken " + primary_gun_selection;
      document.getElementById("weapon1").innerHTML = "error";
    }

    if (secondary_gun_selection == "boxy buster")
    {
      var boxybuster_optic_sel = boxybusteroptics[Math.floor(Math.random()*boxybusteroptics.length)];
      var boxybuster_barrel_sel = boxybusterbarrels[Math.floor(Math.random()*boxybusterbarrels.length)];
      var boxybuster_other_sel = boxybusterothers[Math.floor(Math.random()*boxybusterothers.length)];
      var boxybuster_ammo_sel = boxybusterammos[Math.floor(Math.random()*boxybusterammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + boxybuster_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + boxybuster_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + boxybuster_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + boxybuster_ammo_sel;
    }
    else if (secondary_gun_selection == "m9")
    {
      var m9_optic_sel = m9optics[Math.floor(Math.random()*m9optics.length)];
      var m9_barrel_sel = m9barrels[Math.floor(Math.random()*m9barrels.length)];
      var m9_other_sel = m9others[Math.floor(Math.random()*m9others.length)];
      var m9_ammo_sel = m9ammos[Math.floor(Math.random()*m9ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + m9_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + m9_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + m9_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + m9_ammo_sel;
    }
    else if (secondary_gun_selection == "g17")
    {
      var g17_optic_sel = g17optics[Math.floor(Math.random()*g17optics.length)];
      var g17_barrel_sel = g17barrels[Math.floor(Math.random()*g17barrels.length)];
      var g17_other_sel = g17others[Math.floor(Math.random()*g17others.length)];
      var g17_ammo_sel = g17ammos[Math.floor(Math.random()*g17ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g17_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g17_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g17_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g17_ammo_sel;
    }
    else if (secondary_gun_selection == "m1911a1")
    {
      var m1911a1_optic_sel = m1911a1optics[Math.floor(Math.random()*m1911a1optics.length)];
      var m1911a1_barrel_sel = m1911a1barrels[Math.floor(Math.random()*m1911a1barrels.length)];
      var m1911a1_other_sel = m1911a1others[Math.floor(Math.random()*m1911a1others.length)];
      var m1911a1_ammo_sel = m1911a1ammos[Math.floor(Math.random()*m1911a1ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + m1911a1_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + m1911a1_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + m1911a1_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + m1911a1_ammo_sel;
    }
    else if (secondary_gun_selection == "desert eagle l5")
    {
      var deserteaglel5_optic_sel = deserteaglel5optics[Math.floor(Math.random()*deserteaglel5optics.length)];
      var deserteaglel5_barrel_sel = deserteaglel5barrels[Math.floor(Math.random()*deserteaglel5barrels.length)];
      var deserteaglel5_other_sel = deserteaglel5others[Math.floor(Math.random()*deserteaglel5others.length)];
      var deserteaglel5_ammo_sel = deserteaglel5ammos[Math.floor(Math.random()*deserteaglel5ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + deserteaglel5_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + deserteaglel5_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + deserteaglel5_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + deserteaglel5_ammo_sel;
    }
    else if (secondary_gun_selection == "g21")
    {
      var g21_optic_sel = g21optics[Math.floor(Math.random()*g21optics.length)];
      var g21_barrel_sel = g21barrels[Math.floor(Math.random()*g21barrels.length)];
      var g21_other_sel = g21others[Math.floor(Math.random()*g21others.length)];
      var g21_ammo_sel = g21ammos[Math.floor(Math.random()*g21ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g21_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g21_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g21_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g21_ammo_sel;
    }
    else if (secondary_gun_selection == "g23")
    {
      var g23_optic_sel = g23optics[Math.floor(Math.random()*g23optics.length)];
      var g23_barrel_sel = g23barrels[Math.floor(Math.random()*g23barrels.length)];
      var g23_other_sel = g23others[Math.floor(Math.random()*g23others.length)];
      var g23_ammo_sel = g23ammos[Math.floor(Math.random()*g23ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g23_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g23_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g23_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g23_ammo_sel;
    }
    else if (secondary_gun_selection == "m45a1")
    {
      var m45a1_optic_sel = m45a1optics[Math.floor(Math.random()*m45a1optics.length)];
      var m45a1_barrel_sel = m45a1barrels[Math.floor(Math.random()*m45a1barrels.length)];
      var m45a1_other_sel = m45a1others[Math.floor(Math.random()*m45a1others.length)];
      var m45a1_ammo_sel = m45a1ammos[Math.floor(Math.random()*m45a1ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + m45a1_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + m45a1_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + m45a1_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + m45a1_ammo_sel;
    }
    else if (secondary_gun_selection == "g40")
    {
      var g40_optic_sel = g40optics[Math.floor(Math.random()*g40optics.length)];
      var g40_barrel_sel = g40barrels[Math.floor(Math.random()*g40barrels.length)];
      var g40_other_sel = g40others[Math.floor(Math.random()*g40others.length)];
      var g40_ammo_sel = g40ammos[Math.floor(Math.random()*g40ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g40_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g40_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g40_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g40_ammo_sel;
    }
    else if (secondary_gun_selection == "kg-99")
    {
      var kg99_optic_sel = kg99optics[Math.floor(Math.random()*kg99optics.length)];
      var kg99_barrel_sel = kg99barrels[Math.floor(Math.random()*kg99barrels.length)];
      var kg99_other_sel = kg99others[Math.floor(Math.random()*kg99others.length)];
      var kg99_ammo_sel = kg99ammos[Math.floor(Math.random()*kg99ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + kg99_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + kg99_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + kg99_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + kg99_ammo_sel;
    }
    else if (secondary_gun_selection == "g50")
    {
      var g50_optic_sel = g50optics[Math.floor(Math.random()*g50optics.length)];
      var g50_barrel_sel = g50barrels[Math.floor(Math.random()*g50barrels.length)];
      var g50_other_sel = g50others[Math.floor(Math.random()*g50others.length)];
      var g50_ammo_sel = g50ammos[Math.floor(Math.random()*g50ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g50_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g50_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g50_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g50_ammo_sel;
    }
    else if (secondary_gun_selection == "five seven")
    {
      var fiveseven_optic_sel = fivesevenoptics[Math.floor(Math.random()*fivesevenoptics.length)];
      var fiveseven_barrel_sel = fivesevenbarrels[Math.floor(Math.random()*fivesevenbarrels.length)];
      var fiveseven_other_sel = fivesevenothers[Math.floor(Math.random()*fivesevenothers.length)];
      var fiveseven_ammo_sel = fivesevenammos[Math.floor(Math.random()*fivesevenammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + fiveseven_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + fiveseven_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + fiveseven_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + fiveseven_ammo_sel;
    }
    else if (secondary_gun_selection == "zip 22")
    {
      var zip22_optic_sel = zip22optics[Math.floor(Math.random()*zip22optics.length)];
      var zip22_barrel_sel = zip22barrels[Math.floor(Math.random()*zip22barrels.length)];
      var zip22_other_sel = zip22others[Math.floor(Math.random()*zip22others.length)];
      var zip22_ammo_sel = zip22ammos[Math.floor(Math.random()*zip22ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + zip22_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + zip22_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + zip22_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + zip22_ammo_sel;
    }
    else if (secondary_gun_selection == "gi m1")
    {
      var gim1_optic_sel = gim1optics[Math.floor(Math.random()*gim1optics.length)];
      var gim1_barrel_sel = gim1barrels[Math.floor(Math.random()*gim1barrels.length)];
      var gim1_other_sel = gim1others[Math.floor(Math.random()*gim1others.length)];
      var gim1_ammo_sel = gim1ammos[Math.floor(Math.random()*gim1ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + gim1_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + gim1_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + gim1_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + gim1_ammo_sel;
    }
    else if (secondary_gun_selection == "hardballer")
    {
      var hardballer_optic_sel = hardballeroptics[Math.floor(Math.random()*hardballeroptics.length)];
      var hardballer_barrel_sel = hardballerbarrels[Math.floor(Math.random()*hardballerbarrels.length)];
      var hardballer_other_sel = hardballerothers[Math.floor(Math.random()*hardballerothers.length)];
      var hardballer_ammo_sel = hardballerammos[Math.floor(Math.random()*hardballerammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + hardballer_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + hardballer_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + hardballer_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + hardballer_ammo_sel;
    }
    else if (secondary_gun_selection == "izhevsk pb")
    {
      var izhevskpb_optic_sel = izhevskpboptics[Math.floor(Math.random()*izhevskpboptics.length)];
      var izhevskpb_barrel_sel = izhevskpbbarrels[Math.floor(Math.random()*izhevskpbbarrels.length)];
      var izhevskpb_other_sel = izhevskpbothers[Math.floor(Math.random()*izhevskpbothers.length)];
      var izhevskpb_ammo_sel = izhevskpbammos[Math.floor(Math.random()*izhevskpbammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + izhevskpb_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + izhevskpb_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + izhevskpb_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + izhevskpb_ammo_sel;
    }
    else if (secondary_gun_selection == "makarov pm")
    {
      var makarovpm_optic_sel = makarovpmoptics[Math.floor(Math.random()*makarovpmoptics.length)];
      var makarovpm_barrel_sel = makarovpmbarrels[Math.floor(Math.random()*makarovpmbarrels.length)];
      var makarovpm_other_sel = makarovpmothers[Math.floor(Math.random()*makarovpmothers.length)];
      var makarovpm_ammo_sel = makarovpmammos[Math.floor(Math.random()*makarovpmammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + makarovpm_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + makarovpm_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + makarovpm_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + makarovpm_ammo_sel;
    }
    else if (secondary_gun_selection == "gb-22")
    {
      var gb22_optic_sel = gb22optics[Math.floor(Math.random()*gb22optics.length)];
      var gb22_barrel_sel = gb22barrels[Math.floor(Math.random()*gb22barrels.length)];
      var gb22_other_sel = gb22others[Math.floor(Math.random()*gb22others.length)];
      var gb22_ammo_sel = gb22ammos[Math.floor(Math.random()*gb22ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + gb22_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + gb22_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + gb22_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + gb22_ammo_sel;
    }
    else if (secondary_gun_selection == "desert eagle xix")
    {
      var deserteaglexix_optic_sel = deserteaglexixoptics[Math.floor(Math.random()*deserteaglexixoptics.length)];
      var deserteaglexix_barrel_sel = deserteaglexixbarrels[Math.floor(Math.random()*deserteaglexixbarrels.length)];
      var deserteaglexix_other_sel = deserteaglexixothers[Math.floor(Math.random()*deserteaglexixothers.length)];
      var deserteaglexix_ammo_sel = deserteaglexixammos[Math.floor(Math.random()*deserteaglexixammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + deserteaglexix_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + deserteaglexix_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + deserteaglexix_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + deserteaglexix_ammo_sel;
    }
    else if (secondary_gun_selection == "automag iii")
    {
      var automagiii_optic_sel = automagiiioptics[Math.floor(Math.random()*automagiiioptics.length)];
      var automagiii_barrel_sel = automagiiibarrels[Math.floor(Math.random()*automagiiibarrels.length)];
      var automagiii_other_sel = automagiiiothers[Math.floor(Math.random()*automagiiiothers.length)];
      var automagiii_ammo_sel = automagiiiammos[Math.floor(Math.random()*automagiiiammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + automagiii_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + automagiii_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + automagiii_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + automagiii_ammo_sel;
    }
    else if (secondary_gun_selection == "gyrojet mark i")
    {
      var gyrojetmarki_optic_sel = gyrojetmarkioptics[Math.floor(Math.random()*gyrojetmarkioptics.length)];
      var gyrojetmarki_barrel_sel = gyrojetmarkibarrels[Math.floor(Math.random()*gyrojetmarkibarrels.length)];
      var gyrojetmarki_other_sel = gyrojetmarkiothers[Math.floor(Math.random()*gyrojetmarkiothers.length)];
      var gyrojetmarki_ammo_sel = gyrojetmarkiammos[Math.floor(Math.random()*gyrojetmarkiammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + gyrojetmarki_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + gyrojetmarki_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + gyrojetmarki_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + gyrojetmarki_ammo_sel;
    }
    else if (secondary_gun_selection == "gsp")
    {
      var gsp_optic_sel = gspoptics[Math.floor(Math.random()*gspoptics.length)];
      var gsp_barrel_sel = gspbarrels[Math.floor(Math.random()*gspbarrels.length)];
      var gsp_other_sel = gspothers[Math.floor(Math.random()*gspothers.length)];
      var gsp_ammo_sel = gspammos[Math.floor(Math.random()*gspammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + gsp_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + gsp_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + gsp_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + gsp_ammo_sel;
    }
    else if (secondary_gun_selection == "grizzly")
    {
      var grizzly_optic_sel = grizzlyoptics[Math.floor(Math.random()*grizzlyoptics.length)];
      var grizzly_barrel_sel = grizzlybarrels[Math.floor(Math.random()*grizzlybarrels.length)];
      var grizzly_other_sel = grizzlyothers[Math.floor(Math.random()*grizzlyothers.length)];
      var grizzly_ammo_sel = grizzlyammos[Math.floor(Math.random()*grizzlyammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + grizzly_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + grizzly_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + grizzly_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + grizzly_ammo_sel;
    }
    else if (secondary_gun_selection == "m2011")
    {
      var m2011_optic_sel = m2011optics[Math.floor(Math.random()*m2011optics.length)];
      var m2011_barrel_sel = m2011barrels[Math.floor(Math.random()*m2011barrels.length)];
      var m2011_other_sel = m2011others[Math.floor(Math.random()*m2011others.length)];
      var m2011_ammo_sel = m2011ammos[Math.floor(Math.random()*m2011ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + m2011_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + m2011_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + m2011_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + m2011_ammo_sel;
    }
    else if (secondary_gun_selection == "alien")
    {
      var alien_optic_sel = alienoptics[Math.floor(Math.random()*alienoptics.length)];
      var alien_barrel_sel = alienbarrels[Math.floor(Math.random()*alienbarrels.length)];
      var alien_other_sel = alienothers[Math.floor(Math.random()*alienothers.length)];
      var alien_ammo_sel = alienammos[Math.floor(Math.random()*alienammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + alien_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + alien_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + alien_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + alien_ammo_sel;
    }
    else if (secondary_gun_selection == "af2011-a1")
    {
      var af2011a1_optic_sel = af2011a1optics[Math.floor(Math.random()*af2011a1optics.length)];
      var af2011a1_barrel_sel = af2011a1barrels[Math.floor(Math.random()*af2011a1barrels.length)];
      var af2011a1_other_sel = af2011a1others[Math.floor(Math.random()*af2011a1others.length)];
      var af2011a1_ammo_sel = af2011a1ammos[Math.floor(Math.random()*af2011a1ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + af2011a1_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + af2011a1_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + af2011a1_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + af2011a1_ammo_sel;
    }
    else if (secondary_gun_selection == "g18c")
    {
      var g18c_optic_sel = g18coptics[Math.floor(Math.random()*g18coptics.length)];
      var g18c_barrel_sel = g18cbarrels[Math.floor(Math.random()*g18cbarrels.length)];
      var g18c_other_sel = g18cothers[Math.floor(Math.random()*g18cothers.length)];
      var g18c_ammo_sel = g18cammos[Math.floor(Math.random()*g18cammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + g18c_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + g18c_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + g18c_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + g18c_ammo_sel;
    }
    else if (secondary_gun_selection == "93r")
    {
      var r95_optic_sel = r95optics[Math.floor(Math.random()*r95optics.length)];
      var r95_barrel_sel = r95barrels[Math.floor(Math.random()*r95barrels.length)];
      var r95_other_sel = r95others[Math.floor(Math.random()*r95others.length)];
      var r95_ammo_sel = r95ammos[Math.floor(Math.random()*r95ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + r95_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + r95_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + r95_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + r95_ammo_sel;
    }
    else if (secondary_gun_selection == "pp-2000")
    {
      var pp2000_optic_sel = pp2000optics[Math.floor(Math.random()*pp2000optics.length)];
      var pp2000_barrel_sel = pp2000barrels[Math.floor(Math.random()*pp2000barrels.length)];
      var pp2000_other_sel = pp2000others[Math.floor(Math.random()*pp2000others.length)];
      var pp2000_ammo_sel = pp2000ammos[Math.floor(Math.random()*pp2000ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + pp2000_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + pp2000_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + pp2000_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + pp2000_ammo_sel;
    }
    else if (secondary_gun_selection == "tec-9")
    {
      var tec9_optic_sel = tec9optics[Math.floor(Math.random()*tec9optics.length)];
      var tec9_barrel_sel = tec9barrels[Math.floor(Math.random()*tec9barrels.length)];
      var tec9_other_sel = tec9others[Math.floor(Math.random()*tec9others.length)];
      var tec9_ammo_sel = tec9ammos[Math.floor(Math.random()*tec9ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + tec9_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + tec9_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + tec9_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + tec9_ammo_sel;
    }
    else if (secondary_gun_selection == "micro uzi")
    {
      var microuzi_optic_sel = microuzioptics[Math.floor(Math.random()*microuzioptics.length)];
      var microuzi_barrel_sel = microuzibarrels[Math.floor(Math.random()*microuzibarrels.length)];
      var microuzi_other_sel = microuziothers[Math.floor(Math.random()*microuziothers.length)];
      var microuzi_ammo_sel = microuziammos[Math.floor(Math.random()*microuziammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + microuzi_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + microuzi_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + microuzi_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + microuzi_ammo_sel;
    }
    else if (secondary_gun_selection == "skorpion vz.61")
    {
      var skorpionvz61_optic_sel = skorpionvz61optics[Math.floor(Math.random()*skorpionvz61optics.length)];
      var skorpionvz61_barrel_sel = skorpionvz61barrels[Math.floor(Math.random()*skorpionvz61barrels.length)];
      var skorpionvz61_other_sel = skorpionvz61others[Math.floor(Math.random()*skorpionvz61others.length)];
      var skorpionvz61_ammo_sel = skorpionvz61ammos[Math.floor(Math.random()*skorpionvz61ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + skorpionvz61_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + skorpionvz61_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + skorpionvz61_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + skorpionvz61_ammo_sel;
    }
    else if (secondary_gun_selection == "asmi")
    {
      var asmi_optic_sel = asmioptics[Math.floor(Math.random()*asmioptics.length)];
      var asmi_barrel_sel = asmibarrels[Math.floor(Math.random()*asmibarrels.length)];
      var asmi_other_sel = asmiothers[Math.floor(Math.random()*asmiothers.length)];
      var asmi_ammo_sel = asmiammos[Math.floor(Math.random()*asmiammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + asmi_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + asmi_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + asmi_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + asmi_ammo_sel;
    }
    else if (secondary_gun_selection == "mp1911")
    {
      var mp1911_optic_sel = mp1911optics[Math.floor(Math.random()*mp1911optics.length)];
      var mp1911_barrel_sel = mp1911barrels[Math.floor(Math.random()*mp1911barrels.length)];
      var mp1911_other_sel = mp1911others[Math.floor(Math.random()*mp1911others.length)];
      var mp1911_ammo_sel = mp1911ammos[Math.floor(Math.random()*mp1911ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + mp1911_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + mp1911_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + mp1911_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + mp1911_ammo_sel;
    }
    else if (secondary_gun_selection == "arm pistol")
    {
      var armpistol_optic_sel = armpistoloptics[Math.floor(Math.random()*armpistoloptics.length)];
      var armpistol_barrel_sel = armpistolbarrels[Math.floor(Math.random()*armpistolbarrels.length)];
      var armpistol_other_sel = armpistolothers[Math.floor(Math.random()*armpistolothers.length)];
      var armpistol_ammo_sel = armpistolammos[Math.floor(Math.random()*armpistolammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + armpistol_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + armpistol_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + armpistol_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + armpistol_ammo_sel;
    }
    else if (secondary_gun_selection == "mp412 rex")
    {
      var mp412rex_optic_sel = mp412rexoptics[Math.floor(Math.random()*mp412rexoptics.length)];
      var mp412rex_barrel_sel = mp412rexbarrels[Math.floor(Math.random()*mp412rexbarrels.length)];
      var mp412rex_other_sel = mp412rexothers[Math.floor(Math.random()*mp412rexothers.length)];
      var mp412rex_ammo_sel = mp412rexammos[Math.floor(Math.random()*mp412rexammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + mp412rex_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + mp412rex_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + mp412rex_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + mp412rex_ammo_sel;
    }
    else if (secondary_gun_selection == "mateba 6")
    {
      var mateba6_optic_sel = mateba6optics[Math.floor(Math.random()*mateba6optics.length)];
      var mateba6_barrel_sel = mateba6barrels[Math.floor(Math.random()*mateba6barrels.length)];
      var mateba6_other_sel = mateba6others[Math.floor(Math.random()*mateba6others.length)];
      var mateba6_ammo_sel = mateba6ammos[Math.floor(Math.random()*mateba6ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + mateba6_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + mateba6_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + mateba6_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + mateba6_ammo_sel;
    }
    else if (secondary_gun_selection == "1858 new army")
    {
      var newarmy1858_optic_sel = newarmy1858optics[Math.floor(Math.random()*newarmy1858optics.length)];
      var newarmy1858_barrel_sel = newarmy1858barrels[Math.floor(Math.random()*newarmy1858barrels.length)];
      var newarmy1858_other_sel = newarmy1858others[Math.floor(Math.random()*newarmy1858others.length)];
      var newarmy1858_ammo_sel = newarmy1858ammos[Math.floor(Math.random()*newarmy1858ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + newarmy1858_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + newarmy1858_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + newarmy1858_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + newarmy1858_ammo_sel;
    }
    else if (secondary_gun_selection == "redhawk 44")
    {
      var redhawk44_optic_sel = redhawk44optics[Math.floor(Math.random()*redhawk44optics.length)];
      var redhawk44_barrel_sel = redhawk44barrels[Math.floor(Math.random()*redhawk44barrels.length)];
      var redhawk44_other_sel = redhawk44others[Math.floor(Math.random()*redhawk44others.length)];
      var redhawk44_ammo_sel = redhawk44ammos[Math.floor(Math.random()*redhawk44ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + redhawk44_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + redhawk44_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + redhawk44_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + redhawk44_ammo_sel;
    }
    else if (secondary_gun_selection == "judge")
    {
      var judge_optic_sel = judgeoptics[Math.floor(Math.random()*judgeoptics.length)];
      var judge_barrel_sel = judgebarrels[Math.floor(Math.random()*judgebarrels.length)];
      var judge_other_sel = judgeothers[Math.floor(Math.random()*judgeothers.length)];
      var judge_ammo_sel = judgeammos[Math.floor(Math.random()*judgeammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + judge_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + judge_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + judge_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + judge_ammo_sel;
    }
    else if (secondary_gun_selection == "executioner")
    {
      var executioner_optic_sel = executioneroptics[Math.floor(Math.random()*executioneroptics.length)];
      var executioner_barrel_sel = executionerbarrels[Math.floor(Math.random()*executionerbarrels.length)];
      var executioner_other_sel = executionerothers[Math.floor(Math.random()*executionerothers.length)];
      var executioner_ammo_sel = executionerammos[Math.floor(Math.random()*executionerammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + executioner_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + executioner_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + executioner_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + executioner_ammo_sel;
    }
    else if (secondary_gun_selection == "super shorty")
    {
      var supershorty_optic_sel = supershortyoptics[Math.floor(Math.random()*supershortyoptics.length)];
      var supershorty_barrel_sel = supershortybarrels[Math.floor(Math.random()*supershortybarrels.length)];
      var supershorty_other_sel = supershortyothers[Math.floor(Math.random()*supershortyothers.length)];
      var supershorty_ammo_sel = supershortyammos[Math.floor(Math.random()*supershortyammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + supershorty_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + supershorty_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + supershorty_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + supershorty_ammo_sel;
    }
    else if (secondary_gun_selection == "sfg 50")
    {
      var sfg50_optic_sel = sfg50optics[Math.floor(Math.random()*sfg50optics.length)];
      var sfg50_barrel_sel = sfg50barrels[Math.floor(Math.random()*sfg50barrels.length)];
      var sfg50_other_sel = sfg50others[Math.floor(Math.random()*sfg50others.length)];
      var sfg50_ammo_sel = sfg50ammos[Math.floor(Math.random()*sfg50ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + sfg50_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + sfg50_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + sfg50_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + sfg50_ammo_sel;
    }
    else if (secondary_gun_selection == "m79 thumper")
    {
      var m79thumper_optic_sel = m79thumperoptics[Math.floor(Math.random()*m79thumperoptics.length)];
      var m79thumper_barrel_sel = m79thumperbarrels[Math.floor(Math.random()*m79thumperbarrels.length)];
      var m79thumper_other_sel = m79thumperothers[Math.floor(Math.random()*m79thumperothers.length)];
      var m79thumper_ammo_sel = m79thumperammos[Math.floor(Math.random()*m79thumperammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + m79thumper_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + m79thumper_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + m79thumper_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + m79thumper_ammo_sel;
    }
    else if (secondary_gun_selection == "advanced coilgun")
    {
      var advancedcoilgun_optic_sel = advancedcoilgunoptics[Math.floor(Math.random()*advancedcoilgunoptics.length)];
      var advancedcoilgun_barrel_sel = advancedcoilgunbarrels[Math.floor(Math.random()*advancedcoilgunbarrels.length)];
      var advancedcoilgun_other_sel = advancedcoilgunothers[Math.floor(Math.random()*advancedcoilgunothers.length)];
      var advancedcoilgun_ammo_sel = advancedcoilgunammos[Math.floor(Math.random()*advancedcoilgunammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + advancedcoilgun_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + advancedcoilgun_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + advancedcoilgun_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + advancedcoilgun_ammo_sel;
    }
    else if (secondary_gun_selection == "sawed off")
    {
      var sawedoff_optic_sel = sawedoffoptics[Math.floor(Math.random()*sawedoffoptics.length)];
      var sawedoff_barrel_sel = sawedoffbarrels[Math.floor(Math.random()*sawedoffbarrels.length)];
      var sawedoff_other_sel = sawedoffothers[Math.floor(Math.random()*sawedoffothers.length)];
      var sawedoff_ammo_sel = sawedoffammos[Math.floor(Math.random()*sawedoffammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + sawedoff_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + sawedoff_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + sawedoff_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + sawedoff_ammo_sel;
    }
    else if (secondary_gun_selection == "saiga-12u")
    {
      var saiga12u_optic_sel = saiga12uoptics[Math.floor(Math.random()*saiga12uoptics.length)];
      var saiga12u_barrel_sel = saiga12ubarrels[Math.floor(Math.random()*saiga12ubarrels.length)];
      var saiga12u_other_sel = saiga12uothers[Math.floor(Math.random()*saiga12uothers.length)];
      var saiga12u_ammo_sel = saiga12uammos[Math.floor(Math.random()*saiga12uammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + saiga12u_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + saiga12u_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + saiga12u_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + saiga12u_ammo_sel;
    }
    else if (secondary_gun_selection == "obrez")
    {
      var obrez_optic_sel = obrezoptics[Math.floor(Math.random()*obrezoptics.length)];
      var obrez_barrel_sel = obrezbarrels[Math.floor(Math.random()*obrezbarrels.length)];
      var obrez_other_sel = obrezothers[Math.floor(Math.random()*obrezothers.length)];
      var obrez_ammo_sel = obrezammos[Math.floor(Math.random()*obrezammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + obrez_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + obrez_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + obrez_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + obrez_ammo_sel;
    }
    else if (secondary_gun_selection == "sass 308")
    {
      var sass308_optic_sel = sass308optics[Math.floor(Math.random()*sass308optics.length)];
      var sass308_barrel_sel = sass308barrels[Math.floor(Math.random()*sass308barrels.length)];
      var sass308_other_sel = sass308others[Math.floor(Math.random()*sass308others.length)];
      var sass308_ammo_sel = sass308ammos[Math.floor(Math.random()*sass308ammos.length)];

      document.getElementById("weapon2").innerHTML = "secondary: " + secondary_gun_selection;
      document.getElementById("optic2").innerHTML = "optic: " + sass308_optic_sel;
      document.getElementById("barrel2").innerHTML = "barrel: " + sass308_barrel_sel;
      document.getElementById("other2").innerHTML = "other: " + sass308_other_sel;
      document.getElementById("ammo2").innerHTML = "ammo: " + sass308_ammo_sel;
    }
    else
    {
      document.getElementById("weapon1").innerHTML = "error";
      document.getElementById("weapon2").innerHTML = "error";
    }

    //display grenade and melee choice
    document.getElementById("weapon3").innerHTML = "grenade: " + grenade_selection;
    document.getElementById("weapon4").innerHTML = "melee: " + melee_selection;
}
