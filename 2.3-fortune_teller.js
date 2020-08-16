/**
 Why pay a fortune teller when you can just program your fortune yourself?
• Write a function named `tellFortune` that:
◦ takes 4 arguments: number of children, partner’s name, geographic
location, job title.
◦ Outputs your fortune to the console like so: “You will be a X in Y,
and married to Z with N kids”
 */

 tellFortune('Programmer', 'Eilat', 'Gal', '4');

 function tellFortune(jobTitle, geoLocation, partnerName, kidsNum){
  console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${kidsNum} kids`);
 }