// Change the title text and color
document.getElementById('changeTextBtn').addEventListener('click', function () {
    const title = document.querySelector('.title');
    title.textContent = 'JavaScript Updated Title!';
    title.style.color = '#e74c3c'; // Change color
  });
  
  // Toggle a paragraph dynamically
  document.getElementById('toggleParaBtn').addEventListener('click', function () {
    const section = document.getElementById('dynamicSection');
    const existingPara = document.getElementById('dynamicPara');
  
    if (existingPara) {
      section.removeChild(existingPara);
    } else {
      const newPara = document.createElement('p');
      newPara.id = 'dynamicPara';
      newPara.textContent = 'This paragraph was added with JavaScript!';
      newPara.style.backgroundColor = '#dff9fb';
      newPara.style.padding = '10px';
      section.appendChild(newPara);
    }
  });
  