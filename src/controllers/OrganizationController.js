import OrganizationModel from '../models/OrganizationModel';

const OrganizationController = {};

OrganizationController.list = (request, response, next) => {
  OrganizationModel.find({}).exec()
    .then(organizations => {
      return response.json(organizations);
    })
    .catch(error => {
      next('Error getting organizations:', error);
    });
};

OrganizationController.create = (request, response, next) => {
  const newOrganization = new OrganizationModel({
    name: request.body.name,
    description: request.body.description,
    imgUrl: request.body.imgUrl,
    url: request.body.url,
    keywords: request.body.keywords
  });

  // save the new organization
  newOrganization.save()
    .then(organization => {
      return response.json(organization);
    })
    .catch(error => {
      next(error);
    });
};

export default OrganizationController;
