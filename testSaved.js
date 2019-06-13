
const model = new Savage_model()
model.loadModel('model.txt')
let ans = model.predict(turnToBinary(101))
console.log(ans);
