var name = document.getElementsByClassName('x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f');
var people = document.getElementsByClassName("_b5a");
var person;

var people_lst = ['蘇誼庭','蔡浚銘','黃鉑皓', '黃宥鈞', '念誠','趙宥騏','黃昊群','TY Harry','劉君彥','高振旗','Justin Lin','陳帷哲','葉東逸','林友容','李俊毅','潘茗脩','Tim Chen','張尚弘','范哲維','周子宸','陳柏瑋','張芷瑜','Huang Yong Cyun','鄭喬瑀','何仁義'];
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function clickMatchingPeople() {
  while (true) {
    for (let i = 4; i < 20; i++) {
        const person = people[i];
        const person_name = person.querySelector('.x1i10hfl a').textContent;

        if (people_lst.includes(person_name)) {
            try{
                person.querySelector('.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.x9f619.x3nfvp2.xdt5ytf.xl56j7k.x1n2onr6.xh8yej3').click();
            }
            catch(error){}
        }
    }
    await sleep(1000);
  }
}

clickMatchingPeople();
