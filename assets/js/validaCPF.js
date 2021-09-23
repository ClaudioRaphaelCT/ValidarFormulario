class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

    eventos(){
      this.formulario.addEventListener('click', e =>{
        this.handleSubmit(e);
      });

    }
    handleSubmit(e){
      e.preventDefault();
      const camposValidos = this.camposSaoValidos();
      console.log('Formulario não enviado');
    }
    camposSaoValidos(){
      let valid = true;

      for(let errorText of this.formulario.querySelectorAll('.erro-text')){
        errorText.remove();
      }

      for(let campo of this.formulario.querySelectorAll('.validar')){
        const label = campo.previousElementSibling.innerHTML;

        if(!campo.value){
          this.criaErro(campo, `Campo ${label} não pode esta em branco`);
          valid = false;

        }
      }
    }
    criaErro(campo, msg){
      const div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('erro-text');
      campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();