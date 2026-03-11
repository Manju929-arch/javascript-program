let n = "Manjunath";
let address = "Bangalore";
let company = "Dheecodinglab";

// First half of name
let n_fh = n.slice(0, n.length / 2);

// First half of first half
let n_st = n_fh.slice(0, n_fh.length / 2);

// Combine name + address + part of name
let n_a = n_fh.concat(address).concat(n_st);

// Split combined string into two halves
let mid1 = Math.floor(n_a.length / 2);
let n_a_fh = n_a.slice(0, mid1);
let n_a_sh = n_a.slice(mid1);

// Insert company in middle
let n_a_c = n_a_fh.concat(company).concat(n_a_sh);

// Repeat 5 times
let nac5 = n_a_c.repeat(5);

// Split again
let mid2 = Math.floor(nac5.length / 2);
let nac5_fh = nac5.slice(0, mid2);
let nac5_sh = nac5.slice(mid2);

// Insert uppercase name in middle
let res = nac5_fh.concat(n.toUpperCase()).concat(nac5_sh);

console.log(res);