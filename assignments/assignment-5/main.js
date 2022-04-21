const fetchContent = async () => {
    const response = await fetch('https://interactionlab.space/data/assignment-4-1.json').then(data => data.json());
console.log(response);

};

fetchContent();
