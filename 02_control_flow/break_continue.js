for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`detected 5 here`);
    break;
  }
  console.log(`value of i:${i}`);
}
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`detected 5 here`);
    continue;
  }
  console.log(`value of i:${i}`);
}
