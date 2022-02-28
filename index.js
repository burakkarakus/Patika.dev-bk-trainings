const arguments = process.argv.slice(2)

const area = (r) => { 
  
     const area = Math.PI * r**2
     console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}

alan(parseInt(arguments[0]));
