
import dubai1 from "../assets/dubai.jpg";
import dubai2 from "../assets/dubai2jpg.jpg";
import dubai3 from "../assets/dubai3.jpg";
import dubai4 from "../assets/dubai4.jpg"
import bali1 from "../assets/bali1.jpg";
import bali2 from "../assets/bali2.jpg";
import bali3 from "../assets/bali3.jpg";
import bali4 from "../assets/bali4.jpg";
import londra1 from "../assets/londra1.jpg";
import londra2 from "../assets/londra2.jpg";
import londra3 from "../assets/londra3.jpg";
import londra4 from "../assets/londra4.jpg";
import roma1 from "../assets/roma1.jpg";
import roma2 from "../assets/roma2.jpg";
import roma3 from "../assets/roma3.jpg";
import roma4 from "../assets/roma4.jpg";
import paris1 from "../assets/paris1.jpg";
import paris2 from "../assets/paris2.jpg";
import paris3 from "../assets/paris3.jpg";
import paris4 from "../assets/paris4.jpg";
import grecia1 from "../assets/grecia1.jpg";
import grecia2 from "../assets/grecia2.jpg";
import grecia3 from "../assets/grecia3.jpg";
import grecia4 from "../assets/grecia4.jpg";
import egipt1 from "../assets/egipt1.jpg";
import egipt2 from "../assets/egipt2.jpg";
import egipt3 from "../assets/egipt3.jpg";
import egipt4 from "../assets/egipt4.jpg";

const data = [
    {
        name: 'Dubai, Emiratele Arabe Unite',
        images: [dubai1, dubai2, dubai3, dubai4],
        description: 'Daca ati ales sa petreceti un sejur in Dubai, atunci trebuie sa stiti ca acesta este unul dintre cele mai bogate si puternice dintre cele sapte orase-stat ce formeaza Emiratele Arabe Unite si imbina tot ce este mai bun in orient si occident: cultura araba, arhitectura islamica, traditiile beduine, dar si restaurantele rafinate si hotelurile de lux!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Burj Khalifa', 'Satul Global', 'Red Dunes Desert Safari', 'Dubai Frame'],
        paragraph: 'Există numeroase activități de făcut și repere de văzut în Dubai și ar putea fi greu să le poți cuprinde pe toate într-o singură excursie. De aceea, am selectat doar cele mai bune atracții turistice din Dubai pe care pur și simplu nu le poți rata cât timp ești acolo!'
    },
    {
        name: ' Bali, Indonezia',
        images: [bali1, bali2, bali3, bali4],
        description: 'Denumita “Dimineata lumii”, aceasta insula plina de mister si povestiri magice este una dintre cele mai populare destinatii turistice. Bali este insula celor 1000 de temple si considerat tinutul Domnului. Bali este cu siguranta o insula paradisiaca!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Plaja Kuta', 'Templul Tanah Lot', 'Seminiak', 'Templul Uluwatu'],
        paragraph: 'Exista obiective turistice in Bali pe gusturile fiecaruia. Poti sa vii sa te bucuri de plajele sale superbe, sa faci scufundari in recifele de corali, sa explorezi templele, sa vizitezi culturile de orez sau sa faci drumetii pe munte.'


    },
    {
        name: 'Londra, Marea Britanie',
        images: [londra1, londra2, londra3, londra4],
        description: 'Londra este capitala Angliei si a Regatului Unit al Marii Britanii, cel mai important centru politic, financiar, cultural si artistic al Regatului Unit si unul din cele mai importante orase ale lumii. Este administrat de catre Corporatia Londrei, condusa de Lordul Primar al Londrei si are propriul corp de politie, separat de Politia Metropolitana!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Muzeul Britanic', 'Palatul Westminster si Big Ben', 'Turnul Londrei', 'Tower Bridge'],
        paragraph: 'Cei care ajung aici sunt fascinați de vibrația modernă a orașului, de muzee sale extraordinare  și de modul în care această destinație combină obiective turistice moderne cu atracții turistice foarte vechi.'

    },
    {
        name: 'Roma, Italia',
        images: [roma1, roma2, roma3, roma4],
        description: 'Roma este capitala Italiei. Situat pe malul fluviului Tibru, oraşul are o istorie îndelungată fiind de-a lungul secolelor capitala Republicii Romane, a Imperiului Roman, a Bisericii Romano-Catolice şi a Italiei moderne. Roma este un important centru turistic. Printre monumentele cele mai faimoase se numară Colosseumul şi Columna lui Traian. O enclavă a Romei este şi statul Vatican, un teritoriu suveran al Sfântului Scaun situat într-un cartier roman!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Colosseumul din Roma', 'Panteonul din Roma', 'Piata Venetia si monumentul II Vittoriano', 'Fontana di Trevi Roma'],
        paragraph: 'Roma este unul dintre cele mai vechi orașe din lume și o destinatie care nu încetează să surpindă.Supranumit și Orasul Etern, capitala Italiei este un mix între ruine antice captivante, artă și o atmosferă plină de viață.'

    },
    {
        name: 'Paris, Franța',
        images: [paris1, paris2, paris3, paris4],
        description: 'Paris este capitala Franţei şi cel mai mare oraş al acestei ţări. Orașul este traversat de fluviul Sena, în nordul Franței, în mijlocul regiunii Île-de-France. Parisul este astăzi unul dintre cele mai mari centre economice și culturale din lume. Parisul a fost unul dintre cele mai mari orașe ale lumii occidentale pentru aproape 1000 de ani, înainte de secolul al XIX-lea și cel mai mare oraș din lume între secolele XVI-XIX!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Muzeul Luvru', 'Turnul Eiffel', 'Disneyland Paris', 'Catedrala Notre-Dame'],
        paragraph: 'Paris, este unul dintre cele mai importante și influente orașe din lume dar și cel mai vizitat oraș de pe glob.Este un oraș plin de multe atracții turistice, de la muzee de talie mondială la bijuterii ascunse mai puțin cunoscute, nu veți epuiza niciodată aventurile pe care le oferă.'

    },
    {
        name: 'Creta, Grecia',
        images: [grecia1, grecia2, grecia3, grecia4],
        description: 'Grecia se afla in sud-estul Europei si este vecina la est cu Turcia si la nord cu Bulgaria, Macedonia si Albania. Grecia este membra a Uniunii Europene din 1981, isi serbeaza ziua nationala pe 25 martie si are capitala la Atena.  Numele oficial al Greciei este “Republica Elena”!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Insula Lefkada', 'Santorini', 'Zakynthos', 'Thassos'],
        paragraph: 'Daca tinem cont de faptul ca Grecia este plina de insule care mai de care mai frumoase si de frumuseti naturale care o inconjoara, atunci poti alege cu usurinta sa iti petreci vacanta aici alaturi de familie si prieteni. Cu siguranta nu te vei plictisi aici! Alege ce iti place'

    },
    {
        name: 'Cairo, Egipt',
        images: [egipt1, egipt2, egipt3, egipt4],
        description: 'Supranumit Perla Africii, Egiptul este in topul destinatiilor de calatorie preferate de catre turistii fascinati de istoria, cultura si religia locului, dar totodata, atrasi de frumusetea peisajelor oferite de marea turcoaz si minunatul desert. O tara a contrastelor, pe care Herodot o considera un „Dar al Nilului”, Egiptul impresioneaza prin multimea de constructii antice spectaculoase si obiective turistice incarcate de semnificatii istorice. Egiptul este una dintre cele mai calde tari din intreaga lume si un loc inedit, unde sezonul turistic dureaza tot anul!',
        subtitle: 'Aici poti vizita urmatoarele lucruri:',
        visit: ['Piramidele din Giza', 'Valea Regilor', 'Desertul Alb', 'Templul Karnak (Luxor)'],
        paragraph: 'Daca te pasioneaza istoria civilizatiilor antice, aceasta tara din Orientul Mijlociu este locul ideal in care poti sa o explorezi. O calatorie in Egipt imbina perfect aventura si relaxarea cu istoria, cultura, spiritualitatea si arta egipteana!'

    },

];


export default data;