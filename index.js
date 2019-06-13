const {Savage,Savage_model} =  require('@king__somto/savage')
const mod = new Savage_model()
let savage_ = new Savage()

turnToBinary=(x)=>{

  
  let binarry = (x).toString(2)
  if (binarry.length>10){
    throw 'this number has a binary representation longer than 10'

    return -1
  }

  if(binarry.length!=10){
    const remain = 10 - binarry.length
    for (let j = 0;j<remain;j++){
      binarry = '0'+binarry
    }
  }

  return binarry.split('').map(Number)

}


createDataSet=(maxNum)=>{
let inputs = []
let targets = []

for(let i = 0 ;i<=maxNum;i++){

let binarry = (i).toString(2)
 if (binarry.length>10){
 throw 'this number has a binary representation longer than 10'

    return -1
    console.log('this number has a binary representation longer than 10') 
  }

if(binarry.length!=10){
  const remain = 10 - binarry.length
  for (let j = 0;j<remain;j++){
    binarry = '0'+binarry
  }
}
inputs.push(binarry.split('').map(Number))
  if(i%2==0){
    //even number
    targets.push(1)
  }else{
    targets.push(0)
  }
}

return {inputs,targets}
}


const {inputs,targets} = createDataSet(30)
console.log(inputs)


mod.addDense({
    'output':3,
    'input':10,
    'activation':'sigmoid'
})


mod.addDense({
    'output':1,
    'activation':'sigmoid'
})


let itterations = 10000
let lr = 0.52

mod.run(inputs,targets,itterations,lr)
mod.modelSave('model.txt')
mod.predict(turnToBinary(28))


