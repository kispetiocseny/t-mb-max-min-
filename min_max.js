let tomb=[];
for (let i=0; i<10;i++){
	tomb.push (Math.round(Math.random()*100));
}
for (let i=0; i<tomb.length;i++){
	document.write (tomb[i]+" ");
    }
//maximum érték
let max=0;
for (let i=0; i<tomb.length;i++){
if (tomb[i]>=max){
	max=tomb[i];
    }
    }
    document.write("<br>A maximum érték: "+max);
// maximum érték indexen
	document.write("<br>A maximum érték indexe: "+tomb.indexOf(max));
// minimum érték
let min=100;
for (let i=0; i<tomb.length;i++){
if (tomb[i]< min){
	min=tomb[i];
}
}
    document.write("<br>A minimum érték: "+min);
// minimum érték indexen
	document.write("<br>A minimum érték indexe: "+tomb.indexOf(min));