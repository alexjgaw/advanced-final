import OrganizationModel from '../models/OrganizationModel';

const OrganizationContoller = {};

OrganizationContoller.list = (request, response, next) => {
  OrganizationModel.find({}).exec()
    .then(organizations => {
      return response.json(organizations);
    })
    .catch(error => {
      next('Error getting organizations:', error);
    });
};

export default OrganizationContoller;
