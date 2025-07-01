const Admin = require('../models/Admin');

const seedAdmin = async () => {
  const existing = await Admin.findOne({ username: 'Propiedades_Oriente' });
  if (existing) {
    console.log('🟡 Admin ya existe');
    return;
  }

  const newAdmin = new Admin({
    username: 'Propiedades_Oriente',
    password: 'Prop_Ori2025*', // Este valor será hasheado automáticamente
  });

  await newAdmin.save();
  console.log('✅ Admin inicial creado');
};

module.exports = seedAdmin;
