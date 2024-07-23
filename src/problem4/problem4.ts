// method 1: math
// time complexity: O(1)
function sum_to_n_a(n: number): number {
    return (n*(n+1))/2 
}

// method 2: recursive
// time complexity: O(n)
function sum_to_n_b(n: number): number {
    if(n === 0) return 0
    return n + sum_to_n_a(n - 1)
}

// method 3: loop
// time complexity: O(n)
function sum_to_n_c(n: number): number {
    return Array(n + 1).fill(0).reduce((t, _, i) => t + i, 0); 
}