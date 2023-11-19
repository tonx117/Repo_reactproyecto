import Usuario from "../models/usuario.model.js";

const usuarioctrl = {};

usuarioctrl.index = async (_req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    if (!usuarios || usuarios.length === 0) {
      throw {
        status: 404,
        message: "No estás registrado aún.",
      };
    }
    return res.json(usuarios);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

usuarioctrl.show = async (req, res) => {
  const UsuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(UsuarioId);

    if (!usuario) {
      throw {
        status: 404,
        message: "No existe la cuenta con el id " + UsuarioId,
      };
    }

    return res.json(usuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

usuarioctrl.store = async (req, res) => {
  const { nombre, apellido, numerotelefono, correo, contraseña } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      numerotelefono,
      correo,
      contraseña,
    });

    return res.json(nuevoUsuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

usuarioctrl.update = async (req, res) => {
  const UsuarioId = req.params.id;
  const { nombre, apellido, numerotelefono, correo, contraseña } = req.body;
  try {
    const usuario = await Usuario.findByPk(UsuarioId);
    if (!usuario) {
      throw {
        status: 404,
        message: "No existe la cuenta con el id " + UsuarioId,
      };
    }
    await usuario.update({
      nombre,
      apellido,
      numerotelefono,
      correo,
      contraseña,
    });
    return res.json(usuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

usuarioctrl.destroy = async (req, res) => {
  const UsuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(UsuarioId);
    if (!usuario) {
      throw {
        status: 404,
        message: "No existe la cuenta con el id " + UsuarioId,
      };
    }
    await Usuario.destroy({
      where: {
        id: UsuarioId,
      },
    });

    return res.json({ message: "Cuenta eliminada correctamente." });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

usuarioctrl.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({
      where: {
        correo,
        contraseña,
      },
    });

    if (!usuario) {
      return res.status(400).json({
        message: "Correo o contraseña incorrectos.",
      });
    }
    res.json(usuario);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

export default usuarioctrl;
