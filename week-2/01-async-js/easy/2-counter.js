let ctr = 0;
function counter() {
  ctr++;
  console.log(ctr);
  setTimeout(counter, 1000);
}

counter();
