export const usuarioctrl = {};

usuarioctrl.indexView = (_req, res) => {

};

usuarioctrl.showView = (req, res) => {
  const UsuarioId = req.params.id;
  res.render("usuario/show", { id: UsuarioId });
};

usuarioctrl.createView = (req, res) => {
};

usuarioctrl.editView = (req, res) => {
  const UsuarioId = req.params.id;
  res.render("edit", { id: UsuarioId });
};

export default usuarioctrl;
