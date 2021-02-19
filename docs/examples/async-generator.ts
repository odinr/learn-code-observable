async function* interval(count: number, timeout: number = 1000) {
  for(let i= 0; i<count; i++) {
    await new Promise(resolve => setTimeout(resolve, timeout));
    yield i;
  }
}

const execute = async() => {
  const generator = interval(5);
  for await(const value of generator){
    console.log(`count: ${value}`);
  }
  return "counter complete"
}

export default execute;