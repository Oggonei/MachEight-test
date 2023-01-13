const entry = [1,9,5,0,20,-4,12,16,7]
const sum = 12
let total = []

function findNumbers(entry,sum) {
  entry.forEach((item, index) => {
    for(let i=index; i <= entry.length; i++) {
      if(item !== entry[i]){
        if(item + entry[i] === sum) {
          let item1 = item
          let item2 = entry[i]
          let pair = [item1,item2]
          total.push(pair)
        }
      }
    }
  })
  console.log(total)
}
(findNumbers(entry,sum))