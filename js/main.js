'use strict'

{
  function createColumn(col) {
    // 1～15 * iのランダムの配列を作成し、5個繰り返す
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
  
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  // 上の数字を5列分つくる
  const columns = [];
  for (let i = 0; i < 5; i++) {
    
  }

}