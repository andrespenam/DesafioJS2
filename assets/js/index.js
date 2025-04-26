const categorias = document.querySelector('.categoria');

categorias.addEventListener('mouseover', () => {
    categorias.style.transform = 'scale(1.2) rotate(5deg)';
    categorias.style.backgroundColor = '#FF5733';
  });

  categorias.addEventListener('mouseout', () => {
    categorias.style.transform = 'scale(1) rotate(0deg)';
    categorias.style.backgroundColor = 'white';
  });


  const categoria = document.querySelector('.categoria2');

categoria.addEventListener('mouseover', () => {
    categoria.style.transform = 'scale(1.2) rotate(5deg)';
    categoria.style.backgroundColor = '#FF5733';
  });

  categoria.addEventListener('mouseout', () => {
    categoria.style.transform = 'scale(1) rotate(0deg)';
    categoria.style.backgroundColor = 'white';
  });

  const categoria1 = document.querySelector('.categoria3');

categoria1.addEventListener('mouseover', () => {
    categoria1.style.transform = 'scale(1.2) rotate(5deg)';
    categoria1.style.backgroundColor = '#FF5733';
  });

  categoria1.addEventListener('mouseout', () => {
    categoria1.style.transform = 'scale(1) rotate(0deg)';
    categoria1.style.backgroundColor = 'white';
  });