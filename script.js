const date1 = new Date();
const date2 = new Date('12/4/2021');
const date3 = new Date('12/5/2021');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
const diffTime1 = Math.abs(date2 - date1);
const diffDays1 = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(date1);
$('#quote').text(`Ramadhan ${diffDays}  Hari lagi. Lebaran ${diffDays1} hari lagi.`);
