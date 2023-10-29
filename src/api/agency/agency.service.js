const { db } = require('../../utils/db');

const getAgency = (userId) => {
  return db.agency.findUnique({
    where: {
      userId: userId,
    },
  });
};

const createAgency = (userId, body) => {
  return db.agency.create({
    data: {
      userId,
      ...body,
    },
  });
};

const updateAgency = (userId, body) => {
  return db.agency.update({
    where: { userId: userId },
    data: {
      ...body,
    },
  });
};

module.exports = {
  getAgency,
  createAgency,
  updateAgency,
};
