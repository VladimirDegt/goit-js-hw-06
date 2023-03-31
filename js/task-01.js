const arrayCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${arrayCategories.length}`);
console.log('');

arrayCategories.forEach ( (category) => {
    console.log(`Category: ${category.querySelector('#categories h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('#categories ul li').length}`);
    console.log('');
} );
