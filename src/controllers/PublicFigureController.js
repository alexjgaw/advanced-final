import PublicFigureModel from '../models/PublicFigureModel';

const PublicFigureController = {};

PublicFigureController.list = (request, response, next) => {
  PublicFigureModel.find({}).exec()
    .then(publicFigures => {
      return response.json(publicFigures);
    })
    .catch(error => {
      next('Error getting organizations:', error);
    });
};

PublicFigureController.create = (request, response, next) => {
  const newPublicFigure = new PublicFigureModel({
    name: request.body.name,
    description: request.body.description,
    imgUrl: request.body.imgUrl,
    profileUrl: request.body.profileUrl,
    userName: request.body.userName
  });

  // save the new organization
  newPublicFigure.save()
    .then(publicFigure => {
      return response.json(publicFigure);
    })
    .catch(error => {
      next(error);
    });
};

export default PublicFigureController;
