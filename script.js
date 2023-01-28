function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")

 /* if (html.classList.contains('light')) {
    html.classList.remove('light')
  }else{
    html.classList.add("light")
  }*/
   // pegar a imagem
  const img = document.querrySelector("#Avatar img");
  //substituir a imagem
 if(html.classList.contains('light')) {
  // se estiver light , add a img light
  img.setAttribute("src", "./img/...")
 }else{
    //light mode, manter a img normal
    img.setAttribute("src", "https://github.com/jeferson-3.png")
 }
}

