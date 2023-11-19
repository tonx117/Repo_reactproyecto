const acercadeview = (_req, res) => {
  res.render("acercade.ejs");
};

const checklistview = (_req, res) => {
  res.render("checklist.ejs");
};

const contactoview = (_req, res) => {
  res.render("contacto.ejs");
};

const cuentaview = (_req, res) => {
  res.render("cuenta.ejs");
};

const herramientasview = (_req, res) => {
  res.render("herramientas.ejs");
};

const loginview = (_req, res) => {
  res.render("login.ejs");
};

const registerview = (_req, res) => {
  res.render("register");
};

const serviciosview = (_req, res) => {
  res.render("servicios");
};

const wikiview = (_req, res) => {
  res.render("wiki");
};

const generalesview = (_req, res) => {
  res.render("generales");
};

const metalurgiaview = (_req, res) => {
  res.render("metalurgia");
};

const electricidadview = (_req, res) => {
  res.render("electricidad");
};

const carpinteriaview = (_req, res) => {
  res.render("carpinteria");
};

export {
  generalesview,
  metalurgiaview,
  electricidadview,
  carpinteriaview,
  acercadeview,
  checklistview,
  contactoview,
  wikiview,
  cuentaview,
  herramientasview,
  loginview,
  registerview,
  serviciosview,
};
