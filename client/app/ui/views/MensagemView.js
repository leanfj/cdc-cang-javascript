class MensagemView extends View {
  template(model) {
    return model.texto
      ? `<p class="alert alert-info">${model.texto}</p>`
      : `<p></p>`;
  }

  limpaMensagem() {
    setTimeout(() => {
      this.update('');
    }, 2000);
  }
}
