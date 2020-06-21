  
//Filter

let Godina = 2002;
let Godine = [2003,2001,2004,2005,2006,2002]


let prije = Godine.filter(function(god){
    return god < Godina;
});

let poslije = Godine.filter(provjeri);

function provjeri(god){
    return god > Godina;
}

console.log('/n Godine prije 2002.: ', prije);
console.log('/n Godine nakon 2002.: ', poslije);


//Map 

let Voce = ['Jabuka','Banana','Jagoda','Kiwi','Marelica'];

let duljinastringa = Voce.map(function(item,index,array){
     let duljina = item.length;
     return duljina;
 });

 console.log(duljinastringa);


 //Reduce


 const Voce = [
     {
         voce: 'Jabuka',
         kg: '20',
         brpaketa: 5
     },
     {
        voce: 'Banana',
        kg: '25',
        brpaketa: 3
    },
    {
        voce: 'Jagoda',
        kg: '5',
        brpaketa: 10
    },
    {
        voce: 'Kiwi',
        kg: '10',
        brpaketa: 7
    },
 ];

 const kolicinavoca = Voce.reduce(
     (acc,item) => acc + item.kg * item.brpaketa,0
 );

 console.log(kolicinavoca);
                       