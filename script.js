function generateRandomNumber (num){
    return Math.floor(Math.random() * num);
    }
    
    const fortune = ['a nice future.', 'bad luck.', 'welthy future.'];
    const compliment = ['nice person.', 'beautiful person.', 'self-loving person.'];
    const wish = ['a happy husband.', 'nice children.', 'a nice cat.'];
    
    console.log('You will have ' + fortune[generateRandomNumber(3)]);
    console.log('You will be a ' + compliment[generateRandomNumber(3)]);
    console.log('I wish you ' + wish[generateRandomNumber(3)]);
    
    // console.log(generateRandomNumber(4));